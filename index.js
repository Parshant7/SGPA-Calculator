
var newRow = `'<tr>
          <td><button type="button" class="btn btn-dark removeRow" ><i class="fas fa-minus "></i></button></td>
          <td><input type="text" name="subName" class="form-control-sm subName"></td>
          <td><select name="grade" class="grade">
            <option value="" selected>--select--</option>
            <option value="A+" >A+</option>
            <option value="A">A</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
          </select></td>
          <td><input type="number" name="credit" class=" credit" min="1" max="4" value="4"></td>
          <td><input type="text" name="gradeValue" class="form-control-sm gradeValue" disabled></td>
          <td><input type="text" name="totalValue" class="form-control-sm totalValue" disabled></td>
        </tr>'`;


// add button
$("#addRow").click(function(){
  $('tbody').append(newRow);
  $('select').niceSelect();
  $('input[type="number"]').niceNumber();
  checkRow();
});


//remove button
$(document).on('click', '.removeRow', function() {
  $(this).parents('tr').remove();
  checkRow();
});

$('select').niceSelect();
$('input[type="number"]').niceNumber();

//grade selector                                                                                           
  $(document).on('change','.grade, .credit', function() {

    var grade = $(this).closest("tr").find(".grade").val();  // getting values
    var gradeValue = getGradeValue(grade);

    var credit = parseInt( $(this).closest("tr").find(".credit").val() ); 
    var totalValue = gradeValue * credit;

    $(this).closest("tr").find(".gradeValue").val(gradeValue); //putting values
    $(this).closest("tr").find(".totalValue").val(totalValue);

});


function getGradeValue(grade)
{
    var gradeValue = 0;
    
    switch(grade)
    {
      case 'A+':
        gradeValue = 10;
        break;

      case 'A':
        gradeValue = 9;
        break;

      case 'B+':
        gradeValue = 8;
        break;

      case 'B':
        gradeValue = 7;
        break;

      case 'C':
        gradeValue = 6;
        break;

      case 'D':
        gradeValue = 5;
        break;

      case 'E':
        gradeValue = 4;
        break;

      case 'F':
        gradeValue = 0;
        break;

        default:
          break;
    }
  
  return gradeValue;
}


$("#calculate").click(function(){

  var credits = 0;
  var totalValue = 0;
  var sgpa;
  $('.credit').each(function(idx,ele){
    credits += parseInt($(ele).val());
  });
  
  $('.totalValue').each(function(idx,ele){
    totalValue += parseInt($(ele).val()) || 0;
  });

  sgpa = (totalValue / credits).toFixed(2);
  $('.sgpa').html(sgpa);
 });


function checkRow()
{
   var length = $("tr").length;
   var row = $("tbody tr:nth-child(1) td:nth-child(1)");
   
   
   if(length == 2)
   {
     row.html("");
   }

   else{
    row.html('<button type="button" class="btn btn-dark removeRow" ><i class="fas fa-minus "></i></button>');
   }

   
}

