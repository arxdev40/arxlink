"use strict";

document.addEventListener("alpine:init", () => {
    Alpine.data("appData", () => ({
        copied: false,

        async shareLink() {
            const shareData = {
                title: "ArX Link - Arya Putra Sadewa",
                text: "Kunjungi profil dan temukan tautan media sosial Arya Putra Sadewa.",
                url: window.location.href,
            };

            if (
                navigator.share &&
                navigator.canShare &&
                navigator.canShare(shareData)
            ) {
                try {
                    await navigator.share(shareData);
                } catch (error) {
                    if (error.name !== "AbortError") {
                        console.error("Gagal membagikan tautan:", error);
                    }
                }
            } else {
                // Fallback: Salin ke clipboard jika API share tidak didukung
                try {
                    await navigator.clipboard.writeText(window.location.href);
                    this.copied = true;
                    setTimeout(() => {
                        this.copied = false;
                    }, 2000);
                } catch (error) {
                    console.error("Gagal menyalin tautan:", error);
                }
            }
        },
    }));
});

// Inisialisasi AOS (Animate On Scroll) setelah DOM selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 800,
            easing: "ease-in-out-quart",
            once: true,
        });
    }
});

