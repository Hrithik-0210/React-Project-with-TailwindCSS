import { Provider } from "react-redux";
import store from "../../utils/store";
import Body from "../Body";
import { StaticRouter } from "react-router-dom/server";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { MENU_DATA } from "../../mocks/search";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Update cart on add items", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("recommend")));
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(20);
});
