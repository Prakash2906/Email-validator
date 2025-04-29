function validateEmail() {
    const emailInput = document.getElementById("email");
    const message = document.getElementById("message");
    const submitBtn = document.getElementById("submitBtn");
  
    const email = emailInput.value;
    const emailRegex = /^[a-z0-9][^\s@]*@[^\s@]+\.[^\s@]+$/;
  
    if (email === "") {
      message.textContent = "";
      emailInput.classList.remove("valid", "invalid");
      submitBtn.disabled = true;
    } else if (emailRegex.test(email)) {
      message.textContent = "✅ Valid Email Address";
      message.style.color = "#00ff8c";
      emailInput.classList.add("valid");
      emailInput.classList.remove("invalid");
      submitBtn.disabled = false;
    } else {
      message.textContent = "❌ Invalid Email Address";
      message.style.color = "#ff4b5c";
      emailInput.classList.add("invalid");
      emailInput.classList.remove("valid");
      submitBtn.disabled = true;
    }
  }
  
  function submitEmail() {
    const message = document.getElementById("message");
    message.textContent = "🎉 Email Submitted Successfully!";
    message.style.color = "#00ff8c";
    message.classList.add("success");
  
    // Clear after 2 seconds
    setTimeout(() => {
      document.getElementById("email").value = "";
      document.getElementById("email").classList.remove("valid");
      document.getElementById("submitBtn").disabled = true;
      message.textContent = "";
      message.classList.remove("success");
    }, 2000);
  }
 