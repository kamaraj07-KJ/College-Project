document.getElementById("registerForm").addEventListener("submit", async function(e) {
    e.preventDefault();
  
    const username = document.getElementById("reg-username").value.trim();
    const password = document.getElementById("reg-password").value.trim();
    const msg = document.getElementById("reg-msg");
  
    try {
      const res = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await res.json();
  
      msg.style.color = data.success ? "green" : "red";
      msg.textContent = data.message;
    } catch (error) {
      console.error("Error:", error);
      msg.textContent = "An error occurred while creating the account.";
    }
  });
  