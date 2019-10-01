
let router = require("express").Router();

let urlFilePath = '';
function setURLFilePath(url) {
  urlFilePath = url
  console.log(urlFilePath);
};

// Function that dynamically sets routes based on passed in bodyItems object
// Called when hitting the /gotem route
// TODO: REQUIREMENTS:
//ensure existing routes are cleared
//make new routes for each body item's customRoute, for customMethod
//customRoute requests from outside server should return 200 status
//customRoute requests from outside server SHOULD RETURN CUSTOMRESPONSE AS RESPONSE

// This function currently doesn't work
// const resetRoutes = () => {
//   router = require('express').Router();
//   router.use('/676F74E28099656D', setDynamicRoutes, (req, res) => {
//     console.log("ROUTES HAVE BEEN SET");
//     res.status(200).end();
//   });
// }

const setDynamicRoutes = (req, res, next) => {
  const methods = ['get', 'post', 'patch', 'put', 'delete'];
  const bodyItems = req.body.bodyItems;
  try {
    for (let i = 0; i < methods.length; i++) {
      for (let item in bodyItems) {
        if (bodyItems[item].customMethod.toLowerCase() === methods[i]) {
          router[methods[i]](bodyItems[item].customRoute, (req, res, next) => {
            res.locals.response = bodyItems[item].customResponse;
            next();
          }, handleRequest);
        }
      }
    }
    next();
  } catch (error) {
    res.status(500).send(error).end();
  }
}

// Placeholder middleware for making sure dynamic routing works
const handleRequest = (req, res) => {
  try {
    if (req.headers['content-type'].includes('json')
      || req.headers['content-type'].includes('xml')) {
      res.status(200).send(res.locals.response);
      res.end();
    } else {
      res.status(400);
      res.end();
    }
  } catch {
    res.status(500);
    res.end();
  }
};

// Route for setting up other routes dynamically
router.use('/676F74E28099656D', setDynamicRoutes, (req, res) => {
  console.log("ROUTES HAVE BEEN SET");
  res.status(200).end();
});




module.exports = {router, setURLFilePath};

