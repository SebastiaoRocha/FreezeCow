const ModelUnidade = require('../models/unidade');

module.exports =
{
    async CreateUnidade(req,res)
    {
        try {
            const unidade = await ModelUnidade.create(
                {
                    ID_Unidade : null,
                    Nome_Unidade : req.body.Nome_Unidade,
                    Cidade_Unidade : req.body.Cidade_Unidade,
                    Endereco_Unidade : req.body.Endereco_Unidade,
                    Telefone_unidade : req.body.Telefone_unidade
                }
            );

            return res.json(unidade);

        } catch (erro) {
            return console.error('Erro na função (CreateUnidade): ', erro);
        }
    },
    async GetOneUnidade(req,res)
    {
        try {
            const unidade = await ModelUnidade.findByPk(req.body.ID_Unidade);
            return res.json(unidade);
        } catch (erro) {
            return console.error('Erro na função (GetOneUnidade): ', erro);
        }
    },
    async UpdateUnidade(req,res)
    {
        try {
            const colaborador = await ModelUnidade.findByPk(req.body.ID_Unidade);
            if(unidade){
                unidade.Telefone_unidade = req.body.Telefone_unidade;
                await unidade.save();
            }

            return res.json(unidade);

        } catch (erro) {
            return console.error('Erro na função (UpdadeUnidade): ', erro);
        }
    },
    async DeleteUnidade(req,res)
    {
        try {
            const unidade = await ModelUnidade.findByPk(req.body.ID_Unidade);
            await unidade.destroy();
            return res.json(unidade);
        } catch (erro) {
            return console.error('Erro na função (DeleteUnidade): ', erro);
        }
    }
}