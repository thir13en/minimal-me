import { Application } from 'express';

import apiErrorHandler from './apiErrorHandler';
import onError from './onError';
import onSuccess from './onSuccess';
import onDatabaseError from './onDatabaseError';


export function initRestApi(app: Application) {
}

export { apiErrorHandler, onSuccess, onError, onDatabaseError };
