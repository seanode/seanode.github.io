---
layout: page
title: Seattle Node.js Meetup
#tagline: Node.js in the Emerald City
---
{% include JB/setup %}

Welcome to Seattle Node.js! We are a group of Node.js enthusiasts and
technologists interested in event-based programming, highly-concurrent
applications, and bringing JavaScript to the server-side. We hope that you join
us and help the Node.js community continue to grow in Seattle.

Our official [Meetup]({{ site.author.meetup }}) page provides event
descriptions and reservations, while this site provides additional event
resources, slides, and discussions.

## Current Posts

{% for post in site.posts limit:2 %}
<div class="page-posts inner">
  <div class="post clearfix">
    <div class="excerpt">
      {{ post.content | replace: '--', 'DOUBLE_DASH' | replace: '<!DOUBLE_DASH', '<!--'  | replace: 'DOUBLE_DASH>', '-->' | replace:'DOUBLE_DASH','&endash;&endash;' | replace:'more start -->','' | replace:'<!-- more end','' }}
    </div>
    <div class="more pull-right">
      Read <a href="{{ post.url }}">more</a>...
    </div>
  </div>
</div>
{% endfor %}

## TODO

* Get rid of this section.
* Links to other Seattle area tech stuff.
* Prominent link for first event.
* Layout: Make aside disappear
* feedburner: (in `_config.yml`)
* GitHub links
* Twitter, GH, RSS icons.
* Add posts to this section.
* Get rid of: Categories, Pages
