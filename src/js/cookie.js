function setCookie(nome, valor, dias) {
    let dataExpiracao = "";

    if (dias) {
        const data = new Date();
        data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000)); // Define a expiração em 'dias' a partir de agora
        dataExpiracao = "; expires=" + data.toUTCString();
    }

    // Define o cookie com nome, valor e a data de expiração
    document.cookie = nome + "=" + encodeURIComponent(valor) + dataExpiracao + "; path=/";
}

function getCookie(nome) {
    const nomeIgual = nome + "=";
    const cookies = document.cookie.split(';');

    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.startsWith(nomeIgual)) {
            return decodeURIComponent(cookie.substring(nomeIgual.length));
        }
    }

    return null; // Retorna null se o cookie não for encontrado
}

function deleteCookie(nome) {
    // Define o valor do cookie como vazio e a data de expiração para uma data no passado
    document.cookie = nome + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}


export { setCookie, getCookie, deleteCookie };