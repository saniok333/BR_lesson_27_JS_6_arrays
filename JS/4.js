// Создать массив аудиторий академии. 
// Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, 
// для которого она предназначена.
// Написать несколько функций для работы с ним

// Вывод на экран всех аудиторий;

// Вывод на экран аудиторий для указанного факультета;

// Вывод на экран только тех аудиторий, которые подходят для переданной группы.
// Объект-группа состоит из названия, количества студентов и названия факультета;

// Функция сортировки аудиторий по количеству мест;

// Функция сортировки аудиторий по названию (по алфавиту).



function displayClassrooms(classroomsArrName) {
    let str = ``;
    let i = 1;
    for (let classroom of classroomsArrName) {
        str += `${i}. Classroom name: ${classroom.roomName}, Seats Qty: ${classroom.seatsQty}, Facult: ${classroom.facultName};\n`;
        i++;
    }
    alert(str);
}

function displayClassroomsForFacult(classroomsArrName) {
    let myFacultName = prompt(`Enter the facult name:`);
    let tempArr = classroomsArrName.filter(classroom => classroom.facultName == myFacultName);
    displayClassrooms(tempArr);
}

function displayClassroomsForGroup(classroomsArrName, grroupObj) {
    let tempArr = classroomsArrName.filter(classroom => ((classroom.seatsQty >= grroupObj.peopleQty) && (classroom.facultName == grroupObj.groupeFacult)));
    displayClassrooms(tempArr);
}
let classrooms = [{
        roomName: "a255",
        seatsQty: 10,
        facultName: "fre"
    },
    {
        roomName: "b546",
        seatsQty: 15,
        facultName: "fitki"
    },
    {
        roomName: "f412",
        seatsQty: 16,
        facultName: "fre"
    },
    {
        roomName: "c342",
        seatsQty: 20,
        facultName: "fitki"
    },
];

let myGroup = {
    groupName: "3ks",
    peopleQty: 14,
    groupeFacult: "fre",
}

// displayClassrooms(classrooms);
// displayClassroomsForFacult(classrooms);
displayClassroomsForGroup(classrooms, myGroup);