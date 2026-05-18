// Register Plugins
Chart.register(ChartDataLabels, window['chartjs-plugin-annotation']);

// ================= DATABASE =================
const database = {
    manufacturing: [
        { nama: "Krisnatianto Tanjung", persen: "" }, { nama: "Maman Supriyatna", persen: "" },
        { nama: "Aris Setiawan", persen: 12 }, { nama: "Moh. Rizal Setia Bangun", persen: 18 },
        { nama: "Joko Mardiono", persen: 10 }, { nama: "Mukhlisin", persen: 9 },
        { nama: "Mudzakir", persen: "" }, { nama: "Nugroho Dwi Cahyo", persen: 12 },
        { nama: "Sentot", persen: "" }, { nama: "Janu Wiyono", persen: 9 },
        { nama: "Febi Giantika Ramdani", persen: 8 }, { nama: "Prasetiyo", persen: 11 },
        { nama: "Yoga Fajar Asidiq", persen: 9 }, { nama: "Abdul Aziz", persen: 10 },
        { nama: "Agung Dhesca Permana Putra", persen: 5 }, { nama: "Didih Munaeji", persen: 3 },
        { nama: "Agus Widodo", persen: 7 }, { nama: "Febri Fani Rizawanto", persen: 5 },
        { nama: "Ngadino", persen: 8 }, { nama: "Herwanto", persen: 7 },
        { nama: "Bangun Soleh Saputra", persen: 8 }, { nama: "Nur Holik", persen: "" },
        { nama: "Yuniar Dwi Utomo", persen: 7 }, { nama: "Asnawi", persen: 6 },
        { nama: "Imam Setyono", persen: 13 }, { nama: "Muhammad Sarifudin", persen: 11 },
        { nama: "Yudha Yuniar Dinanta", persen: 13 }, { nama: "Nanang Sunaryo", persen: 14 },
        { nama: "Khumaedi", persen: 12 }, { nama: "Santo", persen: 11 },
        { nama: "Haryanto", persen: 12 }, { nama: "Mariyoto", persen: 8 },
        { nama: "Andrian Kurniawan", persen: 9 }, { nama: "Aditya Lesmana", persen: 14 },
        { nama: "Ahmad Mukhalit", persen: 12 }, { nama: "Hendri", persen: 18 },
        { nama: "Arif Miftakhul Huda", persen: 11 }, { nama: "Iqbal Ikhfani Azis", persen: 11 },
        { nama: "Mulyadi", persen: 16 }, { nama: "Oki Sutiawan", persen: 12 },
        { nama: "Ramdhan Eko Prasetyo", persen: "" }, { nama: "Dedi Gunawan", persen: 8 },
        { nama: "Sunarjo", persen: 9 }, { nama: "Sukarna", persen: "" },
        { nama: "Wartoyo", persen: "" }, { nama: "Budiman", persen: 10 },
        { nama: "Aan Nurdianto", persen: 10 }, { nama: "Nurokhman", persen: 10 },
        { nama: "Heru", persen: 10 }, { nama: "Bahtiar Anwar", persen: 9 },
        { nama: "Edy Winarto", persen: 8 }, { nama: "Sriroji Khozani", persen: "" },
        { nama: "Ramadhani Luthfi Muktafi", persen: 10 }, { nama: "Deni Prasetyo", persen: 10 },
        { nama: "Triswiyanto", persen: 9 }, { nama: "Agus Pebrianto", persen: 10 },
        { nama: "Dwi Purwanto", persen: 10 }, { nama: "Agung Kristiawan Riyo Pambudi", persen: 8 },
        { nama: "Tobroni", persen: 6 }, { nama: "Asep Purwanto", persen: 10 },
        { nama: "Wahyono", persen: 13 }, { nama: "Dedi Antoni", persen: 7 },
        { nama: "Hartono", persen: 11 }, { nama: "Arifin Yulianto", persen: 24 },
        { nama: "Rasito", persen: 10 }, { nama: "Sunari", persen: 10 },
        { nama: "Widiantoro", persen: 8 }, { nama: "Aditya Pratama", persen: 9 },
        { nama: "Kasmanto", persen: 9 }, { nama: "Muslim", persen: 10 },
        { nama: "Arif Maulana", persen: 10 }, { nama: "Agus Setyo", persen: 9 },
        { nama: "Hermanto", persen: 8 }, { nama: "Irfanudin", persen: 6 },
        { nama: "Purwanto", persen: 10 }, { nama: "Umar Widodo", persen: 6 },
        { nama: "Ade Dermawan", persen: 10 }, { nama: "Agus Adi Subarudin", persen: 9 },
        { nama: "Defri Satria", persen: 10 }, { nama: "Idris Pratama", persen: 9 },
        { nama: "Abdul Imam Latif", persen: 9 }, { nama: "Tursinah", persen: 8 },
        { nama: "Yusuf Ismail", persen: 18 }, { nama: "Nur Hidayat", persen: 8 },
        { nama: "Karno Tri Widodo", persen: 8 }, { nama: "Supriyadi", persen: 8 },
        { nama: "Abdul Mahmud", persen: 10 }, { nama: "Bangkit Saputra", persen: 9 },
        { nama: "Rudi Hartono", persen: 9 }, { nama: "Berlian Syah Putra", persen: 8 },
        { nama: "Mochammad Muhfidin", persen: 10 }, { nama: "M Candra Zuliyanto", persen: 5 },
        { nama: "Tri Sutrisna", persen: 7 }, { nama: "Rizki Pratama", persen: 7 },
        { nama: "Yasodik", persen: 10 }, { nama: "Nanang Sukana", persen: 9 },
        { nama: "Suratmo", persen: 7 }, { nama: "Pratono", persen: 10 },
        { nama: "Didin Jamjudin", persen: 8  }, { nama: "Rochmadi", persen: 10 },
        { nama: "Warokhim", persen: 10 }, { nama: "Noval Andika Bayo", persen: 7 },
        { nama: "Andri Darmanto", persen: 5 }, { nama: "Andi Romiadi", persen: 3 },
        { nama: "Juwarso", persen: 5 }, { nama: "Hendriansyah", persen: "" },
        { nama: "Slamet Haryono", persen: 6 }, { nama: "Dedik Irawan", persen: "" },
        { nama: "Oky Megakusuma", persen: 7 }, { nama: "Sarwoko", persen: 4 },
        { nama: "Nurwakhidin", persen: 3 }, { nama: "Daryono", persen: 3 },
        { nama: "Rohmad Tulloh Isa", persen: 8 }, { nama: "Fatkhul Arif", persen: 5 },
        { nama: "Indra Surya Fatah", persen: 7 }, { nama: "Andrian Tri Anggoro", persen: 5 },
        { nama: "Mustangin", persen: 8 }, { nama: "Satri Yuli Prayogo", persen: 6 },
        { nama: "Angga Bima Saputra", persen: 2 }, { nama: "Priyo Sutanto", persen: 1 },
        { nama: "Sukaryono", persen: "" }, { nama: "Sriyanto", persen: 1 },
        { nama: "Catur Supriyanto", persen: 2 }, { nama: "Rizki Ramadhan", persen: 9 },
        { nama: "Iman", persen: 22 }, { nama: "Agung Maulana", persen: 10 },
        { nama: "Arif Setia Nugraha", persen: 6 }, { nama: "Ade Priyanto", persen: 6 },
        { nama: "Rosyid Sidiq", persen: "" }, { nama: "Sugiarto", persen: 8 },
        { nama: "Haris Fadillah", persen: 9 }, { nama: "Dedi Hari Nugroho", persen: 9 },
        { nama: "Pudiantoro", persen: "" }, { nama: "Ardima", persen: 9 },
        { nama: "Yogie Pamungkas Djati", persen: 7 }, { nama: "Rendi Ekayadi", persen: 8 },
        { nama: "Sulaeman", persen: 5 }, { nama: "Joko Purwanto", persen: 4 },
        { nama: "Anggi Saputra Jaya", persen: 10 }, { nama: "Ruslan Maulana", persen: 11 },
        { nama: "Iyan Firmansyah", persen: 22 }, { nama: "Ade Purnomo", persen: "" },
        { nama: "Ari Rudi", persen: 8 }, { nama: "Dedi Wawan Rianto", persen: 9 },
        { nama: "Harianto", persen: 4 }, { nama: "Martono", persen: 8 },
        { nama: "Mulyono", persen: 13 }, { nama: "Danu Tri Yudanto", persen: 8 },
        { nama: "Dedi Kurniawan", persen: 7 }, { nama: "Febri Setiawan", persen: 8 },
        { nama: "Ito Adiyanto", persen: "" }, { nama: "Ahmad Farizal", persen: 8 },
        { nama: "Kusno Guswanto", persen: 7 }, { nama: "Setyana Ian Pradibta", persen: "" },
        { nama: "Aby Maulana", persen: "" }, { nama: "Moch. Kharis", persen: "" },
        { nama: "Yanuar Rendy Firdaus", persen: 11 }, { nama: "Mardian Hendrawan", persen: "" },
        { nama: "Ahmad Taufik Hidayat", persen: 7 }, { nama: "Didik Priyo Utomo", persen: 6 },
        { nama: "Arif Purnomo", persen: "" }, { nama: "Tri Harso", persen: "" },
        { nama: "Indra Gunawan", persen: 5 }, { nama: "Maldani", persen: 6 },
        { nama: "Widhayat", persen: 10 }, { nama: "Seno Setiawan", persen: 5 },
        { nama: "Nikola Arya Wiratama", persen: 6 }, { nama: "Nurul Ma’rufi", persen: 7 }
    ],
    inventory: [
        { nama: "Mochammad Sutopo", persen: "" }, { nama: "Rifi Prasetyo", persen: "" },
        { nama: "Andi Rustandi", persen: 4 }, { nama: "Reza Sigit Arishandy", persen: 16 },
        { nama: "Kaharto", persen: 27 }, { nama: "Muhammad Zein", persen: "" },
        { nama: "Mochamad Ridwan", persen: 34 }, { nama: "Priyanto", persen: 1 },
        { nama: "Risdiyanto", persen: 23 }, { nama: "Ruli Hermawan", persen: 1 },
        { nama: "Sudiono", persen: "" }, { nama: "Sunardi", persen: "" },
        { nama: "Asep Abdus Salam", persen: "" }, { nama: "Teguh Tri Winarno", persen: 31 },
        { nama: "Maula Ubaidillah", persen: "" }, { nama: "Raka Diva", persen: "" },
        { nama: "Timbul Prasetyo", persen: 12 }
    ],
    quality: [
        { nama: "Nani Suryani", persen: "" }, { nama: "Labibah Isnaini Choerunissa", persen: "" },
        { nama: "Muhammad Agung Imaduddin", persen: "" }, { nama: "Hasan Kwindarto", persen: "" },
        { nama: "Muhammad Nurdin", persen: "" }, { nama: "Muhammad Imaduddin Afifiras", persen: "" },
        { nama: "Luthfi Khairuddin", persen: "" }, { nama: "Widodo", persen: "" },
        { nama: "Suripto", persen: "" }, { nama: "Suwandi", persen: 7 },
        { nama: "Akhmad Arifin", persen: 2 }, { nama: "Irzani", persen: 15 },
        { nama: "Toto Pamungkas", persen: 20 }, { nama: "Aceng Burhanudin", persen: 19 },
        { nama: "Sulaeman", persen: 6 }, { nama: "Dedy Rianto", persen: 27 },
        { nama: "Arif Hendro Untung Triwanto", persen: "" }, { nama: "Muhamad Isma Riyanto", persen: 18 },
        { nama: "Chulam Muhammad Irsyad", persen: 20 }, { nama: "Kukuh Prasetyo", persen: 17 },
        { nama: "Bayu Prakasa", persen: 20 }, { nama: "Darmawan", persen: 14 },
        { nama: "Aditya Dzaki Eko Krisnanto", persen: 17 }, { nama: "Rangga Wahyu Danuarif", persen: 18 },
        { nama: "Muhammad Rizky Ramadhan", persen: 12 }, { nama: "Nova Hery", persen: "" },
        { nama: "Irfan Aldi Rangkuti", persen: "" }, { nama: "Riki Nurjaman", persen: 2 },
        { nama: "Andika Prihantanto", persen: "" }, { nama: "Rani Raman Pili", persen: "" },
        { nama: "Briyan Widhianto", persen: "" }
    ],
    engineering: [
        { nama: "YDB Advend Purbojati", persen: "" }, { nama: "Usep Maulana", persen: "" },
        { nama: "Hanif Ega Naufal", persen: "" }, { nama: "Dedi Prasetyo", persen: "" },
        { nama: "Stefanus Lucky S. Widhipratama", persen: "" }, { nama: "Ahmad Wahyudin Azzukruf", persen: "" },
        { nama: "Aji Nurseto", persen: "" }, { nama: "Tri Agung Nugroho", persen: "" },
        { nama: "Chika Nurachmani Choeronnissa", persen: "" }, { nama: "Berlian Harsono", persen: 1 },
        { nama: "Nindya Ayu Maulidita", persen: "" }, { nama: "Ghalib Fakhrizul Akmal", persen: "" },
        { nama: "Ade Fajar Yogaswara", persen: "" }, { nama: "Ermi Pujiyati", persen: "" },
        { nama: "Farhanudin", persen: "" }, { nama: "Sukirno", persen: "" },
        { nama: "Slamet Supriyadi", persen: 22 }, { nama: "Lilik Nur Pratomo", persen: 29 },
        { nama: "Sri Zuwibhi Hidayat", persen: "" }
    ],
    prototype: [
        { nama: "Christian Jaya Djasmin", persen: "" }, { nama: "Annas Fresti Habibie", persen: "" },
        { nama: "Farkhan Atoillah", persen: "" }, { nama: "Rizka Syifa Fadhilah", persen: "" },
        { nama: "Aloysius Sutanto Wiratmoko", persen: "" }, { nama: "Ainun Najib", persen: "" },
        { nama: "Suhardi", persen: "" }
    ],
    corporate: [
        { nama: "Asep Muhtar", persen: "" }, { nama: "Ade Indra Wijaya", persen: "" },
        { nama: "Adzana Ihsan Sukardi", persen: "" }, { nama: "Derivata Nikko Ardana", persen: 2 },
        { nama: "Akbar Kresna Subagyo", persen: "" }, { nama: "Aditya Alamsyah", persen: "" },
        { nama: "Muhammad Fakhri Alfath", persen: "" }, { nama: "Giovanni Satria Baiqunie", persen: "" },
        { nama: "Nabil Al-Fatih Anibbras Nugroho", persen: "" }, { nama: "Iqbal Rizqulloh", persen: "" },
        { nama: "Muhammad Luthfan Taris", persen: "" }, { nama: "Vanesha Wijaya", persen: "" },
        { nama: "Shidqanoru Limar Hanif", persen: "" }, { nama: "Cahyo Prakoso Wishnu Khrisna Moerty", persen: "" },
        { nama: "Reiko Sarah Pradita", persen: "" }, { nama: "Hendra Marzola", persen: "" },
        { nama: "Vania Zahra Amalia Putri", persen: "" }, { nama: "Bening Matahari", persen: "" },
        { nama: "Horas Tiopan Sanjaya", persen: "" }, { nama: "Sandro Nur Rezki", persen: "" },
        { nama: "Haasyir Ibrahim", persen: "" }
    ],
    ppc: [
        { nama: "Mohammad Alfin Karim", persen: 1 }, { nama: "Muhammad Rifqi Shodiqin", persen: 2 },
        { nama: "Prita Aulia", persen: "" }, { nama: "Wina Kartika", persen: "" },
        { nama: "Will Yanto Syam", persen: "" }
    ]
};

