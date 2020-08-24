const MAIN_CONFIG = {
  db: process.env.NODE_ENV === 'production' ? 'mongodb://monitor_database/dashboard' : 'mongodb://127.0.0.1:27017/dashboard',
};

export default MAIN_CONFIG;
