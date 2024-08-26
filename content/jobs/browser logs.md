---
draft: false
status: Backlog
title: Nhật ký trình duyệt
description:
author: PhDoanh
authorlink: https://github.com/PhDoanh
tags:
  - tutorials
  - testing
  - windows
  - android
aliases:
  - browser logs
cssclasses:
  - imgAdj
---
# Tổng quan
**Nhật ký** là thông tin về các sự kiện, đối tượng được tạo ra bởi các trình duyệt hoặc phần mềm trong khi chạy, nhà phát triển thường sử dụng nó để gỡ lỗi

Có nhiều loại nhật ký khác nhau, bài viết này sẽ hướng dẫn bạn cách thu thập loại nhật ký đầu tiên:
- **Nhật ký trình duyệt**: chứa các thông tin liên quan tới trang web, như yêu cầu mạng, mã javascript, css, các tin nhắn báo lỗi, cảnh báo, ... Những nhật ký này có thể được yêu cầu khi bạn kiểm thử một trang web
- [[mobile device logs|Nhật ký thiết bị di động]]: chứa các sự kiện được gửi đi bởi hệ thống và các ứng dụng đang chạy trên thiết bị. Những nhật ký này có thể được yêu cầu khi bạn kiểm thử một ứng dụng di động
- **Nhật ký mạng**: chứa lưu lượng HTTP(s) giữa máy tính của bạn với Internet giúp phân tích, chẩn đoán bất kỳ sự cố mạng nào. Những nhật ký này có thể được yêu cầu trong 1 vài dự án nhất định

## Những thứ cần nhớ
- **Xóa nhật ký cũ**: Bạn cần xóa thông tin nhật ký cũ trước khi thu thập nhật ký mới
- **Định dạng tệp nhật ký**: Bạn nên lưu nhật ký ở định dạng **.txt**
- **Tái tạo lỗi trong khi thu thập nhật ký**: Nhật ký phải chứa các hoạt động và lưu lượng truy cập trang web hoặc ứng dụng bạn đang kiểm thử
- **Dấu thời gian**: Đảm bảo tệp nhật ký chứa các mốc thời gian tương ứng với từng thông tin, sự kiện xảy ra (thường xuất hiện ở đầu dòng)
	- Với **nhật ký trình duyệt**: ==23:30:12.175== Navigated to https://www.google.com/
	- Với **nhật ký di động**: ==12-10 13:02:50.071== 1901-4229/com.facebook.android.gms

# Nhật ký trình duyệt trên máy tính
Các trình duyệt đều hoạt động giống nhau trên mọi nền tảng máy tính, nên bạn có thể làm theo các bước tương tự trên Windows, MacOS hay Linux.

## Google Chrome hoặc trình duyệt dùng Chromium
%% gif/video về cách lấy console log %%

1. Nhấn tổ hợp phím **Ctrl+Shift+I** hoặc **F12** hoặc chọn **biểu tượng ba chấm** > **More Tools** > **Developer Tools**
2. Chọn **Console** > **biểu tượng bánh răng** trong góc trên bên phải
3. Cuộn xuống dưới tới phần **Console preferences** rồi chọn **Show Timestamps** và **Preserve Log Upon Navigation**
4. Thoát khỏi cửa sổ cài đặt
5. Xóa console bằng cách nhấp vào biểu tượng **Clear Console** hoặc chuột phải vào cửa sổ console rồi chọn xóa
6. Tải lại trang web và tái tạo lỗi bắt đầu ở trang chủ
7. Nhấp chuột phải vào console và chọn **Save as** hoặc sao chép toàn bộ nhật ký từ console và dán vào phần mềm chỉnh sửa văn bản như Notepad chẳng hạn
8. Lưu lại với định dạng **.txt**

> [!info] Lưu ý
> - Chắc chắn rằng nhật ký console phải chứa dấu thời gian và chuỗi văn bản "Navigated to" khi kiểm thử trang web
> - Làm theo các bước tương tự để thu thập trên các trình duyệt dùng Chromium khác như: Microsoft Edge, Opera, Brave, Yandex, ...

