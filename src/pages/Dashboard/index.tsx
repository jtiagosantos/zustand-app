import { useNavigate } from "react-router-dom";

import { useStore } from "../../store";

import { container, navbar, button } from "./styles";

export const Dashboard = () => {
  const { user } = useStore((state) => state);
  const { username } = user;

  const navigate = useNavigate();

  const handleNavigateToProfilePage = () => {
    navigate('/profile');
  }

  return (
    <header style={container}>
      <div style={navbar}>
        <h3>{username}</h3>
        <button 
          style={button}
          onClick={handleNavigateToProfilePage}
        >
          Perfil do usuário
        </button>
      </div>
    </header>
  );
}

