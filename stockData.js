const request = require('request');
let key = '9039772849a1495c9b8562f22d9f459a'


async function CurrentPrices(ticks ){




let tdurl = 'https://api.twelvedata.com/price?symbol='+ ticks.toString() +'&apikey='+ key;

request.get({
    url: tdurl,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      // data is successfully parsed as a JSON object:
      console.log(data);
    }
});
}

CurrentPrices(["IBM","META"])