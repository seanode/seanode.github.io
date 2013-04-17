# Seattle Node.js Site


## Development
### Ruby
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

### Python
... and we need Python too for pygments. We recommend a `virtualenv` for
the project. From there, install with pip:

    $ PATH/TO/seanode.github.com
    $ pip install -r requirements.txt


## Licenses
All code not otherwise specified is Copyright 2013 Seattle Node.js.
Released under the [MIT](./LICENSE.txt) License.

* Forked from [Jekyll Bootstrap](http://jekyllbootstrap.com) under
  [MIT](http://opensource.org/licenses/MIT) license.

* [jQuery][jquery] is Copyright jQuery Foundation and licensed under the
  [MIT](https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license.

* [Twitter Bootstrap][bootstrap] is Copyright Twitter, Inc. and licensed under
  the [Apache v2.0](https://github.com/twitter/bootstrap/blob/master/LICENSE)
  license.

[bootstrap]: https://github.com/twitter/bootstrap
[jquery]: https://github.com/jquery/jquery
