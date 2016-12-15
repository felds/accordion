# felds-accordion

A vertical accordion web component.

# Installation

Using bower:
```sh
bower install https://github.com/felds/accordion.git
```

# Usage

Add the [webcomponents polyfill](https://cdnjs.com/libraries/webcomponentsjs) to the <head> of the HTML document:
```html
<head>
  <!-- ... -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.23/webcomponents.min.js" integrity="sha256-zLlSfatOBSEd2c1AbcTLNKOyEZN0ktWbNVgSGCIFYL8=" crossorigin="anonymous"></script>
</head>
```

Use the component:
```html
<felds-accordion slide-selector=".card">
  <div class="column">
    <div class="card">
      <!-- your content here -->
    </div>
  </div>
</felds-accordion>
```
