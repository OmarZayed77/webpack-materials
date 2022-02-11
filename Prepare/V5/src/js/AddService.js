export class AddService {
    constructor() {
        this.numbers = document.getElementById('numbers');
    }

    add() {
        const newInput = document.createElement('input');
        newInput.setAttribute('type', 'number');
        newInput.setAttribute('class', 'number');
        this.numbers.append(newInput);
    }
}
