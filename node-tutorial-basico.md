- npm install express --save
- npm install cors --save
- npm install nodemon --save-dev
  > criar main.js na raiz e importar os seguintes:
- import express from 'express'
- import cors from 'cors'
  > ainda no mesmo arquivo:
- const app = express()
- app.use(express.json)

> adicionar script em package.json para rodar nodemon em um comando.

---

-------------------------------------------------TUTORIAL ------------------------------------------------

## Inicializar projeto em Node

    - npm init
        - Ao executar o comando acima o node irá solicitar
        algumas informações sobre o projeto como: Nome do projeto, versão, autor... etc.
        Essas informações serão salvas em um arquivo chamado package.json

## Alterar o arquivo package.json gerado pelo npm init

    - "type":"module"
    import nomeDoArquivo from 'caminhoOndeEstáOarquivo'

## Instalar dependências de produção

    - npm install express --save
    - npm install cors --save

## Instalar dependências de desenvolvimento

    - npm install nodemon --save-dev

## Criar um arquivo chamado main.js na raiz do projeto e dentro do arquivo faça as importações abaixo

    - import express from 'express'
    - import cors from 'cors'

## No mesmo aquivo nas linhas seguintes inicialize o express

    - const app = express()

## Configurar o node para receber dados do tipo JSON

    - app.use(express.json())

## Configurar o cors no Node

    - app.use(cors())

## Criar primeira Rota

    - app.get('/', (request, response) => {
        return response.json('Retorno dos dados')
    })

## Executar o servidor

    - app.listen(3000, () => {
        console.log('Servidor está rodando...')
    })

## Executar o node

    - node ./main.js

## Reload do automático do Node

    - Adicionar um script na chave de scripts do arquivo package.json incluido o NODEMON para fazer o reload na aplicação sempre que houver uma alteração/salvar

    "scripts": {
        "dev": "nodemon ./main.js" // Script a ser adicionado
    }

    executar o comando npm run dev
