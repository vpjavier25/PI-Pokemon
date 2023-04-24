export default function validate(input, allPokemons) {
    let errors = {};

    //input.name validation 
    if (!input.name) errors.name = 'este campo no puede estar vacio';
    if (input.name) {
        let strs = input.name.split('').filter((str) => str !== '0' && str !== '1' && str !== '2' && str !== '3' && str !== '4' && str !== '5' && str !== '6' && str !== '7' && str !== '8' && str !== '9');
        if (strs.join('').length < input.name.length) errors.name = 'no se permiten numeros en el nombre';
    }
    if (input.name.split('').includes(' ')) errors.name = 'No se permiten espacios en los nombres'
    if (input.name.length > 40) errors.name = 'Ingresa un nombre de menos de 40 caracteres'
    if (/[!@#$%^&*(),.?":{}|<>]/g.test(input.name)) errors.name = 'No se permiten caracteres especiales'
    //if (allPokemons.filter(pokemon => pokemon.name === input.name).length === 1) errors.name = 'El nombre de tu pokemon ya esta en uso'
    if (input.name !== input.name.toLowerCase()) errors.name = 'Escribe el nombre en minuscula'



    //input.image validate

    if (!/^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi.test(input.image)) errors.image = 'ingresa un URL valido'
    

    //input.hp validation
    
    if (!input.hp) errors.hp = 'este campo no puede estar vacio';
    if (isNaN(input.hp)) errors.hp = 'ingrese solo caracteres numericos'
    if (Number(input.hp) > 150) errors.hp = 'Ingresa un valor inferior a 150'
    


    //input.attack validate
    
    if (!input.attack) errors.attack = 'este campo no puede estar vacio';
    if (isNaN(input.attack)) errors.attack = 'ingrese solo caracteres numericos'
    if (Number(input.attack) > 150) errors.attack = 'Ingresa un valor inferior a 150'
   


    //input.defense validate
    
    if (!input.defense) errors.defense = 'este campo no puede estar vacio';
    if (isNaN(input.defense)) errors.defense = 'ingrese solo caracteres numericos'
    if (Number(input.defense) > 150) errors.defense = 'Ingresa un valor inferior a 150'
    


    //input.speed validate 
    
    if (isNaN(input.speed)) errors.speed = 'ingrese solo caracteres numericos'
    if (Number(input.speed) > 150) errors.speed = 'Ingresa un valor inferior a 150'
    


    //input.height validate 
    
    if (isNaN(input.height)) errors.height = 'ingrese solo caracteres numericos'
    if (Number(input.height) > 2000) errors.height = 'Ingresa un valor inferior a 2000'
    


    //input.weight validate 
    
    if (isNaN(input.weight)) errors.weight = 'ingrese solo caracteres numericos'
    if (Number(input.weight) > 10000) errors.weight = 'Ingresa un valor inferior a 150'
    


    //input.types validate 
   
    if (input.types.length > 2) errors.types = 'Seleccione maximo dos tipos'
    


    return errors;

}