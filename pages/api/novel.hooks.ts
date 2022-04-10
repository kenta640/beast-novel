import { useQuery } from "react-query";
export enum ServerStateKeysEnum {
    Novel = 'novel'
}

export const useGetNovels = () =>
  useQuery(
    ServerStateKeysEnum.Novel,
    () => fetch('https://fastify-mysql-server.herokuapp.com/novel'),  //Simple fetch function
  );
  