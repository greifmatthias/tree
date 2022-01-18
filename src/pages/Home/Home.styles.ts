import styled from '@emotion/styled';

import { IconButton, ColorLegend } from 'components';

const AddButton = styled(IconButton)({
  position: 'absolute',
  bottom: 24,
  right: 24,
});

const LinkTypesLegend = styled(ColorLegend)({
  position: 'absolute',
  top: 24,
  left: 24,
});

export default {
  AddButton,
  LinkTypesLegend
};
