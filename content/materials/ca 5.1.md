---
draft: true
status: Done
title: Bộ nhớ Cache và nguyên lý của nó
description: 
author: PhDoanh
authorlink: https://github.com/PhDoanh
tags: 
aliases:
  - ca
cssclasses:
---
# Bộ nhớ đệm là gì?
Bộ nhớ đệm (cache memory) là một phần quan trọng trong hệ thống máy tính, giúp tăng tốc độ truy cập dữ liệu bằng cách lưu trữ tạm thời các thông tin thường xuyên được sử dụng. Nếu bạn tưởng tượng bộ nhớ máy tính giống như một thư viện, thì bộ nhớ cache chính là bộ sưu tập những cuốn sách mà bạn thường xuyên đọc nhất, được đặt ở vị trí gần nhất để dễ dàng truy cập.

> [!question]- Tại sao cần bộ nhớ đệm?
> Bộ nhớ chính (RAM) là nơi lưu trữ dữ liệu và chương trình mà CPU cần trong quá trình xử lý. Tuy nhiên, bộ nhớ chính thường chậm hơn nhiều so với tốc độ xử lý của CPU. Để giảm thiểu độ trễ khi truy cập dữ liệu từ bộ nhớ chính, bộ nhớ đệm được thiết kế để lưu trữ một bản sao của các dữ liệu mà CPU có khả năng cần trong tương lai.

Trong bài viết này, chúng ta sẽ khám phá nguyên lý hoạt động của bộ nhớ đệm, cấu trúc của nó, cũng như cách mà nó tương tác với bộ nhớ chính.

# Cấu trúc bộ nhớ đệm
Bộ nhớ đệm được thiết kế nhằm kết hợp giữa tốc độ truy cập nhanh của bộ nhớ đắt tiền với dung lượng lớn của bộ nhớ rẻ tiền hơn. Hệ thống bộ nhớ đệm thường có ba cấp độ chính:

- **Bộ Nhớ Đệm Cấp 1 (L1)**: Tốc độ cao nhất và dung lượng nhỏ nhất. Nó thường được tích hợp trực tiếp vào CPU.
- **Bộ Nhớ Đệm Cấp 2 (L2)**: Tốc độ thấp hơn L1 nhưng có dung lượng lớn hơn.
- **Bộ Nhớ Đệm Cấp 3 (L3)**: Tốc độ thấp hơn L2 nhưng lại có dung lượng lớn nhất trong ba cấp độ.

| ![[Pasted image 20241003160149.png]] |
|:------------------------------------:|
|         Minh họa Bộ nhớ đệm          | 

