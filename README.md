# Family.scss
[![npm version](https://badge.fury.io/js/family.scss.svg)](https://badge.fury.io/js/family.scss)
[![Bower version](https://badge.fury.io/bo/family.scss.svg)](https://badge.fury.io/bo/family.scss)
[![Gitter](https://badges.gitter.im/LukyVj/family.scss.svg)](https://gitter.im/LukyVj/family.scss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Family.scss is a set of **20** smart Sass mixins which will help you to manage the style of `:nth-child`'ified elements, in an easy and classy way.


## Installation

### Regular
- Clone the project
- `$ middleman` ( You don't use middleman ? Goto [https://middlemanapp.com/](https://middlemanapp.com/) )

### Alternative install
- `$ npm install family.scss`
- `$ bower install family.scss`

Family.scss on [npm](https://www.npmjs.com/package/family.scss)

## Usage
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
