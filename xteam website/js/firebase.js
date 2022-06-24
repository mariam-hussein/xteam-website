const signIn = document.getElementById("signIn");
const index_page = document.getElementById("index_page");
const sec_forms = document.getElementById("sec_forms");

signIn.addEventListener("click", func_sign_in);

function func_sign_in() {
  index_page.style.display = "none";
  sec_forms.style.display = "block";
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBwjTSiSaLYudDzm2DhSqKKh5u4mpjkOQ8",
    authDomain: "company-website-6dcb9.firebaseapp.com",
    projectId: "company-website-6dcb9",
    storageBucket: "company-website-6dcb9.appspot.com",
    messagingSenderId: "425236107371",
    appId: "1:425236107371:web:3de673426b03268d12e12e",
    measurementId: "G-QRVEJEE3DW"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("reg-btn").addEventListener("click", function () {
  document.getElementById("login-div").style.display = "none";
  document.getElementById("register-div").style.display = "block";
});

document.getElementById("login-btn").addEventListener("click", function () {
  const loginEmail = document.getElementById("login-email").value;
  const loginPassword = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Welcome Back \n" + loginEmail + " was Login Successfully");
      sec_forms.style.display = 'none';
   
		signIn.setAttribute( 'style', 'display: none !important;' );
    document.getElementById('log-out-btn').setAttribute('style', 'display: block !important')
    index_page.style.display = 'block';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById("login-div").style.display = "none";
      document.getElementById("result-box").style.display = "inline";
      document.getElementById("result").innerHTML =
        "Sorry ! <br>" + errorMessage;
    });
});

document.getElementById("register-btn").addEventListener("click", function () {
  const registerEmail = document.getElementById("register-email").value;
  const registerPassword = document.getElementById("register-password").value;

  createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    sec_forms.style.display = "none";
    signIn.setAttribute( 'style', 'display: none !important;' );
    document.getElementById('log-out-btn').setAttribute('style', 'display: block !important')
    index_page.style.display = 'block';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById("result-box").style.display = "inline";
      document.getElementById("register-div").style.display = "none";
      document.getElementById("result").innerHTML =
        "Sorry ! <br>" + errorMessage;
    });
});


document.getElementById("log-out-btn").addEventListener('click', function(){
    signOut(auth).then(() => {
        console.log('gggggg');
        signIn.setAttribute( 'style', 'display: block !important;' );
    document.getElementById('log-out-btn').setAttribute('style', 'display: none !important')
    index_page.style.display = 'block';
        
    }).catch((error) => {
       document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
    });
  
});
