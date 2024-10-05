export const getBaseUrl = (): any => {
    const environment = process.env.NODE_ENV;

    switch (environment) {
        case 'development':
            return 'http://localhost:6060/api/v1'; 
        case 'production':
            return 'http://localhost:6060/api/v1';
        default:
            return 'http://localhost:6060/api/v1'; 
    }
};