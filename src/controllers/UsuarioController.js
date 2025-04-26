const ModelUsuario = require('../models/usuario');

module.exports = 
{
    async List(req,res)
    {
        try {
            const usuarios = await ModelUsuario.findAll();
            return res.json(usuarios);
        } catch (erro) {
            return console.error('Erro na List :', erro);
        }
    },

    async Create(req,res)
    {
        try {
            const usuarios = await ModelUsuario.create(
                {
                    id : null,
                    nome: req.body.nome,
                    email: req.body.email,
                    nivel: req.body.nivel,
                    cargo: req.body.cargo
                }
            );

            return res.json(usuarios);

        } catch (erro) {
            return console.error('Erro na Create : ', erro);
        }
    },

    async Update(req,res)
    {
        try {
            const user = await ModelUsuario.findByPk(req.body.id);
            if(user){
                user.cargo = req.body.cargo;
                await user.save();
            }

            return res.json(user);

        } catch (erro) {
            return console.error('Erro na Update : ', erro);
        }
    },

    async GetOne(req,res)
    {
        try {
            const user = await ModelUsuario.findByPk(req.body.id);

            return res.json(user);

        } catch (erro) {
            return console.error('Erro na GetOne : ', erro);
        }
    },

    async Delete(req,res)
    {
        try {
            const user = await ModelUsuario.findByPk(req.body.id);
            await user.destroy();
            return res.json(user);
        } catch (erro) {
            return console.error('Erro na Delete : ', erro);
        }
    }
}