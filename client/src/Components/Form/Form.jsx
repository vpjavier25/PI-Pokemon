import './Form.css'
import { useState } from "react"
import validate from "./Validate";
import infoToSend from "./FixInfoToSend";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNewPokemon} from "../../redux/actions";

export default function FormCreateANewPokemon() {

    const dispatch = useDispatch();

    const types = useSelector((state) => state.types);

    // me trae el mensaje que se guarda luego de realizar el post
    const statusPost = useSelector((state) => state.post);

    const allPokemons = useSelector((state)=> state.allPokemons);

    //estado de los input del form 
    const [input, setInput] = useState({
        name: '',
        image: '',
        hp: 0,
        attack: 0,
        defense: 0,
        speed: '',
        height: '',
        weight: '',
        types: []

    })

    //estado para saber cuando un input fue usado por primera vez
    const [beenCalled, setBeenCalled] = useState({
        name: false,
        image: false,
        hp: false,
        attack: false,
        defense: false,
    });

    //estado para manejar los errores en los inputs
    const [errors, setErrors] = useState({});

    //estado que almacena un mensaje luego de enviar el form
    const [errorsInForm, setErrorsInForm] = useState('');

    //se maneja los cambios en los inputs. se validan los inputs y se actualizan los errores, se actualiza el estado para los inputs que furon usados(esto para que no me de mensaje de error los inputs que no e tocado)    
    const changeHandler = (event) => {
        //si no es types se debe a que tipes me debe dejar guardar info sobre la que ya tenia sin que el estado me debuelva copia de lo que ya tenia mas copia de lo que tenia + lo ingresado
        if (event.target.name !== 'types') {
            setInput({
                ...input,
                [event.target.name]: event.target.value
            });

            setErrors(validate({
                ...input,
                [event.target.name]: event.target.value
            },allPokemons));

            setBeenCalled({
                ...beenCalled, [event.target.name]: true
            })
        } else {
            //para que las checkbox funciones como se piensa intuitivamente
            if (input.types.includes(event.target.value)) {

                let checkboxsSelected = input.types.filter((e) => e !== event.target.value);

                setInput({
                    ...input,
                    [event.target.name]: checkboxsSelected
                }); 

                setErrors(validate({
                    ...input,
                    [event.target.name]: checkboxsSelected
                }));
            } else {
                setInput({
                    ...input,
                    [event.target.name]: [...input[event.target.name], event.target.value]
                });

                setErrors(validate({
                    ...input,
                    [event.target.name]: [...input[event.target.name], event.target.value]
                }));
            }


        }

    }

    console.log(input)

    // manejador para cuando se submitea el form
    const handlerSubmit = (event) => {
        //previene a re-renderizacion cuando se hace el evento submit
        event.preventDefault();

        //si hay keys en erros no envia el form y devuelve el mensaje 
        if (Object.keys(errors).length > 0) {
            setErrorsInForm('Hay informacion incorrecta o Falta informacion por llenar');
            return;
        }
        //si esta vacio algun campo obligatorio no envia el form y devuelve el mensaje
        if (!input.name || !input.image || !input.hp || !input.attack || !input.defense || !input.types[0]) {
            setErrorsInForm('Hay informacion incorrecta o Falta informacion por llenar');
            return;
        } else {
            setErrorsInForm('');
        }


        //si todo esta bien se utiliza la funcion infoToSend, la cual arregla la informacion al formato en el que el modelo de la db la recibe
        let inputToSend = infoToSend({ ...input }, 'toSend') ;
        //se crea na copia el el estado global en la propiedad donde estan todos lo pokemones para que el pokemon creado se mustre sin necesidad de recargar la pag
        
        dispatch(createNewPokemon(inputToSend));
    }


    return (
        <>
            <div className='form-container'>

                <form onSubmit={handlerSubmit} className='form'>

                    <h1>Create your own pokemon</h1>

                    <div className='form-labels-container'>
                        <label className='form-label-text' htmlFor="Name"> * Name: </label>
                        <input className={errors.name ? 'error' : null} id='Name' type="text" name='name' value={input.name} onChange={changeHandler} />
                        {beenCalled.name && errors.name ? <span>{errors.name}</span> : null}
                        <label className='form-label-text' htmlFor="Image"> * Image: </label>
                        <input id='Image' type="text" name='image' value={input.image} onChange={changeHandler} />
                        {beenCalled.image && errors.image ? <span>{errors.image}</span> : null}
                        <label className='form-label-text' htmlFor="hp"> * Hp: </label>
                        <input id='hp' type="text" name='hp' value={input.hp} onChange={changeHandler} />
                        {beenCalled.hp && errors.hp ? <span>{errors.hp}</span> : null}
                        <label className='form-label-text' htmlFor="attack"> * Attack: </label>
                        <input id='attack' type="text" name='attack' value={input.attack} onChange={changeHandler} />
                        {beenCalled.attack && errors.attack ? <span>{errors.attack}</span> : null}
                        <label className='form-label-text' htmlFor="defense"> * Defense: </label>
                        <input id='defense' type="text" name='defense' value={input.defense} onChange={changeHandler} />
                        {beenCalled && errors.defense ? <span>{errors.defense}</span> : null}
                        <label className='form-label-text' htmlFor="speed"> Speed: </label>
                        <input id='speed' type="text" name='speed' value={input.speed} onChange={changeHandler} />
                        {errors.speed ? <span>{errors.speed}</span> : null}
                        <label className='form-label-text' htmlFor="height"> height: </label>
                        <input id='height' type="text" name='height' value={input.height} onChange={changeHandler} />
                        {errors.height ? <span>{errors.height}</span> : null}
                        <label className='form-label-text' htmlFor="weight"> Weight: </label>
                        <input id='weight' type="text" name='weight' value={input.weight} onChange={changeHandler} />
                        {errors.weight ? <span>{errors.weight}</span> : null}

                        <div className='form-label-text'> Types:</div>

                        <div className='checkBoxes'>


                            {types.map((type, index) => {
                                return (
                                    <>
                                        <div>
                                            <label htmlFor={type.name}> {type.name}</label>
                                            <input id={type.name} type={"checkbox"} value={index + 1} name='types' onChange={changeHandler} />
                                        </div>


                                    </>


                                )
                            })}
                        </div>

                        {errors.types ? <span>{errors.types}</span> : null}

                        <button type="submit">Send</button>
                        <Link to='/home' >
                            <button type='text' className='form-home-button'>Home</button>
                        </Link>

                    </div>
                    {errorsInForm ? <span>{errorsInForm}</span> : null}
                    {statusPost ? <span>{statusPost}</span> : null}
                </form>

                <img className='form-img' src="https://images4.alphacoders.com/115/1159692.jpg" alt="picachu saying hi!!" />

            </div>
        </>
    )
}