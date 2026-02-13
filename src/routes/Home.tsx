//react
import { useState } from 'react';

//components
import Search from '../components/Search';
import User from '../components/User';
import Erros from '../components/Erros';

//types
import type { UserProps } from '../tpes/user';
import Loader from '../components/Loader';

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadUser = async (username: string) => {
    setIsLoading(true);

    const res = await fetch(`https://api.github.com/users/${username}`);

    const data = await res.json();
    
    setIsLoading(false);

    if (res.status === 404) {
      setUser(null);
      setError(true);
      return;
    }

    setError(false);

    const { avatar_url, login, name, followers, following, location } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      name,
      followers,
      following,
      location,
    };

    setUser(userData);
  }


  return (
    <div>
      <Search loadUser={loadUser} />
      {isLoading && <Loader />}
      {user && <User {...user} />}
      {error && <Erros />}
    </div>
  );
};

export default Home;
