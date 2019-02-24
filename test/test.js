const assert = require('assert');
const main = require('../index.js')
import rules from "../rules.js";
// describe('mainFunction', function() {

//     it('should return 5', function() {
//       assert.equal(main.plusOne(4), 5);
//     });

//     it('Basic expression 5+2',function() {
//     	assert.equal(main.parse('5+2'),
// 	    	{
// 	    		type:'expr',
// 	    		operator:'+',
// 	    		right:{
// 	    			type:'int',
// 	    			val: '5'
// 	    		},
// 	    		left: {
// 	    			type: 'int',
// 	    			val: '2'
// 	    		}
// 	    	}
//     	)
//     	})
// }); 

describe('rulesFunction', function() {

    it('a should return char', function() {
      assert.equal(rules('a'), 'char' );
    });

     it('A should return char', function() {
      assert.equal(rules('A'), 'char' );
    });

      it('2 should return num', function() {
      assert.equal(rules(2), 'num' );
    });

}); 