let chartAll;

const weekLabelPlugin = {
    id: 'weekLabel',
    afterDraw(chart) {
        if (chart.options.indexAxis !== 'y') return;
        const { ctx, chartArea: { top }, scales: { x } } = chart;
        ctx.save();
        ctx.fillStyle = "#fbbf24";
        ctx.textAlign = "center";
        ctx.font = "bold 12px sans-serif";
        const weeks = [
            { x: 2.5, label: "Week 1" }, { x: 7.5, label: "Week 2" },
            { x: 14.5, label: "Week 3" }, { x: 21.5, label: "Week 4" },
            { x: 28, label: "Week 5" }
        ];
        weeks.forEach(w => {
            const xPos = x.getPixelForValue(w.x);
            if (xPos >= x.left && xPos <= x.right) {
                ctx.fillText(w.label, xPos, top - 35);
            }
        });
        ctx.restore();
    }
};

// ================= FUNGSI JSA =================
function updateTotalAchievementJSA() {
    let totalPersen = 0;
    let totalCount = 0;
    const keys = Object.keys(database);

    keys.forEach(key => {
        database[key].forEach(item => {
            if (item.persen !== "" && item.persen !== null) {
                let persenOrang = (Number(item.persen) / 22) * 100;
                totalPersen += persenOrang;
                totalCount++;
            }
        });
    });

    const jsaContainer = document.getElementById("jsa-container");
    const jsaValue = document.getElementById("total-jsa-value");

    if (totalCount > 0) {
        let rataRata = Math.round(totalPersen / totalCount);
        if (jsaValue) jsaValue.textContent = rataRata + "%";
        if (jsaContainer) jsaContainer.style.display = "block";
    } else {
        if (jsaContainer) jsaContainer.style.display = "none";
    }
}

