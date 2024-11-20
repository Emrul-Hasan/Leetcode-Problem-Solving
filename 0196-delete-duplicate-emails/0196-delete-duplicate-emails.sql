DELETE FROM Person
WHERE id NOT IN (
    SELECT Min(id)
    FROM Person
    GROUP BY email
);

