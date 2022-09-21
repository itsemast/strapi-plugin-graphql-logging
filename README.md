# Strapi plugin graphql-logging

Logging of GraphQL queries and responses with syntax highlighting

## Installation instructions

```bash
npm i strapi-plugin-graphql-logging
# or
yarn add strapi-plugin-graphql-logging
```

If `config/plugins.js` or `config/plugins.ts` doesn't exist, create the file with the following content:

```typescript
export default ({ env }) => ({
    'graphql-logging': {
      enabled: true,
      resolve: './node_modules/strapi-plugin-graphql-logging',
    },
  });
```

Add `'plugin::graphql-logging.logger'` to `config/middlewares.js` or `config/middlewares.ts`, so it looks something like this:

```typescript
export default [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  'plugin::graphql-logging.logger',
];
```

## Usage

When running `strapi develop`, all GraphQL queries and responses would be printed to the terminal. Only the queries sent to default path (`/graphql`) are logged, changing the path would require a small modification of the plugin. Introspection queries and responses are not logged as they are usually very large, so only a message acknowledging such query is printed.