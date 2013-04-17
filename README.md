# Seattle Node.js Site


# Development
## Setup
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

* Forked from [Jekyll Bootstrap](http://jekyllbootstrap.com) under
  [MIT](http://opensource.org/licenses/MIT) license.
