


var request = require('request');
var cheerio = require('cheerio');


/**
 * fetchTitle, return an array of object, which has title and link as properties
 * @return {Array} returnData, [{title:..., link:...}, ...]
 */
let fetchTitle = () => 
new Promise ((resolve, reject)=>{
	const url = 'https://www.dcard.tw';
	request(url+'/f/sex', function(error, response, html){
		if(error) reject(error);
		var $ = cheerio.load(html);
		let returnData = [];
		$('.PostEntry_entry_2rsgm ').each(function(i, element){

			const _title = $(this, 'strong').text();

			if(_title)

			returnData.push({
				 title : $(this, 'strong').text(), 
				 link : url+$(this).attr('href')
			})
		});
		resolve(returnData);
	})
})



/**
 * fetchTopic, given url of the page and return an Array of image URLs
 * @param {String} url, 
 * @return {Array} returnData, array of image URLs, which is going to download
 */
let fetchTopic = (url) => 
new Promise ((resolve, reject)=>{
	var baseUrl = 'https://www.dcard.tw/f/sex/p/';
	var afterUrl = url.replace(baseUrl, "");

	request(baseUrl + encodeURIComponent(afterUrl), function(error, response, html){
		if(error) reject(error);
		var $ = cheerio.load(html);
		let returnData = [];

			// console.log(html)
		$('.Post_content_1xpMb').find('div').each(function(i, element){
			let imgUrl = $(this).find('img').attr('src');
			if(imgUrl && returnData.indexOf(imgUrl)==-1){
				returnData.push(imgUrl);
			}
		});

		resolve(returnData);
	})
})

module.exports = {
	fetchTitle : fetchTitle,
	fetchTopic : fetchTopic
};