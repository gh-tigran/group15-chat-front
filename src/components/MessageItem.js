import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import moment from 'moment/moment';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function MessageItem(props) {
  const { friendId } = useParams();
  const { message, onVisibilityChange } = props;
  return (
    <VisibilitySensor
      active={!message.seen && message.from === +friendId}
      onChange={onVisibilityChange(message.id)}
    >
      <li key={message.id} className={`${message.from === +friendId ? 'sent' : 'replies'}`}>
        <div className="message">
          <img src={message.userFrom.avatar} className="avatar" alt="" />
          <p>{message.text}</p>
        </div>
        <span className="time">
          {moment(message.createdAt).calendar()}
          {message.seen ? <i className="fa fa-check" /> : null}
        </span>
      </li>
    </VisibilitySensor>
  );
}

MessageItem.propTypes = {
  onVisibilityChange: PropTypes.func.isRequired,
  message: PropTypes.object.isRequired,
  // message: PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   createdAt: PropTypes.string.isRequired,
  //   text: PropTypes.string.isRequired,
  //   seen: PropTypes.bool.isRequired,
  //   from: PropTypes.number.isRequired,
  //   userFrom: PropTypes.shape({
  //     avatar: PropTypes.string.isRequired,
  //   }),
  // }).isRequired,
};
MessageItem.defaultProps = {

};

export default MessageItem;
