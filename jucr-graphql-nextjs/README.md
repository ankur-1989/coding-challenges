# jucr-graphql-nextjs

JUCR technical challenge

This repo uses pnpm for package management.

Notes:

1. Dynamic Component part was not exactly clear to me. So, I implemented it as per my understanding. as I was not sure who should I reach out to clear my doubts.
2. I have therefore, implemented on the server side, as we are not using any mutations or client interaction for clent components.


### DEMO

### [https://jucr-web-builder.netlify.app/](https://jucr-web-builder.netlify.app/)
You need to go directly to /repo path to see the repositories list. 

### Generate GraphQL Schema

* You would need your Github access token and you can create .env as mentioned in .env.example and set the value of GITHUB_ACCESS_TOKEN

  ```
  pnpm run gen:graphql-schema
  ```

  Run the above command to introspect the schema and it will write the generated schema in `schema.graphql` file.

### Generate TypeScript Definitions

You need to run the following command to generate typescript definitions

```
pnpm run gen:graphql-types
```

### Run development mode

You need to run the following commands

```
pnpm install 
pnpm run dev
```
