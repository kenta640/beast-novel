import { useQuery } from "react-query";

export enum ServerStateKeysEnum {
    Text = 'text'
}


// @ts-ignore to ignore the type checking errors on the next line in a TypeScript
export const useFetchText = (episode_id) =>
  useQuery(
    ServerStateKeysEnum.Text,
    () => fetch(`https://fastify-mysql-server.herokuapp.com/text/${episode_id}`)
    .then(x => x.json()) //Simple fetch function
  );