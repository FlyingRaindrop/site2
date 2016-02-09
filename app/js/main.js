var MyModule = (function(){

    var init = function(){
        _setUpListners();
    };

    var _setUpListners = function(){
        $('.add_project').on('click', _showModal);
        $('#addProjectForm').on('submit', _addProject);
        $('#addProjectForm').on('reset', _clearForm);
        $('.text').on('click', _hideTooltip);
        $('.b-close').on('click', _clearForm);
    };

    var _hideTooltip = function(e){
        $(this).next('.tooltip').hide();
        $(this).css({'background-color':'#fff',
                    'border':'1px solid #67dffa'});
    };

    var _clearForm = function(){
        $('.tooltip').hide();
        $('.text').css({'background-color':'#fff',
                         'border':'1px solid #67dffa'});
    };

    var _showModal = function(e){
        e.preventDefault();
        $('#project-popup').bPopup({
            speed: 650,
            transition: 'slideDown'
        });
    };

    var _addProject = function(e){
        e.preventDefault();
        
        var form = $(this),
            input = $('.text'),
            tooltip=$('.tooltip'),
            data = form.serialize();

        for(var i=0; i<input.length; i++){
            if(input[i].value === ''){
                $(tooltip[i]).show();
                $(input[i]).css({'background-color':'#fad6d4',
                                 'border':'1px solid #f97e76'});
            }
        }

/*        var form = $(this),
            url = 'add_project.php',
            
        console.log(data);

       
        .done(function(ans) {
            console.log('done!');
            console.log('ans');
        })
        .fail(function() {
            console.log('error!');
        })
        .always(function() {
            console.log('complete!');
        });*/

    };

   /* var _ajaxForm = function(form, url){
        // if(!valid) return false;
        
        data = form.serialize();

        var result = $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            data: data,
        });

        return result;
    }*/

    return{
        init: init
    };


})();

MyModule.init();

