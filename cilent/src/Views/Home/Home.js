import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Home.css'
import NotesCard from '../../Compondenrs/NotesCard';

function Home() {

    const [notes,setNotes] = useState([]);

    const loadNotes = async ()=>{
        const response = await axios.get(`${process.env.REACT_APP_URL}/notes`);
        console.log(response.data.data);
       setNotes(response.data.data);
    }
    useEffect(()=>{
        loadNotes(); 
    },[])

  return (
    <div>
        <h1 className='hading-1'>All Notes</h1>

        {
            notes.map((note,index)=>{
                const {_id,title,content,category} =note;
                return(<NotesCard key={_id} _id={_id} title={title} content={content} category={category} loadNotes={loadNotes}/>)
            })
        }
    </div>
  )
}

export default Home