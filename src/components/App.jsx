import user from 'components/user/user.json';
import { Profile } from 'components/user/user.jsx';
import data from './data/data';
import { Statistics } from './data/data.jsx';
import friends from './friends/friends.json';
import { FriendList } from './friends/friends.jsx';
import transactions from './transactions/transactions.json';
import { TransactionHistory } from './transactions/transactions.jsx';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />;
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
  );
};
