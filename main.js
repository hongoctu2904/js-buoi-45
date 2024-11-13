
// tính điểm vùng
/**
 * MÔ HÌNH 3 KHỐI
 * ĐẦU VÀO:
 * - diem1: điểm môn 1
 * - diem2: điểm môn 2  
 * - diem3: điểm môn 3
 * - diemChuan: Điểm chuẩn
 * - Khuvuc : diemtheokhuvuc ưu tiên
 * - doiTuong : diem theo đối tượng ưu tiên
 * XỬ LÝ :
 * Tính tổng điểm: DTB = diem1 + diem2 + diem3 + khuVuc + doiTuong
 * So sánh tổng điểm DTB với diemChuan để xác định đậu hay rớt
 * ĐẦU RA:
 *  - Thông báo kết quả đậu hay rớt:
 * Bạn đã đậu với số điểm: DTB so với điểm chuẩn: diemChuan
 * Hoặc Bạn đã không đủ điểm. Điểm của bạn: DTB so với điểm chuẩn: diemChuan
 * Hoặc Bạn vui lòng nhập số điểm hợp lệ.
 * 
 */
function tinhDiem() {
    const diem1 = parseFloat(document.getElementById("diem1").value) || 0;
    const diem2 = parseFloat(document.getElementById("diem2").value) || 0;
    const diem3 = parseFloat(document.getElementById("diem3").value) || 0;
    const diemChuan = parseFloat(document.getElementById("diemChuan").value) || 0;
    const khuVuc = parseFloat(document.getElementById("khuVuc").value) || 0;
    const doiTuong = parseFloat(document.getElementById("doiTuong").value) || 0;

    const DTB = diem1 + diem2 + diem3 + khuVuc + doiTuong;

    let result = "";
    if (diem1 >= 0 && diem2 >= 0 && diem3 >= 0 && diemChuan > 0) {
        if (DTB >= diemChuan) {
            result = `Bạn đã đậu với số điểm: ${DTB} so với điểm chuẩn ${diemChuan}`;
        } else {
            result = `Bạn đã không đủ điểm. Điểm của bạn: ${DTB} so với điểm chuẩn: ${diemChuan}`;
        }
    } else {
        result = `Bạn vui lòng nhập số điểm hợp lệ.`;
    }

    document.getElementById("ketQua1").innerHTML = result;
    ketQua("ketQua1", "bg-transparent", "bg-info");
}

function ketQua(id, mauNen1, mauNen2) {
    document.getElementById(id).classList.remove(mauNen1);
    document.getElementById(id).classList.add(mauNen2);
}

document.getElementById("tinhDiem").onclick = tinhDiem;




//Bài tập 2 tính tiền điện
 /**
  * MÔ HÌNH BA KHỐI
  * ĐẦU VÀO:
  * soKwh: Số kWh tiêu thụ
  * hoTen: Họ tên khách hàng
  * XỬ LÝ:
  * Tính tổng tiền điện dựa trên các mức tiêu thụ:
  * tongTien = 50 * 500 (nếu soKwh <= 50)
  * tongTien = 50 * 500 + (soKwh - 50) * 650 (nếu 50 < soKwh <= 100)
  * tongTien = 50 * 500 + 50 * 650 + (soKwh - 100) * 850 (nếu 100 < soKwh <= 200)
  * tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKwh - 200) * 1100 (nếu 200 < soKwh <= 350)
  * tongTien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKwh - 350) * 1300 (nếu soKwh > 350)
  * 
  * ĐẦU RA:
  * Thông báo tiền điện của khách hàng:
  * Tiền điện của khách hàng: hoTen là tongTien
  * Hoặc Vui lòng nhập số lớn hơn 0
  */
