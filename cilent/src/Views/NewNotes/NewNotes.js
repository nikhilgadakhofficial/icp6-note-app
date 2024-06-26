import React, { useState } from 'react'
import './NewNotes.css'
import axios from 'axios';
import toast from 'react-hot-toast';


function NewNotes() {
  const [title,setTitile] = useState('');
  const [category,setCategory] = useState('');
  const [content,setContent] = useState('');

  const addNote =async ()=>{
    const response = await axios.post(`${process.env.REACT_APP_URL}/notes`,
    {
      title :title,
      category : category,
      content : content
    })
    toast.success(response.data.message)
    setTitile('')
    setContent('')
    setCategory('')
  }

  return (
    <div>
      <h1 className='hading'>New Note</h1>

       <form className='from-newnote'>
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

<button type='button' onClick={addNote} className='btn'>
        Save
        </button>
</form>

     
    </div>
  )
}

export default NewNotes