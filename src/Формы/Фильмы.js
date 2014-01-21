/**
 * 
 * @author SAMSUNG
 * @name Фильмы
 */
var ID=0;
var name_film = '';
var self = this;

function get_ID(txt){
    var text="";text+=txt;
    text = text.replace(/\D*/, "");
    text = text.replace(/\}]/, "");
    return text;
}
//добавление фильма и временное сохранение
function ins(flag){
   if(!flag)все_фильмы.insert();
          все_фильмы.НАЗВАНИЕ = textField.text;
          if(formattedField1.value)все_фильмы.ПРОДОЛЖИТЕЛЬНОСТЬ = formattedField1.value;
          if(textField2.text)все_фильмы.ПРОИЗВОДСТВО = textField2.text;
          if(textField3.text)все_фильмы.РЕЖИССЕР = textField3.text;
          if(textField4.text)все_фильмы.ОПЕРАТОР = textField4.text;   
          if(formattedField.value)все_фильмы.ПРОКАТ_СТОИМОСТЬ = formattedField.value;
          model.save();
}
//получаем ID по имени
function ID_by_name(){
    name_film+="'%"+textField.text+"%'";
    for(var i =0;i<все_фильмы.length;i++){
        if(все_фильмы[i].НАЗВАНИЕ = textField.text) ID = все_фильмы[i].ФИЛЬМЫ_ID;
    }
       // ID = model.createEntity("select ФИЛЬМЫ_ID from ФИЛЬМЫ where НАЗВАНИЕ like "+name_film);
        if(!ID) ins(0); //если не существует фильма - создаем      
          else ins(1);
          for(var i =0;i<все_фильмы.length;i++){
        if(все_фильмы[i].НАЗВАНИЕ = textField.text) ID = все_фильмы[i].ФИЛЬМЫ_ID;
    }
        //ID=get_ID(model.createEntity("SELECT ФИЛЬМЫ_ID FROM ФИЛЬМЫ WHERE НАЗВАНИЕ LIKE "+name_film));
}

function refresh(){
    model.requery();
    var name_film = '';
    name_film+="'%"+textField.text+"%'";
    for(var i=0;i<все_фильмы.length;i++){
       if(все_фильмы[i].НАЗВАНИЕ == textField.text) ID=все_фильмы[i].ФИЛЬМЫ_ID;
    }
    //ID = get_ID(model.createEntity("select ФИЛЬМЫ_ID from ФИЛЬМЫ where НАЗВАНИЕ like "+name_film));
    //вывод всех полей
    for(var i=0;i<все_фильмы.length;i++)
               if(все_фильмы[i].ФИЛЬМЫ_ID == ID){
                  formattedField1.value = все_фильмы[i].ПРОДОЛЖИТЕЛЬНОСТЬ ;
                  textField2.text = все_фильмы[i].ПРОИЗВОДСТВО ;
                  textField3.text = все_фильмы[i].РЕЖИССЕР;
                  textField4.text = все_фильмы[i].ОПЕРАТОР ;   
                  formattedField.value = все_фильмы[i].ПРОКАТ_СТОИМОСТЬ;  
               }
     //вывод жанров и призов
    label9.text = "";
    var miss = true;//если нет наград или жанров
    var first = true;//если первый жанр,пишем без запятой
    for(var i=0;i<все_призы_фильмов.length;i++)//вывод призов фильма
       if(все_призы_фильмов[i].ФИЛЬМ==ID) { 
          miss = false;
          for(var j=0;j<все_призы.length;j++)
              if(все_призы_фильмов[i].ПРИЗ==все_призы[j].ПРИЗЫ_ID){ 
                 if(!first)label9.text+=",";
                 label9.text+=все_призы[j].НАЗВАНИЕ;
                 first=false;
              }
       }
    if(miss) label9.text = "-";//если пусто - прочерк
    
    miss = true;
    label8.text = "";
    first = true;//если первый жанр,пишем без запятой
    for(var i=0;i<все_жанры_фильмов.length;i++)//вывод жанров фильма
        if(все_жанры_фильмов[i].ФИЛЬМ==ID){ 
            miss = false;
            for(var j=0;j<все_жанры.length;j++)
               if(все_жанры_фильмов[i].ЖАНР==все_жанры[j].ЖАНР_ID){ 
                 if(!first)label8.text+=",";
                 label8.text+=все_жанры[j].НАЗВАНИЕ;
                 first=false;
               }
        }
        if (miss) label8.text = "-";
        
        miss = true;
    label12.text = "";
    first = true;//если первый жанр,пишем без запятой
    for(var i=0;i<все_актеры_фильмов.length;i++)//вывод актеров фильма
        if(все_актеры_фильмов[i].ФИЛЬМ==ID){ 
            miss = false;
            for(var j=0;j<все_актеры.length;j++)
               if(все_актеры_фильмов[i].АКТЕР==все_актеры[j].АКТЕРЫ_ID){ 
                 if(!first)label12.text+=",";
                 label12.text+=все_актеры[j].ИМЯ+" "+все_актеры[j].ФАМИЛИЯ;
                 first=false;
               }
        }
        if (miss) label12.text = "-";
}

