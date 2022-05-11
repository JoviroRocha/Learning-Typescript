let displayName : string = "Pedro";
let displayLastName = "Souza" as string;
let displayAge : number = 32;
let Code = 133332908 as number;
// Pode ser definido um conjunto de tipos para a variavel assumir
//Podemos usar o type também para a mesma ideia. ex:
// type Txt = number|string; let texte: Txt = ""; 
let texte: string | number = "";
texte = 32;

// define um conjunto de valores que certa variavel pode assumir
// pode ser substituido por o conjunto de elementos separados por | , exe:
// personLastLastName: "Gustavo" | "Pedrinho"
enum personLastLastName {
    Gustavo = "Gustavo",
    Pedrinho = "Pedrinho"
} 


// Describe a object, does not go to javascript 
interface Person {
    displayName : string;
    displayLastName :string;
    // ? mostra que é opicional
    displayLastLastName?: personLastLastName.Gustavo;
    displayAge : number;
    // readonly =: cannot change the value of code
    readonly Code : number;
    //funcao na interface , uma funcao que recebe uma string 'note' e retorna uma string
    addNote: (note: string) => string; 
}

function getPerson(Code : number) : Person {

    return null;
}

function savePerson(item : Person){

}

let person = getPerson(Code);

savePerson(person);

savePerson({
    displayName: "Herobrine",
    displayLastName: "Silva",
    displayAge: 12,
    Code: 123424,
    addNote(displayName){return null}
});
