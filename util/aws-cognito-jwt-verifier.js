const { authenticate } = require('aws-cognito-express');

module.exports = authenticate({
    region: 'us-east-1',
    userPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
    tokenUse: ['id'],
    audience: [process.env.AWS_COGNITO_CLIENT_ID]
})