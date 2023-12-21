'use strict';

function Homepage() {
  return (
    <div>
      Welcome user! <br></br><br></br>
      <a href="/cards">Cards Page</a> <br></br>
      <img src="/static/img/balloonicorn.jpg" id="balloonicornpic" width="1000" height="1000"/>
    </div>
  )
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
