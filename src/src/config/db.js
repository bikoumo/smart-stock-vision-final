const { Sequelize } = require('sequelize');
require('dotenv').config();

/**
 * CONFIGURATION DE LA BASE DE DONNÉES SMARTSTOCK
 * Ce fichier bascule automatiquement entre la configuration locale (XAMPP)
 * et la configuration de production (Render/Cloud).
 */
const sequelize = new Sequelize(
    process.env.DB_NAME || 'smart_stock',     // Nom de la base
    process.env.DB_USER || 'root',            // Utilisateur (root par défaut)
    process.env.DB_PASSWORD || '',            // Mot de passe (vide par défaut)
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql',
        port: process.env.DB_PORT || 3306,
        logging: false, // Désactive l'affichage des requêtes SQL dans la console
        dialectOptions: {
            // Active le SSL uniquement si la variable DB_SSL est à 'true' (utile pour le cloud)
            ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

// Vérification de la connexion au démarrage (très utile pour le debug)
sequelize.authenticate()
    .then(() => console.log('✅ Connexion à la base de données établie avec succès.'))
    .catch(err => console.error('❌ Impossible de se connecter à la base de données:', err));

module.exports = sequelize;
