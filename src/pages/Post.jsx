import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from 'axios'

const Post = () => {
    const {id} = useParams()
    const [comment, setComment] = useState(null);
    const [post, setPost] = useState(null);

    useEffect( () => {
      
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  .then(res => setComment(res.data))
    }, [id]);
   
    useEffect( () => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
.then(res => setPost(res.data))
  }, [id]);

  return (
    <div>
      <>
      {post && <>
      <h2>Title: {post.title}</h2>
      <p>Body: {post.body}</p>
      </>
        
        }
        </>
       <h3> Comments</h3>
        <>
            {comment && comment.map((comment, index) => 
        (
           <div key={index}>
        <p>Name: {comment?.name} <br></br>
        Email: {comment?.email}<br></br>
        Body: {comment?.body}</p> 
        
        </div>
        ))
        
        }
        </>
    </div>
  )
}

export default Post