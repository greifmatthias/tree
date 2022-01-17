import React, { FC } from 'react';

import { IconButtonProps } from './IconButton.types';
import S from './IconButton.styles';

export const IconButton: FC<IconButtonProps> = props => <S.Root {...props} />;
