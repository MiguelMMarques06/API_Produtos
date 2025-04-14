# Product API

Este projeto é uma API RESTful para gerenciar produtos, criada com o aúxilio da ferramenta GitHub Copilot. A API permite criar, atualizar, deletar e listar produtos, com validações para garantir que os dados de entrada estejam corretos.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework para construção de APIs RESTful.
- **ESLint**: Ferramenta para análise de código estático.

## Estrutura do Projeto

```
product-api
├── src
│   ├── app.js                # Ponto de entrada da aplicação
│   ├── controllers           # Controladores para gerenciar a lógica de negócios
│   │   └── productController.js
│   ├── models                # Modelos que definem a estrutura dos dados
│   │   └── productModel.js
│   ├── routes                # Rotas da API
│   │   └── productRoutes.js
│   ├── middlewares           # Middlewares para validação de dados
│   │   └── validationMiddleware.js
│   └── services              # Serviços que contêm a lógica de negócios
│       └── productService.js
├── tests                     # Testes automatizados
│   └── productService.test.js
├── package.json              # Configuração do npm
├── .eslintrc.json            # Configurações do ESLint
├── .prettierrc               # Configurações do Prettier
└── README.md                 # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/MiguelMMarques06/API_Produtos.git
   ```
2. Navegue até o diretório do projeto:
   ```
   cd product-api
   ```
3. Instale as dependências:
   ```
   npm install
   ```

## Uso

Para iniciar o servidor, execute o seguinte comando:

```
npm start
```

A API estará disponível em `http://localhost:3000`.

## Endpoints

- `POST /products` - Cria um novo produto
- `GET /products` - Lista todos os produtos
- `PUT /products/:id` - Atualiza um produto existente
- `DELETE /products/:id` - Deleta um produto existente

## Testes

Para executar os testes, utilize o comando:

```
npm test
```


