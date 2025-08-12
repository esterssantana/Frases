// Lista de gradientes para fundo
const coresFundo = [
    "linear-gradient(to right, #ff7e5f, #feb47b)",
    "linear-gradient(to right, #43cea2, #185a9d)",
    "linear-gradient(to right, #ff4b1f, #1fddff)",
    "linear-gradient(to right, #00b09b, #96c93d)",
    "linear-gradient(to right, #ff512f, #dd2476)",
    "linear-gradient(to right, #6a11cb, #2575fc)",
    "linear-gradient(to right, #f7971e, #ffd200)"
];

// Função para buscar frase e traduzir
async function buscarFrase() {
    try {
        // Pega frase aleatória (em inglês)
        const resposta = await fetch("https://api.quotable.io/random");
        const dados = await resposta.json();
        const fraseOriginal = dados.content;

        // Traduz usando API MyMemory
        const traducaoResp = await fetch(https://api.mymemory.translated.net/get?q=${encodeURIComponent(fraseOriginal)}&langpair=en|pt);
        const traducaoDados = await traducaoResp.json();
        const fraseTraduzida = traducaoDados.responseData.translatedText;

        return fraseTraduzida || fraseOriginal;
    } catch (erro) {
        console.error("Erro ao buscar frase:", erro);
        return "Erro de conexão. Tente novamente.";
    }
}

async function novaFrase() {
    const quoteElement = document.getElementById("quote");

    // Efeito fade-out
    quoteElement.classList.add("fade-out");

    setTimeout(async () => {
        // Pega frase e traduz
        const frase = await buscarFrase();
        quoteElement.textContent = frase;

        // Troca fundo
        const corIndex = Math.floor(Math.random() * coresFundo.length);
        document.body.style.background = coresFundo[corIndex];

        // Efeito fade-in
        quoteElement.classList.remove("fade-out");
    }, 500);
}

function compartilharFacebook() {
    const frase = document.getElementById("quote").textContent;
    const url = https://www.facebook.com/sharer/sharer.php?u=&quote=${encodeURIComponent(frase)};
    window.open(url, "_blank");
}

function compartilharWhatsApp() {
    const frase = document.getElementById("quote").textContent;
    const url = https://api.whatsapp.com/send?text=${encodeURIComponent(frase)};
    window.open(url, "_blank");
}

// Carrega primeira frase ao abrir
novaFrase();