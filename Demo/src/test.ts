interface Human {
    id: number;
    name: string;
}

class Student implements Human {
    public id;
    public name;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}


console.log(new Student(7, 'Omar'));
