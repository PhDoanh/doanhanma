---
status: Done
title: Sử dụng Linux trên Windows 10/11
draft: false
tags:
  - linux
  - os
  - windows
  - virtual-machine
  - utility
cssclasses:
  - imgAdj
---
%% Bắt đầu tại đây %%
![[linux on win (7).png|banner]]

Đôi khi bạn có thể sẽ cần tới 2 hệ điều hành - Windows và Linux, để làm việc, học tập hay thậm chí là thử nghiệm.

May mắn là Windows cung cấp một tiện ích thuận tiện cho phép sử dụng Linux trên cùng một máy mà không phải mua mới hay cài đặt phức tạp. Tiện ích này được gọi là WSL (Windows Subsystem for Linux) và phiên bản mới nhất sẽ được đề cập trong bài viết này!  
# Giới thiệu WSL
**WSL** là hệ thống con của Windows dành cho Linux, cho phép bạn chạy các chương trình, phần mềm thuần Linux trên nó.

Phiên bản mới nhất của WSL là **phiên bản 2** với kiến trúc sử dụng một máy ảo nhẹ, bạn có thể chạy nhân Linux thực tế để cải thiện hiệu suất tổng thể!

## Ưu điểm khi dùng WSL
So với máy ảo truyền thống:
- Thiết lập WSL đơn giản và không mất thời gian
- Nó nhẹ hơn so với các máy ảo mà bạn phải phân bổ tài nguyên từ máy chủ.
- Bạn không cần phải cài đặt bất kỳ ISO hoặc ảnh đĩa ảo nào cho các máy Linux thường là các tệp nặng.
- Bạn có thể sử dụng Windows và Linux ngay cạnh nhau bất cứ lúc nào

# Cách cài đặt WSL
1. Trên thanh tìm kiếm window, mở **"Turn Windows features on or off"**
2. Tích vào ô **"Windows Subsystem for Linux"** rồi nhấn OK
![[linux on win.png|center]]

3. Mở **"Command Prompt"** với tư cách Quản trị viên
![[linux on win (2).png|center]]

4. Chạy lệnh `wsl --install` để bắt đầu cài đặt **Ubuntu**
![[linux on win (3).png|center]]

> [!info]- Lưu ý
> Mặc định, bản phân phối **Ubuntu** sẽ được cài đặt. Nếu muốn cài một bản phân phối khác, bạn có thể xem danh sách các bản phân phối có sẵn bằng lệnh: 
> ```
> wsl --list --online
> ```  
> và cài bằng lệnh:
> ```
> wsl --install -d <tên bản phân phối>
> ```
> Ví dụ: `wsl --install -d Debian`

5. Nhập tên và mật khẩu cho tài khoản người dùng
![[linux on win (4).png|center]]

> [!info]- Lưu ý
> Hệ thống không hiển thị mật khẩu bạn gõ vì nó đang ẩn đi nên cứ nhập như bình thường

6. Bạn sẽ được đăng nhập tự động vào Ubuntu sau khi thực hiện các bước trên. Tiếp tục khám phá hoặc thoát bằng lệnh `exit`  
![[linux on win (6).png|center]]

> [!tip]- Mẹo
> Lần tới bạn có thể tìm **Ubuntu** trong thanh tìm kiếm và chạy nó hoặc nhập `ubuntu` trong **"Command Prompt"** để sử dụng

# Kết bài
WSL là một tiện ích tuyệt vời để sử dụng Linux ngay trên Windows. Nó cho bạn một nơi để học hỏi, đặc biệt với những người mới bắt đầu!

> [!quote] Lời trích dẫn
> *Nếu thấy hay thì đừng quên thả tương tác 💖 và bình luận ý kiến 🗯️ để giúp mình có thêm động lực! Hoặc "Buy me a coffee" để mình và mọi người biết bạn là người ủng hộ số 1 nhé 🎉 - Phạm Gia Doanh*