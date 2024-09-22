export const authConfig = {
  secret: process.env.SECRET,
  /**
   * Token Life Time
   * default 3600 seconds
   */
  tokenLife: 3600,

  /**
   * Refresh Token Life Time
   * default 8 hours
   */
  refreshTokenLife: 8 * 60 * 60,

  /**
   * Expirre sessions after this period of inactivity in seconds
   * Default 10 minutes
   */
  sessionExpire: 10 * 60,

  /**
   * Expire Registration Token after this period in seconds
   * Default 15 minutes
   */
  registrationTokenExpire: 15 * 60,

  /**
   * Expire Password Reset Token after this period in seconds
   * Default 5 minutes
   */
  resetPasswordTokenExpire: 5 * 60,

  /**
   * If Otp required for login, specify default Otp length
   * Default 6
   */
  otpLength: 6,

  /**
   * If Otp required for login, specify default Otp expiry time in seconds
   * Default 5 minutes
   */
  otpExpiresIn: 5 * 60,

  /**
   * Maximum number of attempts to verify a single toke
   */
  otpVerifyMaxAttempts: 5,

  /**
   * Set to true to enable default otp of '135790'
   */
  otpDebug: process.env.OTP_DEBUG === 'true',
};
