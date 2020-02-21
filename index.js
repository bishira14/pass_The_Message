let messageInput = document.querySelector('#theInput');
let theButton = document.querySelector('button');
let messageOutput = document.querySelector('#theOutput');

theButton.addEventListener('click', function(){
  if(messageInput.value == ""){
    alert('enter in text')
  }else{
    messageOutput.innerHTML = messageInput.value;
    messageInput.value = '';
  }

})
