import { ambilJawaban, clearScreen } from "./functions.js"

// buatlah fungsi untuk menghitung 2 buah angka
// fungsi kali, bagi, tambah dan kurang

async function main() {
    const opsi = await ambilJawaban("Pilih opsi: ")
    const angka1 = await ambilJawaban("Masukkan angka 1: ")
    const angka2 = await ambilJawaban("Masukkan angka 2: ")

    let hasil = 0

    clearScreen(`Hasil ${angka1} ${opsi} ${angka2} = ${hasil}`)
    main()
}

main()
