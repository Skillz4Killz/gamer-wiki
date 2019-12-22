import React from "react";
import Crate from "@widgetbot/crate";

export default class MyApp extends React.Component {
  async componentDidMount() {
    let result = await import("@widgetbot/crate");
    const Crate = await result.cdn();

    const myCrate = new Crate({
      server: "223909216866402304",
      channel: "328662219086888961",
      shard: "https://disweb.dashflo.net"
    });
  }

  render() {
    return <div></div>;
  }
}
