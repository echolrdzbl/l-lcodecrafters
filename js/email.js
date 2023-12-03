function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var data = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    fetch('sendEmail.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        console.log('Response status:', response.status);
        if (response.status === 200) {
            // Assuming 200 status code means success
            console.log('Success: Email sent successfully!');
            alert("Email sent successfully!");
        } else {
            console.log('Error: Unexpected status code:', response.status);
            alert("Error sending email. Please try again later.");
        }
    })
    
    .catch((error) => {
        console.error('Error:', error);
        // Handle error, for example, show an error message to the user
        alert("Error sending message. Please try again later.");
    });
}
