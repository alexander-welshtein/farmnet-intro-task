INSERT INTO customer
	(name, email)
VALUES
	('Malak Kline', 'malakkline@gmail.com'),
	('Adnaan Hawkins', 'adnaanhawkins@gmail.com'),
	('Leoni Cantu', 'leonicantu@gmail.com'),
	('Seamus Cardenas', 'seamuscardenas@gmail.com'),
	('Ziva Donaldson', 'zivadonaldson@gmail.com')

INSERT INTO good
	(name, cost)
VALUES
	('Ибупрофен таб. п/пл. об. 400мг №20', 43.25),
	('Африн фл.(спрей наз.) 0,05% 15мл №1', 183.89),
	('Стоматофит фл.(экстр. жидк.) 50мл', 149.35),
	('Винпоцетин таб. 5мг №50', 38.07)

INSERT INTO order_header
	(customer_id, time, city, address)
VALUES
	(1, now(),  'Moscow', 'N/A'),
	(2, now(),  'Moscow', 'N/A'),
	(3, now(),  'Moscow', 'N/A')

INSERT INTO order_content
	(order_header_id, good_id, number)
VALUES
	(1, 1, 2),
	(2, 2, 3),
	(3, 3, 1),
	(3, 2, 2)