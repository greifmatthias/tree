import styled from '@emotion/styled';

type StyledColorBlock = {
  color?: string;
};

const Root = styled.div({
  padding: 16,
  border: '1px solid black',
  borderRadius: 4,
});

const TitleText = styled.label({});

const EntryContainer = styled.div({
  padding: 8,
  paddingLeft: 0,
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  gap: '0.5rem',
});

const ColorIndicator = styled.div<StyledColorBlock>(({ color }) => ({
  width: '3rem',
  height: '0.5rem',
  borderRadius: 4,
  backgroundColor: color,
}));

const DescriptionText = styled.label`
  font-size: 0.8rem;
`;

export default {
  Root,

  TitleText,

  EntryContainer,
  ColorIndicator,
  DescriptionText,
};
