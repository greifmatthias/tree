import styled from '@emotion/styled';

const Root = styled('div')({
  width: '100%',
  height: '100%',
  position: 'fixed',
  zIndex: 999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Background = styled('div')({
  width: '100%',
  height: '100%',
  position: 'absolute',
  backgroundColor: 'rgba(0,0,0,0.5)',
  backdropFilter: 'blur(5px)',
});

const Modal = styled('div')({
  width: 'calc(100% - 96px)',
  maxWidth: 360,
  backgroundColor: '#FFFFFF',
  borderRadius: 12,
  paddingLeft: 24,
  paddingRight: 24,
  paddingBottom: 16,
  marginLeft: 24,
  marginRight: 24,
  display: 'flex',
  flexDirection: 'column',
  zIndex: 998,
  position: 'relative',
});

const TitleText = styled('h1')({
  paddingBottom: 12,
});

const TextInputLabel = styled('label')({
  marginBottom: 4,
  textTransform: 'uppercase',
  fontSize: 12,
  fontWeight: 600,
});

const TextInput = styled('input')({
  border: '1px solid #EFEFEF',
  padding: '8px 12px',
  marginBottom: 16,
  borderRadius: 4,
});

const SubmitButton = styled('button')({
  border: 0,
  backgroundColor: '#2962ff',
  padding: 12,
  marginTop: 16,
  marginBottom: 8,
  borderRadius: 4,
  color: '#FFFFFF',
  textTransform: 'uppercase',
  fontWeight: 600,
});

const Select = styled('select')({
  border: '1px solid #EFEFEF',
  padding: '8px 12px',
  marginBottom: 16,
  borderRadius: 4,
});

export default {
  Root,

  Background,

  Modal,

  TitleText,

  TextInputLabel,
  TextInput,

  SubmitButton,

  Select
};
