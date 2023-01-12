import { rest } from "msw";

import { readFakeData } from "@/__tests__/__mocks__/fakeData";
import { fakeUserReservations } from "@/__tests__/__mocks__/fakeData/userReservations";

const localHost = "http://localhost:3000";

export const handlers = [
  rest.get(`${localHost}/api/shows/:showId`, async (req, res, ctx) => {
    const { fakeShows } = await readFakeData();
    return res(ctx.json({ show: fakeShows[0] }));
  }),
  rest.get(
    `${localHost}/api/users/:userId/reservations`,
    async (req, res, ctx) =>
      res(ctx.json({ userReservations: fakeUserReservations }))
  ),
];
