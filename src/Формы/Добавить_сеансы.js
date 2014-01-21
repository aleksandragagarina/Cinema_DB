/**
 * 
 * @author SAMSUNG
 * @name Добавить_сеансы
 */
function get_ID(txt){
    var text="";text+=txt;
    text = text.replace(/\D*/, "");
    text = text.replace(/\}]/, "");
    return text;
}

function modelComboOnRender(evt) {//GEN-FIRST:event_modelComboOnRender
	var name_cinema = '';
        name_cinema+="'%"+evt.cell.display+"%'";
        for(var i=0;i<все_кинотеатры.length;i++){
      if(все_кинотеатры[i].НАЗВАНИЕ_КИНОТЕАТРА == evt.cell.display) {
          название_зала.params.Cinema_ID = все_кинотеатры[i].КИНОТЕАТРЫ_ID;
      }
  }
        //название_зала.params.Cinema_ID = get_ID(model.createEntity("select КИНОТЕАТРЫ_ID from КИНОТЕАТРЫ where НАЗВАНИЕ_КИНОТЕАТРА LIKE"+name_cinema));       
        model.execute();
}//GEN-LAST:event_modelComboOnRender

//var a = new DatesUtils();

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	//if(formattedField.value&&formattedField1.value&&formattedField2.value&&formattedField3.value&&formattedField4.value){
    var zal_name = '';
            var film_name = '';
            //label.text = modelDate.value;
            zal_name+="'"+modelCombo1.value+"'";
            film_name+="'"+modelCombo2.value+"'";
            все_сеансы.insert();
            for(var i=0;i<все_залы.length;i++){
      if(все_залы[i].НАИМЕНОВАНИЕ == modelCombo1.value)
          все_сеансы.ЗАЛ = все_залы[i].ЗАЛЫ_ID;
  }
            //все_сеансы.ЗАЛ = get_ID(model.createEntity("select ЗАЛЫ_ID from ЗАЛЫ where НАИМЕНОВАНИЕ like "+zal_name));
         for(var i=0;i<все_фильмы.length;i++){
      if(все_фильмы[i].НАЗВАНИЕ == modelCombo2.value) {
          все_сеансы.ФИЛЬМ = все_фильмы[i].ФИЛЬМЫ_ID;
      }
  }   
    //все_сеансы.ФИЛЬМ = get_ID(model.createEntity("select ФИЛЬМЫ_ID from ФИЛЬМЫ where НАЗВАНИЕ like "+film_name));
            //все_сеансы.ДАТА = modelDate.value;
            var dt = new Date();
            все_сеансы.ДАТА = new Date(formattedField2.value,formattedField1.value-1,formattedField.value, formattedField3.value, formattedField4.value);
            //все_сеансы.СВОБ_МЕСТ = get_ID(model.createEntity("select ВМЕСТИМОСТЬ from ЗАЛЫ where НАИМЕНОВАНИЕ like "+zal_name));
            for(var i=0;i<все_залы.length;i++){
                if(все_залы[i].НАИМЕНОВАНИЕ == modelCombo1.value) {все_сеансы.СВОБ_МЕСТ = все_залы[i].ВМЕСТИМОСТЬ;break;}
            }
            model.save();
            //close();
        //}
}//GEN-LAST:event_buttonActionPerformed

function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
    close();
}//GEN-LAST:event_button1ActionPerformed
