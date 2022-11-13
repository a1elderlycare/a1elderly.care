
const submitButton = document.querySelector('#send-email');
const emailSenderInput = document.querySelector('#email');
const nameInput = document.querySelector('#name');
const messageInput = document.querySelector('#message');

submitButton.addEventListener('click', e => {
  e.preventDefault();
  let href = 'mailto:contact@a1elderly.care'

  // set the email address to be the sender's email address
  href += `?cc=${emailSenderInput.value}`

  // set the subject to be the sender's name
  href += `&subject=${nameInput.value} message from a1elderly.care`

  // set the body to be the message
  href += `&body=${messageInput.value}`

  // open the email client
  window.location.href = href;
});
