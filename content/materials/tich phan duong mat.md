---
status: Done
title: Tích phân đường - mặt
draft: false
tags:
  - math
  - caculus
  - integral
  - line-integral
  - face-integral
---
%% Bắt đầu tại đây %%
# Tích phân đường loại 1
Nếu cung AB cho bởi $y=y(x),~a≤x≤b$ thì:
$$
\int\limits_{AB}f(x,y)dS=\int\limits_{a}^{b}f(x,y(x))\sqrt{1+(y_x^{\prime})^2}~dx
$$

Nếu cung AB cho bởi PT tham số: $x=x(t),~y=y(t),~t_1 ≤ t ≤ t_2$ thì
$$
\int\limits_{AB}f(x,y)dS=\int\limits_{t_1}^{t_2}f(x(t),y(t))\sqrt{(x_t^{\prime})^2+(y_t^{\prime})^2}~dt
$$

# Ứng dụng tích phân đường loại 1
1. Độ dài đường cong AB
$$
\int\limits_{AB}dS=\int\limits_{a}^{b}\sqrt{1+(y_x^{\prime})^2}~dx
$$

# Tích phân đường loại 2
Nếu cung AB cho bởi $y=y(x)$ và a, b là hoành độ của A, B thì
$$
\int\limits_{AB}P(x,y)dx+Q(x,y)dy=\int\limits_{a}^{b}[P(x,y(x))+Q(x,y(x)).y_x^{\prime}]dx
$$

Nếu cung AB cho bởi PT tham số: $x=x(t),~y=y(t),~t_A, t_B$ là giá trị tham số ứng với A, B thì
$$
\int_{AB}P(x,y)dx+Q(x,y)dy=\int_{t_A}^{t_B}[P(x(t),y(t)).x_t^{\prime}+Q(x(t),y(t)).y_t^{\prime}]dt
$$

> [!info]- Lưu ý
> Nếu $Q_x'=P_y',~\forall(x,~y)\in D$ thì tích phân đường loại 2 **không phụ thuộc** đường lấy tích phân

# Công thức Green
$$
\oint_LPdx+Qdy=\pm\iint_D(Q_x^{\prime}-P_y^{\prime})dxdy
$$

> [!info]- Lưu ý
> - $P,~Q,~P_y',~Q_x'$ liên tục trên miền D với biên L kín
> - Quy ước chiều dương là chiều ngược kim đồng hồ

# Ứng dụng tích phân đường loại 2
1. Diện tích miền D giới hạn bởi đường kín L
$$
S=\frac12\oint_Lxdy-ydx\quad\text{(đvdt)}
$$

2. Công do $F=P(x,~y)\vec i+Q(x,~y)\vec j$ tác dụng lên chất điểm từ A đến B theo cung AB
$$
W=\intop_{AB}P(x,y)dx+Q(x,y)dy\quad\text{(đv công)}
$$

# Tích phân mặt loại 1
Nếu mặt S cho bởi $z=z(x,~y),~(x,~y)\in D$ là hình chiếu mặt S lên $xOy$ thì
$$
\iint\limits_Sf(x,~y,~z)dS=\iint\limits_Df(x,~y,~z(x,~y))\sqrt{1+(z_x^{\prime})^2+(z_y^{\prime})^2}~dxdy
$$

Ứng dụng: [[tich phan boi#^1114d2|Diện tích mặt cong]]

# Tổng hợp các dạng BT
- [Giải tích 2 | 3.1 Tích phân đường loại 1 - lý thuyết và bài tập](https://youtu.be/F4DM2VihM3E?si=IMRtPqAhpf4MXKAY)
- [Giải tích 2 | 3.3 Tích phân mặt loại 1 Full](https://youtu.be/O7BSLMZlHkU?si=wRNeTfdl2BPZoo-j)

> [!quote] Lời trích dẫn
> *Nếu thấy hay thì đừng quên thả tương tác 💛 và bình luận ý kiến 🗯️ để giúp mình có thêm động lực! Hoặc "Buy me a coffee" để mình và mọi người biết bạn là người ủng hộ số 1 nhé 🎉 - Phạm Gia Doanh*