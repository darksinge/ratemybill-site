/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  // ------------------------
  // Default Route
  // ------------------------
  '/': {
    view: 'homepage'
  },
  
   // ------------------------
   // SearchController routes
   // ------------------------
  '/api/search': 'SearchController.search',

   // ------------------------
   // UserController routes
   // ------------------------
  'GET /profile': 'UserController.index',
  'GET /api/profile': 'UserController.profileJSON',
  '/logout': 'UserController.logout',

   // ------------------------
   // AuthController routes
   // ------------------------
   'GET /oauth/facebook': 'AuthController.facebookAuth',
   '/oauth/facebook/callback': 'AuthController.facebookCallback',
   
   // ------------------------
   // CommentController Routes
   // ------------------------
   'GET  /comment/:bill': 'CommentController.billComments',
   'POST /comment': 'CommentController.create',

   // ------------------------
   // BillInfo Routes
   // ------------------------
   '/billinfo/:year/:name': 'BillInfoController.findOne', 
   '/billinfo/upvote/:year/:name': 'BillInfoController.upvote',
   '/billinfo/downvote/:year/:name': 'BillInfoController.downvote',
   '/billinfo/neutralvote/:year/:name': 'BillInfoController.neutralvote'

};
