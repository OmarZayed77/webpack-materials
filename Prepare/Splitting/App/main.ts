import { AddService } from './js/AddService';
import { ButtonsService } from './js/ButtonsService';
import "bootstrap/dist/css/bootstrap.css"
import './style.css';

const addBtn = document.getElementById('add');
const sumBtn = document.getElementById('sum');
const mulBtn = document.getElementById('multiply');
const addService = new AddService();
const buttonsService = new ButtonsService();

addBtn.addEventListener('click', () => {
    addService.add();
});

sumBtn.addEventListener('click', () => {
    buttonsService.onSum();
});

mulBtn.addEventListener('click', () => {
    buttonsService.onMultiply();
});

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): void {
    // ...
}

let mySquare = createSquare({ color: "red", width: 100 });

console.log(mySquare);
