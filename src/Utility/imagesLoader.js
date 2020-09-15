import soccerImage from "Assets/image/categories/soccer.png";
import codingImage from "Assets/image/categories/coding.png";
import defaultImage from "Assets/image/categories/default.png";

export function loadCategoriesImage() {
  if (process.env.NODE_ENV === "test")
    return [soccerImage, codingImage, defaultImage].map((src) => ({ src }));

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
