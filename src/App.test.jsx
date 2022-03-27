import React from "react";
import { mount } from "@cypress/react";
import App from "./App";

it("render App compornent", () => {
    mount(<App />);

    cy.get("p").contains("Hello Vite + React!");
    cy.get("p").contains("Edit App.jsx and save to test HMR updates.")
    cy.contains("count is: 0");

    cy.get("button").click();
    cy.get("button").click();
    cy.get("button").click();

    cy.contains("count is: 3");
})