import { MemberDetailEntity } from './detail.model';

export const DetailApi = async (id: string): Promise<MemberDetailEntity> => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`).then(
    (res) => {
      return res.json();
    }
  );
};
