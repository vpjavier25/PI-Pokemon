export default function infoToSend(input){

    let inputToSend = input; 
    
    inputToSend.hp = Number(inputToSend.hp)
    inputToSend.attack = Number(inputToSend.attack)
    inputToSend.defense = Number(inputToSend.defense)
    inputToSend.types = inputToSend.types.map((type)=> Number(type));
    if (inputToSend.speed) inputToSend.speed = Number(inputToSend.speed)
    if (inputToSend.height) inputToSend.height = Number(inputToSend.height)
    if (inputToSend.weight) inputToSend.weight = Number(inputToSend.weight)
    
    // inputToSend.speed? inputToSend.speed = Number(inputToSend.speed): null;
    // inputToSend.height? inputToSend.height = Number(inputToSend.height):null;
    // inputToSend.weight? inputToSend.weight = Number(inputToSend.weight):null;

    let inputToSendArr = Object.entries(inputToSend);

    inputToSendArr = inputToSendArr.filter((entrie) => entrie[1] !== '');

    inputToSend = Object.fromEntries(inputToSendArr);

    
    return inputToSend;

}