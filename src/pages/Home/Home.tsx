import React, { FC, useEffect, useMemo, useState } from 'react';

import { AddModal, Chart, Icon } from 'components';
import { useAppContext } from 'context';
import { RoomService } from 'services';
import { Connection } from 'types';

import { HomePageProps } from './Home.types';
import S from './Home.styles';

export const HomePage: FC<HomePageProps> = () => {
  const { room } = useAppContext();

  const roomService = new RoomService();

  const [modalOpened, openModal] = useState<boolean>(() => false);
  const [connections, setConnections] = useState<Array<Connection>>(() => []);

  useEffect(() => {
    if (room) roomService.getConnections(room.id).then(setConnections);
  }, [room]);

  const { nodes, links } = useMemo(() => {
    const n = connections.reduce((prev: Array<{ id: string }>, curr) => prev.concat([{ id: curr.first }, { id: curr.second }]), []);
    const l = connections.map(({ first, second }) => ({ source: first, target: second }));

    return { nodes: n, links: l };
  }, [connections]);

  return (
    <>
      {!!modalOpened && <AddModal onClose={() => openModal(false)} />}

      <Chart nodes={nodes} links={links} />

      <S.AddButton onClick={() => openModal(true)}>
        <Icon name="plus" />
      </S.AddButton>
    </>
  );
};
