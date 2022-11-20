import React from 'react';
import { FilterCharacter } from '../../pods/character-collection/api';

interface CharacterCollectionContexModel {
  characterFilter: FilterCharacter;
  setCharacterFilter: (characterFilter: FilterCharacter) => void;
}

export const initialFilter: FilterCharacter = {
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
};

export const CharacterCollectionContext =
  React.createContext<CharacterCollectionContexModel>({
    characterFilter: initialFilter,
    setCharacterFilter: () => {
      console.log('No olvides agregar CharacterCollectionContex');
    },
  });

export const CharacterCollectionProvider: React.FC = (props) => {
  const { children } = props;
  const [characterFilter, setCharacterFilter] =
    React.useState<FilterCharacter>(initialFilter);

  return (
    <CharacterCollectionContext.Provider
      value={{
        characterFilter,
        setCharacterFilter,
      }}
    >
      {children}
    </CharacterCollectionContext.Provider>
  );
};
