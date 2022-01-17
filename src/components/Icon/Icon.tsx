import React, { FC } from 'react';

import { icons } from 'assets/icons';

import { IconProps } from './Icon.types';
import S from './Icon.styles';

export const Icon: FC<IconProps> = ({ name, ...props }) => <S.Root src={icons[name]} alt="" {...props} />;
