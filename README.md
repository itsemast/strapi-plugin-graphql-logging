# Strapi plugin graphql-logging

Logging of GraphQL queries and responses with syntax highlighting

## Installation instructions

```bash
npm i strapi-plugin-graphql-logging
# or
yarn add strapi-plugin-graphql-logging
```

## Usage

When running `strapi develop`, all GraphQL queries and responses would be printed to the terminal. Only the queries sent to default path (`/graphql`) are logged, changing the path would require a small modification of the plugin. Introspection queries and responses are not logged as they are usually very large, so only a message acknowledging such query is printed.