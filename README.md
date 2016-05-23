# Family.scss
Family.scss is a set of **20** smart Sass mixins which will help you to manage the style of `:nth-child`'ified elements, in an easy and classy way.


### Install
- Clone the project
- `$ middleman` ( You don't use middleman ? Goto [https://middlemanapp.com/](https://middlemanapp.com/) )

### Use the mixins
Input :
```scss
ul li {
  background: blue;

  @include first(3) {
    background: red
  }
}
```

Output :
```sass
ul li {
  background: blue;
}
ul li:nth-child(-n + 3) {
  background: red;
}

```
