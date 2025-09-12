export interface EventData {
    id: string;
    year: string;
    title: string;
    mainQuote: string;
    imageUrl: string;
    description: {
        paragraph1: string;
        paragraph2: string;
    };
    gallery: {
        image1: string;
        caption1: string;
        image2: string;
        caption2: string;
    };
    finalQuote: {
        text: string;
        author: string;
    };
}

// Dữ liệu mẫu cho các sự kiện, liên kết với ID từ carousel
export const eventsData: EventData[] = [
    {
        id: "wall-street-2011",
        year: "2011",
        title: "Occupy Wall Street",
        mainQuote: "We are the 99%",
        imageUrl: "/podcast/wall.jpg",
        description: {
            paragraph1: "Phong trào \"Chiếm lấy Wall Street\" là một cuộc biểu tình phản kháng bắt đầu vào ngày 17 tháng 9 năm 2011, tại Công viên Zuccotti, quận tài chính của Thành phố New York. Những người biểu tình đã lên tiếng chống lại sự bất bình đẳng kinh tế và xã hội, lòng tham của các tập đoàn, và ảnh hưởng của tiền bạc đối với chính phủ.",
            paragraph2: "Khẩu hiệu \"Chúng tôi là 99%\" đề cập đến sự chênh lệch về thu nhập và tài sản ở Hoa Kỳ giữa 1% giàu nhất và phần còn lại của dân số. Phong trào nhanh chóng lan rộng ra các thành phố khác ở Hoa Kỳ và trên toàn thế giới.",
        },
        gallery: {
            image1: "/podcast/occupy.jpeg",
            caption1: "Biểu ngữ và khẩu hiệu là công cụ chính để truyền tải thông điệp.",
            image2: "/podcast/bieutinh.jpg",
            caption2: "Các cuộc tuần hành thu hút hàng ngàn người tham gia.",
        },
        finalQuote: {
            text: "Khi sự bất công trở thành luật, sự phản kháng trở thành nhiệm vụ.",
            author: "Thomas Jefferson",
        },
    },
    {
        id: "cuba-revolution",
        year: "1959",
        title: "Cách mạng Cuba",
        mainQuote: "Patria o Muerte, Venceremos!",
        imageUrl: "/podcast/cachmang.jpg",
        description: {
            paragraph1: "Cách mạng Cuba là một cuộc nổi dậy vũ trang do Phong trào 26 tháng 7 của Fidel Castro lãnh đạo chống lại chế độ độc tài của Fulgencio Batista. Cuộc cách mạng bắt đầu vào tháng 7 năm 1953 và tiếp tục cho đến khi Batista bị lật đổ vào ngày 1 tháng 1 năm 1959.",
            paragraph2: "Thắng lợi của cách mạng đã thiết lập nên nhà nước xã hội chủ nghĩa đầu tiên ở Tây bán cầu, có ảnh hưởng sâu sắc đến chính trị khu vực và quan hệ quốc tế trong suốt thời kỳ Chiến tranh Lạnh.",
        },
        gallery: {
            image1: "/podcast/che.jpeg",
            caption1: "Hình ảnh biểu tượng của Che Guevara.",
            image2: "/podcast/xe.jpg",
            caption2: "Những chiếc xe cổ điển trở thành một phần di sản của Cuba.",
        },
        finalQuote: {
            text: "Một cuộc cách mạng không phải là một chiếc giường trải đầy hoa hồng. Một cuộc cách mạng là một cuộc đấu tranh giữa tương lai và quá khứ.",
            author: "Fidel Castro",
        },
    },
    {
        id: "auto-worker-strike",
        year: "2023",
        title: "Đình công ngành ô tô Mỹ",
        mainQuote: "Record profits mean record contracts.",
        imageUrl: "/podcast/dinhcong.jpg",
        description: {
            paragraph1: "Cuộc đình công của United Auto Workers (UAW) năm 2023 là một trong những cuộc đình công lớn nhất trong lịch sử ngành công nghiệp ô tô Mỹ, nhắm vào ba nhà sản xuất lớn là Ford, General Motors và Stellantis. Công nhân yêu cầu tăng lương, cải thiện phúc lợi và đảm bảo việc làm trong bối cảnh ngành công nghiệp chuyển đổi sang xe điện.",
            paragraph2: "Cuộc đình công thể hiện sức mạnh của lao động có tổ chức và nêu bật những lo ngại về sự công bằng kinh tế khi các tập đoàn đạt lợi nhuận kỷ lục.",
        },
        gallery: {
            image1: "/podcast/tuanhanh.jpg",
            caption1: "Công nhân tuần hành đòi quyền lợi.",
            image2: "/podcast/damphan.jpeg",
            caption2: "Đàm phán giữa công đoàn và ban lãnh đạo công ty.",
        },
        finalQuote: {
            text: "Sự đoàn kết là sức mạnh... Khi không có sự hợp tác và đoàn kết, chúng ta yếu đuối.",
            author: "Mattie Stepanek",
        },
    },
     {
    id: "binh-dan-hoc-vu",
    year: "1945",
    title: 'Các lớp học "Bình dân học vụ" sau Cách mạng Tháng Tám',
    mainQuote: "Diệt giặc dốt",
    imageUrl: "/podcast/binhdan.jpg",
    description: {
      paragraph1:
        'Ngay sau Cách mạng Tháng Tám 1945, phong trào "Bình dân học vụ" được phát động trên cả nước nhằm xoá nạn mù chữ. Hàng vạn lớp học buổi tối mở ngay tại đình làng, bến phà, kho thóc… với giáo viên là cán bộ, chiến sĩ, học sinh và các trí thức tình nguyện.',
      paragraph2:
        "Chiến dịch nhanh chóng lan rộng tới tận thôn bản vùng sâu vùng xa, tạo cơ hội học chữ cho mọi tầng lớp nhân dân và đặt nền móng cho việc phổ cập giáo dục sau này.",
    },
    gallery: {
      image1: "/podcast/class-1.jpg",
      caption1: "Lớp học dã chiến: bảng gỗ, đèn dầu, ghế tre nhưng đầy quyết tâm.",
      image2: "/podcast/class-2.jpg",
      caption2: "Cán bộ – thanh niên tình nguyện đứng lớp, dạy chữ và tính toán cơ bản.",
    },
    finalQuote: {
      text: "Một dân tộc dốt là một dân tộc yếu.",
      author: "Hồ Chí Minh",
    },
  },
  {
    id: "community-library",
    year: "1960–1980",
    title:
      "Xây dựng các nhà văn hóa, thư viện cộng đồng góp phần nâng cao đời sống tinh thần cho người lao động",
    mainQuote: "Văn hoá đến với mọi người",
    imageUrl: "/podcast/community.jpg",
    description: {
      paragraph1:
        "Trong giai đoạn xây dựng đất nước, hệ thống nhà văn hoá, câu lạc bộ, thư viện cộng đồng được hình thành tại nhiều địa phương. Đây là không gian đọc sách, xem phim, sinh hoạt văn nghệ, tuyên truyền chủ trương chính sách, nâng cao đời sống tinh thần.",
      paragraph2:
        "Những hoạt động này không chỉ lan toả tri thức mà còn gắn kết cộng đồng, khơi dậy tinh thần học tập suốt đời và tham gia phong trào thi đua lao động sản xuất.",
    },
    gallery: {
      image1: "/podcast/library-1.jpg",
      caption1: "Góc đọc sách, mượn sách miễn phí phục vụ công nhân và thanh thiếu niên.",
      image2: "/podcast/library-2.jpg",
      caption2:
        "Nhà văn hoá – nơi tổ chức biểu diễn, triển lãm và sinh hoạt tập thể định kỳ.",
    },
    finalQuote: {
      text: "Tri thức nuôi dưỡng cộng đồng, văn hoá kết nối con người.",
      author: "—",
    },
  },
  {
    id: "propaganda-art",
    year: "1945–1986",
    title:
      "Nghệ thuật cổ động được sử dụng để truyền bá lý tưởng và xây dựng tinh thần tập thể",
    mainQuote: "Vì Tổ quốc – Vì nhân dân",
    imageUrl: "/podcast/propaganda.jpeg",
    description: {
      paragraph1:
        "Poster, tranh cổ động và bích báo trở thành phương tiện trực quan sinh động để tuyên truyền: từ chống giặc đói, giặc dốt, giặc ngoại xâm cho tới các phong trào thi đua lao động, sản xuất.",
      paragraph2:
        "Với màu sắc mạnh, hình khối giản lược và thông điệp ngắn gọn, nghệ thuật cổ động dễ tiếp cận đại chúng, khơi dậy lòng yêu nước, tinh thần trách nhiệm và ý chí lạc quan.",
    },
    gallery: {
      image1: "/podcast/poster-1.jpg",
      caption1: "Áp phích vận động sản xuất – học tập, tinh thần tươi mới, quả quyết.",
      image2: "/podcast/poster-2.jpg",
      caption2: "Tranh cổ động kêu gọi đoàn kết, quyết tâm vượt khó.",
    },
    finalQuote: {
      text: "Nghệ thuật là vũ khí tinh thần sắc bén phục vụ nhân dân.",
      author: "Khẩu hiệu thời kỳ",
    },
  },
];
