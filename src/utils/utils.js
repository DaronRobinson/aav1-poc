/**
 * Convert string into title style capitalization (each word)
 *
 * @param {string}  string string to capitalize
 */
var titleStyle = (string) => {
  "use strict";
  var stringArray = string.split(" "),
    i,
    jointString = [],
    tStyle,
    itemValue;

  //capitalizing each word on array
  for (i in stringArray) {
    if (stringArray.hasOwnProperty(i)) {
      //console.log(typeof i, i);
      itemValue = stringArray[i];
      if (itemValue.length > 2 || (itemValue.length < 2 && Math.abs(i) === 0)) {
        jointString.push(itemValue.substring(0, 1).toUpperCase() + itemValue.substring(1, itemValue.length));
      } else {
        jointString.push(itemValue);
      }
    }
  }

  //joining capitalized worlds or returning string as is
  tStyle = jointString.length > 0 ? jointString.join(" ") : string;
  return tStyle;
};

/**
 * Convert slugged string into user readable friendly format, title format optional
 *
 * @param {string}  slug string formatted for easy developing
 *                  and data transport with no spaces
 * 							    only alphanumerics, hashes and underscores.
 * @param {boolean} titleStyle value true by default
 */
export const slugToString = (slug, tStyle = true) => {
  //converting hashes and underscore into blank spaces
  var newString = slug.replace(/-|_/g, " ");
  //optional, converting into title case
  if (tStyle) {
    newString = titleStyle(newString);
  }
  return newString;
};

/**
 * Unslugifies a slugified string.
 *
 * @param {string} slug slugified string.
 * @returns {string} un-slugified string.
 */
export const unslugify = (slug) =>
  slug
    .replace("-", " ")
    .replace("_", " ")
    .replace(/\w\S*/g, (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
