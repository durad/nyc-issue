import * as chai from "chai";
import * as index from "./../src/index";

const expect = chai.expect;

describe("hello", () => {
  it("rejects with registration validation errors on startup", async () => {
    const res = await index.hello();
    console.log(`Result: ${res}`);
    expect(res).to.be.string;
    expect(res).to.contain("Hello");
  });
});
