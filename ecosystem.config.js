module.exports = {
    apps: [
        {
            name: 'weather-app',
            script: './src/index.js',
            instances: '2',
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ]
}