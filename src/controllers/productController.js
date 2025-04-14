class ProductController {
    // Array em memória para armazenar os produtos
    static products = [];

    // Método para listar todos os produtos
    static getProducts(req, res) {
        res.status(200).json({ products: ProductController.products });
    }

    // Método para criar um novo produto
    static createProduct(req, res) {
        const { name, price, description } = req.body;

        // Cria um novo produto com um ID único
        const newProduct = {
            id: ProductController.products.length + 1,
            name,
            price,
            description,
        };

        // Adiciona o produto ao array
        ProductController.products.push(newProduct);

        res.status(201).json({ message: 'Produto criado com sucesso!', product: newProduct });
    }

    // Método para atualizar um produto existente
    static updateProduct(req, res) {
        const { id } = req.params;
        const { name, price, description } = req.body;

        const product = ProductController.products.find(p => p.id === parseInt(id));

        if (product) {
            // Atualiza os campos do produto
            if (name) product.name = name;
            if (price) product.price = price;
            if (description) product.description = description;

            res.status(200).json({ message: 'Produto atualizado com sucesso!', product });
        } else {
            res.status(404).json({ message: 'Produto não encontrado!' });
        }
    }

    // Método para buscar um produto por ID
    static getProductById(req, res) {
        const { id } = req.params;
        const product = ProductController.products.find(p => p.id === parseInt(id));

        if (product) {
            res.status(200).json({ product });
        } else {
            res.status(404).json({ message: 'Produto não encontrado!' });
        }
    }

    // Método para deletar um produto
    static deleteProduct(req, res) {
        const { id } = req.params;
        const index = ProductController.products.findIndex(p => p.id === parseInt(id));

        if (index !== -1) {
            ProductController.products.splice(index, 1);
            res.status(200).json({ message: 'Produto deletado com sucesso!' });
        } else {
            res.status(404).json({ message: 'Produto não encontrado!' });
        }
    }
}

export default ProductController;