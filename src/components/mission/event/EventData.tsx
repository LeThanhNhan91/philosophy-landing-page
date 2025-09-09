// Định nghĩa kiểu dữ liệu cho một sự kiện
export interface EventData {
    id: string;
    year: string;
    title: string;
    mainQuote: string;
    imageUrl: string; // Hình ảnh chính hiển thị lớn
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
        imageUrl: "https://images.unsplash.com/photo-1600172454238-620f01936e3c?q=80&w=1740&auto.format&fit=crop",
        description: {
            paragraph1: "Phong trào \"Chiếm lấy Wall Street\" là một cuộc biểu tình phản kháng bắt đầu vào ngày 17 tháng 9 năm 2011, tại Công viên Zuccotti, quận tài chính của Thành phố New York. Những người biểu tình đã lên tiếng chống lại sự bất bình đẳng kinh tế và xã hội, lòng tham của các tập đoàn, và ảnh hưởng của tiền bạc đối với chính phủ.",
            paragraph2: "Khẩu hiệu \"Chúng tôi là 99%\" đề cập đến sự chênh lệch về thu nhập và tài sản ở Hoa Kỳ giữa 1% giàu nhất và phần còn lại của dân số. Phong trào nhanh chóng lan rộng ra các thành phố khác ở Hoa Kỳ và trên toàn thế giới.",
        },
        gallery: {
            image1: "https://images.unsplash.com/photo-1633449129532-a5d6a62a26b6?q=80&w=1887&auto.format&fit=crop",
            caption1: "Biểu ngữ và khẩu hiệu là công cụ chính để truyền tải thông điệp.",
            image2: "https://images.unsplash.com/photo-1549924231-f97d1b383422?q=80&w=1740&auto.format&fit=crop",
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
        imageUrl: "https://images.unsplash.com/photo-1588506144502-a1b73c40f5d4?q=80&w=1740&auto.format&fit=crop",
        description: {
            paragraph1: "Cách mạng Cuba là một cuộc nổi dậy vũ trang do Phong trào 26 tháng 7 của Fidel Castro lãnh đạo chống lại chế độ độc tài của Fulgencio Batista. Cuộc cách mạng bắt đầu vào tháng 7 năm 1953 và tiếp tục cho đến khi Batista bị lật đổ vào ngày 1 tháng 1 năm 1959.",
            paragraph2: "Thắng lợi của cách mạng đã thiết lập nên nhà nước xã hội chủ nghĩa đầu tiên ở Tây bán cầu, có ảnh hưởng sâu sắc đến chính trị khu vực và quan hệ quốc tế trong suốt thời kỳ Chiến tranh Lạnh.",
        },
        gallery: {
            image1: "https://images.unsplash.com/photo-1606922369333-33b66357904c?q=80&w=1740&auto.format&fit=crop",
            caption1: "Hình ảnh biểu tượng của Che Guevara.",
            image2: "https://images.unsplash.com/photo-1590422022425-453b6f840907?q=80&w=1894&auto.format&fit=crop",
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
        imageUrl: "https://images.unsplash.com/photo-1593113646773-ae62c1c89a0e?q=80&w=1740&auto.format&fit=crop",
        description: {
            paragraph1: "Cuộc đình công của United Auto Workers (UAW) năm 2023 là một trong những cuộc đình công lớn nhất trong lịch sử ngành công nghiệp ô tô Mỹ, nhắm vào ba nhà sản xuất lớn là Ford, General Motors và Stellantis. Công nhân yêu cầu tăng lương, cải thiện phúc lợi và đảm bảo việc làm trong bối cảnh ngành công nghiệp chuyển đổi sang xe điện.",
            paragraph2: "Cuộc đình công thể hiện sức mạnh của lao động có tổ chức và nêu bật những lo ngại về sự công bằng kinh tế khi các tập đoàn đạt lợi nhuận kỷ lục.",
        },
        gallery: {
            image1: "https://images.unsplash.com/photo-1617814086915-d0c345a113d1?q=80&w=1740&auto.format&fit=crop",
            caption1: "Công nhân tuần hành đòi quyền lợi.",
            image2: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto.format&fit=crop",
            caption2: "Đàm phán giữa công đoàn và ban lãnh đạo công ty.",
        },
        finalQuote: {
            text: "Sự đoàn kết là sức mạnh... Khi không có sự hợp tác và đoàn kết, chúng ta yếu đuối.",
            author: "Mattie Stepanek",
        },
    }
];
