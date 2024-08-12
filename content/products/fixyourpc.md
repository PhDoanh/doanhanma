---
status: Done
title: "Dự án game: Fix Your PC"
draft: false
tags:
  - gamedev
  - cpp
  - sdl2
  - project
  - typing-skill
---
# Giới thiệu
**Fix Your PC** là tựa game **một mạng** hay Roguelike Game lấy cảm hứng từ [ZType](https://zty.pe/?text=271e57005672c392), bạn sẽ phải tiêu diệt địch bằng cách gõ **nhanh và chính xác** nhất những từ, câu thậm chí là đoạn văn xuất hiện trên màn chơi. Cố gắng sống sót đến cuối và phá đảo game hoặc chết và không bao giờ tiếp tục lại được nữa! Xem video demo tại [đây](https://youtu.be/q5CiqMmyghU?si=B3q46iarJAa-8bw1)

# Các bước tải game
Tại trang tải xuống [này](https://github.com/PhDoanh/Fix-Your-PC/releases/tag/v0.1.0), bạn có hai lựa chọn:
## 1. Chạy trực tiếp game
*Dành cho những ai chỉ muốn trải nghiệm game*
- **Bước 1**: Tải xuống rồi giải nén file `Fix-Your-PC.zip` (~134MB)
- **Bước 2**: Trong thư mục giải nén, chạy `main.exe` để bắt đầu chơi!

## 2. Biên dịch code để chạy game
*Dành cho những ai muốn khám phá, tìm hiểu về cách game hoạt động thông qua mã nguồn*
- **Bước 1**: Tải xuống và giải nén một trong các file có tên `Source code`
- **Bước 2**: Đảm bảo bạn có đủ những thứ dưới đây trước khi tiếp tục:
	- [Trình biên dịch C++](https://gcc.gnu.org/) 
	- [GNU Make](https://www.gnu.org/software/make/)
- **Bước 3**: Mở một trình nhắc lệnh (vd: cmd) trong thư mục chứa Makefile và gõ lệnh `make`

> [!info]- Lưu ý
> Sau khi gọi `make`, chương trình sẽ tự biên dịch và chạy **game** (file exe) do nó tạo ra nên bạn không cần phải bật nó một cách thủ công 

# Hướng dẫn chơi
## Khởi động

Khi mới vào game, bạn sẽ cần cung cấp tên của mình để lưu các số liệu thống kê thành tích dưới dạng chuỗi mật khẩu được ẩn đi. Ở phần này bạn cũng có thể tùy chỉnh trước các thiết lập bằng cách nhấn phím **"Esc"**

| ![[Pasted image 20240427000814.png]] | ![[Pasted image 20240427000830.png]] |
|:------------------------------------:|:------------------------------------:|
|   Nhập tên người chơi (Game menu)    |  Tùy chỉnh cài đặt (Game settings)   |

Phần thiết lập game cụ thể như sau:          
- **Music**: Tinh chỉnh âm lượng nhạc nền game
- **Custom music**: Tùy chỉnh nhạc nền
- **Sound**: Tinh chỉnh âm lượng hiệu ứng âm thanh
- **Numbers**: Cho phép số xuất hiện trong văn bản gõ
- **Case Sensitive**: Cho phép phân biệt chữ in hoa, in thường
- **Punctuations and Symbols**: Cho phép các kí tự không phải số hay chữ
- **Custom text**: Tùy chỉnh văn bản được gõ trong màn chơi

## Bắt đầu

Nhấn giữ phím **"Alt"** kết hợp **W, A, S, D** để di chuyển, nhả **"Alt"** rồi gõ bất cứ từ hay câu nào mà bạn nhìn thấy để hạ địch. Theo thời gian mức độ khó sẽ tăng lên về **số lượng, sức mạnh và thời gian sinh** địch, nhưng nếu gõ đúng một lượng kí tự nhất định, người chơi được phép giải phóng **bí chiêu** bằng cách nhấn **"Enter"** để dễ dàng tiêu diệt địch. Cố gắng không để bị địch **va chạm** vì người chơi chỉ có hữu hạn mạng lên nếu hết, game sẽ kết thúc với màn hình xanh và **tự động tắt game**!

|    ![[Fix Your PC.gif]]    |
|:--------------------------:|
| Tiêu diệt địch (Game play) |

## Kết thúc
- **Chiến thắng** nếu bạn phá đảo toàn bộ màn chơi, màn hình PC ở trạng thái bình thường với các dòng văn bản chúc mừng. Tại đây bạn có thể thoát game hoặc chơi lại từ đầu nếu muốn lập kỉ lục!
- **Thất bại** nếu bạn bị mất sạch máu do va chạm quá nhiều với kẻ địch, màn hình xanh chết chóc sẽ hiện lên tổng hợp các số liệu thống kê thành tích bạn đã đạt được rồi tự tắt trong 15s

| ![[Pasted image 20240427000703.png]] | ![[Pasted image 20240427000510.png]] |
|:------------------------------------:|:------------------------------------:|
|  Phá đảo game (Game over - Victory)  | Mất sạch mạng (Game over - Defeated) |

# Tài nguyên game
## Hình ảnh
**Ảnh nền**
- [Seamless Space Backgrounds by Screaming Brain Studios (itch.io)](https://screamingbrainstudios.itch.io/seamless-space-backgrounds)
- [Windows 11 All Wallpapers by wrrwenna on DeviantArt](https://www.deviantart.com/wrrwenna/art/Windows-11-All-Wallpapers-885172912)

| ![[flower.png]] | ![[full.png]] | ![[full_blur.png]] | ![[space.png]] | ![[stars.png]] |
|:---------------:|:-------------:|:------------------:|:--------------:|:--------------:|
|     flower      |     full      |    full + blur     |     space      |     stars      |

**Người chơi** *(Các trạng thái con trỏ trong PC)*

| ![[Pasted image 20240428144922.png]] | ![[beam.png]] | ![[link.png]] | ![[move.png]] |
|:------------------------------------:|:-------------:|:-------------:|:-------------:|
|                arrow                 |     beam      |     link      |     move      |

**Kẻ địch** *(hình ảnh chỉ mang t/c đại diện)*
- [Tile OS - Part 3: Popular Apps by oviotti on DeviantArt](https://www.deviantart.com/oviotti/art/Tile-OS-Part-3-Popular-Apps-792018928)

| ![[enemy (2).png\|25x25]] | ![[enemy (8).png\|50x50]] | ![[enemy (9).png\|75x75]] | ![[enemy (14).png\|100x100]] | ![[enemy (15).png\|125]] |
| :-----------------------: | :-----------------------: | :-----------------------: | :--------------------------: | :----------------------: |
|        trash mobs         |          grunts           |         mini boss         |             boss             |        final boss        |

**Các object phụ**

| ![[avatar.png\|100x100]] | ![[bullet.png]] |   ![[emp.png]]   | ![[reticle.png]]  |      ![[smile.png]]      |
|:------------------------:|:---------------:|:----------------:|:-----------------:|:------------------------:|
|      player avatar       |     bullets     | player dead zone | enemy target zone | smile (dead blue screen) |

## Âm thanh 
- [Search Art | OpenGameArt.org](https://opengameart.org/art-search-advanced?keys=&field_art_type_tid%5B%5D=9&sort_by=count&sort_order=DESC)
- [Free Breaking Sound Effects Download - Pixabay](https://pixabay.com/sound-effects/search/breaking/)
- [Free Click Sound Effects Download - Pixabay](https://pixabay.com/sound-effects/search/click/)

## Phông chữ
[Segoe UI Variable Font : Download Free for Desktop & Webfont (cufonfonts.com)](https://www.cufonfonts.com/font/segoe-ui-variable)

> [!info]- Lưu ý
> - Những tài nguyên không có trong nguồn tham khảo đều là **tự thiết kế** và lấy sẵn trên hệ điều hành **windows**
> - Các tài nguyên tự thiết kế dựa trên các công cụ: [Aseprite](https://www.aseprite.org/), [Audacity](https://www.audacityteam.org/), [Canva](https://www.canva.com/)

# Cấu trúc dự án
- **inc, lib**: Thư mục chứa toàn bộ file tiêu đề, mã nguồn và thư viện liên kết của SDL2
- **res**: Thư mục chứa toàn bộ tài nguyên đa phương tiện của game
	- **background**: Thư mục chứa các ảnh nền
	- **enemy**: Thư mục chứa toàn bộ hình ảnh của địch (50 ảnh khác nhau)
	- **game_data**: Thư mục lưu trữ dữ liệu game
		- **high_scores.txt**: tệp lưu lại điểm số của 5 người chơi gần đây nhất (xếp hạng giảm dần)
		- **levels.txt**: tệp lưu toàn bộ màn chơi mặc định của game
		- **settings.txt**: tệp lưu các tùy chỉnh mặc định trong game
	- **music**: Thư mục chứa nhạc nền mặc định của game
	- **object**: Thư mục chứa các đối tượng phụ trong game
	- **player**: Thư mục lưu hình ảnh các trạng thái người chơi
	- **sound**: Thư mục chứa toàn bộ hiệu ứng âm thanh game
	- **SegUIVar.ttf**: tệp phông chữ của game
- **src**: Toàn bộ mã nguồn, logic chính của game tại thư mục này
	- **Entity.hpp, Entity.cpp**: Xử lí các logic thực thể: người chơi, kẻ địch, đạn, ...
	- **Event.hpp, Event.cpp**: Quản lí sự kiện tương tác game: bàn phím, chuột, các hàm tương tác cụ thể cho người chơi, địch, ...
	- **Game.hpp, Game.cpp**: Tệp chứa logic cơ bản, động cơ game; khởi tạo SDL, window, renderer, tài nguyên game, xóa và giải phóng bộ nhớ game, ... 
	- **Level.hpp, Level.cpp**: Quản lí các màn chơi; tạo màn chơi mới, sinh địch, xử lí kí tự trong từ mà địch lưu giữ.
	- **main.cpp**: tệp chứa hàm main của game
	- **Screen.hpp, Screen.cpp**: tệp chứa các hàm tải, vẽ, xóa các sprite ảnh và văn bản
	- **Sound.hpp, Sound.cpp**: tệp chứa các hàm tải, phát, dừng, xóa nhạc nền, hiệu ứng âm thanh.
	- **UI.hpp, UI.cpp**: Quản lí toàn bộ giao diện người chơi trong game, Bố cục setting, game menu, game play, game over, ...
	- **util.hpp, util.cpp**: tệp chứa các tiện ích hàm, cấu trúc dữ liệu, thuật toán đem lại trải nghiệm trong game. 

> [!quote] Lời trích dẫn
> *Nếu thấy hay thì đừng quên thả tương tác 💛 và bình luận ý kiến 🗯️ để giúp mình có thêm động lực! Hoặc "Buy me a coffee" để mình và mọi người biết bạn là người ủng hộ số 1 nhé 🎉 - Phạm Gia Doanh*
