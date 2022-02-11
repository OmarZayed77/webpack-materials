export class AddService {
    constructor() {
        this.numbersContainer = document.getElementById('numbers');
    }

    addAnotherNumber() {
        const numInupt = document.createElement('input');
        numInupt.setAttribute('type', 'number');
        numInupt.setAttribute('class', 'number');
        this.numbersContainer.append(numInupt);
    }
}