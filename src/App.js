import React from 'react';
import './App.css';
import marked from 'marked'



marked.setOptions({
  breaks: true
});

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      inputText: `
# Header

## Subheading

This is [a link](https://www.wildlifetrusts.org/wildlife-explorer/mammals/european-badger) .

Perhaps you\'d be more interested in seeing some inline code: \`<div>Check out this code</div>\`

Here is a bit more code:

\`\`\`
<h1>Hello, World!</h1>
<p>Welcome to my lovely code block</p>
\`\`\`

Sometimes you might want to include a block-quote, and as Roosevelt once said:
> Markdown is, in a sense, no different from magic.

At this stage in the proceedings, I like to throw in a list of the reasons why badgers are great:

* Snuffling sounds
* Seriously, just look at their cute little faces!
* They look great wearing a monocle

Text can be bold if you think it is **really important**.

And finally, here's a picture of a badger:

![badger shot](https://raw.githubusercontent.com/paul-duvall/website_images/master/badger.jpg)

`
    };
    this.handleUpdateEditor = this.handleUpdateEditor.bind(this);
  }
  
  handleUpdateEditor(e){
    const text = e.target.value;
    this.setState({ inputText: e.target.value });
  }





  
  
  render() {
    return (
      <div id="container">
        <div id="content">
          <div id="header">
            <h1 className="title">Markdown Previewer</h1>
           <p>Learn more about markdown <a href="https://guides.github.com/features/mastering-markdown/" target="_blank" rel="noopener noreferrer">here</a>.</p>
          </div>
          <Editor 
            
            handleUpdateEditor={this.handleUpdateEditor}
            text={this.state.inputText}
          />
          <div id="preview-container">
            <div id="preview-bar">Preview</div>
            <div id="preview" dangerouslySetInnerHTML={{ __html: marked(this.state.inputText) }}></div>
          </div>
         
          
        </div>
      </div>
    );
  }
}



const Editor = (props) => {
  return (
    <div id="editor-container">
      <div id="editor-bar">Editor</div>
      <textarea 
        id="editor"
        rows="20"
        cols="90"
        onKeyUp={props.handleUpdateEditor}>{props.text}</textarea>
    </div>
  );    
};







export default App