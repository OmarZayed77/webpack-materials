export function getNumbers(numbersInputs) {
    const numbers = [];
    for (let index = 0; index < numbersInputs.length; index++) {
        numbers.push(numbersInputs[index].value);
    }
    return numbers.map(num => +num);
}

