export default function FriendListItem(props) {
  console.log('item', props);
  const { avatar, name, isOnline, id } = props;
  return (
    <li class="item" id={id}>
      <span class="status">{isOnline}</span>
      <img class={avatar} src="" alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
}
