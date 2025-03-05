// @ts-check

import { useEffect } from "react"

export const DogListContainer = () => {

  useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => console.log(data));
  },[])

  return <></>
}

export default DogListContainer
