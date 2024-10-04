---
status: Done
title: Tập hợp trong C++
author: PhDoanh
authorlink: https://github.com/PhDoanh
draft: false
tags:
  - cpp
  - cpp-language
  - dsa
  - stl
  - competitive
  - set
  - data-structure
  - coding
---
%% Bắt đầu tại đây %%
# Giới thiệu

|                       |   Set   |   Unordered Set   | Multiset | Unordered Multiset |
| --------------------- | :-----: | :---------------: | :------: | :----------------: |
| Các p.tử là duy nhất  |    ✅    |         ✅         |          |                    |
| Các p.tử được lặp lại |         |                   |    ✅     |         ✅          |
| Các p.tử có thứ tự    |    ✅    |                   |    ✅     |                    |
| Các p.tử k có thứ tự  |         |         ✅         |          |         ✅          |
| Thư viện sử dụng      | `<set>` | `<unordered_set>` | `<set>`  | `<unordered_set>`  |

> [!info]- Lưu ý
> - **it** ở đây là iterator loại [bidirectional iterators](https://www.geeksforgeeks.org/bidirectional-iterators-in-cpp/?ref=header_search), không cho phép cộng trừ với 1 số nguyên nhưng việc thao tác trên set không yêu cầu bộ nhớ liên tục, giảm chi phí và tối ưu thuật toán
> - Mặc định các p.tử trong `set<int>` và `multiset<int>` được xếp theo thứ tự tăng dần, để giảm dần, cú pháp sẽ là `set<int, greater<int>>` và `multiset<int, greater<int>>` (tương tự với các kiểu dữ liệu khác)

# Các thao tác trên set

| Hàm                                                      | Mô tả                                                                                                                 |     VD (dòng)      |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |:------------------:|
| `begin()`                                                | Trả về iterator trỏ vào p.tử đầu tiên                                                                                 |         8          |
| `end()`                                                  | Trả về iterator trỏ vào vị trí sau p.tử cuối cùng                                                                     |         8          |
| `size()`                                                 | Trả về số p.tử set                                                                                                    |         19         |
| `empty()`                                                | Kiểm tra set rỗng hay không                                                                                           |         18         |
| `insert(e)`  <br>`insert(it, e)`  <br>`insert(it1, it2)` | Chèn một p.tử **e** hoặc nhiều p.tử từ vị trí **it1** đến **it2**  <br>vào set                                        | 32  <br>34  <br>37 |
| `erase(it)`  <br>`erase(it1, it2)`  <br>`erase(e)`       | Xóa p.tử tại vị trí **it** hoặc các p.tử từ vị trí **it1**  <br>đến trước **it2** hoặc p.tử **e** nếu nó có trong set | 22  <br>26  <br>28 |
| `clear()`                                                | Xóa toàn bộ p.tử set                                                                                                  |         54         |
| `find(e)`                                                | Trả về iterator trỏ đến p.tử **e** (nếu tìm thấy)  <br>hoặc `end()` (nếu không thấy)                                  |         41         |
| `count(e)`                                               | Trả về 1 nếu p.tử **e** có trong set hoặc 0 nếu ngược lại                                                             |         45         |
| `lower_bound(e)`                                         | Trả về iterator mà p.tử tại đó lớn hơn hoặc bằng **e**  <br>hoặc `end()` nếu **e** lớn hơn p.tử lớn nhất trong set    |         49         |
| `upper_bound(e)`                                         | Trả về iterator mà p.tử tại đó lớn hơn **e** hoặc `end()`  <br>nếu **e** lớn hơn hoặc bằng p.tử lớn nhất trong set    |         49         |
| `swap(s)`                                                | Hoán đổi nội dung set hiện tại với **s** cùng kiểu dữ liệu                                                            |         57         |

> [!info]- Lưu ý
> - `insert`: tham số **it** cho biết vị trị bắt đầu thực hiện thao tác tìm kiếm để chèn p.tử **e** nhanh hơn chứ không phải vị trí mà **e** được chèn
> - `swap`: kích thước 2 set có thể khác nhau

**Ví dụ**
```cpp
#include <iostream>
#include <set>
using namespacee std;
 
void print(set<int> s)
{
	// set<int>::iterator it;
	for(auto it=s.begin(); it!=s.end(); it++)
		cout << *it << ' ';
	cout << '\n';
}
 
int main()
{
	set<int> s{3, 2, 4, 5, 1};
 
	// current set: 1 2 3 4 5
	cout << s.empty() << '\n'; // 0 (false)
	cout << s.size() << '\n'; // 5
 
	// current set: 1 2 3 4 5
	s.erase(s.begin());
	print(s); // 2 3 4 5
	auto it = s.begin();
	it++; it++;
	s.erase(it, s.end());
	print(s); // 2 3
	s.erase(3);
	print(s); // 2
	
	// current set: 2 
	s.insert(0);
	print(s); // 0 2
	s.insert(s.begin(), 3);
	print(s); // 0 2 3
	set<int> tmp{1, 4, 5};
	s.insert(tmp.begin(), tmp.end());
	print(s); // 0 1 2 3 4 5
 
	// current set: 0 1 2 3 4 5
	if(s.find(2)!=s.end()) cout << "found\n"; // found
	else cout << "not found\n";
 
	// current set: 0 1 2 3 4 5
	if(s.count(6)) cout << "exist\n";
	else cout << "not exist\n"; // not exist 
 
	// current set: 0 1 2 3 4 5
	auto itl = s.lower_bound(3), itu = s.upper_bound(3);
	cout << *itl << '\n'; // 3
	cout << *itu << '\n'; // 4 
 
	// current set: 0 1 2 3 4 5
	s.clear();
	print(s); // (nothing)
	set<int> s1{5, 3, 1};
	s.swap(s1);
	print(s); // 1 3 5
	print(s1); // (nothing)
 
	return 0;
}
```

# Các thao tác trên unordered set

| Hàm                                                | Mô tả                                                                                                        |     VD (dòng)      |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |:------------------:|
| `insert(e)`  <br>`insert(it1, it2)`                | Chèn phần tử **e** hoặc các phần tử từ vị trí **it1** đến **it2**  <br>vào unordered set (tại ví trí bất kì) |     32  <br>35     |
| `begin()`                                          | Trả về iterator trỏ vào phần tử đầu                                                                          |         8          |
| `end()`                                            | Trả về iterator trỏ vào vị trí sau phần tử cuối cùng                                                         |         8          |
| `count(e)`                                         | Đếm số phần tử e có trong unordered set                                                                      |         43         |
| `find(e)`                                          | Trả về iterator trỏ vào phần tử **e** (nếu tìm thấy) hoặc  <br>`end()` (nếu không thấy)                      |         39         |
| `clear()`                                          | Xóa toàn bộ phần tử unordered set                                                                            |         47         |
| `erase(it1, it2)`  <br>`erase(it)`  <br>`erase(e)` | Xóa các phần tử từ vị trí **it1** đến **it2** hoặc phần tử tại  <br>**it** hoặc phần tử **e** cụ thể         | 22  <br>26  <br>28 |
| `size()`                                           | Trả về số phần tử unordered set                                                                              |         19         |
| `empty()`                                          | Kiểm tra unordered set rỗng hay không                                                                        |         18         |
| `swap(us)`                                         | Hoán đổi nội dung unordered set hiện tại với **us**  <br>cùng kiểu dữ liệu                                   |         50         |

> [!info]- Lưu ý
> `swap`: kích thước 2 unordered set có thể khác nhau và khi hoán đổi chúng có thể sẽ thay đổi thứ tự các phần tử mới (thứ tự ngẫu nhiên)

**Ví dụ**
```cpp
#include <iostream>
#include <unordered_set>
using namespacee std;
 
void print(unordered_set<int> us)
{
	// unordered_set<int>::iterator it;
	for(auto it=us.begin(); it!=us.end(); it++)
		cout << *it << ' ';
	cout << '\n';
}
 
int main()
{
	unordered_set<int> us{3, 2, 4, 5, 1};
 
	// current unordered set: 3 2 4 5 1
	cout << us.empty() << '\n'; // 0 (false)
	cout << us.size() << '\n'; // 5
 
	// current unordered set: 1 5 4 2 3
	us.erase(us.begin());
	print(us); // 5 4 2 3
	auto it = us.begin();
	it++; it++;
	us.erase(it, us.end());
	print(us); // 5 4
	us.erase(4);
	print(us); // 5
	
	// current unordered set: 5
	us.insert(0);
	print(us); // 5 0
	set<int> tmp{1, 4, 5};
	us.insert(tmp.begin(), tmp.end());
	print(us); // 1 5 4 0
 
	// current unordered set: 1 5 4 0
	if(us.find(2)!=us.end()) cout << "found\n";
	else cout << "not found\n"; // not found
 
	// current unordered set: 1 0 4 5
	if(us.count(4)) cout << "exist\n"; // exist
	else cout << "not exist\n";
 
	// current unordered set: 5 0 4 1
	us.clear();
	print(us); // (nothing)
	unordered_set<int> us1{5, 3, 1};
	us.swap(us1);
	print(us); // 1 5 3
	print(us1); // (nothing)
 
	return 0;
}
```

# Các thao tác trên multiset

| Hàm                                                      | Mô tả                                                                                                                                 |     VD (dòng)      |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |:------------------:|
| `begin()`                                                | Trả về iterator trỏ vào phần tử đầu                                                                                                   |         8          |
| `end()`                                                  | Trả về iterator trỏ vào vị trí sau phần tử cuối                                                                                       |         8          |
| `size()`                                                 | Trả về số phần tử multiset                                                                                                            |         19         |
| `empty()`                                                | Kiểm tra multiset rỗng hay không                                                                                                      |         18         |
| `insert(e)`  <br>`insert(it, e)`  <br>`insert(it1, it2)` | Chèn phần tử **e** hoặc các phần tử từ vị trí **it1**  <br>đến **it2**                                                                | 32  <br>34  <br>37 |
| `erase(e)`  <br>`erase(it)`  <br>`erase(it1, it2)`       | Xóa phần tử **e** hoặc phần tử tại vị trí **it** hoặc  <br>các phần tử từ vị trí **it1** đến **it2**                                  | 22  <br>26  <br>28 |
| `clear()`                                                | Xóa toàn bộ phần tử multiset                                                                                                          |         51         |
| `find(e)`                                                | Trả về iterator trỏ vào phần tử **e** (nếu tìm thấy)  <br>hoặc `end()` (nếu không thấy)                                               |         41         |
| `count(e)`                                               | Đếm số phần tử **e** có trong multiset                                                                                                |         43         |
| `lower_bound(e)`                                         | Trả về iterator đầu tiên mà p.tử tại đó lớn hơn hoặc  <br>bằng **e** hoặc `end()` nếu **e** lớn hơn p.tử lớn nhất  <br>trong multiset |         46         |
| `upper_bound(e)`                                         | Trả về iterator đầu tiên mà p.tử tại đó lớn hơn **e**  <br>hoặc `end()` nếu **e** lớn hơn hoặc bằng p.tử lớn  <br>nhất trong multiset |         46         |
| `swap(ms)`                                               | Hoán đổi nội dung multiset hiện tại với **ms** cùng kiểu  <br>dữ liệu                                                                 |         54         |

> [!info]- Lưu ý
> - `insert`: tham số **it** cho biết vị trị bắt đầu thực hiện thao tác tìm kiếm để chèn p.tử **e** nhanh hơn chứ không phải vị trí mà **e** được chèn
> - `swap`: kích thước 2 multiset có thể khác nhau

**Ví dụ**
```cpp
#include <iostream>
#include <set>
using namespacee std;
 
void print(multiset<int> ms)
{
	// multiset<int>::iterator it;
	for(auto it=ms.begin(); it!=ms.end(); it++)
		cout << *it << ' ';
	cout << '\n';
}
 
int main()
{
	multiset<int> ms{3, 2, 3, 5, 1};
 
	// current multiset: 1 2 3 3 5
	cout << ms.empty() << '\n'; // 0 (false)
	cout << ms.size() << '\n'; // 5
 
	// current multiset: 1 2 3 3 5
	ms.erase(ms.begin());
	print(ms); // 2 3 3 5
	auto it = ms.begin();
	it++; it++;
	ms.erase(it, ms.end());
	print(ms); // 2 3
	ms.erase(3);
	print(ms); // 2
	
	// current multiset: 2 
	ms.insert(0);
	print(ms); // 0 2
	ms.insert(ms.begin(), 0);
	print(ms); // 0 0 2
	set<int> tmp{1, 2, 5};
	ms.insert(tmp.begin(), tmp.end());
	print(ms); // 0 0 1 2 2 5
 
	// current multiset: 0 0 1 2 2 5
	if(ms.find(2)!=ms.end()) cout << "found\n"; // found
	else cout << "not found\n";
	cout << ms.count(0) << '\n'; // 2
 
	// current multiset: 0 0 1 2 2 5
	auto itl = ms.lower_bound(2), itu = ms.upper_bound(2);
	cout << *itl << '\n'; // 2
	cout << *itu << '\n'; // 5 
 
	// current multiset: 0 0 1 2 2 5
	ms.clear();
	print(ms); // (nothing)
	multiset<int> ms1{5, 3, 3, 1};
	ms.swap(ms1);
	print(ms); // 1 3 3 5
	print(ms1); // (nothing)
 
	return 0;
}
```

# Các thao tác trên unordered multiset

| Hàm                                                | Mô tả                                                                                                               |     VD (dòng)      |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |:------------------:|
| `insert(e)`                                        | Chèn phần tử **e** vào unordered multiset (tại ví trí bất kì)                                                       |         32         |
| `begin()`                                          | Trả về iterator trỏ vào phần tử đầu tiên                                                                            |         8          |
| `end()`                                            | Trả về iterator trỏ vào vị trí sau phần tử cuối cùng                                                                |         8          |
| `empty()`                                          | Kiểm tra unordered multiset có rỗng hay không                                                                       |         18         |
| `find(e)`                                          | Trả về iterator trỏ vào phần tử **e** (nếu tìm thấy) hoặc  <br>`end()` (nếu không thấy)                             |         36         |
| `count(e)`                                         | Đếm số phần tử **e** có trong unordered multiset                                                                    |         38         |
| `clear()`                                          | Xóa toàn bộ phần tử unordered multiset                                                                              |         41         |
| `size()`                                           | Trả về số phần tử unordered multiset                                                                                |         19         |
| `swap(ums)`                                        | Hoán đổi nội dụng unordered multiset hiện tại với **ums**  <br>cùng kiểu dữ liệu                                    |         44         |
| `erase(it)`  <br>`erase(it1, it2)`  <br>`erase(e)` | Xóa phần tử tại vị trí **it** hoặc các phần tử từ vị trí **it1** đến  <br>**it2** hoặc các phần tử **e** giống nhau | 22  <br>26  <br>28 |

> [!info]- Lưu ý
> `swap`: kích thước 2 unordered multiset có thể khác nhau và chúng sẽ thay đổi thứ tự các phần tử mới (thứ tự ngẫu nhiên)

**Ví dụ**
```cpp
#include <iostream>
#include <unordered_set>
using namespacee std;
 
void print(unordered_multiset<int> ums)
{
	// unordered_multiset<int>::iterator it;
	for(auto it=ums.begin(); it!=ums.end(); it++)
		cout << *it << ' ';
	cout << '\n';
}
 
int main()
{
	unordered_multiset<int> ums{3, 2, 3, 5, 1};
 
	// current unordered multiset: 3 2 3 5 1
	cout << ums.empty() << '\n'; // 0 (false)
	cout << ums.size() << '\n'; // 5
 
	// current unordered multiset: 1 5 3 2 3
	ums.erase(ums.begin());
	print(ums); // 5 3 2 3
	auto it = ums.begin();
	it++; it++;
	ums.erase(it, ums.end());
	print(ums); // 5 3
	ums.erase(3);
	print(ums); // 5
	
	// current unordered multiset: 5
	ums.insert(5);
	print(ums); // 5 5
 
	// current unordered multiset: 5 5
	if(ums.find(2)!=ums.end()) cout << "found\n";
	else cout << "not found\n"; // not found
	cout << ums.count(5) << '\n'; // 2
 
	// current unordered multiset: 5 5
	ums.clear();
	print(ums); // (nothing)
	unordered_multiset<int> ums1{3, 5, 3, 3};
	ums.swap(ums1);
	print(ums); // 5 3 3 3
	print(ums1); // (nothing)
 
	return 0;
}
```

**Tham khảo thêm**:
- Tập hợp có thứ tự: [Set in C++ Standard Template Library (STL) - GeeksforGeeks](https://www.geeksforgeeks.org/set-in-cpp-stl/)
- Tập hợp không thứ tự: [Unordered Sets in C++ Standard Template Library - GeeksforGeeks](https://www.geeksforgeeks.org/unordered_set-in-cpp-stl/)
- Tập hợp có thứ tự, phần tử lặp: [Multiset in C++ Standard Template Library (STL) - GeeksforGeeks](https://www.geeksforgeeks.org/multiset-in-cpp-stl/?ref=header_search)
- Tập hợp không thứ tự, phần tử lặp: [C++ unordered_multiset - GeeksforGeeks](https://www.geeksforgeeks.org/cpp-unordered_multiset/?ref=header_search)

> [!quote]- Còn một điều nữa☝️...
> *Đừng quên thả **tương tác** kèm **bình luận** của bạn để giúp mình cải thiện blog nhé!* Hoặc có thể ủng hộ một ít động lực đó ngay bây giờ bằng cách:
> 
> [![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/M4M111S8CI)