/**
 * 
 * @author SAMSUNG
 * @name Добавить_зал
 */

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
        var name_zal = '';
        name_zal+="'"+textField.text+"'";
        var category = '';
        category+="'"+textField1.text+"'";
        if (textField.text && formattedField.value){             
                все_залы.insert();
                все_залы.НАИМЕНОВАНИЕ = textField.text;
                все_залы.КИНОТЕАТР = cinema_ID;
                все_залы.ВМЕСТИМОСТЬ = formattedField.value;
                все_залы.КАТЕГОРИЯ = textField1.text;
                model.save();
                close(все_залы.ЗАЛЫ_ID);
        }
}//GEN-LAST:event_buttonActionPerformed

function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
	close();
}//GEN-LAST:event_button1ActionPerformed

function button2ActionPerformed(evt) {//GEN-FIRST:event_button2ActionPerformed
	var zal = new Залы();
        zal.show();
        close();
}//GEN-LAST:event_button2ActionPerformed
