export interface LoginResponse {
  token: string;
}

export async function login(userEmail: string, userPass: string): Promise<LoginResponse> {
  const response = await fetch('http://localhost:3000/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userEmail, userPass }),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  const data: LoginResponse = await response.json();
  return data;
}
