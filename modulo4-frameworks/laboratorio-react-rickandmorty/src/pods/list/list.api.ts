import { ResApi } from './list.model';

export const ListApi = async (
  character: string,
  navigationPage: number
): Promise<ResApi> => {
  return fetch(
    `https://rickandmortyapi.com/api/character/?name=${character}&page=
    ${navigationPage}`
  ).then((res) => {
    return res.json();
  });
};
