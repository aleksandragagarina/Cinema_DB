/**
 * 
 * @author SAMSUNG
 * @name Актеры_фильма_1
 * @public
 */
SELECT t2.ФАМИЛИЯ,t2.ИМЯ
FROM УЧАСТИЕ t1,АКТЕРЫ t2 
WHERE (t1.АКТЕР=t2.АКТЕРЫ_ID AND t1.ФИЛЬМ= :film_ID)