import { useMutation, useQuery } from "react-query";
export enum ServerStateKeysEnum {
    User = 'user'
}


export const useGetUsers = async () =>
  await useQuery(
    ServerStateKeysEnum.User,
    () => fetch(`https://fastify-server-app.herokuapp.com/user`)
    .then(res=>res.text())
    ,  //Simple fetch function
  );

// @ts-ignore to ignore the type checking errors on the next line in a TypeScript
export const useFetchUser = async (email) =>
  
  useQuery(
    ServerStateKeysEnum.User,
    () => fetch(`https://fastify-server-app.herokuapp.com/user/${email}`,
    {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache'
    })
    .then(res => 
      
      res.json()
    )
    .catch(e=>{
      console.log(e)
    }) //Simple fetch function
  );

