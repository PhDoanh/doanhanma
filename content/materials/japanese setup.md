---
draft: true
status: Backlog
title: Các thiết lập khi học tiếng Nhật
description:
author: PhDoanh
authorlink: https://github.com/PhDoanh
tags:
  - japanese
aliases:
  - japanese setup
cssclasses:
  - imgAdj
---
**Tiến trình hiện tại**:
- [x] [[japanese#Học bảng chữ Kana|Học Hiragana + Katakana]]
- [ ] [[japanese#Thiết lập các công cụ học|Thiết lập các công cụ học]]  (bạn đang ở đây)
- [ ] [[japanese#Học từ vựng và ngữ pháp|Học từ vựng + ngữ pháp]]
- [ ] [[japanese#Áp dụng phương pháp Immersion|Áp dụng Immersion]]

> [!info] Lưu ý
> - Hướng dẫn thiết lập này hoạt động trên **Windows** và chưa được thử nghiệm trên các nền tảng khác
> - Đối với người dùng **Windows**, bạn có thể liên hệ với mình qua các kênh liên lạc tại <a href="#footer">đây</a> nếu gặp vướng mắc
> - Bạn có thể tham khảo bài viết [này](https://learnjapanese.moe/vn-linux/) nếu muốn khai thác tiểu thuyết trực quan (visual novel) trên **Linux**
# Thiết lập Anki
1. Tải xuống, cài đặt và mở [Anki](https://apps.ankiweb.net/) lên (bản Qt6)
2. Điều hướng tới **Tools > Preferences** để tùy chỉnh cài đặt theo ý muốn của bạn hoặc tham khảo cài đặt của [mình](https://drive.google.com/drive/folders/16jPVvKpCOwoFGCm7uNA9veKWJPURiZGg?usp=sharing)
3. **Cài đặt phông chữ tiếng Nhật**:
	- Tìm phông chữ bạn yêu thích trên trang [này](https://fonts.google.com/), mình đề xuất [Noto Sans Japanese](https://fonts.google.com/noto/specimen/Noto+Sans+JP?query=Noto)
	- Nhấp vào nút **Get font** và chọn **biểu tượng tải xuống** ở góc trên bên phải của phông chữ đó
	- Bên trong thư mục tải xuống (không giải nén cũng được), chuột phải vào kiểu phông bạn muốn cài hoặc nhấp vào nó để xem chi tiết, rồi chọn **Install**
4. Tải xuống các tiện ích mở rộng [này](https://drive.google.com/drive/folders/14Wg5_kdcBy9D5q2wAQO0r_ZVmxuv4s7P?usp=sharing), đi tới **Anki > Tools > Add-ons > View Files** và kéo tất cả tiện ích đó vào cửa sổ được bật lên

|             ![[anki_hCnpzG1uEn.jpg\|center]]             |
| :------------------------------------------------------: |
| Các tiện ích sẽ xuất hiện sau khi bạn khởi động lại Anki |

5. Trong Anki, nhấp vào **biểu tượng cài đặt** bên cạnh bất kỳ bộ thẻ nào và chọn **Options**, cuộn xuống dưới cùng rồi kích hoạt tính năng **[FSRS](https://youtu.be/NMLxc06l-Co?si=HCN72GZ7TkSTWCnn)** (thuật toán lập lịch và tối ưu cho việc học)

> [!info] Lưu ý
> Bạn có thể xem thông tin và khám phá các tiện ích trên trang [này](https://ankiweb.net/shared/addons)

# Thiết lập Yomitan
1. Cài đặt tiện ích trình duyệt [Yomitan](https://chromewebstore.google.com/detail/yomitan/likgccmbimhjbgkjambclfkhldnlhbnn?pli=1)
2. Trong trang cài đặt của tiện ích, đi tới **Dictionaries > Configure installed and enabled dictionaries... > Import** và nhập các từ điển sau **theo thứ tự**:
	- [JMdict](https://github.com/themoeway/jmdict-yomitan/releases/tag/2024-09-01): Từ điển ==đa ngôn ngữ== về ==từ vựng== tiếng Nhật, cung cấp định nghĩa và bản dịch sang nhiều ngôn ngữ.
	- [JMnedict](https://drive.google.com/file/d/13tObJ-6VKQGgtutSloh3s-UmBR8U92lV/view?usp=sharing): Từ điển chuyên về ==tên riêng== trong tiếng Nhật, bao gồm tên người, địa danh, và các danh từ riêng khác.
	- [三省堂 8th Ed](https://drive.google.com/file/d/145XbiuwOK8AFTaEEwnxvQIrhxrB7QQWK/view?usp=sharing): Phiên bản thứ 8 của từ điển tiếng Nhật nổi tiếng, cung cấp định nghĩa chi tiết về ==từ vựng, ngữ pháp và cách sử dụng== trong tiếng Nhật.  
	- [Kanji Jitenon](https://drive.google.com/file/d/149aVI4xb1ay16WTnpPzO5zDJdSkHkfOO/view?usp=sharing): Từ điển chuyên về ==kanji==, cung cấp thông tin về ý nghĩa, cách đọc, và cách sử dụng của từng ký tự kanji.  
	- [NHK2016](https://drive.google.com/file/d/14A4lPOdAEFMSrhCNybuVQE_haaDnVISR/view?usp=sharing): Từ điển giọng cao độ do NHK xuất bản vào năm 2016, cung cấp thông tin chi tiết về cách ==phát âm và giọng điệu chuẩn== của từ vựng tiếng Nhật.
	- [JPDB Frequency](https://drive.google.com/file/d/14ErqcPNRbnguhFOjKCEU0FE525cJN4VK/view?usp=sharing): Từ điển ==tần suất từ vựng và kanji== tiếng Nhật, cung cấp thông tin về tần suất xuất hiện của các từ và kanji trong các nguồn tài liệu như sách, manga, anime, và trò chơi.
3. Để cấu hình các cài đặt khác, bạn có thể đi tới **Backup > Import Settings** và nhập file cấu hình [này](https://mega.nz/file/gi9WHK4a#2fdY8GQWudDLrnWXsaj5zs9Jgcp1OUb9LGmQxBXIh-4) vào hoặc tự tìm hiểu, điểu chỉnh theo ý của bạn.

> [!info] Lưu ý
> Bạn có thể xem các từ điển thú vị khác trên trang [này](https://github.com/MarvNC/yomichan-dictionaries)

> [!tip]- Mẹo
> Bạn đã có thể bắt tay vào [[japanese#Học từ vựng và ngữ pháp|học từ vựng và ngữ pháp]] ngay bây giờ! Sau đó tiếp tục các phần dưới khi đến bước áp dụng Immersion.

# Thiết lập công cụ cho Visual Novel

# Thiết lập công cụ cho Anime

# Thiết lập công cụ cho Light Novel

# Thiết lập công cụ cho Manga




> [!quote] Này bạn đọc ...
> *Đừng quên thả tương tác 👍 kèm bình luận của bạn ✍️ để giúp mình cải thiện blog nhé!* 
> > [!tip]- Và có thể ủng hộ một ít động lực đó ngay bây giờ bằng các cách sau
> > - Qua nền tảng Ko-fi:
> > 
> >   <a href='https://ko-fi.com/M4M111S8CI' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi3.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
> > - Qua ngân hàng Việt:
> >   
> >   ![[91405bac428be6d5bf9a.jpg|250]]
> > 
> > *Bạn có thể chỉnh cho phù hợp túi tiền, cảm ơn sự hào phóng của bạn rất nhiều 🥰*




