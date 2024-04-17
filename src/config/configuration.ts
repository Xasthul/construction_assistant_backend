export default () => ({
    port: parseInt(process.env.PORT),
    jwtSecret: process.env.JWTSECREN,
})
