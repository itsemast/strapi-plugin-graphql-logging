import { Strapi } from '@strapi/strapi';

import middlewares from './middlewares';

export default ({ strapi }: { strapi: Strapi }) => {
  // automatically enable logger middleware on plugin registration
  strapi.server.use(middlewares.logger);
};
