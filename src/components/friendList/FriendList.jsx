import FriendListItem from 'components/friendListItem/FriendListItem';

export default function FriendList({ props }) {
  console.log('list', props);
  const { avatar, name, isOnline, id } = props;
  return (
    <ul class="friend-list">
      <FriendListItem avatar={avatar} name={name} isOnline={isOnline} id={id} />
    </ul>
  );
}
