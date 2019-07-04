import superagent from "superagent";
//-----------------------------------------------
//ASYNC
//-----------------------------------------------
export const requestStarwarsData = starwarsName => store => {
  const API_URL = "https://swapi.co/api/people/";

  return superagent
    .get(API_URL)
    .then(response => {
      console.log(response.body);
      return store.dispatch(set(response.body));
    })
    .catch(console.log);
};

//-----------------------------------------------
//SYNC
//-----------------------------------------------
export const set = payload => ({
  type: "SET",
  payload: payload
});
