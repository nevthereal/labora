import { relations } from 'drizzle-orm/relations';
import { blob, int, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

// users
export const usersTable = sqliteTable('users', {
	id: text('id', { length: 15 }).primaryKey().notNull(),
	username: text('username', { length: 255 }).notNull().unique(),
	email: text('email', { length: 255 }).notNull().unique(),
	admin: integer('admin', { mode: 'boolean' }).default(false),
	premium: integer('premium', { mode: 'boolean' }).default(false)
});

export const sessionsTable = sqliteTable('sessions', {
	id: text('id', { length: 127 }).primaryKey().notNull(),
	userId: text('user_id', { length: 15 })
		.notNull()
		.references(() => usersTable.id),
	activeExpires: blob('active_expires', { mode: 'bigint' }).notNull(),
	idleExpires: blob('idle_expires', { mode: 'bigint' }).notNull()
});

export const keysTable = sqliteTable('keys', {
	id: text('id', { length: 255 }).primaryKey().notNull(),
	userId: text('user_id', { length: 15 })
		.notNull()
		.references(() => usersTable.id),
	hashedPassword: text('hashed_password', { length: 255 }).notNull()
});

export const userRelation = relations(usersTable, ({ many, one }) => ({
	spaces: many(spacesTable),
	sessions: many(sessionsTable),
	keys: one(keysTable, {
		fields: [usersTable.id],
		references: [keysTable.userId]
	})
}));

export const sessionRelation = relations(sessionsTable, ({ one }) => ({
	user: one(usersTable, {
		fields: [sessionsTable.userId],
		references: [usersTable.id]
	})
}));

export const keyRelation = relations(keysTable, ({ one }) => ({
	user: one(usersTable, {
		fields: [keysTable.userId],
		references: [usersTable.id]
	})
}));

// spaces
export const spacesTable = sqliteTable('spaces', {
	id: text('id').primaryKey().notNull().unique(),
	title: text('title').notNull(),
	creatorId: text('creator_id')
		.references(() => usersTable.id)
		.notNull()
});

export const spacesRelation = relations(spacesTable, ({ one, many }) => ({
	user: one(usersTable, {
		fields: [spacesTable.creatorId],
		references: [usersTable.id]
	}),
	tasks: many(tasksTable)
}));

// tasks
export const tasksTable = sqliteTable('tasks', {
	id: int('id').primaryKey(),
	title: text('title').notNull(),
	body: text('body').notNull(),
	due: int('due', { mode: 'timestamp' }),
	completed: int('completed', { mode: 'boolean' }).default(false),
	spaceId: text('space_id')
		.notNull()
		.references(() => spacesTable.id)
});

export const tasksRelation = relations(tasksTable, ({ one }) => ({
	space: one(spacesTable, {
		fields: [tasksTable.spaceId],
		references: [spacesTable.id]
	})
}));
