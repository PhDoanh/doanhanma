---
title: Cách cài SDL2 cho CodeBlocks
status: Done
draft: false
tags:
  - hướng-dẫn
  - sdl
  - sdl2
  - ide
  - codeblocks
  - cmake
---
%% Nhúng video ở đây %%

[CodeBlocks](https://www.codeblocks.org/) là phần mềm cung cấp môi trường phát triển dự án **toàn diện**. Nó được tích hợp sẵn dự án SDL2 mẫu nên việc cài đặt nói chung khá đơn giản

# Thiết lập môi trường SDL2 
1. Tải về `SDL2-devel-2.30.0-mingw.zip` tại [đây](https://github.com/libsdl-org/SDL/releases/tag/release-2.30.0)
2. Giải nén file ZIP và lưu thư mục  `SDL2-devel-2.30.0-mingw` vào vị trí bất kì, ví dụ: `C:\SDL2-devel-2.30.0-mingw`
3. Trong thư mục này, mở `x86_64-w64-mingw32` (64bit) hoặc `i686-w64-mingw32` (32bit) 

> [!question]- Làm sao để biết Windows dùng 32/64 bit?
> 1. Trong thanh tìm kiếm Windows, tìm và mở cmd (Command Prompt)
> 2. Gõ lệnh `systeminfo | find /I "System type"` rồi nhấn 'Enter'
> 3. Kết quả hiển thị `x64-based PC` là 64bit, còn lại là 32bit

4. Dán `SDL2.dll` trong thư mục `bin` vào `usr\CodeBlocks\MinGW\bin` với `usr` là nơi cài CodeBlocks, ví dụ: `C:\Program Files\CodeBlocks\MinGW\bin`
5. Trong CodeBlocks, chọn Settings > Compiler 
![[1.png]]
6. Tại "Linker Settings", nhập `-lmingw32 -lSDL2main -lSDL2` vào trường "Other linker options" 
![[2.png]]
7. Tại "Search directories", chọn 'Add' trong Compiler
![[3.png]]
8. Dán đường dẫn chứa `include\SDL2` trong thư mục mở được ở bước 3 vào trường Directory rồi nhấn 'OK'
![[Pasted image 20240220215034.png]]
9. Tiếp tục, chọn 'Add' trong Linker
![[4.png]]
10. Dán đường dẫn chứa `lib` trong thư mục mở được ở bước 3 vào trường Directory
![[Pasted image 20240220215806.png]]
11. Nhấn 'OK' để đóng cửa sổ "Compiler settings"
![[Pasted image 20240220215928.png]]

# Chạy thử dự án SDL2 mẫu
Sau khi hoàn tất thiết lập, để đảm bảo mọi thứ hoạt động tốt bạn cần tạo và chạy thử dự án mà môi trường SDL2 biên soạn sẵn. Đây cũng là quy trình mỗi khi tạo một dự án SDL2 mới!

1. Trong CodeBlocks, Chọn File > New > Project...
![[Pasted image 20240220222923.png]]
2. Sau khi cửa sổ "New from template" mở lên, chọn "SDL2 project" > Go
![[Pasted image 20240220223003.png]]
3. Chọn 'Next'
![[Pasted image 20240220223717.png]]
4. Điền đầy đủ thông tin dự án: 2 trường đầu là tên và nơi lưu dự án, 2 trường cuối không cần điền 
![[Pasted image 20240220223818.png]]
5. Dán đường dẫn chứa thư mục mở được ở bước 3 vào
![[Pasted image 20240220224118.png]]
6. Chọn 'Finish'
![[Pasted image 20240220224215.png]]
7. Bây giờ chọn File > Open... để mở dự án vừa tạo
![[Pasted image 20240220225635.png]]
8. Trong cửa sổ bật lên, chọn file .cbp trong dự án của bạn và chọn 'Open'
![[Pasted image 20240220225901.png]]
9. Lúc này, phần Projects của Management sẽ hiển thị cấu trúc của dự án và file main.cpp sẽ chứa sẵn code mẫu dùng làm chương trình mặc định (bạn cũng thể thay đổi thành code của mình)
![[Pasted image 20240220231233.png]]
10. Cuối cùng nhấn F9 hoặc chọn Build > "Build and Run" để xem thành quả!
![[Pasted image 20240220231657.png]]

> [!info] Lưu ý
> - Muốn biên dịch và chạy các file mã nguồn thông thường, bạn cần đóng dự án lại bằng cách chọn File > "Close Project"
> - Để xem các định dạng file khác .cpp trong dự án, dán đường dẫn dự án vào trường ngay dưới phần Files trong Management

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
