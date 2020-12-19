<p align="center">
  <img src="https://github.com/oslabs-beta/Interspect/blob/master/public/icon_png.png" width="128" />
  <h1 align="center"><a href="https://interspect.io/">Interspect</a></h1>
</p>

[![Build Status](https://travis-ci.com/oslabs-beta/Interspect.svg?branch=master)](https://travis-ci.com/github/oslabs-beta/interspect)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/oslabs-beta/Interspect/pulls)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

Interspect is an API-mocking tool that helps you ensure data interoperability between microservices and arbitrary API endpoints. [Download the app](https://github.com/oslabs-beta/Interspect/releases/download/1.0.0/Interspect-macOS-x64.zip) for macOS to get started.

## Basic usage
The app is split into three, distinct panels:

### Source
This is where you can define a data source that will become the foundation for your data mockups. There are a couple ways to get data  into the application.

![Screenshot of source panel](/assets/screenshots/source-panel.png)

#### Send a GET request
If your microservice supports `GET` requests, add your endpoint to the request bar and hit send. You’ll then be able to view the response data, along with basic performance metrics for the request.

#### Send data to Interspect
You can also send data to the source panel at `http://localhost:3001/posturl` with `POST`, `PUT`, `PATCH`, or `DELETE`.

**Note:** The open socket may timeout after extended use. There’s an [open issue](https://github.com/oslabs-beta/Interspect/issues/94) to resolve (and we welcome contributions 😉)

#### Accpeted data types
Interspect works with `JSON` and `XML`-formatted data

### Mockups
In the mockups panel, you can create new data scenarios from your source data. Each data tree is editable so you can delete, update, or add new data.

![Screenshot of mockups panel](/assets/screenshots/mockups-panel.png)

If your data source is a collection, you can also create new mockups from a specific index or key.

#### Creating test assertions
You can add test assertions to any mockup as well. Simply click **Edit Test Assertions** and choose a specific status code or status code range that you expect to receive when sending your mockup to your destination microservice.

While only status code assertions are supported at launch, we welcome contributions to add additional test domains.

### Destination
In the third panel, you can enter a destination endpoint for your mock data. When you send your request, each mockup you created will be sent in sequence to the destination endpoint. 

![Screenshot of destination panel](/assets/screenshots/destination-panel.png)

Upon a successful request, you will be able to see returned status codes as well as the result of any test assertions and basic performance metrics. 

**Note:** HTTP Requests in the destination panel are sent 10 times to get an average of the total request time. At launch, this behavior cannot be turned off, but a [preference will be added in a future version](https://github.com/oslabs-beta/Interspect/issues/95).


----
## Authors
Interspect was created by:

- Joe Pavlisko [@joepav](https://github.com/joepav)
- Donald Blanc [@Donaldblanc](https://github.com/Donaldblanc)
- Conor Sexton [@conorsexton](https://github.com/conorsexton)
- Joel Rivera [@RealJoelRivera](https://github.com/RealJoelRivera)

## Contributing
We welcome pull requests and new issues. There are also several open issues that are up for grabs. 

## License
MIT License

© 2019 Interspect

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
