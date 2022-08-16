import { useQuery, useQueryClient, useMutation } from "react-query";
export enum ServerStateKeysEnum {
    Episode = 'episode'
}
// @ts-ignore to ignore the type checking errors on the next line in a TypeScript
export const useFetchEpisodes = (novel_id) =>{
const id = encodeURIComponent(novel_id)
  const query = useQuery(
    ServerStateKeysEnum.Episode,
    () => fetch(`https://fastify-server-app.herokuapp.com/episodeByNovel/${id}`)
    .then(res=> {return res.json()})
    .then(res=> {return res})
    .catch((error) => {
      console.error('Error:', error);
    })
    ,  //Simple fetch function
  );
  return query
}

// @ts-ignore to ignore the type checking errors on the next line in a TypeScript
export const useAddEpisode = (params) => {
  const queryClient = useQueryClient();
  return useMutation(
    ServerStateKeysEnum.Episode,
    () => fetch(`https://fastify-server-app.herokuapp.com/addEpisode`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        episode_title: params.episode_title,
        header: params.header,
        novel_id: params.novel_id
      })
    })
    .then(res=>{return res.json()})
    .then(res=>{return res}),  //Simple fetch function
  );
  
}