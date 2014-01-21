/**
 * 
 * @author SAMSUNG
 * @name Инфо_фильм
 */
var miss = true;
var first = true;

function query_janr(){
    miss = true;//если нет наград или жанров
    first = true;//если первый жанр,пишем без запятой
    label12.text = "";
    //first = true;//если первый жанр,пишем без запятой
    for(var i=0;i<все_жанры_фильмов.length;i++)//вывод жанров фильма
        if(все_жанры_фильмов[i].ФИЛЬМ == film_ID){ 
            miss = false;
            for(var j=0;j<все_жанры.length;j++)
               if(все_жанры_фильмов[i].ЖАНР == все_жанры[j].ЖАНР_ID){ 
                 if(!first)label12.text+=",";
                 label12.text+=все_жанры[j].НАЗВАНИЕ;
                 first=false;
               }
        }
        if (miss) label12.text = "-";
}

function query_actors(){
    miss = true;//если нет наград или жанров
    first = true;//если первый жанр,пишем без запятой
    label13.text = "";
    //first = true;//если первый жанр,пишем без запятой
    for(var i=0;i<все_актеры_фильмов.length;i++)//вывод актеров фильма
        if(все_актеры_фильмов[i].ФИЛЬМ == film_ID){ 
            miss = false;
            for(var j=0;j<все_актеры.length;j++)
               if(все_актеры_фильмов[i].АКТЕР == все_актеры[j].АКТЕРЫ_ID){ 
                 if(!first)label13.text+=",";
                 label13.text+=все_актеры[j].ИМЯ+" "+все_актеры[j].ФАМИЛИЯ;
                 first=false;
               }
        }
        if (miss) label13.text = "-";
}

function query_prizes(){
     label16.text = "";
    miss = true;//если нет наград или жанров
    first = true;//если первый жанр,пишем без запятой
    for(var i=0;i<все_призы_фильмов.length;i++)//вывод призов фильма
       if(все_призы_фильмов[i].ФИЛЬМ == film_ID) { 
          miss = false;
          for(var j=0;j<все_призы.length;j++)
              if(все_призы_фильмов[i].ПРИЗ == все_призы[j].ПРИЗЫ_ID){ 
                 if(!first)label16.text+=",";
                 label16.text+=все_призы[j].НАЗВАНИЕ;
                 first=false;
              }
       }
       if(miss) label16.text = "-";//если пусто - прочерк
}

function data(ID){
film_ID=ID;
for(var i=0;i<все_фильмы.length;i++)
    if (film_ID == все_фильмы[i].ФИЛЬМЫ_ID){
        label8.text = "\""+все_фильмы[i].НАЗВАНИЕ+"\"";
        label9.text = все_фильмы[i].РЕЖИССЕР;
        label10.text = все_фильмы[i].ОПЕРАТОР;
        label11.text = все_фильмы[i].ПРОИЗВОДСТВО;
        query_janr(); 
        query_actors();
        label14.text = все_фильмы[i].ПРОДОЛЖИТЕЛЬНОСТЬ+" мин.";
        query_prizes();
        label18.text = все_фильмы[i].ПРОКАТ_СТОИМОСТЬ+" $";
        break;
    }
}
function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	close();
}//GEN-LAST:event_buttonActionPerformed
