//show data
function showData(searchall = null) {
    var html = "<tr>";
    $.each(searchall == null ? myArray : searchall, function (key, std) {
        html += "<td>" + std.name + "</td>";
        html += "<td>" + std.email + "</td>";
        html += "<td>" + std.gender + "</td>";
        html += "<td>" + std.values + "</td>";
        html += "<td>" + std.country + "</td>";
        html += "<td>" + std.state + "</td>";
        html += "<td>" + std.city + "</td>";
        html +=
            '<td><input type="button" class="btn btn-secondary mr-2" value="Edit" onclick="updateData(' + key +
            ');">&nbsp;<input type="button" class="btn btn-danger ml-2" value="Delete" onclick="deleteData(' + key +
            '); "></td>';
        html += "</tr>";
    })
    $("#tbl tbody").html(html);
}

function updateData(i) {
    const frm= $("form[name=frm]");
    frm.find("input[name=name]").val(myArray[i]["name"]);
    frm.find("input[name=email]").val(myArray[i]["email"]);
    frm.find("input[name=gender]").filter('[value=' + myArray[i]["gender"] + ']').prop('checked', true);
    //console.log(myArray[i]["gender"]);
    frm.find("input[name=hobbies]").val(myArray[i]["values"]);
    frm.find("select[name=country]").val(myArray[i]["country"]).trigger('change');
    frm.find("select[name=state]").val(myArray[i]["state"]).trigger('change');
    frm.find("select[name=city]").val(myArray[i]["city"]).trigger('change');
    frm.find("input[name=hidden]").val(i);
    $('.btn-primary').text('Update').val('Update').removeClass('btn-primary').addClass('btn-success');
    frm.find(".btn-dark").show();
    showData();
    
}
function deleteData(i){
    myArray.splice(i,1);
    showData();
}

