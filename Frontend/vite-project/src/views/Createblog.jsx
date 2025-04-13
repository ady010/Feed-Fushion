import React from 'react'

const Createblog = () => {

  const [image, setImage] = useState("")
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const submitHandler = (e)=>{
    e.preventDefault()
  }
  return (
    <main>
        <form >
            <input type="text" value={image} onChange={(e)=>setImage(e.target.value)} placeholder='Image' />
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Title'/>
            <input type="text" value={content} onChange={(e)=>setContent(e.target.value)} placeholder='Content'/>
            <button type='submit' onClick={submitHandler}>Create</button>
        </form>
    </main>
  )
}

export default Createblog