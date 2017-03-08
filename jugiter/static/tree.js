
define(['jquery', 'base/js/dialog', 'base/js/utils', 'base/js/namespace'], function ($, dialog, utils, IPython) {

  var base_url = utils.get_body_data('baseUrl');
  var hello_url = base_url + 'hello'
          function on_ok(){
              // var re = /^\/notebooks(.*?)$/;
              console.log("aa" + window.location.pathname);

              // display preloader during commit and push
              // var preloader = '<img class="commit-feedback" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.8/ajax-loader.gif">';
              // container.prepend(preloader);

              // commit and push
              // $.ajax(settings);
          }

      var p = $('<p/>').text("Please enter git repo address.")
      var input = $('<textarea id="gitrepo" rows="4" cols="72"></textarea>')
      var div = $('<div/>')
      div.append(p).append(input)

      var f=   function(){
console.log("aa" + window.location.pathname);
        dialog.modal({
              body: div ,
              title: 'Clone git repo',
              buttons: {'Clone':
                          { class:'btn-primary btn-large',
                            click:function() {
                $.post(base_url, {'add_dir':window.location.pathname, 'gitrepo': $('textara#gitrepo').text});
            }
                          },
                        'Cancel':{}
                  },
          })
        }


    var load_ipython_extension = function () {
        console.log("tree2");


        var insertAfter = function(node, newNode) {
          node.parentNode.insertBefore(newNode, node.nextSibling)
        }

        var createLi = function(id) {
          var newLi = $('<li>')
            .attr('role', 'presentation')
            .attr('id', id);
          return newLi
        }

        var newDivider = createLi("git-divider")
          .attr('class', 'divider');

        var gitHeader = createLi('git-header')
          .attr('class', 'dropdown-header').text("Git");

        var gitClone = createLi('git-clone');
        var gitCloneMenuItem = $('<a>')
          .attr('role', 'menuitem')
          .attr('tabindex', '-1')
          .attr('href', '#')
          .text("Clone")
          .on('click', f);
        gitClone.append(gitCloneMenuItem)

        var oldDivider = $('li.divider');
        gitHeader.insertAfter(oldDivider)
        gitClone.insertAfter(gitHeader)
        newDivider.insertAfter(gitClone)



    };

    return {

        load_ipython_extension : load_ipython_extension,
    };
});
