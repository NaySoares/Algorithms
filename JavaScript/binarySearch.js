function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // alvo encontrado
        } else if (arr[mid] < target) {
            console.log(`Buscando na metade direita: ${arr[mid + 1]} a ${arr[right]}`);
            left = mid + 1; // Buscar na direita
        } else {
            console.log(`Buscando na metade esquerda: ${arr[left]} a ${arr[mid - 1]}`);
            right = mid - 1; // Buscar na esquerda
        }
    }

    return -1; // Retorno se não encontrar
}

const numbers = Array.from({ length: 1000 }, (_, i) => i + 1);
const target = numbers[Math.floor(Math.random() * numbers.length)];
const result = binarySearch(numbers, target);

if (result !== -1) {
    console.log(`Alvo ${target} encontrado na posição: ${result}`);
} else {
    console.log(`Alvo ${target} não encontrado.`);
}