---
layout: post
title: "Jan. 2015 Meetup - Elasticsearch + Node.js"
description: ""
tags: [node.js, javascript, meetup, elasticsearch, search]
---
{% include JB/setup %}

We are pleased announce a [joint event](http://www.meetup.com/Seattle-Node-js/events/219191483/) with the
[Seattle Node.js Meetup](http://www.meetup.com/Seattle-Node-js/)
and
[Seattle Elasticsearch User Group](http://www.meetup.com/Seattle-ElasticSearch-Meetup/)
on [**Tuesday, Jan. 20, 2015**](http://www.meetup.com/Seattle-Node-js/events/219191483/)
with talks on using the
[Elasticsearch](http://www.elasticsearch.org/) search server in
[Node.js](http://nodejs.org/) server-side JavaScript applications. We are very
pleased to have NBC hosting us downtown and providing tasty food / beverages.

As always, you can find all things Seattle Node.js-related at the group website:
[http://seanode.github.io/](http://seanode.github.io/). And you can reach out to
us via email at [{{site.author.email}}](mailto:{{site.author.email}}) or Twitter
at [@{{site.author.twitter}}](https://twitter.com/{{ site.author.twitter }}).

See you soon!

## Agenda

**6:30 - 7:00pm**: Start with beverages and food, courtesy of NBC.

**7:00pm - 8:00pm**: Listen to some awesome talks.

**8:00pm - on**: Mingle, mix, chat things Elasticsearch and Node.js-related and more as we wind
down.

<!-- more start -->

## Talks

### Build a Node.js Application with Elasticsearch

**Trent Swanson - [Full Scale 180](http://www.fullscale180.com/)**

Elasticsearch is a popular open source search and analytics engine built for distributed environments where reliability and scalability are a must. In addition to content indexing and search, many services are using Elasticsearch to data analytics. In this talk we will provide a brief overview of the ELK stack (Elasticsearch, Logstash, and Kibana). We will then dive a bit deeper in to Elasticsearch, the javascript SDK, and how this can be used in your next node.js application. You will walk away with a basic understanding of how to build node.js applications with Elasticsearch.

Trent Swanson is a Solutions Architect and Co-founder at Full Scale 180. Prior to Full Scale 180 Trent worked at Microsoft where he started out as an Embedded Systems Specialist and was a Cloud Solutions Architect when he left to start his own business... again.

### Building a Messaging Service on Node.js and Elasticsearch

**Joseph Ellsworth - [Bayes Analytic LLC](http://bayesanalytic.com/)**

Elasticsearch is a popular open source search and analytics engine that built on the same platform as Lucene. Bayes has built an in-app messaging engine in Node.js which uses Elasticsearch as the primary write and read storage system. In-app messaging is a challenging problem because messages need to show up in the next search results so users can see the thread. Elasticsearch made some aspects of this application easier because it allows a simple query to pull both sides of a thread with relatively simple queries and to filter those messages for access by customer service. Elasticsearch's ability to incrementally add data to records without defining new record types has already been used. We could have delivered the solution on a database building it over Elasticsearch has made it easier and faster. We will dive into the elastic semantics for creating the index, and show the REST interface and how we use Node.js to transform the message structure from Elasticsearch to something that is domain specific for the messaging service as part of the service interface. Node.js was instrumental for this application because Elasticsearch on boxes this size can easily be tipped over under excess load demand. Our implementation of request queues keeps the demand against Elasticsearch at a metered max which allows it to perform optimally and has been tested to hundreds of inbound connections. This service is deployed by a PeerSpace, a company in the Silicon Valley, who depends on it to broker anonymized messages between buyers and sellers of premium event spaces.

Joseph Ellsworth is the CTO of Chief algorithms scientist at Bayes Analytic LLC a consulting company that also works on predictive stock and forex algorithms. Prior the Bayes Analytic he was Chief Architect at Corbis Images where he was responsible for the search and metadata pipeline. Prior to Corbis he was a principal engineer at Amazon and CTO of a venture funded startup in the search space. At Bayes most of our customers are paying for high end distributed systems problem solving but we tend to focus on search or information discovery as a sub specialty.

## Venue / Sponsors

NBC is providing our venue and food / beverages. The event will be hosted on
the 40th floor of the Columbia Tower at: 701 5th Ave Seattle, WA 98104.

<!-- more end -->
