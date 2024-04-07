import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { bagActions } from '../store/bagSlice';


export const Movielist = () => {
  const [show, setShow] = useState(false);
  const [movieList, setmovieList] = useState([]);
  const bagitem = useSelector(state => state.bag)
  let elementFound=false;
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(bagActions.add(id));
    // console.log(elementFound=bagitem.indexOf(id)>=0);
  }
  const handleDelete = (id) => {
    dispatch(bagActions.remove(id));
    
  }
  // console.log(bagitem);

  const getmovie = () => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=9c9543032d831fbc338e8a565c16266f')
      .then(response => response.json())
      .then(response => setmovieList(response.results))
      .catch(err => console.error(err));
  }
  // console.log(movieList);
  // movieList.map(movie=>console.log(movie.poster_path))
  useEffect(() => getmovie(), [])
  return (
    <div className='bg-slate-500 flex flex-wrap justify-center  dark:bg-gray-800 '>
      {movieList.map(movie => <div key={movie.id} className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
        <Link to={`/movie/${movie.id}`}>
          <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${movie.poster_path
            }`} alt="" />
        </Link>
        <div className="p-5 height2">
          <Link to={`/movie/${movie.id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white height3">{movie.original_title}</h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 height1 overflow-hidden">{movie.overview}</p>

        </div>

        <div >
          <span className='text-emerald-500 mt-24 text-2xl font-semibold antialiased hover:subpixel-antialiased  '>Free</span>
          <div className='float-right'>
            {bagitem.indexOf(movie.id)>=0?<button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => handleDelete(movie.id)}>Remove</button>: <button onClick={() => handleClick(movie.id)} type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add to Cart</button> 
}
             

          </div></div>
      </div>)}

    </div>
  )
}
