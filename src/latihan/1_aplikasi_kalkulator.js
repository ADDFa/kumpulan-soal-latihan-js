import { ambilJawaban, clearScreen } from "./functions.js"

// buatlah fungsi untuk menghitung 2 buah angka
// fungsi kali, bagi, tambah dan kurang
function tambah(angka1, angka2) {
    const intAngka1 = parseInt(angka1)
    const intAngka2 = parseInt(angka2)

    return intAngka1 + intAngka2
}

function kurang(angka1, angka2) {
    const intAngka1 = parseInt(angka1)
    const intAngka2 = parseInt(angka2)

    return intAngka1 - intAngka2
}

function kali(angka1, angka2) {
    const intAngka1 = parseInt(angka1)
    const intAngka2 = parseInt(angka2)

    return intAngka1 * intAngka2
}

function bagi(angka1, angka2) {
    const intAngka1 = parseInt(angka1)
    const intAngka2 = parseInt(angka2)

    return intAngka1 / intAngka2
}

async function main() {
    const opsi = await ambilJawaban("Pilih opsi: ")
    const angka1 = await ambilJawaban("Masukkan angka 1: ")
    const angka2 = await ambilJawaban("Masukkan angka 2: ")

    let hasil = 0

    switch (opsi) {
        case "+":
            hasil = tambah(angka1, angka2)
            break

        case "tambah":
            hasil = tambah(angka1, angka2)
            break

        case "-":
            hasil = kurang(angka1, angka2)
            break

        case "*":
            hasil = kali(angka1, angka2)
            break

        case "/":
            hasil = bagi(angka1, angka2)
            break
    }

    clearScreen(`Hasil ${angka1} ${opsi} ${angka2} = ${hasil}`)
    main()
}

main()
