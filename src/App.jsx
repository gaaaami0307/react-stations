// DO NOT DELETE

import './App.css'

import { useState } from 'react'
/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl,setDogUrl] = useState("https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_442.jpg");

  async function getUrlData(){
    const URL="https://dog.ceo/api/breeds/image/random";
    try{
      const response = await fetch(URL);
      if(!response.ok) throw new Error(`Error: status-${response.status}`);

      const json = await response.json();
      console.log(json);
    } catch(error){
      console.error(error.message);
    }
  }

  function chgUrl(){
    setDogUrl("https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg");
  }

  return (
    <>
    <header> Cat APP </header> 
    <h1>犬の画像を表示するサイトです</h1>
    <img src={dogUrl}></img>
    <button onClick={chgUrl}>更新</button>
    </>
    
  )
}
