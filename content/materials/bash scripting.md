---
status: Backlog
title: Viết kịch bản Bash cho người mới
draft: true
tags:
  - bash
  - linux
  - language
  - scripting
  - automative
  - shell
---
%% Bắt đầu tại đây %%
![[Pasted image 20240718145615.png|banner]]

Trong Linux, tự động hóa quy trình phụ thuộc nhiều vào tập lệnh shell. Điều này liên quan đến việc tạo ra tệp chứa một loạt lệnh có thể thực thi cùng nhau.

Trong bài viết này, chúng ta sẽ đi tìm hiểu cơ bản về kịch bản Bash bao gồm các biến, lệnh, đầu vào/ra và gỡ lỗi kèm theo các ví dụ dễ hiểu
# Trước khi tiếp tục
Bạn cần có một phiên bản đang chạy của Linux với quyền truy cập vào trình nhắc lệnh (phần mềm tương tác với hệ điều hành thông qua dòng lệnh)

Nếu máy bạn không chạy Linux, bạn có thể dễ dàng truy cập trình nhắc lệnh thông qua [Replit](https://replit.com/) (một IDE cho phép tổ chức code chạy trên máy ảo của bất cứ hệ điều hành nào)

Hoặc cài đặt Linux trên Windows sử dụng WSL (Windows Subsystem for Linux) theo hướng dẫn [[linux on win|này]]
# Giới thiệu
## Kịch bản Bash là gì?
**Kịch bản Bash** là một tệp chứa một dãy các lệnh được thực thi bởi chương trình bash theo từng dòng. Nó cho phép bạn xử lý một chuỗi các tác vụ như điều hướng tới một thư mục cụ thể, tạo một thư mục mới rồi chạy một chương trình bằng dòng lệnh.

Bằng cách viết 3 câu lệnh tương ứng với 3 tác vụ trên trong kịch bản, bạn có thể tiết kiệm rất nhiều thời gian bằng cách chạy kịch bản nhiều lần!  

## Ưu điểm của kịch bản Bash
Kịch bản Bash là một công cụ mạnh mẽ và linh hoạt cho việc tự động hóa các nhiệm vụ quản trị hệ thống, quản lý tài nguyên hệ thống và thực hiện các công việc thường ngày khác trong Unix/Linux. Dưới đây là một số các ưu điểm của nó:

- **Tự động hóa cao**: Kịch bản bash cho phép bạn chạy nhiều lần các tác vụ, tiết kiệm thời gian và giảm thiểu rủi ro khi chạy thủ công
- **Tính di động**: kịch bản Bash có thể chạy trên nhiều nền tảng và hệ điều hành bao gồm Unix/Linux, macOS và thậm chí là Windows thông qua trình giả lập hoặc máy ảo.
- **Tính linh hoạt**: có khả năng tùy biến cao và dễ dàng chỉnh sửa để phù hợp với yêu cầu cụ thể. Cũng có thể kết hợp với các ngôn ngữ lập trình hoặc các tiện ích khác để khiến kịch bản Bash mạnh mẽ hơn 
- **Dễ tiếp cận**: kịch bản Bash dễ để viết và không đòi hỏi bất cứ công cụ chuyên dụng hay phần mềm nào. Chúng có thể được chỉnh sửa trong bất kì trình sửa văn bản nào và hầu hết các hệ điều hành đều có sẵn trình thông dịch bash
- **Hỗ trợ tích hợp**: kịch bản Bash có thể được tích hợp với các ứng dụng và công cụ khác như cơ sở dữ liệu, dịch cụ web, dịch vụ đám mây, ...
- **Dễ gỡ lỗi**: dễ gỡ lỗi và hầu hết các trình nhắc lệnh đều có các công cụ gỡ lỗi và báo cáo lỗi tích hợp có thể giúp xác định và khắc phục sự cố nhanh chóng.

## Tổng quan về trình nhắc lệnh
**Trình nhắc lệnh** (được biết đến với thuật ngữ **"shell"**) là một chương trình cung cấp giao diện dòng lệnh dùng để tương tác với hệ điều hành

**Bash (Bourne-Again SHell)** là một trình nhắc lệnh phổ biến trong Unix/Linux và là shell mặc định trong nhiều bản phân phối của Linux

| ![[Pasted image 20240719173330.png]] |
| :----------------------------------: |
|  Hình ảnh giao diện dòng lệnh shell  |

Trong hình ảnh trên, `phdoanh@LAPTOPSERVER:~$` biểu thị dấu nhắc lệnh với ý nghĩa chờ lệnh từ người dùng 

Nếu shell chạy với quyền quản trị viên thì dấu nhắc lệnh sẽ trông như thế này:
```
[root@host ~]#
```

Ngoài Bash ra cũng có những kiểu shell khác như: Korn Shell (ksh), C shell (csh), PowerShell (ps), ... Mỗi shell sẽ có những cú pháp và tính năng khác nhau, nhưng đều cùng mục đích là cung cấp giao diện dòng lệnh tới người dùng

Bạn có thể xem kiểu shell mình đang sử dụng bằng lệnh: `ps`
![[Pasted image 20240719175443.png|center]]

> [!info] Lưu ý
> Hướng dẫn này sẽ sử dụng "bash" shell!

# Cách viết kịch bản Bash
%% continue %%


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