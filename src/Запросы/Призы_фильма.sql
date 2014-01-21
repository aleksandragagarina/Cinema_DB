/**
 * 
 * @author SAMSUNG
 * @name Призы_фильма_1
 * @public
 */
SELECT t2.НАЗВАНИЕ
FROM ПРИЗЫ_ФИЛЬМА t1,ПРИЗЫ t2 
WHERE (t1.ПРИЗ=t2.ПРИЗЫ_ID AND t1.ФИЛЬМ= :film_ID)