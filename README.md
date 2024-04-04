### Objetivo

Criar uma api em typescript

# Setup

[] Typescript
[] Eslint
[] Prettier
[] Jest

### Criar o .gitignore

Para a criação do .gitignore iremos usar uma lib do node que gera um .gitignore para o nodejs

1. Instalar a lib gitignore no modo global

```
npm install -g gitignore
```

2. Criar o .gitignore

```
gitignore node
```

### Typescript

Instalação do Typescript e tipagens do node

```
npm install -D typescript @types/node
```

Inicializar o projeto em typescript

```
npx tsc --init
```

### ts-node && Nodemon

_Dica util para desenvolvimento_

ts-node é um execution engine para typescript não precisando compilar o typescript.

Nodemon é um serviço utilizado para atualizar as mudanças no código em tempo real.

Instalação dos pacotes

```
npm install -D ts-node nodemon
```

### Eslint

Eslint é um serviço de linter para o Typescript

```
npm install -D eslint
npm install -D eslint-config-prettier

npx eslint --init
```

### Prettier

Prettier é uma ferramenta para padronizar o estilo de código do projeto.

```
npm install --save-dev --save-exact prettier
```

Criar o arquivo .prettierrc


### Solução para o envio de email

https://mailtrap.io/