import React from 'react';
import { useDebounce } from 'use-debounce';
import { MyContext } from '../../core/context/context';
import { List } from './list';
import { ListApi } from './list.api';
import { createDefaultInfo, Info, MemberEntity, ResApi } from './list.model';

export const ListContainer: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [pageInfo, setPageInfo] = React.useState<Info>(createDefaultInfo());

  const { character, navigationPage, setNavigationPage } =
    React.useContext(MyContext);
  const [characterSearch] = useDebounce(character, 2000);

  const onChangePageHandle = (e, page) => {
    setNavigationPage(page);
  };

  const fethAPI = () => {
    ListApi(character, navigationPage).then(({ info, results }) => {
      setPageInfo(info);
      setMembers(results);
    });
  };

  React.useEffect(() => {
    fethAPI();
  }, [characterSearch, navigationPage]);

  return (
    <List
      members={members}
      pageInfo={pageInfo}
      changePage={onChangePageHandle}
    />
  );
};
