import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

function Post() {
    const [post, setPost] = useState({});
    // Retrives the id in the URL, through the placeholder, that was specified in App.js, row 25 (:callItWhateverYouWant)
    let params = useParams();
    console.log(params.callItWhateverYouWant) //Om jag skulle klicka på det 3:e inlägget skulle '3' stå i konsollen
    
    const fetchPost = async () => {
        try {
            // Uses the placeholder ":callItWhateverYouWant" to make a request, for fetching a specific post by a post-id
            const response = await fetch('https://puns-app.herokuapp.com/puns' + params.callItWhateverYouWant);
            
            const data = await response.json();
            console.log(data) //Får fram inf. om aktuellt objekt/inlägg
            setPost(data);
        } catch (error) {
         //   console.log(error)
        }
    }

    useEffect( () => { fetchPost() }, [])
    
    return (
    <div>
        <h1>Post with ID: {post.id}</h1> 
        <h3>{post.content}</h3>       {/*Detta visas när man trycker på länken 'Posts' och sedan en specifik post  */}
        <p>{post.date}</p>
    </div>
    )
}

export default Post