## Firefox
%% gif/video về cách lấy console log %%

1. Nhấn tổ hợp phím **Ctrl+Shift+K** hoặc **F12** hoặc chọn biểu tượng 3 gạch ngang ở góc trên bên phải và chọn  **Web Developer > Web Developer Tools**
2. Trên console, chọn biểu tượng bánh răng ở góc trên bên phải và chọn **Persist Logs** và **Show Timestamps**
3. Nhấp vào biểu tượng thùng rác để xóa nhật ký cũ
4. Tải lại trang web và tái tạo lỗi bắt đầu từ trang chủ
5. Chuột phải vào console > **Save all Messages to File** để lưu nhật ký ở định dạng **.txt**

> [!info] Lưu ý
> Nếu bạn không thấy dấu thời gian nào thì hãy thử thay đổi kích thước cửa sổ console đến khi nó xuất hiện

## Safari
%% gif/video về cách lấy console log %%

1. Nhấp vào **Safari** trên thanh menu và chọn **Preferences**
2. Chọn **biểu tượng bánh răng nâng cao** và tích vào ô **Show Develop menu in the menu bar**
3. Đóng cửa sổ cài đặt nâng cao lại và chọn danh sách thả xuống **Develop > Show Web Inspector**
4. Trên cửa sổ console, chọn **Preserve Log** và nhấp vào biểu tượng thùng rác để xóa nhật ký cũ
5. Tải lại trang web và tái tạo lỗi bắt đầu từ trang chủ
6. Nhấp vào tab **Console** rồi nhấn tổ hợp phím **Command+S** để lưu nhật ký ở định dạng **.txt**

> [!info] Lưu ý
> Nhật ký được tạo bởi **Safari** không hỗ trợ dấu thời gian


> [!tip] Mẹo
> Cách hiển thị và thay đổi định dạng file:
> **Windows**
> 1. Mở **File Explorer** lên và điều hướng đến thư mục chứa file cần thao tác
> 2. Chuyển sang tab **View** trong menu ở trên để xem menu ribbon
> 3. Nhấp vào tùy chọn **File name extensions** để hiển thị đuôi file
> 4. Quay trở về chỗ file cần thao tác, bạn sẽ thấy phần định dạng file
> 5. Chuột phải vào file rồi chọn **Rename** để đổi tên và định dạng file như ý muốn
> 
> **MacOS**
> 1. Chuột phải vào file và chọn **Rename** từ menu các tùy chọn
> 2. Đổi tên và đuôi file cho phù hợp
> 3. Nhấn **Enter** hoặc nhấp ra bên ngoài để hoàn tất

# Nhật ký HAR trên máy tính
**HAR** là viết tắt của **HTTP Archive**, đây là loại nhật ký của trình duyệt chuyên lưu trữ các thông tin về tương tác giữa trình duyệt với trang web bạn đang kiểm thử. Thông tin này hữu ích với các nhà phát triển trong việc khắc phục và xác định nguyên nhân gốc rễ của vấn đề

Định dạng nhật ký HAR được hỗ trợ bởi nhiều phần mềm khác nhau như: Charles Proxy, Fiddler, Firebug, Firefox, Google Chrome, Microsoft Edge và OWASP ZAP.

## Những thứ cần nhớ
- Luôn nhớ tằng file HAR bao gồm cả dữ liệu nhạy cảm. Do đó nếu bạn đang cố gắng tái tạo lỗi mà liên quan đến **Username, Password, PIN, CVV, Số tài khoản/IBAN, số thẻ, hoặc bất kỳ thông tin cá nhân nào** thì hãy đảm bảo chúng được xóa trước khi tải lên báo cáo lỗi
- Đóng tất cả các tab không liên quan trong trình duyệt khi bạn thu thập nhật ký HAR
- Chỉ tải lên nhật ký HAR nếu được yêu cầu bởi **TTL, TE, hoặc TSM** của dự án

