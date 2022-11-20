import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteCharacter, FilterCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import {
  CharacterCollectionContext
} from '../../core/character-collection/character-collection.context';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  const {characterFilter} = React.useContext(CharacterCollectionContext);
  const history = useHistory();

  React.useEffect(() => {
    loadCharacterCollection(characterCollection.page);
  }, []);

  const handleCreateCharacter = () => {
    history.push(linkRoutes.createCharacter);
  };

  const handleEdit = (id: number) => {
    history.push(linkRoutes.editCharacter(id.toString()));
  };

  const handleDelete = async (id: number) => {
    await deleteCharacter(Number(id));
    loadCharacterCollection(characterCollection.page, characterFilter);
  };

  const handleSearch = (filter: FilterCharacter) => {
    loadCharacterCollection(1, filter);
  };

  const handlePagination = (page: number) => {
    loadCharacterCollection(page, characterFilter);
  };

  return (
      <CharacterCollectionComponent
        characterCollection={characterCollection}
        onCreateCharacter={handleCreateCharacter}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onSearch={handleSearch}
        onPaginate={handlePagination}
      />
  );
};