function tinhTienDien() {
    const soKwh = parseFloat(document.getElementById("soKwh").value) || 0;
    const hoTen = document.getElementById("hoTen").value;
    let tongTien = 0;

    ketQua("ketQua2", "bg-transparent", "bg-danger");

    if (soKwh <= 0) {
        document.getElementById("ketQua2").innerHTML = "Vui lòng nhập số lớn hơn 0";
        return;
    }

    if (soKwh <= 50) {
        tongTien = soKwh * 500;
    } else if (soKwh <= 100) {
        tongTien = 50 * 500 + (soKwh - 50) * 650;
    } else if (soKwh <= 200) {
        tongTien = 50 * 500 + 50 * 650 + (soKwh - 100) * 850;
    } else if (soKwh <= 350) {
        tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKwh - 200) * 1100;
    } else {
        tongTien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKwh - 350) * 1300;
    }

    const formattedTongTien = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND"
    }).format(tongTien);

    document.getElementById("ketQua2").innerHTML = `Tiền điện của khách hàng: ${hoTen} là ${formattedTongTien}`;
}

document.getElementById("tinhTienDien").onclick = tinhTienDien;

function ketQua(id, mauNen1, mauNen2) {
    document.getElementById(id).classList.remove(mauNen1);
    document.getElementById(id).classList.add(mauNen2);
}


//Bài tập 3: Tính thuế thu nhập cá nhân
/**
 * MÔ HÌNH 3 KHỐI
 * ĐẦU VÀO:
 * hoTen: Họ tên của người chịu thuế.
 * thuNhap: Tổng thu nhập trong năm.
 * soNguoi: Số người phụ thuộc.
 * XỬ LÝ:
 * - TÍNH THU NHÂP THUẾ
 * Công thức: thuNhapChiuThue = thuNhap - 4,000,000 - soNguoi * 1,600,000
 * Loại bỏ các khoản giảm trừ gia cảnh (4 triệu cho bản thân và 1,6 triệu cho mỗi người phụ thuộc).
 * - TÍNH TIỀN THUẾ DỰA TRÊN CÁC MỨC THU NHẬP CHỊU THUẾ
 * Thu nhập chịu thuế từ 10 triệu đến 60 triệu: 5% thuế.
 * Thu nhập chịu thuế từ 60 triệu đến 120 triệu: 10% thuế.
 * Thu nhập chịu thuế từ 120 triệu đến 210 triệu: 15% thuế
 * Thu nhập chịu thuế từ 210 triệu đến 384 triệu: 20% thuế.
 * Thu nhập chịu thuế từ 384 triệu đến 624 triệu: 25% thuế.
 * Thu nhập chịu thuế từ 624 triệu đến 960 triệu: 30% thuế.
 * Thu nhập chịu thuế trên 960 triệu: 35% thuế.
 * - ĐỊNH DẠNG KẾT QUẢ
 * Sử dụng Intl.NumberFormat để định dạng tiền thuế theo đơn vị tiền tệ Việt Nam.
 * ĐẦU RA:
 * -Thông báo tiền thuế phải nộp:
 * Nếu thu nhập chịu thuế nhỏ hơn hoặc bằng 10 triệu: "Bạn vui lòng nhập số tiền lớn hơn 10 triệu."
 * Nếu thu nhập chịu thuế lớn hơn 10 triệu: Tiền thuế của: hoTen là tienThue.
 */

function tinhThue() {
    const hoTen = document.getElementById("hoTen3").value;
    const thuNhap = parseFloat(document.getElementById("thuNhap").value) || 0;
    const soNguoi = parseFloat(document.getElementById("soNguoi").value) || 0;
    const thuNhapChiuThue = thuNhap - 4000000 - soNguoi * 1600000;
    let tienThue = 0;

    ketQua("ketQua3", "bg-transparent", "bg-danger");

    if (thuNhapChiuThue <= 10000000) {
        document.getElementById("ketQua3").innerHTML = "Bạn vui lòng nhập số tiền lớn hơn 10tr";
        return;
    }

    if (thuNhapChiuThue > 10000000 && thuNhapChiuThue <= 60000000) {
        tienThue = thuNhapChiuThue * 0.05; // 5% thuế cho thu nhập từ 60 triệu trở xuống
    } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
        tienThue = thuNhapChiuThue * 0.1; // 10% thuế
    } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
        tienThue = thuNhapChiuThue * 0.15; // 15% thuế
    } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
        tienThue = thuNhapChiuThue * 0.2; // 20% thuế
    } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
        tienThue = thuNhapChiuThue * 0.25; // 25% thuế
    } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
        tienThue = thuNhapChiuThue * 0.3; // 30% thuế
    } else if (thuNhapChiuThue > 960000000) {
        tienThue = thuNhapChiuThue * 0.35; // 35% thuế
    }

    const formattedTienThue = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND"
    }).format(tienThue);

    document.getElementById("ketQua3").innerHTML = `Tiền thuế của: ${hoTen} là ${formattedTienThue}`;
}

