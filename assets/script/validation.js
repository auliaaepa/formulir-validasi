function validateForm() {
    if (document.forms["formPendaftaran"]["fakultas"].value == "") {
        alert("Pilih Fakultas Anda");
        document.forms["formPendaftaran"]["fakultas"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["departemen"].value == "") {
        alert("Pilih Departemen Anda");
        document.forms["formPendaftaran"]["departemen"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["nama"].value == "") {
        alert("Nama Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["nama"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["nrp"].value == "") {
        alert("NRP Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["nrp"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["email"].value == "") {
        alert("Email Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["email"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["kota"].value == "") {
        alert("Kota Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["kota"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["penyintas"].value == "") {
        alert("Pilih Status Penyintas Covid-19");
        document.forms["formPendaftaran"]["penyintas"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["dosis"].value == "") {
        alert("Pilih Dosis Vaksinansi Covid-19");
        document.forms["formPendaftaran"]["dosis"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["jenis"].value == "") {
        alert("Pilih Jenis Vaksinansi Covid-19 Terakhir");
        document.forms["formPendaftaran"]["jenis"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["sedia"].value == "") {
        alert("Pilih Ketersediaan Kuliah Tatap Muka");
        document.forms["formPendaftaran"]["sedia"].focus();
        return false;
    }
    
    if (!confirm("Apakah Anda yakin ingin mengirimkan formulir ini?\nData yang sudah terkirim tidak dapat diubah")){
        return false;
    }
    
}