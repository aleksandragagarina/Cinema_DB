/**
 * 
 * @author SAMSUNG
 * @name Залы
 */
function get_ID(txt){
    var text="";text+=txt;
    text = text.replace(/\D*/, "");
    text = text.replace(/\}]/, "");
    return text;
}
 
function refresh(){
    model.requery();
}

function btnAddActionPerformed(evt) {//GEN-FIRST:event_btnAddActionPerformed
	var name_cinema = '';
        name_cinema+="'%"+modelCombo.value+"%'";
        var add = new Добавить_зал();
        add.cinema_ID = get_ID(model.createEntity("SELECT КИНОТЕАТРЫ_ID FROM КИНОТЕАТРЫ WHERE НАЗВАНИЕ_КИНОТЕАТРА LIKE "+name_cinema));
        add.showModal(refresh); 

}//GEN-LAST:event_btnAddActionPerformed

function btnDeleteActionPerformed(evt) {//GEN-FIRST:event_btnDeleteActionPerformed
            for(var i=0;i<все_залы.length;i++){
              if(все_залы[i].НАИМЕНОВАНИЕ == инфо_залы.НАИМЕНОВАНИЕ) все_залы.rowIndex = i+1;
            }
         if(confirm("Удалить "+все_залы.НАИМЕНОВАНИЕ+"?")){           
            все_залы.deleteRow();
            model.save(refresh);
        }
}//GEN-LAST:event_btnDeleteActionPerformed

function modelComboOnRender(evt) {//GEN-FIRST:event_modelComboOnRender
	//label3.text = evt.cell.display;
    //var name_cin = "";
       // name_cin+="'%"+evt.cell.display+"%'"; 
   for(var i=0;i<все_кинотеатры.length;i++){
      if(все_кинотеатры[i].НАЗВАНИЕ_КИНОТЕАТРА == evt.cell.display) {
          инфо_залы.params.cinema_ID = все_кинотеатры[i].КИНОТЕАТРЫ_ID;
      }
  }
//инфо_залы.params.cinema_ID = get_ID(model.createEntity("SELECT КИНОТЕАТРЫ_ID FROM КИНОТЕАТРЫ WHERE НАЗВАНИЕ_КИНОТЕАТРА LIKE "+name_cin));
    model.execute();
   //return true;      
}//GEN-LAST:event_modelComboOnRender

function btnNextActionPerformed(evt) {//GEN-FIRST:event_btnNextActionPerformed
	инфо_залы.next();
        if(инфо_залы.eof()) инфо_залы.prev();
}//GEN-LAST:event_btnNextActionPerformed

function btnPrevActionPerformed(evt) {//GEN-FIRST:event_btnPrevActionPerformed
	инфо_залы.prev();
        if(инфо_залы.bof()) инфо_залы.next();
}//GEN-LAST:event_btnPrevActionPerformed

function btnBackActionPerformed(evt) {//GEN-FIRST:event_btnBackActionPerformed
	close();
}//GEN-LAST:event_btnBackActionPerformed
