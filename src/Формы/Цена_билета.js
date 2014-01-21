/**
 * 
 * @author SAMSUNG
 * @name Цена_билета
 */

//сеансы_по_дате_и_кинотеатру.params.dayPrev = new Date();
//сеансы_по_дате_и_кинотеатру.params.dayNext = new Date();

function modelComboOnRender(evt) {//GEN-FIRST:event_modelComboOnRender
	/*for(var i=0;i<все_кинотеатры.length;i++){
            if(все_кинотеатры[i].НАЗВАНИЕ_КИНОТЕАТРА == evt.cell.display){ 
                сеансы_по_дате_и_кинотеатру.params.cinema_ID = все_кинотеатры[i].КИНОТЕАТРЫ_ID;
            }
        }*/
}//GEN-LAST:event_modelComboOnRender
var kateg=0;
var k=0;
function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	for(var i=0;i<все_кинотеатры.length;i++){
            if(все_кинотеатры[i].НАЗВАНИЕ_КИНОТЕАТРА == modelCombo.value){ 
                сеансы_по_дате_и_кинотеатру.params.cinema_ID = все_кинотеатры[i].КИНОТЕАТРЫ_ID;
            }//получаем ID кинотеатра
        }
    if(year.value && month.value && day.value){
            сеансы_по_дате_и_кинотеатру.params.dayPrev = new Date(year.value,month.value-1,day.value-1,23,59);
            сеансы_по_дате_и_кинотеатру.params.dayNext = new Date(year.value,month.value-1,day.value+1,0,0);
           model.execute();
        if(сеансы_по_дате_и_кинотеатру.ДАТА){
            var dt = new Date(сеансы_по_дате_и_кинотеатру.ДАТА.getTime());
           if(dt){
               kateg=все_кинотеатры.КАТЕГОРИЯ;
               if(dt.getHours()<12) k=50;
                 else if(dt.getHours()<18) k=70;
                        else k=100;
               //price.value = (4-kateg)*k;
               label7.text = (4-kateg)*k+" руб."
           }
        }
        }
}//GEN-LAST:event_buttonActionPerformed

function button3ActionPerformed(evt) {//GEN-FIRST:event_button3ActionPerformed
        close();
        
}//GEN-LAST:event_button3ActionPerformed

function button4ActionPerformed(evt) {//GEN-FIRST:event_button4ActionPerformed
	var zakaz = new Заказать_билеты();
        zakaz.show();
        close();
}//GEN-LAST:event_button4ActionPerformed

function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
	сеансы_по_дате_и_кинотеатру.prev();
        if(сеансы_по_дате_и_кинотеатру.bof()) сеансы_по_дате_и_кинотеатру.next();
        var dt = new Date(сеансы_по_дате_и_кинотеатру.ДАТА.getTime());
           if(dt){
               kateg=все_кинотеатры.КАТЕГОРИЯ;
               if(dt.getHours()<12) k=50;
                 else if(dt.getHours()<18) k=70;
                        else k=100;
               label7.text = (4-kateg)*k+" руб."
           }
        
}//GEN-LAST:event_button1ActionPerformed

function button2ActionPerformed(evt) {//GEN-FIRST:event_button2ActionPerformed
	сеансы_по_дате_и_кинотеатру.next();
        if(сеансы_по_дате_и_кинотеатру.eof()) сеансы_по_дате_и_кинотеатру.prev();
        var dt = new Date(сеансы_по_дате_и_кинотеатру.ДАТА.getTime());
           if(dt){
               kateg=все_кинотеатры.КАТЕГОРИЯ;
               if(dt.getHours()<12) k=50;
                 else if(dt.getHours()<18) k=70;
                        else k=100;
               label7.text = (4-kateg)*k+" руб."
           }
}//GEN-LAST:event_button2ActionPerformed
