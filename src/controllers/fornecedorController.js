const ModelFornecedor = require('../models/fornecedor');

module.exports =
{
    async CreateFornecedor(req,res){
        try {
            const fornecedor = await ModelFornecedor.create(
                {
                    ID_Fornecedor : null,
                    Nome_Fornecedor : req.body.Nome_Fornecedor,
                    CNPJ_Fornecedor : req.body.CNPJ_Fornecedor,
                    Endereco_Fornecedor : req.body.Endereco_Fornecedor,
                    Telefone_Fornecedor : req.body.Telefone_Fornecedor
                }
            );

            return res.json(fornecedor);

        } catch (erro) {
            return console.error('Erro na função (CreateFornecedor): ', erro);
        }
    },
    async GetOneFornecedor(req,res){
        try {
            const fornecedor = await ModelFornecedor.findByPk(req.body.ID_Fornecedor);
            return res.json(fornecedor);

        } catch (erro) {
            return console.error('Erro na função (GetOneFornecedor): ', erro);
        }
    },
    async UpdateFornecedor(req,res){
        try {
            const fornecedor = await ModelFornecedor.findByPk(req.body.ID_Fornecedor);
            if(fornecedor){
                fornecedor.Telefone_Fornecedor = req.body.Telefone_Fornecedor;
                await fornecedor.save();
                return res.json(fornecedor);
            }
        } catch (erro) {
            return console.error('Erro na função (UpdateFornecedor): ', erro);
        }
    },
    async DeleteFornecedor(req,res){
        try {
            const fornecedor = await ModelFornecedor.findByPk(req.body.ID_Fornecedor);
            await fornecedor.destroy();
            return res.json(fornecedor);
        } catch (erro) {
            return console.error('Erro na função (DeleteFornecedor): ', erro);
        }
    }
}
