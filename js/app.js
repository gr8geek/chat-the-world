//Authenticate
console.log("Mango")
let state=null;//global state
document.addEventListener('DOMContentLoaded',()=>{
    const side = document.getElementById("side")
    const msg = document.getElementById("msg")
    const br="<br>"
    const send = document.getElementById("send")
    const input = document.getElementById("inp-usr")
    window.addEventListener('keydown',(event)=>{
      var keyval=event.key
      //console.log(keyval)
      //console.log(input.hasFocus())
      if(keyval==='Enter'&& input === document.activeElement){
        if(input.value!=null){
          //initiate sending
          console.log('Sending')

          msg.innerHTML+=` <div class="row  l5 m5 yellow" style="margin-top: 1%;align-items: baseline;text-align: right;">${input.value}</div>`
          input.value=""
          
        }
  
      }
    })
    send.addEventListener('click',(event)=>{
      msg.innerHTML+=` <div class="row  l5 m5 yellow" style="margin-top: 1%;align-items: baseline;text-align: right;">${input.value}</div>`
      input.value=""

    })
    function onrecv(message){
      msg.innerHTML+=` <div class="row  l5 m5 light-green " style="margin-top: 1%;align-items: baseline;text-align: left;">${"sample text"}</div>
      `
    }
    console.log("Loaded!")
    const authNew =(email,password)=>{
        firebase.auth().createUserWithEmailAndPassword(email, password).then(ob=>{
            state=true;
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            state=false;
            // ...
          });     
    }
    const signIn=(email,password)=>{
        //console.log()
        firebase.auth().signInWithEmailAndPassword(email, password).then(ob=>{
            state=true;
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            state=false;
            // ...
          });
          
    }
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          // ...
        }
      });
 
})
