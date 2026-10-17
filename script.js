
/* =====================================================
   1. DAFTAR LAGU DAN GAMBAR
===================================================== */

const students = [
  { name: "Dewi (Threesixty Skatepunk)", music: "dewi.mp3", type: "Pop Punk", image: "threesixty.jpg" },
  { name: "Takkan Bisa (Threesixty Skatepunk)", music: "takkan bisa.mp3", type: "Pop Punk", image: "threesixty.jpg" },
  { name: "Sampai Nanti (Threesixty Skatepunk)", music: "sampai nanti.mp3", type: "Pop Punk", image: "threesixty.jpg" },
  { name: "Menghilang Dan Berarti (Threesixty Skatepunk)", music: "Menghilang dan Berarti.mp3", type: "Pop Punk", image: "threesixty.jpg" },
  { name: "Wanita Masih Banyak (Stand Here Alone)", music: "wanita masih banyak.mp3", type: "Pop Punk", image: "sha.jpg" },
  { name: "Introvert (Stand Here Alone)", music: "introvert.mp3", type: "Pop Punk", image: "sha.jpg" },
  { name: "Hilang Harapan (Stand Here Alone)", music: "hilang harapan.mp3", type: "Pop Punk", image: "sha.jpg" },
  { name: "Mantan (Stand Here Alone)", music: "mantan.mp3", type: "Pop Punk", image: "sha.jpg" },
  { name: "JAV (Stand Here Alone)", music: "jav.mp3", type: "Pop Punk", image: "sha.jpg" },
  { name: "Kita Lawan Mereka (Stand Here Alone)", music: "kita lawan mereka.mp3", type: "Pop Punk", image: "sha.jpg" },
  { name: "Langit Tak Seharusnya Biru (The Jansen)", music: "langit tak seharusnya biru.mp3", type: "Punk Rock", image: "the jansen.jpg" },
  { name: "Ku Bukan Mesin Lotre Mu (The Jansen)", music: "ku bukan mesin lotremu.mp3", type: "Punk Rock", image: "the jansen.jpg" },
  { name: "Mereguk Anti Depresan Lagi (The Jansen)", music: "mereguk anti depresan lagi.mp3", type: "Punk Rock", image: "the jansen.jpg" },
  { name: "Kau Pemeran Utama Di Sebuah Opera (The Jansen)", music: "kau pemeran utama di sebuah opera.mp3", type: "Punk Rock", image: "the jansen.jpg" },
  { name: "Tipu Daya Sejarah (The Jansen)", music: "tipu daya sejarah.mp3", type: "Punk Rock", image: "the jansen.jpg" },
  { name: "Kenangan Sebuah Mimpi (Tinky Winky)", music: "Tinky Winky - Kenangan Sebuah Mimpi.mp3", type: "Pop Punk", image: "tinky winky.jpg" },
  { name: "Mimpi Semata (Tinky Winky)", music: "Mimpi Semata [NXZS4fjfQ9k].mp3", type: "Pop Punk", image: "tinky winky.jpg" },
  { name: "Bukan Mimpi Semata (Tinky Winky)", music: "Tinky Winky - Bukan Mimpi Semata - (192 Kbps).mp3", type: "Pop Punk", image: "tinky winky.jpg" },
  { name: "Terluka (Nobitasan)", music: "Nobistan - Terluka - (Lirik).mp3", type: "Pop Punk", image: "nobitasan.jpg" },
  { name: "Tetaplah Bersamaku (Nobitasan)", music: "Tetaplah Bersamaku.mp3", type: "Pop Punk", image: "nobitasan.jpg" },
  { name: "Tersimpan (Our Story)", music: "OUR STORY - TERSIMPAN (Official Lyric Video).mp3", type: "Pop Punk", image: "our story.png" },
  { name: "Story In My Heart (Starlit)", music: "Starlit - Story In My Heart.mp3", type: "Pop Punk", image: "starlit.png" },
  { name: "Pergi Hilang Dan Lupakan (Remember Of Today)", music: "Pergi Hilang dan Lupakan - Remember Of Today ( lirik lagu).mp3", type: "Pop Punk", image: "ROT.png" },
  { name: "Terima Kasih (Rebellion Rose)", music: "Rebellion Rose - Terima Kasih (Officia) Video Lirik.mp3", type: "Punk Rock", image: "rebbelion rose.png" },
  { name: "Aku, Kamu Dan Samudra (Rebellion Rose)", music: "Rebellion Rose - Aku, Kamu dan Samudra (Official) Video Lirik.mp3", type: "Punk Rock", image: "rebbelion rose.png" },
  { name: "Bulan & Ksatria (Superman Is Dead)", music: "Superman Is Dead - Bulan & Ksatria (Official Lyric Video).mp3", type: "Punk Rock", image: "SID.jpg" },
  { name: "Sunset Di Tanah Anarki (Superman Is Dead)", music: "Superman Is Dead - Sunset Di Tanah Anarki (Official Audio).mp3", type: "Punk Rock", image: "SID.jpg" },
  { name: "Puisi Cinta Para Perompak (Superman Is Dead)", music: "Superman Is Dead - Puisi Cinta Para Perompak (Official Audio).mp3", type: "Punk Rock", image: "SID.jpg" },
  { name: "Ketika Senja (Superman Is Dead)", music: "Superman Is Dead - The Opening (Ketika Senja) (Official Audio).mp3", type: "Punk Rock", image: "SID.jpg" }
];


