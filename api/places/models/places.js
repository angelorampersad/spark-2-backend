'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const index = 'places';

module.exports = {
  lifecycles: {
    afterUpdate(result, params, data) {
      if (result.published_at) {
        strapi.services.algolia.saveObject(result, index);
      } else {
        strapi.services.algolia.deleteObject(result.id, index);
      }
    },
    afterDelete(result, params) {
      if (Array.isArray(result)) { result.forEach((item) => strapi.services.algolia.deleteObject(item.id, index)); }
      else { strapi.services.algolia.deleteObject(result.id, index); }
    },
  },
};