const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export async function apiCall(
  endpoint: string,
  options: RequestInit = {}
) {
  const url = `${API_URL}${endpoint}`;
  
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}
