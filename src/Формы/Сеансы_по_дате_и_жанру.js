/**
 * 
 * @author SAMSUNG
 * @name Сеансы_по_дате_и_жанру
 */
var date1 = new (2020,0,1,0,0);
var date2 = new Date();
var date3 = new Date(2020,0,1,0,0);
var date4 = new Date();
function radioButtonMouseClicked(evt) {//GEN-FIRST:event_radioButtonMouseClicked
	if(formattedField.value && formattedField1.value && formattedField2.value){
           date1 = new Date(formattedField2.value,formattedField1.value-1,formattedField.value,12,0);            
        }
}//GEN-LAST:event_radioButtonMouseClicked
