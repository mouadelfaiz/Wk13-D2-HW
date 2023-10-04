import React from "react";

const Index = ({ logs }) => (
  <div>
    <link rel="stylesheet" type="text/css" href="/public/css/index.css" />
    {logs.map((log, index) => (
      <a href={`/logs/${log._id}`} key={index} className="log-link">
        <div className="log-preview">
          <h2 className="log-title">{log.title}</h2>
          <p className="log-entry">{log.entry.substring(0, 80)}...</p>
          <p className="log-author">Author: {log.author}</p>
        </div>
      </a>
    ))}
  </div>
);

export default Index;
