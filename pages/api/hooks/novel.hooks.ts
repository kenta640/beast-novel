import { useQuery } from "react-query";
export enum ServerStateKeysEnum {
    Novels = 'novels',
    Novel = 'novel'
}
// @ts-ignore to ignore the type checking errors on the next line in a TypeScript
export const useAddNovel = (params) => {
  console.log(params)
  return useQuery(
    ServerStateKeysEnum.Novel,
    () => fetch(`https://fastify-mysql-server.herokuapp.com/novel/`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(res=>{return res.json()})
    .then(res=>{return res}),  //Simple fetch function
  );
  
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
  export const useGetNovel = (novel_id) => {
    console.log(novel_id)
    const id   = encodeURIComponent(novel_id);
    return useQuery(
      ServerStateKeysEnum.Novel,
      () => fetch(`https://fastify-mysql-server.herokuapp.com/novel/${id}`, {
        method: 'GET',
        mode: 'cors',
      })
      .then(res=>{return res.json()})
      .then(res=>{return res}),  //Simple fetch function
    );
    
  }