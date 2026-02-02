const BaseURL = "http://localhost:5127";

export const getJobSectors = async () => {
  const response = await fetch(`${BaseURL}/job-meta/sectors`, {
    method: "GET",
  });

  return response.json();
};

export const getJobCategories = async () => {
  const response = await fetch(`${BaseURL}/job-meta/categories`, {
    method: "GET",
  });

  return response.json();
};
