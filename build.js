const webdriver = require('./data/webdriver');
const appium = require('./data/appium');

const browsers = [...webdriver, ...appium];

const keys = [
    'api_name',
    'short_version',
    'os',
    'device',
    'automation_backend',
    'long_name',
    'long_version',
    'recommended_backend_version',
    'deprecated_backend_versions',
    'supported_backend_versions',
];

const rows = [
    keys,
    ...browsers.map(
        browser => keys.map(
            key => `"${browser[key] || ''}"`
        )
    )
];

rows.forEach(row => console.log(row.join(',')));


