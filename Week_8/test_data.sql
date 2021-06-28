CREATE TABLE IF NOT EXISTS students (
  student_id int,
  first_name char(15),
  last_name char(15),
  age int,
  state_abbr char(2)
);

INSERT INTO students VALUES (1, 'Justin', 'Law', 25, 'NY');
INSERT INTO students VALUES (2, 'Joe', 'Schmo', 99, 'KY');