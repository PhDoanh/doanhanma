---
status: Done
title: Hàng đợi ưu tiên trong C++
draft: false
tags:
  - cpp
  - cpp-language
  - dsa
  - stl
  - competitive
  - data-structure
  - priority-queue
  - coding
---
%% Bắt đầu tại đây %%
# Giới thiệu
- **Hàng đợi ưu tiên** tương tự như [[queue|hàng đợi thông thường]] nhưng ưu tiên phần tử lớn hơn (nhỏ hơn) lên đầu hàng đợi làm cho thứ tự các phần tử không tăng (không giảm)
- **Hàng đợi ưu tiên** mặc định mượn `vector` để lưu trữ các phần tử, có thể dùng `deque` để thay thế nên bộ nhớ các phần tử sẽ được cấp phát tùy vào vùng chứa mà **hàng đợi ưu tiên** mượn
- **Hàng đợi ưu tiên** là việc triển khai cấu trúc dữ liệu Heap (mặc định là max heap)
- **Hàng đợi ưu tiên** được định nghĩa trong lớp `std::priority_queue` của thư viện `<queue>`

> [!info]- Lưu ý
> Ví dụ ưu tiên phần tử nhỏ hơn lên đầu hàng đợi (min heap): `priority_queue<int, vector<int>, greater<int>> pq;`

# Các thao tác trên hàng đợi ưu tiên

| Hàm        | Mô tả                                                           | VD (dòng)    |
| ---------- | --------------------------------------------------------------- | ------------ |
| `empty()`  | Kiểm tra hàng đợi ưu tiên rỗng hay không                        | 7            |
| `size()`   | Trả về số phần tử hàng đợi ưu tiên                              | 26           |
| `top()`    | Trả về phần tử đầu hàng đợi ưu tiên                             | 9            |
| `push(e)`  | Thêm phần tử **e** vào cuối hàng đợi ưu tiên                    | 20-22, 28-31 |
| `pop()`    | Xóa phần tử đầu hàng đợi ưu tiên                                | 10           |
| `swap(pq)` | Hoán đổi hàng đợi ưu tiên hiện tại với **pq** cùng kiểu dữ liệu | 32           |

> [!info]- Lưu ý
> `swap`: Kích thước 2 hàng đợi ưu tiên có thể khác nhau

**Ví dụ**
```cpp
#include <iostream>
#include <queue>
using namespace std;
 
void print(priority_queue<int> pq)
{
	while(!pq.empty())
	{
		cout << pq.top() << ' ';
		pq.pop();
	}
	cout << '\n';
}
 
int main()
{
	priority_queue<int> pq; // max heap
	
	// current priority queue: (nothing)
	pq.push(1);
	pq.push(5);
	pq.push(3);
	print(pq); // 5 3 1
 
	// current priority queue: 5 3 1
	cout << pq.size() << '\n'; // 3
	priority_queue<int, vector<int>, greater<int>> pq1;
	pq1.push(3);
	pq1.push(1);
	pq1.push(2);
	pq1.push(4);
	pq.swap(pq1);
	print(pq); // 1 2 3 4
	print(pq1); // 5 3 1
 
	return 0;
}
```

**Tham khảo thêm**: [Priority Queue in C++ Standard Template Library (STL) - GeeksforGeeks](https://www.geeksforgeeks.org/priority-queue-in-cpp-stl/)

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