import type { RepoProps } from '../tpes/repo';
import { BsCodeSlash } from 'react-icons/bs';
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai';
import { RiGitRepositoryLine } from 'react-icons/ri';

import styles from './Repos.module.css'

const Repo = ({
  name,
  language,
  html_url,
  stargazers_count,
  forks_count,
}: RepoProps) => {
  return (
    <div className={styles.repo}>
      <h3>{name}</h3>
      <p aria-label='Linguagem usada' title='Linguagem usada'>
        <BsCodeSlash />
        {language}
      </p>
      <div className={styles.stats}>
        <div  aria-label='Salvamentos' title='Salvamento'>
          <AiOutlineStar />
          <span>{stargazers_count}</span>
        </div>
        <div aria-label='Compartilhamento' title='Compartilhamento'>
          <AiOutlineFork />
          <span>{forks_count}</span>
        </div>
      </div>
      <a href={html_url} target="_blank" className={styles.repo_btn}>
        <span>Ver código</span>
        <RiGitRepositoryLine />
      </a>
    </div>
  );
};

export default Repo;
