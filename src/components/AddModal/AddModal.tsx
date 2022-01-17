import React, { FC, useRef } from 'react';

import { useAppContext } from 'context';
import { RoomService } from 'services';

import { AddModalProps } from './AddModal.types';
import S from './AddModal.styles';

export const AddModal: FC<AddModalProps> = ({ onClose }) => {
  const { room } = useAppContext();

  const roomService = new RoomService();

  const firstRef: any = useRef();
  const secondRef: any = useRef();

  const onAddClick = async () => {
    console.log(room);
    if (room) {
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
