import { faker } from "@faker-js/faker";
import * as voucherService from "../../src/services/voucherService.js";

function createVoucher() {
  return {
    code: faker.random.alphaNumeric(5),
    discount: faker.random.numeric(2),
  };
}

describe("voucherService test suite", () => {
  it("should be always very positive", () => {
    expect("didi").toBe("didi");
  });
});
