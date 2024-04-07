import React from 'react'
import { Data } from './Data';
import { MdDelete } from "react-icons/md";
import movieStore from '../store';
import Logo from '../assets/empty-cart.jpg'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { bagActions } from '../store/bagSlice';
export const Bag = () => {
  const movie = useSelector(state => state.item);
  // console.log(movie[0].id);
  const bagItem = useSelector(state => state.bag);
  const dispatch = useDispatch();
  // console.log(bagItem.length == 0);
  const finalItem = movie.filter(movie => {
    const itemIndex = bagItem.indexOf(movie.id);
    return itemIndex >= 0;
  });
  const handleClick=(id)=>{
     dispatch(bagActions.remove(id));
  }
  // finalItem.map(movie => console.log(movie.title));
  return (

    <div className='bg-slate-500 dark:bg-gray-800 dark:border-gray-700'>
      {!bagItem.length == 0 ? finalItem.map(movie => <div className='p-4' key={movie.id}><div  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={`https://image.tmdb.org/t/p/w500${movie.poster_path
          }`} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <div className='iconDelete' onClick={()=>handleClick(movie.id)}><MdDelete /></div>
        
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.overview}</p>
          <div><span className='text-emerald-500 mt-24 text-2xl font-semibold antialiased hover:subpixel-antialiased  '>Free</span></div>
        </div>

      </div></div>) : <div className='dark:bg-gray-800 dark:border-gray-700'>
        <h1 className='text-3xl font-bold p-4 dark:text-white'>Shopping Cart</h1>
        <p className='text-lg font-normal p-4 dark:text-white'>{finalItem.length} Movies in your Cart</p>
        <center className="border-inherit border-2 p-8   flex justify-center flex-col   ">
          <div className='imageWidth'>
            <img src={Logo} alt="" />
          </div>
          <span>
            <p className="dark:text-white ">Your cart is empty.</p>
          </span>
          <div className='p-4'>
            <button type="button" className="dark:text-white focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Keep Shopping</button>
          </div>

        </center>
      </div>}


    </div>
  )
}
