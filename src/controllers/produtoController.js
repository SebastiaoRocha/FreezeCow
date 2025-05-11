const ModelProduto = require('../models/produto');

module.exports =
{
    async CreateProduto(req,res)
    {
        try {
            const produto = await ModelProduto.create(
                {
                     ID_Produto : null,
                     ID_Unidade_FK : req.body.ID_Unidade_FK,
                     Nome_Produto : req.body.Nome_Produto,
                     Qtd_Kilo_Produto : req.body.Qtd_Kilo_Produto,
                     Num_Lote_Produto : req.body.Num_Lote_Produto,
                     Data_Validade_Produto : req.body.Data_Validade_Produto,
                     Liberado_Produto : req.body.Liberado_Produto,
                     Valor_Compra_Produto : req.body.Valor_Compra_Produto,
                     Valor_Venda_Produto : req.body.Valor_Venda_Produto
                }
            );

            return res.json(produto);

        } catch (erro) {
            return console.error('Erro na função (CreateProduto): ', erro);
        }
    },
    async GetOneProduto(req,res)
    {
        try {
            const produto = await ModelProduto.findByPk(req.body.ID_Produto);
            return res.json(produto);
        } catch (erro) {
            return console.error('Erro na função (GetOneProduto): ', erro);
        }
    },
    async UpdateProduto(req,res)
    {
        try {
            const produto = await ModelProduto.findByPk(req.body.ID_Produto);
            if(produto){
                produto.Valor_Venda_Produto = req.body.Valor_Venda_Produto;
                await produto.save();
            }
            return res.json(produto);
        } catch (erro) {
            return console.error('Erro na função (UpdateProduto): ', erro);
        }
    },
    async DeleteProduto(req,res)
    {
        try {
            const produto = await ModelProduto.findByPk(req.body.ID_Produto);
            await produto.destroy();
            return res.json(produto);
        } catch (erro) {
            return console.error('Erro na função (DeleteProduto): ', erro);
        }
    }
}
