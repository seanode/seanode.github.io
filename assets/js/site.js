/**
 * Site
 */
$(function () {
  var github = {},
    twitter = {};

  github.watchers = function ($elem) {
    $.ajax({
      // TODO: Add pagination for more users.
      url: "https://api.github.com/repos/" +
           SITE.github.user + "/" +
           SITE.github.repo + "/watchers",
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

  twitter.mentions = function ($elem) {
    $.ajax({
      url: "http://search.twitter.com/search.json",
      data: { q: SITE.twitter.hashtag, rpp: 100 },
      dataType: "jsonp",
      success: function (resp) {
        if (!resp.results.length) { return; }

        var template =
          "<a target='_blank' href='http://twitter.com/<%=from_user%>/status/<%=id_str%>' class='tweet'>" +
            "<span class='thumb' style='background-image:url(<%=profile_image_url%>)'></span>" +
            "<span class='popup'>" +
            "<span class='title'>@<%=from_user%></span>" +
            "<small><%=text%></small>" +
            "</span>" +
          "</a>";

        _.chain(resp.results.slice(0,30))
          .map(function (d) { return _.template(template, d); })
          .each(function (e) { $elem.append(e); })

        $elem.addClass('loaded');
      }
    });
  };

  // Initialize.
  github.watchers($(".followers .side-content"));
  twitter.mentions($(".tweets .side-content"))
});
