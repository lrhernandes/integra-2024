const API_URL = "http://localhost:8080";

export const grabber = async <T, B>(
  method: string,
  endpoint: string,
  body?: B
): Promise<T> => {
  try {
    const url = new URL(`${API_URL}${endpoint}`);
    const requestArgs = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(body),
      next: {
        revalidate: 0,
        cache: "no-store",
      },
    };
    const response = await fetch(url.href, requestArgs);
    const data = await response.json();
    if (data.error) {
      throw data.error;
    }
    return data;
  } catch (error) {
    throw {
      error,
      endpoint: `${API_URL}${endpoint}`,
    };
  }
};
