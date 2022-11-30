import React from 'react'
import data from './data'

// http://localhost:3000/api/popular
const popular = (req, res) => {
    const {Popular} = data;

    if(Popular) return res.status(200).json(Popular);
    return res.status(404).json({ error: "Data Not Found" })
}

export default popular