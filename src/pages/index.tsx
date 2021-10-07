import { useEffect } from "react";

export default function Home(props){
    
  /*useEffect(() =>{
    fetch('http://localhost:3333/episodes')
    .then(response=>response.json())
    .then(data=>console.log(data))
  },[]) //- Esse tipo de função retorna os dados pro usuário assim que a página é executada, porém se o cliente desabilitar o javaScript não é retornado nenhum dado.
  */

return(
  <div>
  <h1>t</h1>
  <p>{JSON.stringify(props.episodes)}</p>
  </div>
);

}

export async function getServerSideProps(){
  const response= await fetch('http://localhost:3333/episodes');
  const data= await response.json()

  return{
    props:{
      episodes: data,
    }
  }
}