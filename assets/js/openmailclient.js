function sendEmail() {
    console.log("sending email ...");

    var messageText = document.getElementById('message').value;
    var emailAddress = 'trevor.gravely@vanderbilt.edu'; // Replace with the desired email address
    var subject = 'Email from website';
    var body = 'Message content';
    var mailtoLink = 'mailto:' + emailAddress + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.location.href = mailtoLink;
}