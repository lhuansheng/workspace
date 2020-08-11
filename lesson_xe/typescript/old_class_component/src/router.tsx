import * as React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import { App } from "./app";
import { About, MembersPage } from "./components";

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <HashRouter>
      <div className="container-fluid">
        {/* 相当于header 切换其他页面这个不会动 */}
        <Route component={App} />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          <Route path="/members" component={MembersPage} />
        </Switch>
      </div>
    </HashRouter>
  );
};