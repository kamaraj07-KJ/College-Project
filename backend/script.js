document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const 
    errorMsg = document.getElementById("error-msg");
  
    if (!username || !password) {
      errorMsg.textContent = "Please enter both username and password.";
      return;
    }
  
    // Simulate login success (replace with real authentication logic)
    if (username === "admin" && password === "admin123") {
      alert("Login successful!");
      errorMsg.textContent = "";
      // Redirect or load another page
    } 
    else if (username === "user" && password === "user123") {
      alert("Login successful!");
      errorMsg.textContent = "";
      // Redirect or load another page
    }
    else {
      errorMsg.textContent = "Invalid username or password.";
    }
  });
  