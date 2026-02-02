const BaseURL = "http://localhost:5127";

export const fetchCountries = async () => {
  const response = await fetch(`${BaseURL}/countries`, {
    method: 'GET',
  })
  return response
}

export const fetchJobSectors = async () => {
  const response = await fetch(`${BaseURL}/job-sectors`, {
    method: 'GET',
  })
  return response
}

export const fetchStatesByCountryId = async (countryId: number) => {
  const response = await fetch(`${BaseURL}/states/${countryId}`, {
    method: 'GET',
  })
  return response
}

export const fetchCitiesByStateId = async (stateId: number) => {
  const response = await fetch(`${BaseURL}/cities/${stateId}`, {
    method: 'GET',
  });
  return response;
};

export const submitEmployerData = async (data: FormData) => {
  const response = await fetch(`${BaseURL}/employers`, {
    method: "POST",
    body: data,
  });
  return response;
};

export const fetchAllPackages = async () => {
  const url = `${BaseURL}/packages/active`;
  const response = await fetch(url, {
    method: 'GET',
  })
  return response
}

export const fetchPackageById = async (packagId: number) => {
  const url = `${BaseURL}/packages/${packagId}`;
  const response = await fetch(url, {
    method: 'GET',
  })
  return response
}

export const initializePackagePayment = async (packagId: number, employerId: number) => {
  const url = `${BaseURL}/payments/${employerId}/package/${packagId}`;
  const response = await fetch(url, {
    method: 'POST',
  })
  return response
}

export const verifyPayment = async (txref: string) => {
  const url = `${BaseURL}/payments/${txref}`;
  const response = await fetch(url, {
    method: 'POST',
  })
  return response
}

export const fetchUser = async (token: string) => {
  const response = await fetch(`${BaseURL}/auth/profile`, {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  return response
}