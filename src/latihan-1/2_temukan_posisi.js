/**
 * Jika diberikan huruf, kembalikan posisinya dalam alfabet.
 * Input :: "a" Output :: "Posisi alfabet: 1"
 * Input :: "c" Output :: "Posisi alfabet: 3"
 * Catatan: Hanya huruf kecil yang diuji.
 */

// npx vitest run latihan-1/2_temukan_posisi
function position(character) {
    const chars = [
        { char_name: "a", position: 1 },
        { char_name: "b", position: 2 },
        { char_name: "c", position: 3 },
        { char_name: "d", position: 4 },
        { char_name: "e", position: 5 },
        { char_name: "f", position: 6 },
        { char_name: "g", position: 7 },
        { char_name: "h", position: 8 },
        { char_name: "i", position: 9 },
        { char_name: "j", position: 10 },
        { char_name: "k", position: 11 },
        { char_name: "l", position: 12 },
        { char_name: "m", position: 13 },
        { char_name: "n", position: 14 },
        { char_name: "o", position: 15 },
        { char_name: "p", position: 16 },
        { char_name: "q", position: 17 },
        { char_name: "r", position: 18 },
        { char_name: "s", position: 19 },
        { char_name: "t", position: 20 },
        { char_name: "u", position: 21 },
        { char_name: "v", position: 22 },
        { char_name: "w", position: 23 },
        { char_name: "x", position: 24 },
        { char_name: "y", position: 25 },
        { char_name: "z", position: 26 }
    ]

    for (let i = 0; i <= chars.length; i++) {
        if (chars[i].char_name === character) {
            return `Posisi alfabet: ${chars[i].position}`
        }
    }
}

export default position
