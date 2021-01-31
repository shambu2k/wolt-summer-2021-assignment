import { expect } from "chai";
import app from "../app";
import { agent as request } from "supertest";

it('should GET /discovery and validator should return message - "query parameters missing or there are unwanted number of parameters"', async function () {
  const res = await request(app).get("/discovery");
  expect(res.status).to.equal(400);
  expect(res.body).not.to.be.empty;
  expect(res.body.message).not.to.be.empty;
  expect(res.body.message).to.equal(
    "query parameters missing or there are unwanted number of parameters"
  );
});

it('should GET /discovery?lat=20.414 and validator should return message - "query parameters missing or there are unwanted number of parameters"', async function () {
  const res = await request(app).get("/discovery?lat=20.414");
  expect(res.status).to.equal(400);
  expect(res.body).not.to.be.empty;
  expect(res.body.message).not.to.be.empty;
  expect(res.body.message).to.equal(
    "query parameters missing or there are unwanted number of parameters"
  );
});

it('should GET /discovery?lon=-110.414 and validator should return message - "query parameters missing or there are unwanted number of parameters"', async function () {
  const res = await request(app).get("/discovery?lon=-110.414");
  expect(res.status).to.equal(400);
  expect(res.body).not.to.be.empty;
  expect(res.body.message).not.to.be.empty;
  expect(res.body.message).to.equal(
    "query parameters missing or there are unwanted number of parameters"
  );
});

it('should GET /discovery?lon=-110.414&lati=20.1414 and validator should return message - "query parameters are wrong - Checkout this example - /discovery?lat=60.1709&lon=24.941"', async function () {
  const res = await request(app).get("/discovery?lon=-110.414&lati=20.1414");
  expect(res.status).to.equal(400);
  expect(res.body).not.to.be.empty;
  expect(res.body.message).not.to.be.empty;
  expect(res.body.message).to.equal(
    "query parameters are wrong - Checkout this example - /discovery?lat=60.1709&lon=24.941"
  );
});

it('should GET /discovery?longi=-110.414&lat=20.1414 and validator should return message - "query parameters are wrong - Checkout this example - /discovery?lat=60.1709&lon=24.941"', async function () {
  const res = await request(app).get("/discovery?longi=-110.414&lat=20.1414");
  expect(res.status).to.equal(400);
  expect(res.body).not.to.be.empty;
  expect(res.body.message).not.to.be.empty;
  expect(res.body.message).to.equal(
    "query parameters are wrong - Checkout this example - /discovery?lat=60.1709&lon=24.941"
  );
});

it('should GET /discovery?lat=-95.2155&lon=110.1424 and validator should return message - "Invalid Latitude or Longitude passed in request"', async function () {
  const res = await request(app).get("/discovery?lat=-95.2155&lon=110.1424");
  expect(res.status).to.equal(400);
  expect(res.body).not.to.be.empty;
  expect(res.body.message).not.to.be.empty;
  expect(res.body.message).to.equal(
    "Invalid Latitude or Longitude passed in request"
  );
});

it('should GET /discovery?lat=95.2155&lon=110.1424 and validator should return message - "Invalid Latitude or Longitude passed in request"', async function () {
  const res = await request(app).get("/discovery?lat=95.2155&lon=110.1424");
  expect(res.status).to.equal(400);
  expect(res.body).not.to.be.empty;
  expect(res.body.message).not.to.be.empty;
  expect(res.body.message).to.equal(
    "Invalid Latitude or Longitude passed in request"
  );
});

it('should GET /discovery?lat=65.2155&lon=-190.1424 and validator should return message - "Invalid Latitude or Longitude passed in request"', async function () {
  const res = await request(app).get("/discovery?lat=65.2155&lon=-190.1424");
  expect(res.status).to.equal(400);
  expect(res.body).not.to.be.empty;
  expect(res.body.message).not.to.be.empty;
  expect(res.body.message).to.equal(
    "Invalid Latitude or Longitude passed in request"
  );
});

it('should GET /discovery?lat=65.2155&lon=190.1424 and validator should return message - "Invalid Latitude or Longitude passed in request"', async function () {
  const res = await request(app).get("/discovery?lat=65.2155&lon=190.1424");
  expect(res.status).to.equal(400);
  expect(res.body).not.to.be.empty;
  expect(res.body.message).not.to.be.empty;
  expect(res.body.message).to.equal(
    "Invalid Latitude or Longitude passed in request"
  );
});

it('should GET /discovery?lat=-165.2155&lon=-190.1424 and validator should return message - "Invalid Latitude or Longitude passed in request"', async function () {
  const res = await request(app).get("/discovery?lat=-165.2155&lon=-190.1424");
  expect(res.status).to.equal(400);
  expect(res.body).not.to.be.empty;
  expect(res.body.message).not.to.be.empty;
  expect(res.body.message).to.equal(
    "Invalid Latitude or Longitude passed in request"
  );
});
