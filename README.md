
<h1 align="center">Trindade Places - API</h1>

## Exercises - Module 1 - Week 9 and 10 - Fullstack LAB365/SENAI 2023

## Week 9

**[M1S09] Ex 1 - Projeto Trindade Places**

*Contexto:*
O projeto Trindade Places é uma iniciativa importante da prefeitura de Trindade para fornecer informações precisas e atualizadas sobre as instituições que prestam serviços públicos na cidade. Através da API desenvolvida em Node.js, os usuários poderão pesquisar, criar, atualizar e excluir informações sobre essas instituições, como nome do lugar e localização.

A escolha das tecnologias express e sequelize para o desenvolvimento do projeto permite uma implementação eficiente e escalável da API, enquanto a integração com o banco de dados garante que os dados sejam armazenados de forma segura e facilmente acessíveis para consulta e atualização.

O principal objetivo do projeto é fornecer uma base de dados confiável para a cidade de Trindade, visando melhorar a gestão dos serviços públicos e aumentar a transparência das informações sobre as instituições públicas.

Com a API desenvolvida, a prefeitura poderá fornecer aos cidadãos uma fonte confiável e atualizada de informações sobre os serviços públicos disponíveis na cidade, contribuindo para uma melhor qualidade de vida para a população.

*Projeto:*
Para iniciar um novo projeto Node.js + Express e contribuir para o desenvolvimento da API do projeto Trindade Places, siga os seguintes passos:

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Abra um terminal e crie uma nova pasta para o seu projeto.
3. Navegue até a pasta criada e inicialize o npm com o comando "npm init".
4. Instale o Express utilizando o comando "npm install express".
5. Crie um arquivo chamado "index.js" na raiz do seu projeto.
6. Abra o arquivo "index.js" e importe o Express com o comando "const express = require('express')".
7. Inicie o servidor Express e defina a porta 3333.


**[M1S09] Ex 2 - Modelo Sequelize**

Após criar a estrutura inicial, é necessário criar um novo modelo Sequelize chamado Place para representar um local. Para isso, é importante definir corretamente seus campos para que possa ser utilizado adequadamente. Os campos que devem ser definidos são:

- id: um número que serve como identificador único para o local.
- name: uma string que representa o nome do local.
- telephone: uma string que representa o número de telefone do local.
- opening_hours: uma string que representa o horário de funcionamento do local.
- description: uma string que representa a descrição do local.
- latitude: um número que representa a latitude do local.
- longitude: um número que representa a longitude do local.


**[M1S09] Ex 3 - Rota POST**

Após criar o modelo Place no exercício anterior, é necessário implementar uma rota do tipo POST com o path "/places" que receba valores por meio de BODY params. Os seguintes valores devem ser recebidos:

```json
  {

    "name": "Nome do local",
    "telephone": "(00) 0000 - 0000",
    "opening_hours": "Segunda a Sexta: 9h às 18h",
    "description":"Descrição do Local",
    "latitude": -23.5505,
    "longitude": -46.6333
  }
```

**[M1S09] Ex 4  - Rota GET**

Aprimore o projeto Trindade Places implementando uma rota GET com o path /places, que retorne a lista de lugares cadastrados na base de dados.

Essa rota permitirá aos usuários consultar todas as instituições públicas disponíveis na cidade de Trindade, fornecendo informações relevantes sobre cada uma delas.

Essa implementação é fundamental para a transparência e eficiência na gestão dos serviços públicos, permitindo aos cidadãos acessar informações sobre as instituições de forma fácil e rápida. Com isso, será possível melhorar a qualidade dos serviços públicos na cidade.


**[M1S09] Ex 5 - Rota DELETE**

Para melhorar ainda mais a API do projeto Trindade Places, é necessário implementar uma rota DELETE. Essa rota deve permitir aos usuários excluir uma instituição pública específica da base de dados. Para isso, é preciso definir um identificador único para cada instituição, que será utilizado na requisição de exclusão.

A rota DELETE pode ser implementada com o path /places/:id, onde o parâmetro :id representa o identificador único da instituição. Ao receber uma requisição DELETE com esse path, a API deve verificar se o identificador corresponde a uma instituição válida na base de dados e, em caso positivo, excluí-la.

A implementação da rota DELETE é essencial para permitir que os usuários tenham controle sobre as informações presentes na base de dados, garantindo a integridade e a atualização dos dados. Além disso, essa rota é importante para manter a transparência e a eficiência na gestão dos serviços públicos, permitindo que as instituições sejam atualizadas ou excluídas quando necessário.


