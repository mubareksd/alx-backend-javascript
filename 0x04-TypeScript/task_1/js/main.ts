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

const  printTeacher = (firstName: string, lastName: string) => `${firstName.charAt(0)}. ${lastName}`;