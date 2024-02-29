
import React,{useEffect,useState} from 'react';
import './RowPost.css';
import Youtube from 'react-youtube'
import axios from '../../axios'
import{API_KEY,imageUrl} from '../../Constants/Constants'
function RowPost(props) {
    const[movies,setMovies] = useState([])
    const[urlId,setUrlId] =useState('')
    useEffect(()=>{
        axios.get(props.url) .then (responce=>{
                setMovies(responce.data.results)
        })
    },[])
    
        const opts = {
            height: '390',
            width: '100%',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 0,
            },
          };
          const handleMovie = (id)=>{
            
            axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then (responce=>{
                if(responce.data.results.length!==0){
                    setUrlId(responce.data.results[0])
                }else{
                    console.log('no')
                }

            })

            }
          
          return (
   
      
        <div className='row'>
            <h1>
                {props.title}
            </h1>
            <div className="posters" >
                {movies.map((obj)=>
                <img onClick= {()=>handleMovie (obj.id)} className={props.isSmall ? 'smallimage':'image' } src={`${imageUrl+obj.poster_path}`} />
                )}
                
            </div>
          {urlId &&<Youtube opts = {opts} videoId={urlId.key}  />  }  
        </div>

    )
}

export default RowPost
