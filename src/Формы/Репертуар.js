/**
 * 
 * @author SAMSUNG
 * @name Репертуар
 */
function get_ID(txt){
    var text="";text+=txt;
    text = text.replace(/\D*/, "");
    text = text.replace(/\}]/, "");
    return text;
}

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	var name = '';
        name+="'%"+modelCombo.value+"%'";
        var add = new Репертуар_кинотеатра();
        //add.cinema_ID = get_ID(model.createEntity("select КИНОТЕАТРЫ_ID from КИНОТЕАТРЫ where название_кинотеатра like "+name));
        for(var i=0;i<все_кинотеатры.length;i++){
            if(все_кинотеатры[i].НАЗВАНИЕ_КИНОТЕАТРА == modelCombo.value){ 
                add.data(все_кинотеатры[i].КИНОТЕАТРЫ_ID);
                break;
            }
        }
       // add.data(get_ID(model.createEntity("select КИНОТЕАТРЫ_ID from КИНОТЕАТРЫ where название_кинотеатра like "+name)));
       add.show();
}//GEN-LAST:event_buttonActionPerformed

function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
	close();
}//GEN-LAST:event_button1ActionPerformed
