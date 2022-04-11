import React, {useState, useEffect} from 'react'
import PostItem from '../components/PostItem';

window.onload = function() {
    fetchAllPuns();
}

function Posts() {
    const [posts, setPosts] = useState([]); //Korrekt datatyp eftersom listan är en [], tomt värde
    
    //const fetchPosts = async () => {
        async function fetchAllPuns() {
        try {
            const response = await fetch('https://puns-app.herokuapp.com/puns');
            const data = await response.json();
            console.log(data)
            setPosts(data);
            
        } catch (error) {
            console.log(error)
            
        } 
    }

    useEffect(() => { fetchAllPuns() }, [])
    
    return (
        <div>
            <h1>Puns</h1> 

            <section>
                {
                    posts.map(post => <PostItem key={post.id} post={post} />)
                }
            </section>
        </div>
    )
}

export default Posts