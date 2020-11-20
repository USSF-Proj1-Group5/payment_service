CREATE TABLE user_balances (userid PRIMARY KEY, balance NUMERIC(10,2) );
INSERT INTO user_balances (userid, balance) VALUES  
(1,1000.00),(2,10000.00),(3,99999999.99);

CREATE TABLE contractor_balances (contractorid PRIMARY KEY, balance NUMERIC(10,2) );
INSERT INTO contractor_balances (contractorid, balance) VALUES  
(1,1000.00),(2,10000.00),(3,99999999.99);

CREATE TABLE transactions (id SERIAL PRIMARY KEY, userid INTEGER, contractorid INTEGER, cost NUMERIC(10,2), datepaid TIMESTAMP);
INSERT INTO transactions (id, userid, contractorid, cost, datepaid) VALUES  
(1,1,1,1000,CURRENT_TIMESTAMP),(1,1,1,1000,TRUE,TRUE,FALSE),(1,1,2,1000,TRUE,TRUE,FALSE),(1,1,1,1000,TRUE,TRUE,FALSE),;