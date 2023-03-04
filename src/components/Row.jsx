import React,{useState,useEffect} from 'react'
import axios from "../network/axios";
const baseUrl='https://image.tmdb.org/t/p/original/'

function Row({title,fetchUrl,isLarge}) {
    
 const [movies, setMovies] = useState([]);
 const [loading,setLoading]=useState(true)
 
// console.log(`object-contain  mr-3  hover:scale-105 duration-300 ${isLarge?'max-h-[200]':'max-h-[100px]'}` )
useEffect(() => {
async function  fetchData (){
    // setLoading(true);
  const response = await axios.get(fetchUrl);
  console.log(response.data.results)
  setMovies(response.data.results);
  console.log(loading)
    setLoading(false);

  return response;
 }
 fetchData()
}, [fetchUrl]);
  return (
   
 <div className=' ml-2'><h2 className={`text-2xl text-white font-semibold ${loading&&'hidden'}` }>{title}</h2> 
{/* <div className={`${!loading&&'hidden'}"flex h-screen items-center"`}>
   <p className="mx-auto my-auto text-white text-2xl">Loading.....</p>
</div> */}
    <div className='movies_posters flex overflow-y-hidden  overflow-x-scroll p-6 no-scrollbar '>
       {movies.map(movie=>{
        return (
            <img src={`${baseUrl}${isLarge?
movie.poster_path:movie.backdrop_path}`} className={`object-contain  mr-3  hover:scale-105 duration-300 ${isLarge?'max-h-[250px] hover:scale-110 ':'max-h-[100px]'}` } key={movie.id}></img>
        );
       })}
    </div>
    </div>

  );


  
}

export default Row

