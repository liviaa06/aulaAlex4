const alunos = [
    "João",
    "Livia",
    "Ana",
    "Zezão",
    "Alan",
    "Matheus",
    "Felipe",
    "Giovanna",
    "Pedro",
    "Adrian",
    "Renan",
    "Shauan",
    "Isaac",
    "Edson",
    "Pietro",
    "Japa",
    "Miguel",
    "Kauan",
    "Vava",
    "Cristiano",
];

// const sala1 = alunos.slice(0, 10);
// const sala2 = alunos.slice(10);
// console.log(sala1);
// console.log(sala2);

//...

const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2);

console.log(sala1);
console.log(sala2);