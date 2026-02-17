document.querySelector('.signup')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  button.textContent = 'Pré-registro confirmado!';
  button.disabled = true;
});
