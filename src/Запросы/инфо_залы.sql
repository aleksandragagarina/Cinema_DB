/**
 * 
 * @author SAMSUNG
 * @name инфо_залы
 * @public
 */ 
Select НАИМЕНОВАНИЕ, ВМЕСТИМОСТЬ, КАТЕГОРИЯ 
From ЗАЛЫ
 Where :cinema_ID = ЗАЛЫ.КИНОТЕАТР