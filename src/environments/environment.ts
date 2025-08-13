declare const process: any;

export const environment = {
  production: false,
  host: process.env['HOST'] || 'http://localhost:8080/v1',
};
