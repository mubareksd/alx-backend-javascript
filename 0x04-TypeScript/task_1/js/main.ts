interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [propName: string]: any
}

interface Directors extends Teacher {
    numberOfReports: number
}

interface printTeacherFunction {
    (firstName: string, lastname: string): string;
}

const  printTeacher: printTeacherFunction = (firstName: string, lastName: string) : string => `${firstName.charAt(0)}. ${lastName}`;

interface StudentInterface {
    firstName: string,
    lastName: string,
    workOnHomework(): string,
    displayName(): string
}

class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework = () : string => 'Currently working';

    displayName = () : string => this.firstName;
}