import bunyan from 'bunyan';

export const logger = bunyan.createLogger({name: 'express-gcp'});