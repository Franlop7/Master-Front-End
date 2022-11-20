import React from 'react';
import TextField from '@material-ui/core/TextField';
import * as classes from './filter-form.styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MenuItem, Select } from '@material-ui/core';
import {
  CharacterCollectionContext,
  initialFilter,
} from '../../../../core/character-collection/character-collection.context';
import { FilterCharacter } from '../../api';

interface Props {
  onSearch: (filter: FilterCharacter) => void;
}

export const FilterForm: React.FC<Props> = (props) => {
  const { onSearch } = props;
  const { characterFilter, setCharacterFilter } = React.useContext(
    CharacterCollectionContext
  );

  const handleClickSearch = () => {
    onSearch(characterFilter);
  };

  const handleClickClear = () => {
    setCharacterFilter({ ...initialFilter });
    onSearch({ ...initialFilter });
  };

  const handleOnChangeQuery =
    (key: keyof FilterCharacter) =>
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setCharacterFilter({
        ...characterFilter,
        [key]: event.target.value,
      });

  return (
    <div className={classes.container}>
      <div>
        <Typography variant="h6">Name</Typography>
        <TextField
          value={characterFilter.name}
          onChange={handleOnChangeQuery('name')}
        />
      </div>
      <div>
        <Typography variant="h6">Status</Typography>
        <Select
          className={classes.select}
          value={characterFilter.status}
          onChange={handleOnChangeQuery('status')}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="Dead">Dead</MenuItem>
          <MenuItem value="Alive">Alive</MenuItem>
          <MenuItem value="unknown">Unknown</MenuItem>
        </Select>
      </div>
      <div>
        <Typography variant="h6">Type</Typography>
        <TextField
          value={characterFilter.type}
          onChange={handleOnChangeQuery('type')}
        />
      </div>
      <div>
        <Typography variant="h6">Gender</Typography>
        <Select
          className={classes.select}
          value={characterFilter.gender}
          onChange={handleOnChangeQuery('gender')}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Genderless">Genderless</MenuItem>
          <MenuItem value="unknown">Unknown</MenuItem>
        </Select>
      </div>
      <div>
        <Typography variant="h6">Species</Typography>
        <TextField
          value={characterFilter.species}
          onChange={handleOnChangeQuery('species')}
        />
      </div>

      <div>
        <Button variant="outlined" color="secondary" onClick={handleClickClear}>
          Clear
        </Button>
        <Button variant="contained" color="primary" onClick={handleClickSearch}>
          Search
        </Button>
      </div>
    </div>
  );
};
