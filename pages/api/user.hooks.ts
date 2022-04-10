import { useQuery } from "react-query";
export enum ServerStateKeysEnum {
    User = 'user'
}

export const useGetUsers = () =>
  useQuery(
    ServerStateKeysEnum.User,
    () => fetch('https://fastify-mysql-server.herokuapp.com/user'),  //Simple fetch function
  );
