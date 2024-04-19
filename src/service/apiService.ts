// services/apiService.js

const apiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

const apiService = {
  async request<T>(url: string, method: string, data?: T, headers = {}) {
    try {
      const options = {
        method,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        // For methods other than GET, include data in the request body
        body: method !== "GET" ? JSON.stringify(data) : null,
      };

      // For GET method, append data as query parameters to the URL
      const apiUrlWithParams =
        method === "GET" && data
          ? `${apiUrl}${url}?${new URLSearchParams(data).toString()}`
          : `${apiUrl}${url}`;

      const response = await fetch(apiUrlWithParams, options);
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || "HTTP error!");
      }

      return {
        code: response.status,
        message: "Success",
        data: responseData.data as T,
        error: null,
      };
    } catch (error) {
      console.error("API Error:", error);
      return {
        code: 500,
        message: error || "Internal Server Error",
        data: [],
        error: error,
      };
    }
  },

  async get<T>(url: string, data?: T, headers = {}) {
    // For GET method, data is passed as query parameters
    return this.request<T>(url, "GET", data, headers);
  },

  async post<T>(url: string, data: T, headers = {}) {
    return this.request<T>(url, "POST", data, headers);
  },

  async put<T>(url: string, data: T, headers = {}) {
    return this.request<T>(url, "PUT", data, headers);
  },

  async delete<T>(url: string, data: T, headers = {}) {
    // For DELETE method, data is included in the request body
    return this.request<T>(url, "DELETE", data, headers);
  },
};

export default apiService;
