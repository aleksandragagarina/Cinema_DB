/**
 * 
 * @author SAMSUNG
 * @name Сеансы_на_фильм
 * @public
 */ 
Select t1.НАЗВАНИЕ, t2.ДАТА, t2.СВОБ_МЕСТ 
From Фильмы t1
 Inner Join Сеансы t2 on (t2.ЗАЛ = :zal_ID
 and ФИЛЬМЫ_ID = t2.ФИЛЬМ)
 and t2.ФИЛЬМ = t1.ФИЛЬМЫ_ID