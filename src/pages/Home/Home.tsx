import React, { FC, useMemo, useState } from 'react';
import { uniqBy } from 'lodash';

import { AddModal, Chart, Icon } from 'components';
import { useAppContext } from 'context';

import { HomePageProps } from './Home.types';
import S from './Home.styles';

export const HomePage: FC<HomePageProps> = () => {
  const { room, connections } = useAppContext();

  const [modalOpened, openModal] = useState<boolean>(() => false);

  const { nodes, links } = useMemo(() => {
    // Aggregate nodes
    const n = uniqBy(
      connections.reduce((prev: Array<{ id: string }>, curr) => prev.concat([{ id: curr.first }, { id: curr.second }]), []),
      'id',
    );

    // Aggregate links between nodes
    const l = connections.map(({ first, second, type }) => ({
      source: first,
      target: second,
      color: room?.connectiontypes[type]?.color || '#000000',
    }));

    return { nodes: n, links: l };
  }, [connections]);

  return (
    <>
      {!!modalOpened && <AddModal onClose={() => openModal(false)} />}

      <Chart nodes={nodes} links={links} />

      <S.AddButton onClick={() => openModal(true)}>
        <Icon name="plus" />
      </S.AddButton>

      <S.LinkTypesLegend></S.LinkTypesLegend>
    </>
  );
};
