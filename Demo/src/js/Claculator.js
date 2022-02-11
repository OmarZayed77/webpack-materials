export class Calculator {
    sum(numbers) {
        return numbers.reduce((acc, num) => acc + num, 0);
    }

    mul(numbers) {
        return numbers.reduce((acc, num) => acc * num, 1);
    }
}