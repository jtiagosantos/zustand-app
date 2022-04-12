import { CSSProperties } from "react";

export const container: CSSProperties = {
  width: '100vw',
  height: '100vh',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

export const navbar: CSSProperties = {
  width: '100%',
  height: '80px',
  padding: '10px 40px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
}

export const button: CSSProperties = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
}

export const profile: CSSProperties = {
  marginTop: '200px'
}
