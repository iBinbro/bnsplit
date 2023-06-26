rototype={
$1(a){var s=A.v(null,a,this.a)
s.toString
return s},
$S:52}
A.WK.prototype={
T(a){var s,r,q,p
for(s=this.b,r=s.gaV(s),r=new A.dJ(J.aw(r.a),r.b),q=A.n(r).z[1];r.q();){p=r.a;(p==null?q.a(p):p).m()}s.T(0)
for(s=this.a,r=s.gaV(s),r=new A.dJ(J.aw(r.a),r.b),q=A.n(r).z[1];r.q();){p=r.a
if(p==null)p=q.a(p)
p.a.F(0,p.b)}s.T(0)
this.f=0},
qq(a){var s,r,q,p=this,o=p.c.u(0,a)
if(o!=null){s=o.a
r=o.d
r===$&&A.b()
if(s.w)A.a0(A.ad(u.y))
B.b.u(s.x,r)
o.As()}q=p.a.u(0,a)
if(q!=null){q.a.F(0,q.b)
return!0}o=p.b.u(0,a)
if(o!=null){s=p.f
r=o.b
r.toString
p.f=s-r
o.m()
return!0}return!1},
Es(a,b,c){var s,r=this,q=b.b
if(q!=null&&q<=104857600&&!0){s=r.f
q.toString
r.f=s+q
r.b.l(0,a,b)
r.OW(c)}else b.m()},
vD(a,b,c){var s=this.c.bJ(0,a,new A.WM(this,b,a))
if(s.b==null)s.b=c},
Ie(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g={}
g.a=g.b=null
q=i.a
p=q.j(0,b)
o=p==null?h:p.a
g.c=o
if(o!=null)return o
p=i.b
n=p.u(0,b)
if(n!=null){g=n.a
i.vD(b,g,n.b)
p.l(0,b,n)
return g}m=i.c.j(0,b)
if(m!=null){g=m.a
i.Es(b,new A.w5(g,m.b,g.qU()),h)
return g}try{o=g.c=c.$0()
i.vD(b,o,h)
p=o}catch(l){s=A.au(l)
r=A.aG(l)
d.$2(s,r)
return h}g.d=!1
k=A.b4("pendingImage")
j=new A.ei(new A.WN(g,i,b,!0,k),h,h)
k.b=new A.Mg(p,j)
q.l(0,b,k.aA())
g.c.V(0,j)
return g.c},
S(a,b){return this.a.j(0,b)!=null||this.b.j(0,b)!=null},
OW(a){var s,r,q,p,o,n=this,m=n.b,l=A.n(m).h("b_<1>")
while(!0){if(!(n.f>104857600||m.a>1000))break
s=new A.b_(m,l)
r=s.ga9(s)
if(!r.q())A.a0(A.bI())
q=r.gG(r)
p=m.j(0,q)
s=n.f
o=p.b
o.toString
n.f=s-o
p.m()
m.u(0,q)}}}
A.WM.prototype={
$0(){return A.as3(this.b,new A.WL(this.a,this.c))},
$S:189}
A.WL.prototype={
$0(){this.a.c.u(0,this.b)},
$S:0}
A.WN.prototype={
$2(a,b){var s,r,q,p,o,n=this
if(a!=null){s=a.a
r=s.gbI(s)*s.gbh(s)*4
s.m()}else r=null
s=n.a
q=s.c
p=new A.w5(q,r,q.qU())
q=n.b
o=n.c
q.vD(o,s.c,r)
if(n.d)q.Es(o,p,s.a)
else p.m()
q.a.u(0,o)
if(!s.d){q=n.e.aA()
q.a.F(0,q.b)}s.d=!0},
$S:190}
A.JF.prototype={
m(){$.bF.cy$.push(new A.a5N(this))}}
A.a5N.prototype={
$1(a){var s=this.a,r=s.c
if(r!=null)r.m()
s.c=null},
$S:2}
A.w5.prototype={}
A.ps.prototype={
O8(a,b,c){var s=new A.a7p(this,b)
this.d=s
if(a.w)A.a0(A.ad(u.y))
a.x.push(s)},
i(a){return"<optimized out>#"+A.bB(this)}}
A.a7p.prototype={
$0(){var s,r,q
this.b.$0()
s=this.a
r=s.a
q=s.d
q===$&&A.b()
if(r.w)A.a0(A.ad(u.y))
B.b.u(r.x,q)
s.As()},
$S:0}
A.Mg.prototype={}
A.nr.prototype={
k(a,b){var s=this
if(b==null)return!1
if(J.S(b)!==A.z(s))return!1
return b instanceof A.nr&&b.a==s.a&&b.b==s.b&&J.f(b.c,s.c)&&b.d==s.d&&J.f(b.e,s.e)&&b.f==s.f},
gt(a){var s=this
return A.U(s.a,s.b,s.c,s.e,s.f,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s,r=this,q=""+"ImageConfiguration(",p=r.a
if(p!=null){q+="bundle: "+p.i(0)
s=!0}else s=!1
p=r.b
if(p!=null){if(s)q+=", "
p=q+("devicePixelRatio: "+B.d.K(p,1))
q=p
s=!0}p=r.c
if(p!=null){if(s)q+=", "
p=q+("locale: "+p.i(0))
q=p
s=!0}p=r.d
if(p!=null){if(s)q+=", "
p=q+("textDirection: "+p.i(0))
q=p
s=!0}p=r.e
if(p!=null){if(s)q+=", "
p=q+("size: "+p.i(0))
q=p
s=!0}p=r.f
if(p!=null){if(s)q+=", "
p=q+("platform: "+p.b)
q=p}q+=")"
return q.charCodeAt(0)==0?q:q}}
A.fp.prototype={
W(a){var s=new A.WW()
this.Pu(a,new A.WU(this,a,s),new A.WV(this,a,s))
return s},
Pu(a,b,c){var s,r,q,p,o,n={}
n.a=null
n.b=!1
s=new A.WR(n,c)
r=null
try{r=this.xR(a)}catch(o){q=A.au(o)
p=A.aG(o)
s.$2(q,p)
return}r.bl(new A.WQ(n,this,b,s),t.H).ig(s)},
nT(a,b,c,d){var s,r
if(b.a!=null){s=$.fy.hE$
s===$&&A.b()
s.Ie(0,c,new A.WS(b),d)
return}s=$.fy.hE$
s===$&&A.b()
r=s.Ie(0,c,new A.WT(this,c),d)
if(r!=null)b.zv(r)},
qV(a,b,c){throw A.d(A.V("Implement loadBuffer for faster image loading"))},
qX(a,b){return this.qV(0,a,$.fy.ga_u())},
i(a){return"ImageConfiguration()"}}
A.WU.prototype={
$2(a,b){this.a.nT(this.b,this.c,a,b)},
$S(){return A.n(this.a).h("~(fp.T,~(L,ch?))")}}
A.WV.prototype={
$3(a,b,c){return this.Jg(a,b,c)},
Jg(a,b,c){var s=0,r=A.ab(t.H),q=this,p
var $async$$3=A.ac(function(d,e){if(d===1)return A.a8(e,r)
while(true)switch(s){case 0:s=2
return A.at(null,$async$$3)
case 2:p=q.c
if(p.a==null)p.zv(new A.a6o(A.a([],t.fE),A.a([],t.b)))
p=p.a
p.toString
p.ru(A.bm("while resolving an image"),b,null,!0,c)
return A.a9(null,r)}})
return A.aa($async$$3,r)},
$S(){return A.n(this.a).h("ag<~>(fp.T?,L,ch?)")}}
A.WR.prototype={
Jf(a,b){var s=0,r=A.ab(t.H),q,p=this,o
var $async$$2=A.ac(function(c,d){if(c===1)return A.a8(d,r)
while(true)switch(s){case 0:o=p.a
if(o.b){s=1
break}p.b.$3(o.a,a,b)
o.b=!0
case 1:return A.a9(q,r)}})
return A.aa($async$$2,r)},
$2(a,b){return this.Jf(a,b)},
$S:191}
A.WQ.prototype={
$1(a){var s,r,q,p=this
p.a.a=a
try{p.c.$2(a,p.d)}catch(q){s=A.au(q)
r=A.aG(q)
p.d.$2(s,r)}},
$S(){return A.n(this.b).h("aD(fp.T)")}}
A.WS.prototype={
$0(){var s=this.a.a
s.toString
return s},
$S:74}
A.WT.prototype={
$0(){return this.a.qX(this.b,$.fy.ga_x())},
$S:74}
A.fS.prototype={
k(a,b){var s=this
if(b==null)return!1
if(J.S(b)!==A.z(s))return!1
return b instanceof A.fS&&b.a===s.a&&b.b===s.b&&b.c===s.c},
gt(a){return A.U(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"AssetBundleImageKey(bundle: "+this.a.i(0)+', name: "'+this.b+'", scale: '+A.h(this.c)+")"}}
A.yZ.prototype={
qX(a,b){return A.agD(this.km(a,b,null),a.b,null,a.c)},
qV(a,b,c){return A.agD(this.km(b,null,c),b.b,null,b.c)},
km(a,b,c){return this.T1(a,b,c)},
T1(a,b,c){var s=0,r=A.ab(t.gP),q,p=2,o,n,m,l,k,j,i
var $async$km=A.ac(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:s=b!=null?3:4
break
case 3:n=null
p=6
s=9
return A.at(a.a.qW(a.b),$async$km)
case 9:n=e
p=2
s=8
break
case 6:p=5
j=o
if(A.au(j) instanceof A.jk){k=$.fy.hE$
k===$&&A.b()
k.qq(a)
throw j}else throw j
s=8
break
case 5:s=2
break
case 8:if(n==null){k=$.fy.hE$
k===$&&A.b()
k.qq(a)
throw A.d(A.ad("Unable to read data"))}q=b.$1(n)
s=1
break
case 4:m=null
p=11
s=14
return A.at(a.a.cC(0,a.b),$async$km)
case 14:m=e
p=2
s=13
break
case 11:p=10
i=o
if(A.au(i) instanceof A.jk){k=$.fy.hE$
k===$&&A.b()
k.qq(a)
throw i}else throw i
s=13
break
case 10:s=2
break
case 13:if(m==null){k=$.fy.hE$
k===$&&A.b()
k.qq(a)
throw A.d(A.ad("Unable to read data"))}c.toString
q=c.$1(A.cT(m.buffer,0,null))
s=1
break
case 1:return A.a9(q,r)
case 2:return A.a8(o,r)}})
return A.aa($async$km,r)}}
A.a6o.prototype={}
A.i1.prototype={
glc(){return this.a},
xR(a){var s,r={},q=a.a
if(q==null)q=$.QB()
r.a=r.b=null
q.a05("AssetManifest.08578714.json",A.avk(),t.jd).bl(new A.R2(r,this,a,q),t.H).ig(new A.R3(r))
s=r.a
if(s!=null)return s
s=new A.as($.al,t.hv)
r.b=new A.bh(s,t.q8)
return s},
P4(a,b,c){var s,r,q,p=b.b
if(p==null||c==null||J.f8(c))return a
s=A.ado(t.i,t.N)
for(r=J.aw(c);r.q();){q=r.gG(r)
s.l(0,this.Dj(q),q)}p.toString
return this.Q9(s,p)},
Q9(a,b){var s,r,q
if(a.m1(b)){s=a.j(0,b)
s.toString
return s}r=a.a_T(b)
q=a.Z9(b)
if(r==null)return a.j(0,q)
if(q==null)return a.j(0,r)
if(b<2||b>(r+q)/2)return a.j(0,q)
else return a.j(0,r)},
Dj(a){var s,r,q,p
if(a===this.a)return 1
s=A.adA(a,0,null)
r=s.gll().length>1?s.gll()[s.gll().length-2]:""
q=$.akk().qz(r)
if(q!=null&&q.b.length-1>0){p=q.b[1]
p.toString
return A.ajB(p)}return 1},
k(a,b){if(b==null)return!1
if(J.S(b)!==A.z(this))return!1
return b instanceof A.i1&&b.glc()===this.glc()&&!0},
gt(a){return A.U(this.glc(),this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"AssetImage(bundle: "+A.h(this.b)+', name: "'+this.glc()+'")'}}
A.R2.prototype={
$1(a){var s,r=this,q=r.b,p=q.glc(),o=a==null?null:J.b9(a,q.glc())
o=q.P4(p,r.c,o)
o.toString
s=new A.fS(r.d,o,q.Dj(o))
q=r.a
p=q.b
if(p!=null)p.cI(0,s)
else q.a=new A.bk(s,t.rT)},
$S:193}
A.R3.prototype={
$2(a,b){this.a.b.mL(a,b)},
$S:43}
A.fo.prototype={
cv(a){return new A.fo(this.a.cv(0),this.b,this.c)},
i(a){var s=this.c
s=s!=null?s+" ":""
return s+this.a.i(0)+" @ "+A.fP(this.b)+"x"},
gt(a){return A.U(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(J.S(b)!==A.z(s))return!1
return b instanceof A.fo&&b.a===s.a&&b.b===s.b&&b.c==s.c}}
A.ei.prototype={
gt(a){return A.U(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(J.S(b)!==A.z(s))return!1
return b instanceof A.ei&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&J.f(b.c,s.c)},
a0u(a,b){return this.a.$2(a,b)}}
A.WW.prototype={
zv(a){var s,r=this
r.a=a
s=r.b
if(s!=null){r.b=null
a.f=!0
B.b.Y(s,a.gpG(a))
r.a.f=!1}},
V(a,b){var s=this.a
if(s!=null)return s.V(0,b)
s=this.b;(s==null?this.b=A.a([],t.fE):s).push(b)},
F(a,b){var s,r=this.a
if(r!=null)return r.F(0,b)
for(s=0;r=this.b,s<r.length;++s)if(J.f(r[s],b)){r=this.b
r.toString
B.b.ft(r,s)
break}}}
A.WX.prototype={
m(){var s=this.a;--s.r
s.oZ()
this.a=null}}
A.lo.prototype={
V(a,b){var s,r,q,p,o,n,m,l=this
if(l.w)A.a0(A.ad(u.y))
l.e=!0
l.a.push(b)
o=l.b
if(o!=null)try{o=o.cv(0)
n=l.f
b.a.$2(o,!n)}catch(m){s=A.au(m)
r=A.aG(m)
l.Iv(A.bm("by a synchronously-called image listener"),s,r)}o=l.c
if(o!=null&&b.c!=null)try{n=b.c
n.toString
n.$2(o.a,o.b)}catch(s){q=A.au(s)
p=A.aG(s)
if(!J.f(q,l.c.a))A.dI(new A.bz(q,p,"image resource service",A.bm("by a synchronously-called image error listener"),null,!1))}},
qU(){if(this.w)A.a0(A.ad(u.y));++this.r
return new A.WX(this)},
F(a,b){var s,r,q,p,o,n=this
if(n.w)A.a0(A.ad(u.y))
for(s=n.a,r=0;r<s.length;++r)if(J.f(s[r],b)){B.b.ft(s,r)
break}if(s.length===0){s=n.x
q=A.a(s.slice(0),A.ah(s))
for(p=q.length,o=0;o<q.length;q.length===p||(0,A.P)(q),++o)q[o].$0()
B.b.T(s)
n.oZ()}},
oZ(){var s,r=this
if(!r.e||r.w||r.a.length!==0||r.r!==0)return
s=r.b
if(s!=null)s.a.m()
r.b=null
r.w=!0},
K_(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.w)A.a0(A.ad(u.y))
p=i.b
if(p!=null)p.a.m()
i.b=a
p=i.a
if(p.length===0)return
o=A.ay(p,!0,t.tg)
for(p=o.length,n=a.a,m=a.b,l=a.c,k=0;k<p;++k){s=o[k]
try{s.a0u(new A.fo(n.cv(0),m,l),!1)}catch(j){r=A.au(j)
q=A.aG(j)
i.Iv(A.bm("by an image listener"),r,q)}}},
ru(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i="image resource service"
this.c=new A.bz(b,e,i,a,c,d)
o=this.a
n=t.pE
m=A.ay(new A.dP(new A.aE(o,new A.WY(),A.ah(o).h("aE<1,~(L,ch?)?>")),n),!0,n.h("q.E"))
s=!1
for(o=m.length,l=0;l<o;++l){r=m[l]
try{r.$2(b,e)
s=!0}catch(k){q=A.au(k)
p=A.aG(k)
if(!J.f(q,b)){n=A.bm("when reporting an error to an image listener")
j=$.f7()
if(j!=null)j.$1(new A.bz(q,p,i,n,null,!1))}}}if(!s){o=this.c
o.toString
A.dI(o)}},
Iv(a,b,c){return this.ru(a,b,null,!1,c)}}
A.WY.prototype={
$1(a){return a.c},
$S:195}
A.FK.prototype={
O2(a,b,c,d,e){this.d=c
b.eU(this.gR7(),new A.Yx(this,d),t.H)},
R9(a){this.z=a
if(this.a.length!==0)this.kh()},
R_(a){var s,r,q,p=this
p.cx=!1
if(p.a.length===0)return
s=p.ay
if(s!=null){r=p.ax
r===$&&A.b()
r=a.a-r.a>=s.a}else r=!0
if(r){s=p.at
p.BT(new A.fo(s.gh3(s).cv(0),p.Q,p.d))
p.ax=a
s=p.at
p.ay=s.gYG(s)
s=p.at
s.gh3(s).m()
p.at=null
q=B.f.i2(p.ch,p.z.gx7())
if(p.z.gIu()===-1||q<=p.z.gIu())p.kh()
return}s.toString
r=p.ax
r===$&&A.b()
p.CW=A.ci(new A.aY(B.d.bb((s.a-(a.a-r.a))*$.ajg)),new A.Yw(p))},
kh(){var s=0,r=A.ab(t.H),q,p=2,o,n=this,m,l,k,j,i
var $async$kh=A.ac(function(a,b){if(a===1){o=b
s=p}while(true)switch(s){case 0:j=n.at
if(j!=null)j.gh3(j).m()
n.at=null
p=4
s=7
return A.at(n.z.rS(),$async$kh)
case 7:n.at=b
p=2
s=6
break
case 4:p=3
i=o
m=A.au(i)
l=A.aG(i)
n.ru(A.bm("resolving an image frame"),m,n.as,!0,l)
s=1
break
s=6
break
case 3:s=2
break
case 6:if(n.z.gx7()===1){if(n.a.length===0){s=1
break}j=n.at
n.BT(new A.fo(j.gh3(j).cv(0),n.Q,n.d))
j=n.at
j.gh3(j).m()
n.at=null
s=1
break}n.DG()
case 1:return A.a9(q,r)
case 2:return A.a8(o,r)}})
return A.aa($async$kh,r)},
DG(){if(this.cx)return
this.cx=!0
$.bF.rX(this.gQZ())},
BT(a){this.K_(a);++this.ch},
V(a,b){var s,r=this
if(r.a.length===0){s=r.z
if(s!=null)s=r.b==null||s.gx7()>1
else s=!1}else s=!1
if(s)r.kh()
r.L2(0,b)},
F(a,b){var s,r=this
r.L3(0,b)
if(r.a.length===0){s=r.CW
if(s!=null)s.aX(0)
r.CW=null}},
oZ(){this.L1()
if(this.w)this.y=null}}
A.Yx.prototype={
$2(a,b){this.a.ru(A.bm("resolving an image codec"),a,this.b,!0,b)},
$S:43}
A.Yw.prototype={
$0(){this.a.DG()},
$S:0}
A.Lg.prototype={}
A.Lf.prototype={}
A.yR.prototype={}
A.ju.prototype={
k(a,b){var s
if(b==null)return!1
if(b instanceof A.ju)if(b.a===this.a)if(b.b==this.b)s=A.cC(b.f,this.f)
else s=!1
else s=!1
else s=!1
return s},
gt(a){return A.U(this.a,this.b,this.c,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"InlineSpanSemanticsInformation{text: "+this.a+", semanticsLabel: "+A.h(this.b)+", recognizer: "+A.h(this.c)+"}"}}
A.fq.prototype={
Jz(a){var s={}
s.a=null
this.aM(new A.X6(s,a,new A.yR()))
return s.a},
IQ(a){var s,r=new A.bM("")
this.FG(r,!0,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
ao(a,b){var s={}
if(b<0)return null
s.a=null
this.aM(new A.X5(s,b,new A.yR()))
return s.a},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.S(b)!==A.z(this))return!1
return b instanceof A.fq&&J.f(b.a,this.a)},
gt(a){return J.m(this.a)}}
A.X6.prototype={
$1(a){var s=a.JA(this.b,this.c)
this.a.a=s
return s==null},
$S:36}
A.X5.prototype={
$1(a){var s=a.Xp(this.b,this.c)
this.a.a=s
return s==null},
$S:36}
A.de.prototype={
aC(a,b){var s=this.a.aC(0,b)
return new A.de(this.b.a6(0,b),s)},
bZ(a,b){var s,r,q=this
if(a instanceof A.de){s=A.av(a.a,q.a,b)
r=A.fT(a.b,q.b,b)
r.toString
return new A.de(r,s)}if(a instanceof A.d5){s=A.av(a.a,q.a,b)
return new A.dQ(q.b,1-b,a.b,s)}return q.k8(a,b)},
c_(a,b){var s,r,q=this
if(a instanceof A.de){s=A.av(q.a,a.a,b)
r=A.fT(q.b,a.b,b)
r.toString
return new A.de(r,s)}if(a instanceof A.d5){s=A.av(q.a,a.a,b)
return new A.dQ(q.b,b,a.b,s)}return q.k9(a,b)},
eW(a,b){var s=$.an().cg()
s.eg(this.b.W(b).d9(a))
return s},
h9(a,b,c){var s,r,q,p,o=this.a
switch(o.c.a){case 0:break
case 1:s=this.b
if(o.b===0)a.cM(s.W(c).d9(b),o.hh())
else{r=$.an().bj()
r.saj(0,o.a)
q=s.W(c).d9(b)
p=q.cQ(-o.ge9())
a.qm(q.cQ(o.gzP()),p,r)}break}},
k(a,b){if(b==null)return!1
if(J.S(b)!==A.z(this))return!1
return b instanceof A.de&&b.a.k(0,this.a)&&b.b.k(0,this.b)},
gt(a){return A.U(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"RoundedRectangleBorder("+this.a.i(0)+", "+this.b.i(0)+")"}}
A.dQ.prototype={
aC(a,b){var s=this.a.aC(0,b)
return new A.dQ(this.b.a6(0,b),b,this.d,s)},
bZ(a,b){var s,r,q,p=this
if(a instanceof A.de){s=A.av(a.a,p.a,b)
r=A.fT(a.b,p.b,b)
r.toString
return new A.dQ(r,p.c*b,p.d,s)}if(a instanceof A.d5){s=A.av(a.a,p.a,b)
r=p.c
return new A.dQ(p.b,r+(1-r)*(1-b),a.b,s)}if(a instanceof A.dQ){s=A.av(a.a,p.a,b)
r=A.fT(a.b,p.b,b)
r.toString
q=A.O(a.c,p.c,b)
q.toString
return new A.dQ(r,q,p.d,s)}return p.k8(a,b)},
c_(a,b){var s,r,q,p=this
if(a instanceof A.de){s=A.av(p.a,a.a,b)
r=A.fT(p.b,a.b,b)
r.toString
return new A.dQ(r,p.c*(1-b),p.d,s)}if(a instanceof A.d5){s=A.av(p.a,a.a,b)
r=p.c
return new A.dQ(p.b,r+(1-r)*b,a.b,s)}if(a instanceof A.dQ){s=A.av(p.a,a.a,b)
r=A.fT(p.b,a.b,b)
r.toString
q=A.O(p.c,a.c,b)
q.toString
return new A.dQ(r,q,p.d,s)}return p.k9(a,b)},
DE(a){var s,r,q,p,o,n,m,l,k=this.c
if(k===0||a.c-a.a===a.d-a.b)return a
s=a.c
r=a.a
q=s-r
p=a.d
o=a.b
n=p-o
m=1-this.d
if(q<n){l=k*((n-q)/2)*m
return new A.y(r,o+l,s,p-l)}else{l=k*((q-n)/2)*m
return new A.y(r+l,o,s-l,p)}},
AL(a,b){var s,r,q,p=this.b.W(b),o=this.c
if(o===0)return p
s=this.d
if(s!==0){r=a.c-a.a
q=a.d-a.b
s=0.5+s/2
if(r<q){o=A.mT(p,A.zd(new A.bn(r/2,s*q/2)),o)
o.toString
return o}else{o=A.mT(p,A.zd(new A.bn(s*r/2,q/2)),o)
o.toString
return o}}return A.mT(p,A.mS(a.geZ()/2),o)},
eW(a,b){var s=$.an().cg(),r=this.AL(a,b)
r.toString
s.eg(r.d9(this.DE(a)))
return s},
h9(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=this.AL(b,c)
s.toString
a.cM(s.d9(this.DE(b)).cQ(r.b*r.d/2),r.hh())
break}},
k(a,b){var s=this
if(b==null)return!1
if(J.S(b)!==A.z(s))return!1
return b instanceof A.dQ&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c===s.c},
gt(a){return A.U(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r="RoundedRectangleBorder(",q=s.d
if(q!==0)return r+s.a.i(0)+", "+s.b.i(0)+", "+B.d.K(s.c*100,1)+u.D+B.d.K(q*100,1)+"% oval)"
return r+s.a.i(0)+", "+s.b.i(0)+", "+B.d.K(s.c*100,1)+"% of the way to being a CircleBorder)"}}
A.e4.prototype={
aC(a,b){return new A.e4(this.a.aC(0,b))},
bZ(a,b){var s,r=this
if(a instanceof A.e4)return new A.e4(A.av(a.a,r.a,b))
if(a instanceof A.d5){s=A.av(a.a,r.a,b)
return new A.dS(1-b,a.b,s)}if(a instanceof A.de){s=A.av(a.a,r.a,b)
return new A.dT(a.b,1-b,s)}return r.k8(a,b)},
c_(a,b){var s,r=this
if(a instanceof A.e4)return new A.e4(A.av(r.a,a.a,b))
if(a instanceof A.d5){s=A.av(r.a,a.a,b)
return new A.dS(b,a.b,s)}if(a instanceof A.de){s=A.av(r.a,a.a,b)
return new A.dT(a.b,b,s)}return r.k9(a,b)},
eW(a,b){var s=a.geZ()/2,r=$.an().cg()
r.eg(A.adc(a,new A.bn(s,s)))
return r},
h9(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=b.geZ()/2
a.cM(A.adc(b,new A.bn(s,s)).cQ(r.b*r.d/2),r.hh())
break}},
k(a,b){if(b==null)return!1
if(J.S(b)!==A.z(this))return!1
return b instanceof A.e4&&b.a.k(0,this.a)},
gt(a){var s=this.a
return A.U(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"StadiumBorder("+this.a.i(0)+")"}}
A.dS.prototype={
aC(a,b){return new A.dS(b,this.c,this.a.aC(0,b))},
bZ(a,b){var s,r,q,p=this
if(a instanceof A.e4)return new A.dS(p.b*b,p.c,A.av(a.a,p.a,b))
if(a instanceof A.d5){s=A.av(a.a,p.a,b)
r=p.b
return new A.dS(r+(1-r)*(1-b),a.b,s)}if(a instanceof A.dS){s=A.av(a.a,p.a,b)
r=A.O(a.b,p.b,b)
r.toString
q=A.O(a.c,p.c,b)
q.toString
return new A.dS(r,q,s)}return p.k8(a,b)},
c_(a,b){var s,r,q,p=this
if(a instanceof A.e4)return new A.dS(p.b*(1-b),p.c,A.av(p.a,a.a,b))
if(a instanceof A.d5){s=A.av(p.a,a.a,b)
r=p.b
return new A.dS(r+(1-r)*b,a.b,s)}if(a instanceof A.dS){s=A.av(p.a,a.a,b)
r=A.O(p.b,a.b,b)
r.toString
q=A.O(p.c,a.c,b)
q.toString
return new A.dS(r,q,s)}return p.k9(a,b)},
Ea(a){var s,r,q,p,o,n,m,l,k=this.b
if(k===0||a.c-a.a===a.d-a.b)return a
s=a.c
r=a.a
q=s-r
p=a.d
o=a.b
n=p-o
m=1-this.c
if(q<n){l=k*((n-q)/2)*m
return new A.y(r,o+l,s,p-l)}else{l=k*((q-n)/2)*m
return new A.y(r+l,o,s-l,p)}},
ml(a){var s,r,q,p=A.mS(a.geZ()/2),o=this.c
if(o!==0){s=a.c-a.a
r=a.d-a.b
q=this.b
o=0.5+o/2
if(s<r){o=A.mT(p,A.zd(new A.bn(s/2,o*r/2)),q)
o.toString
return o}else{o=A.mT(p,A.zd(new A.bn(o*s/2,r/2)),q)
o.toString
return o}}return p},
eW(a,b){var s=$.an().cg()
s.eg(this.ml(a).d9(this.Ea(a)))
return s},
h9(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.cM(this.ml(b).d9(this.Ea(b)).cQ(s.b*s.d/2),s.hh())
break}},
k(a,b){if(b==null)return!1
if(J.S(b)!==A.z(this))return!1
return b instanceof A.dS&&b.a.k(0,this.a)&&b.b===this.b},
gt(a){return A.U(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r=s.c
if(r!==0)return"StadiumBorder("+s.a.i(0)+", "+B.d.K(s.b*100,1)+u.D+B.d.K(r*100,1)+"% oval)"
return"StadiumBorder("+s.a.i(0)+", "+B.d.K(s.b*100,1)+"% of the way to being a CircleBorder)"}}
A.dT.prototype={
aC(a,b){var s=this.a.aC(0,b)
return new A.dT(this.b.a6(0,b),b,s)},
bZ(a,b){var s,r,q,p=this
if(a instanceof A.e4)return new A.dT(p.b,p.c*b,A.av(a.a,p.a,b))
if(a instanceof A.de){s=p.c
return new A.dT(p.b,s+(1-s)*(1-b),A.av(a.a,p.a,b))}if(a instanceof A.dT){s=A.av(a.a,p.a,b)
r=A.fT(a.b,p.b,b)
r.toString
q=A.O(a.c,p.c,b)
q.toString
return new A.dT(r,q,s)}return p.k8(a,b)},
c_(a,b){var s,r,q,p=this
if(a instanceof A.e4)return new A.dT(p.b,p.c*(1-b),A.av(p.a,a.a,b))
if(a instanceof A.de){s=p.c
return new A.dT(p.b,s+(1-s)*b,A.av(p.a,a.a,b))}if(a instanceof A.dT){s=A.av(p.a,a.a,b)
r=A.fT(p.b,a.b,b)
r.toString
q=A.O(p.c,a.c,b)
q.toString
return new A.dT(r,q,s)}return p.k9(a,b)},
ml(a){var s=a.geZ()/2
s=A.fT(this.b,A.zd(new A.bn(s,s)),1-this.c)
s.toString
return s},
eW(a,b){var s=$.an().cg()
s.eg(this.ml(a).W(b).d9(a))
return s},
h9(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.cM(this.ml(b).W(c).d9(b).cQ(s.b*s.d/2),s.hh())
break}},
k(a,b){var s=this
if(b==null)return!1
if(J.S(b)!==A.z(s))return!1
return b instanceof A.dT&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c===s.c},
gt(a){return A.U(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"StadiumBorder("+this.a.i(0)+", "+this.b.i(0)+", "+B.d.K(this.c*100,1)+"% of the way to being a RoundedRectangleBorder)"}}
A.m8.prototype={
D(){return"TextOverflow."+this.b}}
A.lz.prototype={
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(b instanceof A.lz)if(b.a.k(0,r.a))if(b.b===r.b)s=b.c==r.c
else s=!1
else s=!1
else s=!1
return s},
gt(a){var s=this
return A.U(s.a,s.b,s.d,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"PlaceholderDimensions("+this.a.i(0)+", "+A.h(this.d)+")"}}
A.vE.prototype={
D(){return"TextWidthBasis."+this.b}}
A.a5O.prototype={}
A.IA.prototype={
a4(){var s=this,r=s.a
if(r!=null)r.m()
s.dy=s.dx=s.fr=s.a=null},
srA(a,b){var s,r,q=this
if(J.f(q.d,b))return
s=q.d
s=s==null?null:s.a
if(!J.f(s,b.a)){s=q.CW
if(s!=null)s.m()
q.CW=null}s=q.d
s=s==null?null:s.b_(0,b)
r=s==null?B.cC:s
q.d=b
q.e=null
s=r.a
if(s>=3)q.a4()
else if(s>=2)q.b=!0},
grl(){var s=this.e
if(s==null){s=this.d
s=s==null?null:s.IQ(!1)
this.e=s}return s==null?"":s},
syB(a,b){if(this.f===b)return
this.f=b
this.a4()},
sbD(a){var s,r=this
if(r.r===a)return
r.r=a
r.a4()
s=r.CW
if(s!=null)s.m()
r.CW=null},
syC(a){var s,r=this
if(r.w===a)return
r.w=a
r.a4()
s=r.CW
if(s!=null)s.m()
r.CW=null},
sYH(a){if(this.x==a)return
this.x=a
this.a4()},
sxB(a,b){if(J.f(this.y,b))return
this.y=b
this.a4()},
sxG(a){if(this.z==a)return
this.z=a
this.a4()},
syD(a){if(this.as===a)return
this.as=a
this.a4()},
t7(a){if(a==null||a.length===0||A.cC(a,this.ch))return
this.ch=a
this.a4()},
BD(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.d.a
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
o=l==null?f:new A.Ix(l)
k=e.w
j=e.x
i=e.d
h=e.r
if(h==null)h=14
e=e.as
e=A.ad8(n,i,h*q,j,k,e,m,p,f,s,r,o)}if(e==null){e=g.f
s=g.r
if(s==null)s=a
r=g.w
q=g.z
p=g.at
p=A.ad8(g.x,f,14*r,f,f,f,g.y,q,f,e,s,p)
e=p}return e},
Pz(){return this.BD(null)},
grn(){var s,r,q=this,p=q.CW
if(p==null){p=q.BD(B.P)
s=$.an().wl(p)
p=q.d
if(p==null)r=null
else{p=p.a
r=p==null?null:p.zh(q.w)}if(r!=null)s.yl(r)
s.pJ(" ")
p=s.b9()
p.hN(B.SD)
q.CW=p}return p.gbI(p)},
gbh(a){var s=this.as,r=this.a
s=s===B.YE?r.gHI():r.gbh(r)
return Math.ceil(s)},
ei(a){var s
switch(a.a){case 0:s=this.a
return s.gpN(s)
case 1:s=this.a
return s.ga_k(s)}},
BC(){var s,r,q=this,p=q.d
if(p==null)throw A.d(A.ad("TextPainter.text must be set to a non-null value before using the TextPainter."))
s=q.Pz()
r=$.an().wl(s)
s=q.w
p.Fr(r,q.ch,s)
q.ay=r.ga0K()
q.a=r.b9()
q.b=!1},
CP(a,b){var s,r,q=this
q.a.hN(new A.jN(b))
if(a!==b){switch(q.as.a){case 1:s=Math.ceil(q.a.gHI())
break
case 0:s=Math.ceil(q.a.ga0c())
break
default:s=null}s=A.E(s,a,b)
r=q.a
if(s!==Math.ceil(r.gbh(r)))q.a.hN(new A.jN(s))}},
xz(a,b){var s=this,r=s.a==null
if(!r&&b===s.cx&&a===s.cy)return
if(s.b||r)s.BC()
s.cx=b
s.cy=a
s.dy=s.dx=s.fr=null
s.CP(b,a)
s.ax=s.a.rL()},
a_V(){return this.xz(1/0,0)},
aF(a,b){var s,r=this,q=r.cx,p=r.cy
if(r.a==null||q==null||p==null)throw A.d(A.ad("TextPainter.paint called when text geometry was not yet calculated.\nPlease call layout() before paint() to position the text before painting it."))
if(r.b){r.BC()
r.CP(q,p)}s=r.a
s.toString
a.jn(s,b)},
Cc(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.grl().length
if(g===0||a>g)return null
s=B.c.ao(h.grl(),Math.max(0,a-1))
r=(s&63488)===55296||h.d.ao(0,a)===8205||s===8207||s===8206
q=r?2:1
p=A.a([],t.px)
for(o=-g,n=!r,m=s===10;p.length===0;){l=a-q
p=h.a.z2(l,a,B.m9)
if(p.length===0){if(n&&m)break
if(l<o)break
q*=2
continue}k=B.b.gJ(p)
if(m){o=k.d
return new A.y(h.guh().a,o,h.guh().a,o+o-k.b)}o=k.e
j=o===B.t?k.c:k.a
i=o===B.P?j-(b.c-b.a):j
o=h.a
o=A.E(i,0,o.gbh(o))
n=h.a
return new A.y(o,k.b,A.E(i,0,n.gbh(n)),k.d)}return null},
Cb(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.grl().length
if(h===0||a<0)return null
s=B.c.ao(i.grl(),Math.min(a,h-1))
r=(s&63488)===55296||s===8205||s===8207||s===8206
q=r?2:1
p=A.a([],t.px)
for(o=h<<1>>>0,n=!r;p.length===0;){m=a+q
p=i.a.z2(a,m,B.m9)
if(p.length===0){if(n)break
if(m>=o)break
q*=2
continue}l=B.b.gR(p)
o=l.e
k=o===B.t?l.a:l.c
j=o===B.P?k-(b.c-b.a):k
o=i.a
o=A.E(j,0,o.gbh(o))
n=i.a
return new A.y(o,l.b,A.E(j,0,n.gbh(n)),l.d)}return null},
guh(){var s=this
switch(s.f.a){case 0:return B.j
case 1:return new A.u(s.gbh(s),0)
case 2:return new A.u(s.gbh(s)/2,0)
case 3:case 4:switch(s.r.a){case 0:return new A.u(s.gbh(s),0)
case 1:return B.j}break
case 5:switch(s.r.a){case 0:return B.j
case 1:return new A.u(s.gbh(s),0)}break}},
Bs(a,b){var s,r,q,p,o=this
if(a.k(0,o.dx)&&b.k(0,o.dy))return
s=a.a
switch(a.b.a){case 0:r=o.Cc(s,b)
if(r==null)r=o.Cb(s,b)
break
case 1:r=o.Cb(s,b)
if(r==null)r=o.Cc(s,b)
break
default:r=null}q=r!=null
p=q?new A.u(r.a,r.b):o.guh()
o.db=new A.a5O(p,q?r.d-r.b:null)
o.dx=a
o.dy=b},
m(){var s=this,r=s.CW
if(r!=null)r.m()
s.CW=null
r=s.a
if(r!=null)r.m()
s.d=s.a=null}}
A.vD.prototype={
gFW(a){return this.e},
gyX(){return!0},
hH(a,b){t.Y.b(a)},
Fr(a,b,c){var s,r,q,p,o=this.a,n=o!=null
if(n)a.yl(o.zh(c))
o=this.b
if(o!=null)try{a.pJ(o)}catch(q){o=A.au(q)
if(o instanceof A.fa){s=o
r=A.aG(q)
A.dI(new A.bz(s,r,"painting library",A.bm("while building a TextSpan"),null,!1))
a.pJ("\ufffd")}else throw q}o=this.c
if(o!=null)for(p=0;p<1;++p)o[p].Fr(a,b,c)
if(n)a.hc()},
aM(a){var s,r
if(this.b!=null)if(!a.$1(this))return!1
s=this.c
if(s!=null)for(r=0;r<1;++r)if(!s[r].aM(a))return!1
return!0},
JA(a,b){var s,r,q,p,o=this.b
if(o==null)return null
s=a.b
r=a.a
q=b.a
p=q+o.length
if(!(q===r&&s===B.B))if(!(q<r&&r<p))o=p===r&&s===B.K
else o=!0
else o=!0
if(o)return this
b.a=p
return null},
FG(a,b,c){var s,r=this.b
if(r!=null)a.a+=r
r=this.c
if(r!=null)for(s=0;s<1;++s)r[s].FG(a,!0,c)},
FF(a,b,c){var s,r,q=this.b
if(q!=null){s=A.a([],t.ve)
a.push(A.agc(q,null,null,s))}q=this.c
if(q!=null)for(r=0;r<1;++r)q[r].FF(a,b,!1)},
XC(a){return this.FF(a,null,!1)},
Xp(a,b){var s,r,q,p=this.b
if(p==null)return null
s=b.a
r=a-s
q=p.length
if(r<q)return B.c.ao(p,r)
b.a=s+q
return null},
b_(a,b){var s,r,q,p,o,n=this
if(n===b)return B.dx
if(A.z(b)!==A.z(n))return B.cC
if(b.b==n.b){s=n.c==null?null:1
s=s!=(b.c==null?null:1)||n.a==null!==(b.a==null)}else s=!0
if(s)return B.cC
s=n.a
if(s!=null){r=b.a
r.toString
q=s.b_(0,r)
p=q.a>0?q:B.dx
if(p===B.cC)return p}else p=B.dx
s=n.c
if(s!=null)for(r=b.c,o=0;o<1;++o){q=s[o].b_(0,r[o])
if(q.a>p.a)p=q
if(p===B.cC)return p}return p},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.z(s))return!1
if(!s.L5(0,b))return!1
return b instanceof A.vD&&b.b==s.b&&s.e.k(0,b.e)&&A.cC(b.c,s.c)},
gt(a){var s=this,r=null,q=A.fq.prototype.gt.call(s,s),p=s.c
p=p==null?r:A.cV(p)
return A.U(q,s.b,r,r,r,r,s.e,p,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
bQ(){return"TextSpan"},
$iaf:1,
$iio:1,
gxY(){return null},
gxZ(){return null}}
A.r.prototype={
gl4(){return this.e},
gky(a){return this.d},
mO(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=b9==null?a.a:b9,a1=a.ay
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
c=b0==null?a.gky(a):b0
b=b1==null?a.e:b1
return A.co(r,q,s,null,g,f,e,d,c,b,a.fr,p,a.x,h,o,a1,k,a0,j,n,a.ax,a.fy,a.f,i,l,m)},
Y_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5){return this.mO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,null,r,s,a0,a1,a2,a3,a4,a5)},
fW(a){return this.mO(null,null,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
XR(a){return this.mO(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null)},
FR(a,b){return this.mO(null,null,a,null,null,null,null,null,null,null,null,b,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
FM(a){return this.mO(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null,null,null)},
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
a1=a4.gky(a4)
a2=a4.e
a3=a4.f
return this.Y_(g,r,s,null,c,b,a,a0,a1,a2,e,q,o,d,p,h,k,j,n,i,a4.fy,a3,f,l,m)},
zh(a){var s,r,q=this,p=q.gl4(),o=q.r
o=o==null?null:o*a
s=q.ch
if(s==null){s=q.c
if(s!=null){r=$.an().bj()
r.saj(0,s)
s=r}else s=null}return A.ahE(s,q.b,q.CW,q.cx,q.cy,q.db,q.d,p,q.fr,o,q.x,q.fx,q.w,q.ay,q.as,q.at,q.y,q.ax,q.dy,q.Q,q.z)},
b_(a,b){var s=this
if(s===b)return B.dx
if(s.a!==b.a||s.d!=b.d||s.r!=b.r||s.w!=b.w||s.y!=b.y||s.z!=b.z||s.Q!=b.Q||s.as!=b.as||s.at!=b.at||s.ay!=b.ay||s.ch!=b.ch||!A.cC(s.dy,b.dy)||!A.cC(s.fr,b.fr)||!A.cC(s.fx,b.fx)||!A.cC(s.gl4(),b.gl4())||!1)return B.cC
if(!J.f(s.b,b.b)||!J.f(s.c,b.c)||!J.f(s.CW,b.CW)||!J.f(s.cx,b.cx)||s.cy!=b.cy||s.db!=b.db)return B.SW
return B.dx},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.S(b)!==A.z(r))return!1
if(b instanceof A.r)if(b.a===r.a)if(J.f(b.b,r.b))if(J.f(b.c,r.c))if(b.r==r.r)if(b.w==r.w)if(b.y==r.y)if(b.z==r.z)if(b.Q==r.Q)if(b.as==r.as)if(b.at==r.at)if(b.ay==r.ay)if(b.ch==r.ch)if(A.cC(b.dy,r.dy))if(A.cC(b.fr,r.fr))if(A.cC(b.fx,r.fx))if(J.f(b.CW,r.CW))if(J.f(b.cx,r.cx))if(b.cy==r.cy)if(b.db==r.db)if(b.d==r.d)if(A.cC(b.gl4(),r.gl4()))s=!0
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
gt(a){var s,r=this,q=null,p=r.gl4(),o=p==null?q:A.cV(p),n=A.U(r.cy,r.db,r.d,o,r.f,r.fy,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a),m=r.dy,l=r.fx
o=m==null?q:A.cV(m)
s=l==null?q:A.cV(l)
return A.U(r.a,r.b,r.c,r.r,r.w,r.x,r.y,r.z,r.Q,r.as,r.at,r.ax,r.ay,r.ch,o,q,s,r.CW,r.cx,n)},
bQ(){return"TextStyle"}}
A.Os.prototype={}
A.CY.prototype={
NZ(a,b,c,d,e){var s=this
s.r=A.aj3(new A.VA(s),s.gwN(s),0,10,0)},
cT(a,b){var s,r,q=this
if(b>q.r)return q.gqv()
s=q.e
r=q.c
return q.d+s*Math.pow(q.b,b)/r-s/r-q.f/2*b*b},
dD(a,b){var s=this
if(b>s.r)return 0
return s.e*Math.pow(s.b,b)-s.f*b},
gqv(){var s=this
if(s.f===0)return s.d-s.e/s.c
return s.cT(0,s.r)},
IL(a){var s,r=this,q=r.d
if(a===q)return 0
s=r.e
if(s!==0)if(s>0)q=a<q||a>r.gqv()
else q=a>q||a<r.gqv()
else q=!0
if(q)return 1/0
return A.aj3(r.gwN(r),r.ga24(r),0,10,a)},
jC(a){return Math.abs(this.dD(0,a))<this.a.c},
i(a){return"FrictionSimulation(c\u2093: "+B.d.K(this.b,1)+", x\u2080: "+B.d.K(this.d,1)+", dx\u2080: "+B.d.K(this.e,1)+")"}}
A.VA.prototype={
$1(a){var s=this.a
return s.e*Math.pow(s.b,a)*s.c-s.f},
$S:68}
A.a1N.prototype={
i(a){return"Simulation"}}
A.a3F.prototype={
i(a){return"SpringDescription(mass: "+B.d.K(this.a,1)+", stiffness: "+B.f.K(this.b,1)+", damping: "+B.d.K(this.c,1)+")"}}
A.oA.prototype={
D(){return"SpringType."+this.b}}
A.Ig.prototype={
cT(a,b){return this.b+this.c.cT(0,b)},
dD(a,b){return this.c.dD(0,b)},
jC(a){var s=this.c
return A.yF(s.cT(0,a),0,this.a.a)&&A.yF(s.dD(0,a),0,this.a.c)},
i(a){var s=this.c
return"SpringSimulation(end: "+B.d.K(this.b,1)+", "+s.grF(s).i(0)+")"}}
A.jX.prototype={
cT(a,b){return this.jC(b)?this.b:this.MF(0,b)}}
A.a6_.prototype={
cT(a,b){return(this.b+this.c*b)*Math.pow(2.718281828459045,this.a*b)},
dD(a,b){var s=this.a,r=Math.pow(2.718281828459045,s*b),q=this.c
return s*(this.b+q*b)*r+q*r},
grF(a){return B.Uo}}
A.a87.prototype={
cT(a,b){var s=this
return s.c*Math.pow(2.718281828459045,s.a*b)+s.d*Math.pow(2.718281828459045,s.b*b)},
dD(a,b){var s=this,r=s.a,q=s.b
return s.c*r*Math.pow(2.718281828459045,r*b)+s.d*q*Math.pow(2.718281828459045,q*b)},
grF(a){return B.Uq}}
A.a9B.prototype={
cT(a,b){var s=this,r=s.a*b
return Math.pow(2.718281828459045,s.b*b)*(s.c*Math.cos(r)+s.d*Math.sin(r))},
dD(a,b){var s,r=this,q=r.b,p=Math.pow(2.718281828459045,q*b),o=r.a,n=o*b,m=Math.cos(n),l=Math.sin(n)
n=r.d
s=r.c
return p*(n*o*m-s*o*l)+q*p*(n*l+s*m)},
grF(a){return B.Up}}
A.IK.prototype={
i(a){return"Tolerance(distance: \xb1"+A.h(this.a)+", time: \xb10.001, velocity: \xb1"+A.h(this.c)+")"}}
A.ob.prototype={
xa(){var s=this,r=s.y1$
r===$&&A.b()
r=r.e
r.toString
r.swg(s.FU())
if(s.y1$.e.A$!=null)s.JJ()},
xg(){},
xc(){},
FU(){var s,r=$.c9(),q=r.w
if(q==null){s=self.window.devicePixelRatio
q=s===0?1:s}return new A.J1(r.gjK().cE(0,q),q)},
Sm(){var s,r=this
if($.aI().a.c){if(r.y2$==null){s=r.y1$
s===$&&A.b()
r.y2$=s.Gp()}}else{s=r.y2$
if(s!=null)s.m()
r.y2$=null}},
K5(a){var s,r=this
if(a){if(r.y2$==null){s=r.y1$
s===$&&A.b()
r.y2$=s.Gp()}}else{s=r.y2$
if(s!=null)s.m()
r.y2$=null}},
SF(a){B.Sn.m6("first-frame",null,!1,t.H)},
Sk(a,b,c){var s=this.y1$
s===$&&A.b()
s=s.as
if(s!=null)s.a0J(a,b,null)},
So(){var s,r=this.y1$
r===$&&A.b()
r=r.e
r.toString
s=t.W
s.a(A.F.prototype.gbq.call(r)).ay.E(0,r)
s.a(A.F.prototype.gbq.call(r)).lp()},
Ss(a){var s=this.y1$
s===$&&A.b()
s.e.toString
s=$.di;(s==null?$.di=A.jj():s).a1R(a)},
Sq(){var s=this.y1$
s===$&&A.b()
s.e.kF()},
RR(a){this.wM()
this.US()},
US(){$.bF.cy$.push(new A.a_Y(this))},
Ff(){--this.bk$
if(!this.ba$)this.rY()},
wM(){var s=this,r=s.y1$
r===$&&A.b()
r.Zc()
s.y1$.Zb()
s.y1$.Zd()
if(s.ba$||s.bk$===0){s.y1$.e.Xy()
s.y1$.Ze()
s.ba$=!0}},
$iaf:1,
$idf:1}
A.a_Y.prototype={
$1(a){var s=this.a,r=s.xr$
r.toString
s=s.y1$
s===$&&A.b()
r.a1O(s.e.ga_h())},
$S:2}
A.aN.prototype={
wj(a,b,c,d){var s=this,r=d==null?s.a:d,q=b==null?s.b:b,p=c==null?s.c:c
return new A.aN(r,q,p,a==null?s.d:a)},
XX(a,b){return this.wj(null,null,a,b)},
FO(a){return this.wj(a,null,null,null)},
XS(a){return this.wj(null,a,null,null)},
FZ(a){var s=this,r=a.gc9(),q=a.gb5(a)+a.gb8(a),p=Math.max(0,s.a-r),o=Math.max(0,s.c-q)
return new A.aN(p,Math.max(p,s.b-r),o,Math.max(o,s.d-q))},
na(a){var s=this,r=a.a,q=a.b,p=a.c,o=a.d
return new A.aN(A.E(s.a,r,q),A.E(s.b,r,q),A.E(s.c,p,o),A.E(s.d,p,o))},
yG(a,b){var s,r,q=this,p=b==null,o=q.a,n=p?o:A.E(b,o,q.b),m=q.b
p=p?m:A.E(b,o,m)
o=a==null
m=q.c
s=o?m:A.E(a,m,q.d)
r=q.d
return new A.aN(n,p,s,o?r:A.E(a,m,r))},
rB(a){return this.yG(a,null)},
yF(a){return this.yG(null,a)},
bx(a){var s=this
return new A.Z(A.E(a.a,s.a,s.b),A.E(a.b,s.c,s.d))},
mN(a){var s,r,q,p,o,n=this,m=n.a,l=n.b
if(m>=l&&n.c>=n.d)return new A.Z(A.E(0,m,l),A.E(0,n.c,n.d))
s=a.a
r=a.b
q=s/r
if(s>l){r=l/q
s=l}p=n.d
if(r>p){s=p*q
r=p}if(s<m){r=m/q
s=m}o=n.c
if(r<o){s=o*q
r=o}return new A.Z(A.E(s,m,l),A.E(r,o,p))},
gHy(){var s=this
return s.a>=s.b&&s.c>=s.d},
a6(a,b){var s=this
return new A.aN(s.a*b,s.b*b,s.c*b,s.d*b)},
cE(a,b){var s=this
return new A.aN(s.a/b,s.b/b,s.c/b,s.d/b)},
ga_I(){var s=this,r=s.a
if(r>=0)if(r<=s.b){r=s.c
r=r>=0&&r<=s.d}else r=!1
else r=!1
return r},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.z(s))return!1
return b instanceof A.aN&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gt(a){var s=this
return A.U(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s,r=this,q=r.ga_I()?"":"; NOT NORMALIZED",p=r.a
if(p===1/0&&r.c===1/0)return"BoxConstraints(biggest"+q+")"
if(p===0&&r.b===1/0&&r.c===0&&r.d===1/0)return"BoxConstraints(unconstrained"+q+")"
s=new A.Ro()
return"BoxConstraints("+s.$3(p,r.b,"w")+", "+s.$3(r.c,r.d,"h")+q+")"}}
A.Ro.prototype={
$3(a,b,c){if(a===b)return c+"="+B.d.K(a,1)
return B.d.K(a,1)+"<="+c+"<="+B.d.K(b,1)},
$S:201}
A.fU.prototype={
vY(a,b,c){if(c!=null){c=A.Fz(A.ada(c))
if(c==null)return!1}return this.Fd(a,b,c)},
mv(a,b,c){var s,r=b==null,q=r?c:c.ad(0,b)
r=!r
if(r)this.c.push(new A.py(new A.u(-b.a,-b.b)))
s=a.$2(this,q)
if(r)this.rm()
return s},
Fd(a,b,c){var s,r=c==null,q=r?b:A.ce(c,b)
r=!r
if(r)this.c.push(new A.wK(c))
s=a.$2(this,q)
if(r)this.rm()
return s},
Fc(a,b,c){var s,r=this
if(b!=null)r.c.push(new A.py(new A.u(-b.a,-b.b)))
else{c.toString
c=A.Fz(A.ada(c))
c.toString
r.c.push(new A.wK(c))}s=a.$1(r)
r.rm()
return s},
WC(a,b){return this.Fc(a,null,b)},
WB(a,b){return this.Fc(a,b,null)}}
A.mW.prototype={
i(a){return"<optimized out>#"+A.bB(this.a)+"@"+this.c.i(0)}}
A.ec.prototype={
i(a){return"offset="+this.a.i(0)}}
A.qE.prototype={}
A.C.prototype={
e6(a){if(!(a.e instanceof A.ec))a.e=new A.ec(B.j)},
fA(a){var s,r=this.k1
if(r==null)r=this.k1=A.A(t.k,t.DB)
s=r.bJ(0,a,new A.a_q(this,a))
return s},
c2(a){return B.O},
giX(){var s=this.k3
return new A.y(0,0,0+s.a,0+s.b)},
rO(a,b){var s=null
try{s=this.iT(a)}finally{}if(s==null&&!b)return this.k3.b
return s},
Jm(a){return this.rO(a,!1)},
iT(a){var s=this,r=s.k4
if(r==null)r=s.k4=A.A(t.E7,t.u6)
r.bJ(0,a,new A.a_p(s,a))
return s.k4.j(0,a)},
ei(a){return null},
gX(){return t.k.a(A.x.prototype.gX.call(this))},
P7(){var s,r=this,q=r.k4,p=q==null
if(!(!p&&q.a!==0)){s=r.id
if(!(s!=null&&s.a!==0)){s=r.k1
s=s!=null&&s.a!==0}else s=!0}else s=!0
if(s){if(!p)q.T(0)
q=r.id
if(q!=null)q.T(0)
q=r.k1
if(q!=null)q.T(0)
return!0}return!1},
a4(){var s=this
if(s.P7()&&s.c instanceof A.x){s.r0()
return}s.M0()},
ci(a,b){var s,r=this
if(r.k3!=null)if(!a.k(0,t.k.a(A.x.prototype.gX.call(r)))){s=r.k4
s=s!=null&&s.a!==0}else s=!1
else s=!1
if(s){s=r.k4
if(s!=null)s.T(0)}r.M_(a,b)},
hN(a){return this.ci(a,!1)},
nK(){this.k3=this.c2(t.k.a(A.x.prototype.gX.call(this)))},
bC(){},
bO(a,b){var s=this
if(s.k3.B(0,b))if(s.cB(a,b)||s.iD(b)){a.E(0,new A.mW(b,s))
return!0}return!1},
iD(a){return!1},
cB(a,b){return!1},
d1(a,b){var s,r=a.e
r.toString
s=t.Ch.a(r).a
b.az(0,s.a,s.b)},
jV(a){var s,r,q,p,o,n=this.bv(0,null)
if(n.fV(n)===0)return B.j
s=new A.f0(new Float64Array(3))
s.eY(0,0,1)
r=new A.f0(new Float64Array(3))
r.eY(0,0,0)
q=n.hR(r)
r=new A.f0(new Float64Array(3))
r.eY(0,0,1)
p=n.hR(r).ad(0,q)
r=new A.f0(new Float64Array(3))
r.eY(a.a,a.b,0)
o=n.hR(r)
r=o.ad(0,p.zq(s.Ga(o)/s.Ga(p))).a
return new A.u(r[0],r[1])},
gha(){var s=this.k3
return new A.y(0,0,0+s.a,0+s.b)},
hH(a,b){this.LZ(a,b)}}
A.a_q.prototype={
$0(){return this.a.c2(this.b)},
$S:202}
A.a_p.prototype={
$0(){return this.a.ei(this.b)},
$S:203}
A.cw.prototype={
Yq(a){var s,r,q,p=this.a3$
for(s=A.n(this).h("cw.1?");p!=null;){r=s.a(p.e)
q=p.iT(a)
if(q!=null)return q+r.a.b
p=r.a7$}return null},
FY(a){var s,r,q,p,o=this.a3$
for(s=A.n(this).h("cw.1"),r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.iT(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.a7$}return r},
wq(a,b){var s,r,q={},p=q.a=this.by$
for(s=A.n(this).h("cw.1");p!=null;p=r){p=p.e
p.toString
s.a(p)
if(a.mv(new A.a_o(q,b,p),p.a,b))return!0
r=p.aL$
q.a=r}return!1},
mT(a,b){var s,r,q,p,o,n=this.a3$
for(s=A.n(this).h("cw.1"),r=b.a,q=b.b;n!=null;){p=n.e
p.toString
s.a(p)
o=p.a
a.eu(n,new A.u(o.a+r,o.b+q))
n=p.a7$}}}
A.a_o.prototype={
$2(a,b){return this.a.a.bO(a,b)},
$S:15}
A.wb.prototype={
ah(a){this.tp(0)}}
A.eL.prototype={
i(a){return this.on(0)+"; id="+A.h(this.e)}}
A.Yt.prototype={
dr(a,b){var s,r=this.b.j(0,a)
r.ci(b,!0)
s=r.k3
s.toString
return s},
dN(a,b){var s=this.b.j(0,a).e
s.toString
t.DU.a(s).a=b},
OQ(a,b){var s,r,q,p,o,n,m=this,l=m.b
try{m.b=A.A(t.K,t.x)
for(r=t.DU,q=b;q!=null;q=n){p=q.e
p.toString
s=r.a(p)
p=m.b
p.toString
o=s.e
o.toString
p.l(0,o,q)
n=s.a7$}m.rk(a)}finally{m.b=l}},
i(a){return"MultiChildLayoutDelegate"}}
A.H0.prototype={
e6(a){if(!(a.e instanceof A.eL))a.e=new A.eL(null,null,B.j)},
swt(a){var s=this,r=s.I
if(r===a)return
if(A.z(a)!==A.z(r)||a.lF(r))s.a4()
s.I=a
s.b!=null},
an(a){this.MY(a)},
ah(a){this.MZ(0)},
c2(a){return a.bx(new A.Z(A.E(1/0,a.a,a.b),A.E(1/0,a.c,a.d)))},
bC(){var s=this,r=t.k.a(A.x.prototype.gX.call(s))
r=r.bx(new A.Z(A.E(1/0,r.a,r.b),A.E(1/0,r.c,r.d)))
s.k3=r
s.I.OQ(r,s.a3$)},
aF(a,b){this.mT(a,b)},
cB(a,b){return this.wq(a,b)}}
A.x4.prototype={
an(a){var s,r,q
this.ea(a)
s=this.a3$
for(r=t.DU;s!=null;){s.an(a)
q=s.e
q.toString
s=r.a(q).a7$}},
ah(a){var s,r,q
this.dw(0)
s=this.a3$
for(r=t.DU;s!=null;){s.ah(0)
q=s.e
q.toString
s=r.a(q).a7$}}}
A.N5.prototype={}
A.Bq.prototype={
V(a,b){var s=this.a
return s==null?null:s.V(0,b)},
F(a,b){var s=this.a
return s==null?null:s.F(0,b)},
gzt(){return null},
zF(a){return this.i_(a)},
qL(a){return null},
i(a){var s=A.bB(this),r=this.a
r=r==null?null:r.i(0)
if(r==null)r=""
return"<optimized out>#"+s+"("+r+")"}}
A.H1.prototype={
sri(a){var s=this.v
if(s==a)return
this.v=a
this.BI(a,s)},
sGI(a){var s=this.O
if(s==a)return
this.O=a
this.BI(a,s)},
BI(a,b){var s=this,r=a==null
if(r)s.ap()
else if(b==null||A.z(a)!==A.z(b)||a.i_(b))s.ap()
if(s.b!=null){if(b!=null)b.F(0,s.gdM())
if(!r)a.V(0,s.gdM())}if(r){if(s.b!=null)s.aY()}else if(b==null||A.z(a)!==A.z(b)||a.zF(b))s.aY()},
sro(a){if(this.au.k(0,a))return
this.au=a
this.a4()},
an(a){var s,r=this
r.lS(a)
s=r.v
if(s!=null)s.V(0,r.gdM())
s=r.O
if(s!=null)s.V(0,r.gdM())},
ah(a){var s=this,r=s.v
if(r!=null)r.F(0,s.gdM())
r=s.O
if(r!=null)r.F(0,s.gdM())
s.kb(0)},
cB(a,b){var s=this.O
if(s!=null){s=s.qL(b)
s=s===!0}else s=!1
if(s)return!0
return this.oq(a,b)},
iD(a){var s=this.v
if(s!=null){s=s.qL(a)
s=s!==!1}else s=!1
return s},
bC(){this.tu()
this.aY()},
mM(a){return a.bx(this.au)},
Dh(a,b,c){var s
A.b4("debugPreviousCanvasSaveCount")
a.cm(0)
if(!b.k(0,B.j))a.az(0,b.a,b.b)
s=this.k3
s.toString
c.aF(a,s)
a.cj(0)},
aF(a,b){var s,r,q=this
if(q.v!=null){s=a.gbA(a)
r=q.v
r.toString
q.Dh(s,b,r)
q.DZ(a)}q.fG(a,b)
if(q.O!=null){s=a.gbA(a)
r=q.O
r.toString
q.Dh(s,b,r)
q.DZ(a)}},
DZ(a){},
ek(a){var s,r=this
r.fF(a)
r.bH=null
s=r.O
r.dH=s==null?null:s.gzt()
a.a=!1},
mC(a,b,c){var s,r,q,p,o=this
o.fl=A.ah5(o.fl,B.rf)
o.hG=A.ah5(o.hG,B.rf)
s=o.fl
r=s!=null&&!s.gN(s)
s=o.hG
q=s!=null&&!s.gN(s)
s=A.a([],t.T)
if(r){p=o.fl
p.toString
B.b.H(s,p)}B.b.H(s,c)
if(q){p=o.hG
p.toString
B.b.H(s,p)}o.Am(a,b,s)},
kF(){this.tr()
this.hG=this.fl=null}}
A.Sf.prototype={}
A.H4.prototype={
O5(a){var s,r,q,p,o=this
try{r=o.I
if(r!==""){q=$.akC()
s=$.an().wl(q)
s.yl($.akD())
s.pJ(r)
r=s.b9()
o.ab!==$&&A.ev()
o.ab=r}else{o.ab!==$&&A.ev()
o.ab=null}}catch(p){}},
giZ(){return!0},
iD(a){return!0},
c2(a){return a.bx(B.Uh)},
aF(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
try{p=a.gbA(a)
o=i.k3
n=b.a
m=b.b
l=o.a
o=o.b
k=$.an().bj()
k.saj(0,$.akB())
p.c7(new A.y(n,m,n+l,m+o),k)
p=i.ab
p===$&&A.b()
if(p!=null){s=i.k3.a
r=0
q=0
if(s>328){s-=128
r+=64}p.hN(new A.jN(s))
if(i.k3.b>96+p.gbI(p)+12)q+=96
a.gbA(a).jn(p,b.U(0,new A.u(r,q)))}}catch(j){}}}
A.CH.prototype={
D(){return"FlexFit."+this.b}}
A.d7.prototype={
i(a){return this.on(0)+"; flex="+A.h(this.e)+"; fit="+A.h(this.f)}}
A.t8.prototype={
D(){return"MainAxisSize."+this.b}}
A.nN.prototype={
D(){return"MainAxisAlignment."+this.b}}
A.jg.prototype={
D(){return"CrossAxisAlignment."+this.b}}
A.o9.prototype={
e6(a){if(!(a.e instanceof A.d7))a.e=new A.d7(null,null,B.j)},
ei(a){if(this.I===B.aQ)return this.FY(a)
return this.Yq(a)},
oG(a){switch(this.I.a){case 0:return a.b
case 1:return a.a}},
oH(a){switch(this.I.a){case 0:return a.a
case 1:return a.b}},
c2(a){var s
if(this.aq===B.n0)return B.O
s=this.Bw(a,A.abv())
switch(this.I.a){case 0:return a.bx(new A.Z(s.a,s.b))
case 1:return a.bx(new A.Z(s.b,s.a))}},
Bw(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.I===B.aQ?a2.b:a2.d,a0=a<1/0,a1=c.a3$
for(s=t.uc,r=a2.b,q=a2.d,p=b,o=0,n=0,m=0;a1!=null;){l=a1.e
l.toString
s.a(l)
k=l.e
if(k==null)k=0
if(k>0){o+=k
p=a1}else{if(c.aq===B.n_)switch(c.I.a){case 0:j=A.mV(q,b)
break
case 1:j=A.mV(b,r)
break
default:j=b}else switch(c.I.a){case 0:j=new A.aN(0,1/0,0,q)
break
case 1:j=new A.aN(0,r,0,1/0)
break
default:j=b}i=a3.$2(a1,j)
m+=c.oH(i)
n=Math.max(n,A.kq(c.oG(i)))}a1=l.a7$}h=Math.max(0,(a0?a:0)-m)
if(o>0){g=a0?h/o:0/0
a1=c.a3$
for(f=0;a1!=null;){l=a1.e
l.toString
k=s.a(l).e
if(k==null)k=0
if(k>0){if(a0)e=a1===p?h-f:g*k
else e=1/0
d=A.b4("minChildExtent")
l=a1.e
l.toString
l=s.a(l).f
switch((l==null?B.nb:l).a){case 0:if(d.b!==d)A.a0(A.XF(d.a))
d.b=e
break
case 1:if(d.b!==d)A.a0(A.XF(d.a))
d.b=0
break}if(c.aq===B.n_)switch(c.I.a){case 0:l=d.b
if(l===d)A.a0(A.fr(d.a))
j=new A.aN(l,e,q,q)
break
case 1:l=d.b
if(l===d)A.a0(A.fr(d.a))
j=new A.aN(r,r,l,e)
break
default:j=b}else switch(c.I.a){case 0:l=d.b
if(l===d)A.a0(A.fr(d.a))
j=new A.aN(l,e,0,q)
break
case 1:l=d.b
if(l===d)A.a0(A.fr(d.a))
j=new A.aN(0,r,l,e)
break
default:j=b}i=a3.$2(a1,j)
m+=c.oH(i)
f+=e
n=Math.max(n,A.kq(c.oG(i)))}l=a1.e
l.toString
a1=s.a(l).a7$}}return new A.a7k(a0&&c.a8===B.Q?a:m,n,m)},
bC(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.k.a(A.x.prototype.gX.call(a)),a1=a.Bw(a0,A.abw()),a2=a1.a,a3=a1.b
if(a.aq===B.n0){s=a.a3$
for(r=t.uc,q=0,p=0,o=0;s!=null;){n=a.A
n.toString
m=s.rO(n,!0)
if(m!=null){q=Math.max(q,m)
p=Math.max(m,p)
o=Math.max(s.k3.b-m,o)
a3=Math.max(p+o,a3)}n=s.e
n.toString
s=r.a(n).a7$}}else q=0
switch(a.I.a){case 0:r=a.k3=a0.bx(new A.Z(a2,a3))
a2=r.a
a3=r.b
break
case 1:r=a.k3=a0.bx(new A.Z(a3,a2))
a2=r.b
a3=r.a
break}l=a2-a1.c
a.ac=Math.max(0,-l)
k=Math.max(0,l)
j=A.b4("leadingSpace")
i=A.b4("betweenSpace")
r=A.aje(a.I,a.aU,a.b3)
h=r===!1
switch(a.ab.a){case 0:j.sbV(0)
i.sbV(0)
break
case 1:j.sbV(k)
i.sbV(0)
break
case 2:j.sbV(k/2)
i.sbV(0)
break
case 3:j.sbV(0)
r=a.d4$
i.sbV(r>1?k/(r-1):0)
break
case 4:r=a.d4$
i.sbV(r>0?k/r:0)
j.sbV(i.aA()/2)
break
case 5:r=a.d4$
i.sbV(r>0?k/(r+1):0)
j.sbV(i.aA())
break}g=h?a2-j.aA():j.aA()
s=a.a3$
for(r=t.uc,n=a3/2,f=i.a;s!=null;){e=s.e
e.toString
r.a(e)
d=a.aq
switch(d.a){case 0:case 1:if(A.aje(A.av_(a.I),a.aU,a.b3)===(d===B.aT))c=0
else{d=s.k3
d.toString
c=a3-a.oG(d)}break
case 2:d=s.k3
d.toString
c=n-a.oG(d)/2
break
case 3:c=0
break
case 4:if(a.I===B.aQ){d=a.A
d.toString
m=s.rO(d,!0)
c=m!=null?q-m:0}else c=0
break
default:c=null}if(h){d=s.k3
d.toString
g-=a.oH(d)}switch(a.I.a){case 0:e.a=new A.u(g,c)
break
case 1:e.a=new A.u(c,g)
break}if(h){d=i.b
if(d===i)A.a0(A.fr(f))
g-=d}else{d=s.k3
d.toString
d=a.oH(d)
b=i.b
if(b===i)A.a0(A.fr(f))
g+=d+b}s=e.a7$}},
cB(a,b){return this.wq(a,b)},
aF(a,b){var s,r,q,p=this
if(!(p.ac>1e-10)){p.mT(a,b)
return}s=p.k3
if(s.gN(s))return
s=p.b1
r=p.cx
r===$&&A.b()
q=p.k3
s.saQ(0,a.jL(r,b,new A.y(0,0,0+q.a,0+q.b),p.gYr(),p.cp,s.a))},
m(){this.b1.saQ(0,null)
this.N_()},
ik(a){var s
switch(this.cp.a){case 0:return null
case 1:case 2:case 3:if(this.ac>1e-10){s=this.k3
s=new A.y(0,0,0+s.a,0+s.b)}else s=null
return s}},
bQ(){var s=this.M3()
return s}}
A.a7k.prototype={}
A.N6.prototype={
an(a){var s,r,q
this.ea(a)
s=this.a3$
for(r=t.uc;s!=null;){s.an(a)
q=s.e
q.toString
s=r.a(q).a7$}},
ah(a){var s,r,q
this.dw(0)
s=this.a3$
for(r=t.uc;s!=null;){s.ah(0)
q=s.e
q.toString
s=r.a(q).a7$}}}
A.N7.prototype={}
A.x5.prototype={
m(){var s,r,q
for(s=this.Gu$,r=s.length,q=0;q<r;++q)s[q].m()
this.hs()},
ev(){this.M2()}}
A.H7.prototype={
SH(){var s=this
if(s.I!=null)return
s.I=s.cz
s.ab=!1},
CU(){this.ab=this.I=null
this.ap()},
sh3(a,b){var s=this,r=s.a8
if(b==r)return
if(b!=null&&r!=null&&b.Hr(r)){b.m()
return}r=s.a8
if(r!=null)r.m()
s.a8=b
s.ap()
if(s.aU==null||s.b3==null)s.a4()},
sbh(a,b){if(b==this.aU)return
this.aU=b
this.a4()},
sbI(a,b){if(b==this.b3)return
this.b3=b
this.a4()},
sJH(a,b){if(b===this.A)return
this.A=b
this.a4()},
VS(){this.ac=null},
saj(a,b){return},
srb(a,b){return},
sl2(a){if(a===this.bs)return
this.bs=a
this.ap()},
sXs(a){return},
sx0(a){if(a==this.dG)return
this.dG=a
this.ap()},
sdY(a){if(a.k(0,this.cz))return
this.cz=a
this.CU()},
sa1i(a,b){if(b===this.cq)return
this.cq=b
this.ap()},
sX6(a){return},
sxq(a){if(a===this.em)return
this.em=a
this.ap()},
sa09(a){return},
sbD(a){if(this.en==a)return
this.en=a
this.CU()},
sxs(a){return},
E6(a){var s,r,q=this,p=q.aU
a=A.mV(q.b3,p).na(a)
p=q.a8
if(p==null)return new A.Z(A.E(0,a.a,a.b),A.E(0,a.c,a.d))
p=p.gbh(p)
s=q.A
r=q.a8
return a.mN(new A.Z(p/s,r.gbI(r)/q.A))},
iD(a){return!0},
c2(a){return this.E6(a)},
bC(){this.k3=this.E6(t.k.a(A.x.prototype.gX.call(this)))},
an(a){this.ea(a)},
ah(a){this.dw(0)},
aF(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(d.a8==null)return
d.SH()
s=a.gbA(a)
r=d.k3
q=b.a
p=b.b
o=r.a
r=r.b
n=d.a8
n.toString
m=d.aq
l=d.A
k=d.ac
j=d.dG
i=d.I
i.toString
h=d.ix
g=d.cq
f=d.ab
f.toString
e=d.em
A.ak3(i,s,h,k,m,d.bs,j,f,n,e,!1,1,new A.y(q,p,q+o,p+r),g,l)},
m(){var s=this.a8
if(s!=null)s.m()
this.a8=null
this.hs()}}
A.qb.prototype={
i(a){return"AnnotationEntry(annotation: "+this.a.i(0)+", localPosition: "+this.b.i(0)+")"}}
A.yW.prototype={}
A.rX.prototype={
ht(){},
pz(a){var s,r=this
r.e+=a
s=t.ow
if(s.a(A.F.prototype.gaS.call(r,r))!=null)s.a(A.F.prototype.gaS.call(r,r)).pz(a)},
m3(a){var s,r,q
for(s=this.d,s=A.ay(s.gaV(s),!0,t.M),r=s.length,q=0;q<r;++q)s[q].$0()},
m(){var s=this.z
if(s!=null)s.m()
this.z=null},
dL(){if(this.y)return
this.y=!0},
shC(a){var s,r=this,q=r.z
if(q!=null)q.m()
r.z=a
q=t.ow
if(q.a(A.F.prototype.gaS.call(r,r))!=null){q.a(A.F.prototype.gaS.call(r,r)).toString
s=!0}else s=!1
if(s)q.a(A.F.prototype.gaS.call(r,r)).dL()},
rG(){this.y=this.y||!1},
io(a){var s
this.dL()
s=a.e
if(s!==0)this.pz(-s)
this.te(a)},
ln(a){var s,r,q=this,p=t.ow.a(A.F.prototype.gaS.call(q,q))
if(p!=null){s=q.as
r=q.Q
if(s==null)p.CW=r
else s.Q=r
r=q.Q
if(r==null)p.cx=s
else r.as=s
q.Q=q.as=null
p.io(q)
q.w.saQ(0,null)}},
eo(a,b,c){return!1},
GC(a,b,c){var s=A.a([],c.h("w<qb<0>>"))
this.eo(new A.yW(s,c.h("yW<0>")),b,!0,c)
return s.length===0?null:B.b.gJ(s).a},
Op(a){var s,r=this
if(!r.y&&r.z!=null){s=r.z
s.toString
a.Wx(s)
return}r.fO(a)
r.y=!1},
bQ(){var s=this.KM()
return s+(this.b==null?" DETACHED":"")}}
A.DB.prototype={
saQ(a,b){var s=this.a
if(b==null?s==null:b===s)return
if(s!=null)if(--s.x===0)s.m()
this.a=b
if(b!=null)++b.x},
i(a){var s=this.a
return"LayerHandle("+(s!=null?J.dE(s):"DISPOSED")+")"}}
A.Gz.prototype={
sI2(a){var s
this.dL()
s=this.cx
if(s!=null)s.m()
this.cx=a},
m(){this.sI2(null)
this.A5()},
fO(a){var s=this.cx
s.toString
a.Wv(B.j,s,this.cy,this.db)},
eo(a,b,c){return!1}}
A.Gs.prototype={
fO(a){a.Wu(this.cx,this.CW)
a.K4(this.cy)
a.JX(!1)
a.JW(!1)},
eo(a,b,c){return!1}}
A.ee.prototype={
m3(a){var s
this.Lf(a)
if(!a)return
s=this.CW
for(;s!=null;){s.m3(!0)
s=s.Q}},
WY(a){var s=this
s.rG()
s.fO(a)
if(s.e>0)s.m3(!0)
s.y=!1
return a.b9()},
m(){this.yu()
this.d.T(0)
this.A5()},
rG(){var s,r=this
r.Lg()
s=r.CW
for(;s!=null;){s.rG()
r.y=r.y||s.y
s=s.Q}},
eo(a,b,c,d){var s,r,q
for(s=this.cx,r=a.a;s!=null;s=s.as){if(s.eo(a,b,!0,d))return!0
q=r.length
if(q!==0)return!1}return!1},
an(a){var s
this.td(a)
s=this.CW
for(;s!=null;){s.an(a)
s=s.Q}},
ah(a){var s
this.dw(0)
s=this.CW
for(;s!=null;){s.ah(0)
s=s.Q}this.m3(!1)},
fQ(a,b){var s,r=this
r.dL()
s=b.e
if(s!==0)r.pz(s)
r.zR(b)
s=b.as=r.cx
if(s!=null)s.Q=b
r.cx=b
if(r.CW==null)r.CW=b
b.w.saQ(0,b)},
yu(){var s,r,q,p=this,o=p.CW
for(s=t.ow;o!=null;o=r){r=o.Q
o.Q=o.as=null
p.dL()
q=o.e
if(q!==0){q=-q
p.e+=q
if(s.a(A.F.prototype.gaS.call(p,p))!=null)s.a(A.F.prototype.gaS.call(p,p)).pz(q)}p.te(o)
o.w.saQ(0,null)}p.cx=p.CW=null},
fO(a){this.ja(a)},
ja(a){var s=this.CW
for(;s!=null;){s.Op(a)
s=s.Q}}}
A.hi.prototype={
shP(a,b){if(!b.k(0,this.p1))this.dL()
this.p1=b},
eo(a,b,c,d){return this.lN(a,b.ad(0,this.p1),!0,d)},
fO(a){var s=this,r=s.p1
s.shC(a.Ic(r.a,r.b,t.cV.a(s.z)))
s.ja(a)
a.hc()}}
A.n1.prototype={
eo(a,b,c,d){if(!this.p1.B(0,b))return!1
return this.lN(a,b,!0,d)},
fO(a){var s=this,r=s.p1
r.toString
s.shC(a.a0T(r,s.p2,t.CW.a(s.z)))
s.ja(a)
a.hc()}}
A.qB.prototype={
eo(a,b,c,d){if(!this.p1.B(0,b))return!1
return this.lN(a,b,!0,d)},
fO(a){var s=this,r=s.p1
r.toString
s.shC(a.a0R(r,s.p2,t.cB.a(s.z)))
s.ja(a)
a.hc()}}
A.qA.prototype={
eo(a,b,c,d){if(!this.p1.B(0,b))return!1
return this.lN(a,b,!0,d)},
fO(a){var s=this,r=s.p1
r.toString
s.shC(a.a0Q(r,s.p2,t.xS.a(s.z)))
s.ja(a)
a.hc()}}
A.k6.prototype={
sbm(a,b){var s=this
if(b.k(0,s.af))return
s.af=b
s.al=!0
s.dL()},
fO(a){var s,r,q=this
q.aa=q.af
if(!q.p1.k(0,B.j)){s=q.p1
s=A.ts(s.a,s.b,0)
r=q.aa
r.toString
s.cr(0,r)
q.aa=s}q.shC(a.a0V(q.aa.a,t.Al.a(q.z)))
q.ja(a)
a.hc()},
VL(a){var s,r=this
if(r.al){s=r.af
s.toString
r.ak=A.Fz(A.ada(s))
r.al=!1}s=r.ak
if(s==null)return null
return A.ce(s,a)},
eo(a,b,c,d){var s=this.VL(b)
if(s==null)return!1
return this.LD(a,s,!0,d)}}
A.G2.prototype={
sFg(a,b){var s=this,r=s.af
if(b!=r){if(b===255||r===255)s.shC(null)
s.af=b
s.dL()}},
fO(a){var s,r,q,p=this
if(p.CW==null){p.shC(null)
return}s=p.af
s.toString
r=p.p1
q=p.z
if(s<255)p.shC(a.a0U(s,r,t.i6.a(q)))
else p.shC(a.Ic(r.a,r.b,t.cV.a(q)))
p.ja(a)
a.hc()}}
A.qa.prototype={
eo(a,b,c,d){var s,r,q,p=this,o=p.lN(a,b,!0,d),n=a.a
if(n.length!==0&&!0)return o
s=p.p2
if(s!=null){r=p.p3
q=r.a
r=r.b
s=!new A.y(q,r,q+s.a,r+s.b).B(0,b)}else s=!1
if(s)return o
if(A.aA(p.$ti.c)===A.aA(d)){o=o||!1
n.push(new A.qb(d.a(p.p1),b.ad(0,p.p3),d.h("qb<0>")))}return o}}
A.Lr.prototype={}
A.LU.prototype={
a1j(a){var s=this.a
this.a=a
return s},
i(a){var s="<optimized out>#",r=A.bB(this.b),q=this.a.a
return s+A.bB(this)+"("+("latestEvent: "+(s+r))+", "+("annotations: [list of "+q+"]")+")"}}
A.LV.prototype={
ghy(a){var s=this.c
return s.ghy(s)}}
A.FJ.prototype={
CA(a){var s,r,q,p,o,n,m=t.mC,l=A.ik(null,null,null,m,t.rA)
for(s=a.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
o=p.a
if(m.b(o)){n=p.b
n.toString
l.l(0,o,n)}}return l},
Q8(a,b){var s=a.b,r=s.gbu(s)
s=a.b
if(!this.b.S(0,s.ghy(s)))return A.ik(null,null,null,t.mC,t.rA)
return this.CA(b.$1(r))},
Cn(a){var s,r
A.apn(a)
s=a.b
r=A.n(s).h("b_<1>")
this.a.Zm(a.ghy(a),a.d,A.nO(new A.b_(s,r),new A.Yp(),r.h("q.E"),t.oR))},
a1U(a,b){var s,r,q,p,o
if(a.gc4(a)!==B.cA)return
if(t.zs.b(a))return
s=t.yg.b(a)?A.ag6():b.$0()
r=a.ghy(a)
q=this.b
p=q.j(0,r)
if(!A.apo(p,a))return
o=q.a
new A.Ys(this,p,a,r,s).$0()
if(o!==0!==(q.a!==0))this.aw()},
a1O(a){new A.Yq(this,a).$0()}}
A.Yp.prototype={
$1(a){return a.gFW(a)},
$S:204}
A.Ys.prototype={
$0(){var s=this
new A.Yr(s.a,s.b,s.c,s.d,s.e).$0()},
$S:0}
A.Yr.prototype={
$0(){var s,r,q,p,o,n=this,m=null,l=n.b
if(l==null){s=n.c
if(t.yg.b(s))return
n.a.b.l(0,n.d,new A.LU(A.ik(m,m,m,t.mC,t.rA),s))}else{s=n.c
if(t.yg.b(s))n.a.b.u(0,s.ghy(s))}r=n.a
q=r.b.j(0,n.d)
if(q==null){l.toString
q=l}p=q.b
q.b=s
o=t.yg.b(s)?A.ik(m,m,m,t.mC,t.rA):r.CA(n.e)
r.Cn(new A.LV(q.a1j(o),o,p,s))},
$S:0}
A.Yq.prototype={
$0(){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.b,r=r.gaV(r),r=new A.dJ(J.aw(r.a),r.b),q=this.b,p=A.n(r).z[1];r.q();){o=r.a
if(o==null)o=p.a(o)
n=o.b
m=s.Q8(o,q)
l=o.a
o.a=m
s.Cn(new A.LV(l,m,n,null))}},
$S:0}
A.Yn.prototype={
$2(a,b){var s
if(!this.a.S(0,a))if(a.gyX()&&a.gxZ(a)!=null){s=a.gxZ(a)
s.toString
s.$1(this.b.aG(this.c.j(0,a)))}},
$S:205}
A.Yo.prototype={
$1(a){return!this.a.S(0,a)},
$S:206}
A.Pu.prototype={}
A.c3.prototype={
ah(a){},
i(a){return"<none>"}}
A.jM.prototype={
eu(a,b){var s,r=this
if(a.gdn()){r.lM()
if(!a.cy){s=a.ay
s===$&&A.b()
s=!s}else s=!0
if(s)A.agO(a,null,!0)
else if(a.db)A.apI(a)
s=a.ch.a
s.toString
t.cY.a(s)
s.shP(0,b)
r.w2(s)}else{s=a.ay
s===$&&A.b()
if(s){a.ch.saQ(0,null)
a.va(r,b)}else a.va(r,b)}},
w2(a){a.ln(0)
this.a.fQ(0,a)},
gbA(a){var s,r,q=this
if(q.e==null){q.c=A.apL(q.b)
s=$.an()
r=s.Y9()
q.d=r
q.e=s.Y3(r,null)
r=q.c
r.toString
q.a.fQ(0,r)}s=q.e
s.toString
return s},
lM(){var s,r=this
if(r.e==null)return
s=r.c
s.toString
s.sI2(r.d.YM())
r.e=r.d=r.c=null},
zA(){var s=this.c
if(s!=null)if(!s.cy){s.cy=!0
s.dL()}},
nO(a,b,c,d){var s,r=this
if(a.CW!=null)a.yu()
r.lM()
r.w2(a)
s=r.Y5(a,d==null?r.b:d)
b.$2(s,c)
s.lM()},
Ib(a,b,c){return this.nO(a,b,c,null)},
Y5(a,b){return new A.jM(a,b)},
jL(a,b,c,d,e,f){var s,r,q=this
if(e===B.l){d.$2(q,b)
return null}s=c.cW(b)
if(a){if(f==null){r=new A.n1(B.af,A.A(t.S,t.M),A.aq())
r.ht()}else r=f
if(!s.k(0,r.p1)){r.p1=s
r.dL()}if(e!==r.p2){r.p2=e
r.dL()}q.nO(r,d,b,s)
return r}else{q.Xn(s,e,s,new A.Zc(q,d,b))
return null}},
a0S(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.l){e.$2(p,b)
return null}s=c.cW(b)
r=d.cW(b)
if(a){if(g==null){q=new A.qB(B.mO,A.A(t.S,t.M),A.aq())
q.ht()}else q=g
if(!r.k(0,q.p1)){q.p1=r
q.dL()}if(f!==q.p2){q.p2=f
q.dL()}p.nO(q,e,b,s)
return q}else{p.Xl(r,f,s,new A.Zb(p,e,b))
return null}},
Ia(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.l){e.$2(p,b)
return null}s=c.cW(b)
r=d.cW(b)
if(a){if(g==null){q=new A.qA(B.mO,A.A(t.S,t.M),A.aq())
q.ht()}else q=g
if(r!==q.p1){q.p1=r
q.dL()}if(f!==q.p2){q.p2=f
q.dL()}p.nO(q,e,b,s)
return q}else{p.Xk(r,f,s,new A.Za(p,e,b))
return null}},
nP(a,b,c,d,e){var s,r=this,q=b.a,p=b.b,o=A.ts(q,p,0)
o.cr(0,c)
o.az(0,-q,-p)
if(a){s=e==null?A.ahM(null):e
s.sbm(0,o)
r.nO(s,d,b,A.agA(o,r.b))
return s}else{q=r.gbA(r)
q.cm(0)
q.ag(0,o.a)
d.$2(r,b)
r.gbA(r).cj(0)
return null}},
a0W(a,b,c,d){return this.nP(a,b,c,d,null)},
Id(a,b,c,d){var s=d==null?A.agL():d
s.sFg(0,b)
s.shP(0,a)
this.Ib(s,c,B.j)
return s},
i(a){return"PaintingContext#"+A.fA(this)+"(layer: "+this.a.i(0)+", canvas bounds: "+this.b.i(0)+")"}}
A.Zc.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.Zb.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.Za.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.S4.prototype={}
A.a1u.prototype={
m(){var s,r=this.b
if(r!=null)this.a.as.F(0,r)
r=this.a
if(--r.at===0){s=r.as
s.b.T(0)
s.c.T(0)
s.d.T(0)
s.dz()
r.as=null
r.d.$0()}}}
A.GA.prototype={
lp(){this.a.$0()},
sa1s(a){var s=this.e
if(s===a)return
if(s!=null)s.ah(0)
this.e=a
a.an(this)},
Zc(){var s,r,q,p,o,n,m,l,k,j,i,h=this
try{for(p=t.W,o=t.By;n=h.r,n.length!==0;){s=n
h.r=A.a([],o)
n=s
m=new A.Zn()
if(!!n.immutable$list)A.a0(A.V("sort"))
l=n.length-1
if(l-0<=32)A.Ic(n,0,l,m)
else A.Ib(n,0,l,m)
for(r=0;r<J.bG(s);++r){if(h.f){h.f=!1
n=h.r
if(n.length!==0){m=s
l=r
k=J.bG(s)
A.cW(l,k,J.bG(m),null,null)
j=A.aM(m)
i=new A.fH(m,l,k,j.h("fH<1>"))
i.ty(m,l,k,j.c)
B.b.H(n,i)
break}}q=J.b9(s,r)
if(q.z){n=q
n=p.a(A.F.prototype.gbq.call(n))===h}else n=!1
if(n)q.SZ()}h.f=!1}}finally{h.f=!1}},
PU(a){try{a.$0()}finally{this.f=!0}},
Zb(){var s,r,q,p,o=this.y
B.b.cX(o,new A.Zm())
for(s=o.length,r=t.W,q=0;q<o.length;o.length===s||(0,A.P)(o),++q){p=o[q]
if(p.CW&&r.a(A.F.prototype.gbq.call(p))===this)p.ED()}B.b.T(o)},
Zd(){var s,r,q,p,o,n,m,l,k
try{s=this.z
this.z=A.a([],t.By)
for(q=s,J.aca(q,new A.Zo()),p=q.length,o=t.W,n=t.cY,m=0;m<q.length;q.length===p||(0,A.P)(q),++m){r=q[m]
if(r.cy||r.db){l=r
l=o.a(A.F.prototype.gbq.call(l))===this}else l=!1
if(l)if(r.ch.a.b!=null)if(r.cy)A.agO(r,null,!1)
else{l=r
k=l.ch.a
k.toString
l.o0(n.a(k))
l.db=!1}else r.Vj()}}finally{}},
YO(a){var s,r=this
if(++r.at===1){s=t.ju
r.as=new A.uZ(r.c,A.b7(s),A.A(t.S,s),A.b7(s),$.bq())
r.b.$0()}if(a!=null)r.as.V(0,a)
return new A.a1u(r,a)},
Gp(){return this.YO(null)},
Ze(){var s,r,q,p,o,n,m,l,k=this
if(k.as==null)return
try{q=k.ay
p=A.ay(q,!0,A.n(q).c)
B.b.cX(p,new A.Zp())
s=p
q.T(0)
for(q=s,o=q.length,n=t.W,m=0;m<q.length;q.length===o||(0,A.P)(q),++m){r=q[m]
if(r.dy){l=r
l=n.a(A.F.prototype.gbq.call(l))===k}else l=!1
if(l)r.W2()}k.as.JU()}finally{}}}
A.Zn.prototype={
$2(a,b){return a.a-b.a},
$S:41}
A.Zm.prototype={
$2(a,b){return a.a-b.a},
$S:41}
A.Zo.prototype={
$2(a,b){return b.a-a.a},
$S:41}
A.Zp.prototype={
$2(a,b){return a.a-b.a},
$S:41}
A.x.prototype={
aD(){var s=this
s.cx=s.gdn()||s.gmw()
s.ay=s.gdn()},
ev(){var s=this
s.a4()
s.le()
s.ap()
s.aY()
s.aM(new A.a_C())},
m(){this.ch.saQ(0,null)},
e6(a){if(!(a.e instanceof A.c3))a.e=new A.c3()},
hw(a){var s=this
s.e6(a)
s.a4()
s.le()
s.aY()
s.zR(a)},
io(a){var s=this
a.Bh()
a.e.ah(0)
a.e=null
s.te(a)
s.a4()
s.le()
s.aY()},
aM(a){},
ph(a,b,c){A.dI(new A.bz(b,c,"rendering library",A.bm("during "+a+"()"),new A.a_y(this),!1))},
an(a){var s=this
s.td(a)
if(s.z&&s.Q!=null){s.z=!1
s.a4()}if(s.CW){s.CW=!1
s.le()}if(s.cy&&s.ch.a!=null){s.cy=!1
s.ap()}if(s.dy&&s.gvt().a){s.dy=!1
s.aY()}},
gX(){var s=this.at
if(s==null)throw A.d(A.ad("A RenderObject does not have any constraints before it has been laid out."))
return s},
a4(){var s,r=this
if(r.z)return
s=r.Q
if(s==null){r.z=!0
if(r.c!=null)r.r0()
return}if(s!==r)r.r0()
else{r.z=!0
s=t.W
if(s.a(A.F.prototype.gbq.call(r))!=null){s.a(A.F.prototype.gbq.call(r)).r.push(r)
s.a(A.F.prototype.gbq.call(r)).lp()}}},
r0(){this.z=!0
var s=this.c
s.toString
t.d.a(s)
if(!this.as)s.a4()},
Bh(){var s=this
if(s.Q!==s){s.Q=null
s.aM(A.ak0())}},
Uj(){var s,r,q=this,p=q.Q
if(p===q)return
s=t.B2.a(q.c)
r=s==null?null:s.Q
if(r!=p){q.Q=r
q.aM(A.ak1())}},
SZ(){var s,r,q,p=this
try{p.bC()
p.aY()}catch(q){s=A.au(q)
r=A.aG(q)
p.ph("performLayout",s,r)}p.z=!1
p.ap()},
ci(a,b){var s,r,q,p,o,n,m,l=this
if(!b||l.giZ()||a.gHy()||!(l.c instanceof A.x))o=l
else{n=l.c
n.toString
n=t.d.a(n).Q
n.toString
o=n}if(!l.z&&a.k(0,l.at)){if(o!==l.Q){l.Q=o
l.aM(A.ak1())}return}l.at=a
n=l.Q
if(n!=null&&o!==n)l.aM(A.ak0())
l.Q=o
if(l.giZ())try{l.nK()}catch(m){s=A.au(m)
r=A.aG(m)
l.ph("performResize",s,r)}try{l.bC()
l.aY()}catch(m){q=A.au(m)
p=A.aG(m)
l.ph("performLayout",q,p)}l.z=!1
l.ap()},
giZ(){return!1},
Hp(a,b){var s=this
s.as=!0
try{t.W.a(A.F.prototype.gbq.call(s)).PU(new A.a_B(s,a,b))}finally{s.as=!1}},
gdn(){return!1},
gmw(){return!1},
o0(a){return a==null?A.apD(B.j):a},
le(){var s,r,q,p=this
if(p.CW)return
s=p.CW=!0
r=p.c
if(r instanceof A.x){if(r.CW)return
q=p.ay
q===$&&A.b()
if((q?!p.gdn():s)&&!r.gdn()){r.le()
return}}s=t.W
if(s.a(A.F.prototype.gbq.call(p))!=null)s.a(A.F.prototype.gbq.call(p)).y.push(p)},
ED(){var s,r,q=this
if(!q.CW)return
s=q.cx
s===$&&A.b()
q.cx=!1
q.aM(new A.a_z(q))
if(q.gdn()||q.gmw())q.cx=!0
if(!q.gdn()){r=q.ay
r===$&&A.b()}else r=!1
if(r){q.db=q.cy=!1
s=t.W.a(A.F.prototype.gbq.call(q))
if(s!=null)B.b.u(s.z,q)
q.CW=!1
q.ap()}else if(s!==q.cx){q.CW=!1
q.ap()}else q.CW=!1},
ap(){var s,r=this
if(r.cy)return
r.cy=!0
if(r.gdn()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=t.W
if(s.a(A.F.prototype.gbq.call(r))!=null){s.a(A.F.prototype.gbq.call(r)).z.push(r)
s.a(A.F.prototype.gbq.call(r)).lp()}}else{s=r.c
if(s instanceof A.x)s.ap()
else{s=t.W
if(s.a(A.F.prototype.gbq.call(r))!=null)s.a(A.F.prototype.gbq.call(r)).lp()}}},
a07(){var s,r=this
if(r.db||r.cy)return
r.db=!0
if(r.gdn()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=t.W
if(s.a(A.F.prototype.gbq.call(r))!=null){s.a(A.F.prototype.gbq.call(r)).z.push(r)
s.a(A.F.prototype.gbq.call(r)).lp()}}else r.ap()},
Vj(){var s,r=this.c
for(;r instanceof A.x;){if(r.gdn()){s=r.ch.a
if(s==null)break
if(s.b!=null)break
r.cy=!0}r=r.c}},
va(a,b){var s,r,q,p=this
if(p.z)return
p.db=p.cy=!1
p.ay=p.gdn()
try{p.aF(a,b)}catch(q){s=A.au(q)
r=A.aG(q)
p.ph("paint",s,r)}},
aF(a,b){},
d1(a,b){},
lk(a){return!0},
bv(a,b){var s,r,q,p,o,n,m,l,k=b==null
if(k){s=t.W.a(A.F.prototype.gbq.call(this)).e
if(s instanceof A.x)b=s}r=A.a([],t.By)
q=t.d
p=this
while(p!==b){r.push(p)
o=p.c
o.toString
q.a(o)
p=o}if(!k){b.toString
r.push(b)}n=new A.ba(new Float64Array(16))
n.cU()
for(m=r.length-1;m>0;m=l){l=m-1
r[m].d1(r[l],n)}return n},
ik(a){return null},
wv(a){return null},
ek(a){},
t1(a){var s
if(t.W.a(A.F.prototype.gbq.call(this)).as==null)return
s=this.fr
if(s!=null&&!s.as)s.JT(a)
else{s=this.c
if(s!=null)t.d.a(s).t1(a)}},
gvt(){var s,r=this
if(r.dx==null){s=A.oq()
r.dx=s
r.ek(s)}s=r.dx
s.toString
return s},
kF(){this.dy=!0
this.fr=null
this.aM(new A.a_A())},
aY(){var s,r,q,p,o,n,m=this
if(m.b==null||t.W.a(A.F.prototype.gbq.call(m)).as==null){m.dx=null
return}if(m.fr!=null){s=m.dx
s=s==null?null:s.a
r=s===!0}else r=!1
m.dx=null
q=m.gvt().a&&r
s=t.d
p=m
while(!0){if(!(!q&&p.c instanceof A.x))break
if(p!==m&&p.dy)break
p.dy=!0
o=p.c
o.toString
s.a(o)
if(o.dx==null){n=A.oq()
o.dx=n
o.ek(n)}q=o.dx.a
if(q&&o.fr==null)return
p=o}if(p!==m&&m.fr!=null&&m.dy)t.W.a(A.F.prototype.gbq.call(m)).ay.u(0,m)
if(!p.dy){p.dy=!0
s=t.W
if(s.a(A.F.prototype.gbq.call(m))!=null){s.a(A.F.prototype.gbq.call(m)).ay.E(0,p)
s.a(A.F.prototype.gbq.call(m)).lp()}}},
W2(){var s,r,q,p,o,n,m=this,l=null
if(m.z)return
s=m.fr
if(s==null)s=l
else{s=t.aa.a(A.F.prototype.gaS.call(s,s))
if(s==null)s=l
else s=s.at||s.as}r=t.sP.a(m.Cg(s===!0))
q=A.a([],t.T)
s=m.fr
p=s==null
o=p?l:s.x
n=p?l:s.y
s=p?l:s.z
r.mK(s==null?0:s,n,o,q)
B.b.gbi(q)},
Cg(a){var s,r,q,p,o,n,m,l,k=this,j={},i=k.gvt()
j.a=i.c
s=!i.d&&!i.a
r=t.yj
q=A.a([],r)
p=A.b7(t.sP)
k.fz(new A.a_x(j,k,a||i.p2,q,p,i,s))
for(o=A.iQ(p,p.r),n=A.n(o).c;o.q();){m=o.d;(m==null?n.a(m):m).xD()}k.dy=!1
if(!(k.c instanceof A.x)){o=j.a
l=new A.Nr(A.a([],r),A.a([k],t.By),o)}else{o=j.a
if(s)l=new A.a5Z(A.a([],r),o)
else{l=new A.Oh(a,i,A.a([],r),A.a([k],t.By),o)
if(i.a)l.x=!0}}l.H(0,q)
return l},
fz(a){this.aM(a)},
mC(a,b,c){a.iR(0,t.d1.a(c),b)},
hH(a,b){},
bQ(){var s=A.bB(this)
return"<optimized out>#"+s},
i(a){return this.bQ()},
e7(a,b,c,d){var s=this.c
if(s instanceof A.x)s.e7(a,b==null?this:b,c,d)},
lH(){return this.e7(B.aI,null,B.u,null)},
jZ(a,b){return this.e7(B.aI,a,B.u,b)},
$iaf:1}
A.a_C.prototype={
$1(a){a.ev()},
$S:26}
A.a_y.prototype={
$0(){var s=A.a([],t.F),r=this.a
s.push(A.acy("The following RenderObject was being processed when the exception was fired",B.EZ,r))
s.push(A.acy("RenderObject",B.F_,r))
return s},
$S:14}
A.a_B.prototype={
$0(){this.b.$1(this.c.a(this.a.gX()))},
$S:0}
A.a_z.prototype={
$1(a){var s
a.ED()
s=a.cx
s===$&&A.b()
if(s)this.a.cx=!0},
$S:26}
A.a_A.prototype={
$1(a){a.kF()},
$S:26}
A.a_x.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a.Cg(f.c)
if(e.a){B.b.T(f.d)
f.e.T(0)
if(!f.f.a)f.a.a=!0}for(s=e.gHh(),r=s.length,q=f.d,p=f.e,o=f.f,n=f.b,m=f.r,l=0;l<s.length;s.length===r||(0,A.P)(s),++l){k=s[l]
q.push(k)
k.b.push(n)
k.Wz(o.af)
if(o.b||!(n.c instanceof A.x)){k.xD()
continue}if(k.gjh()==null||m)continue
if(!o.Hs(k.gjh()))p.E(0,k)
j=q.length-1
for(i=0;i<j;++i){h=q[i]
g=k.gjh()
g.toString
if(!g.Hs(h.gjh())){p.E(0,k)
p.E(0,h)}}}},
$S:26}
A.az.prototype={
saO(a){var s=this,r=s.A$
if(r!=null)s.io(r)
s.A$=a
if(a!=null)s.hw(a)},
iM(){var s=this.A$
if(s!=null)this.yr(s)},
aM(a){var s=this.A$
if(s!=null)a.$1(s)}}
A.dF.prototype={$ic3:1}
A.ap.prototype={
gpX(){return this.d4$},
CI(a,b){var s,r,q,p=this,o=a.e
o.toString
s=A.n(p).h("ap.1")
s.a(o);++p.d4$
if(b==null){o=o.a7$=p.a3$
if(o!=null){o=o.e
o.toString
s.a(o).aL$=a}p.a3$=a
if(p.by$==null)p.by$=a}else{r=b.e
r.toString
s.a(r)
q=r.a7$
if(q==null){o.aL$=b
p.by$=r.a7$=a}else{o.a7$=q
o.aL$=b
o=q.e
o.toString
s.a(o).aL$=r.a7$=a}}},
xo(a,b,c){this.hw(b)
this.CI(b,c)},
H(a,b){},
Dv(a){var s,r,q,p,o=this,n=a.e
n.toString
s=A.n(o).h("ap.1")
s.a(n)
r=n.aL$
q=n.a7$
if(r==null)o.a3$=q
else{p=r.e
p.toString
s.a(p).a7$=q}q=n.a7$
if(q==null)o.by$=r
else{q=q.e
q.toString
s.a(q).aL$=r}n.a7$=n.aL$=null;--o.d4$},
u(a,b){this.Dv(b)
this.io(b)},
r4(a,b){var s=this,r=a.e
r.toString
if(A.n(s).h("ap.1").a(r).aL$==b)return
s.Dv(a)
s.CI(a,b)
s.a4()},
iM(){var s,r,q,p=this.a3$
for(s=A.n(this).h("ap.1");p!=null;){r=p.a
q=this.a
if(r<=q){p.a=q+1
p.iM()}r=p.e
r.toString
p=s.a(r).a7$}},
aM(a){var s,r,q=this.a3$
for(s=A.n(this).h("ap.1");q!=null;){a.$1(q)
r=q.e
r.toString
q=s.a(r).a7$}},
gZ7(a){return this.a3$},
Xd(a){var s=a.e
s.toString
return A.n(this).h("ap.1").a(s).aL$},
Xb(a){var s=a.e
s.toString
return A.n(this).h("ap.1").a(s).a7$}}
A.GT.prototype={
tx(){this.a4()}}
A.a9_.prototype={}
A.a5Z.prototype={
H(a,b){B.b.H(this.b,b)},
gHh(){return this.b}}
A.mv.prototype={
gHh(){return A.a([this],t.yj)},
Wz(a){var s
if(a==null||a.a===0)return
s=this.c;(s==null?this.c=A.b7(t.xJ):s).H(0,a)}}
A.Nr.prototype={
mK(a,b,c,d){var s,r,q,p,o,n=this.b,m=B.b.gJ(n)
if(m.fr==null){s=B.b.gJ(n).glG()
r=B.b.gJ(n)
r=t.W.a(A.F.prototype.gbq.call(r)).as
r.toString
q=$.ac2()
q=new A.bL(null,0,s,B.S,q.p2,q.e,q.p3,q.f,q.aa,q.p4,q.R8,q.RG,q.rx,q.ry,q.to,q.x2,q.xr,q.y1)
q.an(r)
m.fr=q}m=B.b.gJ(n).fr
m.toString
m.saI(0,B.b.gJ(n).giX())
p=A.a([],t.T)
for(n=this.e,s=n.length,o=0;o<n.length;n.length===s||(0,A.P)(n),++o)n[o].mK(0,b,c,p)
m.iR(0,p,null)
d.push(m)},
gjh(){return null},
xD(){},
H(a,b){B.b.H(this.e,b)}}
A.Oh.prototype={
mK(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(!h.x){s=h.b
B.b.gJ(s).fr=null
for(r=h.w,q=r.length,p=A.ah(s),o=p.c,p=p.h("fH<1>"),n=0;n<r.length;r.length===q||(0,A.P)(r),++n){m=r[n]
l=new A.fH(s,1,g,p)
l.ty(s,1,g,o)
B.b.H(m.b,l)
m.mK(a+h.f.x2,b,c,d)}return}s=h.b
if(s.length>1){k=new A.a90()
k.Pm(c,b,s)}else k=g
r=h.e
q=!r
if(q){if(k==null)p=g
else{p=k.d
p===$&&A.b()
if(!p.gN(p)){p=k.c
p===$&&A.b()
p=p.HC()}else p=!0}p=p===!0}else p=!1
if(p)return
p=B.b.gJ(s)
if(p.fr==null)p.fr=A.a1w(g,B.b.gJ(s).glG())
j=B.b.gJ(s).fr
j.sHv(r)
j.dx=h.c
j.z=a
if(a!==0){h.BU()
r=h.f
r.shB(0,r.x2+a)}if(k!=null){r=k.d
r===$&&A.b()
j.saI(0,r)
r=k.c
r===$&&A.b()
j.sbm(0,r)
j.x=k.b
j.y=k.a
if(q&&k.e){h.BU()
h.f.b4(B.lk,!0)}}i=A.a([],t.T)
for(r=h.w,q=r.length,n=0;n<r.length;r.length===q||(0,A.P)(r),++n){m=r[n]
p=j.x
m.mK(0,j.y,p,i)}r=h.f
if(r.a)B.b.gJ(s).mC(j,h.f,i)
else j.iR(0,i,r)
d.push(j)},
gjh(){return this.x?null:this.f},
H(a,b){var s,r,q,p,o,n,m=this
for(s=b.length,r=m.w,q=0;q<b.length;b.length===s||(0,A.P)(b),++q){p=b[q]
r.push(p)
if(p.gjh()==null)continue
if(!m.r){m.f=m.f.XN()
m.r=!0}o=m.f
n=p.gjh()
n.toString
o.j8(n)}},
BU(){var s,r,q=this
if(!q.r){s=q.f
r=A.oq()
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
r.aa=s.aa
r.af=s.af
r.y2=s.y2
r.bB=s.bB
r.bk=s.bk
r.ba=s.ba
r.f=s.f
r.k1=s.k1
r.k3=s.k3
r.k2=s.k2
r.k4=s.k4
r.ok=s.ok
r.p1=s.p1
r.e.H(0,s.e)
r.p3.H(0,s.p3)
q.f=r
q.r=!0}},
xD(){this.x=!0}}
A.a90.prototype={
Pm(a,b,c){var s,r,q,p,o,n,m=this,l=new A.ba(new Float64Array(16))
l.cU()
m.c=l
m.b=a
m.a=b
for(s=c.length-1;s>0;){r=c[s];--s
q=c[s]
a=r.wv(q)
if(a!=null){m.b=a
m.a=A.aic(m.a,r.ik(q))}else m.b=A.aic(m.b,r.ik(q))
l=$.alf()
l.cU()
A.ash(r,q,m.c,l)
m.b=A.aid(m.b,l)
m.a=A.aid(m.a,l)}p=B.b.gJ(c)
l=m.b
l=l==null?p.giX():l.eO(p.giX())
m.d=l
o=m.a
if(o!=null){n=o.eO(l)
if(n.gN(n)){l=m.d
l=!l.gN(l)}else l=!1
m.e=l
if(!l)m.d=n}}}
A.N9.prototype={}
A.hB.prototype={
i(a){var s=A.a(["offset="+this.a.i(0)],t.s)
s.push(this.on(0))
return B.b.bg(s,"; ")}}
A.uq.prototype={
e6(a){if(!(a.e instanceof A.hB))a.e=new A.hB(null,null,B.j)},
srA(a,b){var s=this,r=s.I
switch(r.d.b_(0,b).a){case 0:case 1:return
case 2:r.srA(0,b)
s.a8=s.ab=null
s.un(b)
s.ap()
s.aY()
break
case 3:r.srA(0,b)
s.a8=s.ab=s.bs=null
s.un(b)
s.a4()
s.vf()
s.BM()
s.ET()
break}},
snR(a){var s=this
if(a==s.aU)return
s.vf()
s.BM()
s.aU=a
s.ET()},
ET(){var s,r,q=this
if(q.aU==null)return
s=q.aq
if(s==null)s=q.aq=q.QM()
r=q.aU
B.b.Y(s,r.gj9(r))},
vf(){var s,r=this.aU
if(r==null||this.aq==null)return
s=this.aq
s.toString
B.b.Y(s,r.gyt(r))},
QM(){var s,r,q,p,o=this.I.d.IQ(!1),n=A.a([],t.sb)
for(s=o.length,r=0;r<s;){q=B.c.nr(o,$.akE(),r)
if(r!==q){if(q===-1)q=s
p=new A.iR(new A.eq(r,q),this,o,$.bq())
p.w=p.Cf()
n.push(p)
r=q}++r}return n},
BM(){var s,r,q,p=this.aq
if(p==null)return
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.P)(p),++r){q=p[r]
q.aa$=$.bq()
q.af$=0}this.aq=null},
a4(){var s=this.aq
if(s!=null)B.b.Y(s,new A.a_H())
this.LV()},
m(){var s=this
s.vf()
s.aq=null
s.I.m()
s.hs()},
un(a){this.b3=A.a([],t.e9)
a.aM(new A.a_E(this))},
syB(a,b){var s=this.I
if(s.f===b)return
s.syB(0,b)
this.ap()},
sbD(a){var s=this.I
if(s.r===a)return
s.sbD(a)
this.a4()},
sKe(a){if(this.A===a)return
this.A=a
this.a4()},
sa0D(a,b){var s,r=this
if(r.ac===b)return
r.ac=b
s=b===B.dJ?"\u2026":null
r.I.sYH(s)
r.a4()},
syC(a){var s=this.I
if(s.w===a)return
s.syC(a)
this.bs=null
this.a4()},
sxG(a){var s=this.I
if(s.z==a)return
s.sxG(a)
this.bs=null
this.a4()},
sxB(a,b){var s=this.I
if(J.f(s.y,b))return
s.sxB(0,b)
this.bs=null
this.a4()},
sKp(a){return},
syD(a){var s=this.I
if(s.as===a)return
s.syD(a)
this.bs=null
this.a4()},
sIK(a){return},
sJQ(a){var s,r=this
if(J.f(r.cp,a))return
r.cp=a
s=r.aq
s=s==null?null:B.b.jb(s,new A.a_J())
if(s===!0)r.ap()},
oK(a){var s,r=this,q=r.zb(a,B.S)
r.i7(t.k.a(A.x.prototype.gX.call(r)))
s=r.I
s.Bs(a,B.S)
s=s.db
s===$&&A.b()
s=s.b
return q.U(0,new A.u(0,s==null?0:s))},
ei(a){this.i7(t.k.a(A.x.prototype.gX.call(this)))
return this.I.ei(B.G)},
iD(a){return!0},
cB(a,b){var s,r,q,p,o,n,m,l,k,j={},i=this.I,h=i.a.hi(b),g=i.d.Jz(h)
if(g!=null&&!0){a.E(0,new A.h6(t.kZ.a(g),t.Cq))
s=!0}else s=!1
r=j.a=this.a3$
q=A.n(this).h("ap.1")
p=t.lO
o=0
while(!0){if(!(r!=null&&o<i.ax.length))break
r=r.e
r.toString
p.a(r)
n=r.a
m=new Float64Array(16)
l=new A.ba(m)
l.cU()
m[14]=0
m[13]=n.b
m[12]=n.a
n=r.e
l.hk(0,n,n,n)
if(a.vY(new A.a_G(j,b,r),b,l))return!0
r=j.a.e
r.toString
k=q.a(r).a7$
j.a=k;++o
r=k}return s},
CQ(a,b){var s=this.A||this.ac===B.dJ?a:1/0
this.I.xz(s,b)},
tx(){var s=this,r=$.bF,q=r.dy$
switch(q.a){case 0:case 4:if(s.el)return
s.el=!0
r.rX(new A.a_K(s,q))
break
case 1:case 2:case 3:s.Aj()
s.I.a4()
break}},
i7(a){this.I.t7(this.dG)
this.CQ(a.b,a.a)},
CO(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.d4$
if(i===0)return A.a([],t.aE)
s=j.a3$
r=A.aV(i,B.SK,!1,t.cP)
q=new A.aN(0,a.b,0,1/0).cE(0,j.I.w)
for(i=A.n(j).h("ap.1"),p=!b,o=0;s!=null;){if(p){s.ci(q,!0)
n=s.k3
n.toString
m=j.b3
m===$&&A.b()
switch(m[o].gdY()){case B.l5:l=s.Jm(j.b3[o].gpP())
break
case B.l6:case B.l7:case B.fj:case B.l9:case B.l8:l=null
break
default:l=null}k=n}else{k=s.fA(q)
l=null}n=j.b3
n===$&&A.b()
r[o]=new A.lz(k,n[o].gdY(),l,j.b3[o].gpP())
n=s.e
n.toString
s=i.a(n).a7$;++o}return r},
SY(a){return this.CO(a,!1)},
V8(){var s,r,q=this.a3$,p=t.lO,o=this.I,n=A.n(this).h("ap.1"),m=0
while(!0){if(!(q!=null&&m<o.ax.length))break
s=q.e
s.toString
p.a(s)
r=o.ax[m]
s.a=new A.u(r.a,r.b)
s.e=o.ay[m]
q=n.a(s).a7$;++m}},
OS(){var s,r,q=this.b3
q===$&&A.b()
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.P)(q),++r)switch(q[r].gdY()){case B.l5:case B.l6:case B.l7:return!1
case B.l8:case B.l9:case B.fj:continue}return!0},
c2(a){var s,r,q=this
if(!q.OS())return B.O
s=q.I
s.t7(q.CO(a,!0))
q.CQ(a.b,a.a)
r=s.gbh(s)
s=s.a
return a.bx(new A.Z(r,Math.ceil(s.gbI(s))))},
bC(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=t.k.a(A.x.prototype.gX.call(i))
i.dG=i.SY(g)
i.i7(g)
i.V8()
s=i.I
r=s.gbh(s)
q=s.a
q=Math.ceil(q.gbI(q))
p=s.a.gYx()
o=i.k3=g.bx(new A.Z(r,q))
n=o.b<q||p
m=o.a<r
if(m||n)switch(i.ac.a){case 3:i.b1=!1
i.bs=null
break
case 0:case 2:i.b1=!0
i.bs=null
break
case 1:i.b1=!0
r=A.a4J(h,s.d.a,"\u2026")
q=s.r
q.toString
o=s.w
l=A.a4H(h,s.y,h,h,r,B.bE,q,h,o,B.aO)
l.a_V()
if(m){switch(s.r.a){case 0:k=l.gbh(l)
j=0
break
case 1:j=i.k3.a
k=j-l.gbh(l)
break
default:k=h
j=k}i.bs=A.acM(new A.u(k,0),new A.u(j,0),A.a([B.k,B.mQ],t.bk),h,B.c2,h)}else{j=i.k3.b
s=l.a
i.bs=A.acM(new A.u(0,j-Math.ceil(s.gbI(s))/2),new A.u(0,j),A.a([B.k,B.mQ],t.bk),h,B.c2,h)}l.m()
break}else{i.b1=!1
i.bs=null}},
aF(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e={}
f.i7(t.k.a(A.x.prototype.gX.call(f)))
if(f.b1){s=f.k3
r=b.a
q=b.b
p=new A.y(r,q,r+s.a,q+s.b)
if(f.bs!=null)a.gbA(a).zm(p,$.an().bj())
else a.gbA(a).cm(0)
a.gbA(a).jd(p)}s=f.I
s.aF(a.gbA(a),b)
r=e.a=f.a3$
q=t.lO
o=b.a
n=b.b
m=A.n(f).h("ap.1")
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
a.a0W(j,new A.u(o+r.a,n+r.b),A.tr(k,k,k),new A.a_I(e))
k=e.a.e
k.toString
i=m.a(k).a7$
e.a=i;++l
r=i}if(f.b1){if(f.bs!=null){a.gbA(a).az(0,o,n)
h=$.an().bj()
h.sWS(B.Cq)
h.szE(f.bs)
s=a.gbA(a)
r=f.k3
s.c7(new A.y(0,0,0+r.a,0+r.b),h)}a.gbA(a).cj(0)}s=f.aq
if(s!=null)for(r=s.length,g=0;g<s.length;s.length===r||(0,A.P)(s),++g)s[g].aF(a,b)
f.M1(a,b)},
zb(a,b){var s
this.i7(t.k.a(A.x.prototype.gX.call(this)))
s=this.I
s.Bs(a,b)
s=s.db
s===$&&A.b()
return s.a},
z3(a){this.i7(t.k.a(A.x.prototype.gX.call(this)))
return this.I.a.rM(a.a,a.b,B.m8,B.fZ)},
hi(a){this.i7(t.k.a(A.x.prototype.gX.call(this)))
return this.I.a.hi(a)},
lv(a){this.i7(t.k.a(A.x.prototype.gX.call(this)))
return this.I.a.lv(a)},
ek(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.fF(a)
s=d.I
r=s.d
r.toString
q=A.a([],t.lF)
r.XC(q)
d.cz=q
if(B.b.jb(q,new A.a_F()))a.a=a.b=!0
else{r=d.ab
if(r==null){p=new A.bM("")
o=A.a([],t.ve)
for(r=d.cz,n=r.length,m=0,l=0,k="";l<r.length;r.length===n||(0,A.P)(r),++l){j=r[l]
i=j.b
if(i==null)i=j.a
for(k=j.f,h=k.length,g=0;g<k.length;k.length===h||(0,A.P)(k),++g){f=k[g]
e=f.a
o.push(f.FK(new A.eq(m+e.a,m+e.b)))}k=p.a+=i
m+=i.length}r=d.ab=new A.cb(k.charCodeAt(0)==0?k:k,o)}a.p4=r
a.d=!0
s=s.r
s.toString
a.y1=s}},
mC(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=A.a([],t.T),b0=a7.I,b1=b0.r
b1.toString
s=A.ik(a8,a8,a8,t.qI,t.ju)
r=a7.a8
if(r==null){r=a7.cz
r.toString
r=a7.a8=A.auz(r)}for(q=r.length,p=t.k,o=b1,n=0,m=0,l=0;l<r.length;r.length===q||(0,A.P)(r),++l,m=j){k=r[l]
b1=k.a
j=m+b1.length
i=m<j
h=i?m:j
i=i?j:m
g=p.a(A.x.prototype.gX.call(a7))
b0.t7(a7.dG)
f=g.b
f=a7.A||a7.ac===B.dJ?f:1/0
b0.xz(f,g.a)
e=b0.a.rM(h,i,B.m8,B.fZ)
if(e.length===0)continue
i=B.b.gJ(e)
d=new A.y(i.a,i.b,i.c,i.d)
c=B.b.gJ(e).e
for(i=A.ah(e),h=new A.fH(e,1,a8,i.h("fH<1>")),h.ty(e,1,a8,i.c),h=new A.dk(h,h.gp(h)),i=A.n(h).c;h.q();){g=h.d
if(g==null)g=i.a(g)
d=d.nc(new A.y(g.a,g.b,g.c,g.d))
c=g.e}i=d.a
h=Math.max(0,i)
g=d.b
f=Math.max(0,g)
i=Math.min(d.c-i,p.a(A.x.prototype.gX.call(a7)).b)
g=Math.min(d.d-g,p.a(A.x.prototype.gX.call(a7)).d)
b=Math.floor(h)-4
a=Math.floor(f)-4
i=Math.ceil(h+i)+4
g=Math.ceil(f+g)+4
a0=new A.y(b,a,i,g)
a1=A.oq()
a2=n+1
a1.id=new A.tR(n,a8)
a1.d=!0
a1.y1=o
f=k.b
b1=f==null?b1:f
a1.p4=new A.cb(b1,k.f)
b1=b2.y
if(b1!=null){a3=b1.eO(a0)
if(a3.a>=a3.c||a3.b>=a3.d)b1=!(b>=i||a>=g)
else b1=!1
a1.b4(B.lk,b1)}a4=A.b4("newChild")
b1=a7.cq
i=b1==null?a8:b1.a!==0
if(i===!0){b1.toString
i=new A.b_(b1,A.n(b1).h("b_<1>"))
a5=i.ga9(i)
if(!a5.q())A.a0(A.bI())
b1=b1.u(0,a5.gG(a5))
b1.toString
if(a4.b!==a4)A.a0(A.XF(a4.a))
a4.b=b1}else{a6=new A.iI()
b1=A.a1w(a6,a7.PB(a6))
if(a4.b!==a4)A.a0(A.XF(a4.a))
a4.b=b1}if(b1===a4)A.a0(A.fr(a4.a))
J.amw(b1,a1)
if(!b1.w.k(0,a0)){b1.w=a0
b1.hv()}b1=a4.b
if(b1===a4)A.a0(A.fr(a4.a))
i=b1.d
i.toString
s.l(0,i,b1)
b1=a4.b
if(b1===a4)A.a0(A.fr(a4.a))
a9.push(b1)
n=a2
o=c}a7.cq=s
b2.iR(0,a9,b3)},
PB(a){return new A.a_D(this,a)},
kF(){this.tr()
this.cq=null}}
A.a_H.prototype={
$1(a){return a.x=null},
$S:210}
A.a_E.prototype={
$1(a){return!0},
$S:36}
A.a_J.prototype={
$1(a){var s=a.w
s===$&&A.b()
return s.c!==B.cH},
$S:211}
A.a_G.prototype={
$2(a,b){return this.a.a.bO(a,b)},
$S:15}
A.a_K.prototype={
$1(a){var s=this.a
s.el=!1
if(s.b!=null){s.Aj()
s.I.a4()}},
$S:2}
A.a_I.prototype={
$2(a,b){var s=this.a.a
s.toString
a.eu(s,b)},
$S:9}
A.a_F.prototype={
$1(a){return!1},
$S:212}
A.a_D.prototype={
$0(){var s=this.a,r=s.cq.j(0,this.b)
r.toString
s.jZ(s,r.w)},
$S:0}
A.iR.prototype={
gn(a){var s=this.w
s===$&&A.b()
return s},
TU(){var s=this,r=s.Cf(),q=s.w
q===$&&A.b()
if(q.k(0,r))return
s.w=r
s.aw()},
Cf(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f==null||g.e==null)return B.Tl
s=f.a
r=g.e.a
f=g.b
q=f.oK(new A.aW(s,B.B))
p=s===r?q:f.oK(new A.aW(r,B.B))
f=f.I
o=f.r
o.toString
n=s>r!==(B.P===o)
m=A.ts(g.gf5().a,g.gf5().b,0)
m.fV(m)
o=A.ce(m,q)
l=f.grn()
k=n?B.BD:B.BC
j=A.ce(m,p)
f=f.grn()
i=n?B.BC:B.BD
h=g.d.a===g.e.a?B.Tn:B.lj
return new A.jY(new A.lW(o,l,k),new A.lW(j,f,i),h,!0)},
qi(a){var s=this,r=A.b4("result"),q=s.d,p=s.e,o=a.a
switch(o.a){case 0:case 1:r.sbV(s.W1(t.ib.a(a).b,o===B.dy))
break
case 2:s.e=s.d=null
r.sbV(B.cG)
break
case 3:o=s.a
s.d=new A.aW(o.a,B.B)
s.e=new A.aW(o.b,B.K)
r.sbV(B.cG)
break
case 4:r.sbV(s.Sh(t.k2.a(a).gzi()))
break
case 5:t.uQ.a(a)
r.sbV(s.RA(a.gGK(a),a.gfn(),a.ga26()))
break
case 6:t.sQ.a(a)
r.sbV(s.Rg(a.gwN(a),a.gfn(),a.gG4(a)))
break}if(!J.f(q,s.d)||!J.f(p,s.e)){s.b.ap()
s.TU()}return r.aA()},
W1(a,b){var s,r,q,p,o,n,m=this
if(b)m.e=null
else m.d=null
s=m.b
r=s.bv(0,null)
r.fV(r)
q=A.ce(r,a)
p=m.gf5()
if(p.gN(p))return A.ahj(m.gf5(),q)
p=m.gf5()
o=s.I.r
o.toString
n=m.ox(s.hi(A.aqQ(p,q,o)))
if(b)m.e=n
else m.d=n
s=n.a
p=m.a
if(s===p.b)return B.b3
if(s===p.a)return B.b4
return A.ahj(m.gf5(),q)},
ox(a){var s,r=a.a,q=this.a,p=q.b
if(r<=p)s=r===p&&a.b===B.B
else s=!0
if(s)return new A.aW(p,B.K)
q=q.a
if(r<q)return new A.aW(q,B.B)
return a},
Sh(a){var s,r,q,p,o=this,n=o.b,m=n.hi(n.jV(a))
if(o.Uc(m))return B.aq
s=n.lv(m)
r=A.b4("start")
q=A.b4("end")
n=m.a
p=s.b
if(n>=p)r.b=q.b=new A.aW(n,B.B)
else{r.b=new A.aW(s.a,B.B)
q.b=new A.aW(p,B.K)}o.d=r.aA()
o.e=q.aA()
return B.aq},
Rg(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.bv(0,null)
if(j.fV(j)===0)switch(c){case B.fn:case B.dA:return B.b4
case B.fo:case B.dz:return B.b3}s=A.ce(j,new A.u(a,0)).a
switch(c){case B.fn:case B.fo:if(b){k=l.e
k.toString
r=k}else{k=l.d
k.toString
r=k}q=l.SD(r,!1,s)
p=q.a
o=q.b
break
case B.dz:case B.dA:n=l.e
if(n==null){n=new A.aW(l.a.b,B.K)
l.e=n
r=n}else r=n
n=l.d
if(n==null){l.d=r
m=r}else m=n
p=k.hi(new A.u(s,k.oK(b?r:m).b-k.I.grn()/2))
o=B.aq
break
default:p=null
o=null}if(b)l.e=p
else l.d=p
return o},
RA(a,b,c){var s,r,q,p,o,n,m=this,l=m.e
if(l==null){l=m.a
l=a?new A.aW(l.a,B.B):new A.aW(l.b,B.K)
m.e=l
s=l}else s=l
l=m.d
if(l==null){m.d=s
r=s}else r=l
s=b?s:r
if(a&&s.a===m.a.b)return B.b3
l=!a
if(l&&s.a===m.a.a)return B.b4
switch(c){case B.Va:l=m.a
q=m.oJ(new A.RN(B.c.ai(m.c,l.a,l.b)),s,a)
p=B.aq
break
case B.Vb:l=m.a
q=m.oJ(new A.KG(new A.a5l(m),new A.a5j(B.c.ai(m.c,l.a,l.b))),s,a)
p=B.aq
break
case B.Vc:q=m.oJ(new A.XI(m),s,a)
p=B.aq
break
case B.Vd:o=m.a
n=o.a
o=o.b
q=m.oJ(new A.SK(B.c.ai(m.c,n,o)),s,a)
if(a&&q.a===o)p=B.b3
else p=l&&q.a===n?B.b4:B.aq
break
default:p=null
q=null}if(b)m.e=q
else m.d=q
return p},
oJ(a,b,c){if(c)return this.ox(a.fC(B.SS.fC(b)))
return this.ox(a.fB(B.SR.fB(b)))},
SD(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.I,i=j.fr
if(i==null)i=j.fr=j.a.XB()
s=k.zb(a,B.S)
j=i.length
r=j-1
for(q=s.b,p=0;p<i.length;i.length===j||(0,A.P)(i),++p){o=i[p]
if(o.gpP()>q){r=J.amf(o)
break}}if(b&&r===i.length-1)n=new A.aW(l.a.b,B.K)
else if(!b&&r===0)n=new A.aW(l.a.a,B.B)
else n=l.ox(k.hi(new A.u(c,i[b?r+1:r-1].gpP())))
k=n.a
j=l.a
if(k===j.a)m=B.b4
else m=k===j.b?B.b3:B.aq
return new A.aK(n,m,t.nz)},
Uc(a){var s,r,q,p,o=this
if(o.d==null||o.e==null)return!1
s=A.b4("currentStart")
r=A.b4("currentEnd")
q=o.d
q.toString
p=o.e
p.toString
if(A.adQ(q,p)>0){s.b=q
r.b=p}else{s.b=p
r.b=q}return A.adQ(s.aA(),a)>=0&&A.adQ(r.aA(),a)<=0},
bv(a,b){var s=A.ts(this.gf5().a,this.gf5().b,0)
s.cr(0,this.b.bv(0,b))
return s},
hd(a,b){if(this.b.b==null)return},
gf5(){var s,r,q,p,o,n,m=this,l=m.x
if(l==null){l=m.b
s=m.a
r=s.a
q=l.z3(A.a4I(B.B,r,s.b,!1))
if(q.length!==0){l=B.b.gJ(q)
p=new A.y(l.a,l.b,l.c,l.d)
for(o=1;o<q.length;++o){l=q[o]
p=p.nc(new A.y(l.a,l.b,l.c,l.d))}m.x=p
l=p}else{n=l.oK(new A.aW(r,B.B))
l=A.adf(n,new A.u(n.a+0,n.b+-l.I.grn()))
m.x=l}}return l},
gde(a){var s=this.gf5()
return new A.Z(s.c-s.a,s.d-s.b)},
aF(a,b){var s,r,q,p,o,n=this,m=n.d
if(m==null||n.e==null)return
s=n.b
if(s.cp!=null){r=A.a4I(B.B,m.a,n.e.a,!1)
q=$.an().bj()
q.scG(0,B.aN)
m=s.cp
m.toString
q.saj(0,m)
for(m=s.z3(r),s=m.length,p=0;p<m.length;m.length===s||(0,A.P)(m),++p){o=m[p]
a.gbA(a).c7(new A.y(o.a,o.b,o.c,o.d).cW(b),q)}}A.ts(n.gf5().a,n.gf5().b,0)},
z8(a){var s=this.b.I.a.Jo(a),r=this.a,q=r.a
r=r.b
return A.a4I(B.B,B.f.ii(s.a,q,r),B.f.ii(s.b,q,r),!1)},
$ia2:1}
A.x7.prototype={
an(a){var s,r,q
this.ea(a)
s=this.a3$
for(r=t.lO;s!=null;){s.an(a)
q=s.e
q.toString
s=r.a(q).a7$}},
ah(a){var s,r,q
this.dw(0)
s=this.a3$
for(r=t.lO;s!=null;){s.ah(0)
q=s.e
q.toString
s=r.a(q).a7$}}}
A.Na.prototype={}
A.Nb.prototype={
an(a){this.N0(a)
$.fy.wW$.a.E(0,this.gAx())},
ah(a){$.fy.wW$.a.u(0,this.gAx())
this.N1(0)}}
A.PG.prototype={}
A.PH.prototype={}
A.He.prototype={
sa0C(a){if(a===this.I)return
this.I=a
this.ap()},
sa0Z(a){if(a===this.ab)return
this.ab=a
this.ap()},
sX9(a){return},
sX8(a){return},
giZ(){return!0},
gmw(){return!0},
gSS(){var s=this.I,r=(s|1)>>>0>0||(s|2)>>>0>0?80:0
return(s|4)>>>0>0||(s|8)>>>0>0?r+80:r},
c2(a){return a.bx(new A.Z(1/0,this.gSS()))},
aF(a,b){var s=b.a,r=b.b,q=this.k3
q=new A.Gs(new A.y(s,r,s+q.a,r+q.b),this.I,this.ab,!1,!1,A.A(t.S,t.M),A.aq())
q.ht()
a.lM()
a.w2(q)}}
A.Hj.prototype={}
A.em.prototype={
e6(a){if(!(a.e instanceof A.c3))a.e=new A.c3()},
c2(a){var s=this.A$
if(s!=null)return s.fA(a)
return this.mM(a)},
bC(){var s=this,r=s.A$,q=t.k
if(r!=null){r.ci(q.a(A.x.prototype.gX.call(s)),!0)
r=s.A$.k3
r.toString
s.k3=r}else s.k3=s.mM(q.a(A.x.prototype.gX.call(s)))},
mM(a){return new A.Z(A.E(0,a.a,a.b),A.E(0,a.c,a.d))},
cB(a,b){var s=this.A$
s=s==null?null:s.bO(a,b)
return s===!0},
d1(a,b){},
aF(a,b){var s=this.A$
if(s!=null)a.eu(s,b)}}
A.no.prototype={
D(){return"HitTestBehavior."+this.b}}
A.ur.prototype={
bO(a,b){var s,r=this
if(r.k3.B(0,b)){s=r.cB(a,b)||r.v===B.aB
if(s||r.v===B.e3)a.E(0,new A.mW(b,r))}else s=!1
return s},
iD(a){return this.v===B.aB}}
A.H_.prototype={
sFe(a){if(this.v.k(0,a))return
this.v=a
this.a4()},
bC(){var s=this,r=t.k.a(A.x.prototype.gX.call(s)),q=s.A$,p=s.v
if(q!=null){q.ci(p.na(r),!0)
q=s.A$.k3
q.toString
s.k3=q}else s.k3=p.na(r).bx(B.O)},
c2(a){var s=this.A$,r=this.v
if(s!=null)return s.fA(r.na(a))
else return r.na(a).bx(B.O)}}
A.H9.prototype={
sa0e(a,b){if(this.v===b)return
this.v=b
this.a4()},
sa0b(a,b){if(this.O===b)return
this.O=b
this.a4()},
CR(a){var s,r,q=a.a,p=a.b
p=p<1/0?p:A.E(this.v,q,p)
s=a.c
r=a.d
return new A.aN(q,p,s,r<1/0?r:A.E(this.O,s,r))},
Bv(a,b){var s=this.A$
if(s!=null)return a.bx(b.$2(s,this.CR(a)))
return this.CR(a).bx(B.O)},
c2(a){return this.Bv(a,A.abv())},
bC(){this.k3=this.Bv(t.k.a(A.x.prototype.gX.call(this)),A.abw())}}
A.um.prototype={
gdn(){if(this.A$!=null){var s=this.jt$
s.toString}else s=!1
return s},
o0(a){var s=a==null?A.agL():a
s.sFg(0,this.kS$)
return s},
srb(a,b){var s=this,r=s.fZ$
if(r===b)return
if(s.b!=null&&r!=null)r.F(0,s.gpw())
s.fZ$=b
if(s.b!=null)b.V(0,s.gpw())
s.vI()},
sFh(a){if(!1===this.wV$)return
this.wV$=!1
this.aY()},
vI(){var s,r=this,q=r.kS$,p=r.fZ$
p=r.kS$=B.d.bb(A.ael(p.gn(p),0,1)*255)
if(q!==p){s=r.jt$
p=p>0
r.jt$=p
if(r.A$!=null&&s!==p)r.le()
r.a07()
if(q===0||r.kS$===0)r.aY()}},
lk(a){var s=this.fZ$
return s.gn(s)>0},
fz(a){var s,r=this.A$
if(r!=null)if(this.kS$===0){s=this.wV$
s.toString}else s=!0
else s=!1
if(s){r.toString
a.$1(r)}}}
A.GW.prototype={}
A.qP.prototype={
V(a,b){return null},
F(a,b){return null},
i(a){return"CustomClipper"}}
A.lZ.prototype={
z4(a){return this.b.eW(new A.y(0,0,0+a.a,0+a.b),this.c)},
zG(a){if(A.z(a)!==B.Zb)return!0
t.qm.a(a)
return!a.b.k(0,this.b)||a.c!=this.c}}
A.pE.prototype={
smJ(a){var s,r=this,q=r.v
if(q==a)return
r.v=a
s=a==null
if(s||q==null||A.z(a)!==A.z(q)||a.zG(q))r.oX()
if(r.b!=null){if(q!=null)q.F(0,r.goW())
if(!s)a.V(0,r.goW())}},
an(a){var s
this.lS(a)
s=this.v
if(s!=null)s.V(0,this.goW())},
ah(a){var s=this.v
if(s!=null)s.F(0,this.goW())
this.kb(0)},
oX(){this.O=null
this.ap()
this.aY()},
spZ(a){if(a!==this.au){this.au=a
this.ap()}},
bC(){var s,r=this,q=r.k3
q=q!=null?q:null
r.tu()
s=r.k3
s.toString
if(!J.f(q,s))r.O=null},
ib(){var s,r,q=this
if(q.O==null){s=q.v
if(s==null)s=null
else{r=q.k3
r.toString
r=s.z4(r)
s=r}q.O=s==null?q.goA():s}},
ik(a){var s,r=this
switch(r.au.a){case 0:return null
case 1:case 2:case 3:if(r.v==null)s=null
else{s=r.k3
s=new A.y(0,0,0+s.a,0+s.b)}if(s==null){s=r.k3
s=new A.y(0,0,0+s.a,0+s.b)}return s}},
m(){this.c8=null
this.hs()}}
A.GZ.prototype={
goA(){var s=this.k3
return new A.y(0,0,0+s.a,0+s.b)},
bO(a,b){var s=this
if(s.v!=null){s.ib()
if(!s.O.B(0,b))return!1}return s.i1(a,b)},
aF(a,b){var s,r,q=this,p=q.A$
if(p!=null){s=q.ch
if(q.au!==B.l){q.ib()
p=q.cx
p===$&&A.b()
r=q.O
r.toString
s.saQ(0,a.jL(p,b,r,A.em.prototype.glj.call(q),q.au,t.iM.a(s.a)))}else{a.eu(p,b)
s.saQ(0,null)}}else q.ch.saQ(0,null)}}
A.GY.prototype={
goA(){var s=$.an().cg(),r=this.k3
s.mu(new A.y(0,0,0+r.a,0+r.b))
return s},
bO(a,b){var s=this
if(s.v!=null){s.ib()
if(!s.O.B(0,b))return!1}return s.i1(a,b)},
aF(a,b){var s,r,q,p,o=this,n=o.A$
if(n!=null){s=o.ch
if(o.au!==B.l){o.ib()
n=o.cx
n===$&&A.b()
r=o.k3
q=r.a
r=r.b
p=o.O
p.toString
s.saQ(0,a.Ia(n,b,new A.y(0,0,0+q,0+r),p,A.em.prototype.glj.call(o),o.au,t.n0.a(s.a)))}else{a.eu(n,b)
s.saQ(0,null)}}else o.ch.saQ(0,null)}}
A.x8.prototype={
shB(a,b){if(this.cc===b)return
this.cc=b
this.ap()},
sfD(a,b){if(this.cN.k(0,b))return
this.cN=b
this.ap()},
saj(a,b){if(this.fj.k(0,b))return
this.fj=b
this.ap()},
ek(a){this.fF(a)
a.shB(0,this.cc)}}
A.Hf.prototype={
scV(a,b){if(this.jt===b)return
this.jt=b
this.oX()},
sWU(a,b){if(J.f(this.fZ,b))return
this.fZ=b
this.oX()},
goA(){var s,r,q=this.k3,p=0+q.a
q=0+q.b
switch(this.jt.a){case 0:s=this.fZ
if(s==null)s=B.ay
return s.d9(new A.y(0,0,p,q))
case 1:s=(p-0)/2
r=(q-0)/2
return new A.hq(0,0,p,q,s,r,s,r,s,r,s,r,s===r)}},
bO(a,b){var s=this
if(s.v!=null){s.ib()
if(!s.O.B(0,b))return!1}return s.i1(a,b)},
aF(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.A$==null){i.ch.saQ(0,null)
return}i.ib()
s=i.O.cW(b)
r=$.an()
q=r.cg()
q.eg(s)
p=a.gbA(a)
if(i.cc!==0&&!0){p.c7(new A.y(s.a,s.b,s.c,s.d).cQ(20),$.af_())
o=i.cN
n=i.cc
m=i.fj
p.n8(q,o,n,(m.gn(m)>>>24&255)!==255)}l=i.au===B.he
if(!l){r=r.bj()
r.saj(0,i.fj)
p.cM(s,r)}r=i.cx
r===$&&A.b()
o=i.k3
n=o.a
o=o.b
m=i.O
m.toString
k=i.ch
j=t.bG.a(k.a)
k.saQ(0,a.a0S(r,b,new A.y(0,0,0+n,0+o),m,new A.a_L(i,l),i.au,j))}}
A.a_L.prototype={
$2(a,b){var s,r
if(this.b){s=a.gbA(a)
r=$.an().bj()
r.saj(0,this.a.fj)
s.n7(r)}this.a.fG(a,b)},
$S:9}
A.Hg.prototype={
goA(){var s=$.an().cg(),r=this.k3
s.mu(new A.y(0,0,0+r.a,0+r.b))
return s},
bO(a,b){var s=this
if(s.v!=null){s.ib()
if(!s.O.B(0,b))return!1}return s.i1(a,b)},
aF(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(j.A$==null){j.ch.saQ(0,null)
return}j.ib()
s=j.k3
r=b.a
q=b.b
p=s.a
s=s.b
o=j.O.cW(b)
n=a.gbA(a)
if(j.cc!==0&&!0){n.c7(new A.y(r,q,r+p,q+s).cQ(20),$.af_())
s=j.cN
r=j.cc
q=j.fj
n.n8(o,s,r,(q.gn(q)>>>24&255)!==255)}m=j.au===B.he
if(!m){s=$.an().bj()
s.saj(0,j.fj)
n.dC(o,s)}s=j.cx
s===$&&A.b()
r=j.k3
q=r.a
r=r.b
p=j.O
p.toString
l=j.ch
k=t.n0.a(l.a)
l.saQ(0,a.Ia(s,b,new A.y(0,0,0+q,0+r),p,new A.a_M(j,m),j.au,k))}}
A.a_M.prototype={
$2(a,b){var s,r
if(this.b){s=a.gbA(a)
r=$.an().bj()
r.saj(0,this.a.fj)
s.n7(r)}this.a.fG(a,b)},
$S:9}
A.qU.prototype={
D(){return"DecorationPosition."+this.b}}
A.H3.prototype={
sYm(a){var s,r=this
if(a.k(0,r.O))return
s=r.v
if(s!=null)s.m()
r.v=null
r.O=a
r.ap()},
sbu(a,b){if(b===this.au)return
this.au=b
this.ap()},
swg(a){if(a.k(0,this.bt))return
this.bt=a
this.ap()},
ah(a){var s=this,r=s.v
if(r!=null)r.m()
s.v=null
s.kb(0)
s.ap()},
iD(a){var s=this.O,r=this.k3
r.toString
return s.H5(r,a,this.bt.d)},
aF(a,b){var s,r,q,p=this,o=p.v
if(o==null)o=p.v=p.O.q3(p.gdM())
s=p.bt
r=p.k3
r.toString
q=new A.nr(s.a,s.b,s.c,s.d,r,s.f)
if(p.au===B.ho){o.nJ(a.gbA(a),b,q)
if(p.O.gxt())a.zA()}p.fG(a,b)
if(p.au===B.EV){o=p.v
o.toString
o.nJ(a.gbA(a),b,q)
if(p.O.gxt())a.zA()}}}
A.Hp.prototype={
sHY(a,b){return},
sdY(a){var s=this
if(J.f(s.O,a))return
s.O=a
s.ap()
s.aY()},
sbD(a){var s=this
if(s.au==a)return
s.au=a
s.ap()
s.aY()},
gmw(){return!1},
sbm(a,b){var s,r=this
if(J.f(r.c8,b))return
s=new A.ba(new Float64Array(16))
s.bd(b)
r.c8=s
r.ap()
r.aY()},
sl2(a){return},
gug(){var s,r,q=this,p=q.O,o=p==null?null:p.W(q.au)
if(o==null)return q.c8
s=new A.ba(new Float64Array(16))
s.cU()
p=q.k3
p.toString
r=o.WG(p)
s.az(0,r.a,r.b)
p=q.c8
p.toString
s.cr(0,p)
s.az(0,-r.a,-r.b)
return s},
bO(a,b){return this.cB(a,b)},
cB(a,b){var s=this.bt?this.gug():null
return a.vY(new A.a_V(this),b,s)},
aF(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
if(a.A$!=null){s=a.gug()
s.toString
r=A.Y7(s)
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
p=A.em.prototype.glj.call(a)
o=a.ch
n=o.a
o.saQ(0,a0.nP(q,a1,s,p,n instanceof A.k6?n:null))}else{a.fG(a0,a1.U(0,r))
a.ch.saQ(0,null)}}},
d1(a,b){var s=this.gug()
s.toString
b.cr(0,s)}}
A.a_V.prototype={
$2(a,b){return this.a.oq(a,b)},
$S:15}
A.uo.prototype={
Uk(){if(this.v!=null)return
this.v=this.au},
C1(a){switch(a.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
sx0(a){var s=this,r=s.O
if(r===a)return
s.O=a
if(s.C1(r)||s.C1(a))s.a4()
else{s.bH=s.c8=null
s.ap()}},
sdY(a){var s=this
if(s.au.k(0,a))return
s.au=a
s.v=s.bH=s.c8=null
s.ap()},
sbD(a){var s=this
if(s.bt==a)return
s.bt=a
s.v=s.bH=s.c8=null
s.ap()},
c2(a){var s,r=this.A$
if(r!=null){s=r.fA(B.bF)
switch(this.O.a){case 6:return a.bx(new A.aN(0,a.b,0,a.d).mN(s))
case 1:case 2:case 0:case 4:case 3:case 5:return a.mN(s)}}else return new A.Z(A.E(0,a.a,a.b),A.E(0,a.c,a.d))},
bC(){var s,r,q,p=this,o=p.A$
if(o!=null){o.ci(B.bF,!0)
switch(p.O.a){case 6:o=t.k
s=o.a(A.x.prototype.gX.call(p))
r=p.A$.k3
r.toString
q=new A.aN(0,s.b,0,s.d).mN(r)
p.k3=o.a(A.x.prototype.gX.call(p)).bx(q)
break
case 1:case 2:case 0:case 4:case 3:case 5:o=t.k.a(A.x.prototype.gX.call(p))
s=p.A$.k3
s.toString
p.k3=o.mN(s)
break}p.bH=p.c8=null}else{o=t.k.a(A.x.prototype.gX.call(p))
p.k3=new A.Z(A.E(0,o.a,o.b),A.E(0,o.c,o.d))}},
vJ(){var s,r,q,p,o,n,m,l,k,j=this
if(j.bH!=null)return
if(j.A$==null){j.c8=!1
s=new A.ba(new Float64Array(16))
s.cU()
j.bH=s}else{j.Uk()
s=j.A$.k3
s.toString
r=j.O
q=j.k3
q.toString
p=A.ajk(r,s,q)
q=p.b
r=p.a
o=s.a
s=s.b
n=j.v.xm(r,new A.y(0,0,0+o,0+s))
m=j.v
m.toString
l=j.k3
k=m.xm(q,new A.y(0,0,0+l.a,0+l.b))
m=n.a
j.c8=n.c-m<o||n.d-n.b<s
s=A.ts(k.a,k.b,0)
s.hk(0,q.a/r.a,q.b/r.b,1)
s.az(0,-m,-n.b)
j.bH=s}},
Db(a,b){var s,r,q,p,o=this,n=o.bH
n.toString
s=A.Y7(n)
if(s==null){n=o.cx
n===$&&A.b()
r=o.bH
r.toString
q=A.em.prototype.glj.call(o)
p=o.ch.a
return a.nP(n,b,r,q,p instanceof A.k6?p:null)}else o.fG(a,b.U(0,s))
return null},
aF(a,b){var s,r,q,p,o,n=this
if(n.A$!=null){s=n.k3
if(!s.gN(s)){s=n.A$.k3
s=s.gN(s)}else s=!0}else s=!0
if(s)return
n.vJ()
s=n.c8
s.toString
if(s&&n.dH!==B.l){s=n.cx
s===$&&A.b()
r=n.k3
q=r.a
r=r.b
p=n.ch
o=p.a
o=o instanceof A.n1?o:null
p.saQ(0,a.jL(s,b,new A.y(0,0,0+q,0+r),n.gTO(),n.dH,o))}else n.ch.saQ(0,n.Db(a,b))},
cB(a,b){var s=this,r=s.k3
if(!r.gN(r)){r=s.A$
if(r==null)r=null
else{r=r.k3
r=r.gN(r)}r=r===!0}else r=!0
if(r)return!1
s.vJ()
return a.vY(new A.a_r(s),b,s.bH)},
lk(a){var s=this.k3
if(!s.gN(s)){s=a.k3
s=!s.gN(s)}else s=!1
return s},
d1(a,b){var s=this.k3
if(!s.gN(s)){s=a.k3
s=!s.gN(s)}else s=!1
if(!s)b.zD()
else{this.vJ()
s=this.bH
s.toString
b.cr(0,s)}}}
A.a_r.prototype={
$2(a,b){return this.a.oq(a,b)},
$S:15}
A.H6.prototype={
sa1L(a){var s=this
if(s.v.k(0,a))return
s.v=a
s.ap()
s.aY()},
bO(a,b){return this.cB(a,b)},
cB(a,b){var s,r,q=this
if(q.O){s=q.v
r=q.k3
r=new A.u(s.a*r.a,s.b*r.b)
s=r}else s=null
return a.mv(new A.a_s(q),s,b)},
aF(a,b){var s,r,q=this
if(q.A$!=null){s=q.v
r=q.k3
q.fG(a,new A.u(b.a+s.a*r.a,b.b+s.b*r.b))}},
d1(a,b){var s=this.v,r=this.k3
b.az(0,s.a*r.a,s.b*r.b)}}
A.a_s.prototype={
$2(a,b){return this.a.oq(a,b)},
$S:15}
A.Hh.prototype={
mM(a){return new A.Z(A.E(1/0,a.a,a.b),A.E(1/0,a.c,a.d))},
hH(a,b){var s,r=this,q=null
if(t.Y.b(a)){s=r.a3
return s==null?q:s.$1(a)}if(t.c.b(a))return q
if(t.Cs.b(a)){s=r.aL
return s==null?q:s.$1(a)}if(t.hV.b(a))return q
if(t.AJ.b(a)){s=r.cc
return s==null?q:s.$1(a)}if(t.EL.b(a)){s=r.cN
return s==null?q:s.$1(a)}if(t.r.b(a))return q
if(t.zv.b(a))return q
if(t.zs.b(a)){s=r.wT
return s==null?q:s.$1(a)}}}
A.Hb.prototype={
bO(a,b){return this.M5(a,b)&&!0},
hH(a,b){var s=this.aL
if(s!=null&&t.hV.b(a))return s.$1(a)},
gFW(a){return this.cc},
gyX(){return this.cN},
an(a){this.lS(a)
this.cN=!0},
ah(a){this.cN=!1
this.kb(0)},
mM(a){return new A.Z(A.E(1/0,a.a,a.b),A.E(1/0,a.c,a.d))},
$iio:1,
gxY(a){return this.by},
gxZ(a){return this.a7}}
A.Hk.prototype={
gdn(){return!0}}
A.up.prototype={
sH9(a){var s,r=this
if(a===r.v)return
r.v=a
s=r.O
if(s==null||!s)r.aY()},
sxk(a){var s=this,r=s.O
if(a==r)return
if(r==null)r=s.v
s.O=a
if(r!==(a==null?s.v:a))s.aY()},
bO(a,b){return!this.v&&this.i1(a,b)},
fz(a){var s,r=this.A$
if(r!=null){s=this.O
s=!(s==null?this.v:s)}else s=!1
if(s){r.toString
a.$1(r)}}}
A.Hc.prototype={
sr5(a){var s=this
if(a===s.v)return
s.v=a
s.a4()
s.r0()},
ei(a){if(this.v)return null
return this.Av(a)},
giZ(){return this.v},
c2(a){if(this.v)return new A.Z(A.E(0,a.a,a.b),A.E(0,a.c,a.d))
return this.M4(a)},
nK(){this.LW()},
bC(){var s,r=this
if(r.v){s=r.A$
if(s!=null)s.hN(t.k.a(A.x.prototype.gX.call(r)))}else r.tu()},
bO(a,b){return!this.v&&this.i1(a,b)},
lk(a){return!this.v},
aF(a,b){if(this.v)return
this.fG(a,b)},
fz(a){if(this.v)return
this.ts(a)}}
A.ul.prototype={
sF5(a){if(this.v===a)return
this.v=a
this.aY()},
sxk(a){return},
bO(a,b){return this.v?this.k3.B(0,b):this.i1(a,b)},
fz(a){var s,r,q=this.A$
if(q!=null){s=this.O
r=this.v
s=!r}else s=!1
if(s){q.toString
a.$1(q)}}}
A.iw.prototype={
sa1V(a){if(A.aeB(a,this.a3))return
this.a3=a
this.aY()},
siJ(a){var s,r=this
if(J.f(r.by,a))return
s=r.by
r.by=a
if(a!=null!==(s!=null))r.aY()},
sjI(a){var s,r=this
if(J.f(r.aL,a))return
s=r.aL
r.aL=a
if(a!=null!==(s!=null))r.aY()},
sa0t(a){var s,r=this
if(J.f(r.a7,a))return
s=r.a7
r.a7=a
if(a!=null!==(s!=null))r.aY()},
sa0z(a){var s,r=this
if(J.f(r.cc,a))return
s=r.cc
r.cc=a
if(a!=null!==(s!=null))r.aY()},
ek(a){var s,r=this
r.fF(a)
if(r.by!=null){s=r.a3
s=s==null||s.B(0,B.dB)}else s=!1
if(s)a.siJ(r.by)
if(r.aL!=null){s=r.a3
s=s==null||s.B(0,B.AP)}else s=!1
if(s)a.sjI(r.aL)
if(r.a7!=null){s=r.a3
if(s==null||s.B(0,B.dF))a.sr9(r.gU5())
s=r.a3
if(s==null||s.B(0,B.dE))a.sr8(r.gU3())}if(r.cc!=null){s=r.a3
if(s==null||s.B(0,B.dC))a.sra(r.gU7())
s=r.a3
if(s==null||s.B(0,B.dD))a.sr7(r.gU1())}},
U4(){var s,r,q=this.a7
if(q!=null){s=this.k3
r=s.a*-0.8
s=s.ih(B.j)
s=A.ce(this.bv(0,null),s)
q.$1(new A.h3(null,new A.u(r,0),r,s))}},
U6(){var s,r,q=this.a7
if(q!=null){s=this.k3
r=s.a*0.8
s=s.ih(B.j)
s=A.ce(this.bv(0,null),s)
q.$1(new A.h3(null,new A.u(r,0),r,s))}},
U8(){var s,r,q=this.cc
if(q!=null){s=this.k3
r=s.b*-0.8
s=s.ih(B.j)
s=A.ce(this.bv(0,null),s)
q.$1(new A.h3(null,new A.u(0,r),r,s))}},
U2(){var s,r,q=this.cc
if(q!=null){s=this.k3
r=s.b*0.8
s=s.ih(B.j)
s=A.ce(this.bv(0,null),s)
q.$1(new A.h3(null,new A.u(0,r),r,s))}}}
A.us.prototype={
sI8(a){var s=this
if(s.v===a)return
s.v=a
s.Ez(a)
s.aY()},
sXE(a){if(this.O===a)return
this.O=a
this.aY()},
sYY(a){if(this.au===a)return
this.au=a
this.aY()},
sYW(a){return},
Ez(a){var s=this,r=a.fy
r=a.fx
r=r==null?null:new A.cb(r,B.a5)
s.c8=r
r=a.id
r=a.go
r=r==null?null:new A.cb(r,B.a5)
s.bH=r
s.dH=null
s.fl=null
s.hG=null},
sbD(a){if(this.wZ==a)return
this.wZ=a
this.aY()},
fz(a){this.ts(a)},
ek(a){var s,r,q=this
q.fF(a)
a.a=q.O
a.b=q.au
s=q.v.a
if(s!=null){a.b4(B.B_,!0)
a.b4(B.AS,s)}s=q.v.e
if(s!=null)a.b4(B.AX,s)
s=q.v.f
if(s!=null)a.b4(B.B0,s)
s=q.v.w
if(s!=null)a.b4(B.AZ,s)
s=q.v.as
if(s!=null)a.b4(B.AV,s)
s=q.v.at
if(s!=null)a.b4(B.AW,s)
s=q.v.db
if(s!=null)a.b4(B.AT,s)
s=q.c8
if(s!=null){a.p4=s
a.d=!0}s=q.bH
if(s!=null){a.R8=s
a.d=!0}s=q.dH
if(s!=null){a.RG=s
a.d=!0}s=q.fl
if(s!=null){a.rx=s
a.d=!0}s=q.hG
if(s!=null){a.ry=s
a.d=!0}s=q.v
r=s.p2
if(r!=null){a.to=r
a.d=!0}s.p3!=null
s=q.v.cx
if(s!=null)a.b4(B.AU,s)
s=q.v.cy
if(s!=null)a.b4(B.AY,s)
s=q.wZ
if(s!=null){a.y1=s
a.d=!0}s=q.v
r=s.R8
if(r!=null){a.id=r
a.d=!0}s=s.RG
if(s!=null)a.Fb(s)
if(q.v.rx!=null)a.siJ(q.gU9())
if(q.v.ry!=null)a.sjI(q.gU_())
if(q.v.ab!=null)a.sr6(q.gTY())},
Ua(){var s=this.v.rx
if(s!=null)s.$0()},
U0(){var s=this.v.ry
if(s!=null)s.$0()},
TZ(){var s=this.v.ab
if(s!=null)s.$0()}}
A.GX.prototype={
sWT(a){return},
ek(a){this.fF(a)
a.c=!0}}
A.Ha.prototype={
ek(a){this.fF(a)
a.d=a.p2=a.a=!0}}
A.H5.prototype={
sYX(a){if(a===this.v)return
this.v=a
this.aY()},
fz(a){if(this.v)return
this.ts(a)}}
A.H8.prototype={
sxl(a,b){if(b===this.v)return
this.v=b
this.aY()},
ek(a){this.fF(a)
a.k1=this.v
a.d=!0}}
A.un.prototype={
sn(a,b){if(this.v.k(0,b))return
this.v=b
this.ap()},
sKc(a){return},
aF(a,b){var s,r=this,q=r.v,p=r.k3
p.toString
s=new A.qa(q,p,b,A.A(t.S,t.M),A.aq(),r.$ti.h("qa<1>"))
s.ht()
a.Ib(s,A.em.prototype.glj.call(r),b)},
gmw(){return!0}}
A.N1.prototype={
ei(a){var s=this.A$
if(s!=null)return s.iT(a)
return this.Av(a)}}
A.N2.prototype={
an(a){var s=this
s.lS(a)
s.fZ$.V(0,s.gpw())
s.vI()},
ah(a){this.fZ$.F(0,this.gpw())
this.kb(0)},
aF(a,b){if(this.kS$===0)return
this.fG(a,b)}}
A.x9.prototype={
an(a){var s
this.ea(a)
s=this.A$
if(s!=null)s.an(a)},
ah(a){var s
this.dw(0)
s=this.A$
if(s!=null)s.ah(0)}}
A.xa.prototype={
ei(a){var s=this.A$
if(s!=null)return s.iT(a)
return this.Ak(a)}}
A.iA.prototype={
D(){return"SelectionResult."+this.b}}
A.cX.prototype={$ia2:1}
A.HQ.prototype={
snR(a){var s=this,r=s.kW$
if(a==r)return
if(a==null)s.F(0,s.gDT())
else if(r==null)s.V(0,s.gDT())
s.DS()
s.kW$=a
s.DU()},
DU(){var s=this
if(s.kW$==null){s.ju$=!1
return}if(s.ju$&&!s.gn(s).d){s.kW$.u(0,s)
s.ju$=!1}else if(!s.ju$&&s.gn(s).d){s.kW$.E(0,s)
s.ju$=!0}},
DS(){var s=this
if(s.ju$){s.kW$.u(0,s)
s.ju$=!1}}}
A.oo.prototype={
D(){return"SelectionEventType."+this.b}}
A.m7.prototype={
D(){return"TextGranularity."+this.b}}
A.a1g.prototype={}
A.qy.prototype={}
A.lU.prototype={}
A.lV.prototype={
D(){return"SelectionExtendDirection."+this.b}}
A.op.prototype={
D(){return"SelectionStatus."+this.b}}
A.jY.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.z(s))return!1
return b instanceof A.jY&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&b.c===s.c&&b.d===s.d},
gt(a){var s=this
return A.U(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.lW.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.z(s))return!1
return b instanceof A.lW&&b.a.k(0,s.a)&&b.b===s.b&&b.c===s.c},
gt(a){return A.U(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.vB.prototype={
D(){return"TextSelectionHandleType."+this.b}}
A.Hl.prototype={
ei(a){var s,r,q=this.A$
if(q!=null){s=q.iT(a)
r=q.e
r.toString
t.Ch.a(r)
if(s!=null)s+=r.a.b}else s=this.Ak(a)
return s},
aF(a,b){var s,r=this.A$
if(r!=null){s=r.e
s.toString
a.eu(r,t.Ch.a(s).a.U(0,b))}},
cB(a,b){var s,r=this.A$
if(r!=null){s=r.e
s.toString
t.Ch.a(s)
return a.mv(new A.a_N(b,s,r),s.a,b)}return!1}}
A.a_N.prototype={
$2(a,b){return this.c.bO(a,b)},
$S:15}
A.Hd.prototype={
pl(){var s=this
if(s.v!=null)return
s.v=s.O.W(s.au)},
sd7(a,b){var s=this
if(s.O.k(0,b))return
s.O=b
s.v=null
s.a4()},
sbD(a){var s=this
if(s.au==a)return
s.au=a
s.v=null
s.a4()},
c2(a){var s,r,q,p=this
p.pl()
if(p.A$==null){s=p.v
return a.bx(new A.Z(s.a+s.c,s.b+s.d))}s=p.v
s.toString
r=a.FZ(s)
q=p.A$.fA(r)
s=p.v
return a.bx(new A.Z(s.a+q.a+s.c,s.b+q.b+s.d))},
bC(){var s,r,q,p,o,n,m=this,l=t.k.a(A.x.prototype.gX.call(m))
m.pl()
if(m.A$==null){s=m.v
m.k3=l.bx(new A.Z(s.a+s.c,s.b+s.d))
return}s=m.v
s.toString
r=l.FZ(s)
m.A$.ci(r,!0)
s=m.A$
q=s.e
q.toString
t.Ch.a(q)
p=m.v
o=p.a
n=p.b
q.a=new A.u(o,n)
s=s.k3
m.k3=l.bx(new A.Z(o+s.a+p.c,n+s.b+p.d))}}
A.GV.prototype={
pl(){var s=this
if(s.v!=null)return
s.v=s.O.W(s.au)},
sdY(a){var s=this
if(s.O.k(0,a))return
s.O=a
s.v=null
s.a4()},
sbD(a){var s=this
if(s.au==a)return
s.au=a
s.v=null
s.a4()},
vZ(){var s,r,q,p,o=this
o.pl()
s=o.A$
r=s.e
r.toString
t.Ch.a(r)
q=o.v
q.toString
p=o.k3
p.toString
s=s.k3
s.toString
r.a=q.kC(t.uu.a(p.ad(0,s)))}}
A.Hi.prototype={
sa1X(a){if(this.aL==a)return
this.aL=a
this.a4()},
sa_7(a){if(this.a7==a)return
this.a7=a
this.a4()},
c2(a){var s,r,q=this,p=q.aL!=null||a.b===1/0,o=q.a7!=null||a.d===1/0,n=q.A$
if(n!=null){s=n.fA(new A.aN(0,a.b,0,a.d))
if(p){n=q.aL
if(n==null)n=1
n=s.a*n}else n=1/0
if(o){r=q.a7
if(r==null)r=1
r=s.b*r}else r=1/0
return a.bx(new A.Z(n,r))}n=p?0:1/0
return a.bx(new A.Z(n,o?0:1/0))},
bC(){var s,r,q=this,p=t.k.a(A.x.prototype.gX.call(q)),o=q.aL!=null||p.b===1/0,n=q.a7!=null||p.d===1/0,m=q.A$
if(m!=null){m.ci(new A.aN(0,p.b,0,p.d),!0)
if(o){m=q.A$.k3.a
s=q.aL
m*=s==null?1:s}else m=1/0
if(n){s=q.A$.k3.b
r=q.a7
s*=r==null?1:r}else s=1/0
q.k3=p.bx(new A.Z(m,s))
q.vZ()}else{m=o?0:1/0
q.k3=p.bx(new A.Z(m,n?0:1/0))}}}
A.a1O.prototype={
rT(a){return new A.Z(A.E(1/0,a.a,a.b),A.E(1/0,a.c,a.d))}}
A.H2.prototype={
swt(a){var s=this,r=s.v
if(r===a)return
if(A.z(a)!==A.z(r)||a.lF(r))s.a4()
s.v=a
s.b!=null},
an(a){this.N2(a)},
ah(a){this.N3(0)},
c2(a){return a.bx(this.v.rT(a))},
bC(){var s,r,q,p,o,n,m=this,l=t.k,k=l.a(A.x.prototype.gX.call(m))
m.k3=k.bx(m.v.rT(k))
if(m.A$!=null){s=m.v.z5(l.a(A.x.prototype.gX.call(m)))
l=m.A$
l.toString
k=s.a
r=s.b
q=k>=r
l.ci(s,!(q&&s.c>=s.d))
l=m.A$
p=l.e
p.toString
t.Ch.a(p)
o=m.v
n=m.k3
n.toString
if(q&&s.c>=s.d)l=new A.Z(A.E(0,k,r),A.E(0,s.c,s.d))
else{l=l.k3
l.toString}p.a=o.ze(n,l)}}}
A.xb.prototype={
an(a){var s
this.ea(a)
s=this.A$
if(s!=null)s.an(a)},
ah(a){var s
this.dw(0)
s=this.A$
if(s!=null)s.ah(0)}}
A.rB.prototype={
D(){return"GrowthDirection."+this.b}}
A.k_.prototype={
gHy(){return!1},
WK(a,b){var s=this.w
switch(A.b8(this.a).a){case 0:return new A.aN(b,a,s,s)
case 1:return new A.aN(s,s,b,a)}},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.k_))return!1
return b.a===s.a&&b.b===s.b&&b.d===s.d&&b.f===s.f&&b.r===s.r&&b.w===s.w&&b.x===s.x&&b.y===s.y&&b.Q===s.Q&&b.z===s.z},
gt(a){var s=this
return A.U(s.a,s.b,s.d,s.f,s.r,s.w,s.x,s.y,s.Q,s.z,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r=A.a([s.a.i(0),s.b.i(0),s.c.i(0),"scrollOffset: "+B.d.K(s.d,1),"remainingPaintExtent: "+B.d.K(s.r,1)],t.s),q=s.f
if(q!==0)r.push("overlap: "+B.d.K(q,1))
r.push("crossAxisExtent: "+B.d.K(s.w,1))
r.push("crossAxisDirection: "+s.x.i(0))
r.push("viewportMainAxisExtent: "+B.d.K(s.y,1))
r.push("remainingCacheExtent: "+B.d.K(s.Q,1))
r.push("cacheOrigin: "+B.d.K(s.z,1))
return"SliverConstraints("+B.b.bg(r,", ")+")"}}
A.a3w.prototype={
bQ(){return"SliverGeometry"}}
A.ov.prototype={}
A.I6.prototype={
i(a){return A.z(this.a).i(0)+"@(mainAxis: "+A.h(this.c)+", crossAxis: "+A.h(this.d)+")"}}
A.vb.prototype={
i(a){var s=this.a
return"layoutOffset="+(s==null?"None":B.d.K(s,1))}}
A.k0.prototype={
i(a){return"paintOffset="+A.h(this.a)}}
A.iD.prototype={}
A.c6.prototype={
gX(){return t.p.a(A.x.prototype.gX.call(this))},
giX(){return this.gha()},
gha(){var s=this,r=t.p
switch(A.b8(r.a(A.x.prototype.gX.call(s)).a).a){case 0:return new A.y(0,0,0+s.id.c,0+r.a(A.x.prototype.gX.call(s)).w)
case 1:return new A.y(0,0,0+r.a(A.x.prototype.gX.call(s)).w,0+s.id.c)}},
nK(){},
H4(a,b,c){var s=this
if(c>=0&&c<s.id.r&&b>=0&&b<t.p.a(A.x.prototype.gX.call(s)).w)if(s.xi(a,b,c)||!1){a.E(0,new A.I6(c,b,s))
return!0}return!1},
xi(a,b,c){return!1},
fS(a,b,c){var s=a.d,r=a.r,q=s+r
return A.E(A.E(c,s,q)-A.E(b,s,q),0,r)},
mE(a,b,c){var s=a.d,r=s+a.z,q=a.Q,p=s+q
return A.E(A.E(c,r,p)-A.E(b,r,p),0,q)},
wf(a){return 0},
d1(a,b){},
hH(a,b){}}
A.a_O.prototype={
Cd(a){var s
switch(a.a.a){case 0:case 3:s=!1
break
case 2:case 1:s=!0
break
default:s=null}switch(a.b.a){case 0:break
case 1:s=!s
break}return s},
a_f(a,b,c,d){var s,r,q,p,o=this,n={},m=t.p,l=o.Cd(m.a(A.x.prototype.gX.call(o))),k=b.e
k.toString
k=t.D.a(k).a
k.toString
s=k-m.a(A.x.prototype.gX.call(o)).d
r=d-s
q=c-0
p=n.a=null
switch(A.b8(m.a(A.x.prototype.gX.call(o)).a).a){case 0:if(!l){m=b.k3.a
r=m-r
s=o.id.c-m-s}p=new A.u(s,0)
n.a=new A.u(r,q)
break
case 1:if(!l){m=b.k3.b
r=m-r
s=o.id.c-m-s}p=new A.u(0,s)
n.a=new A.u(q,r)
break}return a.WB(new A.a_P(n,b),p)}}
A.a_P.prototype={
$1(a){return this.b.bO(a,this.a.a)},
$S:81}
A.NX.prototype={}
A.O_.prototype={
ah(a){this.tp(0)}}
A.Hm.prototype={
so4(a){if(this.bU===a)return
this.bU=a
this.a4()}}
A.Hn.prototype={
Jq(a,b){var s,r
if(b>0){s=a/b
r=B.d.bb(s)
if(Math.abs(s*b-r*b)<1e-10)return r
return B.d.cA(s)}return 0},
z9(a,b){var s,r
if(b>0){s=a/b-1
r=B.d.bb(s)
if(Math.abs(s*b-r*b)<1e-10)return Math.max(0,r)
return Math.max(0,B.d.d2(s))}return 0},
OO(a){var s,r=this.a3$,q=A.n(this).h("ap.1"),p=t.D,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s<a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).a7$}return o},
OP(a){var s,r=this.by$,q=A.n(this).h("ap.1"),p=t.D,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s>a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).aL$}return o},
bC(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=t.p,a7=a6.a(A.x.prototype.gX.call(a4)),a8=a4.ak
a8.R8=!1
s=a6.a(A.x.prototype.gX.call(a4)).y*a4.bU
a6=a7.d
r=a6+a7.z
q=r+a7.Q
p=a7.WK(s,s)
o=a4.Jq(r,s)
n=isFinite(q)?a4.z9(q,s):a5
if(a4.a3$!=null){m=a4.OO(o)
a4.FA(m,n!=null?a4.OP(n):0)}else a4.FA(0,0)
if(a4.a3$==null)if(!a4.Wr(o,s*o)){l=o<=0?0:a8.gpX()*s
a4.id=A.va(a5,!1,a5,a5,l,0,0,l,a5)
a8.G2()
return}k=a4.a3$
k.toString
k=k.e
k.toString
j=t.D
k=j.a(k).b
k.toString
i=k-1
h=a5
for(;i>=o;--i){g=a4.a_s(p)
if(g==null){a4.id=A.va(a5,!1,a5,a5,0,0,0,0,i*s)
return}k=g.e
k.toString
j.a(k).a=s*i
if(h==null)h=g}if(h==null){a4.a3$.hN(p)
h=a4.a3$
k=h.e
k.toString
j.a(k).a=s*o}k=h.e
k.toString
k=j.a(k).b
k.toString
i=k+1
k=A.n(a4).h("ap.1")
f=n!=null
while(!0){if(!(!f||i<=n)){e=1/0
break}d=h.e
d.toString
g=k.a(d).a7$
if(g!=null){d=g.e
d.toString
d=j.a(d).b
d.toString
d=d!==i}else d=!0
if(d){g=a4.a_r(p,h)
if(g==null){e=i*s
break}}else g.hN(p)
d=g.e
d.toString
j.a(d)
c=d.b
c.toString
d.a=s*c;++i
h=g}k=a4.by$
k.toString
k=k.e
k.toString
k=j.a(k).b
k.toString
b=s*o
a=s*(k+1)
e=Math.min(e,a8.YT(a7,o,k,b,a))
a0=a4.fS(a7,b,a)
a1=a4.mE(a7,b,a)
a2=a6+a7.r
a3=isFinite(a2)?a4.z9(a2,s):a5
a4.id=A.va(a1,a3!=null&&k>=a3||a6>0,a5,a5,e,a0,0,e,a5)
if(e===a)a8.R8=!0
a8.G2()}}
A.hc.prototype={$ic3:1}
A.a_T.prototype={
e6(a){}}
A.fF.prototype={
i(a){var s=this.b,r=this.nh$?"keepAlive; ":""
return"index="+A.h(s)+"; "+r+this.ME(0)}}
A.lO.prototype={
e6(a){if(!(a.e instanceof A.fF))a.e=new A.fF(!1,null,null)},
hw(a){var s
this.Al(a)
s=a.e
s.toString
t.D.a(s)
if(!s.c){t.x.a(a)
s.b=this.ak.p4}},
xo(a,b,c){this.th(0,b,c)},
r4(a,b){var s,r,q,p=this,o=a.e
o.toString
s=t.D
s.a(o)
if(!o.c){p.KF(a,b)
o=a.e
o.toString
s.a(o).b=p.ak.p4
p.a4()}else{r=p.al
if(r.j(0,o.b)===a)r.u(0,o.b)
q=a.e
q.toString
s.a(q).b=p.ak.p4
o=o.b
o.toString
r.l(0,o,a)}},
u(a,b){var s=b.e
s.toString
t.D.a(s)
if(!s.c){this.KH(0,b)
return}this.al.u(0,s.b)
this.io(b)},
u7(a,b){this.Hp(new A.a_Q(this,a,b),t.p)},
BG(a){var s,r=this,q=a.e
q.toString
t.D.a(q)
if(q.nh$){r.u(0,a)
s=q.b
s.toString
r.al.l(0,s,a)
a.e=q
r.Al(a)
q.c=!0}else r.ak.Io(a)},
an(a){var s,r,q
this.N4(a)
for(s=this.al,s=s.gaV(s),s=new A.dJ(J.aw(s.a),s.b),r=A.n(s).z[1];s.q();){q=s.a;(q==null?r.a(q):q).an(a)}},
ah(a){var s,r,q
this.N5(0)
for(s=this.al,s=s.gaV(s),s=new A.dJ(J.aw(s.a),s.b),r=A.n(s).z[1];s.q();){q=s.a;(q==null?r.a(q):q).ah(0)}},
iM(){this.KG()
var s=this.al
s.gaV(s).Y(0,this.gIl())},
aM(a){var s
this.zW(a)
s=this.al
s.gaV(s).Y(0,a)},
fz(a){this.zW(a)},
Wr(a,b){var s
this.u7(a,null)
s=this.a3$
if(s!=null){s=s.e
s.toString
t.D.a(s).a=b
return!0}this.ak.R8=!0
return!1},
a_s(a){var s,r,q,p=this,o=p.a3$
o.toString
o=o.e
o.toString
s=t.D
o=s.a(o).b
o.toString
r=o-1
p.u7(r,null)
o=p.a3$
o.toString
q=o.e
q.toString
q=s.a(q).b
q.toString
if(q===r){o.ci(a,!1)
return p.a3$}p.ak.R8=!0
return null},
a_r(a,b){var s,r,q,p=b.e
p.toString
s=t.D
p=s.a(p).b
p.toString
r=p+1
this.u7(r,b)
p=b.e
p.toString
q=A.n(this).h("ap.1").a(p).a7$
if(q!=null){p=q.e
p.toString
p=s.a(p).b
p.toString
p=p===r}else p=!1
if(p){q.ci(a,!1)
return q}this.ak.R8=!0
return null},
FA(a,b){var s={}
s.a=a
s.b=b
this.Hp(new A.a_S(s,this),t.p)},
HZ(a){switch(A.b8(t.p.a(A.x.prototype.gX.call(this)).a).a){case 0:return a.k3.a
case 1:return a.k3.b}},
xi(a,b,c){var s,r,q=this.by$,p=A.afs(a)
for(s=A.n(this).h("ap.1");q!=null;){if(this.a_f(p,q,b,c))return!0
r=q.e
r.toString
q=s.a(r).aL$}return!1},
wf(a){var s=a.e
s.toString
return t.D.a(s).a},
lk(a){var s=t.ub.a(a.e)
return(s==null?null:s.b)!=null&&!this.al.S(0,s.b)},
d1(a,b){var s,r,q,p,o=this
if(!o.lk(a))b.zD()
else{s=t.p
r=o.Cd(s.a(A.x.prototype.gX.call(o)))
q=a.e
q.toString
q=t.D.a(q).a
q.toString
p=q-s.a(A.x.prototype.gX.call(o)).d
switch(A.b8(s.a(A.x.prototype.gX.call(o)).a).a){case 0:b.az(0,!r?o.id.c-a.k3.a-p:p,0)
break
case 1:b.az(0,0,!r?o.id.c-a.k3.b-p:p)
break}}},
aF(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null
if(d.a3$==null)return
s=t.p
switch(A.j1(s.a(A.x.prototype.gX.call(d)).a,s.a(A.x.prototype.gX.call(d)).b)){case B.y:r=b.U(0,new A.u(0,d.id.c))
q=B.Ss
p=B.fe
o=!0
break
case B.ar:r=b
q=B.fe
p=B.il
o=!1
break
case B.x:r=b
q=B.il
p=B.fe
o=!1
break
case B.a7:r=b.U(0,new A.u(d.id.c,0))
q=B.Sv
p=B.il
o=!0
break
default:o=c
r=o
p=r
q=p}n=d.a3$
for(m=A.n(d).h("ap.1"),l=t.D;n!=null;){k=n.e
k.toString
k=l.a(k).a
k.toString
j=k-s.a(A.x.prototype.gX.call(d)).d
k=r.a
i=q.a
k=k+i*j+p.a*0
h=r.b
g=q.b
h=h+g*j+p.b*0
f=new A.u(k,h)
if(o){e=d.HZ(n)
f=new A.u(k+i*e,h+g*e)}if(j<s.a(A.x.prototype.gX.call(d)).r&&j+d.HZ(n)>0)a.eu(n,f)
k=n.e
k.toString
n=m.a(k).a7$}}}
A.a_Q.prototype={
$1(a){var s=this.a,r=s.al,q=this.b,p=this.c
if(r.S(0,q)){r=r.u(0,q)
r.toString
q=r.e
q.toString
t.D.a(q)
s.io(r)
r.e=q
s.th(0,r,p)
q.c=!1}else s.ak.Y4(q,p)},
$S:82}
A.a_S.prototype={
$1(a){var s,r,q
for(s=this.a,r=this.b;s.a>0;){q=r.a3$
q.toString
r.BG(q);--s.a}for(;s.b>0;){q=r.by$
q.toString
r.BG(q);--s.b}s=r.al
s=s.gaV(s)
q=A.n(s).h("aJ<q.E>")
B.b.Y(A.ay(new A.aJ(s,new A.a_R(),q),!0,q.h("q.E")),r.ak.ga1c())},
$S:82}
A.a_R.prototype={
$1(a){var s=a.e
s.toString
return!t.D.a(s).nh$},
$S:217}
A.xd.prototype={
an(a){var s,r,q
this.ea(a)
s=this.a3$
for(r=t.D;s!=null;){s.an(a)
q=s.e
q.toString
s=r.a(q).a7$}},
ah(a){var s,r,q
this.dw(0)
s=this.a3$
for(r=t.D;s!=null;){s.ah(0)
q=s.e
q.toString
s=r.a(q).a7$}}}
A.Nf.prototype={}
A.Ng.prototype={}
A.NY.prototype={
ah(a){this.tp(0)}}
A.NZ.prototype={}
A.ut.prototype={
gw9(){var s=this,r=t.p
switch(A.j1(r.a(A.x.prototype.gX.call(s)).a,r.a(A.x.prototype.gX.call(s)).b)){case B.y:return s.bG.d
case B.ar:return s.bG.a
case B.x:return s.bG.b
case B.a7:return s.bG.c}},
gWD(){var s=this,r=t.p
switch(A.j1(r.a(A.x.prototype.gX.call(s)).a,r.a(A.x.prototype.gX.call(s)).b)){case B.y:return s.bG.b
case B.ar:return s.bG.c
case B.x:return s.bG.d
case B.a7:return s.bG.a}},
gYd(){switch(A.b8(t.p.a(A.x.prototype.gX.call(this)).a).a){case 0:var s=this.bG
return s.gb5(s)+s.gb8(s)
case 1:return this.bG.gc9()}},
e6(a){if(!(a.e instanceof A.k0))a.e=new A.k0(B.j)},
bC(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=null,a2=t.p,a3=a2.a(A.x.prototype.gX.call(a0)),a4=a0.gw9()
a0.gWD()
s=a0.bG
s.toString
a2=s.WF(A.b8(a2.a(A.x.prototype.gX.call(a0)).a))
r=a0.gYd()
if(a0.A$==null){q=a0.fS(a3,0,a2)
a0.id=A.va(a0.mE(a3,0,a2),!1,a1,a1,a2,Math.min(q,a3.r),0,a2,a1)
return}p=a0.fS(a3,0,a4)
o=a3.f
if(o>0)o=Math.max(0,o-p)
s=a0.A$
s.toString
n=Math.max(0,a3.d-a4)
m=Math.min(0,a3.z+a4)
l=a3.r
k=a0.fS(a3,0,a4)
j=a3.Q
i=a0.mE(a3,0,a4)
h=Math.max(0,a3.w-r)
g=a3.a
f=a3.b
s.ci(new A.k_(g,f,a3.c,n,a4+a3.e,o,l-k,h,a3.x,a3.y,m,j-i),!0)
e=a0.A$.id
s=e.y
if(s!=null){a0.id=A.va(a1,!1,a1,a1,0,0,0,0,s)
return}s=e.a
n=a4+s
m=a2+s
d=a0.fS(a3,n,m)
c=p+d
b=a0.mE(a3,0,a4)
a=a0.mE(a3,n,m)
n=e.c
k=e.d
q=Math.min(p+Math.max(n,k+d),l)
l=e.b
k=Math.min(c+k,q)
j=Math.min(a+b+e.z,j)
i=e.e
n=Math.max(c+n,p+e.r)
a0.id=A.va(j,e.x,n,k,a2+i,q,l,m,a1)
m=a0.A$.e
m.toString
t.v.a(m)
switch(A.j1(g,f)){case B.y:a2=a0.bG
n=a2.a
s=a2.d+s
m.a=new A.u(n,a0.fS(a3,s,s+a2.b))
break
case B.ar:m.a=new A.u(a0.fS(a3,0,a0.bG.a),a0.bG.b)
break
case B.x:a2=a0.bG
m.a=new A.u(a2.a,a0.fS(a3,0,a2.b))
break
case B.a7:a2=a0.bG
s=a2.c+s
m.a=new A.u(a0.fS(a3,s,s+a2.a),a0.bG.b)
break}},
xi(a,b,c){var s,r,q,p,o=this,n=o.A$
if(n!=null&&n.id.r>0){n=n.e
n.toString
t.v.a(n)
s=o.fS(t.p.a(A.x.prototype.gX.call(o)),0,o.gw9())
r=o.A$
r.toString
r=o.Xe(r)
n=n.a
q=o.A$.ga_d()
p=n!=null
if(p)a.c.push(new A.py(new A.u(-n.a,-n.b)))
q.$3$crossAxisPosition$mainAxisPosition(a,b-r,c-s)
if(p)a.rm()}return!1},
Xe(a){var s=this,r=t.p
switch(A.j1(r.a(A.x.prototype.gX.call(s)).a,r.a(A.x.prototype.gX.call(s)).b)){case B.y:case B.x:return s.bG.a
case B.a7:case B.ar:return s.bG.b}},
wf(a){return this.gw9()},
d1(a,b){var s=a.e
s.toString
s=t.v.a(s).a
b.az(0,s.a,s.b)},
aF(a,b){var s,r=this.A$
if(r!=null&&r.id.w){s=r.e
s.toString
a.eu(r,b.U(0,t.v.a(s).a))}}}
A.Nd.prototype={
an(a){var s
this.ea(a)
s=this.A$
if(s!=null)s.an(a)},
ah(a){var s
this.dw(0)
s=this.A$
if(s!=null)s.ah(0)}}
A.a_n.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return b instanceof A.a_n&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gt(a){var s=this
return A.U(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this
return"RelativeRect.fromLTRB("+B.d.K(s.a,1)+", "+B.d.K(s.b,1)+", "+B.d.K(s.c,1)+", "+B.d.K(s.d,1)+")"}}
A.dz.prototype={
gxv(){var s=this
return s.e!=null||s.f!=null||s.r!=null||s.w!=null||s.x!=null||s.y!=null},
i(a){var s=this,r=A.a([],t.s),q=s.e
if(q!=null)r.push("top="+A.fP(q))
q=s.f
if(q!=null)r.push("right="+A.fP(q))
q=s.r
if(q!=null)r.push("bottom="+A.fP(q))
q=s.w
if(q!=null)r.push("left="+A.fP(q))
q=s.x
if(q!=null)r.push("width="+A.fP(q))
q=s.y
if(q!=null)r.push("height="+A.fP(q))
if(r.length===0)r.push("not positioned")
r.push(s.on(0))
return B.b.bg(r,"; ")}}
A.vi.prototype={
D(){return"StackFit."+this.b}}
A.uu.prototype={
e6(a){if(!(a.e instanceof A.dz))a.e=new A.dz(null,null,B.j)},
Vp(){var s=this
if(s.ab!=null)return
s.ab=s.a8.W(s.aq)},
sdY(a){var s=this
if(s.a8.k(0,a))return
s.a8=a
s.ab=null
s.a4()},
sbD(a){var s=this
if(s.aq==a)return
s.aq=a
s.ab=null
s.a4()},
ei(a){return this.FY(a)},
c2(a){return this.E9(a,A.abv())},
E9(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.Vp()
if(e.d4$===0){s=a.a
r=a.b
q=A.E(1/0,s,r)
p=a.c
o=a.d
n=A.E(1/0,p,o)
return isFinite(q)&&isFinite(n)?new A.Z(A.E(1/0,s,r),A.E(1/0,p,o)):new A.Z(A.E(0,s,r),A.E(0,p,o))}m=a.a
l=a.c
switch(e.aU.a){case 0:k=new A.aN(0,a.b,0,a.d)
break
case 1:k=A.zg(new A.Z(A.E(1/0,m,a.b),A.E(1/0,l,a.d)))
break
case 2:k=a
break
default:k=null}j=e.a3$
for(s=t.B,i=l,h=m,g=!1;j!=null;){r=j.e
r.toString
s.a(r)
if(!r.gxv()){f=b.$2(j,k)
h=Math.max(h,f.a)
i=Math.max(i,f.b)
g=!0}j=r.a7$}return g?new A.Z(h,i):new A.Z(A.E(1/0,m,a.b),A.E(1/0,l,a.d))},
bC(){var s,r,q,p,o,n,m,l=this,k=t.k.a(A.x.prototype.gX.call(l))
l.I=!1
l.k3=l.E9(k,A.abw())
s=l.a3$
for(r=t.B,q=t.uu;s!=null;){p=s.e
p.toString
r.a(p)
if(!p.gxv()){o=l.ab
o.toString
n=l.k3
n.toString
m=s.k3
m.toString
p.a=o.kC(q.a(n.ad(0,m)))}else{o=l.k3
o.toString
n=l.ab
n.toString
l.I=A.ah6(s,p,o,n)||l.I}s=p.a7$}},
cB(a,b){return this.wq(a,b)},
rh(a,b){this.mT(a,b)},
aF(a,b){var s,r=this,q=r.b3,p=q!==B.l&&r.I,o=r.A
if(p){p=r.cx
p===$&&A.b()
s=r.k3
o.saQ(0,a.jL(p,b,new A.y(0,0,0+s.a,0+s.b),r.gyf(),q,o.a))}else{o.saQ(0,null)
r.mT(a,b)}},
m(){this.A.saQ(0,null)
this.hs()},
ik(a){var s
switch(this.b3.a){case 0:return null
case 1:case 2:case 3:if(this.I){s=this.k3
s=new A.y(0,0,0+s.a,0+s.b)}else s=null
return s}}}
A.Nh.prototype={
an(a){var s,r,q
this.ea(a)
s=this.a3$
for(r=t.B;s!=null;){s.an(a)
q=s.e
q.toString
s=r.a(q).a7$}},
ah(a){var s,r,q
this.dw(0)
s=this.a3$
for(r=t.B;s!=null;){s.ah(0)
q=s.e
q.toString
s=r.a(q).a7$}}}
A.Ni.prototype={}
A.J1.prototype={
k(a,b){if(b==null)return!1
if(J.S(b)!==A.z(this))return!1
return b instanceof A.J1&&b.a.k(0,this.a)&&b.b===this.b},
gt(a){return A.U(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return this.a.i(0)+" at "+A.fP(this.b)+"x"}}
A.uv.prototype={
swg(a){var s,r,q,p,o=this
if(o.k1.k(0,a))return
s=o.k1
o.k1=a
r=s.b
r=A.tr(r,r,1)
q=o.k1.b
if(!r.k(0,A.tr(q,q,1))){r=o.EM()
q=o.ch
p=q.a
p.toString
J.amd(p)
q.saQ(0,r)
o.ap()}o.a4()},
EM(){var s,r=this.k1.b
r=A.tr(r,r,1)
this.k4=r
s=A.ahM(r)
s.an(this)
return s},
nK(){},
bC(){var s,r=this.k1.a
this.id=r
s=this.A$
if(s!=null)s.hN(A.zg(r))},
bO(a,b){var s=this.A$
if(s!=null)s.bO(A.afs(a),b)
a.E(0,new A.h6(this,t.Cq))
return!0},
a_i(a){var s,r=A.a([],t.f1),q=new A.ba(new Float64Array(16))
q.cU()
s=new A.fU(r,A.a([q],t.hZ),A.a([],t.pw))
this.bO(s,a)
return s},
gdn(){return!0},
aF(a,b){var s=this.A$
if(s!=null)a.eu(s,b)},
d1(a,b){var s=this.k4
s.toString
b.cr(0,s)
this.LY(a,b)},
Xy(){var s,r,q
try{q=$.an()
s=q.Ya()
r=this.ch.a.WY(s)
this.W7()
q.a1g(r)
r.m()}finally{}},
W7(){var s,r,q,p,o,n,m,l,k,j=null,i=this.gha(),h=i.gaN(),g=this.k2
g.gjO()
s=i.gaN()
g.gjO()
g=this.ch
r=t.g9
q=g.a.GC(0,new A.u(h.a,0),r)
switch(A.kt().a){case 0:p=g.a.GC(0,new A.u(s.a,i.d-1-0),r)
break
case 1:case 2:case 3:case 4:case 5:p=j
break
default:p=j}h=q==null
if(h&&p==null)return
if(!h&&p!=null){h=q.f
g=q.r
s=q.e
r=q.w
A.ahB(new A.hz(p.a,p.b,p.c,p.d,s,h,g,r))
return}o=A.kt()===B.av
n=h?p:q
h=n.f
g=n.r
s=n.e
r=n.w
m=o?n.a:j
l=o?n.b:j
k=o?n.c:j
A.ahB(new A.hz(m,l,k,o?n.d:j,s,h,g,r))},
gha(){var s=this.id.a6(0,this.k1.b)
return new A.y(0,0,0+s.a,0+s.b)},
giX(){var s,r=this.k4
r.toString
s=this.id
return A.fw(r,new A.y(0,0,0+s.a,0+s.b))}}
A.Nk.prototype={
an(a){var s
this.ea(a)
s=this.A$
if(s!=null)s.an(a)},
ah(a){var s
this.dw(0)
s=this.A$
if(s!=null)s.ah(0)}}
A.zm.prototype={
D(){return"CacheExtentStyle."+this.b}}
A.od.prototype={
i(a){return"RevealedOffset(offset: "+A.h(this.a)+", rect: "+this.b.i(0)+")"}}
A.oa.prototype={
ek(a){this.fF(a)
a.Fb(B.B1)},
fz(a){var s=this.gFw()
new A.aJ(s,new A.a_X(),A.aM(s).h("aJ<1>")).Y(0,a)},
sfb(a){if(a===this.I)return
this.I=a
this.a4()},
sYc(a){if(a===this.ab)return
this.ab=a
this.a4()},
shP(a,b){var s=this,r=s.a8
if(b===r)return
if(s.b!=null)r.F(0,s.gr_())
s.a8=b
if(s.b!=null)b.V(0,s.gr_())
s.a4()},
sX0(a){if(a===this.aq)return
this.aq=a
this.a4()},
sX1(a){if(a===this.b3)return
this.b3=a
this.a4()},
an(a){this.N6(a)
this.a8.V(0,this.gr_())},
ah(a){this.a8.F(0,this.gr_())
this.N7(0)},
gdn(){return!0},
HE(a,b,c,d,e,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.auf(h.a8.k4,e),f=a0+a2
for(s=e.a,r=t.v,q=a0,p=0;c!=null;){o=a5<=0?0:a5
n=Math.max(b,-o)
m=b-n
c.ci(new A.k_(h.I,e,g,o,p,f-q,Math.max(0,a4-q+a0),d,h.ab,a1,n,Math.max(0,a3+m)),!0)
l=c.id
k=l.y
if(k!=null)return k
j=q+l.b
k=l.w||a5>0
i=c.e
if(k){i.toString
r.a(i).a=h.FC(c,j,e)}else{i.toString
r.a(i).a=h.FC(c,-a5+a0,e)}f=Math.max(j+l.c,f)
k=l.a
a5-=k
p+=k
q+=l.d
i=l.z
if(i!==0){a3-=i-m
b=Math.min(n+i,0)}switch(s){case 0:i=h.ng
i===$&&A.b()
h.ng=i+k
break
case 1:i=h.nf
i===$&&A.b()
h.nf=i-k
break}if(l.x)h.bT=!0
c=a.$1(c)}return 0},
ik(a){var s,r,q,p,o,n
switch(this.A.a){case 0:return null
case 1:case 2:case 3:break}s=this.k3
r=0+s.a
q=0+s.b
s=t.p
if(s.a(A.x.prototype.gX.call(a)).f===0||!isFinite(s.a(A.x.prototype.gX.call(a)).y))return new A.y(0,0,r,q)
p=s.a(A.x.prototype.gX.call(a)).y-s.a(A.x.prototype.gX.call(a)).r+s.a(A.x.prototype.gX.call(a)).f
switch(A.j1(this.I,s.a(A.x.prototype.gX.call(a)).b)){case B.x:o=0+p
n=0
break
case B.y:q-=p
n=0
o=0
break
case B.ar:n=0+p
o=0
break
case B.a7:r-=p
n=0
o=0
break
default:n=0
o=0}return new A.y(n,o,r,q)},
wv(a){var s,r=this,q=r.aU
if(q==null){q=r.k3
return new A.y(0,0,0+q.a,0+q.b)}switch(A.b8(r.I).a){case 1:s=r.k3
return new A.y(0,0-q,0+s.a,0+s.b+q)
case 0:s=r.k3
return new A.y(0-q,0,0+s.a+q,0+s.b)}},
aF(a,b){var s,r,q,p=this
if(p.a3$==null)return
s=p.bT&&p.A!==B.l
r=p.ac
if(s){s=p.cx
s===$&&A.b()
q=p.k3
r.saQ(0,a.jL(s,b,new A.y(0,0,0+q.a,0+q.b),p.gTP(),p.A,r.a))}else{r.saQ(0,null)
p.Dc(a,b)}},
m(){this.ac.saQ(0,null)
this.hs()},
Dc(a,b){var s,r,q,p,o,n,m,l
for(s=this.gFw(),r=s.length,q=t.v,p=b.a,o=b.b,n=0;n<s.length;s.length===r||(0,A.P)(s),++n){m=s[n]
if(m.id.w){l=m.e
l.toString
l=q.a(l).a
a.eu(m,new A.u(p+l.a,o+l.b))}}},
cB(a,b){var s,r,q,p,o,n,m,l,k={}
k.a=k.b=null
switch(A.b8(this.I).a){case 1:k.b=b.b
k.a=b.a
break
case 0:k.b=b.a
k.a=b.b
break}s=new A.ov(a.a,a.b,a.c)
for(r=this.gXf(),q=r.length,p=t.v,o=0;o<r.length;r.length===q||(0,A.P)(r),++o){n=r[o]
if(!n.id.w)continue
m=new A.ba(new Float64Array(16))
m.cU()
l=n.e
l.toString
l=p.a(l).a
m.az(0,l.a,l.b)
if(a.WC(new A.a_W(k,this,n,s),m))return!0}return!1},
jP(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=a instanceof A.c6
for(s=t.d,r=c,q=a,p=0;o=q.c,o!==d;q=o){o.toString
s.a(o)
if(q instanceof A.C)r=q
if(o instanceof A.c6){n=o.wf(q)
n.toString
p+=n}else{p=0
b=!1}}if(r!=null){s=r.c
s.toString
t.q0.a(s)
m=t.p.a(A.x.prototype.gX.call(s)).b
switch(A.b8(d.I).a){case 0:l=r.k3.a
break
case 1:l=r.k3.b
break
default:l=c}if(a1==null)a1=a.gha()
k=A.fw(a.bv(0,r),a1)}else{if(b){t.q0.a(a)
s=t.p
m=s.a(A.x.prototype.gX.call(a)).b
l=a.id.a
if(a1==null)switch(A.b8(d.I).a){case 0:a1=new A.y(0,0,0+l,0+s.a(A.x.prototype.gX.call(a)).w)
break
case 1:a1=new A.y(0,0,0+s.a(A.x.prototype.gX.call(a)).w,0+a.id.a)
break}}else{s=d.a8.at
s.toString
a1.toString
return new A.od(s,a1)}k=a1}t.q0.a(q)
switch(A.j1(d.I,m)){case B.y:s=k.d
p+=l-s
j=s-k.b
break
case B.ar:s=k.a
p+=s
j=k.c-s
break
case B.x:s=k.b
p+=s
j=k.d-s
break
case B.a7:s=k.c
p+=l-s
j=s-k.a
break
default:j=c}q.id.toString
p=d.JO(q,p)
i=A.fw(a.bv(0,d),a1)
h=d.a0d(q)
switch(t.p.a(A.x.prototype.gX.call(q)).b.a){case 0:p-=h
break
case 1:switch(A.b8(d.I).a){case 1:p-=i.d-i.b
break
case 0:p-=i.c-i.a
break}break}s=d.I
switch(A.b8(s).a){case 0:g=d.k3.a-h
break
case 1:g=d.k3.b-h
break
default:g=c}f=p-(g-j)*a0
o=d.a8.at
o.toString
e=o-f
switch(s.a){case 2:i=i.az(0,0,e)
break
case 1:i=i.az(0,e,0)
break
case 0:i=i.az(0,0,-e)
break
case 3:i=i.az(0,-e,0)
break}return new A.od(f,i)},
FC(a,b,c){switch(A.j1(this.I,c)){case B.y:return new A.u(0,this.k3.b-(b+a.id.c))
case B.ar:return new A.u(b,0)
case B.x:return new A.u(0,b)
case B.a7:return new A.u(this.k3.a-(b+a.id.c),0)}},
e7(a,b,c,d){var s=this
if(!s.a8.r.gkB())return s.op(a,b,c,d)
s.op(a,null,c,A.ah8(a,b,c,s.a8,d,s))},
lH(){return this.e7(B.aI,null,B.u,null)},
jZ(a,b){return this.e7(B.aI,a,B.u,b)},
$iGU:1}
A.a_X.prototype={
$1(a){var s=a.id
return s.w||s.z>0},
$S:219}
A.a_W.prototype={
$1(a){var s=this,r=s.c,q=s.a,p=s.b.XA(r,q.b)
return r.H4(s.d,q.a,p)},
$S:81}
A.uw.prototype={
e6(a){if(!(a.e instanceof A.iD))a.e=new A.iD(null,null,B.j)},
sWH(a){if(a===this.qu)return
this.qu=a
this.a4()},
saN(a){if(a==this.dI)return
this.dI=a
this.a4()},
giZ(){return!0},
c2(a){return new A.Z(A.E(1/0,a.a,a.b),A.E(1/0,a.c,a.d))},
bC(){var s,r,q,p,o,n,m,l,k,j=this
switch(A.b8(j.I).a){case 1:j.a8.mB(j.k3.b)
break
case 0:j.a8.mB(j.k3.a)
break}if(j.dI==null){j.ng=j.nf=0
j.bT=!1
j.a8.my(0,0)
return}switch(A.b8(j.I).a){case 1:s=j.k3
r=s.b
q=s.a
break
case 0:s=j.k3
r=s.a
q=s.b
break
default:r=null
q=null}s=0
do{p=j.a8.at
p.toString
o=j.OA(r,q,p+0)
if(o!==0){p=j.a8
n=p.at
n.toString
p.at=n+o
p.ch=!0}else{p=j.a8
n=j.nf
n===$&&A.b()
m=j.qu
n=Math.min(0,n+r*m)
l=j.ng
l===$&&A.b()
if(p.my(n,Math.max(0,l-r*(1-m))))break}k=s+1
if(k<10){s=k
continue}else break}while(!0)},
OA(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.ng=e.nf=0
e.bT=!1
s=a*e.qu-c
r=A.E(s,0,a)
q=a-s
p=A.E(q,0,a)
switch(e.b3.a){case 0:e.aU=e.aq
break
case 1:e.aU=a*e.aq
break}o=e.aU
o.toString
n=a+2*o
m=s+o
l=A.E(m,0,n)
k=A.E(n-m,0,n)
j=e.dI.e
j.toString
i=A.n(e).h("ap.1").a(j).aL$
j=i==null
if(!j){h=Math.max(a,s)
g=e.HE(e.gXc(),A.E(q,-o,0),i,b,B.nj,p,a,0,l,r,h-a)
if(g!==0)return-g}q=e.dI
o=-s
h=Math.max(0,o)
o=j?Math.min(0,o):0
j=s>=a?s:r
f=e.aU
f.toString
return e.HE(e.gXa(),A.E(s,-f,0),q,b,B.ni,j,a,o,k,p,h)},
JO(a,b){var s,r,q,p,o=this
switch(t.p.a(A.x.prototype.gX.call(a)).b.a){case 0:s=o.dI
for(r=A.n(o).h("ap.1"),q=0;s!==a;){q+=s.id.a
p=s.e
p.toString
s=r.a(p).a7$}return q+b
case 1:r=o.dI.e
r.toString
p=A.n(o).h("ap.1")
s=p.a(r).aL$
for(q=0;s!==a;){q-=s.id.a
r=s.e
r.toString
s=p.a(r).aL$}return q-b}},
a0d(a){var s,r,q,p=this
switch(t.p.a(A.x.prototype.gX.call(a)).b.a){case 0:s=p.dI
for(r=A.n(p).h("ap.1");s!==a;){s.id.toString
q=s.e
q.toString
s=r.a(q).a7$}return 0
case 1:r=p.dI.e
r.toString
q=A.n(p).h("ap.1")
s=q.a(r).aL$
for(;s!==a;){s.id.toString
r=s.e
r.toString
s=q.a(r).aL$}return 0}},
d1(a,b){var s=a.e
s.toString
s=t.v.a(s).a
b.az(0,s.a,s.b)},
XA(a,b){var s,r=a.e
r.toString
t.v.a(r)
s=t.p
switch(A.j1(s.a(A.x.prototype.gX.call(a)).a,s.a(A.x.prototype.gX.call(a)).b)){case B.x:return b-r.a.b
case B.ar:return b-r.a.a
case B.y:return a.id.c-(b-r.a.b)
case B.a7:return a.id.c-(b-r.a.a)}},
gFw(){var s,r,q=this,p=A.a([],t.jT),o=q.a3$
if(o==null)return p
for(s=A.n(q).h("ap.1");o!=q.dI;){o.toString
p.push(o)
r=o.e
r.toString
o=s.a(r).a7$}o=q.by$
for(;!0;){o.toString
p.push(o)
if(o===q.dI)return p
r=o.e
r.toString
o=s.a(r).aL$}},
gXf(){var s,r,q,p=this,o=A.a([],t.jT)
if(p.a3$==null)return o
s=p.dI
for(r=A.n(p).h("ap.1");s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).a7$}q=p.dI.e
q.toString
s=r.a(q).aL$
for(;s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).aL$}return o}}
A.hN.prototype={
an(a){var s,r,q
this.ea(a)
s=this.a3$
for(r=A.n(this).h("hN.0");s!=null;){s.an(a)
q=s.e
q.toString
s=r.a(q).a7$}},
ah(a){var s,r,q
this.dw(0)
s=this.a3$
for(r=A.n(this).h("hN.0");s!=null;){s.ah(0)
q=s.e
q.toString
s=r.a(q).a7$}}}
A.ok.prototype={
D(){return"ScrollDirection."+this.b}}
A.f1.prototype={
nE(a,b,c,d){var s=d.a===B.u.a
if(s){this.dq(b)
return A.bR(null,t.H)}else return this.fP(b,c,d)},
i(a){var s=this,r=A.a([],t.s)
s.My(r)
r.push(A.z(s.w).i(0))
r.push(s.r.i(0))
r.push(A.h(s.fr))
r.push(s.k4.i(0))
return"<optimized out>#"+A.bB(s)+"("+B.b.bg(r,", ")+")"},
c6(a){var s=this.at
if(s!=null)a.push("offset: "+B.d.K(s,1))}}
A.ph.prototype={}
A.jW.prototype={
D(){return"SchedulerPhase."+this.b}}
A.Zh.prototype={}
A.df.prototype={
WA(a){var s=this.z$
s.push(a)
if(s.length===1){s=$.aI()
s.ay=this.gQ_()
s.ch=$.al}},
Is(a){var s=this.z$
B.b.u(s,a)
if(s.length===0){s=$.aI()
s.ay=null
s.ch=$.al}},
Q0(a){var s,r,q,p,o,n,m,l,k=this.z$,j=A.ay(k,!0,t.wX)
for(p=j.length,o=0;o<p;++o){s=j[o]
try{if(B.b.B(k,s))s.$1(a)}catch(n){r=A.au(n)
q=A.aG(n)
m=A.bm("while executing callbacks for FrameTiming")
l=$.f7()
if(l!=null)l.$1(new A.bz(r,q,"Flutter framework",m,null,!1))}}},
qC(a){this.Q$=a
switch(a.a){case 0:case 1:this.DV(!0)
break
case 2:case 3:this.DV(!1)
break}},
BW(){if(this.ax$)return
this.ax$=!0
A.ci(B.u,this.gUM())},
UN(){this.ax$=!1
if(this.Zp())this.BW()},
Zp(){var s,r,q,p,o,n,m=this,l="No element",k=m.at$,j=k.c===0
if(j||m.b>0)return!1
if(j)A.a0(A.ad(l))
s=k.oB(0)
j=s.b
if(m.as$.$2$priority$scheduler(j,m)){try{if(k.c===0)A.a0(A.ad(l));++k.d
k.oB(0)
p=k.c-1
o=k.oB(p)
k.b[p]=null
k.c=p
if(p>0)k.OE(o,0)
s.a2F()}catch(n){r=A.au(n)
q=A.aG(n)
j=A.bm("during a task callback")
A.dI(new A.bz(r,q,"scheduler library",j,null,!1))}return k.c!==0}return!1},
of(a,b){var s,r=this
r.hl()
s=++r.ay$
r.ch$.l(0,s,new A.ph(a))
return r.ay$},
rX(a){return this.of(a,!1)},
gGn(){var s=this
if(s.db$==null){if(s.dy$===B.cD)s.hl()
s.db$=new A.bh(new A.as($.al,t.U),t._)
s.cy$.push(new A.a0M(s))}return s.db$.a},
gGM(){return this.fr$},
DV(a){if(this.fr$===a)return
this.fr$=a
if(a)this.hl()},
Go(){var s=$.aI()
if(s.w==null){s.w=this.gR2()
s.x=$.al}if(s.y==null){s.y=this.gRq()
s.z=$.al}},
wR(){switch(this.dy$.a){case 0:case 4:this.hl()
return
case 1:case 2:case 3:return}},
hl(){var s,r=this
if(!r.dx$)s=!(A.df.prototype.gGM.call(r)&&r.cq$)
else s=!0
if(s)return
r.Go()
$.aI().hl()
r.dx$=!0},
JJ(){if(this.dx$)return
this.Go()
$.aI().hl()
this.dx$=!0},
rY(){var s,r,q=this
if(q.fx$||q.dy$!==B.cD)return
q.fx$=!0
s=new A.II(null,0,A.a([],t.vS))
s.ol(0,"Warm-up frame")
r=q.dx$
A.ci(B.u,new A.a0O(q))
A.ci(B.u,new A.a0P(q,r))
q.a06(new A.a0Q(q,s))},
a1n(){var s=this
s.go$=s.AM(s.id$)
s.fy$=null},
AM(a){var s=this.fy$,r=s==null?B.u:new A.aY(a.a-s.a)
return A.c1(B.d.bb(r.a/$.ajg)+this.go$.a,0,0)},
R3(a){if(this.fx$){this.k4$=!0
return}this.GP(a)},
Rr(){var s=this
if(s.k4$){s.k4$=!1
s.cy$.push(new A.a0L(s))
return}s.GR()},
GP(a){var s,r,q=this,p=q.ok$,o=p==null
if(!o)p.ol(0,"Frame")
if(q.fy$==null)q.fy$=a
r=a==null
q.k1$=q.AM(r?q.id$:a)
if(!r)q.id$=a
q.dx$=!1
try{if(!o)p.ol(0,"Animate")
q.dy$=B.T5
s=q.ch$
q.ch$=A.A(t.S,t.b1)
J.mJ(s,new A.a0N(q))
q.CW$.T(0)}finally{q.dy$=B.T6}},
a1l(a){var s=this,r=s.p1$,q=r==null
if(!q&&r!==a)return null
if(r===a)++s.p2$
else if(q){s.p1$=a
s.p2$=1}return new A.Zh(s.gPM())},
PN(){if(--this.p2$===0){this.p1$=null
$.aI()}},
GR(){var s,r,q,p,o,n,m,l=this,k=l.ok$,j=k==null
if(!j)k.qy(0)
try{l.dy$=B.AK
for(p=l.cx$,o=p.length,n=0;n<p.length;p.length===o||(0,A.P)(p),++n){s=p[n]
m=l.k1$
m.toString
l.CJ(s,m)}l.dy$=B.T7
p=l.cy$
r=A.ay(p,!0,t.qP)
B.b.T(p)
for(p=r,o=p.length,n=0;n<p.length;p.length===o||(0,A.P)(p),++n){q=p[n]
m=l.k1$
m.toString
l.CJ(q,m)}}finally{l.dy$=B.cD
if(!j)k.qy(0)
l.k1$=null}},
CK(a,b,c){var s,r,q,p
try{a.$1(b)}catch(q){s=A.au(q)
r=A.aG(q)
p=A.bm("during a scheduler callback")
A.dI(new A.bz(s,r,"scheduler library",p,null,!1))}},
CJ(a,b){return this.CK(a,b,null)}}
A.a0M.prototype={
$1(a){var s=this.a
s.db$.fU(0)
s.db$=null},
$S:2}
A.a0O.prototype={
$0(){this.a.GP(null)},
$S:0}
A.a0P.prototype={
$0(){var s=this.a
s.GR()
s.a1n()
s.fx$=!1
if(this.b)s.hl()},
$S:0}
A.a0Q.prototype={
$0(){var s=0,r=A.ab(t.H),q=this
var $async$$0=A.ac(function(a,b){if(a===1)return A.a8(b,r)
while(true)switch(s){case 0:s=2
return A.at(q.a.gGn(),$async$$0)
case 2:q.b.qy(0)
return A.a9(null,r)}})
return A.aa($async$$0,r)},
$S:55}
A.a0L.prototype={
$1(a){var s=this.a
s.dx$=!1
s.hl()},
$S:2}
A.a0N.prototype={
$2(a,b){var s,r,q=this.a
if(!q.CW$.B(0,a)){s=b.a
r=q.k1$
r.toString
q.CK(s,r,b.b)}},
$S:221}
A.oO.prototype={
sxP(a,b){var s=this
if(b===s.b)return
s.b=b
if(b)s.yO()
else if(s.a!=null&&s.e==null)s.e=$.bF.of(s.gvB(),!1)},
ga_M(){if(this.a==null)return!1
if(this.b)return!1
var s=$.bF
s.toString
if(A.df.prototype.gGM.call(s)&&s.cq$)return!0
if($.bF.dy$!==B.cD)return!0
return!1},
lK(a){var s,r,q=this
q.a=new A.mb(new A.bh(new A.as($.al,t.U),t._))
if(!q.b)s=q.e==null
else s=!1
if(s)q.e=$.bF.of(q.gvB(),!1)
s=$.bF
r=s.dy$.a
if(r>0&&r<4){s=s.k1$
s.toString
q.c=s}s=q.a
s.toString
return s},
lL(a,b){var s=this,r=s.a
if(r==null)return
s.c=s.a=null
s.yO()
if(b)r.B5(s)
else r.Eq()},
hq(a){return this.lL(a,!1)},
VD(a){var s,r=this
r.e=null
s=r.c
if(s==null)s=r.c=a
r.d.$1(new A.aY(a.a-s.a))
if(!r.b&&r.a!=null&&r.e==null)r.e=$.bF.of(r.gvB(),!0)},
yO(){var s,r=this.e
if(r!=null){s=$.bF
s.ch$.u(0,r)
s.CW$.E(0,r)
this.e=null}},
m(){var s=this,r=s.a
if(r!=null){s.a=null
s.yO()
r.B5(s)}},
a1F(a,b){var s=""+"Ticker()"
return s.charCodeAt(0)==0?s:s},
i(a){return this.a1F(a,!1)}}
A.mb.prototype={
Eq(){this.c=!0
this.a.fU(0)
var s=this.b
if(s!=null)s.fU(0)},
B5(a){var s
this.c=!1
s=this.b
if(s!=null)s.jg(new A.vG(a))},
J5(a){var s,r,q=this,p=new A.a4O(a)
if(q.b==null){s=q.b=new A.bh(new A.as($.al,t.U),t._)
r=q.c
if(r!=null)if(r)s.fU(0)
else s.jg(B.YH)}q.b.a.eU(p,p,t.H)},
kE(a,b){return this.a.a.kE(a,b)},
ig(a){return this.kE(a,null)},
eU(a,b,c){return this.a.a.eU(a,b,c)},
bl(a,b){return this.eU(a,null,b)},
hX(a){return this.a.a.hX(a)},
i(a){var s=A.bB(this),r=this.c
if(r==null)r="active"
else r=r?"complete":"canceled"
return"<optimized out>#"+s+"("+r+")"},
$iag:1}
A.a4O.prototype={
$1(a){this.a.$0()},
$S:18}
A.vG.prototype={
i(a){var s=this.a
if(s!=null)return"This ticker was canceled: "+s.i(0)
return'The ticker was canceled before the "orCancel" property was first used.'},
$icS:1}
A.a1h.prototype={}
A.v_.prototype={
i(a){return"SemanticsTag("+this.a+")"}}
A.cb.prototype={
U(a,b){var s,r,q,p,o,n,m,l=this.a,k=l.length
if(k===0)return b
s=b.a
if(s.length===0)return this
r=A.ay(this.b,!0,t.lS)
q=b.b
p=q.length
if(p!==0)for(o=0;o<q.length;q.length===p||(0,A.P)(q),++o){n=q[o]
m=n.a
r.push(n.FK(new A.eq(m.a+k,m.b+k)))}return new A.cb(l+s,r)},
k(a,b){if(b==null)return!1
return J.S(b)===A.z(this)&&b instanceof A.cb&&b.a===this.a&&A.cC(b.b,this.b)},
gt(a){return A.U(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"AttributedString('"+this.a+"', attributes: "+A.h(this.b)+")"}}
A.HR.prototype={
bQ(){return"SemanticsData"},
k(a,b){var s=this
if(b==null)return!1
return b instanceof A.HR&&b.a===s.a&&b.b===s.b&&b.c.k(0,s.c)&&b.d.k(0,s.d)&&b.e.k(0,s.e)&&b.f.k(0,s.f)&&b.r.k(0,s.r)&&b.w===s.w&&b.x==s.x&&b.cx.k(0,s.cx)&&A.aeB(b.cy,s.cy)&&b.Q==s.Q&&b.as==s.as&&b.at==s.at&&b.ax==s.ax&&J.f(b.db,s.db)&&b.dx===s.dx&&b.dy===s.dy&&A.aqR(b.fr,s.fr)},
gt(a){var s=this,r=A.cV(s.fr)
return A.U(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.cx,s.cy,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,A.U(s.CW,s.db,s.dx,s.dy,r,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a))}}
A.NG.prototype={}
A.HT.prototype={
bQ(){return"SemanticsProperties"}}
A.bL.prototype={
sbm(a,b){var s
if(!A.apl(this.r,b)){s=A.ad0(b)
this.r=s?null:b
this.hv()}},
saI(a,b){if(!this.w.k(0,b)){this.w=b
this.hv()}},
sHv(a){if(this.as===a)return
this.as=a
this.hv()},
Uv(a){var s,r,q,p,o,n,m,l=this,k=l.ax
if(k!=null)for(s=k.length,r=0;r<s;++r)k[r].ch=!0
for(k=a.length,r=0;r<k;++r)a[r].ch=!1
k=l.ax
if(k!=null)for(s=k.length,q=t.aa,p=!1,r=0;r<k.length;k.length===s||(0,A.P)(k),++r){o=k[r]
if(o.ch){n=J.dh(o)
if(q.a(A.F.prototype.gaS.call(n,o))===l){o.c=null
if(l.b!=null)o.ah(0)}p=!0}}else p=!1
for(k=a.length,s=t.aa,r=0;r<a.length;a.length===k||(0,A.P)(a),++r){o=a[r]
q=J.dh(o)
if(s.a(A.F.prototype.gaS.call(q,o))!==l){if(s.a(A.F.prototype.gaS.call(q,o))!=null){q=s.a(A.F.prototype.gaS.call(q,o))
if(q!=null){o.c=null
if(q.b!=null)o.ah(0)}}o.c=l
q=l.b
if(q!=null)o.an(q)
q=o.a
n=l.a
if(q<=n){o.a=n+1
o.iM()}p=!0}}if(!p&&l.ax!=null)for(k=l.ax,s=k.length,m=0;m<s;++m)if(k[m].e!==a[m].e){p=!0
break}l.ax=a
if(p)l.hv()},
ga_3(){var s=this.ax
s=s==null?null:s.length!==0
return s===!0},
vQ(a){var s,r,q,p=this.ax
if(p!=null)for(s=p.length,r=0;r<p.length;p.length===s||(0,A.P)(p),++r){q=p[r]
if(!a.$1(q)||!q.vQ(a))return!1}return!0},
iM(){var s=this.ax
if(s!=null)B.b.Y(s,this.gIl())},
an(a){var s,r,q,p=this
p.td(a)
for(s=a.c;s.S(0,p.e);)p.e=$.a1y=($.a1y+1)%65535
s.l(0,p.e,p)
a.d.u(0,p)
if(p.CW){p.CW=!1
p.hv()}s=p.ax
if(s!=null)for(r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].an(a)},
ah(a){var s,r,q,p,o,n=this,m=t.nU
m.a(A.F.prototype.gbq.call(n)).c.u(0,n.e)
m.a(A.F.prototype.gbq.call(n)).d.E(0,n)
n.dw(0)
m=n.ax
if(m!=null)for(s=m.length,r=t.aa,q=0;q<m.length;m.length===s||(0,A.P)(m),++q){p=m[q]
o=J.dh(p)
if(r.a(A.F.prototype.gaS.call(o,p))===n)o.ah(p)}n.hv()},
hv(){var s=this
if(s.CW)return
s.CW=!0
if(s.b!=null)t.nU.a(A.F.prototype.gbq.call(s)).b.E(0,s)},
iR(a,b,c){var s,r=this
if(c==null)c=$.ac2()
if(r.fr.k(0,c.p4))if(r.id.k(0,c.ry))if(r.k2===c.x2)if(r.k3===c.xr)if(r.fx.k(0,c.R8))if(r.fy.k(0,c.RG))if(r.go.k(0,c.rx))if(r.k1===c.to)if(r.dy===c.aa)if(r.ok==c.y1)if(r.p1==c.id)if(r.RG==c.bB)if(r.rx==c.bk)if(r.ry==c.ba)if(r.db===c.f)if(r.Q==c.k1)s=r.at!==c.p2
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
if(s)r.hv()
r.fr=c.p4
r.fx=c.R8
r.fy=c.RG
r.go=c.rx
r.id=c.ry
r.k1=c.to
r.k4=c.x1
r.k2=c.x2
r.k3=c.xr
r.dy=c.aa
r.ok=c.y1
r.p1=c.id
r.cx=A.nI(c.e,t.nS,t.BT)
r.cy=A.nI(c.p3,t.zN,t.M)
r.db=c.f
r.p2=c.y2
r.RG=c.bB
r.rx=c.bk
r.ry=c.ba
r.at=c.p2
r.p4=c.k2
r.R8=c.k3
r.Q=c.k1
r.to=c.k4
r.x1=c.ok
r.x2=c.p1
r.Uv(b==null?B.hT:b)},
a1T(a,b){return this.iR(a,null,b)},
Jy(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7={}
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
a7.y=s==null?null:A.jC(s,t.xJ)
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
q=A.b7(t.S)
for(s=a6.cy,s=A.ij(s,s.r);s.q();)q.E(0,A.afG(s.d))
a6.k4!=null
if(a6.at)a6.vQ(new A.a1z(a7,a6,q))
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
a5=A.ay(q,!0,q.$ti.c)
B.b.ho(a5)
return new A.HR(s,p,o,n,m,l,k,j,i,d,c,b,a,a0,a1,a2,a3,a4,h,e,g,r,f,a5)},
Oq(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.Jy()
if(!a.ga_3()||a.at){s=$.akJ()
r=s}else{q=a.ax.length
p=a.P3()
s=new Int32Array(q)
for(o=0;o<q;++o)s[o]=p[o].e
r=new Int32Array(q)
for(o=q-1,n=a.ax;o>=0;--o)r[o]=n[q-o-1].e}n=a0.fr
m=n.length
if(m!==0){l=new Int32Array(m)
for(o=0;o<n.length;++o){m=n[o]
l[o]=m
a2.E(0,m)}}else l=null
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
if(c==null)c=$.akL()
b=l==null?$.akK():l
a1.a.push(new A.HS(n,a0.a,a0.b,-1,-1,-1,0,g,f,e,d,a0.cx,m.a,m.b,h.a,h.b,k.a,k.b,j.a,j.b,i.a,i.b,a0.w,a0.x,A.aeC(c),s,r,b,a0.dy))
a.CW=!1},
P3(){var s,r,q,p,o,n,m,l,k,j=this,i=j.ok,h=t.aa,g=h.a(A.F.prototype.gaS.call(j,j))
while(!0){s=i==null
if(!(s&&g!=null))break
i=g.ok
g=h.a(A.F.prototype.gaS.call(g,g))}r=j.ax
if(!s){r.toString
r=A.asV(r,i)}h=t.Dr
q=A.a([],h)
p=A.a([],h)
for(o=null,n=0;n<r.length;++n){m=r[n]
l=m.p1
o=n>0?r[n-1].p1:null
if(n!==0)if(J.S(l)===J.S(o)){if(l!=null)o.toString
k=!0}else k=!1
else k=!0
if(!k&&p.length!==0){if(o!=null){if(!!p.immutable$list)A.a0(A.V("sort"))
h=p.length-1
if(h-0<=32)A.Ic(p,0,h,J.aeb())
else A.Ib(p,0,h,J.aeb())}B.b.H(q,p)
B.b.T(p)}p.push(new A.iT(m,l,n))}if(o!=null)B.b.ho(p)
B.b.H(q,p)
h=t.wg
return A.ay(new A.aE(q,new A.a1x(),h),!0,h.h("bj.E"))},
JT(a){if(this.b==null)return
B.m1.lz(0,a.IO(this.e))},
bQ(){return"SemanticsNode#"+this.e},
a1B(a,b,c){return new A.NG(a,this,b,!0,!0,null,c)},
IM(a){return this.a1B(B.EQ,null,a)}}
A.a1z.prototype={
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
if(s!=null){r=q.y;(r==null?q.y=A.b7(t.xJ):r).H(0,s)}for(s=this.b.cy,s=A.ij(s,s.r),r=this.c;s.q();)r.E(0,A.afG(s.d))
a.k4!=null
s=q.c
r=q.x
q.c=A.aab(a.fr,a.ok,s,r)
r=q.r
s=q.x
q.r=A.aab(a.id,a.ok,r,s)
q.cy=Math.max(q.cy,a.k3+a.k2)
return!0},
$S:60}
A.a1x.prototype={
$1(a){return a.a},
$S:223}
A.iL.prototype={
b_(a,b){return B.d.b_(this.b,b.b)},
$ibx:1}
A.fO.prototype={
b_(a,b){return B.d.b_(this.a,b.a)},
Ki(){var s,r,q,p,o,n,m,l,k,j=A.a([],t.iV)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
o=p.w
j.push(new A.iL(!0,A.mD(p,new A.u(o.a- -0.1,o.b- -0.1)).a,p))
j.push(new A.iL(!1,A.mD(p,new A.u(o.c+-0.1,o.d+-0.1)).a,p))}B.b.ho(j)
n=A.a([],t.dK)
for(s=j.length,r=this.b,o=t.T,m=null,l=0,q=0;q<j.length;j.length===s||(0,A.P)(j),++q){k=j[q]
if(k.a){++l
if(m==null)m=new A.fO(k.b,r,A.a([],o))
m.c.push(k.c)}else --l
if(l===0){m.toString
n.push(m)
m=null}}B.b.ho(n)
if(r===B.P){s=t.FF
n=A.ay(new A.cx(n,s),!0,s.h("bj.E"))}s=A.ah(n).h("i8<1,bL>")
return A.ay(new A.i8(n,new A.a95(),s),!0,s.h("q.E"))},
Kh(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this.c,a4=a3.length
if(a4<=1)return a3
s=t.S
r=A.A(s,t.ju)
q=A.A(s,s)
for(p=this.b,o=p===B.P,p=p===B.t,n=a4,m=0;m<n;g===a4||(0,A.P)(a3),++m,n=g){l=a3[m]
r.l(0,l.e,l)
n=l.w
k=n.a
j=n.b
i=A.mD(l,new A.u(k+(n.c-k)/2,j+(n.d-j)/2))
for(n=a3.length,k=i.a,j=i.b,h=0;g=a3.length,h<g;a3.length===n||(0,A.P)(a3),++h){f=a3[h]
if((l==null?f==null:l===f)||q.j(0,f.e)===l.e)continue
g=f.w
e=g.a
d=g.b
c=A.mD(f,new A.u(e+(g.c-e)/2,d+(g.d-d)/2))
b=Math.atan2(c.b-j,c.a-k)
a=p&&-0.7853981633974483<b&&b<2.356194490192345
if(o)a0=b<-2.356194490192345||b>2.356194490192345
else a0=!1
if(a||a0)q.l(0,l.e,f.e)}}a1=A.a([],t.t)
a2=A.a(a3.slice(0),A.ah(a3))
B.b.cX(a2,new A.a91())
new A.aE(a2,new A.a92(),A.ah(a2).h("aE<1,l>")).Y(0,new A.a94(A.b7(s),q,a1))
a3=t.sC
a3=A.ay(new A.aE(a1,new A.a93(r),a3),!0,a3.h("bj.E"))
a4=A.ah(a3).h("cx<1>")
return A.ay(new A.cx(a3,a4),!0,a4.h("bj.E"))}}
A.a95.prototype={
$1(a){return a.Kh()},
$S:85}
A.a91.prototype={
$2(a,b){var s,r,q=a.w,p=A.mD(a,new A.u(q.a,q.b))
q=b.w
s=A.mD(b,new A.u(q.a,q.b))
r=B.d.b_(p.b,s.b)
if(r!==0)return-r
return-B.d.b_(p.a,s.a)},
$S:58}
A.a94.prototype={
$1(a){var s=this,r=s.a
if(r.B(0,a))return
r.E(0,a)
r=s.b
if(r.S(0,a)){r=r.j(0,a)
r.toString
s.$1(r)}s.c.push(a)},
$S:57}
A.a92.prototype={
$1(a){return a.e},
$S:226}
A.a93.prototype={
$1(a){var s=this.a.j(0,a)
s.toString
return s},
$S:227}
A.aa7.prototype={
$1(a){return a.Ki()},
$S:85}
A.iT.prototype={
b_(a,b){var s,r=this.b
if(r==null||b.b==null)return this.c-b.c
r.toString
s=b.b
s.toString
return r.b_(0,s)},
$ibx:1}
A.uZ.prototype={
JU(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.b
if(e.a===0)return
s=A.b7(t.S)
r=A.a([],t.T)
for(q=t.aa,p=A.n(e).h("aJ<1>"),o=p.h("q.E"),n=f.d;e.a!==0;){m=A.ay(new A.aJ(e,new A.a1C(f),p),!0,o)
e.T(0)
n.T(0)
l=new A.a1D()
if(!!m.immutable$list)A.a0(A.V("sort"))
k=m.length-1
if(k-0<=32)A.Ic(m,0,k,l)
else A.Ib(m,0,k,l)
B.b.H(r,m)
for(l=m.length,j=0;j<m.length;m.length===l||(0,A.P)(m),++j){i=m[j]
if(i.at||i.as){k=J.dh(i)
if(q.a(A.F.prototype.gaS.call(k,i))!=null){h=q.a(A.F.prototype.gaS.call(k,i))
h=h.at||h.as}else h=!1
if(h){q.a(A.F.prototype.gaS.call(k,i)).hv()
i.CW=!1}}}}B.b.cX(r,new A.a1E())
$.a1i.toString
g=new A.a1G(A.a([],t.fr))
for(q=r.length,j=0;j<r.length;r.length===q||(0,A.P)(r),++j){i=r[j]
if(i.CW&&i.b!=null)i.Oq(g,s)}e.T(0)
for(e=A.iQ(s,s.r),q=A.n(e).c;e.q();){p=e.d
$.afD.j(0,p==null?q.a(p):p).toString}f.a.$1(new A.HV(g.a))
f.aw()},
QN(a,b){var s,r={},q=r.a=this.c.j(0,a)
if(q!=null)s=(q.at||q.as)&&!q.cx.S(0,b)
else s=!1
if(s)q.vQ(new A.a1B(r,b))
s=r.a
if(s==null||!s.cx.S(0,b))return null
return r.a.cx.j(0,b)},
a0J(a,b,c){var s=this.QN(a,b)
if(s!=null){s.$1(c)
return}if(b===B.Tt&&this.c.j(0,a).f!=null)this.c.j(0,a).f.$0()},
i(a){return"<optimized out>#"+A.bB(this)}}
A.a1C.prototype={
$1(a){return!this.a.d.B(0,a)},
$S:60}
A.a1D.prototype={
$2(a,b){return a.a-b.a},
$S:58}
A.a1E.prototype={
$2(a,b){return a.a-b.a},
$S:58}
A.a1B.prototype={
$1(a){if(a.cx.S(0,this.b)){this.a.a=a
return!1}return!0},
$S:60}
A.a1j.prototype={
j_(a,b){var s=this
s.e.l(0,a,b)
s.f=s.f|a.a
s.d=!0},
dU(a,b){this.j_(a,new A.a1k(b))},
siJ(a){a.toString
this.dU(B.dB,a)},
sjI(a){a.toString
this.dU(B.AP,a)},
sr8(a){this.dU(B.dE,a)},
sr6(a){this.dU(B.Tu,a)},
sr9(a){this.dU(B.dF,a)},
sra(a){this.dU(B.dC,a)},
sr7(a){this.dU(B.dD,a)},
sy_(a){this.dU(B.AQ,a)},
sxV(a){this.dU(B.AO,a)},
sxT(a,b){this.dU(B.Tw,b)},
sxU(a,b){this.dU(B.TA,b)},
sy8(a,b){this.dU(B.Tq,b)},
sy6(a){this.j_(B.Tx,new A.a1n(a))},
sy4(a){this.j_(B.To,new A.a1l(a))},
sy7(a){this.j_(B.Ty,new A.a1o(a))},
sy5(a){this.j_(B.Tp,new A.a1m(a))},
syb(a){this.j_(B.Tr,new A.a1p(a))},
syc(a){this.j_(B.Ts,new A.a1q(a))},
sxW(a){this.dU(B.Tv,a)},
sxX(a){this.dU(B.Tz,a)},
sJM(a){return},
sJN(a){if(a==this.k3)return
this.k3=a
this.d=!0},
sxH(a){return},
swo(a){return},
shB(a,b){if(b===this.x2)return
this.x2=b
this.d=!0},
Fb(a){var s=this.af;(s==null?this.af=A.b7(t.xJ):s).E(0,a)},
b4(a,b){var s=this,r=s.aa,q=a.a
if(b)s.aa=r|q
else s.aa=r&~q
s.d=!0},
Hs(a){var s,r=this
if(a==null||!a.d||!r.d)return!0
if((r.f&a.f)!==0)return!1
if((r.aa&a.aa)!==0)return!1
if(r.R8.a.length!==0)s=a.R8.a.length!==0
else s=!1
if(s)return!1
return!0},
j8(a){var s,r,q=this
if(!a.d)return
q.e.H(0,a.e)
q.p3.H(0,a.p3)
q.f=q.f|a.f
q.aa=q.aa|a.aa
q.y2=a.y2
if(q.bB==null)q.bB=a.bB
if(q.bk==null)q.bk=a.bk
if(q.ba==null)q.ba=a.ba
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
q.p4=A.aab(a.p4,a.y1,r,s)
s=q.R8
if(s.a==="")q.R8=a.R8
s=q.RG
if(s.a==="")q.RG=a.RG
s=q.rx
if(s.a==="")q.rx=a.rx
s=q.ry
r=q.y1
q.ry=A.aab(a.ry,a.y1,s,r)
if(q.to==="")q.to=a.to
q.xr=Math.max(q.xr,a.xr+a.x2)
q.d=q.d||a.d},
XN(){var s=this,r=A.oq()
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
r.aa=s.aa
r.af=s.af
r.y2=s.y2
r.bB=s.bB
r.bk=s.bk
r.ba=s.ba
r.f=s.f
r.k1=s.k1
r.k3=s.k3
r.k2=s.k2
r.k4=s.k4
r.ok=s.ok
r.p1=s.p1
r.e.H(0,s.e)
r.p3.H(0,s.p3)
return r}}
A.a1k.prototype={
$1(a){this.a.$0()},
$S:8}
A.a1n.prototype={
$1(a){a.toString
this.a.$1(A.pS(a))},
$S:8}
A.a1l.prototype={
$1(a){a.toString
this.a.$1(A.pS(a))},
$S:8}
A.a1o.prototype={
$1(a){a.toString
this.a.$1(A.pS(a))},
$S:8}
A.a1m.prototype={
$1(a){a.toString
this.a.$1(A.pS(a))},
$S:8}
A.a1p.prototype={
$1(a){var s,r,q
a.toString
s=J.ac6(t.G.a(a),t.N,t.S)
r=s.j(0,"base")
r.toString
q=s.j(0,"extent")
q.toString
this.a.$1(A.a4I(B.B,r,q,!1))},
$S:8}
A.a1q.prototype={
$1(a){a.toString
this.a.$1(A.cj(a))},
$S:8}
A.Bw.prototype={
D(){return"DebugSemanticsDumpOrder."+this.b}}
A.or.prototype={
b_(a,b){var s=this.YE(b)
return s},
$ibx:1}
A.tR.prototype={
YE(a){var s=a.b===this.b
if(s)return 0
return B.f.b_(this.b,a.b)}}
A.NF.prototype={}
A.NH.prototype={}
A.NI.prototype={}
A.a1s.prototype={
IO(a){var s=A.aS(["type",this.a,"data",this.o7()],t.N,t.z)
if(a!=null)s.l(0,"nodeId",a)
return s},
a1E(){return this.IO(null)},
i(a){var s,r,q,p=A.a([],t.s),o=this.o7(),n=J.afc(o.gbp(o))
B.b.ho(n)
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.P)(n),++r){q=n[r]
p.push(A.h(q)+": "+A.h(o.j(0,q)))}return"SemanticsEvent("+B.b.bg(p,", ")+")"}}
A.a4Q.prototype={
o7(){return A.aS(["message",this.b],t.N,t.z)}}
A.XT.prototype={
o7(){return B.yV}}
A.a4b.prototype={
o7(){return B.yV}}
A.yY.prototype={
jF(a,b){return this.a04(a,!0)},
a04(a,b){var s=0,r=A.ab(t.N),q,p=this,o
var $async$jF=A.ac(function(c,d){if(c===1)return A.a8(d,r)
while(true)switch(s){case 0:s=3
return A.at(p.cC(0,a),$async$jF)
case 3:o=d
if(o.byteLength<51200){q=B.a2.dB(0,A.cT(o.buffer,0,null))
s=1
break}q=A.Qo(A.auh(),o,'UTF8 decode for "'+a+'"',t.B6,t.N)
s=1
break
case 1:return A.a9(q,r)}})
return A.aa($async$jF,r)},
i(a){return"<optimized out>#"+A.bB(this)+"()"}}
A.Rw.prototype={
jF(a,b){return this.Ks(a,!0)},
a05(a,b,c){var s,r={},q=this.b
if(q.S(0,a)){r=q.j(0,a)
r.toString
return c.h("ag<0>").a(r)}r.a=r.b=null
this.jF(a,!1).bl(b,c).bl(new A.Rx(r,this,a,c),t.H)
s=r.a
if(s!=null)return s
s=new A.as($.al,c.h("as<0>"))
r.b=new A.bh(s,c.h("bh<0>"))
q.l(0,a,s)
return r.b.a}}
A.Rx.prototype={
$1(a){var s=this,r=new A.bk(a,s.d.h("bk<0>")),q=s.a
q.a=r
s.b.b.l(0,s.c,r)
q=q.b
if(q!=null)q.cI(0,a)},
$S(){return this.d.h("aD(0)")}}
A.Zq.prototype={
cC(a,b){var s,r=B.ca.dZ(A.asA(A.P6(B.hU,b,B.a2,!1)).e),q=$.fE.ab$
q===$&&A.b()
s=q.t0(0,"flutter/assets",A.jH(r.buffer,0,null)).bl(new A.Zr(b),t.B6)
return s},
qW(a){return this.a03(a)},
a03(a){var s=0,r=A.ab(t.gG),q,p=this,o
var $async$qW=A.ac(function(b,c){if(b===1)return A.a8(c,r)
while(true)switch(s){case 0:s=3
return A.at(p.cC(0,a),$async$qW)
case 3:o=c
q=A.acR(A.cT(o.buffer,0,null))
s=1
break
case 1:return A.a9(q,r)}})
return A.aa($async$qW,r)}}
A.Zr.prototype={
$1(a){if(a==null)throw A.d(A.acF(A.a([A.atj(this.a),A.bm("The asset does not exist or has empty data.")],t.F)))
return a},
$S:228}
A.Rg.prototype={}
A.os.prototype={
nn(){var s=$.QB()
s.a.T(0)
s.b.T(0)},
iB(a){return this.ZS(a)},
ZS(a){var s=0,r=A.ab(t.H),q,p=this
var $async$iB=A.ac(function(b,c){if(b===1)return A.a8(c,r)
while(true)switch(s){case 0:switch(A.cj(J.b9(t.a.a(a),"type"))){case"memoryPressure":p.nn()
break}s=1
break
case 1:return A.a9(q,r)}})
return A.aa($async$iB,r)},
Ol(){var s=A.b4("controller")
s.sbV(A.ar9(null,new A.a1J(s),null,!1,t.xe))
return J.amg(s.aA())},
a10(){if(this.Q$!=null)return
$.aI()
var s=A.ahk("AppLifecycleState.resumed")
if(s!=null)this.qC(s)},
uH(a){return this.RK(a)},
RK(a){var s=0,r=A.ab(t.dR),q,p=this,o
var $async$uH=A.ac(function(b,c){if(b===1)return A.a8(c,r)
while(true)switch(s){case 0:a.toString
o=A.ahk(a)
o.toString
p.qC(o)
q=null
s=1
break
case 1:return A.a9(q,r)}})
return A.aa($async$uH,r)},
uI(a){return this.RT(a)},
RT(a){var s=0,r=A.ab(t.H)
var $async$uI=A.ac(function(b,c){if(b===1)return A.a8(c,r)
while(true)switch(s){case 0:t.j.a(a.b)
return A.a9(null,r)}})
return A.aa($async$uI,r)},
$idf:1}
A.a1J.prototype={
$0(){var s=0,r=A.ab(t.H),q=this,p,o,n
var $async$$0=A.ac(function(a,b){if(a===1)return A.a8(b,r)
while(true)switch(s){case 0:o=A.b4("rawLicenses")
n=o
s=2
return A.at($.QB().jF("NOTICES",!1),$async$$0)
case 2:n.sbV(b)
p=q.a
n=J
s=3
return A.at(A.Qo(A.auo(),o.aA(),"parseLicenses",t.N,t.rh),$async$$0)
case 3:n.mJ(b,J.ame(p.aA()))
s=4
return A.at(J.ama(p.aA()),$async$$0)
case 4:return A.a9(null,r)}})
return A.aa($async$$0,r)},
$S:55}
A.a69.prototype={
t0(a,b,c){var s=new A.as($.al,t.sB)
$.aI().V4(b,c,A.ao7(new A.a6a(new A.bh(s,t.BB))))
return s},
zB(a,b){if(b==null){a=$.Qz().a.j(0,a)
if(a!=null)a.e=null}else $.Qz().K0(a,new A.a6b(b))}}
A.a6a.prototype={
$1(a){var s,r,q,p
try{this.a.cI(0,a)}catch(q){s=A.au(q)
r=A.aG(q)
p=A.bm("during a platform message response callback")
A.dI(new A.bz(s,r,"services library",p,null,!1))}},
$S:16}
A.a6b.prototype={
$2(a,b){return this.Jh(a,b)},
Jh(a,b){var s=0,r=A.ab(t.H),q=1,p,o=[],n=this,m,l,k,j,i,h
var $async$$2=A.ac(function(c,d){if(c===1){p=d
s=q}while(true)switch(s){case 0:i=null
q=3
s=6
return A.at(n.a.$1(a),$async$$2)
case 6:i=d
o.push(5)
s=4
break
case 3:q=2
h=p
m=A.au(h)
l=A.aG(h)
j=A.bm("during a platform message callback")
A.dI(new A.bz(m,l,"services library",j,null,!1))
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
b.$1(i)
s=o.pop()
break
case 5:return A.a9(null,r)
case 1:return A.a8(p,r)}})
return A.aa($async$$2,r)},
$S:232}
A.Ud.prototype={}
A.Tz.prototype={}
A.TI.prototype={}
A.BY.prototype={}
A.Uf.prototype={}
A.BW.prototype={}
A.TQ.prototype={}
A.T4.prototype={}
A.TR.prototype={}
A.C3.prototype={}
A.BU.prototype={}
A.C0.prototype={}
A.Cd.prototype={}
A.TE.prototype={}
A.TW.prototype={}
A.Td.prototype={}
A.Tr.prototype={}
A.SP.prototype={}
A.Th.prototype={}
A.C8.prototype={}
A.SR.prototype={}
A.U0.prototype={}
A.nG.prototype={}
A.jw.prototype={}
A.ls.prototype={}
A.jx.prototype={}
A.rW.prototype={}
A.Wk.prototype={
PH(a){var s,r,q,p,o,n,m,l,k,j
this.d=!0
s=!1
for(n=this.c,m=0;!1;++m){r=n[m]
try{q=r.$1(a)
s=s||q}catch(l){p=A.au(l)
o=A.aG(l)
k=A.bm("while processing a key handler")
j=$.f7()
if(j!=null)j.$1(new A.bz(p,o,"services library",k,null,!1))}}this.d=!1
return s},
GT(a){var s,r,q=this,p=a.a,o=a.b
if(a instanceof A.ls){q.a.l(0,p,o)
s=$.akx().j(0,o.a)
if(s!=null){r=q.b
if(r.B(0,s))r.u(0,s)
else r.E(0,s)}}else if(a instanceof A.jx)q.a.u(0,p)
return q.PH(a)}}
A.rU.prototype={
D(){return"KeyDataTransitMode."+this.b}}
A.rV.prototype={
i(a){return"KeyMessage("+A.h(this.a)+")"}}
A.Dz.prototype={
Zv(a){var s,r=this,q=r.d
switch((q==null?r.d=B.FT:q).a){case 0:return!1
case 1:if(a.c===0&&a.d===0)return!1
s=A.aoP(a)
if(a.f&&r.e.length===0){r.b.GT(s)
r.BL(A.a([s],t.DG),null)}else r.e.push(s)
return!1}},
BL(a,b){var s,r,q,p,o=this.a
if(o!=null){s=new A.rV(a,b)
try{o=o.$1(s)
return o}catch(p){r=A.au(p)
q=A.aG(p)
o=A.bm("while processing the key message handler")
A.dI(new A.bz(r,q,"services library",o,null,!1))}}return!1},
xd(a){var s=0,r=A.ab(t.a),q,p=this,o,n,m,l,k,j,i
var $async$xd=A.ac(function(b,c){if(b===1)return A.a8(c,r)
while(true)switch(s){case 0:if(p.d==null){p.d=B.FS
p.c.a.push(p.gPp())}o=A.aqq(t.a.a(a))
if(o instanceof A.hr){n=o.c
m=p.f
if(!n.K9()){m.E(0,n.gdt())
l=!1}else{m.u(0,n.gdt())
l=!0}}else if(o instanceof A.o5){n=p.f
m=o.c
if(n.B(0,m.gdt())){n.u(0,m.gdt())
l=!1}else l=!0}else l=!0
if(l){p.c.ZM(o)
for(n=p.e,m=n.length,k=p.b,j=!1,i=0;i<n.length;n.length===m||(0,A.P)(n),++i)j=k.GT(n[i])||j
j=p.BL(n,o)||j
B.b.T(n)}else j=!0
q=A.aS(["handled",j],t.N,t.z)
s=1
break
case 1:return A.a9(q,r)}})
return A.aa($async$xd,r)},
Pq(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.c,d=e.gdt(),c=e.gnz()
e=this.b.a
s=A.n(e).h("b_<1>")
r=A.jC(new A.b_(e,s),s.h("q.E"))
q=A.a([],t.DG)
p=e.j(0,d)
o=$.fE.id$
n=a.a
if(n==="")n=f
if(a instanceof A.hr)if(p==null){m=new A.ls(d,c,n,o,!1)
r.E(0,d)}else m=new A.rW(d,p,n,o,!1)
else if(p==null)m=f
else{m=new A.jx(d,p,f,o,!1)
r.u(0,d)}for(s=this.c.d,l=A.n(s).h("b_<1>"),k=l.h("q.E"),j=r.jm(A.jC(new A.b_(s,l),k)),j=j.ga9(j),i=this.e;j.q();){h=j.gG(j)
if(h.k(0,d))q.push(new A.jx(h,c,f,o,!0))
else{g=e.j(0,h)
g.toString
i.push(new A.jx(h,g,f,o,!0))}}for(e=A.jC(new A.b_(s,l),k).jm(r),e=e.ga9(e);e.q();){l=e.gG(e)
k=s.j(0,l)
k.toString
i.push(new A.ls(l,k,f,o,!0))}if(m!=null)i.push(m)
B.b.H(i,q)}}
A.Lp.prototype={}
A.XE.prototype={}
A.e.prototype={
gt(a){return B.f.gt(this.a)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.S(b)!==A.z(this))return!1
return b instanceof A.e&&b.a===this.a}}
A.i.prototype={
gt(a){return B.f.gt(this.a)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.S(b)!==A.z(this))return!1
return b instanceof A.i&&b.a===this.a}}
A.Lq.prototype={}
A.hg.prototype={
i(a){return"MethodCall("+this.a+", "+A.h(this.b)+")"}}
A.u8.prototype={
i(a){var s=this
return"PlatformException("+s.a+", "+A.h(s.b)+", "+A.h(s.c)+", "+A.h(s.d)+")"},
$icS:1}
A.tv.prototype={
i(a){return"MissingPluginException("+A.h(this.a)+")"},
$icS:1}
A.a3T.prototype={
ej(a){if(a==null)return null
return B.cL.dZ(A.cT(a.buffer,a.byteOffset,a.byteLength))},
bL(a){if(a==null)return null
return A.jH(B.ca.dZ(a).buffer,0,null)}}
A.Xc.prototype={
bL(a){if(a==null)return null
return B.ha.bL(B.bl.wP(a))},
ej(a){var s
if(a==null)return a
s=B.ha.ej(a)
s.toString
return B.bl.dB(0,s)}}
A.Xe.prototype={
fg(a){var s=B.bH.bL(A.aS(["method",a.a,"args",a.b],t.N,t.X))
s.toString
return s},
fe(a){var s,r,q,p=null,o=B.bH.ej(a)
if(!t.G.b(o))throw A.d(A.bu("Expected method call Map, got "+A.h(o),p,p))
s=J.aQ(o)
r=s.j(o,"method")
q=s.j(o,"args")
if(typeof r=="string")return new A.hg(r,q)
throw A.d(A.bu("Invalid method call: "+A.h(o),p,p))},
FX(a){var s,r,q,p=null,o=B.bH.ej(a)
if(!t.j.b(o))throw A.d(A.bu("Expected envelope List, got "+A.h(o),p,p))
s=J.aQ(o)
if(s.gp(o)===1)return s.j(o,0)
if(s.gp(o)===3)if(typeof s.j(o,0)=="string")r=s.j(o,1)==null||typeof s.j(o,1)=="string"
else r=!1
else r=!1
if(r){r=A.cj(s.j(o,0))
q=A.ck(s.j(o,1))
throw A.d(A.ad9(r,s.j(o,2),q,p))}if(s.gp(o)===4)if(typeof s.j(o,0)=="string")if(s.j(o,1)==null||typeof s.j(o,1)=="string")r=s.j(o,3)==null||typeof s.j(o,3)=="string"
else r=!1
else r=!1
else r=!1
if(r){r=A.cj(s.j(o,0))
q=A.ck(s.j(o,1))
throw A.d(A.ad9(r,s.j(o,2),q,A.ck(s.j(o,3))))}throw A.d(A.bu("Invalid envelope: "+A.h(o),p,p))},
n9(a){var s=B.bH.bL([a])
s.toString
return s},
jp(a,b,c){var s=B.bH.bL([a,c,b])
s.toString
return s},
Gk(a,b){return this.jp(a,null,b)}}
A.a3J.prototype={
bL(a){var s
if(a==null)return null
s=A.a5o(64)
this.cD(0,s,a)
return s.im()},
ej(a){var s,r
if(a==null)return null
s=new A.ui(a)
r=this.eS(0,s)
if(s.b<a.byteLength)throw A.d(B.aA)
return r},
cD(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i=null
if(c==null)b.d_(0,0)
else if(A.ko(c))b.d_(0,c?1:2)
else if(typeof c=="number"){b.d_(0,6)
b.fH(8)
s=$.cD()
b.d.setFloat64(0,c,B.a1===s)
b.Od(b.e)}else if(A.j_(c)){s=-2147483648<=c&&c<=2147483647
r=b.d
if(s){b.d_(0,3)
s=$.cD()
r.setInt32(0,c,B.a1===s)
b.lV(b.e,0,4)}else{b.d_(0,4)
s=$.cD()
B.fd.zz(r,0,c,s)}}else if(typeof c=="string"){b.d_(0,7)
s=c.length
q=new Uint8Array(s)
n=0
while(!0){if(!(n<s)){p=i
o=0
break}m=B.c.ae(c,n)
if(m<=127)q[n]=m
else{p=B.ca.dZ(B.c.dv(c,n))
o=n
break}++n}if(p!=null){j.dR(b,o+p.length)
l=q.BYTES_PER_ELEMENT
k=A.cW(0,o,B.f.i2(q.byteLength,l),i,i)
b.j0(A.cT(q.buffer,q.byteOffset+0*l,(k-0)*l))
b.j0(p)}else{j.dR(b,s)
b.j0(q)}}else if(t.uo.b(c)){b.d_(0,8)
j.dR(b,c.length)
b.j0(c)}else if(t.fO.b(c)){b.d_(0,9)
s=c.length
j.dR(b,s)
b.fH(4)
b.j0(A.cT(c.buffer,c.byteOffset,4*s))}else if(t.D4.b(c)){b.d_(0,14)
s=c.length
j.dR(b,s)
b.fH(4)
b.j0(A.cT(c.buffer,c.byteOffset,4*s))}else if(t.cE.b(c)){b.d_(0,11)
s=c.length
j.dR(b,s)
b.fH(8)
b.j0(A.cT(c.buffer,c.byteOffset,8*s))}else if(t.j.b(c)){b.d_(0,12)
s=J.aQ(c)
j.dR(b,s.gp(c))
for(s=s.ga9(c);s.q();)j.cD(0,b,s.gG(s))}else if(t.G.b(c)){b.d_(0,13)
s=J.aQ(c)
j.dR(b,s.gp(c))
s.Y(c,new A.a3K(j,b))}else throw A.d(A.i0(c,i,i))},
eS(a,b){if(b.b>=b.a.byteLength)throw A.d(B.aA)
return this.hS(b.jS(0),b)},
hS(a,b){var s,r,q,p,o,n,m,l,k=this
switch(a){case 0:return null
case 1:return!0
case 2:return!1
case 3:s=b.b
r=$.cD()
q=b.a.getInt32(s,B.a1===r)
b.b+=4
return q
case 4:return b.rQ(0)
case 6:b.fH(8)
s=b.b
r=$.cD()
q=b.a.getFloat64(s,B.a1===r)
b.b+=8
return q
case 5:case 7:p=k.d8(b)
return B.cL.dZ(b.jT(p))
case 8:return b.jT(k.d8(b))
case 9:p=k.d8(b)
b.fH(4)
s=b.a
o=A.agG(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+4*p
return o
case 10:return b.rR(k.d8(b))
case 14:p=k.d8(b)
b.fH(4)
s=b.a
r=s.buffer
s=s.byteOffset+b.b
A.Qe(r,s,p)
o=new Float32Array(r,s,p)
b.b=b.b+4*p
return o
case 11:p=k.d8(b)
b.fH(8)
s=b.a
o=A.agE(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+8*p
return o
case 12:p=k.d8(b)
n=A.aV(p,null,!1,t.X)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.a0(B.aA)
b.b=r+1
n[m]=k.hS(s.getUint8(r),b)}return n
case 13:p=k.d8(b)
s=t.X
n=A.A(s,s)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.a0(B.aA)
b.b=r+1
r=k.hS(s.getUint8(r),b)
l=b.b
if(l>=s.byteLength)A.a0(B.aA)
b.b=l+1
n.l(0,r,k.hS(s.getUint8(l),b))}return n
default:throw A.d(B.aA)}},
dR(a,b){var s,r
if(b<254)a.d_(0,b)
else{s=a.d
if(b<=65535){a.d_(0,254)
r=$.cD()
s.setUint16(0,b,B.a1===r)
a.lV(a.e,0,2)}else{a.d_(0,255)
r=$.cD()
s.setUint32(0,b,B.a1===r)
a.lV(a.e,0,4)}}},
d8(a){var s,r,q=a.jS(0)
switch(q){case 254:s=a.b
r=$.cD()
q=a.a.getUint16(s,B.a1===r)
a.b+=2
return q
case 255:s=a.b
r=$.cD()
q=a.a.getUint32(s,B.a1===r)
a.b+=4
return q
default:return q}}}
A.a3K.prototype={
$2(a,b){var s=this.a,r=this.b
s.cD(0,r,a)
s.cD(0,r,b)},
$S:50}
A.a3N.prototype={
fg(a){var s=A.a5o(64)
B.a9.cD(0,s,a.a)
B.a9.cD(0,s,a.b)
return s.im()},
fe(a){var s,r,q
a.toString
s=new A.ui(a)
r=B.a9.eS(0,s)
q=B.a9.eS(0,s)
if(typeof r=="string"&&s.b>=a.byteLength)return new A.hg(r,q)
else throw A.d(B.nd)},
n9(a){var s=A.a5o(64)
s.d_(0,0)
B.a9.cD(0,s,a)
return s.im()},
jp(a,b,c){var s=A.a5o(64)
s.d_(0,1)
B.a9.cD(0,s,a)
B.a9.cD(0,s,c)
B.a9.cD(0,s,b)
return s.im()},
Gk(a,b){return this.jp(a,null,b)},
FX(a){var s,r,q,p,o,n
if(a.byteLength===0)throw A.d(B.Fv)
s=new A.ui(a)
if(s.jS(0)===0)return B.a9.eS(0,s)
r=B.a9.eS(0,s)
q=B.a9.eS(0,s)
p=B.a9.eS(0,s)
o=s.b<a.byteLength?A.ck(B.a9.eS(0,s)):null
if(typeof r=="string")n=(q==null||typeof q=="string")&&s.b>=a.byteLength
else n=!1
if(n)throw A.d(A.ad9(r,p,A.ck(q),o))
else throw A.d(B.Fw)}}
A.Ym.prototype={
Zm(a,b,c){var s,r,q,p
if(t.yg.b(b)){this.b.u(0,a)
return}s=this.b
r=s.j(0,a)
q=A.arT(c)
if(q==null)q=this.a
if(J.f(r==null?null:t.Ft.a(r.a),q))return
p=q.q5(a)
s.l(0,a,p)
B.Sy.fm("activateSystemCursor",A.aS(["device",p.b,"kind",t.Ft.a(p.a).a],t.N,t.z),t.H)}}
A.tx.prototype={}
A.dL.prototype={
i(a){var s=this.gq7()
return s}}
A.Kj.prototype={
q5(a){throw A.d(A.c_(null))},
gq7(){return"defer"}}
A.Ok.prototype={}
A.k2.prototype={
gq7(){return"SystemMouseCursor("+this.a+")"},
q5(a){return new A.Ok(this,a)},
k(a,b){if(b==null)return!1
if(J.S(b)!==A.z(this))return!1
return b instanceof A.k2&&b.a===this.a},
gt(a){return B.c.gt(this.a)}}
A.LT.prototype={}
A.jb.prototype={
gmD(){var s,r=$.fE.ab$
r===$&&A.b()
s=r
return s},
lz(a,b){return this.JS(0,b,this.$ti.h("1?"))},
JS(a,b,c){var s=0,r=A.ab(c),q,p=this,o,n
var $async$lz=A.ac(function(d,e){if(d===1)return A.a8(e,r)
while(true)switch(s){case 0:o=p.b
n=o
s=3
return A.at(p.gmD().t0(0,p.a,o.bL(b)),$async$lz)
case 3:q=n.ej(e)
s=1
break
case 1:return A.a9(q,r)}})
return A.aa($async$lz,r)},
t6(a){this.gmD().zB(this.a,new A.Rf(this,a))}}
A.Rf.prototype={
$1(a){return this.Jd(a)},
Jd(a){var s=0,r=A.ab(t.yD),q,p=this,o,n
var $async$$1=A.ac(function(b,c){if(b===1)return A.a8(c,r)
while(true)switch(s){case 0:o=p.a.b
n=o
s=3
return A.at(p.b.$1(o.ej(a)),$async$$1)
case 3:q=n.bL(c)
s=1
break
case 1:return A.a9(q,r)}})
return A.aa($async$$1,r)},
$S:88}
A.tu.prototype={
gmD(){var s,r=$.fE.ab$
r===$&&A.b()
s=r
return s},
m6(a,b,c,d){return this.SU(a,b,c,d,d.h("0?"))},
SU(a,b,c,d,e){var s=0,r=A.ab(e),q,p=this,o,n,m,l
var $async$m6=A.ac(function(f,g){if(f===1)return A.a8(g,r)
while(true)switch(s){case 0:o=p.b
n=o.fg(new A.hg(a,b))
m=p.a
s=3
return A.at(p.gmD().t0(0,m,n),$async$m6)
case 3:l=g
if(l==null){if(c){q=null
s=1
break}throw A.d(A.apm("No implementation found for method "+a+" on channel "+m))}q=d.h("0?").a(o.FX(l))
s=1
break
case 1:return A.a9(q,r)}})
return A.aa($async$m6,r)},
lD(a){var s=this.gmD()
s.zB(this.a,new A.Y9(this,a))},
oM(a,b){return this.R0(a,b)},
R0(a,b){var s=0,r=A.ab(t.yD),q,p=2,o,n=this,m,l,k,j,i,h,g,f,e
var $async$oM=A.ac(function(c,d){if(c===1){o=d
s=p}while(true)switch(s){case 0:h=n.b
g=h.fe(a)
p=4
e=h
s=7
return A.at(b.$1(g),$async$oM)
case 7:k=e.n9(d)
q=k
s=1
break
p=2
s=6
break
case 4:p=3
f=o
k=A.au(f)
if(k instanceof A.u8){m=k
k=m.a
i=m.b
q=h.jp(k,m.c,i)
s=1
break}else if(k instanceof A.tv){q=null
s=1
break}else{l=k
h=h.Gk("error",J.dE(l))
q=h
s=1
break}s=6
break
case 3:s=2
break
case 6:case 1:return A.a9(q,r)
case 2:return A.a8(o,r)}})
return A.aa($async$oM,r)}}
A.Y9.prototype={
$1(a){return this.a.oM(a,this.b)},
$S:88}
A.jK.prototype={
fm(a,b,c){return this.a_C(a,b,c,c.h("0?"))},
qQ(a,b){return this.fm(a,null,b)},
a_C(a,b,c,d){var s=0,r=A.ab(d),q,p=this
var $async$fm=A.ac(function(e,f){if(e===1)return A.a8(f,r)
while(true)switch(s){case 0:q=p.Lj(a,b,!0,c)
s=1
break
case 1:return A.a9(q,r)}})
return A.aa($async$fm,r)}}
A.jy.prototype={
D(){return"KeyboardSide."+this.b}}
A.e1.prototype={
D(){return"ModifierKey."+this.b}}
A.ug.prototype={
ga0l(){var s,r,q,p=A.A(t.BK,t.FE)
for(s=0;s<9;++s){r=B.nY[s]
if(this.a_H(r)){q=this.Jr(r)
if(q!=null)p.l(0,r,q)}}return p},
K9(){return!0}}
A.fB.prototype={}
A.a_1.prototype={
$0(){var s,r,q,p=this.b,o=J.aQ(p),n=A.ck(o.j(p,"key")),m=n==null
if(!m){s=n.length
s=s!==0&&s===1}else s=!1
if(s)this.a.a=n
s=A.ck(o.j(p,"code"))
if(s==null)s=""
m=m?"":n
r=A.mB(o.j(p,"location"))
if(r==null)r=0
q=A.mB(o.j(p,"metaState"))
if(q==null)q=0
p=A.mB(o.j(p,"keyCode"))
return new A.o4(s,m,r,q,p==null?0:p)},
$S:236}
A.hr.prototype={}
A.o5.prototype={}
A.a_6.prototype={
ZM(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(a instanceof A.hr){p=a.c
i.d.l(0,p.gdt(),p.gnz())}else if(a instanceof A.o5)i.d.u(0,a.c.gdt())
i.Vz(a)
for(p=i.a,o=A.ay(p,!0,t.vc),n=o.length,m=0;m<n;++m){s=o[m]
try{if(B.b.B(p,s))s.$1(a)}catch(l){r=A.au(l)
q=A.aG(l)
k=A.bm("while processing a raw key listener")
j=$.f7()
if(j!=null)j.$1(new A.bz(r,q,"services library",k,null,!1))}}return!1},
Vz(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=a1.c,f=g.ga0l(),e=t.F3,d=A.A(e,t.lT),c=A.b7(e),b=this.d,a=A.jC(new A.b_(b,A.n(b).h("b_<1>")),e),a0=a1 instanceof A.hr
if(a0)a.E(0,g.gdt())
for(s=null,r=0;r<9;++r){q=B.nY[r]
p=$.akA()
o=p.j(0,new A.c0(q,B.b9))
if(o==null)continue
if(o.B(0,g.gdt()))s=q
if(f.j(0,q)===B.ch){c.H(0,o)
if(o.jb(0,a.gij(a)))continue}n=f.j(0,q)==null?A.b7(e):p.j(0,new A.c0(q,f.j(0,q)))
if(n==null)continue
for(p=new A.pr(n,n.r),p.c=n.e,m=A.n(p).c;p.q();){l=p.d
if(l==null)l=m.a(l)
k=$.akz().j(0,l)
k.toString
d.l(0,l,k)}}e=g instanceof A.a__
j=(e||g instanceof A.o4)&&b.j(0,B.bC)!=null&&!J.f(b.j(0,B.bC),B.dc)
for(a=$.ac0(),a=A.ij(a,a.r);a.q();){p=a.d
i=j&&p.k(0,B.bC)
if(!c.B(0,p)&&!i)b.u(0,p)}if(!(g instanceof A.ZY)&&!(g instanceof A.a_0))b.u(0,B.dq)
b.H(0,d)
if(a0&&s!=null&&!b.S(0,g.gdt())){if(e&&g.gdt().k(0,B.bD)||g instanceof A.ZZ||g instanceof A.ZX){h=$.ac0().j(0,g.gdt())
if(h!=null)b.l(0,g.gdt(),h)}if(g instanceof A.o4&&g.gdt().k(0,B.bD))b.l(0,g.gdt(),g.gnz())}}}
A.c0.prototype={
k(a,b){if(b==null)return!1
if(J.S(b)!==A.z(this))return!1
return b instanceof A.c0&&b.a===this.a&&b.b==this.b},
gt(a){return A.U(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.MZ.prototype={}
A.MY.prototype={}
A.ZX.prototype={}
A.ZY.prototype={}
A.ZZ.prototype={}
A.a__.prototype={}
A.a_0.prototype={}
A.o4.prototype={
gdt(){var s=this.a,r=B.S7.j(0,s)
return r==null?new A.i(98784247808+B.c.gt(s)):r},
gnz(){var s,r=this.b,q=B.S9.j(0,r),p=q==null?null:q[this.c]
if(p!=null)return p
s=B.S6.j(0,r)
if(s!=null)return s
if(r.length===1)return new A.e(B.c.ae(r.toLowerCase(),0))
return new A.e(B.c.gt(this.a)+98784247808)},
a_H(a){var s=this
switch(a.a){case 0:return(s.d&4)!==0
case 1:return(s.d&1)!==0
case 2:return(s.d&2)!==0
case 3:return(s.d&8)!==0
case 5:return(s.d&16)!==0
case 4:return(s.d&32)!==0
case 6:return(s.d&64)!==0
case 7:case 8:return!1}},
Jr(a){return B.ch},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.z(s))return!1
return b instanceof A.o4&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e},
gt(a){var s=this
return A.U(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.uz.prototype={
ga1r(){var s=this
if(s.c)return new A.bk(s.a,t.m6)
if(s.b==null){s.b=new A.bh(new A.as($.al,t.jr),t.Fk)
s.oL()}return s.b.a},
oL(){var s=0,r=A.ab(t.H),q,p=this,o
var $async$oL=A.ac(function(a,b){if(a===1)return A.a8(b,r)
while(true)switch(s){case 0:s=3
return A.at(B.im.qQ("get",t.mE),$async$oL)
case 3:o=b
if(p.b==null){s=1
break}p.Di(o)
case 1:return A.a9(q,r)}})
return A.aa($async$oL,r)},
Di(a){var s,r=a==null
if(!r){s=J.b9(a,"enabled")
s.toString
A.pS(s)}else s=!1
this.ZO(r?null:t.Fx.a(J.b9(a,"data")),s)},
ZO(a,b){var s,r,q=this,p=q.c&&b
q.d=p
if(p)$.bF.cy$.push(new A.a02(q))
s=q.a
if(b){p=q.PC(a)
r=t.N
if(p==null){p=t.X
p=A.A(p,p)}r=new A.cf(p,q,null,"root",A.A(r,t.hp),A.A(r,t.Cm))
p=r}else p=null
q.a=p
q.c=!0
r=q.b
if(r!=null)r.cI(0,p)
q.b=null
if(q.a!=s){q.aw()
if(s!=null)s.m()}},
v0(a){return this.Ti(a)},
Ti(a){var s=0,r=A.ab(t.H),q=this,p
var $async$v0=A.ac(function(b,c){if(b===1)return A.a8(c,r)
while(true)switch(s){case 0:p=a.a
switch(p){case"push":q.Di(t.mE.a(a.b))
break
default:throw A.d(A.c_(p+" was invoked but isn't implemented by "+A.z(q).i(0)))}return A.a9(null,r)}})
return A.aa($async$v0,r)},
PC(a){if(a==null)return null
return t.ym.a(B.a9.ej(A.jH(a.buffer,a.byteOffset,a.byteLength)))},
JK(a){var s=this
s.r.E(0,a)
if(!s.f){s.f=!0
$.bF.cy$.push(new A.a03(s))}},
BN(){var s,r,q,p,o,n=this
if(!n.f)return
n.f=!1
for(s=n.r,r=A.iQ(s,s.r),q=A.n(r).c;r.q();){p=r.d;(p==null?q.a(p):p).w=!1}s.T(0)
o=B.a9.bL(n.a.a)
B.im.fm("put",A.cT(o.buffer,o.byteOffset,o.byteLength),t.H)},
GE(){if($.bF.dx$)return
this.BN()}}
A.a02.prototype={
$1(a){this.a.d=!1},
$S:2}
A.a03.prototype={
$1(a){return this.a.BN()},
$S:2}
A.cf.prototype={
gme(){var s=J.yN(this.a,"c",new A.a0_())
s.toString
return t.mE.a(s)},
gi8(){var s=J.yN(this.a,"v",new A.a00())
s.toString
return t.mE.a(s)},
a19(a,b,c){var s=this,r=J.dD(s.gi8(),b),q=c.h("0?").a(J.hZ(s.gi8(),b))
if(J.f8(s.gi8()))J.hZ(s.a,"v")
if(r)s.kn()
return q},
Xh(a,b){var s,r,q,p,o=this,n=o.f
if(n.S(0,a)||!J.dD(o.gme(),a)){n=t.N
s=new A.cf(A.A(n,t.X),null,null,a,A.A(n,t.hp),A.A(n,t.Cm))
o.hw(s)
return s}r=t.N
q=o.c
p=J.b9(o.gme(),a)
p.toString
s=new A.cf(t.mE.a(p),q,o,a,A.A(r,t.hp),A.A(r,t.Cm))
n.l(0,a,s)
return s},
hw(a){var s=this,r=a.d
if(r!==s){if(r!=null)r.pf(a)
a.d=s
s.AC(a)
if(a.c!=s.c)s.Ds(a)}},
PR(a){this.pf(a)
a.d=null
if(a.c!=null){a.vH(null)
a.F0(this.gDr())}},
kn(){var s,r=this
if(!r.w){r.w=!0
s=r.c
if(s!=null)s.JK(r)}},
Ds(a){a.vH(this.c)
a.F0(this.gDr())},
vH(a){var s=this,r=s.c
if(r==a)return
if(s.w)if(r!=null)r.r.u(0,s)
s.c=a
if(s.w&&a!=null){s.w=!1
s.kn()}},
pf(a){var s,r,q,p=this
if(J.f(p.f.u(0,a.e),a)){J.hZ(p.gme(),a.e)
s=p.r
r=s.j(0,a.e)
if(r!=null){q=J.bE(r)
p.BZ(q.ew(r))
if(q.gN(r))s.u(0,a.e)}if(J.f8(p.gme()))J.hZ(p.a,"c")
p.kn()
return}s=p.r
q=s.j(0,a.e)
if(q!=null)J.hZ(q,a)
q=s.j(0,a.e)
q=q==null?null:J.f8(q)
if(q===!0)s.u(0,a.e)},
AC(a){var s=this
if(s.f.S(0,a.e)){J.kA(s.r.bJ(0,a.e,new A.a_Z()),a)
s.kn()
return}s.BZ(a)
s.kn()},
BZ(a){this.f.l(0,a.e,a)
J.ea(this.gme(),a.e,a.a)},
F1(a,b){var s,r,q=this.f
q=q.gaV(q)
s=this.r
s=s.gaV(s)
r=q.Zh(0,new A.i8(s,new A.a01(),A.n(s).h("i8<q.E,cf>")))
J.mJ(b?A.ay(r,!1,A.n(r).h("q.E")):r,a)},
F0(a){return this.F1(a,!1)},
a1e(a){var s,r=this
if(a===r.e)return
s=r.d
if(s!=null)s.pf(r)
r.e=a
s=r.d
if(s!=null)s.AC(r)},
m(){var s,r=this
r.F1(r.gPQ(),!0)
r.f.T(0)
r.r.T(0)
s=r.d
if(s!=null)s.pf(r)
r.d=null
r.vH(null)
r.x=!0},
i(a){return"RestorationBucket(restorationId: "+this.e+", owner: "+A.h(this.b)+")"}}
A.a0_.prototype={
$0(){var s=t.X
return A.A(s,s)},
$S:90}
A.a00.prototype={
$0(){var s=t.X
return A.A(s,s)},
$S:90}
A.a_Z.prototype={
$0(){return A.a([],t.oy)},
$S:239}
A.a01.prototype={
$1(a){return a},
$S:240}
A.R1.prototype={}
A.hz.prototype={
Er(){var s,r,q,p,o=this,n=o.a
n=n==null?null:n.a
s=o.e
s=s==null?null:s.a
r=o.f.D()
q=o.r.D()
p=o.c
p=p==null?null:p.D()
return A.aS(["systemNavigationBarColor",n,"systemNavigationBarDividerColor",null,"systemStatusBarContrastEnforced",o.w,"statusBarColor",s,"statusBarBrightness",r,"statusBarIconBrightness",q,"systemNavigationBarIconBrightness",p,"systemNavigationBarContrastEnforced",o.d],t.N,t.z)},
i(a){return"SystemUiOverlayStyle("+this.Er().i(0)+")"},
gt(a){var s=this
return A.U(s.a,s.b,s.d,s.e,s.f,s.r,s.w,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s,r=this
if(b==null)return!1
if(J.S(b)!==A.z(r))return!1
if(b instanceof A.hz)if(J.f(b.a,r.a))if(J.f(b.e,r.e))if(b.r===r.r)if(b.f===r.f)s=b.c==r.c
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.a45.prototype={
$0(){if(!J.f($.oF,$.adr)){B.bW.fm("SystemChrome.setSystemUIOverlayStyle",$.oF.Er(),t.H)
$.adr=$.oF}$.oF=null},
$S:0}
A.vq.prototype={
D(){return"SystemSoundType."+this.b}}
A.a4d.prototype={
U(a,b){return new A.KG(b,this)}}
A.RN.prototype={
fB(a){var s,r,q,p,o,n=a.a
if(n<=0)return B.cK
s=this.a
r=s.length
if(n<=r)q=n===r&&a.b===B.B
else q=!0
if(q)return new A.aW(r,B.K)
switch(a.b.a){case 0:p=Math.min(n-1,r)
o=Math.min(n,r)
break
case 1:p=Math.min(n,r)
o=Math.min(n+1,r)
break
default:o=null
p=null}return new A.aW(A.ahv(s,p,o).b,B.B)},
fC(a){var s,r,q,p,o,n=a.a
if(n>=0)s=n===0&&a.b===B.K
else s=!0
if(s)return B.cK
s=this.a
r=s.length
if(n>=r)return new A.aW(r,B.K)
switch(a.b.a){case 0:q=Math.min(n-1,r)
p=Math.min(n,r)
break
case 1:q=Math.min(n,r)
p=Math.min(n+1,r)
break
default:p=null
q=null}o=A.ahv(s,q,p)
return new A.aW(r-(o.a.length-o.c),B.K)}}
A.a5l.prototype={
fB(a){return new A.aW(this.a.b.lv(a).a,B.B)},
fC(a){return new A.aW(this.a.b.lv(a).b,B.K)}}
A.XI.prototype={
fB(a){return new A.aW(this.a.z8(a).a,B.B)},
fC(a){return new A.aW(this.a.z8(a).b,B.K)}}
A.SK.prototype={
fB(a){return B.cK},
fC(a){return new A.aW(this.a.length,B.K)}}
A.a5j.prototype={
fB(a){var s,r=a.a,q=this.a,p=q.length
if(r<=p)r=r===p&&a.b===B.B
else r=!0
if(r)a=new A.aW(p,B.K)
s=a.a
if(s<=0)return B.cK
if(a.b===B.B&&!A.a4F(B.c.ao(q,s)))return a
for(;--s,s>=0;)if(!A.a4F(B.c.ao(q,s)))return new A.aW(s+1,B.K)
return B.cK},
fC(a){var s,r=a.a,q=this.a,p=q.length
if(r>=p)return new A.aW(p,B.K)
if(r>=0)r=r===0&&a.b===B.K
else r=!0
if(r)a=B.cK
s=a.a
if(a.b===B.K&&!A.a4F(B.c.ao(q,s-1)))return a
for(;s<p;++s)if(!A.a4F(B.c.ao(q,s)))return new A.aW(s,B.B)
return new A.aW(p,B.K)}}
A.KG.prototype={
fB(a){return this.a.fB(this.b.fB(a))},
fC(a){return this.a.fC(this.b.fC(a))}}
A.GM.prototype={
B4(a){if(this.a)switch(a.b.a){case 0:return new A.aW(a.a,B.B)
case 1:return new A.aW(a.a+1,B.K)}else switch(a.b.a){case 0:return new A.aW(a.a-1,B.B)
case 1:return new A.aW(a.a,B.K)}},
fB(a){return this.B4(a)},
fC(a){return this.B4(a)}}
A.IB.prototype={
i(a){var s,r,q=this,p=", isDirectional: "
if(!q.gjE())return"TextSelection.invalid"
s=""+q.c
r=""+q.f
return q.a===q.b?"TextSelection.collapsed(offset: "+s+", affinity: "+q.e.i(0)+p+r+")":"TextSelection(baseOffset: "+s+", extentOffset: "+q.d+p+r+")"},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof A.IB))return!1
if(!r.gjE())return!b.gjE()
if(b.c===r.c)if(b.d===r.d)s=(r.a!==r.b||b.e===r.e)&&b.f===r.f
else s=!1
else s=!1
return s},
gt(a){var s,r=this
if(!r.gjE())return A.U(-B.f.gt(1),-B.f.gt(1),A.fA(B.B),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)
s=r.a===r.b?A.fA(r.e):A.fA(B.B)
return A.U(B.f.gt(r.c),B.f.gt(r.d),s,B.nn.gt(r.f),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.HO.prototype={
D(){return"SelectionChangedCause."+this.b}}
A.Iz.prototype={
gOV(){var s=this.c
s===$&&A.b()
return s},
oV(a){return this.T5(a)},
T5(a){var s=0,r=A.ab(t.z),q,p=2,o,n=this,m,l,k,j,i
var $async$oV=A.ac(function(b,c){if(b===1){o=c
s=p}while(true)switch(s){case 0:p=4
s=7
return A.at(n.uN(a),$async$oV)
case 7:k=c
q=k
s=1
break
p=2
s=6
break
case 4:p=3
i=o
m=A.au(i)
l=A.aG(i)
k=A.bm("during method call "+a.a)
A.dI(new A.bz(m,l,"services library",k,new A.a4E(a),!1))
throw i
s=6
break
case 3:s=2
break
case 6:case 1:return A.a9(q,r)
case 2:return A.a8(o,r)}})
return A.aa($async$oV,r)},
uN(a){return this.Sz(a)},
Sz(a){var s=0,r=A.ab(t.z),q,p=this,o,n,m,l,k,j
var $async$uN=A.ac(function(b,c){if(b===1)return A.a8(c,r)
while(true)switch(s){case 0:j=a.a
if(j==="TextInputClient.focusElement"){p.f.j(0,J.b9(t.j.a(a.b),0))
s=1
break}else if(j==="TextInputClient.requestElementsInRect"){o=J.kB(t.j.a(a.b),t.fY)
n=A.n(o).h("aE<R.E,T>")
m=p.f
l=A.n(m).h("b_<1>")
k=l.h("dl<q.E,B<@>>")
q=A.ay(new A.dl(new A.aJ(new A.b_(m,l),new A.a4B(p,A.ay(new A.aE(o,new A.a4C(),n),!0,n.h("bj.E"))),l.h("aJ<q.E>")),new A.a4D(p),k),!0,k.h("q.E"))
s=1
break}else if(j==="TextInputClient.scribbleInteractionBegan"){s=1
break}else if(j==="TextInputClient.scribbleInteractionFinished"){s=1
break}s=1
break
case 1:return A.a9(q,r)}})
return A.aa($async$uN,r)}}
A.a4E.prototype={
$0(){var s=null
return A.a([A.ji("call",this.a,!0,B.b8,s,!1,s,s,B.az,s,!1,!0,!0,B.bn,s,t.fw)],t.F)},
$S:14}
A.a4C.prototype={
$1(a){return a},
$S:242}
A.a4B.prototype={
$1(a){this.a.f.j(0,a)
return!1},
$S:54}
A.a4D.prototype={
$1(a){var s=this.a.f.j(0,a),r=s.gwc(s)
s=[a]
B.b.H(s,[r.gh6(r),r.gyL(r),r.gbh(r),r.gbI(r)])
return s},
$S:243}
A.vA.prototype={}
A.Mj.prototype={}
A.Py.prototype={}
A.aap.prototype={
$1(a){this.a.sbV(a)
return!1},
$S:38}
A.aH.prototype={}
A.bg.prototype={
f8(a){this.b=a},
hK(a,b){this.gqR()
return!0},
gqR(){return!0},
q0(a){return!0},
Wn(a){var s=this.a
s.b=!0
s.a.push(a)
return null},
In(a){return this.a.u(0,a)}}
A.kV.prototype={}
A.kN.prototype={
cR(a){return this.c.$1(a)}}
A.QK.prototype={
Hn(a,b,c){if(a instanceof A.kV)return a.l9(b,c)
else return a.cR(b)}}
A.i_.prototype={
ar(){return new A.vY(A.b7(t.nT),new A.L(),B.n)}}
A.QM.prototype={
$1(a){var s=a.f
s.toString
t.ke.a(s)
return!1},
$S:37}
A.QP.prototype={
$1(a){var s,r=this,q=a.f
q.toString
s=A.acb(t.ke.a(q),r.b,r.d)
if(s!=null){r.c.A0(a,null)
r.a.a=s
return!0}return!1},
$S:37}
A.QN.prototype={
$1(a){var s,r=a.f
r.toString
s=A.acb(t.ke.a(r),this.b,this.c)
if(s!=null){this.a.a=s
return!0}return!1},
$S:37}
A.QQ.prototype={
$1(a){var s,r,q=this,p=a.f
p.toString
s=q.b
r=A.acb(t.ke.a(p),s,q.d)
p=r!=null
if(p&&r.hK(0,s))q.a.a=A.afe(a).Hn(r,s,q.c)
return p},
$S:37}
A.vY.prototype={
aE(){this.aZ()
this.Ex()},
QT(a){this.av(new A.a5p(this))},
Ex(){var s,r,q,p,o=this,n=o.a.d
n=n.gaV(n)
s=A.jC(n,A.n(n).h("q.E"))
r=o.d.jm(s)
n=o.d
n.toString
q=s.jm(n)
for(n=r.ga9(r),p=o.gCk();n.q();)n.gG(n).In(p)
for(n=q.ga9(q);n.q();)n.gG(n).Wn(p)
o.d=s},
b0(a){this.bz(a)
this.Ex()},
m(){var s,r,q,p,o=this
o.aR()
for(s=o.d,s=A.iQ(s,s.r),r=o.gCk(),q=A.n(s).c;s.q();){p=s.d;(p==null?q.a(p):p).In(r)}o.d=null},
M(a){var s=this.a
return new A.vX(null,s.d,this.e,s.e,null)}}
A.a5p.prototype={
$0(){this.a.e=new A.L()},
$S:0}
A.vX.prototype={
bR(a){var s
if(this.w===a.w)s=!A.abG(a.r,this.r)
else s=!0
return s}}
A.J4.prototype={
cR(a){a.a2l()
return null}}
A.BO.prototype={
q0(a){return this.c},
cR(a){}}
A.mK.prototype={}
A.mY.prototype={}
A.h0.prototype={}
A.BM.prototype={}
A.lL.prototype={}
A.GK.prototype={
hK(a,b){var s,r,q,p,o,n=$.a6.ac$.f.f
if(n==null||n.e==null)return!1
for(s=t.q,r=0;r<2;++r){q=B.Gj[r]
p=n.e
p.toString
o=A.acd(p,q,s)
if(o!=null&&o.hK(0,q)){this.c=o
this.d=q
return!0}}return!1},
cR(a){var s,r=this.c
r===$&&A.b()
s=this.d
s===$&&A.b()
r.cR(s)}}
A.Md.prototype={
SV(a,b,c){var s
a.f8(this.gjj())
s=A.n(this).h("kV<1>").b(a)?a.l9(b,c):a.cR(b)
a.f8(null)
return s},
l9(a,b){var s=this,r=A.acc(s.gqY(),A.n(s).c)
return r==null?s.a_B(a,s.b,b):s.SV(r,a,b)},
cR(a){return this.l9(a,null)},
gqR(){var s=this,r=A.acd(s.gqY(),null,A.n(s).c)
if(r!=null){r.f8(s.gjj())
r.gqR()
r.f8(null)}else s.gjj().gqR()
return!0},
hK(a,b){var s,r=this,q=A.acc(r.gqY(),A.n(r).c),p=q==null
if(!p)q.f8(r.gjj())
s=(p?r.gjj():q).hK(0,b)
if(!p)q.f8(null)
return s},
q0(a){var s,r=this,q=A.acc(r.gqY(),A.n(r).c),p=q==null
if(!p)q.f8(r.gjj())
s=(p?r.gjj():q).q0(a)
if(!p)q.f8(null)
return s}}
A.x_.prototype={
a_B(a,b,c){var s=this.e
if(b==null)return s.cR(a)
else return s.cR(a)},
gjj(){return this.e},
gqY(){return this.f}}
A.Jb.prototype={}
A.Ja.prototype={}
A.Lm.prototype={}
A.yj.prototype={
f8(a){this.Kr(a)
this.e.f8(a)}}
A.q9.prototype={
aB(a){var s=new A.un(this.e,!0,null,A.aq(),this.$ti.h("un<1>"))
s.aD()
s.saO(null)
return s},
aH(a,b){b.sn(0,this.e)
b.sKc(!0)}}
A.vV.prototype={
ar(){return new A.y3(B.n)}}
A.y3.prototype={
gSJ(){var s,r
$.a6.toString
s=$.aI()
if(s.gwr()!=="/"){$.a6.toString
s=s.gwr()}else{r=this.a.ax
$.a6.toString
s=s.gwr()
s=s}return s},
aE(){var s=this
s.aZ()
s.W0()
$.a6.toString
s.r=s.vn($.aI().a.f,s.a.fy)
$.a6.b1$.push(s)},
b0(a){this.bz(a)
this.ER(a)},
m(){B.b.u($.a6.b1$,this)
var s=this.d
if(s!=null)s.m()
this.aR()},
Bk(){var s=this.d
if(s!=null)s.m()
this.e=this.d=null},
ER(a){var s,r=this
r.a.toString
if(r.gF_()){r.Bk()
if(r.f==null||r.a.c!=a.c){s=r.a.c
r.f=s==null?new A.jp(r,t.yh):s}}else{r.Bk()
r.f=null}},
W0(){return this.ER(null)},
gF_(){var s=this.a
if(s.Q==null){s=s.as
s=s==null?null:s.gbM(s)
s=s===!0||this.a.d!=null||!1}else s=!0
return s},
Tu(a){var s,r=this,q=a.a,p=q==="/"&&r.a.Q!=null?new A.a9L(r):r.a.as.j(0,q)
if(p!=null)return r.a.f.$1$2(a,p,t.z)
s=r.a.d
if(s!=null)return s.$1(a)
return null},
TI(a){return this.a.at.$1(a)},
il(){var s=0,r=A.ab(t.y),q,p=this,o,n
var $async$il=A.ac(function(a,b){if(a===1)return A.a8(b,r)
while(true)switch(s){case 0:p.a.toString
o=p.f
n=o==null?null:o.gbo()
if(n==null){q=!1
s=1
break}q=n.HL()
s=1
break
case 1:return A.a9(q,r)}})
return A.aa($async$il,r)},
n0(a){return this.Yy(a)},
Yy(a){var s=0,r=A.ab(t.y),q,p=this,o,n
var $async$n0=A.ac(function(b,c){if(b===1)return A.a8(c,r)
while(true)switch(s){case 0:p.a.toString
o=p.f
n=o==null?null:o.gbo()
if(n==null){q=!1
s=1
break}o=n.vq(a,null,t.X)
o.toString
o=A.aia(o,B.C0,!1,null)
n.e.push(o)
n.uq()
n.AQ(o.a)
q=!0
s=1
break
case 1:return A.a9(q,r)}})
return A.aa($async$n0,r)},
vn(a,b){this.a.toString
return A.aun(a,b)},
ww(a){var s=this,r=s.vn(a,s.a.fy)
if(!r.k(0,s.r))s.av(new A.a9O(s,r))},
M(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g={}
g.a=null
s=i.a
s.toString
if(i.gF_()){s=i.f
r=i.gSJ()
q=i.a
p=q.e==null?A.avB():new A.a9M(i)
o=q.ay
o.toString
g.a=A.ag_(!0,new A.tJ(r,i.gTt(),i.gTH(),o,"nav",p,!0,s),"Navigator Scope",h,h)
s=q}else{s=i.a
s.toString}g.b=null
n=new A.fV(new A.a9N(g,i),h)
g.b=n
n=A.qW(n,h,B.cJ,!0,s.cy,h,h,B.aO)
g.b=n
s=$.arK
if(s)m=new A.Gr(15,!1,!1,h)
else m=h
if(m!=null)g.b=A.k1(B.b6,A.a([n,A.o_(h,m,h,h,0,0,0,h)],t.E),B.af,B.bf)
s=i.a
r=s.CW
s=s.db
s=A.aX(255,s.gn(s)>>>16&255,s.gn(s)>>>8&255,s.gn(s)&255)
g=g.b
q=i.a.dx
if(q!=null)l=i.vn(A.a([q],t.as),i.a.fy)
else{q=i.r
q.toString
l=q}q=t.eu
p=A.a([],q)
B.b.H(p,i.a.dy)
p.push(B.DS)
q=A.a(p.slice(0),q)
k=new A.t6(l,q,new A.IJ(r,s,g,h),h)
A.d8(a)
g=i.a
j=new A.wL(k,h)
k=j
g=g.p3
s=A.arJ()
r=A.nI($.al3(),t.n,t.nT)
q=t.B8
p=t.dc
r.l(0,B.BJ,new A.x_(new A.oi(new A.bd(A.a([],q),p)),a,!1,!1,!1,!1,new A.bd(A.a([],q),p),t.uq.h("x_<bg.T>")))
return new A.uC(new A.v2(A.adl(new A.BE(A.QL(r,A.ag0(new A.Iu(new A.v3(k,h),h),new A.uj(A.A(t.j5,t.uJ)))),h),"<Default WidgetsApp Shortcuts>",s),h),g,h)}}
A.a9L.prototype={
$1(a){var s=this.a.a.Q
s.toString
return s},
$S:13}
A.a9O.prototype={
$0(){this.a.r=this.b},
$S:0}
A.a9M.prototype={
$2(a,b){return this.a.a.e.$1(b)},
$S:94}
A.a9N.prototype={
$1(a){return this.b.a.ch.$2(a,this.a.a)},
$S:13}
A.Q9.prototype={}
A.qf.prototype={
ar(){return new A.w2(B.n)}}
A.w2.prototype={
aE(){this.aZ()
this.EC()},
b0(a){this.bz(a)
this.EC()},
EC(){this.e=new A.cU(this.gOg(),this.a.c,null,t.dm)},
m(){var s,r,q=this.d
if(q!=null)for(q=A.ij(q,q.r);q.q();){s=q.d
r=this.d.j(0,s)
r.toString
s.F(0,r)}this.aR()},
Oh(a){var s,r=this,q=a.a,p=r.d
if(p==null)p=r.d=A.A(t.yF,t.M)
p.l(0,q,r.Ps(q))
p=r.d.j(0,q)
p.toString
q.V(0,p)
if(!r.f){r.f=!0
s=r.C5()
if(s!=null)r.EN(s)
else $.bF.cy$.push(new A.a5D(r))}return!1},
C5(){var s={},r=this.c
r.toString
s.a=null
r.aM(new A.a5I(s))
return t.ot.a(s.a)},
EN(a){var s,r
this.c.toString
s=this.f
r=this.e
r===$&&A.b()
a.AY(t.CR.a(A.aoN(r,s)))},
Ps(a){return new A.a5H(this,a)},
M(a){var s=this.f,r=this.e
r===$&&A.b()
return new A.rT(s,r,null)}}
A.a5D.prototype={
$1(a){var s,r=this.a
if(r.c==null)return
s=r.C5()
s.toString
r.EN(s)},
$S:2}
A.a5I.prototype={
$1(a){this.a.a=a},
$S:4}
A.a5H.prototype={
$0(){var s=this.a
s.d.u(0,this.b)
if(s.d.a===0)if($.bF.dy$.a<3)s.av(new A.a5F(s))
else{s.f=!1
A.f5(new A.a5G(s))}},
$S:0}
A.a5F.prototype={
$0(){this.a.f=!1},
$S:0}
A.a5G.prototype={
$0(){var s=this.a
if(s.c!=null&&s.d.a===0)s.av(new A.a5E(s))},
$S:0}
A.a5E.prototype={
$0(){},
$S:0}
A.nD.prototype={}
A.Dy.prototype={}
A.mR.prototype={
oC(){var s=new A.Dy($.bq())
this.h0$=s
this.c.cK(new A.nD(s))},
o1(){var s,r=this
if(r.grI()){if(r.h0$==null)r.oC()}else{s=r.h0$
if(s!=null){s.aw()
s.dz()
r.h0$=null}}},
M(a){if(this.grI()&&this.h0$==null)this.oC()
return B.a_x}}
A.M4.prototype={
M(a){throw A.d(A.CN("Widgets that mix AutomaticKeepAliveClientMixin into their State must call super.build() but must ignore the return value of the superclass."))}}
A.P1.prototype={
zw(a,b){},
lf(a){A.aif(this,new A.a9A(this,a))}}
A.a9A.prototype={
$1(a){var s=a.z
if(s!=null&&s.B(0,this.a))a.b2()},
$S:4}
A.a9z.prototype={
$1(a){A.aif(a,this.a)},
$S:4}
A.P2.prototype={
bK(a){var s=A.h5(t.h,t.X)
return new A.P1(s,this,B.a0)}}
A.eA.prototype={
bR(a){return this.w!==a.w}}
A.qR.prototype={
aB(a){var s=new A.H1(this.e,this.f,this.r,!1,!1,null,A.aq())
s.aD()
s.saO(null)
return s},
aH(a,b){b.sri(this.e)
b.sGI(this.f)
b.sro(this.r)
b.c8=b.bt=!1},
n2(a){a.sri(null)
a.sGI(null)}}
A.n0.prototype={
aB(a){var s=new A.GZ(null,this.f,null,A.aq())
s.aD()
s.saO(null)
return s},
aH(a,b){b.smJ(null)
b.spZ(this.f)},
n2(a){a.smJ(null)}}
A.zs.prototype={
aB(a){var s=new A.GY(this.e,this.f,null,A.aq())
s.aD()
s.saO(null)
return s},
aH(a,b){b.smJ(this.e)
b.spZ(this.f)},
n2(a){a.smJ(null)}}
A.Gx.prototype={
aB(a){var s=this,r=new A.Hf(s.e,s.r,s.w,s.y,s.x,null,s.f,null,A.aq())
r.aD()
r.saO(null)
return r},
aH(a,b){var s=this
b.scV(0,s.e)
b.spZ(s.f)
b.sWU(0,s.r)
b.shB(0,s.w)
b.saj(0,s.x)
b.sfD(0,s.y)}}
A.Gy.prototype={
aB(a){var s=this,r=new A.Hg(s.r,s.x,s.w,s.e,s.f,null,A.aq())
r.aD()
r.saO(null)
return r},
aH(a,b){var s=this
b.smJ(s.e)
b.spZ(s.f)
b.shB(0,s.r)
b.saj(0,s.w)
b.sfD(0,s.x)}}
A.oQ.prototype={
aB(a){var s=this,r=A.dt(a),q=new A.Hp(s.w,null,A.aq())
q.aD()
q.saO(null)
q.sbm(0,s.e)
q.sdY(s.r)
q.sbD(r)
q.sl2(s.x)
q.sHY(0,null)
return q},
aH(a,b){var s=this
b.sbm(0,s.e)
b.sHY(0,null)
b.sdY(s.r)
b.sbD(A.dt(a))
b.bt=s.w
b.sl2(s.x)}}
A.CE.prototype={
aB(a){var s=new A.uo(this.e,this.f,A.dt(a),B.l,null,A.aq())
s.aD()
s.saO(null)
return s},
aH(a,b){b.sx0(this.e)
b.sdY(this.f)
b.sbD(A.dt(a))
if(B.l!==b.dH){b.dH=B.l
b.ap()
b.aY()}}}
A.CX.prototype={
aB(a){var s=new A.H6(this.e,this.f,null,A.aq())
s.aD()
s.saO(null)
return s},
aH(a,b){b.sa1L(this.e)
b.O=this.f}}
A.hk.prototype={
aB(a){var s=new A.Hd(this.e,A.dt(a),null,A.aq())
s.aD()
s.saO(null)
return s},
aH(a,b){b.sd7(0,this.e)
b.sbD(A.dt(a))}}
A.kD.prototype={
aB(a){var s=new A.Hi(this.f,this.r,this.e,A.dt(a),null,A.aq())
s.aD()
s.saO(null)
return s},
aH(a,b){b.sdY(this.e)
b.sa1X(this.f)
b.sa_7(this.r)
b.sbD(A.dt(a))}}
A.kR.prototype={}
A.qS.prototype={
aB(a){var s=new A.H2(this.e,null,A.aq())
s.aD()
s.saO(null)
return s},
aH(a,b){b.swt(this.e)}}
A.rY.prototype={
mA(a){var s,r,q=a.e
q.toString
t.DU.a(q)
s=this.f
if(q.e!==s){q.e=s
r=a.c
if(r instanceof A.x)r.a4()}}}
A.qQ.prototype={
aB(a){var s=new A.H0(this.e,0,null,null,A.aq())
s.aD()
s.H(0,null)
return s},
aH(a,b){b.swt(this.e)}}
A.v7.prototype={
aB(a){return A.ah3(A.mV(this.f,this.e))},
aH(a,b){b.sFe(A.mV(this.f,this.e))},
bQ(){var s,r=this,q=r.e
if(q===1/0&&r.f===1/0)s="SizedBox.expand"
else s=q===0&&r.f===0?"SizedBox.shrink":"SizedBox"
q=r.a
return q==null?s:s+"-"+q.i(0)}}
A.fc.prototype={
aB(a){return A.ah3(this.e)},
aH(a,b){b.sFe(this.e)}}
A.DG.prototype={
aB(a){var s=new A.H9(this.e,this.f,null,A.aq())
s.aD()
s.saO(null)
return s},
aH(a,b){b.sa0e(0,this.e)
b.sa0b(0,this.f)}}
A.tP.prototype={
aB(a){var s=new A.Hc(this.e,null,A.aq())
s.aD()
s.saO(null)
return s},
aH(a,b){b.sr5(this.e)},
bK(a){return new A.Ma(this,B.a0)}}
A.Ma.prototype={}
A.vh.prototype={
aB(a){var s=A.dt(a)
s=new A.uu(this.e,s,this.r,this.w,A.aq(),0,null,null,A.aq())
s.aD()
s.H(0,null)
return s},
aH(a,b){var s
b.sdY(this.e)
s=A.dt(a)
b.sbD(s)
s=this.r
if(b.aU!==s){b.aU=s
b.a4()}s=this.w
if(s!==b.b3){b.b3=s
b.ap()
b.aY()}}}
A.lJ.prototype={
mA(a){var s,r,q,p=this,o=a.e
o.toString
t.B.a(o)
s=p.f
if(o.w!=s){o.w=s
r=!0}else r=!1
s=p.r
if(o.e!=s){o.e=s
r=!0}s=p.w
if(o.f!=s){o.f=s
r=!0}s=p.x
if(o.r!=s){o.r=s
r=!0}s=p.y
if(o.x!=s){o.x=s
r=!0}s=p.z
if(o.y!=s){o.y=s
r=!0}if(r){q=a.c
if(q instanceof A.x)q.a4()}}}
A.GH.prototype={
M(a){var s,r,q,p=this,o=null,n=a.a1(t.I)
n.toString
s=p.c
r=p.e
switch(n.w.a){case 0:break
case 1:q=s
s=r
r=q
break
default:s=o
r=s}return A.o_(p.f,p.x,o,o,r,s,p.d,p.r)}}
A.rr.prototype={
gTn(){switch(this.e.a){case 0:return!0
case 1:var s=this.w
return s===B.aT||s===B.EG}},
rP(a){var s=this.x
s=this.gTn()?A.dt(a):null
return s},
aB(a){var s=this
return A.aqx(B.l,s.w,s.e,s.f,s.r,s.z,s.rP(a),s.y)},
aH(a,b){var s=this,r=s.e
if(b.I!==r){b.I=r
b.a4()}r=s.f
if(b.ab!==r){b.ab=r
b.a4()}r=s.r
if(b.a8!==r){b.a8=r
b.a4()}r=s.w
if(b.aq!==r){b.aq=r
b.a4()}r=s.rP(a)
if(b.aU!=r){b.aU=r
b.a4()}r=s.y
if(b.b3!==r){b.b3=r
b.a4()}if(B.l!==b.cp){b.cp=B.l
b.ap()
b.aY()}}}
A.Hx.prototype={}
A.zy.prototype={}
A.CI.prototype={
mA(a){var s,r,q,p=a.e
p.toString
t.uc.a(p)
s=this.f
if(p.e!==s){p.e=s
r=!0}else r=!1
s=this.r
if(p.f!==s){p.f=s
r=!0}if(r){q=a.c
if(q instanceof A.x)q.a4()}}}
A.Cy.prototype={}
A.Hs.prototype={
aB(a){var s,r,q,p=this,o=null,n=p.e,m=p.r
if(m==null){m=a.a1(t.I)
m.toString
m=m.w}s=p.x
r=A.acZ(a)
q=s===B.dJ?"\u2026":o
s=new A.uq(A.a4H(q,r,p.z,p.as,n,p.f,m,p.ax,p.y,p.at),p.w,s,p.ch,0,o,o,A.aq())
s.aD()
s.H(0,o)
s.un(n)
s.snR(p.ay)
return s},
aH(a,b){var s,r=this
b.srA(0,r.e)
b.syB(0,r.f)
s=r.r
if(s==null){s=a.a1(t.I)
s.toString
s=s.w}b.sbD(s)
b.sKe(r.w)
b.sa0D(0,r.x)
b.syC(r.y)
b.sxG(r.z)
b.sKp(r.as)
b.syD(r.at)
b.sIK(r.ax)
s=A.acZ(a)
b.sxB(0,s)
b.snR(r.ay)
b.sJQ(r.ch)}}
A.a05.prototype={
$1(a){return!0},
$S:36}
A.GP.prototype={
aB(a){var s=this,r=s.d
r=r==null?null:r.cv(0)
r=new A.H7(r,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.CW,!1,null,!1,A.aq())
r.aD()
r.VS()
return r},
aH(a,b){var s=this,r=s.d
b.sh3(0,r==null?null:r.cv(0))
b.aq=s.e
b.sbh(0,s.f)
b.sbI(0,s.r)
b.sJH(0,s.w)
b.saj(0,s.x)
b.srb(0,s.y)
b.sXs(s.Q)
b.sx0(s.as)
b.sdY(s.at)
b.sa1i(0,s.ax)
b.sX6(s.ay)
b.sa09(!1)
b.sbD(null)
b.sxq(s.CW)
b.sxs(!1)
b.sl2(s.z)},
n2(a){a.sh3(0,null)}}
A.DH.prototype={
aB(a){var s=this,r=null,q=new A.Hh(s.e,r,s.r,r,s.x,s.y,r,r,s.as,s.at,r,A.aq())
q.aD()
q.saO(r)
return q},
aH(a,b){var s=this
b.a3=s.e
b.by=null
b.aL=s.r
b.a7=null
b.cc=s.x
b.cN=s.y
b.Gt=b.fj=null
b.wT=s.as
b.v=s.at}}
A.FI.prototype={
aB(a){var s=this,r=new A.Hb(!0,s.e,s.f,s.r,s.w,B.aB,null,A.aq())
r.aD()
r.saO(null)
return r},
aH(a,b){var s,r=this
b.by=r.e
b.aL=r.f
b.a7=r.r
s=r.w
if(!b.cc.k(0,s)){b.cc=s
b.ap()}if(b.v!==B.aB){b.v=B.aB
b.ap()}}}
A.hu.prototype={
aB(a){var s=new A.Hk(null,A.aq())
s.aD()
s.saO(null)
return s}}
A.h8.prototype={
aB(a){var s=new A.up(this.e,this.f,null,A.aq())
s.aD()
s.saO(null)
return s},
aH(a,b){b.sH9(this.e)
b.sxk(this.f)}}
A.yO.prototype={
aB(a){var s=new A.ul(!1,null,null,A.aq())
s.aD()
s.saO(null)
return s},
aH(a,b){b.sF5(!1)
b.sxk(null)}}
A.uY.prototype={
aB(a){var s=this,r=new A.us(s.e,s.f,s.r,!1,s.Ch(a),null,A.aq())
r.aD()
r.saO(null)
r.Ez(r.v)
return r},
Ch(a){var s,r=this.e,q=r.p4
if(q!=null)return q
if(r.fx==null){if(r.go==null)r=r.p2!=null
else r=!0
s=r}else s=!0
if(!s)return null
return A.dt(a)},
aH(a,b){var s=this
b.sXE(s.f)
b.sYY(s.r)
b.sYW(!1)
b.sI8(s.e)
b.sbD(s.Ch(a))}}
A.FD.prototype={
aB(a){var s=new A.Ha(null,A.aq())
s.aD()
s.saO(null)
return s}}
A.zb.prototype={
aB(a){var s=new A.GX(!0,null,A.aq())
s.aD()
s.saO(null)
return s},
aH(a,b){b.sWT(!0)}}
A.ri.prototype={
aB(a){var s=new A.H5(this.e,null,A.aq())
s.aD()
s.saO(null)
return s},
aH(a,b){b.sYX(this.e)}}
A.Dk.prototype={
aB(a){var s=new A.H8(this.e,null,A.aq())
s.aD()
s.saO(null)
return s},
aH(a,b){b.sxl(0,this.e)}}
A.jz.prototype={
M(a){return this.c}}
A.fV.prototype={
M(a){return this.c.$1(a)}}
A.qC.prototype={
aB(a){var s=new A.x3(this.e,B.aB,null,A.aq())
s.aD()
s.saO(null)
return s},
aH(a,b){t.oZ.a(b).saj(0,this.e)}}
A.x3.prototype={
saj(a,b){if(b.k(0,this.a3))return
this.a3=b
this.ap()},
aF(a,b){var s,r,q,p,o,n,m=this
if(m.k3.JE(0,B.O)){s=a.gbA(a)
r=m.k3
q=b.a
p=b.b
o=r.a
r=r.b
n=$.an().bj()
n.saj(0,m.a3)
s.c7(new A.y(q,p,q+o,p+r),n)}s=m.A$
if(s!=null)a.eu(s,b)}}
A.a9Q.prototype={
$0(){var s,r,q=this,p=q.b
if(p==null||t.c.b(q.c)){p=q.a.y1$
p===$&&A.b()
p=p.e
p.toString
s=q.c
s=s.gbu(s)
r=A.amP()
p.bO(r,s)
p=r}return p},
$S:379}
A.a9R.prototype={
$1(a){var s=a==null?t.K.a(a):a
return this.a.iB(s)},
$S:253}
A.d0.prototype={
il(){return A.bR(!1,t.y)},
n0(a){return A.bR(!1,t.y)},
Yz(a){var s=a.a
s.toString
return this.n0(s)},
qa(){},
G1(){},
G0(){},
ww(a){},
G_(a){}}
A.vW.prototype={
Wt(a){return this.b1$.push(a)},
Zy(){this.YD($.aI().a.f)},
YD(a){var s,r,q
for(s=this.b1$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].ww(a)},
qE(){var s=0,r=A.ab(t.H),q,p=this,o,n,m
var $async$qE=A.ac(function(a,b){if(a===1)return A.a8(b,r)
while(true)switch(s){case 0:o=A.ay(p.b1$,!0,t.nR),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.at(o[m].il(),$async$qE)
case 6:if(b){s=1
break}case 4:++m
s=3
break
case 5:A.a46()
case 1:return A.a9(q,r)}})
return A.aa($async$qE,r)},
qF(a){return this.ZL(a)},
ZL(a){var s=0,r=A.ab(t.H),q,p=this,o,n,m
var $async$qF=A.ac(function(b,c){if(b===1)return A.a8(c,r)
while(true)switch(s){case 0:o=A.ay(p.b1$,!0,t.nR),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.at(o[m].n0(a),$async$qF)
case 6:if(c){s=1
break}case 4:++m
s=3
break
case 5:case 1:return A.a9(q,r)}})
return A.aa($async$qF,r)},
oO(a){return this.S8(a)},
S8(a){var s=0,r=A.ab(t.H),q,p=this,o,n,m,l
var $async$oO=A.ac(function(b,c){if(b===1)return A.a8(c,r)
while(true)switch(s){case 0:o=A.ay(p.b1$,!0,t.nR),n=o.length,m=J.aQ(a),l=0
case 3:if(!(l<n)){s=5
break}s=6
return A.at(o[l].Yz(new A.oe(A.cj(m.j(a,"location")),m.j(a,"state"))),$async$oO)
case 6:if(c){s=1
break}case 4:++l
s=3
break
case 5:case 1:return A.a9(q,r)}})
return A.aa($async$oO,r)},
RN(a){switch(a.a){case"popRoute":return this.qE()
case"pushRoute":return this.qF(A.cj(a.b))
case"pushRouteInformation":return this.oO(t.G.a(a.b))}return A.bR(null,t.z)},
R5(){this.wR()},
JI(a){A.ci(B.u,new A.a5k(this,a))},
$iaf:1,
$idf:1}
A.a9P.prototype={
$1(a){var s,r,q=$.bF
q.toString
s=this.a
r=s.a
r.toString
q.Is(r)
s.a=null
this.b.el$.fU(0)},
$S:83}
A.a5k.prototype={
$0(){var s,r,q=this.a,p=q.cz$
q.cq$=!0
s=q.y1$
s===$&&A.b()
s=s.e
s.toString
r=q.ac$
r.toString
q.cz$=new A.lN(this.b,s,"[root]",new A.jp(s,t.l9),t.go).WL(r,t.jv.a(p))
if(p==null)$.bF.wR()},
$S:0}
A.lN.prototype={
bK(a){return new A.jT(this,B.a0,this.$ti.h("jT<1>"))},
aB(a){return this.d},
aH(a,b){},
WL(a,b){var s,r={}
r.a=b
if(b==null){a.HH(new A.a_v(r,this,a))
s=r.a
s.toString
a.pS(s,new A.a_w(r))}else{b.ak=this
b.fp()}r=r.a
r.toString
return r},
bQ(){return this.e}}
A.a_v.prototype={
$0(){var s=this.b,r=A.aqy(s,s.$ti.c)
this.a.a=r
r.r=this.c},
$S:0}
A.a_w.prototype={
$0(){var s=this.a.a
s.toString
s.Ao(null,null)
s.pd()},
$S:0}
A.jT.prototype={
aM(a){var s=this.aa
if(s!=null)a.$1(s)},
iz(a){this.aa=null
this.k5(a)},
eR(a,b){this.Ao(a,b)
this.pd()},
bc(a,b){this.lP(0,b)
this.pd()},
hb(){var s=this,r=s.ak
if(r!=null){s.ak=null
s.lP(0,s.$ti.h("lN<1>").a(r))
s.pd()}s.An()},
pd(){var s,r,q,p,o,n,m,l=this
try{o=l.aa
n=l.f
n.toString
l.aa=l.du(o,l.$ti.h("lN<1>").a(n).c,B.mB)}catch(m){s=A.au(m)
r=A.aG(m)
o=A.bm("attaching to the render tree")
q=new A.bz(s,r,"widgets library",o,null,!1)
A.dI(q)
p=A.acE(q)
l.aa=l.du(null,p,B.mB)}},
ga5(){return this.$ti.h("az<1>").a(A.bt.prototype.ga5.call(this))},
iE(a,b){var s=this.$ti
s.h("az<1>").a(A.bt.prototype.ga5.call(this)).saO(s.c.a(a))},
iG(a,b,c){},
iN(a,b){this.$ti.h("az<1>").a(A.bt.prototype.ga5.call(this)).saO(null)}}
A.J6.prototype={$iaf:1}
A.y4.prototype={
ep(){this.Kt()
$.dY=this
var s=$.aI()
s.Q=this.gRU()
s.as=$.al},
yN(){this.Kw()
this.us()}}
A.y5.prototype={
ep(){this.Nx()
$.bF=this},
hJ(){this.Ku()}}
A.y6.prototype={
ep(){var s,r,q,p,o=this
o.Nz()
$.fE=o
o.ab$!==$&&A.ev()
o.ab$=B.DK
s=new A.uz(A.b7(t.hp),$.bq())
B.im.lD(s.gTh())
o.a8$=s
s=t.F3
r=new A.Wk(A.A(s,t.lT),A.b7(t.vQ),A.a([],t.AV))
o.fk$!==$&&A.ev()
o.fk$=r
q=$.ac1()
p=A.a([],t.DG)
o.I$!==$&&A.ev()
s=o.I$=new A.Dz(r,q,p,A.b7(s))
p=$.aI()
p.at=s.gZu()
p.ax=$.al
B.Cm.t6(s.gZN())
s=$.ago
if(s==null)s=$.ago=A.a([],t.e8)
s.push(o.gOk())
B.Co.t6(new A.a9R(o))
B.Cn.t6(o.gRJ())
B.bW.lD(o.gRS())
$.akO()
o.a10()},
hJ(){this.NA()}}
A.y7.prototype={
ep(){this.NB()
$.fy=this
var s=t.K
this.hE$=new A.WK(A.A(s,t.fx),A.A(s,t.lM),A.A(s,t.s8))},
nn(){this.MC()
var s=this.hE$
s===$&&A.b()
s.T(0)},
iB(a){return this.ZT(a)},
ZT(a){var s=0,r=A.ab(t.H),q,p=this
var $async$iB=A.ac(function(b,c){if(b===1)return A.a8(c,r)
while(true)switch(s){case 0:s=3
return A.at(p.MD(a),$async$iB)
case 3:switch(A.cj(J.b9(t.a.a(a),"type"))){case"fontsChange":p.wW$.aw()
break}s=1
break
case 1:return A.a9(q,r)}})
return A.aa($async$iB,r)}}
A.y8.prototype={
ep(){this.NE()
$.a1i=this
this.wS$=$.aI().a.a}}
A.y9.prototype={
ep(){var s,r,q,p,o=this
o.NF()
$.jU=o
s=t.By
o.y1$=new A.GA(o.gYQ(),o.gSn(),o.gSr(),o.gSp(),A.a([],s),A.a([],s),A.a([],s),A.b7(t.d))
s=$.aI()
s.f=o.gZA()
r=s.r=$.al
s.fy=o.ga_1()
s.go=r
s.k2=o.gZG()
s.k3=r
s.p1=o.gSl()
s.p2=r
s.p3=o.gSj()
s.p4=r
r=new A.uv(B.O,o.FU(),$.c9(),null,A.aq())
r.aD()
r.saO(null)
q=o.y1$
q===$&&A.b()
q.sa1s(r)
r=o.y1$.e
r.Q=r
q=t.W
q.a(A.F.prototype.gbq.call(r)).r.push(r)
p=r.EM()
r.ch.saQ(0,p)
q.a(A.F.prototype.gbq.call(r)).z.push(r)
o.K5(s.a.c)
o.cx$.push(o.gRQ())
s=o.xr$
if(s!=null)s.m()
s=t.S
r=$.bq()
o.xr$=new A.FJ(new A.Ym(B.lw,A.A(s,t.Df)),A.A(s,t.eg),r)
o.cy$.push(o.gSE())},
hJ(){this.NC()},
wH(a,b,c){this.xr$.a1U(b,new A.a9Q(this,c,b))
this.KW(0,b,c)},
hQ(){var s=0,r=A.ab(t.H),q=[],p=this,o
var $async$hQ=A.ac(function(a,b){if(a===1)return A.a8(b,r)
while(true)switch(s){case 0:s=2
return A.at(p.Kv(),$async$hQ)
case 2:o=$.afi
if((o==null?null:o.a)==null)try{o=p.y1$
o===$&&A.b()
o.e.ev()}finally{}p.rY()
s=3
return A.at(p.gGn(),$async$hQ)
case 3:return A.a9(null,r)}})
return A.aa($async$hQ,r)}}
A.ya.prototype={
hJ(){this.NH()},
xa(){var s,r,q
this.M8()
for(s=this.b1$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].qa()},
xg(){var s,r,q
this.Ma()
for(s=this.b1$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].G1()},
xc(){var s,r,q
this.M9()
for(s=this.b1$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].G0()},
qC(a){var s,r,q
this.Mp(a)
for(s=this.b1$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].G_(a)},
nn(){var s,r
this.ND()
for(s=this.b1$.length,r=0;r<s;++r);},
wM(){var s,r,q=this,p={}
p.a=null
if(q.bs$){s=new A.a9P(p,q)
p.a=s
$.bF.WA(s)}try{r=q.cz$
if(r!=null)q.ac$.WZ(r)
q.M7()
q.ac$.Z3()}finally{}r=q.bs$=!1
p=p.a
if(p!=null)r=!(q.ba$||q.bk$===0)
if(r){q.bs$=!0
r=$.bF
r.toString
p.toString
r.Is(p)}},
hQ(){var s=this.cz$
if(s!=null)this.ac$.a15(s,$.afi)
return this.NI()}}
A.Bx.prototype={
aB(a){var s=new A.H3(this.e,this.f,A.aen(a,null),null,A.aq())
s.aD()
s.saO(null)
return s},
aH(a,b){b.sYm(this.e)
b.swg(A.aen(a,null))
b.sbu(0,this.f)}}
A.n5.prototype={
gTK(){var s,r=this.r
if(r==null||r.gd7(r)==null)return this.e
s=r.gd7(r)
r=this.e
if(r==null)return s
s.toString
return r.E(0,s)},
M(a){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){s=o.x
if(s!=null)s=!(s.a>=s.b&&s.c>=s.d)
else s=!0}else s=!1
if(s)m=A.aoU(new A.fc(B.m5,n,n),0,0)
else{s=o.d
if(s!=null)m=new A.kD(s,n,n,m,n)}r=o.gTK()
if(r!=null)m=new A.hk(r,m,n)
s=o.f
if(s!=null)m=new A.qC(s,m,n)
s=o.as
if(s!==B.l){q=A.dt(a)
p=o.r
p.toString
m=A.afu(m,s,new A.Ke(q==null?B.t:q,p))}s=o.r
if(s!=null)m=A.afJ(m,s,B.ho)
s=o.x
if(s!=null)m=new A.fc(s,m,n)
s=o.y
if(s!=null)m=new A.hk(s,m,n)
m.toString
return m}}
A.Ke.prototype={
z4(a){return this.c.rN(new A.y(0,0,0+a.a,0+a.b),this.b)},
zG(a){return!a.c.k(0,this.c)||a.b!==this.b}}
A.na.prototype={
bR(a){return!J.f(this.w,a.w)||!J.f(this.x,a.x)}}
A.M5.prototype={
M(a){throw A.d(A.CN("A DefaultSelectionStyle constructed with DefaultSelectionStyle.fallback cannot be incorporated into the widget tree, it is meant only to provide a fallback value returned by DefaultSelectionStyle.of() when no enclosing default selection style is present in a BuildContext."))}}
A.BE.prototype={
QA(){var s=$.aks()
return s},
M(a){var s=this.c,r=this.QA()
if(r!=null)s=A.adl(s,"<Web Disabling Text Editing Shortcuts>",r)
return A.adl(s,"<Default Text Editing Shortcuts>",A.anx())}}
A.BN.prototype={
gaJ(a){var s=this.a
if(s==null)return null
s=s.c
s.toString
return s}}
A.nd.prototype={
ar(){return new A.wg(A.GL(null),A.GL(null),B.n)},
Zj(a,b,c){return this.d.$3(a,b,c)},
a1p(a,b,c){return this.e.$3(a,b,c)}}
A.wg.prototype={
aE(){var s,r=this
r.aZ()
s=r.a.c
r.d=s.gaW(s)
r.a.c.d0(r.gtG())
r.BS()},
AV(a){var s,r=this,q=r.d
q===$&&A.b()
s=r.ON(a,q)
r.d=s
if(q!==s)r.BS()},
b0(a){var s,r,q=this
q.bz(a)
s=a.c
if(s!==q.a.c){r=q.gtG()
s.c0(r)
q.a.c.d0(r)
r=q.a.c
q.AV(r.gaW(r))}},
ON(a,b){switch(a.a){case 0:case 3:return a
case 1:switch(b.a){case 0:case 3:case 1:return a
case 2:return b}break
case 2:switch(b.a){case 0:case 3:case 2:return a
case 1:return b}break}},
BS(){var s=this,r=s.d
r===$&&A.b()
switch(r.a){case 0:case 1:s.e.saS(0,s.a.c)
s.f.saS(0,B.cb)
break
case 2:case 3:s.e.saS(0,B.cR)
s.f.saS(0,new A.en(s.a.c,new A.bd(A.a([],t.A),t.Q),0))
break}},
m(){this.a.c.c0(this.gtG())
this.aR()},
M(a){var s=this.a
return s.Zj(a,this.e,s.a1p(a,this.f,s.f))}}
A.ih.prototype={
D(){return"KeyEventResult."+this.b}}
A.Jt.prototype={}
A.Vt.prototype={
ah(a){var s,r=this.a
if(r.ax===this){if(!r.giC()){s=r.w
s=s!=null&&s.w===r}else s=!0
if(s)r.IY(B.BM)
s=r.w
if(s!=null){if(s.f===r)s.f=null
s.r.u(0,r)}s=r.Q
if(s!=null)s.Uu(0,r)
r.ax=null}},
yw(a){var s,r=this.a
if(r.ax===this){s=r.e
s.toString
a=A.aoq(s,!0);(a==null?r.e.r.f.e:a).vh(r)}},
It(){return this.yw(null)}}
A.vP.prototype={
D(){return"UnfocusDisposition."+this.b}}
A.ct.prototype={
gdT(){var s,r,q
if(this.a)return!0
for(s=this.gfa(),r=s.length,q=0;q<r;++q)s[q].toString
return!1},
sdT(a){var s,r=this
if(a!==r.a){r.a=a
s=r.w
if(s!=null){s.oY()
s.r.E(0,r)}}},
gcb(){var s,r,q,p
if(!this.b)return!1
s=this.gdm()
if(s!=null&&!s.gcb())return!1
for(r=this.gfa(),q=r.length,p=0;p<q;++p)r[p].toString
return!0},
scb(a){var s,r=this
if(a!==r.b){r.b=a
if(r.gjz()&&!a)r.IY(B.BM)
s=r.w
if(s!=null){s.oY()
s.r.E(0,r)}}},
skJ(a){return},
skK(a){},
gmV(){var s,r,q,p,o=this.y
if(o==null){s=A.a([],t.i4)
for(o=this.as,r=o.length,q=0;q<o.length;o.length===r||(0,A.P)(o),++q){p=o[q]
B.b.H(s,p.gmV())
s.push(p)}this.y=s
o=s}return o},
gnY(){var s=this.gmV()
return new A.aJ(s,new A.Vu(),A.ah(s).h("aJ<1>"))},
gfa(){var s,r,q=this.x
if(q==null){s=A.a([],t.i4)
r=this.Q
for(;r!=null;){s.push(r)
r=r.Q}this.x=s
q=s}return q},
gjz(){if(!this.giC()){var s=this.w
if(s==null)s=null
else{s=s.f
s=s==null?null:B.b.B(s.gfa(),this)}s=s===!0}else s=!0
return s},
giC(){var s=this.w
return(s==null?null:s.f)===this},
gjG(){return this.gdm()},
gdm(){var s,r,q,p
for(s=this.gfa(),r=s.length,q=0;q<r;++q){p=s[q]
if(p instanceof A.l7)return p}return null},
gaI(a){var s,r=this.e.ga5(),q=r.bv(0,null),p=r.giX(),o=A.ce(q,new A.u(p.a,p.b))
p=r.bv(0,null)
q=r.giX()
s=A.ce(p,new A.u(q.c,q.d))
return new A.y(o.a,o.b,s.a,s.b)},
IY(a){var s,r,q=this
if(!q.gjz()){s=q.w
s=s==null||s.w!==q}else s=!1
if(s)return
r=q.gdm()
if(r==null)return
switch(a.a){case 0:if(r.gcb())B.b.T(r.dy)
for(;!r.gcb();){r=r.gdm()
if(r==null){s=q.w
r=s==null?null:s.e}}r.i5(!1)
break
case 1:if(r.gcb())B.b.u(r.dy,q)
for(;!r.gcb();){s=r.gdm()
if(s!=null)B.b.u(s.dy,r)
r=r.gdm()
if(r==null){s=q.w
r=s==null?null:s.e}}r.i5(!0)
break}},
CX(a){var s=this,r=s.w
if(r!=null){if(r.f===s)r.w=null
else{r.w=s
r.oY()}return}a.kv()
a.v4()
if(a!==s)s.v4()},
Dt(a,b,c){var s,r,q
if(c){s=b.gdm()
if(s!=null)B.b.u(s.dy,b)}b.Q=null
B.b.u(this.as,b)
for(s=this.gfa(),r=s.length,q=0;q<r;++q)s[q].y=null
this.y=null},
Uu(a,b){return this.Dt(a,b,!0)},
Qm(a){var s,r,q,p
this.w=a
for(s=this.gmV(),r=s.length,q=0;q<r;++q){p=s[q]
p.w=a
p.x=null}},
vh(a){var s,r,q,p,o,n=this
if(a.Q===n)return
s=a.gdm()
r=a.gjz()
q=a.Q
if(q!=null)q.Dt(0,a,s!=n.gjG())
n.as.push(a)
a.Q=n
a.x=null
a.Qm(n.w)
for(q=a.gfa(),p=q.length,o=0;o<p;++o)q[o].y=null
if(r){q=n.w
if(q!=null){q=q.f
if(q!=null)q.kv()}}if(s!=null&&a.e!=null&&a.gdm()!==s){q=a.e
q.toString
q=A.ag1(q)
if(q!=null)q.we(a,s)}if(a.ay){a.i5(!0)
a.ay=!1}},
m(){var s=this.ax
if(s!=null)s.ah(0)
this.dz()},
v4(){var s=this
if(s.Q==null)return
if(s.giC())s.kv()
s.aw()},
rv(){this.i5(!0)},
i5(a){var s,r=this
if(!r.gcb())return
if(r.Q==null){r.ay=!0
return}r.kv()
if(r.giC()){s=r.w.w
s=s==null||s===r}else s=!1
if(s)return
r.CX(r)},
kv(){var s,r,q,p,o,n
for(s=B.b.ga9(this.gfa()),r=new A.oX(s,t.oj),q=t.j5,p=this;r.q();p=o){o=q.a(s.gG(s))
n=o.dy
B.b.u(n,p)
n.push(p)}},
bQ(){var s,r,q,p=this
p.gjz()
s=p.gjz()&&!p.giC()?"[IN FOCUS PATH]":""
r=s+(p.giC()?"[PRIMARY FOCUS]":"")
s=A.bB(p)
q=r.length!==0?"("+r+")":""
return"<optimized out>#"+s+q},
$ia2:1}
A.Vu.prototype={
$1(a){return!a.gdT()&&a.gcb()},
$S:11}
A.l7.prototype={
gjG(){return this},
gnY(){if(!this.gcb())return B.CV
return A.ct.prototype.gnY.call(this)},
lC(a){if(a.Q==null)this.vh(a)
if(this.gjz())a.i5(!0)
else a.kv()},
i5(a){var s,r,q=this,p=q.dy
while(!0){if((p.length!==0?B.b.gR(p):null)!=null)s=!(p.length!==0?B.b.gR(p):null).gcb()
else s=!1
if(!s)break
p.pop()}r=p.length!==0?B.b.gR(p):null
if(!a||r==null){if(q.gcb()){q.kv()
q.CX(q)}return}r.i5(!0)}}
A.i9.prototype={
D(){return"FocusHighlightMode."+this.b}}
A.CR.prototype={
D(){return"FocusHighlightStrategy."+this.b}}
A.rw.prototype={
EL(){var s,r,q=this
switch(0){case 0:s=q.c
if(s==null)return
r=s?B.hu:B.e0
break}s=q.b
if(s==null)s=A.CS()
q.b=r
if((r==null?A.CS():r)!==s)q.Tq()},
Tq(){var s,r,q,p,o,n,m,l,k,j=this,i=j.d,h=i.a
if(h.a===0)return
p=A.ay(i,!0,t.tP)
for(i=p.length,o=0;o<i;++o){s=p[o]
try{if(h.S(0,s)){n=j.b
if(n==null)n=A.CS()
s.$1(n)}}catch(m){r=A.au(m)
q=A.aG(m)
l=j instanceof A.bP?A.cL(j):null
n=A.bm("while dispatching notifications for "+A.aA(l==null?A.aM(j):l).i(0))
k=$.f7()
if(k!=null)k.$1(new A.bz(r,q,"widgets library",n,null,!1))}}},
Ql(a){var s,r,q=this
switch(a.gc4(a).a){case 0:case 2:case 3:q.c=!0
s=B.hu
break
case 1:case 4:case 5:q.c=!1
s=B.e0
break
default:s=null}r=q.b
if(s!==(r==null?A.CS():r))q.EL()},
RI(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.c=!1
i.EL()
s=i.f
if(s==null)return!1
s=A.a([s],t.i4)
B.b.H(s,i.f.gfa())
q=s.length
p=t.zj
o=a.b
n=o!=null
m=0
while(!0){if(!(m<s.length)){r=!1
break}c$1:{l=s[m]
k=A.a([],p)
j=l.f
if(j!=null&&n)k.push(j.$2(l,o))
switch(A.auy(k).a){case 1:break c$1
case 0:r=!0
break
case 2:r=!1
break
default:r=!1}break}s.length===q||(0,A.P)(s);++m}return r},
oY(){if(this.y)return
this.y=!0
A.f5(this.gOx())},
Oy(){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.y=!1
s=h.f
for(r=h.x,q=r.length,p=h.e,o=0;o<r.length;r.length===q||(0,A.P)(r),++o){n=r[o]
m=n.a
if(m.Q!=null||m===p)if(m.w===h){l=m.dy
m=(l.length!==0?B.b.gR(l):null)==null&&B.b.B(n.b.gfa(),m)
k=m}else k=!1
else k=!1
if(k)n.b.i5(!0)}B.b.T(r)
r=h.f
if(r==null&&h.w==null)h.w=p
q=h.w
if(q!=null&&q!==r){if(s==null)j=null
else{r=s.gfa()
r=A.t0(r,A.ah(r).c)
j=r}if(j==null)j=A.b7(t.lc)
r=h.w.gfa()
i=A.t0(r,A.ah(r).c)
r=h.r
r.H(0,i.jm(j))
r.H(0,j.jm(i))
r=h.f=h.w
h.w=null}if(s!=r){if(s!=null)h.r.E(0,s)
r=h.f
if(r!=null)h.r.E(0,r)}for(r=h.r,q=A.iQ(r,r.r),p=A.n(q).c;q.q();){m=q.d;(m==null?p.a(m):m).v4()}r.T(0)
if(s!=h.f)h.aw()},
$ia2:1}
A.KT.prototype={}
A.KU.prototype={}
A.KV.prototype={}
A.KW.prototype={}
A.l6.prototype={
gHV(){var s=this.w,r=this.e
s=r==null?null:r.r
return s},
gy3(){var s=this.x
if(s==null){s=this.e
s=s==null?null:s.f}return s},
gcb(){var s=this.y
if(s==null){s=this.e
s=s==null?null:s.gcb()}return s!==!1},
gdT(){var s=this.z
if(s==null){s=this.e
s=s==null?null:s.gdT()}return s===!0},
gkJ(){var s=this.Q
if(s==null)s=this.e!=null||null
return s!==!1},
gkK(){var s=this.as
if(s==null)s=this.e!=null||null
return s!==!1},
gkI(){var s=this.ax
if(s==null){s=this.e
s=s==null?null:s.at}return s},
ar(){return A.arV()}}
A.pd.prototype={
gbP(a){var s=this.a.e
if(s==null){s=this.d
s.toString}return s},
aE(){this.aZ()
this.CE()},
CE(){var s,r,q,p=this
if(p.a.e==null)if(p.d==null)p.d=p.BB()
s=p.gbP(p)
p.a.gkJ()
s.skJ(!0)
s=p.gbP(p)
p.a.gkK()
s.skK(!0)
p.a.gdT()
p.gbP(p).sdT(p.a.gdT())
if(p.a.y!=null){s=p.gbP(p)
r=p.a.y
r.toString
s.scb(r)}p.f=p.gbP(p).gcb()
p.gbP(p)
p.r=!0
p.gbP(p)
p.w=!0
p.e=p.gbP(p).giC()
s=p.gbP(p)
r=p.c
r.toString
p.a.gHV()
q=p.a.gy3()
s.e=r
s.f=q==null?s.f:q
r=s.r
s.r=r
p.y=s.ax=new A.Vt(s)
p.gbP(p).V(0,p.guG())},
BB(){var s=this,r=s.a.gkI(),q=s.a.gcb()
s.a.gkJ()
s.a.gkK()
return A.acG(q,r,!0,!0,null,null,s.a.gdT())},
m(){var s,r=this
r.gbP(r).F(0,r.guG())
r.y.ah(0)
s=r.d
if(s!=null)s.m()
r.aR()},
b2(){this.cn()
var s=this.y
if(s!=null)s.It()
this.Cm()},
Cm(){var s,r,q,p=this
if(!p.x&&p.a.f){s=p.c
s.toString
s=A.aop(s)
r=p.gbP(p)
if(r.Q==null)s.vh(r)
q=s.w
if(q!=null)q.x.push(new A.Jt(s,r))
s=s.w
if(s!=null)s.oY()
p.x=!0}},
d3(){this.lR()
var s=this.y
if(s!=null)s.It()
this.x=!1},
b0(a){var s,r,q=this
q.bz(a)
s=a.e
r=q.a
if(s==r.e){if(!J.f(r.gy3(),q.gbP(q).f))q.gbP(q).f=q.a.gy3()
q.a.gHV()
q.gbP(q)
q.a.gdT()
q.gbP(q).sdT(q.a.gdT())
if(q.a.y!=null){s=q.gbP(q)
r=q.a.y
r.toString
s.scb(r)}s=q.gbP(q)
q.a.gkJ()
s.skJ(!0)
s=q.gbP(q)
q.a.gkK()
s.skK(!0)}else{q.y.ah(0)
if(s!=null)s.F(0,q.guG())
q.CE()}if(a.f!==q.a.f)q.Cm()},
Rz(){var s,r=this,q=r.gbP(r).giC(),p=r.gbP(r).gcb()
r.gbP(r)
r.gbP(r)
s=r.a.r
if(s!=null)s.$1(r.gbP(r).gjz())
s=r.e
s===$&&A.b()
if(s!==q)r.av(new A.a6t(r,q))
s=r.f
s===$&&A.b()
if(s!==p)r.av(new A.a6u(r,p))
s=r.r
s===$&&A.b()
if(!s)r.av(new A.a6v(r,!0))
s=r.w
s===$&&A.b()
if(!s)r.av(new A.a6w(r,!0))},
M(a){var s,r,q=this,p=null,o=q.y
o.toString
o.yw(q.a.c)
o=q.a
s=o.d
if(o.at){o=q.f
o===$&&A.b()
r=q.e
r===$&&A.b()
s=A.dy(p,s,!1,p,!1,o,r,p,p,p,p,p,p,p,p,p,p,p,p,p,p)}return A.ai0(s,q.gbP(q))}}
A.a6t.prototype={
$0(){this.a.e=this.b},
$S:0}
A.a6u.prototype={
$0(){this.a.f=this.b},
$S:0}
A.a6v.prototype={
$0(){this.a.r=this.b},
$S:0}
A.a6w.prototype={
$0(){this.a.w=this.b},
$S:0}
A.CT.prototype={
ar(){return new A.KX(B.n)}}
A.KX.prototype={
BB(){var s=this.a.gkI()
return A.acH(this.a.gcb(),s,this.a.gdT())},
M(a){var s=this,r=null,q=s.y
q.toString
q.yw(s.a.c)
q=s.gbP(s)
return A.dy(r,A.ai0(s.a.d,q),!1,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)}}
A.wk.prototype={}
A.aam.prototype={
$1(a){var s=this.a
if(--s.a===0){s.b=a
return!1}return!0},
$S:38}
A.pe.prototype={}
A.me.prototype={
D(){return"TraversalDirection."+this.b}}
A.CU.prototype={
C_(a,b,c){var s,r=a.gjG(),q=r.dy,p=q.length!==0?B.b.gR(q):null
q=p==null&&r.gmV().length!==0
if(q){s=this.E7(r,a)
if(s.length===0)p=null
else p=b?B.b.gR(s):B.b.gJ(s)}return p==null?a:p},
Qb(a,b){return this.C_(a,!1,b)},
a_z(a){},
we(a,b){},
QH(a){var s
if(a==null)s=null
else{s=a.iU(t.AB)
if(s==null)s=null
else{s=s.f
s.toString}}return t.fc.a(s)},
E7(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=this.QH(a.e),c=d==null,b=c?e:d.f
if(b==null)b=new A.uj(A.A(t.j5,t.uJ))
s=A.A(t.k_,t.hF)
for(r=a.gmV(),q=r.length,p=t.fc,o=t.AB,n=t.i4,m=0;m<r.length;r.length===q||(0,A.P)(r),++m){l=r[m]
k=l.e
if(k==null)k=e
else{k=k.y
j=k==null?e:k.j(0,A.aA(o))
if(j==null)k=e
else{k=j.f
k.toString}}p.a(k)
i=k==null?e:k.r
if(J.f(l,i)){k=i.e
k.toString
h=A.aiS(k,2)
if(h==null)k=e
else{k=h.y
j=k==null?e:k.j(0,A.aA(o))
if(j==null)k=e
else{k=j.f
k.toString}}p.a(k)
g=k==null?e:k.r
if(s.j(0,g)==null)s.l(0,g,A.ai1(k,b,A.a([],n)))
s.j(0,g).c.push(i)
continue}if(l.gcb()&&!l.gdT()){if(s.j(0,i)==null)s.l(0,i,A.ai1(k,b,A.a([],n)))
s.j(0,i).c.push(l)}}for(r=A.ij(s,s.r);r.q();){q=r.d
p=s.j(0,q).b.Kf(s.j(0,q).c,a0)
p=A.a(p.slice(0),A.ah(p))
B.b.T(s.j(0,q).c)
B.b.H(s.j(0,q).c,p)}f=A.a([],n)
if(s.a!==0)r=s.S(0,c?e:d.r)
else r=!1
if(r){r=s.j(0,c?e:d.r)
r.toString
new A.Vw(s,f).$1(r)}if(!!f.fixed$length)A.a0(A.V("removeWhere"))
B.b.vg(f,new A.Vv(),!0)
return f},
D1(a,b){var s,r,q,p,o,n,m=this,l=a.gjG()
l.toString
m.k6(l)
m.cN$.u(0,l)
s=l.dy
r=s.length!==0?B.b.gR(s):null
if(r==null){q=b?m.Qb(a,!1):m.C_(a,!0,!1)
A.kn(q,b?B.cE:B.cF)
return!0}p=m.E7(l,a)
if(p.length===0)return!1
if(b&&r===B.b.gR(p)){A.kn(B.b.gJ(p),B.cE)
return!0}if(!b&&r===B.b.gJ(p)){A.kn(B.b.gR(p),B.cF)
return!0}for(l=J.aw(b?p:new A.cx(p,A.ah(p).h("cx<1>"))),o=null;l.q();o=n){n=l.gG(l)
if(o==r){l=b?B.cE:B.cF
n.rv()
s=n.e
s.toString
A.ahh(s,1,l)
return!0}}return!1}}
A.Vw.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=a.c,r=s.length,q=this.b,p=this.a,o=0;o<s.length;s.length===r||(0,A.P)(s),++o){n=s[o]
if(p.S(0,n)){m=p.j(0,n)
m.toString
this.$1(m)}else q.push(n)}},
$S:256}
A.Vv.prototype={
$1(a){return!a.gcb()||a.gdT()},
$S:11}
A.p8.prototype={}
A.Ko.prototype={}
A.Su.prototype={
Z5(a,b){var s=this
switch(b.a){case 0:return s.pm(a,!1,!0)
case 2:return s.pm(a,!0,!0)
case 3:return s.pm(a,!1,!1)
case 1:return s.pm(a,!0,!1)}},
pm(a,b,c){var s=a.gjG().gnY().dP(0)
A.mI(s,new A.SC(c,b),t.lc)
if(s.length!==0)return B.b.gJ(s)
return null},
Vm(a,b,c){var s,r=c.gnY().dP(0)
A.mI(r,new A.Sw(),t.lc)
switch(a.a){case 3:s=new A.aJ(r,new A.Sx(b),A.ah(r).h("aJ<1>"))
break
case 1:s=new A.aJ(r,new A.Sy(b),A.ah(r).h("aJ<1>"))
break
case 0:case 2:s=null
break
default:s=null}return s},
Vn(a,b,c){var s=c.dP(0)
A.mI(s,new A.Sz(),t.lc)
switch(a.a){case 0:return new A.aJ(s,new A.SA(b),A.ah(s).h("aJ<1>"))
case 2:return new A.aJ(s,new A.SB(b),A.ah(s).h("aJ<1>"))
case 3:case 1:break}return null},
Ub(a,b,c){var s,r,q=this,p=q.cN$,o=p.j(0,b),n=o!=null
if(n){s=o.a
s=s.length!==0&&B.b.gJ(s).a!==a}else s=!1
if(s){s=o.a
if(B.b.gR(s).b.Q==null){q.k6(b)
p.u(0,b)
return!1}r=new A.Sv(q,o,b)
switch(a.a){case 2:case 0:switch(B.b.gJ(s).a.a){case 3:case 1:q.k6(b)
p.u(0,b)
break
case 0:case 2:if(r.$1(a))return!0
break}break
case 3:case 1:switch(B.b.gJ(s).a.a){case 3:case 1:if(r.$1(a))return!0
break
case 0:case 2:q.k6(b)
p.u(0,b)
break}break}}if(n&&o.a.length===0){q.k6(b)
p.u(0,b)}return!1},
a_l(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=a.gjG(),f=g.dy,e=f.length!==0?B.b.gR(f):h
if(e==null){s=i.Z5(a,b)
if(s==null)s=a
switch(b.a){case 0:case 3:A.kn(s,B.cF)
break
case 1:case 2:A.kn(s,B.cE)
break}return!0}if(i.Ub(b,g,e))return!0
f=e.e
f.toString
r=A.hx(f)
f=b.a
switch(f){case 2:case 0:q=i.Vn(b,e.gaI(e),g.gnY())
if(r!=null&&!r.d.gFn()){q.toString
p=new A.aJ(q,new A.SD(r),q.$ti.h("aJ<q.E>"))
if(!p.gN(p))q=p}if(!q.ga9(q).q()){o=h
break}n=A.ay(q,!0,A.n(q).h("q.E"))
if(b===B.YN){m=A.ah(n).h("cx<1>")
n=A.ay(new A.cx(n,m),!0,m.h("bj.E"))}l=new A.aJ(n,new A.SE(new A.y(e.gaI(e).a,-1/0,e.gaI(e).c,1/0)),A.ah(n).h("aJ<1>"))
if(!l.gN(l)){o=l.gJ(l)
break}A.mI(n,new A.SF(e),t.lc)
o=B.b.gJ(n)
break
case 1:case 3:q=i.Vm(b,e.gaI(e),g)
if(r!=null&&!r.d.gFn()){q.toString
p=new A.aJ(q,new A.SG(r),q.$ti.h("aJ<q.E>"))
if(!p.gN(p))q=p}if(!q.ga9(q).q()){o=h
break}n=A.ay(q,!0,A.n(q).h("q.E"))
if(b===B.YO){m=A.ah(n).h("cx<1>")
n=A.ay(new A.cx(n,m),!0,m.h("bj.E"))}l=new A.aJ(n,new A.SH(new A.y(-1/0,e.gaI(e).b,1/0,e.gaI(e).d)),A.ah(n).h("aJ<1>"))
if(!l.gN(l)){o=l.gJ(l)
break}A.mI(n,new A.SI(e),t.lc)
o=B.b.gJ(n)
break
default:o=h}if(o!=null){m=i.cN$
k=m.j(0,g)
j=new A.p8(b,e)
if(k!=null)k.a.push(j)
else m.l(0,g,new A.Ko(A.a([j],t.gE)))
switch(f){case 0:case 3:A.kn(o,B.cF)
break
case 2:case 1:A.kn(o,B.cE)
break}return!0}return!1}}
A.a8r.prototype={
$1(a){return a.b===this.a},
$S:257}
A.SC.prototype={
$2(a,b){if(this.a)if(this.b)return B.d.b_(a.gaI(a).b,b.gaI(b).b)
else return B.d.b_(b.gaI(b).d,a.gaI(a).d)
else if(this.b)return B.d.b_(a.gaI(a).a,b.gaI(b).a)
else return B.d.b_(b.gaI(b).c,a.gaI(a).c)},
$S:30}
A.Sw.prototype={
$2(a,b){return B.d.b_(a.gaI(a).gaN().a,b.gaI(b).gaN().a)},
$S:30}
A.Sx.prototype={
$1(a){var s=this.a
return!a.gaI(a).k(0,s)&&a.gaI(a).gaN().a<=s.a},
$S:11}
A.Sy.prototype={
$1(a){var s=this.a
return!a.gaI(a).k(0,s)&&a.gaI(a).gaN().a>=s.c},
$S:11}
A.Sz.prototype={
$2(a,b){return B.d.b_(a.gaI(a).gaN().b,b.gaI(b).gaN().b)},
$S:30}
A.SA.prototype={
$1(a){var s=this.a
return!a.gaI(a).k(0,s)&&a.gaI(a).gaN().b<=s.b},
$S:11}
A.SB.prototype={
$1(a){var s=this.a
return!a.gaI(a).k(0,s)&&a.gaI(a).gaN().b>=s.d},
$S:11}
A.Sv.prototype={
$1(a){var s,r,q=this.b.a.pop().b,p=q.e
p.toString
p=A.hx(p)
s=$.a6.ac$.f.f.e
s.toString
if(p!=A.hx(s)){p=this.a
s=this.c
p.k6(s)
p.cN$.u(0,s)
return!1}switch(a.a){case 0:case 3:r=B.cF
break
case 1:case 2:r=B.cE
break
default:r=null}A.kn(q,r)
return!0},
$S:259}
A.SD.prototype={
$1(a){var s=a.e
s.toString
return A.hx(s)===this.a},
$S:11}
A.SE.prototype={
$1(a){var s=a.gaI(a).eO(this.a)
return!s.gN(s)},
$S:11}
A.SF.prototype={
$2(a,b){var s=this.a
return B.d.b_(Math.abs(a.gaI(a).gaN().a-s.gaI(s).gaN().a),Math.abs(b.gaI(b).gaN().a-s.gaI(s).gaN().a))},
$S:30}
A.SG.prototype={
$1(a){var s=a.e
s.toString
return A.hx(s)===this.a},
$S:11}
A.SH.prototype={
$1(a){var s=a.gaI(a).eO(this.a)
return!s.gN(s)},
$S:11}
A.SI.prototype={
$2(a,b){var s=this.a
return B.d.b_(Math.abs(a.gaI(a).gaN().b-s.gaI(s).gaN().b),Math.abs(b.gaI(b).gaN().b-s.gaI(s).gaN().b))},
$S:30}
A.cA.prototype={
gG5(){var s=this.d
if(s==null){s=this.c.e
s.toString
s=this.d=new A.a8p().$1(s)}s.toString
return s}}
A.a8o.prototype={
$1(a){var s=a.gG5()
return A.t0(s,A.ah(s).c)},
$S:260}
A.a8q.prototype={
$2(a,b){switch(this.a.a){case 1:return B.d.b_(a.b.a,b.b.a)
case 0:return B.d.b_(b.b.c,a.b.c)}},
$S:98}
A.a8p.prototype={
$1(a){var s,r,q=A.a([],t.AG),p=t.I,o=a.iU(p)
for(;o!=null;){s=o.f
s.toString
q.push(p.a(s))
s=A.aiS(o,1)
if(s==null)o=null
else{s=s.y
r=s==null?null:s.j(0,A.aA(p))
o=r}}return q},
$S:262}
A.hM.prototype={
gaI(a){var s,r,q,p,o=this
if(o.b==null)for(s=o.a,s=new A.aE(s,new A.a8m(),A.ah(s).h("aE<1,y>")),s=new A.dk(s,s.gp(s)),r=A.n(s).c;s.q();){q=s.d
if(q==null)q=r.a(q)
p=o.b
if(p==null){o.b=q
p=q}o.b=p.nc(q)}s=o.b
s.toString
return s}}
A.a8m.prototype={
$1(a){return a.b},
$S:263}
A.a8n.prototype={
$2(a,b){switch(this.a.a){case 1:return B.d.b_(a.gaI(a).a,b.gaI(b).a)
case 0:return B.d.b_(b.gaI(b).c,a.gaI(a).c)}},
$S:264}
A.uj.prototype={
Pe(a){var s,r,q,p,o,n=B.b.gJ(a).a,m=t.hY,l=A.a([],m),k=A.a([],t.lZ)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.P)(a),++r){q=a[r]
p=q.a
if(p==n){l.push(q)
continue}k.push(new A.hM(l))
l=A.a([q],m)
n=p}if(l.length!==0)k.push(new A.hM(l))
for(m=k.length,r=0;r<k.length;k.length===m||(0,A.P)(k),++r){s=k[r].a
if(s.length===1)continue
o=B.b.gJ(s).a
o.toString
A.ai9(s,o)}return k},
Dn(a){var s,r,q,p
A.mI(a,new A.a_j(),t.dP)
s=B.b.gJ(a)
r=new A.a_k().$2(s,a)
if(J.bG(r)<=1)return s
q=A.asc(r)
q.toString
A.ai9(r,q)
p=this.Pe(r)
if(p.length===1)return B.b.gJ(B.b.gJ(p).a)
A.asb(p,q)
return B.b.gJ(B.b.gJ(p).a)},
Kf(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a.length<=1)return a
s=A.a([],t.hY)
for(r=a.length,q=t.n2,p=t.I,o=0;o<a.length;a.length===r||(0,A.P)(a),++o){n=a[o]
m=n.gaI(n)
l=n.e.y
k=l==null?null:l.j(0,A.aA(p))
if(k==null)l=null
else{l=k.f
l.toString}q.a(l)
s.push(new A.cA(l==null?null:l.w,m,n))}j=A.a([],t.i4)
i=this.Dn(s)
j.push(i.c)
B.b.u(s,i)
for(;s.length!==0;){h=this.Dn(s)
j.push(h.c)
B.b.u(s,h)}return j}}
A.a_j.prototype={
$2(a,b){return B.d.b_(a.b.b,b.b.b)},
$S:98}
A.a_k.prototype={
$2(a,b){var s=a.b,r=A.ah(b).h("aJ<1>")
return A.ay(new A.aJ(b,new A.a_l(new A.y(-1/0,s.b,1/0,s.d)),r),!0,r.h("q.E"))},
$S:265}
A.a_l.prototype={
$1(a){var s=a.b.eO(this.a)
return!s.gN(s)},
$S:266}
A.rx.prototype={
ar(){return new A.KY(B.n)}}
A.KY.prototype={
aE(){this.aZ()
this.d=A.acG(!1,"FocusTraversalGroup",!0,!0,null,null,!0)},
m(){var s=this.d
if(s!=null)s.m()
this.aR()},
M(a){var s=null,r=this.a,q=r.c,p=this.d
p.toString
return new A.pf(q,p,A.CQ(!1,!1,r.f,s,!0,!0,p,!1,s,s,s,s,s,!0),s)}}
A.pf.prototype={
bR(a){return!1}}
A.Hq.prototype={
cR(a){A.kn(a.gbP(a),B.Te)}}
A.lw.prototype={}
A.FT.prototype={
cR(a){var s=$.a6.ac$.f.f
s.e.a1(t.AB).f.D1(s,!0)}}
A.lK.prototype={}
A.GI.prototype={
cR(a){var s=$.a6.ac$.f.f
s.e.a1(t.AB).f.D1(s,!1)}}
A.BK.prototype={
cR(a){var s=$.a6.ac$.f.f,r=s.e.a1(t.AB)
r.f.a_l(s,a.a)}}
A.KZ.prototype={}
A.N0.prototype={
we(a,b){var s
this.KV(a,b)
s=this.cN$.j(0,b)
if(s!=null){s=s.a
if(!!s.fixed$length)A.a0(A.V("removeWhere"))
B.b.vg(s,new A.a8r(a),!0)}}}
A.PB.prototype={}
A.PC.prototype={}
A.dZ.prototype={
gbo(){var s,r=$.a6.ac$.z.j(0,this)
if(r instanceof A.eX){s=r.ok
s.toString
if(A.n(this).c.b(s))return s}return null}}
A.bs.prototype={
i(a){var s=this,r=s.a,q=r!=null?" "+r:""
if(A.z(s)===B.Z2)return"[GlobalKey#"+A.bB(s)+q+"]"
return"["+("<optimized out>#"+A.bB(s))+q+"]"}}
A.jp.prototype={
k(a,b){if(b==null)return!1
if(J.S(b)!==A.z(this))return!1
return this.$ti.b(b)&&b.a===this.a},
gt(a){return A.ky(this.a)},
i(a){var s="GlobalObjectKey",r=B.c.YN(s,"<State<StatefulWidget>>")?B.c.ai(s,0,-8):s
return"["+r+" "+("<optimized out>#"+A.bB(this.a))+"]"}}
A.k.prototype={
bQ(){var s=this.a
return s==null?"Widget":"Widget-"+s.i(0)},
k(a,b){if(b==null)return!1
return this.LC(0,b)},
gt(a){return A.L.prototype.gt.call(this,this)}}
A.bb.prototype={
bK(a){return new A.Ii(this,B.a0)}}
A.a5.prototype={
bK(a){return A.ar7(this)}}
A.O6.prototype={
D(){return"_StateLifecycle."+this.b}}
A.ak.prototype={
aE(){},
b0(a){},
ev(){},
av(a){a.$0()
this.c.fp()},
d3(){},
ca(){},
m(){},
b2(){}}
A.aP.prototype={}
A.da.prototype={
bK(a){return new A.lx(this,B.a0,A.n(this).h("lx<da.T>"))}}
A.b5.prototype={
bK(a){return A.aoG(this)}}
A.ax.prototype={
aH(a,b){},
n2(a){}}
A.DD.prototype={
bK(a){return new A.DC(this,B.a0)}}
A.aZ.prototype={
bK(a){return A.ar_(this)}}
A.e2.prototype={
bK(a){return A.app(this)}}
A.mq.prototype={
D(){return"_ElementLifecycle."+this.b}}
A.Lh.prototype={
Ew(a){a.aM(new A.a75(this,a))
a.nZ()},
VO(){var s,r,q,p=this
p.a=!0
r=p.b
q=A.ay(r,!0,A.n(r).c)
B.b.cX(q,A.abf())
s=q
r.T(0)
try{r=s
new A.cx(r,A.aM(r).h("cx<1>")).Y(0,p.gVM())}finally{p.a=!1}},
E(a,b){if(b.w===B.c6){b.d3()
b.aM(A.abg())}this.b.E(0,b)}}
A.a75.prototype={
$1(a){this.a.Ew(a)},
$S:4}
A.Ru.prototype={
zr(a){var s=this
if(a.at){s.e=!0
return}if(!s.d&&s.a!=null){s.d=!0
s.a.$0()}s.c.push(a)
a.at=!0},
HH(a){try{a.$0()}finally{}},
pS(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=b==null
if(f&&h.c.length===0)return
try{h.d=!0
if(!f){g.a=null
h.e=!1
try{b.$0()}finally{}}f=h.c
B.b.cX(f,A.abf())
h.e=!1
g.b=f.length
g.c=0
for(n=0;n<g.b;){s=f[n]
r=!1
if(r){n=s.f
n.toString
m=n instanceof A.bP?A.cL(n):null
A.adx(A.aA(m==null?A.aM(n):m).i(0),null,null)}try{s.Ii()}catch(l){q=A.au(l)
p=A.aG(l)
n=A.bm("while rebuilding dirty elements")
k=$.f7()
if(k!=null)k.$1(new A.bz(q,p,"widgets library",n,new A.Rv(g,h,s),!1))}if(r)A.adw()
n=++g.c
k=g.b
j=f.length
if(k>=j){k=h.e
k.toString}else k=!0
if(k){if(!!f.immutable$list)A.a0(A.V("sort"))
n=j-1
if(n-0<=32)A.Ic(f,0,n,A.abf())
else A.Ib(f,0,n,A.abf())
n=h.e=!1
g.b=f.length
while(!0){k=g.c
if(!(k>0?f[k-1].as:n))break
g.c=k-1}n=k}}}finally{for(f=h.c,n=f.length,i=0;i<n;++i){o=f[i]
o.at=!1}B.b.T(f)
h.d=!1
h.e=null}},
WZ(a){return this.pS(a,null)},
Z3(){var s,r,q
try{this.HH(this.b.gVN())}catch(q){s=A.au(q)
r=A.aG(q)
A.aeh(A.Cv("while finalizing the widget tree"),s,r,null)}finally{}},
a15(a,b){try{a.b=b
a.ev()}finally{}}}
A.Rv.prototype={
$0(){var s=null,r=A.a([],t.F),q=this.a,p=q.c,o=this.b.c.length,n="The element being rebuilt at the time was index "+p
q=""+q.b
if(p<o)J.kA(r,A.ji(n+" of "+q,this.c,!0,B.b8,s,!1,s,s,B.az,s,!1,!0,!0,B.bn,s,t.h))
else J.kA(r,A.V1(n+" of "+q+", but _dirtyElements only had "+o+" entries. This suggests some confusion in the framework internals."))
return r},
$S:14}
A.tM.prototype={
w7(){var s=this.a
this.c=new A.a86(this,s==null?null:s.c)}}
A.a86.prototype={
cK(a){var s=this.a.HW(a)
if(s)return
s=this.b
if(s!=null)s.cK(a)}}
A.aR.prototype={
NW(a){},
k(a,b){if(b==null)return!1
return this===b},
ev(){var s=this
if(A.aiK(s.b,s.f)){s.fp()
s.b=null}s.aM(new A.Ux(s))
s.b=null},
ga5(){var s,r
for(s=this;s!=null;){r={}
if(s.w===B.BU)break
else if(s instanceof A.bt)return s.ga5()
else{r.a=null
s.aM(new A.Uy(r))
s=r.a}}return null},
Yu(a){var s=null
return A.ji(a,this,!0,B.b8,s,!1,s,s,B.az,s,!1,!0,!0,B.bn,s,t.h)},
aM(a){},
du(a,b,c){var s,r,q=this
if(b==null){if(a!=null)q.wp(a)
return null}if(a!=null){s=a.f.k(0,b)
if(s){if(!J.f(a.d,c))q.J2(a,c)
s=a}else{s=a.f
s.toString
if(A.z(s)===A.z(b)&&J.f(s.a,b.a)){if(!J.f(a.d,c))q.J2(a,c)
a.bc(0,b)
s=a}else{q.wp(a)
r=q.qN(b,c)
s=r}}}else{r=q.qN(b,c)
s=r}return s},
eR(a,b){var s,r,q,p=this
p.a=a
p.d=b
p.w=B.c6
s=a!=null
if(s){r=a.e
r===$&&A.b();++r}else r=1
p.e=r
if(s)p.r=a.r
q=p.f.a
if(q instanceof A.dZ)p.r.z.l(0,q,p)
p.vG()
p.w7()},
bc(a,b){this.f=b},
J2(a,b){new A.Uz(b).$1(a)},
vM(a){this.d=a},
EG(a){var s=a+1,r=this.e
r===$&&A.b()
if(r<s){this.e=s
this.aM(new A.Uu(s))}},
mX(){this.aM(new A.Uw())
this.d=null},
pO(a){this.aM(new A.Uv(a))
this.d=a},
UG(a,b){var s,r,q=$.a6.ac$.z.j(0,a)
if(q==null)return null
s=q.f
s.toString
if(!(A.z(s)===A.z(b)&&J.f(s.a,b.a)))return null
r=q.a
if(r!=null){r.iz(q)
r.wp(q)}this.r.b.b.u(0,q)
return q},
qN(a,b){var s,r,q,p,o,n,m=this,l=!1
if(l)A.adx(A.z(a).i(0),null,null)
try{s=a.a
if(s instanceof A.dZ){r=m.UG(s,a)
if(r!=null){o=r
o.a=m
o.toString
n=m.e
n===$&&A.b()
o.EG(n)
o.ca()
o.aM(A.ajJ())
o.pO(b)
q=m.du(r,a,b)
o=q
o.toString
return o}}p=a.bK(0)
p.eR(m,b)
return p}finally{if(l)A.adw()}},
wp(a){a.a=null
a.mX()
this.r.b.E(0,a)},
iz(a){},
ca(){var s=this,r=s.z,q=r==null,p=!q&&r.a!==0||s.Q
s.w=B.c6
if(!q)r.T(0)
s.Q=!1
s.vG()
s.w7()
if(s.as)s.r.zr(s)
if(p)s.b2()},
d3(){var s,r,q=this,p=q.z
if(p!=null&&p.a!==0)for(p=new A.kc(p,p.m0()),s=A.n(p).c;p.q();){r=p.d;(r==null?s.a(r):r).ba.u(0,q)}q.y=null
q.w=B.a_5},
nZ(){var s=this,r=s.f,q=r==null?null:r.a
if(q instanceof A.dZ){r=s.r.z
if(J.f(r.j(0,q),s))r.u(0,q)}s.z=s.f=null
s.w=B.BU},
gde(a){var s,r=this.ga5()
if(r instanceof A.C){s=r.k3
s.toString
return s}return null},
wu(a,b){var s=this.z;(s==null?this.z=A.cF(t.tx):s).E(0,a)
a.IZ(this,b)
s=a.f
s.toString
return t.sg.a(s)},
a1(a){var s=this.y,r=s==null?null:s.j(0,A.aA(a))
if(r!=null)return a.a(this.wu(r,null))
this.Q=!0
return null},
iU(a){var s=this.y
return s==null?null:s.j(0,A.aA(a))},
w7(){var s=this.a
this.c=s==null?null:s.c},
vG(){var s=this.a
this.y=s==null?null:s.y},
GD(a){var s,r,q,p=this.a
while(!0){s=p==null
if(!s){r=p.f
r.toString
q=r instanceof A.bP?A.cL(r):null
r=A.aA(q==null?A.aM(r):q)!==A.aA(a)}else r=!1
if(!r)break
p=p.a}if(s)s=null
else{s=p.f
s.toString}return a.h("0?").a(s)},
jx(a){var s,r,q=this.a
for(;s=q==null,!s;){if(q instanceof A.eX){r=q.ok
r.toString
r=a.b(r)}else r=!1
if(r)break
q=q.a}t.Ci.a(q)
if(s)s=null
else{s=q.ok
s.toString}return a.h("0?").a(s)},
qx(a){var s=this.a
for(;s!=null;){if(s instanceof A.bt&&a.b(s.ga5()))return a.a(s.ga5())
s=s.a}return null},
yY(a){var s=this.a
while(!0){if(!(s!=null&&a.$1(s)))break
s=s.a}},
b2(){this.fp()},
cK(a){var s=this.c
if(s!=null)s.cK(a)},
bQ(){var s=this.f
s=s==null?null:s.bQ()
return s==null?"<optimized out>#"+A.bB(this)+"(DEFUNCT)":s},
fp(){var s=this
if(s.w!==B.c6)return
if(s.as)return
s.as=!0
s.r.zr(s)},
rq(a){var s
if(this.w===B.c6)s=!this.as&&!a
else s=!0
if(s)return
this.hb()},
Ii(){return this.rq(!1)},
hb(){this.as=!1},
$iai:1}
A.Ux.prototype={
$1(a){a.b=this.a.b
a.ev()},
$S:4}
A.Uy.prototype={
$1(a){this.a.a=a},
$S:4}
A.Uz.prototype={
$1(a){a.vM(this.a)
if(!(a instanceof A.bt))a.aM(this)},
$S:4}
A.Uu.prototype={
$1(a){a.EG(this.a)},
$S:4}
A.Uw.prototype={
$1(a){a.mX()},
$S:4}
A.Uv.prototype={
$1(a){a.pO(this.a)},
$S:4}
A.Cw.prototype={
aB(a){var s=this.d,r=new A.H4(s,A.aq())
r.aD()
r.O5(s)
return r}}
A.qD.prototype={
eR(a,b){this.A2(a,b)
this.uo()},
uo(){this.Ii()},
hb(){var s,r,q,p,o,n,m=this,l=null
try{l=m.b9()
m.f.toString}catch(o){s=A.au(o)
r=A.aG(o)
n=A.acE(A.aeh(A.bm("building "+m.i(0)),s,r,new A.S_(m)))
l=n}finally{m.tj()}try{m.ay=m.du(m.ay,l,m.d)}catch(o){q=A.au(o)
p=A.aG(o)
n=A.acE(A.aeh(A.bm("building "+m.i(0)),q,p,new A.S0(m)))
l=n
m.ay=m.du(null,l,m.d)}},
aM(a){var s=this.ay
if(s!=null)a.$1(s)},
iz(a){this.ay=null
this.k5(a)}}
A.S_.prototype={
$0(){var s=A.a([],t.F)
return s},
$S:14}
A.S0.prototype={
$0(){var s=A.a([],t.F)
return s},
$S:14}
A.Ii.prototype={
b9(){var s=this.f
s.toString
return t.yB.a(s).M(this)},
bc(a,b){this.oo(0,b)
this.rq(!0)}}
A.eX.prototype={
b9(){return this.ok.M(this)},
ev(){var s=this
if(A.aiK(s.b,s.f))s.ok.ev()
s.KS()},
uo(){this.ok.aE()
this.ok.b2()
this.KD()},
hb(){var s=this
if(s.p1){s.ok.b2()
s.p1=!1}s.KE()},
bc(a,b){var s,r,q,p=this
p.oo(0,b)
s=p.ok
r=s.a
r.toString
q=p.f
q.toString
s.a=t.aw.a(q)
s.b0(r)
p.rq(!0)},
ca(){this.KQ()
this.ok.ca()
this.fp()},
d3(){this.ok.d3()
this.A_()},
nZ(){var s=this
s.tk()
s.ok.m()
s.ok=s.ok.c=null},
wu(a,b){return this.A0(a,b)},
b2(){this.KR()
this.p1=!0}}
A.ud.prototype={
b9(){var s=this.f
s.toString
return t.im.a(s).b},
bc(a,b){var s=this,r=s.f
r.toString
t.im.a(r)
s.oo(0,b)
s.yV(r)
s.rq(!0)},
yV(a){this.lf(a)}}
A.lx.prototype={
AY(a){this.aM(new A.Zd(a))},
lf(a){var s=this.f
s.toString
this.AY(this.$ti.h("da<1>").a(s))}}
A.Zd.prototype={
$1(a){if(a instanceof A.bt)this.a.mA(a.ga5())
else a.aM(this)},
$S:4}
A.eG.prototype={
vG(){var s=this,r=s.a,q=r==null?null:r.y
if(q==null)q=B.SF
r=s.f
r.toString
s.y=q.a0Y(0,A.z(r),s)},
zw(a,b){this.ba.l(0,a,b)},
IZ(a,b){this.zw(a,null)},
HT(a,b){b.b2()},
yV(a){var s=this.f
s.toString
if(t.sg.a(s).bR(a))this.LQ(a)},
lf(a){var s,r,q
for(s=this.ba,s=new A.wp(s,s.u0()),r=A.n(s).c;s.q();){q=s.d
this.HT(a,q==null?r.a(q):q)}}}
A.bt.prototype={
ga5(){var s=this.ay
s.toString
return s},
Q7(){var s=this.a
while(!0){if(!(s!=null&&!(s instanceof A.bt)))break
s=s.a}return t.bI.a(s)},
Q6(){var s,r={},q=r.a=this.a
r.b=null
while(!0){if(!(q!=null&&!(q instanceof A.bt)))break
if(q instanceof A.lx){r.b=q
break}s=q.a
r.a=s
q=s}return r.b},
eR(a,b){var s,r=this
r.A2(a,b)
s=r.f
s.toString
r.ay=t.xL.a(s).aB(r)
r.pO(b)
r.tj()},
bc(a,b){this.oo(0,b)
this.Dm()},
hb(){this.Dm()},
Dm(){var s=this,r=s.f
r.toString
t.xL.a(r).aH(s,s.ga5())
s.tj()},
a1Q(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=new A.a_t(a4),g=new A.a_u(i),f=a3.length,e=f-1,d=a2.length,c=d-1,b=d===f?a2:A.aV(f,$.aeM(),!1,t.h),a=i,a0=0,a1=0
while(!0){if(!(a1<=c&&a0<=e))break
s=h.$1(a2[a1])
r=a3[a0]
if(s!=null){f=s.f
f.toString
q=f instanceof A.bP?A.cL(f):i
d=A.aA(q==null?A.aM(f):q)
q=r instanceof A.bP?A.cL(r):i
f=!(d===A.aA(q==null?A.aM(r):q)&&J.f(f.a,r.a))}else f=!0
if(f)break
f=j.du(s,r,g.$2(a0,a))
f.toString
b[a0]=f;++a0;++a1
a=f}p=c
while(!0){o=a1<=p
if(!(o&&a0<=e))break
s=h.$1(a2[p])
r=a3[e]
if(s!=null){f=s.f
f.toString
q=f instanceof A.bP?A.cL(f):i
d=A.aA(q==null?A.aM(f):q)
q=r instanceof A.bP?A.cL(r):i
f=!(d===A.aA(q==null?A.aM(r):q)&&J.f(f.a,r.a))}else f=!0
if(f)break;--p;--e}if(o){n=A.A(t.qI,t.h)
for(;a1<=p;){s=h.$1(a2[a1])
if(s!=null){f=s.f.a
if(f!=null)n.l(0,f,s)
else{s.a=null
s.mX()
f=j.r.b
if(s.w===B.c6){s.d3()
s.aM(A.abg())}f.b.E(0,s)}}++a1}o=!0}else n=i
for(;a0<=e;a=f){r=a3[a0]
if(o){m=r.a
if(m!=null){s=n.j(0,m)
if(s!=null){f=s.f
f.toString
q=f instanceof A.bP?A.cL(f):i
d=A.aA(q==null?A.aM(f):q)
q=r instanceof A.bP?A.cL(r):i
if(d===A.aA(q==null?A.aM(r):q)&&J.f(f.a,m))n.u(0,m)
else s=i}}else s=i}else s=i
f=j.du(s,r,g.$2(a0,a))
f.toString
b[a0]=f;++a0}e=a3.length-1
while(!0){if(!(a1<=c&&a0<=e))break
f=j.du(a2[a1],a3[a0],g.$2(a0,a))
f.toString
b[a0]=f;++a0;++a1
a=f}if(o&&n.a!==0)for(f=n.gaV(n),f=new A.dJ(J.aw(f.a),f.b),d=A.n(f).z[1];f.q();){l=f.a
if(l==null)l=d.a(l)
if(!a4.B(0,l)){l.a=null
l.mX()
k=j.r.b
if(l.w===B.c6){l.d3()
l.aM(A.abg())}k.b.E(0,l)}}return b},
d3(){this.A_()},
nZ(){var s=this,r=s.f
r.toString
t.xL.a(r)
s.tk()
r.n2(s.ga5())
s.ay.m()
s.ay=null},
vM(a){var s,r=this,q=r.d
r.KP(a)
s=r.CW
s.toString
s.iG(r.ga5(),q,r.d)},
pO(a){var s,r,q=this
q.d=a
s=q.CW=q.Q7()
if(s!=null)s.iE(q.ga5(),a)
r=q.Q6()
if(r!=null){s=r.f
s.toString
t.yL.a(s).mA(q.ga5())}},
mX(){var s=this,r=s.CW
if(r!=null){r.iN(s.ga5(),s.d)
s.CW=null}s.d=null},
iE(a,b){},
iG(a,b,c){},
iN(a,b){}}
A.a_t.prototype={
$1(a){var s=this.a.B(0,a)
return s?null:a},
$S:267}
A.a_u.prototype={
$2(a,b){return new A.nx(b,a,t.wx)},
$S:268}
A.uB.prototype={
eR(a,b){this.tt(a,b)}}
A.DC.prototype={
iz(a){this.k5(a)},
iE(a,b){},
iG(a,b,c){},
iN(a,b){}}
A.v4.prototype={
aM(a){var s=this.p1
if(s!=null)a.$1(s)},
iz(a){this.p1=null
this.k5(a)},
eR(a,b){var s,r,q=this
q.tt(a,b)
s=q.p1
r=q.f
r.toString
q.p1=q.du(s,t.Dp.a(r).c,null)},
bc(a,b){var s,r,q=this
q.lP(0,b)
s=q.p1
r=q.f
r.toString
q.p1=q.du(s,t.Dp.a(r).c,null)},
iE(a,b){var s=this.ay
s.toString
t.fB.a(s).saO(a)},
iG(a,b,c){},
iN(a,b){var s=this.ay
s.toString
t.fB.a(s).saO(null)}}
A.ek.prototype={
ga5(){return t.gz.a(A.bt.prototype.ga5.call(this))},
gFv(a){var s=this.p1
s===$&&A.b()
return new A.aJ(s,new A.Yu(this),A.ah(s).h("aJ<1>"))},
iE(a,b){var s=this.ga5(),r=b.a
s.xo(0,a,r==null?null:r.ga5())},
iG(a,b,c){var s=this.ga5(),r=c.a
s.r4(a,r==null?null:r.ga5())},
iN(a,b){this.ga5().u(0,a)},
aM(a){var s,r,q,p,o=this.p1
o===$&&A.b()
s=o.length
r=this.p2
q=0
for(;q<s;++q){p=o[q]
if(!r.B(0,p))a.$1(p)}},
iz(a){this.p2.E(0,a)
this.k5(a)},
qN(a,b){return this.A1(a,b)},
eR(a,b){var s,r,q,p,o,n,m,l=this
l.tt(a,b)
s=l.f
s.toString
s=t.tk.a(s).c
r=s.length
q=A.aV(r,$.aeM(),!1,t.h)
for(p=t.wx,o=null,n=0;n<r;++n,o=m){m=l.A1(s[n],new A.nx(o,n,p))
q[n]=m}l.p1=q},
bc(a,b){var s,r,q,p=this
p.lP(0,b)
s=p.f
s.toString
t.tk.a(s)
r=p.p1
r===$&&A.b()
q=p.p2
p.p1=p.a1Q(r,s.c,q)
q.T(0)}}
A.Yu.prototype={
$1(a){return!this.a.p2.B(0,a)},
$S:38}
A.nx.prototype={
k(a,b){if(b==null)return!1
if(J.S(b)!==A.z(this))return!1
return b instanceof A.nx&&this.b===b.b&&J.f(this.a,b.a)},
gt(a){return A.U(this.b,this.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.M3.prototype={}
A.M6.prototype={
bK(a){return A.a0(A.c_(null))}}
A.O7.prototype={}
A.la.prototype={}
A.cd.prototype={
FJ(){return this.a.$0()},
Hd(a){return this.b.$1(a)}}
A.D0.prototype={
M(a){var s=this,r=A.A(t.n,t.ob),q=A.d8(a),p=q==null?null:q.ay
if(s.d==null)if(s.e==null)if(s.f==null)if(s.r==null)q=!1
else q=!0
else q=!0
else q=!0
else q=!0
if(q)r.l(0,B.BL,new A.cd(new A.VM(s),new A.VN(s,p),t.g0))
if(s.ay==null)q=!1
else q=!0
if(q)r.l(0,B.YV,new A.cd(new A.VO(s),new A.VS(s,p),t.da))
if(s.cy==null)q=!1
else q=!0
if(q)r.l(0,B.BI,new A.cd(new A.VT(s),new A.VU(s,p),t.on))
if(s.rx!=null||s.ry!=null||s.to!=null||!1)r.l(0,B.lE,new A.cd(new A.VV(s),new A.VW(s,p),t.n_))
if(s.x2!=null||s.y1!=null||s.y2!=null||s.bB!=null)r.l(0,B.lD,new A.cd(new A.VX(s),new A.VY(s,p),t.ta))
if(s.bk!=null||s.af!=null||s.aa!=null||!1)r.l(0,B.lC,new A.cd(new A.VZ(s),new A.VP(s,p),t.uX))
q=!1
if(q)r.l(0,B.YY,new A.cd(new A.VQ(s),new A.VR(s,p),t.p1))
return new A.jS(s.c,r,s.aq,s.aU,null,null)}}
A.VM.prototype={
$0(){return A.arf(this.a,null)},
$S:269}
A.VN.prototype={
$1(a){var s=this.a
a.y1=s.d
a.y2=s.e
a.bB=s.f
a.bk=s.r
a.aT=a.aP=a.al=a.ak=a.aa=a.af=a.ba=null
a.b=this.b},
$S:270}
A.VO.prototype={
$0(){var s=t.S
return new A.fi(A.A(s,t.Aj),this.a,null,A.A(s,t.V))},
$S:271}
A.VS.prototype={
$1(a){a.e=null
a.f=this.a.ay
a.r=null
a.b=this.b},
$S:272}
A.VT.prototype={
$0(){return A.ap1(this.a,null,null)},
$S:273}
A.VU.prototype={
$1(a){a.k3=a.k2=null
a.k4=this.a.cy
a.ba=a.bk=a.bB=a.y2=a.y1=a.xr=a.x2=a.x1=a.to=a.ry=a.rx=a.RG=a.R8=a.p4=a.p3=a.p2=a.p1=a.ok=null
a.b=this.b},
$S:274}
A.VV.prototype={
$0(){return A.ahV(this.a,null)},
$S:99}
A.VW.prototype={
$1(a){var s
a.as=null
s=this.a
a.at=s.rx
a.ax=s.ry
a.ay=s.to
a.ch=null
a.Q=s.b3
a.b=this.b},
$S:116}
A.VX.prototype={
$0(){return A.acO(this.a,null)},
$S:101}
A.VY.prototype={
$1(a){var s=this.a
a.as=s.x2
a.at=null
a.ax=s.y1
a.ay=s.y2
a.ch=s.bB
a.Q=s.b3
a.b=this.b},
$S:102}
A.VZ.prototype={
$0(){var s=t.S,r=A.cF(s)
return new A.fz(B.bo,A.aeu(),B.c5,A.A(s,t.ki),A.b7(s),A.A(s,t.R),r,this.a,null,A.A(s,t.V))},
$S:279}
A.VP.prototype={
$1(a){var s=this.a
a.as=s.bk
a.at=null
a.ax=s.af
a.ay=s.aa
a.ch=null
a.Q=s.b3
a.b=this.b},
$S:280}
A.VQ.prototype={
$0(){var s=t.S,r=A.cF(s)
return new A.fl(B.lM,A.A(s,t.R),r,this.a,null,A.A(s,t.V))},
$S:281}
A.VR.prototype={
$1(a){a.ax=a.as=a.at=a.Q=null
a.b=this.b},
$S:282}
A.jS.prototype={
ar(){return new A.o3(B.RZ,B.n)}}
A.o3.prototype={
aE(){var s,r,q=this
q.aZ()
s=q.a
r=s.r
q.e=r==null?new A.Kg(q):r
q.vz(s.d)},
b0(a){var s,r=this
r.bz(a)
if(!(a.r==null&&r.a.r==null)){s=r.a.r
r.e=s==null?new A.Kg(r):s}r.vz(r.a.d)},
a1k(a){if(this.a.f)return
t.qS.a(this.c.ga5()).sa1V(a)},
m(){for(var s=this.d,s=J.aw(s.gaV(s));s.q();)s.gG(s).m()
this.d=null
this.aR()},
vz(a){var s,r,q,p,o=this,n=o.d
n.toString
o.d=A.A(t.n,t.oi)
for(s=J.aw(a.gbp(a));s.q();){r=s.gG(s)
q=o.d
q.toString
p=n.j(0,r)
q.l(0,r,p==null?a.j(0,r).FJ():p)
q=a.j(0,r)
q.toString
r=o.d.j(0,r)
r.toString
q.Hd(r)}for(s=J.aw(n.gbp(n));s.q();){r=s.gG(s)
if(!o.d.S(0,r))n.j(0,r).m()}},
Qr(a){var s,r
for(s=this.d,s=J.aw(s.gaV(s));s.q();){r=s.gG(s)
r.d.l(0,a.gbN(),a.gc4(a))
if(r.eP(a))r.fN(a)
else r.no(a)}},
S0(a){var s,r
for(s=this.d,s=J.aw(s.gaV(s));s.q();){r=s.gG(s)
r.d.l(0,a.gbN(),a.gc4(a))
if(r.a_J(a))r.vU(a)}},
W4(a){this.e.w6(a)},
M(a){var s,r,q,p=this,o=null,n=p.a,m=n.e,l=m==null
if(l)s=n.c==null?B.e3:B.bL
else s=m
r=n.c
q=A.DI(s,r,o,p.gQq(),p.gS_(),o,o)
if(!n.f){if(l)n=r==null?B.e3:B.bL
else n=m
q=new A.L4(n,p.gW3(),q,o)}return q}}
A.L4.prototype={
aB(a){var s=new A.iw(B.bL,null,A.aq())
s.aD()
s.saO(null)
s.v=this.e
this.f.$1(s)
return s},
aH(a,b){b.v=this.e
this.f.$1(b)}}
A.a1t.prototype={
i(a){return"SemanticsGestureDelegate()"}}
A.Kg.prototype={
w6(a){var s=this,r=s.a.d
r.toString
a.siJ(s.QP(r))
a.sjI(s.QG(r))
a.sa0t(s.QE(r))
a.sa0z(s.QQ(r))},
QP(a){var s=t.f3.a(a.j(0,B.BL))
if(s==null)return null
return new A.a6h(s)},
QG(a){var s=t.yA.a(a.j(0,B.BI))
if(s==null)return null
return new A.a6g(s)},
QE(a){var s=t.oq.a(a.j(0,B.lD)),r=t.rR.a(a.j(0,B.lC)),q=s==null?null:new A.a6d(s),p=r==null?null:new A.a6e(r)
if(q==null&&p==null)return null
return new A.a6f(q,p)},
QQ(a){var s=t.iC.a(a.j(0,B.lE)),r=t.rR.a(a.j(0,B.lC)),q=s==null?null:new A.a6i(s),p=r==null?null:new A.a6j(r)
if(q==null&&p==null)return null
return new A.a6k(q,p)}}
A.a6h.prototype={
$0(){var s=this.a,r=s.y1
if(r!=null)r.$1(new A.oH(B.j,B.j))
r=s.y2
if(r!=null)r.$1(new A.oI())
s=s.bB
if(s!=null)s.$0()},
$S:0}
A.a6g.prototype={
$0(){var s=this.a,r=s.ok
if(r!=null)r.$1(B.Ql)
r=s.k4
if(r!=null)r.$0()
s=s.p3
if(s!=null)s.$1(B.Qj)},
$S:0}
A.a6d.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.i6(B.j))
r=s.at
if(r!=null)r.$1(new A.h2(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fj(B.c4,0))},
$S:19}
A.a6e.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.i6(B.j))
r=s.at
if(r!=null)r.$1(new A.h2(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fj(B.c4,null))},
$S:19}
A.a6f.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(a)
s=this.b
if(s!=null)s.$1(a)},
$S:19}
A.a6i.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.i6(B.j))
r=s.at
if(r!=null)r.$1(new A.h2(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fj(B.c4,0))},
$S:19}
A.a6j.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.i6(B.j))
r=s.at
if(r!=null)r.$1(new A.h2(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fj(B.c4,null))},
$S:19}
A.a6k.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(a)
s=this.b
if(s!=null)s.$1(a)},
$S:19}
A.lh.prototype={
D(){return"HeroFlightDirection."+this.b}}
A.lf.prototype={
ar(){return new A.pk(new A.bs(null,t.C),B.n)}}
A.Wr.prototype={
$2(a,b){var s=a.f
s.toString
t.tV.a(s)
s=a.ok
s.toString
t.BJ.a(s)
if(!this.b||!1)this.a.l(0,b,s)
else s.Gl()},
$S:285}
A.Ws.prototype={
$1(a){var s,r,q=this,p=a.f
p.toString
if(p instanceof A.lf){t.jw.a(a)
s=p.c
if(A.ad3(a)===q.a)q.b.$2(a,s)
else{r=A.Yj(a,t.X)
if(r!=null)p=r.gjB()
else p=!1
if(p)q.b.$2(a,s)}}a.aM(q)},
$S:4}
A.pk.prototype={
tb(a){var s,r=this
r.f=a
s=r.c.ga5()
s.toString
r.av(new A.a6X(r,t.x.a(s)))},
ta(){return this.tb(!1)},
kQ(a){var s=this
if(a||s.e==null)return
s.e=null
if(s.c!=null)s.av(new A.a6W())},
Gl(){return this.kQ(!1)},
M(a){var s,r=this,q=null,p=r.e,o=p==null,n=!o
if(n)r.a.toString
if(n&&!r.f){o=p.a
return A.ep(q,p.b,o)}s=o?q:p.a
p=o?q:p.b
return A.ep(new A.tP(n,new A.oP(o,new A.jz(r.a.e,r.d),q),q),p,s)}}
A.a6X.prototype={
$0(){var s=this.b.k3
s.toString
this.a.e=s},
$S:0}
A.a6W.prototype={
$0(){},
$S:0}
A.a6T.prototype={
gbE(a){var s,r=this
if(r.a===B.bJ){s=r.e.fy
s.toString}else{s=r.d.fy
s.toString}return A.ez(B.cc,s,r.z?null:new A.rt(B.cc))},
mS(a,b){var s
this.r.a.toString
s=this.w.$2(a,b)
return s==null?new A.uk(a,b):s},
gGO(){var s,r,q=this,p=q.Q
if(p===$){s=q.f.c
s.toString
r=A.ai3(s,$.a6.ac$.z.j(0,q.d.k2))
q.Q!==$&&A.be()
q.Q=r
p=r}return p},
grC(){var s,r,q=this,p=q.as
if(p===$){s=q.r.c
s.toString
r=A.ai3(s,$.a6.ac$.z.j(0,q.e.k2))
q.as!==$&&A.be()
q.as=r
p=r}return p},
gjE(){var s,r,q=this,p=q.at
if(p===$){s=q.grC()
if(s.gHt(s))if(!q.z){s=q.gGO()
s=s.gHt(s)
r=s}else r=!0
else r=!1
q.at!==$&&A.be()
p=q.at=r}return p},
i(a){var s,r,q=this,p=q.a.i(0),o=q.f,n=o.a.c.i(0),m=q.d.b.i(0),l=q.e.b.i(0)
o=o.i(0)
s=q.r.i(0)
r=q.gjE()?"":", INVALID"
return"_HeroFlightManifest("+p+" tag: "+n+" from route: "+m+" to route: "+l+" with hero: "+o+" to "+s+")"+r}}
A.iO.prototype={
OL(a){var s,r,q,p,o=this,n=o.c
if(n==null){n=o.f
n===$&&A.b()
s=n.gbE(n)
r=o.f
q=r.f.c
q.toString
p=r.r.c
p.toString
p=o.c=n.x.$5(a,s,r.a,q,p)
n=p}s=o.e
s===$&&A.b()
return A.mL(s,new A.a6U(o),n)},
Dl(a){var s,r=this,q=a===B.U
if(q||a===B.I){s=r.e
s===$&&A.b()
s.saS(0,null)
r.r.ln(0)
r.r=null
s=r.f
s===$&&A.b()
s.f.kQ(q)
r.f.r.kQ(a===B.I)
r.a.$1(r)
r.e.F(0,r.gHX())}},
Cl(a){var s=this,r=s.f
r===$&&A.b()
r=r.d.a
if((r==null?null:r.CW.a)!==!0){s.Dl(a)
return}if(s.x)return
r.toString
s.x=!0
r.CW.V(0,new A.a6V(s,r))},
a0y(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(!h.w){s=h.f
s===$&&A.b()
s=s.r.c!=null}else s=!1
if(s){s=h.f
s===$&&A.b()
r=t.av.a(s.r.c.ga5())}else r=null
if(r!=null&&r.b!=null&&r.k3!=null){s=h.f
s===$&&A.b()
s=$.a6.ac$.z.j(0,s.e.k2)
s=s==null?null:s.ga5()
q=A.ce(r.bv(0,t.av.a(s)),B.j)}else q=null
s=q!=null
if(s&&isFinite(q.a)&&isFinite(q.b)){p=h.b
p===$&&A.b()
p=p.b
if(!J.f(q,new A.u(p.a,p.b))){p=h.b
o=p.b
n=o.c
m=o.a
l=o.d
o=o.b
k=q.a
j=q.b
i=h.f
i===$&&A.b()
h.b=i.mS(p.a,new A.y(k,j,k+(n-m),j+(l-o)))}}else{p=h.d
if(p.gaW(p)===B.U){p=h.e
p===$&&A.b()
o=$.ala()
n=p.gn(p)
m=A.n(o).h("mn<aC.T>")
h.d=new A.b3(t.m.a(p),new A.mn(new A.i5(new A.id(n,1,B.aS)),o,m),m.h("b3<aC.T>"))}}if(s)s=!(isFinite(q.a)&&isFinite(q.b))
else s=!0
h.w=s},
i(a){var s,r,q,p,o,n=this.f
n===$&&A.b()
s=n.d.b
r=n.e.b
n=n.f.a.c.i(0)
q=s.i(0)
p=r.i(0)
o=this.e
o===$&&A.b()
return"HeroFlight(for: "+n+", from: "+q+", to: "+p+" "+A.h(o.c)+")"}}
A.a6U.prototype={
$2(a,b){var s,r=null,q=this.a,p=q.b
p===$&&A.b()
s=q.e
s===$&&A.b()
s=p.ag(0,s.gn(s))
s.toString
p=q.f
p===$&&A.b()
p=p.c
return A.o_(p.b-s.d,new A.h8(!0,r,A.afX(b,q.d),r),r,r,s.a,p.a-s.c,s.b,r)},
$S:286}
A.a6V.prototype={
$0(){var s,r=this.a
r.x=!1
this.b.CW.F(0,this)
s=r.e
s===$&&A.b()
r.Dl(s.gaW(s))},
$S:0}
A.rE.prototype={
qc(a,b){this.p5(b,a,B.bJ,!1)},
qb(a,b){var s=$.fQ()
A.Cz(this)
if(!s.a.get(this).CW.a)this.p5(a,b,B.bK,!1)},
qd(a,b){var s=a.gjB()
if(s)this.p5(b,a,B.bJ,!1)},
G3(a,b){this.p5(a,b,B.bK,!0)},
n1(){var s,r,q,p=$.fQ()
A.Cz(this)
if(p.a.get(this).CW.a)return
p=this.b
p=p.gaV(p)
s=A.n(p).h("aJ<q.E>")
r=A.ay(new A.aJ(p,new A.Wq(),s),!1,s.h("q.E"))
for(p=r.length,q=0;q<p;++q)r[q].Cl(B.I)},
p5(a,b,c,d){var s
if(b!=a&&b instanceof A.hl&&a instanceof A.hl){switch(c.a){case 1:s=a.fy
if(s.gn(s)===0)return
break
case 0:s=b.fy
if(s.gn(s)===1)return
break}if(d)if(c===B.bK){b.gnA()
s=!0}else s=!1
else s=!1
if(s)this.Eb(a,b,c,d)
else{s=b.fy
b.sr5(s.gn(s)===0)
$.a6.cy$.push(new A.Wp(this,a,b,c,d))}}},
Eb(b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null
b4.sr5(!1)
s=$.fQ()
A.Cz(b1)
s=s.a.get(b1)
r=s==null
if(r)q=b2
else{p=s.d
p===$&&A.b()
q=p.gbo()}if(r||q==null)return
o=s.c.ga5()
if(!(o instanceof A.C))return
n=$.a6.ac$.z.j(0,b3.k2)
m=n!=null?A.ag5(n,b6,s):B.yU
l=$.a6.ac$.z.j(0,b4.k2)
k=l!=null?A.ag5(l,b6,s):B.yU
for(s=m.gfh(m),s=s.ga9(s),r=b1.gPD(),p=b1.a,j=b1.b,i=t.Cf,h=b1.gRx(),g=t.A,f=t.Q,e=t.b,d=t.tY,c=t.a7,b=t.m,a=c.h("b3<aC.T>"),a0=t.sD;s.q();){a1=s.gG(s)
a2=a1.gdK(a1)
a3=a1.gn(a1)
a4=k.j(0,a2)
a5=j.j(0,a2)
if(a4==null)a6=b2
else{a1=o.k3
a1.toString
a4.a.toString
a3.a.toString
a6=new A.a6T(b5,q,a1,b3,b4,a3,a4,p,r,b6,a5!=null)}if(a6!=null&&a6.gjE()){k.u(0,a2)
if(a5!=null){a1=a5.f
a1===$&&A.b()
a7=a1.a
if(a7===B.bJ&&a6.a===B.bK){a1=a5.e
a1===$&&A.b()
a1.saS(0,new A.en(a6.gbE(a6),new A.bd(A.a([],g),f),0))
a1=a5.b
a1===$&&A.b()
a5.b=new A.uA(a1,a1.b,a1.a,a0)}else{a7=a7===B.bK&&a6.a===B.bJ
a8=a5.e
if(a7){a8===$&&A.b()
a1=a6.gbE(a6)
a7=a5.f
a7=a7.gbE(a7)
a7=a7.gn(a7)
a8.saS(0,new A.b3(b.a(a1),new A.aL(a7,1,c),a))
a1=a5.f
a7=a1.f
a8=a6.r
if(a7!==a8){a7.kQ(!0)
a8.ta()
a1=a5.f
a7=a5.b
a7===$&&A.b()
a5.b=a1.mS(a7.b,a6.grC())}else{a7=a5.b
a7===$&&A.b()
a5.b=a1.mS(a7.b,a7.a)}}else{a7=a5.b
a7===$&&A.b()
a8===$&&A.b()
a5.b=a1.mS(a7.ag(0,a8.gn(a8)),a6.grC())
a5.c=null
a1=a6.a
a7=a5.e
if(a1===B.bK)a7.saS(0,new A.en(a6.gbE(a6),new A.bd(A.a([],g),f),0))
else a7.saS(0,a6.gbE(a6))
a5.f.f.kQ(!0)
a5.f.r.kQ(!0)
a6.f.tb(a1===B.bJ)
a6.r.ta()
a1=a5.r.f.gbo()
if(a1!=null)a1.CV()}}a5.f=a6}else{a1=new A.iO(h,B.cR)
a7=A.a([],g)
a8=new A.bd(a7,f)
a9=new A.uc(a8,new A.bd(A.a([],e),d),0)
a9.a=B.I
a9.b=0
a9.br()
a8.b=!0
a7.push(a1.gQY())
a1.e=a9
a1.f=a6
switch(a6.a.a){case 1:a9.saS(0,new A.en(a6.gbE(a6),new A.bd(A.a([],g),f),0))
b0=!1
break
case 0:a9.saS(0,a6.gbE(a6))
b0=!0
break
default:b0=b2}a7=a1.f
a1.b=a7.mS(a7.gGO(),a1.f.grC())
a1.f.f.tb(b0)
a1.f.r.ta()
a7=a1.f
a8=new A.mg(!1,$.bq())
a8.aT$=!0
a8=new A.eO(a1.gOK(),!1,a8,new A.bs(b2,i))
a1.r=a8
a7.b.xn(0,a8)
a8=a1.e
a8.br()
a8=a8.c3$
a8.b=!0
a8.a.push(a1.gHX())
j.l(0,a2,a1)}}else if(a5!=null)a5.w=!0}for(s=J.aw(k.gaV(k));s.q();)s.gG(s).Gl()},
Ry(a){var s=a.f
s===$&&A.b()
this.b.u(0,s.f.a.c)},
PE(a,b,c,d,e){var s,r,q=e.f
q.toString
t.tV.a(q)
s=A.d8(e)
r=A.d8(d)
if(s==null||r==null)return q.e
return A.mL(b,new A.Wo(s,c,r.f,s.f,b,q),null)}}
A.Wq.prototype={
$1(a){var s=a.f
s===$&&A.b()
if(s.y)if(s.a===B.bK){s=a.e
s===$&&A.b()
s=s.gaW(s)===B.I}else s=!1
else s=!1
return s},
$S:289}
A.Wp.prototype={
$1(a){var s=this
s.a.Eb(s.b,s.c,s.d,s.e)},
$S:2}
A.Wo.prototype={
$2(a,b){var s=this,r=s.c,q=s.d,p=s.e
r=s.b===B.bJ?new A.rb(r,q).ag(0,p.gn(p)):new A.rb(q,r).ag(0,p.gn(p))
return new A.eI(s.a.FP(r),s.f.e,null)},
$S:290}
A.nq.prototype={
M(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.a1(t.I)
f.toString
s=f.w
r=A.ag9(a)
q=r.a
p=r.b
o=r.c
n=r.d
m=r.e
f=this.c
if(f==null)return A.dy(g,A.ep(g,q,q),!1,g,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)
l=r.r
k=l==null?g:A.E(l,0,1)
if(k==null)k=1
l=r.f
l.toString
if(k!==1)j=A.aX(B.d.bb(255*((l.gn(l)>>>24&255)/255*k)),l.gn(l)>>>16&255,l.gn(l)>>>8&255,l.gn(l)&255)
else j=l
l=A.dw(f.a)
i=A.a([],t.BV)
if(p!=null)i.push(new A.jl("FILL",p))
if(o!=null)i.push(new A.jl("wght",o))
if(n!=null)i.push(new A.jl("GRAD",n))
if(m!=null)i.push(new A.jl("opsz",m))
h=A.ah9(g,g,B.Vf,g,g,!0,g,A.a4J(g,A.co(g,g,j,g,g,g,g,g,"MaterialIcons",g,g,q,g,i,g,g,g,!1,g,g,g,g,g,r.w,g,g),l),B.bE,s,g,1,B.aO)
if(f.d)switch(s.a){case 0:f=new A.ba(new Float64Array(16))
f.cU()
f.hk(0,-1,1,1)
h=A.ahK(B.T,h,f,!1)
break
case 1:break}return A.dy(g,new A.ri(!0,A.ep(A.zp(h,g,g),q,q),g),!1,g,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)}}
A.ll.prototype={
k(a,b){var s
if(b==null)return!1
if(J.S(b)!==A.z(this))return!1
if(b instanceof A.ll)if(b.a===this.a)s=b.d===this.d
else s=!1
else s=!1
return s},
gt(a){return A.U(this.a,"MaterialIcons",null,this.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"IconData(U+"+B.c.jJ(B.f.iQ(this.a,16).toUpperCase(),5,"0")+")"}}
A.lm.prototype={
bR(a){return!this.w.k(0,a.w)}}
A.WJ.prototype={
$1(a){return A.acQ(this.c,A.ag8(a).bW(this.b),this.a)},
$S:291}
A.cn.prototype={
mR(a,b,c,d,e,f,g,h){var s,r=this,q=g==null?r.a:g,p=b==null?r.b:b,o=h==null?r.c:h,n=c==null?r.d:c,m=e==null?r.e:e,l=a==null?r.f:a
if(d==null){s=r.r
s=s==null?null:A.E(s,0,1)}else s=d
return new A.cn(q,p,o,n,m,l,s,f==null?r.w:f)},
fW(a){return this.mR(a,null,null,null,null,null,null,null)},
bW(a){var s=a.r
s=s==null?null:A.E(s,0,1)
return this.mR(a.f,a.b,a.d,s,a.e,a.w,a.a,a.c)},
W(a){return this},
k(a,b){var s,r,q=this
if(b==null)return!1
if(J.S(b)!==A.z(q))return!1
if(b instanceof A.cn)if(b.a==q.a)if(b.b==q.b)if(b.c==q.c)if(b.d==q.d)if(b.e==q.e)if(J.f(b.f,q.f)){s=b.r
s=s==null?null:A.E(s,0,1)
r=q.r
s=s==(r==null?null:A.E(r,0,1))&&A.cC(b.w,q.w)}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gt(a){var s,r=this,q=r.r
q=q==null?null:A.E(q,0,1)
s=r.w
s=s==null?null:A.cV(s)
return A.U(r.a,r.b,r.c,r.d,r.e,r.f,q,s,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.Le.prototype={}
A.rH.prototype={
ar(){return new A.wq(B.n)}}
A.wq.prototype={
aE(){var s=this
s.aZ()
$.a6.b1$.push(s)
s.z=new A.BN(s)},
m(){var s,r=this
B.b.u($.a6.b1$,r)
r.Vv()
s=r.at
if(s!=null)s.m()
s=r.z
s===$&&A.b()
s.a=null
r.vi(null)
r.aR()},
b2(){var s,r=this
r.VW()
r.vm()
s=r.c
s.toString
if(A.ahH(s))r.T0()
else r.Ef(!0)
r.cn()},
b0(a){var s,r,q=this
q.bz(a)
if(q.r&&q.a.e==null!==(a.e==null)){s=q.m5()
r=q.d
r.toString
r.V(0,q.C9(!0))
q.d.F(0,s)}if(!q.a.c.k(0,a.c))q.vm()},
ev(){this.vm()
this.MG()},
VW(){var s=this.c
s.toString
s=A.d8(s)
s=s==null?null:s.z
if(s==null){s=$.a1i.wS$
s===$&&A.b()
s=(s.a&2)!==0}this.w=s},
vm(){var s,r,q,p,o=this,n=o.z
n===$&&A.b()
s=o.a
r=s.c
q=o.c
q.toString
p=s.r
if(p!=null&&s.w!=null){p.toString
s=s.w
s.toString
s=new A.Z(p,s)}else s=null
o.W6(new A.uJ(n,r,t.rZ).W(A.aen(q,s)))},
C9(a){var s,r=this,q=r.ax
if(q==null||a){r.as=r.Q=null
q=r.a
s=q.e==null?null:r.gRC()
q=q.f!=null||!1?new A.a7_(r):null
q=r.ax=new A.ei(r.gRE(),s,q)}q.toString
return q},
m5(){return this.C9(!1)},
RF(a,b){this.av(new A.a71(this,a,b))},
RD(a){this.av(new A.a70(this,a))},
vi(a){var s=this.e
$.bF.cy$.push(new A.a72(s))
this.e=a},
W6(a){var s,r,q=this,p=q.d
if(p==null)s=null
else{s=p.a
if(s==null)s=p}r=a.a
if(s===(r==null?a:r))return
if(q.r){p.toString
p.F(0,q.m5())}q.a.toString
q.av(new A.a73(q))
q.av(new A.a74(q))
q.d=a
if(q.r)a.V(0,q.m5())},
T0(){var s,r=this
if(r.r)return
s=r.d
s.toString
s.V(0,r.m5())
s=r.at
if(s!=null)s.m()
r.at=null
r.r=!0},
Ef(a){var s,r=this
if(!r.r)return
if(a)if(r.at==null){s=r.d
s=(s==null?null:s.a)!=null}else s=!1
else s=!1
if(s)r.at=r.d.a.qU()
s=r.d
s.toString
s.F(0,r.m5())
r.r=!1},
Vv(){return this.Ef(!1)},
M(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.Q
if(e!=null){s=g.a.f
if(s!=null)return s.$3(a,e,g.as)}e=g.e
s=e==null
r=s?f:e.a
q=s?f:e.c
p=g.a
o=p.r
n=p.w
e=s?f:e.b
if(e==null)e=1
s=p.x
m=p.Q
l=p.as
k=p.at
j=p.ax
i=g.w
i===$&&A.b()
h=new A.GP(r,q,o,n,e,s,f,p.z,m,l,k,j,f,!1,i,!1,f)
h=A.dy(f,h,!1,f,!1,f,f,f,!0,"",f,f,f,f,f,f,f,f,f,f,f)
e=p.d
if(e!=null)h=e.$4(a,h,g.x,g.y)
e=g.a.e
return e!=null?e.$3(a,h,g.f):h}}
A.a7_.prototype={
$2(a,b){var s=this.a
s.av(new A.a6Z(s,a,b))},
$S:293}
A.a6Z.prototype={
$0(){var s=this.a
s.Q=this.b
s.as=this.c},
$S:0}
A.a71.prototype={
$0(){var s,r=this.a
r.vi(this.b)
r.as=r.Q=r.f=null
s=r.x
r.x=s==null?0:s+1
r.y=B.nn.JG(r.y,this.c)},
$S:0}
A.a70.prototype={
$0(){var s=this.a
s.f=this.b
s.as=s.Q=null},
$S:0}
A.a72.prototype={
$1(a){var s=this.a
if(s!=null)s.a.m()
return null},
$S:2}
A.a73.prototype={
$0(){this.a.vi(null)},
$S:0}
A.a74.prototype={
$0(){var s=this.a
s.x=s.f=null
s.y=!1},
$S:0}
A.Pq.prototype={}
A.BA.prototype={
ds(a){var s=A.Sj(this.a,this.b,a)
s.toString
return s}}
A.rb.prototype={
ds(a){var s=A.acC(this.a,this.b,a)
s.toString
return s}}
A.kK.prototype={
ds(a){return A.mT(this.a,this.b,a)}}
A.m9.prototype={
ds(a){var s=A.b2(this.a,this.b,a)
s.toString
return s}}
A.Di.prototype={}
A.nv.prototype={
gj1(){var s,r,q=this,p=q.d
if(p===$){s=q.a.d
r=A.eb(null,s,null,null,q)
q.d!==$&&A.be()
q.d=r
p=r}return p},
gf1(){var s,r=this,q=r.e
if(q===$){s=r.gj1()
q=r.e=A.ez(r.a.c,s,null)}return q},
aE(){var s,r=this
r.aZ()
s=r.gj1()
s.br()
s=s.bU$
s.b=!0
s.a.push(new A.X2(r))
r.Bx()},
b0(a){var s,r=this
r.bz(a)
if(r.a.c!==a.c){r.gf1().m()
s=r.gj1()
r.e=A.ez(r.a.c,s,null)}r.gj1().e=r.a.d
if(r.Bx()){r.nk(new A.X1(r))
s=r.gj1()
s.sn(0,0)
s.d5(0)}},
m(){this.gf1().m()
this.gj1().m()
this.MP()},
W9(a,b){var s
if(a==null)return
s=this.gf1()
a.swa(a.ag(0,s.gn(s)))
a.skP(0,b)},
Bx(){var s={}
s.a=!1
this.nk(new A.X0(s,this))
return s.a}}
A.X2.prototype={
$1(a){switch(a.a){case 3:this.a.a.toString
break
case 0:case 1:case 2:break}},
$S:3}
A.X1.prototype={
$3(a,b,c){this.a.W9(a,b)
return a},
$S:103}
A.X0.prototype={
$3(a,b,c){var s
if(b!=null){if(a==null)a=c.$1(b)
s=a.b
if(!J.f(b,s==null?a.a:s))this.a.a=!0
else if(a.b==null)a.skP(0,a.a)}else a=null
return a},
$S:103}
A.mM.prototype={
aE(){this.L4()
var s=this.gj1()
s.br()
s=s.c3$
s.b=!0
s.a.push(this.gQW())},
QX(){this.av(new A.QT())}}
A.QT.prototype={
$0(){},
$S:0}
A.q1.prototype={
ar(){return new A.Jg(null,null,B.n)}}
A.Jg.prototype={
nk(a){this.CW=t.uh.a(a.$3(this.CW,this.a.w,new A.a5q()))},
M(a){var s,r=this.CW
r.toString
s=this.gf1()
s=r.ag(0,s.gn(s))
return A.qW(this.a.r,null,B.cJ,!0,s,null,null,B.aO)}}
A.a5q.prototype={
$1(a){return new A.m9(t.F1.a(a),null)},
$S:295}
A.q2.prototype={
ar(){return new A.Jh(null,null,B.n)}}
A.Jh.prototype={
nk(a){var s=this,r=s.CW
s.a.toString
s.CW=t.iH.a(a.$3(r,B.ay,new A.a5r()))
s.cx=t.nr.a(a.$3(s.cx,s.a.z,new A.a5s()))
r=t.mo
s.cy=r.a(a.$3(s.cy,s.a.Q,new A.a5t()))
s.db=r.a(a.$3(s.db,s.a.at,new A.a5u()))},
M(a){var s,r,q,p,o,n=this,m=n.a,l=m.w
m=m.x
s=n.CW
s.toString
r=n.gf1()
r=s.ag(0,r.gn(r))
s=n.cx
s.toString
q=n.gf1()
q=s.ag(0,q.gn(q))
s=n.a.Q
p=n.db
p.toString
o=n.gf1()
o=p.ag(0,o.gn(o))
o.toString
return new A.Gx(l,m,r,q,s,o,n.a.r,null)}}
A.a5r.prototype={
$1(a){return new A.kK(t.ak.a(a),null)},
$S:296}
A.a5s.prototype={
$1(a){return new A.aL(A.Qc(a),null,t.a7)},
$S:70}
A.a5t.prototype={
$1(a){return new A.fX(t.iO.a(a),null)},
$S:33}
A.a5u.prototype={
$1(a){return new A.fX(t.iO.a(a),null)},
$S:33}
A.pn.prototype={
m(){var s=this,r=s.fi$
if(r!=null)r.F(0,s.gpA())
s.fi$=null
s.aR()},
ca(){this.eb()
this.dj()
this.pB()}}
A.jr.prototype={
bK(a){var s=A.h5(t.h,t.X)
return new A.rJ(s,this,B.a0,A.n(this).h("rJ<jr.T>"))}}
A.rJ.prototype={
IZ(a,b){var s=this.ba,r=this.$ti,q=r.h("bZ<1>?").a(s.j(0,a))
if(q!=null&&q.gN(q))return
s.l(0,a,A.cF(r.c))},
HT(a,b){var s,r=this.$ti,q=r.h("bZ<1>?").a(this.ba.j(0,b))
if(q==null)return
if(!q.gN(q)){s=this.f
s.toString
s=r.h("jr<1>").a(s).a1S(a,q)
r=s}else r=!0
if(r)b.b2()}}
A.h9.prototype={
bR(a){return a.f!==this.f},
bK(a){var s=new A.po(A.h5(t.h,t.X),this,B.a0,A.n(this).h("po<h9.T>"))
this.f.V(0,s.guO())
return s}}
A.po.prototype={
bc(a,b){var s,r,q=this,p=q.f
p.toString
s=q.$ti.h("h9<1>").a(p).f
r=b.f
if(s!==r){p=q.guO()
s.F(0,p)
r.V(0,p)}q.LP(0,b)},
b9(){var s,r=this
if(r.bs){s=r.f
s.toString
r.A4(r.$ti.h("h9<1>").a(s))
r.bs=!1}return r.LO()},
SC(){this.bs=!0
this.fp()},
lf(a){this.A4(a)
this.bs=!1},
nZ(){var s=this,r=s.f
r.toString
s.$ti.h("h9<1>").a(r).f.F(0,s.guO())
s.tk()}}
A.Dl.prototype={}
A.pA.prototype={}
A.aaB.prototype={
$1(a){return this.a.a=a},
$S:25}
A.aaC.prototype={
$1(a){return a.b},
$S:297}
A.aaD.prototype={
$1(a){var s,r,q,p
for(s=J.aQ(a),r=this.a,q=this.b,p=0;p<s.gp(a);++p)q.l(0,A.aA(A.n(r.a[p].a).h("cH.T")),s.j(a,p))
return q},
$S:298}
A.cH.prototype={
i(a){return"LocalizationsDelegate["+A.aA(A.n(this).h("cH.T")).i(0)+"]"}}
A.Pc.prototype={
la(a){return!0},
cC(a,b){return new A.bk(B.CR,t.mq)},
jY(a){return!1},
i(a){return"DefaultWidgetsLocalizations.delegate(en_US)"}}
A.BG.prototype={
gbD(){return B.t},
$iiK:1}
A.wE.prototype={
bR(a){return this.w!==a.w}}
A.t6.prototype={
ar(){return new A.LB(new A.bs(null,t.C),A.A(t.n,t.z),B.n)}}
A.LB.prototype={
aE(){this.aZ()
this.cC(0,this.a.c)},
Ou(a){var s,r,q,p,o,n,m=this.a.d,l=a.d
if(m.length!==l.length)return!0
s=A.a(m.slice(0),A.ah(m))
r=A.a(l.slice(0),A.ah(l))
for(q=0;q<s.length;++q){p=s[q]
o=r[q]
n=p instanceof A.bP?A.cL(p):null
m=A.aA(n==null?A.aM(p):n)
n=o instanceof A.bP?A.cL(o):null
if(m===A.aA(n==null?A.aM(o):n)){p.jY(o)
m=!1}else m=!0
if(m)return!0}return!1},
b0(a){var s,r=this
r.bz(a)
if(r.a.c.k(0,a.c)){r.a.toString
s=r.Ou(a)}else s=!0
if(s)r.cC(0,r.a.c)},
cC(a,b){var s,r=this,q={},p=r.a.d,o=p.length
if(o===0){r.f=b
return}q.a=null
s=A.atS(b,p).bl(new A.a7r(q),t.Co)
q=q.a
if(q!=null){r.e=q
r.f=b}else{++$.jU.bk$
s.bl(new A.a7s(r,b),t.H)}},
gEn(){return t.cC.a(J.b9(this.e,B.Zi)).gbD()},
M(a){var s,r,q,p=this,o=null
if(p.f==null)return B.fz
s=p.gEn()
p.f.toString
r=p.e
q=p.gEn()
return A.dy(o,new A.wE(p,r,A.acA(p.a.e,q),p.d),!1,o,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,s,o,o)}}
A.a7r.prototype={
$1(a){return this.a.a=a},
$S:299}
A.a7s.prototype={
$1(a){var s=this.a
if(s.c!=null)s.av(new A.a7q(s,a,this.b))
$.jU.Ff()},
$S:300}
A.a7q.prototype={
$0(){var s=this.a
s.e=this.b
s.f=this.c},
$S:0}
A.tS.prototype={
D(){return"Orientation."+this.b}}
A.im.prototype={
q2(a,b,c,d,e){var s=this,r=c==null?s.c:c,q=a==null?s.f:a,p=e==null?s.r:e,o=d==null?s.e:d
return new A.im(s.a,s.b,r,s.d,o,q,p,s.w,!1,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch)},
wi(a){return this.q2(null,null,a,null,null)},
FP(a){return this.q2(a,null,null,null,null)},
XZ(a,b){return this.q2(null,null,null,a,b)},
XY(a,b){return this.q2(a,null,null,null,b)},
Iq(a,b,c,d){var s,r,q,p,o,n,m=this,l=null
if(!(b||d||c||a))return m
s=m.f
r=b?0:l
q=d?0:l
p=c?0:l
r=s.mP(a?0:l,r,p,q)
q=m.r
p=b?Math.max(0,q.a-s.a):l
o=d?Math.max(0,q.b-s.b):l
n=c?Math.max(0,q.c-s.c):l
return m.XY(r,q.mP(a?Math.max(0,q.d-s.d):l,p,n,o))},
a1d(a){var s=this,r=null,q=s.r,p=s.e,o=Math.max(0,q.d-p.d)
q=q.mP(o,r,r,r)
return s.XZ(p.mP(0,r,r,r),q)},
k(a,b){var s=this
if(b==null)return!1
if(J.S(b)!==A.z(s))return!1
return b instanceof A.im&&b.a.k(0,s.a)&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.f.k(0,s.f)&&b.r.k(0,s.r)&&b.e.k(0,s.e)&&b.Q===s.Q&&b.as===s.as&&b.z===s.z&&b.y===s.y&&b.at===s.at&&b.ax===s.ax&&b.ay.k(0,s.ay)&&A.cC(b.ch,s.ch)},
gt(a){var s=this
return A.U(s.a,s.b,s.c,s.d,s.f,s.r,s.e,!1,s.Q,s.as,s.z,s.y,s.at,s.ax,s.ay,A.cV(s.ch),B.a,B.a,B.a,B.a)},
i(a){var s=this
return"MediaQueryData("+B.b.bg(A.a(["size: "+s.a.i(0),"devicePixelRatio: "+B.d.K(s.b,1),"textScaleFactor: "+B.d.K(s.c,1),"platformBrightness: "+s.d.i(0),"padding: "+s.f.i(0),"viewPadding: "+s.r.i(0),"viewInsets: "+s.e.i(0),"alwaysUse24HourFormat: false","accessibleNavigation: "+s.y,"highContrast: "+s.Q,"disableAnimations: "+s.as,"invertColors: "+s.z,"boldText: "+s.at,"navigationMode: "+s.ax.b,"gestureSettings: "+s.ay.i(0),"displayFeatures: "+A.h(s.ch)],t.s),", ")+")"}}
A.eI.prototype={
bR(a){return!this.f.k(0,a.f)}}
A.FR.prototype={
D(){return"NavigationMode."+this.b}}
A.wL.prototype={
ar(){return new A.LJ(B.n)}}
A.LJ.prototype={
aE(){this.aZ()
$.a6.b1$.push(this)},
qa(){this.av(new A.a7N())},
G1(){this.av(new A.a7P())},
G0(){this.av(new A.a7O())},
M(a){var s
$.a6.toString
s=A.agB($.c9())
return new A.eI(s,this.a.c,null)},
m(){B.b.u($.a6.b1$,this)
this.aR()}}
A.a7N.prototype={
$0(){},
$S:0}
A.a7P.prototype={
$0(){},
$S:0}
A.a7O.prototype={
$0(){},
$S:0}
A.Ps.prototype={}
A.tw.prototype={
M(a){var s,r=null
switch(A.kt().a){case 0:case 1:case 3:case 5:break
case 2:case 4:break}s=this.c
return A.amJ(new A.ri(!0,new A.LS(A.dy(r,A.ty(new A.fc(B.m5,s==null?r:new A.qC(s,r,r),r),B.lw,r,r,r),!1,r,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),new A.Yh(this,a),r),r))}}
A.Yh.prototype={
$0(){A.Ir(B.V1)},
$S:0}
A.oY.prototype={
eP(a){if(this.y1==null)return!1
return this.lO(a)},
GW(a){},
GX(a,b){var s=this.y1
if(s!=null)s.$0()},
qG(a,b,c){}}
A.a7Q.prototype={
w6(a){a.siJ(this.a)}}
A.Jm.prototype={
FJ(){var s=t.S,r=A.cF(s)
return new A.oY(B.aU,18,B.bp,A.A(s,t.R),r,null,null,A.A(s,t.V))},
Hd(a){a.y1=this.a}}
A.LS.prototype={
M(a){var s=this.d
return new A.jS(this.c,A.aS([B.Zj,new A.Jm(s)],t.n,t.ob),B.aB,!1,new A.a7Q(s),null)}}
A.FS.prototype={
M(a){var s,r,q=this,p=a.a1(t.I)
p.toString
s=A.a([],t.E)
r=q.c
if(r!=null)s.push(A.XH(r,B.fS))
r=q.d
if(r!=null)s.push(A.XH(r,B.fT))
r=q.e
if(r!=null)s.push(A.XH(r,B.fU))
return new A.qQ(new A.a9q(q.f,q.r,p.w),s,null)}}
A.pO.prototype={
D(){return"_ToolbarSlot."+this.b}}
A.a9q.prototype={
rk(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.b.j(0,B.fS)!=null){s=a.a
r=a.b
q=e.dr(B.fS,new A.aN(0,s,r,r)).a
switch(e.f.a){case 0:p=s-q
break
case 1:p=0
break
default:p=null}e.dN(B.fS,new A.u(p,0))}else q=0
if(e.b.j(0,B.fU)!=null){o=e.dr(B.fU,A.acm(a))
switch(e.f.a){case 0:n=0
break
case 1:n=a.a-o.a
break
default:n=null}m=o.a
e.dN(B.fU,new A.u(n,(a.b-o.b)/2))}else m=0
if(e.b.j(0,B.fT)!=null){s=a.a
r=e.e
l=Math.max(s-q-m-r*2,0)
k=e.dr(B.fT,A.acm(a).XS(l))
j=q+r
if(e.d){i=k.a
h=(s-i)/2
g=s-m
if(h+i>g)h=g-i-r
else if(h<j)h=j}else h=j
switch(e.f.a){case 0:f=s-k.a-h
break
case 1:f=h
break
default:f=null}e.dN(B.fT,new A.u(f,(a.b-k.b)/2))}},
lF(a){return a.d!==this.d||a.e!==this.e||a.f!==this.f}}
A.lP.prototype={
D(){return"RoutePopDisposition."+this.b}}
A.bS.prototype={
grd(){return B.rd},
iF(){},
n_(){var s=A.adu()
s.bl(new A.a08(this),t.H)
return s},
mY(){var s=this.a
if(s==null)s=null
else{s.a.toString
s=!0}if(s===!0)A.adu().bl(new A.a07(this),t.H)},
wC(a){},
eV(){var s=0,r=A.ab(t.ij),q,p=this
var $async$eV=A.ac(function(a,b){if(a===1)return A.a8(b,r)
while(true)switch(s){case 0:q=p.gHu()?B.T1:B.AJ
s=1
break
case 1:return A.a9(q,r)}})
return A.aa($async$eV,r)},
gJ6(){return!1},
jk(a){this.Yw(a)
return!0},
Yw(a){this.d.cI(0,null)},
kL(a){},
mZ(a){},
wx(a){},
mH(){},
pW(){},
m(){this.a=null},
gjB(){var s,r=this.a
if(r==null)return!1
r=r.e
r=new A.bl(r,A.ah(r).h("bl<1,d2?>"))
s=r.ld(r,new A.a0b(),new A.a0c())
if(s==null)return!1
return s.a===this},
gHu(){var s,r=this.a
if(r==null)return!1
r=r.e
r=new A.bl(r,A.ah(r).h("bl<1,d2?>"))
s=r.qA(r,new A.a0d(),new A.a0e())
if(s==null)return!1
return s.a===this},
gqK(){var s,r,q,p,o=this.a
if(o==null)return!1
for(o=o.e,s=o.length,r=0;r<s;++r){q=o[r]
if(q.a===this)return!1
p=q.d.a
if(p<=10&&p>=1)return!0}return!1},
ga_E(){var s=this.a
if(s==null)return!1
s=s.e
s=new A.bl(s,A.ah(s).h("bl<1,d2?>"))
s=s.qA(s,new A.a09(this),new A.a0a())
s=s==null?null:s.gjD()
return s===!0}}
A.a08.prototype={
$1(a){var s,r=this.a.a
if(r==null)s=null
else{r.a.toString
s=!0}if(s===!0){r=r.x.gdm()
if(r!=null)r.rv()}},
$S:21}
A.a07.prototype={
$1(a){var s=this.a.a
if(s!=null){s=s.x.gdm()
if(s!=null)s.rv()}},
$S:21}
A.a0b.prototype={
$1(a){return a!=null&&a.gjD()},
$S:24}
A.a0c.prototype={
$0(){return null},
$S:7}
A.a0d.prototype={
$1(a){return a!=null&&a.gjD()},
$S:24}
A.a0e.prototype={
$0(){return null},
$S:7}
A.a09.prototype={
$1(a){return a!=null&&A.aib(this.a).$1(a)},
$S:24}
A.a0a.prototype={
$0(){return null},
$S:7}
A.fC.prototype={
i(a){var s=this.a
s=s==null?"none":'"'+s+'"'
return"RouteSettings("+s+", "+A.h(this.b)+")"}}
A.ip.prototype={
qc(a,b){},
qb(a,b){},
wB(a,b){},
qd(a,b){},
G3(a,b){},
n1(){}}
A.lg.prototype={
bR(a){return a.f!=this.f}}
A.a06.prototype={}
A.IP.prototype={}
A.BF.prototype={}
A.tJ.prototype={
ar(){var s=null,r=A.a([],t.hi),q=$.bq(),p=t.a4
return new A.eM(r,new A.La(q),A.jD(s,p),A.jD(s,p),A.acG(!0,"Navigator",!0,!0,s,s,!1),new A.uy(0,q,t.rj),A.iJ(!1),A.b7(t.S),s,A.A(t.wb,t.M),s,!0,s,s,s,B.n)},
a0s(a,b){return this.z.$2(a,b)}}
A.YK.prototype={
$1(a){return a==null},
$S:302}
A.dB.prototype={
D(){return"_RouteLifecycle."+this.b}}
A.M2.prototype={}
A.d2.prototype={
gcs(){var s,r
if(this.c){s=t.kd.a(this.a.b)
s.gcs()
r=A.h(s.gcs())
return"p+"+r}r=this.b
if(r!=null)return"r+"+r.gIA()
return null},
ZK(a,b,c,d){var s,r,q,p=this,o=p.d,n=p.a
n.a=b
n.iF()
s=p.d
if(s===B.C0||s===B.C1){r=n.n_()
p.d=B.C2
r.J5(new A.a8H(p,b))}else{n.wC(c)
p.d=B.cN}if(a)n.mZ(null)
s=o===B.a_F||o===B.C1
q=b.r
if(s)q.dg(0,new A.wV(n,d))
else q.dg(0,new A.px(n,d))},
ZJ(a,b){var s,r=this
r.d=B.a_B
s=r.a
if((s.d.a.a&30)!==0)return!0
if(!s.jk(r.w)){r.d=B.cN
return!1}r.w=null
return!0},
m(){var s,r,q,p,o,n,m={}
this.d=B.a_D
s=this.a
r=s.grd()
q=new A.a8F()
p=new A.aJ(r,q,A.ah(r).h("aJ<1>"))
if(!p.ga9(p).q())s.m()
else{m.a=p.gp(p)
for(s=B.b.ga9(r),q=new A.vU(s,q);q.q();){r=s.gG(s)
o=A.b4("listener")
n=new A.a8G(m,this,r,o)
o.b=n
r.d.V(0,n)}}},
ga1Y(){var s=this.d.a
return s<=7&&s>=1},
gjD(){var s=this.d.a
return s<=10&&s>=1}}
A.a8H.prototype={
$0(){var s=this.a
if(s.d===B.C2){s.d=B.cN
this.b.uq()}},
$S:0}
A.a8F.prototype={
$1(a){return a.d.a},
$S:303}
A.a8G.prototype={
$0(){var s=this,r=s.a;--r.a
s.c.d.F(0,s.d.aA())
if(r.a===0)s.b.a.m()},
$S:0}
A.a8I.prototype={
$1(a){return a.a===this.a},
$S:35}
A.kg.prototype={}
A.px.prototype={
jH(a){a.qc(this.a,this.b)}}
A.pw.prototype={
jH(a){a.qb(this.a,this.b)}}
A.wU.prototype={
jH(a){a.wB(this.a,this.b)}}
A.wV.prototype={
jH(a){a.qd(this.a,this.b)}}
A.eM.prototype={
aE(){var s,r,q,p,o=this
o.aZ()
for(s=o.a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
$.fQ().a.set(p,o)}o.Q=o.a.x
s=o.c.iU(t.hS)
if(s==null)s=null
else{s=s.f
s.toString}t.cn.a(s)
o.vF(s==null?null:s.f)
o.a.toString
B.fg.qQ("selectSingleEntryHistory",t.H)},
hU(a,b){var s,r,q,p,o,n,m=this
m.lm(m.as,"id")
s=m.f
m.lm(s,"history")
for(;r=m.e,r.length!==0;)r.pop().m()
m.d=new A.bs(null,t.r9)
B.b.H(r,s.IB(null,m))
m.a.toString
q=0
for(;!1;++q){p=B.M2[q]
r=m.c
r.toString
r=p.wm(r)
o=$.ac3()
n=new A.d2(r,null,!0,B.lN,o,o,o)
m.e.push(n)
B.b.H(m.e,s.IB(n,m))}if(s.y==null){s=m.a
r=m.e
o=s.f
B.b.H(r,J.QF(s.a0s(m,o),new A.YJ(m),t.ee))}m.uq()},
wE(a){var s,r=this
r.Mc(a)
s=r.f
if(r.bf$!=null)s.bc(0,r.e)
else s.T(0)},
gcs(){return this.a.y},
b2(){var s,r,q,p,o=this
o.MT()
s=o.c.a1(t.hS)
o.vF(s==null?null:s.f)
for(r=o.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.P)(r),++p)r[p].a.pW()},
vF(a){var s,r,q=this
if(q.z!=a){if(a!=null)$.fQ().a.set(a,q)
s=q.z
if(s==null)s=null
else{r=$.fQ()
A.Cz(s)
s=r.a.get(s)}if(s===q){s=$.fQ()
r=q.z
r.toString
s.a.set(r,null)}q.z=a
q.EJ()}},
EJ(){var s=this,r=s.z,q=s.a
if(r!=null)s.Q=B.b.U(q.x,A.a([r],t.yx))
else s.Q=q.x},
b0(a){var s,r,q,p,o=this
o.MU(a)
s=a.x
if(s!==o.a.x){for(r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
$.fQ().a.set(p,null)}for(s=o.a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
$.fQ().a.set(p,o)}o.EJ()}o.a.toString
for(s=o.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].a.pW()},
d3(){var s,r,q,p=this.Q
p===$&&A.b()
s=p.length
r=0
for(;r<p.length;p.length===s||(0,A.P)(p),++r){q=p[r]
$.fQ().a.set(q,null)}this.lR()},
ca(){var s,r,q,p
this.MR()
s=this.Q
s===$&&A.b()
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
$.fQ().a.set(p,this)}},
m(){var s,r,q,p=this
p.vF(null)
p.x.m()
for(s=p.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].m()
p.MV()},
gAS(){var s,r,q,p=A.a([],t.tD)
for(s=this.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)B.b.H(p,s[q].a.grd())
return p},
ur(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null
a.ay=!0
s=a.e
r=s.length-1
q=s[r]
p=r>0?s[r-1]:a0
o=A.a([],t.hi)
for(s=a.w,n=a.r,m=a0,l=m,k=!1,j=!1;r>=0;){switch(q.d.a){case 1:i=a.i6(r-1,A.aev())
h=i>=0?a.e[i]:a0
h=h==null?a0:h.a
g=q.a
g.a=a
g.iF()
q.d=B.a_E
n.dg(0,new A.px(g,h))
continue
case 2:if(k||l==null){h=q.a
h.mY()
q.d=B.cN
if(l==null)h.mZ(a0)
continue}break
case 3:case 4:case 6:h=p==null?a0:p.a
i=a.i6(r-1,A.aev())
g=i>=0?a.e[i]:a0
g=g==null?a0:g.a
q.ZK(l==null,a,h,g)
if(q.d===B.cN)continue
break
case 5:if(!j&&m!=null){q.a.kL(m)
q.f=m}j=!0
break
case 7:if(!j&&m!=null){q.a.kL(m)
q.f=m}k=!0
j=!0
break
case 8:i=a.i6(r,A.yE())
h=i>=0?a.e[i]:a0
if(!q.ZJ(a,h==null?a0:h.a))continue
if(!j){if(m!=null){q.a.kL(m)
q.f=m}m=q.a}h=q.a
i=a.i6(r,A.yE())
g=i>=0?a.e[i]:a0
s.dg(0,new A.pw(h,g==null?a0:g.a))
if(q.d===B.lO)continue
k=!0
break
case 11:break
case 9:h=q.a
h=h.d.a
if((h.a&30)!==0)A.a0(A.ad("Future already completed"))
h.kd(a0)
q.w=null
q.d=B.a_A
continue
case 10:if(!j){if(m!=null)q.a.kL(m)
m=a0}i=a.i6(r,A.yE())
h=i>=0?a.e[i]:a0
h=h==null?a0:h.a
q.d=B.a_C
if(q.x)s.dg(0,new A.wU(q.a,h))
continue
case 12:if(!k&&l!=null)break
q.d=B.lO
continue
case 13:o.push(B.b.ft(a.e,r))
q=l
break
case 14:case 0:break}--r
f=r>0?a.e[r-1]:a0
l=q
q=p
p=f}a.Qh()
a.Qj()
a.a.toString
s=a.e
s=new A.bl(s,A.ah(s).h("bl<1,d2?>"))
e=s.ld(s,new A.YD(),new A.YE())
d=e==null?a0:e.a.b.a
if(d!=null&&d!==a.at){A.ahC(d,!1,a0)
a.at=d}for(s=o.length,c=0;c<o.length;o.length===s||(0,A.P)(o),++c){q=o[c]
for(n=q.a.grd(),h=n.length,b=0;b<n.length;n.length===h||(0,A.P)(n),++b)J.amo(n[b])
q.m()}if(a1){s=a.d
s===$&&A.b()
s=s.gbo()
if(s!=null)s.a14(a.gAS())}if(a.bf$!=null)a.f.bc(0,a.e)
a.ay=!1},
uq(){return this.ur(!0)},
Qh(){var s,r=this,q=r.Q
q===$&&A.b()
if(q.length===0){r.w.T(0)
r.r.T(0)
return}for(q=r.r;!q.gN(q);){s=q.ew(0)
B.b.Y(r.Q,s.gnG())}for(q=r.w;!q.gN(q);){s=q.nS()
B.b.Y(r.Q,s.gnG())}},
Qj(){var s,r,q,p,o,n,m=this,l=null,k=m.e.length-1
for(;k>=0;){s=m.e[k]
r=s.d.a
if(!(r<=12&&r>=3)){--k
continue}q=m.QL(k+1,A.ak_())
r=q==null
p=r?l:q.a
o=s.r
if(p!=o){if((r?l:q.a)==null){p=s.f
p=p!=null&&p===o}else p=!1
if(!p){p=s.a
p.mZ(r?l:q.a)}s.r=r?l:q.a}--k
n=m.i6(k,A.ak_())
r=n>=0?m.e[n]:l
p=r==null
o=p?l:r.a
if(o!=s.e){o=s.a
o.wx(p?l:r.a)
s.e=p?l:r.a}}},
Ce(a,b){a=this.i6(a,b)
return a>=0?this.e[a]:null},
i6(a,b){while(!0){if(!(a>=0&&!b.$1(this.e[a])))break;--a}return a},
QL(a,b){var s
while(!0){s=this.e
if(!(a<s.length&&!b.$1(s[a])))break;++a}s=this.e
return a<s.length?s[a]:null},
pk(a,b,c,d){var s,r,q
if(b)this.a.toString
s=new A.fC(a,c)
r=d.h("bS<0?>?")
q=r.a(this.a.r.$1(s))
return q==null&&!b?r.a(this.a.w.$1(s)):q},
vq(a,b,c){return this.pk(a,!1,b,c)},
AQ(a){this.OU()},
nC(a){var s=0,r=A.ab(t.y),q,p=this,o,n,m
var $async$nC=A.ac(function(b,c){if(b===1)return A.a8(c,r)
while(true)$async$outer:switch(s){case 0:m=p.e
m=new A.bl(m,A.ah(m).h("bl<1,d2?>"))
o=m.ld(m,new A.YF(),new A.YG())
if(o==null){q=!1
s=1
break}s=3
return A.at(o.a.eV(),$async$nC)
case 3:n=c
if(p.c==null){q=!0
s=1
break}m=p.e
m=new A.bl(m,A.ah(m).h("bl<1,d2?>"))
if(o!==m.ld(m,new A.YH(),new A.YI())){q=!0
s=1
break}switch(n.a){case 2:q=!1
s=1
break $async$outer
case 0:p.a0L(a)
q=!0
s=1
break $async$outer
case 1:q=!0
s=1
break $async$outer}case 1:return A.a9(q,r)}})
return A.aa($async$nC,r)},
HL(){return this.nC(null,t.X)},
a0f(a){return this.nC(a,t.X)},
I3(a){var s=this,r=B.b.a_U(s.e,A.aev())
if(r.c){s.a.toString
if(null.$2(r.a,a)&&r.d===B.cN)r.d=B.lP}else{r.w=a
r.d=B.lP}if(r.d===B.lP)s.ur(!1)
s.AQ(r.a)},
a0L(a){return this.I3(a,t.X)},
hc(){return this.I3(null,t.X)},
GB(a){var s,r=this,q=B.b.a_o(r.e,A.aib(a)),p=r.e[q]
if(p.c&&p.d.a<8){s=r.Ce(q-1,A.yE())
s=s==null?null:s.a
r.w.dg(0,new A.pw(a,s))}p.d=B.lO
if(!r.ay)r.ur(!1)},
sEZ(a){this.ch=a
this.CW.sn(0,a>0)},
YA(){var s,r,q,p,o,n,m=this
m.sEZ(m.ch+1)
if(m.ch===1){s=m.i6(m.e.length-1,A.yE())
r=m.e[s].a
q=!r.gJ6()&&s>0?m.Ce(s-1,A.yE()).a:null
p=m.Q
p===$&&A.b()
o=p.length
n=0
for(;n<p.length;p.length===o||(0,A.P)(p),++n)p[n].G3(r,q)}},
n1(){var s,r,q,p=this
p.sEZ(p.ch-1)
if(p.ch===0){s=p.Q
s===$&&A.b()
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].n1()}},
RX(a){this.cx.E(0,a.gbN())},
S4(a){this.cx.u(0,a.gbN())},
OU(){if($.bF.dy$===B.cD){var s=this.d
s===$&&A.b()
s=$.a6.ac$.z.j(0,s)
this.av(new A.YC(s==null?null:s.qx(t.CE)))}s=this.cx
B.b.Y(A.ay(s,!0,A.n(s).c),$.a6.gX4())},
M(a){var s,r=this,q=null,p=r.gS3(),o=A.ag1(a),n=r.bf$,m=r.d
m===$&&A.b()
r.a.toString
if(m.gbo()==null){s=r.gAS()
s=J.lq(s.slice(0),A.ah(s).c)}else s=B.rd
return new A.lg(q,A.DI(B.bL,new A.yO(!1,A.ag0(A.CQ(!0,q,A.a56(n,new A.nT(s,B.af,m)),q,q,q,r.x,!1,q,q,q,q,q,!0),o),q),p,r.gRW(),q,q,p),q)}}
A.YJ.prototype={
$1(a){var s,r,q=a.b.a
if(q!=null){s=this.a.as
r=s.y
if(r==null)r=s.$ti.h("bJ.T").a(r)
s.Mb(0,r+1)
q=new A.LX(r,q,null,B.lQ)}else q=null
return A.aia(a,B.lN,!1,q)},
$S:306}
A.YD.prototype={
$1(a){return a!=null&&a.gjD()},
$S:24}
A.YE.prototype={
$0(){return null},
$S:7}
A.YF.prototype={
$1(a){return a!=null&&a.gjD()},
$S:24}
A.YG.prototype={
$0(){return null},
$S:7}
A.YH.prototype={
$1(a){return a!=null&&a.gjD()},
$S:24}
A.YI.prototype={
$0(){return null},
$S:7}
A.YC.prototype={
$0(){var s=this.a
if(s!=null)s.sF5(!0)},
$S:0}
A.pH.prototype={
D(){return"_RouteRestorationType."+this.b}}
A.Nn.prototype={
gHx(){return!0},
q_(){return A.a([this.a.a],t.f)}}
A.LX.prototype={
q_(){var s=this,r=s.Na(),q=A.a([s.c,s.d],t.f),p=s.e
if(p!=null)q.push(p)
B.b.H(r,q)
return r},
wm(a){var s=a.vq(this.d,this.e,t.z)
s.toString
return s},
gIA(){return this.c}}
A.adF.prototype={
gHx(){return!1},
q_(){A.apR(this.d)},
wm(a){var s=a.c
s.toString
return this.d.$2(s,this.e)},
gIA(){return this.c}}
A.La.prototype={
bc(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.y==null
if(a)c.y=A.A(t.N,t.lC)
s=t.f
r=A.a([],s)
q=c.y
q.toString
p=J.b9(q,null)
if(p==null)p=B.d7
o=A.A(t.dR,t.lC)
q=c.y
q.toString
n=J.amt(J.yM(q))
for(q=a1.length,m=b,l=a,k=!0,j=0;j<a1.length;a1.length===q||(0,A.P)(a1),++j){i=a1[j]
if(i.d.a>7){h=i.a
h.c.sn(0,b)
continue}if(i.c){l=l||r.length!==J.bG(p)
h=r.length
if(h!==0){g=m==null?b:m.gcs()
o.l(0,g,r)
n.u(0,g)}k=i.gcs()!=null
h=i.a
f=k?i.gcs():b
h.c.sn(0,f)
if(k){r=A.a([],s)
h=c.y
h.toString
p=J.b9(h,i.gcs())
if(p==null)p=B.d7}else{r=B.d7
p=B.d7}m=i
continue}if(k){h=i.b
h=h==null?b:h.gHx()
k=h===!0}else k=!1
h=i.a
f=k?i.gcs():b
h.c.sn(0,f)
if(k){h=i.b
f=h.b
h=f==null?h.b=h.q_():f
if(!l){f=J.aQ(p)
e=f.gp(p)
d=r.length
l=e<=d||!J.f(f.j(p,d),h)}else l=!0
B.b.E(r,h)}}l=l||r.length!==J.bG(p)
c.Q3(r,m,o,n)
if(l||n.gbM(n)){c.y=o
c.aw()}},
Q3(a,b,c,d){var s,r=a.length
if(r!==0){s=b==null?null:b.gcs()
c.l(0,s,a)
d.u(0,s)}},
T(a){if(this.y==null)return
this.y=null
this.aw()},
IB(a,b){var s,r,q,p,o,n=A.a([],t.hi)
if(this.y!=null)s=a!=null&&a.gcs()==null
else s=!0
if(s)return n
s=this.y
s.toString
r=J.b9(s,a==null?null:a.gcs())
if(r==null)return n
for(s=J.aw(r);s.q();){q=A.asd(s.gG(s))
p=q.wm(b)
o=$.ac3()
n.push(new A.d2(p,q,!1,B.lN,o,o,o))}return n},
q4(){return null},
l5(a){a.toString
return J.af9(t.G.a(a),new A.a6Y(),t.dR,t.lC)},
Hc(a){this.y=a},
ls(){return this.y},
gkO(a){return this.y!=null}}
A.a6Y.prototype={
$2(a,b){return new A.aK(A.ck(a),A.fu(t.j.a(b),!0,t.K),t.cj)},
$S:307}
A.a84.prototype={
$2(a,b){if(!a.a)a.F(0,b)},
$S:32}
A.wW.prototype={
ca(){this.eb()
this.dj()
this.eF()},
m(){var s=this,r=s.b6$
if(r!=null)r.F(0,s.gef())
s.b6$=null
s.aR()}}
A.wX.prototype={
b0(a){this.bz(a)
this.n3()},
b2(){var s,r,q,p,o=this
o.cn()
s=o.bf$
r=o.glq()
q=o.c
q.toString
q=A.oc(q)
o.eM$=q
p=o.kz(q,r)
if(r){o.hU(s,o.dE$)
o.dE$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.eL$.Y(0,new A.a84())
s=r.bf$
if(s!=null)s.m()
r.bf$=null
r.MS()}}
A.FV.prototype={
i(a){var s=A.a([],t.s)
this.c6(s)
return"Notification("+B.b.bg(s,", ")+")"},
c6(a){}}
A.cU.prototype={
bK(a){return new A.wY(this,B.a0,this.$ti.h("wY<1>"))}}
A.wY.prototype={
HW(a){var s,r=this.f
r.toString
s=this.$ti
s.h("cU<1>").a(r)
if(s.c.b(a))return r.d.$1(a)
return!1},
lf(a){}}
A.ej.prototype={}
A.Px.prototype={}
A.eO.prototype={
sli(a){var s
if(this.b===a)return
this.b=a
s=this.e
if(s!=null)s.BH()},
snA(a){if(this.c)return
this.c=!0
this.e.BH()},
F(a,b){this.d.F(0,b)},
ln(a){var s,r=this.e
r.toString
this.e=null
if(r.c==null)return
B.b.u(r.d,this)
s=$.bF
if(s.dy$===B.AK)s.cy$.push(new A.Z0(r))
else r.CT()},
fp(){var s=this.f.gbo()
if(s!=null)s.CV()},
i(a){return"<optimized out>#"+A.bB(this)+"(opaque: "+this.b+"; maintainState: "+this.c+")"},
$ia2:1,
Ft(a){return this.a.$1(a)}}
A.Z0.prototype={
$1(a){this.a.CT()},
$S:2}
A.pz.prototype={
ar(){return new A.wZ(B.n)}}
A.wZ.prototype={
aE(){this.aZ()
this.a.c.d.sn(0,!0)},
m(){this.a.c.d.sn(0,!1)
this.a.toString
this.aR()},
M(a){var s=this.a
return new A.oP(s.d,s.c.Ft(a),null)},
CV(){this.av(new A.a88())}}
A.a88.prototype={
$0(){},
$S:0}
A.nT.prototype={
ar(){return new A.nV(A.a([],t.tD),null,null,B.n)}}
A.nV.prototype={
aE(){this.aZ()
this.a_q(0,this.a.c)},
uU(a,b){return this.d.length},
xn(a,b){b.e=this
this.av(new A.Z4(this,null,null,b))},
a_q(a,b){var s,r=b.length
if(r===0)return
for(s=0;s<r;++s)b[s].e=this
this.av(new A.Z3(this,null,null,b))},
a14(a){var s,r,q,p,o,n=this
if(t.rF.b(a))s=a
else s=J.lq(a.slice(0),A.ah(a).c)
if(s.length===0)return
r=n.d
if(A.cC(r,s))return
q=A.jC(r,t.u7)
for(r=s.length,p=0;p<r;++p){o=s[p]
if(o.e==null)o.e=n}n.av(new A.Z5(n,s,q,null,null))},
CT(){if(this.c!=null)this.av(new A.Z2())},
BH(){this.av(new A.Z1())},
M(a){var s,r,q,p,o,n=A.a([],t.E)
for(s=this.d,r=s.length-1,q=!0,p=0;r>=0;--r){o=s[r]
if(q){++p
n.push(new A.pz(o,!0,o.f))
q=!o.b||!1}else if(o.c)n.push(new A.pz(o,!1,o.f))}s=t.m8
return new A.Ow(n.length-p,this.a.d,A.ay(new A.cx(n,s),!1,s.h("bj.E")),null)}}
A.Z4.prototype={
$0(){var s=this,r=s.a
B.b.ns(r.d,r.uU(s.b,s.c),s.d)},
$S:0}
A.Z3.prototype={
$0(){var s=this,r=s.a
B.b.He(r.d,r.uU(s.b,s.c),s.d)},
$S:0}
A.Z5.prototype={
$0(){var s,r,q=this,p=q.a,o=p.d
B.b.T(o)
s=q.b
B.b.H(o,s)
r=q.c
r.a1a(s)
B.b.He(o,p.uU(q.d,q.e),r)},
$S:0}
A.Z2.prototype={
$0(){},
$S:0}
A.Z1.prototype={
$0(){},
$S:0}
A.Ow.prototype={
bK(a){var s=A.cF(t.h)
return new A.Ox(s,this,B.a0)},
aB(a){var s=a.a1(t.I)
s.toString
s=new A.pG(s.w,this.e,this.f,A.aq(),0,null,null,A.aq())
s.aD()
s.H(0,null)
return s},
aH(a,b){var s=this.e
if(b.aq!==s){b.aq=s
b.a4()}s=a.a1(t.I)
s.toString
b.sbD(s.w)
s=this.f
if(s!==b.aU){b.aU=s
b.ap()
b.aY()}}}
A.Ox.prototype={
ga5(){return t.z2.a(A.ek.prototype.ga5.call(this))}}
A.pG.prototype={
e6(a){if(!(a.e instanceof A.dz))a.e=new A.dz(null,null,B.j)},
TJ(){if(this.ab!=null)return
this.ab=B.b6.W(this.a8)},
sbD(a){var s=this
if(s.a8===a)return
s.a8=a
s.ab=null
s.a4()},
goE(){var s,r,q,p,o=this
if(o.aq===A.ap.prototype.gpX.call(o))return null
s=A.ap.prototype.gZ7.call(o,o)
for(r=o.aq,q=t.B;r>0;--r){p=s.e
p.toString
s=q.a(p).a7$}return s},
ei(a){var s,r,q,p,o=this.goE()
for(s=t.B,r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.iT(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.a7$}return r},
giZ(){return!0},
c2(a){return new A.Z(A.E(1/0,a.a,a.b),A.E(1/0,a.c,a.d))},
bC(){var s,r,q,p,o,n,m,l,k=this
k.I=!1
if(k.d4$-k.aq===0)return
k.TJ()
s=t.k.a(A.x.prototype.gX.call(k))
r=A.zg(new A.Z(A.E(1/0,s.a,s.b),A.E(1/0,s.c,s.d)))
q=k.goE()
for(s=t.B,p=t.uu;q!=null;){o=q.e
o.toString
s.a(o)
if(!o.gxv()){q.ci(r,!0)
n=k.ab
n.toString
m=k.k3
m.toString
l=q.k3
l.toString
o.a=n.kC(p.a(m.ad(0,l)))}else{n=k.k3
n.toString
m=k.ab
m.toString
k.I=A.ah6(q,o,n,m)||k.I}q=o.a7$}},
cB(a,b){var s,r,q,p=this,o={},n=o.a=p.aq===A.ap.prototype.gpX.call(p)?null:p.by$
for(s=t.B,r=0;r<p.d4$-p.aq;++r,n=q){n=n.e
n.toString
s.a(n)
if(a.mv(new A.a8v(o,b,n),n.a,b))return!0
q=n.aL$
o.a=q}return!1},
rh(a,b){var s,r,q,p,o,n=this.goE()
for(s=t.B,r=b.a,q=b.b;n!=null;){p=n.e
p.toString
s.a(p)
o=p.a
a.eu(n,new A.u(o.a+r,o.b+q))
n=p.a7$}},
aF(a,b){var s,r=this,q=r.I&&r.aU!==B.l,p=r.b3
if(q){q=r.cx
q===$&&A.b()
s=r.k3
p.saQ(0,a.jL(q,b,new A.y(0,0,0+s.a,0+s.b),r.gyf(),r.aU,p.a))}else{p.saQ(0,null)
r.rh(a,b)}},
m(){this.b3.saQ(0,null)
this.hs()},
fz(a){var s,r,q=this.goE()
for(s=t.B;q!=null;){a.$1(q)
r=q.e
r.toString
q=s.a(r).a7$}},
ik(a){var s
switch(this.aU.a){case 0:return null
case 1:case 2:case 3:if(this.I){s=this.k3
s=new A.y(0,0,0+s.a,0+s.b)}else s=null
return s}}}
A.a8v.prototype={
$2(a,b){return this.a.a.bO(a,b)},
$S:15}
A.Mc.prototype={
ca(){this.eb()
this.dj()
this.eF()},
m(){var s=this,r=s.b6$
if(r!=null)r.F(0,s.gef())
s.b6$=null
s.aR()}}
A.PD.prototype={
an(a){var s,r,q
this.ea(a)
s=this.a3$
for(r=t.B;s!=null;){s.an(a)
q=s.e
q.toString
s=r.a(q).a7$}},
ah(a){var s,r,q
this.dw(0)
s=this.a3$
for(r=t.B;s!=null;){s.ah(0)
q=s.e
q.toString
s=r.a(q).a7$}}}
A.nn.prototype={
ar(){var s=t.y
return new A.wn(A.aS([!1,!0,!0,!0],s,s),null,null,B.n)},
iI(a){return A.yH().$1(a)}}
A.wn.prototype={
aE(){var s,r,q=this
q.aZ()
s=q.a
r=s.f
q.d=A.ai2(A.b8(s.e),r,q)
r=q.a
s=r.f
s=A.ai2(A.b8(r.e),s,q)
q.e=s
r=q.d
r.toString
q.f=new A.wM(A.a([r,s],t.ro))},
b0(a){var s,r=this
r.bz(a)
if(!a.f.k(0,r.a.f)||A.b8(a.e)!==A.b8(r.a.e)){s=r.d
s.toString
s.saj(0,r.a.f)
s=r.d
s.toString
s.sFo(A.b8(r.a.e))
s=r.e
s.toString
s.saj(0,r.a.f)
s=r.e
s.toString
s.sFo(A.b8(r.a.e))}},
v9(a){var s,r,q,p,o,n,m,l,k,j=this
if(!j.a.iI(a))return!1
s=j.d
s.toString
r=a.a
q=r.c
q.toString
p=r.a
p.toString
s.e=-Math.min(q-p,s.d)
p=j.e
p.toString
o=r.b
o.toString
p.e=-Math.min(o-q,p.d)
if(a instanceof A.hj){q=a.e
if(q<0)n=s
else if(q>0)n=p
else n=null
m=n===s
s=j.c
s.cK(new A.tU(m,0))
s=j.w
s.l(0,m,!0)
s.j(0,m).toString
n.d=0
j.w.j(0,m).toString
s=a.f
if(s!==0){r=n.c
if(r!=null)r.aX(0)
n.c=null
l=A.E(Math.abs(s),100,1e4)
s=n.f
if(n.a===B.fI)r=0.3
else{r=n.r
r===$&&A.b()
q=r.a
q=r.b.ag(0,q.gn(q))
r=q}s.a=r
r.toString
s.b=A.E(l*0.00006,r,0.5)
r=n.w
s=n.x
s===$&&A.b()
q=s.a
r.a=s.b.ag(0,q.gn(q))
r.b=Math.min(0.025+75e-8*l*l,1)
r=n.b
r===$&&A.b()
r.e=A.c1(0,B.d.bb(0.15+l*0.02),0)
r.jy(0,0)
n.as=0.5
n.a=B.a_a}else{s=a.d
if(s!=null){p=a.b.ga5()
p.toString
t.x.a(p)
o=p.k3
o.toString
k=p.jV(s.d)
switch(A.b8(r.e).a){case 0:n.toString
s=o.b
n.I9(0,Math.abs(q),o.a,A.E(k.b,0,s),s)
break
case 1:n.toString
s=o.a
n.I9(0,Math.abs(q),o.b,A.E(k.a,0,s),s)
break}}}}else if(a instanceof A.iy||a instanceof A.hw)if(a.gGb()!=null){s=j.d
if(s.a===B.fJ)s.j5(B.cW)
s=j.e
if(s.a===B.fJ)s.j5(B.cW)}j.r=A.z(a)
return!1},
m(){this.d.m()
this.e.m()
this.NK()},
M(a){var s=this,r=null,q=s.a,p=s.d,o=s.e,n=q.e,m=s.f
return new A.cU(s.gv8(),new A.hu(A.Sb(new A.hu(q.w,r),new A.L9(p,o,n,m),r,r,B.O),r),r,t.Bf)}}
A.ms.prototype={
D(){return"_GlowState."+this.b}}
A.wm.prototype={
saj(a,b){if(this.ax.k(0,b))return
this.ax=b
this.aw()},
sFo(a){if(this.ay===a)return
this.ay=a
this.aw()},
m(){var s=this,r=s.b
r===$&&A.b()
r.m()
r=s.y
r===$&&A.b()
r.w.bT$.u(0,r)
r.Ar()
r=s.c
if(r!=null)r.aX(0)
s.dz()},
I9(a,b,c,d,e){var s,r,q,p=this,o=p.c
if(o!=null)o.aX(0)
p.at=p.at+b/200
o=p.f
s=p.r
s===$&&A.b()
r=s.b
s=s.a
o.a=r.ag(0,s.gn(s))
o.b=Math.min(r.ag(0,s.gn(s))+b/c*0.8,0.5)
q=Math.min(c,e*0.20096189432249995)
s=p.w
r=p.x
r===$&&A.b()
o=r.b
r=r.a
s.a=o.ag(0,r.gn(r))
s.b=Math.max(1-1/(0.7*Math.sqrt(p.at*q)),A.kq(o.ag(0,r.gn(r))))
r=d/e
p.Q=r
if(r!==p.as){o=p.y
o===$&&A.b()
if(!o.ga_M())o.lK(0)}else{o=p.y
o===$&&A.b()
o.hq(0)
p.z=null}o=p.b
o===$&&A.b()
o.e=B.n8
if(p.a!==B.fJ){o.jy(0,0)
p.a=B.fJ}else{o=o.r
if(!(o!=null&&o.a!=null))p.aw()}p.c=A.ci(B.n8,new A.a6R(p))},
tO(a){var s=this
if(a!==B.U)return
switch(s.a.a){case 1:s.j5(B.cW)
break
case 3:s.a=B.fI
s.at=0
break
case 2:case 0:break}},
j5(a){var s,r,q=this,p=q.a
if(p===B.BY||p===B.fI)return
p=q.c
if(p!=null)p.aX(0)
q.c=null
p=q.f
s=q.r
s===$&&A.b()
r=s.a
p.a=s.b.ag(0,r.gn(r))
p.b=0
p=q.w
r=q.x
r===$&&A.b()
s=r.a
p.a=r.b.ag(0,s.gn(s))
p.b=0
p=q.b
p===$&&A.b()
p.e=a
p.jy(0,0)
q.a=B.BY},
VF(a){var s,r=this,q=r.z
if(q!=null){q=q.a
s=r.Q
r.as=s-(s-r.as)*Math.pow(2,-(a.a-q)/$.al9().a)
r.aw()}if(A.yF(r.Q,r.as,0.001)){q=r.y
q===$&&A.b()
q.hq(0)
r.z=null}else r.z=a},
aF(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.r
i===$&&A.b()
s=i.a
if(J.f(i.b.ag(0,s.gn(s)),0))return
s=b.a
r=b.b
q=s>r?r/s:1
p=s*3/2
o=Math.min(r,s*0.20096189432249995)
r=j.x
r===$&&A.b()
n=r.a
n=r.b.ag(0,n.gn(n))
r=j.as
m=$.an().bj()
l=j.ax
k=i.a
m.saj(0,A.aX(B.d.bb(255*i.b.ag(0,k.gn(k))),l.gn(l)>>>16&255,l.gn(l)>>>8&255,l.gn(l)&255))
a.cm(0)
a.az(0,0,j.d+j.e)
a.dc(0,1,n*q)
a.jd(new A.y(0,0,0+s,0+o))
a.hA(new A.u(s/2*(0.5+r),o-p),p,m)
a.cj(0)},
i(a){return"_GlowController(color: "+this.ax.i(0)+", axis: "+A.auR(this.ay)+")"}}
A.a6R.prototype={
$0(){return this.a.j5(B.hr)},
$S:0}
A.L9.prototype={
De(a,b,c,d,e){var s
if(c==null)return
switch(A.j1(d,e)){case B.y:c.aF(a,b)
break
case B.x:a.cm(0)
a.az(0,0,b.b)
a.dc(0,1,-1)
c.aF(a,b)
a.cj(0)
break
case B.a7:a.cm(0)
a.jM(0,1.5707963267948966)
a.dc(0,1,-1)
c.aF(a,new A.Z(b.b,b.a))
a.cj(0)
break
case B.ar:a.cm(0)
s=b.a
a.az(0,s,0)
a.jM(0,1.5707963267948966)
c.aF(a,new A.Z(b.b,s))
a.cj(0)
break}},
aF(a,b){var s=this,r=s.d
s.De(a,b,s.b,r,B.nj)
s.De(a,b,s.c,r,B.ni)},
i_(a){return a.b!=this.b||a.c!=this.c},
i(a){return"_GlowingOverscrollIndicatorPainter("+A.h(this.b)+", "+A.h(this.c)+")"}}
A.oB.prototype={
ar(){return new A.xL(null,null,B.n)},
iI(a){return A.yH().$1(a)}}
A.xL.prototype={
gj7(){var s,r,q,p,o,n,m=this,l=null,k=m.d
if(k===$){s=t.a7
r=new A.aL(0,0,s)
q=new A.xK(r,B.lV,$.bq())
p=A.eb(l,l,l,l,m)
p.br()
o=p.bU$
o.b=!0
o.a.push(q.gtN())
q.a!==$&&A.ev()
q.a=p
n=A.ez(B.mK,p,l)
n.a.V(0,q.ge1())
t.m.a(n)
q.b!==$&&A.ev()
q.b=new A.b3(n,r,s.h("b3<aC.T>"))
m.d!==$&&A.be()
m.d=q
k=q}return k},
v9(a){var s,r,q,p,o,n,m=this
if(!m.a.iI(a))return!1
if(a instanceof A.hj){m.f=a
J.S(m.e)
s=a.e
r=m.c
r.cK(new A.tU(s<0,0))
m.r=!0
r=a.f
if(r!==0){s=m.gj7()
q=A.E(Math.abs(r),1,1e4)
r=s.c
p=s.b
p===$&&A.b()
o=p.a
r.a=p.b.ag(0,o.gn(o))
r.b=Math.min(0.016+1.01/q,1)
r=s.a
r===$&&A.b()
r.e=A.c1(0,B.d.bb(q*0.02),0)
r.jy(0,0)
s.d=B.a_H}else if(a.d!=null){r=a.a.d
r.toString
n=A.E(Math.abs(s)/r+m.gj7().e,0,1)
r=m.gj7()
r.e=n
s=r.c
p=r.b
p===$&&A.b()
o=p.a
s.a=p.b.ag(0,o.gn(o))
o=r.e
s.b=0.016*o+0.016*(1-Math.exp(-o*8.237217661997105))
o=r.a
o===$&&A.b()
o.e=B.hs
if(r.d!==B.lW){o.jy(0,0)
r.d=B.lW}else{s=o.r
if(!(s!=null&&s.a!=null))r.aw()}}}else if(a instanceof A.iy||a instanceof A.hw){s=m.gj7()
if(s.d===B.lW)s.j5(B.hs)}m.e=a
return!1},
Qu(a){switch(this.a.c.a){case 0:return a>0?B.lY:B.lX
case 1:return a>0?B.fX:B.lZ
case 2:return a>0?B.lX:B.lY
case 3:return a>0?B.lZ:B.fX}},
m(){var s=this.gj7(),r=s.a
r===$&&A.b()
r.m()
s.dz()
this.NT()},
M(a){var s={},r=a.a1(t.l).f
s.a=null
return new A.cU(this.gv8(),A.mL(this.gj7(),new A.a98(s,this,r.a),null),null,t.Bf)}}
A.a98.prototype={
$2(a,b){var s,r,q,p,o,n,m=this,l=m.b,k=l.gj7().b
k===$&&A.b()
s=k.a
s=k.b.ag(0,s.gn(s))
switch(A.b8(l.a.c).a){case 0:r=1+s
m.a.a=m.c.a
q=1
break
case 1:q=1+s
m.a.a=m.c.b
r=1
break
default:r=1
q=1}k=l.f
k=k==null?null:k.e
p=l.Qu(k==null?0:k)
k=l.f
if(k==null)o=null
else{k=k.a.d
k.toString
o=k}if(o==null)o=m.a.a
k=A.tr(r,q,1)
l=l.a
n=A.ahK(p,l.f,k,!0)
return A.afx(n,s!==0&&o!==m.a.a?l.e:B.l)},
$S:308}
A.mA.prototype={
D(){return"_StretchState."+this.b}}
A.xK.prototype={
tO(a){var s=this
if(a!==B.U)return
switch(s.d.a){case 1:s.j5(B.hs)
break
case 3:s.d=B.lV
s.e=0
break
case 2:case 0:break}},
j5(a){var s,r,q=this,p=q.d
if(p===B.C3||p===B.lV)return
p=q.c
s=q.b
s===$&&A.b()
r=s.a
p.a=s.b.ag(0,r.gn(r))
p.b=0
p=q.a
p===$&&A.b()
p.e=a
p.jy(0,0)
q.d=B.C3},
i(a){return"_StretchController()"}}
A.tU.prototype={
c6(a){this.MW(a)
a.push("side: "+(this.a?"leading edge":"trailing edge"))}}
A.x0.prototype={
c6(a){var s,r
this.tl(a)
s=this.cw$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.yh.prototype={
ca(){this.eb()
this.dj()
this.eF()},
m(){var s=this,r=s.b6$
if(r!=null)r.F(0,s.gef())
s.b6$=null
s.aR()}}
A.yn.prototype={
ca(){this.eb()
this.dj()
this.eF()},
m(){var s=this,r=s.b6$
if(r!=null)r.F(0,s.gef())
s.b6$=null
s.aR()}}
A.xH.prototype={
k(a,b){if(b==null)return!1
if(J.S(b)!==A.z(this))return!1
return b instanceof A.xH&&A.cC(b.a,this.a)},
gt(a){return A.cV(this.a)},
i(a){return"StorageEntryIdentifier("+B.b.bg(this.a,":")+")"}}
A.Z6.prototype={
AR(a){var s=A.a([],t.D5)
if(A.agM(a,s))a.yY(new A.Z7(s))
return s},
J9(a,b){var s,r=this
if(r.a==null)r.a=A.A(t.K,t.z)
s=r.AR(a)
if(s.length!==0)r.a.l(0,new A.xH(s),b)},
Ih(a){var s
if(this.a==null)return null
s=this.AR(a)
return s.length!==0?this.a.j(0,new A.xH(s)):null}}
A.Z7.prototype={
$1(a){return A.agM(a,this.a)},
$S:38}
A.nX.prototype={
M(a){return this.c}}
A.G4.prototype={
Fi(a,b,c){var s=t.sa.a(B.b.gbi(this.d))
if(s.a8!=null){s.a8=a
return A.bR(null,t.H)}return s.fP(s.jQ(a),b,c)},
qS(a){var s=t.sa.a(B.b.gbi(this.d))
if(s.a8!=null){s.a8=a
return}s.dq(s.jQ(a))},
FT(a,b,c){var s=null,r=new A.kh(this.z,this.as,B.fl,a,b,!0,s,A.iJ(!1),$.bq())
r.Ay(b,s,!0,c,a)
r.Az(b,s,s,!0,c,a)
return r},
an(a){this.Mq(a)
t.sa.a(a).so4(this.as)}}
A.G5.prototype={}
A.kh.prototype={
wQ(a,b,c,d,e,f){return this.MA(a,b,c,d,e,null)},
so4(a){var s,r=this
if(r.aq===a)return
s=r.giL(r)
r.aq=a
if(s!=null)r.x6(r.jQ(s))},
goT(){var s=this.ax
s.toString
return Math.max(0,s*(this.aq-1)/2)},
o8(a,b){var s=Math.max(0,a-this.goT())/(b*this.aq),r=B.d.yy(s)
if(Math.abs(s-r)<1e-10)return r
return s},
jQ(a){var s=this.ax
s.toString
return a*s*this.aq+this.goT()},
giL(a){var s,r,q=this,p=q.at
if(p!=null)s=!(q.z!=null&&q.Q!=null)
else s=!0
if(s)p=null
else{s=q.a8
if(s==null){p.toString
s=q.z
s.toString
r=q.Q
r.toString
r=A.E(p,s,r)
s=q.ax
s.toString
s=q.o8(r,s)
p=s}else p=s}return p},
zo(){var s,r,q=this,p=q.w,o=p.c
o.toString
o=A.Z8(o)
if(o!=null){p=p.c
p.toString
s=q.a8
if(s==null){s=q.at
s.toString
r=q.ax
r.toString
r=q.o8(s,r)
s=r}o.J9(p,s)}},
ID(){var s,r,q
if(this.at==null){s=this.w
r=s.c
r.toString
r=A.Z8(r)
if(r==null)q=null
else{s=s.c
s.toString
q=r.Ih(s)}if(q!=null)this.ab=q}},
zn(){var s,r=this,q=r.a8
if(q==null){q=r.at
q.toString
s=r.ax
s.toString
s=r.o8(q,s)
q=s}r.w.e.sn(0,q)
q=$.fE.a8$
q===$&&A.b()
q.GE()},
IC(a,b){if(b)this.ab=a
else this.dq(this.jQ(a))},
mB(a){var s,r,q,p,o=this,n=o.ax
n=n!=null?n:null
if(a===n)return!0
o.Mw(a)
s=o.at
s=s!=null?s:null
if(s==null)r=o.ab
else if(n===0){q=o.a8
q.toString
r=q}else{n.toString
r=o.o8(s,n)}p=o.jQ(r)
o.a8=a===0?r:null
if(p!==s){o.at=p
return!1}return!0},
j8(a){var s
this.MB(a)
if(!(a instanceof A.kh))return
s=a.a8
if(s!=null)this.a8=s},
my(a,b){var s=a+this.goT()
return this.Mu(s,Math.max(s,b-this.goT()))},
fd(){var s,r,q,p,o,n=this,m=null,l=n.z
if(l!=null&&n.Q!=null)l.toString
else l=m
if(n.z!=null&&n.Q!=null){s=n.Q
s.toString}else s=m
r=n.at
r=r!=null?r:m
q=n.ax
q=q!=null?q:m
p=n.w.a.c
o=n.aq
return new A.G5(o,l,s,r,q,p)}}
A.pg.prototype={
jc(a){return new A.pg(!1,this.fR(a))},
gkB(){return this.b}}
A.nW.prototype={
jc(a){return new A.nW(this.fR(a))},
QI(a){var s,r
if(a instanceof A.kh){s=a.giL(a)
s.toString
return s}s=a.at
s.toString
r=a.ax
r.toString
return s/r},
QJ(a,b){var s
if(a instanceof A.kh)return a.jQ(b)
s=a.ax
s.toString
return b*s},
kH(a,b){var s,r,q,p,o,n=this
if(b<=0){s=a.at
s.toString
r=a.z
r.toString
r=s<=r
s=r}else s=!1
if(!s)if(b>=0){s=a.at
s.toString
r=a.Q
r.toString
r=s>=r
s=r}else s=!1
else s=!0
if(s)return n.Ms(a,b)
q=n.gnW()
p=n.QI(a)
s=q.c
if(b<-s)p-=0.5
else if(b>s)p+=0.5
o=n.QJ(a,B.d.yy(p))
s=a.at
s.toString
if(o!==s){s=n.gk0()
r=a.at
r.toString
return new A.jX(o,A.xF(s,r-o,b),q)}return null}}
A.tV.prototype={
ar(){return new A.Mf(B.n)}}
A.Mf.prototype={
aE(){this.aZ()
this.d=this.a.r.z},
Qz(a){var s,r
this.a.toString
switch(0){case 0:s=a.a1(t.I)
s.toString
r=A.abN(s.w)
this.a.toString
return r}},
M(a){var s,r,q,p=this,o=p.Qz(a),n=p.a.w
n=new A.nW(B.zb.fR(n))
n=new A.pg(!1,null).fR(n)
s=p.a
r=s.Q
s=s.r
q=A.a1_(a).XU(!1)
return new A.cU(new A.a89(p),A.ahg(o,s,r,new A.pg(!1,n),null,q,new A.a8a(p,o)),null,t.Bf)}}
A.a89.prototype={
$1(a){if(a.cw$===0)this.a.a.toString
return!1},
$S:23}
A.a8a.prototype={
$2(a,b){var s=this.a.a
return new A.mj(this.b,b,0,B.DU,s.as,A.a([new A.I5(s.r.as,!0,s.z,null)],t.E),null)},
$S:309}
A.hl.prototype={
gli(){return!0},
gw8(){return!1},
Fu(a){return!0}}
A.Gr.prototype={
aB(a){var s=new A.He(this.d,0,!1,!1,A.aq())
s.aD()
return s},
aH(a,b){b.sa0C(this.d)
b.sa0Z(0)
b.sX9(!1)
b.sX8(!1)}}
A.Y8.prototype={}
A.Zu.prototype={}
A.BD.prototype={
v_(a){return this.Tg(a)},
Tg(a){var s=0,r=A.ab(t.H),q,p=this,o,n,m
var $async$v_=A.ac(function(b,c){if(b===1)return A.a8(c,r)
while(true)switch(s){case 0:n=A.et(a.b)
m=p.a
if(!m.S(0,n)){s=1
break}m=m.j(0,n)
m.toString
o=a.a
if(o==="Menu.selectedCallback"){m.ga2y().$0()
m.ga0w()
o=$.a6.ac$.f.f.e
o.toString
A.amz(o,m.ga0w(),t.q)}else if(o==="Menu.opened")m.ga2x(m).$0()
else if(o==="Menu.closed")m.ga2w(m).$0()
case 1:return A.a9(q,r)}})
return A.aa($async$v_,r)}}
A.o1.prototype={
bR(a){return this.f!=a.f}}
A.jV.prototype={
ar(){return new A.No(null,A.A(t.wb,t.M),null,!0,null,B.n)}}
A.No.prototype={
gcs(){return this.a.d},
hU(a,b){},
M(a){return A.a56(this.bf$,this.a.c)}}
A.vQ.prototype={
bR(a){return a.f!=this.f}}
A.uC.prototype={
ar(){return new A.xf(B.n)}}
A.xf.prototype={
b2(){var s,r=this
r.cn()
s=r.c
s.toString
r.r=A.oc(s)
r.uX()
if(r.d==null){r.a.toString
r.d=!1}},
b0(a){this.bz(a)
this.uX()},
gCL(){this.a.toString
return!1},
uX(){var s,r=this
if(r.gCL()&&!r.w){r.w=!0;++$.jU.bk$
s=$.fE.a8$
s===$&&A.b()
s.ga1r().bl(new A.a8A(r),t.P)}},
Uw(){var s,r=this
r.e=!1
r.f=null
s=$.fE.a8$
s===$&&A.b()
s.F(0,r.gvj())
r.uX()},
m(){if(this.e){var s=$.fE.a8$
s===$&&A.b()
s.F(0,this.gvj())}this.aR()},
M(a){var s,r,q=this,p=q.d
p.toString
if(p&&q.gCL())return B.fz
p=q.r
if(p==null)p=q.f
s=q.a
r=s.d
return A.a56(p,new A.jV(s.c,r,null))}}
A.a8A.prototype={
$1(a){var s,r=this.a
r.w=!1
if(r.c!=null){s=$.fE.a8$
s===$&&A.b()
s.V(0,r.gvj())
r.av(new A.a8z(r,a))}$.jU.Ff()},
$S:310}
A.a8z.prototype={
$0(){var s=this.a
s.f=this.b
s.e=!0
s.d=!1},
$S:0}
A.dd.prototype={
gkO(a){return!0},
m(){var s=this,r=s.c
if(r!=null){r=r.eL$.u(0,s)
r.toString
s.F(0,r)
s.c=s.b=null}s.dz()
s.a=!0}}
A.hv.prototype={
wE(a){},
lm(a,b){var s,r,q=this,p=q.bf$
p=p==null?null:J.dD(p.gi8(),b)
s=p===!0
r=s?a.l5(J.b9(q.bf$.gi8(),b)):a.q4()
if(a.b==null){a.b=b
a.c=q
p=new A.a04(q,a)
a.V(0,p)
q.eL$.l(0,a,p)}a.Hc(r)
if(!s&&a.gkO(a)&&q.bf$!=null)q.vK(a)},
n3(){var s,r,q=this
if(q.eM$!=null){s=q.bf$
s=s==null?null:s.e
s=s==q.gcs()||q.glq()}else s=!0
if(s)return
r=q.bf$
if(q.kz(q.eM$,!1))if(r!=null)r.m()},
glq(){var s,r,q=this
if(q.dE$)return!0
if(q.gcs()==null)return!1
s=q.c
s.toString
r=A.oc(s)
if(r!=q.eM$){if(r==null)s=null
else{s=r.c
s=s==null?null:s.d
s=s===!0}s=s===!0}else s=!1
return s},
kz(a,b){var s,r,q=this
if(q.gcs()==null||a==null)return q.DX(null,b)
if(b||q.bf$==null){s=q.gcs()
s.toString
return q.DX(a.Xh(s,q),b)}s=q.bf$
s.toString
r=q.gcs()
r.toString
s.a1e(r)
r=q.bf$
r.toString
a.hw(r)
return!1},
DX(a,b){var s,r=this,q=r.bf$
if(a==q)return!1
r.bf$=a
if(!b){if(a!=null){s=r.eL$
new A.b_(s,A.n(s).h("b_<1>")).Y(0,r.gW_())}r.wE(q)}return!0},
vK(a){var s,r=a.gkO(a),q=this.bf$
if(r){if(q!=null){r=a.b
r.toString
s=a.ls()
if(!J.f(J.b9(q.gi8(),r),s)||!J.dD(q.gi8(),r)){J.ea(q.gi8(),r,s)
q.kn()}}}else if(q!=null){r=a.b
r.toString
q.a19(0,r,t.K)}}}
A.a04.prototype={
$0(){var s=this.a
if(s.bf$==null)return
s.vK(this.b)},
$S:0}
A.aa_.prototype={
$2(a,b){if(!a.a)a.F(0,b)},
$S:32}
A.PE.prototype={
b0(a){this.bz(a)
this.n3()},
b2(){var s,r,q,p,o=this
o.cn()
s=o.bf$
r=o.glq()
q=o.c
q.toString
q=A.oc(q)
o.eM$=q
p=o.kz(q,r)
if(r){o.hU(s,o.dE$)
o.dE$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.eL$.Y(0,new A.aa_())
s=r.bf$
if(s!=null)s.m()
r.bf$=null
r.aR()}}
A.bJ.prototype={
sn(a,b){var s=this.y
if(b==null?s!=null:b!==s){this.y=b
this.wG(s)}},
Hc(a){this.y=a}}
A.fN.prototype={
q4(){return this.cy},
wG(a){this.aw()},
l5(a){return A.n(this).h("fN.T").a(a)},
ls(){var s=this.y
return s==null?A.n(this).h("bJ.T").a(s):s}}
A.xe.prototype={
l5(a){return this.N8(a)},
ls(){var s=this.N9()
s.toString
return s}}
A.uy.prototype={}
A.ux.prototype={}
A.aa0.prototype={
$2(a,b){if(!a.a)a.F(0,b)},
$S:32}
A.oe.prototype={}
A.Hv.prototype={
ar(){return new A.pI(new A.Nl($.bq()),null,A.A(t.wb,t.M),null,!0,null,B.n,this.$ti.h("pI<1>"))}}
A.uD.prototype={
D(){return"RouteInformationReportingType."+this.b}}
A.pI.prototype={
gcs(){return this.a.r},
aE(){var s,r=this
r.aZ()
s=r.a.c
if(s!=null)s.V(0,r.goP())
r.a.f.Wo(r.guE())
r.a.e.V(0,r.guJ())},
hU(a,b){var s,r,q=this,p=q.f
q.lm(p,"route")
s=p.y
r=s==null
if((r?A.n(p).h("bJ.T").a(s):s)!=null){p=r?A.n(p).h("bJ.T").a(s):s
p.toString
q.pc(p,new A.a8P(q))}else{p=q.a.c
if(p!=null)q.pc(p.a,new A.a8Q(q))}},
UT(){var s=this
if(s.w||s.a.c==null)return
s.w=!0
$.bF.cy$.push(s.gUz())},
UA(a){var s,r,q,p,o=this
o.w=!1
s=o.f
r=s.y
q=r==null
if((q?A.n(s).h("bJ.T").a(r):r)!=null){s=q?A.n(s).h("bJ.T").a(r):r
s.toString
r=o.a.c
r.toString
q=o.e
q.toString
if(q!==B.T_)p=q===B.le&&r.b.a==s.a
else p=!0
B.fg.qQ("selectMultiEntryHistory",t.H)
q=s.a
q.toString
A.ahC(q,p,s.b)
r.b=r.a=s}o.e=B.le},
UH(){this.a.e.ga2m()
this.a.toString
return null},
p_(){var s=this
s.f.sn(0,s.UH())
if(s.e==null)s.e=B.le
s.UT()},
b2(){var s,r=this
r.r=!0
r.NP()
s=r.a.c
if(s!=null&&r.r)r.pc(s.a,new A.a8O(r))
r.r=!1
r.p_()},
b0(a){var s,r,q,p=this
p.NQ(a)
s=p.a
r=a.c
q=s.c==r
if(q)s.f===a.f
p.d=new A.L()
if(!q){s=r==null
if(!s)r.F(0,p.goP())
q=p.a.c
if(q!=null)q.V(0,p.goP())
s=s?null:r.a
r=p.a.c
if(s!=(r==null?null:r.a))p.Cw()}s=a.f
if(p.a.f!==s){r=p.guE()
s.a1b(r)
p.a.f.Wo(r)}p.a.toString
s=p.guJ()
a.e.F(0,s)
p.a.e.V(0,s)
p.p_()},
m(){var s=this,r=s.a.c
if(r!=null)r.F(0,s.goP())
s.a.f.a1b(s.guE())
s.a.e.F(0,s.guJ())
s.d=null
s.NR()},
pc(a,b){var s,r,q=this
q.r=!1
q.d=new A.L()
s=q.a.d
s.toString
r=q.c
r.toString
s.a2B(a,r).bl(q.Ui(q.d,b),t.H)},
Ui(a,b){return new A.a8M(this,a,b)},
Cw(){var s=this
s.r=!0
s.pc(s.a.c.a,new A.a8J(s))},
R1(){var s=this
s.d=new A.L()
return s.a.e.a2C().bl(s.S9(s.d),t.y)},
S9(a){return new A.a8K(this,a)},
DF(){this.av(new A.a8N())
this.p_()
return new A.bk(null,t.E8)},
Sa(){this.av(new A.a8L())
this.p_()},
M(a){var s=this.bf$,r=this.a,q=r.c,p=r.f,o=r.d
r=r.e
return A.a56(s,new A.Nt(q,p,o,r,this,new A.fV(r.ga2k(),null),null))}}
A.a8P.prototype={
$0(){return this.a.a.e.ga2a()},
$S(){return this.a.$ti.h("ag<~>(1)()")}}
A.a8Q.prototype={
$0(){return this.a.a.e.ga29()},
$S(){return this.a.$ti.h("ag<~>(1)()")}}
A.a8O.prototype={
$0(){return this.a.a.e.gK1()},
$S(){return this.a.$ti.h("ag<~>(1)()")}}
A.a8M.prototype={
$1(a){var s=0,r=A.ab(t.H),q,p=this,o,n
var $async$$1=A.ac(function(b,c){if(b===1)return A.a8(c,r)
while(true)switch(s){case 0:o=p.a
n=p.b
if(o.d!=n){s=1
break}s=3
return A.at(p.c.$0().$1(a),$async$$1)
case 3:if(o.d==n)o.DF()
case 1:return A.a9(q,r)}})
return A.aa($async$$1,r)},
$S(){return this.a.$ti.h("ag<~>(1)")}}
A.a8J.prototype={
$0(){return this.a.a.e.gK1()},
$S(){return this.a.$ti.h("ag<~>(1)()")}}
A.a8K.prototype={
$1(a){var s=this.a
if(this.b!=s.d)return new A.bk(!0,t.a9)
s.DF()
return new A.bk(a,t.a9)},
$S:312}
A.a8N.prototype={
$0(){},
$S:0}
A.a8L.prototype={
$0(){},
$S:0}
A.Nt.prototype={
bR(a){if(this.f==a.f)this.r===a.r
return!0}}
A.Nl.prototype={
q4(){return null},
wG(a){this.aw()},
l5(a){var s
if(a==null)return null
t.DI.a(a)
s=J.bE(a)
return new A.oe(A.ck(s.gJ(a)),s.gR(a))},
ls(){var s,r=this,q=r.y,p=q==null
if((p?A.n(r).h("bJ.T").a(q):q)==null)q=null
else{s=(p?A.n(r).h("bJ.T").a(q):q).a
q=[s,(p?A.n(r).h("bJ.T").a(q):q).b]}return q}}
A.pR.prototype={
b0(a){this.bz(a)
this.n3()},
b2(){var s,r,q,p,o=this
o.cn()
s=o.bf$
r=o.glq()
q=o.c
q.toString
q=A.oc(q)
o.eM$=q
p=o.kz(q,r)
if(r){o.hU(s,o.dE$)
o.dE$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.eL$.Y(0,new A.aa0())
s=r.bf$
if(s!=null)s.m()
r.bf$=null
r.aR()}}
A.nU.prototype={
grd(){return this.e},
iF(){var s,r=this,q=A.ad6(r.gOG(),!1)
r.k4=q
r.gnA()
s=A.ad6(r.gOI(),!0)
r.p1=s
B.b.H(r.e,A.a([q,s],t.tD))
r.Mn()},
jk(a){var s,r=this
r.Mi(a)
s=r.at.Q
s===$&&A.b()
if(s===B.I&&!r.Q)r.a.GB(r)
return!0},
m(){B.b.T(this.e)
this.Mm()}}
A.dA.prototype={
gbE(a){return this.as},
gzs(){return this.ax},
Sv(a){var s,r=this
switch(a.a){case 3:s=r.e
if(s.length!==0){s=B.b.gJ(s)
r.gli()
s.sli(!0)}s=r.z
if(s!=null){s.a.$0()
s.a=null}r.z=null
break
case 1:case 2:s=r.e
if(s.length!==0)B.b.gJ(s).sli(!1)
if(r.z==null)r.z=$.bF.a1l(B.EL)
break
case 0:if(!r.ga_E()){r.a.GB(r)
r.Q=!0
s=r.z
if(s!=null){s.a.$0()
s.a=null}r.z=null}break}},
iF(){var s=this,r=s.gIW(s),q=s.gIW(s),p=s.gkI(),o=s.a
o.toString
o=s.at=A.eb(p,r,q,null,o)
o.br()
p=o.bU$
p.b=!0
p.a.push(s.gCx())
s.as=o
s.LI()
p=s.as
if(p.gaW(p)===B.U&&s.e.length!==0){p=B.b.gJ(s.e)
s.gli()
p.sli(!0)}},
n_(){this.Mk()
return this.at.d5(0)},
mY(){this.Mf()
var s=this.at
s.sn(0,s.b)},
wC(a){var s,r
if(a instanceof A.dA){s=this.at
s.toString
r=a.at.x
r===$&&A.b()
s.sn(0,r)}this.Ml(a)},
jk(a){this.ch=a
this.at.fu(0)
this.LG(a)
return!0},
kL(a){this.ES(a)
this.Mj(a)},
mZ(a){this.ES(a)
this.Mg(a)},
ES(a){var s,r,q,p,o,n,m,l=this,k={},j=l.CW
l.CW=null
if(a instanceof A.dA&&l.Fu(a)&&!0){s=l.ax.c
if(s!=null){r=s instanceof A.md?s.a:s
r.toString
q=a.as
q.toString
p=r.gn(r)
o=q.x
o===$&&A.b()
if(!J.f(p,o)){p=q.Q
p===$&&A.b()
p=p===B.U||p===B.I}else p=!0
o=a.y.a
if(p)l.kw(q,o)
else{k.a=null
p=new A.a51(l,q,a)
l.CW=new A.a5_(k,q,p)
q.br()
n=q.bU$
n.b=!0
n.a.push(p)
m=A.adz(r,q,new A.a50(k,l,a))
k.a=m
l.kw(m,o)}}else l.kw(a.as,a.y.a)}else l.Va(B.cb)
if(j!=null)j.$0()},
kw(a,b){this.ax.saS(0,a)
if(b!=null)b.bl(new A.a4Z(this,a),t.P)},
Va(a){return this.kw(a,null)},
m(){var s=this,r=s.as
if(r!=null)r.c0(s.gCx())
r=s.z
if(r!=null){r.a.$0()
r.a=null}s.z=null
r=s.at
if(r!=null)r.m()
s.y.cI(0,s.ch)
s.LH()},
gkI(){return"TransitionRoute"},
i(a){return"TransitionRoute(animation: "+A.h(this.at)+")"}}
A.a51.prototype={
$1(a){var s,r
switch(a.a){case 3:case 0:s=this.a
s.kw(this.b,this.c.y.a)
r=s.CW
if(r!=null){r.$0()
s.CW=null}break
case 1:case 2:break}},
$S:3}
A.a5_.prototype={
$0(){this.b.c0(this.c)
var s=this.a.a
if(s!=null)s.m()},
$S:0}
A.a50.prototype={
$0(){var s,r=this.b
r.kw(this.a.a.a,this.c.y.a)
s=r.CW
if(s!=null){s.$0()
r.CW=null}},
$S:0}
A.a4Z.prototype={
$1(a){var s=this.a.ax,r=this.b
if(s.c==r){s.saS(0,B.cb)
if(r instanceof A.md)r.m()}},
$S:6}
A.DJ.prototype={
gJ6(){var s=this.js$
return s!=null&&s.length!==0}}
A.Kq.prototype={
hK(a,b){A.Yj(this.e,t.z).gw8()
return!1},
cR(a){return A.ad3(this.e).HL()}}
A.wO.prototype={
bR(a){var s=this
return s.f!==a.f||s.r!==a.r||s.w!==a.w||s.x!==a.x}}
A.pv.prototype={
ar(){return new A.mw(A.acH(!0,B.Zk.i(0)+" Focus Scope",!1),A.adh(),B.n,this.$ti.h("mw<1>"))}}
A.mw.prototype={
aE(){var s,r,q=this
q.aZ()
s=A.a([],t.ro)
r=q.a.c.fy
if(r!=null)s.push(r)
r=q.a.c.go
if(r!=null)s.push(r)
q.e=new A.wM(s)
if(q.a.c.gjB()){q.a.c.a.a.toString
s=!0}else s=!1
if(s){s=q.a.c.a.x.gdm()
if(s!=null)s.lC(q.f)}},
b0(a){var s,r=this
r.bz(a)
if(r.a.c.gjB()){r.a.c.a.a.toString
s=!0}else s=!1
if(s){s=r.a.c.a.x.gdm()
if(s!=null)s.lC(r.f)}},
b2(){this.cn()
this.d=null},
Qn(){this.av(new A.a7R(this))},
m(){this.f.m()
this.aR()},
gE2(){var s=this.a.c.fy
if((s==null?null:s.gaW(s))!==B.al){s=this.a.c.a
s=s==null?null:s.CW.a
s=s===!0}else s=!0
return s},
M(a){var s,r,q=this,p=null,o=q.a.c,n=o.gjB(),m=q.a.c
if(!m.gqK()){m=m.js$
m=m!=null&&m.length!==0}else m=!0
s=q.a.c
s=s.gqK()||s.wU$>0
r=q.a.c
return A.mL(o.c,new A.a7V(q),new A.wO(n,m,s,o,new A.tP(r.fx,new A.nX(new A.fV(new A.a7W(q),p),r.k3,p),p),p))}}
A.a7R.prototype={
$0(){this.a.d=null},
$S:0}
A.a7V.prototype={
$2(a,b){var s=this.a.a.c.c.a
b.toString
return new A.jV(b,s,null)},
$S:313}
A.a7W.prototype={
$1(a){var s,r=null,q=A.aS([B.BH,new A.Kq(a,new A.bd(A.a([],t.B8),t.dc))],t.n,t.nT),p=this.a,o=p.e
o===$&&A.b()
s=p.d
if(s==null)s=p.d=new A.hu(new A.fV(new A.a7T(p),r),p.a.c.k2)
return A.QL(q,new A.o1(p.r,B.c7,B.TX,A.ag_(!1,new A.hu(A.mL(o,new A.a7U(p),s),r),r,r,p.f),r))},
$S:314}
A.a7U.prototype={
$2(a,b){var s,r,q=this.a,p=q.a.c,o=p.fy
o.toString
s=p.go
s.toString
r=p.a
r=r==null?null:r.CW
if(r==null)r=A.iJ(!1)
return p.Fs(a,o,s,A.mL(r,new A.a7S(q),b))},
$S:29}
A.a7S.prototype={
$2(a,b){var s=this.a,r=s.gE2()
s.f.scb(!r)
return new A.h8(r,null,b,null)},
$S:315}
A.a7T.prototype={
$1(a){var s,r=this.a.a.c,q=r.fy
q.toString
s=r.go
s.toString
return r.WX(a,q,s)},
$S:13}
A.jG.prototype={
av(a){var s,r=this.k1
if(r.gbo()!=null){r=r.gbo()
if(r.a.c.gjB())if(!r.gE2()){r.a.c.a.a.toString
s=!0}else s=!1
else s=!1
if(s){s=r.a.c.a.x.gdm()
if(s!=null)s.lC(r.f)}r.av(a)}else a.$0()},
Fs(a,b,c,d){return d},
iF(){var s=this
s.ML()
s.fy=A.GL(A.dA.prototype.gbE.call(s,s))
s.go=A.GL(A.dA.prototype.gzs.call(s))},
n_(){var s,r=this,q=r.k1
if(q.gbo()!=null){r.a.a.toString
s=!0}else s=!1
if(s){s=r.a.x.gdm()
if(s!=null)s.lC(q.gbo().f)}return r.MK()},
mY(){var s,r=this,q=r.k1
if(q.gbo()!=null){r.a.a.toString
s=!0}else s=!1
if(s){s=r.a.x.gdm()
if(s!=null)s.lC(q.gbo().f)}r.MI()},
sr5(a){var s,r=this
if(r.fx===a)return
r.av(new A.Yk(r,a))
s=r.fy
s.toString
s.saS(0,r.fx?B.cR:A.dA.prototype.gbE.call(r,r))
s=r.go
s.toString
s.saS(0,r.fx?B.cb:A.dA.prototype.gzs.call(r))
r.mH()},
eV(){var s=0,r=A.ab(t.ij),q,p=this,o,n,m,l
var $async$eV=A.ac(function(a,b){if(a===1)return A.a8(b,r)
while(true)switch(s){case 0:p.k1.gbo()
o=A.ay(p.id,!0,t.CQ),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}l=J
s=6
return A.at(o[m].$0(),$async$eV)
case 6:if(!l.f(b,!0)){q=B.T0
s=1
break}case 4:++m
s=3
break
case 5:q=p.MQ()
s=1
break
case 1:return A.a9(q,r)}})
return A.aa($async$eV,r)},
wx(a){this.Mh(a)
this.mH()},
mH(){var s,r=this
r.Me()
r.av(new A.Yi())
s=r.k4
s===$&&A.b()
s.fp()
s=r.p1
s===$&&A.b()
r.gnA()
s.snA(!0)},
pW(){this.Md()
var s=this.k4
s===$&&A.b()
s.fp()
s=this.k1
if(s.gbo()!=null)s.gbo().Qn()},
OH(a){var s,r,q=this,p=null
q.gWN()
q.gw8()
s=q.gWO()
r=q.fy
if(r.gaW(r)!==B.al){r=q.fy
r=r.gaW(r)===B.I}else r=!0
q.gw8()
return new A.h8(r,p,new A.tw(p,!1,p,!0,s,p),p)},
OJ(a){var s=this,r=null,q=s.ok
return q==null?s.ok=A.dy(r,new A.pv(s,s.k1,A.n(s).h("pv<1>")),!1,r,!1,r,r,r,r,r,r,r,r,r,r,r,B.Sz,r,r,r,r):q},
i(a){return"ModalRoute("+this.b.i(0)+", animation: "+A.h(this.as)+")"}}
A.Yk.prototype={
$0(){this.a.fx=this.b},
$S:0}
A.Yi.prototype={
$0(){},
$S:0}
A.pu.prototype={
eV(){var s=0,r=A.ab(t.ij),q,p=this,o
var $async$eV=A.ac(function(a,b){if(a===1)return A.a8(b,r)
while(true)switch(s){case 0:o=p.js$
if(o!=null&&o.length!==0){q=B.AJ
s=1
break}q=p.Mo()
s=1
break
case 1:return A.a9(q,r)}})
return A.aa($async$eV,r)},
jk(a){var s,r,q=this,p=q.js$
if(p!=null&&p.length!==0){s=p.pop()
s.b=null
s.a2f()
r=s.c&&--q.wU$===0
if(q.js$.length===0||r)q.mH()
return!1}q.MJ(a)
return!0}}
A.HE.prototype={
M(a){var s,r,q,p=t.l,o=a.a1(p).f.f,n=Math.max(o.a,0),m=this.d,l=m?o.b:0
l=Math.max(l,0)
s=Math.max(o.c,0)
r=this.f
q=r?o.d:0
return new A.hk(new A.bi(n,l,s,Math.max(q,0)),new A.eI(a.a1(p).f.Iq(r,!0,!0,m),this.x,null),null)}}
A.HI.prototype={
Iw(){},
G7(a,b){if(b!=null)b.cK(new A.uP(null,a,b,0))},
G8(a,b,c){b.cK(A.adi(b,null,null,a,c))},
qh(a,b,c){b.cK(new A.hj(null,c,0,a,b,0))},
G6(a,b){b.cK(new A.iy(null,a,b,0))},
mz(){},
m(){},
i(a){return"<optimized out>#"+A.bB(this)}}
A.jq.prototype={
mz(){this.a.eX(0)},
ghn(){return!1},
gfo(){return!1},
gdQ(){return 0}}
A.Wt.prototype={
ghn(){return!1},
gfo(){return!1},
gdQ(){return 0},
m(){this.b.$0()
this.or()}}
A.a10.prototype={
Or(a,b){var s,r,q=this
if(b==null)return a
if(a===0){if(q.d!=null)if(q.r==null){s=q.e
s=b.a-s.a>5e4}else s=!1
else s=!1
if(s)q.r=0
return 0}else{s=q.r
if(s==null)return a
else{s+=a
q.r=s
r=q.d
r.toString
if(Math.abs(s)>r){q.r=null
s=Math.abs(a)
if(s>24)return a
else return Math.min(r/3,s)*J.dV(a)}else return 0}}},
bc(a,b){var s,r,q,p,o=this
o.x=b
s=b.c
s.toString
r=s===0
if(!r)o.e=b.a
q=b.a
if(o.f)if(r)if(q!=null){r=o.e
r=q.a-r.a>2e4}else r=!0
else r=!1
else r=!1
if(r)o.f=!1
p=o.Or(s,q)
if(p===0)return
s=o.a
if(A.ab2(s.w.a.c))p=-p
s.yU(p>0?B.lf:B.lg)
r=s.at
r.toString
s.tv(r-s.r.w5(s,p))},
m(){this.x=null
this.b.$0()},
i(a){return"<optimized out>#"+A.bB(this)}}
A.Un.prototype={
G7(a,b){var s=t.o5.a(this.b.x)
if(b!=null)b.cK(new A.uP(s,a,b,0))},
G8(a,b,c){b.cK(A.adi(b,null,t.mF.a(this.b.x),a,c))},
qh(a,b,c){b.cK(new A.hj(t.mF.a(this.b.x),c,0,a,b,0))},
G6(a,b){var s=this.b.x
b.cK(new A.iy(s instanceof A.fj?s:null,a,b,0))},
ghn(){var s=this.b
return(s==null?null:s.w)!==B.dv},
gfo(){return!0},
gdQ(){return 0},
m(){this.b=null
this.or()},
i(a){return"<optimized out>#"+A.bB(this)+"("+A.h(this.b)+")"}}
A.z6.prototype={
Iw(){var s=this.a,r=this.b
r===$&&A.b()
s.eX(r.gdQ())},
mz(){var s=this.a,r=this.b
r===$&&A.b()
s.eX(r.gdQ())},
vs(){var s=this.b
s===$&&A.b()
s=s.x
s===$&&A.b()
if(!(Math.abs(this.a.tv(s))<1e-10)){s=this.a
s.eI(new A.jq(s))}},
uj(){this.a.eX(0)},
qh(a,b,c){var s=this.b
s===$&&A.b()
b.cK(new A.hj(null,c,s.gdQ(),a,b,0))},
gfo(){return!0},
gdQ(){var s=this.b
s===$&&A.b()
return s.gdQ()},
m(){var s=this.b
s===$&&A.b()
s.m()
this.or()},
i(a){var s=A.bB(this),r=this.b
r===$&&A.b()
return"<optimized out>#"+s+"("+r.i(0)+")"},
ghn(){return this.c}}
A.Cg.prototype={
vs(){var s=this.a,r=this.c
r===$&&A.b()
r=r.x
r===$&&A.b()
if(s.tv(r)!==0){s=this.a
s.eI(new A.jq(s))}},
uj(){var s=this.a,r=this.c
r===$&&A.b()
s.eX(r.gdQ())},
qh(a,b,c){var s=this.c
s===$&&A.b()
b.cK(new A.hj(null,c,s.gdQ(),a,b,0))},
ghn(){return!0},
gfo(){return!0},
gdQ(){var s=this.c
s===$&&A.b()
return s.gdQ()},
m(){var s=this.b
s===$&&A.b()
s.fU(0)
s=this.c
s===$&&A.b()
s.m()
this.or()},
i(a){var s=A.bB(this),r=this.c
r===$&&A.b()
return"<optimized out>#"+s+"("+r.i(0)+")"}}
A.uJ.prototype={
nT(a,b,c,d){var s,r=this
if(b.a==null){s=$.fy.hE$
s===$&&A.b()
s=s.S(0,c)}else s=!0
if(s){r.b.nT(a,b,c,d)
return}s=r.a
if(s.gaJ(s)==null)return
s=s.gaJ(s)
s.toString
if(A.aqO(s)){$.bF.rX(new A.a0W(r,a,b,c,d))
return}r.b.nT(a,b,c,d)},
qV(a,b,c){return this.b.qV(0,b,c)},
qX(a,b){return this.b.qX(a,b)},
xR(a){return this.b.xR(a)}}
A.a0W.prototype={
$1(a){var s=this
A.f5(new A.a0V(s.a,s.b,s.c,s.d,s.e))},
$S:2}
A.a0V.prototype={
$0(){var s=this
return s.a.nT(s.b,s.c,s.d,s.e)},
$S:0}
A.q0.prototype={
D(){return"AndroidOverscrollIndicator."+this.b}}
A.HJ.prototype={
Y0(a,b,c,d,e,f){return new A.a9S(this,f,c!==!1,d,e,b,a)},
XU(a){return this.Y0(null,null,null,null,null,a)},
iV(a){return A.kt()},
gwK(){return B.B3},
pT(a,b,c){var s=null
switch(this.iV(a)){case B.bh:case B.b5:case B.bi:return A.aqs(b,c.b,B.ce,s,s,A.yH(),B.u,s,s,s,s,B.cW,s)
case B.av:case B.bg:case B.aw:return b}},
pR(a,b,c){var s
switch(this.iV(a)){case B.aw:case B.bh:case B.b5:case B.bi:s=1
break
case B.av:s=2
break
case B.bg:s=3
break
default:s=null
break}if(s)c$0:for(;!0;)switch(s){case 1:return b
case 2:switch(1){case 1:break}if(2)c$1:for(;!0;)switch(2){case 1:return new A.oB(c.a,B.af,b,null)
case 2:s=3
continue c$0}break c$0
case 3:return new A.nn(c.a,B.k,b,null)}},
rH(a){switch(this.iV(a)){case B.aw:return new A.a0X()
case B.b5:return new A.a0Y()
case B.av:case B.bg:case B.bh:case B.bi:return new A.a0Z()}},
jR(a){switch(this.iV(a)){case B.aw:return B.Cw
case B.b5:return B.Cx
case B.av:case B.bg:case B.bh:case B.bi:return B.DZ}},
i(a){return"ScrollBehavior"}}
A.a0X.prototype={
$1(a){return A.aoz(a.gc4(a))},
$S:316}
A.a0Y.prototype={
$1(a){var s=a.gc4(a),r=t.pa
return new A.nM(A.aV(20,null,!1,r),s,A.aV(20,null,!1,r))},
$S:317}
A.a0Z.prototype={
$1(a){return new A.fJ(a.gc4(a),A.aV(20,null,!1,t.pa))},
$S:107}
A.a9S.prototype={
gwK(){var s=this.f
return s==null?B.B3:s},
pR(a,b,c){var s=this.a.pR(a,b,c)
return s},
pT(a,b,c){if(this.b)return this.a.pT(a,b,c)
return b},
jR(a){var s=this.a.jR(a)
return s},
rH(a){return this.a.rH(a)},
i(a){return"_WrappedScrollBehavior"}}
A.uK.prototype={
bR(a){var s
if(A.z(this.f)===A.z(a.f))s=!1
else s=!0
return s}}
A.oj.prototype={
fP(a,b,c){return this.WI(a,b,c)},
WI(a,b,c){var s=0,r=A.ab(t.H),q=this,p,o,n
var $async$fP=A.ac(function(d,e){if(d===1)return A.a8(e,r)
while(true)switch(s){case 0:n=A.a([],t.iJ)
for(p=q.d,o=0;o<p.length;++o)n.push(p[o].fP(a,b,c))
s=2
return A.at(A.ry(n,t.H),$async$fP)
case 2:return A.a9(null,r)}})
return A.aa($async$fP,r)},
an(a){this.d.push(a)
a.V(0,this.ge1())},
mW(a,b){b.F(0,this.ge1())
B.b.u(this.d,b)},
m(){var s,r,q,p
for(s=this.d,r=s.length,q=this.ge1(),p=0;p<s.length;s.length===r||(0,A.P)(s),++p)s[p].F(0,q)
this.dz()},
FT(a,b,c){return A.aqN(b,null,0,!0,c,a)},
i(a){var s=A.a([],t.s),r=this.d,q=r.length
if(q===0)s.push("no clients")
else if(q===1){r=B.b.gbi(r).at
r.toString
s.push("one client, offset "+B.d.K(r,1))}else s.push(""+q+" clients")
return"<optimized out>#"+A.bB(this)+"("+B.b.bg(s,", ")+")"}}
A.fD.prototype={
fd(){var s=this,r=null,q=s.gxh()?s.ges():r,p=s.gxh()?s.ger():r,o=s.gH0()?s.gc5():r,n=s.gH3()?s.go3():r,m=s.gfb()
return new A.rq(q,p,o,n,m)},
gye(){var s=this
return s.gc5()<s.ges()||s.gc5()>s.ger()},
gFn(){var s=this
return s.gc5()===s.ges()||s.gc5()===s.ger()},
gjq(){var s=this
return s.go3()-A.E(s.ges()-s.gc5(),0,s.go3())-A.E(s.gc5()-s.ger(),0,s.go3())}}
A.rq.prototype={
ges(){var s=this.a
s.toString
return s},
ger(){var s=this.b
s.toString
return s},
gxh(){return this.a!=null&&this.b!=null},
gc5(){var s=this.c
s.toString
return s},
gH0(){return this.c!=null},
go3(){var s=this.d
s.toString
return s},
gH3(){return this.d!=null},
i(a){var s=this
return"FixedScrollMetrics("+B.d.K(Math.max(s.gc5()-s.ges(),0),1)+"..["+B.d.K(s.gjq(),1)+"].."+B.d.K(Math.max(s.ger()-s.gc5(),0),1)+")"},
gfb(){return this.e}}
A.KN.prototype={}
A.dO.prototype={}
A.J3.prototype={
HW(a){if(t.bx.b(a))++a.cw$
return!1}}
A.dx.prototype={
c6(a){this.Nr(a)
a.push(this.a.i(0))}}
A.uP.prototype={
c6(a){var s
this.lQ(a)
s=this.d
if(s!=null)a.push(s.i(0))}}
A.hw.prototype={
c6(a){var s
this.lQ(a)
a.push("scrollDelta: "+A.h(this.e))
s=this.d
if(s!=null)a.push(s.i(0))},
gGb(){return this.d}}
A.hj.prototype={
c6(a){var s,r=this
r.lQ(a)
a.push("overscroll: "+B.d.K(r.e,1))
a.push("velocity: "+B.d.K(r.f,1))
s=r.d
if(s!=null)a.push(s.i(0))}}
A.iy.prototype={
c6(a){var s
this.lQ(a)
s=this.d
if(s!=null)a.push(s.i(0))},
gGb(){return this.d}}
A.IY.prototype={
c6(a){this.lQ(a)
a.push("direction: "+this.d.i(0))}}
A.xo.prototype={
c6(a){var s,r
this.tl(a)
s=this.cw$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.xn.prototype={
bR(a){return this.f!==a.f}}
A.ke.prototype={
a0_(a,b){return this.d.$1(b)}}
A.uN.prototype={
ar(){return new A.uO(new A.t1(t.uk),B.n)}}
A.uO.prototype={
F(a,b){var s,r,q,p=this.d
p.toString
p=A.as0(p)
s=A.n(p).c
for(;p.q();){r=p.c
if(r==null)r=s.a(r)
if(J.f(r.d,b)){p=r.a
p.toString
A.n(r).h("lt.E").a(r);++p.a
s=r.b
s.c=r.c
r.c.b=s
q=--p.b
r.a=r.b=r.c=null
if(q===0)p.c=null
else if(r===p.c)p.c=s
return}}},
D5(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.d
if(i.b===0)return
p=A.ay(i,!0,t.cS)
for(i=p.length,o=0;o<i;++o){s=p[o]
try{if(s.a!=null)J.aml(s,a)}catch(n){r=A.au(n)
q=A.aG(n)
m=j instanceof A.bP?A.cL(j):null
l=A.bm("while dispatching notifications for "+A.aA(m==null?A.aM(j):m).i(0))
k=$.f7()
if(k!=null)k.$1(new A.bz(r,q,"widget library",l,new A.a11(j),!1))}}},
M(a){var s=this
return new A.cU(new A.a12(s),new A.cU(new A.a13(s),new A.xn(s,s.a.c,null),null,t.Bf),null,t.iY)},
m(){this.d=null
this.aR()}}
A.a11.prototype={
$0(){var s=null,r=this.a
return A.a([A.ji("The "+A.z(r).i(0)+" sending notification was",r,!0,B.b8,s,!1,s,s,B.az,s,!1,!0,!0,B.bn,s,t.Ec)],t.F)},
$S:14}
A.a12.prototype={
$1(a){var s=new A.JO(null,null,a.a,a.b,0)
s.cw$=a.cw$
this.a.D5(s)
return!1},
$S:48}
A.a13.prototype={
$1(a){this.a.D5(a)
return!1},
$S:23}
A.JO.prototype={}
A.uL.prototype={
D(){return"ScrollDecelerationRate."+this.b}}
A.lS.prototype={
fR(a){var s=this.a
s=s==null?null:s.jc(a)
return s==null?a:s},
jc(a){return new A.lS(this.fR(a))},
w5(a,b){var s=this.a
if(s==null)return b
return s.w5(a,b)},
iY(a){var s,r=this.a
if(r==null){r=a.at
r.toString
if(r===0){r=a.z
r.toString
s=a.Q
s.toString
s=r!==s
r=s}else r=!0
return r}return r.iY(a)},
Ik(a,b,c){var s=this.a
if(s==null){$.a6.toString
s=$.c9().gjK()
return Math.abs(a)>Math.max(Math.abs(s.a),Math.abs(s.b))}return s.Ik(a,b,c)},
mx(a,b){var s=this.a
if(s==null)return 0
return s.mx(a,b)},
pK(a,b,c,d){var s=this.a
if(s==null){s=b.c
s.toString
return s}return s.pK(a,b,c,d)},
kH(a,b){var s=this.a
if(s==null)return null
return s.kH(a,b)},
gk0(){var s=this.a
s=s==null?null:s.gk0()
return s==null?$.akH():s},
gnW(){var s=this.a
s=s==null?null:s.gnW()
return s==null?$.akI():s},
gxK(){var s=this.a
s=s==null?null:s.gxK()
return s==null?18:s},
gr2(){var s=this.a
s=s==null?null:s.gr2()
return s==null?50:s},
gnB(){var s=this.a
s=s==null?null:s.gnB()
return s==null?8000:s},
wd(a){var s=this.a
if(s==null)return 0
return s.wd(a)},
gwL(){var s=this.a
return s==null?null:s.gwL()},
gkB(){return!0},
i(a){var s=this.a
if(s==null)return"ScrollPhysics"
return"ScrollPhysics -> "+s.i(0)}}
A.GO.prototype={
jc(a){return new A.GO(this.fR(a))},
pK(a,b,c,d){var s,r,q,p,o,n,m,l
if(d!==0){s=!1
r=!1}else{s=!0
r=!0}q=c.a
q.toString
p=b.a
p.toString
if(q===p){o=c.b
o.toString
n=b.b
n.toString
n=o===n
o=n}else o=!1
if(o)s=!1
o=c.c
o.toString
n=b.c
n.toString
if(o!==n){if(isFinite(q)){n=c.b
n.toString
if(isFinite(n))if(isFinite(p)){n=b.b
n.toString
n=isFinite(n)}else n=!1
else n=!1}else n=!1
if(n)r=!1
s=!1}n=o<q
if(!n){m=c.b
m.toString
m=o>m}else m=!0
if(m)r=!1
if(s){if(n&&p>q)return p-(q-o)
q=c.b
q.toString
if(o>q){n=b.b
n.toString
n=n<q}else n=!1
if(n){p=b.b
p.toString
return p+(o-q)}}l=this.Mr(a,b,c,d)
if(r){q=b.b
q.toString
l=A.E(l,p,q)}return l}}
A.qo.prototype={
jc(a){return new A.qo(this.b,this.fR(a))},
GN(a){switch(this.b.a){case 1:return 0.07*Math.pow(1-a,2)
case 0:return 0.52*Math.pow(1-a,2)}},
w5(a,b){var s,r,q,p,o,n,m
if(!a.gye())return b
s=a.z
s.toString
r=a.at
r.toString
q=Math.max(s-r,0)
s=a.Q
s.toString
p=Math.max(r-s,0)
o=Math.max(q,p)
if(!(q>0&&b<0))n=p>0&&b>0
else n=!0
s=a.ax
if(n){s.toString
m=this.GN((o-Math.abs(b))/s)}else{s.toString
m=this.GN(o/s)}return J.dV(b)*A.amM(o,Math.abs(b),m)},
mx(a,b){return 0},
kH(a,b){var s,r,q,p,o,n,m,l=this.gnW()
if(Math.abs(b)>=l.c||a.gye()){switch(this.b.a){case 1:s=1400
break
case 0:s=0
break
default:s=null}r=this.gk0()
q=a.at
q.toString
p=a.z
p.toString
o=a.Q
o.toString
n=new A.Rn(p,o,r,l)
if(q<p){n.f=new A.jX(p,A.xF(r,q-p,b),B.c3)
n.r=-1/0}else if(q>o){n.f=new A.jX(o,A.xF(r,q-o,b),B.c3)
n.r=-1/0}else{q=n.e=A.aos(0.135,q,b,s)
m=q.gqv()
if(b>0&&m>o){p=q.IL(o)
n.r=p
n.f=new A.jX(o,A.xF(r,o-o,Math.min(q.dD(0,p),5000)),B.c3)}else if(b<0&&m<p){o=q.IL(p)
n.r=o
n.f=new A.jX(p,A.xF(r,p-p,Math.min(q.dD(0,o),5000)),B.c3)}else n.r=1/0}return n}return null},
gr2(){return 100},
wd(a){return J.dV(a)*Math.min(0.000816*Math.pow(Math.abs(a),1.967),4e4)},
gwL(){return 3.5},
gnB(){switch(this.b.a){case 1:return 64e3
case 0:return A.lS.prototype.gnB.call(this)}},
gk0(){switch(this.b.a){case 1:return A.aht(0.3,1.3,75)
case 0:return A.lS.prototype.gk0.call(this)}}}
A.qx.prototype={
jc(a){return new A.qx(this.fR(a))},
mx(a,b){var s,r,q=a.at
q.toString
if(b<q){s=a.z
s.toString
s=q<=s}else s=!1
if(s)return b-q
s=a.Q
s.toString
if(s<=q&&q<b)return b-q
r=a.z
r.toString
if(b<r&&r<q)return b-r
if(q<s&&s<b)return b-s
return 0},
kH(a,b){var s,r,q,p,o=null,n=this.gnW()
if(a.gye()){s=a.at
s.toString
r=a.Q
r.toString
if(s>r)q=r
else q=o
r=a.z
r.toString
if(s<r)q=r
s=this.gk0()
r=a.at
r.toString
q.toString
return new A.jX(q,A.xF(s,r-q,Math.min(0,b)),n)}s=Math.abs(b)
if(s<n.c)return o
if(b>0){r=a.at
r.toString
p=a.Q
p.toString
p=r>=p
r=p}else r=!1
if(r)return o
if(b<0){r=a.at
r.toString
p=a.z
p.toString
p=r<=p
r=p}else r=!1
if(r)return o
r=a.at
r.toString
r=new A.RO(r,b,n)
s=Math.exp(Math.log(0.35*s/778.3530259679999)/($.akn()-1))
r.e=s
r.f=Math.abs(b*s/3.065)
return r}}
A.ol.prototype={
D(){return"ScrollPositionAlignmentPolicy."+this.b}}
A.iz.prototype={
Ay(a,b,c,d,e){if(d!=null)this.j8(d)
this.ID()},
ges(){var s=this.z
s.toString
return s},
ger(){var s=this.Q
s.toString
return s},
gxh(){return this.z!=null&&this.Q!=null},
gc5(){var s=this.at
s.toString
return s},
gH0(){return this.at!=null},
go3(){var s=this.ax
s.toString
return s},
gH3(){return this.ax!=null},
j8(a){var s=this,r=a.z
if(r!=null&&a.Q!=null){r.toString
s.z=r
r=a.Q
r.toString
s.Q=r}r=a.at
if(r!=null)s.at=r
r=a.ax
if(r!=null)s.ax=r
s.fr=a.fr
a.fr=null
if(A.z(a)!==A.z(s))s.fr.Iw()
s.w.zy(s.fr.ghn())
s.dy.sn(0,s.fr.gfo())},
K2(a){var s,r,q,p=this,o=p.at
o.toString
if(a!==o){s=p.r.mx(p,a)
o=p.at
o.toString
r=a-s
p.at=r
if(r!==o){p.vL()
p.zV()
r=p.at
r.toString
p.wF(r-o)}if(s!==0){o=p.fr
o.toString
r=p.fd()
q=$.a6.ac$.z.j(0,p.w.z)
q.toString
o.qh(r,q,s)
return s}}return 0},
x6(a){var s=this,r=s.at
r.toString
s.as=a-r
s.at=a
s.vL()
s.zV()
$.bF.cy$.push(new A.a14(s))},
zo(){var s,r=this.w,q=r.c
q.toString
q=A.Z8(q)
if(q!=null){r=r.c
r.toString
s=this.at
s.toString
q.J9(r,s)}},
ID(){var s,r,q
if(this.at==null){s=this.w
r=s.c
r.toString
r=A.Z8(r)
if(r==null)q=null
else{s=s.c
s.toString
q=r.Ih(s)}if(q!=null)this.at=q}},
IC(a,b){if(b)this.at=a
else this.dq(a)},
zn(){var s=this.at
s.toString
this.w.e.sn(0,s)
s=$.fE.a8$
s===$&&A.b()
s.GE()},
mB(a){if(this.ax!==a){this.ax=a
this.ch=!0}return!0},
my(a,b){var s,r,q,p=this
if(!A.yF(p.z,a,0.001)||!A.yF(p.Q,b,0.001)||p.ch||p.db!==A.b8(p.gfb())){p.z=a
p.Q=b
p.db=A.b8(p.gfb())
s=p.ay?p.fd():null
p.ch=!1
p.CW=!0
if(p.ay){r=p.cx
r.toString
s.toString
r=!p.Y1(r,s)}else r=!1
if(r)return!1
p.ay=!0}if(p.CW){p.Mv()
p.w.JV(p.r.iY(p))
p.CW=!1}s=p.fd()
if(p.cx!=null){r=Math.max(s.gc5()-s.ges(),0)
q=p.cx
if(r===Math.max(q.gc5()-q.ges(),0))if(s.gjq()===p.cx.gjq()){r=Math.max(s.ger()-s.gc5(),0)
q=p.cx
r=r===Math.max(q.ger()-q.gc5(),0)&&s.e===p.cx.e}else r=!1
else r=!1
r=!r}else r=!0
if(r){if(!p.cy){A.f5(p.gYB())
p.cy=!0}p.cx=p.fd()}return!0},
Y1(a,b){var s=this,r=s.r.pK(s.fr.gfo(),b,a,s.fr.gdQ()),q=s.at
q.toString
if(r!==q){s.at=r
return!1}return!0},
mz(){this.fr.mz()
this.vL()},
vL(){var s,r,q,p,o,n=this,m=n.w
switch(m.a.c.a){case 0:s=B.dD
r=B.dC
break
case 1:s=B.dE
r=B.dF
break
case 2:s=B.dC
r=B.dD
break
case 3:s=B.dF
r=B.dE
break
default:s=null
r=null}q=A.b7(t.nS)
p=n.at
p.toString
o=n.z
o.toString
if(p>o)q.E(0,r)
p=n.at
p.toString
o=n.Q
o.toString
if(p<o)q.E(0,s)
if(A.aeB(q,n.dx))return
n.dx=q
m=m.z
if(m.gbo()!=null)m.gbo().a1k(q)},
wQ(a,b,c,d,e,f){var s,r,q,p,o,n=this,m=null,l=A.aqw(a)
l.toString
s=f!=null&&f!==a?A.fw(f.bv(0,a),a.gha().eO(f.gha())):m
switch(c.a){case 0:r=l.jP(a,b,s)
q=n.z
q.toString
p=n.Q
p.toString
o=A.E(r.a,q,p)
break
case 1:r=l.jP(a,1,s)
q=n.z
q.toString
p=n.Q
p.toString
o=A.E(r.a,q,p)
r=n.at
r.toString
if(o<r)o=r
break
case 2:r=l.jP(a,0,s)
q=n.z
q.toString
p=n.Q
p.toString
o=A.E(r.a,q,p)
r=n.at
r.toString
if(o>r)o=r
break
default:o=m}r=n.at
r.toString
if(o===r)return A.bR(m,t.H)
if(e.a===B.u.a){n.dq(o)
return A.bR(m,t.H)}return n.fP(o,d,e)},
nE(a,b,c,d){var s,r=this.z
r.toString
s=this.Q
s.toString
b=A.E(b,r,s)
return this.MN(0,b,c,d)},
eI(a){var s,r,q=this,p=q.fr
if(p!=null){s=p.ghn()
r=q.fr.gfo()
if(r&&!a.gfo())q.wz()
q.fr.m()}else{r=