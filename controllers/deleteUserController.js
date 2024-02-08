import { User } from '../models/user.js';

export async function deleteUserController(req, res) {
    const userId = parseInt(req.params.id);
    const user = await User.findByPk(userId);

    if (!user) {
        return res.status(404).json({ message: 'Usuario não encontrado!' });
    }

    await user.destroy();
    return res.json(user);
}
