import request from "supertest";
import app from "../config/app";

describe("SignUo Routes", () => {
  test("Should return an account on sucess", async () => {
    await request(app)
      .post("/api/signup")
      .send({
          name:'Wellington',
          email: 'wellington.gonzalez@hotmail.com',
          password: '123',
          passwordConfirmation: '123'
      })
      .expect(200)
  });
});
