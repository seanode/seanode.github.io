---
layout: post
title: "July 2015 Meetup - The Dangerous Cliffs of Node + Building a Multi-tenant SPA Platform"
description: ""
tags: [node.js, javascript, best practices, spa, multi-tenant]
---
{% include JB/setup %}

The Seattle Node.js Meetup is pleased announce our
[meetup](http://www.meetup.com/Seattle-Node-js/events/222999198/)
on **Thursday, July 23rd** with talks on Node.js programming best practices and
building large services around Node.js.

As always, you can find all things Seattle Node.js-related at the group website:
[http://seanode.github.io/](http://seanode.github.io/). And you can reach out to
us via email at [{{site.author.email}}](mailto:{{site.author.email}}) or Twitter
at [@{{site.author.twitter}}](https://twitter.com/{{ site.author.twitter }}).

See you soon!

## Agenda

**6:30 - 7:00pm**: Start with beverages and food, courtesy of NBC.

**7:00pm - 8:30pm**: Listen and learn about Node.js programming and architecting
multi-tenant platforms.

**8:30pm - on**: Mingle, mix, chat things Node.js-related and more as we wind down.

<!-- more start -->

## Talks

### The Dangerous Cliffs of Node.js

**[Scott Nonnenberg](https://gammacorvi.com/)**

Node.js is a very approachable platform. The tutorials are all easy to follow, and you're up and running the same afternoon you start. Everyone knows at least a little bit of javascript, right? But, much like day hiking, what starts out sunny, warm and fun can quickly become dangerous. This talk will cover some simple Node.js mistakes with big consequences and some ways to minimize those consequences.

https://blog.gammacorvi.com/the-dangerous-cliffs-of-node-js/

Scott is all about best practices, a computer science major turned Visual Studio project manager, now consultant and entrepreneur. Founder and CEO of Gamma Corvi, Inc.

### DIY multi-tenant SPA platform

**[David Von Lehman](https://twitter.com/davidvlsea)**

Node.js and Express, along with client frameworks such as AngularJS, Ember, and React make for a great combination to build modern single page web apps. But running a dedicated server process on multiple VMs for each SPA is expensive to operate and incurs incremental DevOps complexity. When you consider that API driven web apps push most of the processing either back to APIs or forward to the browser, it starts to feel like infrastructure overkill.

A better solution is a multi-tenant platform where a single Node.js process acts as a container for many virtual apps, each with their own dedicated URL. This single process can be statelessly scaled out across as many load-balanced servers as needed. As an added benefit, many non-functional concerns such as authorization, logging, monitoring, deployment automation, and configuration can be delegated down to the host layer rather than each app implementing from scratch.

In this session I'll show how you how to take a modular approach to assemble just such a platform using Node.js, Express, and an à la carte selection of npm packages. Once up and running our platform will provide:

* Provisioning of new apps from the command line with a dedicated URL such as http://app-name.myplatform.com
* An integrated developer sandbox
* Baked in logging and monitoring for all deployed virtual apps
* Secure remote API proxy callable from client script
* Ability to flip on OAuth authentication for an app without writing any client code
* Command line deployment of new virtual app versions
* CDN hosting of static assets
* Multiple environment support (test, staging, production)
* Hooks to augment the platform with custom micro-service endpoints

David is founder of a startup called [Aerobatic](http://www.aerobatic.com), a cloud platform purpose-built for modern single page applications. He's also behind the [4Front project](http://www.4front.com), an open-source multi-tenant container layer that sits atop [Express](http://expressjs.com/). These days he finds it difficult to reason about synchronous IO.

## Venue / Sponsors

NBC is providing our venue and food / beverages. The event will be hosted on
the 40th floor of the Columbia Tower at: 701 5th Ave Seattle, WA 98104.

<!-- more end -->
