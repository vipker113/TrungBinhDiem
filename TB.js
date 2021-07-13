function tinhDiem(){
    let a = prompt("Nhập điểm toán: ");
    let b = prompt("Nhập điểm lý: ");
    let c = prompt("Nhập điểm hóa: ");
    a= parseInt(a);
    b= parseInt(b);
    c= parseInt(c);
    let avg= (a+b+c)/3;
    alert("Điểm trung bình của bạn là " + avg.toFixed(2));
}