/**
 * 
 * @author SAMSUNG
 * @name Все_кинотеатры
 */
function refresh(){
    model.requery();
}

function get_ID(txt){
    var text="";text+=txt;
    text = text.replace(/\D*/, "");
    text = text.replace(/\}]/, "");
    return text;
}

function button3ActionPerformed(evt) {//GEN-FIRST:event_button3ActionPerformed
	кинотеатры.next();//передвижение указателя на след запись запроса КИНОТЕАТРЫ
        if(кинотеатры.eof()) кинотеатры.prev();//если запись последняя - возвращаемся назад
}//GEN-LAST:event_button3ActionPerformed

function button2ActionPerformed(evt) {//GEN-FIRST:event_button2ActionPerformed
	кинотеатры.prev();//передвижение указателя на пред запись запроса КИНОТЕАТРЫ
        if(кинотеатры.bof()) кинотеатры.next();
}//GEN-LAST:event_button2ActionPerformed

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	var add = new Добавить_кинотеатр(); 
        add.showModal(refresh);
}//GEN-LAST:event_buttonActionPerformed

function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
	if(confirm("Удалить "+кинотеатры.НАЗВАНИЕ_КИНОТЕАТРА+"?")){           
            кинотеатры.deleteRow();
            model.save(refresh);
        }
}//GEN-LAST:event_button1ActionPerformed

function button5ActionPerformed(evt) {//GEN-FIRST:event_button5ActionPerformed
var name_cinema='';
var ID = 0;
    name_cinema += "'%"+кинотеатры.НАЗВАНИЕ_КИНОТЕАТРА+"%'";
   var edit = new Добавить_кинотеатр();
   /*    for(var i =0;i<все_кинотеатры.length;i++){
        if(все_кинотеатры[i].НАЗВАНИЕ_КИНОТЕАТРА = кинотеатры.НАЗВАНИЕ_КИНОТЕАТРА) 
              ID = все_кинотеатры[i].КИНОТЕАТРЫ_ID;
    }
    edit.data(ID);*/
        edit.data(get_ID(model.createEntity("SELECT КИНОТЕАТРЫ_ID FROM КИНОТЕАТРЫ WHERE НАЗВАНИЕ_КИНОТЕАТРА LIKE "+name_cinema)));
        edit.showModal(refresh);
}//GEN-LAST:event_button5ActionPerformed

function button4ActionPerformed(evt) {//GEN-FIRST:event_button4ActionPerformed
	close();
}//GEN-LAST:event_button4ActionPerformed
