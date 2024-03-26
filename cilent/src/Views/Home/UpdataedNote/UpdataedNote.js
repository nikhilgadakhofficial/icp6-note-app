import React, { useEffect, useState } from 'react'
import './UpdataedNote.css'
import axios from 'axios';
import toast from 'react-hot-toast';
import {useParams} from 'react-router-dom'



function NewNotes() {
  const [title,setTitile] = useState('');
  const [category,setCategory] = useState('');
  const [content,setContent] = useState('');

  const loadNote = async (id) =>{
    if(!id) return
    const response = await axios.get(`${process.env.REACT_APP_URL}/notes/${id}`)

    setTitile(response.data.data.title)
    setCategory(response.data.data.category)
    setContent(response.data.data.content)
  }

  const updateNote = async ()=>{

    const response = await axios.put(`${process.env.REACT_APP_URL}/notes/${id}`,{
        title : title,
            content : content,
            category : category
    })
  toast.success(response.data.message)
  window.location.href='/'
  }
 
   const {id} = useParams()

   useEffect(()=>{
    loadNote(id)
   },[id])
  return (
    <div>
      <h1 className='hading'>Update Note</h1>

       <form className='from-newnote'>
        <input type='text'
        value={id}
        disabled
        className='input-id'
        />
      <input type='text'
      placeholder='Title'
      value={title}
      onChange={(e)=>{
         setTitile(e.target.value)
      }}
      className='input-title'/>

      <select value={category} onChange={(e)=>{
        setCategory(e.target.value)
      }}
      className='input-ca'>
         <option value="general">Slect a Category</option>
        <option value="general">General</option>
        <option value="work">Work</option>
        <option value="learning">Learning</option>
        <option value="other">Other</option>
      </select>
      

      <input type='text'
      placeholder='Content'
      value={content}
      onChange={(e)=>{
        setContent(e.target.value)
      }}
      className='input-co'/>

<button type='button' onClick={updateNote} className='btn'>
        Update
        </button>
</form>

     
    </div>
  )
}

export default NewNotes