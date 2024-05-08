CREATE TABLE `tasks` (
	`id` integer PRIMARY KEY NOT NULL,
	`created_at` integer,
	`title` text NOT NULL,
	`body` text NOT NULL
);
