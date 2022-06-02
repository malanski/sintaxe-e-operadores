const students = [
    {
        name: 'Desmond',
        grade: 4, 
        classes: '1B',
    },
    {
        name: 'Sawyer',
        grade: 6, 
        classes: '2B',
    },
    {
        name: 'Lock',
        grade: 8, 
        classes: '3B',
    },
    {
        name: 'Jack',
        grade: 8, 
        classes: '3B',
    },
    {
        name: 'Hurley',
        grade: 4, 
        classes: '3B',
    },
];

function approvedStudents (arr, average) {
    let approved = [];

    for (let i = 0; i < arr.length; i++) {
        
        const {grade, name} =arr[i];

        if(grade >= average) {
            approved.push(name);
        }
    }
    return approved
}

console.log(approvedStudents(students, 5));