function data(ID){
    for(var i=0;i<все_фильмы.length;i++){
        if(все_фильмы[i].ФИЛЬМЫ_ID = ID) textField.text = все_фильмы[i].НАЗВАНИЕ;
    }
  self.refresh();
}

function btnPrizeChangeActionPerformed(evt) {//GEN-FIRST:event_btnPrizeChangeActionPerformed
     if(textField.text){
        ID_by_name();//получаем ID по имени
        var add_prize = new Призы_фильма();
        add_prize.data(ID);
        add_prize.showModal(refresh);
      }
}//GEN-LAST:event_btnPrizeChangeActionPerformed

function btnJanrChangeActionPerformed(evt) {//GEN-FIRST:event_btnJanrChangeActionPerformed
     if(textField.text){
        ID_by_name();//получаем ID по имени
        var add_janr = new Жанры_фильма();
        add_janr.data(ID);
        add_janr.showModal(refresh);
      }
}//GEN-LAST:event_btnJanrChangeActionPerformed

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	close(все_фильмы.ФИЛЬМЫ_ID);
}//GEN-LAST:event_buttonActionPerformed

function btnSaveActionPerformed(evt) {//GEN-FIRST:event_btnSaveActionPerformed
	if(textField.text){
           name_film+="'%"+textField.text+"%'"; 
           for(var i =0;i<все_фильмы.length;i++){
        if(все_фильмы[i].НАЗВАНИЕ = textField.text) ID = все_фильмы[i].ФИЛЬМЫ_ID;
    }
           //ID = model.createEntity("select ФИЛЬМЫ_ID from ФИЛЬМЫ where НАЗВАНИЕ like "+name_film);
           if(!ID){
              все_фильмы.insert();
              все_фильмы.НАЗВАНИЕ = textField.text;
              model.save();
           }
           for(var i =0;i<все_фильмы.length;i++){
        if(все_фильмы[i].НАЗВАНИЕ = textField.text) ID = все_фильмы[i].ФИЛЬМЫ_ID;
    }
           //ID=get_ID(model.createEntity("SELECT ФИЛЬМЫ_ID FROM ФИЛЬМЫ WHERE НАЗВАНИЕ LIKE "+name_film));
           for(var i=0;i<все_фильмы.length;i++)
               if(все_фильмы[i].ФИЛЬМЫ_ID==ID){
                  все_фильмы[i].ПРОДОЛЖИТЕЛЬНОСТЬ = formattedField1.value;
                  все_фильмы[i].ПРОИЗВОДСТВО = textField2.text;
                  все_фильмы[i].РЕЖИССЕР = textField3.text;
                  все_фильмы[i].ОПЕРАТОР = textField4.text;   
                  все_фильмы[i].ПРОКАТ_СТОИМОСТЬ = formattedField.value;      
                  model.save();
                  close(все_фильмы.ФИЛЬМЫ_ID);
               }
        }
}//GEN-LAST:event_btnSaveActionPerformed

function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
	if(textField.text){
        ID_by_name();//получаем ID по имени
        var add_actor = new Актеры_фильма();
        add_actor.data(ID);
        add_actor.showModal(refresh);
      }
}//GEN-LAST:event_button1ActionPerformed
