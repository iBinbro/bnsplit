
if(J.L(b)!==A.v(s))return!1
return b instanceof A.lB&&b.d.k(0,s.d)&&b.e.k(0,s.e)&&b.f===s.f&&A.cA(b.a,s.a)&&A.cA(b.b,s.b)},
gt(a){var s=this,r=A.ce(s.a),q=s.b
q=q==null?null:A.ce(q)
return A.N(s.d,s.e,s.f,s.c,r,q,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a){var s=this,r=A.a(["begin: "+s.d.h(0),"end: "+s.e.h(0),"colors: "+A.h(s.a)],t.s),q=s.b
if(q!=null)r.push("stops: "+A.h(q))
r.push("tileMode: "+s.f.h(0))
return"LinearGradient("+B.b.bm(r,", ")+")"}}
A.a_7.prototype={
$1(a){var s=A.q(null,a,this.a)
s.toString
return s},
$S:48}
A.Z8.prototype={
T(a){var s,r,q,p
for(s=this.b,r=s.gaT(s),r=new A.dK(J.ao(r.a),r.b),q=A.n(r).z[1];r.u();){p=r.a;(p==null?q.a(p):p).n()}s.T(0)
for(s=this.a,r=s.gaT(s),r=new A.dK(J.ao(r.a),r.b),q=A.n(r).z[1];r.u();){p=r.a
if(p==null)p=q.a(p)
p.a.I(0,p.b)}s.T(0)
this.f=0},
y8(a){var s,r,q,p=this,o=p.c.A(0,a)
if(o!=null){s=o.a
r=o.d
r===$&&A.b()
if(s.w)A.a6(A.Z(u.V))
B.b.A(s.x,r)
o.BO()}q=p.a.A(0,a)
if(q!=null){q.a.I(0,q.b)
return!0}o=p.b.A(0,a)
if(o!=null){s=p.f
r=o.b
r.toString
p.f=s-r
o.n()
return!0}return!1},
G8(a,b,c){var s,r=this,q=b.b
if(q!=null&&q<=104857600&&!0){s=r.f
q.toString
r.f=s+q
r.b.l(0,a,b)
r.Rz(c)}else b.n()},
wK(a,b,c){var s=this.c.bs(0,a,new A.Za(this,b,a))
if(s.b==null)s.b=c},
Ko(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=null,j={},i=l.a,h=i.j(0,b),g=h==null?k:h.a
j.a=g
if(g!=null)return g
h=l.b
q=h.A(0,b)
if(q!=null){j=q.a
l.wK(b,j,q.b)
h.l(0,b,q)
return j}p=l.c.j(0,b)
if(p!=null){j=p.a
i=p.b
if(j.w)A.a6(A.Z(u.V))
h=new A.nE(j)
h.pK(j)
l.G8(b,new A.wd(j,i,h),k)
return j}try{g=j.a=c.$0()
l.wK(b,g,k)
h=g}catch(o){s=A.an(o)
r=A.aH(o)
d.$2(s,r)
return k}j.b=!1
n=A.aR("pendingImage")
m=new A.eA(new A.Zb(j,l,b,!0,k,n),k,k)
n.b=new A.P_(h,m)
i.l(0,b,n.ak())
j.a.Z(0,m)
return j.a},
X(a,b){return this.a.j(0,b)!=null||this.b.j(0,b)!=null},
Rz(a){var s,r,q,p,o,n=this,m=n.b,l=A.n(m).i("b6<1>")
while(!0){if(!(n.f>104857600||m.a>1000))break
s=new A.b6(m,l)
r=s.ga6(s)
if(!r.u())A.a6(A.bX())
q=r.gG(r)
p=m.j(0,q)
s=n.f
o=p.b
o.toString
n.f=s-o
p.n()
m.A(0,q)}}}
A.Za.prototype={
$0(){return A.atV(this.b,new A.Z9(this.a,this.c))},
$S:210}
A.Z9.prototype={
$0(){this.a.c.A(0,this.b)},
$S:0}
A.Zb.prototype={
$2(a,b){var s,r,q,p,o,n=this
if(a!=null){s=a.a
r=s.gbp(s)*s.gbN(s)*4
s.n()}else r=null
s=n.a
q=s.a
if(q.w)A.a6(A.Z(u.V))
p=new A.nE(q)
p.pK(q)
o=new A.wd(q,r,p)
p=n.b
q=n.c
p.wK(q,s.a,r)
if(n.d)p.G8(q,o,n.e)
else o.n()
p.a.A(0,q)
if(!s.b){q=n.f.ak()
q.a.I(0,q.b)}s.b=!0},
$S:211}
A.Mb.prototype={
n(){$.bL.fy$.push(new A.a6M(this))}}
A.a6M.prototype={
$1(a){var s=this.a,r=s.c
if(r!=null)r.n()
s.c=null},
$S:2}
A.wd.prototype={}
A.py.prototype={
QE(a,b,c){var s=new A.a8l(this,b)
this.d=s
if(a.w)A.a6(A.Z(u.V))
a.x.push(s)},
h(a){return"<optimized out>#"+A.b4(this)}}
A.a8l.prototype={
$0(){var s,r,q
this.b.$0()
s=this.a
r=s.a
q=s.d
q===$&&A.b()
if(r.w)A.a6(A.Z(u.V))
B.b.A(r.x,q)
s.BO()},
$S:0}
A.P_.prototype={}
A.nB.prototype={
k(a,b){var s=this
if(b==null)return!1
if(J.L(b)!==A.v(s))return!1
return b instanceof A.nB&&b.a==s.a&&b.b==s.b&&J.e(b.c,s.c)&&b.d==s.d&&J.e(b.e,s.e)&&b.f==s.f},
gt(a){var s=this
return A.N(s.a,s.b,s.c,s.e,s.f,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a){var s,r=this,q=""+"ImageConfiguration(",p=r.a
if(p!=null){q+="bundle: "+p.h(0)
s=!0}else s=!1
p=r.b
if(p!=null){if(s)q+=", "
p=q+("devicePixelRatio: "+B.c.O(p,1))
q=p
s=!0}p=r.c
if(p!=null){if(s)q+=", "
p=q+("locale: "+p.h(0))
q=p
s=!0}p=r.d
if(p!=null){if(s)q+=", "
p=q+("textDirection: "+p.h(0))
q=p
s=!0}p=r.e
if(p!=null){if(s)q+=", "
p=q+("size: "+p.h(0))
q=p
s=!0}p=r.f
if(p!=null){if(s)q+=", "
p=q+("platform: "+p.b)
q=p}q+=")"
return q.charCodeAt(0)==0?q:q}}
A.fG.prototype={
V(a){var s=new A.Zi()
this.Se(a,new A.Zg(this,a,s),new A.Zh(this,a,s))
return s},
Se(a,b,c){var s,r,q,p,o,n={}
n.a=null
n.b=!1
s=new A.Zd(n,c)
r=null
try{r=this.zc(a)}catch(o){q=A.an(o)
p=A.aH(o)
s.$2(q,p)
return}r.bz(new A.Zc(n,this,b,s),t.H).jS(s)},
oS(a,b,c,d){var s,r
if(b.a!=null){s=$.fP.iV$
s===$&&A.b()
s.Ko(0,c,new A.Ze(b),d)
return}s=$.fP.iV$
s===$&&A.b()
r=s.Ko(0,c,new A.Zf(this,c),d)
if(r!=null)b.AR(r)},
t0(a,b,c){throw A.d(A.W("Implement loadBuffer for faster image loading"))},
t2(a,b){return new A.p3(A.a([],t.fE),A.a([],t.u))},
t3(a,b){return new A.p3(A.a([],t.fE),A.a([],t.u))},
h(a){return"ImageConfiguration()"}}
A.Zg.prototype={
$2(a,b){this.a.oS(this.b,this.c,a,b)},
$S(){return A.n(this.a).i("~(fG.T,~(D,cP?))")}}
A.Zh.prototype={
$3(a,b,c){return this.Lu(a,b,c)},
Lu(a,b,c){var s=0,r=A.a2(t.H),q=this,p
var $async$$3=A.a3(function(d,e){if(d===1)return A.a_(e,r)
while(true)switch(s){case 0:s=2
return A.a9(null,$async$$3)
case 2:p=q.c
if(p.a==null)p.AR(new A.a7n(A.a([],t.fE),A.a([],t.u)))
p=p.a
p.toString
p.tK(A.bg("while resolving an image"),b,null,!0,c)
return A.a0(null,r)}})
return A.a1($async$$3,r)},
$S(){return A.n(this.a).i("ah<~>(fG.T?,D,cP?)")}}
A.Zd.prototype={
Lt(a,b){var s=0,r=A.a2(t.H),q,p=this,o
var $async$$2=A.a3(function(c,d){if(c===1)return A.a_(d,r)
while(true)switch(s){case 0:o=p.a
if(o.b){s=1
break}o.b=!0
p.b.$3(o.a,a,b)
case 1:return A.a0(q,r)}})
return A.a1($async$$2,r)},
$2(a,b){return this.Lt(a,b)},
$S:212}
A.Zc.prototype={
$1(a){var s,r,q,p=this
p.a.a=a
try{p.c.$2(a,p.d)}catch(q){s=A.an(q)
r=A.aH(q)
p.d.$2(s,r)}},
$S(){return A.n(this.b).i("aK(fG.T)")}}
A.Ze.prototype={
$0(){var s=this.a.a
s.toString
return s},
$S:80}
A.Zf.prototype={
$0(){var s=this.a,r=this.b,q=s.t3(r,$.fP.ga2U())
if(q instanceof A.p3){q=s.t2(r,$.fP.ga2S())
if(q instanceof A.p3)q=s.t0(0,r,$.fP.ga2Q())}return q},
$S:80}
A.p3.prototype={}
A.hl.prototype={
k(a,b){var s=this
if(b==null)return!1
if(J.L(b)!==A.v(s))return!1
return b instanceof A.hl&&b.a===s.a&&b.b===s.b&&b.c===s.c},
gt(a){return A.N(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a){return"AssetBundleImageKey(bundle: "+this.a.h(0)+', name: "'+this.b+'", scale: '+A.h(this.c)+")"}}
A.zN.prototype={
t3(a,b){return A.ae2(this.VJ(a,b),a.b,null,a.c)},
t2(a,b){return A.ae2(this.VK(a,b),a.b,null,a.c)},
t0(a,b,c){return A.ae2(this.VL(b,c),b.b,null,b.c)},
iE(a,b,c,d){return this.VM(a,b,c,d)},
VL(a,b){return this.iE(a,null,null,b)},
VK(a,b){return this.iE(a,null,b,null)},
VJ(a,b){return this.iE(a,b,null,null)},
VM(a,b,c,d){var s=0,r=A.a2(t.gP),q,p=2,o,n,m,l,k,j,i,h,g
var $async$iE=A.a3(function(e,f){if(e===1){o=f
s=p}while(true)switch(s){case 0:s=b!=null?3:4
break
case 3:n=null
p=6
s=9
return A.a9(a.a.ou(a.b),$async$iE)
case 9:n=f
p=2
s=8
break
case 6:p=5
i=o
if(A.an(i) instanceof A.iq){j=$.fP.iV$
j===$&&A.b()
j.y8(a)
throw i}else throw i
s=8
break
case 5:s=2
break
case 8:q=b.$1(n)
s=1
break
case 4:s=c!=null?10:11
break
case 10:m=null
p=13
s=16
return A.a9(a.a.ou(a.b),$async$iE)
case 16:m=f
p=2
s=15
break
case 13:p=12
h=o
if(A.an(h) instanceof A.iq){j=$.fP.iV$
j===$&&A.b()
j.y8(a)
throw h}else throw h
s=15
break
case 12:s=2
break
case 15:q=c.$1(m)
s=1
break
case 11:l=null
p=18
s=21
return A.a9(a.a.eb(0,a.b),$async$iE)
case 21:l=f
p=2
s=20
break
case 18:p=17
g=o
if(A.an(g) instanceof A.iq){j=$.fP.iV$
j===$&&A.b()
j.y8(a)
throw g}else throw g
s=20
break
case 17:s=2
break
case 20:d.toString
q=d.$1(A.da(l.buffer,0,null))
s=1
break
case 1:return A.a0(q,r)
case 2:return A.a_(o,r)}})
return A.a1($async$iE,r)}}
A.a7n.prototype={}
A.mY.prototype={
glS(){return this.a},
zc(a){var s,r={},q=a.a
if(q==null)q=$.TB()
r.a=r.b=null
s=t.P
A.aq7(q.a3u("AssetManifest.bin",A.aw6(),t.g3).bz(new A.U4(r,this,a,q),s),new A.U5(r),s,t.K)
s=r.a
if(s!=null)return s
s=new A.ap($.ag,t.hv)
r.b=new A.bo(s,t.q8)
return s},
RN(a,b,c){var s,r,q,p,o
if(c==null||c.length===0||b.b==null)return new A.jx(null,a)
s=A.aes(t.i,t.hw)
for(r=c.length,q=0;q<c.length;c.length===r||(0,A.J)(c),++q){p=c[q]
o=p.a
s.l(0,o==null?1:o,p)}r=b.b
r.toString
return this.T0(s,r)},
T0(a,b){var s,r,q
if(a.mG(b)){s=a.j(0,b)
s.toString
return s}r=a.a3i(b)
q=a.a1i(b)
if(r==null){s=a.j(0,q)
s.toString
return s}if(q==null){s=a.j(0,r)
s.toString
return s}if(b<2||b>(r+q)/2){s=a.j(0,q)
s.toString
return s}else{s=a.j(0,r)
s.toString
return s}},
k(a,b){if(b==null)return!1
if(J.L(b)!==A.v(this))return!1
return b instanceof A.mY&&b.glS()===this.glS()&&!0},
gt(a){return A.N(this.glS(),this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a){return"AssetImage(bundle: "+A.h(this.b)+', name: "'+this.glS()+'")'}}
A.U4.prototype={
$1(a){var s,r,q=this,p=q.b,o=a.Ly(p.glS()),n=p.RN(p.glS(),q.c,o)
p=n.a
if(p==null)p=1
s=new A.hl(q.d,n.b,p)
p=q.a
r=p.b
if(r!=null)r.d5(0,s)
else p.a=new A.bq(s,t.rT)},
$S:214}
A.U5.prototype={
$2(a,b){this.a.b.nw(a,b)},
$S:36}
A.fF.prototype={
cG(a){return new A.fF(this.a.cG(0),this.b,this.c)},
h(a){var s=this.c
s=s!=null?s+" ":""
return s+this.a.h(0)+" @ "+A.fn(this.b)+"x"},
gt(a){return A.N(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(J.L(b)!==A.v(s))return!1
return b instanceof A.fF&&b.a===s.a&&b.b===s.b&&b.c==s.c}}
A.eA.prototype={
gt(a){return A.N(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(J.L(b)!==A.v(s))return!1
return b instanceof A.eA&&J.e(b.a,s.a)&&J.e(b.b,s.b)&&J.e(b.c,s.c)},
a3T(a,b){return this.a.$2(a,b)}}
A.Zi.prototype={
AR(a){var s,r=this
r.a=a
s=r.b
if(s!=null){r.b=null
a.f=!0
B.b.Y(s,a.gqV(a))
r.a.f=!1}},
Z(a,b){var s=this.a
if(s!=null)return s.Z(0,b)
s=this.b;(s==null?this.b=A.a([],t.fE):s).push(b)},
I(a,b){var s,r=this.a
if(r!=null)return r.I(0,b)
for(s=0;r=this.b,s<r.length;++s)if(J.e(r[s],b)){r=this.b
r.toString
B.b.fY(r,s)
break}}}
A.nE.prototype={
pK(a){++this.a.r},
n(){var s=this.a;--s.r
s.qk()
this.a=null}}
A.lu.prototype={
Z(a,b){var s,r,q,p,o,n,m,l=this
if(l.w)A.a6(A.Z(u.V))
l.e=!0
l.a.push(b)
o=l.b
if(o!=null)try{b.a.$2(o.cG(0),!l.f)}catch(n){s=A.an(n)
r=A.aH(n)
l.KD(A.bg("by a synchronously-called image listener"),s,r)}o=l.c
if(o!=null&&b.c!=null)try{m=b.c
m.toString
m.$2(o.a,o.b)}catch(s){q=A.an(s)
p=A.aH(s)
if(!J.e(q,l.c.a))A.d9(new A.bs(q,p,"image resource service",A.bg("by a synchronously-called image error listener"),null,!1))}},
I(a,b){var s,r,q,p,o,n=this
if(n.w)A.a6(A.Z(u.V))
for(s=n.a,r=0;r<s.length;++r)if(J.e(s[r],b)){B.b.fY(s,r)
break}if(s.length===0){s=n.x
q=A.a(s.slice(0),A.am(s))
for(p=q.length,o=0;o<q.length;q.length===p||(0,A.J)(q),++o)q[o].$0()
B.b.T(s)
n.qk()}},
qk(){var s,r=this
if(!r.e||r.w||r.a.length!==0||r.r!==0)return
s=r.b
if(s!=null)s.a.n()
r.b=null
r.w=!0},
Mj(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.w)A.a6(A.Z(u.V))
p=i.b
if(p!=null)p.a.n()
i.b=a
p=i.a
if(p.length===0)return
o=A.aq(p,!0,t.tg)
for(p=o.length,n=a.a,m=a.b,l=a.c,k=0;k<p;++k){s=o[k]
try{s.a3T(new A.fF(n.cG(0),m,l),!1)}catch(j){r=A.an(j)
q=A.aH(j)
i.KD(A.bg("by an image listener"),r,q)}}},
tK(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i="image resource service"
this.c=new A.bs(b,e,i,a,c,d)
o=this.a
n=t.pE
m=A.aq(new A.h9(new A.aw(o,new A.Zj(),A.am(o).i("aw<1,~(D,cP?)?>")),n),!0,n.i("k.E"))
s=!1
for(o=m.length,l=0;l<o;++l){r=m[l]
try{r.$2(b,e)
s=!0}catch(k){q=A.an(k)
p=A.aH(k)
if(!J.e(q,b)){n=A.bg("when reporting an error to an image listener")
j=$.fq()
if(j!=null)j.$1(new A.bs(q,p,i,n,null,!1))}}}if(!s){o=this.c
o.toString
A.d9(o)}},
KD(a,b,c){return this.tK(a,b,null,!1,c)}}
A.Zj.prototype={
$1(a){return a.c},
$S:216}
A.Go.prototype={
Qz(a,b,c,d,e){this.d=c
b.ed(this.gTW(),new A.a_Y(this,d),t.H)},
TX(a){this.z=a
if(this.a.length!==0)this.kQ()},
TO(a){var s,r,q,p=this
p.cx=!1
if(p.a.length===0)return
s=p.ay
if(s!=null){r=p.ax
r===$&&A.b()
r=a.a-r.a>=s.a}else r=!0
if(r){s=p.at
p.Df(new A.fF(s.gfP(s).cG(0),p.Q,p.d))
p.ax=a
s=p.at
p.ay=s.ga0W(s)
s=p.at
s.gfP(s).n()
p.at=null
q=B.h.iy(p.ch,p.z.gyt())
if(p.z.gKC()===-1||q<=p.z.gKC())p.kQ()
return}s.toString
r=p.ax
r===$&&A.b()
p.CW=A.cl(new A.aS(B.h.b_(s.a-(a.a-r.a))),new A.a_X(p))},
kQ(){var s=0,r=A.a2(t.H),q,p=2,o,n=this,m,l,k,j,i
var $async$kQ=A.a3(function(a,b){if(a===1){o=b
s=p}while(true)switch(s){case 0:j=n.at
if(j!=null)j.gfP(j).n()
n.at=null
p=4
s=7
return A.a9(n.z.pd(),$async$kQ)
case 7:n.at=b
p=2
s=6
break
case 4:p=3
i=o
m=A.an(i)
l=A.aH(i)
n.tK(A.bg("resolving an image frame"),m,n.as,!0,l)
s=1
break
s=6
break
case 3:s=2
break
case 6:if(n.z.gyt()===1){if(n.a.length===0){s=1
break}j=n.at
n.Df(new A.fF(j.gfP(j).cG(0),n.Q,n.d))
j=n.at
j.gfP(j).n()
n.at=null
s=1
break}n.Ff()
case 1:return A.a0(q,r)
case 2:return A.a_(o,r)}})
return A.a1($async$kQ,r)},
Ff(){if(this.cx)return
this.cx=!0
$.bL.u7(this.gTN())},
Df(a){this.Mj(a);++this.ch},
Z(a,b){var s,r=this
if(r.a.length===0){s=r.z
if(s!=null)s=r.b==null||s.gyt()>1
else s=!1}else s=!1
if(s)r.kQ()
r.No(0,b)},
I(a,b){var s,r=this
r.Np(0,b)
if(r.a.length===0){s=r.CW
if(s!=null)s.b4(0)
r.CW=null}},
qk(){this.Nn()
if(this.w)this.y=null}}
A.a_Y.prototype={
$2(a,b){this.a.tK(A.bg("resolving an image codec"),a,this.b,!0,b)},
$S:36}
A.a_X.prototype={
$0(){this.a.Ff()},
$S:0}
A.NW.prototype={}
A.NV.prototype={}
A.zB.prototype={}
A.nJ.prototype={
k(a,b){var s
if(b==null)return!1
if(b instanceof A.nJ)if(b.a===this.a)if(b.b==this.b)s=A.cA(b.f,this.f)
else s=!1
else s=!1
else s=!1
return s},
gt(a){return A.N(this.a,this.b,this.c,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a){return"InlineSpanSemanticsInformation{text: "+this.a+", semanticsLabel: "+A.h(this.b)+", recognizer: "+A.h(this.c)+"}"}}
A.iw.prototype={
LT(a){var s={}
s.a=null
this.aO(new A.Zq(s,a,new A.zB()))
return s.a},
L_(a){var s,r=new A.bB("")
this.Hv(r,!0,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
hX(a,b){var s={}
if(b<0)return null
s.a=null
this.aO(new A.Zp(s,b,new A.zB()))
return s.a},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.L(b)!==A.v(this))return!1
return b instanceof A.oP&&J.e(b.a,this.a)},
gt(a){return J.o(this.a)}}
A.Zq.prototype={
$1(a){var s=a.LU(this.b,this.c)
this.a.a=s
return s==null},
$S:45}
A.Zp.prototype={
$1(a){var s=a.a_G(this.b,this.c)
this.a.a=s
return s==null},
$S:45}
A.df.prototype={
aH(a,b){var s=this.a.aH(0,b)
return new A.df(this.b.a9(0,b),s)},
c0(a,b){var s,r,q=this
if(a instanceof A.df){s=A.al(a.a,q.a,b)
r=A.hm(a.b,q.b,b)
r.toString
return new A.df(r,s)}if(a instanceof A.d6){s=A.al(a.a,q.a,b)
return new A.dU(q.b,1-b,a.b,s)}return q.kG(a,b)},
c1(a,b){var s,r,q=this
if(a instanceof A.df){s=A.al(q.a,a.a,b)
r=A.hm(q.b,a.b,b)
r.toString
return new A.df(r,s)}if(a instanceof A.d6){s=A.al(q.a,a.a,b)
return new A.dU(q.b,b,a.b,s)}return q.kH(a,b)},
fg(a,b){var s=$.at().dq()
s.fv(this.b.V(b).dC(a))
return s},
hz(a,b,c){var s,r,q,p,o=this.a
switch(o.c.a){case 0:break
case 1:s=this.b
if(o.b===0)a.cU(s.V(c).dC(b),o.hI())
else{r=$.at().bd()
r.sao(0,o.a)
q=s.V(c).dC(b)
p=q.d7(-o.gd_())
a.nT(q.d7(o.gkE()),p,r)}break}},
k(a,b){if(b==null)return!1
if(J.L(b)!==A.v(this))return!1
return b instanceof A.df&&b.a.k(0,this.a)&&b.b.k(0,this.b)},
gt(a){return A.N(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a){return"RoundedRectangleBorder("+this.a.h(0)+", "+this.b.h(0)+")"}}
A.dU.prototype={
aH(a,b){var s=this.a.aH(0,b)
return new A.dU(this.b.a9(0,b),b,this.d,s)},
c0(a,b){var s,r,q,p=this
if(a instanceof A.df){s=A.al(a.a,p.a,b)
r=A.hm(a.b,p.b,b)
r.toString
return new A.dU(r,p.c*b,p.d,s)}if(a instanceof A.d6){s=A.al(a.a,p.a,b)
r=p.c
return new A.dU(p.b,r+(1-r)*(1-b),a.b,s)}if(a instanceof A.dU){s=A.al(a.a,p.a,b)
r=A.hm(a.b,p.b,b)
r.toString
q=A.O(a.c,p.c,b)
q.toString
return new A.dU(r,q,p.d,s)}return p.kG(a,b)},
c1(a,b){var s,r,q,p=this
if(a instanceof A.df){s=A.al(p.a,a.a,b)
r=A.hm(p.b,a.b,b)
r.toString
return new A.dU(r,p.c*(1-b),p.d,s)}if(a instanceof A.d6){s=A.al(p.a,a.a,b)
r=p.c
return new A.dU(p.b,r+(1-r)*b,a.b,s)}if(a instanceof A.dU){s=A.al(p.a,a.a,b)
r=A.hm(p.b,a.b,b)
r.toString
q=A.O(p.c,a.c,b)
q.toString
return new A.dU(r,q,p.d,s)}return p.kH(a,b)},
Fc(a){var s,r,q,p,o,n,m,l,k=this.c
if(k===0||a.c-a.a===a.d-a.b)return a
s=a.c
r=a.a
q=s-r
p=a.d
o=a.b
n=p-o
m=1-this.d
if(q<n){l=k*((n-q)/2)*m
return new A.A(r,o+l,s,p-l)}else{l=k*((q-n)/2)*m
return new A.A(r+l,o,s-l,p)}},
C6(a,b){var s,r,q,p=this.b.V(b),o=this.c
if(o===0)return p
s=this.d
if(s!==0){r=a.c-a.a
q=a.d-a.b
s=0.5+s/2
if(r<q){o=A.n1(p,A.A0(new A.aL(r/2,s*q/2)),o)
o.toString
return o}else{o=A.n1(p,A.A0(new A.aL(s*r/2,q/2)),o)
o.toString
return o}}return A.n1(p,A.qi(a.gfj()/2),o)},
fg(a,b){var s=$.at().dq(),r=this.C6(a,b)
r.toString
s.fv(r.dC(this.Fc(a)))
return s},
hz(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=this.C6(b,c)
s.toString
a.cU(s.dC(this.Fc(b)).d7(r.b*r.d/2),r.hI())
break}},
k(a,b){var s=this
if(b==null)return!1
if(J.L(b)!==A.v(s))return!1
return b instanceof A.dU&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c===s.c},
gt(a){return A.N(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a){var s=this,r="RoundedRectangleBorder(",q=s.d
if(q!==0)return r+s.a.h(0)+", "+s.b.h(0)+", "+B.c.O(s.c*100,1)+u.T+B.c.O(q*100,1)+"% oval)"
return r+s.a.h(0)+", "+s.b.h(0)+", "+B.c.O(s.c*100,1)+"% of the way to being a CircleBorder)"}}
A.ee.prototype={
aH(a,b){return new A.ee(this.a.aH(0,b))},
c0(a,b){var s,r=this
if(a instanceof A.ee)return new A.ee(A.al(a.a,r.a,b))
if(a instanceof A.d6){s=A.al(a.a,r.a,b)
return new A.dW(1-b,a.b,s)}if(a instanceof A.df){s=A.al(a.a,r.a,b)
return new A.dX(a.b,1-b,s)}return r.kG(a,b)},
c1(a,b){var s,r=this
if(a instanceof A.ee)return new A.ee(A.al(r.a,a.a,b))
if(a instanceof A.d6){s=A.al(r.a,a.a,b)
return new A.dW(b,a.b,s)}if(a instanceof A.df){s=A.al(r.a,a.a,b)
return new A.dX(a.b,b,s)}return r.kH(a,b)},
fg(a,b){var s=a.gfj()/2,r=$.at().dq()
r.fv(A.a1k(a,new A.aL(s,s)))
return r},
hz(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=b.gfj()/2
a.cU(A.a1k(b,new A.aL(s,s)).d7(r.b*r.d/2),r.hI())
break}},
k(a,b){if(b==null)return!1
if(J.L(b)!==A.v(this))return!1
return b instanceof A.ee&&b.a.k(0,this.a)},
gt(a){var s=this.a
return A.N(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a){return"StadiumBorder("+this.a.h(0)+")"}}
A.dW.prototype={
aH(a,b){return new A.dW(b,this.c,this.a.aH(0,b))},
c0(a,b){var s,r,q,p=this
if(a instanceof A.ee)return new A.dW(p.b*b,p.c,A.al(a.a,p.a,b))
if(a instanceof A.d6){s=A.al(a.a,p.a,b)
r=p.b
return new A.dW(r+(1-r)*(1-b),a.b,s)}if(a instanceof A.dW){s=A.al(a.a,p.a,b)
r=A.O(a.b,p.b,b)
r.toString
q=A.O(a.c,p.c,b)
q.toString
return new A.dW(r,q,s)}return p.kG(a,b)},
c1(a,b){var s,r,q,p=this
if(a instanceof A.ee)return new A.dW(p.b*(1-b),p.c,A.al(p.a,a.a,b))
if(a instanceof A.d6){s=A.al(p.a,a.a,b)
r=p.b
return new A.dW(r+(1-r)*b,a.b,s)}if(a instanceof A.dW){s=A.al(p.a,a.a,b)
r=A.O(p.b,a.b,b)
r.toString
q=A.O(p.c,a.c,b)
q.toString
return new A.dW(r,q,s)}return p.kH(a,b)},
FO(a){var s,r,q,p,o,n,m,l,k=this.b
if(k===0||a.c-a.a===a.d-a.b)return a
s=a.c
r=a.a
q=s-r
p=a.d
o=a.b
n=p-o
m=1-this.c
if(q<n){l=k*((n-q)/2)*m
return new A.A(r,o+l,s,p-l)}else{l=k*((q-n)/2)*m
return new A.A(r+l,o,s-l,p)}},
n3(a){var s,r,q,p=A.qi(a.gfj()/2),o=this.c
if(o!==0){s=a.c-a.a
r=a.d-a.b
q=this.b
o=0.5+o/2
if(s<r){o=A.n1(p,A.A0(new A.aL(s/2,o*r/2)),q)
o.toString
return o}else{o=A.n1(p,A.A0(new A.aL(o*s/2,r/2)),q)
o.toString
return o}}return p},
fg(a,b){var s=$.at().dq()
s.fv(this.n3(a).dC(this.FO(a)))
return s},
hz(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.cU(this.n3(b).dC(this.FO(b)).d7(s.b*s.d/2),s.hI())
break}},
k(a,b){if(b==null)return!1
if(J.L(b)!==A.v(this))return!1
return b instanceof A.dW&&b.a.k(0,this.a)&&b.b===this.b},
gt(a){return A.N(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a){var s=this,r=s.c
if(r!==0)return"StadiumBorder("+s.a.h(0)+", "+B.c.O(s.b*100,1)+u.T+B.c.O(r*100,1)+"% oval)"
return"StadiumBorder("+s.a.h(0)+", "+B.c.O(s.b*100,1)+"% of the way to being a CircleBorder)"}}
A.dX.prototype={
aH(a,b){var s=this.a.aH(0,b)
return new A.dX(this.b.a9(0,b),b,s)},
c0(a,b){var s,r,q,p=this
if(a instanceof A.ee)return new A.dX(p.b,p.c*b,A.al(a.a,p.a,b))
if(a instanceof A.df){s=p.c
return new A.dX(p.b,s+(1-s)*(1-b),A.al(a.a,p.a,b))}if(a instanceof A.dX){s=A.al(a.a,p.a,b)
r=A.hm(a.b,p.b,b)
r.toString
q=A.O(a.c,p.c,b)
q.toString
return new A.dX(r,q,s)}return p.kG(a,b)},
c1(a,b){var s,r,q,p=this
if(a instanceof A.ee)return new A.dX(p.b,p.c*(1-b),A.al(p.a,a.a,b))
if(a instanceof A.df){s=p.c
return new A.dX(p.b,s+(1-s)*b,A.al(p.a,a.a,b))}if(a instanceof A.dX){s=A.al(p.a,a.a,b)
r=A.hm(p.b,a.b,b)
r.toString
q=A.O(p.c,a.c,b)
q.toString
return new A.dX(r,q,s)}return p.kH(a,b)},
n3(a){var s=a.gfj()/2
s=A.hm(this.b,A.A0(new A.aL(s,s)),1-this.c)
s.toString
return s},
fg(a,b){var s=$.at().dq()
s.fv(this.n3(a).V(b).dC(a))
return s},
hz(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.cU(this.n3(b).V(c).dC(b).d7(s.b*s.d/2),s.hI())
break}},
k(a,b){var s=this
if(b==null)return!1
if(J.L(b)!==A.v(s))return!1
return b instanceof A.dX&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c===s.c},
gt(a){return A.N(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a){return"StadiumBorder("+this.a.h(0)+", "+this.b.h(0)+", "+B.c.O(this.c*100,1)+"% of the way to being a RoundedRectangleBorder)"}}
A.oO.prototype={
F(){return"TextOverflow."+this.b}}
A.u9.prototype={
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(b instanceof A.u9)if(b.a.k(0,r.a))if(b.b===r.b)s=b.c==r.c
else s=!1
else s=!1
else s=!1
return s},
gt(a){var s=this
return A.N(s.a,s.b,s.d,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a){var s,r=this,q="PlaceholderDimensions(",p=r.b
$label0$0:{if(B.Aw===p||B.iF===p||B.Ax===p||B.Au===p||B.Av===p){s=q+r.a.h(0)+", "+p.h(0)+")"
break $label0$0}if(B.At===p){s=q+r.a.h(0)+", "+p.h(0)+"("+A.h(r.c)+" from top))"
break $label0$0}s=null}return s}}
A.a5z.prototype={
F(){return"TextWidthBasis."+this.b}}
A.LD.prototype={
mb(a){return this.b.AD(new A.bv(Math.max(a,0),B.J))},
RV(a){var s,r=this.a,q=r.hX(0,a)
if(q==null)return null
s=q&64512
$label0$0:{if(55296===s){r=r.hX(0,a+1)
r.toString
r=(q<<10>>>0)+r+-56613888
break $label0$0}if(56320===s){r=r.hX(0,a-1)
r.toString
r=(r<<10>>>0)+q+-56613888
break $label0$0}r=q
break $label0$0}return r},
Yl(a,b){var s,r=this.RV(b?a-1:a),q=b?a:a-1,p=this.a.hX(0,q)
if(!(r==null||p==null||A.ajl(r)||A.ajl(p))){q=A.lX("[\\p{Space_Separator}\\p{Punctuation}]",!0,!0)
s=A.cE(r)
q=!q.b.test(s)}else q=!0
return q}}
A.aaG.prototype={
h1(a){var s
if(a<0)return null
s=this.b.h1(a)
return s==null||this.a.$2(s,!1)?s:this.h1(s-1)},
h2(a){var s=this.b.h2(Math.max(a,0))
return s==null||this.a.$2(s,!0)?s:this.h2(s)}}
A.aap.prototype={
LC(a){var s
switch(a.a){case 0:s=this.a
s=s.gr1(s)
break
case 1:s=this.a
s=s.ga2D(s)
break
default:s=null}return s}}
A.aaq.prototype={
ghB(){var s,r,q=this.c
if(q===0)return B.k
s=this.a
r=s.a
if(!isFinite(r.gbN(r)))return B.SY
r=this.b
s=s.a
return new A.p(q*(r-s.gbN(s)),0)},
Xu(a,b,c){var s,r,q=this,p=q.a,o=A.ajK(a,b,c,p)
if(o===q.b)return!0
if(!isFinite(q.ghB().a)){s=p.a
s=!isFinite(s.gbN(s))&&isFinite(a)}else s=!1
if(s)return!1
r=p.a.gt8()
p=p.a
if(p.gbN(p)-r>-1e-10&&b-r>-1e-10){q.b=o
return!0}return!1}}
A.mx.prototype={}
A.mu.prototype={}
A.Jk.prototype={
a4(){var s=this.b
if(s!=null)s.a.a.n()
this.b=null},
soV(a,b){var s,r,q=this
if(J.e(q.f,b))return
s=q.f
s=s==null?null:s.a
if(!J.e(s,b.a)){s=q.CW
if(s!=null)s.n()
q.CW=null}s=q.f
s=s==null?null:s.aW(0,b)
r=s==null?B.cH:s
q.f=b
q.r=null
s=r.a
if(s>=3)q.a4()
else if(s>=2)q.c=!0},
gtv(){var s=this.r
if(s==null){s=this.f
s=s==null?null:s.L_(!1)
this.r=s}return s==null?"":s},
szW(a,b){if(this.w===b)return
this.w=b
this.a4()},
sbF(a){var s,r=this
if(r.x===a)return
r.x=a
r.a4()
s=r.CW
if(s!=null)s.n()
r.CW=null},
szX(a){var s,r=this
if(r.y===a)return
r.y=a
r.a4()
s=r.CW
if(s!=null)s.n()
r.CW=null},
sa0X(a){if(this.z==a)return
this.z=a
this.a4()},
sz0(a,b){if(J.e(this.Q,b))return
this.Q=b
this.a4()},
sz4(a){if(this.as==a)return
this.as=a
this.a4()},
szZ(a){if(this.ax===a)return
this.ax=a},
ga2K(){var s,r,q,p=this.b
if(p==null)return null
s=p.ghB()
if(!isFinite(s.a)||!isFinite(s.b))return A.a([],t.px)
r=p.d
if(r==null)r=p.d=p.a.a.tZ()
if(s.k(0,B.k))return r
q=A.am(r).i("aw<1,dR>")
return A.aq(new A.aw(r,new A.a5w(s),q),!1,q.i("b7.E"))},
ug(a){if(a==null||a.length===0||A.cA(a,this.ch))return
this.ch=a
this.a4()},
D0(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.f.a
if(e==null)e=f
else{s=g.w
r=g.x
if(r==null)r=a
q=g.y
p=g.as
o=g.ay
n=g.z
m=g.Q
l=e.at
o=l==null?f:new A.Jh(l)
k=e.w
j=e.x
i=e.d
h=e.r
if(h==null)h=14
e=e.as
e=A.aea(n,i,h*q,j,k,e,m,p,f,s,r,o)}if(e==null){e=g.w
s=g.x
if(s==null)s=a
r=g.y
q=g.as
p=g.ay
p=A.aea(g.z,f,14*r,f,f,f,g.Q,q,f,e,s,p)
e=p}return e},
Sg(){return this.D0(null)},
gtx(){var s,r,q=this,p=q.CW
if(p==null){p=q.D0(B.K)
s=$.at().xA(p)
p=q.f
if(p==null)r=null
else{p=p.a
r=p==null?null:p.AA(q.y)}if(r!=null)s.zE(r)
s.qZ(" ")
p=s.aQ()
p.f9(B.T7)
q.CW=p}return p.gbp(p)},
D_(a){var s=this,r=s.Sg(),q=$.at().xA(r)
r=s.y
a.Hf(q,s.ch,r)
s.c=!1
return q.aQ()},
yY(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.b,i=j==null
if(!i&&j.Xu(b,a,k.ax))return
s=k.f
if(s==null)throw A.d(A.Z("TextPainter.text must be set to a non-null value before using the TextPainter."))
r=k.x
if(r==null)throw A.d(A.Z("TextPainter.textDirection must be set to a non-null value before using the TextPainter."))
q=A.aj0(k.w,r)
if(!(!isFinite(a)&&q!==0))p=a
else p=i?null:Math.ceil(j.a.a.gt8())
o=p==null
k.d=o?a:p
n=i?null:j.a.a
if(n==null)n=k.D_(s)
n.f9(new A.iI(k.d))
i=new A.aap(n)
m=A.ajK(b,a,k.ax,i)
if(o&&isFinite(b)){l=Math.ceil(i.a.gt8())
n.f9(new A.iI(l))
k.d=l}k.b=new A.aaq(i,m,q)},
a3l(){return this.yY(1/0,0)},
aE(a,b){var s,r,q,p=this,o=p.b
if(o==null)throw A.d(A.Z("TextPainter.paint called when text geometry was not yet calculated.\nPlease call layout() before paint() to position the text before painting it."))
if(!isFinite(o.ghB().a)||!isFinite(o.ghB().b))return
if(p.c){s=o.a
r=s.a
q=p.f
q.toString
q=p.D_(q)
q.f9(new A.iI(p.d))
s.a=q
r.n()}a.k_(o.a.a,b.a_(0,o.ghB()))},
DB(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.gtv().length
if(i===0||a>i)return null
s=B.d.hX(j.gtv(),Math.max(0,a-1))
r=s&64512
q=r===55296||r===56320||j.f.hX(0,a)===8205||s===8207||s===8206
p=q?2:1
o=A.a([],t.px)
for(r=-i,n=!q,m=s===10;o.length===0;){l=a-p
o=j.b.a.a.Aj(Math.max(0,l),a,B.jK)
if(o.length===0){if(n&&m)break
if(l<r)break
p*=2
continue}k=B.b.gS(o).e===B.e?B.b.gS(o):B.b.gJ(o)
if(m)r=new A.mu(k.d)
else{r=k.e
n=r===B.e?k.c:k.a
m=k.b
m=new A.mx(new A.p(n,m),r,k.d-m)
r=m}return r}return null},
DA(a){var s,r,q,p,o,n,m,l,k,j=this.gtv().length
if(j===0)return null
s=B.d.hX(this.gtv(),Math.min(a,j-1))
r=s&64512
q=r===55296||r===56320||s===8205||s===8207||s===8206
p=q?2:1
o=A.a([],t.px)
for(r=j<<1>>>0,n=!q;o.length===0;){m=a+p
o=this.b.a.a.Aj(a,m,B.jK)
if(o.length===0){if(n)break
if(m>=r)break
p*=2
continue}l=B.b.gJ(o).e===B.e?B.b.gJ(o):B.b.gS(o)
r=l.e
n=r===B.e?l.a:l.c
k=l.b
return new A.mx(new A.p(n,k),r,l.d-k)}return null},
pe(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.b
g.toString
s=a.a<0?B.C6:i.CN(a)
$label0$0:{r=A.cQ("#0#2",new A.a5t(s))
q=A.cQ("#0#4",new A.a5u(s))
p=A.cQ("#0#7",new A.a5v(s))
if(s instanceof A.mu)if(typeof r.aC()=="number"){o=r.aC()
n=!0}else{o=h
n=!1}else{o=h
n=!1}if(n){n=i.w
m=i.x
m.toString
l=A.aj0(n,m)
return new A.p(l===0?0:l*g.b,o)}n=s instanceof A.mx
if(n)if(B.e===q.aC())if(p.aC() instanceof A.p){k=p.aC()
m=!0}else{k=h
m=!1}else{k=h
m=!1}else{k=h
m=!1}if(m){j=k
break $label0$0}if(n)if(B.K===q.aC())if(p.aC() instanceof A.p){k=p.aC()
n=!0}else{k=h
n=!1}else{k=h
n=!1}else{k=h
n=!1}j=n?new A.p(k.a-(b.c-b.a),k.b):h}return new A.p(A.E(j.a+g.ghB().a,0,g.b),j.b+g.ghB().b)},
LG(a,b){var s,r,q,p,o=null
if(a.a<0)return o
s=this.CN(a)
r=A.cQ("#0#2",new A.a5s(s))
$label0$0:{if(s instanceof A.mx)if(typeof r.aC()=="number"){q=r.aC()
p=!0}else{q=o
p=!1}else{q=o
p=!1}if(p){p=q
break $label0$0}if(s instanceof A.mu){p=o
break $label0$0}p=o}return p},
CN(a){var s,r,q=this,p=q.b
if(a.k(0,p.f)){s=q.cx
s===$&&A.b()
return s}r=a.a
switch(a.b.a){case 0:s=q.DB(r)
if(s==null)s=q.DA(r)
break
case 1:s=q.DA(r)
if(s==null)s=q.DB(r)
break
default:s=null}p.f=a
return q.cx=s==null?B.C6:s},
Am(a,b,c){var s,r,q=this.b,p=q.ghB()
if(!isFinite(p.a)||!isFinite(p.b))return A.a([],t.px)
s=q.a.a.Ak(a.a,a.b,b,c)
if(p.k(0,B.k))r=s
else{r=A.am(s).i("aw<1,dR>")
r=A.aq(new A.aw(s,new A.a5r(p),r),!1,r.i("b7.E"))}return r},
fh(a){var s=this.b
return s.a.a.fh(a.ab(0,s.ghB()))},
xs(){var s,r,q=this.b,p=q.ghB()
if(!isFinite(p.a)||!isFinite(p.b))return B.Ml
s=q.e
if(s==null){s=q.a.a.xs()
q.e=s}if(p.k(0,B.k))r=s
else{r=A.am(s).i("aw<1,nQ>")
r=A.aq(new A.aw(s,new A.a5q(p),r),!1,r.i("b7.E"))}return r},
n(){var s=this,r=s.CW
if(r!=null)r.n()
s.CW=null
r=s.b
if(r!=null)r.a.a.n()
s.f=s.b=null}}
A.a5w.prototype={
$1(a){return A.aj1(a,this.a)},
$S:83}
A.a5j.prototype={
$0(){return this.a.a},
$S:221}
A.a5l.prototype={
$0(){return this.a.b},
$S:84}
A.a5k.prototype={
$0(){return B.bk===this.a.aC()},
$S:15}
A.a5m.prototype={
$0(){return B.e===this.a.aC()},
$S:15}
A.a5n.prototype={
$0(){return B.K===this.a.aC()},
$S:15}
A.a5o.prototype={
$0(){return B.fN===this.a.aC()},
$S:15}
A.a5p.prototype={
$0(){return B.j4===this.a.aC()},
$S:15}
A.a5t.prototype={
$0(){return t.o7.a(this.a).a},
$S:56}
A.a5u.prototype={
$0(){return t.sq.a(this.a).b},
$S:84}
A.a5v.prototype={
$0(){return t.sq.a(this.a).a},
$S:223}
A.a5s.prototype={
$0(){return t.sq.a(this.a).c},
$S:56}
A.a5r.prototype={
$1(a){return A.aj1(a,this.a)},
$S:83}
A.a5q.prototype={
$1(a){var s=this.a,r=a.ga2l(),q=a.ga__(),p=a.ga0J(),o=a.ga5d(),n=a.gbp(a),m=a.gbN(a),l=a.gfa(a),k=a.gxi(),j=a.gJL(a)
return $.at().a0l(q,k+s.b,p,r,n,l+s.a,j,o,m)},
$S:224}
A.oP.prototype={
gHN(a){return this.e},
gAh(){return!0},
i3(a,b){t.Y.b(a)},
Hf(a,b,c){var s,r,q,p,o,n=this.a,m=n!=null
if(m)a.zE(n.AA(c))
n=this.b
if(n!=null)try{a.qZ(n)}catch(q){n=A.an(q)
if(n instanceof A.ft){s=n
r=A.aH(q)
A.d9(new A.bs(s,r,"painting library",A.bg("while building a TextSpan"),null,!1))
a.qZ("\ufffd")}else throw q}p=this.c
if(p!=null)for(o=0;o<1;++o)p[o].Hf(a,b,c)
if(m)a.fW()},
aO(a){var s,r
if(this.b!=null&&!a.$1(this))return!1
s=this.c
if(s!=null)for(r=0;r<1;++r)if(!s[r].aO(a))return!1
return!0},
LU(a,b){var s,r,q,p,o=this.b
if(o==null)return null
s=a.b
r=a.a
q=b.a
p=q+o.length
if(!(q===r&&s===B.J))if(!(q<r&&r<p))o=p===r&&s===B.aF
else o=!0
else o=!0
if(o)return this
b.a=p
return null},
Hv(a,b,c){var s,r=this.b
if(r!=null)a.a+=r
r=this.c
if(r!=null)for(s=0;s<1;++s)r[s].Hv(a,!0,c)},
Hu(a,b,c){var s,r,q,p=this.b
if(p!=null){s=A.a([],t.ve)
a.push(A.ahx(p,null,null,s))}r=this.c
if(r!=null)for(q=0;q<1;++q)r[q].Hu(a,b,!1)},
a_Q(a){return this.Hu(a,null,!1)},
a_G(a,b){var s,r,q,p=this.b
if(p==null)return null
s=b.a
r=a-s
q=p.length
b.a=s+q
return r<q?p.charCodeAt(r):null},
aW(a,b){var s,r,q,p,o,n=this
if(n===b)return B.dK
if(A.v(b)!==A.v(n))return B.cH
if(b.b==n.b){s=n.c==null?null:1
s=s!=(b.c==null?null:1)||n.a==null!==(b.a==null)}else s=!0
if(s)return B.cH
s=n.a
if(s!=null){r=b.a
r.toString
q=s.aW(0,r)
p=q.a>0?q:B.dK
if(p===B.cH)return p}else p=B.dK
s=n.c
if(s!=null)for(r=b.c,o=0;o<1;++o){q=s[o].aW(0,r[o])
if(q.a>p.a)p=q
if(p===B.cH)return p}return p},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.L(b)!==A.v(s))return!1
if(!s.Nr(0,b))return!1
return b instanceof A.oP&&b.b==s.b&&s.e.k(0,b.e)&&A.cA(b.c,s.c)},
gt(a){var s=this,r=null,q=A.iw.prototype.gt.call(s,s),p=s.c
p=p==null?r:A.ce(p)
return A.N(q,s.b,r,r,r,r,s.e,p,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
bS(){return"TextSpan"},
$iab:1,
$ihJ:1,
gzj(){return null},
gzk(){return null}}
A.r.prototype={
glJ(){return this.e},
gl4(a){return this.d},
nA(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=b9==null?a.a:b9,a1=a.ay
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
c=b0==null?a.gl4(a):b0
b=b1==null?a.e:b1
return A.bO(r,q,s,null,g,f,e,d,c,b,a.fr,p,a.x,h,o,a1,k,a0,j,n,a.ax,a.fy,a.f,i,l,m)},
hl(a){return this.nA(null,null,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
a04(a){return this.nA(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null)},
a0d(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5){return this.nA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,null,r,s,a0,a1,a2,a3,a4,a5)},
HH(a,b){return this.nA(null,null,a,null,null,null,null,null,null,null,null,b,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
HB(a){return this.nA(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null,null,null)},
c8(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
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
a1=a4.gl4(a4)
a2=a4.e
a3=a4.f
return this.a0d(g,r,s,null,c,b,a,a0,a1,a2,e,q,o,d,p,h,k,j,n,i,a4.fy,a3,f,l,m)},
AA(a){var s,r,q=this,p=q.glJ(),o=q.r
o=o==null?null:o*a
s=q.ch
if(s==null){s=q.c
if(s!=null){r=$.at().bd()
r.sao(0,s)
s=r}else s=null}return A.aj2(s,q.b,q.CW,q.cx,q.cy,q.db,q.d,p,q.fr,o,q.x,q.fx,q.w,q.ay,q.as,q.at,q.y,q.ax,q.dy,q.Q,q.z)},
aW(a,b){var s=this
if(s===b)return B.dK
if(s.a!==b.a||s.d!=b.d||s.r!=b.r||s.w!=b.w||s.y!=b.y||s.z!=b.z||s.Q!=b.Q||s.as!=b.as||s.at!=b.at||s.ay!=b.ay||s.ch!=b.ch||!A.cA(s.dy,b.dy)||!A.cA(s.fr,b.fr)||!A.cA(s.fx,b.fx)||!A.cA(s.glJ(),b.glJ())||!1)return B.cH
if(!J.e(s.b,b.b)||!J.e(s.c,b.c)||!J.e(s.CW,b.CW)||!J.e(s.cx,b.cx)||s.cy!=b.cy||s.db!=b.db)return B.TY
return B.dK},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.L(b)!==A.v(r))return!1
if(b instanceof A.r)if(b.a===r.a)if(J.e(b.b,r.b))if(J.e(b.c,r.c))if(b.r==r.r)if(b.w==r.w)if(b.y==r.y)if(b.z==r.z)if(b.Q==r.Q)if(b.as==r.as)if(b.at==r.at)if(b.ay==r.ay)if(b.ch==r.ch)if(A.cA(b.dy,r.dy))if(A.cA(b.fr,r.fr))if(A.cA(b.fx,r.fx))if(J.e(b.CW,r.CW))if(J.e(b.cx,r.cx))if(b.cy==r.cy)if(b.db==r.db)if(b.d==r.d)if(A.cA(b.glJ(),r.glJ()))s=!0
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
gt(a){var s,r=this,q=null,p=r.glJ(),o=p==null?q:A.ce(p),n=A.N(r.cy,r.db,r.d,o,r.f,r.fy,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a),m=r.dy,l=r.fx
o=m==null?q:A.ce(m)
s=l==null?q:A.ce(l)
return A.N(r.a,r.b,r.c,r.r,r.w,r.x,r.y,r.z,r.Q,r.as,r.at,r.ax,r.ay,r.ch,o,q,s,r.CW,r.cx,n)},
bS(){return"TextStyle"}}
A.Rh.prototype={}
A.Dv.prototype={
Qv(a,b,c,d,e){var s=this
s.r=A.akC(new A.XQ(s),s.gy4(s),0,10,0)},
cM(a,b){var s,r,q=this
if(b>q.r)return q.grH()
s=q.e
r=q.c
return q.d+s*Math.pow(q.b,b)/r-s/r-q.f/2*b*b},
ds(a,b){var s=this
if(b>s.r)return 0
return s.e*Math.pow(s.b,b)-s.f*b},
grH(){var s=this
if(s.f===0)return s.d-s.e/s.c
return s.cM(0,s.r)},
KV(a){var s,r=this,q=r.d
if(a===q)return 0
s=r.e
if(s!==0)if(s>0)q=a<q||a>r.grH()
else q=a>q||a<r.grH()
else q=!0
if(q)return 1/0
return A.akC(r.gy4(r),r.ga5w(r),0,10,a)},
jd(a){return Math.abs(this.ds(0,a))<this.a.c},
h(a){return"FrictionSimulation(c\u2093: "+B.c.O(this.b,1)+", x\u2080: "+B.c.O(this.d,1)+", dx\u2080: "+B.c.O(this.e,1)+")"}}
A.XQ.prototype={
$1(a){var s=this.a
return s.e*Math.pow(s.b,a)*s.c-s.f},
$S:46}
A.a3T.prototype={
h(a){return"Simulation"}}
A.a4a.prototype={
h(a){return"SpringDescription(mass: "+B.c.O(this.a,1)+", stiffness: "+B.h.O(this.b,1)+", damping: "+B.c.O(this.c,1)+")"}}
A.vo.prototype={
F(){return"SpringType."+this.b}}
A.IZ.prototype={
cM(a,b){return this.b+this.c.cM(0,b)},
ds(a,b){return this.c.ds(0,b)},
jd(a){var s=this.c
return A.zl(s.cM(0,a),0,this.a.a)&&A.zl(s.ds(0,a),0,this.a.c)},
h(a){var s=this.c
return"SpringSimulation(end: "+B.c.O(this.b,1)+", "+s.gtR(s).h(0)+")"}}
A.kd.prototype={
cM(a,b){return this.jd(b)?this.b:this.P_(0,b)}}
A.a6X.prototype={
cM(a,b){return(this.b+this.c*b)*Math.pow(2.718281828459045,this.a*b)},
ds(a,b){var s=this.a,r=Math.pow(2.718281828459045,s*b),q=this.c
return s*(this.b+q*b)*r+q*r},
gtR(a){return B.Vw}}
A.a90.prototype={
cM(a,b){var s=this
return s.c*Math.pow(2.718281828459045,s.a*b)+s.d*Math.pow(2.718281828459045,s.b*b)},
ds(a,b){var s=this,r=s.a,q=s.b
return s.c*r*Math.pow(2.718281828459045,r*b)+s.d*q*Math.pow(2.718281828459045,q*b)},
gtR(a){return B.Vy}}
A.aaE.prototype={
cM(a,b){var s=this,r=s.a*b
return Math.pow(2.718281828459045,s.b*b)*(s.c*Math.cos(r)+s.d*Math.sin(r))},
ds(a,b){var s,r=this,q=r.b,p=Math.pow(2.718281828459045,q*b),o=r.a,n=o*b,m=Math.cos(n),l=Math.sin(n)
n=r.d
s=r.c
return p*(n*o*m-s*o*l)+q*p*(n*l+s*m)},
gtR(a){return B.Vx}}
A.Jv.prototype={
h(a){return"Tolerance(distance: \xb1"+A.h(this.a)+", time: \xb10.001, velocity: \xb1"+A.h(this.c)+")"}}
A.oh.prototype={
yx(){var s=this,r=s.av$
r===$&&A.b()
r=r.e
r.toString
r.sxt(s.HL())
if(s.av$.e.B$!=null)s.M3()},
yE(){},
yz(){},
HL(){var s,r=$.aB().d.j(0,0),q=r.x
if(q==null){s=self.window.devicePixelRatio
q=s===0?1:s}return new A.JO(r.gjk().df(0,q),q)},
a2I(){var s,r=this.ba$
if(r!=null){r.K$=$.aV()
r.D$=0}r=t.S
s=$.aV()
this.ba$=new A.Gn(new A.a2j(this),new A.a_M(B.j2,A.y(r,t.Df)),A.y(r,t.eg),s)},
V6(){var s=this.av$
s===$&&A.b()
s=s.e
s.toString
A.X.prototype.gbE.call(s).ch.H(0,s)
A.X.prototype.gbE.call(s).m2()},
Va(a){var s=this.av$
s===$&&A.b()
s.e.toString
s=$.cU;(s==null?$.cU=A.io():s).a5j(a)},
V8(){var s=this.av$
s===$&&A.b()
s.e.le()},
Vn(a){B.SN.kT("first-frame",null,!1,t.H)},
UA(a){this.y3()
this.XP()},
XP(){$.bL.fy$.push(new A.a2i(this))},
H0(){--this.bL$
if(!this.cI$)this.u8()},
y3(){var s=this,r=s.av$
r===$&&A.b()
r.IF()
s.av$.ID()
s.av$.IG()
if(s.cI$||s.bL$===0){s.av$.e.a_N()
s.av$.IH()
s.cI$=!0}},
$iab:1,
$idg:1}
A.a2j.prototype={
$2(a,b){var s=A.adK(),r=this.a,q=r.av$
q===$&&A.b()
q.e.bM(s,a)
r.Bn(s,a,b)
return s},
$S:227}
A.a2i.prototype={
$1(a){this.a.ba$.a5f()},
$S:2}
A.M1.prototype={}
A.aN.prototype={
xx(a,b,c,d){var s=this,r=d==null?s.a:d,q=b==null?s.b:b,p=c==null?s.c:c
return new A.aN(r,q,p,a==null?s.d:a)},
a09(a,b){return this.xx(null,null,a,b)},
HD(a){return this.xx(a,null,null,null)},
a05(a){return this.xx(null,a,null,null)},
HQ(a){var s=this,r=a.gc7(),q=a.gb3(a)+a.gb6(a),p=Math.max(0,s.a-r),o=Math.max(0,s.c-q)
return new A.aN(p,Math.max(p,s.b-r),o,Math.max(o,s.d-q))},
o_(a){var s=this,r=a.a,q=a.b,p=a.c,o=a.d
return new A.aN(A.E(s.a,r,q),A.E(s.b,r,q),A.E(s.c,p,o),A.E(s.d,p,o))},
KU(a,b){var s,r,q=this,p=b==null,o=q.a,n=p?o:A.E(b,o,q.b),m=q.b
p=p?m:A.E(b,o,m)
o=a==null
m=q.c
s=o?m:A.E(a,m,q.d)
r=q.d
return new A.aN(n,p,s,o?r:A.E(a,m,r))},
tN(a){return this.KU(a,null)},
A0(a){return this.KU(null,a)},
bv(a){var s=this
return new A.S(A.E(a.a,s.a,s.b),A.E(a.b,s.c,s.d))},
ny(a){var s,r,q,p,o,n=this,m=n.a,l=n.b
if(m>=l&&n.c>=n.d)return new A.S(A.E(0,m,l),A.E(0,n.c,n.d))
s=a.a
r=a.b
q=s/r
if(s>l){r=l/q
s=l}p=n.d
if(r>p){s=p*q
r=p}if(s<m){r=m/q
s=m}o=n.c
if(r<o){s=o*q
r=o}return new A.S(A.E(s,m,l),A.E(r,o,p))},
gJD(){var s=this
return s.a>=s.b&&s.c>=s.d},
a9(a,b){var s=this
return new A.aN(s.a*b,s.b*b,s.c*b,s.d*b)},
ga36(){var s=this,r=s.a
if(r>=0)if(r<=s.b){r=s.c
r=r>=0&&r<=s.d}else r=!1
else r=!1
return r},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.L(b)!==A.v(s))return!1
return b instanceof A.aN&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gt(a){var s=this
return A.N(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a){var s,r=this,q=r.ga36()?"":"; NOT NORMALIZED",p=r.a
if(p===1/0&&r.c===1/0)return"BoxConstraints(biggest"+q+")"
if(p===0&&r.b===1/0&&r.c===0&&r.d===1/0)return"BoxConstraints(unconstrained"+q+")"
s=new A.Us()
return"BoxConstraints("+s.$3(p,r.b,"w")+", "+s.$3(r.c,r.d,"h")+q+")"}}
A.Us.prototype={
$3(a,b,c){if(a===b)return c+"="+B.c.O(a,1)
return B.c.O(a,1)+"<="+c+"<="+B.c.O(b,1)},
$S:228}
A.jA.prototype={
GY(a,b,c){if(c!=null){c=A.Gc(A.aec(c))
if(c==null)return!1}return this.GZ(a,b,c)},
l8(a,b,c){var s,r=b==null,q=r?c:c.ab(0,b)
r=!r
if(r)this.c.push(new A.pE(new A.p(-b.a,-b.b)))
s=a.$2(this,q)
if(r)this.tw()
return s},
GZ(a,b,c){var s,r=c==null,q=r?b:A.cj(c,b)
r=!r
if(r)this.c.push(new A.x1(c))
s=a.$2(this,q)
if(r)this.tw()
return s},
GX(a,b,c){var s,r=this
if(b!=null)r.c.push(new A.pE(new A.p(-b.a,-b.b)))
else{c.toString
c=A.Gc(A.aec(c))
c.toString
r.c.push(new A.x1(c))}s=a.$1(r)
r.tw()
return s},
ZK(a,b){return this.GX(a,null,b)},
ZJ(a,b){return this.GX(a,b,null)}}
A.kY.prototype={
h(a){return"<optimized out>#"+A.b4(this.a)+"@"+this.c.h(0)}}
A.ep.prototype={
h(a){return"offset="+this.a.h(0)}}
A.qC.prototype={}
A.B.prototype={
e0(a){if(!(a.e instanceof A.ep))a.e=new A.ep(B.k)},
hK(a){var s=this.k1
if(s==null)s=this.k1=A.y(t.k,t.DB)
return s.bs(0,a,new A.a1N(this,a))},
c3(a){return B.a_},
gq(a){var s=this.k3
return s==null?A.a6(A.Z("RenderBox was not laid out: "+A.v(this).h(0)+"#"+A.b4(this))):s},
gju(){var s=this.gq(this)
return new A.A(0,0,0+s.a,0+s.b)},
Aq(a,b){var s=null
try{s=this.ko(a)}finally{}if(s==null&&!b)return this.gq(this).b
return s},
ko(a){var s=this.k4
if(s==null)s=this.k4=A.y(t.E7,t.u6)
return s.bs(0,a,new A.a1M(this,a))},
hk(a){return null},
gW(){return t.k.a(A.w.prototype.gW.call(this))},
RQ(){var s,r=this,q=r.k4,p=q==null
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
if(s.RQ()&&s.c instanceof A.w){s.oy()
return}s.Ol()},
ce(a,b){var s,r=this
if(r.k3!=null)if(!a.k(0,t.k.a(A.w.prototype.gW.call(r)))){s=r.k4
s=s!=null&&s.a!==0}else s=!1
else s=!1
if(s){s=r.k4
if(s!=null)s.T(0)}r.Ok(a,b)},
f9(a){return this.ce(a,!1)},
lZ(){this.k3=this.c3(t.k.a(A.w.prototype.gW.call(this)))},
bi(){},
bM(a,b){var s=this
if(s.k3.C(0,b))if(s.cB(a,b)||s.ja(b)){a.H(0,new A.kY(b,s))
return!0}return!1},
ja(a){return!1},
cB(a,b){return!1},
cv(a,b){var s,r=a.e
r.toString
s=t.r.a(r).a
b.aq(0,s.a,s.b)},
ku(a){var s,r,q,p,o,n=this.bt(0,null)
if(n.fF(n)===0)return B.k
s=new A.ff(new Float64Array(3))
s.kx(0,0,1)
r=new A.ff(new Float64Array(3))
r.kx(0,0,0)
q=n.tu(r)
r=new A.ff(new Float64Array(3))
r.kx(0,0,1)
p=n.tu(r).ab(0,q)
r=new A.ff(new Float64Array(3))
r.kx(a.a,a.b,0)
o=n.tu(r)
r=o.ab(0,p.AM(s.I5(o)/s.I5(p))).a
return new A.p(r[0],r[1])},
ghA(){var s=this.gq(this)
return new A.A(0,0,0+s.a,0+s.b)},
i3(a,b){this.Oj(a,b)}}
A.a1N.prototype={
$0(){return this.a.c3(this.b)},
$S:229}
A.a1M.prototype={
$0(){return this.a.hk(this.b)},
$S:230}
A.dd.prototype={
a0F(a){var s,r,q,p=this.am$
for(s=A.n(this).i("dd.1?");p!=null;){r=s.a(p.e)
q=p.ko(a)
if(q!=null)return q+r.a.b
p=r.ai$}return null},
HP(a){var s,r,q,p,o=this.am$
for(s=A.n(this).i("dd.1"),r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.ko(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.ai$}return r},
xG(a,b){var s,r,q={},p=q.a=this.cV$
for(s=A.n(this).i("dd.1");p!=null;p=r){p=p.e
p.toString
s.a(p)
if(a.l8(new A.a1L(q,b,p),p.a,b))return!0
r=p.bO$
q.a=r}return!1},
nG(a,b){var s,r,q,p,o,n=this.am$
for(s=A.n(this).i("dd.1"),r=b.a,q=b.b;n!=null;){p=n.e
p.toString
s.a(p)
o=p.a
a.eD(n,new A.p(o.a+r,o.b+q))
n=p.ai$}}}
A.a1L.prototype={
$2(a,b){return this.a.a.bM(a,b)},
$S:13}
A.wn.prototype={
ac(a){this.pB(0)}}
A.f6.prototype={
h(a){return this.ur(0)+"; id="+A.h(this.e)}}
A.a_U.prototype={
dz(a,b){var s=this.b.j(0,a)
s.ce(b,!0)
return s.gq(s)},
dX(a,b){var s=this.b.j(0,a).e
s.toString
t.DU.a(s).a=b},
Rt(a,b){var s,r,q,p,o,n,m=this,l=m.b
try{m.b=A.y(t.K,t.x)
for(r=t.DU,q=b;q!=null;q=n){p=q.e
p.toString
s=r.a(p)
p=m.b
p.toString
o=s.e
o.toString
p.l(0,o,q)
n=s.ai$}m.tt(a)}finally{m.b=l}},
h(a){return"MultiChildLayoutDelegate"}}
A.HD.prototype={
e0(a){if(!(a.e instanceof A.f6))a.e=new A.f6(null,null,B.k)},
sxJ(a){var s=this,r=s.D
if(r===a)return
if(A.v(a)!==A.v(r)||a.mj(r))s.a4()
s.D=a
s.b!=null},
af(a){this.Pk(a)},
ac(a){this.Pl(0)},
c3(a){return a.bv(new A.S(A.E(1/0,a.a,a.b),A.E(1/0,a.c,a.d)))},
bi(){var s=this,r=t.k.a(A.w.prototype.gW.call(s))
s.k3=r.bv(new A.S(A.E(1/0,r.a,r.b),A.E(1/0,r.c,r.d)))
s.D.Rt(s.gq(s),s.am$)},
aE(a,b){this.nG(a,b)},
cB(a,b){return this.xG(a,b)}}
A.xq.prototype={
af(a){var s,r,q
this.ek(a)
s=this.am$
for(r=t.DU;s!=null;){s.af(a)
q=s.e
q.toString
s=r.a(q).ai$}},
ac(a){var s,r,q
this.ej(0)
s=this.am$
for(r=t.DU;s!=null;){s.ac(0)
q=s.e
q.toString
s=r.a(q).ai$}}}
A.PR.prototype={}
A.Cm.prototype={
Z(a,b){var s=this.a
return s==null?null:s.Z(0,b)},
I(a,b){var s=this.a
return s==null?null:s.I(0,b)},
gAP(){return null},
B1(a){return this.it(a)},
yH(a){return null},
h(a){var s=A.b4(this),r=this.a
r=r==null?null:r.h(0)
if(r==null)r=""
return"<optimized out>#"+s+"("+r+")"}}
A.HE.prototype={
str(a){var s=this.v
if(s==a)return
this.v=a
this.D5(a,s)},
sIM(a){var s=this.U
if(s==a)return
this.U=a
this.D5(a,s)},
D5(a,b){var s=this,r=a==null
if(r)s.aj()
else if(b==null||A.v(a)!==A.v(b)||a.it(b))s.aj()
if(s.b!=null){if(b!=null)b.I(0,s.gdV())
if(!r)a.Z(0,s.gdV())}if(r){if(s.b!=null)s.aS()}else if(b==null||A.v(a)!==A.v(b)||a.B1(b))s.aS()},
sty(a){if(this.ad.k(0,a))return
this.ad=a
this.a4()},
af(a){var s,r=this
r.mu(a)
s=r.v
if(s!=null)s.Z(0,r.gdV())
s=r.U
if(s!=null)s.Z(0,r.gdV())},
ac(a){var s=this,r=s.v
if(r!=null)r.I(0,s.gdV())
r=s.U
if(r!=null)r.I(0,s.gdV())
s.kJ(0)},
cB(a,b){var s=this.U
if(s!=null){s=s.yH(b)
s=s===!0}else s=!1
if(s)return!0
return this.pF(a,b)},
ja(a){var s
if(this.v!=null)s=!0
else s=!1
return s},
bi(){this.pG()
this.aS()},
nx(a){return a.bv(this.ad)},
EM(a,b,c){A.aR("debugPreviousCanvasSaveCount")
a.cu(0)
if(!b.k(0,B.k))a.aq(0,b.a,b.b)
c.aE(a,this.gq(this))
a.ct(0)},
aE(a,b){var s,r,q=this
if(q.v!=null){s=a.gbA(a)
r=q.v
r.toString
q.EM(s,b,r)
q.FD(a)}q.fl(a,b)
if(q.U!=null){s=a.gbA(a)
r=q.U
r.toString
q.EM(s,b,r)
q.FD(a)}},
FD(a){},
dr(a){var s,r=this
r.eJ(a)
r.bJ=null
s=r.U
r.dT=s==null?null:s.gAP()
a.a=!1},
nm(a,b,c){var s,r,q,p,o=this
o.fO=A.aiw(o.fO,B.oJ)
o.i1=A.aiw(o.i1,B.oJ)
s=o.fO
r=s!=null&&!s.gR(s)
s=o.i1
q=s!=null&&!s.gR(s)
s=A.a([],t.R)
if(r){p=o.fO
p.toString
B.b.L(s,p)}B.b.L(s,c)
if(q){p=o.i1
p.toString
B.b.L(s,p)}o.BI(a,b,s)},
le(){this.uz()
this.i1=this.fO=null}}
A.VC.prototype={}
A.HH.prototype={
QB(a){var s,r,q,p,o=this
try{r=o.D
if(r!==""){q=$.am6()
s=$.at().xA(q)
s.zE($.am7())
s.qZ(r)
r=s.aQ()
o.K!==$&&A.fo()
o.K=r}else{o.K!==$&&A.fo()
o.K=null}}catch(p){}},
gkC(){return!0},
ja(a){return!0},
c3(a){return a.bv(B.Vp)},
aE(a,b){var s,r,q,p,o,n,m,l,k,j=this
try{p=a.gbA(a)
o=j.gq(j)
n=b.a
m=b.b
l=$.at().bd()
l.sao(0,$.am5())
p.cm(new A.A(n,m,n+o.a,m+o.b),l)
p=j.K
p===$&&A.b()
if(p!=null){s=j.gq(j).a
r=0
q=0
if(s>328){s-=128
r+=64}p.f9(new A.iI(s))
if(j.gq(j).b>96+p.gbp(p)+12)q+=96
a.gbA(a).k_(p,b.a_(0,new A.p(r,q)))}}catch(k){}}}
A.Xu.prototype={
F(){return"FlexFit."+this.b}}
A.d8.prototype={
h(a){return this.ur(0)+"; flex="+A.h(this.e)+"; fit="+A.h(this.f)}}
A.Ek.prototype={
F(){return"MainAxisSize."+this.b}}
A.te.prototype={
F(){return"MainAxisAlignment."+this.b}}
A.l3.prototype={
F(){return"CrossAxisAlignment."+this.b}}
A.of.prototype={
e0(a){if(!(a.e instanceof A.d8))a.e=new A.d8(null,null,B.k)},
hk(a){if(this.D===B.az)return this.HP(a)
return this.a0F(a)},
pY(a){switch(this.D.a){case 0:return a.b
case 1:return a.a}},
q0(a){switch(this.D.a){case 0:return a.a
case 1:return a.b}},
c3(a){var s
if(this.a1===B.kI)return B.a_
s=this.CR(a,A.Tn())
switch(this.D.a){case 0:return a.bv(new A.S(s.a,s.b))
case 1:return a.bv(new A.S(s.b,s.a))}},
CR(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.D===B.az?a2.b:a2.d,a0=a<1/0,a1=c.am$
for(s=t.uc,r=a2.b,q=a2.d,p=b,o=0,n=0,m=0;a1!=null;){l=a1.e
l.toString
s.a(l)
k=l.e
if(k==null)k=0
if(k>0){o+=k
p=a1}else{if(c.a1===B.kH)switch(c.D.a){case 0:j=A.n4(q,b)
break
case 1:j=A.n4(b,r)
break
default:j=b}else switch(c.D.a){case 0:j=new A.aN(0,1/0,0,q)
break
case 1:j=new A.aN(0,r,0,1/0)
break
default:j=b}i=a3.$2(a1,j)
m+=c.q0(i)
n=Math.max(n,c.pY(i))}a1=l.ai$}h=Math.max(0,(a0?a:0)-m)
if(o>0){g=a0?h/o:0/0
a1=c.am$
for(f=0;a1!=null;){l=a1.e
l.toString
k=s.a(l).e
if(k==null)k=0
if(k>0){if(a0)e=a1===p?h-f:g*k
else e=1/0
d=A.aR("minChildExtent")
l=a1.e
l.toString
l=s.a(l).f
switch((l==null?B.kT:l).a){case 0:if(d.b!==d)A.a6(A.a_2(d.a))
d.b=e
break
case 1:if(d.b!==d)A.a6(A.a_2(d.a))
d.b=0
break}if(c.a1===B.kH)switch(c.D.a){case 0:l=d.b
if(l===d)A.a6(A.hG(d.a))
j=new A.aN(l,e,q,q)
break
case 1:l=d.b
if(l===d)A.a6(A.hG(d.a))
j=new A.aN(r,r,l,e)
break
default:j=b}else switch(c.D.a){case 0:l=d.b
if(l===d)A.a6(A.hG(d.a))
j=new A.aN(l,e,0,q)
break
case 1:l=d.b
if(l===d)A.a6(A.hG(d.a))
j=new A.aN(0,r,l,e)
break
default:j=b}i=a3.$2(a1,j)
m+=c.q0(i)
f+=e
n=Math.max(n,c.pY(i))}l=a1.e
l.toString
a1=s.a(l).ai$}}return new A.a8i(a0&&c.M===B.N?a:m,n,m)},
bi(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0="RenderBox was not laid out: ",a1=t.k.a(A.w.prototype.gW.call(a)),a2=a.CR(a1,A.To()),a3=a2.a,a4=a2.b
if(a.a1===B.kI){s=a.am$
for(r=t.uc,q=0,p=0,o=0;s!=null;){n=a.bg
n.toString
m=s.Aq(n,!0)
if(m!=null){q=Math.max(q,m)
p=Math.max(m,p)
n=s.k3
o=Math.max((n==null?A.a6(A.Z(a0+A.v(s).h(0)+"#"+A.b4(s))):n).b-m,o)
a4=Math.max(p+o,a4)}n=s.e
n.toString
s=r.a(n).ai$}}else q=0
switch(a.D.a){case 0:a.k3=a1.bv(new A.S(a3,a4))
a3=a.gq(a).a
a4=a.gq(a).b
break
case 1:a.k3=a1.bv(new A.S(a4,a3))
a3=a.gq(a).b
a4=a.gq(a).a
break}l=a3-a2.c
a.bQ=Math.max(0,-l)
k=Math.max(0,l)
j=A.aR("leadingSpace")
i=A.aR("betweenSpace")
r=A.akQ(a.D,a.a8,a.b5)
h=r===!1
switch(a.K.a){case 0:j.sbR(0)
i.sbR(0)
break
case 1:j.sbR(k)
i.sbR(0)
break
case 2:j.sbR(k/2)
i.sbR(0)
break
case 3:j.sbR(0)
r=a.dP$
i.sbR(r>1?k/(r-1):0)
break
case 4:r=a.dP$
i.sbR(r>0?k/r:0)
j.sbR(i.ak()/2)
break
case 5:r=a.dP$
i.sbR(r>0?k/(r+1):0)
j.sbR(i.ak())
break}g=h?a3-j.ak():j.ak()
s=a.am$
for(r=t.uc,n=a4/2,f=i.a;s!=null;){e=s.e
e.toString
r.a(e)
d=a.a1
switch(d.a){case 0:case 1:if(A.akQ(A.awO(a.D),a.a8,a.b5)===(d===B.bd))c=0
else{d=s.k3
c=a4-a.pY(d==null?A.a6(A.Z(a0+A.v(s).h(0)+"#"+A.b4(s))):d)}break
case 2:d=s.k3
c=n-a.pY(d==null?A.a6(A.Z(a0+A.v(s).h(0)+"#"+A.b4(s))):d)/2
break
case 3:c=0
break
case 4:if(a.D===B.az){d=a.bg
d.toString
m=s.Aq(d,!0)
c=m!=null?q-m:0}else c=0
break
default:c=null}if(h){d=s.k3
g-=a.q0(d==null?A.a6(A.Z(a0+A.v(s).h(0)+"#"+A.b4(s))):d)}switch(a.D.a){case 0:e.a=new A.p(g,c)
break
case 1:e.a=new A.p(c,g)
break}if(h){d=i.b
if(d===i)A.a6(A.hG(f))
g-=d}else{d=s.k3
d=a.q0(d==null?A.a6(A.Z(a0+A.v(s).h(0)+"#"+A.b4(s))):d)
b=i.b
if(b===i)A.a6(A.hG(f))
g+=d+b}s=e.ai$}},
cB(a,b){return this.xG(a,b)},
aE(a,b){var s,r,q,p=this
if(!(p.bQ>1e-10)){p.nG(a,b)
return}s=p.gq(p)
if(s.gR(s))return
s=p.bV
r=p.cx
r===$&&A.b()
q=p.gq(p)
s.saG(0,a.kj(r,b,new A.A(0,0,0+q.a,0+q.b),p.ga0G(),p.c6,s.a))},
n(){this.bV.saG(0,null)
this.Pm()},
iQ(a){var s,r=this
switch(r.c6.a){case 0:return null
case 1:case 2:case 3:if(r.bQ>1e-10){s=r.gq(r)
s=new A.A(0,0,0+s.a,0+s.b)}else s=null
return s}},
bS(){return this.On()}}
A.a8i.prototype={}
A.PT.prototype={
af(a){var s,r,q
this.ek(a)
s=this.am$
for(r=t.uc;s!=null;){s.af(a)
q=s.e
q.toString
s=r.a(q).ai$}},
ac(a){var s,r,q
this.ej(0)
s=this.am$
for(r=t.uc;s!=null;){s.ac(0)
q=s.e
q.toString
s=r.a(q).ai$}}}
A.PU.prototype={}
A.xr.prototype={
n(){var s,r,q
for(s=this.Is$,r=s.length,q=0;q<r;++q)s[q].n()
this.hS()},
eE(){this.Om()}}
A.HK.prototype={
Vq(){var s=this
if(s.D!=null)return
s.D=s.B
s.K=!1},
Eo(){this.K=this.D=null
this.aj()},
sfP(a,b){var s=this,r=s.M
if(b==r)return
if(b!=null&&r!=null&&b.Jw(r)){b.n()
return}r=s.M
if(r!=null)r.n()
s.M=b
s.aj()
if(s.a8==null||s.b5==null)s.a4()},
sbN(a,b){if(b==this.a8)return
this.a8=b
this.a4()},
sbp(a,b){if(b==this.b5)return
this.b5=b
this.a4()},
sM1(a,b){if(b===this.bg)return
this.bg=b
this.a4()},
YV(){this.bQ=null},
sao(a,b){return},
slX(a,b){return},
slH(a){if(a===this.bI)return
this.bI=a
this.aj()},
sa_H(a){return},
syo(a){if(a===this.dR)return
this.dR=a
this.aj()},
sfz(a){if(a.k(0,this.B))return
this.B=a
this.Eo()},
sa4J(a,b){if(b===this.an)return
this.an=b
this.aj()},
sa_o(a){return},
syP(a){if(a===this.bx)return
this.bx=a
this.aj()},
sa3y(a){return},
sbF(a){if(this.f4==a)return
this.f4=a
this.Eo()},
syR(a){return},
FL(a){var s,r,q=this,p=q.a8
a=A.n4(q.b5,p).o_(a)
p=q.M
if(p==null)return new A.S(A.E(0,a.a,a.b),A.E(0,a.c,a.d))
p=p.gbN(p)
s=q.bg
r=q.M
return a.ny(new A.S(p/s,r.gbp(r)/q.bg))},
ja(a){return!0},
c3(a){return this.FL(a)},
bi(){this.k3=this.FL(t.k.a(A.w.prototype.gW.call(this)))},
af(a){this.ek(a)},
ac(a){this.ej(0)},
aE(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.M==null)return
e.Vq()
s=a.gbA(a)
r=e.gq(e)
q=b.a
p=b.b
o=e.M
o.toString
n=e.a1
m=e.bg
l=e.bQ
k=e.dR
j=e.D
j.toString
i=e.hs
h=e.an
g=e.K
g.toString
f=e.bx
A.alA(j,s,i,l,n,e.bI,k,g,o,f,!1,1,new A.A(q,p,q+r.a,p+r.b),h,m)},
n(){var s=this.M
if(s!=null)s.n()
this.M=null
this.hS()}}
A.qc.prototype={
h(a){return"AnnotationEntry(annotation: "+this.a.h(0)+", localPosition: "+this.b.h(0)+")"}}
A.zJ.prototype={}
A.E7.prototype={
wT(a){var s
this.b+=a
s=this.r
if(s!=null)s.wT(a)},
mK(a){var s,r,q
for(s=this.a,s=A.aq(s.gaT(s),!0,t.M),r=s.length,q=0;q<r;++q)s[q].$0()},
n(){var s=this.x
if(s!=null)s.n()
this.x=null},
da(){if(this.w)return
this.w=!0},
sho(a){var s=this.x
if(s!=null)s.n()
this.x=a
s=this.r
if(s!=null&&!0)s.da()},
tS(){this.w=this.w||!1},
af(a){this.y=a},
ac(a){this.y=null},
ec(){},
tG(a){var s,r,q=this,p=q.r
if(p!=null){s=q.as
r=q.Q
if(s==null)p.ax=r
else s.Q=r
r=q.Q
if(r==null)p.ay=s
else r.as=s
q.Q=q.as=null
p.Ek(q)
q.e.saG(0,null)}},
f6(a,b,c){return!1},
Iz(a,b,c){var s=A.a([],c.i("x<qc<0>>"))
this.f6(new A.zJ(s,c.i("zJ<0>")),b,!0,c)
return s.length===0?null:B.b.gJ(s).a},
QT(a){var s,r=this
if(!r.w&&r.x!=null){s=r.x
s.toString
a.ZF(s)
return}r.he(a)
r.w=!1},
bS(){var s=this.N9()
return s+(this.y==null?" DETACHED":"")}}
A.E8.prototype={
saG(a,b){var s=this.a
if(b==s)return
if(s!=null)if(--s.f===0)s.n()
this.a=b
if(b!=null)++b.f},
h(a){var s=this.a
return"LayerHandle("+(s!=null?s.h(0):"DISPOSED")+")"}}
A.a0M.prototype={
sKc(a){var s
this.da()
s=this.ay
if(s!=null)s.n()
this.ay=a},
n(){this.sKc(null)
this.Bq()},
he(a){var s=this.ay
s.toString
a.ZD(B.k,s,this.ch,this.CW)},
f6(a,b,c){return!1}}
A.Au.prototype={
mK(a){var s
this.Nz(a)
if(!a)return
s=this.ax
for(;s!=null;){s.mK(!0)
s=s.Q}},
a_f(a){var s=this
s.tS()
s.he(a)
if(s.b>0)s.mK(!0)
s.w=!1
return a.aQ()},
n(){this.zN()
this.a.T(0)
this.Bq()},
tS(){var s,r=this
r.NC()
s=r.ax
for(;s!=null;){s.tS()
r.w=r.w||s.w
s=s.Q}},
f6(a,b,c,d){var s,r,q
for(s=this.ay,r=a.a;s!=null;s=s.as){if(s.f6(a,b,!0,d))return!0
q=r.length
if(q!==0)return!1}return!1},
af(a){var s
this.NA(a)
s=this.ax
for(;s!=null;){s.af(a)
s=s.Q}},
ac(a){var s
this.NB(0)
s=this.ax
for(;s!=null;){s.ac(0)
s=s.Q}this.mK(!1)},
H2(a,b){var s,r=this
r.da()
s=b.b
if(s!==0)r.wT(s)
b.r=r
s=r.y
if(s!=null)b.af(s)
r.kl(b)
s=b.as=r.ay
if(s!=null)s.Q=b
r.ay=b
if(r.ax==null)r.ax=b
b.e.saG(0,b)},
ec(){var s,r,q=this.ax
for(;q!=null;){s=q.z
r=this.z
if(s<=r){q.z=r+1
q.ec()}q=q.Q}},
kl(a){var s=a.z,r=this.z
if(s<=r){a.z=r+1
a.ec()}},
Ek(a){var s
this.da()
s=a.b
if(s!==0)this.wT(-s)
a.r=null
if(this.y!=null)a.ac(0)},
zN(){var s,r=this,q=r.ax
for(;q!=null;q=s){s=q.Q
q.Q=q.as=null
r.Ek(q)
q.e.saG(0,null)}r.ay=r.ax=null},
he(a){this.iM(a)},
iM(a){var s=this.ax
for(;s!=null;){s.QT(a)
s=s.Q}}}
A.iF.prototype={
sjg(a,b){if(!b.k(0,this.k3))this.da()
this.k3=b},
f6(a,b,c,d){return this.mo(a,b.ab(0,this.k3),!0,d)},
he(a){var s=this,r=s.k3
s.sho(a.Kl(r.a,r.b,t.cV.a(s.x)))
s.iM(a)
a.fW()}}
A.qz.prototype={
f6(a,b,c,d){if(!this.k3.C(0,b))return!1
return this.mo(a,b,!0,d)},
he(a){var s=this,r=s.k3
r.toString
s.sho(a.a4i(r,s.k4,t.CW.a(s.x)))
s.iM(a)
a.fW()}}
A.Ak.prototype={
f6(a,b,c,d){if(!this.k3.C(0,b))return!1
return this.mo(a,b,!0,d)},
he(a){var s=this,r=s.k3
r.toString
s.sho(a.a4g(r,s.k4,t.cB.a(s.x)))
s.iM(a)
a.fW()}}
A.Aj.prototype={
f6(a,b,c,d){if(!this.k3.C(0,b))return!1
return this.mo(a,b,!0,d)},
he(a){var s=this,r=s.k3
r.toString
s.sho(a.a4f(r,s.k4,t.xS.a(s.x)))
s.iM(a)
a.fW()}}
A.kn.prototype={
sbj(a,b){var s=this
if(b.k(0,s.aX))return
s.aX=b
s.bf=!0
s.da()},
he(a){var s,r,q=this
q.bP=q.aX
if(!q.k3.k(0,B.k)){s=q.k3
s=A.tu(s.a,s.b,0)
r=q.bP
r.toString
s.cs(0,r)
q.bP=s}q.sho(a.a4l(q.bP.a,t.Al.a(q.x)))
q.iM(a)
a.fW()},
YO(a){var s,r=this
if(r.bf){s=r.aX
s.toString
r.aN=A.Gc(A.aec(s))
r.bf=!1}s=r.aN
if(s==null)return null
return A.cj(s,a)},
f6(a,b,c,d){var s=this.YO(b)
if(s==null)return!1
return this.NX(a,s,!0,d)}}
A.GH.prototype={
sxa(a,b){var s=this,r=s.aX
if(b!=r){if(b===255||r===255)s.sho(null)
s.aX=b
s.da()}},
he(a){var s,r,q,p=this
if(p.ax==null){p.sho(null)
return}s=p.aX
s.toString
r=p.k3
q=p.x
if(s<255)p.sho(a.a4j(s,r,t.i6.a(q)))
else p.sho(a.Kl(r.a,r.b,t.cV.a(q)))
p.iM(a)
a.fW()}}
A.IE.prototype={
he(a){var s,r,q=this,p=q.k3
p.toString
s=q.k4
s.toString
r=q.ok
r.toString
q.sho(a.a4k(p,s,r,t.fT.a(q.x)))
q.iM(a)
a.fW()}}
A.zI.prototype={
f6(a,b,c,d){var s,r,q,p=this,o=p.mo(a,b,!0,d),n=a.a
if(n.length!==0&&!0)return o
s=p.k4
if(s!=null){r=p.ok
q=r.a
r=r.b
s=!new A.A(q,r,q+s.a,r+s.b).C(0,b)}else s=!1
if(s)return o
if(A.aX(p.$ti.c)===A.aX(d)){o=o||!1
n.push(new A.qc(d.a(p.k3),b.ab(0,p.ok),d.i("qc<0>")))}return o}}
A.O7.prototype={}
A.OB.prototype={
a4K(a){var s=this.a
this.a=a
return s},
h(a){var s="<optimized out>#",r=A.b4(this.b),q=this.a.a
return s+A.b4(this)+"("+("latestEvent: "+(s+r))+", "+("annotations: [list of "+q+"]")+")"}}
A.OC.prototype={
geZ(a){var s=this.c
return s.geZ(s)}}
A.Gn.prototype={
E2(a){var s,r,q,p,o,n,m=t.mC,l=A.jW(null,null,m,t.rA)
for(s=a.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.J)(s),++q){p=s[q]
o=p.a
if(m.b(o)){n=p.b
n.toString
l.l(0,o,n)}}return l},
T_(a){var s,r,q=a.b,p=q.gbr(q)
q=a.b
s=q.geZ(q)
r=a.b.gm8()
if(!this.c.X(0,s))return A.jW(null,null,t.mC,t.rA)
return this.E2(this.a.$2(p,r))},
DQ(a){var s,r
A.ar4(a)
s=a.b
r=A.n(s).i("b6<1>")
this.b.a1u(a.geZ(a),a.d,A.tg(new A.b6(s,r),new A.a_Q(),r.i("k.E"),t.oR))},
a5k(a,b){var s,r,q,p,o,n=this,m={}
if(a.gc_(a)!==B.bB)return
if(t.zs.b(a))return
m.a=null
if(t.yg.b(a))m.a=A.adK()
else{s=a.gm8()
m.a=b==null?n.a.$2(a.gbr(a),s):b}r=a.geZ(a)
q=n.c
p=q.j(0,r)
if(!A.ar5(p,a))return
o=q.a
new A.a_T(m,n,p,a,r).$0()
if(o!==0!==(q.a!==0))n.ar()},
a5f(){new A.a_R(this).$0()}}
A.a_Q.prototype={
$1(a){return a.gHN(a)},
$S:231}
A.a_T.prototype={
$0(){var s=this
new A.a_S(s.a,s.b,s.c,s.d,s.e).$0()},
$S:0}
A.a_S.prototype={
$0(){var s,r,q,p,o,n=this,m=null,l=n.c
if(l==null){s=n.d
if(t.yg.b(s))return
n.b.c.l(0,n.e,new A.OB(A.jW(m,m,t.mC,t.rA),s))}else{s=n.d
if(t.yg.b(s))n.b.c.A(0,s.geZ(s))}r=n.b
q=r.c.j(0,n.e)
if(q==null){l.toString
q=l}p=q.b
q.b=s
o=t.yg.b(s)?A.jW(m,m,t.mC,t.rA):r.E2(n.a.a)
r.DQ(new A.OC(q.a4K(o),o,p,s))},
$S:0}
A.a_R.prototype={
$0(){var s,r,q,p,o,n,m
for(s=this.a,r=s.c,r=r.gaT(r),r=new A.dK(J.ao(r.a),r.b),q=A.n(r).z[1];r.u();){p=r.a
if(p==null)p=q.a(p)
o=p.b
n=s.T_(p)
m=p.a
p.a=n
s.DQ(new A.OC(m,n,o,null))}},
$S:0}
A.a_O.prototype={
$2(a,b){var s
if(!this.a.X(0,a))if(a.gAh()&&a.gzk(a)!=null){s=a.gzk(a)
s.toString
s.$1(this.b.aJ(this.c.j(0,a)))}},
$S:232}
A.a_P.prototype={
$1(a){return!this.a.X(0,a)},
$S:233}
A.So.prototype={}
A.bZ.prototype={
ac(a){},
h(a){return"<none>"}}
A.k5.prototype={
eD(a,b){var s,r=this
if(a.gd8()){r.pz()
if(!a.cy){s=a.ay
s===$&&A.b()
s=!s}else s=!0
if(s)A.aib(a,null,!0)
else if(a.db)A.arn(a)
s=a.ch.a
s.toString
t.cY.a(s)
s.sjg(0,b)
r.H3(s)}else{s=a.ay
s===$&&A.b()
if(s){a.ch.saG(0,null)
a.wd(r,b)}else a.wd(r,b)}},
H3(a){a.tG(0)
this.a.H2(0,a)},
gbA(a){var s,r,q=this
if(q.e==null){q.c=A.arr(q.b)
s=$.at()
r=s.a0p()
q.d=r
q.e=s.a0i(r,null)
r=q.c
r.toString
q.a.H2(0,r)}s=q.e
s.toString
return s},
pz(){var s,r=this
if(r.e==null)return
s=r.c
s.toString
s.sKc(r.d.a10())
r.e=r.d=r.c=null},
AW(){var s=this.c
if(s!=null)if(!s.ch){s.ch=!0
s.da()}},
oM(a,b,c,d){var s,r=this
if(a.ax!=null)a.zN()
r.pz()
r.H3(a)
s=r.a0k(a,d==null?r.b:d)
b.$2(s,c)
s.pz()},
zD(a,b,c){return this.oM(a,b,c,null)},
a0k(a,b){return new A.k5(a,b)},
kj(a,b,c,d,e,f){var s,r,q=this
if(e===B.I){d.$2(q,b)
return null}s=c.cZ(b)
if(a){r=f==null?new A.qz(B.ao,A.y(t.S,t.M),A.aj()):f
if(!s.k(0,r.k3)){r.k3=s
r.da()}if(e!==r.k4){r.k4=e
r.da()}q.oM(r,d,b,s)
return r}else{q.a_D(s,e,s,new A.a0C(q,d,b))
return null}},
a4h(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.I){e.$2(p,b)
return null}s=c.cZ(b)
r=d.cZ(b)
if(a){q=g==null?new A.Ak(B.ku,A.y(t.S,t.M),A.aj()):g
if(!r.k(0,q.k3)){q.k3=r
q.da()}if(f!==q.k4){q.k4=f
q.da()}p.oM(q,e,b,s)
return q}else{p.a_B(r,f,s,new A.a0B(p,e,b))
return null}},
Kk(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.I){e.$2(p,b)
return null}s=c.cZ(b)
r=d.cZ(b)
if(a){q=g==null?new A.Aj(B.ku,A.y(t.S,t.M),A.aj()):g
if(r!==q.k3){q.k3=r
q.da()}if(f!==q.k4){q.k4=f
q.da()}p.oM(q,e,b,s)
return q}else{p.a_A(r,f,s,new A.a0A(p,e,b))
return null}},
tC(a,b,c,d,e){var s,r=this,q=b.a,p=b.b,o=A.tu(q,p,0)
o.cs(0,c)
o.aq(0,-q,-p)
if(a){s=e==null?A.ajb(null):e
s.sbj(0,o)
r.oM(s,d,b,A.ahT(o,r.b))
return s}else{q=r.gbA(r)
q.cu(0)
q.ag(0,o.a)
d.$2(r,b)
r.gbA(r).ct(0)
return null}},
Km(a,b,c,d){var s=d==null?A.ae6():d
s.sxa(0,b)
s.sjg(0,a)
this.zD(s,c,B.k)
return s},
h(a){return"PaintingContext#"+A.fR(this)+"(layer: "+this.a.h(0)+", canvas bounds: "+this.b.h(0)+")"}}
A.a0C.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.a0B.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.a0A.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.Vn.prototype={}
A.u8.prototype={
m2(){var s=this.cx
if(s!=null)s.a.y7()},
sa4T(a){var s=this.e
if(s===a)return
if(s!=null)s.ac(0)
this.e=a
a.af(this)},
IF(){var s,r,q,p,o,n,m,l,k,j,i,h=this
try{for(o=t.c;n=h.r,n.length!==0;){s=n
h.r=A.a([],o)
n=s
m=new A.a0O()
if(!!n.immutable$list)A.a6(A.W("sort"))
l=n.length-1
if(l-0<=32)A.IU(n,0,l,m)
else A.IT(n,0,l,m)
for(r=0;r<J.bk(s);++r){if(h.f){h.f=!1
n=h.r
if(n.length!==0){m=s
l=r
k=J.bk(s)
A.cX(l,k,J.bk(m),null,null)
j=A.bf(m)
i=new A.h4(m,l,k,j.i("h4<1>"))
i.uC(m,l,k,j.c)
B.b.L(n,i)
break}}q=J.b9(s,r)
if(q.z){n=q
n=A.X.prototype.gbE.call(n)===h}else n=!1
if(n)q.VG()}h.f=!1}for(o=h.CW,o=A.fk(o,o.r),n=A.n(o).c;o.u();){m=o.d
p=m==null?n.a(m):m
p.IF()}}finally{h.f=!1}},
SK(a){try{a.$0()}finally{this.f=!0}},
ID(){var s,r,q,p,o=this.z
B.b.dh(o,new A.a0N())
for(s=o.length,r=0;r<o.length;o.length===s||(0,A.J)(o),++r){q=o[r]
if(q.CW&&A.X.prototype.gbE.call(q)===this)q.Gk()}B.b.T(o)
for(o=this.CW,o=A.fk(o,o.r),s=A.n(o).c;o.u();){p=o.d;(p==null?s.a(p):p).ID()}},
IG(){var s,r,q,p,o,n,m,l,k,j=this
try{s=j.Q
j.Q=A.a([],t.c)
for(p=s,J.acY(p,new A.a0P()),o=p.length,n=t.cY,m=0;m<p.length;p.length===o||(0,A.J)(p),++m){r=p[m]
if(r.cy||r.db){l=r
l=A.X.prototype.gbE.call(l)===j}else l=!1
if(l)if(r.ch.a.y!=null)if(r.cy)A.aib(r,null,!1)
else{l=r
k=l.ch.a
k.toString
l.m7(n.a(k))
l.db=!1}else r.Ym()}for(p=j.CW,p=A.fk(p,p.r),o=A.n(p).c;p.u();){n=p.d
q=n==null?o.a(n):n
q.IG()}}finally{}},
GB(){var s=this,r=s.cx
r=r==null?null:r.a.gqD().a
if(r===!0||s.ax>0){if(s.at==null){r=t.ju
s.at=new A.IA(s.c,A.aW(r),A.y(t.S,r),A.aW(r),$.aV())
s.b.$0()}}else{r=s.at
if(r!=null){r.n()
s.at=null
s.d.$0()}}},
IH(){var s,r,q,p,o,n,m,l,k=this
if(k.at==null)return
try{p=k.ch
o=A.aq(p,!0,A.n(p).c)
B.b.dh(o,new A.a0Q())
s=o
p.T(0)
for(p=s,n=p.length,m=0;m<p.length;p.length===n||(0,A.J)(p),++m){r=p[m]
if(r.dy){l=r
l=A.X.prototype.gbE.call(l)===k}else l=!1
if(l)r.Z9()}k.at.Mf()
for(p=k.CW,p=A.fk(p,p.r),n=A.n(p).c;p.u();){l=p.d
q=l==null?n.a(l):l
q.IH()}}finally{}},
af(a){var s,r,q,p=this
p.cx=a
a.Z(0,p.gZc())
p.GB()
for(s=p.CW,s=A.fk(s,s.r),r=A.n(s).c;s.u();){q=s.d;(q==null?r.a(q):q).af(a)}}}
A.a0O.prototype={
$2(a,b){return a.a-b.a},
$S:34}
A.a0N.prototype={
$2(a,b){return a.a-b.a},
$S:34}
A.a0P.prototype={
$2(a,b){return b.a-a.a},
$S:34}
A.a0Q.prototype={
$2(a,b){return a.a-b.a},
$S:34}
A.w.prototype={
az(){var s=this
s.cx=s.gd8()||s.glb()
s.ay=s.gd8()},
eE(){var s=this
s.a4()
s.i9()
s.aj()
s.aS()
s.aO(new A.a20())},
n(){this.ch.saG(0,null)},
e0(a){if(!(a.e instanceof A.bZ))a.e=new A.bZ()},
fw(a){var s=this
s.e0(a)
s.a4()
s.i9()
s.aS()
s.MI(a)},
iU(a){var s=this
a.CD()
a.e.ac(0)
a.e=null
s.MK(a)
s.a4()
s.i9()
s.aS()},
aO(a){},
qy(a,b,c){A.d9(new A.bs(b,c,"rendering library",A.bg("during "+a+"()"),new A.a1X(this),!1))},
af(a){var s=this
s.MJ(a)
if(s.z&&s.Q!=null){s.z=!1
s.a4()}if(s.CW){s.CW=!1
s.i9()}if(s.cy&&s.ch.a!=null){s.cy=!1
s.aj()}if(s.dy&&s.gqC().a){s.dy=!1
s.aS()}},
gW(){var s=this.at
if(s==null)throw A.d(A.Z("A RenderObject does not have any constraints before it has been laid out."))
return s},
a4(){var s,r=this
if(r.z)return
s=r.Q
if(s==null){r.z=!0
if(r.c!=null)r.oy()
return}if(s!==r)r.oy()
else{r.z=!0
if(A.X.prototype.gbE.call(r)!=null){A.X.prototype.gbE.call(r).r.push(r)
A.X.prototype.gbE.call(r).m2()}}},
oy(){this.z=!0
var s=this.c
s.toString
if(!this.as)s.a4()},
CD(){var s=this
if(s.Q!==s){s.Q=null
s.aO(A.alx())}},
Xa(){var s,r,q=this,p=q.Q
if(p===q)return
s=q.c
r=s==null?null:s.Q
if(r!=p){q.Q=r
q.aO(A.aly())}},
VG(){var s,r,q,p=this
try{p.bi()
p.aS()}catch(q){s=A.an(q)
r=A.aH(q)
p.qy("performLayout",s,r)}p.z=!1
p.aj()},
ce(a,b){var s,r,q,p,o,n,m,l=this
if(!b||l.gkC()||a.gJD()||!(l.c instanceof A.w))o=l
else{n=l.c.Q
n.toString
o=n}if(!l.z&&a.k(0,l.at)){if(o!==l.Q){l.Q=o
l.aO(A.aly())}return}l.at=a
n=l.Q
if(n!=null&&o!==n)l.aO(A.alx())
l.Q=o
if(l.gkC())try{l.lZ()}catch(m){s=A.an(m)
r=A.aH(m)
l.qy("performResize",s,r)}try{l.bi()
l.aS()}catch(m){q=A.an(m)
p=A.aH(m)
l.qy("performLayout",q,p)}l.z=!1
l.aj()},
gkC(){return!1},
yQ(a,b){var s=this
s.as=!0
try{A.X.prototype.gbE.call(s).SK(new A.a2_(s,a,b))}finally{s.as=!1}},
gd8(){return!1},
glb(){return!1},
m7(a){return a==null?A.arj(B.k):a},
gaG(a){return this.ch.a},
i9(){var s,r,q,p=this
if(p.CW)return
s=p.CW=!0
r=p.c
if(r instanceof A.w){if(r.CW)return
q=p.ay
q===$&&A.b()
if((q?!p.gd8():s)&&!r.gd8()){r.i9()
return}}if(A.X.prototype.gbE.call(p)!=null)A.X.prototype.gbE.call(p).z.push(p)},
Gk(){var s,r,q=this
if(!q.CW)return
s=q.cx
s===$&&A.b()
q.cx=!1
q.aO(new A.a1Y(q))
if(q.gd8()||q.glb())q.cx=!0
if(!q.gd8()){r=q.ay
r===$&&A.b()}else r=!1
if(r){q.db=q.cy=!1
s=A.X.prototype.gbE.call(q)
if(s!=null)B.b.A(s.Q,q)
q.CW=!1
q.aj()}else if(s!==q.cx){q.CW=!1
q.aj()}else q.CW=!1},
aj(){var s,r=this
if(r.cy)return
r.cy=!0
if(r.gd8()){s=r.ay
s===$&&A.b()}else s=!1
if(s){if(A.X.prototype.gbE.call(r)!=null){A.X.prototype.gbE.call(r).Q.push(r)
A.X.prototype.gbE.call(r).m2()}}else{s=r.c
if(s instanceof A.w)s.aj()
else if(A.X.prototype.gbE.call(r)!=null)A.X.prototype.gbE.call(r).m2()}},
JQ(){var s,r=this
if(r.db||r.cy)return
r.db=!0
if(r.gd8()){s=r.ay
s===$&&A.b()}else s=!1
if(s){if(A.X.prototype.gbE.call(r)!=null){A.X.prototype.gbE.call(r).Q.push(r)
A.X.prototype.gbE.call(r).m2()}}else r.aj()},
Ym(){var s,r=this.c
for(;r instanceof A.w;){if(r.gd8()){s=r.ch.a
if(s==null)break
if(s.y!=null)break
r.cy=!0}r=r.c}},
wd(a,b){var s,r,q,p=this
if(p.z)return
p.db=p.cy=!1
p.ay=p.gd8()
try{p.aE(a,b)}catch(q){s=A.an(q)
r=A.aH(q)
p.qy("paint",s,r)}},
aE(a,b){},
cv(a,b){},
jj(a){return!0},
bt(a,b){var s,r,q,p,o,n,m,l=b==null
if(l){s=A.X.prototype.gbE.call(this).e
if(s instanceof A.w)b=s}r=A.a([],t.c)
q=this
while(q!==b){r.push(q)
p=q.c
p.toString
q=p}if(!l){b.toString
r.push(b)}o=new A.bh(new Float64Array(16))
o.dE()
for(n=r.length-1;n>0;n=m){m=n-1
r[n].cv(r[m],o)}return o},
iQ(a){return null},
xK(a){return null},
dr(a){},
ud(a){var s
if(A.X.prototype.gbE.call(this).at==null)return
s=this.fr
if(s!=null&&!s.y)s.Md(a)
else{s=this.c
if(s!=null)s.ud(a)}},
gqC(){var s,r=this
if(r.dx==null){s=A.iT()
r.dx=s
r.dr(s)}s=r.dx
s.toString
return s},
le(){this.dy=!0
this.fr=null
this.aO(new A.a1Z())},
aS(){var s,r,q,p,o,n,m=this
if(m.b==null||A.X.prototype.gbE.call(m).at==null){m.dx=null
return}if(m.fr!=null){s=m.dx
s=s==null?null:s.a
r=s===!0}else r=!1
s=m.dx
q=(s==null?null:s.k1)!=null||m.gqC().k1!=null
m.dx=null
p=m.gqC().a&&r
o=m
while(!0){n=o.c
if(n instanceof A.w)s=q||!p
else s=!1
if(!s)break
if(o!==m&&o.dy)break
o.dy=!0
if(p)q=!1
if(n.dx==null){s=A.iT()
n.dx=s
n.dr(s)}p=n.dx.a
if(p&&n.fr==null)return
o=n}if(o!==m&&m.fr!=null&&m.dy)A.X.prototype.gbE.call(m).ch.A(0,m)
if(!o.dy){o.dy=!0
if(A.X.prototype.gbE.call(m)!=null){A.X.prototype.gbE.call(m).ch.H(0,o)
A.X.prototype.gbE.call(m).m2()}}},
Z9(){var s,r,q,p,o,n,m,l=this,k=null
if(l.z)return
s=l.fr
r=s==null
if(r)q=k
else{q=s.ch
if(q==null)q=k
else q=q.Q||q.y}s=r?k:s.z
p=t.dK.a(l.DH(s===!0,q===!0))
s=t.R
o=A.a([],s)
n=A.a([],s)
s=l.fr
r=s==null
q=r?k:s.f
m=r?k:s.r
s=r?k:s.w
p.lg(s==null?0:s,m,q,o,n)},
DH(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e={},d=f.gqC()
e.a=d.d
e.b=!d.e&&!d.a
s=a||d.b
r=b||d.p4
q=A.a([],t.xm)
p=d.c||!(f.c instanceof A.w)
o=d.k1!=null
n=t.dK
m=A.y(t.oX,n)
l=t.yj
k=A.a([],l)
j=A.a([],t.zd)
i=d.av
i=i==null?null:i.a!==0
f.fe(new A.a1U(e,f,r,s,q,k,j,d,i===!0,o,m))
if(p)for(n=k.length,h=0;h<k.length;k.length===n||(0,A.J)(k),++h)k[h].t6()
else if(o){g=d.k1.$1(q)
i=g.a
B.b.L(k,new A.aw(i,new A.a1V(e,f,m),A.am(i).i("aw<1,dT>")))
for(i=g.b,h=0;!1;++h)j.push(i[h].fS(0,new A.a1W(f,m),n).dB(0))}n=f.dy=!1
if(!(f.c instanceof A.w)){f.qj(k,!0)
B.b.Y(j,f.gEr())
n=e.a
g=new A.Qc(A.a([],l),A.a([f],t.c),n)}else if(e.b){n=e.a
g=new A.Mk(j,A.a([],l),n)}else{f.qj(k,!0)
B.b.Y(j,f.gEr())
i=e.a
g=new A.mE(b,d,j,A.a([],l),A.a([f],t.c),i)
if(a?!d.b:n){g.pU()
g.f.b=!0}if(d.a)g.z=!0}g.L(0,k)
return g},
qj(a,b){var s,r,q,p,o,n,m,l=this,k=A.aW(t.dK)
for(s=J.aI(a),r=0;r<s.gp(a);++r){q=s.j(a,r)
if(q.ges()==null)continue
if(b){if(l.dx==null){p=A.iT()
l.dx=p
l.dr(p)}p=l.dx
p.toString
p=!p.Jx(q.ges())}else p=!1
if(p)k.H(0,q)
for(o=0;o<r;++o){n=s.j(a,o)
p=q.ges()
p.toString
if(!p.Jx(n.ges())){k.H(0,q)
k.H(0,n)}}}for(s=A.fk(k,k.r),p=A.n(s).c;s.u();){m=s.d;(m==null?p.a(m):m).t6()}},
VW(a){return this.qj(a,!1)},
fe(a){this.aO(a)},
nm(a,b,c){a.jp(0,t.d1.a(c),b)},
i3(a,b){},
bS(){return"<optimized out>#"+A.b4(this)},
h(a){return this.bS()},
eh(a,b,c,d){var s=this.c
if(s instanceof A.w)s.eh(a,b==null?this:b,c,d)},
mk(){return this.eh(B.aJ,null,B.t,null)},
kA(a,b){return this.eh(B.aJ,a,B.t,b)},
$iab:1}
A.a20.prototype={
$1(a){a.eE()},
$S:24}
A.a1X.prototype={
$0(){var s=A.a([],t.E),r=this.a
s.push(A.adm("The following RenderObject was being processed when the exception was fired",B.F2,r))
s.push(A.adm("RenderObject",B.F3,r))
return s},
$S:14}
A.a2_.prototype={
$0(){this.b.$1(this.c.a(this.a.gW()))},
$S:0}
A.a1Y.prototype={
$1(a){var s
a.Gk()
s=a.cx
s===$&&A.b()
if(s)this.a.cx=!0},
$S:24}
A.a1Z.prototype={
$1(a){a.le()},
$S:24}
A.a1U.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a.DH(f.d,f.c)
if(e.a){B.b.T(f.e)
B.b.T(f.f)
B.b.T(f.r)
if(!f.w.a)f.a.a=!0}for(s=e.gJU(),r=s.length,q=f.f,p=f.y,o=f.x,n=f.b,m=f.w,l=f.e,k=f.z,j=0;j<s.length;s.length===r||(0,A.J)(s),++j){i=s[j]
i.b.push(n)
if(o){h=m.av
h.toString
i.qY(h)}if(p&&i.ges()!=null){h=i.ges()
h.toString
l.push(h)
h=i.ges()
h.toString
k.l(0,h,i)}else q.push(i)}if(e instanceof A.Mk)for(s=e.b,r=s.length,q=f.r,j=0;j<s.length;s.length===r||(0,A.J)(s),++j){g=s[j]
for(p=J.ao(g);p.u();){l=p.gG(p)
l.b.push(n)
if(o){k=m.av
k.toString
l.qY(k)}}q.push(g)}},
$S:24}
A.a1V.prototype={
$1(a){var s=this.c.j(0,a)
if(s==null){this.a.b=!1
return new A.wJ(a,A.a([this.b],t.c),!1)}return s},
$S:89}
A.a1W.prototype={
$1(a){var s=this.b.j(0,a)
return s==null?new A.wJ(a,A.a([this.a],t.c),!1):s},
$S:89}
A.ax.prototype={
saI(a){var s=this,r=s.B$
if(r!=null)s.iU(r)
s.B$=a
if(a!=null)s.fw(a)},
ec(){var s=this.B$
if(s!=null)this.kl(s)},
aO(a){var s=this.B$
if(s!=null)a.$1(s)}}
A.dn.prototype={$ibZ:1}
A.as.prototype={
grd(){return this.dP$},
Ec(a,b){var s,r,q,p=this,o=a.e
o.toString
s=A.n(p).i("as.1")
s.a(o);++p.dP$
if(b==null){o=o.ai$=p.am$
if(o!=null){o=o.e
o.toString
s.a(o).bO$=a}p.am$=a
if(p.cV$==null)p.cV$=a}else{r=b.e
r.toString
s.a(r)
q=r.ai$
if(q==null){o.bO$=b
p.cV$=r.ai$=a}else{o.ai$=q
o.bO$=b
o=q.e
o.toString
s.a(o).bO$=r.ai$=a}}},
yN(a,b,c){this.fw(b)
this.Ec(b,c)},
L(a,b){},
F3(a){var s,r,q,p,o=this,n=a.e
n.toString
s=A.n(o).i("as.1")
s.a(n)
r=n.bO$
q=n.ai$
if(r==null)o.am$=q
else{p=r.e
p.toString
s.a(p).ai$=q}q=n.ai$
if(q==null)o.cV$=r
else{q=q.e
q.toString
s.a(q).bO$=r}n.ai$=n.bO$=null;--o.dP$},
A(a,b){this.F3(b)
this.iU(b)},
tf(a,b){var s=this,r=a.e
r.toString
if(A.n(s).i("as.1").a(r).bO$==b)return
s.F3(a)
s.Ec(a,b)
s.a4()},
ec(){var s,r,q,p=this.am$
for(s=A.n(this).i("as.1");p!=null;){r=p.a
q=this.a
if(r<=q){p.a=q+1
p.ec()}r=p.e
r.toString
p=s.a(r).ai$}},
aO(a){var s,r,q=this.am$
for(s=A.n(this).i("as.1");q!=null;){a.$1(q)
r=q.e
r.toString
q=s.a(r).ai$}},
ga1g(a){return this.am$},
a_t(a){var s=a.e
s.toString
return A.n(this).i("as.1").a(s).bO$},
a_r(a){var s=a.e
s.toString
return A.n(this).i("as.1").a(s).ai$}}
A.un.prototype={
Qq(){this.a4()},
XS(){if(this.yh$)return
this.yh$=!0
$.bL.u7(new A.a1K(this))}}
A.a1K.prototype={
$1(a){var s=this.a
s.yh$=!1
if(s.b!=null){s.Of()
s.D.a4()}},
$S:2}
A.a9Z.prototype={}
A.Mk.prototype={
L(a,b){B.b.L(this.c,b)},
gJU(){return this.c}}
A.dT.prototype={
gJU(){return A.a([this],t.yj)},
qY(a){var s=this.c;(s==null?this.c=A.aW(t.xJ):s).L(0,a)}}
A.Qc.prototype={
lg(a,b,c,d,e){var s,r,q,p,o,n=this.b,m=B.b.gJ(n)
if(m.fr==null){s=B.b.gJ(n).gkz()
r=B.b.gJ(n)
r=A.X.prototype.gbE.call(r).at
r.toString
q=$.acO()
q=new A.bH(null,0,s,B.V,q.p4,q.f,q.R8,q.r,q.aA,q.RG,q.rx,q.ry,q.to,q.x1,q.x2,q.y1,q.y2,q.aX)
q.af(r)
m.fr=q}m=B.b.gJ(n).fr
m.toString
m.saw(0,B.b.gJ(n).gju())
p=A.a([],t.R)
for(n=this.e,s=n.length,o=0;o<n.length;n.length===s||(0,A.J)(n),++o)n[o].lg(0,b,c,p,e)
m.jp(0,p,null)
d.push(m)},
ges(){return null},
t6(){},
L(a,b){B.b.L(this.e,b)}}
A.wJ.prototype={
lg(a,b,c,d,e){},
t6(){},
ges(){return this.e}}
A.mE.prototype={
Ew(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null
for(s=this.x,r=s.length,q=t.tM,p=t.xJ,o=this.b,n=0;n<s.length;s.length===r||(0,A.J)(s),++n){m=s[n]
l=A.aW(p)
for(k=J.bC(m),j=k.ga6(m),i=a2,h=i,g=h,f=g,e=f;j.u();){d=j.gG(j)
if(d.ges()!=null){q.a(d)
d.w=!0
if(i==null)i=B.b.gJ(d.b).fr
if(h==null)h=A.iT()
c=d.z?a2:d.f
c.toString
h.iK(c)
c=d.b
if(c.length>1){b=new A.Qu()
b.CS(a3,a4,c)}else b=a2
c=b.c
c===$&&A.b()
a=b.d
a===$&&A.b()
a0=A.eb(c,a)
e=e==null?a0:e.lw(a0)
c=b.b
if(c!=null){a1=A.eb(b.c,c)
f=f==null?a1:f.ea(a1)}c=b.a
if(c!=null){a1=A.eb(b.c,c)
g=g==null?a1:g.ea(a1)}d=d.c
if(d!=null)l.L(0,d)}}if(h!=null)j=!(e.a>=e.c||e.b>=e.d)
else j=!1
if(j){if(i==null||a6.C(0,i.b))i=A.Iy(a2,B.b.gJ(o).gkz())
a6.H(0,i.b)
i.dy=l
if(!i.e.k(0,e)){i.e=e
i.eQ()}if(!A.adZ(i.d,a2)){i.d=null
i.eQ()}i.f=f
i.r=g
for(k=k.ga6(m);k.u();){j=k.gG(k)
if(j.ges()!=null)B.b.gJ(j.b).fr=i}i.Lg(0,h)
a5.push(i)}}},
lg(a,b,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=A.aW(t.S),c=f.y
for(s=f.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.J)(s),++q)c=J.any(c,s[q])
if(!f.z){if(!f.w)B.b.gJ(f.b).fr=null
f.Ew(a0,b,a2,d)
for(s=J.ao(c),r=f.b,p=A.am(r),o=p.c,p=p.i("h4<1>");s.u();){n=s.gG(s)
if(n instanceof A.mE){if(n.z){m=n.b
m=B.b.gJ(m).fr!=null&&d.C(0,B.b.gJ(m).fr.b)}else m=!1
if(m)B.b.gJ(n.b).fr=null}m=n.b
l=new A.h4(r,1,e,p)
l.uC(r,1,e,o)
B.b.L(m,l)
n.lg(a+f.f.y1,b,a0,a1,a2)}return}k=f.S3(b,a0)
s=f.e
r=!s
if(r){if(k==null)p=e
else{p=k.d
p===$&&A.b()
if(!p.gR(p)){p=k.c
p===$&&A.b()
p=p.JH()}else p=!0}p=p===!0}else p=!1
if(p)return
p=f.b
o=B.b.gJ(p)
if(o.fr==null)o.fr=A.Iy(e,B.b.gJ(p).gkz())
j=B.b.gJ(p).fr
j.syT(s)
j.dy=f.c
j.w=a
if(a!==0){f.pU()
s=f.f
s.shn(0,s.y1+a)}if(k!=null){s=k.d
s===$&&A.b()
j.saw(0,s)
s=k.c
s===$&&A.b()
j.sbj(0,s)
j.f=k.b
j.r=k.a
if(r&&k.e){f.pU()
f.f.b2(B.iT,!0)}}s=t.R
i=A.a([],s)
f.Ew(j.f,j.r,a2,d)
for(r=J.ao(c);r.u();){o=r.gG(r)
if(o instanceof A.mE){if(o.z){n=o.b
n=B.b.gJ(n).fr!=null&&d.C(0,B.b.gJ(n).fr.b)}else n=!1
if(n)B.b.gJ(o.b).fr=null}h=A.a([],s)
n=j.f
o.lg(0,j.r,n,i,h)
B.b.L(a2,h)}s=f.f
if(s.a)B.b.gJ(p).nm(j,f.f,i)
else j.jp(0,i,s)
a1.push(j)
for(s=a2.length,r=t.xJ,q=0;q<a2.length;a2.length===s||(0,A.J)(a2),++q){g=a2[q]
p=j.d
if(!A.adZ(g.d,p)){g.d=p==null||A.Gd(p)?e:p
g.eQ()}g.syT(j.y)
p=f.c
if(p!=null){o=g.dy;(o==null?g.dy=A.aW(r):o).L(0,p)}}B.b.L(a1,a2)
B.b.T(a2)},
S3(a,b){var s,r=this.b
if(r.length>1){s=new A.Qu()
s.CS(b,a,r)
r=s}else r=null
return r},
ges(){return this.z?null:this.f},
L(a,b){var s,r,q,p,o,n,m=this
for(s=b.length,r=m.y,q=0;q<b.length;b.length===s||(0,A.J)(b),++q){p=b[q]
r.push(p)
if(p.ges()==null)continue
if(!m.r){m.f=m.f.a00()
m.r=!0}o=m.f
n=p.ges()
n.toString
o.iK(n)}},
qY(a){this.Pb(a)
if(a.a!==0){this.pU()
a.Y(0,this.f.gZI())}},
pU(){var s,r,q=this
if(!q.r){s=q.f
r=A.iT()
r.a=s.a
r.c=s.c
r.d=s.d
r.e=s.e
r.p4=s.p4
r.aX=s.aX
r.k2=s.k2
r.RG=s.RG
r.ry=s.ry
r.rx=s.rx
r.to=s.to
r.x1=s.x1
r.xr=s.xr
r.x2=s.x2
r.y1=s.y1
r.y2=s.y2
r.aA=s.aA
r.av=s.av
r.bP=s.bP
r.aN=s.aN
r.bf=s.bf
r.ba=s.ba
r.r=s.r
r.k3=s.k3
r.ok=s.ok
r.k4=s.k4
r.p1=s.p1
r.p2=s.p2
r.p3=s.p3
r.f.L(0,s.f)
r.R8.L(0,s.R8)
r.b=s.b
q.f=r
q.r=!0}},
t6(){this.z=!0}}
A.Qu.prototype={
CS(a,b,c){var s,r,q,p,o,n,m=this,l=new A.bh(new Float64Array(16))
l.dE()
m.c=l
m.b=a
m.a=b
for(s=c.length-1;s>0;){r=c[s];--s
q=c[s]
a=r.xK(q)
if(a!=null){m.b=a
m.a=A.ajG(m.a,r.iQ(q))}else m.b=A.ajG(m.b,r.iQ(q))
l=$.amH()
l.dE()
A.aub(r,q,m.c,l)
m.b=A.ajH(m.b,l)
m.a=A.ajH(m.a,l)}p=B.b.gJ(c)
l=m.b
l=l==null?p.gju():l.ea(p.gju())
m.d=l
o=m.a
if(o!=null){n=o.ea(l)
if(n.gR(n)){l=m.d
l=!l.gR(l)}else l=!1
m.e=l
if(!l)m.d=n}}}
A.PW.prototype={}
A.km.prototype={
ac(a){this.a=this.b=null
this.PX(0)},
h(a){var s=A.h(this.b),r=this.a
r=r==null?"not laid out":"offset: "+r.h(0)
return"widget: "+s+", "+r}}
A.a1Q.prototype={
e0(a){if(!(a.e instanceof A.km))a.e=new A.km(null,null)},
JK(a,b){var s,r=A.a([],t.aE),q=this.am$,p=A.n(this).i("as.1")
while(q!=null){r.push(A.asb(q,a,b))
s=q.e
s.toString
q=p.a(s).ai$}return r},
a49(a){var s,r,q,p,o,n,m=this.am$
for(s=a.length,r=t.lO,q=A.n(this).i("as.1"),p=0;p<s;++p){o=a[p]
if(m==null)return
n=m.e
n.toString
r.a(n)
n.a=new A.p(o.a,o.b)
m=q.a(n).ai$}for(;m!=null;){s=m.e
s.toString
r.a(s)
s.a=null
m=q.a(s).ai$}},
a41(a,b){var s,r,q,p,o,n,m=this.am$
for(s=b.a,r=b.b,q=A.n(this).i("as.1"),p=t.lO;m!=null;){o=m.e
o.toString
n=p.a(o).a
if(n==null)return
a.eD(m,new A.p(n.a+s,n.b+r))
o=m.e
o.toString
m=q.a(o).ai$}},
a2A(a,b){var s,r,q,p,o={},n=o.a=this.am$
for(s=A.n(this).i("as.1"),r=t.lO;n!=null;n=p){n=n.e
n.toString
q=r.a(n).a
if(q==null)return!1
if(a.l8(new A.a1R(o),q,b))return!0
n=o.a.e
n.toString
p=s.a(n).ai$
o.a=p}return!1}}
A.a1R.prototype={
$2(a,b){return this.a.a.bM(a,b)},
$S:13}
A.uv.prototype={
soV(a,b){var s=this,r=s.D
switch(r.f.aW(0,b).a){case 0:return
case 1:r.soV(0,b)
s.M=null
s.aS()
break
case 2:r.soV(0,b)
s.M=s.c6=s.K=null
s.aj()
s.aS()
break
case 3:r.soV(0,b)
s.c6=s.M=s.K=s.bI=null
s.a4()
s.wi()
s.D9()
s.GA()
break}},
soP(a){var s=this
if(a==s.a8)return
s.wi()
s.D9()
s.a8=a
s.GA()},
GA(){var s,r,q=this
if(q.a8==null)return
s=q.a1
if(s==null)s=q.a1=q.TB()
r=q.a8
B.b.Y(s,r.giL(r))},
wi(){var s,r=this.a8
if(r==null||this.a1==null)return
s=this.a1
s.toString
B.b.Y(s,r.gzM(r))},
TB(){var s,r,q,p,o=this.D.f.L_(!1),n=A.a([],t.sb)
for(s=o.length,r=0;r<s;){q=B.d.oi(o,$.am8(),r)
if(r!==q){if(q===-1)q=s
p=new A.jc(new A.di(r,q),this,o,$.aV())
p.w=p.DG()
n.push(p)
r=q}++r}return n},
D9(){var s,r,q,p=this.a1
if(p==null)return
for(s=p.length,r=0;r<s;++r){q=p[r]
q.K$=$.aV()
q.D$=0}this.a1=null},
a4(){var s=this.a1
if(s!=null)B.b.Y(s,new A.a23())
this.mr()},
n(){var s=this
s.wi()
s.a1=null
s.D.n()
s.hS()},
szW(a,b){var s=this.D
if(s.w===b)return
s.szW(0,b)
this.aj()},
sbF(a){var s=this.D
if(s.x===a)return
s.sbF(a)
this.a4()},
sMx(a){if(this.b5===a)return
this.b5=a
this.a4()},
sa3Z(a,b){var s,r=this
if(r.bg===b)return
r.bg=b
s=b===B.ca?"\u2026":null
r.D.sa0X(s)
r.a4()},
szX(a){var s=this.D
if(s.y===a)return
s.szX(a)
this.bI=null
this.a4()},
sz4(a){var s=this.D
if(s.as==a)return
s.sz4(a)
this.bI=null
this.a4()},
sz0(a,b){var s=this.D
if(J.e(s.Q,b))return
s.sz0(0,b)
this.bI=null
this.a4()},
sMG(a){return},
szZ(a){var s=this.D
if(s.ax===a)return
s.szZ(a)
this.bI=null
this.a4()},
sKS(a){return},
sMa(a){var s,r=this
if(J.e(r.bQ,a))return
r.bQ=a
s=r.a1
s=s==null?null:B.b.jQ(s,new A.a24())
if(s===!0)r.aj()},
q2(a){var s,r=this,q=r.pe(a,B.V)
r.iD(t.k.a(A.w.prototype.gW.call(r)))
s=r.D.LG(a,B.V)
return q.a_(0,new A.p(0,s==null?0:s))},
hk(a){this.iD(t.k.a(A.w.prototype.gW.call(this)))
return this.D.b.a.LC(B.D)},
Rv(){return this.D.f.aO(new A.a21())},
Rw(){var s=this.c6
return s==null?this.c6=this.Rv():s},
ja(a){return!0},
cB(a,b){var s=this.D,r=s.fh(b),q=s.f.LT(r)
if(t.kZ.b(q)){a.H(0,new A.hB(q,t.Cq))
return!0}return this.a2A(a,b)},
El(a,b){var s=this.b5||this.bg===B.ca?a:1/0
this.D.yY(s,b)},
iD(a){this.D.ug(this.fM)
this.El(a.b,a.a)},
c3(a){var s,r,q=this
if(!q.Rw())return B.a_
s=q.D
r=a.b
s.ug(q.JK(r,A.Tn()))
q.El(r,a.a)
s=s.b
r=s.b
s=s.a.a
return a.bv(new A.S(r,Math.ceil(s.gbp(s))))},
bi(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=t.k.a(A.w.prototype.gW.call(i))
i.fM=i.JK(g.b,A.To())
i.iD(g)
s=i.D
r=s.ga2K()
r.toString
i.a49(r)
r=s.b
q=r.b
r=r.a.a
r=Math.ceil(r.gbp(r))
p=s.b.a.a.ga0O()
i.k3=g.bv(new A.S(q,r))
o=i.gq(i).b<r||p
n=i.gq(i).a<q
if(n||o)switch(i.bg.a){case 3:i.bV=!1
i.bI=null
break
case 0:case 2:i.bV=!0
i.bI=null
break
case 1:i.bV=!0
r=A.a5y(h,s.f.a,"\u2026")
q=s.x
q.toString
m=s.y
l=A.a5i(h,s.Q,h,h,r,B.bk,q,h,m,B.aT)
l.a3l()
if(n){switch(s.x.a){case 0:k=l.b.b
j=0
break
case 1:j=i.gq(i).a
k=j-l.b.b
break
default:k=h
j=k}i.bI=A.adH(new A.p(k,0),new A.p(j,0),A.a([B.l,B.kw],t.bk),h,B.cP,h)}else{j=i.gq(i).b
s=l.b.a.a
i.bI=A.adH(new A.p(0,j-Math.ceil(s.gbp(s))/2),new A.p(0,j),A.a([B.l,B.kw],t.bk),h,B.cP,h)}l.n()
break}else{i.bV=!1
i.bI=null}},
cv(a,b){var s,r=a.e
r.toString
s=t.lO.a(r).a
if(s==null)b.uj()
else b.aq(0,s.a,s.b)},
aE(a,b){var s,r,q,p,o,n,m=this
m.iD(t.k.a(A.w.prototype.gW.call(m)))
if(m.bV){s=m.gq(m)
r=b.a
q=b.b
p=new A.A(r,q,r+s.a,q+s.b)
if(m.bI!=null)a.gbA(a).AI(p,$.at().bd())
else a.gbA(a).cu(0)
a.gbA(a).jT(p)}s=m.a1
if(s!=null)for(r=s.length,o=0;o<s.length;s.length===r||(0,A.J)(s),++o)s[o].aE(a,b)
m.D.aE(a.gbA(a),b)
m.a41(a,b)
if(m.bV){if(m.bI!=null){a.gbA(a).aq(0,b.a,b.b)
n=$.at().bd()
n.sa_9(B.Cy)
n.sAZ(m.bI)
s=a.gbA(a)
r=m.gq(m)
s.cm(new A.A(0,0,0+r.a,0+r.b),n)}a.gbA(a).ct(0)}},
pe(a,b){this.iD(t.k.a(A.w.prototype.gW.call(this)))
return this.D.pe(a,b)},
Al(a){this.iD(t.k.a(A.w.prototype.gW.call(this)))
return this.D.Am(a,B.jJ,B.hg)},
fh(a){this.iD(t.k.a(A.w.prototype.gW.call(this)))
return this.D.fh(a)},
dr(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
c.eJ(a)
s=c.D
r=s.f
r.toString
q=A.a([],t.lF)
r.a_Q(q)
c.dR=q
for(r=q.length,p=!1,o=0;o<r;++o)p=p||!1
if(p)a.k1=c.gRI()
else{r=c.K
if(r==null){n=new A.bB("")
m=A.a([],t.ve)
for(r=c.dR,l=r.length,k=0,o=0,j="";o<r.length;r.length===l||(0,A.J)(r),++o){i=r[o]
h=i.b
if(h==null)h=i.a
for(j=i.f,g=j.length,f=0;f<j.length;j.length===g||(0,A.J)(j),++f){e=j[f]
d=e.a
m.push(e.Hz(new A.di(k+d.a,k+d.b)))}j=n.a+=h
k+=h.length}r=c.K=A.a([new A.c9(j.charCodeAt(0)==0?j:j,m)],t.qS)}a.RG=r[0]
a.e=!0
s=s.x
s.toString
a.aX=s}},
RJ(a){var s,r,q,p,o=this,n=new A.V5(A.a([],t.xm),A.a([],t.DF)),m=o.M
if(m==null){m=o.dR
m.toString
m=o.M=A.al1(m)}for(s=m.length,r=null,q=0;q<s;++q,r=p)p=m[q]
if(r!=null)n.a.push(o.Si(r,0))
return new A.qv(n.a,n.b)},
Si(a,b){var s,r,q,p=this.K
if(p==null)p=this.K=A.a([],t.qS)
s=p.length
r=A.aR("attributedLabel")
if(b<s)r.b=p[b]
else{s=a.b
if(s==null)s=a.a
r.b=new A.c9(s,a.f)
p.push(r.ak())}s=A.iT()
q=this.D.x
q.toString
s.aX=q
s.e=!0
s.RG=r.ak()
s.e=!0
return s},
nm(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=A.a([],t.R),b0=a7.D,b1=b0.x
b1.toString
s=A.jW(a8,a8,t.qI,t.ju)
r=a7.M
if(r==null){r=a7.dR
r.toString
r=a7.M=A.al1(r)}for(q=r.length,p=t.k,o=b1,n=0,m=0,l=0;l<r.length;r.length===q||(0,A.J)(r),++l,m=j){k=r[l]
b1=k.a
j=m+b1.length
i=m<j
h=i?m:j
i=i?j:m
g=p.a(A.w.prototype.gW.call(a7))
b0.ug(a7.fM)
f=g.b
f=a7.b5||a7.bg===B.ca?f:1/0
b0.yY(f,g.a)
e=b0.Am(new A.vH(m,j,B.J,!1,h,i),B.jJ,B.hg)
if(e.length===0)continue
i=B.b.gJ(e)
d=new A.A(i.a,i.b,i.c,i.d)
c=B.b.gJ(e).e
for(i=A.am(e),h=new A.h4(e,1,a8,i.i("h4<1>")),h.uC(e,1,a8,i.c),h=new A.fK(h,h.gp(h)),i=A.n(h).c;h.u();){g=h.d
if(g==null)g=i.a(g)
d=d.lw(new A.A(g.a,g.b,g.c,g.d))
c=g.e}i=d.a
h=Math.max(0,i)
g=d.b
f=Math.max(0,g)
i=Math.min(d.c-i,p.a(A.w.prototype.gW.call(a7)).b)
g=Math.min(d.d-g,p.a(A.w.prototype.gW.call(a7)).d)
b=Math.floor(h)-4
a=Math.floor(f)-4
i=Math.ceil(h+i)+4
g=Math.ceil(f+g)+4
a0=new A.A(b,a,i,g)
a1=A.iT()
a2=n+1
a1.k2=new A.tT(n,a8)
a1.e=!0
a1.aX=o
f=k.b
b1=f==null?b1:f
a1.RG=new A.c9(b1,k.f)
b1=b2.r
if(b1!=null){a3=b1.ea(a0)
if(a3.a>=a3.c||a3.b>=a3.d)b1=!(b>=i||a>=g)
else b1=!1
a1.b2(B.iT,b1)}a4=A.aR("newChild")
b1=a7.B
i=b1==null?a8:b1.a!==0
if(i===!0){b1.toString
i=new A.b6(b1,A.n(b1).i("b6<1>"))
a5=i.ga6(i)
if(!a5.u())A.a6(A.bX())
b1=b1.A(0,a5.gG(a5))
b1.toString
if(a4.b!==a4)A.a6(A.a_2(a4.a))
a4.b=b1}else{a6=new A.j0()
b1=A.Iy(a6,a7.Sj(a6))
if(a4.b!==a4)A.a6(A.a_2(a4.a))
a4.b=b1}if(b1===a4)A.a6(A.hG(a4.a))
J.anT(b1,a1)
if(!b1.e.k(0,a0)){b1.e=a0
b1.eQ()}b1=a4.b
if(b1===a4)A.a6(A.hG(a4.a))
i=b1.a
i.toString
s.l(0,i,b1)
b1=a4.b
if(b1===a4)A.a6(A.hG(a4.a))
a9.push(b1)
n=a2
o=c}a7.B=s
b2.jp(0,a9,b3)},
Sj(a){return new A.a22(this,a)},
le(){this.uz()
this.B=null}}
A.a23.prototype={
$1(a){return a.x=null},
$S:240}
A.a24.prototype={
$1(a){var s=a.w
s===$&&A.b()
return s.c!==B.cJ},
$S:241}
A.a21.prototype={
$1(a){return!0},
$S:45}
A.a22.prototype={
$0(){var s=this.a,r=s.B.j(0,this.b)
r.toString
s.kA(s,r.e)},
$S:0}
A.jc.prototype={
gm(a){var s=this.w
s===$&&A.b()
return s},
WL(){var s=this,r=s.DG(),q=s.w
q===$&&A.b()
if(q.k(0,r))return
s.w=r
s.ar()},
DG(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f==null||g.e==null)return B.Uk
s=f.a
r=g.e.a
f=g.b
q=f.q2(new A.bv(s,B.J))
p=s===r?q:f.q2(new A.bv(r,B.J))
f=f.D
o=f.x
o.toString
n=s>r!==(B.K===o)
m=A.tu(g.gfp().a,g.gfp().b,0)
m.fF(m)
o=A.cj(m,q)
l=f.gtx()
k=n?B.BM:B.BL
j=A.cj(m,p)
f=f.gtx()
i=n?B.BL:B.BM
h=g.d.a===g.e.a?B.Um:B.iS
return new A.ke(new A.m8(o,l,k),new A.m8(j,f,i),h,!0)},
lq(a){var s=this,r=A.aR("result"),q=s.d,p=s.e,o=a.a
switch(o.a){case 0:case 1:r.sbR(s.Z8(t.ib.a(a).b,o===B.dM))
break
case 2:s.e=s.d=null
r.sbR(B.dP)
break
case 3:o=s.a
s.d=new A.bv(o.a,B.J)
s.e=new A.bv(o.b,B.aF)
r.sbR(B.dP)
break
case 4:r.sbR(s.V0(t.k2.a(a).gAE()))
break
case 5:t.uQ.a(a)
r.sbR(s.Ul(a.gIO(a),a.gfQ(),a.ga5y()))
break
case 6:t.sQ.a(a)
r.sbR(s.U3(a.gy4(a),a.gfQ(),a.gru(a)))
break}if(!J.e(q,s.d)||!J.e(p,s.e)){s.b.aj()
s.WL()}return r.ak()},
Z8(a,b){var s,r,q,p,o,n,m=this
if(b)m.e=null
else m.d=null
s=m.b
r=s.bt(0,null)
r.fF(r)
q=A.cj(r,a)
p=m.gfp()
if(p.gR(p))return A.aiJ(m.gfp(),q)
p=m.gfp()
o=s.D.x
o.toString
n=m.CC(s.fh(A.asB(p,q,o)))
if(b)m.e=n
else m.d=n
s=n.a
p=m.a
if(s===p.b)return B.ax
if(s===p.a)return B.ay
return A.aiJ(m.gfp(),q)},
CC(a){var s,r=a.a,q=this.a,p=q.b
if(r<=p)s=r===p&&a.b===B.J
else s=!0
if(s)return new A.bv(p,B.aF)
q=q.a
if(r<q)return new A.bv(q,B.J)
return a},
V0(a){var s,r,q,p,o,n=this,m=n.b,l=m.fh(m.ku(a))
if(n.X3(l))return B.af
m.iD(t.k.a(A.w.prototype.gW.call(m)))
s=m.D.b.a.a.AD(l)
m=s.a
r=n.a
q=r.a
if(m<q&&s.b<q)return B.ay
else{r=r.b
if(m>r&&s.b>r)return B.ax}p=A.aR("start")
o=A.aR("end")
r=l.a
q=s.b
if(r>=q)p.b=o.b=new A.bv(r,B.J)
else{p.b=new A.bv(m,B.J)
o.b=new A.bv(q,B.aF)}n.d=p.ak()
n.e=o.ak()
return B.af},
U3(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.bt(0,null)
if(j.fF(j)===0)switch(c){case B.fA:case B.dO:return B.ay
case B.fB:case B.dN:return B.ax}s=A.cj(j,new A.p(a,0)).a
switch(c){case B.fA:case B.fB:if(b){k=l.e
k.toString
r=k}else{k=l.d
k.toString
r=k}q=l.Vl(r,!1,s)
p=q.a
o=q.b
break
case B.dN:case B.dO:n=l.e
if(n==null){n=new A.bv(l.a.b,B.aF)
l.e=n
r=n}else r=n
n=l.d
if(n==null){l.d=r
m=r}else m=n
p=k.fh(new A.p(s,k.q2(b?r:m).b-k.D.gtx()/2))
o=B.af
break
default:p=null
o=null}if(b)l.e=p
else l.d=p
return o},
Ul(a,b,c){var s,r,q,p,o,n,m=this,l=m.e
if(l==null){l=m.a
l=a?new A.bv(l.a,B.J):new A.bv(l.b,B.aF)
m.e=l
s=l}else s=l
l=m.d
if(l==null){m.d=s
r=s}else r=l
s=b?s:r
if(a&&s.a===m.a.b)return B.ax
l=!a
if(l&&s.a===m.a.a)return B.ay
switch(c){case B.Wi:l=m.a
q=m.w1(s,a,new A.Ae(B.d.ae(m.c,l.a,l.b)))
p=B.af
break
case B.Wj:l=m.b.D
o=l.f
o.toString
l=new A.LD(o,l.b.a.a)
p=new A.aaG(l.gYk(),l)
l.c=p
q=m.w1(s,a,p)
p=B.af
break
case B.Wk:q=m.Wa(s,a,new A.a_5(m))
p=B.af
break
case B.Wl:o=m.a
n=o.a
o=o.b
q=m.w1(s,a,new A.W6(B.d.ae(m.c,n,o)))
if(a&&q.a===o)p=B.ax
else p=l&&q.a===n?B.ay:B.af
break
default:p=null
q=null}if(b)m.e=q
else m.d=q
return p},
w1(a,b,c){var s,r=a.a
if(b){r=c.h2(r)
s=r==null?this.a.b:r}else{r=c.h1(r-1)
s=r==null?this.a.a:r}return new A.bv(s,B.J)},
Wa(a,b,c){var s,r,q,p,o=this
switch(a.b.a){case 0:s=a.a
if(s<1&&!b)return B.Wo
r=o.a.a
s=new A.Ae(o.c).h1(r+s)
if(s==null)s=r
q=Math.max(0,s)-1
break
case 1:q=a.a
break
default:q=null}if(b){s=c.h2(q)
p=s==null?o.a.b:s}else{s=c.h1(q)
p=s==null?o.a.a:s}return new A.bv(p,B.J)},
Vl(a,b,c){var s,r,q,p,o,n=this,m=n.b,l=m.D.xs(),k=m.pe(a,B.V),j=l.length,i=j-1
for(s=k.b,r=0;r<l.length;l.length===j||(0,A.J)(l),++r){q=l[r]
if(q.gxi()>s){i=J.anB(q)
break}}if(b&&i===l.length-1)p=new A.bv(n.a.b,B.aF)
else if(!b&&i===0)p=new A.bv(n.a.a,B.J)
else p=n.CC(m.fh(new A.p(c,l[b?i+1:i-1].gxi())))
m=p.a
j=n.a
if(m===j.a)o=B.ay
else o=m===j.b?B.ax:B.af
return new A.bd(p,o,t.nz)},
X3(a){var s,r,q,p,o=this
if(o.d==null||o.e==null)return!1
s=A.aR("currentStart")
r=A.aR("currentEnd")
q=o.d
q.toString
p=o.e
p.toString
if(A.aeT(q,p)>0){s.b=q
r.b=p}else{s.b=p
r.b=q}return A.aeT(s.ak(),a)>=0&&A.aeT(r.ak(),a)<=0},
bt(a,b){var s=A.tu(this.gfp().a,this.gfp().b,0)
s.cs(0,this.b.bt(0,b))
return s},
hE(a,b){if(this.b.b==null)return},
gfp(){var s,r,q,p,o,n,m=this,l=m.x
if(l==null){l=m.b
s=m.a
r=s.a
q=l.Al(A.a5x(B.J,r,s.b,!1))
if(q.length!==0){l=B.b.gJ(q)
p=new A.A(l.a,l.b,l.c,l.d)
for(o=1;o<q.length;++o){l=q[o]
p=p.lw(new A.A(l.a,l.b,l.c,l.d))}m.x=p
l=p}else{n=l.q2(new A.bv(r,B.J))
l=A.aeh(n,new A.p(n.a+0,n.b+-l.D.gtx()))
m.x=l}}return l},
gq(a){var s=this.gfp()
return new A.S(s.c-s.a,s.d-s.b)},
aE(a,b){var s,r,q,p,o,n=this,m=n.d
if(m==null||n.e==null)return
s=n.b
if(s.bQ!=null){r=A.a5x(B.J,m.a,n.e.a,!1)
q=$.at().bd()
q.scO(0,B.aR)
m=s.bQ
m.toString
q.sao(0,m)
for(m=s.Al(r),s=m.length,p=0;p<m.length;m.length===s||(0,A.J)(m),++p){o=m[p]
a.gbA(a).cm(new A.A(o.a,o.b,o.c,o.d).cZ(b),q)}}A.tu(n.gfp().a,n.gfp().b,0)},
$ia5:1}
A.xv.prototype={
af(a){var s,r,q
this.ek(a)
s=this.am$
for(r=t.lO;s!=null;){s.af(a)
q=s.e
q.toString
s=r.a(q).ai$}},
ac(a){var s,r,q
this.ej(0)
s=this.am$
for(r=t.lO;s!=null;){s.ac(0)
q=s.e
q.toString
s=r.a(q).ai$}}}
A.PX.prototype={}
A.PY.prototype={
af(a){this.Pn(a)
$.fP.yg$.a.H(0,this.gFl())},
ac(a){$.fP.yg$.a.A(0,this.gFl())
this.Po(0)}}
A.yg.prototype={
ac(a){this.pB(0)}}
A.SC.prototype={}
A.SD.prototype={}
A.HV.prototype={}
A.eM.prototype={
e0(a){if(!(a.e instanceof A.bZ))a.e=new A.bZ()},
c3(a){var s=this.B$
s=s==null?null:s.hK(a)
return s==null?this.nx(a):s},
bi(){var s=this,r=s.B$
if(r==null)r=null
else r.ce(t.k.a(A.w.prototype.gW.call(s)),!0)
r=r==null?null:r.gq(r)
s.k3=r==null?s.nx(t.k.a(A.w.prototype.gW.call(s))):r
return},
nx(a){return new A.S(A.E(0,a.a,a.b),A.E(0,a.c,a.d))},
cB(a,b){var s=this.B$
s=s==null?null:s.bM(a,b)
return s===!0},
cv(a,b){},
aE(a,b){var s=this.B$
if(s==null)return
a.eD(s,b)}}
A.rL.prototype={
F(){return"HitTestBehavior."+this.b}}
A.uw.prototype={
bM(a,b){var s,r=this
if(r.gq(r).C(0,b)){s=r.cB(a,b)||r.v===B.ai
if(s||r.v===B.d8)a.H(0,new A.kY(b,r))}else s=!1
return s},
ja(a){return this.v===B.ai}}
A.HC.prototype={
sH_(a){if(this.v.k(0,a))return
this.v=a
this.a4()},
bi(){var s=this,r=t.k.a(A.w.prototype.gW.call(s)),q=s.B$,p=s.v
if(q!=null){q.ce(p.o_(r),!0)
q=s.B$
s.k3=q.gq(q)}else s.k3=p.o_(r).bv(B.a_)},
c3(a){var s=this.B$,r=this.v
if(s!=null)return s.hK(r.o_(a))
else return r.o_(a).bv(B.a_)}}
A.HM.prototype={
sa3C(a,b){if(this.v===b)return
this.v=b
this.a4()},
sa3A(a,b){if(this.U===b)return
this.U=b
this.a4()},
Em(a){var s,r,q=a.a,p=a.b
p=p<1/0?p:A.E(this.v,q,p)
s=a.c
r=a.d
return new A.aN(q,p,s,r<1/0?r:A.E(this.U,s,r))},
EU(a,b){var s=this.B$
if(s!=null)return a.bv(b.$2(s,this.Em(a)))
return this.Em(a).bv(B.a_)},
c3(a){return this.EU(a,A.Tn())},
bi(){this.k3=this.EU(t.k.a(A.w.prototype.gW.call(this)),A.To())}}
A.Hy.prototype={
sa_0(a,b){if(this.v===b)return
this.v=b
this.a4()},
Ci(a){var s,r,q,p,o=a.a,n=a.b
if(o>=n&&a.c>=a.d)return new A.S(A.E(0,o,n),A.E(0,a.c,a.d))
s=this.v
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
r=p}return a.bv(new A.S(o,r))},
c3(a){return this.Ci(a)},
bi(){var s,r=this
r.k3=r.Ci(t.k.a(A.w.prototype.gW.call(r)))
s=r.B$
if(s!=null)s.f9(A.n3(r.gq(r)))}}
A.HP.prototype={
glb(){return this.B$!=null&&this.v>0},
gd8(){return this.B$!=null&&this.v>0},
slX(a,b){var s,r,q,p,o=this
if(o.U===b)return
s=o.B$!=null
r=s&&o.v>0
q=o.v
o.U=b
p=B.c.b_(A.Th(b,0,1)*255)
o.v=p
if(r!==(s&&p>0))o.i9()
o.JQ()
if(q!==0!==(o.v!==0)&&!0)o.aS()},
sr2(a){return},
jj(a){return this.v>0},
m7(a){var s=a==null?A.ae6():a
s.sxa(0,this.v)
return s},
aE(a,b){if(this.B$==null||this.v===0)return
this.fl(a,b)},
fe(a){var s,r=this.B$
if(r!=null)s=this.v!==0||!1
else s=!1
if(s){r.toString
a.$1(r)}}}
A.up.prototype={
gd8(){if(this.B$!=null){var s=this.yj$
s.toString}else s=!1
return s},
m7(a){var s=a==null?A.ae6():a
s.sxa(0,this.lB$)
return s},
slX(a,b){var s=this,r=s.lC$
if(r===b)return
if(s.b!=null&&r!=null)r.I(0,s.gqL())
s.lC$=b
if(s.b!=null)b.Z(0,s.gqL())
s.wO()},
sr2(a){if(!1===this.yk$)return
this.yk$=!1
this.aS()},
wO(){var s,r=this,q=r.lB$,p=r.lC$
p=r.lB$=B.c.b_(A.Th(p.gm(p),0,1)*255)
if(q!==p){s=r.yj$
p=p>0
r.yj$=p
if(r.B$!=null&&s!==p)r.i9()
r.JQ()
if(q===0||r.lB$===0)r.aS()}},
jj(a){var s=this.lC$
return s.gm(s)>0},
fe(a){var s,r=this.B$
if(r!=null)if(this.lB$===0){s=this.yk$
s.toString}else s=!0
else s=!1
if(s){r.toString
a.$1(r)}}}
A.Hx.prototype={}
A.qP.prototype={
Z(a,b){return null},
I(a,b){return null},
h(a){return"CustomClipper"}}
A.mb.prototype={
LA(a){return this.b.fg(new A.A(0,0,0+a.a,0+a.b),this.c)},
Ms(a){if(A.v(a)!==B.a_g)return!0
t.qm.a(a)
return!a.b.k(0,this.b)||a.c!=this.c}}
A.pJ.prototype={
snu(a){var s,r=this,q=r.v
if(q==a)return
r.v=a
s=a==null
if(s||q==null||A.v(a)!==A.v(q)||a.Ms(q))r.qh()
if(r.b!=null){if(q!=null)q.I(0,r.gqg())
if(!s)a.Z(0,r.gqg())}},
af(a){var s
this.mu(a)
s=this.v
if(s!=null)s.Z(0,this.gqg())},
ac(a){var s=this.v
if(s!=null)s.I(0,this.gqg())
this.kJ(0)},
qh(){this.U=null
this.aj()
this.aS()},
sre(a){if(a!==this.ad){this.ad=a
this.aj()}},
bi(){var s=this,r=s.k3!=null?s.gq(s):null
s.pG()
if(!J.e(r,s.gq(s)))s.U=null},
iJ(){var s,r=this
if(r.U==null){s=r.v
s=s==null?null:s.LA(r.gq(r))
r.U=s==null?r.gpS():s}},
iQ(a){var s,r=this
switch(r.ad.a){case 0:return null
case 1:case 2:case 3:if(r.v==null)s=null
else{s=r.gq(r)
s=new A.A(0,0,0+s.a,0+s.b)}if(s==null){s=r.gq(r)
s=new A.A(0,0,0+s.a,0+s.b)}return s}},
n(){this.cn=null
this.hS()}}
A.HB.prototype={
gpS(){var s=this.gq(this)
return new A.A(0,0,0+s.a,0+s.b)},
bM(a,b){var s=this
if(s.v!=null){s.iJ()
if(!s.U.C(0,b))return!1}return s.iw(a,b)},
aE(a,b){var s,r,q=this,p=q.B$
if(p!=null){s=q.ch
if(q.ad!==B.I){q.iJ()
p=q.cx
p===$&&A.b()
r=q.U
r.toString
s.saG(0,a.kj(p,b,r,A.eM.prototype.gig.call(q),q.ad,t.iM.a(s.a)))}else{a.eD(p,b)
s.saG(0,null)}}else q.ch.saG(0,null)}}
A.HA.prototype={
gpS(){var s=$.at().dq(),r=this.gq(this)
s.x7(new A.A(0,0,0+r.a,0+r.b))
return s},
bM(a,b){var s=this
if(s.v!=null){s.iJ()
if(!s.U.C(0,b))return!1}return s.iw(a,b)},
aE(a,b){var s,r,q,p=this,o=p.B$
if(o!=null){s=p.ch
if(p.ad!==B.I){p.iJ()
o=p.cx
o===$&&A.b()
r=p.gq(p)
q=p.U
q.toString
s.saG(0,a.Kk(o,b,new A.A(0,0,0+r.a,0+r.b),q,A.eM.prototype.gig.call(p),p.ad,t.bN.a(s.a)))}else{a.eD(o,b)
s.saG(0,null)}}else p.ch.saG(0,null)}}
A.xw.prototype={
shn(a,b){if(this.c4===b)return
this.c4=b
this.aj()},
sdG(a,b){if(this.ev.k(0,b))return
this.ev=b
this.aj()},
sao(a,b){if(this.fL.k(0,b))return
this.fL=b
this.aj()},
dr(a){this.eJ(a)
a.shn(0,this.c4)}}
A.HR.prototype={
scN(a,b){if(this.ai===b)return
this.ai=b
this.qh()},
sa_c(a,b){if(J.e(this.yf,b))return
this.yf=b
this.qh()},
gpS(){var s,r,q=this,p=q.gq(q),o=0+p.a
p=0+p.b
switch(q.ai.a){case 0:s=q.yf
if(s==null)s=B.as
return s.dC(new A.A(0,0,o,p))
case 1:s=(o-0)/2
r=(p-0)/2
return new A.fS(0,0,o,p,s,r,s,r,s,r,s,r,s===r)}},
bM(a,b){var s=this
if(s.v!=null){s.iJ()
if(!s.U.C(0,b))return!1}return s.iw(a,b)},
aE(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(j.B$==null){j.ch.saG(0,null)
return}j.iJ()
s=j.U.cZ(b)
r=$.at()
q=r.dq()
q.fv(s)
p=a.gbA(a)
o=j.c4
if(o!==0&&!0){n=j.ev
m=j.fL
p.nW(q,n,o,(m.gm(m)>>>24&255)!==255)}l=j.ad===B.hu
if(!l){r=r.bd()
r.sao(0,j.fL)
p.cU(s,r)}r=j.cx
r===$&&A.b()
o=j.gq(j)
n=j.U
n.toString
m=j.ch
k=t.bG.a(m.a)
m.saG(0,a.a4h(r,b,new A.A(0,0,0+o.a,0+o.b),n,new A.a25(j,l),j.ad,k))}}
A.a25.prototype={
$2(a,b){var s,r
if(this.b){s=a.gbA(a)
r=$.at().bd()
r.sao(0,this.a.fL)
s.nV(r)}this.a.fl(a,b)},
$S:8}
A.HS.prototype={
gpS(){var s=$.at().dq(),r=this.gq(this)
s.x7(new A.A(0,0,0+r.a,0+r.b))
return s},
bM(a,b){var s=this
if(s.v!=null){s.iJ()
if(!s.U.C(0,b))return!1}return s.iw(a,b)},
aE(a,b){var s,r,q,p,o,n,m,l,k=this
if(k.B$==null){k.ch.saG(0,null)
return}k.iJ()
s=k.gq(k)
r=b.a
q=b.b
p=k.U.cZ(b)
o=a.gbA(a)
if(k.c4!==0&&!0){o.cm(new A.A(r,q,r+s.a,q+s.b).d7(20),$.anl())
s=k.ev
r=k.c4
q=k.fL
o.nW(p,s,r,(q.gm(q)>>>24&255)!==255)}n=k.ad===B.hu
if(!n){s=$.at().bd()
s.sao(0,k.fL)
o.dM(p,s)}s=k.cx
s===$&&A.b()
r=k.gq(k)
q=k.U
q.toString
m=k.ch
l=t.bN.a(m.a)
m.saG(0,a.Kk(s,b,new A.A(0,0,0+r.a,0+r.b),q,new A.a26(k,n),k.ad,l))}}
A.a26.prototype={
$2(a,b){var s,r
if(this.b){s=a.gbA(a)
r=$.at().bd()
r.sao(0,this.a.fL)
s.nV(r)}this.a.fl(a,b)},
$S:8}
A.Cu.prototype={
F(){return"DecorationPosition."+this.b}}
A.HG.prototype={
sa0B(a){var s,r=this
if(a.k(0,r.U))return
s=r.v
if(s!=null)s.n()
r.v=null
r.U=a
r.aj()},
sbr(a,b){if(b===this.ad)return
this.ad=b
this.aj()},
sxt(a){if(a.k(0,this.bb))return
this.bb=a
this.aj()},
ac(a){var s=this,r=s.v
if(r!=null)r.n()
s.v=null
s.kJ(0)
s.aj()},
ja(a){var s=this
return s.U.Jb(s.gq(s),a,s.bb.d)},
aE(a,b){var s,r,q,p=this
if(p.v==null)p.v=p.U.rh(p.gdV())
s=p.bb
r=p.gq(p)
q=new A.nB(s.a,s.b,s.c,s.d,r,s.f)
if(p.ad===B.hB){s=p.v
s.toString
s.oH(a.gbA(a),b,q)
if(p.U.gyS())a.AW()}p.fl(a,b)
if(p.ad===B.EZ){s=p.v
s.toString
s.oH(a.gbA(a),b,q)
if(p.U.gyS())a.AW()}}}
A.I0.prototype={
sK6(a,b){return},
sfz(a){var s=this
if(J.e(s.U,a))return
s.U=a
s.aj()
s.aS()},
sbF(a){var s=this
if(s.ad==a)return
s.ad=a
s.aj()
s.aS()},
glb(){return!1},
sbj(a,b){var s,r=this
if(J.e(r.cn,b))return
s=new A.bh(new Float64Array(16))
s.b8(b)
r.cn=s
r.aj()
r.aS()},
slH(a){return},
gvi(){var s,r,q=this,p=q.U,o=p==null?null:p.V(q.ad)
if(o==null)return q.cn
s=new A.bh(new Float64Array(16))
s.dE()
r=o.ZP(q.gq(q))
s.aq(0,r.a,r.b)
p=q.cn
p.toString
s.cs(0,p)
s.aq(0,-r.a,-r.b)
return s},
bM(a,b){return this.cB(a,b)},
cB(a,b){var s=this.bb?this.gvi():null
return a.GY(new A.a2f(this),b,s)},
aE(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
if(a.B$!=null){s=a.gvi()
s.toString
r=A.a_x(s)
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
if(b===0||!isFinite(b)){a.ch.saG(0,null)
return}q=a.cx
q===$&&A.b()
p=A.eM.prototype.gig.call(a)
o=a.ch
n=o.a
o.saG(0,a0.tC(q,a1,s,p,n instanceof A.kn?n:null))}else{a.fl(a0,a1.a_(0,r))
a.ch.saG(0,null)}}},
cv(a,b){var s=this.gvi()
s.toString
b.cs(0,s)}}
A.a2f.prototype={
$2(a,b){return this.a.pF(a,b)},
$S:13}
A.us.prototype={
Xw(){if(this.v!=null)return
this.v=this.ad},
Dp(a){switch(a.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
syo(a){var s=this,r=s.U
if(r===a)return
s.U=a
if(s.Dp(r)||s.Dp(a))s.a4()
else{s.bJ=s.cn=null
s.aj()}},
sfz(a){var s=this
if(s.ad.k(0,a))return
s.ad=a
s.v=s.bJ=s.cn=null
s.aj()},
sbF(a){var s=this
if(s.bb==a)return
s.bb=a
s.v=s.bJ=s.cn=null
s.aj()},
c3(a){var s,r=this.B$
if(r!=null){s=r.hK(B.bH)
switch(this.U.a){case 6:return a.bv(new A.aN(0,a.b,0,a.d).ny(s))
case 1:case 2:case 0:case 4:case 3:case 5:return a.ny(s)}}else return new A.S(A.E(0,a.a,a.b),A.E(0,a.c,a.d))},
bi(){var s,r,q,p=this,o=p.B$
if(o!=null){o.ce(B.bH,!0)
switch(p.U.a){case 6:o=t.k
s=o.a(A.w.prototype.gW.call(p))
r=p.B$
q=new A.aN(0,s.b,0,s.d).ny(r.gq(r))
p.k3=o.a(A.w.prototype.gW.call(p)).bv(q)
break
case 1:case 2:case 0:case 4:case 3:case 5:o=t.k.a(A.w.prototype.gW.call(p))
s=p.B$
p.k3=o.ny(s.gq(s))
break}p.bJ=p.cn=null}else{o=t.k.a(A.w.prototype.gW.call(p))
p.k3=new A.S(A.E(0,o.a,o.b),A.E(0,o.c,o.d))}},
wP(){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.bJ!=null)return
if(i.B$==null){i.cn=!1
s=new A.bh(new Float64Array(16))
s.dE()
i.bJ=s}else{i.Xw()
s=i.B$
r=s.gq(s)
q=A.akU(i.U,r,i.gq(i))
s=q.b
p=q.a
o=r.a
n=r.b
m=i.v.yM(p,new A.A(0,0,0+o,0+n))
l=i.v
l.toString
k=i.gq(i)
j=l.yM(s,new A.A(0,0,0+k.a,0+k.b))
l=m.a
i.cn=m.c-l<o||m.d-m.b<n
n=A.tu(j.a,j.b,0)
n.ir(0,s.a/p.a,s.b/p.b,1)
n.aq(0,-l,-m.b)
i.bJ=n}},
EG(a,b){var s,r,q,p,o=this,n=o.bJ
n.toString
s=A.a_x(n)
if(s==null){n=o.cx
n===$&&A.b()
r=o.bJ
r.toString
q=A.eM.prototype.gig.call(o)
p=o.ch.a
return a.tC(n,b,r,q,p instanceof A.kn?p:null)}else o.fl(a,b.a_(0,s))
return null},
aE(a,b){var s,r,q,p,o=this
if(o.B$!=null){s=o.gq(o)
if(!s.gR(s)){s=o.B$
s=s.gq(s)
s=s.gR(s)}else s=!0}else s=!0
if(s)return
o.wP()
s=o.cn
s.toString
if(s&&o.dT!==B.I){s=o.cx
s===$&&A.b()
r=o.gq(o)
q=o.ch
p=q.a
p=p instanceof A.qz?p:null
q.saG(0,a.kj(s,b,new A.A(0,0,0+r.a,0+r.b),o.gWF(),o.dT,p))}else o.ch.saG(0,o.EG(a,b))},
cB(a,b){var s=this,r=s.gq(s)
if(!r.gR(r)){r=s.B$
if(r==null)r=null
else{r=r.gq(r)
r=r.gR(r)}r=r===!0}else r=!0
if(r)return!1
s.wP()
return a.GY(new A.a1O(s),b,s.bJ)},
jj(a){var s=this.gq(this)
if(!s.gR(s)){s=a.gq(a)
s=!s.gR(s)}else s=!1
return s},
cv(a,b){var s=this,r=s.gq(s)
if(!r.gR(r)){r=a.gq(a)
r=!r.gR(r)}else r=!1
if(!r)b.uj()
else{s.wP()
r=s.bJ
r.toString
b.cs(0,r)}}}
A.a1O.prototype={
$2(a,b){return this.a.pF(a,b)},
$S:13}
A.HJ.prototype={
sa5b(a){var s=this
if(s.v.k(0,a))return
s.v=a
s.aj()
s.aS()},
bM(a,b){return this.cB(a,b)},
cB(a,b){var s=this,r=s.U?new A.p(s.v.a*s.gq(s).a,s.v.b*s.gq(s).b):null
return a.l8(new A.a1P(s),r,b)},
aE(a,b){var s=this
if(s.B$!=null)s.fl(a,new A.p(b.a+s.v.a*s.gq(s).a,b.b+s.v.b*s.gq(s).b))},
cv(a,b){var s=this
b.aq(0,s.v.a*s.gq(s).a,s.v.b*s.gq(s).b)}}
A.a1P.prototype={
$2(a,b){return this.a.pF(a,b)},
$S:13}
A.HT.prototype={
nx(a){return new A.S(A.E(1/0,a.a,a.b),A.E(1/0,a.c,a.d))},
i3(a,b){var s,r=this,q=null
if(t.Y.b(a)){s=r.cz
return s==null?q:s.$1(a)}if(t.f2.b(a))return q
if(t.Cs.b(a)){s=r.cq
return s==null?q:s.$1(a)}if(t.hV.b(a))return q
if(t.AJ.b(a)){s=r.c4
return s==null?q:s.$1(a)}if(t.EL.b(a)){s=r.ev
return s==null?q:s.$1(a)}if(t.eB.b(a))return q
if(t.zv.b(a))return q
if(t.zs.b(a)){s=r.Io
return s==null?q:s.$1(a)}}}
A.uu.prototype={
bM(a,b){return this.Oq(a,b)&&!0},
i3(a,b){var s=this.cq
if(s!=null&&t.hV.b(a))return s.$1(a)},
gHN(a){return this.c4},
gAh(){return this.ev},
af(a){this.mu(a)
this.ev=!0},
ac(a){this.ev=!1
this.kJ(0)},
nx(a){return new A.S(A.E(1/0,a.a,a.b),A.E(1/0,a.c,a.d))},
$ihJ:1,
gzj(a){return this.e7},
gzk(a){return this.cr}}
A.HW.prototype={
gd8(){return!0}}
A.ut.prototype={
sJf(a){if(a===this.v)return
this.v=a
this.aS()},
syK(a){return},
bM(a,b){return!this.v&&this.iw(a,b)},
fe(a){this.ms(a)},
dr(a){var s
this.eJ(a)
if(this.v)s=!0
else s=!1
a.b=s}}
A.HO.prototype={
stg(a){var s=this
if(a===s.v)return
s.v=a
s.a4()
s.oy()},
hk(a){if(this.v)return null
return this.Pp(a)},
gkC(){return this.v},
c3(a){if(this.v)return new A.S(A.E(0,a.a,a.b),A.E(0,a.c,a.d))
return this.Op(a)},
lZ(){this.Og()},
bi(){var s,r=this
if(r.v){s=r.B$
if(s!=null)s.f9(t.k.a(A.w.prototype.gW.call(r)))}else r.pG()},
bM(a,b){return!this.v&&this.iw(a,b)},
jj(a){return!this.v},
aE(a,b){if(this.v)return
this.fl(a,b)},
fe(a){if(this.v)return
this.ms(a)}}
A.uo.prototype={
sGP(a){if(this.v===a)return
this.v=a
this.aS()},
syK(a){return},
bM(a,b){var s=this
return s.v?s.gq(s).C(0,b):s.iw(a,b)},
fe(a){this.ms(a)},
dr(a){var s
this.eJ(a)
if(this.v)s=!0
else s=!1
a.b=s}}
A.iQ.prototype={
sa5l(a){if(A.Tq(a,this.cz))return
this.cz=a
this.aS()},
sji(a){var s,r=this
if(J.e(r.e7,a))return
s=r.e7
r.e7=a
if(a!=null!==(s!=null))r.aS()},
sjh(a){var s,r=this
if(J.e(r.cq,a))return
s=r.cq
r.cq=a
if(a!=null!==(s!=null))r.aS()},
sK0(a){var s,r=this
if(J.e(r.cr,a))return
s=r.cr
r.cr=a
if(a!=null!==(s!=null))r.aS()},
sK5(a){var s,r=this
if(J.e(r.c4,a))return
s=r.c4
r.c4=a
if(a!=null!==(s!=null))r.aS()},
dr(a){var s,r=this
r.eJ(a)
if(r.e7!=null){s=r.cz
s=s==null||s.C(0,B.dR)}else s=!1
if(s)a.sji(r.e7)
if(r.cq!=null){s=r.cz
s=s==null||s.C(0,B.AU)}else s=!1
if(s)a.sjh(r.cq)
if(r.cr!=null){s=r.cz
if(s==null||s.C(0,B.dU))a.stk(r.gWX())
s=r.cz
if(s==null||s.C(0,B.dT))a.stj(r.gWV())}if(r.c4!=null){s=r.cz
if(s==null||s.C(0,B.dQ))a.stl(r.gWZ())
s=r.cz
if(s==null||s.C(0,B.dS))a.sti(r.gWT())}},
WW(){var s,r,q,p=this
if(p.cr!=null){s=p.gq(p).a*-0.8
r=p.cr
r.toString
q=p.gq(p).iO(B.k)
q=A.cj(p.bt(0,null),q)
r.$1(new A.hx(null,new A.p(s,0),s,q))}},
WY(){var s,r,q,p=this
if(p.cr!=null){s=p.gq(p).a*0.8
r=p.cr
r.toString
q=p.gq(p).iO(B.k)
q=A.cj(p.bt(0,null),q)
r.$1(new A.hx(null,new A.p(s,0),s,q))}},
X_(){var s,r,q,p=this
if(p.c4!=null){s=p.gq(p).b*-0.8
r=p.c4
r.toString
q=p.gq(p).iO(B.k)
q=A.cj(p.bt(0,null),q)
r.$1(new A.hx(null,new A.p(0,s),s,q))}},
WU(){var s,r,q,p=this
if(p.c4!=null){s=p.gq(p).b*0.8
r=p.c4
r.toString
q=p.gq(p).iO(B.k)
q=A.cj(p.bt(0,null),q)
r.$1(new A.hx(null,new A.p(0,s),s,q))}}}
A.ux.prototype={
sKi(a){var s=this
if(s.v===a)return
s.v=a
s.Gg(a)
s.aS()},
sa_S(a){if(this.U===a)return
this.U=a
this.aS()},
sa19(a){if(this.ad===a)return
this.ad=a
this.aS()},
sa17(a){return},
sa_a(a){return},
Gg(a){var s=this,r=a.fy
r=a.fx
r=r==null?null:new A.c9(r,B.ad)
s.bJ=r
s.dT=null
s.fO=null
s.i1=null
s.Iw=null},
sbF(a){if(this.j4==a)return
this.j4=a
this.aS()},
fe(a){this.ms(a)},
dr(a){var s,r,q=this
q.eJ(a)
a.a=q.U
a.c=q.ad
a.b=!1
s=q.v.a
if(s!=null){a.b2(B.B6,!0)
a.b2(B.AY,s)}s=q.v.e
if(s!=null)a.b2(B.B4,s)
s=q.v.f
if(s!=null)a.b2(B.B7,s)
s=q.v.w
if(s!=null)a.b2(B.B5,s)
s=q.v.as
if(s!=null)a.b2(B.B1,s)
s=q.v.at
if(s!=null)a.b2(B.B2,s)
s=q.v.db
if(s!=null)a.b2(B.AZ,s)
s=q.bJ
if(s!=null){a.RG=s
a.e=!0}s=q.dT
if(s!=null){a.rx=s
a.e=!0}s=q.fO
if(s!=null){a.ry=s
a.e=!0}s=q.i1
if(s!=null){a.to=s
a.e=!0}s=q.Iw
if(s!=null){a.x1=s
a.e=!0}s=q.v
r=s.p2
if(r!=null){a.x2=r
a.e=!0}s.p3!=null
s=q.v.cx
if(s!=null)a.b2(B.B0,s)
s=q.v.cy
if(s!=null)a.b2(B.B3,s)
s=q.j4
if(s!=null){a.aX=s
a.e=!0}s=q.v
r=s.R8
if(r!=null){a.k2=r
a.e=!0}s=s.RG
if(s!=null)a.x8(s)
if(q.v.rx!=null)a.sji(q.gX0())
if(q.v.ry!=null)a.sjh(q.gWR())
if(q.v.K!=null)a.sth(q.gWP())},
X1(){var s=this.v.rx
if(s!=null)s.$0()},
WS(){var s=this.v.ry
if(s!=null)s.$0()},
WQ(){var s=this.v.K
if(s!=null)s.$0()}}
A.Hz.prototype={
sa_b(a){return},
dr(a){this.eJ(a)
a.d=!0}}
A.HN.prototype={
dr(a){this.eJ(a)
a.e=a.p4=a.a=!0}}
A.HI.prototype={
sa18(a){if(a===this.v)return
this.v=a
this.aS()},
fe(a){if(this.v)return
this.ms(a)}}
A.HL.prototype={
syL(a,b){if(b===this.v)return
this.v=b
this.aS()},
dr(a){this.eJ(a)
a.k3=this.v
a.e=!0}}
A.uq.prototype={
sm(a,b){if(this.v.k(0,b))return
this.v=b
this.aj()},
sMv(a){return},
aE(a,b){var s=this,r=s.v,q=s.gq(s)
a.zD(new A.zI(r,q,b,A.y(t.S,t.M),A.aj(),s.$ti.i("zI<1>")),A.eM.prototype.gig.call(s),b)},
glb(){return!0}}
A.PO.prototype={
af(a){var s=this
s.mu(a)
s.lC$.Z(0,s.gqL())
s.wO()},
ac(a){this.lC$.I(0,this.gqL())
this.kJ(0)},
aE(a,b){if(this.lB$===0)return
this.fl(a,b)}}
A.xx.prototype={
af(a){var s
this.ek(a)
s=this.B$
if(s!=null)s.af(a)},
ac(a){var s
this.ej(0)
s=this.B$
if(s!=null)s.ac(0)}}
A.xy.prototype={
hk(a){var s=this.B$
s=s==null?null:s.ko(a)
return s==null?this.BF(a):s}}
A.kf.prototype={
F(){return"SelectionResult."+this.b}}
A.cZ.prototype={$ia5:1}
A.Iv.prototype={
soP(a){var s=this,r=s.lA$
if(a==r)return
if(a==null)s.I(0,s.gFu())
else if(r==null)s.Z(0,s.gFu())
s.Ft()
s.lA$=a
s.Fv()},
Fv(){var s=this
if(s.lA$==null){s.k8$=!1
return}if(s.k8$&&!s.gm(s).d){s.lA$.A(0,s)
s.k8$=!1}else if(!s.k8$&&s.gm(s).d){s.lA$.H(0,s)
s.k8$=!0}},
Ft(){var s=this
if(s.k8$){s.lA$.A(0,s)
s.k8$=!1}}}
A.v2.prototype={
F(){return"SelectionEventType."+this.b}}
A.oN.prototype={
F(){return"TextGranularity."+this.b}}
A.a3i.prototype={}
A.qy.prototype={}
A.m7.prototype={}
A.oq.prototype={
F(){return"SelectionExtendDirection."+this.b}}
A.v4.prototype={
F(){return"SelectionStatus."+this.b}}
A.ke.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.L(b)!==A.v(s))return!1
return b instanceof A.ke&&J.e(b.a,s.a)&&J.e(b.b,s.b)&&b.c===s.c&&b.d===s.d},
gt(a){var s=this
return A.N(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.m8.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.L(b)!==A.v(s))return!1
return b instanceof A.m8&&b.a.k(0,s.a)&&b.b===s.b&&b.c===s.c},
gt(a){return A.N(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.Jl.prototype={
F(){return"TextSelectionHandleType."+this.b}}
A.HX.prototype={
hk(a){var s,r,q=this.B$
if(q!=null){s=q.ko(a)
r=q.e
r.toString
t.r.a(r)
if(s!=null)s+=r.a.b}else s=this.BF(a)
return s},
aE(a,b){var s,r=this.B$
if(r!=null){s=r.e
s.toString
a.eD(r,t.r.a(s).a.a_(0,b))}},
cB(a,b){var s,r=this.B$
if(r!=null){s=r.e
s.toString
t.r.a(s)
return a.l8(new A.a27(b,s,r),s.a,b)}return!1}}
A.a27.prototype={
$2(a,b){return this.c.bM(a,b)},
$S:13}
A.HQ.prototype={
qE(){var s=this
if(s.v!=null)return
s.v=s.U.V(s.ad)},
sdc(a,b){var s=this
if(s.U.k(0,b))return
s.U=b
s.v=null
s.a4()},
sbF(a){var s=this
if(s.ad==a)return
s.ad=a
s.v=null
s.a4()},
c3(a){var s,r,q,p=this
p.qE()
if(p.B$==null){s=p.v
return a.bv(new A.S(s.a+s.c,s.b+s.d))}s=p.v
s.toString
r=a.HQ(s)
q=p.B$.hK(r)
s=p.v
return a.bv(new A.S(s.a+q.a+s.c,s.b+q.b+s.d))},
bi(){var s,r,q,p,o,n,m=this,l=t.k.a(A.w.prototype.gW.call(m))
m.qE()
if(m.B$==null){s=m.v
m.k3=l.bv(new A.S(s.a+s.c,s.b+s.d))
return}s=m.v
s.toString
r=l.HQ(s)
m.B$.ce(r,!0)
s=m.B$
q=s.e
q.toString
t.r.a(q)
p=m.v
o=p.a
q.a=new A.p(o,p.b)
s=s.gq(s)
p=m.v
q=p.c
p=p.b
n=m.B$
m.k3=l.bv(new A.S(o+s.a+q,p+n.gq(n).b+m.v.d))}}
A.Hw.prototype={
qE(){var s=this
if(s.v!=null)return
s.v=s.U.V(s.ad)},
sfz(a){var s=this
if(s.U.k(0,a))return
s.U=a
s.v=null
s.a4()},
sbF(a){var s=this
if(s.ad==a)return
s.ad=a
s.v=null
s.a4()},
x9(){var s,r,q,p,o=this
o.qE()
s=o.B$.e
s.toString
t.r.a(s)
r=o.v
r.toString
q=o.gq(o)
p=o.B$
s.a=r.la(t.uu.a(q.ab(0,p.gq(p))))}}
A.HU.prototype={
sa5o(a){if(this.cq==a)return
this.cq=a
this.a4()},
sa2q(a){if(this.cr==a)return
this.cr=a
this.a4()},
c3(a){var s,r,q=this,p=q.cq!=null||a.b===1/0,o=q.cr!=null||a.d===1/0,n=q.B$
if(n!=null){s=n.hK(new A.aN(0,a.b,0,a.d))
if(p){n=q.cq
if(n==null)n=1
n=s.a*n}else n=1/0
if(o){r=q.cr
if(r==null)r=1
r=s.b*r}else r=1/0
return a.bv(new A.S(n,r))}n=p?0:1/0
return a.bv(new A.S(n,o?0:1/0))},
bi(){var s,r,q=this,p=t.k.a(A.w.prototype.gW.call(q)),o=q.cq!=null||p.b===1/0,n=q.cr!=null||p.d===1/0,m=q.B$
if(m!=null){m.ce(new A.aN(0,p.b,0,p.d),!0)
if(o){m=q.B$
m=m.gq(m)
s=q.cq
if(s==null)s=1
s=m.a*s
m=s}else m=1/0
if(n){s=q.B$
s=s.gq(s)
r=q.cr
if(r==null)r=1
r=s.b*r
s=r}else s=1/0
q.k3=p.bv(new A.S(m,s))
q.x9()}else{m=o?0:1/0
q.k3=p.bv(new A.S(m,n?0:1/0))}}}
A.a3U.prototype={
u3(a){return new A.S(A.E(1/0,a.a,a.b),A.E(1/0,a.c,a.d))}}
A.HF.prototype={
sxJ(a){var s=this,r=s.v
if(r===a)return
if(A.v(a)!==A.v(r)||a.mj(r))s.a4()
s.v=a
s.b!=null},
af(a){this.Pq(a)},
ac(a){this.Pr(0)},
c3(a){return a.bv(this.v.u3(a))},
bi(){var s,r,q,p,o,n=this,m=t.k,l=m.a(A.w.prototype.gW.call(n))
n.k3=l.bv(n.v.u3(l))
if(n.B$!=null){s=n.v.Ao(m.a(A.w.prototype.gW.call(n)))
m=n.B$
m.toString
l=s.a
r=s.b
q=l>=r
m.ce(s,!(q&&s.c>=s.d))
m=n.B$.e
m.toString
t.r.a(m)
p=n.v
o=n.gq(n)
if(q&&s.c>=s.d)l=new A.S(A.E(0,l,r),A.E(0,s.c,s.d))
else{l=n.B$
l=l.gq(l)}m.a=p.Ax(o,l)}}}
A.xz.prototype={
af(a){var s
this.ek(a)
s=this.B$
if(s!=null)s.af(a)},
ac(a){var s
this.ej(0)
s=this.B$
if(s!=null)s.ac(0)}}
A.DL.prototype={
F(){return"GrowthDirection."+this.b}}
A.ki.prototype={
gJD(){return!1},
ZW(a,b){var s=this.w
switch(A.b0(this.a).a){case 0:return new A.aN(b,a,s,s)
case 1:return new A.aN(s,s,b,a)}},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.ki))return!1
return b.a===s.a&&b.b===s.b&&b.d===s.d&&b.f===s.f&&b.r===s.r&&b.w===s.w&&b.x===s.x&&b.y===s.y&&b.Q===s.Q&&b.z===s.z},
gt(a){var s=this
return A.N(s.a,s.b,s.d,s.f,s.r,s.w,s.x,s.y,s.Q,s.z,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a){var s=this,r=A.a([s.a.h(0),s.b.h(0),s.c.h(0),"scrollOffset: "+B.c.O(s.d,1),"remainingPaintExtent: "+B.c.O(s.r,1)],t.s),q=s.f
if(q!==0)r.push("overlap: "+B.c.O(q,1))
r.push("crossAxisExtent: "+B.c.O(s.w,1))
r.push("crossAxisDirection: "+s.x.h(0))
r.push("viewportMainAxisExtent: "+B.c.O(s.y,1))
r.push("remainingCacheExtent: "+B.c.O(s.Q,1))
r.push("cacheOrigin: "+B.c.O(s.z,1))
return"SliverConstraints("+B.b.bm(r,", ")+")"}}
A.a41.prototype={
bS(){return"SliverGeometry"}}
A.ow.prototype={}
A.IM.prototype={
h(a){return A.v(this.a).h(0)+"@(mainAxis: "+A.h(this.c)+", crossAxis: "+A.h(this.d)+")"}}
A.vj.prototype={
h(a){var s=this.a
return"layoutOffset="+(s==null?"None":B.c.O(s,1))}}
A.kj.prototype={
h(a){return"paintOffset="+this.a.h(0)}}
A.iV.prototype={}
A.cf.prototype={
gW(){return t.p.a(A.w.prototype.gW.call(this))},
gju(){return this.ghA()},
ghA(){var s=this,r=t.p
switch(A.b0(r.a(A.w.prototype.gW.call(s)).a).a){case 0:return new A.A(0,0,0+s.id.c,0+r.a(A.w.prototype.gW.call(s)).w)
case 1:return new A.A(0,0,0+r.a(A.w.prototype.gW.call(s)).w,0+s.id.c)}},
lZ(){},
Ja(a,b,c){var s=this
if(c>=0&&c<s.id.r&&b>=0&&b<t.p.a(A.w.prototype.gW.call(s)).w)if(s.yI(a,b,c)||!1){a.H(0,new A.IM(c,b,s))
return!0}return!1},
yI(a,b,c){return!1},
hh(a,b,c){var s=a.d,r=a.r,q=s+r
return A.E(A.E(c,s,q)-A.E(b,s,q),0,r)},
nq(a,b,c){var s=a.d,r=s+a.z,q=a.Q,p=s+q
return A.E(A.E(c,r,p)-A.E(b,r,p),0,q)},
xp(a){return 0},
cv(a,b){},
i3(a,b){}}
A.a28.prototype={
DD(a){var s
switch(a.a.a){case 0:case 3:s=!1
break
case 2:case 1:s=!0
break
default:s=null}switch(a.b.a){case 0:break
case 1:s=!s
break}return s},
a2y(a,b,c,d){var s,r,q,p,o=this,n={},m=t.p,l=o.DD(m.a(A.w.prototype.gW.call(o))),k=b.e
k.toString
k=t.D.a(k).a
k.toString
s=k-m.a(A.w.prototype.gW.call(o)).d
r=d-s
q=c-0
p=n.a=null
switch(A.b0(m.a(A.w.prototype.gW.call(o)).a).a){case 0:if(!l){r=b.gq(b).a-r
s=o.id.c-b.gq(b).a-s}p=new A.p(s,0)
n.a=new A.p(r,q)
break
case 1:if(!l){r=b.gq(b).b-r
s=o.id.c-b.gq(b).b-s}p=new A.p(0,s)
n.a=new A.p(q,r)
break}return a.ZJ(new A.a29(n,b),p)},
ZU(a,b){var s,r=this,q=t.p,p=r.DD(q.a(A.w.prototype.gW.call(r))),o=a.e
o.toString
o=t.D.a(o).a
o.toString
s=o-q.a(A.w.prototype.gW.call(r)).d
switch(A.b0(q.a(A.w.prototype.gW.call(r)).a).a){case 0:b.aq(0,!p?r.id.c-a.gq(a).a-s:s,0)
break
case 1:b.aq(0,0,!p?r.id.c-a.gq(a).b-s:s)
break}}}
A.a29.prototype={
$1(a){return this.b.bM(a,this.a.a)},
$S:90}
A.QO.prototype={}
A.QR.prototype={
ac(a){this.pB(0)}}
A.HY.prototype={
sp9(a){if(this.y9===a)return
this.y9=a
this.a4()}}
A.HZ.prototype={
LK(a,b){var s,r
if(b>0){s=a/b
r=B.c.b_(s)
if(Math.abs(s*b-r*b)<1e-10)return r
return B.c.cJ(s)}return 0},
At(a,b){var s,r
if(b>0){s=a/b-1
r=B.c.b_(s)
if(Math.abs(s*b-r*b)<1e-10)return Math.max(0,r)
return Math.max(0,B.c.d4(s))}return 0},
Rq(a){var s,r=this.am$,q=A.n(this).i("as.1"),p=t.D,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s<a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).ai$}return o},
Rr(a){var s,r=this.cV$,q=A.n(this).i("as.1"),p=t.D,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s>a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).bO$}return o},
bi(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=t.p,a7=a6.a(A.w.prototype.gW.call(a4)),a8=a4.av
a8.R8=!1
s=a6.a(A.w.prototype.gW.call(a4)).y*a4.y9
a6=a7.d
r=a6+a7.z
q=r+a7.Q
p=a7.ZW(s,s)
o=a4.LK(r,s)
n=isFinite(q)?a4.At(q,s):a5
if(a4.am$!=null){m=a4.Rq(o)
a4.Hp(m,n!=null?a4.Rr(n):0)}else a4.Hp(0,0)
if(a4.am$==null)if(!a4.ZA(o,s*o)){l=o<=0?0:a8.grd()*s
a4.id=A.vi(a5,!1,a5,a5,l,0,0,l,a5)
a8.HX()
return}k=a4.am$
k.toString
k=k.e
k.toString
j=t.D
k=j.a(k).b
k.toString
i=k-1
h=a5
for(;i>=o;--i){g=a4.a2O(p)
if(g==null){a4.id=A.vi(a5,!1,a5,a5,0,0,0,0,i*s)
return}k=g.e
k.toString
j.a(k).a=s*i
if(h==null)h=g}if(h==null){a4.am$.f9(p)
h=a4.am$
k=h.e
k.toString
j.a(k).a=s*o}k=h.e
k.toString
k=j.a(k).b
k.toString
i=k+1
k=A.n(a4).i("as.1")
f=n!=null
while(!0){if(!(!f||i<=n)){e=1/0
break}d=h.e
d.toString
g=k.a(d).ai$
if(g!=null){d=g.e
d.toString
d=j.a(d).b
d.toString
d=d!==i}else d=!0
if(d){g=a4.a2N(p,h)
if(g==null){e=i*s
break}}else g.f9(p)
d=g.e
d.toString
j.a(d)
c=d.b
c.toString
d.a=s*c;++i
h=g}k=a4.cV$
k.toString
k=k.e
k.toString
k=j.a(k).b
k.toString
b=s*o
a=s*(k+1)
e=Math.min(e,a8.a14(a7,o,k,b,a))
a0=a4.hh(a7,b,a)
a1=a4.nq(a7,b,a)
a2=a6+a7.r
a3=isFinite(a2)?a4.At(a2,s):a5
a4.id=A.vi(a1,a3!=null&&k>=a3||a6>0,a5,a5,e,a0,0,e,a5)
if(e===a)a8.R8=!0
a8.HX()}}
A.hF.prototype={$ibZ:1}
A.a2d.prototype={
e0(a){}}
A.h1.prototype={
h(a){var s=this.b,r=this.o7$?"keepAlive; ":""
return"index="+A.h(s)+"; "+r+this.OZ(0)}}
A.lZ.prototype={
e0(a){if(!(a.e instanceof A.h1))a.e=new A.h1(!1,null,null)},
fw(a){var s
this.BH(a)
s=a.e
s.toString
t.D.a(s)
if(!s.c){t.x.a(a)
s.b=this.av.p4}},
yN(a,b,c){this.us(0,b,c)},
tf(a,b){var s,r,q,p=this,o=a.e
o.toString
s=t.D
s.a(o)
if(!o.c){p.N1(a,b)
o=a.e
o.toString
s.a(o).b=p.av.p4
p.a4()}else{r=p.aA
if(r.j(0,o.b)===a)r.A(0,o.b)
q=a.e
q.toString
s.a(q).b=p.av.p4
o=o.b
o.toString
r.l(0,o,a)}},
A(a,b){var s=b.e
s.toString
t.D.a(s)
if(!s.c){this.N3(0,b)
return}this.aA.A(0,s.b)
this.iU(b)},
vc(a,b){this.yQ(new A.a2a(this,a,b),t.p)},
D3(a){var s,r=this,q=a.e
q.toString
t.D.a(q)
if(q.o7$){r.A(0,a)
s=q.b
s.toString
r.aA.l(0,s,a)
a.e=q
r.BH(a)
q.c=!0}else r.av.Kv(a)},
af(a){var s,r,q
this.Ps(a)
for(s=this.aA,s=s.gaT(s),s=new A.dK(J.ao(s.a),s.b),r=A.n(s).z[1];s.u();){q=s.a;(q==null?r.a(q):q).af(a)}},
ac(a){var s,r,q
this.Pt(0)
for(s=this.aA,s=s.gaT(s),s=new A.dK(J.ao(s.a),s.b),r=A.n(s).z[1];s.u();){q=s.a;(q==null?r.a(q):q).ac(0)}},
ec(){this.N2()
var s=this.aA
s.gaT(s).Y(0,this.gKt())},
aO(a){var s
this.Be(a)
s=this.aA
s.gaT(s).Y(0,a)},
fe(a){this.Be(a)},
ZA(a,b){var s
this.vc(a,null)
s=this.am$
if(s!=null){s=s.e
s.toString
t.D.a(s).a=b
return!0}this.av.R8=!0
return!1},
a2O(a){var s,r,q,p=this,o=p.am$
o.toString
o=o.e
o.toString
s=t.D
o=s.a(o).b
o.toString
r=o-1
p.vc(r,null)
o=p.am$
o.toString
q=o.e
q.toString
q=s.a(q).b
q.toString
if(q===r){o.ce(a,!1)
return p.am$}p.av.R8=!0
return null},
a2N(a,b){var s,r,q,p=b.e
p.toString
s=t.D
p=s.a(p).b
p.toString
r=p+1
this.vc(r,b)
p=b.e
p.toString
q=A.n(this).i("as.1").a(p).ai$
if(q!=null){p=q.e
p.toString
p=s.a(p).b
p.toString
p=p===r}else p=!1
if(p){q.ce(a,!1)
return q}this.av.R8=!0
return null},
Hp(a,b){var s={}
s.a=a
s.b=b
this.yQ(new A.a2c(s,this),t.p)},
K7(a){switch(A.b0(t.p.a(A.w.prototype.gW.call(this)).a).a){case 0:return a.gq(a).a
case 1:return a.gq(a).b}},
yI(a,b,c){var s,r,q=this.cV$,p=A.agt(a)
for(s=A.n(this).i("as.1");q!=null;){if(this.a2y(p,q,b,c))return!0
r=q.e
r.toString
q=s.a(r).bO$}return!1},
xp(a){var s=a.e
s.toString
return t.D.a(s).a},
jj(a){var s=t.ub.a(a.e)
return(s==null?null:s.b)!=null&&!this.aA.X(0,s.b)},
cv(a,b){if(!this.jj(a))b.uj()
else this.ZU(a,b)},
aE(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null
if(d.am$==null)return
s=t.p
switch(A.jn(s.a(A.w.prototype.gW.call(d)).a,s.a(A.w.prototype.gW.call(d)).b).a){case 0:r=b.a_(0,new A.p(0,d.id.c))
q=B.SS
p=B.fs
o=!0
break
case 1:r=b
q=B.fs
p=B.iz
o=!1
break
case 2:r=b
q=B.iz
p=B.fs
o=!1
break
case 3:r=b.a_(0,new A.p(d.id.c,0))
q=B.T_
p=B.iz
o=!0
break
default:o=c
r=o
p=r
q=p}n=d.am$
for(m=A.n(d).i("as.1"),l=t.D;n!=null;){k=n.e
k.toString
k=l.a(k).a
k.toString
j=k-s.a(A.w.prototype.gW.call(d)).d
k=r.a
i=q.a
k=k+i*j+p.a*0
h=r.b
g=q.b
h=h+g*j+p.b*0
f=new A.p(k,h)
if(o){e=d.K7(n)
f=new A.p(k+i*e,h+g*e)}if(j<s.a(A.w.prototype.gW.call(d)).r&&j+d.K7(n)>0)a.eD(n,f)
k=n.e
k.toString
n=m.a(k).ai$}}}
A.a2a.prototype={
$1(a){var s=this.a,r=s.aA,q=this.b,p=this.c
if(r.X(0,q)){r=r.A(0,q)
r.toString
q=r.e
q.toString
t.D.a(q)
s.iU(r)
r.e=q
s.us(0,r,p)
q.c=!1}else s.av.a0j(q,p)},
$S:91}
A.a2c.prototype={
$1(a){var s,r,q
for(s=this.a,r=this.b;s.a>0;){q=r.am$
q.toString
r.D3(q);--s.a}for(;s.b>0;){q=r.cV$
q.toString
r.D3(q);--s.b}s=r.aA
s=s.gaT(s)
q=A.n(s).i("be<k.E>")
B.b.Y(A.aq(new A.be(s,new A.a2b(),q),!0,q.i("k.E")),r.av.ga4B())},
$S:91}
A.a2b.prototype={
$1(a){var s=a.e
s.toString
return!t.D.a(s).o7$},
$S:246}
A.xB.prototype={
af(a){var s,r,q
this.ek(a)
s=this.am$
for(r=t.D;s!=null;){s.af(a)
q=s.e
q.toString
s=r.a(q).ai$}},
ac(a){var s,r,q
this.ej(0)
s=this.am$
for(r=t.D;s!=null;){s.ac(0)
q=s.e
q.toString
s=r.a(q).ai$}}}
A.Q1.prototype={}
A.Q2.prototype={}
A.QP.prototype={
ac(a){this.pB(0)}}
A.QQ.prototype={}
A.uy.prototype={
gxj(){var s=this,r=t.p
switch(A.jn(r.a(A.w.prototype.gW.call(s)).a,r.a(A.w.prototype.gW.call(s)).b).a){case 0:return s.by.d
case 1:return s.by.a
case 2:return s.by.b
case 3:return s.by.c}},
gZL(){var s=this,r=t.p
switch(A.jn(r.a(A.w.prototype.gW.call(s)).a,r.a(A.w.prototype.gW.call(s)).b).a){case 0:return s.by.b
case 1:return s.by.c
case 2:return s.by.d
case 3:return s.by.a}},
ga0u(){switch(A.b0(t.p.a(A.w.prototype.gW.call(this)).a).a){case 0:var s=this.by
return s.gb3(s)+s.gb6(s)
case 1:return this.by.gc7()}},
e0(a){if(!(a.e instanceof A.kj))a.e=new A.kj(B.k)},
bi(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=null,a2=t.p,a3=a2.a(A.w.prototype.gW.call(a0)),a4=a0.gxj()
a0.gZL()
s=a0.by
s.toString
r=s.ZO(A.b0(a2.a(A.w.prototype.gW.call(a0)).a))
q=a0.ga0u()
if(a0.B$==null){p=a0.hh(a3,0,r)
a0.id=A.vi(a0.nq(a3,0,r),!1,a1,a1,r,Math.min(p,a3.r),0,r,a1)
return}o=a0.hh(a3,0,a4)
n=a3.f
if(n>0)n=Math.max(0,n-o)
a2=a0.B$
a2.toString
s=Math.max(0,a3.d-a4)
m=Math.min(0,a3.z+a4)
l=a3.r
k=a0.hh(a3,0,a4)
j=a3.Q
i=a0.nq(a3,0,a4)
h=Math.max(0,a3.w-q)
g=a3.a
f=a3.b
a2.ce(new A.ki(g,f,a3.c,s,a4+a3.e,n,l-k,h,a3.x,a3.y,m,j-i),!0)
e=a0.B$.id
a2=e.y
if(a2!=null){a0.id=A.vi(a1,!1,a1,a1,0,0,0,0,a2)
return}a2=e.a
s=a4+a2
m=r+a2
d=a0.hh(a3,s,m)
c=o+d
b=a0.nq(a3,0,a4)
a=a0.nq(a3,s,m)
s=e.c
k=e.d
p=Math.min(o+Math.max(s,k+d),l)
l=e.b
k=Math.min(c+k,p)
j=Math.min(a+b+e.z,j)
i=e.e
s=Math.max(c+s,o+e.r)
a0.id=A.vi(j,e.x,s,k,r+i,p,l,m,a1)
m=a0.B$.e
m.toString
t.qg.a(m)
switch(A.jn(g,f).a){case 0:s=a0.by
l=s.a
a2=s.d+a2
m.a=new A.p(l,a0.hh(a3,a2,a2+s.b))
break
case 1:m.a=new A.p(a0.hh(a3,0,a0.by.a),a0.by.b)
break
case 2:a2=a0.by
m.a=new A.p(a2.a,a0.hh(a3,0,a2.b))
break
case 3:s=a0.by
a2=s.c+a2
m.a=new A.p(a0.hh(a3,a2,a2+s.a),a0.by.b)
break}},
yI(a,b,c){var s,r,q,p=this,o=p.B$
if(o!=null&&o.id.r>0){o=o.e
o.toString
t.qg.a(o)
s=p.hh(t.p.a(A.w.prototype.gW.call(p)),0,p.gxj())
r=p.B$
r.toString
r=p.a_u(r)
o=o.a
q=p.B$.ga2x()
a.c.push(new A.pE(new A.p(-o.a,-o.b)))
q.$3$crossAxisPosition$mainAxisPosition(a,b-r,c-s)
a.tw()}return!1},
a_u(a){var s=this,r=t.p
switch(A.jn(r.a(A.w.prototype.gW.call(s)).a,r.a(A.w.prototype.gW.call(s)).b).a){case 0:case 2:return s.by.a
case 3:case 1:return s.by.b}},
xp(a){return this.gxj()},
cv(a,b){var s=a.e
s.toString
s=t.qg.a(s).a
b.aq(0,s.a,s.b)},
aE(a,b){var s,r=this.B$
if(r!=null&&r.id.w){s=r.e
s.toString
a.eD(r,b.a_(0,t.qg.a(s).a))}}}
A.Q_.prototype={
af(a){var s
this.ek(a)
s=this.B$
if(s!=null)s.af(a)},
ac(a){var s
this.ej(0)
s=this.B$
if(s!=null)s.ac(0)}}
A.a1J.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return b instanceof A.a1J&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gt(a){var s=this
return A.N(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a){var s=this
return"RelativeRect.fromLTRB("+B.c.O(s.a,1)+", "+B.c.O(s.b,1)+", "+B.c.O(s.c,1)+", "+B.c.O(s.d,1)+")"}}
A.dh.prototype={
gyU(){var s=this
return s.e!=null||s.f!=null||s.r!=null||s.w!=null||s.x!=null||s.y!=null},
h(a){var s=this,r=A.a([],t.s),q=s.e
if(q!=null)r.push("top="+A.fn(q))
q=s.f
if(q!=null)r.push("right="+A.fn(q))
q=s.r
if(q!=null)r.push("bottom="+A.fn(q))
q=s.w
if(q!=null)r.push("left="+A.fn(q))
q=s.x
if(q!=null)r.push("width="+A.fn(q))
q=s.y
if(q!=null)r.push("height="+A.fn(q))
if(r.length===0)r.push("not positioned")
r.push(s.ur(0))
return B.b.bm(r,"; ")}}
A.J_.prototype={
F(){return"StackFit."+this.b}}
A.uz.prototype={
e0(a){if(!(a.e instanceof A.dh))a.e=new A.dh(null,null,B.k)},
Ys(){var s=this
if(s.K!=null)return
s.K=s.M.V(s.a1)},
sfz(a){var s=this
if(s.M.k(0,a))return
s.M=a
s.K=null
s.a4()},
sbF(a){var s=this
if(s.a1==a)return
s.a1=a
s.K=null
s.a4()},
hk(a){return this.HP(a)},
c3(a){return this.CQ(a,A.Tn())},
CQ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.Ys()
if(e.dP$===0){s=a.a
r=a.b
q=A.E(1/0,s,r)
p=a.c
o=a.d
n=A.E(1/0,p,o)
return isFinite(q)&&isFinite(n)?new A.S(A.E(1/0,s,r),A.E(1/0,p,o)):new A.S(A.E(0,s,r),A.E(0,p,o))}m=a.a
l=a.c
switch(e.a8.a){case 0:k=new A.aN(0,a.b,0,a.d)
break
case 1:k=A.n3(new A.S(A.E(1/0,m,a.b),A.E(1/0,l,a.d)))
break
case 2:k=a
break
default:k=null}j=e.am$
for(s=t.B,i=l,h=m,g=!1;j!=null;){r=j.e
r.toString
s.a(r)
if(!r.gyU()){f=b.$2(j,k)
h=Math.max(h,f.a)
i=Math.max(i,f.b)
g=!0}j=r.ai$}return g?new A.S(h,i):new A.S(A.E(1/0,m,a.b),A.E(1/0,l,a.d))},
bi(){var s,r,q,p,o,n,m,l=this,k="RenderBox was not laid out: ",j=t.k.a(A.w.prototype.gW.call(l))
l.D=!1
l.k3=l.CQ(j,A.To())
s=l.am$
for(r=t.B,q=t.uu;s!=null;){p=s.e
p.toString
r.a(p)
if(!p.gyU()){o=l.K
o.toString
n=l.k3
if(n==null)n=A.a6(A.Z(k+A.v(l).h(0)+"#"+A.b4(l)))
m=s.k3
p.a=o.la(q.a(n.ab(0,m==null?A.a6(A.Z(k+A.v(s).h(0)+"#"+A.b4(s))):m)))}else{o=l.k3
if(o==null)o=A.a6(A.Z(k+A.v(l).h(0)+"#"+A.b4(l)))
n=l.K
n.toString
l.D=A.aix(s,p,o,n)||l.D}s=p.ai$}},
cB(a,b){return this.xG(a,b)},
a43(a,b){this.nG(a,b)},
aE(a,b){var s,r=this,q=r.b5!==B.I&&r.D,p=r.bg
if(q){q=r.cx
q===$&&A.b()
s=r.gq(r)
p.saG(0,a.kj(q,b,new A.A(0,0,0+s.a,0+s.b),r.ga42(),r.b5,p.a))}else{p.saG(0,null)
r.nG(a,b)}},
n(){this.bg.saG(0,null)
this.hS()},
iQ(a){var s,r=this
switch(r.b5.a){case 0:return null
case 1:case 2:case 3:if(r.D){s=r.gq(r)
s=new A.A(0,0,0+s.a,0+s.b)}else s=null
return s}}}
A.Q3.prototype={
af(a){var s,r,q
this.ek(a)
s=this.am$
for(r=t.B;s!=null;){s.af(a)
q=s.e
q.toString
s=r.a(q).ai$}},
ac(a){var s,r,q
this.ej(0)
s=this.am$
for(r=t.B;s!=null;){s.ac(0)
q=s.e
q.toString
s=r.a(q).ai$}}}
A.Q4.prototype={}
A.JO.prototype={
k(a,b){if(b==null)return!1
if(J.L(b)!==A.v(this))return!1
return b instanceof A.JO&&b.a.k(0,this.a)&&b.b===this.b},
gt(a){return A.N(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a){return this.a.h(0)+" at "+A.fn(this.b)+"x"}}
A.I1.prototype={
sxt(a){var s,r,q,p=this
if(p.k1.k(0,a))return
s=p.k1
p.k1=a
r=s.b
r=A.Gb(r,r,1)
q=p.k1.b
if(!r.k(0,A.Gb(q,q,1))){r=p.Gt()
q=p.ch
q.a.ac(0)
q.saG(0,r)
p.aj()}p.a4()},
Gt(){var s,r=this.k1.b
r=A.Gb(r,r,1)
this.k4=r
s=A.ajb(r)
s.af(this)
return s},
lZ(){},
bi(){var s,r=this.k1.a
this.id=r
s=this.B$
if(s!=null)s.f9(A.n3(r))},
bM(a,b){var s=this.B$
if(s!=null)s.bM(A.agt(a),b)
a.H(0,new A.hB(this,t.Cq))
return!0},
gd8(){return!0},
aE(a,b){var s=this.B$
if(s!=null)a.eD(s,b)},
cv(a,b){var s=this.k4
s.toString
b.cs(0,s)
this.Oi(a,b)},
a_N(){var s,r,q
try{q=$.at()
s=q.a0q()
r=this.ch.a.a_f(s)
this.Zf()
q.a4H(r)
r.n()}finally{}},
Zf(){var s,r,q,p,o,n,m,l,k,j=null,i=this.ghA(),h=i.gaK(),g=this.k2
g.gjP()
s=i.gaK()
g.gjP()
g=this.ch
r=t.g9
q=g.a.Iz(0,new A.p(h.a,0),r)
switch(A.kK().a){case 0:p=g.a.Iz(0,new A.p(s.a,i.d-1-0),r)
break
case 1:case 2:case 3:case 4:case 5:p=j
break
default:p=j}h=q==null
if(h&&p==null)return
if(!h&&p!=null){h=q.f
g=q.r
s=q.e
r=q.w
A.aiY(new A.hV(p.a,p.b,p.c,p.d,s,h,g,r))
return}o=A.kK()===B.b5
n=h?p:q
h=n.f
g=n.r
s=n.e
r=n.w
m=o?n.a:j
l=o?n.b:j
k=o?n.c:j
A.aiY(new A.hV(m,l,k,o?n.d:j,s,h,g,r))},
ghA(){var s=this.id.a9(0,this.k1.b)
return new A.A(0,0,0+s.a,0+s.b)},
gju(){var s,r=this.k4
r.toString
s=this.id
return A.eb(r,new A.A(0,0,0+s.a,0+s.b))}}
A.Q5.prototype={
af(a){var s
this.ek(a)
s=this.B$
if(s!=null)s.af(a)},
ac(a){var s
this.ej(0)
s=this.B$
if(s!=null)s.ac(0)}}
A.UD.prototype={
F(){return"CacheExtentStyle."+this.b}}
A.oj.prototype={
h(a){return"RevealedOffset(offset: "+A.h(this.a)+", rect: "+this.b.h(0)+")"}}
A.og.prototype={
dr(a){this.eJ(a)
a.x8(B.B8)},
fe(a){var s=this.gHl()
new A.be(s,new A.a2h(),A.am(s).i("be<1>")).Y(0,a)},
sfB(a){if(a===this.D)return
this.D=a
this.a4()},
sa0t(a){if(a===this.K)return
this.K=a
this.a4()},
sjg(a,b){var s=this,r=s.M
if(b===r)return
if(s.b!=null)r.I(0,s.gt7())
s.M=b
if(s.b!=null)b.Z(0,s.gt7())
s.a4()},
sa_j(a){if(a===this.a1)return
this.a1=a
this.a4()},
sa_k(a){if(a===this.b5)return
this.b5=a
this.a4()},
af(a){this.Pw(a)
this.M.Z(0,this.gt7())},
ac(a){this.M.I(0,this.gt7())
this.Px(0)},
gd8(){return!0},
JJ(a,b,c,d,e,f,a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i=this,h=A.aw3(i.M.k4,e),g=f+a1
for(s=t.qg,r=f,q=0;c!=null;){p=a4<=0?0:a4
o=Math.max(b,-p)
n=b-o
c.ce(new A.ki(i.D,e,h,p,q,g-r,Math.max(0,a3-r+f),d,i.K,a0,o,Math.max(0,a2+n)),!0)
m=c.id
l=m.y
if(l!=null)return l
k=r+m.b
l=m.w||a4>0
j=c.e
if(l){j.toString
s.a(j).a=i.Hr(c,k,e)}else{j.toString
s.a(j).a=i.Hr(c,-a4+f,e)}g=Math.max(k+m.c,g)
l=m.a
a4-=l
q+=l
r+=m.d
l=m.z
if(l!==0){a2-=l-n
b=Math.min(o+l,0)}i.a5i(e,m)
c=a.$1(c)}return 0},
iQ(a){var s,r,q,p,o,n,m=this
switch(m.bg.a){case 0:return null
case 1:case 2:case 3:break}s=m.gq(m)
r=0+s.a
q=0+s.b
s=t.p
if(s.a(A.w.prototype.gW.call(a)).f===0||!isFinite(s.a(A.w.prototype.gW.call(a)).y))return new A.A(0,0,r,q)
p=s.a(A.w.prototype.gW.call(a)).y-s.a(A.w.prototype.gW.call(a)).r+s.a(A.w.prototype.gW.call(a)).f
switch(A.jn(m.D,s.a(A.w.prototype.gW.call(a)).b).a){case 2:o=0+p
n=0
break
case 0:q-=p
n=0
o=0
break
case 1:n=0+p
o=0
break
case 3:r-=p
n=0
o=0
break
default:n=0
o=0}return new A.A(n,o,r,q)},
xK(a){var s,r,q,p,o=this
if(o.a8==null){s=o.gq(o)
return new A.A(0,0,0+s.a,0+s.b)}switch(A.b0(o.D).a){case 1:o.gq(o)
o.gq(o)
s=o.a8
s.toString
r=o.gq(o)
q=o.gq(o)
p=o.a8
p.toString
return new A.A(0,0-s,0+r.a,0+q.b+p)
case 0:o.gq(o)
s=o.a8
s.toString
o.gq(o)
r=o.gq(o)
q=o.a8
q.toString
return new A.A(0-s,0,0+r.a+q,0+o.gq(o).b)}},
aE(a,b){var s,r,q,p=this
if(p.am$==null)return
s=p.k7&&p.bg!==B.I
r=p.bQ
if(s){s=p.cx
s===$&&A.b()
q=p.gq(p)
r.saG(0,a.kj(s,b,new A.A(0,0,0+q.a,0+q.b),p.gWG(),p.bg,r.a))}else{r.saG(0,null)
p.EH(a,b)}},
n(){this.bQ.saG(0,null)
this.hS()},
EH(a,b){var s,r,q,p,o,n,m,l
for(s=this.gHl(),r=s.length,q=t.qg,p=b.a,o=b.b,n=0;n<s.length;s.length===r||(0,A.J)(s),++n){m=s[n]
if(m.id.w){l=m.e
l.toString
l=q.a(l).a
a.eD(m,new A.p(p+l.a,o+l.b))}}},
cB(a,b){var s,r,q,p,o,n,m,l,k={}
k.a=k.b=null
switch(A.b0(this.D).a){case 1:k.b=b.b
k.a=b.a
break
case 0:k.b=b.a
k.a=b.b
break}s=new A.ow(a.a,a.b,a.c)
for(r=this.ga_v(),q=r.length,p=t.qg,o=0;o<r.length;r.length===q||(0,A.J)(r),++o){n=r[o]
if(!n.id.w)continue
m=new A.bh(new Float64Array(16))
m.dE()
l=n.e
l.toString
l=p.a(l).a
m.aq(0,l.a,l.b)
if(a.ZK(new A.a2g(k,this,n,s),m))return!0}return!1},
kp(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=a instanceof A.cf
for(s=d,r=a,q=0;p=r.c,p!==e;r=p){p.toString
if(r instanceof A.B)s=r
if(p instanceof A.cf){o=p.xp(r)
o.toString
q+=o}else{q=0
c=!1}}if(s!=null){p=s.c
p.toString
t.q0.a(p)
n=t.p.a(A.w.prototype.gW.call(p)).b
switch(A.b0(e.D).a){case 0:m=s.gq(s).a
break
case 1:m=s.gq(s).b
break
default:m=d}if(a0==null)a0=a.ghA()
l=A.eb(a.bt(0,s),a0)}else{if(c){t.q0.a(a)
p=t.p
n=p.a(A.w.prototype.gW.call(a)).b
m=a.id.a
if(a0==null)switch(A.b0(e.D).a){case 0:a0=new A.A(0,0,0+m,0+p.a(A.w.prototype.gW.call(a)).w)
break
case 1:a0=new A.A(0,0,0+p.a(A.w.prototype.gW.call(a)).w,0+a.id.a)
break}}else{p=e.M.at
p.toString
a0.toString
return new A.oj(p,a0)}l=a0}t.q0.a(r)
switch(A.jn(e.D,n).a){case 0:p=l.d
q+=m-p
k=p-l.b
break
case 1:p=l.a
q+=p
k=l.c-p
break
case 2:p=l.b
q+=p
k=l.d-p
break
case 3:p=l.c
q+=m-p
k=p-l.a
break
default:k=d}r.id.toString
q=e.M8(r,q)
j=A.eb(a.bt(0,e),a0)
i=e.a3B(r)
switch(t.p.a(A.w.prototype.gW.call(r)).b.a){case 0:q-=i
break
case 1:switch(A.b0(e.D).a){case 1:q-=j.d-j.b
break
case 0:q-=j.c-j.a
break}break}switch(A.b0(e.D).a){case 0:h=e.gq(e).a-i
break
case 1:h=e.gq(e).b-i
break
default:h=d}g=q-(h-k)*b
p=e.M.at
p.toString
f=p-g
switch(e.D.a){case 2:j=j.aq(0,0,f)
break
case 1:j=j.aq(0,f,0)
break
case 0:j=j.aq(0,0,-f)
break
case 3:j=j.aq(0,-f,0)
break}return new A.oj(g,j)},
Hr(a,b,c){var s=this
switch(A.jn(s.D,c).a){case 0:return new A.p(0,s.gq(s).b-(b+a.id.c))
case 1:return new A.p(b,0)
case 2:return new A.p(0,b)
case 3:return new A.p(s.gq(s).a-(b+a.id.c),0)}},
eh(a,b,c,d){var s=this
if(!s.M.r.gl9())return s.pD(a,b,c,d)
s.pD(a,null,c,A.aiz(a,b,c,s.M,d,s))},
mk(){return this.eh(B.aJ,null,B.t,null)},
kA(a,b){return this.eh(B.aJ,a,B.t,b)},
$iHv:1}
A.a2h.prototype={
$1(a){var s=a.id
return s.w||s.z>0},
$S:247}
A.a2g.prototype={
$1(a){var s=this,r=s.c,q=s.a,p=s.b.a_P(r,q.b)
return r.Ja(s.d,q.a,p)},
$S:90}
A.uA.prototype={
e0(a){if(!(a.e instanceof A.iV))a.e=new A.iV(null,null,B.k)},
sZQ(a){if(a===this.j4)return
this.j4=a
this.a4()},
saK(a){if(a==this.du)return
this.du=a
this.a4()},
gkC(){return!0},
c3(a){return new A.S(A.E(1/0,a.a,a.b),A.E(1/0,a.c,a.d))},
bi(){var s,r,q,p,o,n,m,l,k,j=this
switch(A.b0(j.D).a){case 1:j.M.nl(j.gq(j).b)
break
case 0:j.M.nl(j.gq(j).a)
break}if(j.du==null){j.o5=j.o4=0
j.k7=!1
j.M.ni(0,0)
return}switch(A.b0(j.D).a){case 1:s=j.gq(j).b
r=j.gq(j).a
break
case 0:s=j.gq(j).a
r=j.gq(j).b
break
default:s=null
r=null}j.du.toString
q=0
do{p=j.M.at
p.toString
o=j.R9(s,r,p+0)
if(o!==0){p=j.M
n=p.at
n.toString
p.at=n+o
p.ch=!0}else{p=j.M
n=j.o4
n===$&&A.b()
m=j.j4
n=Math.min(0,n+s*m)
l=j.o5
l===$&&A.b()
if(p.ni(n,Math.max(0,l-s*(1-m))))break}k=q+1
if(k<10){q=k
continue}else break}while(!0)},
R9(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.o5=e.o4=0
e.k7=!1
s=a*e.j4-c
r=A.E(s,0,a)
q=a-s
p=A.E(q,0,a)
switch(e.b5.a){case 0:e.a8=e.a1
break
case 1:e.a8=a*e.a1
break}o=e.a8
o.toString
n=a+2*o
m=s+o
l=A.E(m,0,n)
k=A.E(n-m,0,n)
j=e.du.e
j.toString
i=A.n(e).i("as.1").a(j).bO$
j=i==null
if(!j){h=Math.max(a,s)
g=e.JJ(e.ga_s(),A.E(q,-o,0),i,b,B.l0,p,a,0,l,r,h-a)
if(g!==0)return-g}q=e.du
o=-s
h=Math.max(0,o)
o=j?Math.min(0,o):0
j=s>=a?s:r
f=e.a8
f.toString
return e.JJ(e.ga_q(),A.E(s,-f,0),q,b,B.l_,j,a,o,k,p,h)},
a5i(a,b){var s,r=this
switch(a.a){case 0:s=r.o5
s===$&&A.b()
r.o5=s+b.a
break
case 1:s=r.o4
s===$&&A.b()
r.o4=s-b.a
break}if(b.x)r.k7=!0},
M8(a,b){var s,r,q,p,o=this
switch(t.p.a(A.w.prototype.gW.call(a)).b.a){case 0:s=o.du
for(r=A.n(o).i("as.1"),q=0;s!==a;){q+=s.id.a
p=s.e
p.toString
s=r.a(p).ai$}return q+b
case 1:r=o.du.e
r.toString
p=A.n(o).i("as.1")
s=p.a(r).bO$
for(q=0;s!==a;){q-=s.id.a
r=s.e
r.toString
s=p.a(r).bO$}return q-b}},
a3B(a){var s,r,q,p=this
switch(t.p.a(A.w.prototype.gW.call(a)).b.a){case 0:s=p.du
for(r=A.n(p).i("as.1");s!==a;){s.id.toString
q=s.e
q.toString
s=r.a(q).ai$}return 0
case 1:r=p.du.e
r.toString
q=A.n(p).i("as.1")
s=q.a(r).bO$
for(;s!==a;){s.id.toString
r=s.e
r.toString
s=q.a(r).bO$}return 0}},
cv(a,b){var s=a.e
s.toString
s=t.qg.a(s).a
b.aq(0,s.a,s.b)},
a_P(a,b){var s,r=a.e
r.toString
t.qg.a(r)
s=t.p
switch(A.jn(s.a(A.w.prototype.gW.call(a)).a,s.a(A.w.prototype.gW.call(a)).b).a){case 2:return b-r.a.b
case 1:return b-r.a.a
case 0:return a.id.c-(b-r.a.b)
case 3:return a.id.c-(b-r.a.a)}},
gHl(){var s,r,q=this,p=A.a([],t.jT),o=q.am$
if(o==null)return p
for(s=A.n(q).i("as.1");o!=q.du;){o.toString
p.push(o)
r=o.e
r.toString
o=s.a(r).ai$}o=q.cV$
for(;!0;){o.toString
p.push(o)
if(o===q.du)return p
r=o.e
r.toString
o=s.a(r).bO$}},
ga_v(){var s,r,q,p=this,o=A.a([],t.jT)
if(p.am$==null)return o
s=p.du
for(r=A.n(p).i("as.1");s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).ai$}q=p.du.e
q.toString
s=r.a(q).bO$
for(;s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).bO$}return o}}
A.i2.prototype={
af(a){var s,r,q
this.ek(a)
s=this.am$
for(r=A.n(this).i("i2.0");s!=null;){s.af(a)
q=s.e
q.toString
s=r.a(q).ai$}},
ac(a){var s,r,q
this.ej(0)
s=this.am$
for(r=A.n(this).i("i2.0");s!=null;){s.ac(0)
q=s.e
q.toString
s=r.a(q).ai$}}}
A.uP.prototype={
F(){return"ScrollDirection."+this.b}}
A.fh.prototype={
oC(a,b,c,d){var s=d.a===B.t.a
if(s){this.dw(b)
return A.ct(null,t.H)}else return this.hf(b,c,d)},
h(a){var s=this,r=A.a([],t.s)
s.OT(r)
r.push(A.v(s.w).h(0))
r.push(s.r.h(0))
r.push(A.h(s.fr))
r.push(s.k4.h(0))
return"<optimized out>#"+A.b4(s)+"("+B.b.bm(r,", ")+")"},
cc(a){var s=this.at
if(s!=null)a.push("offset: "+B.c.O(s,1))}}
A.po.prototype={}
A.m2.prototype={
F(){return"SchedulerPhase."+this.b}}
A.a0H.prototype={}
A.dg.prototype={
KA(a){var s=this.ch$
B.b.A(s,a)
if(s.length===0){s=$.aB()
s.ay=null
s.ch=$.ag}},
SR(a){var s,r,q,p,o,n,m,l,k=this.ch$,j=A.aq(k,!0,t.wX)
for(p=j.length,o=0;o<p;++o){s=j[o]
try{if(B.b.C(k,s))s.$1(a)}catch(n){r=A.an(n)
q=A.aH(n)
m=A.bg("while executing callbacks for FrameTiming")
l=$.fq()
if(l!=null)l.$1(new A.bs(r,q,"Flutter framework",m,null,!1))}}},
yu(a){var s=this
if(s.CW$===a)return
s.CW$=a
switch(a.a){case 1:case 2:s.Fz(!0)
break
case 3:case 4:case 0:s.Fz(!1)
break}},
Dh(){if(this.db$)return
this.db$=!0
A.cl(B.t,this.gXG())},
XH(){this.db$=!1
if(this.a1x())this.Dh()},
a1x(){var s,r,q,p,o,n,m=this,l="No element",k=m.cy$,j=k.c===0
if(j||m.c>0)return!1
if(j)A.a6(A.Z(l))
s=k.pT(0)
j=s.b
if(m.cx$.$2$priority$scheduler(j,m)){try{if(k.c===0)A.a6(A.Z(l));++k.d
k.pT(0)
p=k.c-1
o=k.pT(p)
k.b[p]=null
k.c=p
if(p>0)k.Re(o,0)
j=s
j.f.d5(0,j.a6a())}catch(n){r=A.an(n)
q=A.aH(n)
j=A.bg("during a task callback")
A.d9(new A.bs(r,q,"scheduler library",j,null,!1))}return k.c!==0}return!1},
pn(a,b){var s,r=this
r.hO()
s=++r.dx$
r.dy$.l(0,s,new A.po(a))
return r.dx$},
u7(a){return this.pn(a,!1)},
gIk(){var s=this
if(s.go$==null){if(s.k1$===B.cI)s.hO()
s.go$=new A.bo(new A.ap($.ag,t.U),t.T)
s.fy$.push(new A.a2N(s))}return s.go$.a},
gIP(){return this.k2$},
Fz(a){if(this.k2$===a)return
this.k2$=a
if(a)this.hO()},
Il(){var s=$.aB()
if(s.w==null){s.w=this.gTR()
s.x=$.ag}if(s.y==null){s.y=this.gUd()
s.z=$.ag}},
y7(){switch(this.k1$.a){case 0:case 4:this.hO()
return
case 1:case 2:case 3:return}},
hO(){var s,r=this
if(!r.id$)s=!(A.dg.prototype.gIP.call(r)&&r.ex$)
else s=!0
if(s)return
r.Il()
$.aB().hO()
r.id$=!0},
M3(){if(this.id$)return
this.Il()
$.aB().hO()
this.id$=!0},
u8(){var s,r,q=this
if(q.k3$||q.k1$!==B.cI)return
q.k3$=!0
s=A.aj6()
s.px(0,"Warm-up frame")
r=q.id$
A.cl(B.t,new A.a2P(q))
A.cl(B.t,new A.a2Q(q,r))
q.a3v(new A.a2R(q,s))},
C7(a){var s=this.k4$
return A.c1(B.c.b_((s==null?B.t:new A.aS(a.a-s.a)).a/1)+this.ok$.a,0)},
TS(a){if(this.k3$){this.R8$=!0
return}this.IU(a)},
Ue(){var s=this
if(s.R8$){s.R8$=!1
s.fy$.push(new A.a2M(s))
return}s.IW()},
IU(a){var s,r,q=this
if(q.k4$==null)q.k4$=a
r=a==null
q.p2$=q.C7(r?q.p1$:a)
if(!r)q.p1$=a
q.id$=!1
try{q.k1$=B.U5
s=q.dy$
q.dy$=A.y(t.S,t.b1)
J.mN(s,new A.a2O(q))
q.fr$.T(0)}finally{q.k1$=B.U6}},
a4M(a){var s=this,r=s.rx$,q=r==null
if(!q&&r!==a)return null
if(r===a)++s.ry$
else if(q){s.rx$=a
s.ry$=1}return new A.a0H(s.gSB())},
SC(){if(--this.ry$===0){this.rx$=null
$.aB()}},
IW(){var s,r,q,p,o,n,m,l=this
try{l.k1$=B.AO
for(p=l.fx$,o=p.length,n=0;n<p.length;p.length===o||(0,A.J)(p),++n){s=p[n]
m=l.p2$
m.toString
l.Ed(s,m)}l.k1$=B.AP
p=l.fy$
r=A.aq(p,!0,t.qP)
B.b.T(p)
for(p=r,o=p.length,n=0;n<p.length;p.length===o||(0,A.J)(p),++n){q=p[n]
m=l.p2$
m.toString
l.Ed(q,m)}}finally{l.k1$=B.cI
l.p2$=null}},
Ee(a,b,c){var s,r,q,p
try{a.$1(b)}catch(q){s=A.an(q)
r=A.aH(q)
p=A.bg("during a scheduler callback")
A.d9(new A.bs(s,r,"scheduler library",p,null,!1))}},
Ed(a,b){return this.Ee(a,b,null)}}
A.a2N.prototype={
$1(a){var s=this.a
s.go$.fE(0)
s.go$=null},
$S:2}
A.a2P.prototype={
$0(){this.a.IU(null)},
$S:0}
A.a2Q.prototype={
$0(){var s=this.a
s.IW()
s.ok$=s.C7(s.p1$)
s.k4$=null
s.k3$=!1
if(this.b)s.hO()},
$S:0}
A.a2R.prototype={
$0(){var s=0,r=A.a2(t.H),q=this
var $async$$0=A.a3(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:s=2
return A.a9(q.a.gIk(),$async$$0)
case 2:q.b.IC(0)
return A.a0(null,r)}})
return A.a1($async$$0,r)},
$S:60}
A.a2M.prototype={
$1(a){var s=this.a
s.id$=!1
s.hO()},
$S:2}
A.a2O.prototype={
$2(a,b){var s,r=this.a
if(!r.fr$.C(0,a)){s=r.p2$
s.toString
r.Ee(b.a,s,b.b)}},
$S:249}
A.oR.prototype={
sza(a,b){var s=this
if(b===s.b)return
s.b=b
if(b)s.A8()
else if(s.a!=null&&s.e==null)s.e=$.bL.pn(s.gwH(),!1)},
ga3a(){if(this.a==null)return!1
if(this.b)return!1
var s=$.bL
s.toString
if(A.dg.prototype.gIP.call(s)&&s.ex$)return!0
if($.bL.k1$!==B.cI)return!0
return!1},
mm(a){var s,r,q=this
q.a=new A.mk(new A.bo(new A.ap($.ag,t.U),t.T))
if(!q.b)s=q.e==null
else s=!1
if(s)q.e=$.bL.pn(q.gwH(),!1)
s=$.bL
r=s.k1$.a
if(r>0&&r<4){s=s.p2$
s.toString
q.c=s}s=q.a
s.toString
return s},
mn(a,b){var s=this,r=s.a
if(r==null)return
s.c=s.a=null
s.A8()
if(b)r.G4(s)
else r.G5()},
h5(a){return this.mn(a,!1)},
YG(a){var s,r=this
r.e=null
s=r.c
if(s==null)s=r.c=a
r.d.$1(new A.aS(a.a-s.a))
if(!r.b&&r.a!=null&&r.e==null)r.e=$.bL.pn(r.gwH(),!0)},
A8(){var s,r=this.e
if(r!=null){s=$.bL
s.dy$.A(0,r)
s.fr$.H(0,r)
this.e=null}},
n(){var s=this,r=s.a
if(r!=null){s.a=null
s.A8()
r.G4(s)}},
a54(a,b){var s=""+"Ticker()"
return s.charCodeAt(0)==0?s:s},
h(a){return this.a54(a,!1)}}
A.mk.prototype={
G5(){this.c=!0
this.a.fE(0)
var s=this.b
if(s!=null)s.fE(0)},
G4(a){var s
this.c=!1
s=this.b
if(s!=null)s.nv(new A.vJ(a))},
Lj(a){var s,r,q=this,p=new A.a5E(a)
if(q.b==null){s=q.b=new A.bo(new A.ap($.ag,t.U),t.T)
r=q.c
if(r!=null)if(r)s.fE(0)
else s.nv(B.ZN)}q.b.a.ed(p,p,t.H)},
ld(a,b){return this.a.a.ld(a,b)},
jS(a){return this.ld(a,null)},
ed(a,b,c){return this.a.a.ed(a,b,c)},
bz(a,b){return this.ed(a,null,b)},
ip(a){return this.a.a.ip(a)},
h(a){var s=A.b4(this),r=this.c
if(r==null)r="active"
else r=r?"complete":"canceled"
return"<optimized out>#"+s+"("+r+")"},
$iah:1}
A.a5E.prototype={
$1(a){this.a.$0()},
$S:19}
A.vJ.prototype={
h(a){var s=this.a
if(s!=null)return"This ticker was canceled: "+s.h(0)
return'The ticker was canceled before the "orCancel" property was first used.'},
$icV:1}
A.Iw.prototype={
gqD(){var s,r=this.yc$
if(r===$){s=A.j1($.aB().a.c)
this.yc$!==$&&A.b1()
this.yc$=s
r=s}return r},
Ss(){--this.yd$
this.gqD().sm(0,this.yd$>0)},
DZ(){var s,r=this
if($.aB().a.c){if(r.rD$==null){++r.yd$
r.gqD().sm(0,!0)
r.rD$=new A.a3v(r.gSr())}}else{s=r.rD$
if(s!=null)s.a.$0()
r.rD$=null}},
V3(a){var s,r,q=a.d
if(t.yp.b(q)){s=B.a7.dL(q)
if(J.e(s,B.hp))s=q
r=new A.or(a.a,a.b,a.c,s)}else r=a
s=this.av$
s===$&&A.b()
s=s.at
if(s!=null)s.a47(r.c,r.a,r.d)}}
A.a3v.prototype={}
A.m9.prototype={
h(a){return"SemanticsTag("+this.a+")"}}
A.qv.prototype={}
A.V5.prototype={}
A.c9.prototype={
a_(a,b){var s,r,q,p,o,n,m,l=this.a,k=l.length
if(k===0)return b
s=b.a
if(s.length===0)return this
r=A.aq(this.b,!0,t.lS)
q=b.b
p=q.length
if(p!==0)for(o=0;o<q.length;q.length===p||(0,A.J)(q),++o){n=q[o]
m=n.a
r.push(n.Hz(new A.di(m.a+k,m.b+k)))}return new A.c9(l+s,r)},
k(a,b){if(b==null)return!1
return J.L(b)===A.v(this)&&b instanceof A.c9&&b.a===this.a&&A.cA(b.b,this.b)},
gt(a){return A.N(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a){return"AttributedString('"+this.a+"', attributes: "+A.h(this.b)+")"}}
A.Ix.prototype={
bS(){return"SemanticsData"},
k(a,b){var s=this
if(b==null)return!1
return b instanceof A.Ix&&b.a===s.a&&b.b===s.b&&b.c.k(0,s.c)&&b.d.k(0,s.d)&&b.e.k(0,s.e)&&b.f.k(0,s.f)&&b.r.k(0,s.r)&&b.w===s.w&&b.x==s.x&&b.cx.k(0,s.cx)&&A.Tq(b.cy,s.cy)&&b.Q==s.Q&&b.as==s.as&&b.at==s.at&&b.ax==s.ax&&J.e(b.db,s.db)&&b.dx===s.dx&&b.dy===s.dy&&A.asC(b.fr,s.fr)},
gt(a){var s=this,r=A.ce(s.fr)
return A.N(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.cx,s.cy,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,A.N(s.CW,s.db,s.dx,s.dy,r,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a))}}
A.Qt.prototype={}
A.IB.prototype={
bS(){return"SemanticsProperties"}}
A.bH.prototype={
sbj(a,b){if(!A.adZ(this.d,b)){this.d=b==null||A.Gd(b)?null:b
this.eQ()}},
saw(a,b){if(!this.e.k(0,b)){this.e=b
this.eQ()}},
syT(a){if(this.y===a)return
this.y=a
this.eQ()},
Xl(a){var s,r,q,p,o,n,m=this,l=m.as
if(l!=null)for(s=l.length,r=0;r<s;++r)l[r].ax=!0
for(l=a.length,r=0;r<l;++r)a[r].ax=!1
l=m.as
if(l!=null)for(s=l.length,q=!1,r=0;r<l.length;l.length===s||(0,A.J)(l),++r){p=l[r]
if(p.ax){if(p.ch===m){p.ch=null
if(m.ay!=null)p.ac(0)}q=!0}}else q=!1
for(l=a.length,r=0;r<a.length;a.length===l||(0,A.J)(a),++r){p=a[r]
s=p.ch
if(s!==m){if(s!=null){p.ch=null
if(s.ay!=null)p.ac(0)}p.ch=m
s=m.ay
if(s!=null)p.af(s)
s=p.CW
o=m.CW
if(s<=o){p.CW=o+1
s=p.as
if(s!=null)B.b.Y(s,p.gF_())}q=!0}}if(!q&&m.as!=null)for(l=m.as,s=l.length,n=0;n<s;++n)if(l[n].b!==a[n].b){q=!0
break}m.as=a
if(q)m.eQ()},
ga2m(){var s=this.as
s=s==null?null:s.length!==0
return s===!0},
wX(a){var s,r,q,p=this.as
if(p!=null)for(s=p.length,r=0;r<p.length;p.length===s||(0,A.J)(p),++r){q=p[r]
if(!a.$1(q)||!q.wX(a))return!1}return!0},
Xh(a){var s=a.CW,r=this.CW
if(s<=r){a.CW=r+1
s=a.as
if(s!=null)B.b.Y(s,a.gF_())}},
af(a){var s,r,q,p=this
p.ay=a
for(s=a.c;s.X(0,p.b);)p.b=$.a3y=($.a3y+1)%65535
s.l(0,p.b,p)
a.d.A(0,p)
if(p.cx){p.cx=!1
p.eQ()}s=p.as
if(s!=null)for(r=s.length,q=0;q<s.length;s.length===r||(0,A.J)(s),++q)s[q].af(a)},
ac(a){var s,r,q,p,o=this
o.ay.c.A(0,o.b)
o.ay.d.H(0,o)
o.ay=null
s=o.as
if(s!=null)for(r=s.length,q=0;q<s.length;s.length===r||(0,A.J)(s),++q){p=s[q]
if(p.ch===o)J.anx(p)}o.eQ()},
eQ(){var s,r=this
if(r.cx)return
r.cx=!0
s=r.ay
if(s!=null)s.b.H(0,r)},
jp(a,b,c){var s=this
if(c==null)c=$.acO()
if(!s.fx.k(0,c.RG)||!s.k1.k(0,c.x1)||s.k3!==c.y1||s.k4!==c.y2||!s.fy.k(0,c.rx)||!s.go.k(0,c.ry)||!s.id.k(0,c.to)||s.k2!==c.x2||s.fr!==c.aA||s.p1!=c.aX||s.p2!=c.k2||s.rx!=c.aN||s.ry!=c.bf||s.to!=c.ba||s.dx!==c.r||s.x!=c.k3||s.Q!==c.p4||s.z!==c.b)s.eQ()
s.fx=c.RG
s.fy=c.rx
s.go=c.ry
s.id=c.to
s.k1=c.x1
s.k2=c.x2
s.ok=c.xr
s.k3=c.y1
s.k4=c.y2
s.fr=c.aA
s.p1=c.aX
s.p2=c.k2
s.cy=A.nR(c.f,t.nS,t.mP)
s.db=A.nR(c.R8,t.zN,t.M)
s.dx=c.r
s.p3=c.bP
s.rx=c.aN
s.ry=c.bf
s.to=c.ba
s.Q=c.p4
s.R8=c.k4
s.RG=c.ok
s.x=c.k3
s.x1=c.p1
s.x2=c.p2
s.xr=c.p3
s.z=c.b
s.Xl(b==null?B.i2:b)},
Lg(a,b){return this.jp(a,null,b)},
LS(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7={}
a7.a=a6.fr
a7.b=a6.dx
a7.c=a6.fx
a7.d=a6.fy
a7.e=a6.go
a7.f=a6.id
a7.r=a6.k1
a7.w=a6.k2
a7.x=a6.p1
s=a6.dy
a7.y=s==null?null:A.iB(s,t.xJ)
a7.z=a6.p3
a7.Q=a6.R8
a7.as=a6.RG
a7.at=a6.rx
a7.ax=a6.ry
a7.ay=a6.to
a7.ch=a6.x1
a7.CW=a6.x2
a7.cx=a6.xr
r=a6.k3
a7.cy=a6.k4
q=A.aW(t.S)
for(s=a6.db,s=A.iA(s,s.r);s.u();)q.H(0,A.agH(s.d))
a6.ok!=null
if(a6.Q)a6.wX(new A.a3z(a7,a6,q))
s=a7.a
p=a6.z
o=a7.b
p=p?o&$.Ty():o
o=a7.c
n=a7.d
m=a7.e
l=a7.f
k=a7.r
j=a7.w
i=a7.x
h=a6.e
g=a6.d
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
a5=A.aq(q,!0,q.$ti.c)
B.b.hR(a5)
return new A.Ix(s,p,o,n,m,l,k,j,i,d,c,b,a,a0,a1,a2,a3,a4,h,e,g,r,f,a5)},
QU(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.LS()
if(!a.ga2m()||a.Q){s=$.amb()
r=s}else{q=a.as.length
p=a.RM()
s=new Int32Array(q)
for(o=0;o<q;++o)s[o]=p[o].b
r=new Int32Array(q)
for(o=q-1,n=a.as;o>=0;--o)r[o]=n[q-o-1].b}n=a0.fr
m=n.length
if(m!==0){l=new Int32Array(m)
for(o=0;o<n.length;++o){m=n[o]
l[o]=m
a2.H(0,m)}}else l=null
n=a.b
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
if(c==null)c=$.amd()
b=l==null?$.amc():l
a1.a.push(new A.Iz(n,a0.a,a0.b,-1,-1,-1,0,g,f,e,d,a0.cx,m.a,m.b,h.a,h.b,k.a,k.b,j.a,j.b,i.a,i.b,a0.w,a0.x,A.afF(c),s,r,b,a0.dy))
a.cx=!1},
RM(){var s,r,q,p,o,n,m,l,k,j=this.p1,i=this.ch
while(!0){s=j==null
if(!(s&&i!=null))break
j=i.p1
i=i.ch}r=this.as
if(!s){r.toString
r=A.auN(r,j)}s=t.Dr
q=A.a([],s)
p=A.a([],s)
for(o=null,n=0;n<r.length;++n){m=r[n]
l=m.p2
o=n>0?r[n-1].p2:null
if(n!==0)if(J.L(l)===J.L(o)){if(l!=null)o.toString
k=!0}else k=!1
else k=!0
if(!k&&p.length!==0){if(o!=null){if(!!p.immutable$list)A.a6(A.W("sort"))
s=p.length-1
if(s-0<=32)A.IU(p,0,s,J.afa())
else A.IT(p,0,s,J.afa())}B.b.L(q,p)
B.b.T(p)}p.push(new A.jf(m,l,n))}if(o!=null)B.b.hR(p)
B.b.L(q,p)
s=t.wg
return A.aq(new A.aw(q,new A.a3x(),s),!0,s.i("b7.E"))},
Md(a){if(this.ay==null)return
B.jC.md(0,a.KY(this.b))},
bS(){return"SemanticsNode#"+this.b},
a50(a,b,c){return new A.Qt(a,this,b,!0,!0,null,c)},
KW(a){return this.a50(B.EX,null,a)}}
A.a3z.prototype={
$1(a){var s,r,q,p=this.a
p.a=p.a|a.fr
s=p.b
r=a.z
q=a.dx
p.b=s|(r?q&$.Ty():q)
if(p.x==null)p.x=a.p1
p.z=a.p3
p.Q=a.R8
if(p.as==null)p.as=a.RG
if(p.at==null)p.at=a.rx
if(p.ax==null)p.ax=a.ry
if(p.ay==null)p.ay=a.to
p.ch=a.x1
p.CW=a.x2
p.cx=a.xr
if(p.d.a==="")p.d=a.fy
if(p.e.a==="")p.e=a.go
if(p.f.a==="")p.f=a.id
if(p.w==="")p.w=a.k2
s=a.dy
if(s!=null){r=p.y;(r==null?p.y=A.aW(t.xJ):r).L(0,s)}for(s=this.b.db,s=A.iA(s,s.r),r=this.c;s.u();)r.H(0,A.agH(s.d))
a.ok!=null
s=p.c
r=p.x
p.c=A.abe(a.fx,a.p1,s,r)
r=p.r
s=p.x
p.r=A.abe(a.k1,a.p1,r,s)
p.cy=Math.max(p.cy,a.k4+a.k3)
return!0},
$S:71}
A.a3x.prototype={
$1(a){return a.a},
$S:253}
A.j2.prototype={
aW(a,b){return B.c.aW(this.b,b.b)},
$ibR:1}
A.hf.prototype={
aW(a,b){return B.c.aW(this.a,b.a)},
MB(){var s,r,q,p,o,n,m,l,k,j=A.a([],t.iV)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.J)(s),++q){p=s[q]
o=p.e
j.push(new A.j2(!0,A.mI(p,new A.p(o.a- -0.1,o.b- -0.1)).a,p))
j.push(new A.j2(!1,A.mI(p,new A.p(o.c+-0.1,o.d+-0.1)).a,p))}B.b.hR(j)
n=A.a([],t.sO)
for(s=j.length,r=this.b,o=t.R,m=null,l=0,q=0;q<j.length;j.length===s||(0,A.J)(j),++q){k=j[q]
if(k.a){++l
if(m==null)m=new A.hf(k.b,r,A.a([],o))
m.c.push(k.c)}else --l
if(l===0){m.toString
n.push(m)
m=null}}B.b.hR(n)
if(r===B.K){s=t.FF
n=A.aq(new A.cY(n,s),!0,s.i("b7.E"))}s=A.am(n).i("ip<1,bH>")
return A.aq(new A.ip(n,new A.aa3(),s),!0,s.i("k.E"))},
MA(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this.c,a4=a3.length
if(a4<=1)return a3
s=t.S
r=A.y(s,t.ju)
q=A.y(s,s)
for(p=this.b,o=p===B.K,p=p===B.e,n=a4,m=0;m<n;g===a4||(0,A.J)(a3),++m,n=g){l=a3[m]
r.l(0,l.b,l)
n=l.e
k=n.a
j=n.b
i=A.mI(l,new A.p(k+(n.c-k)/2,j+(n.d-j)/2))
for(n=a3.length,k=i.a,j=i.b,h=0;g=a3.length,h<g;a3.length===n||(0,A.J)(a3),++h){f=a3[h]
if((l==null?f==null:l===f)||q.j(0,f.b)===l.b)continue
g=f.e
e=g.a
d=g.b
c=A.mI(f,new A.p(e+(g.c-e)/2,d+(g.d-d)/2))
b=Math.atan2(c.b-j,c.a-k)
a=p&&-0.7853981633974483<b&&b<2.356194490192345
if(o)a0=b<-2.356194490192345||b>2.356194490192345
else a0=!1
if(a||a0)q.l(0,l.b,f.b)}}a1=A.a([],t.t)
a2=A.a(a3.slice(0),A.am(a3))
B.b.dh(a2,new A.aa_())
new A.aw(a2,new A.aa0(),A.am(a2).i("aw<1,l>")).Y(0,new A.aa2(A.aW(s),q,a1))
a3=t.sC
a3=A.aq(new A.aw(a1,new A.aa1(r),a3),!0,a3.i("b7.E"))
a4=A.am(a3).i("cY<1>")
return A.aq(new A.cY(a3,a4),!0,a4.i("b7.E"))},
$ibR:1}
A.aa3.prototype={
$1(a){return a.MA()},
$S:94}
A.aa_.prototype={
$2(a,b){var s,r,q=a.e,p=A.mI(a,new A.p(q.a,q.b))
q=b.e
s=A.mI(b,new A.p(q.a,q.b))
r=B.c.aW(p.b,s.b)
if(r!==0)return-r
return-B.c.aW(p.a,s.a)},
$S:69}
A.aa2.prototype={
$1(a){var s=this,r=s.a
if(r.C(0,a))return
r.H(0,a)
r=s.b
if(r.X(0,a)){r=r.j(0,a)
r.toString
s.$1(r)}s.c.push(a)},
$S:44}
A.aa0.prototype={
$1(a){return a.b},
$S:256}
A.aa1.prototype={
$1(a){var s=this.a.j(0,a)
s.toString
return s},
$S:257}
A.aba.prototype={
$1(a){return a.MB()},
$S:94}
A.jf.prototype={
aW(a,b){var s,r=this.b
if(r==null||b.b==null)return this.c-b.c
r.toString
s=b.b
s.toString
return r.aW(0,s)},
$ibR:1}
A.IA.prototype={
n(){var s=this
s.b.T(0)
s.c.T(0)
s.d.T(0)
s.dH()},
Mf(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.b
if(f.a===0)return
s=A.aW(t.S)
r=A.a([],t.R)
for(q=A.n(f).i("be<1>"),p=q.i("k.E"),o=g.d;f.a!==0;){n=A.aq(new A.be(f,new A.a3D(g),q),!0,p)
f.T(0)
o.T(0)
m=new A.a3E()
if(!!n.immutable$list)A.a6(A.W("sort"))
l=n.length-1
if(l-0<=32)A.IU(n,0,l,m)
else A.IT(n,0,l,m)
B.b.L(r,n)
for(m=n.length,k=0;k<n.length;n.length===m||(0,A.J)(n),++k){j=n[k]
if(j.Q||j.y){l=j.ch
if(l!=null)i=l.Q||l.y
else i=!1
if(i){l.eQ()
j.cx=!1}}}}B.b.dh(r,new A.a3F())
$.a3j.toString
h=new A.a3I(A.a([],t.fr))
for(q=r.length,k=0;k<r.length;r.length===q||(0,A.J)(r),++k){j=r[k]
if(j.cx&&j.ay!=null)j.QU(h,s)}f.T(0)
for(f=A.fk(s,s.r),q=A.n(f).c;f.u();){p=f.d
$.agE.j(0,p==null?q.a(p):p).toString}g.a.$1(new A.IC(h.a))
g.ar()},
TC(a,b){var s,r={},q=r.a=this.c.j(0,a)
if(q!=null)s=(q.Q||q.y)&&!q.cy.X(0,b)
else s=!1
if(s)q.wX(new A.a3C(r,b))
s=r.a
if(s==null||!s.cy.X(0,b))return null
return r.a.cy.j(0,b)},
a47(a,b,c){var s,r=this.TC(a,b)
if(r!=null){r.$1(c)
return}if(b===B.Ur){s=this.c.j(0,a)
s=(s==null?null:s.c)!=null}else s=!1
if(s)this.c.j(0,a).c.$0()},
h(a){return"<optimized out>#"+A.b4(this)}}
A.a3D.prototype={
$1(a){return!this.a.d.C(0,a)},
$S:71}
A.a3E.prototype={
$2(a,b){return a.CW-b.CW},
$S:69}
A.a3F.prototype={
$2(a,b){return a.CW-b.CW},
$S:69}
A.a3C.prototype={
$1(a){if(a.cy.X(0,this.b)){this.a.a=a
return!1}return!0},
$S:71}
A.h0.prototype={
jB(a,b){var s=this
s.f.l(0,a,b)
s.r=s.r|a.a
s.e=!0},
e1(a,b){this.jB(a,new A.a3k(b))},
sji(a){a.toString
this.e1(B.dR,a)},
sjh(a){a.toString
this.e1(B.AU,a)},
stj(a){this.e1(B.dT,a)},
sth(a){this.e1(B.Us,a)},
stk(a){this.e1(B.dU,a)},
stl(a){this.e1(B.dQ,a)},
sti(a){this.e1(B.dS,a)},
szl(a){this.e1(B.AW,a)},
szg(a){this.e1(B.AT,a)},
sze(a,b){this.e1(B.Ut,b)},
szf(a,b){this.e1(B.Uw,b)},
szs(a,b){this.e1(B.Uo,b)},
szq(a){this.jB(B.Uu,new A.a3o(a))},
szo(a){this.jB(B.Ux,new A.a3m(a))},
szr(a){this.jB(B.Uv,new A.a3p(a))},
szp(a){this.jB(B.Un,new A.a3n(a))},
szv(a){this.jB(B.Up,new A.a3q(a))},
szw(a){this.jB(B.Uq,new A.a3r(a))},
szh(a){this.e1(B.AV,a)},
szi(a){this.e1(B.AX,a)},
sM6(a){return},
sM7(a){if(a==this.ok)return
this.ok=a
this.e=!0},
sz5(a){return},
sxD(a){return},
shn(a,b){if(b===this.y1)return
this.y1=b
this.e=!0},
x8(a){var s=this.av;(s==null?this.av=A.aW(t.xJ):s).H(0,a)},
b2(a,b){var s=this,r=s.aA,q=a.a
if(b)s.aA=r|q
else s.aA=r&~q
s.e=!0},
Jx(a){var s=this
if(a==null||!a.e||!s.e)return!0
if((s.r&a.r)!==0)return!1
if((s.aA&a.aA)!==0)return!1
if(s.rx.a.length!==0&&a.rx.a.length!==0)return!1
return!0},
iK(a){var s,r,q,p=this
if(!a.e)return
s=a.f
if(a.b)s.Y(0,new A.a3l(p))
else p.f.L(0,s)
s=p.r
r=a.b
q=a.r
p.r=s|(r?q&$.Ty():q)
p.R8.L(0,a.R8)
p.aA=p.aA|a.aA
p.bP=a.bP
if(p.aN==null)p.aN=a.aN
if(p.bf==null)p.bf=a.bf
if(p.ba==null)p.ba=a.ba
if(p.xr==null)p.xr=a.xr
if(p.k3==null)p.k3=a.k3
if(p.ok==null)p.ok=a.ok
p.k4=a.k4
p.p1=a.p1
p.p2=a.p2
p.p3=a.p3
s=p.aX
if(s==null){s=p.aX=a.aX
p.e=!0}if(p.k2==null)p.k2=a.k2
r=p.RG
p.RG=A.abe(a.RG,a.aX,r,s)
if(p.rx.a==="")p.rx=a.rx
if(p.ry.a==="")p.ry=a.ry
if(p.to.a==="")p.to=a.to
s=p.x1
r=p.aX
p.x1=A.abe(a.x1,a.aX,s,r)
if(p.x2==="")p.x2=a.x2
p.y2=Math.max(p.y2,a.y2+a.y1)
p.e=p.e||a.e},
a00(){var s=this,r=A.iT()
r.a=s.a
r.c=s.c
r.d=s.d
r.e=s.e
r.p4=s.p4
r.aX=s.aX
r.k2=s.k2
r.RG=s.RG
r.ry=s.ry
r.rx=s.rx
r.to=s.to
r.x1=s.x1
r.xr=s.xr
r.x2=s.x2
r.y1=s.y1
r.y2=s.y2
r.aA=s.aA
r.av=s.av
r.bP=s.bP
r.aN=s.aN
r.bf=s.bf
r.ba=s.ba
r.r=s.r
r.k3=s.k3
r.ok=s.ok
r.k4=s.k4
r.p1=s.p1
r.p2=s.p2
r.p3=s.p3
r.f.L(0,s.f)
r.R8.L(0,s.R8)
r.b=s.b
return r}}
A.a3k.prototype={
$1(a){this.a.$0()},
$S:5}
A.a3o.prototype={
$1(a){a.toString
this.a.$1(A.pY(a))},
$S:5}
A.a3m.prototype={
$1(a){a.toString
this.a.$1(A.pY(a))},
$S:5}
A.a3p.prototype={
$1(a){a.toString
this.a.$1(A.pY(a))},
$S:5}
A.a3n.prototype={
$1(a){a.toString
this.a.$1(A.pY(a))},
$S:5}
A.a3q.prototype={
$1(a){var s,r,q
a.toString
s=J.TC(t.f.a(a),t.N,t.S)
r=s.j(0,"base")
r.toString
q=s.j(0,"extent")
q.toString
this.a.$1(A.a5x(B.J,r,q,!1))},
$S:5}
A.a3r.prototype={
$1(a){a.toString
this.a.$1(A.bQ(a))},
$S:5}
A.a3l.prototype={
$2(a,b){if(($.Ty()&a.a)>0)this.a.f.l(0,a,b)},
$S:259}
A.VD.prototype={
F(){return"DebugSemanticsDumpOrder."+this.b}}
A.os.prototype={
aW(a,b){var s=this.a0V(b)
return s},
$ibR:1}
A.tT.prototype={
a0V(a){var s=a.b,r=this.b
if(s===r)return 0
return B.h.aW(r,s)}}
A.Qs.prototype={}
A.Qv.prototype={}
A.Qw.prototype={}
A.a3t.prototype={
KY(a){var s=A.aT(["type",this.a,"data",this.pc()],t.N,t.z)
if(a!=null)s.l(0,"nodeId",a)
return s},
a53(){return this.KY(null)},
h(a){var s,r,q,p=A.a([],t.s),o=this.pc(),n=J.TE(o.gbn(o))
B.b.hR(n)
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.J)(n),++r){q=n[r]
p.push(A.h(q)+": "+A.h(o.j(0,q)))}return"SemanticsEvent("+B.b.bm(p,", ")+")"}}
A.a5G.prototype={
pc(){return A.aT(["message",this.b],t.N,t.z)}}
A.a_h.prototype={
pc(){return B.wI}}
A.a4L.prototype={
pc(){return B.wI}}
A.zM.prototype={
lT(a,b){return this.a3t(a,!0)},
a3t(a,b){var s=0,r=A.a2(t.N),q,p=this,o
var $async$lT=A.a3(function(c,d){if(c===1)return A.a_(d,r)
while(true)switch(s){case 0:s=3
return A.a9(p.eb(0,a),$async$lT)
case 3:o=d
if(o.byteLength<51200){q=B.X.fH(0,A.da(o.buffer,0,null))
s=1
break}q=A.al2(A.aw5(),o,'UTF8 decode for "'+a+'"',t.yp,t.N)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$lT,r)},
h(a){return"<optimized out>#"+A.b4(this)+"()"}}
A.UE.prototype={
lT(a,b){return this.MP(a,!0)},
a3u(a,b,c){var s,r={},q=this.c
if(q.X(0,a)){r=q.j(0,a)
r.toString
return c.i("ah<0>").a(r)}r.a=r.b=null
this.eb(0,a).bz(b,c).ed(new A.UF(r,this,a,c),new A.UG(r),t.H)
s=r.a
if(s!=null)return s
s=new A.ap($.ag,c.i("ap<0>"))
r.b=new A.bo(s,c.i("bo<0>"))
q.l(0,a,s)
return r.b.a}}
A.UF.prototype={
$1(a){var s=this,r=new A.bq(a,s.d.i("bq<0>")),q=s.a
q.a=r
s.b.c.l(0,s.c,r)
q=q.b
if(q!=null)q.d5(0,a)},
$S(){return this.d.i("aK(0)")}}
A.UG.prototype={
$2(a,b){this.a.b.nw(a,b)},
$S:36}
A.a0R.prototype={
eb(a,b){var s,r=B.ch.cH(A.aaH(null,A.RY(B.hZ,b,B.X,!1),null).e),q=$.fa.c6$
q===$&&A.b()
s=q.uc(0,"flutter/assets",A.lE(r.buffer,0,null)).bz(new A.a0S(b),t.yp)
return s},
ou(a){return this.a3s(a)},
a3s(a){var s=0,r=A.a2(t.gG),q,p=this,o,n
var $async$ou=A.a3(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:o=A
n=A
s=3
return A.a9(p.eb(0,a),$async$ou)
case 3:q=o.adO(n.da(c.buffer,0,null))
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$ou,r)}}
A.a0S.prototype={
$1(a){if(a==null)throw A.d(A.XB(A.a([A.av6(this.a),A.bg("The asset does not exist or has empty data.")],t.E)))
return a},
$S:260}
A.p7.prototype={
Ly(a){var s,r,q,p=this.b
if(!p.X(0,a)){s=this.a
r=J.aI(s)
if(r.j(s,a)==null)return null
q=r.j(s,a)
if(q==null)q=[]
q=J.zs(t.n0.a(q),t.mE)
p.l(0,a,q.fS(q,new A.a6v(a),t.hw).dB(0))
r.A(s,a)}p=p.j(0,a)
p.toString
return p},
$iU7:1}
A.a6v.prototype={
$1(a){var s,r=J.aI(a),q=r.j(a,"asset")
q.toString
A.bQ(q)
s=r.j(a,"dpr")
r=r.j(a,"asset")
r.toString
A.bQ(r)
return new A.jx(A.auE(s),r)},
$S:261}
A.jx.prototype={}
A.Uj.prototype={}
A.ot.prototype={
Vs(){var s,r,q=this,p=t.F3,o=new A.YD(A.y(p,t.lT),A.aW(t.vQ),A.a([],t.AV))
q.bg$!==$&&A.fo()
q.bg$=o
s=$.acN()
r=A.a([],t.DG)
q.bQ$!==$&&A.fo()
q.bQ$=new A.E5(o,s,r,A.aW(p))
p=q.bg$
p===$&&A.b()
p.pJ().bz(new A.a3M(q),t.P)},
oe(){var s=$.TB()
s.a.T(0)
s.b.T(0)
s.c.T(0)},
j8(a){return this.a29(a)},
a29(a){var s=0,r=A.a2(t.H),q,p=this
var $async$j8=A.a3(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:switch(A.bQ(J.b9(t.a.a(a),"type"))){case"memoryPressure":p.oe()
break}s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$j8,r)},
QO(){var s=A.aR("controller")
s.sbR(new A.p8(new A.a3L(s),null,null,null,t.tI))
return J.anC(s.ak())},
a4q(){if(this.CW$==null)$.aB()
return},
vG(a){return this.Uq(a)},
Uq(a){var s=0,r=A.a2(t.dR),q,p=this,o,n
var $async$vG=A.a3(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:a.toString
o=A.asF(a)
n=p.CW$
o.toString
B.b.Y(p.Tf(n,o),p.ga1r())
q=null
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$vG,r)},
Tf(a,b){var s,r,q,p
if(a===b)return B.Mn
if(a===B.hb&&b===B.e4)return B.Ig
s=A.a([],t.sP)
if(a==null)s.push(b)
else{r=B.b.jb(B.eC,a)
q=B.b.jb(B.eC,b)
if(r>q)for(p=q;p<r;++p)B.b.lM(s,0,B.eC[p])
else for(p=r+1;p<=q;++p)s.push(B.eC[p])}return s},
q5(a){return this.UC(a)},
UC(a){var s=0,r=A.a2(t.z),q,p=this,o
var $async$q5=A.a3(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:case 3:switch(a.a){case"SystemChrome.systemUIChange":s=5
break
case"System.requestAppExit":s=6
break
default:s=4
break}break
case 5:t.j.a(a.b)
s=4
break
case 6:o=A
s=7
return A.a9(p.rP(),$async$q5)
case 7:q=o.aT(["response",c.b],t.N,t.z)
s=1
break
case 4:case 1:return A.a0(q,r)}})
return A.a1($async$q5,r)},
rW(){var s=0,r=A.a2(t.H)
var $async$rW=A.a3(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:s=2
return A.a9(B.bA.oo("System.initializationComplete",t.z),$async$rW)
case 2:return A.a0(null,r)}})
return A.a1($async$rW,r)},
$idg:1}
A.a3M.prototype={
$1(a){var s=$.aB(),r=this.a.bQ$
r===$&&A.b()
s.at=r.ga1C()
s.ax=$.ag
B.Cu.uf(r.ga1X())},
$S:16}
A.a3L.prototype={
$0(){var s=0,r=A.a2(t.H),q=this,p,o,n
var $async$$0=A.a3(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:o=A.aR("rawLicenses")
n=o
s=2
return A.a9($.TB().lT("NOTICES",!1),$async$$0)
case 2:n.sbR(b)
p=q.a
n=J
s=3
return A.a9(A.al2(A.awc(),o.ak(),"parseLicenses",t.N,t.rh),$async$$0)
case 3:n.mN(b,J.anz(p.ak()))
s=4
return A.a9(J.anu(p.ak()),$async$$0)
case 4:return A.a0(null,r)}})
return A.a1($async$$0,r)},
$S:60}
A.a76.prototype={
uc(a,b,c){var s=new A.ap($.ag,t.sB)
$.aB().Fw(b,c,A.ahd(new A.a77(new A.bo(s,t.BB))))
return s},
AX(a,b){if(b==null){a=$.Tz().a.j(0,a)
if(a!=null)a.e=null}else $.Tz().Mk(a,new A.a78(b))}}
A.a77.prototype={
$1(a){var s,r,q,p
try{this.a.d5(0,a)}catch(q){s=A.an(q)
r=A.aH(q)
p=A.bg("during a platform message response callback")
A.d9(new A.bs(s,r,"services library",p,null,!1))}},
$S:18}
A.a78.prototype={
$2(a,b){return this.Lv(a,b)},
Lv(a,b){var s=0,r=A.a2(t.H),q=1,p,o=[],n=this,m,l,k,j,i,h
var $async$$2=A.a3(function(c,d){if(c===1){p=d
s=q}while(true)switch(s){case 0:i=null
q=3
s=6
return A.a9(n.a.$1(a),$async$$2)
case 6:i=d
o.push(5)
s=4
break
case 3:q=2
h=p
m=A.an(h)
l=A.aH(h)
j=A.bg("during a platform message callback")
A.d9(new A.bs(m,l,"services library",j,null,!1))
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
b.$1(i)
s=o.pop()
break
case 5:return A.a0(null,r)
case 1:return A.a_(p,r)}})
return A.a1($async$$2,r)},
$S:265}
A.nO.prototype={
F(){return"KeyboardLockMode."+this.b}}
A.jQ.prototype={}
A.ly.prototype={}
A.jS.prototype={}
A.t2.prototype={}
A.YD.prototype={
pJ(){var s=0,r=A.a2(t.H),q=this,p,o,n,m,l,k
var $async$pJ=A.a3(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:l=t.S
s=2
return A.a9(B.T3.rY("getKeyboardState",l,l),$async$pJ)
case 2:k=b
if(k!=null)for(l=J.em(k),p=J.ao(l.gbn(k)),o=q.a;p.u();){n=p.gG(p)
m=l.j(k,n)
m.toString
o.l(0,new A.j(n),new A.f(m))}return A.a0(null,r)}})
return A.a1($async$pJ,r)},
Sw(a){var s,r,q,p,o,n,m,l,k,j
this.d=!0
s=!1
for(n=this.c,m=0;!1;++m){r=n[m]
try{q=r.$1(a)
s=s||q}catch(l){p=A.an(l)
o=A.aH(l)
k=A.bg("while processing a key handler")
j=$.fq()
if(j!=null)j.$1(new A.bs(p,o,"services library",k,null,!1))}}this.d=!1
return s},
IY(a){var s,r,q=this,p=a.a,o=a.b
if(a instanceof A.ly){q.a.l(0,p,o)
s=$.am1().j(0,o.a)
if(s!=null){r=q.b
if(r.C(0,s))r.A(0,s)
else r.H(0,s)}}else if(a instanceof A.jS)q.a.A(0,p)
return q.Sw(a)}}
A.E4.prototype={
F(){return"KeyDataTransitMode."+this.b}}
A.t1.prototype={
h(a){return"KeyMessage("+A.h(this.a)+")"}}
A.E5.prototype={
a1D(a){var s,r=this,q=r.d
switch((q==null?r.d=B.FW:q).a){case 0:return!1
case 1:if(a.c===0&&a.d===0)return!1
s=A.aqs(a)
if(a.f&&r.e.length===0){r.b.IY(s)
r.D8(A.a([s],t.DG),null)}else r.e.push(s)
return!1}},
D8(a,b){var s,r,q,p,o=this.a
if(o!=null){s=new A.t1(a,b)
try{o=o.$1(s)
return o}catch(p){r=A.an(p)
q=A.aH(p)
o=A.bg("while processing the key message handler")
A.d9(new A.bs(r,q,"services library",o,null,!1))}}return!1},
yB(a){var s=0,r=A.a2(t.a),q,p=this,o,n,m,l,k,j,i
var $async$yB=A.a3(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:if(p.d==null){p.d=B.FV
p.c.a.push(p.gS6())}o=A.as3(t.a.a(a))
if(o instanceof A.hP){p.f.A(0,o.c.gfU())
n=!0}else if(o instanceof A.oc){m=p.f
l=o.c
if(m.C(0,l.gfU())){m.A(0,l.gfU())
n=!1}else n=!0}else n=!0
if(n){p.c.a1W(o)
for(m=p.e,l=m.length,k=p.b,j=!1,i=0;i<m.length;m.length===l||(0,A.J)(m),++i)j=k.IY(m[i])||j
j=p.D8(m,o)||j
B.b.T(m)}else j=!0
q=A.aT(["handled",j],t.N,t.z)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$yB,r)},
S7(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.c,d=e.gfU(),c=e.gow()
e=this.b.a
s=A.n(e).i("b6<1>")
r=A.iB(new A.b6(e,s),s.i("k.E"))
q=A.a([],t.DG)
p=e.j(0,d)
o=$.fa.p1$
n=a.a
if(n==="")n=f
if(a instanceof A.hP)if(p==null){m=new A.ly(d,c,n,o,!1)
r.H(0,d)}else m=new A.t2(d,p,n,o,!1)
else if(p==null)m=f
else{m=new A.jS(d,p,f,o,!1)
r.A(0,d)}for(s=this.c.d,l=A.n(s).i("b6<1>"),k=l.i("k.E"),j=r.jZ(A.iB(new A.b6(s,l),k)),j=j.ga6(j),i=this.e;j.u();){h=j.gG(j)
if(h.k(0,d))q.push(new A.jS(h,c,f,o,!0))
else{g=e.j(0,h)
g.toString
i.push(new A.jS(h,g,f,o,!0))}}for(e=A.iB(new A.b6(s,l),k).jZ(r),e=e.ga6(e);e.u();){l=e.gG(e)
k=s.j(0,l)
k.toString
i.push(new A.ly(l,k,f,o,!0))}if(m!=null)i.push(m)
B.b.L(i,q)}}
A.O5.prototype={}
A.a_0.prototype={}
A.f.prototype={
gt(a){return B.h.gt(this.a)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.L(b)!==A.v(this))return!1
return b instanceof A.f&&b.a===this.a}}
A.j.prototype={
gt(a){return B.h.gt(this.a)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.L(b)!==A.v(this))return!1
return b instanceof A.j&&b.a===this.a}}
A.O6.prototype={}
A.hI.prototype={
h(a){return"MethodCall("+this.a+", "+A.h(this.b)+")"}}
A.ua.prototype={
h(a){var s=this
return"PlatformException("+s.a+", "+A.h(s.b)+", "+A.h(s.c)+", "+A.h(s.d)+")"},
$icV:1}
A.tx.prototype={
h(a){return"MissingPluginException("+A.h(this.a)+")"},
$icV:1}
A.a4o.prototype={
dL(a){if(a==null)return null
return B.cb.cH(A.da(a.buffer,a.byteOffset,a.byteLength))},
bw(a){if(a==null)return null
return A.lE(B.ch.cH(a).buffer,0,null)}}
A.Zy.prototype={
bw(a){if(a==null)return null
return B.hq.bw(B.d0.nX(a))},
dL(a){var s
if(a==null)return a
s=B.hq.dL(a)
s.toString
return B.d0.fH(0,s)}}
A.ZA.prototype={
fK(a){var s=B.bK.bw(A.aT(["method",a.a,"args",a.b],t.N,t.X))
s.toString
return s},
eY(a){var s,r,q,p=null,o=B.bK.dL(a)
if(!t.f.b(o))throw A.d(A.bt("Expected method call Map, got "+A.h(o),p,p))
s=J.aI(o)
r=s.j(o,"method")
q=s.j(o,"args")
if(typeof r=="string")return new A.hI(r,q)
throw A.d(A.bt("Invalid method call: "+A.h(o),p,p))},
HO(a){var s,r,q,p=null,o=B.bK.dL(a)
if(!t.j.b(o))throw A.d(A.bt("Expected envelope List, got "+A.h(o),p,p))
s=J.aI(o)
if(s.gp(o)===1)return s.j(o,0)
if(s.gp(o)===3)if(typeof s.j(o,0)=="string")r=s.j(o,1)==null||typeof s.j(o,1)=="string"
else r=!1
else r=!1
if(r){r=A.bQ(s.j(o,0))
q=A.co(s.j(o,1))
throw A.d(A.aeb(r,s.j(o,2),q,p))}if(s.gp(o)===4)if(typeof s.j(o,0)=="string")if(s.j(o,1)==null||typeof s.j(o,1)=="string")r=s.j(o,3)==null||typeof s.j(o,3)=="string"
else r=!1
else r=!1
else r=!1
if(r){r=A.bQ(s.j(o,0))
q=A.co(s.j(o,1))
throw A.d(A.aeb(r,s.j(o,2),q,A.co(s.j(o,3))))}throw A.d(A.bt("Invalid envelope: "+A.h(o),p,p))},
nY(a){var s=B.bK.bw([a])
s.toString
return s},
k5(a,b,c){var s=B.bK.bw([a,c,b])
s.toString
return s},
Ih(a,b){return this.k5(a,null,b)}}
A.a4e.prototype={
bw(a){var s
if(a==null)return null
s=A.a6i(64)
this.cL(0,s,a)
return s.iS()},
dL(a){var s,r
if(a==null)return null
s=new A.ul(a)
r=this.fb(0,s)
if(s.b<a.byteLength)throw A.d(B.aA)
return r},
cL(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i=null
if(c==null)b.d2(0,0)
else if(A.mG(c))b.d2(0,c?1:2)
else if(typeof c=="number"){b.d2(0,6)
b.h8(8)
s=$.cI()
b.d.setFloat64(0,c,B.a6===s)
b.Y4(b.e)}else if(A.mH(c)){s=-2147483648<=c&&c<=2147483647
r=b.d
if(s){b.d2(0,3)
s=$.cI()
r.setInt32(0,c,B.a6===s)
b.n2(b.e,0,4)}else{b.d2(0,4)
s=$.cI()
B.fr.AV(r,0,c,s)}}else if(typeof c=="string"){b.d2(0,7)
s=c.length
q=new Uint8Array(s)
n=0
while(!0){if(!(n<s)){p=i
o=0
break}m=c.charCodeAt(n)
if(m<=127)q[n]=m
else{p=B.ch.cH(B.d.eI(c,n))
o=n
break}++n}if(p!=null){j.e_(b,o+p.length)
l=q.BYTES_PER_ELEMENT
k=A.cX(0,o,B.h.iy(q.byteLength,l),i,i)
b.jC(A.da(q.buffer,q.byteOffset+0*l,(k-0)*l))
b.jC(p)}else{j.e_(b,s)
b.jC(q)}}else if(t.uo.b(c)){b.d2(0,8)
j.e_(b,c.length)
b.jC(c)}else if(t.fO.b(c)){b.d2(0,9)
s=c.length
j.e_(b,s)
b.h8(4)
b.jC(A.da(c.buffer,c.byteOffset,4*s))}else if(t.D4.b(c)){b.d2(0,14)
s=c.length
j.e_(b,s)
b.h8(4)
b.jC(A.da(c.buffer,c.byteOffset,4*s))}else if(t.cE.b(c)){b.d2(0,11)
s=c.length
j.e_(b,s)
b.h8(8)
b.jC(A.da(c.buffer,c.byteOffset,8*s))}else if(t.j.b(c)){b.d2(0,12)
s=J.aI(c)
j.e_(b,s.gp(c))
for(s=s.ga6(c);s.u();)j.cL(0,b,s.gG(s))}else if(t.f.b(c)){b.d2(0,13)
s=J.aI(c)
j.e_(b,s.gp(c))
s.Y(c,new A.a4g(j,b))}else throw A.d(A.fu(c,i,i))},
fb(a,b){if(b.b>=b.a.byteLength)throw A.d(B.aA)
return this.ii(b.kr(0),b)},
ii(a,b){var s,r,q,p,o,n,m,l,k=this
switch(a){case 0:return null
case 1:return!0
case 2:return!1
case 3:s=b.b
r=$.cI()
q=b.a.getInt32(s,B.a6===r)
b.b+=4
return q
case 4:return b.u1(0)
case 6:b.h8(8)
s=b.b
r=$.cI()
q=b.a.getFloat64(s,B.a6===r)
b.b+=8
return q
case 5:case 7:p=k.dd(b)
return B.cb.cH(b.ks(p))
case 8:return b.ks(k.dd(b))
case 9:p=k.dd(b)
b.h8(4)
s=b.a
o=A.ahZ(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+4*p
return o
case 10:return b.u2(k.dd(b))
case 14:p=k.dd(b)
b.h8(4)
s=b.a
r=s.buffer
s=s.byteOffset+b.b
A.z0(r,s,p)
o=new Float32Array(r,s,p)
b.b=b.b+4*p
return o
case 11:p=k.dd(b)
b.h8(8)
s=b.a
o=A.ahX(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+8*p
return o
case 12:p=k.dd(b)
n=A.b_(p,null,!1,t.X)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.a6(B.aA)
b.b=r+1
n[m]=k.ii(s.getUint8(r),b)}return n
case 13:p=k.dd(b)
s=t.X
n=A.y(s,s)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.a6(B.aA)
b.b=r+1
r=k.ii(s.getUint8(r),b)
l=b.b
if(l>=s.byteLength)A.a6(B.aA)
b.b=l+1
n.l(0,r,k.ii(s.getUint8(l),b))}return n
default:throw A.d(B.aA)}},
e_(a,b){var s,r
if(b<254)a.d2(0,b)
else{s=a.d
if(b<=65535){a.d2(0,254)
r=$.cI()
s.setUint16(0,b,B.a6===r)
a.n2(a.e,0,2)}else{a.d2(0,255)
r=$.cI()
s.setUint32(0,b,B.a6===r)
a.n2(a.e,0,4)}}},
dd(a){var s,r,q=a.kr(0)
switch(q){case 254:s=a.b
r=$.cI()
q=a.a.getUint16(s,B.a6===r)
a.b+=2
return q
case 255:s=a.b
r=$.cI()
q=a.a.getUint32(s,B.a6===r)
a.b+=4
return q
default:return q}}}
A.a4g.prototype={
$2(a,b){var s=this.a,r=this.b
s.cL(0,r,a)
s.cL(0,r,b)},
$S:51}
A.a4i.prototype={
fK(a){var s=A.a6i(64)
B.a7.cL(0,s,a.a)
B.a7.cL(0,s,a.b)
return s.iS()},
eY(a){var s,r,q
a.toString
s=new A.ul(a)
r=B.a7.fb(0,s)
q=B.a7.fb(0,s)
if(typeof r=="string"&&s.b>=a.byteLength)return new A.hI(r,q)
else throw A.d(B.kV)},
nY(a){var s=A.a6i(64)
s.d2(0,0)
B.a7.cL(0,s,a)
return s.iS()},
k5(a,b,c){var s=A.a6i(64)
s.d2(0,1)
B.a7.cL(0,s,a)
B.a7.cL(0,s,c)
B.a7.cL(0,s,b)
return s.iS()},
Ih(a,b){return this.k5(a,null,b)},
HO(a){var s,r,q,p,o,n
if(a.byteLength===0)throw A.d(B.FA)
s=new A.ul(a)
if(s.kr(0)===0)return B.a7.fb(0,s)
r=B.a7.fb(0,s)
q=B.a7.fb(0,s)
p=B.a7.fb(0,s)
o=s.b<a.byteLength?A.co(B.a7.fb(0,s)):null
if(typeof r=="string")n=(q==null||typeof q=="string")&&s.b>=a.byteLength
else n=!1
if(n)throw A.d(A.aeb(r,p,A.co(q),o))
else throw A.d(B.FB)}}
A.a_M.prototype={
a1u(a,b,c){var s,r,q,p
if(t.yg.b(b)){this.b.A(0,a)
return}s=this.b
r=s.j(0,a)
q=A.atL(c)
if(q==null)q=this.a
if(J.e(r==null?null:t.Ft.a(r.a),q))return
p=q.rj(a)
s.l(0,a,p)
B.T4.ez("activateSystemCursor",A.aT(["device",p.b,"kind",t.Ft.a(p.a).a],t.N,t.z),t.H)}}
A.ty.prototype={}
A.dw.prototype={
h(a){var s=this.grl()
return s}}
A.MT.prototype={
rj(a){throw A.d(A.cm(null))},
grl(){return"defer"}}
A.R9.prototype={}
A.kk.prototype={
grl(){return"SystemMouseCursor("+this.a+")"},
rj(a){return new A.R9(this,a)},
k(a,b){if(b==null)return!1
if(J.L(b)!==A.v(this))return!1
return b instanceof A.kk&&b.a===this.a},
gt(a){return B.d.gt(this.a)}}
A.OA.prototype={}
A.jz.prototype={
gnn(){var s=$.fa.c6$
s===$&&A.b()
return s},
md(a,b){return this.Mc(0,b,this.$ti.i("1?"))},
Mc(a,b,c){var s=0,r=A.a2(c),q,p=this,o,n
var $async$md=A.a3(function(d,e){if(d===1)return A.a_(e,r)
while(true)switch(s){case 0:o=p.b
n=o
s=3
return A.a9(p.gnn().uc(0,p.a,o.bw(b)),$async$md)
case 3:q=n.dL(e)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$md,r)},
uf(a){this.gnn().AX(this.a,new A.Ui(this,a))}}
A.Ui.prototype={
$1(a){return this.Ls(a)},
Ls(a){var s=0,r=A.a2(t.yD),q,p=this,o,n
var $async$$1=A.a3(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:o=p.a.b
n=o
s=3
return A.a9(p.b.$1(o.dL(a)),$async$$1)
case 3:q=n.bw(c)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$$1,r)},
$S:97}
A.tw.prototype={
gnn(){var s=$.fa.c6$
s===$&&A.b()
return s},
kT(a,b,c,d){return this.VD(a,b,c,d,d.i("0?"))},
VD(a,b,c,d,e){var s=0,r=A.a2(e),q,p=this,o,n,m,l
var $async$kT=A.a3(function(f,g){if(f===1)return A.a_(g,r)
while(true)switch(s){case 0:o=p.b
n=o.fK(new A.hI(a,b))
m=p.a
s=3
return A.a9(p.gnn().uc(0,m,n),$async$kT)
case 3:l=g
if(l==null){if(c){q=null
s=1
break}throw A.d(A.ar3("No implementation found for method "+a+" on channel "+m))}q=d.i("0?").a(o.HO(l))
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$kT,r)},
ez(a,b,c){return this.kT(a,b,!1,c)},
rY(a,b,c){return this.a3_(a,b,c,b.i("@<0>").ah(c).i("au<1,2>?"))},
a3_(a,b,c,d){var s=0,r=A.a2(d),q,p=this,o
var $async$rY=A.a3(function(e,f){if(e===1)return A.a_(f,r)
while(true)switch(s){case 0:s=3
return A.a9(p.ez(a,null,t.f),$async$rY)
case 3:o=f
q=o==null?null:J.TC(o,b,c)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$rY,r)},
mh(a){var s=this.gnn()
s.AX(this.a,new A.a_z(this,a))},
q4(a,b){return this.TP(a,b)},
TP(a,b){var s=0,r=A.a2(t.yD),q,p=2,o,n=this,m,l,k,j,i,h,g,f,e
var $async$q4=A.a3(function(c,d){if(c===1){o=d
s=p}while(true)switch(s){case 0:h=n.b
g=h.eY(a)
p=4
e=h
s=7
return A.a9(b.$1(g),$async$q4)
case 7:k=e.nY(d)
q=k
s=1
break
p=2
s=6
break
case 4:p=3
f=o
k=A.an(f)
if(k instanceof A.ua){m=k
k=m.a
i=m.b
q=h.k5(k,m.c,i)
s=1
break}else if(k instanceof A.tx){q=null
s=1
break}else{l=k
h=h.Ih("error",J.dt(l))
q=h
s=1
break}s=6
break
case 3:s=2
break
case 6:case 1:return A.a0(q,r)
case 2:return A.a_(o,r)}})
return A.a1($async$q4,r)}}
A.a_z.prototype={
$1(a){return this.a.q4(a,this.b)},
$S:97}
A.iG.prototype={
ez(a,b,c){return this.a30(a,b,c,c.i("0?"))},
oo(a,b){return this.ez(a,null,b)},
a30(a,b,c,d){var s=0,r=A.a2(d),q,p=this
var $async$ez=A.a3(function(e,f){if(e===1)return A.a_(f,r)
while(true)switch(s){case 0:q=p.NF(a,b,!0,c)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$ez,r)}}
A.lz.prototype={
F(){return"KeyboardSide."+this.b}}
A.eG.prototype={
F(){return"ModifierKey."+this.b}}
A.uj.prototype={
ga3K(){var s,r,q=A.y(t.BK,t.FD)
for(s=0;s<9;++s){r=B.pP[s]
if(this.a35(r))q.l(0,r,B.cm)}return q}}
A.fT.prototype={}
A.a1m.prototype={
$0(){var s,r,q,p=this.b,o=J.aI(p),n=A.co(o.j(p,"key")),m=n==null
if(!m){s=n.length
s=s!==0&&s===1}else s=!1
if(s)this.a.a=n
s=A.co(o.j(p,"code"))
if(s==null)s=""
m=m?"":n
r=A.yX(o.j(p,"location"))
if(r==null)r=0
q=A.yX(o.j(p,"metaState"))
if(q==null)q=0
p=A.yX(o.j(p,"keyCode"))
return new A.Hs(s,m,r,q,p==null?0:p)},
$S:269}
A.hP.prototype={}
A.oc.prototype={}
A.a1r.prototype={
a1W(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(a instanceof A.hP){p=a.c
i.d.l(0,p.gfU(),p.gow())}else if(a instanceof A.oc)i.d.A(0,a.c.gfU())
i.YB(a)
for(p=i.a,o=A.aq(p,!0,t.vc),n=o.length,m=0;m<n;++m){s=o[m]
try{if(B.b.C(p,s))s.$1(a)}catch(l){r=A.an(l)
q=A.aH(l)
k=A.bg("while processing a raw key listener")
j=$.fq()
if(j!=null)j.$1(new A.bs(r,q,"services library",k,null,!1))}}return!1},
YB(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=a1.c,f=g.ga3K(),e=t.F3,d=A.y(e,t.lT),c=A.aW(e),b=this.d,a=A.iB(new A.b6(b,A.n(b).i("b6<1>")),e),a0=a1 instanceof A.hP
if(a0)a.H(0,g.gfU())
for(s=g.a,r=null,q=0;q<9;++q){p=B.pP[q]
o=$.am4()
n=o.j(0,new A.c0(p,B.bg))
if(n==null)continue
m=B.wO.j(0,s)
if(n.C(0,m==null?new A.j(98784247808+B.d.gt(s)):m))r=p
if(f.j(0,p)===B.cm){c.L(0,n)
if(n.jQ(0,a.giP(a)))continue}l=f.j(0,p)==null?A.aW(e):o.j(0,new A.c0(p,f.j(0,p)))
if(l==null)continue
for(o=new A.px(l,l.r),o.c=l.e,m=A.n(o).c;o.u();){k=o.d
if(k==null)k=m.a(k)
j=$.am3().j(0,k)
j.toString
d.l(0,k,j)}}i=b.j(0,B.c2)!=null&&!J.e(b.j(0,B.c2),B.dr)
for(e=$.afO(),e=A.iA(e,e.r);e.u();){a=e.d
h=i&&a.k(0,B.c2)
if(!c.C(0,a)&&!h)b.A(0,a)}b.A(0,B.dE)
b.L(0,d)
if(a0&&r!=null&&!b.X(0,g.gfU())){e=g.gfU().k(0,B.cF)
if(e)b.l(0,g.gfU(),g.gow())}}}
A.c0.prototype={
k(a,b){if(b==null)return!1
if(J.L(b)!==A.v(this))return!1
return b instanceof A.c0&&b.a===this.a&&b.b==this.b},
gt(a){return A.N(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.PI.prototype={}
A.PH.prototype={}
A.Hs.prototype={
gfU(){var s=this.a,r=B.wO.j(0,s)
return r==null?new A.j(98784247808+B.d.gt(s)):r},
gow(){var s,r=this.b,q=B.SC.j(0,r),p=q==null?null:q[this.c]
if(p!=null)return p
s=B.QX.j(0,r)
if(s!=null)return s
if(r.length===1)return new A.f(r.toLowerCase().charCodeAt(0))
return new A.f(B.d.gt(this.a)+98784247808)},
a35(a){var s=this
switch(a.a){case 0:return(s.d&4)!==0
case 1:return(s.d&1)!==0
case 2:return(s.d&2)!==0
case 3:return(s.d&8)!==0
case 5:return(s.d&16)!==0
case 4:return(s.d&32)!==0
case 6:return(s.d&64)!==0
case 7:case 8:return!1}},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.L(b)!==A.v(s))return!1
return b instanceof A.Hs&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e},
gt(a){var s=this
return A.N(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.uD.prototype={
ga4S(){var s=this
if(s.c)return new A.bq(s.a,t.m6)
if(s.b==null){s.b=new A.bo(new A.ap($.ag,t.jr),t.Fj)
s.q3()}return s.b.a},
q3(){var s=0,r=A.a2(t.H),q,p=this,o
var $async$q3=A.a3(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:s=3
return A.a9(B.iB.oo("get",t.mE),$async$q3)
case 3:o=b
if(p.b==null){s=1
break}p.EN(o)
case 1:return A.a0(q,r)}})
return A.a1($async$q3,r)},
EN(a){var s,r=a==null
if(!r){s=J.b9(a,"enabled")
s.toString
A.pY(s)}else s=!1
this.a1Y(r?null:t.Fx.a(J.b9(a,"data")),s)},
a1Y(a,b){var s,r,q=this,p=q.c&&b
q.d=p
if(p)$.bL.fy$.push(new A.a2o(q))
s=q.a
if(b){p=q.Sl(a)
r=t.N
if(p==null){p=t.X
p=A.y(p,p)}r=new A.ck(p,q,null,"root",A.y(r,t.hp),A.y(r,t.Cm))
p=r}else p=null
q.a=p
q.c=!0
r=q.b
if(r!=null)r.d5(0,p)
q.b=null
if(q.a!=s){q.ar()
if(s!=null)s.n()}},
w_(a){return this.W7(a)},
W7(a){var s=0,r=A.a2(t.H),q=this,p
var $async$w_=A.a3(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:p=a.a
switch(p){case"push":q.EN(t.mE.a(a.b))
break
default:throw A.d(A.cm(p+" was invoked but isn't implemented by "+A.v(q).h(0)))}return A.a0(null,r)}})
return A.a1($async$w_,r)},
Sl(a){if(a==null)return null
return t.ym.a(B.a7.dL(A.lE(a.buffer,a.byteOffset,a.byteLength)))},
M4(a){var s=this
s.r.H(0,a)
if(!s.f){s.f=!0
$.bL.fy$.push(new A.a2p(s))}},
Da(){var s,r,q,p,o,n=this
if(!n.f)return
n.f=!1
for(s=n.r,r=A.fk(s,s.r),q=A.n(r).c;r.u();){p=r.d;(p==null?q.a(p):p).w=!1}s.T(0)
o=B.a7.bw(n.a.a)
B.iB.ez("put",A.da(o.buffer,o.byteOffset,o.byteLength),t.H)},
IE(){if($.bL.id$)return
this.Da()}}
A.a2o.prototype={
$1(a){this.a.d=!1},
$S:2}
A.a2p.prototype={
$1(a){return this.a.Da()},
$S:2}
A.ck.prototype={
gmZ(){var s=J.zx(this.a,"c",new A.a2l())
s.toString
return t.mE.a(s)},
giG(){var s=J.zx(this.a,"v",new A.a2m())
s.toString
return t.mE.a(s)},
a_x(a,b){var s,r,q,p,o=this,n=o.f
if(n.X(0,a)||!J.dD(o.gmZ(),a)){n=t.N
s=new A.ck(A.y(n,t.X),null,null,a,A.y(n,t.hp),A.y(n,t.Cm))
o.fw(s)
return s}r=t.N
q=o.c
p=J.b9(o.gmZ(),a)
p.toString
s=new A.ck(t.mE.a(p),q,o,a,A.y(r,t.hp),A.y(r,t.Cm))
n.l(0,a,s)
return s},
fw(a){var s=this,r=a.d
if(r!==s){if(r!=null)r.qw(a)
a.d=s
s.BV(a)
if(a.c!=s.c)s.EZ(a)}},
SG(a){this.qw(a)
a.d=null
if(a.c!=null){a.wr(null)
a.GJ(this.gEY())}},
kU(){var s,r=this
if(!r.w){r.w=!0
s=r.c
if(s!=null)s.M4(r)}},
EZ(a){a.wr(this.c)
a.GJ(this.gEY())},
wr(a){var s=this,r=s.c
if(r==a)return
if(s.w)if(r!=null)r.r.A(0,s)
s.c=a
if(s.w&&a!=null){s.w=!1
s.kU()}},
qw(a){var s,r,q,p=this
if(J.e(p.f.A(0,a.e),a)){J.jt(p.gmZ(),a.e)
s=p.r
r=s.j(0,a.e)
if(r!=null){q=J.bC(r)
p.Dl(q.fc(r))
if(q.gR(r))s.A(0,a.e)}if(J.fs(p.gmZ()))J.jt(p.a,"c")
p.kU()
return}s=p.r
q=s.j(0,a.e)
if(q!=null)J.jt(q,a)
q=s.j(0,a.e)
q=q==null?null:J.fs(q)
if(q===!0)s.A(0,a.e)},
BV(a){var s=this
if(s.f.X(0,a.e)){J.fr(s.r.bs(0,a.e,new A.a2k()),a)
s.kU()
return}s.Dl(a)
s.kU()},
Dl(a){this.f.l(0,a.e,a)
J.eo(this.gmZ(),a.e,a.a)},
GK(a,b){var s,r,q=this.f
q=q.gaT(q)
s=this.r
s=s.gaT(s)
r=q.yr(0,new A.ip(s,new A.a2n(),A.n(s).i("ip<k.E,ck>")))
J.mN(b?A.aq(r,!1,A.n(r).i("k.E")):r,a)},
GJ(a){return this.GK(a,!1)},
a4F(a){var s,r=this
if(a===r.e)return
s=r.d
if(s!=null)s.qw(r)
r.e=a
s=r.d
if(s!=null)s.BV(r)},
n(){var s,r=this
r.GK(r.gSF(),!0)
r.f.T(0)
r.r.T(0)
s=r.d
if(s!=null)s.qw(r)
r.d=null
r.wr(null)
r.x=!0},
h(a){return"RestorationBucket(restorationId: "+this.e+", owner: "+A.h(this.b)+")"}}
A.a2l.prototype={
$0(){var s=t.X
return A.y(s,s)},
$S:100}
A.a2m.prototype={
$0(){var s=t.X
return A.y(s,s)},
$S:100}
A.a2k.prototype={
$0(){return A.a([],t.oy)},
$S:273}
A.a2n.prototype={
$1(a){return a},
$S:274}
A.U3.prototype={}
A.hV.prototype={
G6(){var s,r,q,p,o=this,n=o.a
n=n==null?null:n.a
s=o.e
s=s==null?null:s.a
r=o.f.F()
q=o.r.F()
p=o.c
p=p==null?null:p.F()
return A.aT(["systemNavigationBarColor",n,"systemNavigationBarDividerColor",null,"systemStatusBarContrastEnforced",o.w,"statusBarColor",s,"statusBarBrightness",r,"statusBarIconBrightness",q,"systemNavigationBarIconBrightness",p,"systemNavigationBarContrastEnforced",o.d],t.N,t.z)},
h(a){return"SystemUiOverlayStyle("+this.G6().h(0)+")"},
gt(a){var s=this
return A.N(s.a,s.b,s.d,s.e,s.f,s.r,s.w,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s,r=this
if(b==null)return!1
if(J.L(b)!==A.v(r))return!1
if(b instanceof A.hV)if(J.e(b.a,r.a))if(J.e(b.e,r.e))if(b.r===r.r)if(b.f===r.f)s=b.c==r.c
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.a4C.prototype={
$0(){if(!J.e($.oF,$.aex)){B.bA.ez("SystemChrome.setSystemUIOverlayStyle",$.oF.G6(),t.H)
$.aex=$.oF}$.oF=null},
$S:0}
A.J9.prototype={
F(){return"SystemSoundType."+this.b}}
A.a4N.prototype={
h1(a){var s
if(a<0)return null
s=this.mb(a).a
return s>=0?s:null},
h2(a){var s=this.mb(Math.max(0,a)).b
return s>=0?s:null},
mb(a){var s,r=this.h1(a)
if(r==null)r=-1
s=this.h2(a)
return new A.di(r,s==null?-1:s)}}
A.Ae.prototype={
h1(a){var s
if(a<0)return null
s=this.a
return A.aeu(s,Math.min(a,s.length)).b},
h2(a){var s,r=this.a
if(a>=r.length)return null
s=A.aeu(r,Math.max(0,a+1))
return s.b+s.gG(s).length},
mb(a){var s,r,q,p=this
if(a<0){s=p.h2(a)
return new A.di(-1,s==null?-1:s)}else{s=p.a
if(a>=s.length){s=p.h1(a)
return new A.di(s==null?-1:s,-1)}}r=A.aeu(s,a)
s=r.b
if(s!==r.c)s=new A.di(s,s+r.gG(r).length)
else{q=p.h2(a)
s=new A.di(s,q==null?-1:q)}return s}}
A.a_5.prototype={
mb(a){var s=this.a,r=Math.max(a,0),q=s.b.D.b.a.a.LI(new A.bv(r,B.J))
s=s.a
r=s.a
s=s.b
return A.a5x(B.J,B.h.hj(q.a,r,s),B.h.hj(q.b,r,s),!1)}}
A.W6.prototype={
h1(a){return a<0?null:0},
h2(a){var s=this.a.length
return a>=s?null:s}}
A.vH.prototype={
h(a){var s,r,q=this,p=", isDirectional: "
if(!q.gkd())return"TextSelection.invalid"
s=""+q.c
r=""+q.f
return q.a===q.b?"TextSelection.collapsed(offset: "+s+", affinity: "+q.e.h(0)+p+r+")":"TextSelection(baseOffset: "+s+", extentOffset: "+q.d+p+r+")"},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof A.vH))return!1
if(!r.gkd())return!b.gkd()
if(b.c===r.c)if(b.d===r.d)s=(r.a!==r.b||b.e===r.e)&&b.f===r.f
else s=!1
else s=!1
return s},
gt(a){var s,r=this
if(!r.gkd())return A.N(-B.h.gt(1),-B.h.gt(1),A.fR(B.J),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)
s=r.a===r.b?A.fR(r.e):A.fR(B.J)
return A.N(B.h.gt(r.c),B.h.gt(r.d),s,B.l4.gt(r.f),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.a3h.prototype={
F(){return"SelectionChangedCause."+this.b}}
A.Jj.prototype={
gRy(){var s=this.c
s===$&&A.b()
return s},
qf(a){return this.VT(a)},
VT(a){var s=0,r=A.a2(t.z),q,p=2,o,n=this,m,l,k,j,i
var $async$qf=A.a3(function(b,c){if(b===1){o=c
s=p}while(true)switch(s){case 0:p=4
s=7
return A.a9(n.vL(a),$async$qf)
case 7:k=c
q=k
s=1
break
p=2
s=6
break
case 4:p=3
i=o
m=A.an(i)
l=A.aH(i)
k=A.bg("during method call "+a.a)
A.d9(new A.bs(m,l,"services library",k,new A.a5g(a),!1))
throw i
s=6
break
case 3:s=2
break
case 6:case 1:return A.a0(q,r)
case 2:return A.a_(o,r)}})
return A.a1($async$qf,r)},
vL(a){return this.Vh(a)},
Vh(a){var s=0,r=A.a2(t.z),q,p=this,o,n,m,l,k,j
var $async$vL=A.a3(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:j=a.a
if(j==="TextInputClient.focusElement"){p.f.j(0,J.b9(t.j.a(a.b),0))
s=1
break}else if(j==="TextInputClient.requestElementsInRect"){o=J.zs(t.j.a(a.b),t.fY)
n=A.n(o).i("aw<V.E,G>")
m=p.f
l=A.n(m).i("b6<1>")
k=l.i("dJ<k.E,z<@>>")
q=A.aq(new A.dJ(new A.be(new A.b6(m,l),new A.a5d(p,A.aq(new A.aw(o,new A.a5e(),n),!0,n.i("b7.E"))),l.i("be<k.E>")),new A.a5f(p),k),!0,k.i("k.E"))
s=1
break}else if(j==="TextInputClient.scribbleInteractionBegan"){s=1
break}else if(j==="TextInputClient.scribbleInteractionFinished"){s=1
break}s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$vL,r)}}
A.a5g.prototype={
$0(){var s=null
return A.a([A.hr("call",this.a,!0,B.aI,s,!1,s,s,B.ah,s,!1,!0,!0,B.be,s,t.fw)],t.E)},
$S:14}
A.a5e.prototype={
$1(a){return a},
$S:275}
A.a5d.prototype={
$1(a){this.a.f.j(0,a)
return!1},
$S:49}
A.a5f.prototype={
$1(a){var s=this.a.f.j(0,a),r=s.gxm(s)
s=[a]
B.b.L(s,[r.gfa(r),r.gA4(r),r.gbN(r),r.gbp(r)])
return s},
$S:276}
A.vG.prototype={}
A.P2.prototype={}
A.Ss.prototype={}
A.abm.prototype={
$1(a){this.a.sbR(a)
return!1},
$S:23}
A.aE.prototype={}
A.bc.prototype={
dK(a){this.b=a},
i5(a,b){this.glO()
return!0},
qb(a,b){var s=this
if(A.n(s).i("er<bc.T>").b(s))return s.i6(0,a,b)
return s.i5(0,a)},
glO(){return!0},
li(a){return!0},
A2(a,b){return this.li(a)?B.d9:B.eg},
mO(a,b){var s=this
if(A.n(s).i("er<bc.T>").b(s))return s.f7(a,b)
return s.dU(a)},
x0(a){var s=this.a
s.b=!0
s.a.push(a)
return null},
tH(a){return this.a.A(0,a)}}
A.er.prototype={
i6(a,b,c){this.MN(0,b)
return!0},
i5(a,b){return this.i6(a,b,null)}}
A.kZ.prototype={
dU(a){return this.c.$1(a)}}
A.TM.prototype={
a2X(a,b,c){if(a.qb(b,c))return new A.jb(!0,a.mO(b,c))
return B.TX}}
A.ie.prototype={
al(){return new A.w4(A.aW(t.nT),new A.D(),B.m)}}
A.TO.prototype={
$1(a){var s=a.f
s.toString
t.im.a(s)
return!1},
$S:37}
A.TR.prototype={
$1(a){var s,r=this,q=a.f
q.toString
s=A.acZ(t.im.a(q),r.b,r.d)
if(s!=null){r.c.Bk(a,null)
r.a.a=s
return!0}return!1},
$S:37}
A.TP.prototype={
$1(a){var s,r=a.f
r.toString
s=A.acZ(t.im.a(r),this.b,this.c)
if(s!=null){this.a.a=s
return!0}return!1},
$S:37}
A.TS.prototype={
$1(a){var s,r,q=this,p=a.f
p.toString
s=q.b
r=A.acZ(t.im.a(p),s,q.d)
p=r!=null
if(p&&r.qb(s,q.c)){A.agg(a)
q.a.a=r.mO(s,q.c)}return p},
$S:37}
A.w4.prototype={
aD(){this.aV()
this.Ge()},
TH(a){this.aB(new A.a6k(this))},
Ge(){var s,r,q,p,o=this,n=o.a.d
n=n.gaT(n)
s=A.iB(n,A.n(n).i("k.E"))
r=o.d.jZ(s)
n=o.d
n.toString
q=s.jZ(n)
for(n=r.ga6(r),p=o.gDN();n.u();)n.gG(n).tH(p)
for(n=q.ga6(q);n.u();)n.gG(n).x0(p)
o.d=s},
aR(a){this.b9(a)
this.Ge()},
n(){var s,r,q,p,o=this
o.aP()
for(s=o.d,s=A.fk(s,s.r),r=o.gDN(),q=A.n(s).c;s.u();){p=s.d;(p==null?q.a(p):p).tH(r)}o.d=null},
N(a){var s=this.a
return new A.w3(null,s.d,this.e,s.e,null)}}
A.a6k.prototype={
$0(){this.a.e=new A.D()},
$S:0}
A.w3.prototype={
bK(a){var s
if(this.w===a.w)s=!A.acs(a.r,this.r)
else s=!0
return s}}
A.JS.prototype={
dU(a){a.a5N()
return null}}
A.CL.prototype={
li(a){return this.c},
dU(a){}}
A.mR.prototype={}
A.n6.prototype={}
A.ht.prototype={}
A.CI.prototype={}
A.iN.prototype={}
A.Hn.prototype={
i6(a,b,c){var s,r,q,p,o,n=$.ai.an$.f.c
if(n==null||n.e==null)return!1
for(s=t.W,r=0;r<2;++r){q=B.Li[r]
p=n.e
p.toString
o=A.ad0(p,q,s)
if(o!=null&&o.qb(q,c)){this.e=o
this.f=q
return!0}}return!1},
i5(a,b){return this.i6(a,b,null)},
f7(a,b){var s,r=this.e
r===$&&A.b()
s=this.f
s===$&&A.b()
r.mO(s,b)},
dU(a){return this.f7(a,null)}}
A.OX.prototype={
Ef(a,b,c){var s
a.dK(this.gjV())
s=a.mO(b,c)
a.dK(null)
return s},
f7(a,b){var s=this,r=A.ad_(s.gt4(),A.n(s).c)
return r==null?s.a2Z(a,s.b,b):s.Ef(r,a,b)},
dU(a){return this.f7(a,null)},
glO(){var s=this,r=A.ad0(s.gt4(),null,A.n(s).c)
if(r!=null){r.dK(s.gjV())
r.glO()
r.dK(null)}else s.gjV().glO()
return!0},
i6(a,b,c){var s,r=this,q=A.ad_(r.gt4(),A.n(r).c),p=q==null
if(!p)q.dK(r.gjV())
s=(p?r.gjV():q).qb(b,c)
if(!p)q.dK(null)
return s},
i5(a,b){return this.i6(a,b,null)},
li(a){var s,r=this,q=A.ad_(r.gt4(),A.n(r).c),p=q==null
if(!p)q.dK(r.gjV())
s=(p?r.gjV():q).li(a)
if(!p)q.dK(null)
return s}}
A.xi.prototype={
Ef(a,b,c){var s
c.toString
a.dK(new A.wo(c,this.e,new A.bb(A.a([],t.B8),t.dc),this.$ti.i("wo<1>")))
s=a.mO(b,c)
a.dK(null)
return s},
a2Z(a,b,c){var s=this.e
if(b==null)return s.f7(a,c)
else return s.f7(a,c)},
gjV(){return this.e},
gt4(){return this.f}}
A.wo.prototype={
dK(a){this.d.dK(a)},
i5(a,b){return this.d.i6(0,b,this.c)},
glO(){this.d.glO()
return!0},
li(a){return this.d.li(a)},
x0(a){var s
this.MM(a)
s=this.d.a
s.b=!0
s.a.push(a)},
tH(a){this.MO(a)
this.d.a.A(0,a)},
dU(a){return this.d.f7(a,this.c)}}
A.LJ.prototype={}
A.LH.prototype={}
A.O1.prototype={}
A.yM.prototype={
dK(a){this.ML(a)
this.e.dK(a)}}
A.qb.prototype={
au(a){var s=new A.uq(this.e,!0,null,A.aj(),this.$ti.i("uq<1>"))
s.az()
s.saI(null)
return s},
aF(a,b){b.sm(0,this.e)
b.sMv(!0)}}
A.vU.prototype={
al(){return new A.yx(B.m)}}
A.yx.prototype={
gVt(){$.ai.toString
var s=$.aB()
if(s.gxH()!=="/"){$.ai.toString
s=s.gxH()}else{this.a.toString
$.ai.toString
s=s.gxH()}return s},
aD(){var s=this
s.aV()
s.Z6()
$.ai.toString
s.r=s.wq($.aB().a.f,s.a.fy)
$.ai.bx$.push(s)},
aR(a){this.b9(a)
this.Gy(a)},
n(){B.b.A($.ai.bx$,this)
var s=this.d
if(s!=null)s.n()
this.aP()},
CG(){var s=this.d
if(s!=null)s.n()
this.e=this.d=null},
Gy(a){var s,r=this
r.a.toString
if(r.gGI()){r.CG()
if(r.f==null||r.a.c!=a.c){s=r.a.c
r.f=s==null?new A.it(r,t.yh):s}}else{r.CG()
r.f=null}},
Z6(){return this.Gy(null)},
gGI(){var s=this.a
if(s.Q==null){s=s.as
s=s==null?null:s.gbD(s)
s=s===!0||this.a.d!=null||!1}else s=!0
return s},
Wk(a){var s,r=this,q=a.a,p=q==="/"&&r.a.Q!=null?new A.aaP(r):r.a.as.j(0,q)
if(p!=null)return r.a.f.$1$2(a,p,t.z)
s=r.a.d
if(s!=null)return s.$1(a)
return null},
Wy(a){return this.a.at.$1(a)},
iR(){var s=0,r=A.a2(t.y),q,p=this,o,n
var $async$iR=A.a3(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:p.a.toString
o=p.f
n=o==null?null:o.gbk()
if(n==null){q=!1
s=1
break}q=n.JT()
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$iR,r)},
nO(a){return this.a0P(a)},
a0P(a){var s=0,r=A.a2(t.y),q,p=this,o,n,m,l
var $async$nO=A.a3(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:p.a.toString
o=p.f
n=o==null?null:o.gbk()
if(n==null){q=!1
s=1
break}m=a.gio()
o=m.ghC(m).length===0?"/":m.ghC(m)
l=m.gkk()
l=l.gR(l)?null:m.gkk()
o=A.aaH(m.gj6().length===0?null:m.gj6(),o,l).gn7()
o=n.wu(A.pV(o,0,o.length,B.X,!1),null,t.X)
o.toString
o=A.ajE(o,B.Ch,!1,null)
n.e.push(o)
n.vp()
n.Cq()
q=!0
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$nO,r)},
wq(a,b){this.a.toString
return A.awb(a,b)},
xL(a){var s=this,r=s.wq(a,s.a.fy)
if(!r.k(0,s.r))s.aB(new A.aaS(s,r))},
N(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f={}
f.a=null
s=h.a
s.toString
if(h.gGI()){s=h.f
r=h.gVt()
q=h.a
p=q.e==null?A.axp():new A.aaQ(h)
o=q.ay
o.toString
f.a=A.ahj(!0,new A.tK(r,h.gWj(),h.gWx(),o,"nav",p,!0,B.I,s),"Navigator Scope",g,g)
s=q}else{s=h.a
s.toString}f.b=null
n=new A.eZ(new A.aaR(f,h),g)
f.b=n
n=A.qW(n,g,B.cO,!0,s.cy,g,g,B.aT)
f.b=n
m=g
s=h.a
r=s.CW
s=s.db
s=A.aD(255,s.gm(s)>>>16&255,s.gm(s)>>>8&255,s.gm(s)&255)
f=f.b
l=h.wq(A.a([h.a.dx],t.as),h.a.fy)
q=h.a.p3
p=A.atB()
o=A.nR($.amw(),t.n,t.nT)
k=t.B8
j=t.dc
o.l(0,B.BU,new A.xi(new A.on(new A.bb(A.a([],k),j)),a,!1,!1,!1,!1,new A.bb(A.a([],k),j),t.uq.i("xi<er.T>")))
k=A.aeg()
j=t.wv
i=A.a([],j)
B.b.L(i,h.a.dy)
i.push(B.E2)
j=A.a(i.slice(0),j)
return new A.uF(new A.v9(A.aep(new A.Cz(A.TN(o,A.ahk(new A.Je(new A.vb(new A.tb(l,j,new A.Ju(r,s,f,g),g),g),g),k)),g),"<Default WidgetsApp Shortcuts>",p),g),q,g)}}
A.aaP.prototype={
$1(a){var s=this.a.a.Q
s.toString
return s},
$S:10}
A.aaS.prototype={
$0(){this.a.r=this.b},
$S:0}
A.aaQ.prototype={
$2(a,b){return this.a.a.e.$1(b)},
$S:77}
A.aaR.prototype={
$1(a){return this.b.a.ch.$2(a,this.a.a)},
$S:10}
A.T6.prototype={}
A.mZ.prototype={
al(){return new A.w9(B.m)}}
A.w9.prototype={
aD(){this.aV()
this.Gj()},
aR(a){this.b9(a)
this.Gj()},
Gj(){this.e=new A.cC(this.gQJ(),this.a.c,null,t.dm)},
n(){var s,r,q=this.d
if(q!=null)for(q=A.iA(q,q.r);q.u();){s=q.d
r=this.d.j(0,s)
r.toString
s.I(0,r)}this.aP()},
QK(a){var s,r=this,q=a.a,p=r.d
if(p==null)p=r.d=A.y(t.yF,t.M)
p.l(0,q,r.Sb(q))
p=r.d.j(0,q)
p.toString
q.Z(0,p)
if(!r.f){r.f=!0
s=r.Dv()
if(s!=null)r.Gu(s)
else $.bL.fy$.push(new A.a6A(r))}return!1},
Dv(){var s={},r=this.c
r.toString
s.a=null
r.aO(new A.a6F(s))
return t.ot.a(s.a)},
Gu(a){var s,r
this.c.toString
s=this.f
r=this.e
r===$&&A.b()
a.Cj(t.CR.a(A.aqq(r,s)))},
Sb(a){var s=A.aR("callback"),r=new A.a6E(this,a,s)
s.sbR(r)
return r},
N(a){var s=this.f,r=this.e
r===$&&A.b()
return new A.t_(s,r,null)}}
A.a6A.prototype={
$1(a){var s,r=this.a
if(r.c==null)return
s=r.Dv()
s.toString
r.Gu(s)},
$S:2}
A.a6F.prototype={
$1(a){this.a.a=a},
$S:4}
A.a6E.prototype={
$0(){var s=this.a,r=this.b
s.d.A(0,r)
r.I(0,this.c.ak())
if(s.d.a===0)if($.bL.k1$.a<3)s.aB(new A.a6C(s))
else{s.f=!1
A.en(new A.a6D(s))}},
$S:0}
A.a6C.prototype={
$0(){this.a.f=!1},
$S:0}
A.a6D.prototype={
$0(){var s=this.a
if(s.c!=null&&s.d.a===0)s.aB(new A.a6B(s))},
$S:0}
A.a6B.prototype={
$0(){},
$S:0}
A.lx.prototype={}
A.E3.prototype={}
A.n_.prototype={
pV(){var s=new A.E3($.aV())
this.hr$=s
this.c.cS(new A.lx(s))},
p6(){var s,r=this
if(r.gtV()){if(r.hr$==null)r.pV()}else{s=r.hr$
if(s!=null){s.ar()
s.dH()
r.hr$=null}}},
N(a){if(this.gtV()&&this.hr$==null)this.pV()
return B.a2s}}
A.OM.prototype={
N(a){throw A.d(A.ns("Widgets that mix AutomaticKeepAliveClientMixin into their State must call super.build() but must ignore the return value of the superclass."))}}
A.RT.prototype={
AS(a,b){},
lU(a){A.ajL(this,new A.aaD(this,a))}}
A.aaD.prototype={
$1(a){var s=a.z
if(s!=null&&s.C(0,this.a))a.aY()},
$S:4}
A.aaC.prototype={
$1(a){A.ajL(a,this.a)},
$S:4}
A.RU.prototype={
bB(a){return new A.RT(A.hA(t.h,t.X),this,B.a0)}}
A.f2.prototype={
bK(a){return this.w!==a.w}}
A.o1.prototype={
au(a){var s=this.e
s=new A.HP(B.c.b_(A.Th(s,0,1)*255),s,!1,null,A.aj())
s.az()
s.saI(null)
return s},
aF(a,b){b.slX(0,this.e)
b.sr2(!1)}}
A.qR.prototype={
au(a){var s=new A.HE(this.e,this.f,B.a_,!1,!1,null,A.aj())
s.az()
s.saI(null)
return s},
aF(a,b){b.str(this.e)
b.sIM(this.f)
b.sty(B.a_)
b.cn=b.bb=!1},
nQ(a){a.str(null)
a.sIM(null)}}
A.na.prototype={
au(a){var s=new A.HB(null,this.f,null,A.aj())
s.az()
s.saI(null)
return s},
aF(a,b){b.snu(null)
b.sre(this.f)},
nQ(a){a.snu(null)}}
A.Ai.prototype={
au(a){var s=new A.HA(this.e,this.f,null,A.aj())
s.az()
s.saI(null)
return s},
aF(a,b){b.snu(this.e)
b.sre(this.f)},
nQ(a){a.snu(null)}}
A.Hc.prototype={
au(a){var s=this,r=new A.HR(s.e,s.r,s.w,s.y,s.x,null,s.f,null,A.aj())
r.az()
r.saI(null)
return r},
aF(a,b){var s=this
b.scN(0,s.e)
b.sre(s.f)
b.sa_c(0,s.r)
b.shn(0,s.w)
b.sao(0,s.x)
b.sdG(0,s.y)}}
A.Hd.prototype={
au(a){var s=this,r=new A.HS(s.r,s.x,s.w,s.e,s.f,null,A.aj())
r.az()
r.saI(null)
return r},
aF(a,b){var s=this
b.snu(s.e)
b.sre(s.f)
b.shn(0,s.r)
b.sao(0,s.w)
b.sdG(0,s.x)}}
A.oU.prototype={
au(a){var s=this,r=A.dG(a),q=new A.I0(s.w,null,A.aj())
q.az()
q.saI(null)
q.sbj(0,s.e)
q.sfz(s.r)
q.sbF(r)
q.slH(s.x)
q.sK6(0,null)
return q},
aF(a,b){var s=this
b.sbj(0,s.e)
b.sK6(0,null)
b.sfz(s.r)
b.sbF(A.dG(a))
b.bb=s.w
b.slH(s.x)}}
A.De.prototype={
au(a){var s=new A.us(this.e,this.f,A.dG(a),B.I,null,A.aj())
s.az()
s.saI(null)
return s},
aF(a,b){b.syo(this.e)
b.sfz(this.f)
b.sbF(A.dG(a))
if(B.I!==b.dT){b.dT=B.I
b.aj()
b.aS()}}}
A.Du.prototype={
au(a){var s=new A.HJ(this.e,this.f,null,A.aj())
s.az()
s.saI(null)
return s},
aF(a,b){b.sa5b(this.e)
b.U=this.f}}
A.fO.prototype={
au(a){var s=new A.HQ(this.e,A.dG(a),null,A.aj())
s.az()
s.saI(null)
return s},
aF(a,b){b.sdc(0,this.e)
b.sbF(A.dG(a))}}
A.kP.prototype={
au(a){var s=new A.HU(this.f,this.r,this.e,A.dG(a),null,A.aj())
s.az()
s.saI(null)
return s},
aF(a,b){b.sfz(this.e)
b.sa5o(this.f)
b.sa2q(this.r)
b.sbF(A.dG(a))}}
A.jC.prototype={}
A.qS.prototype={
au(a){var s=new A.HF(this.e,null,A.aj())
s.az()
s.saI(null)
return s},
aF(a,b){b.sxJ(this.e)}}
A.t3.prototype={
nk(a){var s,r,q=a.e
q.toString
t.DU.a(q)
s=this.f
if(q.e!==s){q.e=s
r=a.c
if(r instanceof A.w)r.a4()}}}
A.qQ.prototype={
au(a){var s=new A.HD(this.e,0,null,null,A.aj())
s.az()
s.L(0,null)
return s},
aF(a,b){b.sxJ(this.e)}}
A.vf.prototype={
au(a){return A.aiu(A.n4(this.f,this.e))},
aF(a,b){b.sH_(A.n4(this.f,this.e))},
bS(){var s,r=this,q=r.e
if(q===1/0&&r.f===1/0)s="SizedBox.expand"
else s=q===0&&r.f===0?"SizedBox.shrink":"SizedBox"
q=r.a
return q==null?s:s+"-"+q.h(0)}}
A.fw.prototype={
au(a){return A.aiu(this.e)},
aF(a,b){b.sH_(this.e)}}
A.Ed.prototype={
au(a){var s=new A.HM(this.e,this.f,null,A.aj())
s.az()
s.saI(null)
return s},
aF(a,b){b.sa3C(0,this.e)
b.sa3A(0,this.f)}}
A.tR.prototype={
au(a){var s=new A.HO(this.e,null,A.aj())
s.az()
s.saI(null)
return s},
aF(a,b){b.stg(this.e)},
bB(a){return new A.OS(this,B.a0)}}
A.OS.prototype={}
A.zL.prototype={
au(a){var s=new A.Hy(this.e,null,A.aj())
s.az()
s.saI(null)
return s},
aF(a,b){b.sa_0(0,this.e)}}
A.vp.prototype={
au(a){var s=A.dG(a)
s=new A.uz(this.e,s,this.r,this.w,A.aj(),0,null,null,A.aj())
s.az()
s.L(0,null)
return s},
aF(a,b){var s
b.sfz(this.e)
s=A.dG(a)
b.sbF(s)
s=this.r
if(b.a8!==s){b.a8=s
b.a4()}s=this.w
if(s!==b.b5){b.b5=s
b.aj()
b.aS()}}}
A.lV.prototype={
nk(a){var s,r,q,p=this,o=a.e
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
if(q instanceof A.w)q.a4()}}}
A.Hk.prototype={
N(a){var s=this,r=a.ap(t.I)
r.toString
return A.arM(s.f,s.x,null,null,s.c,r.w,s.d,s.r)}}
A.rw.prototype={
gWe(){switch(this.e.a){case 0:return!0
case 1:var s=this.w
return s===B.bd||s===B.EI}},
u_(a){var s=this.x
s=this.gWe()?A.dG(a):null
return s},
au(a){var s=this
return A.asa(B.I,s.w,s.e,s.f,s.r,s.z,s.u_(a),s.y)},
aF(a,b){var s=this,r=s.e
if(b.D!==r){b.D=r
b.a4()}r=s.f
if(b.K!==r){b.K=r
b.a4()}r=s.r
if(b.M!==r){b.M=r
b.a4()}r=s.w
if(b.a1!==r){b.a1=r
b.a4()}r=s.u_(a)
if(b.a8!=r){b.a8=r
b.a4()}r=s.y
if(b.b5!==r){b.b5=r
b.a4()}if(B.I!==b.c6){b.c6=B.I
b.aj()
b.aS()}}}
A.Ia.prototype={}
A.Aq.prototype={}
A.Dh.prototype={
nk(a){var s,r,q,p=a.e
p.toString
t.uc.a(p)
s=this.f
if(p.e!==s){p.e=s
r=!0}else r=!1
s=this.r
if(p.f!==s){p.f=s
r=!0}if(r){q=a.c
if(q instanceof A.w)q.a4()}}}
A.D9.prototype={}
A.I4.prototype={
au(a){var s,r,q,p=this,o=null,n=p.r
if(n==null){n=a.ap(t.I)
n.toString
n=n.w}s=p.x
r=A.adW(a)
q=s===B.ca?"\u2026":o
s=new A.uv(A.a5i(q,r,p.z,p.as,p.e,p.f,n,p.ax,p.y,p.at),p.w,s,p.ch,!1,0,o,o,A.aj())
s.az()
s.L(0,o)
s.soP(p.ay)
return s},
aF(a,b){var s,r=this
b.soV(0,r.e)
b.szW(0,r.f)
s=r.r
if(s==null){s=a.ap(t.I)
s.toString
s=s.w}b.sbF(s)
b.sMx(r.w)
b.sa3Z(0,r.x)
b.szX(r.y)
b.sz4(r.z)
b.sMG(r.as)
b.szZ(r.at)
b.sKS(r.ax)
s=A.adW(a)
b.sz0(0,s)
b.soP(r.ay)
b.sMa(r.ch)}}
A.Hr.prototype={
au(a){var s=this,r=s.d
r=r==null?null:r.cG(0)
r=new A.HK(r,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.CW,!1,null,!1,A.aj())
r.az()
r.YV()
return r},
aF(a,b){var s=this,r=s.d
b.sfP(0,r==null?null:r.cG(0))
b.a1=s.e
b.sbN(0,s.f)
b.sbp(0,s.r)
b.sM1(0,s.w)
b.sao(0,s.x)
b.slX(0,s.y)
b.sa_H(s.Q)
b.syo(s.as)
b.sfz(s.at)
b.sa4J(0,s.ax)
b.sa_o(s.ay)
b.sa3y(!1)
b.sbF(null)
b.syP(s.CW)
b.syR(!1)
b.slH(s.z)},
nQ(a){a.sfP(0,null)}}
A.Ef.prototype={
au(a){var s=this,r=null,q=new A.HT(s.e,r,s.r,r,s.x,s.y,r,r,s.as,s.at,r,A.aj())
q.az()
q.saI(r)
return q},
aF(a,b){var s=this
b.cz=s.e
b.e7=null
b.cq=s.r
b.cr=null
b.c4=s.x
b.ev=s.y
b.a1a=b.fL=null
b.Io=s.as
b.v=s.at}}
A.tz.prototype={
au(a){var s=this
return A.asc(s.w,null,s.e,s.r,s.f,!0)},
aF(a,b){var s,r=this
b.e7=r.e
b.cq=r.f
b.cr=r.r
s=r.w
if(!b.c4.k(0,s)){b.c4=s
b.aj()}if(b.v!==B.ai){b.v=B.ai
b.aj()}}}
A.fV.prototype={
au(a){var s=new A.HW(null,A.aj())
s.az()
s.saI(null)
return s}}
A.nA.prototype={
au(a){var s=new A.ut(this.e,null,null,A.aj())
s.az()
s.saI(null)
return s},
aF(a,b){b.sJf(this.e)
b.syK(null)}}
A.zy.prototype={
au(a){var s=new A.uo(!1,null,null,A.aj())
s.az()
s.saI(null)
return s},
aF(a,b){b.sGP(!1)
b.syK(null)}}
A.v5.prototype={
au(a){var s=this,r=new A.ux(s.e,s.f,s.r,!1,!1,s.DJ(a),null,A.aj())
r.az()
r.saI(null)
r.Gg(r.v)
return r},
DJ(a){var s,r=this.e,q=r.p4
if(q!=null)return q
if(r.fx==null){r=r.p2!=null
s=r}else s=!0
if(!s)return null
return A.dG(a)},
aF(a,b){var s=this
b.sa_S(s.f)
b.sa19(s.r)
b.sa17(!1)
b.sa_a(!1)
b.sKi(s.e)
b.sbF(s.DJ(a))}}
A.Gh.prototype={
au(a){var s=new A.HN(null,A.aj())
s.az()
s.saI(null)
return s}}
A.A_.prototype={
au(a){var s=new A.Hz(!0,null,A.aj())
s.az()
s.saI(null)
return s},
aF(a,b){b.sa_b(!0)}}
A.rl.prototype={
au(a){var s=new A.HI(this.e,null,A.aj())
s.az()
s.saI(null)
return s},
aF(a,b){b.sa18(this.e)}}
A.rR.prototype={
au(a){var s=new A.HL(this.e,null,A.aj())
s.az()
s.saI(null)
return s},
aF(a,b){b.syL(0,this.e)}}
A.iz.prototype={
N(a){return this.c}}
A.eZ.prototype={
N(a){return this.c.$1(a)}}
A.qA.prototype={
au(a){var s=new A.xp(this.e,B.ai,null,A.aj())
s.az()
s.saI(null)
return s},
aF(a,b){t.lD.a(b).sao(0,this.e)}}
A.xp.prototype={
sao(a,b){if(b.k(0,this.cz))return
this.cz=b
this.aj()},
aE(a,b){var s,r,q,p,o=this,n=o.gq(o)
if(n.a>0&&n.b>0){n=a.gbA(a)
s=o.gq(o)
r=b.a
q=b.b
p=$.at().bd()
p.sao(0,o.cz)
n.cm(new A.A(r,q,r+s.a,q+s.b),p)}n=o.B$
if(n!=null)a.eD(n,b)}}
A.aaU.prototype={
$1(a){var s=a==null?t.K.a(a):a
return this.a.j8(s)},
$S:285}
A.d2.prototype={
iR(){return A.ct(!1,t.y)},
nO(a){var s=a.gio(),r=s.ghC(s).length===0?"/":s.ghC(s),q=s.gkk()
q=q.gR(q)?null:s.gkk()
r=A.aaH(s.gj6().length===0?null:s.gj6(),r,q).gn7()
A.pV(r,0,r.length,B.X,!1)
return A.ct(!1,t.y)},
rn(){},
HW(){},
HV(){},
xL(a){},
HU(a){},
xS(){var s=0,r=A.a2(t.ac),q
var $async$xS=A.a3(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:q=B.jy
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$xS,r)}}
A.vV.prototype={
ZC(a){return this.bx$.push(a)},
rP(){var s=0,r=A.a2(t.ac),q,p=this,o,n,m,l
var $async$rP=A.a3(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:o=p.bx$,n=o.length,m=!1,l=0
case 3:if(!(l<o.length)){s=5
break}s=6
return A.a9(o[l].xS(),$async$rP)
case 6:if(b===B.jz)m=!0
case 4:o.length===n||(0,A.J)(o),++l
s=3
break
case 5:q=m?B.jz:B.jy
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$rP,r)},
a1I(){this.a0U($.aB().a.f)},
a0U(a){var s,r,q
for(s=this.bx$,r=s.length,q=0;q<s.length;s.length===r||(0,A.J)(s),++q)s[q].xL(a)},
rN(){var s=0,r=A.a2(t.H),q,p=this,o,n,m
var $async$rN=A.a3(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:o=A.aq(p.bx$,!0,t.j5),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.a9(o[m].iR(),$async$rN)
case 6:if(b){s=1
break}case 4:++m
s=3
break
case 5:A.a4D()
case 1:return A.a0(q,r)}})
return A.a1($async$rN,r)},
rO(a){return this.a1V(a)},
a1V(a){var s=0,r=A.a2(t.H),q,p=this,o,n,m,l
var $async$rO=A.a3(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:l=new A.m_(A.oZ(a,0,null),null)
o=A.aq(p.bx$,!0,t.j5),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.a9(o[m].nO(l),$async$rO)
case 6:if(c){s=1
break}case 4:++m
s=3
break
case 5:case 1:return A.a0(q,r)}})
return A.a1($async$rO,r)},
q6(a){return this.US(a)},
US(a){var s=0,r=A.a2(t.H),q,p=this,o,n,m,l
var $async$q6=A.a3(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:m=J.aI(a)
l=new A.m_(A.oZ(A.bQ(m.j(a,"location")),0,null),m.j(a,"state"))
m=A.aq(p.bx$,!0,t.j5),o=m.length,n=0
case 3:if(!(n<o)){s=5
break}s=6
return A.a9(m[n].nO(l),$async$q6)
case 6:if(c){s=1
break}case 4:++n
s=3
break
case 5:case 1:return A.a0(q,r)}})
return A.a1($async$q6,r)},
Uw(a){switch(a.a){case"popRoute":return this.rN()
case"pushRoute":return this.rO(A.bQ(a.b))
case"pushRouteInformation":return this.q6(t.f.a(a.b))}return A.ct(null,t.z)},
TU(){this.y7()},
M2(a){A.cl(B.t,new A.a6f(this,a))},
$iab:1,
$idg:1}
A.aaT.prototype={
$1(a){var s,r,q=$.bL
q.toString
s=this.a
r=s.a
r.toString
q.KA(r)
s.a=null
this.b.f4$.fE(0)},
$S:92}
A.a6f.prototype={
$0(){var s,r,q=this.a,p=q.dS$
q.ex$=!0
s=q.av$
s===$&&A.b()
s=s.e
s.toString
r=q.an$
r.toString
q.dS$=new A.lY(this.b,s,"[root]",new A.it(s,t.By),t.go).a_2(r,t.jv.a(p))
if(p==null)$.bL.y7()},
$S:0}
A.lY.prototype={
bB(a){return new A.ka(this,B.a0,this.$ti.i("ka<1>"))},
au(a){return this.d},
aF(a,b){},
a_2(a,b){var s,r={}
r.a=b
if(b==null){a.JO(new A.a1S(r,this,a))
s=r.a
s.toString
a.r7(s,new A.a1T(r))}else{b.p2=this
b.fT()}r=r.a
r.toString
return r},
bS(){return this.e}}
A.a1S.prototype={
$0(){var s=this.b,r=A.asd(s,s.$ti.c)
this.a.a=r
r.r=this.c},
$S:0}
A.a1T.prototype={
$0(){var s=this.a.a
s.toString
s.BQ(null,null)
s.qu()},
$S:0}
A.ka.prototype={
aO(a){var s=this.p1
if(s!=null)a.$1(s)},
i2(a){this.p1=null
this.jy(a)},
eC(a,b){this.BQ(a,b)
this.qu()},
b1(a,b){this.kI(0,b)
this.qu()},
hD(){var s=this,r=s.p2
if(r!=null){s.p2=null
s.kI(0,s.$ti.i("lY<1>").a(r))
s.qu()}s.BJ()},
qu(){var s,r,q,p,o,n,m,l=this
try{o=l.p1
n=l.f
n.toString
l.p1=l.cE(o,l.$ti.i("lY<1>").a(n).c,B.hp)}catch(m){s=A.an(m)
r=A.aH(m)
o=A.bg("attaching to the render tree")
q=new A.bs(s,r,"widgets library",o,null,!1)
A.d9(q)
p=A.Xi(q)
l.p1=l.cE(null,p,B.hp)}},
ga2(){return this.$ti.i("ax<1>").a(A.bl.prototype.ga2.call(this))},
i4(a,b){var s=this.$ti
s.i("ax<1>").a(A.bl.prototype.ga2.call(this)).saI(s.c.a(a))},
ia(a,b,c){},
jl(a,b){this.$ti.i("ax<1>").a(A.bl.prototype.ga2.call(this)).saI(null)}}
A.JU.prototype={$iab:1}
A.xu.prototype={
eC(a,b){this.pE(a,b)}}
A.yy.prototype={
ey(){this.MQ()
$.e6=this
var s=$.aB()
s.Q=this.gUD()
s.as=$.ag},
A7(){this.MT()
this.vr()}}
A.yz.prototype={
ey(){this.PZ()
$.bL=this},
kc(){this.MR()}}
A.yA.prototype={
ey(){var s,r=this
r.Q0()
$.fa=r
r.c6$!==$&&A.fo()
r.c6$=B.DU
s=new A.uD(A.aW(t.hp),$.aV())
B.iB.mh(s.gW6())
r.bV$=s
r.Vs()
s=$.ahH
if(s==null)s=$.ahH=A.a([],t.e8)
s.push(r.gQN())
B.Cw.uf(new A.aaU(r))
B.Cv.uf(r.gUp())
B.bA.mh(r.gUB())
$.amg()
r.a4q()
r.rW()},
kc(){this.Q1()}}
A.yB.prototype={
ey(){this.Q2()
$.fP=this
var s=t.K
this.iV$=new A.Z8(A.y(s,t.BL),A.y(s,t.lM),A.y(s,t.s8))},
oe(){this.OX()
var s=this.iV$
s===$&&A.b()
s.T(0)},
j8(a){return this.a2a(a)},
a2a(a){var s=0,r=A.a2(t.H),q,p=this
var $async$j8=A.a3(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:s=3
return A.a9(p.OY(a),$async$j8)
case 3:switch(A.bQ(J.b9(t.a.a(a),"type"))){case"fontsChange":p.yg$.ar()
break}s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$j8,r)}}
A.yC.prototype={
ey(){var s,r,q=this
q.Q5()
$.a3j=q
s=$.aB()
q.ye$=s.a.a
s.p2=q.gV4()
r=$.ag
s.p3=r
s.p4=q.gV2()
s.R8=r
q.DZ()}}
A.yD.prototype={
ey(){var s,r,q,p,o=this
o.Q6()
$.I2=o
s=t.c
o.av$=new A.u8(o.gV5(),o.gV9(),o.gV7(),A.a([],s),A.a([],s),A.a([],s),A.aW(t.aP),A.aW(t.EQ))
s=$.aB()
s.f=o.ga1K()
r=s.r=$.ag
s.go=o.ga2j()
s.id=r
s.k3=o.ga1Q()
s.k4=r
r=o.HL()
s=s.d.j(0,0)
s.toString
s=new A.I1(B.a_,r,s,null,A.aj())
s.az()
s.saI(null)
r=o.av$
r===$&&A.b()
r.sa4T(s)
s=o.av$.e
s.Q=s
A.X.prototype.gbE.call(s).r.push(s)
r=s.Gt()
s.ch.saG(0,r)
A.X.prototype.gbE.call(s).Q.push(s)
o.fx$.push(o.gUz())
o.a2I()
o.fy$.push(o.gVm())
s=o.av$
q=o.aN$
if(q===$){p=new A.M1(o,$.aV())
o.gqD().Z(0,p.gdW())
o.aN$!==$&&A.b1()
o.aN$=p
q=p}s.af(q)},
kc(){this.Q3()},
ih(){var s=0,r=A.a2(t.H),q=[],p=this,o
var $async$ih=A.a3(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:s=2
return A.a9(p.MS(),$async$ih)
case 2:try{o=p.av$
o===$&&A.b()
o.e.eE()}finally{}p.u8()
s=3
return A.a9(p.gIk(),$async$ih)
case 3:return A.a0(null,r)}})
return A.a1($async$ih,r)}}
A.yE.prototype={
yx(){var s,r,q
this.Ot()
for(s=this.bx$,r=s.length,q=0;q<s.length;s.length===r||(0,A.J)(s),++q)s[q].rn()},
yE(){var s,r,q
this.Ov()
for(s=this.bx$,r=s.length,q=0;q<s.length;s.length===r||(0,A.J)(s),++q)s[q].HW()},
yz(){var s,r,q
this.Ou()
for(s=this.bx$,r=s.length,q=0;q<s.length;s.length===r||(0,A.J)(s),++q)s[q].HV()},
yu(a){var s,r,q
this.OK(a)
for(s=this.bx$,r=s.length,q=0;q<s.length;s.length===r||(0,A.J)(s),++q)s[q].HU(a)},
oe(){var s,r
this.Q4()
for(s=this.bx$.length,r=0;r<s;++r);},
y3(){var s,r,q,p=this,o={}
o.a=null
if(p.fN$){s=new A.aaT(o,p)
o.a=s
r=$.bL
q=r.ch$
q.push(s)
if(q.length===1){q=$.aB()
q.ay=r.gSQ()
q.ch=$.ag}}try{r=p.dS$
if(r!=null)p.an$.a_g(r)
p.Os()
p.an$.a1d()}finally{}r=p.fN$=!1
o=o.a
if(o!=null)r=!(p.cI$||p.bL$===0)
if(r){p.fN$=!0
r=$.bL
r.toString
o.toString
r.KA(o)}},
ih(){var s=this.dS$
if(s!=null)this.an$.a4v(s,null)
return this.Q9()}}
A.Cq.prototype={
au(a){var s=new A.HG(this.e,this.f,A.afo(a,null),null,A.aj())
s.az()
s.saI(null)
return s},
aF(a,b){b.sa0B(this.e)
b.sxt(A.afo(a,null))
b.sbr(0,this.f)}}
A.At.prototype={
gWC(){var s,r=this.r
if(r==null)return this.e
s=r.gdc(r)
r=this.e
if(r==null)return s
return r.H(0,s)},
N(a){var s,r,q=this,p=null,o=q.c
if(o==null){s=q.x
if(s!=null)s=!(s.a>=s.b&&s.c>=s.d)
else s=!0}else s=!1
if(s)o=new A.Ed(0,0,new A.fw(B.jH,p,p),p)
else{s=q.d
if(s!=null)o=new A.kP(s,p,p,o,p)}r=q.gWC()
if(r!=null)o=new A.fO(r,o,p)
s=q.f
if(s!=null)o=new A.qA(s,o,p)
s=q.r
if(s!=null)o=A.agJ(o,s,B.hB)
s=q.x
if(s!=null)o=new A.fw(s,o,p)
s=q.y
if(s!=null)o=new A.fO(s,o,p)
o.toString
return o}}
A.jF.prototype={
bK(a){return!J.e(this.w,a.w)||!J.e(this.x,a.x)||!J.e(this.y,a.y)}}
A.VG.prototype={
$1(a){var s=a.ap(t.mA)
if(s==null)s=B.eb
return A.adl(this.e,s.w,this.a,this.d,s.x)},
$S:286}
A.ON.prototype={
N(a){throw A.d(A.ns("A DefaultSelectionStyle constructed with DefaultSelectionStyle.fallback cannot be incorporated into the widget tree, it is meant only to provide a fallback value returned by DefaultSelectionStyle.of() when no enclosing default selection style is present in a BuildContext."))}}
A.Cz.prototype={
Tq(){return $.alY()},
N(a){var s=A.aep(this.c,"<Web Disabling Text Editing Shortcuts>",this.Tq())
return A.aep(s,"<Default Text Editing Shortcuts>",A.ap4())}}
A.CJ.prototype={
gaL(a){var s=this.a
if(s==null)return null
s=s.c
s.toString
return s}}
A.nj.prototype={
al(){return new A.wu(A.Ho(null),A.Ho(null),B.m)},
a1p(a,b,c){return this.d.$3(a,b,c)},
a4Q(a,b,c){return this.e.$3(a,b,c)}}
A.wu.prototype={
aD(){var s,r=this
r.aV()
s=r.a.c
r.d=s.gaU(s)
r.a.c.d3(r.guK())
r.Gf()},
Cf(a){var s,r=this,q=r.d
q===$&&A.b()
s=r.Rp(a,q)
r.d=s
if(q!==s)r.Gf()},
aR(a){var s,r,q=this
q.b9(a)
s=a.c
if(s!==q.a.c){r=q.guK()
s.c2(r)
q.a.c.d3(r)
r=q.a.c
q.Cf(r.gaU(r))}},
Rp(a,b){switch(a.a){case 0:case 3:return a
case 1:switch(b.a){case 0:case 3:case 1:return a
case 2:return b}break
case 2:switch(b.a){case 0:case 3:case 2:return a
case 1:return b}break}},
Gf(){var s=this,r=s.d
r===$&&A.b()
switch(r.a){case 0:case 1:s.e.sc9(0,s.a.c)
s.f.sc9(0,B.ci)
break
case 2:case 3:s.e.sc9(0,B.d2)
s.f.sc9(0,new A.eN(s.a.c,new A.bb(A.a([],t.A),t.Q),0))
break}},
n(){this.a.c.c2(this.guK())
this.aP()},
N(a){var s=this.a
return s.a1p(a,this.e,s.a4Q(a,this.f,s.f))}}
A.jR.prototype={
F(){return"KeyEventResult."+this.b}}
A.LZ.prototype={}
A.XJ.prototype={
ac(a){var s,r=this.a
if(r.ax===this){if(!r.gj9()){s=r.w
s=s!=null&&s.e===r}else s=!0
if(s)r.A6(B.BW)
s=r.w
if(s!=null){if(s.c===r)s.c=null
s.d.A(0,r)}s=r.Q
if(s!=null)s.Xj(0,r)
r.ax=null}},
zP(a){var s,r=this.a
if(r.ax===this){s=r.e
s.toString
a=A.adD(s,!0,!0);(a==null?r.e.r.f.b:a).wk(r)}},
KB(){return this.zP(null)}}
A.JE.prototype={
F(){return"UnfocusDisposition."+this.b}}
A.cb.prototype={
geG(){var s,r,q
if(this.a)return!0
for(s=this.gfA(),r=s.length,q=0;q<r;++q)s[q].toString
return!1},
seG(a){var s,r=this
if(a!==r.a){r.a=a
s=r.w
if(s!=null){s.qi()
s.d.H(0,r)}}},
gcl(){var s,r,q,p
if(!this.b)return!1
s=this.gdN()
if(s!=null&&!s.gcl())return!1
for(r=this.gfA(),q=r.length,p=0;p<q;++p)r[p].toString
return!0},
scl(a){var s,r=this
if(a!==r.b){r.b=a
if(r.gkb()&&!a)r.A6(B.BW)
s=r.w
if(s!=null){s.qi()
s.d.H(0,r)}}},
slm(a){return},
sln(a){},
gnI(){var s,r,q,p,o=this.y
if(o==null){s=A.a([],t.b)
for(o=this.as,r=o.length,q=0;q<o.length;o.length===r||(0,A.J)(o),++q){p=o[q]
B.b.L(s,p.gnI())
s.push(p)}this.y=s
o=s}return o},
gp_(){var s=this.gnI()
return new A.be(s,new A.XL(),A.am(s).i("be<1>"))},
gfA(){var s,r,q=this.x
if(q==null){s=A.a([],t.b)
r=this.Q
for(;r!=null;){s.push(r)
r=r.Q}this.x=s
q=s}return q},
gkb(){if(!this.gj9()){var s=this.w
if(s==null)s=null
else{s=s.c
s=s==null?null:B.b.C(s.gfA(),this)}s=s===!0}else s=!0
return s},
gj9(){var s=this.w
return(s==null?null:s.c)===this},
gke(){return this.gdN()},
gdN(){var s,r,q,p
for(s=this.gfA(),r=s.length,q=0;q<r;++q){p=s[q]
if(p instanceof A.lh)return p}return null},
gaw(a){var s,r=this.e.ga2(),q=r.bt(0,null),p=r.gju(),o=A.cj(q,new A.p(p.a,p.b))
p=r.bt(0,null)
q=r.gju()
s=A.cj(p,new A.p(q.c,q.d))
return new A.A(o.a,o.b,s.a,s.b)},
A6(a){var s,r,q=this
if(!q.gkb()){s=q.w
s=s==null||s.e!==q}else s=!1
if(s)return
r=q.gdN()
if(r==null)return
switch(a.a){case 0:if(r.gcl())B.b.T(r.fr)
for(;!r.gcl();){r=r.gdN()
if(r==null){s=q.w
r=s==null?null:s.b}}r.iB(!1)
break
case 1:if(r.gcl())B.b.A(r.fr,q)
for(;!r.gcl();){s=r.gdN()
if(s!=null)B.b.A(s.fr,r)
r=r.gdN()
if(r==null){s=q.w
r=s==null?null:s.b}}r.iB(!0)
break}},
L7(){return this.A6(B.a_v)},
Eq(a){var s=this,r=s.w
if(r!=null){if(r.c===s)r.e=null
else{r.e=s
r.qi()}return}a.l_()
a.w4()
if(a!==s)s.w4()},
F0(a,b,c){var s,r,q
if(c){s=b.gdN()
if(s!=null)B.b.A(s.fr,b)}b.Q=null
B.b.A(this.as,b)
for(s=this.gfA(),r=s.length,q=0;q<r;++q)s[q].y=null
this.y=null},
Xj(a,b){return this.F0(a,b,!0)},
Z0(a){var s,r,q,p
this.w=a
for(s=this.gnI(),r=s.length,q=0;q<r;++q){p=s[q]
p.w=a
p.x=null}},
wk(a){var s,r,q,p,o,n=this
if(a.Q===n)return
s=a.gdN()
r=a.gkb()
q=a.Q
if(q!=null)q.F0(0,a,s!=n.gke())
n.as.push(a)
a.Q=n
a.x=null
a.Z0(n.w)
for(q=a.gfA(),p=q.length,o=0;o<p;++o)q[o].y=null
if(r){q=n.w
if(q!=null){q=q.c
if(q!=null)q.l_()}}if(s!=null&&a.e!=null&&a.gdN()!==s){q=a.e
q.toString
q=A.Do(q)
if(q!=null)q.xo(a,s)}if(a.ay){a.iB(!0)
a.ay=!1}},
n(){var s=this.ax
if(s!=null)s.ac(0)
this.dH()},
w4(){var s=this
if(s.Q==null)return
if(s.gj9())s.l_()
s.ar()},
zR(){this.iB(!0)},
iB(a){var s,r=this
if(!r.gcl())return
if(r.Q==null){r.ay=!0
return}r.l_()
if(r.gj9()){s=r.w.e
s=s==null||s===r}else s=!1
if(s)return
r.Eq(r)},
l_(){var s,r,q,p,o,n
for(s=B.b.ga6(this.gfA()),r=new A.p1(s,t.oj),q=t.nR,p=this;r.u();p=o){o=q.a(s.gG(s))
n=o.fr
B.b.A(n,p)
n.push(p)}},
bS(){var s,r,q,p=this
p.gkb()
s=p.gkb()&&!p.gj9()?"[IN FOCUS PATH]":""
r=s+(p.gj9()?"[PRIMARY FOCUS]":"")
s=A.b4(p)
q=r.length!==0?"("+r+")":""
return"<optimized out>#"+s+q},
$ia5:1}
A.XL.prototype={
$1(a){return!a.geG()&&a.gcl()},
$S:7}
A.lh.prototype={
gke(){return this},
gp_(){if(!this.gcl())return B.CZ
return A.cb.prototype.gp_.call(this)},
pq(a){if(a.Q==null)this.wk(a)
if(this.gkb())a.iB(!0)
else a.l_()},
iB(a){var s,r,q=this,p=q.fr
while(!0){if((p.length!==0?B.b.gS(p):null)!=null)s=!(p.length!==0?B.b.gS(p):null).gcl()
else s=!1
if(!s)break
p.pop()}r=p.length!==0?B.b.gS(p):null
if(!a||r==null){if(q.gcl()){q.l_()
q.Eq(q)}return}r.iB(!0)}}
A.jG.prototype={
F(){return"FocusHighlightMode."+this.b}}
A.XK.prototype={
F(){return"FocusHighlightStrategy."+this.b}}
A.rA.prototype={
qi(){if(this.r)return
this.r=!0
A.en(this.gR3())},
R4(){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.r=!1
s=h.c
for(r=h.f,q=r.length,p=h.b,o=0;o<r.length;r.length===q||(0,A.J)(r),++o){n=r[o]
m=n.a
if(m.Q!=null||m===p)if(m.w===h){l=m.fr
m=(l.length!==0?B.b.gS(l):null)==null&&B.b.C(n.b.gfA(),m)
k=m}else k=!1
else k=!1
if(k)n.b.iB(!0)}B.b.T(r)
r=h.c
if(r==null&&h.e==null)h.e=p
q=h.e
if(q!=null&&q!==r){if(s==null)j=null
else{r=s.gfA()
r=A.Ee(r,A.am(r).c)
j=r}if(j==null)j=A.aW(t.V)
r=h.e.gfA()
i=A.Ee(r,A.am(r).c)
r=h.d
r.L(0,i.jZ(j))
r.L(0,j.jZ(i))
r=h.c=h.e
h.e=null}if(s!=r){if(s!=null)h.d.H(0,s)
r=h.c
if(r!=null)h.d.H(0,r)}for(r=h.d,q=A.fk(r,r.r),p=A.n(q).c;q.u();){m=q.d;(m==null?p.a(m):m).w4()}r.T(0)
if(s!=h.c)h.ar()},
$ia5:1}
A.NL.prototype={
ar(){var s,r,q,p,o,n,m,l,k=this.d,j=k.a
if(j.a===0)return
p=A.aq(k,!0,t.tP)
for(k=p.length,o=0;o<k;++o){s=p[o]
try{if(j.X(0,s)){n=this.b
if(n==null)n=A.NM()
s.$1(n)}}catch(m){r=A.an(m)
q=A.aH(m)
n=A.bg("while dispatching notifications for "+A.v(this).h(0))
l=$.fq()
if(l!=null)l.$1(new A.bs(r,q,"widgets library",n,null,!1))}}},
yA(a){var s,r,q=this
switch(a.gc_(a).a){case 0:case 2:case 3:q.a=!0
s=B.hI
break
case 1:case 4:case 5:q.a=!1
s=B.ed
break
default:s=null}r=q.b
if(s!==(r==null?A.NM():r))q.Lc()},
a1F(a){var s,r,q,p,o,n,m,l,k,j
this.a=!1
this.Lc()
s=$.ai.an$.f.c
if(s==null)return!1
s=A.a([s],t.b)
B.b.L(s,$.ai.an$.f.c.gfA())
q=s.length
p=t.zj
o=a.b
n=o!=null
m=0
$label0$1:while(!0){if(!(m<s.length)){r=!1
break}c$1:c$label0$1:{l=s[m]
k=A.a([],p)
j=l.f
if(j!=null&&n)k.push(j.$2(l,o))
switch(A.awl(k).a){case 1:break c$label0$1
case 0:r=!0
break
case 2:r=!1
break
default:r=!1}break $label0$1}s.length===q||(0,A.J)(s);++m}return r},
Lc(){var s,r,q,p=this
switch(0){case 0:s=p.a
if(s==null)return
r=s?B.hI:B.ed
break}q=p.b
if(q==null)q=A.NM()
p.b=r
if((r==null?A.NM():r)!==q)p.ar()}}
A.Ns.prototype={}
A.Nt.prototype={}
A.Nu.prototype={}
A.Nv.prototype={}
A.lg.prototype={
gK1(){var s=this.w,r=this.e
s=r==null?null:r.r
return s},
gzn(){var s=this.x
if(s==null){s=this.e
s=s==null?null:s.f}return s},
gcl(){var s=this.y
if(s==null){s=this.e
s=s==null?null:s.gcl()}return s!==!1},
geG(){var s=this.z
if(s==null){s=this.e
s=s==null?null:s.geG()}return s===!0},
glm(){var s=this.Q
if(s==null)s=this.e!=null||null
return s!==!1},
gln(){var s=this.as
if(s==null)s=this.e!=null||null
return s!==!1},
gll(){var s=this.ax
if(s==null){s=this.e
s=s==null?null:s.at}return s},
al(){return A.atN()}}
A.pk.prototype={
gbC(a){var s=this.a.e
if(s==null){s=this.d
s.toString}return s},
aD(){this.aV()
this.E7()},
E7(){var s,r,q,p=this
if(p.a.e==null)if(p.d==null)p.d=p.CZ()
s=p.gbC(p)
p.a.glm()
s.slm(!0)
s=p.gbC(p)
p.a.gln()
s.sln(!0)
p.gbC(p).seG(p.a.geG())
if(p.a.y!=null){s=p.gbC(p)
r=p.a.y
r.toString
s.scl(r)}p.f=p.gbC(p).gcl()
p.gbC(p)
p.r=!0
p.gbC(p)
p.w=!0
p.e=p.gbC(p).gj9()
s=p.gbC(p)
r=p.c
r.toString
p.a.gK1()
q=p.a.gzn()
s.e=r
s.f=q==null?s.f:q
r=s.r
s.r=r
p.y=s.ax=new A.XJ(s)
p.gbC(p).Z(0,p.gvF())},
CZ(){var s=this,r=s.a.gll(),q=s.a.gcl()
s.a.glm()
s.a.gln()
return A.ahi(q,r,!0,!0,null,null,s.a.geG())},
n(){var s,r=this
r.gbC(r).I(0,r.gvF())
r.y.ac(0)
s=r.d
if(s!=null)s.n()
r.aP()},
aY(){this.cj()
var s=this.y
if(s!=null)s.KB()
this.DP()},
DP(){var s,r,q,p=this
if(!p.x&&p.a.f){s=p.c
s.toString
s=A.aq3(s)
r=p.gbC(p)
if(r.Q==null)s.wk(r)
q=s.w
if(q!=null)q.f.push(new A.LZ(s,r))
s=s.w
if(s!=null)s.qi()
p.x=!0}},
cR(){this.pI()
var s=this.y
if(s!=null)s.KB()
this.x=!1},
aR(a){var s,r,q=this
q.b9(a)
s=a.e
r=q.a
if(s==r.e){if(!J.e(r.gzn(),q.gbC(q).f))q.gbC(q).f=q.a.gzn()
q.a.gK1()
q.gbC(q)
q.gbC(q).seG(q.a.geG())
if(q.a.y!=null){s=q.gbC(q)
r=q.a.y
r.toString
s.scl(r)}s=q.gbC(q)
q.a.glm()
s.slm(!0)
s=q.gbC(q)
q.a.gln()
s.sln(!0)}else{q.y.ac(0)
if(s!=null)s.I(0,q.gvF())
q.E7()}if(a.f!==q.a.f)q.DP()},
Uj(){var s,r=this,q=r.gbC(r).gj9(),p=r.gbC(r).gcl()
r.gbC(r)
r.gbC(r)
s=r.a.r
if(s!=null)s.$1(r.gbC(r).gkb())
s=r.e
s===$&&A.b()
if(s!==q)r.aB(new A.a7s(r,q))
s=r.f
s===$&&A.b()
if(s!==p)r.aB(new A.a7t(r,p))
s=r.r
s===$&&A.b()
if(!s)r.aB(new A.a7u(r,!0))
s=r.w
s===$&&A.b()
if(!s)r.aB(new A.a7v(r,!0))},
N(a){var s,r,q=this,p=null,o=q.y
o.toString
o.zP(q.a.c)
o=q.a
s=o.d
if(o.at){o=q.f
o===$&&A.b()
r=q.e
r===$&&A.b()
s=A.dO(p,s,!1,p,!1,o,r,p,p,p,p,p,p,p,p,p,p,p,p,p,p)}return A.ajt(s,q.gbC(q))}}
A.a7s.prototype={
$0(){this.a.e=this.b},
$S:0}
A.a7t.prototype={
$0(){this.a.f=this.b},
$S:0}
A.a7u.prototype={
$0(){this.a.r=this.b},
$S:0}
A.a7v.prototype={
$0(){this.a.w=this.b},
$S:0}
A.Dn.prototype={
al(){return new A.Nw(B.m)}}
A.Nw.prototype={
CZ(){var s=this.a.gll()
return A.adB(this.a.gcl(),s,this.a.geG())},
N(a){var s=this,r=null,q=s.y
q.toString
q.zP(s.a.c)
q=s.gbC(s)
return A.dO(r,A.ajt(s.a.d,q),!1,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)}}
A.wA.prototype={}
A.abk.prototype={
$1(a){var s=this.a
if(--s.a===0){s.b=a
return!1}return!0},
$S:23}
A.pl.prototype={}
A.ko.prototype={
F(){return"TraversalDirection."+this.b}}
A.JB.prototype={
F(){return"TraversalEdgeBehavior."+this.b}}
A.Dp.prototype={
Dm(a,b,c){var s,r=a.gke(),q=r.fr,p=q.length!==0?B.b.gS(q):null
q=p==null&&r.gnI().length!==0
if(q){s=this.FM(r,a)
if(s.length===0)p=null
else p=b?B.b.gS(s):B.b.gJ(s)}return p==null?a:p},
T3(a,b){return this.Dm(a,!1,b)},
a2W(a){},
xo(a,b){},
T2(a,b){var s,r,q,p,o,n,m,l,k,j=b==null?null:b.dy
if(j==null)j=A.aeg()
s=A.y(t.k_,t.hF)
for(r=a.gnI(),q=r.length,p=t.b,o=0;o<r.length;r.length===q||(0,A.J)(r),++o){n=r[o]
m=A.XM(n)
if(J.e(n,m)){l=m.Q
l.toString
k=A.XM(l)
if(s.j(0,k)==null)s.l(0,k,A.aju(k,j,A.a([],p)))
s.j(0,k).c.push(m)
continue}if(n.gcl()&&!n.geG()){if(s.j(0,m)==null)s.l(0,m,A.aju(m,j,A.a([],p)))
s.j(0,m).c.push(n)}}return s},
FM(a,b){var s,r,q,p,o=A.XM(a),n=this.T2(a,o)
for(s=A.iA(n,n.r);s.u();){r=s.d
q=n.j(0,r).b.My(n.j(0,r).c,b)
q=A.a(q.slice(0),A.am(q))
B.b.T(n.j(0,r).c)
B.b.L(n.j(0,r).c,q)}p=A.a([],t.b)
if(n.a!==0&&n.X(0,o)){s=n.j(0,o)
s.toString
new A.XO(n,p).$1(s)}if(!!p.fixed$length)A.a6(A.W("removeWhere"))
B.b.wj(p,new A.XN(),!0)
return p},
Ex(a,b){var s,r,q,p,o,n,m=this,l=a.gke()
l.toString
m.kF(l)
m.o6$.A(0,l)
s=l.fr
r=s.length!==0?B.b.gS(s):null
if(r==null){q=b?m.T3(a,!1):m.Dm(a,!0,!1)
l=b?B.c6:B.c7
m.a.$2$alignmentPolicy(q,l)
return!0}p=m.FM(l,a)
if(p.length===0)return!1
if(b&&r===B.b.gS(p))switch(l.dy.a){case 1:r.L7()
return!1
case 0:m.a.$2$alignmentPolicy(B.b.gJ(p),B.c6)
return!0}if(!b&&r===B.b.gJ(p))switch(l.dy.a){case 1:r.L7()
return!1
case 0:m.a.$2$alignmentPolicy(B.b.gS(p),B.c7)
return!0}for(l=J.ao(b?p:new A.cY(p,A.am(p).i("cY<1>"))),o=null;l.u();o=n){n=l.gG(l)
if(o==r){l=b?B.c6:B.c7
m.a.$2$alignmentPolicy(n,l)
return!0}}return!1}}
A.XO.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=a.c,r=s.length,q=this.b,p=this.a,o=0;o<s.length;s.length===r||(0,A.J)(s),++o){n=s[o]
if(p.X(0,n)){m=p.j(0,n)
m.toString
this.$1(m)}else q.push(n)}},
$S:289}
A.XN.prototype={
$1(a){return!a.gcl()||a.geG()},
$S:7}
A.pg.prototype={}
A.MX.prototype={}
A.VP.prototype={
a1f(a,b){var s=this
switch(b){case B.b7:return s.qF(a,!1,!0)
case B.b9:return s.qF(a,!0,!0)
case B.ba:return s.qF(a,!1,!1)
case B.b8:return s.qF(a,!0,!1)}},
qF(a,b,c){var s=a.gke().gp_().dB(0)
A.jr(s,new A.VX(c,b),t.V)
if(s.length!==0)return B.b.gJ(s)
return null},
Yp(a,b,c){var s,r
switch(a){case B.ba:s=c.h0(0,new A.VR(b))
break
case B.b8:s=c.h0(0,new A.VS(b))
break
case B.b7:case B.b9:throw A.d(A.cr("Invalid direction "+A.h(a),null))
default:s=null}r=s.dB(0)
A.jr(r,new A.VT(),t.V)
return r},
Yq(a,b,c){var s,r
switch(a){case B.b7:s=c.h0(0,new A.VU(b))
break
case B.b9:s=c.h0(0,new A.VV(b))
break
case B.ba:case B.b8:throw A.d(A.cr("Invalid direction "+A.h(a),null))
default:s=null}r=s.dB(0)
A.jr(r,new A.VW(),t.V)
return r},
X2(a,b,c){var s,r,q=this,p=q.o6$,o=p.j(0,b),n=o!=null
if(n){s=o.a
if(s.length!==0){B.b.gJ(s)
s=!0}else s=!1}else s=!1
if(s){s=o.a
if(B.b.gS(s).b.Q==null){q.kF(b)
p.A(0,b)
return!1}r=new A.VQ(q,o,b)
switch(a){case B.b9:case B.b7:switch(B.b.gJ(s).a){case B.ba:case B.b8:q.kF(b)
p.A(0,b)
break
case B.b7:case B.b9:if(r.$1(a))return!0
break}break
case B.ba:case B.b8:switch(B.b.gJ(s).a){case B.ba:case B.b8:if(r.$1(a))return!0
break
case B.b7:case B.b9:q.kF(b)
p.A(0,b)
break}break}}if(n&&o.a.length===0){q.kF(b)
p.A(0,b)}return!1},
a2E(a,b){var s,r,q,p,o,n,m,l,k=this,j=null,i=a.gke(),h=i.fr,g=h.length!==0?B.b.gS(h):j
if(g==null){s=k.a1f(a,b)
if(s==null)s=a
switch(b){case B.b7:case B.ba:k.a.$2$alignmentPolicy(s,B.c7)
break
case B.b8:case B.b9:k.a.$2$alignmentPolicy(s,B.c6)
break}return!0}if(k.X2(b,i,g))return!0
h=g.e
h.toString
r=A.h_(h)
switch(b){case B.b9:case B.b7:q=k.Yq(b,g.gaw(g),i.gp_())
if(q.length===0){p=j
break}if(r!=null&&!r.d.gH9()){o=new A.be(q,new A.W1(r),A.am(q).i("be<1>"))
if(!o.gR(o))q=o}n=J.age(q,new A.W2(new A.A(g.gaw(g).a,-1/0,g.gaw(g).c,1/0)))
if(!n.gR(n)){p=B.b.gJ(A.apb(g.gaw(g).gaK(),n))
break}p=B.b.gJ(A.apc(g.gaw(g).gaK(),q))
break
case B.b8:case B.ba:q=k.Yp(b,g.gaw(g),i.gp_())
if(q.length===0){p=j
break}if(r!=null&&!r.d.gH9()){o=new A.be(q,new A.W3(r),A.am(q).i("be<1>"))
if(!o.gR(o))q=o}n=J.age(q,new A.W4(new A.A(-1/0,g.gaw(g).b,1/0,g.gaw(g).d)))
if(!n.gR(n)){p=B.b.gJ(A.apa(g.gaw(g).gaK(),n))
break}p=B.b.gJ(A.apd(g.gaw(g).gaK(),q))
break
default:p=j}if(p!=null){h=k.o6$
m=h.j(0,i)
l=new A.pg(b,g)
if(m!=null)m.a.push(l)
else h.l(0,i,new A.MX(A.a([l],t.gE)))
switch(b){case B.b7:case B.ba:k.a.$2$alignmentPolicy(p,B.c7)
break
case B.b9:case B.b8:k.a.$2$alignmentPolicy(p,B.c6)
break}return!0}return!1}}
A.a9m.prototype={
$1(a){return a.b===this.a},
$S:290}
A.VX.prototype={
$2(a,b){if(this.a)if(this.b)return B.c.aW(a.gaw(a).b,b.gaw(b).b)
else return B.c.aW(b.gaw(b).d,a.gaw(a).d)
else if(this.b)return B.c.aW(a.gaw(a).a,b.gaw(b).a)
else return B.c.aW(b.gaw(b).c,a.gaw(a).c)},
$S:21}
A.VZ.prototype={
$2(a,b){var s=a.gaw(a).gaK(),r=b.gaw(b).gaK(),q=this.a,p=A.adp(q,s,r)
if(p===0)return A.ado(q,s,r)
return p},
$S:21}
A.VY.prototype={
$2(a,b){var s=a.gaw(a).gaK(),r=b.gaw(b).gaK(),q=this.a,p=A.ado(q,s,r)
if(p===0)return A.adp(q,s,r)
return p},
$S:21}
A.W_.prototype={
$2(a,b){var s,r,q,p=this.a,o=a.gaw(a),n=b.gaw(b),m=o.a,l=p.a,k=o.c
m=Math.abs(m-l)<Math.abs(k-l)?m:k
s=n.a
r=n.c
s=Math.abs(s-l)<Math.abs(r-l)?s:r
q=B.c.aW(Math.abs(m-l),Math.abs(s-l))
if(q===0)return A.adp(p,a.gaw(a).gaK(),b.gaw(b).gaK())
return q},
$S:21}
A.W0.prototype={
$2(a,b){var s,r,q,p=this.a,o=a.gaw(a),n=b.gaw(b),m=o.b,l=p.b,k=o.d
m=Math.abs(m-l)<Math.abs(k-l)?m:k
s=n.b
r=n.d
s=Math.abs(s-l)<Math.abs(r-l)?s:r
q=B.c.aW(Math.abs(m-l),Math.abs(s-l))
if(q===0)return A.ado(p,a.gaw(a).gaK(),b.gaw(b).gaK())
return q},
$S:21}
A.VR.prototype={
$1(a){var s=this.a
return!a.gaw(a).k(0,s)&&a.gaw(a).gaK().a<=s.a},
$S:7}
A.VS.prototype={
$1(a){var s=this.a
return!a.gaw(a).k(0,s)&&a.gaw(a).gaK().a>=s.c},
$S:7}
A.VT.prototype={
$2(a,b){return B.c.aW(a.gaw(a).gaK().a,b.gaw(b).gaK().a)},
$S:21}
A.VU.prototype={
$1(a){var s=this.a
return!a.gaw(a).k(0,s)&&a.gaw(a).gaK().b<=s.b},
$S:7}
A.VV.prototype={
$1(a){var s=this.a
return!a.gaw(a).k(0,s)&&a.gaw(a).gaK().b>=s.d},
$S:7}
A.VW.prototype={
$2(a,b){return B.c.aW(a.gaw(a).gaK().b,b.gaw(b).gaK().b)},
$S:21}
A.VQ.prototype={
$1(a){var s,r,q=this,p=q.b.a.pop().b,o=p.e
o.toString
o=A.h_(o)
s=$.ai.an$.f.c.e
s.toString
if(o!=A.h_(s)){o=q.a
s=q.c
o.kF(s)
o.o6$.A(0,s)
return!1}switch(a){case B.b7:case B.ba:r=B.c7
break
case B.b8:case B.b9:r=B.c6
break
default:r=null}q.a.a.$2$alignmentPolicy(p,r)
return!0},
$S:292}
A.W1.prototype={
$1(a){var s=a.e
s.toString
return A.h_(s)===this.a},
$S:7}
A.W2.prototype={
$1(a){var s=a.gaw(a).ea(this.a)
return!s.gR(s)},
$S:7}
A.W3.prototype={
$1(a){var s=a.e
s.toString
return A.h_(s)===this.a},
$S:7}
A.W4.prototype={
$1(a){var s=a.gaw(a).ea(this.a)
return!s.gR(s)},
$S:7}
A.cH.prototype={
gHZ(){var s=this.d
if(s==null){s=this.c.e
s.toString
s=this.d=new A.a9k().$1(s)}s.toString
return s}}
A.a9j.prototype={
$1(a){var s=a.gHZ()
return A.Ee(s,A.am(s).c)},
$S:293}
A.a9l.prototype={
$2(a,b){switch(this.a.a){case 1:return B.c.aW(a.b.a,b.b.a)
case 0:return B.c.aW(b.b.c,a.b.c)}},
$S:106}
A.a9k.prototype={
$1(a){var s,r,q=A.a([],t.AG),p=t.I,o=a.hL(p)
for(;o!=null;){s=o.f
s.toString
q.push(p.a(s))
s=A.avh(o)
if(s==null)o=null
else{s=s.y
r=s==null?null:s.j(0,A.aX(p))
o=r}}return q},
$S:295}
A.i0.prototype={
gaw(a){var s,r,q,p,o=this
if(o.b==null)for(s=o.a,s=new A.aw(s,new A.a9h(),A.am(s).i("aw<1,A>")),s=new A.fK(s,s.gp(s)),r=A.n(s).c;s.u();){q=s.d
if(q==null)q=r.a(q)
p=o.b
if(p==null){o.b=q
p=q}o.b=p.lw(q)}s=o.b
s.toString
return s}}
A.a9h.prototype={
$1(a){return a.b},
$S:296}
A.a9i.prototype={
$2(a,b){switch(this.a.a){case 1:return B.c.aW(a.gaw(a).a,b.gaw(b).a)
case 0:return B.c.aW(b.gaw(b).c,a.gaw(a).c)}},
$S:297}
A.a1E.prototype={
RW(a){var s,r,q,p,o,n=B.b.gJ(a).a,m=t.hY,l=A.a([],m),k=A.a([],t.Ci)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.J)(a),++r){q=a[r]
p=q.a
if(p==n){l.push(q)
continue}k.push(new A.i0(l))
l=A.a([q],m)
n=p}if(l.length!==0)k.push(new A.i0(l))
for(m=k.length,r=0;r<k.length;k.length===m||(0,A.J)(k),++r){s=k[r].a
if(s.length===1)continue
o=B.b.gJ(s).a
o.toString
A.ajD(s,o)}return k},
ER(a){var s,r,q,p
A.jr(a,new A.a1F(),t.dP)
s=B.b.gJ(a)
r=new A.a1G().$2(s,a)
if(J.bk(r)<=1)return s
q=A.au3(r)
q.toString
A.ajD(r,q)
p=this.RW(r)
if(p.length===1)return B.b.gJ(B.b.gJ(p).a)
A.au2(p,q)
return B.b.gJ(B.b.gJ(p).a)},
My(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a.length<=1)return a
s=A.a([],t.hY)
for(r=a.length,q=t.n2,p=t.I,o=0;o<a.length;a.length===r||(0,A.J)(a),++o){n=a[o]
m=n.gaw(n)
l=n.e.y
k=l==null?null:l.j(0,A.aX(p))
if(k==null)l=null
else{l=k.f
l.toString}q.a(l)
s.push(new A.cH(l==null?null:l.w,m,n))}j=A.a([],t.b)
i=this.ER(s)
j.push(i.c)
B.b.A(s,i)
for(;s.length!==0;){h=this.ER(s)
j.push(h.c)
B.b.A(s,h)}return j}}
A.a1F.prototype={
$2(a,b){return B.c.aW(a.b.b,b.b.b)},
$S:106}
A.a1G.prototype={
$2(a,b){var s=a.b,r=A.am(b).i("be<1>")
return A.aq(new A.be(b,new A.a1H(new A.A(-1/0,s.b,1/0,s.d)),r),!0,r.i("k.E"))},
$S:298}
A.a1H.prototype={
$1(a){var s=a.b.ea(this.a)
return!s.gR(s)},
$S:299}
A.rB.prototype={
al(){return new A.Nx(B.m)}}
A.wB.prototype={}
A.Nx.prototype={
gbC(a){var s,r,q,p=this,o=p.d
if(o===$){s=p.a.c
r=A.a([],t.b)
q=$.aV()
p.d!==$&&A.b1()
o=p.d=new A.wB(s,!1,!0,!0,!0,null,null,r,q)}return o},
n(){this.gbC(this).n()
this.aP()},
aR(a){var s=this
s.b9(a)
if(a.c!==s.a.c)s.gbC(s).dy=s.a.c},
N(a){var s=null,r=this.gbC(this)
return A.Dm(!1,!1,this.a.f,s,!0,!0,r,!1,s,s,s,s,s,!0)}}
A.I3.prototype={
dU(a){a.a68(a.gbC(a))}}
A.lG.prototype={}
A.Gx.prototype={
dU(a){var s=$.ai.an$.f.c,r=s.e
r.toString
return A.Do(r).Ex(s,!0)},
A2(a,b){return b?B.d9:B.eg}}
A.lW.prototype={}
A.Hl.prototype={
dU(a){var s=$.ai.an$.f.c,r=s.e
r.toString
return A.Do(r).Ex(s,!1)},
A2(a,b){return b?B.d9:B.eg}}
A.CG.prototype={
dU(a){var s=$.ai.an$.f.c,r=s.e
r.toString
A.Do(r).a2E(s,a.a)}}
A.Ny.prototype={}
A.PK.prototype={
xo(a,b){var s
this.Nh(a,b)
s=this.o6$.j(0,b)
if(s!=null){s=s.a
if(!!s.fixed$length)A.a6(A.W("removeWhere"))
B.b.wj(s,new A.a9m(a),!0)}}}
A.Sv.prototype={}
A.Sw.prototype={}
A.e7.prototype={
gbk(){var s,r=$.ai.an$.z.j(0,this)
if(r instanceof A.fb){s=r.ok
s.toString
if(A.n(this).c.b(s))return s}return null}}
A.by.prototype={
h(a){var s=this,r=s.a,q=r!=null?" "+r:""
if(A.v(s)===B.a_7)return"[GlobalKey#"+A.b4(s)+q+"]"
return"["+("<optimized out>#"+A.b4(s))+q+"]"}}
A.it.prototype={
k(a,b){if(b==null)return!1
if(J.L(b)!==A.v(this))return!1
return this.$ti.b(b)&&b.a===this.a},
gt(a){return A.q3(this.a)},
h(a){var s="GlobalObjectKey",r=B.d.a11(s,"<State<StatefulWidget>>")?B.d.ae(s,0,-8):s
return"["+r+" "+("<optimized out>#"+A.b4(this.a))+"]"}}
A.i.prototype={
bS(){var s=this.a
return s==null?"Widget":"Widget-"+s.h(0)},
k(a,b){if(b==null)return!1
return this.NW(0,b)},
gt(a){return A.D.prototype.gt.call(this,this)}}
A.aQ.prototype={
bB(a){return new A.J1(this,B.a0)}}
A.a8.prototype={
bB(a){return A.asU(this)}}
A.aa6.prototype={
F(){return"_StateLifecycle."+this.b}}
A.af.prototype={
ga5n(){var s=this.a
s.toString
return s},
gaL(a){var s=this.c
s.toString
return s},
aD(){},
aR(a){},
eE(){},
aB(a){a.$0()
this.c.fT()},
cR(){},
bY(){},
n(){},
aY(){}}
A.aG.prototype={}
A.dc.prototype={
bB(a){return new A.lJ(this,B.a0,A.n(this).i("lJ<dc.T>"))}}
A.aY.prototype={
bB(a){return A.aqj(this)}}
A.ar.prototype={
aF(a,b){},
nQ(a){}}
A.Ea.prototype={
bB(a){return new A.E9(this,B.a0)}}
A.aU.prototype={
bB(a){return new A.vc(this,B.a0)}}
A.ec.prototype={
bB(a){return A.ar6(this)}}
A.pj.prototype={
F(){return"_ElementLifecycle."+this.b}}
A.NX.prototype={
Gd(a){a.aO(new A.a81(this,a))
a.p0()},
YR(){var s,r,q,p=this
p.a=!0
r=p.b
q=A.aq(r,!0,A.n(r).c)
B.b.dh(q,A.ac5())
s=q
r.T(0)
try{r=s
new A.cY(r,A.bf(r).i("cY<1>")).Y(0,p.gYP())}finally{p.a=!1}}}
A.a81.prototype={
$1(a){this.a.Gd(a)},
$S:4}
A.Uz.prototype={
AN(a){var s=this
if(a.at){s.e=!0
return}if(!s.d&&s.a!=null){s.d=!0
s.a.$0()}s.c.push(a)
a.at=!0},
JO(a){try{a.$0()}finally{}},
r7(a,b){var s,r,q,p,o,n,m,l,k,j=this,i={},h=b==null
if(h&&j.c.length===0)return
try{j.d=!0
if(!h){i.a=null
j.e=!1
try{b.$0()}finally{}}h=j.c
B.b.dh(h,A.ac5())
j.e=!1
i.b=h.length
i.c=0
for(o=0;o<i.b;){s=h[o]
try{s.Kq()}catch(n){r=A.an(n)
q=A.aH(n)
o=A.bg("while rebuilding dirty elements")
m=$.fq()
if(m!=null)m.$1(new A.bs(r,q,"widgets library",o,new A.UA(i,j,s),!1))}o=++i.c
m=i.b
l=h.length
if(m>=l){m=j.e
m.toString}else m=!0
if(m){if(!!h.immutable$list)A.a6(A.W("sort"))
o=l-1
if(o-0<=32)A.IU(h,0,o,A.ac5())
else A.IT(h,0,o,A.ac5())
o=j.e=!1
i.b=h.length
while(!0){m=i.c
if(!(m>0?h[m-1].as:o))break
i.c=m-1}o=m}}}finally{for(h=j.c,o=h.length,k=0;k<o;++k){p=h[k]
p.at=!1}B.b.T(h)
j.d=!1
j.e=null}},
a_g(a){return this.r7(a,null)},
a1d(){var s,r,q
try{this.JO(this.b.gYQ())}catch(q){s=A.an(q)
r=A.aH(q)
A.aff(A.rj("while finalizing the widget tree"),s,r,null)}finally{}},
a4v(a,b){try{a.b=b
a.eE()}finally{}}}
A.UA.prototype={
$0(){var s=null,r=A.a([],t.E),q=this.a,p=q.c,o=this.b.c.length,n="The element being rebuilt at the time was index "+p
q=""+q.b
if(p<o)J.fr(r,A.hr(n+" of "+q,this.c,!0,B.aI,s,!1,s,s,B.ah,s,!1,!0,!0,B.be,s,t.h))
else J.fr(r,A.D5(n+" of "+q+", but _dirtyElements only had "+o+" entries. This suggests some confusion in the framework internals."))
return r},
$S:14}
A.tM.prototype={
xf(){var s=this.a
this.c=new A.a8Z(this,s==null?null:s.c)}}
A.a8Z.prototype={
cS(a){var s=this.a.K2(a)
if(s)return
s=this.b
if(s!=null)s.cS(a)}}
A.aJ.prototype={
k(a,b){if(b==null)return!1
return this===b},
eE(){var s=this
if(A.akk(s.b,s.f)){s.fT()
s.b=null}s.aO(new A.WG(s))
s.b=null},
ga2(){var s,r
for(s=this;s!=null;){r={}
if(s.w===B.C5)break
else if(s instanceof A.bl)return s.ga2()
else{r.a=null
s.aO(new A.WH(r))
s=r.a}}return null},
a0L(a){var s=null,r=A.a([],t.E),q=A.a([],t.pX)
this.m9(new A.WE(q))
r.push(A.hr("The specific widget that could not find a "+a.h(0)+" ancestor was",this,!0,B.aI,s,!1,s,s,B.ah,s,!1,!0,!0,B.be,s,t.h))
if(q.length!==0)r.push(A.apJ("The ancestors of this widget were",q))
else r.push(A.bg('This widget is the root of the tree, so it has no ancestors, let alone a "'+a.h(0)+'" ancestor.'))
return r},
a0K(a){var s=null
return A.hr(a,this,!0,B.aI,s,!1,s,s,B.ah,s,!1,!0,!0,B.be,s,t.h)},
aO(a){},
cE(a,b,c){var s,r,q=this
if(b==null){if(a!=null)q.xF(a)
return null}if(a!=null){s=a.f.k(0,b)
if(s){if(!J.e(a.d,c))q.Lf(a,c)
s=a}else{s=a.f
s.toString
if(A.v(s)===A.v(b)&&J.e(s.a,b.a)){if(!J.e(a.d,c))q.Lf(a,c)
a.b1(0,b)
s=a}else{q.xF(a)
r=q.rV(b,c)
s=r}}}else{r=q.rV(b,c)
s=r}return s},
a5h(a1,a2,a3){var s,r,q,p,o,n,m,l,k=this,j=null,i=new A.WI(a3),h=new A.WJ(j),g=a2.length,f=g-1,e=a1.length-1,d=t.h,c=A.b_(g,$.afQ(),!1,d),b=j,a=0,a0=0
while(!0){if(!(a0<=e&&a<=f))break
s=i.$1(a1[a0])
r=a2[a]
if(s!=null){g=s.f
g.toString
g=!(A.v(g)===A.v(r)&&J.e(g.a,r.a))}else g=!0
if(g)break
g=k.cE(s,r,h.$2(a,b))
g.toString
c[a]=g;++a;++a0
b=g}q=e
while(!0){p=a0<=q
if(!(p&&a<=f))break
s=i.$1(a1[q])
r=a2[f]
if(s!=null){g=s.f
g.toString
g=!(A.v(g)===A.v(r)&&J.e(g.a,r.a))}else g=!0
if(g)break;--q;--f}if(p){o=A.y(t.qI,d)
for(;a0<=q;){s=i.$1(a1[a0])
if(s!=null){g=s.f.a
if(g!=null)o.l(0,g,s)
else{s.a=null
s.nK()
g=k.r.b
if(s.w===B.cd){s.cR()
s.aO(A.ac6())}g.b.H(0,s)}}++a0}p=!0}else o=j
for(;a<=f;b=g){r=a2[a]
if(p){n=r.a
if(n!=null){s=o.j(0,n)
if(s!=null){g=s.f
g.toString
if(A.v(g)===A.v(r)&&J.e(g.a,n))o.A(0,n)
else s=j}}else s=j}else s=j
g=k.cE(s,r,h.$2(a,b))
g.toString
c[a]=g;++a}f=a2.length-1
while(!0){if(!(a0<=e&&a<=f))break
g=k.cE(a1[a0],a2[a],h.$2(a,b))
g.toString
c[a]=g;++a;++a0
b=g}if(p&&o.a!==0)for(g=o.gaT(o),g=new A.dK(J.ao(g.a),g.b),d=A.n(g).z[1];g.u();){m=g.a
if(m==null)m=d.a(m)
if(!a3.C(0,m)){m.a=null
m.nK()
l=k.r.b
if(m.w===B.cd){m.cR()
m.aO(A.ac6())}l.b.H(0,m)}}return c},
eC(a,b){var s,r,q,p=this
p.a=a
p.d=b
p.w=B.cd
s=a!=null
if(s){r=a.e
r===$&&A.b();++r}else r=1
p.e=r
if(s)p.r=a.r
q=p.f.a
if(q instanceof A.e7)p.r.z.l(0,q,p)
p.wN()
p.xf()},
b1(a,b){this.f=b},
Lf(a,b){new A.WK(b).$1(a)},
wS(a){this.d=a},
Gn(a){var s=a+1,r=this.e
r===$&&A.b()
if(r<s){this.e=s
this.aO(new A.WB(s))}},
nK(){this.aO(new A.WF())
this.d=null},
r4(a){this.aO(new A.WC(a))
this.d=a},
XA(a,b){var s,r,q=$.ai.an$.z.j(0,a)
if(q==null)return null
s=q.f
s.toString
if(!(A.v(s)===A.v(b)&&J.e(s.a,b.a)))return null
r=q.a
if(r!=null){r.i2(q)
r.xF(q)}this.r.b.b.A(0,q)
return q},
rV(a,b){var s,r,q,p,o,n,m=this
try{s=a.a
if(s instanceof A.e7){r=m.XA(s,a)
if(r!=null){o=r
o.a=m
o.toString
n=m.e
n===$&&A.b()
o.Gn(n)
o.bY()
o.aO(A.ali())
o.r4(b)
q=m.cE(r,a,b)
o=q
o.toString
return o}}p=a.bB(0)
p.eC(m,b)
return p}finally{}},
xF(a){var s
a.a=null
a.nK()
s=this.r.b
if(a.w===B.cd){a.cR()
a.aO(A.ac6())}s.b.H(0,a)},
i2(a){},
bY(){var s=this,r=s.z,q=r==null,p=!q&&r.a!==0||s.Q
s.w=B.cd
if(!q)r.T(0)
s.Q=!1
s.wN()
s.xf()
if(s.as)s.r.AN(s)
if(p)s.aY()},
cR(){var s,r,q=this,p=q.z
if(p!=null&&p.a!==0)for(p=new A.j7(p,p.kN()),s=A.n(p).c;p.u();){r=p.d;(r==null?s.a(r):r).aN.A(0,q)}q.y=null
q.w=B.a1W},
p0(){var s=this,r=s.f,q=r==null?null:r.a
if(q instanceof A.e7){r=s.r.z
if(J.e(r.j(0,q),s))r.A(0,q)}s.z=s.f=null
s.w=B.C5},
gq(a){var s=this.ga2()
if(s instanceof A.B)return s.gq(s)
return null},
jW(a,b){var s=this.z;(s==null?this.z=A.cv(t.tx):s).H(0,a)
a.L9(this,b)
s=a.f
s.toString
return t.sg.a(s)},
HS(a){return this.jW(a,null)},
ap(a){var s=this.y,r=s==null?null:s.j(0,A.aX(a))
if(r!=null)return a.a(this.jW(r,null))
this.Q=!0
return null},
u0(a){var s=this.hL(a)
if(s==null)s=null
else{s=s.f
s.toString}return a.i("0?").a(s)},
hL(a){var s=this.y
return s==null?null:s.j(0,A.aX(a))},
xf(){var s=this.a
this.c=s==null?null:s.c},
wN(){var s=this.a
this.y=s==null?null:s.y},
IA(a){var s,r,q=this.a
while(!0){s=q==null
if(!s){r=q.f
r.toString
r=A.v(r)!==A.aX(a)}else r=!1
if(!r)break
q=q.a}if(s)s=null
else{s=q.f
s.toString}return a.i("0?").a(s)},
rK(a){var s,r,q=this.a
for(;s=q==null,!s;){if(q instanceof A.fb){r=q.ok
r.toString
r=a.b(r)}else r=!1
if(r)break
q=q.a}t.Cj.a(q)
if(s)s=null
else{s=q.ok
s.toString}return a.i("0?").a(s)},
rJ(a){var s=this.a
for(;s!=null;){if(s instanceof A.bl&&a.b(s.ga2()))return a.a(s.ga2())
s=s.a}return null},
m9(a){var s=this.a
while(!0){if(!(s!=null&&a.$1(s)))break
s=s.a}},
aY(){this.fT()},
cS(a){var s=this.c
if(s!=null)s.cS(a)},
bS(){var s=this.f
s=s==null?null:s.bS()
return s==null?"<optimized out>#"+A.b4(this)+"(DEFUNCT)":s},
fT(){var s=this
if(s.w!==B.cd)return
if(s.as)return
s.as=!0
s.r.AN(s)},
tE(a){var s
if(this.w===B.cd)s=!this.as&&!a
else s=!0
if(s)return
try{this.hD()}finally{}},
Kq(){return this.tE(!1)},
hD(){this.as=!1},
$iaa:1}
A.WG.prototype={
$1(a){a.b=this.a.b
a.eE()},
$S:4}
A.WH.prototype={
$1(a){this.a.a=a},
$S:4}
A.WE.prototype={
$1(a){this.a.push(a)
return!0},
$S:23}
A.WD.prototype={
$1(a){var s=null
return A.hr("",a,!0,B.aI,s,!1,s,s,B.ah,s,!1,!0,!0,B.hD,s,t.h)},
$S:300}
A.WI.prototype={
$1(a){var s=this.a.C(0,a)
return s?null:a},
$S:301}
A.WJ.prototype={
$2(a,b){return new A.nH(b,a,t.wx)},
$S:302}
A.WK.prototype={
$1(a){a.wS(this.a)
if(!(a instanceof A.bl))a.aO(this)},
$S:4}
A.WB.prototype={
$1(a){a.Gn(this.a)},
$S:4}
A.WF.prototype={
$1(a){a.nK()},
$S:4}
A.WC.prototype={
$1(a){a.r4(this.a)},
$S:4}
A.D7.prototype={
au(a){var s=this.d,r=new A.HH(s,A.aj())
r.az()
r.QB(s)
return r}}
A.qB.prototype={
eC(a,b){this.Bm(a,b)
this.vm()},
vm(){this.Kq()},
hD(){var s,r,q,p,o,n,m=this,l=null
try{l=m.aQ()
m.f.toString}catch(o){s=A.an(o)
r=A.aH(o)
n=A.Xi(A.aff(A.bg("building "+m.h(0)),s,r,new A.Vi()))
l=n}finally{m.uu()}try{m.ay=m.cE(m.ay,l,m.d)}catch(o){q=A.an(o)
p=A.aH(o)
n=A.Xi(A.aff(A.bg("building "+m.h(0)),q,p,new A.Vj()))
l=n
m.ay=m.cE(null,l,m.d)}},
aO(a){var s=this.ay
if(s!=null)a.$1(s)},
i2(a){this.ay=null
this.jy(a)}}
A.Vi.prototype={
$0(){var s=A.a([],t.E)
return s},
$S:14}
A.Vj.prototype={
$0(){var s=A.a([],t.E)
return s},
$S:14}
A.J1.prototype={
aQ(){var s=this.f
s.toString
return t.yB.a(s).N(this)},
b1(a,b){this.pA(0,b)
this.tE(!0)}}
A.fb.prototype={
aQ(){return this.ok.N(this)},
eE(){var s=this
if(A.akk(s.b,s.f))s.ok.eE()
s.Ne()},
vm(){this.ok.aD()
this.ok.aY()
this.N_()},
hD(){var s=this
if(s.p1){s.ok.aY()
s.p1=!1}s.N0()},
b1(a,b){var s,r,q,p=this
p.pA(0,b)
s=p.ok
r=s.a
r.toString
q=p.f
q.toString
s.a=t.aw.a(q)
s.aR(r)
p.tE(!0)},
bY(){this.Bi()
this.ok.bY()
this.fT()},
cR(){this.ok.cR()
this.Bj()},
p0(){var s=this
s.uv()
s.ok.n()
s.ok=s.ok.c=null},
jW(a,b){return this.Bk(a,b)},
HS(a){return this.jW(a,null)},
aY(){this.Nd()
this.p1=!0}}
A.uf.prototype={
aQ(){var s=this.f
s.toString
return t.kc.a(s).b},
b1(a,b){var s=this,r=s.f
r.toString
t.kc.a(r)
s.pA(0,b)
s.Af(r)
s.tE(!0)},
Af(a){this.lU(a)}}
A.lJ.prototype={
Cj(a){this.aO(new A.a0D(a))},
lU(a){var s=this.f
s.toString
this.Cj(this.$ti.i("dc<1>").a(s))}}
A.a0D.prototype={
$1(a){if(a instanceof A.bl)this.a.nk(a.ga2())
else a.aO(this)},
$S:4}
A.eB.prototype={
wN(){var s=this,r=s.a,q=r==null?null:r.y
if(q==null)q=B.T9
r=s.f
r.toString
s.y=q.a4n(0,A.v(r),s)},
AS(a,b){this.aN.l(0,a,b)},
L9(a,b){this.AS(a,null)},
JZ(a,b){b.aY()},
Af(a){var s=this.f
s.toString
if(t.sg.a(s).bK(a))this.Oa(a)},
lU(a){var s,r,q
for(s=this.aN,s=new A.wH(s,s.v4()),r=A.n(s).c;s.u();){q=s.d
this.JZ(a,q==null?r.a(q):q)}}}
A.bl.prototype={
ga2(){var s=this.ay
s.toString
return s},
SZ(){var s=this.a
while(!0){if(!(s!=null&&!(s instanceof A.bl)))break
s=s.a}return t.bI.a(s)},
SY(){var s,r={},q=r.a=this.a
r.b=null
while(!0){if(!(q!=null&&!(q instanceof A.bl)))break
if(q instanceof A.lJ){r.b=q
break}s=q.a
r.a=s
q=s}return r.b},
eC(a,b){var s,r=this
r.Bm(a,b)
s=r.f
s.toString
r.ay=t.xL.a(s).au(r)
r.r4(b)
r.uu()},
b1(a,b){this.pA(0,b)
this.EQ()},
hD(){this.EQ()},
EQ(){var s=this,r=s.f
r.toString
t.xL.a(r).aF(s,s.ga2())
s.uu()},
cR(){this.Bj()},
p0(){var s=this,r=s.f
r.toString
t.xL.a(r)
s.uv()
r.nQ(s.ga2())
s.ay.n()
s.ay=null},
wS(a){var s,r=this,q=r.d
r.Nc(a)
s=r.CW
s.toString
s.ia(r.ga2(),q,r.d)},
r4(a){var s,r,q=this
q.d=a
s=q.CW=q.SZ()
if(s!=null)s.i4(q.ga2(),a)
r=q.SY()
if(r!=null){s=r.f
s.toString
t.yL.a(s).nk(q.ga2())}},
nK(){var s=this,r=s.CW
if(r!=null){r.jl(s.ga2(),s.d)
s.CW=null}s.d=null}}
A.a2r.prototype={}
A.E9.prototype={
i2(a){this.jy(a)},
i4(a,b){},
ia(a,b,c){},
jl(a,b){}}
A.vc.prototype={
aO(a){var s=this.p1
if(s!=null)a.$1(s)},
i2(a){this.p1=null
this.jy(a)},
eC(a,b){var s,r,q=this
q.pE(a,b)
s=q.p1
r=q.f
r.toString
q.p1=q.cE(s,t.Dp.a(r).c,null)},
b1(a,b){var s,r,q=this
q.kI(0,b)
s=q.p1
r=q.f
r.toString
q.p1=q.cE(s,t.Dp.a(r).c,null)},
i4(a,b){var s=this.ay
s.toString
t.fB.a(s).saI(a)},
ia(a,b,c){},
jl(a,b){var s=this.ay
s.toString
t.fB.a(s).saI(null)}}
A.eH.prototype={
ga2(){return t.gz.a(A.bl.prototype.ga2.call(this))},
gHk(a){var s=this.p1
s===$&&A.b()
return new A.be(s,new A.a_V(this),A.am(s).i("be<1>"))},
i4(a,b){var s=this.ga2(),r=b.a
s.yN(0,a,r==null?null:r.ga2())},
ia(a,b,c){var s=this.ga2(),r=c.a
s.tf(a,r==null?null:r.ga2())},
jl(a,b){this.ga2().A(0,a)},
aO(a){var s,r,q,p,o=this.p1
o===$&&A.b()
s=o.length
r=this.p2
q=0
for(;q<s;++q){p=o[q]
if(!r.C(0,p))a.$1(p)}},
i2(a){this.p2.H(0,a)
this.jy(a)},
rV(a,b){return this.Bl(a,b)},
eC(a,b){var s,r,q,p,o,n,m,l=this
l.pE(a,b)
s=l.f
s.toString
s=t.tk.a(s).c
r=s.length
q=A.b_(r,$.afQ(),!1,t.h)
for(p=t.wx,o=null,n=0;n<r;++n,o=m){m=l.Bl(s[n],new A.nH(o,n,p))
q[n]=m}l.p1=q},
b1(a,b){var s,r,q,p=this
p.kI(0,b)
s=p.f
s.toString
t.tk.a(s)
r=p.p1
r===$&&A.b()
q=p.p2
p.p1=p.a5h(r,s.c,q)
q.T(0)}}
A.a_V.prototype={
$1(a){return!this.a.p2.C(0,a)},
$S:23}
A.nH.prototype={
k(a,b){if(b==null)return!1
if(J.L(b)!==A.v(this))return!1
return b instanceof A.nH&&this.b===b.b&&J.e(this.a,b.a)},
gt(a){return A.N(this.b,this.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.OL.prototype={}
A.OO.prototype={
bB(a){return A.a6(A.cm(null))}}
A.QY.prototype={}
A.lk.prototype={}
A.c2.prototype={
Hx(){return this.a.$0()},
Jk(a){return this.b.$1(a)}}
A.DA.prototype={
N(a){var s=this,r=A.y(t.n,t.ob),q=A.cN(a,B.Cf),p=q==null?null:q.ay
if(s.d==null)if(s.e==null)if(s.f==null)if(s.r==null)if(s.w==null)if(s.x==null)if(s.y==null)if(s.z==null)q=!1
else q=!0
else q=!0
else q=!0
else q=!0
else q=!0
else q=!0
else q=!0
else q=!0
if(q)r.l(0,B.BV,new A.c2(new A.Y4(s),new A.Y5(s,p),t.g0))
if(s.ay==null)q=!1
else q=!0
if(q)r.l(0,B.a__,new A.c2(new A.Y6(s),new A.Ya(s,p),t.da))
if(s.cy==null)q=!1
else q=!0
if(q)r.l(0,B.BS,new A.c2(new A.Yb(s),new A.Yc(s,p),t.on))
q=!1
if(q)r.l(0,B.j8,new A.c2(new A.Yd(s),new A.Ye(s,p),t.n_))
if(s.x2!=null||s.y1!=null||s.y2!=null||s.aX!=null)r.l(0,B.j7,new A.c2(new A.Yf(s),new A.Yg(s,p),t.ta))
if(s.bP!=null||s.bf!=null||s.ba!=null||!1)r.l(0,B.j6,new A.c2(new A.Yh(s),new A.Y7(s,p),t.uX))
q=!1
if(q)r.l(0,B.a_2,new A.c2(new A.Y8(s),new A.Y9(s,p),t.p1))
return new A.iP(s.c,r,s.a1,s.a8,null)}}
A.Y4.prototype={
$0(){return A.at4(this.a,null)},
$S:303}
A.Y5.prototype={
$1(a){var s=this.a
a.aN=s.d
a.bf=s.e
a.ba=s.f
a.av=s.r
a.aA=s.w
a.bL=s.x
a.cI=s.y
a.ew=s.z
a.M=a.K=a.D=null
a.b=this.b
a.c=null},
$S:304}
A.Y6.prototype={
$0(){var s=t.S,r=A.axo()
return new A.fA(A.y(s,t.Aj),this.a,null,r,A.y(s,t.C))},
$S:305}
A.Ya.prototype={
$1(a){a.f=null
a.r=this.a.ay
a.w=null
a.b=this.b
a.c=null},
$S:306}
A.Yb.prototype={
$0(){return A.ahM(this.a,null,null)},
$S:307}
A.Yc.prototype={
$1(a){a.p1=a.ok=null
a.p2=this.a.cy
a.av=a.ba=a.bf=a.aN=a.bP=a.aX=a.y2=a.y1=a.xr=a.x2=a.x1=a.to=a.ry=a.rx=a.RG=a.R8=a.p4=a.p3=null
a.b=this.b
a.c=null},
$S:308}
A.Yd.prototype={
$0(){return A.ajj(this.a,null)},
$S:107}
A.Ye.prototype={
$1(a){a.cx=a.CW=a.ch=a.ay=a.ax=null
a.at=this.a.b5
a.b=this.b
a.c=null},
$S:108}
A.Yf.prototype={
$0(){return A.adL(this.a,null)},
$S:109}
A.Yg.prototype={
$1(a){var s=this.a
a.ax=s.x2
a.ay=null
a.ch=s.y1
a.CW=s.y2
a.cx=s.aX
a.at=s.b5
a.b=this.b
a.c=null},
$S:110}
A.Yh.prototype={
$0(){return A.aro(this.a,null)},
$S:313}
A.Y7.prototype={
$1(a){var s=this.a
a.ax=s.bP
a.ay=null
a.ch=s.bf
a.CW=s.ba
a.cx=null
a.at=s.b5
a.b=this.b
a.c=null},
$S:314}
A.Y8.prototype={
$0(){var s=t.S,r=A.cv(s)
return new A.fC(B.jg,A.y(s,t.o),r,this.a,null,A.acz(),A.y(s,t.C))},
$S:315}
A.Y9.prototype={
$1(a){a.ch=a.ax=a.ay=a.at=null
a.b=this.b
a.c=null},
$S:316}
A.iP.prototype={
al(){return new A.ob(B.R6,B.m)}}
A.ob.prototype={
aD(){var s,r=this
r.aV()
s=r.a
s.toString
r.e=new A.a7b(r)
r.wD(s.d)},
aR(a){var s
this.b9(a)
s=this.a
this.wD(s.d)},
a4L(a){if(this.a.f)return
t.jH.a(this.c.ga2()).sa5l(a)},
n(){for(var s=this.d,s=J.ao(s.gaT(s));s.u();)s.gG(s).n()
this.d=null
this.aP()},
wD(a){var s,r,q,p,o=this,n=o.d
n.toString
o.d=A.y(t.n,t.oi)
for(s=J.ao(a.gbn(a));s.u();){r=s.gG(s)
q=o.d
q.toString
p=n.j(0,r)
q.l(0,r,p==null?a.j(0,r).Hx():p)
q=a.j(0,r)
q.toString
r=o.d.j(0,r)
r.toString
q.Jk(r)}for(s=J.ao(n.gbn(n));s.u();){r=s.gG(s)
if(!o.d.X(0,r))n.j(0,r).n()}},
Th(a){var s,r
for(s=this.d,s=J.ao(s.gaT(s));s.u();){r=s.gG(s)
r.e.l(0,a.gbq(),a.gc_(a))
if(r.f8(a))r.hd(a)
else r.of(a)}},
UJ(a){var s,r
for(s=this.d,s=J.ao(s.gaT(s));s.u();){r=s.gG(s)
r.e.l(0,a.gbq(),a.gc_(a))
if(r.a37(a))r.x3(a)}},
Zb(a){var s=this.e,r=s.a.d
r.toString
a.sji(s.DI(r))
a.sjh(s.Dz(r))
a.sK0(s.Dx(r))
a.sK5(s.DK(r))},
N(a){var s,r,q,p=this,o=null,n=p.a,m=n.e,l=m==null
if(l)s=n.c==null?B.d8:B.bQ
else s=m
r=n.c
q=A.t9(s,r,o,p.gTg(),p.gUI(),o,o)
if(!n.f){if(l)n=r==null?B.d8:B.bQ
else n=m
q=new A.NF(n,p.gZa(),q,o)}return q}}
A.NF.prototype={
au(a){var s=new A.iQ(B.bQ,null,A.aj())
s.az()
s.saI(null)
s.v=this.e
this.f.$1(s)
return s},
aF(a,b){b.v=this.e
this.f.$1(b)}}
A.a3u.prototype={
h(a){return"SemanticsGestureDelegate()"}}
A.a7b.prototype={
a_1(a){var s=this,r=s.a.d
r.toString
a.sji(s.DI(r))
a.sjh(s.Dz(r))
a.sK0(s.Dx(r))
a.sK5(s.DK(r))},
DI(a){var s=t.f3.a(a.j(0,B.BV))
if(s==null)return null
return new A.a7g(s)},
Dz(a){var s=t.yA.a(a.j(0,B.BS))
if(s==null)return null
return new A.a7f(s)},
Dx(a){var s=t.oq.a(a.j(0,B.j7)),r=t.rR.a(a.j(0,B.j6)),q=s==null?null:new A.a7c(s),p=r==null?null:new A.a7d(r)
if(q==null&&p==null)return null
return new A.a7e(q,p)},
DK(a){var s=t.B2.a(a.j(0,B.j8)),r=t.rR.a(a.j(0,B.j6)),q=s==null?null:new A.a7h(s),p=r==null?null:new A.a7i(r)
if(q==null&&p==null)return null
return new A.a7j(q,p)}}
A.a7g.prototype={
$0(){var s=this.a,r=s.aN
if(r!=null)r.$1(new A.oH(B.k,B.k))
r=s.bf
if(r!=null)r.$1(new A.oI())
s=s.ba
if(s!=null)s.$0()},
$S:0}
A.a7f.prototype={
$0(){var s=this.a,r=s.p3
if(r!=null)r.$1(B.QK)
r=s.p2
if(r!=null)r.$0()
r=s.RG
if(r!=null)r.$1(B.QI)
s=s.R8
if(s!=null)s.$0()},
$S:0}
A.a7c.prototype={
$1(a){var s=this.a,r=s.ax
if(r!=null)r.$1(new A.il(B.k))
r=s.ay
if(r!=null)r.$1(new A.hw(null,B.k,null))
r=s.ch
if(r!=null)r.$1(a)
s=s.CW
if(s!=null)s.$1(new A.eu(B.cc,0))},
$S:20}
A.a7d.prototype={
$1(a){var s=this.a,r=s.ax
if(r!=null)r.$1(new A.il(B.k))
r=s.ay
if(r!=null)r.$1(new A.hw(null,B.k,null))
r=s.ch
if(r!=null)r.$1(a)
s=s.CW
if(s!=null)s.$1(new A.eu(B.cc,null))},
$S:20}
A.a7e.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(a)
s=this.b
if(s!=null)s.$1(a)},
$S:20}
A.a7h.prototype={
$1(a){var s=this.a,r=s.ax
if(r!=null)r.$1(new A.il(B.k))
r=s.ay
if(r!=null)r.$1(new A.hw(null,B.k,null))
r=s.ch
if(r!=null)r.$1(a)
s=s.CW
if(s!=null)s.$1(new A.eu(B.cc,0))},
$S:20}
A.a7i.prototype={
$1(a){var s=this.a,r=s.ax
if(r!=null)r.$1(new A.il(B.k))
r=s.ay
if(r!=null)r.$1(new A.hw(null,B.k,null))
r=s.ch
if(r!=null)r.$1(a)
s=s.CW
if(s!=null)s.$1(new A.eu(B.cc,null))},
$S:20}
A.a7j.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(a)
s=this.b
if(s!=null)s.$1(a)},
$S:20}
A.ny.prototype={
F(){return"HeroFlightDirection."+this.b}}
A.lp.prototype={
al(){return new A.ps(new A.by(null,t.G),B.m)}}
A.YL.prototype={
$2(a,b){var s=a.f
s.toString
t.tV.a(s)
s=a.ok
s.toString
t.BJ.a(s)
if(!this.b||!1)this.a.l(0,b,s)
else s.Ii()},
$S:319}
A.YM.prototype={
$1(a){var s,r,q=this,p=a.f
p.toString
if(p instanceof A.lp){t.jw.a(a)
s=p.c
if(A.ae3(a)===q.a)q.b.$2(a,s)
else{r=A.a_J(a,t.X)
if(r!=null)p=r.glP()
else p=!1
if(p)q.b.$2(a,s)}}a.aO(q)},
$S:4}
A.ps.prototype={
ul(a){var s,r=this
r.f=a
s=r.c.ga2()
s.toString
r.aB(new A.a7V(r,t.x.a(s)))},
uk(){return this.ul(!1)},
lu(a){var s=this
if(a||s.e==null)return
s.e=null
if(s.c!=null)s.aB(new A.a7U())},
Ii(){return this.lu(!1)},
N(a){var s,r=this,q=null,p=r.e,o=p==null,n=!o
if(n)r.a.toString
if(n&&!r.f){o=p.a
return A.mg(q,p.b,o)}s=o?q:p.a
p=o?q:p.b
return A.mg(new A.tR(n,new A.oS(o,new A.iz(r.a.e,r.d),q),q),p,s)}}
A.a7V.prototype={
$0(){var s=this.b
this.a.e=s.gq(s)},
$S:0}
A.a7U.prototype={
$0(){},
$S:0}
A.a7R.prototype={
gbG(a){var s,r=this
if(r.a===B.bO){s=r.e.go
s.toString}else{s=r.d.go
s.toString}return A.f1(B.cj,s,r.z?null:new A.np(B.cj))},
nE(a,b){var s
this.r.a.toString
s=this.w.$2(a,b)
return s==null?new A.um(a,b):s},
gIR(){var s,r,q=this,p=q.Q
if(p===$){s=q.f.c
s.toString
r=A.ajw(s,$.ai.an$.z.j(0,q.d.k3))
q.Q!==$&&A.b1()
q.Q=r
p=r}return p},
gtO(){var s,r,q=this,p=q.as
if(p===$){s=q.r.c
s.toString
r=A.ajw(s,$.ai.an$.z.j(0,q.e.k3))
q.as!==$&&A.b1()
q.as=r
p=r}return p},
gkd(){var s,r,q=this,p=q.at
if(p===$){s=q.gtO()
if(s.gJy(s))if(!q.z){s=q.gIR()
s=s.gJy(s)
r=s}else r=!0
else r=!1
q.at!==$&&A.b1()
p=q.at=r}return p},
h(a){var s,r,q=this,p=q.a.h(0),o=q.f,n=o.a.c.h(0),m=q.d.b.h(0),l=q.e.b.h(0)
o=o.h(0)
s=q.r.h(0)
r=q.gkd()?"":", INVALID"
return"_HeroFlightManifest("+p+" tag: "+n+" from route: "+m+" to route: "+l+" with hero: "+o+" to "+s+")"+r}}
A.j8.prototype={
Rl(a){var s,r,q,p,o=this,n=o.c
if(n==null){n=o.f
n===$&&A.b()
s=n.gbG(n)
r=o.f
q=r.f.c
q.toString
p=r.r.c
p.toString
p=o.c=n.x.$5(a,s,r.a,q,p)
n=p}s=o.e
s===$&&A.b()
return A.ju(s,new A.a7S(o),n)},
EP(a){var s,r=this,q=a===B.a5
if(q||a===B.G){s=r.e
s===$&&A.b()
s.sc9(0,null)
r.r.tG(0)
r.r=null
s=r.f
s===$&&A.b()
s.f.lu(q)
r.f.r.lu(a===B.G)
r.a.$1(r)
r.e.I(0,r.gK4())}},
DO(a){var s=this,r=s.f
r===$&&A.b()
r=r.d.a
if((r==null?null:r.cx.a)!==!0){s.EP(a)
return}if(s.x)return
r.toString
s.x=!0
r.cx.Z(0,new A.a7T(s,r))},
a3X(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(!h.w){s=h.f
s===$&&A.b()
s=s.r.c!=null}else s=!1
if(s){s=h.f
s===$&&A.b()
r=t.av.a(s.r.c.ga2())}else r=null
if(r!=null&&r.b!=null&&r.k3!=null){s=h.f
s===$&&A.b()
s=$.ai.an$.z.j(0,s.e.k3)
s=s==null?null:s.ga2()
q=A.cj(r.bt(0,t.av.a(s)),B.k)}else q=null
s=q!=null
if(s&&isFinite(q.a)&&isFinite(q.b)){p=h.b
p===$&&A.b()
p=p.b
if(!J.e(q,new A.p(p.a,p.b))){p=h.b
o=p.b
n=o.c
m=o.a
l=o.d
o=o.b
k=q.a
j=q.b
i=h.f
i===$&&A.b()
h.b=i.nE(p.a,new A.A(k,j,k+(n-m),j+(l-o)))}}else{p=h.d
if(p.gaU(p)===B.a5){p=h.e
p===$&&A.b()
o=$.amD()
n=p.gm(p)
m=o.$ti.i("mt<aC.T>")
h.d=new A.b8(t.m.a(p),new A.mt(new A.ik(new A.ix(n,1,B.aV)),o,m),m.i("b8<aC.T>"))}}if(s)s=!(isFinite(q.a)&&isFinite(q.b))
else s=!0
h.w=s},
px(a,b){var s,r,q,p=this
p.f=b
switch(b.a.a){case 1:s=p.e
s===$&&A.b()
s.sc9(0,new A.eN(b.gbG(b),new A.bb(A.a([],t.A),t.Q),0))
r=!1
break
case 0:s=p.e
s===$&&A.b()
s.sc9(0,b.gbG(b))
r=!0
break
default:r=null}s=p.f
p.b=s.nE(s.gIR(),p.f.gtO())
p.f.f.ul(r)
p.f.r.uk()
s=p.f
q=A.ae7(p.gRk(),!1)
p.r=q
s.b.a2L(0,q)
q=p.e
q===$&&A.b()
q.bl()
q=q.c5$
q.b=!0
q.a.push(p.gK4())},
h(a){var s,r,q,p,o,n=this.f
n===$&&A.b()
s=n.d.b
r=n.e.b
n=n.f.a.c.h(0)
q=s.h(0)
p=r.h(0)
o=this.e
o===$&&A.b()
return"HeroFlight(for: "+n+", from: "+q+", to: "+p+" "+A.h(o.c)+")"}}
A.a7S.prototype={
$2(a,b){var s,r=null,q=this.a,p=q.b
p===$&&A.b()
s=q.e
s===$&&A.b()
s=p.ag(0,s.gm(s))
s.toString
p=q.f
p===$&&A.b()
p=p.c
return A.a1a(p.b-s.d,A.Z7(A.ahf(b,q.d),!0,r),r,r,s.a,p.a-s.c,s.b,r)},
$S:320}
A.a7T.prototype={
$0(){var s,r=this.a
r.x=!1
this.b.cx.I(0,this)
s=r.e
s===$&&A.b()
r.EP(s.gaU(s))},
$S:0}
A.rK.prototype={
rp(a,b){this.qn(b,a,B.bO,!1)},
ro(a,b){var s=$.hh()
A.Da(this)
if(!s.a.get(this).cx.a)this.qn(a,b,B.bP,!1)},
rq(a,b){var s=a.glP()
if(s)this.qn(b,a,B.bO,!1)},
HY(a,b){this.qn(a,b,B.bP,!0)},
nP(){var s,r,q,p=$.hh()
A.Da(this)
if(p.a.get(this).cx.a)return
p=this.b
p=p.gaT(p)
s=A.n(p).i("be<k.E>")
r=A.aq(new A.be(p,new A.YK(),s),!1,s.i("k.E"))
for(p=r.length,q=0;q<p;++q)r[q].DO(B.G)},
qn(a,b,c,d){var s
if(b==a||!(b instanceof A.f8)||!(a instanceof A.f8))return
switch(c.a){case 1:s=a.go
if(s.gm(s)===0)return
break
case 0:s=b.go
if(s.gm(s)===1)return
break}if(d)if(c===B.bP){b.gox()
s=!0}else s=!1
else s=!1
if(s)this.FP(a,b,c,d)
else{s=b.go
b.stg(s.gm(s)===0)
$.ai.fy$.push(new A.YJ(this,a,b,c,d))}},
FP(b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this
b1.stg(!1)
s=$.hh()
A.Da(a9)
s=s.a.get(a9)
r=s==null
if(r)q=null
else{p=s.d
p===$&&A.b()
q=p.gbk()}if(r||q==null)return
o=s.c.ga2()
if(!(o instanceof A.B))return
n=$.ai.an$.z.j(0,b0.k3)
m=n!=null?A.ahp(n,b3,s):B.wK
l=$.ai.an$.z.j(0,b1.k3)
k=l!=null?A.ahp(l,b3,s):B.wK
for(s=m.geu(m),s=s.ga6(s),r=a9.gSm(),p=a9.a,j=a9.b,i=a9.gUg(),h=t.A,g=t.Q,f=t.u,e=t.tY,d=t.a7,c=t.m,b=d.i("b8<aC.T>"),a=t.sD;s.u();){a0=s.gG(s)
a1=a0.a
a2=a0.b
a3=k.j(0,a1)
a4=j.j(0,a1)
if(a3==null)a5=null
else{a0=o.k3
if(a0==null)a0=A.a6(A.Z("RenderBox was not laid out: "+A.v(o).h(0)+"#"+A.b4(o)))
a3.a.toString
a2.a.toString
a5=new A.a7R(b2,q,a0,b0,b1,a2,a3,p,r,b3,a4!=null)}if(a5!=null&&a5.gkd()){k.A(0,a1)
if(a4!=null){a0=a4.f
a0===$&&A.b()
a6=a0.a
if(a6===B.bO&&a5.a===B.bP){a0=a4.e
a0===$&&A.b()
a0.sc9(0,new A.eN(a5.gbG(a5),new A.bb(A.a([],h),g),0))
a0=a4.b
a0===$&&A.b()
a4.b=new A.uE(a0,a0.b,a0.a,a)}else{a6=a6===B.bP&&a5.a===B.bO
a7=a4.e
if(a6){a7===$&&A.b()
a0=a5.gbG(a5)
a6=a4.f
a6=a6.gbG(a6)
a6=a6.gm(a6)
a7.sc9(0,new A.b8(c.a(a0),new A.aM(a6,1,d),b))
a0=a4.f
a6=a0.f
a7=a5.r
if(a6!==a7){a6.lu(!0)
a7.uk()
a0=a4.f
a6=a4.b
a6===$&&A.b()
a4.b=a0.nE(a6.b,a5.gtO())}else{a6=a4.b
a6===$&&A.b()
a4.b=a0.nE(a6.b,a6.a)}}else{a6=a4.b
a6===$&&A.b()
a7===$&&A.b()
a4.b=a0.nE(a6.ag(0,a7.gm(a7)),a5.gtO())
a4.c=null
a0=a5.a
a6=a4.e
if(a0===B.bP)a6.sc9(0,new A.eN(a5.gbG(a5),new A.bb(A.a([],h),g),0))
else a6.sc9(0,a5.gbG(a5))
a4.f.f.lu(!0)
a4.f.r.lu(!0)
a5.f.ul(a0===B.bO)
a5.r.uk()
a0=a4.r.f.gbk()
if(a0!=null)a0.Ep()}}a4.f=a5}else{a0=new A.j8(i,B.d2)
a6=A.a([],h)
a7=new A.bb(a6,g)
a8=new A.ue(a7,new A.bb(A.a([],f),e),0)
a8.a=B.G
a8.b=0
a8.bl()
a7.b=!0
a6.push(a0.gTM())
a0.e=a8
a0.px(0,a5)
j.l(0,a1,a0)}}else if(a4!=null)a4.w=!0}for(s=J.ao(k.gaT(k));s.u();)s.gG(s).Ii()},
Uh(a){var s=a.f
s===$&&A.b()
this.b.A(0,s.f.a.c)},
Sn(a,b,c,d,e){var s,r,q=e.f
q.toString
t.tV.a(q)
s=A.cN(e,null)
r=A.cN(d,null)
if(s==null||r==null)return q.e
return A.ju(b,new A.YI(s,c,r.f,s.f,b,q),null)}}
A.YK.prototype={
$1(a){var s=a.f
s===$&&A.b()
if(s.y)if(s.a===B.bP){s=a.e
s===$&&A.b()
s=s.gaU(s)===B.G}else s=!1
else s=!1
return s},
$S:323}
A.YJ.prototype={
$1(a){var s=this,r=s.b
if(r.a==null||s.c.a==null)return
s.a.FP(r,s.c,s.d,s.e)},
$S:2}
A.YI.prototype={
$2(a,b){var s=this,r=s.c,q=s.d,p=s.e
r=s.b===B.bO?new A.rc(r,q).ag(0,p.gm(p)):new A.rc(q,r).ag(0,p.gm(p))
return A.nY(s.f.e,s.a.HE(r),null)},
$S:324}
A.rM.prototype={
N(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.ap(t.I)
f.toString
s=f.w
r=A.aht(a)
q=r.a
p=r.b
o=r.c
n=r.d
m=r.e
f=r.r
l=f==null?g:A.E(f,0,1)
if(l==null)l=1
f=r.f
f.toString
if(l!==1)k=A.aD(B.c.b_(255*((f.gm(f)>>>24&255)/255*l)),f.gm(f)>>>16&255,f.gm(f)>>>8&255,f.gm(f)&255)
else k=f
f=this.c
j=A.cE(f.a)
i=A.a([],t.BV)
if(p!=null)i.push(new A.jH("FILL",p))
if(o!=null)i.push(new A.jH("wght",o))
if(n!=null)i.push(new A.jH("GRAD",n))
if(m!=null)i.push(new A.jH("opsz",m))
h=A.aiA(g,g,B.Wn,g,g,!0,g,A.a5y(g,A.bO(g,g,k,g,g,g,g,g,"MaterialIcons",g,g,q,g,i,g,g,g,!1,g,g,g,g,g,r.w,g,g),j),B.bk,s,g,1,B.aT)
if(f.d)switch(s.a){case 0:f=new A.bh(new Float64Array(16))
f.dE()
f.ir(0,-1,1,1)
h=A.aj9(B.a4,h,f,!1)
break
case 1:break}return A.dO(g,new A.rl(!0,A.mg(A.n7(h,g,g),q,q),g),!1,g,!1,g,g,g,g,this.z,g,g,g,g,g,g,g,g,g,g,g)}}
A.jK.prototype={
k(a,b){if(b==null)return!1
if(J.L(b)!==A.v(this))return!1
return b instanceof A.jK&&b.a===this.a&&b.d===this.d&&A.cA(null,null)},
gt(a){return A.N(this.a,"MaterialIcons",null,this.d,A.ce(B.Mw),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
h(a){return"IconData(U+"+B.d.kh(B.h.im(this.a,16).toUpperCase(),5,"0")+")"}}
A.lt.prototype={
bK(a){return!this.w.k(0,a.w)}}
A.Z6.prototype={
$1(a){return A.adN(this.c,A.ahs(a).c8(this.b),this.a)},
$S:325}
A.cw.prototype={
nD(a,b,c,d,e,f,g,h){var s,r=this,q=g==null?r.a:g,p=b==null?r.b:b,o=h==null?r.c:h,n=c==null?r.d:c,m=e==null?r.e:e,l=a==null?r.f:a
if(d==null){s=r.r
s=s==null?null:A.E(s,0,1)}else s=d
return new A.cw(q,p,o,n,m,l,s,f==null?r.w:f)},
hl(a){return this.nD(a,null,null,null,null,null,null,null)},
c8(a){var s=a.r
s=s==null?null:A.E(s,0,1)
return this.nD(a.f,a.b,a.d,s,a.e,a.w,a.a,a.c)},
V(a){return this},
k(a,b){var s,r,q=this
if(b==null)return!1
if(J.L(b)!==A.v(q))return!1
if(b instanceof A.cw)if(b.a==q.a)if(b.b==q.b)if(b.c==q.c)if(b.d==q.d)if(b.e==q.e)if(J.e(b.f,q.f)){s=b.r
s=s==null?null:A.E(s,0,1)
r=q.r
s=s==(r==null?null:A.E(r,0,1))&&A.cA(b.w,q.w)}else s=!1
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
s=s==null?null:A.ce(s)
return A.N(r.a,r.b,r.c,r.d,r.e,r.f,q,s,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.NU.prototype={}
A.rP.prototype={
al(){return new A.wI(B.m)}}
A.wI.prototype={
aD(){var s=this
s.aV()
$.ai.bx$.push(s)
s.z=new A.CJ(s)},
n(){var s,r=this
B.b.A($.ai.bx$,r)
r.Yy()
s=r.at
if(s!=null)s.n()
s=r.z
s===$&&A.b()
s.a=null
r.wl(null)
r.aP()},
aY(){var s,r=this
r.Z_()
r.wp()
s=r.c
s.toString
if(A.aj5(s))r.VI()
else r.FS(!0)
r.cj()},
aR(a){var s=this
s.b9(a)
if(s.r)s.a.toString
if(!s.a.c.k(0,a.c))s.wp()},
eE(){this.wp()
this.P0()},
Z_(){var s=this.c
s.toString
s=A.cN(s,B.a22)
s=s==null?null:s.z
if(s==null){s=$.a3j.ye$
s===$&&A.b()
s=(s.a&2)!==0}this.w=s},
wp(){var s,r,q,p,o=this,n=o.z
n===$&&A.b()
s=o.a
r=s.c
q=o.c
q.toString
p=s.r
if(p!=null&&s.w!=null){p.toString
s=s.w
s.toString
s=new A.S(p,s)}else s=null
o.Ze(new A.uN(n,r,t.rZ).V(A.afo(q,s)))},
Tv(a){var s=this,r=s.ax
if(r==null||a){s.as=s.Q=null
s.a.toString
r=s.ax=new A.eA(s.gUn(),null,null)}r.toString
return r},
q_(){return this.Tv(!1)},
Uo(a,b){this.aB(new A.a7Y(this,a,b))},
wl(a){var s=this.e
$.bL.fy$.push(new A.a7Z(s))
this.e=a},
Ze(a){var s,r,q=this,p=q.d
if(p==null)s=null
else{s=p.a
if(s==null)s=p}r=a.a
if(s===(r==null?a:r))return
if(q.r){p.toString
p.I(0,q.q_())}q.a.toString
q.aB(new A.a8_(q))
q.aB(new A.a80(q))
q.d=a
if(q.r)a.Z(0,q.q_())},
VI(){var s,r=this
if(r.r)return
s=r.d
s.toString
s.Z(0,r.q_())
s=r.at
if(s!=null)s.n()
r.at=null
r.r=!0},
FS(a){var s,r,q=this
if(!q.r)return
if(a)if(q.at==null){s=q.d
s=(s==null?null:s.a)!=null}else s=!1
else s=!1
if(s){s=q.d.a
if(s.w)A.a6(A.Z(u.V))
r=new A.nE(s)
r.pK(s)
q.at=r}s=q.d
s.toString
s.I(0,q.q_())
q.r=!1},
Yy(){return this.FS(!1)},
N(a){var s,r,q,p,o,n,m,l,k=this,j=null
if(k.Q!=null)k.a.toString
s=k.e
r=s==null
q=r?j:s.a
p=r?j:s.c
o=k.a
n=o.r
m=o.w
s=r?j:s.b
if(s==null)s=1
o=o.as
r=k.w
r===$&&A.b()
l=new A.Hr(q,p,n,m,s,j,j,B.ec,j,o,B.a4,B.bR,j,!1,r,!1,j)
l=A.dO(j,l,!1,j,!1,j,j,j,!0,"",j,j,j,j,j,j,j,j,j,j,j)
return l}}
A.a7Y.prototype={
$0(){var s,r=this.a
r.wl(this.b)
r.as=r.Q=r.f=null
s=r.x
r.x=s==null?0:s+1
r.y=B.l4.M0(r.y,this.c)},
$S:0}
A.a7Z.prototype={
$1(a){var s=this.a
if(s!=null)s.a.n()
return null},
$S:2}
A.a8_.prototype={
$0(){this.a.wl(null)},
$S:0}
A.a80.prototype={
$0(){var s=this.a
s.x=s.f=null
s.y=!1},
$S:0}
A.Sk.prototype={}
A.Cv.prototype={
dA(a){var s=A.VF(this.a,this.b,a)
s.toString
return s}}
A.rc.prototype={
dA(a){var s=A.ady(this.a,this.b,a)
s.toString
return s}}
A.kV.prototype={
dA(a){return A.n1(this.a,this.b,a)}}
A.mi.prototype={
dA(a){var s=A.aA(this.a,this.b,a)
s.toString
return s}}
A.DW.prototype={}
A.nF.prototype={
gjE(){var s,r=this,q=r.d
if(q===$){s=A.e0(null,r.a.d,null,null,r)
r.d!==$&&A.b1()
r.d=s
q=s}return q},
gfm(){var s,r=this,q=r.e
if(q===$){s=r.gjE()
q=r.e=A.f1(r.a.c,s,null)}return q},
aD(){var s,r=this
r.aV()
s=r.gjE()
s.bl()
s=s.cd$
s.b=!0
s.a.push(new A.Zm(r))
r.CT()},
aR(a){var s,r=this
r.b9(a)
if(r.a.c!==a.c){r.gfm().n()
s=r.gjE()
r.e=A.f1(r.a.c,s,null)}r.gjE().e=r.a.d
if(r.CT()){r.ob(new A.Zl(r))
s=r.gjE()
s.sm(0,0)
s.d6(0)}},
n(){this.gfm().n()
this.gjE().n()
this.Pa()},
Zh(a,b){var s
if(a==null)return
s=this.gfm()
a.sxk(a.ag(0,s.gm(s)))
a.slt(0,b)},
CT(){var s={}
s.a=!1
this.ob(new A.Zk(s,this))
return s.a}}
A.Zm.prototype={
$1(a){switch(a.a){case 3:this.a.a.toString
break
case 0:case 1:case 2:break}},
$S:3}
A.Zl.prototype={
$3(a,b,c){this.a.Zh(a,b)
return a},
$S:111}
A.Zk.prototype={
$3(a,b,c){var s
if(b!=null){if(a==null)a=c.$1(b)
s=a.b
if(!J.e(b,s==null?a.a:s))this.a.a=!0
else if(a.b==null)a.slt(0,a.a)}else a=null
return a},
$S:111}
A.mU.prototype={
aD(){this.Nq()
var s=this.gjE()
s.bl()
s=s.c5$
s.b=!0
s.a.push(this.gTK())},
TL(){this.aB(new A.TV())}}
A.TV.prototype={
$0(){},
$S:0}
A.q4.prototype={
al(){return new A.LM(null,null,B.m)}}
A.LM.prototype={
ob(a){this.CW=t.gt.a(a.$3(this.CW,this.a.w,new A.a6m()))},
N(a){var s,r=this.CW
r.toString
s=this.gfm()
s=r.ag(0,s.gm(s))
return A.qW(this.a.r,null,B.cO,!0,s,null,null,B.aT)}}
A.a6m.prototype={
$1(a){return new A.mi(t.F1.a(a),null)},
$S:327}
A.q5.prototype={
al(){return new A.LN(null,null,B.m)}}
A.LN.prototype={
ob(a){var s=this,r=s.CW
s.a.toString
s.CW=t.iH.a(a.$3(r,B.as,new A.a6n()))
s.cx=t.nr.a(a.$3(s.cx,s.a.z,new A.a6o()))
r=t.mo
s.cy=r.a(a.$3(s.cy,s.a.Q,new A.a6p()))
s.db=r.a(a.$3(s.db,s.a.at,new A.a6q()))},
N(a){var s,r,q,p,o,n=this,m=n.a,l=m.w
m=m.x
s=n.CW
s.toString
r=n.gfm()
r=s.ag(0,r.gm(r))
s=n.cx
s.toString
q=n.gfm()
q=s.ag(0,q.gm(q))
s=n.a.Q
p=n.db
p.toString
o=n.gfm()
o=p.ag(0,o.gm(o))
o.toString
return new A.Hc(l,m,r,q,s,o,n.a.r,null)}}
A.a6n.prototype={
$1(a){return new A.kV(t.ak.a(a),null)},
$S:328}
A.a6o.prototype={
$1(a){return new A.aM(A.ab5(a),null,t.a7)},
$S:93}
A.a6p.prototype={
$1(a){return new A.hp(t.iO.a(a),null)},
$S:42}
A.a6q.prototype={
$1(a){return new A.hp(t.iO.a(a),null)},
$S:42}
A.pv.prototype={
n(){var s=this,r=s.e8$
if(r!=null)r.I(0,s.gna())
s.e8$=null
s.aP()},
bY(){this.dI()
this.cQ()
this.nb()}}
A.hC.prototype={
bB(a){return new A.rS(A.hA(t.h,t.X),this,B.a0,A.n(this).i("rS<hC.T>"))}}
A.rS.prototype={
L9(a,b){var s=this.aN,r=this.$ti,q=r.i("bV<1>?").a(s.j(0,a)),p=q==null
if(!p&&q.gR(q))return
if(b==null)s.l(0,a,A.cv(r.c))
else{p=p?A.cv(r.c):q
p.H(0,r.c.a(b))
s.l(0,a,p)}},
JZ(a,b){var s,r=this.$ti,q=r.i("bV<1>?").a(this.aN.j(0,b))
if(q==null)return
if(!q.gR(q)){s=this.f
s.toString
s=r.i("hC<1>").a(s).Le(a,q)
r=s}else r=!0
if(r)b.aY()}}
A.hD.prototype={
bK(a){return a.f!==this.f},
bB(a){var s=new A.pw(A.hA(t.h,t.X),this,B.a0,A.n(this).i("pw<hD.T>"))
this.f.Z(0,s.gvM())
return s}}
A.pw.prototype={
b1(a,b){var s,r,q=this,p=q.f
p.toString
s=q.$ti.i("hD<1>").a(p).f
r=b.f
if(s!==r){p=q.gvM()
s.I(0,p)
r.Z(0,p)}q.O9(0,b)},
aQ(){var s,r=this
if(r.bI){s=r.f
s.toString
r.Bp(r.$ti.i("hD<1>").a(s))
r.bI=!1}return r.O8()},
Vk(){this.bI=!0
this.fT()},
lU(a){this.Bp(a)
this.bI=!1},
p0(){var s=this,r=s.f
r.toString
s.$ti.i("hD<1>").a(r).f.I(0,s.gvM())
s.uv()}}
A.DX.prototype={}
A.pG.prototype={}
A.aby.prototype={
$1(a){return this.a.a=a},
$S:57}
A.abz.prototype={
$1(a){return a.b},
$S:329}
A.abA.prototype={
$1(a){var s,r,q,p
for(s=J.aI(a),r=this.a,q=this.b,p=0;p<s.gp(a);++p)q.l(0,A.aX(A.n(r.a[p].a).i("cM.T")),s.j(a,p))
return q},
$S:330}
A.cM.prototype={
h(a){return"LocalizationsDelegate["+A.aX(A.n(this).i("cM.T")).h(0)+"]"}}
A.S5.prototype={
lQ(a){return!0},
eb(a,b){return new A.bq(B.CV,t.mq)},
ky(a){return!1},
h(a){return"DefaultWidgetsLocalizations.delegate(en_US)"}}
A.CB.prototype={
gbF(){return B.e},
$iM:1}
A.wV.prototype={
bK(a){return this.w!==a.w}}
A.tb.prototype={
al(){return new A.Oi(new A.by(null,t.G),A.y(t.n,t.z),B.m)}}
A.Oi.prototype={
aD(){this.aV()
this.eb(0,this.a.c)},
R_(a){var s,r,q,p,o,n=this.a.d,m=a.d
if(n.length!==m.length)return!0
s=A.a(n.slice(0),A.am(n))
r=A.a(m.slice(0),A.am(m))
for(q=0;q<s.length;++q){p=s[q]
o=r[q]
if(A.v(p)===A.v(o)){p.ky(o)
n=!1}else n=!0
if(n)return!0}return!1},
aR(a){var s=this
s.b9(a)
if(!s.a.c.k(0,a.c)||s.R_(a))s.eb(0,s.a.c)},
eb(a,b){var s,r=this,q={},p=r.a.d
if(p.length===0){r.f=b
return}q.a=null
s=A.avI(b,p).bz(new A.a8n(q),t.Co)
q=q.a
if(q!=null){r.e=q
r.f=b}else{++$.I2.bL$
s.bz(new A.a8o(r,b),t.H)}},
gG1(){return t.cC.a(J.b9(this.e,B.a_o)).gbF()},
N(a){var s,r,q,p=this,o=null
if(p.f==null)return B.j1
s=p.gG1()
p.f.toString
r=p.e
q=p.gG1()
return A.dO(o,new A.wV(p,r,A.agK(p.a.e,q),p.d),!1,o,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,s,o)}}
A.a8n.prototype={
$1(a){return this.a.a=a},
$S:331}
A.a8o.prototype={
$1(a){var s=this.a
if(s.c!=null)s.aB(new A.a8m(s,a,this.b))
$.I2.H0()},
$S:332}
A.a8m.prototype={
$0(){var s=this.a
s.e=this.b
s.f=this.c},
$S:0}
A.a_j.prototype={
$1(a){var s
if(a instanceof A.fb){s=a.ok
s.toString
s=this.b.b(s)}else s=!1
if(s){this.a.a=a
return!1}s=a.f
s.toString
return A.v(s)!==B.BT},
$S:23}
A.a_i.prototype={
$1(a){var s
if(a instanceof A.bl&&this.b.b(a.ga2())){this.a.a=a
return!1}s=a.f
s.toString
return A.v(s)!==B.BT},
$S:23}
A.GI.prototype={
F(){return"Orientation."+this.b}}
A.dk.prototype={
F(){return"_MediaQueryAspect."+this.b}}
A.iD.prototype={
goG(a){var s=this.a
return s.a>s.b?B.iD:B.iC},
rg(a,b,c,d){var s=this,r=b==null?s.c:b,q=a==null?s.f:a,p=d==null?s.r:d,o=c==null?s.e:c
return new A.iD(s.a,s.b,r,s.d,o,q,p,s.w,!1,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch)},
xw(a){return this.rg(null,a,null,null)},
HE(a){return this.rg(a,null,null,null)},
a0b(a,b){return this.rg(null,null,a,b)},
a0a(a,b){return this.rg(a,null,null,b)},
Kx(a,b,c,d){var s,r,q,p,o,n,m=this,l=null
if(!(b||d||c||a))return m
s=m.f
r=b?0:l
q=d?0:l
p=c?0:l
r=s.nB(a?0:l,r,p,q)
q=m.r
p=b?Math.max(0,q.a-s.a):l
o=d?Math.max(0,q.b-s.b):l
n=c?Math.max(0,q.c-s.c):l
return m.a0a(r,q.nB(a?Math.max(0,q.d-s.d):l,p,n,o))},
a4E(a){var s=this,r=null,q=s.r,p=s.e,o=Math.max(0,q.d-p.d)
q=q.nB(o,r,r,r)
return s.a0b(p.nB(0,r,r,r),q)},
k(a,b){var s=this
if(b==null)return!1
if(J.L(b)!==A.v(s))return!1
return b instanceof A.iD&&b.a.k(0,s.a)&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.f.k(0,s.f)&&b.r.k(0,s.r)&&b.e.k(0,s.e)&&b.w.k(0,s.w)&&b.Q===s.Q&&b.as===s.as&&b.z===s.z&&b.y===s.y&&b.at===s.at&&b.ax===s.ax&&b.ay.k(0,s.ay)&&A.cA(b.ch,s.ch)},
gt(a){var s=this
return A.N(s.a,s.b,s.c,s.d,s.f,s.r,s.e,!1,s.Q,s.as,s.z,s.y,s.at,s.ax,s.ay,A.ce(s.ch),B.a,B.a,B.a,B.a)},
h(a){var s=this
return"MediaQueryData("+B.b.bm(A.a(["size: "+s.a.h(0),"devicePixelRatio: "+B.c.O(s.b,1),"textScaleFactor: "+B.c.O(s.c,1),"platformBrightness: "+s.d.h(0),"padding: "+s.f.h(0),"viewPadding: "+s.r.h(0),"viewInsets: "+s.e.h(0),"systemGestureInsets: "+s.w.h(0),"alwaysUse24HourFormat: false","accessibleNavigation: "+s.y,"highContrast: "+s.Q,"disableAnimations: "+s.as,"invertColors: "+s.z,"boldText: "+s.at,"navigationMode: "+s.ax.b,"gestureSettings: "+s.ay.h(0),"displayFeatures: "+A.h(s.ch)],t.s),", ")+")"}}
A.iC.prototype={
bK(a){return!this.w.k(0,a.w)},
Le(a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
for(s=a7.ga6(a7),r=this.w,q=a6.w,p=r.ch!==q.ch,o=r.ay,n=q.ay,m=r.ax!==q.ax,l=r.at!==q.at,k=r.as!==q.as,j=r.Q!==q.Q,i=r.z!==q.z,h=r.y!==q.y,g=r.r,f=q.r,e=r.w,d=q.w,c=r.e,b=q.e,a=r.f,a0=q.f,a1=r.d!==q.d,a2=r.c!==q.c,a3=r.b!==q.b,r=r.a,q=q.a,a4=r.a,r=r.b;s.u();){a5=s.gG(s)
if(a5 instanceof A.dk)switch(a5.a){case 0:if(!(q.a===a4&&q.b===r))return!0
break
case 1:a5=a4>r?B.iD:B.iC
if(a5!==(q.a>q.b?B.iD:B.iC))return!0
break
case 2:if(a3)return!0
break
case 3:if(a2)return!0
break
case 4:if(a1)return!0
break
case 5:if(!a.k(0,a0))return!0
break
case 6:if(!c.k(0,b))return!0
break
case 7:if(!e.k(0,d))return!0
break
case 8:if(!g.k(0,f))return!0
break
case 9:break
case 10:if(h)return!0
break
case 11:if(i)return!0
break
case 12:if(j)return!0
break
case 13:if(k)return!0
break
case 14:if(l)return!0
break
case 15:if(m)return!0
break
case 16:if(!o.k(0,n))return!0
break
case 17:if(p)return!0
break}}return!1}}
A.a04.prototype={
F(){return"NavigationMode."+this.b}}
A.x2.prototype={
al(){return new A.Oq(B.m)}}
A.Oq.prototype={
aD(){this.aV()
$.ai.bx$.push(this)},
aY(){this.cj()
this.Z4()
this.n8()},
aR(a){var s,r=this
r.b9(a)
s=r.a
s.toString
if(r.e==null||a.c!==s.c)r.n8()},
Z4(){var s,r=this
r.a.toString
s=r.c
s.toString
s=A.cN(s,null)
r.d=s
r.e=null},
n8(){var s=this,r=A.ae_(s.a.c,s.d)
if(!r.k(0,s.e))s.aB(new A.a8J(s,r))},
rn(){this.n8()},
HW(){if(this.d==null)this.n8()},
HV(){if(this.d==null)this.n8()},
n(){B.b.A($.ai.bx$,this)
this.aP()},
N(a){var s=this.e
s.toString
return A.nY(this.a.e,s,null)}}
A.a8J.prototype={
$0(){this.a.e=this.b},
$S:0}
A.Sm.prototype={}
A.Gl.prototype={
N(a){var s,r,q=null
switch(A.kK().a){case 1:case 3:case 5:break
case 0:case 2:case 4:break}s=this.c
r=A.dO(q,A.a_N(new A.fw(B.jH,s==null?q:new A.qA(s,q,q),q),B.j2,q,q,q),!1,q,!1,q,q,q,q,q,q,q,q,q,this.x,q,q,q,q,q,q)
return A.ao5(new A.rl(!0,new A.Oz(r,new A.a_H(this,a),q),q))}}
A.a_H.prototype={
$0(){A.Ja(B.W9)},
$S:0}
A.p6.prototype={
f8(a){if(this.aN==null)return!1
return this.mp(a)},
J0(a){},
J1(a,b){var s=this.aN
if(s!=null)this.cC("onAnyTapUp",s)},
rQ(a,b,c){}}
A.LS.prototype={
Hx(){var s=t.S,r=A.cv(s)
return new A.p6(B.aW,18,B.bo,A.y(s,t.o),r,null,null,A.acz(),A.y(s,t.C))},
Jk(a){a.aN=this.a}}
A.Oz.prototype={
N(a){return new A.iP(this.c,A.aT([B.a_p,new A.LS(this.d)],t.n,t.ob),B.ai,!1,null)}}
A.Gw.prototype={
N(a){var s,r,q=this,p=a.ap(t.I)
p.toString
s=A.a([],t.F)
r=q.c
if(r!=null)s.push(A.a_4(r,B.h5))
r=q.d
if(r!=null)s.push(A.a_4(r,B.h6))
r=q.e
if(r!=null)s.push(A.a_4(r,B.h7))
return new A.qQ(new A.aat(q.f,q.r,p.w),s,null)}}
A.yk.prototype={
F(){return"_ToolbarSlot."+this.b}}
A.aat.prototype={
tt(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.b.j(0,B.h5)!=null){s=a.a
r=a.b
q=e.dz(B.h5,new A.aN(0,s,r,r)).a
switch(e.f.a){case 0:p=s-q
break
case 1:p=0
break
default:p=null}e.dX(B.h5,new A.p(p,0))}else q=0
if(e.b.j(0,B.h7)!=null){o=e.dz(B.h7,A.ad7(a))
switch(e.f.a){case 0:n=0
break
case 1:n=a.a-o.a
break
default:n=null}m=o.a
e.dX(B.h7,new A.p(n,(a.b-o.b)/2))}else m=0
if(e.b.j(0,B.h6)!=null){s=a.a
r=e.e
l=Math.max(s-q-m-r*2,0)
k=e.dz(B.h6,A.ad7(a).a05(l))
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
default:f=null}e.dX(B.h6,new A.p(f,(a.b-k.b)/2))}},
mj(a){return a.d!==this.d||a.e!==this.e||a.f!==this.f}}
A.ol.prototype={
F(){return"RoutePopDisposition."+this.b}}
A.bU.prototype={
gtm(){return B.oL},
jc(){},
nN(){var s=A.aeA()
s.bz(new A.a2v(this),t.H)
return s},
nL(){var s=this.a
if(s==null)s=null
else{s.a.toString
s=!0}if(s===!0)A.aeA().bz(new A.a2u(this),t.H)},
xR(a){},
ff(){var s=0,r=A.a2(t.ij),q,p=this
var $async$ff=A.a3(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:q=p.gJz()?B.U2:B.AN
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$ff,r)},
gLk(){return!1},
jX(a){this.a0N(a)
return!0},
a0N(a){this.d.d5(0,null)},
lo(a){},
nM(a){},
xM(a){},
ns(){},
rb(){},
n(){this.a=null
var s=this.c
s.K$=$.aV()
s.D$=0},
glP(){var s,r=this.a
if(r==null)return!1
s=r.qd(A.mJ())
if(s==null)return!1
return s.a===this},
gJz(){var s,r=this.a
if(r==null)return!1
s=r.Do(A.mJ())
if(s==null)return!1
return s.a===this},
gyF(){var s,r,q,p,o=this.a
if(o==null)return!1
for(o=o.e,s=o.length,r=0;r<s;++r){q=o[r]
if(q.a===this)return!1
p=q.d.a
if(p<=10&&p>=1)return!0}return!1},
ga32(){var s=this.a
if(s==null)return!1
s=s.Do(A.ajF(this))
s=s==null?null:s.gJB()
return s===!0}}
A.a2v.prototype={
$1(a){var s,r=this.a.a
if(r==null)s=null
else{r.a.toString
s=!0}if(s===!0){r=r.y.gdN()
if(r!=null)r.zR()}},
$S:16}
A.a2u.prototype={
$1(a){var s=this.a.a
if(s!=null){s=s.y.gdN()
if(s!=null)s.zR()}},
$S:16}
A.fW.prototype={
h(a){var s=this.a
s=s==null?"none":'"'+s+'"'
return"RouteSettings("+s+", "+A.h(this.b)+")"}}
A.iE.prototype={
rp(a,b){},
ro(a,b){},
xQ(a,b){},
rq(a,b){},
HY(a,b){},
nP(){}}
A.lq.prototype={
bK(a){return a.f!=this.f}}
A.a2t.prototype={}
A.Jz.prototype={}
A.CA.prototype={}
A.tK.prototype={
al(){var s=null,r=A.a([],t.hi),q=$.aV(),p=t.a4
return new A.fL(r,A.aW(t.ee),new A.NN(q),A.jX(s,p),A.jX(s,p),A.ahi(!0,"Navigator",!0,!0,s,s,!1),new A.uC(0,q,t.rj),A.j1(!1),A.aW(t.S),s,A.y(t.wb,t.M),s,!0,s,s,s,B.m)},
a3S(a,b){return this.Q.$2(a,b)}}
A.a08.prototype={
$1(a){return a==null},
$S:333}
A.dA.prototype={
F(){return"_RouteLifecycle."+this.b}}
A.OK.prototype={}
A.he.prototype={
gcD(){var s,r
if(this.c){s=t.kd.a(this.a.b)
s.gcD()
r=A.h(s.gcD())
return"p+"+r}r=this.b
if(r!=null)return"r+"+r.gKI()
return null},
a1U(a,b,c,d){var s,r,q,p=this,o=p.d,n=p.a
n.a=b
n.jc()
s=p.d
if(s===B.Ch||s===B.Ci){r=n.nN()
p.d=B.Cj
r.Lj(new A.a9G(p,b))}else{n.xR(c)
p.d=B.cU}if(a)n.nM(null)
s=o===B.a2A||o===B.Ci
q=b.w
if(s)q.dj(0,new A.xc(n,d))
else q.dj(0,new A.pD(n,d))},
a1T(a,b){var s,r=this
r.d=B.a2w
s=r.a
if((s.d.a.a&30)!==0)return!0
if(!s.jX(r.w)){r.d=B.cU
return!1}r.w=null
return!0},
n(){var s,r,q,p,o,n,m,l=this,k={}
l.d=B.a2y
s=l.a
r=s.gtm()
q=new A.a9E()
p=new A.be(r,q,A.am(r).i("be<1>"))
if(!p.ga6(p).u()){l.d=B.fY
s.n()
return}k.a=p.gp(p)
o=s.a
o.f.H(0,l)
for(s=B.b.ga6(r),q=new A.vT(s,q);q.u();){r=s.gG(s)
n=A.aR("listener")
m=new A.a9F(k,l,r,n,o)
n.b=m
r.d.Z(0,m)}},
ga5p(){var s=this.d.a
return s<=7&&s>=1},
gJB(){var s=this.d.a
return s<=10&&s>=1}}
A.a9G.prototype={
$0(){var s=this.a
if(s.d===B.Cj){s.d=B.cU
this.b.vp()}},
$S:0}
A.a9E.prototype={
$1(a){return a.d.a!=null},
$S:334}
A.a9F.prototype={
$0(){var s=this,r=s.a;--r.a
s.c.d.I(0,s.d.ak())
if(r.a===0)return A.en(new A.a9D(s.b,s.e))},
$S:0}
A.a9D.prototype={
$0(){var s=this.a
if(!this.b.f.A(0,s))return
s.d=B.fY
s.a.n()},
$S:0}
A.a9H.prototype={
$1(a){return a.a===this.a},
$S:33}
A.kx.prototype={}
A.pD.prototype={
kg(a){a.rp(this.a,this.b)}}
A.pC.prototype={
kg(a){a.ro(this.a,this.b)}}
A.xb.prototype={
kg(a){a.xQ(this.a,this.b)}}
A.xc.prototype={
kg(a){a.rq(this.a,this.b)}}
A.fL.prototype={
aD(){var s,r,q,p,o,n=this
n.aV()
for(s=n.a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.J)(s),++q){p=s[q]
o=$.hh()
if(p instanceof A.i1)A.no(p)
o.a.set(p,n)}n.as=n.a.x
s=n.c.hL(t.hS)
if(s==null)s=null
else{s=s.f
s.toString}t.lX.a(s)
n.wM(s==null?null:s.f)
n.a.toString
B.fu.oo("selectSingleEntryHistory",t.H)},
ik(a,b){var s,r,q,p,o,n,m=this
m.m0(m.at,"id")
s=m.r
m.m0(s,"history")
m.Dr()
m.d=new A.by(null,t.r9)
B.b.L(m.e,s.KJ(null,m))
m.a.toString
r=0
for(;!1;++r){q=B.Mv[r]
p=m.c
p.toString
p=q.xB(p)
o=$.acP()
n=new A.he(p,null,!0,B.ji,o,o,o)
m.e.push(n)
B.b.L(m.e,s.KJ(n,m))}if(s.y==null){s=m.a
p=m.e
o=s.f
B.b.L(p,J.mP(s.a3S(m,o),new A.a07(m),t.ee))}m.vp()},
xU(a){var s,r=this
r.Ox(a)
s=r.r
if(r.be$!=null)s.b1(0,r.e)
else s.T(0)},
gcD(){return this.a.y},
aY(){var s,r,q,p,o=this
o.Pf()
s=o.c.ap(t.hS)
o.wM(s==null?null:s.f)
for(r=o.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.J)(r),++p)r[p].a.rb()},
Dr(){var s
this.f.SU(new A.a06(),!0)
for(;s=this.e,s.length!==0;)A.ai0(s.pop(),!1)},
wM(a){var s,r,q=this
if(q.Q!=a){if(a!=null)$.hh().l(0,a,q)
s=q.Q
if(s==null)s=null
else{r=$.hh()
A.Da(s)
s=r.a.get(s)}if(s===q){s=$.hh()
r=q.Q
r.toString
s.l(0,r,null)}q.Q=a
q.Gq()}},
Gq(){var s=this,r=s.Q,q=s.a
if(r!=null)s.as=B.b.a_(q.x,A.a([r],t.yx))
else s.as=q.x},
aR(a){var s,r,q,p,o,n=this
n.Pg(a)
s=a.x
if(s!==n.a.x){for(r=s.length,q=0;q<s.length;s.length===r||(0,A.J)(s),++q){p=s[q]
o=$.hh()
if(p instanceof A.i1)A.no(p)
o.a.set(p,null)}for(s=n.a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.J)(s),++q){p=s[q]
o=$.hh()
if(p instanceof A.i1)A.no(p)
o.a.set(p,n)}n.Gq()}n.a.toString
for(s=n.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.J)(s),++q)s[q].a.rb()},
cR(){var s,r,q,p,o=this.as
o===$&&A.b()
s=o.length
r=0
for(;r<o.length;o.length===s||(0,A.J)(o),++r){q=o[r]
p=$.hh()
if(q instanceof A.i1)A.no(q)
p.a.set(q,null)}this.pI()},
bY(){var s,r,q,p,o
this.Pd()
s=this.as
s===$&&A.b()
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.J)(s),++q){p=s[q]
o=$.hh()
if(p instanceof A.i1)A.no(p)
o.a.set(p,this)}},
n(){var s,r=this
r.wM(null)
r.y.n()
r.Dr()
r.at.n()
r.r.n()
s=r.cx
s.K$=$.aV()
s.D$=0
r.Ph()},
gCc(){var s,r,q,p=A.a([],t.tD)
for(s=this.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.J)(s),++q)B.b.L(p,s[q].a.gtm())
return p},
vq(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null
b.ch=!0
s=b.e
r=s.length-1
q=s[r]
p=r>0?s[r-1]:a
o=A.a([],t.hi)
$label0$1:for(s=b.x,n=b.w,m=a,l=m,k=!1,j=!1;r>=0;){switch(q.d.a){case 1:i=b.iC(r-1,A.mJ())
h=i>=0?b.e[i]:a
h=h==null?a:h.a
g=q.a
g.a=b
g.jc()
q.d=B.a2z
n.dj(0,new A.pD(g,h))
continue $label0$1
case 2:if(k||l==null){h=q.a
h.nL()
q.d=B.cU
if(l==null)h.nM(a)
continue $label0$1}break
case 3:case 4:case 6:h=p==null?a:p.a
i=b.iC(r-1,A.mJ())
g=i>=0?b.e[i]:a
g=g==null?a:g.a
q.a1U(l==null,b,h,g)
if(q.d===B.cU)continue $label0$1
break
case 5:if(!j&&m!=null){q.a.lo(m)
q.f=m}j=!0
break
case 7:if(!j&&m!=null){q.a.lo(m)
q.f=m}k=!0
j=!0
break
case 8:i=b.iC(r,A.zk())
h=i>=0?b.e[i]:a
if(!q.a1T(b,h==null?a:h.a))continue $label0$1
if(!j){if(m!=null){q.a.lo(m)
q.f=m}m=q.a}h=q.a
i=b.iC(r,A.zk())
g=i>=0?b.e[i]:a
s.dj(0,new A.pC(h,g==null?a:g.a))
if(q.d===B.jj)continue $label0$1
k=!0
break
case 11:break
case 9:h=q.a
h=h.d.a
if((h.a&30)!==0)A.a6(A.Z("Future already completed"))
h.jD(a)
q.w=null
q.d=B.a2v
continue $label0$1
case 10:if(!j){if(m!=null)q.a.lo(m)
m=a}i=b.iC(r,A.zk())
h=i>=0?b.e[i]:a
h=h==null?a:h.a
q.d=B.a2x
if(q.x)s.dj(0,new A.xb(q.a,h))
continue $label0$1
case 12:if(!k&&l!=null)break
q.d=B.jj
continue $label0$1
case 13:o.push(B.b.fY(b.e,r))
q=l
break
case 14:case 15:case 0:break}--r
f=r>0?b.e[r-1]:a
l=q
q=p
p=f}b.T9()
b.Tb()
b.a.toString
e=b.qd(A.mJ())
d=e==null?a:e.a.b.a
if(d!=null&&d!==b.ax){A.aiZ(!1,a,A.oZ(d,0,a))
b.ax=d}for(s=o.length,c=0;c<o.length;o.length===s||(0,A.J)(o),++c)A.ai0(o[c],!0)
if(a0){s=b.d
s===$&&A.b()
s=s.gbk()
if(s!=null)s.a4u(b.gCc())}if(b.be$!=null)b.r.b1(0,b.e)
b.ch=!1},
vp(){return this.vq(!0)},
T9(){var s,r=this,q=r.as
q===$&&A.b()
if(q.length===0){r.x.T(0)
r.w.T(0)
return}for(q=r.w;!q.gR(q);){s=q.fc(0)
B.b.Y(r.as,s.goD())}for(q=r.x;!q.gR(q);){s=q.oQ()
B.b.Y(r.as,s.goD())}},
Tb(){var s,r,q,p,o,n,m=this,l=null,k=m.e.length-1
for(;k>=0;){s=m.e[k]
r=s.d.a
if(!(r<=12&&r>=3)){--k
continue}q=m.TA(k+1,A.alw())
r=q==null
p=r?l:q.a
o=s.r
if(p!=o){if(!((r?l:q.a)==null&&s.f===o)){p=s.a
p.nM(r?l:q.a)}s.r=r?l:q.a}--k
n=m.iC(k,A.alw())
r=n>=0?m.e[n]:l
p=r==null
o=p?l:r.a
if(o!=s.e){o=s.a
o.xM(p?l:r.a)
s.e=p?l:r.a}}},
DE(a,b){a=this.iC(a,b)
return a>=0?this.e[a]:null},
iC(a,b){while(!0){if(!(a>=0&&!b.$1(this.e[a])))break;--a}return a},
TA(a,b){var s
while(!0){s=this.e
if(!(a<s.length&&!b.$1(s[a])))break;++a}s=this.e
return a<s.length?s[a]:null},
qB(a,b,c,d){var s,r,q
if(b)this.a.toString
s=new A.fW(a,c)
r=d.i("bU<0?>?")
q=r.a(this.a.r.$1(s))
return q==null&&!b?r.a(this.a.w.$1(s)):q},
wu(a,b,c){return this.qB(a,!1,b,c)},
oA(a){var s=0,r=A.a2(t.y),q,p=this,o,n
var $async$oA=A.a3(function(b,c){if(b===1)return A.a_(c,r)
while(true)$async$outer:switch(s){case 0:n=p.qd(A.mJ())
if(n==null){q=!1
s=1
break}s=3
return A.a9(n.a.ff(),$async$oA)
case 3:o=c
if(p.c==null){q=!0
s=1
break}if(n!==p.qd(A.mJ())){q=!0
s=1
break}switch(o.a){case 2:q=!1
s=1
break $async$outer
case 0:p.a48(a)
q=!0
s=1
break $async$outer
case 1:q=!0
s=1
break $async$outer}case 1:return A.a0(q,r)}})
return A.a1($async$oA,r)},
JT(){return this.oA(null,t.X)},
a3D(a){return this.oA(a,t.X)},
Kd(a){var s=this,r=B.b.a3j(s.e,A.mJ())
if(r.c){s.a.toString
if(null.$2(r.a,a)&&r.d===B.cU)r.d=B.jk}else{r.w=a
r.d=B.jk}if(r.d===B.jk)s.vq(!1)
s.Cq()},
fW(){return this.Kd(null,t.X)},
a48(a){return this.Kd(a,t.X)},
Iy(a){var s,r=this,q=B.b.a2H(r.e,A.ajF(a)),p=r.e[q]
if(p.c&&p.d.a<8){s=r.DE(q-1,A.zk())
s=s==null?null:s.a
r.x.dj(0,new A.pC(a,s))}p.d=B.jj
if(!r.ch)r.vq(!1)},
sGH(a){this.CW=a
this.cx.sm(0,a>0)},
a0Q(){var s,r,q,p,o,n,m=this
m.sGH(m.CW+1)
if(m.CW===1){s=m.iC(m.e.length-1,A.zk())
r=m.e[s].a
q=!r.gLk()&&s>0?m.DE(s-1,A.zk()).a:null
p=m.as
p===$&&A.b()
o=p.length
n=0
for(;n<p.length;p.length===o||(0,A.J)(p),++n)p[n].HY(r,q)}},
nP(){var s,r,q,p=this
p.sGH(p.CW-1)
if(p.CW===0){s=p.as
s===$&&A.b()
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.J)(s),++q)s[q].nP()}},
UG(a){this.cy.H(0,a.gbq())},
UN(a){this.cy.A(0,a.gbq())},
Cq(){if($.bL.k1$===B.cI){var s=this.d
s===$&&A.b()
s=$.ai.an$.z.j(0,s)
this.aB(new A.a05(s==null?null:s.rJ(t.CE)))}s=this.cy
B.b.Y(A.aq(s,!0,A.n(s).c),$.ai.ga_m())},
T7(a){var s,r,q,p
for(s=this.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.J)(s),++q){p=s[q]
if(a.$1(p))return p}return null},
Do(a){return this.T7(a,t.z)},
VF(a){var s,r,q,p,o
for(s=this.e,r=s.length,q=null,p=0;p<s.length;s.length===r||(0,A.J)(s),++p){o=s[p]
if(a.$1(o))q=o}return q},
qd(a){return this.VF(a,t.z)},
N(a){var s,r,q=this,p=null,o=q.gUM(),n=A.Do(a),m=q.be$,l=q.d
l===$&&A.b()
s=q.a.at
if(l.gbk()==null){r=q.gCc()
r=J.lw(r.slice(0),A.am(r).c)}else r=B.oL
return new A.lq(p,A.t9(B.bQ,new A.zy(!1,A.ahk(A.Dm(!0,p,A.a6_(m,new A.lH(r,s,l)),p,p,p,q.y,!1,p,p,p,p,p,!0),n),p),o,q.gUF(),p,p,o),p)}}
A.a07.prototype={
$1(a){var s,r,q=a.b.a
if(q!=null){s=this.a.at
r=s.y
if(r==null)r=s.$ti.i("bM.T").a(r)
s.Ow(0,r+1)
q=new A.OE(r,q,null,B.jl)}else q=null
return A.ajE(a,B.ji,!1,q)},
$S:337}
A.a06.prototype={
$1(a){a.d=B.fY
a.a.n()
return!0},
$S:33}
A.a05.prototype={
$0(){var s=this.a
if(s!=null)s.sGP(!0)},
$S:0}
A.xF.prototype={
F(){return"_RouteRestorationType."+this.b}}
A.Q8.prototype={
gJC(){return!0},
rf(){return A.a([this.a.a],t.J)}}
A.OE.prototype={
rf(){var s=this,r=s.PA(),q=A.a([s.c,s.d],t.J),p=s.e
if(p!=null)q.push(p)
B.b.L(r,q)
return r},
xB(a){var s=a.wu(this.d,this.e,t.z)
s.toString
return s},
gKI(){return this.c}}
A.aeH.prototype={
gJC(){return!1},
rf(){A.aru(this.d)},
xB(a){var s=a.c
s.toString
return this.d.$2(s,this.e)},
gKI(){return this.c}}
A.NN.prototype={
b1(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.y==null
if(a)c.y=A.y(t.N,t.lC)
s=t.J
r=A.a([],s)
q=c.y
q.toString
p=J.b9(q,null)
if(p==null)p=B.dm
o=A.y(t.dR,t.lC)
q=c.y
q.toString
n=J.anR(J.zv(q))
for(q=a1.length,m=b,l=a,k=!0,j=0;j<a1.length;a1.length===q||(0,A.J)(a1),++j){i=a1[j]
if(i.d.a>7){h=i.a
h.c.sm(0,b)
continue}if(i.c){l=l||r.length!==J.bk(p)
if(r.length!==0){g=m==null?b:m.gcD()
o.l(0,g,r)
n.A(0,g)}k=i.gcD()!=null
h=i.a
f=k?i.gcD():b
h.c.sm(0,f)
if(k){r=A.a([],s)
h=c.y
h.toString
p=J.b9(h,i.gcD())
if(p==null)p=B.dm}else{r=B.dm
p=B.dm}m=i
continue}if(k){h=i.b
h=h==null?b:h.gJC()
k=h===!0}else k=!1
h=i.a
f=k?i.gcD():b
h.c.sm(0,f)
if(k){h=i.b
f=h.b
h=f==null?h.b=h.rf():f
if(!l){f=J.aI(p)
e=f.gp(p)
d=r.length
l=e<=d||!J.e(f.j(p,d),h)}else l=!0
B.b.H(r,h)}}l=l||r.length!==J.bk(p)
c.SV(r,m,o,n)
if(l||n.gbD(n)){c.y=o
c.ar()}},
SV(a,b,c,d){var s
if(a.length!==0){s=b==null?null:b.gcD()
c.l(0,s,a)
d.A(0,s)}},
T(a){if(this.y==null)return
this.y=null
this.ar()},
KJ(a,b){var s,r,q,p,o,n=A.a([],t.hi)
if(this.y!=null)s=a!=null&&a.gcD()==null
else s=!0
if(s)return n
s=this.y
s.toString
r=J.b9(s,a==null?null:a.gcD())
if(r==null)return n
for(s=J.ao(r);s.u();){q=A.au7(s.gG(s))
p=q.xB(b)
o=$.acP()
n.push(new A.he(p,q,!1,B.ji,o,o,o))}return n},
ri(){return null},
lK(a){a.toString
return J.agc(t.f.a(a),new A.a7W(),t.dR,t.lC)},
Ji(a){this.y=a},
m6(){return this.y},
gls(a){return this.y!=null}}
A.a7W.prototype={
$2(a,b){return new A.bd(A.co(a),A.nS(t.j.a(b),!0,t.K),t.cj)},
$S:338}
A.a8X.prototype={
$2(a,b){if(!a.a)a.I(0,b)},
$S:31}
A.xd.prototype={
bY(){this.dI()
this.cQ()
this.eq()},
n(){var s=this,r=s.aZ$
if(r!=null)r.I(0,s.ge5())
s.aZ$=null
s.aP()}}
A.xe.prototype={
aR(a){this.b9(a)
this.nR()},
aY(){var s,r,q,p,o=this
o.cj()
s=o.be$
r=o.gm3()
q=o.c
q.toString
q=A.oi(q)
o.f0$=q
p=o.l5(q,r)
if(r){o.ik(s,o.dO$)
o.dO$=!1}if(p)if(s!=null)s.n()},
n(){var s,r=this
r.f_$.Y(0,new A.a8X())
s=r.be$
if(s!=null)s.n()
r.be$=null
r.Pe()}}
A.dr.prototype={
h(a){var s=A.a([],t.s)
this.cc(s)
return"Notification("+B.b.bm(s,", ")+")"},
cc(a){}}
A.cC.prototype={
bB(a){return new A.xf(this,B.a0,this.$ti.i("xf<1>"))}}
A.xf.prototype={
K2(a){var s,r=this.f
r.toString
s=this.$ti
s.i("cC<1>").a(r)
if(s.c.b(a))return r.d.$1(a)
return!1},
lU(a){}}
A.eD.prototype={}
A.Sr.prototype={}
A.fN.prototype={
slY(a){var s
if(this.b===a)return
this.b=a
s=this.e
if(s!=null)s.D4()},
sox(a){if(this.c)return
this.c=!0
this.e.D4()},
Z(a,b){this.d.Z(0,b)},
I(a,b){this.d.I(0,b)},
tG(a){var s,r=this.e
r.toString
this.e=null
if(r.c==null)return
B.b.A(r.d,this)
s=$.bL
if(s.k1$===B.AO)s.fy$.push(new A.a0p(r))
else r.En()},
fT(){var s=this.f.gbk()
if(s!=null)s.Ep()},
h(a){return"<optimized out>#"+A.b4(this)+"(opaque: "+this.b+"; maintainState: "+this.c+")"},
$ia5:1,
Hh(a){return this.a.$1(a)}}
A.a0p.prototype={
$1(a){this.a.En()},
$S:2}
A.ja.prototype={
al(){return new A.xh(B.m)}}
A.xh.prototype={
WB(a,b){var s,r,q,p=this.e
if(p==null)p=this.e=new A.lC(t.z6)
s=p.b===0?null:p.gS(p)
r=b.a
while(!0){q=s==null
if(!(!q&&s.a>r))break
s=s.gKh()}if(q){p.vS(p.c,b,!0)
p.c=b}else s.f1$.vS(s.f2$,b,!1)},
gmY(){var s,r=this,q=r.f
if(q===$){s=r.vb(!1)
r.f!==$&&A.b1()
r.f=s
q=s}return q},
vb(a){return new A.i5(this.Sc(a),t.mH)},
Sc(a){var s=this
return function(){var r=a
var q=0,p=2,o,n,m,l
return function $async$vb(b,c,d){if(c===1){o=d
q=p}while(true)switch(q){case 0:l=s.e
if(l==null||l.b===0){q=1
break}n=r?l.gS(l):l.gJ(l)
case 3:if(!(n!=null)){q=4
break}m=n.d
n=r?n.gKh():n.gkf(n)
q=m!=null?5:6
break
case 5:q=7
return b.b=m,1
case 7:case 6:q=3
break
case 4:case 1:return 0
case 2:return b.c=o,3}}}},
aD(){var s,r=this
r.aV()
r.a.c.d.sm(0,r)
s=r.c.rJ(t.E1)
s.toString
r.d=s},
aR(a){var s,r=this
r.b9(a)
if(a.d!==r.a.d){s=r.c.rJ(t.E1)
s.toString
r.d=s}},
n(){var s,r=this
r.a.c.d.sm(0,null)
s=r.a.c
if(s.r){s=s.d
s.K$=$.aV()
s.D$=0}r.e=null
r.aP()},
N(a){var s=this.a,r=s.e,q=this.d
q===$&&A.b()
return new A.oS(r,new A.xC(q,this,s.c.Hh(a),null),null)},
Ep(){this.aB(new A.a91())}}
A.a91.prototype={
$0(){},
$S:0}
A.lH.prototype={
al(){return new A.o3(A.a([],t.tD),null,null,B.m)}}
A.o3.prototype={
aD(){this.aV()
this.a2M(0,this.a.c)},
vT(a,b){return this.d.length},
a2L(a,b){b.e=this
this.aB(new A.a0u(this,null,null,b))},
a2M(a,b){var s,r=b.length
if(r===0)return
for(s=0;s<r;++s)b[s].e=this
this.aB(new A.a0t(this,null,null,b))},
a4u(a){var s,r,q,p,o,n=this
if(t.rF.b(a))s=a
else s=J.lw(a.slice(0),A.am(a).c)
if(s.length===0)return
r=n.d
if(A.cA(r,s))return
q=A.iB(r,t.u7)
for(r=s.length,p=0;p<r;++p){o=s[p]
if(o.e==null)o.e=n}n.aB(new A.a0v(n,s,q,null,null))},
En(){if(this.c!=null)this.aB(new A.a0s())},
D4(){this.aB(new A.a0r())},
N(a){var s,r,q,p,o,n=this,m=A.a([],t.sE)
for(s=n.d,s=new A.cY(s,A.am(s).i("cY<1>")),s=new A.fK(s,s.gp(s)),r=A.n(s).c,q=!0,p=0;s.u();){o=s.d
if(o==null)o=r.a(o)
if(q){++p
m.push(new A.ja(o,n,!0,o.f))
q=!o.b||!1}else if(o.c)m.push(new A.ja(o,n,!1,o.f))}s=t.jA
return new A.yj(m.length-p,n.a.d,A.aq(new A.cY(m,s),!1,s.i("b7.E")),null)}}
A.a0u.prototype={
$0(){var s=this,r=s.a
B.b.lM(r.d,r.vT(s.b,s.c),s.d)},
$S:0}
A.a0t.prototype={
$0(){var s=this,r=s.a
B.b.Jl(r.d,r.vT(s.b,s.c),s.d)},
$S:0}
A.a0v.prototype={
$0(){var s,r,q=this,p=q.a,o=p.d
B.b.T(o)
s=q.b
B.b.L(o,s)
r=q.c
r.a4z(s)
B.b.Jl(o,p.vT(q.d,q.e),r)},
$S:0}
A.a0s.prototype={
$0(){},
$S:0}
A.a0r.prototype={
$0(){},
$S:0}
A.yj.prototype={
bB(a){return new A.Rm(A.cv(t.h),this,B.a0)},
au(a){var s=a.ap(t.I)
s.toString
s=new A.mz(s.w,this.e,this.f,A.aj(),0,null,null,A.aj())
s.az()
s.L(0,null)
return s},
aF(a,b){var s=this.e
if(b.M!==s){b.M=s
b.a4()}s=a.ap(t.I)
s.toString
b.sbF(s.w)
s=this.f
if(s!==b.a1){b.a1=s
b.aj()
b.aS()}}}
A.Rm.prototype={
ga2(){return t.E1.a(A.eH.prototype.ga2.call(this))},
i4(a,b){var s,r
this.Bs(a,b)
s=a.e
s.toString
t.eu.a(s)
r=this.f
r.toString
s.at=t.oJ.a(t.l3.a(r).c[b.b]).c},
ia(a,b,c){this.Bt(a,b,c)}}
A.mA.prototype={
e0(a){if(!(a.e instanceof A.dh))a.e=new A.dh(null,null,B.k)},
gkC(){return!0},
bi(){var s,r,q,p,o,n,m,l=this,k="RenderBox was not laid out: ",j=l.mC(),i=j.ga6(j)
j=l.gW()
s=A.n3(new A.S(A.E(1/0,j.a,j.b),A.E(1/0,j.c,j.d)))
j=l.gKT()
r=j.D
if(r==null)r=j.D=B.bG.V(j.K)
for(j=t.B,q=t.uu;i.u();){p=i.gG(i)
o=p.e
o.toString
j.a(o)
if(!o.gyU()){p.ce(s,!0)
n=l.k3
if(n==null)n=A.a6(A.Z(k+A.v(l).h(0)+"#"+A.b4(l)))
m=p.k3
o.a=r.la(q.a(n.ab(0,m==null?A.a6(A.Z(k+A.v(p).h(0)+"#"+A.b4(p))):m)))}else{n=l.k3
A.aix(p,o,n==null?A.a6(A.Z(k+A.v(l).h(0)+"#"+A.b4(l))):n,r)}}},
cB(a,b){var s,r,q,p=this.uT(),o=p.ga6(p)
p=t.B
s=!1
while(!0){if(!(!s&&o.u()))break
r=o.gG(o)
q=r.e
q.toString
s=a.l8(new A.a9t(r),p.a(q).a,b)}return s},
aE(a,b){var s,r,q,p,o,n
for(s=this.mC(),s=s.ga6(s),r=t.B,q=b.a,p=b.b;s.u();){o=s.gG(s)
n=o.e
n.toString
n=r.a(n).a
a.eD(o,new A.p(n.a+q,n.b+p))}}}
A.a9t.prototype={
$2(a,b){return this.a.bM(a,b)},
$S:13}
A.pS.prototype={}
A.mz.prototype={
gKT(){return this},
e0(a){if(!(a.e instanceof A.pS))a.e=new A.pS(null,null,B.k)},
af(a){var s,r,q,p,o
this.Qg(a)
s=this.am$
for(r=t.eu;s!=null;){q=s.e
q.toString
r.a(q)
p=q.at
o=p==null?null:new A.mF(p.d.a.gmY().a())
if(o!=null)for(;o.u();)o.b.af(a)
s=q.ai$}},
ac(a){var s,r,q,p
this.Qh(0)
s=this.am$
for(r=t.eu;s!=null;){q=s.e
q.toString
r.a(q)
p=q.at
if(p!=null)p.d.a.gmY().Y(0,A.axs())
s=q.ai$}},
ec(){return this.aO(this.gKt())},
sbF(a){var s=this
if(s.K===a)return
s.K=a
s.D=null
s.a4()},
BW(a){this.a8=!0
this.fw(a)
a.v.a4()
this.a8=!1},
F1(a){this.a8=!0
this.iU(a)
this.a8=!1},
a4(){if(this.a8)return
this.mr()},
gvn(){var s,r,q,p,o=this
if(o.M===A.as.prototype.grd.call(o))return null
s=A.as.prototype.ga1g.call(o,o)
for(r=o.M,q=t.B;r>0;--r){p=s.e
p.toString
s=q.a(p).ai$}return s},
hk(a){var s,r,q,p,o=this.gvn()
for(s=t.B,r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.ko(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.ai$}return r},
c3(a){return new A.S(A.E(1/0,a.a,a.b),A.E(1/0,a.c,a.d))},
mC(){return new A.i5(this.RL(),t.mH)},
RL(){var s=this
return function(){var r=0,q=1,p,o,n,m,l,k
return function $async$mC(a,b,c){if(b===1){p=c
r=q}while(true)switch(r){case 0:k=s.gvn()
o=t.eu
case 2:if(!(k!=null)){r=3
break}r=4
return a.b=k,1
case 4:n=k.e
n.toString
o.a(n)
m=n.at
l=m==null?null:new A.mF(m.d.a.gmY().a())
r=l!=null?5:6
break
case 5:case 7:if(!l.u()){r=8
break}r=9
return a.b=l.b,1
case 9:r=7
break
case 8:case 6:k=n.ai$
r=2
break
case 3:return 0
case 1:return a.c=p,3}}}},
uT(){return new A.i5(this.RK(),t.mH)},
RK(){var s=this
return function(){var r=0,q=1,p,o,n,m,l,k,j,i,h
return function $async$uT(a,b,c){if(b===1){p=c
r=q}while(true)switch(r){case 0:i=s.M===A.as.prototype.grd.call(s)?null:s.cV$
h=s.dP$-s.M
o=t.eu
case 2:if(!(i!=null)){r=3
break}n=i.e
n.toString
o.a(n)
m=n.at
if(m==null)l=null
else{m=m.d.a
k=m.r
if(k===$){j=m.vb(!0)
m.r!==$&&A.b1()
m.r=j
k=j}l=new A.mF(k.a())}r=l!=null?4:5
break
case 4:case 6:if(!l.u()){r=7
break}r=8
return a.b=l.b,1
case 8:r=6
break
case 7:case 5:r=9
return a.b=i,1
case 9:--h
i=h<=0?null:n.bO$
r=2
break
case 3:return 0
case 1:return a.c=p,3}}}},
aE(a,b){var s,r,q=this,p=q.b5
if(q.a1!==B.I){s=q.cx
s===$&&A.b()
r=q.gq(q)
p.saG(0,a.kj(s,b,new A.A(0,0,0+r.a,0+r.b),A.mA.prototype.gig.call(q),q.a1,p.a))}else{p.saG(0,null)
q.Pu(a,b)}},
n(){this.b5.saG(0,null)
this.hS()},
aO(a){var s,r,q,p=this.am$
for(s=t.eu;p!=null;){a.$1(p)
r=p.e
r.toString
s.a(r)
q=r.at
if(q!=null)q.d.a.gmY().Y(0,a)
p=r.ai$}},
fe(a){var s,r,q,p=this.gvn()
for(s=t.eu;p!=null;){a.$1(p)
r=p.e
r.toString
s.a(r)
q=r.at
if(q!=null)q.d.a.gmY().Y(0,a)
p=r.ai$}},
iQ(a){var s
switch(this.a1.a){case 0:return null
case 1:case 2:case 3:s=this.gq(this)
return new A.A(0,0,0+s.a,0+s.b)}}}
A.a0q.prototype={
h(a){return"OverlayPortalController"+(this.a!=null?"":" DETACHED")}}
A.tV.prototype={
al(){return new A.OV(B.m)}}
A.OV.prototype={
Tw(a,b){var s,r,q,p=this,o=p.f,n=o==null
if(!n&&!p.e)return o
p.e=!1
s=p.c
s.toString
r=A.au5(s,!1)
if(r==null){n=A.a([A.rj("No Overlay widget found."),A.bg(A.v(p.ga5n()).h(0)+" widgets require an Overlay widget ancestor.\nAn overlay lets widgets float on top of other widget children."),A.D5("To introduce an Overlay widget, you can either directly include one, or use a widget that contains an Overlay itself, such as a Navigator, WidgetApp, MaterialApp, or CupertinoApp.")],t.E)
B.b.L(n,p.gaL(p).a0L(B.a_b))
throw A.d(A.XB(n))}if(n)q=new A.j9(a,r.r,r.f)
else{n=o.b
s=r.r
q=n!==s||o.c!==r.f?new A.j9(a,s,r.f):o}return p.f=q},
aD(){this.aV()
this.FE(this.a.c)},
FE(a){var s,r=a.b,q=this.d
if(q!=null)s=r!=null&&r>q
else s=!0
if(s)this.d=r
a.b=null
a.a=this},
aY(){this.cj()
this.e=!0},
aR(a){var s,r,q=this
q.b9(a)
if(!q.e){q.a.toString
s=!1}else s=!0
q.e=s
s=a.c
r=q.a.c
if(s!==r){s.a=null
q.FE(r)}},
n(){this.a.c.a=null
this.f=null
this.aP()},
Mt(a,b){this.aB(new A.a93(this,b))
this.f=null},
a2s(){this.aB(new A.a92(this))
this.f=null},
N(a){var s,r,q=this,p=null,o=q.d
if(o==null)return new A.pF(p,q.a.e,p,p)
q.a.toString
s=q.Tw(o,!1)
r=q.a
return new A.pF(new A.MS(new A.eZ(r.d,p),p),r.e,s,p)}}
A.a93.prototype={
$0(){this.a.d=this.b},
$S:0}
A.a92.prototype={
$0(){this.a.d=null},
$S:0}
A.j9.prototype={
C4(a){var s,r=this
r.d=a
r.b.WB(0,r)
s=r.c
s.aj()
s.i9()
s.aS()},
F4(a){var s,r=this
r.d=null
s=r.b.e
if(s!=null)s.A(0,r)
s=r.c
s.aj()
s.i9()
s.aS()}}
A.xC.prototype={
bK(a){return a.f!==this.f||a.r!==this.r}}
A.pF.prototype={
bB(a){return new A.OU(this,B.a0)},
au(a){var s=new A.xt(null,A.aj())
s.az()
s.saI(null)
return s}}
A.OU.prototype={
ga2(){return t.ks.a(A.bl.prototype.ga2.call(this))},
eC(a,b){var s,r=this
r.pE(a,b)
s=r.f
s.toString
t.AU.a(s)
r.p2=r.cE(r.p2,s.d,null)
r.p1=r.cE(r.p1,s.c,s.e)},
b1(a,b){var s=this
s.kI(0,b)
s.p2=s.cE(s.p2,b.d,null)
s.p1=s.cE(s.p1,b.c,b.e)},
i2(a){this.p2=null
this.jy(a)},
aO(a){var s=this.p2,r=this.p1
if(s!=null)a.$1(s)
if(r!=null)a.$1(r)},
bY(){var s,r,q
this.Bi()
s=this.p1
if(s!=null){r=t.q4.a(s.ga2())
if(r!=null){q=s.d
q.toString
t.kG.a(q)
q.c.fw(r)
q.d=r}}},
cR(){var s,r,q=this.p1
if(q!=null){s=t.q4.a(q.ga2())
if(s!=null){r=q.d
r.toString
t.kG.a(r)
r.c.iU(s)
r.d=null}}this.Oo()},
i4(a,b){var s=t.ks
if(b!=null){s=s.a(A.bl.prototype.ga2.call(this))
t.lZ.a(a)
s.v=a
b.C4(a)
b.c.BW(a)}else s.a(A.bl.prototype.ga2.call(this)).saI(a)},
ia(a,b,c){var s=b.c,r=c.c
if(s!==r){s.F1(a)
r.BW(a)}if(b.b!==c.b||b.a!==c.a){b.F4(a)
c.C4(a)}},
jl(a,b){if(b==null){t.ks.a(A.bl.prototype.ga2.call(this)).saI(null)
return}t.lZ.a(a)
b.F4(a)
b.c.F1(a)
t.ks.a(A.bl.prototype.ga2.call(this)).v=null}}
A.MS.prototype={
au(a){var s,r=a.rJ(t.ks)
r.toString
s=new A.kB(r,null,A.aj())
s.az()
s.saI(null)
return r.v=s},
aF(a,b){}}
A.kB.prototype={
mC(){var s=this.B$
return s==null?B.D_:A.aqn(1,new A.a9o(s),t.x)},
uT(){return this.mC()},
gKT(){var s=this.c
return s instanceof A.mz?s:A.a6(A.ns(A.h(s)+" of "+this.h(0)+" is not a _RenderTheater"))},
ec(){this.v.kl(this)
this.BK()},
oy(){var s=this
if(s.U)return
s.ad=s.U=!0
s.mr()
s.v.a4()
s.U=!1},
a4(){this.ad=!0
this.mr()},
a3m(){var s,r=t.kW.a(this.c)
if(r==null||this.b==null)return
s=t.k.a(A.w.prototype.gW.call(r))
this.BG(A.n3(new A.S(A.E(1/0,s.a,s.b),A.E(1/0,s.c,s.d))),!1)},
ce(a,b){var s,r=this,q=r.ad||!t.k.a(A.w.prototype.gW.call(r)).k(0,a)
r.bb=!0
r.BG(a,b)
r.ad=r.bb=!1
if(q){s=r.c
s.toString
t.E1.a(s).yQ(new A.a9p(r),t.k)}},
f9(a){return this.ce(a,!1)},
lZ(){var s=t.k.a(A.w.prototype.gW.call(this))
this.k3=new A.S(A.E(1/0,s.a,s.b),A.E(1/0,s.c,s.d))},
bi(){var s=this
if(s.bb){s.ad=!1
return}if(s.B$==null){s.ad=!1
return}s.Pv()
s.ad=!1},
cv(a,b){var s,r=a.e
r.toString
s=t.r.a(r).a
b.aq(0,s.a,s.b)}}
A.a9o.prototype={
$1(a){return this.a},
$S:339}
A.a9p.prototype={
$1(a){var s=this.a
s.ad=!0
s.mr()},
$S:340}
A.xt.prototype={
ec(){this.BK()
var s=this.v
if(s!=null&&s.b!=null)this.kl(s)},
bi(){this.pG()
var s=this.v
if(s!=null)s.a3m()}}
A.OW.prototype={
bY(){this.dI()
this.cQ()
this.eq()},
n(){var s=this,r=s.aZ$
if(r!=null)r.I(0,s.ge5())
s.aZ$=null
s.aP()}}
A.Sx.prototype={}
A.Sy.prototype={}
A.yO.prototype={
af(a){var s,r,q
this.ek(a)
s=this.am$
for(r=t.B;s!=null;){s.af(a)
q=s.e
q.toString
s=r.a(q).ai$}},
ac(a){var s,r,q
this.ej(0)
s=this.am$
for(r=t.B;s!=null;){s.ac(0)
q=s.e
q.toString
s=r.a(q).ai$}}}
A.Sz.prototype={}
A.rH.prototype={
al(){var s=t.y
return new A.wF(A.aT([!1,!0,!0,!0],s,s),null,null,B.m)},
jf(a){return A.zm().$1(a)}}
A.wF.prototype={
aD(){var s,r,q=this
q.aV()
s=q.a
r=s.f
q.d=A.ajv(A.b0(s.e),r,q)
r=q.a
s=r.f
s=A.ajv(A.b0(r.e),s,q)
q.e=s
r=q.d
r.toString
q.f=new A.x3(A.a([r,s],t.ro))},
aR(a){var s,r=this
r.b9(a)
if(!a.f.k(0,r.a.f)||A.b0(a.e)!==A.b0(r.a.e)){s=r.d
s.toString
s.sao(0,r.a.f)
s=r.d
s.toString
s.sHc(A.b0(r.a.e))
s=r.e
s.toString
s.sao(0,r.a.f)
s=r.e
s.toString
s.sHc(A.b0(r.a.e))}},
wc(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(!i.a.jf(a))return!1
s=a.a
r=s.e
if(A.b0(r)!==A.b0(i.a.e))return!1
q=i.d
q.toString
p=s.c
p.toString
o=s.a
o.toString
q.e=-Math.min(p-o,q.d)
o=i.e
o.toString
s=s.b
s.toString
o.e=-Math.min(s-p,o.d)
if(a instanceof A.hM){s=a.e
if(s<0)n=q
else if(s>0)n=o
else n=null
m=n===q
q=i.c
q.cS(new A.tW(m,0))
q=i.w
q.l(0,m,!0)
q.j(0,m).toString
n.d=0
i.w.j(0,m).toString
q=a.f
if(q!==0){s=n.c
if(s!=null)s.b4(0)
n.c=null
l=A.E(Math.abs(q),100,1e4)
s=n.f
if(n.a===B.fV)r=0.3
else{r=n.r
r===$&&A.b()
q=r.a
q=r.b.ag(0,q.gm(q))
r=q}s.a=r
r.toString
s.b=A.E(l*0.00006,r,0.5)
r=n.w
s=n.x
s===$&&A.b()
q=s.a
r.a=s.b.ag(0,q.gm(q))
r.b=Math.min(0.025+75e-8*l*l,1)
r=n.b
r===$&&A.b()
r.e=A.c1(0,B.c.b_(0.15+l*0.02))
r.ka(0,0)
n.as=0.5
n.a=B.a20}else{q=a.d
if(q!=null){p=a.b.ga2()
p.toString
t.x.a(p)
k=p.gq(p)
j=p.ku(q.d)
switch(A.b0(r).a){case 0:n.toString
r=k.b
n.Kj(0,Math.abs(s),k.a,A.E(j.b,0,r),r)
break
case 1:n.toString
r=k.a
n.Kj(0,Math.abs(s),k.b,A.E(j.a,0,r),r)
break}}}}else{if(!(a instanceof A.iR&&a.d!=null))s=a instanceof A.fZ&&a.d!=null
else s=!0
if(s){if(q.a===B.fW)q.jL(B.d7)
s=i.e
if(s.a===B.fW)s.jL(B.d7)}}i.r=A.v(a)
return!1},
n(){this.d.n()
this.e.n()
this.Qb()},
N(a){var s=this,r=null,q=s.a,p=s.d,o=s.e,n=q.e,m=s.f
return new A.cC(s.gwb(),new A.fV(A.Vy(new A.fV(q.w,r),new A.NK(p,o,n,m),r,r),r),r,t.Bf)}}
A.pr.prototype={
F(){return"_GlowState."+this.b}}
A.wE.prototype={
sao(a,b){if(this.ax.k(0,b))return
this.ax=b
this.ar()},
sHc(a){if(this.ay===a)return
this.ay=a
this.ar()},
n(){var s=this,r=s.b
r===$&&A.b()
r.n()
r=s.y
r===$&&A.b()
r.w.cA$.A(0,r)
r.BN()
r=s.c
if(r!=null)r.b4(0)
s.dH()},
Kj(a,b,c,d,e){var s,r,q,p=this,o=p.c
if(o!=null)o.b4(0)
p.at=p.at+b/200
o=p.f
s=p.r
s===$&&A.b()
r=s.b
s=s.a
o.a=r.ag(0,s.gm(s))
o.b=Math.min(r.ag(0,s.gm(s))+b/c*0.8,0.5)
q=Math.min(c,e*0.20096189432249995)
s=p.w
r=p.x
r===$&&A.b()
o=r.b
r=r.a
s.a=o.ag(0,r.gm(r))
s.b=Math.max(1-1/(0.7*Math.sqrt(p.at*q)),A.q1(o.ag(0,r.gm(r))))
r=d/e
p.Q=r
if(r!==p.as){o=p.y
o===$&&A.b()
if(!o.ga3a())o.mm(0)}else{o=p.y
o===$&&A.b()
o.h5(0)
p.z=null}o=p.b
o===$&&A.b()
o.e=B.kQ
if(p.a!==B.fW){o.ka(0,0)
p.a=B.fW}else{o=o.r
if(!(o!=null&&o.a!=null))p.ar()}p.c=A.cl(B.kQ,new A.a7P(p))},
uR(a){var s=this
if(a!==B.a5)return
switch(s.a.a){case 1:s.jL(B.d7)
break
case 3:s.a=B.fV
s.at=0
break
case 2:case 0:break}},
jL(a){var s,r,q=this,p=q.a
if(p===B.Ca||p===B.fV)return
p=q.c
if(p!=null)p.b4(0)
q.c=null
p=q.f
s=q.r
s===$&&A.b()
r=s.a
p.a=s.b.ag(0,r.gm(r))
p.b=0
p=q.w
r=q.x
r===$&&A.b()
s=r.a
p.a=r.b.ag(0,s.gm(s))
p.b=0
p=q.b
p===$&&A.b()
p.e=a
p.ka(0,0)
q.a=B.Ca},
YF(a){var s,r=this,q=r.z
if(q!=null){q=q.a
s=r.Q
r.as=s-(s-r.as)*Math.pow(2,-(a.a-q)/$.amC().a)
r.ar()}if(A.zl(r.Q,r.as,0.001)){q=r.y
q===$&&A.b()
q.h5(0)
r.z=null}else r.z=a},
aE(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.r
i===$&&A.b()
s=i.a
if(J.e(i.b.ag(0,s.gm(s)),0))return
s=b.a
r=b.b
q=s>r?r/s:1
p=s*3/2
o=Math.min(r,s*0.20096189432249995)
r=j.x
r===$&&A.b()
n=r.a
n=r.b.ag(0,n.gm(n))
r=j.as
m=$.at().bd()
l=j.ax
k=i.a
m.sao(0,A.aD(B.c.b_(255*i.b.ag(0,k.gm(k))),l.gm(l)>>>16&255,l.gm(l)>>>8&255,l.gm(l)&255))
a.cu(0)
a.aq(0,0,j.d+j.e)
a.dg(0,1,n*q)
a.jT(new A.A(0,0,0+s,0+o))
a.hZ(new A.p(s/2*(0.5+r),o-p),p,m)
a.ct(0)},
h(a){return"_GlowController(color: "+this.ax.h(0)+", axis: "+this.ay.b+")"}}
A.a7P.prototype={
$0(){return this.a.jL(B.hF)},
$S:0}
A.NK.prototype={
EJ(a,b,c,d,e){var s
if(c==null)return
switch(A.jn(d,e).a){case 0:c.aE(a,b)
break
case 2:a.cu(0)
a.aq(0,0,b.b)
a.dg(0,1,-1)
c.aE(a,b)
a.ct(0)
break
case 3:a.cu(0)
a.kn(0,1.5707963267948966)
a.dg(0,1,-1)
c.aE(a,new A.S(b.b,b.a))
a.ct(0)
break
case 1:a.cu(0)
s=b.a
a.aq(0,s,0)
a.kn(0,1.5707963267948966)
c.aE(a,new A.S(b.b,s))
a.ct(0)
break}},
aE(a,b){var s=this,r=s.d
s.EJ(a,b,s.b,r,B.l0)
s.EJ(a,b,s.c,r,B.l_)},
it(a){return a.b!=this.b||a.c!=this.c},
h(a){return"_GlowingOverscrollIndicatorPainter("+A.h(this.b)+", "+A.h(this.c)+")"}}
A.R0.prototype={
F(){return"_StretchDirection."+this.b}}
A.vs.prototype={
al(){return new A.yb(null,null,B.m)},
jf(a){return A.zm().$1(a)}}
A.yb.prototype={
gjO(){var s,r,q,p,o,n,m=this,l=null,k=m.d
if(k===$){s=t.a7
r=new A.aM(0,0,s)
q=new A.ya(r,B.jq,B.ce,$.aV())
p=A.e0(l,l,l,l,m)
p.bl()
o=p.cd$
o.b=!0
o.a.push(q.guQ())
q.a!==$&&A.fo()
q.a=p
n=A.f1(B.ko,p,l)
n.a.Z(0,q.gdW())
t.m.a(n)
q.b!==$&&A.fo()
q.b=new A.b8(n,r,s.i("b8<aC.T>"))
m.d!==$&&A.b1()
m.d=q
k=q}return k},
wc(a){var s,r,q,p,o,n,m,l=this
if(!l.a.jf(a))return!1
s=a.a
if(A.b0(s.e)!==A.b0(l.a.c))return!1
if(a instanceof A.hM){l.f=a
J.L(l.e)
r=a.e
q=l.c
q.cS(new A.tW(r<0,0))
l.w=!0
r=l.r+=r
q=a.f
if(q!==0){s=l.gjO()
r=l.r
p=A.E(Math.abs(q),1,1e4)
q=s.c
o=s.b
o===$&&A.b()
n=o.a
q.a=o.b.ag(0,n.gm(n))
q.b=Math.min(0.016+1.01/p,1)
q=s.a
q===$&&A.b()
q.e=A.c1(0,B.c.b_(p*0.02))
q.ka(0,0)
s.d=B.a2C
s.f=r>0?B.ce:B.Ck}else if(a.d!=null){s=s.d
s.toString
m=A.E(Math.abs(r)/s,0,1)
l.gjO().a4c(0,m,l.r)}}else if(a instanceof A.iR||a instanceof A.fZ){l.r=0
s=l.gjO()
if(s.d===B.jr)s.jL(B.hG)}l.e=a
return!1},
Tk(a){switch(this.a.c.a){case 0:return a===B.ce?B.ju:B.jt
case 1:return a===B.ce?B.cW:B.h8
case 2:return a===B.ce?B.jt:B.ju
case 3:return a===B.ce?B.h8:B.cW}},
n(){var s=this.gjO(),r=s.a
r===$&&A.b()
r.n()
s.dH()
this.Qn()},
N(a){var s={},r=A.ch(a,B.a21,t.l).w
s.a=null
return new A.cC(this.gwb(),A.ju(this.gjO(),new A.aa9(s,this,r.a),null),null,t.Bf)}}
A.aa9.prototype={
$2(a,b){var s,r,q,p,o,n,m=this,l=m.b,k=l.gjO().b
k===$&&A.b()
s=k.a
s=k.b.ag(0,s.gm(s))
switch(A.b0(l.a.c).a){case 0:r=1+s
m.a.a=m.c.a
q=1
break
case 1:q=1+s
m.a.a=m.c.b
r=1
break
default:r=1
q=1}p=l.Tk(l.gjO().f)
k=l.f
if(k==null)o=null
else{k=k.a.d
k.toString
o=k}if(o==null)o=m.a.a
k=A.Gb(r,q,1)
l=l.a
n=A.aj9(p,l.f,k,!0)
return A.agx(n,s!==0&&o!==m.a.a?l.e:B.I)},
$S:341}
A.pQ.prototype={
F(){return"_StretchState."+this.b}}
A.ya.prototype={
a4c(a,b,c){var s,r,q,p=this,o=c>0?B.ce:B.Ck
if(p.f!==o&&p.d===B.js)return
p.f=o
p.e=b
s=p.c
r=p.b
r===$&&A.b()
q=r.a
s.a=r.b.ag(0,q.gm(q))
q=p.e
s.b=0.016*q+0.016*(1-Math.exp(-q*8.237217661997105))
q=p.a
q===$&&A.b()
q.e=B.hG
if(p.d!==B.jr){q.ka(0,0)
p.d=B.jr}else{s=q.r
if(!(s!=null&&s.a!=null))p.ar()}},
uR(a){var s=this
if(a!==B.a5)return
switch(s.d.a){case 1:s.jL(B.hG)
break
case 3:s.d=B.jq
s.e=0
break
case 2:case 0:break}},
jL(a){var s,r,q=this,p=q.d
if(p===B.js||p===B.jq)return
p=q.c
s=q.b
s===$&&A.b()
r=s.a
p.a=s.b.ag(0,r.gm(r))
p.b=0
p=q.a
p===$&&A.b()
p.e=a
p.ka(0,0)
q.d=B.js},
h(a){return"_StretchController()"}}
A.tW.prototype={
cc(a){this.Pi(a)
a.push("side: "+(this.a?"leading edge":"trailing edge"))}}
A.xj.prototype={
cc(a){var s,r
this.uw(a)
s=this.dt$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.yK.prototype={
bY(){this.dI()
this.cQ()
this.eq()},
n(){var s=this,r=s.aZ$
if(r!=null)r.I(0,s.ge5())
s.aZ$=null
s.aP()}}
A.yS.prototype={
bY(){this.dI()
this.cQ()
this.eq()},
n(){var s=this,r=s.aZ$
if(r!=null)r.I(0,s.ge5())
s.aZ$=null
s.aP()}}
A.y6.prototype={
k(a,b){if(b==null)return!1
if(J.L(b)!==A.v(this))return!1
return b instanceof A.y6&&A.cA(b.a,this.a)},
gt(a){return A.ce(this.a)},
h(a){return"StorageEntryIdentifier("+B.b.bm(this.a,":")+")"}}
A.a0x.prototype={
Cb(a){var s=A.a([],t.D5)
if(A.ai9(a,s))a.m9(new A.a0y(s))
return s},
Ln(a,b){var s,r=this
if(r.a==null)r.a=A.y(t.K,t.z)
s=r.Cb(a)
if(s.length!==0)r.a.l(0,new A.y6(s),b)},
zK(a){var s
if(this.a==null)return null
s=this.Cb(a)
return s.length!==0?this.a.j(0,new A.y6(s)):null}}
A.a0y.prototype={
$1(a){return A.ai9(a,this.a)},
$S:23}
A.o5.prototype={
N(a){return this.c}}
A.GK.prototype={
ZS(a,b,c){var s=t.sa.a(B.b.gbc(this.f))
if(s.M!=null){s.M=a
return A.ct(null,t.H)}return s.hf(s.kq(a),b,c)},
a3b(a){var s=t.sa.a(B.b.gbc(this.f))
if(s.M!=null){s.M=a
return}s.dw(s.kq(a))},
HJ(a,b,c){var s=null,r=new A.ky(this.as,this.ax,B.fy,a,b,!0,s,A.j1(!1),$.aV())
r.BS(b,s,!0,c,a)
r.BT(b,s,s,!0,c,a)
return r},
af(a){this.OL(a)
t.sa.a(a).sp9(this.ax)}}
A.lI.prototype={}
A.ky.prototype={
y6(a,b,c,d,e,f){return this.OV(a,b,c,d,e,null)},
sp9(a){var s,r=this
if(r.a1===a)return
s=r.gie(r)
r.a1=a
if(s!=null)r.ys(r.kq(s))},
gqa(){var s=this.ax
s.toString
return Math.max(0,s*(this.a1-1)/2)},
pf(a,b){var s=Math.max(0,a-this.gqa())/(b*this.a1),r=B.c.zS(s)
if(Math.abs(s-r)<1e-10)return r
return s},
kq(a){var s=this.ax
s.toString
return a*s*this.a1+this.gqa()},
gie(a){var s,r,q=this,p=q.at
if(p!=null)s=!(q.z!=null&&q.Q!=null)
else s=!0
if(s)p=null
else{s=q.M
if(s==null){p.toString
s=q.z
s.toString
r=q.Q
r.toString
r=A.E(p,s,r)
s=q.ax
s.toString
s=q.pf(r,s)
p=s}else p=s}return p},
AK(){var s,r,q=this,p=q.w,o=p.c
o.toString
o=A.GL(o)
if(o!=null){p=p.c
p.toString
s=q.M
if(s==null){s=q.at
s.toString
r=q.ax
r.toString
r=q.pf(s,r)
s=r}o.Ln(p,s)}},
KL(){var s,r,q
if(this.at==null){s=this.w
r=s.c
r.toString
r=A.GL(r)
if(r==null)q=null
else{s=s.c
s.toString
q=r.zK(s)}if(q!=null)this.K=q}},
AJ(){var s,r=this,q=r.M
if(q==null){q=r.at
q.toString
s=r.ax
s.toString
s=r.pf(q,s)
q=s}r.w.r.sm(0,q)
q=$.fa.bV$
q===$&&A.b()
q.IE()},
KK(a,b){if(b)this.K=a
else this.dw(this.kq(a))},
nl(a){var s,r,q,p,o=this,n=o.ax
n=n!=null?n:null
if(a===n)return!0
o.OR(a)
s=o.at
s=s!=null?s:null
if(s==null)r=o.K
else if(n===0){q=o.M
q.toString
r=q}else{n.toString
r=o.pf(s,n)}p=o.kq(r)
o.M=a===0?r:null
if(p!==s){o.at=p
return!1}return!0},
iK(a){var s
this.OW(a)
if(!(a instanceof A.ky))return
s=a.M
if(s!=null)this.M=s},
ni(a,b){var s=a+this.gqa()
return this.OP(s,Math.max(s,b-this.gqa()))},
fG(){var s,r,q,p,o,n,m=this,l=null,k=m.z
if(k!=null&&m.Q!=null)k.toString
else k=l
if(m.z!=null&&m.Q!=null){s=m.Q
s.toString}else s=l
r=m.at
r=r!=null?r:l
q=m.ax
q=q!=null?q:l
p=m.w
o=p.a.c
n=m.a1
p=p.f
p===$&&A.b()
return new A.lI(n,k,s,r,q,o,p)},
$ilI:1}
A.pm.prototype={
jR(a){return new A.pm(!1,this.hg(a))},
gl9(){return this.b}}
A.o4.prototype={
jR(a){return new A.o4(this.hg(a))},
Tx(a){var s,r
if(a instanceof A.ky){s=a.gie(a)
s.toString
return s}s=a.at
s.toString
r=a.ax
r.toString
return s/r},
Ty(a,b){var s
if(a instanceof A.ky)return a.kq(b)
s=a.ax
s.toString
return b*s},
lk(a,b){var s,r,q,p,o,n=this
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
if(s)return n.ON(a,b)
q=n.oY(a)
p=n.Tx(a)
s=q.c
if(b<-s)p-=0.5
else if(b>s)p+=0.5
o=n.Ty(a,B.c.zS(p))
s=a.at
s.toString
if(o!==s){s=n.gkD()
r=a.at
r.toString
return new A.kd(o,A.y4(s,r-o,b),q)}return null}}
A.o6.prototype={
al(){return new A.OZ(B.m)}}
A.OZ.prototype={
aD(){this.aV()
this.d=this.a.r.as},
Tp(a){var s,r
switch(this.a.e.a){case 0:s=a.ap(t.I)
s.toString
r=A.acB(s.w)
this.a.toString
return r
case 1:return B.H}},
N(a){var s,r,q=this,p=null,o=q.Tp(a),n=q.a,m=n.w
if(m==null){n=n.at
n=n==null?p:n.jr(a)}else n=m
n=new A.o4(B.x_.hg(n))
n=new A.pm(!1,p).hg(n)
m=q.a
s=m.Q
r=m.r
m=m.at
if(m==null)m=A.In(a).HF(!1)
return new A.cC(new A.a94(q),A.aiH(o,r,s,new A.pm(!1,n),p,m,new A.a95(q,o)),p,t.Bf)}}
A.a94.prototype={
$1(a){var s,r,q,p,o
if(a.dt$===0&&this.a.a.y!=null&&a instanceof A.fZ){s=t.y9.a(a.a)
r=s.c
r.toString
q=s.a
q.toString
p=s.b
p.toString
p=Math.max(0,A.E(r,q,p))
q=s.d
q.toString
o=B.c.b_(p/Math.max(1,q*s.r))
r=this.a
if(o!==r.d){r.d=o
r.a.y.$1(o)}}return!1},
$S:25}
A.a95.prototype={
$2(a,b){var s=this.a.a
return new A.mp(this.b,b,0,B.E4,s.as,A.a([new A.IL(s.r.ax,!0,s.z,null)],t.F),null)},
$S:342}
A.f8.prototype={
glY(){return!0},
gxh(){return!1},
Hi(a){return!0}}
A.a_y.prototype={}
A.a0U.prototype={}
A.Cy.prototype={
vZ(a){return this.W5(a)},
W5(a){var s=0,r=A.a2(t.H),q,p=this,o,n,m
var $async$vZ=A.a3(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:n=A.ji(a.b)
m=p.a
if(!m.X(0,n)){s=1
break}m=m.j(0,n)
m.toString
o=a.a
if(o==="Menu.selectedCallback"){m.ga60().$0()
m.ga3V()
o=$.ai.an$.f.c.e
o.toString
A.anW(o,m.ga3V(),t.W)}else if(o==="Menu.opened")m.ga6_(m).$0()
else if(o==="Menu.closed")m.ga5Z(m).$0()
case 1:return A.a0(q,r)}})
return A.a1($async$vZ,r)}}
A.oa.prototype={
bK(a){return this.f!=a.f}}
A.kb.prototype={
al(){return new A.Q9(null,A.y(t.wb,t.M),null,!0,null,B.m)}}
A.Q9.prototype={
gcD(){return this.a.d},
ik(a,b){},
N(a){return A.a6_(this.be$,this.a.c)}}
A.vR.prototype={
bK(a){return a.f!=this.f}}
A.uF.prototype={
al(){return new A.xE(B.m)}}
A.xE.prototype={
aY(){var s,r=this
r.cj()
s=r.c
s.toString
r.r=A.oi(s)
r.vW()
if(r.d==null){r.a.toString
r.d=!1}},
aR(a){this.b9(a)
this.vW()},
gEh(){this.a.toString
return!1},
vW(){var s,r=this
if(r.gEh()&&!r.w){r.w=!0;++$.I2.bL$
s=$.fa.bV$
s===$&&A.b()
s.ga4S().bz(new A.a9y(r),t.P)}},
Xm(){var s,r=this
r.e=!1
r.f=null
s=$.fa.bV$
s===$&&A.b()
s.I(0,r.gwm())
r.vW()},
n(){if(this.e){var s=$.fa.bV$
s===$&&A.b()
s.I(0,this.gwm())}this.aP()},
N(a){var s,r,q=this,p=q.d
p.toString
if(p&&q.gEh())return B.j1
p=q.r
if(p==null)p=q.f
s=q.a
r=s.d
return A.a6_(p,new A.kb(s.c,r,null))}}
A.a9y.prototype={
$1(a){var s,r=this.a
r.w=!1
if(r.c!=null){s=$.fa.bV$
s===$&&A.b()
s.Z(0,r.gwm())
r.aB(new A.a9x(r,a))}$.I2.H0()},
$S:343}
A.a9x.prototype={
$0(){var s=this.a
s.f=this.b
s.e=!0
s.d=!1},
$S:0}
A.de.prototype={
gls(a){return!0},
n(){var s=this,r=s.c
if(r!=null){r=r.f_$.A(0,s)
r.toString
s.I(0,r)
s.c=s.b=null}s.dH()
s.a=!0}}
A.hR.prototype={
xU(a){},
m0(a,b){var s,r,q=this,p=q.be$
p=p==null?null:J.dD(p.giG(),b)
s=p===!0
r=s?a.lK(J.b9(q.be$.giG(),b)):a.ri()
if(a.b==null){a.b=b
a.c=q
p=new A.a2q(q,a)
a.Z(0,p)
q.f_$.l(0,a,p)}a.Ji(r)
if(!s&&a.gls(a)&&q.be$!=null)q.wQ(a)},
nR(){var s,r,q=this
if(q.f0$!=null){s=q.be$
s=s==null?null:s.e
s=s==q.gcD()||q.gm3()}else s=!0
if(s)return
r=q.be$
if(q.l5(q.f0$,!1))if(r!=null)r.n()},
gm3(){var s,r,q=this
if(q.dO$)return!0
if(q.gcD()==null)return!1
s=q.c
s.toString
r=A.oi(s)
if(r!=q.f0$){if(r==null)s=null
else{s=r.c
s=s==null?null:s.d
s=s===!0}s=s===!0}else s=!1
return s},
l5(a,b){var s,r,q=this
if(q.gcD()==null||a==null)return q.FB(null,b)
if(b||q.be$==null){s=q.gcD()
s.toString
return q.FB(a.a_x(s,q),b)}s=q.be$
s.toString
r=q.gcD()
r.toString
s.a4F(r)
r=q.be$
r.toString
a.fw(r)
return!1},
FB(a,b){var s,r=this,q=r.be$
if(a==q)return!1
r.be$=a
if(!b){if(a!=null){s=r.f_$
new A.b6(s,A.n(s).i("b6<1>")).Y(0,r.gZ5())}r.xU(q)}return!0},
wQ(a){var s,r,q=a.gls(a),p=this.be$
if(q){if(p!=null){q=a.b
q.toString
s=a.m6()
if(!J.e(J.b9(p.giG(),q),s)||!J.dD(p.giG(),q)){J.eo(p.giG(),q,s)
p.kU()}}}else if(p!=null){q=a.b
q.toString
r=J.dD(p.giG(),q)
J.jt(p.giG(),q)
if(J.fs(p.giG()))J.jt(p.a,"v")
if(r)p.kU()}}}
A.a2q.prototype={
$0(){var s=this.a
if(s.be$==null)return
s.wQ(this.b)},
$S:0}
A.ab3.prototype={
$2(a,b){if(!a.a)a.I(0,b)},
$S:31}
A.SA.prototype={
aR(a){this.b9(a)
this.nR()},
aY(){var s,r,q,p,o=this
o.cj()
s=o.be$
r=o.gm3()
q=o.c
q.toString
q=A.oi(q)
o.f0$=q
p=o.l5(q,r)
if(r){o.ik(s,o.dO$)
o.dO$=!1}if(p)if(s!=null)s.n()},
n(){var s,r=this
r.f_$.Y(0,new A.ab3())
s=r.be$
if(s!=null)s.n()
r.be$=null
r.aP()}}
A.bM.prototype={
sm(a,b){var s=this.y
if(b==null?s!=null:b!==s){this.y=b
this.xW(s)}},
Ji(a){this.y=a}}
A.hd.prototype={
ri(){return this.cy},
xW(a){this.ar()},
lK(a){return A.n(this).i("hd.T").a(a)},
m6(){var s=this.y
return s==null?A.n(this).i("bM.T").a(s):s}}
A.xD.prototype={
lK(a){return this.Py(a)},
m6(){var s=this.Pz()
s.toString
return s}}
A.uC.prototype={}
A.uB.prototype={}
A.ab4.prototype={
$2(a,b){if(!a.a)a.I(0,b)},
$S:31}
A.m_.prototype={
gio(){return this.b}}
A.I8.prototype={
al(){return new A.pL(new A.Q6($.aV()),null,A.y(t.wb,t.M),null,!0,null,B.m,this.$ti.i("pL<1>"))}}
A.I7.prototype={
F(){return"RouteInformationReportingType."+this.b}}
A.pL.prototype={
gcD(){return this.a.r},
aD(){var s,r=this
r.aV()
s=r.a.c
if(s!=null)s.Z(0,r.gq7())
r.a.f.Zx(r.gvD())
r.a.e.Z(0,r.gvH())},
ik(a,b){var s,r,q=this,p=q.f
q.m0(p,"route")
s=p.y
r=s==null
if((r?A.n(p).i("bM.T").a(s):s)!=null){p=r?A.n(p).i("bM.T").a(s):s
p.toString
q.qt(p,new A.a9O(q))}else{p=q.a.c
if(p!=null)q.qt(p.a,new A.a9P(q))}},
XQ(){var s=this
if(s.w||s.a.c==null)return
s.w=!0
$.bL.fy$.push(s.gXp())},
Xq(a){var s,r,q,p,o=this
o.w=!1
s=o.f
r=s.y
q=r==null
if((q?A.n(s).i("bM.T").a(r):r)!=null){s=q?A.n(s).i("bM.T").a(r):r
s.toString
r=o.a.c
r.toString
q=o.e
q.toString
if(q!==B.U0)p=q===B.iM&&r.b.gio().k(0,s.gio())
else p=!0
B.fu.oo("selectMultiEntryHistory",t.H)
A.aiZ(p,s.c,s.gio())
r.b=r.a=s}o.e=B.iM},
XB(){this.a.e.ga5O()
this.a.toString
return null},
ql(){var s=this
s.f.sm(0,s.XB())
if(s.e==null)s.e=B.iM
s.XQ()},
aY(){var s,r=this
r.r=!0
r.Qi()
s=r.a.c
if(s!=null&&r.r)r.qt(s.a,new A.a9N(r))
r.r=!1
r.ql()},
aR(a){var s,r,q,p=this
p.Qj(a)
s=p.a
r=a.c
q=s.c==r
if(q)s.f===a.f
p.d=new A.D()
if(!q){s=r==null
if(!s)r.I(0,p.gq7())
q=p.a.c
if(q!=null)q.Z(0,p.gq7())
s=s?null:r.a
r=p.a.c
if(s!=(r==null?null:r.a))p.DY()}s=a.f
if(p.a.f!==s){r=p.gvD()
s.a4A(r)
p.a.f.Zx(r)}p.a.toString
s=p.gvH()
a.e.I(0,s)
p.a.e.Z(0,s)
p.ql()},
n(){var s=this,r=s.a.c
if(r!=null)r.I(0,s.gq7())
s.a.f.a4A(s.gvD())
s.a.e.I(0,s.gvH())
s.d=null
s.Qk()},
qt(a,b){var s,r,q=this
q.r=!1
q.d=new A.D()
s=q.a.d
s.toString
r=q.c
r.toString
s.a63(a,r).bz(q.X9(q.d,b),t.H)},
X9(a,b){return new A.a9L(this,a,b)},
DY(){var s=this
s.r=!0
s.qt(s.a.c.a,new A.a9I(s))},
TQ(){var s=this
s.d=new A.D()
return s.a.e.a65().bz(s.UT(s.d),t.y)},
UT(a){return new A.a9J(this,a)},
Fd(){this.aB(new A.a9M())
this.ql()
return new A.bq(null,t.E8)},
UU(){this.aB(new A.a9K())
this.ql()},
N(a){var s=this.be$,r=this.a,q=r.c,p=r.f,o=r.d
r=r.e
return A.a6_(s,new A.Qe(q,p,o,r,this,new A.eZ(r.gHe(),null),null))}}
A.a9O.prototype={
$0(){return this.a.a.e.ga5C()},
$S(){return this.a.$ti.i("ah<~>(1)()")}}
A.a9P.prototype={
$0(){return this.a.a.e.ga5B()},
$S(){return this.a.$ti.i("ah<~>(1)()")}}
A.a9N.prototype={
$0(){return this.a.a.e.gMl()},
$S(){return this.a.$ti.i("ah<~>(1)()")}}
A.a9L.prototype={
$1(a){var s=0,r=A.a2(t.H),q,p=this,o,n
var $async$$1=A.a3(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:o=p.a
n=p.b
if(o.d!=n){s=1
break}s=3
return A.a9(p.c.$0().$1(a),$async$$1)
case 3:if(o.d==n)o.Fd()
case 1:return A.a0(q,r)}})
return A.a1($async$$1,r)},
$S(){return this.a.$ti.i("ah<~>(1)")}}
A.a9I.prototype={
$0(){return this.a.a.e.gMl()},
$S(){return this.a.$ti.i("ah<~>(1)()")}}
A.a9J.prototype={
$1(a){var s=this.a
if(this.b!=s.d)return new A.bq(!0,t.a9)
s.Fd()
return new A.bq(a,t.a9)},
$S:345}
A.a9M.prototype={
$0(){},
$S:0}
A.a9K.prototype={
$0(){},
$S:0}
A.Qe.prototype={
bK(a){if(this.f==a.f)this.r===a.r
return!0}}
A.Q6.prototype={
ri(){return null},
xW(a){this.ar()},
lK(a){var s,r
if(a==null)return null
t.DI.a(a)
s=J.bC(a)
r=A.co(s.gJ(a))
if(r==null)return null
return new A.m_(A.oZ(r,0,null),s.gS(a))},
m6(){var s,r=this,q=r.y,p=q==null
if((p?A.n(r).i("bM.T").a(q):q)==null)q=null
else{q=(p?A.n(r).i("bM.T").a(q):q).gio().h(0)
s=r.y
q=[q,(s==null?A.n(r).i("bM.T").a(s):s).c]}return q}}
A.pX.prototype={
aR(a){this.b9(a)
this.nR()},
aY(){var s,r,q,p,o=this
o.cj()
s=o.be$
r=o.gm3()
q=o.c
q.toString
q=A.oi(q)
o.f0$=q
p=o.l5(q,r)
if(r){o.ik(s,o.dO$)
o.dO$=!1}if(p)if(s!=null)s.n()},
n(){var s,r=this
r.f_$.Y(0,new A.ab4())
s=r.be$
if(s!=null)s.n()
r.be$=null
r.aP()}}
A.o2.prototype={
gtm(){return this.e},
jc(){var s,r=this,q=A.ae7(r.gRg(),!1)
r.ok=q
r.gox()
s=A.ae7(r.gRi(),!0)
r.p2=s
B.b.L(r.e,A.a([q,s],t.tD))
r.OI()},
jX(a){var s,r=this
r.OD(a)
s=r.at.Q
s===$&&A.b()
if(s===B.G&&!r.Q)r.a.Iy(r)
return!0},
n(){var s,r,q,p,o
for(s=this.e,r=s.length,q=0;q<r;++q){p=s[q]
p.r=!0
o=p.d
if(o.a==null){o.K$=$.aV()
o.D$=0}}B.b.T(s)
this.OH()}}
A.eh.prototype={
gbG(a){return this.as},
gAO(){return this.ax},
Vd(a){var s,r=this
switch(a.a){case 3:s=r.e
if(s.length!==0){s=B.b.gJ(s)
r.glY()
s.slY(!0)}s=r.z
if(s!=null){s.a.$0()
s.a=null}r.z=null
break
case 1:case 2:s=r.e
if(s.length!==0)B.b.gJ(s).slY(!1)
if(r.z==null)r.z=$.bL.a4M(B.ER)
break
case 0:if(!r.ga32()){r.a.Iy(r)
r.Q=!0
s=r.z
if(s!=null){s.a.$0()
s.a=null}r.z=null}break}},
jc(){var s=this,r=s.gL5(s),q=s.gL5(s),p=s.gll(),o=s.a
o.toString
o=s.at=A.e0(p,r,q,null,o)
o.bl()
p=o.cd$
p.b=!0
p.a.push(s.gE_())
s.as=o
s.O1()
p=s.as
if(p.gaU(p)===B.a5&&s.e.length!==0){p=B.b.gJ(s.e)
s.glY()
p.slY(!0)}},
nN(){this.OF()
return this.at.d6(0)},
nL(){this.OA()
var s=this.at
s.sm(0,s.b)},
xR(a){var s,r
if(a instanceof A.f8){s=this.at
s.toString
r=a.at.x
r===$&&A.b()
s.sm(0,r)}this.OG(a)},
jX(a){this.ch=a
this.at.fZ(0)
this.O_(a)
return!0},
lo(a){this.Gz(a)
this.OE(a)},
nM(a){this.Gz(a)
this.OB(a)},
Gz(a){var s,r,q,p,o,n,m,l=this,k={},j=l.CW
l.CW=null
if(a instanceof A.f8&&l.Hi(a)&&!0){s=l.ax.c
if(s!=null){r=s instanceof A.mm?s.a:s
r.toString
q=a.as
q.toString
p=r.gm(r)
o=q.x
o===$&&A.b()
if(!J.e(p,o)){p=q.Q
p===$&&A.b()
p=p===B.a5||p===B.G}else p=!0
o=a.y.a
if(p)l.l0(q,o)
else{k.a=null
p=new A.a5U(l,q,a)
l.CW=new A.a5S(k,q,p)
q.bl()
n=q.cd$
n.b=!0
n.a.push(p)
m=A.aeD(r,q,new A.a5T(k,l,a))
k.a=m
l.l0(m,o)}}else l.l0(a.as,a.y.a)}else l.Y9(B.ci)
if(j!=null)j.$0()},
l0(a,b){this.ax.sc9(0,a)
if(b!=null)b.bz(new A.a5R(this,a),t.P)},
Y9(a){return this.l0(a,null)},
n(){var s=this,r=s.as
if(r!=null)r.c2(s.gE_())
r=s.z
if(r!=null){r.a.$0()
r.a=null}s.z=null
r=s.at
if(r!=null)r.n()
s.y.d5(0,s.ch)
s.O0()},
gll(){return"TransitionRoute"},
h(a){return"TransitionRoute(animation: "+A.h(this.at)+")"}}
A.a5U.prototype={
$1(a){var s,r
switch(a.a){case 3:case 0:s=this.a
s.l0(this.b,this.c.y.a)
r=s.CW
if(r!=null){r.$0()
s.CW=null}break
case 1:case 2:break}},
$S:3}
A.a5S.prototype={
$0(){this.b.c2(this.c)
var s=this.a.a
if(s!=null)s.n()},
$S:0}
A.a5T.prototype={
$0(){var s,r=this.b
r.l0(this.a.a.a,this.c.y.a)
s=r.CW
if(s!=null){s.$0()
r.CW=null}},
$S:0}
A.a5R.prototype={
$1(a){var s=this.a.ax,r=this.b
if(s.c==r){s.sc9(0,B.ci)
if(r instanceof A.mm)r.n()}},
$S:12}
A.Eg.prototype={
gLk(){var s=this.lz$
return s!=null&&s.length!==0}}
A.MZ.prototype={
i5(a,b){A.a_J(this.e,t.z).gxh()
return!1},
dU(a){return A.ae3(this.e).JT()}}
A.x5.prototype={
bK(a){var s=this
return s.f!==a.f||s.r!==a.r||s.w!==a.w||s.x!==a.x}}
A.pB.prototype={
al(){return new A.my(A.adB(!0,B.a_q.h(0)+" Focus Scope",!1),A.ael(),B.m,this.$ti.i("my<1>"))}}
A.my.prototype={
aD(){var s,r,q=this
q.aV()
s=A.a([],t.ro)
r=q.a.c.go
if(r!=null)s.push(r)
r=q.a.c.id
if(r!=null)s.push(r)
q.e=new A.x3(s)},
aR(a){this.b9(a)
this.Gr()},
aY(){this.cj()
this.d=null
this.Gr()},
Gr(){var s,r,q=this.a.c
q.a.a.toString
s=this.f
s.dy=B.ZT
if(q.glP()){this.a.c.a.a.toString
r=!0}else r=!1
if(r){r=q.a.y.gdN()
if(r!=null)r.pq(s)}},
Tc(){this.aB(new A.a8K(this))},
n(){this.f.n()
this.aP()},
gFI(){var s=this.a.c.go
if((s==null?null:s.gaU(s))!==B.aG){s=this.a.c.a
s=s==null?null:s.cx.a
s=s===!0}else s=!0
return s},
N(a){var s,r,q=this,p=null,o=q.a.c,n=o.glP(),m=q.a.c
if(!m.gyF()){m=m.lz$
m=m!=null&&m.length!==0}else m=!0
s=q.a.c
s=s.gyF()||s.yi$>0
r=q.a.c
return A.ju(o.c,new A.a8O(q),new A.x5(n,m,s,o,new A.tR(r.fy,new A.o5(new A.eZ(new A.a8P(q),p),r.k4,p),p),p))}}
A.a8K.prototype={
$0(){this.a.d=null},
$S:0}
A.a8O.prototype={
$2(a,b){var s=this.a.a.c.c.a
b.toString
return new A.kb(b,s,null)},
$S:346}
A.a8P.prototype={
$1(a){var s,r=null,q=A.aT([B.BR,new A.MZ(a,new A.bb(A.a([],t.B8),t.dc))],t.n,t.nT),p=this.a,o=p.e
o===$&&A.b()
s=p.d
if(s==null)s=p.d=new A.fV(new A.eZ(new A.a8M(p),r),p.a.c.k3)
return A.TN(q,new A.oa(p.r,B.cY,B.UP,A.ahj(!1,new A.fV(A.ju(o,new A.a8N(p),s),r),r,r,p.f),r))},
$S:347}
A.a8N.prototype={
$2(a,b){var s,r,q=this.a,p=q.a.c,o=p.go
o.toString
s=p.id
s.toString
r=p.a
r=r==null?null:r.cx
if(r==null)r=A.j1(!1)
return p.Hg(a,o,s,A.ju(r,new A.a8L(q),b))},
$S:27}
A.a8L.prototype={
$2(a,b){var s=this.a,r=s.gFI()
s.f.scl(!r)
return A.Z7(b,r,null)},
$S:348}
A.a8M.prototype={
$1(a){var s,r=this.a.a.c,q=r.go
q.toString
s=r.id
s.toString
return r.a_e(a,q,s)},
$S:10}
A.k1.prototype={
aB(a){var s,r=this.k2
if(r.gbk()!=null){r=r.gbk()
if(r.a.c.glP())if(!r.gFI()){r.a.c.a.a.toString
s=!0}else s=!1
else s=!1
if(s){s=r.a.c.a.y.gdN()
if(s!=null)s.pq(r.f)}r.aB(a)}else a.$0()},
Hg(a,b,c,d){return d},
jc(){var s=this
s.P5()
s.go=A.Ho(A.eh.prototype.gbG.call(s,s))
s.id=A.Ho(A.eh.prototype.gAO.call(s))},
nN(){var s,r=this,q=r.k2
if(q.gbk()!=null){r.a.a.toString
s=!0}else s=!1
if(s){s=r.a.y.gdN()
if(s!=null)s.pq(q.gbk().f)}return r.P4()},
nL(){var s,r=this,q=r.k2
if(q.gbk()!=null){r.a.a.toString
s=!0}else s=!1
if(s){s=r.a.y.gdN()
if(s!=null)s.pq(q.gbk().f)}r.P2()},
stg(a){var s,r=this
if(r.fy===a)return
r.aB(new A.a_K(r,a))
s=r.go
s.toString
s.sc9(0,r.fy?B.d2:A.eh.prototype.gbG.call(r,r))
s=r.id
s.toString
s.sc9(0,r.fy?B.ci:A.eh.prototype.gAO.call(r))
r.ns()},
ff(){var s=0,r=A.a2(t.ij),q,p=this,o,n,m
var $async$ff=A.a3(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:p.k2.gbk()
o=A.aq(p.k1,!0,t.CQ),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.a9(o[m].$0(),$async$ff)
case 6:if(!b){q=B.U1
s=1
break}case 4:++m
s=3
break
case 5:q=p.Pc()
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$ff,r)},
xM(a){this.OC(a)
this.ns()},
ns(){var s,r=this
r.Oz()
r.aB(new A.a_I())
s=r.ok
s===$&&A.b()
s.fT()
s=r.p2
s===$&&A.b()
r.gox()
s.sox(!0)},
rb(){this.Oy()
var s=this.ok
s===$&&A.b()
s.fT()
s=this.k2
if(s.gbk()!=null)s.gbk().Tc()},
Rh(a){var s,r,q=this,p=null
q.ga_4()
q.gxh()
s=A.ahU(!0,p,p,!1,p,q.ga_5(),p)
r=q.go
if(r.gaU(r)!==B.aG){r=q.go
r=r.gaU(r)===B.G}else r=!0
s=A.Z7(s,r,p)
q.gxh()
return s},
Rj(a){var s=this,r=null,q=s.p1
return q==null?s.p1=A.dO(r,new A.pB(s,s.k2,A.n(s).i("pB<1>")),!1,r,!1,r,r,r,r,r,r,r,r,r,r,r,r,B.T5,r,r,r):q},
h(a){return"ModalRoute("+this.b.h(0)+", animation: "+A.h(this.as)+")"}}
A.a_K.prototype={
$0(){this.a.fy=this.b},
$S:0}
A.a_I.prototype={
$0(){},
$S:0}
A.pA.prototype={
ff(){var s=0,r=A.a2(t.ij),q,p=this,o
var $async$ff=A.a3(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:o=p.lz$
if(o!=null&&o.length!==0){q=B.AN
s=1
break}q=p.OJ()
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$ff,r)},
jX(a){var s,r,q=this,p=q.lz$
if(p!=null&&p.length!==0){s=p.pop()
s.b=null
s.a5H()
r=s.c&&--q.yi$===0
if(q.lz$.length===0||r)q.ns()
return!1}q.P3(a)
return!0}}
A.Ih.prototype={
N(a){var s,r,q,p=t.l,o=A.ch(a,B.bF,p).w.f,n=Math.max(o.a,0),m=this.d,l=m?o.b:0
l=Math.max(l,0)
s=Math.max(o.c,0)
r=this.f
q=r?o.d:0
return new A.fO(new A.bn(n,l,s,Math.max(q,0)),A.nY(this.x,A.ch(a,null,p).w.Kx(r,!0,!0,m),null),null)}}
A.Il.prototype={
KE(){},
I2(a,b){if(b!=null)b.cS(new A.uS(null,a,b,0))},
I3(a,b,c){b.cS(A.aem(b,null,null,a,c))},
rv(a,b,c){b.cS(new A.hM(null,c,0,a,b,0))},
I1(a,b){b.cS(new A.iR(null,a,b,0))},
nj(){},
n(){},
h(a){return"<optimized out>#"+A.b4(this)}}
A.jL.prototype={
nj(){this.a.fi(0)},
ghQ(){return!1},
gfR(){return!1},
gdZ(){return 0}}
A.YN.prototype={
ghQ(){return!1},
gfR(){return!1},
gdZ(){return 0},
n(){this.b.$0()
this.pH()}}
A.a30.prototype={
QV(a,b){var s,r,q=this
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
else return Math.min(r/3,s)*J.eX(a)}else return 0}}},
b1(a,b){var s,r,q,p,o=this
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
p=o.QV(s,q)
if(p===0)return
s=o.a
if(A.abS(s.w.a.c))p=-p
s.Ae(p>0?B.iN:B.iO)
r=s.at
r.toString
s.uA(r-s.r.xd(s,p))},
n(){this.x=null
this.b.$0()},
h(a){return"<optimized out>#"+A.b4(this)}}
A.Wo.prototype={
I2(a,b){var s=t.o5.a(this.b.x)
if(b!=null)b.cS(new A.uS(s,a,b,0))},
I3(a,b,c){b.cS(A.aem(b,null,t.mF.a(this.b.x),a,c))},
rv(a,b,c){b.cS(new A.hM(t.mF.a(this.b.x),c,0,a,b,0))},
I1(a,b){var s=this.b.x
b.cS(new A.iR(s instanceof A.eu?s:null,a,b,0))},
ghQ(){var s=this.b
return(s==null?null:s.w)!==B.bC},
gfR(){return!0},
gdZ(){return 0},
n(){this.b=null
this.pH()},
h(a){return"<optimized out>#"+A.b4(this)+"("+A.h(this.b)+")"}}
A.zX.prototype={
KE(){var s=this.a,r=this.b
r===$&&A.b()
s.fi(r.gdZ())},
nj(){var s=this.a,r=this.b
r===$&&A.b()
s.fi(r.gdZ())},
wG(){var s=this.b
s===$&&A.b()
s=s.x
s===$&&A.b()
if(!(Math.abs(this.a.uA(s))<1e-10)){s=this.a
s.eV(new A.jL(s))}},
ww(){this.a.fi(0)},
rv(a,b,c){var s=this.b
s===$&&A.b()
b.cS(new A.hM(null,c,s.gdZ(),a,b,0))},
gfR(){return!0},
gdZ(){var s=this.b
s===$&&A.b()
return s.gdZ()},
n(){var s=this.b
s===$&&A.b()
s.n()
this.pH()},
h(a){var s=A.b4(this),r=this.b
r===$&&A.b()
return"<optimized out>#"+s+"("+r.h(0)+")"},
ghQ(){return this.c}}
A.CT.prototype={
wG(){var s=this.a,r=this.c
r===$&&A.b()
r=r.x
r===$&&A.b()
if(s.uA(r)!==0){s=this.a
s.eV(new A.jL(s))}},
ww(){var s=this.a,r=this.c
r===$&&A.b()
s.fi(r.gdZ())},
rv(a,b,c){var s=this.c
s===$&&A.b()
b.cS(new A.hM(null,c,s.gdZ(),a,b,0))},
ghQ(){return!0},
gfR(){return!0},
gdZ(){var s=this.c
s===$&&A.b()
return s.gdZ()},
n(){var s=this.b
s===$&&A.b()
s.fE(0)
s=this.c
s===$&&A.b()
s.n()
this.pH()},
h(a){var s=A.b4(this),r=this.c
r===$&&A.b()
return"<optimized out>#"+s+"("+r.h(0)+")"}}
A.uN.prototype={
oS(a,b,c,d){var s,r=this
if(b.a==null){s=$.fP.iV$
s===$&&A.b()
s=s.X(0,c)}else s=!0
if(s){r.b.oS(a,b,c,d)
return}s=r.a
if(s.gaL(s)==null)return
s=s.gaL(s)
s.toString
if(A.ast(s)){$.bL.u7(new A.a2X(r,a,b,c,d))
return}r.b.oS(a,b,c,d)},
t0(a,b,c){return this.b.t0(0,b,c)},
t2(a,b){return this.b.t2(a,b)},
t3(a,b){return this.b.t3(a,b)},
zc(a){return this.b.zc(a)}}
A.a2X.prototype={
$1(a){var s=this
A.en(new A.a2W(s.a,s.b,s.c,s.d,s.e))},
$S:2}
A.a2W.prototype={
$0(){var s=this
return s.a.oS(s.b,s.c,s.d,s.e)},
$S:0}
A.zG.prototype={
F(){return"AndroidOverscrollIndicator."+this.b}}
A.Im.prototype={
lj(a,b,c,d,e,f,g){return new A.aaW(this,g!==!1,c!==!1,d,e,b,f,a)},
HF(a){return this.lj(null,null,null,null,null,null,a)},
HI(a,b,c){return this.lj(null,a,b,null,null,null,c)},
hM(a){return A.kK()},
giT(){return B.Ba},
goK(){return A.ci([B.c0,B.cx],t.lT)},
r8(a,b,c){var s=null
switch(this.hM(a).a){case 3:case 4:case 5:return A.as5(b,c.b,B.bM,s,s,A.zm(),B.t,s,s,s,s,B.d7,s)
case 0:case 1:case 2:return b}},
r6(a,b,c){switch(this.hM(a).a){case 2:case 3:case 4:case 5:return b
case 0:switch(1){case 1:break}break
case 1:break}return A.aho(c.a,b,B.l)},
tT(a){switch(this.hM(a).a){case 2:return new A.a2Y()
case 4:return new A.a2Z()
case 0:case 1:case 3:case 5:return new A.a3_()}},
jr(a){switch(this.hM(a).a){case 2:return B.CD
case 4:return B.CE
case 0:case 1:case 3:case 5:return B.Ea}},
B_(a){return!1},
h(a){return"ScrollBehavior"}}
A.a2Y.prototype={
$1(a){return A.aqe(a.gc_(a))},
$S:349}
A.a2Z.prototype={
$1(a){var s=a.gc_(a),r=t.pa
return new A.nW(A.b_(20,null,!1,r),s,A.b_(20,null,!1,r))},
$S:350}
A.a3_.prototype={
$1(a){return new A.h7(a.gc_(a),A.b_(20,null,!1,t.pa))},
$S:114}
A.aaW.prototype={
giT(){var s=this.f
return s==null?B.Ba:s},
goK(){var s=this.r
return s==null?A.ci([B.c0,B.cx],t.lT):s},
r6(a,b,c){if(this.c)return this.a.r6(a,b,c)
return b},
r8(a,b,c){if(this.b)return this.a.r8(a,b,c)
return b},
lj(a,b,c,d,e,f,g){var s=this,r=g==null?s.b:g,q=c==null?s.c:c,p=b==null?s.giT():b,o=s.goK(),n=s.w
if(n==null)n=B.h9
return s.a.lj(n,p,q,s.d,s.e,o,r)},
HF(a){return this.lj(null,null,null,null,null,null,a)},
HI(a,b,c){return this.lj(null,a,b,null,null,null,c)},
hM(a){var s=this.a.hM(a)
return s},
jr(a){var s=this.a.jr(a)
return s},
B_(a){var s,r=this
if(A.v(a.a)===A.v(r.a))if(a.b===r.b)if(a.c===r.c)if(A.Tq(a.giT(),r.giT()))if(A.Tq(a.goK(),r.goK()))s=!1
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
return s},
tT(a){return this.a.tT(a)},
h(a){return"_WrappedScrollBehavior"}}
A.uO.prototype={
bK(a){var s=this.f,r=a.f
if(A.v(s)===A.v(r))s=s!==r&&s.B_(r)
else s=!0
return s}}
A.oo.prototype={
hf(a,b,c){return this.ZR(a,b,c)},
ZR(a,b,c){var s=0,r=A.a2(t.H),q=this,p,o,n
var $async$hf=A.a3(function(d,e){if(d===1)return A.a_(e,r)
while(true)switch(s){case 0:n=A.a([],t.iJ)
for(p=q.f,o=0;o<p.length;++o)n.push(p[o].hf(a,b,c))
s=2
return A.a9(A.Dy(n,t.H),$async$hf)
case 2:return A.a0(null,r)}})
return A.a1($async$hf,r)},
af(a){this.f.push(a)
a.Z(0,this.gdW())},
nJ(a,b){b.I(0,this.gdW())
B.b.A(this.f,b)},
n(){var s,r,q,p
for(s=this.f,r=s.length,q=this.gdW(),p=0;p<s.length;s.length===r||(0,A.J)(s),++p)s[p].I(0,q)
this.dH()},
HJ(a,b,c){return A.asr(b,null,0,!0,c,a)},
h(a){var s=A.a([],t.s),r=this.f,q=r.length
if(q===0)s.push("no clients")
else if(q===1){r=B.b.gbc(r).at
r.toString
s.push("one client, offset "+B.c.O(r,1))}else s.push(""+q+" clients")
return"<optimized out>#"+A.b4(this)+"("+B.b.bm(s,", ")+")"}}
A.a4_.prototype={
go0(){return null},
h(a){var s=A.a([],t.s)
this.cc(s)
return"<optimized out>#"+A.b4(this)+"("+B.b.bm(s,", ")+")"},
cc(a){var s,r,q
try{s=this.go0()
if(s!=null)a.push("estimated child count: "+A.h(s))}catch(q){r=A.an(q)
a.push("estimated child count: EXCEPTION ("+J.L(r).h(0)+")")}}}
A.pM.prototype={}
A.a3Z.prototype={
IB(a){return null},
np(a,b){var s,r,q,p,o,n,m,l,k=null
if(b>=0){p=this.b
p=p!=null&&b>=p}else p=!0
if(p)return k
s=null
try{s=this.a.$2(a,b)}catch(o){r=A.an(o)
q=A.aH(o)
n=new A.bs(r,q,"widgets library",A.bg("building"),k,!1)
A.d9(n)
s=A.Xi(n)}if(s==null)return k
if(s.a!=null){p=s.a
p.toString
m=new A.pM(p)}else m=k
p=s
s=new A.fV(p,k)
l=A.afc(s,b)
if(l!=null)s=new A.rR(l,s,k)
p=s
s=new A.mZ(new A.pN(p,k),k)
return new A.iz(s,m)},
go0(){return this.b},
B0(a){return!0}}
A.a40.prototype={
T1(a){var s,r,q,p=null,o=this.r
if(!o.X(0,a)){s=o.j(0,p)
s.toString
for(r=this.f,q=s;q<r.length;){s=r[q].a
if(s!=null)o.l(0,s,q)
if(J.e(s,a)){o.l(0,p,q+1)
return q}++q}o.l(0,p,q)}else return o.j(0,a)
return p},
IB(a){return this.T1(a instanceof A.pM?a.a:a)},
np(a,b){var s,r,q,p,o=null
if(b<0||b>=this.f.length)return o
s=this.f[b]
r=s.a
q=r!=null?new A.pM(r):o
s=new A.fV(s,o)
p=A.afc(s,b)
s=p!=null?new A.rR(p,s,o):s
return new A.iz(new A.mZ(new A.pN(s,o),o),q)},
go0(){return this.f.length},
B0(a){return this.f!==a.f}}
A.pN.prototype={
al(){return new A.xU(null,B.m)}}
A.xU.prototype={
gtV(){return this.r},
a3p(a){return new A.a9Y(this,a)},
qM(a,b){var s,r=this
if(b){s=r.d;(s==null?r.d=A.aW(t.yu):s).H(0,a)}else{s=r.d
if(s!=null)s.A(0,a)}s=r.d
s=s==null?null:s.a!==0
s=s===!0
if(r.r!==s){r.r=s
r.p6()}},
aY(){var s,r,q,p=this
p.cj()
s=p.c
s.toString
r=A.aen(s)
s=p.f
if(s!=r){if(s!=null){q=p.e
if(q!=null)new A.b6(q,A.n(q).i("b6<1>")).Y(0,s.gzM(s))}p.f=r
if(r!=null){s=p.e
if(s!=null)new A.b6(s,A.n(s).i("b6<1>")).Y(0,r.giL(r))}}},
H(a,b){var s,r=this,q=r.a3p(b)
b.Z(0,q)
s=r.e;(s==null?r.e=A.y(t.yu,t.M):s).l(0,b,q)
r.f.H(0,b)
if(b.gm(b).c!==B.cJ)r.qM(b,!0)},
A(a,b){var s=this.e
if(s==null)return
s=s.A(0,b)
s.toString
b.I(0,s)
this.f.A(0,b)
this.qM(b,!1)},
n(){var s,r,q=this,p=q.e
if(p!=null){for(p=A.iA(p,p.r);p.u();){s=p.d
q.f.A(0,s)
r=q.e.j(0,s)
r.toString
s.I(0,r)}q.e=null}q.d=null
q.aP()},
N(a){var s=this
s.Bc(a)
if(s.f==null)return s.a.c
return A.aiI(s.a.c,s)}}
A.a9Y.prototype={
$0(){var s=this.b,r=this.a
if(s.gm(s).c!==B.cJ)r.qM(s,!0)
else r.qM(s,!1)},
$S:0}
A.SF.prototype={
aD(){this.aV()
if(this.r)this.pV()},
cR(){var s=this.hr$
if(s!=null){s.ar()
s.dH()
this.hr$=null}this.pI()}}
A.fY.prototype={
fG(){var s=this,r=null,q=s.gyG()?s.geB():r,p=s.gyG()?s.geA():r,o=s.gJ6()?s.gca():r,n=s.gJ9()?s.gp8():r,m=s.gfB(),l=s.grm(s)
return new A.rv(q,p,o,n,m,l)},
gzx(){var s=this
return s.gca()<s.geB()||s.gca()>s.geA()},
gH9(){var s=this
return s.gca()===s.geB()||s.gca()===s.geA()},
gk6(){var s=this
return s.gp8()-A.E(s.geB()-s.gca(),0,s.gp8())-A.E(s.gca()-s.geA(),0,s.gp8())}}
A.rv.prototype={
geB(){var s=this.a
s.toString
return s},
geA(){var s=this.b
s.toString
return s},
gyG(){return this.a!=null&&this.b!=null},
gca(){var s=this.c
s.toString
return s},
gJ6(){return this.c!=null},
gp8(){var s=this.d
s.toString
return s},
gJ9(){return this.d!=null},
h(a){var s=this
return"FixedScrollMetrics("+B.c.O(Math.max(s.gca()-s.geB(),0),1)+"..["+B.c.O(s.gk6(),1)+"].."+B.c.O(Math.max(s.geA()-s.gca(),0),1)+")"},
gfB(){return this.e},
grm(a){return this.f}}
A.Nm.prototype={}
A.ej.prototype={}
A.JR.prototype={
K2(a){if(t.bx.b(a))++a.dt$
return!1}}
A.dN.prototype={
cc(a){this.PR(a)
a.push(this.a.h(0))}}
A.uS.prototype={
cc(a){var s
this.mt(a)
s=this.d
if(s!=null)a.push(s.h(0))}}
A.fZ.prototype={
cc(a){var s
this.mt(a)
a.push("scrollDelta: "+A.h(this.e))
s=this.d
if(s!=null)a.push(s.h(0))}}
A.hM.prototype={
cc(a){var s,r=this
r.mt(a)
a.push("overscroll: "+B.c.O(r.e,1))
a.push("velocity: "+B.c.O(r.f,1))
s=r.d
if(s!=null)a.push(s.h(0))}}
A.iR.prototype={
cc(a){var s
this.mt(a)
s=this.d
if(s!=null)a.push(s.h(0))}}
A.JK.prototype={
cc(a){this.mt(a)
a.push("direction: "+this.d.h(0))}}
A.xO.prototype={
cc(a){var s,r
this.uw(a)
s=this.dt$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.xN.prototype={
bK(a){return this.f!==a.f}}
A.kv.prototype={
a3o(a,b){return this.a.$1(b)}}
A.uQ.prototype={
al(){return new A.uR(new A.lC(t.uk),B.m)}}
A.uR.prototype={
I(a,b){var s,r,q=this.d
q.toString
q=A.atU(q)
s=A.n(q).c
for(;q.u();){r=q.c
if(r==null)r=s.a(r)
if(J.e(r.a,b)){q=r.f1$
q.toString
q.Gb(A.n(r).i("eE.E").a(r))
return}}},
EC(a){var s,r,q,p,o,n,m,l,k=this.d
if(k.b===0)return
p=A.aq(k,!0,t.cS)
for(k=p.length,o=0;o<k;++o){s=p[o]
try{if(s.f1$!=null)J.anG(s,a)}catch(n){r=A.an(n)
q=A.aH(n)
m=A.bg("while dispatching notifications for "+A.v(this).h(0))
l=$.fq()
if(l!=null)l.$1(new A.bs(r,q,"widget library",m,new A.a31(this),!1))}}},
N(a){var s=this
return new A.cC(new A.a32(s),new A.cC(new A.a33(s),new A.xN(s,s.a.c,null),null,t.Bf),null,t.iY)},
n(){this.d=null
this.aP()}}
A.a31.prototype={
$0(){var s=null,r=this.a
return A.a([A.hr("The "+A.v(r).h(0)+" sending notification was",r,!0,B.aI,s,!1,s,s,B.ah,s,!1,!0,!0,B.be,s,t.Ec)],t.E)},
$S:14}
A.a32.prototype={
$1(a){this.a.EC(a.H7())
return!1},
$S:66}
A.a33.prototype={
$1(a){this.a.EC(a)
return!1},
$S:25}
A.Io.prototype={
F(){return"ScrollDecelerationRate."+this.b}}
A.m4.prototype={
hg(a){var s=this.a
s=s==null?null:s.jR(a)
return s==null?a:s},
jR(a){return new A.m4(this.hg(a))},
xd(a,b){var s=this.a
if(s==null)return b
return s.xd(a,b)},
jx(a){var s,r=this.a
if(r==null){r=a.at
r.toString
if(r===0){r=a.z
r.toString
s=a.Q
s.toString
s=r!==s
r=s}else r=!0
return r}return r.jx(a)},
Ks(a,b,c){var s=this.a
if(s==null){s=A.a6b(c).gjk()
return Math.abs(a)>Math.max(Math.abs(s.a),Math.abs(s.b))}return s.Ks(a,b,c)},
nh(a,b){var s=this.a
if(s==null)return 0
return s.nh(a,b)},
r_(a,b,c,d){var s=this.a
if(s==null){s=b.c
s.toString
return s}return s.r_(a,b,c,d)},
lk