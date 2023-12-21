'use strict';

function Homepage() {
  return (
    <div>
      Welcome user! <br></br><br></br>
      <a href="/cards">Cards Page</a> <br></br>
      <img src="/static/img/balloonicorn.jpg"/>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
