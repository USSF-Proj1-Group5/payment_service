CREATE TABLE user_balances (userid PRIMARY KEY, balance NUMERIC(10,2) );
INSERT INTO emails (userid, balance) VALUES  
(1,1000.00),(2,10000.00),(3,99999999.99);

CREATE TABLE contractor_balances (contractorid PRIMARY KEY, balance NUMERIC(10,2) );
INSERT INTO emails (contractorid, balance) VALUES  
(1,1000.00),(2,10000.00),(3,99999999.99);

CREATE TABLE transactions (id SERIAL PRIMARY KEY, userid INTEGER, contractorid INTEGER, cost NUMERIC(10,2), datepaid DATE);
INSERT INTO emails (userid, balance) VALUES  
(1,1,1,1000,),(1,1,1,1000,TRUE,TRUE,FALSE),(1,1,2,1000,TRUE,TRUE,FALSE),(1,1,1,1000,TRUE,TRUE,FALSE),;