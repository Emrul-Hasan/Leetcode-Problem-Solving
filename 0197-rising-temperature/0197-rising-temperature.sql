SELECT id as Id
FROM Weather w1
WHERE temperature > (
    SELECT temperature
    FROM Weather w2
    WHERE w2.recordDate = DATEADD(DAY, -1, w1.recordDate)
);
