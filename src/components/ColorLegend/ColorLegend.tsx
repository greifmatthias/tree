import React, { FC } from 'react';
import { connectionTypeConverter } from 'services/Helpers';
import { ConnectionType } from 'types';

import S from './ColorLegend.styles';

export const ColorLegend: FC = props => (
  <S.Root {...props}>
    <S.Title>Color Legend</S.Title>
    {Object.values(ConnectionType)
      .filter(x => !isNaN(Number(x)))
      .map(x => (
        <S.Entry key={x}>
          <S.ColorBlock bgColor={connectionTypeConverter.toColor(x as ConnectionType)} />
          <S.Description> {connectionTypeConverter.toDescription(x as ConnectionType)} </S.Description>
        </S.Entry>
      ))}
  </S.Root>
);
