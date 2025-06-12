import express from 'express';
import {
  createGroupChat,
  createPrivateChat,
  addMember,
  removeMember,
  getUserChats,
  getChatMessages
} from '../controllers/chatController.js';
import auth from '../middleware/auth.middleware.js';

const router = express.Router();

router.use(auth);

router.post('/group', createGroupChat);
router.post('/private', createPrivateChat);
router.post('/:chatId/add', addMember);
router.delete('/:chatId/remove/:userId', removeMember);
router.get('/my-chats/:userId', getUserChats);
router.get('/:chatId/messages', getChatMessages);

export default router;
