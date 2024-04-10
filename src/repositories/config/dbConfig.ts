import { PoolConfig } from 'mysql';

const dbConfig: PoolConfig = {
    host: 'localhost',
    user: 'myuser',
    password: 'mypassword',
    database: 'api_ts',
    connectionLimit: 10,
};

export default dbConfig;
