interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome = (): string => 'Working from home';
    getCoffeeBreak = (): string => 'Getting a coffee break';
    workDirectorTasks = (): string => 'Getting to director tasks';
}

class Teacher implements TeacherInterface {
    workFromHome = (): string => 'Cannot work from home';
    getCoffeeBreak = (): string => 'Cannot have a break';
    workTeacherTasks = (): string => 'Getting to work';
}

const createEmployee = (salary: number | string): Teacher | Director => Number(salary) < 500 ? new Teacher() : new Director();
