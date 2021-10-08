//import { useEffect } from "react";
import { GetServerSideProps } from "next";
import { api } from "../services/api";
import {format,parseISO} from 'date-fns';

type Episode = {
  episodes: Array<{
    id: string;
    title: string;
    members: string;
    published_at: string;
  }>
}

type HomeProps={
  episodes: Episode[];
}

export default function Home(props: HomeProps){
    
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

export  const getServerSideProps: GetServerSideProps = async () => {
  const response= await api.get('episodes',{
    params:{
      _limit:12,
      _sort:'published_at',
      _order: 'desc'
    }
  });
  const data= await response.data

  const episodes= data.map ( episode=>{
    return{
      id:episode.id,
      title:episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt:episode.published_at
    }
  })

  return{
    props:{
      episodes: data,
    }
  }
}