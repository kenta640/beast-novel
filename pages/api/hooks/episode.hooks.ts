import { useQuery } from "react-query";
export enum ServerStateKeysEnum {
    Episode = 'episode'
}
// @ts-ignore to ignore the type checking errors on the next line in a TypeScript
export const useGetEpisodes = (novel_id) =>{
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