/**
 * Membuat fungsi warna_hantu
 * fungsi dipanggil tanpa argumen apapun -> warna_hantu().
 * fungsi tersebut akan menghasilkan warna acak "putih", "kuning", "ungu" atau "merah" saat dipanggil.
 * ? contoh 1: warna_hantu() --> "merah"
 * ? contoh 2: warna_hantu() --> "putih"
 *
 * ? tips 1:
 * gunakan fungsi Math.random() di javascript untuk mengenerate angka random 0 - < 1,
 * Math.random() Menghasilkan angka seperti 0.123456789 atau 0.987654321
 *
 * ? tips 2:
 * angka yang sudah digenerate random, perlu diubah jadi range tertentu. misal kita ingin mendapatkan nilai 0 - 3
 * di mathematics terdapat rumus: x = floor(random X (max - min + 1)) + min
 * gunakan kode program berikut untuk mendapatkan angka dalam range: Math.floor(Math.random() * (max - min + 1)) + min
 *
 * ? penjelasan:
 * Math.random() Menghasilkan angka acak antara 0 dan < 1 (tidak pernah mencapai 1).
 * Fungsi Math.floor() membulatkan ke bawah (floor → lantai).
 * max: nilai rentang maksimum
 * min: nilai rentang minimum
 * angka ini nanti digunakan sebagai index
 */

// npx vitest run latihan-1/3_warna_hantu
function warna_hantu() {
    const index = Math.floor(Math.random() * (3 - 0 + 1)) + 0
    const colors = ["white", "yellow", "purple", "red"]

    return colors[index]
}

export default warna_hantu
