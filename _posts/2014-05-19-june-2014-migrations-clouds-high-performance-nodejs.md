---
layout: post
title: "June 2014 Meetup - Migrations, Clouds, and High-Performance Node.js"
description: ""
tags: [node.js, javascript, meetup, performance, migration, cloud]
---
{% include JB/setup %}

The Seattle Node.js Meetup is pleased announce our next meetup on
**Wednesday, June 25, 2014** with talks on
migrating application stacks to Node.js and high-performance node. We'll get
pizza and beverages thanks to our wonderful host Mixpo as we mix, mingle and
Node away in their swanky downtown offices.

As always, you can find all things Seattle Node.js-related at the group website:
[http://seanode.github.io/](http://seanode.github.io/). And you can reach out
to us via email [{{site.author.email}}](mailto:{{site.author.email}}) or Twitter
[@{{site.author.twitter}}](https://twitter.com/{{ site.author.twitter }}).

See you soon!

## Agenda

**6:30 - 7:00pm**: Start with pizza and beer, courtesy of Mixpo.

**7:00pm - 8:00pm**: Listen to some awesome talks.

**8:00pm - on**: Mingle, mix, chat things Node.js-related and more as we wind
down.


<!-- more start -->

## Talks

### Evolution of a Cloud Start-Up: From C# to Node.js

**Steve Jamieson - ComputeNext**

ComputeNext started 3 years ago to develop the first open marketplace for cloud computing services. We started by using the technologies we were most familiar with - C# and SQL Server, and our initial architecture and implementation was based on these technologies. Over time, we have progressively introduced more open source elements, including MongoDB, RabbitMQ and Node.js. Now we are at the point where most of our back-end services rely on Node.js. The talk will talk about why we did this, how we did this, and discuss our experiences - both good and bad.

Steve is the Lead Developer at ComputeNext and likes to spend most of his time coding in JavaScript for Node.js. Before that he was at Microsoft for many years working on CRM, Enterprise SSO and COM+, and spent some time at Northern Telecom, GTE and IBM. His first computer had 8K RAM and used a cassette tape for loading programs.


### Parallel Programming and Execution Models for Node.js

**Jace Mogill**

Node.js is strictly a single-threaded execution model... except for the asynchronous I/O, process forking, async threads, and bulk synchronous parallel packages we use.  To realize a mechanical advantage from parallelism, the programmer must concede that virtual machines run on real hardware.  Why does a single-threaded programming and execution model have (and need) so much concurrency?  Why is CPU micro-architecture so important to Node.js applications running in V8's VM, which in turn runs on a cloud VM?  This talk compares a variety of Node.js parallel programming and execution models.

Jace has parallelized dozens of commercial and research applications to high performance computers, and when he fell for JavaScript he missed shared memory parallelism so much he added it to Node.js with the Extended Memory Semantics (EMS) package.  He builds tools and consults on best practices for parallel computing at all scales, and speaks (sometimes at great length) about the need for more software parallelism everywhere all the time because that's how the hardware works.


## Venue / Sponsor

[Mixpo](http://mixpo.com/) has graciously agreed to host the event and provide
food and tasty beverages. Mixpo's offices are located at: 520 Pike St, Suite
1600, Seattle, WA 98101

<!-- more end -->
