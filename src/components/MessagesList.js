import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import VisibilitySensor from 'react-visibility-sensor';
import moment from 'moment';
import { getMessagesList, messageOpenRequest } from '../store/actions/messages';
import MessageItem from './MessageItem';

function MessagesList(props) {
  const { friendId } = useParams();
  const dispatch = useDispatch();
  const ref = useRef();
  const [openPending, setOpenPending] = useState([]);

  const messagesList = useSelector((store) => store.messages.messagesList);
  useEffect(() => {
    dispatch(getMessagesList(friendId, {}));
  }, [friendId]);

  useEffect(() => {
    if (messagesList.length) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [!!messagesList.length]);

  const handleVisibilityChange = useCallback((messageId) => (isVisible) => {
    if (isVisible) {
      setOpenPending([...openPending, messageId]);
    }
  }, [openPending]);

  const handleMouseMove = useCallback(() => {
    if (openPending.length) {
      openPending.map((messageId) => (
        dispatch(messageOpenRequest(messageId))
      ));
      setOpenPending([]);
    }
  }, [openPending]);

  return (
    <div className="messages" ref={ref} onMouseMove={handleMouseMove}>
      <ul>
        {[...messagesList].reverse().map((message) => (
          <MessageItem
            key={message.id}
            onVisibilityChange={handleVisibilityChange}
            message={message}
          />
        ))}
      </ul>
    </div>
  );
}

export default MessagesList;
