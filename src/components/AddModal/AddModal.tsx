import React, { FC, useRef } from 'react';

import { useAppContext } from 'context';
import { RoomService } from 'services';

import { AddModalProps } from './AddModal.types';
import S from './AddModal.styles';

export const AddModal: FC<AddModalProps> = ({ onClose }) => {
  const { room } = useAppContext();

  const roomService = new RoomService();

  const firstRef = useRef<HTMLInputElement>(null);
  const secondRef = useRef<HTMLInputElement>(null);

  const onAddClick = async () => {
    if (room && !!firstRef.current?.value && !!secondRef.current?.value) {
      await roomService.createConnection(room.id, firstRef.current.value, secondRef.current.value);

      if (onClose) onClose();
    }
  };

  return (
    <S.Root>
      <S.Background onClick={onClose} />

      <S.Modal>
        <S.TitleText>Add Connection</S.TitleText>

        <S.TextInputLabel>First Connection</S.TextInputLabel>
        <S.TextInput ref={firstRef} placeholder="..." />
        <S.TextInputLabel>Second Connection</S.TextInputLabel>
        <S.TextInput ref={secondRef} placeholder="..." />

        <S.SubmitButton onClick={onAddClick}>Connect those two</S.SubmitButton>
      </S.Modal>
    </S.Root>
  );
};
