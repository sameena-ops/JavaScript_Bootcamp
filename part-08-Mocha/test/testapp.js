const assert = require('chai').assert;
const app = require('../index');


describe('Test my hello App',function(){    
it('should return hello!', function(){
        assert.equal(app(),'hello');
    });
});