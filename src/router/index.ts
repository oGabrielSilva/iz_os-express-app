import express from 'express';
import Description from '../Model/Description';

const router = express.Router();

router.get('/', (_, res) => res.render('index', Description.getSignInDescription()));
router.get('/sign-up', (_, res) => res.render('sign-up', Description.getSignUpDescription()));
router.get('/home', (_, res) => res.render('home', Description.getSignInDescription()));

export default router;
