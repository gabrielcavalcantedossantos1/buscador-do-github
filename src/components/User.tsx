import { MdLocationPin } from 'react-icons/md';
import type { UserProps } from '../tpes/user';

import { Link } from 'react-router-dom';

import styles from './User.module.css';

const User = ({
  avatar_url,
  login,
  followers,
  following,
  location,
}: UserProps) => {
  return (
    <div className={styles.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={styles.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div className={styles.stats}>
        <div>
          <p>Seguidores:</p>
          <p className={styles.number}>{followers}</p>
        </div>
        <div>
          <p>seguindo:</p>
          <p className={styles.number}>{following}</p>
        </div>
      </div>
      <div className={styles.botoes}>
        <a target="_blank" href={`https://www.linkedin.com/in/${login}`}>
          LinkedIn
        </a>
        <Link to={`/repos/${login}`}>Ver Projetos</Link>
      </div>
    </div>
  );
};

export default User;
