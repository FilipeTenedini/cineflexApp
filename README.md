

## Meu Primeiro projeto utilizando React
### Você pode acessar a aplicação neste link:
  ### - <a href="https://projeto10-cineflex-ochre-mu.vercel.app/"> CineFlex </a>
  ### - <a href="https://www.figma.com/file/xt4dsKrSryDMuTaSaEBuwV/Cineflex?node-id=0%3A1"> Figma </a>
  
<br><br><br>


<p align="center">
  |&nbsp;&nbsp;&nbsp<a href="#Projeto">Projeto</a>&nbsp;&nbsp;
  |&nbsp;&nbsp;&nbsp<a href="#Tecnologias">Tecnologias</a>&nbsp;&nbsp;
  |&nbsp;&nbsp;&nbsp<a href="#Aprendizados">Aprendizados</a>&nbsp;&nbsp;&nbsp;&nbsp;
</p>
<br><br>

<div align="center">
	
![image](https://user-images.githubusercontent.com/105571583/229816485-b85b6807-ca8a-468b-aae5-3de022eb7e8f.png)

	
</div>

<h1 id="Projeto"> 💻 Projeto</h1>

<details>
<summary>    
Geral
</summary>

- [ ]  Manipule o HTML usando somente React (sem usar o document nem bibliotecas como jQuery).
- [ ]  Seu projeto deverá ser desenvolvido utilizando Git e GitHub.
- [ ]  **A cada requisito implementado** faça um commit com uma mensagem descritiva do que você evoluiu. Caso queira dividir um requisito em vários commits, não há problema. Mas evite colocar mais de um requisito no mesmo commit.
- [ ]  O uso de styled-components é obrigatório.
- [ ]  Não é permitido o uso de context.
- [ ]  Use as exatamente cores indicadas no Figma para assento “Disponível”, “Selecionado” e “Indisponível”.
- [ ]  Ao longo das telas de Sessão e Assento, deve ser exibido um rodapé com as informações do filme selecionado. Estas informações virão das chamadas à API em cada tela.

</details>
 
<details>
<summary>
Escolha de Filme (rota /)
</summary>

- [ ]  Buscar as informações dos filmes pela API fornecida e exibir conforme layout fornecido.
- [ ]  Ao clicar em um filme, o usuário deve ser redirecionado para a rota `/sessoes/:idFilme`, sendo `:idFilme` o id do filme clicado.
 
</details>
 
<details>
<summary>
Escolha de Sessão (rota /sessoes/:idFilme)
</summary>

- [ ]  A partir do id da URL, obtenha da API as sessões disponíveis para o filme e exiba conforme o *layout* fornecido.
- [ ]  Ao clicar em uma sessão, o usuário deve ser redirecionado para a rota `/assentos/:idSessao`, onde `:idSessao` é o id da sessão escolhida.
 
</details>

<details>
<summary>
Escolha de Assento (rota /assentos/:idSessao)
</summary>

- [ ]  A partir do id da sessão, buscar os dados da sessão da API e exibir o layout conforme fornecido.
- [ ]  Ao clicar em um assento disponível, o assento deve ser marcado como "Selecionado".
- [ ]  Ao clicar novamente em um assento selecionado, este deve voltar para "Disponível".
- [ ]  Ao clicar em um assento indisponível, deverá ser exibido um alerta de "Esse assento não está disponível".
- [ ]  O usuário pode selecionar vários assentos.
- [ ]  O usuário deve poder inserir o nome e o CPF do comprador.
- [ ]  Ao clicar em "Reservar assento(s)", o pedido deve ser enviado para o servidor e o usuário deve ser redirecionado para a rota `/sucesso`.  Isso fará com os assentos marcados fiquem indisponíveis para outras marcações.
 
</details>

<details>
<summary>
Sucesso (rota /sucesso)
</summary>

- [ ]  Implementar *layout* conforme fornecido, exibindo os dados do pedido feito.
- [ ]  Ao clicar em "Voltar para Home" o usuário deve voltar para a rota inicial (`/`), com o pedido zerado.
 
</details>


<h1 id="Tecnologias">🚀 Tecnologias</h1>

Esse projeto foi desenvolvido com as seguintes tecnologias:

- React 
- React Router Dom
- Styled Components

<h1 id="Aprendizados">🧠 Aprendizados</h1>

- React Router Dom
- Como funciona uma SPA
- Como lidar com a navegação entre as diferentes páginas da aplicação
  
	
<details>
<summary>    
  
  
# Como executar o projeto
  
  
</summary>
  # Getting Started with Create React App

  This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

  ## Available Scripts

  In the project directory, you can run:

  ### `npm start`

  Runs the app in the development mode.\
  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

  The page will reload when you make changes.\
  You may also see any lint errors in the console.

  ### `npm test`

  Launches the test runner in the interactive watch mode.\
  See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

  ### `npm run build`

  Builds the app for production to the `build` folder.\
  It correctly bundles React in production mode and optimizes the build for the best performance.

  The build is minified and the filenames include the hashes.\
  Your app is ready to be deployed!

  See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

  ### `npm run eject`

  **Note: this is a one-way operation. Once you `eject`, you can't go back!**

  If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

  You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

  ## Learn More

  You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

  To learn React, check out the [React documentation](https://reactjs.org/).

  ### Code Splitting

  This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

  ### Analyzing the Bundle Size

  This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

  ### Making a Progressive Web App

  This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

  ### Advanced Configuration

  This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

  ### Deployment

  This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

  ### `npm run build` fails to minify

  This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
</details>
