import styles from './App.module.css';

import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className={styles.app}>
      <h1>Busque por um usuário</h1>
      <Outlet />
    </div>
  );
};

export default App;
