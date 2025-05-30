export const getBaseUrl = (): any => {
    const environment = process.env.NODE_ENV;

    switch (environment) {
        case 'development':
            return 'https://home-crafter-backend.vercel.app/api/v1'; 
        case 'production':
            return 'https://home-crafter-backend.vercel.app/api/v1';
        default:
            return 'https://home-crafter-backend.vercel.app/api/v1'; 
    }
};