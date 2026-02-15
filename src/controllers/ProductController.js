const Product = require('../models/Product');

// Ajouter un nouveau produit
exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({ message: "Produit créé !", product });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Afficher tous les produits (pour le tableau de bord)
exports.getAllProducts = async (req, res) => {const Product = require('../models/Product');

// Ajouter un produit
exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({ message: "Produit créé avec succès !", product });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Liste de tous les produits
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Voir un produit spécifique (avec son stock actuel)
exports.getOneProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).json({ message: "Produit non trouvé" });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

};
// Supprimer un produit
exports.deleteProduct = async (req, res) => {
    try {
        await Product.destroy({ where: { id: req.params.id } });
        res.json({ message: "Produit supprimé !" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
