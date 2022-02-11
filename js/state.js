var stateDetail = {
    "INDIA": {
        "Gujarat": ["Ahmedabad", "Rajkot", "Surat", "Vadodara"],
        "Maharastra": ["Mumbai", "Nagpur", "Nasik"],
        "Rajsthan": ["Jaipur", "Jodhpur", "Bikaner"]
    },
    "CANADA": {
        "Alberta": ["Brooks", "Jasper", "Red Deer"],
        "Nova Scotia": ["Baddeck", "Digby", "Pictou"],
        "Ontario": ["Cambridge", "Hamilton", "Niagara Falls"]
    },
    "USA": {
        "California": ["San Francisco", "Los Angeles", "Oakland"],
        "Florida": ["Miami", "Jacksonville", "St. Petersburg"],
        "Txas": ["Austin", "Dallas", "San Antonio"]
    },
}
$(document).ready(function () {
    const frm = $("form[name=frm]");
    frm.submit(function (e) {
        e.preventDefault();
        if (formValidation(this)) {
            var form=$("#frm");
            var frmData=form.serializeObject()
            //console.log(frmData);
            var name = frmData.name;
            var email = frmData.email;
            var gender = frmData.gender;
            var values = frmData.hobbies;
            var country = frmData.country;
            var state = frmData.state;
            var city = frmData.city;

            var form_hidden = $("input").eq(7).val();
            if (form_hidden == undefined || form_hidden == '') {
                myArray.push({name,email,gender,values,country,state,city});
            } else {
                myArray[form_hidden] = {name,email,gender,values,country,state,city};
            }
            $(this).find("input[name=hidden]").val('');
            $(this).trigger("reset");
            $(".btn-success").text("Save").val('Save').removeClass('btn-success').addClass('btn-primary');
            $(this).find('.btn-dark').text("Reset");
            showData();
        }

    });

    showData();
    
    const selectField=$("select");
    //country select
    $.each(Object.keys(stateDetail), function (key, country) {
        selectField.eq(0).append("<option value=" + country + ">" + country + "</option>")
    });
    //state select
    selectField.first().on("change", function () {
        selectField.filter('.state').html('<option values="select state">Select State </option>');
        $.each(Object.keys(stateDetail[$(this).val()]), function (key, state) {
            selectField.filter('.state').append('<option values=' + state + '>' + state + '</option>');
        });
    });
    //city select
    selectField.eq(1).on("change", function () {
        selectField.eq(2).html('<option values="select City">Select City </option>');
        $.each(stateDetail[selectField.eq(0).val()][$(this).val()], function (key, city) {
            selectField.eq(2).append('<option values=' + city + '>' + city + '</option>');
        });
    });


    $("input[name=nameSearch]").on("keyup", function (event) {
        event.preventDefault();
        var searchName = $(this).val() != '' ? myArray.filter(data => data.name.toLowerCase().startsWith($.trim($(this).val()).toLowerCase())) : myArray;
        //console.log(searchName);
        showData(searchName);
    })
    
    $('select[name=sortName]').on("change", function () {
        var srt = $(this).val();
        myArray.sort(function (a, b) {
            let x = a.name.toUpperCase();
            let y = b.name.toUpperCase();
            return srt == 'Asc' ? x < y ? -1 : 1 : x > y ? -1 : 1;
        });
        showData(myArray)
    });
    $("button[name=clear]").on("click", function () {
        $("input[name=nameSearch]").val('');
        showData();
    })

});
var myArray = [];
myArray.push({
    name: "Ravi",
    email: "ravikorat6@gmail.com",
    gender: "Male",
    values: ["Cricket", "Singing"],
    country: "INDIA",
    state: "Gujarat",
    city: "Ahmedabad"
}, {
    name: "Yadav",
    email: "ravikorat6@gmail.com",
    gender: "Male",
    values: ["Cricket", "Singing"],
    country: "INDIA",
    state: "Gujarat",
    city: "Ahmedabad"
});