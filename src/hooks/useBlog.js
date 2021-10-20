import { useEffect, useState } from "react"

const useBlogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('/blog-data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return blogs;
}

export default useBlogs;