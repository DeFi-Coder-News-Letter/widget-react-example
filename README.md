# Example of using Totle widget inside a React app

### Run the example
Install dependencies by running `npm i` and then start with `npm start`

### How it works
Following piece of code in `index.html` loads the latest widget version:
```
<script>
  !function(){const t=document.createElement("script");t.type="text/javascript";t.crossOrigin;t.src="https://widget.totle.com/latest/dist.js";document.getElementsByTagName("head")[0].appendChild(t)}();
</script>
```

It will create a global `TotleWidget` object that will be accessible from within the app.  
Rendering the widget is done using the `componentDidMount` method:

```
const totleWidgetNodeId = 'totle-widget';

componentDidMount() {
  const loadWidget = () => {
    if(!window.TotleWidget) {
      setTimeout(loadWidget, 200);
      return;
    }
    const widgetConfig = {
      sourceAssetAddress: null,
      sourceAmountDecimal: null,
      destinationAssetAddress: null,
      destinationAmountDecimal: null,
      apiKey: null,
      partnerContractAddress: null,
    }
    window.TotleWidget.default.run(widgetConfig, document.getElementById(totleWidgetNodeId))
  }
  loadWidget();
}
```

Define the element with the same id that is passed to the `run` function of `TotleWidget`
where you want the widget to render

```
render() {
  return (
    <div>
      <h1>Totle Widget React usage example</h1>
      <div id={totleWidgetNodeId}/>
      <h2>Additional content</h2>
    </div>
  )
}
```
