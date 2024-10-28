import { io } from 'socket.io-client';
import type { Socket, Socket as SocketType } from 'socket.io-client';

const SOCKET_URL = 'http://localhost:8080';

export const socket: typeof Socket = io(SOCKET_URL, {
  autoConnect: false,
  withCredentials: true,
});

export const connectSocket = () => {
  if (!socket.connected) {
    socket.connect();
  }
};

export const disconnectSocket = () => {
  if (socket.connected) {
    socket.disconnect();
  }
};