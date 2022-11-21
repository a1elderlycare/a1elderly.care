
// ==================
// #region Email Form
// ==================
const submitButton = document.querySelector('#send-email');
const emailSenderInput = document.querySelector('#email');
const nameInput = document.querySelector('#name');
const messageInput = document.querySelector('#message');

submitButton.addEventListener('click', e => {
  e.preventDefault();
  let href = 'mailto:contact@a1elderly.care'

  // set the email address to be the sender's email address
  href += `?cc=${encodeURIComponent(emailSenderInput.value)}`;

  // set the subject to be the sender's name
  href += `&subject=${encodeURIComponent(nameInput.value)} message from a1elderly.care`

  // set the body to be the message
  href += `&body=${encodeURIComponent(messageInput.value)}`

  // open the email client
  window.location.href = href;
});
// #endregion

// =========================
// #region Full Screen Modal
// =========================
const fsModal = document.querySelector('#full-screen-modal');
const fullscreenables = document.querySelectorAll('.fullscreenable');
let currentContentIndex;

fsModal.addEventListener('click', e => {
  e.preventDefault();
  fsModal.classList.toggle('active');
});

document.addEventListener('keydown', e => {
  if (!fsModal.classList.contains('active')) return;
  const max = fullscreenables.length;
  switch (e.key) {
    case 'Escape':
      fsModal.classList.remove('active');
      return;
    case 'ArrowDown':
    case 'ArrowLeft':
      currentContentIndex = (max - (currentContentIndex - 1)) % max;
      break;
    case 'ArrowUp':
    case 'ArrowRight':
      currentContentIndex = (currentContentIndex + 1) % max;
      break;
  }
  fullscreenables[currentContentIndex].scrollIntoView({ behavior: 'smooth' });
  fsModal.innerHTML = fullscreenables[currentContentIndex].outerHTML;
});

fullscreenables.forEach((fullscreenable, i) => {
  fullscreenable.addEventListener('click', e => {
    e.preventDefault();
    currentContentIndex = i;
    fsModal.classList.toggle('active');
    fsModal.innerHTML = fullscreenable.outerHTML;
  });
});
// #endregion
