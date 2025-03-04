// DO NOT DELETE

import './App.css'

import { useState } from 'react'
/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl,setDogUrl] = useState("https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_442.jpg");

  function chgUrl(){
    queryAllByAttribute("test");
    //setDogUrl("https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg");
  }

  return (
    <>
    <header> Cat APP </header> 
    <h1>犬の画像を表示するサイトです</h1>
    <img src={dogUrl}></img>
    <button onClick="chgUrl">更新</button>
    </>
    
  )
}
