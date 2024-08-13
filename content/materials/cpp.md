---
status: Backlog
title: Ngôn ngữ lập trình C++
draft: true
tags:
  - cpp
  - language
  - cpp-language
  - coding
  - programming
---
%% Bắt đầu tại đây %%
# Giới thiệu
- C++ là một ngôn ngữ lập trình bậc cao, thủ tục, kiểu biên dịch và đặc biệt là hướng đối tượng, được phát triển và mở rộng từ ngôn ngữ lập trình C

# Cấu trúc chương trình cơ bản
```cpp
// Chương trình in ra văn bản Hello World
#include <iostream>
using namespace std;
 
int main()
{
	cout << "Hello World";
	// cout << "Bye World"; dòng lệnh này sẽ không chạy
	return 0;
}
```

| Dòng | Mô tả                                                                                                                                                                                      |
|:----:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1/8  | lệnh dùng để chú thích thông tin hay vô hiệu hóa code, bắt đầu bởi `//`                                                                                                                    |
|  2   | lệnh bao gồm thư viện (tệp tiêu đề) `iostream` cho phép nhập/xuất trên màn hình                                                                                                            |
|  3   | lệnh sử dụng không gian tên tiêu chuẩn `std` liên kết với nhiều thư viện cho phép gọi các lệnh của thư viện đó thông qua nó như `std::cout`, `std::cin`, …                                 |
|  5   | hàm là một nhóm các câu lệnh được thiết kế để thực hiện một nhiệm vụ cụ thể. Mọi chương trình đều gọi và chạy hàm `main` đầu tiên, trong đó `{` và `}` là điểm bắt đầu và kết thúc của hàm |
|  7   | lệnh xuất dữ liệu dạng văn bản “Hello World” ra màn hình                                                                                                                                   |
|  9   | lệnh trả về giá trị và kết thúc hàm, với `main` là kết thúc chương trình và nếu giá trị trả về khác 0 (quy ước) thì chương trình chạy sai                                                  |

> [!info]- Lưu ý
> - Việc thêm dòng `using namespace std;` cho phép dùng trực tiếp các lệnh: `cin`, `cout`, … mà không cần có tiền tố `std::` trước nó
> - Khi chương trình phát triển, lượng thư viện nhiều lên, có thể dùng thư viện tổng hợp `bits/stdc++.h` thay cho tất cả

# Biến và hằng số
```cpp
int a; // khai báo biến
a = 10; // khởi tạo biến
int b = 20; // khai báo + khởi tạo = định nghĩa
 
string c, d; // khai báo nhiều biến cùng dữ liệu
c = d = "30"; // khởi tạo cùng giá trị 
char x = 'x', y = 'y'; // định nghĩa nhiều biến cùng dữ liệu 
 
// định nghĩa hằng
#define E 2.28
float constexpr G = 9.18; 
const double PI = 3.1415926536;
```

> [!info]- Lưu ý
> - Tên biến chỉ được phép chứa các kí tự chữ cái (in hoa/thường), chữ số và kí tự `_`, nhưng không được bắt đầu bởi chữ số.
> - Phải khởi tạo giá trị ngay khi khai báo hằng (chỉ được định nghĩa)
> - Ngoài toán tử gán giá trị `=` có thể, dùng `()`, `{}` và đặt giá trị vào bên trong cặp dấu, ví dụ: `int a(2); float b{6.9};`

# Kiểu dữ liệu
1. Kiểu dữ liệu nguyên bản cùng bộ sửa kiểu

- **Kiểu nguyên bản**: Là kiểu dữ liệu được thiết kế sẵn, có thể dùng trực tiếp trong C++ bao gồm: số nguyên, số thực, kí tự, xâu, logic, …
- **Bộ sửa kiểu**: Là các bộ sửa miền giá trị khi ghép với kiểu nguyên bản bao gồm: signed, unsigned, short, long.

|        Tên kiểu        | Kích cỡ (bytes) |          Miền giá trị          |
|:----------------------:|:---------------:|:------------------------------:|
|       short int        |        2        |        -32,768 ~ 32,767        |
|   unsigned short int   |        2        |           0 ~ 65,535           |
|      unsigned int      |        4        |       0 ~ 4,294,967,295        |
|          int           |        4        | -2,147,483,648 ~ 2,147,483,647 |
|        long int        |        4        | -2,147,483,648 ~ 2,147,483,647 |
|   unsigned long int    |        4        |       0 ~ 4,294,967,295        |
|     long long int      |        8        |          -2⁶³ ~ 2⁶³-1          |
| unsigned long long int |        8        | 0 ~ 18,446,744,073,709,551,615 |
|      signed char       |        1        |           -128 ~ 127           |
|     unsigned char      |        1        |            0 ~ 255             |
|         float          |        4        |      -3.4×10³⁸ ~ 3.4×10³⁸      |
|         double         |        8        |     -1.7×10³⁰⁸ ~ 1.7×10³⁰⁸     |
|      long double       |       12        |    -1.1×10⁴⁹³² ~ 1.1×10⁴⁹³²    |
|        wchar_t         |    2 hoặc 4     |          1 kí tự rộng          |
|          bool          |        1        |            0 hoặc 1            |
|         string         |       32        |      toàn bộ kí tự hợp lệ      |

