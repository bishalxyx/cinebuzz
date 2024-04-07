import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Popular = () => {
  const [movieList,setmovieList]=useState([]);
  const getmovie=()=>{
      fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=9c9543032d831fbc338e8a565c16266f')
.then(response => response.json())
.then(response => setmovieList(response.results))
.catch(err => console.error(err));
  }
  console.log(movieList);
  movieList.map(movie=>console.log(movie.poster_path))
  useEffect(()=>getmovie,[])
  return (
    <div className='bg-slate-500 flex flex-wrap justify-center dark:bg-gray-800'>
    { movieList.map(movie=> <div key={movie.id} className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
        <Link to={`/movie/${movie.id}`}>
            <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${movie.poster_path
}`} alt="" />
        </Link>
        <div className="p-5">
            <Link to={`/movie/${movie.id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.original_title}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.overview}</p>
            
        </div>
    </div>)}
   
    </div>
  )
  
}
