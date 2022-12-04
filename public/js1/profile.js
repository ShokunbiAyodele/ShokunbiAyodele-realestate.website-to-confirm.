$("#clicktoTriger1").click(function () {
    $("#govtIssueId").trigger('click');
});
 $("#selfiePictureTrigger").click(function () {
    $("#selfie_Picture").trigger('click');
}); 
 $("#cacDocumentTrigger").click(function () {
    $("#cacDocument").trigger('click');
});

$("#triggerLogo").click(function (e) {
  $("#userlogo").trigger('click');

  $('#userlogo').change(sendProfilePicture);

async function sendProfilePicture() {
  $('#logoform').submit();

  try {
      const file = document.getElementById('userlogo').files[0];
      const formData = new FormData()
      formData.append('userLogo', file)
      const sendFile = await fetch('/update/profilePicture', {
          method : "POST",
          body : formData
      })
      const response = await sendFile.json()
      if(response ==="success"){
          location.reload()
      }
      
  } catch (error) {
      console.log(error)
      
  }
}
});


document.getElementById('getUrl').addEventListener('click', function(){
const websiteValue =  document.querySelector('#personalUrl').innerText
let beforePeriodString = websiteValue.substring(0, websiteValue.indexOf('.'))
document.querySelector('#websiteurl').value = beforePeriodString
})



//send a request to server to update personal url
let button = document.querySelector('#updateDomain')
button.addEventListener('click',sendUpdateRequest)
async function sendUpdateRequest(event){
const domain = document.querySelector('#websiteurl')
 event.preventDefault()
 
 //remove space and period character
let checkUrlDotandSpace =domain.value.replace(/\s+/g, '').split('.').join('').toLowerCase()
const update =await fetch('/update/domainName?_method=PUT',{
    method: 'POST',
    headers : {'Content-Type': 'Application/json'},
    body : JSON.stringify({'domainName': checkUrlDotandSpace})
  })
  button.value = '..submiting'
  const res = await update.json()
  if(res){
    //create a paragraph
    let Paragraph = document.createElement('p')
    Paragraph.style.color= 'green'
    Paragraph.innerText= 'updated successfully'
    const successHolder = document.getElementById('successHolder')
    successHolder.appendChild(Paragraph)
    const formId = document.querySelector('#formId')
    const modalId = document.getElementById('modald')
    formId.insertBefore(modalId,successHolder)
    button.value = 'submit'
    location.reload()

  }
}

uploadOfficialDoc('govtIssueId','#govt_id','govtId')
uploadOfficialDoc('selfie_Picture','#selfPicture','selfiePic')
uploadOfficialDoc('cacDocument','#cacDoc','businessCAC')

 function uploadOfficialDoc(fileId,labelid,uploadFileName){
        document.getElementById(fileId).addEventListener('change', updateDocument)

        async function updateDocument(){
            try {
                let getText
                let labelID = document.querySelector(labelid)
                if(labelID.textContent.indexOf(':')!== 1){
                 getText = labelID.textContent.slice(0,labelID.textContent.indexOf(':')+1)
                }
                const file = this.files[0]
             labelID.textContent = getText+file.name

             if(uploadFileName === 'govtId'){
                 const formdata = new FormData()
                 formdata.append(uploadFileName,file)
               const data =await fetch('/governmentDoc?_method=PUT',{
                method : 'POST',
                body : formdata 
            })
            let response  = await data.json()
            if(response){
            let success = ' SUCCESS '
          let output =  [labelID.textContent.slice(0,9),success,labelID.textContent.slice(9)].join('')
          labelID.textContent = output
            
            }

             }
             else if(uploadFileName ==='selfiePic'){
                const formdata = new FormData()
                formdata.append(uploadFileName,file)
              const data =await fetch('/uploadselfie?_method=PUT',{
               method : 'POST',
               body : formdata 
           })
           let response  = await data.json()
           if(response){
            let success = ' SUCCESS '
          let output =  [labelID.textContent.slice(0,15),success,labelID.textContent.slice(15)].join('')
          // labelID.textContent = ''
          labelID.textContent = output
            
            }

             }
             else{
                const formdata = new FormData()
                formdata.append(uploadFileName,file)
              const data =await fetch('/uploadBusinesscac?_method=PUT',{
               method : 'POST',
               body : formdata 
           })
           let response  = await data.json()
           if(response){
            let success = ' SUCCESS '
          let output =  [labelID.textContent.slice(0,22),success,labelID.textContent.slice(22)].join('')
          // labelID.textContent = ''
          labelID.textContent = output
            
            }
          //  labelID.textContent = ''
             }
            } catch (error) {
                console.log(error)
            }

        }



            
        
}