import request from "supertest";
import app from "../app.js";
import {connect, closeDatabase, clearDatabase} from "./setup.js"
import User from "../models/user.model.js";
import bcrypt from "bcrypt"

beforeAll(async () => {
  await connect();
});

afterEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await closeDatabase();
});

describe("POST /register", () => {

  const userData = {
    userName: "testing for jest",
    email: "jest@test.com",
    password: "123456"
  };

  it("should create a user", async () => {
    const res = await request(app)
      .post("/register")
      .send(userData);

    expect(res.statusCode).toBe(201);
  });

  it("check password is hash or not", async () => {
    await request(app).post("/register").send(userData);
    const user = await User.findOne({email: userData.email});

    const isMatch = await bcrypt.compare(userData.password, user.password);

    expect(isMatch).toBe(true);
    
  })

  it("should not allow duplicate email", async () => {
    await request(app).post("/register").send(userData);

    const res = await request(app)
      .post("/register")
      .send(userData);

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("User already exists");
  });

  it("should generate a token ", async () => {
    const res = await request(app)
    .post("/register")
    .send(userData);
    const cookies = res.headers["set-cookie"];

    expect(cookies).toBeDefined();
  })

  it("should set token in cookies", async () => {
    const res = await request(app)
    .post("/register")
    .send(userData);

    const cookie = res.headers["set-cookie"][0];

     expect(cookie).toContain("token=");
    });

  it("should fail if fields are missing", async () => {
    const res = await request(app)
      .post("/register")
      .send({});

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("All fields required");
  });

});