import styled from '@emotion/styled';

const Root = styled.div`
  padding: 16px;
  border: 1px solid black;
  border-radius: 4px;
`;

export interface StyledContainerProps {
  topValue?: number;
}


const Entry = styled.div`
  padding: 8px;
  padding-left: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const ColorBlock = styled.div<{bgColor: string}>`
  width: 3rem;
  height: 0.5rem;
  border-radius: 4px;
  background-color: ${props => props.bgColor};
  margin-right: 0.5rem;
`;

const Title = styled.label``;

const Description = styled.label`
  font-size: 0.8rem;
`;

export default {
  Root,
  Entry,
  Title,
  ColorBlock,
  Description
};
