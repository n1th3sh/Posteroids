const configuredBase = (process.env.REACT_APP_API_BASE_URL || '').replace(/\/+$/, '');

export const API_BASE_URL = configuredBase
  ? (/\/api$/i.test(configuredBase) ? configuredBase : `${configuredBase}/api`)
  : '/api';
