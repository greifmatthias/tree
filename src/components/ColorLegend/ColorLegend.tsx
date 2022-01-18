import React, { FC } from 'react';

import { useAppContext } from 'context';

import S from './ColorLegend.styles';

export const ColorLegend: FC = props => {
  const { room } = useAppContext();

  if (!room) return null;

  return (
    <S.Root {...props}>
      <S.TitleText>Color Legend</S.TitleText>

      {room.connectiontypes.map(({ color, name }) => (
        <S.EntryContainer key={name}>
          <S.ColorIndicator color={color || '#000000'} />
          <S.DescriptionText>{name}</S.DescriptionText>
        </S.EntryContainer>
      ))}
    </S.Root>
  );
};
