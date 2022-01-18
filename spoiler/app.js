const btn = document.querySelector('#myBtn');
const spoiler = document.querySelector('#spoiler');
btn.addEventListener('click', toggleSpoiler);

function toggleSpoiler() {
  spoiler.classList.toggle('closed');
  if (spoiler.classList.contains('closed') === false) {
    document.addEventListener('keydown', escingSpoiler);
  }
}

function escingSpoiler(event) {
  if (event.key === 'Escape') {
    spoiler.classList.add('closed');
    document.removeEventListener('keydown', escingSpoiler);
  }
}