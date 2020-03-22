const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        /* 
            o uso do 'await' garante que a próxima 
            linha seja executada somente após recuperar 
            todos os registros do banco de dados.
        */
        const products = await Product.find();
        return res.json(products);
    },
    async show(req, res) {
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },
    async store(req, res) {
        const product = await Product.create(req.body);
        return res.json(product);
    },
    async update(req, res) {
        const product = await Product.findOneAndUpdate(req.params.id, req.body, { new: true });
        return res.json(product);
    },
    async destroy(req, res) {
        await Product.findOneAndDelete(req.params.id);
        return res.send();
    },
};