// ================= RENDER PER DEPARTEMEN (VERTIKAL) =================
function renderPerDept() {
    const labels = ["Manufacturing", "Inventory", "Quality Control", "Engineering", "Prototype", "Corporate", "PPC"];
    const keys = ["manufacturing", "inventory", "quality", "engineering", "prototype", "corporate", "ppc"];

    let allValues = [];
    keys.forEach(k => database[k].forEach(i => allValues.push(i.persen)));
    updateSummary(allValues);

    updateTotalAchievementJSA();

    const dataAvg = keys.map(key => {
        const vals = database[key]
            .filter(i => i.persen !== "")
            .map(i => (Number(i.persen) / 22) * 100);

        return vals.length ? Math.round(vals.reduce((a, b) => a + b) / vals.length) : 0;
    });

    const canvas = document.getElementById("chart-all");
    canvas.parentElement.style.height = "50vh";
    canvas.style.height = "100%";

    if (chartAll) chartAll.destroy();

    chartAll = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                data: dataAvg,
                backgroundColor: dataAvg.map(v => v < 100 ? "#ef4444" : "#22c55e"),
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: "white",
                        callback: (v) => v + "%"
                    },
                    grid: { color: "rgba(255,255,255,0.1)" }
                },
                x: { ticks: { color: "white", maxRotation: 0, minRotation: 0, autoSkip: false, font: { size: 10 } }, grid: { display: false } }
            },
            plugins: {
                legend: { display: false },
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    color: 'white',
                    font: { weight: 'bold' },
                    formatter: (v) => {
                        if (!v) return "";

                        const persen = Math.min(Math.round((v / 22) * 100), 100);

                        return `${v}d (${persen}%)`;
                    }
                }
            }
        }
    });
}