> [!warning]- Chú ý
> Các giá trị trên có thể khác nhau tùy theo trình biên dịch, để kiểm tra có thể dùng toán tử `sizeof(kiểu_cần_ktra)` để xem kích cỡ kết hợp các hằng macro trong thư viện `<limits.h>` để xem miền giá trị như: `INT_MAX`, `INT_MIN`, …

2. Kiểu dữ liệu dẫn xuất

- **Kiểu hàm**: Hàm là một khối lệnh thực hiện một nhiệm vụ cụ thể, trước tên hàm là **kiểu trả về** hay đầu ra của nó và sau tên hàm là các kiểu dữ liệu dưới dạng đầu vào được gọi là **tham số**, **gọi hàm** là lấy ra giá trị trả về của hàm sau khi truyền các giá trị đầu vào tương ứng được gọi là **đối số**.

```cpp
int max(int, int); // khai báo hàm
 
int max(int x, int y) // định nghĩa (khởi tạo) hàm
{
    if (x > y)
        return x;
    else
        return y;
}
 
int m = max(1, 2); // gọi hàm, m = 2
```

> [!info]- Lưu ý
> Các tham số của hàm có thể có giá trị mặc định như `int max(int x, int y=0)`, có thể truyền hoặc không các đối số cho tham số mặc định như `max(1)` hoặc `max(1, 2)`

- **Kiểu mảng**: Mảng cho phép lưu trữ nhiều giá trị cùng kiểu trong cùng 1 biến, các giá trị này sẽ được xếp vào bộ nhớ liền kề nên có thể truy cập hoặc duyệt các phần tử (giá trị) thông qua vị trí cụ thể kết hợp lệnh lặp

```cpp
int arr[5]; // khai báo mảng 5 phần tử
// khởi tạo mảng
arr[0] = 10; // khởi tạo phần tử đầu
arr[2] = 30; // khởi tạo phần tử thứ 3
arr[3 / 2] = -20; // tương đương arr[1]
arr[3] = arr[0]; // khởi tạo phần tử thứ 4
 
double new_arr[] {1.1, 2.2, 3.3}; // định nghĩa mảng
```

> [!info]- Lưu ý
> - Khi khai báo mảng, bắt buộc phải cho biết trước số phần tử của mảng
> - Nếu mảng còn p.tử chưa được gán giá trị thì tại đó nhận một giá trị rác
> - định nghĩa mảng có thể không cần biết trước kích thước mảng

- **Kiểu con trỏ và tham chiếu**:
    - **Con trỏ** lưu trữ địa chỉ của một biến thông qua toán tử `&`, cho phép thay đổi giá trị tại vùng nhớ nó lưu mà ảnh hưởng đến biến đó hoặc tạo và thao tác trên các cấu trúc dữ liệu động để dễ kiểm soát và truy cập sâu hơn vào bộ nhớ
    - **Tham chiếu** và biến nó lưu trữ có thể coi là cái bóng của nhau, biến tham chiếu thay đổi thì biến gốc cũng thay đổi theo, điều ngược lại vẫn đúng

```cpp
int var = 25;
 
int *ptr; // khai báo con trỏ
ptr = &var; // khởi tạo con trỏ, ptr = 0x7ffc04 (có thể khác)
*ptr = 20; // tương đương "var = 20;"
 
int *new_ptr = &ptr; // định nghĩa con trỏ (con trỏ tới con trỏ)
*(*new_ptr) = 10; // var = 10
 
int &ref = var; // định nghĩa tham chiếu
ref = 30; // var = 30
var = 35; // ref = 35
```

> [!info]- Lưu ý
> - Biến tham chiếu chỉ có thể được định nghĩa (khai báo vào khởi tạo cùng lúc)
> - Biến con trỏ, tham chiếu hay bất kể đối tượng lưu trữ dữ liệu nào đều có địa chỉ vùng nhớ riêng, ví dụ: con trỏ lưu trữ địa chỉ một con trỏ khác, …

3. Kiểu dữ liệu trừu tượng hoặc tự định nghĩa

- Kiểu lớp
- Kiểu cấu trúc
- Kiểu Union
- Kiểu Enum
- Kiểu được định nghĩa từ `typedef`

4. Chuyển đổi kiểu dữ liệu

```cpp

```

# Toán tử


> [!quote] Lời trích dẫn
> *Nếu thấy hay thì đừng quên thả tương tác 💛 và bình luận ý kiến 🗯️ để giúp mình có thêm động lực! Hoặc "Buy me a coffee" để mình và mọi người biết bạn là người ủng hộ số 1 nhé 🎉 - Phạm Gia Doanh*