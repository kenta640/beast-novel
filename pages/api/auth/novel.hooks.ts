import { useQuery } from "react-query";
export enum ServerStateKeysEnum {
    Novels = 'novels',
    Novel = 'novel'
}

export const useGetNovels = () =>
  useQuery(
    ServerStateKeysEnum.Novels,
    () => fetch('https://fastify-mysql-server.herokuapp.com/novel', {
      method: 'GET',
      mode: 'cors',
    })
    .then(res=>res.json()),  //Simple fetch function
  );
  // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
  export const useGetNovel = (novel_id) =>
  useQuery(
    ServerStateKeysEnum.Novel,
    () => fetch(`https://fastify-mysql-server.herokuapp.com/novel/${novel_id}`, {
      method: 'GET',
      mode: 'cors',
    })
    .then(res=>res.json()),  //Simple fetch function
  );