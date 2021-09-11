# Introdução
Esta aplicação foi construída para estudo do uso de Context, Hooks e Material UI com React.JS.

A aplicação tem como objetivo simular a listagem e compra de produtos consumidos de uma API REST.

# Instalando o projeto
Para testar o projeto, basta que o repositório seja clonado. Em seguida, as dependências devem ser instaladas através do seguinte comando na pasta raiz: 

```npm install```

Para simular uma api REST, foi utiliazado [json-server](https://www.npmjs.com/package/json-server). Por este motivo, para que a aplicação consuma o serviço, deve-se entrar na pasta <strong>/mock_backend</strong> e executar o seguinte comando: 

```json-server --watch products.json --port 3004```

Por último, rode o projeto com o comando: 

```npm start```