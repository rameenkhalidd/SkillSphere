import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
    import {
      getFirestore,
      collection,
      doc,
      setDoc,
      getDoc
    } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
    import {
      getAuth,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      sendPasswordResetEmail
    } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

    const firebaseConfig = {
      apiKey: "AIzaSyA26U2oYNBRVnmj4iA4sCMlFOcRZRsbEY4",
      authDomain: "skill-sphere-73359.firebaseapp.com",
      projectId: "skill-sphere-73359",
      storageBucket: "skill-sphere-73359.firebasestorage.app",
      messagingSenderId: "238566149602",
      appId: "1:238566149602:web:f1f3fda8f9330c197abdbb"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);

    const signUpForm = document.getElementById("signUpForm");
    const signInForm = document.getElementById("signInForm");
    const messageDiv = document.getElementById("message");
    const forgotPasswordLink = document.getElementById("forgotPassword");

    function showMessage(msg, isError = false) {
      messageDiv.textContent = msg;
      messageDiv.style.color = isError ? "red" : "green";
    }



    // Sign Up
    signUpForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      showMessage("");

      
      const email = signUpForm.signUpEmail.value.trim();
      const password = signUpForm.signUpPassword.value;

      if ( !email || !password) {
        showMessage("Please fill all fields.", true);
        return;
      }

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
          email: email
        });

        showMessage("Sign-up successful! You can now sign in.");
        signUpForm.reset();
      } catch (error) {
        showMessage("Error: " + error.message, true);
      }
    });

    // Sign In
    signInForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      showMessage("");

      const email = signInForm.signInEmail.value.trim();
      const password = signInForm.signInPassword.value;

      if (!email || !password) {
        showMessage("Please fill all fields.", true);
        return;
      }

      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (!userDoc.exists()) {
          showMessage("No profile found. Please sign up first.", true);
          return;
        }

        const userData = userDoc.data();
        showMessage("Welcome back, ${userData.name}! You are signed in.");
        signInForm.reset();
      } catch (error) {
        showMessage("Error: " + error.message, true);
      }
    });