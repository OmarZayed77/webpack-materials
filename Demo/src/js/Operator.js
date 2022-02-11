import { Calculator } from './Claculator';
import { getNumbers } from './getNumbers';

export class Operator {
    constructor() {
        this.numbersInputs = document.getElementsByClassName('number');
        this.result = document.getElementById('result');
        this.calculator = new Calculator();
    }

    sumOperation() {
        const numbers = getNumbers(this.numbersInputs);
        const result = this.calculator.sum(numbers);
        this.result.innerText = result;
    }

    mulOperation() {
        const numbers = getNumbers(this.numbersInputs);
        const result = this.calculator.mul(numbers);
        this.result.innerText = result;
    }
}