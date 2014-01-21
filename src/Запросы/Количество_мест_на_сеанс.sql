/**
 * 
 * @author SAMSUNG
 * @name Количество_мест_на_сеанс
 * @public
 */ 
Select t1.НАЗВАНИЕ, t2.ДАТА, t2.СВОБ_МЕСТ 
From ФИЛЬМЫ t1
, ЗАЛЫ t3
 Inner Join СЕАНСЫ t2 on t2.ФИЛЬМ = t1.ФИЛЬМЫ_ID
 and t2.ЗАЛ = t3.ЗАЛЫ_ID
 Where :cinema_ID = t3.КИНОТЕАТР