**[M1S09] Ex 6 - Rota PUT**

A rota PUT é outra funcionalidade importante que deve ser implementada na API do projeto Trindade Places. Essa rota permite que os usuários atualizem as informações de uma instituição pública específica na base de dados.

Para implementar a rota PUT, é preciso definir um identificador único para cada instituição, que será utilizado na requisição de atualização. Além disso, é necessário definir quais campos da instituição poderão ser atualizados pelos usuários.

A rota PUT pode ser implementada com o path /places/:id, onde o parâmetro :id representa o identificador único da instituição. Ao receber uma requisição PUT com esse path, a API deve verificar se o identificador corresponde a uma instituição válida na base de dados e, em caso positivo, permitir a atualização dos campos definidos.

A rota permitirá atualiza todos os campos cadastrados, exceto o ID.


## Week 10


**[M1S10] Ex 1 - Continuando Trindade Places**

Após as implementações anteriores, é necessário criar um novo modelo Sequelize chamado "User" para representar um usuário válido no sistema. Para isso, é importante definir corretamente seus campos para que possa ser utilizado adequadamente. Os campos que devem ser definidos são:

- id: um número que serve como identificador único para o usuário.
- name: uma string que representa o nome completo do usuário.
- email: uma string que representa o endereço de email do usuário. Deve ser única e válida.
- username: uma string que representa o nome de usuário do usuário. Deve ser única.
- password: uma string que representa a senha do usuário. Deve ter no mínimo 8 caracteres.

Ao criar o modelo "User" com esses campos definidos corretamente, será possível utilizá-lo para representar usuários válidos no sistema e armazenar suas informações de maneira segura e eficiente.


**[M1S10] Ex 2 - Rota POST (USER)**

Após criar o modelo User no exercício anterior, é necessário implementar uma rota do tipo POST com o path "/users" que receba valores por meio de BODY params.


**[M1S10] Ex 3 - Rota de sessão e jwt**

Após criar a rota POST no exercício anterior, é necessário implementar uma rota do tipo POST com o path "/sessions" que receba um username e password.

Na rota POST com o path "/sessions", devem ser recebidos um username e password como parâmetros da requisição. Em seguida, a aplicação deve verificar se o usuário existe no banco de dados. Se o usuário existir, deve ser gerado um token JWT (JSON Web Token) contendo o id do usuário e injetado no corpo da resposta.

É importante garantir que o token seja gerado com segurança, seguindo as boas práticas de codificação e criptografia. Além disso, é importante que as informações sejam retornadas de forma clara e organizada para que a integração com outros sistemas ou aplicações seja facilitada.


**[M1S10] Ex 4 - Middleware JTW Validator**

Para garantir a segurança da aplicação, implemente um middleware que valide se o token recebido é válido. Esse middleware será responsável por verificar se o token foi gerado corretamente e se ainda está válido.

Além disso, é importante definir que todas as rotas da aplicação, exceto a rota raiz e a rota de sessão, devem ser privadas. Isso significa que apenas usuários autenticados, ou seja, aqueles que possuem um token válido, terão acesso a essas rotas.


**[M1S10] Ex 5 - Organizando o projeto**

Para tornar a estrutura do projeto mais organizada e fácil de gerenciar, é importante realizar algumas ações importantes.‌

1. Separar os controllers em arquivos diferentes, para facilitar o gerenciamento do código;
2. Criar middlewares de validação utilizando a biblioteca YUP, garantindo que as informações enviadas pelo cliente estejam   corretas e possam ser processadas pela aplicação;
3. Implementar variáveis de ambiente para dados sensíveis, como senhas, chaves de API e tokens, para evitar que esses dados sejam expostos acidentalmente e aumentar a segurança da aplicação;
4. Agrupar as rotas em arquivos diferentes, de acordo com o objetivo ou funcionalidade específica, para facilitar o gerenciamento do código e manter a organização do projeto de forma clara e concisa.
 
Essas ações são simples de implementar, mas podem fazer uma grande diferença na estrutura do projeto, tornando-o mais seguro, organizado e fácil de gerenciar. Além disso, podem ajudar a reduzir o tempo de desenvolvimento, aumentar a produtividade e garantir um produto final de alta qualidade e eficiência.


**[M1S10] Ex 6 - Swagger** (exercício ainda *não* realizado)

Documente todas as rotas do projeto utilizando Swagger.


**Tecnologias e ferramentas Utilizadas:**

- Javascript;
- Node.js;
- Express;
- PostgreeSQL;
- Sequelize; 
- Insomnia;
- Swagger. (ainda *não* impĺementado)
