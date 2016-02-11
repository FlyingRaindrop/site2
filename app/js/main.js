var MyModule = (function(){

    var init = function(){
        _setUpListners();
    };

    var _setUpListners = function(){
        $('.add_project').on('click', _showModal);
        $('.custom-file-input').on('change', _fileUpload);
        $('.addProjectForm').on('submit', _addProject);
        $('.addProjectForm').on('reset', _clearForm);
        $('.form-item').on('click', _hideTooltip);
        $('.b-close').on('click', _clearForm);
    };

    var _fileUpload = function(){
        realVal = $(this).val();
        lastIndex = realVal.lastIndexOf('\\') + 1;
        if(lastIndex !== -1) {
            realVal = realVal.substr(lastIndex);
            $(this).prev('.mask').find('#picture').val(realVal);
        }
    };

    var _hideTooltip = function(e){
        if (e.target.tagName == 'INPUT' || e.target.tagName == 'TEXTAREA'){
            $(e.target).next('.tooltip').hide();
            $(e.target).removeClass('error');
            $(e.target).prev('.mask').find('.tooltip').hide();
            $(e.target).prev('.mask')
                   .find('#picture')
                   .removeClass('error');
        }
    };

    var _clearForm = function(){
        $('form')[0].reset();
        $('.tooltip').hide();
        $('.text').removeClass('error');
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
            url = 'add_project.php',
            input = $('.text'),
            tooltip=$('.tooltip'),
            data = form.serialize();

        for(var i=0; i<input.length; i++){
            if(input[i].value === ''){
                $(tooltip[i]).show();
                 $(input[i]).addClass('error');
            }else{
                $.ajax({
                    url: url,
                    type: 'POST',
                    dataType: 'json',
                    data: data,
                 })
                .done(function(ans) {
                    console.log('done!');
                    console.log('ans');
                })
                .fail(function() {
                    console.log('error!');
                })
                .always(function() {
                    console.log('complete!');
                });

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
