$(document).ready(function() {
    $("#fakultas").change(function() {
        var val = $(this).val();
        if (val == "scientics") {
            $("#departemen").html(
                "<option value=''>Pilih Departemen</option><option value='fisika'>Departemen Fisika</option><option value='matematika'>Departemen Matematika</option><option value='statistik'>Departemen Statistika</option><option value='kimia'>Departemen Kimia</option><option value='biologi'>Departemen Biologi</option><option value='aktuaria'>Departemen Aktuaria</option>"
            );
        } else if (val == "indsys") {
            $("#departemen").html(
                "<option value=''>Pilih Departemen</option><option value='teknik mesin'>Departemen Teknik Mesin</option><option value='teknik kimia'>Departemen Teknik Kimia</option><option value='teknik fisika'>Departemen Teknik Fisika</option><option value='teknik sistem dan industri'>Departemen Teknik Sistem dan Industri</option><option value='teknik material dan metalurgi'>Departemen Teknik Material dan Metalurgi</option>" 
            );
        } else if (val == "civplan") {
            $("#departemen").html(
                "<option value=''>Pilih Departemen</option><option value='teknik sipil'>Departemen Teknik Sipil</option><option value='arsitektur'>Departemen Arsitektur</option><option value='teknik lingkungan'>Departemen Teknik Lingkungan</option><option value='perancangan wilayah dan kota'>Departemen Perancangan Wilayah Kota</option><option value='geomatika'>Departemen Teknik Geomatika</option><option value='geofisika'>Departemen Teknik Geofisika</option>"
            );
        } else if (val == "vocations") {
            $("#departemen").html(
                "<option value=''>Pilih Departemen</option><option value='teknik infrastruktur sipil'>Departemen Teknik Infrastruktur Sipil</option><option value='teknik mesin industri'>Departemen Teknik Mesin Industri</option><option value='teknik elektro otomasi'>Departemen Teknik Elektro Otomasi</option><option value='teknik kimia industri'>Departemen Teknik Kimia Industri</option><option value='teknik instrumentasi'>Departemen Teknik Instrumentasi</option><option value='statistika bisnis'>Departemen Statistika Bisnis</option>"
            );
        } else if (val == "martech") {
            $("#departemen").html(
                "<option value=''>Pilih Departemen</option><option value='teknik perkapalan'>Departemen Teknik Perkapalan</option><option value='teknik sistem perkapalan'>Departemen Teknik Sistem Perkapalan</option><option value='teknik kelautan'>Departemen Teknik Kelautan</option><option value='teknik transportasi laut'>Departemen Teknik Transportasi Laut</option>" 
            );
        } else if (val == "electics") {
            $("#departemen").html(
                "<option value=''>Pilih Departemen</option><option value='teknik elektro'>Departemen Teknik Elektro</option><option value='teknik biomedik'>Departemen Teknik Biomedik</option><option value='teknik komputer'>Departemen Teknik Komputer</option><option value='teknik informatika'>Departemen Teknik Informatika</option><option value='sistem informasi'>Departemen Sistem Informasi</option><option value='teknologi informasi'>Departemen Teknologi Informasi</option>" 
            );
        } else if (val == "creabiz") {
            $("#departemen").html(
                "<option value=''>Pilih Departemen</option><option value='desain produk industri'>Departemen Desain Produk Industri</option><option value='desain interior'>Departemen Desain Interior</option><option value='desain komunikasi visual'>Departemen Desain Komunikasi Visual</option><option value='manajemen bisnis'>Departemen Manajemen Bisnis</option><option value='studi pembangunan'>Departemen Studi Pembangunan</option><option value='manajemen teknologi'>Departemen Manajemen Teknologi</option>" 
            );
        } 
    });
});