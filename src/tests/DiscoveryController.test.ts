import { expect } from "chai";
import app from "../app";
import { agent as request } from "supertest";

it("should GET /discovery?lat=24.936465&lon=60.178633 and return a json string as given in preliminary assignment", async function () {
  const res = await request(app).get("/discovery?lat=24.936465&lon=60.178633");
  expect(res.status).to.equal(200);
  expect(res.body).not.to.be.empty;
  expect(res.body.sections).not.to.be.empty;
  expect(res.body.sections).to.be.an("array");
  expect(res.body.sections[0].title).to.equal("Popular Restaurants");
  expect(res.body.sections[0].restaurants).to.be.an("array");
  expect(res.body.sections[1].title).to.equal("New Restaurants");
  expect(res.body.sections[1].restaurants).to.be.an("array");
  expect(res.body.sections[2].title).to.equal("Nearby Restaurants");
  expect(res.body.sections[2].restaurants).to.be.an("array");
});
