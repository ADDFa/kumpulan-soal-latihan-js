import { test } from "vitest"
import getDiscountPrice from "../../src/latihan-3/2_discount"
import { expect } from "vitest"

test.each([
    [100000, 20, 80000],
    [100000, 50, 50000],
    [120000, 27, 87600]
])("Hitung diskon", (price, discountPercent, priceAfterDiscount) => {
    expect(getDiscountPrice(price, discountPercent)).equal(priceAfterDiscount)
})
