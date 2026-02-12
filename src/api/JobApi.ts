const BaseURL = "http://localhost:5127";
const token = localStorage.getItem("token");

export const GetMyJobs = async (page: number, pageSize: number) => {
  const response = await fetch(
    `${BaseURL}/jobs/${page}/${pageSize}/jobSeeker`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.json();
};

export const GetJob = async (jobId: number) => {
  const response = await fetch(`${BaseURL}/jobs/${jobId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};
