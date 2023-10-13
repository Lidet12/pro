import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "../../config/firebase";
import { Post } from "./post";


export interface Post{
    id: string;
    userId: string;
    title: string;
    username: string;
    description: string;
}

export const Main = () => {
    const [postsList,setPostsList] = useState<Post[] | null>(null);
    const postsRef = collection(database,"posts");

    

    const getPosts = async () => {
        const data = await getDocs(postsRef);
        setPostsList(
            data.docs.map((doc) =>({ ...doc.data(), id: doc.id})) as Post[]
        )};

        useEffect (() =>{
            getPosts();
        },[])
    return (
    <div> 
        {postsList?.map((post) => (
         <Post post={post}/>
        ))}
    </div>
    )
};