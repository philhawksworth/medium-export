var axios       = require('axios');
var toJSON = require('xml2js').parseString;

//
var url = 'https://medium.com/feed/netlify';

module.exports = () => {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((response) => {
        // turn the feed XML into JSON
        toJSON(response.data, function (err, result) {

          // console.log(result.rss.channel[0].item);


          // create a path for each item based on Medium's guid URL
          result.rss.channel[0].item.forEach(element => {
            var url = element.link[0].split('/');
            element.path = url[url.length-1].split('?')[0];
          });
          resolve(result.rss.channel[0].item);
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
};
