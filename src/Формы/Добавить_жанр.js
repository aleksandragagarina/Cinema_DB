/**
 * 
 * @author SAMSUNG
 * @name Добавить_жанр
 */

function btnAddActionPerformed(evt) {//GEN-FIRST:event_btnAddActionPerformed
	var janr = '';
        label.text= film_ID;
        if(textField.text){
          janr+="'%"+textField.text+"%'";
          var ID = model.createEntity('SELECT ЖАНР_ID from ЖАНР where НАЗВАНИЕ like'+janr);
          if(ID=="[]"){
            все_жанры.insert();
            все_жанры.НАЗВАНИЕ = textField.text;
          }else 
              for(var i=0;i<все_жанры.length;i++) 
                  if(все_жанры[i].НАЗВАНИЕ == textField.text) все_жанры.rowIndex = i+1;
          все_жанры_фильмов.insert();
          все_жанры_фильмов.ЖАНР = все_жанры.ЖАНР_ID;
          все_жанры_фильмов.ФИЛЬМ = film_ID;
          model.save();
          close(все_жанры.ЖАНР_ID);
        }
}//GEN-LAST:event_btnAddActionPerformed
