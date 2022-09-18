import React from 'react';
import { Link } from 'react-router-dom';
import { MemberDetailEntity } from './detail.model';

interface Props {
  character: MemberDetailEntity;
}

export const Detail: React.FC<Props> = (props) => {
  const { character: character } = props;

  return (
    <>
      <h2>Hello from Detail page</h2>
      <h3> Id: {character.id}</h3>
      <h3> Name: {character.name}</h3>
      <h3> Specie: {character.species}</h3>
      <h3> Type: {character.type}</h3>
      <h3> Gender: {character.gender}</h3>
      <Link to="/list">Back to list page</Link>
    </>
  );
};
