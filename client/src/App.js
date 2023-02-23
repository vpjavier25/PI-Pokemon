import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import HomePage from './Components/HomePage/HomePage';
import CardDetail from './Components/CardDetail/CardDetail';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addPokemon, getTypes } from './redux/actions';
import FormCreateANewPokemon from './Components/Form/Form';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(addPokemon());

    dispatch(getTypes());
  }, [dispatch])

  return (
    

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/pokemons/:id' element={<CardDetail />} />
        <Route path='/form' element={<FormCreateANewPokemon />} />
      </Routes>

    
  );
}

export default App;
