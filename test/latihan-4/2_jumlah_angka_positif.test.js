import { test } from "vitest"
import positiveSum from "../../src/latihan-4/2_jumlah_angka_positif"
import { expect } from "vitest"

test.each([
    [[1, -4, 7, 12], 20],
    [[10, -1, -6, 5, 3], 18],
    [[0, 0, 0, -1, 1], 1]
])("Jumlah angka positif", (numbers, expected) => {
    expect(positiveSum(numbers)).equal(expected)
})
