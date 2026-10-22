const CONFIG = {
    // 1. Thông tin màn hình khoá
    sender: `Anh`,           // Tên người gửi
    recipient: `Bé Min`,       // Tên người nhận

    // 2. Nội dung thiệp
    title: `To my love`,        // Tiêu đề chính (hiển thị trên vỏ thiệp và popup thư)
    cardCoverDeco: `✿ ❤ ✿`,      // Dòng trang trí nhỏ phía trên tiêu đề
    forYouLine: `Love you ❤`, // Dòng chữ hiển thị khi hoa rơi

    // 3. Nội dung bức thư (Mỗi dòng là một đoạn văn)
    popupMessage: `Hehe, hôm nay em bé của anh thế nào rồi nè? 🥹
💚❤️💛 Anh chỉ ghé hỏi thăm xíu vì nhớ em quá thôi.
Ăn uống đầy đủ, đừng thức khuya hay làm việc quá sức nha. Có gì vui thì kể anh nghe, còn có gì buồn thì để anh ôm một chút. 💙💚
Chúc em luôn ngập tràn niềm vui, bình an, hạnh phúc và luôn xinh đẹp trong mắt anh.`.split('\n'),

    // 4. Hình ảnh (Lưu ảnh vào thư mục images/ và điền tên file vào đây)
    images: ["./assets/user_images_0.jpg"],

    // 5. Ảnh nổi bật hiển thị bên trong bức thư
    popupPhoto: `./assets/user_popupPhoto.jpg`, 

    // 6. Nhạc nền (Link file MP3)
    music: `./assets/user_music.mp3`,
};

