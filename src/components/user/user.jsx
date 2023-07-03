import PropTypes from 'prop-types';
import { Profilec, Avatar, Stats, Itemm } from '../App.styled.js';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Profilec>
      <div className="description">
        <Avatar src={avatar} alt="User avatar" />
        <p className="name"> {username}</p>
        <p className="tag"> @{tag}</p>
        <p className="location"> {location}</p>
      </div>
      <Stats>
        <Itemm>
          <span className="label">Followers</span>
          <span className="quantity"> {stats.followers}</span>
        </Itemm>
        <Itemm>
          <span className="label">Views</span>
          <span className="quantity"> {stats.views}</span>
        </Itemm>
        <Itemm>
          <span className="label">Likes</span>
          <span className="quantity"> {stats.likes}</span>
        </Itemm>
      </Stats>
    </Profilec>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
