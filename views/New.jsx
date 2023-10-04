import React from "react";

export default function New() {
  return (
    <div>
      <form action="/logs" method="POST">
        title : <input type="text" name="title" />
        entry : <textarea rows="3" name="entry" />
        author : <input type="text" name="author" />
        ship is broken ? : <input type="checkbox" name="shipIsBroken" checked />
        <input type="submit" value="create log" />
      </form>
    </div>
  );
}
