// ============================================================
//  REGISTER PLUGINS
// ============================================================
Chart.register(ChartDataLabels, window['chartjs-plugin-annotation']);

const BULAN_CONFIG = {
    jan2026: { idx: 0, label: "JANUARI 2026", value: "jan2026" },
    feb2026: { idx: 1, label: "FEBRUARI 2026", value: "feb2026" },
    mar2026: { idx: 2, label: "MARET 2026", value: "mar2026" },
    apr2026: { idx: 3, label: "APRIL 2026", value: "apr2026" },
    mei2026: { idx: 4, label: "MEI 2026", value: "mei2026" },
    jun2026: { idx: 5, label: "JUNI 2026", value: "jun2026" },
    jul2026: { idx: 6, label: "JULI 2026", value: "jul2026" },
    agu2026: { idx: 7, label: "AGUSTUS 2026", value: "agu2026" },
    sep2026: { idx: 8, label: "SEPTEMBER 2026", value: "sep2026" },
    okt2026: { idx: 9, label: "OKTOBER 2026", value: "okt2026" },
    nov2026: { idx: 10, label: "NOVEMBER 2026", value: "nov2026" },
    des2026: { idx: 11, label: "DESEMBER 2026", value: "des2026" },
};

const database = {

    manufacturing: [
        { nama: "Krisnatianto Tanjung", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Maman Supriyatna", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Aris Setiawan", submit: [0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Moh. Rizal Setia Bangun", submit: [0, 0, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Joko Mardiono", submit: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Mukhlisin", submit: [0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Mudzakir", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Nugroho Dwi Cahyo", submit: [0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Sentot", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Janu Wiyono", submit: [0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Febi Giantika Ramdani", submit: [0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Prasetiyo", submit: [0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Yoga Fajar Asidiq", submit: [0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Abdul Aziz", submit: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Agung Dhesca Permana Putra", submit: [0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Didih Munaeji", submit: [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Agus Widodo", submit: [0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Febri Fani Rizawanto", submit: [0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Ngadino", submit: [0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Herwanto", submit: [0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Bangun Soleh Saputra", submit: [0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Nur Holik", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Yuniar Dwi Utomo", submit: [0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Asnawi", submit: [0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Imam Setyono", submit: [0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Muhammad Sarifudin", submit: [0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Yudha Yuniar Dinanta", submit: [0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Nanang Sunaryo", submit: [0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Khumaedi", submit: [0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Santo", submit: [0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Haryanto", submit: [0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Mariyoto", submit: [0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Andrian Kurniawan", submit: [0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Aditya Lesmana", submit: [0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Ahmad Mukhalit", submit: [0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Hendri", submit: [0, 0, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Arif Miftakhul Huda", submit: [0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Iqbal Ikhfani Azis", submit: [0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Mulyadi", submit: [0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Oki Sutiawan", submit: [0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Ramdhan Eko Prasetyo", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Dedi Gunawan", submit: [0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Sunarjo", submit: [0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Sukarna", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Wartoyo", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Budiman", submit: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Aan Nurdianto", submit: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Nurokhman", submit: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Heru", submit: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Bahtiar Anwar", submit: [0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Edy Winarto", submit: [0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Sriroji Khozani", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Ramadhani Luthfi Muktafi", submit: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Deni Prasetyo", submit: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Triswiyanto", submit: [0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Agus Pebrianto", submit: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Dwi Purwanto", submit: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Agung Kristiawan Riyo Pambudi", submit: [0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Tobroni", submit: [0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Asep Purwanto", submit: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Wahyono", submit: [0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Dedi Antoni", submit: [0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Hartono", submit: [0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Arifin Yulianto", submit: [0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Rasito", submit: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Sunari", submit: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Widiantoro", submit: [0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Aditya Pratama", submit: [0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Kasmanto", submit: [0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Muslim", submit: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Arif Maulana", submit: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Agus Setyo", submit: [0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Hermanto", submit: [0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Irfanudin", submit: [0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Purwanto", submit: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Umar Widodo", submit: [0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Ade Dermawan", submit: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Agus Adi Subarudin", submit: [0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Defri Satria", submit: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Idris Pratama", submit: [0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Abdul Imam Latif", submit: [0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Tursinah", submit: [0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Yusuf Ismail", submit: [0, 0, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Nur Hidayat", submit: [0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Karno Tri Widodo", submit: [0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Supriyadi", submit: [0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Abdul Mahmud", submit: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Bangkit Saputra", submit: [0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Rudi Hartono", submit: [0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Berlian Syah Putra", submit: [0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Mochammad Muhfidin", submit: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "M Candra Zuliyanto", submit: [0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Tri Sutrisna", submit: [0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Rizki Pratama", submit: [0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Yasodik", submit: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Nanang Sukana", submit: [0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Suratmo", submit: [0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Pratono", submit: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Didin Jamjudin", submit: [0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Rochmadi", submit: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Warokhim", submit: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Noval Andika Bayo", submit: [0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Andri Darmanto", submit: [0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Andi Romiadi", submit: [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Juwarso", submit: [0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Hendriansyah", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Slamet Haryono", submit: [0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Dedik Irawan", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Oky Megakusuma", submit: [0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Sarwoko", submit: [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Nurwakhidin", submit: [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Daryono", submit: [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Rohmad Tulloh Isa", submit: [0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Fatkhul Arif", submit: [0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Indra Surya Fatah", submit: [0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Andrian Tri Anggoro", submit: [0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Mustangin", submit: [0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Satri Yuli Prayogo", submit: [0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Angga Bima Saputra", submit: [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Priyo Sutanto", submit: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Sukaryono", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Sriyanto", submit: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Catur Supriyanto", submit: [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Rizki Ramadhan", submit: [0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Iman", submit: [0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Agung Maulana", submit: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Arif Setia Nugraha", submit: [0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Ade Priyanto", submit: [0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Rosyid Sidiq", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Sugiarto", submit: [0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Haris Fadillah", submit: [0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Dedi Hari Nugroho", submit: [0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Pudiantoro", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Ardima", submit: [0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Yogie Pamungkas Djati", submit: [0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Rendi Ekayadi", submit: [0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Sulaeman", submit: [0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Joko Purwanto", submit: [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Anggi Saputra Jaya", submit: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Ruslan Maulana", submit: [0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Iyan Firmansyah", submit: [0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Ade Purnomo", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Ari Rudi", submit: [0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Dedi Wawan Rianto", submit: [0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Harianto", submit: [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Martono", submit: [0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Mulyono", submit: [0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Danu Tri Yudanto", submit: [0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Dedi Kurniawan", submit: [0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Febri Setiawan", submit: [0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Ito Adiyanto", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Ahmad Farizal", submit: [0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Kusno Guswanto", submit: [0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Setyana Ian Pradibta", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Aby Maulana", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Moch. Kharis", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Yanuar Rendy Firdaus", submit: [0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Mardian Hendrawan", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Ahmad Taufik Hidayat", submit: [0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Didik Priyo Utomo", submit: [0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Arif Purnomo", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Tri Harso", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Indra Gunawan", submit: [0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Maldani", submit: [0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Widhayat", submit: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Seno Setiawan", submit: [0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Nikola Arya Wiratama", submit: [0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Nurul Ma'rufi", submit: [0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    inventory: [
        { nama: "Mochammad Sutopo", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Rifi Prasetyo", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Andi Rustandi", submit: [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Reza Sigit Arishandy", submit: [0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Kaharto", submit: [0, 0, 0, 27, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Muhammad Zein", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Mochamad Ridwan", submit: [0, 0, 0, 34, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Priyanto", submit: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Risdiyanto", submit: [0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Ruli Hermawan", submit: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Sudiono", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Sunardi", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Asep Abdus Salam", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Teguh Tri Winarno", submit: [0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Maula Ubaidillah", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Raka Diva", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Timbul Prasetyo", submit: [0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    quality: [
        { nama: "Nani Suryani", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Labibah Isnaini Choerunissa", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Muhammad Agung Imaduddin", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Hasan Kwindarto", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Muhammad Nurdin", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Muhammad Imaduddin Afifiras", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Luthfi Khairuddin", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Widodo", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Suripto", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Suwandi", submit: [0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Akhmad Arifin", submit: [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Irzani", submit: [0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Toto Pamungkas", submit: [0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Aceng Burhanudin", submit: [0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Sulaeman", submit: [0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Dedy Rianto", submit: [0, 0, 0, 27, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Arif Hendro Untung Triwanto", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Muhamad Isma Riyanto", submit: [0, 0, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Chulam Muhammad Irsyad", submit: [0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Kukuh Prasetyo", submit: [0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Bayu Prakasa", submit: [0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Darmawan", submit: [0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Aditya Dzaki Eko Krisnanto", submit: [0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Rangga Wahyu Danuarif", submit: [0, 0, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Muhammad Rizky Ramadhan", submit: [0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Nova Hery", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Irfan Aldi Rangkuti", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Riki Nurjaman", submit: [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Andika Prihantanto", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Rani Raman Pili", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Briyan Widhianto", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    engineering: [
        { nama: "YDB Advend Purbojati", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Usep Maulana", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Hanif Ega Naufal", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Dedi Prasetyo", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Stefanus Lucky S. Widhipratama", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Ahmad Wahyudin Azzukruf", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Aji Nurseto", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Tri Agung Nugroho", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Chika Nurachmani Choeronnissa", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Berlian Harsono", submit: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Nindya Ayu Maulidita", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Ghalib Fakhrizul Akmal", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Ade Fajar Yogaswara", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Ermi Pujiyati", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Farhanudin", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Sukirno", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Slamet Supriyadi", submit: [0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Lilik Nur Pratomo", submit: [0, 0, 0, 29, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Sri Zuwibhi Hidayat", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    prototype: [
        { nama: "Christian Jaya Djasmin", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Annas Fresti Habibie", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Farkhan Atoillah", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Rizka Syifa Fadhilah", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Aloysius Sutanto Wiratmoko", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Ainun Najib", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Suhardi", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    corporate: [
        { nama: "Asep Muhtar", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Ade Indra Wijaya", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Adzana Ihsan Sukardi", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Derivata Nikko Ardana", submit: [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Akbar Kresna Subagyo", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Aditya Alamsyah", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Muhammad Fakhri Alfath", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Giovanni Satria Baiqunie", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Nabil Al-Fatih Anibbras Nugroho", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Iqbal Rizqulloh", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Muhammad Luthfan Taris", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Vanesha Wijaya", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Shidqanoru Limar Hanif", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Cahyo Prakoso Wishnu Khrisna Moerty", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Reiko Sarah Pradita", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Hendra Marzola", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Vania Zahra Amalia Putri", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Bening Matahari", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Horas Tiopan Sanjaya", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Sandro Nur Rezki", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Haasyir Ibrahim", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ],

    ppc: [
        { nama: "Mohammad Alfin Karim", submit: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Muhammad Rifqi Shodiqin", submit: [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Prita Aulia", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Wina Kartika", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { nama: "Will Yanto Syam", submit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ]
};

// ============================================================
//  MAPPING DIVISI → DEPT
// ============================================================
const mappingDept = {
    "Production Plant 1 Division": [
        { value: "manufacturing", text: "Departemen Manufacturing" },
        { value: "ppc", text: "Departemen Production Planning & Control" }
    ],
    "Corporate Supply Chain Management Division": [
        { value: "inventory", text: "Departemen Inventory & Warehouse Management" }
    ],
    "Corporate Quality Division": [
        { value: "quality", text: "Departemen Quality Control" }
    ],
    "Corporate Engineering Division": [
        { value: "engineering", text: "Departemen Production Engineering" }
    ],
    "Corporate Research & Development Division": [
        { value: "prototype", text: "Departemen Prototype & Testing" },
        { value: "corporate", text: "Departemen Corporate Product R&D" }
    ]
};

// ============================================================
//  DOM REFS
// ============================================================
const bulanSelect = document.getElementById("bulan");
const divisiSelect = document.getElementById("divisi");
const deptSelect = document.getElementById("deptSelect");
const judulDept = document.getElementById("judulDept");
const judulBulan = document.getElementById("judul-bulan");
const searchInput = document.getElementById("searchInput");
const searchCont = document.getElementById("searchContainer");

let chartAll = null;

// ============================================================
//  HELPER: ambil nilai submit bulan aktif
// ============================================================
function getVal(item) {
    const idx = BULAN_CONFIG[bulanSelect.value]?.idx ?? 3;
    const v = item.submit[idx];
    return (v === 0 || v === undefined) ? null : v;
}

// ============================================================
//  UPDATE SUMMARY CARD
// ============================================================
function updateSummary(vals) {
    const valid = vals.filter(v => v !== null);
    const hijau = valid.filter(v => v >= 22).length;
    const merah = valid.filter(v => v < 22).length;
    const kosong = vals.length - valid.length;

    document.getElementById("homeSummary").innerHTML = `
        <div class="summary-item red">
            <span class="s-icon">🔴</span>
            <div><div class="s-num">${merah}</div><div class="s-lbl">Not Achieve</div></div>
        </div>
        <div class="summary-item green">
            <span class="s-icon">🟢</span>
            <div><div class="s-num">${hijau}</div><div class="s-lbl">Achieve</div></div>
        </div>
        <div class="summary-item gray">
            <span class="s-icon">⚪</span>
            <div><div class="s-num">${kosong}</div><div class="s-lbl">Belum Isi</div></div>
        </div>`;
}

// ============================================================
//  JSA WIDGET
// ============================================================
function updateTotalAchievementJSA() {
    let totalOrang = 0;
    let sudahIsi = 0;

    Object.keys(database).forEach(key => {
        database[key].forEach(item => {
            totalOrang++;
            if (getVal(item) !== null) sudahIsi++;
        });
    });

    document.getElementById("jsa-container").style.display = "block";

    const persen = totalOrang ? Math.round((sudahIsi / totalOrang) * 100) : 0;
    document.getElementById("total-jsa-value").textContent = persen + "%";
    document.getElementById("jsa-progress-bar").style.width = persen + "%";
    document.getElementById("jsa-filled").textContent = sudahIsi;
    document.getElementById("jsa-total").textContent = totalOrang;
    document.getElementById("progress-pct-label").textContent = persen + "%";
}

// ============================================================
//  WEEK LABEL PLUGIN
// ============================================================
const weekLabelPlugin = {
    id: 'weekLabel',
    afterDraw(chart) {
        if (chart.options.indexAxis !== 'y') return;
        const { ctx, chartArea: { top }, scales: { x } } = chart;
        ctx.save();
        ctx.fillStyle = "#a855f7";
        ctx.textAlign = "center";
        ctx.font = "bold 12px Inter, sans-serif";
        [{ x: 2.5, label: "Week 1" }, { x: 7.5, label: "Week 2" },
        { x: 14.5, label: "Week 3" }, { x: 21.5, label: "Week 4" },
        { x: 28, label: "Week 5" }]
            .forEach(w => {
                const xPos = x.getPixelForValue(w.x);
                if (xPos >= x.left && xPos <= x.right)
                    ctx.fillText(w.label, xPos, top - 35);
            });
        ctx.restore();
    }
};

// ============================================================
//  RENDER OVERVIEW (semua dept - bar vertikal)
// ============================================================
function renderPerDept() {
    const labels = ["Manufacturing", "Inventory", "Quality Control", "Engineering", "Prototype", "Corporate", "PPC"];
    const keys = ["manufacturing", "inventory", "quality", "engineering", "prototype", "corporate", "ppc"];

    const allVals = [];
    keys.forEach(k => database[k].forEach(i => allVals.push(getVal(i))));
    updateSummary(allVals);
    updateTotalAchievementJSA();

    searchCont.style.display = "none";

    const dataAvg = keys.map(key => {
        const total = database[key].length;
        const filled = database[key].filter(i => getVal(i) !== null).length;
        return total ? Math.round((filled / total) * 100) : 0;
    });

    const canvas = document.getElementById("chart-all");
    canvas.parentElement.style.height = "55vh";
    canvas.style.height = "100%";

    if (chartAll) chartAll.destroy();

    chartAll = new Chart(canvas, {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                data: dataAvg,
                backgroundColor: dataAvg.map(v => v < 100 ? "#f87171" : "#34d399"),
                borderRadius: 10,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true, max: 100,
                    ticks: { color: "#94a3b8", callback: v => v + "%" },
                    grid: { color: "rgba(99,102,241,0.08)" }
                },
                x: {
                    ticks: { color: "#6366f1", maxRotation: 0, minRotation: 0, autoSkip: false, font: { size: 11, weight: 'bold' } },
                    grid: { display: false }
                }
            },
            plugins: {
                legend: { display: false },
                datalabels: {
                    anchor: 'end', align: 'top',
                    color: '#312e81',
                    font: { weight: 'bold', size: 11 },
                    formatter: (v, ctx) => {
                        const key = keys[ctx.dataIndex];
                        const total = database[key].length;
                        const filled = database[key].filter(i => getVal(i) !== null).length;
                        return `${filled}/${total}\n(${v}%)`;
                    }
                }
            }
        }
    });
}

// ============================================================
//  RENDER DETAIL DEPT (horizontal bar)
// ============================================================
function renderAll(dept = "all") {
    if (dept === "all" || dept === "") {
        renderPerDept();
        updateJudul();
        return;
    }

    document.getElementById("jsa-container").style.display = "none";
    searchCont.style.display = "flex";

    const keyword = searchInput.value.toLowerCase();
    const dataGabung = database[dept]
        .filter(item => item.nama.toLowerCase().includes(keyword))
        .map(item => ({ nama: item.nama, persen: getVal(item) }));

    updateSummary(dataGabung.map(d => d.persen));

    const labels = dataGabung.map(o => o.nama);
    const days = dataGabung.map(o => o.persen);
    const canvas = document.getElementById("chart-all");
    const totalH = Math.max(labels.length * 52, 500);

    canvas.parentElement.style.height = totalH + 60 + "px";
    canvas.style.height = totalH + "px";

    if (chartAll) chartAll.destroy();

    chartAll = new Chart(canvas, {
        type: "bar",
        data: {
            labels,
            datasets: [{
                label: "Hari Kerja",
                data: days,
                backgroundColor: days.map(v => {
                    if (v === null) return "rgba(148,163,184,0.15)";
                    return v < 22 ? "#f87171" : "#34d399";
                }),
                borderRadius: 6,
                borderSkipped: false
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            layout: { padding: { top: 60, right: 80, bottom: 10 } },
            scales: {
                x: {
                    position: 'top', min: 0, max: 31,
                    ticks: { color: "#94a3b8", stepSize: 1 },
                    grid: { color: "rgba(99,102,241,0.08)" }
                },
                y: {
                    ticks: { color: "#475569", autoSkip: false, font: { size: 11 } },
                    grid: { display: false }
                }
            },
            plugins: {
                legend: { display: false },
                datalabels: {
                    color: "#312e81",
                    anchor: "end", align: "right",
                    font: { weight: 'bold', size: 11 },
                    formatter: v => {
                        if (v === null || v === undefined) return "";
                        return `${v}d (${Math.min(Math.round((v / 22) * 100), 100)}%)`;
                    }
                },
                annotation: {
                    annotations: {
                        l1: { type: 'line', xMin: 4, xMax: 4, borderColor: 'rgba(168,85,247,0.25)', borderDash: [4, 4] },
                        l2: { type: 'line', xMin: 11, xMax: 11, borderColor: 'rgba(168,85,247,0.25)', borderDash: [4, 4] },
                        l3: { type: 'line', xMin: 18, xMax: 18, borderColor: 'rgba(168,85,247,0.25)', borderDash: [4, 4] },
                        l4: { type: 'line', xMin: 25, xMax: 25, borderColor: 'rgba(168,85,247,0.25)', borderDash: [4, 4] }
                    }
                }
            }
        },
        plugins: [ChartDataLabels, weekLabelPlugin]
    });
}

// ============================================================
//  UPDATE JUDUL + BADGE BULAN
// ============================================================
function updateJudul() {
    const selectedText = deptSelect.options[deptSelect.selectedIndex].text;
    judulDept.textContent = (deptSelect.value === "all")
        ? "All Department — Overview"
        : selectedText + " — Progress";
    judulBulan.textContent = BULAN_CONFIG[bulanSelect.value]?.label ?? bulanSelect.value.toUpperCase();
}

// ============================================================
//  EVENT LISTENERS
// ============================================================
bulanSelect.addEventListener("change", () => {
    searchInput.value = "";
    renderAll(deptSelect.value);
    updateJudul();
});

divisiSelect.addEventListener("change", function () {
    deptSelect.innerHTML = '<option value="all">All Department</option>';
    if (mappingDept[this.value]) {
        mappingDept[this.value].forEach(d => {
            const opt = document.createElement("option");
            opt.value = d.value; opt.text = d.text;
            deptSelect.appendChild(opt);
        });
    }
    searchInput.value = "";
    renderAll("all");
    updateJudul();
});

deptSelect.addEventListener("change", function () {
    searchInput.value = "";
    renderAll(this.value);
    updateJudul();
});

searchInput.addEventListener("input", () => {
    if (deptSelect.value !== "all") renderAll(deptSelect.value);
});

// ============================================================
//  INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
    updateJudul();
    renderPerDept();
});
