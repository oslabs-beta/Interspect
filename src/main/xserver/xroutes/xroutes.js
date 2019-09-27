
const router = require("express").Router();
const methods = ['get', 'post', 'patch', 'put', 'delete'];

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


const setDynamicRoutes = (req, res, next) => {
  console.log("get req'd body", req.body);
  console.log("get req'd body.bodyItems", req.body.bodyItems);
  const bodyItems = req.body.bodyItems;
  try {
    for (let i = 0; i < methods.length; i++) {
      for (let item in bodyItems) {
        router[methods[i]](bodyItems[item].customRoute, handleRequest);
      }
    }
    next();
  } catch (error) {
    res.status(500).send(error).end();
  }
}

// Placeholder middleware for making sure dynamic routing works
const handleRequest = (req, res) => {
  console.log(req.headers);
  try {
    if (req.headers['content-type'].includes('json')
      || req.headers['content-type'].includes('xml')) {
      res.status(200).send();
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
router.get('/gotem', setDynamicRoutes, (req, res) => {
  console.log("ROUTES HAVE BEEN SET", req.body.bodyItems);
  res.status(200).end();
});




module.exports = {router, setURLFilePath};

