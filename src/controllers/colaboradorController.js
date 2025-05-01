const ModelColaborador = require('../models/colaborador');

module.exports =
{
    async CreateColaborador(req,res)
    {
        try {
            const colaborador = await ModelColaborador.create(
                {
                    ID_Colaborador : null,
                    ID_FK_Unidade : req.body.ID_FK_Unidade,
                    nome_Colaborador : req.body.nome_Colaborador,
                    cargoColaborador : req.body.cargoColaborador,
                    nivel_Acesso_Colaborador : req.body.nivel_Acesso_Colaborador,
                    telefone_Colaborador : req.body.telefone_Colaborador
                }
            );

            return res.json(colaborador);

        } catch (erro) {
            return console.error('Erro na função (CreateColaborador): ', erro);
        }
    },
    async GetOneColaborador(req,res)
    {
        try {
            const colaborador = await ModelColaborador.findByPk(req.body.ID_Colaborador);
            return res.json(colaborador);
        } catch (erro) {
            return console.error('Erro na função (GetOneColaborador): ', erro);
        }
    },
    async UpdateColaborador(req,res)
    {
        try {
            const colaborador = await ModelColaborador.findByPk(req.body.ID_Colaborador);
            if(colaborador){
                colaborador.cargoColaborador = req.body.cargoColaborador;
                await colaborador.save();
            }

            return res.json(colaborador);

        } catch (erro) {
            return console.error('Erro na função (UpdateColaborador): ', erro);
        }
    },
    async DeleteColaborador(req,res)
    {
        try {
            const colaborador = await ModelColaborador.findByPk(req.body.ID_Colaborador);
            await colaborador.destroy();
            return res.json(colaborador);
        } catch (erro) {
            return console.error('Erro na função (DeleteColaborador): ', erro);
        }
    }
}
