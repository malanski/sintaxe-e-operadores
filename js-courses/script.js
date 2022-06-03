const numbersCompare = (number1, number2) => {
    const iguais = (number1 === number2) ? 'são iguais': 'não são iguais';

    return iguais;
}

const maiorQueDez = (number1, number2) => {
    const soma = sumTwoNumbers(number1, number2);
    const maiorQue10 = (soma > 10) ? 'é maior que 10' : 'não é maior que 10';

    return maiorQue10;
}

const menorQuevinte = (number1, number2) => {
    const soma = sumTwoNumbers(number1, number2);
    const menorQue20 = (soma < 20) ? 'é menor que 20' : 'não é menor 20';

    return menorQue20;
}

const sumTwoNumbers = (number1, number2) => {
    return number1 + number2
}

const formatResponse = (number1, number2) => {
    const soma = sumTwoNumbers(number1, number2)
    const iguais = numbersCompare(number1, number2);
    const maiorQue10 = maiorQueDez(number1, number2)
    const menorQue20 = menorQuevinte(number1, number2)

    return `Os números ${number1} e ${number2} ${iguais}. Sua soma é ${soma}, que ${maiorQue10} e ${menorQue20}.`
}

console.log(formatResponse(5, 3));