import { icons } from 'assets/icons';
import { HTMLImgProps } from 'types';

export type IconProps = HTMLImgProps & {
  name: keyof typeof icons;
};
