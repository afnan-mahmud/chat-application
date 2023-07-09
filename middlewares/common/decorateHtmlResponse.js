function decorateHtmlResponse(page_title) {
  return function (req, res, next) {
    res.locals.html = true;
    res.locals.title = `${page_title} ${process.env.APP_NAME}`;
    res.locals.errors = {};
    res.locals.data = {};
    res.locals.loggedInUser = {};

    // // Middleware to set loggedInUser
    // res.setLoggedInUser = function (userObject) {
    //   res.locals.loggedInUser = userObject;
    // };

    next();
  };
}

module.exports = {
  decorateHtmlResponse,
};
