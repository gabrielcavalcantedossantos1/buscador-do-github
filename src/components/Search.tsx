import styles from './Search.module.css';

import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

type SearchProps = {
  loadUser: (username: string) => Promise<void>;
};

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState('');

  function handleClick(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!userName.trim()) return;
    loadUser(userName);
    setUserName('');
  }

  return (
    <div className={styles.search}>
      <h2>Busque por um usuário</h2>
      <p>Conheça seus melhores repositórios</p>
      <div className={styles.search_container}>
        <form onSubmit={handleClick}>
          <input
            type="text"
            placeholder="Digite o nome do usuário"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button
            onClick={() => {
              if (!userName.trim()) return;
              loadUser(userName);
            }}
          >
            <BsSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
