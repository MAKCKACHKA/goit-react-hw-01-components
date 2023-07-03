import PropTypes from 'prop-types';

import { Friendlist, Friendlistitem, Status } from '../App.styled.js';

export const FriendList = ({ friends }) => {
  return (
    <Friendlist>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Friendlistitem key={id}>
          <Status $isOnline={isOnline}></Status>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </Friendlistitem>
      ))}
    </Friendlist>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
