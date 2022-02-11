import { ButtonsService } from './js/ButtonsService';
import { InputsService } from './js/InputsService';

const addBtn = document.getElementById('addBtn');
const plusBtn = document.getElementById('plusBtn');
const mulBtn = document.getElementById('mulBtn');

addBtn.addEventListener('click', () => {
    new InputsService().add();
});

plusBtn.addEventListener('click', () => {
    new ButtonsService().onSum();
});

mulBtn.addEventListener('click', () => {
    new ButtonsService().onMul();
});

