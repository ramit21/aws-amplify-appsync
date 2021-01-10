# aws-amplify-appsync
AWS Amplify, Appsync, Graphql POC

**Appsync** simplifies the process of developing applications by letting us create flexible, secure, extensible and realtime (ie subscribe-able) Graphql APIs. Appsync also support offline access. At backend, appsync can connect with Dynamodb, RDS, Lambda, ES etc.

**Amplify** is a javascript library/framework for developers to quickly configure, manage and create applications with features for AWS cloud. Amplify has many modules: API, auth, storage, analytics, caching, UI components etc. 

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
5. 


## Concepts

**Appsync Architecture:**
1. **Graphql Proxy**: A component that runs the Graphql engine for processing requests and mapping them to logical functions for data operations or triggers.
2. **Operation**: Query, Mutations and Subscriptions.
3. **Resolver**: A function that converts the GraphQL payload to the underlying storage system protocol and executes if the caller is authorozed to invoke it.
4. **Function**: A function defines a single operation that can be used across pipeline resolvers. Functions can be reused to perform redundant logic throughout the GraphQL Proxy.


