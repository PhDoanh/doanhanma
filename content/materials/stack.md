---
status: Done
title: Ngăn xếp trong C++
draft: false
tags:
  - cpp
  - cpp-language
  - dsa
  - stl
  - competitive
  - data-structure
  - stack
---
%% Bắt đầu tại đây %%
# Giới thiệu
- **Ngăn xếp** là một cấu trúc dữ liệu kiểu “chồng sách”, quyển sách cho vào sau cùng sẽ là quyển được lấy ra đầu tiên hay “last in, first out” (LIFO)
- Mặc định **ngăn xếp** mượn `deque` để lưu trữ các phần tử, nhưng có thể dùng `vector` hoặc `list` để thay thế nên các phần tử sẽ được cấp phát tùy vào vùng chứa mà **ngăn xếp** mượn
- **Ngăn xếp** được định nghĩa trong lớp `std::stack` của thư viện `<stack>`

> [!info]- Lưu ý
> Ví dụ đặt **vector** (hoặc list) làm vùng chứa cho **ngăn xếp**: `stack<int, vector<int>>`, bộ nhớ các phần tử lúc này sẽ được cấp phát liền kề thay vì rời rạc như `deque` và `list`

# Các thao tác trên ngăn xếp

| Hàm       | Mô tả                                                           | VD (dòng)  |
| --------- | --------------------------------------------------------------- | ---------- |
| `empty()` | Kiểm tra ngăn xếp rỗng hay không                                | 7          |
| `size()`  | Trả về số phần tử ngăn xếp                                      | 32         |
| `top()`   | Trả về tham chiếu đến phần tử trên cùng của ngăn xếp            | 9          |
| `push(e)` | Thêm phần tử **e** vào trên cùng ngăn xếp                       | 20, 21, 22 |
| `pop()`   | Xóa phần tử trên cùng ngăn xếp                                  | 10         |
| `swap(s)` | Hoán đổi nội dung ngăn xếp hiện tại với **s** cùng kiểu dữ liệu | 27         |

> [!info]- Lưu ý
> `swap`: Kích thước 2 **ngăn xếp** có thể khác nhau

**Ví dụ**
```cpp
#include <iostream>
#include <stack>
using namespace std;
 
void print(stack<int> s)
{
	while(!s.empty())
	{
		cout << s.top() << ' ';
		s.pop();
	}
	cout << '\n';
}
 
int main()
{
	stack<int> s; // using deque for container
 
	// current stack: (nothing)
	s.push(2);
	s.push(3);
	s.push(1); // top most element
	print(s); // 1 3 2
 
	// current stack: 2 3 1
	stack<int> s1{4, 6, 5, 7};
	s.swap(s1);
	print(s); // 4 6 5 7
	print(s1); // 2 3 1
 
	// current stack: 4 6 5 7
	cout << s.size() << '\n'; // 4
 
	return 0;
}
```

**Tham khảo thêm**: [Stack in C++ STL - GeeksforGeeks](https://www.geeksforgeeks.org/stack-in-cpp-stl/)

> [!quote] Lời trích dẫn
> *Nếu thấy hay thì đừng quên thả tương tác 💛 và bình luận ý kiến 🗯️ để giúp mình có thêm động lực! Hoặc "Buy me a coffee" để mình và mọi người biết bạn là người ủng hộ số 1 nhé 🎉 - Phạm Gia Doanh*