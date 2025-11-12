const cards = document.querySelectorAll('.card');
const colunas = document.querySelectorAll('.coluna');

let cardAtual = null;

cards.forEach(card => {
  card.addEventListener('dragstart', () => {
    cardAtual = card;
    setTimeout(() => card.classList.add('escondido'), 0);
  });

  card.addEventListener('dragend', () => {
    card.classList.remove('escondido');
    cardAtual = null;
  });
});

colunas.forEach(coluna => {
  coluna.addEventListener('dragover', e => {
    e.preventDefault();
    coluna.classList.add('hover');
  });

  coluna.addEventListener('dragleave', () => {
    coluna.classList.remove('hover');
  });

  coluna.addEventListener('drop', () => {
    coluna.classList.remove('hover');
    if (cardAtual) {
      coluna.appendChild(cardAtual); // move o card para a nova coluna
    }
  });
});
