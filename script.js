document.querySelector('.signup')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  button.textContent = 'Cadastro recebido';
  button.disabled = true;
});
