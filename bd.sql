CREATE TABLE actor (id varchar(32) PRIMARY KEY, free BOOLEAN[7][24]);
CREATE TABLE piece (id varchar(32) PRIMARY KEY, roles JSONB);
CREATE TABLE play  (id SERIAL      PRIMARY KEY, date date NOT NULL, time time NOT NULL,
                    piece_id varchar REFERENCES piece(id), actors JSONB);


