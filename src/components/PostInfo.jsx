import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from 'axios'

const PostInfo = () => {
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
    <main>
      
      {post && <>
      <h2>Post</h2>
      <h3>{post.title}</h3>
      <p className="comment-para"> {post.body}</p>
      </>
        
        }
        
       <h3>Comments</h3>
        <section className="comment-section">
            {comment && comment.map((comment, index) => 
        (
           <div key={index} className="comment-div">
        <p className="comment-para"><strong>Name:</strong> {comment?.name} <br></br>
       <strong> Email:</strong> {comment?.email}<br></br>
        <strong>Body: </strong>{comment?.body}</p> 
        
        </div>
        ))
        
        }
        </section>
    </main>
  )
}

export default PostInfo;