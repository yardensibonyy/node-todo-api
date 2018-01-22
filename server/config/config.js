var env = process.env.NODE_ENV || 'development';

//when we require json document it's autumatically parsed as JS object
if (env === 'development' || env === 'test') {
    var config = require('./config.json');
    var envConfig = config[env]; //taking the object base on env value (test or development)

    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key];
    });
}
