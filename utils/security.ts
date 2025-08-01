// Security utilities for input sanitization and validation

export const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return '';

  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .slice(0, 1000); // Limit length
};

export const validateEmail = (email: string): { valid: boolean; message: string; } => {
  if (!email) {
    return { valid: false, message: 'Email is required' };
  }

  const sanitizedEmail = sanitizeInput(email);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(sanitizedEmail)) {
    return { valid: false, message: 'Please enter a valid email address' };
  }

  if (sanitizedEmail.length > 254) {
    return { valid: false, message: 'Email address is too long' };
  }

  return { valid: true, message: '' };
};

export const validateName = (name: string): { valid: boolean; message: string; } => {
  if (!name) {
    return { valid: false, message: 'Name is required' };
  }

  const sanitizedName = sanitizeInput(name);

  if (sanitizedName.length < 2) {
    return { valid: false, message: 'Name must be at least 2 characters long' };
  }

  if (sanitizedName.length > 50) {
    return { valid: false, message: 'Name is too long' };
  }

  // Check for suspicious patterns
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+=/i,
    /data:text\/html/i
  ];

  for (const pattern of suspiciousPatterns) {
    if (pattern.test(sanitizedName)) {
      return { valid: false, message: 'Invalid characters detected' };
    }
  }

  return { valid: true, message: '' };
};

export const validateMessage = (message: string): { valid: boolean; message: string; } => {
  if (!message) {
    return { valid: false, message: 'Message is required' };
  }

  const sanitizedMessage = sanitizeInput(message);

  if (sanitizedMessage.length < 5) {
    return { valid: false, message: 'Message must be at least 5 characters long' };
  }

  if (sanitizedMessage.length > 1000) {
    return { valid: false, message: 'Message is too long (max 1000 characters)' };
  }

  // Check for spam indicators
  const spamIndicators = [
    /buy now/i,
    /click here/i,
    /free money/i,
    /make money fast/i,
    /viagra/i,
    /casino/i
  ];

  for (const indicator of spamIndicators) {
    if (indicator.test(sanitizedMessage)) {
      return { valid: false, message: 'Message contains inappropriate content' };
    }
  }

  return { valid: true, message: '' };
};

export const generateCSRFToken = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const validateCSRFToken = (token: string, storedToken: string): boolean => {
  return token === storedToken && token.length > 0;
};

// Rate limiting utility
export class RateLimiter {
  private attempts: Map<string, { count: number; resetTime: number; }> = new Map();
  private maxAttempts: number;
  private windowMs: number;

  constructor(maxAttempts: number = 5, windowMs: number = 60000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const attempt = this.attempts.get(identifier);

    if (!attempt || now > attempt.resetTime) {
      this.attempts.set(identifier, { count: 1, resetTime: now + this.windowMs });
      return true;
    }

    if (attempt.count >= this.maxAttempts) {
      return false;
    }

    attempt.count++;
    return true;
  }

  getRemainingTime(identifier: string): number {
    const attempt = this.attempts.get(identifier);
    if (!attempt) return 0;
    return Math.max(0, attempt.resetTime - Date.now());
  }
} 