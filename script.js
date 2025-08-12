const frases = [
  "Acredite em si mesmo e todo o resto virá.",
  "O sucesso é a soma de pequenos esforços repetidos diariamente.",
  "A persistência realiza o impossível.",
  "Você é mais forte do que imagina.",
  "Grandes coisas nunca vêm de zonas de conforto.",
  "Cada dia é uma nova chance para mudar sua vida.",
  "A disciplina é a ponte entre objetivos e realizações.",
  "Não tenha medo de recomeçar, é uma nova oportunidade de fazer melhor."
];

function carregarFrase() {
  const frase = frases[Math.floor(Math.random() * frases.length)];
  document.getElementById("frase").textContent = frase;
}

// Carrega uma frase ao abrir a página
window.onload = carregarFrase;
