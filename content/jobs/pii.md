---
draft: true
status: Backlog
title: Thông tin nhận dạng cá nhân
description: 
author: PhDoanh
authorlink: https://github.com/PhDoanh
tags:
  - tutorials
  - tester
aliases:
  - pii
cssclasses:
  - imgAdj
---
# Tổng quan
**Thông tin nhận dạng cá nhân** là những thông tin duy nhất có ở một người cụ thể, dùng để xác định người đó trong một cộng đồng. Nó thể hiện qua nhiều hình thức như: Họ tên đầy đủ, số điện thoại, địa chỉ, chi tiết về ngân hàng, thông tin về tài khoản, ... 

> [!info] Lưu ý
> Miễn là thông tin liên quan đến nhận dạng thì một số **thông tin chung** vẫn có thể được coi là thông tin nhận dạng cá nhân, như: địa chỉ về khu vực, quốc gia, thành phố, tỉnh thành, ... Điều này còn phụ thuộc vào quy đinh của từng luật pháp khác nhau.

# Bảo vệ thông tin nhận dạng
Có 2 lý do chính mà bạn cần phải ẩn đi các thông tin nhận dạng cá nhân:
- Bảo vệ chính bạn và những người xung quanh **(đặc biệt là người thân)**
- Để các nền tảng testing và khách hàng có thể đảm bảo dữ liệu của mọi người theo quy định của pháp luật về việc **thu thập, bảo vệ, chia sẻ, ...**

## Các thông tin cần bảo vệ
Phụ thuộc vào quy định pháp luật chỗ bạn ở và nhiều yếu tố khác mà có vô vàn thông tin nhận dạng cá nhân cần ẩn đi, nhưng những thông tin chung và phổ biến nhất áp dụng cho thế giới sẽ được đề cập ở đây:
- Họ tên đầy đủ
- Số điện thoại
- Địa chỉ nhà
- Ảnh chụp cá nhân (ảnh thẻ, ...)
- Các thông tin sở hữu tài sản (Biển số xe, ...)
- Dữ liệu sinh trắc học (vân tay, khuôn mặt, ...)
- Giấy tờ về ngân hàng (số tài khoản, số thẻ, số CVV, ...)
- Mã số quốc gia (Số an sinh xã hội, ...)
- Căn cước công dân hoặc sổ hộ khẩu
- Thông tin về nguồn gốc (dân tộc, tôn giáo, ...)
- Dữ liệu di truyền (DNA, ...)
- Thông tin tài khoản đăng nhập (địa chỉ email, mật khẩu, ...)
- Địa chỉ IP (Internet Protocol)
- Dữ liệu Cookies
- Dự liệu phím nhấn trên bàn phím khi gõ bất kỳ thông tin nhận dạng nào 
- ID thiết bị (điện thoại, máy tính, ...)

## Những thứ cần nhớ
- Mỗi khách hàng yêu cầu thử nghiệm sản phẩm sẽ có những mong muốn khác nhau về những gì cần được chỉnh sửa trong tài liệu và đính kèm. Điều này có thể phụ thuộc vào loại dữ liệu liên quan, chính sách khách hàng và các quốc gia liên quan
	- Ví dụ bạn có thể được yêu cầu chỉnh sửa một phần thông tin nhận dạng như làm mờ một số chữ cái hoặc chữ số cuối cùng của thông tin hoặc che đi bằng một hình có màu giống nền của trang web hoặc ứng dụng kiểm thử.   
	- Vì lí do này nên việc đọc phần tổng quan của dự án là **rất quan trọng**, để hiểu được hướng dẫn chỉnh sửa thông tin nhận dạng. Còn nếu không chắc chắn, bạn có thể trao đổi với TTL/TE bất cứ lúc nào.
- Việc ẩn đi các thông tin nhận dạng nên được thực hiện theo cách trực quan, dễ hiểu vì khách hàng là người sẽ xem những tài liệu, báo cáo, đính kèm hình ảnh, video mà bạn đã gửi.

> [!info] Lưu ý
> Một số dự án có thể yêu cầu bạn quay video ghi lại toàn bộ quy trình thử nghiệm với dữ liệu thực như tên, địa chỉ, email, số điện thoại, thông tin về ngân hàng, ... Trong trường hợp này, TTL/TE của dự án sẽ đánh giá và thực hiện các hành động chuẩn mực để ẩn đi dữ liệu nhạy cảm trong video đó trước khi gửi tới khách hàng!

