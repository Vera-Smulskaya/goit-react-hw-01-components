import user from '../components/data/user.json';
import data from '../components/data/data.json';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
