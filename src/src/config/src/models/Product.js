const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

/**
 * Modèle Product
 * Définit la structure de la table 'Products' dans MySQL via Sequelize
 */
const Product = sequelize.define('Product', {
    // Nom du produit (ex: iPhone 15)
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // Code unique (ex: IP15-BL)
    sku: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    // Prix unitaire
    price: {
        type: DataTypes.FLOAT,
        defaultValue: 0
    },
    // Stock actuel
    current_stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    // Seuil de sécurité pour les alertes
    stock_min: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    // URL de l'image (Lien externe Cloudinary, Google Drive, etc.)
    image_url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    // URL de la vidéo (Lien YouTube ou démo)
    video_url: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    // Ajoute automatiquement les colonnes 'createdAt' et 'updatedAt'
    timestamps: true 
});

module.exports = Product;
