import React from 'react'

const Edit = ({log}) => (
  <div>
    <form action={`/logs/${log._id}?_method=PUT`} method="POST" className="log-form">
      <div className="form-field">
        <label>Title:</label>
        <input type="text" name="title" value={log.title}/>
      </div>
      <div className="form-field">
        <label>Entry:</label>
        <textarea rows="3" name="entry" value={log.entry}/>
      </div>
      <div className="form-field">
        <label>Author:</label>
        <input type="text" name="author" value={log.author}/>
      </div>
      <div className="form-field">
        <label>Is the ship broken?</label>
        <input type="checkbox" name="shipIsBroken" checked />
      </div>
      <input type="submit" value="Change Log" className="submit-button" />
    </form>
  </div>
)

export default Edit;
