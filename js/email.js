function sendMail() {
    // Get input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Validate inputs
    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields");
        return;
    }

    // Create parameters object
    var params = {
        name: name,
        email: email,
        subject: subject,
        message: message,
    };

    // EmailJS configuration
    const serviceId = "service_c88wscn";
    const templateId = "template_z0t74km";

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, params)
        .then((res) => {
            // Clear form fields
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";

            // Log and alert success
            console.log(res);
            alert("Your Message sent successfully!");
        })
        .catch((err) => {
            // Log and alert error
            console.log(err);
            alert("An error occurred while sending the message. Please try again later.");
        });
}
