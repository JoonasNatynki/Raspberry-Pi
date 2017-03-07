var path = require("path");
var express = require("express");
//var fileSystem = require("fs");
var app = express();
var portnumber = 8000;
var cp = require("child_process");
var passport = require("passport");
var util = require("util");
var crypto = require("crypto");
var redditStrategy = require("passport-reddit").Strategy;

console.log("Initialization done.");

app.listen(portnumber);

var REDDIT_CONSUMER_KEY = "oz4I-8h8nyfXcg";	// client id
var REDDIT_CONSUMER_SECRET = "Nzf6R_2jbnHd59fS8-v4V1UDrNc";	// client secret

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Reddit profile is
//   serialized and deserialized.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// Use the RedditStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Reddit
//   profile), and invoke a callback with a user object.
passport.use(new redditStrategy({
    clientID: REDDIT_CONSUMER_KEY,
    clientSecret: REDDIT_CONSUMER_SECRET,
    callbackURL: "http://natynki.net/authorize_callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {

      // To keep the example simple, the user's Reddit profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Reddit account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });
  }
));

// configure Express

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.session({ secret: 'keyboard cat' }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.use(express.static(__dirname + '/public'));








console.log("Server running at natynki.net.");

// Default front page
app.get("/", function(request, response)
	{
	    response.sendFile(__dirname + "/frontPage.html");
	});

app.get("/authorize_callback*", function(request, response)
	{
		console.log(request.query.code);
		response.redirect("/");
	});

app.get("/*", function(request, response)
	{
	    console.log("Handling request to: " + request.url);
	    if(path.extname(request.url) == ".js")
	    {
			response.sendFile(__dirname + request.url);
	    }
		else
	    {
			response.sendFile(__dirname + request.url);
	    }
	});