> [!note] Thông tin bổ sung
> Tìm hiểu thêm các thuật ngữ testing tại [[testing terms|đây]]

## Cách thu thập nhật ký HAR
### Google Chrome hoặc trình duyệt dùng Chromium
%% gif/video về cách lấy HAR log, kiểm tra status code và filter logs %%

1. Nhấn tổ hợp phím **Ctrl+Shift+I (Windows) / Option+Command+I (Mac)** hoặc chọn **biểu tượng 3 chấm > More Tools > Developer Tools**
2. Mở tab **Network** lên (nếu không thấy, nhấp vào biểu tượng ">>"  hoặc mở rộng cửa sổ Developer Tools)
3. Tích vào ô **Preserve log**
4. Xóa lưu lượng (nhật ký) cũ bằng cách nhấp vào biểu tượng xóa 🚫
5. Mở trang web cần kiểm thử lên và bắt đầu tái tạo lỗi
6. **Chuột phải** hoặc nhấn **Ctrl+click (Mac)** trên nhật ký và chọn **Save all as HAR with content** hoặc nhấp vào nút **Export HAR** (biểu tượng tải xuống) ở trên đầu tab **Network**
7. Lưu lại với định dạng **.har**

> [!info] Lưu ý
> Các bước trên được thực hiện tương tự với bất kỳ trình duyệt dùng Chromium nào như: Microsoft Edge, Opera, Brave, Yandex, ...

#### Kiểm tra mã trạng thái và lọc nhật ký
Bạn có thể được yêu cầu kiểm tra mã trạng thái đối với một số mục nhật ký nhất định bằng cách:
1. Nhấp vào mục nhật ký mong muốn
2. Từ tab **Headers > General**, kiểm tra mã trạng thái trong trường **Status code** (ví dụ: 200 OK, 400 Bad Request, ...)

Bạn có thể tìm nhanh các mục nhật ký cụ thể bằng tính năng lọc như sau:
1. Nhấp vào biểu tượng hình phễu trên cùng của tab **Network**
2. Nhập từ khóa vào hộp văn bản hiện ra để lọc

### Firefox
%% gif/video về cách lấy HAR log, kiểm tra status code và filter logs %%

1. Nhấn tổ hợp phím **Ctrl+Shift+E (Windows) / Option+Command+I (Mac)** hoặc mở **Menu** > **More Tools** > **Web Developer Tools**
2. Mở tab **Network** lên (nếu không thấy thì nhấp vào biểu tượng ">>" hoặc mở rộng cửa sổ Developer Tools)
3. Nhấp vào biểu tượng bánh răng và chọn **Persist Logs**
4. Xóa lưu lượng (nhật ký) cũ bằng cách nhấp vào biểu tượng thùng rác
5. Tải lại trang web và tái tạo lỗi bắt đầu từ trang chủ
6. **Chuột phải** hoặc nhấn **Ctrl+click (Mac)** trên nhật ký và chọn **Save All As HAR** hoặc nhấp vào biểu tượng bánh răng rồi chọn **Save All As HAR**
7. Lưu lại ở định dạng **.har**

#### Kiểm tra mã trạng thái và lọc nhật ký
Bạn có thể được yêu cầu kiểm tra mã trạng thái đối với một số mục nhật ký nhất định bằng cách:
1. Nhấp vào mục nhật ký mong muốn
2. Từ tab **Headers**, kiểm tra mã trạng thái trong trường **Status** (ví dụ: 200 OK, 400 Bad Request, ...)

Bạn có thể tìm nhanh các mục nhật ký cụ thể bằng tính năng lọc như sau:
1. Nhập từ khóa vào hộp văn bản **Filter URLs** trên cùng của tab **Network** để lọc

### Safari
%% gif/video về cách lấy HAR log, kiểm tra status code và filter logs %%

