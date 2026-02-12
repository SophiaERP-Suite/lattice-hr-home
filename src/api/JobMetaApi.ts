const BaseURL = "http://localhost:5127";

export const getJobSectors = async () => {
  const response = await fetch(`${BaseURL}/job-meta/sectors`, {
    method: "GET",
  });

  return response.json();
};

export const getJobCategories = async (jobSectorId: number) => {
  const response = await fetch(`${BaseURL}/job-meta/${jobSectorId}/categories`, {
    method: "GET",
  });

  return response.json();
};
