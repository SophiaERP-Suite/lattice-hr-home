const BaseURL = "http://localhost:5127";

export const getAllCountries = async () => {
  const response = await fetch(`${BaseURL}/countries/GetAll`, {
    method: "GET",
  });

  return response.json();
};

export const getAllStates = async (countryId: number) => {
  const response = await fetch(`${BaseURL}/states/${countryId}`, {
    method: "GET",
  });

  return response.json();
};

export const getAllCities = async (stateId: number) => {
  const response = await fetch(`${BaseURL}/cities/${stateId}`, {
    method: "GET",
  });

  return response.json();
};
