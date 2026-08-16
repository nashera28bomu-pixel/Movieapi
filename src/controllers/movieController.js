import { fetchFromUpstream } from "../services/movieService.js";

/**
 * Higher-order controller function that forwards client requests
 * (query parameters and request body) directly to the upstream Casper API.
 * 
 * @param {string} endpoint - Upstream route (e.g., '/api/search')
 * @param {string} [method="GET"] - HTTP method to use for the upstream request
 */
export const handleProxyRequest = (endpoint, method = "GET") => {
  return async (req, res) => {
    try {
      const params = req.query;
      const body = req.body;

      const data = await fetchFromUpstream(endpoint, method, params, body);

      return res.status(200).json(data);
    } catch (error) {
      const statusCode = error.status || 500;
      
      return res.status(statusCode).json({
        success: false,
        error: error.message || "An error occurred while fetching movie data.",
        ...(error.upstreamData && { details: error.upstreamData }),
      });
    }
  };
};
