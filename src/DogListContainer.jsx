// @ts-check

import { useEffect,useState } from "react"
import { BreedsSelect } from "./BreedsSelect"

export const DogListContainer = () => {

  const [breeds,SetBreeds] = useState([]);

  useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => SetBreeds(data.message));
    console.log(breeds)
  },[])

  return <>
    <BreedsSelect breeds={breeds}/>
  </>
}

export default DogListContainer
