import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useStore } from "../../store";

import { container, forms, input, button } from "./styles";

export const Home = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const navigate = useNavigate();

  const { login } = useStore((state) => state);

  const handleSubmit = () => {
    login({
      username: usernameInput,
      email: emailInput,
      password: passwordInput,
    });

    navigate('/dashboard');
  }

  return (
    <div style={container}>
      <form style={forms} onSubmit={handleSubmit}>
        <input 
          style={input}
          type="text" 
          placeholder="Nome de usuário"
          value={usernameInput}
          onChange={
            ({target}) => setUsernameInput(target.value)
          }
        />
        <input 
          style={input}
          type="text" 
          placeholder="E-mail"
          value={emailInput}
          onChange={
            ({target}) => setEmailInput(target.value)
          }
        />
        <input 
          style={input}
          type="password" 
          placeholder="Senha"
          value={passwordInput}
          onChange={
            ({target}) => setPasswordInput(target.value)
          }
        />
        <button type="submit" style={button}>Entrar</button>
      </form>
    </div>
  );
}
