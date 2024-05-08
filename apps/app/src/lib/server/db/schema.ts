import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const tasks = sqliteTable('tasks', {
	id: int('id').primaryKey(),
	createdAt: int('created_at', { mode: 'timestamp' }),
	title: text('title').notNull(),
	body: text('body').notNull()
});
