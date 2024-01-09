import { faker } from '@faker-js/faker';
import { Server } from 'socket.io';
import express from 'express';
import http from 'http';

const corsOptions = { cors: { origin: '*', methods: ['GET', 'POST'] } };
const app = express();
const server = http.createServer(app);
const io = new Server(server, corsOptions);
const PORT = 3001;

const createRandomUser = () => ({
  userId: faker.string.uuid(),
  username: faker.internet.userName(),
  avatar: faker.image.avatar(),
  email: faker.internet.email(),
  score: faker.number.int({ min: 0, max: 5000 }),
});

setInterval(() => io.emit('userData', createRandomUser()), 500);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
