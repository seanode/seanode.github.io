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
    tags: []
    ---
    {% include JB/setup %}

Fill in the description string and and add any number of tags for the event.
Here's an example of a setup:

    ---
    layout: post
    title: "Announcing the May Seattle Node.js Meetup"
    description: "Start your event loops and come out to talk some Node.js!"
    tags: [events, node.js, javascript, meetup]
    ---
    {% include JB/setup %}

### Authoring a Post

Some various tips:

* **Headings start with h2**: We use `h1` (or `#` in markdown) for titles,
  so use  `h2` (or `##` in markdown) or smaller.


## Development

### Installation
#### Ruby
Jekyll is built on Ruby, so that's what we use. Get an RVM environment
fired up:

```sh
# Activate RVM
$ rvm install 2.4
$ rvm use 2.4

# Create and activate custom gemset.
$ rvm gemset create seanode
$ rvm use 2.4@seanode
```

Install jekyll

```sh
$ gem install jekyll
```

### Running the Preview Server
Once everything is installed, you can run the preview server to build the site
and host it locally at: <http://127.0.0.1:4000>

```sh
$ rake preview
```

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

* [Font Awesome][font_awesome] is Copyright Dave Gandy and licensed under
  the [MIT](http://fortawesome.github.io/Font-Awesome/#license)
  license.

* Some JavaScript from [longneck][longneck].

[j_bootstrap]: http://jekyllbootstrap.com
[bootstrap]: https://github.com/twitter/bootstrap
[jquery]: https://github.com/jquery/jquery
[longneck]: https://github.com/willwhite/longneck
[font_awesome]: http://fortawesome.github.io/Font-Awesome/
