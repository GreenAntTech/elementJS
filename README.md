# elementJS
A simple to use JavaScript library for creating highly composable, reactive and event driven web user interfaces.

*We at Green Ant Solutions would like to give thanks to all those developers who continue to innovate and push the boundaries
of what is possible and more importantly, are not afraid to challenge the status quo.*

## Getting Started
Before getting into the tutorials we recommend that you have some understanding of the following concepts:
1. [JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
2. [Reactivity](https://mobx.js.org/reactions.html#reaction) - since we use MobX as our reactivity engine

### A simple example
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>elementJS - A simple example</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script type="module">
      import { initDocument, registerComponent } from "https://cdn.jsdelivr.net/gh/GreenAntTech/elementJS@main/element.preview.0.0.1.min.js";

      registerComponent('say-hello', (el) => {
        el.extend$({
          render: (props) => {
            el.textContent = 'Hello, ' + props.name;
          }
        })
      })

      const { hello } = await initDocument();
      hello.render$();
    </script>
  </head>
  <body el-is="say-hello" el-id="hello" data-name="Adam"></body>
</html>
```
