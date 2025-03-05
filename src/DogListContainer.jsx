// @ts-check

import { useEffect,useState } from "react"

export const DogListContainer = () => {

  const [breeds,SetBreeds] = useState([]);

  useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => SetBreeds(data));
  },[])

  return <></>
}

export default DogListContainer
