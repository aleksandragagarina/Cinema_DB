/**
 * 
 * @author SAMSUNG
 * @name Все_фильмы_кинотеатра
 * @public
 */ 
Select t1.НАЗВАНИЕ 
From ФИЛЬМЫ t1
 Inner Join СЕАНСЫ t2 on t1.ФИЛЬМЫ_ID = t2.ФИЛЬМ
 Inner Join ЗАЛЫ t3 on t3.КИНОТЕАТР = :cinema_ID
 and t2.ЗАЛ = t3.ЗАЛЫ_ID