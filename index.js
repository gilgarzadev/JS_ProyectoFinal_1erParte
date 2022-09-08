let nombre = prompt("Ingresa tu Nombre");
let apellido = prompt("Ingresa tu Apellido");

//alert("Hola, "+nombre+" "+apellido+" ");

alert(`Hola, ${nombre} ${apellido}`);

let estudiante = prompt("Eres estudiante?");
    if(estudiante ==="si"){
        alert("Puedes Ingresar");
    }
    else{
        alert("Solo se permiten Estudiantes!");
    }

let matricula = parseInt(prompt("Cual es tu matrcula?"));

//ARRAY MATERIAS

/* class Materia{
    constructor(id, Materia, Calificacion){
        this.id = id;
        this.Materia = Materia;
        this.Calificacion = Calificacion;
    }
}

const materias = [
    new Materia(1, "Fisica", 95),
    new Materia(2, "Matematicas", 70),
    new Materia(3, "Geografia", 80),
    new Materia(4, "Ingles", 100),
]; */

const materias = [
    {id: 1, materia: "Fisica", calificacion: 71},
    {id: 2, materia: "Matematicas", calificacion: 79},
    {id: 3, materia: "Musica", calificacion: 80},
    {id: 4, materia: "Historia", calificacion: 87},
]

let consulta = prompt("Ingrese la materia a consultar?");
let materia = materias.find(item => item.materia === consulta);
let mensaje = `
    Id: ${materia.id}
    Materia: ${materia.materia}
    Calificacion: ${materia.calificacion}
`;

alert(mensaje);

alert("Tus materias aprobadas son las siguientes:")

let pase = parseInt(prompt("Materias con calificacion de pase. El pase es 70"));
let aprobadas = materias.filter(item => item.calificacion > pase);

aprobadas.forEach(item => {
    let mensaje2 = `
    Id: ${item.id}
    Materia: ${item.materia}
    Calificacion: ${item.calificacion}
    `;
    alert(mensaje2);
}
    )



//let revisar = prompt("Deseas consultar tus resultados? Si/No");

