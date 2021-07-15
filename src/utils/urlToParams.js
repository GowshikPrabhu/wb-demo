/**
 * @function
 * @param {object} params
 * @returns {string} Params as url string
 */
export const urlToParams = (params) => {
  let paramsArray = [];
  for (let obj in params) {
    let temp = [obj.key, obj.value];
    paramsArray.push(temp);
  }

  let searchParams = new URLSearchParams(paramsArray).toString();
  return searchParams;
};
