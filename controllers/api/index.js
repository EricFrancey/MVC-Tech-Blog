const router = require('express').Router();
const userRoutes = require('./userRoutes');
const techRoutes = require('./techRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/techs', techRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
