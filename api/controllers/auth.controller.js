import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken'


export const signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = bcryptjs.hashSync(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json("user created successfully")
    } catch (error) {
        next(error)
    }
}
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, 'User Not Found'));
        const verifyPassword = bcryptjs.compareSync(password, validUser.password);
        if (!verifyPassword) return next(errorHandler(401, 'Wrong Password'));

        //create and store a cookie to validate user log in
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = validUser._doc
        res
            .cookie('access_token', token, { httpOnly: true })
            .status(200)
            .json(rest);

    } catch (error) {
        next(error)
    }
}

export const google = async (req, res, next) => {
    try {
        const email = req.body.email;
        let validUser = await User.findOne({ email });
        if (!validUser) {
            const randomPassword = Math.random().toString(36).slice(-16);
            const hashedPassword = bcryptjs.hashSync(randomPassword, 10);
            const username = req.body.name.split(' ').join('').toLowerCase() + Math.random().toString(36).slice(-9);
            const newUser = new User({
                username, email, password: hashedPassword, avatar: req.body.photo
            })
            await newUser.save();
            validUser = await User.findOne({ email });
        }
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = validUser._doc
        res
            .cookie('access_token', token, { httpOnly: true })
            .status(200)
            .json(rest);

    } catch (error) {
        next(error)
    }
}