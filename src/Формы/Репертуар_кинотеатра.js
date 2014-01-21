/**
 * 
 * @author SAMSUNG
 * @name Репертуар_кинотеатра
 */
function data(ID){
название_кинотеатра1.params.cinema_ID = ID;
все_фильмы_кинотеатра.params.cinema_ID = ID;
label1.text = "\""+название_кинотеатра1.НАЗВАНИЕ_КИНОТЕАТРА+"\"";
model.execute();
}
function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	close();
}//GEN-LAST:event_buttonActionPerformed
