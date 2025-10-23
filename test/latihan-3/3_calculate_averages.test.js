import { expect } from "vitest"
import { test } from "vitest"
import calculateAverage from "../../src/latihan-3/3_calculate_averages"

test.each([
    [[30, 45, 50, 70, 100], 59],
    [[70, 45, 95, 70, 100], 76],
    [[95, 95, 95, 95, 95], 95]
])("Hitung nilai rata-rata", (scores, expected) => {
    expect(calculateAverage(...scores)).equal(expected)
})