// ================= RENDER DETAIL (HORIZONTAL) =================
function renderAll(dept = "all") {
    const jsaContainer = document.getElementById("jsa-container");

    if (dept === "all" || dept === "") {
        renderPerDept();
        return;
    }

    if (jsaContainer) jsaContainer.style.display = "none";

    let dataGabung = database[dept].map(item => ({
        nama: item.nama,
        persen: (item.persen === "" || item.persen === null) ? null : Number(item.persen)
    }));

    updateSummary(dataGabung.map(d => d.persen));

    const labels = dataGabung.map(o => o.nama);
    const days = dataGabung.map(o => o.persen);

    const canvas = document.getElementById("chart-all");
    const rowHeight = 70;
    canvas.parentElement.style.height = "310vh";
    const totalHeight = Math.max(labels.length * rowHeight, 500);
    canvas.style.height = totalHeight + "px";

    if (chartAll) chartAll.destroy();

    chartAll = new Chart(canvas, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: "Working Days",
                data: days,
                backgroundColor: days.map((v) => {
                    if (v === null) return "rgba(255,255,255,0.05)";
                    return v < 22 ? "#ef4444" : "#22c55e";
                }),
                borderRadius: 4
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            layout: { padding: { top: 60, right: 50 } },
            scales: {
                x: { position: 'top', min: 0, max: 31, ticks: { color: "white", stepSize: 1 }, grid: { color: "rgba(255,255,255,0.1)" } },
                y: { ticks: { color: "white", autoSkip: false, font: { size: 10 } }, grid: { display: false } }
            },
            plugins: {
                legend: { display: false },
                datalabels: {
                    color: "white", anchor: "end", align: "right",
                    font: { weight: 'bold', size: 12 },
                    layout: {
                        padding: {
                            left: 20,
                            top: 60,
                            right: 50
                        }
                    },
                    formatter: (v) => {
                        if (!v) return "";

                        const persen = Math.min(Math.round((v / 22) * 100), 100);

                        return `${v}d (${persen}%)`;
                    }
                },
                annotation: {
                    annotations: {
                        l1: { type: 'line', xMin: 4, xMax: 4, borderColor: 'rgba(255,255,0,0.2)', borderDash: [4, 4] },
                        l2: { type: 'line', xMin: 11, xMax: 11, borderColor: 'rgba(255,255,0,0.2)', borderDash: [4, 4] },
                        l3: { type: 'line', xMin: 18, xMax: 18, borderColor: 'rgba(255,255,0,0.2)', borderDash: [4, 4] },
                        l4: { type: 'line', xMin: 25, xMax: 25, borderColor: 'rgba(255,255,0,0.2)', borderDash: [4, 4] }
                    }
                }
            }
        },
        plugins: [ChartDataLabels, weekLabelPlugin]
    });
}

