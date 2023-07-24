import {Router} from 'express';
import BookModel from '../models/Books.js';
import bcrypt from 'bcrypt';

const router= Router();

export {router as bookRouter};