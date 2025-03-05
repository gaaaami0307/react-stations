// @ts-check

import { useEffect,useState } from "react"
import { BreedsSelect } from "./BreedsSelect"

export const DogListContainer = () => {

  const [breeds,SetBreeds] = useState(['']);
  const [dogList,SetDogList] = useState(['']);
  const [selectedBreed,setSelectedBreed] = useState("");

  useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => {
      const ary = Object.keys(data.message);
      console.log(ary)
      SetBreeds(ary);
  });
  },[])

  function changeDogList(){
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
    .then((response) => response.json())
    .then((data) => SetDogList(data.message));
  }

  return <>
    <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} setSelectedBreed={setSelectedBreed}/>
    <button onClick={changeDogList}>表示</button>
  </>
}

export default DogListContainer
