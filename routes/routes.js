const express = require('express');
const router = express.Router();


const { registerAuth, loginAuth, getMe } = require('../controllers/Auth')
const {RegisterRecipient,UpdateRecipient,FindRecipient,DeleteRecipient} = require('../controllers/Recipients')


const { protect } = require('../middleware/authMiddleware')



///////////////////////////authentification routes//////////////
router.post('/', registerAuth)
router.post('/login', loginAuth)
router.get('/me', protect, getMe)


///////////////////////////////Reciever Routes//////////////////////////
router.post('/create', RegisterRecipient)
router.get('/read', FindRecipient)
router.post('/update', UpdateRecipient)
router.delete('/delete', DeleteRecipient)

module.exports = router;