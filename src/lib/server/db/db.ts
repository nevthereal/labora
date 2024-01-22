import { connect } from '@planetscale/database';
import { drizzle } from 'drizzle-orm/planetscale-serverless';
import { DB_HOST, DB_PASSWORD, DB_USERNAME } from '$env/static/private';
import * as schema from './schema';

const client = connect({
	host: DB_HOST,
	username: DB_USERNAME,
	password: DB_PASSWORD
});

export const db = drizzle(client, { schema });
