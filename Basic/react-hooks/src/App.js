import React, { Component, useState, useEffect } from 'react';
import { newExpression } from '@babel/types';

const App = () => {
  const[news, setNews] = useState([]);
  const[searchQuery, setSearchQuery] = useState('React');
  const[url, setURL] = useState('http://hn.algolia.com/api/v1/search?query=react')


  const fetchNews = () => {
    fetch(url)
    .then(result => result.json())
    .then(data => setNews(data.hits))
    .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchNews()
  }, [url]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setURL(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
  }

  return(
    <div>
      <h2> News </h2>

      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleChange} />
        <button> Search </button>
      </form>

      {news.map((n,i) => (
        <p key={i}> {n.title} </p>
      ))}
    </div>
  )
};





/*const App = () => {
  const[count, setCount] = useState(0);

useEffect(()=>{
  document.title = `Clicked ${count} times`
})

  const increment = () => {
    setCount(count+1);
  }

  return (
    <div>
      <h1> Hello World !!</h1>
      <button onClick={increment}> 
        Clicked {count} times
      </button>
    </div>   
  );

};*/

/*
class App extends Component{
  
  constructor(){
    super();
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
  
  }

  componentDidMount(){
    document.title = `Clicked ${this.state.count} times`
  }

  componentDidUpdate(){
    document.title = `Clicked ${this.state.count} times`
  }

  increment(){
    this.setState({
      count: this.state.count + 1
    });
  }
  
  render(){
    return (
      <div>
        <h1> Hello World !!</h1>
        <button onClick={this.increment}> 
          Clicked {this.state.count} times
        </button>
      </div>   
    );
  }
}
*/
export default App;
