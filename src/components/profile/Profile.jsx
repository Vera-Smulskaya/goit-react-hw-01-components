import PropTypes from 'prop-types';
export default function Profile(props) {
  return <div>Profile</div>;
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.array,
};
