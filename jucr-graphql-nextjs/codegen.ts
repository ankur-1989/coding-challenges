export default {
  schema: "./app/graphql/schema.graphql",
  documents: "./app/graphql/queries/**/*.ts",
  generates: {
    "./app/graphql/types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};
