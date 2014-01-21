/**
 * 
 * @author SAMSUNG
 * @name Фильм_по_дате_и_жанру
 * @public
 */ 
Select t1.НАЗВАНИЕ, t2.НАЗВАНИЕ_КИНОТЕАТРА, t3.ДАТА 
From КИНОТЕАТРЫ t2
, ФИЛЬМЫ t1
 Inner Join СЕАНСЫ t3 on t3.ФИЛЬМ = t1.ФИЛЬМЫ_ID
 Inner Join ЗАЛЫ t4 on t4.КИНОТЕАТР = t2.КИНОТЕАТРЫ_ID
 and t3.ЗАЛ = t4.ЗАЛЫ_ID
where t3.ДАТА < :date1 or ( :date2 < t3.ДАТА and t3.ДАТА < :date3) or t3.ДАТА > :date4