Select c.name as Customers 
from customers c
left join orders o
on c.id = o.customerId
where o.customerId is null