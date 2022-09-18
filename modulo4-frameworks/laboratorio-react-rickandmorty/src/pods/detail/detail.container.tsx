import React from 'react';
import { Detail } from './detail';
import { DetailApi } from './detail.api';
import { createDefaultMemberDetail, MemberDetailEntity } from './detail.model';

interface Props {
  id: string;
}

export const DetailContainer: React.FC<Props> = ({ id }) => {
  const [character, setCharacter] = React.useState<MemberDetailEntity>(
    createDefaultMemberDetail()
  );

  const fetchAPI = async () => {
    const response = await DetailApi(id);
    setCharacter(response);
  };

  React.useEffect(() => {
    fetchAPI();
  }, []);

  return <Detail character={character} />;
};
