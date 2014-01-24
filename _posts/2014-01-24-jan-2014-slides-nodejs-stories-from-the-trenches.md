---
layout: post
title: "Jan. 2014 Slides - Stories from the Trenches"
description: ""
tags: [node.js, javascript, meetup, production, security, devops, cloud]
---
{% include JB/setup %}

The Seattle Node.js Meetup community showed up in style and number for our
[January 21st meetup](http://www.meetup.com/Seattle-Node-js/events/128934732/),
feature our first-ever panel discussion around running Node.js in production
with real world challenges like: infrastructure, operations, the cloud, and
security. [Mixpo](http://mixpo.com/) hosted the event and provided us with
pizza and beverages and a great introductory presentation on the company.

<img class="centered bordered" alt="Panel discussion"
     style="width: 100%; max-width: 400px;"
     src="/assets/img/meetup/20140121-trenches-panel.jpg">

Four speakers across three companies shared their insights, pains and triumphs
running Node.js in the wild. [Rex St John](http://rexstjohn.com/) was kind
enough to write out broad notes from the talks and panel discussions, which
you can find at:
[http://rexstjohn.com/node-js-lessons-trenches/](http://rexstjohn.com/node-js-lessons-trenches/).
And, we now have slide decks from all of the panelists!

<!-- more start -->

## Security, Enterprise, and the Cloud

**[Kyle McFarland](https://twitter.com/_KyleMcFarland) - Piper**

> The world of enterprise software is riddled with many hurdles. Unlike the fast
> paced consumer Internet, engineers in the enterprise space are faced with many
> risks to mitigate and requirements to comply with. In this slower moving space
> how does innovative technology like Node.js take a stand. Is Node.js ready to
> meet the likes of PCI or HIPPA regulations? The team at Piper believes it is.
> Piper is preparing by buttoning up security through Passport.js, Oauth2orize,
> Helmet, and Lusca modules and hammering down on the data model using the latest
> from the JSON schema specification.

[http://www.slideshare.net/KyleMcFarland1/nodetalk](http://www.slideshare.net/KyleMcFarland1/nodetalk)


## Running Node in Production

**[Ken Perkins](https://twitter.com/kenperkins) - Rackspace**

> Let's dive into what it takes to run your Node.js apps in production. The most
> important part of running Node.js is actually not related to Node.js at all;
> We'll talk about setting up for success; configuring your cloud with Puppet,
> and keeping it running and monitored. We'll also look at setting up across
> multiple environments, logging, performance and diagnosis of what happens when
> things go wrong.

[http://slid.es/kenperkins/running-node-js-in-production](http://slid.es/kenperkins/running-node-js-in-production)


## Node.js at Nordstrom Data Lab

**Jason Wilson, David Von Lehman - Nordstrom**

> The Nordstrom Data Lab is building out the next generation recommendations API
> for Nordstrom.com and beyond. Recommendo, our flagship product, was built from
> the ground up using Node.js and AWS in a little over three months. Since launch
> in November we've served up over a billion recommendations and survived Black
> Friday and Cyber Monday without breaking a sweat. We'll be sharing some of the
> tips and tricks we encountered along the way concentrating on performance
> testing, cloud deployment and hosting with Elastic Beanstalk, and hooking Node
> up to DynamoDB.

[http://www.slideshare.net/DavidVonLehman/nordstrom-data-la](http://www.slideshare.net/DavidVonLehman/nordstrom-data-la)

## See you next time!

We'd love to keep the momentum from the first meetup of 2014 rolling, so if
you would like to help -- via speaking, hosting or volunteering -- please
reach out to us via email [{{site.author.email}}](mailto:{{site.author.email}})
or Twitter [@{{site.author.twitter}}](https://twitter.com/{{ site.author.twitter }}).

<!-- more end -->
