import { Button, Pagination, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../core/context/context';
import { Info, MemberEntity } from './list.model';

interface Props {
  members: MemberEntity[];
  pageInfo: Info;
  changePage: (e, page) => void;
}

export const List: React.FC<Props> = (props) => {
  const { members, pageInfo, changePage } = props;
  const { character, setCharacter, navigationPage } =
    React.useContext(MyContext);

  console.log('Render List', members);

  return (
    <>
      <h2>Hello from List page</h2>
      <div className="login-container">
        <TextField
          id="outlined-basic"
          label="Character"
          defaultValue={character}
          variant="outlined"
          onChange={(e) => setCharacter(e.target.value)}
        />
      </div>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Name</span>
        <span className="list-header">Specie</span>
        <span className="list-header">Gender</span>
        {members.map((member) => (
          <>
            <Link to={`/detail/${member.id}`}>
              <img src={member.image} />
            </Link>
            <Link to={`/detail/${member.id}`}>{member.name}</Link>
            <span>{member.species}</span>
            <span>{member.gender}</span>
          </>
        ))}
      </div>
      <Pagination
        count={pageInfo.pages}
        defaultPage={1}
        color="secondary"
        page={navigationPage}
        onChange={changePage}
      />
    </>
  );
};
