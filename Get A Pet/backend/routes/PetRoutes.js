const router = require('express').Router();

const PetController = require('../controllers/PetController');
const { imageUpload } = require('../helpers/image-upload');

// Middlewares
const verifyToken = require('../helpers/check-token');

router.post(
  '/create',
  verifyToken,
  imageUpload.array('images'),
  PetController.create
);

router.get('/', PetController.getAll);
router.get('/mypets', verifyToken, PetController.getAllUserPets);

module.exports = router;
