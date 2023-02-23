import { useState } from "react"
import { useDispatch } from "react-redux";
import { SearchByName } from "../redux/actions";


export default function SearchBar(){
    
    const dispatch = useDispatch();

    const [input,setInput] = useState({});

    const onChangeHandler = (event) =>{
        setInput({
            name:event.target.value
        });
    }

    const onClickHandler = (name) =>{
        if(name){
            dispatch(SearchByName(name));
        }else{
            alert('Ingresa un nombre')
        }
        
    }
    
    return (
        
        <span>
            <input type= 'search' onChange={onChangeHandler} placeholder='search a pokemon'></input>
            <button onClick={() => onClickHandler(input.name)}>Buscar</button>
        </span>
            
        
    )
}