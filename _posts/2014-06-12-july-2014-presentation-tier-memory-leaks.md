---
layout: post
title: "July 2014 Meetup - Building a Presentation Tier, Hunting Memory Leaks"
description: ""
tags: [node.js, javascript, meetup, presentation, cms, memory, debug]
---
{% include JB/setup %}

The Seattle Node.js Meetup is pleased announce our next
[meetup](http://www.meetup.com/Seattle-Node-js/events/188656412/)
on **Wednesday, July 23, 2014** with talks on
migrating application stacks to Node.js and high-performance node. We'll get
pizza and beverages thanks to our new host Cobalt as we take things to SoDo
for the evening.

As always, you can find all things Seattle Node.js-related at the group website:
[http://seanode.github.io/](http://seanode.github.io/). And you can reach out to
us via email at [{{site.author.email}}](mailto:{{site.author.email}}) or Twitter
at [@{{site.author.twitter}}](https://twitter.com/{{ site.author.twitter }}).

See you soon!

## Agenda

**6:30 - 7:00pm**: Start with pizza and beer, courtesy of Cobalt.

**7:00pm - 8:15pm**: Listen to our talks and panels.

**8:15pm - on**: Mingle, mix, chat things Node.js-related and more as we wind
down.


<!-- more start -->

## Talks

### Tracking down memory leaks in production.

**Jason Wilson - Nordstrom**

After a successful launch of our Recommendo API we noticed that all was not well
in the world. High memory consumption and swap usage in our production
environment was resulting in service timeouts and degraded performance. Learn
how we used heapdump, mdb, node-memwatch, and a little luck to take our node rss
from 1.1gigs to 87mb.

Jason is a developer in the Nordstrom Data Lab focusing on
infrastructure development for Nordstrom's next generation personalization
platform. Before joining Nordstrom Jason held various engineering roles in
military / defense and gaming.


### Node-ification Justification - Node.js in the presentation layer

**John Cokos - UI Engineer, ADP\|Cobalt**

*Panel: Jason Taylor, Benjamin Waite, Brett Ritter, Fumiyo Conway-Yasuyama, Ben
Hakala (Senior UI Engineers at ADP\|Cobalt)*

Our core product is a CMS which powers over 20,000 websites from a common
codebase through a (mostly) common theming system constructed using variously
sized "widgets" of disparate content.  Currently, this is all rendered through a
massive, very tightly coupled Java application.  Our challenge was to decouple
the presentation tier from the business tier. Node.js was the clear choice to
tackle the problem set. We've since developed a completely isological system
that not only executes the same code on both the server and the client, but can
also render content at either end.

As part of the rollout strategy, we are delivering a subset of this technology
as an in-house development environment for widget authorship for both the
Node.js and Java based systems.  In addition to a massive increase in
productivity and bliss, we're using this system as a way of slowly
indoctrinating the current developer community and 3rd parties in the usage
patterns for our new layout and content system and getting a foothold into the
production systems with Node.js.

We are looking forward to showing off the developers toolkit, sharing the
process that we're going through and taking a glimpse into our next generation
layout engine, powered by Node.js.


## Venue / Sponsor

[Cobalt](http://www.cobalt.com/) has graciously agreed to host the event and
provide food and tasty beverages. Cobalt's offices are located at: 605 Fifth
Avenue South, 9th Floor, Seattle, WA 98104-3889.

<!-- more end -->
