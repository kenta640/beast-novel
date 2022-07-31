import { useQuery } from "react-query";
export enum ServerStateKeysEnum {
    NovelsByUser = 'NovelsByUser'
}
  // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
  export const useGetNovelByUser = (user_id) => {
    const id   = encodeURIComponent(user_id);
    const query = useQuery(
    ServerStateKeysEnum.NovelsByUser,
    () => fetch(`https://fastify-server-app.herokuapp.com/novelsByUserId/${id}`)
    .then(res=>
      {
        const result = res.json();
        return result
      })
      .then(res=>
        {
        return res})
      .catch((error) => {
        console.error('Error:', error);
      })
  );
   return query
  }