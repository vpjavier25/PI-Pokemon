export default function validate(input, event) {
    let errors = {};

    //input.name validation 
    if (event === 'name') {
        if (!input.name) errors.name = 'este campo no puede estar vacio';
        if (input.name) {
            let strs = input.name.split('').filter((str) => str !== '0' && str !== '1' && str !== '2' && str !== '3' && str !== '4' && str !== '5' && str !== '6' && str !== '7' && str !== '8' && str !== '9');
            if (strs.join('').length < input.name.length) errors.name = 'no se permiten numeros en el nombre';
        }
        if (input.name.split('').includes(' ')) errors.name = 'No se permiten espacios en los nombres'
        if (input.name.length > 40) errors.name = 'Ingresa un nombre de menos de 40 caracteres'
    }


    //input.image validate
    if (event === 'image'){
        if (!/^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi.test(input.image)) errors.image = 'ingresa un URL valido'
    }

    //input.hp validation
    if(event === 'hp') {
    if (!input.hp) errors.hp = 'este campo no puede estar vacio';
    if (isNaN(input.hp)) errors.hp = 'ingrese solo caracteres numericos'
    if (Number(input.hp) > 150) errors.hp = 'Ingresa un valor inferior a 150'
    }


    //input.attack validate
 if(event === 'attack') {
        if (!input.attack) errors.attack = 'este campo no puede estar vacio';
    if (isNaN(input.attack)) errors.attack = 'ingrese solo caracteres numericos'
    if (Number(input.attack) > 150) errors.attack = 'Ingresa un valor inferior a 150'
    }
    

    //input.defense validate
    if(event === 'defense') {
         if (!input.defense) errors.defense = 'este campo no puede estar vacio';
    if (isNaN(input.defense)) errors.defense = 'ingrese solo caracteres numericos'
    if (Number(input.defense) > 150) errors.defense = 'Ingresa un valor inferior a 150'
    }
   

    //input.speed validate 
    if(event === 'speed') {
        if (isNaN(input.speed)) errors.speed = 'ingrese solo caracteres numericos'
    if (Number(input.speed) > 150) errors.speed = 'Ingresa un valor inferior a 150'
    }
    

    //input.height validate 
    if(event === 'height') {
        if (isNaN(input.height)) errors.height = 'ingrese solo caracteres numericos'
    if (Number(input.height) > 150) errors.height = 'Ingresa un valor inferior a 150'
    }
    

    //input.weight validate 
    if(event === 'weight') {
         if (isNaN(input.weight)) errors.weight = 'ingrese solo caracteres numericos'
    if (Number(input.weight) > 150) errors.weight = 'Ingresa un valor inferior a 150'
    }
   

    //input.types validate 
    if(event === 'types') {
        if (input.types.length > 3) errors.types = 'Seleccione maximo tres tipos'
    }
    








    return errors;

}