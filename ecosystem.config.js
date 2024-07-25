module.exports = {
    apps: [{
        name: "TCP Server",
        script: "./device_gateway/index.js",
        out_file: "/dev/null",
        error_file: "/dev/null",
        restart_delay: 3000,
        time: true
    }, {
        name: "API Server",
        script: "./device_api/index.js",
        out_file: "/dev/null",
        error_file: "/dev/null",
        restart_delay: 3000,
        time: true
    }]
}