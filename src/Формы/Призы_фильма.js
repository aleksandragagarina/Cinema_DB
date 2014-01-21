/**
 * 
 * @author SAMSUNG
 * @name Призы_фильма
 */
 function refresh(){
    model.requery();
} 
//призы_фильма_1.params.film_ID = название_фильма.params.film_ID = filmID=138654223753272;//передается
//призы_фильма_1.params.film_ID =filmID;
//label1.text ="\""+название_фильма.НАЗВАНИЕ+"\"";

 function data(ID){
   призы_фильма_1.params.film_ID = название_фильма.params.film_ID = filmID=ID;
   label1.text ="\""+название_фильма.НАЗВАНИЕ+"\"";
   model.execute();
}

function btnAddActionPerformed(evt) {//GEN-FIRST:event_btnAddActionPerformed
	var add = new Добавить_приз();
        add.film_ID = filmID;
        add.showModal(refresh);
}//GEN-LAST:event_btnAddActionPerformed

function btnPrevActionPerformed(evt) {//GEN-FIRST:event_btnPrevActionPerformed
	призы_фильма_1.prev();
        if(призы_фильма_1.bof()) призы_фильма_1.next();
}//GEN-LAST:event_btnPrevActionPerformed

function btnNextActionPerformed(evt) {//GEN-FIRST:event_btnNextActionPerformed
	призы_фильма_1.next();
        if(призы_фильма_1.eof()) призы_фильма_1.prev();
}//GEN-LAST:event_btnNextActionPerformed

function btnDeleteActionPerformed(evt) {//GEN-FIRST:event_btnDeleteActionPerformed
	for(var i=0;i<все_призы.length;i++){
              if(все_призы[i].НАЗВАНИЕ == призы_фильма_1.НАЗВАНИЕ) все_призы.rowIndex = i+1;
            }
         for(var i=0;i<все_призы_фильмов.length;i++){
              if(все_призы_фильмов[i].ЖАНР == все_призы.ЖАНР_ID) все_призы_фильмов.rowIndex = i+1;
            }
         if(confirm("Удалить "+все_призы.НАЗВАНИЕ+"?")){           
            //все_призы.deleteRow();
            все_призы_фильмов.deleteRow();
            model.save(refresh);
         }
}//GEN-LAST:event_btnDeleteActionPerformed

function btnBackActionPerformed(evt) {//GEN-FIRST:event_btnBackActionPerformed
	close(все_призы.ПРИЗЫ_ID);
}//GEN-LAST:event_btnBackActionPerformed
