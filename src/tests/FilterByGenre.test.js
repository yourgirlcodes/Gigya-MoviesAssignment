import React from "react";
import "whatwg-fetch";
import store from "../store";
import { Provider } from "react-redux";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Genres from "../components/Filter/Genres";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Genre component", () => {
  test("it shows two buttons", async () => {
    act(() => {
      render(
        <Provider store={store}>
          <Genres />
        </Provider>,
        container
      );
    });
    expect(container.textContent).toBe("SubmitClear");
  });
});
