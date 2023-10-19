import FriendListItem from 'components/friendListItem/FriendListItem';
import css from './FriendsList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </ul>
  );
}
