USE burgers_db;

INSERT INTO burgers (burger_name, devoured) VALUES ('cheeseburger', TRUE);
INSERT INTO burgers (burger_name, devoured) VALUES ('hamburger', TRUE);
INSERT INTO burgers (burger_name, devoured) VALUES ('baconburger', FALSE);

SELECT * FROM burgers;
