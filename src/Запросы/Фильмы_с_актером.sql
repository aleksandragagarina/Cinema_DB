/**
 * 
 * @author SAMSUNG
 * @name Фильмы_с_актером
 * @public
 */ 
Select t1.НАЗВАНИЕ, t2.НАЗВАНИЕ_КИНОТЕАТРА, t3.ДАТА 
From ФИЛЬМЫ t1
, КИНОТЕАТРЫ t2
 Inner Join УЧАСТИЕ t4 on :Actor_ID = t4.АКТЕР
 and t4.ФИЛЬМ = t1.ФИЛЬМЫ_ID
 Inner Join СЕАНСЫ t3 on t1.ФИЛЬМЫ_ID = t3.ФИЛЬМ
 Inner Join ЗАЛЫ on ЗАЛЫ.КИНОТЕАТР = t2.КИНОТЕАТРЫ_ID
 and t3.ЗАЛ = ЗАЛЫ.ЗАЛЫ_ID