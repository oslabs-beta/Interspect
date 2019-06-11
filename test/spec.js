const { Application } = require('spectron');
const electronPath = require('electron');
const path = require('path');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const mocha = require('mocha');

const {
  describe, beforeEach, afterEach, it,
} = mocha;

chai.should();
chai.use(chaiAsPromised);

describe('App Launch', () => {

  beforeEach(() => {
    this.app = new Application({
      path: electronPath,
      args: [path.join(__dirname, '..')],
    });
    return this.app.start();
  });

  afterEach(() => {
    if (this.app && this.app.isRunning()) {
      return this.app.stop();
    }
  });

  it('opens a window', () => this.app.client.waitUntilWindowLoaded()
    .getWindowCount().should.eventually.equal(1));
});
