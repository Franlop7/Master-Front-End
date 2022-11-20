import { gql } from 'graphql-request';
import { CharactersResponseApi } from './character-collection.api-model';
import { FilterCharacter } from '../components/search/filter-form.component';
import { graphQLClient } from '../../../core/api';

interface GetCharacterCollectionResponse {
  characters: CharactersResponseApi;
}

export const getCharacterCollection = async (page: number, filter?: FilterCharacter): Promise<CharactersResponseApi> => {
  const query = gql`
    query ($page: Int!, $name: String, $type: String, $species: String, $status: String, $gender: String){
  characters (page: $page, filter: {name: $name, type: $type, species: $species, status: $status, gender: $gender}) {
    info {
      pages
    }
    results {
      id
      name
      status
      species
      gender
      image
    }
  }
}`;
  let variables = {};
  if (filter) variables = { ...filter };
  const { characters } = await graphQLClient.request<GetCharacterCollectionResponse>(query, {
    ...variables,
    page: page,
  });
  return characters;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  return true;
};
