this,o
var $async$$2=A.a9(function(c,d){if(c===1)return A.a5(d,r)
while(true)switch(s){case 0:o=p.a
if(o.b){s=1
break}p.b.$3(o.a,a,b)
o.b=!0
case 1:return A.a6(q,r)}})
return A.a7($async$$2,r)},
$2(a,b){return this.Ji(a,b)},
$S:190}
A.X3.prototype={
$1(a){var s,r,q,p=this
p.a.a=a
try{p.c.$2(a,p.d)}catch(q){s=A.au(q)
r=A.aG(q)
p.d.$2(s,r)}},
$S(){return A.o(this.b).h("aN(fu.T)")}}
A.X5.prototype={
$0(){var s=this.a.a
s.toString
return s},
$S:87}
A.X6.prototype={
$0(){return this.a.r0(this.b,$.fB.ga_H())},
$S:87}
A.fW.prototype={
k(a,b){var s=this
if(b==null)return!1
if(J.S(b)!==A.A(s))return!1
return b instanceof A.fW&&b.a===s.a&&b.b===s.b&&b.c===s.c},
gu(a){return A.T(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"AssetBundleImageKey(bundle: "+this.a.i(0)+', name: "'+this.b+'", scale: '+A.h(this.c)+")"}}
A.z8.prototype={
r0(a,b){return A.agp(this.kq(a,b,null),a.b,null,a.c)},
qZ(a,b,c){return A.agp(this.kq(b,null,c),b.b,null,b.c)},
kq(a,b,c){return this.T8(a,b,c)},
T8(a,b,c){var s=0,r=A.a8(t.gP),q,p=2,o,n,m,l,k,j,i
var $async$kq=A.a9(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:s=b!=null?3:4
break
case 3:n=null
p=6
s=9
return A.an(a.a.r_(a.b),$async$kq)
case 9:n=e
p=2
s=8
break
case 6:p=5
j=o
if(A.au(j) instanceof A.ji){k=$.fB.hD$
k===$&&A.b()
k.qs(a)
throw j}else throw j
s=8
break
case 5:s=2
break
case 8:if(n==null){k=$.fB.hD$
k===$&&A.b()
k.qs(a)
throw A.d(A.aa("Unable to read data"))}q=b.$1(n)
s=1
break
case 4:m=null
p=11
s=14
return A.an(a.a.cw(0,a.b),$async$kq)
case 14:m=e
p=2
s=13
break
case 11:p=10
i=o
if(A.au(i) instanceof A.ji){k=$.fB.hD$
k===$&&A.b()
k.qs(a)
throw i}else throw i
s=13
break
case 10:s=2
break
case 13:if(m==null){k=$.fB.hD$
k===$&&A.b()
k.qs(a)
throw A.d(A.aa("Unable to read data"))}c.toString
q=c.$1(A.cR(m.buffer,0,null))
s=1
break
case 1:return A.a6(q,r)
case 2:return A.a5(o,r)}})
return A.a7($async$kq,r)}}
A.a6F.prototype={}
A.mQ.prototype={
glf(){return this.a},
xU(a){var s,r={},q=a.a
if(q==null)q=$.QI()
r.a=r.b=null
q.a0f("AssetManifest.ec955590.json",A.auy(),t.jd).by(new A.R8(r,this,a,q),t.H).ie(new A.R9(r))
s=r.a
if(s!=null)return s
s=new A.aq($.ai,t.hv)
r.b=new A.bg(s,t.q8)
return s},
Pd(a,b,c){var s,r,q,p=b.b
if(p==null||c==null||J.fc(c))return a
s=A.adm(t.i,t.N)
for(r=J.as(c);r.t();){q=r.gG(r)
s.l(0,this.Dn(q),q)}p.toString
return this.Qi(s,p)},
Qi(a,b){var s,r,q
if(a.m7(b)){s=a.j(0,b)
s.toString
return s}r=a.a02(b)
q=a.Zj(b)
if(r==null)return a.j(0,q)
if(q==null)return a.j(0,r)
if(b<2||b>(r+q)/2)return a.j(0,q)
else return a.j(0,r)},
Dn(a){var s,r,q,p
if(a===this.a)return 1
s=A.adz(a,0,null)
r=s.glm().length>1?s.glm()[s.glm().length-2]:""
q=$.ak_().qD(r)
if(q!=null&&q.b.length-1>0){p=q.b[1]
p.toString
return A.ajh(p)}return 1},
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return b instanceof A.mQ&&b.glf()===this.glf()&&!0},
gu(a){return A.T(this.glf(),this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"AssetImage(bundle: "+A.h(this.b)+', name: "'+this.glf()+'")'}}
A.R8.prototype={
$1(a){var s,r=this,q=r.b,p=q.glf(),o=a==null?null:J.bb(a,q.glf())
o=q.Pd(p,r.c,o)
o.toString
s=new A.fW(r.d,o,q.Dn(o))
q=r.a
p=q.b
if(p!=null)p.d_(0,s)
else q.a=new A.bl(s,t.rT)},
$S:192}
A.R9.prototype={
$2(a,b){this.a.b.q0(a,b)},
$S:45}
A.ft.prototype={
cr(a){return new A.ft(this.a.cr(0),this.b,this.c)},
i(a){var s=this.c
s=s!=null?s+" ":""
return s+this.a.i(0)+" @ "+A.fT(this.b)+"x"},
gu(a){return A.T(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(J.S(b)!==A.A(s))return!1
return b instanceof A.ft&&b.a===s.a&&b.b===s.b&&b.c==s.c}}
A.el.prototype={
gu(a){return A.T(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(J.S(b)!==A.A(s))return!1
return b instanceof A.el&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&J.f(b.c,s.c)},
a0E(a,b){return this.a.$2(a,b)}}
A.X9.prototype={
zC(a){var s,r=this
r.a=a
s=r.b
if(s!=null){r.b=null
a.f=!0
B.b.Z(s,a.gpG(a))
r.a.f=!1}},
S(a,b){var s=this.a
if(s!=null)return s.S(0,b)
s=this.b;(s==null?this.b=A.a([],t.fE):s).push(b)},
F(a,b){var s,r=this.a
if(r!=null)return r.F(0,b)
for(s=0;r=this.b,s<r.length;++s)if(J.f(r[s],b)){r=this.b
r.toString
B.b.ft(r,s)
break}}}
A.nv.prototype={
oy(a){++this.a.r},
m(){var s=this.a;--s.r
s.p7()
this.a=null}}
A.ld.prototype={
S(a,b){var s,r,q,p,o,n,m,l=this
if(l.w)A.a_(A.aa(u.y))
l.e=!0
l.a.push(b)
o=l.b
if(o!=null)try{o=o.cr(0)
n=l.f
b.a.$2(o,!n)}catch(m){s=A.au(m)
r=A.aG(m)
l.Iy(A.bj("by a synchronously-called image listener"),s,r)}o=l.c
if(o!=null&&b.c!=null)try{n=b.c
n.toString
n.$2(o.a,o.b)}catch(s){q=A.au(s)
p=A.aG(s)
if(!J.f(q,l.c.a))A.dr(new A.bt(q,p,"image resource service",A.bj("by a synchronously-called image error listener"),null,!1))}},
F(a,b){var s,r,q,p,o,n=this
if(n.w)A.a_(A.aa(u.y))
for(s=n.a,r=0;r<s.length;++r)if(J.f(s[r],b)){B.b.ft(s,r)
break}if(s.length===0){s=n.x
q=A.a(s.slice(0),A.aj(s))
for(p=q.length,o=0;o<q.length;q.length===p||(0,A.R)(q),++o)q[o].$0()
B.b.U(s)
n.p7()}},
p7(){var s,r=this
if(!r.e||r.w||r.a.length!==0||r.r!==0)return
s=r.b
if(s!=null)s.a.m()
r.b=null
r.w=!0},
K7(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.w)A.a_(A.aa(u.y))
p=i.b
if(p!=null)p.a.m()
i.b=a
p=i.a
if(p.length===0)return
o=A.ax(p,!0,t.tg)
for(p=o.length,n=a.a,m=a.b,l=a.c,k=0;k<p;++k){s=o[k]
try{s.a0E(new A.ft(n.cr(0),m,l),!1)}catch(j){r=A.au(j)
q=A.aG(j)
i.Iy(A.bj("by an image listener"),r,q)}}},
rB(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i="image resource service"
this.c=new A.bt(b,e,i,a,c,d)
o=this.a
n=t.pE
m=A.ax(new A.dM(new A.aL(o,new A.Xa(),A.aj(o).h("aL<1,~(N,cX?)?>")),n),!0,n.h("p.E"))
s=!1
for(o=m.length,l=0;l<o;++l){r=m[l]
try{r.$2(b,e)
s=!0}catch(k){q=A.au(k)
p=A.aG(k)
if(!J.f(q,b)){n=A.bj("when reporting an error to an image listener")
j=$.fb()
if(j!=null)j.$1(new A.bt(q,p,i,n,null,!1))}}}if(!s){o=this.c
o.toString
A.dr(o)}},
Iy(a,b,c){return this.rB(a,b,null,!1,c)}}
A.Xa.prototype={
$1(a){return a.c},
$S:194}
A.FP.prototype={
Ob(a,b,c,d,e){this.d=c
b.eR(this.gRh(),new A.YM(this,d),t.H)},
Ri(a){this.z=a
if(this.a.length!==0)this.kl()},
R9(a){var s,r,q,p=this
p.cx=!1
if(p.a.length===0)return
s=p.ay
if(s!=null){r=p.ax
r===$&&A.b()
r=a.a-r.a>=s.a}else r=!0
if(r){s=p.at
p.BW(new A.ft(s.gh5(s).cr(0),p.Q,p.d))
p.ax=a
s=p.at
p.ay=s.gYS(s)
s=p.at
s.gh5(s).m()
p.at=null
q=B.f.hu(p.ch,p.z.gxa())
if(p.z.gIx()===-1||q<=p.z.gIx())p.kl()
return}s.toString
r=p.ax
r===$&&A.b()
p.CW=A.ch(new A.aT(B.d.b2((s.a-(a.a-r.a))*$.aj_)),new A.YL(p))},
kl(){var s=0,r=A.a8(t.H),q,p=2,o,n=this,m,l,k,j,i
var $async$kl=A.a9(function(a,b){if(a===1){o=b
s=p}while(true)switch(s){case 0:j=n.at
if(j!=null)j.gh5(j).m()
n.at=null
p=4
s=7
return A.an(n.z.rV(),$async$kl)
case 7:n.at=b
p=2
s=6
break
case 4:p=3
i=o
m=A.au(i)
l=A.aG(i)
n.rB(A.bj("resolving an image frame"),m,n.as,!0,l)
s=1
break
s=6
break
case 3:s=2
break
case 6:if(n.z.gxa()===1){if(n.a.length===0){s=1
break}j=n.at
n.BW(new A.ft(j.gh5(j).cr(0),n.Q,n.d))
j=n.at
j.gh5(j).m()
n.at=null
s=1
break}n.DM()
case 1:return A.a6(q,r)
case 2:return A.a5(o,r)}})
return A.a7($async$kl,r)},
DM(){if(this.cx)return
this.cx=!0
$.bH.t0(this.gR7())},
BW(a){this.K7(a);++this.ch},
S(a,b){var s,r=this
if(r.a.length===0){s=r.z
if(s!=null)s=r.b==null||s.gxa()>1
else s=!1}else s=!1
if(s)r.kl()
r.La(0,b)},
F(a,b){var s,r=this
r.Lb(0,b)
if(r.a.length===0){s=r.CW
if(s!=null)s.aP(0)
r.CW=null}},
p7(){this.L9()
if(this.w)this.y=null}}
A.YM.prototype={
$2(a,b){this.a.rB(A.bj("resolving an image codec"),a,this.b,!0,b)},
$S:45}
A.YL.prototype={
$0(){this.a.DM()},
$S:0}
A.Ll.prototype={}
A.Lk.prototype={}
A.z_.prototype={}
A.js.prototype={
k(a,b){var s
if(b==null)return!1
if(b instanceof A.js)if(b.a===this.a)if(b.b==this.b)s=A.cF(b.f,this.f)
else s=!1
else s=!1
else s=!1
return s},
gu(a){return A.T(this.a,this.b,this.c,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"InlineSpanSemanticsInformation{text: "+this.a+", semanticsLabel: "+A.h(this.b)+", recognizer: "+A.h(this.c)+"}"}}
A.fv.prototype={
JG(a){var s={}
s.a=null
this.aR(new A.Xj(s,a,new A.z_()))
return s.a},
IT(a){var s,r=new A.bS("")
this.FM(r,!0,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
an(a,b){var s={}
if(b<0)return null
s.a=null
this.aR(new A.Xi(s,b,new A.z_()))
return s.a},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.S(b)!==A.A(this))return!1
return b instanceof A.fv&&J.f(b.a,this.a)},
gu(a){return J.n(this.a)}}
A.Xj.prototype={
$1(a){var s=a.JH(this.b,this.c)
this.a.a=s
return s==null},
$S:42}
A.Xi.prototype={
$1(a){var s=a.XB(this.b,this.c)
this.a.a=s
return s==null},
$S:42}
A.dc.prototype={
aH(a,b){var s=this.a.aH(0,b)
return new A.dc(this.b.a6(0,b),s)},
bX(a,b){var s,r,q=this
if(a instanceof A.dc){s=A.at(a.a,q.a,b)
r=A.fX(a.b,q.b,b)
r.toString
return new A.dc(r,s)}if(a instanceof A.d4){s=A.at(a.a,q.a,b)
return new A.dN(q.b,1-b,a.b,s)}return q.kd(a,b)},
bY(a,b){var s,r,q=this
if(a instanceof A.dc){s=A.at(q.a,a.a,b)
r=A.fX(q.b,a.b,b)
r.toString
return new A.dc(r,s)}if(a instanceof A.d4){s=A.at(q.a,a.a,b)
return new A.dN(q.b,b,a.b,s)}return q.ke(a,b)},
eU(a,b){var s=$.av().df()
s.f7(this.b.Y(b).dL(a))
return s},
hd(a,b,c){var s,r,q,p,o=this.a
switch(o.c.a){case 0:break
case 1:s=this.b
if(o.b===0)a.cJ(s.Y(c).dL(b),o.hj())
else{r=$.av().bf()
r.sar(0,o.a)
q=s.Y(c).dL(b)
p=q.cN(-o.ge9())
a.qo(q.cN(o.gzV()),p,r)}break}},
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return b instanceof A.dc&&b.a.k(0,this.a)&&b.b.k(0,this.b)},
gu(a){return A.T(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"RoundedRectangleBorder("+this.a.i(0)+", "+this.b.i(0)+")"}}
A.dN.prototype={
aH(a,b){var s=this.a.aH(0,b)
return new A.dN(this.b.a6(0,b),b,this.d,s)},
bX(a,b){var s,r,q,p=this
if(a instanceof A.dc){s=A.at(a.a,p.a,b)
r=A.fX(a.b,p.b,b)
r.toString
return new A.dN(r,p.c*b,p.d,s)}if(a instanceof A.d4){s=A.at(a.a,p.a,b)
r=p.c
return new A.dN(p.b,r+(1-r)*(1-b),a.b,s)}if(a instanceof A.dN){s=A.at(a.a,p.a,b)
r=A.fX(a.b,p.b,b)
r.toString
q=A.Q(a.c,p.c,b)
q.toString
return new A.dN(r,q,p.d,s)}return p.kd(a,b)},
bY(a,b){var s,r,q,p=this
if(a instanceof A.dc){s=A.at(p.a,a.a,b)
r=A.fX(p.b,a.b,b)
r.toString
return new A.dN(r,p.c*(1-b),p.d,s)}if(a instanceof A.d4){s=A.at(p.a,a.a,b)
r=p.c
return new A.dN(p.b,r+(1-r)*b,a.b,s)}if(a instanceof A.dN){s=A.at(p.a,a.a,b)
r=A.fX(p.b,a.b,b)
r.toString
q=A.Q(p.c,a.c,b)
q.toString
return new A.dN(r,q,p.d,s)}return p.ke(a,b)},
DJ(a){var s,r,q,p,o,n,m,l,k=this.c
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
AQ(a,b){var s,r,q,p=this.b.Y(b),o=this.c
if(o===0)return p
s=this.d
if(s!==0){r=a.c-a.a
q=a.d-a.b
s=0.5+s/2
if(r<q){o=A.mT(p,A.zm(new A.bn(r/2,s*q/2)),o)
o.toString
return o}else{o=A.mT(p,A.zm(new A.bn(s*r/2,q/2)),o)
o.toString
return o}}return A.mT(p,A.qd(a.gfD()/2),o)},
eU(a,b){var s=$.av().df(),r=this.AQ(a,b)
r.toString
s.f7(r.dL(this.DJ(a)))
return s},
hd(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=this.AQ(b,c)
s.toString
a.cJ(s.dL(this.DJ(b)).cN(r.b*r.d/2),r.hj())
break}},
k(a,b){var s=this
if(b==null)return!1
if(J.S(b)!==A.A(s))return!1
return b instanceof A.dN&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c===s.c},
gu(a){return A.T(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r="RoundedRectangleBorder(",q=s.d
if(q!==0)return r+s.a.i(0)+", "+s.b.i(0)+", "+B.d.M(s.c*100,1)+u.D+B.d.M(q*100,1)+"% oval)"
return r+s.a.i(0)+", "+s.b.i(0)+", "+B.d.M(s.c*100,1)+"% of the way to being a CircleBorder)"}}
A.e6.prototype={
aH(a,b){return new A.e6(this.a.aH(0,b))},
bX(a,b){var s,r=this
if(a instanceof A.e6)return new A.e6(A.at(a.a,r.a,b))
if(a instanceof A.d4){s=A.at(a.a,r.a,b)
return new A.dP(1-b,a.b,s)}if(a instanceof A.dc){s=A.at(a.a,r.a,b)
return new A.dQ(a.b,1-b,s)}return r.kd(a,b)},
bY(a,b){var s,r=this
if(a instanceof A.e6)return new A.e6(A.at(r.a,a.a,b))
if(a instanceof A.d4){s=A.at(r.a,a.a,b)
return new A.dP(b,a.b,s)}if(a instanceof A.dc){s=A.at(r.a,a.a,b)
return new A.dQ(a.b,b,s)}return r.ke(a,b)},
eU(a,b){var s=a.gfD()/2,r=$.av().df()
r.f7(A.ad9(a,new A.bn(s,s)))
return r},
hd(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=b.gfD()/2
a.cJ(A.ad9(b,new A.bn(s,s)).cN(r.b*r.d/2),r.hj())
break}},
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return b instanceof A.e6&&b.a.k(0,this.a)},
gu(a){var s=this.a
return A.T(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"StadiumBorder("+this.a.i(0)+")"}}
A.dP.prototype={
aH(a,b){return new A.dP(b,this.c,this.a.aH(0,b))},
bX(a,b){var s,r,q,p=this
if(a instanceof A.e6)return new A.dP(p.b*b,p.c,A.at(a.a,p.a,b))
if(a instanceof A.d4){s=A.at(a.a,p.a,b)
r=p.b
return new A.dP(r+(1-r)*(1-b),a.b,s)}if(a instanceof A.dP){s=A.at(a.a,p.a,b)
r=A.Q(a.b,p.b,b)
r.toString
q=A.Q(a.c,p.c,b)
q.toString
return new A.dP(r,q,s)}return p.kd(a,b)},
bY(a,b){var s,r,q,p=this
if(a instanceof A.e6)return new A.dP(p.b*(1-b),p.c,A.at(p.a,a.a,b))
if(a instanceof A.d4){s=A.at(p.a,a.a,b)
r=p.b
return new A.dP(r+(1-r)*b,a.b,s)}if(a instanceof A.dP){s=A.at(p.a,a.a,b)
r=A.Q(p.b,a.b,b)
r.toString
q=A.Q(p.c,a.c,b)
q.toString
return new A.dP(r,q,s)}return p.ke(a,b)},
Eg(a){var s,r,q,p,o,n,m,l,k=this.b
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
mn(a){var s,r,q,p=A.qd(a.gfD()/2),o=this.c
if(o!==0){s=a.c-a.a
r=a.d-a.b
q=this.b
o=0.5+o/2
if(s<r){o=A.mT(p,A.zm(new A.bn(s/2,o*r/2)),q)
o.toString
return o}else{o=A.mT(p,A.zm(new A.bn(o*s/2,r/2)),q)
o.toString
return o}}return p},
eU(a,b){var s=$.av().df()
s.f7(this.mn(a).dL(this.Eg(a)))
return s},
hd(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.cJ(this.mn(b).dL(this.Eg(b)).cN(s.b*s.d/2),s.hj())
break}},
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return b instanceof A.dP&&b.a.k(0,this.a)&&b.b===this.b},
gu(a){return A.T(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r=s.c
if(r!==0)return"StadiumBorder("+s.a.i(0)+", "+B.d.M(s.b*100,1)+u.D+B.d.M(r*100,1)+"% oval)"
return"StadiumBorder("+s.a.i(0)+", "+B.d.M(s.b*100,1)+"% of the way to being a CircleBorder)"}}
A.dQ.prototype={
aH(a,b){var s=this.a.aH(0,b)
return new A.dQ(this.b.a6(0,b),b,s)},
bX(a,b){var s,r,q,p=this
if(a instanceof A.e6)return new A.dQ(p.b,p.c*b,A.at(a.a,p.a,b))
if(a instanceof A.dc){s=p.c
return new A.dQ(p.b,s+(1-s)*(1-b),A.at(a.a,p.a,b))}if(a instanceof A.dQ){s=A.at(a.a,p.a,b)
r=A.fX(a.b,p.b,b)
r.toString
q=A.Q(a.c,p.c,b)
q.toString
return new A.dQ(r,q,s)}return p.kd(a,b)},
bY(a,b){var s,r,q,p=this
if(a instanceof A.e6)return new A.dQ(p.b,p.c*(1-b),A.at(p.a,a.a,b))
if(a instanceof A.dc){s=p.c
return new A.dQ(p.b,s+(1-s)*b,A.at(p.a,a.a,b))}if(a instanceof A.dQ){s=A.at(p.a,a.a,b)
r=A.fX(p.b,a.b,b)
r.toString
q=A.Q(p.c,a.c,b)
q.toString
return new A.dQ(r,q,s)}return p.ke(a,b)},
mn(a){var s=a.gfD()/2
s=A.fX(this.b,A.zm(new A.bn(s,s)),1-this.c)
s.toString
return s},
eU(a,b){var s=$.av().df()
s.f7(this.mn(a).Y(b).dL(a))
return s},
hd(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.cJ(this.mn(b).Y(c).dL(b).cN(s.b*s.d/2),s.hj())
break}},
k(a,b){var s=this
if(b==null)return!1
if(J.S(b)!==A.A(s))return!1
return b instanceof A.dQ&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c===s.c},
gu(a){return A.T(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"StadiumBorder("+this.a.i(0)+", "+this.b.i(0)+", "+B.d.M(this.c*100,1)+"% of the way to being a RoundedRectangleBorder)"}}
A.m4.prototype={
D(){return"TextOverflow."+this.b}}
A.ls.prototype={
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(b instanceof A.ls)if(b.a.k(0,r.a))if(b.b===r.b)s=b.c==r.c
else s=!1
else s=!1
else s=!1
return s},
gu(a){var s=this
return A.T(s.a,s.b,s.d,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"PlaceholderDimensions("+this.a.i(0)+", "+A.h(this.d)+")"}}
A.vK.prototype={
D(){return"TextWidthBasis."+this.b}}
A.a64.prototype={}
A.IK.prototype={
a2(){var s=this,r=s.a
if(r!=null)r.m()
s.dy=s.dx=s.fr=s.a=null},
srF(a,b){var s,r,q=this
if(J.f(q.d,b))return
s=q.d
s=s==null?null:s.a
if(!J.f(s,b.a)){s=q.CW
if(s!=null)s.m()
q.CW=null}s=q.d
s=s==null?null:s.b1(0,b)
r=s==null?B.cC:s
q.d=b
q.e=null
s=r.a
if(s>=3)q.a2()
else if(s>=2)q.b=!0},
grp(){var s=this.e
if(s==null){s=this.d
s=s==null?null:s.IT(!1)
this.e=s}return s==null?"":s},
syI(a,b){if(this.f===b)return
this.f=b
this.a2()},
sbA(a){var s,r=this
if(r.r===a)return
r.r=a
r.a2()
s=r.CW
if(s!=null)s.m()
r.CW=null},
syJ(a){var s,r=this
if(r.w===a)return
r.w=a
r.a2()
s=r.CW
if(s!=null)s.m()
r.CW=null},
sYT(a){if(this.x==a)return
this.x=a
this.a2()},
sxE(a,b){if(J.f(this.y,b))return
this.y=b
this.a2()},
sxJ(a){if(this.z==a)return
this.z=a
this.a2()},
syK(a){if(this.as===a)return
this.as=a
this.a2()},
t9(a){if(a==null||a.length===0||A.cF(a,this.ch))return
this.ch=a
this.a2()},
BH(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.d.a
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
o=l==null?f:new A.IH(l)
k=e.w
j=e.x
i=e.d
h=e.r
if(h==null)h=14
e=e.as
e=A.ad5(n,i,h*q,j,k,e,m,p,f,s,r,o)}if(e==null){e=g.f
s=g.r
if(s==null)s=a
r=g.w
q=g.z
p=g.at
p=A.ad5(g.x,f,14*r,f,f,f,g.y,q,f,e,s,p)
e=p}return e},
PG(){return this.BH(null)},
grr(){var s,r,q=this,p=q.CW
if(p==null){p=q.BH(B.Q)
s=$.av().wo(p)
p=q.d
if(p==null)r=null
else{p=p.a
r=p==null?null:p.zn(q.w)}if(r!=null)s.yq(r)
s.pK(" ")
p=s.aM()
p.h8(B.Sf)
q.CW=p}return p.gbG(p)},
gbd(a){var s=this.as,r=this.a
s=s===B.Yh?r.gHO():r.gbd(r)
return Math.ceil(s)},
eg(a){var s
switch(a.a){case 0:s=this.a
return s.gpN(s)
case 1:s=this.a
return s.ga_u(s)}},
BG(){var s,r,q=this,p=q.d
if(p==null)throw A.d(A.aa("TextPainter.text must be set to a non-null value before using the TextPainter."))
s=q.PG()
r=$.av().wo(s)
s=q.w
p.Fx(r,q.ch,s)
q.ay=r.ga0T()
q.a=r.aM()
q.b=!1},
CS(a,b){var s,r,q=this
q.a.h8(new A.jK(b))
if(a!==b){switch(q.as.a){case 1:s=Math.ceil(q.a.gHO())
break
case 0:s=Math.ceil(q.a.ga0m())
break
default:s=null}s=A.E(s,a,b)
r=q.a
if(s!==Math.ceil(r.gbd(r)))q.a.h8(new A.jK(s))}},
xC(a,b){var s=this,r=s.a==null
if(!r&&b===s.cx&&a===s.cy)return
if(s.b||r)s.BG()
s.cx=b
s.cy=a
s.dy=s.dx=s.fr=null
s.CS(b,a)
s.ax=s.a.rP()},
a04(){return this.xC(1/0,0)},
aG(a,b){var s,r=this,q=r.cx,p=r.cy
if(r.a==null||q==null||p==null)throw A.d(A.aa("TextPainter.paint called when text geometry was not yet calculated.\nPlease call layout() before paint() to position the text before painting it."))
if(r.b){r.BG()
r.CS(q,p)}s=r.a
s.toString
a.jt(s,b)},
Ce(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.grp().length
if(g===0||a>g)return null
s=B.c.an(h.grp(),Math.max(0,a-1))
r=(s&63488)===55296||h.d.an(0,a)===8205||s===8207||s===8206
q=r?2:1
p=A.a([],t.px)
for(o=-g,n=!r,m=s===10;p.length===0;){l=a-q
p=h.a.z7(l,a,B.m6)
if(p.length===0){if(n&&m)break
if(l<o)break
q*=2
continue}k=B.b.gJ(p)
if(m){o=k.d
return new A.y(h.gui().a,o,h.gui().a,o+o-k.b)}o=k.e
j=o===B.r?k.c:k.a
i=o===B.Q?j-(b.c-b.a):j
o=h.a
o=A.E(i,0,o.gbd(o))
n=h.a
return new A.y(o,k.b,A.E(i,0,n.gbd(n)),k.d)}return null},
Cd(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.grp().length
if(h===0||a<0)return null
s=B.c.an(i.grp(),Math.min(a,h-1))
r=(s&63488)===55296||s===8205||s===8207||s===8206
q=r?2:1
p=A.a([],t.px)
for(o=h<<1>>>0,n=!r;p.length===0;){m=a+q
p=i.a.z7(a,m,B.m6)
if(p.length===0){if(n)break
if(m>=o)break
q*=2
continue}l=B.b.gT(p)
o=l.e
k=o===B.r?l.a:l.c
j=o===B.Q?k-(b.c-b.a):k
o=i.a
o=A.E(j,0,o.gbd(o))
n=i.a
return new A.y(o,l.b,A.E(j,0,n.gbd(n)),l.d)}return null},
gui(){var s=this
switch(s.f.a){case 0:return B.j
case 1:return new A.t(s.gbd(s),0)
case 2:return new A.t(s.gbd(s)/2,0)
case 3:case 4:switch(s.r.a){case 0:return new A.t(s.gbd(s),0)
case 1:return B.j}break
case 5:switch(s.r.a){case 0:return B.j
case 1:return new A.t(s.gbd(s),0)}break}},
Bw(a,b){var s,r,q,p,o=this
if(a.k(0,o.dx)&&b.k(0,o.dy))return
s=a.a
switch(a.b.a){case 0:r=o.Ce(s,b)
if(r==null)r=o.Cd(s,b)
break
case 1:r=o.Cd(s,b)
if(r==null)r=o.Ce(s,b)
break
default:r=null}q=r!=null
p=q?new A.t(r.a,r.b):o.gui()
o.db=new A.a64(p,q?r.d-r.b:null)
o.dx=a
o.dy=b},
m(){var s=this,r=s.CW
if(r!=null)r.m()
s.CW=null
r=s.a
if(r!=null)r.m()
s.d=s.a=null}}
A.vJ.prototype={
gG2(a){return this.e},
gz1(){return!0},
hH(a,b){t.Y.b(a)},
Fx(a,b,c){var s,r,q,p,o=this.a,n=o!=null
if(n)a.yq(o.zn(c))
o=this.b
if(o!=null)try{a.pK(o)}catch(q){o=A.au(q)
if(o instanceof A.fe){s=o
r=A.aG(q)
A.dr(new A.bt(s,r,"painting library",A.bj("while building a TextSpan"),null,!1))
a.pK("\ufffd")}else throw q}o=this.c
if(o!=null)for(p=0;p<1;++p)o[p].Fx(a,b,c)
if(n)a.fq()},
aR(a){var s,r
if(this.b!=null)if(!a.$1(this))return!1
s=this.c
if(s!=null)for(r=0;r<1;++r)if(!s[r].aR(a))return!1
return!0},
JH(a,b){var s,r,q,p,o=this.b
if(o==null)return null
s=a.b
r=a.a
q=b.a
p=q+o.length
if(!(q===r&&s===B.A))if(!(q<r&&r<p))o=p===r&&s===B.K
else o=!0
else o=!0
if(o)return this
b.a=p
return null},
FM(a,b,c){var s,r=this.b
if(r!=null)a.a+=r
r=this.c
if(r!=null)for(s=0;s<1;++s)r[s].FM(a,!0,c)},
FL(a,b,c){var s,r,q=this.b
if(q!=null){s=A.a([],t.ve)
a.push(A.ag_(q,null,null,s))}q=this.c
if(q!=null)for(r=0;r<1;++r)q[r].FL(a,b,!1)},
XO(a){return this.FL(a,null,!1)},
XB(a,b){var s,r,q,p=this.b
if(p==null)return null
s=b.a
r=a-s
q=p.length
if(r<q)return B.c.an(p,r)
b.a=s+q
return null},
b1(a,b){var s,r,q,p,o,n=this
if(n===b)return B.dy
if(A.A(b)!==A.A(n))return B.cC
if(b.b==n.b){s=n.c==null?null:1
s=s!=(b.c==null?null:1)||n.a==null!==(b.a==null)}else s=!0
if(s)return B.cC
s=n.a
if(s!=null){r=b.a
r.toString
q=s.b1(0,r)
p=q.a>0?q:B.dy
if(p===B.cC)return p}else p=B.dy
s=n.c
if(s!=null)for(r=b.c,o=0;o<1;++o){q=s[o].b1(0,r[o])
if(q.a>p.a)p=q
if(p===B.cC)return p}return p},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
if(!s.Ld(0,b))return!1
return b instanceof A.vJ&&b.b==s.b&&s.e.k(0,b.e)&&A.cF(b.c,s.c)},
gu(a){var s=this,r=null,q=A.fv.prototype.gu.call(s,s),p=s.c
p=p==null?r:A.cS(p)
return A.T(q,s.b,r,r,r,r,s.e,p,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
bP(){return"TextSpan"},
$iac:1,
$iip:1,
gy0(){return null},
gy3(){return null}}
A.q.prototype={
gl9(){return this.e},
gkB(a){return this.d},
mQ(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=b9==null?a.a:b9,a1=a.ay
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
c=b0==null?a.gkB(a):b0
b=b1==null?a.e:b1
return A.bO(r,q,s,null,g,f,e,d,c,b,a.fr,p,a.x,h,o,a1,k,a0,j,n,a.ax,a.fy,a.f,i,l,m)},
fX(a){return this.mQ(null,null,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
Y2(a){return this.mQ(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null)},
Yb(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5){return this.mQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,null,r,s,a0,a1,a2,a3,a4,a5)},
FX(a,b){return this.mQ(null,null,a,null,null,null,null,null,null,null,null,b,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
FS(a){return this.mQ(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null,null,null)},
bT(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
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
a1=a4.gkB(a4)
a2=a4.e
a3=a4.f
return this.Yb(g,r,s,null,c,b,a,a0,a1,a2,e,q,o,d,p,h,k,j,n,i,a4.fy,a3,f,l,m)},
zn(a){var s,r,q=this,p=q.gl9(),o=q.r
o=o==null?null:o*a
s=q.ch
if(s==null){s=q.c
if(s!=null){r=$.av().bf()
r.sar(0,s)
s=r}else s=null}return A.ahr(s,q.b,q.CW,q.cx,q.cy,q.db,q.d,p,q.fr,o,q.x,q.fx,q.w,q.ay,q.as,q.at,q.y,q.ax,q.dy,q.Q,q.z)},
b1(a,b){var s=this
if(s===b)return B.dy
if(s.a!==b.a||s.d!=b.d||s.r!=b.r||s.w!=b.w||s.y!=b.y||s.z!=b.z||s.Q!=b.Q||s.as!=b.as||s.at!=b.at||s.ay!=b.ay||s.ch!=b.ch||!A.cF(s.dy,b.dy)||!A.cF(s.fr,b.fr)||!A.cF(s.fx,b.fx)||!A.cF(s.gl9(),b.gl9())||!1)return B.cC
if(!J.f(s.b,b.b)||!J.f(s.c,b.c)||!J.f(s.CW,b.CW)||!J.f(s.cx,b.cx)||s.cy!=b.cy||s.db!=b.db)return B.Sy
return B.dy},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.S(b)!==A.A(r))return!1
if(b instanceof A.q)if(b.a===r.a)if(J.f(b.b,r.b))if(J.f(b.c,r.c))if(b.r==r.r)if(b.w==r.w)if(b.y==r.y)if(b.z==r.z)if(b.Q==r.Q)if(b.as==r.as)if(b.at==r.at)if(b.ay==r.ay)if(b.ch==r.ch)if(A.cF(b.dy,r.dy))if(A.cF(b.fr,r.fr))if(A.cF(b.fx,r.fx))if(J.f(b.CW,r.CW))if(J.f(b.cx,r.cx))if(b.cy==r.cy)if(b.db==r.db)if(b.d==r.d)if(A.cF(b.gl9(),r.gl9()))s=!0
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
gu(a){var s,r=this,q=null,p=r.gl9(),o=p==null?q:A.cS(p),n=A.T(r.cy,r.db,r.d,o,r.f,r.fy,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a),m=r.dy,l=r.fx
o=m==null?q:A.cS(m)
s=l==null?q:A.cS(l)
return A.T(r.a,r.b,r.c,r.r,r.w,r.x,r.y,r.z,r.Q,r.as,r.at,r.ax,r.ay,r.ch,o,q,s,r.CW,r.cx,n)},
bP(){return"TextStyle"}}
A.Oz.prototype={}
A.D6.prototype={
O7(a,b,c,d,e){var s=this
s.r=A.aiO(new A.VP(s),s.gwQ(s),0,10,0)},
cA(a,b){var s,r,q=this
if(b>q.r)return q.gqz()
s=q.e
r=q.c
return q.d+s*Math.pow(q.b,b)/r-s/r-q.f/2*b*b},
dg(a,b){var s=this
if(b>s.r)return 0
return s.e*Math.pow(s.b,b)-s.f*b},
gqz(){var s=this
if(s.f===0)return s.d-s.e/s.c
return s.cA(0,s.r)},
IO(a){var s,r=this,q=r.d
if(a===q)return 0
s=r.e
if(s!==0)if(s>0)q=a<q||a>r.gqz()
else q=a>q||a<r.gqz()
else q=!0
if(q)return 1/0
return A.aiO(r.gwQ(r),r.ga2g(r),0,10,a)},
iI(a){return Math.abs(this.dg(0,a))<this.a.c},
i(a){return"FrictionSimulation(c\u2093: "+B.d.M(this.b,1)+", x\u2080: "+B.d.M(this.d,1)+", dx\u2080: "+B.d.M(this.e,1)+")"}}
A.VP.prototype={
$1(a){var s=this.a
return s.e*Math.pow(s.b,a)*s.c-s.f},
$S:62}
A.a23.prototype={
i(a){return"Simulation"}}
A.a3X.prototype={
i(a){return"SpringDescription(mass: "+B.d.M(this.a,1)+", stiffness: "+B.f.M(this.b,1)+", damping: "+B.d.M(this.c,1)+")"}}
A.ox.prototype={
D(){return"SpringType."+this.b}}
A.Iq.prototype={
cA(a,b){return this.b+this.c.cA(0,b)},
dg(a,b){return this.c.dg(0,b)},
iI(a){var s=this.c
return A.yO(s.cA(0,a),0,this.a.a)&&A.yO(s.dg(0,a),0,this.a.c)},
i(a){var s=this.c
return"SpringSimulation(end: "+B.d.M(this.b,1)+", "+s.grK(s).i(0)+")"}}
A.jT.prototype={
cA(a,b){return this.iI(b)?this.b:this.MM(0,b)}}
A.a6g.prototype={
cA(a,b){return(this.b+this.c*b)*Math.pow(2.718281828459045,this.a*b)},
dg(a,b){var s=this.a,r=Math.pow(2.718281828459045,s*b),q=this.c
return s*(this.b+q*b)*r+q*r},
grK(a){return B.U2}}
A.a8m.prototype={
cA(a,b){var s=this
return s.c*Math.pow(2.718281828459045,s.a*b)+s.d*Math.pow(2.718281828459045,s.b*b)},
dg(a,b){var s=this,r=s.a,q=s.b
return s.c*r*Math.pow(2.718281828459045,r*b)+s.d*q*Math.pow(2.718281828459045,q*b)},
grK(a){return B.U4}}
A.a9S.prototype={
cA(a,b){var s=this,r=s.a*b
return Math.pow(2.718281828459045,s.b*b)*(s.c*Math.cos(r)+s.d*Math.sin(r))},
dg(a,b){var s,r=this,q=r.b,p=Math.pow(2.718281828459045,q*b),o=r.a,n=o*b,m=Math.cos(n),l=Math.sin(n)
n=r.d
s=r.c
return p*(n*o*m-s*o*l)+q*p*(n*l+s*m)},
grK(a){return B.U3}}
A.IU.prototype={
i(a){return"Tolerance(distance: \xb1"+A.h(this.a)+", time: \xb10.001, velocity: \xb1"+A.h(this.c)+")"}}
A.oa.prototype={
xd(){var s=this,r=s.ry$
r===$&&A.b()
r=r.e
r.toString
r.swi(s.G0())
if(s.ry$.e.q$!=null)s.JR()},
xj(){},
xf(){},
G0(){var s,r=$.cd(),q=r.w
if(q==null){s=self.window.devicePixelRatio
q=s===0?1:s}return new A.Jb(r.gjP().cB(0,q),q)},
St(){var s,r=this
if($.aE().a.c){if(r.to$==null){s=r.ry$
s===$&&A.b()
r.to$=s.Gv()}}else{s=r.to$
if(s!=null)s.m()
r.to$=null}},
Kd(a){var s,r=this
if(a){if(r.to$==null){s=r.ry$
s===$&&A.b()
r.to$=s.Gv()}}else{s=r.to$
if(s!=null)s.m()
r.to$=null}},
SM(a){B.S_.mb("first-frame",null,!1,t.H)},
Sr(a,b,c){var s=this.ry$
s===$&&A.b()
s=s.as
if(s!=null)s.a0S(a,b,null)},
Sv(){var s,r=this.ry$
r===$&&A.b()
r=r.e
r.toString
s=t.W
s.a(A.F.prototype.gbm.call(r)).ay.E(0,r)
s.a(A.F.prototype.gbm.call(r)).lq()},
Sz(a){var s=this.ry$
s===$&&A.b()
s.e.toString
s=$.df;(s==null?$.df=A.jh():s).a23(a)},
Sx(){var s=this.ry$
s===$&&A.b()
s.e.kI()},
RY(a){this.wP()
this.V_()},
V_(){$.bH.ax$.push(new A.a0f(this))},
Fm(){--this.x2$
if(!this.xr$)this.t1()},
wP(){var s=this,r=s.ry$
r===$&&A.b()
r.Zm()
s.ry$.Zl()
s.ry$.Zn()
if(s.xr$||s.x2$===0){s.ry$.e.XK()
s.ry$.Zo()
s.xr$=!0}},
$iac:1,
$idd:1}
A.a0f.prototype={
$1(a){var s=this.a,r=s.rx$
r.toString
s=s.ry$
s===$&&A.b()
r.a20(s.e.ga_r())},
$S:2}
A.aJ.prototype={
wl(a,b,c,d){var s=this,r=d==null?s.a:d,q=b==null?s.b:b,p=c==null?s.c:c
return new A.aJ(r,q,p,a==null?s.d:a)},
Y8(a,b){return this.wl(null,null,a,b)},
FU(a){return this.wl(a,null,null,null)},
Y3(a){return this.wl(null,a,null,null)},
G5(a){var s=this,r=a.gcb(),q=a.gb6(a)+a.gb9(a),p=Math.max(0,s.a-r),o=Math.max(0,s.c-q)
return new A.aJ(p,Math.max(p,s.b-r),o,Math.max(o,s.d-q))},
nd(a){var s=this,r=a.a,q=a.b,p=a.c,o=a.d
return new A.aJ(A.E(s.a,r,q),A.E(s.b,r,q),A.E(s.c,p,o),A.E(s.d,p,o))},
IN(a,b){var s,r,q=this,p=b==null,o=q.a,n=p?o:A.E(b,o,q.b),m=q.b
p=p?m:A.E(b,o,m)
o=a==null
m=q.c
s=o?m:A.E(a,m,q.d)
r=q.d
return new A.aJ(n,p,s,o?r:A.E(a,m,r))},
rG(a){return this.IN(a,null)},
yM(a){return this.IN(null,a)},
bp(a){var s=this
return new A.Z(A.E(a.a,s.a,s.b),A.E(a.b,s.c,s.d))},
mP(a){var s,r,q,p,o,n=this,m=n.a,l=n.b
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
gHE(){var s=this
return s.a>=s.b&&s.c>=s.d},
a6(a,b){var s=this
return new A.aJ(s.a*b,s.b*b,s.c*b,s.d*b)},
cB(a,b){var s=this
return new A.aJ(s.a/b,s.b/b,s.c/b,s.d/b)},
ga_S(){var s=this,r=s.a
if(r>=0)if(r<=s.b){r=s.c
r=r>=0&&r<=s.d}else r=!1
else r=!1
return r},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.aJ&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gu(a){var s=this
return A.T(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s,r=this,q=r.ga_S()?"":"; NOT NORMALIZED",p=r.a
if(p===1/0&&r.c===1/0)return"BoxConstraints(biggest"+q+")"
if(p===0&&r.b===1/0&&r.c===0&&r.d===1/0)return"BoxConstraints(unconstrained"+q+")"
s=new A.Rt()
return"BoxConstraints("+s.$3(p,r.b,"w")+", "+s.$3(r.c,r.d,"h")+q+")"}}
A.Rt.prototype={
$3(a,b,c){if(a===b)return c+"="+B.d.M(a,1)
return B.d.M(a,1)+"<="+c+"<="+B.d.M(b,1)},
$S:200}
A.fY.prototype={
w0(a,b,c){if(c!=null){c=A.FE(A.ad7(c))
if(c==null)return!1}return this.Fk(a,b,c)},
my(a,b,c){var s,r=b==null,q=r?c:c.a8(0,b)
r=!r
if(r)this.c.push(new A.pr(new A.t(-b.a,-b.b)))
s=a.$2(this,q)
if(r)this.rq()
return s},
Fk(a,b,c){var s,r=c==null,q=r?b:A.ce(c,b)
r=!r
if(r)this.c.push(new A.wP(c))
s=a.$2(this,q)
if(r)this.rq()
return s},
Fj(a,b,c){var s,r=this
if(b!=null)r.c.push(new A.pr(new A.t(-b.a,-b.b)))
else{c.toString
c=A.FE(A.ad7(c))
c.toString
r.c.push(new A.wP(c))}s=a.$1(r)
r.rq()
return s},
WN(a,b){return this.Fj(a,null,b)},
WM(a,b){return this.Fj(a,b,null)}}
A.mX.prototype={
i(a){return"<optimized out>#"+A.bB(this.a)+"@"+this.c.i(0)}}
A.ef.prototype={
i(a){return"offset="+this.a.i(0)}}
A.qE.prototype={}
A.C.prototype={
e6(a){if(!(a.e instanceof A.ef))a.e=new A.ef(B.j)},
fz(a){var s,r=this.k1
if(r==null)r=this.k1=A.z(t.k,t.DB)
s=r.bH(0,a,new A.a_I(this,a))
return s},
bV(a){return B.P},
gj0(){var s=this.k3
return new A.y(0,0,0+s.a,0+s.b)},
rR(a,b){var s=null
try{s=this.iW(a)}finally{}if(s==null&&!b)return this.k3.b
return s},
Jq(a){return this.rR(a,!1)},
iW(a){var s=this,r=s.k4
if(r==null)r=s.k4=A.z(t.E7,t.u6)
r.bH(0,a,new A.a_H(s,a))
return s.k4.j(0,a)},
eg(a){return null},
gX(){return t.k.a(A.w.prototype.gX.call(this))},
Pg(){var s,r=this,q=r.k4,p=q==null
if(!(!p&&q.a!==0)){s=r.id
if(!(s!=null&&s.a!==0)){s=r.k1
s=s!=null&&s.a!==0}else s=!0}else s=!0
if(s){if(!p)q.U(0)
q=r.id
if(q!=null)q.U(0)
q=r.k1
if(q!=null)q.U(0)
return!0}return!1},
a2(){var s=this
if(s.Pg()&&s.c instanceof A.w){s.r4()
return}s.M7()},
cg(a,b){var s,r=this
if(r.k3!=null)if(!a.k(0,t.k.a(A.w.prototype.gX.call(r)))){s=r.k4
s=s!=null&&s.a!==0}else s=!1
else s=!1
if(s){s=r.k4
if(s!=null)s.U(0)}r.M6(a,b)},
h8(a){return this.cg(a,!1)},
nQ(){this.k3=this.bV(t.k.a(A.w.prototype.gX.call(this)))},
bx(){},
bN(a,b){var s=this
if(s.k3.B(0,b))if(s.cv(a,b)||s.iF(b)){a.E(0,new A.mX(b,s))
return!0}return!1},
iF(a){return!1},
cv(a,b){return!1},
cY(a,b){var s,r=a.e
r.toString
s=t.Ch.a(r).a
b.av(0,s.a,s.b)},
k_(a){var s,r,q,p,o,n=this.bt(0,null)
if(n.fW(n)===0)return B.j
s=new A.f3(new Float64Array(3))
s.eW(0,0,1)
r=new A.f3(new Float64Array(3))
r.eW(0,0,0)
q=n.hQ(r)
r=new A.f3(new Float64Array(3))
r.eW(0,0,1)
p=n.hQ(r).a8(0,q)
r=new A.f3(new Float64Array(3))
r.eW(a.a,a.b,0)
o=n.hQ(r)
r=o.a8(0,p.zx(s.Gg(o)/s.Gg(p))).a
return new A.t(r[0],r[1])},
ghe(){var s=this.k3
return new A.y(0,0,0+s.a,0+s.b)},
hH(a,b){this.M5(a,b)}}
A.a_I.prototype={
$0(){return this.a.bV(this.b)},
$S:201}
A.a_H.prototype={
$0(){return this.a.eg(this.b)},
$S:202}
A.cz.prototype={
YC(a){var s,r,q,p=this.au$
for(s=A.o(this).h("cz.1?");p!=null;){r=s.a(p.e)
q=p.iW(a)
if(q!=null)return q+r.a.b
p=r.aj$}return null},
G4(a){var s,r,q,p,o=this.au$
for(s=A.o(this).h("cz.1"),r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.iW(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.aj$}return r},
wt(a,b){var s,r,q={},p=q.a=this.cK$
for(s=A.o(this).h("cz.1");p!=null;p=r){p=p.e
p.toString
s.a(p)
if(a.my(new A.a_G(q,b,p),p.a,b))return!0
r=p.bM$
q.a=r}return!1},
mW(a,b){var s,r,q,p,o,n=this.au$
for(s=A.o(this).h("cz.1"),r=b.a,q=b.b;n!=null;){p=n.e
p.toString
s.a(p)
o=p.a
a.eq(n,new A.t(o.a+r,o.b+q))
n=p.aj$}}}
A.a_G.prototype={
$2(a,b){return this.a.a.bN(a,b)},
$S:15}
A.wg.prototype={
ad(a){this.tr(0)}}
A.eM.prototype={
i(a){return this.os(0)+"; id="+A.h(this.e)}}
A.YI.prototype={
dl(a,b){var s,r=this.b.j(0,a)
r.cg(b,!0)
s=r.k3
s.toString
return s},
dI(a,b){var s=this.b.j(0,a).e
s.toString
t.DU.a(s).a=b},
OZ(a,b){var s,r,q,p,o,n,m=this,l=m.b
try{m.b=A.z(t.K,t.x)
for(r=t.DU,q=b;q!=null;q=n){p=q.e
p.toString
s=r.a(p)
p=m.b
p.toString
o=s.e
o.toString
p.l(0,o,q)
n=s.aj$}m.ro(a)}finally{m.b=l}},
i(a){return"MultiChildLayoutDelegate"}}
A.H6.prototype={
e6(a){if(!(a.e instanceof A.eM))a.e=new A.eM(null,null,B.j)},
sww(a){var s=this,r=s.K
if(r===a)return
if(A.A(a)!==A.A(r)||a.lI(r))s.a2()
s.K=a
s.b!=null},
am(a){this.N5(a)},
ad(a){this.N6(0)},
bV(a){return a.bp(new A.Z(A.E(1/0,a.a,a.b),A.E(1/0,a.c,a.d)))},
bx(){var s=this,r=t.k.a(A.w.prototype.gX.call(s))
r=r.bp(new A.Z(A.E(1/0,r.a,r.b),A.E(1/0,r.c,r.d)))
s.k3=r
s.K.OZ(r,s.au$)},
aG(a,b){this.mW(a,b)},
cv(a,b){return this.wt(a,b)}}
A.xb.prototype={
am(a){var s,r,q
this.eb(a)
s=this.au$
for(r=t.DU;s!=null;){s.am(a)
q=s.e
q.toString
s=r.a(q).aj$}},
ad(a){var s,r,q
this.ds(0)
s=this.au$
for(r=t.DU;s!=null;){s.ad(0)
q=s.e
q.toString
s=r.a(q).aj$}}}
A.Nb.prototype={}
A.Bz.prototype={
S(a,b){var s=this.a
return s==null?null:s.S(0,b)},
F(a,b){var s=this.a
return s==null?null:s.F(0,b)},
gzA(){return null},
zM(a){return this.hZ(a)},
qP(a){return null},
i(a){var s=A.bB(this),r=this.a
r=r==null?null:r.i(0)
if(r==null)r=""
return"<optimized out>#"+s+"("+r+")"}}
A.H7.prototype={
srm(a){var s=this.v
if(s==a)return
this.v=a
this.BM(a,s)},
sGN(a){var s=this.N
if(s==a)return
this.N=a
this.BM(a,s)},
BM(a,b){var s=this,r=a==null
if(r)s.af()
else if(b==null||A.A(a)!==A.A(b)||a.hZ(b))s.af()
if(s.b!=null){if(b!=null)b.F(0,s.gdH())
if(!r)a.S(0,s.gdH())}if(r){if(s.b!=null)s.aZ()}else if(b==null||A.A(a)!==A.A(b)||a.zM(b))s.aZ()},
srs(a){if(this.ai.k(0,a))return
this.ai=a
this.a2()},
am(a){var s,r=this
r.lV(a)
s=r.v
if(s!=null)s.S(0,r.gdH())
s=r.N
if(s!=null)s.S(0,r.gdH())},
ad(a){var s=this,r=s.v
if(r!=null)r.F(0,s.gdH())
r=s.N
if(r!=null)r.F(0,s.gdH())
s.kf(0)},
cv(a,b){var s=this.N
if(s!=null){s=s.qP(b)
s=s===!0}else s=!1
if(s)return!0
return this.ow(a,b)},
iF(a){var s=this.v
if(s!=null){s=s.qP(a)
s=s!==!1}else s=!1
return s},
bx(){this.tw()
this.aZ()},
mO(a){return a.bp(this.ai)},
Dl(a,b,c){var s
A.aZ("debugPreviousCanvasSaveCount")
a.ck(0)
if(!b.k(0,B.j))a.av(0,b.a,b.b)
s=this.k3
s.toString
c.aG(a,s)
a.ci(0)},
aG(a,b){var s,r,q=this
if(q.v!=null){s=a.gbz(a)
r=q.v
r.toString
q.Dl(s,b,r)
q.E4(a)}q.fH(a,b)
if(q.N!=null){s=a.gbz(a)
r=q.N
r.toString
q.Dl(s,b,r)
q.E4(a)}},
E4(a){},
ei(a){var s,r=this
r.fG(a)
r.bF=null
s=r.N
r.dD=s==null?null:s.gzA()
a.a=!1},
mF(a,b,c){var s,r,q,p,o=this
o.fk=A.agT(o.fk,B.ri)
o.hG=A.agT(o.hG,B.ri)
s=o.fk
r=s!=null&&!s.gP(s)
s=o.hG
q=s!=null&&!s.gP(s)
s=A.a([],t.T)
if(r){p=o.fk
p.toString
B.b.I(s,p)}B.b.I(s,c)
if(q){p=o.hG
p.toString
B.b.I(s,p)}o.Ar(a,b,s)},
kI(){this.tt()
this.hG=this.fk=null}}
A.Sw.prototype={}
A.Ha.prototype={
Oe(a){var s,r,q,p,o=this
try{r=o.K
if(r!==""){q=$.akg()
s=$.av().wo(q)
s.yq($.akh())
s.pK(r)
r=s.aM()
o.q!==$&&A.ey()
o.q=r}else{o.q!==$&&A.ey()
o.q=null}}catch(p){}},
gj4(){return!0},
iF(a){return!0},
bV(a){return a.bp(B.TW)},
aG(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
try{p=a.gbz(a)
o=i.k3
n=b.a
m=b.b
l=o.a
o=o.b
k=$.av().bf()
k.sar(0,$.akf())
p.c7(new A.y(n,m,n+l,m+o),k)
p=i.q
p===$&&A.b()
if(p!=null){s=i.k3.a
r=0
q=0
if(s>328){s-=128
r+=64}p.h8(new A.jK(s))
if(i.k3.b>96+p.gbG(p)+12)q+=96
a.gbz(a).jt(p,b.W(0,new A.t(r,q)))}}catch(j){}}}
A.CR.prototype={
D(){return"FlexFit."+this.b}}
A.d6.prototype={
i(a){return this.os(0)+"; flex="+A.h(this.e)+"; fit="+A.h(this.f)}}
A.t7.prototype={
D(){return"MainAxisSize."+this.b}}
A.nN.prototype={
D(){return"MainAxisAlignment."+this.b}}
A.je.prototype={
D(){return"CrossAxisAlignment."+this.b}}
A.o8.prototype={
e6(a){if(!(a.e instanceof A.d6))a.e=new A.d6(null,null,B.j)},
eg(a){if(this.K===B.ao)return this.G4(a)
return this.YC(a)},
oL(a){switch(this.K.a){case 0:return a.b
case 1:return a.a}},
oN(a){switch(this.K.a){case 0:return a.a
case 1:return a.b}},
bV(a){var s
if(this.aq===B.n1)return B.P
s=this.BA(a,A.abv())
switch(this.K.a){case 0:return a.bp(new A.Z(s.a,s.b))
case 1:return a.bp(new A.Z(s.b,s.a))}},
BA(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.K===B.ao?a2.b:a2.d,a0=a<1/0,a1=c.au$
for(s=t.uc,r=a2.b,q=a2.d,p=b,o=0,n=0,m=0;a1!=null;){l=a1.e
l.toString
s.a(l)
k=l.e
if(k==null)k=0
if(k>0){o+=k
p=a1}else{if(c.aq===B.n0)switch(c.K.a){case 0:j=A.mV(q,b)
break
case 1:j=A.mV(b,r)
break
default:j=b}else switch(c.K.a){case 0:j=new A.aJ(0,1/0,0,q)
break
case 1:j=new A.aJ(0,r,0,1/0)
break
default:j=b}i=a3.$2(a1,j)
m+=c.oN(i)
n=Math.max(n,A.kl(c.oL(i)))}a1=l.aj$}h=Math.max(0,(a0?a:0)-m)
if(o>0){g=a0?h/o:0/0
a1=c.au$
for(f=0;a1!=null;){l=a1.e
l.toString
k=s.a(l).e
if(k==null)k=0
if(k>0){if(a0)e=a1===p?h-f:g*k
else e=1/0
d=A.aZ("minChildExtent")
l=a1.e
l.toString
l=s.a(l).f
switch((l==null?B.nd:l).a){case 0:if(d.b!==d)A.a_(A.XV(d.a))
d.b=e
break
case 1:if(d.b!==d)A.a_(A.XV(d.a))
d.b=0
break}if(c.aq===B.n0)switch(c.K.a){case 0:l=d.b
if(l===d)A.a_(A.fw(d.a))
j=new A.aJ(l,e,q,q)
break
case 1:l=d.b
if(l===d)A.a_(A.fw(d.a))
j=new A.aJ(r,r,l,e)
break
default:j=b}else switch(c.K.a){case 0:l=d.b
if(l===d)A.a_(A.fw(d.a))
j=new A.aJ(l,e,0,q)
break
case 1:l=d.b
if(l===d)A.a_(A.fw(d.a))
j=new A.aJ(0,r,l,e)
break
default:j=b}i=a3.$2(a1,j)
m+=c.oN(i)
f+=e
n=Math.max(n,A.kl(c.oL(i)))}l=a1.e
l.toString
a1=s.a(l).aj$}}return new A.a7y(a0&&c.H===B.L?a:m,n,m)},
bx(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.k.a(A.w.prototype.gX.call(a)),a1=a.BA(a0,A.abw()),a2=a1.a,a3=a1.b
if(a.aq===B.n1){s=a.au$
for(r=t.uc,q=0,p=0,o=0;s!=null;){n=a.bw
n.toString
m=s.rR(n,!0)
if(m!=null){q=Math.max(q,m)
p=Math.max(m,p)
o=Math.max(s.k3.b-m,o)
a3=Math.max(p+o,a3)}n=s.e
n.toString
s=r.a(n).aj$}}else q=0
switch(a.K.a){case 0:r=a.k3=a0.bp(new A.Z(a2,a3))
a2=r.a
a3=r.b
break
case 1:r=a.k3=a0.bp(new A.Z(a3,a2))
a2=r.b
a3=r.a
break}l=a2-a1.c
a.c1=Math.max(0,-l)
k=Math.max(0,l)
j=A.aZ("leadingSpace")
i=A.aZ("betweenSpace")
r=A.aiY(a.K,a.ae,a.aV)
h=r===!1
switch(a.q.a){case 0:j.sbS(0)
i.sbS(0)
break
case 1:j.sbS(k)
i.sbS(0)
break
case 2:j.sbS(k/2)
i.sbS(0)
break
case 3:j.sbS(0)
r=a.d1$
i.sbS(r>1?k/(r-1):0)
break
case 4:r=a.d1$
i.sbS(r>0?k/r:0)
j.sbS(i.aF()/2)
break
case 5:r=a.d1$
i.sbS(r>0?k/(r+1):0)
j.sbS(i.aF())
break}g=h?a2-j.aF():j.aF()
s=a.au$
for(r=t.uc,n=a3/2,f=i.a;s!=null;){e=s.e
e.toString
r.a(e)
d=a.aq
switch(d.a){case 0:case 1:if(A.aiY(A.auf(a.K),a.ae,a.aV)===(d===B.b8))c=0
else{d=s.k3
d.toString
c=a3-a.oL(d)}break
case 2:d=s.k3
d.toString
c=n-a.oL(d)/2
break
case 3:c=0
break
case 4:if(a.K===B.ao){d=a.bw
d.toString
m=s.rR(d,!0)
c=m!=null?q-m:0}else c=0
break
default:c=null}if(h){d=s.k3
d.toString
g-=a.oN(d)}switch(a.K.a){case 0:e.a=new A.t(g,c)
break
case 1:e.a=new A.t(c,g)
break}if(h){d=i.b
if(d===i)A.a_(A.fw(f))
g-=d}else{d=s.k3
d.toString
d=a.oN(d)
b=i.b
if(b===i)A.a_(A.fw(f))
g+=d+b}s=e.aj$}},
cv(a,b){return this.wt(a,b)},
aG(a,b){var s,r,q,p=this
if(!(p.c1>1e-10)){p.mW(a,b)
return}s=p.k3
if(s.gP(s))return
s=p.c2
r=p.cx
r===$&&A.b()
q=p.k3
s.saD(0,a.jR(r,b,new A.y(0,0,0+q.a,0+q.b),p.gYD(),p.c9,s.a))},
m(){this.c2.saD(0,null)
this.N7()},
ii(a){var s
switch(this.c9.a){case 0:return null
case 1:case 2:case 3:if(this.c1>1e-10){s=this.k3
s=new A.y(0,0,0+s.a,0+s.b)}else s=null
return s}},
bP(){var s=this.Ma()
return s}}
A.a7y.prototype={}
A.Nc.prototype={
am(a){var s,r,q
this.eb(a)
s=this.au$
for(r=t.uc;s!=null;){s.am(a)
q=s.e
q.toString
s=r.a(q).aj$}},
ad(a){var s,r,q
this.ds(0)
s=this.au$
for(r=t.uc;s!=null;){s.ad(0)
q=s.e
q.toString
s=r.a(q).aj$}}}
A.Nd.prototype={}
A.xc.prototype={
m(){var s,r,q
for(s=this.GA$,r=s.length,q=0;q<r;++q)s[q].m()
this.ht()},
er(){this.M9()}}
A.Hd.prototype={
SO(){var s=this
if(s.K!=null)return
s.K=s.e1
s.q=!1},
CY(){this.q=this.K=null
this.af()},
sh5(a,b){var s=this,r=s.H
if(b==r)return
if(b!=null&&r!=null&&b.Hx(r)){b.m()
return}r=s.H
if(r!=null)r.m()
s.H=b
s.af()
if(s.ae==null||s.aV==null)s.a2()},
sbd(a,b){if(b==this.ae)return
this.ae=b
this.a2()},
sbG(a,b){if(b==this.aV)return
this.aV=b
this.a2()},
sJP(a,b){if(b===this.bw)return
this.bw=b
this.a2()},
W_(){this.c1=null},
sar(a,b){return},
slk(a,b){return},
sl7(a){if(a===this.bJ)return
this.bJ=a
this.af()},
sXE(a){return},
sx5(a){if(a===this.e0)return
this.e0=a
this.af()},
sdV(a){if(a.k(0,this.e1))return
this.e1=a
this.CY()},
sa1u(a,b){if(b===this.di)return
this.di=b
this.af()},
sXi(a){return},
sxu(a){if(a===this.ej)return
this.ej=a
this.af()},
sa0j(a){return},
sbA(a){if(this.ek==a)return
this.ek=a
this.CY()},
sxv(a){return},
Ec(a){var s,r,q=this,p=q.ae
a=A.mV(q.aV,p).nd(a)
p=q.H
if(p==null)return new A.Z(A.E(0,a.a,a.b),A.E(0,a.c,a.d))
p=p.gbd(p)
s=q.bw
r=q.H
return a.mP(new A.Z(p/s,r.gbG(r)/q.bw))},
iF(a){return!0},
bV(a){return this.Ec(a)},
bx(){this.k3=this.Ec(t.k.a(A.w.prototype.gX.call(this)))},
am(a){this.eb(a)},
ad(a){this.ds(0)},
aG(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(d.H==null)return
d.SO()
s=a.gbz(a)
r=d.k3
q=b.a
p=b.b
o=r.a
r=r.b
n=d.H
n.toString
m=d.aq
l=d.bw
k=d.c1
j=d.e0
i=d.K
i.toString
h=d.iz
g=d.di
f=d.q
f.toString
e=d.ej
A.ajJ(i,s,h,k,m,d.bJ,j,f,n,e,!1,1,new A.y(q,p,q+o,p+r),g,l)},
m(){var s=this.H
if(s!=null)s.m()
this.H=null
this.ht()}}
A.q6.prototype={
i(a){return"AnnotationEntry(annotation: "+this.a.i(0)+", localPosition: "+this.b.i(0)+")"}}
A.z4.prototype={}
A.rW.prototype={
fI(){},
pB(a){var s,r=this
r.e+=a
s=t.ow
if(s.a(A.F.prototype.gaW.call(r,r))!=null)s.a(A.F.prototype.gaW.call(r,r)).pB(a)},
m9(a){var s,r,q
for(s=this.d,s=A.ax(s.gb_(s),!0,t.M),r=s.length,q=0;q<r;++q)s[q].$0()},
m(){var s=this.z
if(s!=null)s.m()
this.z=null},
cQ(){if(this.y)return
this.y=!0},
sh_(a){var s,r=this,q=r.z
if(q!=null)q.m()
r.z=a
q=t.ow
if(q.a(A.F.prototype.gaW.call(r,r))!=null){q.a(A.F.prototype.gaW.call(r,r)).toString
s=!0}else s=!1
if(s)q.a(A.F.prototype.gaW.call(r,r)).cQ()},
rL(){this.y=this.y||!1},
il(a){var s
this.cQ()
s=a.e
if(s!==0)this.pB(-s)
this.tg(a)},
lo(a){var s,r,q=this,p=t.ow.a(A.F.prototype.gaW.call(q,q))
if(p!=null){s=q.as
r=q.Q
if(s==null)p.CW=r
else s.Q=r
r=q.Q
if(r==null)p.cx=s
else r.as=s
q.Q=q.as=null
p.il(q)
q.w.saD(0,null)}},
el(a,b,c){return!1},
GG(a,b,c){var s=A.a([],c.h("x<q6<0>>"))
this.el(new A.z4(s,c.h("z4<0>")),b,!0,c)
return s.length===0?null:B.b.gJ(s).a},
Ox(a){var s,r=this
if(!r.y&&r.z!=null){s=r.z
s.toString
a.WH(s)
return}r.f8(a)
r.y=!1},
bP(){var s=this.KU()
return s+(this.b==null?" DETACHED":"")}}
A.DF.prototype={
saD(a,b){var s=this.a
if(b==null?s==null:b===s)return
if(s!=null)if(--s.x===0)s.m()
this.a=b
if(b!=null)++b.x},
i(a){var s=this.a
return"LayerHandle("+(s!=null?J.dn(s):"DISPOSED")+")"}}
A.GE.prototype={
sI7(a){var s
this.cQ()
s=this.cx
if(s!=null)s.m()
this.cx=a},
m(){this.sI7(null)
this.Ab()},
f8(a){var s=this.cx
s.toString
a.WE(B.j,s,this.cy,this.db)},
el(a,b,c){return!1}}
A.Gx.prototype={
f8(a){a.WD(this.cx,this.CW)
a.Kc(this.cy)
a.K4(!1)
a.K3(!1)},
el(a,b,c){return!1}}
A.dX.prototype={
m9(a){var s
this.Ll(a)
if(!a)return
s=this.CW
for(;s!=null;){s.m9(!0)
s=s.Q}},
Xa(a){var s=this
s.rL()
s.f8(a)
if(s.e>0)s.m9(!0)
s.y=!1
return a.aM()},
m(){this.yA()
this.d.U(0)
this.Ab()},
rL(){var s,r=this
r.Lm()
s=r.CW
for(;s!=null;){s.rL()
r.y=r.y||s.y
s=s.Q}},
el(a,b,c,d){var s,r,q
for(s=this.cx,r=a.a;s!=null;s=s.as){if(s.el(a,b,!0,d))return!0
q=r.length
if(q!==0)return!1}return!1},
am(a){var s
this.tf(a)
s=this.CW
for(;s!=null;){s.am(a)
s=s.Q}},
ad(a){var s
this.ds(0)
s=this.CW
for(;s!=null;){s.ad(0)
s=s.Q}this.m9(!1)},
fR(a,b){var s,r=this
r.cQ()
s=b.e
if(s!==0)r.pB(s)
r.zX(b)
s=b.as=r.cx
if(s!=null)s.Q=b
r.cx=b
if(r.CW==null)r.CW=b
b.w.saD(0,b)},
yA(){var s,r,q,p=this,o=p.CW
for(s=t.ow;o!=null;o=r){r=o.Q
o.Q=o.as=null
p.cQ()
q=o.e
if(q!==0){q=-q
p.e+=q
if(s.a(A.F.prototype.gaW.call(p,p))!=null)s.a(A.F.prototype.gaW.call(p,p)).pB(q)}p.tg(o)
o.w.saD(0,null)}p.cx=p.CW=null},
f8(a){this.ib(a)},
ib(a){var s=this.CW
for(;s!=null;){s.Ox(a)
s=s.Q}}}
A.hn.prototype={
shO(a,b){if(!b.k(0,this.p1))this.cQ()
this.p1=b},
el(a,b,c,d){return this.lQ(a,b.a8(0,this.p1),!0,d)},
f8(a){var s=this,r=s.p1
s.sh_(a.Ig(r.a,r.b,t.cV.a(s.z)))
s.ib(a)
a.fq()}}
A.n3.prototype={
el(a,b,c,d){if(!this.p1.B(0,b))return!1
return this.lQ(a,b,!0,d)},
f8(a){var s=this,r=s.p1
r.toString
s.sh_(a.a11(r,s.p2,t.CW.a(s.z)))
s.ib(a)
a.fq()}}
A.qB.prototype={
el(a,b,c,d){if(!this.p1.B(0,b))return!1
return this.lQ(a,b,!0,d)},
f8(a){var s=this,r=s.p1
r.toString
s.sh_(a.a1_(r,s.p2,t.cB.a(s.z)))
s.ib(a)
a.fq()}}
A.qA.prototype={
el(a,b,c,d){if(!this.p1.B(0,b))return!1
return this.lQ(a,b,!0,d)},
f8(a){var s=this,r=s.p1
r.toString
s.sh_(a.a0Z(r,s.p2,t.xS.a(s.z)))
s.ib(a)
a.fq()}}
A.k3.prototype={
sbh(a,b){var s=this
if(b.k(0,s.aa))return
s.aa=b
s.bb=!0
s.cQ()},
f8(a){var s,r,q=this
q.aS=q.aa
if(!q.p1.k(0,B.j)){s=q.p1
s=A.tq(s.a,s.b,0)
r=q.aS
r.toString
s.cn(0,r)
q.aS=s}q.sh_(a.a14(q.aS.a,t.Al.a(q.z)))
q.ib(a)
a.fq()},
VT(a){var s,r=this
if(r.bb){s=r.aa
s.toString
r.bg=A.FE(A.ad7(s))
r.bb=!1}s=r.bg
if(s==null)return null
return A.ce(s,a)},
el(a,b,c,d){var s=this.VT(b)
if(s==null)return!1
return this.LJ(a,s,!0,d)}}
A.tQ.prototype={
sFn(a,b){var s=this,r=s.aa
if(b!=r){if(b===255||r===255)s.sh_(null)
s.aa=b
s.cQ()}},
f8(a){var s,r,q,p=this
if(p.CW==null){p.sh_(null)
return}s=p.aa
s.toString
r=p.p1
q=p.z
if(s<255)p.sh_(a.a12(s,r,t.i6.a(q)))
else p.sh_(a.Ig(r.a,r.b,t.cV.a(q)))
p.ib(a)
a.fq()}}
A.v4.prototype={
f8(a){var s,r,q=this,p=q.p1
p.toString
s=q.p2
s.toString
r=q.p3
r.toString
q.sh_(a.a13(p,s,r,t.fT.a(q.z)))
q.ib(a)
a.fq()}}
A.q5.prototype={
el(a,b,c,d){var s,r,q,p=this,o=p.lQ(a,b,!0,d),n=a.a
if(n.length!==0&&!0)return o
s=p.p2
if(s!=null){r=p.p3
q=r.a
r=r.b
s=!new A.y(q,r,q+s.a,r+s.b).B(0,b)}else s=!1
if(s)return o
if(A.az(p.$ti.c)===A.az(d)){o=o||!1
n.push(new A.q6(d.a(p.p1),b.a8(0,p.p3),d.h("q6<0>")))}return o}}
A.Lx.prototype={}
A.M_.prototype={
a1v(a){var s=this.a
this.a=a
return s},
i(a){var s="<optimized out>#",r=A.bB(this.b),q=this.a.a
return s+A.bB(this)+"("+("latestEvent: "+(s+r))+", "+("annotations: [list of "+q+"]")+")"}}
A.M0.prototype={
ghA(a){var s=this.c
return s.ghA(s)}}
A.FO.prototype={
CC(a){var s,r,q,p,o,n,m=t.mC,l=A.jy(null,null,m,t.rA)
for(s=a.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q){p=s[q]
o=p.a
if(m.b(o)){n=p.b
n.toString
l.l(0,o,n)}}return l},
Qh(a,b){var s=a.b,r=s.gbs(s)
s=a.b
if(!this.b.V(0,s.ghA(s)))return A.jy(null,null,t.mC,t.rA)
return this.CC(b.$1(r))},
Cp(a){var s,r
A.aoT(a)
s=a.b
r=A.o(s).h("b0<1>")
this.a.Zw(a.ghA(a),a.d,A.nO(new A.b0(s,r),new A.YE(),r.h("p.E"),t.oR))},
a26(a,b){var s,r,q,p,o
if(a.gc3(a)!==B.c2)return
if(t.zs.b(a))return
s=t.yg.b(a)?A.afU():b.$0()
r=a.ghA(a)
q=this.b
p=q.j(0,r)
if(!A.aoU(p,a))return
o=q.a
new A.YH(this,p,a,r,s).$0()
if(o!==0!==(q.a!==0))this.aw()},
a20(a){new A.YF(this,a).$0()}}
A.YE.prototype={
$1(a){return a.gG2(a)},
$S:203}
A.YH.prototype={
$0(){var s=this
new A.YG(s.a,s.b,s.c,s.d,s.e).$0()},
$S:0}
A.YG.prototype={
$0(){var s,r,q,p,o,n=this,m=null,l=n.b
if(l==null){s=n.c
if(t.yg.b(s))return
n.a.b.l(0,n.d,new A.M_(A.jy(m,m,t.mC,t.rA),s))}else{s=n.c
if(t.yg.b(s))n.a.b.A(0,s.ghA(s))}r=n.a
q=r.b.j(0,n.d)
if(q==null){l.toString
q=l}p=q.b
q.b=s
o=t.yg.b(s)?A.jy(m,m,t.mC,t.rA):r.CC(n.e)
r.Cp(new A.M0(q.a1v(o),o,p,s))},
$S:0}
A.YF.prototype={
$0(){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.b,r=r.gb_(r),r=new A.dH(J.as(r.a),r.b),q=this.b,p=A.o(r).z[1];r.t();){o=r.a
if(o==null)o=p.a(o)
n=o.b
m=s.Qh(o,q)
l=o.a
o.a=m
s.Cp(new A.M0(l,m,n,null))}},
$S:0}
A.YC.prototype={
$2(a,b){var s
if(!this.a.V(0,a))if(a.gz1()&&a.gy3(a)!=null){s=a.gy3(a)
s.toString
s.$1(this.b.aI(this.c.j(0,a)))}},
$S:204}
A.YD.prototype={
$1(a){return!this.a.V(0,a)},
$S:205}
A.PB.prototype={}
A.c5.prototype={
ad(a){},
i(a){return"<none>"}}
A.jJ.prototype={
eq(a,b){var s,r=this
if(a.gdj()){r.lP()
if(!a.cy){s=a.ay
s===$&&A.b()
s=!s}else s=!0
if(s)A.agB(a,null,!0)
else if(a.db)A.apc(a)
s=a.ch.a
s.toString
t.cY.a(s)
s.shO(0,b)
r.w3(s)}else{s=a.ay
s===$&&A.b()
if(s){a.ch.saD(0,null)
a.v8(r,b)}else a.v8(r,b)}},
w3(a){a.lo(0)
this.a.fR(0,a)},
gbz(a){var s,r,q=this
if(q.e==null){q.c=A.apg(q.b)
s=$.av()
r=s.Yl()
q.d=r
q.e=s.Yf(r,null)
r=q.c
r.toString
q.a.fR(0,r)}s=q.e
s.toString
return s},
lP(){var s,r=this
if(r.e==null)return
s=r.c
s.toString
s.sI7(r.d.YY())
r.e=r.d=r.c=null},
zG(){var s=this.c
if(s!=null)if(!s.cy){s.cy=!0
s.cQ()}},
nT(a,b,c,d){var s,r=this
if(a.CW!=null)a.yA()
r.lP()
r.w3(a)
s=r.Yh(a,d==null?r.b:d)
b.$2(s,c)
s.lP()},
yn(a,b,c){return this.nT(a,b,c,null)},
Yh(a,b){return new A.jJ(a,b)},
jR(a,b,c,d,e,f){var s,r,q=this
if(e===B.J){d.$2(q,b)
return null}s=c.cT(b)
if(a){if(f==null){r=new A.n3(B.a9,A.z(t.S,t.M),A.ah())
r.fI()}else r=f
if(!s.k(0,r.p1)){r.p1=s
r.cQ()}if(e!==r.p2){r.p2=e
r.cQ()}q.nT(r,d,b,s)
return r}else{q.Xz(s,e,s,new A.Zu(q,d,b))
return null}},
a10(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.J){e.$2(p,b)
return null}s=c.cT(b)
r=d.cT(b)
if(a){if(g==null){q=new A.qB(B.mO,A.z(t.S,t.M),A.ah())
q.fI()}else q=g
if(!r.k(0,q.p1)){q.p1=r
q.cQ()}if(f!==q.p2){q.p2=f
q.cQ()}p.nT(q,e,b,s)
return q}else{p.Xx(r,f,s,new A.Zt(p,e,b))
return null}},
If(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.J){e.$2(p,b)
return null}s=c.cT(b)
r=d.cT(b)
if(a){if(g==null){q=new A.qA(B.mO,A.z(t.S,t.M),A.ah())
q.fI()}else q=g
if(r!==q.p1){q.p1=r
q.cQ()}if(f!==q.p2){q.p2=f
q.cQ()}p.nT(q,e,b,s)
return q}else{p.Xw(r,f,s,new A.Zs(p,e,b))
return null}},
nU(a,b,c,d,e){var s,r=this,q=b.a,p=b.b,o=A.tq(q,p,0)
o.cn(0,c)
o.av(0,-q,-p)
if(a){s=e==null?A.ahz(null):e
s.sbh(0,o)
r.nT(s,d,b,A.agm(o,r.b))
return s}else{q=r.gbz(r)
q.ck(0)
q.ac(0,o.a)
d.$2(r,b)
r.gbz(r).ci(0)
return null}},
a15(a,b,c,d){return this.nU(a,b,c,d,null)},
yo(a,b,c,d){var s=d==null?A.agy():d
s.sFn(0,b)
s.shO(0,a)
this.yn(s,c,B.j)
return s},
i(a){return"PaintingContext#"+A.fC(this)+"(layer: "+this.a.i(0)+", canvas bounds: "+this.b.i(0)+")"}}
A.Zu.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.Zt.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.Zs.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.Sl.prototype={}
A.a1L.prototype={
m(){var s,r=this.b
if(r!=null)this.a.as.F(0,r)
r=this.a
if(--r.at===0){s=r.as
s.b.U(0)
s.c.U(0)
s.d.U(0)
s.dt()
r.as=null
r.d.$0()}}}
A.GF.prototype={
lq(){this.a.$0()},
sa1F(a){var s=this.e
if(s===a)return
if(s!=null)s.ad(0)
this.e=a
a.am(this)},
Zm(){var s,r,q,p,o,n,m,l,k,j,i,h=this
try{for(p=t.W,o=t.By;n=h.r,n.length!==0;){s=n
h.r=A.a([],o)
n=s
m=new A.ZF()
if(!!n.immutable$list)A.a_(A.W("sort"))
l=n.length-1
if(l-0<=32)A.Im(n,0,l,m)
else A.Il(n,0,l,m)
for(r=0;r<J.bI(s);++r){if(h.f){h.f=!1
n=h.r
if(n.length!==0){m=s
l=r
k=J.bI(s)
A.cU(l,k,J.bI(m),null,null)
j=A.aI(m)
i=new A.fL(m,l,k,j.h("fL<1>"))
i.tA(m,l,k,j.c)
B.b.I(n,i)
break}}q=J.bb(s,r)
if(q.z){n=q
n=p.a(A.F.prototype.gbm.call(n))===h}else n=!1
if(n)q.T5()}h.f=!1}}finally{h.f=!1}},
Q2(a){try{a.$0()}finally{this.f=!0}},
Zl(){var s,r,q,p,o=this.y
B.b.d7(o,new A.ZE())
for(s=o.length,r=t.W,q=0;q<o.length;o.length===s||(0,A.R)(o),++q){p=o[q]
if(p.CW&&r.a(A.F.prototype.gbm.call(p))===this)p.EJ()}B.b.U(o)},
Zn(){var s,r,q,p,o,n,m,l,k
try{s=this.z
this.z=A.a([],t.By)
for(q=s,J.ac8(q,new A.ZG()),p=q.length,o=t.W,n=t.cY,m=0;m<q.length;q.length===p||(0,A.R)(q),++m){r=q[m]
if(r.cy||r.db){l=r
l=o.a(A.F.prototype.gbm.call(l))===this}else l=!1
if(l)if(r.ch.a.b!=null)if(r.cy)A.agB(r,null,!1)
else{l=r
k=l.ch.a
k.toString
l.o5(n.a(k))
l.db=!1}else r.Vr()}}finally{}},
Z_(a){var s,r=this
if(++r.at===1){s=t.ju
r.as=new A.v1(r.c,A.b8(s),A.z(t.S,s),A.b8(s),$.bq())
r.b.$0()}if(a!=null)r.as.S(0,a)
return new A.a1L(r,a)},
Gv(){return this.Z_(null)},
Zo(){var s,r,q,p,o,n,m,l,k=this
if(k.as==null)return
try{q=k.ay
p=A.ax(q,!0,A.o(q).c)
B.b.d7(p,new A.ZH())
s=p
q.U(0)
for(q=s,o=q.length,n=t.W,m=0;m<q.length;q.length===o||(0,A.R)(q),++m){r=q[m]
if(r.dy){l=r
l=n.a(A.F.prototype.gbm.call(l))===k}else l=!1
if(l)r.Wb()}k.as.K1()}finally{}}}
A.ZF.prototype={
$2(a,b){return a.a-b.a},
$S:32}
A.ZE.prototype={
$2(a,b){return a.a-b.a},
$S:32}
A.ZG.prototype={
$2(a,b){return b.a-a.a},
$S:32}
A.ZH.prototype={
$2(a,b){return a.a-b.a},
$S:32}
A.w.prototype={
aB(){var s=this
s.cx=s.gdj()||s.gjh()
s.ay=s.gdj()},
er(){var s=this
s.a2()
s.jJ()
s.af()
s.aZ()
s.aR(new A.a_U())},
m(){this.ch.saD(0,null)},
e6(a){if(!(a.e instanceof A.c5))a.e=new A.c5()},
hx(a){var s=this
s.e6(a)
s.a2()
s.jJ()
s.aZ()
s.zX(a)},
il(a){var s=this
a.Bl()
a.e.ad(0)
a.e=null
s.tg(a)
s.a2()
s.jJ()
s.aZ()},
aR(a){},
pk(a,b,c){A.dr(new A.bt(b,c,"rendering library",A.bj("during "+a+"()"),new A.a_Q(this),!1))},
am(a){var s=this
s.tf(a)
if(s.z&&s.Q!=null){s.z=!1
s.a2()}if(s.CW){s.CW=!1
s.jJ()}if(s.cy&&s.ch.a!=null){s.cy=!1
s.af()}if(s.dy&&s.gvs().a){s.dy=!1
s.aZ()}},
gX(){var s=this.at
if(s==null)throw A.d(A.aa("A RenderObject does not have any constraints before it has been laid out."))
return s},
a2(){var s,r=this
if(r.z)return
s=r.Q
if(s==null){r.z=!0
if(r.c!=null)r.r4()
return}if(s!==r)r.r4()
else{r.z=!0
s=t.W
if(s.a(A.F.prototype.gbm.call(r))!=null){s.a(A.F.prototype.gbm.call(r)).r.push(r)
s.a(A.F.prototype.gbm.call(r)).lq()}}},
r4(){this.z=!0
var s=this.c
s.toString
t.d.a(s)
if(!this.as)s.a2()},
Bl(){var s=this
if(s.Q!==s){s.Q=null
s.aR(A.ajG())}},
Ur(){var s,r,q=this,p=q.Q
if(p===q)return
s=t.B2.a(q.c)
r=s==null?null:s.Q
if(r!=p){q.Q=r
q.aR(A.ajH())}},
T5(){var s,r,q,p=this
try{p.bx()
p.aZ()}catch(q){s=A.au(q)
r=A.aG(q)
p.pk("performLayout",s,r)}p.z=!1
p.af()},
cg(a,b){var s,r,q,p,o,n,m,l=this
if(!b||l.gj4()||a.gHE()||!(l.c instanceof A.w))o=l
else{n=l.c
n.toString
n=t.d.a(n).Q
n.toString
o=n}if(!l.z&&a.k(0,l.at)){if(o!==l.Q){l.Q=o
l.aR(A.ajH())}return}l.at=a
n=l.Q
if(n!=null&&o!==n)l.aR(A.ajG())
l.Q=o
if(l.gj4())try{l.nQ()}catch(m){s=A.au(m)
r=A.aG(m)
l.pk("performResize",s,r)}try{l.bx()
l.aZ()}catch(m){q=A.au(m)
p=A.aG(m)
l.pk("performLayout",q,p)}l.z=!1
l.af()},
gj4(){return!1},
Hv(a,b){var s=this
s.as=!0
try{t.W.a(A.F.prototype.gbm.call(s)).Q2(new A.a_T(s,a,b))}finally{s.as=!1}},
gdj(){return!1},
gjh(){return!1},
o5(a){return a==null?A.ap7(B.j):a},
gaD(a){return this.ch.a},
jJ(){var s,r,q,p=this
if(p.CW)return
s=p.CW=!0
r=p.c
if(r instanceof A.w){if(r.CW)return
q=p.ay
q===$&&A.b()
if((q?!p.gdj():s)&&!r.gdj()){r.jJ()
return}}s=t.W
if(s.a(A.F.prototype.gbm.call(p))!=null)s.a(A.F.prototype.gbm.call(p)).y.push(p)},
EJ(){var s,r,q=this
if(!q.CW)return
s=q.cx
s===$&&A.b()
q.cx=!1
q.aR(new A.a_R(q))
if(q.gdj()||q.gjh())q.cx=!0
if(!q.gdj()){r=q.ay
r===$&&A.b()}else r=!1
if(r){q.db=q.cy=!1
s=t.W.a(A.F.prototype.gbm.call(q))
if(s!=null)B.b.A(s.z,q)
q.CW=!1
q.af()}else if(s!==q.cx){q.CW=!1
q.af()}else q.CW=!1},
af(){var s,r=this
if(r.cy)return
r.cy=!0
if(r.gdj()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=t.W
if(s.a(A.F.prototype.gbm.call(r))!=null){s.a(A.F.prototype.gbm.call(r)).z.push(r)
s.a(A.F.prototype.gbm.call(r)).lq()}}else{s=r.c
if(s instanceof A.w)s.af()
else{s=t.W
if(s.a(A.F.prototype.gbm.call(r))!=null)s.a(A.F.prototype.gbm.call(r)).lq()}}},
a0h(){var s,r=this
if(r.db||r.cy)return
r.db=!0
if(r.gdj()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=t.W
if(s.a(A.F.prototype.gbm.call(r))!=null){s.a(A.F.prototype.gbm.call(r)).z.push(r)
s.a(A.F.prototype.gbm.call(r)).lq()}}else r.af()},
Vr(){var s,r=this.c
for(;r instanceof A.w;){if(r.gdj()){s=r.ch.a
if(s==null)break
if(s.b!=null)break
r.cy=!0}r=r.c}},
v8(a,b){var s,r,q,p=this
if(p.z)return
p.db=p.cy=!1
p.ay=p.gdj()
try{p.aG(a,b)}catch(q){s=A.au(q)
r=A.aG(q)
p.pk("paint",s,r)}},
aG(a,b){},
cY(a,b){},
jO(a){return!0},
bt(a,b){var s,r,q,p,o,n,m,l,k=b==null
if(k){s=t.W.a(A.F.prototype.gbm.call(this)).e
if(s instanceof A.w)b=s}r=A.a([],t.By)
q=t.d
p=this
while(p!==b){r.push(p)
o=p.c
o.toString
q.a(o)
p=o}if(!k){b.toString
r.push(b)}n=new A.bc(new Float64Array(16))
n.cR()
for(m=r.length-1;m>0;m=l){l=m-1
r[m].cY(r[l],n)}return n},
ii(a){return null},
wy(a){return null},
ei(a){},
t5(a){var s
if(t.W.a(A.F.prototype.gbm.call(this)).as==null)return
s=this.fr
if(s!=null&&!s.as)s.K0(a)
else{s=this.c
if(s!=null)t.d.a(s).t5(a)}},
gvs(){var s,r=this
if(r.dx==null){s=A.oo()
r.dx=s
r.ei(s)}s=r.dx
s.toString
return s},
kI(){this.dy=!0
this.fr=null
this.aR(new A.a_S())},
aZ(){var s,r,q,p,o,n,m=this
if(m.b==null||t.W.a(A.F.prototype.gbm.call(m)).as==null){m.dx=null
return}if(m.fr!=null){s=m.dx
s=s==null?null:s.a
r=s===!0}else r=!1
m.dx=null
q=m.gvs().a&&r
s=t.d
p=m
while(!0){if(!(!q&&p.c instanceof A.w))break
if(p!==m&&p.dy)break
p.dy=!0
o=p.c
o.toString
s.a(o)
if(o.dx==null){n=A.oo()
o.dx=n
o.ei(n)}q=o.dx.a
if(q&&o.fr==null)return
p=o}if(p!==m&&m.fr!=null&&m.dy)t.W.a(A.F.prototype.gbm.call(m)).ay.A(0,m)
if(!p.dy){p.dy=!0
s=t.W
if(s.a(A.F.prototype.gbm.call(m))!=null){s.a(A.F.prototype.gbm.call(m)).ay.E(0,p)
s.a(A.F.prototype.gbm.call(m)).lq()}}},
Wb(){var s,r,q,p,o,n,m=this,l=null
if(m.z)return
s=m.fr
if(s==null)s=l
else{s=t.aa.a(A.F.prototype.gaW.call(s,s))
if(s==null)s=l
else s=s.at||s.as}r=t.sP.a(m.Ci(s===!0))
q=A.a([],t.T)
s=m.fr
p=s==null
o=p?l:s.x
n=p?l:s.y
s=p?l:s.z
r.mN(s==null?0:s,n,o,q)
B.b.gb4(q)},
Ci(a){var s,r,q,p,o,n,m,l,k=this,j={},i=k.gvs()
j.a=i.c
s=!i.d&&!i.a
r=t.yj
q=A.a([],r)
p=A.b8(t.sP)
k.eS(new A.a_P(j,k,a||i.p2,q,p,i,s))
for(o=A.iR(p,p.r),n=A.o(o).c;o.t();){m=o.d;(m==null?n.a(m):m).xG()}k.dy=!1
if(!(k.c instanceof A.w)){o=j.a
l=new A.Nx(A.a([],r),A.a([k],t.By),o)}else{o=j.a
if(s)l=new A.a6f(A.a([],r),o)
else{l=new A.Op(a,i,A.a([],r),A.a([k],t.By),o)
if(i.a)l.x=!0}}l.I(0,q)
return l},
eS(a){this.aR(a)},
mF(a,b,c){a.iU(0,t.d1.a(c),b)},
hH(a,b){},
bP(){var s=A.bB(this)
return"<optimized out>#"+s},
i(a){return this.bP()},
e7(a,b,c,d){var s=this.c
if(s instanceof A.w)s.e7(a,b==null?this:b,c,d)},
lK(){return this.e7(B.aJ,null,B.t,null)},
k7(a,b){return this.e7(B.aJ,a,B.t,b)},
$iac:1}
A.a_U.prototype={
$1(a){a.er()},
$S:26}
A.a_Q.prototype={
$0(){var s=A.a([],t.F),r=this.a
s.push(A.acv("The following RenderObject was being processed when the exception was fired",B.EH,r))
s.push(A.acv("RenderObject",B.EI,r))
return s},
$S:14}
A.a_T.prototype={
$0(){this.b.$1(this.c.a(this.a.gX()))},
$S:0}
A.a_R.prototype={
$1(a){var s
a.EJ()
s=a.cx
s===$&&A.b()
if(s)this.a.cx=!0},
$S:26}
A.a_S.prototype={
$1(a){a.kI()},
$S:26}
A.a_P.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a.Ci(f.c)
if(e.a){B.b.U(f.d)
f.e.U(0)
if(!f.f.a)f.a.a=!0}for(s=e.gHn(),r=s.length,q=f.d,p=f.e,o=f.f,n=f.b,m=f.r,l=0;l<s.length;s.length===r||(0,A.R)(s),++l){k=s[l]
q.push(k)
k.b.push(n)
k.WK(o.aa)
if(o.b||!(n.c instanceof A.w)){k.xG()
continue}if(k.gjn()==null||m)continue
if(!o.Hy(k.gjn()))p.E(0,k)
j=q.length-1
for(i=0;i<j;++i){h=q[i]
g=k.gjn()
g.toString
if(!g.Hy(h.gjn())){p.E(0,k)
p.E(0,h)}}}},
$S:26}
A.ay.prototype={
saJ(a){var s=this,r=s.q$
if(r!=null)s.il(r)
s.q$=a
if(a!=null)s.hx(a)},
iP(){var s=this.q$
if(s!=null)this.yx(s)},
aR(a){var s=this.q$
if(s!=null)a.$1(s)}}
A.dC.prototype={$ic5:1}
A.ap.prototype={
gpY(){return this.d1$},
CL(a,b){var s,r,q,p=this,o=a.e
o.toString
s=A.o(p).h("ap.1")
s.a(o);++p.d1$
if(b==null){o=o.aj$=p.au$
if(o!=null){o=o.e
o.toString
s.a(o).bM$=a}p.au$=a
if(p.cK$==null)p.cK$=a}else{r=b.e
r.toString
s.a(r)
q=r.aj$
if(q==null){o.bM$=b
p.cK$=r.aj$=a}else{o.aj$=q
o.bM$=b
o=q.e
o.toString
s.a(o).bM$=r.aj$=a}}},
xs(a,b,c){this.hx(b)
this.CL(b,c)},
I(a,b){},
DA(a){var s,r,q,p,o=this,n=a.e
n.toString
s=A.o(o).h("ap.1")
s.a(n)
r=n.bM$
q=n.aj$
if(r==null)o.au$=q
else{p=r.e
p.toString
s.a(p).aj$=q}q=n.aj$
if(q==null)o.cK$=r
else{q=q.e
q.toString
s.a(q).bM$=r}n.aj$=n.bM$=null;--o.d1$},
A(a,b){this.DA(b)
this.il(b)},
r8(a,b){var s=this,r=a.e
r.toString
if(A.o(s).h("ap.1").a(r).bM$==b)return
s.DA(a)
s.CL(a,b)
s.a2()},
iP(){var s,r,q,p=this.au$
for(s=A.o(this).h("ap.1");p!=null;){r=p.a
q=this.a
if(r<=q){p.a=q+1
p.iP()}r=p.e
r.toString
p=s.a(r).aj$}},
aR(a){var s,r,q=this.au$
for(s=A.o(this).h("ap.1");q!=null;){a.$1(q)
r=q.e
r.toString
q=s.a(r).aj$}},
gZh(a){return this.au$},
Xp(a){var s=a.e
s.toString
return A.o(this).h("ap.1").a(s).bM$},
Xn(a){var s=a.e
s.toString
return A.o(this).h("ap.1").a(s).aj$}}
A.GY.prototype={
tz(){this.a2()}}
A.a9e.prototype={}
A.a6f.prototype={
I(a,b){B.b.I(this.b,b)},
gHn(){return this.b}}
A.ms.prototype={
gHn(){return A.a([this],t.yj)},
WK(a){var s
if(a==null||a.a===0)return
s=this.c;(s==null?this.c=A.b8(t.xJ):s).I(0,a)}}
A.Nx.prototype={
mN(a,b,c,d){var s,r,q,p,o,n=this.b,m=B.b.gJ(n)
if(m.fr==null){s=B.b.gJ(n).glJ()
r=B.b.gJ(n)
r=t.W.a(A.F.prototype.gbm.call(r)).as
r.toString
q=$.ac_()
q=new A.bN(null,0,s,B.U,q.p2,q.e,q.p3,q.f,q.aS,q.p4,q.R8,q.RG,q.rx,q.ry,q.to,q.x2,q.xr,q.y1)
q.am(r)
m.fr=q}m=B.b.gJ(n).fr
m.toString
m.saK(0,B.b.gJ(n).gj0())
p=A.a([],t.T)
for(n=this.e,s=n.length,o=0;o<n.length;n.length===s||(0,A.R)(n),++o)n[o].mN(0,b,c,p)
m.iU(0,p,null)
d.push(m)},
gjn(){return null},
xG(){},
I(a,b){B.b.I(this.e,b)}}
A.Op.prototype={
mN(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(!h.x){s=h.b
B.b.gJ(s).fr=null
for(r=h.w,q=r.length,p=A.aj(s),o=p.c,p=p.h("fL<1>"),n=0;n<r.length;r.length===q||(0,A.R)(r),++n){m=r[n]
l=new A.fL(s,1,g,p)
l.tA(s,1,g,o)
B.b.I(m.b,l)
m.mN(a+h.f.x2,b,c,d)}return}s=h.b
if(s.length>1){k=new A.a9f()
k.Pt(c,b,s)}else k=g
r=h.e
q=!r
if(q){if(k==null)p=g
else{p=k.d
p===$&&A.b()
if(!p.gP(p)){p=k.c
p===$&&A.b()
p=p.HI()}else p=!0}p=p===!0}else p=!1
if(p)return
p=B.b.gJ(s)
if(p.fr==null)p.fr=A.a1N(g,B.b.gJ(s).glJ())
j=B.b.gJ(s).fr
j.sHB(r)
j.dx=h.c
j.z=a
if(a!==0){h.BX()
r=h.f
r.shC(0,r.x2+a)}if(k!=null){r=k.d
r===$&&A.b()
j.saK(0,r)
r=k.c
r===$&&A.b()
j.sbh(0,r)
j.x=k.b
j.y=k.a
if(q&&k.e){h.BX()
h.f.b5(B.lf,!0)}}i=A.a([],t.T)
for(r=h.w,q=r.length,n=0;n<r.length;r.length===q||(0,A.R)(r),++n){m=r[n]
p=j.x
m.mN(0,j.y,p,i)}r=h.f
if(r.a)B.b.gJ(s).mF(j,h.f,i)
else j.iU(0,i,r)
d.push(j)},
gjn(){return this.x?null:this.f},
I(a,b){var s,r,q,p,o,n,m=this
for(s=b.length,r=m.w,q=0;q<b.length;b.length===s||(0,A.R)(b),++q){p=b[q]
r.push(p)
if(p.gjn()==null)continue
if(!m.r){m.f=m.f.XZ()
m.r=!0}o=m.f
n=p.gjn()
n.toString
o.jf(n)}},
BX(){var s,r,q=this
if(!q.r){s=q.f
r=A.oo()
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
r.aS=s.aS
r.aa=s.aa
r.y2=s.y2
r.ak=s.ak
r.ap=s.ap
r.ah=s.ah
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
xG(){this.x=!0}}
A.a9f.prototype={
Pt(a,b,c){var s,r,q,p,o,n,m=this,l=new A.bc(new Float64Array(16))
l.cR()
m.c=l
m.b=a
m.a=b
for(s=c.length-1;s>0;){r=c[s];--s
q=c[s]
a=r.wy(q)
if(a!=null){m.b=a
m.a=A.ai_(m.a,r.ii(q))}else m.b=A.ai_(m.b,r.ii(q))
l=$.akU()
l.cR()
A.arM(r,q,m.c,l)
m.b=A.ai0(m.b,l)
m.a=A.ai0(m.a,l)}p=B.b.gJ(c)
l=m.b
l=l==null?p.gj0():l.eK(p.gj0())
m.d=l
o=m.a
if(o!=null){n=o.eK(l)
if(n.gP(n)){l=m.d
l=!l.gP(l)}else l=!1
m.e=l
if(!l)m.d=n}}}
A.Nf.prototype={}
A.hF.prototype={
i(a){var s=A.a(["offset="+this.a.i(0)],t.s)
s.push(this.os(0))
return B.b.bk(s,"; ")}}
A.us.prototype={
e6(a){if(!(a.e instanceof A.hF))a.e=new A.hF(null,null,B.j)},
srF(a,b){var s=this,r=s.K
switch(r.d.b1(0,b).a){case 0:case 1:return
case 2:r.srF(0,b)
s.H=s.q=null
s.um(b)
s.af()
s.aZ()
break
case 3:r.srF(0,b)
s.H=s.q=s.bJ=null
s.um(b)
s.a2()
s.vd()
s.BQ()
s.EZ()
break}},
snW(a){var s=this
if(a==s.ae)return
s.vd()
s.BQ()
s.ae=a
s.EZ()},
EZ(){var s,r,q=this
if(q.ae==null)return
s=q.aq
if(s==null)s=q.aq=q.QV()
r=q.ae
B.b.Z(s,r.gjg(r))},
vd(){var s,r=this.ae
if(r==null||this.aq==null)return
s=this.aq
s.toString
B.b.Z(s,r.gyz(r))},
QV(){var s,r,q,p,o=this.K.d.IT(!1),n=A.a([],t.sb)
for(s=o.length,r=0;r<s;){q=B.c.nv(o,$.aki(),r)
if(r!==q){if(q===-1)q=s
p=new A.iS(new A.et(r,q),this,o,$.bq())
p.w=p.Ch()
n.push(p)
r=q}++r}return n},
BQ(){var s,r,q,p=this.aq
if(p==null)return
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.R)(p),++r){q=p[r]
q.y2$=$.bq()
q.y1$=0}this.aq=null},
a2(){var s=this.aq
if(s!=null)B.b.Z(s,new A.a_Z())
this.M1()},
m(){var s=this
s.vd()
s.aq=null
s.K.m()
s.ht()},
um(a){this.aV=A.a([],t.e9)
a.aR(new A.a_W(this))},
syI(a,b){var s=this.K
if(s.f===b)return
s.syI(0,b)
this.af()},
sbA(a){var s=this.K
if(s.r===a)return
s.sbA(a)
this.a2()},
sKn(a){if(this.bw===a)return
this.bw=a
this.a2()},
sa0M(a,b){var s,r=this
if(r.c1===b)return
r.c1=b
s=b===B.c4?"\u2026":null
r.K.sYT(s)
r.a2()},
syJ(a){var s=this.K
if(s.w===a)return
s.syJ(a)
this.bJ=null
this.a2()},
sxJ(a){var s=this.K
if(s.z==a)return
s.sxJ(a)
this.bJ=null
this.a2()},
sxE(a,b){var s=this.K
if(J.f(s.y,b))return
s.sxE(0,b)
this.bJ=null
this.a2()},
sKx(a){return},
syK(a){var s=this.K
if(s.as===a)return
s.syK(a)
this.bJ=null
this.a2()},
sIM(a){return},
sJY(a){var s,r=this
if(J.f(r.c9,a))return
r.c9=a
s=r.aq
s=s==null?null:B.b.ji(s,new A.a00())
if(s===!0)r.af()},
oQ(a){var s,r=this,q=r.zh(a,B.U)
r.i5(t.k.a(A.w.prototype.gX.call(r)))
s=r.K
s.Bw(a,B.U)
s=s.db
s===$&&A.b()
s=s.b
return q.W(0,new A.t(0,s==null?0:s))},
eg(a){this.i5(t.k.a(A.w.prototype.gX.call(this)))
return this.K.eg(B.F)},
iF(a){return!0},
cv(a,b){var s,r,q,p,o,n,m,l,k,j={},i=this.K,h=i.a.hk(b),g=i.d.JG(h)
if(g!=null&&!0){a.E(0,new A.ha(t.kZ.a(g),t.Cq))
s=!0}else s=!1
r=j.a=this.au$
q=A.o(this).h("ap.1")
p=t.lO
o=0
while(!0){if(!(r!=null&&o<i.ax.length))break
r=r.e
r.toString
p.a(r)
n=r.a
m=new Float64Array(16)
l=new A.bc(m)
l.cR()
m[14]=0
m[13]=n.b
m[12]=n.a
n=r.e
l.hm(0,n,n,n)
if(a.w0(new A.a_Y(j,b,r),b,l))return!0
r=j.a.e
r.toString
k=q.a(r).aj$
j.a=k;++o
r=k}return s},
CT(a,b){var s=this.bw||this.c1===B.c4?a:1/0
this.K.xC(s,b)},
tz(){var s=this,r=$.bH,q=r.CW$
switch(q.a){case 0:case 4:if(s.fj)return
s.fj=!0
r.t0(new A.a01(s,q))
break
case 1:case 2:case 3:s.Ao()
s.K.a2()
break}},
i5(a){this.K.t9(this.e0)
this.CT(a.b,a.a)},
CR(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.d1$
if(i===0)return A.a([],t.aE)
s=j.au$
r=A.aX(i,B.Sm,!1,t.cP)
q=new A.aJ(0,a.b,0,1/0).cB(0,j.K.w)
for(i=A.o(j).h("ap.1"),p=!b,o=0;s!=null;){if(p){s.cg(q,!0)
n=s.k3
n.toString
m=j.aV
m===$&&A.b()
switch(m[o].gdV()){case B.l0:l=s.Jq(j.aV[o].gpQ())
break
case B.l1:case B.l2:case B.fh:case B.l4:case B.l3:l=null
break
default:l=null}k=n}else{k=s.fz(q)
l=null}n=j.aV
n===$&&A.b()
r[o]=new A.ls(k,n[o].gdV(),l,j.aV[o].gpQ())
n=s.e
n.toString
s=i.a(n).aj$;++o}return r},
T4(a){return this.CR(a,!1)},
Vg(){var s,r,q=this.au$,p=t.lO,o=this.K,n=A.o(this).h("ap.1"),m=0
while(!0){if(!(q!=null&&m<o.ax.length))break
s=q.e
s.toString
p.a(s)
r=o.ax[m]
s.a=new A.t(r.a,r.b)
s.e=o.ay[m]
q=n.a(s).aj$;++m}},
P0(){var s,r,q=this.aV
q===$&&A.b()
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.R)(q),++r)switch(q[r].gdV()){case B.l0:case B.l1:case B.l2:return!1
case B.l3:case B.l4:case B.fh:continue}return!0},
bV(a){var s,r,q=this
if(!q.P0())return B.P
s=q.K
s.t9(q.CR(a,!0))
q.CT(a.b,a.a)
r=s.gbd(s)
s=s.a
return a.bp(new A.Z(r,Math.ceil(s.gbG(s))))},
bx(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=t.k.a(A.w.prototype.gX.call(i))
i.e0=i.T4(g)
i.i5(g)
i.Vg()
s=i.K
r=s.gbd(s)
q=s.a
q=Math.ceil(q.gbG(q))
p=s.a.gYJ()
o=i.k3=g.bp(new A.Z(r,q))
n=o.b<q||p
m=o.a<r
if(m||n)switch(i.c1.a){case 3:i.c2=!1
i.bJ=null
break
case 0:case 2:i.c2=!0
i.bJ=null
break
case 1:i.c2=!0
r=A.a5_(h,s.d.a,"\u2026")
q=s.r
q.toString
o=s.w
l=A.a4Y(h,s.y,h,h,r,B.bD,q,h,o,B.aQ)
l.a04()
if(m){switch(s.r.a){case 0:k=l.gbd(l)
j=0
break
case 1:j=i.k3.a
k=j-l.gbd(l)
break
default:k=h
j=k}i.bJ=A.acI(new A.t(k,0),new A.t(j,0),A.a([B.k,B.mQ],t.bk),h,B.cL,h)}else{j=i.k3.b
s=l.a
i.bJ=A.acI(new A.t(0,j-Math.ceil(s.gbG(s))/2),new A.t(0,j),A.a([B.k,B.mQ],t.bk),h,B.cL,h)}l.m()
break}else{i.c2=!1
i.bJ=null}},
aG(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e={}
f.i5(t.k.a(A.w.prototype.gX.call(f)))
if(f.c2){s=f.k3
r=b.a
q=b.b
p=new A.y(r,q,r+s.a,q+s.b)
if(f.bJ!=null)a.gbz(a).zt(p,$.av().bf())
else a.gbz(a).ck(0)
a.gbz(a).jk(p)}s=f.K
s.aG(a.gbz(a),b)
r=e.a=f.au$
q=t.lO
o=b.a
n=b.b
m=A.o(f).h("ap.1")
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
a.a15(j,new A.t(o+r.a,n+r.b),A.tp(k,k,k),new A.a0_(e))
k=e.a.e
k.toString
i=m.a(k).aj$
e.a=i;++l
r=i}if(f.c2){if(f.bJ!=null){a.gbz(a).av(0,o,n)
h=$.av().bf()
h.sX4(B.Cn)
h.szK(f.bJ)
s=a.gbz(a)
r=f.k3
s.c7(new A.y(0,0,0+r.a,0+r.b),h)}a.gbz(a).ci(0)}s=f.aq
if(s!=null)for(r=s.length,g=0;g<s.length;s.length===r||(0,A.R)(s),++g)s[g].aG(a,b)
f.M8(a,b)},
zh(a,b){var s
this.i5(t.k.a(A.w.prototype.gX.call(this)))
s=this.K
s.Bw(a,b)
s=s.db
s===$&&A.b()
return s.a},
z8(a){this.i5(t.k.a(A.w.prototype.gX.call(this)))
return this.K.a.rQ(a.a,a.b,B.m5,B.fW)},
hk(a){this.i5(t.k.a(A.w.prototype.gX.call(this)))
return this.K.a.hk(a)},
lx(a){this.i5(t.k.a(A.w.prototype.gX.call(this)))
return this.K.a.lx(a)},
ei(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.fG(a)
s=d.K
r=s.d
r.toString
q=A.a([],t.lF)
r.XO(q)
d.e1=q
if(B.b.ji(q,new A.a_X()))a.a=a.b=!0
else{r=d.q
if(r==null){p=new A.bS("")
o=A.a([],t.ve)
for(r=d.e1,n=r.length,m=0,l=0,k="";l<r.length;r.length===n||(0,A.R)(r),++l){j=r[l]
i=j.b
if(i==null)i=j.a
for(k=j.f,h=k.length,g=0;g<k.length;k.length===h||(0,A.R)(k),++g){f=k[g]
e=f.a
o.push(f.FQ(new A.et(m+e.a,m+e.b)))}k=p.a+=i
m+=i.length}r=d.q=new A.ck(k.charCodeAt(0)==0?k:k,o)}a.p4=r
a.d=!0
s=s.r
s.toString
a.y1=s}},
mF(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=A.a([],t.T),b0=a7.K,b1=b0.r
b1.toString
s=A.jy(a8,a8,t.qI,t.ju)
r=a7.H
if(r==null){r=a7.e1
r.toString
r=a7.H=A.atR(r)}for(q=r.length,p=t.k,o=b1,n=0,m=0,l=0;l<r.length;r.length===q||(0,A.R)(r),++l,m=j){k=r[l]
b1=k.a
j=m+b1.length
i=m<j
h=i?m:j
i=i?j:m
g=p.a(A.w.prototype.gX.call(a7))
b0.t9(a7.e0)
f=g.b
f=a7.bw||a7.c1===B.c4?f:1/0
b0.xC(f,g.a)
e=b0.a.rQ(h,i,B.m5,B.fW)
if(e.length===0)continue
i=B.b.gJ(e)
d=new A.y(i.a,i.b,i.c,i.d)
c=B.b.gJ(e).e
for(i=A.aj(e),h=new A.fL(e,1,a8,i.h("fL<1>")),h.tA(e,1,a8,i.c),h=new A.dh(h,h.gp(h)),i=A.o(h).c;h.t();){g=h.d
if(g==null)g=i.a(g)
d=d.ng(new A.y(g.a,g.b,g.c,g.d))
c=g.e}i=d.a
h=Math.max(0,i)
g=d.b
f=Math.max(0,g)
i=Math.min(d.c-i,p.a(A.w.prototype.gX.call(a7)).b)
g=Math.min(d.d-g,p.a(A.w.prototype.gX.call(a7)).d)
b=Math.floor(h)-4
a=Math.floor(f)-4
i=Math.ceil(h+i)+4
g=Math.ceil(f+g)+4
a0=new A.y(b,a,i,g)
a1=A.oo()
a2=n+1
a1.id=new A.tR(n,a8)
a1.d=!0
a1.y1=o
f=k.b
b1=f==null?b1:f
a1.p4=new A.ck(b1,k.f)
b1=b2.y
if(b1!=null){a3=b1.eK(a0)
if(a3.a>=a3.c||a3.b>=a3.d)b1=!(b>=i||a>=g)
else b1=!1
a1.b5(B.lf,b1)}a4=A.aZ("newChild")
b1=a7.di
i=b1==null?a8:b1.a!==0
if(i===!0){b1.toString
i=new A.b0(b1,A.o(b1).h("b0<1>"))
a5=i.ga7(i)
if(!a5.t())A.a_(A.bK())
b1=b1.A(0,a5.gG(a5))
b1.toString
if(a4.b!==a4)A.a_(A.XV(a4.a))
a4.b=b1}else{a6=new A.iJ()
b1=A.a1N(a6,a7.PI(a6))
if(a4.b!==a4)A.a_(A.XV(a4.a))
a4.b=b1}if(b1===a4)A.a_(A.fw(a4.a))
J.am3(b1,a1)
if(!b1.w.k(0,a0)){b1.w=a0
b1.hw()}b1=a4.b
if(b1===a4)A.a_(A.fw(a4.a))
i=b1.d
i.toString
s.l(0,i,b1)
b1=a4.b
if(b1===a4)A.a_(A.fw(a4.a))
a9.push(b1)
n=a2
o=c}a7.di=s
b2.iU(0,a9,b3)},
PI(a){return new A.a_V(this,a)},
kI(){this.tt()
this.di=null}}
A.a_Z.prototype={
$1(a){return a.x=null},
$S:209}
A.a_W.prototype={
$1(a){return!0},
$S:42}
A.a00.prototype={
$1(a){var s=a.w
s===$&&A.b()
return s.c!==B.cH},
$S:210}
A.a_Y.prototype={
$2(a,b){return this.a.a.bN(a,b)},
$S:15}
A.a01.prototype={
$1(a){var s=this.a
s.fj=!1
if(s.b!=null){s.Ao()
s.K.a2()}},
$S:2}
A.a0_.prototype={
$2(a,b){var s=this.a.a
s.toString
a.eq(s,b)},
$S:8}
A.a_X.prototype={
$1(a){return!1},
$S:211}
A.a_V.prototype={
$0(){var s=this.a,r=s.di.j(0,this.b)
r.toString
s.k7(s,r.w)},
$S:0}
A.iS.prototype={
gn(a){var s=this.w
s===$&&A.b()
return s},
U1(){var s=this,r=s.Ch(),q=s.w
q===$&&A.b()
if(q.k(0,r))return
s.w=r
s.aw()},
Ch(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f==null||g.e==null)return B.SW
s=f.a
r=g.e.a
f=g.b
q=f.oQ(new A.aW(s,B.A))
p=s===r?q:f.oQ(new A.aW(r,B.A))
f=f.K
o=f.r
o.toString
n=s>r!==(B.Q===o)
m=A.tq(g.gf2().a,g.gf2().b,0)
m.fW(m)
o=A.ce(m,q)
l=f.grr()
k=n?B.BD:B.BC
j=A.ce(m,p)
f=f.grr()
i=n?B.BC:B.BD
h=g.d.a===g.e.a?B.SY:B.le
return new A.jU(new A.lQ(o,l,k),new A.lQ(j,f,i),h,!0)},
qk(a){var s=this,r=A.aZ("result"),q=s.d,p=s.e,o=a.a
switch(o.a){case 0:case 1:r.sbS(s.Wa(t.ib.a(a).b,o===B.dz))
break
case 2:s.e=s.d=null
r.sbS(B.cG)
break
case 3:o=s.a
s.d=new A.aW(o.a,B.A)
s.e=new A.aW(o.b,B.K)
r.sbS(B.cG)
break
case 4:r.sbS(s.So(t.k2.a(a).gzp()))
break
case 5:t.uQ.a(a)
r.sbS(s.RK(a.gGP(a),a.gfm(),a.ga2i()))
break
case 6:t.sQ.a(a)
r.sbS(s.Rp(a.gwQ(a),a.gfm(),a.gqi(a)))
break}if(!J.f(q,s.d)||!J.f(p,s.e)){s.b.af()
s.U1()}return r.aF()},
Wa(a,b){var s,r,q,p,o,n,m=this
if(b)m.e=null
else m.d=null
s=m.b
r=s.bt(0,null)
r.fW(r)
q=A.ce(r,a)
p=m.gf2()
if(p.gP(p))return A.ah6(m.gf2(),q)
p=m.gf2()
o=s.K.r
o.toString
n=m.oC(s.hk(A.aql(p,q,o)))
if(b)m.e=n
else m.d=n
s=n.a
p=m.a
if(s===p.b)return B.b3
if(s===p.a)return B.b4
return A.ah6(m.gf2(),q)},
oC(a){var s,r=a.a,q=this.a,p=q.b
if(r<=p)s=r===p&&a.b===B.A
else s=!0
if(s)return new A.aW(p,B.K)
q=q.a
if(r<q)return new A.aW(q,B.A)
return a},
So(a){var s,r,q,p,o=this,n=o.b,m=n.hk(n.k_(a))
if(o.Uk(m))return B.aq
s=n.lx(m)
r=A.aZ("start")
q=A.aZ("end")
n=m.a
p=s.b
if(n>=p)r.b=q.b=new A.aW(n,B.A)
else{r.b=new A.aW(s.a,B.A)
q.b=new A.aW(p,B.K)}o.d=r.aF()
o.e=q.aF()
return B.aq},
Rp(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.bt(0,null)
if(j.fW(j)===0)switch(c){case B.fl:case B.dB:return B.b4
case B.fm:case B.dA:return B.b3}s=A.ce(j,new A.t(a,0)).a
switch(c){case B.fl:case B.fm:if(b){k=l.e
k.toString
r=k}else{k=l.d
k.toString
r=k}q=l.SK(r,!1,s)
p=q.a
o=q.b
break
case B.dA:case B.dB:n=l.e
if(n==null){n=new A.aW(l.a.b,B.K)
l.e=n
r=n}else r=n
n=l.d
if(n==null){l.d=r
m=r}else m=n
p=k.hk(new A.t(s,k.oQ(b?r:m).b-k.K.grr()/2))
o=B.aq
break
default:p=null
o=null}if(b)l.e=p
else l.d=p
return o},
RK(a,b,c){var s,r,q,p,o,n,m=this,l=m.e
if(l==null){l=m.a
l=a?new A.aW(l.a,B.A):new A.aW(l.b,B.K)
m.e=l
s=l}else s=l
l=m.d
if(l==null){m.d=s
r=s}else r=l
s=b?s:r
if(a&&s.a===m.a.b)return B.b3
l=!a
if(l&&s.a===m.a.a)return B.b4
switch(c){case B.UP:l=m.a
q=m.oP(new A.S3(B.c.ab(m.c,l.a,l.b)),s,a)
p=B.aq
break
case B.UQ:l=m.a
q=m.oP(new A.KL(new A.a5B(m),new A.a5z(B.c.ab(m.c,l.a,l.b))),s,a)
p=B.aq
break
case B.UR:q=m.oP(new A.XY(m),s,a)
p=B.aq
break
case B.US:o=m.a
n=o.a
o=o.b
q=m.oP(new A.SY(B.c.ab(m.c,n,o)),s,a)
if(a&&q.a===o)p=B.b3
else p=l&&q.a===n?B.b4:B.aq
break
default:p=null
q=null}if(b)m.e=q
else m.d=q
return p},
oP(a,b,c){if(c)return this.oC(a.fB(B.Su.fB(b)))
return this.oC(a.fA(B.St.fA(b)))},
SK(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.K,i=j.fr
if(i==null)i=j.fr=j.a.XN()
s=k.zh(a,B.U)
j=i.length
r=j-1
for(q=s.b,p=0;p<i.length;i.length===j||(0,A.R)(i),++p){o=i[p]
if(o.gpQ()>q){r=J.alO(o)
break}}if(b&&r===i.length-1)n=new A.aW(l.a.b,B.K)
else if(!b&&r===0)n=new A.aW(l.a.a,B.A)
else n=l.oC(k.hk(new A.t(c,i[b?r+1:r-1].gpQ())))
k=n.a
j=l.a
if(k===j.a)m=B.b4
else m=k===j.b?B.b3:B.aq
return new A.aV(n,m,t.nz)},
Uk(a){var s,r,q,p,o=this
if(o.d==null||o.e==null)return!1
s=A.aZ("currentStart")
r=A.aZ("currentEnd")
q=o.d
q.toString
p=o.e
p.toString
if(A.adO(q,p)>0){s.b=q
r.b=p}else{s.b=p
r.b=q}return A.adO(s.aF(),a)>=0&&A.adO(r.aF(),a)<=0},
bt(a,b){var s=A.tq(this.gf2().a,this.gf2().b,0)
s.cn(0,this.b.bt(0,b))
return s},
hg(a,b){if(this.b.b==null)return},
gf2(){var s,r,q,p,o,n,m=this,l=m.x
if(l==null){l=m.b
s=m.a
r=s.a
q=l.z8(A.a4Z(B.A,r,s.b,!1))
if(q.length!==0){l=B.b.gJ(q)
p=new A.y(l.a,l.b,l.c,l.d)
for(o=1;o<q.length;++o){l=q[o]
p=p.ng(new A.y(l.a,l.b,l.c,l.d))}m.x=p
l=p}else{n=l.oQ(new A.aW(r,B.A))
l=A.adc(n,new A.t(n.a+0,n.b+-l.K.grr()))
m.x=l}}return l},
gd6(a){var s=this.gf2()
return new A.Z(s.c-s.a,s.d-s.b)},
aG(a,b){var s,r,q,p,o,n=this,m=n.d
if(m==null||n.e==null)return
s=n.b
if(s.c9!=null){r=A.a4Z(B.A,m.a,n.e.a,!1)
q=$.av().bf()
q.scD(0,B.aO)
m=s.c9
m.toString
q.sar(0,m)
for(m=s.z8(r),s=m.length,p=0;p<m.length;m.length===s||(0,A.R)(m),++p){o=m[p]
a.gbz(a).c7(new A.y(o.a,o.b,o.c,o.d).cT(b),q)}}A.tq(n.gf2().a,n.gf2().b,0)},
ze(a){var s=this.b.K.a.Jv(a),r=this.a,q=r.a
r=r.b
return A.a4Z(B.A,B.f.fV(s.a,q,r),B.f.fV(s.b,q,r),!1)},
$ia1:1}
A.xe.prototype={
am(a){var s,r,q
this.eb(a)
s=this.au$
for(r=t.lO;s!=null;){s.am(a)
q=s.e
q.toString
s=r.a(q).aj$}},
ad(a){var s,r,q
this.ds(0)
s=this.au$
for(r=t.lO;s!=null;){s.ad(0)
q=s.e
q.toString
s=r.a(q).aj$}}}
A.Ng.prototype={}
A.Nh.prototype={
am(a){this.N8(a)
$.fB.wW$.a.E(0,this.gAB())},
ad(a){$.fB.wW$.a.A(0,this.gAB())
this.N9(0)}}
A.PN.prototype={}
A.PO.prototype={}
A.Hl.prototype={
sa0L(a){if(a===this.K)return
this.K=a
this.af()},
sa18(a){if(a===this.q)return
this.q=a
this.af()},
sXl(a){return},
sXk(a){return},
gj4(){return!0},
gjh(){return!0},
gSZ(){var s=this.K,r=(s|1)>>>0>0||(s|2)>>>0>0?80:0
return(s|4)>>>0>0||(s|8)>>>0>0?r+80:r},
bV(a){return a.bp(new A.Z(1/0,this.gSZ()))},
aG(a,b){var s=b.a,r=b.b,q=this.k3
q=new A.Gx(new A.y(s,r,s+q.a,r+q.b),this.K,this.q,!1,!1,A.z(t.S,t.M),A.ah())
q.fI()
a.lP()
a.w3(q)}}
A.Hq.prototype={}
A.dK.prototype={
e6(a){if(!(a.e instanceof A.c5))a.e=new A.c5()},
bV(a){var s=this.q$
if(s!=null)return s.fz(a)
return this.mO(a)},
bx(){var s=this,r=s.q$,q=t.k
if(r!=null){r.cg(q.a(A.w.prototype.gX.call(s)),!0)
r=s.q$.k3
r.toString
s.k3=r}else s.k3=s.mO(q.a(A.w.prototype.gX.call(s)))},
mO(a){return new A.Z(A.E(0,a.a,a.b),A.E(0,a.c,a.d))},
cv(a,b){var s=this.q$
s=s==null?null:s.bN(a,b)
return s===!0},
cY(a,b){},
aG(a,b){var s=this.q$
if(s!=null)a.eq(s,b)}}
A.nr.prototype={
D(){return"HitTestBehavior."+this.b}}
A.ut.prototype={
bN(a,b){var s,r=this
if(r.k3.B(0,b)){s=r.cv(a,b)||r.v===B.aw
if(s||r.v===B.e1)a.E(0,new A.mX(b,r))}else s=!1
return s},
iF(a){return this.v===B.aw}}
A.H5.prototype={
sFl(a){if(this.v.k(0,a))return
this.v=a
this.a2()},
bx(){var s=this,r=t.k.a(A.w.prototype.gX.call(s)),q=s.q$,p=s.v
if(q!=null){q.cg(p.nd(r),!0)
q=s.q$.k3
q.toString
s.k3=q}else s.k3=p.nd(r).bp(B.P)},
bV(a){var s=this.q$,r=this.v
if(s!=null)return s.fz(r.nd(a))
else return r.nd(a).bp(B.P)}}
A.Hf.prototype={
sa0o(a,b){if(this.v===b)return
this.v=b
this.a2()},
sa0l(a,b){if(this.N===b)return
this.N=b
this.a2()},
CU(a){var s,r,q=a.a,p=a.b
p=p<1/0?p:A.E(this.v,q,p)
s=a.c
r=a.d
return new A.aJ(q,p,s,r<1/0?r:A.E(this.N,s,r))},
Dv(a,b){var s=this.q$
if(s!=null)return a.bp(b.$2(s,this.CU(a)))
return this.CU(a).bp(B.P)},
bV(a){return this.Dv(a,A.abv())},
bx(){this.k3=this.Dv(t.k.a(A.w.prototype.gX.call(this)),A.abw())}}
A.H1.prototype={
sWX(a,b){if(this.v===b)return
this.v=b
this.a2()},
B2(a){var s,r,q,p,o=a.a,n=a.b
if(o>=n&&a.c>=a.d)return new A.Z(A.E(0,o,n),A.E(0,a.c,a.d))
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
r=p}return a.bp(new A.Z(o,r))},
bV(a){return this.B2(a)},
bx(){var s,r=this,q=r.B2(t.k.a(A.w.prototype.gX.call(r)))
r.k3=q
s=r.q$
if(s!=null)s.h8(A.ql(q))}}
A.Hj.prototype={
gjh(){return this.q$!=null&&this.v>0},
slk(a,b){var s,r,q,p,o=this
if(o.N===b)return
s=o.q$!=null
r=s&&o.v>0
q=o.v
o.N=b
p=B.d.b2(A.Qv(b,0,1)*255)
o.v=p
if(r!==(s&&p>0))o.jJ()
o.af()
if(q!==0!==(o.v!==0)&&!0)o.aZ()},
spO(a){return},
jO(a){return this.v>0},
aG(a,b){var s,r,q=this
if(q.q$==null)return
s=q.v
if(s===0){q.ch.saD(0,null)
return}r=q.ch
r.saD(0,a.yo(b,s,A.dK.prototype.giO.call(q),t.Ex.a(r.a)))},
eS(a){var s,r=this.q$
if(r!=null)s=this.v!==0||!1
else s=!1
if(s){r.toString
a.$1(r)}}}
A.uo.prototype={
gdj(){if(this.q$!=null){var s=this.x_$
s.toString}else s=!1
return s},
o5(a){var s=a==null?A.agy():a
s.sFn(0,this.kZ$)
return s},
slk(a,b){var s=this,r=s.l_$
if(r===b)return
if(s.b!=null&&r!=null)r.F(0,s.gpy())
s.l_$=b
if(s.b!=null)b.S(0,s.gpy())
s.vL()},
spO(a){if(!1===this.x0$)return
this.x0$=!1
this.aZ()},
vL(){var s,r=this,q=r.kZ$,p=r.l_$
p=r.kZ$=B.d.b2(A.Qv(p.gn(p),0,1)*255)
if(q!==p){s=r.x_$
p=p>0
r.x_$=p
if(r.q$!=null&&s!==p)r.jJ()
r.a0h()
if(q===0||r.kZ$===0)r.aZ()}},
jO(a){var s=this.l_$
return s.gn(s)>0},
eS(a){var s,r=this.q$
if(r!=null)if(this.kZ$===0){s=this.x0$
s.toString}else s=!0
else s=!1
if(s){r.toString
a.$1(r)}}}
A.H0.prototype={}
A.qP.prototype={
S(a,b){return null},
F(a,b){return null},
i(a){return"CustomClipper"}}
A.lT.prototype={
Jo(a){return this.b.eU(new A.y(0,0,0+a.a,0+a.b),this.c)},
Kj(a){if(A.A(a)!==B.YO)return!0
t.qm.a(a)
return!a.b.k(0,this.b)||a.c!=this.c}}
A.pw.prototype={
smM(a){var s,r=this,q=r.v
if(q==a)return
r.v=a
s=a==null
if(s||q==null||A.A(a)!==A.A(q)||a.Kj(q))r.p5()
if(r.b!=null){if(q!=null)q.F(0,r.gp0())
if(!s)a.S(0,r.gp0())}},
am(a){var s
this.lV(a)
s=this.v
if(s!=null)s.S(0,this.gp0())},
ad(a){var s=this.v
if(s!=null)s.F(0,this.gp0())
this.kf(0)},
p5(){this.N=null
this.af()
this.aZ()},
sq_(a){if(a!==this.ai){this.ai=a
this.af()}},
bx(){var s,r=this,q=r.k3
q=q!=null?q:null
r.tw()
s=r.k3
s.toString
if(!J.f(q,s))r.N=null},
i9(){var s,r,q=this
if(q.N==null){s=q.v
if(s==null)s=null
else{r=q.k3
r.toString
r=s.Jo(r)
s=r}q.N=s==null?q.goF():s}},
ii(a){var s,r=this
switch(r.ai.a){case 0:return null
case 1:case 2:case 3:if(r.v==null)s=null
else{s=r.k3
s=new A.y(0,0,0+s.a,0+s.b)}if(s==null){s=r.k3
s=new A.y(0,0,0+s.a,0+s.b)}return s}},
m(){this.ca=null
this.ht()}}
A.H4.prototype={
goF(){var s=this.k3
return new A.y(0,0,0+s.a,0+s.b)},
bN(a,b){var s=this
if(s.v!=null){s.i9()
if(!s.N.B(0,b))return!1}return s.i0(a,b)},
aG(a,b){var s,r,q=this,p=q.q$
if(p!=null){s=q.ch
if(q.ai!==B.J){q.i9()
p=q.cx
p===$&&A.b()
r=q.N
r.toString
s.saD(0,a.jR(p,b,r,A.dK.prototype.giO.call(q),q.ai,t.iM.a(s.a)))}else{a.eq(p,b)
s.saD(0,null)}}else q.ch.saD(0,null)}}
A.H3.prototype={
goF(){var s=$.av().df(),r=this.k3
s.w_(new A.y(0,0,0+r.a,0+r.b))
return s},
bN(a,b){var s=this
if(s.v!=null){s.i9()
if(!s.N.B(0,b))return!1}return s.i0(a,b)},
aG(a,b){var s,r,q,p,o=this,n=o.q$
if(n!=null){s=o.ch
if(o.ai!==B.J){o.i9()
n=o.cx
n===$&&A.b()
r=o.k3
q=r.a
r=r.b
p=o.N
p.toString
s.saD(0,a.If(n,b,new A.y(0,0,0+q,0+r),p,A.dK.prototype.giO.call(o),o.ai,t.n0.a(s.a)))}else{a.eq(n,b)
s.saD(0,null)}}else o.ch.saD(0,null)}}
A.xf.prototype={
shC(a,b){if(this.aQ===b)return
this.aQ=b
this.af()},
sfC(a,b){if(this.bv.k(0,b))return
this.bv=b
this.af()},
sar(a,b){if(this.dB.k(0,b))return
this.dB=b
this.af()},
ei(a){this.fG(a)
a.shC(0,this.aQ)}}
A.Hm.prototype={
scS(a,b){if(this.wY===b)return
this.wY=b
this.p5()},
sX6(a,b){if(J.f(this.wZ,b))return
this.wZ=b
this.p5()},
goF(){var s,r,q=this.k3,p=0+q.a
q=0+q.b
switch(this.wY.a){case 0:s=this.wZ
if(s==null)s=B.aA
return s.dL(new A.y(0,0,p,q))
case 1:s=(p-0)/2
r=(q-0)/2
return new A.hv(0,0,p,q,s,r,s,r,s,r,s,r,s===r)}},
bN(a,b){var s=this
if(s.v!=null){s.i9()
if(!s.N.B(0,b))return!1}return s.i0(a,b)},
aG(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.q$==null){i.ch.saD(0,null)
return}i.i9()
s=i.N.cT(b)
r=$.av()
q=r.df()
q.f7(s)
p=a.gbz(a)
if(i.aQ!==0&&!0){p.c7(new A.y(s.a,s.b,s.c,s.d).cN(20),$.aeR())
o=i.bv
n=i.aQ
m=i.dB
p.nb(q,o,n,(m.gn(m)>>>24&255)!==255)}l=i.ai===B.ha
if(!l){r=r.bf()
r.sar(0,i.dB)
p.cJ(s,r)}r=i.cx
r===$&&A.b()
o=i.k3
n=o.a
o=o.b
m=i.N
m.toString
k=i.ch
j=t.bG.a(k.a)
k.saD(0,a.a10(r,b,new A.y(0,0,0+n,0+o),m,new A.a02(i,l),i.ai,j))}}
A.a02.prototype={
$2(a,b){var s,r
if(this.b){s=a.gbz(a)
r=$.av().bf()
r.sar(0,this.a.dB)
s.na(r)}this.a.fH(a,b)},
$S:8}
A.Hn.prototype={
goF(){var s=$.av().df(),r=this.k3
s.w_(new A.y(0,0,0+r.a,0+r.b))
return s},
bN(a,b){var s=this
if(s.v!=null){s.i9()
if(!s.N.B(0,b))return!1}return s.i0(a,b)},
aG(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(j.q$==null){j.ch.saD(0,null)
return}j.i9()
s=j.k3
r=b.a
q=b.b
p=s.a
s=s.b
o=j.N.cT(b)
n=a.gbz(a)
if(j.aQ!==0&&!0){n.c7(new A.y(r,q,r+p,q+s).cN(20),$.aeR())
s=j.bv
r=j.aQ
q=j.dB
n.nb(o,s,r,(q.gn(q)>>>24&255)!==255)}m=j.ai===B.ha
if(!m){s=$.av().bf()
s.sar(0,j.dB)
n.dz(o,s)}s=j.cx
s===$&&A.b()
r=j.k3
q=r.a
r=r.b
p=j.N
p.toString
l=j.ch
k=t.n0.a(l.a)
l.saD(0,a.If(s,b,new A.y(0,0,0+q,0+r),p,new A.a03(j,m),j.ai,k))}}
A.a03.prototype={
$2(a,b){var s,r
if(this.b){s=a.gbz(a)
r=$.av().bf()
r.sar(0,this.a.dB)
s.na(r)}this.a.fH(a,b)},
$S:8}
A.qU.prototype={
D(){return"DecorationPosition."+this.b}}
A.H9.prototype={
sYy(a){var s,r=this
if(a.k(0,r.N))return
s=r.v
if(s!=null)s.m()
r.v=null
r.N=a
r.af()},
sbs(a,b){if(b===this.ai)return
this.ai=b
this.af()},
swi(a){if(a.k(0,this.br))return
this.br=a
this.af()},
ad(a){var s=this,r=s.v
if(r!=null)r.m()
s.v=null
s.kf(0)
s.af()},
iF(a){var s=this.N,r=this.k3
r.toString
return s.Hb(r,a,this.br.d)},
aG(a,b){var s,r,q,p=this,o=p.v
if(o==null)o=p.v=p.N.q5(p.gdH())
s=p.br
r=p.k3
r.toString
q=new A.nt(s.a,s.b,s.c,s.d,r,s.f)
if(p.ai===B.hi){o.nP(a.gbz(a),b,q)
if(p.N.gxw())a.zG()}p.fH(a,b)
if(p.ai===B.ED){o=p.v
o.toString
o.nP(a.gbz(a),b,q)
if(p.N.gxw())a.zG()}}}
A.Hw.prototype={
sI2(a,b){return},
sdV(a){var s=this
if(J.f(s.N,a))return
s.N=a
s.af()
s.aZ()},
sbA(a){var s=this
if(s.ai==a)return
s.ai=a
s.af()
s.aZ()},
gjh(){return!1},
sbh(a,b){var s,r=this
if(J.f(r.ca,b))return
s=new A.bc(new Float64Array(16))
s.ba(b)
r.ca=s
r.af()
r.aZ()},
sl7(a){return},
guh(){var s,r,q=this,p=q.N,o=p==null?null:p.Y(q.ai)
if(o==null)return q.ca
s=new A.bc(new Float64Array(16))
s.cR()
p=q.k3
p.toString
r=o.WS(p)
s.av(0,r.a,r.b)
p=q.ca
p.toString
s.cn(0,p)
s.av(0,-r.a,-r.b)
return s},
bN(a,b){return this.cv(a,b)},
cv(a,b){var s=this.br?this.guh():null
return a.w0(new A.a0c(this),b,s)},
aG(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
if(a.q$!=null){s=a.guh()
s.toString
r=A.Ym(s)
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
if(b===0||!isFinite(b)){a.ch.saD(0,null)
return}q=a.cx
q===$&&A.b()
p=A.dK.prototype.giO.call(a)
o=a.ch
n=o.a
o.saD(0,a0.nU(q,a1,s,p,n instanceof A.k3?n:null))}else{a.fH(a0,a1.W(0,r))
a.ch.saD(0,null)}}},
cY(a,b){var s=this.guh()
s.toString
b.cn(0,s)}}
A.a0c.prototype={
$2(a,b){return this.a.ow(a,b)},
$S:15}
A.uq.prototype={
UK(){if(this.v!=null)return
this.v=this.ai},
C4(a){switch(a.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
sx5(a){var s=this,r=s.N
if(r===a)return
s.N=a
if(s.C4(r)||s.C4(a))s.a2()
else{s.bF=s.ca=null
s.af()}},
sdV(a){var s=this
if(s.ai.k(0,a))return
s.ai=a
s.v=s.bF=s.ca=null
s.af()},
sbA(a){var s=this
if(s.br==a)return
s.br=a
s.v=s.bF=s.ca=null
s.af()},
bV(a){var s,r=this.q$
if(r!=null){s=r.fz(B.bG)
switch(this.N.a){case 6:return a.bp(new A.aJ(0,a.b,0,a.d).mP(s))
case 1:case 2:case 0:case 4:case 3:case 5:return a.mP(s)}}else return new A.Z(A.E(0,a.a,a.b),A.E(0,a.c,a.d))},
bx(){var s,r,q,p=this,o=p.q$
if(o!=null){o.cg(B.bG,!0)
switch(p.N.a){case 6:o=t.k
s=o.a(A.w.prototype.gX.call(p))
r=p.q$.k3
r.toString
q=new A.aJ(0,s.b,0,s.d).mP(r)
p.k3=o.a(A.w.prototype.gX.call(p)).bp(q)
break
case 1:case 2:case 0:case 4:case 3:case 5:o=t.k.a(A.w.prototype.gX.call(p))
s=p.q$.k3
s.toString
p.k3=o.mP(s)
break}p.bF=p.ca=null}else{o=t.k.a(A.w.prototype.gX.call(p))
p.k3=new A.Z(A.E(0,o.a,o.b),A.E(0,o.c,o.d))}},
vM(){var s,r,q,p,o,n,m,l,k,j=this
if(j.bF!=null)return
if(j.q$==null){j.ca=!1
s=new A.bc(new Float64Array(16))
s.cR()
j.bF=s}else{j.UK()
s=j.q$.k3
s.toString
r=j.N
q=j.k3
q.toString
p=A.aj2(r,s,q)
q=p.b
r=p.a
o=s.a
s=s.b
n=j.v.xp(r,new A.y(0,0,0+o,0+s))
m=j.v
m.toString
l=j.k3
k=m.xp(q,new A.y(0,0,0+l.a,0+l.b))
m=n.a
j.ca=n.c-m<o||n.d-n.b<s
s=A.tq(k.a,k.b,0)
s.hm(0,q.a/r.a,q.b/r.b,1)
s.av(0,-m,-n.b)
j.bF=s}},
Df(a,b){var s,r,q,p,o=this,n=o.bF
n.toString
s=A.Ym(n)
if(s==null){n=o.cx
n===$&&A.b()
r=o.bF
r.toString
q=A.dK.prototype.giO.call(o)
p=o.ch.a
return a.nU(n,b,r,q,p instanceof A.k3?p:null)}else o.fH(a,b.W(0,s))
return null},
aG(a,b){var s,r,q,p,o,n=this
if(n.q$!=null){s=n.k3
if(!s.gP(s)){s=n.q$.k3
s=s.gP(s)}else s=!0}else s=!0
if(s)return
n.vM()
s=n.ca
s.toString
if(s&&n.dD!==B.J){s=n.cx
s===$&&A.b()
r=n.k3
q=r.a
r=r.b
p=n.ch
o=p.a
o=o instanceof A.n3?o:null
p.saD(0,a.jR(s,b,new A.y(0,0,0+q,0+r),n.gTW(),n.dD,o))}else n.ch.saD(0,n.Df(a,b))},
cv(a,b){var s=this,r=s.k3
if(!r.gP(r)){r=s.q$
if(r==null)r=null
else{r=r.k3
r=r.gP(r)}r=r===!0}else r=!0
if(r)return!1
s.vM()
return a.w0(new A.a_J(s),b,s.bF)},
jO(a){var s=this.k3
if(!s.gP(s)){s=a.k3
s=!s.gP(s)}else s=!1
return s},
cY(a,b){var s=this.k3
if(!s.gP(s)){s=a.k3
s=!s.gP(s)}else s=!1
if(!s)b.zJ()
else{this.vM()
s=this.bF
s.toString
b.cn(0,s)}}}
A.a_J.prototype={
$2(a,b){return this.a.ow(a,b)},
$S:15}
A.Hc.prototype={
sa1Y(a){var s=this
if(s.v.k(0,a))return
s.v=a
s.af()
s.aZ()},
bN(a,b){return this.cv(a,b)},
cv(a,b){var s,r,q=this
if(q.N){s=q.v
r=q.k3
r=new A.t(s.a*r.a,s.b*r.b)
s=r}else s=null
return a.my(new A.a_K(q),s,b)},
aG(a,b){var s,r,q=this
if(q.q$!=null){s=q.v
r=q.k3
q.fH(a,new A.t(b.a+s.a*r.a,b.b+s.b*r.b))}},
cY(a,b){var s=this.v,r=this.k3
b.av(0,s.a*r.a,s.b*r.b)}}
A.a_K.prototype={
$2(a,b){return this.a.ow(a,b)},
$S:15}
A.Ho.prototype={
mO(a){return new A.Z(A.E(1/0,a.a,a.b),A.E(1/0,a.c,a.d))},
hH(a,b){var s,r=this,q=null
if(t.Y.b(a)){s=r.cs
return s==null?q:s.$1(a)}if(t.c.b(a))return q
if(t.Cs.b(a)){s=r.ag
return s==null?q:s.$1(a)}if(t.hV.b(a))return q
if(t.AJ.b(a)){s=r.aQ
return s==null?q:s.$1(a)}if(t.EL.b(a)){s=r.bv
return s==null?q:s.$1(a)}if(t.eB.b(a))return q
if(t.zv.b(a))return q
if(t.zs.b(a)){s=r.aj
return s==null?q:s.$1(a)}}}
A.Hh.prototype={
bN(a,b){return this.Mc(a,b)&&!0},
hH(a,b){var s=this.ag
if(s!=null&&t.hV.b(a))return s.$1(a)},
gG2(a){return this.aQ},
gz1(){return this.bv},
am(a){this.lV(a)
this.bv=!0},
ad(a){this.bv=!1
this.kf(0)},
mO(a){return new A.Z(A.E(1/0,a.a,a.b),A.E(1/0,a.c,a.d))},
$iip:1,
gy0(a){return this.bq},
gy3(a){return this.aY}}
A.Hr.prototype={
gdj(){return!0}}
A.ur.prototype={
sHf(a){var s,r=this
if(a===r.v)return
r.v=a
s=r.N
if(s==null||!s)r.aZ()},
sxn(a){var s=this,r=s.N
if(a==r)return
if(r==null)r=s.v
s.N=a
if(r!==(a==null?s.v:a))s.aZ()},
bN(a,b){return!this.v&&this.i0(a,b)},
eS(a){var s,r=this.q$
if(r!=null){s=this.N
s=!(s==null?this.v:s)}else s=!1
if(s){r.toString
a.$1(r)}}}
A.Hi.prototype={
sra(a){var s=this
if(a===s.v)return
s.v=a
s.a2()
s.r4()},
eg(a){if(this.v)return null
return this.Az(a)},
gj4(){return this.v},
bV(a){if(this.v)return new A.Z(A.E(0,a.a,a.b),A.E(0,a.c,a.d))
return this.Mb(a)},
nQ(){this.M2()},
bx(){var s,r=this
if(r.v){s=r.q$
if(s!=null)s.h8(t.k.a(A.w.prototype.gX.call(r)))}else r.tw()},
bN(a,b){return!this.v&&this.i0(a,b)},
jO(a){return!this.v},
aG(a,b){if(this.v)return
this.fH(a,b)},
eS(a){if(this.v)return
this.tu(a)}}
A.un.prototype={
sFb(a){if(this.v===a)return
this.v=a
this.aZ()},
sxn(a){return},
bN(a,b){return this.v?this.k3.B(0,b):this.i0(a,b)},
eS(a){var s,r,q=this.q$
if(q!=null){s=this.N
r=this.v
s=!r}else s=!1
if(s){q.toString
a.$1(q)}}}
A.iy.prototype={
sa27(a){if(A.aeu(a,this.cs))return
this.cs=a
this.aZ()},
siM(a){var s,r=this
if(J.f(r.bq,a))return
s=r.bq
r.bq=a
if(a!=null!==(s!=null))r.aZ()},
sjM(a){var s,r=this
if(J.f(r.ag,a))return
s=r.ag
r.ag=a
if(a!=null!==(s!=null))r.aZ()},
sa0D(a){var s,r=this
if(J.f(r.aY,a))return
s=r.aY
r.aY=a
if(a!=null!==(s!=null))r.aZ()},
sa0J(a){var s,r=this
if(J.f(r.aQ,a))return
s=r.aQ
r.aQ=a
if(a!=null!==(s!=null))r.aZ()},
ei(a){var s,r=this
r.fG(a)
if(r.bq!=null){s=r.cs
s=s==null||s.B(0,B.dC)}else s=!1
if(s)a.siM(r.bq)
if(r.ag!=null){s=r.cs
s=s==null||s.B(0,B.AQ)}else s=!1
if(s)a.sjM(r.ag)
if(r.aY!=null){s=r.cs
if(s==null||s.B(0,B.dG))a.srf(r.gUd())
s=r.cs
if(s==null||s.B(0,B.dF))a.sre(r.gUb())}if(r.aQ!=null){s=r.cs
if(s==null||s.B(0,B.dD))a.srg(r.gUf())
s=r.cs
if(s==null||s.B(0,B.dE))a.srd(r.gU9())}},
Uc(){var s,r,q=this.aY
if(q!=null){s=this.k3
r=s.a*-0.8
s=s.ig(B.j)
s=A.ce(this.bt(0,null),s)
q.$1(new A.h6(null,new A.t(r,0),r,s))}},
Ue(){var s,r,q=this.aY
if(q!=null){s=this.k3
r=s.a*0.8
s=s.ig(B.j)
s=A.ce(this.bt(0,null),s)
q.$1(new A.h6(null,new A.t(r,0),r,s))}},
Ug(){var s,r,q=this.aQ
if(q!=null){s=this.k3
r=s.b*-0.8
s=s.ig(B.j)
s=A.ce(this.bt(0,null),s)
q.$1(new A.h6(null,new A.t(0,r),r,s))}},
Ua(){var s,r,q=this.aQ
if(q!=null){s=this.k3
r=s.b*0.8
s=s.ig(B.j)
s=A.ce(this.bt(0,null),s)
q.$1(new A.h6(null,new A.t(0,r),r,s))}}}
A.uu.prototype={
sId(a){var s=this
if(s.v===a)return
s.v=a
s.EF(a)
s.aZ()},
sXQ(a){if(this.N===a)return
this.N=a
this.aZ()},
sZ9(a){if(this.ai===a)return
this.ai=a
this.aZ()},
sZ7(a){return},
EF(a){var s=this,r=a.fy
r=a.fx
r=r==null?null:new A.ck(r,B.ah)
s.ca=r
s.bF=null
s.dD=null
s.fk=null
s.hG=null},
sbA(a){if(this.x3==a)return
this.x3=a
this.aZ()},
eS(a){this.tu(a)},
ei(a){var s,r,q=this
q.fG(a)
a.a=q.N
a.b=q.ai
s=q.v.a
if(s!=null){a.b5(B.B0,!0)
a.b5(B.AT,s)}s=q.v.e
if(s!=null)a.b5(B.AY,s)
s=q.v.f
if(s!=null)a.b5(B.B1,s)
s=q.v.w
if(s!=null)a.b5(B.B_,s)
s=q.v.as
if(s!=null)a.b5(B.AW,s)
s=q.v.at
if(s!=null)a.b5(B.AX,s)
s=q.v.db
if(s!=null)a.b5(B.AU,s)
s=q.ca
if(s!=null){a.p4=s
a.d=!0}s=q.bF
if(s!=null){a.R8=s
a.d=!0}s=q.dD
if(s!=null){a.RG=s
a.d=!0}s=q.fk
if(s!=null){a.rx=s
a.d=!0}s=q.hG
if(s!=null){a.ry=s
a.d=!0}s=q.v
r=s.p2
if(r!=null){a.to=r
a.d=!0}s.p3!=null
s=q.v.cx
if(s!=null)a.b5(B.AV,s)
s=q.v.cy
if(s!=null)a.b5(B.AZ,s)
s=q.x3
if(s!=null){a.y1=s
a.d=!0}s=q.v
r=s.R8
if(r!=null){a.id=r
a.d=!0}s=s.RG
if(s!=null)a.Fi(s)
if(q.v.rx!=null)a.siM(q.gUh())
if(q.v.ry!=null)a.sjM(q.gU7())
if(q.v.q!=null)a.srb(q.gU5())},
Ui(){var s=this.v.rx
if(s!=null)s.$0()},
U8(){var s=this.v.ry
if(s!=null)s.$0()},
U6(){var s=this.v.q
if(s!=null)s.$0()}}
A.H2.prototype={
sX5(a){return},
ei(a){this.fG(a)
a.c=!0}}
A.Hg.prototype={
ei(a){this.fG(a)
a.d=a.p2=a.a=!0}}
A.Hb.prototype={
sZ8(a){if(a===this.v)return
this.v=a
this.aZ()},
eS(a){if(this.v)return
this.tu(a)}}
A.He.prototype={
sxo(a,b){if(b===this.v)return
this.v=b
this.aZ()},
ei(a){this.fG(a)
a.k1=this.v
a.d=!0}}
A.up.prototype={
sn(a,b){if(this.v.k(0,b))return
this.v=b
this.af()},
sKl(a){return},
aG(a,b){var s,r=this,q=r.v,p=r.k3
p.toString
s=new A.q5(q,p,b,A.z(t.S,t.M),A.ah(),r.$ti.h("q5<1>"))
s.fI()
a.yn(s,A.dK.prototype.giO.call(r),b)},
gjh(){return!0}}
A.N7.prototype={
eg(a){var s=this.q$
if(s!=null)return s.iW(a)
return this.Az(a)}}
A.N8.prototype={
am(a){var s=this
s.lV(a)
s.l_$.S(0,s.gpy())
s.vL()},
ad(a){this.l_$.F(0,this.gpy())
this.kf(0)},
aG(a,b){if(this.kZ$===0)return
this.fH(a,b)}}
A.xg.prototype={
am(a){var s
this.eb(a)
s=this.q$
if(s!=null)s.am(a)},
ad(a){var s
this.ds(0)
s=this.q$
if(s!=null)s.ad(0)}}
A.xh.prototype={
eg(a){var s=this.q$
if(s!=null)return s.iW(a)
return this.Ap(a)}}
A.iB.prototype={
D(){return"SelectionResult."+this.b}}
A.cV.prototype={$ia1:1}
A.I_.prototype={
snW(a){var s=this,r=s.kY$
if(a==r)return
if(a==null)s.F(0,s.gDZ())
else if(r==null)s.S(0,s.gDZ())
s.DY()
s.kY$=a
s.E_()},
E_(){var s=this
if(s.kY$==null){s.jy$=!1
return}if(s.jy$&&!s.gn(s).d){s.kY$.A(0,s)
s.jy$=!1}else if(!s.jy$&&s.gn(s).d){s.kY$.E(0,s)
s.jy$=!0}},
DY(){var s=this
if(s.jy$){s.kY$.A(0,s)
s.jy$=!1}}}
A.om.prototype={
D(){return"SelectionEventType."+this.b}}
A.m3.prototype={
D(){return"TextGranularity."+this.b}}
A.a1x.prototype={}
A.qy.prototype={}
A.lO.prototype={}
A.lP.prototype={
D(){return"SelectionExtendDirection."+this.b}}
A.on.prototype={
D(){return"SelectionStatus."+this.b}}
A.jU.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.jU&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&b.c===s.c&&b.d===s.d},
gu(a){var s=this
return A.T(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.lQ.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.lQ&&b.a.k(0,s.a)&&b.b===s.b&&b.c===s.c},
gu(a){return A.T(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.vH.prototype={
D(){return"TextSelectionHandleType."+this.b}}
A.Hs.prototype={
eg(a){var s,r,q=this.q$
if(q!=null){s=q.iW(a)
r=q.e
r.toString
t.Ch.a(r)
if(s!=null)s+=r.a.b}else s=this.Ap(a)
return s},
aG(a,b){var s,r=this.q$
if(r!=null){s=r.e
s.toString
a.eq(r,t.Ch.a(s).a.W(0,b))}},
cv(a,b){var s,r=this.q$
if(r!=null){s=r.e
s.toString
t.Ch.a(s)
return a.my(new A.a04(b,s,r),s.a,b)}return!1}}
A.a04.prototype={
$2(a,b){return this.c.bN(a,b)},
$S:15}
A.Hk.prototype={
po(){var s=this
if(s.v!=null)return
s.v=s.N.Y(s.ai)},
sd3(a,b){var s=this
if(s.N.k(0,b))return
s.N=b
s.v=null
s.a2()},
sbA(a){var s=this
if(s.ai==a)return
s.ai=a
s.v=null
s.a2()},
bV(a){var s,r,q,p=this
p.po()
if(p.q$==null){s=p.v
return a.bp(new A.Z(s.a+s.c,s.b+s.d))}s=p.v
s.toString
r=a.G5(s)
q=p.q$.fz(r)
s=p.v
return a.bp(new A.Z(s.a+q.a+s.c,s.b+q.b+s.d))},
bx(){var s,r,q,p,o,n,m=this,l=t.k.a(A.w.prototype.gX.call(m))
m.po()
if(m.q$==null){s=m.v
m.k3=l.bp(new A.Z(s.a+s.c,s.b+s.d))
return}s=m.v
s.toString
r=l.G5(s)
m.q$.cg(r,!0)
s=m.q$
q=s.e
q.toString
t.Ch.a(q)
p=m.v
o=p.a
n=p.b
q.a=new A.t(o,n)
s=s.k3
m.k3=l.bp(new A.Z(o+s.a+p.c,n+s.b+p.d))}}
A.H_.prototype={
po(){var s=this
if(s.v!=null)return
s.v=s.N.Y(s.ai)},
sdV(a){var s=this
if(s.N.k(0,a))return
s.N=a
s.v=null
s.a2()},
sbA(a){var s=this
if(s.ai==a)return
s.ai=a
s.v=null
s.a2()},
w1(){var s,r,q,p,o=this
o.po()
s=o.q$
r=s.e
r.toString
t.Ch.a(r)
q=o.v
q.toString
p=o.k3
p.toString
s=s.k3
s.toString
r.a=q.kF(t.uu.a(p.a8(0,s)))}}
A.Hp.prototype={
sa29(a){if(this.ag==a)return
this.ag=a
this.a2()},
sa_h(a){if(this.aY==a)return
this.aY=a
this.a2()},
bV(a){var s,r,q=this,p=q.ag!=null||a.b===1/0,o=q.aY!=null||a.d===1/0,n=q.q$
if(n!=null){s=n.fz(new A.aJ(0,a.b,0,a.d))
if(p){n=q.ag
if(n==null)n=1
n=s.a*n}else n=1/0
if(o){r=q.aY
if(r==null)r=1
r=s.b*r}else r=1/0
return a.bp(new A.Z(n,r))}n=p?0:1/0
return a.bp(new A.Z(n,o?0:1/0))},
bx(){var s,r,q=this,p=t.k.a(A.w.prototype.gX.call(q)),o=q.ag!=null||p.b===1/0,n=q.aY!=null||p.d===1/0,m=q.q$
if(m!=null){m.cg(new A.aJ(0,p.b,0,p.d),!0)
if(o){m=q.q$.k3.a
s=q.ag
m*=s==null?1:s}else m=1/0
if(n){s=q.q$.k3.b
r=q.aY
s*=r==null?1:r}else s=1/0
q.k3=p.bp(new A.Z(m,s))
q.w1()}else{m=o?0:1/0
q.k3=p.bp(new A.Z(m,n?0:1/0))}}}
A.a24.prototype={
rW(a){return new A.Z(A.E(1/0,a.a,a.b),A.E(1/0,a.c,a.d))}}
A.H8.prototype={
sww(a){var s=this,r=s.v
if(r===a)return
if(A.A(a)!==A.A(r)||a.lI(r))s.a2()
s.v=a
s.b!=null},
am(a){this.Na(a)},
ad(a){this.Nb(0)},
bV(a){return a.bp(this.v.rW(a))},
bx(){var s,r,q,p,o,n,m=this,l=t.k,k=l.a(A.w.prototype.gX.call(m))
m.k3=k.bp(m.v.rW(k))
if(m.q$!=null){s=m.v.za(l.a(A.w.prototype.gX.call(m)))
l=m.q$
l.toString
k=s.a
r=s.b
q=k>=r
l.cg(s,!(q&&s.c>=s.d))
l=m.q$
p=l.e
p.toString
t.Ch.a(p)
o=m.v
n=m.k3
n.toString
if(q&&s.c>=s.d)l=new A.Z(A.E(0,k,r),A.E(0,s.c,s.d))
else{l=l.k3
l.toString}p.a=o.zk(n,l)}}}
A.xi.prototype={
am(a){var s
this.eb(a)
s=this.q$
if(s!=null)s.am(a)},
ad(a){var s
this.ds(0)
s=this.q$
if(s!=null)s.ad(0)}}
A.rA.prototype={
D(){return"GrowthDirection."+this.b}}
A.jX.prototype={
gHE(){return!1},
WW(a,b){var s=this.w
switch(A.ba(this.a).a){case 0:return new A.aJ(b,a,s,s)
case 1:return new A.aJ(s,s,b,a)}},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.jX))return!1
return b.a===s.a&&b.b===s.b&&b.d===s.d&&b.f===s.f&&b.r===s.r&&b.w===s.w&&b.x===s.x&&b.y===s.y&&b.Q===s.Q&&b.z===s.z},
gu(a){var s=this
return A.T(s.a,s.b,s.d,s.f,s.r,s.w,s.x,s.y,s.Q,s.z,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r=A.a([s.a.i(0),s.b.i(0),s.c.i(0),"scrollOffset: "+B.d.M(s.d,1),"remainingPaintExtent: "+B.d.M(s.r,1)],t.s),q=s.f
if(q!==0)r.push("overlap: "+B.d.M(q,1))
r.push("crossAxisExtent: "+B.d.M(s.w,1))
r.push("crossAxisDirection: "+s.x.i(0))
r.push("viewportMainAxisExtent: "+B.d.M(s.y,1))
r.push("remainingCacheExtent: "+B.d.M(s.Q,1))
r.push("cacheOrigin: "+B.d.M(s.z,1))
return"SliverConstraints("+B.b.bk(r,", ")+")"}}
A.a3O.prototype={
bP(){return"SliverGeometry"}}
A.os.prototype={}
A.Ig.prototype={
i(a){return A.A(this.a).i(0)+"@(mainAxis: "+A.h(this.c)+", crossAxis: "+A.h(this.d)+")"}}
A.vg.prototype={
i(a){var s=this.a
return"layoutOffset="+(s==null?"None":B.d.M(s,1))}}
A.jY.prototype={
i(a){return"paintOffset="+A.h(this.a)}}
A.iE.prototype={}
A.ca.prototype={
gX(){return t.p.a(A.w.prototype.gX.call(this))},
gj0(){return this.ghe()},
ghe(){var s=this,r=t.p
switch(A.ba(r.a(A.w.prototype.gX.call(s)).a).a){case 0:return new A.y(0,0,0+s.id.c,0+r.a(A.w.prototype.gX.call(s)).w)
case 1:return new A.y(0,0,0+r.a(A.w.prototype.gX.call(s)).w,0+s.id.c)}},
nQ(){},
Ha(a,b,c){var s=this
if(c>=0&&c<s.id.r&&b>=0&&b<t.p.a(A.w.prototype.gX.call(s)).w)if(s.xl(a,b,c)||!1){a.E(0,new A.Ig(c,b,s))
return!0}return!1},
xl(a,b,c){return!1},
fT(a,b,c){var s=a.d,r=a.r,q=s+r
return A.E(A.E(c,s,q)-A.E(b,s,q),0,r)},
mI(a,b,c){var s=a.d,r=s+a.z,q=a.Q,p=s+q
return A.E(A.E(c,r,p)-A.E(b,r,p),0,q)},
wg(a){return 0},
cY(a,b){},
hH(a,b){}}
A.a05.prototype={
Cf(a){var s
switch(a.a.a){case 0:case 3:s=!1
break
case 2:case 1:s=!0
break
default:s=null}switch(a.b.a){case 0:break
case 1:s=!s
break}return s},
a_p(a,b,c,d){var s,r,q,p,o=this,n={},m=t.p,l=o.Cf(m.a(A.w.prototype.gX.call(o))),k=b.e
k.toString
k=t.D.a(k).a
k.toString
s=k-m.a(A.w.prototype.gX.call(o)).d
r=d-s
q=c-0
p=n.a=null
switch(A.ba(m.a(A.w.prototype.gX.call(o)).a).a){case 0:if(!l){m=b.k3.a
r=m-r
s=o.id.c-m-s}p=new A.t(s,0)
n.a=new A.t(r,q)
break
case 1:if(!l){m=b.k3.b
r=m-r
s=o.id.c-m-s}p=new A.t(0,s)
n.a=new A.t(q,r)
break}return a.WM(new A.a06(n,b),p)}}
A.a06.prototype={
$1(a){return this.b.bN(a,this.a.a)},
$S:114}
A.O4.prototype={}
A.O7.prototype={
ad(a){this.tr(0)}}
A.Ht.prototype={
so9(a){if(this.qu===a)return
this.qu=a
this.a2()}}
A.Hu.prototype={
Jx(a,b){var s,r
if(b>0){s=a/b
r=B.d.b2(s)
if(Math.abs(s*b-r*b)<1e-10)return r
return B.d.ct(s)}return 0},
zf(a,b){var s,r
if(b>0){s=a/b-1
r=B.d.b2(s)
if(Math.abs(s*b-r*b)<1e-10)return Math.max(0,r)
return Math.max(0,B.d.cZ(s))}return 0},
OX(a){var s,r=this.au$,q=A.o(this).h("ap.1"),p=t.D,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s<a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).aj$}return o},
OY(a){var s,r=this.cK$,q=A.o(this).h("ap.1"),p=t.D,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s>a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).bM$}return o},
bx(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=t.p,a7=a6.a(A.w.prototype.gX.call(a4)),a8=a4.bg
a8.R8=!1
s=a6.a(A.w.prototype.gX.call(a4)).y*a4.qu
a6=a7.d
r=a6+a7.z
q=r+a7.Q
p=a7.WW(s,s)
o=a4.Jx(r,s)
n=isFinite(q)?a4.zf(q,s):a5
if(a4.au$!=null){m=a4.OX(o)
a4.FG(m,n!=null?a4.OY(n):0)}else a4.FG(0,0)
if(a4.au$==null)if(!a4.WA(o,s*o)){l=o<=0?0:a8.gpY()*s
a4.id=A.vf(a5,!1,a5,a5,l,0,0,l,a5)
a8.G9()
return}k=a4.au$
k.toString
k=k.e
k.toString
j=t.D
k=j.a(k).b
k.toString
i=k-1
h=a5
for(;i>=o;--i){g=a4.a_C(p)
if(g==null){a4.id=A.vf(a5,!1,a5,a5,0,0,0,0,i*s)
return}k=g.e
k.toString
j.a(k).a=s*i
if(h==null)h=g}if(h==null){a4.au$.h8(p)
h=a4.au$
k=h.e
k.toString
j.a(k).a=s*o}k=h.e
k.toString
k=j.a(k).b
k.toString
i=k+1
k=A.o(a4).h("ap.1")
f=n!=null
while(!0){if(!(!f||i<=n)){e=1/0
break}d=h.e
d.toString
g=k.a(d).aj$
if(g!=null){d=g.e
d.toString
d=j.a(d).b
d.toString
d=d!==i}else d=!0
if(d){g=a4.a_B(p,h)
if(g==null){e=i*s
break}}else g.h8(p)
d=g.e
d.toString
j.a(d)
c=d.b
c.toString
d.a=s*c;++i
h=g}k=a4.cK$
k.toString
k=k.e
k.toString
k=j.a(k).b
k.toString
b=s*o
a=s*(k+1)
e=Math.min(e,a8.Z4(a7,o,k,b,a))
a0=a4.fT(a7,b,a)
a1=a4.mI(a7,b,a)
a2=a6+a7.r
a3=isFinite(a2)?a4.zf(a2,s):a5
a4.id=A.vf(a1,a3!=null&&k>=a3||a6>0,a5,a5,e,a0,0,e,a5)
if(e===a)a8.R8=!0
a8.G9()}}
A.hf.prototype={$ic5:1}
A.a0a.prototype={
e6(a){}}
A.fJ.prototype={
i(a){var s=this.b,r=this.nk$?"keepAlive; ":""
return"index="+A.h(s)+"; "+r+this.ML(0)}}
A.lH.prototype={
e6(a){if(!(a.e instanceof A.fJ))a.e=new A.fJ(!1,null,null)},
hx(a){var s
this.Aq(a)
s=a.e
s.toString
t.D.a(s)
if(!s.c){t.x.a(a)
s.b=this.bg.p4}},
xs(a,b,c){this.tj(0,b,c)},
r8(a,b){var s,r,q,p=this,o=a.e
o.toString
s=t.D
s.a(o)
if(!o.c){p.KN(a,b)
o=a.e
o.toString
s.a(o).b=p.bg.p4
p.a2()}else{r=p.bb
if(r.j(0,o.b)===a)r.A(0,o.b)
q=a.e
q.toString
s.a(q).b=p.bg.p4
o=o.b
o.toString
r.l(0,o,a)}},
A(a,b){var s=b.e
s.toString
t.D.a(s)
if(!s.c){this.KP(0,b)
return}this.bb.A(0,s.b)
this.il(b)},
u8(a,b){this.Hv(new A.a07(this,a,b),t.p)},
BK(a){var s,r=this,q=a.e
q.toString
t.D.a(q)
if(q.nk$){r.A(0,a)
s=q.b
s.toString
r.bb.l(0,s,a)
a.e=q
r.Aq(a)
q.c=!0}else r.bg.Iq(a)},
am(a){var s,r,q
this.Nc(a)
for(s=this.bb,s=s.gb_(s),s=new A.dH(J.as(s.a),s.b),r=A.o(s).z[1];s.t();){q=s.a;(q==null?r.a(q):q).am(a)}},
ad(a){var s,r,q
this.Nd(0)
for(s=this.bb,s=s.gb_(s),s=new A.dH(J.as(s.a),s.b),r=A.o(s).z[1];s.t();){q=s.a;(q==null?r.a(q):q).ad(0)}},
iP(){this.KO()
var s=this.bb
s.gb_(s).Z(0,this.gIn())},
aR(a){var s
this.A1(a)
s=this.bb
s.gb_(s).Z(0,a)},
eS(a){this.A1(a)},
WA(a,b){var s
this.u8(a,null)
s=this.au$
if(s!=null){s=s.e
s.toString
t.D.a(s).a=b
return!0}this.bg.R8=!0
return!1},
a_C(a){var s,r,q,p=this,o=p.au$
o.toString
o=o.e
o.toString
s=t.D
o=s.a(o).b
o.toString
r=o-1
p.u8(r,null)
o=p.au$
o.toString
q=o.e
q.toString
q=s.a(q).b
q.toString
if(q===r){o.cg(a,!1)
return p.au$}p.bg.R8=!0
return null},
a_B(a,b){var s,r,q,p=b.e
p.toString
s=t.D
p=s.a(p).b
p.toString
r=p+1
this.u8(r,b)
p=b.e
p.toString
q=A.o(this).h("ap.1").a(p).aj$
if(q!=null){p=q.e
p.toString
p=s.a(p).b
p.toString
p=p===r}else p=!1
if(p){q.cg(a,!1)
return q}this.bg.R8=!0
return null},
FG(a,b){var s={}
s.a=a
s.b=b
this.Hv(new A.a09(s,this),t.p)},
I3(a){switch(A.ba(t.p.a(A.w.prototype.gX.call(this)).a).a){case 0:return a.k3.a
case 1:return a.k3.b}},
xl(a,b,c){var s,r,q=this.cK$,p=A.afi(a)
for(s=A.o(this).h("ap.1");q!=null;){if(this.a_p(p,q,b,c))return!0
r=q.e
r.toString
q=s.a(r).bM$}return!1},
wg(a){var s=a.e
s.toString
return t.D.a(s).a},
jO(a){var s=t.ub.a(a.e)
return(s==null?null:s.b)!=null&&!this.bb.V(0,s.b)},
cY(a,b){var s,r,q,p,o=this
if(!o.jO(a))b.zJ()
else{s=t.p
r=o.Cf(s.a(A.w.prototype.gX.call(o)))
q=a.e
q.toString
q=t.D.a(q).a
q.toString
p=q-s.a(A.w.prototype.gX.call(o)).d
switch(A.ba(s.a(A.w.prototype.gX.call(o)).a).a){case 0:b.av(0,!r?o.id.c-a.k3.a-p:p,0)
break
case 1:b.av(0,0,!r?o.id.c-a.k3.b-p:p)
break}}},
aG(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null
if(d.au$==null)return
s=t.p
switch(A.j0(s.a(A.w.prototype.gX.call(d)).a,s.a(A.w.prototype.gX.call(d)).b)){case B.x:r=b.W(0,new A.t(0,d.id.c))
q=B.S4
p=B.fc
o=!0
break
case B.at:r=b
q=B.fc
p=B.ig
o=!1
break
case B.v:r=b
q=B.ig
p=B.fc
o=!1
break
case B.ac:r=b.W(0,new A.t(d.id.c,0))
q=B.S7
p=B.ig
o=!0
break
default:o=c
r=o
p=r
q=p}n=d.au$
for(m=A.o(d).h("ap.1"),l=t.D;n!=null;){k=n.e
k.toString
k=l.a(k).a
k.toString
j=k-s.a(A.w.prototype.gX.call(d)).d
k=r.a
i=q.a
k=k+i*j+p.a*0
h=r.b
g=q.b
h=h+g*j+p.b*0
f=new A.t(k,h)
if(o){e=d.I3(n)
f=new A.t(k+i*e,h+g*e)}if(j<s.a(A.w.prototype.gX.call(d)).r&&j+d.I3(n)>0)a.eq(n,f)
k=n.e
k.toString
n=m.a(k).aj$}}}
A.a07.prototype={
$1(a){var s=this.a,r=s.bb,q=this.b,p=this.c
if(r.V(0,q)){r=r.A(0,q)
r.toString
q=r.e
q.toString
t.D.a(q)
s.il(r)
r.e=q
s.tj(0,r,p)
q.c=!1}else s.bg.Yg(q,p)},
$S:81}
A.a09.prototype={
$1(a){var s,r,q
for(s=this.a,r=this.b;s.a>0;){q=r.au$
q.toString
r.BK(q);--s.a}for(;s.b>0;){q=r.cK$
q.toString
r.BK(q);--s.b}s=r.bb
s=s.gb_(s)
q=A.o(s).h("aF<p.E>")
B.b.Z(A.ax(new A.aF(s,new A.a08(),q),!0,q.h("p.E")),r.bg.ga1m())},
$S:81}
A.a08.prototype={
$1(a){var s=a.e
s.toString
return!t.D.a(s).nk$},
$S:216}
A.xk.prototype={
am(a){var s,r,q
this.eb(a)
s=this.au$
for(r=t.D;s!=null;){s.am(a)
q=s.e
q.toString
s=r.a(q).aj$}},
ad(a){var s,r,q
this.ds(0)
s=this.au$
for(r=t.D;s!=null;){s.ad(0)
q=s.e
q.toString
s=r.a(q).aj$}}}
A.Nl.prototype={}
A.Nm.prototype={}
A.O5.prototype={
ad(a){this.tr(0)}}
A.O6.prototype={}
A.uv.prototype={
gwa(){var s=this,r=t.p
switch(A.j0(r.a(A.w.prototype.gX.call(s)).a,r.a(A.w.prototype.gX.call(s)).b)){case B.x:return s.bE.d
case B.at:return s.bE.a
case B.v:return s.bE.b
case B.ac:return s.bE.c}},
gWO(){var s=this,r=t.p
switch(A.j0(r.a(A.w.prototype.gX.call(s)).a,r.a(A.w.prototype.gX.call(s)).b)){case B.x:return s.bE.b
case B.at:return s.bE.c
case B.v:return s.bE.d
case B.ac:return s.bE.a}},
gYq(){switch(A.ba(t.p.a(A.w.prototype.gX.call(this)).a).a){case 0:var s=this.bE
return s.gb6(s)+s.gb9(s)
case 1:return this.bE.gcb()}},
e6(a){if(!(a.e instanceof A.jY))a.e=new A.jY(B.j)},
bx(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=null,a2=t.p,a3=a2.a(A.w.prototype.gX.call(a0)),a4=a0.gwa()
a0.gWO()
s=a0.bE
s.toString
a2=s.WR(A.ba(a2.a(A.w.prototype.gX.call(a0)).a))
r=a0.gYq()
if(a0.q$==null){q=a0.fT(a3,0,a2)
a0.id=A.vf(a0.mI(a3,0,a2),!1,a1,a1,a2,Math.min(q,a3.r),0,a2,a1)
return}p=a0.fT(a3,0,a4)
o=a3.f
if(o>0)o=Math.max(0,o-p)
s=a0.q$
s.toString
n=Math.max(0,a3.d-a4)
m=Math.min(0,a3.z+a4)
l=a3.r
k=a0.fT(a3,0,a4)
j=a3.Q
i=a0.mI(a3,0,a4)
h=Math.max(0,a3.w-r)
g=a3.a
f=a3.b
s.cg(new A.jX(g,f,a3.c,n,a4+a3.e,o,l-k,h,a3.x,a3.y,m,j-i),!0)
e=a0.q$.id
s=e.y
if(s!=null){a0.id=A.vf(a1,!1,a1,a1,0,0,0,0,s)
return}s=e.a
n=a4+s
m=a2+s
d=a0.fT(a3,n,m)
c=p+d
b=a0.mI(a3,0,a4)
a=a0.mI(a3,n,m)
n=e.c
k=e.d
q=Math.min(p+Math.max(n,k+d),l)
l=e.b
k=Math.min(c+k,q)
j=Math.min(a+b+e.z,j)
i=e.e
n=Math.max(c+n,p+e.r)
a0.id=A.vf(j,e.x,n,k,a2+i,q,l,m,a1)
m=a0.q$.e
m.toString
t.v.a(m)
switch(A.j0(g,f)){case B.x:a2=a0.bE
n=a2.a
s=a2.d+s
m.a=new A.t(n,a0.fT(a3,s,s+a2.b))
break
case B.at:m.a=new A.t(a0.fT(a3,0,a0.bE.a),a0.bE.b)
break
case B.v:a2=a0.bE
m.a=new A.t(a2.a,a0.fT(a3,0,a2.b))
break
case B.ac:a2=a0.bE
s=a2.c+s
m.a=new A.t(a0.fT(a3,s,s+a2.a),a0.bE.b)
break}},
xl(a,b,c){var s,r,q,p,o=this,n=o.q$
if(n!=null&&n.id.r>0){n=n.e
n.toString
t.v.a(n)
s=o.fT(t.p.a(A.w.prototype.gX.call(o)),0,o.gwa())
r=o.q$
r.toString
r=o.Xq(r)
n=n.a
q=o.q$.ga_n()
p=n!=null
if(p)a.c.push(new A.pr(new A.t(-n.a,-n.b)))
q.$3$crossAxisPosition$mainAxisPosition(a,b-r,c-s)
if(p)a.rq()}return!1},
Xq(a){var s=this,r=t.p
switch(A.j0(r.a(A.w.prototype.gX.call(s)).a,r.a(A.w.prototype.gX.call(s)).b)){case B.x:case B.v:return s.bE.a
case B.ac:case B.at:return s.bE.b}},
wg(a){return this.gwa()},
cY(a,b){var s=a.e
s.toString
s=t.v.a(s).a
b.av(0,s.a,s.b)},
aG(a,b){var s,r=this.q$
if(r!=null&&r.id.w){s=r.e
s.toString
a.eq(r,b.W(0,t.v.a(s).a))}}}
A.Nj.prototype={
am(a){var s
this.eb(a)
s=this.q$
if(s!=null)s.am(a)},
ad(a){var s
this.ds(0)
s=this.q$
if(s!=null)s.ad(0)}}
A.a_F.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return b instanceof A.a_F&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gu(a){var s=this
return A.T(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this
return"RelativeRect.fromLTRB("+B.d.M(s.a,1)+", "+B.d.M(s.b,1)+", "+B.d.M(s.c,1)+", "+B.d.M(s.d,1)+")"}}
A.dw.prototype={
gxy(){var s=this
return s.e!=null||s.f!=null||s.r!=null||s.w!=null||s.x!=null||s.y!=null},
i(a){var s=this,r=A.a([],t.s),q=s.e
if(q!=null)r.push("top="+A.fT(q))
q=s.f
if(q!=null)r.push("right="+A.fT(q))
q=s.r
if(q!=null)r.push("bottom="+A.fT(q))
q=s.w
if(q!=null)r.push("left="+A.fT(q))
q=s.x
if(q!=null)r.push("width="+A.fT(q))
q=s.y
if(q!=null)r.push("height="+A.fT(q))
if(r.length===0)r.push("not positioned")
r.push(s.os(0))
return B.b.bk(r,"; ")}}
A.vn.prototype={
D(){return"StackFit."+this.b}}
A.uw.prototype={
e6(a){if(!(a.e instanceof A.dw))a.e=new A.dw(null,null,B.j)},
Vx(){var s=this
if(s.q!=null)return
s.q=s.H.Y(s.aq)},
sdV(a){var s=this
if(s.H.k(0,a))return
s.H=a
s.q=null
s.a2()},
sbA(a){var s=this
if(s.aq==a)return
s.aq=a
s.q=null
s.a2()},
eg(a){return this.G4(a)},
bV(a){return this.Ef(a,A.abv())},
Ef(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.Vx()
if(e.d1$===0){s=a.a
r=a.b
q=A.E(1/0,s,r)
p=a.c
o=a.d
n=A.E(1/0,p,o)
return isFinite(q)&&isFinite(n)?new A.Z(A.E(1/0,s,r),A.E(1/0,p,o)):new A.Z(A.E(0,s,r),A.E(0,p,o))}m=a.a
l=a.c
switch(e.ae.a){case 0:k=new A.aJ(0,a.b,0,a.d)
break
case 1:k=A.ql(new A.Z(A.E(1/0,m,a.b),A.E(1/0,l,a.d)))
break
case 2:k=a
break
default:k=null}j=e.au$
for(s=t.B,i=l,h=m,g=!1;j!=null;){r=j.e
r.toString
s.a(r)
if(!r.gxy()){f=b.$2(j,k)
h=Math.max(h,f.a)
i=Math.max(i,f.b)
g=!0}j=r.aj$}return g?new A.Z(h,i):new A.Z(A.E(1/0,m,a.b),A.E(1/0,l,a.d))},
bx(){var s,r,q,p,o,n,m,l=this,k=t.k.a(A.w.prototype.gX.call(l))
l.K=!1
l.k3=l.Ef(k,A.abw())
s=l.au$
for(r=t.B,q=t.uu;s!=null;){p=s.e
p.toString
r.a(p)
if(!p.gxy()){o=l.q
o.toString
n=l.k3
n.toString
m=s.k3
m.toString
p.a=o.kF(q.a(n.a8(0,m)))}else{o=l.k3
o.toString
n=l.q
n.toString
l.K=A.agU(s,p,o,n)||l.K}s=p.aj$}},
cv(a,b){return this.wt(a,b)},
rl(a,b){this.mW(a,b)},
aG(a,b){var s,r=this,q=r.aV,p=q!==B.J&&r.K,o=r.bw
if(p){p=r.cx
p===$&&A.b()
s=r.k3
o.saD(0,a.jR(p,b,new A.y(0,0,0+s.a,0+s.b),r.gyi(),q,o.a))}else{o.saD(0,null)
r.mW(a,b)}},
m(){this.bw.saD(0,null)
this.ht()},
ii(a){var s
switch(this.aV.a){case 0:return null
case 1:case 2:case 3:if(this.K){s=this.k3
s=new A.y(0,0,0+s.a,0+s.b)}else s=null
return s}}}
A.Nn.prototype={
am(a){var s,r,q
this.eb(a)
s=this.au$
for(r=t.B;s!=null;){s.am(a)
q=s.e
q.toString
s=r.a(q).aj$}},
ad(a){var s,r,q
this.ds(0)
s=this.au$
for(r=t.B;s!=null;){s.ad(0)
q=s.e
q.toString
s=r.a(q).aj$}}}
A.No.prototype={}
A.Jb.prototype={
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return b instanceof A.Jb&&b.a.k(0,this.a)&&b.b===this.b},
gu(a){return A.T(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return this.a.i(0)+" at "+A.fT(this.b)+"x"}}
A.ux.prototype={
swi(a){var s,r,q,p,o=this
if(o.k1.k(0,a))return
s=o.k1
o.k1=a
r=s.b
r=A.tp(r,r,1)
q=o.k1.b
if(!r.k(0,A.tp(q,q,1))){r=o.ES()
q=o.ch
p=q.a
p.toString
J.alM(p)
q.saD(0,r)
o.af()}o.a2()},
ES(){var s,r=this.k1.b
r=A.tp(r,r,1)
this.k4=r
s=A.ahz(r)
s.am(this)
return s},
nQ(){},
bx(){var s,r=this.k1.a
this.id=r
s=this.q$
if(s!=null)s.h8(A.ql(r))},
bN(a,b){var s=this.q$
if(s!=null)s.bN(A.afi(a),b)
a.E(0,new A.ha(this,t.Cq))
return!0},
a_s(a){var s,r=A.a([],t.f1),q=new A.bc(new Float64Array(16))
q.cR()
s=new A.fY(r,A.a([q],t.hZ),A.a([],t.pw))
this.bN(s,a)
return s},
gdj(){return!0},
aG(a,b){var s=this.q$
if(s!=null)a.eq(s,b)},
cY(a,b){var s=this.k4
s.toString
b.cn(0,s)
this.M4(a,b)},
XK(){var s,r,q
try{q=$.av()
s=q.Ym()
r=this.ch.a.Xa(s)
this.Wg()
q.a1s(r)
r.m()}finally{}},
Wg(){var s,r,q,p,o,n,m,l,k,j=null,i=this.ghe(),h=i.gaU(),g=this.k2
g.gjU()
s=i.gaU()
g.gjU()
g=this.ch
r=t.g9
q=g.a.GG(0,new A.t(h.a,0),r)
switch(A.ko().a){case 0:p=g.a.GG(0,new A.t(s.a,i.d-1-0),r)
break
case 1:case 2:case 3:case 4:case 5:p=j
break
default:p=j}h=q==null
if(h&&p==null)return
if(!h&&p!=null){h=q.f
g=q.r
s=q.e
r=q.w
A.aho(new A.hD(p.a,p.b,p.c,p.d,s,h,g,r))
return}o=A.ko()===B.ay
n=h?p:q
h=n.f
g=n.r
s=n.e
r=n.w
m=o?n.a:j
l=o?n.b:j
k=o?n.c:j
A.aho(new A.hD(m,l,k,o?n.d:j,s,h,g,r))},
ghe(){var s=this.id.a6(0,this.k1.b)
return new A.y(0,0,0+s.a,0+s.b)},
gj0(){var s,r=this.k4
r.toString
s=this.id
return A.fz(r,new A.y(0,0,0+s.a,0+s.b))}}
A.Nq.prototype={
am(a){var s
this.eb(a)
s=this.q$
if(s!=null)s.am(a)},
ad(a){var s
this.ds(0)
s=this.q$
if(s!=null)s.ad(0)}}
A.zu.prototype={
D(){return"CacheExtentStyle."+this.b}}
A.oc.prototype={
i(a){return"RevealedOffset(offset: "+A.h(this.a)+", rect: "+this.b.i(0)+")"}}
A.o9.prototype={
ei(a){this.fG(a)
a.Fi(B.B2)},
eS(a){var s=this.gFC()
new A.aF(s,new A.a0e(),A.aI(s).h("aF<1>")).Z(0,a)},
sfa(a){if(a===this.K)return
this.K=a
this.a2()},
sYp(a){if(a===this.q)return
this.q=a
this.a2()},
shO(a,b){var s=this,r=s.H
if(b===r)return
if(s.b!=null)r.F(0,s.gr3())
s.H=b
if(s.b!=null)b.S(0,s.gr3())
s.a2()},
sXd(a){if(a===this.aq)return
this.aq=a
this.a2()},
sXe(a){if(a===this.aV)return
this.aV=a
this.a2()},
am(a){this.Ne(a)
this.H.S(0,this.gr3())},
ad(a){this.H.F(0,this.gr3())
this.Nf(0)},
gdj(){return!0},
HK(a,b,c,d,e,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.atA(h.H.k4,e),f=a0+a2
for(s=e.a,r=t.v,q=a0,p=0;c!=null;){o=a5<=0?0:a5
n=Math.max(b,-o)
m=b-n
c.cg(new A.jX(h.K,e,g,o,p,f-q,Math.max(0,a4-q+a0),d,h.q,a1,n,Math.max(0,a3+m)),!0)
l=c.id
k=l.y
if(k!=null)return k
j=q+l.b
k=l.w||a5>0
i=c.e
if(k){i.toString
r.a(i).a=h.FI(c,j,e)}else{i.toString
r.a(i).a=h.FI(c,-a5+a0,e)}f=Math.max(j+l.c,f)
k=l.a
a5-=k
p+=k
q+=l.d
i=l.z
if(i!==0){a3-=i-m
b=Math.min(n+i,0)}switch(s){case 0:i=h.io
i===$&&A.b()
h.io=i+k
break
case 1:i=h.im
i===$&&A.b()
h.im=i-k
break}if(l.x)h.fi=!0
c=a.$1(c)}return 0},
ii(a){var s,r,q,p,o,n
switch(this.bw.a){case 0:return null
case 1:case 2:case 3:break}s=this.k3
r=0+s.a
q=0+s.b
s=t.p
if(s.a(A.w.prototype.gX.call(a)).f===0||!isFinite(s.a(A.w.prototype.gX.call(a)).y))return new A.y(0,0,r,q)
p=s.a(A.w.prototype.gX.call(a)).y-s.a(A.w.prototype.gX.call(a)).r+s.a(A.w.prototype.gX.call(a)).f
switch(A.j0(this.K,s.a(A.w.prototype.gX.call(a)).b)){case B.v:o=0+p
n=0
break
case B.x:q-=p
n=0
o=0
break
case B.at:n=0+p
o=0
break
case B.ac:r-=p
n=0
o=0
break
default:n=0
o=0}return new A.y(n,o,r,q)},
wy(a){var s,r=this,q=r.ae
if(q==null){q=r.k3
return new A.y(0,0,0+q.a,0+q.b)}switch(A.ba(r.K).a){case 1:s=r.k3
return new A.y(0,0-q,0+s.a,0+s.b+q)
case 0:s=r.k3
return new A.y(0-q,0,0+s.a+q,0+s.b)}},
aG(a,b){var s,r,q,p=this
if(p.au$==null)return
s=p.fi&&p.bw!==B.J
r=p.c1
if(s){s=p.cx
s===$&&A.b()
q=p.k3
r.saD(0,a.jR(s,b,new A.y(0,0,0+q.a,0+q.b),p.gTX(),p.bw,r.a))}else{r.saD(0,null)
p.Dg(a,b)}},
m(){this.c1.saD(0,null)
this.ht()},
Dg(a,b){var s,r,q,p,o,n,m,l
for(s=this.gFC(),r=s.length,q=t.v,p=b.a,o=b.b,n=0;n<s.length;s.length===r||(0,A.R)(s),++n){m=s[n]
if(m.id.w){l=m.e
l.toString
l=q.a(l).a
a.eq(m,new A.t(p+l.a,o+l.b))}}},
cv(a,b){var s,r,q,p,o,n,m,l,k={}
k.a=k.b=null
switch(A.ba(this.K).a){case 1:k.b=b.b
k.a=b.a
break
case 0:k.b=b.a
k.a=b.b
break}s=new A.os(a.a,a.b,a.c)
for(r=this.gXr(),q=r.length,p=t.v,o=0;o<r.length;r.length===q||(0,A.R)(r),++o){n=r[o]
if(!n.id.w)continue
m=new A.bc(new Float64Array(16))
m.cR()
l=n.e
l.toString
l=p.a(l).a
m.av(0,l.a,l.b)
if(a.WN(new A.a0d(k,this,n,s),m))return!0}return!1},
jV(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=a instanceof A.ca
for(s=t.d,r=c,q=a,p=0;o=q.c,o!==d;q=o){o.toString
s.a(o)
if(q instanceof A.C)r=q
if(o instanceof A.ca){n=o.wg(q)
n.toString
p+=n}else{p=0
b=!1}}if(r!=null){s=r.c
s.toString
t.q0.a(s)
m=t.p.a(A.w.prototype.gX.call(s)).b
switch(A.ba(d.K).a){case 0:l=r.k3.a
break
case 1:l=r.k3.b
break
default:l=c}if(a1==null)a1=a.ghe()
k=A.fz(a.bt(0,r),a1)}else{if(b){t.q0.a(a)
s=t.p
m=s.a(A.w.prototype.gX.call(a)).b
l=a.id.a
if(a1==null)switch(A.ba(d.K).a){case 0:a1=new A.y(0,0,0+l,0+s.a(A.w.prototype.gX.call(a)).w)
break
case 1:a1=new A.y(0,0,0+s.a(A.w.prototype.gX.call(a)).w,0+a.id.a)
break}}else{s=d.H.at
s.toString
a1.toString
return new A.oc(s,a1)}k=a1}t.q0.a(q)
switch(A.j0(d.K,m)){case B.x:s=k.d
p+=l-s
j=s-k.b
break
case B.at:s=k.a
p+=s
j=k.c-s
break
case B.v:s=k.b
p+=s
j=k.d-s
break
case B.ac:s=k.c
p+=l-s
j=s-k.a
break
default:j=c}q.id.toString
p=d.JW(q,p)
i=A.fz(a.bt(0,d),a1)
h=d.a0n(q)
switch(t.p.a(A.w.prototype.gX.call(q)).b.a){case 0:p-=h
break
case 1:switch(A.ba(d.K).a){case 1:p-=i.d-i.b
break
case 0:p-=i.c-i.a
break}break}s=d.K
switch(A.ba(s).a){case 0:g=d.k3.a-h
break
case 1:g=d.k3.b-h
break
default:g=c}f=p-(g-j)*a0
o=d.H.at
o.toString
e=o-f
switch(s.a){case 2:i=i.av(0,0,e)
break
case 1:i=i.av(0,e,0)
break
case 0:i=i.av(0,0,-e)
break
case 3:i=i.av(0,-e,0)
break}return new A.oc(f,i)},
FI(a,b,c){switch(A.j0(this.K,c)){case B.x:return new A.t(0,this.k3.b-(b+a.id.c))
case B.at:return new A.t(b,0)
case B.v:return new A.t(0,b)
case B.ac:return new A.t(this.k3.a-(b+a.id.c),0)}},
e7(a,b,c,d){var s=this
if(!s.H.r.gkE())return s.ov(a,b,c,d)
s.ov(a,null,c,A.agW(a,b,c,s.H,d,s))},
lK(){return this.e7(B.aJ,null,B.t,null)},
k7(a,b){return this.e7(B.aJ,a,B.t,b)},
$iGZ:1}
A.a0e.prototype={
$1(a){var s=a.id
return s.w||s.z>0},
$S:218}
A.a0d.prototype={
$1(a){var s=this,r=s.c,q=s.a,p=s.b.XM(r,q.b)
return r.Ha(s.d,q.a,p)},
$S:114}
A.uy.prototype={
e6(a){if(!(a.e instanceof A.iE))a.e=new A.iE(null,null,B.j)},
sWT(a){if(a===this.qy)return
this.qy=a
this.a2()},
saU(a){if(a==this.dE)return
this.dE=a
this.a2()},
gj4(){return!0},
bV(a){return new A.Z(A.E(1/0,a.a,a.b),A.E(1/0,a.c,a.d))},
bx(){var s,r,q,p,o,n,m,l,k,j=this
switch(A.ba(j.K).a){case 1:j.H.mE(j.k3.b)
break
case 0:j.H.mE(j.k3.a)
break}if(j.dE==null){j.io=j.im=0
j.fi=!1
j.H.mB(0,0)
return}switch(A.ba(j.K).a){case 1:s=j.k3
r=s.b
q=s.a
break
case 0:s=j.k3
r=s.a
q=s.b
break
default:r=null
q=null}s=0
do{p=j.H.at
p.toString
o=j.OJ(r,q,p+0)
if(o!==0){p=j.H
n=p.at
n.toString
p.at=n+o
p.ch=!0}else{p=j.H
n=j.im
n===$&&A.b()
m=j.qy
n=Math.min(0,n+r*m)
l=j.io
l===$&&A.b()
if(p.mB(n,Math.max(0,l-r*(1-m))))break}k=s+1
if(k<10){s=k
continue}else break}while(!0)},
OJ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.io=e.im=0
e.fi=!1
s=a*e.qy-c
r=A.E(s,0,a)
q=a-s
p=A.E(q,0,a)
switch(e.aV.a){case 0:e.ae=e.aq
break
case 1:e.ae=a*e.aq
break}o=e.ae
o.toString
n=a+2*o
m=s+o
l=A.E(m,0,n)
k=A.E(n-m,0,n)
j=e.dE.e
j.toString
i=A.o(e).h("ap.1").a(j).bM$
j=i==null
if(!j){h=Math.max(a,s)
g=e.HK(e.gXo(),A.E(q,-o,0),i,b,B.nl,p,a,0,l,r,h-a)
if(g!==0)return-g}q=e.dE
o=-s
h=Math.max(0,o)
o=j?Math.min(0,o):0
j=s>=a?s:r
f=e.ae
f.toString
return e.HK(e.gXm(),A.E(s,-f,0),q,b,B.nk,j,a,o,k,p,h)},
JW(a,b){var s,r,q,p,o=this
switch(t.p.a(A.w.prototype.gX.call(a)).b.a){case 0:s=o.dE
for(r=A.o(o).h("ap.1"),q=0;s!==a;){q+=s.id.a
p=s.e
p.toString
s=r.a(p).aj$}return q+b
case 1:r=o.dE.e
r.toString
p=A.o(o).h("ap.1")
s=p.a(r).bM$
for(q=0;s!==a;){q-=s.id.a
r=s.e
r.toString
s=p.a(r).bM$}return q-b}},
a0n(a){var s,r,q,p=this
switch(t.p.a(A.w.prototype.gX.call(a)).b.a){case 0:s=p.dE
for(r=A.o(p).h("ap.1");s!==a;){s.id.toString
q=s.e
q.toString
s=r.a(q).aj$}return 0
case 1:r=p.dE.e
r.toString
q=A.o(p).h("ap.1")
s=q.a(r).bM$
for(;s!==a;){s.id.toString
r=s.e
r.toString
s=q.a(r).bM$}return 0}},
cY(a,b){var s=a.e
s.toString
s=t.v.a(s).a
b.av(0,s.a,s.b)},
XM(a,b){var s,r=a.e
r.toString
t.v.a(r)
s=t.p
switch(A.j0(s.a(A.w.prototype.gX.call(a)).a,s.a(A.w.prototype.gX.call(a)).b)){case B.v:return b-r.a.b
case B.at:return b-r.a.a
case B.x:return a.id.c-(b-r.a.b)
case B.ac:return a.id.c-(b-r.a.a)}},
gFC(){var s,r,q=this,p=A.a([],t.jT),o=q.au$
if(o==null)return p
for(s=A.o(q).h("ap.1");o!=q.dE;){o.toString
p.push(o)
r=o.e
r.toString
o=s.a(r).aj$}o=q.cK$
for(;!0;){o.toString
p.push(o)
if(o===q.dE)return p
r=o.e
r.toString
o=s.a(r).bM$}},
gXr(){var s,r,q,p=this,o=A.a([],t.jT)
if(p.au$==null)return o
s=p.dE
for(r=A.o(p).h("ap.1");s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).aj$}q=p.dE.e
q.toString
s=r.a(q).bM$
for(;s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).bM$}return o}}
A.hR.prototype={
am(a){var s,r,q
this.eb(a)
s=this.au$
for(r=A.o(this).h("hR.0");s!=null;){s.am(a)
q=s.e
q.toString
s=r.a(q).aj$}},
ad(a){var s,r,q
this.ds(0)
s=this.au$
for(r=A.o(this).h("hR.0");s!=null;){s.ad(0)
q=s.e
q.toString
s=r.a(q).aj$}}}
A.oi.prototype={
D(){return"ScrollDirection."+this.b}}
A.f4.prototype={
nK(a,b,c,d){var s=d.a===B.t.a
if(s){this.dk(b)
return A.bW(null,t.H)}else return this.fQ(b,c,d)},
i(a){var s=this,r=A.a([],t.s)
s.MF(r)
r.push(A.A(s.w).i(0))
r.push(s.r.i(0))
r.push(A.h(s.fr))
r.push(s.k4.i(0))
return"<optimized out>#"+A.bB(s)+"("+B.b.bk(r,", ")+")"},
c6(a){var s=this.at
if(s!=null)a.push("offset: "+B.d.M(s,1))}}
A.pb.prototype={}
A.jS.prototype={
D(){return"SchedulerPhase."+this.b}}
A.Zz.prototype={}
A.dd.prototype={
WL(a){var s=this.f$
s.push(a)
if(s.length===1){s=$.aE()
s.ay=this.gQ8()
s.ch=$.ai}},
Iv(a){var s=this.f$
B.b.A(s,a)
if(s.length===0){s=$.aE()
s.ay=null
s.ch=$.ai}},
Q9(a){var s,r,q,p,o,n,m,l,k=this.f$,j=A.ax(k,!0,t.wX)
for(p=j.length,o=0;o<p;++o){s=j[o]
try{if(B.b.B(k,s))s.$1(a)}catch(n){r=A.au(n)
q=A.aG(n)
m=A.bj("while executing callbacks for FrameTiming")
l=$.fb()
if(l!=null)l.$1(new A.bt(r,q,"Flutter framework",m,null,!1))}}},
qG(a){this.r$=a
switch(a.a){case 0:case 1:this.E0(!0)
break
case 2:case 3:this.E0(!1)
break}},
BZ(){if(this.y$)return
this.y$=!0
A.ch(B.t,this.gUS())},
UT(){this.y$=!1
if(this.Zz())this.BZ()},
Zz(){var s,r,q,p,o,n,m=this,l="No element",k=m.x$,j=k.c===0
if(j||m.b>0)return!1
if(j)A.a_(A.aa(l))
s=k.oG(0)
j=s.b
if(m.w$.$2$priority$scheduler(j,m)){try{if(k.c===0)A.a_(A.aa(l));++k.d
k.oG(0)
p=k.c-1
o=k.oG(p)
k.b[p]=null
k.c=p
if(p>0)k.ON(o,0)
s.a2T()}catch(n){r=A.au(n)
q=A.aG(n)
j=A.bj("during a task callback")
A.dr(new A.bt(r,q,"scheduler library",j,null,!1))}return k.c!==0}return!1},
oj(a,b){var s,r=this
r.hn()
s=++r.z$
r.Q$.l(0,s,new A.pb(a))
return r.z$},
t0(a){return this.oj(a,!1)},
gGt(){var s=this
if(s.ay$==null){if(s.CW$===B.cD)s.hn()
s.ay$=new A.bg(new A.aq($.ai,t.U),t.V)
s.ax$.push(new A.a13(s))}return s.ay$.a},
gGR(){return this.cx$},
E0(a){if(this.cx$===a)return
this.cx$=a
if(a)this.hn()},
Gu(){var s=$.aE()
if(s.w==null){s.w=this.gRc()
s.x=$.ai}if(s.y==null){s.y=this.gRz()
s.z=$.ai}},
wU(){switch(this.CW$.a){case 0:case 4:this.hn()
return
case 1:case 2:case 3:return}},
hn(){var s,r=this
if(!r.ch$)s=!(A.dd.prototype.gGR.call(r)&&r.c2$)
else s=!0
if(s)return
r.Gu()
$.aE().hn()
r.ch$=!0},
JR(){if(this.ch$)return
this.Gu()
$.aE().hn()
this.ch$=!0},
t1(){var s,r,q=this
if(q.cy$||q.CW$!==B.cD)return
q.cy$=!0
s=new A.IS(null,0,A.a([],t.vS))
s.oq(0,"Warm-up frame")
r=q.ch$
A.ch(B.t,new A.a15(q))
A.ch(B.t,new A.a16(q,r))
q.a0g(new A.a17(q,s))},
a1z(){var s=this
s.dx$=s.AR(s.dy$)
s.db$=null},
AR(a){var s=this.db$,r=s==null?B.t:new A.aT(a.a-s.a)
return A.c2(B.d.b2(r.a/$.aj_)+this.dx$.a,0)},
Rd(a){if(this.cy$){this.go$=!0
return}this.GV(a)},
RA(){var s=this
if(s.go$){s.go$=!1
s.ax$.push(new A.a12(s))
return}s.GX()},
GV(a){var s,r,q=this,p=q.id$,o=p==null
if(!o)p.oq(0,"Frame")
if(q.db$==null)q.db$=a
r=a==null
q.fr$=q.AR(r?q.dy$:a)
if(!r)q.dy$=a
q.ch$=!1
try{if(!o)p.oq(0,"Animate")
q.CW$=B.SG
s=q.Q$
q.Q$=A.z(t.S,t.b1)
J.mI(s,new A.a14(q))
q.as$.U(0)}finally{q.CW$=B.SH}},
a1x(a){var s=this,r=s.k1$,q=r==null
if(!q&&r!==a)return null
if(r===a)++s.k2$
else if(q){s.k1$=a
s.k2$=1}return new A.Zz(s.gPV())},
PW(){if(--this.k2$===0){this.k1$=null
$.aE()}},
GX(){var s,r,q,p,o,n,m,l=this,k=l.id$,j=k==null
if(!j)k.qC(0)
try{l.CW$=B.AL
for(p=l.at$,o=p.length,n=0;n<p.length;p.length===o||(0,A.R)(p),++n){s=p[n]
m=l.fr$
m.toString
l.CM(s,m)}l.CW$=B.SI
p=l.ax$
r=A.ax(p,!0,t.qP)
B.b.U(p)
for(p=r,o=p.length,n=0;n<p.length;p.length===o||(0,A.R)(p),++n){q=p[n]
m=l.fr$
m.toString
l.CM(q,m)}}finally{l.CW$=B.cD
if(!j)k.qC(0)
l.fr$=null}},
CN(a,b,c){var s,r,q,p
try{a.$1(b)}catch(q){s=A.au(q)
r=A.aG(q)
p=A.bj("during a scheduler callback")
A.dr(new A.bt(s,r,"scheduler library",p,null,!1))}},
CM(a,b){return this.CN(a,b,null)}}
A.a13.prototype={
$1(a){var s=this.a
s.ay$.fc(0)
s.ay$=null},
$S:2}
A.a15.prototype={
$0(){this.a.GV(null)},
$S:0}
A.a16.prototype={
$0(){var s=this.a
s.GX()
s.a1z()
s.cy$=!1
if(this.b)s.hn()},
$S:0}
A.a17.prototype={
$0(){var s=0,r=A.a8(t.H),q=this
var $async$$0=A.a9(function(a,b){if(a===1)return A.a5(b,r)
while(true)switch(s){case 0:s=2
return A.an(q.a.gGt(),$async$$0)
case 2:q.b.qC(0)
return A.a6(null,r)}})
return A.a7($async$$0,r)},
$S:55}
A.a12.prototype={
$1(a){var s=this.a
s.ch$=!1
s.hn()},
$S:2}
A.a14.prototype={
$2(a,b){var s,r,q=this.a
if(!q.as$.B(0,a)){s=b.a
r=q.fr$
r.toString
q.CN(s,r,b.b)}},
$S:220}
A.oK.prototype={
sxS(a,b){var s=this
if(b===s.b)return
s.b=b
if(b)s.yT()
else if(s.a!=null&&s.e==null)s.e=$.bH.oj(s.gvF(),!1)},
ga_W(){if(this.a==null)return!1
if(this.b)return!1
var s=$.bH
s.toString
if(A.dd.prototype.gGR.call(s)&&s.c2$)return!0
if($.bH.CW$!==B.cD)return!0
return!1},
lN(a){var s,r,q=this
q.a=new A.m7(new A.bg(new A.aq($.ai,t.U),t.V))
if(!q.b)s=q.e==null
else s=!1
if(s)q.e=$.bH.oj(q.gvF(),!1)
s=$.bH
r=s.CW$.a
if(r>0&&r<4){s=s.fr$
s.toString
q.c=s}s=q.a
s.toString
return s},
lO(a,b){var s=this,r=s.a
if(r==null)return
s.c=s.a=null
s.yT()
if(b)r.Ba(s)
else r.Ew()},
fE(a){return this.lO(a,!1)},
VN(a){var s,r=this
r.e=null
s=r.c
if(s==null)s=r.c=a
r.d.$1(new A.aT(a.a-s.a))
if(!r.b&&r.a!=null&&r.e==null)r.e=$.bH.oj(r.gvF(),!0)},
yT(){var s,r=this.e
if(r!=null){s=$.bH
s.Q$.A(0,r)
s.as$.E(0,r)
this.e=null}},
m(){var s=this,r=s.a
if(r!=null){s.a=null
s.yT()
r.Ba(s)}},
a1S(a,b){var s=""+"Ticker()"
return s.charCodeAt(0)==0?s:s},
i(a){return this.a1S(a,!1)}}
A.m7.prototype={
Ew(){this.c=!0
this.a.fc(0)
var s=this.b
if(s!=null)s.fc(0)},
Ba(a){var s
this.c=!1
s=this.b
if(s!=null)s.jm(new A.vM(a))},
J8(a){var s,r,q=this,p=new A.a53(a)
if(q.b==null){s=q.b=new A.bg(new A.aq($.ai,t.U),t.V)
r=q.c
if(r!=null)if(r)s.fc(0)
else s.jm(B.Yj)}q.b.a.eR(p,p,t.H)},
kH(a,b){return this.a.a.kH(a,b)},
ie(a){return this.kH(a,null)},
eR(a,b,c){return this.a.a.eR(a,b,c)},
by(a,b){return this.eR(a,null,b)},
hW(a){return this.a.a.hW(a)},
i(a){var s=A.bB(this),r=this.c
if(r==null)r="active"
else r=r?"complete":"canceled"
return"<optimized out>#"+s+"("+r+")"},
$iak:1}
A.a53.prototype={
$1(a){this.a.$0()},
$S:17}
A.vM.prototype={
i(a){var s=this.a
if(s!=null)return"This ticker was canceled: "+s.i(0)
return'The ticker was canceled before the "orCancel" property was first used.'},
$idg:1}
A.a1y.prototype={}
A.v2.prototype={
i(a){return"SemanticsTag("+this.a+")"}}
A.ck.prototype={
W(a,b){var s,r,q,p,o,n,m,l=this.a,k=l.length
if(k===0)return b
s=b.a
if(s.length===0)return this
r=A.ax(this.b,!0,t.lS)
q=b.b
p=q.length
if(p!==0)for(o=0;o<q.length;q.length===p||(0,A.R)(q),++o){n=q[o]
m=n.a
r.push(n.FQ(new A.et(m.a+k,m.b+k)))}return new A.ck(l+s,r)},
k(a,b){if(b==null)return!1
return J.S(b)===A.A(this)&&b instanceof A.ck&&b.a===this.a&&A.cF(b.b,this.b)},
gu(a){return A.T(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"AttributedString('"+this.a+"', attributes: "+A.h(this.b)+")"}}
A.I0.prototype={
bP(){return"SemanticsData"},
k(a,b){var s=this
if(b==null)return!1
return b instanceof A.I0&&b.a===s.a&&b.b===s.b&&b.c.k(0,s.c)&&b.d.k(0,s.d)&&b.e.k(0,s.e)&&b.f.k(0,s.f)&&b.r.k(0,s.r)&&b.w===s.w&&b.x==s.x&&b.cx.k(0,s.cx)&&A.aeu(b.cy,s.cy)&&b.Q==s.Q&&b.as==s.as&&b.at==s.at&&b.ax==s.ax&&J.f(b.db,s.db)&&b.dx===s.dx&&b.dy===s.dy&&A.aqm(b.fr,s.fr)},
gu(a){var s=this,r=A.cS(s.fr)
return A.T(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.cx,s.cy,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,A.T(s.CW,s.db,s.dx,s.dy,r,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a))}}
A.NM.prototype={}
A.I2.prototype={
bP(){return"SemanticsProperties"}}
A.bN.prototype={
sbh(a,b){var s
if(!A.aoR(this.r,b)){s=A.acY(b)
this.r=s?null:b
this.hw()}},
saK(a,b){if(!this.w.k(0,b)){this.w=b
this.hw()}},
sHB(a){if(this.as===a)return
this.as=a
this.hw()},
UA(a){var s,r,q,p,o,n,m,l=this,k=l.ax
if(k!=null)for(s=k.length,r=0;r<s;++r)k[r].ch=!0
for(k=a.length,r=0;r<k;++r)a[r].ch=!1
k=l.ax
if(k!=null)for(s=k.length,q=t.aa,p=!1,r=0;r<k.length;k.length===s||(0,A.R)(k),++r){o=k[r]
if(o.ch){n=J.de(o)
if(q.a(A.F.prototype.gaW.call(n,o))===l){o.c=null
if(l.b!=null)o.ad(0)}p=!0}}else p=!1
for(k=a.length,s=t.aa,r=0;r<a.length;a.length===k||(0,A.R)(a),++r){o=a[r]
q=J.de(o)
if(s.a(A.F.prototype.gaW.call(q,o))!==l){if(s.a(A.F.prototype.gaW.call(q,o))!=null){q=s.a(A.F.prototype.gaW.call(q,o))
if(q!=null){o.c=null
if(q.b!=null)o.ad(0)}}o.c=l
q=l.b
if(q!=null)o.am(q)
q=o.a
n=l.a
if(q<=n){o.a=n+1
o.iP()}p=!0}}if(!p&&l.ax!=null)for(k=l.ax,s=k.length,m=0;m<s;++m)if(k[m].e!==a[m].e){p=!0
break}l.ax=a
if(p)l.hw()},
ga_d(){var s=this.ax
s=s==null?null:s.length!==0
return s===!0},
vT(a){var s,r,q,p=this.ax
if(p!=null)for(s=p.length,r=0;r<p.length;p.length===s||(0,A.R)(p),++r){q=p[r]
if(!a.$1(q)||!q.vT(a))return!1}return!0},
iP(){var s=this.ax
if(s!=null)B.b.Z(s,this.gIn())},
am(a){var s,r,q,p=this
p.tf(a)
for(s=a.c;s.V(0,p.e);)p.e=$.a1P=($.a1P+1)%65535
s.l(0,p.e,p)
a.d.A(0,p)
if(p.CW){p.CW=!1
p.hw()}s=p.ax
if(s!=null)for(r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q)s[q].am(a)},
ad(a){var s,r,q,p,o,n=this,m=t.nU
m.a(A.F.prototype.gbm.call(n)).c.A(0,n.e)
m.a(A.F.prototype.gbm.call(n)).d.E(0,n)
n.ds(0)
m=n.ax
if(m!=null)for(s=m.length,r=t.aa,q=0;q<m.length;m.length===s||(0,A.R)(m),++q){p=m[q]
o=J.de(p)
if(r.a(A.F.prototype.gaW.call(o,p))===n)o.ad(p)}n.hw()},
hw(){var s=this
if(s.CW)return
s.CW=!0
if(s.b!=null)t.nU.a(A.F.prototype.gbm.call(s)).b.E(0,s)},
iU(a,b,c){var s,r=this
if(c==null)c=$.ac_()
if(r.fr.k(0,c.p4))if(r.id.k(0,c.ry))if(r.k2===c.x2)if(r.k3===c.xr)if(r.fx.k(0,c.R8))if(r.fy.k(0,c.RG))if(r.go.k(0,c.rx))if(r.k1===c.to)if(r.dy===c.aS)if(r.ok==c.y1)if(r.p1==c.id)if(r.RG==c.ak)if(r.rx==c.ap)if(r.ry==c.ah)if(r.db===c.f)if(r.Q==c.k1)s=r.at!==c.p2
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
if(s)r.hw()
r.fr=c.p4
r.fx=c.R8
r.fy=c.RG
r.go=c.rx
r.id=c.ry
r.k1=c.to
r.k4=c.x1
r.k2=c.x2
r.k3=c.xr
r.dy=c.aS
r.ok=c.y1
r.p1=c.id
r.cx=A.nI(c.e,t.nS,t.BT)
r.cy=A.nI(c.p3,t.zN,t.M)
r.db=c.f
r.p2=c.y2
r.RG=c.ak
r.rx=c.ap
r.ry=c.ah
r.at=c.p2
r.p4=c.k2
r.R8=c.k3
r.Q=c.k1
r.to=c.k4
r.x1=c.ok
r.x2=c.p1
r.UA(b==null?B.hL:b)},
a25(a,b){return this.iU(a,null,b)},
JF(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7={}
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
a7.y=s==null?null:A.jz(s,t.xJ)
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
q=A.b8(t.S)
for(s=a6.cy,s=A.il(s,s.r);s.t();)q.E(0,A.afv(s.d))
a6.k4!=null
if(a6.at)a6.vT(new A.a1Q(a7,a6,q))
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
a5=A.ax(q,!0,q.$ti.c)
B.b.hq(a5)
return new A.I0(s,p,o,n,m,l,k,j,i,d,c,b,a,a0,a1,a2,a3,a4,h,e,g,r,f,a5)},
Oy(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.JF()
if(!a.ga_d()||a.at){s=$.akn()
r=s}else{q=a.ax.length
p=a.Pc()
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
if(c==null)c=$.akp()
b=l==null?$.ako():l
a1.a.push(new A.I1(n,a0.a,a0.b,-1,-1,-1,0,g,f,e,d,a0.cx,m.a,m.b,h.a,h.b,k.a,k.b,j.a,j.b,i.a,i.b,a0.w,a0.x,A.aev(c),s,r,b,a0.dy))
a.CW=!1},
Pc(){var s,r,q,p,o,n,m,l,k,j=this,i=j.ok,h=t.aa,g=h.a(A.F.prototype.gaW.call(j,j))
while(!0){s=i==null
if(!(s&&g!=null))break
i=g.ok
g=h.a(A.F.prototype.gaW.call(g,g))}r=j.ax
if(!s){r.toString
r=A.aso(r,i)}h=t.Dr
q=A.a([],h)
p=A.a([],h)
for(o=null,n=0;n<r.length;++n){m=r[n]
l=m.p1
o=n>0?r[n-1].p1:null
if(n!==0)if(J.S(l)===J.S(o)){if(l!=null)o.toString
k=!0}else k=!1
else k=!0
if(!k&&p.length!==0){if(o!=null){if(!!p.immutable$list)A.a_(A.W("sort"))
h=p.length-1
if(h-0<=32)A.Im(p,0,h,J.ae5())
else A.Il(p,0,h,J.ae5())}B.b.I(q,p)
B.b.U(p)}p.push(new A.iU(m,l,n))}if(o!=null)B.b.hq(p)
B.b.I(q,p)
h=t.wg
return A.ax(new A.aL(q,new A.a1O(),h),!0,h.h("bk.E"))},
K0(a){if(this.b==null)return
B.lZ.lB(0,a.IR(this.e))},
bP(){return"SemanticsNode#"+this.e},
a1O(a,b,c){return new A.NM(a,this,b,!0,!0,null,c)},
IP(a){return this.a1O(B.EB,null,a)}}
A.a1Q.prototype={
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
if(s!=null){r=q.y;(r==null?q.y=A.b8(t.xJ):r).I(0,s)}for(s=this.b.cy,s=A.il(s,s.r),r=this.c;s.t();)r.E(0,A.afv(s.d))
a.k4!=null
s=q.c
r=q.x
q.c=A.aas(a.fr,a.ok,s,r)
r=q.r
s=q.x
q.r=A.aas(a.id,a.ok,r,s)
q.cy=Math.max(q.cy,a.k3+a.k2)
return!0},
$S:66}
A.a1O.prototype={
$1(a){return a.a},
$S:222}
A.iM.prototype={
b1(a,b){return B.d.b1(this.b,b.b)},
$iby:1}
A.fS.prototype={
b1(a,b){return B.d.b1(this.a,b.a)},
Kr(){var s,r,q,p,o,n,m,l,k,j=A.a([],t.iV)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q){p=s[q]
o=p.w
j.push(new A.iM(!0,A.mC(p,new A.t(o.a- -0.1,o.b- -0.1)).a,p))
j.push(new A.iM(!1,A.mC(p,new A.t(o.c+-0.1,o.d+-0.1)).a,p))}B.b.hq(j)
n=A.a([],t.dK)
for(s=j.length,r=this.b,o=t.T,m=null,l=0,q=0;q<j.length;j.length===s||(0,A.R)(j),++q){k=j[q]
if(k.a){++l
if(m==null)m=new A.fS(k.b,r,A.a([],o))
m.c.push(k.c)}else --l
if(l===0){m.toString
n.push(m)
m=null}}B.b.hq(n)
if(r===B.Q){s=t.FF
n=A.ax(new A.cA(n,s),!0,s.h("bk.E"))}s=A.aj(n).h("ib<1,bN>")
return A.ax(new A.ib(n,new A.a9k(),s),!0,s.h("p.E"))},
Kq(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this.c,a4=a3.length
if(a4<=1)return a3
s=t.S
r=A.z(s,t.ju)
q=A.z(s,s)
for(p=this.b,o=p===B.Q,p=p===B.r,n=a4,m=0;m<n;g===a4||(0,A.R)(a3),++m,n=g){l=a3[m]
r.l(0,l.e,l)
n=l.w
k=n.a
j=n.b
i=A.mC(l,new A.t(k+(n.c-k)/2,j+(n.d-j)/2))
for(n=a3.length,k=i.a,j=i.b,h=0;g=a3.length,h<g;a3.length===n||(0,A.R)(a3),++h){f=a3[h]
if((l==null?f==null:l===f)||q.j(0,f.e)===l.e)continue
g=f.w
e=g.a
d=g.b
c=A.mC(f,new A.t(e+(g.c-e)/2,d+(g.d-d)/2))
b=Math.atan2(c.b-j,c.a-k)
a=p&&-0.7853981633974483<b&&b<2.356194490192345
if(o)a0=b<-2.356194490192345||b>2.356194490192345
else a0=!1
if(a||a0)q.l(0,l.e,f.e)}}a1=A.a([],t.t)
a2=A.a(a3.slice(0),A.aj(a3))
B.b.d7(a2,new A.a9g())
new A.aL(a2,new A.a9h(),A.aj(a2).h("aL<1,l>")).Z(0,new A.a9j(A.b8(s),q,a1))
a3=t.sC
a3=A.ax(new A.aL(a1,new A.a9i(r),a3),!0,a3.h("bk.E"))
a4=A.aj(a3).h("cA<1>")
return A.ax(new A.cA(a3,a4),!0,a4.h("bk.E"))}}
A.a9k.prototype={
$1(a){return a.Kq()},
$S:73}
A.a9g.prototype={
$2(a,b){var s,r,q=a.w,p=A.mC(a,new A.t(q.a,q.b))
q=b.w
s=A.mC(b,new A.t(q.a,q.b))
r=B.d.b1(p.b,s.b)
if(r!==0)return-r
return-B.d.b1(p.a,s.a)},
$S:52}
A.a9j.prototype={
$1(a){var s=this,r=s.a
if(r.B(0,a))return
r.E(0,a)
r=s.b
if(r.V(0,a)){r=r.j(0,a)
r.toString
s.$1(r)}s.c.push(a)},
$S:37}
A.a9h.prototype={
$1(a){return a.e},
$S:225}
A.a9i.prototype={
$1(a){var s=this.a.j(0,a)
s.toString
return s},
$S:226}
A.aao.prototype={
$1(a){return a.Kr()},
$S:73}
A.iU.prototype={
b1(a,b){var s,r=this.b
if(r==null||b.b==null)return this.c-b.c
r.toString
s=b.b
s.toString
return r.b1(0,s)},
$iby:1}
A.v1.prototype={
K1(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.b
if(e.a===0)return
s=A.b8(t.S)
r=A.a([],t.T)
for(q=t.aa,p=A.o(e).h("aF<1>"),o=p.h("p.E"),n=f.d;e.a!==0;){m=A.ax(new A.aF(e,new A.a1T(f),p),!0,o)
e.U(0)
n.U(0)
l=new A.a1U()
if(!!m.immutable$list)A.a_(A.W("sort"))
k=m.length-1
if(k-0<=32)A.Im(m,0,k,l)
else A.Il(m,0,k,l)
B.b.I(r,m)
for(l=m.length,j=0;j<m.length;m.length===l||(0,A.R)(m),++j){i=m[j]
if(i.at||i.as){k=J.de(i)
if(q.a(A.F.prototype.gaW.call(k,i))!=null){h=q.a(A.F.prototype.gaW.call(k,i))
h=h.at||h.as}else h=!1
if(h){q.a(A.F.prototype.gaW.call(k,i)).hw()
i.CW=!1}}}}B.b.d7(r,new A.a1V())
$.a1z.toString
g=new A.a1X(A.a([],t.fr))
for(q=r.length,j=0;j<r.length;r.length===q||(0,A.R)(r),++j){i=r[j]
if(i.CW&&i.b!=null)i.Oy(g,s)}e.U(0)
for(e=A.iR(s,s.r),q=A.o(e).c;e.t();){p=e.d
$.afs.j(0,p==null?q.a(p):p).toString}f.a.$1(new A.I4(g.a))
f.aw()},
QW(a,b){var s,r={},q=r.a=this.c.j(0,a)
if(q!=null)s=(q.at||q.as)&&!q.cx.V(0,b)
else s=!1
if(s)q.vT(new A.a1S(r,b))
s=r.a
if(s==null||!s.cx.V(0,b))return null
return r.a.cx.j(0,b)},
a0S(a,b,c){var s=this.QW(a,b)
if(s!=null){s.$1(c)
return}if(b===B.T3&&this.c.j(0,a).f!=null)this.c.j(0,a).f.$0()},
i(a){return"<optimized out>#"+A.bB(this)}}
A.a1T.prototype={
$1(a){return!this.a.d.B(0,a)},
$S:66}
A.a1U.prototype={
$2(a,b){return a.a-b.a},
$S:52}
A.a1V.prototype={
$2(a,b){return a.a-b.a},
$S:52}
A.a1S.prototype={
$1(a){if(a.cx.V(0,this.b)){this.a.a=a
return!1}return!0},
$S:66}
A.a1A.prototype={
j6(a,b){var s=this
s.e.l(0,a,b)
s.f=s.f|a.a
s.d=!0},
dQ(a,b){this.j6(a,new A.a1B(b))},
siM(a){a.toString
this.dQ(B.dC,a)},
sjM(a){a.toString
this.dQ(B.AQ,a)},
sre(a){this.dQ(B.dF,a)},
srb(a){this.dQ(B.T4,a)},
srf(a){this.dQ(B.dG,a)},
srg(a){this.dQ(B.dD,a)},
srd(a){this.dQ(B.dE,a)},
sy4(a){this.dQ(B.AR,a)},
sxY(a){this.dQ(B.AP,a)},
sxW(a,b){this.dQ(B.T6,b)},
sxX(a,b){this.dQ(B.Ta,b)},
syb(a,b){this.dQ(B.T0,b)},
sy9(a){this.j6(B.T7,new A.a1E(a))},
sy7(a){this.j6(B.SZ,new A.a1C(a))},
sya(a){this.j6(B.T8,new A.a1F(a))},
sy8(a){this.j6(B.T_,new A.a1D(a))},
sye(a){this.j6(B.T1,new A.a1G(a))},
syf(a){this.j6(B.T2,new A.a1H(a))},
sxZ(a){this.dQ(B.T5,a)},
sy_(a){this.dQ(B.T9,a)},
sJU(a){return},
sJV(a){if(a==this.k3)return
this.k3=a
this.d=!0},
sxK(a){return},
swr(a){return},
shC(a,b){if(b===this.x2)return
this.x2=b
this.d=!0},
Fi(a){var s=this.aa;(s==null?this.aa=A.b8(t.xJ):s).E(0,a)},
b5(a,b){var s=this,r=s.aS,q=a.a
if(b)s.aS=r|q
else s.aS=r&~q
s.d=!0},
Hy(a){var s,r=this
if(a==null||!a.d||!r.d)return!0
if((r.f&a.f)!==0)return!1
if((r.aS&a.aS)!==0)return!1
if(r.R8.a.length!==0)s=a.R8.a.length!==0
else s=!1
if(s)return!1
return!0},
jf(a){var s,r,q=this
if(!a.d)return
q.e.I(0,a.e)
q.p3.I(0,a.p3)
q.f=q.f|a.f
q.aS=q.aS|a.aS
q.y2=a.y2
if(q.ak==null)q.ak=a.ak
if(q.ap==null)q.ap=a.ap
if(q.ah==null)q.ah=a.ah
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
q.p4=A.aas(a.p4,a.y1,r,s)
s=q.R8
if(s.a==="")q.R8=a.R8
s=q.RG
if(s.a==="")q.RG=a.RG
s=q.rx
if(s.a==="")q.rx=a.rx
s=q.ry
r=q.y1
q.ry=A.aas(a.ry,a.y1,s,r)
if(q.to==="")q.to=a.to
q.xr=Math.max(q.xr,a.xr+a.x2)
q.d=q.d||a.d},
XZ(){var s=this,r=A.oo()
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
r.aS=s.aS
r.aa=s.aa
r.y2=s.y2
r.ak=s.ak
r.ap=s.ap
r.ah=s.ah
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
A.a1B.prototype={
$1(a){this.a.$0()},
$S:6}
A.a1E.prototype={
$1(a){a.toString
this.a.$1(A.pL(a))},
$S:6}
A.a1C.prototype={
$1(a){a.toString
this.a.$1(A.pL(a))},
$S:6}
A.a1F.prototype={
$1(a){a.toString
this.a.$1(A.pL(a))},
$S:6}
A.a1D.prototype={
$1(a){a.toString
this.a.$1(A.pL(a))},
$S:6}
A.a1G.prototype={
$1(a){var s,r,q
a.toString
s=J.ac2(t.G.a(a),t.N,t.S)
r=s.j(0,"base")
r.toString
q=s.j(0,"extent")
q.toString
this.a.$1(A.a4Z(B.A,r,q,!1))},
$S:6}
A.a1H.prototype={
$1(a){a.toString
this.a.$1(A.cc(a))},
$S:6}
A.BF.prototype={
D(){return"DebugSemanticsDumpOrder."+this.b}}
A.op.prototype={
b1(a,b){var s=this.YQ(b)
return s},
$iby:1}
A.tR.prototype={
YQ(a){var s=a.b===this.b
if(s)return 0
return B.f.b1(this.b,a.b)}}
A.NL.prototype={}
A.NN.prototype={}
A.NO.prototype={}
A.a1J.prototype={
IR(a){var s=A.aR(["type",this.a,"data",this.oc()],t.N,t.z)
if(a!=null)s.l(0,"nodeId",a)
return s},
a1R(){return this.IR(null)},
i(a){var s,r,q,p=A.a([],t.s),o=this.oc(),n=J.af2(o.gbl(o))
B.b.hq(n)
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.R)(n),++r){q=n[r]
p.push(A.h(q)+": "+A.h(o.j(0,q)))}return"SemanticsEvent("+B.b.bk(p,", ")+")"}}
A.a55.prototype={
oc(){return A.aR(["message",this.b],t.N,t.z)}}
A.Y8.prototype={
oc(){return B.yX}}
A.a4s.prototype={
oc(){return B.yX}}
A.z7.prototype={
jI(a,b){return this.a0e(a,!0)},
a0e(a,b){var s=0,r=A.a8(t.N),q,p=this,o
var $async$jI=A.a9(function(c,d){if(c===1)return A.a5(d,r)
while(true)switch(s){case 0:s=3
return A.an(p.cw(0,a),$async$jI)
case 3:o=d
if(o.byteLength<51200){q=B.a8.dX(0,A.cR(o.buffer,0,null))
s=1
break}q=A.Qw(A.atC(),o,'UTF8 decode for "'+a+'"',t.B6,t.N)
s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$jI,r)},
i(a){return"<optimized out>#"+A.bB(this)+"()"}}
A.RA.prototype={
jI(a,b){return this.KA(a,!0)},
a0f(a,b,c){var s,r={},q=this.b
if(q.V(0,a)){r=q.j(0,a)
r.toString
return c.h("ak<0>").a(r)}r.a=r.b=null
this.jI(a,!1).by(b,c).by(new A.RB(r,this,a,c),t.H)
s=r.a
if(s!=null)return s
s=new A.aq($.ai,c.h("aq<0>"))
r.b=new A.bg(s,c.h("bg<0>"))
q.l(0,a,s)
return r.b.a}}
A.RB.prototype={
$1(a){var s=this,r=new A.bl(a,s.d.h("bl<0>")),q=s.a
q.a=r
s.b.b.l(0,s.c,r)
q=q.b
if(q!=null)q.d_(0,a)},
$S(){return this.d.h("aN(0)")}}
A.ZI.prototype={
cw(a,b){var s,r,q,p,o,n=null,m=A.Pd(B.hM,b,B.a8,!1),l=A.aif(n,0,0),k=A.aib(n,0,0,!1),j=A.aie(n,0,0,n),i=A.aia(n,0,0),h=A.aid(n,"")
if(k==null)s=l.length!==0||h!=null||!1
else s=!1
if(s)k=""
s=k==null
r=!s
q=A.aic(m,0,m.length,n,"",r)
if(s&&!B.c.c_(q,"/"))q=A.aii(q,r)
else q=A.aik(q)
p=B.ca.dW(A.ai6("",l,s&&B.c.c_(q,"//")?"":k,h,q,j,i).e)
m=$.fI.bb$
m===$&&A.b()
o=m.t4(0,"flutter/assets",A.jE(p.buffer,0,n)).by(new A.ZJ(b),t.B6)
return o},
r_(a){return this.a0d(a)},
a0d(a){var s=0,r=A.a8(t.gG),q,p=this,o
var $async$r_=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)switch(s){case 0:s=3
return A.an(p.cw(0,a),$async$r_)
case 3:o=c
q=A.acN(A.cR(o.buffer,0,null))
s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$r_,r)}}
A.ZJ.prototype={
$1(a){if(a==null)throw A.d(A.acB(A.a([A.asH(this.a),A.bj("The asset does not exist or has empty data.")],t.F)))
return a},
$S:227}
A.Rl.prototype={}
A.oq.prototype={
nr(){var s=$.QI()
s.a.U(0)
s.b.U(0)},
iD(a){return this.a_1(a)},
a_1(a){var s=0,r=A.a8(t.H),q,p=this
var $async$iD=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)switch(s){case 0:switch(A.cc(J.bb(t.a.a(a),"type"))){case"memoryPressure":p.nr()
break}s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$iD,r)},
Ot(){var s,r=A.aZ("controller")
r.sbS(new A.oV(new A.a2_(r),null,null,null,t.tI))
s=r.aF()
return new A.oZ(s,A.aI(s).h("oZ<1>"))},
a1a(){if(this.r$!=null)return
$.aE()
var s=A.ah7("AppLifecycleState.resumed")
if(s!=null)this.qG(s)},
uF(a){return this.RR(a)},
RR(a){var s=0,r=A.a8(t.dR),q,p=this,o
var $async$uF=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)switch(s){case 0:a.toString
o=A.ah7(a)
o.toString
p.qG(o)
q=null
s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$uF,r)},
uG(a){return this.S_(a)},
S_(a){var s=0,r=A.a8(t.H)
var $async$uG=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)switch(s){case 0:t.j.a(a.b)
return A.a6(null,r)}})
return A.a7($async$uG,r)},
$idd:1}
A.a2_.prototype={
$0(){var s=0,r=A.a8(t.H),q=this,p,o,n
var $async$$0=A.a9(function(a,b){if(a===1)return A.a5(b,r)
while(true)switch(s){case 0:o=A.aZ("rawLicenses")
n=o
s=2
return A.an($.QI().jI("NOTICES",!1),$async$$0)
case 2:n.sbS(b)
p=q.a
n=J
s=3
return A.an(A.Qw(A.atH(),o.aF(),"parseLicenses",t.N,t.rh),$async$$0)
case 3:n.mI(b,J.alN(p.aF()))
s=4
return A.an(J.alJ(p.aF()),$async$$0)
case 4:return A.a6(null,r)}})
return A.a7($async$$0,r)},
$S:55}
A.a6q.prototype={
t4(a,b,c){var s=new A.aq($.ai,t.sB)
$.aE().Vc(b,c,A.anE(new A.a6r(new A.bg(s,t.BB))))
return s},
zH(a,b){if(b==null){a=$.QG().a.j(0,a)
if(a!=null)a.e=null}else $.QG().K8(a,new A.a6s(b))}}
A.a6r.prototype={
$1(a){var s,r,q,p
try{this.a.d_(0,a)}catch(q){s=A.au(q)
r=A.aG(q)
p=A.bj("during a platform message response callback")
A.dr(new A.bt(s,r,"services library",p,null,!1))}},
$S:20}
A.a6s.prototype={
$2(a,b){return this.Jk(a,b)},
Jk(a,b){var s=0,r=A.a8(t.H),q=1,p,o=[],n=this,m,l,k,j,i,h
var $async$$2=A.a9(function(c,d){if(c===1){p=d
s=q}while(true)switch(s){case 0:i=null
q=3
s=6
return A.an(n.a.$1(a),$async$$2)
case 6:i=d
o.push(5)
s=4
break
case 3:q=2
h=p
m=A.au(h)
l=A.aG(h)
j=A.bj("during a platform message callback")
A.dr(new A.bt(m,l,"services library",j,null,!1))
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
b.$1(i)
s=o.pop()
break
case 5:return A.a6(null,r)
case 1:return A.a5(p,r)}})
return A.a7($async$$2,r)},
$S:231}
A.Ur.prototype={}
A.TN.prototype={}
A.TW.prototype={}
A.C7.prototype={}
A.Ut.prototype={}
A.C5.prototype={}
A.U3.prototype={}
A.Ti.prototype={}
A.U4.prototype={}
A.Cd.prototype={}
A.C3.prototype={}
A.Ca.prototype={}
A.Cn.prototype={}
A.TS.prototype={}
A.U9.prototype={}
A.Tr.prototype={}
A.TF.prototype={}
A.T2.prototype={}
A.Tv.prototype={}
A.Ci.prototype={}
A.T4.prototype={}
A.Ue.prototype={}
A.nG.prototype={}
A.ju.prototype={}
A.lh.prototype={}
A.jv.prototype={}
A.rV.prototype={}
A.Wy.prototype={
PQ(a){var s,r,q,p,o,n,m,l,k,j
this.d=!0
s=!1
for(n=this.c,m=0;!1;++m){r=n[m]
try{q=r.$1(a)
s=s||q}catch(l){p=A.au(l)
o=A.aG(l)
k=A.bj("while processing a key handler")
j=$.fb()
if(j!=null)j.$1(new A.bt(p,o,"services library",k,null,!1))}}this.d=!1
return s},
GZ(a){var s,r,q=this,p=a.a,o=a.b
if(a instanceof A.lh){q.a.l(0,p,o)
s=$.akb().j(0,o.a)
if(s!=null){r=q.b
if(r.B(0,s))r.A(0,s)
else r.E(0,s)}}else if(a instanceof A.jv)q.a.A(0,p)
return q.PQ(a)}}
A.rT.prototype={
D(){return"KeyDataTransitMode."+this.b}}
A.rU.prototype={
i(a){return"KeyMessage("+A.h(this.a)+")"}}
A.DD.prototype={
ZF(a){var s,r=this,q=r.d
switch((q==null?r.d=B.FA:q).a){case 0:return!1
case 1:if(a.c===0&&a.d===0)return!1
s=A.aoj(a)
if(a.f&&r.e.length===0){r.b.GZ(s)
r.BP(A.a([s],t.DG),null)}else r.e.push(s)
return!1}},
BP(a,b){var s,r,q,p,o=this.a
if(o!=null){s=new A.rU(a,b)
try{o=o.$1(s)
return o}catch(p){r=A.au(p)
q=A.aG(p)
o=A.bj("while processing the key message handler")
A.dr(new A.bt(r,q,"services library",o,null,!1))}}return!1},
xg(a){var s=0,r=A.a8(t.a),q,p=this,o,n,m,l,k,j,i
var $async$xg=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)switch(s){case 0:if(p.d==null){p.d=B.Fz
p.c.a.push(p.gPw())}o=A.apV(t.a.a(a))
if(o instanceof A.hw){n=o.c
m=p.f
if(!n.Kh()){m.E(0,n.gdn())
l=!1}else{m.A(0,n.gdn())
l=!0}}else if(o instanceof A.o5){n=p.f
m=o.c
if(n.B(0,m.gdn())){n.A(0,m.gdn())
l=!1}else l=!0}else l=!0
if(l){p.c.ZW(o)
for(n=p.e,m=n.length,k=p.b,j=!1,i=0;i<n.length;n.length===m||(0,A.R)(n),++i)j=k.GZ(n[i])||j
j=p.BP(n,o)||j
B.b.U(n)}else j=!0
q=A.aR(["handled",j],t.N,t.z)
s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$xg,r)},
Px(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.c,d=e.gdn(),c=e.gnF()
e=this.b.a
s=A.o(e).h("b0<1>")
r=A.jz(new A.b0(e,s),s.h("p.E"))
q=A.a([],t.DG)
p=e.j(0,d)
o=$.fI.dy$
n=a.a
if(n==="")n=f
if(a instanceof A.hw)if(p==null){m=new A.lh(d,c,n,o,!1)
r.E(0,d)}else m=new A.rV(d,p,n,o,!1)
else if(p==null)m=f
else{m=new A.jv(d,p,f,o,!1)
r.A(0,d)}for(s=this.c.d,l=A.o(s).h("b0<1>"),k=l.h("p.E"),j=r.js(A.jz(new A.b0(s,l),k)),j=j.ga7(j),i=this.e;j.t();){h=j.gG(j)
if(h.k(0,d))q.push(new A.jv(h,c,f,o,!0))
else{g=e.j(0,h)
g.toString
i.push(new A.jv(h,g,f,o,!0))}}for(e=A.jz(new A.b0(s,l),k).js(r),e=e.ga7(e);e.t();){l=e.gG(e)
k=s.j(0,l)
k.toString
i.push(new A.lh(l,k,f,o,!0))}if(m!=null)i.push(m)
B.b.I(i,q)}}
A.Lv.prototype={}
A.XU.prototype={}
A.e.prototype={
gu(a){return B.f.gu(this.a)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.S(b)!==A.A(this))return!1
return b instanceof A.e&&b.a===this.a}}
A.i.prototype={
gu(a){return B.f.gu(this.a)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.S(b)!==A.A(this))return!1
return b instanceof A.i&&b.a===this.a}}
A.Lw.prototype={}
A.hk.prototype={
i(a){return"MethodCall("+this.a+", "+A.h(this.b)+")"}}
A.u8.prototype={
i(a){var s=this
return"PlatformException("+s.a+", "+A.h(s.b)+", "+A.h(s.c)+", "+A.h(s.d)+")"},
$idg:1}
A.tt.prototype={
i(a){return"MissingPluginException("+A.h(this.a)+")"},
$idg:1}
A.a4a.prototype={
eh(a){if(a==null)return null
return B.cM.dW(A.cR(a.buffer,a.byteOffset,a.byteLength))},
bI(a){if(a==null)return null
return A.jE(B.ca.dW(a).buffer,0,null)}}
A.Xp.prototype={
bI(a){if(a==null)return null
return B.h7.bI(B.bJ.wS(a))},
eh(a){var s
if(a==null)return a
s=B.h7.eh(a)
s.toString
return B.bJ.dX(0,s)}}
A.Xr.prototype={
fg(a){var s=B.bI.bI(A.aR(["method",a.a,"args",a.b],t.N,t.X))
s.toString
return s},
fe(a){var s,r,q,p=null,o=B.bI.eh(a)
if(!t.G.b(o))throw A.d(A.bu("Expected method call Map, got "+A.h(o),p,p))
s=J.aO(o)
r=s.j(o,"method")
q=s.j(o,"args")
if(typeof r=="string")return new A.hk(r,q)
throw A.d(A.bu("Invalid method call: "+A.h(o),p,p))},
G3(a){var s,r,q,p=null,o=B.bI.eh(a)
if(!t.j.b(o))throw A.d(A.bu("Expected envelope List, got "+A.h(o),p,p))
s=J.aO(o)
if(s.gp(o)===1)return s.j(o,0)
if(s.gp(o)===3)if(typeof s.j(o,0)=="string")r=s.j(o,1)==null||typeof s.j(o,1)=="string"
else r=!1
else r=!1
if(r){r=A.cc(s.j(o,0))
q=A.ci(s.j(o,1))
throw A.d(A.ad6(r,s.j(o,2),q,p))}if(s.gp(o)===4)if(typeof s.j(o,0)=="string")if(s.j(o,1)==null||typeof s.j(o,1)=="string")r=s.j(o,3)==null||typeof s.j(o,3)=="string"
else r=!1
else r=!1
else r=!1
if(r){r=A.cc(s.j(o,0))
q=A.ci(s.j(o,1))
throw A.d(A.ad6(r,s.j(o,2),q,A.ci(s.j(o,3))))}throw A.d(A.bu("Invalid envelope: "+A.h(o),p,p))},
nc(a){var s=B.bI.bI([a])
s.toString
return s},
jv(a,b,c){var s=B.bI.bI([a,c,b])
s.toString
return s},
Gq(a,b){return this.jv(a,null,b)}}
A.a40.prototype={
bI(a){var s
if(a==null)return null
s=A.a5E(64)
this.cz(0,s,a)
return s.ik()},
eh(a){var s,r
if(a==null)return null
s=new A.uj(a)
r=this.eO(0,s)
if(s.b<a.byteLength)throw A.d(B.aC)
return r},
cz(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i=null
if(c==null)b.cW(0,0)
else if(A.mz(c))b.cW(0,c?1:2)
else if(typeof c=="number"){b.cW(0,6)
b.fJ(8)
s=$.cG()
b.d.setFloat64(0,c,B.a5===s)
b.Ol(b.e)}else if(A.mA(c)){s=-2147483648<=c&&c<=2147483647
r=b.d
if(s){b.cW(0,3)
s=$.cG()
r.setInt32(0,c,B.a5===s)
b.lY(b.e,0,4)}else{b.cW(0,4)
s=$.cG()
B.fb.zF(r,0,c,s)}}else if(typeof c=="string"){b.cW(0,7)
s=c.length
q=new Uint8Array(s)
n=0
while(!0){if(!(n<s)){p=i
o=0
break}m=B.c.a9(c,n)
if(m<=127)q[n]=m
else{p=B.ca.dW(B.c.ea(c,n))
o=n
break}++n}if(p!=null){j.dN(b,o+p.length)
l=q.BYTES_PER_ELEMENT
k=A.cU(0,o,B.f.hu(q.byteLength,l),i,i)
b.j7(A.cR(q.buffer,q.byteOffset+0*l,(k-0)*l))
b.j7(p)}else{j.dN(b,s)
b.j7(q)}}else if(t.uo.b(c)){b.cW(0,8)
j.dN(b,c.length)
b.j7(c)}else if(t.fO.b(c)){b.cW(0,9)
s=c.length
j.dN(b,s)
b.fJ(4)
b.j7(A.cR(c.buffer,c.byteOffset,4*s))}else if(t.D4.b(c)){b.cW(0,14)
s=c.length
j.dN(b,s)
b.fJ(4)
b.j7(A.cR(c.buffer,c.byteOffset,4*s))}else if(t.cE.b(c)){b.cW(0,11)
s=c.length
j.dN(b,s)
b.fJ(8)
b.j7(A.cR(c.buffer,c.byteOffset,8*s))}else if(t.j.b(c)){b.cW(0,12)
s=J.aO(c)
j.dN(b,s.gp(c))
for(s=s.ga7(c);s.t();)j.cz(0,b,s.gG(s))}else if(t.G.b(c)){b.cW(0,13)
s=J.aO(c)
j.dN(b,s.gp(c))
s.Z(c,new A.a41(j,b))}else throw A.d(A.i4(c,i,i))},
eO(a,b){if(b.b>=b.a.byteLength)throw A.d(B.aC)
return this.hR(b.jX(0),b)},
hR(a,b){var s,r,q,p,o,n,m,l,k=this
switch(a){case 0:return null
case 1:return!0
case 2:return!1
case 3:s=b.b
r=$.cG()
q=b.a.getInt32(s,B.a5===r)
b.b+=4
return q
case 4:return b.rT(0)
case 6:b.fJ(8)
s=b.b
r=$.cG()
q=b.a.getFloat64(s,B.a5===r)
b.b+=8
return q
case 5:case 7:p=k.d4(b)
return B.cM.dW(b.jY(p))
case 8:return b.jY(k.d4(b))
case 9:p=k.d4(b)
b.fJ(4)
s=b.a
o=A.agt(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+4*p
return o
case 10:return b.rU(k.d4(b))
case 14:p=k.d4(b)
b.fJ(4)
s=b.a
r=s.buffer
s=s.byteOffset+b.b
A.Ql(r,s,p)
o=new Float32Array(r,s,p)
b.b=b.b+4*p
return o
case 11:p=k.d4(b)
b.fJ(8)
s=b.a
o=A.agr(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+8*p
return o
case 12:p=k.d4(b)
n=A.aX(p,null,!1,t.X)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.a_(B.aC)
b.b=r+1
n[m]=k.hR(s.getUint8(r),b)}return n
case 13:p=k.d4(b)
s=t.X
n=A.z(s,s)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.a_(B.aC)
b.b=r+1
r=k.hR(s.getUint8(r),b)
l=b.b
if(l>=s.byteLength)A.a_(B.aC)
b.b=l+1
n.l(0,r,k.hR(s.getUint8(l),b))}return n
default:throw A.d(B.aC)}},
dN(a,b){var s,r
if(b<254)a.cW(0,b)
else{s=a.d
if(b<=65535){a.cW(0,254)
r=$.cG()
s.setUint16(0,b,B.a5===r)
a.lY(a.e,0,2)}else{a.cW(0,255)
r=$.cG()
s.setUint32(0,b,B.a5===r)
a.lY(a.e,0,4)}}},
d4(a){var s,r,q=a.jX(0)
switch(q){case 254:s=a.b
r=$.cG()
q=a.a.getUint16(s,B.a5===r)
a.b+=2
return q
case 255:s=a.b
r=$.cG()
q=a.a.getUint32(s,B.a5===r)
a.b+=4
return q
default:return q}}}
A.a41.prototype={
$2(a,b){var s=this.a,r=this.b
s.cz(0,r,a)
s.cz(0,r,b)},
$S:46}
A.a44.prototype={
fg(a){var s=A.a5E(64)
B.ae.cz(0,s,a.a)
B.ae.cz(0,s,a.b)
return s.ik()},
fe(a){var s,r,q
a.toString
s=new A.uj(a)
r=B.ae.eO(0,s)
q=B.ae.eO(0,s)
if(typeof r=="string"&&s.b>=a.byteLength)return new A.hk(r,q)
else throw A.d(B.nf)},
nc(a){var s=A.a5E(64)
s.cW(0,0)
B.ae.cz(0,s,a)
return s.ik()},
jv(a,b,c){var s=A.a5E(64)
s.cW(0,1)
B.ae.cz(0,s,a)
B.ae.cz(0,s,c)
B.ae.cz(0,s,b)
return s.ik()},
Gq(a,b){return this.jv(a,null,b)},
G3(a){var s,r,q,p,o,n
if(a.byteLength===0)throw A.d(B.Fc)
s=new A.uj(a)
if(s.jX(0)===0)return B.ae.eO(0,s)
r=B.ae.eO(0,s)
q=B.ae.eO(0,s)
p=B.ae.eO(0,s)
o=s.b<a.byteLength?A.ci(B.ae.eO(0,s)):null
if(typeof r=="string")n=(q==null||typeof q=="string")&&s.b>=a.byteLength
else n=!1
if(n)throw A.d(A.ad6(r,p,A.ci(q),o))
else throw A.d(B.Fd)}}
A.YB.prototype={
Zw(a,b,c){var s,r,q,p
if(t.yg.b(b)){this.b.A(0,a)
return}s=this.b
r=s.j(0,a)
q=A.aro(c)
if(q==null)q=this.a
if(J.f(r==null?null:t.Ft.a(r.a),q))return
p=q.q7(a)
s.l(0,a,p)
B.Sa.fl("activateSystemCursor",A.aR(["device",p.b,"kind",t.Ft.a(p.a).a],t.N,t.z),t.H)}}
A.tv.prototype={}
A.dJ.prototype={
i(a){var s=this.gq9()
return s}}
A.Kp.prototype={
q7(a){throw A.d(A.c_(null))},
gq9(){return"defer"}}
A.Or.prototype={}
A.k_.prototype={
gq9(){return"SystemMouseCursor("+this.a+")"},
q7(a){return new A.Or(this,a)},
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return b instanceof A.k_&&b.a===this.a},
gu(a){return B.c.gu(this.a)}}
A.LZ.prototype={}
A.j9.prototype={
gmG(){var s,r=$.fI.bb$
r===$&&A.b()
s=r
return s},
lB(a,b){return this.K_(0,b,this.$ti.h("1?"))},
K_(a,b,c){var s=0,r=A.a8(c),q,p=this,o,n
var $async$lB=A.a9(function(d,e){if(d===1)return A.a5(e,r)
while(true)switch(s){case 0:o=p.b
n=o
s=3
return A.an(p.gmG().t4(0,p.a,o.bI(b)),$async$lB)
case 3:q=n.eh(e)
s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$lB,r)},
t8(a){this.gmG().zH(this.a,new A.Rk(this,a))}}
A.Rk.prototype={
$1(a){return this.Jg(a)},
Jg(a){var s=0,r=A.a8(t.yD),q,p=this,o,n
var $async$$1=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)switch(s){case 0:o=p.a.b
n=o
s=3
return A.an(p.b.$1(o.eh(a)),$async$$1)
case 3:q=n.bI(c)
s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$$1,r)},
$S:69}
A.ts.prototype={
gmG(){var s,r=$.fI.bb$
r===$&&A.b()
s=r
return s},
mb(a,b,c,d){return this.T0(a,b,c,d,d.h("0?"))},
T0(a,b,c,d,e){var s=0,r=A.a8(e),q,p=this,o,n,m,l
var $async$mb=A.a9(function(f,g){if(f===1)return A.a5(g,r)
while(true)switch(s){case 0:o=p.b
n=o.fg(new A.hk(a,b))
m=p.a
s=3
return A.an(p.gmG().t4(0,m,n),$async$mb)
case 3:l=g
if(l==null){if(c){q=null
s=1
break}throw A.d(A.aoS("No implementation found for method "+a+" on channel "+m))}q=d.h("0?").a(o.G3(l))
s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$mb,r)},
lG(a){var s=this.gmG()
s.zH(this.a,new A.Yo(this,a))},
oS(a,b){return this.Ra(a,b)},
Ra(a,b){var s=0,r=A.a8(t.yD),q,p=2,o,n=this,m,l,k,j,i,h,g,f,e
var $async$oS=A.a9(function(c,d){if(c===1){o=d
s=p}while(true)switch(s){case 0:h=n.b
g=h.fe(a)
p=4
e=h
s=7
return A.an(b.$1(g),$async$oS)
case 7:k=e.nc(d)
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
q=h.jv(k,m.c,i)
s=1
break}else if(k instanceof A.tt){q=null
s=1
break}else{l=k
h=h.Gq("error",J.dn(l))
q=h
s=1
break}s=6
break
case 3:s=2
break
case 6:case 1:return A.a6(q,r)
case 2:return A.a5(o,r)}})
return A.a7($async$oS,r)}}
A.Yo.prototype={
$1(a){return this.a.oS(a,this.b)},
$S:69}
A.jH.prototype={
fl(a,b,c){return this.a_M(a,b,c,c.h("0?"))},
qU(a,b){return this.fl(a,null,b)},
a_M(a,b,c,d){var s=0,r=A.a8(d),q,p=this
var $async$fl=A.a9(function(e,f){if(e===1)return A.a5(f,r)
while(true)switch(s){case 0:q=p.Lp(a,b,!0,c)
s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$fl,r)}}
A.jw.prototype={
D(){return"KeyboardSide."+this.b}}
A.e4.prototype={
D(){return"ModifierKey."+this.b}}
A.uh.prototype={
ga0v(){var s,r,q,p=A.z(t.BK,t.FD)
for(s=0;s<9;++s){r=B.o_[s]
if(this.a_R(r)){q=this.Jy(r)
if(q!=null)p.l(0,r,q)}}return p},
Kh(){return!0}}
A.fD.prototype={}
A.a_j.prototype={
$0(){var s,r,q,p=this.b,o=J.aO(p),n=A.ci(o.j(p,"key")),m=n==null
if(!m){s=n.length
s=s!==0&&s===1}else s=!1
if(s)this.a.a=n
s=A.ci(o.j(p,"code"))
if(s==null)s=""
m=m?"":n
r=A.my(o.j(p,"location"))
if(r==null)r=0
q=A.my(o.j(p,"metaState"))
if(q==null)q=0
p=A.my(o.j(p,"keyCode"))
return new A.o4(s,m,r,q,p==null?0:p)},
$S:235}
A.hw.prototype={}
A.o5.prototype={}
A.a_o.prototype={
ZW(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(a instanceof A.hw){p=a.c
i.d.l(0,p.gdn(),p.gnF())}else if(a instanceof A.o5)i.d.A(0,a.c.gdn())
i.VH(a)
for(p=i.a,o=A.ax(p,!0,t.vc),n=o.length,m=0;m<n;++m){s=o[m]
try{if(B.b.B(p,s))s.$1(a)}catch(l){r=A.au(l)
q=A.aG(l)
k=A.bj("while processing a raw key listener")
j=$.fb()
if(j!=null)j.$1(new A.bt(r,q,"services library",k,null,!1))}}return!1},
VH(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=a1.c,f=g.ga0v(),e=t.F3,d=A.z(e,t.lT),c=A.b8(e),b=this.d,a=A.jz(new A.b0(b,A.o(b).h("b0<1>")),e),a0=a1 instanceof A.hw
if(a0)a.E(0,g.gdn())
for(s=null,r=0;r<9;++r){q=B.o_[r]
p=$.ake()
o=p.j(0,new A.c0(q,B.b9))
if(o==null)continue
if(o.B(0,g.gdn()))s=q
if(f.j(0,q)===B.ch){c.I(0,o)
if(o.ji(0,a.gih(a)))continue}n=f.j(0,q)==null?A.b8(e):p.j(0,new A.c0(q,f.j(0,q)))
if(n==null)continue
for(p=new A.pk(n,n.r),p.c=n.e,m=A.o(p).c;p.t();){l=p.d
if(l==null)l=m.a(l)
k=$.akd().j(0,l)
k.toString
d.l(0,l,k)}}e=g instanceof A.a_h
j=(e||g instanceof A.o4)&&b.j(0,B.bA)!=null&&!J.f(b.j(0,B.bA),B.de)
for(a=$.abY(),a=A.il(a,a.r);a.t();){p=a.d
i=j&&p.k(0,B.bA)
if(!c.B(0,p)&&!i)b.A(0,p)}if(!(g instanceof A.a_f)&&!(g instanceof A.a_i))b.A(0,B.ds)
b.I(0,d)
if(a0&&s!=null&&!b.V(0,g.gdn())){if(e&&g.gdn().k(0,B.bB)||g instanceof A.a_g||g instanceof A.a_e){h=$.abY().j(0,g.gdn())
if(h!=null)b.l(0,g.gdn(),h)}if(g instanceof A.o4&&g.gdn().k(0,B.bB))b.l(0,g.gdn(),g.gnF())}}}
A.c0.prototype={
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return b instanceof A.c0&&b.a===this.a&&b.b==this.b},
gu(a){return A.T(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.N4.prototype={}
A.N3.prototype={}
A.a_e.prototype={}
A.a_f.prototype={}
A.a_g.prototype={}
A.a_h.prototype={}
A.a_i.prototype={}
A.o4.prototype={
gdn(){var s=this.a,r=B.RL.j(0,s)
return r==null?new A.i(98784247808+B.c.gu(s)):r},
gnF(){var s,r=this.b,q=B.RN.j(0,r),p=q==null?null:q[this.c]
if(p!=null)return p
s=B.RK.j(0,r)
if(s!=null)return s
if(r.length===1)return new A.e(B.c.a9(r.toLowerCase(),0))
return new A.e(B.c.gu(this.a)+98784247808)},
a_R(a){var s=this
switch(a.a){case 0:return(s.d&4)!==0
case 1:return(s.d&1)!==0
case 2:return(s.d&2)!==0
case 3:return(s.d&8)!==0
case 5:return(s.d&16)!==0
case 4:return(s.d&32)!==0
case 6:return(s.d&64)!==0
case 7:case 8:return!1}},
Jy(a){return B.ch},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.o4&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e},
gu(a){var s=this
return A.T(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.uB.prototype={
ga1E(){var s=this
if(s.c)return new A.bl(s.a,t.m6)
if(s.b==null){s.b=new A.bg(new A.aq($.ai,t.jr),t.Fj)
s.oR()}return s.b.a},
oR(){var s=0,r=A.a8(t.H),q,p=this,o
var $async$oR=A.a9(function(a,b){if(a===1)return A.a5(b,r)
while(true)switch(s){case 0:s=3
return A.an(B.ih.qU("get",t.mE),$async$oR)
case 3:o=b
if(p.b==null){s=1
break}p.Dm(o)
case 1:return A.a6(q,r)}})
return A.a7($async$oR,r)},
Dm(a){var s,r=a==null
if(!r){s=J.bb(a,"enabled")
s.toString
A.pL(s)}else s=!1
this.ZY(r?null:t.Fx.a(J.bb(a,"data")),s)},
ZY(a,b){var s,r,q=this,p=q.c&&b
q.d=p
if(p)$.bH.ax$.push(new A.a0k(q))
s=q.a
if(b){p=q.PJ(a)
r=t.N
if(p==null){p=t.X
p=A.z(p,p)}r=new A.cf(p,q,null,"root",A.z(r,t.hp),A.z(r,t.Cm))
p=r}else p=null
q.a=p
q.c=!0
r=q.b
if(r!=null)r.d_(0,p)
q.b=null
if(q.a!=s){q.aw()
if(s!=null)s.m()}},
uZ(a){return this.Tp(a)},
Tp(a){var s=0,r=A.a8(t.H),q=this,p
var $async$uZ=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)switch(s){case 0:p=a.a
switch(p){case"push":q.Dm(t.mE.a(a.b))
break
default:throw A.d(A.c_(p+" was invoked but isn't implemented by "+A.A(q).i(0)))}return A.a6(null,r)}})
return A.a7($async$uZ,r)},
PJ(a){if(a==null)return null
return t.ym.a(B.ae.eh(A.jE(a.buffer,a.byteOffset,a.byteLength)))},
JS(a){var s=this
s.r.E(0,a)
if(!s.f){s.f=!0
$.bH.ax$.push(new A.a0l(s))}},
BR(){var s,r,q,p,o,n=this
if(!n.f)return
n.f=!1
for(s=n.r,r=A.iR(s,s.r),q=A.o(r).c;r.t();){p=r.d;(p==null?q.a(p):p).w=!1}s.U(0)
o=B.ae.bI(n.a.a)
B.ih.fl("put",A.cR(o.buffer,o.byteOffset,o.byteLength),t.H)},
GJ(){if($.bH.ch$)return
this.BR()}}
A.a0k.prototype={
$1(a){this.a.d=!1},
$S:2}
A.a0l.prototype={
$1(a){return this.a.BR()},
$S:2}
A.cf.prototype={
gmj(){var s=J.yW(this.a,"c",new A.a0h())
s.toString
return t.mE.a(s)},
gi6(){var s=J.yW(this.a,"v",new A.a0i())
s.toString
return t.mE.a(s)},
a1j(a,b,c){var s=this,r=J.dA(s.gi6(),b),q=c.h("0?").a(J.i2(s.gi6(),b))
if(J.fc(s.gi6()))J.i2(s.a,"v")
if(r)s.kr()
return q},
Xt(a,b){var s,r,q,p,o=this,n=o.f
if(n.V(0,a)||!J.dA(o.gmj(),a)){n=t.N
s=new A.cf(A.z(n,t.X),null,null,a,A.z(n,t.hp),A.z(n,t.Cm))
o.hx(s)
return s}r=t.N
q=o.c
p=J.bb(o.gmj(),a)
p.toString
s=new A.cf(t.mE.a(p),q,o,a,A.z(r,t.hp),A.z(r,t.Cm))
n.l(0,a,s)
return s},
hx(a){var s=this,r=a.d
if(r!==s){if(r!=null)r.pi(a)
a.d=s
s.AG(a)
if(a.c!=s.c)s.Dx(a)}},
Q_(a){this.pi(a)
a.d=null
if(a.c!=null){a.vm(null)
a.F6(this.gDw())}},
kr(){var s,r=this
if(!r.w){r.w=!0
s=r.c
if(s!=null)s.JS(r)}},
Dx(a){a.vm(this.c)
a.F6(this.gDw())},
vm(a){var s=this,r=s.c
if(r==a)return
if(s.w)if(r!=null)r.r.A(0,s)
s.c=a
if(s.w&&a!=null){s.w=!1
s.kr()}},
pi(a){var s,r,q,p=this
if(J.f(p.f.A(0,a.e),a)){J.i2(p.gmj(),a.e)
s=p.r
r=s.j(0,a.e)
if(r!=null){q=J.bG(r)
p.C1(q.eP(r))
if(q.gP(r))s.A(0,a.e)}if(J.fc(p.gmj()))J.i2(p.a,"c")
p.kr()
return}s=p.r
q=s.j(0,a.e)
if(q!=null)J.i2(q,a)
q=s.j(0,a.e)
q=q==null?null:J.fc(q)
if(q===!0)s.A(0,a.e)},
AG(a){var s=this
if(s.f.V(0,a.e)){J.ku(s.r.bH(0,a.e,new A.a0g()),a)
s.kr()
return}s.C1(a)
s.kr()},
C1(a){this.f.l(0,a.e,a)
J.ee(this.gmj(),a.e,a.a)},
F7(a,b){var s,r,q=this.f
q=q.gb_(q)
s=this.r
s=s.gb_(s)
r=q.Zr(0,new A.ib(s,new A.a0j(),A.o(s).h("ib<p.E,cf>")))
J.mI(b?A.ax(r,!1,A.o(r).h("p.E")):r,a)},
F6(a){return this.F7(a,!1)},
a1q(a){var s,r=this
if(a===r.e)return
s=r.d
if(s!=null)s.pi(r)
r.e=a
s=r.d
if(s!=null)s.AG(r)},
m(){var s,r=this
r.F7(r.gPZ(),!0)
r.f.U(0)
r.r.U(0)
s=r.d
if(s!=null)s.pi(r)
r.d=null
r.vm(null)
r.x=!0},
i(a){return"RestorationBucket(restorationId: "+this.e+", owner: "+A.h(this.b)+")"}}
A.a0h.prototype={
$0(){var s=t.X
return A.z(s,s)},
$S:71}
A.a0i.prototype={
$0(){var s=t.X
return A.z(s,s)},
$S:71}
A.a0g.prototype={
$0(){return A.a([],t.oy)},
$S:238}
A.a0j.prototype={
$1(a){return a},
$S:239}
A.R7.prototype={}
A.hD.prototype={
Ex(){var s,r,q,p,o=this,n=o.a
n=n==null?null:n.a
s=o.e
s=s==null?null:s.a
r=o.f.D()
q=o.r.D()
p=o.c
p=p==null?null:p.D()
return A.aR(["systemNavigationBarColor",n,"systemNavigationBarDividerColor",null,"systemStatusBarContrastEnforced",o.w,"statusBarColor",s,"statusBarBrightness",r,"statusBarIconBrightness",q,"systemNavigationBarIconBrightness",p,"systemNavigationBarContrastEnforced",o.d],t.N,t.z)},
i(a){return"SystemUiOverlayStyle("+this.Ex().i(0)+")"},
gu(a){var s=this
return A.T(s.a,s.b,s.d,s.e,s.f,s.r,s.w,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s,r=this
if(b==null)return!1
if(J.S(b)!==A.A(r))return!1
if(b instanceof A.hD)if(J.f(b.a,r.a))if(J.f(b.e,r.e))if(b.r===r.r)if(b.f===r.f)s=b.c==r.c
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.a4m.prototype={
$0(){if(!J.f($.oC,$.adp)){B.bX.fl("SystemChrome.setSystemUIOverlayStyle",$.oC.Ex(),t.H)
$.adp=$.oC}$.oC=null},
$S:0}
A.vv.prototype={
D(){return"SystemSoundType."+this.b}}
A.a4u.prototype={
W(a,b){return new A.KL(b,this)}}
A.S3.prototype={
fA(a){var s,r,q,p,o,n=a.a
if(n<=0)return B.cK
s=this.a
r=s.length
if(n<=r)q=n===r&&a.b===B.A
else q=!0
if(q)return new A.aW(r,B.K)
switch(a.b.a){case 0:p=Math.min(n-1,r)
o=Math.min(n,r)
break
case 1:p=Math.min(n,r)
o=Math.min(n+1,r)
break
default:o=null
p=null}return new A.aW(A.ahi(s,p,o).b,B.A)},
fB(a){var s,r,q,p,o,n=a.a
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
q=null}o=A.ahi(s,q,p)
return new A.aW(r-(o.a.length-o.c),B.K)}}
A.a5B.prototype={
fA(a){return new A.aW(this.a.b.lx(a).a,B.A)},
fB(a){return new A.aW(this.a.b.lx(a).b,B.K)}}
A.XY.prototype={
fA(a){return new A.aW(this.a.ze(a).a,B.A)},
fB(a){return new A.aW(this.a.ze(a).b,B.K)}}
A.SY.prototype={
fA(a){return B.cK},
fB(a){return new A.aW(this.a.length,B.K)}}
A.a5z.prototype={
fA(a){var s,r=a.a,q=this.a,p=q.length
if(r<=p)r=r===p&&a.b===B.A
else r=!0
if(r)a=new A.aW(p,B.K)
s=a.a
if(s<=0)return B.cK
if(a.b===B.A&&!A.a4W(B.c.an(q,s)))return a
for(;--s,s>=0;)if(!A.a4W(B.c.an(q,s)))return new A.aW(s+1,B.K)
return B.cK},
fB(a){var s,r=a.a,q=this.a,p=q.length
if(r>=p)return new A.aW(p,B.K)
if(r>=0)r=r===0&&a.b===B.K
else r=!0
if(r)a=B.cK
s=a.a
if(a.b===B.K&&!A.a4W(B.c.an(q,s-1)))return a
for(;s<p;++s)if(!A.a4W(B.c.an(q,s)))return new A.aW(s,B.A)
return new A.aW(p,B.K)}}
A.KL.prototype={
fA(a){return this.a.fA(this.b.fA(a))},
fB(a){return this.a.fB(this.b.fB(a))}}
A.GS.prototype={
B9(a){if(this.a)switch(a.b.a){case 0:return new A.aW(a.a,B.A)
case 1:return new A.aW(a.a+1,B.K)}else switch(a.b.a){case 0:return new A.aW(a.a-1,B.A)
case 1:return new A.aW(a.a,B.K)}},
fA(a){return this.B9(a)},
fB(a){return this.B9(a)}}
A.IL.prototype={
i(a){var s,r,q=this,p=", isDirectional: "
if(!q.gjH())return"TextSelection.invalid"
s=""+q.c
r=""+q.f
return q.a===q.b?"TextSelection.collapsed(offset: "+s+", affinity: "+q.e.i(0)+p+r+")":"TextSelection(baseOffset: "+s+", extentOffset: "+q.d+p+r+")"},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof A.IL))return!1
if(!r.gjH())return!b.gjH()
if(b.c===r.c)if(b.d===r.d)s=(r.a!==r.b||b.e===r.e)&&b.f===r.f
else s=!1
else s=!1
return s},
gu(a){var s,r=this
if(!r.gjH())return A.T(-B.f.gu(1),-B.f.gu(1),A.fC(B.A),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)
s=r.a===r.b?A.fC(r.e):A.fC(B.A)
return A.T(B.f.gu(r.c),B.f.gu(r.d),s,B.np.gu(r.f),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.HY.prototype={
D(){return"SelectionChangedCause."+this.b}}
A.IJ.prototype={
gP3(){var s=this.c
s===$&&A.b()
return s},
p_(a){return this.Tc(a)},
Tc(a){var s=0,r=A.a8(t.z),q,p=2,o,n=this,m,l,k,j,i
var $async$p_=A.a9(function(b,c){if(b===1){o=c
s=p}while(true)switch(s){case 0:p=4
s=7
return A.an(n.uL(a),$async$p_)
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
k=A.bj("during method call "+a.a)
A.dr(new A.bt(m,l,"services library",k,new A.a4V(a),!1))
throw i
s=6
break
case 3:s=2
break
case 6:case 1:return A.a6(q,r)
case 2:return A.a5(o,r)}})
return A.a7($async$p_,r)},
uL(a){return this.SG(a)},
SG(a){var s=0,r=A.a8(t.z),q,p=this,o,n,m,l,k,j
var $async$uL=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)switch(s){case 0:j=a.a
if(j==="TextInputClient.focusElement"){p.f.j(0,J.bb(t.j.a(a.b),0))
s=1
break}else if(j==="TextInputClient.requestElementsInRect"){o=J.kv(t.j.a(a.b),t.fY)
n=A.o(o).h("aL<X.E,L>")
m=p.f
l=A.o(m).h("b0<1>")
k=l.h("di<p.E,B<@>>")
q=A.ax(new A.di(new A.aF(new A.b0(m,l),new A.a4S(p,A.ax(new A.aL(o,new A.a4T(),n),!0,n.h("bk.E"))),l.h("aF<p.E>")),new A.a4U(p),k),!0,k.h("p.E"))
s=1
break}else if(j==="TextInputClient.scribbleInteractionBegan"){s=1
break}else if(j==="TextInputClient.scribbleInteractionFinished"){s=1
break}s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$uL,r)}}
A.a4V.prototype={
$0(){var s=null
return A.a([A.jg("call",this.a,!0,B.b7,s,!1,s,s,B.aB,s,!1,!0,!0,B.bm,s,t.fw)],t.F)},
$S:14}
A.a4T.prototype={
$1(a){return a},
$S:241}
A.a4S.prototype={
$1(a){this.a.f.j(0,a)
return!1},
$S:54}
A.a4U.prototype={
$1(a){var s=this.a.f.j(0,a),r=s.gwd(s)
s=[a]
B.b.I(s,[r.gh9(r),r.gyQ(r),r.gbd(r),r.gbG(r)])
return s},
$S:242}
A.vG.prototype={}
A.Mp.prototype={}
A.PF.prototype={}
A.aaD.prototype={
$1(a){this.a.sbS(a)
return!1},
$S:34}
A.aD.prototype={}
A.bf.prototype={
f5(a){this.b=a},
hK(a,b){this.gqV()
return!0},
gqV(){return!0},
q2(a){return!0},
Ww(a){var s=this.a
s.b=!0
s.a.push(a)
return null},
Ip(a){return this.a.A(0,a)}}
A.kM.prototype={}
A.kF.prototype={
cO(a){return this.c.$1(a)}}
A.QQ.prototype={
Ht(a,b,c){if(a instanceof A.kM)return a.lc(b,c)
else return a.cO(b)}}
A.i3.prototype={
ao(){return new A.w2(A.b8(t.nT),new A.N(),B.l)}}
A.QS.prototype={
$1(a){var s=a.f
s.toString
t.ke.a(s)
return!1},
$S:35}
A.QV.prototype={
$1(a){var s,r=this,q=a.f
q.toString
s=A.ac9(t.ke.a(q),r.b,r.d)
if(s!=null){r.c.A6(a,null)
r.a.a=s
return!0}return!1},
$S:35}
A.QT.prototype={
$1(a){var s,r=a.f
r.toString
s=A.ac9(t.ke.a(r),this.b,this.c)
if(s!=null){this.a.a=s
return!0}return!1},
$S:35}
A.QW.prototype={
$1(a){var s,r,q=this,p=a.f
p.toString
s=q.b
r=A.ac9(t.ke.a(p),s,q.d)
p=r!=null
if(p&&r.hK(0,s))q.a.a=A.af4(a).Ht(r,s,q.c)
return p},
$S:35}
A.w2.prototype={
aC(){this.aT()
this.ED()},
R1(a){this.az(new A.a5F(this))},
ED(){var s,r,q,p,o=this,n=o.a.d
n=n.gb_(n)
s=A.jz(n,A.o(n).h("p.E"))
r=o.d.js(s)
n=o.d
n.toString
q=s.js(n)
for(n=r.ga7(r),p=o.gCm();n.t();)n.gG(n).Ip(p)
for(n=q.ga7(q);n.t();)n.gG(n).Ww(p)
o.d=s},
aX(a){this.bo(a)
this.ED()},
m(){var s,r,q,p,o=this
o.aL()
for(s=o.d,s=A.iR(s,s.r),r=o.gCm(),q=A.o(s).c;s.t();){p=s.d;(p==null?q.a(p):p).Ip(r)}o.d=null},
L(a){var s=this.a
return new A.w1(null,s.d,this.e,s.e,null)}}
A.a5F.prototype={
$0(){this.a.e=new A.N()},
$S:0}
A.w1.prototype={
bQ(a){var s
if(this.w===a.w)s=!A.abC(a.r,this.r)
else s=!0
return s}}
A.Je.prototype={
cO(a){a.a2x()
return null}}
A.BY.prototype={
q2(a){return this.c},
cO(a){}}
A.mJ.prototype={}
A.mZ.prototype={}
A.h3.prototype={}
A.BW.prototype={}
A.lE.prototype={}
A.GQ.prototype={
hK(a,b){var s,r,q,p,o,n=$.ad.H$.f.f
if(n==null||n.e==null)return!1
for(s=t.r,r=0;r<2;++r){q=B.G_[r]
p=n.e
p.toString
o=A.acb(p,q,s)
if(o!=null&&o.hK(0,q)){this.c=o
this.d=q
return!0}}return!1},
cO(a){var s,r=this.c
r===$&&A.b()
s=this.d
s===$&&A.b()
r.cO(s)}}
A.Mj.prototype={
T1(a,b,c){var s
a.f5(this.gjp())
s=A.o(this).h("kM<1>").b(a)?a.lc(b,c):a.cO(b)
a.f5(null)
return s},
lc(a,b){var s=this,r=A.aca(s.gr1(),A.o(s).c)
return r==null?s.a_L(a,s.b,b):s.T1(r,a,b)},
cO(a){return this.lc(a,null)},
gqV(){var s=this,r=A.acb(s.gr1(),null,A.o(s).c)
if(r!=null){r.f5(s.gjp())
r.gqV()
r.f5(null)}else s.gjp().gqV()
return!0},
hK(a,b){var s,r=this,q=A.aca(r.gr1(),A.o(r).c),p=q==null
if(!p)q.f5(r.gjp())
s=(p?r.gjp():q).hK(0,b)
if(!p)q.f5(null)
return s},
q2(a){var s,r=this,q=A.aca(r.gr1(),A.o(r).c),p=q==null
if(!p)q.f5(r.gjp())
s=(p?r.gjp():q).q2(a)
if(!p)q.f5(null)
return s}}
A.x5.prototype={
a_L(a,b,c){var s=this.e
if(b==null)return s.cO(a)
else return s.cO(a)},
gjp(){return this.e},
gr1(){return this.f}}
A.Jl.prototype={}
A.Jk.prototype={}
A.Lr.prototype={}
A.yq.prototype={
f5(a){this.Kz(a)
this.e.f5(a)}}
A.q4.prototype={
aA(a){var s=new A.up(this.e,!0,null,A.ah(),this.$ti.h("up<1>"))
s.aB()
s.saJ(null)
return s},
aE(a,b){b.sn(0,this.e)
b.sKl(!0)}}
A.w_.prototype={
ao(){return new A.ya(B.l)}}
A.ya.prototype={
gSQ(){var s,r
$.ad.toString
s=$.aE()
if(s.gwu()!=="/"){$.ad.toString
s=s.gwu()}else{r=this.a.ax
$.ad.toString
s=s.gwu()
s=s}return s},
aC(){var s=this
s.aT()
s.W9()
$.ad.toString
s.r=s.vl($.aE().a.f,s.a.fy)
$.ad.ae$.push(s)},
aX(a){this.bo(a)
this.EX(a)},
m(){B.b.A($.ad.ae$,this)
var s=this.d
if(s!=null)s.m()
this.aL()},
Bo(){var s=this.d
if(s!=null)s.m()
this.e=this.d=null},
EX(a){var s,r=this
r.a.toString
if(r.gF5()){r.Bo()
if(r.f==null||r.a.c!=a.c){s=r.a.c
r.f=s==null?new A.jn(r,t.yh):s}}else{r.Bo()
r.f=null}},
W9(){return this.EX(null)},
gF5(){var s=this.a
if(s.Q==null){s=s.as
s=s==null?null:s.gbK(s)
s=s===!0||this.a.d!=null||!1}else s=!0
return s},
TC(a){var s,r=this,q=a.a,p=q==="/"&&r.a.Q!=null?new A.aa1(r):r.a.as.j(0,q)
if(p!=null)return r.a.f.$1$2(a,p,t.z)
s=r.a.d
if(s!=null)return s.$1(a)
return null},
TQ(a){return this.a.at.$1(a)},
ij(){var s=0,r=A.a8(t.y),q,p=this,o,n
var $async$ij=A.a9(function(a,b){if(a===1)return A.a5(b,r)
while(true)switch(s){case 0:p.a.toString
o=p.f
n=o==null?null:o.gbi()
if(n==null){q=!1
s=1
break}q=n.HR()
s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$ij,r)},
n3(a){return this.YK(a)},
YK(a){var s=0,r=A.a8(t.y),q,p=this,o,n
var $async$n3=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)switch(s){case 0:p.a.toString
o=p.f
n=o==null?null:o.gbi()
if(n==null){q=!1
s=1
break}o=n.vp(a,null,t.X)
o.toString
o=A.ahY(o,B.C1,!1,null)
n.e.push(o)
n.uo()
n.AV(o.a)
q=!0
s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$n3,r)},
vl(a,b){this.a.toString
return A.atG(a,b)},
wz(a){var s=this,r=s.vl(a,s.a.fy)
if(!r.k(0,s.r))s.az(new A.aa4(s,r))},
L(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g={}
g.a=null
s=i.a
s.toString
if(i.gF5()){s=i.f
r=i.gSQ()
q=i.a
p=q.e==null?A.auM():new A.aa2(i)
o=q.ay
o.toString
g.a=A.afO(!0,new A.tG(r,i.gTB(),i.gTP(),o,"nav",p,!0,s),"Navigator Scope",h,h)
s=q}else{s=i.a
s.toString}g.b=null
n=new A.fZ(new A.aa3(g,i),h)
g.b=n
n=A.qW(n,h,B.cJ,!0,s.cy,h,h,B.aQ)
g.b=n
s=$.arg
if(s)m=new A.Gw(15,!1,!1,h)
else m=h
if(m!=null)g.b=A.lZ(B.bj,A.a([n,A.GM(h,m,h,h,0,0,0,h)],t.E),B.a9,B.bC)
s=i.a
r=s.CW
s=s.db
s=A.aY(255,s.gn(s)>>>16&255,s.gn(s)>>>8&255,s.gn(s)&255)
g=g.b
l=i.vl(A.a([i.a.dx],t.as),i.a.fy)
q=t.eu
p=A.a([],q)
B.b.I(p,i.a.dy)
p.push(B.DK)
q=A.a(p.slice(0),q)
k=new A.t5(l,q,new A.IT(r,s,g,h),h)
A.d7(a)
g=i.a
j=new A.wQ(k,h)
k=j
g=g.p3
s=A.arf()
r=A.nI($.akI(),t.n,t.nT)
q=t.B8
p=t.dc
r.l(0,B.BK,new A.x5(new A.og(new A.bd(A.a([],q),p)),a,!1,!1,!1,!1,new A.bd(A.a([],q),p),t.uq.h("x5<bf.T>")))
return new A.uE(new A.v6(A.adj(new A.BO(A.QR(r,A.afP(new A.IE(new A.v8(k,h),h),new A.uk(A.z(t.j5,t.uJ)))),h),"<Default WidgetsApp Shortcuts>",s),h),g,h)}}
A.aa1.prototype={
$1(a){var s=this.a.a.Q
s.toString
return s},
$S:13}
A.aa4.prototype={
$0(){this.a.r=this.b},
$S:0}
A.aa2.prototype={
$2(a,b){return this.a.a.e.$1(b)},
$S:83}
A.aa3.prototype={
$1(a){return this.b.a.ch.$2(a,this.a.a)},
$S:13}
A.Qg.prototype={}
A.mR.prototype={
ao(){return new A.w6(B.l)}}
A.w6.prototype={
aC(){this.aT()
this.EI()},
aX(a){this.bo(a)
this.EI()},
EI(){this.e=new A.cx(this.gOo(),this.a.c,null,t.dm)},
m(){var s,r,q=this.d
if(q!=null)for(q=A.il(q,q.r);q.t();){s=q.d
r=this.d.j(0,s)
r.toString
s.F(0,r)}this.aL()},
Op(a){var s,r=this,q=a.a,p=r.d
if(p==null)p=r.d=A.z(t.yF,t.M)
p.l(0,q,r.Pz(q))
p=r.d.j(0,q)
p.toString
q.S(0,p)
if(!r.f){r.f=!0
s=r.C8()
if(s!=null)r.ET(s)
else $.bH.ax$.push(new A.a5U(r))}return!1},
C8(){var s={},r=this.c
r.toString
s.a=null
r.aR(new A.a5Z(s))
return t.ot.a(s.a)},
ET(a){var s,r
this.c.toString
s=this.f
r=this.e
r===$&&A.b()
a.B3(t.CR.a(A.aoh(r,s)))},
Pz(a){return new A.a5Y(this,a)},
L(a){var s=this.f,r=this.e
r===$&&A.b()
return new A.rS(s,r,null)}}
A.a5U.prototype={
$1(a){var s,r=this.a
if(r.c==null)return
s=r.C8()
s.toString
r.ET(s)},
$S:2}
A.a5Z.prototype={
$1(a){this.a.a=a},
$S:4}
A.a5Y.prototype={
$0(){var s=this.a
s.d.A(0,this.b)
if(s.d.a===0)if($.bH.CW$.a<3)s.az(new A.a5W(s))
else{s.f=!1
A.f9(new A.a5X(s))}},
$S:0}
A.a5W.prototype={
$0(){this.a.f=!1},
$S:0}
A.a5X.prototype={
$0(){var s=this.a
if(s.c!=null&&s.d.a===0)s.az(new A.a5V(s))},
$S:0}
A.a5V.prototype={
$0(){},
$S:0}
A.lg.prototype={}
A.DC.prototype={}
A.mS.prototype={
oH(){var s=new A.DC($.bq())
this.h2$=s
this.c.cH(new A.lg(s))},
o6(){var s,r=this
if(r.grN()){if(r.h2$==null)r.oH()}else{s=r.h2$
if(s!=null){s.aw()
s.dt()
r.h2$=null}}},
L(a){if(this.grN()&&this.h2$==null)this.oH()
return B.a_9}}
A.Ma.prototype={
L(a){throw A.d(A.ru("Widgets that mix AutomaticKeepAliveClientMixin into their State must call super.build() but must ignore the return value of the superclass."))}}
A.P8.prototype={
zD(a,b){},
lh(a){A.ai2(this,new A.a9R(this,a))}}
A.a9R.prototype={
$1(a){var s=a.z
if(s!=null&&s.B(0,this.a))a.b3()},
$S:4}
A.a9Q.prototype={
$1(a){A.ai2(a,this.a)},
$S:4}
A.P9.prototype={
bD(a){var s=A.h9(t.h,t.X)
return new A.P8(s,this,B.a2)}}
A.eC.prototype={
bQ(a){return this.w!==a.w}}
A.nT.prototype={
aA(a){var s=this.e
s=new A.Hj(B.d.b2(A.Qv(s,0,1)*255),s,!1,null,A.ah())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.slk(0,this.e)
b.spO(!1)}}
A.qR.prototype={
aA(a){var s=new A.H7(this.e,this.f,this.r,!1,!1,null,A.ah())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.srm(this.e)
b.sGN(this.f)
b.srs(this.r)
b.ca=b.br=!1},
n5(a){a.srm(null)
a.sGN(null)}}
A.n2.prototype={
aA(a){var s=new A.H4(null,this.f,null,A.ah())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.smM(null)
b.sq_(this.f)},
n5(a){a.smM(null)}}
A.zA.prototype={
aA(a){var s=new A.H3(this.e,this.f,null,A.ah())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.smM(this.e)
b.sq_(this.f)},
n5(a){a.smM(null)}}
A.GC.prototype={
aA(a){var s=this,r=new A.Hm(s.e,s.r,s.w,s.y,s.x,null,s.f,null,A.ah())
r.aB()
r.saJ(null)
return r},
aE(a,b){var s=this
b.scS(0,s.e)
b.sq_(s.f)
b.sX6(0,s.r)
b.shC(0,s.w)
b.sar(0,s.x)
b.sfC(0,s.y)}}
A.GD.prototype={
aA(a){var s=this,r=new A.Hn(s.r,s.x,s.w,s.e,s.f,null,A.ah())
r.aB()
r.saJ(null)
return r},
aE(a,b){var s=this
b.smM(s.e)
b.sq_(s.f)
b.shC(0,s.r)
b.sar(0,s.w)
b.sfC(0,s.x)}}
A.oM.prototype={
aA(a){var s=this,r=A.dF(a),q=new A.Hw(s.w,null,A.ah())
q.aB()
q.saJ(null)
q.sbh(0,s.e)
q.sdV(s.r)
q.sbA(r)
q.sl7(s.x)
q.sI2(0,null)
return q},
aE(a,b){var s=this
b.sbh(0,s.e)
b.sI2(0,null)
b.sdV(s.r)
b.sbA(A.dF(a))
b.br=s.w
b.sl7(s.x)}}
A.CO.prototype={
aA(a){var s=new A.uq(this.e,this.f,A.dF(a),B.J,null,A.ah())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.sx5(this.e)
b.sdV(this.f)
b.sbA(A.dF(a))
if(B.J!==b.dD){b.dD=B.J
b.af()
b.aZ()}}}
A.D5.prototype={
aA(a){var s=new A.Hc(this.e,this.f,null,A.ah())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.sa1Y(this.e)
b.N=this.f}}
A.hp.prototype={
aA(a){var s=new A.Hk(this.e,A.dF(a),null,A.ah())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.sd3(0,this.e)
b.sbA(A.dF(a))}}
A.kx.prototype={
aA(a){var s=new A.Hp(this.f,this.r,this.e,A.dF(a),null,A.ah())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.sdV(this.e)
b.sa29(this.f)
b.sa_h(this.r)
b.sbA(A.dF(a))}}
A.jb.prototype={}
A.qS.prototype={
aA(a){var s=new A.H8(this.e,null,A.ah())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.sww(this.e)}}
A.rX.prototype={
mD(a){var s,r,q=a.e
q.toString
t.DU.a(q)
s=this.f
if(q.e!==s){q.e=s
r=a.c
if(r instanceof A.w)r.a2()}}}
A.qQ.prototype={
aA(a){var s=new A.H6(this.e,0,null,null,A.ah())
s.aB()
s.I(0,null)
return s},
aE(a,b){b.sww(this.e)}}
A.vc.prototype={
aA(a){return A.agR(A.mV(this.f,this.e))},
aE(a,b){b.sFl(A.mV(this.f,this.e))},
bP(){var s,r=this,q=r.e
if(q===1/0&&r.f===1/0)s="SizedBox.expand"
else s=q===0&&r.f===0?"SizedBox.shrink":"SizedBox"
q=r.a
return q==null?s:s+"-"+q.i(0)}}
A.fh.prototype={
aA(a){return A.agR(this.e)},
aE(a,b){b.sFl(this.e)}}
A.DK.prototype={
aA(a){var s=new A.Hf(this.e,this.f,null,A.ah())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.sa0o(0,this.e)
b.sa0l(0,this.f)}}
A.tO.prototype={
aA(a){var s=new A.Hi(this.e,null,A.ah())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.sra(this.e)},
bD(a){return new A.Mg(this,B.a2)}}
A.Mg.prototype={}
A.z6.prototype={
aA(a){var s=new A.H1(this.e,null,A.ah())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.sWX(0,this.e)}}
A.vm.prototype={
aA(a){var s=A.dF(a)
s=new A.uw(this.e,s,this.r,this.w,A.ah(),0,null,null,A.ah())
s.aB()
s.I(0,null)
return s},
aE(a,b){var s
b.sdV(this.e)
s=A.dF(a)
b.sbA(s)
s=this.r
if(b.ae!==s){b.ae=s
b.a2()}s=this.w
if(s!==b.aV){b.aV=s
b.af()
b.aZ()}}}
A.lC.prototype={
mD(a){var s,r,q,p=this,o=a.e
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
if(q instanceof A.w)q.a2()}}}
A.GN.prototype={
L(a){var s,r,q=this,p=null,o=a.a1(t.I)
o.toString
s=q.c
switch(o.w.a){case 0:r=p
break
case 1:r=s
s=p
break
default:s=p
r=s}return A.GM(q.f,q.x,p,p,r,s,q.d,q.r)}}
A.rp.prototype={
gTu(){switch(this.e.a){case 0:return!0
case 1:var s=this.w
return s===B.b8||s===B.Eq}},
rS(a){var s=this.x
s=this.gTu()?A.dF(a):null
return s},
aA(a){var s=this
return A.aq1(B.J,s.w,s.e,s.f,s.r,s.z,s.rS(a),s.y)},
aE(a,b){var s=this,r=s.e
if(b.K!==r){b.K=r
b.a2()}r=s.f
if(b.q!==r){b.q=r
b.a2()}r=s.r
if(b.H!==r){b.H=r
b.a2()}r=s.w
if(b.aq!==r){b.aq=r
b.a2()}r=s.rS(a)
if(b.ae!=r){b.ae=r
b.a2()}r=s.y
if(b.aV!==r){b.aV=r
b.a2()}if(B.J!==b.c9){b.c9=B.J
b.af()
b.aZ()}}}
A.HD.prototype={}
A.zG.prototype={}
A.CS.prototype={
mD(a){var s,r,q,p=a.e
p.toString
t.uc.a(p)
s=this.f
if(p.e!==s){p.e=s
r=!0}else r=!1
s=this.r
if(p.f!==s){p.f=s
r=!0}if(r){q=a.c
if(q instanceof A.w)q.a2()}}}
A.CI.prototype={}
A.Hy.prototype={
aA(a){var s,r,q,p=this,o=null,n=p.e,m=p.r
if(m==null){m=a.a1(t.I)
m.toString
m=m.w}s=p.x
r=A.acV(a)
q=s===B.c4?"\u2026":o
s=new A.us(A.a4Y(q,r,p.z,p.as,n,p.f,m,p.ax,p.y,p.at),p.w,s,p.ch,0,o,o,A.ah())
s.aB()
s.I(0,o)
s.um(n)
s.snW(p.ay)
return s},
aE(a,b){var s,r=this
b.srF(0,r.e)
b.syI(0,r.f)
s=r.r
if(s==null){s=a.a1(t.I)
s.toString
s=s.w}b.sbA(s)
b.sKn(r.w)
b.sa0M(0,r.x)
b.syJ(r.y)
b.sxJ(r.z)
b.sKx(r.as)
b.syK(r.at)
b.sIM(r.ax)
s=A.acV(a)
b.sxE(0,s)
b.snW(r.ay)
b.sJY(r.ch)}}
A.a0n.prototype={
$1(a){return!0},
$S:42}
A.GV.prototype={
aA(a){var s=this,r=s.d
r=r==null?null:r.cr(0)
r=new A.Hd(r,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.CW,!1,null,!1,A.ah())
r.aB()
r.W_()
return r},
aE(a,b){var s=this,r=s.d
b.sh5(0,r==null?null:r.cr(0))
b.aq=s.e
b.sbd(0,s.f)
b.sbG(0,s.r)
b.sJP(0,s.w)
b.sar(0,s.x)
b.slk(0,s.y)
b.sXE(s.Q)
b.sx5(s.as)
b.sdV(s.at)
b.sa1u(0,s.ax)
b.sXi(s.ay)
b.sa0j(!1)
b.sbA(null)
b.sxu(s.CW)
b.sxv(!1)
b.sl7(s.z)},
n5(a){a.sh5(0,null)}}
A.DL.prototype={
aA(a){var s=this,r=null,q=new A.Ho(s.e,r,s.r,r,s.x,s.y,r,r,s.as,s.at,r,A.ah())
q.aB()
q.saJ(r)
return q},
aE(a,b){var s=this
b.cs=s.e
b.bq=null
b.ag=s.r
b.aY=null
b.aQ=s.x
b.bv=s.y
b.bM=b.dB=null
b.aj=s.as
b.v=s.at}}
A.FN.prototype={
aA(a){var s=this,r=new A.Hh(!0,s.e,s.f,s.r,s.w,B.aw,null,A.ah())
r.aB()
r.saJ(null)
return r},
aE(a,b){var s,r=this
b.bq=r.e
b.ag=r.f
b.aY=r.r
s=r.w
if(!b.aQ.k(0,s)){b.aQ=s
b.af()}if(b.v!==B.aw){b.v=B.aw
b.af()}}}
A.fE.prototype={
aA(a){var s=new A.Hr(null,A.ah())
s.aB()
s.saJ(null)
return s}}
A.hc.prototype={
aA(a){var s=new A.ur(this.e,this.f,null,A.ah())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.sHf(this.e)
b.sxn(this.f)}}
A.yX.prototype={
aA(a){var s=new A.un(!1,null,null,A.ah())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.sFb(!1)
b.sxn(null)}}
A.v0.prototype={
aA(a){var s=this,r=new A.uu(s.e,s.f,s.r,!1,s.Cj(a),null,A.ah())
r.aB()
r.saJ(null)
r.EF(r.v)
return r},
Cj(a){var s,r=this.e,q=r.p4
if(q!=null)return q
if(r.fx==null){r=r.p2!=null
s=r}else s=!0
if(!s)return null
return A.dF(a)},
aE(a,b){var s=this
b.sXQ(s.f)
b.sZ9(s.r)
b.sZ7(!1)
b.sId(s.e)
b.sbA(s.Cj(a))}}
A.FI.prototype={
aA(a){var s=new A.Hg(null,A.ah())
s.aB()
s.saJ(null)
return s}}
A.zk.prototype={
aA(a){var s=new A.H2(!0,null,A.ah())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.sX5(!0)}}
A.rg.prototype={
aA(a){var s=new A.Hb(this.e,null,A.ah())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.sZ8(this.e)}}
A.rI.prototype={
aA(a){var s=new A.He(this.e,null,A.ah())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.sxo(0,this.e)}}
A.ij.prototype={
L(a){return this.c}}
A.fZ.prototype={
L(a){return this.c.$1(a)}}
A.qC.prototype={
aA(a){var s=new A.xa(this.e,B.aw,null,A.ah())
s.aB()
s.saJ(null)
return s},
aE(a,b){t.oZ.a(b).sar(0,this.e)}}
A.xa.prototype={
sar(a,b){if(b.k(0,this.cs))return
this.cs=b
this.af()},
aG(a,b){var s,r,q,p,o,n,m=this
if(m.k3.JM(0,B.P)){s=a.gbz(a)
r=m.k3
q=b.a
p=b.b
o=r.a
r=r.b
n=$.av().bf()
n.sar(0,m.cs)
s.c7(new A.y(q,p,q+o,p+r),n)}s=m.q$
if(s!=null)a.eq(s,b)}}
A.aa6.prototype={
$0(){var s,r,q=this,p=q.b
if(p==null||t.c.b(q.c)){p=q.a.ry$
p===$&&A.b()
p=p.e
p.toString
s=q.c
s=s.gbs(s)
r=A.amm()
p.bN(r,s)
p=r}return p},
$S:251}
A.aa7.prototype={
$1(a){var s=a==null?t.K.a(a):a
return this.a.iD(s)},
$S:315}
A.d_.prototype={
ij(){return A.bW(!1,t.y)},
n3(a){return A.bW(!1,t.y)},
YL(a){var s=a.a
s.toString
return this.n3(s)},
qb(){},
G8(){},
G7(){},
wz(a){},
G6(a){}}
A.w0.prototype={
WC(a){return this.ae$.push(a)},
ZI(){this.YP($.aE().a.f)},
YP(a){var s,r,q
for(s=this.ae$,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q)s[q].wz(a)},
qI(){var s=0,r=A.a8(t.H),q,p=this,o,n,m
var $async$qI=A.a9(function(a,b){if(a===1)return A.a5(b,r)
while(true)switch(s){case 0:o=A.ax(p.ae$,!0,t.nR),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.an(o[m].ij(),$async$qI)
case 6:if(b){s=1
break}case 4:++m
s=3
break
case 5:A.a4n()
case 1:return A.a6(q,r)}})
return A.a7($async$qI,r)},
qJ(a){return this.ZV(a)},
ZV(a){var s=0,r=A.a8(t.H),q,p=this,o,n,m
var $async$qJ=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)switch(s){case 0:o=A.ax(p.ae$,!0,t.nR),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.an(o[m].n3(a),$async$qJ)
case 6:if(c){s=1
break}case 4:++m
s=3
break
case 5:case 1:return A.a6(q,r)}})
return A.a7($async$qJ,r)},
oU(a){return this.Sf(a)},
Sf(a){var s=0,r=A.a8(t.H),q,p=this,o,n,m,l
var $async$oU=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)switch(s){case 0:o=A.ax(p.ae$,!0,t.nR),n=o.length,m=J.aO(a),l=0
case 3:if(!(l<n)){s=5
break}s=6
return A.an(o[l].YL(new A.od(A.cc(m.j(a,"location")),m.j(a,"state"))),$async$oU)
case 6:if(c){s=1
break}case 4:++l
s=3
break
case 5:case 1:return A.a6(q,r)}})
return A.a7($async$oU,r)},
RU(a){switch(a.a){case"popRoute":return this.qI()
case"pushRoute":return this.qJ(A.cc(a.b))
case"pushRouteInformation":return this.oU(t.G.a(a.b))}return A.bW(null,t.z)},
Rf(){this.wU()},
JQ(a){A.ch(B.t,new A.a5A(this,a))},
$iac:1,
$idd:1}
A.aa5.prototype={
$1(a){var s,r,q=$.bH
q.toString
s=this.a
r=s.a
r.toString
q.Iv(r)
s.a=null
this.b.bw$.fc(0)},
$S:78}
A.a5A.prototype={
$0(){var s,r,q=this.a,p=q.c9$
q.c2$=!0
s=q.ry$
s===$&&A.b()
s=s.e
s.toString
r=q.H$
r.toString
q.c9$=new A.lG(this.b,s,"[root]",new A.jn(s,t.l9),t.go).WY(r,t.jv.a(p))
if(p==null)$.bH.wU()},
$S:0}
A.lG.prototype={
bD(a){return new A.jP(this,B.a2,this.$ti.h("jP<1>"))},
aA(a){return this.d},
aE(a,b){},
WY(a,b){var s,r={}
r.a=b
if(b==null){a.HN(new A.a_N(r,this,a))
s=r.a
s.toString
a.pT(s,new A.a_O(r))}else{b.bg=this
b.fo()}r=r.a
r.toString
return r},
bP(){return this.e}}
A.a_N.prototype={
$0(){var s=this.b,r=A.aq2(s,s.$ti.c)
this.a.a=r
r.r=this.c},
$S:0}
A.a_O.prototype={
$0(){var s=this.a.a
s.toString
s.At(null,null)
s.pg()},
$S:0}
A.jP.prototype={
aR(a){var s=this.aS
if(s!=null)a.$1(s)},
iB(a){this.aS=null
this.ka(a)},
eN(a,b){this.At(a,b)
this.pg()},
b8(a,b){this.lS(0,b)
this.pg()},
hf(){var s=this,r=s.bg
if(r!=null){s.bg=null
s.lS(0,s.$ti.h("lG<1>").a(r))
s.pg()}s.As()},
pg(){var s,r,q,p,o,n,m,l=this
try{o=l.aS
n=l.f
n.toString
l.aS=l.dq(o,l.$ti.h("lG<1>").a(n).c,B.my)}catch(m){s=A.au(m)
r=A.aG(m)
o=A.bj("attaching to the render tree")
q=new A.bt(s,r,"widgets library",o,null,!1)
A.dr(q)
p=A.Vg(q)
l.aS=l.dq(null,p,B.my)}},
ga5(){return this.$ti.h("ay<1>").a(A.bs.prototype.ga5.call(this))},
iG(a,b){var s=this.$ti
s.h("ay<1>").a(A.bs.prototype.ga5.call(this)).saJ(s.c.a(a))},
iJ(a,b,c){},
iQ(a,b){this.$ti.h("ay<1>").a(A.bs.prototype.ga5.call(this)).saJ(null)}}
A.Jg.prototype={$iac:1}
A.yb.prototype={
em(){this.KB()
$.dZ=this
var s=$.aE()
s.Q=this.gS0()
s.as=$.ai},
yS(){this.KE()
this.ur()}}
A.yc.prototype={
em(){this.NF()
$.bH=this},
hJ(){this.KC()}}
A.yd.prototype={
em(){var s,r,q,p,o=this
o.NH()
$.fI=o
o.bb$!==$&&A.ey()
o.bb$=B.DC
s=new A.uB(A.b8(t.hp),$.bq())
B.ih.lG(s.gTo())
o.c8$=s
s=t.F3
r=new A.Wy(A.z(s,t.lT),A.b8(t.vQ),A.a([],t.AV))
o.aS$!==$&&A.ey()
o.aS$=r
q=$.abZ()
p=A.a([],t.DG)
o.bg$!==$&&A.ey()
s=o.bg$=new A.DD(r,q,p,A.b8(s))
p=$.aE()
p.at=s.gZE()
p.ax=$.ai
B.Cj.t8(s.gZX())
s=$.agb
if(s==null)s=$.agb=A.a([],t.e8)
s.push(o.gOs())
B.Cl.t8(new A.aa7(o))
B.Ck.t8(o.gRQ())
B.bX.lG(o.gRZ())
$.aks()
o.a1a()},
hJ(){this.NI()}}
A.ye.prototype={
em(){this.NJ()
$.fB=this
var s=t.K
this.hD$=new A.WY(A.z(s,t.fx),A.z(s,t.lM),A.z(s,t.s8))},
nr(){this.MJ()
var s=this.hD$
s===$&&A.b()
s.U(0)},
iD(a){return this.a_2(a)},
a_2(a){var s=0,r=A.a8(t.H),q,p=this
var $async$iD=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)switch(s){case 0:s=3
return A.an(p.MK(a),$async$iD)
case 3:switch(A.cc(J.bb(t.a.a(a),"type"))){case"fontsChange":p.wW$.aw()
break}s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$iD,r)}}
A.yf.prototype={
em(){this.NM()
$.a1z=this
this.dB$=$.aE().a.a}}
A.yg.prototype={
em(){var s,r,q,p,o=this
o.NN()
$.jQ=o
s=t.By
o.ry$=new A.GF(o.gZ1(),o.gSu(),o.gSy(),o.gSw(),A.a([],s),A.a([],s),A.a([],s),A.b8(t.d))
s=$.aE()
s.f=o.gZK()
r=s.r=$.ai
s.fy=o.ga_b()
s.go=r
s.k2=o.gZQ()
s.k3=r
s.p1=o.gSs()
s.p2=r
s.p3=o.gSq()
s.p4=r
r=new A.ux(B.P,o.G0(),$.cd(),null,A.ah())
r.aB()
r.saJ(null)
q=o.ry$
q===$&&A.b()
q.sa1F(r)
r=o.ry$.e
r.Q=r
q=t.W
q.a(A.F.prototype.gbm.call(r)).r.push(r)
p=r.ES()
r.ch.saD(0,p)
q.a(A.F.prototype.gbm.call(r)).z.push(r)
o.Kd(s.a.c)
o.at$.push(o.gRX())
s=o.rx$
if(s!=null)s.m()
s=t.S
r=$.bq()
o.rx$=new A.FO(new A.YB(B.ls,A.z(s,t.Df)),A.z(s,t.eg),r)
o.ax$.push(o.gSL())},
hJ(){this.NK()},
wK(a,b,c){this.rx$.a26(b,new A.aa6(this,c,b))
this.L3(0,b,c)},
hP(){var s=0,r=A.a8(t.H),q=[],p=this,o
var $async$hP=A.a9(function(a,b){if(a===1)return A.a5(b,r)
while(true)switch(s){case 0:s=2
return A.an(p.KD(),$async$hP)
case 2:o=$.af8
if((o==null?null:o.a)==null)try{o=p.ry$
o===$&&A.b()
o.e.er()}finally{}p.t1()
s=3
return A.an(p.gGt(),$async$hP)
case 3:return A.a6(null,r)}})
return A.a7($async$hP,r)}}
A.yh.prototype={
hJ(){this.NP()},
xd(){var s,r,q
this.Mf()
for(s=this.ae$,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q)s[q].qb()},
xj(){var s,r,q
this.Mh()
for(s=this.ae$,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q)s[q].G8()},
xf(){var s,r,q
this.Mg()
for(s=this.ae$,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q)s[q].G7()},
qG(a){var s,r,q
this.Mw(a)
for(s=this.ae$,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q)s[q].G6(a)},
nr(){var s,r
this.NL()
for(s=this.ae$.length,r=0;r<s;++r);},
wP(){var s,r,q=this,p={}
p.a=null
if(q.aV$){s=new A.aa5(p,q)
p.a=s
$.bH.WL(s)}try{r=q.c9$
if(r!=null)q.H$.Xb(r)
q.Me()
q.H$.Zd()}finally{}r=q.aV$=!1
p=p.a
if(p!=null)r=!(q.xr$||q.x2$===0)
if(r){q.aV$=!0
r=$.bH
r.toString
p.toString
r.Iv(p)}},
hP(){var s=this.c9$
if(s!=null)this.H$.a1f(s,$.af8)
return this.NQ()}}
A.BG.prototype={
aA(a){var s=new A.H9(this.e,this.f,A.aeh(a,null),null,A.ah())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.sYy(this.e)
b.swi(A.aeh(a,null))
b.sbs(0,this.f)}}
A.n7.prototype={
gTS(){var s,r=this.r
if(r==null||r.gd3(r)==null)return this.e
s=r.gd3(r)
r=this.e
if(r==null)return s
s.toString
return r.E(0,s)},
L(a){var s,r,q=this,p=null,o=q.c
if(o==null){s=q.x
if(s!=null)s=!(s.a>=s.b&&s.c>=s.d)
else s=!0}else s=!1
if(s)o=A.aoo(new A.fh(B.m3,p,p),0,0)
else{s=q.d
if(s!=null)o=new A.kx(s,p,p,o,p)}r=q.gTS()
if(r!=null)o=new A.hp(r,o,p)
s=q.f
if(s!=null)o=new A.qC(s,o,p)
s=q.r
if(s!=null)o=A.afx(o,s,B.hi)
s=q.x
if(s!=null)o=new A.fh(s,o,p)
s=q.y
if(s!=null)o=new A.hp(s,o,p)
o.toString
return o}}
A.nc.prototype={
bQ(a){return!J.f(this.w,a.w)||!J.f(this.x,a.x)}}
A.Mb.prototype={
L(a){throw A.d(A.ru("A DefaultSelectionStyle constructed with DefaultSelectionStyle.fallback cannot be incorporated into the widget tree, it is meant only to provide a fallback value returned by DefaultSelectionStyle.of() when no enclosing default selection style is present in a BuildContext."))}}
A.BO.prototype={
QI(){var s=$.ak7()
return s},
L(a){var s=this.c,r=this.QI()
if(r!=null)s=A.adj(s,"<Web Disabling Text Editing Shortcuts>",r)
return A.adj(s,"<Default Text Editing Shortcuts>",A.an6())}}
A.BX.prototype={
gaN(a){var s=this.a
if(s==null)return null
s=s.c
s.toString
return s}}
A.nf.prototype={
ao(){return new A.wn(A.GR(null),A.GR(null),B.l)},
Zt(a,b,c){return this.d.$3(a,b,c)},
a1C(a,b,c){return this.e.$3(a,b,c)}}
A.wn.prototype={
aC(){var s,r=this
r.aT()
s=r.a.c
r.d=s.gb0(s)
r.a.c.cX(r.gtI())
r.EE()},
B_(a){var s,r=this,q=r.d
q===$&&A.b()
s=r.OW(a,q)
r.d=s
if(q!==s)r.EE()},
aX(a){var s,r,q=this
q.bo(a)
s=a.c
if(s!==q.a.c){r=q.gtI()
s.bZ(r)
q.a.c.cX(r)
r=q.a.c
q.B_(r.gb0(r))}},
OW(a,b){switch(a.a){case 0:case 3:return a
case 1:switch(b.a){case 0:case 3:case 1:return a
case 2:return b}break
case 2:switch(b.a){case 0:case 3:case 2:return a
case 1:return b}break}},
EE(){var s=this,r=s.d
r===$&&A.b()
switch(r.a){case 0:case 1:s.e.saW(0,s.a.c)
s.f.saW(0,B.cb)
break
case 2:case 3:s.e.saW(0,B.cT)
s.f.saW(0,new A.eq(s.a.c,new A.bd(A.a([],t.A),t.Q),0))
break}},
m(){this.a.c.bZ(this.gtI())
this.aL()},
L(a){var s=this.a
return s.Zt(a,this.e,s.a1C(a,this.f,s.f))}}
A.ii.prototype={
D(){return"KeyEventResult."+this.b}}
A.JB.prototype={}
A.VI.prototype={
ad(a){var s,r=this.a
if(r.ax===this){if(!r.giE()){s=r.w
s=s!=null&&s.w===r}else s=!0
if(s)r.J0(B.BN)
s=r.w
if(s!=null){if(s.f===r)s.f=null
s.r.A(0,r)}s=r.Q
if(s!=null)s.Uz(0,r)
r.ax=null}},
yC(a){var s,r=this.a
if(r.ax===this){s=r.e
s.toString
a=A.anX(s,!0);(a==null?r.e.r.f.e:a).vf(r)}},
Iw(){return this.yC(null)}}
A.vV.prototype={
D(){return"UnfocusDisposition."+this.b}}
A.ct.prototype={
gdP(){var s,r,q
if(this.a)return!0
for(s=this.gf9(),r=s.length,q=0;q<r;++q)s[q].toString
return!1},
sdP(a){var s,r=this
if(a!==r.a){r.a=a
s=r.w
if(s!=null){s.p6()
s.r.E(0,r)}}},
gcd(){var s,r,q,p
if(!this.b)return!1
s=this.gdh()
if(s!=null&&!s.gcd())return!1
for(r=this.gf9(),q=r.length,p=0;p<q;++p)r[p].toString
return!0},
scd(a){var s,r=this
if(a!==r.b){r.b=a
if(r.gjD()&&!a)r.J0(B.BN)
s=r.w
if(s!=null){s.p6()
s.r.E(0,r)}}},
skM(a){return},
skN(a){},
gmY(){var s,r,q,p,o=this.y
if(o==null){s=A.a([],t.i4)
for(o=this.as,r=o.length,q=0;q<o.length;o.length===r||(0,A.R)(o),++q){p=o[q]
B.b.I(s,p.gmY())
s.push(p)}this.y=s
o=s}return o},
go2(){var s=this.gmY()
return new A.aF(s,new A.VJ(),A.aj(s).h("aF<1>"))},
gf9(){var s,r,q=this.x
if(q==null){s=A.a([],t.i4)
r=this.Q
for(;r!=null;){s.push(r)
r=r.Q}this.x=s
q=s}return q},
gjD(){if(!this.giE()){var s=this.w
if(s==null)s=null
else{s=s.f
s=s==null?null:B.b.B(s.gf9(),this)}s=s===!0}else s=!0
return s},
giE(){var s=this.w
return(s==null?null:s.f)===this},
gjK(){return this.gdh()},
gdh(){var s,r,q,p
for(s=this.gf9(),r=s.length,q=0;q<r;++q){p=s[q]
if(p instanceof A.kY)return p}return null},
gaK(a){var s,r=this.e.ga5(),q=r.bt(0,null),p=r.gj0(),o=A.ce(q,new A.t(p.a,p.b))
p=r.bt(0,null)
q=r.gj0()
s=A.ce(p,new A.t(q.c,q.d))
return new A.y(o.a,o.b,s.a,s.b)},
J0(a){var s,r,q=this
if(!q.gjD()){s=q.w
s=s==null||s.w!==q}else s=!1
if(s)return
r=q.gdh()
if(r==null)return
switch(a.a){case 0:if(r.gcd())B.b.U(r.dy)
for(;!r.gcd();){r=r.gdh()
if(r==null){s=q.w
r=s==null?null:s.e}}r.i3(!1)
break
case 1:if(r.gcd())B.b.A(r.dy,q)
for(;!r.gcd();){s=r.gdh()
if(s!=null)B.b.A(s.dy,r)
r=r.gdh()
if(r==null){s=q.w
r=s==null?null:s.e}}r.i3(!0)
break}},
D_(a){var s=this,r=s.w
if(r!=null){if(r.f===s)r.w=null
else{r.w=s
r.p6()}return}a.ky()
a.v2()
if(a!==s)s.v2()},
Dy(a,b,c){var s,r,q
if(c){s=b.gdh()
if(s!=null)B.b.A(s.dy,b)}b.Q=null
B.b.A(this.as,b)
for(s=this.gf9(),r=s.length,q=0;q<r;++q)s[q].y=null
this.y=null},
Uz(a,b){return this.Dy(a,b,!0)},
W4(a){var s,r,q,p
this.w=a
for(s=this.gmY(),r=s.length,q=0;q<r;++q){p=s[q]
p.w=a
p.x=null}},
vf(a){var s,r,q,p,o,n=this
if(a.Q===n)return
s=a.gdh()
r=a.gjD()
q=a.Q
if(q!=null)q.Dy(0,a,s!=n.gjK())
n.as.push(a)
a.Q=n
a.x=null
a.W4(n.w)
for(q=a.gf9(),p=q.length,o=0;o<p;++o)q[o].y=null
if(r){q=n.w
if(q!=null){q=q.f
if(q!=null)q.ky()}}if(s!=null&&a.e!=null&&a.gdh()!==s){q=a.e
q.toString
q=A.afQ(q)
if(q!=null)q.wf(a,s)}if(a.ay){a.i3(!0)
a.ay=!1}},
m(){var s=this.ax
if(s!=null)s.ad(0)
this.dt()},
v2(){var s=this
if(s.Q==null)return
if(s.giE())s.ky()
s.aw()},
rC(){this.i3(!0)},
i3(a){var s,r=this
if(!r.gcd())return
if(r.Q==null){r.ay=!0
return}r.ky()
if(r.giE()){s=r.w.w
s=s==null||s===r}else s=!1
if(s)return
r.D_(r)},
ky(){var s,r,q,p,o,n
for(s=B.b.ga7(this.gf9()),r=new A.oT(s,t.oj),q=t.j5,p=this;r.t();p=o){o=q.a(s.gG(s))
n=o.dy
B.b.A(n,p)
n.push(p)}},
bP(){var s,r,q,p=this
p.gjD()
s=p.gjD()&&!p.giE()?"[IN FOCUS PATH]":""
r=s+(p.giE()?"[PRIMARY FOCUS]":"")
s=A.bB(p)
q=r.length!==0?"("+r+")":""
return"<optimized out>#"+s+q},
$ia1:1}
A.VJ.prototype={
$1(a){return!a.gdP()&&a.gcd()},
$S:10}
A.kY.prototype={
gjK(){return this},
go2(){if(!this.gcd())return B.CO
return A.ct.prototype.go2.call(this)},
lF(a){if(a.Q==null)this.vf(a)
if(this.gjD())a.i3(!0)
else a.ky()},
i3(a){var s,r,q=this,p=q.dy
while(!0){if((p.length!==0?B.b.gT(p):null)!=null)s=!(p.length!==0?B.b.gT(p):null).gcd()
else s=!1
if(!s)break
p.pop()}r=p.length!==0?B.b.gT(p):null
if(!a||r==null){if(q.gcd()){q.ky()
q.D_(q)}return}r.i3(!0)}}
A.ic.prototype={
D(){return"FocusHighlightMode."+this.b}}
A.D_.prototype={
D(){return"FocusHighlightStrategy."+this.b}}
A.rv.prototype={
ER(){var s,r,q=this
switch(0){case 0:s=q.c
if(s==null)return
r=s?B.ho:B.dZ
break}s=q.b
if(s==null)s=A.D0()
q.b=r
if((r==null?A.D0():r)!==s)q.Ty()},
Ty(){var s,r,q,p,o,n,m,l,k,j=this,i=j.d,h=i.a
if(h.a===0)return
p=A.ax(i,!0,t.tP)
for(i=p.length,o=0;o<i;++o){s=p[o]
try{if(h.V(0,s)){n=j.b
if(n==null)n=A.D0()
s.$1(n)}}catch(m){r=A.au(m)
q=A.aG(m)
l=j instanceof A.bQ?A.cL(j):null
n=A.bj("while dispatching notifications for "+A.az(l==null?A.aI(j):l).i(0))
k=$.fb()
if(k!=null)k.$1(new A.bt(r,q,"widgets library",n,null,!1))}}},
Qu(a){var s,r,q=this
switch(a.gc3(a).a){case 0:case 2:case 3:q.c=!0
s=B.ho
break
case 1:case 4:case 5:q.c=!1
s=B.dZ
break
default:s=null}r=q.b
if(s!==(r==null?A.D0():r))q.ER()},
RP(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.c=!1
i.ER()
s=i.f
if(s==null)return!1
s=A.a([s],t.i4)
B.b.I(s,i.f.gf9())
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
switch(A.atQ(k).a){case 1:break c$1
case 0:r=!0
break
case 2:r=!1
break
default:r=!1}break}s.length===q||(0,A.R)(s);++m}return r},
p6(){if(this.y)return
this.y=!0
A.f9(this.gOF())},
OG(){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.y=!1
s=h.f
for(r=h.x,q=r.length,p=h.e,o=0;o<r.length;r.length===q||(0,A.R)(r),++o){n=r[o]
m=n.a
if(m.Q!=null||m===p)if(m.w===h){l=m.dy
m=(l.length!==0?B.b.gT(l):null)==null&&B.b.B(n.b.gf9(),m)
k=m}else k=!1
else k=!1
if(k)n.b.i3(!0)}B.b.U(r)
r=h.f
if(r==null&&h.w==null)h.w=p
q=h.w
if(q!=null&&q!==r){if(s==null)j=null
else{r=s.gf9()
r=A.t_(r,A.aj(r).c)
j=r}if(j==null)j=A.b8(t.lc)
r=h.w.gf9()
i=A.t_(r,A.aj(r).c)
r=h.r
r.I(0,i.js(j))
r.I(0,j.js(i))
r=h.f=h.w
h.w=null}if(s!=r){if(s!=null)h.r.E(0,s)
r=h.f
if(r!=null)h.r.E(0,r)}for(r=h.r,q=A.iR(r,r.r),p=A.o(q).c;q.t();){m=q.d;(m==null?p.a(m):m).v2()}r.U(0)
if(s!=h.f)h.aw()},
$ia1:1}
A.KY.prototype={}
A.KZ.prototype={}
A.L_.prototype={}
A.L0.prototype={}
A.kX.prototype={
gI_(){var s=this.w,r=this.e
s=r==null?null:r.r
return s},
gy6(){var s=this.x
if(s==null){s=this.e
s=s==null?null:s.f}return s},
gcd(){var s=this.y
if(s==null){s=this.e
s=s==null?null:s.gcd()}return s!==!1},
gdP(){var s=this.z
if(s==null){s=this.e
s=s==null?null:s.gdP()}return s===!0},
gkM(){var s=this.Q
if(s==null)s=this.e!=null||null
return s!==!1},
gkN(){var s=this.as
if(s==null)s=this.e!=null||null
return s!==!1},
gkL(){var s=this.ax
if(s==null){s=this.e
s=s==null?null:s.at}return s},
ao(){return A.arq()}}
A.p7.prototype={
gbO(a){var s=this.a.e
if(s==null){s=this.d
s.toString}return s},
aC(){this.aT()
this.CH()},
CH(){var s,r,q,p=this
if(p.a.e==null)if(p.d==null)p.d=p.BF()
s=p.gbO(p)
p.a.gkM()
s.skM(!0)
s=p.gbO(p)
p.a.gkN()
s.skN(!0)
p.a.gdP()
p.gbO(p).sdP(p.a.gdP())
if(p.a.y!=null){s=p.gbO(p)
r=p.a.y
r.toString
s.scd(r)}p.f=p.gbO(p).gcd()
p.gbO(p)
p.r=!0
p.gbO(p)
p.w=!0
p.e=p.gbO(p).giE()
s=p.gbO(p)
r=p.c
r.toString
p.a.gI_()
q=p.a.gy6()
s.e=r
s.f=q==null?s.f:q
r=s.r
s.r=r
p.y=s.ax=new A.VI(s)
p.gbO(p).S(0,p.guE())},
BF(){var s=this,r=s.a.gkL(),q=s.a.gcd()
s.a.gkM()
s.a.gkN()
return A.acC(q,r,!0,!0,null,null,s.a.gdP())},
m(){var s,r=this
r.gbO(r).F(0,r.guE())
r.y.ad(0)
s=r.d
if(s!=null)s.m()
r.aL()},
b3(){this.cl()
var s=this.y
if(s!=null)s.Iw()
this.Co()},
Co(){var s,r,q,p=this
if(!p.x&&p.a.f){s=p.c
s.toString
s=A.anW(s)
r=p.gbO(p)
if(r.Q==null)s.vf(r)
q=s.w
if(q!=null)q.x.push(new A.JB(s,r))
s=s.w
if(s!=null)s.p6()
p.x=!0}},
d0(){this.lU()
var s=this.y
if(s!=null)s.Iw()
this.x=!1},
aX(a){var s,r,q=this
q.bo(a)
s=a.e
r=q.a
if(s==r.e){if(!J.f(r.gy6(),q.gbO(q).f))q.gbO(q).f=q.a.gy6()
q.a.gI_()
q.gbO(q)
q.a.gdP()
q.gbO(q).sdP(q.a.gdP())
if(q.a.y!=null){s=q.gbO(q)
r=q.a.y
r.toString
s.scd(r)}s=q.gbO(q)
q.a.gkM()
s.skM(!0)
s=q.gbO(q)
q.a.gkN()
s.skN(!0)}else{q.y.ad(0)
if(s!=null)s.F(0,q.guE())
q.CH()}if(a.f!==q.a.f)q.Co()},
RJ(){var s,r=this,q=r.gbO(r).giE(),p=r.gbO(r).gcd()
r.gbO(r)
r.gbO(r)
s=r.a.r
if(s!=null)s.$1(r.gbO(r).gjD())
s=r.e
s===$&&A.b()
if(s!==q)r.az(new A.a6K(r,q))
s=r.f
s===$&&A.b()
if(s!==p)r.az(new A.a6L(r,p))
s=r.r
s===$&&A.b()
if(!s)r.az(new A.a6M(r,!0))
s=r.w
s===$&&A.b()
if(!s)r.az(new A.a6N(r,!0))},
L(a){var s,r,q=this,p=null,o=q.y
o.toString
o.yC(q.a.c)
o=q.a
s=o.d
if(o.at){o=q.f
o===$&&A.b()
r=q.e
r===$&&A.b()
s=A.dv(p,s,!1,p,!1,o,r,p,p,p,p,p,p,p,p,p,p,p,p,p)}return A.ahO(s,q.gbO(q))}}
A.a6K.prototype={
$0(){this.a.e=this.b},
$S:0}
A.a6L.prototype={
$0(){this.a.f=this.b},
$S:0}
A.a6M.prototype={
$0(){this.a.r=this.b},
$S:0}
A.a6N.prototype={
$0(){this.a.w=this.b},
$S:0}
A.D1.prototype={
ao(){return new A.L1(B.l)}}
A.L1.prototype={
BF(){var s=this.a.gkL()
return A.acD(this.a.gcd(),s,this.a.gdP())},
L(a){var s=this,r=null,q=s.y
q.toString
q.yC(s.a.c)
q=s.gbO(s)
return A.dv(r,A.ahO(s.a.d,q),!1,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)}}
A.wr.prototype={}
A.aaA.prototype={
$1(a){var s=this.a
if(--s.a===0){s.b=a
return!1}return!0},
$S:34}
A.p8.prototype={}
A.ma.prototype={
D(){return"TraversalDirection."+this.b}}
A.D2.prototype={
C2(a,b,c){var s,r=a.gjK(),q=r.dy,p=q.length!==0?B.b.gT(q):null
q=p==null&&r.gmY().length!==0
if(q){s=this.Ed(r,a)
if(s.length===0)p=null
else p=b?B.b.gT(s):B.b.gJ(s)}return p==null?a:p},
Qk(a,b){return this.C2(a,!1,b)},
a_J(a){},
wf(a,b){},
QQ(a){var s
if(a==null)s=null
else{s=a.iX(t.AB)
if(s==null)s=null
else{s=s.f
s.toString}}return t.fc.a(s)},
Ed(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=this.QQ(a.e),c=d==null,b=c?e:d.f
if(b==null)b=new A.uk(A.z(t.j5,t.uJ))
s=A.z(t.k_,t.hF)
for(r=a.gmY(),q=r.length,p=t.fc,o=t.AB,n=t.i4,m=0;m<r.length;r.length===q||(0,A.R)(r),++m){l=r[m]
k=l.e
if(k==null)k=e
else{k=k.y
j=k==null?e:k.j(0,A.az(o))
if(j==null)k=e
else{k=j.f
k.toString}}p.a(k)
i=k==null?e:k.r
if(J.f(l,i)){k=i.e
k.toString
h=A.aiF(k,2)
if(h==null)k=e
else{k=h.y
j=k==null?e:k.j(0,A.az(o))
if(j==null)k=e
else{k=j.f
k.toString}}p.a(k)
g=k==null?e:k.r
if(s.j(0,g)==null)s.l(0,g,A.ahP(k,b,A.a([],n)))
s.j(0,g).c.push(i)
continue}if(l.gcd()&&!l.gdP()){if(s.j(0,i)==null)s.l(0,i,A.ahP(k,b,A.a([],n)))
s.j(0,i).c.push(l)}}for(r=A.il(s,s.r);r.t();){q=r.d
p=s.j(0,q).b.Ko(s.j(0,q).c,a0)
p=A.a(p.slice(0),A.aj(p))
B.b.U(s.j(0,q).c)
B.b.I(s.j(0,q).c,p)}f=A.a([],n)
if(s.a!==0)r=s.V(0,c?e:d.r)
else r=!1
if(r){r=s.j(0,c?e:d.r)
r.toString
new A.VL(s,f).$1(r)}if(!!f.fixed$length)A.a_(A.W("removeWhere"))
B.b.ve(f,new A.VK(),!0)
return f},
D4(a,b){var s,r,q,p,o,n,m=this,l=a.gjK()
l.toString
m.kb(l)
m.nj$.A(0,l)
s=l.dy
r=s.length!==0?B.b.gT(s):null
if(r==null){q=b?m.Qk(a,!1):m.C2(a,!0,!1)
A.kj(q,b?B.cE:B.cF)
return!0}p=m.Ed(l,a)
if(p.length===0)return!1
if(b&&r===B.b.gT(p)){A.kj(B.b.gJ(p),B.cE)
return!0}if(!b&&r===B.b.gJ(p)){A.kj(B.b.gT(p),B.cF)
return!0}for(l=J.as(b?p:new A.cA(p,A.aj(p).h("cA<1>"))),o=null;l.t();o=n){n=l.gG(l)
if(o==r){l=b?B.cE:B.cF
n.rC()
s=n.e
s.toString
A.ah4(s,1,l)
return!0}}return!1}}
A.VL.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=a.c,r=s.length,q=this.b,p=this.a,o=0;o<s.length;s.length===r||(0,A.R)(s),++o){n=s[o]
if(p.V(0,n)){m=p.j(0,n)
m.toString
this.$1(m)}else q.push(n)}},
$S:255}
A.VK.prototype={
$1(a){return!a.gcd()||a.gdP()},
$S:10}
A.p2.prototype={}
A.Kt.prototype={}
A.SI.prototype={
Zf(a,b){var s=this
switch(b.a){case 0:return s.pp(a,!1,!0)
case 2:return s.pp(a,!0,!0)
case 3:return s.pp(a,!1,!1)
case 1:return s.pp(a,!0,!1)}},
pp(a,b,c){var s=a.gjK().go2().dK(0)
A.mH(s,new A.SQ(c,b),t.lc)
if(s.length!==0)return B.b.gJ(s)
return null},
Vu(a,b,c){var s,r=c.go2().dK(0)
A.mH(r,new A.SK(),t.lc)
switch(a.a){case 3:s=new A.aF(r,new A.SL(b),A.aj(r).h("aF<1>"))
break
case 1:s=new A.aF(r,new A.SM(b),A.aj(r).h("aF<1>"))
break
case 0:case 2:s=null
break
default:s=null}return s},
Vv(a,b,c){var s=c.dK(0)
A.mH(s,new A.SN(),t.lc)
switch(a.a){case 0:return new A.aF(s,new A.SO(b),A.aj(s).h("aF<1>"))
case 2:return new A.aF(s,new A.SP(b),A.aj(s).h("aF<1>"))
case 3:case 1:break}return null},
Uj(a,b,c){var s,r,q=this,p=q.nj$,o=p.j(0,b),n=o!=null
if(n){s=o.a
s=s.length!==0&&B.b.gJ(s).a!==a}else s=!1
if(s){s=o.a
if(B.b.gT(s).b.Q==null){q.kb(b)
p.A(0,b)
return!1}r=new A.SJ(q,o,b)
switch(a.a){case 2:case 0:switch(B.b.gJ(s).a.a){case 3:case 1:q.kb(b)
p.A(0,b)
break
case 0:case 2:if(r.$1(a))return!0
break}break
case 3:case 1:switch(B.b.gJ(s).a.a){case 3:case 1:if(r.$1(a))return!0
break
case 0:case 2:q.kb(b)
p.A(0,b)
break}break}}if(n&&o.a.length===0){q.kb(b)
p.A(0,b)}return!1},
a_v(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=a.gjK(),f=g.dy,e=f.length!==0?B.b.gT(f):h
if(e==null){s=i.Zf(a,b)
if(s==null)s=a
switch(b.a){case 0:case 3:A.kj(s,B.cF)
break
case 1:case 2:A.kj(s,B.cE)
break}return!0}if(i.Uj(b,g,e))return!0
f=e.e
f.toString
r=A.hC(f)
f=b.a
switch(f){case 2:case 0:q=i.Vv(b,e.gaK(e),g.go2())
if(r!=null&&!r.d.gFt()){q.toString
p=new A.aF(q,new A.SR(r),q.$ti.h("aF<p.E>"))
if(!p.gP(p))q=p}if(!q.ga7(q).t()){o=h
break}n=A.ax(q,!0,A.o(q).h("p.E"))
if(b===B.Yp){m=A.aj(n).h("cA<1>")
n=A.ax(new A.cA(n,m),!0,m.h("bk.E"))}l=new A.aF(n,new A.SS(new A.y(e.gaK(e).a,-1/0,e.gaK(e).c,1/0)),A.aj(n).h("aF<1>"))
if(!l.gP(l)){o=l.gJ(l)
break}A.mH(n,new A.ST(e),t.lc)
o=B.b.gJ(n)
break
case 1:case 3:q=i.Vu(b,e.gaK(e),g)
if(r!=null&&!r.d.gFt()){q.toString
p=new A.aF(q,new A.SU(r),q.$ti.h("aF<p.E>"))
if(!p.gP(p))q=p}if(!q.ga7(q).t()){o=h
break}n=A.ax(q,!0,A.o(q).h("p.E"))
if(b===B.Yq){m=A.aj(n).h("cA<1>")
n=A.ax(new A.cA(n,m),!0,m.h("bk.E"))}l=new A.aF(n,new A.SV(new A.y(-1/0,e.gaK(e).b,1/0,e.gaK(e).d)),A.aj(n).h("aF<1>"))
if(!l.gP(l)){o=l.gJ(l)
break}A.mH(n,new A.SW(e),t.lc)
o=B.b.gJ(n)
break
default:o=h}if(o!=null){m=i.nj$
k=m.j(0,g)
j=new A.p2(b,e)
if(k!=null)k.a.push(j)
else m.l(0,g,new A.Kt(A.a([j],t.gE)))
switch(f){case 0:case 3:A.kj(o,B.cF)
break
case 2:case 1:A.kj(o,B.cE)
break}return!0}return!1}}
A.a8G.prototype={
$1(a){return a.b===this.a},
$S:256}
A.SQ.prototype={
$2(a,b){if(this.a)if(this.b)return B.d.b1(a.gaK(a).b,b.gaK(b).b)
else return B.d.b1(b.gaK(b).d,a.gaK(a).d)
else if(this.b)return B.d.b1(a.gaK(a).a,b.gaK(b).a)
else return B.d.b1(b.gaK(b).c,a.gaK(a).c)},
$S:28}
A.SK.prototype={
$2(a,b){return B.d.b1(a.gaK(a).gaU().a,b.gaK(b).gaU().a)},
$S:28}
A.SL.prototype={
$1(a){var s=this.a
return!a.gaK(a).k(0,s)&&a.gaK(a).gaU().a<=s.a},
$S:10}
A.SM.prototype={
$1(a){var s=this.a
return!a.gaK(a).k(0,s)&&a.gaK(a).gaU().a>=s.c},
$S:10}
A.SN.prototype={
$2(a,b){return B.d.b1(a.gaK(a).gaU().b,b.gaK(b).gaU().b)},
$S:28}
A.SO.prototype={
$1(a){var s=this.a
return!a.gaK(a).k(0,s)&&a.gaK(a).gaU().b<=s.b},
$S:10}
A.SP.prototype={
$1(a){var s=this.a
return!a.gaK(a).k(0,s)&&a.gaK(a).gaU().b>=s.d},
$S:10}
A.SJ.prototype={
$1(a){var s,r,q=this.b.a.pop().b,p=q.e
p.toString
p=A.hC(p)
s=$.ad.H$.f.f.e
s.toString
if(p!=A.hC(s)){p=this.a
s=this.c
p.kb(s)
p.nj$.A(0,s)
return!1}switch(a.a){case 0:case 3:r=B.cF
break
case 1:case 2:r=B.cE
break
default:r=null}A.kj(q,r)
return!0},
$S:258}
A.SR.prototype={
$1(a){var s=a.e
s.toString
return A.hC(s)===this.a},
$S:10}
A.SS.prototype={
$1(a){var s=a.gaK(a).eK(this.a)
return!s.gP(s)},
$S:10}
A.ST.prototype={
$2(a,b){var s=this.a
return B.d.b1(Math.abs(a.gaK(a).gaU().a-s.gaK(s).gaU().a),Math.abs(b.gaK(b).gaU().a-s.gaK(s).gaU().a))},
$S:28}
A.SU.prototype={
$1(a){var s=a.e
s.toString
return A.hC(s)===this.a},
$S:10}
A.SV.prototype={
$1(a){var s=a.gaK(a).eK(this.a)
return!s.gP(s)},
$S:10}
A.SW.prototype={
$2(a,b){var s=this.a
return B.d.b1(Math.abs(a.gaK(a).gaU().b-s.gaK(s).gaU().b),Math.abs(b.gaK(b).gaU().b-s.gaK(s).gaU().b))},
$S:28}
A.cD.prototype={
gGb(){var s=this.d
if(s==null){s=this.c.e
s.toString
s=this.d=new A.a8E().$1(s)}s.toString
return s}}
A.a8D.prototype={
$1(a){var s=a.gGb()
return A.t_(s,A.aj(s).c)},
$S:259}
A.a8F.prototype={
$2(a,b){switch(this.a.a){case 1:return B.d.b1(a.b.a,b.b.a)
case 0:return B.d.b1(b.b.c,a.b.c)}},
$S:82}
A.a8E.prototype={
$1(a){var s,r,q=A.a([],t.AG),p=t.I,o=a.iX(p)
for(;o!=null;){s=o.f
s.toString
q.push(p.a(s))
s=A.aiF(o,1)
if(s==null)o=null
else{s=s.y
r=s==null?null:s.j(0,A.az(p))
o=r}}return q},
$S:261}
A.hQ.prototype={
gaK(a){var s,r,q,p,o=this
if(o.b==null)for(s=o.a,s=new A.aL(s,new A.a8B(),A.aj(s).h("aL<1,y>")),s=new A.dh(s,s.gp(s)),r=A.o(s).c;s.t();){q=s.d
if(q==null)q=r.a(q)
p=o.b
if(p==null){o.b=q
p=q}o.b=p.ng(q)}s=o.b
s.toString
return s}}
A.a8B.prototype={
$1(a){return a.b},
$S:262}
A.a8C.prototype={
$2(a,b){switch(this.a.a){case 1:return B.d.b1(a.gaK(a).a,b.gaK(b).a)
case 0:return B.d.b1(b.gaK(b).c,a.gaK(a).c)}},
$S:263}
A.uk.prototype={
Pl(a){var s,r,q,p,o,n=B.b.gJ(a).a,m=t.hY,l=A.a([],m),k=A.a([],t.lZ)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.R)(a),++r){q=a[r]
p=q.a
if(p==n){l.push(q)
continue}k.push(new A.hQ(l))
l=A.a([q],m)
n=p}if(l.length!==0)k.push(new A.hQ(l))
for(m=k.length,r=0;r<k.length;k.length===m||(0,A.R)(k),++r){s=k[r].a
if(s.length===1)continue
o=B.b.gJ(s).a
o.toString
A.ahX(s,o)}return k},
Dr(a){var s,r,q,p
A.mH(a,new A.a_B(),t.dP)
s=B.b.gJ(a)
r=new A.a_C().$2(s,a)
if(J.bI(r)<=1)return s
q=A.arH(r)
q.toString
A.ahX(r,q)
p=this.Pl(r)
if(p.length===1)return B.b.gJ(B.b.gJ(p).a)
A.arG(p,q)
return B.b.gJ(B.b.gJ(p).a)},
Ko(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a.length<=1)return a
s=A.a([],t.hY)
for(r=a.length,q=t.n2,p=t.I,o=0;o<a.length;a.length===r||(0,A.R)(a),++o){n=a[o]
m=n.gaK(n)
l=n.e.y
k=l==null?null:l.j(0,A.az(p))
if(k==null)l=null
else{l=k.f
l.toString}q.a(l)
s.push(new A.cD(l==null?null:l.w,m,n))}j=A.a([],t.i4)
i=this.Dr(s)
j.push(i.c)
B.b.A(s,i)
for(;s.length!==0;){h=this.Dr(s)
j.push(h.c)
B.b.A(s,h)}return j}}
A.a_B.prototype={
$2(a,b){return B.d.b1(a.b.b,b.b.b)},
$S:82}
A.a_C.prototype={
$2(a,b){var s=a.b,r=A.aj(b).h("aF<1>")
return A.ax(new A.aF(b,new A.a_D(new A.y(-1/0,s.b,1/0,s.d)),r),!0,r.h("p.E"))},
$S:264}
A.a_D.prototype={
$1(a){var s=a.b.eK(this.a)
return!s.gP(s)},
$S:265}
A.rw.prototype={
ao(){return new A.L2(B.l)}}
A.L2.prototype={
aC(){this.aT()
this.d=A.acC(!1,"FocusTraversalGroup",!0,!0,null,null,!0)},
m(){var s=this.d
if(s!=null)s.m()
this.aL()},
L(a){var s=null,r=this.a,q=r.c,p=this.d
p.toString
return new A.p9(q,p,A.CZ(!1,!1,r.f,s,!0,!0,p,!1,s,s,s,s,s,!0),s)}}
A.p9.prototype={
bQ(a){return!1}}
A.Hx.prototype={
cO(a){A.kj(a.gbO(a),B.SP)}}
A.lo.prototype={}
A.G_.prototype={
cO(a){var s=$.ad.H$.f.f
s.e.a1(t.AB).f.D4(s,!0)}}
A.lD.prototype={}
A.GO.prototype={
cO(a){var s=$.ad.H$.f.f
s.e.a1(t.AB).f.D4(s,!1)}}
A.BU.prototype={
cO(a){var s=$.ad.H$.f.f,r=s.e.a1(t.AB)
r.f.a_v(s,a.a)}}
A.L3.prototype={}
A.N6.prototype={
wf(a,b){var s
this.L2(a,b)
s=this.nj$.j(0,b)
if(s!=null){s=s.a
if(!!s.fixed$length)A.a_(A.W("removeWhere"))
B.b.ve(s,new A.a8G(a),!0)}}}
A.PI.prototype={}
A.PJ.prototype={}
A.e_.prototype={
gbi(){var s,r=$.ad.H$.z.j(0,this)
if(r instanceof A.eZ){s=r.ok
s.toString
if(A.o(this).c.b(s))return s}return null}}
A.br.prototype={
i(a){var s=this,r=s.a,q=r!=null?" "+r:""
if(A.A(s)===B.YF)return"[GlobalKey#"+A.bB(s)+q+"]"
return"["+("<optimized out>#"+A.bB(s))+q+"]"}}
A.jn.prototype={
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return this.$ti.b(b)&&b.a===this.a},
gu(a){return A.pU(this.a)},
i(a){var s="GlobalObjectKey",r=B.c.YZ(s,"<State<StatefulWidget>>")?B.c.ab(s,0,-8):s
return"["+r+" "+("<optimized out>#"+A.bB(this.a))+"]"}}
A.j.prototype={
bP(){var s=this.a
return s==null?"Widget":"Widget-"+s.i(0)},
k(a,b){if(b==null)return!1
return this.LI(0,b)},
gu(a){return A.N.prototype.gu.call(this,this)}}
A.b2.prototype={
bD(a){return new A.Is(this,B.a2)}}
A.a3.prototype={
bD(a){return A.aqE(this)}}
A.Oe.prototype={
D(){return"_StateLifecycle."+this.b}}
A.ag.prototype={
aC(){},
aX(a){},
er(){},
az(a){a.$0()
this.c.fo()},
d0(){},
c0(){},
m(){},
b3(){}}
A.aM.prototype={}
A.da.prototype={
bD(a){return new A.lq(this,B.a2,A.o(this).h("lq<da.T>"))}}
A.b6.prototype={
bD(a){return A.aob(this)}}
A.ar.prototype={
aE(a,b){},
n5(a){}}
A.DH.prototype={
bD(a){return new A.DG(this,B.a2)}}
A.aS.prototype={
bD(a){return A.aqv(this)}}
A.e5.prototype={
bD(a){return A.aoV(this)}}
A.mn.prototype={
D(){return"_ElementLifecycle."+this.b}}
A.Lm.prototype={
EC(a){a.aR(new A.a7j(this,a))
a.o3()},
VW(){var s,r,q,p=this
p.a=!0
r=p.b
q=A.ax(r,!0,A.o(r).c)
B.b.d7(q,A.abh())
s=q
r.U(0)
try{r=s
new A.cA(r,A.aI(r).h("cA<1>")).Z(0,p.gVU())}finally{p.a=!1}},
E(a,b){if(b.w===B.c6){b.d0()
b.aR(A.abi())}this.b.E(0,b)}}
A.a7j.prototype={
$1(a){this.a.EC(a)},
$S:4}
A.Ry.prototype={
zy(a){var s=this
if(a.at){s.e=!0
return}if(!s.d&&s.a!=null){s.d=!0
s.a.$0()}s.c.push(a)
a.at=!0},
HN(a){try{a.$0()}finally{}},
pT(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=b==null
if(f&&h.c.length===0)return
try{h.d=!0
if(!f){g.a=null
h.e=!1
try{b.$0()}finally{}}f=h.c
B.b.d7(f,A.abh())
h.e=!1
g.b=f.length
g.c=0
for(n=0;n<g.b;){s=f[n]
r=!1
if(r){n=s.f
n.toString
m=n instanceof A.bQ?A.cL(n):null
A.adv(A.az(m==null?A.aI(n):m).i(0),null,null)}try{s.Ik()}catch(l){q=A.au(l)
p=A.aG(l)
n=A.bj("while rebuilding dirty elements")
k=$.fb()
if(k!=null)k.$1(new A.bt(q,p,"widgets library",n,new A.Rz(g,h,s),!1))}if(r)A.adu()
n=++g.c
k=g.b
j=f.length
if(k>=j){k=h.e
k.toString}else k=!0
if(k){if(!!f.immutable$list)A.a_(A.W("sort"))
n=j-1
if(n-0<=32)A.Im(f,0,n,A.abh())
else A.Il(f,0,n,A.abh())
n=h.e=!1
g.b=f.length
while(!0){k=g.c
if(!(k>0?f[k-1].as:n))break
g.c=k-1}n=k}}}finally{for(f=h.c,n=f.length,i=0;i<n;++i){o=f[i]
o.at=!1}B.b.U(f)
h.d=!1
h.e=null}},
Xb(a){return this.pT(a,null)},
Zd(){var s,r,q
try{this.HN(this.b.gVV())}catch(q){s=A.au(q)
r=A.aG(q)
A.aec(A.CF("while finalizing the widget tree"),s,r,null)}finally{}},
a1f(a,b){try{a.b=b
a.er()}finally{}}}
A.Rz.prototype={
$0(){var s=null,r=A.a([],t.F),q=this.a,p=q.c,o=this.b.c.length,n="The element being rebuilt at the time was index "+p
q=""+q.b
if(p<o)J.ku(r,A.jg(n+" of "+q,this.c,!0,B.b7,s,!1,s,s,B.aB,s,!1,!0,!0,B.bm,s,t.h))
else J.ku(r,A.Vf(n+" of "+q+", but _dirtyElements only had "+o+" entries. This suggests some confusion in the framework internals."))
return r},
$S:14}
A.tJ.prototype={
w8(){var s=this.a
this.c=new A.a8k(this,s==null?null:s.c)}}
A.a8k.prototype={
cH(a){var s=this.a.I0(a)
if(s)return
s=this.b
if(s!=null)s.cH(a)}}
A.aP.prototype={
O4(a){},
k(a,b){if(b==null)return!1
return this===b},
er(){var s=this
if(A.aix(s.b,s.f)){s.fo()
s.b=null}s.aR(new A.UL(s))
s.b=null},
ga5(){var s,r
for(s=this;s!=null;){r={}
if(s.w===B.BV)break
else if(s instanceof A.bs)return s.ga5()
else{r.a=null
s.aR(new A.UM(r))
s=r.a}}return null},
YG(a){var s=null
return A.jg(a,this,!0,B.b7,s,!1,s,s,B.aB,s,!1,!0,!0,B.bm,s,t.h)},
aR(a){},
dq(a,b,c){var s,r,q=this
if(b==null){if(a!=null)q.ws(a)
return null}if(a!=null){s=a.f.k(0,b)
if(s){if(!J.f(a.d,c))q.J5(a,c)
s=a}else{s=a.f
s.toString
if(A.A(s)===A.A(b)&&J.f(s.a,b.a)){if(!J.f(a.d,c))q.J5(a,c)
a.b8(0,b)
s=a}else{q.ws(a)
r=q.qR(b,c)
s=r}}}else{r=q.qR(b,c)
s=r}return s},
eN(a,b){var s,r,q,p=this
p.a=a
p.d=b
p.w=B.c6
s=a!=null
if(s){r=a.e
r===$&&A.b();++r}else r=1
p.e=r
if(s)p.r=a.r
q=p.f.a
if(q instanceof A.e_)p.r.z.l(0,q,p)
p.vK()
p.w8()},
b8(a,b){this.f=b},
J5(a,b){new A.UN(b).$1(a)},
vP(a){this.d=a},
EM(a){var s=a+1,r=this.e
r===$&&A.b()
if(r<s){this.e=s
this.aR(new A.UI(s))}},
n_(){this.aR(new A.UK())
this.d=null},
pP(a){this.aR(new A.UJ(a))
this.d=a},
UM(a,b){var s,r,q=$.ad.H$.z.j(0,a)
if(q==null)return null
s=q.f
s.toString
if(!(A.A(s)===A.A(b)&&J.f(s.a,b.a)))return null
r=q.a
if(r!=null){r.iB(q)
r.ws(q)}this.r.b.b.A(0,q)
return q},
qR(a,b){var s,r,q,p,o,n,m=this,l=!1
if(l)A.adv(A.A(a).i(0),null,null)
try{s=a.a
if(s instanceof A.e_){r=m.UM(s,a)
if(r!=null){o=r
o.a=m
o.toString
n=m.e
n===$&&A.b()
o.EM(n)
o.c0()
o.aR(A.ajp())
o.pP(b)
q=m.dq(r,a,b)
o=q
o.toString
return o}}p=a.bD(0)
p.eN(m,b)
return p}finally{if(l)A.adu()}},
ws(a){a.a=null
a.n_()
this.r.b.E(0,a)},
iB(a){},
c0(){var s=this,r=s.z,q=r==null,p=!q&&r.a!==0||s.Q
s.w=B.c6
if(!q)r.U(0)
s.Q=!1
s.vK()
s.w8()
if(s.as)s.r.zy(s)
if(p)s.b3()},
d0(){var s,r,q=this,p=q.z
if(p!=null&&p.a!==0)for(p=new A.k8(p,p.m6()),s=A.o(p).c;p.t();){r=p.d;(r==null?s.a(r):r).ah.A(0,q)}q.y=null
q.w=B.ZI},
o3(){var s=this,r=s.f,q=r==null?null:r.a
if(q instanceof A.e_){r=s.r.z
if(J.f(r.j(0,q),s))r.A(0,q)}s.z=s.f=null
s.w=B.BV},
gd6(a){var s,r=this.ga5()
if(r instanceof A.C){s=r.k3
s.toString
return s}return null},
wx(a,b){var s=this.z;(s==null?this.z=A.cu(t.tx):s).E(0,a)
a.J1(this,b)
s=a.f
s.toString
return t.sg.a(s)},
a1(a){var s=this.y,r=s==null?null:s.j(0,A.az(a))
if(r!=null)return a.a(this.wx(r,null))
this.Q=!0
return null},
iX(a){var s=this.y
return s==null?null:s.j(0,A.az(a))},
w8(){var s=this.a
this.c=s==null?null:s.c},
vK(){var s=this.a
this.y=s==null?null:s.y},
GH(a){var s,r,q,p=this.a
while(!0){s=p==null
if(!s){r=p.f
r.toString
q=r instanceof A.bQ?A.cL(r):null
r=A.az(q==null?A.aI(r):q)!==A.az(a)}else r=!1
if(!r)break
p=p.a}if(s)s=null
else{s=p.f
s.toString}return a.h("0?").a(s)},
jB(a){var s,r,q=this.a
for(;s=q==null,!s;){if(q instanceof A.eZ){r=q.ok
r.toString
r=a.b(r)}else r=!1
if(r)break
q=q.a}t.Ci.a(q)
if(s)s=null
else{s=q.ok
s.toString}return a.h("0?").a(s)},
qB(a){var s=this.a
for(;s!=null;){if(s instanceof A.bs&&a.b(s.ga5()))return a.a(s.ga5())
s=s.a}return null},
z3(a){var s=this.a
while(!0){if(!(s!=null&&a.$1(s)))break
s=s.a}},
b3(){this.fo()},
cH(a){var s=this.c
if(s!=null)s.cH(a)},
bP(){var s=this.f
s=s==null?null:s.bP()
return s==null?"<optimized out>#"+A.bB(this)+"(DEFUNCT)":s},
fo(){var s=this
if(s.w!==B.c6)return
if(s.as)return
s.as=!0
s.r.zy(s)},
ru(a){var s
if(this.w===B.c6)s=!this.as&&!a
else s=!0
if(s)return
this.hf()},
Ik(){return this.ru(!1)},
hf(){this.as=!1},
$iae:1}
A.UL.prototype={
$1(a){a.b=this.a.b
a.er()},
$S:4}
A.UM.prototype={
$1(a){this.a.a=a},
$S:4}
A.UN.prototype={
$1(a){a.vP(this.a)
if(!(a instanceof A.bs))a.aR(this)},
$S:4}
A.UI.prototype={
$1(a){a.EM(this.a)},
$S:4}
A.UK.prototype={
$1(a){a.n_()},
$S:4}
A.UJ.prototype={
$1(a){a.pP(this.a)},
$S:4}
A.CG.prototype={
aA(a){var s=this.d,r=new A.Ha(s,A.ah())
r.aB()
r.Oe(s)
return r}}
A.qD.prototype={
eN(a,b){this.A8(a,b)
this.un()},
un(){this.Ik()},
hf(){var s,r,q,p,o,n,m=this,l=null
try{l=m.aM()
m.f.toString}catch(o){s=A.au(o)
r=A.aG(o)
n=A.Vg(A.aec(A.bj("building "+m.i(0)),s,r,new A.Sg(m)))
l=n}finally{m.tl()}try{m.ay=m.dq(m.ay,l,m.d)}catch(o){q=A.au(o)
p=A.aG(o)
n=A.Vg(A.aec(A.bj("building "+m.i(0)),q,p,new A.Sh(m)))
l=n
m.ay=m.dq(null,l,m.d)}},
aR(a){var s=this.ay
if(s!=null)a.$1(s)},
iB(a){this.ay=null
this.ka(a)}}
A.Sg.prototype={
$0(){var s=A.a([],t.F)
return s},
$S:14}
A.Sh.prototype={
$0(){var s=A.a([],t.F)
return s},
$S:14}
A.Is.prototype={
aM(){var s=this.f
s.toString
return t.yB.a(s).L(this)},
b8(a,b){this.ot(0,b)
this.ru(!0)}}
A.eZ.prototype={
aM(){return this.ok.L(this)},
er(){var s=this
if(A.aix(s.b,s.f))s.ok.er()
s.L_()},
un(){this.ok.aC()
this.ok.b3()
this.KL()},
hf(){var s=this
if(s.p1){s.ok.b3()
s.p1=!1}s.KM()},
b8(a,b){var s,r,q,p=this
p.ot(0,b)
s=p.ok
r=s.a
r.toString
q=p.f
q.toString
s.a=t.aw.a(q)
s.aX(r)
p.ru(!0)},
c0(){this.KY()
this.ok.c0()
this.fo()},
d0(){this.ok.d0()
this.A5()},
o3(){var s=this
s.tm()
s.ok.m()
s.ok=s.ok.c=null},
wx(a,b){return this.A6(a,b)},
b3(){this.KZ()
this.p1=!0}}
A.ud.prototype={
aM(){var s=this.f
s.toString
return t.im.a(s).b},
b8(a,b){var s=this,r=s.f
r.toString
t.im.a(r)
s.ot(0,b)
s.z_(r)
s.ru(!0)},
z_(a){this.lh(a)}}
A.lq.prototype={
B3(a){this.aR(new A.Zv(a))},
lh(a){var s=this.f
s.toString
this.B3(this.$ti.h("da<1>").a(s))}}
A.Zv.prototype={
$1(a){if(a instanceof A.bs)this.a.mD(a.ga5())
else a.aR(this)},
$S:4}
A.eH.prototype={
vK(){var s=this,r=s.a,q=r==null?null:r.y
if(q==null)q=B.Sh
r=s.f
r.toString
s.y=q.a17(0,A.A(r),s)},
zD(a,b){this.ah.l(0,a,b)},
J1(a,b){this.zD(a,null)},
HY(a,b){b.b3()},
z_(a){var s=this.f
s.toString
if(t.sg.a(s).bQ(a))this.LX(a)},
lh(a){var s,r,q
for(s=this.ah,s=new A.ww(s,s.u1()),r=A.o(s).c;s.t();){q=s.d
this.HY(a,q==null?r.a(q):q)}}}
A.bs.prototype={
ga5(){var s=this.ay
s.toString
return s},
Qg(){var s=this.a
while(!0){if(!(s!=null&&!(s instanceof A.bs)))break
s=s.a}return t.bI.a(s)},
Qf(){var s,r={},q=r.a=this.a
r.b=null
while(!0){if(!(q!=null&&!(q instanceof A.bs)))break
if(q instanceof A.lq){r.b=q
break}s=q.a
r.a=s
q=s}return r.b},
eN(a,b){var s,r=this
r.A8(a,b)
s=r.f
s.toString
r.ay=t.xL.a(s).aA(r)
r.pP(b)
r.tl()},
b8(a,b){this.ot(0,b)
this.Dq()},
hf(){this.Dq()},
Dq(){var s=this,r=s.f
r.toString
t.xL.a(r).aE(s,s.ga5())
s.tl()},
a22(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=new A.a_L(a4),g=new A.a_M(i),f=a3.length,e=f-1,d=a2.length,c=d-1,b=d===f?a2:A.aX(f,$.aeF(),!1,t.h),a=i,a0=0,a1=0
while(!0){if(!(a1<=c&&a0<=e))break
s=h.$1(a2[a1])
r=a3[a0]
if(s!=null){f=s.f
f.toString
q=f instanceof A.bQ?A.cL(f):i
d=A.az(q==null?A.aI(f):q)
q=r instanceof A.bQ?A.cL(r):i
f=!(d===A.az(q==null?A.aI(r):q)&&J.f(f.a,r.a))}else f=!0
if(f)break
f=j.dq(s,r,g.$2(a0,a))
f.toString
b[a0]=f;++a0;++a1
a=f}p=c
while(!0){o=a1<=p
if(!(o&&a0<=e))break
s=h.$1(a2[p])
r=a3[e]
if(s!=null){f=s.f
f.toString
q=f instanceof A.bQ?A.cL(f):i
d=A.az(q==null?A.aI(f):q)
q=r instanceof A.bQ?A.cL(r):i
f=!(d===A.az(q==null?A.aI(r):q)&&J.f(f.a,r.a))}else f=!0
if(f)break;--p;--e}if(o){n=A.z(t.qI,t.h)
for(;a1<=p;){s=h.$1(a2[a1])
if(s!=null){f=s.f.a
if(f!=null)n.l(0,f,s)
else{s.a=null
s.n_()
f=j.r.b
if(s.w===B.c6){s.d0()
s.aR(A.abi())}f.b.E(0,s)}}++a1}o=!0}else n=i
for(;a0<=e;a=f){r=a3[a0]
if(o){m=r.a
if(m!=null){s=n.j(0,m)
if(s!=null){f=s.f
f.toString
q=f instanceof A.bQ?A.cL(f):i
d=A.az(q==null?A.aI(f):q)
q=r instanceof A.bQ?A.cL(r):i
if(d===A.az(q==null?A.aI(r):q)&&J.f(f.a,m))n.A(0,m)
else s=i}}else s=i}else s=i
f=j.dq(s,r,g.$2(a0,a))
f.toString
b[a0]=f;++a0}e=a3.length-1
while(!0){if(!(a1<=c&&a0<=e))break
f=j.dq(a2[a1],a3[a0],g.$2(a0,a))
f.toString
b[a0]=f;++a0;++a1
a=f}if(o&&n.a!==0)for(f=n.gb_(n),f=new A.dH(J.as(f.a),f.b),d=A.o(f).z[1];f.t();){l=f.a
if(l==null)l=d.a(l)
if(!a4.B(0,l)){l.a=null
l.n_()
k=j.r.b
if(l.w===B.c6){l.d0()
l.aR(A.abi())}k.b.E(0,l)}}return b},
d0(){this.A5()},
o3(){var s=this,r=s.f
r.toString
t.xL.a(r)
s.tm()
r.n5(s.ga5())
s.ay.m()
s.ay=null},
vP(a){var s,r=this,q=r.d
r.KX(a)
s=r.CW
s.toString
s.iJ(r.ga5(),q,r.d)},
pP(a){var s,r,q=this
q.d=a
s=q.CW=q.Qg()
if(s!=null)s.iG(q.ga5(),a)
r=q.Qf()
if(r!=null){s=r.f
s.toString
t.yL.a(s).mD(q.ga5())}},
n_(){var s=this,r=s.CW
if(r!=null){r.iQ(s.ga5(),s.d)
s.CW=null}s.d=null},
iG(a,b){},
iJ(a,b,c){},
iQ(a,b){}}
A.a_L.prototype={
$1(a){var s=this.a.B(0,a)
return s?null:a},
$S:266}
A.a_M.prototype={
$2(a,b){return new A.nz(b,a,t.wx)},
$S:267}
A.uD.prototype={
eN(a,b){this.tv(a,b)}}
A.DG.prototype={
iB(a){this.ka(a)},
iG(a,b){},
iJ(a,b,c){},
iQ(a,b){}}
A.v9.prototype={
aR(a){var s=this.p1
if(s!=null)a.$1(s)},
iB(a){this.p1=null
this.ka(a)},
eN(a,b){var s,r,q=this
q.tv(a,b)
s=q.p1
r=q.f
r.toString
q.p1=q.dq(s,t.Dp.a(r).c,null)},
b8(a,b){var s,r,q=this
q.lS(0,b)
s=q.p1
r=q.f
r.toString
q.p1=q.dq(s,t.Dp.a(r).c,null)},
iG(a,b){var s=this.ay
s.toString
t.fB.a(s).saJ(a)},
iJ(a,b,c){},
iQ(a,b){var s=this.ay
s.toString
t.fB.a(s).saJ(null)}}
A.em.prototype={
ga5(){return t.gz.a(A.bs.prototype.ga5.call(this))},
gFB(a){var s=this.p1
s===$&&A.b()
return new A.aF(s,new A.YJ(this),A.aj(s).h("aF<1>"))},
iG(a,b){var s=this.ga5(),r=b.a
s.xs(0,a,r==null?null:r.ga5())},
iJ(a,b,c){var s=this.ga5(),r=c.a
s.r8(a,r==null?null:r.ga5())},
iQ(a,b){this.ga5().A(0,a)},
aR(a){var s,r,q,p,o=this.p1
o===$&&A.b()
s=o.length
r=this.p2
q=0
for(;q<s;++q){p=o[q]
if(!r.B(0,p))a.$1(p)}},
iB(a){this.p2.E(0,a)
this.ka(a)},
qR(a,b){return this.A7(a,b)},
eN(a,b){var s,r,q,p,o,n,m,l=this
l.tv(a,b)
s=l.f
s.toString
s=t.tk.a(s).c
r=s.length
q=A.aX(r,$.aeF(),!1,t.h)
for(p=t.wx,o=null,n=0;n<r;++n,o=m){m=l.A7(s[n],new A.nz(o,n,p))
q[n]=m}l.p1=q},
b8(a,b){var s,r,q,p=this
p.lS(0,b)
s=p.f
s.toString
t.tk.a(s)
r=p.p1
r===$&&A.b()
q=p.p2
p.p1=p.a22(r,s.c,q)
q.U(0)}}
A.YJ.prototype={
$1(a){return!this.a.p2.B(0,a)},
$S:34}
A.nz.prototype={
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return b instanceof A.nz&&this.b===b.b&&J.f(this.a,b.a)},
gu(a){return A.T(this.b,this.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.M9.prototype={}
A.Mc.prototype={
bD(a){return A.a_(A.c_(null))}}
A.Of.prototype={}
A.l0.prototype={}
A.c3.prototype={
FP(){return this.a.$0()},
Hj(a){return this.b.$1(a)}}
A.Da.prototype={
L(a){var s=this,r=A.z(t.n,t.ob),q=A.d7(a),p=q==null?null:q.ay
if(s.d==null)if(s.e==null)if(s.f==null)if(s.r==null)q=!1
else q=!0
else q=!0
else q=!0
else q=!0
if(q)r.l(0,B.BM,new A.c3(new A.W_(s),new A.W0(s,p),t.g0))
if(s.ay==null)q=!1
else q=!0
if(q)r.l(0,B.Yx,new A.c3(new A.W1(s),new A.W5(s,p),t.da))
if(s.cy==null)q=!1
else q=!0
if(q)r.l(0,B.BJ,new A.c3(new A.W6(s),new A.W7(s,p),t.on))
if(s.rx!=null||s.ry!=null||s.to!=null||!1)r.l(0,B.lz,new A.c3(new A.W8(s),new A.W9(s,p),t.n_))
if(s.x2!=null||s.y1!=null||s.y2!=null||s.ak!=null)r.l(0,B.ly,new A.c3(new A.Wa(s),new A.Wb(s,p),t.ta))
if(s.ap!=null||s.aa!=null||s.aS!=null||!1)r.l(0,B.lx,new A.c3(new A.Wc(s),new A.W2(s,p),t.uX))
q=!1
if(q)r.l(0,B.YA,new A.c3(new A.W3(s),new A.W4(s,p),t.p1))
return new A.ix(s.c,r,s.aq,s.ae,null,null)}}
A.W_.prototype={
$0(){return A.aqM(this.a,null)},
$S:268}
A.W0.prototype={
$1(a){var s=this.a
a.y1=s.d
a.y2=s.e
a.ak=s.f
a.ap=s.r
a.eI=a.c8=a.bb=a.bg=a.aS=a.aa=a.ah=null
a.b=this.b},
$S:269}
A.W1.prototype={
$0(){var s=t.S
return new A.fn(A.z(s,t.Aj),this.a,null,A.z(s,t.C))},
$S:270}
A.W5.prototype={
$1(a){a.e=null
a.f=this.a.ay
a.r=null
a.b=this.b},
$S:271}
A.W6.prototype={
$0(){return A.aox(this.a,null,null)},
$S:272}
A.W7.prototype={
$1(a){a.k3=a.k2=null
a.k4=this.a.cy
a.ah=a.ap=a.ak=a.y2=a.y1=a.xr=a.x2=a.x1=a.to=a.ry=a.rx=a.RG=a.R8=a.p4=a.p3=a.p2=a.p1=a.ok=null
a.b=this.b},
$S:273}
A.W8.prototype={
$0(){return A.ahI(this.a,null)},
$S:99}
A.W9.prototype={
$1(a){var s
a.as=null
s=this.a
a.at=s.rx
a.ax=s.ry
a.ay=s.to
a.ch=null
a.Q=s.aV
a.b=this.b},
$S:102}
A.Wa.prototype={
$0(){return A.acK(this.a,null)},
$S:109}
A.Wb.prototype={
$1(a){var s=this.a
a.as=s.x2
a.at=null
a.ax=s.y1
a.ay=s.y2
a.ch=s.ak
a.Q=s.aV
a.b=this.b},
$S:110}
A.Wc.prototype={
$0(){return A.apd(this.a,null)},
$S:278}
A.W2.prototype={
$1(a){var s=this.a
a.as=s.ap
a.at=null
a.ax=s.aa
a.ay=s.aS
a.ch=null
a.Q=s.aV
a.b=this.b},
$S:279}
A.W3.prototype={
$0(){var s=t.S,r=A.cu(s)
return new A.fq(B.lH,A.z(s,t.o),r,this.a,null,A.z(s,t.C))},
$S:280}
A.W4.prototype={
$1(a){a.ax=a.as=a.at=a.Q=null
a.b=this.b},
$S:281}
A.ix.prototype={
ao(){return new A.o3(B.RC,B.l)}}
A.o3.prototype={
aC(){var s,r,q=this
q.aT()
s=q.a
r=s.r
q.e=r==null?new A.Km(q):r
q.vB(s.d)},
aX(a){var s,r=this
r.bo(a)
if(!(a.r==null&&r.a.r==null)){s=r.a.r
r.e=s==null?new A.Km(r):s}r.vB(r.a.d)},
a1w(a){if(this.a.f)return
t.qS.a(this.c.ga5()).sa27(a)},
m(){for(var s=this.d,s=J.as(s.gb_(s));s.t();)s.gG(s).m()
this.d=null
this.aL()},
vB(a){var s,r,q,p,o=this,n=o.d
n.toString
o.d=A.z(t.n,t.oi)
for(s=J.as(a.gbl(a));s.t();){r=s.gG(s)
q=o.d
q.toString
p=n.j(0,r)
q.l(0,r,p==null?a.j(0,r).FP():p)
q=a.j(0,r)
q.toString
r=o.d.j(0,r)
r.toString
q.Hj(r)}for(s=J.as(n.gbl(n));s.t();){r=s.gG(s)
if(!o.d.V(0,r))n.j(0,r).m()}},
Qz(a){var s,r
for(s=this.d,s=J.as(s.gb_(s));s.t();){r=s.gG(s)
r.d.l(0,a.gbL(),a.gc3(a))
if(r.eL(a))r.fP(a)
else r.ns(a)}},
S7(a){var s,r
for(s=this.d,s=J.as(s.gb_(s));s.t();){r=s.gG(s)
r.d.l(0,a.gbL(),a.gc3(a))
if(r.a_T(a))r.vX(a)}},
Wd(a){this.e.w7(a)},
L(a){var s,r,q,p=this,o=null,n=p.a,m=n.e,l=m==null
if(l)s=n.c==null?B.e1:B.bN
else s=m
r=n.c
q=A.DM(s,r,o,p.gQy(),p.gS6(),o,o)
if(!n.f){if(l)n=r==null?B.e1:B.bN
else n=m
q=new A.L9(n,p.gWc(),q,o)}return q}}
A.L9.prototype={
aA(a){var s=new A.iy(B.bN,null,A.ah())
s.aB()
s.saJ(null)
s.v=this.e
this.f.$1(s)
return s},
aE(a,b){b.v=this.e
this.f.$1(b)}}
A.a1K.prototype={
i(a){return"SemanticsGestureDelegate()"}}
A.Km.prototype={
w7(a){var s=this,r=s.a.d
r.toString
a.siM(s.QY(r))
a.sjM(s.QP(r))
a.sa0D(s.QM(r))
a.sa0J(s.QZ(r))},
QY(a){var s=t.f3.a(a.j(0,B.BM))
if(s==null)return null
return new A.a6y(s)},
QP(a){var s=t.yA.a(a.j(0,B.BJ))
if(s==null)return null
return new A.a6x(s)},
QM(a){var s=t.oq.a(a.j(0,B.ly)),r=t.rR.a(a.j(0,B.lx)),q=s==null?null:new A.a6u(s),p=r==null?null:new A.a6v(r)
if(q==null&&p==null)return null
return new A.a6w(q,p)},
QZ(a){var s=t.iC.a(a.j(0,B.lz)),r=t.rR.a(a.j(0,B.lx)),q=s==null?null:new A.a6z(s),p=r==null?null:new A.a6A(r)
if(q==null&&p==null)return null
return new A.a6B(q,p)}}
A.a6y.prototype={
$0(){var s=this.a,r=s.y1
if(r!=null)r.$1(new A.oE(B.j,B.j))
r=s.y2
if(r!=null)r.$1(new A.oF())
s=s.ak
if(s!=null)s.$0()},
$S:0}
A.a6x.prototype={
$0(){var s=this.a,r=s.ok
if(r!=null)r.$1(B.Q0)
r=s.k4
if(r!=null)r.$0()
s=s.p3
if(s!=null)s.$1(B.PZ)},
$S:0}
A.a6u.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.i9(B.j))
r=s.at
if(r!=null)r.$1(new A.h5(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fo(B.c5,0))},
$S:19}
A.a6v.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.i9(B.j))
r=s.at
if(r!=null)r.$1(new A.h5(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fo(B.c5,null))},
$S:19}
A.a6w.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(a)
s=this.b
if(s!=null)s.$1(a)},
$S:19}
A.a6z.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.i9(B.j))
r=s.at
if(r!=null)r.$1(new A.h5(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fo(B.c5,0))},
$S:19}
A.a6A.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.i9(B.j))
r=s.at
if(r!=null)r.$1(new A.h5(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fo(B.c5,null))},
$S:19}
A.a6B.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(a)
s=this.b
if(s!=null)s.$1(a)},
$S:19}
A.l7.prototype={
D(){return"HeroFlightDirection."+this.b}}
A.l5.prototype={
ao(){return new A.pe(new A.br(null,t.J),B.l)}}
A.WF.prototype={
$2(a,b){var s=a.f
s.toString
t.tV.a(s)
s=a.ok
s.toString
t.BJ.a(s)
if(!this.b||!1)this.a.l(0,b,s)
else s.Gr()},
$S:284}
A.WG.prototype={
$1(a){var s,r,q=this,p=a.f
p.toString
if(p instanceof A.l5){t.jw.a(a)
s=p.c
if(A.ad0(a)===q.a)q.b.$2(a,s)
else{r=A.Yy(a,t.X)
if(r!=null)p=r.gjF()
else p=!1
if(p)q.b.$2(a,s)}}a.aR(q)},
$S:4}
A.pe.prototype={
td(a){var s,r=this
r.f=a
s=r.c.ga5()
s.toString
r.az(new A.a7d(r,t.x.a(s)))},
tc(){return this.td(!1)},
kT(a){var s=this
if(a||s.e==null)return
s.e=null
if(s.c!=null)s.az(new A.a7c())},
Gr(){return this.kT(!1)},
L(a){var s,r=this,q=null,p=r.e,o=p==null,n=!o
if(n)r.a.toString
if(n&&!r.f){o=p.a
return A.jW(q,p.b,o)}s=o?q:p.a
p=o?q:p.b
return A.jW(new A.tO(n,new A.oL(o,new A.ij(r.a.e,r.d),q),q),p,s)}}
A.a7d.prototype={
$0(){var s=this.b.k3
s.toString
this.a.e=s},
$S:0}
A.a7c.prototype={
$0(){},
$S:0}
A.a79.prototype={
gbB(a){var s,r=this
if(r.a===B.bL){s=r.e.fy
s.toString}else{s=r.d.fy
s.toString}return A.eB(B.cc,s,r.z?null:new A.rr(B.cc))},
mU(a,b){var s
this.r.a.toString
s=this.w.$2(a,b)
return s==null?new A.um(a,b):s},
gGT(){var s,r,q=this,p=q.Q
if(p===$){s=q.f.c
s.toString
r=A.ahR(s,$.ad.H$.z.j(0,q.d.k2))
q.Q!==$&&A.be()
q.Q=r
p=r}return p},
grH(){var s,r,q=this,p=q.as
if(p===$){s=q.r.c
s.toString
r=A.ahR(s,$.ad.H$.z.j(0,q.e.k2))
q.as!==$&&A.be()
q.as=r
p=r}return p},
gjH(){var s,r,q=this,p=q.at
if(p===$){s=q.grH()
if(s.gHz(s))if(!q.z){s=q.gGT()
s=s.gHz(s)
r=s}else r=!0
else r=!1
q.at!==$&&A.be()
p=q.at=r}return p},
i(a){var s,r,q=this,p=q.a.i(0),o=q.f,n=o.a.c.i(0),m=q.d.b.i(0),l=q.e.b.i(0)
o=o.i(0)
s=q.r.i(0)
r=q.gjH()?"":", INVALID"
return"_HeroFlightManifest("+p+" tag: "+n+" from route: "+m+" to route: "+l+" with hero: "+o+" to "+s+")"+r}}
A.iP.prototype={
OU(a){var s,r,q,p,o=this,n=o.c
if(n==null){n=o.f
n===$&&A.b()
s=n.gbB(n)
r=o.f
q=r.f.c
q.toString
p=r.r.c
p.toString
p=o.c=n.x.$5(a,s,r.a,q,p)
n=p}s=o.e
s===$&&A.b()
return A.j5(s,new A.a7a(o),n)},
Dp(a){var s,r=this,q=a===B.R
if(q||a===B.I){s=r.e
s===$&&A.b()
s.saW(0,null)
r.r.lo(0)
r.r=null
s=r.f
s===$&&A.b()
s.f.kT(q)
r.f.r.kT(a===B.I)
r.a.$1(r)
r.e.F(0,r.gI1())}},
Cn(a){var s=this,r=s.f
r===$&&A.b()
r=r.d.a
if((r==null?null:r.CW.a)!==!0){s.Dp(a)
return}if(s.x)return
r.toString
s.x=!0
r.CW.S(0,new A.a7b(s,r))},
a0I(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(!h.w){s=h.f
s===$&&A.b()
s=s.r.c!=null}else s=!1
if(s){s=h.f
s===$&&A.b()
r=t.av.a(s.r.c.ga5())}else r=null
if(r!=null&&r.b!=null&&r.k3!=null){s=h.f
s===$&&A.b()
s=$.ad.H$.z.j(0,s.e.k2)
s=s==null?null:s.ga5()
q=A.ce(r.bt(0,t.av.a(s)),B.j)}else q=null
s=q!=null
if(s&&isFinite(q.a)&&isFinite(q.b)){p=h.b
p===$&&A.b()
p=p.b
if(!J.f(q,new A.t(p.a,p.b))){p=h.b
o=p.b
n=o.c
m=o.a
l=o.d
o=o.b
k=q.a
j=q.b
i=h.f
i===$&&A.b()
h.b=i.mU(p.a,new A.y(k,j,k+(n-m),j+(l-o)))}}else{p=h.d
if(p.gb0(p)===B.R){p=h.e
p===$&&A.b()
o=$.akP()
n=p.gn(p)
m=A.o(o).h("mk<aB.T>")
h.d=new A.b4(t.m.a(p),new A.mk(new A.i8(new A.ig(n,1,B.aT)),o,m),m.h("b4<aB.T>"))}}if(s)s=!(isFinite(q.a)&&isFinite(q.b))
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
A.a7a.prototype={
$2(a,b){var s,r=null,q=this.a,p=q.b
p===$&&A.b()
s=q.e
s===$&&A.b()
s=p.ac(0,s.gn(s))
s.toString
p=q.f
p===$&&A.b()
p=p.c
return A.GM(p.b-s.d,new A.hc(!0,r,A.afL(b,q.d),r),r,r,s.a,p.a-s.c,s.b,r)},
$S:285}
A.a7b.prototype={
$0(){var s,r=this.a
r.x=!1
this.b.CW.F(0,this)
s=r.e
s===$&&A.b()
r.Dp(s.gb0(s))},
$S:0}
A.rD.prototype={
qd(a,b){this.pa(b,a,B.bL,!1)},
qc(a,b){var s=$.fU()
A.CJ(this)
if(!s.a.get(this).CW.a)this.pa(a,b,B.bM,!1)},
qe(a,b){var s=a.gjF()
if(s)this.pa(b,a,B.bL,!1)},
Ga(a,b){this.pa(a,b,B.bM,!0)},
n4(){var s,r,q,p=$.fU()
A.CJ(this)
if(p.a.get(this).CW.a)return
p=this.b
p=p.gb_(p)
s=A.o(p).h("aF<p.E>")
r=A.ax(new A.aF(p,new A.WE(),s),!1,s.h("p.E"))
for(p=r.length,q=0;q<p;++q)r[q].Cn(B.I)},
pa(a,b,c,d){var s
if(b!=a&&b instanceof A.hq&&a instanceof A.hq){switch(c.a){case 1:s=a.fy
if(s.gn(s)===0)return
break
case 0:s=b.fy
if(s.gn(s)===1)return
break}if(d)if(c===B.bM){b.gnG()
s=!0}else s=!1
else s=!1
if(s)this.Eh(a,b,c,d)
else{s=b.fy
b.sra(s.gn(s)===0)
$.ad.ax$.push(new A.WD(this,a,b,c,d))}}},
Eh(b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null
b4.sra(!1)
s=$.fU()
A.CJ(b1)
s=s.a.get(b1)
r=s==null
if(r)q=b2
else{p=s.d
p===$&&A.b()
q=p.gbi()}if(r||q==null)return
o=s.c.ga5()
if(!(o instanceof A.C))return
n=$.ad.H$.z.j(0,b3.k2)
m=n!=null?A.afT(n,b6,s):B.yZ
l=$.ad.H$.z.j(0,b4.k2)
k=l!=null?A.afT(l,b6,s):B.yZ
for(s=m.gfh(m),s=s.ga7(s),r=b1.gPK(),p=b1.a,j=b1.b,i=t.Cf,h=b1.gRH(),g=t.A,f=t.Q,e=t.b,d=t.tY,c=t.a7,b=t.m,a=c.h("b4<aB.T>"),a0=t.sD;s.t();){a1=s.gG(s)
a2=a1.gdG(a1)
a3=a1.gn(a1)
a4=k.j(0,a2)
a5=j.j(0,a2)
if(a4==null)a6=b2
else{a1=o.k3
a1.toString
a4.a.toString
a3.a.toString
a6=new A.a79(b5,q,a1,b3,b4,a3,a4,p,r,b6,a5!=null)}if(a6!=null&&a6.gjH()){k.A(0,a2)
if(a5!=null){a1=a5.f
a1===$&&A.b()
a7=a1.a
if(a7===B.bL&&a6.a===B.bM){a1=a5.e
a1===$&&A.b()
a1.saW(0,new A.eq(a6.gbB(a6),new A.bd(A.a([],g),f),0))
a1=a5.b
a1===$&&A.b()
a5.b=new A.uC(a1,a1.b,a1.a,a0)}else{a7=a7===B.bM&&a6.a===B.bL
a8=a5.e
if(a7){a8===$&&A.b()
a1=a6.gbB(a6)
a7=a5.f
a7=a7.gbB(a7)
a7=a7.gn(a7)
a8.saW(0,new A.b4(b.a(a1),new A.aH(a7,1,c),a))
a1=a5.f
a7=a1.f
a8=a6.r
if(a7!==a8){a7.kT(!0)
a8.tc()
a1=a5.f
a7=a5.b
a7===$&&A.b()
a5.b=a1.mU(a7.b,a6.grH())}else{a7=a5.b
a7===$&&A.b()
a5.b=a1.mU(a7.b,a7.a)}}else{a7=a5.b
a7===$&&A.b()
a8===$&&A.b()
a5.b=a1.mU(a7.ac(0,a8.gn(a8)),a6.grH())
a5.c=null
a1=a6.a
a7=a5.e
if(a1===B.bM)a7.saW(0,new A.eq(a6.gbB(a6),new A.bd(A.a([],g),f),0))
else a7.saW(0,a6.gbB(a6))
a5.f.f.kT(!0)
a5.f.r.kT(!0)
a6.f.td(a1===B.bL)
a6.r.tc()
a1=a5.r.f.gbi()
if(a1!=null)a1.CZ()}}a5.f=a6}else{a1=new A.iP(h,B.cT)
a7=A.a([],g)
a8=new A.bd(a7,f)
a9=new A.uc(a8,new A.bd(A.a([],e),d),0)
a9.a=B.I
a9.b=0
a9.bj()
a8.b=!0
a7.push(a1.gR6())
a1.e=a9
a1.f=a6
switch(a6.a.a){case 1:a9.saW(0,new A.eq(a6.gbB(a6),new A.bd(A.a([],g),f),0))
b0=!1
break
case 0:a9.saW(0,a6.gbB(a6))
b0=!0
break
default:b0=b2}a7=a1.f
a1.b=a7.mU(a7.gGT(),a1.f.grH())
a1.f.f.td(b0)
a1.f.r.tc()
a7=a1.f
a8=new A.mc(!1,$.bq())
a8.aa$=!0
a8=new A.eP(a1.gOT(),!1,a8,new A.br(b2,i))
a1.r=a8
a7.b.xq(0,a8)
a8=a1.e
a8.bj()
a8=a8.aY$
a8.b=!0
a8.a.push(a1.gI1())
j.l(0,a2,a1)}}else if(a5!=null)a5.w=!0}for(s=J.as(k.gb_(k));s.t();)s.gG(s).Gr()},
RI(a){var s=a.f
s===$&&A.b()
this.b.A(0,s.f.a.c)},
PL(a,b,c,d,e){var s,r,q=e.f
q.toString
t.tV.a(q)
s=A.d7(e)
r=A.d7(d)
if(s==null||r==null)return q.e
return A.j5(b,new A.WC(s,c,r.f,s.f,b,q),null)}}
A.WE.prototype={
$1(a){var s=a.f
s===$&&A.b()
if(s.y)if(s.a===B.bM){s=a.e
s===$&&A.b()
s=s.gb0(s)===B.I}else s=!1
else s=!1
return s},
$S:288}
A.WD.prototype={
$1(a){var s=this
s.a.Eh(s.b,s.c,s.d,s.e)},
$S:2}
A.WC.prototype={
$2(a,b){var s=this,r=s.c,q=s.d,p=s.e
r=s.b===B.bL?new A.ra(r,q).ac(0,p.gn(p)):new A.ra(q,r).ac(0,p.gn(p))
return new A.eJ(s.a.FV(r),s.f.e,null)},
$S:289}
A.ns.prototype={
L(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.a1(t.I)
f.toString
s=f.w
r=A.afX(a)
q=r.a
p=r.b
o=r.c
n=r.d
m=r.e
f=this.c
if(f==null)return A.dv(g,A.jW(g,q,q),!1,g,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)
l=r.r
k=l==null?g:A.E(l,0,1)
if(k==null)k=1
l=r.f
l.toString
if(k!==1)j=A.aY(B.d.b2(255*((l.gn(l)>>>24&255)/255*k)),l.gn(l)>>>16&255,l.gn(l)>>>8&255,l.gn(l)&255)
else j=l
l=A.bp(f.a)
i=A.a([],t.BV)
if(p!=null)i.push(new A.jj("FILL",p))
if(o!=null)i.push(new A.jj("wght",o))
if(n!=null)i.push(new A.jj("GRAD",n))
if(m!=null)i.push(new A.jj("opsz",m))
h=A.agX(g,g,B.UU,g,g,!0,g,A.a5_(g,A.bO(g,g,j,g,g,g,g,g,"MaterialIcons",g,g,q,g,i,g,g,g,!1,g,g,g,g,g,r.w,g,g),l),B.bD,s,g,1,B.aQ)
if(f.d)switch(s.a){case 0:f=new A.bc(new Float64Array(16))
f.cR()
f.hm(0,-1,1,1)
h=A.ahx(B.a3,h,f,!1)
break
case 1:break}return A.dv(g,new A.rg(!0,A.jW(A.n0(h,g,g),q,q),g),!1,g,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)}}
A.la.prototype={
k(a,b){var s
if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
if(b instanceof A.la)if(b.a===this.a)s=b.d===this.d
else s=!1
else s=!1
return s},
gu(a){return A.T(this.a,"MaterialIcons",null,this.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"IconData(U+"+B.c.jN(B.f.iT(this.a,16).toUpperCase(),5,"0")+")"}}
A.lb.prototype={
bQ(a){return!this.w.k(0,a.w)}}
A.WX.prototype={
$1(a){return A.acM(this.c,A.afW(a).bT(this.b),this.a)},
$S:290}
A.cn.prototype={
mT(a,b,c,d,e,f,g,h){var s,r=this,q=g==null?r.a:g,p=b==null?r.b:b,o=h==null?r.c:h,n=c==null?r.d:c,m=e==null?r.e:e,l=a==null?r.f:a
if(d==null){s=r.r
s=s==null?null:A.E(s,0,1)}else s=d
return new A.cn(q,p,o,n,m,l,s,f==null?r.w:f)},
fX(a){return this.mT(a,null,null,null,null,null,null,null)},
bT(a){var s=a.r
s=s==null?null:A.E(s,0,1)
return this.mT(a.f,a.b,a.d,s,a.e,a.w,a.a,a.c)},
Y(a){return this},
k(a,b){var s,r,q=this
if(b==null)return!1
if(J.S(b)!==A.A(q))return!1
if(b instanceof A.cn)if(b.a==q.a)if(b.b==q.b)if(b.c==q.c)if(b.d==q.d)if(b.e==q.e)if(J.f(b.f,q.f)){s=b.r
s=s==null?null:A.E(s,0,1)
r=q.r
s=s==(r==null?null:A.E(r,0,1))&&A.cF(b.w,q.w)}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gu(a){var s,r=this,q=r.r
q=q==null?null:A.E(q,0,1)
s=r.w
s=s==null?null:A.cS(s)
return A.T(r.a,r.b,r.c,r.d,r.e,r.f,q,s,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.Lj.prototype={}
A.rG.prototype={
ao(){return new A.wx(B.l)}}
A.wx.prototype={
aC(){var s=this
s.aT()
$.ad.ae$.push(s)
s.z=new A.BX(s)},
m(){var s,r=this
B.b.A($.ad.ae$,r)
r.VD()
s=r.at
if(s!=null)s.m()
s=r.z
s===$&&A.b()
s.a=null
r.vg(null)
r.aL()},
b3(){var s,r=this
r.W3()
r.vk()
s=r.c
s.toString
if(A.ahu(s))r.T7()
else r.Ek(!0)
r.cl()},
aX(a){var s=this
s.bo(a)
if(s.r)s.a.toString
if(!s.a.c.k(0,a.c))s.vk()},
er(){this.vk()
this.MN()},
W3(){var s=this.c
s.toString
s=A.d7(s)
s=s==null?null:s.z
if(s==null){s=$.a1z.dB$
s===$&&A.b()
s=(s.a&2)!==0}this.w=s},
vk(){var s,r,q,p,o=this,n=o.z
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
o.Wf(new A.uM(n,r,t.rZ).Y(A.aeh(q,s)))},
QO(a){var s=this,r=s.ax
if(r==null||a){s.as=s.Q=null
s.a.toString
r=s.ax=new A.el(s.gRM(),null,null)}r.toString
return r},
oM(){return this.QO(!1)},
RN(a,b){this.az(new A.a7f(this,a,b))},
vg(a){var s=this.e
$.bH.ax$.push(new A.a7g(s))
this.e=a},
Wf(a){var s,r,q=this,p=q.d
if(p==null)s=null
else{s=p.a
if(s==null)s=p}r=a.a
if(s===(r==null?a:r))return
if(q.r){p.toString
p.F(0,q.oM())}q.a.toString
q.az(new A.a7h(q))
q.az(new A.a7i(q))
q.d=a
if(q.r)a.S(0,q.oM())},
T7(){var s,r=this
if(r.r)return
s=r.d
s.toString
s.S(0,r.oM())
s=r.at
if(s!=null)s.m()
r.at=null
r.r=!0},
Ek(a){var s,r,q=this
if(!q.r)return
if(a)if(q.at==null){s=q.d
s=(s==null?null:s.a)!=null}else s=!1
else s=!1
if(s){s=q.d.a
if(s.w)A.a_(A.aa(u.y))
r=new A.nv(s)
r.oy(s)
q.at=r}s=q.d
s.toString
s.F(0,q.oM())
q.r=!1},
VD(){return this.Ek(!1)},
L(a){var s,r,q,p,o,n,m,l,k=this,j=null
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
l=new A.GV(q,p,n,m,s,j,j,B.dY,j,o,B.a3,B.bO,j,!1,r,!1,j)
l=A.dv(j,l,!1,j,!1,j,j,j,!0,"",j,j,j,j,j,j,j,j,j,j)
return l}}
A.a7f.prototype={
$0(){var s,r=this.a
r.vg(this.b)
r.as=r.Q=r.f=null
s=r.x
r.x=s==null?0:s+1
r.y=B.np.JO(r.y,this.c)},
$S:0}
A.a7g.prototype={
$1(a){var s=this.a
if(s!=null)s.a.m()
return null},
$S:2}
A.a7h.prototype={
$0(){this.a.vg(null)},
$S:0}
A.a7i.prototype={
$0(){var s=this.a
s.x=s.f=null
s.y=!1},
$S:0}
A.Px.prototype={}
A.BK.prototype={
dm(a){var s=A.SA(this.a,this.b,a)
s.toString
return s}}
A.ra.prototype={
dm(a){var s=A.acz(this.a,this.b,a)
s.toString
return s}}
A.kD.prototype={
dm(a){return A.mT(this.a,this.b,a)}}
A.m5.prototype={
dm(a){var s=A.b3(this.a,this.b,a)
s.toString
return s}}
A.Ds.prototype={}
A.nx.prototype={
gj8(){var s,r,q=this,p=q.d
if(p===$){s=q.a.d
r=A.dV(null,s,null,null,q)
q.d!==$&&A.be()
q.d=r
p=r}return p},
geZ(){var s,r=this,q=r.e
if(q===$){s=r.gj8()
q=r.e=A.eB(r.a.c,s,null)}return q},
aC(){var s,r=this
r.aT()
s=r.gj8()
s.bj()
s=s.aQ$
s.b=!0
s.a.push(new A.Xf(r))
r.BB()},
aX(a){var s,r=this
r.bo(a)
if(r.a.c!==a.c){r.geZ().m()
s=r.gj8()
r.e=A.eB(r.a.c,s,null)}r.gj8().e=r.a.d
if(r.BB()){r.no(new A.Xe(r))
s=r.gj8()
s.sn(0,0)
s.cu(0)}},
m(){this.geZ().m()
this.gj8().m()
this.MX()},
Wi(a,b){var s
if(a==null)return
s=this.geZ()
a.swb(a.ac(0,s.gn(s)))
a.skS(0,b)},
BB(){var s={}
s.a=!1
this.no(new A.Xd(s,this))
return s.a}}
A.Xf.prototype={
$1(a){switch(a.a){case 3:this.a.a.toString
break
case 0:case 1:case 2:break}},
$S:3}
A.Xe.prototype={
$3(a,b,c){this.a.Wi(a,b)
return a},
$S:112}
A.Xd.prototype={
$3(a,b,c){var s
if(b!=null){if(a==null)a=c.$1(b)
s=a.b
if(!J.f(b,s==null?a.a:s))this.a.a=!0
else if(a.b==null)a.skS(0,a.a)}else a=null
return a},
$S:112}
A.mL.prototype={
aC(){this.Lc()
var s=this.gj8()
s.bj()
s=s.aY$
s.b=!0
s.a.push(this.gR4())},
R5(){this.az(new A.QZ())}}
A.QZ.prototype={
$0(){},
$S:0}
A.pX.prototype={
ao(){return new A.Jo(null,null,B.l)}}
A.Jo.prototype={
no(a){this.CW=t.uh.a(a.$3(this.CW,this.a.w,new A.a5H()))},
L(a){var s,r=this.CW
r.toString
s=this.geZ()
s=r.ac(0,s.gn(s))
return A.qW(this.a.r,null,B.cJ,!0,s,null,null,B.aQ)}}
A.a5H.prototype={
$1(a){return new A.m5(t.F1.a(a),null)},
$S:292}
A.pY.prototype={
ao(){return new A.Jp(null,null,B.l)}}
A.Jp.prototype={
no(a){var s=this,r=s.CW
s.a.toString
s.CW=t.iH.a(a.$3(r,B.aA,new A.a5I()))
s.cx=t.nr.a(a.$3(s.cx,s.a.z,new A.a5J()))
r=t.mo
s.cy=r.a(a.$3(s.cy,s.a.Q,new A.a5K()))
s.db=r.a(a.$3(s.db,s.a.at,new A.a5L()))},
L(a){var s,r,q,p,o,n=this,m=n.a,l=m.w
m=m.x
s=n.CW
s.toString
r=n.geZ()
r=s.ac(0,r.gn(r))
s=n.cx
s.toString
q=n.geZ()
q=s.ac(0,q.gn(q))
s=n.a.Q
p=n.db
p.toString
o=n.geZ()
o=p.ac(0,o.gn(o))
o.toString
return new A.GC(l,m,r,q,s,o,n.a.r,null)}}
A.a5I.prototype={
$1(a){return new A.kD(t.ak.a(a),null)},
$S:293}
A.a5J.prototype={
$1(a){return new A.aH(A.Qj(a),null,t.a7)},
$S:100}
A.a5K.prototype={
$1(a){return new A.h0(t.iO.a(a),null)},
$S:33}
A.a5L.prototype={
$1(a){return new A.h0(t.iO.a(a),null)},
$S:33}
A.ph.prototype={
m(){var s=this,r=s.dZ$
if(r!=null)r.F(0,s.gmr())
s.dZ$=null
s.aL()},
c0(){this.du()
this.cF()
this.ms()}}
A.jp.prototype={
bD(a){var s=A.h9(t.h,t.X)
return new A.rJ(s,this,B.a2,A.o(this).h("rJ<jp.T>"))}}
A.rJ.prototype={
J1(a,b){var s=this.ah,r=this.$ti,q=r.h("bZ<1>?").a(s.j(0,a))
if(q!=null&&q.gP(q))return
s.l(0,a,A.cu(r.c))},
HY(a,b){var s,r=this.$ti,q=r.h("bZ<1>?").a(this.ah.j(0,b))
if(q==null)return
if(!q.gP(q)){s=this.f
s.toString
s=r.h("jp<1>").a(s).a24(a,q)
r=s}else r=!0
if(r)b.b3()}}
A.hd.prototype={
bQ(a){return a.f!==this.f},
bD(a){var s=new A.pi(A.h9(t.h,t.X),this,B.a2,A.o(this).h("pi<hd.T>"))
this.f.S(0,s.guM())
return s}}
A.pi.prototype={
b8(a,b){var s,r,q=this,p=q.f
p.toString
s=q.$ti.h("hd<1>").a(p).f
r=b.f
if(s!==r){p=q.guM()
s.F(0,p)
r.S(0,p)}q.LW(0,b)},
aM(){var s,r=this
if(r.bJ){s=r.f
s.toString
r.Aa(r.$ti.h("hd<1>").a(s))
r.bJ=!1}return r.LV()},
SJ(){this.bJ=!0
this.fo()},
lh(a){this.Aa(a)
this.bJ=!1},
o3(){var s=this,r=s.f
r.toString
s.$ti.h("hd<1>").a(r).f.F(0,s.guM())
s.tm()}}
A.Dt.prototype={}
A.pt.prototype={}
A.aaP.prototype={
$1(a){return this.a.a=a},
$S:43}
A.aaQ.prototype={
$1(a){return a.b},
$S:294}
A.aaR.prototype={
$1(a){var s,r,q,p
for(s=J.aO(a),r=this.a,q=this.b,p=0;p<s.gp(a);++p)q.l(0,A.az(A.o(r.a[p].a).h("cI.T")),s.j(a,p))
return q},
$S:295}
A.cI.prototype={
i(a){return"LocalizationsDelegate["+A.az(A.o(this).h("cI.T")).i(0)+"]"}}
A.Pj.prototype={
ld(a){return!0},
cw(a,b){return new A.bl(B.CK,t.mq)},
k6(a){return!1},
i(a){return"DefaultWidgetsLocalizations.delegate(en_US)"}}
A.BQ.prototype={
gbA(){return B.r},
$iiL:1}
A.wJ.prototype={
bQ(a){return this.w!==a.w}}
A.t5.prototype={
ao(){return new A.LH(new A.br(null,t.J),A.z(t.n,t.z),B.l)}}
A.LH.prototype={
aC(){this.aT()
this.cw(0,this.a.c)},
OC(a){var s,r,q,p,o,n,m=this.a.d,l=a.d
if(m.length!==l.length)return!0
s=A.a(m.slice(0),A.aj(m))
r=A.a(l.slice(0),A.aj(l))
for(q=0;q<s.length;++q){p=s[q]
o=r[q]
n=p instanceof A.bQ?A.cL(p):null
m=A.az(n==null?A.aI(p):n)
n=o instanceof A.bQ?A.cL(o):null
if(m===A.az(n==null?A.aI(o):n)){p.k6(o)
m=!1}else m=!0
if(m)return!0}return!1},
aX(a){var s,r=this
r.bo(a)
if(r.a.c.k(0,a.c)){r.a.toString
s=r.OC(a)}else s=!0
if(s)r.cw(0,r.a.c)},
cw(a,b){var s,r=this,q={},p=r.a.d,o=p.length
if(o===0){r.f=b
return}q.a=null
s=A.atf(b,p).by(new A.a7F(q),t.Co)
q=q.a
if(q!=null){r.e=q
r.f=b}else{++$.jQ.x2$
s.by(new A.a7G(r,b),t.H)}},
gEt(){return t.cC.a(J.bb(this.e,B.YV)).gbA()},
L(a){var s,r,q,p=this,o=null
if(p.f==null)return B.lr
s=p.gEt()
p.f.toString
r=p.e
q=p.gEt()
return A.dv(o,new A.wJ(p,r,A.acx(p.a.e,q),p.d),!1,o,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,s,o)}}
A.a7F.prototype={
$1(a){return this.a.a=a},
$S:296}
A.a7G.prototype={
$1(a){var s=this.a
if(s.c!=null)s.az(new A.a7E(s,a,this.b))
$.jQ.Fm()},
$S:297}
A.a7E.prototype={
$0(){var s=this.a
s.e=this.b
s.f=this.c},
$S:0}
A.tS.prototype={
D(){return"Orientation."+this.b}}
A.io.prototype={
q4(a,b,c,d,e){var s=this,r=c==null?s.c:c,q=a==null?s.f:a,p=e==null?s.r:e,o=d==null?s.e:d
return new A.io(s.a,s.b,r,s.d,o,q,p,s.w,!1,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch)},
wk(a){return this.q4(null,null,a,null,null)},
FV(a){return this.q4(a,null,null,null,null)},
Ya(a,b){return this.q4(null,null,null,a,b)},
Y9(a,b){return this.q4(a,null,null,null,b)},
Is(a,b,c,d){var s,r,q,p,o,n,m=this,l=null
if(!(b||d||c||a))return m
s=m.f
r=b?0:l
q=d?0:l
p=c?0:l
r=s.mR(a?0:l,r,p,q)
q=m.r
p=b?Math.max(0,q.a-s.a):l
o=d?Math.max(0,q.b-s.b):l
n=c?Math.max(0,q.c-s.c):l
return m.Y9(r,q.mR(a?Math.max(0,q.d-s.d):l,p,n,o))},
a1p(a){var s=this,r=null,q=s.r,p=s.e,o=Math.max(0,q.d-p.d)
q=q.mR(o,r,r,r)
return s.Ya(p.mR(0,r,r,r),q)},
k(a,b){var s=this
if(b==null)return!1
if(J.S(b)!==A.A(s))return!1
return b instanceof A.io&&b.a.k(0,s.a)&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.f.k(0,s.f)&&b.r.k(0,s.r)&&b.e.k(0,s.e)&&b.Q===s.Q&&b.as===s.as&&b.z===s.z&&b.y===s.y&&b.at===s.at&&b.ax===s.ax&&b.ay.k(0,s.ay)&&A.cF(b.ch,s.ch)},
gu(a){var s=this
return A.T(s.a,s.b,s.c,s.d,s.f,s.r,s.e,!1,s.Q,s.as,s.z,s.y,s.at,s.ax,s.ay,A.cS(s.ch),B.a,B.a,B.a,B.a)},
i(a){var s=this
return"MediaQueryData("+B.b.bk(A.a(["size: "+s.a.i(0),"devicePixelRatio: "+B.d.M(s.b,1),"textScaleFactor: "+B.d.M(s.c,1),"platformBrightness: "+s.d.i(0),"padding: "+s.f.i(0),"viewPadding: "+s.r.i(0),"viewInsets: "+s.e.i(0),"alwaysUse24HourFormat: false","accessibleNavigation: "+s.y,"highContrast: "+s.Q,"disableAnimations: "+s.as,"invertColors: "+s.z,"boldText: "+s.at,"navigationMode: "+s.ax.b,"gestureSettings: "+s.ay.i(0),"displayFeatures: "+A.h(s.ch)],t.s),", ")+")"}}
A.eJ.prototype={
bQ(a){return!this.f.k(0,a.f)}}
A.FY.prototype={
D(){return"NavigationMode."+this.b}}
A.wQ.prototype={
ao(){return new A.LP(B.l)}}
A.LP.prototype={
aC(){this.aT()
$.ad.ae$.push(this)},
qb(){this.az(new A.a80())},
G8(){this.az(new A.a82())},
G7(){this.az(new A.a81())},
L(a){var s
$.ad.toString
s=A.agn($.cd())
return new A.eJ(s,this.a.c,null)},
m(){B.b.A($.ad.ae$,this)
this.aL()}}
A.a80.prototype={
$0(){},
$S:0}
A.a82.prototype={
$0(){},
$S:0}
A.a81.prototype={
$0(){},
$S:0}
A.Pz.prototype={}
A.tu.prototype={
L(a){var s,r=null
switch(A.ko().a){case 0:case 1:case 3:case 5:break
case 2:case 4:break}s=this.c
return A.amf(new A.rg(!0,new A.LY(A.dv(r,A.tw(new A.fh(B.m3,s==null?r:new A.qC(s,r,r),r),B.ls,r,r,r),!1,r,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),new A.Yw(this,a),r),r))}}
A.Yw.prototype={
$0(){A.IB(B.UG)},
$S:0}
A.oU.prototype={
eL(a){if(this.y1==null)return!1
return this.lR(a)},
H1(a){},
H2(a,b){var s=this.y1
if(s!=null)s.$0()},
qK(a,b,c){}}
A.a83.prototype={
w7(a){a.siM(this.a)}}
A.Ju.prototype={
FP(){var s=t.S,r=A.cu(s)
return new A.oU(B.aV,18,B.bn,A.z(s,t.o),r,null,null,A.z(s,t.C))},
Hj(a){a.y1=this.a}}
A.LY.prototype={
L(a){var s=this.d
return new A.ix(this.c,A.aR([B.YW,new A.Ju(s)],t.n,t.ob),B.aw,!1,new A.a83(s),null)}}
A.FZ.prototype={
L(a){var s,r,q=this,p=a.a1(t.I)
p.toString
s=A.a([],t.E)
r=q.c
if(r!=null)s.push(A.XX(r,B.fQ))
r=q.d
if(r!=null)s.push(A.XX(r,B.fR))
r=q.e
if(r!=null)s.push(A.XX(r,B.fS))
return new A.qQ(new A.a9H(q.f,q.r,p.w),s,null)}}
A.pH.prototype={
D(){return"_ToolbarSlot."+this.b}}
A.a9H.prototype={
ro(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.b.j(0,B.fQ)!=null){s=a.a
r=a.b
q=e.dl(B.fQ,new A.aJ(0,s,r,r)).a
switch(e.f.a){case 0:p=s-q
break
case 1:p=0
break
default:p=null}e.dI(B.fQ,new A.t(p,0))}else q=0
if(e.b.j(0,B.fS)!=null){o=e.dl(B.fS,A.acj(a))
switch(e.f.a){case 0:n=0
break
case 1:n=a.a-o.a
break
default:n=null}m=o.a
e.dI(B.fS,new A.t(n,(a.b-o.b)/2))}else m=0
if(e.b.j(0,B.fR)!=null){s=a.a
r=e.e
l=Math.max(s-q-m-r*2,0)
k=e.dl(B.fR,A.acj(a).Y3(l))
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
default:f=null}e.dI(B.fR,new A.t(f,(a.b-k.b)/2))}},
lI(a){return a.d!==this.d||a.e!==this.e||a.f!==this.f}}
A.lI.prototype={
D(){return"RoutePopDisposition."+this.b}}
A.bR.prototype={
grh(){return B.rh},
iH(){},
n2(){var s=A.ads()
s.by(new A.a0q(this),t.H)
return s},
n0(){var s=this.a
if(s==null)s=null
else{s.a.toString
s=!0}if(s===!0)A.ads().by(new A.a0p(this),t.H)},
wF(a){},
eT(){var s=0,r=A.a8(t.ij),q,p=this
var $async$eT=A.a9(function(a,b){if(a===1)return A.a5(b,r)
while(true)switch(s){case 0:q=p.gHA()?B.SD:B.AK
s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$eT,r)},
gJ9(){return!1},
jq(a){this.YI(a)
return!0},
YI(a){this.d.d_(0,null)},
kO(a){},
n1(a){},
wA(a){},
mK(){},
pX(){},
m(){this.a=null},
gjF(){var s,r=this.a
if(r==null)return!1
r=r.e
r=new A.bm(r,A.aj(r).h("bm<1,d1?>"))
s=r.lg(r,new A.a0t(),new A.a0u())
if(s==null)return!1
return s.a===this},
gHA(){var s,r=this.a
if(r==null)return!1
r=r.e
r=new A.bm(r,A.aj(r).h("bm<1,d1?>"))
s=r.qE(r,new A.a0v(),new A.a0w())
if(s==null)return!1
return s.a===this},
gqO(){var s,r,q,p,o=this.a
if(o==null)return!1
for(o=o.e,s=o.length,r=0;r<s;++r){q=o[r]
if(q.a===this)return!1
p=q.d.a
if(p<=10&&p>=1)return!0}return!1},
ga_O(){var s=this.a
if(s==null)return!1
s=s.e
s=new A.bm(s,A.aj(s).h("bm<1,d1?>"))
s=s.qE(s,new A.a0r(this),new A.a0s())
s=s==null?null:s.gjG()
return s===!0}}
A.a0q.prototype={
$1(a){var s,r=this.a.a
if(r==null)s=null
else{r.a.toString
s=!0}if(s===!0){r=r.x.gdh()
if(r!=null)r.rC()}},
$S:21}
A.a0p.prototype={
$1(a){var s=this.a.a
if(s!=null){s=s.x.gdh()
if(s!=null)s.rC()}},
$S:21}
A.a0t.prototype={
$1(a){return a!=null&&a.gjG()},
$S:24}
A.a0u.prototype={
$0(){return null},
$S:7}
A.a0v.prototype={
$1(a){return a!=null&&a.gjG()},
$S:24}
A.a0w.prototype={
$0(){return null},
$S:7}
A.a0r.prototype={
$1(a){return a!=null&&A.ahZ(this.a).$1(a)},
$S:24}
A.a0s.prototype={
$0(){return null},
$S:7}
A.fF.prototype={
i(a){var s=this.a
s=s==null?"none":'"'+s+'"'
return"RouteSettings("+s+", "+A.h(this.b)+")"}}
A.iq.prototype={
qd(a,b){},
qc(a,b){},
wE(a,b){},
qe(a,b){},
Ga(a,b){},
n4(){}}
A.l6.prototype={
bQ(a){return a.f!=this.f}}
A.a0o.prototype={}
A.IZ.prototype={}
A.BP.prototype={}
A.tG.prototype={
ao(){var s=null,r=A.a([],t.hi),q=$.bq(),p=t.a4
return new A.eN(r,new A.Lf(q),A.jA(s,p),A.jA(s,p),A.acC(!0,"Navigator",!0,!0,s,s,!1),new A.uA(0,q,t.rj),A.iK(!1),A.b8(t.S),s,A.z(t.wb,t.M),s,!0,s,s,s,B.l)},
a0C(a,b){return this.z.$2(a,b)}}
A.Z0.prototype={
$1(a){return a==null},
$S:299}
A.dz.prototype={
D(){return"_RouteLifecycle."+this.b}}
A.M8.prototype={}
A.d1.prototype={
gco(){var s,r
if(this.c){s=t.kd.a(this.a.b)
s.gco()
r=A.h(s.gco())
return"p+"+r}r=this.b
if(r!=null)return"r+"+r.gID()
return null},
ZU(a,b,c,d){var s,r,q,p=this,o=p.d,n=p.a
n.a=b
n.iH()
s=p.d
if(s===B.C1||s===B.C2){r=n.n2()
p.d=B.C3
r.J8(new A.a8W(p,b))}else{n.wF(c)
p.d=B.cO}if(a)n.n1(null)
s=o===B.a_h||o===B.C2
q=b.r
if(s)q.d9(0,new A.x_(n,d))
else q.d9(0,new A.pq(n,d))},
ZT(a,b){var s,r=this
r.d=B.a_d
s=r.a
if((s.d.a.a&30)!==0)return!0
if(!s.jq(r.w)){r.d=B.cO
return!1}r.w=null
return!0},
m(){var s,r,q,p,o,n,m={}
this.d=B.a_f
s=this.a
r=s.grh()
q=new A.a8U()
p=new A.aF(r,q,A.aj(r).h("aF<1>"))
if(!p.ga7(p).t())s.m()
else{m.a=p.gp(p)
for(s=B.b.ga7(r),q=new A.vZ(s,q);q.t();){r=s.gG(s)
o=A.aZ("listener")
n=new A.a8V(m,this,r,o)
o.b=n
r.d.S(0,n)}}},
ga2a(){var s=this.d.a
return s<=7&&s>=1},
gjG(){var s=this.d.a
return s<=10&&s>=1}}
A.a8W.prototype={
$0(){var s=this.a
if(s.d===B.C3){s.d=B.cO
this.b.uo()}},
$S:0}
A.a8U.prototype={
$1(a){return a.d.a},
$S:300}
A.a8V.prototype={
$0(){var s=this,r=s.a;--r.a
s.c.d.F(0,s.d.aF())
if(r.a===0)s.b.a.m()},
$S:0}
A.a8X.prototype={
$1(a){return a.a===this.a},
$S:40}
A.kc.prototype={}
A.pq.prototype={
jL(a){a.qd(this.a,this.b)}}
A.pp.prototype={
jL(a){a.qc(this.a,this.b)}}
A.wZ.prototype={
jL(a){a.wE(this.a,this.b)}}
A.x_.prototype={
jL(a){a.qe(this.a,this.b)}}
A.eN.prototype={
aC(){var s,r,q,p,o=this
o.aT()
for(s=o.a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q){p=s[q]
$.fU().a.set(p,o)}o.Q=o.a.x
s=o.c.iX(t.hS)
if(s==null)s=null
else{s=s.f
s.toString}t.cn.a(s)
o.vJ(s==null?null:s.f)
o.a.toString
B.fe.qU("selectSingleEntryHistory",t.H)},
hT(a,b){var s,r,q,p,o,n,m=this
m.ln(m.as,"id")
s=m.f
m.ln(s,"history")
for(;r=m.e,r.length!==0;)r.pop().m()
m.d=new A.br(null,t.r9)
B.b.I(r,s.IE(null,m))
m.a.toString
q=0
for(;!1;++q){p=B.LI[q]
r=m.c
r.toString
r=p.wp(r)
o=$.ac0()
n=new A.d1(r,null,!0,B.lI,o,o,o)
m.e.push(n)
B.b.I(m.e,s.IE(n,m))}if(s.y==null){s=m.a
r=m.e
o=s.f
B.b.I(r,J.ac6(s.a0C(m,o),new A.Z_(m),t.ee))}m.uo()},
wH(a){var s,r=this
r.Mj(a)
s=r.f
if(r.bc$!=null)s.b8(0,r.e)
else s.U(0)},
gco(){return this.a.y},
b3(){var s,r,q,p,o=this
o.N0()
s=o.c.a1(t.hS)
o.vJ(s==null?null:s.f)
for(r=o.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.R)(r),++p)r[p].a.pX()},
vJ(a){var s,r,q=this
if(q.z!=a){if(a!=null)$.fU().a.set(a,q)
s=q.z
if(s==null)s=null
else{r=$.fU()
A.CJ(s)
s=r.a.get(s)}if(s===q){s=$.fU()
r=q.z
r.toString
s.a.set(r,null)}q.z=a
q.EP()}},
EP(){var s=this,r=s.z,q=s.a
if(r!=null)s.Q=B.b.W(q.x,A.a([r],t.yx))
else s.Q=q.x},
aX(a){var s,r,q,p,o=this
o.N1(a)
s=a.x
if(s!==o.a.x){for(r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q){p=s[q]
$.fU().a.set(p,null)}for(s=o.a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q){p=s[q]
$.fU().a.set(p,o)}o.EP()}o.a.toString
for(s=o.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q)s[q].a.pX()},
d0(){var s,r,q,p=this.Q
p===$&&A.b()
s=p.length
r=0
for(;r<p.length;p.length===s||(0,A.R)(p),++r){q=p[r]
$.fU().a.set(q,null)}this.lU()},
c0(){var s,r,q,p
this.MZ()
s=this.Q
s===$&&A.b()
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.R)(s),++q){p=s[q]
$.fU().a.set(p,this)}},
m(){var s,r,q,p=this
p.vJ(null)
p.x.m()
for(s=p.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q)s[q].m()
p.N2()},
gAX(){var s,r,q,p=A.a([],t.tD)
for(s=this.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q)B.b.I(p,s[q].a.grh())
return p},
uq(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null
a.ay=!0
s=a.e
r=s.length-1
q=s[r]
p=r>0?s[r-1]:a0
o=A.a([],t.hi)
for(s=a.w,n=a.r,m=a0,l=m,k=!1,j=!1;r>=0;){switch(q.d.a){case 1:i=a.i4(r-1,A.aeo())
h=i>=0?a.e[i]:a0
h=h==null?a0:h.a
g=q.a
g.a=a
g.iH()
q.d=B.a_g
n.d9(0,new A.pq(g,h))
continue
case 2:if(k||l==null){h=q.a
h.n0()
q.d=B.cO
if(l==null)h.n1(a0)
continue}break
case 3:case 4:case 6:h=p==null?a0:p.a
i=a.i4(r-1,A.aeo())
g=i>=0?a.e[i]:a0
g=g==null?a0:g.a
q.ZU(l==null,a,h,g)
if(q.d===B.cO)continue
break
case 5:if(!j&&m!=null){q.a.kO(m)
q.f=m}j=!0
break
case 7:if(!j&&m!=null){q.a.kO(m)
q.f=m}k=!0
j=!0
break
case 8:i=a.i4(r,A.yN())
h=i>=0?a.e[i]:a0
if(!q.ZT(a,h==null?a0:h.a))continue
if(!j){if(m!=null){q.a.kO(m)
q.f=m}m=q.a}h=q.a
i=a.i4(r,A.yN())
g=i>=0?a.e[i]:a0
s.d9(0,new A.pp(h,g==null?a0:g.a))
if(q.d===B.lJ)continue
k=!0
break
case 11:break
case 9:h=q.a
h=h.d.a
if((h.a&30)!==0)A.a_(A.aa("Future already completed"))
h.m1(a0)
q.w=null
q.d=B.a_c
continue
case 10:if(!j){if(m!=null)q.a.kO(m)
m=a0}i=a.i4(r,A.yN())
h=i>=0?a.e[i]:a0
h=h==null?a0:h.a
q.d=B.a_e
if(q.x)s.d9(0,new A.wZ(q.a,h))
continue
case 12:if(!k&&l!=null)break
q.d=B.lJ
continue
case 13:o.push(B.b.ft(a.e,r))
q=l
break
case 14:case 0:break}--r
f=r>0?a.e[r-1]:a0
l=q
q=p
p=f}a.Qq()
a.Qs()
a.a.toString
s=a.e
s=new A.bm(s,A.aj(s).h("bm<1,d1?>"))
e=s.lg(s,new A.YU(),new A.YV())
d=e==null?a0:e.a.b.a
if(d!=null&&d!==a.at){A.ahp(d,!1,a0)
a.at=d}for(s=o.length,c=0;c<o.length;o.length===s||(0,A.R)(o),++c){q=o[c]
for(n=q.a.grh(),h=n.length,b=0;b<n.length;n.length===h||(0,A.R)(n),++b)J.alW(n[b])
q.m()}if(a1){s=a.d
s===$&&A.b()
s=s.gbi()
if(s!=null)s.a1e(a.gAX())}if(a.bc$!=null)a.f.b8(0,a.e)
a.ay=!1},
uo(){return this.uq(!0)},
Qq(){var s,r=this,q=r.Q
q===$&&A.b()
if(q.length===0){r.w.U(0)
r.r.U(0)
return}for(q=r.r;!q.gP(q);){s=q.eP(0)
B.b.Z(r.Q,s.gnM())}for(q=r.w;!q.gP(q);){s=q.nX()
B.b.Z(r.Q,s.gnM())}},
Qs(){var s,r,q,p,o,n,m=this,l=null,k=m.e.length-1
for(;k>=0;){s=m.e[k]
r=s.d.a
if(!(r<=12&&r>=3)){--k
continue}q=m.QU(k+1,A.ajF())
r=q==null
p=r?l:q.a
o=s.r
if(p!=o){if((r?l:q.a)==null){p=s.f
p=p!=null&&p===o}else p=!1
if(!p){p=s.a
p.n1(r?l:q.a)}s.r=r?l:q.a}--k
n=m.i4(k,A.ajF())
r=n>=0?m.e[n]:l
p=r==null
o=p?l:r.a
if(o!=s.e){o=s.a
o.wA(p?l:r.a)
s.e=p?l:r.a}}},
Cg(a,b){a=this.i4(a,b)
return a>=0?this.e[a]:null},
i4(a,b){while(!0){if(!(a>=0&&!b.$1(this.e[a])))break;--a}return a},
QU(a,b){var s
while(!0){s=this.e
if(!(a<s.length&&!b.$1(s[a])))break;++a}s=this.e
return a<s.length?s[a]:null},
pn(a,b,c,d){var s,r,q
if(b)this.a.toString
s=new A.fF(a,c)
r=d.h("bR<0?>?")
q=r.a(this.a.r.$1(s))
return q==null&&!b?r.a(this.a.w.$1(s)):q},
vp(a,b,c){return this.pn(a,!1,b,c)},
AV(a){this.P2()},
nI(a){var s=0,r=A.a8(t.y),q,p=this,o,n,m
var $async$nI=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)$async$outer:switch(s){case 0:m=p.e
m=new A.bm(m,A.aj(m).h("bm<1,d1?>"))
o=m.lg(m,new A.YW(),new A.YX())
if(o==null){q=!1
s=1
break}s=3
return A.an(o.a.eT(),$async$nI)
case 3:n=c
if(p.c==null){q=!0
s=1
break}m=p.e
m=new A.bm(m,A.aj(m).h("bm<1,d1?>"))
if(o!==m.lg(m,new A.YY(),new A.YZ())){q=!0
s=1
break}switch(n.a){case 2:q=!1
s=1
break $async$outer
case 0:p.a0U(a)
q=!0
s=1
break $async$outer
case 1:q=!0
s=1
break $async$outer}case 1:return A.a6(q,r)}})
return A.a7($async$nI,r)},
HR(){return this.nI(null,t.X)},
a0p(a){return this.nI(a,t.X)},
I8(a){var s=this,r=B.b.a03(s.e,A.aeo())
if(r.c){s.a.toString
if(null.$2(r.a,a)&&r.d===B.cO)r.d=B.lK}else{r.w=a
r.d=B.lK}if(r.d===B.lK)s.uq(!1)
s.AV(r.a)},
fq(){return this.I8(null,t.X)},
a0U(a){return this.I8(a,t.X)},
GF(a){var s,r=this,q=B.b.a_y(r.e,A.ahZ(a)),p=r.e[q]
if(p.c&&p.d.a<8){s=r.Cg(q-1,A.yN())
s=s==null?null:s.a
r.w.d9(0,new A.pp(a,s))}p.d=B.lJ
if(!r.ay)r.uq(!1)},
sF4(a){this.ch=a
this.CW.sn(0,a>0)},
YM(){var s,r,q,p,o,n,m=this
m.sF4(m.ch+1)
if(m.ch===1){s=m.i4(m.e.length-1,A.yN())
r=m.e[s].a
q=!r.gJ9()&&s>0?m.Cg(s-1,A.yN()).a:null
p=m.Q
p===$&&A.b()
o=p.length
n=0
for(;n<p.length;p.length===o||(0,A.R)(p),++n)p[n].Ga(r,q)}},
n4(){var s,r,q,p=this
p.sF4(p.ch-1)
if(p.ch===0){s=p.Q
s===$&&A.b()
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.R)(s),++q)s[q].n4()}},
S3(a){this.cx.E(0,a.gbL())},
Sb(a){this.cx.A(0,a.gbL())},
P2(){if($.bH.CW$===B.cD){var s=this.d
s===$&&A.b()
s=$.ad.H$.z.j(0,s)
this.az(new A.YT(s==null?null:s.qB(t.CE)))}s=this.cx
B.b.Z(A.ax(s,!0,A.o(s).c),$.ad.gXg())},
L(a){var s,r=this,q=null,p=r.gSa(),o=A.afQ(a),n=r.bc$,m=r.d
m===$&&A.b()
r.a.toString
if(m.gbi()==null){s=r.gAX()
s=J.lf(s.slice(0),A.aj(s).c)}else s=B.rh
return new A.l6(q,A.DM(B.bN,new A.yX(!1,A.afP(A.CZ(!0,q,A.a5l(n,new A.nU(s,B.a9,m)),q,q,q,r.x,!1,q,q,q,q,q,!0),o),q),p,r.gS2(),q,q,p),q)}}
A.Z_.prototype={
$1(a){var s,r,q=a.b.a
if(q!=null){s=this.a.as
r=s.y
if(r==null)r=s.$ti.h("bL.T").a(r)
s.Mi(0,r+1)
q=new A.M2(r,q,null,B.lL)}else q=null
return A.ahY(a,B.lI,!1,q)},
$S:303}
A.YU.prototype={
$1(a){return a!=null&&a.gjG()},
$S:24}
A.YV.prototype={
$0(){return null},
$S:7}
A.YW.prototype={
$1(a){return a!=null&&a.gjG()},
$S:24}
A.YX.prototype={
$0(){return null},
$S:7}
A.YY.prototype={
$1(a){return a!=null&&a.gjG()},
$S:24}
A.YZ.prototype={
$0(){return null},
$S:7}
A.YT.prototype={
$0(){var s=this.a
if(s!=null)s.sFb(!0)},
$S:0}
A.pz.prototype={
D(){return"_RouteRestorationType."+this.b}}
A.Nt.prototype={
gHD(){return!0},
q1(){return A.a([this.a.a],t.f)}}
A.M2.prototype={
q1(){var s=this,r=s.Ni(),q=A.a([s.c,s.d],t.f),p=s.e
if(p!=null)q.push(p)
B.b.I(r,q)
return r},
wp(a){var s=a.vp(this.d,this.e,t.z)
s.toString
return s},
gID(){return this.c}}
A.adD.prototype={
gHD(){return!1},
q1(){A.apm(this.d)},
wp(a){var s=a.c
s.toString
return this.d.$2(s,this.e)},
gID(){return this.c}}
A.Lf.prototype={
b8(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.y==null
if(a)c.y=A.z(t.N,t.lC)
s=t.f
r=A.a([],s)
q=c.y
q.toString
p=J.bb(q,null)
if(p==null)p=B.d9
o=A.z(t.dR,t.lC)
q=c.y
q.toString
n=J.am1(J.yV(q))
for(q=a1.length,m=b,l=a,k=!0,j=0;j<a1.length;a1.length===q||(0,A.R)(a1),++j){i=a1[j]
if(i.d.a>7){h=i.a
h.c.sn(0,b)
continue}if(i.c){l=l||r.length!==J.bI(p)
h=r.length
if(h!==0){g=m==null?b:m.gco()
o.l(0,g,r)
n.A(0,g)}k=i.gco()!=null
h=i.a
f=k?i.gco():b
h.c.sn(0,f)
if(k){r=A.a([],s)
h=c.y
h.toString
p=J.bb(h,i.gco())
if(p==null)p=B.d9}else{r=B.d9
p=B.d9}m=i
continue}if(k){h=i.b
h=h==null?b:h.gHD()
k=h===!0}else k=!1
h=i.a
f=k?i.gco():b
h.c.sn(0,f)
if(k){h=i.b
f=h.b
h=f==null?h.b=h.q1():f
if(!l){f=J.aO(p)
e=f.gp(p)
d=r.length
l=e<=d||!J.f(f.j(p,d),h)}else l=!0
B.b.E(r,h)}}l=l||r.length!==J.bI(p)
c.Qc(r,m,o,n)
if(l||n.gbK(n)){c.y=o
c.aw()}},
Qc(a,b,c,d){var s,r=a.length
if(r!==0){s=b==null?null:b.gco()
c.l(0,s,a)
d.A(0,s)}},
U(a){if(this.y==null)return
this.y=null
this.aw()},
IE(a,b){var s,r,q,p,o,n=A.a([],t.hi)
if(this.y!=null)s=a!=null&&a.gco()==null
else s=!0
if(s)return n
s=this.y
s.toString
r=J.bb(s,a==null?null:a.gco())
if(r==null)return n
for(s=J.as(r);s.t();){q=A.arI(s.gG(s))
p=q.wp(b)
o=$.ac0()
n.push(new A.d1(p,q,!1,B.lI,o,o,o))}return n},
q6(){return null},
la(a){a.toString
return J.af0(t.G.a(a),new A.a7e(),t.dR,t.lC)},
Hi(a){this.y=a},
lu(){return this.y},
gkR(a){return this.y!=null}}
A.a7e.prototype={
$2(a,b){return new A.aV(A.ci(a),A.jB(t.j.a(b),!0,t.K),t.cj)},
$S:304}
A.a8i.prototype={
$2(a,b){if(!a.a)a.F(0,b)},
$S:30}
A.x0.prototype={
c0(){this.du()
this.cF()
this.ee()},
m(){var s=this,r=s.ag$
if(r!=null)r.F(0,s.gdU())
s.ag$=null
s.aL()}}
A.x1.prototype={
aX(a){this.bo(a)
this.n6()},
b3(){var s,r,q,p,o=this
o.cl()
s=o.bc$
r=o.glr()
q=o.c
q.toString
q=A.ob(q)
o.eH$=q
p=o.kC(q,r)
if(r){o.hT(s,o.dA$)
o.dA$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.eG$.Z(0,new A.a8i())
s=r.bc$
if(s!=null)s.m()
r.bc$=null
r.N_()}}
A.d8.prototype={
i(a){var s=A.a([],t.s)
this.c6(s)
return"Notification("+B.b.bk(s,", ")+")"},
c6(a){}}
A.cx.prototype={
bD(a){return new A.x2(this,B.a2,this.$ti.h("x2<1>"))}}
A.x2.prototype={
I0(a){var s,r=this.f
r.toString
s=this.$ti
s.h("cx<1>").a(r)
if(s.c.b(a))return r.d.$1(a)
return!1},
lh(a){}}
A.e2.prototype={}
A.PE.prototype={}
A.eP.prototype={
sll(a){var s
if(this.b===a)return
this.b=a
s=this.e
if(s!=null)s.BL()},
snG(a){if(this.c)return
this.c=!0
this.e.BL()},
S(a,b){this.d.S(0,b)},
F(a,b){this.d.F(0,b)},
lo(a){var s,r=this.e
r.toString
this.e=null
if(r.c==null)return
B.b.A(r.d,this)
s=$.bH
if(s.CW$===B.AL)s.ax$.push(new A.Zi(r))
else r.CX()},
fo(){var s=this.f.gbi()
if(s!=null)s.CZ()},
i(a){return"<optimized out>#"+A.bB(this)+"(opaque: "+this.b+"; maintainState: "+this.c+")"},
$ia1:1,
Fz(a){return this.a.$1(a)}}
A.Zi.prototype={
$1(a){this.a.CX()},
$S:2}
A.ps.prototype={
ao(){return new A.x4(B.l)}}
A.x4.prototype={
aC(){this.aT()
this.a.c.d.sn(0,!0)},
m(){this.a.c.d.sn(0,!1)
this.a.toString
this.aL()},
L(a){var s=this.a
return new A.oL(s.d,s.c.Fz(a),null)},
CZ(){this.az(new A.a8n())}}
A.a8n.prototype={
$0(){},
$S:0}
A.nU.prototype={
ao(){return new A.nW(A.a([],t.tD),null,null,B.l)}}
A.nW.prototype={
aC(){this.aT()
this.a_A(0,this.a.c)},
uS(a,b){return this.d.length},
xq(a,b){b.e=this
this.az(new A.Zm(this,null,null,b))},
a_A(a,b){var s,r=b.length
if(r===0)return
for(s=0;s<r;++s)b[s].e=this
this.az(new A.Zl(this,null,null,b))},
a1e(a){var s,r,q,p,o,n=this
if(t.rF.b(a))s=a
else s=J.lf(a.slice(0),A.aj(a).c)
if(s.length===0)return
r=n.d
if(A.cF(r,s))return
q=A.jz(r,t.u7)
for(r=s.length,p=0;p<r;++p){o=s[p]
if(o.e==null)o.e=n}n.az(new A.Zn(n,s,q,null,null))},
CX(){if(this.c!=null)this.az(new A.Zk())},
BL(){this.az(new A.Zj())},
L(a){var s,r,q,p,o,n=A.a([],t.E)
for(s=this.d,r=s.length-1,q=!0,p=0;r>=0;--r){o=s[r]
if(q){++p
n.push(new A.ps(o,!0,o.f))
q=!o.b||!1}else if(o.c)n.push(new A.ps(o,!1,o.f))}s=t.m8
return new A.OD(n.length-p,this.a.d,A.ax(new A.cA(n,s),!1,s.h("bk.E")),null)}}
A.Zm.prototype={
$0(){var s=this,r=s.a
B.b.nw(r.d,r.uS(s.b,s.c),s.d)},
$S:0}
A.Zl.prototype={
$0(){var s=this,r=s.a
B.b.Hk(r.d,r.uS(s.b,s.c),s.d)},
$S:0}
A.Zn.prototype={
$0(){var s,r,q=this,p=q.a,o=p.d
B.b.U(o)
s=q.b
B.b.I(o,s)
r=q.c
r.a1k(s)
B.b.Hk(o,p.uS(q.d,q.e),r)},
$S:0}
A.Zk.prototype={
$0(){},
$S:0}
A.Zj.prototype={
$0(){},
$S:0}
A.OD.prototype={
bD(a){var s=A.cu(t.h)
return new A.OE(s,this,B.a2)},
aA(a){var s=a.a1(t.I)
s.toString
s=new A.py(s.w,this.e,this.f,A.ah(),0,null,null,A.ah())
s.aB()
s.I(0,null)
return s},
aE(a,b){var s=this.e
if(b.aq!==s){b.aq=s
b.a2()}s=a.a1(t.I)
s.toString
b.sbA(s.w)
s=this.f
if(s!==b.ae){b.ae=s
b.af()
b.aZ()}}}
A.OE.prototype={
ga5(){return t.z2.a(A.em.prototype.ga5.call(this))}}
A.py.prototype={
e6(a){if(!(a.e instanceof A.dw))a.e=new A.dw(null,null,B.j)},
TR(){if(this.q!=null)return
this.q=B.bj.Y(this.H)},
sbA(a){var s=this
if(s.H===a)return
s.H=a
s.q=null
s.a2()},
goJ(){var s,r,q,p,o=this
if(o.aq===A.ap.prototype.gpY.call(o))return null
s=A.ap.prototype.gZh.call(o,o)
for(r=o.aq,q=t.B;r>0;--r){p=s.e
p.toString
s=q.a(p).aj$}return s},
eg(a){var s,r,q,p,o=this.goJ()
for(s=t.B,r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.iW(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.aj$}return r},
gj4(){return!0},
bV(a){return new A.Z(A.E(1/0,a.a,a.b),A.E(1/0,a.c,a.d))},
bx(){var s,r,q,p,o,n,m,l,k=this
k.K=!1
if(k.d1$-k.aq===0)return
k.TR()
s=t.k.a(A.w.prototype.gX.call(k))
r=A.ql(new A.Z(A.E(1/0,s.a,s.b),A.E(1/0,s.c,s.d)))
q=k.goJ()
for(s=t.B,p=t.uu;q!=null;){o=q.e
o.toString
s.a(o)
if(!o.gxy()){q.cg(r,!0)
n=k.q
n.toString
m=k.k3
m.toString
l=q.k3
l.toString
o.a=n.kF(p.a(m.a8(0,l)))}else{n=k.k3
n.toString
m=k.q
m.toString
k.K=A.agU(q,o,n,m)||k.K}q=o.aj$}},
cv(a,b){var s,r,q,p=this,o={},n=o.a=p.aq===A.ap.prototype.gpY.call(p)?null:p.cK$
for(s=t.B,r=0;r<p.d1$-p.aq;++r,n=q){n=n.e
n.toString
s.a(n)
if(a.my(new A.a8K(o,b,n),n.a,b))return!0
q=n.bM$
o.a=q}return!1},
rl(a,b){var s,r,q,p,o,n=this.goJ()
for(s=t.B,r=b.a,q=b.b;n!=null;){p=n.e
p.toString
s.a(p)
o=p.a
a.eq(n,new A.t(o.a+r,o.b+q))
n=p.aj$}},
aG(a,b){var s,r=this,q=r.K&&r.ae!==B.J,p=r.aV
if(q){q=r.cx
q===$&&A.b()
s=r.k3
p.saD(0,a.jR(q,b,new A.y(0,0,0+s.a,0+s.b),r.gyi(),r.ae,p.a))}else{p.saD(0,null)
r.rl(a,b)}},
m(){this.aV.saD(0,null)
this.ht()},
eS(a){var s,r,q=this.goJ()
for(s=t.B;q!=null;){a.$1(q)
r=q.e
r.toString
q=s.a(r).aj$}},
ii(a){var s
switch(this.ae.a){case 0:return null
case 1:case 2:case 3:if(this.K){s=this.k3
s=new A.y(0,0,0+s.a,0+s.b)}else s=null
return s}}}
A.a8K.prototype={
$2(a,b){return this.a.a.bN(a,b)},
$S:15}
A.Mi.prototype={
c0(){this.du()
this.cF()
this.ee()},
m(){var s=this,r=s.ag$
if(r!=null)r.F(0,s.gdU())
s.ag$=null
s.aL()}}
A.PK.prototype={
am(a){var s,r,q
this.eb(a)
s=this.au$
for(r=t.B;s!=null;){s.am(a)
q=s.e
q.toString
s=r.a(q).aj$}},
ad(a){var s,r,q
this.ds(0)
s=this.au$
for(r=t.B;s!=null;){s.ad(0)
q=s.e
q.toString
s=r.a(q).aj$}}}
A.nq.prototype={
ao(){var s=t.y
return new A.wu(A.aR([!1,!0,!0,!0],s,s),null,null,B.l)},
iL(a){return A.yQ().$1(a)}}
A.wu.prototype={
aC(){var s,r,q=this
q.aT()
s=q.a
r=s.f
q.d=A.ahQ(A.ba(s.e),r,q)
r=q.a
s=r.f
s=A.ahQ(A.ba(r.e),s,q)
q.e=s
r=q.d
r.toString
q.f=new A.wR(A.a([r,s],t.ro))},
aX(a){var s,r=this
r.bo(a)
if(!a.f.k(0,r.a.f)||A.ba(a.e)!==A.ba(r.a.e)){s=r.d
s.toString
s.sar(0,r.a.f)
s=r.d
s.toString
s.sFu(A.ba(r.a.e))
s=r.e
s.toString
s.sar(0,r.a.f)
s=r.e
s.toString
s.sFu(A.ba(r.a.e))}},
v7(a){var s,r,q,p,o,n,m,l,k,j=this
if(!j.a.iL(a))return!1
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
if(a instanceof A.ho){q=a.e
if(q<0)n=s
else if(q>0)n=p
else n=null
m=n===s
s=j.c
s.cH(new A.tU(m,0))
s=j.w
s.l(0,m,!0)
s.j(0,m).toString
n.d=0
j.w.j(0,m).toString
s=a.f
if(s!==0){r=n.c
if(r!=null)r.aP(0)
n.c=null
l=A.E(Math.abs(s),100,1e4)
s=n.f
if(n.a===B.fG)r=0.3
else{r=n.r
r===$&&A.b()
q=r.a
q=r.b.ac(0,q.gn(q))
r=q}s.a=r
r.toString
s.b=A.E(l*0.00006,r,0.5)
r=n.w
s=n.x
s===$&&A.b()
q=s.a
r.a=s.b.ac(0,q.gn(q))
r.b=Math.min(0.025+75e-8*l*l,1)
r=n.b
r===$&&A.b()
r.e=A.c2(0,B.d.b2(0.15+l*0.02))
r.jC(0,0)
n.as=0.5
n.a=B.ZN}else{s=a.d
if(s!=null){p=a.b.ga5()
p.toString
t.x.a(p)
o=p.k3
o.toString
k=p.k_(s.d)
switch(A.ba(r.e).a){case 0:n.toString
s=o.b
n.Ie(0,Math.abs(q),o.a,A.E(k.b,0,s),s)
break
case 1:n.toString
s=o.a
n.Ie(0,Math.abs(q),o.b,A.E(k.a,0,s),s)
break}}}}else if(a instanceof A.iz||a instanceof A.eV)if(a.gGh()!=null){s=j.d
if(s.a===B.fH)s.jc(B.cY)
s=j.e
if(s.a===B.fH)s.jc(B.cY)}j.r=A.A(a)
return!1},
m(){this.d.m()
this.e.m()
this.NS()},
L(a){var s=this,r=null,q=s.a,p=s.d,o=s.e,n=q.e,m=s.f
return new A.cx(s.gv6(),new A.fE(A.Ss(new A.fE(q.w,r),new A.Le(p,o,n,m),r,r,B.P),r),r,t.Bf)}}
A.mp.prototype={
D(){return"_GlowState."+this.b}}
A.wt.prototype={
sar(a,b){if(this.ax.k(0,b))return
this.ax=b
this.aw()},
sFu(a){if(this.ay===a)return
this.ay=a
this.aw()},
m(){var s=this,r=s.b
r===$&&A.b()
r.m()
r=s.y
r===$&&A.b()
r.w.bq$.A(0,r)
r.Aw()
r=s.c
if(r!=null)r.aP(0)
s.dt()},
Ie(a,b,c,d,e){var s,r,q,p=this,o=p.c
if(o!=null)o.aP(0)
p.at=p.at+b/200
o=p.f
s=p.r
s===$&&A.b()
r=s.b
s=s.a
o.a=r.ac(0,s.gn(s))
o.b=Math.min(r.ac(0,s.gn(s))+b/c*0.8,0.5)
q=Math.min(c,e*0.20096189432249995)
s=p.w
r=p.x
r===$&&A.b()
o=r.b
r=r.a
s.a=o.ac(0,r.gn(r))
s.b=Math.max(1-1/(0.7*Math.sqrt(p.at*q)),A.kl(o.ac(0,r.gn(r))))
r=d/e
p.Q=r
if(r!==p.as){o=p.y
o===$&&A.b()
if(!o.ga_W())o.lN(0)}else{o=p.y
o===$&&A.b()
o.fE(0)
p.z=null}o=p.b
o===$&&A.b()
o.e=B.na
if(p.a!==B.fH){o.jC(0,0)
p.a=B.fH}else{o=o.r
if(!(o!=null&&o.a!=null))p.aw()}p.c=A.ch(B.na,new A.a77(p))},
tP(a){var s=this
if(a!==B.R)return
switch(s.a.a){case 1:s.jc(B.cY)
break
case 3:s.a=B.fG
s.at=0
break
case 2:case 0:break}},
jc(a){var s,r,q=this,p=q.a
if(p===B.BZ||p===B.fG)return
p=q.c
if(p!=null)p.aP(0)
q.c=null
p=q.f
s=q.r
s===$&&A.b()
r=s.a
p.a=s.b.ac(0,r.gn(r))
p.b=0
p=q.w
r=q.x
r===$&&A.b()
s=r.a
p.a=r.b.ac(0,s.gn(s))
p.b=0
p=q.b
p===$&&A.b()
p.e=a
p.jC(0,0)
q.a=B.BZ},
VM(a){var s,r=this,q=r.z
if(q!=null){q=q.a
s=r.Q
r.as=s-(s-r.as)*Math.pow(2,-(a.a-q)/$.akO().a)
r.aw()}if(A.yO(r.Q,r.as,0.001)){q=r.y
q===$&&A.b()
q.fE(0)
r.z=null}else r.z=a},
aG(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.r
i===$&&A.b()
s=i.a
if(J.f(i.b.ac(0,s.gn(s)),0))return
s=b.a
r=b.b
q=s>r?r/s:1
p=s*3/2
o=Math.min(r,s*0.20096189432249995)
r=j.x
r===$&&A.b()
n=r.a
n=r.b.ac(0,n.gn(n))
r=j.as
m=$.av().bf()
l=j.ax
k=i.a
m.sar(0,A.aY(B.d.b2(255*i.b.ac(0,k.gn(k))),l.gn(l)>>>16&255,l.gn(l)>>>8&255,l.gn(l)&255))
a.ck(0)
a.av(0,0,j.d+j.e)
a.d5(0,1,n*q)
a.jk(new A.y(0,0,0+s,0+o))
a.hB(new A.t(s/2*(0.5+r),o-p),p,m)
a.ci(0)},
i(a){return"_GlowController(color: "+this.ax.i(0)+", axis: "+A.au6(this.ay)+")"}}
A.a77.prototype={
$0(){return this.a.jc(B.hl)},
$S:0}
A.Le.prototype={
Di(a,b,c,d,e){var s
if(c==null)return
switch(A.j0(d,e)){case B.x:c.aG(a,b)
break
case B.v:a.ck(0)
a.av(0,0,b.b)
a.d5(0,1,-1)
c.aG(a,b)
a.ci(0)
break
case B.ac:a.ck(0)
a.jS(0,1.5707963267948966)
a.d5(0,1,-1)
c.aG(a,new A.Z(b.b,b.a))
a.ci(0)
break
case B.at:a.ck(0)
s=b.a
a.av(0,s,0)
a.jS(0,1.5707963267948966)
c.aG(a,new A.Z(b.b,s))
a.ci(0)
break}},
aG(a,b){var s=this,r=s.d
s.Di(a,b,s.b,r,B.nl)
s.Di(a,b,s.c,r,B.nk)},
hZ(a){return a.b!=this.b||a.c!=this.c},
i(a){return"_GlowingOverscrollIndicatorPainter("+A.h(this.b)+", "+A.h(this.c)+")"}}
A.oy.prototype={
ao(){return new A.xS(null,null,B.l)},
iL(a){return A.yQ().$1(a)}}
A.xS.prototype={
gje(){var s,r,q,p,o,n,m=this,l=null,k=m.d
if(k===$){s=t.a7
r=new A.aH(0,0,s)
q=new A.xR(r,B.lQ,$.bq())
p=A.dV(l,l,l,l,m)
p.bj()
o=p.aQ$
o.b=!0
o.a.push(q.gtO())
q.a!==$&&A.ey()
q.a=p
n=A.eB(B.mH,p,l)
n.a.S(0,q.ge2())
t.m.a(n)
q.b!==$&&A.ey()
q.b=new A.b4(n,r,s.h("b4<aB.T>"))
m.d!==$&&A.be()
m.d=q
k=q}return k},
v7(a){var s,r,q,p,o,n,m=this
if(!m.a.iL(a))return!1
if(a instanceof A.ho){m.f=a
J.S(m.e)
s=a.e
r=m.c
r.cH(new A.tU(s<0,0))
m.r=!0
r=a.f
if(r!==0){s=m.gje()
q=A.E(Math.abs(r),1,1e4)
r=s.c
p=s.b
p===$&&A.b()
o=p.a
r.a=p.b.ac(0,o.gn(o))
r.b=Math.min(0.016+1.01/q,1)
r=s.a
r===$&&A.b()
r.e=A.c2(0,B.d.b2(q*0.02))
r.jC(0,0)
s.d=B.a_j}else if(a.d!=null){r=a.a.d
r.toString
n=A.E(Math.abs(s)/r+m.gje().e,0,1)
r=m.gje()
r.e=n
s=r.c
p=r.b
p===$&&A.b()
o=p.a
s.a=p.b.ac(0,o.gn(o))
o=r.e
s.b=0.016*o+0.016*(1-Math.exp(-o*8.237217661997105))
o=r.a
o===$&&A.b()
o.e=B.hm
if(r.d!==B.lR){o.jC(0,0)
r.d=B.lR}else{s=o.r
if(!(s!=null&&s.a!=null))r.aw()}}}else if(a instanceof A.iz||a instanceof A.eV){s=m.gje()
if(s.d===B.lR)s.jc(B.hm)}m.e=a
return!1},
QC(a){switch(this.a.c.a){case 0:return a>0?B.lT:B.lS
case 1:return a>0?B.cQ:B.fT
case 2:return a>0?B.lS:B.lT
case 3:return a>0?B.fT:B.cQ}},
m(){var s=this.gje(),r=s.a
r===$&&A.b()
r.m()
s.dt()
this.O1()},
L(a){var s={},r=a.a1(t.l).f
s.a=null
return new A.cx(this.gv6(),A.j5(this.gje(),new A.a9p(s,this,r.a),null),null,t.Bf)}}
A.a9p.prototype={
$2(a,b){var s,r,q,p,o,n,m=this,l=m.b,k=l.gje().b
k===$&&A.b()
s=k.a
s=k.b.ac(0,s.gn(s))
switch(A.ba(l.a.c).a){case 0:r=1+s
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
p=l.QC(k==null?0:k)
k=l.f
if(k==null)o=null
else{k=k.a.d
k.toString
o=k}if(o==null)o=m.a.a
k=A.tp(r,q,1)
l=l.a
n=A.ahx(p,l.f,k,!0)
return A.afm(n,s!==0&&o!==m.a.a?l.e:B.J)},
$S:305}
A.mx.prototype={
D(){return"_StretchState."+this.b}}
A.xR.prototype={
tP(a){var s=this
if(a!==B.R)return
switch(s.d.a){case 1:s.jc(B.hm)
break
case 3:s.d=B.lQ
s.e=0
break
case 2:case 0:break}},
jc(a){var s,r,q=this,p=q.d
if(p===B.C4||p===B.lQ)return
p=q.c
s=q.b
s===$&&A.b()
r=s.a
p.a=s.b.ac(0,r.gn(r))
p.b=0
p=q.a
p===$&&A.b()
p.e=a
p.jC(0,0)
q.d=B.C4},
i(a){return"_StretchController()"}}
A.tU.prototype={
c6(a){this.N3(a)
a.push("side: "+(this.a?"leading edge":"trailing edge"))}}
A.x6.prototype={
c6(a){var s,r
this.tn(a)
s=this.bv$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.yo.prototype={
c0(){this.du()
this.cF()
this.ee()},
m(){var s=this,r=s.ag$
if(r!=null)r.F(0,s.gdU())
s.ag$=null
s.aL()}}
A.yw.prototype={
c0(){this.du()
this.cF()
this.ee()},
m(){var s=this,r=s.ag$
if(r!=null)r.F(0,s.gdU())
s.ag$=null
s.aL()}}
A.xN.prototype={
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return b instanceof A.xN&&A.cF(b.a,this.a)},
gu(a){return A.cS(this.a)},
i(a){return"StorageEntryIdentifier("+B.b.bk(this.a,":")+")"}}
A.Zp.prototype={
AW(a){var s=A.a([],t.D5)
if(A.agz(a,s))a.z3(new A.Zq(s))
return s},
Jc(a,b){var s,r=this
if(r.a==null)r.a=A.z(t.K,t.z)
s=r.AW(a)
if(s.length!==0)r.a.l(0,new A.xN(s),b)},
yv(a){var s
if(this.a==null)return null
s=this.AW(a)
return s.length!==0?this.a.j(0,new A.xN(s)):null}}
A.Zq.prototype={
$1(a){return A.agz(a,this.a)},
$S:34}
A.nY.prototype={
L(a){return this.c}}
A.G9.prototype={
Fo(a,b,c){var s=t.sa.a(B.b.gb4(this.d))
if(s.H!=null){s.H=a
return A.bW(null,t.H)}return s.fQ(s.jW(a),b,c)},
qW(a){var s=t.sa.a(B.b.gb4(this.d))
if(s.H!=null){s.H=a
return}s.dk(s.jW(a))},
FZ(a,b,c){var s=null,r=new A.kd(this.z,this.as,B.fj,a,b,!0,s,A.iK(!1),$.bq())
r.AC(b,s,!0,c,a)
r.AD(b,s,s,!0,c,a)
return r},
am(a){this.Mx(a)
t.sa.a(a).so9(this.as)}}
A.lp.prototype={}
A.kd.prototype={
wT(a,b,c,d,e,f){return this.MH(a,b,c,d,e,null)},
so9(a){var s,r=this
if(r.aq===a)return
s=r.ghc(r)
r.aq=a
if(s!=null)r.x9(r.jW(s))},
goY(){var s=this.ax
s.toString
return Math.max(0,s*(this.aq-1)/2)},
od(a,b){var s=Math.max(0,a-this.goY())/(b*this.aq),r=B.d.yE(s)
if(Math.abs(s-r)<1e-10)return r
return s},
jW(a){var s=this.ax
s.toString
return a*s*this.aq+this.goY()},
ghc(a){var s,r,q=this,p=q.at
if(p!=null)s=!(q.z!=null&&q.Q!=null)
else s=!0
if(s)p=null
else{s=q.H
if(s==null){p.toString
s=q.z
s.toString
r=q.Q
r.toString
r=A.E(p,s,r)
s=q.ax
s.toString
s=q.od(r,s)
p=s}else p=s}return p},
zv(){var s,r,q=this,p=q.w,o=p.c
o.toString
o=A.Ga(o)
if(o!=null){p=p.c
p.toString
s=q.H
if(s==null){s=q.at
s.toString
r=q.ax
r.toString
r=q.od(s,r)
s=r}o.Jc(p,s)}},
IG(){var s,r,q
if(this.at==null){s=this.w
r=s.c
r.toString
r=A.Ga(r)
if(r==null)q=null
else{s=s.c
s.toString
q=r.yv(s)}if(q!=null)this.q=q}},
zu(){var s,r=this,q=r.H
if(q==null){q=r.at
q.toString
s=r.ax
s.toString
s=r.od(q,s)
q=s}r.w.e.sn(0,q)
q=$.fI.c8$
q===$&&A.b()
q.GJ()},
IF(a,b){if(b)this.q=a
else this.dk(this.jW(a))},
mE(a){var s,r,q,p,o=this,n=o.ax
n=n!=null?n:null
if(a===n)return!0
o.MD(a)
s=o.at
s=s!=null?s:null
if(s==null)r=o.q
else if(n===0){q=o.H
q.toString
r=q}else{n.toString
r=o.od(s,n)}p=o.jW(r)
o.H=a===0?r:null
if(p!==s){o.at=p
return!1}return!0},
jf(a){var s
this.MI(a)
if(!(a instanceof A.kd))return
s=a.H
if(s!=null)this.H=s},
mB(a,b){var s=a+this.goY()
return this.MB(s,Math.max(s,b-this.goY()))},
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
return new A.lp(o,l,s,r,q,p)},
$ilp:1}
A.pa.prototype={
jj(a){return new A.pa(!1,this.fS(a))},
gkE(){return this.b}}
A.nX.prototype={
jj(a){return new A.nX(this.fS(a))},
QR(a){var s,r
if(a instanceof A.kd){s=a.ghc(a)
s.toString
return s}s=a.at
s.toString
r=a.ax
r.toString
return s/r},
QS(a,b){var s
if(a instanceof A.kd)return a.jW(b)
s=a.ax
s.toString
return b*s},
kK(a,b){var s,r,q,p,o,n=this
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
if(s)return n.Mz(a,b)
q=n.go0()
p=n.QR(a)
s=q.c
if(b<-s)p-=0.5
else if(b>s)p+=0.5
o=n.QS(a,B.d.yE(p))
s=a.at
s.toString
if(o!==s){s=n.gk9()
r=a.at
r.toString
return new A.jT(o,A.xL(s,r-o,b),q)}return null}}
A.nZ.prototype={
ao(){return new A.Ml(B.l)}}
A.Ml.prototype={
aC(){this.aT()
this.d=this.a.r.z},
QH(a){var s,r
switch(this.a.e.a){case 0:s=a.a1(t.I)
s.toString
r=A.abK(s.w)
this.a.toString
return r
case 1:return B.v}},
L(a){var s,r,q=this,p=null,o=q.QH(a),n=q.a,m=n.w
if(m==null){n=n.at
n=n==null?p:n.iZ(a)}else n=m
n=new A.nX(B.zc.fS(n))
n=new A.pa(!1,p).fS(n)
m=q.a
s=m.Q
r=m.r
m=m.at
if(m==null)m=A.HT(a).Y5(!1)
return new A.cx(new A.a8o(q),A.ah3(o,r,s,new A.pa(!1,n),p,m,new A.a8p(q,o)),p,t.Bf)}}
A.a8o.prototype={
$1(a){var s,r,q,p,o
if(a.bv$===0&&this.a.a.y!=null&&a instanceof A.eV){s=t.y9.a(a.a)
r=s.c
r.toString
q=s.a
q.toString
p=s.b
p.toString
p=Math.max(0,A.E(r,q,p))
q=s.d
q.toString
o=B.d.b2(p/Math.max(1,q*s.f))
r=this.a
if(o!==r.d){r.d=o
r.a.y.$1(o)}}return!1},
$S:23}
A.a8p.prototype={
$2(a,b){var s=this.a.a
return new A.mf(this.b,b,0,B.DM,s.as,A.a([new A.If(s.r.as,!0,s.z,null)],t.E),null)},
$S:306}
A.hq.prototype={
gll(){return!0},
gw9(){return!1},
FA(a){return!0}}
A.Gw.prototype={
aA(a){var s=new A.Hl(this.d,0,!1,!1,A.ah())
s.aB()
return s},
aE(a,b){b.sa0L(this.d)
b.sa18(0)
b.sXl(!1)
b.sXk(!1)}}
A.Yn.prototype={}
A.ZM.prototype={}
A.BN.prototype={
uY(a){return this.Tn(a)},
Tn(a){var s=0,r=A.a8(t.H),q,p=this,o,n,m
var $async$uY=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)switch(s){case 0:n=A.ew(a.b)
m=p.a
if(!m.V(0,n)){s=1
break}m=m.j(0,n)
m.toString
o=a.a
if(o==="Menu.selectedCallback"){m.ga2L().$0()
m.ga0G()
o=$.ad.H$.f.f.e
o.toString
A.am6(o,m.ga0G(),t.r)}else if(o==="Menu.opened")m.ga2K(m).$0()
else if(o==="Menu.closed")m.ga2J(m).$0()
case 1:return A.a6(q,r)}})
return A.a7($async$uY,r)}}
A.o2.prototype={
bQ(a){return this.f!=a.f}}
A.jR.prototype={
ao(){return new A.Nu(null,A.z(t.wb,t.M),null,!0,null,B.l)}}
A.Nu.prototype={
gco(){return this.a.d},
hT(a,b){},
L(a){return A.a5l(this.bc$,this.a.c)}}
A.vW.prototype={
bQ(a){return a.f!=this.f}}
A.uE.prototype={
ao(){return new A.xm(B.l)}}
A.xm.prototype={
b3(){var s,r=this
r.cl()
s=r.c
s.toString
r.r=A.ob(s)
r.uV()
if(r.d==null){r.a.toString
r.d=!1}},
aX(a){this.bo(a)
this.uV()},
gCO(){this.a.toString
return!1},
uV(){var s,r=this
if(r.gCO()&&!r.w){r.w=!0;++$.jQ.x2$
s=$.fI.c8$
s===$&&A.b()
s.ga1E().by(new A.a8P(r),t.P)}},
UB(){var s,r=this
r.e=!1
r.f=null
s=$.fI.c8$
s===$&&A.b()
s.F(0,r.gvh())
r.uV()},
m(){if(this.e){var s=$.fI.c8$
s===$&&A.b()
s.F(0,this.gvh())}this.aL()},
L(a){var s,r,q=this,p=q.d
p.toString
if(p&&q.gCO())return B.lr
p=q.r
if(p==null)p=q.f
s=q.a
r=s.d
return A.a5l(p,new A.jR(s.c,r,null))}}
A.a8P.prototype={
$1(a){var s,r=this.a
r.w=!1
if(r.c!=null){s=$.fI.c8$
s===$&&A.b()
s.S(0,r.gvh())
r.az(new A.a8O(r,a))}$.jQ.Fm()},
$S:307}
A.a8O.prototype={
$0(){var s=this.a
s.f=this.b
s.e=!0
s.d=!1},
$S:0}
A.db.prototype={
gkR(a){return!0},
m(){var s=this,r=s.c
if(r!=null){r=r.eG$.A(0,s)
r.toString
s.F(0,r)
s.c=s.b=null}s.dt()
s.a=!0}}
A.hz.prototype={
wH(a){},
ln(a,b){var s,r,q=this,p=q.bc$
p=p==null?null:J.dA(p.gi6(),b)
s=p===!0
r=s?a.la(J.bb(q.bc$.gi6(),b)):a.q6()
if(a.b==null){a.b=b
a.c=q
p=new A.a0m(q,a)
a.S(0,p)
q.eG$.l(0,a,p)}a.Hi(r)
if(!s&&a.gkR(a)&&q.bc$!=null)q.vN(a)},
n6(){var s,r,q=this
if(q.eH$!=null){s=q.bc$
s=s==null?null:s.e
s=s==q.gco()||q.glr()}else s=!0
if(s)return
r=q.bc$
if(q.kC(q.eH$,!1))if(r!=null)r.m()},
glr(){var s,r,q=this
if(q.dA$)return!0
if(q.gco()==null)return!1
s=q.c
s.toString
r=A.ob(s)
if(r!=q.eH$){if(r==null)s=null
else{s=r.c
s=s==null?null:s.d
s=s===!0}s=s===!0}else s=!1
return s},
kC(a,b){var s,r,q=this
if(q.gco()==null||a==null)return q.E2(null,b)
if(b||q.bc$==null){s=q.gco()
s.toString
return q.E2(a.Xt(s,q),b)}s=q.bc$
s.toString
r=q.gco()
r.toString
s.a1q(r)
r=q.bc$
r.toString
a.hx(r)
return!1},
E2(a,b){var s,r=this,q=r.bc$
if(a==q)return!1
r.bc$=a
if(!b){if(a!=null){s=r.eG$
new A.b0(s,A.o(s).h("b0<1>")).Z(0,r.gW8())}r.wH(q)}return!0},
vN(a){var s,r=a.gkR(a),q=this.bc$
if(r){if(q!=null){r=a.b
r.toString
s=a.lu()
if(!J.f(J.bb(q.gi6(),r),s)||!J.dA(q.gi6(),r)){J.ee(q.gi6(),r,s)
q.kr()}}}else if(q!=null){r=a.b
r.toString
q.a1j(0,r,t.K)}}}
A.a0m.prototype={
$0(){var s=this.a
if(s.bc$==null)return
s.vN(this.b)},
$S:0}
A.aag.prototype={
$2(a,b){if(!a.a)a.F(0,b)},
$S:30}
A.PL.prototype={
aX(a){this.bo(a)
this.n6()},
b3(){var s,r,q,p,o=this
o.cl()
s=o.bc$
r=o.glr()
q=o.c
q.toString
q=A.ob(q)
o.eH$=q
p=o.kC(q,r)
if(r){o.hT(s,o.dA$)
o.dA$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.eG$.Z(0,new A.aag())
s=r.bc$
if(s!=null)s.m()
r.bc$=null
r.aL()}}
A.bL.prototype={
sn(a,b){var s=this.y
if(b==null?s!=null:b!==s){this.y=b
this.wJ(s)}},
Hi(a){this.y=a}}
A.fR.prototype={
q6(){return this.cy},
wJ(a){this.aw()},
la(a){return A.o(this).h("fR.T").a(a)},
lu(){var s=this.y
return s==null?A.o(this).h("bL.T").a(s):s}}
A.xl.prototype={
la(a){return this.Ng(a)},
lu(){var s=this.Nh()
s.toString
return s}}
A.uA.prototype={}
A.uz.prototype={}
A.aah.prototype={
$2(a,b){if(!a.a)a.F(0,b)},
$S:30}
A.od.prototype={}
A.HB.prototype={
ao(){return new A.pA(new A.Nr($.bq()),null,A.z(t.wb,t.M),null,!0,null,B.l,this.$ti.h("pA<1>"))}}
A.uF.prototype={
D(){return"RouteInformationReportingType."+this.b}}
A.pA.prototype={
gco(){return this.a.r},
aC(){var s,r=this
r.aT()
s=r.a.c
if(s!=null)s.S(0,r.goV())
r.a.f.Wx(r.guC())
r.a.e.S(0,r.guH())},
hT(a,b){var s,r,q=this,p=q.f
q.ln(p,"route")
s=p.y
r=s==null
if((r?A.o(p).h("bL.T").a(s):s)!=null){p=r?A.o(p).h("bL.T").a(s):s
p.toString
q.pf(p,new A.a93(q))}else{p=q.a.c
if(p!=null)q.pf(p.a,new A.a94(q))}},
V0(){var s=this
if(s.w||s.a.c==null)return
s.w=!0
$.bH.ax$.push(s.gUE())},
UF(a){var s,r,q,p,o=this
o.w=!1
s=o.f
r=s.y
q=r==null
if((q?A.o(s).h("bL.T").a(r):r)!=null){s=q?A.o(s).h("bL.T").a(r):r
s.toString
r=o.a.c
r.toString
q=o.e
q.toString
if(q!==B.SB)p=q===B.l9&&r.b.a==s.a
else p=!0
B.fe.qU("selectMultiEntryHistory",t.H)
q=s.a
q.toString
A.ahp(q,p,s.b)
r.b=r.a=s}o.e=B.l9},
UN(){this.a.e.ga2y()
this.a.toString
return null},
p8(){var s=this
s.f.sn(0,s.UN())
if(s.e==null)s.e=B.l9
s.V0()},
b3(){var s,r=this
r.r=!0
r.NX()
s=r.a.c
if(s!=null&&r.r)r.pf(s.a,new A.a92(r))
r.r=!1
r.p8()},
aX(a){var s,r,q,p=this
p.NY(a)
s=p.a
r=a.c
q=s.c==r
if(q)s.f===a.f
p.d=new A.N()
if(!q){s=r==null
if(!s)r.F(0,p.goV())
q=p.a.c
if(q!=null)q.S(0,p.goV())
s=s?null:r.a
r=p.a.c
if(s!=(r==null?null:r.a))p.Cy()}s=a.f
if(p.a.f!==s){r=p.guC()
s.a1l(r)
p.a.f.Wx(r)}p.a.toString
s=p.guH()
a.e.F(0,s)
p.a.e.S(0,s)
p.p8()},
m(){var s=this,r=s.a.c
if(r!=null)r.F(0,s.goV())
s.a.f.a1l(s.guC())
s.a.e.F(0,s.guH())
s.d=null
s.NZ()},
pf(a,b){var s,r,q=this
q.r=!1
q.d=new A.N()
s=q.a.d
s.toString
r=q.c
r.toString
s.a2O(a,r).by(q.Uq(q.d,b),t.H)},
Uq(a,b){return new A.a90(this,a,b)},
Cy(){var s=this
s.r=!0
s.pf(s.a.c.a,new A.a8Y(s))},
Rb(){var s=this
s.d=new A.N()
return s.a.e.a2Q().by(s.Sg(s.d),t.y)},
Sg(a){return new A.a8Z(this,a)},
DK(){this.az(new A.a91())
this.p8()
return new A.bl(null,t.E8)},
Sh(){this.az(new A.a9_())
this.p8()},
L(a){var s=this.bc$,r=this.a,q=r.c,p=r.f,o=r.d
r=r.e
return A.a5l(s,new A.Nz(q,p,o,r,this,new A.fZ(r.gFw(),null),null))}}
A.a93.prototype={
$0(){return this.a.a.e.ga2m()},
$S(){return this.a.$ti.h("ak<~>(1)()")}}
A.a94.prototype={
$0(){return this.a.a.e.ga2l()},
$S(){return this.a.$ti.h("ak<~>(1)()")}}
A.a92.prototype={
$0(){return this.a.a.e.gK9()},
$S(){return this.a.$ti.h("ak<~>(1)()")}}
A.a90.prototype={
$1(a){var s=0,r=A.a8(t.H),q,p=this,o,n
var $async$$1=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)switch(s){case 0:o=p.a
n=p.b
if(o.d!=n){s=1
break}s=3
return A.an(p.c.$0().$1(a),$async$$1)
case 3:if(o.d==n)o.DK()
case 1:return A.a6(q,r)}})
return A.a7($async$$1,r)},
$S(){return this.a.$ti.h("ak<~>(1)")}}
A.a8Y.prototype={
$0(){return this.a.a.e.gK9()},
$S(){return this.a.$ti.h("ak<~>(1)()")}}
A.a8Z.prototype={
$1(a){var s=this.a
if(this.b!=s.d)return new A.bl(!0,t.a9)
s.DK()
return new A.bl(a,t.a9)},
$S:309}
A.a91.prototype={
$0(){},
$S:0}
A.a9_.prototype={
$0(){},
$S:0}
A.Nz.prototype={
bQ(a){if(this.f==a.f)this.r===a.r
return!0}}
A.Nr.prototype={
q6(){return null},
wJ(a){this.aw()},
la(a){var s
if(a==null)return null
t.DI.a(a)
s=J.bG(a)
return new A.od(A.ci(s.gJ(a)),s.gT(a))},
lu(){var s,r=this,q=r.y,p=q==null
if((p?A.o(r).h("bL.T").a(q):q)==null)q=null
else{s=(p?A.o(r).h("bL.T").a(q):q).a
q=[s,(p?A.o(r).h("bL.T").a(q):q).b]}return q}}
A.pK.prototype={
aX(a){this.bo(a)
this.n6()},
b3(){var s,r,q,p,o=this
o.cl()
s=o.bc$
r=o.glr()
q=o.c
q.toString
q=A.ob(q)
o.eH$=q
p=o.kC(q,r)
if(r){o.hT(s,o.dA$)
o.dA$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.eG$.Z(0,new A.aah())
s=r.bc$
if(s!=null)s.m()
r.bc$=null
r.aL()}}
A.nV.prototype={
grh(){return this.e},
iH(){var s,r=this,q=A.ad3(r.gOP(),!1)
r.k4=q
r.gnG()
s=A.ad3(r.gOR(),!0)
r.p1=s
B.b.I(r.e,A.a([q,s],t.tD))
r.Mu()},
jq(a){var s,r=this
r.Mp(a)
s=r.at.Q
s===$&&A.b()
if(s===B.I&&!r.Q)r.a.GF(r)
return!0},
m(){B.b.U(this.e)
this.Mt()}}
A.dy.prototype={
gbB(a){return this.as},
gzz(){return this.ax},
SC(a){var s,r=this
switch(a.a){case 3:s=r.e
if(s.length!==0){s=B.b.gJ(s)
r.gll()
s.sll(!0)}s=r.z
if(s!=null){s.a.$0()
s.a=null}r.z=null
break
case 1:case 2:s=r.e
if(s.length!==0)B.b.gJ(s).sll(!1)
if(r.z==null)r.z=$.bH.a1x(B.Ew)
break
case 0:if(!r.ga_O()){r.a.GF(r)
r.Q=!0
s=r.z
if(s!=null){s.a.$0()
s.a=null}r.z=null}break}},
iH(){var s=this,r=s.gIZ(s),q=s.gIZ(s),p=s.gkL(),o=s.a
o.toString
o=s.at=A.dV(p,r,q,null,o)
o.bj()
p=o.aQ$
p.b=!0
p.a.push(s.gCz())
s.as=o
s.LO()
p=s.as
if(p.gb0(p)===B.R&&s.e.length!==0){p=B.b.gJ(s.e)
s.gll()
p.sll(!0)}},
n2(){this.Mr()
return this.at.cu(0)},
n0(){this.Mm()
var s=this.at
s.sn(0,s.b)},
wF(a){var s,r
if(a instanceof A.dy){s=this.at
s.toString
r=a.at.x
r===$&&A.b()
s.sn(0,r)}this.Ms(a)},
jq(a){this.ch=a
this.at.fu(0)
this.LM(a)
return!0},
kO(a){this.EY(a)
this.Mq(a)},
n1(a){this.EY(a)
this.Mn(a)},
EY(a){var s,r,q,p,o,n,m,l=this,k={},j=l.CW
l.CW=null
if(a instanceof A.dy&&l.FA(a)&&!0){s=l.ax.c
if(s!=null){r=s instanceof A.m9?s.a:s
r.toString
q=a.as
q.toString
p=r.gn(r)
o=q.x
o===$&&A.b()
if(!J.f(p,o)){p=q.Q
p===$&&A.b()
p=p===B.R||p===B.I}else p=!0
o=a.y.a
if(p)l.kz(q,o)
else{k.a=null
p=new A.a5g(l,q,a)
l.CW=new A.a5e(k,q,p)
q.bj()
n=q.aQ$
n.b=!0
n.a.push(p)
m=A.adx(r,q,new A.a5f(k,l,a))
k.a=m
l.kz(m,o)}}else l.kz(a.as,a.y.a)}else l.Vi(B.cb)
if(j!=null)j.$0()},
kz(a,b){this.ax.saW(0,a)
if(b!=null)b.by(new A.a5d(this,a),t.P)},
Vi(a){return this.kz(a,null)},
m(){var s=this,r=s.as
if(r!=null)r.bZ(s.gCz())
r=s.z
if(r!=null){r.a.$0()
r.a=null}s.z=null
r=s.at
if(r!=null)r.m()
s.y.d_(0,s.ch)
s.LN()},
gkL(){return"TransitionRoute"},
i(a){return"TransitionRoute(animation: "+A.h(this.at)+")"}}
A.a5g.prototype={
$1(a){var s,r
switch(a.a){case 3:case 0:s=this.a
s.kz(this.b,this.c.y.a)
r=s.CW
if(r!=null){r.$0()
s.CW=null}break
case 1:case 2:break}},
$S:3}
A.a5e.prototype={
$0(){this.b.bZ(this.c)
var s=this.a.a
if(s!=null)s.m()},
$S:0}
A.a5f.prototype={
$0(){var s,r=this.b
r.kz(this.a.a.a,this.c.y.a)
s=r.CW
if(s!=null){s.$0()
r.CW=null}},
$S:0}
A.a5d.prototype={
$1(a){var s=this.a.ax,r=this.b
if(s.c==r){s.saW(0,B.cb)
if(r instanceof A.m9)r.m()}},
$S:11}
A.DN.prototype={
gJ9(){var s=this.jx$
return s!=null&&s.length!==0}}
A.Kv.prototype={
hK(a,b){A.Yy(this.e,t.z).gw9()
return!1},
cO(a){return A.ad0(this.e).HR()}}
A.wT.prototype={
bQ(a){var s=this
return s.f!==a.f||s.r!==a.r||s.w!==a.w||s.x!==a.x}}
A.po.prototype={
ao(){return new A.mt(A.acD(!0,B.YX.i(0)+" Focus Scope",!1),A.adf(),B.l,this.$ti.h("mt<1>"))}}
A.mt.prototype={
aC(){var s,r,q=this
q.aT()
s=A.a([],t.ro)
r=q.a.c.fy
if(r!=null)s.push(r)
r=q.a.c.go
if(r!=null)s.push(r)
q.e=new A.wR(s)
if(q.a.c.gjF()){q.a.c.a.a.toString
s=!0}else s=!1
if(s){s=q.a.c.a.x.gdh()
if(s!=null)s.lF(q.f)}},
aX(a){var s,r=this
r.bo(a)
if(r.a.c.gjF()){r.a.c.a.a.toString
s=!0}else s=!1
if(s){s=r.a.c.a.x.gdh()
if(s!=null)s.lF(r.f)}},
b3(){this.cl()
this.d=null},
Qv(){this.az(new A.a84(this))},
m(){this.f.m()
this.aL()},
gE8(){var s=this.a.c.fy
if((s==null?null:s.gb0(s))!==B.ai){s=this.a.c.a
s=s==null?null:s.CW.a
s=s===!0}else s=!0
return s},
L(a){var s,r,q=this,p=null,o=q.a.c,n=o.gjF(),m=q.a.c
if(!m.gqO()){m=m.jx$
m=m!=null&&m.length!==0}else m=!0
s=q.a.c
s=s.gqO()||s.wX$>0
r=q.a.c
return A.j5(o.c,new A.a88(q),new A.wT(n,m,s,o,new A.tO(r.fx,new A.nY(new A.fZ(new A.a89(q),p),r.k3,p),p),p))}}
A.a84.prototype={
$0(){this.a.d=null},
$S:0}
A.a88.prototype={
$2(a,b){var s=this.a.a.c.c.a
b.toString
return new A.jR(b,s,null)},
$S:310}
A.a89.prototype={
$1(a){var s,r=null,q=A.aR([B.BI,new A.Kv(a,new A.bd(A.a([],t.B8),t.dc))],t.n,t.nT),p=this.a,o=p.e
o===$&&A.b()
s=p.d
if(s==null)s=p.d=new A.fE(new A.fZ(new A.a86(p),r),p.a.c.k2)
return A.QR(q,new A.o2(p.r,B.c7,B.Tx,A.afO(!1,new A.fE(A.j5(o,new A.a87(p),s),r),r,r,p.f),r))},
$S:311}
A.a87.prototype={
$2(a,b){var s,r,q=this.a,p=q.a.c,o=p.fy
o.toString
s=p.go
s.toString
r=p.a
r=r==null?null:r.CW
if(r==null)r=A.iK(!1)
return p.Fy(a,o,s,A.j5(r,new A.a85(q),b))},
$S:25}
A.a85.prototype={
$2(a,b){var s=this.a,r=s.gE8()
s.f.scd(!r)
return new A.hc(r,null,b,null)},
$S:312}
A.a86.prototype={
$1(a){var s,r=this.a.a.c,q=r.fy
q.toString
s=r.go
s.toString
return r.X9(a,q,s)},
$S:13}
A.jD.prototype={
az(a){var s,r=this.k1
if(r.gbi()!=null){r=r.gbi()
if(r.a.c.gjF())if(!r.gE8()){r.a.c.a.a.toString
s=!0}else s=!1
else s=!1
if(s){s=r.a.c.a.x.gdh()
if(s!=null)s.lF(r.f)}r.az(a)}else a.$0()},
Fy(a,b,c,d){return d},
iH(){var s=this
s.MS()
s.fy=A.GR(A.dy.prototype.gbB.call(s,s))
s.go=A.GR(A.dy.prototype.gzz.call(s))},
n2(){var s,r=this,q=r.k1
if(q.gbi()!=null){r.a.a.toString
s=!0}else s=!1
if(s){s=r.a.x.gdh()
if(s!=null)s.lF(q.gbi().f)}return r.MR()},
n0(){var s,r=this,q=r.k1
if(q.gbi()!=null){r.a.a.toString
s=!0}else s=!1
if(s){s=r.a.x.gdh()
if(s!=null)s.lF(q.gbi().f)}r.MP()},
sra(a){var s,r=this
if(r.fx===a)return
r.az(new A.Yz(r,a))
s=r.fy
s.toString
s.saW(0,r.fx?B.cT:A.dy.prototype.gbB.call(r,r))
s=r.go
s.toString
s.saW(0,r.fx?B.cb:A.dy.prototype.gzz.call(r))
r.mK()},
eT(){var s=0,r=A.a8(t.ij),q,p=this,o,n,m,l
var $async$eT=A.a9(function(a,b){if(a===1)return A.a5(b,r)
while(true)switch(s){case 0:p.k1.gbi()
o=A.ax(p.id,!0,t.CQ),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}l=J
s=6
return A.an(o[m].$0(),$async$eT)
case 6:if(!l.f(b,!0)){q=B.SC
s=1
break}case 4:++m
s=3
break
case 5:q=p.MY()
s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$eT,r)},
wA(a){this.Mo(a)
this.mK()},
mK(){var s,r=this
r.Ml()
r.az(new A.Yx())
s=r.k4
s===$&&A.b()
s.fo()
s=r.p1
s===$&&A.b()
r.gnG()
s.snG(!0)},
pX(){this.Mk()
var s=this.k4
s===$&&A.b()
s.fo()
s=this.k1
if(s.gbi()!=null)s.gbi().Qv()},
OQ(a){var s,r,q=this,p=null
q.gX_()
q.gw9()
s=q.gX0()
r=q.fy
if(r.gb0(r)!==B.ai){r=q.fy
r=r.gb0(r)===B.I}else r=!0
q.gw9()
return new A.hc(r,p,new A.tu(p,!1,p,!0,s,p),p)},
OS(a){var s=this,r=null,q=s.ok
return q==null?s.ok=A.dv(r,new A.po(s,s.k1,A.o(s).h("po<1>")),!1,r,!1,r,r,r,r,r,r,r,r,r,r,r,B.Sb,r,r,r):q},
i(a){return"ModalRoute("+this.b.i(0)+", animation: "+A.h(this.as)+")"}}
A.Yz.prototype={
$0(){this.a.fx=this.b},
$S:0}
A.Yx.prototype={
$0(){},
$S:0}
A.pn.prototype={
eT(){var s=0,r=A.a8(t.ij),q,p=this,o
var $async$eT=A.a9(function(a,b){if(a===1)return A.a5(b,r)
while(true)switch(s){case 0:o=p.jx$
if(o!=null&&o.length!==0){q=B.AK
s=1
break}q=p.Mv()
s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$eT,r)},
jq(a){var s,r,q=this,p=q.jx$
if(p!=null&&p.length!==0){s=p.pop()
s.b=null
s.a2r()
r=s.c&&--q.wX$===0
if(q.jx$.length===0||r)q.mK()
return!1}q.MQ(a)
return!0}}
A.HN.prototype={
L(a){var s,r,q,p=t.l,o=a.a1(p).f.f,n=Math.max(o.a,0),m=this.d,l=m?o.b:0
l=Math.max(l,0)
s=Math.max(o.c,0)
r=this.f
q=r?o.d:0
return new A.hp(new A.bi(n,l,s,Math.max(q,0)),new A.eJ(a.a1(p).f.Is(r,!0,!0,m),this.x,null),null)}}
A.HR.prototype={
Iz(){},
Gd(a,b){if(b!=null)b.cH(new A.uS(null,a,b,0))},
Ge(a,b,c){b.cH(A.adg(b,null,null,a,c))},
qj(a,b,c){b.cH(new A.ho(null,c,0,a,b,0))},
Gc(a,b){b.cH(new A.iz(null,a,b,0))},
mC(){},
m(){},
i(a){return"<optimized out>#"+A.bB(this)}}
A.jo.prototype={
mC(){this.a.eV(0)},
ghp(){return!1},
gfn(){return!1},
gdM(){return 0}}
A.WH.prototype={
ghp(){return!1},
gfn(){return!1},
gdM(){return 0},
m(){this.b.$0()
this.ox()}}
A.a1h.prototype={
Oz(a,b){var s,r,q=this
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
else return Math.min(r/3,s)*J.dT(a)}else return 0}}},
b8(a,b){var s,r,q,p,o=this
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
p=o.Oz(s,q)
if(p===0)return
s=o.a
if(A.ab5(s.w.a.c))p=-p
s.yZ(p>0?B.la:B.lb)
r=s.at
r.toString
s.tx(r-s.r.w6(s,p))},
m(){this.x=null
this.b.$0()},
i(a){return"<optimized out>#"+A.bB(this)}}
A.UB.prototype={
Gd(a,b){var s=t.o5.a(this.b.x)
if(b!=null)b.cH(new A.uS(s,a,b,0))},
Ge(a,b,c){b.cH(A.adg(b,null,t.mF.a(this.b.x),a,c))},
qj(a,b,c){b.cH(new A.ho(t.mF.a(this.b.x),c,0,a,b,0))},
Gc(a,b){var s=this.b.x
b.cH(new A.iz(s instanceof A.fo?s:null,a,b,0))},
ghp(){var s=this.b
return(s==null?null:s.w)!==B.dw},
gfn(){return!0},
gdM(){return 0},
m(){this.b=null
this.ox()},
i(a){return"<optimized out>#"+A.bB(this)+"("+A.h(this.b)+")"}}
A.zg.prototype={
Iz(){var s=this.a,r=this.b
r===$&&A.b()
s.eV(r.gdM())},
mC(){var s=this.a,r=this.b
r===$&&A.b()
s.eV(r.gdM())},
vE(){var s=this.b
s===$&&A.b()
s=s.x
s===$&&A.b()
if(!(Math.abs(this.a.tx(s))<1e-10)){s=this.a
s.eE(new A.jo(s))}},
vr(){this.a.eV(0)},
qj(a,b,c){var s=this.b
s===$&&A.b()
b.cH(new A.ho(null,c,s.gdM(),a,b,0))},
gfn(){return!0},
gdM(){var s=this.b
s===$&&A.b()
return s.gdM()},
m(){var s=this.b
s===$&&A.b()
s.m()
this.ox()},
i(a){var s=A.bB(this),r=this.b
r===$&&A.b()
return"<optimized out>#"+s+"("+r.i(0)+")"},
ghp(){return this.c}}
A.Cq.prototype={
vE(){var s=this.a,r=this.c
r===$&&A.b()
r=r.x
r===$&&A.b()
if(s.tx(r)!==0){s=this.a
s.eE(new A.jo(s))}},
vr(){var s=this.a,r=this.c
r===$&&A.b()
s.eV(r.gdM())},
qj(a,b,c){var s=this.c
s===$&&A.b()
b.cH(new A.ho(null,c,s.gdM(),a,b,0))},
ghp(){return!0},
gfn(){return!0},
gdM(){var s=this.c
s===$&&A.b()
return s.gdM()},
m(){var s=this.b
s===$&&A.b()
s.fc(0)
s=this.c
s===$&&A.b()
s.m()
this.ox()},
i(a){var s=A.bB(this),r=this.c
r===$&&A.b()
return"<optimized out>#"+s+"("+r.i(0)+")"}}
A.uM.prototype={
nY(a,b,c,d){var s,r=this
if(b.a==null){s=$.fB.hD$
s===$&&A.b()
s=s.V(0,c)}else s=!0
if(s){r.b.nY(a,b,c,d)
return}s=r.a
if(s.gaN(s)==null)return
s=s.gaN(s)
s.toString
if(A.aqj(s)){$.bH.t0(new A.a1d(r,a,b,c,d))
return}r.b.nY(a,b,c,d)},
qZ(a,b,c){return this.b.qZ(0,b,c)},
r0(a,b){return this.b.r0(a,b)},
xU(a){return this.b.xU(a)}}
A.a1d.prototype={
$1(a){var s=this
A.f9(new A.a1c(s.a,s.b,s.c,s.d,s.e))},
$S:2}
A.a1c.prototype={
$0(){var s=this
return s.a.nY(s.b,s.c,s.d,s.e)},
$S:0}
A.pW.prototype={
D(){return"AndroidOverscrollIndicator."+this.b}}
A.HS.prototype={
FY(a,b,c,d,e,f){return new A.aa8(this,f,c!==!1,d,e,b,a)},
Y5(a){return this.FY(null,null,null,null,null,a)},
Yc(a,b,c){return this.FY(null,a,b,null,null,c)},
iY(a){return A.ko()},
gwN(){return B.B4},
pU(a,b,c){var s=null
switch(this.iY(a)){case B.bg:case B.b5:case B.bh:return A.apX(b,c.b,B.ce,s,s,A.yQ(),B.t,s,s,s,s,B.cY,s)
case B.ay:case B.bf:case B.az:return b}},
pS(a,b,c){var s
switch(this.iY(a)){case B.az:case B.bg:case B.b5:case B.bh:s=1
break
case B.ay:s=2
break
case B.bf:s=3
break
default:s=null
break}if(s)c$0:for(;!0;)switch(s){case 1:return b
case 2:switch(1){case 1:break}if(2)c$1:for(;!0;)switch(2){case 1:return new A.oy(c.a,B.a9,b,null)
case 2:s=3
continue c$0}break c$0
case 3:return new A.nq(c.a,B.k,b,null)}},
rM(a){switch(this.iY(a)){case B.az:return new A.a1e()
case B.b5:return new A.a1f()
case B.ay:case B.bf:case B.bg:case B.bh:return new A.a1g()}},
iZ(a){switch(this.iY(a)){case B.az:return B.Cs
case B.b5:return B.Ct
case B.ay:case B.bf:case B.bg:case B.bh:return B.DS}},
i(a){return"ScrollBehavior"}}
A.a1e.prototype={
$1(a){return A.ao5(a.gc3(a))},
$S:313}
A.a1f.prototype={
$1(a){var s=a.gc3(a),r=t.pa
return new A.nM(A.aX(20,null,!1,r),s,A.aX(20,null,!1,r))},
$S:314}
A.a1g.prototype={
$1(a){return new A.fN(a.gc3(a),A.aX(20,null,!1,t.pa))},
$S:104}
A.aa8.prototype={
gwN(){var s=this.f
return s==null?B.B4:s},
pS(a,b,c){if(this.c)return this.a.pS(a,b,c)
return b},
pU(a,b,c){if(this.b)return this.a.pU(a,b,c)
return b},
iZ(a){var s=this.a.iZ(a)
return s},
rM(a){return this.a.rM(a)},
i(a){return"_WrappedScrollBehavior"}}
A.uN.prototype={
bQ(a){var s
if(A.A(this.f)===A.A(a.f))s=!1
else s=!0
return s}}
A.oh.prototype={
fQ(a,b,c){return this.WU(a,b,c)},
WU(a,b,c){var s=0,r=A.a8(t.H),q=this,p,o,n
var $async$fQ=A.a9(function(d,e){if(d===1)return A.a5(e,r)
while(true)switch(s){case 0:n=A.a([],t.iJ)
for(p=q.d,o=0;o<p.length;++o)n.push(p[o].fQ(a,b,c))
s=2
return A.an(A.D8(n,t.H),$async$fQ)
case 2:return A.a6(null,r)}})
return A.a7($async$fQ,r)},
am(a){this.d.push(a)
a.S(0,this.ge2())},
mZ(a,b){b.F(0,this.ge2())
B.b.A(this.d,b)},
m(){var s,r,q,p
for(s=this.d,r=s.length,q=this.ge2(),p=0;p<s.length;s.length===r||(0,A.R)(s),++p)s[p].F(0,q)
this.dt()},
FZ(a,b,c){return A.aqi(b,null,0,!0,c,a)},
i(a){var s=A.a([],t.s),r=this.d,q=r.length
if(q===0)s.push("no clients")
else if(q===1){r=B.b.gb4(r).at
r.toString
s.push("one client, offset "+B.d.M(r,1))}else s.push(""+q+" clients")
return"<optimized out>#"+A.bB(this)+"("+B.b.bk(s,", ")+")"}}
A.fH.prototype={
fd(){var s=this,r=null,q=s.gxk()?s.gep():r,p=s.gxk()?s.geo():r,o=s.gH6()?s.gc4():r,n=s.gH9()?s.go8():r,m=s.gfa()
return new A.ro(q,p,o,n,m)},
gyh(){var s=this
return s.gc4()<s.gep()||s.gc4()>s.geo()},
gFt(){var s=this
return s.gc4()===s.gep()||s.gc4()===s.geo()},
gjw(){var s=this
return s.go8()-A.E(s.gep()-s.gc4(),0,s.go8())-A.E(s.gc4()-s.geo(),0,s.go8())}}
A.ro.prototype={
gep(){var s=this.a
s.toString
return s},
geo(){var s=this.b
s.toString
return s},
gxk(){return this.a!=null&&this.b!=null},
gc4(){var s=this.c
s.toString
return s},
gH6(){return this.c!=null},
go8(){var s=this.d
s.toString
return s},
gH9(){return this.d!=null},
i(a){var s=this
return"FixedScrollMetrics("+B.d.M(Math.max(s.gc4()-s.gep(),0),1)+"..["+B.d.M(s.gjw(),1)+"].."+B.d.M(Math.max(s.geo()-s.gc4(),0),1)+")"},
gfa(){return this.e}}
A.KS.prototype={}
A.dL.prototype={}
A.Jd.prototype={
I0(a){if(t.bx.b(a))++a.bv$
return!1}}
A.du.prototype={
c6(a){this.Nz(a)
a.push(this.a.i(0))}}
A.uS.prototype={
c6(a){var s
this.lT(a)
s=this.d
if(s!=null)a.push(s.i(0))}}
A.eV.prototype={
c6(a){var s
this.lT(a)
a.push("scrollDelta: "+A.h(this.e))
s=this.d
if(s!=null)a.push(s.i(0))},
gGh(){return this.d}}
A.ho.prototype={
c6(a){var s,r=this
r.lT(a)
a.push("overscroll: "+B.d.M(r.e,1))
a.push("velocity: "+B.d.M(r.f,1))
s=r.d
if(s!=null)a.push(s.i(0))}}
A.iz.prototype={
c6(a){var s
this.lT(a)
s=this.d
if(s!=null)a.push(s.i(0))},
gGh(){return this.d}}
A.J7.prototype={
c6(a){this.lT(a)
a.push("direction: "+this.d.i(0))}}
A.xv.prototype={
c6(a){var s,r
this.tn(a)
s=this.bv$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.xu.prototype={
bQ(a){return this.f!==a.f}}
A.ka.prototype={
a09(a,b){return this.d.$1(b)}}
A.uQ.prototype={
ao(){return new A.uR(new A.t0(t.uk),B.l)}}
A.uR.prototype={
F(a,b){var s,r,q,p=this.d
p.toString
p=A.arv(p)
s=A.o(p).c
for(;p.t();){r=p.c
if(r==null)r=s.a(r)
if(J.f(r.d,b)){p=r.a
p.toString
A.o(r).h("lk.E").a(r);++p.a
s=r.b
s.c=r.c
r.c.b=s
q=--p.b
r.a=r.b=r.c=null
if(q===0)p.c=null
else if(r===p.c)p.c=s
return}}},
D9(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.d
if(i.b===0)return
p=A.ax(i,!0,t.cS)
for(i=p.length,o=0;o<i;++o){s=p[o]
try{if(s.a!=null)J.alT(s,a)}catch(n){r=A.au(n)
q=A.aG(n)
m=j instanceof A.bQ?A.cL(j):null
l=A.bj("while dispatching notifications for "+A.az(m==null?A.aI(j):m).i(0))
k=$.fb()
if(k!=null)k.$1(new A.bt(r,q,"widget library",l,new A.a1i(j),!1))}}},
L(a){var s=this
return new A.cx(new A.a1j(s),new A.cx(new A.a1k(s),new A.xu(s,s.a.c,null),null,t.Bf),null,t.iY)},
m(){this.d=null
this.aL()}}
A.a1i.prototype={
$0(){var s=null,r=this.a
return A.a([A.jg("The "+A.A(r).i(0)+" sending notification was",r,!0,B.b7,s,!1,s,s,B.aB,s,!1,!0,!0,B.bm,s,t.Ec)],t.F)},
$S:14}
A.a1j.prototype={
$1(a){var s=new A.JV(null,null,a.a,a.b,0)
s.bv$=a.bv$
this.a.D9(s)
return!1},
$S:51}
A.a1k.prototype={
$1(a){this.a.D9(a)
return!1},
$S:23}
A.JV.prototype={}
A.uO.prototype={
D(){return"ScrollDecelerationRate."+this.b}}
A.lM.prototype={
fS(a){var s=this.a
s=s==null?null:s.jj(a)
return s==null?a:s},
jj(a){return new A.lM(this.fS(a))},
w6(a,b){var s=this.a
if(s==null)return b
return s.w6(a,b)},
j3(a){var s,r=this.a
if(r==null){r=a.at
r.toString
if(r===0){r=a.z
r.toString
s=a.Q
s.toString
s=r!==s
r=s}else r=!0
return r}return r.j3(a)},
Im(a,b,c){var s=this.a
if(s==null){$.ad.toString
s=$.cd().gjP()
return Math.abs(a)>Math.max(Math.abs(s.a),Math.abs(s.b))}return s.Im(a,b,c)},
mA(a,b){var s=this.a
if(s==null)return 0
return s.mA(a,b)},
pL(a,b,c,d){var s=this.a
if(s==null){s=b.c
s.toString
return s}return s.pL(a,b,c,d)},
kK(a,b){var s=this.a
if(s==null)return null
return s.kK(a,b)},
gk9(){var s=this.a
s=s==null?null:s.gk9()
return s==null?$.akl():s},
go0(){var s=this.a
s=s==null?null:s.go0()
return s==null?$.akm():s},
gxN(){var s=this.a
s=s==null?null:s.gxN()
return s==null?18:s},
gr6(){var s=this.a
s=s==null?null:s.gr6()
return s==null?50:s},
gnH(){var s=this.a
s=s==null?null:s.gnH()
return s==null?8000:s},
we(a){var s=this.a
if(s==null)return 0
return s.we(a)},
gwO(){var s=this.a
return s==null?null:s.gwO()},
gkE(){return!0},
i(a){var s=this.a
if(s==null)return"ScrollPhysics"
return"ScrollPhysics -> "+s.i(0)}}
A.GU.prototype={
jj(a){return new A.GU(this.fS(a))},
pL(a,b,c,d){var s,r,q,p,o,n,m,l
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
return p+(o-q)}}l=this.My(a,b,c,d)
if(r){q=b.b
q.toString
l=A.E(l,p,q)}return l}}
A.qk.prototype={
jj(a){return new A.qk(this.b,this.fS(a))},
GS(a){switch(this.b.a){case 1:return 0.07*Math.pow(1-a,2)
case 0:return 0.52*Math.pow(1-a,2)}},
w6(a,b){var s,r,q,p,o,n,m
if(!a.gyh())return b
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
m=this.GS((o-Math.abs(b))/s)}else{s.toString
m=this.GS(o/s)}return J.dT(b)*A.amj(o,Math.abs(b),m)},
mA(a,b){return 0},
kK(a,b){var s,r,q,p,o,n,m,l=this.go0()
if(Math.abs(b)>=l.c||a.gyh()){switch(this.b.a){case 1:s=1400
break
case 0:s=0
break
default:s=null}r=this.gk9()
q=a.at
q.toString
p=a.z
p.toString
o=a.Q
o.toString
n=new A.Rs(p,o,r,l)
if(q<p){n.f=new A.jT(p,A.xL(r,q-p,b),B.bE)
n.r=-1/0}else if(q>o){n.f=new A.jT(o,A.xL(r,q-o,b),B.bE)
n.r=-1/0}else{q=n.e=A.anZ(0.135,q,b,s)
m=q.gqz()
if(b>0&&m>o){p=q.IO(o)
n.r=p
n.f=new A.jT(o,A.xL(r,o-o,Math.min(q.dg(0,p),5000)),B.bE)}else if(b<0&&m<p){o=q.IO(p)
n.r=o
n.f=new A.jT(p,A.xL(r,p-p,Math.min(q.dg(0,o),5000)),B.bE)}else n.r=1/0}return n}return null},
gr6(){return 100},
we(a){return J.dT(a)*Math.min(0.000816*Math.pow(Math.abs(a),1.967),4e4)},
gwO(){return 3.5},
gnH(){switch(this.b.a){case 1:return 64e3
case 0:return A.lM.prototype.gnH.call(this)}},
gk9(){switch(this.b.a){case 1:return A.ahh(0.3,1.3,75)
case 0:return A.lM.prototype.gk9.call(this)}}}
A.qx.prototype={
jj(a){return new A.qx(this.fS(a))},
mA(a,b){var s,r,q=a.at
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
kK(a,b){var s,r,q,p,o=null,n=this.go0()
if(a.gyh()){s=a.at
s.toString
r=a.Q
r.toString
if(s>r)q=r
else q=o
r=a.z
r.toString
if(s<r)q=r
s=this.gk9()
r=a.at
r.toString
q.toString
return new A.jT(q,A.xL(s,r-q,Math.min(0,b)),n)}s=Math.abs(b)
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
r=new A.S4(r,b,n)
s=Math.exp(Math.log(0.35*s/778.3530259679999)/($.ak2()-1))
r.e=s
r.f=Math.abs(b*s/3.065)
return r}}
A.oj.prototype={
D(){return"ScrollPositionAlignmentPolicy."+this.b}}
A.iA.prototype={
AC(a,b,c,d,e){if(d!=null)this.jf(d)
this.IG()},
gep(){var s=this.z
s.toString
return s},
geo(){var s=this.Q
s.toString
return s},
gxk(){return this.z!=null&&this.Q!=null},
gc4(){var s=this.at
s.toString
return s},
gH6(){return this.at!=null},
go8(){var s=this.ax
s.toString
return s},
gH9(){return this.ax!=null},
jf(a){var s=this,r=a.z
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
if(A.A(a)!==A.A(s))s.fr.Iz()
s.w.zE(s.fr.ghp())
s.dy.sn(0,s.fr.gfn())},
Ka(a){var s,r,q,p=this,o=p.at
o.toString
if(a!==o){s=p.r.mA(p,a)
o=p.at
o.toString
r=a-s
p.at=r
if(r!==o){p.vO()
p.A0()
r=p.at
r.toString
p.wI(r-o)}if(s!==0){o=p.fr
o.toString
r=p.fd()
q=$.ad.H$.z.j(0,p.w.z)
q.toString
o.qj(r,q,s)
return s}}return 0},
x9(a){var s=this,r=s.at
r.toString
s.as=a-r
s.at=a
s.vO()
s.A0()
$.bH.ax$.push(new A.a1l(s))},
zv(){var s,r=this.w,q=r.c
q.toString
q=A.Ga(q)
if(q!=null){r=r.c
r.toString
s=this.at
s.toString
q.Jc(r,s)}},
IG(){var s,r,q
if(this.at==null){s=this.w
r=s.c
r.toString
r=A.Ga(r)
if(r==null)q=null
else{s=s.c
s.toString
q=r.yv(s)}if(q!=null)this.at=q}},
IF(a,b){if(b)this.at=a
else this.dk(a)},
zu(){var s=this.at
s.toString
this.w.e.sn(0,s)
s=$.fI.c8$
s===$&&A.b()
s.GJ()},
mE(a){if(this.ax!==a){this.ax=a
this.ch=!0}return!0},
mB(a,b){var s,r,q,p=this
if(!A.yO(p.z,a,0.001)||!A.yO(p.Q,b,0.001)||p.ch||p.db!==A.ba(p.gfa())){p.z=a
p.Q=b
p.db=A.ba(p.gfa())
s=p.ay?p.fd():null
p.ch=!1
p.CW=!0
if(p.ay){r=p.cx
r.toString
s.toString
r=!p.Yd(r,s)}else r=!1
if(r)return!1
p.ay=!0}if(p.CW){p.MC()
p.w.K2(p.r.j3(p))
p.CW=!1}s=p.fd()
if(p.cx!=null){r=Math.max(s.gc4()-s.gep(),0)
q=p.cx
if(r===Math.max(q.gc4()-q.gep(),0))if(s.gjw()===p.cx.gjw()){r=Math.max(s.geo()-s.gc4(),0)
q=p.cx
r=r===Math.max(q.geo()-q.gc4(),0)&&s.e===p.cx.e}else r=!1
else r=!1
r=!r}else r=!0
if(r){if(!p.cy){A.f9(p.gYN())
p.cy=!0}p.cx=p.fd()}return!0},
Yd(a,b){var s=this,r=s.r.pL(s.fr.gfn(),b,a,s.fr.gdM()),q=s.at
q.toString
if(r!==q){s.at=r
return!1}return!0},
mC(){this.fr.mC()
this.vO()},
vO(){var s,r,q,p,o,n=this,m=n.w
switch(m.a.c.a){case 0:s=B.dE
r=B.dD
break
case 1:s=B.dF
r=B.dG
break
case 2:s=B.dD
r=B.dE
break
case 3:s=B.dG
r=B.dF
break
default:s=null
r=null}q=A.b8(t.nS)
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
if(A.aeu(q,n.dx))return
n.dx=q
m=m.z
if(m.gbi()!=null)m.gbi().a1w(q)},
wT(a,b,c,d,e,f){var s,r,q,p,o,n=this,m=null,l=A.aq0(a)
l.toString
s=f!=null&&f!==a?A.fz(f.bt(0,a),a.ghe().eK(f.ghe())):m
switch(c.a){case 0:r=l.jV(a,b,s)
q=n.z
q.toString
p=n.Q
p.toString
o=A.E(r.a,q,p)
break
case 1:r=l.jV(a,1,s)
q=n.z
q.toString
p=n.Q
p.toString
o=A.E(r.a,q,p)
r=n.at
r.toString
if(o<r)o=r
break
case 2:r=l.jV(a,0,s)
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
if(o===r)return A.bW(m,t.H)
if(e.a===B.t.a){n.dk(o)
return A.bW(m,t.H)}return n.fQ(o,d,e)},
nK(a,b,c,d){var s,r=this.z
r.toString
s=this.Q
s.toString
b=A.E(b,r,s)
return this.MU(0,b,c,d)},
eE(a){var s,r,q=this,p=q.fr
if(p!=null){s=p.ghp()
r=q.fr.gfn()
if(r&&!a.gfn())q.wC()
q.fr.m()}else{r=!1
s=!1}q.fr=a
if(s!==a.ghp())q.w.zE(q.fr.ghp())
q.dy.sn(0,q.fr.gfn())
if(!r&&q.fr.gfn())q.wG()},
wG(){var s=this.fr
s.toString
s.Gd(this.fd(),$.ad.H$.z.j(0,this.w.z))},
wI(a){var s,r,q=this.fr
q.toString
s=this.fd()
r=$.ad.H$.z.j(0,this.w.z)
r.toString
q.Ge(s,r,a)},
wC(){var s,r,q=this,p=q.fr
p.toString
s=q.fd()
r=$.ad.H$.z.j(0,q.w.z)
r.toString
p.Gc(s,r)
q.zu()
q.zv()},
YO(){var s,r,q
this.cy=!1
s=this.w.z
if($.ad.H$.z.j(0,s)!=null){r=this.fd()
q=$.ad.H$.z.j(0,s)
q.toString
s=$.ad.H$.z.j(0,s)
if(s!=null)s.cH(new A.lL(r,q,0))}},
m(){var s=this,r=s.fr
if(r!=null)r.m()
s.fr=null
s.dy.m()
s.dt()},
c6(a){var s,r,q=this
q.MT(a)
s=q.z
s=s==null?null:B.d.M(s,1)
r=q.Q
r=r==null?null:B.d.M(r,1)
a.push("range: "+A.h(s)+".."+A.h(r))
r=q.ax
a.push("viewport: "+A.h(r==null?null:B.d.M(r,1)))}}
A.a1l.prototype={
$1(a){this.a.as=0},
$S:2}
A.lL.prototype={
c6(a){this.Ny(a)
a.push(this.a.i(0))}}
A.xt.prototype={
c6(a){var s,r
this.tn(a)
s=this.bv$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.NF.prototype={}
A.lN.prototype={
AD(a,b,c,d,e,f){var s=this
if(s.at==null&&c!=null)s.at=c
if(s.fr==null)s.eE(new A.jo(s))},
gfa(){return this.w.a.c},
jf(a){var s,r=this
r.MA(a)
r.fr.a=r
r.k4=a.k4
s=a.ok
if(s!=null){r.ok=s
s.a=r
a.ok=null}},
eE(a){var s,r=this
r.k3=0
r.ME(a)
s=r.ok
if(s!=null)s.m()
r.ok=null
if(!r.fr.gfn())r.yZ(B.fj)},
eV(a){var s,r,q,p=this,o=p.r.kK(p,a)
if(o!=null){s=p.fr
s=s==null?null:s.ghp()
s=new A.zg(s!==!1,p)
r=A.ace(null,0,p.w)
r.bj()
q=r.aY$
q.b=!0
q.a.push(s.gvD())
r.fE(0)
r.z=B.ar
r.vz(o).a.a.hW(s.gvq())
s.b=r
p.eE(s)}else p.eE(new A.jo(p))},
yZ(a){var s,r,q,p=this
if(p.k4===a)return
p.k4=a
s=p.fd()
r=p.w.z
q=$.ad.H$.z.j(0,r)
q.toString
r=$.ad.H$.z.j(0,r)
if(r!=null)r.cH(new A.J7(a,s,q,0))},
fQ(a,b,c){var s,r,q,p=this,o=p.at
o.toString
if(A.yO(a,o,p.r.go0().a)){p.dk(a)
return A.bW(null,t.H)}o=p.at
o.toString
s=new A.Cq(p)
r=new A.bg(new A.aq($.ai,t.U),t.V)
s.b=r
o=A.ace("DrivenScrollActivity",o,p.w)
o.bj()
q=o.aY$
q.b=!0
q.a.push(s.gvD())
o.z=B.ar
o.kg(a,b,c).a.a.hW(s.gvq())
s.c!==$&&A.ey()
s.c=o
p.eE(s)
return r.a},
dk(a){var s,r,q=this
q.eE(new A.jo(q))
s=q.at
s.toString
if(s!==a){q.x9(a)
q.wG()
r=q.at
r.toString
q.wI(r-s)
q.wC()}q.eV(0)},
yk(a){var s,r,q,p,o=this
if(a===0){o.eV(0)
return}s=o.at
s.toString
r=o.z
r.toString
r=Math.max(s+a,r)
q=o.Q
q.toString
p=Math.min(r,q)
if(p!==s){o.eE(new A.jo(o))
o.yZ(-a>0?B.la:B.lb)
s=o.at
s.toString
o.dy.sn(0,!0)
o.x9(p)
o.wG()
r=o.at
r.toString
o.wI(r-s)
o.wC()
o.eV(0)}},
m(){var s=this.ok
if(s!=null)s.m()
this.ok=null
this.MG()}}
A.Rs.prototype={
vy(a){var s,r=this,q=r.r
q===$&&A.b()
if(a>q){if(!isFinite(q))q=0
r.w=q
q=r.f
q===$&&A.b()
s=q}else{r.w=0
q=r.e
q===$&&A.b()
s=q}s.a=r.a
return s},
cA(a,b){return this.vy(b).cA(0,b-this.w)},
dg(a,b){return this.vy(b).dg(0,b-this.w)},
iI(a){return this.vy(a).iI(a-this.w)},
i(a){return"BouncingScrollSimulation(leadingExtent: "+A.h(this.b)+", trailingExtent: "+A.h(this.c)+")"}}
A.S4.prototype={
cA(a,b){var s,r=this,q=r.e
q===$&&A.b()
s=A.E(b/q,0,1)
q=r.f
q===$&&A.b()
return r.b+q*(1.2*s*s*s-3.27*s*s+3.065*s)*J.dT(r.c)},
dg(a,b){var s,r=this,q=r.e
q===$&&A.b()
s=A.E(b/q,0,1)
q=r.f
q===$&&A.b()
return q*(3.6*s*s-6.54*s+3.065)*J.dT(r.c)/r.e},
iI(a){var s=this.e
s===$&&A.b()
return a>=s}}
A.HU.prototype={
D(){return"ScrollViewKeyboardDismissBehavior."+this.b}}
A.a9c.prototype={
$2(a,b){if(!a.a)a.F(0,b)},
$S:30}
A.uU.prototype={
ao(){var s=null,r=t.J
return new A.uV(new A.Ns($.bq()),new A.br(s,r),new A.br(s,t.lV),new A.br(s,r),B.yY,s,A.z(t.wb,t.M),s,!0,s,s,s,B.l)},
a28