/**
 * 
 * @author SAMSUNG
 * @name Информ_кинотеатр
 */
var self = this;
function data(ID){
  for(var i=0;i<все_кинотеатры.length;i++){
      if(все_кинотеатры[i].КИНОТЕАТРЫ_ID == ID) {
          label2.text = все_кинотеатры[i].НАЗВАНИЕ_КИНОТЕАТРА;
          label4.text = все_кинотеатры[i].АДРЕС;
          label6.text = все_кинотеатры[i].КАТЕГОРИЯ;
      }
  }
}
function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	//var cinema_info = new Сведения_о_кинотеатре();
        //cinema_info.show();
        close();
}//GEN-LAST:event_buttonActionPerformed
