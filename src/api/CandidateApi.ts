const BaseURL = "http://localhost:5127";

export const createCandidateFirstStage = async (data: FormData) => {
  const response = await fetch(`${BaseURL}/jobseeker/JobSeekerRegistration`, {
    method: "POST",
    body: data,
  });
  return response.json();
};
