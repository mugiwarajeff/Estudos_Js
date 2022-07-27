import $ from "jquery";

function loadIncludes(parent){
    console.log("entrou na function")
    if (!parent) parent = "body";

    $(parent).find("[wm-include]").each(function(i, e){
        const url = $(e).attr("wm-include");

        $.ajax({
            url,
            success(data) {
                $(e).html(data);
                $(e).removeAttr("wm-include");
                loadIncludes(e);
            }
        })
    })
}

loadIncludes()