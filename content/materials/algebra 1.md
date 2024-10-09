---
draft: true
status: Backlog
title: Ma trận
description: 
author: PhDoanh
authorlink: https://github.com/PhDoanh
tags: 
aliases:
  - algebra 1
cssclasses: []
---
# Giới thiệu ma trận
Ma trận là một bảng chữ nhật gồm các số, được sắp xếp thành các hàng và cột. Mỗi số trong ma trận gọi là phần tử. Ma trận thường được dùng trong toán học để biểu diễn các phép tính, hệ phương trình, hoặc mô tả quan hệ giữa các tập hợp số. Một ma trận có kích thước $m\times n$, với m là số hàng và n là số cột sẽ trông như thế này:
$$
\begin{bmatrix}a_{11}&a_{12}&...&a_{1n}\\a_{21}&a_{22}&...&a_{2n}\\...&...&...&...\\a_{m1}&a_{m2}&...&a_{mn}\end{bmatrix}
$$

Trong đó: $a_{ij}$ là các hệ số thực của ma trận ở hàng i cột j

Nếu số hàng bằng số cột ($m=n$) thì ma trận trên được gọi là ma trận vuông và các hệ số $a_{ii},~i=1,\dots,n$ là các phần tử trên đường chéo chính

> [!example]- Ví dụ
> Ma trận biểu diễn bức ảnh đen trắng có độ phân giải 8x4, trong đó 0 ứng với màu tối nhất (đen) và 255 ứng với màu sáng nhất (trắng):
> ![[Pasted image 20241009065332.png|right lp]]
>$$
>\begin{bmatrix}0&0&0&0\\32&32&32&32\\64&64&64&64\\96&96&96&96\\128&128&128&128\\160&160&160&160\\192&192&192&192\\224&224&224&224\end{bmatrix}
>$$

# Các phép toán và tính chất của chúng trên ma trận
Ma trận được kí hiệu bởi các chữ cái in hoa: A, B, C, ... Hoặc các phần tử đại diện được đặt trong ngoặc: $[a_{ij}],~[b_{ij}],~\dots$

## Ma trận bằng nhau
Hai ma trận bằng nhau nếu chúng cùng cỡ $m\times n$ và các phần tử tương xứng bằng nhau. Kí hiệu: $A=B$

> [!example]- Ví dụ 
>$$
>A=\begin{bmatrix}1&2\\3&4\end{bmatrix},~B=\begin{bmatrix}1\\3\end{bmatrix},~C=\begin{bmatrix}1&2\\x&4\end{bmatrix}
>$$
>$A\ne B$ do không cùng cỡ, còn $A=C$ chỉ khi $x=3$

## Phép cộng ma trận
Nếu 2 ma trận cùng cỡ $m\times n$ thì ma trận tổng của chúng cũng sẽ có cỡ $m \times n$ và được tính như sau: $A+B=[a_{ij}+b_{ij}]$

Tính chất phép cộng:
- Giao hoán: $A+B=B+A$
- Kết hợp: $A+(B+C)=(A+B)+C$

> [!example]- Ví dụ
>$$
>\begin{bmatrix}0&1&-2\\3&-5&6\end{bmatrix}+\begin{bmatrix}2&-3&4\\-1&6&-4\end{bmatrix}=\begin{bmatrix}2&-2&2\\2&1&2\end{bmatrix}
>$$

> [!info]- Lưu ý
> Tổng của 2 ma trận khác cỡ không xác định!

## Phép nhân ma trận
### Nhân với đại lượng vô hướng
Đại lượng vô hướng ở đây hiểu là các con số (thực, nguyên, tự nhiên, phức, ...). Tích của một số với một ma trận cỡ $m\times n$ là một ma trận tích cũng có cỡ $m\times n$ và được tính như sau: $cA=[c.a_{ij}]$

Tính chất phép nhân với một số:
- Kết hợp: $(cd)A=c(dA)$ 
- Phân phối: $(c+d)A=cA+dA,\quad c(A+B)=cA+cB$
- $1.A=A.1=A$

