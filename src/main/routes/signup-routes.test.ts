import request from "supertest";
import app from "../config/app";
import { MongoHelper } from "../../infra/db/mongodb/helpers/mongo-helper";

describe("SignUo Routes", () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    const accountCollection = MongoHelper.getCollection("accounts");
    accountCollection.deleteMany({});
  });

  test("Should return an account on sucess", async () => {
    await request(app)
      .post("/api/signup")
      .send({
        name: "Wellington",
        email: "wellington.gonzalez@hotmail.com",
        password: "123",
        passwordConfirmation: "123",
      })
      .expect(200);
  });
});
