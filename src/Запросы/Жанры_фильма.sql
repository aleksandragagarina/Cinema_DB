/**
 * 
 * @author SAMSUNG
 * @name Жанры_фильма_1
 * @public
 */
SELECT t2.НАЗВАНИЕ
FROM ЖАНР_ФИЛЬМА t1,ЖАНР t2 
WHERE (t1.ЖАНР=t2.ЖАНР_ID AND t1.ФИЛЬМ= :film_ID)