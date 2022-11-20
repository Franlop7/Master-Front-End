import { Character, LocationApi } from './character.api-model';
import { gql } from 'graphql-request';
import { graphQLClient } from '../../../core/api';

interface GetCharacterResponse {
  character: Character
}

export const getCharacter = async (id: string): Promise<Character> => {
  const query = gql`
    query {
      character(id: ${id}) {
        id
        name
        status
        species
        gender
        image
        location {
          id
          name
        }
      }
    }`;
  const { character } = await graphQLClient.request<GetCharacterResponse>(
    query
  );
  return character;
};

interface GetLocationsResponse {
  locations: {
    results: LocationApi[];
  }
}

export const getLocations = async (): Promise<LocationApi[]> => {
  const query = gql`
    query {
      locations {
        results {
          id
          name
        }
      }
    }`;
  const { locations } = await graphQLClient.request<GetLocationsResponse>(
    query
  );
  return locations.results;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
