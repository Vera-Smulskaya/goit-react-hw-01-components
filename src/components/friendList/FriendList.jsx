import FriendListItem from 'components/friendListItem/FriendListItem';

export default function FriendList({ props }) {
  console.log('list', props);
  const { avatar, name, isOnline, id } = props;
  return (
    <ul className="friend-list">
      <FriendListItem
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        key={id}
      />
    </ul>
  );
}
