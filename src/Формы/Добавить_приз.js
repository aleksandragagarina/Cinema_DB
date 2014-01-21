/**
 * 
 * @author SAMSUNG
 * @name Добавить_приз
 */

function btnAddActionPerformed(evt) {//GEN-FIRST:event_btnAddActionPerformed
	var priz = '';
        if(textField.text){
          priz+="'%"+textField.text+"%'";
          var ID = model.createEntity('SELECT ПРИЗЫ_ID from ПРИЗЫ where НАЗВАНИЕ like'+priz);
          if(ID=="[]"){
            все_призы.insert();
            все_призы.НАЗВАНИЕ = textField.text;
          }else 
              for(var i=0;i<все_призы.length;i++) 
                  if(все_призы[i].НАЗВАНИЕ == textField.text) все_призы.rowIndex = i+1;
          все_призы_фильмов.insert();
          все_призы_фильмов.ПРИЗ = все_призы.ПРИЗЫ_ID;
          все_призы_фильмов.ФИЛЬМ = film_ID;
          model.save();
          close(все_призы.ПРИЗЫ_ID);
        }
}//GEN-LAST:event_btnAddActionPerformed
