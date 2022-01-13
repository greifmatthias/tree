import { FC } from 'react';

import { AddModalProps } from './AddModal.types';
import S from './AddModal.styles';

export const AddModal: FC<AddModalProps> = ({ onClose }) => (
  <S.Root>
    <S.Modal>
      <S.TitleText>Add Connection</S.TitleText>

      <S.TextInputLabel>First Connection</S.TextInputLabel>
      <S.TextInput placeholder="..." />
      <S.TextInputLabel>Second Connection</S.TextInputLabel>
      <S.TextInput placeholder="..." />

      <S.SubmitButton>Connect those two</S.SubmitButton>
    </S.Modal>
  </S.Root>
);
