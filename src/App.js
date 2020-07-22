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
#                 Header

##                Subheading

This is [a link](https://www.themoviedb.org/movie/289-casablanca) .

This is how you do inline code: \`<div>Check out this code</div>\`

Here is multi-line code:

\`\`\`
                  <h1>Hello, World!</h1>
                  <p>Welcome to my lovely code block</p>
\`\`\`

If you would like to include a  block-quote:
> Rick: Ilsa, I'm no good at being noble, but it doesn't take much to see that the problems of three little people don't amount to a hill of beans in this crazy world. Someday you'll understand that.

Here how you would list the Academy Awards won by Casablanca:

*                Outstanding Motion Picture
*                Best Director
*                Best Writing, Screenplay

Text can be bold if you think it is **really important**.

Here is how to show an image:

![badger shot](https://www.telegraph.co.uk/content/dam/films/2016/04/15/casablanca_2408202a_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=450)

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
          <div id="header" className="header">
            <h1 className="title">Markdown Previewer</h1>
           <p className="subtitle">Learn more about markdown <a href="https://guides.github.com/features/mastering-markdown/" target="_blank" rel="noopener noreferrer">here</a>.</p>
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
        cols="86"
        onKeyUp={props.handleUpdateEditor}>{props.text}</textarea>
    </div>
  );    
};







export default App