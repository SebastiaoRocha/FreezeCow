const ModelCliente = require('../models/cliente');

module.exports =
{
    async CreateCliente(req,res){
        try {
            const cliente = await ModelCliente.create(
                {
                    ID_Cliente : null,
                    ID_FK_Unidade : req.body.ID_FK_Unidade,
                    nome_Cliente : req.body.nome_Cliente,
                    cpf_Cliente : req.body.cpf_Cliente,
                    endereco_Cliente : req.body.endereco_Cliente,
                    telefone_Cliente : req.body.telefone_Cliente
                }
            );

            return res.json(cliente);

        } catch (erro) {
            return console.error('Erro na função (CreateCliente): ', erro);
        }
    },
    async GetOneCliente(req,res){
        try {
            const cliente = await ModelCliente.findByPk(req.body.ID_Cliente);
            return res.json(cliente);
        } catch (erro) {
            return console.error('Erro na função (GetOneCliente): ', erro);
        }
    },
    async UpdateCliente(req,res){
        try {
            const cliente = await ModelCliente.findByPk(req.body.ID_Cliente);
            if(cliente){
                cliente.telefone_Cliente = req.body.telefone_Cliente;
                await cliente.save();
            }           
            return res.json(cliente);
        } catch (erro) {
            return console.error('Erro na função (UpdateCliente): ', erro);
        }
    },
    async DeleteCliente(req,res){
        try {
            const cliente = await ModelCliente.findByPk(req.body.ID_Cliente);
            await cliente.destroy();
            return res.json(cliente);
        } catch (erro) {
            return console.error('Erro na função (DeleteCliente): ', erro);
        }
    }
}
