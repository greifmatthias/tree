import styled from '@emotion/styled';

const Root = styled('div')({
  width: '100%',
  height: '100%',
  position: 'fixed',
  backgroundColor: 'rgba(0,0,0,0.5)',
  zIndex: 999,
  backdropFilter: 'blur(5px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Modal = styled('div')({
  minWidth: 360,
  backgroundColor: '#FFFFFF',
  borderRadius: 12,
  paddingLeft: 24,
  paddingRight: 24,
  paddingBottom: 16,
  display: 'flex',
  flexDirection: 'column',
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

export default {
  Root,

  Modal,

  TitleText,

  TextInputLabel,
  TextInput,

  SubmitButton,
};
