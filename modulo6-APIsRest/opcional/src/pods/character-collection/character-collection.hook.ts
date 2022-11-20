import * as React from 'react';
import { CharacterCollectionVm, createEmptyCharacterCollection } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';
import { FilterCharacter } from './components/search/filter-form.component';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterCollectionVm>(
    createEmptyCharacterCollection(),
  );

  const loadCharacterCollection = (page: number, filter?: FilterCharacter) => {
    getCharacterCollection(page, filter).then((response) => setCharacterCollection({
        pages: response.info.pages,
        characters: mapToCollection(response.results, mapFromApiToVm),
        page: page,
      }),
    );
  };

  return { characterCollection, loadCharacterCollection };
};
