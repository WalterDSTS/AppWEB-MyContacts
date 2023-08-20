# AppWEB - MyContacts

Criei essa aplicação para dar continuidade nos meus estudos sobre React.
Diferente do que criei no projeto [Fundamentos React](https://github.com/WalterDSTS/Fundamentos-React),
essa aplicação utiliza das funcionalidade do [Create React App](https://create-react-app.dev/)
que automatiza o processo de configuração e inicialização de um novo projeto React,
permitindo que os desenvolvedores comecem rapidamente a escrever código sem a
necessidade de configurar manualmente o ambiente de desenvolvimento.

Assim como no primeiro projeto que criei, dei continuidade no uso das tecnologias lá utilizadas, aprimorando minhas práticas
de estização, lógica do funcionamento e montagem dos componentes, uso dos hooks
do React e suas possíveis aplicações.

Note que na V1 desse projeto eu estou utilizando [React](https://react.dev/) 17 e
[React Router Dom](https://v5.reactrouter.com/) 5. O intuito de começar utilizando
essas versões foi praticar como entregar uma solução com pacotes "legados",
atualizando as dependências do projeto conforme o mesmo evolui, aplicando assim os
novos conceitos que essas atualizações trazem.

## Sobre o Create React App

Ao utilizar o Create React App, obtemos uma configuração pré-estabelecida com:

1. Webpack: Um poderoso empacotador de módulos que transforma e agrupa o código
   JavaScript, CSS e outros recursos para serem entregues ao navegador.

2. Babel: Um compilador JavaScript moderno que permite que você escreva código
   JavaScript usando as últimas funcionalidades da linguagem, mesmo que alguns navegadores ainda não as suportem.

3. Jest: Um framework de testes para testar seus componentes e funcionalidades.

4. ESLint: Uma ferramenta de análise de código que ajuda a manter um código JavaScript
   consistente e sem erros.

E outras configurações e dependências necessárias para criar aplicativos React de alto desempenho.

## Tecnologias utilizadas
Fora as tecnologias ja mencionadas que o CRA nos trás, o projeto utiliza das demais
tecnologias:

- react
- react-router-dom
- styled-components

## API do projeto
Para utilizar essa aplicação, você deverá baixar e executar, simultaneamente a esta
aplicação, uma API feita em node, link para a API [clicando aqui](https://github.com/WalterDSTS/API-MyContacts).

## Scripts Disponíveis

De acordo com a documentação do próprio CRA, esses são os comandos que podem ser
utilizados no diretório do projeto e suas respectivas funcionalidades:

### `yarn install`
Instala todas as dependências que o projeto precisa para o seu correto funcionamento.

### `yarn start`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo em seu navegador.

A página será recarregada quando você fizer alterações.\
Você também pode ver quaisquer erros de lint no console.

### `yarn build`

Compila o aplicativo para produção na pasta `build`.\
Ele empacota o React corretamente no modo de produção e otimiza a construção para obter o melhor desempenho.

A compilação é minificada e os nomes dos arquivos incluem os hashes.\
Seu aplicativo está pronto para ser implantado!

Consulte a seção sobre [implantação](https://facebook.github.io/create-react-app/docs/deployment) para obter mais informações.

### `yarn eject`

**Observação: esta é uma operação unilateral. Uma vez que você faça `eject`, não poderá voltar atrás!**

Se você não estiver satisfeito com a ferramenta de construção e as escolhas de configuração, você pode fazer o `eject` a qualquer momento. Este comando removerá a única dependência de construção do seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc.) diretamente para o seu projeto, para que você tenha total controle sobre eles. Todos os comandos, exceto `eject`, continuarão funcionando, mas apontarão para os scripts copiados para que você possa ajustá-los. Neste ponto, você está por sua conta e risco.

Você não precisa usar o `eject`. O conjunto de recursos selecionado é adequado para implantações pequenas e médias, e você não deve se sentir obrigado a usar esse recurso. No entanto, entendemos que essa ferramenta não seria útil se você não pudesse personalizá-la quando estiver pronto para isso.


---
