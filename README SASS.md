# Handlebars

Sass makes CSS fun again. Sass is an extension of CSS, adding nested rules, variables, mixins, selector inheritance, and more. It's translated to well-formatted, standard CSS using the command line tool or a plugin for your build system.

$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
font: 100% $font-stack;
color: $primary-color;
}

@mixin border-radius($radius) {
-webkit-border-radius: $radius;
-moz-border-radius: $radius;
-ms-border-radius: $radius;
border-radius: $radius;
}

nav {
ul {
margin: 0;
padding: 0;
list-style: none;
}

li { @include border-radius(10px); }

a {
display: block;
padding: 6px 12px;
text-decoration: none;
}
}
