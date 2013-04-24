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
resources, slides, and discussions. You can also find us via
email ([{{site.author.email}}](mailto:{{site.author.email}})),
Twitter ([@{{site.author.twitter}}](https://twitter.com/{{ site.author.twitter }})),
and on
GitHub ([@{{site.author.github}}](https://github.com/{{ site.author.github }})).

{% if site.posts.size > 0 %}
## Latest Happenings

{% assign post = site.posts.first %}
<div class="page-posts inner">
  <div class="post">
    <h1 class="post-title">
      <a href="{{ post.url }}">{{ post.title }}</a>
    </h1>
    <div class="clearfix">
      <div class="date badge">
        {{ post.date | date_to_long_string }}
      </div>
    </div>
    <div class="excerpt">
      {{ post.content | replace: '--', 'DOUBLE_DASH' | replace: '<!DOUBLE_DASH', '<!--'  | replace: 'DOUBLE_DASH>', '-->' | replace:'DOUBLE_DASH','&endash;&endash;' | replace:'more start -->','' | replace:'<!-- more end','' }}
      <!-- -->
    </div>
    <div class="clearfix">
      <div class="more pull-right">
        Read <a href="{{ post.url }}">more</a>...
      </div>
    </div>
  </div>
</div>
{% endif %}

{% if site.posts.size > 1 %}
## Recent News and Posts

<ul>
{% for post in site.posts limit:10 offset:1 %}
  <li><span>{{ post.date | date: "%B %e, %Y" }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
{% endif %}

{% comment %}
# Current Tasks

* GitHub banner
* Sponsors Block.

* POST: New site and everything to do with it.
* Side Bar: Links to other Seattle area tech stuff.
* Side Bar: Links for events.
* Posts: Add post.author, post.email, post.twitter, etc. meta.
  * Also hook in to rss.xml, atom.xml
* Jekyll: Invite community to submit PRs, etc.

# Future Tasks
* Page: Node.js jobs (?)
* Design: Redesign site styles and look/feel.

{% endcomment %}

