import React, {useState,useEffect} from 'react'
import Photos from './Photos'
import axios from 'axios'
import Info from './Info'


const api_key = 'b736TNVJbkE3uVShRbMJhjc8hpqbmuVcN9sG2zeY'
const apiUrl= 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&page=0&api_key='





export default function Main() {

    const [photos,setPhotos]=useState([])
    useEffect(()=>{
        axios.get(`${apiUrl}${api_key}`)
            .then((res)=>{
                setPhotos(res.data.photos)
                
                

            })

            .catch(()=>{
                console.log(Error)
                
            })

    
    },[])
  
    
    return (
        <div className='main'>
            <h2>Photos from Mars</h2>
            
              <div id='photo-container'>
                     {photos.map(photo=>{
                       return <Photos key={photo.id} props={photo}/>
        
                        })}

                    
                  
              </div>
            
            
        </div>
    )
}
