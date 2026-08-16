import axios from "axios";
import { UPSTREAM_BASE_URL, DEFAULT_TIMEOUT, DEFAULT_HEADERS } from "../config/constants.js";

// Initialize Axios client configured with base upstream settings
const apiClient = axios.create({
  baseURL: UPSTREAM_BASE_URL,
  timeout: DEFAULT_TIMEOUT,
  headers: DEFAULT_HEADERS,
});

/**
 * Executes requests against the target upstream API.
 * 
 * @param {string} endpoint - Upstream relative route (e.g., '/api/search')
 * @param {string} method - HTTP verb ('GET', 'POST', etc.)
 * @param {object} params - Query parameters from client request
 * @param {object} body - Request body payload (for POST requests)
 * @returns {Promise<object>} Response data from upstream API
 */
export const fetchFromUpstream = async (endpoint, method = "GET", params = {}, body = null) => {
  try {
    const response = await apiClient({
      url: endpoint,
      method: method.toUpperCase(),
      params,
      data: body,
    });

    return response.data;
  } catch (error) {
    const status = error.response?.status || 500;
    const message = error.response?.data?.message || error.message || "Upstream API error";

    const customError = new Error(message);
    customError.status = status;
    customError.upstreamData = error.response?.data || null;

    throw customError;
  }
};
