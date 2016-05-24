# Family.scss
[![Gitter](https://badges.gitter.im/LukyVj/family.scss.svg)](https://gitter.im/LukyVj/family.scss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Family.scss is a set of **20** smart Sass mixins which will help you to manage the style of `:nth-child`'ified elements, in an easy and classy way.


### Install
- Clone the project
- `$ middleman` ( You don't use middleman ? Goto [https://middlemanapp.com/](https://middlemanapp.com/) )

### Alternative install
- `$ npm install family.scss`
- `$ bower install family.scss`

The project is now available on [npm](https://www.npmjs.com/package/family.scss)

### Use the mixins
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
