/**
 * Site
 */
(function () {
  var page = {},
    $tweets = $(".tweets");

  SITE.hashtag = "ryan_roemer";
  console.log("TODO HERE", SITE.hashtag);

  page.twitter = function () {
    $.ajax({
      url: 'http://search.twitter.com/search.json',
      data: { q: SITE.hashtag, rpp:100 },
      dataType: 'jsonp',
      success: function(resp) {
        if (!resp.results.length) { return };

        var template =
          "<a target='_blank' href='http://twitter.com/<%=from_user%>/status/<%=id_str%>' class='tweet'>"
          + "<span class='thumb' style='background-image:url(<%=profile_image_url%>)'></span>"
          + "<span class='popup'>"
          + "<span class='title'>@<%=from_user%></span>"
          + "<small><%=text%></small>"
          + "</span>"
          + "</a>";

        var t = _(resp.results.slice(0,30))
          .map(function(i) { return _(template).template(i); })
          .join('');

        $tweets.append(t).addClass('loaded');
      }
    });
  };
  $(page.twitter);

})();
