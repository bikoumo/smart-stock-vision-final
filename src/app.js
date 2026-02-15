// Configuration de l'URL de l'API
// En local : http://localhost:5000/api
// Une fois sur Render : https://votre-app.onrender.com/api
const API_URL = "http://localhost:5000/api";

/**
 * Récupère la liste des produits depuis le serveur (Local ou Render)
 */
async function fetchProducts() {
    try {
        const response = await fetch(`${API_URL}/products`);
        
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Données reçues :", data);
        return data;
    } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
        return [];
    }
}

/**
 * Ajoute un nouveau produit
 */
async function addProduct(productData) {
    try {
        const response = await fetch(`${API_URL}/products`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productData)
        });
        return await response.json();
    } catch (error) {
        console.error("Erreur lors de l'ajout du produit :", error);
    }
}

/**
 * Supprime un produit par son ID
 */
async function deleteProduct(id) {
    try {
        const response = await fetch(`${API_URL}/products/${id}`, {
            method: 'DELETE'
        });
        return await response.json();
    } catch (error) {
        console.error("Erreur lors de la suppression du produit :", error);
    }
}

/**
 * Note : Pour le déploiement sur Render, n'oubliez pas de modifier 
 * la constante API_URL ci-dessus avec l'adresse fournie par Render.
 */
