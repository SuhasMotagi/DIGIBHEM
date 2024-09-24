function sendEmail() {
  const name = document.getElementById('names').value;
  const email = document.getElementById('emails').value;
  const message = document.getElementById('message').value;

  // Ensure all fields are filled
  if (!names || !emails || !message) {
      alert("Please fill in all fields.");
      return;
  }

  // EmailJS service
  emailjs.send("service_73zqrio", "template_4sdqlzo", {
      from_name: name,
      from_email: email,
      message: message,
  })
  .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert("Your message has been sent successfully!");
      // Clear the form fields
      document.getElementById('names').value = '';
      document.getElementById('emails').value = '';
      document.getElementById('message').value = '';
  }, (error) => {
      console.error('FAILED...', error);
      alert("There was an error sending your message. Please try again.");
  });
}
