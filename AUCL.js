console.log("Starting 1"); 
document.addEventListener("DOMContentLoaded", function () {
    console.log("Starting 2");
    console.log();
    document.body.innerHTML = `
  <div style="max-width: 400px; margin: 50px auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; background-color: #f9f9f9;">
    <h2 style="text-align: center;">Login</h2>
    <form id="loginForm">
      <div style="margin-bottom: 20px;">
        <label for="email" style="display: block; font-weight: bold;">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" style="width: 100%; padding: 10px; border-radius: 4px; border: 1px solid #ccc;" required>
      </div>
      <div style="text-align: center;">
        <button type="submit" style="padding: 10px 20px; background-color: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">Login</button>
      </div>
    </form>
  </div>
`
});

// Add event listener to handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way

  const email = document.getElementById('email').value;
  console.log("Email is: "+email);
  const screenProvider = new ScreenProvider();

  screenProvider.login({ username: email });
});
