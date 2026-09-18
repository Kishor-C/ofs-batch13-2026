/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import * as AccUtils from "../accUtils";
import * as ko from "knockout";
import * as Bootstrap from "ojs/ojbootstrap";
import "oj-c/input-text";
import "ojs/ojknockout";
import { RESTDataProvider } from "ojs/ojrestdataprovider";
import 'ojs/ojtable';
class DashboardViewModel {
  // data in the view model with string type
  username: ko.Observable<string>;
  // a variable that will store json data
  dataprovider: RESTDataProvider<any, any>;
  constructor() {
    // initialize the dataprovider that sends request to backend
    this.dataprovider = new RESTDataProvider({
      keyAttributes: "id",
      url: "https://jsonplaceholder.typicode.com/users",
      transforms: {
        fetchFirst: {
          request: async (options) => {
            const url = new URL(options.url);
            return new Request(url.href);
          },
          response: async ({ body }) => {
            let data = body;
            return { data }; // JSON data will be destructured here
          },
        },
      },
    });
    // initial value of username
    this.username = ko.observable("Guest");
  }

  /**
   * Optional ViewModel method invoked after the View is inserted into the
   * document DOM.  The application can put logic that requires the DOM being
   * attached here.
   * This method might be called multiple times - after the View is created
   * and inserted into the DOM and after the View is reconnected
   * after being disconnected.
   */
  connected(): void {
    AccUtils.announce("Dashboard page loaded.");
    document.title = "Dashboard";
    // implement further logic if needed
  }

  /**
   * Optional ViewModel method invoked after the View is disconnected from the DOM.
   */
  disconnected(): void {
    // implement if needed
  }

  /**
   * Optional ViewModel method invoked after transition to the new View is complete.
   * That includes any possible animation between the old and the new View.
   */
  transitionCompleted(): void {
    // implement if needed
  }
}

export = DashboardViewModel;
