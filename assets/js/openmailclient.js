function sendEmail() {
    console.log("sending email ...");

    var messageText = document.getElementById('message').value;
    var emailAddress = 'alupsasca@gmail.com'; // Replace with the desired email address
    var body = messageText;
    var mailtoLink = 'mailto:' + emailAddress + '?body=' + encodeURIComponent(body);

    window.location.href = mailtoLink;
}