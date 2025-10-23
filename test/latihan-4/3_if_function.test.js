import { test } from "vitest"
import _if from "../../src/latihan-4/3_if_function"
import { expect } from "vitest"

const fungsi_1 = () => "Fungsi 1 dipanggil"
const fungsi_2 = () => "Fungsi 2 dipanggil"

test.each([
    [true, "Fungsi 1 dipanggil"],
    [false, "Fungsi 2 dipanggil"]
])("Panggil fungsi", (bool, expected) => {
    expect(_if(bool, fungsi_1, fungsi_2)).equal(expected)
})
