import React from 'react';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import { FilterForm } from './filter-form.component';
import * as classes from './filter.styles';
import { FilterCharacter } from '../../api';

interface Props {
  onSearch: (query: FilterCharacter) => void;
}

export const Filter: React.FC<Props> = (props) => {
  const {onSearch} = props;
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleSearch = (query: FilterCharacter) => {
    setAnchorEl(null);
    onSearch(query);
  }

  return (
    <div className={classes.container}>
      <Button variant="contained" color="primary" onClick={handleClick}>Filter</Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={() => setAnchorEl(null)}
        keepMounted
      >
        <FilterForm onSearch={handleSearch}/>
      </Popover>
    </div>
  );
};
