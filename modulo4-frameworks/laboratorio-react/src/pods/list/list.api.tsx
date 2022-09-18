import React from 'react';
import { List } from './list';
import { MemberEntity } from './list.model';
import { useDebounce } from 'use-debounce';
import { MyContext } from '../../core/context/context';

export const ListApi: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const {organization, setOrganization} = React.useContext(MyContext);
  const [organizationSearch] = useDebounce(organization, 2000);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${organizationSearch}/members`)
      .then((response) => response.json())
      .then(setMembers);
  }, [organizationSearch]);

  return <List members={members} />;
};
