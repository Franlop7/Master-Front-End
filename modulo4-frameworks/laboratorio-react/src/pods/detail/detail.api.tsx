import React from 'react';
import { MemberDetailEntity, createDefaultMemberDetail } from './detail.model';
import { Detail } from './detail';

interface Props {
  id: string;
}

export const DetailApi: React.FC<Props> = (props) => {
  const { id } = props;
  const [member, setMember] = React.useState<MemberDetailEntity>(
    createDefaultMemberDetail()
  );

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((res) => res.json())
      .then((json) => setMember(json));
  });

  return <Detail member={member} />;
};
