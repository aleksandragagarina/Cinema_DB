/**
 * 
 * @author SAMSUNG
 * @name Добавить_кинотеатр
 */
var self = this;
function data(ID){
    for(var i=0;i<все_кинотеатры.length;i++){
        if(ID == все_кинотеатры[i].КИНОТЕАТРЫ_ID) {
            textField.text = все_кинотеатры[i].НАЗВАНИЕ_КИНОТЕАТРА;
            textField1.text = все_кинотеатры[i].АДРЕС;
            textField2.text = все_кинотеатры[i].КАТЕГОРИЯ;
        }
    }
}

function get_ID(txt){
    var text="";text+=txt;
    text = text.replace(/\D*/, "");
    text = text.replace(/\}]/, "");
    return text;
}

function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
close(все_кинотеатры.КИНОТЕАТРЫ_ID);
}//GEN-LAST:event_button1ActionPerformed

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	close(все_кинотеатры.КИНОТЕАТРЫ_ID);
}//GEN-LAST:event_buttonActionPerformed

function button3ActionPerformed(evt) {//GEN-FIRST:event_button3ActionPerformed
    if (textField.text && textField1.text){ 
        var ID=0;
        for(var i=0;i<все_кинотеатры.length;i++){
      if(все_кинотеатры[i].НАЗВАНИЕ_КИНОТЕАТРА == textField.text) {
          ID = все_кинотеатры[i].КИНОТЕАТРЫ_ID;
      }
  }
            if(!ID) все_кинотеатры.insert(); 
            все_кинотеатры.НАЗВАНИЕ_КИНОТЕАТРА = textField.text;
            все_кинотеатры.АДРЕС = textField1.text;
            все_кинотеатры.КАТЕГОРИЯ = textField2.text;
            model.save();
            close(все_кинотеатры.КИНОТЕАТРЫ_ID);
        }
}//GEN-LAST:event_button3ActionPerformed

function textField2ActionPerformed(evt) {//GEN-FIRST:event_textField2ActionPerformed
	// TODO Добавьте свой код:
}//GEN-LAST:event_textField2ActionPerformed

function btnAddZalActionPerformed(evt) {//GEN-FIRST:event_btnAddZalActionPerformed
var name_cinema = '';
name_cinema += "'%"+textField.text+"%'";
var add_zal = new Добавить_зал();
add_zal.cinema_ID = get_ID(model.createEntity("SELECT КИНОТЕАТРЫ_ID FROM КИНОТЕАТРЫ WHERE НАЗВАНИЕ_КИНОТЕАТРА LIKE "+name_cinema));
add_zal.show();
close();
}//GEN-LAST:event_btnAddZalActionPerformed