1. Nhấp vào thanh menu và chọn **Settings**
2. Mở tab **Advanced** > tích vào ô **Show features for web developers**
3. Đóng cửa sổ lại và nhấn tổ hợp phím **Option+Command+I** hoặc nhấp vào **Develop** trên thanh menu > **Show Web Inspector**
4. Mở tab **Network** (nếu không thấy thì nhấp vào biểu tượng ">>" hoặc mở rộng cửa sổ Developer Tools)
5. Từ menu ba gạch ngang ở phía trên bên trái của tab **Network**, chọn **Preserve Log**
6. Xóa nhật ký cũ bằng cách nhấp vào biểu tượng thùng rác
7. Tải lại trang web và tái tạo lỗi bắt đầu từ trang chủ
8. Nhấn **Ctrl+click** hoặc **chuột phải** lên cột Name của nhật ký và chọn **Export HAR** hoặc nhấp vào nút **Export** ở góc trên bên phải
9. Lưu lại với định dạng **.har**

#### Kiểm tra mã trạng thái và lọc nhật ký
Bạn có thể được yêu cầu kiểm tra mã trạng thái đối với một số mục nhật ký nhất định bằng cách:
1. Nhấp vào mục nhật ký mong muốn
2. Từ tab **Headers > Summary**, kiểm tra mã trạng thái trong trường **Status** (ví dụ: 200 OK, 400 Bad Request, ...)

Bạn có thể tìm nhanh các mục nhật ký cụ thể bằng tính năng lọc như sau:
1. Nhập từ khóa vào hộp văn bản **Filter Full URL** trên cùng của tab **Network** để lọc

## Cách chỉnh sửa nhật ký HAR
### Windows
%% gif/video về cách sửa HAR log %%

1. Mở file HAR trong phần mềm chỉnh sửa văn bản như Notepad hoặc Notepad++
2. Sử dụng tính năng thay thế để tìm thông tin bạn muốn xóa hoặc ẩn đi như: địa chỉ, ngày sinh, số điện thoại, tài khoản ngân hàng, số thẻ, số CCV hoặc bất kì thông tin nhạy cảm nào
3. Thay thế bằng chuỗi \*\*\*\* hoặc bất kì chuỗi kí tự nào để che đậy thông tin  
4. Lưu lại và tải file HAR lên báo cáo lỗi hoặc báo cáo testcase chỉ khi được yêu cầu

### MacOS
%% gif/video về cách sửa HAR log %%

1. Mở file HAR với ứng dụng mặc định: **TextEdit** 
2. Di chuột qua mục **Find** và chọn **Find and Replace**
3. Tìm kiếm thông tin nhạy cảm muốn xóa trong nhật ký và thay thế bằng chuỗi \*\*\*\* hoặc bất kì chuỗi kí tự nào 
4. Lưu lại và tải lên báo cáo lỗi hoặc báo cáo testcase chỉ khi được yêu cầu

> [!info] Lưu ý
> - Đảm bảo định dạng file nhật ký là **.har**
> - Bạn có thể dùng bất kì trình sửa đổi văn bản nào khác với ý tưởng bước làm như trên

# Nhật ký trình duyệt trên điện thoại
Thu thập nhật ký trình duyệt trên điện thoại có đôi chút phức tạp và phải thông qua máy tính để thực hiện, quy trình này được gọi là **gỡ lỗi từ xa**

Các trình duyệt dùng Chromium và Firefox chỉ hỗ trợ gỡ lỗi từ xa thông qua cáp USB cho thiết bị Android và iOS chỉ hỗ trợ gỡ lỗi từ xa trên Safari.

**Với người dùng Android, làm theo các bước sau trước khi thu thập**:
%% gif/video thực hiện các bước tiên quyết %%

