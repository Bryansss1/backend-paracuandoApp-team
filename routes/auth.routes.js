const express = require("express");
const router = express.Router();

const passport = require("../libs/passport");

const verifySchema = require("../schemas/joiSchema.checker");
const {
  signupSchema,
  forgetPasswordSchema,
  restorePasswordSchema,
} = require("../schemas/auth.schemas");

const {
  signUp,
  logIn,
  forgetPassword,
  restorePassword,
  userToken,
} = require("../controllers/auth.controller");

/**
 * @openapi
 * /api/v1/auth/sign-up:
 *   post:
 *     summary: Sign up in the app
 *     tags: [Auth]
 *     requestBody:
 *       description: Required fields to Sign up a user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/sign-up'
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Success Sign Up
 * /api/v1/auth/login:
 *   post:
 *     summary: Log with existent user
 *     tags: [Auth]
 *     requestBody:
 *       description: Required fields to login
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/login'
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Correct credentials!
 *                 token:
 *                   type: string
 *                   example: shalalashalala
 * /api/v1/auth/forget-password:
 *   post:
 *     summary: Forgotten password
 *     tags: [Auth]
 *     requestBody:
 *       description: Fields to reset a forgotten password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/forgottenPassword'
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Email sended!, check your inbox
 * /api/v1/auth/change-password/{token}:
 *   post:
 *     summary: Change password of an account
 *     tags: [Auth]
 *     parameters:
 *       - in: path
 *         name: Token
 *         required: true
 *         schema:
 *           type: string
 *         description: Put the token sended in your email to change password
 *     requestBody:
 *       description: Put the new password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *                 example: larilarile
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Success Update
 * /api/v1/auth/me:
 *   get:
 *     summary: Get user profiles
 *     tags: [Auth]
 *     parameters:
 *       - in: header
 *         name: Token
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: User token in header
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schema/myProfiles'
 */

router.post("/login", logIn);

router.post("/sign-up", verifySchema(signupSchema, "body"), signUp);

router.post(
  "/forget-password",
  verifySchema(forgetPasswordSchema, "body"),
  forgetPassword
);

router.post(
  "/change-password/:token",
  verifySchema(restorePasswordSchema, "body"),
  restorePassword
);

router.get("/me", passport.authenticate("jwt", { session: false }), userToken);

router.get(
  "/testing",
  passport.authenticate("jwt", { session: false }),
  async (request, response, next) => {
    try {
      return response.status(200).json({
        results: {
          user: request.user,
          isAuthenticated: request.isAuthenticated(),
          isUnauthenticated: request.isUnauthenticated(),
          _sessionManager: request._sessionManager,
          authInfo: request.authInfo,
        },
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

module.exports = router;
