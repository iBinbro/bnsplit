turn this.c},
j(a){var s=this.b
return A.ahD(A.fn(s,0,A.cL(this.c,"count",t.S),A.an(s).c),"(",")")},
Pv(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=b*2+2
for(s=j.a,r=j.$ti.c;q=j.c,i<q;b=l){p=i-1
q=j.b
o=q[p]
if(o==null){r.a(null)
o=null}n=q[i]
if(n==null){r.a(null)
n=null}if(s.$2(o,n)<0){m=o
l=p}else{m=n
l=i}if(s.$2(a,m)<=0){j.b[b]=a
return}j.b[b]=m
i=l*2+2}p=i-1
if(p<q){k=j.po(p)
if(s.$2(a,k)>0){j.b[b]=k
b=p}}j.b[b]=a}}
A.ey.prototype={
G(){return"AnimationStatus."+this.b}}
A.c4.prototype={
j(a){return"<optimized out>#"+A.bL(this)+"("+A.l(this.tc())+")"},
tc(){switch(this.gb_(this)){case B.aq:return"\u25b6"
case B.af:return"\u25c0"
case B.T:return"\u23ed"
case B.H:return"\u23ee"}}}
A.mT.prototype={
G(){return"_AnimationDirection."+this.b}}
A.r_.prototype={
G(){return"AnimationBehavior."+this.b}}
A.nt.prototype={
gn(a){var s=this.x
s===$&&A.b()
return s},
sn(a,b){var s=this
s.fH(0)
s.v8(b)
s.aB()
s.mI()},
gdG(){var s=this.r
if(!(s!=null&&s.a!=null))return 0
s=this.w
s.toString
return s.d9(0,this.y.a/1e6)},
v8(a){var s=this,r=s.a,q=s.b,p=s.x=A.F(a,r,q)
if(p===r)s.Q=B.H
else if(p===q)s.Q=B.T
else s.Q=s.z===B.ap?B.aq:B.af},
gb_(a){var s=this.Q
s===$&&A.b()
return s},
jJ(a,b){var s=this
s.z=B.ap
if(b!=null)s.sn(0,b)
return s.Bs(s.b)},
cA(a){return this.jJ(a,null)},
J8(a,b){this.z=B.kP
return this.Bs(this.a)},
fv(a){return this.J8(a,null)},
kv(a,b,c){var s,r,q,p,o,n,m=this,l=$.a4u.ds$
l===$&&A.b()
if((l.a&4)!==0)switch(m.d.a){case 0:s=0.05
break
case 1:s=1
break
default:s=1}else s=1
if(c==null){r=m.b-m.a
if(isFinite(r)){l=m.x
l===$&&A.b()
q=Math.abs(a-l)/r}else q=1
if(m.z===B.kP&&m.f!=null){l=m.f
l.toString
p=l}else{l=m.e
l.toString
p=l}o=new A.aK(B.d.b0(p.a*q))}else{l=m.x
l===$&&A.b()
o=a===l?B.r:c}m.fH(0)
l=o.a
if(l===B.r.a){l=m.x
l===$&&A.b()
if(l!==a){m.x=A.F(a,m.a,m.b)
m.aB()}m.Q=m.z===B.ap?B.T:B.H
m.mI()
return A.aih()}n=m.x
n===$&&A.b()
return m.vJ(new A.ab3(l*s/1e6,n,a,b,B.bv))},
Bs(a){return this.kv(a,B.aP,null)},
IY(a){var s,r,q=this,p=q.a,o=q.b,n=q.e
q.fH(0)
s=q.x
s===$&&A.b()
r=n.a/1e6
s=o===p?0:s/(o-p)*r
return q.vJ(new A.acv(p,o,!1,q.gQu(),r,s,B.bv))},
Qv(a){this.z=a
this.Q=a===B.ap?B.aq:B.af
this.mI()},
vJ(a){var s,r=this
r.w=a
r.y=B.r
r.x=A.F(a.cE(0,0),r.a,r.b)
s=r.r.mq(0)
r.Q=r.z===B.ap?B.aq:B.af
r.mI()
return s},
mr(a,b){this.y=this.w=null
this.r.mr(0,b)},
fH(a){return this.mr(a,!0)},
m(){var s=this
s.r.m()
s.r=null
s.aU$.V(0)
s.aY$.V(0)
s.tN()},
mI(){var s=this,r=s.Q
r===$&&A.b()
if(s.as!==r){s.as=r
s.os(r)}},
Pm(a){var s,r=this
r.y=a
s=a.a/1e6
r.x=A.F(r.w.cE(0,s),r.a,r.b)
if(r.w.iL(s)){r.Q=r.z===B.ap?B.T:B.H
r.mr(0,!1)}r.aB()
r.mI()},
tc(){var s,r=this.r,q=r==null,p=!q&&r.a!=null?"":"; paused"
if(q)s="; DISPOSED"
else s=r.b?"; silenced":""
r=this.tM()
q=this.x
q===$&&A.b()
return A.l(r)+" "+B.d.R(q,3)+p+s}}
A.ab3.prototype={
cE(a,b){var s,r,q=this,p=A.F(b/q.b,0,1)
if(p===0)return q.c
else{s=q.d
if(p===1)return s
else{r=q.c
return r+(s-r)*q.e.ac(0,p)}}},
d9(a,b){return(this.cE(0,b+0.001)-this.cE(0,b-0.001))/0.002},
iL(a){return a>this.b}}
A.acv.prototype={
cE(a,b){var s=this,r=b+s.r,q=s.f,p=B.d.cc(r/q,1)
B.d.fL(r,q)
s.e.$1(B.ap)
q=A.Q(s.b,s.c,p)
q.toString
return q},
d9(a,b){return(this.c-this.b)/this.f},
iL(a){return!1}}
A.Ll.prototype={}
A.Lm.prototype={}
A.Ln.prototype={}
A.Lf.prototype={
U(a,b){},
H(a,b){},
cv(a){},
bO(a){},
gb_(a){return B.T},
gn(a){return 1},
j(a){return"kAlwaysCompleteAnimation"}}
A.Lg.prototype={
U(a,b){},
H(a,b){},
cv(a){},
bO(a){},
gb_(a){return B.H},
gn(a){return 0},
j(a){return"kAlwaysDismissedAnimation"}}
A.jH.prototype={
U(a,b){return this.gaH(this).U(0,b)},
H(a,b){return this.gaH(this).H(0,b)},
cv(a){return this.gaH(this).cv(a)},
bO(a){return this.gaH(this).bO(a)},
gb_(a){var s=this.gaH(this)
return s.gb_(s)}}
A.vm.prototype={
saH(a,b){var s,r=this,q=r.c
if(b==q)return
if(q!=null){r.a=q.gb_(q)
q=r.c
r.b=q.gn(q)
if(r.iv$>0)r.qQ()}r.c=b
if(b!=null){if(r.iv$>0)r.qP()
q=r.b
s=r.c
s=s.gn(s)
if(q==null?s!=null:q!==s)r.aB()
q=r.a
s=r.c
if(q!=s.gb_(s)){q=r.c
r.os(q.gb_(q))}r.b=r.a=null}},
qP(){var s=this,r=s.c
if(r!=null){r.U(0,s.gdZ())
s.c.cv(s.gIi())}},
qQ(){var s=this,r=s.c
if(r!=null){r.H(0,s.gdZ())
s.c.bO(s.gIi())}},
gb_(a){var s=this.c
if(s!=null)s=s.gb_(s)
else{s=this.a
s.toString}return s},
gn(a){var s=this.c
if(s!=null)s=s.gn(s)
else{s=this.b
s.toString}return s},
j(a){var s=this,r=s.c
if(r==null)return"ProxyAnimation(null; "+A.l(s.tM())+" "+B.d.R(s.gn(s),3)+")"
return r.j(0)+"\u27a9ProxyAnimation"}}
A.eN.prototype={
U(a,b){this.bm()
this.a.U(0,b)},
H(a,b){this.a.H(0,b)
this.jy()},
qP(){this.a.cv(this.gkW())},
qQ(){this.a.bO(this.gkW())},
q6(a){this.os(this.E6(a))},
gb_(a){var s=this.a
return this.E6(s.gb_(s))},
gn(a){var s=this.a
return 1-s.gn(s)},
E6(a){switch(a.a){case 1:return B.af
case 2:return B.aq
case 3:return B.H
case 0:return B.T}},
j(a){return this.a.j(0)+"\u27aaReverseAnimation"}}
A.rW.prototype={
Fa(a){var s=this
switch(a.a){case 0:case 3:s.d=null
break
case 1:if(s.d==null)s.d=B.aq
break
case 2:if(s.d==null)s.d=B.af
break}},
gFs(){if(this.c!=null){var s=this.d
if(s==null){s=this.a
s=s.gb_(s)}s=s!==B.af}else s=!0
return s},
m(){this.a.bO(this.gF9())},
gn(a){var s=this,r=s.gFs()?s.b:s.c,q=s.a,p=q.gn(q)
if(r==null)return p
if(p===0||p===1)return p
return r.ac(0,p)},
j(a){var s=this,r=s.c
if(r==null)return s.a.j(0)+"\u27a9"+s.b.j(0)
if(s.gFs())return s.a.j(0)+"\u27a9"+s.b.j(0)+"\u2092\u2099/"+r.j(0)
return s.a.j(0)+"\u27a9"+s.b.j(0)+"/"+r.j(0)+"\u2092\u2099"},
gaH(a){return this.a}}
A.zj.prototype={
G(){return"_TrainHoppingMode."+this.b}}
A.mL.prototype={
q6(a){if(a!==this.e){this.aB()
this.e=a}},
gb_(a){var s=this.a
return s.gb_(s)},
XN(){var s,r,q=this,p=q.b
if(p!=null){switch(q.c.a){case 0:p=p.gn(p)
s=q.a
r=p<=s.gn(s)
break
case 1:p=p.gn(p)
s=q.a
r=p>=s.gn(s)
break
default:r=!1}if(r){p=q.a
s=q.gkW()
p.bO(s)
p.H(0,q.gw2())
p=q.b
q.a=p
q.b=null
p.cv(s)
s=q.a
q.q6(s.gb_(s))}}else r=!1
p=q.a
p=p.gn(p)
if(p!==q.f){q.aB()
q.f=p}if(r&&q.d!=null)q.d.$0()},
gn(a){var s=this.a
return s.gn(s)},
m(){var s,r,q=this
q.a.bO(q.gkW())
s=q.gw2()
q.a.H(0,s)
q.a=null
r=q.b
if(r!=null)r.H(0,s)
q.b=null
q.aY$.V(0)
q.aU$.V(0)
q.tN()},
j(a){var s=this
if(s.b!=null)return A.l(s.a)+"\u27a9TrainHoppingAnimation(next: "+A.l(s.b)+")"
return A.l(s.a)+"\u27a9TrainHoppingAnimation(no next)"}}
A.nR.prototype={
qP(){var s,r=this,q=r.a,p=r.gDo()
q.U(0,p)
s=r.gDp()
q.cv(s)
q=r.b
q.U(0,p)
q.cv(s)},
qQ(){var s,r=this,q=r.a,p=r.gDo()
q.H(0,p)
s=r.gDp()
q.bO(s)
q=r.b
q.H(0,p)
q.bO(s)},
gb_(a){var s=this.b
if(s.gb_(s)===B.aq||s.gb_(s)===B.af)return s.gb_(s)
s=this.a
return s.gb_(s)},
j(a){return"CompoundAnimation("+this.a.j(0)+", "+this.b.j(0)+")"},
Ut(a){var s=this
if(s.gb_(s)!=s.c){s.c=s.gb_(s)
s.os(s.gb_(s))}},
Us(){var s=this
if(!J.f(s.gn(s),s.d)){s.d=s.gn(s)
s.aB()}}}
A.r3.prototype={
gn(a){var s,r=this.a
r=r.gn(r)
s=this.b
s=s.gn(s)
return Math.min(A.kY(r),A.kY(s))}}
A.xm.prototype={}
A.xn.prototype={}
A.xo.prototype={}
A.Md.prototype={}
A.OY.prototype={}
A.OZ.prototype={}
A.P_.prototype={}
A.Pt.prototype={}
A.Pu.prototype={}
A.QH.prototype={}
A.QI.prototype={}
A.QJ.prototype={}
A.vh.prototype={
ac(a,b){return this.iZ(b)},
iZ(a){throw A.d(A.i7(null))},
j(a){return"ParametricCurve"}}
A.eW.prototype={
ac(a,b){if(b===0||b===1)return b
return this.Mz(0,b)}}
A.xU.prototype={
iZ(a){return a}}
A.vP.prototype={
iZ(a){a*=this.a
return a-(a<0?Math.ceil(a):Math.floor(a))},
j(a){return"SawTooth("+this.a+")"}}
A.fP.prototype={
iZ(a){var s=this.a
a=A.F((a-s)/(this.b-s),0,1)
if(a===0||a===1)return a
return this.c.ac(0,a)},
j(a){var s=this,r=s.c
if(!(r instanceof A.xU))return"Interval("+A.l(s.a)+"\u22ef"+A.l(s.b)+")\u27a9"+r.j(0)
return"Interval("+A.l(s.a)+"\u22ef"+A.l(s.b)+")"}}
A.KC.prototype={
iZ(a){return a<0.5?0:1}}
A.e0.prototype={
Cl(a,b,c){var s=1-c
return 3*a*s*s*c+3*b*s*c*c+c*c*c},
iZ(a){var s,r,q,p,o,n,m=this
for(s=m.a,r=m.c,q=0,p=1;!0;){o=(q+p)/2
n=m.Cl(s,r,o)
if(Math.abs(a-n)<0.001)return m.Cl(m.b,m.d,o)
if(n<a)q=o
else p=o}},
j(a){var s=this
return"Cubic("+B.d.R(s.a,2)+", "+B.d.R(s.b,2)+", "+B.d.R(s.c,2)+", "+B.d.R(s.d,2)+")"}}
A.tD.prototype={
iZ(a){return 1-this.a.ac(0,1-a)},
j(a){return"FlippedCurve("+this.a.j(0)+")"}}
A.Mg.prototype={
iZ(a){a=1-a
return 1-a*a}}
A.r2.prototype={
bm(){if(this.iv$===0)this.qP();++this.iv$},
jy(){if(--this.iv$===0)this.qQ()}}
A.r1.prototype={
bm(){},
jy(){},
m(){}}
A.l7.prototype={
U(a,b){var s
this.bm()
s=this.aY$
s.b=!0
s.a.push(b)},
H(a,b){if(this.aY$.u(0,b))this.jy()},
aB(){var s,r,q,p,o,n,m,l,k,j=this,i=j.aY$,h=i.a,g=J.lT(h.slice(0),A.an(h).c)
for(h=g.length,p=0;p<g.length;g.length===h||(0,A.R)(g),++p){o={}
s=g[p]
o.a=null
try{if(i.B(0,s))s.$0()}catch(n){r=A.aj(n)
q=A.aA(n)
m=j instanceof A.cf?A.dU(j):null
l=A.bj("while notifying listeners for "+A.aP(m==null?A.b2(j):m).j(0))
o=o.a
k=$.fz()
if(k!=null)k.$1(new A.bz(r,q,"animation library",l,o,!1))}}}}
A.jG.prototype={
cv(a){var s
this.bm()
s=this.aU$
s.b=!0
s.a.push(a)},
bO(a){if(this.aU$.u(0,a))this.jy()},
os(a){var s,r,q,p,o,n,m,l,k=this,j=k.aU$,i=j.a,h=J.lT(i.slice(0),A.an(i).c)
for(i=h.length,p=0;p<h.length;h.length===i||(0,A.R)(h),++p){s=h[p]
try{if(j.B(0,s))s.$1(a)}catch(o){r=A.aj(o)
q=A.aA(o)
n=k instanceof A.cf?A.dU(k):null
m=A.bj("while notifying status listeners for "+A.aP(n==null?A.b2(k):n).j(0))
l=$.fz()
if(l!=null)l.$1(new A.bz(r,q,"animation library",m,null,!1))}}}}
A.aJ.prototype={
eL(a){return new A.mW(a,this,A.n(this).h("mW<aJ.T>"))}}
A.b1.prototype={
gn(a){var s=this.a
return this.b.ac(0,s.gn(s))},
j(a){var s=this.a,r=this.b
return s.j(0)+"\u27a9"+r.j(0)+"\u27a9"+A.l(r.ac(0,s.gn(s)))},
tc(){return A.l(this.tM())+" "+this.b.j(0)},
gaH(a){return this.a}}
A.mW.prototype={
ac(a,b){return this.b.ac(0,this.a.ac(0,b))},
j(a){return this.a.j(0)+"\u27a9"+this.b.j(0)}}
A.aO.prototype={
dg(a){var s=this.a
return A.n(this).h("aO.T").a(J.ar8(s,J.ar9(J.ara(this.b,s),a)))},
ac(a,b){var s,r=this
if(b===0){s=r.a
return s==null?A.n(r).h("aO.T").a(s):s}if(b===1){s=r.b
return s==null?A.n(r).h("aO.T").a(s):s}return r.dg(b)},
j(a){return"Animatable("+A.l(this.a)+" \u2192 "+A.l(this.b)+")"},
swo(a){return this.a=a},
slp(a,b){return this.b=b}}
A.vK.prototype={
dg(a){return this.c.dg(1-a)}}
A.ho.prototype={
dg(a){return A.t(this.a,this.b,a)}}
A.vu.prototype={
dg(a){return A.am5(this.a,this.b,a)}}
A.os.prototype={
dg(a){var s,r=this.a
r.toString
s=this.b
s.toString
return B.d.b0(r+(s-r)*a)}}
A.iC.prototype={
ac(a,b){if(b===0||b===1)return b
return this.a.ac(0,b)},
j(a){return"CurveTween(curve: "+this.a.j(0)+")"}}
A.zD.prototype={}
A.x1.prototype={
OX(a,b){var s,r,q,p,o,n,m,l=this.a
B.b.I(l,a)
for(s=l.length,r=0,q=0;q<s;++q)r+=l[q].b
for(s=this.b,p=0,o=0;n=l.length,o<n;++o,p=m){m=o===n-1?1:p+l[o].b/r
s.push(new A.Np(p,m))}},
QV(a,b){var s=this.a[b],r=this.b[b],q=r.a
return s.a.ac(0,(a-q)/(r.b-q))},
ac(a,b){var s,r,q,p,o,n,m=this
if(b===1)return m.QV(b,m.a.length-1)
for(s=m.a,r=s.length,q=m.b,p=0;p<r;++p){o=q[p]
n=o.a
if(b>=n&&b<o.b)return s[p].a.ac(0,(b-n)/(o.b-n))}throw A.d(A.a6("TweenSequence.evaluate() could not find an interval for "+A.l(b)))},
j(a){return"TweenSequence("+this.a.length+" items)"}}
A.pK.prototype={}
A.Np.prototype={
j(a){return"<"+A.l(this.a)+", "+A.l(this.b)+">"}}
A.eV.prototype={
gn(a){return this.b.a},
gmW(){var s=this
return!s.e.k(0,s.f)||!s.x.k(0,s.y)||!s.r.k(0,s.w)||!s.z.k(0,s.Q)},
gmU(){var s=this
return!s.e.k(0,s.r)||!s.f.k(0,s.w)||!s.x.k(0,s.z)||!s.y.k(0,s.Q)},
gmV(){var s=this
return!s.e.k(0,s.x)||!s.f.k(0,s.y)||!s.r.k(0,s.z)||!s.w.k(0,s.Q)},
J1(a){var s,r,q,p,o,n=this,m=null
if(n.gmW()){s=a.a2(t.by)
r=s==null?m:s.f.c.gYz()
if(r==null){r=A.di(a)
r=r==null?m:r.d
q=r}else q=r
if(q==null)q=B.a1}else q=B.a1
if(n.gmU()){r=A.di(a)
r=r==null?m:r.Q
p=r===!0}else p=!1
if(n.gmV())A.asF(a)
switch(q.a){case 1:switch(0){case 0:o=p?n.r:n.e
break}break
case 0:switch(0){case 0:o=p?n.w:n.f
break}break
default:o=m}return new A.eV(o,n.c,m,n.e,n.f,n.r,n.w,n.x,n.y,n.z,n.Q,0)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.eV&&b.b.a===s.b.a&&b.e.k(0,s.e)&&b.f.k(0,s.f)&&b.r.k(0,s.r)&&b.w.k(0,s.w)&&b.x.k(0,s.x)&&b.y.k(0,s.y)&&b.z.k(0,s.z)&&b.Q.k(0,s.Q)},
gv(a){var s=this
return A.Y(s.b.a,s.e,s.f,s.r,s.x,s.y,s.w,s.Q,s.z,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this,r=new A.UW(s),q=A.a([r.$2("color",s.e)],t.s)
if(s.gmW())q.push(r.$2("darkColor",s.f))
if(s.gmU())q.push(r.$2("highContrastColor",s.r))
if(s.gmW()&&s.gmU())q.push(r.$2("darkHighContrastColor",s.w))
if(s.gmV())q.push(r.$2("elevatedColor",s.x))
if(s.gmW()&&s.gmV())q.push(r.$2("darkElevatedColor",s.y))
if(s.gmU()&&s.gmV())q.push(r.$2("highContrastElevatedColor",s.z))
if(s.gmW()&&s.gmU()&&s.gmV())q.push(r.$2("darkHighContrastElevatedColor",s.Q))
r=s.c
if(r==null)r="CupertinoDynamicColor"
q=B.b.b7(q,", ")
return r+"("+q+", resolved by: UNRESOLVED)"}}
A.UW.prototype={
$2(a,b){var s=b.k(0,this.a.b)?"*":""
return s+a+" = "+b.j(0)+s},
$S:363}
A.M9.prototype={}
A.BI.prototype={
X(a){var s=this.f,r=A.ass(s,a)
return J.f(r,s)?this:this.h0(r)},
nE(a,b,c,d,e,f,g,h){var s,r=this,q=g==null?r.a:g,p=b==null?r.b:b,o=h==null?r.c:h,n=c==null?r.d:c,m=e==null?r.e:e,l=a==null?r.f:a
if(d==null){s=r.r
s=s==null?null:A.F(s,0,1)}else s=d
return A.akE(l,p,n,s,m,f==null?r.w:f,q,o)},
h0(a){return this.nE(a,null,null,null,null,null,null,null)}}
A.Ma.prototype={}
A.Mb.prototype={
lO(a){return a.gbV(a)==="en"},
cC(a,b){return new A.bo(B.C8,t.yK)},
kh(a){return!1},
j(a){return"DefaultCupertinoLocalizations.delegate(en_US)"}}
A.DH.prototype={$iP:1}
A.UX.prototype={
$0(){return A.asC(this.a)},
$S:29}
A.UY.prototype={
$0(){var s=this.a,r=s.a
r.toString
s=s.at
s.toString
r.a_h()
return new A.xr(s,r)},
$S(){return this.b.h("xr<0>()")}}
A.Dp.prototype={
K(a){var s,r=this,q=a.a2(t.I)
q.toString
s=q.w
q=r.e
return A.amv(A.amv(new A.DD(q,r.f,q,null),r.c,s,!0),r.d,s,!1)}}
A.pU.prototype={
ag(){return new A.pV(B.m,this.$ti.h("pV<1>"))},
a_r(){return this.d.$0()},
a2b(){return this.e.$0()}}
A.pV.prototype={
aA(){var s,r=this
r.aM()
s=A.ahz(r,null)
s.at=r.gSq()
s.ax=r.gSs()
s.ay=r.gSo()
s.ch=r.gSl()
r.e=s},
m(){var s=this.e
s===$&&A.b()
s.k1.V(0)
s.tU()
this.aJ()},
Sr(a){this.d=this.a.a2b()},
St(a){var s,r,q=this.d
q.toString
s=a.c
s.toString
r=this.c
r=this.C0(s/r.gct(r).a)
q=q.a
s=q.x
s===$&&A.b()
q.sn(0,s-r)},
Sp(a){var s,r=this,q=r.d
q.toString
s=r.c
q.GL(r.C0(a.a.a.a/s.gct(s).a))
r.d=null},
Sm(){var s=this.d
if(s!=null)s.GL(0)
this.d=null},
Wb(a){var s
if(this.a.a_r()){s=this.e
s===$&&A.b()
s.Y4(a)}},
C0(a){var s=this.c.a2(t.I)
s.toString
switch(s.w.a){case 0:return-a
case 1:return a}},
K(a){var s,r,q=null,p=a.a2(t.I)
p.toString
s=t.l
r=p.w===B.ae?a.a2(s).f.f.a:a.a2(s).f.f.c
r=Math.max(r,20)
return A.i0(B.aM,A.a([this.a.c,A.Iw(0,A.FK(B.cR,q,q,this.gWa(),q,q,q),q,0,0,r)],t.E),B.J,B.AI)}}
A.xr.prototype={
GL(a){var s,r,q,p,o=this
if(Math.abs(a)>=1)s=a<=0
else{r=o.a.x
r===$&&A.b()
s=r>0.5}if(s){r=o.a
q=r.x
q===$&&A.b()
q=A.Q(800,0,q)
q.toString
q=A.c_(0,Math.min(B.d.eQ(q),300),0)
r.z=B.ap
r.kv(1,B.mc,q)}else{o.b.fu()
r=o.a
q=r.r
if(q!=null&&q.a!=null){q=r.x
q===$&&A.b()
q=A.Q(0,800,q)
q.toString
q=A.c_(0,B.d.eQ(q),0)
r.z=B.kP
r.kv(0,B.mc,q)}}q=r.r
if(q!=null&&q.a!=null){p=A.bd("animationStatusCallback")
p.b=new A.a9t(o,p)
q=p.aC()
r.bm()
r=r.aU$
r.b=!0
r.a.push(q)}else o.b.nP()}}
A.a9t.prototype={
$1(a){var s=this.a
s.b.nP()
s.a.bO(this.b.aC())},
$S:3}
A.h7.prototype={
c_(a,b){var s
if(a instanceof A.h7){s=A.a9u(a,this,b)
s.toString
return s}s=A.a9u(null,this,b)
s.toString
return s},
c0(a,b){var s
if(a instanceof A.h7){s=A.a9u(this,a,b)
s.toString
return s}s=A.a9u(this,null,b)
s.toString
return s},
qF(a){return new A.a9x(this,a)},
k(a,b){var s,r
if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
if(b instanceof A.h7){s=b.a
r=this.a
r=s==null?r==null:s===r
s=r}else s=!1
return s},
gv(a){return J.o(this.a)}}
A.a9v.prototype={
$1(a){var s=A.t(null,a,this.a)
s.toString
return s},
$S:65}
A.a9w.prototype={
$1(a){var s=A.t(null,a,1-this.a)
s.toString
return s},
$S:65}
A.a9x.prototype={
ov(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this.b.a
if(h==null)return
s=c.e
r=s.a
q=0.05*r
p=s.b
o=q/(h.length-1)
switch(c.d.a){case 0:n=b.a+r
m=1
break
case 1:n=b.a
m=-1
break
default:n=null
m=null}for(s=b.b,r=s+p,l=0,k=0;k<q;++k){if(B.f.fL(k,o)!==l)++l
j=$.av().bd()
i=A.t(h[l],h[l+1],B.f.cc(k,o)/o)
i.toString
j.sai(0,i)
i=n+m*k-1
a.d0(new A.E(i,s,i+1,r),j)}}}
A.nX.prototype={
ag(){return new A.xs(new A.bw(null,t.T),null,null,B.m)}}
A.xs.prototype={
aA(){var s,r=this
r.AU()
s=r.cy=A.dY(null,B.aR,null,null,r)
s.bm()
s=s.aY$
s.b=!0
s.a.push(new A.a9z(r))},
oR(){var s,r,q,p=this,o=p.at
o===$&&A.b()
s=p.c
s.toString
s=B.Ea.J1(s)
o.sai(0,s)
s=p.c.a2(t.I)
s.toString
o.sbB(s.w)
s=p.a
r=s.x
r.toString
q=p.cy
q===$&&A.b()
q=q.x
q===$&&A.b()
o.szf(r+q*(s.go-r))
o.sy5(3)
o.swH(3)
r=p.a
s=r.w
r=r.id
q=p.cy.x
q===$&&A.b()
q=A.vp(s,r,q)
q.toString
o.soB(q)
o.sd3(0,p.c.a2(t.l).f.f)
o.syd(0,36)
o.sId(8)
o.stv(p.a.dx)},
ri(a){var s,r=this
r.AT(a)
s=r.j7()
if(s==null)return
switch(s.a){case 1:r.db=a.b
break
case 0:r.db=a.a
break}},
rg(){if(this.j7()==null)return
this.MI()
var s=this.cy
s===$&&A.b()
s.cA(0).aS(new A.a9y(),t.H)},
rh(a,b){var s,r=this,q=r.j7()
if(q==null)return
s=r.cy
s===$&&A.b()
s.fv(0)
r.AS(a,b)
switch(q.a){case 1:if(Math.abs(b.a.b)<10&&Math.abs(a.b-r.db)>0)A.tO()
break
case 0:if(Math.abs(b.a.a)<10&&Math.abs(a.a-r.db)>0)A.tO()
break}},
m(){var s=this.cy
s===$&&A.b()
s.m()
this.AR()}}
A.a9z.prototype={
$0(){this.a.oR()},
$S:0}
A.a9y.prototype={
$1(a){return A.tO()},
$S:383}
A.Dr.prototype={
K(a){var s=null
return new A.xP(this,A.ahC(this.d,A.akE(this.c.ga2p(),s,s,s,s,s,s,s),s),s)}}
A.xP.prototype={
bQ(a){return this.f.c!==a.f.c}}
A.Ds.prototype={}
A.I_.prototype={}
A.a9B.prototype={}
A.a9A.prototype={}
A.Mc.prototype={}
A.afe.prototype={
$0(){return null},
$S:385}
A.aeb.prototype={
$0(){var s=self.window.navigator.platform,r=s==null?null:s.toLowerCase()
if(r==null)r=""
if(B.c.bh(r,"mac"))return B.b3
if(B.c.bh(r,"win"))return B.bc
if(B.c.B(r,"iphone")||B.c.B(r,"ipad")||B.c.B(r,"ipod"))return B.aw
if(B.c.B(r,"android"))return B.av
if(self.window.matchMedia("only screen and (pointer: fine)").matches)return B.bb
return B.av},
$S:141}
A.kE.prototype={}
A.o7.prototype={}
A.EA.prototype={}
A.Ez.prototype={}
A.bz.prototype={
a_B(){var s,r,q,p,o,n,m,l=this.a
if(t.hK.b(l)){s=l.gIc(l)
r=l.j(0)
if(typeof s=="string"&&s!==r){q=r.length
p=J.aL(s)
if(q>p.gp(s)){o=B.c.rz(r,s)
if(o===q-p.gp(s)&&o>2&&B.c.a3(r,o-2,o)===": "){n=B.c.a3(r,0,o-2)
m=B.c.hP(n," Failed assertion:")
if(m>=0)n=B.c.a3(n,0,m)+"\n"+B.c.bJ(n,m+1)
l=p.zm(s)+"\n"+n}else l=null}else l=null}else l=null
if(l==null)l=r}else if(!(typeof l=="string"))l=t.yt.b(l)||t.A2.b(l)?J.dc(l):"  "+A.l(l)
l=B.c.zm(l)
return l.length===0?"  <no message available>":l},
gKV(){var s=A.asR(new A.Y8(this).$0(),!0,B.mj)
return s},
bP(){return"Exception caught by "+this.c},
j(a){A.axb(null,B.Eo,this)
return""}}
A.Y8.prototype={
$0(){return J.arG(this.a.a_B().split("\n")[0])},
$S:4}
A.jV.prototype={
gIc(a){return this.j(0)},
bP(){return"FlutterError"},
j(a){var s,r,q=new A.d6(this.a,t.dw)
if(!q.gO(q)){s=q.gM(q)
r=J.dV(s)
s=A.fG.prototype.gn.call(r,s)
s.toString
s=J.arn(s)}else s="FlutterError"
return s},
$ila:1}
A.Y9.prototype={
$1(a){return A.bj(a)},
$S:142}
A.Yb.prototype={
$1(a){return a+1},
$S:93}
A.Yc.prototype={
$1(a){return a+1},
$S:93}
A.afn.prototype={
$1(a){return B.c.B(a,"StackTrace.current")||B.c.B(a,"dart-sdk/lib/_internal")||B.c.B(a,"dart:sdk_internal")},
$S:28}
A.MR.prototype={}
A.MT.prototype={}
A.MS.prototype={}
A.AB.prototype={
OG(){var s,r,q,p,o,n,m,l,k=this,j=null
A.aik("Framework initialization",j,j)
k.Oo()
$.ap=k
s=t.h
r=A.cA(s)
q=A.a([],t.pX)
p=t.S
o=A.iS(j,j,j,t.tP,p)
n=A.aht(!0,"Root Focus Scope",!1)
m=A.a([],t.e6)
l=$.bv()
o=n.w=new A.tH(new A.tP(o,t.b4),n,A.aE(t.lc),m,l)
n=$.h1.bf$
n===$&&A.b()
n.a=o.gSM()
$.eg.k4$.b.l(0,o.gRh(),j)
s=new A.TC(new A.Nj(r),q,o,A.u(t.uY,s))
k.J$=s
s.a=k.gS4()
$.aM().dy=k.ga0b()
B.eQ.mj(k.gSR())
s=new A.DJ(A.u(p,t.lv),B.yl)
B.yl.mj(s.gUu())
k.au$=s
k.hQ()
s=t.N
A.aB5("Flutter.FrameworkInitialization",A.u(s,s))
A.aij()},
eo(){},
hQ(){},
a1N(a){var s,r=new A.KF(null,0,A.a([],t.vS))
r.pb(0,"Lock events");++this.b
s=a.$0()
s.eY(new A.Tp(this,r))
return s},
zn(){},
hW(){$.Ya=0
return A.bt(null,t.H)},
j(a){return"<BindingBase>"}}
A.Tp.prototype={
$0(){var s=this.a
if(--s.b<=0){this.b.r6(0)
s.Og()
if(s.x$.c!==0)s.Ck()}},
$S:9}
A.ad.prototype={}
A.eA.prototype={
U(a,b){var s,r,q,p,o=this
if(o.gbT(o)===o.gbt().length){s=t.xR
if(o.gbT(o)===0)o.sbt(A.b_(1,null,!1,s))
else{r=A.b_(o.gbt().length*2,null,!1,s)
for(q=0;q<o.gbT(o);++q)r[q]=o.gbt()[q]
o.sbt(r)}}s=o.gbt()
p=o.gbT(o)
o.sbT(0,p+1)
s[p]=b},
pX(a){var s,r,q,p=this
p.sbT(0,p.gbT(p)-1)
if(p.gbT(p)*2<=p.gbt().length){s=A.b_(p.gbT(p),null,!1,t.xR)
for(r=0;r<a;++r)s[r]=p.gbt()[r]
for(r=a;r<p.gbT(p);r=q){q=r+1
s[r]=p.gbt()[q]}p.sbt(s)}else{for(r=a;r<p.gbT(p);r=q){q=r+1
p.gbt()[r]=p.gbt()[q]}p.gbt()[p.gbT(p)]=null}},
H(a,b){var s,r=this
for(s=0;s<r.gbT(r);++s)if(J.f(r.gbt()[s],b)){if(r.gec()>0){r.gbt()[s]=null
r.seF(r.geF()+1)}else r.pX(s)
break}},
m(){this.sbt($.bv())
this.sbT(0,0)},
aB(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.gbT(e)===0)return
e.sec(e.gec()+1)
p=e.gbT(e)
for(s=0;s<p;++s)try{o=e.gbt()[s]
if(o!=null)o.$0()}catch(n){r=A.aj(n)
q=A.aA(n)
m=e instanceof A.cf?A.dU(e):null
o=A.bj("while dispatching notifications for "+A.aP(m==null?A.b2(e):m).j(0))
l=$.fz()
if(l!=null)l.$1(new A.bz(r,q,"foundation library",o,new A.Uj(e),!1))}e.sec(e.gec()-1)
if(e.gec()===0&&e.geF()>0){k=e.gbT(e)-e.geF()
if(k*2<=e.gbt().length){j=A.b_(k,null,!1,t.xR)
for(i=0,s=0;s<e.gbT(e);++s){h=e.gbt()[s]
if(h!=null){g=i+1
j[i]=h
i=g}}e.sbt(j)}else for(s=0;s<k;++s)if(e.gbt()[s]==null){f=s+1
for(;e.gbt()[f]==null;)++f
e.gbt()[s]=e.gbt()[f]
e.gbt()[f]=null}e.seF(0)
e.sbT(0,k)}},
$iad:1,
gbT(a){return this.y1$},
gbt(){return this.y2$},
gec(){return this.ao$},
geF(){return this.ar$},
sbT(a,b){return this.y1$=b},
sbt(a){return this.y2$=a},
sec(a){return this.ao$=a},
seF(a){return this.ar$=a}}
A.Uj.prototype={
$0(){var s=null,r=this.a
return A.a([A.hq("The "+A.A(r).j(0)+" sending notification was",r,!0,B.aC,s,!1,s,s,B.am,s,!1,!0,!0,B.aQ,s,t.ig)],t.F)},
$S:18}
A.y8.prototype={
U(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q)s[q].U(0,b)},
H(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q)s[q].H(0,b)},
j(a){return"Listenable.merge(["+B.b.b7(this.a,", ")+"])"}}
A.mO.prototype={
B9(a){this.ad$=!0},
sn(a,b){var s=this.a
if(s==null?b==null:s===b)return
this.a=b
this.aB()},
j(a){return"<optimized out>#"+A.bL(this)+"("+A.l(this.a)+")"}}
A.o0.prototype={
G(){return"DiagnosticLevel."+this.b}}
A.hr.prototype={
G(){return"DiagnosticsTreeStyle."+this.b}}
A.ac1.prototype={}
A.cZ.prototype={
zk(a,b){return this.mv(0)},
j(a){return this.zk(a,B.am)}}
A.fG.prototype={
gn(a){this.Ur()
return this.at},
Ur(){return}}
A.t9.prototype={}
A.DP.prototype={}
A.ae.prototype={
bP(){return"<optimized out>#"+A.bL(this)},
zk(a,b){var s=this.bP()
return s},
j(a){return this.zk(a,B.am)}}
A.Vd.prototype={
bP(){return"<optimized out>#"+A.bL(this)}}
A.hp.prototype={
j(a){return this.Je(B.mj).mv(0)},
bP(){return"<optimized out>#"+A.bL(this)},
a3p(a,b){return A.ahf(a,b,this)},
Je(a){return this.a3p(null,a)}}
A.Mp.prototype={}
A.dK.prototype={}
A.FM.prototype={}
A.ji.prototype={
j(a){return"[#"+A.bL(this)+"]"}}
A.cH.prototype={
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return A.n(this).h("cH<cH.T>").b(b)&&J.f(b.a,this.a)},
gv(a){return A.Y(A.A(this),this.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=A.n(this),r=s.h("cH.T"),q=this.a,p=A.aP(r)===B.kL?"<'"+A.l(q)+"'>":"<"+A.l(q)+">"
if(A.A(this)===A.aP(s.h("cH<cH.T>")))return"["+p+"]"
return"["+A.aP(r).j(0)+" "+p+"]"}}
A.aiF.prototype={}
A.f4.prototype={}
A.ud.prototype={}
A.I.prototype={
z1(a){var s=a.a,r=this.a
if(s<=r){a.a=r+1
a.iT()}},
iT(){},
gbj(){return this.b},
aq(a){this.b=a},
ah(a){this.b=null},
gaH(a){return this.c},
hA(a){var s
a.c=this
s=this.b
if(s!=null)a.aq(s)
this.z1(a)},
is(a){a.c=null
if(this.b!=null)a.ah(0)}}
A.bi.prototype={
gpQ(){var s,r=this,q=r.c
if(q===$){s=A.cA(r.$ti.c)
r.c!==$&&A.bF()
r.c=s
q=s}return q},
u(a,b){this.b=!0
this.gpQ().V(0)
return B.b.u(this.a,b)},
V(a){this.b=!1
B.b.V(this.a)
this.gpQ().V(0)},
B(a,b){var s=this,r=s.a
if(r.length<3)return B.b.B(r,b)
if(s.b){s.gpQ().I(0,r)
s.b=!1}return s.gpQ().B(0,b)},
ga4(a){var s=this.a
return new J.l9(s,s.length)},
gO(a){return this.a.length===0},
gbz(a){return this.a.length!==0},
cj(a,b){var s=this.a,r=A.an(s)
return b?A.a(s.slice(0),r):J.lT(s.slice(0),r.c)},
ew(a){return this.cj(a,!0)}}
A.tP.prototype={
C(a,b){var s=this.a,r=s.i(0,b)
s.l(0,b,(r==null?0:r)+1)},
u(a,b){var s=this.a,r=s.i(0,b)
if(r==null)return!1
if(r===1)s.u(0,b)
else s.l(0,b,r-1)
return!0},
B(a,b){return this.a.T(0,b)},
ga4(a){var s=this.a
return A.iR(s,s.r)},
gO(a){return this.a.a===0},
gbz(a){return this.a.a!==0}}
A.vi.prototype={
a2B(a,b,c){var s=this.a,r=s==null?$.A9():s,q=r.hi(0,0,b,A.e3(b),c)
if(q===s)return this
return new A.vi(q)},
i(a,b){var s=this.a
if(s==null)return null
return s.ma(0,0,b,J.o(b))}}
A.adA.prototype={}
A.N1.prototype={
hi(a,b,c,d,e){var s,r,q,p,o=B.f.n2(d,b)&31,n=this.a,m=n[o]
if(m==null)m=$.A9()
s=m.hi(0,b+5,c,d,e)
if(s===m)n=this
else{r=n.length
q=A.b_(r,null,!1,t.X)
for(p=0;p<r;++p)q[p]=n[p]
q[o]=s
n=new A.N1(q)}return n},
ma(a,b,c,d){var s=this.a[B.f.Aj(d,b)&31]
return s==null?null:s.ma(0,b+5,c,d)}}
A.kC.prototype={
hi(a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=B.f.n2(a7,a5)&31,a0=1<<a>>>0,a1=c.a,a2=(a1&a0-1)>>>0,a3=a2-(a2>>>1&1431655765)
a3=(a3&858993459)+(a3>>>2&858993459)
a3=a3+(a3>>>4)&252645135
a3+=a3>>>8
s=a3+(a3>>>16)&63
if((a1&a0)>>>0!==0){a=c.b
a2=2*s
r=a[a2]
q=a2+1
p=a[q]
if(r==null){o=J.arv(p,a5+5,a6,a7,a8)
if(o===p)return c
a2=a.length
n=A.b_(a2,b,!1,t.X)
for(m=0;m<a2;++m)n[m]=a[m]
n[q]=o
return new A.kC(a1,n)}if(J.f(a6,r)){if(a8==null?p==null:a8===p)a=c
else{a2=a.length
n=A.b_(a2,b,!1,t.X)
for(m=0;m<a2;++m)n[m]=a[m]
n[q]=a8
a=new A.kC(a1,n)}return a}l=a5+5
k=J.o(r)
if(k===a7){j=A.b_(4,b,!1,t.X)
j[0]=r
j[1]=p
j[2]=a6
j[3]=a8
o=new A.xL(a7,j)}else o=$.A9().hi(0,l,r,k,p).hi(0,l,a6,a7,a8)
l=a.length
n=A.b_(l,b,!1,t.X)
for(m=0;m<l;++m)n[m]=a[m]
n[a2]=null
n[q]=o
return new A.kC(a1,n)}else{a3=a1-(a1>>>1&1431655765)
a3=(a3&858993459)+(a3>>>2&858993459)
a3=a3+(a3>>>4)&252645135
a3+=a3>>>8
i=a3+(a3>>>16)&63
if(i>=16){a1=c.TQ(a5)
a1.a[a]=$.A9().hi(0,a5+5,a6,a7,a8)
return a1}else{h=2*s
g=2*i
f=A.b_(g+2,b,!1,t.X)
for(a=c.b,e=0;e<h;++e)f[e]=a[e]
f[h]=a6
f[h+1]=a8
for(d=h+2,e=h;e<g;++e,++d)f[d]=a[e]
return new A.kC((a1|a0)>>>0,f)}}},
ma(a,b,c,d){var s,r,q,p,o=1<<(B.f.Aj(d,b)&31)>>>0,n=this.a
if((n&o)>>>0===0)return null
n=(n&o-1)>>>0
s=n-(n>>>1&1431655765)
s=(s&858993459)+(s>>>2&858993459)
s=s+(s>>>4)&252645135
s+=s>>>8
n=this.b
r=2*(s+(s>>>16)&63)
q=n[r]
p=n[r+1]
if(q==null)return p.ma(0,b+5,c,d)
if(c===q)return p
return null},
TQ(a){var s,r,q,p,o,n,m,l=A.b_(32,null,!1,t.X)
for(s=this.a,r=a+5,q=this.b,p=0,o=0;o<32;++o)if((B.f.n2(s,o)&1)!==0){n=q[p]
m=p+1
if(n==null)l[o]=q[m]
else l[o]=$.A9().hi(0,r,n,J.o(n),q[m])
p+=2}return new A.N1(l)}}
A.xL.prototype={
hi(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(d===i){s=j.CZ(c)
if(s!==-1){i=j.b
r=s+1
q=i[r]
if(q==null?e==null:q===e)i=j
else{q=i.length
p=A.b_(q,null,!1,t.X)
for(o=0;o<q;++o)p[o]=i[o]
p[r]=e
i=new A.xL(d,p)}return i}i=j.b
n=i.length
m=A.b_(n+2,null,!1,t.X)
for(l=0;l<n;++l)m[l]=i[l]
m[n]=c
m[n+1]=e
return new A.xL(d,m)}i=B.f.n2(i,b)
k=A.b_(2,null,!1,t.X)
k[1]=j
return new A.kC(1<<(i&31)>>>0,k).hi(0,b,c,d,e)},
ma(a,b,c,d){var s=this.CZ(c)
return s<0?null:this.b[s+1]},
CZ(a){var s,r,q=this.b,p=q.length
for(s=J.is(a),r=0;r<p;r+=2)if(s.k(a,q[r]))return r
return-1}}
A.cG.prototype={
G(){return"TargetPlatform."+this.b}}
A.a8B.prototype={
cW(a,b){var s,r,q=this
if(q.b===q.a.length)q.W3()
s=q.a
r=q.b
s[r]=b
q.b=r+1},
jc(a){var s=this,r=a.length,q=s.b+r
if(q>=s.a.length)s.vy(q)
B.Y.ey(s.a,s.b,q,a)
s.b+=r},
mB(a,b,c){var s=this,r=c==null?s.e.length:c,q=s.b+(r-b)
if(q>=s.a.length)s.vy(q)
B.Y.ey(s.a,s.b,q,a)
s.b=q},
P5(a){return this.mB(a,0,null)},
vy(a){var s=this.a,r=s.length,q=a==null?0:a,p=Math.max(q,r*2),o=new Uint8Array(p)
B.Y.ey(o,0,r,s)
this.a=o},
W3(){return this.vy(null)},
fM(a){var s=B.f.cc(this.b,a)
if(s!==0)this.mB($.apQ(),0,a-s)},
ir(){var s,r=this
if(r.c)throw A.d(A.a6("done() must not be called more than once on the same "+A.A(r).j(0)+"."))
s=A.iZ(r.a.buffer,0,r.b)
r.a=new Uint8Array(0)
r.c=!0
return s}}
A.vs.prototype={
kd(a){return this.a.getUint8(this.b++)},
tn(a){var s=this.b,r=$.cO()
B.eN.zL(this.a,s,r)},
ke(a){var s=this.a,r=A.ci(s.buffer,s.byteOffset+this.b,a)
this.b+=a
return r},
tp(a){var s
this.fM(8)
s=this.a
B.yh.FO(s.buffer,s.byteOffset+this.b,a)},
fM(a){var s=this.b,r=B.f.cc(s,a)
if(r!==0)this.b=s+(a-r)}}
A.h3.prototype={
gv(a){var s=this
return A.Y(s.b,s.d,s.f,s.r,s.w,s.x,s.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(J.S(b)!==A.A(s))return!1
return b instanceof A.h3&&b.b===s.b&&b.d===s.d&&b.f===s.f&&b.r===s.r&&b.w===s.w&&b.x===s.x&&b.a===s.a},
j(a){var s=this
return"StackFrame(#"+s.b+", "+s.c+":"+s.d+"/"+s.e+":"+s.f+":"+s.r+", className: "+s.w+", method: "+s.x+")"}}
A.a6W.prototype={
$1(a){return a.length!==0},
$S:28}
A.bo.prototype={
l5(a,b){return new A.a7($.a9,this.$ti.h("a7<1>"))},
ju(a){return this.l5(a,null)},
dF(a,b,c){var s=a.$1(this.a)
if(c.h("ah<0>").b(s))return s
return new A.bo(s,c.h("bo<0>"))},
aS(a,b){return this.dF(a,null,b)},
eY(a){var s,r,q,p,o,n=this
try{s=a.$0()
if(t.o0.b(s)){p=s.aS(new A.a7j(n),n.$ti.c)
return p}return n}catch(o){r=A.aj(o)
q=A.aA(o)
p=A.ahv(r,q,n.$ti.c)
return p}},
$iah:1}
A.a7j.prototype={
$1(a){return this.a.a},
$S(){return this.a.$ti.h("1(@)")}}
A.tL.prototype={
G(){return"GestureDisposition."+this.b}}
A.cs.prototype={}
A.F2.prototype={}
A.qa.prototype={
j(a){var s=this,r=s.a
r=r.length===0?""+"<empty>":""+new A.aH(r,new A.aas(s),A.an(r).h("aH<1,m>")).b7(0,", ")
if(s.b)r+=" [open]"
if(s.c)r+=" [held]"
if(s.d)r+=" [hasPendingSweep]"
return r.charCodeAt(0)==0?r:r}}
A.aas.prototype={
$1(a){if(a===this.a.e)return a.j(0)+" (eager winner)"
return a.j(0)},
$S:147}
A.Yy.prototype={
FB(a,b,c){this.a.br(0,b,new A.YA(this,b)).a.push(c)
return new A.F2(this,b,c)},
Z0(a,b){var s=this.a.i(0,b)
if(s==null)return
s.b=!1
this.F0(b,s)},
B5(a){var s,r=this.a,q=r.i(0,a)
if(q==null)return
if(q.c){q.d=!0
return}r.u(0,a)
r=q.a
if(r.length!==0){B.b.gM(r).fT(a)
for(s=1;s<r.length;++s)r[s].hY(a)}},
a0X(a){var s=this.a.i(0,a)
if(s==null)return
s.c=!0},
a2O(a,b){var s=this.a.i(0,b)
if(s==null)return
s.c=!1
if(s.d)this.B5(b)},
mE(a,b,c){var s=this.a.i(0,a)
if(s==null)return
if(c===B.ab){B.b.u(s.a,b)
b.hY(a)
if(!s.b)this.F0(a,s)}else if(s.b){if(s.e==null)s.e=b}else this.E4(a,s,b)},
F0(a,b){var s=b.a.length
if(s===1)A.dW(new A.Yz(this,a,b))
else if(s===0)this.a.u(0,a)
else{s=b.e
if(s!=null)this.E4(a,b,s)}},
W5(a,b){var s=this.a
if(!s.T(0,a))return
s.u(0,a)
B.b.gM(b.a).fT(a)},
E4(a,b,c){var s,r,q,p
this.a.u(0,a)
for(s=b.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q){p=s[q]
if(p!==c)p.hY(a)}c.fT(a)}}
A.YA.prototype={
$0(){return new A.qa(A.a([],t.ia))},
$S:148}
A.Yz.prototype={
$0(){return this.a.W5(this.b,this.c)},
$S:0}
A.acx.prototype={
fH(a){var s,r,q,p,o,n=this
for(s=n.a,r=s.gaX(s),r=new A.e1(J.aw(r.a),r.b),q=n.r,p=A.n(r).z[1];r.q();){o=r.a;(o==null?p.a(o):o).a3Y(0,q)}s.V(0)
n.c=B.r
s=n.y
if(s!=null)s.am(0)}}
A.oe.prototype={
T_(a){var s=a.a,r=$.bR().w
if(r==null){r=self.window.devicePixelRatio
if(r===0)r=1}this.k3$.I(0,A.av9(s,r))
if(this.b<=0)this.uM()},
YH(a){var s=this.k3$
if(s.b===s.c&&this.b<=0)A.dW(this.gRf())
s.nc(A.alV(0,0,0,0,0,B.cq,!1,0,a,B.k,1,1,0,0,0,0,0,0,B.r))},
uM(){for(var s=this.k3$;!s.gO(s);)this.a0m(s.m0())},
a0m(a){this.gE3().fH(0)
this.CR(a)},
CR(a){var s,r,q,p=this,o=!t.Y.b(a)
if(!o||t.zs.b(a)||t.hV.b(a)||t.EL.b(a)){s=A.ala()
r=a.gbq(a)
q=p.ry$
q===$&&A.b()
q.e.bM(s,r)
p.LP(s,r)
if(!o||t.EL.b(a))p.p2$.l(0,a.gbK(),s)
o=s}else if(t.g.b(a)||t.AJ.b(a)||t.zv.b(a)){s=p.p2$.u(0,a.gbK())
o=s}else o=a.gqV()||t.c.b(a)?p.p2$.i(0,a.gbK()):null
if(o!=null||t.ye.b(a)||t.yg.b(a))p.x3(0,a,o)},
a0S(a,b){a.C(0,new A.hy(this,t.Cq))},
x3(a,b,c){var s,r,q,p,o,n,m,l,k,j,i="gesture library"
if(c==null){try{this.k4$.Ja(b)}catch(p){s=A.aj(p)
r=A.aA(p)
A.dI(A.atw(A.bj("while dispatching a non-hit-tested pointer event"),b,s,null,new A.YB(b),i,r))}return}for(n=c.a,m=n.length,l=0;l<n.length;n.length===m||(0,A.R)(n),++l){q=n[l]
try{q.a.hN(b.aI(q.b),q)}catch(s){p=A.aj(s)
o=A.aA(s)
k=A.bj("while dispatching a pointer event")
j=$.fz()
if(j!=null)j.$1(new A.tF(p,o,i,k,new A.YC(b,q),!1))}}},
hN(a,b){var s=this
s.k4$.Ja(a)
if(t.Y.b(a)||t.EL.b(a))s.ok$.Z0(0,a.gbK())
else if(t.g.b(a)||t.zv.b(a))s.ok$.B5(a.gbK())
else if(t.zs.b(a))s.p1$.X(a)},
Th(){if(this.b<=0)this.gE3().fH(0)},
gE3(){var s=this,r=s.p3$
if(r===$){$.Sx()
r!==$&&A.bF()
r=s.p3$=new A.acx(A.u(t.S,t.d0),B.r,new A.ww(),B.r,B.r,s.gT3(),s.gTg(),B.Ex)}return r},
$iaq:1}
A.YB.prototype={
$0(){var s=null
return A.a([A.hq("Event",this.a,!0,B.aC,s,!1,s,s,B.am,s,!1,!0,!0,B.aQ,s,t.cL)],t.F)},
$S:18}
A.YC.prototype={
$0(){var s=null
return A.a([A.hq("Event",this.a,!0,B.aC,s,!1,s,s,B.am,s,!1,!0,!0,B.aQ,s,t.cL),A.hq("Target",this.b.a,!0,B.aC,s,!1,s,s,B.am,s,!1,!0,!0,B.aQ,s,t.kZ)],t.F)},
$S:18}
A.tF.prototype={}
A.a1N.prototype={
$1(a){return a.e!==B.SG},
$S:151}
A.a1O.prototype={
$1(a2){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=new A.y(a2.w,a2.x).dI(0,h),f=new A.y(a2.y,a2.z).dI(0,h),e=a2.dx/h,d=a2.db/h,c=a2.dy/h,b=a2.fr/h,a=a2.b,a0=a2.d,a1=a2.e
switch((a1==null?B.cr:a1).a){case 0:switch(a2.c.a){case 1:h=a2.f
a1=a2.ay
s=a2.ch
return A.av6(h,a2.CW,a2.cx,0,a0,!1,a2.fx,g,s,a1,b,c,a2.fy,a)
case 3:h=a2.f
a1=a2.Q
s=a2.ay
r=a2.ch
q=a2.CW
p=a2.cx
o=a2.cy
n=a2.fx
m=a2.fy
return A.avb(a1,f,h,q,p,0,a0,!1,n,g,r,s,d,b,c,e,o,a2.at,m,a)
case 4:h=a2.r
a1=a2.f
s=A.ao7(a2.Q,a0)
r=a2.ax
q=a2.ay
p=a2.ch
o=a2.cx
n=a2.cy
return A.av7(s,a1,o,0,a0,!1,a2.fx,h,g,r,p,q,d,b,c,e,n,a2.fy,a)
case 5:h=a2.r
a1=a2.f
s=A.ao7(a2.Q,a0)
r=a2.ax
q=a2.ay
p=a2.ch
o=a2.cx
n=a2.cy
m=a2.fx
l=a2.fy
return A.avc(s,f,a1,o,0,a0,!1,m,a2.go,h,g,r,p,q,d,b,c,e,n,a2.at,l,a)
case 6:h=a2.r
a1=a2.f
s=a2.Q
r=a2.ax
q=a2.ay
p=a2.ch
o=a2.CW
n=a2.cx
m=a2.cy
return A.avk(s,a1,o,n,0,a0,!1,a2.fx,h,g,r,p,q,d,b,c,e,m,a2.fy,a)
case 0:h=a2.r
a1=a2.f
s=a2.Q
r=a2.ay
q=a2.ch
p=a2.CW
o=a2.cx
n=a2.cy
return A.alV(s,a1,p,o,0,a0,!1,a2.fx,h,g,q,r,d,b,c,e,n,a2.fy,a)
case 2:h=a2.f
a1=a2.ay
s=a2.ch
return A.avg(h,a2.cx,0,a0,!1,g,s,a1,b,c,a)
case 7:h=a2.r
return A.ave(a2.f,0,h,g,a2.at,a)
case 8:k=new A.y(0,0).dI(0,h)
j=new A.y(0,0).dI(0,h)
h=a2.r
return A.avf(a2.f,0,k,j,h,g,0,0,a2.at,a)
case 9:h=a2.r
return A.avd(a2.f,0,h,g,a2.at,a)}break
case 1:i=new A.y(a2.id,a2.k1).dI(0,h)
return A.avi(a2.f,0,a0,g,i,a)
case 2:return A.avj(a2.f,0,a0,g,a)
case 3:return A.avh(a2.f,0,a0,g,0,a)
case 4:throw A.d(A.a6("Unreachable"))}},
$S:152}
A.iE.prototype={
j(a){return"DragDownDetails("+this.a.j(0)+")"}}
A.hu.prototype={
j(a){return"DragStartDetails("+this.b.j(0)+")"}}
A.hv.prototype={
j(a){return"DragUpdateDetails("+this.b.j(0)+")"}}
A.fI.prototype={
j(a){return"DragEndDetails("+this.a.j(0)+")"}}
A.aN.prototype={
gcP(){return this.f},
gI5(){return this.r},
gfw(a){return this.b},
gbK(){return this.c},
gc4(a){return this.d},
ghG(a){return this.e},
gbq(a){return this.f},
gnH(){return this.r},
gcn(a){return this.w},
gqV(){return this.x},
got(){return this.y},
gID(a){return this.z},
gt1(){return this.Q},
goy(){return this.as},
gcM(){return this.at},
gx5(){return this.ax},
gct(a){return this.ay},
gyV(){return this.ch},
gyY(){return this.CW},
gyX(){return this.cx},
gyW(){return this.cy},
gyL(a){return this.db},
gzi(){return this.dx},
gmA(){return this.fr},
gbg(a){return this.fx}}
A.cI.prototype={$iaN:1}
A.L8.prototype={$iaN:1}
A.QQ.prototype={
gfw(a){return this.gb8().b},
gbK(){return this.gb8().c},
gc4(a){return this.gb8().d},
ghG(a){return this.gb8().e},
gbq(a){return this.gb8().f},
gnH(){return this.gb8().r},
gcn(a){return this.gb8().w},
gqV(){return this.gb8().x},
got(){this.gb8()
return!1},
gID(a){return this.gb8().z},
gt1(){return this.gb8().Q},
goy(){return this.gb8().as},
gcM(){return this.gb8().at},
gx5(){return this.gb8().ax},
gct(a){return this.gb8().ay},
gyV(){return this.gb8().ch},
gyY(){return this.gb8().CW},
gyX(){return this.gb8().cx},
gyW(){return this.gb8().cy},
gyL(a){return this.gb8().db},
gzi(){return this.gb8().dx},
gmA(){return this.gb8().fr},
gcP(){var s,r=this,q=r.a
if(q===$){s=A.a1Q(r.gbg(r),r.gb8().f)
r.a!==$&&A.bF()
r.a=s
q=s}return q},
gI5(){var s,r,q,p,o=this,n=o.b
if(n===$){s=o.gbg(o)
r=o.gb8()
q=o.gb8()
p=A.a1P(s,o.gcP(),r.r,q.f)
o.b!==$&&A.bF()
o.b=p
n=p}return n}}
A.LS.prototype={}
A.m9.prototype={
aI(a){if(a==null||a.k(0,this.fx))return this
return new A.QM(this,a)}}
A.QM.prototype={
aI(a){return this.c.aI(a)},
$im9:1,
gb8(){return this.c},
gbg(a){return this.d}}
A.M1.prototype={}
A.me.prototype={
aI(a){if(a==null||a.k(0,this.fx))return this
return new A.QX(this,a)}}
A.QX.prototype={
aI(a){return this.c.aI(a)},
$ime:1,
gb8(){return this.c},
gbg(a){return this.d}}
A.LX.prototype={}
A.j4.prototype={
aI(a){if(a==null||a.k(0,this.fx))return this
return new A.QS(this,a)}}
A.QS.prototype={
aI(a){return this.c.aI(a)},
$ij4:1,
gb8(){return this.c},
gbg(a){return this.d}}
A.LV.prototype={}
A.kh.prototype={
aI(a){if(a==null||a.k(0,this.fx))return this
return new A.QP(this,a)}}
A.QP.prototype={
aI(a){return this.c.aI(a)},
$ikh:1,
gb8(){return this.c},
gbg(a){return this.d}}
A.LW.prototype={}
A.ki.prototype={
aI(a){if(a==null||a.k(0,this.fx))return this
return new A.QR(this,a)}}
A.QR.prototype={
aI(a){return this.c.aI(a)},
$iki:1,
gb8(){return this.c},
gbg(a){return this.d}}
A.LU.prototype={}
A.j3.prototype={
aI(a){if(a==null||a.k(0,this.fx))return this
return new A.QO(this,a)}}
A.QO.prototype={
aI(a){return this.c.aI(a)},
$ij3:1,
gb8(){return this.c},
gbg(a){return this.d}}
A.LY.prototype={}
A.mb.prototype={
aI(a){if(a==null||a.k(0,this.fx))return this
return new A.QT(this,a)}}
A.QT.prototype={
aI(a){return this.c.aI(a)},
$imb:1,
gb8(){return this.c},
gbg(a){return this.d}}
A.M5.prototype={}
A.mh.prototype={
aI(a){if(a==null||a.k(0,this.fx))return this
return new A.R0(this,a)}}
A.R0.prototype={
aI(a){return this.c.aI(a)},
$imh:1,
gb8(){return this.c},
gbg(a){return this.d}}
A.dL.prototype={}
A.M3.prototype={}
A.mf.prototype={
aI(a){if(a==null||a.k(0,this.fx))return this
return new A.QZ(this,a)},
gmf(){return this.bf}}
A.QZ.prototype={
gmf(){return this.c.bf},
aI(a){return this.c.aI(a)},
$idL:1,
$imf:1,
gb8(){return this.c},
gbg(a){return this.d}}
A.M4.prototype={}
A.mg.prototype={
aI(a){if(a==null||a.k(0,this.fx))return this
return new A.R_(this,a)}}
A.R_.prototype={
aI(a){return this.c.aI(a)},
$idL:1,
$img:1,
gb8(){return this.c},
gbg(a){return this.d}}
A.M2.prototype={}
A.It.prototype={
aI(a){if(a==null||a.k(0,this.fx))return this
return new A.QY(this,a)}}
A.QY.prototype={
aI(a){return this.c.aI(a)},
$idL:1,
gb8(){return this.c},
gbg(a){return this.d}}
A.M_.prototype={}
A.j5.prototype={
aI(a){if(a==null||a.k(0,this.fx))return this
return new A.QV(this,a)}}
A.QV.prototype={
aI(a){return this.c.aI(a)},
$ij5:1,
gb8(){return this.c},
gbg(a){return this.d}}
A.M0.prototype={}
A.md.prototype={
gy3(){return this.go},
gI6(){return this.id},
aI(a){if(a==null||a.k(0,this.fx))return this
return new A.QW(this,a)},
gyP(a){return this.go},
gIv(){return this.id}}
A.QW.prototype={
gyP(a){return this.e.go},
gy3(){var s,r=this,q=r.c
if(q===$){s=A.a1Q(r.f,r.e.go)
r.c!==$&&A.bF()
r.c=s
q=s}return q},
gIv(){return this.e.id},
gI6(){var s,r,q=this,p=q.d
if(p===$){s=q.e
r=A.a1P(q.f,q.gy3(),s.id,s.go)
q.d!==$&&A.bF()
q.d=r
p=r}return p},
aI(a){return this.e.aI(a)},
$imd:1,
gb8(){return this.e},
gbg(a){return this.f}}
A.LZ.prototype={}
A.mc.prototype={
aI(a){if(a==null||a.k(0,this.fx))return this
return new A.QU(this,a)}}
A.QU.prototype={
aI(a){return this.c.aI(a)},
$imc:1,
gb8(){return this.c},
gbg(a){return this.d}}
A.LT.prototype={}
A.ma.prototype={
aI(a){if(a==null||a.k(0,this.fx))return this
return new A.QN(this,a)}}
A.QN.prototype={
aI(a){return this.c.aI(a)},
$ima:1,
gb8(){return this.c},
gbg(a){return this.d}}
A.Oq.prototype={}
A.Or.prototype={}
A.Os.prototype={}
A.Ot.prototype={}
A.Ou.prototype={}
A.Ov.prototype={}
A.Ow.prototype={}
A.Ox.prototype={}
A.Oy.prototype={}
A.Oz.prototype={}
A.OA.prototype={}
A.OB.prototype={}
A.OC.prototype={}
A.OD.prototype={}
A.OE.prototype={}
A.OF.prototype={}
A.OG.prototype={}
A.OH.prototype={}
A.OI.prototype={}
A.OJ.prototype={}
A.OK.prototype={}
A.OL.prototype={}
A.OM.prototype={}
A.ON.prototype={}
A.OO.prototype={}
A.OP.prototype={}
A.OQ.prototype={}
A.OR.prototype={}
A.OS.prototype={}
A.OT.prototype={}
A.OU.prototype={}
A.RS.prototype={}
A.RT.prototype={}
A.RU.prototype={}
A.RV.prototype={}
A.RW.prototype={}
A.RX.prototype={}
A.RY.prototype={}
A.RZ.prototype={}
A.S_.prototype={}
A.S0.prototype={}
A.S1.prototype={}
A.S2.prototype={}
A.S3.prototype={}
A.S4.prototype={}
A.S5.prototype={}
A.S6.prototype={}
A.S7.prototype={}
A.n_.prototype={
G(){return"_ForceState."+this.b}}
A.fK.prototype={
fU(a){var s=this
if(a.goy()<=1)s.X(B.ab)
else{s.tT(a)
if(s.db===B.kQ){s.db=B.fc
s.cx=new A.fa(a.gcP(),a.gbq(a))}}},
iD(a){var s,r=this
if(t._.b(a)||t.Y.b(a)){s=A.al6(a.gt1(),a.goy(),a.gID(a))
r.cx=new A.fa(a.gcP(),a.gbq(a))
r.cy=s
if(r.db===B.fc)if(s>0.4){r.db=B.Be
r.X(B.bC)}else if(a.gnH().gqU()>A.A_(a.gc4(a),r.b))r.X(B.ab)
if(s>0.4&&r.db===B.Bd)r.db=B.Be}r.Ar(a)},
fT(a){if(this.db===B.fc)this.db=B.Bd},
qR(a){if(this.db===B.fc){this.X(B.ab)
return}this.db=B.kQ},
hY(a){this.fI(a)
this.qR(a)}}
A.DO.prototype={
gv(a){return A.Y(this.a,23,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return b instanceof A.DO&&b.a==this.a},
j(a){return"DeviceGestureSettings(touchSlop: "+A.l(this.a)+")"}}
A.hy.prototype={
j(a){return"<optimized out>#"+A.bL(this)+"("+this.a.j(0)+")"}}
A.qI.prototype={}
A.y6.prototype={
es(a,b){return this.a.yg(b)}}
A.qm.prototype={
es(a,b){var s,r,q,p,o=new Float64Array(16),n=new A.bg(o)
n.cd(b)
s=this.a
r=s.a
q=s.b
s=o[0]
p=o[3]
o[0]=s+r*p
o[1]=o[1]+q*p
o[2]=o[2]+0*p
o[3]=p
p=o[4]
s=o[7]
o[4]=p+r*s
o[5]=o[5]+q*s
o[6]=o[6]+0*s
o[7]=s
s=o[8]
p=o[11]
o[8]=s+r*p
o[9]=o[9]+q*p
o[10]=o[10]+0*p
o[11]=p
p=o[12]
s=o[15]
o[12]=p+r*s
o[13]=o[13]+q*s
o[14]=o[14]+0*s
o[15]=s
return n}}
A.fM.prototype={
RR(){var s,r,q,p,o=this.c
if(o.length===0)return
s=this.b
r=B.b.gaa(s)
for(q=o.length,p=0;p<o.length;o.length===q||(0,A.R)(o),++p){r=o[p].es(0,r)
s.push(r)}B.b.V(o)},
C(a,b){this.RR()
b.b=B.b.gaa(this.b)
this.a.push(b)},
rZ(){var s=this.c
if(s.length!==0)s.pop()
else this.b.pop()},
j(a){var s=this.a
return"HitTestResult("+(s.length===0?"<empty path>":B.b.b7(s,", "))+")"}}
A.oC.prototype={}
A.ul.prototype={}
A.oB.prototype={}
A.el.prototype={
eS(a){var s,r=this
switch(a.gcn(a)){case 1:if(r.ok==null&&r.k4==null&&r.p1==null&&r.p3==null&&!0)return!1
break
case 2:s=!0
if(s)return!1
break
case 4:s=!0
if(s)return!1
break
default:return!1}return r.mu(a)},
wV(){var s,r=this
r.X(B.bC)
r.go=!0
s=r.ay
s.toString
r.AQ(s)
r.PV()},
Hl(a){var s,r=this
if(!a.gmA()){if(t.Y.b(a)){s=new A.h4(a.gc4(a),A.b_(20,null,!1,t.pa))
r.ad=s
s.l0(a.gfw(a),a.gcP())}if(t._.b(a)){s=r.ad
s.toString
s.l0(a.gfw(a),a.gcP())}}if(t.g.b(a)){if(r.go)r.PT(a)
else r.X(B.ab)
r.vx()}else if(t.AJ.b(a)){r.BI()
r.vx()}else if(t.Y.b(a)){r.id=new A.fa(a.gcP(),a.gbq(a))
r.k1=a.gcn(a)
r.PS(a)}else if(t._.b(a))if(a.gcn(a)!==r.k1){r.X(B.ab)
s=r.ay
s.toString
r.fI(s)}else if(r.go)r.PU(a)},
PS(a){this.id.toString
this.d.i(0,a.gbK()).toString
switch(this.k1){case 1:break
case 2:break
case 4:break}},
BI(){if(this.ax===B.dL)switch(this.k1){case 1:break
case 2:break
case 4:break}},
PV(){var s,r=this
switch(r.k1){case 1:if(r.ok!=null){s=r.id.a
r.ep("onLongPressStart",new A.a_R(r,new A.oC(s)))}s=r.k4
if(s!=null)r.ep("onLongPress",s)
break
case 2:break
case 4:break}},
PU(a){var s,r=this
a.gbq(a)
s=a.gcP()
a.gbq(a).ab(0,r.id.b)
a.gcP().ab(0,r.id.a)
switch(r.k1){case 1:if(r.p1!=null)r.ep("onLongPressMoveUpdate",new A.a_Q(r,new A.ul(s)))
break
case 2:break
case 4:break}},
PT(a){var s,r=this,q=r.ad.p5(),p=q==null?B.bT:new A.ia(q.a)
a.gbq(a)
s=a.gcP()
r.ad=null
switch(r.k1){case 1:if(r.p3!=null)r.ep("onLongPressEnd",new A.a_P(r,new A.oB(s,p)))
break
case 2:break
case 4:break}},
vx(){var s=this
s.go=!1
s.ad=s.k1=s.id=null},
X(a){var s=this
if(a===B.ab)if(s.go)s.vx()
else s.BI()
s.AP(a)},
fT(a){}}
A.a_R.prototype={
$0(){return this.a.ok.$1(this.b)},
$S:0}
A.a_Q.prototype={
$0(){return this.a.p1.$1(this.b)},
$S:0}
A.a_P.prototype={
$0(){return this.a.p3.$1(this.b)},
$S:0}
A.jx.prototype={
i(a,b){return this.c[b+this.a]},
l(a,b,c){this.c[b+this.a]=c},
a_(a,b){var s,r,q,p,o,n,m
for(s=this.b,r=this.c,q=this.a,p=b.c,o=b.a,n=0,m=0;m<s;++m)n+=r[m+q]*p[m+o]
return n}}
A.aiB.prototype={}
A.a1W.prototype={}
A.FG.prototype={
Ap(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this.a,a5=a4.length
if(a6>a5)return null
s=a6+1
r=new A.a1W(new Float64Array(s))
q=s*a5
p=new Float64Array(q)
for(o=this.c,n=0*a5,m=0;m<a5;++m){p[n+m]=o[m]
for(l=1;l<s;++l)p[l*a5+m]=p[(l-1)*a5+m]*a4[m]}q=new Float64Array(q)
n=new Float64Array(s*s)
for(k=0;k<s;++k){for(j=k*a5,m=0;m<a5;++m){i=j+m
q[i]=p[i]}for(l=0;l<k;++l){i=l*a5
h=new A.jx(j,a5,q).a_(0,new A.jx(i,a5,q))
for(m=0;m<a5;++m){g=j+m
q[g]=q[g]-h*q[i+m]}}i=new A.jx(j,a5,q)
f=Math.sqrt(i.a_(0,i))
if(f<1e-10)return null
e=1/f
for(m=0;m<a5;++m){i=j+m
q[i]=q[i]*e}for(i=k*s,l=0;l<s;++l){g=l<k?0:new A.jx(j,a5,q).a_(0,new A.jx(l*a5,a5,p))
n[i+l]=g}}p=new Float64Array(a5)
d=new A.jx(0,a5,p)
for(j=this.b,m=0;m<a5;++m)p[m]=j[m]*o[m]
for(l=s-1,p=r.a,c=l;c>=0;--c){p[c]=new A.jx(c*a5,a5,q).a_(0,d)
for(i=c*s,k=l;k>c;--k)p[c]=p[c]-n[i+k]*p[k]
p[c]=p[c]/n[i+c]}for(b=0,m=0;m<a5;++m)b+=j[m]
b/=a5
for(a=0,a0=0,m=0;m<a5;++m){q=j[m]
a1=q-p[0]
for(a2=1,l=1;l<s;++l){a2*=a4[m]
a1-=a2*p[l]}n=o[m]
n*=n
a+=n*a1*a1
a3=q-b
a0+=n*a3*a3}r.b=a0<=1e-10?1:1-a/a0
return r}}
A.q_.prototype={
G(){return"_DragState."+this.b}}
A.th.prototype={
eS(a){var s=this
if(s.fy==null)switch(a.gcn(a)){case 1:if(s.as==null&&s.at==null&&s.ax==null&&s.ay==null&&s.ch==null)return!1
break
default:return!1}else if(a.gcn(a)!==s.fy)return!1
return s.mu(a)},
Bi(a){var s,r=this
r.k1.l(0,a.gbK(),r.db.$1(a))
s=r.dx
if(s===B.bw){r.dx=B.Z1
s=a.gbq(a)
r.dy=new A.fa(a.gcP(),s)
r.fr=B.yi
r.id=0
r.fx=a.gfw(a)
r.go=a.gbg(a)
r.PQ()}else if(s===B.fb)r.X(B.bC)},
fU(a){var s=this
s.tT(a)
if(s.dx===B.bw)s.fy=a.gcn(a)
s.Bi(a)},
w6(a){var s=this
s.LQ(a)
s.pc(a.gbK(),a.gbg(a))
if(s.dx===B.bw)s.fy=1
s.Bi(a)},
iD(a){var s,r,q,p,o,n,m,l,k,j=this
if(!a.gmA())s=t.Y.b(a)||t._.b(a)||t.EL.b(a)||t.c.b(a)
else s=!1
if(s){s=j.k1.i(0,a.gbK())
s.toString
if(t.EL.b(a))s.l0(a.gfw(a),B.k)
else if(t.c.b(a))s.l0(a.gfw(a),a.gyP(a))
else s.l0(a.gfw(a),a.gcP())}s=t._.b(a)
if(s&&a.gcn(a)!==j.fy){j.uQ(a.gbK())
return}if(s||t.c.b(a)){r=s?a.gnH():t.c.a(a).gIv()
q=s?a.gI5():t.c.a(a).gI6()
if(s)p=a.gbq(a)
else{o=a.gbq(a)
t.c.a(a)
p=o.W(0,a.gyP(a))}n=s?a.gcP():a.gcP().W(0,t.c.a(a).gy3())
if(j.dx===B.fb){s=a.gfw(a)
j.BL(j.mQ(q),p,n,j.kI(q),s)}else{s=j.fr
s===$&&A.b()
j.fr=s.W(0,new A.fa(q,r))
j.fx=a.gfw(a)
j.go=a.gbg(a)
m=j.mQ(q)
if(a.gbg(a)==null)l=null
else{s=a.gbg(a)
s.toString
l=A.HC(s)}s=j.id
s===$&&A.b()
o=A.a1P(l,null,m,n).gcM()
k=j.kI(m)
j.id=s+o*J.ed(k==null?1:k)
s=a.gc4(a)
o=j.b
if(j.v3(s,o==null?null:o.a))j.X(B.bC)}}if(t.g.b(a)||t.AJ.b(a)||t.zv.b(a))j.uQ(a.gbK())},
fT(a){var s,r,q,p,o,n,m,l,k=this
k.k2.C(0,a)
if(k.dx!==B.fb){k.dx=B.fb
s=k.fr
s===$&&A.b()
r=k.fx
r.toString
q=k.go
switch(k.Q.a){case 1:p=k.dy
p===$&&A.b()
k.dy=p.W(0,s)
o=B.k
break
case 0:o=k.mQ(s.a)
break
default:o=null}k.fr=B.yi
k.go=k.fx=null
k.PX(r,a)
if(!J.f(o,B.k)&&k.ax!=null){n=q!=null?A.HC(q):null
s=k.dy
s===$&&A.b()
m=A.a1P(n,null,o,s.a.W(0,o))
l=k.dy.W(0,new A.fa(o,m))
k.BL(o,l.b,l.a,k.kI(o),r)}k.X(B.bC)}},
hY(a){this.uQ(a)},
qR(a){var s,r=this
switch(r.dx.a){case 0:break
case 1:r.X(B.ab)
s=r.ch
if(s!=null)r.ep("onCancel",s)
break
case 2:r.PR(a)
break}r.k1.V(0)
r.fy=null
r.dx=B.bw},
uQ(a){var s,r
this.fI(a)
if(!this.k2.u(0,a)){s=this.e
r=s.i(0,a)
if(r!=null){s.u(0,a)
r.a.mE(r.b,r.c,B.ab)}}},
PQ(){var s,r=this
if(r.as!=null){s=r.dy
s===$&&A.b()
r.ep("onDown",new A.WZ(r,new A.iE(s.b)))}},
PX(a,b){var s,r,q=this
if(q.at!=null){s=q.dy
s===$&&A.b()
r=q.d.i(0,b)
r.toString
q.ep("onStart",new A.X2(q,new A.hu(a,s.b,r)))}},
BL(a,b,c,d,e){if(this.ax!=null)this.ep("onUpdate",new A.X3(this,new A.hv(e,a,d,b)))},
PR(a){var s,r,q,p,o,n,m=this,l={}
if(m.ay==null)return
s=m.k1.i(0,a)
s.toString
l.a=null
r=s.p5()
if(r!=null&&m.xU(r,s.a)){s=r.a
q=m.cx
if(q==null)q=50
p=m.cy
if(p==null)p=8000
o=new A.ia(s).YT(q,p)
l.a=new A.fI(o,m.kI(o.a))
n=new A.X_(r,o)}else{l.a=new A.fI(B.bT,0)
n=new A.X0(r)}m.a1g("onEnd",new A.X1(l,m),n)},
m(){this.k1.V(0)
this.tU()}}
A.WZ.prototype={
$0(){return this.a.as.$1(this.b)},
$S:0}
A.X2.prototype={
$0(){return this.a.at.$1(this.b)},
$S:0}
A.X3.prototype={
$0(){return this.a.ax.$1(this.b)},
$S:0}
A.X_.prototype={
$0(){return this.a.j(0)+"; fling at "+this.b.j(0)+"."},
$S:4}
A.X0.prototype={
$0(){var s=this.a
if(s==null)return"Could not estimate velocity."
return s.j(0)+"; judged to not be a fling."},
$S:4}
A.X1.prototype={
$0(){return this.b.ay.$1(this.a.a)},
$S:0}
A.h5.prototype={
xU(a,b){var s,r=this.cx
if(r==null)r=50
s=this.CW
if(s==null)s=A.A_(b,this.b)
return Math.abs(a.a.b)>r&&Math.abs(a.d.b)>s},
v3(a,b){var s=this.id
s===$&&A.b()
return Math.abs(s)>A.A_(a,this.b)},
mQ(a){return new A.y(0,a.b)},
kI(a){return a.b}}
A.fN.prototype={
xU(a,b){var s,r=this.cx
if(r==null)r=50
s=this.CW
if(s==null)s=A.A_(b,this.b)
return Math.abs(a.a.a)>r&&Math.abs(a.d.a)>s},
v3(a,b){var s=this.id
s===$&&A.b()
return Math.abs(s)>A.A_(a,this.b)},
mQ(a){return new A.y(a.a,0)},
kI(a){return a.a}}
A.eL.prototype={
xU(a,b){var s,r=this.cx
if(r==null)r=50
s=this.CW
if(s==null)s=A.A_(b,this.b)
return a.a.gqU()>r*r&&a.d.gqU()>s*s},
v3(a,b){var s=this.id
s===$&&A.b()
return Math.abs(s)>A.azU(a,this.b)},
mQ(a){return a},
kI(a){return null}}
A.M6.prototype={
V5(){this.a=!0}}
A.qG.prototype={
fI(a){if(this.r){this.r=!1
$.eg.k4$.IV(this.b,a)}},
I_(a,b){return a.gbq(a).ab(0,this.d).gcM()<=b}}
A.fH.prototype={
eS(a){if(this.x==null)switch(a.gcn(a)){case 1:if(this.f==null&&!0)return!1
break
default:return!1}return this.mu(a)},
fU(a){var s=this,r=s.x
if(r!=null)if(!r.I_(a,100))return
else{r=s.x
if(!r.f.a||a.gcn(a)!==r.e){s.kN()
return s.EZ(a)}}s.EZ(a)},
EZ(a){var s,r,q,p,o,n,m=this
m.EI()
s=$.eg.ok$.FB(0,a.gbK(),m)
r=a.gbK()
q=a.gbq(a)
p=a.gcn(a)
o=new A.M6()
A.c2(B.EC,o.gV4())
n=new A.qG(r,s,q,p,o)
m.y.l(0,a.gbK(),n)
o=a.gbg(a)
if(!n.r){n.r=!0
$.eg.k4$.FE(r,m.gpP(),o)}},
UC(a){var s,r=this,q=r.y,p=q.i(0,a.gbK())
p.toString
if(t.g.b(a)){s=r.x
if(s==null){if(r.w==null)r.w=A.c2(B.c3,r.gUD())
s=p.b
$.eg.ok$.a0X(s)
p.fI(r.gpP())
q.u(0,s)
r.BQ()
r.x=p}else{s=s.c
s.a.mE(s.b,s.c,B.bC)
s=p.c
s.a.mE(s.b,s.c,B.bC)
p.fI(r.gpP())
q.u(0,p.b)
q=r.f
if(q!=null)r.ep("onDoubleTap",q)
r.kN()}}else if(t._.b(a)){if(!p.I_(a,18))r.n1(p)}else if(t.AJ.b(a))r.n1(p)},
fT(a){},
hY(a){var s,r=this,q=r.y.i(0,a)
if(q==null){s=r.x
s=s!=null&&s.b===a}else s=!1
if(s)q=r.x
if(q!=null)r.n1(q)},
n1(a){var s,r=this,q=r.y
q.u(0,a.b)
s=a.c
s.a.mE(s.b,s.c,B.ab)
a.fI(r.gpP())
s=r.x
if(s!=null)if(a===s)r.kN()
else{r.BH()
if(q.a===0)r.kN()}},
m(){this.kN()
this.AK()},
kN(){var s,r=this
r.EI()
if(r.x!=null){if(r.y.a!==0)r.BH()
s=r.x
s.toString
r.x=null
r.n1(s)
$.eg.ok$.a2O(0,s.b)}r.BQ()},
BQ(){var s=this.y
s=s.gaX(s)
B.b.Y(A.az(s,!0,A.n(s).h("p.E")),this.gVQ())},
EI(){var s=this.w
if(s!=null){s.am(0)
this.w=null}},
BH(){}}
A.a1R.prototype={
FE(a,b,c){J.cP(this.a.br(0,a,new A.a1T()),b,c)},
IV(a,b){var s,r=this.a,q=r.i(0,a)
q.toString
s=J.bQ(q)
s.u(q,b)
if(s.gO(q))r.u(0,a)},
Qw(a,b,c){var s,r,q,p
try{b.$1(a.aI(c))}catch(q){s=A.aj(q)
r=A.aA(q)
p=A.bj("while routing a pointer event")
A.dI(new A.bz(s,r,"gesture library",p,null,!1))}},
Ja(a){var s=this,r=s.a.i(0,a.gbK()),q=s.b,p=t.yd,o=t.rY,n=A.oz(q,p,o)
if(r!=null)s.C9(a,r,A.oz(r,p,o))
s.C9(a,q,n)},
C9(a,b,c){c.Y(0,new A.a1S(this,b,a))}}
A.a1T.prototype={
$0(){return A.u(t.yd,t.rY)},
$S:154}
A.a1S.prototype={
$2(a,b){if(J.dE(this.b,a))this.a.Qw(this.c,a,b)},
$S:155}
A.a1U.prototype={
oC(a,b,c){if(this.a!=null)return
this.b=b
this.a=c},
X(a){var s,r,q,p,o=this,n=o.a
if(n==null)return
try{q=o.b
q.toString
n.$1(q)}catch(p){s=A.aj(p)
r=A.aA(p)
n=A.bj("while resolving a PointerSignalEvent")
A.dI(new A.bz(s,r,"gesture library",n,null,!1))}o.b=o.a=null}}
A.Em.prototype={
G(){return"DragStartBehavior."+this.b}}
A.cg.prototype={
w6(a){},
Y4(a){var s=this
s.d.l(0,a.gbK(),a.gc4(a))
if(s.eS(a))s.fU(a)
else s.o8(a)},
fU(a){},
o8(a){},
eS(a){var s=this.c
return s==null||s.B(0,a.gc4(a))},
a1p(a){var s=this.c
return s==null||s.B(0,a.gc4(a))},
m(){},
HO(a,b,c){var s,r,q,p,o=null
try{o=b.$0()}catch(q){s=A.aj(q)
r=A.aA(q)
p=A.bj("while handling a gesture")
A.dI(new A.bz(s,r,"gesture",p,null,!1))}return o},
ep(a,b){return this.HO(a,b,null,t.z)},
a1g(a,b,c){return this.HO(a,b,c,t.z)}}
A.v9.prototype={
fU(a){this.pc(a.gbK(),a.gbg(a))},
o8(a){this.X(B.ab)},
fT(a){},
hY(a){},
X(a){var s,r,q=this.e,p=A.az(q.gaX(q),!0,t.o)
q.V(0)
for(q=p.length,s=0;s<q;++s){r=p[s]
r.a.mE(r.b,r.c,a)}},
m(){var s,r,q,p,o,n,m,l,k=this
k.X(B.ab)
for(s=k.f,r=new A.kG(s,s.mL()),q=A.n(r).c;r.q();){p=r.d
if(p==null)p=q.a(p)
o=$.eg.k4$
n=k.go6()
o=o.a
m=o.i(0,p)
m.toString
l=J.bQ(m)
l.u(m,n)
if(l.gO(m))o.u(0,p)}s.V(0)
k.AK()},
Pg(a){return $.eg.ok$.FB(0,a,this)},
pc(a,b){var s=this
$.eg.k4$.FE(a,s.go6(),b)
s.f.C(0,a)
s.e.l(0,a,s.Pg(a))},
fI(a){var s=this.f
if(s.B(0,a)){$.eg.k4$.IV(a,this.go6())
s.u(0,a)
if(s.a===0)this.qR(a)}},
Ar(a){if(t.g.b(a)||t.AJ.b(a)||t.zv.b(a))this.fI(a.gbK())}}
A.of.prototype={
G(){return"GestureRecognizerState."+this.b}}
A.oR.prototype={
fU(a){var s=this
s.tT(a)
if(s.ax===B.bg){s.ax=B.dL
s.ay=a.gbK()
s.ch=new A.fa(a.gcP(),a.gbq(a))
s.cx=A.c2(s.Q,new A.a1Z(s,a))}},
o8(a){if(!this.CW)this.Mu(a)},
iD(a){var s,r,q,p=this
if(p.ax===B.dL&&a.gbK()===p.ay){if(!p.CW)s=p.Cv(a)>18
else s=!1
if(p.CW){r=p.at
q=r!=null&&p.Cv(a)>r}else q=!1
if(t._.b(a))r=s||q
else r=!1
if(r){p.X(B.ab)
r=p.ay
r.toString
p.fI(r)}else p.Hl(a)}p.Ar(a)},
wV(){},
fT(a){if(a===this.ay){this.q7()
this.CW=!0}},
hY(a){var s=this
if(a===s.ay&&s.ax===B.dL){s.q7()
s.ax=B.F2}},
qR(a){var s=this
s.q7()
s.ax=B.bg
s.ch=null
s.CW=!1},
m(){this.q7()
this.tU()},
q7(){var s=this.cx
if(s!=null){s.am(0)
this.cx=null}},
Cv(a){return a.gbq(a).ab(0,this.ch.b).gcM()}}
A.a1Z.prototype={
$0(){this.a.wV()
return null},
$S:0}
A.fa.prototype={
W(a,b){return new A.fa(this.a.W(0,b.a),this.b.W(0,b.b))},
ab(a,b){return new A.fa(this.a.ab(0,b.a),this.b.ab(0,b.b))},
j(a){return"OffsetPair(local: "+this.a.j(0)+", global: "+this.b.j(0)+")"}}
A.N4.prototype={}
A.pz.prototype={}
A.pA.prototype={}
A.AA.prototype={
fU(a){var s=this
if(s.ax===B.bg){if(s.k1!=null&&s.k2!=null)s.n5()
s.k1=a}if(s.k1!=null)s.MA(a)},
pc(a,b){this.Mv(a,b)},
Hl(a){var s,r,q=this
if(t.g.b(a)){q.k2=a
q.BK()}else if(t.AJ.b(a)){q.X(B.ab)
if(q.go){s=q.k1
s.toString
q.rf(a,s,"")}q.n5()}else{s=a.gcn(a)
r=q.k1
if(s!==r.gcn(r)){q.X(B.ab)
s=q.ay
s.toString
q.fI(s)}}},
X(a){var s,r=this
if(r.id&&a===B.ab){s=r.k1
s.toString
r.rf(null,s,"spontaneous")
r.n5()}r.AP(a)},
wV(){this.EO()},
fT(a){var s=this
s.AQ(a)
if(a===s.ay){s.EO()
s.id=!0
s.BK()}},
hY(a){var s,r=this
r.MB(a)
if(a===r.ay){if(r.go){s=r.k1
s.toString
r.rf(null,s,"forced")}r.n5()}},
EO(){var s,r=this
if(r.go)return
s=r.k1
s.toString
r.Hn(s)
r.go=!0},
BK(){var s,r,q=this
if(!q.id||q.k2==null)return
s=q.k1
s.toString
r=q.k2
r.toString
q.Ho(s,r)
q.n5()},
n5(){var s=this
s.id=s.go=!1
s.k1=s.k2=null}}
A.es.prototype={
eS(a){var s,r=this
switch(a.gcn(a)){case 1:if(r.y1==null&&r.ao==null&&r.y2==null&&r.ar==null)return!1
break
case 2:s=!0
if(s)return!1
break
case 4:return!1
break
default:return!1}return r.mu(a)},
Hn(a){var s=this,r=a.gbq(a),q=a.gcP()
s.d.i(0,a.gbK()).toString
switch(a.gcn(a)){case 1:if(s.y1!=null)s.ep("onTapDown",new A.a7p(s,new A.pz(r,q)))
break
case 2:break
case 4:break}},
Ho(a,b){var s,r=this
b.gc4(b)
b.gbq(b)
b.gcP()
switch(a.gcn(a)){case 1:if(r.y2!=null)r.ep("onTapUp",new A.a7q(r,new A.pA()))
s=r.ao
if(s!=null)r.ep("onTap",s)
break
case 2:break
case 4:break}},
rf(a,b,c){var s,r=c===""?c:c+" "
switch(b.gcn(b)){case 1:s=this.ar
if(s!=null)this.ep(r+"onTapCancel",s)
break
case 2:break
case 4:break}}}
A.a7p.prototype={
$0(){return this.a.y1.$1(this.b)},
$S:0}
A.a7q.prototype={
$0(){return this.a.y2.$1(this.b)},
$S:0}
A.ia.prototype={
ab(a,b){return new A.ia(this.a.ab(0,b.a))},
W(a,b){return new A.ia(this.a.W(0,b.a))},
YT(a,b){var s=this.a,r=s.gqU()
if(r>b*b)return new A.ia(s.dI(0,s.gcM()).a_(0,b))
if(r<a*a)return new A.ia(s.dI(0,s.gcM()).a_(0,a))
return this},
k(a,b){if(b==null)return!1
return b instanceof A.ia&&b.a.k(0,this.a)},
gv(a){var s=this.a
return A.Y(s.a,s.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this.a
return"Velocity("+B.d.R(s.a,1)+", "+B.d.R(s.b,1)+")"}}
A.mP.prototype={
j(a){var s=this,r=s.a
return"VelocityEstimate("+B.d.R(r.a,1)+", "+B.d.R(r.b,1)+"; offset: "+s.d.j(0)+", duration: "+s.c.j(0)+", confidence: "+B.d.R(s.b,1)+")"}}
A.ys.prototype={
j(a){return"_PointAtTime("+this.b.j(0)+" at "+this.a.j(0)+")"}}
A.h4.prototype={
l0(a,b){var s=++this.c
if(s===20)s=this.c=0
this.b[s]=new A.ys(a,b)},
p5(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=t.zp,e=A.a([],f),d=A.a([],f),c=A.a([],f),b=A.a([],f),a=this.c
f=this.b
s=f[a]
if(s==null)return null
r=s.a.a
q=s
p=q
o=0
do{n=f[a]
if(n==null)break
m=n.a.a
l=(r-m)/1000
if(l>100||Math.abs(m-p.a.a)/1000>40)break
k=n.b
e.push(k.a)
d.push(k.b)
c.push(1)
b.push(-l)
a=(a===0?20:a)-1;++o
if(o<20){q=n
p=q
continue}else{q=n
break}}while(!0)
if(o>=3){j=new A.FG(b,e,c).Ap(2)
if(j!=null){i=new A.FG(b,d,c).Ap(2)
if(i!=null){f=j.a[1]
m=i.a[1]
h=j.b
h===$&&A.b()
g=i.b
g===$&&A.b()
return new A.mP(new A.y(f*1000,m*1000),h*g,new A.aK(r-q.a.a),s.b.ab(0,q.b))}}}return new A.mP(B.k,1,new A.aK(r-q.a.a),s.b.ab(0,q.b))}}
A.lN.prototype={
l0(a,b){var s=(this.c+1)%20
this.c=s
this.d[s]=new A.ys(a,b)},
kP(a){var s,r,q=this.c+a,p=B.f.cc(q,20),o=B.f.cc(q-1,20)
q=this.d
s=q[p]
r=q[o]
if(s==null||r==null)return B.k
q=s.a.a-r.a.a
return q>0?s.b.ab(0,r.b).a_(0,1000).dI(0,q/1000):B.k},
p5(){var s,r,q=this,p=q.kP(-2).a_(0,0.6).W(0,q.kP(-1).a_(0,0.35)).W(0,q.kP(0).a_(0,0.05)),o=q.d,n=q.c,m=o[n]
for(s=null,r=1;r<=20;++r){s=o[B.f.cc(n+r,20)]
if(s!=null)break}if(s==null||m==null)return B.B5
else return new A.mP(p,1,new A.aK(m.a.a-s.a.a),m.b.ab(0,s.b))}}
A.oD.prototype={
p5(){var s,r,q=this,p=q.kP(-2).a_(0,0.15).W(0,q.kP(-1).a_(0,0.65)).W(0,q.kP(0).a_(0,0.2)),o=q.d,n=q.c,m=o[n]
for(s=null,r=1;r<=20;++r){s=o[B.f.cc(n+r,20)]
if(s!=null)break}if(s==null||m==null)return B.B5
else return new A.mP(p,1,new A.aK(m.a.a-s.a.a),m.b.ab(0,s.b))}}
A.wU.prototype={
G(){return"ThemeMode."+this.b}}
A.m0.prototype={
ag(){return new A.y3(B.m)}}
A.a_X.prototype={
$2(a,b){return new A.oF(a,b)},
$S:156}
A.a00.prototype={
j4(a){return A.aG(a).r},
qu(a,b,c){switch(A.bf(c.a)){case B.ak:return b
case B.bV:switch(A.aG(a).r.a){case 3:case 4:case 5:return new A.JI(b,c.b,null)
case 0:case 1:case 2:return b}break}},
qs(a,b,c){var s,r,q,p=null,o=A.bd("indicator")
A.aG(a)
A.aG(a)
o.sbU(B.l4)
switch(A.aG(a).r.a){case 2:case 3:case 4:case 5:s=1
break
case 0:s=2
break
case 1:s=3
break
default:s=p
break}if(s)c$0:for(r=o.a;!0;)switch(s){case 1:return b
case 2:q=o.b
if(q===o)A.U(A.fS(r))
switch(q){case B.Bp:s=1
break
case B.l4:s=2
break
default:s=p
break}if(s)c$1:for(;!0;)switch(s){case 1:return new A.pv(c.a,c.c,b,p)
case 2:s=3
continue c$0}break c$0
case 3:return new A.og(c.a,A.aG(a).ax.f,b,p)}}}
A.y3.prototype={
aA(){this.aM()
this.d=A.auk()},
gUi(){var s=A.a([],t.eu)
B.b.I(s,this.a.k1)
s.push(B.D9)
s.push(B.D1)
return s},
U0(a,b){return new A.EN(B.Fb,b,B.Z3,null)},
Up(a,b){var s,r,q,p,o,n,m=this,l=null,k=m.a.fr,j=A.di(a),i=j==null?l:j.d
if(i==null)i=B.a1
if(k!==B.Y3)s=k===B.AX&&i===B.a9
else s=!0
j=A.di(a)
j=j==null?l:j.Q
r=j===!0
if(s)if(r)m.a.toString
if(s){m.a.toString
j=!0}else j=!1
if(j)q=m.a.db
else{if(r)m.a.toString
q=l}if(q==null)q=m.a.cy
j=q.em
p=j.b
if(p==null){o=q.ax.b
p=A.b3(102,o.gn(o)>>>16&255,o.gn(o)>>>8&255,o.gn(o)&255)}n=j.a
if(n==null)n=q.ax.b
j=m.a.d
return new A.vR(A.akN(new A.qY(q,new A.hl(new A.abl(m,b),l),B.aP,B.aG,l,l),n,p),j)},
PF(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.a,d=e.go,c=e.cy
d=c.fr
s=d
if(s==null)s=B.eL
d=e.c
c=e.z
c.toString
r=e.e
q=e.f
q.toString
p=e.r
o=e.w
n=e.x
m=e.y
l=e.CW
k=e.cx
e=e.id
j=g.gUi()
i=g.a
h=i.k3
return new A.x8(d,o,n,new A.abk(),f,f,f,f,f,r,q,m,p,c,g.gUo(),l,k,B.V5,s,e,j,i.k2,h,i.k4,!1,!1,!1,!1,g.gU_(),!0,i.R8,f,f,!1,new A.k_(g,t.l9))},
K(a){var s,r=null,q=A.ES(!1,!1,this.PF(a),r,r,r,r,!0,r,r,new A.abm(),r,r,r)
this.a.toString
s=this.d
s===$&&A.b()
return new A.vW(B.CA,new A.lJ(s,q,r),r)}}
A.abl.prototype={
$1(a){return this.a.a.ch.$2(a,this.b)},
$S:14}
A.abk.prototype={
$1$2(a,b,c){var s=null,r=A.a([],t.F8),q=$.a9,p=A.IC(B.bZ),o=A.a([],t.tD),n=A.jk(s),m=$.a9
return new A.m1(b,!1,!0,r,new A.bw(s,c.h("bw<n4<0>>")),new A.bw(s,t.T),new A.a1o(),s,0,new A.aY(new A.a7(q,c.h("a7<0?>")),c.h("aY<0?>")),p,o,a,n,new A.aY(new A.a7(m,c.h("a7<0?>")),c.h("aY<0?>")),c.h("m1<0>"))},
$2(a,b){return this.$1$2(a,b,t.z)},
$S:159}
A.abm.prototype={
$2(a,b){if(!(b instanceof A.hU)||!b.c.gol().k(0,B.cZ))return B.cS
return A.awN()?B.fY:B.cS},
$S:97}
A.adr.prototype={
zI(a){return a.ta(this.b)},
tq(a){return new A.a5(a.b,this.b)},
zT(a,b){return new A.y(0,a.b-b.b)},
ml(a){return this.b!==a.b}}
A.OW.prototype={}
A.r7.prototype={
RA(a){var s=new A.SZ(this,a).$0()
return s},
ag(){return new A.xe(B.m)},
iO(a){return A.A6().$1(a)}}
A.SZ.prototype={
$0(){switch(this.b.r.a){case 0:case 1:case 3:case 5:return!1
case 2:case 4:return!0}},
$S:29}
A.xe.prototype={
b4(){var s,r=this
r.cl()
s=r.d
if(s!=null)s.H(0,r.gua())
s=r.c.a2(t.dT)
s=s==null?null:s.f
r.d=s
if(s!=null){s=s.d
s.TY(s.c,new A.kK(r.gua()),!1)}},
m(){var s=this,r=s.d
if(r!=null){r.H(0,s.gua())
s.d=null}s.aJ()},
Sx(){var s,r,q,p=this.c
p.toString
p=A.vT(p)
s=p.e
if(s.gbi()!=null){r=p.x
q=r.y
r=q==null?A.n(r).h("bX.T").a(q):q}else r=!1
if(r)s.gbi().co(0)
p=p.d.gbi()
if(p!=null)p.ou(0)},
Sz(){var s,r,q,p=this.c
p.toString
p=A.vT(p)
s=p.d
if(s.gbi()!=null){r=p.w
q=r.y
r=q==null?A.n(r).h("bX.T").a(q):q}else r=!1
if(r)s.gbi().co(0)
p=p.e.gbi()
if(p!=null)p.ou(0)},
Po(a){var s,r,q,p=this
if(a instanceof A.fh&&p.a.iO(a)){s=p.e
r=a.a
switch(r.e.a){case 0:q=p.e=Math.max(r.geq()-r.gc5(),0)>0
break
case 2:q=p.e=Math.max(r.gc5()-r.ger(),0)>0
break
case 1:case 3:q=p.e=!1
break
default:q=s}if(q!==s)p.av(new A.a8R())}},
X7(a,b){var s=null,r=a===B.a9?B.Ur:B.Us
return new A.i1(s,s,s,s,b,r.f,r.r,r.w)},
K(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=null,a7=A.aG(b2),a8=A.aG(b2).R8,a9=new A.a8Q(b2,a6,a6,a6,4,a6,B.q,a6,a6,a6,a6,a6,a6,16,56,a6,a6,a6,a6),b0=b2.jI(t.yp),b1=A.a0w(b2,t.X)
b2.a2(t.pL)
s=A.aE(t.BD)
r=a5.e
if(r)s.C(0,B.yb)
r=b0==null
if(r)q=a6
else{b0.a.toString
q=!1}if(r)b0=a6
else{b0.a.toString
b0=!1}p=b0===!0
b0=b1==null
if(b0)r=a6
else if(!b1.grk()){r=b1.jE$
r=r!=null&&r.length!==0}else r=!0
o=r===!0
r=a5.a
r.toString
n=a8.at
if(n==null)n=56
m=a9.gcw(a9)
l=t.jH
r=A.kb(r.ax,s,l)
if(r==null)r=A.kb(a8.b,s,l)
k=r==null?A.kb(m,s,t.iO):r
a5.a.toString
j=a8.c
i=j==null?a9.gdv():j
a5.a.toString
h=a8.d
if(h==null){r=a9.d
r.toString
h=r}if(s.B(0,B.yb)){a5.a.toString
s=a8.e
if(s==null)s=a9.e
g=s==null?h:s}else g=h
a5.a.toString
s=a8.x
f=s==null?a9.goc().h0(i):s
a5.a.toString
r=a8.y
if(r==null)r=a6
s=r==null?s:r
if(s==null){s=a9.y
s=s==null?a6:s.h0(j)
e=s}else e=s
if(e==null)e=f
a5.a.toString
s=a8.ax
if(s==null){s=a9.goL()
s=s==null?a6:s.h0(i)
d=s}else d=s
a5.a.toString
s=a8.ay
if(s==null){s=a9.goJ()
s=s==null?a6:s.h0(i)
c=s}else c=s
a5.a.toString
if(q===!0){b0=f.a
if(b0==null)b0=24
s=A.FO(b2,B.dw,t.z4)
s.toString
b=A.ahB(a6,B.mA,b0,a5.gSw(),s.gP())}else{if(!(!p&&o)){if(b0)b0=a6
else b0=b1.grk()||b1.xl$>0
b0=b0===!0}else b0=!0
if(b0)b=B.BA
else b=a6}if(b!=null){a5.a.toString
b=new A.fD(A.nF(a6,56),b,a6)}a=a5.a.e
switch(a7.r.a){case 0:case 1:case 3:case 5:a0=!0
break
case 2:case 4:a0=a6
break
default:a0=a6}a=A.dy(a6,new A.Lq(a,a6),!1,a6,!1,a6,a6,!0,a6,a6,a0,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6)
c.toString
a=A.t3(a,a6,B.bd,!1,c,a6,a6,B.aL)
a1=b2.a2(t.l).f
a=new A.f5(a1.wA(Math.min(a1.c,1.34)),a,a6)
a5.a.toString
if(p){b0=f.a
if(b0==null)b0=24
s=A.FO(b2,B.dw,t.z4)
s.toString
a2=A.ahB(a6,B.mA,b0,a5.gSy(),s.gP())}else a2=a6
if(a2!=null)a2=A.tT(a2,e)
b0=a5.a.RA(a7)
a5.a.toString
s=a8.as
if(s==null)s=16
d.toString
a3=A.akB(new A.t_(new A.adr(n),A.tT(A.t3(new A.HY(b,a,a2,b0,s,a6),a6,B.cy,!0,d,a6,a6,B.aL),f),a6),B.J)
a3=A.avX(!1,a3,!0)
b0=A.KB(k)
b0=a5.X7(b0,a6)
a4=b0
b0=a5.a.Q
s=a8.r
if(s==null)s=a9.r
r=a8.w
if(r==null)r=a9.w
return A.dy(a6,new A.r4(a4,A.FR(B.aG,A.dy(a6,new A.l6(B.l3,a6,a6,a3,a6),!1,a6,!0,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),B.l,k,g,a6,b0,r,s,a6,B.ck),a6,t.qC),!0,a6,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6)}}
A.a8R.prototype={
$0(){},
$S:0}
A.Lq.prototype={
aD(a){var s=a.a2(t.I)
s.toString
s=new A.P7(B.Q,s.w,null,A.au())
s.aE()
s.saO(null)
return s},
aF(a,b){var s=a.a2(t.I)
s.toString
b.sbB(s.w)}}
A.P7.prototype={
bZ(a){var s=a.Gj(1/0)
return a.bl(this.t$.fA(s))},
bx(){var s,r=this,q=t.k,p=q.a(A.w.prototype.gZ.call(r)).Gj(1/0)
r.t$.ci(p,!0)
q=q.a(A.w.prototype.gZ.call(r))
s=r.t$.k3
s.toString
r.k3=q.bl(s)
r.wb()}}
A.a8Q.prototype={
gq9(){var s,r=this,q=r.cy
if(q===$){s=A.aG(r.cx)
r.cy!==$&&A.bF()
r.cy=s
q=s}return q},
gkx(){var s,r=this,q=r.db
if(q===$){s=r.gq9()
r.db!==$&&A.bF()
q=r.db=s.ax}return q},
gcw(a){return this.gkx().a===B.a9?this.gkx().cy:this.gkx().b},
gdv(){return this.gkx().a===B.a9?this.gkx().db:this.gkx().c},
goc(){return this.gq9().ok},
goL(){return this.gq9().p3.z},
goJ(){return this.gq9().p3.r}}
A.nu.prototype={
gv(a){var s=this
return A.Y(s.a,s.gcw(s),s.gdv(),s.d,s.e,s.gfF(s),s.gf3(),s.w,s.goc(),s.gw5(),s.z,s.Q,s.as,s.at,s.goL(),s.goJ(),s.ch,s.CW,B.a,B.a)},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.S(b)!==A.A(r))return!1
if(b instanceof A.nu)if(J.f(b.gcw(b),r.gcw(r)))if(J.f(b.gdv(),r.gdv()))if(b.d==r.d)if(b.e==r.e)if(J.f(b.gfF(b),r.gfF(r)))if(J.f(b.gf3(),r.gf3()))if(J.f(b.w,r.w))if(J.f(b.goc(),r.goc()))if(J.f(b.gw5(),r.gw5()))if(J.f(b.z,r.z))if(b.as==r.as)if(b.at==r.at)if(J.f(b.goL(),r.goL()))if(J.f(b.goJ(),r.goJ()))s=!0
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gcw(a){return this.b},
gdv(){return this.c},
gfF(a){return this.f},
gf3(){return this.r},
goc(){return this.x},
gw5(){return this.y},
goL(){return this.ax},
goJ(){return this.ay}}
A.Lp.prototype={}
A.uC.prototype={
hw(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.a
f.toString
s=g.b
s.toString
r=s.ab(0,f)
q=Math.abs(r.a)
p=Math.abs(r.b)
o=r.gcM()
n=s.a
m=f.b
l=new A.y(n,m)
k=new A.a_Z(g,o)
if(q>2&&p>2){j=o*o
i=f.a
h=s.b
if(q<p){f=j/l.ab(0,f).gcM()/2
g.e=f
g.d=new A.y(n+f*J.ed(i-n),h)
if(i<n){g.f=k.$0()*J.ed(m-h)
g.r=0}else{g.f=3.141592653589793+k.$0()*J.ed(h-m)
g.r=3.141592653589793}}else{g.e=j/l.ab(0,s).gcM()/2
f=J.ed(h-m)
s=g.e
s.toString
g.d=new A.y(i,m+f*s)
if(m<h){g.f=-1.5707963267948966
g.r=-1.5707963267948966+k.$0()*J.ed(n-i)}else{g.f=1.5707963267948966
g.r=1.5707963267948966+k.$0()*J.ed(i-n)}}}else g.r=g.f=null
g.c=!1},
gba(){var s=this
if(s.a==null||s.b==null)return null
if(s.c)s.hw()
return s.d},
goB(){var s=this
if(s.a==null||s.b==null)return null
if(s.c)s.hw()
return s.e},
gYs(){var s=this
if(s.a==null||s.b==null)return null
if(s.c)s.hw()
return s.f},
ga_t(){var s=this
if(s.a==null||s.b==null)return null
if(s.c)s.hw()
return s.f},
swo(a){if(!J.f(a,this.a)){this.a=a
this.c=!0}},
slp(a,b){if(!J.f(b,this.b)){this.b=b
this.c=!0}},
dg(a){var s,r,q,p,o=this
if(o.c)o.hw()
if(a===0){s=o.a
s.toString
return s}if(a===1){s=o.b
s.toString
return s}s=o.f
if(s==null||o.r==null){s=A.a1g(o.a,o.b,a)
s.toString
return s}s=A.Q(s,o.r,a)
s.toString
r=Math.cos(s)
q=o.e
q.toString
s=Math.sin(s)
p=o.e
p.toString
return o.d.W(0,new A.y(r*q,s*p))},
j(a){var s=this
return"MaterialPointArcTween("+A.l(s.a)+" \u2192 "+A.l(s.b)+"; center="+A.l(s.gba())+", radius="+A.l(s.goB())+", beginAngle="+A.l(s.gYs())+", endAngle="+A.l(s.ga_t())+")"}}
A.a_Z.prototype={
$0(){var s=this.a.e
s.toString
return 2*Math.asin(this.b/(2*s))},
$S:162}
A.mX.prototype={
G(){return"_CornerId."+this.b}}
A.jo.prototype={}
A.oF.prototype={
hw(){var s,r,q=this,p=A.azb(B.N8,new A.a0_(q,q.b.gba().ab(0,q.a.gba()))),o=q.a
o.toString
s=p.a
o=q.kA(o,s)
r=q.b
r.toString
q.f=new A.uC(o,q.kA(r,s))
s=q.a
s.toString
r=p.b
s=q.kA(s,r)
o=q.b
o.toString
q.r=new A.uC(s,q.kA(o,r))
q.e=!1},
kA(a,b){switch(b.a){case 0:return new A.y(a.a,a.b)
case 1:return new A.y(a.c,a.b)
case 2:return new A.y(a.a,a.d)
case 3:return new A.y(a.c,a.d)}},
gYt(){var s,r=this
if(r.a==null)return null
if(r.e)r.hw()
s=r.f
s===$&&A.b()
return s},
ga_u(){var s,r=this
if(r.b==null)return null
if(r.e)r.hw()
s=r.r
s===$&&A.b()
return s},
swo(a){if(!J.f(a,this.a)){this.a=a
this.e=!0}},
slp(a,b){if(!J.f(b,this.b)){this.b=b
this.e=!0}},
dg(a){var s,r,q=this
if(q.e)q.hw()
if(a===0){s=q.a
s.toString
return s}if(a===1){s=q.b
s.toString
return s}s=q.f
s===$&&A.b()
s=s.dg(a)
r=q.r
r===$&&A.b()
return A.am4(s,r.dg(a))},
j(a){var s=this
return"MaterialRectArcTween("+A.l(s.a)+" \u2192 "+A.l(s.b)+"; beginArc="+A.l(s.gYt())+", endArc="+A.l(s.ga_u())+")"}}
A.a0_.prototype={
$1(a){var s,r,q,p=this.a,o=this.b,n=p.a
n.toString
n=p.kA(n,a.b)
s=p.a
s.toString
r=n.ab(0,p.kA(s,a.a))
q=r.gcM()
return o.a*r.a/q+o.b*r.b/q},
$S:163}
A.Av.prototype={
K(a){return new A.oi(A.arR(A.aG(a).r),null)}}
A.Au.prototype={
K(a){var s=A.FO(a,B.dw,t.z4)
s.toString
return A.ahB(null,B.Bz,null,new A.Th(this,a),s.ga5())}}
A.Th.prototype={
$0(){A.auR(this.b)},
$S:0}
A.ra.prototype={
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,s.f,s.r,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.ra&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&b.c==s.c&&b.d==s.d&&J.f(b.e,s.e)&&J.f(b.f,s.f)&&J.f(b.r,s.r)}}
A.Lx.prototype={}
A.us.prototype={
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.us&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&J.f(b.c,s.c)&&J.f(b.d,s.d)&&J.f(b.e,s.e)&&b.f==s.f&&J.f(b.r,s.r)&&J.f(b.w,s.w)}}
A.NG.prototype={}
A.rg.prototype={
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,s.f,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.rg&&J.f(b.a,s.a)&&b.b==s.b&&b.d==s.d&&J.f(b.e,s.e)&&J.f(b.f,s.f)}}
A.LB.prototype={}
A.rh.prototype={
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.S(b)!==A.A(r))return!1
if(b instanceof A.rh)if(J.f(b.a,r.a))if(b.b==r.b)if(J.f(b.c,r.c))if(J.f(b.d,r.d))if(J.f(b.e,r.e))if(J.f(b.f,r.f))if(J.f(b.r,r.r))if(J.f(b.w,r.w))s=!0
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.LC.prototype={}
A.ri.prototype={
gv(a){var s=this
return A.Y(s.gcw(s),s.gf3(),s.c,s.d,s.e,s.f,s.r,s.w,s.x,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.S(b)!==A.A(r))return!1
if(b instanceof A.ri)if(J.f(b.gcw(b),r.gcw(r)))if(J.f(b.gf3(),r.gf3()))if(b.c==r.c)if(J.f(b.d,r.d))if(J.f(b.e,r.e))if(b.f==r.f)if(J.f(b.r,r.r))s=J.f(b.x,r.x)
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gcw(a){return this.a},
gf3(){return this.b}}
A.LD.prototype={}
A.vr.prototype={
ag(){return new A.P3(A.aE(t.BD),B.m)}}
A.P3.prototype={
aA(){this.aM()
this.a.toString
this.t6(B.bL)},
aR(a){var s,r=this
r.bc(a)
r.a.toString
r.t6(B.bL)
s=r.lt$
if(s.B(0,B.bL)&&s.B(0,B.br))r.t6(B.br)},
gQK(){var s=this,r=s.lt$
if(r.B(0,B.bL))return s.a.ch
if(r.B(0,B.br))return s.a.ay
if(r.B(0,B.bK))return s.a.at
if(r.B(0,B.eM))return s.a.ax
return s.a.as},
K(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a.r,a2=a.lt$,a3=A.kb(a1.b,a2,t.jH),a4=A.kb(a.a.db,a2,t.uD)
a.a.toString
s=new A.y(0,0).a_(0,4)
r=B.B6.GN(a.a.cy)
a1=a.a.f
q=A.kb(a1,a2,t.EA)
a.a.toString
a1=s.a
a2=s.b
p=B.aS.C(0,new A.bp(a1,a2,a1,a2)).hB(0,B.aS,B.Z7)
o=a.gQK()
n=a.a.r.h0(a3)
m=a.a.w
A.aG(a5)
l=a.a
k=l.go
l=l.fx
j=a.Jn(B.eM)
a.a.toString
i=a.Jo(B.br,a0)
h=a.a
g=h.Q
f=h.x
h=h.y
e=a.Jn(B.bK)
d=a.a
c=d.c
n=A.FR(B.aG,A.alf(!1,a0,!0,A.tT(A.aW(a0,A.nL(d.dy,1,1),B.l,a0,a0,a0,a0,a0,p,a0),new A.ct(a0,a0,a0,a0,a0,a3,a0,a0)),a4,!0,f,l,a0,h,q,j,i,e,a0,c,a0,g,a0,a0),k,m,o,a0,a0,a4,a0,n,B.yc)
switch(d.fr.a){case 0:b=new A.a5(48+a1,48+a2)
break
case 1:b=B.O
break
default:b=a0}return A.dy(!0,new A.Nm(b,new A.fD(r,n,a0),a0),!0,!0,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)}}
A.Nm.prototype={
aD(a){var s=new A.Pc(this.e,null,A.au())
s.aE()
s.saO(null)
return s},
aF(a,b){b.sa1Y(this.e)}}
A.Pc.prototype={
sa1Y(a){if(this.A.k(0,a))return
this.A=a
this.a6()},
BY(a,b){var s,r,q=this.t$
if(q!=null){s=b.$2(q,a)
q=s.a
r=this.A
return a.bl(new A.a5(Math.max(q,r.a),Math.max(s.b,r.b)))}return B.O},
bZ(a){return this.BY(a,A.afR())},
bx(){var s,r,q=this,p=q.BY(t.k.a(A.w.prototype.gZ.call(q)),A.afS())
q.k3=p
s=q.t$
if(s!=null){r=s.e
r.toString
t.r.a(r)
s=s.k3
s.toString
r.a=B.Q.l2(t.uu.a(p.ab(0,s)))}},
bM(a,b){var s
if(this.i3(a,b))return!0
s=this.t$.k3.im(B.k)
return a.FH(new A.acr(this,s),s,A.auA(s))}}
A.acr.prototype={
$2(a,b){return this.a.t$.bM(a,this.b)},
$S:15}
A.RC.prototype={}
A.rp.prototype={
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.S(b)!==A.A(r))return!1
if(b instanceof A.rp)if(b.d==r.d)if(b.e==r.e)if(J.f(b.f,r.f))s=!0
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.LE.prototype={}
A.AJ.prototype={
gv(a){var s=this
return A.cE([s.a,s.gcw(s),s.gdv(),s.giQ(),s.gfF(s),s.gf3(),s.ghI(s),s.gd3(s),s.gye(),s.y,s.gyb(),s.Q,s.ghO(),s.at,s.gcS(s),s.gyf(),s.gzz(),s.gzb(),s.cx,s.cy,s.db,s.ghq()])},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.AJ&&b.a==s.a&&b.gcw(b)==s.gcw(s)&&b.gdv()==s.gdv()&&b.giQ()==s.giQ()&&b.gfF(b)==s.gfF(s)&&b.gf3()==s.gf3()&&b.ghI(b)==s.ghI(s)&&b.gd3(b)==s.gd3(s)&&b.gye()==s.gye()&&b.y==s.y&&b.gyb()==s.gyb()&&b.Q==s.Q&&b.ghO()==s.ghO()&&b.at==s.at&&b.gcS(b)==s.gcS(s)&&b.gyf()==s.gyf()&&J.f(b.gzz(),s.gzz())&&b.gzb()==s.gzb()&&J.f(b.cx,s.cx)&&b.cy==s.cy&&J.f(b.db,s.db)&&b.ghq()==s.ghq()},
gcw(a){return this.b},
gdv(){return this.c},
giQ(){return this.d},
gfF(a){return this.e},
gf3(){return this.f},
ghI(a){return this.r},
gd3(a){return this.w},
gye(){return this.x},
gyb(){return this.z},
ghO(){return this.as},
gcS(a){return this.ax},
gyf(){return this.ay},
gzz(){return this.ch},
gzb(){return this.CW},
ghq(){return this.dx}}
A.Nz.prototype={
X(a){var s,r=this,q=r.a,p=q==null?null:q.X(a)
q=r.b
s=q==null?null:q.X(a)
q=p==null
if(q&&s==null)return null
if(q){q=s.a
return A.aB(new A.cY(A.b3(0,q.gn(q)>>>16&255,q.gn(q)>>>8&255,q.gn(q)&255),0,B.aN,-1),s,r.c)}if(s==null){q=p.a
return A.aB(p,new A.cY(A.b3(0,q.gn(q)>>>16&255,q.gn(q)>>>8&255,q.gn(q)&255),0,B.aN,-1),r.c)}return A.aB(p,s,r.c)},
$ifU:1}
A.LF.prototype={}
A.AK.prototype={
G(){return"ButtonTextTheme."+this.b}}
A.AL.prototype={
gd3(a){switch(0){case 0:case 1:return B.mm}},
gcS(a){switch(0){case 0:case 1:return B.SR}},
k(a,b){var s=this
if(b==null)return!1
if(J.S(b)!==A.A(s))return!1
return b instanceof A.AL&&J.f(b.gd3(b),s.gd3(s))&&J.f(b.gcS(b),s.gcS(s))&&J.f(b.w,s.w)&&J.f(b.y,s.y)&&J.f(b.z,s.z)&&J.f(b.at,s.at)&&b.ax==s.ax},
gv(a){var s=this
return A.Y(B.BX,88,36,s.gd3(s),s.gcS(s),!1,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.LG.prototype={}
A.rs.prototype={
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,s.f,s.r,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.rs&&J.f(b.b,s.b)&&J.f(b.c,s.c)&&J.f(b.d,s.d)&&b.e==s.e&&J.f(b.f,s.f)&&J.f(b.r,s.r)}}
A.LJ.prototype={}
A.rw.prototype={
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.rw&&b.b==s.b&&b.c==s.c&&b.d==s.d&&b.e==s.e&&J.f(b.w,s.w)&&J.f(b.x,s.x)}}
A.LL.prototype={}
A.rx.prototype={
gv(a){var s=this
return A.cE([s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,s.CW,s.cx,s.cy])},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.rx&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&J.f(b.c,s.c)&&J.f(b.d,s.d)&&J.f(b.e,s.e)&&J.f(b.f,s.f)&&J.f(b.r,s.r)&&J.f(b.w,s.w)&&b.x==s.x&&J.f(b.y,s.y)&&J.f(b.z,s.z)&&J.f(b.Q,s.Q)&&J.f(b.as,s.as)&&J.f(b.at,s.at)&&J.f(b.ax,s.ax)&&J.f(b.ay,s.ay)&&b.ch==s.ch&&b.CW==s.CW&&b.cx==s.cx&&J.f(b.cy,s.cy)}}
A.LN.prototype={}
A.BB.prototype={
k(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
if(a0==null)return!1
if(b===a0)return!0
if(J.S(a0)!==A.A(b))return!1
if(a0 instanceof A.BB)if(a0.a===b.a){s=a0.b
r=b.b
if(s.k(0,r)){q=a0.c
p=b.c
if(q.k(0,p)){o=a0.d
if(o==null)o=s
n=b.d
if(o.k(0,n==null?r:n)){o=a0.e
if(o==null)o=q
n=b.e
if(o.k(0,n==null?p:n)){o=a0.f
n=b.f
if(o.k(0,n)){m=a0.r
l=b.r
if(m.k(0,l)){k=a0.w
if(k==null)k=o
j=b.w
if(k.k(0,j==null?n:j)){k=a0.x
if(k==null)k=m
j=b.x
if(k.k(0,j==null?l:j)){k=a0.y
j=k==null
i=j?o:k
h=b.y
g=h==null
if(i.k(0,g?n:h)){i=a0.z
f=i==null
e=f?m:i
d=b.z
c=d==null
if(e.k(0,c?l:d)){e=a0.Q
if(e==null){if(j)k=o}else k=e
j=b.Q
if(j==null)j=g?n:h
if(k.k(0,j)){k=a0.as
if(k==null)m=f?m:i
else m=k
k=b.as
if(k==null)l=c?l:d
else l=k
if(m.k(0,l)){m=a0.at
l=b.at
if(m.k(0,l)){k=a0.ax
j=b.ax
if(k.k(0,j)){i=a0.ay
m=i==null?m:i
i=b.ay
if(m.k(0,i==null?l:i)){m=a0.ch
if(m==null)m=k
l=b.ch
if(m.k(0,l==null?j:l))if(a0.CW.k(0,b.CW)){m=a0.cx
l=b.cx
if(m.k(0,l)){k=a0.cy
j=b.cy
if(k.k(0,j)){i=a0.db
h=b.db
if(i.k(0,h)){g=a0.dx
if(g==null)g=k
f=b.dx
if(g.k(0,f==null?j:f)){g=a0.dy
if(g==null)g=i
f=b.dy
if(g.k(0,f==null?h:f)){g=a0.fr
if(g==null)g=m
f=b.fr
if(g.k(0,f==null?l:f)){g=a0.fx
m=g==null?m:g
g=b.fx
if(m.k(0,g==null?l:g)){m=a0.fy
if(m==null)m=B.q
l=b.fy
if(m.k(0,l==null?B.q:l)){m=a0.go
if(m==null)m=B.q
l=b.go
if(m.k(0,l==null?B.q:l)){m=a0.id
if(m==null)m=i
l=b.id
if(m.k(0,l==null?h:l)){m=a0.k1
if(m==null)m=k
l=b.k1
if(m.k(0,l==null?j:l)){m=a0.k2
q=m==null?q:m
m=b.k2
if(q.k(0,m==null?p:m)){q=a0.k4
if(q==null)q=s
p=b.k4
if(q.k(0,p==null?r:p)){q=a0.ok
if(q==null)q=o
p=b.ok
if(q.k(0,p==null?n:p)){q=a0.k3
s=q==null?s:q
q=b.k3
s=s.k(0,q==null?r:q)}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
return s},
gv(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.b,b1=a9.c,b2=a9.d
if(b2==null)b2=b0
s=a9.e
if(s==null)s=b1
r=a9.f
q=a9.r
p=a9.w
if(p==null)p=r
o=a9.x
if(o==null)o=q
n=a9.y
m=n==null
l=m?r:n
k=a9.z
j=k==null
i=j?q:k
h=a9.Q
if(h==null){if(m)n=r}else n=h
m=a9.as
if(m==null)m=j?q:k
k=a9.at
j=a9.ax
h=a9.ay
if(h==null)h=k
g=a9.ch
if(g==null)g=j
f=a9.cx
e=a9.cy
d=a9.db
c=a9.dx
if(c==null)c=e
b=a9.dy
if(b==null)b=d
a=a9.fr
if(a==null)a=f
a0=a9.fx
if(a0==null)a0=f
a1=a9.fy
if(a1==null)a1=B.q
a2=a9.go
if(a2==null)a2=B.q
a3=a9.id
if(a3==null)a3=d
a4=a9.k1
if(a4==null)a4=e
a5=a9.k2
if(a5==null)a5=b1
a6=a9.k4
if(a6==null)a6=b0
a7=a9.ok
if(a7==null)a7=r
a8=a9.k3
return A.Y(a9.a,b0,b1,b2,s,r,q,p,o,l,i,n,m,k,j,h,g,a9.CW,f,A.Y(e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8==null?b0:a8,B.a,B.a,B.a,B.a,B.a,B.a))}}
A.LQ.prototype={}
A.ut.prototype={}
A.t0.prototype={
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.t0&&J.f(b.a,s.a)&&b.b==s.b&&b.c==s.c&&J.f(b.d,s.d)&&b.e==s.e&&b.f==s.f&&J.f(b.r,s.r)&&b.w==s.w&&b.x==s.x&&b.y==s.y&&b.z==s.z}}
A.Me.prototype={}
A.ta.prototype={
gv(a){return J.o(this.e)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.ta&&J.f(b.a,s.a)&&b.b==s.b&&J.f(b.c,s.c)&&J.f(b.d,s.d)&&J.f(b.e,s.e)&&J.f(b.f,s.f)&&J.f(b.y,s.y)&&J.f(b.r,s.r)&&J.f(b.w,s.w)&&J.f(b.x,s.x)}}
A.Mq.prototype={}
A.tc.prototype={
gv(a){var s=this
return A.Y(s.gai(s),s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.tc&&J.f(b.gai(b),s.gai(s))&&b.b==s.b&&b.c==s.c&&b.d==s.d&&b.e==s.e},
gai(a){return this.a}}
A.Mu.prototype={}
A.ti.prototype={
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.ti&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&b.c==s.c&&J.f(b.d,s.d)&&J.f(b.e,s.e)&&J.f(b.f,s.f)&&J.f(b.r,s.r)&&b.w==s.w}}
A.MB.prototype={}
A.tj.prototype={
gv(a){return A.Y(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.S(b)!==A.A(r))return!1
if(b instanceof A.tj)if(J.f(b.a,r.a))s=J.f(b.c,r.c)
else s=!1
else s=!1
return s}}
A.MC.prototype={}
A.tm.prototype={
gv(a){return J.o(this.a)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.S(b)!==A.A(this))return!1
return b instanceof A.tm&&J.f(b.a,this.a)}}
A.ME.prototype={}
A.tt.prototype={
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,null,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.tt&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&J.f(b.c,s.c)&&J.f(b.d,s.d)&&J.f(b.e,s.e)&&J.f(b.f,s.f)&&J.f(b.r,s.r)&&J.f(b.w,s.w)&&J.f(b.x,s.x)&&J.f(b.y,s.y)&&J.f(b.z,s.z)&&!0}}
A.MJ.prototype={}
A.tx.prototype={
gv(a){return J.o(this.a)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.S(b)!==A.A(this))return!1
return b instanceof A.tx&&J.f(b.a,this.a)}}
A.MN.prototype={}
A.tC.prototype={
bQ(a){var s=this
return s.f!==a.f||s.r!==a.r||s.w!==a.w||s.x!==a.x||!1}}
A.a9F.prototype={
j(a){return"<default FloatingActionButton tag>"}}
A.q2.prototype={
G(){return"_FloatingActionButtonType."+this.b}}
A.EN.prototype={
K(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=A.aG(a5),a1=a0.iA,a2=this.k1,a3=new A.a9V(a2,!0,A.aG(a5),A.aG(a5).ax,a,a,a,a,a,6,6,8,a,12,a,!0,a,B.BO,B.BN,B.BP,B.BQ,8,a,a,a),a4=a1.a
if(a4==null)a4=a3.gdv()
s=a1.b
if(s==null)s=a3.gcw(a3)
r=a1.c
if(r==null)r=a3.go3()
q=a1.d
if(q==null)q=a3.gob()
p=a1.e
if(p==null)p=a3.gmo()
o=a1.f
if(o==null){n=a3.f
n.toString
o=n}m=a1.r
if(m==null){n=a3.r
n.toString
m=n}l=a1.w
if(l==null){n=a3.w
n.toString
l=n}n=a1.x
k=n==null?a3.x:n
if(k==null)k=o
j=a1.y
if(j==null){n=a3.y
n.toString
j=n}i=a1.Q
if(i==null){n=a3.Q
n.toString
i=n}h=a1.as
if(h==null)h=a3.ghO()
n=a1.cy
g=(n==null?a3.go_():n).h0(a4)
f=a1.z
if(f==null)f=a3.gcS(a3)
n=this.c
e=A.tT(n,new A.ct(h,a,a,a,a,a,a,a))
switch(a2.a){case 0:d=a1.at
if(d==null){a2=a3.at
a2.toString
d=a2}break
case 1:d=a1.ax
if(d==null){a2=a3.ax
a2.toString
d=a2}break
case 2:d=a1.ay
if(d==null){a2=a3.ay
a2.toString
d=a2}break
case 3:d=a1.ch
if(d==null){a2=a3.ch
a2.toString
d=a2}c=a1.cx
if(c==null)c=a3.gnZ()
a2=A.a([],t.E)
a2.push(n)
e=new A.LM(new A.hN(c,A.cT(a2,B.E,B.K,B.d7),a),a)
break
default:d=a}b=new A.vr(this.z,new A.MD(a,a1.db),g,s,r,q,p,o,l,m,j,k,d,f,e,a0.e,a,!1,B.l,i,a)
return new A.HG(new A.lI(B.D3,b,a),a)}}
A.MD.prototype={
X(a){var s=A.kb(this.a,a,t.EA)
if(s==null)s=null
return s==null?B.fE.X(a):s},
gqJ(){return"MaterialStateMouseCursor(FloatActionButton)"}}
A.LM.prototype={
aD(a){var s=a.a2(t.I)
s.toString
s=new A.P8(B.Q,s.w,null,A.au())
s.aE()
s.saO(null)
return s},
aF(a,b){var s=a.a2(t.I)
s.toString
b.sbB(s.w)}}
A.P8.prototype={
bZ(a){var s,r=this.t$,q=a.a,p=a.b,o=a.c,n=a.d
if(r!=null){s=r.fA(B.bx)
return new A.a5(Math.max(q,Math.min(p,s.a)),Math.max(o,Math.min(n,s.b)))}else return new A.a5(A.F(1/0,q,p),A.F(1/0,o,n))},
bx(){var s=this,r=t.k.a(A.w.prototype.gZ.call(s)),q=s.t$,p=r.a,o=r.b,n=r.c,m=r.d
if(q!=null){q.ci(B.bx,!0)
q=s.t$.k3
s.k3=new A.a5(Math.max(p,Math.min(o,q.a)),Math.max(n,Math.min(m,q.b)))
s.wb()}else s.k3=new A.a5(A.F(1/0,p,o),A.F(1/0,n,m))}}
A.a9V.prototype={
gdv(){return this.fx.r},
gcw(a){return this.fx.f},
go3(){return this.fr.cx},
gob(){return this.fr.dx},
gmo(){return this.fr.k3},
gcS(a){return this.dx===B.Bc?B.Uk:B.lW},
ghO(){return this.dx===B.Z4?36:24},
gnZ(){return new A.aT(this.dy&&this.dx===B.Bc?16:20,0,20,0)},
go_(){return this.fr.p3.as.Zu(1.2)}}
A.Y3.prototype={
j(a){return"FloatingActionButtonLocation"}}
A.a6X.prototype={
zO(a){var s=this.JW(a,0),r=a.c,q=a.b.b,p=a.a.b,o=a.w.b,n=r-p-Math.max(16,a.f.d-(a.r.b-r)+16)
if(o>0)n=Math.min(n,r-o-p-16)
return new A.y(s,(q>0?Math.min(n,r-q-p/2):n)+0)}}
A.XR.prototype={}
A.XQ.prototype={
JW(a,b){switch(a.y.a){case 0:return 16+a.e.a-b
case 1:return a.r.a-16-a.e.c-a.a.a+b}}}
A.a9R.prototype={
j(a){return"FloatingActionButtonLocation.endFloat"}}
A.Y2.prototype={
j(a){return"FloatingActionButtonAnimator"}}
A.acS.prototype={
JV(a,b,c){if(c<0.5)return a
else return b}}
A.xd.prototype={
gn(a){var s=this,r=s.w.x
r===$&&A.b()
if(r<s.x){r=s.a
r=r.gn(r)}else{r=s.b
r=r.gn(r)}return r}}
A.Ro.prototype={}
A.Rp.prototype={}
A.ob.prototype={
gv(a){var s=this
return A.Y(s.gdv(),s.gcw(s),s.go3(),s.gob(),s.gmo(),s.f,s.r,s.w,s.x,s.y,s.gcS(s),s.Q,s.ghO(),s.at,s.ax,s.ay,s.ch,s.CW,s.gnZ(),A.Y(s.go_(),s.db,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a))},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.ob&&J.f(b.gdv(),s.gdv())&&J.f(b.gcw(b),s.gcw(s))&&J.f(b.go3(),s.go3())&&J.f(b.gob(),s.gob())&&J.f(b.gmo(),s.gmo())&&b.f==s.f&&b.r==s.r&&b.w==s.w&&b.x==s.x&&b.y==s.y&&J.f(b.gcS(b),s.gcS(s))&&b.Q==s.Q&&b.ghO()==s.ghO()&&J.f(b.at,s.at)&&J.f(b.ax,s.ax)&&J.f(b.ay,s.ay)&&J.f(b.ch,s.ch)&&b.CW==s.CW&&J.f(b.gnZ(),s.gnZ())&&J.f(b.go_(),s.go_())&&!0},
gdv(){return this.a},
gcw(a){return this.b},
go3(){return this.c},
gob(){return this.d},
gmo(){return this.e},
gcS(a){return this.z},
ghO(){return this.as},
gnZ(){return this.cx},
go_(){return this.cy}}
A.MP.prototype={}
A.Fi.prototype={
K(a){var s,r=this,q=null,p=A.aG(a),o=p.z.GN(B.BR),n=r.c,m=n==null?A.alc(a).a:n
if(m==null)m=24
s=A.awJ(new A.fD(o,new A.hN(B.c4,A.dO(new A.l6(B.Q,q,q,A.tT(r.w,new A.ct(m,q,q,q,q,r.z,q,q)),q),m,m),q),q),r.cx)
n=Math.max(35,(m+Math.min(B.c4.gca(),B.c4.gb6(B.c4)+B.c4.gb9(B.c4)))*0.7)
return A.dy(!0,A.atZ(!1,q,!0,s,!1,q,!0,!1,p.cx,q,p.cy,B.BV,p.dx,q,B.AK,q,q,q,q,q,r.ax,q,q,q,q,n,p.k3,q,q),!1,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)}}
A.tS.prototype={
gv(a){return J.o(this.a)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.S(b)!==A.A(this))return!1
return b instanceof A.tS&&J.f(b.a,this.a)}}
A.Ne.prototype={}
A.k5.prototype={
RV(a){var s
if(a===B.H&&!this.CW){s=this.ch
s===$&&A.b()
s.m()
this.kq()}},
m(){var s=this.ch
s===$&&A.b()
s.m()
this.kq()},
DE(a,b,c){var s,r,q=this
a.bR(0)
s=q.as
if(s!=null)a.wv(0,s.f_(b,q.ax))
switch(q.y.a){case 1:s=b.gba()
r=q.z
a.h3(s,r==null?35:r,c)
break
case 0:s=q.Q
if(!s.k(0,B.ax))a.dq(A.a27(b,s.c,s.d,s.a,s.b),c)
else a.d0(b,c)
break}a.bA(0)},
Iu(a,b){var s,r,q,p=this,o=$.av().bd(),n=p.e,m=p.ay
m===$&&A.b()
s=m.a
o.sai(0,A.b3(m.b.ac(0,s.gn(s)),n.gn(n)>>>16&255,n.gn(n)>>>8&255,n.gn(n)&255))
r=A.a06(b)
n=p.at
if(n!=null)q=n.$0()
else{n=p.b.k3
q=new A.E(0,0,0+n.a,0+n.b)}if(r==null){a.bR(0)
a.ac(0,b.a)
p.DE(a,q,o)
a.bA(0)}else p.DE(a,q.d6(r),o)}}
A.aez.prototype={
$0(){var s=this.a.k3
return new A.E(0,0,0+s.a,0+s.b)},
$S:165}
A.ab2.prototype={
ZI(a,b,c,d,e,f,g,h,i,j,k,a0){var s,r,q=null,p=i==null?A.ayP(k,d,j,h):i,o=new A.tZ(h,B.ax,f,p,A.ayN(k,d,j),!d,a0,c,e,k,g),n=e.A,m=A.dY(q,B.dI,q,q,n),l=e.gdB()
m.bm()
s=m.aY$
s.b=!0
s.a.push(l)
m.cA(0)
o.CW=m
s=t.a7
r=t.m
o.ch=new A.b1(r.a(m),new A.aO(0,p,s),s.h("b1<aJ.T>"))
n=A.dY(q,B.aG,q,q,n)
n.bm()
s=n.aY$
s.b=!0
s.a.push(l)
n.bm()
l=n.aU$
l.b=!0
l.a.push(o.gTW())
o.cy=n
l=c.gn(c)
o.cx=new A.b1(r.a(n),new A.os(l>>>24&255,0),t.xD.h("b1<aJ.T>"))
e.FD(o)
return o}}
A.tZ.prototype={
Gc(a){var s=B.d.eQ(this.as/1),r=this.CW
r===$&&A.b()
r.e=A.c_(0,s,0)
r.cA(0)
this.cy.cA(0)},
am(a){var s=this.cy
if(s!=null)s.cA(0)},
TX(a){if(a===B.T)this.m()},
m(){var s=this,r=s.CW
r===$&&A.b()
r.m()
s.cy.m()
s.cy=null
s.kq()},
Iu(a,b){var s,r,q=this,p=$.av().bd(),o=q.e,n=q.cx
n===$&&A.b()
s=n.a
p.sai(0,A.b3(n.b.ac(0,s.gn(s)),o.gn(o)>>>16&255,o.gn(o)>>>8&255,o.gn(o)&255))
r=q.y
if(q.ax){o=q.b.k3.im(B.k)
n=q.CW
n===$&&A.b()
n=n.x
n===$&&A.b()
r=A.a1g(r,o,n)}r.toString
o=q.ch
o===$&&A.b()
n=o.a
q.a2h(q.z,a,r,q.at,q.Q,p,o.b.ac(0,n.gn(n)),q.ay,b)}}
A.lR.prototype={
Gc(a){},
am(a){},
sai(a,b){if(b.k(0,this.e))return
this.e=b
this.a.ap()},
a2h(a,b,c,d,e,f,g,h,i){var s,r=A.a06(i)
b.bR(0)
if(r==null)b.ac(0,i.a)
else b.b1(0,r.a,r.b)
if(d!=null){s=d.$0()
if(e!=null)b.wv(0,e.f_(s,h))
else if(!a.k(0,B.ax))b.YW(A.a27(s,a.c,a.d,a.a,a.b))
else b.nw(s)}b.h3(c,g,f)
b.bA(0)}}
A.a_4.prototype={}
A.yr.prototype={
bQ(a){return this.f!==a.f}}
A.or.prototype={
K_(a){return null},
K(a){var s=this,r=a.a2(t.AD),q=r==null?null:r.f
return new A.xS(s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,s.CW,s.cx,s.cy,s.db,s.dx,s.dy,s.fr,!1,s.fy,!1,s.id,s.k1,q,s.gJZ(),s.gZV(),s.k2,null)},
ZW(a){return!0}}
A.xS.prototype={
ag(){return new A.xR(A.u(t.uR,t.z6),new A.bi(A.a([],t.hL),t.fR),null,B.m)}}
A.jq.prototype={
G(){return"_HighlightType."+this.b}}
A.xR.prototype={
ga0P(){var s=this.r
s=s.gaX(s)
s=new A.aI(s,new A.ab0(),A.n(s).h("aI<p.E>"))
return!s.gO(s)},
y7(a,b){var s,r=this.y,q=r.a,p=q.length
if(b){r.b=!0
q.push(a)}else r.u(0,a)
s=q.length!==0
if(s!==(p!==0)){r=this.a.k2
if(r!=null)r.y7(this,s)}},
Am(a){var s=this.c
s.toString
this.X0(s)
this.Hm()},
KI(){return this.Am(null)},
a0v(){this.av(new A.ab_())},
ge6(){var s=this.a.ok
if(s==null){s=this.x
s.toString}return s},
HA(){var s,r,q=this
if(q.a.ok==null)q.x=A.auw(null)
s=q.ge6()
r=q.a
r.toString
s.e0(0,B.bL,!q.eT(r))
q.ge6().U(0,q.gxF())},
aA(){this.Ow()
this.HA()
$.ap.J$.f.d.C(0,this.gHj())},
aR(a){var s,r,q,p,o=this
o.bc(a)
s=a.ok
if(o.a.ok!=s){if(s!=null)s.H(0,o.gxF())
if(o.a.ok!=null){s=o.x
if(s!=null)s.m()
o.x=null}o.HA()}if(J.f(o.a.ch,a.ch)){s=o.a
if(s.ax==a.ax)s=s.at!==a.at
else s=!0}else s=!0
if(s){s=o.r
r=s.i(0,B.dx)
if(r!=null){q=r.ch
q===$&&A.b()
q.m()
r.kq()
o.zt(B.dx,!1,o.f)}p=s.i(0,B.Bg)
if(p!=null){s=p.ch
s===$&&A.b()
s.m()
p.kq()}}s=o.a
s.toString
if(o.eT(s)!==o.eT(a)){s=o.ge6()
q=o.a
q.toString
s.e0(0,B.bL,!o.eT(q))
s=o.a
s.toString
if(!o.eT(s))o.ge6().e0(0,B.br,!1)
o.zt(B.dx,!1,o.f)}o.zs()},
m(){var s,r=this
$.ap.J$.f.d.u(0,r.gHj())
r.ge6().H(0,r.gxF())
s=r.x
if(s!=null)s.m()
r.aJ()},
gtg(){if(!this.ga0P()){var s=this.d
s=s!=null&&s.a!==0}else s=!0
return s},
JO(a){switch(a.a){case 0:return B.aG
case 1:case 2:return B.ED}},
zt(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.r,f=g.i(0,a),e=a.a
switch(e){case 0:i.ge6().e0(0,B.br,c)
break
case 1:if(b)i.ge6().e0(0,B.bK,c)
break
case 2:break}if(a===B.ff){s=i.a.k2
if(s!=null)s.y7(i,c)}s=f==null
if(c===(!s&&f.CW))return
if(c)if(s){s=i.a.db
r=s==null?h:s.X(i.ge6().a)
if(r==null){s=i.c
s.toString
q=A.aG(s)
switch(e){case 0:r=i.a.cy
if(r==null)r=q.cy
break
case 2:r=i.a.CW
if(r==null)r=q.cx
break
case 1:r=i.a.cx
if(r==null)r=q.dx
break}}s=i.c.ga9()
s.toString
t.x.a(s)
p=i.c.r4(t.xT)
p.toString
o=i.a
n=o.at
m=o.ax
l=o.ch
o=o.k3.$1(s)
k=i.c.a2(t.I)
k.toString
j=i.JO(a)
s=new A.k5(n,m,B.ax,l,o,k.w,r,p,s,new A.ab1(i,a))
j=A.dY(h,j,h,h,p.A)
j.bm()
o=j.aY$
o.b=!0
o.a.push(p.gdB())
j.bm()
o=j.aU$
o.b=!0
o.a.push(s.gRU())
j.cA(0)
s.ch=j
o=s.e
o=o.gn(o)
s.ay=new A.b1(t.m.a(j),new A.os(0,o>>>24&255),t.xD.h("b1<aJ.T>"))
p.FD(s)
g.l(0,a,s)
i.oQ()}else{f.CW=!0
g=f.ch
g===$&&A.b()
g.cA(0)}else{f.CW=!1
g=f.ch
g===$&&A.b()
g.fv(0)}switch(e){case 0:g=i.a.y
if(g!=null)g.$1(c)
break
case 1:if(b){g=i.a.z
if(g!=null)g.$1(c)}break
case 2:break}},
m9(a,b){return this.zt(a,!0,b)},
Qk(a){var s,r,q,p,o,n,m,l,k,j,i=this,h={},g=i.c.r4(t.xT)
g.toString
s=i.c.ga9()
s.toString
t.x.a(s)
r=s.kf(a)
q=i.a.db
q=q==null?null:q.X(i.ge6().a)
p=q==null?i.a.dx:q
if(p==null){q=i.c
q.toString
p=A.aG(q).k3}q=i.a
o=q.as?q.k3.$1(s):null
q=i.a
n=q.ay
m=q.ch
h.a=null
q=q.dy
if(q==null){q=i.c
q.toString
q=A.aG(q).x}l=i.a
k=l.as
l=l.ax
j=i.c.a2(t.I)
j.toString
return h.a=q.ZI(0,n,p,k,g,m,new A.aaX(h,i),r,l,o,s,j.w)},
a04(a){if(this.c==null)return
this.av(new A.aaZ(this))},
gWM(){var s,r=this,q=r.c
q.toString
q=A.di(q)
s=q==null?null:q.ax
switch((s==null?B.hw:s).a){case 0:q=r.a
q.toString
return r.eT(q)&&r.z
case 1:return r.z}},
zs(){var s,r=$.ap.J$.f.b
switch((r==null?A.EU():r).a){case 0:s=!1
break
case 1:s=this.gWM()
break
default:s=null}this.m9(B.Bg,s)},
a06(a){var s,r=this
r.z=a
r.ge6().e0(0,B.eM,a)
r.zs()
s=r.a.fy
if(s!=null)s.$1(a)},
a0C(a){if(this.y.a.length!==0)return
this.X1(a)
this.a.toString},
a0E(a){this.a.toString},
EH(a,b){var s,r,q,p,o=this
if(a!=null){s=a.ga9()
s.toString
t.x.a(s)
r=s.k3
r=new A.E(0,0,0+r.a,0+r.b).gba()
q=A.co(s.bs(0,null),r)}else q=b.a
o.ge6().e0(0,B.br,!0)
p=o.Qk(q)
s=o.d;(s==null?o.d=A.cA(t.nv):s).C(0,p)
s=o.e
if(s!=null)s.am(0)
o.e=p
o.oQ()
o.m9(B.ff,!0)},
X1(a){return this.EH(null,a)},
X0(a){return this.EH(a,null)},
Hm(){var s=this,r=s.e
if(r!=null)r.Gc(0)
s.e=null
s.m9(B.ff,!1)
r=s.a
if(r.fr){r=s.c
r.toString
A.XT(r)}s.a.d.$0()},
a0A(){var s=this,r=s.e
if(r!=null)r.am(0)
s.e=null
s.a.toString
s.m9(B.ff,!1)},
d_(){var s,r,q,p,o,n,m,l=this,k=l.d
if(k!=null){l.d=null
for(k=new A.kG(k,k.mL()),s=A.n(k).c;k.q();){r=k.d;(r==null?s.a(r):r).m()}l.e=null}for(k=l.r,s=A.iR(k,k.r);s.q();){r=s.d
q=k.i(0,r)
if(q!=null){p=q.ch
p===$&&A.b()
p.r.m()
p.r=null
o=p.aU$
o.b=!1
B.b.V(o.a)
n=o.c
if(n===$){m=A.cA(o.$ti.c)
o.c!==$&&A.bF()
o.c=m
n=m}if(n.a>0){n.b=n.c=n.d=n.e=null
n.a=0}o=p.aY$
o.b=!1
B.b.V(o.a)
n=o.c
if(n===$){m=A.cA(o.$ti.c)
o.c!==$&&A.bF()
o.c=m
n=m}if(n.a>0){n.b=n.c=n.d=n.e=null
n.a=0}p.tN()
q.kq()}k.l(0,r,null)}k=l.a.k2
if(k!=null)k.y7(l,!1)
l.Ov()},
eT(a){return!0},
a0g(a){var s,r=this
r.f=!0
s=r.a
s.toString
if(r.eT(s))r.m9(B.dx,r.f)},
a0i(a){this.f=!1
this.m9(B.dx,!1)},
gPM(){var s,r=this,q=r.c
q.toString
q=A.di(q)
s=q==null?null:q.ax
switch((s==null?B.hw:s).a){case 0:q=r.a
q.toString
return r.eT(q)&&r.a.k1
case 1:return!0}},
K(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.Ay(a)
s=new A.aaY(h,a)
for(r=h.r,q=A.iR(r,r.r);q.q();){p=q.d
o=r.i(0,p)
if(o!=null)o.sai(0,s.$1(p))}r=h.e
if(r!=null){q=h.a.db
q=q==null?g:q.X(h.ge6().a)
if(q==null)q=h.a.dx
r.sai(0,q==null?A.aG(a).k3:q)}r=h.a.Q
if(r==null)r=B.fE
n=A.kb(r,h.ge6().a,t.oR)
m=h.w
if(m===$){r=h.gAl()
q=t.B8
p=t.dc
l=A.aX([B.Yc,new A.lf(r,new A.bi(A.a([],q),p),t.ei),B.Yd,new A.lf(r,new A.bi(A.a([],q),p),t.wV)],t.n,t.nT)
h.w!==$&&A.bF()
h.w=l
m=l}r=h.a.id
q=h.gPM()
p=h.a
p.toString
p=h.eT(p)?h.ga0B():g
o=h.a
o.toString
o=h.eT(o)?h.ga0D():g
k=h.a
k.toString
k=h.eT(k)?h.ga0y():g
j=h.a
j.toString
j=h.eT(j)?h.ga0z():g
i=h.a
return new A.yr(h,A.SQ(m,A.ES(!1,q,A.uP(A.dy(g,A.YD(B.at,i.c,B.aF,!0,g,g,g,g,g,g,g,g,g,g,k,j,p,o,g,g,g),!1,g,!1,g,g,g,g,g,g,g,g,h.gAl(),g,g,g,g,g,g,g),n,h.ga0f(),h.ga0h(),g),g,g,g,r,!0,g,h.ga05(),g,g,g,g)),g)},
$iaiC:1}
A.ab0.prototype={
$1(a){return a!=null},
$S:174}
A.ab_.prototype={
$0(){},
$S:0}
A.ab1.prototype={
$0(){var s=this.a
s.r.l(0,this.b,null)
s.oQ()},
$S:0}
A.aaX.prototype={
$0(){var s,r=this.b,q=r.d
if(q!=null){s=this.a
q.u(0,s.a)
if(r.e==s.a)r.e=null
r.oQ()}},
$S:0}
A.aaZ.prototype={
$0(){this.a.zs()},
$S:0}
A.aaY.prototype={
$1(a){var s,r,q=this,p=A.aG(q.b)
switch(a.a){case 0:s=q.a
r=s.a.db
r=r==null?null:r.X(B.TN)
s=r==null?s.a.cy:r
return s==null?p.cy:s
case 2:s=q.a
r=s.a.db
r=r==null?null:r.X(B.TL)
s=r==null?s.a.CW:r
return s==null?p.cx:s
case 1:s=q.a
r=s.a.db
r=r==null?null:r.X(B.TK)
s=r==null?s.a.cx:r
return s==null?p.dx:s}},
$S:175}
A.Fo.prototype={}
A.zJ.prototype={
aA(){this.aM()
if(this.gtg())this.pp()},
d_(){var s=this.h5$
if(s!=null){s.aB()
s.dm()
this.h5$=null}this.my()}}
A.EP.prototype={
G(){return"FloatingLabelBehavior."+this.b}}
A.EO.prototype={
gv(a){return B.f.gv(-1)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.S(b)!==A.A(this))return!1
return b instanceof A.EO&&!0},
j(a){return A.atv(-1)}}
A.Fp.prototype={
gv(a){var s=null
return A.Y(s,s,s,s,s,s,s,B.EW,B.fA,!1,s,!1,s,s,s,s,s,s,!1,A.Y(s,s,s,s,s,s,s,s,s,s,s,!1,s,B.a,B.a,B.a,B.a,B.a,B.a,B.a))},
k(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(J.S(b)!==A.A(this))return!1
if(b instanceof A.Fp)if(B.fA.k(0,B.fA))s=!0
else s=!1
else s=!1
return s}}
A.Nl.prototype={}
A.ui.prototype={
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.S(b)!==A.A(r))return!1
if(b instanceof A.ui)if(J.f(b.b,r.b))if(b.c==r.c)if(J.f(b.d,r.d))if(J.f(b.e,r.e))if(J.f(b.f,r.f))if(J.f(b.r,r.r))if(J.f(b.w,r.w))if(J.f(b.x,r.x))if(b.y==r.y)if(b.z==r.z)if(b.Q==r.Q)s=!0
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.ND.prototype={}
A.iW.prototype={
G(){return"MaterialType."+this.b}}
A.ur.prototype={
ag(){return new A.NL(new A.bw("ink renderer",t.T),null,null,B.m)}}
A.NL.prototype={
K(a){var s,r,q,p,o,n,m,l=this,k=null,j=A.aG(a),i=A.aG(a),h=l.a,g=h.f
if(g==null)switch(h.d.a){case 0:g=i.as
break
case 1:g=i.at
break
case 3:case 2:case 4:break}s=h.r
if(s==null)s=j.k2
r=h.e
q=h.c
if(q!=null){h=h.x
if(h==null){h=A.aG(a).p3.z
h.toString}p=l.a
q=new A.qV(q,h,B.aP,p.as,k,k)
h=p}p=h.d
q=new A.cD(new A.abD(l),new A.Nk(g,l,p!==B.hv,q,l.d),k,t.am)
if(p===B.ck&&h.y==null&&!0){A.aG(a)
g.toString
g=A.akZ(a,g,l.a.e)
h=l.a
p=h.as
return new A.qX(q,B.Z,h.Q,r,g,!1,s,B.bf,p,k,k)}o=l.RO()
h=l.a
if(h.d===B.hv)return A.aky(new A.yU(q,o,!0,k),h.Q,new A.mw(o,A.dH(a)))
p=h.as
n=h.Q
m=h.e
g.toString
return new A.y4(q,o,!0,n,m,g,s,h.w,B.bf,p,k,k)},
RO(){var s=this.a,r=s.y
if(r!=null)return r
s=s.d
switch(s.a){case 0:case 4:return B.SQ
case 1:case 3:s=B.RS.i(0,s)
s.toString
return new A.dp(s,B.A)
case 2:return B.lW}}}
A.abD.prototype={
$1(a){var s,r=$.ap.J$.z.i(0,this.a.d).ga9()
r.toString
t.xT.a(r)
s=r.bo
if(s!=null&&J.l5(s))r.ap()
return!1},
$S:176}
A.yw.prototype={
FD(a){var s=this.bo
J.he(s==null?this.bo=A.a([],t.pW):s,a)
this.ap()},
iG(a){return this.az},
aG(a,b){var s,r=this,q=r.bo
if(q!=null&&J.l5(q)){s=a.gby(a)
s.bR(0)
s.b1(0,b.a,b.b)
q=r.k3
s.nw(new A.E(0,0,0+q.a,0+q.b))
q=r.bo
q.toString
q=J.aw(q)
for(;q.q();)q.gF(q).Va(s)
s.bA(0)}r.fK(a,b)}}
A.Nk.prototype={
aD(a){var s=new A.yw(this.f,this.e,this.r,null,A.au())
s.aE()
s.saO(null)
return s},
aF(a,b){b.S=this.e
b.az=this.r}}
A.k4.prototype={
m(){var s=this.a,r=s.bo
r.toString
J.iv(r,this)
s.ap()
this.c.$0()},
Va(a){var s,r,q,p,o,n,m=this.b,l=A.a([m],t.By)
for(s=this.a,r=t.d;m!==s;m=q){q=m.c
q.toString
r.a(q)
if(!q.jY(m))return
l.push(q)}p=new A.bg(new Float64Array(16))
p.cR()
for(o=l.length-1;o>0;o=n){n=o-1
l[o].cZ(l[n],p)}this.Iu(a,p)},
j(a){return"<optimized out>#"+A.bL(this)}}
A.mx.prototype={
dg(a){return A.cU(this.a,this.b,a)}}
A.y4.prototype={
ag(){return new A.NH(null,null,B.m)}}
A.NH.prototype={
o4(a){var s,r,q=this
q.CW=t.nr.a(a.$3(q.CW,q.a.z,new A.abn()))
s=q.a
r=t.mo
s=r.a(a.$3(q.cy,s.as,new A.abo()))
q.cy=s
s=q.a.at
q.cx=s!=null?r.a(a.$3(q.cx,s,new A.abp())):null
q.db=t.EE.a(a.$3(q.db,q.a.w,new A.abq()))},
K(a){var s,r,q,p,o,n=this,m=n.db
m.toString
s=n.gf4()
s=m.ac(0,s.gn(s))
s.toString
m=n.CW
m.toString
r=n.gf4()
q=m.ac(0,r.gn(r))
A.aG(a)
p=A.akZ(a,n.a.Q,q)
n.a.toString
m=n.cy
if(m==null)o=null
else{r=n.gf4()
r=m.ac(0,r.gn(r))
o=r}if(o==null)o=B.ag
m=A.dH(a)
r=n.a
return new A.Ik(new A.mw(s,m),r.y,q,p,o,new A.yU(r.r,s,!0,null),null)}}
A.abn.prototype={
$1(a){return new A.aO(A.Se(a),null,t.a7)},
$S:99}
A.abo.prototype={
$1(a){return new A.ho(t.iO.a(a),null)},
$S:44}
A.abp.prototype={
$1(a){return new A.ho(t.iO.a(a),null)},
$S:44}
A.abq.prototype={
$1(a){return new A.mx(t.Fy.a(a),null)},
$S:179}
A.yU.prototype={
K(a){var s=A.dH(a)
return A.Dt(this.c,new A.PL(this.d,s,null),null,null,B.O)}}
A.PL.prototype={
aG(a,b){this.b.he(a,new A.E(0,0,0+b.a,0+b.b),this.c)},
hp(a){return!a.b.k(0,this.b)}}
A.Rt.prototype={
bY(){this.d7()
this.cu()
this.ef()},
m(){var s=this,r=s.ak$
if(r!=null)r.H(0,s.gdQ())
s.ak$=null
s.aJ()}}
A.NI.prototype={
lO(a){return a.gbV(a)==="en"},
cC(a,b){return new A.bo(B.C9,t.zU)},
kh(a){return!1},
j(a){return"DefaultMaterialLocalizations.delegate(en_US)"}}
A.DI.prototype={
gP(){return"Open navigation menu"},
ga5(){return"Back"},
Jb(a,b){return"Tab "+b+" of "+a},
ga7(){return B.n},
$iO:1}
A.cC.prototype={
G(){return"MaterialState."+this.b}}
A.HA.prototype={
qH(a){return this.X(A.aE(t.BD)).qH(a)},
$ifU:1}
A.MF.prototype={
X(a){if(a.B(0,B.bL))return B.kG
return B.AK},
gqJ(){return"MaterialStateMouseCursor(clickable)"}}
A.xT.prototype={
X(a){var s,r=this,q=r.a,p=q==null?null:q.X(a)
q=r.b
s=q==null?null:q.X(a)
return r.d.$3(p,s,r.c)},
$ifU:1}
A.eR.prototype={
X(a){return this.a.$1(a)},
$ifU:1}
A.HB.prototype={
e0(a,b,c){var s=this.a
if(c?J.he(s,b):J.iv(s,b))this.aB()}}
A.Hz.prototype={
Jo(a,b){return new A.a03(this,a,b)},
Jn(a){return this.Jo(a,null)},
Y0(a){if(this.lt$.C(0,a))this.av(new A.a01())},
t6(a){if(this.lt$.u(0,a))this.av(new A.a02())}}
A.a03.prototype={
$1(a){var s=this.a,r=this.b
if(s.lt$.B(0,r)===a)return
if(a)s.Y0(r)
else s.t6(r)},
$S:25}
A.a01.prototype={
$0(){},
$S:0}
A.a02.prototype={
$0(){},
$S:0}
A.HE.prototype={}
A.uK.prototype={
gv(a){return J.o(this.a)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.S(b)!==A.A(this))return!1
return b instanceof A.uK&&J.f(b.a,this.a)}}
A.NO.prototype={}
A.HF.prototype={
gv(a){var s=this
return A.cE([s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as])},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.S(b)!==A.A(r))return!1
if(b instanceof A.HF)if(b.a==r.a)if(b.b==r.b)if(b.c==r.c)if(b.d==r.d)if(b.e==r.e)if(b.f==r.f)if(b.r==r.r)if(b.w==r.w)if(b.x===r.x)if(b.y==r.y)s=J.f(b.as,r.as)
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.NA.prototype={
X(a){var s,r=this,q=r.a,p=q==null?null:q.X(a)
q=r.b
s=q==null?null:q.X(a)
q=p==null
if(q&&s==null)return null
if(q){q=s.a
return A.aB(new A.cY(A.b3(0,q.gn(q)>>>16&255,q.gn(q)>>>8&255,q.gn(q)&255),0,B.aN,-1),s,r.c)}if(s==null){q=p.a
return A.aB(p,new A.cY(A.b3(0,q.gn(q)>>>16&255,q.gn(q)>>>8&255,q.gn(q)&255),0,B.aN,-1),r.c)}return A.aB(p,s,r.c)},
$ifU:1}
A.NP.prototype={}
A.oG.prototype={
gv(a){return J.o(this.a)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.S(b)!==A.A(this))return!1
return b instanceof A.oG&&J.f(b.a,this.a)}}
A.NQ.prototype={}
A.uX.prototype={
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.uX&&b.a==s.a&&J.f(b.b,s.b)&&b.c==s.c&&J.f(b.d,s.d)&&J.f(b.e,s.e)&&J.f(b.f,s.f)&&J.f(b.r,s.r)&&b.w==s.w&&b.x==s.x&&!0}}
A.O2.prototype={}
A.uY.prototype={
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.uY&&b.a==s.a&&J.f(b.b,s.b)&&b.c==s.c&&J.f(b.d,s.d)&&J.f(b.e,s.e)&&J.f(b.f,s.f)&&J.f(b.r,s.r)&&J.f(b.w,s.w)&&b.x==s.x&&b.y==s.y}}
A.O3.prototype={}
A.uZ.prototype={
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.uZ&&J.f(b.a,s.a)&&b.b==s.b&&J.f(b.c,s.c)&&J.f(b.d,s.d)&&J.f(b.e,s.e)&&J.f(b.f,s.f)&&b.r==s.r&&J.f(b.y,s.y)&&J.f(b.z,s.z)&&b.Q==s.Q&&b.as==s.as}}
A.O4.prototype={}
A.vd.prototype={
gv(a){return J.o(this.a)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.S(b)!==A.A(this))return!1
return b instanceof A.vd&&J.f(b.a,this.a)}}
A.Oh.prototype={}
A.m1.prototype={
glc(){return A.dS.prototype.glc.call(this)+"("+A.l(this.b.a)+")"},
gom(){return!0}}
A.uD.prototype={
gJk(a){return B.c3},
gYq(){return null},
gYr(){return null},
FX(a){var s
if(!(t.kU.b(a)&&!0))s=!1
else s=!0
return s},
YA(a,b,c){var s=null
return A.dy(s,this.eP.$1(a),!1,s,!0,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s)},
FV(a,b,c,d){return A.aG(a).f.qv(this,a,b,c,d,this.$ti.c)}}
A.y5.prototype={}
A.Ri.prototype={
K(a){var s=this
return new A.o2(s.c,new A.ae_(s),new A.ae0(s),new A.o2(new A.eN(s.d,new A.bi(A.a([],t.A),t.Q),0),new A.ae1(s),new A.ae2(s),s.f,null),null)}}
A.ae_.prototype={
$3(a,b,c){return new A.kR(b,c,!0,!1,null)},
$C:"$3",
$R:3,
$S:100}
A.ae0.prototype={
$3(a,b,c){return new A.kS(b,!0,!0,c,null)},
$C:"$3",
$R:3,
$S:101}
A.ae1.prototype={
$3(a,b,c){return new A.kR(b,c,!0,!0,null)},
$C:"$3",
$R:3,
$S:100}
A.ae2.prototype={
$3(a,b,c){return new A.kS(b,!0,!1,c,null)},
$C:"$3",
$R:3,
$S:101}
A.kR.prototype={
ag(){return new A.Rg(new A.wq($.bv()),$,$,B.m)}}
A.Rg.prototype={
gzw(){return!1},
mZ(){var s,r=this,q=r.a,p=q.f
if(p)s=B.cI
else{s=$.aq5()
s=new A.b1(q.c,s,A.n(s).h("b1<aJ.T>"))}r.hL$=s
p=p?$.aq6():$.aq7()
q=q.c
r.iw$=new A.b1(q,p,A.n(p).h("b1<aJ.T>"))
q.U(0,r.glU())
r.a.c.cv(r.glT())},
aA(){var s,r,q,p,o=this
o.mZ()
s=o.a
r=s.f
q=o.hL$
q===$&&A.b()
p=o.iw$
p===$&&A.b()
o.d=A.anB(s.c,q,r,p)
o.aM()},
aR(a){var s,r,q,p=this,o=p.a
if(a.f!==o.f||a.c!==o.c){o=a.c
o.H(0,p.glU())
o.bO(p.glT())
p.mZ()
o=p.d
o===$&&A.b()
o.m()
o=p.a
s=o.f
r=p.hL$
r===$&&A.b()
q=p.iw$
q===$&&A.b()
p.d=A.anB(o.c,r,s,q)}p.bc(a)},
m(){var s,r=this
r.a.c.H(0,r.glU())
r.a.c.bO(r.glT())
s=r.d
s===$&&A.b()
s.m()
r.aJ()},
K(a){var s=this.d
s===$&&A.b()
return A.amw(!0,this.a.d,this.lu$,B.AH,s)}}
A.kS.prototype={
ag(){return new A.Rh(new A.wq($.bv()),$,$,B.m)}}
A.Rh.prototype={
gzw(){return!1},
mZ(){var s,r=this,q=r.a,p=q.e
if(p){s=$.aq9()
s=new A.b1(q.c,s,A.n(s).h("b1<aJ.T>"))}else s=B.cI
r.hL$=s
p=p?$.aqa():$.aqb()
q=q.c
r.iw$=new A.b1(q,p,A.n(p).h("b1<aJ.T>"))
q.U(0,r.glU())
r.a.c.cv(r.glT())},
aA(){var s,r,q,p,o=this
o.mZ()
s=o.a
r=s.e
q=o.hL$
q===$&&A.b()
p=o.iw$
p===$&&A.b()
o.d=A.anC(s.c,q,r,p)
o.aM()},
aR(a){var s,r,q,p=this,o=p.a
if(a.e!==o.e||a.c!==o.c){o=a.c
o.H(0,p.glU())
o.bO(p.glT())
p.mZ()
o=p.d
o===$&&A.b()
o.m()
o=p.a
s=o.e
r=p.hL$
r===$&&A.b()
q=p.iw$
q===$&&A.b()
p.d=A.anC(o.c,r,s,q)}p.bc(a)},
m(){var s,r=this
r.a.c.H(0,r.glU())
r.a.c.bO(r.glT())
s=r.d
s===$&&A.b()
s.m()
r.aJ()},
K(a){var s=this.d
s===$&&A.b()
return A.amw(!0,this.a.f,this.lu$,B.AH,s)}}
A.j1.prototype={}
A.L7.prototype={
qv(a,b,c,d,e){return new A.Ri(c,d,!0,e,null)}}
A.Dq.prototype={
qv(a,b,c,d,e,f){return A.asD(a,b,c,d,e,f)}}
A.Id.prototype={
qv(a,b,c,d,e,f){var s=A.aG(b).r,r=B.eJ.i(0,a.a.CW.a?B.aw:s)
return(r==null?B.lN:r).qv(a,b,c,d,e,f)},
u8(a){var s=t.dM
return A.az(new A.aH(B.GP,new A.a1q(a),s),!0,s.h("bn.E"))},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.S(b)!==A.A(r))return!1
s=b instanceof A.Id
if(s&&!0)return!0
return s&&A.cM(r.u8(B.eJ),r.u8(B.eJ))},
gv(a){return A.cE(this.u8(B.eJ))}}
A.a1q.prototype={
$1(a){return this.a.i(0,a)},
$S:182}
A.zC.prototype={
a25(){var s,r=this,q=r.iw$
q===$&&A.b()
s=q.a
if(J.f(q.b.ac(0,s.gn(s)),1)){q=r.hL$
q===$&&A.b()
if(!J.f(q.gn(q),0)){q=r.hL$
q=J.f(q.gn(q),1)}else q=!0}else q=!1
s=r.lu$
if(q)s.sqn(!1)
else{r.gzw()
s.sqn(!1)}},
a24(a){switch(a.a){case 0:case 3:this.lu$.sqn(!1)
break
case 1:case 2:this.gzw()
this.lu$.sqn(!1)
break}}}
A.zA.prototype={
vk(a){this.aB()},
QH(a,b,c){var s,r,q,p,o
if(!this.r){s=this.w
s=s.gb_(s)!==B.T}else s=!1
if(s){s=this.w
s=$.aq8().ac(0,s.gn(s))
s.toString
r=s}else r=0
if(r>0){s=a.gby(a)
q=b.a
p=b.b
o=$.av().bd()
o.sai(0,A.b3(B.d.b0(255*r),0,0,0))
s.d0(new A.E(q,p,q+c.a,p+c.b),o)}},
rT(a,b,c,d){var s,r,q=this,p=q.w
switch(p.gb_(p)){case B.T:case B.H:return d.$2(a,b)
case B.aq:case B.af:break}q.QH(a,b,c)
p=q.z
s=q.x
r=s.a
A.ao9(p,s.b.ac(0,r.gn(r)),c)
r=q.as
r.saQ(0,a.oA(!0,b,p,new A.adY(q,d),r.a))},
m(){var s=this,r=s.w,q=s.gdZ()
r.H(0,q)
r.bO(s.gmY())
s.x.a.H(0,q)
s.y.H(0,q)
s.Q.saQ(0,null)
s.as.saQ(0,null)
s.dm()},
hp(a){var s,r,q,p,o=this
if(a.r===o.r){s=a.w
r=o.w
if(J.f(s.gn(s),r.gn(r))){s=a.x
r=s.a
q=o.x
p=q.a
if(J.f(s.b.ac(0,r.gn(r)),q.b.ac(0,p.gn(p)))){s=a.y
r=o.y
r=!J.f(s.gn(s),r.gn(r))
s=r}else s=!0}else s=!0}else s=!0
return s}}
A.adY.prototype={
$2(a,b){var s=this.a,r=s.Q
s=s.y
r.saQ(0,a.yT(b,B.d.b0(s.gn(s)*255),this.b,r.a))},
$S:10}
A.zB.prototype={
vk(a){this.aB()},
rT(a,b,c,d){var s,r,q=this,p=q.y
switch(p.gb_(p)){case B.T:case B.H:return d.$2(a,b)
case B.aq:case B.af:break}p=q.z
s=q.w
r=s.a
A.ao9(p,s.b.ac(0,r.gn(r)),c)
r=q.as
r.saQ(0,a.oA(!0,b,p,new A.adZ(q,d),r.a))},
hp(a){var s,r,q,p
if(a.r===this.r){s=a.x
r=this.x
if(J.f(s.gn(s),r.gn(r))){s=a.w
r=s.a
q=this.w
p=q.a
p=!J.f(s.b.ac(0,r.gn(r)),q.b.ac(0,p.gn(p)))
s=p}else s=!0}else s=!0
return s},
m(){var s,r=this
r.Q.saQ(0,null)
r.as.saQ(0,null)
s=r.gdZ()
r.w.a.H(0,s)
r.x.H(0,s)
r.y.bO(r.gmY())
r.dm()}}
A.adZ.prototype={
$2(a,b){var s=this.a,r=s.Q
s=s.x
r.saQ(0,a.yT(b,B.d.b0(s.gn(s)*255),this.b,r.a))},
$S:10}
A.Ok.prototype={}
A.Sc.prototype={}
A.Sd.prototype={}
A.vl.prototype={
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.S(b)!==A.A(r))return!1
if(b instanceof A.vl)if(J.f(b.a,r.a))if(J.f(b.b,r.b))if(b.c==r.c)if(J.f(b.d,r.d))if(J.f(b.e,r.e))if(J.f(b.f,r.f))if(b.r==r.r)s=!0
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.OV.prototype={}
A.Lb.prototype={
G(){return"_ActivityIndicatorType."+this.b}}
A.IB.prototype={}
A.LO.prototype={
aG(a,b){var s,r,q,p=this,o=$.av(),n=o.bd()
n.sai(0,p.c)
s=p.x
n.si2(s)
n.sdk(0,B.b_)
r=p.b
if(r!=null){q=o.bd()
q.sai(0,r)
q.si2(s)
q.sdk(0,B.b_)
a.li(new A.E(0,0,0+b.a,0+b.b),0,6.282185307179586,!1,q)}n.sAs(B.AJ)
a.li(new A.E(0,0,0+b.a,0+b.b),p.y,p.z,!1,n)},
hp(a){var s=this
return!J.f(a.b,s.b)||!a.c.k(0,s.c)||a.e!==s.e||a.f!==s.f||a.r!==s.r||a.w!==s.w||a.x!==s.x}}
A.ry.prototype={
ag(){return new A.LP(null,null,B.m)}}
A.LP.prototype={
aA(){var s,r=this
r.aM()
s=A.dY(null,B.EA,null,null,r)
r.d=s
r.a.toString
s.IY(0)},
aR(a){var s,r
this.bc(a)
this.a.toString
s=this.d
s===$&&A.b()
r=s.r
r=!(r!=null&&r.a!=null)
if(r)s.IY(0)},
m(){var s=this.d
s===$&&A.b()
s.m()
this.Or()},
Py(a,b,c,d,e){var s,r,q,p,o,n=null
A.aG(a)
s=new A.a9i(a,n,n,n,n,n)
this.a.toString
r=A.am1(a)
this.a.toString
q=s.gai(s)
p=A.am1(a).a
q=p==null?q:p
this.a.toString
p=c*3/2*3.141592653589793
o=Math.max(b*3/2*3.141592653589793-p,0.001)
r=A.aW(n,A.Dt(n,n,n,new A.LO(r.d,q,n,b,c,d,e,4,-1.5707963267948966+p+e*3.141592653589793*2+d*0.5*3.141592653589793,o,n),B.O),B.l,n,B.BS,n,n,n,n,n)
return A.dy(n,r,!1,n,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)},
Pw(){var s=this.d
s===$&&A.b()
return A.jF(s,new A.a9j(this),null)},
K(a){this.a.toString
switch(0){case 0:return this.Pw()}}}
A.a9j.prototype={
$2(a,b){var s,r,q,p=this.a,o=$.apU(),n=p.d
n===$&&A.b()
n=o.ac(0,n.gn(n))
o=$.apV()
s=p.d
s=o.ac(0,s.gn(s))
o=$.apS()
r=p.d
r=o.ac(0,r.gn(r))
o=$.apT()
q=p.d
return p.Py(a,n,s,r,o.ac(0,q.gn(q)))},
$S:24}
A.a9i.prototype={
gai(a){var s,r=this,q=r.r
if(q===$){s=A.aG(r.f)
r.r!==$&&A.bF()
q=r.r=s.ax}return q.b}}
A.zF.prototype={
m(){var s=this,r=s.d2$
if(r!=null)r.H(0,s.gkZ())
s.d2$=null
s.aJ()},
bY(){this.d7()
this.cu()
this.l_()}}
A.oT.prototype={
gv(a){var s=this
return A.Y(s.gai(s),s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.oT&&J.f(b.gai(b),s.gai(s))&&J.f(b.b,s.b)&&b.c==s.c&&J.f(b.d,s.d)&&J.f(b.e,s.e)},
gai(a){return this.a}}
A.OX.prototype={}
A.vo.prototype={
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,s.f,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.S(b)!==A.A(r))return!1
if(b instanceof A.vo)if(b.b==r.b)if(b.c==r.c)if(b.d==r.d)s=!0
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.P0.prototype={}
A.e6.prototype={
G(){return"_ScaffoldSlot."+this.b}}
A.vR.prototype={
ag(){var s=null
return new A.vS(A.fT(t.yp),A.iU(s,t.tT),A.iU(s,t.sL),s,s,B.m)}}
A.vS.prototype={
b4(){var s=this,r=s.c.a2(t.l).f,q=s.y
if(q===!0)if(!r.y){q=s.x
q=q!=null&&q.b==null}else q=!1
else q=!1
if(q)s.a0N(B.Ud)
s.y=r.y
s.cl()},
a0N(a){var s,r,q=this,p=null,o=q.r
if(o.b!==o.c){p.gb_(p)
s=!1}else s=!0
if(s)return
r=o.gM(o).b
o=q.y
o.toString
if(o){p.sn(0,0)
r.cg(0,a)}else p.fv(0).aS(new A.a3T(q,r,a),t.H)
o=q.x
if(o!=null)o.am(0)
q.x=null},
K(a){var s,r,q=this
q.y=a.a2(t.l).f.y
s=q.r
if(!s.gO(s)){r=A.a0w(a,t.X)
if(r==null||r.gjM())null.ga4h()}return new A.yH(q,q.a.c,null)},
m(){var s=this.x
if(s!=null)s.am(0)
this.x=null
this.O3()}}
A.a3T.prototype={
$1(a){var s=this.b
if((s.a.a&30)===0)s.cg(0,this.c)},
$S:22}
A.yH.prototype={
bQ(a){return this.f!==a.f}}
A.a3U.prototype={}
A.JC.prototype={
ZA(a,b){var s=a==null?this.a:a
return new A.JC(s,b==null?this.b:b)}}
A.Pz.prototype={
Fq(a,b,c){var s=this
s.b=c==null?s.b:c
s.c=s.c.ZA(a,b)
s.aB()},
Fp(a){return this.Fq(null,null,a)},
XK(a,b){return this.Fq(a,b,null)}}
A.xh.prototype={
k(a,b){var s=this
if(b==null)return!1
if(!s.L2(0,b))return!1
return b instanceof A.xh&&b.r===s.r&&b.e===s.e&&b.f===s.f},
gv(a){var s=this
return A.Y(A.aS.prototype.gv.call(s,s),s.r,s.e,s.f,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.Ly.prototype={
K(a){return this.c}}
A.acQ.prototype={
Iw(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=A.ah2(a7),a4=a7.a,a5=a3.zg(a4),a6=a7.b
if(a2.b.i(0,B.fh)!=null){s=a2.df(B.fh,a5).b
a2.dD(B.fh,B.k)
r=s}else{r=0
s=0}if(a2.b.i(0,B.kX)!=null){q=0+a2.df(B.kX,a5).b
p=Math.max(0,a6-q)
a2.dD(B.kX,new A.y(0,p))}else{q=0
p=null}if(a2.b.i(0,B.kW)!=null){q+=a2.df(B.kW,new A.aS(0,a5.b,0,Math.max(0,a6-q-r))).b
a2.dD(B.kW,new A.y(0,Math.max(0,a6-q)))}if(a2.b.i(0,B.fl)!=null){o=a2.df(B.fl,a5)
a2.dD(B.fl,new A.y(0,s))
if(!a2.ay)r+=o.b}else o=B.O
n=a2.f
m=Math.max(0,a6-Math.max(n.d,q))
if(a2.b.i(0,B.fg)!=null){l=Math.max(0,m-r)
k=a2.d
if(k)l=A.F(l+q,0,a3.d-r)
k=k?q:0
a2.df(B.fg,new A.xh(k,s,o.b,0,a5.b,0,l))
a2.dD(B.fg,new A.y(0,r))}if(a2.b.i(0,B.fj)!=null){a2.df(B.fj,new A.aS(0,a5.b,0,m))
a2.dD(B.fj,B.k)}k=a2.b.i(0,B.cC)!=null&&!a2.at?a2.df(B.cC,a5):B.O
if(a2.b.i(0,B.fk)!=null){j=a2.df(B.fk,new A.aS(0,a5.b,0,Math.max(0,m-r)))
a2.dD(B.fk,new A.y((a4-j.a)/2,m-j.b))}else j=B.O
i=A.bd("floatingActionButtonRect")
if(a2.b.i(0,B.fm)!=null){h=a2.df(B.fm,a3)
g=new A.a3U(h,j,m,n,a2.r,a7,k,a2.w)
f=a2.z.zO(g)
e=a2.as.JV(a2.y.zO(g),f,a2.Q)
a2.dD(B.fm,e)
d=e.a
c=e.b
i.b=new A.E(d,c,d+h.a,c+h.b)}if(a2.b.i(0,B.cC)!=null){d=a2.ax
b=d!=null&&d<a4
if(k.k(0,B.O)){a=a2.df(B.cC,b?a3:a5)
k=a}c=i.aC()
if(!new A.a5(c.c-c.a,c.d-c.b).k(0,B.O)&&a2.at){a0=i.aC().b
c=a0}else{a0=a2.at?Math.min(m,a6-a2.r.d):m
c=a0}if(b){d.toString
a1=(a4-d)/2}else a1=0
a2.dD(B.cC,new A.y(a1,c-k.b))}if(a2.b.i(0,B.fi)!=null){a2.df(B.fi,a5.ta(n.b))
a2.dD(B.fi,B.k)}if(a2.b.i(0,B.kY)!=null){a2.df(B.kY,A.rk(a7))
a2.dD(B.kY,B.k)}if(a2.b.i(0,B.kV)!=null){a2.df(B.kV,A.rk(a7))
a2.dD(B.kV,B.k)}a2.x.XK(p,i.aC())},
ml(a){var s=this
return!a.f.k(0,s.f)||!a.r.k(0,s.r)||a.w!==s.w||a.Q!==s.Q||a.y!==s.y||a.z!==s.z||a.d!==s.d||!1}}
A.xD.prototype={
ag(){return new A.xE(null,null,B.m)}}
A.xE.prototype={
aA(){var s,r,q=this
q.aM()
s=A.dY(null,B.aG,null,null,q)
s.bm()
r=s.aU$
r.b=!0
r.a.push(q.gTb())
q.d=s
q.E9()
q.a.f.Fp(0)},
m(){var s=this.d
s===$&&A.b()
s.m()
this.Ot()},
aR(a){var s,r=this
r.bc(a)
s=r.a
if(a.e!==s.e||a.d!==s.d)r.E9()
r.a.toString
return},
E9(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.d
b===$&&A.b()
s=A.ef(B.cO,b,c)
b=t.a7
r=A.ef(B.cO,d.d,c)
q=A.ef(B.cO,d.a.r,c)
p=d.a
o=p.r
n=$.apY()
m=t.m
m.a(o)
p=p.d
m.a(p)
l=t.zD.h("b1<aJ.T>")
k=t.A
j=t.Q
i=t.i
h=A.amW(new A.eN(new A.b1(p,new A.iC(new A.tD(B.mC)),l),new A.bi(A.a([],k),j),0),new A.b1(p,new A.iC(B.mC),l),p,0.5,i)
p=d.a.d
g=$.aq1()
m.a(p)
f=$.aq2()
e=A.amW(new A.b1(p,g,g.$ti.h("b1<aJ.T>")),new A.eN(new A.b1(p,f,A.n(f).h("b1<aJ.T>")),new A.bi(A.a([],k),j),0),p,0.5,i)
d.e=A.ak9(h,s,i)
i=A.ak9(h,q,i)
d.r=i
d.w=new A.b1(m.a(i),new A.iC(B.Fp),l)
d.f=A.aim(new A.b1(r,new A.aO(1,1,b),b.h("b1<aJ.T>")),e,c)
d.x=A.aim(new A.b1(o,n,n.$ti.h("b1<aJ.T>")),e,c)
n=d.r
o=d.gV_()
n.bm()
n=n.aY$
n.b=!0
n.a.push(o)
n=d.e
n.bm()
n=n.aY$
n.b=!0
n.a.push(o)},
Tc(a){this.av(new A.aa4(this,a))},
K(a){var s,r,q=this,p=A.a([],t.E),o=q.d
o===$&&A.b()
o=o.Q
o===$&&A.b()
if(o!==B.H){o=q.e
s=q.y
o===$&&A.b()
r=q.f
r===$&&A.b()
p.push(A.amk(A.amf(s,r),o))}o=q.a
s=q.r
o=o.c
s===$&&A.b()
r=q.x
r===$&&A.b()
p.push(A.amk(A.amf(o,r),s))
return A.i0(B.cD,p,B.J,B.b2)},
V0(){var s,r,q=this.e
q===$&&A.b()
s=q.a
s=s.gn(s)
q=q.b
q=q.gn(q)
q=Math.min(A.kY(s),A.kY(q))
s=this.r
s===$&&A.b()
r=s.a
r=r.gn(r)
s=s.b
s=s.gn(s)
s=Math.max(q,Math.min(A.kY(r),A.kY(s)))
this.a.f.Fp(s)}}
A.aa4.prototype={
$0(){if(this.b===B.H)this.a.a.toString},
$S:0}
A.vQ.prototype={
ag(){var s=null,r=t.rG,q=t.T,p=$.bv()
return new A.p7(new A.bw(s,r),new A.bw(s,r),new A.bw(s,q),new A.vH(!1,p),new A.vH(!1,p),A.a([],t.pc),new A.bw(s,q),B.q,s,A.u(t.wb,t.M),s,!0,s,s,s,B.m)}}
A.p7.prototype={
gcq(){this.a.toString
return null},
hZ(a,b){var s=this
s.lZ(s.w,"drawer_open")
s.lZ(s.x,"end_drawer_open")},
XF(){var s,r=this,q=r.y.r
if(!q.gO(q)){q=r.y.r
s=q.gM(q)}else s=null
if(r.z!=s)r.av(new A.a3W(r,s))},
Xx(){var s,r=this,q=r.y.e
if(!q.gO(q)){q=r.y.e
s=q.gM(q)}else s=null
if(r.Q!=s)r.av(new A.a3V(r,s))},
Uq(){this.a.toString},
Tz(){var s,r=this.c
r.toString
s=A.a2_(r)
if(s!=null&&s.d.length!==0)s.fW(0,B.E8,B.dI)},
gkR(){this.a.toString
return!0},
aA(){var s,r=this,q=null
r.aM()
s=r.c
s.toString
r.dx=new A.Pz(s,B.SX,$.bv())
r.a.toString
r.cy=B.lR
r.CW=B.Dc
r.cx=B.lR
r.ch=A.dY(q,new A.aK(4e5),q,1,r)
r.db=A.dY(q,B.aG,q,q,r)},
aR(a){this.O6(a)
this.a.toString},
b4(){var s,r,q=this,p=q.c.a2(t.Cu),o=p==null?null:p.f,n=q.y,m=n==null
if(!m)s=o==null||n!==o
else s=!1
if(s)if(!m)n.d.u(0,q)
q.y=o
if(o!=null){n=o.d
n.C(0,q)
r=q.c.jI(t.yp)
if(r==null||!n.B(0,r)){n=o.r
if(!n.gO(n))q.XF()
n=o.e
if(!n.gO(n))q.Xx()}}q.Uq()
q.O5()},
m(){var s=this,r=s.dx
r===$&&A.b()
r.m()
r=s.ch
r===$&&A.b()
r.m()
r=s.db
r===$&&A.b()
r.m()
r=s.y
if(r!=null)r.d.u(0,s)
s.w.m()
s.x.m()
s.O7()},
u3(a,b,c,d,e,f,g,h,i){var s=this.c.a2(t.l).f.IU(f,g,h,i)
if(e)s=s.a2W(!0)
if(d&&s.e.d!==0)s=s.Gk(s.f.wz(s.r.d))
if(b!=null)a.push(A.a_H(new A.f5(s,b,null),c))},
Pc(a,b,c,d,e,f,g,h){return this.u3(a,b,c,!1,d,e,f,g,h)},
mC(a,b,c,d,e,f,g){return this.u3(a,b,c,!1,!1,d,e,f,g)},
Bg(a,b,c,d,e,f,g,h){return this.u3(a,b,c,d,!1,e,f,g,h)},
BA(a,b){this.a.toString},
Bz(a,b){this.a.toString},
K(a){var s,r,q,p,o,n,m,l,k,j=this,i=null,h={},g=a.a2(t.l).f,f=A.aG(a),e=a.a2(t.I)
e.toString
s=e.w
r=A.a([],t.fd)
e=j.a.f
j.gkR()
j.Pc(r,new A.Ly(new A.iQ(e,j.f),!1,!1,i),B.fg,!0,!1,!1,!1,!0)
if(j.dy)j.mC(r,new A.uN(j.fr,!1,i,!0,i,i),B.fj,!0,!0,!0,!0)
e=j.a
e=j.r=A.arO(a,e.e.go)+g.f.b
q=j.a.e
j.mC(r,new A.fD(new A.aS(0,1/0,0,e),new A.tC(1,e,e,e,i,q,i),i),B.fh,!0,!1,!1,!1)
h.a=!1
h.b=null
if(j.at!=null||j.as.length!==0){e=A.az(j.as,!0,t.cl)
q=j.at
if(q!=null)e.push(q.a)
p=A.i0(B.l2,e,B.J,B.b2)
j.gkR()
j.mC(r,p,B.fk,!0,!1,!1,!0)}e=j.z
if(e!=null){e.a.ga44()
h.a=!1
e=j.z
if(e!=null){e=e.a
e.gbC(e)}h.b=f.dc.w
e=j.z
e=e==null?i:e.a
j.a.toString
j.gkR()
j.Bg(r,e,B.cC,!1,!1,!1,!1,!0)}h.c=!1
if(j.Q!=null){a.a2(t.rg)
e=A.aG(a)
o=e.rx.f
h.c=(o==null?0:o)!==0
e=j.Q
e=e==null?i:e.a
j.a.toString
j.gkR()
j.Bg(r,e,B.fl,!1,!0,!1,!1,!0)}j.a.toString
e=j.ch
e===$&&A.b()
q=j.CW
q===$&&A.b()
n=j.dx
n===$&&A.b()
m=j.db
m===$&&A.b()
j.mC(r,new A.xD(i,e,q,n,m,i),B.fm,!0,!0,!0,!0)
switch(f.r.a){case 2:case 4:j.mC(r,A.YD(B.at,i,B.aF,!0,i,i,i,i,i,i,i,i,i,i,j.gTy(),i,i,i,i,i,i),B.fi,!0,!1,!1,!0)
break
case 0:case 1:case 3:case 5:break}e=j.x
q=e.y
if(q==null?A.n(e).h("bX.T").a(q):q){j.Bz(r,s)
j.BA(r,s)}else{j.BA(r,s)
j.Bz(r,s)}j.gkR()
e=g.e.d
l=g.f.wz(e)
j.gkR()
e=e!==0?0:i
k=g.r.wz(e)
if(l.d<=0)j.a.toString
e=j.a.ch
return new A.PA(!1,new A.vZ(A.FR(B.aG,A.jF(j.ch,new A.a3X(h,j,!1,l,k,s,r),i),B.l,e,0,i,i,i,i,i,B.ck),i),i)}}
A.a3W.prototype={
$0(){this.a.z=this.b},
$S:0}
A.a3V.prototype={
$0(){this.a.Q=this.b},
$S:0}
A.a3X.prototype={
$2(a,b){var s,r,q,p,o,n,m,l=this,k=A.aX([B.B0,new A.Ms(a,new A.bi(A.a([],t.B8),t.dc))],t.n,t.nT),j=l.b
j.a.toString
s=j.cy
s.toString
r=j.ch
r===$&&A.b()
r=r.x
r===$&&A.b()
q=j.CW
q===$&&A.b()
p=j.dx
p===$&&A.b()
j=j.cx
j.toString
o=l.a
n=o.a
m=o.c
return A.SQ(k,new A.rY(new A.acQ(l.c,!1,l.d,l.e,l.f,p,j,s,r,q,n,o.b,m),l.r,null))},
$S:184}
A.Ms.prototype={
hR(a,b){var s=this.e,r=A.vT(s).w,q=r.y
if(!(q==null?A.n(r).h("bX.T").a(q):q)){s=A.vT(s).x
r=s.y
s=r==null?A.n(s).h("bX.T").a(r):r}else s=!0
return s},
cO(a){var s=this.e
A.vT(s).a.toString
A.vT(s).a.toString}}
A.PA.prototype={
bQ(a){return this.f!==a.f}}
A.acR.prototype={
$2(a,b){if(!a.a)a.H(0,b)},
$S:38}
A.yI.prototype={
bY(){this.d7()
this.cu()
this.ef()},
m(){var s=this,r=s.ak$
if(r!=null)r.H(0,s.gdQ())
s.ak$=null
s.aJ()}}
A.yJ.prototype={
bY(){this.d7()
this.cu()
this.ef()},
m(){var s=this,r=s.ak$
if(r!=null)r.H(0,s.gdQ())
s.ak$=null
s.aJ()}}
A.yK.prototype={
aR(a){this.bc(a)
this.nR()},
b4(){var s,r,q,p,o=this
o.cl()
s=o.be$
r=o.gm2()
q=o.c
q.toString
q=A.p4(q)
o.eN$=q
p=o.kX(q,r)
if(r){o.hZ(s,o.dr$)
o.dr$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.eM$.Y(0,new A.acR())
s=r.be$
if(s!=null)s.m()
r.be$=null
r.O4()}}
A.zH.prototype={
bY(){this.d7()
this.cu()
this.ef()},
m(){var s=this,r=s.ak$
if(r!=null)r.H(0,s.gdQ())
s.ak$=null
s.aJ()}}
A.JI.prototype={
K(a){var s=this,r=null
if(A.aG(a).r===B.aw)return new A.nX(8,B.dj,s.c,s.d,!1,B.SN,3,r,B.Ey,B.Eu,B.aR,A.A6(),r,r,r)
return new A.qh(r,r,s.c,s.d,r,r,r,r,B.c3,B.cP,B.r,A.A6(),r,r,r)}}
A.qh.prototype={
ag(){return new A.NK(new A.bw(null,t.T),null,null,B.m)}}
A.NK.prototype={
gkj(){var s=this,r=s.a.e
if(r==null){r=s.fr
r===$&&A.b()
r=r.a
r=r==null?null:r.X(s.gn4())}if(r==null){r=s.fr
r===$&&A.b()
r=r.e}return r==null?!1:r},
gjB(){this.a.toString
var s=this.fr
s===$&&A.b()
s=s.f
if(s==null){s=this.fx
s===$&&A.b()
s=!s}return s},
gqb(){return new A.eR(new A.abw(this),t.mz)},
gn4(){var s=A.aE(t.BD)
if(this.db)s.C(0,B.ya)
if(this.dx)s.C(0,B.bK)
return s},
gX9(){var s,r,q,p,o,n,m,l=this,k=l.dy
k===$&&A.b()
s=k.db
r=A.bd("dragColor")
q=A.bd("hoverColor")
p=A.bd("idleColor")
switch(k.a.a){case 1:k=s.a
o=k>>>16&255
n=k>>>8&255
k&=255
r.b=A.b3(153,o,n,k)
q.b=A.b3(B.d.b0(127.5),o,n,k)
m=l.fx
m===$&&A.b()
if(m){k=l.c
k.toString
k=A.aG(k).cy.a
k=A.b3(255,k>>>16&255,k>>>8&255,k&255)}else k=A.b3(B.d.b0(25.5),o,n,k)
p.b=k
break
case 0:k=s.a
o=k>>>16&255
n=k>>>8&255
k&=255
r.b=A.b3(191,o,n,k)
q.b=A.b3(166,o,n,k)
m=l.fx
m===$&&A.b()
if(m){k=l.c
k.toString
k=A.aG(k).cy.a
k=A.b3(255,k>>>16&255,k>>>8&255,k&255)}else k=A.b3(B.d.b0(76.5),o,n,k)
p.b=k
break}return new A.eR(new A.abt(l,r,q,p),t.qn)},
gXh(){var s=this.dy
s===$&&A.b()
return new A.eR(new A.abv(this,s.a,s.db),t.qn)},
gXg(){var s=this.dy
s===$&&A.b()
return new A.eR(new A.abu(this,s.a,s.db),t.qn)},
gX8(){return new A.eR(new A.abs(this),t.jj)},
aA(){var s,r=this
r.AU()
s=r.cy=A.dY(null,B.aG,null,null,r)
s.bm()
s=s.aY$
s.b=!0
s.a.push(new A.abC(r))},
b4(){var s,r=this,q=r.c
q.toString
s=A.aG(q)
r.dy=s.ax
q=r.c
q.a2(t.v_)
q=A.aG(q)
r.fr=q.w
switch(s.r.a){case 0:r.fx=!0
break
case 2:case 3:case 1:case 4:case 5:r.fx=!1
break}r.MF()},
oR(){var s,r=this,q=r.at
q===$&&A.b()
q.sai(0,r.gX9().a.$1(r.gn4()))
q.sJj(r.gXh().a.$1(r.gn4()))
q.sJi(r.gXg().a.$1(r.gn4()))
s=r.c.a2(t.I)
s.toString
q.sbB(s.w)
q.szf(r.gX8().a.$1(r.gn4()))
s=r.a.w
if(s==null){s=r.fr
s===$&&A.b()
s=s.r}if(s==null){s=r.fx
s===$&&A.b()
s=s?null:B.SM}q.soB(s)
s=r.fr
s===$&&A.b()
s=s.z
if(s==null){s=r.fx
s===$&&A.b()
s=s?0:2}q.swH(s)
s=r.fr.Q
q.sy5(s==null?0:s)
s=r.fr.as
q.syd(0,s==null?48:s)
q.sd3(0,r.c.a2(t.l).f.f)
q.stv(r.a.dx)
q.sHx(!r.gjB())},
ri(a){this.AT(a)
this.av(new A.abB(this))},
rh(a,b){this.AS(a,b)
this.av(new A.abA(this))},
xy(a){var s,r=this
r.MG(a)
if(r.HV(a.gbq(a),a.gc4(a),!0)){r.av(new A.aby(r))
s=r.cy
s===$&&A.b()
s.cA(0)}else if(r.dx){r.av(new A.abz(r))
s=r.cy
s===$&&A.b()
s.fv(0)}},
xz(a){var s,r=this
r.MH(a)
r.av(new A.abx(r))
s=r.cy
s===$&&A.b()
s.fv(0)},
m(){var s=this.cy
s===$&&A.b()
s.m()
this.AR()}}
A.abw.prototype={
$1(a){var s,r
if(a.B(0,B.bK)){s=this.a
s.a.toString
s=s.fr
s===$&&A.b()
s=s.d===!0}else s=!1
if(s)return!0
s=this.a
r=s.a.as
s=s.fr
s===$&&A.b()
s=s.c
s=s==null?null:s.X(a)
return s==null?!1:s},
$S:186}
A.abt.prototype={
$1(a){var s,r,q,p=this,o=null
if(a.B(0,B.ya)){s=p.a.fr
s===$&&A.b()
s=s.w
s=s==null?o:s.X(a)
return s==null?p.b.aC():s}s=p.a
if(s.gqb().a.$1(a)){s=s.fr
s===$&&A.b()
s=s.w
s=s==null?o:s.X(a)
return s==null?p.c.aC():s}r=s.fr
r===$&&A.b()
r=r.w
r=r==null?o:r.X(a)
if(r==null)r=p.d.aC()
q=s.fr.w
q=q==null?o:q.X(a)
if(q==null)q=p.c.aC()
s=s.cy
s===$&&A.b()
s=s.x
s===$&&A.b()
s=A.t(r,q,s)
s.toString
return s},
$S:54}
A.abv.prototype={
$1(a){var s=this.a
if(s.gkj()&&s.gqb().a.$1(a)){s=s.fr
s===$&&A.b()
s=s.x
s=s==null?null:s.X(a)
if(s==null){s=this.c.a
s=this.b===B.a1?A.b3(8,s>>>16&255,s>>>8&255,s&255):A.b3(13,s>>>16&255,s>>>8&255,s&255)}return s}return B.ag},
$S:54}
A.abu.prototype={
$1(a){var s=this.a
if(s.gkj()&&s.gqb().a.$1(a)){s=s.fr
s===$&&A.b()
s=s.y
s=s==null?null:s.X(a)
if(s==null){s=this.c.a
s=this.b===B.a1?A.b3(B.d.b0(25.5),s>>>16&255,s>>>8&255,s&255):A.b3(64,s>>>16&255,s>>>8&255,s&255)}return s}return B.ag},
$S:54}
A.abs.prototype={
$1(a){var s,r
if(a.B(0,B.bK)&&this.a.gqb().a.$1(a)){s=this.a
r=s.a.id
s=s.fr
s===$&&A.b()
s=s.b
s=s==null?null:s.X(a)
return s==null?12:s}s=this.a
r=s.a.x
if(r==null){r=s.fr
r===$&&A.b()
r=r.b
r=r==null?null:r.X(a)}if(r==null){s=s.fx
s===$&&A.b()
r=8/(s?2:1)
s=r}else s=r
return s},
$S:188}
A.abC.prototype={
$0(){this.a.oR()},
$S:0}
A.abB.prototype={
$0(){this.a.db=!0},
$S:0}
A.abA.prototype={
$0(){this.a.db=!1},
$S:0}
A.aby.prototype={
$0(){this.a.dx=!0},
$S:0}
A.abz.prototype={
$0(){this.a.dx=!1},
$S:0}
A.abx.prototype={
$0(){this.a.dx=!1},
$S:0}
A.w5.prototype={
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.w5&&b.a==s.a&&b.b==s.b&&b.c==s.c&&b.d==s.d&&b.e==s.e&&b.f==s.f&&J.f(b.r,s.r)&&b.w==s.w&&b.x==s.x&&b.y==s.y&&b.z==s.z&&b.Q==s.Q&&b.as==s.as}}
A.PE.prototype={}
A.w6.prototype={
gv(a){return A.Y(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.S(b)!==A.A(this))return!1
return b instanceof A.w6&&J.f(b.a,this.a)&&!0}}
A.PF.prototype={}
A.wl.prototype={
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,s.r,s.f,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,s.CW,s.cx,A.Y(s.cy,s.db,s.dx,s.dy,s.fr,s.fx,s.fy,s.go,s.id,s.k1,s.k2,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a))},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.S(b)!==A.A(r))return!1
if(b instanceof A.wl)if(b.a==r.a)if(J.f(b.b,r.b))if(J.f(b.c,r.c))if(J.f(b.d,r.d))if(J.f(b.e,r.e))if(J.f(b.r,r.r))if(J.f(b.f,r.f))if(J.f(b.w,r.w))if(J.f(b.x,r.x))if(J.f(b.y,r.y))if(J.f(b.z,r.z))if(J.f(b.Q,r.Q))if(J.f(b.as,r.as))if(J.f(b.at,r.at))if(J.f(b.ax,r.ax))if(J.f(b.ay,r.ay))if(J.f(b.go,r.go))if(b.id==r.id)s=!0
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.PV.prototype={}
A.pq.prototype={
G(){return"SnackBarClosedReason."+this.b}}
A.wp.prototype={
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,null,s.z,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.S(b)!==A.A(r))return!1
if(b instanceof A.wp)if(J.f(b.a,r.a))if(J.f(b.b,r.b))if(J.f(b.c,r.c))if(J.f(b.d,r.d))if(b.e==r.e)if(J.f(b.f,r.f))if(b.w==r.w)if(J.f(b.x,r.x))s=J.f(b.z,r.z)
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.Q1.prototype={}
A.wD.prototype={
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,s.f,s.r,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.wD&&b.a==s.a&&b.b==s.b&&b.e==s.e&&b.f==s.f&&!0}}
A.Qh.prototype={}
A.py.prototype={
gv(a){var s=this
return A.Y(s.a,s.grm(),s.c,s.gx6(),s.gog(),s.f,s.goh(),s.gzp(),s.goO(),s.giQ(),s.ghq(),s.Q,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.py&&J.f(b.a,s.a)&&J.f(b.grm(),s.grm())&&b.c==s.c&&J.f(b.gx6(),s.gx6())&&J.f(b.gog(),s.gog())&&J.f(b.f,s.f)&&J.f(b.goh(),s.goh())&&J.f(b.gzp(),s.gzp())&&J.f(b.goO(),s.goO())&&b.giQ()==s.giQ()&&b.ghq()==s.ghq()&&!0},
grm(){return this.b},
gx6(){return this.d},
gog(){return this.e},
goh(){return this.r},
gzp(){return this.w},
goO(){return this.x},
giQ(){return this.y},
ghq(){return this.z}}
A.Qm.prototype={}
A.Kp.prototype={
gbD(a){return this.a},
BG(a,b,c){var s,r,q=this,p=q.d
if(a===p||q.c<2)return
q.e=p
q.d=a
p=c!=null&&c.a>0
s=q.a
r=q.f+1
if(p){q.f=r
q.aB()
p=q.d
b.toString
s.z=B.ap
s.kv(p,b,c).Jt(new A.a7o(q))}else{q.f=r
s.sn(0,a);--q.f
q.aB()}},
BF(a){return this.BG(a,null,null)},
shc(a,b){var s,r=this.a,q=r.x
q===$&&A.b()
s=this.d
if(b===q-s)return
r.sn(0,b+s)},
gp(a){return this.c}}
A.a7o.prototype={
$0(){var s=this.a;--s.f
s.aB()},
$S:0}
A.ky.prototype={
c_(a,b){var s,r
if(a instanceof A.ky){s=A.aB(a.b,this.b,b)
r=A.df(a.c,this.c,b)
r.toString
return new A.ky(null,s,r)}return this.AD(a,b)},
c0(a,b){var s,r
if(a instanceof A.ky){s=A.aB(this.b,a.b,b)
r=A.df(this.c,a.c,b)
r.toString
return new A.ky(null,s,r)}return this.AE(a,b)},
qF(a){return new A.adE(this,this.a,a)},
pD(a,b){var s=this.c.X(b).wN(a),r=s.a,q=this.b.b,p=s.d-q
return new A.E(r,p,r+(s.c-r),p+q)},
tk(a,b){var s,r=this.a
if(r!=null){s=$.av().cJ()
s.hz(r.d5(this.pD(a,b)))
return s}r=$.av().cJ()
r.nf(this.pD(a,b))
return r}}
A.adE.prototype={
ov(a,b,c){var s,r,q,p=c.e,o=b.a,n=b.b,m=new A.E(o,n,o+p.a,n+p.b)
p=c.d
p.toString
o=this.c
n=this.b
s=n.b
if(o!=null){r=$.av().bd()
r.sai(0,s.a)
q=n.pD(m,p).dw(s.b/4)
p=o.a
n=o.b
s=o.d
a.dq(A.a27(q,o.c,s,p,n),r)}else{r=s.hl()
r.sAs(B.AJ)
q=n.pD(m,p).dw(-(s.b/2))
p=q.d
a.jA(new A.y(q.a,p),new A.y(q.c,p),r)}}}
A.wH.prototype={
G(){return"TabBarIndicatorSize."+this.b}}
A.wF.prototype={
Px(){var s=null,r=A.bC(this.c,s,B.UD,!1,s,s,s)
return r},
K(a){var s=this.Px()
return A.dO(A.nL(s,null,1),46,null)},
gt0(){return B.Ua}}
A.Qp.prototype={
K(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
A.aG(a)
s=A.aG(a).el
r=A.ado(a)
q=t.m.a(h.c)
p=h.e
o=s.r
if(o==null){o=r.goh()
o.toString}n=o.Gh(!0)
o=s.x
p=o==null?p:o
if(p==null){p=r.goO()
p.toString}m=p.Gh(!0)
p=h.r
if(p){o=A.bc(n,m,q.gn(q))
o.toString
l=o}else{o=A.bc(m,n,q.gn(q))
o.toString
l=o}k=s.e
if(k==null)k=r.gog()
j=s.w
if(j==null)j=A.b3(178,k.gn(k)>>>16&255,k.gn(k)>>>8&255,k.gn(k)&255)
if(p){p=A.t(k,j,q.gn(q))
p.toString
i=p}else{p=A.t(j,k,q.gn(q))
p.toString
i=p}p=l.h0(i)
return A.t3(A.tT(h.y,new A.ct(24,g,g,g,g,i,g,g)),g,B.cy,!0,p,g,g,B.aL)}}
A.Qo.prototype={
bx(){var s,r,q,p,o=this
o.ML()
s=o.aw$
r=A.a([],t.zp)
for(q=t.uc;s!=null;){p=s.e
p.toString
q.a(p)
r.push(p.a.a)
s=p.an$}switch(o.aj.a){case 0:B.b.rq(r,0,o.k3.a)
break
case 1:r.push(o.k3.a)
break}q=o.aj
q.toString
p=o.k3.a
o.fh.$3(r,q,p)}}
A.Qn.prototype={
aD(a){var s=this,r=null,q=s.tm(a)
q.toString
q=new A.Qo(s.ax,s.e,s.f,s.r,s.w,q,s.y,r,B.l,A.au(),A.b_(4,A.a7U(r,r,r,r,r,B.bu,B.ae,r,1,B.aL),!1,t.dY),!0,0,r,r,A.au())
q.aE()
q.I(0,r)
return q},
aF(a,b){this.LM(a,b)
b.fh=this.ax}}
A.xO.prototype={
ap(){this.Q=!0},
Hz(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
switch(i.x.a){case 0:s=i.w
r=s[b+1]
q=s[b]
break
case 1:s=i.w
r=s[b]
q=s[b+1]
break
default:r=null
q=null}if(i.d===B.AL){s=i.f[b]
s=$.ap.J$.z.i(0,s)
p=(q-r-s.gct(s).a)/2
r+=p
q-=p}o=i.e
s=r+(q-r)
n=0+a.b
m=new A.E(r,0,s,n)
l=o.gca()
k=o.gb6(o)
j=o.gb9(o)
if(!(s-r>=l&&n-0>=k+j))throw A.d(A.tG("indicatorPadding insets should be less than Tab Size\nRect Size : "+m.gct(m).j(0)+", Insets: "+o.j(0)))
return o.wN(m)},
aG(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
g.Q=!1
if(g.z==null)g.z=g.c.qF(g.gdB())
s=g.b
r=s.d
s=s.gbD(s).x
s===$&&A.b()
q=r>s
p=q?B.d.eQ(s):B.d.eh(s)
o=B.f.hB(p,0,g.w.length-2)
p=q?o+1:o-1
n=B.d.hB(p,0,g.w.length-2)
s=g.y=A.am5(g.Hz(b,o),g.Hz(b,n),Math.abs(s-o))
p=s.c
m=s.a
l=s.d
s=s.b
k=g.x
j=g.r
if(j!=null){i=$.av().bd()
i.sai(0,j)
i.si2(1)
j=b.b
a.jA(new A.y(0,j),new A.y(b.a,j),i)}j=g.z
j.toString
h=g.y
j.ov(a,new A.y(h.a,h.b),new A.ol(f,f,f,k,new A.a5(p-m,l-s),f))},
hp(a){var s=this
return s.Q||s.b!==a.b||!s.c.k(0,a.c)||s.f.length!==a.f.length||!A.cM(s.w,a.w)||s.x!=a.x}}
A.LK.prototype={
gaH(a){var s=this.a
s=s.gbD(s)
s.toString
return s},
bO(a){var s=this.a
if(s.gbD(s)!=null)this.Ax(a)},
H(a,b){var s=this.a
if(s.gbD(s)!=null)this.Aw(0,b)},
gn(a){return A.ayR(this.a)}}
A.pZ.prototype={
gaH(a){var s=this.a
s=s.gbD(s)
s.toString
return s},
bO(a){var s=this.a
if(s.gbD(s)!=null)this.Ax(a)},
H(a,b){var s=this.a
if(s.gbD(s)!=null)this.Aw(0,b)},
gn(a){var s=this.a,r=s.gbD(s).x
r===$&&A.b()
return A.F(Math.abs(A.F(r,0,s.c-1)-this.b),0,1)}}
A.ade.prototype={}
A.wG.prototype={
ga3m(){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q){p=s[q]
if(p.gt0().b===72)return!0}return!1},
ag(){return new A.zd(B.m)}}
A.zd.prototype={
aA(){var s,r
this.aM()
s=this.a.c
r=A.an(s).h("aH<1,eh<am<ac>>>")
this.x=A.az(new A.aH(s,new A.adj(),r),!0,r.h("bn.E"))},
RE(){var s,r,q=this,p=null,o=q.c
o.toString
A.aG(o)
o=q.c
o.toString
o=A.aG(o)
s=q.c
s.toString
A.ado(s)
q.a.toString
o=o.el.a
if(o!=null)return o
r=A.aG(s).dy
q.a.toString
o=r.gn(r)
s=q.c.r4(t.xT)
if(s==null)s=p
else{s=s.S
s=s==null?p:s.gn(s)}s=o===s
o=s
if(o)r=B.j
q.a.toString
return new A.ky(p,new A.cY(r,2,B.aN,-1),B.aS)},
gky(){var s=this.e
return(s==null?null:s.gbD(s))!=null},
n7(){var s,r=this,q=r.a.d
if(q===r.e)return
if(r.gky()){s=r.e
s.gbD(s).H(0,r.gjj())
r.e.H(0,r.gv_())}r.e=q
s=q.gbD(q)
s.bm()
s=s.aY$
s.b=!0
s.a.push(r.gjj())
r.e.U(0,r.gv_())
r.r=r.e.d},
v6(){var s,r,q,p,o=this,n=o.c
n.toString
A.aG(n)
n=o.c
n.toString
A.aG(n)
n=o.c
n.toString
A.ado(n)
if(!o.gky())n=null
else{n=o.e
n.toString
s=o.RE()
r=o.a.Q
q=o.x
q===$&&A.b()
p=o.f
n=new A.xO(n,s,r,B.aS,q,null,n.gbD(n))
if(p!=null){s=p.w
p=p.x
n.w=s
n.x=p}}o.f=n},
b4(){this.cl()
this.n7()
this.v6()},
aR(a){var s,r,q,p,o,n,m,l=this
l.bc(a)
s=l.a
if(s.d!==a.d){l.n7()
l.v6()
s=l.d
if(s!=null){r=B.b.gb2(s.d)
if(r instanceof A.ade)r.J=!0}}else{if(s.Q===a.Q)if(B.aS.k(0,B.aS)){l.a.toString
s=!1}else s=!0
else s=!0
if(s)l.v6()}s=l.a.c.length
q=l.x
q===$&&A.b()
p=q.length
if(s>p){o=s-p
n=J.ahE(o,t.uY)
for(s=t.T,m=0;m<o;++m)n[m]=new A.bw(null,s)
B.b.I(q,n)}else if(s<p)B.b.a2T(q,s,p)},
m(){var s=this,r=s.f.z
if(r!=null)r.m()
if(s.gky()){r=s.e
r.gbD(r).H(0,s.gjj())
s.e.H(0,s.gv_())}s.e=null
s.aJ()},
uZ(){if(this.e.f===0)this.a.toString},
TB(){var s=this,r=s.e.d
if(r!==s.r){s.r=r
s.a.toString}s.av(new A.adf())},
Wk(a,b,c){var s
this.w=c
s=this.f
if(s!=null){s.w=a
s.x=b}},
mH(a,b,c){var s=null
this.a.toString
return A.ane(c,a,s,s,b,s,s)},
K(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=A.FO(a7,B.dw,t.z4)
a6.toString
if(a4.e.c===0){a4.a.toString
return A.aW(a5,a5,B.l,a5,a5,a5,48,a5,a5,a5)}A.aG(a7)
s=A.aG(a7).el
r=A.ado(a7)
q=A.alw(a4.a.c.length,new A.adg(a4,s),t.cl)
p=a4.e
if(p!=null){o=p.e
n=p.f
m=a4.r
if(n!==0){l=new A.LK(p)
m.toString
q[m]=a4.mH(q[m],!0,l)
q[o]=a4.mH(q[o],!1,l)}else{m.toString
q[m]=a4.mH(q[m],!0,new A.pZ(p,m))
p=a4.r
p.toString
if(p>0){k=p-1
p=a4.e
p.toString
n=A.a([],t.A)
q[k]=a4.mH(q[k],!1,new A.eN(new A.pZ(p,k),new A.bi(n,t.Q),0))}p=a4.r
p.toString
if(p<a4.a.c.length-1){k=p+1
p=a4.e
p.toString
n=A.a([],t.A)
q[k]=a4.mH(q[k],!1,new A.eN(new A.pZ(p,k),new A.bi(n,t.Q),0))}}}j=a4.a.c.length
for(p=t.E,n=s.y,m=t.vs,i=t.EA,h=t.BD,g=n==null,f=0;f<j;f=a1){e=A.aE(h)
if(f===a4.r)e.C(0,B.S2)
a4.a.toString
d=A.kb(a5,e,i)
if(d==null)c=a5
else c=d
if(c==null)c=B.fE.X(e)
b=new A.eR(new A.adh(e,r),m)
a4.a.toString
e=g?b:n
d=r.ghq()
a4.a.toString
a=q[f]
a0=a4.r
a1=f+1
a2=a6.Jb(j,a1)
e=A.alf(!1,a5,!0,new A.hN(new A.bp(0,0,0,2),new A.wt(B.aM,B.b2,B.J,A.a([a,new A.w9(new A.JQ(a5,a5,a5,a5,f===a0,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a2,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),!1,!1,!1,a5,a5)],p),a5),a5),a5,!0,a5,a5,a5,a5,c,a5,a5,a5,a5,new A.adi(a4,f),e,a5,d,a5)
q[f]=e
a4.a.toString
q[f]=new A.EE(1,B.mr,e,a5)}a6=a4.f
a3=A.Dt(A.ane(B.bZ,new A.Qn(a4.gWj(),B.ak,B.K,B.w,B.E,a5,B.f9,a5,q,a5),a5,a5,!1,a5,a5),a5,a5,a6,B.O)
return a3}}
A.adj.prototype={
$1(a){return new A.bw(null,t.T)},
$S:190}
A.adf.prototype={
$0(){},
$S:0}
A.adg.prototype={
$1(a){var s,r,q=null,p=this.a,o=p.a,n=o.c[a]
if(o.ga3m()&&n.gt0().b===46){p.a.toString
o=this.b.f
if(o!=null)s=o.C(0,B.EH)
else s=B.EI}else s=q
if(s==null){p.a.toString
o=q}else o=s
if(o==null)o=this.b.f
if(o==null)o=B.mm
r=p.x
r===$&&A.b()
r=r[a]
return A.nL(new A.hN(o,new A.iQ(p.a.c[a],r),q),1,q)},
$S:191}
A.adh.prototype={
$1(a){var s,r=this.a
r.I(0,a)
s=this.b.giQ()
return s==null?null:s.X(r)},
$S:192}
A.adi.prototype={
$0(){var s=this.a,r=s.e,q=r.b
r.BG(this.b,B.aE,q)
s.a.toString},
$S:0}
A.wI.prototype={
ag(){return new A.ze(B.m)}}
A.ze.prototype={
gky(){var s=this.d
return(s==null?null:s.gbD(s))!=null},
n7(){var s,r=this,q=r.a.c
if(q===r.d)return
if(r.gky()){s=r.d
s.gbD(s).H(0,r.gjj())}r.d=q
s=q.gbD(q)
s.bm()
s=s.aY$
s.b=!0
s.a.push(r.gjj())},
aA(){this.aM()
this.qc()},
b4(){var s,r=this
r.cl()
r.n7()
s=r.d.d
r.w=s
r.a.toString
r.e=A.a1n(s,1)},
aR(a){var s,r,q=this
q.bc(a)
if(q.a.c!==a.c){q.n7()
s=q.d.d
q.w=s;++q.x
r=q.e
r===$&&A.b()
r.rw(s);--q.x}if(q.a.d!==a.d&&q.x===0)q.qc()},
m(){var s,r=this
if(r.gky()){s=r.d
s.gbD(s).H(0,r.gjj())}r.d=null
r.aJ()},
qc(){var s=this.a.d
this.f=s
this.r=A.au8(s)},
uZ(){var s,r=this
if(r.x>0||r.d.f===0)return
s=r.d.d
if(s!==r.w){r.w=s
r.na()}},
na(){var s=0,r=A.a3(t.H),q,p=this,o,n,m,l,k,j,i
var $async$na=A.X(function(a,b){if(a===1)return A.a0(b,r)
while(true)switch(s){case 0:if(p.c==null){q=A.bt(null,t.H)
s=1
break}o=p.e
o===$&&A.b()
n=t.sa.a(B.b.gb2(o.d))
o=n.ghd(n)
m=p.w
m.toString
if(o===m){q=A.bt(null,t.H)
s=1
break}o=p.d
l=o.b
k=o.e
s=Math.abs(m-k)===1?3:4
break
case 3:if(l.a===B.r.a){p.e.rw(m)
q=A.bt(null,t.H)
s=1
break}++p.x
s=5
return A.a_(p.e.FL(m,B.aE,l),$async$na)
case 5:--p.x
if(p.c!=null){o=p.a.d
m=p.f
m===$&&A.b()
m=o!==m
o=m}else o=!1
if(o)p.av(new A.adk(p))
q=A.bt(null,t.H)
s=1
break
case 4:j=m>k?m-1:m+1
o=p.r
o===$&&A.b()
p.av(new A.adl(p,j,k))
p.e.rw(j)
m=p.e
i=p.w
s=l.a===B.r.a?6:8
break
case 6:i.toString
m.rw(i)
s=7
break
case 8:i.toString
s=9
return A.a_(m.FL(i,B.aE,l),$async$na)
case 9:if(p.c==null){q=A.bt(null,t.H)
s=1
break}case 7:p.av(new A.adm(p,o))
case 1:return A.a1(q,r)}})
return A.a2($async$na,r)},
Tl(a){var s,r,q,p=this,o=p.x
if(o>0)return!1
if(a.bu$!==0)return!1
p.x=o+1
if(a instanceof A.fh&&p.d.f===0){o=p.e
o===$&&A.b()
s=t.sa
r=s.a(B.b.gb2(o.d))
o=r.ghd(r)
o.toString
q=p.d
if(Math.abs(o-q.d)>1){r=s.a(B.b.gb2(p.e.d))
o=r.ghd(r)
o.toString
q.BF(B.d.b0(o))
o=p.d
p.w=o.d}else o=q
r=s.a(B.b.gb2(p.e.d))
s=r.ghd(r)
s.toString
o.shc(0,A.F(s-p.d.d,-1,1))}else if(a instanceof A.j8){o=p.d
o.toString
s=p.e
s===$&&A.b()
q=t.sa
r=q.a(B.b.gb2(s.d))
s=r.ghd(r)
s.toString
o.BF(B.d.b0(s))
s=p.d
p.w=s.d
if(s.f===0){r=q.a(B.b.gb2(p.e.d))
o=r.ghd(r)
o.toString
s.shc(0,A.F(o-p.d.d,-1,1))}}--p.x
return!1},
K(a){var s,r,q,p=this,o=null
p.a.toString
s=p.e
s===$&&A.b()
r=B.ym.fY(B.Do)
q=p.r
q===$&&A.b()
return new A.cD(p.gTk(),new A.oP(B.ak,!1,s,new A.oN(r),!0,o,new A.a6L(q,A.aX([null,0],t.st,t.S)),B.aF,B.J,o,!0,o),o,t.Bf)}}
A.adk.prototype={
$0(){this.a.qc()},
$S:0}
A.adl.prototype={
$0(){var s,r,q,p=this.a;++p.x
s=p.r
s===$&&A.b()
s=p.r=A.az(s,!1,t.cl)
p=this.b
r=s[p]
q=this.c
s[p]=s[q]
s[q]=r},
$S:0}
A.adm.prototype={
$0(){var s,r,q=this.a;--q.x
s=q.a.d
r=q.f
r===$&&A.b()
if(s!==r)q.qc()
else q.r=this.b},
$S:0}
A.adn.prototype={
grm(){return A.aG(this.as).dy},
gog(){var s=A.aG(this.as).p2.y.b
s.toString
return s},
goh(){return A.aG(this.as).p2.y},
goO(){return A.aG(this.as).p2.y},
ghq(){return A.aG(this.as).x}}
A.Rk.prototype={}
A.Rn.prototype={}
A.wL.prototype={
gv(a){return J.o(this.a)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.S(b)!==A.A(this))return!1
return b instanceof A.wL&&J.f(b.a,this.a)}}
A.Qr.prototype={}
A.wR.prototype={
gv(a){return A.Y(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.wR&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&J.f(b.c,s.c)}}
A.Qs.prototype={}
A.dz.prototype={
bW(b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null
if(b3==null)return b1
s=b1.a
r=s==null?b2:s.bW(b3.a)
if(r==null)r=b3.a
q=b1.b
p=q==null?b2:q.bW(b3.b)
if(p==null)p=b3.b
o=b1.c
n=o==null?b2:o.bW(b3.c)
if(n==null)n=b3.c
m=b1.d
l=m==null?b2:m.bW(b3.d)
if(l==null)l=b3.d
k=b1.e
j=k==null?b2:k.bW(b3.e)
if(j==null)j=b3.e
i=b1.f
h=i==null?b2:i.bW(b3.f)
if(h==null)h=b3.f
g=b1.r
f=g==null?b2:g.bW(b3.r)
if(f==null)f=b3.r
e=b1.w
d=e==null?b2:e.bW(b3.w)
if(d==null)d=b3.w
c=b1.x
b=c==null?b2:c.bW(b3.x)
if(b==null)b=b3.x
a=b1.y
a0=a==null?b2:a.bW(b3.y)
if(a0==null)a0=b3.y
a1=b1.z
a2=a1==null?b2:a1.bW(b3.z)
if(a2==null)a2=b3.z
a3=b1.Q
a4=a3==null?b2:a3.bW(b3.Q)
if(a4==null)a4=b3.Q
a5=b1.as
a6=a5==null?b2:a5.bW(b3.as)
if(a6==null)a6=b3.as
a7=b1.at
a8=a7==null?b2:a7.bW(b3.at)
if(a8==null)a8=b3.at
a9=b1.ax
b0=a9==null?b2:a9.bW(b3.ax)
if(b0==null)b0=b3.ax
if(r==null)r=b2
s=r==null?s:r
r=p==null?b2:p
if(r==null)r=q
q=n==null?b2:n
if(q==null)q=o
p=l==null?m:l
o=j==null?b2:j
if(o==null)o=k
n=h==null?b2:h
if(n==null)n=i
m=f==null?b2:f
if(m==null)m=g
l=d==null?b2:d
if(l==null)l=e
k=b==null?b2:b
if(k==null)k=c
j=a0==null?b2:a0
if(j==null)j=a
i=a2==null?b2:a2
if(i==null)i=a1
h=a4==null?b2:a4
if(h==null)h=a3
g=a6==null?b2:a6
if(g==null)g=a5
f=a8==null?a7:a8
e=b0==null?b2:b0
return A.amH(j,i,h,s,r,q,p,o,n,g,f,e==null?a9:e,m,l,k)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.dz&&J.f(s.a,b.a)&&J.f(s.b,b.b)&&J.f(s.c,b.c)&&J.f(s.d,b.d)&&J.f(s.e,b.e)&&J.f(s.f,b.f)&&J.f(s.r,b.r)&&J.f(s.w,b.w)&&J.f(s.x,b.x)&&J.f(s.y,b.y)&&J.f(s.z,b.z)&&J.f(s.Q,b.Q)&&J.f(s.as,b.as)&&J.f(s.at,b.at)&&J.f(s.ax,b.ax)},
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,B.a,B.a,B.a,B.a,B.a)}}
A.Qu.prototype={}
A.KA.prototype={
K(a){var s,r,q=this.c,p=B.c2.a,o=B.c2.b,n=B.c2.c,m=B.c2.d,l=B.c2.e,k=B.c2.f,j=a.a2(t.mA)
if(j==null)j=B.mi
s=q.em
r=s.b
if(r==null)r=j.x
s=s.a
j=s==null?j.w:s
return new A.xQ(this,new A.Dr(new A.a_Y(q,new A.I_(p,o,n,m,l,k),B.lO,p,o,n,m,l,k),A.ahC(A.akN(this.d,j,r),q.ok,null),null),null)}}
A.xQ.prototype={
bQ(a){return!this.w.c.k(0,a.w.c)}}
A.mI.prototype={
dg(x5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3,g4,g5,g6,g7,g8,g9,h0,h1,h2,h3,h4,h5,h6,h7,h8,h9,i0,i1,i2,i3,i4,i5,i6,i7,i8,i9,j0,j1,j2,j3,j4,j5,j6,j7,j8,j9,k0,k1,k2,k3,k4,k5,k6,k7,k8,k9,l0,l1,l2,l3,l4,l5,l6,l7,l8,l9,m0,m1,m2,m3,m4,m5,m6,m7,m8,m9,n0,n1,n2,n3,n4,n5,n6,n7,n8,n9,o0,o1,o2,o3,o4,o5,o6,o7,o8,o9,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,q0,q1,q2,q3,q4,q5,q6,q7,q8,q9,r0,r1,r2,r3,r4,r5,r6,r7,r8,r9,s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,t0,t1,t2,t3,t4,t5,t6,t7,t8,t9,u0,u1,u2,u3,u4,u5,u6,u7,u8,u9,v0,v1,v2,v3,v4,v5,v6,v7,v8,v9,w0,w1,w2,w3,w4,w5,w6,w7,w8,w9,x0,x1,x2,x3,x4=this.a
x4.toString
s=this.b
s.toString
r=x5<0.5
q=r?x4.a:s.a
p=r?x4.b:s.b
o=A.awE(x4,s,x5)
n=r?x4.d:s.d
m=r?x4.e:s.e
l=r?x4.f:s.f
k=r?x4.r:s.r
j=x4.w
i=s.w
h=t.k7
g=A.bb(j.a,i.a,x5,A.aoV(),h)
f=A.bb(j.b,i.b,x5,A.agk(),t.u6)
h=A.bb(j.c,i.c,x5,A.aoV(),h)
e=j.d
d=i.d
e=r?e:d
d=j.e
c=i.e
d=r?d:c
c=j.f
b=i.f
c=r?c:b
b=A.vp(j.r,i.r,x5)
a=t.jH
a0=A.bb(j.w,i.w,x5,A.cx(),a)
a1=A.bb(j.x,i.x,x5,A.cx(),a)
a2=A.bb(j.y,i.y,x5,A.cx(),a)
a3=A.Q(j.z,i.z,x5)
a4=A.Q(j.Q,i.Q,x5)
j=A.Q(j.as,i.as,x5)
i=r?x4.x:s.x
a5=x4.z
a6=s.z
a7=A.Q(a5.a,a6.a,x5)
a7.toString
a6=A.Q(a5.b,a6.b,x5)
a6.toString
a5=A.t(x4.as,s.as,x5)
a5.toString
a8=A.t(x4.at,s.at,x5)
a8.toString
a9=x4.ax
b0=s.ax
b1=r?a9.a:b0.a
b2=a9.b
b3=b0.b
b4=A.t(b2,b3,x5)
b4.toString
b5=a9.c
b6=b0.c
b7=A.t(b5,b6,x5)
b7.toString
b8=a9.d
if(b8==null)b8=b2
b9=b0.d
b8=A.t(b8,b9==null?b3:b9,x5)
b9=a9.e
if(b9==null)b9=b5
c0=b0.e
b9=A.t(b9,c0==null?b6:c0,x5)
c0=a9.f
c1=b0.f
c2=A.t(c0,c1,x5)
c2.toString
c3=a9.r
c4=b0.r
c5=A.t(c3,c4,x5)
c5.toString
c6=a9.w
if(c6==null)c6=c0
c7=b0.w
c6=A.t(c6,c7==null?c1:c7,x5)
c7=a9.x
if(c7==null)c7=c3
c8=b0.x
c7=A.t(c7,c8==null?c4:c8,x5)
c8=a9.y
c9=c8==null
d0=c9?c0:c8
d1=b0.y
d2=d1==null
d0=A.t(d0,d2?c1:d1,x5)
d3=a9.z
d4=d3==null
d5=d4?c3:d3
d6=b0.z
d7=d6==null
d5=A.t(d5,d7?c4:d6,x5)
d8=a9.Q
if(d8==null){if(c9)c8=c0}else c8=d8
c9=b0.Q
if(c9==null)c9=d2?c1:d1
c9=A.t(c8,c9,x5)
c8=a9.as
if(c8==null)c3=d4?c3:d3
else c3=c8
c8=b0.as
if(c8==null)c4=d7?c4:d6
else c4=c8
c4=A.t(c3,c4,x5)
c3=a9.at
c8=b0.at
d1=A.t(c3,c8,x5)
d1.toString
d2=a9.ax
d3=b0.ax
d4=A.t(d2,d3,x5)
d4.toString
d6=a9.ay
c3=d6==null?c3:d6
d6=b0.ay
c3=A.t(c3,d6==null?c8:d6,x5)
c8=a9.ch
if(c8==null)c8=d2
d2=b0.ch
c8=A.t(c8,d2==null?d3:d2,x5)
d2=A.t(a9.CW,b0.CW,x5)
d2.toString
d3=a9.cx
d6=b0.cx
d7=A.t(d3,d6,x5)
d7.toString
d8=a9.cy
d9=b0.cy
e0=A.t(d8,d9,x5)
e0.toString
e1=a9.db
e2=b0.db
e3=A.t(e1,e2,x5)
e3.toString
e4=a9.dx
if(e4==null)e4=d8
e5=b0.dx
e4=A.t(e4,e5==null?d9:e5,x5)
e5=a9.dy
if(e5==null)e5=e1
e6=b0.dy
e5=A.t(e5,e6==null?e2:e6,x5)
e6=a9.fr
if(e6==null)e6=d3
e7=b0.fr
e6=A.t(e6,e7==null?d6:e7,x5)
e7=a9.fx
d3=e7==null?d3:e7
e7=b0.fx
d3=A.t(d3,e7==null?d6:e7,x5)
d6=a9.fy
if(d6==null)d6=B.q
e7=b0.fy
d6=A.t(d6,e7==null?B.q:e7,x5)
e7=a9.go
if(e7==null)e7=B.q
e8=b0.go
e7=A.t(e7,e8==null?B.q:e8,x5)
e8=a9.id
e1=e8==null?e1:e8
e8=b0.id
e1=A.t(e1,e8==null?e2:e8,x5)
e2=a9.k1
d8=e2==null?d8:e2
e2=b0.k1
d8=A.t(d8,e2==null?d9:e2,x5)
d9=a9.k2
b5=d9==null?b5:d9
d9=b0.k2
b5=A.t(b5,d9==null?b6:d9,x5)
b6=a9.k4
if(b6==null)b6=b2
d9=b0.k4
b6=A.t(b6,d9==null?b3:d9,x5)
d9=a9.ok
c0=d9==null?c0:d9
d9=b0.ok
c0=A.t(c0,d9==null?c1:d9,x5)
a9=a9.k3
if(a9==null)a9=b2
b0=b0.k3
a9=A.ah7(d2,b1,d1,c3,b5,e1,d7,d4,c8,d8,b7,b9,c5,c7,e3,e5,d5,c4,e6,d3,b4,b8,b6,e7,c2,c6,c0,d6,e0,A.t(a9,b0==null?b3:b0,x5),e4,d0,c9)
b0=A.t(x4.ay,s.ay,x5)
b0.toString
b1=A.t(x4.ch,s.ch,x5)
b1.toString
b2=A.t(x4.CW,s.CW,x5)
b2.toString
b3=A.t(x4.cx,s.cx,x5)
b3.toString
b4=A.t(x4.cy,s.cy,x5)
b4.toString
b5=A.t(x4.db,s.db,x5)
b5.toString
b6=A.t(x4.dx,s.dx,x5)
b6.toString
b7=A.t(x4.dy,s.dy,x5)
b7.toString
b8=A.t(x4.fr,s.fr,x5)
b8.toString
b9=A.t(x4.fx,s.fx,x5)
b9.toString
c0=A.t(x4.fy,s.fy,x5)
c0.toString
c1=A.t(x4.go,s.go,x5)
c1.toString
c2=A.t(x4.id,s.id,x5)
c2.toString
c3=A.t(x4.k2,s.k2,x5)
c3.toString
c4=A.t(x4.k3,s.k3,x5)
c4.toString
c5=A.t(x4.k4,s.k4,x5)
c5.toString
c6=A.hz(x4.ok,s.ok,x5)
c7=A.hz(x4.p1,s.p1,x5)
c8=A.kw(x4.p2,s.p2,x5)
c9=A.kw(x4.p3,s.p3,x5)
d0=x4.p4
d1=s.p4
d2=A.kw(d0.a,d1.a,x5)
d3=A.kw(d0.b,d1.b,x5)
d4=A.kw(d0.c,d1.c,x5)
d5=A.kw(d0.d,d1.d,x5)
d1=A.kw(d0.e,d1.e,x5)
d0=x4.R8
d6=s.R8
if(r)d7=d0.a
else d7=d6.a
d8=A.t(d0.b,d6.b,x5)
d9=A.t(d0.c,d6.c,x5)
e0=A.Q(d0.d,d6.d,x5)
e1=A.Q(d0.e,d6.e,x5)
e2=A.t(d0.f,d6.f,x5)
e3=A.t(d0.r,d6.r,x5)
e4=A.cU(d0.w,d6.w,x5)
e5=A.hz(d0.x,d6.x,x5)
e6=A.hz(d0.y,d6.y,x5)
e7=A.kw(d0.z,d6.z,x5)
if(r)e8=d0.Q
else e8=d6.Q
e9=A.Q(d0.as,d6.as,x5)
f0=A.Q(d0.at,d6.at,x5)
f1=A.bc(d0.ax,d6.ax,x5)
f2=A.bc(d0.ay,d6.ay,x5)
if(r)f3=d0.ch
else f3=d6.ch
if(r)d0=d0.CW
else d0=d6.CW
f1=A.arN(e6,d8,d0,d7,e8,e0,d9,e5,e1,e2,e4,e3,f3,e7,e9,f2,f0,f1)
f0=x4.RG
f2=s.RG
d0=A.t(f0.a,f2.a,x5)
d6=A.t(f0.b,f2.b,x5)
d7=A.Q(f0.c,f2.c,x5)
d8=A.Q(f0.d,f2.d,x5)
d9=A.bc(f0.e,f2.e,x5)
e0=A.df(f0.f,f2.f,x5)
e1=A.ak8(f0.r,f2.r,x5)
e2=x4.rx
e3=s.rx
e4=A.t(e2.a,e3.a,x5)
e5=A.t(e2.b,e3.b,x5)
e6=A.t(e2.c,e3.c,x5)
e7=A.t(e2.d,e3.d,x5)
e8=A.bc(e2.e,e3.e,x5)
e9=A.Q(e2.f,e3.f,x5)
f0=A.df(e2.r,e3.r,x5)
e2=A.df(e2.w,e3.w,x5)
e3=x4.ry
f2=s.ry
f3=A.t(e3.a,f2.a,x5)
f4=A.Q(e3.b,f2.b,x5)
if(r)f5=e3.c
else f5=f2.c
f6=A.Q(e3.d,f2.d,x5)
f7=A.t(e3.e,f2.e,x5)
e3=A.df(e3.f,f2.f,x5)
f2=x4.to
f8=s.to
f9=A.t(f2.a,f8.a,x5)
g0=A.Q(f2.b,f8.b,x5)
g1=A.hz(f2.c,f8.c,x5)
g2=A.hz(f2.d,f8.d,x5)
g3=A.t(f2.e,f8.e,x5)
g4=A.t(f2.f,f8.f,x5)
g5=A.bc(f2.r,f8.r,x5)
g6=A.bc(f2.w,f8.w,x5)
if(r)g7=f2.x
else g7=f8.x
if(r)g8=f2.y
else g8=f8.y
if(r)g9=f2.z
else g9=f8.z
if(r)h0=f2.Q
else h0=f8.Q
if(r)h1=f2.as
else h1=f8.as
if(r)f2=f2.at
else f2=f8.at
f8=A.arW(x4.x1,s.x1,x5)
f8.toString
h2=A.as1(x4.x2,s.x2,x5)
h2.toString
h3=r?x4.xr:s.xr
h4=x4.y1
h5=s.y1
if(r)h6=h4.a
else h6=h5.a
h7=A.t(h4.b,h5.b,x5)
h8=A.t(h4.c,h5.c,x5)
h9=A.t(h4.d,h5.d,x5)
i0=A.Q(h4.e,h5.e,x5)
i1=A.df(h4.f,h5.f,x5)
h4=A.cU(h4.r,h5.r,x5)
h5=x4.y2
i2=s.y2
if(r)i3=h5.a
else i3=i2.a
i4=A.bb(h5.b,i2.b,x5,A.cx(),a)
i5=A.bb(h5.c,i2.c,x5,A.cx(),a)
i6=A.bb(h5.d,i2.d,x5,A.cx(),a)
i7=A.Q(h5.e,i2.e,x5)
if(r)i8=h5.f
else i8=i2.f
if(r)i9=h5.r
else i9=i2.r
j0=t.yX
j1=j0.a(A.cU(h5.w,i2.w,x5))
h5=A.as7(h5.x,i2.x,x5)
i2=A.asc(x4.ao,s.ao,x5)
i2.toString
j2=x4.ar
j3=s.ar
j4=A.V5(j2.a,j3.a,x5)
j5=A.bb(j2.b,j3.b,x5,A.cx(),a)
j6=A.Q(j2.c,j3.c,x5)
j7=A.bc(j2.d,j3.d,x5)
j8=A.bb(j2.e,j3.e,x5,A.cx(),a)
j9=A.Q(j2.f,j3.f,x5)
k0=A.bc(j2.r,j3.r,x5)
k1=A.Q(j2.w,j3.w,x5)
k2=A.Q(j2.x,j3.x,x5)
k3=A.Q(j2.y,j3.y,x5)
j3=A.Q(j2.z,j3.z,x5)
j2=x4.al
k4=s.al
k5=A.t(j2.a,k4.a,x5)
k6=A.Q(j2.b,k4.b,x5)
k7=A.t(j2.c,k4.c,x5)
k8=A.t(j2.d,k4.d,x5)
k9=A.cU(j2.e,k4.e,x5)
l0=A.qS(j2.f,k4.f,x5)
l1=A.t(j2.y,k4.y,x5)
l2=A.bc(j2.r,k4.r,x5)
l3=A.bc(j2.w,k4.w,x5)
j2=A.df(j2.x,k4.x,x5)
k4=x4.ad
l4=s.ad
l5=A.t(k4.a,l4.a,x5)
l6=A.Q(k4.b,l4.b,x5)
l7=A.Q(k4.c,l4.c,x5)
l8=A.Q(k4.d,l4.d,x5)
k4=A.Q(k4.e,l4.e,x5)
l4=A.at4(x4.aV,s.aV,x5)
l4.toString
l9=x4.bf
m0=s.bf
m1=A.bc(l9.a,m0.a,x5)
if(r)m2=l9.b
else m2=m0.b
l9=A.ahO(l9.c,m0.c,x5)
m0=A.ata(x4.bb,s.bb,x5)
m0.toString
m3=A.atp(x4.c7,s.c7,x5)
m3.toString
m4=A.atr(x4.eO,s.eO,x5)
m4.toString
m5=A.atu(x4.iA,s.iA,x5)
m5.toString
m6=A.atT(x4.L,s.L,x5)
m6.toString
m7=A.auh(x4.t,s.t,x5)
m7.toString
m8=A.ahO(x4.J.a,s.J.a,x5)
m9=A.nJ(x4.au.a,s.au.a,x5)
n0=A.ahO(x4.aj.a,s.aj.a,x5)
n1=A.auN(x4.aW,s.aW,x5)
n1.toString
n2=A.auO(x4.bv,s.bv,x5)
n2.toString
n3=A.auP(x4.c2,s.c2,x5)
n3.toString
n4=A.auW(x4.c8,s.c8,x5)
n4.toString
n5=A.avl(x4.c3,s.c3,x5)
n5.toString
n6=A.avE(x4.bF,s.bF,x5)
n6.toString
n7=x4.fj
n8=s.fj
if(r)n9=n7.a
else n9=n8.a
o0=A.bb(n7.b,n8.b,x5,A.cx(),a)
if(r)o1=n7.e
else o1=n8.e
o2=A.bb(n7.c,n8.c,x5,A.cx(),a)
o3=A.Q(n7.d,n8.d,x5)
if(r)n7=n7.f
else n7=n8.f
n8=x4.dW
o4=s.dW
o5=A.nJ(n8.a,o4.a,x5)
if(r)n8=n8.b
else n8=o4.b
o4=x4.dX
o6=s.dX
o7=A.Q(o4.a,o6.a,x5)
o8=A.t(o4.b,o6.b,x5)
o9=A.t(o4.c,o6.c,x5)
p0=A.t(o4.d,o6.d,x5)
p1=A.t(o4.e,o6.e,x5)
p2=A.t(o4.r,o6.r,x5)
p3=A.t(o4.f,o6.f,x5)
p4=A.t(o4.w,o6.w,x5)
p5=A.t(o4.x,o6.x,x5)
p6=A.t(o4.y,o6.y,x5)
p7=A.t(o4.z,o6.z,x5)
p8=A.t(o4.Q,o6.Q,x5)
p9=A.t(o4.as,o6.as,x5)
q0=A.t(o4.at,o6.at,x5)
q1=A.t(o4.ax,o6.ax,x5)
q2=A.t(o4.ay,o6.ay,x5)
q3=r?o4.ch:o6.ch
q4=r?o4.CW:o6.CW
q5=r?o4.cx:o6.cx
q6=r?o4.cy:o6.cy
q7=r?o4.db:o6.db
q8=r?o4.dx:o6.dx
q9=r?o4.dy:o6.dy
r0=r?o4.fr:o6.fr
r1=r?o4.fx:o6.fx
r2=r?o4.fy:o6.fy
r3=A.bc(o4.go,o6.go,x5)
r4=A.Q(o4.id,o6.id,x5)
r5=r?o4.k1:o6.k1
o4=r?o4.k2:o6.k2
o6=x4.dc
r6=s.dc
r7=A.t(o6.a,r6.a,x5)
r8=A.t(o6.b,r6.b,x5)
r9=A.t(o6.c,r6.c,x5)
s0=A.bc(o6.d,r6.d,x5)
s1=A.Q(o6.e,r6.e,x5)
s2=A.cU(o6.f,r6.f,x5)
if(r)s3=o6.r
else s3=r6.r
s4=A.Q(o6.w,r6.w,x5)
s5=A.ahl(o6.x,r6.x,x5)
o6=A.t(o6.z,r6.z,x5)
r6=x4.iB
s6=s.iB
s7=A.bb(r6.a,s6.a,x5,A.cx(),a)
s8=A.bb(r6.b,s6.b,x5,A.cx(),a)
if(r)s9=r6.c
else s9=s6.c
if(r)t0=r6.d
else t0=s6.d
t1=A.bb(r6.e,s6.e,x5,A.cx(),a)
t2=A.Q(r6.f,s6.f,x5)
if(r)r6=r6.r
else r6=s6.r
s6=x4.el
t3=s.el
t4=A.V5(s6.a,t3.a,x5)
t5=A.t(s6.b,t3.b,x5)
t6=r?s6.c:t3.c
t7=A.t(s6.d,t3.d,x5)
t8=A.t(s6.e,t3.e,x5)
t9=A.df(s6.f,t3.f,x5)
u0=A.bc(s6.r,t3.r,x5)
u1=A.t(s6.w,t3.w,x5)
u2=A.bc(s6.x,t3.x,x5)
a=A.bb(s6.y,t3.y,x5,A.cx(),a)
u3=r?s6.z:t3.z
s6=r?s6.Q:t3.Q
t3=A.awz(x4.jG,s.jG,x5)
t3.toString
u4=A.awC(x4.em,s.em,x5)
u4.toString
u5=x4.jH
u6=s.jH
u7=u5.ay
if(u7==null)u8=u6.ay==null
else u8=!1
if(u8)u7=null
else if(u7==null)u7=u6.ay
else{u8=u6.ay
if(!(u8==null)){u7.toString
u8.toString
u7=A.aB(u7,u8,x5)}}u8=A.t(u5.a,u6.a,x5)
u9=A.t(u5.b,u6.b,x5)
v0=A.t(u5.c,u6.c,x5)
v1=A.t(u5.d,u6.d,x5)
v2=A.t(u5.e,u6.e,x5)
v3=A.t(u5.f,u6.f,x5)
v4=A.t(u5.r,u6.r,x5)
v5=A.t(u5.w,u6.w,x5)
v6=A.t(u5.x,u6.x,x5)
v7=A.bc(u5.y,u6.y,x5)
v8=A.bc(u5.z,u6.z,x5)
v9=A.bc(u5.Q,u6.Q,x5)
w0=A.cU(u5.as,u6.as,x5)
w1=A.cU(u5.at,u6.at,x5)
j0=j0.a(A.cU(u5.ax,u6.ax,x5))
if(r)u5=u5.ch
else u5=u6.ch
u6=A.awI(x4.lz,s.lz,x5)
u6.toString
w2=A.awM(x4.h7,s.h7,x5)
w2.toString
w3=x4.eP
w3.toString
w4=s.eP
w4.toString
w4=A.t(w3,w4,x5)
w3=r?x4.bG:s.bG
w5=A.kw(x4.lA,s.lA,x5)
w6=A.hz(x4.lB,s.lB,x5)
w7=x4.lC
w7.toString
w8=s.lC
w8.toString
w8=A.t(w7,w8,x5)
w7=r?x4.lD:s.lD
r=r?x4.r1:s.r1
w9=x4.S
w9.toString
x0=s.S
x0.toString
x0=A.t(w9,x0,x5)
w9=x4.k1
w9.toString
x1=s.k1
x1.toString
x1=A.t(w9,x1,x5)
w9=x4.lE
w9.toString
x2=s.lE
x2.toString
x2=A.t(w9,x2,x5)
w9=x4.A
w9.toString
x3=s.A
x3.toString
x3=A.t(w9,x3,x5)
x4=x4.Q
x4.toString
s=s.Q
s.toString
return A.aif(w4,w3,w6,w5,r,f1,q,x3,new A.ra(d0,d6,d7,d8,d9,e0,e1),new A.us(e4,e5,e6,e7,e8,e9,f0,e2),A.t(x4,s,x5),new A.rg(f3,f4,f5,f6,f7,e3),new A.rh(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8,g9,h0,h1,f2),f8,h2,w8,h3,a5,a8,new A.rs(h6,h7,h8,h9,i0,i1,h4),new A.rw(i3,i4,i5,i6,i7,i8,i9,j1,h5),i2,a9,p,new A.t0(j4,j5,j6,j7,j8,j9,k0,k1,k2,k3,j3),b0,new A.ta(k5,k6,k7,k8,k9,l0,l2,l3,j2,l1),b1,b2,new A.tc(l5,l6,l7,l8,k4),l4,new A.tj(m1,m2,l9),m0,x2,m3,o,m4,!0,m5,b3,b4,b5,b6,m6,c6,b7,n,m7,m,new A.HE(m8),new A.uK(m9),new A.oG(n0),n1,n2,n3,n4,l,k,n5,b8,w7,b9,c0,c7,c8,n6,new A.vo(n9,o0,o2,o3,o1,n7),c1,new A.w5(g,f,h,e,d,c,b,a0,a1,a2,a3,a4,j),c2,new A.w6(o5,n8),x1,c3,new A.wl(o7,o8,o9,p0,p1,p3,p2,p4,p5,p6,p7,p8,p9,q0,q1,q2,q3,q4,q5,q6,q7,q8,q9,r0,r1,r2,r3,r4,r5,o4),new A.wp(r7,r8,r9,s0,s1,s2,s3,s4,s5,o6),c4,i,new A.wD(s7,s8,s9,t0,t1,t2,r6),new A.py(t4,t5,t6,t7,t8,t9,u0,u1,u2,a,u3,s6),t3,u4,c9,new A.wW(u8,u9,v0,v1,v2,v3,v4,v5,v6,v7,v8,v9,w0,w1,j0,u7,u5),u6,x0,w2,new A.x2(d2,d3,d4,d5,d1),c5,!1,new A.pO(a7,a6))}}
A.qY.prototype={
ag(){return new A.Lk(null,null,B.m)}}
A.Lk.prototype={
o4(a){var s=a.$3(this.CW,this.a.r,new A.a8P())
s.toString
this.CW=t.f6.a(s)},
K(a){var s,r=this.CW
r.toString
s=this.gf4()
return new A.KA(r.ac(0,s.gn(s)),this.a.w,null)}}
A.a8P.prototype={
$1(a){return new A.mI(t.oz.a(a),null)},
$S:194}
A.uE.prototype={
G(){return"MaterialTapTargetSize."+this.b}}
A.fp.prototype={
k(a,b){var s,r,q=this
if(b==null)return!1
if(J.S(b)!==A.A(q))return!1
if(b instanceof A.fp)if(b.a===q.a)if(A.ag1(b.c,q.c))if(b.d.k(0,q.d))if(b.e===q.e)if(b.f.k(0,q.f))if(b.r===q.r)if(b.w.k(0,q.w))if(b.x===q.x)if(b.z.k(0,q.z))if(b.as.k(0,q.as))if(b.at.k(0,q.at))if(b.ax.k(0,q.ax))if(b.ay.k(0,q.ay))if(b.ch.k(0,q.ch))if(b.CW.k(0,q.CW))if(b.cx.k(0,q.cx))if(b.cy.k(0,q.cy))if(b.db.k(0,q.db))if(b.dx.k(0,q.dx))if(b.dy.k(0,q.dy))if(b.fr.k(0,q.fr))if(b.fx.k(0,q.fx))if(b.fy.k(0,q.fy))if(b.go.k(0,q.go))if(b.id.k(0,q.id))if(b.k2.k(0,q.k2))if(b.k3.k(0,q.k3))if(b.k4.k(0,q.k4))if(b.ok.k(0,q.ok))if(b.p1.k(0,q.p1))if(b.p2.k(0,q.p2))if(b.p3.k(0,q.p3))if(b.p4.k(0,q.p4))if(b.R8.k(0,q.R8))if(b.RG.k(0,q.RG))if(b.rx.k(0,q.rx))if(b.ry.k(0,q.ry))if(b.to.k(0,q.to))if(b.x1.k(0,q.x1))if(b.x2.k(0,q.x2))if(b.xr.k(0,q.xr))if(b.y1.k(0,q.y1))if(b.y2.k(0,q.y2))if(b.ao.k(0,q.ao))if(b.ar.k(0,q.ar))if(b.al.k(0,q.al))if(b.ad.k(0,q.ad))if(b.aV.k(0,q.aV))if(b.bf.k(0,q.bf))if(b.bb.k(0,q.bb))if(b.c7.k(0,q.c7))if(b.eO.k(0,q.eO))if(b.iA.k(0,q.iA))if(b.L.k(0,q.L))if(b.t.k(0,q.t))if(b.J.k(0,q.J))if(b.au.k(0,q.au))if(b.aj.k(0,q.aj))if(b.aW.k(0,q.aW))if(b.bv.k(0,q.bv))if(b.c2.k(0,q.c2))if(b.c8.k(0,q.c8))if(b.c3.k(0,q.c3))if(b.bF.k(0,q.bF))if(b.fj.k(0,q.fj))if(b.dW.k(0,q.dW))if(b.dX.k(0,q.dX))if(b.dc.k(0,q.dc))if(b.iB.k(0,q.iB))if(b.el.k(0,q.el))if(b.jG.k(0,q.jG))if(b.em.k(0,q.em))if(b.jH.k(0,q.jH))if(b.lz.k(0,q.lz))if(b.h7.k(0,q.h7)){s=b.eP
s.toString
r=q.eP
r.toString
if(s.k(0,r))if(b.bG===q.bG)if(b.lA.k(0,q.lA))if(b.lB.k(0,q.lB)){s=b.lC
s.toString
r=q.lC
r.toString
if(s.k(0,r))if(b.lD===q.lD){s=b.S
s.toString
r=q.S
r.toString
if(s.k(0,r)){s=b.k1
s.toString
r=q.k1
r.toString
if(s.k(0,r)){s=b.lE
s.toString
r=q.lE
r.toString
if(s.k(0,r)){s=b.A
s.toString
r=q.A
r.toString
if(s.k(0,r)){s=b.Q
s.toString
r=q.Q
r.toString
r=s.k(0,r)
s=r}else s=!1}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1}else s=!1
else s=!1
else s=!1
else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gv(a){var s=this,r=[s.a,s.b],q=s.c
B.b.I(r,q.gbp(q))
B.b.I(r,q.gaX(q))
r.push(s.d)
r.push(s.e)
r.push(s.f)
r.push(s.r)
r.push(s.w)
r.push(s.x)
r.push(!1)
r.push(s.z)
r.push(s.as)
r.push(s.at)
r.push(s.ax)
r.push(s.ay)
r.push(s.ch)
r.push(s.CW)
r.push(s.cx)
r.push(s.cy)
r.push(s.db)
r.push(s.dx)
r.push(s.dy)
r.push(s.fr)
r.push(s.fx)
r.push(s.fy)
r.push(s.go)
r.push(s.id)
r.push(s.k2)
r.push(s.k3)
r.push(s.k4)
r.push(s.ok)
r.push(s.p1)
r.push(s.p2)
r.push(s.p3)
r.push(s.p4)
r.push(s.R8)
r.push(s.RG)
r.push(s.rx)
r.push(s.ry)
r.push(s.to)
r.push(s.x1)
r.push(s.x2)
r.push(s.xr)
r.push(s.y1)
r.push(s.y2)
r.push(s.ao)
r.push(s.ar)
r.push(s.al)
r.push(s.ad)
r.push(s.aV)
r.push(s.bf)
r.push(s.bb)
r.push(s.c7)
r.push(s.eO)
r.push(s.iA)
r.push(s.L)
r.push(s.t)
r.push(s.J)
r.push(s.au)
r.push(s.aj)
r.push(s.aW)
r.push(s.bv)
r.push(s.c2)
r.push(s.c8)
r.push(s.c3)
r.push(s.bF)
r.push(s.fj)
r.push(s.dW)
r.push(s.dX)
r.push(s.dc)
r.push(s.iB)
r.push(s.el)
r.push(s.jG)
r.push(s.em)
r.push(s.jH)
r.push(s.lz)
r.push(s.h7)
q=s.eP
q.toString
r.push(q)
r.push(s.bG)
r.push(s.lA)
r.push(s.lB)
q=s.lC
q.toString
r.push(q)
r.push(!0)
r.push(s.lD)
r.push(s.r1)
q=s.S
q.toString
r.push(q)
q=s.k1
q.toString
r.push(q)
q=s.lE
q.toString
r.push(q)
q=s.A
q.toString
r.push(q)
q=s.Q
q.toString
r.push(q)
return A.cE(r)}}
A.a7Z.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4=this.a,b5=this.b,b6=b5.bW(b4.p2),b7=b5.bW(b4.lA)
b5=b5.bW(b4.p3)
s=b4.ax
r=s.b
q=s.c
p=s.d
if(p==null)p=r
o=s.e
if(o==null)o=q
n=s.f
m=s.r
l=s.w
if(l==null)l=n
k=s.x
if(k==null)k=m
j=s.y
i=j==null?n:j
h=s.z
g=h==null?m:h
f=s.Q
if(f==null){if(j==null)j=n}else j=f
f=s.as
if(f==null){if(h==null)h=m}else h=f
f=s.at
e=s.ax
d=s.ay
if(d==null)d=f
c=s.ch
if(c==null)c=e
b=s.cx
a=s.cy
a0=s.db
a1=s.dx
if(a1==null)a1=a
a2=s.dy
if(a2==null)a2=a0
a3=s.fr
if(a3==null)a3=b
a4=s.fx
if(a4==null)a4=b
a5=s.fy
if(a5==null)a5=B.q
a6=s.go
if(a6==null)a6=B.q
a7=s.id
if(a7==null)a7=a0
a8=s.k1
if(a8==null)a8=a
a9=s.k2
if(a9==null)a9=q
b0=s.k4
if(b0==null)b0=r
b1=s.ok
if(b1==null)b1=n
b2=s.k3
if(b2==null)b2=r
j=A.ah7(s.CW,s.a,f,d,a9,a7,b,e,c,a8,q,o,m,k,a0,a2,g,h,a3,a4,r,p,b0,a6,n,l,b1,a5,a,b2,a1,i,j)
return A.aif(b4.eP,b4.bG,b4.lB,b7,b4.r1,b4.R8,b4.a,b4.A,b4.RG,b4.rx,b4.Q,b4.ry,b4.to,b4.x1,b4.x2,b4.lC,b4.xr,b4.as,b4.at,b4.y1,b4.y2,b4.ao,j,b4.b,b4.ar,b4.ay,b4.al,b4.ch,b4.CW,b4.ad,b4.aV,b4.bf,b4.bb,b4.lE,b4.c7,b4.c,b4.eO,!0,b4.iA,b4.cx,b4.cy,b4.db,b4.dx,b4.L,b4.ok,b4.dy,b4.d,b4.t,b4.e,b4.J,b4.au,b4.aj,b4.aW,b4.bv,b4.c2,b4.c8,b4.f,b4.r,b4.c3,b4.fr,b4.lD,b4.fx,b4.fy,b4.p1,b6,b4.bF,b4.fj,b4.go,b4.w,b4.id,b4.dW,b4.k1,b4.k2,b4.dX,b4.dc,b4.k3,b4.x,b4.iB,b4.el,b4.jG,b4.em,b5,b4.jH,b4.lz,b4.S,b4.h7,b4.p4,b4.k4,!1,b4.z)},
$S:195}
A.a7X.prototype={
$2(a,b){return new A.b5(a,b.a4i(this.a.c.i(0,a),this.b),t.wF)},
$S:196}
A.a7Y.prototype={
$1(a){return!this.a.c.T(0,a.gdz(a))},
$S:197}
A.a_Y.prototype={
gYz(){return this.at.ax.a},
ga2p(){return this.at.ax.b}}
A.qd.prototype={
gv(a){return(A.l2(this.a)^A.l2(this.b))>>>0},
k(a,b){if(b==null)return!1
return b instanceof A.qd&&b.a===this.a&&b.b===this.b}}
A.MK.prototype={
br(a,b,c){var s,r=this.a,q=r.i(0,b)
if(q!=null)return q
if(r.a===this.b){s=new A.b0(r,A.n(r).h("b0<1>"))
r.u(0,s.gM(s))}s=c.$0()
r.l(0,b,s)
return s}}
A.pO.prototype={
GN(a){var s=this.a,r=this.b,q=A.F(a.a+new A.y(s,r).a_(0,4).a,0,a.b)
return a.ZB(A.F(a.c+new A.y(s,r).a_(0,4).b,0,a.d),q)},
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return b instanceof A.pO&&b.a===this.a&&b.b===this.b},
gv(a){return A.Y(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
bP(){return this.LD()+"(h: "+A.hc(this.a)+", v: "+A.hc(this.b)+")"}}
A.Qz.prototype={}
A.R9.prototype={}
A.wW.prototype={
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.wW&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&J.f(b.c,s.c)&&J.f(b.d,s.d)&&J.f(b.e,s.e)&&J.f(b.f,s.f)&&J.f(b.r,s.r)&&J.f(b.w,s.w)&&J.f(b.x,s.x)&&J.f(b.y,s.y)&&J.f(b.z,s.z)&&J.f(b.Q,s.Q)&&J.f(b.as,s.as)&&J.f(b.at,s.at)&&J.f(b.ax,s.ax)&&J.f(b.ay,s.ay)&&!0}}
A.QB.prototype={}
A.wX.prototype={
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.y,s.x,s.z,s.Q,s.as,s.ax,s.at,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.wX&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&J.f(b.c,s.c)&&J.f(b.d,s.d)&&J.f(b.e,s.e)&&J.f(b.f,s.f)&&J.f(b.r,s.r)&&J.f(b.w,s.w)&&J.f(b.y,s.y)&&J.f(b.x,s.x)&&J.f(b.z,s.z)&&J.f(b.Q,s.Q)&&J.f(b.as,s.as)&&J.f(b.ax,s.ax)&&b.at==s.at}}
A.QC.prototype={}
A.wY.prototype={
ag(){return new A.mK(null,null,B.m)}}
A.mK.prototype={
gqa(){var s=this.a.c
return s==null?null.a4s():s},
aA(){var s,r,q=this
q.aM()
q.fx=q.fr=!1
q.cy=$.kl.rx$.b.a!==0
s=A.dY(null,B.Ev,B.EF,null,q)
s.bm()
r=s.aU$
r.b=!0
r.a.push(q.gXe())
q.as=s
$.kl.rx$.U(0,q.gCP())
$.eg.k4$.b.l(0,q.gCQ(),null)},
b4(){this.cl()
this.c.a2(t.fe)
this.fy=!0},
Rw(){var s=this.c
s.toString
switch(A.aG(s).r.a){case 4:case 3:case 5:return 24
case 0:case 1:case 2:return 32}},
Rv(){var s=this.c
s.toString
switch(A.aG(s).r.a){case 4:case 3:case 5:return B.EK
case 0:case 1:case 2:return B.EJ}},
Cu(){var s=this.c
s.toString
switch(A.aG(s).r.a){case 4:case 3:case 5:return 12
case 0:case 1:case 2:return 14}},
SQ(){var s,r,q=this
if(q.c==null)return
s=$.kl.rx$.b.a!==0
r=q.cy
r===$&&A.b()
if(s!==r)q.av(new A.a85(q,s))},
Xf(a){var s
if(a===B.H){s=this.fx
s===$&&A.b()
if(!s){s=this.fr
s===$&&A.b()
s=!s}else s=!0}else s=!1
if(s)this.vs()},
uB(a){var s,r=this,q=r.ay
if(q!=null)q.am(0)
r.ay=null
if(a){r.vs()
return}r.fx=!0
if(r.db){if(r.ax==null){q=r.ch
q===$&&A.b()
s=r.as
s===$&&A.b()
r.ax=A.c2(q,s.gJ7(s))}}else if(r.ax==null){q=r.CW
q===$&&A.b()
s=r.as
s===$&&A.b()
r.ax=A.c2(q,s.gJ7(s))}r.db=!1},
Ex(){var s=this,r=s.ax
if(r!=null)r.am(0)
s.ax=null
if(s.ay==null){r=s.cx
r===$&&A.b()
s.ay=A.c2(r,s.ga_x())}},
Q8(){var s=this,r=s.fr
r===$&&A.b()
if(!r){r=s.fx
r===$&&A.b()}else r=!0
if(r)return
s.fr=!0
r=s.ax
if(r!=null)r.am(0)
s.ax=null
r=s.ay
if(r!=null)r.am(0)
s.ay=null
r=s.at
if(r!=null)r.m_(0)
r=s.as
r===$&&A.b()
r.fv(0)},
E5(){var s,r=this,q=r.fr
q===$&&A.b()
if(!q)return
r.fr=!1
q=r.ax
if(q!=null)q.am(0)
r.ax=null
q=r.ay
if(q!=null)q.am(0)
r.ay=null
if(!r.at.d.a){q=r.c
q.toString
r.a.toString
q=q.jI(t.bm)
q.toString
s=r.at
s.toString
q.xN(0,s)}A.JR(r.gqa())
q=r.as
q===$&&A.b()
q.cA(0)},
GV(){var s,r=this
r.fy===$&&A.b()
s=r.c
if(s==null)return!1
s=r.ay
if(s!=null)s.am(0)
r.ay=null
r.fx=!1
s=r.fr
s===$&&A.b()
if(s){s=r.cy
s===$&&A.b()
if(s)A.amL(r)
r.E5()
return!0}if(r.at!=null){s=r.ax
if(s!=null)s.am(0)
r.ax=null
s=r.as
s===$&&A.b()
s.cA(0)
return!1}r.Ql()
s=r.as
s===$&&A.b()
s.cA(0)
return!0},
CO(a){var s
if(this.c!=null){s=this.fr
s===$&&A.b()
this.uB(s||a)}},
pz(){return this.CO(!1)},
Ql(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=e.c
c.toString
e.a.toString
c=c.jI(t.bm)
c.toString
s=e.c.ga9()
s.toString
t.x.a(s)
r=s.k3.im(B.k)
q=A.co(s.bs(0,c.c.ga9()),r)
r=e.c.a2(t.I)
r.toString
s=A.a7W(d,d,e.a.c)
p=e.d
p===$&&A.b()
o=e.e
o===$&&A.b()
n=e.f
n===$&&A.b()
m=e.cy
m===$&&A.b()
l=m?new A.a82(e):d
m=m?new A.a83(e):d
k=e.r
k===$&&A.b()
j=e.w
j===$&&A.b()
i=e.x
i===$&&A.b()
h=e.as
h===$&&A.b()
h=A.ef(B.bf,h,d)
g=e.y
g===$&&A.b()
f=e.z
f===$&&A.b()
r=A.ahV(new A.a84(A.ahh(new A.QD(s,p,o,n,k,j,i,h,q,g,f,l,m,d),r.w)),!1)
e.at=r
e.fr=!1
c.xN(0,r)
A.JR(e.gqa())
if(e.cy)A.amL(e)
$.jg.push(e)},
vs(){var s,r=this
B.b.u($.jg,r)
$.awK.u(0,r)
s=r.ax
if(s!=null)s.am(0)
r.ax=null
s=r.ay
if(s!=null)s.am(0)
r.ay=null
s=r.fr
s===$&&A.b()
if(!s){s=r.at
if(s!=null)s.m_(0)}r.fr=!1
r.at=null
s=r.cy
s===$&&A.b()
if(s)if($.jg.length!==0)B.b.gaa($.jg).E5()},
T2(a){if(this.at==null)return
if(t.g.b(a)||t.AJ.b(a))this.pz()
else if(t.Y.b(a))this.CO(!0)},
d_(){var s,r=this
if(r.at!=null)r.uB(!0)
s=r.ay
if(s!=null)s.am(0)
r.my()},
m(){var s,r=this
$.eg.k4$.b.u(0,r.gCQ())
$.kl.rx$.H(0,r.gCP())
r.vs()
s=r.as
s===$&&A.b()
s.m()
r.Oe()},
CS(){var s,r,q=this
q.db=!0
if(q.GV()){s=q.dy
s===$&&A.b()}else s=!1
if(s){s=q.dx
s===$&&A.b()
r=q.c
if(s===B.kJ){r.toString
A.atq(r)}else{r.toString
A.XT(r)}}q.a.toString},
TD(){this.CS()
this.pz()},
K(a){var s,r,q,p,o,n,m,l=this,k=null
if(l.gqa().length===0){s=l.a.z
return s}r=A.aG(a)
a.a2(t.cF)
q=A.aG(a).h7
s=r.p3.z
if(r.ax.a===B.a9){s.toString
p=s.Gm(B.q,l.Cu())
o=new A.cn(A.b3(B.d.b0(229.5),255,255,255),k,k,B.l7,k,k,B.Z)}else{s.toString
p=s.Gm(B.j,l.Cu())
o=new A.cn(A.b3(B.d.b0(229.5),97,97,97),k,k,B.l7,k,k,B.Z)}l.a.toString
s=q.a
l.d=s==null?l.Rw():s
l.a.toString
s=q.b
l.e=s==null?l.Rv():s
l.a.toString
s=q.c
l.f=s==null?B.aS:s
s=q.d
l.y=s==null?24:s
l.z=!0
l.Q=!1
s=q.r
l.r=s==null?o:s
s=q.w
l.w=s==null?p:s
l.x=B.bu
l.cx=B.r
l.ch=B.Ew
l.CW=B.aR
l.dx=B.kJ
l.dy=!0
s=l.gqa()
n=A.dy(k,l.a.z,!1,k,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,s,k)
l.fy===$&&A.b()
s=l.dx
m=s===B.kJ?l.gTa():k
n=A.YD(B.at,n,B.aF,!0,k,k,k,k,k,k,m,k,k,k,s===B.Y8?l.gTC():k,k,k,k,k,k,k)
s=l.cy
s===$&&A.b()
if(s)n=A.uP(n,B.cJ,new A.a86(l),new A.a87(l),k)
return n}}
A.a85.prototype={
$0(){this.a.cy=this.b},
$S:0}
A.a82.prototype={
$1(a){var s=this.a
if(s.c!=null)s.Ex()
return null},
$S:75}
A.a83.prototype={
$1(a){return this.a.pz()},
$S:45}
A.a84.prototype={
$1(a){return this.a},
$S:14}
A.a86.prototype={
$1(a){var s=this.a
if(s.c!=null)s.Ex()
return null},
$S:75}
A.a87.prototype={
$1(a){return this.a.pz()},
$S:45}
A.adt.prototype={
zI(a){return new A.aS(0,a.b,0,a.d)},
zT(a,b){return A.aB4(b,!0,a,this.b,this.c)},
ml(a){return!this.b.k(0,a.b)||this.c!==a.c||!1}}
A.QD.prototype={
K(a){var s,r=this,q=null,p=A.aG(a).p3.z
p.toString
s=new A.hA(!0,q,A.ahp(new A.fD(new A.aS(0,1/0,r.d,1/0),A.t3(A.aW(q,A.nL(new A.wJ(q,r.c,r.w,r.x,q,q,q,q,q),1,1),B.l,q,q,r.r,q,r.f,r.e,q),q,B.cy,!0,p,q,q,B.aL),q),r.y),q)
p=r.at
if(p!=null||r.ax!=null)s=A.uP(s,B.cJ,p,r.ax,q)
p=A.di(a)
p=p==null?q:p.e.d
if(p==null)p=0
return new A.mi(0,0,0,p,q,q,new A.t_(new A.adt(r.z,r.Q,!0),s,q),q)}}
A.zi.prototype={
m(){var s=this,r=s.d2$
if(r!=null)r.H(0,s.gkZ())
s.d2$=null
s.aJ()},
bY(){this.d7()
this.cu()
this.l_()}}
A.wZ.prototype={
gv(a){var s=this,r=null
return A.Y(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,r,r,r,r,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.S(b)!==A.A(r))return!1
if(b instanceof A.wZ)if(b.a==r.a)if(J.f(b.b,r.b))if(J.f(b.c,r.c))if(b.d==r.d)if(J.f(b.r,r.r))if(J.f(b.w,r.w))s=!0
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.x_.prototype={
G(){return"TooltipTriggerMode."+this.b}}
A.QE.prototype={}
A.p8.prototype={
G(){return"ScriptCategory."+this.b}}
A.x2.prototype={
JH(a){switch(a.a){case 0:return this.c
case 1:return this.d
case 2:return this.e}},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.x2&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c.k(0,s.c)&&b.d.k(0,s.d)&&b.e.k(0,s.e)},
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.R1.prototype={}
A.Ai.prototype={
j(a){var s=this
if(s.gfQ(s)===0)return A.agY(s.gfR(),s.gfS())
if(s.gfR()===0)return A.agX(s.gfQ(s),s.gfS())
return A.agY(s.gfR(),s.gfS())+" + "+A.agX(s.gfQ(s),0)},
k(a,b){var s=this
if(b==null)return!1
return b instanceof A.Ai&&b.gfR()===s.gfR()&&b.gfQ(b)===s.gfQ(s)&&b.gfS()===s.gfS()},
gv(a){var s=this
return A.Y(s.gfR(),s.gfQ(s),s.gfS(),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.cX.prototype={
gfR(){return this.a},
gfQ(a){return 0},
gfS(){return this.b},
ab(a,b){return new A.cX(this.a-b.a,this.b-b.b)},
W(a,b){return new A.cX(this.a+b.a,this.b+b.b)},
a_(a,b){return new A.cX(this.a*b,this.b*b)},
l2(a){var s=a.a/2,r=a.b/2
return new A.y(s+this.a*s,r+this.b*r)},
Yh(a){var s=a.a/2,r=a.b/2
return new A.y(s+this.a*s,r+this.b*r)},
Jv(a){var s=a.a,r=(a.c-s)/2,q=a.b,p=(a.d-q)/2
return new A.y(s+r+this.a*r,q+p+this.b*p)},
xM(a,b){var s=b.a,r=a.a,q=(b.c-s-r)/2,p=b.b,o=a.b,n=(b.d-p-o)/2
s=s+q+this.a*q
p=p+n+this.b*n
return new A.E(s,p,s+r,p+o)},
X(a){return this},
j(a){return A.agY(this.a,this.b)}}
A.ee.prototype={
gfR(){return 0},
gfQ(a){return this.a},
gfS(){return this.b},
ab(a,b){return new A.ee(this.a-b.a,this.b-b.b)},
W(a,b){return new A.ee(this.a+b.a,this.b+b.b)},
a_(a,b){return new A.ee(this.a*b,this.b*b)},
X(a){var s=this
switch(a.a){case 0:return new A.cX(-s.a,s.b)
case 1:return new A.cX(s.a,s.b)}},
j(a){return A.agX(this.a,this.b)}}
A.NV.prototype={
a_(a,b){return new A.NV(this.a*b,this.b*b,this.c*b)},
X(a){var s=this
switch(a.a){case 0:return new A.cX(s.a-s.b,s.c)
case 1:return new A.cX(s.a+s.b,s.c)}},
gfR(){return this.a},
gfQ(a){return this.b},
gfS(){return this.c}}
A.p0.prototype={
G(){return"RenderComparison."+this.b}}
A.r9.prototype={
G(){return"Axis."+this.b}}
A.x6.prototype={
G(){return"VerticalDirection."+this.b}}
A.lb.prototype={
G(){return"AxisDirection."+this.b}}
A.vf.prototype={
HE(a,b,c,d){return $.av().rr(a,!1,c,d)},
a17(a){return this.HE(a,!1,null,null)},
HF(a,b,c,d){var s=$.av(),r=a.a
r.toString
return s.rr(r,!1,c,d)},
a1a(a){return this.HF(a,!1,null,null)},
$idq:1}
A.Qk.prototype={
aB(){var s,r,q
for(s=this.a,s=A.ig(s,s.r),r=A.n(s).c;s.q();){q=s.d;(q==null?r.a(q):q).$0()}},
U(a,b){this.a.C(0,b)},
H(a,b){this.a.u(0,b)}}
A.nC.prototype={
pd(a){var s=this
return new A.y9(s.gcX().ab(0,a.gcX()),s.gee().ab(0,a.gee()),s.gea().ab(0,a.gea()),s.geC().ab(0,a.geC()),s.gcY().ab(0,a.gcY()),s.ged().ab(0,a.ged()),s.geD().ab(0,a.geD()),s.ge9().ab(0,a.ge9()))},
C(a,b){var s=this
return new A.y9(s.gcX().W(0,b.gcX()),s.gee().W(0,b.gee()),s.gea().W(0,b.gea()),s.geC().W(0,b.geC()),s.gcY().W(0,b.gcY()),s.ged().W(0,b.ged()),s.geD().W(0,b.geD()),s.ge9().W(0,b.ge9()))},
j(a){var s,r,q,p,o=this
if(o.gcX().k(0,o.gee())&&o.gee().k(0,o.gea())&&o.gea().k(0,o.geC()))if(!o.gcX().k(0,B.M))s=o.gcX().a===o.gcX().b?"BorderRadius.circular("+B.d.R(o.gcX().a,1)+")":"BorderRadius.all("+o.gcX().j(0)+")"
else s=null
else{r=""+"BorderRadius.only("
if(!o.gcX().k(0,B.M)){r+="topLeft: "+o.gcX().j(0)
q=!0}else q=!1
if(!o.gee().k(0,B.M)){if(q)r+=", "
r+="topRight: "+o.gee().j(0)
q=!0}if(!o.gea().k(0,B.M)){if(q)r+=", "
r+="bottomLeft: "+o.gea().j(0)
q=!0}if(!o.geC().k(0,B.M)){if(q)r+=", "
r+="bottomRight: "+o.geC().j(0)}r+=")"
s=r.charCodeAt(0)==0?r:r}if(o.gcY().k(0,o.ged())&&o.ged().k(0,o.ge9())&&o.ge9().k(0,o.geD()))if(!o.gcY().k(0,B.M))p=o.gcY().a===o.gcY().b?"BorderRadiusDirectional.circular("+B.d.R(o.gcY().a,1)+")":"BorderRadiusDirectional.all("+o.gcY().j(0)+")"
else p=null
else{r=""+"BorderRadiusDirectional.only("
if(!o.gcY().k(0,B.M)){r+="topStart: "+o.gcY().j(0)
q=!0}else q=!1
if(!o.ged().k(0,B.M)){if(q)r+=", "
r+="topEnd: "+o.ged().j(0)
q=!0}if(!o.geD().k(0,B.M)){if(q)r+=", "
r+="bottomStart: "+o.geD().j(0)
q=!0}if(!o.ge9().k(0,B.M)){if(q)r+=", "
r+="bottomEnd: "+o.ge9().j(0)}r+=")"
p=r.charCodeAt(0)==0?r:r}r=s!=null
if(r&&p!=null)return A.l(s)+" + "+p
if(r)return s
if(p!=null)return p
return"BorderRadius.zero"},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.nC&&b.gcX().k(0,s.gcX())&&b.gee().k(0,s.gee())&&b.gea().k(0,s.gea())&&b.geC().k(0,s.geC())&&b.gcY().k(0,s.gcY())&&b.ged().k(0,s.ged())&&b.geD().k(0,s.geD())&&b.ge9().k(0,s.ge9())},
gv(a){var s=this
return A.Y(s.gcX(),s.gee(),s.gea(),s.geC(),s.gcY(),s.ged(),s.geD(),s.ge9(),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.cm.prototype={
gcX(){return this.a},
gee(){return this.b},
gea(){return this.c},
geC(){return this.d},
gcY(){return B.M},
ged(){return B.M},
geD(){return B.M},
ge9(){return B.M},
d5(a){var s=this,r=s.a.qz(0,B.M),q=s.b.qz(0,B.M)
return A.a27(a,s.c.qz(0,B.M),s.d.qz(0,B.M),r,q)},
pd(a){if(a instanceof A.cm)return this.ab(0,a)
return this.AA(a)},
C(a,b){if(b instanceof A.cm)return this.W(0,b)
return this.Az(0,b)},
ab(a,b){var s=this
return new A.cm(s.a.ab(0,b.a),s.b.ab(0,b.b),s.c.ab(0,b.c),s.d.ab(0,b.d))},
W(a,b){var s=this
return new A.cm(s.a.W(0,b.a),s.b.W(0,b.b),s.c.W(0,b.c),s.d.W(0,b.d))},
a_(a,b){var s=this
return new A.cm(s.a.a_(0,b),s.b.a_(0,b),s.c.a_(0,b),s.d.a_(0,b))},
X(a){return this}}
A.y9.prototype={
a_(a,b){var s=this
return new A.y9(s.a.a_(0,b),s.b.a_(0,b),s.c.a_(0,b),s.d.a_(0,b),s.e.a_(0,b),s.f.a_(0,b),s.r.a_(0,b),s.w.a_(0,b))},
X(a){var s=this
switch(a.a){case 0:return new A.cm(s.a.W(0,s.f),s.b.W(0,s.e),s.c.W(0,s.w),s.d.W(0,s.r))
case 1:return new A.cm(s.a.W(0,s.e),s.b.W(0,s.f),s.c.W(0,s.r),s.d.W(0,s.w))}},
gcX(){return this.a},
gee(){return this.b},
gea(){return this.c},
geC(){return this.d},
gcY(){return this.e},
ged(){return this.f},
geD(){return this.r},
ge9(){return this.w}}
A.re.prototype={
G(){return"BorderStyle."+this.b}}
A.cY.prototype={
aK(a,b){var s=Math.max(0,this.b*b),r=b<=0?B.bW:this.c
return new A.cY(this.a,s,r,-1)},
hl(){switch(this.c.a){case 1:var s=$.av().bd()
s.sai(0,this.a)
s.si2(this.b)
s.sdk(0,B.b_)
return s
case 0:s=$.av().bd()
s.sai(0,B.ag)
s.si2(0)
s.sdk(0,B.b_)
return s}},
ge7(){return this.b*(1-(1+this.d)/2)},
gAt(){return this.b*(1+this.d)/2},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.cY&&b.a.k(0,s.a)&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
bP(){return"BorderSide"}}
A.bB.prototype={
eI(a,b,c){return null},
C(a,b){return this.eI(a,b,!1)},
W(a,b){var s=this.C(0,b)
if(s==null)s=b.eI(0,this,!0)
return s==null?new A.fv(A.a([b,this],t.h_)):s},
c_(a,b){if(a==null)return this.aK(0,b)
return null},
c0(a,b){if(a==null)return this.aK(0,1-b)
return null},
j(a){return"ShapeBorder()"}}
A.dk.prototype={
glh(){var s=Math.max(this.a.ge7(),0)
return new A.bp(s,s,s,s)},
c_(a,b){if(a==null)return this.aK(0,b)
return null},
c0(a,b){if(a==null)return this.aK(0,1-b)
return null}}
A.fv.prototype={
glh(){return B.b.xw(this.a,B.aS,new A.a9n())},
eI(a,b,c){var s,r,q,p=b instanceof A.fv
if(!p){s=this.a
r=c?B.b.gaa(s):B.b.gM(s)
q=r.eI(0,b,c)
if(q==null)q=b.eI(0,r,!c)
if(q!=null){p=A.az(s,!0,t.Fy)
p[c?p.length-1:0]=q
return new A.fv(p)}}s=A.a([],t.h_)
if(c)B.b.I(s,this.a)
if(p)B.b.I(s,b.a)
else s.push(b)
if(!c)B.b.I(s,this.a)
return new A.fv(s)},
C(a,b){return this.eI(a,b,!1)},
aK(a,b){var s=this.a,r=A.an(s).h("aH<1,bB>")
return new A.fv(A.az(new A.aH(s,new A.a9o(b),r),!0,r.h("bn.E")))},
c_(a,b){return A.amX(a,this,b)},
c0(a,b){return A.amX(this,a,b)},
f_(a,b){return B.b.gM(this.a).f_(a,b)},
he(a,b,c){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q){p=s[q]
p.he(a,b,c)
b=p.glh().X(c).wN(b)}},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.S(b)!==A.A(this))return!1
return b instanceof A.fv&&A.cM(b.a,this.a)},
gv(a){return A.cE(this.a)},
j(a){var s=this.a,r=A.an(s).h("cc<1>")
return new A.aH(new A.cc(s,r),new A.a9p(),r.h("aH<bn.E,m>")).b7(0," + ")}}
A.a9n.prototype={
$2(a,b){return a.C(0,b.glh())},
$S:200}
A.a9o.prototype={
$1(a){return a.aK(0,this.a)},
$S:201}
A.a9p.prototype={
$1(a){return a.j(0)},
$S:202}
A.Lz.prototype={}
A.rn.prototype={
G(){return"BoxShape."+this.b}}
A.AG.prototype={
eI(a,b,c){return null},
C(a,b){return this.eI(a,b,!1)},
f_(a,b){var s=$.av().cJ()
s.nf(a)
return s}}
A.dd.prototype={
glh(){var s,r=this
if(r.gFy()){s=r.a.ge7()
return new A.bp(s,s,s,s)}return new A.bp(r.d.ge7(),r.a.ge7(),r.b.ge7(),r.c.ge7())},
gof(){var s,r,q=this,p=q.a,o=p.a,n=q.b
if(n.a.k(0,o)&&q.c.a.k(0,o)&&q.d.a.k(0,o))if(q.gFy()){s=p.c
if(n.c===s&&q.c.c===s&&q.d.c===s){r=p.d
p=n.d===r&&q.c.d===r&&q.d.d===r}else p=!1}else p=!1
else p=!1
return p},
gFy(){var s=this,r=s.a.b
return s.b.b===r&&s.c.b===r&&s.d.b===r},
eI(a,b,c){var s=this
if(b instanceof A.dd&&A.ix(s.a,b.a)&&A.ix(s.b,b.b)&&A.ix(s.c,b.c)&&A.ix(s.d,b.d))return new A.dd(A.fC(s.a,b.a),A.fC(s.b,b.b),A.fC(s.c,b.c),A.fC(s.d,b.d))
return null},
C(a,b){return this.eI(a,b,!1)},
aK(a,b){var s=this
return new A.dd(s.a.aK(0,b),s.b.aK(0,b),s.c.aK(0,b),s.d.aK(0,b))},
c_(a,b){if(a instanceof A.dd)return A.ah1(a,this,b)
return this.B0(a,b)},
c0(a,b){if(a instanceof A.dd)return A.ah1(this,a,b)
return this.B1(a,b)},
rU(a,b,c,d,e){var s,r=this
if(r.gof()){s=r.a
switch(s.c.a){case 0:return
case 1:switch(d.a){case 1:A.akh(a,b,s)
break
case 0:if(c!=null&&!c.k(0,B.ax)){A.aki(a,b,s,c)
return}A.akj(a,b,s)
break}return}}A.aoN(a,b,r.c,r.d,r.b,r.a)},
he(a,b,c){return this.rU(a,b,null,B.Z,c)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.dd&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c.k(0,s.c)&&b.d.k(0,s.d)},
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s,r,q=this
if(q.gof())return"Border.all("+q.a.j(0)+")"
s=A.a([],t.s)
r=q.a
if(!r.k(0,B.A))s.push("top: "+r.j(0))
r=q.b
if(!r.k(0,B.A))s.push("right: "+r.j(0))
r=q.c
if(!r.k(0,B.A))s.push("bottom: "+r.j(0))
r=q.d
if(!r.k(0,B.A))s.push("left: "+r.j(0))
return"Border("+B.b.b7(s,", ")+")"}}
A.dF.prototype={
glh(){var s,r=this
if(r.gof()){s=r.a.ge7()
return new A.aT(s,s,s,s)}return new A.aT(r.b.ge7(),r.a.ge7(),r.c.ge7(),r.d.ge7())},
gof(){var s,r,q,p=this,o=p.a,n=o.a,m=p.b
if(!m.a.k(0,n)||!p.c.a.k(0,n)||!p.d.a.k(0,n))return!1
s=o.b
if(m.b!==s||p.c.b!==s||p.d.b!==s)return!1
r=o.c
if(m.c!==r||p.c.c!==r||p.d.c!==r)return!1
q=o.d
if(!(m.d===q&&p.d.d===q&&p.c.d===q))return!1
return!0},
eI(a,b,c){var s,r,q,p=this,o=null
if(b instanceof A.dF){s=p.a
r=b.a
if(A.ix(s,r)&&A.ix(p.b,b.b)&&A.ix(p.c,b.c)&&A.ix(p.d,b.d))return new A.dF(A.fC(s,r),A.fC(p.b,b.b),A.fC(p.c,b.c),A.fC(p.d,b.d))
return o}if(b instanceof A.dd){s=b.a
r=p.a
if(!A.ix(s,r)||!A.ix(b.c,p.d))return o
q=p.b
if(!q.k(0,B.A)||!p.c.k(0,B.A)){if(!b.d.k(0,B.A)||!b.b.k(0,B.A))return o
return new A.dF(A.fC(s,r),q,p.c,A.fC(b.c,p.d))}return new A.dd(A.fC(s,r),b.b,A.fC(b.c,p.d),b.d)}return o},
C(a,b){return this.eI(a,b,!1)},
aK(a,b){var s=this
return new A.dF(s.a.aK(0,b),s.b.aK(0,b),s.c.aK(0,b),s.d.aK(0,b))},
c_(a,b){if(a instanceof A.dF)return A.ah0(a,this,b)
return this.B0(a,b)},
c0(a,b){if(a instanceof A.dF)return A.ah0(this,a,b)
return this.B1(a,b)},
rU(a,b,c,d,e){var s,r,q,p=this
if(p.gof()){s=p.a
switch(s.c.a){case 0:return
case 1:switch(d.a){case 1:A.akh(a,b,s)
break
case 0:if(c!=null&&!c.k(0,B.ax)){A.aki(a,b,s,c)
return}A.akj(a,b,s)
break}return}}switch(e.a){case 0:r=p.c
q=p.b
break
case 1:r=p.b
q=p.c
break
default:r=null
q=null}A.aoN(a,b,p.d,r,q,p.a)},
he(a,b,c){return this.rU(a,b,null,B.Z,c)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.dF&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c.k(0,s.c)&&b.d.k(0,s.d)},
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this,r=A.a([],t.s),q=s.a
if(!q.k(0,B.A))r.push("top: "+q.j(0))
q=s.b
if(!q.k(0,B.A))r.push("start: "+q.j(0))
q=s.c
if(!q.k(0,B.A))r.push("end: "+q.j(0))
q=s.d
if(!q.k(0,B.A))r.push("bottom: "+q.j(0))
return"BorderDirectional("+B.b.b7(r,", ")+")"}}
A.cn.prototype={
gd3(a){var s=this.c
return s==null?null:s.glh()},
tk(a,b){var s,r,q
switch(this.w.a){case 1:s=A.IJ(a.gba(),a.gf1()/2)
r=$.av().cJ()
r.w9(s)
return r
case 0:r=this.d
if(r!=null){q=$.av().cJ()
q.hz(r.X(b).d5(a))
return q}r=$.av().cJ()
r.nf(a)
return r}},
aK(a,b){var s=this,r=null,q=A.t(r,s.a,b),p=A.akk(r,s.c,b),o=A.hj(r,s.d,b),n=A.akn(r,s.e,b),m=s.f
m=m==null?r:m.aK(0,b)
return new A.cn(q,s.b,p,o,n,m,s.w)},
gxT(){return this.e!=null},
c_(a,b){if(a==null)return this.aK(0,b)
if(a instanceof A.cn)return A.akl(a,this,b)
return this.AD(a,b)},
c0(a,b){if(a==null)return this.aK(0,1-b)
if(a instanceof A.cn)return A.akl(this,a,b)
return this.AE(a,b)},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.S(b)!==A.A(r))return!1
if(b instanceof A.cn)if(J.f(b.a,r.a))if(J.f(b.b,r.b))if(J.f(b.c,r.c))if(J.f(b.d,r.d))if(A.cM(b.e,r.e))if(J.f(b.f,r.f))s=b.w===r.w
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gv(a){var s=this,r=s.e
r=r==null?null:A.cE(r)
return A.Y(s.a,s.b,s.c,s.d,r,s.f,null,s.w,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
Hu(a,b,c){var s
switch(this.w.a){case 0:s=this.d
if(s!=null)return s.X(c).d5(new A.E(0,0,0+a.a,0+a.b)).B(0,b)
return!0
case 1:return b.ab(0,a.im(B.k)).gcM()<=Math.min(a.a,a.b)/2}},
qF(a){return new A.a99(this,a)}}
A.a99.prototype={
DB(a,b,c,d){var s=this.b
switch(s.w.a){case 1:a.h3(b.gba(),b.gf1()/2,c)
break
case 0:s=s.d
if(s==null||s.k(0,B.ax))a.d0(b,c)
else a.dq(s.X(d).d5(b),c)
break}},
Vf(a,b,c){var s,r,q,p,o,n,m=this.b.e
if(m==null)return
for(s=m.length,r=0;r<m.length;m.length===s||(0,A.R)(m),++r){q=m[r]
p=$.av().bd()
p.sai(0,q.a)
o=q.e
n=q.c
p.sa1P(new A.FQ(o,n>0?n*0.57735+0.5:0))
o=b.d6(q.b)
n=q.d
this.DB(a,new A.E(o.a-n,o.b-n,o.c+n,o.d+n),p,c)}},
Vb(a,b,c){var s,r,q=this,p=q.b,o=p.b
if(o==null)return
if(q.e==null)q.e=new A.DF(o,q.a)
switch(p.w.a){case 1:s=A.IJ(b.gba(),b.gf1()/2)
r=$.av().cJ()
r.w9(s)
break
case 0:p=p.d
if(p!=null){r=$.av().cJ()
r.hz(p.X(c.d).d5(b))}else r=null
break
default:r=null}q.e.rT(a,b,r,c)},
m(){var s,r=this.e
if(r!=null){s=r.c
if(s!=null)s.H(0,new A.dh(r.gCN(),null,null))
s=r.d
if(s!=null)s.a.m()
r.d=null}this.L3()},
ov(a,b,c){var s,r,q,p,o=this,n=c.e,m=b.a,l=b.b,k=new A.E(m,l,m+n.a,l+n.b),j=c.d
o.Vf(a,k,j)
n=o.b
m=n.a
l=m==null
if(!l||n.f!=null){if(o.c!=null)s=n.f!=null&&!J.f(o.d,k)
else s=!0
if(s){r=$.av().bd()
if(!l)r.sai(0,m)
m=n.f
if(m!=null){l=m.d.X(j).Jv(k)
s=m.e.X(j).Jv(k)
q=m.a
p=m.v5()
m=m.f
r.sAf(A.ahx(l,s,q,p,m,null))
o.d=k}o.c=r}m=o.c
m.toString
o.DB(a,k,m,j)}o.Vb(a,k,c)
m=n.c
if(m!=null){l=n.d
l=l==null?null:l.X(j)
m.rU(a,k,l,n.w,j)}},
j(a){return"BoxPainter for "+this.b.j(0)}}
A.le.prototype={
G(){return"BoxFit."+this.b}}
A.EL.prototype={}
A.iy.prototype={
aK(a,b){var s=this
return new A.iy(s.d*b,s.e,s.a,s.b.a_(0,b),s.c*b)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.iy&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c===s.c&&b.d===s.d&&b.e===s.e},
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this
return"BoxShadow("+s.a.j(0)+", "+s.b.j(0)+", "+A.hc(s.c)+", "+A.hc(s.d)+", "+s.e.j(0)+")"}}
A.de.prototype={
aK(a,b){return new A.de(this.b,this.a.aK(0,b))},
c_(a,b){var s,r
if(a instanceof A.de){s=A.aB(a.a,this.a,b)
r=A.Q(a.b,this.b,b)
r.toString
return new A.de(A.F(r,0,1),s)}return this.kr(a,b)},
c0(a,b){var s,r
if(a instanceof A.de){s=A.aB(this.a,a.a,b)
r=A.Q(this.b,a.b,b)
r.toString
return new A.de(A.F(r,0,1),s)}return this.ks(a,b)},
f_(a,b){var s=$.av().cJ()
s.w9(this.Bm(a))
return s},
he(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=r.b*r.d
if(this.b===0)a.h3(b.gba(),(b.gf1()+s)/2,r.hl())
else a.nT(this.Bm(b).dw(s/2),r.hl())
break}},
Bm(a){var s,r,q,p,o,n,m,l=this.b
if(l===0||a.c-a.a===a.d-a.b)return A.IJ(a.gba(),a.gf1()/2)
s=a.c
r=a.a
q=s-r
p=a.d
o=a.b
n=p-o
l=1-l
if(q<n){m=l*(n-q)/2
return new A.E(r,o+m,s,p-m)}else{m=l*(q-n)/2
return new A.E(r+m,o,s-m,p)}},
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return b instanceof A.de&&b.a.k(0,this.a)&&b.b===this.b},
gv(a){return A.Y(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this.b
if(s!==0)return"CircleBorder("+this.a.j(0)+", eccentricity: "+A.l(s)+")"
return"CircleBorder("+this.a.j(0)+")"}}
A.Uz.prototype={
um(a,b,c,d){var s=this
s.gby(s).bR(0)
switch(b.a){case 0:break
case 1:a.$1(!1)
break
case 2:a.$1(!0)
break
case 3:a.$1(!0)
s.gby(s).ex(c,$.av().bd())
break}d.$0()
if(b===B.c_)s.gby(s).bA(0)
s.gby(s).bA(0)},
YV(a,b,c,d){this.um(new A.UA(this,a),b,c,d)},
YX(a,b,c,d){this.um(new A.UB(this,a),b,c,d)},
YZ(a,b,c,d){this.um(new A.UC(this,a),b,c,d)}}
A.UA.prototype={
$1(a){var s=this.a
return s.gby(s).G1(0,this.b,a)},
$S:25}
A.UB.prototype={
$1(a){var s=this.a
return s.gby(s).G2(this.b,a)},
$S:25}
A.UC.prototype={
$1(a){var s=this.a
return s.gby(s).YY(this.b,a)},
$S:25}
A.jN.prototype={
i(a,b){return this.b.i(0,b)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return s.Ls(0,b)&&A.n(s).h("jN<jN.T>").b(b)&&A.ag1(b.b,s.b)},
gv(a){return A.Y(A.A(this),this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"ColorSwatch(primary value: "+this.Lt(0)+")"}}
A.fF.prototype={
bP(){return"Decoration"},
gd3(a){return B.aS},
gxT(){return!1},
c_(a,b){return null},
c0(a,b){return null},
Hu(a,b,c){return!0},
tk(a,b){throw A.d(A.N("This Decoration subclass does not expect to be used for clipping."))}}
A.AH.prototype={
m(){}}
A.Mi.prototype={}
A.lQ.prototype={
G(){return"ImageRepeat."+this.b}}
A.DE.prototype={
k(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(J.S(b)!==A.A(this))return!1
if(b instanceof A.DE)if(b.a.k(0,this.a))if(B.Q.k(0,B.Q))s=!0
else s=!1
else s=!1
else s=!1
return s},
gv(a){return A.Y(this.a,null,B.L,B.Q,null,B.bh,!1,1,1,B.cQ,!1,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=A.a([this.a.j(0)],t.s),r=!0
if(r)s.push(B.L.j(0))
s.push(B.Q.j(0))
s.push("scale 1")
s.push("opacity 1")
s.push(B.cQ.j(0))
return"DecorationImage("+B.b.b7(s,", ")+")"}}
A.DF.prototype={
rT(a,b,c,d){var s,r,q,p,o=this,n=null,m=o.a.a.X(d),l=m.a
if(l==null)l=m
s=o.c
r=s==null
if(r)q=n
else{q=s.a
if(q==null)q=s}if(l!==q){p=new A.dh(o.gCN(),n,n)
if(!r)s.H(0,p)
o.c=m
m.U(0,p)}if(o.d==null)return
l=c!=null
if(l){a.bR(0)
a.wv(0,c)}s=o.d
r=s.a
A.aoO(B.Q,a,n,n,s.c,B.cQ,B.L,!1,r,!1,!1,1,b,B.bh,s.b)
if(l)a.bA(0)},
SH(a,b){var s,r,q=this
if(J.f(q.d,a))return
s=q.d
if(s!=null)if(a.a.HQ(s.a)){r=s.b
s=r===r&&a.c==s.c}else s=!1
else s=!1
if(s){a.a.m()
return}s=q.d
if(s!=null)s.a.m()
q.d=a
if(!b)q.b.$0()},
j(a){return"DecorationImagePainter(stream: "+A.l(this.c)+", image: "+A.l(this.d)+") for "+this.a.j(0)}}
A.d0.prototype={
gca(){var s=this
return s.gcU(s)+s.gcV(s)+s.gdN(s)+s.gdO()},
Yg(a){var s=this
switch(a.a){case 0:return s.gca()
case 1:return s.gb6(s)+s.gb9(s)}},
C(a,b){var s=this
return new A.kL(s.gcU(s)+b.gcU(b),s.gcV(s)+b.gcV(b),s.gdN(s)+b.gdN(b),s.gdO()+b.gdO(),s.gb6(s)+b.gb6(b),s.gb9(s)+b.gb9(b))},
hB(a,b,c){var s=this
return new A.kL(A.F(s.gcU(s),b.a,c.a),A.F(s.gcV(s),b.c,c.b),A.F(s.gdN(s),0,c.c),A.F(s.gdO(),0,c.d),A.F(s.gb6(s),b.b,c.e),A.F(s.gb9(s),b.d,c.f))},
j(a){var s=this
if(s.gdN(s)===0&&s.gdO()===0){if(s.gcU(s)===0&&s.gcV(s)===0&&s.gb6(s)===0&&s.gb9(s)===0)return"EdgeInsets.zero"
if(s.gcU(s)===s.gcV(s)&&s.gcV(s)===s.gb6(s)&&s.gb6(s)===s.gb9(s))return"EdgeInsets.all("+B.d.R(s.gcU(s),1)+")"
return"EdgeInsets("+B.d.R(s.gcU(s),1)+", "+B.d.R(s.gb6(s),1)+", "+B.d.R(s.gcV(s),1)+", "+B.d.R(s.gb9(s),1)+")"}if(s.gcU(s)===0&&s.gcV(s)===0)return"EdgeInsetsDirectional("+B.d.R(s.gdN(s),1)+", "+B.d.R(s.gb6(s),1)+", "+B.d.R(s.gdO(),1)+", "+B.d.R(s.gb9(s),1)+")"
return"EdgeInsets("+B.d.R(s.gcU(s),1)+", "+B.d.R(s.gb6(s),1)+", "+B.d.R(s.gcV(s),1)+", "+B.d.R(s.gb9(s),1)+") + EdgeInsetsDirectional("+B.d.R(s.gdN(s),1)+", 0.0, "+B.d.R(s.gdO(),1)+", 0.0)"},
k(a,b){var s=this
if(b==null)return!1
return b instanceof A.d0&&b.gcU(b)===s.gcU(s)&&b.gcV(b)===s.gcV(s)&&b.gdN(b)===s.gdN(s)&&b.gdO()===s.gdO()&&b.gb6(b)===s.gb6(s)&&b.gb9(b)===s.gb9(s)},
gv(a){var s=this
return A.Y(s.gcU(s),s.gcV(s),s.gdN(s),s.gdO(),s.gb6(s),s.gb9(s),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.bp.prototype={
gcU(a){return this.a},
gb6(a){return this.b},
gcV(a){return this.c},
gb9(a){return this.d},
gdN(a){return 0},
gdO(){return 0},
wN(a){var s=this
return new A.E(a.a+s.a,a.b+s.b,a.c-s.c,a.d-s.d)},
C(a,b){if(b instanceof A.bp)return this.W(0,b)
return this.AF(0,b)},
hB(a,b,c){var s=this
return new A.bp(A.F(s.a,b.a,c.a),A.F(s.b,b.b,c.e),A.F(s.c,b.c,c.b),A.F(s.d,b.d,c.f))},
ab(a,b){var s=this
return new A.bp(s.a-b.a,s.b-b.b,s.c-b.c,s.d-b.d)},
W(a,b){var s=this
return new A.bp(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
a_(a,b){var s=this
return new A.bp(s.a*b,s.b*b,s.c*b,s.d*b)},
X(a){return this},
nC(a,b,c,d){var s=this,r=b==null?s.a:b,q=d==null?s.b:d,p=c==null?s.c:c
return new A.bp(r,q,p,a==null?s.d:a)},
wz(a){return this.nC(a,null,null,null)}}
A.aT.prototype={
gdN(a){return this.a},
gb6(a){return this.b},
gdO(){return this.c},
gb9(a){return this.d},
gcU(a){return 0},
gcV(a){return 0},
C(a,b){if(b instanceof A.aT)return this.W(0,b)
return this.AF(0,b)},
ab(a,b){var s=this
return new A.aT(s.a-b.a,s.b-b.b,s.c-b.c,s.d-b.d)},
W(a,b){var s=this
return new A.aT(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
a_(a,b){var s=this
return new A.aT(s.a*b,s.b*b,s.c*b,s.d*b)},
X(a){var s=this
switch(a.a){case 0:return new A.bp(s.c,s.b,s.a,s.d)
case 1:return new A.bp(s.a,s.b,s.c,s.d)}}}
A.kL.prototype={
a_(a,b){var s=this
return new A.kL(s.a*b,s.b*b,s.c*b,s.d*b,s.e*b,s.f*b)},
X(a){var s=this
switch(a.a){case 0:return new A.bp(s.d+s.a,s.e,s.c+s.b,s.f)
case 1:return new A.bp(s.c+s.a,s.e,s.d+s.b,s.f)}},
gcU(a){return this.a},
gcV(a){return this.b},
gdN(a){return this.c},
gdO(){return this.d},
gb6(a){return this.e},
gb9(a){return this.f}}
A.a9m.prototype={}
A.afc.prototype={
$1(a){return a<=this.a},
$S:204}
A.aeC.prototype={
$1(a){var s=this,r=A.t(A.ao1(s.a,s.b,a),A.ao1(s.c,s.d,a),s.e)
r.toString
return r},
$S:205}
A.Z7.prototype={
v5(){var s,r,q,p=this.b
if(p!=null)return p
p=this.a.length
s=1/(p-1)
if(p>4294967295)A.U(A.bJ(p,0,4294967295,"length",null))
r=J.lT(new Array(p),t.i)
for(q=0;q<p;++q)r[q]=q*s
return r}}
A.lX.prototype={
aK(a,b){var s=this,r=s.a,q=A.an(r).h("aH<1,L>")
return new A.lX(s.d,s.e,s.f,A.az(new A.aH(r,new A.a_J(b),q),!0,q.h("bn.E")),s.b,null)},
c_(a,b){var s=A.alt(a,this,b)
return s},
c0(a,b){var s=A.alt(this,a,b)
return s},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.lX&&b.d.k(0,s.d)&&b.e.k(0,s.e)&&b.f===s.f&&A.cM(b.a,s.a)&&A.cM(b.b,s.b)},
gv(a){var s=this,r=A.cE(s.a),q=s.b
q=q==null?null:A.cE(q)
return A.Y(s.d,s.e,s.f,s.c,r,q,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this,r=A.a(["begin: "+s.d.j(0),"end: "+s.e.j(0),"colors: "+A.l(s.a)],t.s),q=s.b
if(q!=null)r.push("stops: "+A.l(q))
r.push("tileMode: "+s.f.j(0))
return"LinearGradient("+B.b.b7(r,", ")+")"}}
A.a_J.prototype={
$1(a){var s=A.t(null,a,this.a)
s.toString
return s},
$S:65}
A.Zz.prototype={
V(a){var s,r,q,p
for(s=this.b,r=s.gaX(s),r=new A.e1(J.aw(r.a),r.b),q=A.n(r).z[1];r.q();){p=r.a;(p==null?q.a(p):p).m()}s.V(0)
for(s=this.a,r=s.gaX(s),r=new A.e1(J.aw(r.a),r.b),q=A.n(r).z[1];r.q();){p=r.a
if(p==null)p=q.a(p)
p.a.H(0,p.b)}s.V(0)
this.f=0},
lr(a){var s,r,q,p=this,o=p.c.u(0,a)
if(o!=null){s=o.a
r=o.d
r===$&&A.b()
if(s.w)A.U(A.a6(u.V))
B.b.u(s.x,r)
o.B3()}q=p.a.u(0,a)
if(q!=null){q.a.H(0,q.b)
return!0}o=p.b.u(0,a)
if(o!=null){s=p.f
r=o.b
r.toString
p.f=s-r
o.m()
return!0}return!1},
EY(a,b,c){var s,r=this,q=b.b
if(q!=null&&q<=104857600&&!0){s=r.f
q.toString
r.f=s+q
r.b.l(0,a,b)
r.PP(c)}else b.m()},
vQ(a,b,c){var s=this.c.br(0,a,new A.ZC(this,b,a))
if(s.b==null)s.b=c},
IJ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g={}
g.a=g.b=null
q=i.a
p=q.i(0,b)
o=p==null?h:p.a
g.c=o
if(o!=null)return o
p=i.b
n=p.u(0,b)
if(n!=null){g=n.a
i.vQ(b,g,n.b)
p.l(0,b,n)
return g}m=i.c.i(0,b)
if(m!=null){g=m.a
i.EY(b,new A.xi(g,m.b,g.lP()),h)
return g}try{o=g.c=c.$0()
i.vQ(b,o,h)
p=o}catch(l){s=A.aj(l)
r=A.aA(l)
d.$2(s,r)
return h}g.d=!1
k=A.bd("pendingImage")
j=new A.dh(new A.ZD(g,i,b,!0,k),h,h)
k.b=new A.Om(p,j)
q.l(0,b,k.aC())
g.c.U(0,j)
return g.c},
T(a,b){return this.a.i(0,b)!=null||this.b.i(0,b)!=null},
PP(a){var s,r,q,p,o,n=this,m=n.b,l=A.n(m).h("b0<1>")
while(!0){if(!(n.f>104857600||m.a>1000))break
s=new A.b0(m,l)
r=s.ga4(s)
if(!r.q())A.U(A.bA())
q=r.gF(r)
p=m.i(0,q)
s=n.f
o=p.b
o.toString
n.f=s-o
p.m()
m.u(0,q)}}}
A.ZC.prototype={
$0(){return A.axp(this.b,new A.ZB(this.a,this.c))},
$S:206}
A.ZB.prototype={
$0(){this.a.c.u(0,this.b)},
$S:0}
A.ZD.prototype={
$2(a,b){var s,r,q,p,o,n=this
if(a!=null){s=a.a
r=s.gcp(s)*s.gbC(s)*4
s.m()}else r=null
s=n.a
q=s.c
p=new A.xi(q,r,q.lP())
q=n.b
o=n.c
q.vQ(o,s.c,r)
if(n.d)q.EY(o,p,s.a)
else p.m()
q.a.u(0,o)
if(!s.d){q=n.e.aC()
q.a.H(0,q.b)}s.d=!0},
$S:207}
A.LI.prototype={
m(){$.bP.ax$.push(new A.a9d(this))}}
A.a9d.prototype={
$1(a){var s=this.a,r=s.c
if(r!=null)r.m()
s.c=null},
$S:2}
A.xi.prototype={}
A.qg.prototype={
P_(a,b,c){var s=new A.abg(this,b)
this.d=s
if(a.w)A.U(A.a6(u.V))
a.x.push(s)},
j(a){return"<optimized out>#"+A.bL(this)}}
A.abg.prototype={
$0(){var s,r,q
this.b.$0()
s=this.a
r=s.a
q=s.d
q===$&&A.b()
if(r.w)A.U(A.a6(u.V))
B.b.u(r.x,q)
s.B3()},
$S:0}
A.Om.prototype={}
A.ol.prototype={
k(a,b){var s=this
if(b==null)return!1
if(J.S(b)!==A.A(s))return!1
return b instanceof A.ol&&b.a==s.a&&b.b==s.b&&J.f(b.c,s.c)&&b.d==s.d&&J.f(b.e,s.e)&&b.f==s.f},
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.e,s.f,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s,r=this,q=""+"ImageConfiguration(",p=r.a
if(p!=null){q+="bundle: "+p.j(0)
s=!0}else s=!1
p=r.b
if(p!=null){if(s)q+=", "
p=q+("devicePixelRatio: "+B.d.R(p,1))
q=p
s=!0}p=r.c
if(p!=null){if(s)q+=", "
p=q+("locale: "+p.j(0))
q=p
s=!0}p=r.d
if(p!=null){if(s)q+=", "
p=q+("textDirection: "+p.j(0))
q=p
s=!0}p=r.e
if(p!=null){if(s)q+=", "
p=q+("size: "+p.j(0))
q=p
s=!0}p=r.f
if(p!=null){if(s)q+=", "
p=q+("platform: "+p.b)
q=p}q+=")"
return q.charCodeAt(0)==0?q:q}}
A.dJ.prototype={
X(a){var s=new A.ZP()
this.Qi(a,new A.ZN(this,a,s),new A.ZO(this,a,s))
return s},
Qi(a,b,c){var s,r,q,p,o,n={}
n.a=null
n.b=!1
s=new A.ZK(n,c)
r=null
try{r=this.rL(a)}catch(o){q=A.aj(o)
p=A.aA(o)
s.$2(q,p)
return}r.aS(new A.ZJ(n,this,b,s),t.H).ju(s)},
oF(a,b,c,d){var s,r
if(b.a!=null){s=$.eK.fi$
s===$&&A.b()
s.IJ(0,c,new A.ZL(b),d)
return}s=$.eK.fi$
s===$&&A.b()
r=s.IJ(0,c,new A.ZM(this,c),d)
if(r!=null)b.A6(r)},
oi(a,b,c){throw A.d(A.N("Implement loadBuffer for faster image loading"))},
oj(a,b){return this.oi(0,a,$.eK.ga16())},
j(a){return"ImageConfiguration()"}}
A.ZN.prototype={
$2(a,b){this.a.oF(this.b,this.c,a,b)},
$S(){return A.n(this.a).h("~(dJ.T,~(D,bK?))")}}
A.ZO.prototype={
$3(a,b,c){return this.JE(a,b,c)},
JE(a,b,c){var s=0,r=A.a3(t.H),q=this,p
var $async$$3=A.X(function(d,e){if(d===1)return A.a0(e,r)
while(true)switch(s){case 0:s=2
return A.a_(null,$async$$3)
case 2:p=q.c
if(p.a==null)p.A6(new A.a9S(A.a([],t.fE),A.a([],t.b)))
p=p.a
p.toString
p.k7(A.bj("while resolving an image"),b,null,!0,c)
return A.a1(null,r)}})
return A.a2($async$$3,r)},
$S(){return A.n(this.a).h("ah<~>(dJ.T?,D,bK?)")}}
A.ZK.prototype={
JD(a,b){var s=0,r=A.a3(t.H),q,p=this,o
var $async$$2=A.X(function(c,d){if(c===1)return A.a0(d,r)
while(true)switch(s){case 0:o=p.a
if(o.b){s=1
break}p.b.$3(o.a,a,b)
o.b=!0
case 1:return A.a1(q,r)}})
return A.a2($async$$2,r)},
$2(a,b){return this.JD(a,b)},
$S:208}
A.ZJ.prototype={
$1(a){var s,r,q,p=this
p.a.a=a
try{p.c.$2(a,p.d)}catch(q){s=A.aj(q)
r=A.aA(q)
p.d.$2(s,r)}},
$S(){return A.n(this.b).h("aD(dJ.T)")}}
A.ZL.prototype={
$0(){var s=this.a.a
s.toString
return s},
$S:104}
A.ZM.prototype={
$0(){return this.a.oj(this.b,$.eK.ga19())},
$S:104}
A.hh.prototype={
k(a,b){var s=this
if(b==null)return!1
if(J.S(b)!==A.A(s))return!1
return b instanceof A.hh&&b.a===s.a&&b.b===s.b&&b.c===s.c},
gv(a){return A.Y(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"AssetBundleImageKey(bundle: "+this.a.j(0)+', name: "'+this.b+'", scale: '+A.l(this.c)+")"}}
A.Ao.prototype={
oj(a,b){return A.alG(this.kK(a,b,null),a.b,null,a.c)},
oi(a,b,c){return A.alG(this.kK(b,null,c),b.b,null,b.c)},
kK(a,b,c){return this.Uc(a,b,c)},
Uc(a,b,c){var s=0,r=A.a3(t.gP),q,p=2,o,n,m,l,k,j,i
var $async$kK=A.X(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:s=b!=null?3:4
break
case 3:n=null
p=6
s=9
return A.a_(a.a.rA(a.b),$async$kK)
case 9:n=e
p=2
s=8
break
case 6:p=5
j=o
if(A.aj(j) instanceof A.jV){k=$.eK.fi$
k===$&&A.b()
k.lr(a)
throw j}else throw j
s=8
break
case 5:s=2
break
case 8:if(n==null){k=$.eK.fi$
k===$&&A.b()
k.lr(a)
throw A.d(A.a6("Unable to read data"))}q=b.$1(n)
s=1
break
case 4:m=null
p=11
s=14
return A.a_(a.a.cC(0,a.b),$async$kK)
case 14:m=e
p=2
s=13
break
case 11:p=10
i=o
if(A.aj(i) instanceof A.jV){k=$.eK.fi$
k===$&&A.b()
k.lr(a)
throw i}else throw i
s=13
break
case 10:s=2
break
case 13:if(m==null){k=$.eK.fi$
k===$&&A.b()
k.lr(a)
throw A.d(A.a6("Unable to read data"))}c.toString
q=c.$1(A.ci(m.buffer,0,null))
s=1
break
case 1:return A.a1(q,r)
case 2:return A.a0(o,r)}})
return A.a2($async$kK,r)}}
A.a9S.prototype={}
A.ny.prototype={
glQ(){return this.a},
rL(a){var s,r={},q=a.a
if(q==null)q=$.SH()
r.a=r.b=null
q.a1M("AssetManifest.c747badc.json",A.aAG(),t.jd).aS(new A.T7(r,this,a,q),t.H).ju(new A.T8(r))
s=r.a
if(s!=null)return s
s=new A.a7($.a9,t.hv)
r.b=new A.aY(s,t.q8)
return s},
PZ(a,b,c){var s,r,q,p=b.b
if(p==null||c==null||J.fA(c))return a
s=A.aib(t.i,t.N)
for(r=J.aw(c);r.q();){q=r.gF(r)
s.l(0,this.DK(q),q)}p.toString
return this.R9(s,p)},
R9(a,b){var s,r,q
if(a.mM(b)){s=a.i(0,b)
s.toString
return s}r=a.a1z(b)
q=a.a_O(b)
if(r==null)return a.i(0,q)
if(q==null)return a.i(0,r)
if(b<2||b>(r+q)/2)return a.i(0,q)
else return a.i(0,r)},
DK(a){var s,r,q,p
if(a===this.a)return 1
s=A.kz(a,0,null)
r=s.ghV().length>1?s.ghV()[s.ghV().length-2]:""
q=$.ap3().xt(r)
if(q!=null&&q.b.length-1>0){p=q.b[1]
p.toString
return A.aop(p)}return 1},
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return b instanceof A.ny&&b.glQ()===this.glQ()&&!0},
gv(a){return A.Y(this.glQ(),this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"AssetImage(bundle: "+A.l(this.b)+', name: "'+this.glQ()+'")'}}
A.T7.prototype={
$1(a){var s,r=this,q=r.b,p=q.glQ(),o=a==null?null:J.aR(a,q.glQ())
o=q.PZ(p,r.c,o)
o.toString
s=new A.hh(r.d,o,q.DK(o))
q=r.a
p=q.b
if(p!=null)p.cg(0,s)
else q.a=new A.bo(s,t.rT)},
$S:210}
A.T8.prototype={
$2(a,b){this.a.b.h_(a,b)},
$S:39}
A.eH.prototype={
hC(a){return new A.eH(this.a.hC(0),this.b,this.c)},
j(a){var s=this.c
s=s!=null?s+" ":""
return s+this.a.j(0)+" @ "+A.hc(this.b)+"x"},
gv(a){return A.Y(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(J.S(b)!==A.A(s))return!1
return b instanceof A.eH&&b.a===s.a&&b.b===s.b&&b.c==s.c}}
A.dh.prototype={
gv(a){return A.Y(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(J.S(b)!==A.A(s))return!1
return b instanceof A.dh&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&J.f(b.c,s.c)},
a28(a,b){return this.a.$2(a,b)}}
A.ZP.prototype={
A6(a){var s,r=this
r.a=a
s=r.b
if(s!=null){r.b=null
a.f=!0
B.b.Y(s,a.gne(a))
r.a.f=!1}},
U(a,b){var s=this.a
if(s!=null)return s.U(0,b)
s=this.b;(s==null?this.b=A.a([],t.fE):s).push(b)},
H(a,b){var s,r=this.a
if(r!=null)return r.H(0,b)
for(s=0;r=this.b,s<r.length;++s)if(J.f(r[s],b)){r=this.b
r.toString
B.b.k5(r,s)
break}}}
A.ZQ.prototype={
m(){var s=this.a;--s.r
s.pL()
this.a=null}}
A.k2.prototype={
U(a,b){var s,r,q,p,o,n,m,l=this
if(l.w)A.U(A.a6(u.V))
l.e=!0
l.a.push(b)
o=l.b
if(o!=null)try{o=o.hC(0)
n=l.f
b.a.$2(o,!n)}catch(m){s=A.aj(m)
r=A.aA(m)
l.IZ(A.bj("by a synchronously-called image listener"),s,r)}o=l.c
if(o!=null&&b.c!=null)try{n=b.c
n.toString
n.$2(o.a,o.b)}catch(s){q=A.aj(s)
p=A.aA(s)
if(!J.f(q,l.c.a))A.dI(new A.bz(q,p,"image resource service",A.bj("by a synchronously-called image error listener"),null,!1))}},
lP(){if(this.w)A.U(A.a6(u.V));++this.r
return new A.ZQ(this)},
H(a,b){var s,r,q,p,o,n=this
if(n.w)A.U(A.a6(u.V))
for(s=n.a,r=0;r<s.length;++r)if(J.f(s[r],b)){B.b.k5(s,r)
break}if(s.length===0){s=n.x
q=A.a(s.slice(0),A.an(s))
for(p=q.length,o=0;o<q.length;q.length===p||(0,A.R)(q),++o)q[o].$0()
B.b.V(s)
n.pL()}},
pL(){var s,r=this
if(!r.e||r.w||r.a.length!==0||r.r!==0)return
s=r.b
if(s!=null)s.a.m()
r.b=null
r.w=!0},
A9(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.w)A.U(A.a6(u.V))
p=i.b
if(p!=null)p.a.m()
i.b=a
p=i.a
if(p.length===0)return
o=A.az(p,!0,t.tg)
for(p=o.length,n=a.a,m=a.b,l=a.c,k=0;k<p;++k){s=o[k]
try{s.a28(new A.eH(n.hC(0),m,l),!1)}catch(j){r=A.aj(j)
q=A.aA(j)
i.IZ(A.bj("by an image listener"),r,q)}}},
k7(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i="image resource service"
this.c=new A.bz(b,e,i,a,c,d)
o=this.a
n=t.pE
m=A.az(new A.d6(new A.aH(o,new A.ZR(),A.an(o).h("aH<1,~(D,bK?)?>")),n),!0,n.h("p.E"))
s=!1
for(o=m.length,l=0;l<o;++l){r=m[l]
try{r.$2(b,e)
s=!0}catch(k){q=A.aj(k)
p=A.aA(k)
if(!J.f(q,b)){n=A.bj("when reporting an error to an image listener")
j=$.fz()
if(j!=null)j.$1(new A.bz(q,p,i,n,null,!1))}}}if(!s){o=this.c
o.toString
A.dI(o)}},
IZ(a,b,c){return this.k7(a,b,null,!1,c)},
a34(a){var s,r,q,p
if(this.w)A.U(A.a6(u.V))
s=this.a
if(s.length!==0){r=t.ls
q=A.az(new A.d6(new A.aH(s,new A.ZS(),A.an(s).h("aH<1,~(eG)?>")),r),!0,r.h("p.E"))
for(s=q.length,p=0;p<s;++p)q[p].$1(a)}}}
A.ZR.prototype={
$1(a){return a.c},
$S:213}
A.ZS.prototype={
$1(a){return a.b},
$S:214}
A.HM.prototype={
OQ(a,b,c,d,e){this.d=c
b.dF(this.gS7(),new A.a0K(this,d),t.H)},
S8(a){this.z=a
if(this.a.length!==0)this.kB()},
S_(a){var s,r,q,p=this
p.cx=!1
if(p.a.length===0)return
s=p.ay
if(s!=null){r=p.ax
r===$&&A.b()
r=a.a-r.a>=s.a}else r=!0
if(r){s=p.at
p.Ch(new A.eH(s.geR(s).hC(0),p.Q,p.d))
p.ax=a
s=p.at
p.ay=s.gGM(s)
s=p.at
s.geR(s).m()
p.at=null
q=B.f.fL(p.ch,p.z.gjK())
if(p.z.goE()===-1||q<=p.z.goE())p.kB()
return}s.toString
r=p.ax
r===$&&A.b()
p.CW=A.c2(new A.aK(B.d.b0((s.a-(a.a-r.a))*$.ao8)),new A.a0J(p))},
kB(){var s=0,r=A.a3(t.H),q,p=2,o,n=this,m,l,k,j,i
var $async$kB=A.X(function(a,b){if(a===1){o=b
s=p}while(true)switch(s){case 0:j=n.at
if(j!=null)j.geR(j).m()
n.at=null
p=4
s=7
return A.a_(n.z.j3(),$async$kB)
case 7:n.at=b
p=2
s=6
break
case 4:p=3
i=o
m=A.aj(i)
l=A.aA(i)
n.k7(A.bj("resolving an image frame"),m,n.as,!0,l)
s=1
break
s=6
break
case 3:s=2
break
case 6:if(n.z.gjK()===1){if(n.a.length===0){s=1
break}j=n.at
n.Ch(new A.eH(j.geR(j).hC(0),n.Q,n.d))
j=n.at
j.geR(j).m()
n.at=null
s=1
break}n.Eb()
case 1:return A.a1(q,r)
case 2:return A.a0(o,r)}})
return A.a2($async$kB,r)},
Eb(){if(this.cx)return
this.cx=!0
$.bP.p8(this.gRZ())},
Ch(a){this.A9(a);++this.ch},
U(a,b){var s,r=this
if(r.a.length===0){s=r.z
if(s!=null)s=r.b==null||s.gjK()>1
else s=!1}else s=!1
if(s)r.kB()
r.AL(0,b)},
H(a,b){var s,r=this
r.AM(0,b)
if(r.a.length===0){s=r.CW
if(s!=null)s.am(0)
r.CW=null}},
pL(){this.LU()
if(this.w)this.y=null}}
A.a0K.prototype={
$2(a,b){this.a.k7(A.bj("resolving an image codec"),a,this.b,!0,b)},
$S:39}
A.a0J.prototype={
$0(){this.a.Eb()},
$S:0}
A.Ni.prototype={}
A.Nh.prototype={}
A.Ag.prototype={}
A.k6.prototype={
k(a,b){var s
if(b==null)return!1
if(b instanceof A.k6)if(b.a===this.a)if(b.b==this.b)s=A.cM(b.f,this.f)
else s=!1
else s=!1
else s=!1
return s},
gv(a){return A.Y(this.a,this.b,this.c,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"InlineSpanSemanticsInformation{text: "+this.a+", semanticsLabel: "+A.l(this.b)+", recognizer: "+A.l(this.c)+"}"}}
A.fO.prototype={
K3(a){var s={}
s.a=null
this.aT(new A.a_1(s,a,new A.Ag()))
return s.a},
Jh(a){var s,r=new A.cd("")
this.Ga(r,!0,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
ae(a,b){var s={}
if(b<0)return null
s.a=null
this.aT(new A.a_0(s,b,new A.Ag()))
return s.a},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.S(b)!==A.A(this))return!1
return b instanceof A.fO&&J.f(b.a,this.a)},
gv(a){return J.o(this.a)}}
A.a_1.prototype={
$1(a){var s=a.K4(this.b,this.c)
this.a.a=s
return s==null},
$S:49}
A.a_0.prototype={
$1(a){var s=a.Z2(this.b,this.c)
this.a.a=s
return s==null},
$S:49}
A.dp.prototype={
aK(a,b){var s=this.a.aK(0,b)
return new A.dp(this.b.a_(0,b),s)},
c_(a,b){var s,r,q=this
if(a instanceof A.dp){s=A.aB(a.a,q.a,b)
r=A.hj(a.b,q.b,b)
r.toString
return new A.dp(r,s)}if(a instanceof A.de){s=A.aB(a.a,q.a,b)
return new A.e5(q.b,1-b,a.b,s)}return q.kr(a,b)},
c0(a,b){var s,r,q=this
if(a instanceof A.dp){s=A.aB(q.a,a.a,b)
r=A.hj(q.b,a.b,b)
r.toString
return new A.dp(r,s)}if(a instanceof A.de){s=A.aB(q.a,a.a,b)
return new A.e5(q.b,b,a.b,s)}return q.ks(a,b)},
f_(a,b){var s=$.av().cJ()
s.hz(this.b.X(b).d5(a))
return s},
he(a,b,c){var s,r,q,p,o=this.a
switch(o.c.a){case 0:break
case 1:s=this.b
if(o.b===0)a.dq(s.X(c).d5(b),o.hl())
else{r=$.av().bd()
r.sai(0,o.a)
q=s.X(c).d5(b)
p=q.dw(-o.ge7())
a.lj(q.dw(o.gAt()),p,r)}break}},
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return b instanceof A.dp&&b.a.k(0,this.a)&&b.b.k(0,this.b)},
gv(a){return A.Y(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"RoundedRectangleBorder("+this.a.j(0)+", "+this.b.j(0)+")"}}
A.e5.prototype={
aK(a,b){var s=this.a.aK(0,b)
return new A.e5(this.b.a_(0,b),b,this.d,s)},
c_(a,b){var s,r,q,p=this
if(a instanceof A.dp){s=A.aB(a.a,p.a,b)
r=A.hj(a.b,p.b,b)
r.toString
return new A.e5(r,p.c*b,p.d,s)}if(a instanceof A.de){s=A.aB(a.a,p.a,b)
r=p.c
return new A.e5(p.b,r+(1-r)*(1-b),a.b,s)}if(a instanceof A.e5){s=A.aB(a.a,p.a,b)
r=A.hj(a.b,p.b,b)
r.toString
q=A.Q(a.c,p.c,b)
q.toString
return new A.e5(r,q,p.d,s)}return p.kr(a,b)},
c0(a,b){var s,r,q,p=this
if(a instanceof A.dp){s=A.aB(p.a,a.a,b)
r=A.hj(p.b,a.b,b)
r.toString
return new A.e5(r,p.c*(1-b),p.d,s)}if(a instanceof A.de){s=A.aB(p.a,a.a,b)
r=p.c
return new A.e5(p.b,r+(1-r)*b,a.b,s)}if(a instanceof A.e5){s=A.aB(p.a,a.a,b)
r=A.hj(p.b,a.b,b)
r.toString
q=A.Q(p.c,a.c,b)
q.toString
return new A.e5(r,q,p.d,s)}return p.ks(a,b)},
E7(a){var s,r,q,p,o,n,m,l,k=this.c
if(k===0||a.c-a.a===a.d-a.b)return a
s=a.c
r=a.a
q=s-r
p=a.d
o=a.b
n=p-o
m=1-this.d
if(q<n){l=k*((n-q)/2)*m
return new A.E(r,o+l,s,p-l)}else{l=k*((q-n)/2)*m
return new A.E(r+l,o,s-l,p)}},
Bk(a,b){var s,r,q,p=this.b.X(b),o=this.c
if(o===0)return p
s=this.d
if(s!==0){r=a.c-a.a
q=a.d-a.b
s=0.5+s/2
if(r<q){o=A.nD(p,A.AE(new A.bu(r/2,s*q/2)),o)
o.toString
return o}else{o=A.nD(p,A.AE(new A.bu(s*r/2,q/2)),o)
o.toString
return o}}return A.nD(p,A.hi(a.gf1()/2),o)},
f_(a,b){var s=$.av().cJ(),r=this.Bk(a,b)
r.toString
s.hz(r.d5(this.E7(a)))
return s},
he(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=this.Bk(b,c)
s.toString
a.dq(s.d5(this.E7(b)).dw(r.b*r.d/2),r.hl())
break}},
k(a,b){var s=this
if(b==null)return!1
if(J.S(b)!==A.A(s))return!1
return b instanceof A.e5&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c===s.c},
gv(a){return A.Y(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this,r="RoundedRectangleBorder(",q=s.d
if(q!==0)return r+s.a.j(0)+", "+s.b.j(0)+", "+B.d.R(s.c*100,1)+u.T+B.d.R(q*100,1)+"% oval)"
return r+s.a.j(0)+", "+s.b.j(0)+", "+B.d.R(s.c*100,1)+"% of the way to being a CircleBorder)"}}
A.eq.prototype={
aK(a,b){return new A.eq(this.a.aK(0,b))},
c_(a,b){var s,r=this
if(a instanceof A.eq)return new A.eq(A.aB(a.a,r.a,b))
if(a instanceof A.de){s=A.aB(a.a,r.a,b)
return new A.e7(1-b,a.b,s)}if(a instanceof A.dp){s=A.aB(a.a,r.a,b)
return new A.e8(a.b,1-b,s)}return r.kr(a,b)},
c0(a,b){var s,r=this
if(a instanceof A.eq)return new A.eq(A.aB(r.a,a.a,b))
if(a instanceof A.de){s=A.aB(r.a,a.a,b)
return new A.e7(b,a.b,s)}if(a instanceof A.dp){s=A.aB(r.a,a.a,b)
return new A.e8(a.b,b,s)}return r.ks(a,b)},
f_(a,b){var s=a.gf1()/2,r=$.av().cJ()
r.hz(A.ai1(a,new A.bu(s,s)))
return r},
he(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=b.gf1()/2
a.dq(A.ai1(b,new A.bu(s,s)).dw(r.b*r.d/2),r.hl())
break}},
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return b instanceof A.eq&&b.a.k(0,this.a)},
gv(a){var s=this.a
return A.Y(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"StadiumBorder("+this.a.j(0)+")"}}
A.e7.prototype={
aK(a,b){return new A.e7(b,this.c,this.a.aK(0,b))},
c_(a,b){var s,r,q,p=this
if(a instanceof A.eq)return new A.e7(p.b*b,p.c,A.aB(a.a,p.a,b))
if(a instanceof A.de){s=A.aB(a.a,p.a,b)
r=p.b
return new A.e7(r+(1-r)*(1-b),a.b,s)}if(a instanceof A.e7){s=A.aB(a.a,p.a,b)
r=A.Q(a.b,p.b,b)
r.toString
q=A.Q(a.c,p.c,b)
q.toString
return new A.e7(r,q,s)}return p.kr(a,b)},
c0(a,b){var s,r,q,p=this
if(a instanceof A.eq)return new A.e7(p.b*(1-b),p.c,A.aB(p.a,a.a,b))
if(a instanceof A.de){s=A.aB(p.a,a.a,b)
r=p.b
return new A.e7(r+(1-r)*b,a.b,s)}if(a instanceof A.e7){s=A.aB(p.a,a.a,b)
r=A.Q(p.b,a.b,b)
r.toString
q=A.Q(p.c,a.c,b)
q.toString
return new A.e7(r,q,s)}return p.ks(a,b)},
EF(a){var s,r,q,p,o,n,m,l,k=this.b
if(k===0||a.c-a.a===a.d-a.b)return a
s=a.c
r=a.a
q=s-r
p=a.d
o=a.b
n=p-o
m=1-this.c
if(q<n){l=k*((n-q)/2)*m
return new A.E(r,o+l,s,p-l)}else{l=k*((q-n)/2)*m
return new A.E(r+l,o,s-l,p)}},
n3(a){var s,r,q,p=A.hi(a.gf1()/2),o=this.c
if(o!==0){s=a.c-a.a
r=a.d-a.b
q=this.b
o=0.5+o/2
if(s<r){o=A.nD(p,A.AE(new A.bu(s/2,o*r/2)),q)
o.toString
return o}else{o=A.nD(p,A.AE(new A.bu(o*s/2,r/2)),q)
o.toString
return o}}return p},
f_(a,b){var s=$.av().cJ()
s.hz(this.n3(a).d5(this.EF(a)))
return s},
he(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.dq(this.n3(b).d5(this.EF(b)).dw(s.b*s.d/2),s.hl())
break}},
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return b instanceof A.e7&&b.a.k(0,this.a)&&b.b===this.b},
gv(a){return A.Y(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this,r=s.c
if(r!==0)return"StadiumBorder("+s.a.j(0)+", "+B.d.R(s.b*100,1)+u.T+B.d.R(r*100,1)+"% oval)"
return"StadiumBorder("+s.a.j(0)+", "+B.d.R(s.b*100,1)+"% of the way to being a CircleBorder)"}}
A.e8.prototype={
aK(a,b){var s=this.a.aK(0,b)
return new A.e8(this.b.a_(0,b),b,s)},
c_(a,b){var s,r,q,p=this
if(a instanceof A.eq)return new A.e8(p.b,p.c*b,A.aB(a.a,p.a,b))
if(a instanceof A.dp){s=p.c
return new A.e8(p.b,s+(1-s)*(1-b),A.aB(a.a,p.a,b))}if(a instanceof A.e8){s=A.aB(a.a,p.a,b)
r=A.hj(a.b,p.b,b)
r.toString
q=A.Q(a.c,p.c,b)
q.toString
return new A.e8(r,q,s)}return p.kr(a,b)},
c0(a,b){var s,r,q,p=this
if(a instanceof A.eq)return new A.e8(p.b,p.c*(1-b),A.aB(p.a,a.a,b))
if(a instanceof A.dp){s=p.c
return new A.e8(p.b,s+(1-s)*b,A.aB(p.a,a.a,b))}if(a instanceof A.e8){s=A.aB(p.a,a.a,b)
r=A.hj(p.b,a.b,b)
r.toString
q=A.Q(p.c,a.c,b)
q.toString
return new A.e8(r,q,s)}return p.ks(a,b)},
n3(a){var s=a.gf1()/2
s=A.hj(this.b,A.AE(new A.bu(s,s)),1-this.c)
s.toString
return s},
f_(a,b){var s=$.av().cJ()
s.hz(this.n3(a).X(b).d5(a))
return s},
he(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.dq(this.n3(b).X(c).d5(b).dw(s.b*s.d/2),s.hl())
break}},
k(a,b){var s=this
if(b==null)return!1
if(J.S(b)!==A.A(s))return!1
return b instanceof A.e8&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c===s.c},
gv(a){return A.Y(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"StadiumBorder("+this.a.j(0)+", "+this.b.j(0)+", "+B.d.R(this.c*100,1)+"% of the way to being a RoundedRectangleBorder)"}}
A.mG.prototype={
G(){return"TextOverflow."+this.b}}
A.m8.prototype={
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(b instanceof A.m8)if(b.a.k(0,r.a))if(b.b===r.b)s=b.c==r.c
else s=!1
else s=!1
else s=!1
return s},
gv(a){var s=this
return A.Y(s.a,s.b,s.d,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"PlaceholderDimensions("+this.a.j(0)+", "+A.l(this.d)+")"}}
A.wT.prototype={
G(){return"TextWidthBasis."+this.b}}
A.a9e.prototype={}
A.Kw.prototype={
a6(){var s=this,r=s.a
if(r!=null)r.m()
s.dy=s.dx=s.fr=s.a=null},
st9(a,b){var s,r,q=this
if(J.f(q.d,b))return
s=q.d
s=s==null?null:s.a
if(!J.f(s,b.a)){s=q.CW
if(s!=null)s.m()
q.CW=null}s=q.d
s=s==null?null:s.b3(0,b)
r=s==null?B.cs:s
q.d=b
q.e=null
s=r.a
if(s>=3)q.a6()
else if(s>=2)q.b=!0},
grY(){var s=this.e
if(s==null){s=this.d
s=s==null?null:s.Jh(!1)
this.e=s}return s==null?"":s},
szc(a,b){if(this.f===b)return
this.f=b
this.a6()},
sbB(a){var s,r=this
if(r.r===a)return
r.r=a
r.a6()
s=r.CW
if(s!=null)s.m()
r.CW=null},
szd(a){var s,r=this
if(r.w===a)return
r.w=a
r.a6()
s=r.CW
if(s!=null)s.m()
r.CW=null},
sa_q(a){if(this.x==a)return
this.x=a
this.a6()},
sy4(a,b){if(J.f(this.y,b))return
this.y=b
this.a6()},
sy9(a){if(this.z==a)return
this.z=a
this.a6()},
sze(a){if(this.as===a)return
this.as=a
this.a6()},
tD(a){if(a==null||a.length===0||A.cM(a,this.ch))return
this.ch=a
this.a6()},
C4(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.d.a
if(e==null)e=f
else{s=g.f
r=g.r
if(r==null)r=a
q=g.w
p=g.z
o=g.at
n=g.x
m=g.y
l=e.at
o=l==null?f:new A.Ku(l)
k=e.w
j=e.x
i=e.d
h=e.r
if(h==null)h=14
e=e.as
e=A.ahX(n,i,h*q,j,k,e,m,p,f,s,r,o)}if(e==null){e=g.f
s=g.r
if(s==null)s=a
r=g.w
q=g.z
p=g.at
p=A.ahX(g.x,f,14*r,f,f,f,g.y,q,f,e,s,p)
e=p}return e},
Qn(){return this.C4(null)},
gt_(){var s,r,q=this,p=q.CW
if(p==null){p=q.C4(B.aK)
s=$.av().wE(p)
p=q.d
if(p==null)r=null
else{p=p.a
r=p==null?null:p.zU(q.w)}if(r!=null)s.t2(r)
s.ng(" ")
p=s.dn()
p.h9(B.Sw)
q.CW=p}return p.gcp(p)},
gbC(a){var s=this.as,r=this.a
s=s===B.Y2?r.gI8():r.gbC(r)
return Math.ceil(s)},
ei(a){var s
switch(a.a){case 0:s=this.a
return s.gYi(s)
case 1:s=this.a
return s.ga0Y(s)}},
C3(){var s,r,q=this,p=q.d
if(p==null)throw A.d(A.a6("TextPainter.text must be set to a non-null value before using the TextPainter."))
s=q.Qn()
r=$.av().wE(s)
s=q.w
p.FU(r,q.ch,s)
q.ay=r.ga2m()
q.a=r.dn()
q.b=!1},
Df(a,b){var s,r,q=this
q.a.h9(new A.m6(b))
if(a!==b){switch(q.as.a){case 1:s=Math.ceil(q.a.gI8())
break
case 0:s=Math.ceil(q.a.ga1T())
break
default:s=null}s=A.F(s,a,b)
r=q.a
if(s!==Math.ceil(r.gbC(r)))q.a.h9(new A.m6(s))}},
xZ(a,b){var s=this,r=s.a==null
if(!r&&b===s.cx&&a===s.cy)return
if(s.b||r)s.C3()
s.cx=b
s.cy=a
s.dy=s.dx=s.fr=null
s.Df(b,a)
s.ax=s.a.JJ()},
a1B(){return this.xZ(1/0,0)},
aG(a,b){var s,r=this,q=r.cx,p=r.cy
if(r.a==null||q==null||p==null)throw A.d(A.a6("TextPainter.paint called when text geometry was not yet calculated.\nPlease call layout() before paint() to position the text before painting it."))
if(r.b){r.C3()
r.Df(q,p)}s=r.a
s.toString
a.lm(s,b)},
Cz(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.grY().length
if(g===0||a>g)return null
s=B.c.ae(h.grY(),Math.max(0,a-1))
r=(s&63488)===55296||h.d.ae(0,a)===8205||s===8207||s===8206
q=r?2:1
p=A.a([],t.px)
for(o=-g,n=!r,m=s===10;p.length===0;){l=a-q
p=h.a.zE(l,a,B.ld)
if(p.length===0){if(n&&m)break
if(l<o)break
q*=2
continue}k=B.b.gM(p)
if(m){o=k.d
return new A.E(h.guE().a,o,h.guE().a,o+o-k.b)}o=k.e
j=o===B.ae?k.c:k.a
i=o===B.aK?j-(b.c-b.a):j
o=h.a
o=A.F(i,0,o.gbC(o))
n=h.a
return new A.E(o,k.b,A.F(i,0,n.gbC(n)),k.d)}return null},
Cy(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.grY().length
if(h===0||a<0)return null
s=B.c.ae(i.grY(),Math.min(a,h-1))
r=(s&63488)===55296||s===8205||s===8207||s===8206
q=r?2:1
p=A.a([],t.px)
for(o=h<<1>>>0,n=!r;p.length===0;){m=a+q
p=i.a.zE(a,m,B.ld)
if(p.length===0){if(n)break
if(m>=o)break
q*=2
continue}l=B.b.gaa(p)
o=l.e
k=o===B.ae?l.a:l.c
j=o===B.aK?k-(b.c-b.a):k
o=i.a
o=A.F(j,0,o.gbC(o))
n=i.a
return new A.E(o,l.b,A.F(j,0,n.gbC(n)),l.d)}return null},
guE(){var s=this
switch(s.f.a){case 0:return B.k
case 1:return new A.y(s.gbC(s),0)
case 2:return new A.y(s.gbC(s)/2,0)
case 3:case 4:switch(s.r.a){case 0:return new A.y(s.gbC(s),0)
case 1:return B.k}break
case 5:switch(s.r.a){case 0:return B.k
case 1:return new A.y(s.gbC(s),0)}break}},
BX(a,b){var s,r,q,p,o=this
if(a.k(0,o.dx)&&b.k(0,o.dy))return
s=a.a
switch(a.b.a){case 0:r=o.Cz(s,b)
if(r==null)r=o.Cy(s,b)
break
case 1:r=o.Cy(s,b)
if(r==null)r=o.Cz(s,b)
break
default:r=null}q=r!=null
p=q?new A.y(r.a,r.b):o.guE()
o.db=new A.a9e(p,q?r.d-r.b:null)
o.dx=a
o.dy=b},
m(){var s=this,r=s.CW
if(r!=null)r.m()
s.CW=null
r=s.a
if(r!=null)r.m()
s.d=s.a=null}}
A.wS.prototype={
gGt(a){return this.e},
gzx(){return!0},
hN(a,b){t.Y.b(a)},
FU(a,b,c){var s,r,q,p,o=this.a,n=o!=null
if(n)a.t2(o.zU(c))
o=this.b
if(o!=null)try{a.ng(o)}catch(q){o=A.aj(q)
if(o instanceof A.fB){s=o
r=A.aA(q)
A.dI(new A.bz(s,r,"painting library",A.bj("while building a TextSpan"),null,!1))
a.ng("\ufffd")}else throw q}o=this.c
if(o!=null)for(p=0;p<1;++p)o[p].FU(a,b,c)
if(n)a.fu()},
aT(a){var s,r
if(this.b!=null)if(!a.$1(this))return!1
s=this.c
if(s!=null)for(r=0;r<1;++r)if(!s[r].aT(a))return!1
return!0},
K4(a,b){var s,r,q,p,o=this.b
if(o==null)return null
s=a.b
r=a.a
q=b.a
p=q+o.length
if(!(q===r&&s===B.I))if(!(q<r&&r<p))o=p===r&&s===B.P
else o=!0
else o=!0
if(o)return this
b.a=p
return null},
Ga(a,b,c){var s,r=this.b
if(r!=null)a.a+=r
r=this.c
if(r!=null)for(s=0;s<1;++s)r[s].Ga(a,!0,c)},
G9(a,b,c){var s,r,q=this.b
if(q!=null){s=A.a([],t.ve)
a.push(A.alg(q,null,null,s))}q=this.c
if(q!=null)for(r=0;r<1;++r)q[r].G9(a,b,!1)},
Zc(a){return this.G9(a,null,!1)},
Z2(a,b){var s,r,q,p=this.b
if(p==null)return null
s=b.a
r=a-s
q=p.length
if(r<q)return B.c.ae(p,r)
b.a=s+q
return null},
b3(a,b){var s,r,q,p,o,n=this
if(n===b)return B.dk
if(A.A(b)!==A.A(n))return B.cs
if(b.b==n.b){s=n.c==null?null:1
s=s!=(b.c==null?null:1)||n.a==null!==(b.a==null)}else s=!0
if(s)return B.cs
s=n.a
if(s!=null){r=b.a
r.toString
q=s.b3(0,r)
p=q.a>0?q:B.dk
if(p===B.cs)return p}else p=B.dk
s=n.c
if(s!=null)for(r=b.c,o=0;o<1;++o){q=s[o].b3(0,r[o])
if(q.a>p.a)p=q
if(p===B.cs)return p}return p},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
if(!s.LX(0,b))return!1
return b instanceof A.wS&&b.b==s.b&&s.e.k(0,b.e)&&A.cM(b.c,s.c)},
gv(a){var s=this,r=null,q=A.fO.prototype.gv.call(s,s),p=s.c
p=p==null?r:A.cE(p)
return A.Y(q,s.b,r,r,r,r,s.e,p,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
bP(){return"TextSpan"},
$iaq:1,
$iiY:1,
gyu(){return null},
gyx(){return null}}
A.q.prototype={
glG(){return this.e},
gkD(a){return this.d},
nB(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=b9==null?a.a:b9,a1=a.ay
if(a1==null&&b7==null)s=a4==null?a.b:a4
else s=null
r=a.ch
if(r==null&&a2==null)q=a3==null?a.c:a3
else q=null
p=b3==null?a.r:b3
o=b6==null?a.w:b6
n=c1==null?a.y:c1
m=c7==null?a.z:c7
l=c6==null?a.Q:c6
k=b8==null?a.as:b8
j=c0==null?a.at:c0
a1=b7==null?a1:b7
r=a2==null?r:a2
i=c5==null?a.dy:c5
h=b5==null?a.fx:b5
g=a6==null?a.CW:a6
f=a7==null?a.cx:a7
e=a8==null?a.cy:a8
d=a9==null?a.db:a9
c=b0==null?a.gkD(a):b0
b=b1==null?a.e:b1
return A.by(r,q,s,null,g,f,e,d,c,b,a.fr,p,a.x,h,o,a1,k,a0,j,n,a.ax,a.fy,a.f,i,l,m)},
h0(a){return this.nB(null,null,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
Zu(a){return this.nB(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null)},
ZE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5){return this.nB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,null,r,s,a0,a1,a2,a3,a4,a5)},
Gm(a,b){return this.nB(null,null,a,null,null,null,null,null,null,null,null,b,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
Gh(a){return this.nB(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null,null,null)},
bW(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
if(a4==null)return this
if(!a4.a)return a4
s=a4.b
r=a4.c
q=a4.r
p=a4.w
o=a4.x
n=a4.y
m=a4.z
l=a4.Q
k=a4.as
j=a4.at
i=a4.ax
h=a4.ay
g=a4.ch
f=a4.dy
e=a4.fr
d=a4.fx
c=a4.CW
b=a4.cx
a=a4.cy
a0=a4.db
a1=a4.gkD(a4)
a2=a4.e
a3=a4.f
return this.ZE(g,r,s,null,c,b,a,a0,a1,a2,e,q,o,d,p,h,k,j,n,i,a4.fy,a3,f,l,m)},
zU(a){var s,r,q=this,p=q.glG(),o=q.r
o=o==null?null:o*a
s=q.ch
if(s==null){s=q.c
if(s!=null){r=$.av().bd()
r.sai(0,s)
s=r}else s=null}return A.amG(s,q.b,q.CW,q.cx,q.cy,q.db,q.d,p,q.fr,o,q.x,q.fx,q.w,q.ay,q.as,q.at,q.y,q.ax,q.dy,q.Q,q.z)},
b3(a,b){var s=this
if(s===b)return B.dk
if(s.a!==b.a||s.d!=b.d||s.r!=b.r||s.w!=b.w||s.y!=b.y||s.z!=b.z||s.Q!=b.Q||s.as!=b.as||s.at!=b.at||s.ay!=b.ay||s.ch!=b.ch||!A.cM(s.dy,b.dy)||!A.cM(s.fr,b.fr)||!A.cM(s.fx,b.fx)||!A.cM(s.glG(),b.glG())||!1)return B.cs
if(!J.f(s.b,b.b)||!J.f(s.c,b.c)||!J.f(s.CW,b.CW)||!J.f(s.cx,b.cx)||s.cy!=b.cy||s.db!=b.db)return B.SP
return B.dk},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.S(b)!==A.A(r))return!1
if(b instanceof A.q)if(b.a===r.a)if(J.f(b.b,r.b))if(J.f(b.c,r.c))if(b.r==r.r)if(b.w==r.w)if(b.y==r.y)if(b.z==r.z)if(b.Q==r.Q)if(b.as==r.as)if(b.at==r.at)if(b.ay==r.ay)if(b.ch==r.ch)if(A.cM(b.dy,r.dy))if(A.cM(b.fr,r.fr))if(A.cM(b.fx,r.fx))if(J.f(b.CW,r.CW))if(J.f(b.cx,r.cx))if(b.cy==r.cy)if(b.db==r.db)if(b.d==r.d)if(A.cM(b.glG(),r.glG()))s=!0
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gv(a){var s,r=this,q=null,p=r.glG(),o=p==null?q:A.cE(p),n=A.Y(r.cy,r.db,r.d,o,r.f,r.fy,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a),m=r.dy,l=r.fx
o=m==null?q:A.cE(m)
s=l==null?q:A.cE(l)
return A.Y(r.a,r.b,r.c,r.r,r.w,r.x,r.y,r.z,r.Q,r.as,r.at,r.ax,r.ay,r.ch,o,q,s,r.CW,r.cx,n)},
bP(){return"TextStyle"}}
A.Qt.prototype={}
A.F0.prototype={
OM(a,b,c,d,e){var s=this
s.r=A.anV(new A.Yq(s),s.gxb(s),0,10,0)},
cE(a,b){var s,r,q=this
if(b>q.r)return q.gr3()
s=q.e
r=q.c
return q.d+s*Math.pow(q.b,b)/r-s/r-q.f/2*b*b},
d9(a,b){var s=this
if(b>s.r)return 0
return s.e*Math.pow(s.b,b)-s.f*b},
gr3(){var s=this
if(s.f===0)return s.d-s.e/s.c
return s.cE(0,s.r)},
Jd(a){var s,r=this,q=r.d
if(a===q)return 0
s=r.e
if(s!==0)if(s>0)q=a<q||a>r.gr3()
else q=a>q||a<r.gr3()
else q=!0
if(q)return 1/0
return A.anV(r.gxb(r),r.ga3R(r),0,10,a)},
iL(a){return Math.abs(this.d9(0,a))<this.a.c},
j(a){return"FrictionSimulation(c\u2093: "+B.d.R(this.b,1)+", x\u2080: "+B.d.R(this.d,1)+", dx\u2080: "+B.d.R(this.e,1)+")"}}
A.Yq.prototype={
$1(a){var s=this.a
return s.e*Math.pow(s.b,a)*s.c-s.f},
$S:57}
A.a4Y.prototype={
j(a){return"Simulation"}}
A.a6V.prototype={
j(a){return"SpringDescription(mass: "+B.d.R(this.a,1)+", stiffness: "+B.f.R(this.b,1)+", damping: "+B.d.R(this.c,1)+")"}}
A.ps.prototype={
G(){return"SpringType."+this.b}}
A.Kc.prototype={
cE(a,b){return this.b+this.c.cE(0,b)},
d9(a,b){return this.c.d9(0,b)},
iL(a){var s=this.c
return A.A5(s.cE(0,a),0,this.a.a)&&A.A5(s.d9(0,a),0,this.a.c)},
j(a){var s=this.c
return"SpringSimulation(end: "+B.d.R(this.b,1)+", "+s.gcQ(s).j(0)+")"}}
A.ko.prototype={
cE(a,b){return this.iL(b)?this.b:this.Nt(0,b)}}
A.a9s.prototype={
cE(a,b){return(this.b+this.c*b)*Math.pow(2.718281828459045,this.a*b)},
d9(a,b){var s=this.a,r=Math.pow(2.718281828459045,s*b),q=this.c
return s*(this.b+q*b)*r+q*r},
gcQ(a){return B.Uf}}
A.ac4.prototype={
cE(a,b){var s=this
return s.c*Math.pow(2.718281828459045,s.a*b)+s.d*Math.pow(2.718281828459045,s.b*b)},
d9(a,b){var s=this,r=s.a,q=s.b
return s.c*r*Math.pow(2.718281828459045,r*b)+s.d*q*Math.pow(2.718281828459045,q*b)},
gcQ(a){return B.Uh}}
A.adD.prototype={
cE(a,b){var s=this,r=s.a*b
return Math.pow(2.718281828459045,s.b*b)*(s.c*Math.cos(r)+s.d*Math.sin(r))},
d9(a,b){var s,r=this,q=r.b,p=Math.pow(2.718281828459045,q*b),o=r.a,n=o*b,m=Math.cos(n),l=Math.sin(n)
n=r.d
s=r.c
return p*(n*o*m-s*o*l)+q*p*(n*l+s*m)},
gcQ(a){return B.Ug}}
A.KH.prototype={
j(a){return"Tolerance(distance: \xb1"+A.l(this.a)+", time: \xb10.001, velocity: \xb1"+A.l(this.c)+")"}}
A.p3.prototype={
xA(){var s=this,r=s.ry$
r===$&&A.b()
r=r.e
r.toString
r.swx(s.Gs())
if(s.ry$.e.t$!=null)s.Ke()},
xG(){},
xC(){},
Gs(){var s,r=$.bR(),q=r.w
if(q==null){s=self.window.devicePixelRatio
q=s===0?1:s}return new A.L_(r.gjZ().dI(0,q),q)},
Tr(){var s,r=this
if($.aM().a.c){if(r.to$==null){s=r.ry$
s===$&&A.b()
r.to$=s.GU()}}else{s=r.to$
if(s!=null)s.m()
r.to$=null}},
KD(a){var s,r=this
if(a){if(r.to$==null){s=r.ry$
s===$&&A.b()
r.to$=s.GU()}}else{s=r.to$
if(s!=null)s.m()
r.to$=null}},
TK(a){B.Sb.mT("first-frame",null,!1,t.H)},
Tp(a,b,c){var s=this.ry$
s===$&&A.b()
s=s.as
if(s!=null)s.a2k(a,b,null)},
Tt(){var s,r=this.ry$
r===$&&A.b()
r=r.e
r.toString
s=t.O
s.a(A.I.prototype.gbj.call(r)).ay.C(0,r)
s.a(A.I.prototype.gbj.call(r)).m1()},
Tx(a){var s=this.ry$
s===$&&A.b()
s.e.toString
s=$.ds;(s==null?$.ds=A.jR():s).a3E(a)},
Tv(){var s=this.ry$
s===$&&A.b()
s.e.l6()},
SW(a){this.x9()
this.Wn()},
Wn(){$.bP.ax$.push(new A.a39(this))},
FJ(){--this.x2$
if(!this.xr$)this.tu()},
x9(){var s=this,r=s.ry$
r===$&&A.b()
r.a_R()
s.ry$.a_Q()
s.ry$.a_S()
if(s.xr$||s.x2$===0){s.ry$.e.Z9()
s.ry$.a_T()
s.xr$=!0}},
$iaq:1,
$idq:1}
A.a39.prototype={
$1(a){var s=this.a,r=s.rx$
r.toString
s=s.ry$
s===$&&A.b()
r.a3B(s.e.ga0V())},
$S:2}
A.aS.prototype={
wB(a,b,c,d){var s=this,r=d==null?s.a:d,q=b==null?s.b:b,p=c==null?s.c:c
return new A.aS(r,q,p,a==null?s.d:a)},
ZB(a,b){return this.wB(null,null,a,b)},
Gj(a){return this.wB(a,null,null,null)},
Zv(a){return this.wB(null,a,null,null)},
Gw(a){var s=this,r=a.gca(),q=a.gb6(a)+a.gb9(a),p=Math.max(0,s.a-r),o=Math.max(0,s.c-q)
return new A.aS(p,Math.max(p,s.b-r),o,Math.max(o,s.d-q))},
nV(a){var s=this,r=a.a,q=a.b,p=a.c,o=a.d
return new A.aS(A.F(s.a,r,q),A.F(s.b,r,q),A.F(s.c,p,o),A.F(s.d,p,o))},
zh(a,b){var s,r,q=this,p=b==null,o=q.a,n=p?o:A.F(b,o,q.b),m=q.b
p=p?m:A.F(b,o,m)
o=a==null
m=q.c
s=o?m:A.F(a,m,q.d)
r=q.d
return new A.aS(n,p,s,o?r:A.F(a,m,r))},
ta(a){return this.zh(a,null)},
zg(a){return this.zh(null,a)},
bl(a){var s=this
return new A.a5(A.F(a.a,s.a,s.b),A.F(a.b,s.c,s.d))},
nA(a){var s,r,q,p,o,n=this,m=n.a,l=n.b
if(m>=l&&n.c>=n.d)return new A.a5(A.F(0,m,l),A.F(0,n.c,n.d))
s=a.a
r=a.b
q=s/r
if(s>l){r=l/q
s=l}p=n.d
if(r>p){s=p*q
r=p}if(s<m){r=m/q
s=m}o=n.c
if(r<o){s=o*q
r=o}return new A.a5(A.F(s,m,l),A.F(r,o,p))},
gHX(){var s=this
return s.a>=s.b&&s.c>=s.d},
a_(a,b){var s=this
return new A.aS(s.a*b,s.b*b,s.c*b,s.d*b)},
dI(a,b){var s=this
return new A.aS(s.a/b,s.b/b,s.c/b,s.d/b)},
ga1o(){var s=this,r=s.a
if(r>=0)if(r<=s.b){r=s.c
r=r>=0&&r<=s.d}else r=!1
else r=!1
return r},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.aS&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s,r=this,q=r.ga1o()?"":"; NOT NORMALIZED",p=r.a
if(p===1/0&&r.c===1/0)return"BoxConstraints(biggest"+q+")"
if(p===0&&r.b===1/0&&r.c===0&&r.d===1/0)return"BoxConstraints(unconstrained"+q+")"
s=new A.Tu()
return"BoxConstraints("+s.$3(p,r.b,"w")+", "+s.$3(r.c,r.d,"h")+q+")"}}
A.Tu.prototype={
$3(a,b,c){if(a===b)return c+"="+B.d.R(a,1)
return B.d.R(a,1)+"<="+c+"<="+B.d.R(b,1)},
$S:220}
A.hk.prototype={
wa(a,b,c){if(c!=null){c=A.HC(A.ahZ(c))
if(c==null)return!1}return this.FH(a,b,c)},
nh(a,b,c){var s,r=b==null,q=r?c:c.ab(0,b)
r=!r
if(r)this.c.push(new A.qm(new A.y(-b.a,-b.b)))
s=a.$2(this,q)
if(r)this.rZ()
return s},
FH(a,b,c){var s,r=c==null,q=r?b:A.co(c,b)
r=!r
if(r)this.c.push(new A.y6(c))
s=a.$2(this,q)
if(r)this.rZ()
return s},
FG(a,b,c){var s,r=this
if(b!=null)r.c.push(new A.qm(new A.y(-b.a,-b.b)))
else{c.toString
c=A.HC(A.ahZ(c))
c.toString
r.c.push(new A.y6(c))}s=a.$1(r)
r.rZ()
return s},
Ye(a,b){return this.FG(a,null,b)},
Yd(a,b){return this.FG(a,b,null)}}
A.nG.prototype={
j(a){return"<optimized out>#"+A.bL(this.a)+"@"+this.c.j(0)}}
A.ez.prototype={
j(a){return"offset="+this.a.j(0)}}
A.rM.prototype={}
A.C.prototype={
e4(a){if(!(a.e instanceof A.ez))a.e=new A.ez(B.k)},
fA(a){var s,r=this.k1
if(r==null)r=this.k1=A.u(t.k,t.DB)
s=r.br(0,a,new A.a2D(this,a))
return s},
bZ(a){return B.O},
gj8(){var s=this.k3
return new A.E(0,0,0+s.a,0+s.b)},
tl(a,b){var s=null
try{s=this.j1(a)}finally{}if(s==null&&!b)return this.k3.b
return s},
JL(a){return this.tl(a,!1)},
j1(a){var s=this,r=s.k4
if(r==null)r=s.k4=A.u(t.E7,t.u6)
r.br(0,a,new A.a2C(s,a))
return s.k4.i(0,a)},
ei(a){return null},
gZ(){return t.k.a(A.w.prototype.gZ.call(this))},
Q0(){var s,r=this,q=r.k4,p=q==null
if(!(!p&&q.a!==0)){s=r.id
if(!(s!=null&&s.a!==0)){s=r.k1
s=s!=null&&s.a!==0}else s=!0}else s=!0
if(s){if(!p)q.V(0)
q=r.id
if(q!=null)q.V(0)
q=r.k1
if(q!=null)q.V(0)
return!0}return!1},
a6(){var s=this
if(s.Q0()&&s.c instanceof A.w){s.rE()
return}s.MP()},
ci(a,b){var s,r=this
if(r.k3!=null)if(!a.k(0,t.k.a(A.w.prototype.gZ.call(r)))){s=r.k4
s=s!=null&&s.a!==0}else s=!1
else s=!1
if(s){s=r.k4
if(s!=null)s.V(0)}r.MO(a,b)},
h9(a){return this.ci(a,!1)},
ow(){this.k3=this.bZ(t.k.a(A.w.prototype.gZ.call(this)))},
bx(){},
bM(a,b){var s=this
if(s.k3.B(0,b))if(s.cB(a,b)||s.iG(b)){a.C(0,new A.nG(b,s))
return!0}return!1},
iG(a){return!1},
cB(a,b){return!1},
cZ(a,b){var s,r=a.e
r.toString
s=t.r.a(r).a
b.b1(0,s.a,s.b)},
kf(a){var s,r,q,p,o,n=this.bs(0,null)
if(n.la(n)===0)return B.k
s=new A.fr(new Float64Array(3))
s.kg(0,0,1)
r=new A.fr(new Float64Array(3))
r.kg(0,0,0)
q=n.rX(r)
r=new A.fr(new Float64Array(3))
r.kg(0,0,1)
p=n.rX(r).ab(0,q)
r=new A.fr(new Float64Array(3))
r.kg(a.a,a.b,0)
o=n.rX(r)
r=o.ab(0,p.A1(s.GJ(o)/s.GJ(p))).a
return new A.y(r[0],r[1])},
ghf(){var s=this.k3
return new A.E(0,0,0+s.a,0+s.b)},
hN(a,b){this.MN(a,b)}}
A.a2D.prototype={
$0(){return this.a.bZ(this.b)},
$S:221}
A.a2C.prototype={
$0(){return this.a.ei(this.b)},
$S:222}
A.cF.prototype={
a_6(a){var s,r,q,p=this.aw$
for(s=A.n(this).h("cF.1?");p!=null;){r=s.a(p.e)
q=p.j1(a)
if(q!=null)return q+r.a.b
p=r.an$}return null},
Gv(a){var s,r,q,p,o=this.aw$
for(s=A.n(this).h("cF.1"),r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.j1(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.an$}return r},
wL(a,b){var s,r,q={},p=q.a=this.cN$
for(s=A.n(this).h("cF.1");p!=null;p=r){p=p.e
p.toString
s.a(p)
if(a.nh(new A.a2B(q,b,p),p.a,b))return!0
r=p.bL$
q.a=r}return!1},
nG(a,b){var s,r,q,p,o,n=this.aw$
for(s=A.n(this).h("cF.1"),r=b.a,q=b.b;n!=null;){p=n.e
p.toString
s.a(p)
o=p.a
a.eu(n,new A.y(o.a+r,o.b+q))
n=p.an$}}}
A.a2B.prototype={
$2(a,b){return this.a.a.bM(a,b)},
$S:15}
A.xq.prototype={
ah(a){this.tV(0)}}
A.f8.prototype={
j(a){return this.pe(0)+"; id="+A.l(this.e)}}
A.a0G.prototype={
df(a,b){var s,r=this.b.i(0,a)
r.ci(b,!0)
s=r.k3
s.toString
return s},
dD(a,b){var s=this.b.i(0,a).e
s.toString
t.DU.a(s).a=b},
PK(a,b){var s,r,q,p,o,n,m=this,l=m.b
try{m.b=A.u(t.K,t.x)
for(r=t.DU,q=b;q!=null;q=n){p=q.e
p.toString
s=r.a(p)
p=m.b
p.toString
o=s.e
o.toString
p.l(0,o,q)
n=s.an$}m.Iw(a)}finally{m.b=l}},
j(a){return"MultiChildLayoutDelegate"}}
A.IV.prototype={
e4(a){if(!(a.e instanceof A.f8))a.e=new A.f8(null,null,B.k)},
swO(a){var s=this,r=s.L
if(r===a)return
if(A.A(a)!==A.A(r)||a.ml(r))s.a6()
s.L=a
s.b!=null},
aq(a){this.NQ(a)},
ah(a){this.NR(0)},
bZ(a){return a.bl(new A.a5(A.F(1/0,a.a,a.b),A.F(1/0,a.c,a.d)))},
bx(){var s=this,r=t.k.a(A.w.prototype.gZ.call(s))
r=r.bl(new A.a5(A.F(1/0,r.a,r.b),A.F(1/0,r.c,r.d)))
s.k3=r
s.L.PK(r,s.aw$)},
aG(a,b){this.nG(a,b)},
cB(a,b){return this.wL(a,b)}}
A.yu.prototype={
aq(a){var s,r,q
this.e8(a)
s=this.aw$
for(r=t.DU;s!=null;){s.aq(a)
q=s.e
q.toString
s=r.a(q).an$}},
ah(a){var s,r,q
this.dl(0)
s=this.aw$
for(r=t.DU;s!=null;){s.ah(0)
q=s.e
q.toString
s=r.a(q).an$}}}
A.P9.prototype={}
A.Du.prototype={
U(a,b){var s=this.a
return s==null?null:s.U(0,b)},
H(a,b){var s=this.a
return s==null?null:s.H(0,b)},
gA4(){return null},
Ah(a){return this.hp(a)},
rl(a){return null},
j(a){var s=A.bL(this),r=this.a
r=r==null?null:r.j(0)
if(r==null)r=""
return"<optimized out>#"+s+"("+r+")"}}
A.IW.prototype={
srW(a){var s=this.A
if(s==a)return
this.A=a
this.C7(a,s)},
sH9(a){var s=this.S
if(s==a)return
this.S=a
this.C7(a,s)},
C7(a,b){var s=this,r=a==null
if(r)s.ap()
else if(b==null||A.A(a)!==A.A(b)||a.hp(b))s.ap()
if(s.b!=null){if(b!=null)b.H(0,s.gdB())
if(!r)a.U(0,s.gdB())}if(r){if(s.b!=null)s.aZ()}else if(b==null||A.A(a)!==A.A(b)||a.Ah(b))s.aZ()},
st0(a){if(this.az.k(0,a))return
this.az=a
this.a6()},
aq(a){var s,r=this
r.mz(a)
s=r.A
if(s!=null)s.U(0,r.gdB())
s=r.S
if(s!=null)s.U(0,r.gdB())},
ah(a){var s=this,r=s.A
if(r!=null)r.H(0,s.gdB())
r=s.S
if(r!=null)r.H(0,s.gdB())
s.kt(0)},
cB(a,b){var s=this.S
if(s!=null){s=s.rl(b)
s=s===!0}else s=!1
if(s)return!0
return this.ph(a,b)},
iG(a){var s=this.A
if(s!=null){s=s.rl(a)
s=s!==!1}else s=!1
return s},
bx(){this.tZ()
this.aZ()},
nz(a){return a.bl(this.az)},
DI(a,b,c){var s
A.bd("debugPreviousCanvasSaveCount")
a.bR(0)
if(!b.k(0,B.k))a.b1(0,b.a,b.b)
s=this.k3
s.toString
c.aG(a,s)
a.bA(0)},
aG(a,b){var s,r,q=this
if(q.A!=null){s=a.gby(a)
r=q.A
r.toString
q.DI(s,b,r)
q.Et(a)}q.fK(a,b)
if(q.S!=null){s=a.gby(a)
r=q.S
r.toString
q.DI(s,b,r)
q.Et(a)}},
Et(a){},
ek(a){var s,r=this
r.fJ(a)
r.bH=null
s=r.S
r.dt=s==null?null:s.gA4()
a.a=!1},
nn(a,b,c){var s,r,q,p,o=this
o.fk=A.am9(o.fk,B.qt)
o.hM=A.am9(o.hM,B.qt)
s=o.fk
r=s!=null&&!s.gO(s)
s=o.hM
q=s!=null&&!s.gO(s)
s=A.a([],t.W)
if(r){p=o.fk
p.toString
B.b.I(s,p)}B.b.I(s,c)
if(q){p=o.hM
p.toString
B.b.I(s,p)}o.AY(a,b,s)},
l6(){this.tW()
this.hM=this.fk=null}}
A.V1.prototype={}
A.IZ.prototype={
OV(a){var s,r,q,p,o=this
try{r=o.L
if(r!==""){q=$.apm()
s=$.av().wE(q)
s.t2($.apn())
s.ng(r)
r=s.dn()
o.t!==$&&A.dX()
o.t=r}else{o.t!==$&&A.dX()
o.t=null}}catch(p){}},
gja(){return!0},
iG(a){return!0},
bZ(a){return a.bl(B.U8)},
aG(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
try{p=a.gby(a)
o=i.k3
n=b.a
m=b.b
l=o.a
o=o.b
k=$.av().bd()
k.sai(0,$.apl())
p.d0(new A.E(n,m,n+l,m+o),k)
p=i.t
p===$&&A.b()
if(p!=null){s=i.k3.a
r=0
q=0
if(s>328){s-=128
r+=64}p.h9(new A.m6(s))
if(i.k3.b>96+p.gcp(p)+12)q+=96
a.gby(a).lm(p,b.W(0,new A.y(r,q)))}}catch(j){}}}
A.tB.prototype={
G(){return"FlexFit."+this.b}}
A.dg.prototype={
j(a){return this.pe(0)+"; flex="+A.l(this.e)+"; fit="+A.l(this.f)}}
A.um.prototype={
G(){return"MainAxisSize."+this.b}}
A.m_.prototype={
G(){return"MainAxisAlignment."+this.b}}
A.jP.prototype={
G(){return"CrossAxisAlignment."+this.b}}
A.p1.prototype={
e4(a){if(!(a.e instanceof A.dg))a.e=new A.dg(null,null,B.k)},
ei(a){if(this.L===B.ak)return this.Gv(a)
return this.a_6(a)},
ps(a){switch(this.L.a){case 0:return a.b
case 1:return a.a}},
pt(a){switch(this.L.a){case 0:return a.a
case 1:return a.b}},
bZ(a){var s
if(this.au===B.mb)return B.O
s=this.BZ(a,A.afR())
switch(this.L.a){case 0:return a.bl(new A.a5(s.a,s.b))
case 1:return a.bl(new A.a5(s.b,s.a))}},
BZ(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.L===B.ak?a2.b:a2.d,a0=a<1/0,a1=c.aw$
for(s=t.uc,r=a2.b,q=a2.d,p=b,o=0,n=0,m=0;a1!=null;){l=a1.e
l.toString
s.a(l)
k=l.e
if(k==null)k=0
if(k>0){o+=k
p=a1}else{if(c.au===B.ma)switch(c.L.a){case 0:j=A.nF(q,b)
break
case 1:j=A.nF(b,r)
break
default:j=b}else switch(c.L.a){case 0:j=new A.aS(0,1/0,0,q)
break
case 1:j=new A.aS(0,r,0,1/0)
break
default:j=b}i=a3.$2(a1,j)
m+=c.pt(i)
n=Math.max(n,A.kY(c.ps(i)))}a1=l.an$}h=Math.max(0,(a0?a:0)-m)
if(o>0){g=a0?h/o:0/0
a1=c.aw$
for(f=0;a1!=null;){l=a1.e
l.toString
k=s.a(l).e
if(k==null)k=0
if(k>0){if(a0)e=a1===p?h-f:g*k
else e=1/0
d=A.bd("minChildExtent")
l=a1.e
l.toString
l=s.a(l).f
switch((l==null?B.mr:l).a){case 0:if(d.b!==d)A.U(A.a_E(d.a))
d.b=e
break
case 1:if(d.b!==d)A.U(A.a_E(d.a))
d.b=0
break}if(c.au===B.ma)switch(c.L.a){case 0:l=d.b
if(l===d)A.U(A.fS(d.a))
j=new A.aS(l,e,q,q)
break
case 1:l=d.b
if(l===d)A.U(A.fS(d.a))
j=new A.aS(r,r,l,e)
break
default:j=b}else switch(c.L.a){case 0:l=d.b
if(l===d)A.U(A.fS(d.a))
j=new A.aS(l,e,0,q)
break
case 1:l=d.b
if(l===d)A.U(A.fS(d.a))
j=new A.aS(0,r,l,e)
break
default:j=b}i=a3.$2(a1,j)
m+=c.pt(i)
f+=e
n=Math.max(n,A.kY(c.ps(i)))}l=a1.e
l.toString
a1=s.a(l).an$}}return new A.abb(a0&&c.J===B.w?a:m,n,m)},
bx(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.k.a(A.w.prototype.gZ.call(a)),a1=a.BZ(a0,A.afS()),a2=a1.a,a3=a1.b
if(a.au===B.mb){s=a.aw$
for(r=t.uc,q=0,p=0,o=0;s!=null;){n=a.bv
n.toString
m=s.tl(n,!0)
if(m!=null){q=Math.max(q,m)
p=Math.max(m,p)
o=Math.max(s.k3.b-m,o)
a3=Math.max(p+o,a3)}n=s.e
n.toString
s=r.a(n).an$}}else q=0
switch(a.L.a){case 0:r=a.k3=a0.bl(new A.a5(a2,a3))
a2=r.a
a3=r.b
break
case 1:r=a.k3=a0.bl(new A.a5(a3,a2))
a2=r.b
a3=r.a
break}l=a2-a1.c
a.c2=Math.max(0,-l)
k=Math.max(0,l)
j=A.bd("leadingSpace")
i=A.bd("betweenSpace")
r=A.ao6(a.L,a.aj,a.aW)
h=r===!1
switch(a.t.a){case 0:j.sbU(0)
i.sbU(0)
break
case 1:j.sbU(k)
i.sbU(0)
break
case 2:j.sbU(k/2)
i.sbU(0)
break
case 3:j.sbU(0)
r=a.d1$
i.sbU(r>1?k/(r-1):0)
break
case 4:r=a.d1$
i.sbU(r>0?k/r:0)
j.sbU(i.aC()/2)
break
case 5:r=a.d1$
i.sbU(r>0?k/(r+1):0)
j.sbU(i.aC())
break}g=h?a2-j.aC():j.aC()
s=a.aw$
for(r=t.uc,n=a3/2,f=i.a;s!=null;){e=s.e
e.toString
r.a(e)
d=a.au
switch(d.a){case 0:case 1:if(A.ao6(A.aAk(a.L),a.aj,a.aW)===(d===B.aD))c=0
else{d=s.k3
d.toString
c=a3-a.ps(d)}break
case 2:d=s.k3
d.toString
c=n-a.ps(d)/2
break
case 3:c=0
break
case 4:if(a.L===B.ak){d=a.bv
d.toString
m=s.tl(d,!0)
c=m!=null?q-m:0}else c=0
break
default:c=null}if(h){d=s.k3
d.toString
g-=a.pt(d)}switch(a.L.a){case 0:e.a=new A.y(g,c)
break
case 1:e.a=new A.y(c,g)
break}if(h){d=i.b
if(d===i)A.U(A.fS(f))
g-=d}else{d=s.k3
d.toString
d=a.pt(d)
b=i.b
if(b===i)A.U(A.fS(f))
g+=d+b}s=e.an$}},
cB(a,b){return this.wL(a,b)},
aG(a,b){var s,r,q,p=this
if(!(p.c2>1e-10)){p.nG(a,b)
return}s=p.k3
if(s.gO(s))return
s=p.c3
r=p.cx
r===$&&A.b()
q=p.k3
s.saQ(0,a.k_(r,b,new A.E(0,0,0+q.a,0+q.b),p.ga_7(),p.c8,s.a))},
m(){this.c3.saQ(0,null)
this.NS()},
ip(a){var s
switch(this.c8.a){case 0:return null
case 1:case 2:case 3:if(this.c2>1e-10){s=this.k3
s=new A.E(0,0,0+s.a,0+s.b)}else s=null
return s}},
bP(){var s=this.MS()
return s}}
A.abb.prototype={}
A.Pa.prototype={
aq(a){var s,r,q
this.e8(a)
s=this.aw$
for(r=t.uc;s!=null;){s.aq(a)
q=s.e
q.toString
s=r.a(q).an$}},
ah(a){var s,r,q
this.dl(0)
s=this.aw$
for(r=t.uc;s!=null;){s.ah(0)
q=s.e
q.toString
s=r.a(q).an$}}}
A.Pb.prototype={}
A.yv.prototype={
m(){var s,r,q
for(s=this.GZ$,r=s.length,q=0;q<r;++q)s[q].m()
this.hs()},
ev(){this.MR()}}
A.J1.prototype={
TN(){var s=this
if(s.L!=null)return
s.L=s.dX
s.t=!1},
Dk(){this.t=this.L=null
this.ap()},
seR(a,b){var s=this,r=s.J
if(b==r)return
if(b!=null&&r!=null&&b.HQ(r)){b.m()
return}r=s.J
if(r!=null)r.m()
s.J=b
s.ap()
if(s.aj==null||s.aW==null)s.a6()},
sbC(a,b){if(b==this.aj)return
this.aj=b
this.a6()},
scp(a,b){if(b==this.aW)return
this.aW=b
this.a6()},
sKb(a,b){if(b===this.bv)return
this.bv=b
this.a6()},
Xq(){this.c2=null},
sai(a,b){return},
sjU(a,b){return},
slF(a){if(a===this.bF)return
this.bF=a
this.ap()},
sZ4(a){return},
sxu(a){if(a==this.dW)return
this.dW=a
this.ap()},
sdR(a){if(a.k(0,this.dX))return
this.dX=a
this.Dk()},
sa30(a,b){if(b===this.dc)return
this.dc=b
this.ap()},
sYI(a){return},
sxQ(a){if(a===this.el)return
this.el=a
this.ap()},
sa1Q(a){return},
sbB(a){if(this.em==a)return
this.em=a
this.Dk()},
sxS(a){return},
EA(a){var s,r,q=this,p=q.aj
a=A.nF(q.aW,p).nV(a)
p=q.J
if(p==null)return new A.a5(A.F(0,a.a,a.b),A.F(0,a.c,a.d))
p=p.gbC(p)
s=q.bv
r=q.J
return a.nA(new A.a5(p/s,r.gcp(r)/q.bv))},
iG(a){return!0},
bZ(a){return this.EA(a)},
bx(){this.k3=this.EA(t.k.a(A.w.prototype.gZ.call(this)))},
aq(a){this.e8(a)},
ah(a){this.dl(0)},
aG(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(d.J==null)return
d.TN()
s=a.gby(a)
r=d.k3
q=b.a
p=b.b
o=r.a
r=r.b
n=d.J
n.toString
m=d.au
l=d.bv
k=d.c2
j=d.dW
i=d.L
i.toString
h=d.iB
g=d.dc
f=d.t
f.toString
e=d.el
A.aoO(i,s,h,k,m,d.bF,j,f,n,e,!1,1,new A.E(q,p,q+o,p+r),g,l)},
m(){var s=this.J
if(s!=null)s.m()
this.J=null
this.hs()}}
A.r6.prototype={
j(a){return"AnnotationEntry(annotation: "+this.a.j(0)+", localPosition: "+this.b.j(0)+")"}}
A.Ak.prototype={}
A.ub.prototype={
ht(){},
qg(a){var s,r=this
r.e+=a
s=t.ow
if(s.a(A.I.prototype.gaH.call(r,r))!=null)s.a(A.I.prototype.gaH.call(r,r)).qg(a)},
mP(a){var s,r,q
for(s=this.d,s=A.az(s.gaX(s),!0,t.M),r=s.length,q=0;q<r;++q)s[q].$0()},
m(){var s=this.z
if(s!=null)s.m()
this.z=null},
dA(){if(this.y)return
this.y=!0},
shJ(a){var s,r=this,q=r.z
if(q!=null)q.m()
r.z=a
q=t.ow
if(q.a(A.I.prototype.gaH.call(r,r))!=null){q.a(A.I.prototype.gaH.call(r,r)).toString
s=!0}else s=!1
if(s)q.a(A.I.prototype.gaH.call(r,r)).dA()},
te(){this.y=this.y||!1},
is(a){var s
this.dA()
s=a.e
if(s!==0)this.qg(-s)
this.tL(a)},
m_(a){var s,r,q=this,p=t.ow.a(A.I.prototype.gaH.call(q,q))
if(p!=null){s=q.as
r=q.Q
if(s==null)p.CW=r
else s.Q=r
r=q.Q
if(r==null)p.cx=s
else r.as=s
q.Q=q.as=null
p.is(q)
q.w.saQ(0,null)}},
en(a,b,c){return!1},
H2(a,b,c){var s=A.a([],c.h("x<r6<0>>"))
this.en(new A.Ak(s,c.h("Ak<0>")),b,!0,c)
return s.length===0?null:B.b.gM(s).a},
Pi(a){var s,r=this
if(!r.y&&r.z!=null){s=r.z
s.toString
a.Y5(s)
return}r.fV(a)
r.y=!1},
bP(){var s=this.LE()
return s+(this.b==null?" DETACHED":"")}}
A.FC.prototype={
saQ(a,b){var s=this.a
if(b==null?s==null:b===s)return
if(s!=null)if(--s.x===0)s.m()
this.a=b
if(b!=null)++b.x},
j(a){var s=this.a
return"LayerHandle("+(s!=null?J.dc(s):"DISPOSED")+")"}}
A.Im.prototype={
sIx(a){var s
this.dA()
s=this.cx
if(s!=null)s.m()
this.cx=a},
m(){this.sIx(null)
this.AO()},
fV(a){var s=this.cx
s.toString
a.Y3(B.k,s,this.cy,this.db)},
en(a,b,c){return!1}}
A.Ii.prototype={
fV(a){a.Y2(this.cx,this.CW)
a.KA(this.cy)
a.Kt(!1)
a.Ks(!1)},
en(a,b,c){return!1}}
A.eB.prototype={
mP(a){var s
this.M4(a)
if(!a)return
s=this.CW
for(;s!=null;){s.mP(!0)
s=s.Q}},
YB(a){var s=this
s.te()
s.fV(a)
if(s.e>0)s.mP(!0)
s.y=!1
return a.dn()},
m(){this.z4()
this.d.V(0)
this.AO()},
te(){var s,r=this
r.M5()
s=r.CW
for(;s!=null;){s.te()
r.y=r.y||s.y
s=s.Q}},
en(a,b,c,d){var s,r,q
for(s=this.cx,r=a.a;s!=null;s=s.as){if(s.en(a,b,!0,d))return!0
q=r.length
if(q!==0)return!1}return!1},
aq(a){var s
this.tK(a)
s=this.CW
for(;s!=null;){s.aq(a)
s=s.Q}},
ah(a){var s
this.dl(0)
s=this.CW
for(;s!=null;){s.ah(0)
s=s.Q}this.mP(!1)},
fX(a,b){var s,r=this
r.dA()
s=b.e
if(s!==0)r.qg(s)
r.Av(b)
s=b.as=r.cx
if(s!=null)s.Q=b
r.cx=b
if(r.CW==null)r.CW=b
b.w.saQ(0,b)},
z4(){var s,r,q,p=this,o=p.CW
for(s=t.ow;o!=null;o=r){r=o.Q
o.Q=o.as=null
p.dA()
q=o.e
if(q!==0){q=-q
p.e+=q
if(s.a(A.I.prototype.gaH.call(p,p))!=null)s.a(A.I.prototype.gaH.call(p,p)).qg(q)}p.tL(o)
o.w.saQ(0,null)}p.cx=p.CW=null},
fV(a){this.jr(a)},
jr(a){var s=this.CW
for(;s!=null;){s.Pi(a)
s=s.Q}}}
A.hL.prototype={
shc(a,b){if(!b.k(0,this.p1))this.dA()
this.p1=b},
en(a,b,c,d){return this.mt(a,b.ab(0,this.p1),!0,d)},
fV(a){var s=this,r=s.p1
s.shJ(a.II(r.a,r.b,t.cV.a(s.z)))
s.jr(a)
a.fu()}}
A.nQ.prototype={
en(a,b,c,d){if(!this.p1.B(0,b))return!1
return this.mt(a,b,!0,d)},
fV(a){var s=this,r=s.p1
r.toString
s.shJ(a.a2v(r,s.p2,t.CW.a(s.z)))
s.jr(a)
a.fu()}}
A.rH.prototype={
en(a,b,c,d){if(!this.p1.B(0,b))return!1
return this.mt(a,b,!0,d)},
fV(a){var s=this,r=s.p1
r.toString
s.shJ(a.a2t(r,s.p2,t.cB.a(s.z)))
s.jr(a)
a.fu()}}
A.rG.prototype={
en(a,b,c,d){if(!this.p1.B(0,b))return!1
return this.mt(a,b,!0,d)},
fV(a){var s=this,r=s.p1
r.toString
s.shJ(a.a2s(r,s.p2,t.xS.a(s.z)))
s.jr(a)
a.fu()}}
A.kx.prototype={
sbg(a,b){var s=this
if(b.k(0,s.ad))return
s.ad=b
s.bb=!0
s.dA()},
fV(a){var s,r,q=this
q.aV=q.ad
if(!q.p1.k(0,B.k)){s=q.p1
s=A.uG(s.a,s.b,0)
r=q.aV
r.toString
s.es(0,r)
q.aV=s}q.shJ(a.a2y(q.aV.a,t.Al.a(q.z)))
q.jr(a)
a.fu()},
Xi(a){var s,r=this
if(r.bb){s=r.ad
s.toString
r.bf=A.HC(A.ahZ(s))
r.bb=!1}s=r.bf
if(s==null)return null
return A.co(s,a)},
en(a,b,c,d){var s=this.Xi(b)
if(s==null)return!1
return this.Mt(a,s,!0,d)}}
A.va.prototype={
sFK(a,b){var s=this,r=s.ad
if(b!=r){if(b===255||r===255)s.shJ(null)
s.ad=b
s.dA()}},
fV(a){var s,r,q,p=this
if(p.CW==null){p.shJ(null)
return}s=p.ad
s.toString
r=p.p1
q=p.z
if(s<255)p.shJ(a.a2x(s,r,t.i6.a(q)))
else p.shJ(a.II(r.a,r.b,t.cV.a(q)))
p.jr(a)
a.fu()}}
A.r5.prototype={
en(a,b,c,d){var s,r,q,p=this,o=p.mt(a,b,!0,d),n=a.a
if(n.length!==0&&!0)return o
s=p.p2
if(s!=null){r=p.p3
q=r.a
r=r.b
s=!new A.E(q,r,q+s.a,r+s.b).B(0,b)}else s=!1
if(s)return o
if(A.aP(p.$ti.c)===A.aP(d)){o=o||!1
n.push(new A.r6(d.a(p.p1),b.ab(0,p.p3),d.h("r6<0>")))}return o}}
A.Nw.prototype={}
A.NY.prototype={
a31(a){var s=this.a
this.a=a
return s},
j(a){var s="<optimized out>#",r=A.bL(this.b),q=this.a.a
return s+A.bL(this)+"("+("latestEvent: "+(s+r))+", "+("annotations: [list of "+q+"]")+")"}}
A.NZ.prototype={
ghG(a){var s=this.c
return s.ghG(s)}}
A.HL.prototype={
CY(a){var s,r,q,p,o,n,m=t.mC,l=A.iS(null,null,null,m,t.rA)
for(s=a.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q){p=s[q]
o=p.a
if(m.b(o)){n=p.b
n.toString
l.l(0,o,n)}}return l},
R7(a,b){var s=a.b,r=s.gbq(s)
s=a.b
if(!this.b.T(0,s.ghG(s)))return A.iS(null,null,null,t.mC,t.rA)
return this.CY(b.$1(r))},
CK(a){var s,r
A.auD(a)
s=a.b
r=A.n(s).h("b0<1>")
this.a.a00(a.ghG(a),a.d,A.oE(new A.b0(s,r),new A.a0C(),r.h("p.E"),t.oR))},
a3H(a,b){var s,r,q,p,o
if(a.gc4(a)!==B.bR)return
if(t.zs.b(a))return
s=t.yg.b(a)?A.ala():b.$0()
r=a.ghG(a)
q=this.b
p=q.i(0,r)
if(!A.auE(p,a))return
o=q.a
new A.a0F(this,p,a,r,s).$0()
if(o!==0!==(q.a!==0))this.aB()},
a3B(a){new A.a0D(this,a).$0()}}
A.a0C.prototype={
$1(a){return a.gGt(a)},
$S:223}
A.a0F.prototype={
$0(){var s=this
new A.a0E(s.a,s.b,s.c,s.d,s.e).$0()},
$S:0}
A.a0E.prototype={
$0(){var s,r,q,p,o,n=this,m=null,l=n.b
if(l==null){s=n.c
if(t.yg.b(s))return
n.a.b.l(0,n.d,new A.NY(A.iS(m,m,m,t.mC,t.rA),s))}else{s=n.c
if(t.yg.b(s))n.a.b.u(0,s.ghG(s))}r=n.a
q=r.b.i(0,n.d)
if(q==null){l.toString
q=l}p=q.b
q.b=s
o=t.yg.b(s)?A.iS(m,m,m,t.mC,t.rA):r.CY(n.e)
r.CK(new A.NZ(q.a31(o),o,p,s))},
$S:0}
A.a0D.prototype={
$0(){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.b,r=r.gaX(r),r=new A.e1(J.aw(r.a),r.b),q=this.b,p=A.n(r).z[1];r.q();){o=r.a
if(o==null)o=p.a(o)
n=o.b
m=s.R7(o,q)
l=o.a
o.a=m
s.CK(new A.NZ(l,m,n,null))}},
$S:0}
A.a0A.prototype={
$2(a,b){var s
if(!this.a.T(0,a))if(a.gzx()&&a.gyx(a)!=null){s=a.gyx(a)
s.toString
s.$1(this.b.aI(this.c.i(0,a)))}},
$S:224}
A.a0B.prototype={
$1(a){return!this.a.T(0,a)},
$S:225}
A.Rw.prototype={}
A.cb.prototype={
ah(a){},
j(a){return"<none>"}}
A.kg.prototype={
eu(a,b){var s,r=this
if(a.gdd()){r.ms()
if(!a.cy){s=a.ay
s===$&&A.b()
s=!s}else s=!0
if(s)A.alS(a,null,!0)
else if(a.db)A.auY(a)
s=a.ch.a
s.toString
t.cY.a(s)
s.shc(0,b)
r.wg(s)}else{s=a.ay
s===$&&A.b()
if(s){a.ch.saQ(0,null)
a.vn(r,b)}else a.vn(r,b)}},
wg(a){a.m_(0)
this.a.fX(0,a)},
gby(a){var s,r,q=this
if(q.e==null){q.c=A.av_(q.b)
s=$.av()
r=s.ZP()
q.d=r
q.e=s.ZJ(r,null)
r=q.c
r.toString
q.a.fX(0,r)}s=q.e
s.toString
return s},
ms(){var s,r=this
if(r.e==null)return
s=r.c
s.toString
s.sIx(r.d.xf())
r.e=r.d=r.c=null},
Ab(){var s=this.c
if(s!=null)if(!s.cy){s.cy=!0
s.dA()}},
oz(a,b,c,d){var s,r=this
if(a.CW!=null)a.z4()
r.ms()
r.wg(a)
s=r.ZL(a,d==null?r.b:d)
b.$2(s,c)
s.ms()},
IH(a,b,c){return this.oz(a,b,c,null)},
ZL(a,b){return new A.kg(a,b)},
k_(a,b,c,d,e,f){var s,r,q=this
if(e===B.l){d.$2(q,b)
return null}s=c.d6(b)
if(a){if(f==null){r=new A.nQ(B.J,A.u(t.S,t.M),A.au())
r.ht()}else r=f
if(!s.k(0,r.p1)){r.p1=s
r.dA()}if(e!==r.p2){r.p2=e
r.dA()}q.oz(r,d,b,s)
return r}else{q.YZ(s,e,s,new A.a1u(q,d,b))
return null}},
a2u(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.l){e.$2(p,b)
return null}s=c.d6(b)
r=d.d6(b)
if(a){if(g==null){q=new A.rH(B.lX,A.u(t.S,t.M),A.au())
q.ht()}else q=g
if(!r.k(0,q.p1)){q.p1=r
q.dA()}if(f!==q.p2){q.p2=f
q.dA()}p.oz(q,e,b,s)
return q}else{p.YX(r,f,s,new A.a1t(p,e,b))
return null}},
IG(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.l){e.$2(p,b)
return null}s=c.d6(b)
r=d.d6(b)
if(a){if(g==null){q=new A.rG(B.lX,A.u(t.S,t.M),A.au())
q.ht()}else q=g
if(r!==q.p1){q.p1=r
q.dA()}if(f!==q.p2){q.p2=f
q.dA()}p.oz(q,e,b,s)
return q}else{p.YV(r,f,s,new A.a1s(p,e,b))
return null}},
oA(a,b,c,d,e){var s,r=this,q=b.a,p=b.b,o=A.uG(q,p,0)
o.es(0,c)
o.b1(0,-q,-p)
if(a){s=e==null?A.amN(null):e
s.sbg(0,o)
r.oz(s,d,b,A.alD(o,r.b))
return s}else{q=r.gby(r)
q.bR(0)
q.ac(0,o.a)
d.$2(r,b)
r.gby(r).bA(0)
return null}},
a2z(a,b,c,d){return this.oA(a,b,c,d,null)},
yT(a,b,c,d){var s=d==null?A.alP():d
s.sFK(0,b)
s.shc(0,a)
this.IH(s,c,B.k)
return s},
j(a){return"PaintingContext#"+A.e3(this)+"(layer: "+this.a.j(0)+", canvas bounds: "+this.b.j(0)+")"}}
A.a1u.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.a1t.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.a1s.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.US.prototype={}
A.a4G.prototype={
m(){var s,r=this.b
if(r!=null)this.a.as.H(0,r)
r=this.a
if(--r.at===0){s=r.as
s.b.V(0)
s.c.V(0)
s.d.V(0)
s.dm()
r.as=null
r.d.$0()}}}
A.In.prototype={
m1(){this.a.$0()},
sa3e(a){var s=this.e
if(s===a)return
if(s!=null)s.ah(0)
this.e=a
a.aq(this)},
a_R(){var s,r,q,p,o,n,m,l,k,j,i,h=this
try{for(p=t.O,o=t.By;n=h.r,n.length!==0;){s=n
h.r=A.a([],o)
n=s
m=new A.a1A()
if(!!n.immutable$list)A.U(A.N("sort"))
l=n.length-1
if(l-0<=32)A.K9(n,0,l,m)
else A.K8(n,0,l,m)
for(r=0;r<J.bG(s);++r){if(h.f){h.f=!1
n=h.r
if(n.length!==0){m=s
l=r
k=J.bG(s)
A.dx(l,k,J.bG(m),null,null)
j=A.b2(m)
i=new A.eP(m,l,k,j.h("eP<1>"))
i.pj(m,l,k,j.c)
B.b.I(n,i)
break}}q=J.aR(s,r)
if(q.z){n=q
n=p.a(A.I.prototype.gbj.call(n))===h}else n=!1
if(n)q.U8()}h.f=!1}}finally{h.f=!1}},
QM(a){try{a.$0()}finally{this.f=!0}},
a_Q(){var s,r,q,p,o=this.y
B.b.dj(o,new A.a1z())
for(s=o.length,r=t.O,q=0;q<o.length;o.length===s||(0,A.R)(o),++q){p=o[q]
if(p.CW&&r.a(A.I.prototype.gbj.call(p))===this)p.F8()}B.b.V(o)},
a_S(){var s,r,q,p,o,n,m,l,k
try{s=this.z
this.z=A.a([],t.By)
for(q=s,J.agT(q,new A.a1B()),p=q.length,o=t.O,n=t.cY,m=0;m<q.length;q.length===p||(0,A.R)(q),++m){r=q[m]
if(r.cy||r.db){l=r
l=o.a(A.I.prototype.gbj.call(l))===this}else l=!1
if(l)if(r.ch.a.b!=null)if(r.cy)A.alS(r,null,!1)
else{l=r
k=l.ch.a
k.toString
l.oP(n.a(k))
l.db=!1}else r.WR()}}finally{}},
a_w(a){var s,r=this
if(++r.at===1){s=t.ju
r.as=new A.wa(r.c,A.aE(s),A.u(t.S,s),A.aE(s),$.bv())
r.b.$0()}if(a!=null)r.as.U(0,a)
return new A.a4G(r,a)},
GU(){return this.a_w(null)},
a_T(){var s,r,q,p,o,n,m,l,k=this
if(k.as==null)return
try{q=k.ay
p=A.az(q,!0,A.n(q).c)
B.b.dj(p,new A.a1C())
s=p
q.V(0)
for(q=s,o=q.length,n=t.O,m=0;m<q.length;q.length===o||(0,A.R)(q),++m){r=q[m]
if(r.dy){l=r
l=n.a(A.I.prototype.gbj.call(l))===k}else l=!1
if(l)r.XC()}k.as.Kq()}finally{}}}
A.a1A.prototype={
$2(a,b){return a.a-b.a},
$S:40}
A.a1z.prototype={
$2(a,b){return a.a-b.a},
$S:40}
A.a1B.prototype={
$2(a,b){return b.a-a.a},
$S:40}
A.a1C.prototype={
$2(a,b){return a.a-b.a},
$S:40}
A.w.prototype={
aE(){var s=this
s.cx=s.gdd()||s.gl3()
s.ay=s.gdd()},
ev(){var s=this
s.a6()
s.jQ()
s.ap()
s.aZ()
s.aT(new A.a2P())},
m(){this.ch.saQ(0,null)},
e4(a){if(!(a.e instanceof A.cb))a.e=new A.cb()},
hA(a){var s=this
s.e4(a)
s.a6()
s.jQ()
s.aZ()
s.Av(a)},
is(a){var s=this
a.BM()
a.e.ah(0)
a.e=null
s.tL(a)
s.a6()
s.jQ()
s.aZ()},
aT(a){},
q0(a,b,c){A.dI(new A.bz(b,c,"rendering library",A.bj("during "+a+"()"),new A.a2L(this),!1))},
aq(a){var s=this
s.tK(a)
if(s.z&&s.Q!=null){s.z=!1
s.a6()}if(s.CW){s.CW=!1
s.jQ()}if(s.cy&&s.ch.a!=null){s.cy=!1
s.ap()}if(s.dy&&s.gvF().a){s.dy=!1
s.aZ()}},
gZ(){var s=this.at
if(s==null)throw A.d(A.a6("A RenderObject does not have any constraints before it has been laid out."))
return s},
a6(){var s,r=this
if(r.z)return
s=r.Q
if(s==null){r.z=!0
if(r.c!=null)r.rE()
return}if(s!==r)r.rE()
else{r.z=!0
s=t.O
if(s.a(A.I.prototype.gbj.call(r))!=null){s.a(A.I.prototype.gbj.call(r)).r.push(r)
s.a(A.I.prototype.gbj.call(r)).m1()}}},
rE(){this.z=!0
var s=this.c
s.toString
t.d.a(s)
if(!this.as)s.a6()},
BM(){var s=this
if(s.Q!==s){s.Q=null
s.aT(A.aoL())}},
VJ(){var s,r,q=this,p=q.Q
if(p===q)return
s=t.B2.a(q.c)
r=s==null?null:s.Q
if(r!=p){q.Q=r
q.aT(A.aoM())}},
U8(){var s,r,q,p=this
try{p.bx()
p.aZ()}catch(q){s=A.aj(q)
r=A.aA(q)
p.q0("performLayout",s,r)}p.z=!1
p.ap()},
ci(a,b){var s,r,q,p,o,n,m,l=this
if(!b||l.gja()||a.gHX()||!(l.c instanceof A.w))o=l
else{n=l.c
n.toString
n=t.d.a(n).Q
n.toString
o=n}if(!l.z&&a.k(0,l.at)){if(o!==l.Q){l.Q=o
l.aT(A.aoM())}return}l.at=a
n=l.Q
if(n!=null&&o!==n)l.aT(A.aoL())
l.Q=o
if(l.gja())try{l.ow()}catch(m){s=A.aj(m)
r=A.aA(m)
l.q0("performResize",s,r)}try{l.bx()
l.aZ()}catch(m){q=A.aj(m)
p=A.aA(m)
l.q0("performLayout",q,p)}l.z=!1
l.ap()},
gja(){return!1},
HP(a,b){var s=this
s.as=!0
try{t.O.a(A.I.prototype.gbj.call(s)).QM(new A.a2O(s,a,b))}finally{s.as=!1}},
gdd(){return!1},
gl3(){return!1},
oP(a){return a==null?A.auT(B.k):a},
jQ(){var s,r,q,p=this
if(p.CW)return
s=p.CW=!0
r=p.c
if(r instanceof A.w){if(r.CW)return
q=p.ay
q===$&&A.b()
if((q?!p.gdd():s)&&!r.gdd()){r.jQ()
return}}s=t.O
if(s.a(A.I.prototype.gbj.call(p))!=null)s.a(A.I.prototype.gbj.call(p)).y.push(p)},
F8(){var s,r,q=this
if(!q.CW)return
s=q.cx
s===$&&A.b()
q.cx=!1
q.aT(new A.a2M(q))
if(q.gdd()||q.gl3())q.cx=!0
if(!q.gdd()){r=q.ay
r===$&&A.b()}else r=!1
if(r){q.db=q.cy=!1
s=t.O.a(A.I.prototype.gbj.call(q))
if(s!=null)B.b.u(s.z,q)
q.CW=!1
q.ap()}else if(s!==q.cx){q.CW=!1
q.ap()}else q.CW=!1},
ap(){var s,r=this
if(r.cy)return
r.cy=!0
if(r.gdd()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=t.O
if(s.a(A.I.prototype.gbj.call(r))!=null){s.a(A.I.prototype.gbj.call(r)).z.push(r)
s.a(A.I.prototype.gbj.call(r)).m1()}}else{s=r.c
if(s instanceof A.w)s.ap()
else{s=t.O
if(s.a(A.I.prototype.gbj.call(r))!=null)s.a(A.I.prototype.gbj.call(r)).m1()}}},
a1O(){var s,r=this
if(r.db||r.cy)return
r.db=!0
if(r.gdd()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=t.O
if(s.a(A.I.prototype.gbj.call(r))!=null){s.a(A.I.prototype.gbj.call(r)).z.push(r)
s.a(A.I.prototype.gbj.call(r)).m1()}}else r.ap()},
WR(){var s,r=this.c
for(;r instanceof A.w;){if(r.gdd()){s=r.ch.a
if(s==null)break
if(s.b!=null)break
r.cy=!0}r=r.c}},
vn(a,b){var s,r,q,p=this
if(p.z)return
p.db=p.cy=!1
p.ay=p.gdd()
try{p.aG(a,b)}catch(q){s=A.aj(q)
r=A.aA(q)
p.q0("paint",s,r)}},
aG(a,b){},
cZ(a,b){},
jY(a){return!0},
bs(a,b){var s,r,q,p,o,n,m,l,k=b==null
if(k){s=t.O.a(A.I.prototype.gbj.call(this)).e
if(s instanceof A.w)b=s}r=A.a([],t.By)
q=t.d
p=this
while(p!==b){r.push(p)
o=p.c
o.toString
q.a(o)
p=o}if(!k){b.toString
r.push(b)}n=new A.bg(new Float64Array(16))
n.cR()
for(m=r.length-1;m>0;m=l){l=m-1
r[m].cZ(r[l],n)}return n},
ip(a){return null},
wQ(a){return null},
ek(a){},
tz(a){var s
if(t.O.a(A.I.prototype.gbj.call(this)).as==null)return
s=this.fr
if(s!=null&&!s.as)s.Kp(a)
else{s=this.c
if(s!=null)t.d.a(s).tz(a)}},
gvF(){var s,r=this
if(r.dx==null){s=A.ph()
r.dx=s
r.ek(s)}s=r.dx
s.toString
return s},
l6(){this.dy=!0
this.fr=null
this.aT(new A.a2N())},
aZ(){var s,r,q,p,o,n,m=this
if(m.b==null||t.O.a(A.I.prototype.gbj.call(m)).as==null){m.dx=null
return}if(m.fr!=null){s=m.dx
s=s==null?null:s.a
r=s===!0}else r=!1
m.dx=null
q=m.gvF().a&&r
s=t.d
p=m
while(!0){if(!(!q&&p.c instanceof A.w))break
if(p!==m&&p.dy)break
p.dy=!0
o=p.c
o.toString
s.a(o)
if(o.dx==null){n=A.ph()
o.dx=n
o.ek(n)}q=o.dx.a
if(q&&o.fr==null)return
p=o}if(p!==m&&m.fr!=null&&m.dy)t.O.a(A.I.prototype.gbj.call(m)).ay.u(0,m)
if(!p.dy){p.dy=!0
s=t.O
if(s.a(A.I.prototype.gbj.call(m))!=null){s.a(A.I.prototype.gbj.call(m)).ay.C(0,p)
s.a(A.I.prototype.gbj.call(m)).m1()}}},
XC(){var s,r,q,p,o,n,m=this,l=null
if(m.z)return
s=m.fr
if(s==null)s=l
else{s=t.aa.a(A.I.prototype.gaH.call(s,s))
if(s==null)s=l
else s=s.at||s.as}r=t.sO.a(m.CD(s===!0))
q=A.a([],t.W)
s=m.fr
p=s==null
o=p?l:s.x
n=p?l:s.y
s=p?l:s.z
r.ny(s==null?0:s,n,o,q)
B.b.gb2(q)},
CD(a){var s,r,q,p,o,n,m,l,k=this,j={},i=k.gvF()
j.a=i.c
s=!i.d&&!i.a
r=t.yj
q=A.a([],r)
p=A.aE(t.sO)
k.eX(new A.a2K(j,k,a||i.p2,q,p,i,s))
for(o=A.ig(p,p.r),n=A.n(o).c;o.q();){m=o.d;(m==null?n.a(m):m).y6()}k.dy=!1
if(!(k.c instanceof A.w)){o=j.a
l=new A.Pv(A.a([],r),A.a([k],t.By),o)}else{o=j.a
if(s)l=new A.a9q(A.a([],r),o)
else{l=new A.Qi(a,i,A.a([],r),A.a([k],t.By),o)
if(i.a)l.x=!0}}l.I(0,q)
return l},
eX(a){this.aT(a)},
nn(a,b,c){a.j_(0,t.d1.a(c),b)},
hN(a,b){},
bP(){var s=A.bL(this)
return"<optimized out>#"+s},
j(a){return this.bP()},
e5(a,b,c,d){var s=this.c
if(s instanceof A.w)s.e5(a,b==null?this:b,c,d)},
mn(){return this.e5(B.aE,null,B.r,null)},
ki(a,b){return this.e5(B.aE,a,B.r,b)},
$iaq:1}
A.a2P.prototype={
$1(a){a.ev()},
$S:31}
A.a2L.prototype={
$0(){var s=A.a([],t.F),r=this.a
s.push(A.ahf("The following RenderObject was being processed when the exception was fired",B.Em,r))
s.push(A.ahf("RenderObject",B.En,r))
return s},
$S:18}
A.a2O.prototype={
$0(){this.b.$1(this.c.a(this.a.gZ()))},
$S:0}
A.a2M.prototype={
$1(a){var s
a.F8()
s=a.cx
s===$&&A.b()
if(s)this.a.cx=!0},
$S:31}
A.a2N.prototype={
$1(a){a.l6()},
$S:31}
A.a2K.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a.CD(f.c)
if(e.a){B.b.V(f.d)
f.e.V(0)
if(!f.f.a)f.a.a=!0}for(s=e.gHG(),r=s.length,q=f.d,p=f.e,o=f.f,n=f.b,m=f.r,l=0;l<s.length;s.length===r||(0,A.R)(s),++l){k=s[l]
q.push(k)
k.b.push(n)
k.Yb(o.ad)
if(o.b||!(n.c instanceof A.w)){k.y6()
continue}if(k.gjv()==null||m)continue
if(!o.HR(k.gjv()))p.C(0,k)
j=q.length-1
for(i=0;i<j;++i){h=q[i]
g=k.gjv()
g.toString
if(!g.HR(h.gjv())){p.C(0,k)
p.C(0,h)}}}},
$S:31}
A.aF.prototype={
saO(a){var s=this,r=s.t$
if(r!=null)s.is(r)
s.t$=a
if(a!=null)s.hA(a)},
iT(){var s=this.t$
if(s!=null)this.z1(s)},
aT(a){var s=this.t$
if(s!=null)a.$1(s)}}
A.dZ.prototype={$icb:1}
A.ax.prototype={
gqy(){return this.d1$},
D7(a,b){var s,r,q,p=this,o=a.e
o.toString
s=A.n(p).h("ax.1")
s.a(o);++p.d1$
if(b==null){o=o.an$=p.aw$
if(o!=null){o=o.e
o.toString
s.a(o).bL$=a}p.aw$=a
if(p.cN$==null)p.cN$=a}else{r=b.e
r.toString
s.a(r)
q=r.an$
if(q==null){o.bL$=b
p.cN$=r.an$=a}else{o.an$=q
o.bL$=b
o=q.e
o.toString
s.a(o).bL$=r.an$=a}}},
xO(a,b,c){this.hA(b)
this.D7(b,c)},
I(a,b){},
E_(a){var s,r,q,p,o=this,n=a.e
n.toString
s=A.n(o).h("ax.1")
s.a(n)
r=n.bL$
q=n.an$
if(r==null)o.aw$=q
else{p=r.e
p.toString
s.a(p).an$=q}q=n.an$
if(q==null)o.cN$=r
else{q=q.e
q.toString
s.a(q).bL$=r}n.an$=n.bL$=null;--o.d1$},
u(a,b){this.E_(b)
this.is(b)},
rI(a,b){var s=this,r=a.e
r.toString
if(A.n(s).h("ax.1").a(r).bL$==b)return
s.E_(a)
s.D7(a,b)
s.a6()},
iT(){var s,r,q,p=this.aw$
for(s=A.n(this).h("ax.1");p!=null;){r=p.a
q=this.a
if(r<=q){p.a=q+1
p.iT()}r=p.e
r.toString
p=s.a(r).an$}},
aT(a){var s,r,q=this.aw$
for(s=A.n(this).h("ax.1");q!=null;){a.$1(q)
r=q.e
r.toString
q=s.a(r).an$}},
ga_M(a){return this.aw$},
YP(a){var s=a.e
s.toString
return A.n(this).h("ax.1").a(s).bL$},
YN(a){var s=a.e
s.toString
return A.n(this).h("ax.1").a(s).an$}}
A.IM.prototype={
u1(){this.a6()}}
A.acZ.prototype={}
A.a9q.prototype={
I(a,b){B.b.I(this.b,b)},
gHG(){return this.b}}
A.n3.prototype={
gHG(){return A.a([this],t.yj)},
Yb(a){var s
if(a==null||a.a===0)return
s=this.c;(s==null?this.c=A.aE(t.xJ):s).I(0,a)}}
A.Pv.prototype={
ny(a,b,c,d){var s,r,q,p,o,n=this.b,m=B.b.gM(n)
if(m.fr==null){s=B.b.gM(n).gmm()
r=B.b.gM(n)
r=t.O.a(A.I.prototype.gbj.call(r)).as
r.toString
q=$.agz()
q=new A.bZ(null,0,s,B.ad,q.p2,q.e,q.p3,q.f,q.aV,q.p4,q.R8,q.RG,q.rx,q.ry,q.to,q.x2,q.xr,q.y1)
q.aq(r)
m.fr=q}m=B.b.gM(n).fr
m.toString
m.saL(0,B.b.gM(n).gj8())
p=A.a([],t.W)
for(n=this.e,s=n.length,o=0;o<n.length;n.length===s||(0,A.R)(n),++o)n[o].ny(0,b,c,p)
m.j_(0,p,null)
d.push(m)},
gjv(){return null},
y6(){},
I(a,b){B.b.I(this.e,b)}}
A.Qi.prototype={
ny(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(!h.x){s=h.b
B.b.gM(s).fr=null
for(r=h.w,q=r.length,p=A.an(s),o=p.c,p=p.h("eP<1>"),n=0;n<r.length;r.length===q||(0,A.R)(r),++n){m=r[n]
l=new A.eP(s,1,g,p)
l.pj(s,1,g,o)
B.b.I(m.b,l)
m.ny(a+h.f.x2,b,c,d)}return}s=h.b
if(s.length>1){k=new A.ad_()
k.Q7(c,b,s)}else k=g
r=h.e
q=!r
if(q){if(k==null)p=g
else{p=k.d
p===$&&A.b()
if(!p.gO(p)){p=k.c
p===$&&A.b()
p=p.I0()}else p=!0}p=p===!0}else p=!1
if(p)return
p=B.b.gM(s)
if(p.fr==null)p.fr=A.a4I(g,B.b.gM(s).gmm())
j=B.b.gM(s).fr
j.sHU(r)
j.dx=h.c
j.z=a
if(a!==0){h.Ci()
r=h.f
r.shI(0,r.x2+a)}if(k!=null){r=k.d
r===$&&A.b()
j.saL(0,r)
r=k.c
r===$&&A.b()
j.sbg(0,r)
j.x=k.b
j.y=k.a
if(q&&k.e){h.Ci()
h.f.b5(B.ku,!0)}}i=A.a([],t.W)
for(r=h.w,q=r.length,n=0;n<r.length;r.length===q||(0,A.R)(r),++n){m=r[n]
p=j.x
m.ny(0,j.y,p,i)}r=h.f
if(r.a)B.b.gM(s).nn(j,h.f,i)
else j.j_(0,i,r)
d.push(j)},
gjv(){return this.x?null:this.f},
I(a,b){var s,r,q,p,o,n,m=this
for(s=b.length,r=m.w,q=0;q<b.length;b.length===s||(0,A.R)(b),++q){p=b[q]
r.push(p)
if(p.gjv()==null)continue
if(!m.r){m.f=m.f.Zp()
m.r=!0}o=m.f
n=p.gjv()
n.toString
o.jq(n)}},
Ci(){var s,r,q=this
if(!q.r){s=q.f
r=A.ph()
r.a=s.a
r.b=s.b
r.c=s.c
r.d=s.d
r.p2=s.p2
r.y1=s.y1
r.id=s.id
r.p4=s.p4
r.RG=s.RG
r.R8=s.R8
r.rx=s.rx
r.ry=s.ry
r.x1=s.x1
r.to=s.to
r.x2=s.x2
r.xr=s.xr
r.aV=s.aV
r.ad=s.ad
r.y2=s.y2
r.ao=s.ao
r.ar=s.ar
r.al=s.al
r.f=s.f
r.k1=s.k1
r.k3=s.k3
r.k2=s.k2
r.k4=s.k4
r.ok=s.ok
r.p1=s.p1
r.e.I(0,s.e)
r.p3.I(0,s.p3)
q.f=r
q.r=!0}},
y6(){this.x=!0}}
A.ad_.prototype={
Q7(a,b,c){var s,r,q,p,o,n,m=this,l=new A.bg(new Float64Array(16))
l.cR()
m.c=l
m.b=a
m.a=b
for(s=c.length-1;s>0;){r=c[s];--s
q=c[s]
a=r.wQ(q)
if(a!=null){m.b=a
m.a=A.anb(m.a,r.ip(q))}else m.b=A.anb(m.b,r.ip(q))
l=$.aq3()
l.cR()
A.axD(r,q,m.c,l)
m.b=A.anc(m.b,l)
m.a=A.anc(m.a,l)}p=B.b.gM(c)
l=m.b
l=l==null?p.gj8():l.fl(p.gj8())
m.d=l
o=m.a
if(o!=null){n=o.fl(l)
if(n.gO(n)){l=m.d
l=!l.gO(l)}else l=!1
m.e=l
if(!l)m.d=n}}}
A.Pd.prototype={}
A.i3.prototype={
j(a){var s=A.a(["offset="+this.a.j(0)],t.s)
s.push(this.pe(0))
return B.b.b7(s,"; ")}}
A.vA.prototype={
e4(a){if(!(a.e instanceof A.i3))a.e=new A.i3(null,null,B.k)},
st9(a,b){var s=this,r=s.L
switch(r.d.b3(0,b).a){case 0:case 1:return
case 2:r.st9(0,b)
s.J=s.t=null
s.uI(b)
s.ap()
s.aZ()
break
case 3:r.st9(0,b)
s.J=s.t=s.bF=null
s.uI(b)
s.a6()
s.vt()
s.Cb()
s.Fn()
break}},
soD(a){var s=this
if(a==s.aj)return
s.vt()
s.Cb()
s.aj=a
s.Fn()},
Fn(){var s,r,q=this
if(q.aj==null)return
s=q.au
if(s==null)s=q.au=q.RM()
r=q.aj
B.b.Y(s,r.geg(r))},
vt(){var s,r=this.aj
if(r==null||this.au==null)return
s=this.au
s.toString
B.b.Y(s,r.gz3(r))},
RM(){var s,r,q,p,o=this.L.d.Jh(!1),n=A.a([],t.sb)
for(s=o.length,r=0;r<s;){q=B.c.iI(o,$.apo(),r)
if(r!==q){if(q===-1)q=s
p=new A.jr(new A.et(r,q),this,o,$.bv())
p.w=p.CC()
n.push(p)
r=q}++r}return n},
Cb(){var s,r,q,p=this.au
if(p==null)return
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.R)(p),++r){q=p[r]
q.y2$=$.bv()
q.y1$=0}this.au=null},
a6(){var s=this.au
if(s!=null)B.b.Y(s,new A.a2U())
this.MJ()},
m(){var s=this
s.vt()
s.au=null
s.L.m()
s.hs()},
uI(a){this.aW=A.a([],t.e9)
a.aT(new A.a2R(this))},
szc(a,b){var s=this.L
if(s.f===b)return
s.szc(0,b)
this.ap()},
sbB(a){var s=this.L
if(s.r===a)return
s.sbB(a)
this.a6()},
sKL(a){if(this.bv===a)return
this.bv=a
this.a6()},
sa2g(a,b){var s,r=this
if(r.c2===b)return
r.c2=b
s=b===B.bd?"\u2026":null
r.L.sa_q(s)
r.a6()},
szd(a){var s=this.L
if(s.w===a)return
s.szd(a)
this.bF=null
this.a6()},
sy9(a){var s=this.L
if(s.z==a)return
s.sy9(a)
this.bF=null
this.a6()},
sy4(a,b){var s=this.L
if(J.f(s.y,b))return
s.sy4(0,b)
this.bF=null
this.a6()},
sKT(a){return},
sze(a){var s=this.L
if(s.as===a)return
s.sze(a)
this.bF=null
this.a6()},
sJc(a){return},
sKl(a){var s,r=this
if(J.f(r.c8,a))return
r.c8=a
s=r.au
s=s==null?null:B.b.js(s,new A.a2W())
if(s===!0)r.ap()},
pw(a){var s,r=this,q=r.zP(a,B.ad)
r.i9(t.k.a(A.w.prototype.gZ.call(r)))
s=r.L
s.BX(a,B.ad)
s=s.db
s===$&&A.b()
s=s.b
return q.W(0,new A.y(0,s==null?0:s))},
ei(a){this.i9(t.k.a(A.w.prototype.gZ.call(this)))
return this.L.ei(B.F)},
iG(a){return!0},
cB(a,b){var s,r,q,p,o,n,m,l,k,j={},i=this.L,h=i.a.j5(b),g=i.d.K3(h)
if(g!=null&&!0){a.C(0,new A.hy(t.kZ.a(g),t.Cq))
s=!0}else s=!1
r=j.a=this.aw$
q=A.n(this).h("ax.1")
p=t.lO
o=0
while(!0){if(!(r!=null&&o<i.ax.length))break
r=r.e
r.toString
p.a(r)
n=r.a
m=new Float64Array(16)
l=new A.bg(m)
l.cR()
m[14]=0
m[13]=n.b
m[12]=n.a
n=r.e
l.me(0,n,n,n)
if(a.wa(new A.a2T(j,b,r),b,l))return!0
r=j.a.e
r.toString
k=q.a(r).an$
j.a=k;++o
r=k}return s},
Dg(a,b){var s=this.bv||this.c2===B.bd?a:1/0
this.L.xZ(s,b)},
u1(){var s=this,r=$.bP,q=r.CW$
switch(q.a){case 0:case 4:if(s.fj)return
s.fj=!0
r.p8(new A.a2X(s,q))
break
case 1:case 2:case 3:s.AV()
s.L.a6()
break}},
i9(a){this.L.tD(this.dW)
this.Dg(a.b,a.a)},
De(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.d1$
if(i===0)return A.a([],t.aE)
s=j.aw$
r=A.b_(i,B.SC,!1,t.cP)
q=new A.aS(0,a.b,0,1/0).dI(0,j.L.w)
for(i=A.n(j).h("ax.1"),p=!b,o=0;s!=null;){if(p){s.ci(q,!0)
n=s.k3
n.toString
m=j.aW
m===$&&A.b()
switch(m[o].gdR()){case B.zH:l=s.JL(j.aW[o].gno())
break
case B.zI:case B.zJ:case B.ki:case B.zL:case B.zK:l=null
break
default:l=null}k=n}else{k=s.fA(q)
l=null}n=j.aW
n===$&&A.b()
r[o]=new A.m8(k,n[o].gdR(),l,j.aW[o].gno())
n=s.e
n.toString
s=i.a(n).an$;++o}return r},
U7(a){return this.De(a,!1)},
WF(){var s,r,q=this.aw$,p=t.lO,o=this.L,n=A.n(this).h("ax.1"),m=0
while(!0){if(!(q!=null&&m<o.ax.length))break
s=q.e
s.toString
p.a(s)
r=o.ax[m]
s.a=new A.y(r.a,r.b)
s.e=o.ay[m]
q=n.a(s).an$;++m}},
PL(){var s,r,q=this.aW
q===$&&A.b()
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.R)(q),++r)switch(q[r].gdR()){case B.zH:case B.zI:case B.zJ:return!1
case B.zK:case B.zL:case B.ki:continue}return!0},
bZ(a){var s,r,q=this
if(!q.PL())return B.O
s=q.L
s.tD(q.De(a,!0))
q.Dg(a.b,a.a)
r=s.gbC(s)
s=s.a
return a.bl(new A.a5(r,Math.ceil(s.gcp(s))))},
bx(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=t.k.a(A.w.prototype.gZ.call(i))
i.dW=i.U7(g)
i.i9(g)
i.WF()
s=i.L
r=s.gbC(s)
q=s.a
q=Math.ceil(q.gcp(q))
p=s.a.ga_e()
o=i.k3=g.bl(new A.a5(r,q))
n=o.b<q||p
m=o.a<r
if(m||n)switch(i.c2.a){case 3:i.c3=!1
i.bF=null
break
case 0:case 2:i.c3=!0
i.bF=null
break
case 1:i.c3=!0
r=A.a7W(h,s.d.a,"\u2026")
q=s.r
q.toString
o=s.w
l=A.a7U(h,s.y,h,h,r,B.bu,q,h,o,B.aL)
l.a1B()
if(m){switch(s.r.a){case 0:k=l.gbC(l)
j=0
break
case 1:j=i.k3.a
k=j-l.gbC(l)
break
default:k=h
j=k}i.bF=A.ahx(new A.y(k,0),new A.y(j,0),A.a([B.j,B.lZ],t.bk),h,B.f8,h)}else{j=i.k3.b
s=l.a
i.bF=A.ahx(new A.y(0,j-Math.ceil(s.gcp(s))/2),new A.y(0,j),A.a([B.j,B.lZ],t.bk),h,B.f8,h)}l.m()
break}else{i.c3=!1
i.bF=null}},
aG(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e={}
f.i9(t.k.a(A.w.prototype.gZ.call(f)))
if(f.c3){s=f.k3
r=b.a
q=b.b
p=new A.E(r,q,r+s.a,q+s.b)
if(f.bF!=null)a.gby(a).ex(p,$.av().bd())
else a.gby(a).bR(0)
a.gby(a).nw(p)}s=f.L
s.aG(a.gby(a),b)
r=e.a=f.aw$
q=t.lO
o=b.a
n=b.b
m=A.n(f).h("ax.1")
l=0
while(!0){if(!(r!=null&&l<s.ax.length))break
r=r.e
r.toString
q.a(r)
k=r.e
k.toString
j=f.cx
j===$&&A.b()
r=r.a
a.a2z(j,new A.y(o+r.a,n+r.b),A.uF(k,k,k),new A.a2V(e))
k=e.a.e
k.toString
i=m.a(k).an$
e.a=i;++l
r=i}if(f.c3){if(f.bF!=null){a.gby(a).b1(0,o,n)
h=$.av().bd()
h.sYv(B.BF)
h.sAf(f.bF)
s=a.gby(a)
r=f.k3
s.d0(new A.E(0,0,0+r.a,0+r.b),h)}a.gby(a).bA(0)}s=f.au
if(s!=null)for(r=s.length,g=0;g<s.length;s.length===r||(0,A.R)(s),++g)s[g].aG(a,b)
f.MQ(a,b)},
zP(a,b){var s
this.i9(t.k.a(A.w.prototype.gZ.call(this)))
s=this.L
s.BX(a,b)
s=s.db
s===$&&A.b()
return s.a},
zF(a){this.i9(t.k.a(A.w.prototype.gZ.call(this)))
return this.L.a.tj(a.a,a.b,B.lc,B.fr)},
j5(a){this.i9(t.k.a(A.w.prototype.gZ.call(this)))
return this.L.a.j5(a)},
mc(a){this.i9(t.k.a(A.w.prototype.gZ.call(this)))
return this.L.a.mc(a)},
ek(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.fJ(a)
s=d.L
r=s.d
r.toString
q=A.a([],t.lF)
r.Zc(q)
d.dX=q
if(B.b.js(q,new A.a2S()))a.a=a.b=!0
else{r=d.t
if(r==null){p=new A.cd("")
o=A.a([],t.ve)
for(r=d.dX,n=r.length,m=0,l=0,k="";l<r.length;r.length===n||(0,A.R)(r),++l){j=r[l]
i=j.b
if(i==null)i=j.a
for(k=j.f,h=k.length,g=0;g<k.length;k.length===h||(0,A.R)(k),++g){f=k[g]
e=f.a
o.push(f.Gf(new A.et(m+e.a,m+e.b)))}k=p.a+=i
m+=i.length}r=d.t=new A.cl(k.charCodeAt(0)==0?k:k,o)}a.p4=r
a.d=!0
s=s.r
s.toString
a.y1=s}},
nn(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=A.a([],t.W),b0=a7.L,b1=b0.r
b1.toString
s=A.iS(a8,a8,a8,t.qI,t.ju)
r=a7.J
if(r==null){r=a7.dX
r.toString
r=a7.J=A.azS(r)}for(q=r.length,p=t.k,o=b1,n=0,m=0,l=0;l<r.length;r.length===q||(0,A.R)(r),++l,m=j){k=r[l]
b1=k.a
j=m+b1.length
i=m<j
h=i?m:j
i=i?j:m
g=p.a(A.w.prototype.gZ.call(a7))
b0.tD(a7.dW)
f=g.b
f=a7.bv||a7.c2===B.bd?f:1/0
b0.xZ(f,g.a)
e=b0.a.tj(h,i,B.lc,B.fr)
if(e.length===0)continue
i=B.b.gM(e)
d=new A.E(i.a,i.b,i.c,i.d)
c=B.b.gM(e).e
for(i=A.an(e),h=new A.eP(e,1,a8,i.h("eP<1>")),h.pj(e,1,a8,i.c),h=new A.cR(h,h.gp(h)),i=A.n(h).c;h.q();){g=h.d
if(g==null)g=i.a(g)
d=d.ls(new A.E(g.a,g.b,g.c,g.d))
c=g.e}i=d.a
h=Math.max(0,i)
g=d.b
f=Math.max(0,g)
i=Math.min(d.c-i,p.a(A.w.prototype.gZ.call(a7)).b)
g=Math.min(d.d-g,p.a(A.w.prototype.gZ.call(a7)).d)
b=Math.floor(h)-4
a=Math.floor(f)-4
i=Math.ceil(h+i)+4
g=Math.ceil(f+g)+4
a0=new A.E(b,a,i,g)
a1=A.ph()
a2=n+1
a1.id=new A.vb(n,a8)
a1.d=!0
a1.y1=o
f=k.b
b1=f==null?b1:f
a1.p4=new A.cl(b1,k.f)
b1=b2.y
if(b1!=null){a3=b1.fl(a0)
if(a3.a>=a3.c||a3.b>=a3.d)b1=!(b>=i||a>=g)
else b1=!1
a1.b5(B.ku,b1)}a4=A.bd("newChild")
b1=a7.dc
i=b1==null?a8:b1.a!==0
if(i===!0){b1.toString
i=new A.b0(b1,A.n(b1).h("b0<1>"))
a5=i.ga4(i)
if(!a5.q())A.U(A.bA())
b1=b1.u(0,a5.gF(a5))
b1.toString
if(a4.b!==a4)A.U(A.a_E(a4.a))
a4.b=b1}else{a6=new A.ji()
b1=A.a4I(a6,a7.Qp(a6))
if(a4.b!==a4)A.U(A.a_E(a4.a))
a4.b=b1}if(b1===a4)A.U(A.fS(a4.a))
J.arH(b1,a1)
if(!b1.w.k(0,a0)){b1.w=a0
b1.hy()}b1=a4.b
if(b1===a4)A.U(A.fS(a4.a))
i=b1.d
i.toString
s.l(0,i,b1)
b1=a4.b
if(b1===a4)A.U(A.fS(a4.a))
a9.push(b1)
n=a2
o=c}a7.dc=s
b2.j_(0,a9,b3)},
Qp(a){return new A.a2Q(this,a)},
l6(){this.tW()
this.dc=null}}
A.a2U.prototype={
$1(a){return a.x=null},
$S:229}
A.a2R.prototype={
$1(a){return!0},
$S:49}
A.a2W.prototype={
$1(a){var s=a.w
s===$&&A.b()
return s.c!==B.cx},
$S:230}
A.a2T.prototype={
$2(a,b){return this.a.a.bM(a,b)},
$S:15}
A.a2X.prototype={
$1(a){var s=this.a
s.fj=!1
if(s.b!=null){s.AV()
s.L.a6()}},
$S:2}
A.a2V.prototype={
$2(a,b){var s=this.a.a
s.toString
a.eu(s,b)},
$S:10}
A.a2S.prototype={
$1(a){return!1},
$S:231}
A.a2Q.prototype={
$0(){var s=this.a,r=s.dc.i(0,this.b)
r.toString
s.ki(s,r.w)},
$S:0}
A.jr.prototype={
gn(a){var s=this.w
s===$&&A.b()
return s},
Vh(){var s=this,r=s.CC(),q=s.w
q===$&&A.b()
if(q.k(0,r))return
s.w=r
s.aB()},
CC(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f==null||g.e==null)return B.Td
s=f.a
r=g.e.a
f=g.b
q=f.pw(new A.bl(s,B.I))
p=s===r?q:f.pw(new A.bl(r,B.I))
f=f.L
o=f.r
o.toString
n=s>r!==(B.aK===o)
m=A.uG(g.gf5().a,g.gf5().b,0)
m.la(m)
o=A.co(m,q)
l=f.gt_()
k=n?B.AW:B.AV
j=A.co(m,p)
f=f.gt_()
i=n?B.AV:B.AW
h=g.d.a===g.e.a?B.Tf:B.kt
return new A.kp(new A.mu(o,l,k),new A.mu(j,f,i),h,!0)},
qT(a){var s=this,r=A.bd("result"),q=s.d,p=s.e,o=a.a
switch(o.a){case 0:case 1:r.sbU(s.XB(t.ib.a(a).b,o===B.dl))
break
case 2:s.e=s.d=null
r.sbU(B.cw)
break
case 3:o=s.a
s.d=new A.bl(o.a,B.I)
s.e=new A.bl(o.b,B.P)
r.sbU(B.cw)
break
case 4:r.sbU(s.Tm(t.k2.a(a).gzW()))
break
case 5:t.uQ.a(a)
r.sbU(s.SG(a.gHb(a),a.gfo(),a.ga3U()))
break
case 6:t.sQ.a(a)
r.sbU(s.Si(a.gxb(a),a.gfo(),a.gGC(a)))
break}if(!J.f(q,s.d)||!J.f(p,s.e)){s.b.ap()
s.Vh()}return r.aC()},
XB(a,b){var s,r,q,p,o,n,m=this
if(b)m.e=null
else m.d=null
s=m.b
r=s.bs(0,null)
r.la(r)
q=A.co(r,a)
p=m.gf5()
if(p.gO(p))return A.amo(m.gf5(),q)
p=m.gf5()
o=s.L.r
o.toString
n=m.pl(s.j5(A.aw5(p,q,o)))
if(b)m.e=n
else m.d=n
s=n.a
p=m.a
if(s===p.b)return B.b0
if(s===p.a)return B.b1
return A.amo(m.gf5(),q)},
pl(a){var s,r=a.a,q=this.a,p=q.b
if(r<=p)s=r===p&&a.b===B.I
else s=!0
if(s)return new A.bl(p,B.P)
q=q.a
if(r<q)return new A.bl(q,B.I)
return a},
Tm(a){var s,r,q,p,o=this,n=o.b,m=n.j5(n.kf(a))
if(o.VC(m))return B.ao
s=n.mc(m)
r=A.bd("start")
q=A.bd("end")
n=m.a
p=s.b
if(n>=p)r.b=q.b=new A.bl(n,B.I)
else{r.b=new A.bl(s.a,B.I)
q.b=new A.bl(p,B.P)}o.d=r.aC()
o.e=q.aC()
return B.ao},
Si(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.bs(0,null)
if(j.la(j)===0)switch(c){case B.eV:case B.dn:return B.b1
case B.eW:case B.dm:return B.b0}s=A.co(j,new A.y(a,0)).a
switch(c){case B.eV:case B.eW:if(b){k=l.e
k.toString
r=k}else{k=l.d
k.toString
r=k}q=l.TI(r,!1,s)
p=q.a
o=q.b
break
case B.dm:case B.dn:n=l.e
if(n==null){n=new A.bl(l.a.b,B.P)
l.e=n
r=n}else r=n
n=l.d
if(n==null){l.d=r
m=r}else m=n
p=k.j5(new A.y(s,k.pw(b?r:m).b-k.L.gt_()/2))
o=B.ao
break
default:p=null
o=null}if(b)l.e=p
else l.d=p
return o},
SG(a,b,c){var s,r,q,p,o,n,m=this,l=m.e
if(l==null){l=m.a
l=a?new A.bl(l.a,B.I):new A.bl(l.b,B.P)
m.e=l
s=l}else s=l
l=m.d
if(l==null){m.d=s
r=s}else r=l
s=b?s:r
if(a&&s.a===m.a.b)return B.b0
l=!a
if(l&&s.a===m.a.a)return B.b1
switch(c){case B.Uz:l=m.a
q=m.pv(new A.Un(B.c.a3(m.c,l.a,l.b)),s,a)
p=B.ao
break
case B.UA:l=m.a
q=m.pv(new A.MI(new A.a8A(m),new A.a8y(B.c.a3(m.c,l.a,l.b))),s,a)
p=B.ao
break
case B.UB:q=m.pv(new A.a_I(m),s,a)
p=B.ao
break
case B.UC:o=m.a
n=o.a
o=o.b
q=m.pv(new A.Vv(B.c.a3(m.c,n,o)),s,a)
if(a&&q.a===o)p=B.b0
else p=l&&q.a===n?B.b1:B.ao
break
default:p=null
q=null}if(b)m.e=q
else m.d=q
return p},
pv(a,b,c){if(c)return this.pl(a.fC(B.SK.fC(b)))
return this.pl(a.fB(B.SJ.fB(b)))},
TI(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.L,i=j.fr
if(i==null)i=j.fr=j.a.Zb()
s=k.zP(a,B.ad)
j=i.length
r=j-1
for(q=s.b,p=0;p<i.length;i.length===j||(0,A.R)(i),++p){o=i[p]
if(o.gno()>q){r=J.arh(o)
break}}if(b&&r===i.length-1)n=new A.bl(l.a.b,B.P)
else if(!b&&r===0)n=new A.bl(l.a.a,B.I)
else n=l.pl(k.j5(new A.y(c,i[b?r+1:r-1].gno())))
k=n.a
j=l.a
if(k===j.a)m=B.b1
else m=k===j.b?B.b0:B.ao
return new A.b5(n,m,t.nx)},
VC(a){var s,r,q,p,o=this
if(o.d==null||o.e==null)return!1
s=A.bd("currentStart")
r=A.bd("currentEnd")
q=o.d
q.toString
p=o.e
p.toString
if(A.aiE(q,p)>0){s.b=q
r.b=p}else{s.b=p
r.b=q}return A.aiE(s.aC(),a)>=0&&A.aiE(r.aC(),a)<=0},
bs(a,b){var s=A.uG(this.gf5().a,this.gf5().b,0)
s.es(0,this.b.bs(0,b))
return s},
hh(a,b){if(this.b.b==null)return},
gf5(){var s,r,q,p,o,n,m=this,l=m.x
if(l==null){l=m.b
s=m.a
r=s.a
q=l.zF(A.a7V(B.I,r,s.b,!1))
if(q.length!==0){l=B.b.gM(q)
p=new A.E(l.a,l.b,l.c,l.d)
for(o=1;o<q.length;++o){l=q[o]
p=p.ls(new A.E(l.a,l.b,l.c,l.d))}m.x=p
l=p}else{n=l.pw(new A.bl(r,B.I))
l=A.am4(n,new A.y(n.a+0,n.b+-l.L.gt_()))
m.x=l}}return l},
gct(a){var s=this.gf5()
return new A.a5(s.c-s.a,s.d-s.b)},
aG(a,b){var s,r,q,p,o,n=this,m=n.d
if(m==null||n.e==null)return
s=n.b
if(s.c8!=null){r=A.a7V(B.I,m.a,n.e.a,!1)
q=$.av().bd()
q.sdk(0,B.cl)
m=s.c8
m.toString
q.sai(0,m)
for(m=s.zF(r),s=m.length,p=0;p<m.length;m.length===s||(0,A.R)(m),++p){o=m[p]
a.gby(a).d0(new A.E(o.a,o.b,o.c,o.d).d6(b),q)}}A.uG(n.gf5().a,n.gf5().b,0)},
zM(a){var s=this.b.L.a.JR(a),r=this.a,q=r.a
r=r.b
return A.a7V(B.I,B.f.hB(s.a,q,r),B.f.hB(s.b,q,r),!1)},
$iad:1}
A.yx.prototype={
aq(a){var s,r,q
this.e8(a)
s=this.aw$
for(r=t.lO;s!=null;){s.aq(a)
q=s.e
q.toString
s=r.a(q).an$}},
ah(a){var s,r,q
this.dl(0)
s=this.aw$
for(r=t.lO;s!=null;){s.ah(0)
q=s.e
q.toString
s=r.a(q).an$}}}
A.Pe.prototype={}
A.Pf.prototype={
aq(a){this.NT(a)
$.eK.xk$.a.C(0,this.gB6())},
ah(a){$.eK.xk$.a.u(0,this.gB6())
this.NU(0)}}
A.RI.prototype={}
A.RJ.prototype={}
A.J9.prototype={
sa2f(a){if(a===this.L)return
this.L=a
this.ap()},
sa2E(a){if(a===this.t)return
this.t=a
this.ap()},
sYL(a){return},
sYK(a){return},
gja(){return!0},
gl3(){return!0},
gU1(){var s=this.L,r=(s|1)>>>0>0||(s|2)>>>0>0?80:0
return(s|4)>>>0>0||(s|8)>>>0>0?r+80:r},
bZ(a){return a.bl(new A.a5(1/0,this.gU1()))},
aG(a,b){var s=b.a,r=b.b,q=this.k3
q=new A.Ii(new A.E(s,r,s+q.a,r+q.b),this.L,this.t,!1,!1,A.u(t.S,t.M),A.au())
q.ht()
a.ms()
a.wg(q)}}
A.Je.prototype={}
A.ep.prototype={
e4(a){if(!(a.e instanceof A.cb))a.e=new A.cb()},
bZ(a){var s=this.t$
if(s!=null)return s.fA(a)
return this.nz(a)},
bx(){var s=this,r=s.t$,q=t.k
if(r!=null){r.ci(q.a(A.w.prototype.gZ.call(s)),!0)
r=s.t$.k3
r.toString
s.k3=r}else s.k3=s.nz(q.a(A.w.prototype.gZ.call(s)))},
nz(a){return new A.a5(A.F(0,a.a,a.b),A.F(0,a.c,a.d))},
cB(a,b){var s=this.t$
s=s==null?null:s.bM(a,b)
return s===!0},
cZ(a,b){},
aG(a,b){var s=this.t$
if(s!=null)a.eu(s,b)}}
A.oh.prototype={
G(){return"HitTestBehavior."+this.b}}
A.vB.prototype={
bM(a,b){var s,r=this
if(r.k3.B(0,b)){s=r.cB(a,b)||r.A===B.at
if(s||r.A===B.cR)a.C(0,new A.nG(b,r))}else s=!1
return s},
iG(a){return this.A===B.at}}
A.IU.prototype={
sFI(a){if(this.A.k(0,a))return
this.A=a
this.a6()},
bx(){var s=this,r=t.k.a(A.w.prototype.gZ.call(s)),q=s.t$,p=s.A
if(q!=null){q.ci(p.nV(r),!0)
q=s.t$.k3
q.toString
s.k3=q}else s.k3=p.nV(r).bl(B.O)},
bZ(a){var s=this.t$,r=this.A
if(s!=null)return s.fA(r.nV(a))
else return r.nV(a).bl(B.O)}}
A.J3.prototype={
sa1V(a,b){if(this.A===b)return
this.A=b
this.a6()},
sa1S(a,b){if(this.S===b)return
this.S=b
this.a6()},
Dh(a){var s,r,q=a.a,p=a.b
p=p<1/0?p:A.F(this.A,q,p)
s=a.c
r=a.d
return new A.aS(q,p,s,r<1/0?r:A.F(this.S,s,r))},
DS(a,b){var s=this.t$
if(s!=null)return a.bl(b.$2(s,this.Dh(a)))
return this.Dh(a).bl(B.O)},
bZ(a){return this.DS(a,A.afR())},
bx(){this.k3=this.DS(t.k.a(A.w.prototype.gZ.call(this)),A.afS())}}
A.IQ.prototype={
sYn(a,b){if(this.A===b)return
this.A=b
this.a6()},
Bw(a){var s,r,q,p,o=a.a,n=a.b
if(o>=n&&a.c>=a.d)return new A.a5(A.F(0,o,n),A.F(0,a.c,a.d))
s=this.A
if(isFinite(n)){r=n/s
q=n}else{r=a.d
q=r*s}if(q>n)r=n/s
else n=q
p=a.d
if(r>p){n=p*s
r=p}if(n<o)r=o/s
else o=n
p=a.c
if(r<p){o=p*s
r=p}return a.bl(new A.a5(o,r))},
bZ(a){return this.Bw(a)},
bx(){var s,r=this,q=r.Bw(t.k.a(A.w.prototype.gZ.call(r)))
r.k3=q
s=r.t$
if(s!=null)s.h9(A.rk(q))}}
A.J7.prototype={
gl3(){return this.t$!=null&&this.A>0},
sjU(a,b){var s,r,q,p,o=this
if(o.S===b)return
s=o.t$!=null
r=s&&o.A>0
q=o.A
o.S=b
p=B.d.b0(A.Sp(b,0,1)*255)
o.A=p
if(r!==(s&&p>0))o.jQ()
o.ap()
if(q!==0!==(o.A!==0)&&!0)o.aZ()},
sqo(a){return},
jY(a){return this.A>0},
aG(a,b){var s,r,q=this
if(q.t$==null)return
s=q.A
if(s===0){q.ch.saQ(0,null)
return}r=q.ch
r.saQ(0,a.yT(b,s,A.ep.prototype.gjV.call(q),t.Ex.a(r.a)))},
eX(a){var s,r=this.t$
if(r!=null)s=this.A!==0||!1
else s=!1
if(s){r.toString
a.$1(r)}}}
A.vw.prototype={
gdd(){if(this.t$!=null){var s=this.xo$
s.toString}else s=!1
return s},
oP(a){var s=a==null?A.alP():a
s.sFK(0,this.lw$)
return s},
sjU(a,b){var s=this,r=s.lx$
if(r===b)return
if(s.b!=null&&r!=null)r.H(0,s.gqd())
s.lx$=b
if(s.b!=null)b.U(0,s.gqd())
s.vX()},
sqo(a){if(!1===this.xp$)return
this.xp$=!1
this.aZ()},
vX(){var s,r=this,q=r.lw$,p=r.lx$
p=r.lw$=B.d.b0(A.Sp(p.gn(p),0,1)*255)
if(q!==p){s=r.xo$
p=p>0
r.xo$=p
if(r.t$!=null&&s!==p)r.jQ()
r.a1O()
if(q===0||r.lw$===0)r.aZ()}},
jY(a){var s=this.lx$
return s.gn(s)>0},
eX(a){var s,r=this.t$
if(r!=null)if(this.lw$===0){s=this.xp$
s.toString}else s=!0
else s=!1
if(s){r.toString
a.$1(r)}}}
A.IP.prototype={}
A.rX.prototype={
U(a,b){return null},
H(a,b){return null},
j(a){return"CustomClipper"}}
A.mw.prototype={
zH(a){return this.b.f_(new A.E(0,0,0+a.a,0+a.b),this.c)},
Ai(a){if(A.A(a)!==B.Yx)return!0
t.qm.a(a)
return!a.b.k(0,this.b)||a.c!=this.c}}
A.qt.prototype={
snx(a){var s,r=this,q=r.A
if(q==a)return
r.A=a
s=a==null
if(s||q==null||A.A(a)!==A.A(q)||a.Ai(q))r.pJ()
if(r.b!=null){if(q!=null)q.H(0,r.gpI())
if(!s)a.U(0,r.gpI())}},
aq(a){var s
this.mz(a)
s=this.A
if(s!=null)s.U(0,this.gpI())},
ah(a){var s=this.A
if(s!=null)s.H(0,this.gpI())
this.kt(0)},
pJ(){this.S=null
this.ap()
this.aZ()},
sqA(a){if(a!==this.az){this.az=a
this.ap()}},
bx(){var s,r=this,q=r.k3
q=q!=null?q:null
r.tZ()
s=r.k3
s.toString
if(!J.f(q,s))r.S=null},
ik(){var s,r,q=this
if(q.S==null){s=q.A
if(s==null)s=null
else{r=q.k3
r.toString
r=s.zH(r)
s=r}q.S=s==null?q.gpn():s}},
ip(a){var s,r=this
switch(r.az.a){case 0:return null
case 1:case 2:case 3:if(r.A==null)s=null
else{s=r.k3
s=new A.E(0,0,0+s.a,0+s.b)}if(s==null){s=r.k3
s=new A.E(0,0,0+s.a,0+s.b)}return s}},
m(){this.c9=null
this.hs()}}
A.IT.prototype={
gpn(){var s=this.k3
return new A.E(0,0,0+s.a,0+s.b)},
bM(a,b){var s=this
if(s.A!=null){s.ik()
if(!s.S.B(0,b))return!1}return s.i3(a,b)},
aG(a,b){var s,r,q=this,p=q.t$
if(p!=null){s=q.ch
if(q.az!==B.l){q.ik()
p=q.cx
p===$&&A.b()
r=q.S
r.toString
s.saQ(0,a.k_(p,b,r,A.ep.prototype.gjV.call(q),q.az,t.iM.a(s.a)))}else{a.eu(p,b)
s.saQ(0,null)}}else q.ch.saQ(0,null)}}
A.IS.prototype={
gpn(){var s=$.av().cJ(),r=this.k3
s.nf(new A.E(0,0,0+r.a,0+r.b))
return s},
bM(a,b){var s=this
if(s.A!=null){s.ik()
if(!s.S.B(0,b))return!1}return s.i3(a,b)},
aG(a,b){var s,r,q,p,o=this,n=o.t$
if(n!=null){s=o.ch
if(o.az!==B.l){o.ik()
n=o.cx
n===$&&A.b()
r=o.k3
q=r.a
r=r.b
p=o.S
p.toString
s.saQ(0,a.IG(n,b,new A.E(0,0,0+q,0+r),p,A.ep.prototype.gjV.call(o),o.az,t.n0.a(s.a)))}else{a.eu(n,b)
s.saQ(0,null)}}else o.ch.saQ(0,null)}}
A.yy.prototype={
shI(a,b){if(this.aU===b)return
this.aU=b
this.ap()},
sfF(a,b){if(this.bu.k(0,b))return
this.bu=b
this.ap()},
sai(a,b){if(this.ds.k(0,b))return
this.ds=b
this.ap()},
ek(a){this.fJ(a)
a.shI(0,this.aU)}}
A.Ja.prototype={
scS(a,b){if(this.xm===b)return
this.xm=b
this.pJ()},
sYx(a,b){if(J.f(this.xn,b))return
this.xn=b
this.pJ()},
gpn(){var s,r,q=this.k3,p=0+q.a
q=0+q.b
switch(this.xm.a){case 0:s=this.xn
if(s==null)s=B.ax
return s.d5(new A.E(0,0,p,q))
case 1:s=(p-0)/2
r=(q-0)/2
return new A.hT(0,0,p,q,s,r,s,r,s,r,s,r,s===r)}},
bM(a,b){var s=this
if(s.A!=null){s.ik()
if(!s.S.B(0,b))return!1}return s.i3(a,b)},
aG(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.t$==null){i.ch.saQ(0,null)
return}i.ik()
s=i.S.d6(b)
r=$.av()
q=r.cJ()
q.hz(s)
p=a.gby(a)
if(i.aU!==0&&!0){p.d0(new A.E(s.a,s.b,s.c,s.d).dw(20),$.ajR())
o=i.bu
n=i.aU
m=i.ds
p.ln(q,o,n,(m.gn(m)>>>24&255)!==255)}l=i.az===B.c_
if(!l){r=r.bd()
r.sai(0,i.ds)
p.dq(s,r)}r=i.cx
r===$&&A.b()
o=i.k3
n=o.a
o=o.b
m=i.S
m.toString
k=i.ch
j=t.bG.a(k.a)
k.saQ(0,a.a2u(r,b,new A.E(0,0,0+n,0+o),m,new A.a2Y(i,l),i.az,j))}}
A.a2Y.prototype={
$2(a,b){var s,r
if(this.b){s=a.gby(a)
r=$.av().bd()
r.sai(0,this.a.ds)
s.ll(r)}this.a.fK(a,b)},
$S:10}
A.Jb.prototype={
gpn(){var s=$.av().cJ(),r=this.k3
s.nf(new A.E(0,0,0+r.a,0+r.b))
return s},
bM(a,b){var s=this
if(s.A!=null){s.ik()
if(!s.S.B(0,b))return!1}return s.i3(a,b)},
aG(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(j.t$==null){j.ch.saQ(0,null)
return}j.ik()
s=j.k3
r=b.a
q=b.b
p=s.a
s=s.b
o=j.S.d6(b)
n=a.gby(a)
if(j.aU!==0&&!0){n.d0(new A.E(r,q,r+p,q+s).dw(20),$.ajR())
s=j.bu
r=j.aU
q=j.ds
n.ln(o,s,r,(q.gn(q)>>>24&255)!==255)}m=j.az===B.c_
if(!m){s=$.av().bd()
s.sai(0,j.ds)
n.hH(o,s)}s=j.cx
s===$&&A.b()
r=j.k3
q=r.a
r=r.b
p=j.S
p.toString
l=j.ch
k=t.n0.a(l.a)
l.saQ(0,a.IG(s,b,new A.E(0,0,0+q,0+r),p,new A.a2Z(j,m),j.az,k))}}
A.a2Z.prototype={
$2(a,b){var s,r
if(this.b){s=a.gby(a)
r=$.av().bd()
r.sai(0,this.a.ds)
s.ll(r)}this.a.fK(a,b)},
$S:10}
A.t1.prototype={
G(){return"DecorationPosition."+this.b}}
A.IY.prototype={
sa_0(a){var s,r=this
if(a.k(0,r.S))return
s=r.A
if(s!=null)s.m()
r.A=null
r.S=a
r.ap()},
sbq(a,b){if(b===this.az)return
this.az=b
this.ap()},
swx(a){if(a.k(0,this.bo))return
this.bo=a
this.ap()},
ah(a){var s=this,r=s.A
if(r!=null)r.m()
s.A=null
s.kt(0)
s.ap()},
iG(a){var s=this.S,r=this.k3
r.toString
return s.Hu(r,a,this.bo.d)},
aG(a,b){var s,r,q,p=this,o=p.A
if(o==null)o=p.A=p.S.qF(p.gdB())
s=p.bo
r=p.k3
r.toString
q=new A.ol(s.a,s.b,s.c,s.d,r,s.f)
if(p.az===B.fO){o.ov(a.gby(a),b,q)
if(p.S.gxT())a.Ab()}p.fK(a,b)
if(p.az===B.Ei){o=p.A
o.toString
o.ov(a.gby(a),b,q)
if(p.S.gxT())a.Ab()}}}
A.Jk.prototype={
sIs(a,b){return},
sdR(a){var s=this
if(J.f(s.S,a))return
s.S=a
s.ap()
s.aZ()},
sbB(a){var s=this
if(s.az==a)return
s.az=a
s.ap()
s.aZ()},
gl3(){return!1},
sbg(a,b){var s,r=this
if(J.f(r.c9,b))return
s=new A.bg(new Float64Array(16))
s.cd(b)
r.c9=s
r.ap()
r.aZ()},
slF(a){return},
guD(){var s,r,q=this,p=q.S,o=p==null?null:p.X(q.az)
if(o==null)return q.c9
s=new A.bg(new Float64Array(16))
s.cR()
p=q.k3
p.toString
r=o.Yh(p)
s.b1(0,r.a,r.b)
p=q.c9
p.toString
s.es(0,p)
s.b1(0,-r.a,-r.b)
return s},
bM(a,b){return this.cB(a,b)},
cB(a,b){var s=this.bo?this.guD():null
return a.wa(new A.a36(this),b,s)},
aG(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
if(a.t$!=null){s=a.guD()
s.toString
r=A.a06(s)
if(r==null){q=s.a
p=q[0]
o=q[5]
n=q[1]
m=q[4]
l=p*o-n*m
k=q[6]
j=q[2]
i=p*k-j*m
h=q[7]
g=q[3]
f=p*h-g*m
e=n*k-j*o
d=n*h-g*o
c=j*h-g*k
k=q[8]
g=q[9]
h=q[10]
j=q[11]
b=-(g*c-h*d+j*e)*q[12]+(k*c-h*f+j*i)*q[13]-(k*d-g*f+j*l)*q[14]+(k*e-g*i+h*l)*q[15]
if(b===0||!isFinite(b)){a.ch.saQ(0,null)
return}q=a.cx
q===$&&A.b()
p=A.ep.prototype.gjV.call(a)
o=a.ch
n=o.a
o.saQ(0,a0.oA(q,a1,s,p,n instanceof A.kx?n:null))}else{a.fK(a0,a1.W(0,r))
a.ch.saQ(0,null)}}},
cZ(a,b){var s=this.guD()
s.toString
b.es(0,s)}}
A.a36.prototype={
$2(a,b){return this.a.ph(a,b)},
$S:15}
A.vy.prototype={
W4(){if(this.A!=null)return
this.A=this.az},
Cp(a){switch(a.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
sxu(a){var s=this,r=s.S
if(r===a)return
s.S=a
if(s.Cp(r)||s.Cp(a))s.a6()
else{s.bH=s.c9=null
s.ap()}},
sdR(a){var s=this
if(s.az.k(0,a))return
s.az=a
s.A=s.bH=s.c9=null
s.ap()},
sbB(a){var s=this
if(s.bo==a)return
s.bo=a
s.A=s.bH=s.c9=null
s.ap()},
bZ(a){var s,r=this.t$
if(r!=null){s=r.fA(B.bx)
switch(this.S.a){case 6:return a.bl(new A.aS(0,a.b,0,a.d).nA(s))
case 1:case 2:case 0:case 4:case 3:case 5:return a.nA(s)}}else return new A.a5(A.F(0,a.a,a.b),A.F(0,a.c,a.d))},
bx(){var s,r,q,p=this,o=p.t$
if(o!=null){o.ci(B.bx,!0)
switch(p.S.a){case 6:o=t.k
s=o.a(A.w.prototype.gZ.call(p))
r=p.t$.k3
r.toString
q=new A.aS(0,s.b,0,s.d).nA(r)
p.k3=o.a(A.w.prototype.gZ.call(p)).bl(q)
break
case 1:case 2:case 0:case 4:case 3:case 5:o=t.k.a(A.w.prototype.gZ.call(p))
s=p.t$.k3
s.toString
p.k3=o.nA(s)
break}p.bH=p.c9=null}else{o=t.k.a(A.w.prototype.gZ.call(p))
p.k3=new A.a5(A.F(0,o.a,o.b),A.F(0,o.c,o.d))}},
vY(){var s,r,q,p,o,n,m,l,k,j=this
if(j.bH!=null)return
if(j.t$==null){j.c9=!1
s=new A.bg(new Float64Array(16))
s.cR()
j.bH=s}else{j.W4()
s=j.t$.k3
s.toString
r=j.S
q=j.k3
q.toString
p=A.aoc(r,s,q)
q=p.b
r=p.a
o=s.a
s=s.b
n=j.A.xM(r,new A.E(0,0,0+o,0+s))
m=j.A
m.toString
l=j.k3
k=m.xM(q,new A.E(0,0,0+l.a,0+l.b))
m=n.a
j.c9=n.c-m<o||n.d-n.b<s
s=A.uG(k.a,k.b,0)
s.me(0,q.a/r.a,q.b/r.b,1)
s.b1(0,-m,-n.b)
j.bH=s}},
DC(a,b){var s,r,q,p,o=this,n=o.bH
n.toString
s=A.a06(n)
if(s==null){n=o.cx
n===$&&A.b()
r=o.bH
r.toString
q=A.ep.prototype.gjV.call(o)
p=o.ch.a
return a.oA(n,b,r,q,p instanceof A.kx?p:null)}else o.fK(a,b.W(0,s))
return null},
aG(a,b){var s,r,q,p,o,n=this
if(n.t$!=null){s=n.k3
if(!s.gO(s)){s=n.t$.k3
s=s.gO(s)}else s=!0}else s=!0
if(s)return
n.vY()
s=n.c9
s.toString
if(s&&n.dt!==B.l){s=n.cx
s===$&&A.b()
r=n.k3
q=r.a
r=r.b
p=n.ch
o=p.a
o=o instanceof A.nQ?o:null
p.saQ(0,a.k_(s,b,new A.E(0,0,0+q,0+r),n.gVc(),n.dt,o))}else n.ch.saQ(0,n.DC(a,b))},
cB(a,b){var s=this,r=s.k3
if(!r.gO(r)){r=s.t$
if(r==null)r=null
else{r=r.k3
r=r.gO(r)}r=r===!0}else r=!0
if(r)return!1
s.vY()
return a.wa(new A.a2E(s),b,s.bH)},
jY(a){var s=this.k3
if(!s.gO(s)){s=a.k3
s=!s.gO(s)}else s=!1
return s},
cZ(a,b){var s=this.k3
if(!s.gO(s)){s=a.k3
s=!s.gO(s)}else s=!1
if(!s)b.Ae()
else{this.vY()
s=this.bH
s.toString
b.es(0,s)}}}
A.a2E.prototype={
$2(a,b){return this.a.ph(a,b)},
$S:15}
A.J0.prototype={
sa3y(a){var s=this
if(s.A.k(0,a))return
s.A=a
s.ap()
s.aZ()},
bM(a,b){return this.cB(a,b)},
cB(a,b){var s,r,q=this
if(q.S){s=q.A
r=q.k3
r=new A.y(s.a*r.a,s.b*r.b)
s=r}else s=null
return a.nh(new A.a2F(q),s,b)},
aG(a,b){var s,r,q=this
if(q.t$!=null){s=q.A
r=q.k3
q.fK(a,new A.y(b.a+s.a*r.a,b.b+s.b*r.b))}},
cZ(a,b){var s=this.A,r=this.k3
b.b1(0,s.a*r.a,s.b*r.b)}}
A.a2F.prototype={
$2(a,b){return this.a.ph(a,b)},
$S:15}
A.Jc.prototype={
nz(a){return new A.a5(A.F(1/0,a.a,a.b),A.F(1/0,a.c,a.d))},
hN(a,b){var s,r=this,q=null
if(t.Y.b(a)){s=r.cz
return s==null?q:s.$1(a)}if(t._.b(a))return q
if(t.g.b(a)){s=r.ak
return s==null?q:s.$1(a)}if(t.hV.b(a))return q
if(t.AJ.b(a)){s=r.aU
return s==null?q:s.$1(a)}if(t.EL.b(a)){s=r.bu
return s==null?q:s.$1(a)}if(t.c.b(a))return q
if(t.zv.b(a))return q
if(t.zs.b(a)){s=r.an
return s==null?q:s.$1(a)}}}
A.J5.prototype={
bM(a,b){return this.MU(a,b)&&!0},
hN(a,b){var s=this.ak
if(s!=null&&t.hV.b(a))return s.$1(a)},
gGt(a){return this.aU},
gzx(){return this.bu},
aq(a){this.mz(a)
this.bu=!0},
ah(a){this.bu=!1
this.kt(0)},
nz(a){return new A.a5(A.F(1/0,a.a,a.b),A.F(1/0,a.c,a.d))},
$iiY:1,
gyu(a){return this.bn},
gyx(a){return this.aY}}
A.Jf.prototype={
gdd(){return!0}}
A.vz.prototype={
sHy(a){var s,r=this
if(a===r.A)return
r.A=a
s=r.S
if(s==null||!s)r.aZ()},
sxK(a){var s=this,r=s.S
if(a==r)return
if(r==null)r=s.A
s.S=a
if(r!==(a==null?s.A:a))s.aZ()},
bM(a,b){return!this.A&&this.i3(a,b)},
eX(a){var s,r=this.t$
if(r!=null){s=this.S
s=!(s==null?this.A:s)}else s=!1
if(s){r.toString
a.$1(r)}}}
A.J6.prototype={
srM(a){var s=this
if(a===s.A)return
s.A=a
s.a6()
s.rE()},
ei(a){if(this.A)return null
return this.B4(a)},
gja(){return this.A},
bZ(a){if(this.A)return new A.a5(A.F(0,a.a,a.b),A.F(0,a.c,a.d))
return this.MT(a)},
ow(){this.MK()},
bx(){var s,r=this
if(r.A){s=r.t$
if(s!=null)s.h9(t.k.a(A.w.prototype.gZ.call(r)))}else r.tZ()},
bM(a,b){return!this.A&&this.i3(a,b)},
jY(a){return!this.A},
aG(a,b){if(this.A)return
this.fK(a,b)},
eX(a){if(this.A)return
this.tX(a)}}
A.vv.prototype={
sFz(a){if(this.A===a)return
this.A=a
this.aZ()},
sxK(a){return},
bM(a,b){return this.A?this.k3.B(0,b):this.i3(a,b)},
eX(a){var s,r,q=this.t$
if(q!=null){s=this.S
r=this.A
s=!r}else s=!1
if(s){q.toString
a.$1(q)}}}
A.j7.prototype={
sa3I(a){if(A.ajo(a,this.cz))return
this.cz=a
this.aZ()},
siP(a){var s,r=this
if(J.f(r.bn,a))return
s=r.bn
r.bn=a
if(a!=null!==(s!=null))r.aZ()},
sjT(a){var s,r=this
if(J.f(r.ak,a))return
s=r.ak
r.ak=a
if(a!=null!==(s!=null))r.aZ()},
sa27(a){var s,r=this
if(J.f(r.aY,a))return
s=r.aY
r.aY=a
if(a!=null!==(s!=null))r.aZ()},
sa2d(a){var s,r=this
if(J.f(r.aU,a))return
s=r.aU
r.aU=a
if(a!=null!==(s!=null))r.aZ()},
ek(a){var s,r=this
r.fJ(a)
if(r.bn!=null){s=r.cz
s=s==null||s.B(0,B.dp)}else s=!1
if(s)a.siP(r.bn)
if(r.ak!=null){s=r.cz
s=s==null||s.B(0,B.A3)}else s=!1
if(s)a.sjT(r.ak)
if(r.aY!=null){s=r.cz
if(s==null||s.B(0,B.dt))a.srQ(r.gVt())
s=r.cz
if(s==null||s.B(0,B.ds))a.srP(r.gVr())}if(r.aU!=null){s=r.cz
if(s==null||s.B(0,B.dq))a.srR(r.gVv())
s=r.cz
if(s==null||s.B(0,B.dr))a.srO(r.gVp())}},
Vs(){var s,r,q=this.aY
if(q!=null){s=this.k3
r=s.a*-0.8
s=s.im(B.k)
s=A.co(this.bs(0,null),s)
q.$1(new A.hv(null,new A.y(r,0),r,s))}},
Vu(){var s,r,q=this.aY
if(q!=null){s=this.k3
r=s.a*0.8
s=s.im(B.k)
s=A.co(this.bs(0,null),s)
q.$1(new A.hv(null,new A.y(r,0),r,s))}},
Vw(){var s,r,q=this.aU
if(q!=null){s=this.k3
r=s.b*-0.8
s=s.im(B.k)
s=A.co(this.bs(0,null),s)
q.$1(new A.hv(null,new A.y(0,r),r,s))}},
Vq(){var s,r,q=this.aU
if(q!=null){s=this.k3
r=s.b*0.8
s=s.im(B.k)
s=A.co(this.bs(0,null),s)
q.$1(new A.hv(null,new A.y(0,r),r,s))}}}
A.vC.prototype={
sIE(a){var s=this
if(s.A===a)return
s.A=a
s.F5(a)
s.aZ()},
sZf(a){if(this.S===a)return
this.S=a
this.aZ()},
sa_E(a){if(this.az===a)return
this.az=a
this.aZ()},
sa_C(a){return},
F5(a){var s=this,r=a.fy
r=a.fx
r=r==null?null:new A.cl(r,B.a7)
s.c9=r
r=a.id
r=a.go
r=r==null?null:new A.cl(r,B.a7)
s.bH=r
s.dt=null
s.fk=null
s.hM=null},
sbB(a){if(this.xq==a)return
this.xq=a
this.aZ()},
eX(a){this.tX(a)},
ek(a){var s,r,q=this
q.fJ(a)
a.a=q.S
a.b=q.az
s=q.A.a
if(s!=null){a.b5(B.Ae,!0)
a.b5(B.A6,s)}s=q.A.e
if(s!=null)a.b5(B.Ab,s)
s=q.A.f
if(s!=null)a.b5(B.Af,s)
s=q.A.w
if(s!=null)a.b5(B.Ad,s)
s=q.A.as
if(s!=null)a.b5(B.A9,s)
s=q.A.at
if(s!=null)a.b5(B.Aa,s)
s=q.A.db
if(s!=null)a.b5(B.A7,s)
s=q.c9
if(s!=null){a.p4=s
a.d=!0}s=q.bH
if(s!=null){a.R8=s
a.d=!0}s=q.dt
if(s!=null){a.RG=s
a.d=!0}s=q.fk
if(s!=null){a.rx=s
a.d=!0}s=q.hM
if(s!=null){a.ry=s
a.d=!0}s=q.A
r=s.p2
if(r!=null){a.to=r
a.d=!0}s.p3!=null
s=q.A.cx
if(s!=null)a.b5(B.A8,s)
s=q.A.cy
if(s!=null)a.b5(B.Ac,s)
s=q.xq
if(s!=null){a.y1=s
a.d=!0}s=q.A
r=s.R8
if(r!=null){a.id=r
a.d=!0}s=s.RG
if(s!=null)a.FF(s)
if(q.A.rx!=null)a.siP(q.gVx())
if(q.A.ry!=null)a.sjT(q.gVn())
if(q.A.t!=null)a.srN(q.gVl())},
Vy(){var s=this.A.rx
if(s!=null)s.$0()},
Vo(){var s=this.A.ry
if(s!=null)s.$0()},
Vm(){var s=this.A.t
if(s!=null)s.$0()}}
A.IR.prototype={
sYw(a){return},
ek(a){this.fJ(a)
a.c=!0}}
A.J4.prototype={
ek(a){this.fJ(a)
a.d=a.p2=a.a=!0}}
A.J_.prototype={
sa_D(a){if(a===this.A)return
this.A=a
this.aZ()},
eX(a){if(this.A)return
this.tX(a)}}
A.J2.prototype={
sxL(a,b){if(b===this.A)return
this.A=b
this.aZ()},
ek(a){this.fJ(a)
a.k1=this.A
a.d=!0}}
A.vx.prototype={
sn(a,b){if(this.A.k(0,b))return
this.A=b
this.ap()},
sKJ(a){return},
aG(a,b){var s,r=this,q=r.A,p=r.k3
p.toString
s=new A.r5(q,p,b,A.u(t.S,t.M),A.au(),r.$ti.h("r5<1>"))
s.ht()
a.IH(s,A.ep.prototype.gjV.call(r),b)},
gl3(){return!0}}
A.P5.prototype={
ei(a){var s=this.t$
if(s!=null)return s.j1(a)
return this.B4(a)}}
A.P6.prototype={
aq(a){var s=this
s.mz(a)
s.lx$.U(0,s.gqd())
s.vX()},
ah(a){this.lx$.H(0,this.gqd())
this.kt(0)},
aG(a,b){if(this.lw$===0)return
this.fK(a,b)}}
A.yz.prototype={
aq(a){var s
this.e8(a)
s=this.t$
if(s!=null)s.aq(a)},
ah(a){var s
this.dl(0)
s=this.t$
if(s!=null)s.ah(0)}}
A.yA.prototype={
ei(a){var s=this.t$
if(s!=null)return s.j1(a)
return this.AW(a)}}
A.ja.prototype={
G(){return"SelectionResult."+this.b}}
A.d2.prototype={$iad:1}
A.JN.prototype={
soD(a){var s=this,r=s.lv$
if(a==r)return
if(a==null)s.H(0,s.gEo())
else if(r==null)s.U(0,s.gEo())
s.En()
s.lv$=a
s.Ep()},
Ep(){var s=this
if(s.lv$==null){s.jF$=!1
return}if(s.jF$&&!s.gn(s).d){s.lv$.u(0,s)
s.jF$=!1}else if(!s.jF$&&s.gn(s).d){s.lv$.C(0,s)
s.jF$=!0}},
En(){var s=this
if(s.jF$){s.lv$.u(0,s)
s.jF$=!1}}}
A.pf.prototype={
G(){return"SelectionEventType."+this.b}}
A.mF.prototype={
G(){return"TextGranularity."+this.b}}
A.a4s.prototype={}
A.rF.prototype={}
A.ms.prototype={}
A.mt.prototype={
G(){return"SelectionExtendDirection."+this.b}}
A.pg.prototype={
G(){return"SelectionStatus."+this.b}}
A.kp.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.kp&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&b.c===s.c&&b.d===s.d},
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.mu.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.mu&&b.a.k(0,s.a)&&b.b===s.b&&b.c===s.c},
gv(a){return A.Y(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.wQ.prototype={
G(){return"TextSelectionHandleType."+this.b}}
A.Jg.prototype={
ei(a){var s,r,q=this.t$
if(q!=null){s=q.j1(a)
r=q.e
r.toString
t.r.a(r)
if(s!=null)s+=r.a.b}else s=this.AW(a)
return s},
aG(a,b){var s,r=this.t$
if(r!=null){s=r.e
s.toString
a.eu(r,t.r.a(s).a.W(0,b))}},
cB(a,b){var s,r=this.t$
if(r!=null){s=r.e
s.toString
t.r.a(s)
return a.nh(new A.a3_(b,s,r),s.a,b)}return!1}}
A.a3_.prototype={
$2(a,b){return this.c.bM(a,b)},
$S:15}
A.J8.prototype={
q4(){var s=this
if(s.A!=null)return
s.A=s.S.X(s.az)},
sd3(a,b){var s=this
if(s.S.k(0,b))return
s.S=b
s.A=null
s.a6()},
sbB(a){var s=this
if(s.az==a)return
s.az=a
s.A=null
s.a6()},
bZ(a){var s,r,q,p=this
p.q4()
if(p.t$==null){s=p.A
return a.bl(new A.a5(s.a+s.c,s.b+s.d))}s=p.A
s.toString
r=a.Gw(s)
q=p.t$.fA(r)
s=p.A
return a.bl(new A.a5(s.a+q.a+s.c,s.b+q.b+s.d))},
bx(){var s,r,q,p,o,n,m=this,l=t.k.a(A.w.prototype.gZ.call(m))
m.q4()
if(m.t$==null){s=m.A
m.k3=l.bl(new A.a5(s.a+s.c,s.b+s.d))
return}s=m.A
s.toString
r=l.Gw(s)
m.t$.ci(r,!0)
s=m.t$
q=s.e
q.toString
t.r.a(q)
p=m.A
o=p.a
n=p.b
q.a=new A.y(o,n)
s=s.k3
m.k3=l.bl(new A.a5(o+s.a+p.c,n+s.b+p.d))}}
A.IO.prototype={
q4(){var s=this
if(s.A!=null)return
s.A=s.S.X(s.az)},
sdR(a){var s=this
if(s.S.k(0,a))return
s.S=a
s.A=null
s.a6()},
sbB(a){var s=this
if(s.az==a)return
s.az=a
s.A=null
s.a6()},
wb(){var s,r,q,p,o=this
o.q4()
s=o.t$
r=s.e
r.toString
t.r.a(r)
q=o.A
q.toString
p=o.k3
p.toString
s=s.k3
s.toString
r.a=q.l2(t.uu.a(p.ab(0,s)))}}
A.Jd.prototype={
sa3L(a){if(this.ak==a)return
this.ak=a
this.a6()},
sa0L(a){if(this.aY==a)return
this.aY=a
this.a6()},
bZ(a){var s,r,q=this,p=q.ak!=null||a.b===1/0,o=q.aY!=null||a.d===1/0,n=q.t$
if(n!=null){s=n.fA(new A.aS(0,a.b,0,a.d))
if(p){n=q.ak
if(n==null)n=1
n=s.a*n}else n=1/0
if(o){r=q.aY
if(r==null)r=1
r=s.b*r}else r=1/0
return a.bl(new A.a5(n,r))}n=p?0:1/0
return a.bl(new A.a5(n,o?0:1/0))},
bx(){var s,r,q=this,p=t.k.a(A.w.prototype.gZ.call(q)),o=q.ak!=null||p.b===1/0,n=q.aY!=null||p.d===1/0,m=q.t$
if(m!=null){m.ci(new A.aS(0,p.b,0,p.d),!0)
if(o){m=q.t$.k3.a
s=q.ak
m*=s==null?1:s}else m=1/0
if(n){s=q.t$.k3.b
r=q.aY
s*=r==null?1:r}else s=1/0
q.k3=p.bl(new A.a5(m,s))
q.wb()}else{m=o?0:1/0
q.k3=p.bl(new A.a5(m,n?0:1/0))}}}
A.a4Z.prototype={
tq(a){return new A.a5(A.F(1/0,a.a,a.b),A.F(1/0,a.c,a.d))}}
A.IX.prototype={
swO(a){var s=this,r=s.A
if(r===a)return
if(A.A(a)!==A.A(r)||a.ml(r))s.a6()
s.A=a
s.b!=null},
aq(a){this.NV(a)},
ah(a){this.NW(0)},
bZ(a){return a.bl(this.A.tq(a))},
bx(){var s,r,q,p,o,n,m=this,l=t.k,k=l.a(A.w.prototype.gZ.call(m))
m.k3=k.bl(m.A.tq(k))
if(m.t$!=null){s=m.A.zI(l.a(A.w.prototype.gZ.call(m)))
l=m.t$
l.toString
k=s.a
r=s.b
q=k>=r
l.ci(s,!(q&&s.c>=s.d))
l=m.t$
p=l.e
p.toString
t.r.a(p)
o=m.A
n=m.k3
n.toString
if(q&&s.c>=s.d)l=new A.a5(A.F(0,k,r),A.F(0,s.c,s.d))
else{l=l.k3
l.toString}p.a=o.zT(n,l)}}}
A.yB.prototype={
aq(a){var s
this.e8(a)
s=this.t$
if(s!=null)s.aq(a)},
ah(a){var s
this.dl(0)
s=this.t$
if(s!=null)s.ah(0)}}
A.tN.prototype={
G(){return"GrowthDirection."+this.b}}
A.ks.prototype={
gHX(){return!1},
Ym(a,b){var s=this.w
switch(A.bf(this.a).a){case 0:return new A.aS(b,a,s,s)
case 1:return new A.aS(s,s,b,a)}},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.ks))return!1
return b.a===s.a&&b.b===s.b&&b.d===s.d&&b.f===s.f&&b.r===s.r&&b.w===s.w&&b.x===s.x&&b.y===s.y&&b.Q===s.Q&&b.z===s.z},
gv(a){var s=this
return A.Y(s.a,s.b,s.d,s.f,s.r,s.w,s.x,s.y,s.Q,s.z,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this,r=A.a([s.a.j(0),s.b.j(0),s.c.j(0),"scrollOffset: "+B.d.R(s.d,1),"remainingPaintExtent: "+B.d.R(s.r,1)],t.s),q=s.f
if(q!==0)r.push("overlap: "+B.d.R(q,1))
r.push("crossAxisExtent: "+B.d.R(s.w,1))
r.push("crossAxisDirection: "+s.x.j(0))
r.push("viewportMainAxisExtent: "+B.d.R(s.y,1))
r.push("remainingCacheExtent: "+B.d.R(s.Q,1))
r.push("cacheOrigin: "+B.d.R(s.z,1))
return"SliverConstraints("+B.b.b7(r,", ")+")"}}
A.a6M.prototype={
bP(){return"SliverGeometry"}}
A.pn.prototype={}
A.K3.prototype={
j(a){return A.A(this.a).j(0)+"@(mainAxis: "+A.l(this.c)+", crossAxis: "+A.l(this.d)+")"}}
A.wn.prototype={
j(a){var s=this.a
return"layoutOffset="+(s==null?"None":B.d.R(s,1))}}
A.kt.prototype={
j(a){return"paintOffset="+A.l(this.a)}}
A.jd.prototype={}
A.cj.prototype={
gZ(){return t.p.a(A.w.prototype.gZ.call(this))},
gj8(){return this.ghf()},
ghf(){var s=this,r=t.p
switch(A.bf(r.a(A.w.prototype.gZ.call(s)).a).a){case 0:return new A.E(0,0,0+s.id.c,0+r.a(A.w.prototype.gZ.call(s)).w)
case 1:return new A.E(0,0,0+r.a(A.w.prototype.gZ.call(s)).w,0+s.id.c)}},
ow(){},
Ht(a,b,c){var s=this
if(c>=0&&c<s.id.r&&b>=0&&b<t.p.a(A.w.prototype.gZ.call(s)).w)if(s.xJ(a,b,c)||!1){a.C(0,new A.K3(c,b,s))
return!0}return!1},
xJ(a,b,c){return!1},
fZ(a,b,c){var s=a.d,r=a.r,q=s+r
return A.F(A.F(c,s,q)-A.F(b,s,q),0,r)},
nr(a,b,c){var s=a.d,r=s+a.z,q=a.Q,p=s+q
return A.F(A.F(c,r,p)-A.F(b,r,p),0,q)},
wt(a){return 0},
cZ(a,b){},
hN(a,b){}}
A.a30.prototype={
CA(a){var s
switch(a.a.a){case 0:case 3:s=!1
break
case 2:case 1:s=!0
break
default:s=null}switch(a.b.a){case 0:break
case 1:s=!s
break}return s},
a0T(a,b,c,d){var s,r,q,p,o=this,n={},m=t.p,l=o.CA(m.a(A.w.prototype.gZ.call(o))),k=b.e
k.toString
k=t.D.a(k).a
k.toString
s=k-m.a(A.w.prototype.gZ.call(o)).d
r=d-s
q=c-0
p=n.a=null
switch(A.bf(m.a(A.w.prototype.gZ.call(o)).a).a){case 0:if(!l){m=b.k3.a
r=m-r
s=o.id.c-m-s}p=new A.y(s,0)
n.a=new A.y(r,q)
break
case 1:if(!l){m=b.k3.b
r=m-r
s=o.id.c-m-s}p=new A.y(0,s)
n.a=new A.y(q,r)
break}return a.Yd(new A.a31(n,b),p)}}
A.a31.prototype={
$1(a){return this.b.bM(a,this.a.a)},
$S:108}
A.PY.prototype={}
A.Q0.prototype={
ah(a){this.tV(0)}}
A.Jh.prototype={
soU(a){if(this.r_===a)return
this.r_=a
this.a6()}}
A.Ji.prototype={
JT(a,b){var s,r
if(b>0){s=a/b
r=B.d.b0(s)
if(Math.abs(s*b-r*b)<1e-10)return r
return B.d.eQ(s)}return 0},
zN(a,b){var s,r
if(b>0){s=a/b-1
r=B.d.b0(s)
if(Math.abs(s*b-r*b)<1e-10)return Math.max(0,r)
return Math.max(0,B.d.eh(s))}return 0},
PI(a){var s,r=this.aw$,q=A.n(this).h("ax.1"),p=t.D,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s<a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).an$}return o},
PJ(a){var s,r=this.cN$,q=A.n(this).h("ax.1"),p=t.D,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s>a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).bL$}return o},
bx(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=t.p,a7=a6.a(A.w.prototype.gZ.call(a4)),a8=a4.bf
a8.R8=!1
s=a6.a(A.w.prototype.gZ.call(a4)).y*a4.r_
a6=a7.d
r=a6+a7.z
q=r+a7.Q
p=a7.Ym(s,s)
o=a4.JT(r,s)
n=isFinite(q)?a4.zN(q,s):a5
if(a4.aw$!=null){m=a4.PI(o)
a4.G5(m,n!=null?a4.PJ(n):0)}else a4.G5(0,0)
if(a4.aw$==null)if(!a4.Y_(o,s*o)){l=o<=0?0:a8.gqy()*s
a4.id=A.wm(a5,!1,a5,a5,l,0,0,l,a5)
a8.GA()
return}k=a4.aw$
k.toString
k=k.e
k.toString
j=t.D
k=j.a(k).b
k.toString
i=k-1
h=a5
for(;i>=o;--i){g=a4.a15(p)
if(g==null){a4.id=A.wm(a5,!1,a5,a5,0,0,0,0,i*s)
return}k=g.e
k.toString
j.a(k).a=s*i
if(h==null)h=g}if(h==null){a4.aw$.h9(p)
h=a4.aw$
k=h.e
k.toString
j.a(k).a=s*o}k=h.e
k.toString
k=j.a(k).b
k.toString
i=k+1
k=A.n(a4).h("ax.1")
f=n!=null
while(!0){if(!(!f||i<=n)){e=1/0
break}d=h.e
d.toString
g=k.a(d).an$
if(g!=null){d=g.e
d.toString
d=j.a(d).b
d.toString
d=d!==i}else d=!0
if(d){g=a4.a14(p,h)
if(g==null){e=i*s
break}}else g.h9(p)
d=g.e
d.toString
j.a(d)
c=d.b
c.toString
d.a=s*c;++i
h=g}k=a4.cN$
k.toString
k=k.e
k.toString
k=j.a(k).b
k.toString
b=s*o
a=s*(k+1)
e=Math.min(e,a8.a_A(a7,o,k,b,a))
a0=a4.fZ(a7,b,a)
a1=a4.nr(a7,b,a)
a2=a6+a7.r
a3=isFinite(a2)?a4.zN(a2,s):a5
a4.id=A.wm(a1,a3!=null&&k>=a3||a6>0,a5,a5,e,a0,0,e,a5)
if(e===a)a8.R8=!0
a8.GA()}}
A.hE.prototype={$icb:1}
A.a35.prototype={
e4(a){}}
A.h2.prototype={
j(a){var s=this.b,r=this.o2$?"keepAlive; ":""
return"index="+A.l(s)+"; "+r+this.Ns(0)}}
A.mm.prototype={
e4(a){if(!(a.e instanceof A.h2))a.e=new A.h2(!1,null,null)},
hA(a){var s
this.AX(a)
s=a.e
s.toString
t.D.a(s)
if(!s.c){t.x.a(a)
s.b=this.bf.p4}},
xO(a,b,c){this.tO(0,b,c)},
rI(a,b){var s,r,q,p=this,o=a.e
o.toString
s=t.D
s.a(o)
if(!o.c){p.Lx(a,b)
o=a.e
o.toString
s.a(o).b=p.bf.p4
p.a6()}else{r=p.bb
if(r.i(0,o.b)===a)r.u(0,o.b)
q=a.e
q.toString
s.a(q).b=p.bf.p4
o=o.b
o.toString
r.l(0,o,a)}},
u(a,b){var s=b.e
s.toString
t.D.a(s)
if(!s.c){this.Lz(0,b)
return}this.bb.u(0,s.b)
this.is(b)},
uz(a,b){this.HP(new A.a32(this,a,b),t.p)},
C5(a){var s,r=this,q=a.e
q.toString
t.D.a(q)
if(q.o2$){r.u(0,a)
s=q.b
s.toString
r.bb.l(0,s,a)
a.e=q
r.AX(a)
q.c=!0}else r.bf.IS(a)},
aq(a){var s,r,q
this.NX(a)
for(s=this.bb,s=s.gaX(s),s=new A.e1(J.aw(s.a),s.b),r=A.n(s).z[1];s.q();){q=s.a;(q==null?r.a(q):q).aq(a)}},
ah(a){var s,r,q
this.NY(0)
for(s=this.bb,s=s.gaX(s),s=new A.e1(J.aw(s.a),s.b),r=A.n(s).z[1];s.q();){q=s.a;(q==null?r.a(q):q).ah(0)}},
iT(){this.Ly()
var s=this.bb
s.gaX(s).Y(0,this.gIO())},
aT(a){var s
this.AC(a)
s=this.bb
s.gaX(s).Y(0,a)},
eX(a){this.AC(a)},
Y_(a,b){var s
this.uz(a,null)
s=this.aw$
if(s!=null){s=s.e
s.toString
t.D.a(s).a=b
return!0}this.bf.R8=!0
return!1},
a15(a){var s,r,q,p=this,o=p.aw$
o.toString
o=o.e
o.toString
s=t.D
o=s.a(o).b
o.toString
r=o-1
p.uz(r,null)
o=p.aw$
o.toString
q=o.e
q.toString
q=s.a(q).b
q.toString
if(q===r){o.ci(a,!1)
return p.aw$}p.bf.R8=!0
return null},
a14(a,b){var s,r,q,p=b.e
p.toString
s=t.D
p=s.a(p).b
p.toString
r=p+1
this.uz(r,b)
p=b.e
p.toString
q=A.n(this).h("ax.1").a(p).an$
if(q!=null){p=q.e
p.toString
p=s.a(p).b
p.toString
p=p===r}else p=!1
if(p){q.ci(a,!1)
return q}this.bf.R8=!0
return null},
G5(a,b){var s={}
s.a=a
s.b=b
this.HP(new A.a34(s,this),t.p)},
It(a){switch(A.bf(t.p.a(A.w.prototype.gZ.call(this)).a).a){case 0:return a.k3.a
case 1:return a.k3.b}},
xJ(a,b,c){var s,r,q=this.cN$,p=A.akm(a)
for(s=A.n(this).h("ax.1");q!=null;){if(this.a0T(p,q,b,c))return!0
r=q.e
r.toString
q=s.a(r).bL$}return!1},
wt(a){var s=a.e
s.toString
return t.D.a(s).a},
jY(a){var s=t.ub.a(a.e)
return(s==null?null:s.b)!=null&&!this.bb.T(0,s.b)},
cZ(a,b){var s,r,q,p,o=this
if(!o.jY(a))b.Ae()
else{s=t.p
r=o.CA(s.a(A.w.prototype.gZ.call(o)))
q=a.e
q.toString
q=t.D.a(q).a
q.toString
p=q-s.a(A.w.prototype.gZ.call(o)).d
switch(A.bf(s.a(A.w.prototype.gZ.call(o)).a).a){case 0:b.b1(0,!r?o.id.c-a.k3.a-p:p,0)
break
case 1:b.b1(0,0,!r?o.id.c-a.k3.b-p:p)
break}}},
aG(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null
if(d.aw$==null)return
s=t.p
switch(A.jB(s.a(A.w.prototype.gZ.call(d)).a,s.a(A.w.prototype.gZ.call(d)).b)){case B.x:r=b.W(0,new A.y(0,d.id.c))
q=B.Sl
p=B.eO
o=!0
break
case B.ar:r=b
q=B.eO
p=B.hx
o=!1
break
case B.u:r=b
q=B.hx
p=B.eO
o=!1
break
case B.a8:r=b.W(0,new A.y(d.id.c,0))
q=B.So
p=B.hx
o=!0
break
default:o=c
r=o
p=r
q=p}n=d.aw$
for(m=A.n(d).h("ax.1"),l=t.D;n!=null;){k=n.e
k.toString
k=l.a(k).a
k.toString
j=k-s.a(A.w.prototype.gZ.call(d)).d
k=r.a
i=q.a
k=k+i*j+p.a*0
h=r.b
g=q.b
h=h+g*j+p.b*0
f=new A.y(k,h)
if(o){e=d.It(n)
f=new A.y(k+i*e,h+g*e)}if(j<s.a(A.w.prototype.gZ.call(d)).r&&j+d.It(n)>0)a.eu(n,f)
k=n.e
k.toString
n=m.a(k).an$}}}
A.a32.prototype={
$1(a){var s=this.a,r=s.bb,q=this.b,p=this.c
if(r.T(0,q)){r=r.u(0,q)
r.toString
q=r.e
q.toString
t.D.a(q)
s.is(r)
r.e=q
s.tO(0,r,p)
q.c=!1}else s.bf.ZK(q,p)},
$S:109}
A.a34.prototype={
$1(a){var s,r,q
for(s=this.a,r=this.b;s.a>0;){q=r.aw$
q.toString
r.C5(q);--s.a}for(;s.b>0;){q=r.cN$
q.toString
r.C5(q);--s.b}s=r.bb
s=s.gaX(s)
q=A.n(s).h("aI<p.E>")
B.b.Y(A.az(new A.aI(s,new A.a33(),q),!0,q.h("p.E")),r.bf.ga2R())},
$S:109}
A.a33.prototype={
$1(a){var s=a.e
s.toString
return!t.D.a(s).o2$},
$S:236}
A.yD.prototype={
aq(a){var s,r,q
this.e8(a)
s=this.aw$
for(r=t.D;s!=null;){s.aq(a)
q=s.e
q.toString
s=r.a(q).an$}},
ah(a){var s,r,q
this.dl(0)
s=this.aw$
for(r=t.D;s!=null;){s.ah(0)
q=s.e
q.toString
s=r.a(q).an$}}}
A.Pj.prototype={}
A.Pk.prototype={}
A.PZ.prototype={
ah(a){this.tV(0)}}
A.Q_.prototype={}
A.vD.prototype={
gwn(){var s=this,r=t.p
switch(A.jB(r.a(A.w.prototype.gZ.call(s)).a,r.a(A.w.prototype.gZ.call(s)).b)){case B.x:return s.bG.d
case B.ar:return s.bG.a
case B.u:return s.bG.b
case B.a8:return s.bG.c}},
gYf(){var s=this,r=t.p
switch(A.jB(r.a(A.w.prototype.gZ.call(s)).a,r.a(A.w.prototype.gZ.call(s)).b)){case B.x:return s.bG.b
case B.ar:return s.bG.c
case B.u:return s.bG.d
case B.a8:return s.bG.a}},
gZU(){switch(A.bf(t.p.a(A.w.prototype.gZ.call(this)).a).a){case 0:var s=this.bG
return s.gb6(s)+s.gb9(s)
case 1:return this.bG.gca()}},
e4(a){if(!(a.e instanceof A.kt))a.e=new A.kt(B.k)},
bx(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=null,a2=t.p,a3=a2.a(A.w.prototype.gZ.call(a0)),a4=a0.gwn()
a0.gYf()
s=a0.bG
s.toString
a2=s.Yg(A.bf(a2.a(A.w.prototype.gZ.call(a0)).a))
r=a0.gZU()
if(a0.t$==null){q=a0.fZ(a3,0,a2)
a0.id=A.wm(a0.nr(a3,0,a2),!1,a1,a1,a2,Math.min(q,a3.r),0,a2,a1)
return}p=a0.fZ(a3,0,a4)
o=a3.f
if(o>0)o=Math.max(0,o-p)
s=a0.t$
s.toString
n=Math.max(0,a3.d-a4)
m=Math.min(0,a3.z+a4)
l=a3.r
k=a0.fZ(a3,0,a4)
j=a3.Q
i=a0.nr(a3,0,a4)
h=Math.max(0,a3.w-r)
g=a3.a
f=a3.b
s.ci(new A.ks(g,f,a3.c,n,a4+a3.e,o,l-k,h,a3.x,a3.y,m,j-i),!0)
e=a0.t$.id
s=e.y
if(s!=null){a0.id=A.wm(a1,!1,a1,a1,0,0,0,0,s)
return}s=e.a
n=a4+s
m=a2+s
d=a0.fZ(a3,n,m)
c=p+d
b=a0.nr(a3,0,a4)
a=a0.nr(a3,n,m)
n=e.c
k=e.d
q=Math.min(p+Math.max(n,k+d),l)
l=e.b
k=Math.min(c+k,q)
j=Math.min(a+b+e.z,j)
i=e.e
n=Math.max(c+n,p+e.r)
a0.id=A.wm(j,e.x,n,k,a2+i,q,l,m,a1)
m=a0.t$.e
m.toString
t.v.a(m)
switch(A.jB(g,f)){case B.x:a2=a0.bG
n=a2.a
s=a2.d+s
m.a=new A.y(n,a0.fZ(a3,s,s+a2.b))
break
case B.ar:m.a=new A.y(a0.fZ(a3,0,a0.bG.a),a0.bG.b)
break
case B.u:a2=a0.bG
m.a=new A.y(a2.a,a0.fZ(a3,0,a2.b))
break
case B.a8:a2=a0.bG
s=a2.c+s
m.a=new A.y(a0.fZ(a3,s,s+a2.a),a0.bG.b)
break}},
xJ(a,b,c){var s,r,q,p,o=this,n=o.t$
if(n!=null&&n.id.r>0){n=n.e
n.toString
t.v.a(n)
s=o.fZ(t.p.a(A.w.prototype.gZ.call(o)),0,o.gwn())
r=o.t$
r.toString
r=o.YQ(r)
n=n.a
q=o.t$.ga0R()
p=n!=null
if(p)a.c.push(new A.qm(new A.y(-n.a,-n.b)))
q.$3$crossAxisPosition$mainAxisPosition(a,b-r,c-s)
if(p)a.rZ()}return!1},
YQ(a){var s=this,r=t.p
switch(A.jB(r.a(A.w.prototype.gZ.call(s)).a,r.a(A.w.prototype.gZ.call(s)).b)){case B.x:case B.u:return s.bG.a
case B.a8:case B.ar:return s.bG.b}},
wt(a){return this.gwn()},
cZ(a,b){var s=a.e
s.toString
s=t.v.a(s).a
b.b1(0,s.a,s.b)},
aG(a,b){var s,r=this.t$
if(r!=null&&r.id.w){s=r.e
s.toString
a.eu(r,b.W(0,t.v.a(s).a))}}}
A.Ph.prototype={
aq(a){var s
this.e8(a)
s=this.t$
if(s!=null)s.aq(a)},
ah(a){var s
this.dl(0)
s=this.t$
if(s!=null)s.ah(0)}}
A.a2A.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return b instanceof A.a2A&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gv(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this
return"RelativeRect.fromLTRB("+B.d.R(s.a,1)+", "+B.d.R(s.b,1)+", "+B.d.R(s.c,1)+", "+B.d.R(s.d,1)+")"}}
A.dP.prototype={
gxV(){var s=this
return s.e!=null||s.f!=null||s.r!=null||s.w!=null||s.x!=null||s.y!=null},
j(a){var s=this,r=A.a([],t.s),q=s.e
if(q!=null)r.push("top="+A.hc(q))
q=s.f
if(q!=null)r.push("right="+A.hc(q))
q=s.r
if(q!=null)r.push("bottom="+A.hc(q))
q=s.w
if(q!=null)r.push("left="+A.hc(q))
q=s.x
if(q!=null)r.push("width="+A.hc(q))
q=s.y
if(q!=null)r.push("height="+A.hc(q))
if(r.length===0)r.push("not positioned")
r.push(s.pe(0))
return B.b.b7(r,"; ")}}
A.wu.prototype={
G(){return"StackFit."+this.b}}
A.vE.prototype={
e4(a){if(!(a.e instanceof A.dP))a.e=new A.dP(null,null,B.k)},
WX(){var s=this
if(s.t!=null)return
s.t=s.J.X(s.au)},
sdR(a){var s=this
if(s.J.k(0,a))return
s.J=a
s.t=null
s.a6()},
sbB(a){var s=this
if(s.au==a)return
s.au=a
s.t=null
s.a6()},
ei(a){return this.Gv(a)},
bZ(a){return this.EE(a,A.afR())},
EE(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.WX()
if(e.d1$===0){s=a.a
r=a.b
q=A.F(1/0,s,r)
p=a.c
o=a.d
n=A.F(1/0,p,o)
return isFinite(q)&&isFinite(n)?new A.a5(A.F(1/0,s,r),A.F(1/0,p,o)):new A.a5(A.F(0,s,r),A.F(0,p,o))}m=a.a
l=a.c
switch(e.aj.a){case 0:k=new A.aS(0,a.b,0,a.d)
break
case 1:k=A.rk(new A.a5(A.F(1/0,m,a.b),A.F(1/0,l,a.d)))
break
case 2:k=a
break
default:k=null}j=e.aw$
for(s=t.B,i=l,h=m,g=!1;j!=null;){r=j.e
r.toString
s.a(r)
if(!r.gxV()){f=b.$2(j,k)
h=Math.max(h,f.a)
i=Math.max(i,f.b)
g=!0}j=r.an$}return g?new A.a5(h,i):new A.a5(A.F(1/0,m,a.b),A.F(1/0,l,a.d))},
bx(){var s,r,q,p,o,n,m,l=this,k=t.k.a(A.w.prototype.gZ.call(l))
l.L=!1
l.k3=l.EE(k,A.afS())
s=l.aw$
for(r=t.B,q=t.uu;s!=null;){p=s.e
p.toString
r.a(p)
if(!p.gxV()){o=l.t
o.toString
n=l.k3
n.toString
m=s.k3
m.toString
p.a=o.l2(q.a(n.ab(0,m)))}else{o=l.k3
o.toString
n=l.t
n.toString
l.L=A.ama(s,p,o,n)||l.L}s=p.an$}},
cB(a,b){return this.wL(a,b)},
rV(a,b){this.nG(a,b)},
aG(a,b){var s,r=this,q=r.aW,p=q!==B.l&&r.L,o=r.bv
if(p){p=r.cx
p===$&&A.b()
s=r.k3
o.saQ(0,a.k_(p,b,new A.E(0,0,0+s.a,0+s.b),r.gyO(),q,o.a))}else{o.saQ(0,null)
r.nG(a,b)}},
m(){this.bv.saQ(0,null)
this.hs()},
ip(a){var s
switch(this.aW.a){case 0:return null
case 1:case 2:case 3:if(this.L){s=this.k3
s=new A.E(0,0,0+s.a,0+s.b)}else s=null
return s}}}
A.Pl.prototype={
aq(a){var s,r,q
this.e8(a)
s=this.aw$
for(r=t.B;s!=null;){s.aq(a)
q=s.e
q.toString
s=r.a(q).an$}},
ah(a){var s,r,q
this.dl(0)
s=this.aw$
for(r=t.B;s!=null;){s.ah(0)
q=s.e
q.toString
s=r.a(q).an$}}}
A.Pm.prototype={}
A.L_.prototype={
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return b instanceof A.L_&&b.a.k(0,this.a)&&b.b===this.b},
gv(a){return A.Y(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return this.a.j(0)+" at "+A.hc(this.b)+"x"}}
A.vF.prototype={
swx(a){var s,r,q,p,o=this
if(o.k1.k(0,a))return
s=o.k1
o.k1=a
r=s.b
r=A.uF(r,r,1)
q=o.k1.b
if(!r.k(0,A.uF(q,q,1))){r=o.Fh()
q=o.ch
p=q.a
p.toString
J.arf(p)
q.saQ(0,r)
o.ap()}o.a6()},
Fh(){var s,r=this.k1.b
r=A.uF(r,r,1)
this.k4=r
s=A.amN(r)
s.aq(this)
return s},
ow(){},
bx(){var s,r=this.k1.a
this.id=r
s=this.t$
if(s!=null)s.h9(A.rk(r))},
bM(a,b){var s=this.t$
if(s!=null)s.bM(A.akm(a),b)
a.C(0,new A.hy(this,t.Cq))
return!0},
a0W(a){var s,r=A.a([],t.f1),q=new A.bg(new Float64Array(16))
q.cR()
s=new A.hk(r,A.a([q],t.l6),A.a([],t.pw))
this.bM(s,a)
return s},
gdd(){return!0},
aG(a,b){var s=this.t$
if(s!=null)a.eu(s,b)},
cZ(a,b){var s=this.k4
s.toString
b.es(0,s)
this.MM(a,b)},
Z9(){var s,r,q
try{q=$.av()
s=q.ZQ()
r=this.ch.a.YB(s)
this.XH()
q.a2Z(r)
r.m()}finally{}},
XH(){var s,r,q,p,o,n,m,l,k,j=null,i=this.ghf(),h=i.gba(),g=this.k2
g.gka()
s=i.gba()
g.gka()
g=this.ch
r=t.g9
q=g.a.H2(0,new A.y(h.a,0),r)
switch(A.kZ().a){case 0:p=g.a.H2(0,new A.y(s.a,i.d-1-0),r)
break
case 1:case 2:case 3:case 4:case 5:p=j
break
default:p=j}h=q==null
if(h&&p==null)return
if(!h&&p!=null){h=q.f
g=q.r
s=q.e
r=q.w
A.amD(new A.i1(p.a,p.b,p.c,p.d,s,h,g,r))
return}o=A.kZ()===B.av
n=h?p:q
h=n.f
g=n.r
s=n.e
r=n.w
m=o?n.a:j
l=o?n.b:j
k=o?n.c:j
A.amD(new A.i1(m,l,k,o?n.d:j,s,h,g,r))},
ghf(){var s=this.id.a_(0,this.k1.b)
return new A.E(0,0,0+s.a,0+s.b)},
gj8(){var s,r=this.k4
r.toString
s=this.id
return A.fV(r,new A.E(0,0,0+s.a,0+s.b))}}
A.Po.prototype={
aq(a){var s
this.e8(a)
s=this.t$
if(s!=null)s.aq(a)},
ah(a){var s
this.dl(0)
s=this.t$
if(s!=null)s.ah(0)}}
A.AM.prototype={
G(){return"CacheExtentStyle."+this.b}}
A.p5.prototype={
j(a){return"RevealedOffset(offset: "+A.l(this.a)+", rect: "+this.b.j(0)+")"}}
A.p2.prototype={
ek(a){this.fJ(a)
a.FF(B.Ag)},
eX(a){var s=this.gG0()
new A.aI(s,new A.a38(),A.b2(s).h("aI<1>")).Y(0,a)},
sfb(a){if(a===this.L)return
this.L=a
this.a6()},
sZT(a){if(a===this.t)return
this.t=a
this.a6()},
shc(a,b){var s=this,r=s.J
if(b===r)return
if(s.b!=null)r.H(0,s.grD())
s.J=b
if(s.b!=null)b.U(0,s.grD())
s.a6()},
sYE(a){if(a===this.au)return
this.au=a
this.a6()},
sYF(a){if(a===this.aW)return
this.aW=a
this.a6()},
aq(a){this.NZ(a)
this.J.U(0,this.grD())},
ah(a){this.J.H(0,this.grD())
this.O_(0)},
gdd(){return!0},
I3(a,b,c,d,e,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.azv(h.J.k4,e),f=a0+a2
for(s=e.a,r=t.v,q=a0,p=0;c!=null;){o=a5<=0?0:a5
n=Math.max(b,-o)
m=b-n
c.ci(new A.ks(h.L,e,g,o,p,f-q,Math.max(0,a4-q+a0),d,h.t,a1,n,Math.max(0,a3+m)),!0)
l=c.id
k=l.y
if(k!=null)return k
j=q+l.b
k=l.w||a5>0
i=c.e
if(k){i.toString
r.a(i).a=h.G6(c,j,e)}else{i.toString
r.a(i).a=h.G6(c,-a5+a0,e)}f=Math.max(j+l.c,f)
k=l.a
a5-=k
p+=k
q+=l.d
i=l.z
if(i!==0){a3-=i-m
b=Math.min(n+i,0)}switch(s){case 0:i=h.iu
i===$&&A.b()
h.iu=i+k
break
case 1:i=h.it
i===$&&A.b()
h.it=i-k
break}if(l.x)h.fh=!0
c=a.$1(c)}return 0},
ip(a){var s,r,q,p,o,n
switch(this.bv.a){case 0:return null
case 1:case 2:case 3:break}s=this.k3
r=0+s.a
q=0+s.b
s=t.p
if(s.a(A.w.prototype.gZ.call(a)).f===0||!isFinite(s.a(A.w.prototype.gZ.call(a)).y))return new A.E(0,0,r,q)
p=s.a(A.w.prototype.gZ.call(a)).y-s.a(A.w.prototype.gZ.call(a)).r+s.a(A.w.prototype.gZ.call(a)).f
switch(A.jB(this.L,s.a(A.w.prototype.gZ.call(a)).b)){case B.u:o=0+p
n=0
break
case B.x:q-=p
n=0
o=0
break
case B.ar:n=0+p
o=0
break
case B.a8:r-=p
n=0
o=0
break
default:n=0
o=0}return new A.E(n,o,r,q)},
wQ(a){var s,r=this,q=r.aj
if(q==null){q=r.k3
return new A.E(0,0,0+q.a,0+q.b)}switch(A.bf(r.L).a){case 1:s=r.k3
return new A.E(0,0-q,0+s.a,0+s.b+q)
case 0:s=r.k3
return new A.E(0-q,0,0+s.a+q,0+s.b)}},
aG(a,b){var s,r,q,p=this
if(p.aw$==null)return
s=p.fh&&p.bv!==B.l
r=p.c2
if(s){s=p.cx
s===$&&A.b()
q=p.k3
r.saQ(0,a.k_(s,b,new A.E(0,0,0+q.a,0+q.b),p.gVd(),p.bv,r.a))}else{r.saQ(0,null)
p.DD(a,b)}},
m(){this.c2.saQ(0,null)
this.hs()},
DD(a,b){var s,r,q,p,o,n,m,l
for(s=this.gG0(),r=s.length,q=t.v,p=b.a,o=b.b,n=0;n<s.length;s.length===r||(0,A.R)(s),++n){m=s[n]
if(m.id.w){l=m.e
l.toString
l=q.a(l).a
a.eu(m,new A.y(p+l.a,o+l.b))}}},
cB(a,b){var s,r,q,p,o,n,m,l,k={}
k.a=k.b=null
switch(A.bf(this.L).a){case 1:k.b=b.b
k.a=b.a
break
case 0:k.b=b.a
k.a=b.b
break}s=new A.pn(a.a,a.b,a.c)
for(r=this.gYR(),q=r.length,p=t.v,o=0;o<r.length;r.length===q||(0,A.R)(r),++o){n=r[o]
if(!n.id.w)continue
m=new A.bg(new Float64Array(16))
m.cR()
l=n.e
l.toString
l=p.a(l).a
m.b1(0,l.a,l.b)
if(a.Ye(new A.a37(k,this,n,s),m))return!0}return!1},
kb(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=a instanceof A.cj
for(s=t.d,r=c,q=a,p=0;o=q.c,o!==d;q=o){o.toString
s.a(o)
if(q instanceof A.C)r=q
if(o instanceof A.cj){n=o.wt(q)
n.toString
p+=n}else{p=0
b=!1}}if(r!=null){s=r.c
s.toString
t.q0.a(s)
m=t.p.a(A.w.prototype.gZ.call(s)).b
switch(A.bf(d.L).a){case 0:l=r.k3.a
break
case 1:l=r.k3.b
break
default:l=c}if(a1==null)a1=a.ghf()
k=A.fV(a.bs(0,r),a1)}else{if(b){t.q0.a(a)
s=t.p
m=s.a(A.w.prototype.gZ.call(a)).b
l=a.id.a
if(a1==null)switch(A.bf(d.L).a){case 0:a1=new A.E(0,0,0+l,0+s.a(A.w.prototype.gZ.call(a)).w)
break
case 1:a1=new A.E(0,0,0+s.a(A.w.prototype.gZ.call(a)).w,0+a.id.a)
break}}else{s=d.J.at
s.toString
a1.toString
return new A.p5(s,a1)}k=a1}t.q0.a(q)
switch(A.jB(d.L,m)){case B.x:s=k.d
p+=l-s
j=s-k.b
break
case B.ar:s=k.a
p+=s
j=k.c-s
break
case B.u:s=k.b
p+=s
j=k.d-s
break
case B.a8:s=k.c
p+=l-s
j=s-k.a
break
default:j=c}q.id.toString
p=d.Kj(q,p)
i=A.fV(a.bs(0,d),a1)
h=d.a1U(q)
switch(t.p.a(A.w.prototype.gZ.call(q)).b.a){case 0:p-=h
break
case 1:switch(A.bf(d.L).a){case 1:p-=i.d-i.b
break
case 0:p-=i.c-i.a
break}break}s=d.L
switch(A.bf(s).a){case 0:g=d.k3.a-h
break
case 1:g=d.k3.b-h
break
default:g=c}f=p-(g-j)*a0
o=d.J.at
o.toString
e=o-f
switch(s.a){case 2:i=i.b1(0,0,e)
break
case 1:i=i.b1(0,e,0)
break
case 0:i=i.b1(0,0,-e)
break
case 3:i=i.b1(0,-e,0)
break}return new A.p5(f,i)},
G6(a,b,c){switch(A.jB(this.L,c)){case B.x:return new A.y(0,this.k3.b-(b+a.id.c))
case B.ar:return new A.y(b,0)
case B.u:return new A.y(0,b)
case B.a8:return new A.y(this.k3.a-(b+a.id.c),0)}},
e5(a,b,c,d){var s=this
if(!s.J.r.gl1())return s.pg(a,b,c,d)
s.pg(a,null,c,A.amc(a,b,c,s.J,d,s))},
mn(){return this.e5(B.aE,null,B.r,null)},
ki(a,b){return this.e5(B.aE,a,B.r,b)},
$iIN:1}
A.a38.prototype={
$1(a){var s=a.id
return s.w||s.z>0},
$S:238}
A.a37.prototype={
$1(a){var s=this,r=s.c,q=s.a,p=s.b.Za(r,q.b)
return r.Ht(s.d,q.a,p)},
$S:108}
A.vG.prototype={
e4(a){if(!(a.e instanceof A.jd))a.e=new A.jd(null,null,B.k)},
sYj(a){if(a===this.r2)return
this.r2=a
this.a6()},
sba(a){if(a==this.du)return
this.du=a
this.a6()},
gja(){return!0},
bZ(a){return new A.a5(A.F(1/0,a.a,a.b),A.F(1/0,a.c,a.d))},
bx(){var s,r,q,p,o,n,m,l,k,j=this
switch(A.bf(j.L).a){case 1:j.J.nm(j.k3.b)
break
case 0:j.J.nm(j.k3.a)
break}if(j.du==null){j.iu=j.it=0
j.fh=!1
j.J.nj(0,0)
return}switch(A.bf(j.L).a){case 1:s=j.k3
r=s.b
q=s.a
break
case 0:s=j.k3
r=s.a
q=s.b
break
default:r=null
q=null}s=0
do{p=j.J.at
p.toString
o=j.Ps(r,q,p+0)
if(o!==0){p=j.J
n=p.at
n.toString
p.at=n+o
p.ch=!0}else{p=j.J
n=j.it
n===$&&A.b()
m=j.r2
n=Math.min(0,n+r*m)
l=j.iu
l===$&&A.b()
if(p.nj(n,Math.max(0,l-r*(1-m))))break}k=s+1
if(k<10){s=k
continue}else break}while(!0)},
Ps(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.iu=e.it=0
e.fh=!1
s=a*e.r2-c
r=A.F(s,0,a)
q=a-s
p=A.F(q,0,a)
switch(e.aW.a){case 0:e.aj=e.au
break
case 1:e.aj=a*e.au
break}o=e.aj
o.toString
n=a+2*o
m=s+o
l=A.F(m,0,n)
k=A.F(n-m,0,n)
j=e.du.e
j.toString
i=A.n(e).h("ax.1").a(j).bL$
j=i==null
if(!j){h=Math.max(a,s)
g=e.I3(e.gYO(),A.F(q,-o,0),i,b,B.my,p,a,0,l,r,h-a)
if(g!==0)return-g}q=e.du
o=-s
h=Math.max(0,o)
o=j?Math.min(0,o):0
j=s>=a?s:r
f=e.aj
f.toString
return e.I3(e.gYM(),A.F(s,-f,0),q,b,B.mx,j,a,o,k,p,h)},
Kj(a,b){var s,r,q,p,o=this
switch(t.p.a(A.w.prototype.gZ.call(a)).b.a){case 0:s=o.du
for(r=A.n(o).h("ax.1"),q=0;s!==a;){q+=s.id.a
p=s.e
p.toString
s=r.a(p).an$}return q+b
case 1:r=o.du.e
r.toString
p=A.n(o).h("ax.1")
s=p.a(r).bL$
for(q=0;s!==a;){q-=s.id.a
r=s.e
r.toString
s=p.a(r).bL$}return q-b}},
a1U(a){var s,r,q,p=this
switch(t.p.a(A.w.prototype.gZ.call(a)).b.a){case 0:s=p.du
for(r=A.n(p).h("ax.1");s!==a;){s.id.toString
q=s.e
q.toString
s=r.a(q).an$}return 0
case 1:r=p.du.e
r.toString
q=A.n(p).h("ax.1")
s=q.a(r).bL$
for(;s!==a;){s.id.toString
r=s.e
r.toString
s=q.a(r).bL$}return 0}},
cZ(a,b){var s=a.e
s.toString
s=t.v.a(s).a
b.b1(0,s.a,s.b)},
Za(a,b){var s,r=a.e
r.toString
t.v.a(r)
s=t.p
switch(A.jB(s.a(A.w.prototype.gZ.call(a)).a,s.a(A.w.prototype.gZ.call(a)).b)){case B.u:return b-r.a.b
case B.ar:return b-r.a.a
case B.x:return a.id.c-(b-r.a.b)
case B.a8:return a.id.c-(b-r.a.a)}},
gG0(){var s,r,q=this,p=A.a([],t.jT),o=q.aw$
if(o==null)return p
for(s=A.n(q).h("ax.1");o!=q.du;){o.toString
p.push(o)
r=o.e
r.toString
o=s.a(r).an$}o=q.cN$
for(;!0;){o.toString
p.push(o)
if(o===q.du)return p
r=o.e
r.toString
o=s.a(r).bL$}},
gYR(){var s,r,q,p=this,o=A.a([],t.jT)
if(p.aw$==null)return o
s=p.du
for(r=A.n(p).h("ax.1");s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).an$}q=p.du.e
q.toString
s=r.a(q).bL$
for(;s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).bL$}return o}}
A.ij.prototype={
aq(a){var s,r,q
this.e8(a)
s=this.aw$
for(r=A.n(this).h("ij.0");s!=null;){s.aq(a)
q=s.e
q.toString
s=r.a(q).an$}},
ah(a){var s,r,q
this.dl(0)
s=this.aw$
for(r=A.n(this).h("ij.0");s!=null;){s.ah(0)
q=s.e
q.toString
s=r.a(q).an$}}}
A.pb.prototype={
G(){return"ScrollDirection."+this.b}}
A.fs.prototype={
oq(a,b,c,d){var s=d.a===B.r.a
if(s){this.de(b)
return A.bt(null,t.H)}else return this.fW(b,c,d)},
j(a){var s=this,r=A.a([],t.s)
s.Nm(r)
r.push(A.A(s.w).j(0))
r.push(s.r.j(0))
r.push(A.l(s.fr))
r.push(s.k4.j(0))
return"<optimized out>#"+A.bL(s)+"("+B.b.b7(r,", ")+")"},
c6(a){var s=this.at
if(s!=null)a.push("offset: "+B.d.R(s,1))}}
A.q8.prototype={}
A.kn.prototype={
G(){return"SchedulerPhase."+this.b}}
A.a1x.prototype={}
A.dq.prototype={
Yc(a){var s=this.f$
s.push(a)
if(s.length===1){s=$.aM()
s.ay=this.gQX()
s.ch=$.a9}},
IW(a){var s=this.f$
B.b.u(s,a)
if(s.length===0){s=$.aM()
s.ay=null
s.ch=$.a9}},
QY(a){var s,r,q,p,o,n,m,l,k=this.f$,j=A.az(k,!0,t.wX)
for(p=j.length,o=0;o<p;++o){s=j[o]
try{if(B.b.B(k,s))s.$1(a)}catch(n){r=A.aj(n)
q=A.aA(n)
m=A.bj("while executing callbacks for FrameTiming")
l=$.fz()
if(l!=null)l.$1(new A.bz(r,q,"Flutter framework",m,null,!1))}}},
ra(a){this.r$=a
switch(a.a){case 0:case 1:this.Eq(!0)
break
case 2:case 3:this.Eq(!1)
break}},
Ck(){if(this.y$)return
this.y$=!0
A.c2(B.r,this.gWd())},
We(){this.y$=!1
if(this.a03())this.Ck()},
a03(){var s,r,q,p,o,n,m=this,l="No element",k=m.x$,j=k.c===0
if(j||m.b>0)return!1
if(j)A.U(A.a6(l))
s=k.po(0)
j=s.b
if(m.w$.$2$priority$scheduler(j,m)){try{if(k.c===0)A.U(A.a6(l));++k.d
k.po(0)
p=k.c-1
o=k.po(p)
k.b[p]=null
k.c=p
if(p>0)k.Pv(o,0)
s.a4q()}catch(n){r=A.aj(n)
q=A.aA(n)
j=A.bj("during a task callback")
A.dI(new A.bz(r,q,"scheduler library",j,null,!1))}return k.c!==0}return!1},
p9(a,b){var s,r=this
r.hn()
s=++r.z$
r.Q$.l(0,s,new A.q8(a))
return r.z$},
p8(a){return this.p9(a,!1)},
gGS(){var s=this
if(s.ay$==null){if(s.CW$===B.ct)s.hn()
s.ay$=new A.aY(new A.a7($.a9,t.U),t.V)
s.ax$.push(new A.a3Z(s))}return s.ay$.a},
gHc(){return this.cx$},
Eq(a){if(this.cx$===a)return
this.cx$=a
if(a)this.hn()},
GT(){var s=$.aM()
if(s.w==null){s.w=this.gS2()
s.x=$.a9}if(s.y==null){s.y=this.gSu()
s.z=$.a9}},
xh(){switch(this.CW$.a){case 0:case 4:this.hn()
return
case 1:case 2:case 3:return}},
hn(){var s,r=this
if(!r.ch$)s=!(A.dq.prototype.gHc.call(r)&&r.c3$)
else s=!0
if(s)return
r.GT()
$.aM().hn()
r.ch$=!0},
Ke(){if(this.ch$)return
this.GT()
$.aM().hn()
this.ch$=!0},
tu(){var s,r,q=this
if(q.cy$||q.CW$!==B.ct)return
q.cy$=!0
s=new A.KF(null,0,A.a([],t.vS))
s.pb(0,"Warm-up frame")
r=q.ch$
A.c2(B.r,new A.a40(q))
A.c2(B.r,new A.a41(q,r))
q.a1N(new A.a42(q,s))},
a37(){var s=this
s.dx$=s.Bl(s.dy$)
s.db$=null},
Bl(a){var s=this.db$,r=s==null?B.r:new A.aK(a.a-s.a)
return A.c_(B.d.b0(r.a/$.ao8)+this.dx$.a,0,0)},
S3(a){if(this.cy$){this.go$=!0
return}this.Hg(a)},
Sv(){var s=this
if(s.go$){s.go$=!1
s.ax$.push(new A.a3Y(s))
return}s.Hi()},
Hg(a){var s,r,q=this,p=q.id$,o=p==null
if(!o)p.pb(0,"Frame")
if(q.db$==null)q.db$=a
r=a==null
q.fr$=q.Bl(r?q.dy$:a)
if(!r)q.dy$=a
q.ch$=!1
try{if(!o)p.pb(0,"Animate")
q.CW$=B.SY
s=q.Q$
q.Q$=A.u(t.S,t.b1)
J.np(s,new A.a4_(q))
q.as$.V(0)}finally{q.CW$=B.SZ}},
a35(a){var s=this,r=s.k1$,q=r==null
if(!q&&r!==a)return null
if(r===a)++s.k2$
else if(q){s.k1$=a
s.k2$=1}return new A.a1x(s.gQC())},
QD(){if(--this.k2$===0){this.k1$=null
$.aM()}},
Hi(){var s,r,q,p,o,n,m,l=this,k=l.id$,j=k==null
if(!j)k.r6(0)
try{l.CW$=B.zZ
for(p=l.at$,o=p.length,n=0;n<p.length;p.length===o||(0,A.R)(p),++n){s=p[n]
m=l.fr$
m.toString
l.D8(s,m)}l.CW$=B.T_
p=l.ax$
r=A.az(p,!0,t.qP)
B.b.V(p)
for(p=r,o=p.length,n=0;n<p.length;p.length===o||(0,A.R)(p),++n){q=p[n]
m=l.fr$
m.toString
l.D8(q,m)}}finally{l.CW$=B.ct
if(!j)k.r6(0)
l.fr$=null}},
D9(a,b,c){var s,r,q,p
try{a.$1(b)}catch(q){s=A.aj(q)
r=A.aA(q)
p=A.bj("during a scheduler callback")
A.dI(new A.bz(s,r,"scheduler library",p,null,!1))}},
D8(a,b){return this.D9(a,b,null)}}
A.a3Z.prototype={
$1(a){var s=this.a
s.ay$.dS(0)
s.ay$=null},
$S:2}
A.a40.prototype={
$0(){this.a.Hg(null)},
$S:0}
A.a41.prototype={
$0(){var s=this.a
s.Hi()
s.a37()
s.cy$=!1
if(this.b)s.hn()},
$S:0}
A.a42.prototype={
$0(){var s=0,r=A.a3(t.H),q=this
var $async$$0=A.X(function(a,b){if(a===1)return A.a0(b,r)
while(true)switch(s){case 0:s=2
return A.a_(q.a.gGS(),$async$$0)
case 2:q.b.r6(0)
return A.a1(null,r)}})
return A.a2($async$$0,r)},
$S:35}
A.a3Y.prototype={
$1(a){var s=this.a
s.ch$=!1
s.hn()},
$S:2}
A.a4_.prototype={
$2(a,b){var s,r,q=this.a
if(!q.as$.B(0,a)){s=b.a
r=q.fr$
r.toString
q.D9(s,r,b.b)}},
$S:240}
A.pG.prototype={
syh(a,b){var s=this
if(b===s.b)return
s.b=b
if(b)s.zo()
else if(s.a!=null&&s.e==null)s.e=$.bP.p9(s.gvO(),!1)},
ga1u(){if(this.a==null)return!1
if(this.b)return!1
var s=$.bP
s.toString
if(A.dq.prototype.gHc.call(s)&&s.c3$)return!0
if($.bP.CW$!==B.ct)return!0
return!1},
mq(a){var s,r,q=this
q.a=new A.mJ(new A.aY(new A.a7($.a9,t.U),t.V))
if(!q.b)s=q.e==null
else s=!1
if(s)q.e=$.bP.p9(q.gvO(),!1)
s=$.bP
r=s.CW$.a
if(r>0&&r<4){s=s.fr$
s.toString
q.c=s}s=q.a
s.toString
return s},
mr(a,b){var s=this,r=s.a
if(r==null)return
s.c=s.a=null
s.zo()
if(b)r.BD(s)
else r.EV()},
fH(a){return this.mr(a,!1)},
Xc(a){var s,r=this
r.e=null
s=r.c
if(s==null)s=r.c=a
r.d.$1(new A.aK(a.a-s.a))
if(!r.b&&r.a!=null&&r.e==null)r.e=$.bP.p9(r.gvO(),!0)},
zo(){var s,r=this.e
if(r!=null){s=$.bP
s.Q$.u(0,r)
s.as$.C(0,r)
this.e=null}},
m(){var s=this,r=s.a
if(r!=null){s.a=null
s.zo()
r.BD(s)}},
a3u(a,b){var s=""+"Ticker()"
return s.charCodeAt(0)==0?s:s},
j(a){return this.a3u(a,!1)}}
A.mJ.prototype={
EV(){this.c=!0
this.a.dS(0)
var s=this.b
if(s!=null)s.dS(0)},
BD(a){var s
this.c=!1
s=this.b
if(s!=null)s.hD(new A.wV(a))},
Jt(a){var s,r,q=this,p=new A.a8_(a)
if(q.b==null){s=q.b=new A.aY(new A.a7($.a9,t.U),t.V)
r=q.c
if(r!=null)if(r)s.dS(0)
else s.hD(B.Y4)}q.b.a.dF(p,p,t.H)},
l5(a,b){return this.a.a.l5(a,b)},
ju(a){return this.l5(a,null)},
dF(a,b,c){return this.a.a.dF(a,b,c)},
aS(a,b){return this.dF(a,null,b)},
eY(a){return this.a.a.eY(a)},
j(a){var s=A.bL(this),r=this.c
if(r==null)r="active"
else r=r?"complete":"canceled"
return"<optimized out>#"+s+"("+r+")"},
$iah:1}
A.a8_.prototype={
$1(a){this.a.$0()},
$S:17}
A.wV.prototype={
j(a){var s=this.a
if(s!=null)return"This ticker was canceled: "+s.j(0)
return'The ticker was canceled before the "orCancel" property was first used.'},
$ibI:1}
A.a4t.prototype={}
A.wb.prototype={
j(a){return"SemanticsTag("+this.a+")"}}
A.cl.prototype={
W(a,b){var s,r,q,p,o,n,m,l=this.a,k=l.length
if(k===0)return b
s=b.a
if(s.length===0)return this
r=A.az(this.b,!0,t.lS)
q=b.b
p=q.length
if(p!==0)for(o=0;o<q.length;q.length===p||(0,A.R)(q),++o){n=q[o]
m=n.a
r.push(n.Gf(new A.et(m.a+k,m.b+k)))}return new A.cl(l+s,r)},
k(a,b){if(b==null)return!1
return J.S(b)===A.A(this)&&b instanceof A.cl&&b.a===this.a&&A.cM(b.b,this.b)},
gv(a){return A.Y(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"AttributedString('"+this.a+"', attributes: "+A.l(this.b)+")"}}
A.JO.prototype={
bP(){return"SemanticsData"},
k(a,b){var s=this
if(b==null)return!1
return b instanceof A.JO&&b.a===s.a&&b.b===s.b&&b.c.k(0,s.c)&&b.d.k(0,s.d)&&b.e.k(0,s.e)&&b.f.k(0,s.f)&&b.r.k(0,s.r)&&b.w===s.w&&b.x==s.x&&b.cx.k(0,s.cx)&&A.ajo(b.cy,s.cy)&&b.Q==s.Q&&b.as==s.as&&b.at==s.at&&b.ax==s.ax&&J.f(b.db,s.db)&&b.dx===s.dx&&b.dy===s.dy&&A.aw6(b.fr,s.fr)},
gv(a){var s=this,r=A.cE(s.fr)
return A.Y(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.cx,s.cy,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,A.Y(s.CW,s.db,s.dx,s.dy,r,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a))}}
A.PI.prototype={}
A.JQ.prototype={
bP(){return"SemanticsProperties"}}
A.bZ.prototype={
sbg(a,b){var s
if(!A.auB(this.r,b)){s=A.ahN(b)
this.r=s?null:b
this.hy()}},
saL(a,b){if(!this.w.k(0,b)){this.w=b
this.hy()}},
sHU(a){if(this.as===a)return
this.as=a
this.hy()},
VZ(a){var s,r,q,p,o,n,m,l=this,k=l.ax
if(k!=null)for(s=k.length,r=0;r<s;++r)k[r].ch=!0
for(k=a.length,r=0;r<k;++r)a[r].ch=!1
k=l.ax
if(k!=null)for(s=k.length,q=t.aa,p=!1,r=0;r<k.length;k.length===s||(0,A.R)(k),++r){o=k[r]
if(o.ch){n=J.cw(o)
if(q.a(A.I.prototype.gaH.call(n,o))===l){o.c=null
if(l.b!=null)o.ah(0)}p=!0}}else p=!1
for(k=a.length,s=t.aa,r=0;r<a.length;a.length===k||(0,A.R)(a),++r){o=a[r]
q=J.cw(o)
if(s.a(A.I.prototype.gaH.call(q,o))!==l){if(s.a(A.I.prototype.gaH.call(q,o))!=null){q=s.a(A.I.prototype.gaH.call(q,o))
if(q!=null){o.c=null
if(q.b!=null)o.ah(0)}}o.c=l
q=l.b
if(q!=null)o.aq(q)
q=o.a
n=l.a
if(q<=n){o.a=n+1
o.iT()}p=!0}}if(!p&&l.ax!=null)for(k=l.ax,s=k.length,m=0;m<s;++m)if(k[m].e!==a[m].e){p=!0
break}l.ax=a
if(p)l.hy()},
ga0I(){var s=this.ax
s=s==null?null:s.length!==0
return s===!0},
w3(a){var s,r,q,p=this.ax
if(p!=null)for(s=p.length,r=0;r<p.length;p.length===s||(0,A.R)(p),++r){q=p[r]
if(!a.$1(q)||!q.w3(a))return!1}return!0},
iT(){var s=this.ax
if(s!=null)B.b.Y(s,this.gIO())},
aq(a){var s,r,q,p=this
p.tK(a)
for(s=a.c;s.T(0,p.e);)p.e=$.a4K=($.a4K+1)%65535
s.l(0,p.e,p)
a.d.u(0,p)
if(p.CW){p.CW=!1
p.hy()}s=p.ax
if(s!=null)for(r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q)s[q].aq(a)},
ah(a){var s,r,q,p,o,n=this,m=t.nU
m.a(A.I.prototype.gbj.call(n)).c.u(0,n.e)
m.a(A.I.prototype.gbj.call(n)).d.C(0,n)
n.dl(0)
m=n.ax
if(m!=null)for(s=m.length,r=t.aa,q=0;q<m.length;m.length===s||(0,A.R)(m),++q){p=m[q]
o=J.cw(p)
if(r.a(A.I.prototype.gaH.call(o,p))===n)o.ah(p)}n.hy()},
hy(){var s=this
if(s.CW)return
s.CW=!0
if(s.b!=null)t.nU.a(A.I.prototype.gbj.call(s)).b.C(0,s)},
j_(a,b,c){var s,r=this
if(c==null)c=$.agz()
if(r.fr.k(0,c.p4))if(r.id.k(0,c.ry))if(r.k2===c.x2)if(r.k3===c.xr)if(r.fx.k(0,c.R8))if(r.fy.k(0,c.RG))if(r.go.k(0,c.rx))if(r.k1===c.to)if(r.dy===c.aV)if(r.ok==c.y1)if(r.p1==c.id)if(r.RG==c.ao)if(r.rx==c.ar)if(r.ry==c.al)if(r.db===c.f)if(r.Q==c.k1)s=r.at!==c.p2
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
if(s)r.hy()
r.fr=c.p4
r.fx=c.R8
r.fy=c.RG
r.go=c.rx
r.id=c.ry
r.k1=c.to
r.k4=c.x1
r.k2=c.x2
r.k3=c.xr
r.dy=c.aV
r.ok=c.y1
r.p1=c.id
r.cx=A.oz(c.e,t.nS,t.BT)
r.cy=A.oz(c.p3,t.zN,t.M)
r.db=c.f
r.p2=c.y2
r.RG=c.ao
r.rx=c.ar
r.ry=c.al
r.at=c.p2
r.p4=c.k2
r.R8=c.k3
r.Q=c.k1
r.to=c.k4
r.x1=c.ok
r.x2=c.p1
r.VZ(b==null?B.h4:b)},
a3G(a,b){return this.j_(a,null,b)},
K2(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7={}
a7.a=a6.dy
a7.b=a6.db
a7.c=a6.fr
a7.d=a6.fx
a7.e=a6.fy
a7.f=a6.go
a7.r=a6.id
a7.w=a6.k1
a7.x=a6.ok
s=a6.dx
a7.y=s==null?null:A.iT(s,t.xJ)
a7.z=a6.p2
a7.Q=a6.p4
a7.as=a6.R8
a7.at=a6.RG
a7.ax=a6.rx
a7.ay=a6.ry
a7.ch=a6.to
a7.CW=a6.x1
a7.cx=a6.x2
r=a6.k2
a7.cy=a6.k3
q=A.aE(t.S)
for(s=a6.cy,s=A.iR(s,s.r);s.q();)q.C(0,A.akK(s.d))
a6.k4!=null
if(a6.at)a6.w3(new A.a4L(a7,a6,q))
s=a7.a
p=a7.b
o=a7.c
n=a7.d
m=a7.e
l=a7.f
k=a7.r
j=a7.w
i=a7.x
h=a6.w
g=a6.r
f=a7.cy
e=a7.y
d=a7.z
c=a7.Q
b=a7.as
a=a7.at
a0=a7.ax
a1=a7.ay
a2=a7.ch
a3=a7.CW
a4=a7.cx
a5=A.az(q,!0,q.$ti.c)
B.b.fG(a5)
return new A.JO(s,p,o,n,m,l,k,j,i,d,c,b,a,a0,a1,a2,a3,a4,h,e,g,r,f,a5)},
Pj(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.K2()
if(!a.ga0I()||a.at){s=$.aps()
r=s}else{q=a.ax.length
p=a.PY()
s=new Int32Array(q)
for(o=0;o<q;++o)s[o]=p[o].e
r=new Int32Array(q)
for(o=q-1,n=a.ax;o>=0;--o)r[o]=n[q-o-1].e}n=a0.fr
m=n.length
if(m!==0){l=new Int32Array(m)
for(o=0;o<n.length;++o){m=n[o]
l[o]=m
a2.C(0,m)}}else l=null
n=a.e
m=a0.c
k=a0.d
j=a0.e
i=a0.f
h=a0.r
g=a0.Q
if(g==null)g=0
f=a0.as
if(f==null)f=0/0
e=a0.at
if(e==null)e=0/0
d=a0.ax
if(d==null)d=0/0
c=a0.db
c=c==null?null:c.a
if(c==null)c=$.apu()
b=l==null?$.apt():l
a1.a.push(new A.JP(n,a0.a,a0.b,-1,-1,-1,0,g,f,e,d,a0.cx,m.a,m.b,h.a,h.b,k.a,k.b,j.a,j.b,i.a,i.b,a0.w,a0.x,A.ajq(c),s,r,b,a0.dy))
a.CW=!1},
PY(){var s,r,q,p,o,n,m,l,k,j=this,i=j.ok,h=t.aa,g=h.a(A.I.prototype.gaH.call(j,j))
while(!0){s=i==null
if(!(s&&g!=null))break
i=g.ok
g=h.a(A.I.prototype.gaH.call(g,g))}r=j.ax
if(!s){r.toString
r=A.ayg(r,i)}h=t.Dr
q=A.a([],h)
p=A.a([],h)
for(o=null,n=0;n<r.length;++n){m=r[n]
l=m.p1
o=n>0?r[n-1].p1:null
if(n!==0)if(J.S(l)===J.S(o)){if(l!=null)o.toString
k=!0}else k=!1
else k=!0
if(!k&&p.length!==0){if(o!=null){if(!!p.immutable$list)A.U(A.N("sort"))
h=p.length-1
if(h-0<=32)A.K9(p,0,h,J.aj_())
else A.K8(p,0,h,J.aj_())}B.b.I(q,p)
B.b.V(p)}p.push(new A.ju(m,l,n))}if(o!=null)B.b.fG(p)
B.b.I(q,p)
h=t.wg
return A.az(new A.aH(q,new A.a4J(),h),!0,h.h("bn.E"))},
Kp(a){if(this.b==null)return
B.l6.e2(0,a.Jg(this.e))},
bP(){return"SemanticsNode#"+this.e},
a3q(a,b,c){return new A.PI(a,this,b,!0,!0,null,c)},
Je(a){return this.a3q(B.Eg,null,a)}}
A.a4L.prototype={
$1(a){var s,r,q=this.a
q.a=q.a|a.dy
q.b=q.b|a.db
if(q.x==null)q.x=a.ok
q.z=a.p2
q.Q=a.p4
if(q.as==null)q.as=a.R8
if(q.at==null)q.at=a.RG
if(q.ax==null)q.ax=a.rx
if(q.ay==null)q.ay=a.ry
q.ch=a.to
q.CW=a.x1
q.cx=a.x2
s=q.d
if(s.a==="")q.d=a.fx
s=q.e
if(s.a==="")q.e=a.fy
s=q.f
if(s.a==="")q.f=a.go
if(q.w==="")q.w=a.k1
s=a.dx
if(s!=null){r=q.y;(r==null?q.y=A.aE(t.xJ):r).I(0,s)}for(s=this.b.cy,s=A.iR(s,s.r),r=this.c;s.q();)r.C(0,A.akK(s.d))
a.k4!=null
s=q.c
r=q.x
q.c=A.aef(a.fr,a.ok,s,r)
r=q.r
s=q.x
q.r=A.aef(a.id,a.ok,r,s)
q.cy=Math.max(q.cy,a.k3+a.k2)
return!0},
$S:61}
A.a4J.prototype={
$1(a){return a.a},
$S:242}
A.jm.prototype={
b3(a,b){return B.d.b3(this.b,b.b)},
$ibH:1}
A.ha.prototype={
b3(a,b){return B.d.b3(this.a,b.a)},
KP(){var s,r,q,p,o,n,m,l,k,j=A.a([],t.iV)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q){p=s[q]
o=p.w
j.push(new A.jm(!0,A.ng(p,new A.y(o.a- -0.1,o.b- -0.1)).a,p))
j.push(new A.jm(!1,A.ng(p,new A.y(o.c+-0.1,o.d+-0.1)).a,p))}B.b.fG(j)
n=A.a([],t.dK)
for(s=j.length,r=this.b,o=t.W,m=null,l=0,q=0;q<j.length;j.length===s||(0,A.R)(j),++q){k=j[q]
if(k.a){++l
if(m==null)m=new A.ha(k.b,r,A.a([],o))
m.c.push(k.c)}else --l
if(l===0){m.toString
n.push(m)
m=null}}B.b.fG(n)
if(r===B.aK){s=t.FF
n=A.az(new A.cc(n,s),!0,s.h("bn.E"))}s=A.an(n).h("iG<1,bZ>")
return A.az(new A.iG(n,new A.ad4(),s),!0,s.h("p.E"))},
KO(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this.c,a4=a3.length
if(a4<=1)return a3
s=t.S
r=A.u(s,t.ju)
q=A.u(s,s)
for(p=this.b,o=p===B.aK,p=p===B.ae,n=a4,m=0;m<n;g===a4||(0,A.R)(a3),++m,n=g){l=a3[m]
r.l(0,l.e,l)
n=l.w
k=n.a
j=n.b
i=A.ng(l,new A.y(k+(n.c-k)/2,j+(n.d-j)/2))
for(n=a3.length,k=i.a,j=i.b,h=0;g=a3.length,h<g;a3.length===n||(0,A.R)(a3),++h){f=a3[h]
if((l==null?f==null:l===f)||q.i(0,f.e)===l.e)continue
g=f.w
e=g.a
d=g.b
c=A.ng(f,new A.y(e+(g.c-e)/2,d+(g.d-d)/2))
b=Math.atan2(c.b-j,c.a-k)
a=p&&-0.7853981633974483<b&&b<2.356194490192345
if(o)a0=b<-2.356194490192345||b>2.356194490192345
else a0=!1
if(a||a0)q.l(0,l.e,f.e)}}a1=A.a([],t.t)
a2=A.a(a3.slice(0),A.an(a3))
B.b.dj(a2,new A.ad0())
new A.aH(a2,new A.ad1(),A.an(a2).h("aH<1,i>")).Y(0,new A.ad3(A.aE(s),q,a1))
a3=t.sC
a3=A.az(new A.aH(a1,new A.ad2(r),a3),!0,a3.h("bn.E"))
a4=A.an(a3).h("cc<1>")
return A.az(new A.cc(a3,a4),!0,a4.h("bn.E"))}}
A.ad4.prototype={
$1(a){return a.KO()},
$S:111}
A.ad0.prototype={
$2(a,b){var s,r,q=a.w,p=A.ng(a,new A.y(q.a,q.b))
q=b.w
s=A.ng(b,new A.y(q.a,q.b))
r=B.d.b3(p.b,s.b)
if(r!==0)return-r
return-B.d.b3(p.a,s.a)},
$S:62}
A.ad3.prototype={
$1(a){var s=this,r=s.a
if(r.B(0,a))return
r.C(0,a)
r=s.b
if(r.T(0,a)){r=r.i(0,a)
r.toString
s.$1(r)}s.c.push(a)},
$S:30}
A.ad1.prototype={
$1(a){return a.e},
$S:245}
A.ad2.prototype={
$1(a){var s=this.a.i(0,a)
s.toString
return s},
$S:246}
A.aee.prototype={
$1(a){return a.KP()},
$S:111}
A.ju.prototype={
b3(a,b){var s,r=this.b
if(r==null||b.b==null)return this.c-b.c
r.toString
s=b.b
s.toString
return r.b3(0,s)},
$ibH:1}
A.wa.prototype={
Kq(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.b
if(e.a===0)return
s=A.aE(t.S)
r=A.a([],t.W)
for(q=t.aa,p=A.n(e).h("aI<1>"),o=p.h("p.E"),n=f.d;e.a!==0;){m=A.az(new A.aI(e,new A.a4O(f),p),!0,o)
e.V(0)
n.V(0)
l=new A.a4P()
if(!!m.immutable$list)A.U(A.N("sort"))
k=m.length-1
if(k-0<=32)A.K9(m,0,k,l)
else A.K8(m,0,k,l)
B.b.I(r,m)
for(l=m.length,j=0;j<m.length;m.length===l||(0,A.R)(m),++j){i=m[j]
if(i.at||i.as){k=J.cw(i)
if(q.a(A.I.prototype.gaH.call(k,i))!=null){h=q.a(A.I.prototype.gaH.call(k,i))
h=h.at||h.as}else h=!1
if(h){q.a(A.I.prototype.gaH.call(k,i)).hy()
i.CW=!1}}}}B.b.dj(r,new A.a4Q())
$.a4u.toString
g=new A.a4S(A.a([],t.fr))
for(q=r.length,j=0;j<r.length;r.length===q||(0,A.R)(r),++j){i=r[j]
if(i.CW&&i.b!=null)i.Pj(g,s)}e.V(0)
for(e=A.ig(s,s.r),q=A.n(e).c;e.q();){p=e.d
$.akH.i(0,p==null?q.a(p):p).toString}f.a.$1(new A.JS(g.a))
f.aB()},
RN(a,b){var s,r={},q=r.a=this.c.i(0,a)
if(q!=null)s=(q.at||q.as)&&!q.cx.T(0,b)
else s=!1
if(s)q.w3(new A.a4N(r,b))
s=r.a
if(s==null||!s.cx.T(0,b))return null
return r.a.cx.i(0,b)},
a2k(a,b,c){var s=this.RN(a,b)
if(s!=null){s.$1(c)
return}if(b===B.Tl&&this.c.i(0,a).f!=null)this.c.i(0,a).f.$0()},
j(a){return"<optimized out>#"+A.bL(this)}}
A.a4O.prototype={
$1(a){return!this.a.d.B(0,a)},
$S:61}
A.a4P.prototype={
$2(a,b){return a.a-b.a},
$S:62}
A.a4Q.prototype={
$2(a,b){return a.a-b.a},
$S:62}
A.a4N.prototype={
$1(a){if(a.cx.T(0,this.b)){this.a.a=a
return!1}return!0},
$S:61}
A.a4v.prototype={
jb(a,b){var s=this
s.e.l(0,a,b)
s.f=s.f|a.a
s.d=!0},
dK(a,b){this.jb(a,new A.a4w(b))},
siP(a){a.toString
this.dK(B.dp,a)},
sjT(a){a.toString
this.dK(B.A3,a)},
srP(a){this.dK(B.ds,a)},
srN(a){this.dK(B.Tm,a)},
srQ(a){this.dK(B.dt,a)},
srR(a){this.dK(B.dq,a)},
srO(a){this.dK(B.dr,a)},
syy(a){this.dK(B.A4,a)},
syp(a){this.dK(B.A2,a)},
sym(a,b){this.dK(B.To,b)},
syn(a,b){this.dK(B.Ts,b)},
syG(a,b){this.dK(B.Ti,b)},
syE(a){this.jb(B.Tp,new A.a4z(a))},
syC(a){this.jb(B.Tg,new A.a4x(a))},
syF(a){this.jb(B.Tq,new A.a4A(a))},
syD(a){this.jb(B.Th,new A.a4y(a))},
syJ(a){this.jb(B.Tj,new A.a4B(a))},
syK(a){this.jb(B.Tk,new A.a4C(a))},
syq(a){this.dK(B.Tn,a)},
syr(a){this.dK(B.Tr,a)},
sKh(a){return},
sKi(a){if(a==this.k3)return
this.k3=a
this.d=!0},
sya(a){return},
swI(a){return},
shI(a,b){if(b===this.x2)return
this.x2=b
this.d=!0},
FF(a){var s=this.ad;(s==null?this.ad=A.aE(t.xJ):s).C(0,a)},
b5(a,b){var s=this,r=s.aV,q=a.a
if(b)s.aV=r|q
else s.aV=r&~q
s.d=!0},
HR(a){var s,r=this
if(a==null||!a.d||!r.d)return!0
if((r.f&a.f)!==0)return!1
if((r.aV&a.aV)!==0)return!1
if(r.R8.a.length!==0)s=a.R8.a.length!==0
else s=!1
if(s)return!1
return!0},
jq(a){var s,r,q=this
if(!a.d)return
q.e.I(0,a.e)
q.p3.I(0,a.p3)
q.f=q.f|a.f
q.aV=q.aV|a.aV
q.y2=a.y2
if(q.ao==null)q.ao=a.ao
if(q.ar==null)q.ar=a.ar
if(q.al==null)q.al=a.al
if(q.x1==null)q.x1=a.x1
if(q.k1==null)q.k1=a.k1
if(q.k3==null)q.k3=a.k3
q.k2=a.k2
q.k4=a.k4
q.ok=a.ok
q.p1=a.p1
s=q.y1
if(s==null){s=q.y1=a.y1
q.d=!0}if(q.id==null)q.id=a.id
r=q.p4
q.p4=A.aef(a.p4,a.y1,r,s)
s=q.R8
if(s.a==="")q.R8=a.R8
s=q.RG
if(s.a==="")q.RG=a.RG
s=q.rx
if(s.a==="")q.rx=a.rx
s=q.ry
r=q.y1
q.ry=A.aef(a.ry,a.y1,s,r)
if(q.to==="")q.to=a.to
q.xr=Math.max(q.xr,a.xr+a.x2)
q.d=q.d||a.d},
Zp(){var s=this,r=A.ph()
r.a=s.a
r.b=s.b
r.c=s.c
r.d=s.d
r.p2=s.p2
r.y1=s.y1
r.id=s.id
r.p4=s.p4
r.RG=s.RG
r.R8=s.R8
r.rx=s.rx
r.ry=s.ry
r.x1=s.x1
r.to=s.to
r.x2=s.x2
r.xr=s.xr
r.aV=s.aV
r.ad=s.ad
r.y2=s.y2
r.ao=s.ao
r.ar=s.ar
r.al=s.al
r.f=s.f
r.k1=s.k1
r.k3=s.k3
r.k2=s.k2
r.k4=s.k4
r.ok=s.ok
r.p1=s.p1
r.e.I(0,s.e)
r.p3.I(0,s.p3)
return r}}
A.a4w.prototype={
$1(a){this.a.$0()},
$S:7}
A.a4z.prototype={
$1(a){a.toString
this.a.$1(A.nc(a))},
$S:7}
A.a4x.prototype={
$1(a){a.toString
this.a.$1(A.nc(a))},
$S:7}
A.a4A.prototype={
$1(a){a.toString
this.a.$1(A.nc(a))},
$S:7}
A.a4y.prototype={
$1(a){a.toString
this.a.$1(A.nc(a))},
$S:7}
A.a4B.prototype={
$1(a){var s,r,q
a.toString
s=J.agM(t.G.a(a),t.N,t.S)
r=s.i(0,"base")
r.toString
q=s.i(0,"extent")
q.toString
this.a.$1(A.a7V(B.I,r,q,!1))},
$S:7}
A.a4C.prototype={
$1(a){a.toString
this.a.$1(A.bD(a))},
$S:7}
A.DB.prototype={
G(){return"DebugSemanticsDumpOrder."+this.b}}
A.pi.prototype={
b3(a,b){var s=this.a_m(b)
return s},
$ibH:1}
A.vb.prototype={
a_m(a){var s=a.b===this.b
if(s)return 0
return B.f.b3(this.b,a.b)}}
A.PH.prototype={}
A.PJ.prototype={}
A.PK.prototype={}
A.a4E.prototype={
Jg(a){var s=A.aX(["type",this.a,"data",this.oY()],t.N,t.z)
if(a!=null)s.l(0,"nodeId",a)
return s},
a3s(){return this.Jg(null)},
j(a){var s,r,q,p=A.a([],t.s),o=this.oY(),n=J.ak5(o.gbp(o))
B.b.fG(n)
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.R)(n),++r){q=n[r]
p.push(A.l(q)+": "+A.l(o.i(0,q)))}return"SemanticsEvent("+B.b.b7(p,", ")+")"}}
A.a81.prototype={
oY(){return A.aX(["message",this.b],t.N,t.z)}}
A.a_S.prototype={
oY(){return B.y6}}
A.a7s.prototype={
oY(){return B.y6}}
A.An.prototype={
jP(a,b){return this.a1L(a,!0)},
a1L(a,b){var s=0,r=A.a3(t.N),q,p=this,o
var $async$jP=A.X(function(c,d){if(c===1)return A.a0(d,r)
while(true)switch(s){case 0:s=3
return A.a_(p.cC(0,a),$async$jP)
case 3:o=d
if(o.byteLength<51200){q=B.a3.dU(0,A.ci(o.buffer,0,null))
s=1
break}q=A.Sq(A.azx(),o,'UTF8 decode for "'+a+'"',t.B6,t.N)
s=1
break
case 1:return A.a1(q,r)}})
return A.a2($async$jP,r)},
j(a){return"<optimized out>#"+A.bL(this)+"()"}}
A.TU.prototype={
jP(a,b){return this.KX(a,!0)},
a1M(a,b,c){var s,r={},q=this.b
if(q.T(0,a)){r=q.i(0,a)
r.toString
return c.h("ah<0>").a(r)}r.a=r.b=null
this.jP(a,!1).aS(b,c).aS(new A.TV(r,this,a,c),t.H)
s=r.a
if(s!=null)return s
s=new A.a7($.a9,c.h("a7<0>"))
r.b=new A.aY(s,c.h("aY<0>"))
q.l(0,a,s)
return r.b.a}}
A.TV.prototype={
$1(a){var s=this,r=new A.bo(a,s.d.h("bo<0>")),q=s.a
q.a=r
s.b.b.l(0,s.c,r)
q=q.b
if(q!=null)q.cg(0,a)},
$S(){return this.d.h("aD(0)")}}
A.a1D.prototype={
cC(a,b){var s,r=B.bY.dT(A.anl(A.R7(B.h5,b,B.a3,!1)).e),q=$.h1.bb$
q===$&&A.b()
s=q.ty(0,"flutter/assets",A.iZ(r.buffer,0,null)).aS(new A.a1E(b),t.B6)
return s},
rA(a){return this.a1J(a)},
a1J(a){var s=0,r=A.a3(t.gG),q,p=this,o
var $async$rA=A.X(function(b,c){if(b===1)return A.a0(c,r)
while(true)switch(s){case 0:s=3
return A.a_(p.cC(0,a),$async$rA)
case 3:o=c
q=A.ZV(A.ci(o.buffer,0,null))
s=1
break
case 1:return A.a1(q,r)}})
return A.a2($async$rA,r)}}
A.a1E.prototype={
$1(a){if(a==null)throw A.d(A.ahr(A.a([A.ayD(this.a),A.bj("The asset does not exist or has empty data.")],t.F)))
return a},
$S:247}
A.To.prototype={}
A.pj.prototype={
o7(){var s=$.SH()
s.a.V(0)
s.b.V(0)},
iE(a){return this.a0w(a)},
a0w(a){var s=0,r=A.a3(t.H),q,p=this
var $async$iE=A.X(function(b,c){if(b===1)return A.a0(c,r)
while(true)switch(s){case 0:switch(A.bD(J.aR(t.a.a(a),"type"))){case"memoryPressure":p.o7()
break}s=1
break
case 1:return A.a1(q,r)}})
return A.a2($async$iE,r)},
Pe(){var s=A.bd("controller")
s.sbU(A.pt(null,new A.a4V(s),null,!1,t.xe))
return J.ark(s.aC())},
a2G(){if(this.r$!=null)return
$.aM()
var s=A.amp("AppLifecycleState.resumed")
if(s!=null)this.ra(s)},
uV(a){return this.SP(a)},
SP(a){var s=0,r=A.a3(t.dR),q,p=this,o
var $async$uV=A.X(function(b,c){if(b===1)return A.a0(c,r)
while(true)switch(s){case 0:a.toString
o=A.amp(a)
o.toString
p.ra(o)
q=null
s=1
break
case 1:return A.a1(q,r)}})
return A.a2($async$uV,r)},
uW(a){return this.SY(a)},
SY(a){var s=0,r=A.a3(t.H)
var $async$uW=A.X(function(b,c){if(b===1)return A.a0(c,r)
while(true)switch(s){case 0:t.j.a(a.b)
return A.a1(null,r)}})
return A.a2($async$uW,r)},
$idq:1}
A.a4V.prototype={
$0(){var s=0,r=A.a3(t.H),q=this,p,o,n
var $async$$0=A.X(function(a,b){if(a===1)return A.a0(b,r)
while(true)switch(s){case 0:o=A.bd("rawLicenses")
n=o
s=2
return A.a_($.SH().jP("NOTICES",!1),$async$$0)
case 2:n.sbU(b)
p=q.a
n=J
s=3
return A.a_(A.Sq(A.azD(),o.aC(),"parseLicenses",t.N,t.rh),$async$$0)
case 3:n.np(b,J.arg(p.aC()))
s=4
return A.a_(J.ak0(p.aC()),$async$$0)
case 4:return A.a1(null,r)}})
return A.a2($async$$0,r)},
$S:35}
A.a9C.prototype={
ty(a,b,c){var s=new A.a7($.a9,t.sB)
$.aM().WB(b,c,A.atf(new A.a9D(new A.aY(s,t.BB))))
return s},
Ac(a,b){if(b==null){a=$.SF().a.i(0,a)
if(a!=null)a.e=null}else $.SF().Kw(a,new A.a9E(b))}}
A.a9D.prototype={
$1(a){var s,r,q,p
try{this.a.cg(0,a)}catch(q){s=A.aj(q)
r=A.aA(q)
p=A.bj("during a platform message response callback")
A.dI(new A.bz(s,r,"services library",p,null,!1))}},
$S:16}
A.a9E.prototype={
$2(a,b){return this.JF(a,b)},
JF(a,b){var s=0,r=A.a3(t.H),q=1,p,o=[],n=this,m,l,k,j,i,h
var $async$$2=A.X(function(c,d){if(c===1){p=d
s=q}while(true)switch(s){case 0:i=null
q=3
s=6
return A.a_(n.a.$1(a),$async$$2)
case 6:i=d
o.push(5)
s=4
break
case 3:q=2
h=p
m=A.aj(h)
l=A.aA(h)
j=A.bj("during a platform message callback")
A.dI(new A.bz(m,l,"services library",j,null,!1))
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
b.$1(i)
s=o.pop()
break
case 5:return A.a1(null,r)
case 1:return A.a0(p,r)}})
return A.a2($async$$2,r)},
$S:251}
A.WV.prototype={}
A.Wg.prototype={}
A.Wp.prototype={}
A.E4.prototype={}
A.WX.prototype={}
A.E2.prototype={}
A.Wx.prototype={}
A.VN.prototype={}
A.Wy.prototype={}
A.Ea.prototype={}
A.E0.prototype={}
A.E7.prototype={}
A.Ek.prototype={}
A.Wl.prototype={}
A.WD.prototype={}
A.VV.prototype={}
A.W8.prototype={}
A.VA.prototype={}
A.VZ.prototype={}
A.Ef.prototype={}
A.VC.prototype={}
A.WI.prototype={}
A.ox.prototype={}
A.k8.prototype={}
A.lV.prototype={}
A.k9.prototype={}
A.ua.prototype={}
A.Z9.prototype={
Qx(a){var s,r,q,p,o,n,m,l,k,j
this.d=!0
s=!1
for(n=this.c,m=0;!1;++m){r=n[m]
try{q=r.$1(a)
s=s||q}catch(l){p=A.aj(l)
o=A.aA(l)
k=A.bj("while processing a key handler")
j=$.fz()
if(j!=null)j.$1(new A.bz(p,o,"services library",k,null,!1))}}this.d=!1
return s},
Hk(a){var s,r,q=this,p=a.a,o=a.b
if(a instanceof A.lV){q.a.l(0,p,o)
s=$.aph().i(0,o.a)
if(s!=null){r=q.b
if(r.B(0,s))r.u(0,s)
else r.C(0,s)}}else if(a instanceof A.k9)q.a.u(0,p)
return q.Qx(a)}}
A.u8.prototype={
G(){return"KeyDataTransitMode."+this.b}}
A.u9.prototype={
j(a){return"KeyMessage("+A.l(this.a)+")"}}
A.FA.prototype={
a09(a){var s,r=this,q=r.d
switch((q==null?r.d=B.Fz:q).a){case 0:return!1
case 1:if(a.c===0&&a.d===0)return!1
s=A.au5(a)
if(a.f&&r.e.length===0){r.b.Hk(s)
r.Ca(A.a([s],t.DG),null)}else r.e.push(s)
return!1}},
Ca(a,b){var s,r,q,p,o=this.a
if(o!=null){s=new A.u9(a,b)
try{o=o.$1(s)
return o}catch(p){r=A.aj(p)
q=A.aA(p)
o=A.bj("while processing the key message handler")
A.dI(new A.bz(r,q,"services library",o,null,!1))}}return!1},
xD(a){var s=0,r=A.a3(t.a),q,p=this,o,n,m,l,k,j,i
var $async$xD=A.X(function(b,c){if(b===1)return A.a0(c,r)
while(true)switch(s){case 0:if(p.d==null){p.d=B.Fy
p.c.a.push(p.gQe())}o=A.avG(t.a.a(a))
if(o instanceof A.hU){n=o.c
m=p.f
if(!n.KG()){m.C(0,n.gdh())
l=!1}else{m.u(0,n.gdh())
l=!0}}else if(o instanceof A.oX){n=p.f
m=o.c
if(n.B(0,m.gdh())){n.u(0,m.gdh())
l=!1}else l=!0}else l=!0
if(l){p.c.a0q(o)
for(n=p.e,m=n.length,k=p.b,j=!1,i=0;i<n.length;n.length===m||(0,A.R)(n),++i)j=k.Hk(n[i])||j
j=p.Ca(n,o)||j
B.b.V(n)}else j=!0
q=A.aX(["handled",j],t.N,t.z)
s=1
break
case 1:return A.a1(q,r)}})
return A.a2($async$xD,r)},
Qf(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.c,d=e.gdh(),c=e.gol()
e=this.b.a
s=A.n(e).h("b0<1>")
r=A.iT(new A.b0(e,s),s.h("p.E"))
q=A.a([],t.DG)
p=e.i(0,d)
o=$.h1.dy$
n=a.a
if(n==="")n=f
if(a instanceof A.hU)if(p==null){m=new A.lV(d,c,n,o,!1)
r.C(0,d)}else m=new A.ua(d,p,n,o,!1)
else if(p==null)m=f
else{m=new A.k9(d,p,f,o,!1)
r.u(0,d)}for(s=this.c.d,l=A.n(s).h("b0<1>"),k=l.h("p.E"),j=r.jz(A.iT(new A.b0(s,l),k)),j=j.ga4(j),i=this.e;j.q();){h=j.gF(j)
if(h.k(0,d))q.push(new A.k9(h,c,f,o,!0))
else{g=e.i(0,h)
g.toString
i.push(new A.k9(h,g,f,o,!0))}}for(e=A.iT(new A.b0(s,l),k).jz(r),e=e.ga4(e);e.q();){l=e.gF(e)
k=s.i(0,l)
k.toString
i.push(new A.lV(l,k,f,o,!0))}if(m!=null)i.push(m)
B.b.I(i,q)}}
A.Nu.prototype={}
A.a_D.prototype={}
A.e.prototype={
gv(a){return B.f.gv(this.a)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.S(b)!==A.A(this))return!1
return b instanceof A.e&&b.a===this.a}}
A.j.prototype={
gv(a){return B.f.gv(this.a)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.S(b)!==A.A(this))return!1
return b instanceof A.j&&b.a===this.a}}
A.Nv.prototype={}
A.hI.prototype={
j(a){return"MethodCall("+this.a+", "+A.l(this.b)+")"}}
A.vj.prototype={
j(a){var s=this
return"PlatformException("+s.a+", "+A.l(s.b)+", "+A.l(s.c)+", "+A.l(s.d)+")"},
$ibI:1}
A.uM.prototype={
j(a){return"MissingPluginException("+A.l(this.a)+")"},
$ibI:1}
A.a7f.prototype={
ej(a){if(a==null)return null
return B.cA.dT(A.ci(a.buffer,a.byteOffset,a.byteLength))},
bE(a){if(a==null)return null
return A.iZ(B.bY.dT(a).buffer,0,null)}}
A.a_b.prototype={
bE(a){if(a==null)return null
return B.fD.bE(B.bA.xe(a))},
ej(a){var s
if(a==null)return a
s=B.fD.ej(a)
s.toString
return B.bA.dU(0,s)}}
A.a_d.prototype={
ff(a){var s=B.bz.bE(A.aX(["method",a.a,"args",a.b],t.N,t.X))
s.toString
return s},
fd(a){var s,r,q,p=null,o=B.bz.ej(a)
if(!t.G.b(o))throw A.d(A.bT("Expected method call Map, got "+A.l(o),p,p))
s=J.aL(o)
r=s.i(o,"method")
q=s.i(o,"args")
if(typeof r=="string")return new A.hI(r,q)
throw A.d(A.bT("Invalid method call: "+A.l(o),p,p))},
Gu(a){var s,r,q,p=null,o=B.bz.ej(a)
if(!t.j.b(o))throw A.d(A.bT("Expected envelope List, got "+A.l(o),p,p))
s=J.aL(o)
if(s.gp(o)===1)return s.i(o,0)
if(s.gp(o)===3)if(typeof s.i(o,0)=="string")r=s.i(o,1)==null||typeof s.i(o,1)=="string"
else r=!1
else r=!1
if(r){r=A.bD(s.i(o,0))
q=A.cv(s.i(o,1))
throw A.d(A.ahY(r,s.i(o,2),q,p))}if(s.gp(o)===4)if(typeof s.i(o,0)=="string")if(s.i(o,1)==null||typeof s.i(o,1)=="string")r=s.i(o,3)==null||typeof s.i(o,3)=="string"
else r=!1
else r=!1
else r=!1
if(r){r=A.bD(s.i(o,0))
q=A.cv(s.i(o,1))
throw A.d(A.ahY(r,s.i(o,2),q,A.cv(s.i(o,3))))}throw A.d(A.bT("Invalid envelope: "+A.l(o),p,p))},
nU(a){var s=B.bz.bE([a])
s.toString
return s},
jC(a,b,c){var s=B.bz.bE([a,c,b])
s.toString
return s},
GQ(a,b){return this.jC(a,null,b)}}
A.a6Z.prototype={
bE(a){var s
if(a==null)return null
s=A.a8D(64)
this.cD(0,s,a)
return s.ir()},
ej(a){var s,r
if(a==null)return null
s=new A.vs(a)
r=this.eW(0,s)
if(s.b<a.byteLength)throw A.d(B.ay)
return r},
cD(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i=null
if(c==null)b.cW(0,0)
else if(A.kV(c))b.cW(0,c?1:2)
else if(typeof c=="number"){b.cW(0,6)
b.fM(8)
s=$.cO()
b.d.setFloat64(0,c,B.a2===s)
b.P5(b.e)}else if(A.ne(c)){s=-2147483648<=c&&c<=2147483647
r=b.d
if(s){b.cW(0,3)
s=$.cO()
r.setInt32(0,c,B.a2===s)
b.mB(b.e,0,4)}else{b.cW(0,4)
s=$.cO()
B.eN.Aa(r,0,c,s)}}else if(typeof c=="string"){b.cW(0,7)
s=c.length
q=new Uint8Array(s)
n=0
while(!0){if(!(n<s)){p=i
o=0
break}m=B.c.a0(c,n)
if(m<=127)q[n]=m
else{p=B.bY.dT(B.c.bJ(c,n))
o=n
break}++n}if(p!=null){j.dH(b,o+p.length)
l=q.BYTES_PER_ELEMENT
k=A.dx(0,o,B.f.fL(q.byteLength,l),i,i)
b.jc(A.ci(q.buffer,q.byteOffset+0*l,(k-0)*l))
b.jc(p)}else{j.dH(b,s)
b.jc(q)}}else if(t.uo.b(c)){b.cW(0,8)
j.dH(b,c.length)
b.jc(c)}else if(t.fO.b(c)){b.cW(0,9)
s=c.length
j.dH(b,s)
b.fM(4)
b.jc(A.ci(c.buffer,c.byteOffset,4*s))}else if(t.D4.b(c)){b.cW(0,14)
s=c.length
j.dH(b,s)
b.fM(4)
b.jc(A.ci(c.buffer,c.byteOffset,4*s))}else if(t.cE.b(c)){b.cW(0,11)
s=c.length
j.dH(b,s)
b.fM(8)
b.jc(A.ci(c.buffer,c.byteOffset,8*s))}else if(t.j.b(c)){b.cW(0,12)
s=J.aL(c)
j.dH(b,s.gp(c))
for(s=s.ga4(c);s.q();)j.cD(0,b,s.gF(s))}else if(t.G.b(c)){b.cW(0,13)
s=J.aL(c)
j.dH(b,s.gp(c))
s.Y(c,new A.a7_(j,b))}else throw A.d(A.hg(c,i,i))},
eW(a,b){if(b.b>=b.a.byteLength)throw A.d(B.ay)
return this.hX(b.kd(0),b)},
hX(a,b){var s,r,q,p,o,n,m,l,k=this
switch(a){case 0:return null
case 1:return!0
case 2:return!1
case 3:s=b.b
r=$.cO()
q=b.a.getInt32(s,B.a2===r)
b.b+=4
return q
case 4:return b.tn(0)
case 6:b.fM(8)
s=b.b
r=$.cO()
q=b.a.getFloat64(s,B.a2===r)
b.b+=8
return q
case 5:case 7:p=k.d4(b)
return B.cA.dT(b.ke(p))
case 8:return b.ke(k.d4(b))
case 9:p=k.d4(b)
b.fM(4)
s=b.a
o=A.alL(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+4*p
return o
case 10:return b.tp(k.d4(b))
case 14:p=k.d4(b)
b.fM(4)
s=b.a
r=s.buffer
s=s.byteOffset+b.b
A.Sg(r,s,p)
o=new Float32Array(r,s,p)
b.b=b.b+4*p
return o
case 11:p=k.d4(b)
b.fM(8)
s=b.a
o=A.alJ(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+8*p
return o
case 12:p=k.d4(b)
n=A.b_(p,null,!1,t.X)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.U(B.ay)
b.b=r+1
n[m]=k.hX(s.getUint8(r),b)}return n
case 13:p=k.d4(b)
s=t.X
n=A.u(s,s)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.U(B.ay)
b.b=r+1
r=k.hX(s.getUint8(r),b)
l=b.b
if(l>=s.byteLength)A.U(B.ay)
b.b=l+1
n.l(0,r,k.hX(s.getUint8(l),b))}return n
default:throw A.d(B.ay)}},
dH(a,b){var s,r
if(b<254)a.cW(0,b)
else{s=a.d
if(b<=65535){a.cW(0,254)
r=$.cO()
s.setUint16(0,b,B.a2===r)
a.mB(a.e,0,2)}else{a.cW(0,255)
r=$.cO()
s.setUint32(0,b,B.a2===r)
a.mB(a.e,0,4)}}},
d4(a){var s,r,q=a.kd(0)
switch(q){case 254:s=a.b
r=$.cO()
q=a.a.getUint16(s,B.a2===r)
a.b+=2
return q
case 255:s=a.b
r=$.cO()
q=a.a.getUint32(s,B.a2===r)
a.b+=4
return q
default:return q}}}
A.a7_.prototype={
$2(a,b){var s=this.a,r=this.b
s.cD(0,r,a)
s.cD(0,r,b)},
$S:68}
A.a72.prototype={
ff(a){var s=A.a8D(64)
B.aa.cD(0,s,a.a)
B.aa.cD(0,s,a.b)
return s.ir()},
fd(a){var s,r,q
a.toString
s=new A.vs(a)
r=B.aa.eW(0,s)
q=B.aa.eW(0,s)
if(typeof r=="string"&&s.b>=a.byteLength)return new A.hI(r,q)
else throw A.d(B.mu)},
nU(a){var s=A.a8D(64)
s.cW(0,0)
B.aa.cD(0,s,a)
return s.ir()},
jC(a,b,c){var s=A.a8D(64)
s.cW(0,1)
B.aa.cD(0,s,a)
B.aa.cD(0,s,c)
B.aa.cD(0,s,b)
return s.ir()},
GQ(a,b){return this.jC(a,null,b)},
Gu(a){var s,r,q,p,o,n
if(a.byteLength===0)throw A.d(B.F0)
s=new A.vs(a)
if(s.kd(0)===0)return B.aa.eW(0,s)
r=B.aa.eW(0,s)
q=B.aa.eW(0,s)
p=B.aa.eW(0,s)
o=s.b<a.byteLength?A.cv(B.aa.eW(0,s)):null
if(typeof r=="string")n=(q==null||typeof q=="string")&&s.b>=a.byteLength
else n=!1
if(n)throw A.d(A.ahY(r,p,A.cv(q),o))
else throw A.d(B.F1)}}
A.a0z.prototype={
a00(a,b,c){var s,r,q,p
if(t.yg.b(b)){this.b.u(0,a)
return}s=this.b
r=s.i(0,a)
q=A.ax8(c)
if(q==null)q=this.a
if(J.f(r==null?null:t.Ft.a(r.a),q))return
p=q.qH(a)
s.l(0,a,p)
B.Sr.fm("activateSystemCursor",A.aX(["device",p.b,"kind",t.Ft.a(p.a).a],t.N,t.z),t.H)}}
A.uO.prototype={}
A.e2.prototype={
j(a){var s=this.gqJ()
return s}}
A.Mn.prototype={
qH(a){throw A.d(A.i7(null))},
gqJ(){return"defer"}}
A.Ql.prototype={}
A.ku.prototype={
gqJ(){return"SystemMouseCursor("+this.a+")"},
qH(a){return new A.Ql(this,a)},
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return b instanceof A.ku&&b.a===this.a},
gv(a){return B.c.gv(this.a)}}
A.NX.prototype={}
A.jJ.prototype={
gnp(){var s,r=$.h1.bb$
r===$&&A.b()
s=r
return s},
e2(a,b){return this.Kn(0,b,this.$ti.h("1?"))},
Kn(a,b,c){var s=0,r=A.a3(c),q,p=this,o,n
var $async$e2=A.X(function(d,e){if(d===1)return A.a0(e,r)
while(true)switch(s){case 0:o=p.b
n=o
s=3
return A.a_(p.gnp().ty(0,p.a,o.bE(b)),$async$e2)
case 3:q=n.ej(e)
s=1
break
case 1:return A.a1(q,r)}})
return A.a2($async$e2,r)},
tC(a){this.gnp().Ac(this.a,new A.Tm(this,a))}}
A.Tm.prototype={
$1(a){return this.JA(a)},
JA(a){var s=0,r=A.a3(t.yD),q,p=this,o,n
var $async$$1=A.X(function(b,c){if(b===1)return A.a0(c,r)
while(true)switch(s){case 0:o=p.a.b
n=o
s=3
return A.a_(p.b.$1(o.ej(a)),$async$$1)
case 3:q=n.bE(c)
s=1
break
case 1:return A.a1(q,r)}})
return A.a2($async$$1,r)},
$S:112}
A.uL.prototype={
gnp(){var s,r=$.h1.bb$
r===$&&A.b()
s=r
return s},
mT(a,b,c,d){return this.U3(a,b,c,d,d.h("0?"))},
U3(a,b,c,d,e){var s=0,r=A.a3(e),q,p=this,o,n,m,l
var $async$mT=A.X(function(f,g){if(f===1)return A.a0(g,r)
while(true)switch(s){case 0:o=p.b
n=o.ff(new A.hI(a,b))
m=p.a
s=3
return A.a_(p.gnp().ty(0,m,n),$async$mT)
case 3:l=g
if(l==null){if(c){q=null
s=1
break}throw A.d(A.auC("No implementation found for method "+a+" on channel "+m))}q=d.h("0?").a(o.Gu(l))
s=1
break
case 1:return A.a1(q,r)}})
return A.a2($async$mT,r)},
mj(a){var s=this.gnp()
s.Ac(this.a,new A.a0m(this,a))},
py(a,b){return this.S0(a,b)},
S0(a,b){var s=0,r=A.a3(t.yD),q,p=2,o,n=this,m,l,k,j,i,h,g,f,e
var $async$py=A.X(function(c,d){if(c===1){o=d
s=p}while(true)switch(s){case 0:h=n.b
g=h.fd(a)
p=4
e=h
s=7
return A.a_(b.$1(g),$async$py)
case 7:k=e.nU(d)
q=k
s=1
break
p=2
s=6
break
case 4:p=3
f=o
k=A.aj(f)
if(k instanceof A.vj){m=k
k=m.a
i=m.b
q=h.jC(k,m.c,i)
s=1
break}else if(k instanceof A.uM){q=null
s=1
break}else{l=k
h=h.GQ("error",J.dc(l))
q=h
s=1
break}s=6
break
case 3:s=2
break
case 6:case 1:return A.a1(q,r)
case 2:return A.a0(o,r)}})
return A.a2($async$py,r)}}
A.a0m.prototype={
$1(a){return this.a.py(a,this.b)},
$S:112}
A.kf.prototype={
fm(a,b,c){return this.a1i(a,b,c,c.h("0?"))},
rs(a,b){return this.fm(a,null,b)},
a1i(a,b,c,d){var s=0,r=A.a3(d),q,p=this
var $async$fm=A.X(function(e,f){if(e===1)return A.a0(f,r)
while(true)switch(s){case 0:q=p.M9(a,b,!0,c)
s=1
break
case 1:return A.a1(q,r)}})
return A.a2($async$fm,r)}}
A.ka.prototype={
G(){return"KeyboardSide."+this.b}}
A.en.prototype={
G(){retu