> [!example]- Ví dụ
> $$
> A=\begin{bmatrix}1&2&4\\-3&0&-1\\2&1&2\end{bmatrix}
> $$
>$$
>\Longrightarrow3A=\begin{bmatrix}3\times1&3\times2&3\times4\\3\times(-3)&3\times0&3\times(-1)\\3\times2&3\times1&3\times2\end{bmatrix}=\begin{bmatrix}3&6&12\\-9&0&-3\\6&3&6\end{bmatrix}
>$$

> [!tip]- Mẹo
> Từ tích $(-1)A$ ta có thể định nghĩa phép trừ ma trận!

### Nhân 2 ma trận
Nếu ma trận A có cỡ $m\times n$ và B có cỡ $n\times p$ thì ma trận tích của chúng sẽ có cỡ $m\times p$ và được tính như sau:
$$
AB=[c_{ij}],\quad c_{ij}=a_{i1}b_{1j}+a_{i2}b_{2j}+...+a_{in}b_{nj}=\sum_{k=1}^{n}a_{ik}b_{kj}
$$

Tính chất phép nhân các ma trận:
- Kết hợp: $A(BC)=(AB)C,\quad c(AB)=(cA)B=A(cB)$
- Phân phối: $A(B+C)=AB+AC,\quad (A+B)C=AC+BC$
- Giản ước: $AC=BC \rightarrow A=B$ nếu $C$ [[#Ma trận nghịch đảo|khả nghịch]]

> [!example]- Ví dụ
>$$A=\begin{bmatrix}-1&3\\4&-2\\5&0\end{bmatrix},B=\begin{bmatrix}-3&2\\-4&1\end{bmatrix}$$
>$$\Longrightarrow AB=\begin{bmatrix}c_{11}&c_{12}\\c_{21}&c_{22}\\c_{31}&c_{32}\end{bmatrix}$$
>$$\begin{aligned}
 c_{11}&=a_{11}b_{11}+a_{12}b_{21}=(-1)\times(-3)+3\times(-4)=-9\\
 c_{12}&=a_{11}b_{12}+a_{12}b_{22}=(-1)\times2+3\times1=1\\
 c_{21}&=a_{21}b_{11}+a_{22}b_{21}=4\times(-3)+(-2)\times(-4)=-4 \\
 c_{22}&=a_{21}b_{12}+a_{22}b_{22}=4\times2+(-2)\times1=6 \\
 c_{31}&=a_{31}b_{11}+a_{32}b_{21}=5\times(-3)+0\times(-4)=-15 \\
 c_{32}&=a_{31}b_{12}+a_{32}b_{22}=5\times2+0\times1=10 
 \end{aligned}$$
 >$$\Longrightarrow AB=\begin{bmatrix}-9&1\\-4&6\\-15&10\end{bmatrix}$$

> [!info]- Lưu ý
> - Nếu số cột của ma trận A mà không bằng số hàng của ma trận B thì tích không xác định!
> - Phép nhân các ma trận không có tính chất giao hoán trong hầu hết trường hợp! Tức là $AB\ne BA$ 

### Lũy thừa của ma trận
Lũy thừa bậc k (nguyên không âm) của ma trận vuông A được tính như sau: $A^k=\underbrace{AA...A}_{\text{k lần}}$

Tính chất lũy thừa:
- $A^0=I_n$ ($I$ là [[#Ma trận đơn vị|ma trận đơn vị]] cấp n)
- $A^jA^k=A^{j+k},(A^j)^k=A^{jk}$ với mọi nguyên không âm j, k

## Phép chuyển vị ma trận
Chuyển vị của ma trận cỡ $m\times n$ là một ma trận cỡ $n\times m$ bằng cách chuyển dòng của ma trận này thành cột của ma trận kia (ma trận chuyển vị)
$$
A=\begin{bmatrix}a_{11}&a_{12}&...&a_{1n}\\a_{21}&a_{22}&...&a_{2n}\\...&...&...&...\\a_{m1}&a_{m2}&...&a_{mn}\end{bmatrix}\implies A^T=\begin{bmatrix}a_{11}&a_{21}&...&a_{m1}\\a_{12}&a_{22}&...&a_{m2}\\...&...&...&...\\a_{1n}&a_{2n}&...&a_{mn}\end{bmatrix}
$$

Tính chất phép chuyển vị:
- $(A^T)^T=A$
- $(A+B)^T=A^T+B^T$
- $(cA)^T=cA^T$
- $(AB)^T=B^TA^T$

> [!example]- Ví dụ
>$$A=\begin{bmatrix}0&1\\2&4\\1&-1\end{bmatrix}\implies A^T=\begin{bmatrix}0&2&1\\1&4&-1\end{bmatrix}$$


# Các ma trận đặc biệt
## Ma trận không
Là ma trận cỡ $m\times n$ có tất cả các hệ số đều bằng 0

Tính chất:
- $A+O_{mn}=O_{mn}+A=A$
- $A+(-A)=O_{mn}$
- $cA=O_{mn}\rightarrow c=0~\text{or}~A=O_{mn}$  

## Ma trận đơn vị
Là ma trận vuông cấp n có các hệ số trên đường chéo chính bằng 1, tất cả các hệ số còn lại đều bằng 0
$$
I_n=\begin{bmatrix}1&0&...&0&0\\0&1&...&0&0\\...&...&...&...&...\\0&0&...&0&1\end{bmatrix}
$$

Cho A là ma trận cỡ $m\times n$, ta có tính chất sau:
- $AI_n=A$
- $I_mA=A$

## Ma trận đối xứng
Là ma trận vuông thỏa mãn tính chất [[#Phép chuyển vị ma trận|chuyển vị]]: $A=A^T$

> [!NOTE]- Định lý
> - $A^TA,~ AA^T$ là các ma trận đối xứng với mọi ma trận $A$
> - $A+A^T$ đối xứng với mọi ma trận vuông $A$

# Ma trận bậc thang theo dòng
Ma trận bậc thang theo dòng được định nghĩa qua các đặc điểm sau:
- Các dòng chứa toàn 0 nằm ở dưới cùng ma trận
- Hệ số khác không đầu tiên tính từ trái sang phải bằng 1 được gọi là hệ số dẫn đầu của dòng đó
- Đối với 2 dòng không chứa toàn 0, hệ số dẫn đầu của dòng trên nằm lệch về bên trái nhiều hơn so với hệ số dẫn đầu của dòng dưới

> [!info]- Lưu ý
> Nếu các hệ số nằm thẳng cột phía trên và phía dưới của hệ số dẫn đầu (số 1) thì ma trận có dạng bậc thang theo dòng rút gọn 

> [!example]- Ví dụ
> $$
>A=\begin{bmatrix}1&2&-1&4\\0&1&0&3\\0&0&1&-2\end{bmatrix},~B=\begin{bmatrix}0&1&0&5\\0&0&1&3\\0&0&0&0\end{bmatrix},~C=\begin{bmatrix}1&2&-3&4\\0&2&1&-1\\0&0&1&-3\end{bmatrix}
>$$
>- A là ma trận bậc thang theo dòng
>- B là ma trận bậc thang theo dòng rút gọn
>- C không phải ma trận bậc thang

## Phép thử Gauss và Gauss-Jordan
Là quá trình sử dụng các phép biến đổi sơ cấp theo dòng để đưa một ma trận bất kỳ về dạng bậc thang theo dòng (Gauss) hoặc dạng bậc thang theo dòng rút gọn (Gauss-Jordan):
- Đổi chỗ dòng thứ i với dòng thứ j của ma trận: $r_i\leftrightarrow r_j$
- Nhân dòng thứ i với một số thực khác 0: $\alpha.r_i~(\alpha\ne 0)$ 
- Cộng vào dòng thứ i một bội của dòng thứ j: $r_i=r_i+\beta r_j$

> [!example]- Ví dụ
> $$A=\begin{bmatrix}1&-2&3&9\\-1&3&0&-4\\2&-5&5&17\end{bmatrix}$$
> Biến đổi Gauss:
> $$A\overset{R_2+R_1\to R_2;R_3-2R_1\to R_3}{\longrightarrow}\begin{bmatrix}1&-2&3&9\\0&1&3&5\\0&-1&-1&-1\end{bmatrix}\overset{R_3+R_2\to R_3}{\longrightarrow}\begin{bmatrix}1&-2&3&9\\0&1&3&5\\0&0&2&4\end{bmatrix}\\\overset{\frac12R_3\to R_3}{\longrightarrow}\begin{bmatrix}1&-2&3&9\\0&1&3&5\\0&0&1&2\end{bmatrix}$$
> Biến đổi Gauss-Jordan:
> $$\begin{bmatrix}1&-2&3&9\\0&1&3&5\\0&0&1&2\end{bmatrix}\stackrel{R_2-3R_3\to R_2}{\longrightarrow}\begin{bmatrix}1&-2&3&9\\0&1&0&-1\\0&0&1&2\end{bmatrix}\stackrel{R_1-3R_3\to R_1}{\longrightarrow}\begin{bmatrix}1&-2&0&3\\0&1&0&-1\\0&0&1&2\end{bmatrix}\\\stackrel{R_1+2R_2\to R_1}{\longrightarrow}\begin{bmatrix}1&0&0&1\\0&1&0&-1\\0&0&1&2\end{bmatrix}$$

# Ma trận nghịch đảo
Ma trận A vuông cấp n được gọi là khả nghịch nếu tồn tại ma trận B sao cho: $AB=BA=I_n$, với $I_n$ là ma trận đơn vị và $B=A^{-1}$

> [!info]- Lưu ý
> Ma trận không vuông thì không khả nghịch!

## Tính chất ma trận nghịch đảo
Nếu $A$ khả nghịch, $k$ là nguyên dương và $c$ là một số thực khác 0 thì $A^{-1},A^{T},A^{k},cA$ cũng khả nghịch và ta có các tính chất sau:
- $(A^{-1})^{-1}=A$
- $(A^{T})^{-1}=(A^{-1})^{T}$
- $(A^k)^{-1}=(A^{-1})^{k}$
- $(cA)^{-1}=\frac{1}{c}A^{-1}$
- $(A_{1}A_{2}...A_{k})^{-1}=A_{k}^{-1}...A_{2}^{-1}A_{1}^{-1}$
- Giản ước: $AB=AC\rightarrow A=B,\quad CA=CB\rightarrow A=B$ với $C$ khả nghịch

> [!info]- Lưu ý
> Từ tính chất thứ 3, lũy thừa với số mũ âm có thể được định nghĩa như sau: $A^{-k}=(A^{k})^{-1}=(A^{-1})^{k}$

## Tìm ma trận nghịch đảo
### Dùng phép khử Gauss-Jordan


# Định thức của ma trận


# Ứng dụng của ma trận và định thức
## Giải phương trình ma trận bậc nhất
Xét phương trình $cX+A=B$ với A, B là 2 ma trận cùng cỡ $m\times n$, ta kết luận:
- Nghiệm duy nhất $X=\frac{1}{c}(B-A)$ nếu $c\ne 0$
- Vô nghiệm nếu $c=0,~B\ne 0$
- Vô số nghiệm nếu $c=0,~B=A$



> [!quote]- Còn một điều nữa☝️...
> *Đừng quên thả **tương tác** kèm **bình luận** của bạn để giúp mình cải thiện blog nhé!* Hoặc có thể ủng hộ một ít động lực đó ngay bây giờ bằng cách:
> 
> [![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/M4M111S8CI)




