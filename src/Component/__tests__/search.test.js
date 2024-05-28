import { Provider } from "react-redux";
import store from "../../utils/store";
import Body from "../Body";
import { StaticRouter } from "react-router-dom/server";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { RESTAURANT_DATA } from "../../mocks/search";
import { toBeInTheDocument } from "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

// test("search result on homepage ", () => {
//   const body = render(
//     <StaticRouter>
//       <Provider store={store}>
//         <Body />
//       </Provider>
//     </StaticRouter>
//   );
//   // console.log(body);
//   const searchbtn = body.getByTestId("search-btn");
//   // expect().toBe();
//   console.log(searchbtn);
// });

test("Shimmer on homepage ", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  // console.log(body);
  const shimmerload = body.getByTestId("shimmer");
  expect(shimmerload.children.length).toBe(12);
  // console.log(shimmerload);
});

test("Restaurant on homepage ", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn")));
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(20);
});

// test("search input test on homepage ", async () => {
//   const body = render(
//     <StaticRouter>
//       <Provider store={store}>
//         <Body />
//       </Provider>
//     </StaticRouter>
//   );
//   await waitFor(() => expect(body.getByTestId("search-btn")));
//   const searchBtn = body.getByTestId("search-btn");
//   const input = body.getByTestId("search-input");
//   fireEvent.change(input, {
//     target: { value: "food" },
//   });
//   fireEvent.click(searchBtn);

//   const restlist = body.getByTestId("res-list");
//   expect(restlist.children).toBe(12);
// });
