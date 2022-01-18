import { ConnectionType } from 'types';

export const connectionTypeConverter = {
  toDescription: (type: ConnectionType): string => {
    switch (type) {
      case ConnectionType.Muiltje:
        return 'Muiltje';
      case ConnectionType.Voorspel:
        return 'Bitje vingeren oke, maar pik er in how maar';
      case ConnectionType.Batsen:
        return 'De liefde bedreven';
      default:
        return 'Unsupported link type';
    }
  },

  toColor: (type: ConnectionType): string => {
    switch (type) {
      case ConnectionType.Muiltje:
        return 'rgb(197, 202, 233)';
      case ConnectionType.Voorspel:
        return 'lightgreen';
      case ConnectionType.Batsen:
        return 'gold';
      default:
        return 'black';
    }
  },
};
