import { Operator } from './js/Operator';
import { AddService } from './js/AddService';

import './test.ts';
import './style.css';
import './main.scss';

const addBtn = document.getElementById('addBtn');
const sumBtn = document.getElementById('sumBtn');
const mulBtn = document.getElementById('mulBtn');

const addService = new AddService();
const operator = new Operator();

addBtn.addEventListener('click', () => {
    addService.addAnotherNumber();
});

sumBtn.addEventListener('click', () => {
    operator.sumOperation();
});

mulBtn.addEventListener('click', () => {
    operator.mulOperation();
});
