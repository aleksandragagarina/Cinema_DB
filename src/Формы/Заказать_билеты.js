/**
 * 
 * @author SAMSUNG
 * @name Заказать_билеты
 */
function get_ID(txt){
    var text="";text+=txt;
    text = text.replace(/\D*/, "");
    text = text.replace(/\}]/, "");
    return text;
}
//обрабатывает появление значений в справочнике
function modelComboOnRender(evt) {//GEN-FIRST:event_modelComboOnRender
	var name_cinema = '';
        if(evt.cell.display){
        name_cinema+="'"+evt.cell.display+"'";
        for(var i=0;i<все_кинотеатры.length;i++){
            if(все_кинотеатры[i].НАЗВАНИЕ_КИНОТЕАТРА == evt.cell.display) 
                название_зала.params.Cinema_ID = все_кинотеатры[i].КИНОТЕАТРЫ_ID;
        }
        //название_зала.params.Cinema_ID = get_ID(model.createEntity("select КИНОТЕАТРЫ_ID from КИНОТЕАТРЫ where НАЗВАНИЕ_КИНОТЕАТРА LIKE"+name_cinema));       
        model.execute();
        }
}//GEN-LAST:event_modelComboOnRender

function modelCombo1OnRender(evt) {//GEN-FIRST:event_modelCombo1OnRender
	var name_zal = '';
        if(evt.cell.display){
        name_zal+="'%"+evt.cell.display+"%'";
        for(var i=0;i<все_залы.length;i++){
            if(все_залы[i].НАИМЕНОВАНИЕ = evt.cell.display)
                сеансы_на_фильм.params.zal_ID =все_залы[i].ЗАЛЫ_ID;
        }
        //сеансы_на_фильм.params.zal_ID = get_ID(model.createEntity("select ЗАЛЫ_ID from ЗАЛЫ where НАИМЕНОВАНИЕ LIKE"+name_zal));       
        model.execute();
    }
}//GEN-LAST:event_modelCombo1OnRender

function button3ActionPerformed(evt) {//GEN-FIRST:event_button3ActionPerformed
	сеансы_на_фильм.next();
        if(сеансы_на_фильм.eof()) сеансы_на_фильм.prev();
        //label5.text = get_ID(model.createEntity("select СВОБ_МЕСТА from СЕАНСЫ where (ЗАЛ="+сеансы_на_фильм.params.zal_ID+" and ДАТА = "+сеансы_на_фильм.ДАТА+")")); 
}//GEN-LAST:event_button3ActionPerformed

function button2ActionPerformed(evt) {//GEN-FIRST:event_button2ActionPerformed
	сеансы_на_фильм.prev();
        if(сеансы_на_фильм.bof()) сеансы_на_фильм.next();
}//GEN-LAST:event_button2ActionPerformed

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	if (formattedField.value){
            if(сеансы_на_фильм.СВОБ_МЕСТ>=formattedField.value){
              сеансы_на_фильм.СВОБ_МЕСТ-=formattedField.value;
              formattedField.value=null;
            }
            model.save();
            model.execute();
        }
}//GEN-LAST:event_buttonActionPerformed

function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
	var price = new Цена_билета();
        price.show();
        close();
}//GEN-LAST:event_button1ActionPerformed