// ================= UTILS =================
function updateSummary(data) {
    const validValues = data.filter(v => v !== null && v !== "");
    const merah = validValues.filter(v => Number(v) < 22).length;
    const hijau = validValues.filter(v => Number(v) >= 22).length;
    const summaryEl = document.getElementById("homeSummary");
    if (summaryEl) {
        summaryEl.innerHTML = `<span style="color:#ff4d4d; font-weight:bold">🔴 Not Achieve : ${merah} orang</span> | <span style="color:#2ecc71; font-weight:bold">🟢 Achieve : ${hijau} orang</span>`;
    }
}

// ================= DROPDOWNS =================
const divisiSelect = document.getElementById("divisi");
const deptSelect = document.getElementById("deptSelect");
const judulDept = document.getElementById("judulDept");
const bulanSelect = document.getElementById("bulan");
const judulBulan = document.getElementById("judul-bulan");

const mappingDept = {
    "Production Plant 1 Division": [
        { value: "manufacturing", text: "Departement Manufacturing" },
        { value: "ppc", text: "Departement Production Planning & Control" }
    ],
    "Corporate Supply Chain Management Division": [{ value: "inventory", text: "Departement Inventory & Warehouse Management" }],
    "Corporate Quality Division": [{ value: "quality", text: "Departement Quality Control" }],
    "Corporate Engineering Division": [{ value: "engineering", text: "Departement Production Engineering" }],
    "Corporate Research & Development Division": [
        { value: "prototype", text: "Departement Prototype & Testing" },
        { value: "corporate", text: "Departement Corporate Product Research & Development" }
    ]
};

