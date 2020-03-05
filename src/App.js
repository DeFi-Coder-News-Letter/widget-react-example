import React from 'react';
import './App.css';

const totleWidgetNodeId = 'totle-widget';

export default class ReactApp extends React.Component {

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
      window.TotleWidget.default.run(widgetConfig, document.getElementById(totleWidgetNodeId));
    };
    loadWidget();
  }

  render() {
    return (
      <div>
        <h1>Totle Widget React usage example</h1>
        <div id={totleWidgetNodeId}/>
        <h2>Additional content</h2>
      </div>
    )
  }
}
