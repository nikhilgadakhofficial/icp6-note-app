import React from 'react'
import './NotesCard.css'
import DeleteIcon from "./bin.png"
import Update from "./pen.png"
import Add from "./new-document.png"
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

function NotesCard({_id,title,content,category,loadNotes}) {

  const deletenote = async ()=>{
    const response = await axios.delete(`${process.env.REACT_APP_URL}/notes/${_id}`)
    toast.success(response.data.message)
    loadNotes()
  }
  return (
    <div className='note-card'>
    <h3 className='note-card-t'>{title}</h3>
    <p className='note-card-co'>{content}</p>
    <span className='note-card-ca'>{category}</span>
    <img src={DeleteIcon} alt='bin.png' className='icon'onClick={deletenote} />
    <Link to={`/update/${_id}`}>
    <img src={Update} alt='ben.png' className='icon-up' />
    </Link>
    <Link to={`/new`}>
    <img src={Add} alt='ben.png' className='icon-up-1' />
    </Link>
</div>
  )
}

export default NotesCard