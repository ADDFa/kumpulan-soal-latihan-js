/**
 * Nathan suka bersepeda.
 * Karena Nathan tahu pentingnya menjaga hidrasi, ia minum 0,5 liter air per jam bersepeda.
 * Anda diberi waktu dalam jam dan Anda perlu mengembalikan jumlah liter yang akan diminum Nathan, dibulatkan ke bawah.
 *
 * ? Contoh:
 * - time = 3 ----> litres = 1
 * - time = 6.7---> litres = 3
 * - time = 11.8--> litres = 5
 */

// npx vitest run test/latihan-2/2_tetap_terhidrasi
function litres(time) {
    // karena 1 jam = 0,5 liter
    // maka: liter = jam * 0,5
    // karena dibulatkan kebawah, maka gunkan fungsi Math.floor(liter)

    return Math.floor(time * 0.5)
}

export default litres
