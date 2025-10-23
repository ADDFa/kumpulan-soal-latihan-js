/**
 * Pada pertemuan keluarga tahunan, keluarga biasanya mencari usia anggota keluarga tertua
 * dan usia anggota keluarga termuda, lalu menghitung selisihnya.
 * Anda akan diberikan array berisi usia semua anggota keluarga, dalam urutan apa pun.
 * Usia akan diberikan dalam bilangan bulat, jadi bayi berusia 5 bulan akan memiliki 'usia' yang ditetapkan 0.
 * Kembalikan array baru dengan [usia termuda, usia tertua, selisih antara usia termuda dan tertua].[]
 */

// npx vitest run test/latihan-2/1_selisih_usia
function diffInAges(ages) {
    let usia_termuda = ages[0]
    let usia_tertua = ages[0]

    for (let i = 0; i <= ages.length; i++) {
        const usia_sekarang = ages[i]

        if (usia_sekarang < usia_termuda) usia_termuda = usia_sekarang
        if (usia_sekarang > usia_tertua) usia_tertua = usia_sekarang
    }

    const selisih_usia = usia_tertua - usia_termuda
    return [usia_termuda, usia_tertua, selisih_usia]
}

export default diffInAges
