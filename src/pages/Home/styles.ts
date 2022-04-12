import { CSSProperties } from "react";

export const container: CSSProperties = {
  width: '100vw',
  height: '100vh',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export const forms: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
}

export const input: CSSProperties = {
  width: '350px',
  height: '40px',
  padding: '5px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '17px',
}

export const button: CSSProperties = {
  height: '40px',
  marginTop: '15px',
  cursor: 'pointer',
  fontSize: '16px'
}
