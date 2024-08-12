---
status: Done
title: Hàm nhiều biến
draft: false
tags:
  - caculus
  - math
  - limit
  - function
---
%% Bắt đầu tại đây %%
# Giới hạn hàm 2 biến
$$
\lim_{\overset{x\to x_0}{y\to y_0}}f(x,y)=\lim_{(x,y)\to(x_0,y_0)}f(x,y)=L
$$

> [!info]- Lưu ý
> - Ngoài giới hạn bội trên, còn có giới hạn lặp $\lim_{x\to x_0}(\lim_{y\to y_0}f(x,y))$. Tính như giới hạn một biến (Giới hạn biến nào coi biến còn lại là hằng số)
> - Thg thì phân thức với bậc tử $\le$ bậc mẫu thì giới hạn bội không tồn tại

Các dạng BT:
- [Giải tích 2 | 1.1 Tính giới hạn hàm số 2 biến số](https://youtu.be/hP2yQM2MXBk?si=9xzYJbWHixkW8RRj)
- [Giải tích 2 | 1.1.2 Tính giới hạn hàm 2 biến bằng định lý kẹp và khai triển taylor](https://youtu.be/Gfv6i114PH4?si=aZ0qyZr3Icqe7KUL)
- [Giải tích 2 | 1.1.4 Chứng minh giới hạn không tồn tại](https://youtu.be/SKwOt6HPTZ8?si=QO0t2VbV9-xvyuA0)

# Tính liên tục của hàm số
Hàm số $f(x,~y)$ liên tục tại điểm $(x_0,~y_0)$ nếu nó xác định tại điểm đó và
$$
\lim_{(x,y)\to(x_0,y_0)}f(x,y)=f(x_0,y_0)
$$

> [!info]- Lưu ý
> Hàm số không liên tục thì gián đoạn

Các dạng BT:
- [Giải tích 2 | 1.1.5 Xét tính liên tục của hàm 2 biến](https://youtu.be/HCTXfVYHWVo?si=01uqlIz7ZLktemqp)

# Đạo hàm riêng
$$
f_x'(x_0,y_0)=\lim_{\Delta\to0}\frac{f(x_0+\Delta,y_0)-f(x_0,y_0)}{\Delta}\quad(\Delta=x-x_0)
$$


> [!info]- Lưu ý
> Khi tính đạo hàm riêng của ƒ theo x thì coi y là hằng số. Tương tự với $f_y'(x_0,~y_0)$

Các dạng BT:
- [Giải tích 2 | 1.2.1 Tính đạo hàm riêng bằng định nghĩa — hàm số nhiều biến số](https://youtu.be/0334ILWd6ok?si=cjY4QPIWyIAYt4Zs)
- [Giải tích 2 | 1.2.2 Tính Đạo hàm riêng theo quy tắc đạo hàm](https://youtu.be/WOUd_zLTCWk?si=_QAinYToROZaWyOJ)

# Vi phân toàn phần
$$
df(x_0,~y_0)=f_x'(x_0,~y_0)dx+f_y'(x_0,~y_0)dy
$$
Công thức tính gần đúng:
$$
f(x+\Delta x,~y+\Delta y)=f(x,~y)+f_x'(x,~y)\Delta x+f_y'(x,~y)\Delta y
$$

> [!info]- Lưu ý
> Với x, y là các số đẹp, $\Delta x,~\Delta y$ là phần còn lại. VD: $(2.03,~1,15)= (x=2,~y=1)+(\Delta x=0.03,~\Delta y=0.15)$

Các dạng BT:
- [Giải tích 2 | 1.2.5 Vi phân toàn phần và Ứng dụng tính gần đúng - Hàm nhiều biến](https://youtu.be/p7XvH9LJLPg?si=y5kQaRH0wQ1Bg0Tb)
- [Giải tích 2 | 1.2.6 Xét tính khả vi của hàm 2 biến](https://youtu.be/Gl-TS5ai5F8?si=bgE3ItqHC-p5hYII)

# Đạo hàm của hàm hợp
Cho hàm số $f(u(x,~y),~v(x,~y))$, ta có:
$$
\begin{align}
f_{x}^{\prime}=f_u^{\prime}.u_x^{\prime}+f_v^{\prime}.v_x^{\prime}\\\\
f_{y}^{\prime}=f_u^{\prime}.u_y^{\prime}+f_v^{\prime}.v_y^{\prime}
\end{align}
$$

Các dạng BT:
- [Giải tích 2 | 1.2.3 Đạo hàm riêng của hàm hợp hàm nhiều biến](https://youtu.be/P7-gjC26bN4?si=SfUYlsuoxEplR4m7)

# Đạo hàm của hàm ẩn
Cho PT $F(x,~y)=0$, xác định một hàm ẩn $y=y(x)$ tm:
$$
y'_x=-\frac{F'_x(x,y)}{F'_y(x,y)}
$$

> [!info]- Lưu ý
> x, y coi là các biến độc lập

Các dạng BT:
- [Giải tích 2 | 1.2.4 Hàm ẩn: đạo hàm và đạo hàm riêng của hàm ẩn](https://youtu.be/yBC6UU0y7WE?si=45Ag4KLTcdqsv8mm)

# Đạo hàm riêng cấp cao
Nếu hàm số có các đạo hàm riêng $f_{xy}'',~f_{yx}''$ trong miền $D$ và chúng liên tục tại điểm $M_0\in D$ thì tại điểm ấy: $f_{xy}''=~f_{yx}''$

Các dạng BT:
- [Giải tích 2 | 1.2.2 (tiếp) Tính Đạo hàm riêng cấp 2 bằng định nghĩa](https://youtu.be/sIyJAsyEnpk?si=ikiRoE7rWF5zzVl5)

# Vi phân cấp cao
$$
d^2f=f_{xx}''dx^2+f_{yy}''dy^2+2f_{xy}''dxdy
$$

> [!info]- Lưu ý
> - Nếu x, y là hàm của 2 biến u, v thì $d^2f=d^2f+f''_{xx}d^2x+f''_{yy}d^2y$
> - $dx^2=dxdx,~d^2x=d(dx),~d(x^2)=2xdx$

# Đạo hàm theo hướng
Nếu vector đơn vị $\vec e=\vec u/|\vec u|=(e_1,e_2)$ và $\alpha=(\vec u,~Ox)$ thì $f_{\vec u}'$ tại điểm $M_0$ là:
$$
\begin{aligned}&f_{\bar{u}}^{\prime}(M_0)=f_x^{\prime}(M_0).e_1+f_y^{\prime}(M_0).e_2\\\\
&f_{\bar{u}}^{\prime}(M_0)=f_x^{\prime}(M_0).\cos\alpha+f_y^{\prime}(M_0).\sin\alpha
\end{aligned}
$$

Vector Gradient của hàm số $f=f(x,~y,~z)$
$$
\overrightarrow{grad}f(M_0)=\nabla f(M_0)=f_x'(M_0)\vec{i}+f_y'(M_0)\vec{j}+f_z'(M_0)\vec{k}
$$

> [!info]- Lưu ý
> $\vec i,~\vec j,~\vec k$ là các vector đơn vị

# Công thức Taylor
Khai triển Taylor đến cấp n dạng vi phân tại điểm $M_0(x_0,~y_0)$ là:
$$
\begin{align}
f(x,y)=f(x_0,y_0)+df(x_0,y_0)+\frac1{2!}d^2f(x_0,y_0)+\ldots\\\\
\ldots+\frac1{n!}d^nf(x_0,y_0)+o\left[\sqrt{(x-x_0)^2+(y-y_0)^2}\right]^n
\end{align}
$$

> [!info]- Lưu ý
> Nếu $M_0(0,~0)$ thì khai triển trên còn được gọi là khai triển Maclaurin

Các dạng BT:
- [Giải tích 2 | 1.2.7 Công thức Taylor cho hàm 2 biến và ứng dụng](https://youtu.be/ZOa2AYFrVw8?si=Hb4p2fVy9Q58AU7e)

# Cực trị của hàm số
**B1**: Tìm các điểm dừng $P_n(x_n,~y_n)$ tm $f_x^{\prime}(x_n,y_n)=f_y^{\prime}(x_n,y_n)=0$
**B2**: Tính $\Delta =(f_{xy}'')^2-f_{xx}''.f_{yy}''$
**B3**:
- Nếu $\Delta(P_n)<0\to P_n$ là điểm cực trị
	- $f_{xx}^{\prime\prime}(P_n)<0\to P_n$ là điểm cực đại
	- $f_{xx}^{\prime\prime}(P_n)>0\to P_n$ là điểm cực tiểu
- Nếu $\Delta(P_n)>0\to P_n$ không là điểm cực trị (điểm yên ngựa)
- Nếu $\Delta(P_n)=0\to P_n$ Chưa kết luận, dùng [[#Công thức Taylor|vi phân toàn phần cấp cao]] xét $\Delta f(x_0,~y_0)=f(x,~y)-f(x_0,~y_0)$
	- Nếu $\Delta >0 \rightarrow (x_0,~y_0)$ là điểm cực tiểu
	- Nếu $\Delta < 0 \rightarrow (x_0,~y_0)$ là điểm cực đại
	- Nếu $\Delta = 0 \rightarrow (x_0,~y_0)$ Xét vi phân cấp cao hơn

Các dạng BT:
- [Giải tích 2 | 1.3 Cực trị hàm 2 biến không điều kiện ràng buộc](https://youtu.be/fRb8exfhQuY?si=2FN-c0EGVkxToIFA)
- [Giải tích 2 | 1.3.3 Xét cực trị bằng vi phân toàn phần cấp cao](https://youtu.be/ejy8QWMWPX8?si=VAsSdqhdoFCTTGyk)
- [Giải tích 2 | 1.3.4 Tìm GTLN và GTNN của hàm 2 biến trên miền đóng](https://youtu.be/h8wEnlSx26g?si=yL1P8zEUe4tMTGDa)

# Cực trị có điều kiện
Cho hàm $f(x,~y)$ với điều kiện $g(x,~y)=b$. Theo phương pháp nhân tử Lagrange: $L(x,y,\lambda)=f(x,y)+\lambda[g(x,y)-b]$
**B1**: Tìm các điểm dừng $P_n(x_n,~y_n)$ ứng với $\lambda$ tm: $L_x'=L_y'=L_\lambda'=0$
**B2**: Xét định thức Hessian
$$
|H|=\begin{vmatrix}0&g'_x&g'_y\\g'_x&L''_{xx}&L''_{xy}\\g'_y&L''_{yx}&L''_{yy}\end{vmatrix}
$$
- Nếu $|H|>0\rightarrow P_n$ là điểm cực đại
- Nếu $|H|<0\rightarrow P_n$ là điểm cực tiểu
- Nếu $|H|=0\rightarrow$ Chưa kết luận

> [!info]- Lưu ý
> Dấu | trong $|H|$ là phép tính định thức không phải trị tuyệt đối!

Các dạng BT:
- [Giải tích 2 | 1.4.1 Cực trị 2 biến có điều kiện - phương pháp nhân tử Lagrange](https://youtu.be/QVF4EOZCyHc?si=7gINM_ktAR9WdTVj)

> [!quote] Lời trích dẫn
> *Nếu thấy hay thì đừng quên thả tương tác 💛 và bình luận ý kiến 🗯️ để giúp mình có thêm động lực! Hoặc "Buy me a coffee" để mình và mọi người biết bạn là người ủng hộ số 1 nhé 🎉 - Phạm Gia Doanh*