export interface MemberEntity {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

export interface Info {
  count: number;
  pages: number;
}

export interface ResApi {
  results: MemberEntity[];
  info: Info;
}

export const createDefaultInfo = () => ({
  count: 0,
  pages: 1,
});
