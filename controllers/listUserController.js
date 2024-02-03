import { User } from '../src/db/sequelize.js';

export default async (req, res) => {
    const users = await User.findAll();
    return res.json(users);
};
