export class InputsService {
    constructor() {
        this.numbers = document.querySelector('.numbers');
    }
    add() {
        const number = document.createElement('input');
        number.setAttribute('type', 'number');
        number.setAttribute('class', 'number');
        this.numbers.append(number);
    }
}