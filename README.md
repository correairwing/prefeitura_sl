
# Desafio de Desenvolvimento - Prefeitura Municipal de São Leopoldo

## Descrição

Este projeto foi desenvolvido como parte de um desafio técnico para a Prefeitura Municipal de São Leopoldo. O objetivo do desafio é avaliar conhecimentos práticos em programação, bem como a capacidade de resolver problemas, através da implementação de uma versão simplificada de um sistema de cadastro imobiliário. O sistema permite o cadastro e a consulta de pessoas e imóveis, além de outras funcionalidades relacionadas.

## Tecnologias Utilizadas

- **Backend**: PHP e MySQL
- **Frontend**: React (Node.js, npm)

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas no seu ambiente:

- [PHP](https://www.php.net/)
- [MySQL](https://www.mysql.com/)
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

## Instalação

### Frontend

1. Clone o repositório para sua máquina local:

   ```bash
   git clone <url-do-repositorio>
   cd <diretorio-do-projeto>/frontend
   ```

2. Instale as dependências do projeto React:

   ```bash
   npm install
   ```

3. Inicie o projeto:

   ```bash
   npm start
   ```

O frontend será iniciado em `http://localhost:3000`.

### Backend (API)

1. Navegue até o diretório onde seu servidor PHP está configurado (ex: `/var/www/html` no Apache ou `/srv/http` no Nginx).

2. Copie a pasta `api` do repositório para dentro da pasta do servidor:

   ```bash
   cp -r <diretorio-do-repositorio>/api /caminho/do/servidor
   ```

3. Garanta que o servidor esteja devidamente configurado para rodar PHP e MySQL.

### Banco de Dados

1. No repositório, há um arquivo de exportação do banco de dados disponível. Importe-o para o MySQL:

   ```bash
   mysql -u root -p < nome_do_banco_de_dados < /caminho/do/arquivo/exportado.sql
   ```

Isso irá configurar o banco de dados necessário para a aplicação.

## Execução

- **Frontend**: Inicie o frontend com `npm start` (porta padrão: `3000`).
- **Backend (API)**: Coloque a pasta `api` dentro do servidor PHP e certifique-se de que o servidor esteja rodando corretamente.


