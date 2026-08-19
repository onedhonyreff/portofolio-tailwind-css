(function () {
  // 1. Buat elemen HTML secara otomatis lewat JavaScript
  const indicator = document.createElement("div");
  indicator.className =
    "fixed bottom-4 left-4 z-50 bg-black/40 backdrop-blur-md opacity-50 hover:opacity-100 transition-opacity duration-300 text-white px-3 py-1.5 rounded-full text-xs font-mono shadow-lg border border-white/10 flex items-center gap-2";

  indicator.innerHTML = `
    <span class="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
    <span id="window-width">0 px</span>
    <span class="text-white/40">|</span>
    <span id="active-breakpoint" class="font-bold text-yellow-300">base</span>
  `;
  document.body.appendChild(indicator);

  // 2. Fungsi untuk memperbarui angka lebar dan breakpoint
  function updateScreenInfo() {
    const width = window.innerWidth;
    document.getElementById("window-width").textContent = width + " px";

    const bpEl = document.getElementById("active-breakpoint");
    if (width >= 1320)
      bpEl.textContent = "2xl"; // Menyesuaikan kustomisasi v4 Anda
    else if (width >= 1280) bpEl.textContent = "xl";
    else if (width >= 1024) bpEl.textContent = "lg";
    else if (width >= 768) bpEl.textContent = "md";
    else if (width >= 640) bpEl.textContent = "sm";
    else bpEl.textContent = "base";
  }

  window.addEventListener("resize", updateScreenInfo);
  updateScreenInfo();
})();
