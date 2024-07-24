var redis = require('redis');
const config = require("./config.json");
const client = redis.createClient({
    url: config.REDIS_URI,
    legacyMode: true
});

(async () => {
    let ss = await client.connect()
})();

5
client.on('connect', function () {
    console.log('Connected!');

    client.smembers ("ota_commands_0358739052158590", (key, value) => {
        console.log("Wwwwwwwww")
        debugger
    })
});



client.keys('*', function (err, keys) {
    if (err) return console.log(err);

    for (var i = 0, len = keys.length; i < len; i++) {
        console.log(keys[i]);
    }
});      