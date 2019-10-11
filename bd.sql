DROP TABLE IF EXISTS play;
DROP TABLE IF EXISTS piece;
DROP TABLE IF EXISTS actor;

CREATE TABLE actor (
	id varchar(32) PRIMARY KEY,
	free BOOLEAN[7][24]
);
CREATE TABLE piece (
	id varchar(32) PRIMARY KEY,
	roles JSONB -- {"romeo":["tim","tom"],"julliette":["eva","amy"]}
);
CREATE TABLE play  (
	id SERIAL PRIMARY KEY,
	piece varchar REFERENCES piece(id),
	date date NOT NULL,
	time time NOT NULL,
	roles varchar[],
	actors varchar[] -- REFERENCES actor(id)
);


