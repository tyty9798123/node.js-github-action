var assert = require('assert');
let server = require("../server");
let chai = require("chai");
let chaiHttp = require("chai-http");

// Assertion 
chai.should();
chai.use(chaiHttp);

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

/* https://www.chaijs.com/plugins/chai-http/ */
describe("GET /", ()=>{
    it('should return Hello World', (done)=>{
        chai.request(server)
            .get("/")
            .end((err, response) => {
                response.should.have.status(200);
                response.should.to.be.html;
                response.text.should.be.equal("Hello World hi!");
                done();
            });
    })
})