document.getElementById("tinhThue").onclick = tinhThue;

function ketQua(id, mauNen1, mauNen2) {
    document.getElementById(id).classList.remove(mauNen1);
    document.getElementById(id).classList.add(mauNen2);
}


//Bài tập 4: Tính tiền cap sử dụng
/**
 * MÔ HÌNH 3 KHỐI 
 * ĐẦU VÀO:
 * user: Loại khách hàng (1: Cá nhân, 2: Doanh nghiệp).
 * soKenh: Số kênh mà khách hàng đăng ký.
 * soKetNoi: Số lượng kết nối (chỉ áp dụng cho khách hàng doanh nghiệp).
 * XỬ LÝ:
 * - TÍNH TỔNG TIỀN CAP
 *      - Đối với khách hàng cá nhân:
 * Công thức: tongTien = 4.5 + 20.5 + soKenh * 7.5
 *      - Đối với khách hàng doanh nghiệp 
 * Nếu số kết nối <= 10: tongTien = 15 + 75 + soKenh * 50
 * Nếu số kết nối > 10: tongTien = 15 + 75 + soKenh * 50 + (soKetNoi - 10) * 5
 * ĐẦU RA:
 * - THÔNG BÁO SỐ TIỀN PHẢI NỘP 
 * Nếu loại khách hàng là cá nhân: Tiền cáp là: tongTien
 * Nếu loại khách hàng là doanh nghiệp: Tiền cáp là: tongTien
 * Nếu loại khách hàng không xác định: Không có kết quả
 * 
 */
function tinhTienCap() {
    const user = document.getElementById("user").value;
    const soKenh = parseFloat(document.getElementById("soKenh").value) || 0;
    const soKetNoi = parseFloat(document.getElementById("soKetNoi").value) || 0;
    let tongTien = 0;

    ketQua("ketQua4", "bg-transparent", "bg-success");

    if (user == 1) { // Cá nhân
        tongTien = 4.5 + 20.5 + soKenh * 7.5;
    } else if (user == 2) { // Doanh nghiệp
        if (soKetNoi > 10) {
            tongTien = 15 + 75 + soKenh * 50 + (soKetNoi - 10) * 5;
        } else {
            tongTien = 15 + 75 + soKenh * 50;
        }
    } else {
        document.getElementById("ketQua4").innerHTML = "Không có kết quả";
        return;
    }

    const formattedTongTien = new Intl.NumberFormat("us-US", {
        style: "currency",
        currency: "USD"
    }).format(tongTien);

    document.getElementById("ketQua4").innerHTML = `Tiền cáp là: ${formattedTongTien}`;
}

document.getElementById("tinhTienCap").onclick = tinhTienCap;

function ketQua(id, mauNen1, mauNen2) {
    document.getElementById(id).classList.remove(mauNen1);
    document.getElementById(id).classList.add(mauNen2);
}


function User(value) {
    const soKet = document.getElementById("soKet");
    const soKetNoi = document.getElementById("soKetNoi");

    if (value == 1) {
        soKet.setAttribute("hidden", "hidden");
        soKetNoi.setAttribute("hidden", "hidden");
    } else if (value == 2) {
        soKetNoi.removeAttribute("hidden");
    }
}
