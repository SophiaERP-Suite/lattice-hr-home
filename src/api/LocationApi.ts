const BaseURL = "http://localhost:5127";

export const getAllCountries = async () => {
  const response = await fetch(`${BaseURL}/Country/GetAll`, {
    method: "GET",
  });

  return response.json();
};

export const getAllStates = async (countryId: number) => {
  const response = await fetch(`${BaseURL}/State/${countryId}/GetAll`, {
    method: "GET",
  });

  return response.json();
};

export const getAllCities = async (stateId: number) => {
  const response = await fetch(`${BaseURL}/City/${stateId}/GetAll`, {
    method: "GET",
  });

  return response.json();
};
