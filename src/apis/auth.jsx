
const BASE_URL = "https://nipun-apis.online/auth"

export async function loginUser(email,    password) {

  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  if (!res.ok) {
    throw new Error("Login failed");
  }

  const data = await res.json();

  localStorage.setItem("token", (await data).token);

  const user = await getUser(data.token);
  return user;

}


export async function signupUser(fullName, email, password) {

  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fullName, email, password })
  });   

    if (!res.ok) {
    throw new Error("Signup failed");
  } 

  return res.json();
}


export async function getUser(token) {

  
  // const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/me`, {
    method: "GET",
    headers: { 
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }
  const data = await res.json();
  // console.log("Fetched user data:", data);

  // const user =JSON.stringify((res))
  const fetchedUser = JSON.stringify(data)
  localStorage.setItem("user", fetchedUser); 
  console.log("inside getUSer User updated in localStorage:", localStorage.getItem("user"));
  return data;
}
