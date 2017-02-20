
import dcardModule from './dcardModule.js'
///////////////////////////////////////
//  Module.exports will be the default 
//  entry from the compiler
///////////////////////////////////////
module.exports = function() {

    (async function() {

        let topicList = await dcardModule.fetchTitle();
        
        let imageList = [];

  		for (let topicJson of topicList) {
  			console.log('topicJson.link: ', topicJson.link)
  			let imageUrl = await dcardModule.fetchTopic(topicJson.link);
        	imageList = imageList.concat(imageUrl);
        }

  		for (let imageUrl of imageList) {
			var url = imageUrl;
			var path ="./download"
        	var downloadAPI = require('downloadAPI');
			console.log(await downloadAPI(url).setPath(path).start());
        }


        console.log('imageList: ', imageList);
    }());

}