import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
export type Novel = {
  id: string;
  title: string;
  summary: string;
};



export enum ServerStateKeysEnum {
    Novels = 'novels',
    Novel = 'novel',
    PostNovel = `postNovel`
}



// @ts-ignore to ignore the type checking errors on the next line in a TypeScript

export const useAddNovel = (params) => {
  const queryClient = useQueryClient();
  return useMutation(
    ServerStateKeysEnum.Novel,
    () => fetch(`https://fastify-server-app.herokuapp.com/addNovel`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: params.title,
        summary: params.summary,
        user_id: params.user_id
      })
    })
    .then(res=>{return res.json()})
    .then(res=>{return res}),  //Simple fetch function
  );
  
}


export const useGetNovels = () =>
  useQuery(
    ServerStateKeysEnum.Novels,
    () => fetch(`https://fastify-server-app.herokuapp.com/novel`, {
      method: 'GET',
      mode: 'cors',
    })
    .then(res=>res.json()),  //Simple fetch function
  );
  // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
  export const useGetNovel = (novel_id) => {
    const id   = encodeURIComponent(novel_id);
    return useQuery(
      ServerStateKeysEnum.Novel,
      () => fetch(`https://fastify-server-app.herokuapp.com/novel/${id}`, {
        method: 'GET',
        mode: 'cors',
      })
      .then(res=>{return res.json()})
      .then(res=>{return res}),  //Simple fetch function
    );
    
  }
  
