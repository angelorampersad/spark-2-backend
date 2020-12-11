module.exports = {
    upload: {
        provider: 'google-cloud-storage',
        providerOptions: {
            bucketName: 'spark-2-strapi',
            publicFiles: false,
            uniform: false,
            basePath: '',
        }
    }
}