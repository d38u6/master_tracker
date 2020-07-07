export function loadCategoriesImage() {
  const req = require.context(
    "../assets/image/categories/",
    false,
    /\.(png|jpe?g|svg)$/
  );
  return req
    .keys()
    .map(req)
    .map((src) => ({ src }));
}