/* =====================================================
   2. MENGAMBIL ELEMEN HTML
===================================================== */

const studentList = document.getElementById("student-list");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const modal = document.getElementById("character-modal");

const hideCharacterBtn = document.getElementById("hide-character-btn");
const showCharacterBtn = document.getElementById("show-character-btn");

const volumeSlider = document.getElementById("volume-slider");
const volumeValue = document.getElementById("volume-value");

const largeImage = document.getElementById("large-image");
const largeName = document.getElementById("large-name");
const largeInfo = document.getElementById("large-info");
const closeModalBtn = document.getElementById("close-modal");

let selectedType = "All";
let currentMusic = null;
let currentMusicFile = "";
let currentStudent = null;
let characterHidden = false;

let musicVolume = volumeSlider
  ? Number(volumeSlider.value) / 100
  : 0.5;


/* =====================================================
   3. MENAMPILKAN DAFTAR LAGU
===================================================== */

function showStudents() {
  if (!studentList || !searchInput || !sortSelect) return;

  let visibleStudents = students.filter(function(student) {
    const matchesType =
      selectedType === "All" || student.type === selectedType;

    const matchesSearch = student.name
      .toLowerCase()
      .includes(searchInput.value.toLowerCase());

    return matchesType && matchesSearch;
  });

  if (sortSelect.value === "high") {
    visibleStudents.sort(
      (a, b) => (b.level || 0) - (a.level || 0)
    );
  } else if (sortSelect.value === "low") {
    visibleStudents.sort(
      (a, b) => (a.level || 0) - (b.level || 0)
    );
  } else {
    visibleStudents.sort(
      (a, b) => a.name.localeCompare(b.name)
    );
  }

  studentList.innerHTML = "";

  visibleStudents.forEach(function(student) {
    const card = document.createElement("button");
    card.className = "student-card";
    card.type = "button";

    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";

    const image = document.createElement("img");
    image.src = "assets/" + student.image;
    image.alt = student.name;

    const name = document.createElement("div");
    name.className = "student-name";
    name.textContent = student.name;

    imageContainer.appendChild(image);
    card.appendChild(imageContainer);
    card.appendChild(name);

    card.addEventListener("click", function() {
      // Tidak bisa membuka karakter lain saat disembunyikan
      if (characterHidden) return;

      openCharacter(student);
    });

    studentList.appendChild(card);
  });
}


/* =====================================================
   4. MEMPERBARUI TAMPILAN KARAKTER
===================================================== */

function updateCharacterDisplay(student) {
  if (!student) return;

  if (largeImage) {
    largeImage.src = "assets/" + student.image;
    largeImage.alt = student.name;
  }

  if (largeName) {
    largeName.textContent = student.name;
  }

  if (largeInfo) {
    largeInfo.textContent = student.type;
  }
}


/* =====================================================
   5. MEMBUKA KARAKTER
===================================================== */

function openCharacter(student) {
  if (characterHidden) return;

  currentStudent = student;

  updateCharacterDisplay(currentStudent);

  if (modal) {
    modal.classList.add("show");
  }

  if (hideCharacterBtn) {
    hideCharacterBtn.style.display = "inline-block";
  }

  if (showCharacterBtn) {
    showCharacterBtn.style.display = "none";
  }

  playCharacterMusic(student.music);
}


/* =====================================================
   6. MEMUTAR MUSIK
===================================================== */

function playCharacterMusic(namaFile) {
  // Hentikan lagu sebelumnya tanpa memicu pergantian lagu
  stopMusic();

  currentMusicFile = namaFile;
  currentMusic = new Audio("assets/" + namaFile);

  currentMusic.volume = musicVolume;
  currentMusic.loop = false;

  // Simpan referensi audio agar event lagu lama tidak
  // memengaruhi lagu baru.
  const audioYangDiputar = currentMusic;

  audioYangDiputar.onended = function() {
    // Abaikan event jika audio ini bukan audio aktif
    if (currentMusic !== audioYangDiputar) return;

    playRandomCharacter();
  };

  audioYangDiputar.onerror = function() {
    console.error("Musik gagal dimuat:", namaFile);
  };

  audioYangDiputar.play().catch(function(error) {
    console.warn("Musik tidak dapat diputar:", error);
  });
}


/* =====================================================
   7. MEMILIH LAGU DAN KARAKTER ACAK
===================================================== */

