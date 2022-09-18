//login user
// document.getElementById('login').addEventListener('submit',loginUserFunction)


// async function loginUserFunction(){

//     let email = document.querySelector('#email').value
//     let password = document.querySelector('#password').value
//     // if(email === '' && password === ''){
//     //     alert('field cannot be empty')
//     // }'
//     try {
//         const User = await fetch('/login', {
//             method : "POST",
//             headers : {"Content-Type" : "application/json"},
//             body : JSON.stringify({
//                 "email"  : email,
//                 "password" : password,
//             }),
//         })
//         const response = await User.json()
//         console.log(response)
//         location.reload()
//     } catch (error) {
//         console.log(error)
//     }
// }