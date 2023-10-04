import React from "react";

export default function Index({ logs }) {
  return (
    <div>
      {logs.map((log, index) => {
        return (
      <a href={`/logs/${log._id}`} key={index}>    <ul>
      <li>{log.title}</li>
      <li>{log.entry.substring(0, 80)}...</li>
      <li>{log.author}</li>
    </ul></a>
        );
      })}
    </div>
  );
}
