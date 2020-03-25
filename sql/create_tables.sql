-- customer

CREATE TABLE customer (
	customer_id SERIAL PRIMARY KEY, 	-- Id
	name VARCHAR(150) NOT NULL,			-- Customer name
	email VARCHAR(100)					-- Customer email
);

-- good

CREATE TABLE good (
	good_id SERIAL PRIMARY KEY,		-- Id
	name VARCHAR(150) NOT NULL,		-- Good name
	cost NUMERIC(15, 2) NOT NULL	-- Good cost
);

-- order header

CREATE TABLE order_header (
	order_header_id SERIAL PRIMARY KEY,									-- Id
	customer_id INTEGER REFERENCES customer(customer_id) NOT NULL,		-- Customer id
	time TIMESTAMPTZ NOT NULL,											-- Order time
	city VARCHAR(100) NOT NULL,											-- Order city
	address VARCHAR(150) NOT NULL										-- Order address
);

-- order_content

CREATE TABLE order_content (
	order_content_id SERIAL PRIMARY KEY,											-- Id
	order_header_id INTEGER REFERENCES order_header(order_header_id) NOT NULL,		-- Order header id
	good_id INTEGER REFERENCES good(good_id) NOT NULL,								-- Good id
	number INTEGER NOT NULL															-- Number of goods
);