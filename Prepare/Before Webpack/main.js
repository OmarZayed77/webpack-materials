import { AddService } from './AddService';
import { ButtonsService } from './ButtonsService';

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