function playRandomCharacter() {
  if (students.length === 0) return;

  const availableStudents = students.filter(function(student) {
    return student.music !== currentMusicFile;
  });

  if (availableStudents.length === 0) return;

  const randomIndex = Math.floor(
    Math.random() * availableStudents.length
  );

  const randomStudent = availableStudents[randomIndex];

  // Perbarui karakter aktif mengikuti lagu baru
  currentStudent = randomStudent;

  // Jika karakter sedang tampil, langsung perbarui pop-up.
  // Jika disembunyikan, hanya perbarui data karakter aktif.
  if (!characterHidden && modal && modal.classList.contains("show")) {
    updateCharacterDisplay(currentStudent);
  }

  // Putar lagu baru tanpa membuka pop-up
  playCharacterMusic(randomStudent.music);
}


/* =====================================================
   8. MENGHENTIKAN MUSIK
===================================================== */

function stopMusic() {
  if (!currentMusic) return;

  // Lepas event agar audio lama tidak memicu lagu acak
  currentMusic.onended = null;
  currentMusic.onerror = null;

  currentMusic.pause();

  try {
    currentMusic.currentTime = 0;
  } catch (error) {
    // Abaikan jika audio belum siap diputar
  }

  currentMusic = null;
}


/* =====================================================
   9. MENUTUP KARAKTER DENGAN TOMBOL X
===================================================== */

function closeCharacter() {
  if (modal) {
    modal.classList.remove("show");
  }

  stopMusic();

  currentMusicFile = "";
  currentStudent = null;
  characterHidden = false;

  if (hideCharacterBtn) {
    hideCharacterBtn.style.display = "inline-block";
  }

  if (showCharacterBtn) {
    showCharacterBtn.style.display = "none";
  }
}


/* =====================================================
   10. MENYEMBUNYIKAN KARAKTER TANPA MENGHENTIKAN MUSIK
===================================================== */

function hideCharacter() {
  if (!currentStudent) return;

  characterHidden = true;

  // Hanya sembunyikan pop-up, musik tetap berjalan
  if (modal) {
    modal.classList.remove("show");
  }

  if (hideCharacterBtn) {
    hideCharacterBtn.style.display = "none";
  }

  if (showCharacterBtn) {
    showCharacterBtn.style.display = "block";
  }
}


/* =====================================================
   11. MENAMPILKAN KEMBALI KARAKTER TERBARU
===================================================== */

function showCharacter() {
  if (!currentStudent) return;

  // Tampilkan karakter yang sesuai dengan lagu aktif
  updateCharacterDisplay(currentStudent);

  characterHidden = false;

  if (modal) {
    modal.classList.add("show");
  }

  if (showCharacterBtn) {
    showCharacterBtn.style.display = "none";
  }

  if (hideCharacterBtn) {
    hideCharacterBtn.style.display = "inline-block";
  }
}


/* =====================================================
   12. EVENT TOMBOL SEMBUNYIKAN DAN TAMPILKAN
===================================================== */

if (hideCharacterBtn) {
  hideCharacterBtn.addEventListener("click", hideCharacter);
}

if (showCharacterBtn) {
  showCharacterBtn.addEventListener("click", showCharacter);
}


/* =====================================================
   13. KONTROL VOLUME
===================================================== */

if (volumeSlider) {
  volumeSlider.addEventListener("input", function() {
    musicVolume = Number(volumeSlider.value) / 100;

    if (currentMusic) {
      currentMusic.volume = musicVolume;
    }

    if (volumeValue) {
      volumeValue.textContent = volumeSlider.value + "%";
    }
  });

  if (volumeValue) {
    volumeValue.textContent = volumeSlider.value + "%";
  }
}


/* =====================================================
   14. FILTER GENRE
===================================================== */

document.querySelectorAll(".filter-button").forEach(function(button) {
  button.addEventListener("click", function() {
    selectedType = button.dataset.filter;

    document.querySelectorAll(".filter-button").forEach(function(item) {
      item.classList.remove("active");
    });

    button.classList.add("active");

    showStudents();
  });
});


/* =====================================================
   15. PENCARIAN DAN PENGURUTAN
===================================================== */

if (searchInput) {
  searchInput.addEventListener("input", showStudents);
}

if (sortSelect) {
  sortSelect.addEventListener("change", showStudents);
}


/* =====================================================
   16. TOMBOL TUTUP MODAL
===================================================== */

if (closeModalBtn) {
  closeModalBtn.addEventListener("click", closeCharacter);
}

if (modal) {
  modal.addEventListener("click", function(event) {
    if (event.target === modal) {
      closeCharacter();
    }
  });
}

document.addEventListener("keydown", function(event) {
  if (
    event.key === "Escape" &&
    modal &&
    modal.classList.contains("show")
  ) {
    closeCharacter();
  }
});


/* =====================================================
   17. JALANKAN WEBSITE
===================================================== */

showStudents();
