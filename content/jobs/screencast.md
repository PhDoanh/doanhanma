---
draft: true
status: Backlog
title: Video ghi màn hình
description: 
author: PhDoanh
authorlink: https://github.com/PhDoanh
tags:
  - testing
  - windows
  - android
  - tutorials
aliases:
  - screencast
cssclasses:
  - imgAdj
---
# Tổng quan
**Video ghi màn hình** là bản ghi kĩ thuật số biểu thị các hoạt động diễn ra trên màn hình máy tính hoặc thiết bị di động. Nó giúp người xem hiểu và tái tạo được lỗi

## Quy định về video
- **Không tiếng ồn**: Đảm bảo tắt mic thu âm bên ngoài, chỉ ghi giọng nói của bạn nếu được yêu cầu bởi dự án
- **Ghi toàn màn hình**: Giống ảnh chụp màn hình, đảm bảo video hiển thị thanh URL nếu bạn kiểm thử trình duyệt
- **Nội dung phải khớp**: video cần khớp với các bước tái tạo lỗi được liệt kê trong báo cáo với bước đầu là mở trình duyệt hoặc ứng dụng cần kiểm thử  
- **Định dạng MP4**: Tất cả video phải được lưu hoặc chuyển đổi về định dạng này
- **Thời lượng ngắn gọn**: Cố gắng giữ cho video dài không quá **1 phút**. Nhưng cũng có thể dài hơn miễn là chỉ hiển thị các bước cần thiết để tái tạo lỗi

## Những thứ cần nhớ
- **Chỉ 1 video cho mỗi báo cáo**: Không tải lên quá 1 video trong báo cáo trừ khi cần thiết
- **Nén file video lớn**: Đôi khi, dung lượng file video có thể lớn, luôn nén chúng lại theo yêu cầu dự án trước khi tải lên
- **Dùng thiết bị bên ngoài để quay**: Chỉ nên quay bằng thiết bị bên ngoài khi được yêu cầu bở dự án hoặc khi không có cách nào quay bằng phần mềm bên trong
- **Xác nhận video chơi được**: Luôn kiểm tra tình trạng video tải lên không gặp bất kì vấn đề gì
- **Không lưu vào cloud**: Video không được lưu trên bộ nhớ đám mây mà chỉ lưu ở bộ nhớ trong của thiết bị

> [!warning] Cảnh báo
> Tải lên các đính kèm và lưu trữ bất cứ thông tin nào trong cloud sẽ vi phạm nguyên tắc của nền tảng testing bạn đang làm. Do đó, đừng chọn tải lên ScreenPal để lưu video, điều này áp dụng cho các phương pháp khác

# Windows
Windows không có sẵn công cụ quay màn hình, nhưng có nhiều phần mềm bên thứ 3 cung cấp. Đây là 2 đề xuất của mình: **ScreenPal (trước kia là ScreenCast-O-Matic) và BandiCam**.

## ScreenPal
%% gif/video về quy trình quay %%

