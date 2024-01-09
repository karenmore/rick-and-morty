import axios from "axios"
import { useState } from "react"


const useFetch = (url) => {

  const [response, setResponse] = useState()
  const [hasError, setHaserror] = useState(false)

  const getApi = () => {
    axios.get(url)
    .then(res => {
      setResponse(res.data)
      setHaserror(false)
    })
    .catch(err => {
      console.log(err)
      setHaserror(true)
    })
  }

  return [response, getApi, hasError]

}

export default useFetch
