const redis = require("redis");
const config = require("../config.json");
const redis_client = redis.createClient({
    url: config.REDIS_URI,
    legacyMode: true
});

redis_client.on("error", (err) => {
    console.log("Redis Connection Error " + err);
});

(async () => {
    await redis_client.connect();
})();

module.exports = {
    get: (imei) => {
        return new Promise((resolve, reject) => {
            redis_client.spop(`get ota_commands`)
                .then((data) => {
                    console.log("Data", data);
                    resolve(data ? JSON.parse(data) : null);
                })
                .catch((err) => {
                    console.log("Error", err);
                    resolve(null);
                });
        });
    },
    add: (imei, data) => {
        return new Promise((resolve, reject) => {
            redis_client.sadd(
                `ota_commands`,
                JSON.stringify(data))
                .then((data) => {
                    console.log("add Data", data);

                    resolve(null);
                })
                .catch((err) => {
                    console.log("Error", err);
                    resolve(null);
                });
        });
    },
    members: () => {
        return new Promise((resolve, reject) => {
            redis_client.smembers("ota_commands", (err, value) => {
                if (err) {
                    console.log("Error in .members()", err)
                    resolve([]);
                }
                else {
                    console.log("members Data", value);
                    resolve(value.map(k => JSON.parse(k)))
                }
            })
            // .then((data) => {
            //     console.log("members Data", data);
            //     resolve(data.map(k => JSON.parse(k)))
            // })
            // .catch((err) => {
            //     console.error(err);
            //     resolve([]);
            // })
        });
    },
    remove: (data) => {
        return new Promise((resolve, reject) => {
            console.log("ready to remove",data)
            redis_client.srem("ota_commands",JSON.stringify(data))
            resolve(true);
            // .then((res) => {
            //     resolve(true);
            // })
            // .catch((err) => {
            //     console.error(err);
            //     resolve(false);
            // });
        });
    }
};