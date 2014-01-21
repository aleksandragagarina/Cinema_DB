/**
 * 
 * @author SAMSUNG
 * @name Сведения_о_фильме
 */
function get_ID(txt){
    var text="";text+=txt;
    text = text.replace(/\D*/, "");
    text = text.replace(/\}]/, "");
    return text;
}

function btnShowActionPerformed(evt) {//GEN-FIRST:event_btnShowActionPerformed
	var name = '';
        name+="'%"+modelCombo.value+"%'";
        var add = new Инфо_фильм();
        add.data(get_ID(model.createEntity("SELECT ФИЛЬМЫ_ID FROM ФИЛЬМЫ WHERE НАЗВАНИЕ LIKE "+name)));
        add.show();
        
}//GEN-LAST:event_btnShowActionPerformed

function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
	close();
}//GEN-LAST:event_button1ActionPerformed
