# Seattle Node.js Site

This repository contains the Seattle Node.js Meetup site. You can clone or
fork the project, add some content and send a pull request to get your
article / event / site improvements incorporated into the site.

## Content
We use the

### Create a New Post
We use the [Jekyll Bootstrap][j_bootstrap] project, which has a couple of
helpers to guide you through post creation. Of course, you can always copy
and old post, but here's the friendly, helpful version:

    $ rake post title="Announcing the May Seattle Node.js Meetup"
    Creating new post: ./_posts/2013-04-17-announcing-the-may-seattle-nodejs-meetup.md

From here, you'll get a raw template to fill in:

    ---
    layout: post
    title: "Announcing the May Seattle Node.js Meetup"
    description: ""
    category:
    tags: []
    ---
    {% include JB/setup %}

There should be **one** category (it's part of the permalink), and you should
choose one from the following (or add it to this list):

* `events`

Fill in the description string and and add any number of tags for the event.
Here's an example of a setup:

    ---
    layout: post
    title: "Announcing the May Seattle Node.js Meetup"
    description: "Start your event loops and come out to talk some Node.js!"
    category: events
    tags: [node.js, javascript, meetup]
    ---
    {% include JB/setup %}


## Development

### Installation
#### Ruby
Jekyll is built on Ruby, so that's what we use. Get an RVM environment
fired up:

    # Activate RVM
    $ rvm use 1.9.3

    # Create and activate custom gemset.
    $ rvm create gemset seanode
    $ rvm use 1.9.3@seanode

Install the repo gemset:

    $ PATH/TO/seanode.github.com
    $ rvm gemset import

Highlighted code requires a

#### Python
... and we need Python too for pygments. We recommend a `virtualenv` for
the project. From there, install with pip:

    $ PATH/TO/seanode.github.com
    $ pip install -r requirements.txt

### Running the Preview Server
Once everything is installed, you can run the preview server to build the site
and host it locally at: <http://127.0.0.1:4000>

    $ rake preview

Note that you may have to kill/restart to see some of your changes.

## Licenses
All code not otherwise specified is Copyright 2013 Seattle Node.js.
Released under the [MIT](./LICENSE.txt) License.

* Forked from [Jekyll Bootstrap][j_bootstrap] under
  [MIT](http://opensource.org/licenses/MIT) license.

* [jQuery][jquery] is Copyright jQuery Foundation and licensed under the
  [MIT](https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license.

* [Twitter Bootstrap][bootstrap] is Copyright Twitter, Inc. and licensed under
  the [Apache v2.0](https://github.com/twitter/bootstrap/blob/master/LICENSE)
  license.

[j_bootstrap]: http://jekyllbootstrap.com
[bootstrap]: https://github.com/twitter/bootstrap
[jquery]: https://github.com/jquery/jquery
