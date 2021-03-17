# fullstack-react-relay
Full-stack app using React and Relay

##### Server:

```
yarn init -y
yarn add config cors express express-graphql graphql graphql-relay npm-run-all uuid
yarn add -D nodemon
```

##### Frontend:

```
npx create-react-app dist
cd dist
yarn eject
yarn add @ant-design/icons antd node-sass@4.14.1 react-relay react-router-dom relay-runtime uuid
yarn add -D babel-plugin-relay graphql npm-run-all relay-compiler relay-config
get-graphql-schema http://localhost:5000/graphql > schema.graphql
```
