export interface CharacterEntityVm {
  id: number;
  image: string;
  name: string;
  status: string;
  gender: string;
  species: string;
}

export interface CharacterCollectionVm {
  characters: CharacterEntityVm[];
  pages: number;
  page: number;
}

export const createEmptyCharacterCollection = (): CharacterCollectionVm => ({
  characters: [],
  pages: 0,
  page: 1,
});
