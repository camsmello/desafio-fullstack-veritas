const cards = document.querySelectorAll('.card');
const colunas = document.querySelectorAll('.coluna');

let cardAtual = null;

// Quando o usuário começa a arrastar
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

// Eventos nas colunas (onde o card pode cair)
colunas.forEach(coluna => {
  coluna.addEventListener('dragover', e => {
    e.preventDefault(); // permite soltar o card
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
