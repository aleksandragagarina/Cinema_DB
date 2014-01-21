/**
 * 
 * @author SAMSUNG
 * @name Сведения_о_кинотеатре
 */

function replacer(txt){
    var text="";text+=txt;
    text = text.replace(/\[{/, "");
    text = text.replace(/\}]/, "");
    return text;
}

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
        var ID=0;
         for(var i=0;i<все_кинотеатры.length;i++){
      if(все_кинотеатры[i].НАЗВАНИЕ_КИНОТЕАТРА == modelCombo.value) {
          ID = все_кинотеатры[i].КИНОТЕАТРЫ_ID;
      }
  }
        var res = new Информ_кинотеатр();
        res.data(ID);
        res.show();
        //close();
}//GEN-LAST:event_buttonActionPerformed

function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
	close();
}//GEN-LAST:event_button1ActionPerformed
