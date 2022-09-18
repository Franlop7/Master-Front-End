import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { MemberDetailEntity } from './detail.model';

interface Props {
  member: MemberDetailEntity;
}

export const Detail: React.FC<Props> = (props) => {
  const { member } = props;

  return (
    <>
      <h2>Hello from Detail page</h2>
      <h3>User Id: {member.id}</h3>
      <h3>Login: {member.login}</h3>
      <h3>Company: {member.company}</h3>
      <h3>Bio: {member.bio}</h3>
      <Link to="/list">Back to list page</Link>
    </>
  );
};
