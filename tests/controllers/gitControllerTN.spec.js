// rewire let's us break up this execution of the function into two statements
// var gitController = require('../../controllers/gitController')();

var rewire = require('rewire');
// this is equal to the function within gitservice
var GitCtrl = rewire('../../controllers/gitController');
// this executes the results of the function in GitCtrl which is the userGet object
var gitController = GitCtrl();

var chai = require('chai');
var sinon = require('sinon');

chai.should();

var getUser;
describe('gitControllerTN', function () {
    this.beforeEach(function () {
        // this pulls out gitService even though it's not exposed using rewire
        // and this allows us to add a spy to our gitService
        var gitservice = GitCtrl.__get__('gitService');
        getUser = sinon.spy(gitservice, 'getUser');
        GitCtrl.__set__('gitService', gitservice);
    })
    it('should get user and repos from git service', function (done) {
        this.timeout(10000);
        var req = { params: { userId: 'tcnelson13' } };

        var res = { json: test };

        function test(user) {
            console.log('getUser args...', getUser.getCall(0).args);
            getUser.getCall(0).args[0].should.equal('tcnelson13');
            getUser.calledOnce.should.be.true;
            user.login.should.equal('tcnelson13');
            done();
        }
        gitController.userGet(req, res);
    })
})
