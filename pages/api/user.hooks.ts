import { useQuery } from "react-query";
export enum ServerStateKeysEnum {
    User = 'user'
}

export const useGetUsers = () =>
  useQuery(
    ServerStateKeysEnum.User,
    () => fetch('https://fastify-mysql-server.herokuapp.com/user'),  //Simple fetch function
  );


  export const useGetUser = () =>
  useQuery(
    ServerStateKeysEnum.User,
    () => fetch(`https://fastify-mysql-server.herokuapp.com/user`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
       redirect: 'follow',
       referrerPolicy: 'strict-origin-when-cross-origin'
    }),  //Simple fetch function
  );
