---
status: Done
title: Vector trong C++
draft: false
tags:
  - dsa
  - cpp
  - cpp-language
  - data-structure
  - vector
  - competitive
  - stl
  - coding
---
%% Bắt đầu tại đây %%
# Giới thiệu
- **Vector** là một mảng động, có thể tự thay đổi kích thước khi một phần tử được chèn hoặc xóa trong thời gian chạy chương trình.
- Bộ nhớ các phần tử trong **vector** được cấp phát liền kề nên chúng có thể được truy cập ngẫu nhiên hoặc duyệt bằng các lệnh vòng lặp.
- **Vector** được định nghĩa bên trong lớp `std::vector` của thư viện `<vector>`, cung cấp nhiều hàm thành viên để thao tác trên nó

# Các thao tác trên vector

| Hàm                                                                 | Mô tả                                                                                                                                          |     VD (dòng)      |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |:------------------:|
| `push_back(e)`                                                      | Thêm p.tử **e** vào cuối vector                                                                                                                |         22         |
| `pop_back()`                                                        | Xóa p.tử cuối vector                                                                                                                           |         18         |
| `size()`                                                            | Trả về số p.tử vector                                                                                                                          |         26         |
| `empty()`                                                           | Kiểm tra vector rỗng hay không                                                                                                                 |         27         |
| `resize(n, e)`                                                      | Thay đổi kích thước vector thành  <br>**n** phần tử và bổ sung các phần tử **e** nếu cần                                                       |     30, 32, 34     |
| `operator[i]`                                                       | Truy cập phần tử vector thứ **i**                                                                                                              |         38         |
| `front()`                                                           | Trả về phần tử đầu vector                                                                                                                      |         39         |
| `back()`                                                            | Trả về phần tử cuối vector                                                                                                                     |         39         |
| `begin()`                                                           | Trả về iterator trỏ vào p.tử đầu vector                                                                                                        |         8          |
| `end()`                                                             | Trả về iterator trỏ vào vị trí sau p.tử cuối vector                                                                                            |         8          |
| `insert(it, e)`  <br>`insert(it, n, e)`  <br>`insert(it, it1, it2)` | Chèn một hoặc **n** phần tử **e** hoặc các p.tử từ  <br>vị trí **it1** đến **it2** tại vị trí **it** cho trước                                 | 48  <br>50  <br>52 |
| `erase(it)`  <br>`erase(it1, it2)`                                  | Xóa phần tử tại vị trí **it** hoặc  <br>nhiều phần tử từ vị trí **it1** đến **it2**                                                            |     42  <br>44     |
| `clear()`                                                           | Xóa toàn bộ p.tử vector                                                                                                                        |         56         |
| `swap(v)`                                                           | Hoán đổi nội dung vector hiện tại với vector **v**                                                                                             |         59         |
| `assign(n, e)`  <br>`assign(it1, it2)`  <br>`assign(il)`            | gán cho vector **n** phần tử **e** hoặc các phần tử từ  <br>vị trí **it1** đến **it2** của vector khác hoặc một danh  <br>khởi tạo các phần tử | 63  <br>65  <br>67 |

> [!info]- Lưu ý
>  - **it** ở đây là [random access iterator](https://www.geeksforgeeks.org/random-access-iterators-in-cpp/?ref=header_search), cho phép cộng trừ với 1 số nguyên để dễ dàng di chuyển đến vị trí bất kì làm cho các hàm như chèn, xóa, … dễ sử dụng.
> - `resize`: nếu n nhỏ hơn kích thước vector, các p.tử bổ sung bị loại bỏ, ngc lại nếu không cung cấp **e** thì p.tử bổ sung mặc định là 0
> - `swap`: kích thước 2 vector có thể khác nhau

**Ví dụ**
```cpp
#include <iostream>
#include <vector>
using namespace std;
 
void print(vector<int> v)
{
	// vector<int>::iterator it;
	for(auto it = v.begin(); it != v.end(); it++)
		cout << *it << ' ';
	cout << '\n';
}
 
int main()
{
	vector<int> v{1, 3, 2, 4, 5};
 
	// current vector: 1 3 2 4 5
	v.pop_back();
	print(v); // 1 3 2 4
 
	// current vector: 1 3 2 4 
	v.push_back(0);
	print(v); // 1 3 2 4 0
 
	// current vector: 1 3 2 4 0
	cout << v.size() << '\n'; // 5
	cout << v.empty() << '\n'; // 0 (false)
 
	// current vector: 1 3 2 4 0
	v.resize(3);
	print(v); // 1 3 2
	v.resize(5, 4);
	print(v); // 1 3 2 4 4
	v.resize(7);
	print(v); // 1 3 2 4 4 0 0
 
	// current vector: 1 3 2 4 4 0 0
	cout << v[0] << ' ' << v[v.size()-1] << '\n'; // 1 0
	cout << v.front() << ' ' << v.back() << '\n'; // 1 0
 
	// current vector: 1 3 2 4 4 0 0
	v.erase(v.begin());
	print(v); // 3 2 4 4 0 0
	v.erase(v.begin(), v.begin() + 2);
	print(v); // 4 4 0 0 
 
	// current vector: 4 4 0 0
	v.insert(v.begin(), 5);
	print(v); // 5 4 4 0 0
	v.insert(v.begin(), 2, 6);
	print(v); // 6 6 5 4 4 0 0
	v.insert(v.begin()+2, v.begin()+3, v.begin()+5);
	print(v); // 6 6 4 4 5 4 4 0 0 
 
	// current vector: 6 6 4 4 5 4 4 0
	v.clear();
	print(v); // (nothing)
	vector<int> tmp{1, 2, 3};
	v.swap(tmp);
	print(v); // 1 2 3
 
	// current vector: 1 2 3
	v.assign(5, 4);
	print(v); // 4 4 4 4 4
	v.assign(tmp.begin(), tmp.end());
	print(v); // 1 2 3
	v.assign({6, 9, 6});
	print(v); // 6 9 6
 
	return 0;
}
```

**Tham khảo thêm**: [Vector in C++ STL - GeeksforGeeks](https://www.geeksforgeeks.org/vector-in-cpp-stl/)

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