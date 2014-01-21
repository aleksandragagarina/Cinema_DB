/**
 * 
 * @author SAMSUNG
 * @name Все_фильмы_1
 */
function refresh(){
    model.requery();
}
function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	var add = new Фильмы();
        add.showModal(refresh);
}//GEN-LAST:event_buttonActionPerformed

function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
	var redact = new Фильмы();
        redact.data(все_фильмы.ФИЛЬМЫ_ID);
        redact.showModal(refresh);
}//GEN-LAST:event_button1ActionPerformed

function button2ActionPerformed(evt) {//GEN-FIRST:event_button2ActionPerformed
	 if(confirm("Удалить "+все_фильмы.НАЗВАНИЕ+"?")){           
            все_фильмы.deleteRow();
            model.save(refresh);
        }
}//GEN-LAST:event_button2ActionPerformed

function button4ActionPerformed(evt) {//GEN-FIRST:event_button4ActionPerformed
	все_фильмы.prev();
        if(все_фильмы.bof()) все_фильмы.next();
}//GEN-LAST:event_button4ActionPerformed

function button5ActionPerformed(evt) {//GEN-FIRST:event_button5ActionPerformed
	все_фильмы.next();
        if(все_фильмы.eof()) все_фильмы.prev();
}//GEN-LAST:event_button5ActionPerformed

function button3ActionPerformed(evt) {//GEN-FIRST:event_button3ActionPerformed
	close();
}//GEN-LAST:event_button3ActionPerformed
