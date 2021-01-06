import React from 'react';

interface Props {
  name: String;
}

const HomePage = (props:Props) => {
  return (
    <div>
      <h1>Hola mundo desde mi componente</h1>
      <h2>{props.name}</h2>
      
      <button onClick={data}>obtener data</button>
    </div>
  )
}

async function data() {
  // e.preventDefault()
  let resp = await fetch("https://rickandmortyapi.com/api")
  const body = await resp.json();

  console.log(body);
  
}

export default HomePage;