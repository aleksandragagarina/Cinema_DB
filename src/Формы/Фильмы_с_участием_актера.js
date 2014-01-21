/**
 * 
 * @author SAMSUNG
 * @name Фильмы_с_участием_актера
 */

function get_surname(txt){
    var text="";text+=txt;
    //(/.+?(?= )/.exec(text) + "!");
    var t = text.slice(0, text.indexOf(' '));//получить строку до пробела
   
    return t;
}

function get_name(txt){
    var text="";text+=txt;
    //(/.+?(?= )/.exec(text) + "!");
    var t = text.slice( text.indexOf(' ')+1,text.length);//получить строку до пробела
   
    return t;
}

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	close();
}//GEN-LAST:event_buttonActionPerformed

function modelComboOnRender(evt) {//GEN-FIRST:event_modelComboOnRender
	var name_cinema = '';
        name_cinema+="'%"+evt.cell.display+"%'";
        // && все_актеры[i].ИМЯ == get_name(evt.cell.display)
        for(var i=0;i<все_актеры.length;i++){
      if(все_актеры[i].ФАМИЛИЯ == get_surname(evt.cell.display) && все_актеры[i].ИМЯ == get_name(evt.cell.display)) {
          фильмы_с_актером.params.Actor_ID = все_актеры[i].АКТЕРЫ_ID;
      }
  }
        model.execute();
}//GEN-LAST:event_modelComboOnRender
