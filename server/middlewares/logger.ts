import { Highlighter } from '../highlighter';

/**
 * `graphql-logging` middleware
 * Based on this post: https://www.reddit.com/r/Strapi/comments/fzg4j6/comment/fn9eulv/
 */

export default async (ctx, next) => {
  await next();

  // only log graphql post requests
  if (ctx.request.url === '/graphql' && ctx.request.method === 'POST') {
    const query = ctx.request.body?.query;

    if (query) {
      // don't print huge introspection queries
      if (query.startsWith("query IntrospectionQuery ")) {
        console.log("Introspection query ignored");
      } else {
        // format response for better readability
        const resp = JSON.stringify(JSON.parse(ctx.body), null, "  ");
        // print highlighted query and response
        console.log(Highlighter.highlight(query, "graphql"));
        console.log(Highlighter.highlight(resp, "json"));
      }
    }
  }
};