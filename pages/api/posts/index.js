
import data from '../data'

// http://localhost:3000/api/posts
const post = (req, res) => {
    const {Posts} = data;

    if(Posts) return res.status(200).json(Posts);
    return res.status(404).json({ error: "Data Not Found" })
}

export default post