interface Hamada {
    id: number,
    name: string
}

class Student implements Hamada {
    public id;
    public name;

    constructor(id, name) {
        this.name = name,
        this.id = id
    }
}

const newStudent = new Student(7, 'omar');

console.log(newStudent);
