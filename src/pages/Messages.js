import React from 'react';
import { useSelector } from 'react-redux';
import Wrapper from '../components/Wrapper';
import Profile from '../components/Profile';
import ContactsList from '../components/ContactsList';
import MessageTopBar from '../components/MessageTopBar';
import MessagesList from '../components/MessagesList';
import MessageInput from '../components/MessageInput';
import Typing from '../components/Typing';

function Test() {
  const friendTyping = useSelector((store) => store.messages.friendTyping);

  return (
    <Wrapper>
      <div id="frame">
        <div id="sidepanel">
          <Profile />
          <ContactsList />
          <div id="bottom-bar">
            <button id="addcontact">
              <i className="fa fa-user-plus fa-fw" aria-hidden="true" />
              <span>Add contact</span>
            </button>
            <button id="settings">
              <i className="fa fa-cog fa-fw" aria-hidden="true" />
              {' '}
              <span>Settings</span>
            </button>
          </div>
        </div>
        <div className="content">
          <MessageTopBar />
          <MessagesList />
          {friendTyping ? <Typing /> : null}
          <MessageInput />
        </div>
      </div>
    </Wrapper>
  );
}

export default Test;
