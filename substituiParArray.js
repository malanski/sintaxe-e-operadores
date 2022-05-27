const substituiParArray = (array) => {

    // Quando array for vazio, retorne um array com o numero - 1
        
    if (array.length === 0) {
            array[0] = -1
            return array
        }

    // Verificar numeros pares no array e substituir por Zero

    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 == 0) {
            array[i] = 0
            
        }
    }
    return array 

}

console.log(substituiParArray([0,1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20]))