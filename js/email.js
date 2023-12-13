function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill out all required fields.");
        return;
    }

    var params = {
        name: name,
        email: email,
        subject: subject,
        message: message,
    };


const serviceId = "service_c88wscn"
const templateId = "template_z0t74km"
emailjs.send(serviceId, templateId, params).then((res) => {
        document.getElementById("name").value = "",
            document.getElementById("email").value = "",
            document.getElementById("subject").value = "",
            document.getElementById("message").value = "",
            console.log(res);
        alert("Your Message sent successfully!");
    })
    .catch((err) => console.log(err));
}