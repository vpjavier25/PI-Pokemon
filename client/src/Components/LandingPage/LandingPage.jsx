import './LandingPage.css'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPokemon } from "../../redux/actions";

function LandingPage() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addPokemon());
    }, [dispatch])

    return (
        <div className="landing-page">
            
            <div className='red-rectangle'></div>
            <div className='white-rectangle'></div>
            <div className='middle-rectangle'></div>
            <div className='circle'></div>
            <div className='inner-circle'></div>
            <div className='inner-inner-circle'></div>
            <Link to = '/home'>
            <div className='inner-inner-inner-circle'>Go Get Them!!</div>
            </Link>
            

        </div>
    )
}

export default LandingPage;