create table IF NOT EXISTS projects(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT as identity,
    name text not null check (name <> ''),
    priority integer not null,
    description text,
    delivery_date date not null
);

create table IF NOT EXISTS tasks(
    id INTEGER PRIMARY key generated by default as identity,
    name text not null check (name <> ''),
    done boolean,
    project_id integer REFERENCES projects(id)
);

-- insert projects
insert into projects(name, priority, description, delivery_date) 
VALUES ('Make a web app', 1, 'using javascript', '2019-05-12');

insert into projects(name, priority, description, delivery_date) 
VALUES ('Make a dekstop app', 2, 'using c++', '2019-05-14');

insert into projects(name, priority, description, delivery_date) 
VALUES ('Make a dekstop android', 1, 'using kotlin', '2019-06-14');


-- insert tasks
insert into tasks(name, done, project_id) values ('download vue js', false, 1);
insert into tasks(name, done, project_id) values ('download react js', false, 3);
insert into tasks(name, done, project_id) values ('download visual studio 2019', false, 2);
insert into tasks(name, done, project_id) values ('download visual basic', false, 2);
insert into tasks(name, done, project_id) values ('download vue js', false, 1);