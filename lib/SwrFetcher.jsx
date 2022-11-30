// Go to https://swr.vercel.app/docs/getting-started
import useSWR from "swr"

const URL = "http://localhost:3000/"

const fetcher = (...args) => fetch(...args).then(res => res.json())

const SwrFetcher = (endpoint) => {
  const {data, error} = useSWR(`${URL}${endpoint}`, fetcher)
  
  return {
    data,
    isLoading: !error && !data,
    isError : error
  }
  // Go to Section2.jsx
}

export default SwrFetcher