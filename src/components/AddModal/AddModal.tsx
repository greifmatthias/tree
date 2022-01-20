import React, { ChangeEvent, FC, useCallback, useRef, useState } from 'react';
import { lowerCase } from 'lodash';

import { useAppContext } from 'context';
import { RoomService } from 'services';

import { AddModalProps } from './AddModal.types';
import S from './AddModal.styles';
import { Connection } from 'types';

export const AddModal: FC<AddModalProps> = ({ onClose, first, second }) => {
  const { room, connections } = useAppContext();

  const roomService = new RoomService();

  const firstRef = useRef<HTMLInputElement>(null);
  const [firstValue, setFirstValue] = useState(first);

  const secondRef = useRef<HTMLInputElement>(null);
  const [secondValue, setSecondValue] = useState(second);

  const typeRef = useRef<HTMLSelectElement>(null);

  const onAddClick = async () => {
    if (room && !!firstRef.current?.value && !!secondRef.current?.value && typeRef.current?.value) {
      const first = lowerCase(firstRef.current.value);
      const second = lowerCase(secondRef.current.value);

      const [exists, connection] = alreadyExists(first, second);
      if (!exists) {
        await roomService.createConnection(room?.id, first, second, +typeRef.current.value);

        if (onClose) onClose();
      } else {
        await roomService.updateConnection(connection as Connection, +typeRef.current.value);
        
        if (onClose) onClose();
      }
    }
  };

  //TODO: move to service?
  const alreadyExists = useCallback(
    (first: string, second: string) => {
       const connection = connections.find(({ first: f, second: s }) => (first === f && second === s) || (first === s && second === f));
       console.info(connection);
       return [!!connection, connection] as [boolean, Connection | undefined];
    },
    [connections]
  );

  return (
    <S.Root>
      <S.Background onClick={onClose} />

      <S.Modal>
        <S.TitleText>Add Connection</S.TitleText>

        <S.TextInputLabel>First Connection</S.TextInputLabel>
        <S.TextInput ref={firstRef} value={firstValue} onChange={(e) => setFirstValue(e.target.value)} placeholder="..." />
        <S.TextInputLabel>Second Connection</S.TextInputLabel>
        <S.TextInput ref={secondRef} value={secondValue} onChange={(e) => setSecondValue(e.target.value)} placeholder="..." />

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
