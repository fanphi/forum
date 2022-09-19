import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

 
    
    const [data, setData] = useState(null);
    useEffect( () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/`)
  .then(res => setData(res.data))
    }, []);


  return (
    <>
    
       <h1>Posts</h1>
        {data && data.map((post, i) => 
        (
           
            <Link to={`/post/${post.id}`} state={post} key={i}>
          

        <h3>{post?.title}</h3>
        </Link>
        
        ))
   
        }
       
    </>
  )



}

export default Home;