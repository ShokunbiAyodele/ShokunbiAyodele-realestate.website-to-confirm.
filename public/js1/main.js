
//create User
document.addEventListener('submit', submitForm)




function submitForm(e){
    e.preventDefault()
    let firstName = document.querySelector('#first_name').value
    let middleName = document.querySelector('#middle_name').value
    let lastName = document.querySelector('#last_name').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    let password_confirm = document.querySelector('#password_confirm').value
    
    //check for password lenght
    if(password.length < 8){
          //alert user for password missmatch
          document.getElementById("password").placeholder = 'password does not match'
          document.getElementById("check_password_length").textContent = 'password must be more than 8 characters' 
          document.getElementById("check_password_length").style.color = 'red' 

          //reset the password 
          document.getElementById("password_confirm").value = ""
          document.getElementById("password").value = ""
            
    }//check for password match
    else{
        if(password !== password_confirm){
            document.getElementById("password_confirm").value = ""
            //alert user for password missmatch
            document.getElementById("password_confirm").placeholder = 'password does not match'
            document.getElementById("check_match").textContent = 'password does not match' 
            document.getElementById("check_match").style.color = 'red' 
        }
    }
   


    //check for password match
    if(password !== password_confirm){
        document.getElementById("password_confirm").value = ""
        
        //alert user for password missmatch
        document.getElementById("password_confirm").placeholder = 'password does not match'
        document.getElementById("check_match").textContent = 'password does not match' 
        document.getElementById("check_match").style.color = 'red' 
    }else{
         //file handler 2
         if(firstName === '' || middleName ==='' || lastName === '' || email ==='' || password ==='' ){
             alert('all field must be filled')
         }
         else{
            // let fileUpload =  document.querySelector('#fileUpload')
            // let formData = new FormData();           
            // formData.append("fileupload", fileUpload.files[0]);
            const data = {
                "firstName" : firstName,
                "middleName" : middleName,
                "lastName" : lastName,
                "email"  : email,
                "password" : password,
            }
            //send data to sign up user
          const response = signUpUser("/signup",data)
          response.then(result => {
              location.reload()
          }).catch(error=> console.log(error))

         }

    }
}

 async function signUpUser(url,data){
     try {
        const sendPost = await fetch(url, {
            method : "POST",
            headers : {"Content-type" : "application/json"},
            body : JSON.stringify(data)
        })
    
        const res = await sendPost.json()
        return res
     } catch (error) {
         console.log(error)
     }
  
}




function alertBrowser(message,classNames){
    // create Element
  const div =  document.createElement('div')
  div.classList =`alert alert-${classNames}`
  div.appendChild(document.createTextNode(message))

  //get a p element 
  const pElement = document.querySelector('.lead')

  //get a section element 
  const section = document.querySelector('.login-container')
  section.insertBefore(div,pElement)

}




