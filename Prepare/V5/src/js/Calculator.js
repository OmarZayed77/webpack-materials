import { Math } from './Math';
import { getNumbers } from './getNumbers';

export class Calculator {
    constructor() {
        this.numbersInputs = document.getElementsByClassName('number');
        this.result = document.getElementById('result');
        this.math = new Math();
    }

    calcSum() {
        const numbers = getNumbers(this.numbersInputs);
        const res = this.math.sum(numbers);
        this.result.innerText = res;
    } 

    calcMul() {
        const numbers = getNumbers(this.numbersInputs);
        const res = this.math.mul(numbers);
        this.result.innerText = res;
    } 
}