type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
type ApiFetchAsync = <T>(
  url: string,
  method: HttpMethod,
  body?: object
) => Promise<T>;
type ApiExecutor = {
  fetch: ApiFetchAsync;
};

const useApi = (): ApiExecutor => {
  const fetcher = async <T>(
    url: string,
    method: HttpMethod,
    body?: object
  ): Promise<any> => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : undefined,
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      return { ...data, isSuccess: true } as T;
    } catch (error: unknown) {
      return { isSuccess: false, message: error };
    }
  };
  return { fetch: fetcher };
};

export default useApi;
