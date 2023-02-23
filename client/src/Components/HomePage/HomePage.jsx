import './HomePage.css'
import Pagination from "../Pagination/Pagination/Pagination";
import SearchBar from "../searchBar";
import FilterByType from "../FilterbyTypeButton";
import FilterBySource from "../filterBySource";
import Order from "../OrderBtn";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



export default function HomePage() {

  const types = useSelector((state) => state.types)


  return (
    <div className='homePage'>
      <Link to='/form' className='create'>
        <span>Create your own pokemon</span>
      </Link>

      <FilterByType types={types}></FilterByType>

      <FilterBySource></FilterBySource>

      <Order></Order>
      
      <SearchBar></SearchBar>

     <Pagination></Pagination>
      
    </div>
  )
}