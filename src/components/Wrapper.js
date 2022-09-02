import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Socket } from 'socket.io-client';
import { socketInit } from '../store/actions/socket';

function Wrapper(props) {
  const dispatch = useDispatch();
  const token = useSelector((store) => store.users.token);
  useEffect(() => {
    if (token) {
      dispatch(socketInit(token));
    }
  }, [token]);
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      {props.children}
    </>
  );
}

export default Wrapper;
