CREATE TABLE "events" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "events_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(100) NOT NULL,
	"description" varchar(500) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "sports" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "sports_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" varchar(255) NOT NULL,
	"image" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	CONSTRAINT "sports_title_unique" UNIQUE("title")
);
