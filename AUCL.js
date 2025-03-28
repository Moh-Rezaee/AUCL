document.addEventListener("DOMContentLoaded", function () {
    // Create a form element
    const form = document.createElement("form");
    form.setAttribute("id", "loginForm");
    form.setAttribute("style", "width: 300px; margin: 20px auto; text-align: center; font-family: Arial, sans-serif;");

    // Create an email input field
    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "email");
    emailInput.setAttribute("name", "email");
    emailInput.setAttribute("placeholder", "Enter your email");
    emailInput.setAttribute("required", true);
    emailInput.setAttribute("style", "width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 5px;");

    // Create a submit button
    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Login";
    submitButton.setAttribute("style", "width: 100%; padding: 10px; background-color: #007BFF; color: white; border: none; border-radius: 5px; cursor: pointer;");
    
    // Append elements to form
    form.appendChild(emailInput);
    form.appendChild(submitButton);

    // Append form to body
    document.body.appendChild(form);

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Email entered: " + emailInput.value);
    });
});
