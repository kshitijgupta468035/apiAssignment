import { Pool } from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '468035',
    database: 'firstapi',
    port: 5000
});

