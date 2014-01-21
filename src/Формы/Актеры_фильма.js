/**
 * 
 * @author SAMSUNG
 * @name Актеры_фильма
 */
 function refresh(){
    model.requery();
}

function data(ID){
   актеры_фильма_1.params.film_ID = название_фильма.params.film_ID = filmID=ID;
   label1.text ="\""+название_фильма.НАЗВАНИЕ+"\"";
   model.execute();
}

function button3ActionPerformed(evt) {//GEN-FIRST:event_button3ActionPerformed
	актеры_фильма_1.prev();
        if(актеры_фильма_1.bof()) актеры_фильма_1.next();
}//GEN-LAST:event_button3ActionPerformed

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	var add = new Добавить_актера();
        add.film_ID = filmID;
        add.showModal(refresh);
}//GEN-LAST:event_buttonActionPerformed

function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
	for(var i=0;i<все_актеры.length;i++){
              if(все_актеры[i].ФАМИЛИЯ == актеры_фильма_1.ФАМИЛИЯ && все_актеры[i].ИМЯ == актеры_фильма_1.ИМЯ)
                 все_актеры.rowIndex = i+1;
            }
         for(var i=0;i<все_актеры_фильмов.length;i++){
              if(все_актеры_фильмов[i].АКТЕР == все_актеры.АКТЕРЫ_ID) все_актеры_фильмов.rowIndex = i+1;
            }
         if(confirm("Удалить "+все_актеры.ФАМИЛИЯ+" "+все_актеры.ИМЯ+"?")){           
            //все_актеры.deleteRow();
            все_актеры_фильмов.deleteRow();
            model.save(refresh);
         }
}//GEN-LAST:event_button1ActionPerformed

function button2ActionPerformed(evt) {//GEN-FIRST:event_button2ActionPerformed
	актеры_фильма_1.next();
        if(актеры_фильма_1.eof()) актеры_фильма_1.prev();
}//GEN-LAST:event_button2ActionPerformed

function button4ActionPerformed(evt) {//GEN-FIRST:event_button4ActionPerformed
	close(все_актеры.АКТЕРЫ_ID);
}//GEN-LAST:event_button4ActionPerformed
