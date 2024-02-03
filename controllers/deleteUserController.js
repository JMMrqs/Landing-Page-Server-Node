import { User } from '../src/db/sequelize.js';

export default async (req, res) => {
    const userId = parseInt(req.params.id);
    const user = await User.findByPk(userId);
    if (user) {
        await user.destroy();
        return res.json(user);
    }
    return res.status(404).json({ message: 'Usuario não encontrado!' });
};
