---
status: Done
title: Hàng đợi trong C++
draft: false
tags:
  - dsa
  - cpp
  - cpp-language
  - data-structure
  - competitive
  - stl
  - queue
---
%% Bắt đầu tại đây %%
# Giới thiệu
- **Hàng đợi** là một cấu trúc dữ liệu hoạt động theo kiểu **“xếp hàng”**, người nào vào hàng đầu tiên sẽ là người ra đầu tiên so với những người vào sau hay “first in first out” (FIFO)
- Mặc định **hàng đợi** dùng `deque` để lưu trữ các phần tử, có thể dùng `list` để thay thế và bộ nhớ các phần tử trong hàng đợi luôn được cấp phát rời rạc
- Hàng đợi được định nghĩa trong lớp `std::queue` của thư viện `<queue>`

# Các thao tác trên hàng đợi

| Hàm       | Mô tả                                                           | VD (dòng)  |
| --------- | --------------------------------------------------------------- | :--------: |
| `empty()` | Kiểm tra hàng đợi rỗng hay không                                |     7      |
| `size()`  | Trả về số phần tử hàng đợi                                      |     26     |
| `swap(q)` | Hoán đổi nội dung hàng đợi hiện tại với **q** cùng kiểu dữ liệu |     31     |
| `front()` | Trả về (tham chiếu) phần tử đầu hàng đợi                        |     9      |
| `back()`  | Trả về (tham chiếu) phần tử cuối hàng đợi                       |     27     |
| `push(e)` | Thêm phần tử **e** vào cuối hàng đợi                            | 20, 21, 22 |
| `pop()`   | Xóa phần tử đầu hàng đợi                                        |     10     |

> [!info]- Lưu ý
> `swap`: Kích thước 2 hàng đợi có thể khác nhau

**Ví dụ**
```cpp
#include <iostream>
#include <queue>
using namespace std;
 
void print(queue<int> q)
{
	while(!q.empty())
	{
		cout << q.front() << ' ';
		q.pop();
	}
	cout << '\n';
}
 
int main()
{
	queue<int> q;
 
	// current queue: (nothing)
	q.push(10); // first of queue
	q.push(5);
	q.push(15); // last of queue
	print(q); // 10 5 15
 
	// current queue: 10 5 15
	cout << q.size() << '\n'; // 3
	cout << q.back() << '\n'; // 15
 
	// current queue: 10 5 15
	queue<int> q1;
	q.swap(q1);
	print(q); // (nothing)
	print(q1); // 10 5 15
 
	return 0;
}
```

**Tham khảo thêm**: [Queue in C++ Standard Template Library (STL) - GeeksforGeeks](https://www.geeksforgeeks.org/queue-cpp-stl/)

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