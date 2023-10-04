import React from "react";
import moment from "moment/moment";

const Show = ({ log }) => (
  <div>
    <link rel="stylesheet" type="text/css" href="/public/css/show.css" />
    <div className="log-details">
      <h1 className="log-title">{log.title}</h1>
      <p className="log-date">
        Date: {moment(log.createdAt, "MM/DD/YY").format("MM/DD/YY")}
      </p>
      <p className="log-time">
        Time: {moment(log.createdAt, "h:mm a").format("h:mm a")}
      </p>
    </div>
    <div className="log-entry">
      <p>{log.entry}</p>
    </div>
    <div className="log-author">
      <p>Author: {log.author}</p>
    </div>
    <div className="log-actions">
      <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
        <input type="submit" value="Delete Log" className="delete-button" />
      </form>
      <a href={`/logs/${log._id}/edit`} className="edit-link">Edit Log</a>
    </div>
  </div>
);

export default Show;
