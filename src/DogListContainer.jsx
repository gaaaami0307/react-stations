// @ts-check

import { useEffect,useState } from "react"
import { BreedsSelect } from "./BreedsSelect"

export const DogListContainer = () => {

  const [breeds,SetBreeds] = useState(['']);

  useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => {
      const ary = Object.keys(data.message);
      console.log(ary)
      SetBreeds(ary);
  });
  },[])

  return <>
    <BreedsSelect breeds={breeds}/>
  </>
}

export default DogListContainer
