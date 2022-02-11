import { AddService } from '../js/AddService';
import { Calculator } from '../js/Calculator';

import '../test.ts';
import '../style.css';
import '../main.scss';

const addBtn = document.getElementById('addBtn');
const sumBtn = document.getElementById('sumBtn');
const mulBtn = document.getElementById('mulBtn');

const addService = new AddService();
const calculator = new Calculator();

addBtn.addEventListener('click', function() {
    addService.add();
});

sumBtn.addEventListener('click', function() {
    calculator.calcSum();
});

mulBtn.addEventListener('click', function() {
    calculator.calcMul();
});
