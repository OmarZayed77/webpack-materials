export function getNumbers(numbersInputs) {
    const numbers = [];
    for (let i = 0; i < numbersInputs.length; i++) {
        numbers.push(numbersInputs[i].value);
    }
    return numbers.map(Number);
}