import { expect } from "vitest"
import { test } from "vitest"
import convertToCelsius from "../../src/latihan-4/1_konfersi_suhu_debug"

test.each([
    [50, 10],
    [68, 20],
    [23, -5]
])("Konfersi fahrenheit -> celcius", (temp, expected) => {
    expect(convertToCelsius(temp)).equal(expected)
})
