import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';
import { DB_URL } from '$env/static/private';

const client = createClient({
	url: DB_URL
});

export const db = drizzle(client, { schema });
