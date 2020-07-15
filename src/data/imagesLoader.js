import itImage from "../assets/image/categories/it.jpg";
import codingImage from "../assets/image/categories/coding.jpg";
import defaultImage from "../assets/image/categories/default.jpg";

export function loadCategoriesImage() {
  if (process.env.NODE_ENV === "test")
    return [itImage, codingImage, defaultImage].map((src) => ({ src }));

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
