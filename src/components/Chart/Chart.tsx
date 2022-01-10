import { Graph } from 'react-d3-graph';

import S from './Chart.styles';

export const Chart = () => {
  const data = {
    nodes: [{ id: 'Remi' }, { id: 'Thomas' }, { id: 'Matthias' }, { id: 'Wim' }, { id: 'Madaloni' }, { id: 'Zoe' }, { id: 'Celeste' }],
    links: [
      { source: 'Remi', target: 'Thomas' },
      { source: 'Remi', target: 'Matthias' },
      { source: 'Remi', target: 'Wim' },
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

  const myConfig = {
    automaticRearrangeAfterDropNode: true,
    collapsible: true,
    directed: false,
    focusAnimationDuration: 0.75,
    focusZoom: 1,
    freezeAllDragEvents: false,
    highlightDegree: 2,
    highlightOpacity: 0.2,
    linkHighlightBehavior: true,
    maxZoom: 12,
    minZoom: 1,
    nodeHighlightBehavior: true,
    panAndZoom: false,
    staticGraph: false,
    staticGraphWithDragAndDrop: false,
    d3: {
      alphaTarget: 0.05,
      gravity: -250,
      linkLength: 120,
      linkStrength: 2,
      disableLinkForce: false,
    },
    node: {
      color: '#d3d3d3',
      fontColor: 'black',
      fontSize: 10,
      fontWeight: 'normal',
      highlightColor: 'red',
      highlightFontSize: 10,
      highlightFontWeight: 'bold',
      highlightStrokeColor: 'red',
      highlightStrokeWidth: 1.5,
      mouseCursor: 'crosshair',
      opacity: 0.9,
      renderLabel: true,
      size: 100,
      strokeColor: 'none',
      svg: '',
      symbolType: 'circle',
    },
    link: {
      color: 'lightgray',
      fontColor: 'black',
      fontSize: 8,
      fontWeight: 'normal',
      highlightColor: 'red',
      highlightFontSize: 8,
      highlightFontWeight: 'normal',
      mouseCursor: 'pointer',
      opacity: 1,
      renderLabel: false,
      semanticStrokeWidth: true,
      strokeWidth: 1,
      markerHeight: 4,
      markerWidth: 4,
      strokeDasharray: 0,
      strokeDashoffset: 0,
      strokeLinecap: 'butt',
    },
  };

  const onClickNode = function (nodeId: any) {
    window.alert(`Clicked node ${nodeId}`);
  };

  const onClickLink = function (source: any, target: any) {
    window.alert(`Clicked link between ${source} and ${target}`);
  };

  return (
    <S.Root>
      <Graph id="graph-id" data={data} config={myConfig} onClickNode={onClickNode} onClickLink={onClickLink} />
    </S.Root>
  );
};
