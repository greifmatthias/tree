import { Graph } from 'react-d3-graph';

import { config } from './Chart.config';
import S from './Chart.styles';

export const Chart = () => {
  const data = {
    nodes: [{ id: 'Remi' }, { id: 'Thomas' }, { id: 'Matthias' }, { id: 'Wim' }, { id: 'Madaloni' }, { id: 'Zoe' }, { id: 'Celeste' }],
    links: [
      { source: 'Remi', target: 'Thomas' },
      { source: 'Remi', target: 'Matthias' },
      { source: 'Matthias', target: 'Thomas' },
      { source: 'Matthias', target: 'Wim' },
      { source: 'Thomas', target: 'Wim' },
      { source: 'Madaloni', target: 'Remi' },
      { source: 'Madaloni', target: 'Matthias' },
      { source: 'Zoe', target: 'Remi' },
      { source: 'Zoe', target: 'Matthias' },
      { source: 'Celeste', target: 'Remi' },
      { source: 'Celeste', target: 'Matthias' },
      { source: 'Celeste', target: 'Thomas' },
    ],
  };

  const onClickNode = (node: string) => console.log(`Clicked node ${node}`);

  const onClickLink = (source: string, target: string) => console.log(`Clicked link between ${source} and ${target}`);

  return (
    <S.Root>
      <Graph id="graph-id" data={data} config={config} onClickNode={onClickNode} onClickLink={onClickLink} />
    </S.Root>
  );
};
