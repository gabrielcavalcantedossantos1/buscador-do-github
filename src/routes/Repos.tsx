import { useParams } from 'react-router-dom';
import BackBtn from '../components/BackBtn';
import Loader from '../components/Loader';

import type { RepoProps } from '../tpes/repo';
import { useEffect, useState } from 'react';
import Repo from '../components/Repo';

const Repos = () => {
  const { username } = useParams();

  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadRepos = async (username: string) => {
      setIsLoading(true);

      const res = await fetch(`https://api.github.com/users/${username}/repos`);

      const data = await res.json();

      setIsLoading(false);

      setRepos(data)
    };

    if (username) loadRepos(username);
  }, []);

  if (isLoading && !repos) return <Loader />;

  return (
    <div>
      <BackBtn />
      <h2>Explore os repositórios do usuário: {username}</h2>
      {repos && repos.length === 0 && <p>Não há repositórios para esse usuário.</p>}
      {repos && repos.length > 0 && (
        <div>
          {repos.map((repo: RepoProps) => <Repo key={repo.html_url} {...repo} />)}
        </div>
      )}
    </div>
  );
};

export default Repos;