1. Bật tính năng **Công cụ nhà phát triển** trên thiết bị của bạn bằng cách chạm vào **Build Number** 7 lần. Nhấp vào [đây](https://developer.android.com/studio/debug/dev-options.html) nếu gặp vấn đề
2. Mở **Developer Options** lên và bật tính năng **USB Debugging**
3. Kết nối trực tiếp Android của bạn với máy tính qua cáp USB
4. Trên máy tính, tải xuống **SDK platform-tools** tại [đây](https://developer.android.com/studio/releases/platform-tools)
5. Giải nén và mở thư mục tải xuống
6. Mở phần mềm **Command Prompt** (Windows) hoặc **Terminal** (MacOS hoặc Linux)
7. Gõ lệnh `cd` kèm một dấu cách theo sau và kéo thả đường dẫn chứa thư mục đã giải nén vào phần mềm, sau đó nhấn **Enter** (ví dụ: `cd c:\users\someone\desktop\platform-tools`)
8. Bạn sẽ thấy dấu nhắc trỏ đến thư mục **platform-tools** của mình
9. Giờ hãy gõ `adb start server` và cho phép bất kì yêu cầu cấp phép nào trên thiết bị của bạn

> [!error] Lỗi
> **Nếu lệnh ở bước 9 không hoạt động**, hãy mở lại **Command Prompt** hoặc **Terminal** với quyền quản trị viên và thử lại 

## Google Chrome hoặc trình duyệt dùng Chromium
**Đối với Android**:
%% gif/video lấy console log của trình duyệt di động %%

1. Trước khi bắt đầu, bạn cần **thực hiện trước** các bước từ 7 đến 10 được đề cập ở trên để đảm bảo trình duyệt nhận diện được thiết bị android của bạn
2. Mở **Google Chrome** trên máy tính lên và điều hướng đến trang chrome://inspect#devices
3. Dù là trình duyệt nào (dựa trên Chromium) trên điện thoại mà bạn dùng để kiểm thử, bạn vẫn có thể dùng Google Chrome trên máy tính để kiểm tra và phân tích chúng 
4. Đảm bảo tùy chọn **Discover USB devices** được bật và thiết bị của bạn đã kết nối với máy tính cũng như được mở khóa
5. Nếu bạn thấy tên mô hình thiết bị Android của mình, có nghĩa là **DevTools** đã thành công kết nối thiết bị của bạn
	- Nếu thiết bị hiển thị trạng thái **Offline**, đồng ý với thông báo **Allow USB Debugging** trên điện thoại của bạn
	- Nhấp vào [đây](https://developers.google.com/web/tools/chrome-devtools/remote-debugging?utm_source=dcc&utm_medium=redirect&utm_campaign=2016q3#troubleshooting) nếu **DevTools** không phát hiện ra thiết bị của bạn
6. Tất cả các tab trong trình duyệt di động sẽ hiển thị trên trình duyệt Chrome để bàn, mình khuyên bạn nên đóng hết lại
7. Mở trang web cần kiểm thử trên trình duyệt di động
8. Trong trình duyệt Chrome để bàn, nhấp vào nút **Inspect** bên cạnh URL của trang web đang kiểm thử
	- Một cửa sổ **DevTools** mới sẽ hiện ra. Nếu có lỗi, hãy thử nhấp vào **Inspect fallback**
9. Bên trong tab Console, nhấp vào **biểu tượng bánh răng** ở góc trên bên phải để mở trang cài đặt
10. Cuộn xuống dưới phần **Console preferences** > chọn **Show Timestamps** và **Preserve Log Upon Navigation**, sau đó thoát khỏi trang cài đặt
11. Xóa nhật ký cũ bằng cách nhấp vào biểu tượng **Clear Console** hoặc chuột phải trong cửa sổ console và chọn xóa
12. Tải lại trang web và tái tạo lỗi bắt đầu từ trang chủ
13. Chuột phải vào nhật ký và chọn **Save as**
14. Lưu lại với định dạng **.txt**

**Đối với iOS**:
%% gif/video lấy console log của trình duyệt di động %%

1. Mở Chrome trên thiết bị iOS lên, chạm vào biểu tượng 3 chấm ở góc dưới bên phải và chọn **Settings > Content Settings > Web Inspector**, sau đó bật tùy chọn **Web Inspector**
2. Kết nối trực tiếp thiết bị iOS của bạn với máy tính (phải là MacOS) bằng cáp phù hợp, đảm bảo bạn tin tưởng thiết bị kết nối
3. Trên điện thoại, giữ một tab Chrome được mở
4. Trên máy tính, Mở Safari lên và chọn **Settings**
5. Mở tab **Advanced** và tích vào ô **Show features for web developers**
6. Đóng trang settings lại, nhấp vào **Develop** > tên thiết bị iOS của bạn > tab chrome được mở
7. Trình kiểm tra trang web sẽ hiện ra, điều hướng đến tab Console
8. Trong cửa sổ Console, nhấp vào biểu tượng 3 gạch ngang > chọn **Preserve Log** và nhấp vào biểu tượng thùng rác để xóa nhật ký cũ
9. Tải lại trang web và tái tạo lỗi bắt đầu từ trang chủ trên thiết bị iOS của bạn
10. Lưu lại ở định dạng **.txt** bằng tổ hợp phím **Command+S** hoặc nhấn tổ hợp **Command+A** để chọn tất cả thông tin trong nhật ký, chuột phải và chọn **Save Selected**

> [!info] Lưu ý
> Đảm bảo file nhật ký chứa dấu thời gian và chuỗi văn bản "Navigated to" khi kiểm thử trang web

## Firefox
**Đối với Android**:
%% gif/video lấy console log của trình duyệt di động %%

1. Mở **Firefox** trên máy tính lên, nhấp vào menu **3 gạch ngang** và chọn **Web Developer > Remote Debugging**
2. Nhấp vào nút **Enable USB devices**
3. Mở Firefox trên điện thoại của bạn ra, chạm vào menu 3 chấm và bật **Remote debugging via USB** từ trang cài đặt
4. Bạn sẽ thấy tên thiết bị của mình xuất hiện trong trình duyệt Firefox để bàn, nhấp vào nút **Connect** ngay bên cạnh
	- Nhấp vào [đây](https://developer.mozilla.org/en-US/docs/Tools/about:debugging#Connecting_to_a_remote_device) nếu Firefox không nhận diện được thiết bị của bạn
5. Nhấp vào tên thiết bị để xem tất cả các tab đang mở, đóng hết chúng lại
6. Mở trang web cần kiểm thử trong trình duyệt Firefox di động
7. Trong trình duyệt Firefox để bàn, nhấp vào nút **Inspect** bên cạnh URL trang web đang kiểm thử 
8. Một cửa sổ **Toolbox** sẽ hiện ra, chọn tab **Console** > nhấp vào biểu tượng bánh răng ở góc trên bên phải > chọn **Persist Logs** và **Show Timestamps**
9. Nhấp vào biểu tượng thùng rác để xóa nhật ký cũ
10. Tải lại trang web và tái tạo lỗi bắt đầu từ trang chủ
11. Để thu thập nhật ký, chuột phải vào console > chọn **Export Visible Messages To** > **File**
12. Lưu lại với định dạng **.txt**

**Đối với iOS**:
%% gif/video lấy console log của trình duyệt di động %%

1. Kết nối trực tiếp thiết bị iOS của bạn với máy tính (phải là MacOS) bằng cáp phù hợp, đảm bảo bạn tin tưởng thiết bị kết nối
2. Trên điện thoại, giữ một tab **Firefox** được mở
3. Trên máy tính, Mở **Safari** lên và chọn **Settings**
4. Mở tab **Advanced** lên và tích vào ô **Show features for web developers**
6. Đóng trang settings lại, nhấp vào **Develop** > tên thiết bị iOS của bạn > tab firefox được mở
7. Trình kiểm tra trang web sẽ hiện ra, điều hướng đến tab Console
8. Trong cửa sổ Console, nhấp vào biểu tượng 3 gạch ngang > chọn **Preserve Log** và nhấp vào biểu tượng thùng rác để xóa nhật ký cũ
9. Tải lại trang web và tái tạo lỗi bắt đầu từ trang chủ trên thiết bị iOS của bạn
10. Lưu lại ở định dạng **.txt** bằng tổ hợp phím **Command+S** hoặc nhấn tổ hợp **Command+A** để chọn tất cả thông tin trong nhật ký, chuột phải và chọn **Save Selected**

> [!info] Lưu ý
> Đảm bảo file nhật ký chứa dấu thời gian và chuỗi văn bản "Navigated to" khi kiểm thử trang web

## Safari
%% gif/video lấy console log của trình duyệt di động %%

1. Mở cài đặt iOS, vuốt xuống và chọn **Safari > Advanced** rồi bật **Web Inspector** lên
2. Kết nối trực tiếp thiết bị iOS của bạn với máy tính (phải là MacOS) bằng cáp phù hợp, đảm bảo bạn tin tưởng thiết bị kết nối
3. Trên điện thoại, mở Safari lên và **giữ một tab được mở**
4. Trên máy tính, mở Safari và chọn **Settings**
5. Chọn tab **Advanced** và kích hoạt tùy chọn **Show features for web developers**
6. Đóng trang settings lại và nhấp vào **Develop** > tên thiết iOS của bạn (như **Someone's phone**) > tab được mở trên điện thoại
7. **Trình kiểm tra trang web** sẽ mở ra, điều hướng đến tab **Console**
8. Trên cửa sổ console, nhấp vào biểu tượng **ba gạch ngang** và chọn **Preserve Log**, và ở góc trên bên phải của **trình kiểm tra**, nhấp vào biểu tượng bánh răng, mở tab Console và bật tùy chọn **Show: Timestamps** lên
9. Quay trở lại tab Console và nhấp vào **biểu tượng thùng rác** để xóa nhật ký cũ
10. Tải lại trang web và tái tạo lỗi bắt đầu từ trang chủ trên thiết iOS của bạn
11. Lưu lại với định dạng **.txt** bằng tổ hợp phím **Command+S** trên máy tính

> [!info] Lưu ý
> Đảm bảo file nhật ký chứa dấu thời gian và chuỗi văn bản "Navigated to" khi kiểm thử trang web

# Nhật ký HAR trên Android
%% gif/video về các quy trình dưới %%

**Thiết lập thiết bị di động**:
1. Bật **Công cụ nhà phát triển** bằng cách chạm vào **Build number** 7 lần
	- Thao tác này có thể sẽ không giống trên các thiết bị Android khác nhau, hãy thử tìm kiếm trên mạng để phù hợp với điện thoại của bạn
2. Mở **Developer Options** lên
3. Bật tùy chọn **USB debugging**
4. Chạm vào nút **OK** trong cửa sổ bật lên
5. Kết nối điện thoại của bạn với máy tính qua 1 dây cáp USB
6. Chọn bất kì tùy chọn nào trong cửa sổ bật lên sau đó

**Mở DevTools và thu thập nhật ký HAR**
1. Gõ chrome://inspect trong thanh URL của trình duyệt Chrome để bàn để mở **DevTools**
2. Mở trang web cần kiểm thử trên điện thoại
3. Nhấp vào liên kết **Inspect** được hiển thị dưới phần **Remote Target**
4. Trong cửa sổ bật lên, mở tab **Network**
	- Nếu không thấy, bạn có thể nhấp vào biểu tượng ">>" và chọn tab đó
5. Bật tùy chọn **Preserve log** nếu nó tắt
6. Tái tạo lỗi sử dụng screencast trên **DevTools** hoặc dùng công cụ ghi màn hình của điện thoại

**Lưu nhật ký**:
1. Chuột phải vào nhật ký được tạo trong tab **Network**
2. Chọn **Save all as HAR** với tùy chọn nội dung
3. Chọn vị trí lưu file mong muốn
4. Nhập tên file và nhấp vào nút **Save** để lưu

**Loại bỏ PII trong nhật ký**
1. Chỉnh sửa file HAR được đề cập ở [[#Cách chỉnh sửa nhật ký HAR|đây]]

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




