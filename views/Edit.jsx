import React from 'react'

export default function Edit({log}) {
  return (
    <div>
       <form action={`/logs/${log._id}?_method=PUT`} method="POST">
        title : <input type="text" name="title" value={log.title}/>
        entry : <textarea rows="3" name="entry" value={log.entry}/>
        author : <input type="text" name="author" value={log.author}/>
        ship is broken ? : <input type="checkbox" name="shipIsBroken" checked />
        <input type="submit" value="change log" />
      </form>
    </div>
  )
}
