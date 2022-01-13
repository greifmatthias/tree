import { FC } from 'react';
import { Graph } from 'react-d3-graph';

import { config } from './Chart.config';
import S from './Chart.styles';
import { ChartProps } from './Chart.types';

export const Chart: FC<ChartProps> = ({ nodes, links }) => {
  const onClickNode = (node: string) => console.log(`Clicked node ${node}`);

  const onClickLink = (source: string, target: string) => console.log(`Clicked link between ${source} and ${target}`);

  return (
    <S.Root>
      <Graph id="chart" data={{ nodes, links }} config={config} onClickNode={onClickNode} onClickLink={onClickLink} />
    </S.Root>
  );
};
