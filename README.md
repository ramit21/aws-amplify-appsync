# aws-amplify-appsync
AWS Amplify, Appsync, Graphql POC

**Project setup**:
For setting up Amplify CLI integrated react app, follow the steps below. (For running this POC, just follow till step 4)
1. Install node.
2. Install and configure amplify:
```
npm install -g @aws-amplify/cli
amplify configure (refer the url below to configure the CLI)

https://docs.amplify.aws/lib/project-setup/prereq/q/platform/ios#sign-up-for-an-aws-account

```
3. Create react app using below command (this poc already has the app, so just run npm install instead)
```
npx create-react-app blogapp
```
4. Run below command, and the coapplication will open on browser at localhost:3000
```
npm start
```
5. Setup amplify, which also provisions the backend automatically. Refer public/amplify-init jpeg screenshots on how to answer questions asked when you run below command.
```
amplify init
```
This command creates amplify folder in the project with relevant files. See amplify/team-provider-info.json, it has auto populated data.

6. Add API using the command below, and answering the questions as per public/amplify-add.jpeg screenshot to create a Graphql API.

```
amplify add api
```
This command creates Graphql schema file in the project (see schema.graphql). Notice the @model annotation in the schema, this tells that when this is executed, a table must be created in the dynamodb (different data source can also be configured if need be). Edit this file to define the schema you want (which in our case is Post and Comment; note how we create a one to many relationship between the two using the @connection anotation).

7. Run below command to provision the Appsync api in the backend, and also generate the code which can be used to connect with the Appsync backend. Answer the questions as per screenshot public/amplify-push.jpeg
```
amplify push
```
Above command will give you the generated Graphql endpoint and API key. It also creates files in the project which will help in connecting and making queries to the backend. See src/graphql/queries.js (has all get queries) and src/graphql/mutation.js (has all create/update queries)

8. Run below command to access the Appsync created in step 7. It will open AWS Appsync console in the browser.
```
amplify console api
```
9. On the AWS Amplify console, run queries like below to create some posts in the DB:
```
mutation addPost {
    createPost(input: {
        postTitle: "First post"
        postBody: "Lorem ipsum dolores"
        postOwnerId: "1619Deadman"
        postOwnerUsername: "The Undertaker"
    }) {
        id
        postBody
        postTitle
    }
}
```

10. Add amplify modules to the project which will provide us classes to interact with graphql related classes generated in step 7.
```
npm install aws-amplify aws-amplify-react
```

11. Now configure Amplify in the project. Note the file src/aws-exports.js which has info on region, appsync endpoint and authentication key. Import this file and Amplify module (from module added in step 10) in index.js to configure the project. 


## Concepts

**Appsync** simplifies the process of developing applications by letting us create flexible, secure, extensible and realtime (ie subscribe-able) Graphql APIs. Appsync also support offline access. At backend, appsync can connect with Dynamodb, RDS, Lambda, ES etc.

**Amplify** is a javascript library/framework for developers to quickly configure, manage and create applications with features for AWS cloud. Amplify has many modules: API, auth, storage, analytics, caching, UI components etc. 

**Appsync Architecture:**
1. **Graphql Proxy**: A component that runs the Graphql engine for processing requests and mapping them to logical functions for data operations or triggers.
2. **Operation**: Query, Mutations and Subscriptions.
3. **Resolver**: A function that converts the GraphQL payload to the underlying storage system protocol and executes if the caller is authorozed to invoke it.
4. **Function**: A function defines a single operation that can be used across pipeline resolvers. Functions can be reused to perform redundant logic throughout the GraphQL Proxy.


