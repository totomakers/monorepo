module.exports = {
  overrides: [
    {
      files: ["*.graphql", "*.gql"],
      extends: "plugin:@graphql-eslint/schema-recommended",
    },
  ],
};
