$(()=>{
    const addedSuccess = ()=>{
        $("#qnText").val("");
    }
    $("#submitBtn").submit(()=>{
        const data = {
          question: $("#qnText").val()
        };
        $.get({
            url: "/8ball",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(resp =>{
            $("#inputText").val(response);
        });
        return false;
    }) ;

    $("#qnText").keypress(()=>{
        const data = {
          question: $("#qnText").val()
        };
        $.get({
            url: "/8ball",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(resp =>{
            $("#inputText").val(response);
        });
        return false;
    }) ;

    $("#qnText").focus(()=>{
        const data = {
          question: $("#qnText").val()
        };
        $.get({
            url: "/8ball",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(resp =>{
            $("#inputText").val(response);
        });
        return false;
    }) ;


});