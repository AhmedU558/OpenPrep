import 'dotenv/config';

// Integration tests run against a separate database so they never touch real study data.
(process.env as Record<string, string>).NODE_ENV = 'test';
if (process.env.TEST_DATABASE_URL) process.env.DATABASE_URL = process.env.TEST_DATABASE_URL;
