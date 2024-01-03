import { useEffect } from 'react';
import io from 'socket.io-client';
import { useAppData } from './useAppData';

const useSocket = (serverUrl: string) => {
  const { updateUserData } = useAppData();

  useEffect(() => {
    const socket = io(serverUrl);

    socket.on('userData', (data) => {
      updateUserData(data);
    });

    return () => {
      socket.disconnect();
    };
  }, [serverUrl, updateUserData]);
};

export default useSocket;
