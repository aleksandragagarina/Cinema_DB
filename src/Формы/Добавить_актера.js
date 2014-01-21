/**
 * 
 * @author SAMSUNG
 * @name Добавить_актера
 */

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	var actor_surname = '';
        var actor_name = '';
        if(textField.text && textField1.text){
          actor_surname+="'%"+textField.text+"%'";
          actor_name+="'%"+textField1.text+"%'";
          var ID = model.createEntity('SELECT АКТЕРЫ_ID from АКТЕРЫ where ФАМИЛИЯ like'+actor_surname+' and ИМЯ like'+actor_name);
          if(ID=="[]"){
            все_актеры.insert();
            все_актеры.ФАМИЛИЯ = textField.text;
            все_актеры.ИМЯ = textField1.text;
          }else 
          for(var i=0;i<все_актеры.length;i++) 
             if(все_актеры[i].ФАМИЛИЯ == textField.text && все_актеры[i].ИМЯ == textField1.text)
                все_актеры.rowIndex = i+1;
          все_актеры_фильмов.insert();
          все_актеры_фильмов.АКТЕР = все_актеры.АКТЕРЫ_ID;
          все_актеры_фильмов.ФИЛЬМ = film_ID;
          model.save();
          close(все_актеры.АКТЕРЫ_ID);
        }
}//GEN-LAST:event_buttonActionPerformed
