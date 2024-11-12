function openCamera() {
    alert("Fitur kamera belum tersedia");
}

function uploadFile() {
    alert("Fitur unggah file belum tersedia");
}

function showGuide() {
            document.getElementById("guideModal").style.display = "block";
        }

        function hideGuide() {
            document.getElementById("guideModal").style.display = "none";
        }

        // Close the modal when clicking outside of it
        window.onclick = function(event) {
            const modal = document.getElementById("guideModal");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

document.getElementById("splitForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const item1 = document.getElementById("item1").value;
    const sharedItem = document.getElementById("sharedItem").value;
    const tax = document.getElementById("tax").value;
    // Tambahkan logika untuk menghitung dan menampilkan hasil
    alert(`Item Pribadi: ${item1}, Item Bersama: ${sharedItem}, PPN: ${tax}%`);
});
