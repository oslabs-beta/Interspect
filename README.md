<p align="center">
  <img src="https://github.com/oslabs-beta/Interspect/blob/master/public/icon_png.png" width="128" />
  <h1 align="center"><a href="https://interspect.io/">Interspect</a></h1>
</p>

[![Build Status](https://travis-ci.com/oslabs-beta/Interspect.svg?branch=master)](https://travis-ci.com/oslabs-beta/apimocking)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/oslabs-beta/Interspect/pulls)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

Interspect is an API-mocking tool that helps you ensure data interoperability between microservices and arbitrary API endpoints. [Download the app](https://github.com/oslabs-beta/Interspect/releases/download/1.0.0/Interspect-macOS-x64.zip) for macOS to get started.

## Basic usage
The app is split into two, distinct panels:

### Source
This is where you can define a data source that will become the foundation for your data mockups.

![Screenshot of source panel](/assets/screenshots/rest-source.png)

#### Send a GET request
If your microservice supports `GET` requests, add your endpoint to the request bar and hit send. You’ll then be able to view the response data, which you can then send over to the Mockups panel. If the response is not what you wanted or you made a mistake, you can easily remove the response by clicking the 'X' sitting at the top right of every response.

#### Accpeted data types
Interspect works with `JSON`, `XML`, and `GraphQL`-formatted data. For `GraphQL` requests, click the button in the top left corner of the Source panel, and another textbox will appear. This is where you'll write out the schema for your `GraphQL` request. To switch back to REST api requests, simply click the button again.

![Screenshot of source panel with GraphQL setting](/assets/screenshots/graphql-source.png)

### Mockups
In the mockups panel, you can create new data scenarios from your source data. There are two sections: a Mock Library and Mock Server.

#### Editing Data In the Mock Library
The Mock Library is where all of your response data is stored after saving it from the Source panel. You can edit your data by clicking on the clipboard icon, or delete your data by clicking on the 'X' icon as you please in this section. Upon clicking the clipboard icon, a pop-up will appear where you can edit what's inside the response data, as well as setup a mock request by defining a custom route with a specified method type (i.e. GET, POST, PUT, PATCH, DELETE), and fake response data to be returned depending on whether your mock request was successful or not. 

![Screenshot of mock panel with edit mode](/assets/screenshots/edit-modal.png)

#### Making Requests to the Mock Server
When you finish editing your data, you can send it to the Mock Server section, where you can test your custom routes that you set up when editing your response data on http://localhost:3000. This can be done by making a request to the route using `curl`, or the `Postman` application. Upon a successful test, you should get the responses that you set up during editing.

![Screenshot of a curl request to a custom route](/assets/screenshots/curl-request.png)


----
## Authors
Interspect was created by:

- Joe Pavlisko [@joepav](https://github.com/joepav)
- Donald Blanc [@Donaldblanc](https://github.com/Donaldblanc)
- Conor Sexton [@conorsexton](https://github.com/conorsexton)
- Joel Rivera [@RealJoelRivera](https://github.com/RealJoelRivera)
- Will Magee [@wmagee03](https://github.com/wmagee03)
- Natia Khomasuridze [@Natia94](https://github.com/Natia94)
- David Neuahaus [@neuhausneuhaus](https://github.com/neuhausneuhaus)
- Derek Cross [@derekcrosslu](https://github.com/derekcrosslu)

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
