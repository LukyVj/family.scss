# Family.scss
[![npm version](https://badge.fury.io/js/family.scss.svg)](https://badge.fury.io/js/family.scss)
[![Bower version](https://badge.fury.io/bo/family.scss.svg)](https://badge.fury.io/bo/family.scss)
[![Build Status](https://travis-ci.org/LukyVj/family.scss.svg?branch=master)](https://travis-ci.org/LukyVj/family.scss)

[![Gitter](https://badges.gitter.im/LukyVj/family.scss.svg)](https://gitter.im/LukyVj/family.scss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

#### Version [v1.0.8](https://github.com/LukyVj/family.scss/releases)

Family.scss is a set of **26** smart Sass mixins which will help you to manage the style of `:nth-child`'ified elements, in an easy and classy way.

Website : [http://lukyvj.github.io/family.scss/](http://lukyvj.github.io/family.scss/)


## Installation

### Regular
- Clone the project
- `$ middleman` ( You don't use middleman ? Goto [https://middlemanapp.com/](https://middlemanapp.com/) )

### Alternative install
- `$ npm install family.scss`
- `$ bower install family.scss`
- `$ diamond install family.scss`
- `gem install family-rails` ([maintained by pzi](https://github.com/pzi/family-rails))

Family.scss on [npm](https://www.npmjs.com/package/family.scss)

## Usage
First of all, import the [Family.scss source file](https://github.com/LukyVj/family.scss/blob/master/source/src/_family.scss) into your project (`@import '~family.scss';` with diamond).

Then you can use the mixins right away on your stylesheets.

Input :
```scss
ul li {
  background: blue;

  @include first(3) {
    background: blue;
  }
}
```

Output :
```sass
ul li {
  background: blue;
}
ul li:nth-child(-n + 3) {
  background: blue;
}

```

### Why only Sass ?
It's true, I did it for Sass, but some awesome contributors extended it to :
- [Stylus](https://github.com/nusususuzu/family.styl)


## Changelogs


### v1.0.8
- Repository consistency | No changes on the lib.


### v1.0.7
- Repository consistency - No big changes on the lib.
- The source `family.scss` file is now on `source/src/_family.scss` instead of `source/src/family.scss`


### v1.0.6
- `each-after()` mixin removed, re-opening [#37](https://github.com/LukyVj/family.scss/issues/37)


### v1.0.5

- `first-child()` mixin added.
- `last-child()` mixin added.
- `each-after()` mixin added, closing [#37](https://github.com/LukyVj/family.scss/issues/37)
- Mention [Holmes.js](https://github.com/Haroenv/holmes) in the about modal.

### v1.0.3

- `first()` mixin now uses `:first-child` if the given parameter is `1`, closing [#10](https://github.com/LukyVj/family.scss/issues/10)
- `n-between()` mixin added, closing [#35](https://github.com/LukyVj/family.scss/issues/35)
- `at-least()`, `at-most()` and `in-between()` quantity queries mixins added, closing [#24](https://github.com/LukyVj/family.scss/issues/24)
- `pair-between()` is now `even
-between()`, closing [#34](https://github.com/LukyVj/family.scss/issues/34)
- `impair-between()` is now `odd-between()`, closing [#34](https://github.com/LukyVj/family.scss/issues/34)
- Source code for the header pattern generator added in the about modal
- Version number added in the footer
- `backdrop-filter` removed from the about page
