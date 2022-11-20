import * as React from 'react';
import Button from '@material-ui/core/Button';
import { CharacterCollectionVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import { Filter } from './components/search/filter.component';
import { FilterCharacter } from './api';
import Pagination from '@material-ui/lab/Pagination';

interface Props {
  characterCollection: CharacterCollectionVm;
  onCreateCharacter: () => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onSearch: (filter: FilterCharacter) => void;
  onPaginate: (page: number) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const {
    characterCollection,
    onCreateCharacter,
    onEdit,
    onDelete,
    onSearch,
    onPaginate,
  } = props;

  const handleChangePagination = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    onPaginate(value);
  };

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Button variant='contained' color='primary' onClick={onCreateCharacter}>
          Add character
        </Button>

        <Filter onSearch={onSearch} />
      </header>

      <main>
        <ul className={classes.list}>
          {characterCollection.characters.map((character) => (
            <li key={character.id}>
              <CharacterCard character={character} onEdit={onEdit} onDelete={onDelete} />
            </li>
          ))}
        </ul>
      </main>

      <footer className={classes.footer}>
        <Pagination count={characterCollection.pages} page={characterCollection.page} variant='outlined'
                    onChange={handleChangePagination} color="secondary"/>
      </footer>
    </div>
  );
};
