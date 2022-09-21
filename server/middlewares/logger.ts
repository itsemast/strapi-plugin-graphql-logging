import { Highlighter } from '../highlighter';

/**
 * `graphql-logging` middleware
 * Based on this post: https://www.reddit.com/r/Strapi/comments/fzg4j6/comment/fn9eulv/
 */

export default () => {
  return async (ctx, next) => {
    // only log graphql post requests
    if (ctx.request.url === '/graphql' && ctx.request.method === 'POST') {
      await next();

      const query = ctx.request.body?.query;

      // don't print huge introspection queries
      if (query.startsWith("query IntrospectionQuery ")) {
        console.log("Introspection query ignored");
      } else {
        // print highlighted query and response
        console.log(Highlighter.highlight(query, "graphql"));
        console.log(Highlighter.highlight(ctx.body, "json"));
      }
    } else {
      await next();
    }
  };
};