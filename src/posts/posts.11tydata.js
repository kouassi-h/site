export default {
  layout: "layouts/post.njk",
  tags: ["posts"],
  eleventyComputed: {
    permalink: (data) => `/articles/${data.slug || data.page.fileSlug}/index.html`,
    description: (data) => data.excerpt || "Article de Kouassi H."
  }
};
