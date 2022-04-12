import { useNavigate } from "react-router-dom";

import { useStore } from "../../store";

import { container, navbar, button, profile } from "./styles";

export const Profile = () => {
  const { user, logout } = useStore((state) => state);
  const { username, email, password } = user;

  const navigate = useNavigate();

  const handleNavigateToHomePage = () => {
    navigate('/');
    logout();
  }

  return (
    <div style={container}>
      <div style={navbar}>
        <button
          style={button}
          onClick={handleNavigateToHomePage}
        >
          Sair
        </button>
      </div>

      <div style={profile}>
        <ul>
          <li>Nome de usuário: {username}</li>
          <li>E-mail: {email}</li>
          <li>Senha: {password}</li>
        </ul>
      </div>
    </div>
  );
}
