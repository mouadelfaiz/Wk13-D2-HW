import React from "react";
import moment from "moment/moment";

export default function Show({ log }) {
  return (
    <div>
      <div>
        <h1>{log.title}</h1>
        <p>{moment(log.createdAt, "MM/DD/YY").format("MM/DD/YY")}</p>
        <p>{moment(log.createdAt, "h:mm a").format("h:mm a")}</p>
      </div>
      <div>
        <p>{log.entry}</p>
      </div>
      <div>
        <p>{log.author}</p>
      </div>
      <div>
        <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
          <input type="submit" value="deletelog" />
        </form>
        <a href={`/logs/${log._id}/edit`}>edite log</a>
      </div>
    </div>
  );
}
