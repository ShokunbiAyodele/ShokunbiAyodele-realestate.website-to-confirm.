

// document.querySelector('#form').addEventListener('submit', submitForm)


// async function submitForm(e){
// e.preventDefault()


// const formData = new FormData(e.target);
// let formProps = Object.fromEntries(formData);
// console.log(formProps)


// const sendData = await fetch('/signup?type=user', {
//     method : "POST",
//     headers : {"Content-Type" : "Application/json"},
//     body : JSON.stringify(formProps)
// })

// }

let elements = document.querySelectorAll('input[name=type]')

Array.from(elements).forEach(element=> {
    element.addEventListener('click', changeCheched)
})


function changeCheched(e){
    if(this.value === 'USER'){
        this.checked = true
    }else{
        this.checked = true
    }

    // this.checked = false
}




// for (i=0;i<elements.length;i++) {
//   if(elements[i].value == "USER") {
//     elements[i].checked = true;
//   }else if(elements[i].value == "AGENT"){
//     elements[i].checked = true; 
//   }
// }


