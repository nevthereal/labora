CREATE TABLE `keys` (
	`id` text(255) PRIMARY KEY NOT NULL,
	`user_id` text(15) NOT NULL,
	`hashed_password` text(255) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `sessions` (
	`id` text(127) PRIMARY KEY NOT NULL,
	`user_id` text(15) NOT NULL,
	`active_expires` blob NOT NULL,
	`idle_expires` blob NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `spaces` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`creator_id` text NOT NULL,
	`premium` integer DEFAULT false,
	FOREIGN KEY (`creator_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `tasks` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`body` text NOT NULL,
	`due` integer,
	`completed` integer DEFAULT false,
	`space_id` text NOT NULL,
	FOREIGN KEY (`space_id`) REFERENCES `spaces`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text(15) PRIMARY KEY NOT NULL,
	`username` text(255) NOT NULL,
	`email` text(255) NOT NULL,
	`admin` integer DEFAULT false
);
--> statement-breakpoint
CREATE UNIQUE INDEX `spaces_id_unique` ON `spaces` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_username_unique` ON `users` (`username`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);