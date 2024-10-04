import request from "supertest";
import app from "../app";
import { User } from "../models/User";

describe("Testando rotas da API", () => {
  let email = "test@jest.com";
  let password = "1234";

  beforeAll(async () => {
    await User.sync({ force: true });
  });

  it("Deve ping pong", (done) => {
    request(app)
      .get("/ping") //*vai variar de acordo com nossos endpoint
      .then((response) => {
        expect(response.body.pong).toBeTruthy();
        return done();
      });
  });
});
