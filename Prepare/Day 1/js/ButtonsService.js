import { getNumbers } from './getNumbers';
import { Math } from './Math';

export class ButtonsService {
    constructor() {
        this.numbers = document.querySelectorAll('.number');
        this.result = document.getElementById('result');
        this.math = new Math();

    }
    onSum() {
        const numbers = getNumbers(this.numbers);
        this.result.innerText = this.math.sum(numbers);
    }
    onMul() {
        const numbers = getNumbers(this.numbers);
        this.result.innerText = this.math.mul(numbers);
    }
}