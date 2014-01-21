/**
 * 
 * @author SAMSUNG
 * @name Жанры_фильма
 */
 function refresh(){
    model.requery();
} 

function data(ID){
   жанры_фильма_1.params.film_ID = название_фильма.params.film_ID = filmID=ID;
   label1.text ="\""+название_фильма.НАЗВАНИЕ+"\"";
   model.execute();
}
function btnDeleteActionPerformed(evt) {//GEN-FIRST:event_btnDeleteActionPerformed
	for(var i=0;i<все_жанры.length;i++){
              if(все_жанры[i].НАЗВАНИЕ == жанры_фильма_1.НАЗВАНИЕ) все_жанры.rowIndex = i+1;
            }
         for(var i=0;i<все_жанры_фильмов.length;i++){
              if(все_жанры_фильмов[i].ЖАНР == все_жанры.ЖАНР_ID) все_жанры_фильмов.rowIndex = i+1;
            }
         if(confirm("Удалить "+все_жанры.НАЗВАНИЕ+"?")){           
            все_жанры_фильмов.deleteRow();
            model.save(refresh);
        }
}//GEN-LAST:event_btnDeleteActionPerformed

function btnAddActionPerformed(evt) {//GEN-FIRST:event_btnAddActionPerformed
        var add = new Добавить_жанр();
        add.film_ID = filmID;
        add.showModal(refresh); 
}//GEN-LAST:event_btnAddActionPerformed

function btnPrevActionPerformed(evt) {//GEN-FIRST:event_btnPrevActionPerformed
	жанры_фильма_1.prev();
        if(жанры_фильма_1.bof()) жанры_фильма_1.next();
}//GEN-LAST:event_btnPrevActionPerformed

function btnNextActionPerformed(evt) {//GEN-FIRST:event_btnNextActionPerformed
	жанры_фильма_1.next();
        if(жанры_фильма_1.eof()) жанры_фильма_1.prev();
}//GEN-LAST:event_btnNextActionPerformed

function btnBackActionPerformed(evt) {//GEN-FIRST:event_btnBackActionPerformed
	close(все_жанры.ЖАНР_ID);
}//GEN-LAST:event_btnBackActionPerformed
