/**
 * ? Aturan permainan "Batu, Gunting, Kertas" adalah:
 * Batu mengalahkan Gunting
 * Gunting mengalahkan Kertas,
 * Kertas mengalahkan Batu.
 * Ayo main! Kamu harus kembalikan pemain mana yang menang! Jika seri, kembalikan Seri!
 */

/**
 * ? Contoh:
 * "gunting", "kertas" --> "Pemain 1 menang!"
 * "gunting", "batu" --> "Pemain 2 menang!"
 * "kertas", "kertas" --> "Seri!"
 */

// npx vitest run test/latihan-2/3_gunting_batu_kertas
function suit(p1, p2) {
    function pemenang(pemain) {
        return `Pemain ${pemain} menang!`
    }

    if (p1 === p2) return "Draw!"

    switch (p1) {
        case "gunting":
            switch (p2) {
                case "batu":
                    return pemenang(2)

                case "kertas":
                    return pemenang(1)
            }

        case "batu":
            switch (p2) {
                case "gunting":
                    return pemenang(1)

                case "kertas":
                    return pemenang(2)
            }

        case "kertas":
            switch (p2) {
                case "gunting":
                    return pemenang(2)

                case "batu":
                    return pemenang(1)
            }

        default:
            throw new Error("Input salah.")
    }
}

export default suit
