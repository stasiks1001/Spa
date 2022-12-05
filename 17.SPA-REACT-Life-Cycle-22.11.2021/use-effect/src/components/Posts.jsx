import { useEffect, useState } from "react";

export const Posts = () => {

    const [post, setPost] = useState({});
    const [id, setId] = useState(1);

    async function getPost() {
        try {
            const resObj = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const parsed = await resObj.json();
            setPost(parsed);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        // api calls are what we refer to as side-effects
        getPost();
    }, [id]);

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //         .then(resObj => resObj.json())
    //         .then(parsed => {
    //             console.log(parsed);
    //             setPost(parsed)
    //         })
    //         .catch(err => console.log(err));
    // }, [id])

    return (
        <div>
            <h1>{post.title}</h1>
            <h3>{post.body}</h3>
            <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
    )
}
