<h1 align="center">
 OrderBankSlipApp
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>
<br>

![image](https://github.com/MateusSantosF/Order-BankSlip/assets/62969620/2cf1ffd9-d77d-4baf-96a2-19b0728a518c)


## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- JavaScript
- Docker
- AWS EC2
- EJS
- Express
- Bootstrap 4

## 💻 Projeto

OrderBankSlipApp é um projeto que realiza a integração com a API do banco Efí (Gerencianet) para a geração de boletos bancários. A aplicação oferece aos usuários a possibilidade de criar pedidos, especificando o valor, o nome e a quantidade dos produtos desejados. Em seguida, a aplicação gera um boleto bancário ou um QRCode, facilitando o pagamento do pedido.

Como forma de armazenamento de dados, foi utilizado um arquivo JSON, dado os fins de aprendizado da aplicação. Além disso, como parte do processo de implantação, criei uma imagem Docker da aplicação e realizei o deploy em uma instância no EC2.

## ⚙ Instalação

Para realizar a geração de boletos, é necessário criar uma conta no banco Efí, acessar o portal de desenvolvedor e configurar sua conta para geração de boletos, através do BOLIX.

![image](https://github.com/MateusSantosF/Order-BankSlip/assets/62969620/12027e36-a298-4094-9f23-f5a38504f563)

Após isso, baixe seu certificado da aplicação e configure o arquivo [BankSlipService](./Server/src/BankSlipService.js) com suas credenciais.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](/LICENSE) para mais detalhes.

---

<h5 align="center">
 Feito com ♥ by Mateus
</h5>
