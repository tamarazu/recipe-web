import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useFetcher(url) {
    const [data, setStateData] = useState([])
    const [loading, setStateLoading] = useState(false)
    const [error, setError] = useState(null)
    
  useEffect(() => {
    setStateLoading(true)
    axios({
      method: 'get',
      url
    })
      .then(({data}) => {
        setStateData(data)
      })
      .catch(({ response }) => {
        setError(response)
      })
      .finally(() => {
        setStateLoading(false)
      })
  }, [url])
   return { data, loading, error }
}