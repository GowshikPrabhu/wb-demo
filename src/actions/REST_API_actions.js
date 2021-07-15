import { urlToParams } from "../utils/urlToParams";

export const doGet = async (url, params = {}) => {
  let urlString = new URL(url);
  let paramsString = urlToParams(params);

  urlString.search = paramsString;

  let myheaders = new Headers();
  myheaders.append("Content-Type", "application/json");

  let options = {
    method: "GET",
    headers: myheaders
  };

  try {
    const response = await fetch(urlString, options);
    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status code = " + response.status
      );
      console.log(response.headers);
      let errorResponse = {
        status: response.status,
        error: "A problem has occured"
      };
      return errorResponse;
    }
    return response.json();
  } catch (err) {
    console.log("Fetch error :-S", err);
    return { error: "A problem has occured" };
  }
};
