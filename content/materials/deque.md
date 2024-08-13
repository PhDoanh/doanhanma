---
status: Done
title: Hàng đợi 2 đầu trong C++
draft: false
tags:
  - dsa
  - data-structure
  - cpp
  - cpp-language
  - competitive
  - stl
  - deque
---
%% Bắt đầu tại đây %%
# Giới thiệu
- Hàng đợi 2 đầu tương tự như [[vector]] nhưng thao tác chèn, xóa hiệu quả hơn
- Hàng đợi 2 đầu được định nghĩa trong lớp `std::deque` của thư viện `<deque>`

# Các thao tác trên hàng đợi hai đầu

| Hàm                                                                 | Mô tả                                                                                                                            |     VD (dòng)      |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |:------------------:|
| `insert(it, e)`  <br>`insert(it, n, e)`  <br>`insert(it, it1, it2)` | Chèn phần tử **e** hoặc **n** phần tử **e** hoặc  <br>các phần tử từ vị trí **it1** đến **it2**  <br>tại vị trí **it** cho trước | 48  <br>50  <br>52 |
| `assign(n, e)`  <br>`assign(it1, it2)`                              | Gán **n** phần tử **e** hoặc các phần tử  <br>từ vị trí **it1** đến **it2** vào hàng đợi 2 đầu                                   |     64  <br>66     |
| `resize(n)`                                                         | Thay đổi kích thước hàng đợi 2 đầu thành **n**  <br>phần tử                                                                      |       32, 34       |
| `push_front(e)`                                                     | Thêm phần tử **e** vào đầu hàng đợi 2 đầu                                                                                        |         24         |
| `push_back(e)`                                                      | Thêm phần tử **e** vào cuối hàng đợi 2 đầu                                                                                       |         23         |
| `pop_front()`                                                       | Xóa phần tử đầu hàng đợi 2 đầu                                                                                                   |         19         |
| `pop_back()`                                                        | Xóa phần tử cuối hàng đợi 2 đầu                                                                                                  |         18         |
| `front()`                                                           | Trả về phần tử đầu hàng đợi                                                                                                      |         39         |
| `back()`                                                            | Trả về phần tử cuối hàng đợi                                                                                                     |         39         |
| `clear()`                                                           | Xóa toàn bộ phần tử hàng đợi 2 đầu                                                                                               |         60         |
| `erase(it)`  <br>`erase(it1, it2)`                                  | Xóa phần tử tại vị trí **it** hoặc các phần tử  <br>từ vị trí **it1** đến **it2**                                                |     42  <br>44     |
| `empty()`                                                           | Kiểm tra hàng đợi 2 đầu có rỗng hay không                                                                                        |         29         |
| `size()`                                                            | Trả về số phần tử hàng đợi 2 đầu                                                                                                 |         28         |
| `operator[i]`                                                       | Trả về phần tử hàng đợi 2 đầu tại vị trí **i**                                                                                   |         38         |
| `operator=`                                                         | Gán nội dung mới cho hàng đợi 2 đầu  <br>và thay thế nội dung cũ                                                                 |         15         |
| `swap(dq)`                                                          | Hoán đổi nội dung hàng đợi 2 đầu hiện tại với  <br>**dq** cùng kích thước và kiểu dữ liệu                                        |         57         |
| `begin()`                                                           | Trả về iterator trỏ vào phần tử đầu tiên                                                                                         |         8          |
| `end()`                                                             | Trả về iterator trỏ vào vị trí sau  <br>phần tử cuối cùng                                                                        |         8          |

> [!info]- Lưu ý
> - **it** ở đây là [random access iterator](https://www.geeksforgeeks.org/random-access-iterators-in-cpp/?ref=header_search), cho phép cộng trừ với 1 số nguyên để dễ dàng di chuyển đến vị trí bất kì làm cho các hàm như chèn, xóa, … dễ sử dụng.
> - `resize`: nếu **n** nhỏ hơn kích thước hàng đợi 2 đầu, các phần tử còn lại ngoài **n** phần tử đầu sẽ bị loại bỏ, ngc lại thì bổ sung các phần tử 0 cho đủ **n** phần tử

**Ví dụ**
```cpp
#include <iostream>
#include <deque>
using namespace std;
 
void print(deque<int> dq)
{
	// deque<int>::iterator it;
	for(auto it = dq.begin(); it != dq.end(); it++)
		cout << *it << ' ';
	cout << '\n';
}
 
int main()
{
	deque<int> dq = {1, 3, 2, 4, 5};
 
	// current deque: 1 3 2 4 5
	dq.pop_back();
	dq.pop_front();
	print(dq); // 3 2 4
 
	// current deque: 3 2 4 
	dq.push_back(0);
	dq.push_front(4);
	print(dq); // 4 3 2 4 0
 
	// current deque: 4 3 2 4 0
	cout << dq.size() << '\n'; // 5
	cout << dq.empty() << '\n'; // 0 (false)
 
	// current deque: 4 3 2 4 0
	dq.resize(3);
	print(dq); // 4 3 2
	dq.resize(5);
	print(dq); // 4 3 2 0 0
 
	// current deque: 4 3 2 0 0
	cout << dq[0] << ' ' << dq[dq.size()-1] << '\n'; // 4 0
	cout << dq.front() << ' ' << dq.back() << '\n'; // 4 0
 
	// current deque: 4 3 2 0 0
	dq.erase(dq.begin());
	print(dq); // 3 2 0 0
	dq.erase(dq.begin(), dq.begin() + 2);
	print(dq); // 0 0
 
	// current deque: 0 0
	dq.insert(dq.begin(), 5);
	print(dq); // 5 0 0
	dq.insert(dq.begin(), 2, 6);
	print(dq); // 6 6 5 0 0
	dq.insert(dq.begin()+2, dq.begin()+3, dq.end());
	print(dq); // 6 6 0 0 5 0 0 
 
	// current deque: 6 6 0 0 5 0 0
	deque<int> dq1{1, 2, 3, 4, 5, 6, 7};
	dq.swap(dq1);
	print(dq); // 1 2 3 4 5 6 7
	print(dq1); // 6 6 0 0 5 0 0
	dq.clear();
	print(dq); // (nothing)
 
	// current deque: (nothing)
	dq.assign(5, 4);
	print(dq); // 4 4 4 4 4
	dq.assign(dq1.begin(), dq1.end());
	print(dq); // 6 6 0 0 5 0 0
 
	return 0;
}
```

**Tham khảo thêm**: [Deque in C++ Standard Template Library (STL) - GeeksforGeeks](https://www.geeksforgeeks.org/deque-cpp-stl/)

> [!quote] Lời trích dẫn
> *Nếu thấy hay thì đừng quên thả tương tác 💛 và bình luận ý kiến 🗯️ để giúp mình có thêm động lực! Hoặc "Buy me a coffee" để mình và mọi người biết bạn là người ủng hộ số 1 nhé 🎉 - Phạm Gia Doanh*