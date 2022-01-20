import { AddModal } from 'components';
import React, { FC, useState } from 'react';
import { Graph } from 'react-d3-graph';

import { config } from './Chart.config';
import S from './Chart.styles';
import { ChartProps } from './Chart.types';

export const Chart: FC<ChartProps> = ({ nodes, links }) => {
  const [modalOpened, openModal] = useState<boolean>(() => false);

  const [first, setFirstValue] = useState<string | undefined>(undefined);
  const [second, setSecondValue] = useState<string | undefined>(undefined);

  const onClickNode = (node: string) => console.log(`Clicked node ${node}`);

  const onClickLink = (source: string, target: string) => {
    setFirstValue(source);
    setSecondValue(target);

    openModal(true);
    console.log(`Clicked link between ${source} and ${target}`);
  };

  return (
    <>
      {!!modalOpened && <AddModal onClose={() => openModal(false)} first={first} second={second} />}

      <S.Root>
        <Graph id="chart" data={{ nodes, links }} config={config} onClickNode={onClickNode} onClickLink={onClickLink} />
      </S.Root>
    </>
  );
};