Nhờ vào hiện tượng =="tính địa phương của tham chiếu" (locality of reference)==, khi một khối dữ liệu được đưa vào bộ nhớ đệm để đáp ứng một yêu cầu truy cập, có khả năng cao rằng sẽ có những yêu cầu tiếp theo đến từ chính vị trí bộ nhớ đó hoặc đến các ==từ==[[#^79e2e5|¹]] khác trong cùng một khối. ^c0650f

**Cấu trúc của bộ nhớ đệm thường bao gồm các thành phần chính sau**:
- **Khối (Block)**: Đơn vị nhỏ nhất trong quá trình truyền tải giữa bộ nhớ đệm và bộ nhớ chính. Mỗi khối chứa một số từ dữ liệu.
- **Dòng (Line)**: Phần của bộ nhớ đệm có khả năng chứa một khối. Mỗi dòng cũng bao gồm các thông tin điều khiển.
- **Thẻ (Tag)**: Phần của dòng bộ nhớ đệm được sử dụng cho mục đích địa chỉ. Thẻ giúp xác định khối nào đang được lưu trữ trong dòng đó.

Bộ nhớ chính có thể chứa lên đến $2^n$ từ địa chỉ có thể truy cập, mỗi từ có một địa chỉ n-bit duy nhất. Để phục vụ cho việc ánh xạ, bộ nhớ được xem là bao gồm một số lượng khối cố định dài $K$ từ mỗi khối.

| ![[Pasted image 20241003160502.png]] |
|:------------------------------------:|
|          Cấu tạo bộ nhớ đệm          | 

# Quy trình đọc dữ liệu từ bộ nhớ đệm
Quá trình đọc dữ liệu từ bộ nhớ đệm có thể được mô tả qua các bước sau:
1. **Nhận Địa Chỉ (Receive Address)**: CPU phát sinh địa chỉ đọc (RA) của từ dữ liệu cần truy cập.
2. **Kiểm Tra Bộ Nhớ Đệm**: Kiểm tra xem khối chứa địa chỉ RA có trong bộ nhớ đệm hay không.
    - **Nếu có (Cache Hit)**: Từ dữ liệu sẽ được trả về cho CPU ngay lập tức.
    - **Nếu không (Cache Miss)**: Khối chứa từ dữ liệu cần thiết sẽ phải được tải từ bộ nhớ chính vào bộ nhớ đệm rồi mới đưa vào CPU.

|        ![[Pasted image 20241003161652.png]]        |
|:--------------------------------------------------:|
| Nguyên lý hoạt động của bộ nhớ đệm khi đọc dữ liệu | 

Khi một khối được đưa vào bộ nhớ đệm trong trường hợp xảy ra lỗi cache, nó thường không được chuyển đi trong một lần mà là qua nhiều lần. Để cải thiện hiệu suất, kỹ thuật =="từ quan trọng trước" (critical word first)== thường được sử dụng. Khi xảy ra lỗi bộ nhớ đệm, phần cứng yêu cầu từ bị thiếu đầu tiên từ bộ nhớ và gửi nó cho CPU ngay khi nó đến, cho phép CPU tiếp tục thực hiện trong khi những từ còn lại trong khối được nạp vào bộ nhớ đệm.

# Tổ chức bộ nhớ đệm trên hệ thống máy tính
Cache kết nối với CPU qua các đường dữ liệu, điều khiển và địa chỉ. Nếu xảy ra **cache hit**, giao tiếp chỉ diễn ra giữa CPU và cache, không cần qua hệ thống bus. Nếu xảy ra **cache miss**, địa chỉ và dữ liệu sẽ được xử lý qua hệ thống bus để truy cập bộ nhớ chính.

| ![[Pasted image 20241003161945.png]] |
|:------------------------------------:|
|     Tổ chức bộ nhớ đệm điển hình     | 

# Lợi ích của Bộ nhớ đệm
Việc sử dụng bộ nhớ đệm mang lại nhiều lợi ích đáng kể:

- **Tăng tốc độ truy cập**: Bộ nhớ đệm cho phép CPU truy cập nhanh hơn vào dữ liệu so với việc truy cập trực tiếp từ bộ nhớ chính.
- **Giảm tải cho bộ nhớ chính**: Bằng cách lưu trữ dữ liệu được truy cập thường xuyên, bộ nhớ đệm giúp giảm lưu lượng công việc cho bộ nhớ chính.
- **Cải thiện hiệu suất tổng thể**: Nhờ vào việc giảm thời gian truy cập và cải thiện hiệu suất, bộ nhớ đệm góp phần làm cho hệ thống máy tính hoạt động mượt mà hơn.

# Kết luận
Bộ nhớ đệm là một phần quan trọng trong hệ thống máy tính, giúp tối ưu hóa hiệu suất truy cập dữ liệu. Hiểu rõ nguyên lý hoạt động của bộ nhớ đệm không chỉ giúp cải thiện thiết kế phần cứng mà còn có thể hỗ trợ cho việc lập trình hiệu quả hơn. Việc tối ưu hóa cách thức mà bộ nhớ đệm hoạt động có thể mang lại lợi ích lớn cho hiệu suất tổng thể của hệ thống.

Hy vọng bài viết này đã giúp bạn hiểu rõ hơn về các nguyên lý cơ bản của bộ nhớ đệm và tầm quan trọng của nó trong các hệ thống máy tính hiện đại.

> [!quote]- Còn một điều nữa☝️...
> *Đừng quên thả **tương tác** kèm **bình luận** của bạn để giúp mình cải thiện blog nhé!* Hoặc có thể ủng hộ một ít động lực đó ngay bây giờ bằng cách:
> 
> [![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/M4M111S8CI)

1. **Từ (Word)**: Là đơn vị dữ liệu cơ bản mà CPU có thể xử lý trong một lần. Kích thước của một từ phụ thuộc vào kiến trúc của bộ vi xử lý và thường là một số nguyên dương, phổ biến nhất là 16 bit, 32 bit, hoặc 64 bit. [[#^c0650f|↩️]]


