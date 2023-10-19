import css from './FriendListItem.module.css';

export default function FriendListItem(props) {
  const { avatar, name, isOnline, id } = props;
  const isStatusColor = isOnline ? 'green' : 'red';

  return (
    <li className={css.friendsItem} key={id}>
      <span
        className={css.friendsStatus}
        style={{ backgroundColor: isStatusColor }}
      >
        {isOnline}
      </span>
      <img className={css.friendsAvatar} src={avatar} alt={name} width="200" />
      <p className={css.friendsName}>{name}</p>
    </li>
  );
}
