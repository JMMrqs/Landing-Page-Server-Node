import { User } from '../models/user.js';

export async function listUserController(_, res) {
    const users = await User.findAll();
    return res.json(users);
}
