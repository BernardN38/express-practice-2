/** User related routes. */

const User = require("../models/user");
const express = require("express");
const router = new express.Router();
const ExpressError = require("../helpers/expressError");
const { authUser, requireLogin, requireAdmin } = require("../middleware/auth");
const { Field } = require("pg-protocol/dist/messages");

/** GET /
 *
 * Get list of users. Only logged-in users should be able to use this.
 *
 * It should return only *basic* info:
 *    {users: [{username, first_name, last_name}, ...]}
 *
 */
// bug 5 too much info being returned
router.get("/", authUser, requireLogin, async function (req, res, next) {
  try {
    let users = await User.getAll();
    for (let user of users) {
      delete user.email;
      delete user.phone;
    }
    return res.json({ users });
  } catch (err) {
    return next(err);
  }
}); // end

/** GET /[username]
 *
 * Get details on a user. Only logged-in users should be able to use this.
 *
 * It should return:
 *     {user: {username, first_name, last_name, phone, email}}
 *
 * If user cannot be found, return a 404 err.
 *
 */

// bug 4 only admin or user themselve should be able to view user details
router.get(
  "/:username",
  authUser,
  requireLogin,
  async function (req, res, next) {
    try {
      if (!req.curr_admin && req.curr_username !== req.params.username) {
        throw new ExpressError(
          "Only  that user or admin can edit a user.",
          401
        );
      }
      let user = await User.get(req.params.username);
      return res.json({ user });
    } catch (err) {
      return next(err);
    }
  }
);

/** PATCH /[username]
 *
 * Update user. Only the user themselves or any admin user can use this.
 *
 * It should accept:
 *  {first_name, last_name, phone, email}
 *
 * It should return:
 *  {user: all-data-about-user}
 *
 * It user cannot be found, return a 404 err. If they try to change
 * other fields (including non-existent ones), an error should be raised.
 *
 */

// bug 3 remove require admin for user themselves to edit own profile
// bug 6 body not validated
router.patch(
  "/:username",
  authUser,
  requireLogin,
  async function (req, res, next) {
    try {
      if (!req.curr_admin && req.curr_username !== req.params.username) {
        throw new ExpressError(
          "Only  that user or admin can edit a user.",
          401
        );
      }

      // get fields to change; remove token so we don't try to change it
      let fields = ["first_name", "last_name", "email", "phone"];
      let data = {};
      for (let field of fields) {
        if (req.body[field]) {
          data[field] = req.body[field];
        }
      }
      let user = await User.update(req.params.username, data);
      return res.json({ user });
    } catch (err) {
      return next(err);
    }
  }
); // end

/** DELETE /[username]
 *
 * Delete a user. Only an admin user should be able to use this.
 *
 * It should return:
 *   {message: "deleted"}
 *
 * If user cannot be found, return a 404 err.
 */

// delete user needs to be checked
router.delete(
  "/:username",
  authUser,
  requireAdmin,
  async function (req, res, next) {
    try {
      if (User.delete(req.params.username)) {
        return res.json({ message: "deleted" });
      }
    } catch (err) {
      return next(err);
    }
  }
); // end

module.exports = router;
