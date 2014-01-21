/**
 * 
 * @author SAMSUNG
 * @name Число_мест_на_сеанс
 */
function get_ID(txt){
    var text="";text+=txt;
    text = text.replace(/\D*/, "");
    text = text.replace(/\}]/, "");
    return text;
}

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	close();
}//GEN-LAST:event_buttonActionPerformed

function modelComboOnRender(evt) {//GEN-FIRST:event_modelComboOnRender
	for (var i=0;i<все_кинотеатры.length;i++){
if(все_кинотеатры[i].НАЗВАНИЕ_КИНОТЕАТРА == evt.cell.display)
количество_мест_на_сеанс.params.cinema_ID = все_кинотеатры[i].КИНОТЕАТРЫ_ID;
}model.execute();
}//GEN-LAST:event_modelComboOnRender
