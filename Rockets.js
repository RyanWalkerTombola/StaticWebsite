function notEmpty(){

    var e = document.getElementById("field_6");
    var strUser = e.options[e.selectedIndex].value;
    document.getElementById('aggregator_name').innerHTML = strUser;
    
    }
    notEmpty()
        
        document.getElementById("field_6").onchange = notEmpty;
    
    