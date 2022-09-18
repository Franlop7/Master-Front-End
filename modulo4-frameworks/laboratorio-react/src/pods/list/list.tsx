import { Button, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../core/context/context';
import { MemberEntity } from './list.model';

interface Props {
  members: MemberEntity[];
}

export const List: React.FC<Props> = (props) => {
  const { members } = props;
  const { organization, setOrganization } = React.useContext(MyContext);
  const [inputOrganization, setInputOrganization] =
    React.useState(organization);

  return (
    <>
      <h2>Hello from List page</h2>
      <div className="login-container">
        <TextField
          id="outlined-basic"
          label="Organization"
          defaultValue={organization}
          variant="outlined"
          onChange={(e) => setInputOrganization(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => setOrganization(inputOrganization)}
        >
          Search
        </Button>
      </div>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
          <>
            <Link to={`/detail/${member.login}`}>
              <img src={member.avatar_url} />
            </Link>
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </>
        ))}
      </div>
    </>
  );
};
