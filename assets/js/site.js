/**
 * Site
 */
$(function () {
  var github = {};

  github.watchers = function ($elem) {
    $.ajax({
      // TODO: Add pagination for more users.
      url: 'https://api.github.com/repos/' +
           SITE.github.user + '/' +
           SITE.github.repo + '/watchers',
      dataType: 'jsonp',
      success: function (resp) {
        if (!resp.data.length) { return; }

        var template =
          "<a class='github-user' target='_blank' href='http://github.com/<%=login%>'>" +
            "<span style='background-image:url(<%=avatar_url%>)' class='thumb' /></span>" +
            "<span class='popup'>" +
            "<span class='title'><%=login%></span>" +
            "</span>" +
          "</a>";

        _.chain(resp.data)
          .map(function (d) { return _.template(template, d); })
          .each(function (e) { $elem.append(e); })
      }
    });
  };

  // Initialize.
  github.watchers($(".followers .side-content"));
});
