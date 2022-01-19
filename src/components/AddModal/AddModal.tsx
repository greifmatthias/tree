import React, { FC, useCallback, useRef } from 'react';
import { lowerCase } from 'lodash';

import { useAppContext } from 'context';
import { RoomService } from 'services';

import { AddModalProps } from './AddModal.types';
import S from './AddModal.styles';

export const AddModal: FC<AddModalProps> = ({ onClose }) => {
  const { room, connections } = useAppContext();

  const roomService = new RoomService();

  const firstRef = useRef<HTMLInputElement>(null);
  const secondRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);

  const onAddClick = async () => {
    if (room && !!firstRef.current?.value && !!secondRef.current?.value && typeRef.current?.value) {
      const first = lowerCase(firstRef.current.value);
      const second = lowerCase(secondRef.current.value);

      if (!alreadyExists(first, second)) {
        await roomService.createConnection(room?.id, first, second, +typeRef.current.value);

        if (onClose) onClose();
      }
    }
  };

  const alreadyExists = useCallback(
    (first: string, second: string) =>
      !!connections.find(
        ({ first: f, second: s }) =>
          (lowerCase(first) === lowerCase(f) && lowerCase(second) === lowerCase(s)) ||
          (lowerCase(first) === lowerCase(s) && lowerCase(second) === lowerCase(f)),
      ),
    [connections],
  );

  return (
    <S.Root>
      <S.Background onClick={onClose} />

      <S.Modal>
        <S.TitleText>Add Connection</S.TitleText>

        <S.TextInputLabel>First Connection</S.TextInputLabel>
        <S.TextInput ref={firstRef} placeholder="..." />
        <S.TextInputLabel>Second Connection</S.TextInputLabel>
        <S.TextInput ref={secondRef} placeholder="..." />

        <S.TextInputLabel>Connection Type</S.TextInputLabel>
        {room?.connectiontypes && (
          <S.Select ref={typeRef}>
            {room?.connectiontypes.map(({ name }, index) => (
              <option value={index} key={name}>
                {name}
              </option>
            ))}
          </S.Select>
        )}

        <S.SubmitButton onClick={onAddClick}>Connect those two</S.SubmitButton>
      </S.Modal>
    </S.Root>
  );
};
