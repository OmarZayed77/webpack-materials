export class Math {
    sum(numbers) {
        return numbers.reduce((result, num) => result + num, 0);
    }
    mul(numbers) {
        return numbers.reduce((result, num) => result * num, 1);
    }
}