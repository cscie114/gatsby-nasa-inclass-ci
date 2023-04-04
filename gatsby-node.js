const path = require("path");

function paginate({ createPage, items, itemsPerPage, pathPrefix, component }) {
  const numPages = Math.ceil(items.length / itemsPerPage);

  for (let i = 0; i < numPages; i++) {
    const currentPage = i + 1;

    createPage({
      path: currentPage === 1 ? pathPrefix : `${pathPrefix}/${currentPage}`,
      component: component,
      context: {
        limit: itemsPerPage,
        skip: i * itemsPerPage,
        numPages: numPages,
        currentPage: currentPage,
        pathPrefix: pathPrefix,
      },
    });
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allNasaJson {
        nodes {
          id
          date
          title
        }
      }
    }
  `);

  const items = result.data.allNasaJson.nodes;

  paginate({
    createPage: createPage,
    items: items,
    itemsPerPage: 15,
    pathPrefix: "/archives",
    component: path.resolve("./src/templates/astro-list.js"),
  });
};
