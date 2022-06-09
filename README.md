# apigateway-template

## Getting started
- Update `package.json`
- Update Docker image tag in `Makefile`
- Add proxies for downstream services in `server.js`
- Add following environment variables:
    - `AWS_COGNITO_USER_POOL_ID`
    - `AWS_COGNITO_CLIENT_ID` 