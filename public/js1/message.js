let socket = io();

const conversationId = document.getElementById('conversationId').getAttribute('data-id')

socket.on('newMessage', message => {
    if(message.conversationId == conversationId){
        // console.log(message)
            addMessage(message)
    }
})


$(() =>{

    $('#sendId').on('click', (event)=> {
        event.preventDefault()
        const newMessage = document.getElementById('text').value  
        const userId = document.getElementById('senderId').getAttribute('data-id')
        const postId = document.getElementById('postId').getAttribute('data-id')

        if(newMessage == ''){}
        else{
            socket.emit('sendMessage',{
                text :newMessage,
                conversationId : conversationId,
                sender : userId
            });
            sendMsg({
                text :newMessage,
                conversationId : conversationId,
                sender : userId,
                postId : postId
            })
            document.getElementById('text').value = ''
                 //get message to update
                 getThePreviousMessageAsRead(conversationId).then(result =>{
                    //ge the current and previous sent message then if last message is read then update the field to read

                    updateTheFeildRead(result.getdMessages,userId)
                })
    
        }    
    })
        
    //scroll to the last message dropped
    const scroll = document.querySelector('#messages-container')
    scroll.scrollTop = scroll.scrollHeight
})

const sendMsg = async(data)=>{
    try {
        const res = await fetch('http://localhost:3000/message',{
            method : 'post',
            headers : {'content-type': 'application/json'},
            body : JSON.stringify(data)
        })  
        setConversation(conversationId)
    } catch (error) {
        console.log(error) 
    }   
 }

 const setConversation = async(conversationId)=>{
    try {
        const res = await fetch('http://localhost:3000/conversation/ongoingConversation/'+conversationId,{
            method : 'put',
            headers : {'content-type': 'application/json'},
        })
    } catch (error) {
        console.log(error)
    }
  
 }

//  const checkTrueConversation = async(conversationId)=>{
//     const res = await fetch('http://localhost:3000/conversation/checkconversation/'+conversationId)
//     const result = await res.json()
//     if(!res.checkTrueConv.chatCreated){
        
//     }
//  }

 function addMessage(response){
    const userId = document.getElementById('senderId').getAttribute('data-id')
    const currentUser = document.getElementById('currentUser').getAttribute('data-id')
    const messagesContainer = document.querySelector('#messages-container')
    const messageDiv = document.createElement('div')
    messageDiv.classList ='clearfix message-div '
    if(currentUser == response.sender){messageDiv.classList.add('own')}else{messageDiv.classList.add('message')}
    messageDiv.innerHTML = `<p id="messages">${response.text}</p>
                           <span id="dateCreated" >${response.createdAt ?response.createdAt : Date.now()}</span>`

    messagesContainer.insertBefore(messageDiv,messagesContainer.lastElementChild)
    messagesContainer.scrollTop = messagesContainer.scrollHeight
 }

 const getThePreviousMessageAsRead = async(conversationId)=>{
    const resdata = await fetch(`http://localhost:3000/message/${conversationId}`)
   const resultData = await resdata.json()
   return resultData
 }



 //update the read field to true if the previous sender is different from current sender
 const updateTheFeildRead = async(messages,currentSender) => {
    try {
        let previousSender = null
        messages.forEach( async(message,index)=> {
            if(currentSender!== message.sender){
                //call an API to update the read field 
             const resResponse=   await fetch(`http://localhost:3000/conversation/user/${message._id}`,{
                method : 'put',
                headers :{'content-type':'application/json'}
             })
                const res = await  resResponse.json()
                console.log(res)
            }
        })
    } catch (error) {
        console.log(error)
    }
 

 }