divisiSelect.addEventListener("change", function () {
    deptSelect.innerHTML = '<option value="all">All Department</option>';
    if (mappingDept[this.value]) {
        mappingDept[this.value].forEach(dept => {
            const option = document.createElement("option");
            option.value = dept.value; option.text = dept.text;
            deptSelect.appendChild(option);
        });
    }
    renderAll("all");
    updateJudul();
});

deptSelect.addEventListener("change", function () {
    renderAll(this.value);
    updateJudul();
});

bulanSelect.addEventListener("change", function () {
    judulBulan.textContent = this.value.toUpperCase();
});

function updateJudul() {
    const selectedText = deptSelect.options[deptSelect.selectedIndex].text;
    if (judulDept) judulDept.textContent = (deptSelect.value === "all") ? "All Department - Progress" : selectedText + " - Progress";
}

// Load Awal
document.addEventListener("DOMContentLoaded", () => {
    if (judulBulan) judulBulan.textContent = bulanSelect.value.toUpperCase();
    renderPerDept();
    updateJudul();
});

function updateTotalAchievementJSA() {
    let totalPersen = 0;
    let totalCount = 0;
    const keys = Object.keys(database);

    keys.forEach(key => {
        database[key].forEach(item => {
            if (item.persen !== "" && item.persen !== null) {
                let persenOrang = (Number(item.persen) / 22) * 100;
                totalPersen += persenOrang;
                totalCount++;
            }
        });
    });

    const jsaContainer = document.getElementById("jsa-container");
    const jsaValue = document.getElementById("total-jsa-value");
    const jsaBar = document.getElementById("jsa-progress-bar");

    if (totalCount > 0) {
        let rataRata = Math.min(Math.round(totalPersen / totalCount), 100);

        if (jsaValue) jsaValue.textContent = rataRata + "%";
        if (jsaBar) jsaBar.style.width = rataRata + "%";

        if (jsaContainer) {
            jsaContainer.style.display = "block";
            jsaContainer.style.opacity = "0";
            setTimeout(() => jsaContainer.style.opacity = "1", 50);
        }
    } else {
        if (jsaContainer) jsaContainer.style.display = "none";
    }
}

