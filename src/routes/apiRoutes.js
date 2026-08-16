import express from "express";
import { handleProxyRequest } from "../controllers/movieController.js";

const router = express.Router();

// Search & Discovery
router.get("/search", handleProxyRequest("/api/search"));
router.post("/search", handleProxyRequest("/api/search", "POST"));
router.get("/trending", handleProxyRequest("/api/trending"));
router.get("/popular-search", handleProxyRequest("/api/popular-search"));
router.get("/hot", handleProxyRequest("/api/hot"));
router.get("/search/suggest", handleProxyRequest("/api/search/suggest"));

// Details & Metadata
router.get("/detail", handleProxyRequest("/api/detail"));
router.get("/homepage", handleProxyRequest("/api/homepage"));
router.get("/recommend", handleProxyRequest("/api/recommend"));
router.get("/rich-detail", handleProxyRequest("/api/rich-detail"));

// Browse & Rankings
router.get("/browse", handleProxyRequest("/api/browse"));
router.get("/ranking", handleProxyRequest("/api/ranking"));

// Direct Downloads & Playback
router.get("/play", handleProxyRequest("/api/play"));
router.get("/bff/stream", handleProxyRequest("/api/bff/stream"));
router.get("/captions", handleProxyRequest("/api/captions"));

// Actor & Staff
router.get("/staff/detail", handleProxyRequest("/api/staff/detail"));
router.get("/staff/works", handleProxyRequest("/api/staff/works"));
router.get("/staff/related", handleProxyRequest("/api/staff/related"));

// ShowBox Streaming
router.get("/showbox/search", handleProxyRequest("/api/showbox/search"));
router.get("/showbox/movie", handleProxyRequest("/api/showbox/movie"));
router.get("/showbox/tv", handleProxyRequest("/api/showbox/tv"));
router.get("/stream", handleProxyRequest("/api/stream"));
router.get("/showbox/streams", handleProxyRequest("/api/showbox/streams"));

// NewToxic Downloads
router.get("/newtoxic/search", handleProxyRequest("/api/newtoxic/search"));
router.get("/newtoxic/detail", handleProxyRequest("/api/newtoxic/detail"));
router.get("/newtoxic/files", handleProxyRequest("/api/newtoxic/files"));
router.get("/newtoxic/resolve", handleProxyRequest("/api/newtoxic/resolve"));
router.get("/newtoxic/latest", handleProxyRequest("/api/newtoxic/latest"));
router.get("/newtoxic/featured", handleProxyRequest("/api/newtoxic/featured"));

// Live Sports
router.get("/live", handleProxyRequest("/api/live"));

export default router;
