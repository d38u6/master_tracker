import itImage from "Assets/image/categories/it.jpg";
import codingImage from "Assets/image/categories/coding.jpg";
import defaultImage from "Assets/image/categories/default.jpg";

export function loadCategoriesImage() {
  if (process.env.NODE_ENV === "test")
    return [itImage, codingImage, defaultImage].map((src) => ({ src }));

  const req = require.context(
    "Assets/image/categories/",
    false,
    /\.(png|jpe?g|svg)$/
  );
  return req
    .keys()
    .map(req)
    .map((src) => ({ src }));
}
