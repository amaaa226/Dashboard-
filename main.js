// Register Plugins
Chart.register(ChartDataLabels, window['chartjs-plugin-annotation']);

// ================= DATABASE =================
const database = {
    manufacturing: [
        { nama: "Krisnatianto Tanjung", persen: "" }, { nama: "Maman Supriyatna", persen: "" },
        { nama: "Aris Setiawan", persen: "" }, { nama: "Moh. Rizal Setia Bangun", persen: 6 },
        { nama: "Joko Mardiono", persen: "" }, { nama: "Mukhlisin", persen: "" },
        { nama: "Mudzakir", persen: "" }, { nama: "Nugroho Dwi Cahyo", persen: 2 },
        { nama: "Sentot", persen: "" }, { nama: "Janu Wiyono", persen: "" },
        { nama: "Febi Giantika Ramdani", persen: "" }, { nama: "Prasetiyo", persen: "" },
        { nama: "Yoga Fajar Asidiq", persen: "" }, { nama: "Abdul Aziz", persen: "" },
        { nama: "Agung Dhesca Permana Putra", persen: "" }, { nama: "Didih Munaeji", persen: "" },
        { nama: "Agus Widodo", persen: "" }, { nama: "Febri Fani Rizawanto", persen: "" },
        { nama: "Ngadino", persen: "" }, { nama: "Herwanto", persen: "" },
        { nama: "Bangun Soleh Saputra", persen: "" }, { nama: "Nur Holik", persen: "" },
        { nama: "Yuniar Dwi Utomo", persen: "" }, { nama: "Asnawi", persen: "" },
        { nama: "Imam Setyono", persen: "" }, { nama: "Muhammad Sarifudin", persen: "" },
        { nama: "Yudha Yuniar Dinanta", persen: "" }, { nama: "Nanang Sunaryo", persen: "" },
        { nama: "Khumaedi", persen: "" }, { nama: "Santo", persen: "" },
        { nama: "Haryanto", persen: "" }, { nama: "Mariyoto", persen: "" },
        { nama: "Andrian Kurniawan", persen: "" }, { nama: "Aditya Lesmana", persen: "" },
        { nama: "Ahmad Mukhalit", persen: 2 }, { nama: "Hendri", persen: 4 },
        { nama: "Arif Miftakhul Huda", persen: 4 }, { nama: "Iqbal Ikhfani Azis", persen: 3 },
        { nama: "Mulyadi", persen: 7 }, { nama: "Oki Sutiawan", persen: 3 },
        { nama: "Ramdhan Eko Prasetyo", persen: "" }, { nama: "Dedi Gunawan", persen: "" },
        { nama: "Sunarjo", persen: "" }, { nama: "Sukarna", persen: "" },
        { nama: "Wartoyo", persen: "" }, { nama: "Budiman", persen: "" },
        { nama: "Aan Nurdianto", persen: "" }, { nama: "Nurokhman", persen: "" },
        { nama: "Heru", persen: 4 }, { nama: "Bahtiar Anwar", persen: "" },
        { nama: "Edy Winarto", persen: "" }, { nama: "Sriroji Khozani", persen: "" },
        { nama: "Ramadhani Luthfi Muktafi", persen: "" }, { nama: "Deni Prasetyo", persen: "" },
        { nama: "Triswiyanto", persen: "" }, { nama: "Agus Pebrianto", persen: "" },
        { nama: "Dwi Purwanto", persen: "" }, { nama: "Agung Kristiawan Riyo Pambudi", persen: "" },
        { nama: "Tobroni", persen: "" }, { nama: "Asep Purwanto", persen: "" },
        { nama: "Wahyono", persen: "" }, { nama: "Dedi Antoni", persen: "" },
        { nama: "Hartono", persen: "" }, { nama: "Arifin Yulianto", persen: 10 },
        { nama: "Rasito", persen: "" }, { nama: "Sunari", persen: "" },
        { nama: "Widiantoro", persen: "" }, { nama: "Aditya Pratama", persen: "" },
        { nama: "Kasmanto", persen: "" }, { nama: "Muslim", persen: "" },
        { nama: "Arif Maulana", persen: "" }, { nama: "Agus Setyo", persen: "" },
        { nama: "Hermanto", persen: "" }, { nama: "Irfanudin", persen: "" },
        { nama: "Purwanto", persen: "" }, { nama: "Umar Widodo", persen: "" },
        { nama: "Ade Dermawan", persen: 2 }, { nama: "Agus Adi Subarudin", persen: "" },
        { nama: "Defri Satria", persen: "" }, { nama: "Idris Pratama", persen: "" },
        { nama: "Abdul Imam Latif", persen: "" }, { nama: "Tursinah", persen: "" },
        { nama: "Yusuf Ismail", persen: 3 }, { nama: "Nur Hidayat", persen: "" },
        { nama: "Karno Tri Widodo", persen: "" }, { nama: "Supriyadi", persen: "" },
        { nama: "Abdul Mahmud", persen: "" }, { nama: "Bangkit Saputra", persen: "" },
        { nama: "Rudi Hartono", persen: "" }, { nama: "Berlian Syah Putra", persen: "" },
        { nama: "Mochammad Muhfidin", persen: "" }, { nama: "M Candra Zuliyanto", persen: "" },
        { nama: "Tri Sutrisna", persen: "" }, { nama: "Rizki Pratama", persen: "" },
        { nama: "Yasodik", persen: "" }, { nama: "Nanang Sukana", persen: "" },
        { nama: "Suratmo", persen: "" }, { nama: "Pratono", persen: "" },
        { nama: "Didin Jamjudin", persen: "" }, { nama: "Rochmadi", persen: "" },
        { nama: "Warokhim", persen: "" }, { nama: "Noval Andika Bayo", persen: "" },
        { nama: "Andri Darmanto", persen: "" }, { nama: "Andi Romiadi", persen: 3 },
        { nama: "Juwarso", persen: "" }, { nama: "Hendriansyah", persen: "" },
        { nama: "Slamet Haryono", persen: "" }, { nama: "Dedik Irawan", persen: "" },
        { nama: "Oky Megakusuma", persen: "" }, { nama: "Sarwoko", persen: "" },
        { nama: "Nurwakhidin", persen: "" }, { nama: "Daryono", persen: "" },
        { nama: "Rohmad Tulloh Isa", persen: "" }, { nama: "Fatkhul Arif", persen: "" },
        { nama: "Indra Surya Fatah", persen: "" }, { nama: "Andrian Tri Anggoro", persen: "" },
        { nama: "Mustangin", persen: "" }, { nama: "Satri Yuli Prayogo", persen: "" },
        { nama: "Angga Bima Saputra", persen: "" }, { nama: "Priyo Sutanto", persen: "" },
        { nama: "Sukaryono", persen: "" }, { nama: "Sriyanto", persen: "" },
        { nama: "Catur Supriyanto", persen: "" }, { nama: "Rizki Ramadhan", persen: "" },
        { nama: "Iman", persen: 22 }, { nama: "Agung Maulana", persen: "" },
        { nama: "Arif Setia Nugraha", persen: "" }, { nama: "Ade Priyanto", persen: "" },
        { nama: "Rosyid Sidiq", persen: "" }, { nama: "Sugiarto", persen: "" },
        { nama: "Haris Fadillah", persen: "" }, { nama: "Dedi Hari Nugroho", persen: "" },
        { nama: "Pudiantoro", persen: "" }, { nama: "Ardima", persen: "" },
        { nama: "Yogie Pamungkas Djati", persen: "" }, { nama: "Rendi Ekayadi", persen: "" },
        { nama: "Sulaeman", persen: "" }, { nama: "Joko Purwanto", persen: "" },
        { nama: "Anggi Saputra Jaya", persen: "" }, { nama: "Ruslan Maulana", persen: "" },
        { nama: "Iyan Firmansyah", persen: 15 }, { nama: "Ade Purnomo", persen: "" },
        { nama: "Ari Rudi", persen: "" }, { nama: "Dedi Wawan Rianto", persen: "" },
        { nama: "Harianto", persen: "" }, { nama: "Martono", persen: "" },
        { nama: "Mulyono", persen: 3 }, { nama: "Danu Tri Yudanto", persen: "" },
        { nama: "Dedi Kurniawan", persen: "" }, { nama: "Febri Setiawan", persen: "" },
        { nama: "Ito Adiyanto", persen: "" }, { nama: "Ahmad Farizal", persen: "" },
        { nama: "Kusno Guswanto", persen: "" }, { nama: "Setyana Ian Pradibta", persen: "" },
        { nama: "Aby Maulana", persen: "" }, { nama: "Moch. Kharis", persen: "" },
        { nama: "Yanuar Rendy Firdaus", persen: 11 }, { nama: "Mardian Hendrawan", persen: "" },
        { nama: "Ahmad Taufik Hidayat", persen: 6 }, { nama: "Didik Priyo Utomo", persen: 6 },
        { nama: "Arif Purnomo", persen: "" }, { nama: "Tri Harso", persen: "" },
        { nama: "Indra Gunawan", persen: 5 }, { nama: "Maldani", persen: 6 },
        { nama: "Widhayat", persen: 10 }, { nama: "Seno Setiawan", persen: 22 },
        { nama: "Nikola Arya Wiratama", persen: 6 }, { nama: "Nurul Ma’rufi", persen: 6 }
    ],
    inventory: [
        { nama: "Mochammad Sutopo", persen: "" }, { nama: "Rifi Prasetyo", persen: "" },
        { nama: "Andi Rustandi", persen: 3 }, { nama: "Reza Sigit Arishandy", persen: 13 },
        { nama: "Kaharto", persen: 20 }, { nama: "Muhammad Zein", persen: "" },
        { nama: "Mochamad Ridwan", persen: "" }, { nama: "Priyanto", persen: "" },
        { nama: "Risdiyanto", persen: 16 }, { nama: "Ruli Hermawan", persen: "" },
        { nama: "Sudiono", persen: "" }, { nama: "Sunardi", persen: "" },
        { nama: "Asep Abdus Salam", persen: "" }, { nama: "Teguh Tri Winarno", persen: 19 },
        { nama: "Maula Ubaidillah", persen: "" }, { nama: "Raka Diva", persen: "" },
        { nama: "Timbul Prasetyo", persen: 11 }
    ],
    quality: [
        { nama: "Nani Suryani", persen: "" }, { nama: "Labibah Isnaini Choerunissa", persen: "" },
        { nama: "Muhammad Agung Imaduddin", persen: "" }, { nama: "Hasan Kwindarto", persen: "" },
        { nama: "Muhammad Nurdin", persen: "" }, { nama: "Muhammad Imaduddin Afifiras", persen: "" },
        { nama: "Luthfi Khairuddin", persen: "" }, { nama: "Widodo", persen: "" },
        { nama: "Suripto", persen: "" }, { nama: "Suwandi", persen: "" },
        { nama: "Akhmad Arifin", persen: "" }, { nama: "Irzani", persen: 12 },
        { nama: "Toto Pamungkas", persen: 12 }, { nama: "Aceng Burhanudin", persen: 13 },
        { nama: "Sulaeman", persen: "" }, { nama: "Dedy Rianto", persen: 13 },
        { nama: "Arif Hendro Untung Triwanto", persen: "" }, { nama: "Muhamad Isma Riyanto", persen: 11 },
        { nama: "Chulam Muhammad Irsyad", persen: 12 }, { nama: "Kukuh Prasetyo", persen: 10 },
        { nama: "Bayu Prakasa", persen: 11 }, { nama: "Darmawan", persen: "" },
        { nama: "Aditya Dzaki Eko Krisnanto", persen: 12 }, { nama: "Rangga Wahyu Danuarif", persen: 12 },
        { nama: "Muhammad Rizky Ramadhan", persen: 11 }, { nama: "Nova Hery", persen: "" },
        { nama: "Irfan Aldi Rangkuti", persen: "" }, { nama: "Riki Nurjaman", persen: "" },
        { nama: "Andika Prihantanto", persen: "" }, { nama: "Rani Raman Pili", persen: "" },
        { nama: "Briyan Widhianto", persen: "" }
    ],
    engineering: [
        { nama: "YDB Advend Purbojati", persen: "" }, { nama: "Usep Maulana", persen: "" },
        { nama: "Hanif Ega Naufal", persen: "" }, { nama: "Dedi Prasetyo", persen: "" },
        { nama: "Stefanus Lucky S. Widhipratama", persen: "" }, { nama: "Ahmad Wahyudin Azzukruf", persen: "" },
        { nama: "Aji Nurseto", persen: "" }, { nama: "Tri Agung Nugroho", persen: "" },
        { nama: "Chika Nurachmani Choeronnissa", persen: "" }, { nama: "Berlian Harsono", persen: "" },
        { nama: "Nindya Ayu Maulidita", persen: "" }, { nama: "Ghalib Fakhrizul Akmal", persen: "" },
        { nama: "Ade Fajar Yogaswara", persen: "" }, { nama: "Ermi Pujiyati", persen: "" },
        { nama: "Farhanudin", persen: "" }, { nama: "Sukirno", persen: "" },
        { nama: "Slamet Supriyadi", persen: "" }, { nama: "Lilik Nur Pratomo", persen: "" },
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
        { nama: "Adzana Ihsan Sukardi", persen: "" }, { nama: "Derivata Nikko Ardana", persen: "" },
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
        { nama: "Mohammad Alfin Karim", persen: "" }, { nama: "Muhammad Rifqi Shodiqin", persen: "" },
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
                        return v ? v + "%" : "";
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
                        return `${v}d (${Math.round((v / 22) * 100)}%)`;
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

