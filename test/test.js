var assert = require('assert');
var dcardModule = require('../dcardModule.js');

describe('String#split', function(){
  it('should return an array', function(done){

  	var url = 'https://www.dcard.tw/f/sex/p/225733687-%EF%BC%83%E5%9C%96-%E9%81%8E%E5%B9%B4%E5%A5%BD%E7%A9%BA%E8%99%9B%E5%A5%BD%E5%AF%82%E5%AF%9E%E5%A5%BD%E5%86%B7';

  	console.log('url: ', url)

  	dcardModule.fetchTopic(url).then((json)=>{
    	// assert(Array.isArray([]));
    	console.log('json:', json)
    	done();
  	},(err)=>{
  		done(err);
  	});

  });
});