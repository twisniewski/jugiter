define([
    'jquery',
    'base/js/dialog',
    'base/js/events',
    'base/js/utils',
    'base/js/namespace',
    'tree/js/sessionlist'
], function(
    $,
    dialog,
    events,
    utils,
    IPython,
    sessionlist) {

    var base_url = utils.get_body_data('baseUrl');
    var clone_url = base_url + 'hello'

    var div = $('<div/>').html('<p>Please enter git repo address.</p><input type="text" name="gitrepo" id="gitrepo" size ="90">')

    var f = function() {
        dialog.modal({
            body: div,
            title: 'Clone git repo',
            buttons: {
                'Clone': {
                    class: 'btn-primary btn-large',
                    click: function() {
                        $.post(clone_url, {
                            'add_dir': window.location.pathname,
                            'gitrepo': $('#gitrepo').val()
                        });
                    }
                },
                'Cancel': {
                    click: function() {
                        $('#gitrepo').val('')
                    }
                }
            },
        })
    }

    var load_ipython_extension = function() {
        console.log("jugiter extension is on");
        var oldDivider = $('li.divider');
        oldDivider.after('\
          <li role="presentation" id="git-header" class="dropdown-header"> Git</li> \
          <li role="presentation" id="git-clone"><a id="git-clone-a"role="menuitem" tabindex="-1" href="#" >Clone</a></li> \
          <li role="presentation" class="divider"></li> \
        ')
        document.getElementById("git-clone-a").addEventListener('click', f)
    };

    return {
        load_ipython_extension: load_ipython_extension,
    };
});
