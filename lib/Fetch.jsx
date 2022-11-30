
const URL = "http://localhost:3000/api/posts";

// endpoint: http://localhost:3000/api/posts/1
const Fetch = async (id) => {
    const res = await fetch(`${URL}`)
    const posts = await res.json()

    if(id) {
        return posts.find(value => value.id == id)
    }

    return posts;
}

export default Fetch

// Step-1