## Cách bảo vệ cho ảnh chụp màn hình
Đơn giản là sử dụng bất kỳ một phần mềm nào như MS Paint (Windows), Mac Preview (MacOS), ..., để chỉnh sửa và bảo vệ thông tin có trong ảnh 

### Windows
%% gif/video %%

1. Mở **MS Paint** lên
2. Nhấn tổ hợp phím **Ctrl+O** hoặc đi tới **File > Open > Select your file**
3. Nhấp vào hình chữ nhật trong thanh công cụ
4. Chọn chỉnh sửa ảnh **Fill > Solid Color**
5. Thiết lập màu **Color 1** và **Color 2** thành màu đen
6. Vẽ lên các thông tin cần bảo vệ
7. Lưu lại các thay đổi

### MacOS
%% gif/video %%

1. Mở **Preview Mac** lên
2. Chọn **File** và nhấp vào **Open**
3. Nhấp vào **Show Markup Toolbar**
4. Nhấp vào **Fill Color** và chọn màu đen
5. Nhấp vào **Shapes** và chọn hình chữ nhật
6. Thay đổi kích thước phù hợp và di chuyển lên thông tin cần bảo vệ
7. Nhấp vào **File** và **Save**

### Những thứ cần nhớ
- Đảm bảo việc ẩn, che thông tin bao gồm toàn bộ dữ liệu cần bảo vệ mà không bị chồng chéo lên các dữ liệu và khu vực khác. Cần có một khoảng trống nhất định giữa các **hình che chắn** và các thành phần khác
- Các **hình che chắn** chỉ nên chứa vừa vặn kích thước thông tin nhận dạng, không bị thừa và che đi những chỗ không cần thiết.  
- Cần phải xử lý tất cả màn hình, cửa sổ bật lên có chứa **thông tin nhận dạng** như thông báo qua email, cuộc trò chuyện, các hộp cảnh báo, ... 

> [!info] Lưu ý
> Đối với các hệ điều hành khác, ý tưởng thực hiện cũng như trên. Miễn là phần mềm đó hỗ trợ công cụ vẽ hình để che chắn!

## Cách bảo vệ cho video quay màn hình
Tương tự như ảnh chụp, một phần mềm chỉnh sửa video là tất cả những gì bạn cần để bảo vệ thông tin nhận dạng

### VSDC (Windows)
%% gif/video %%

