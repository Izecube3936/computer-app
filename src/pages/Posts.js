import React, {useState, useEffect} from 'react'
import PostItem from '../components/PostItem';

function Posts() {
    const [posts, setPosts] = useState([]); //Korrekt datatyp eftersom listan är en [], tomt värde
    
    const fetchPosts = async () => {
        try {
            const response = await fetch('https://puns-app.herokuapp.com/puns');
            const data = await response.json();
         
            setPosts(data);
            
        } catch (error) {
            // console.log(error)
            
        } 
    }

    useEffect(() => { fetchPosts() }, [])
    
    return (
        <div>
            <h1>Posts</h1> 

            <section>
                {
                    posts.map(post => <PostItem key={post.id} post={post} />)
                }
            </section>
        </div>
    )
}

export default Posts