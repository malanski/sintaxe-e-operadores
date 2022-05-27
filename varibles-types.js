const palimetro = (string) => {
    const word = string.toLowerCase().split('')
    const reverse = word.reverse()
    const contador = word.length -1;

    for ( let i = 0; i < word.length; i++) {
        if (!(word[i] === word[contador - i])) return `À sequencia: ${string} não é palindrom!`
    }
    return `A senquencia: 
        ${string}
    É um palindromo!`;
}

console.log(palimetro("assa ana ama ovo ama ana essa"))