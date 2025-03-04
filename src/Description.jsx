// @ts-check
import { useState } from 'react'
import { DogImage } from "./DogImage"

export const Description = () => {
  const [dogUrl,setDogUrl] = useState("https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_442.jpg");

  async function getUrlData(){
    const URL="https://dog.ceo/api/breeds/image/random";
    try{
      const response = await fetch(URL);
      if(!response.ok) throw new Error(`Error: status-${response.status}`);

      const json = await response.json();
      return json;
    } catch(error){
      console.error(error.message);
    }
  }

  async function chgUrl(){
    const data = await getUrlData();
    console.log(data.message);
    setDogUrl(data.message);
  }


  return <>
    <h1>犬の画像を表示するサイトです</h1>
    <DogImage imageUrl={dogUrl}/>
    <button onClick={chgUrl}>更新</button>
  </>
}

export default Description
