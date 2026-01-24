import rateLimit from "express-rate-limit";

const loginRateLimiter = rateLimit({
  windowMs: 60 * 1000 * 15, // 15 minutes
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many login attempts, please try again later.",
  },
});

const createProjectRateLimiter = rateLimit({
  windowMs: 60 * 1000 * 10,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Hold on! Too many requests. Please try again later.",
  },
  keyGenerator: (req) => req.user || req.ip,
});

const deleteProjectRateLimiter = rateLimit({
  windowMs: 60 * 1000 * 10,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Hold on! Too many requests. Please try again later.",
  },
  keyGenerator: (req) => req.user || req.ip,
});

export { loginRateLimiter, createProjectRateLimiter, deleteProjectRateLimiter };
