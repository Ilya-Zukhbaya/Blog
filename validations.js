import { body } from 'express-validator';

export const registerValidation = [
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),
  body('fullName').isLength({ min: 3 }),
  body('avatarUrl').optional().isURL(),
];

export const loginValidation = [body('email').isEmail(), body('password').isLength({ min: 5 })];

export const postCreateValidation = [
  body('title', 'Please enter article title').isLength({ min: 3 }).isString(),
  body('text', 'Please enter article text').isLength({ min: 10 }).isString(),
  body('tags', 'Incorrect article tags').optional().isString(),
  body('imageUrl', 'Incorrect image url').optional().isString(),
];
