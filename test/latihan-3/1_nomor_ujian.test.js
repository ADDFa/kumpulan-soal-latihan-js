import { test } from "vitest"
import isEvenParticipant from "../../src/latihan-3/1_nomor_ujian"
import { expect } from "vitest"

test("cek nomor ujian", () => {
    expect(isEvenParticipant(30)).equal(true)
    expect(isEvenParticipant(31)).equal(false)
    expect(isEvenParticipant(28)).equal(true)
})
