alert('Improve your Wi-Fi speed to 100Mb per second');
const password = document.querySelector('.pass');
const image = document.querySelector('.shou');
function changeType() {
  if (password.value.length >= 1) {
    image.src = 'download-5.png';
  }
}
function veiwPass() {
  if (password.type === 'password') {
    password.type = 'text';
    image.src = 'images-4.jpeg';
  } else if (password.type === 'text') {
    password.type = 'password';
    image.src = 'download-5.png';
  }
}
