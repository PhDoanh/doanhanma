---
status: Done
title: Phương trình vi phân
draft: false
tags:
  - math
  - caculus
  - equation
  - differential
---
%% Bắt đầu tại đây %%
# PT biến số phân ly
$$
f(x)dx=f(y)dy
$$

Cách giải: Lấy tích phân 2 vế

# PT thuần nhất
$$
y'=f\bigg(\frac yx\bigg)
$$

Cách giải: Đặt y=u.x, được PT biến số phân ly để tìm u

# PT tuyến tính
$$
y'+p(x)y=q(x)\quad(*)
$$

Cách giải:
**B1**: **Nghiệm tổng quát** của PT tuyến tính thuần nhất $y'+p(x)y=0$ là: $C.e^{-\int p(x)dx}$ (Đưa về PT biến số phân ly, làm từng bước để đc nghiệm)
<br>
**B2**: Tìm **nghiệm riêng** của $(*)$ bằng **PP biến thiên hằng số**:
- Xét $y_r=C(x).e^{-\int p(x)dx}$, thay $y_r, y_r'$ vào $(*)$
- Đồng nhất 2 vế bằng nhau để tìm $C(x)$
- Thay ngược lại $C(x)$ để được nghiệm riêng cần tìm
<br>
**B3**: Nghiệm tổng quát của $(*)$ là:
$$
y=y_r+y_{tq}=e^{-\int p(x)dx}.\left[C+\int q(x).e^{\int p(x)dx}dx\right]
$$

> [!info]- Lưu ý
> Nếu đổi chỗ x, y cho nhau, ta được PT tuyến tính mà nghiệm tổng quát là $x=x(y)$

# PT Bernoulli
$$
y'+p(x)y=q(x)y^\alpha
$$

Cách giải:
**B1**: Chia 2 vế cho $y^\alpha$, được PT (1): $y'y^{-\alpha}+p(x)y^{1-\alpha}=q(x)$
<br>
**B2**: Đặt $z=y^{1-\alpha}$ rồi đạo hàm 2 vế theo x, được: $dz/dx=(1-\alpha)y^{-\alpha}y^{\prime}$
<br>
**B3**: Nhân 2 vế PT (1) cho $1-\alpha$, được PT tuyến tính tìm z theo x:
$$
z'=(1-\alpha)p(x)z=(1-\alpha)q(x)
$$

**B4**: Thay lại $z=y^{1-\alpha}$ để được nghiệm/tích phân tổng quát cuối cùng

> [!info]- Lưu ý
> Tương tự với PT Bernoulli còn lại khi đổi chỗ x, y cho nhau

# PT vi phân toàn phần
$$
\begin{cases}P(x,y)dx+Q(x,y)dy=0&(*)\\\\P_y'=Q_x'\end{cases}
$$

Nghiệm tổng quát của PT là $u(x,~y)=C$, trong đó:
$$
\begin{aligned}&u(x,~y)=\int\limits_{x_0}^xP(x,~y_0)dx+\int\limits_{y_0}^yQ(x,~y)dy\\\\
&u(x,~y)=\int\limits_{x_0}^xP(x,~y)dx+\int\limits_{y_0}^yQ(x_0,~y)dy\end{aligned}
$$

> [!info]- Lưu ý
> $x_0,~y_0$ là 2 số nào đó, thường được chọn là các số đẹp

Nếu $P_y'\ne Q_x'$ dùng **PP thừa số tích phân** đưa về PT vi phân toàn phần bằng cách nhân 2 vế $(*)$ với $u(x)$ hoặc $v(y)$, trong đó: 
$$
\begin{align}
q(y)=\frac{P_y^{\prime}-Q_x^{\prime}}P\Rightarrow v(y)=e^{-\int q(y)\mathrm{d}y}\\\\
p(x)=\frac{P_y^{\prime}-Q_x^{\prime}}Q\Rightarrow u(x)=e^{\int p(x)\mathrm{d}x}
\end{align}
$$

# Tổng hợp các dạng BT
- [Giải tích 2 | 4.1 Phương trình vi phân cấp 1 full lý thuyết và bài tập](https://youtu.be/bIdeJwv2azw?si=O1fYZGdwVT_BGHoe)

> [!quote] Lời trích dẫn
> *Nếu thấy hay thì đừng quên thả tương tác 💛 và bình luận ý kiến 🗯️ để giúp mình có thêm động lực! Hoặc "Buy me a coffee" để mình và mọi người biết bạn là người ủng hộ số 1 nhé 🎉 - Phạm Gia Doanh*