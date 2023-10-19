export default function FriendListItem(props) {
  const { avatar, name, isOnline, id } = props;
  return (
    <li className="item" key={id}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="200" />
      <p className="name">{name}</p>
    </li>
  );
}
