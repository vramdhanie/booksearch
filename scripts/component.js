require('path');
const fs = require('fs');
const args = require('yargs').argv;

const componentPath = args.path || 'src/components';
const dir = `${componentPath}/${args.name}`;
if(!fs.existsSync(dir)){
  fs.mkdirSync(dir);
}
let fileName = `${dir}/${args.name}.js`;
const capitalizedName = args.name.charAt(0).toUpperCase() + args.name.slice(1);

const componentContent = `import React, { Component } from 'react';
import './${args.name}.css';

class ${capitalizedName} extends Component {
  render() {
    return (
      <div className="${capitalizedName}"></div>
    )
  }
}

export default ${capitalizedName};
  `;


fs.writeFile(fileName, componentContent, err => {
  if(err) throw err;
  console.log('Component created');
});

const testContent = `import React from 'react';
import ReactDOM from 'react-dom';
import ${capitalizedName} from './${args.name}.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<${capitalizedName} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

`

fileName = `${dir}/${args.name}.test.js`;
fs.writeFile(fileName, testContent, err => {
  if(err) throw err;
  console.log('Test file created');
});

const cssContent = `.${capitalizedName} {

}
`;

fileName = `${dir}/${args.name}.css`;
fs.writeFile(fileName, cssContent, err => {
  if(err) throw err;
  console.log('CSS file created');
});