import React from "react";

const New = () => (
  <div>
    <link rel="stylesheet" type="text/css" href="/public/css/new.css" />
    <form action="/logs" method="POST" className="log-form">
      <div className="form-field">
        <label>Title:</label>
        <input type="text" name="title" />
      </div>
      <div className="form-field">
        <label>Entry:</label>
        <textarea rows="3" name="entry" />
      </div>
      <div className="form-field">
        <label>Author:</label>
        <input type="text" name="author" />
      </div>
      <div className="form-field">
        <label>Is the ship broken?</label>
        <input type="checkbox" name="shipIsBroken" checked />
      </div>
      <input type="submit" value="Create Log" className="submit-button" />
    </form>
  </div>
);

export default New;
