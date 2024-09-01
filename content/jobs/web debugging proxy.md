---
draft: true
status: Backlog
title: Gỡ lỗi web qua proxy chuyên dụng
description:
author: PhDoanh
authorlink: https://github.com/PhDoanh
tags:
  - tutorials
  - testing
  - windows
  - android
aliases:
  - web debugging proxy
cssclasses:
  - imgAdj
---
# Tổng quan
**Một proxy cho phép gỡ lỗi web** là một chương trình hoạt động với tư cách là một **máy chủ trung gian**, chuyên phân tích, thu thập và chỉnh sửa lưu lượng **HTTP/HTTPs** giữa các thiết bị người dùng, trang web hoặc ứng dụng với nhau trên không gian mạng

Những nhật ký được tạo ra bởi chương trình này giúp cho các nhà phát triển nghiên cứu và khắc phục bất kì sự cố mạng nào

Bài viết này sẽ giới thiệu 2 proxy gỡ lỗi web phổ biến nhất là: [Charles Proxy](https://www.charlesproxy.com/) và [Fiddler](https://www.telerik.com/fiddler). Đây là 2 chương trình cho phép người dùng kiểm soát tất cả lưu lượng HTTP và SSL/HTTPs giữa máy tính của họ và mạng Internet, thực hiện các yêu cầu giả, phân tích vấn đề mạng, ...

## Yêu cầu của nhật ký
- **Nhật ký đã được giải mã**: Tất cả lưu lượng nên được giải mã trước khi tải lên báo cáo
- **Nội dung đúng trọng tâm**: Nhật ký phải chứa thông tin, lưu lượng của trang web hoặc ứng dụng bạn đang kiểm thử
- **Định dạng chính xác**: Đảm bảo lưu nhật ký ở dạng **.chls** với Charles Proxy và **.saz** với Fiddler

# Charles Proxy đối với máy tính
## Windows
%% gif/video %%

1. Trước khi bắt đầu, đảm bảo các tính năng **tường lửa, phần mềm quét virus và VPNs** đã được tắt
2. Tải xuống và cài đặt [Charles Proxy 64-bit](https://www.charlesproxy.com/download/) hoặc [Charles Proxy 32-bit](https://www.charlesproxy.com/download/previous-release/)
3. Mở **Charles Proxy** lên
4. Cài đặt chứng chỉ **Charles Root**:
	- Nhấp vào **Help**, chọn **SSL Proxying** và nhấp vào **Install Charles Root Certificate**
	- Một cửa sổ về chứng chỉ hiện ra, nhấp vào nút **Install Certificate** và nhấp vào **Next**
	- Chọn **Place all certificates in the following store** và nhấp vào biểu tượng tìm kiếm
	- Chọn thư mục **Trusted Root Certification Authorities** và nhấp vào **OK**
5. Đóng phần mềm Charles lại và khởi động lại máy tính của bạn
6. Mở Charles lên và nhấp vào **Proxy** và đảm bảo **Windows Proxy** được bật
7. Thiết lập cài đặt Proxy SSL:
	- Nhấp vào **Proxy** và chọn **SSL Proxy Settings**, tích vào ô **Enable SSL Proxying** rồi nhấp vào nút **Add** dưới phần Include
	- Trong cửa sổ **Edit Location** bật lên, gõ "\*" đối với **Host** và "443" đối với **Port**
	- Việc nhập "\*" trong trường **Host** sẽ cho phép giải mã mọi lưu lượng
8. Xóa nhật ký cũ bằng cách nhấp vào **biểu tượng cây chổi** và đảm bảo nút ghi nhật ký (biểu tượng ghi hình màu đỏ) được bật
9. Mở web cần kiểm thử lên và thực hiện các bước tái tạo lỗi bắt đầu từ trang chủ
10. Sau khi xong, nhấp vào **File > Save Session** rồi lưu với định dạng **.chls**

## MacOS
%% gif/video %%

1. Trước khi bắt đầu, đảm bảo các tính năng **tường lửa, phần mềm quét virus và VPNs** đã được tắt
2. Tải xuống và cài đặt [Charles Proxy](https://www.charlesproxy.com/download/)
3. Mở **Charles Proxy** lên
4. Cài đặt chứng chỉ **Charles Root**:
	- Nhấp vào **Help**, chọn **SSL Proxying** và nhấp vào **Install Charles Root Certificate**
	- Ứng dụng truy cập chuỗi khóa sẽ mở ra, tìm kiếm **Charles** và nhấp đúp vào chửng chỉ có tên là **Charles Proxy CA**
	- Nhấp vào nút mũi tên bên cạnh để tin tưởng và thay đổi giá trị cho mục **When using this certificate** thành **Always Trust**
	- Bây giờ bạn có thể đóng cửa sổ rồi nhập mật khẩu máy Mac nếu được yêu cầu. 
1. Đóng phần mềm Charles lại và khởi động lại máy tính của bạn
2. Mở Charles lên và nhấp vào **Proxy** và đảm bảo **macOS Proxy** được bật
3. Thiết lập cài đặt Proxy SSL:
	- Nhấp vào **Proxy** và chọn **SSL Proxy Settings**, tích vào ô **Enable SSL Proxying** rồi nhấp vào nút **Add** dưới phần Include
	- Trong cửa sổ **Edit Location** bật lên, gõ "\*" đối với **Host** và "443" đối với **Port**
	- Việc nhập "\*" trong trường **Host** sẽ cho phép giải mã mọi lưu lượng
4. Xóa nhật ký cũ bằng cách nhấp vào **biểu tượng cây chổi** và đảm bảo nút ghi nhật ký (biểu tượng ghi hình màu đỏ) được bật
5. Mở web cần kiểm thử lên và thực hiện các bước tái tạo lỗi bắt đầu từ trang chủ
6. Sau khi xong, nhấp vào **File > Save Session** rồi lưu với định dạng **.chls**

> [!info] Lưu ý
> - Đối với trình duyệt **Firefox**, bạn cần thực hiện các bước dưới sau khi xong các bước trên:
> 1. Mở Firefox lên và nhấp vào biểu tượng 3 gạch ngang rồi chọn **Settings**
> 2. Cuộn xuống dưới cài đặt **Network** và nhấp vào nút **Settings**
> 3. Thay đổi thành **Use system proxy settings**
> - Nếu bạn muốn giải mã lưu lượng từ một trang web cụ thể, gõ tên miền của trang đó giữa 2 dấu hoa thị "\*" (ví dụ: \*testio\*) trong trường **Host** bên trong **SSL proxy settings**
> - Ứng dụng **Charles** yêu cầu một giấy phép nếu được sử dụng quá 30 phút mỗi lần. Mỗi người dùng cá nhân có trách nhiệm tuân thủ các điều khoản và thực hiện nghĩa vụ trong thỏa thuận mà giấy phép đưa ra. 

# Charles Proxy đối với điện thoại
## Điều kiện tiên quyết
- Cả máy tính và điện thoại nên kết nối cùng một mạng **WiFi**
- Không bật **VPNs, tường lửa hay antivirus**
- Máy tính của bạn đang chạy **Charles Proxy**

## Android
%% gif/video %%

1. Thiết lập Charles Proxy trên máy tính của bạn theo các bước từ 1 đến 7 đã được đề cập ở [[#Charles Proxy đối với máy tính|trên]] 
2. Trong **Charles Proxy**:
	- Nhấp vào **Help** và chọn **Local IP Address** và ghi lại địa chỉ IP cho mạng đang hoạt động của bạn, ví dụ: **192.168.8.111**
	- Nhấp vào **Proxy** và chọn **Proxy Settings**, đảm bảo cổng **HTTP Proxy** là **8888**
3. Kết nối với **Charles Proxy**:
	- Trên điện thoại, mở cài đặt **Internet** và chọn mạng **wifi** bạn đang kết nối
	- Mở tùy chọn nâng cao cho mạng hiện tại và thay đổi cài đặt proxy thành thủ công, rồi điền các thông tin sau:
		- **Proxy hostname**: Nhập địa chị IP mà bạn đã ghi lại trong bước 2
		- **Proxy port**: Nhập số cổng là **8888**
	- Lưu lại cài đặt proxy
	- Bạn sẽ thấy một yêu cầu cho phép kết nối bên trong cửa sổ Charles Proxy khi cố gắng mở bất kì trang web nào trên điện thoại, bạn phải đồng ý yêu cầu đó
4. Cài đặt chứng chỉ **Charles Root**:
	- Trên điện thoại, mở bất kì trình duyệt nào (ưu tiên Chrome) và điều hướng đến trang chls.pro/ssl hoặc charlesproxy.com/getssl
	- Bạn sẽ thấy khóa bảo mật của điện thoại, cái mà cần xác thực sau đó cung cấp bất kì tên chứng chỉ nào
	- Đảm bảo **VPN and apps** được chọn và chạm vào **OK**
	Đối với phiên bản Android 11 trở lên, bạn sẽ cần thực hiện thêm các bước để thiết lập chứng chỉ CA và các hướng dẫn sau có thể hơi khác với từng thiết bị:
	- Mở ứng dụng **Settings** lên và chọn **Security**
	- Chọn **Encryption & Credentials > Install a certificate > CA Certificate**
	- Chọn **Install anyway** để chấp nhận cảnh báo hiện ra
	- Tìm kiếm và mở file chứng chỉ mà đã tải xuống trước đó
	- Xác nhận cài đặt chứng chỉ
	**HOẶC**
	- Mở ứng dụng **Settings** lên và chọn **Biometrics and security**
	- Chọn **Other security settings > install from device storage > CA Certificate**
	- Chọn **Install anyway** để chấp nhận cảnh báo hiện ra
	- Tìm kiếm và mở file chứng chỉ đã tải xuống
	- Xác nhận cài đặt
5. Trong **Charles Proxy**, nhấp vào **Proxy** và tắt **Windows Proxy** hoặc **macOS Proxy** đi
	- Làm điều này sẽ không thu thập lưu lượng máy tính của bạn và nên bật lại khi thu thập nhật ký trên máy tính
6. Xóa nhật ký cũ đi bằng cách nhấp vào **biểu tượng cây chổi** và đảm bảo nút ghi nhật ký (biểu tượng ghi hình màu đỏ) được bật
7. Mở web cần kiểm thử lên và thực hiện các bước tái tạo lỗi bắt đầu từ trang chủ
8. Sau khi xong, nhấp vào **File > Save Session** rồi lưu với định dạng **.chls**

## iOS
%% gif/video %%

1. Thiết lập Charles Proxy trên máy tính của bạn theo các bước từ 1 đến 7 đã được đề cập ở [[#Charles Proxy đối với máy tính|trên]] 
2. Trong **Charles Proxy**:
	- Nhấp vào **Help** và chọn **Local IP Address** và ghi lại địa chỉ IP cho mạng đang hoạt động của bạn, ví dụ: **192.168.8.111**
	- Nhấp vào **Proxy** và chọn **Proxy Settings**, đảm bảo cổng **HTTP Proxy** là **8888**
3. Kết nối với **Charles Proxy**:
	- Trên điện thoại, đi tới **Settings > WiFi**, chạm vào biểu tượng **"i"** bên cạnh mạng đang được kết nối 
	- Chạm vào **Configure Proxy** và chọn **Manual**:
		- **Server**: Nhập địa chị IP mà bạn đã ghi lại trong bước 2
		- **Port**: Nhập số cổng là **8888**
	- Lưu lại cài đặt proxy
	- Bạn sẽ thấy một yêu cầu cho phép kết nối bên trong cửa sổ Charles Proxy khi cố gắng mở bất kì trang web nào trên điện thoại, bạn phải đồng ý yêu cầu đó
4. Cài đặt chứng chỉ **Charles Root**:
	- Trên điện thoại, mở bất kì trình duyệt nào (ưu tiên Safari) và điều hướng đến trang chls.pro/ssl hoặc charlesproxy.com/getssl
	- Chạm vào **Allow**
	- Mở ứng dụng **Settings** lên, chạm vào **General** và chạm vào **VPN and Device Management** (đối với iOS 15+) hoặc  **Profiles and Device Management** (đối với iOS cũ hơn), chọn hồ sơ **Charles Proxy CA** và cài đặt nó.
	- Đi tới **Settings > General > About > Certificate Trust Settings** và kích hoạt **Enable Full Trust For Root Certificates** 
5. Trong **Charles Proxy**, nhấp vào **Proxy** và tắt **Windows Proxy** hoặc **macOS Proxy** đi
	- Làm điều này sẽ không thu thập lưu lượng máy tính của bạn và nên bật lại khi thu thập nhật ký trên máy tính
6. Xóa nhật ký cũ đi bằng cách nhấp vào **biểu tượng cây chổi** và đảm bảo nút ghi nhật ký (biểu tượng ghi hình màu đỏ) được bật
7. Mở web cần kiểm thử lên và thực hiện các bước tái tạo lỗi bắt đầu từ trang chủ
8. Sau khi xong, nhấp vào **File > Save Session** rồi lưu với định dạng **.chls**

> [!info] Lưu ý
> Nếu bạn đang dùng trình duyệt Firefox trên điện thoại, bạn sẽ cần làm theo các bước dưới đây sau khi xong các bước trên:
> 1. Trong Firefox, đi tới **Settings**
> 2. Chọn **About Firefox**
> 3. Chạm vào logo Firefox 5 lần
> 4. Quay trở lại trang settings
> 5. Mở **Secret Settings** dưới **About Firefox**
> 6. Kích hoạt **Use third party CA certificates**
> 7. Khởi động lại trình duyệt và phần mềm Charles là xong!

# Hồ sơ Charles Proxy
**Một hồ sơ Charles Proxy** là tập hợp tất cả các cài đặt hoặc cấu hình dùng để ghi và lưu lại nhật ký chỉ cho lưu lượng được yêu cầu cụ thể. Mặc định, **Charles Proxy** sẽ tạo và lưu tất cả các cài đặt vào trong hồ sơ **mặc định**

Nếu cần một hồ sơ tùy chỉnh để đáp ứng yêu cầu của dự án thì các hướng dẫn và file cấu hình với định dạng **.xml** sẽ được cung cấp bên trong dự án đó. Việc thu thập nhật ký sử dụng hồ sơ tùy chỉnh nghĩa là bạn sẽ thu thập chính xác các thông tin của dự án đang làm việc. Thêm nữa, nó sẽ ẩn đi các thông tin không cần thiết mà khách hàng không quan tâm.

## Cách nhập hồ sơ
%% gif/video %%

1. Đảm bảo **Charles Proxy** và chứng chỉ đã được cài đặt và hoạt động chính xác
2. Điều hướng tới **Tools > Import/Export Settings**
3. Nhấp vào tab **Import** và chọn **Choose File** 
4. Mở file cấu hình đã tải xuống từ dự án đang làm việc
5. Đảm bảo tất cả tùy chọn được chọn
6. Nhấp vào **Import** để nhập hồ sơ

## Cách chuyển đổi qua lại các hồ sơ
%% gif/video %%

1. Điều hướng tới **Tools > Profiles**
2. Tìm hồ sơ bạn muốn sử dụng
3. Tích vào ô ở cột **Active**
4. Đóng cửa sổ Profile lại là xong

## Cách xóa hồ sơ
%% gif/video %%

1. Mở phần mềm **Charles Proxy** lên
2. Điều hướng tới **Tools > Profiles**
3. Chuyển đổi tới một hồ sơ khác hồ sơ bạn muốn xóa
4. Nhấp vào tên hồ sơ muốn xóa
5. Nhấp vào nút **Remove**
6. Nhấp vào **OK** để lưu thay đổi của bạn

# Bộ lọc trong Charles Proxy
Đối với một vài dự án, bạn sẽ được yêu cầu lọc ra những tên miền không cần thiết và thu thập nhật ký mà chỉ chứa những thông tin phù hợp với vấn đề hoặc nhiệm vụ, điều này giúp cho khách hàng và nhà phát triển tìm ra thứ họ muốn nhanh và dễ dàng hơn.

Phần này sẽ hướng dẫn cách **loại trừ, bao gồm hay lọc** một số lưu lượng cụ thể trong nhật ký Charles. Thông thường, bạn sẽ dùng hồ sơ tùy chỉnh hoặc thiết lập theo hướng dẫn được cung cấp trong dự án. Nếu không có, bạn nên xác nhận với **TTL hoặc TE** nếu có bất kỳ yêu cầu đặc biệt nào. Còn không, bạn có thể dùng hồ sơ mặc định và thu thập tất cả các lưu lượng mà không có tùy chọn bao gồm hay loại trừ.

## Cách bao gồm
1. Mở **Charles Proxy** lên
2. Điều hướng tới **Proxy > Recording Settings**
3. Nhấp vào tab **Include**
4. Nhấp vào nút **Add**
5. Gõ tên miền trang web giữa 2 dấu "\*" trong trường **Host**, ví dụ: \*utest\* hoặc \*testing.com\*
	- Nếu bạn chỉ dùng tên miền không như **utest** thì nó sẽ bao gồm tất cả lưu lượng mà chứa **utest** trong đó như: **utest.com, utest.net, utest.io, ...**
	- Nếu dùng tên miền đầy đủ như **\*testing.com\*** thì nó sẽ chỉ bao gồm lưu lượng từ tên miền đó thôi.
	- Nhấp đúp vào đối tượng được thêm để chỉnh sửa nếu cần.
6. Nhấp vào **OK** rồi **OK** lần nữa để lưu các thay đổi.

## Cách loại trừ
1. Mở **Charles Proxy** lên
2. Điều hướng tới **Proxy > Recording Settings**
3. Nhấp vào tab **Exclude**
4. Nhấp vào nút **Add**
5. Gõ tên miền trang web giữa 2 dấu "\*" trong trường **Host**, ví dụ: utest hoặc \*utest.com\*
	- Nếu bạn dùng tên miền như **utest** thì nó sẽ loại trừ tất cả lưu lượng mà chứa **utest** trong đó như: **utest.com, utest.net, utest.io, ...**
	- Nếu bạn dùng \*utest.com\* thì nó sẽ chỉ loại trừ lưu lượng của mình tên miền đó mà không ảnh hướng tới các tên miền khác
	- Nhấp đúp vào đối tượng được thêm để chỉnh sửa nếu cần.
6. Nhấp vào **OK** và **OK** lần nữa để lưu các thay đổi.

## Cách xóa đối tượng được thêm vào Inlcude/Exclude
1. Mở **Charles Proxy** lên
2. Điều hướng tới **Proxy > Recording Settings**
3. Nhấp vào tab **Include** hoặc **Exclude**
4. Nhấp vào đối tượng bạn muốn xóa
5. Nhấp vào nút **Remove**.
6. Nhấp **OK** để lưu các thay đổi.

> [!info] Lưu ý
> - Bộ lọc **Include** và **Exclude** có thể được sử dụng đồng thời
> - Khi cùng một **Host** được thêm vào cả tab Include và Exclude, thì Exclude sẽ ghi đè lên Include nên Charles sẽ loại trừ tất cả các lưu lượng từ **Host** đó
> - Bạn nên đảm bảo các đối tượng được nhập chính xác, và nhật ký tương ứng với cài đặt bạn đã chọn
> - Nếu bạn đang làm việc trên dự án có liên quan tới Charles, hãy nhớ cập nhật hoặc xóa các tùy chọn này trước và sau mỗi phiên làm việc

## Máy chủ tập trung
Với tính năng **máy chủ tập trung**, bạn có thể nhanh chóng lọc ra tất cả lưu lượng mà khách hàng không quan tâm nếu được yêu cầu. Làm theo các bước sau để tìm hiểu cách bật và cấu hình tính năng này:

1. Mở **Charles Proxy** lên
2. Điều hướng tới **View > Focused Hosts** hoặc nhấn tổ hợp phím **Ctrl+Shift+O**
3. Nhấp vào nút **Add**
4. Gõ tên miền và bạn muốn Charles tập trung vào, ví dụ: **\*academybugs\* hay academybugs.com** và nhập **443** đối với cổng HTTPs
5. Nhấp **OK** và **OK** lần nữa để lưu các thay đổi
6. Bạn sẽ thấy Charles chia các lưu lượng thành 2 nhóm: nhóm được tập trung và nhóm còn lại
7. Để xóa **host** từ **Focused Hosts**, bạn có thể chọn **host** mà bạn muốn xóa và nhấp vào nút **Remove** rồi lưu các thay đổi bằng cách nhấp **OK**.

# Fiddler đối với máy tính
## Fiddler Classic và Fiddler Everywhere
**Fiddler Classic** chỉ hoạt động trên **Windows** và đi kèm với tất cả các tính năng, tùy chọn cơ bản

**Fiddler Everywhere** được thiết kế để hỗ trợ **đa nền tảng** (Windows, MacOS, Linux, ...) với giao diện hiện đại cũng như các tính năng nâng cao cho việc gỡ lỗi web và thử nghiệm hiệu suất. Nhưng nó tính phí và chỉ có thể dùng thử miến phí trong 10 ngày!

Hãy cân nhắc yêu cầu của dự án để biết bạn nên chọn phiên bản nào của Fiddler. Nếu không có thông tin cụ thể, bạn có thể trao đổi với đội ngũ dự án để biết cái nào phù hợp với yêu cầu

> [!info] Lưu ý
> Việc sử dụng Fiddler Everywhere với mục đích thương mại yêu cầu mua một giấy phép. Bằng cách sử dụng phần mềm, bạn đồng ý với các điều khoản và điều kiện được nhấn mạnh trong thỏa thuận giấy phép sử dụng. Mỗi cá nhân có trách nhiệm tuân thủ và thực hiện nghĩa vụ mà giấy phép đưa ra.

## Cách thu thập nhật ký
%% gif/video %%

1. Tải xuống và cài đặt [Fiddle Classic](https://www.telerik.com/fiddler/fiddler-classic) hoặc [Fiddler Everywhere](https://www.telerik.com/fiddler/fiddler-everywhere)
	- Đối với **Fiddler Everywhere**, bạn phải có một tài khoản được đăng ký hoặc thông tin xác thực nếu được cung cấp trong dự án thử nghiệm
2. Kích hoạt **HTTPS Traffic capture**:
	- **Fiddler Everywhere**:
		- Nhấp vào **Settings** hoặc **biểu tượng bánh răng** ở góc trên bên phải
		- Trên tab HTTPs, nhấp vào nút **Trust Fiddler CA**
			- **Windows**: Chọn **Yes** trong cửa sổ được bật lên để xác thực cài đặt.
			- **MacOS**: Nhập thông tin đăng nhập quản trị trên máy của bạn trong cửa sổ bật lên để tin tưởng chứng chỉ.
		- Bật tùy chọn **Capture HTTPS traffic** lên
		- Nhấp vào **Save** để lưu lại các thay đổi và đóng cửa sổ settings lại.
	- **Fiddler Classic**:
		- Nhấp vào menu **Tools**
		- Chọn **Options**
		- Trên tab **HTTPs**, bật tùy chọn **Decrypt HTTPS traffic** lên
		- Chọn **Yes** trong cửa sổ bật lên để tin tưởng chứng chỉ **Fiddler Classic Root**
		- Chọn **Yes** lần nữa để xác nhận thêm chứng chỉ vào danh sách các chứng chỉ được tin tưởng bởi máy tính
		- Chọn **Yes** để đồng ý các thay đổi và nhấp **OK** để đóng cửa sổ **xác thực thành công** lại.
		- Nhấp vào **OK** để đóng cửa sổ **Options** lại
3. Đóng tất cả các tab trình duyệt không cần thiết và ứng dụng chạy nền
4. Xóa nhật ký cũ
	- **Fiddler Everywhere**: Mở khung Traffic ở thanh bên trái ra và nhấp vào nút **Remove All**
	- **Fiddler Classic**: Nhấp vào nút "x" trong thanh công cụ rồi chọn **Remove all** hoặc nhấn **Ctrl+X** trên bàn phím
5. Kích hoạt **System Capturing**
	- **Fiddler Everywhere**: Trên khung **Traffic**, đảm bảo **System Proxy** được bật
	- **Fiddler Classic**: Nhấp vào menu **File** và đảm bảo **Capture Traffic** được bật
6. Xóa cache trình duyệt trước khi thu thập để đảm bảo tất cả các yêu cầu được gửi và nhận (đối với kiểm thử trang web)
7. Thực hiện các bước tái tạo lỗi
8. Làm theo các bước sau nếu muốn xóa các lưu lượng không cần thiết được hiển thị trong danh sách phiên:
	- **Fiddler Everywhere**:
		- Trên khung **Traffic**, nhấp vào nút **Filters**
		- Nhấp vào nút **Add Condition**
		- Thêm **URL** hoặc tên miền mà bạn muốn lọc, ví dụ: academybugs
		- Nhấp vào nút **Apply**
			- Bạn có thể tắt bộ lọc đang được áp dụng bằng cách bỏ tích bộ lọc đó trong cửa sổ **Filters** rồi nhấp vào **Apply**
	- **Fiddler Classic**:
		- Mở tab **Filters** lên
		- Tích vào ô **Use Filters**
		- Nhấp vào danh dách thả **No Host Filter** và thay đổi nó thành **Show only the following Hosts**
		- Thêm **host** vào trường, ví dụ: academybugs.com
		- Nhấp vào **Actions > Run Filterset now**
9. Xuất nhật ký
	- **Fiddler Everywhere**:
		- Nhấp vào một mục trong lưới các phiên
		- Nhấn tổ hợp phím **Ctrl+A** để chọn tất cả các mục
		- Chuột phải vào một trong các mục và chọn **Export**
		- Chọn **Fiddler Archive (SAZ)** làm định dạng file xuất và Nhấp vào vào nút **Next**
		- Nhấp vào **nút 3 chấm** và chọn vị trí xuất mong muốn (đổi tên nếu cần thiết)
		- Nhấp vào nút **Save** và **Save** lại lần nữa để hoàn tất quá trình
	- **Fiddler Classic**:
		- Nhấp vào menu **File**
		- Chọn **Save > All Sessions**
		- Chọn vị trí lưu mong muốn
		- Nhấp vào nút **Save** để hoàn tất

> [!info] Lưu ý
> - Đối với **Firefox**, bạn cần làm các bước dưới đây sau khi xong các bước trên:
> 1. Mở **Firefox** lên và nhấp vào menu **3 gạch ngang** ở góc trên bên phải
> 2. Chọn **Settings**
> 3. Tìm kiếm **Network Settings** và mở nó ra
> 4. Chọn **Use system proxy**
> 5. Nhấp vào **OK** để lưu các thay đổi
> - Đối với Fiddler Classic (Windows), làm theo các bước sau để chắc chắn là bạn tin tưởng **Fiddler Root Certificate**:
> 1. Mở **Firefox** và nhập about:config trong thanh **URL**
> 2. Nhấp vào nút **Accept the Risk and Continue**
> 3. Tìm kiếm mục **security.enterprise_roots.enabled**
> 4. Đảm bảo giá trị là **true** thì bạn mới có thể thu thập trên trình duyệt này!

## Fiddler Cap
Đây là một phiên bản tối giản của **Fiddler Classic** chỉ hỗ trợ thu thập nhật ký. Nó không yêu cầu thiết lập phức tạp khi được so sánh với 2 phiên bản trên. Phần mềm này hiện tại mới chỉ có sẵn cho Windows.

1. Tải xuống, cài đặt và mở [Fiddle Cap](https://www.telerik.com/fiddler/fiddlercap) lên
2. Bật tùy chọn **Decrypt HTTPS traffic**
3. Nhấp **OK** rồi **Yes** để cài chứng chỉ
4. Nhấp vào **Clear Cookies** và **Clear Cache**
5. Nhấp vào nút **1. Start Capture** để bắt đầu thu thập
6. Thực hiện các bước tái tạo lỗi
7. Nhấp vào **2. Stop Capture** để dừng thu thập
8. Nhấp **3. Save Capture** để lưu với định dạng **.saz**

> [!info] Lưu ý
> Đóng ứng dụng này sẽ nhắc bạn xóa chứng chỉ đã được cài. Bạn có thể đồng ý xóa đi hoặc cài một cái mới khi sử dụng ứng dụng hoặc trình duyệt cần kiểm thử lần nữa.

# Fiddler đối với điện thoại
## Điều kiện tiên quyết
- Cả máy tính và điện thoại kết nối cùng một mạng **WiFi**
- Tắt hết VPNs, tường lửa và phần mềm antivirus trên các thiết bị

## Android
%% gif/video %%

1. Thiết lập Fiddler trên máy tính theo các bước từ 1 đến 3 ở trên
2. Trong **Fiddler**:
	- Nhấp vào **Settings** và chọn **Connections**
	- Kích hoạt **Allow remote computers to connect**
	- Đảm bảo số cổng được hiển thị trong tab **Connections** là **8866**
	- Nhấp vào **Save** để lưu các cài đặt
3. Tìm và ghi lại địa chỉ IP cục bộ của máy tính bằng các bước sau:
	- **Windows**: Mở **Command Prompt** lên và gõ `ipconfig /all` và ghi lại địa chỉ **IPv4** đối với **WiFi** và **Ethernet** của bạn
	- **MacOS**: Mở **Network Utility > Info** và chọn mạng bạn đang kết nối sau đó ghi lại địa chỉ **IPv4** được hiển thị
4. Kết nối tới **Fiddler**:
	- Trên điện thoại, mở cài đặt **WiFi** lên và chọn mạng wifi đang kết nối
	- Mở tùy chọn nâng cao đối với mạng đó và thay đổi cài đặt proxy thành **Manual** và điền các thông tin sau:
		- **Proxy hostname**: Gõ địa chỉ bạn đã ghi lại ở bước 3
		- **Proxy port**: Gõ số cổng là **8866**
	- Lưu lại cài đặt proxy
5. Cài chứng chỉ **Fiddler Root**:
	- Trên điện thoại, mở bất kì trình duyệt nào và điều hướng tới http://ipv4.fiddler:8866/FiddlerRoot.cer
	- Xác thực nếu được yêu cầu, đảm bảo **VPN và apps** được chọn rồi chạm vào **OK**
6. Đóng tất cả chương trình không cần thiết trên máy tính của bạn và xóa nhật ký cũ đi bằng cách nhấp vào nút **Remove all**
7. Tắt nút **Live Traffic** đi
	- Làm điều này sẽ không ảnh hưởng đến lưu lượng trên máy tính của bạn, bạn nên bật nó lại khi thu thập nhật ký cho máy tính
8. Trên điện thoại, thực hiện các bước tái tạo lỗi
9. Xong rồi thì nhấp vào **File**, di chuột qua **Save Archive** và chọn **All Sessions**, sau đó lưu lại ở định dạng **.saz** (đừng chọn bất kì tùy chọn mã hóa nào)

## iOS
%% gif/video %%

1. Thiết lập Fiddler trên máy tính theo các bước từ 1 đến 3 ở trên
2. Trong **Fiddler**:
	- Nhấp vào **Settings** và chọn **Connections**
	- Kích hoạt **Allow remote computers to connect**
	- Đảm bảo số cổng được hiển thị trong tab **Connections** là **8866**
	- Nhấp vào **Save** để lưu các cài đặt
3. Tìm và ghi lại địa chỉ IP cục bộ của máy tính bằng các bước sau:
	- **Windows**: Mở **Command Prompt** lên và gõ `ipconfig /all` và ghi lại địa chỉ **IPv4** đối với **WiFi** và **Ethernet** của bạn
	- **MacOS**: Mở **Network Utility > Info** và chọn mạng bạn đang kết nối sau đó ghi lại địa chỉ **IPv4** được hiển thị
4. Kết nối tới **Fiddler**:
	- Trên điện thoại, đi tới **Settings > WiFi** và chạm vào nút **"i"** bên cạnh mạng đang kết nối
	- Chạm vào **Configure Proxy** và chọn **Manual**:
		- **Proxy hostname**: Gõ địa chỉ bạn đã ghi lại ở bước 3
		- **Proxy port**: Gõ số cổng là **8866**
	- Lưu lại cài đặt proxy
5. Cài chứng chỉ **Fiddler Root**:
	- Trên điện thoại, mở bất kì trình duyệt nào (ưu tiên Safari) và điều hướng tới http://ipv4.fiddler:8866/FiddlerRoot.cer
	- Chạm vào **Allow**
	- Mở **Settings** lên, chạm vào **General** và chạm vào **VPN and Device Managemennt** (đối với iOS 15+) hoặc **Profiles and Device Management** (đối với iOS cũ hơn), chọn hồ sơ **DO_NOT_TRUST_FiddlerRoot** rồi cài nó.
	- Điều hướng tới **Settings > General > About > Certificate Trust Settings** và kích hoạt **Enable Full Trust For Root Certificates** 
6. Đóng tất cả chương trình không cần thiết trên máy tính của bạn và xóa nhật ký cũ đi bằng cách nhấp vào nút **Remove all**
7. Tắt nút **Live Traffic** đi
	- Làm điều này sẽ không ảnh hưởng đến lưu lượng trên máy tính của bạn, bạn nên bật nó lại khi thu thập nhật ký cho máy tính
8. Trên điện thoại, thực hiện các bước tái tạo lỗi
9. Xong rồi thì nhấp vào **File**, di chuột qua **Save Archive** và chọn **All Sessions**, sau đó lưu lại ở định dạng **.saz** (đừng chọn bất kì tùy chọn mã hóa nào)

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




