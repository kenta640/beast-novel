import { useQuery } from "react-query";
export enum ServerStateKeysEnum {
    Novel = 'novel'
}

export const useGetEpisodes = () =>
  useQuery(
    ServerStateKeysEnum.Novel,
    () => fetch('https://fastify-mysql-server.herokuapp.com/episode', {
      method: 'GET',
      mode: 'cors',
    })
    .then(x=>x.json()),  //Simple fetch function
  );