1. Tải xuống và cài đặt phần mềm [VSDC](https://www.videosoftdev.com/free-video-editor/download)
2. Mở nó lên và đóng cửa sổ **Upgrade** được bật lên
3. Nhấp vào **Import content** và chọn file video cần chỉnh sửa
4. Nhập tiêu đề dự án và nhấp vào nút **Finish**
5. Di chuyển tới thời điểm mà video chứa các thông tin cần được ẩn đi bằng cách kéo thả con dấu tiến độ
6. Nhấp vào **Video effects** > **Filters** > **DeLogo**
7. Thiết lập **Object position in the timeline** thành **From manual position**, sau đó nhấn **OK**
8. Tùy chỉnh vị trí và kích thước của khối che chắn cho thông tin cần ẩn
9. Trong khu vực **dòng thời gian** bên dưới video, kéo thả đối tượng và 1 trong 2 cạnh bên của nó để điều chỉnh thời điểm và thời lượng xuất hiện trong video 
10. Chuột phải vào đối tượng che chắn, chọn **Copy** và chuột phải lần nữa vào khu vực khác rồi chọn **Paste** để tạo thêm đối tượng cho thông tin khác cần bảo vệ (nếu còn)
11. Xem lại video và đảm bảo không còn thông tin nhận dạng nào bị rò gỉ
12. Nhấp vào biểu tượng phần mềm góc trên bên trái cùng và chọn **Export project**
13. Chọn **Web** cho phần **media device** > **To MP4** cho phần **output video format** > **Change name** để chọn vị trí lưu kết quả 
14. Nhấp vào **Export project** và chọn **Continue**
15. Sau khi xuất thành công, mở file kết quả ra và kiểm tra lại lần nữa!

### iMovie (MacOS)
%% gif/video %%

1. Tải xuống, cài đặt và mở **iMovie** lên
2. Nhấp vào **Create New** và chọn tùy chọn **Movie**
3. Kéo thả video cần chỉnh sửa vào khu vực dòng thời gian hoặc có thể nhấp vào **Import Media** để chọn video cần chỉnh sửa
4. Xác định thời điểm bắt đầu xuất hiện các thông tin nhận dạng trong dòng thời gian
5. Tải xuống một **bức ảnh mờ** trên mạng và kéo nó nằm trên **dải video** trong dòng thời gian nơi chứa các thông tin cần bảo vệ
6. Nhấp vào bức ảnh mờ và nhấp vào mục đầu tiên (Overlay) trong **thanh công cụ phía trên video**
7. Chọn **Picture in Picture** và thiết lập **Dissolve** thành 0
8. Điều chỉnh kích thước và vị trí của bức ảnh mờ sao cho che được thông tin cần ẩn
	- Nếu thông tin cần ẩn vẫn hiển thị trong khi cuộn, nhấp vào **Add a new keyframe at the playhead** và di chuyển dòng thời gian bằng các phím mũi tên rồi di chuyển bức ảnh để che thông tin đó đi
9. Xác định thời điểm thông tin nhận dạng không còn xuất hiện nữa và kéo dài thời lượng của bức ảnh mờ đến thời điểm đó
10. Thực hiện các bước từ 5 đến 9 với những thông tin cần ẩn khác (nếu còn)
11. Xem lại tổng thể video và đảm bảo không còn thông tin nhận dạng nào bị rò gỉ
12. Chọn **Projects** từ menu trên cùng, đặt tên cho dự án và nhấp **OK**
13. Di chuột vào tên dự án vừa đặt, một biểu tượng 3 chấm nhỏ sẽ xuất hiện bên cạnh
14. Nhấp vào biểu tượng 3 chấm và chọn **Share Project** > **File**
15. Chọn **Resolution** là **720p**, **Compress** là **Faster** và nhấp vào **Next**
16. Chọn vị trí lưu file và nhấp vào **Save**
17. Mở file kết quả ra và kiểm tra lại lần nữa

### Kdenlive (Windows, MacOS và Linux)
%% gif/video %%

1. Tải xuống, cài đặt và mở **Kdenlive** lên
2. Thay đổi cài đặt dự án (không bắt buộc)
	- Nhấp vào menu **Project**
	- Mở **Project Settings**
	- Chọn **HD 1080p 30 fps** hoặc **HD 720p 30 fps** để tối ưu dung lượng file
	- Nhấp vào nút **OK**
3. Nhập file video cần chỉnh sửa
	- Nhấp vào menu **Project**
	- Chọn **Add Clip or Folder**
	- Chọn video của bạn
	- Nhấp **OK**
4. Cắt video
	- Kéo thả video đã nhập vào khu vực dòng thời gian
	- Tìm phần video bạn muốn làm mờ
	- Nhấp vào **biểu tượng cây kéo** hoặc nhấn phím X để sử dụng **công cụ cây kéo**
	- Cắt phần video đó ra
	- Nhấp vào **biểu tượng con chuột** hoặc nhấn phím S để quay lại **chế độ chọn**
5. Làm mờ thông tin trong phần video được cắt
	- Làm mờ toàn phần
		- Nhấp vào tab **Effects**
		- Chọn **Blur and Sharpen > Square Blur**
		- Kéo thả vào phần video muốn làm mờ
		- Bạn có thể tùy chỉnh kích thước **Kernel** trong khu vực bên trái của dòng thời gian để tăng/giảm cường độ mờ
	- Làm mờ một phần
		- Nhấp vào tab **Effects**
		- Mở rộng phần **Alpha, Mask and Keying**
		- Chọn **Obscure** và kéo thả vào phần video muốn làm mờ
		- Nhấp vào video trong dòng thời gian 
		- Trong khu vực **Project Monitor**, điều chỉnh đối tượng làm mờ tới thông tin cần bảo vệ
		- Thêm các đối tượng làm mờ cho các thông tin cần ẩn khác (nếu còn)
6. Xuất bản video
	- Nhấp vào menu **Project**
	- Chọn tùy chọn **Render**
	- Trong cửa sổ render:
		- Chọn định dạng **MP4** trong thư mục **Generic** dưới phần **Presets**
		- Tích vào ô **More options**
		- Bỏ tích tùy chọn **Audio** nếu không cần thiết
		- Bạn có thể thay đổi vị trí lưu file bằng cách nhấp vào biểu tượng tài liệu bên cạnh trường **Output file**
			- Chọn ví trí muốn lưu và nhập tên file
			- Nhấp vào nút **Save**
		- Nhấp vào nút **Render to File**
		- Kiểm tra lại video sau khi xuất là xong!

### InShot (Android và iOS)
%% gif/video %%

1. Tải xuống, cài đặt và mở **InShot** lên
2. Nhập video
	- Chạm vào biểu tượng hình video
	- Chạm vào nút **New**
	- Chọn video bạn muốn edit
	- Chạm vào **biểu tượng dấu tích**
3. Làm mờ thông tin trong video
	- Trong dòng thời gian, vuốt dải video đến phần chứa thông tin cần ẩn
	- Chạm vào **Sticker**
	- Chọn tùy chọn **Detail**
	- Điểu chỉnh **khối mờ** bao chùm lên thông tin cần bảo vệ
		- Bạn cũng nên che cả bàn phím trong video khi nhập các thông tin nhận dạng
	- Tăng cường độ mờ và kích thước cho phù hợp
	- Chạm vào **biểu tượng dấu tích** sau khi xong
	- Điều chỉnh thời lượng của khối mờ bằng cách giữ biểu tượng mũi tên trái/phải trong khu vực dòng thời gian
	- Thêm khối mờ cho các thông tin cần ẩn khác (nếu còn)
	- Sau khi hoàn tất, chạm vào **biểu tượng dấu tích**
4. Xuất video
	- Chạm vào liên kết **Save** ở góc phía trên bên phải
	- Chọn định dạng xuất mong muốn (đề xuất của mình: **720p - 30fps - MP4**)
	- Chạm vào nút **Save**
	- Kiểm tra lại video sau khi xuất

### Những thứ cần nhớ
- Đảm bảo loại bỏ mọi hình thức của thông tin nhận dạng trong video từ đầu đến cuối và cố gắng không chỉnh sửa quá nhiều (chỉ điều chỉnh khi thông tin nhận dạng ở trạng thái động)
- Xóa bất cứ thứ gì không liên quan đến testcase dù cho là cần thiết để thử nghiệm.
- Cắt bất kì phần nào của video liên quan đến nền tảng thử nghiệm (biểu mẫu báo cáo, bảng tính, tài liệu thử nghiệm, ...) để tránh công khai thông tin khách hàng ra bên ngoài
- Tất cả màn hình và cửa sổ bật lên mà liên quan đến thông tin nhận dạng cần được xử lý.
- Đảm bảo làm mờ hoặc che bàn phím trong video để tránh rò gỉ thông tin nhận dạng.

## Cách bảo vệ cho tài liệu PDF 
### LibreOffice (Windows và MacOS)

1. Tải xuống, cài đặt và mở **LibreOffice** lên
2. Nhấp vào **Open File** và chọn file PDF cần chỉnh sửa
3. Nếu như file cho phép sửa đổi, chọn những thông tin nhận dạng trong đó và thay thế bằng văn bản giữ chỗ, tượng trưng cho phần thông tin ẩn, ví dụ: 03\*\*\*\*16
4. **Hoặc** che các thông tin nhận dạng bằng một hình khối dù cho PDF có sửa đổi được hay không
	- Nhấp vào **Tools** > **Redact** > **Rectangle**
	- Điều chỉnh cho phù hợp để che thông tin cần ẩn (kích thước, vị trí, ...)
5. Kiểm tra và đảm bảo file thỏa mãn các quy tắc chỉnh sửa
6. Nhấp vào **Tools** > **Redact** > **Export Redacted PDF (White) hoặc Export Redacted PDF (Black)**
7. Đổi tên file và nhấp vào **Save**
8. Kiểm tra lại kết quả

### Những thứ cần nhớ
- Đảm bảo che toàn bộ thông tin nhận dạng, tránh chồng chéo lên các vùng che khác và nên có khoảng trống giữa các vùng che. 
- Các hình khối che chắn lên vừa vặn với thông tin cần ẩn thay vì thừa thãi và ảnh hướng đến những thành phần khác
- Đảm bảo các văn bản và liên kết trong PDF không thể nhấp vào hay sao chép dưới mọi hình thức
- Luôn xác nhận rằng PDF được làm phẳng đúng cách qua việc kiểm tra các liên kết không còn hoạt động
- Đảm bảo mọi hiệu ứng chỉnh sửa lên PDF đều bị xóa (các công cụ chỉnh sửa biến mất trong trình xem trước pdf)

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




