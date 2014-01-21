/**
 * 
 * @author SAMSUNG
 * @name Сеансы_по_дате_и_кинотеатру
 * @public
 */ 
Select t1.ДАТА, t2.НАЗВАНИЕ 
From СЕАНСЫ t1
 Inner Join ЗАЛЫ on t1.ЗАЛ = ЗАЛЫ.ЗАЛЫ_ID
 Inner Join КИНОТЕАТРЫ t on ЗАЛЫ.КИНОТЕАТР = t.КИНОТЕАТРЫ_ID
 and t.КИНОТЕАТРЫ_ID = :cinema_ID
 Inner Join ФИЛЬМЫ t2 on t1.ФИЛЬМ = t2.ФИЛЬМЫ_ID
 Where :dayPrev < t1.ДАТА
 and t1.ДАТА < :dayNext