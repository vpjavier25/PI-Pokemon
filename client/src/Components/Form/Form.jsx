import './Form.css'
import { useEffect, useState } from "react"
import validate from "./Validate";
import infoToSend from "./FixInfoToSend";
import { useDispatch, useSelector } from "react-redux";
import { createNewPokemon } from "../../redux/actions";

export default function FormCreateANewPokemon() {

    const dispatch = useDispatch();

    const types = useSelector((state) => state.types);

    const statusPost = useSelector((state) => state.post);

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

    const [inputCheckbox, setInputCheckbox] = useState([]);

    const [errors, setErrors] = useState({});

    const [errorsInForm, setErrorsInForm] = useState('');

    const changeHandler = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });

        setErrors(validate({
            ...input,
            [event.target.name]: event.target.value
        }, event.target.name));
    }

    console.log(errors)


    const changeHandlerCheckbox = (event) => {

        if (inputCheckbox.includes(event.target.value)) {

            let checkboxsSelected = inputCheckbox.filter((e) => e !== event.target.value);

            setInputCheckbox([...checkboxsSelected])

            return
        }

        setInputCheckbox([
            ...inputCheckbox, event.target.value
        ])
    }
    // se utiliza para controlar el pequeño delay de la funcion de actualizacion de estado
    useEffect(() => {
        setInput({
            ...input, types: [...inputCheckbox]
        })

        setErrors(validate({
            ...input, types: [...inputCheckbox]
        }, 'types'));

    }, [inputCheckbox])

    //__________________________________________________________________________________

    console.log(inputCheckbox)
    console.log(input)


    const handlerSubmit = (event) => {
        event.preventDefault();

        if (Object.keys(errors).length > 0) {
            setErrorsInForm('Hay informacion incorrecta o Falta informacion por llenar');
            return;
        }
        if (!input.name || !input.image || !input.hp || !input.attack || !input.defense || !input.types[0]) {
            setErrorsInForm('Hay informacion incorrecta o Falta informacion por llenar');
            return;
        } else {
            setErrorsInForm('');
        }

        let inputToSend = infoToSend({ ...input });

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
                        {errors.name ? <span>{errors.name}</span> : null}
                        <label className='form-label-text' htmlFor="Image"> * Image: </label>
                        <input id='Image' type="text" name='image' value={input.image} onChange={changeHandler} />
                        {errors.image ? <span>{errors.image}</span> : null}
                        <label className='form-label-text' htmlFor="hp"> * Hp: </label>
                        <input id='hp' type="text" name='hp' value={input.hp} onChange={changeHandler} />
                        {errors.hp ? <span>{errors.hp}</span> : null}
                        <label className='form-label-text' htmlFor="attack"> * Attack: </label>
                        <input id='attack' type="text" name='attack' value={input.attack} onChange={changeHandler} />
                        {errors.attack ? <span>{errors.attack}</span> : null}
                        <label className='form-label-text' htmlFor="defense"> * Defense: </label>
                        <input id='defense' type="text" name='defense' value={input.defense} onChange={changeHandler} />
                        {errors.defense ? <span>{errors.defense}</span> : null}
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
                                            <label key={index} htmlFor={type.name}> {type.name}</label>
                                            <input id={type.name} hey={index} type={"checkbox"} value={index + 1} name='types' onChange={changeHandlerCheckbox} />
                                        </div>


                                    </>


                                )
                            })}
                        </div>

                        {errors.types ? <span>{errors.types}</span> : null}

                        <button type="submit" style={{ display: 'block' }}>Send</button>
                    </div>
                    {errorsInForm ? <span>{errorsInForm}</span> : null}
                    {statusPost ? <span>{statusPost}</span> : null}
                </form>
               
                    <img className='form-img' src="https://images4.alphacoders.com/115/1159692.jpg" alt="picachu saying hi!!" />
                
            </div>
        </>
    )
}