import { useEffect, useState } from 'react'

type useAutoChangeReturn = [ boolean, React.Dispatch<React.SetStateAction<boolean>>]
type useAutoChangeParams = {
  time?: number
}

const useAutoChange = (params?: useAutoChangeParams): useAutoChangeReturn => {
  const { time = 2000 } = params || {}; 
  
  const [ state, setState ] = useState(false);

  useEffect(() => {
    if (state) {
      setTimeout(() => {
        setState(false);
      }, time);
    }
  })

  return [state, setState]
}

export default useAutoChange