1. Mở trang [này](https://screenpal.com/screen-recorder) lên và nhấp vào **Launch Free Recorder**
2. Chạy và cài đặt file **.exe** vừa tải xuống
3. Phần mềm ghi hình sẽ tự động mở khi chương trình hoàn tất cài đặt
4. Trước khi quay, hãy đảm bảo:
	- Tắt micro thu âm
	- Bạn đang quay toàn màn hình
5. Nhấp vào nút **Rec** để bắt đầu quay màn hình
6. Nhấp vào **Done** để dừng quay và chọn **Save/Upload** để lưu file video lại
8. Lần tới, bạn chỉ cần nhấp vào **Launch Free Recorder** từ trang web để mở ScreenPal

## Bandicam
%% gif/video về quy trình quay %%

1. Mở trang [này](https://www.bandicam.com/downloads/) lên và nhấp vào **Download Bandicam**
2. Cài đặt phần mềm và mở nó lên
3. Cấu hình cài đặt Bandicam như sau:
	- Ở tab Video, tích chọn **Show mouse cursor** và **Add mouse click effects**
	- Trong tab Video, nhấp vào **Settings** dưới phần **Record** và bỏ tích tùy chọn **Record sound** rồi nhấp **OK**
	- Trong tab Video, nhấp vào  **Settings** dưới phần **Format** và thiết lập **File Type** thành **MP4** rồi nhấp **OK**
4. Đảm bảo bạn đang ghi toàn màn hình
5. Nhấp vào nút **Rec** để bắt đầu quay
6. Nhấp vào **Stop** để dừng quay
7. Nhấp vào **Home** và chọn tab **Videos** để tìm video vừa quay
8. Bạn có thể nhấp vào đường dẫn thư mục ngay trên tiêu đề video để mở vị trí tệp
 
# MacOS
## Quicktime Player
%% gif/video về quy trình quay %%

Đây là công cụ tích hợp sẵn của Mac, cho phép quay video màn hình mà không cần phần mềm bên thứ 3 can thiệp

1. Mở **Quicktime Player** lên
2. Nhấp vào **File** và chọn **New Screen Recording**
3. Chọn **Record Entire Screen**
4. Nhấp vào **Options** và sau đó:
	- Chọn **None** với Microphone
	- Chọn **Show Mouse Clicks** với Options
	- Chọn **Desktop** với Save to
5. Bắt đầu quay bằng cách nhấp vào nút **Record**
6. Để dừng quay, nhấp vào nút dừng trong thanh menu hoặc từ thanh chạm
7. Video sẽ được lưu tới Desktop của bạn, đổi tên file và định dạng **.mov** thành **.mp4**

> [!info] Lưu ý
> VIdeo được quay bằng Quicktime Player thường có dung lượng khá lớn, đảm bảo nén nó bằng bất kì công cụ nào như [[#Handbrake]] trước khi tải lên báo cáo

## ScreenPal
%% gif/video về quy trình quay %%

Thường những công cụ tích hợp sẵn chỉ hỗ trợ các tính năng cơ bản, đủ dùng. Nên nếu bạn muốn nâng cao hơn thì phần mềm này là một đề xuất tuyệt vời

1. Mở trang [này](https://screenpal.com/screen-recorder) lên và nhấp vào **Launch Free Recorder** để tải xuống lần đầu
2. Cài đặt file tải xuống và quay trở lại trang để nhấp vào **Launch Free Recorder** lần nữa
3. Đảm bảo cung cấp các quyền cần thiết cho phần mềm và nhấp vào **Test Screen Recording**
4. Nhấp vào **Open System Preferences** và cho phép quyền ghi màn hình đối với ScreenPal, phần mềm sẽ tự động thoát sau khi cấp quyền
5. Nhấp vào **Launch Free Recorder** từ trang web để mở lại phần mềm
6. Trước khi quay, đảm bảo:
	- Tắt mic thu âm
	- Bạn đang quay toàn màn hình
7. Nhấp vào nút **Rec** để bắt đầu quay
8. Sau khi hoàn tất, nhấp vào **Done** để dừng quay và chọn **Save/Upload** để lưu video lại

# Linux
Có rất nhiều phần mềm hỗ trợ quay màn hình trên nền tảng này, bạn có thể thử **Kazam** - một tiện ích quay màn hình đơn giản

%% gif/video về quy trình quay %%

1. Mở trình nhắc lệnh lên và chạy: `sudo apt install kazam -y`
2. Cung cấp mật khẩu sudo nếu được yêu cầu và chờ đến khi cài đặt xong
3. Mở **Kazam** lên và đảm bảo:
	- Cả 2 tùy chọn **Sounds from speakers** và **Sounds from microphone** đều được tắt
	- Tùy chọn **The Mouse cursor** được bật
	- **Fullscreen** được bật
4. Nhấp vào nút **Capture** để bắt đầu quay
5. Dừng quay bằng cách nhấp vào biểu tượng **Kazam** và chọn **Finish recording** từ thanh tác vụ
6. Lưu video lại

# Android
Kể từ phiên bản Android 11 trở lên, công cụ quay màn hình chính thức có sẵn với mọi người dùng. Bạn có thể tìm thấy nó trong bảng thông báo hoặc ứng dụng **Cài Đặt**.

Nếu thiết bị của bạn không có, thì còn rất nhiều ứng dụng của bên thứ 3 cung cấp. Bạn có thể thử **AZ screen recorder**, Mobizen Screen Recorder, ...

## AZ Screen recorder
%% gif/video về quy trình quay %%

1. Tải xuống và cài đặt **[AZ screen recorder](https://play.google.com/store/apps/details?id=com.hecorat.screenrecorder.free&hl=en_IN)** từ cửa hàng Google Play
2. Mở ứng dụng lên và cho phép các quyền mà app yêu cầu
3. Mở trang cài đặt của ứng dụng và tắt tùy chọn **Record Audio**
4. Quay trở lại và chạm vào nút quay để bắt đầu
5. Dừng quay bằng cách chạm vào nút dừng
6. Bạn có thể tìm thấy video vừa quay bên trong thư mục **AZRecorderFree** của **File Manager**

> [!tip] Mẹo
> Bạn nên bật tính năng **Show Taps** từ trang công cụ nhà phát triển theo các bước sau:
> 1. Mở ứng dụng **Cài Đặt** trên thiết bị của bạn và tìm mục **Build number**. Thường được tìm thấy trong phần **About device**
> 2. Chạm vào **Build number** 7 lần để kích hoạt **Developer Options**, cung cấp mật mã nếu được yêu cầu
> 3. Mở **Developer Options** lên và bật tính năng **Show Taps**

> [!info] Lưu ý
> Nếu file video quá lớn, bạn có thể thử điều chỉnh độ phân giải và tỉ lệ khung hình trong trang cài đặt của ứng dụng quay màn hình hoặc dùng [[Handbrake]] để nén video lại

# iOS
## Cách 1: Dùng công cụ tích hợp sẵn
%% gif/video về quy trình quay %%

Mọi thiết bị iOS 11 trở đi đều hỗ trợ tiện ích quay màn hình. Hãy tìm hiểu cách kích hoạt và sử dụng nó!

1. Đi tới **Settings > Control Center > Customize Controls** sau đó chạm vào nút dấu cộng bên cạnh **Screen Recording**
2. Mở Control Center lên và nhấn giữ nút ghi màn hình
3. Tắt tùy chọn **Microphone** đi 
4. Chạm vào nút **Start Recording** và đợi 3 giây để bắt đầu quay
5. Mở Control Center và chạm vào nút ghi màn hình để dừng quay
6. Video sau khi quay xong sẽ được lưu vào thư mục **Photos**

Bạn có thể tìm hiểu các quy trình thực hiện trên tại [đây](https://support.apple.com/en-in/HT207935)

> [!tip] Mẹo
> Cách hiển thị cử chỉ chạm trên iPhone:
> 1. Mở **Settings**
> 2. Chọn mục **Accessibility**
> 3. Chọn **Touch**
> 4. Bật **Assistive Touch**
> 5. Chọn **Create New Gesture**
> 6. Chạm vào vùng màu xám trên màn hình
> 7. Lưu lại và đặt tên
> 8. Chạm vào nút **Assistive Touch**
> 9. Chọn **Custom Gesture**
> 10. Chọn con trỏ đã tạo trước đó để sử dụng trong khi quay màn hình

## Cách 2: Dùng phần mềm AirServer
%% gif/video về quy trình quay %%

**AirServer** cho phép máy tính của bạn tiếp nhận và hiển thị các luồng **AirPlay** từ thiết bị iOS hoặc hỗ trợ phản chiếu và ghi lại những gì diễn ra trên màn hình điện thoại với chất lượng cao mà không cần phần mềm bổ sung

**Điều kiện cần**: 
- Thiết bị iOS 4.2.1 trở lên
- Máy tính Windows hoặc MacOS

**Điều kiện đủ**:
- Cả 2 thiết bị đều kết nối cùng một mạng WiFi
- **iTunes** hoặc **Bonjour Print Services** được cài đặt

**Lưu ý quan trọng**:
- Đảm bảo phiên bản AirServer tương thích với máy tính của bạn
- Bản thử nghiệm miễn phí có sẵn trong 31 ngày

**Các bước thực hiện**:
1. Tải xuống phần mềm **AirServer** trên máy tính tại [đây](https://www.airserver.com/download)
2. Mở AirServer lên, đi tới **Settings** và đặt tên cho máy tính của bạn rồi nhấp vào **Apply**
3. Trên thiết bị iOS, vuốt màn hình lên và chạm vào **Screen Mirroring**
4. Chạm vào tên máy tính trong màn hình
5. Sử dụng bất kì công cụ quay màn hình nào như ScreenPal để ghi màn hình phản chiếu trên máy tính của bạn
6. Nếu gặp vấn đề, hãy xem phần [AirServer support](https://support.airserver.com/support/home)

> [!info] Lưu ý
> Nếu bạn đang dùng phiên bản iOS dưới 11, thì các phần mềm bên thứ 3 là giải pháp thay thế. Bạn có thử với Dr.Fone - Trình ghi màn hình cho iOS.

# Handbrake
%% gif/video về các quy trình sửa đổi video %%

**Handbrake** là một bộ chuyển mã video nguồn mở. Nó có sẵn cho Windows, MacOS và Linux.

**Phần mềm này có thể**:
- Thay đổi hầu hết các định dạng về **.mp4** 
- Nén video (kích thước, tốc độ khung hình, độ phân giải, ...)
- Lọc và loại bỏ âm thanh từ video
- Điểu chỉnh hướng quay video

Làm theo các bước sau để bắt đầu với Handbrake:
1. Tải xuống và cài đặt phần mềm tại [đây](https://handbrake.fr/downloads.php)
2. Mở Handbrake lên và mở video cần sửa đổi
3. **Để thay đổi đầu ra video mặc định**:
	- Đối với **Windows**
		- Nhấp vào **Tools** và chọn **Preferences**
		- Từ tab **Output Files**:
			- Thay đổi **Default Path** thành **Desktop** hoặc nơi mà bạn muốn lưu video
			- Thiết lập **MP4 File Extension** để video luôn ở định dạng **mp4**
	- Đối với **MacOS**
		- Nhấp vào **Handbrake** trên thanh Menu và chọn **Preferences**
		- Từ tab **General**, thiết lập đuôi tệp mặc định thành **.mp4**
4. **Để nén file video**, chọn cài đặt trước cho phù hợp
	- Điều này phụ thuộc vào video của bạn, kích thước và yêu cầu của dự án. Nếu kích thước nhỏ (dưới 5 MB), thì không cần nén trừ khi không thể tải lên báo cáo lỗi hoặc trường hợp kiểm thử do hạn chế tài nguyên của dự án
	- Mình khuyên bạn nên chọn **Very Fast 720p 30** hoặc **Very Fast 1080p**
5. **Để loại bỏ âm thanh trong video**
	- Đối với **Windows**
		- Điều hướng đến tab **Audio** và nhấp vào nút **Clear** hoặc biểu tượng "x" ở phía bên phải của audio track 
	- Đối với **MacOS**
		- Mở tab **Audio**
		- Nhấp vào bản Audio có sẵn trong danh sách (ví dụ: 0: unknown AAC LC)
		- Chọn **None**
6. **Để khắc phục hướng quay nếu video quay sai hướng**
	- Mở tab **Dimensions**
	- Điều chỉnh góc xoay cho phù hợp (ví dụ: nếu video bị lộn ngược, bạn có thể xoay 180 độ)
7. Sau khi hoàn tất, nhấp vào nút **Start Encode**
8. Video sẽ được lưu ở vị trí bạn đã chọn trong bước 3

> [!info] Lưu ý
> Bỏ qua bước 4, 5, 6 nếu không cần thiết

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




