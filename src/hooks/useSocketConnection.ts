import { useEffect } from 'react';
import io from 'socket.io-client';
import { useAppData } from './useStores';

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
  }, [serverUrl]);
};

export default useSocket;
