// @ts-check

import { useState } from "react"

export const BreedsSelect = (breeds = []) => {
  const [selectedBreed,setSelectedBreed] = useState("");

  return <>
    <select value={selectedBreed} onChange={(e)=>setSelectedBreed(e.target.value)}>
    <option value="">未選択</option>
    {breeds.map((breed,index) => (
      <option key={index} value={breed}>{breed}</option> 
    ))
    }

    </select>
  </>
}

export default BreedsSelect
