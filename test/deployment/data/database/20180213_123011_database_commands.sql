CREATE TABLE "myfirstmodule$entity" (
	"id" BIGINT NOT NULL,
	"attribute" VARCHAR_IGNORECASE(200) NULL,
	PRIMARY KEY("id"));
INSERT INTO "mendixsystem$entity" ("id", 
"entity_name", 
"table_name")
 VALUES ('1ef6b9a3-d5c3-40cd-9b6c-183c84f7abe0', 
'MyFirstModule.Entity', 
'myfirstmodule$entity');
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('e292eb6c-588a-43fa-9f14-82381d9a4234', 
'1ef6b9a3-d5c3-40cd-9b6c-183c84f7abe0', 
'Attribute', 
'attribute', 
30, 
200, 
'', 
false);
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.2', 
"lastsyncdate" = '20180213 12:30:10';
