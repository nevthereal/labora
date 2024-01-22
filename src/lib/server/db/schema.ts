import { relations } from 'drizzle-orm/relations';
import {
	mysqlSchema,
	text,
	boolean,
	timestamp,
	varchar,
	int,
	bigint
} from 'drizzle-orm/mysql-core';

export const main = mysqlSchema('main');

// users
export const usersTable = main.table('users', {
	id: varchar('id', { length: 15 }).primaryKey().notNull(),
	username: text('username').notNull().unique(),
	email: text('email').notNull().unique(),
	admin: boolean('admin').default(false)
});

export const keysTable = main.table('keys', {
	id: varchar('id', { length: 255 }).primaryKey().notNull(),
	userId: varchar('user_id', { length: 15 })
		.notNull()
		.references(() => usersTable.id),
	hashedPassword: varchar('hashed_password', { length: 255 }).notNull()
});

export const sessionsTable = main.table('sessions', {
	id: varchar('id', { length: 127 }).primaryKey().notNull(),
	userId: varchar('user_id', { length: 15 })
		.notNull()
		.references(() => usersTable.id),
	activeExpires: bigint('active_expires', { mode: 'bigint' }).notNull(),
	idleExpires: bigint('idle_expires', { mode: 'bigint' }).notNull()
});

export const userRelation = relations(usersTable, ({ many, one }) => ({
	sessions: many(sessionsTable),
	keys: one(keysTable, {
		fields: [usersTable.id],
		references: [keysTable.userId]
	}),
	spaces: many(spacesTable)
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
export const spacesTable = main.table('spaces', {
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
export const tasksTable = main.table('tasks', {
	id: int('id').primaryKey().autoincrement(),
	title: text('title').notNull(),
	body: text('body').notNull(),
	due: timestamp('due'),
	completed: boolean('completed').default(false),
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
