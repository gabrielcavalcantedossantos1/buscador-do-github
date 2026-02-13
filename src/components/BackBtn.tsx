import { useNavigate } from 'react-router-dom';

const BackBtn = () => {
  const navigate = useNavigate();

  return <button onClick={() => navigate(-1)}>Botao aqui</button>;
};

export default BackBtn;
