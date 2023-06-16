f(d===1){o=e
s=p}while(true)switch(s){case 0:s=b!=null?3:4
break
case 3:n=null
p=6
s=9
return A.an(a.a.qU(a.b),$async$kl)
case 9:n=e
p=2
s=8
break
case 6:p=5
j=o
if(A.au(j) instanceof A.jf){k=$.fz.hC$
k===$&&A.b()
k.qm(a)
throw j}else throw j
s=8
break
case 5:s=2
break
case 8:if(n==null){k=$.fz.hC$
k===$&&A.b()
k.qm(a)
throw A.d(A.aa("Unable to read data"))}q=b.$1(n)
s=1
break
case 4:m=null
p=11
s=14
return A.an(a.a.cv(0,a.b),$async$kl)
case 14:m=e
p=2
s=13
break
case 11:p=10
i=o
if(A.au(i) instanceof A.jf){k=$.fz.hC$
k===$&&A.b()
k.qm(a)
throw i}else throw i
s=13
break
case 10:s=2
break
case 13:if(m==null){k=$.fz.hC$
k===$&&A.b()
k.qm(a)
throw A.d(A.aa("Unable to read data"))}c.toString
q=c.$1(A.cR(m.buffer,0,null))
s=1
break
case 1:return A.a6(q,r)
case 2:return A.a5(o,r)}})
return A.a7($async$kl,r)}}
A.a6x.prototype={}
A.mM.prototype={
glc(){return this.a},
xN(a){var s,r={},q=a.a
if(q==null)q=$.QA()
r.a=r.b=null
q.a04("AssetManifest.ec955590.json",A.aul(),t.jd).by(new A.R0(r,this,a,q),t.H).ic(new A.R1(r))
s=r.a
if(s!=null)return s
s=new A.aq($.ah,t.hv)
r.b=new A.bg(s,t.q8)
return s},
P6(a,b,c){var s,r,q,p=b.b
if(p==null||c==null||J.fa(c))return a
s=A.ada(t.i,t.N)
for(r=J.ar(c);r.t();){q=r.gG(r)
s.l(0,this.Dh(q),q)}p.toString
return this.Q9(s,p)},
Q9(a,b){var s,r,q
if(a.m2(b)){s=a.j(0,b)
s.toString
return s}r=a.a_S(b)
q=a.Z8(b)
if(r==null)return a.j(0,q)
if(q==null)return a.j(0,r)
if(b<2||b>(r+q)/2)return a.j(0,q)
else return a.j(0,r)},
Dh(a){var s,r,q,p
if(a===this.a)return 1
s=A.adn(a,0,null)
r=s.glj().length>1?s.glj()[s.glj().length-2]:""
q=$.ajN().qx(r)
if(q!=null&&q.b.length-1>0){p=q.b[1]
p.toString
return A.aj4(p)}return 1},
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return b instanceof A.mM&&b.glc()===this.glc()&&!0},
gu(a){return A.T(this.glc(),this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"AssetImage(bundle: "+A.h(this.b)+', name: "'+this.glc()+'")'}}
A.R0.prototype={
$1(a){var s,r=this,q=r.b,p=q.glc(),o=a==null?null:J.ba(a,q.glc())
o=q.P6(p,r.c,o)
o.toString
s=new A.fU(r.d,o,q.Dh(o))
q=r.a
p=q.b
if(p!=null)p.cY(0,s)
else q.a=new A.bl(s,t.rT)},
$S:191}
A.R1.prototype={
$2(a,b){this.a.b.pV(a,b)},
$S:60}
A.fr.prototype={
cr(a){return new A.fr(this.a.cr(0),this.b,this.c)},
i(a){var s=this.c
s=s!=null?s+" ":""
return s+this.a.i(0)+" @ "+A.fR(this.b)+"x"},
gu(a){return A.T(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(J.S(b)!==A.A(s))return!1
return b instanceof A.fr&&b.a===s.a&&b.b===s.b&&b.c==s.c}}
A.ej.prototype={
gu(a){return A.T(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(J.S(b)!==A.A(s))return!1
return b instanceof A.ej&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&J.f(b.c,s.c)},
a0t(a,b){return this.a.$2(a,b)}}
A.X1.prototype={
zu(a){var s,r=this
r.a=a
s=r.b
if(s!=null){r.b=null
a.f=!0
B.b.Z(s,a.gpz(a))
r.a.f=!1}},
S(a,b){var s=this.a
if(s!=null)return s.S(0,b)
s=this.b;(s==null?this.b=A.a([],t.fE):s).push(b)},
F(a,b){var s,r=this.a
if(r!=null)return r.F(0,b)
for(s=0;r=this.b,s<r.length;++s)if(J.f(r[s],b)){r=this.b
r.toString
B.b.fq(r,s)
break}}}
A.nq.prototype={
oo(a){++this.a.r},
m(){var s=this.a;--s.r
s.oV()
this.a=null}}
A.lc.prototype={
S(a,b){var s,r,q,p,o,n,m,l=this
if(l.w)A.a_(A.aa(u.y))
l.e=!0
l.a.push(b)
o=l.b
if(o!=null)try{o=o.cr(0)
n=l.f
b.a.$2(o,!n)}catch(m){s=A.au(m)
r=A.aG(m)
l.Iv(A.bj("by a synchronously-called image listener"),s,r)}o=l.c
if(o!=null&&b.c!=null)try{n=b.c
n.toString
n.$2(o.a,o.b)}catch(s){q=A.au(s)
p=A.aG(s)
if(!J.f(q,l.c.a))A.dr(new A.bt(q,p,"image resource service",A.bj("by a synchronously-called image error listener"),null,!1))}},
F(a,b){var s,r,q,p,o,n=this
if(n.w)A.a_(A.aa(u.y))
for(s=n.a,r=0;r<s.length;++r)if(J.f(s[r],b)){B.b.fq(s,r)
break}if(s.length===0){s=n.x
q=A.a(s.slice(0),A.ai(s))
for(p=q.length,o=0;o<q.length;q.length===p||(0,A.Q)(q),++o)q[o].$0()
B.b.U(s)
n.oV()}},
oV(){var s,r=this
if(!r.e||r.w||r.a.length!==0||r.r!==0)return
s=r.b
if(s!=null)s.a.m()
r.b=null
r.w=!0},
K3(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.w)A.a_(A.aa(u.y))
p=i.b
if(p!=null)p.a.m()
i.b=a
p=i.a
if(p.length===0)return
o=A.ax(p,!0,t.tg)
for(p=o.length,n=a.a,m=a.b,l=a.c,k=0;k<p;++k){s=o[k]
try{s.a0t(new A.fr(n.cr(0),m,l),!1)}catch(j){r=A.au(j)
q=A.aG(j)
i.Iv(A.bj("by an image listener"),r,q)}}},
rs(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i="image resource service"
this.c=new A.bt(b,e,i,a,c,d)
o=this.a
n=t.pE
m=A.ax(new A.dL(new A.aL(o,new A.X2(),A.ai(o).h("aL<1,~(N,cW?)?>")),n),!0,n.h("p.E"))
s=!1
for(o=m.length,l=0;l<o;++l){r=m[l]
try{r.$2(b,e)
s=!0}catch(k){q=A.au(k)
p=A.aG(k)
if(!J.f(q,b)){n=A.bj("when reporting an error to an image listener")
j=$.f9()
if(j!=null)j.$1(new A.bt(q,p,i,n,null,!1))}}}if(!s){o=this.c
o.toString
A.dr(o)}},
Iv(a,b,c){return this.rs(a,b,null,!1,c)}}
A.X2.prototype={
$1(a){return a.c},
$S:193}
A.FJ.prototype={
O5(a,b,c,d,e){this.d=c
b.eQ(this.gR7(),new A.YE(this,d),t.H)},
R9(a){this.z=a
if(this.a.length!==0)this.kg()},
R_(a){var s,r,q,p=this
p.cx=!1
if(p.a.length===0)return
s=p.ay
if(s!=null){r=p.ax
r===$&&A.b()
r=a.a-r.a>=s.a}else r=!0
if(r){s=p.at
p.BQ(new A.fr(s.gh0(s).cr(0),p.Q,p.d))
p.ax=a
s=p.at
p.ay=s.gYH(s)
s=p.at
s.gh0(s).m()
p.at=null
q=B.f.i0(p.ch,p.z.gx3())
if(p.z.gIu()===-1||q<=p.z.gIu())p.kg()
return}s.toString
r=p.ax
r===$&&A.b()
p.CW=A.cg(new A.aS(B.d.b1((s.a-(a.a-r.a))*$.aiM)),new A.YD(p))},
kg(){var s=0,r=A.a8(t.H),q,p=2,o,n=this,m,l,k,j,i
var $async$kg=A.a9(function(a,b){if(a===1){o=b
s=p}while(true)switch(s){case 0:j=n.at
if(j!=null)j.gh0(j).m()
n.at=null
p=4
s=7
return A.an(n.z.rO(),$async$kg)
case 7:n.at=b
p=2
s=6
break
case 4:p=3
i=o
m=A.au(i)
l=A.aG(i)
n.rs(A.bj("resolving an image frame"),m,n.as,!0,l)
s=1
break
s=6
break
case 3:s=2
break
case 6:if(n.z.gx3()===1){if(n.a.length===0){s=1
break}j=n.at
n.BQ(new A.fr(j.gh0(j).cr(0),n.Q,n.d))
j=n.at
j.gh0(j).m()
n.at=null
s=1
break}n.DG()
case 1:return A.a6(q,r)
case 2:return A.a5(o,r)}})
return A.a7($async$kg,r)},
DG(){if(this.cx)return
this.cx=!0
$.bG.rU(this.gQZ())},
BQ(a){this.K3(a);++this.ch},
S(a,b){var s,r=this
if(r.a.length===0){s=r.z
if(s!=null)s=r.b==null||s.gx3()>1
else s=!1}else s=!1
if(s)r.kg()
r.L6(0,b)},
F(a,b){var s,r=this
r.L7(0,b)
if(r.a.length===0){s=r.CW
if(s!=null)s.aO(0)
r.CW=null}},
oV(){this.L5()
if(this.w)this.y=null}}
A.YE.prototype={
$2(a,b){this.a.rs(A.bj("resolving an image codec"),a,this.b,!0,b)},
$S:60}
A.YD.prototype={
$0(){this.a.DG()},
$S:0}
A.Lf.prototype={}
A.Le.prototype={}
A.yU.prototype={}
A.jp.prototype={
k(a,b){var s
if(b==null)return!1
if(b instanceof A.jp)if(b.a===this.a)if(b.b==this.b)s=A.cE(b.f,this.f)
else s=!1
else s=!1
else s=!1
return s},
gu(a){return A.T(this.a,this.b,this.c,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"InlineSpanSemanticsInformation{text: "+this.a+", semanticsLabel: "+A.h(this.b)+", recognizer: "+A.h(this.c)+"}"}}
A.ft.prototype={
JD(a){var s={}
s.a=null
this.aP(new A.Xb(s,a,new A.yU()))
return s.a},
IQ(a){var s,r=new A.bR("")
this.FH(r,!0,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
am(a,b){var s={}
if(b<0)return null
s.a=null
this.aP(new A.Xa(s,b,new A.yU()))
return s.a},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.S(b)!==A.A(this))return!1
return b instanceof A.ft&&J.f(b.a,this.a)},
gu(a){return J.m(this.a)}}
A.Xb.prototype={
$1(a){var s=a.JE(this.b,this.c)
this.a.a=s
return s==null},
$S:38}
A.Xa.prototype={
$1(a){var s=a.Xr(this.b,this.c)
this.a.a=s
return s==null},
$S:38}
A.dc.prototype={
aG(a,b){var s=this.a.aG(0,b)
return new A.dc(this.b.a6(0,b),s)},
bX(a,b){var s,r,q=this
if(a instanceof A.dc){s=A.as(a.a,q.a,b)
r=A.fV(a.b,q.b,b)
r.toString
return new A.dc(r,s)}if(a instanceof A.d3){s=A.as(a.a,q.a,b)
return new A.dM(q.b,1-b,a.b,s)}return q.k7(a,b)},
bY(a,b){var s,r,q=this
if(a instanceof A.dc){s=A.as(q.a,a.a,b)
r=A.fV(q.b,a.b,b)
r.toString
return new A.dc(r,s)}if(a instanceof A.d3){s=A.as(q.a,a.a,b)
return new A.dM(q.b,b,a.b,s)}return q.k8(a,b)},
eT(a,b){var s=$.av().de()
s.f6(this.b.Y(b).dJ(a))
return s},
h8(a,b,c){var s,r,q,p,o=this.a
switch(o.c.a){case 0:break
case 1:s=this.b
if(o.b===0)a.cF(s.Y(c).dJ(b),o.hf())
else{r=$.av().bf()
r.saq(0,o.a)
q=s.Y(c).dJ(b)
p=q.cJ(-o.ge7())
a.qi(q.cJ(o.gzO()),p,r)}break}},
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return b instanceof A.dc&&b.a.k(0,this.a)&&b.b.k(0,this.b)},
gu(a){return A.T(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"RoundedRectangleBorder("+this.a.i(0)+", "+this.b.i(0)+")"}}
A.dM.prototype={
aG(a,b){var s=this.a.aG(0,b)
return new A.dM(this.b.a6(0,b),b,this.d,s)},
bX(a,b){var s,r,q,p=this
if(a instanceof A.dc){s=A.as(a.a,p.a,b)
r=A.fV(a.b,p.b,b)
r.toString
return new A.dM(r,p.c*b,p.d,s)}if(a instanceof A.d3){s=A.as(a.a,p.a,b)
r=p.c
return new A.dM(p.b,r+(1-r)*(1-b),a.b,s)}if(a instanceof A.dM){s=A.as(a.a,p.a,b)
r=A.fV(a.b,p.b,b)
r.toString
q=A.R(a.c,p.c,b)
q.toString
return new A.dM(r,q,p.d,s)}return p.k7(a,b)},
bY(a,b){var s,r,q,p=this
if(a instanceof A.dc){s=A.as(p.a,a.a,b)
r=A.fV(p.b,a.b,b)
r.toString
return new A.dM(r,p.c*(1-b),p.d,s)}if(a instanceof A.d3){s=A.as(p.a,a.a,b)
r=p.c
return new A.dM(p.b,r+(1-r)*b,a.b,s)}if(a instanceof A.dM){s=A.as(p.a,a.a,b)
r=A.fV(p.b,a.b,b)
r.toString
q=A.R(p.c,a.c,b)
q.toString
return new A.dM(r,q,p.d,s)}return p.k8(a,b)},
DD(a){var s,r,q,p,o,n,m,l,k=this.c
if(k===0||a.c-a.a===a.d-a.b)return a
s=a.c
r=a.a
q=s-r
p=a.d
o=a.b
n=p-o
m=1-this.d
if(q<n){l=k*((n-q)/2)*m
return new A.z(r,o+l,s,p-l)}else{l=k*((q-n)/2)*m
return new A.z(r+l,o,s-l,p)}},
AK(a,b){var s,r,q,p=this.b.Y(b),o=this.c
if(o===0)return p
s=this.d
if(s!==0){r=a.c-a.a
q=a.d-a.b
s=0.5+s/2
if(r<q){o=A.mP(p,A.zg(new A.bn(r/2,s*q/2)),o)
o.toString
return o}else{o=A.mP(p,A.zg(new A.bn(s*r/2,q/2)),o)
o.toString
return o}}return A.mP(p,A.q9(a.gfB()/2),o)},
eT(a,b){var s=$.av().de(),r=this.AK(a,b)
r.toString
s.f6(r.dJ(this.DD(a)))
return s},
h8(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=this.AK(b,c)
s.toString
a.cF(s.dJ(this.DD(b)).cJ(r.b*r.d/2),r.hf())
break}},
k(a,b){var s=this
if(b==null)return!1
if(J.S(b)!==A.A(s))return!1
return b instanceof A.dM&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c===s.c},
gu(a){return A.T(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r="RoundedRectangleBorder(",q=s.d
if(q!==0)return r+s.a.i(0)+", "+s.b.i(0)+", "+B.d.M(s.c*100,1)+u.D+B.d.M(q*100,1)+"% oval)"
return r+s.a.i(0)+", "+s.b.i(0)+", "+B.d.M(s.c*100,1)+"% of the way to being a CircleBorder)"}}
A.e4.prototype={
aG(a,b){return new A.e4(this.a.aG(0,b))},
bX(a,b){var s,r=this
if(a instanceof A.e4)return new A.e4(A.as(a.a,r.a,b))
if(a instanceof A.d3){s=A.as(a.a,r.a,b)
return new A.dO(1-b,a.b,s)}if(a instanceof A.dc){s=A.as(a.a,r.a,b)
return new A.dP(a.b,1-b,s)}return r.k7(a,b)},
bY(a,b){var s,r=this
if(a instanceof A.e4)return new A.e4(A.as(r.a,a.a,b))
if(a instanceof A.d3){s=A.as(r.a,a.a,b)
return new A.dO(b,a.b,s)}if(a instanceof A.dc){s=A.as(r.a,a.a,b)
return new A.dP(a.b,b,s)}return r.k8(a,b)},
eT(a,b){var s=a.gfB()/2,r=$.av().de()
r.f6(A.acY(a,new A.bn(s,s)))
return r},
h8(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=b.gfB()/2
a.cF(A.acY(b,new A.bn(s,s)).cJ(r.b*r.d/2),r.hf())
break}},
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return b instanceof A.e4&&b.a.k(0,this.a)},
gu(a){var s=this.a
return A.T(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"StadiumBorder("+this.a.i(0)+")"}}
A.dO.prototype={
aG(a,b){return new A.dO(b,this.c,this.a.aG(0,b))},
bX(a,b){var s,r,q,p=this
if(a instanceof A.e4)return new A.dO(p.b*b,p.c,A.as(a.a,p.a,b))
if(a instanceof A.d3){s=A.as(a.a,p.a,b)
r=p.b
return new A.dO(r+(1-r)*(1-b),a.b,s)}if(a instanceof A.dO){s=A.as(a.a,p.a,b)
r=A.R(a.b,p.b,b)
r.toString
q=A.R(a.c,p.c,b)
q.toString
return new A.dO(r,q,s)}return p.k7(a,b)},
bY(a,b){var s,r,q,p=this
if(a instanceof A.e4)return new A.dO(p.b*(1-b),p.c,A.as(p.a,a.a,b))
if(a instanceof A.d3){s=A.as(p.a,a.a,b)
r=p.b
return new A.dO(r+(1-r)*b,a.b,s)}if(a instanceof A.dO){s=A.as(p.a,a.a,b)
r=A.R(p.b,a.b,b)
r.toString
q=A.R(p.c,a.c,b)
q.toString
return new A.dO(r,q,s)}return p.k8(a,b)},
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
return new A.z(r,o+l,s,p-l)}else{l=k*((q-n)/2)*m
return new A.z(r+l,o,s-l,p)}},
mi(a){var s,r,q,p=A.q9(a.gfB()/2),o=this.c
if(o!==0){s=a.c-a.a
r=a.d-a.b
q=this.b
o=0.5+o/2
if(s<r){o=A.mP(p,A.zg(new A.bn(s/2,o*r/2)),q)
o.toString
return o}else{o=A.mP(p,A.zg(new A.bn(o*s/2,r/2)),q)
o.toString
return o}}return p},
eT(a,b){var s=$.av().de()
s.f6(this.mi(a).dJ(this.Ea(a)))
return s},
h8(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.cF(this.mi(b).dJ(this.Ea(b)).cJ(s.b*s.d/2),s.hf())
break}},
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return b instanceof A.dO&&b.a.k(0,this.a)&&b.b===this.b},
gu(a){return A.T(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r=s.c
if(r!==0)return"StadiumBorder("+s.a.i(0)+", "+B.d.M(s.b*100,1)+u.D+B.d.M(r*100,1)+"% oval)"
return"StadiumBorder("+s.a.i(0)+", "+B.d.M(s.b*100,1)+"% of the way to being a CircleBorder)"}}
A.dP.prototype={
aG(a,b){var s=this.a.aG(0,b)
return new A.dP(this.b.a6(0,b),b,s)},
bX(a,b){var s,r,q,p=this
if(a instanceof A.e4)return new A.dP(p.b,p.c*b,A.as(a.a,p.a,b))
if(a instanceof A.dc){s=p.c
return new A.dP(p.b,s+(1-s)*(1-b),A.as(a.a,p.a,b))}if(a instanceof A.dP){s=A.as(a.a,p.a,b)
r=A.fV(a.b,p.b,b)
r.toString
q=A.R(a.c,p.c,b)
q.toString
return new A.dP(r,q,s)}return p.k7(a,b)},
bY(a,b){var s,r,q,p=this
if(a instanceof A.e4)return new A.dP(p.b,p.c*(1-b),A.as(p.a,a.a,b))
if(a instanceof A.dc){s=p.c
return new A.dP(p.b,s+(1-s)*b,A.as(p.a,a.a,b))}if(a instanceof A.dP){s=A.as(p.a,a.a,b)
r=A.fV(p.b,a.b,b)
r.toString
q=A.R(p.c,a.c,b)
q.toString
return new A.dP(r,q,s)}return p.k8(a,b)},
mi(a){var s=a.gfB()/2
s=A.fV(this.b,A.zg(new A.bn(s,s)),1-this.c)
s.toString
return s},
eT(a,b){var s=$.av().de()
s.f6(this.mi(a).Y(b).dJ(a))
return s},
h8(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.cF(this.mi(b).Y(c).dJ(b).cJ(s.b*s.d/2),s.hf())
break}},
k(a,b){var s=this
if(b==null)return!1
if(J.S(b)!==A.A(s))return!1
return b instanceof A.dP&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c===s.c},
gu(a){return A.T(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"StadiumBorder("+this.a.i(0)+", "+this.b.i(0)+", "+B.d.M(this.c*100,1)+"% of the way to being a RoundedRectangleBorder)"}}
A.m1.prototype={
D(){return"TextOverflow."+this.b}}
A.lq.prototype={
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(b instanceof A.lq)if(b.a.k(0,r.a))if(b.b===r.b)s=b.c==r.c
else s=!1
else s=!1
else s=!1
return s},
gu(a){var s=this
return A.T(s.a,s.b,s.d,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"PlaceholderDimensions("+this.a.i(0)+", "+A.h(this.d)+")"}}
A.vE.prototype={
D(){return"TextWidthBasis."+this.b}}
A.a5X.prototype={}
A.IE.prototype={
a3(){var s=this,r=s.a
if(r!=null)r.m()
s.dy=s.dx=s.fr=s.a=null},
srw(a,b){var s,r,q=this
if(J.f(q.d,b))return
s=q.d
s=s==null?null:s.a
if(!J.f(s,b.a)){s=q.CW
if(s!=null)s.m()
q.CW=null}s=q.d
s=s==null?null:s.b0(0,b)
r=s==null?B.cC:s
q.d=b
q.e=null
s=r.a
if(s>=3)q.a3()
else if(s>=2)q.b=!0},
gri(){var s=this.e
if(s==null){s=this.d
s=s==null?null:s.IQ(!1)
this.e=s}return s==null?"":s},
syA(a,b){if(this.f===b)return
this.f=b
this.a3()},
sbA(a){var s,r=this
if(r.r===a)return
r.r=a
r.a3()
s=r.CW
if(s!=null)s.m()
r.CW=null},
syB(a){var s,r=this
if(r.w===a)return
r.w=a
r.a3()
s=r.CW
if(s!=null)s.m()
r.CW=null},
sYI(a){if(this.x==a)return
this.x=a
this.a3()},
sxx(a,b){if(J.f(this.y,b))return
this.y=b
this.a3()},
sxC(a){if(this.z==a)return
this.z=a
this.a3()},
syC(a){if(this.as===a)return
this.as=a
this.a3()},
t4(a){if(a==null||a.length===0||A.cE(a,this.ch))return
this.ch=a
this.a3()},
BB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.d.a
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
o=l==null?f:new A.IB(l)
k=e.w
j=e.x
i=e.d
h=e.r
if(h==null)h=14
e=e.as
e=A.acU(n,i,h*q,j,k,e,m,p,f,s,r,o)}if(e==null){e=g.f
s=g.r
if(s==null)s=a
r=g.w
q=g.z
p=g.at
p=A.acU(g.x,f,14*r,f,f,f,g.y,q,f,e,s,p)
e=p}return e},
Pz(){return this.BB(null)},
grk(){var s,r,q=this,p=q.CW
if(p==null){p=q.BB(B.Q)
s=$.av().wh(p)
p=q.d
if(p==null)r=null
else{p=p.a
r=p==null?null:p.zf(q.w)}if(r!=null)s.yi(r)
s.pD(" ")
p=s.b2()
p.h3(B.Sd)
q.CW=p}return p.gbF(p)},
gbd(a){var s=this.as,r=this.a
s=s===B.Yb?r.gHK():r.gbd(r)
return Math.ceil(s)},
ee(a){var s
switch(a.a){case 0:s=this.a
return s.gpH(s)
case 1:s=this.a
return s.ga_j(s)}},
BA(){var s,r,q=this,p=q.d
if(p==null)throw A.d(A.aa("TextPainter.text must be set to a non-null value before using the TextPainter."))
s=q.Pz()
r=$.av().wh(s)
s=q.w
p.Fs(r,q.ch,s)
q.ay=r.ga0H()
q.a=r.b2()
q.b=!1},
CM(a,b){var s,r,q=this
q.a.h3(new A.jH(b))
if(a!==b){switch(q.as.a){case 1:s=Math.ceil(q.a.gHK())
break
case 0:s=Math.ceil(q.a.ga0b())
break
default:s=null}s=A.E(s,a,b)
r=q.a
if(s!==Math.ceil(r.gbd(r)))q.a.h3(new A.jH(s))}},
xv(a,b){var s=this,r=s.a==null
if(!r&&b===s.cx&&a===s.cy)return
if(s.b||r)s.BA()
s.cx=b
s.cy=a
s.dy=s.dx=s.fr=null
s.CM(b,a)
s.ax=s.a.rI()},
a_U(){return this.xv(1/0,0)},
aF(a,b){var s,r=this,q=r.cx,p=r.cy
if(r.a==null||q==null||p==null)throw A.d(A.aa("TextPainter.paint called when text geometry was not yet calculated.\nPlease call layout() before paint() to position the text before painting it."))
if(r.b){r.BA()
r.CM(q,p)}s=r.a
s.toString
a.jl(s,b)},
C8(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.gri().length
if(g===0||a>g)return null
s=B.c.am(h.gri(),Math.max(0,a-1))
r=(s&63488)===55296||h.d.am(0,a)===8205||s===8207||s===8206
q=r?2:1
p=A.a([],t.px)
for(o=-g,n=!r,m=s===10;p.length===0;){l=a-q
p=h.a.z_(l,a,B.m3)
if(p.length===0){if(n&&m)break
if(l<o)break
q*=2
continue}k=B.b.gJ(p)
if(m){o=k.d
return new A.z(h.gud().a,o,h.gud().a,o+o-k.b)}o=k.e
j=o===B.r?k.c:k.a
i=o===B.Q?j-(b.c-b.a):j
o=h.a
o=A.E(i,0,o.gbd(o))
n=h.a
return new A.z(o,k.b,A.E(i,0,n.gbd(n)),k.d)}return null},
C7(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.gri().length
if(h===0||a<0)return null
s=B.c.am(i.gri(),Math.min(a,h-1))
r=(s&63488)===55296||s===8205||s===8207||s===8206
q=r?2:1
p=A.a([],t.px)
for(o=h<<1>>>0,n=!r;p.length===0;){m=a+q
p=i.a.z_(a,m,B.m3)
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
return new A.z(o,l.b,A.E(j,0,n.gbd(n)),l.d)}return null},
gud(){var s=this
switch(s.f.a){case 0:return B.j
case 1:return new A.t(s.gbd(s),0)
case 2:return new A.t(s.gbd(s)/2,0)
case 3:case 4:switch(s.r.a){case 0:return new A.t(s.gbd(s),0)
case 1:return B.j}break
case 5:switch(s.r.a){case 0:return B.j
case 1:return new A.t(s.gbd(s),0)}break}},
Bq(a,b){var s,r,q,p,o=this
if(a.k(0,o.dx)&&b.k(0,o.dy))return
s=a.a
switch(a.b.a){case 0:r=o.C8(s,b)
if(r==null)r=o.C7(s,b)
break
case 1:r=o.C7(s,b)
if(r==null)r=o.C8(s,b)
break
default:r=null}q=r!=null
p=q?new A.t(r.a,r.b):o.gud()
o.db=new A.a5X(p,q?r.d-r.b:null)
o.dx=a
o.dy=b},
m(){var s=this,r=s.CW
if(r!=null)r.m()
s.CW=null
r=s.a
if(r!=null)r.m()
s.d=s.a=null}}
A.vD.prototype={
gFY(a){return this.e},
gyU(){return!0},
hG(a,b){t.Y.b(a)},
Fs(a,b,c){var s,r,q,p,o=this.a,n=o!=null
if(n)a.yi(o.zf(c))
o=this.b
if(o!=null)try{a.pD(o)}catch(q){o=A.au(q)
if(o instanceof A.fc){s=o
r=A.aG(q)
A.dr(new A.bt(s,r,"painting library",A.bj("while building a TextSpan"),null,!1))
a.pD("\ufffd")}else throw q}o=this.c
if(o!=null)for(p=0;p<1;++p)o[p].Fs(a,b,c)
if(n)a.hb()},
aP(a){var s,r
if(this.b!=null)if(!a.$1(this))return!1
s=this.c
if(s!=null)for(r=0;r<1;++r)if(!s[r].aP(a))return!1
return!0},
JE(a,b){var s,r,q,p,o=this.b
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
FH(a,b,c){var s,r=this.b
if(r!=null)a.a+=r
r=this.c
if(r!=null)for(s=0;s<1;++s)r[s].FH(a,!0,c)},
FG(a,b,c){var s,r,q=this.b
if(q!=null){s=A.a([],t.ve)
a.push(A.afO(q,null,null,s))}q=this.c
if(q!=null)for(r=0;r<1;++r)q[r].FG(a,b,!1)},
XE(a){return this.FG(a,null,!1)},
Xr(a,b){var s,r,q,p=this.b
if(p==null)return null
s=b.a
r=a-s
q=p.length
if(r<q)return B.c.am(p,r)
b.a=s+q
return null},
b0(a,b){var s,r,q,p,o,n=this
if(n===b)return B.dw
if(A.A(b)!==A.A(n))return B.cC
if(b.b==n.b){s=n.c==null?null:1
s=s!=(b.c==null?null:1)||n.a==null!==(b.a==null)}else s=!0
if(s)return B.cC
s=n.a
if(s!=null){r=b.a
r.toString
q=s.b0(0,r)
p=q.a>0?q:B.dw
if(p===B.cC)return p}else p=B.dw
s=n.c
if(s!=null)for(r=b.c,o=0;o<1;++o){q=s[o].b0(0,r[o])
if(q.a>p.a)p=q
if(p===B.cC)return p}return p},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
if(!s.L9(0,b))return!1
return b instanceof A.vD&&b.b==s.b&&s.e.k(0,b.e)&&A.cE(b.c,s.c)},
gu(a){var s=this,r=null,q=A.ft.prototype.gu.call(s,s),p=s.c
p=p==null?r:A.cS(p)
return A.T(q,s.b,r,r,r,r,s.e,p,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
bP(){return"TextSpan"},
$iad:1,
$iim:1,
gxU(){return null},
gxV(){return null}}
A.q.prototype={
gl6(){return this.e},
gkx(a){return this.d},
mI(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=b9==null?a.a:b9,a1=a.ay
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
c=b0==null?a.gkx(a):b0
b=b1==null?a.e:b1
return A.bS(r,q,s,null,g,f,e,d,c,b,a.fr,p,a.x,h,o,a1,k,a0,j,n,a.ax,a.fy,a.f,i,l,m)},
fU(a){return this.mI(null,null,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
XT(a){return this.mI(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null)},
Y1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5){return this.mI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,null,r,s,a0,a1,a2,a3,a4,a5)},
FS(a,b){return this.mI(null,null,a,null,null,null,null,null,null,null,null,b,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
FN(a){return this.mI(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null,null,null)},
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
a1=a4.gkx(a4)
a2=a4.e
a3=a4.f
return this.Y1(g,r,s,null,c,b,a,a0,a1,a2,e,q,o,d,p,h,k,j,n,i,a4.fy,a3,f,l,m)},
zf(a){var s,r,q=this,p=q.gl6(),o=q.r
o=o==null?null:o*a
s=q.ch
if(s==null){s=q.c
if(s!=null){r=$.av().bf()
r.saq(0,s)
s=r}else s=null}return A.ahe(s,q.b,q.CW,q.cx,q.cy,q.db,q.d,p,q.fr,o,q.x,q.fx,q.w,q.ay,q.as,q.at,q.y,q.ax,q.dy,q.Q,q.z)},
b0(a,b){var s=this
if(s===b)return B.dw
if(s.a!==b.a||s.d!=b.d||s.r!=b.r||s.w!=b.w||s.y!=b.y||s.z!=b.z||s.Q!=b.Q||s.as!=b.as||s.at!=b.at||s.ay!=b.ay||s.ch!=b.ch||!A.cE(s.dy,b.dy)||!A.cE(s.fr,b.fr)||!A.cE(s.fx,b.fx)||!A.cE(s.gl6(),b.gl6())||!1)return B.cC
if(!J.f(s.b,b.b)||!J.f(s.c,b.c)||!J.f(s.CW,b.CW)||!J.f(s.cx,b.cx)||s.cy!=b.cy||s.db!=b.db)return B.Sw
return B.dw},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.S(b)!==A.A(r))return!1
if(b instanceof A.q)if(b.a===r.a)if(J.f(b.b,r.b))if(J.f(b.c,r.c))if(b.r==r.r)if(b.w==r.w)if(b.y==r.y)if(b.z==r.z)if(b.Q==r.Q)if(b.as==r.as)if(b.at==r.at)if(b.ay==r.ay)if(b.ch==r.ch)if(A.cE(b.dy,r.dy))if(A.cE(b.fr,r.fr))if(A.cE(b.fx,r.fx))if(J.f(b.CW,r.CW))if(J.f(b.cx,r.cx))if(b.cy==r.cy)if(b.db==r.db)if(b.d==r.d)if(A.cE(b.gl6(),r.gl6()))s=!0
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
gu(a){var s,r=this,q=null,p=r.gl6(),o=p==null?q:A.cS(p),n=A.T(r.cy,r.db,r.d,o,r.f,r.fy,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a),m=r.dy,l=r.fx
o=m==null?q:A.cS(m)
s=l==null?q:A.cS(l)
return A.T(r.a,r.b,r.c,r.r,r.w,r.x,r.y,r.z,r.Q,r.as,r.at,r.ax,r.ay,r.ch,o,q,s,r.CW,r.cx,n)},
bP(){return"TextStyle"}}
A.Or.prototype={}
A.D0.prototype={
O1(a,b,c,d,e){var s=this
s.r=A.aiA(new A.VH(s),s.gwJ(s),0,10,0)},
cM(a,b){var s,r,q=this
if(b>q.r)return q.gqt()
s=q.e
r=q.c
return q.d+s*Math.pow(q.b,b)/r-s/r-q.f/2*b*b},
du(a,b){var s=this
if(b>s.r)return 0
return s.e*Math.pow(s.b,b)-s.f*b},
gqt(){var s=this
if(s.f===0)return s.d-s.e/s.c
return s.cM(0,s.r)},
IL(a){var s,r=this,q=r.d
if(a===q)return 0
s=r.e
if(s!==0)if(s>0)q=a<q||a>r.gqt()
else q=a>q||a<r.gqt()
else q=!0
if(q)return 1/0
return A.aiA(r.gwJ(r),r.ga23(r),0,10,a)},
jz(a){return Math.abs(this.du(0,a))<this.a.c},
i(a){return"FrictionSimulation(c\u2093: "+B.d.M(this.b,1)+", x\u2080: "+B.d.M(this.d,1)+", dx\u2080: "+B.d.M(this.e,1)+")"}}
A.VH.prototype={
$1(a){var s=this.a
return s.e*Math.pow(s.b,a)*s.c-s.f},
$S:65}
A.a1W.prototype={
i(a){return"Simulation"}}
A.a3P.prototype={
i(a){return"SpringDescription(mass: "+B.d.M(this.a,1)+", stiffness: "+B.f.M(this.b,1)+", damping: "+B.d.M(this.c,1)+")"}}
A.ou.prototype={
D(){return"SpringType."+this.b}}
A.Ik.prototype={
cM(a,b){return this.b+this.c.cM(0,b)},
du(a,b){return this.c.du(0,b)},
jz(a){var s=this.c
return A.yI(s.cM(0,a),0,this.a.a)&&A.yI(s.du(0,a),0,this.a.c)},
i(a){var s=this.c
return"SpringSimulation(end: "+B.d.M(this.b,1)+", "+s.grD(s).i(0)+")"}}
A.jQ.prototype={
cM(a,b){return this.jz(b)?this.b:this.MH(0,b)}}
A.a68.prototype={
cM(a,b){return(this.b+this.c*b)*Math.pow(2.718281828459045,this.a*b)},
du(a,b){var s=this.a,r=Math.pow(2.718281828459045,s*b),q=this.c
return s*(this.b+q*b)*r+q*r},
grD(a){return B.TX}}
A.a8e.prototype={
cM(a,b){var s=this
return s.c*Math.pow(2.718281828459045,s.a*b)+s.d*Math.pow(2.718281828459045,s.b*b)},
du(a,b){var s=this,r=s.a,q=s.b
return s.c*r*Math.pow(2.718281828459045,r*b)+s.d*q*Math.pow(2.718281828459045,q*b)},
grD(a){return B.TZ}}
A.a9H.prototype={
cM(a,b){var s=this,r=s.a*b
return Math.pow(2.718281828459045,s.b*b)*(s.c*Math.cos(r)+s.d*Math.sin(r))},
du(a,b){var s,r=this,q=r.b,p=Math.pow(2.718281828459045,q*b),o=r.a,n=o*b,m=Math.cos(n),l=Math.sin(n)
n=r.d
s=r.c
return p*(n*o*m-s*o*l)+q*p*(n*l+s*m)},
grD(a){return B.TY}}
A.IO.prototype={
i(a){return"Tolerance(distance: \xb1"+A.h(this.a)+", time: \xb10.001, velocity: \xb1"+A.h(this.c)+")"}}
A.o6.prototype={
x6(){var s=this,r=s.ry$
r===$&&A.b()
r=r.e
r.toString
r.swc(s.FW())
if(s.ry$.e.q$!=null)s.JN()},
xc(){},
x8(){},
FW(){var s,r=$.cc(),q=r.w
if(q==null){s=self.window.devicePixelRatio
q=s===0?1:s}return new A.J5(r.gjK().cz(0,q),q)},
Sk(){var s,r=this
if($.aE().a.c){if(r.to$==null){s=r.ry$
s===$&&A.b()
r.to$=s.Gr()}}else{s=r.to$
if(s!=null)s.m()
r.to$=null}},
K9(a){var s,r=this
if(a){if(r.to$==null){s=r.ry$
s===$&&A.b()
r.to$=s.Gr()}}else{s=r.to$
if(s!=null)s.m()
r.to$=null}},
SD(a){B.RY.m6("first-frame",null,!1,t.H)},
Si(a,b,c){var s=this.ry$
s===$&&A.b()
s=s.as
if(s!=null)s.a0G(a,b,null)},
Sm(){var s,r=this.ry$
r===$&&A.b()
r=r.e
r.toString
s=t.W
s.a(A.F.prototype.gbl.call(r)).ay.E(0,r)
s.a(A.F.prototype.gbl.call(r)).ln()},
Sq(a){var s=this.ry$
s===$&&A.b()
s.e.toString
s=$.df;(s==null?$.df=A.je():s).a1R(a)},
So(){var s=this.ry$
s===$&&A.b()
s.e.kF()},
RP(a){this.wI()
this.UR()},
UR(){$.bG.ax$.push(new A.a07(this))},
Fh(){--this.x2$
if(!this.xr$)this.rV()},
wI(){var s=this,r=s.ry$
r===$&&A.b()
r.Zb()
s.ry$.Za()
s.ry$.Zc()
if(s.xr$||s.x2$===0){s.ry$.e.XA()
s.ry$.Zd()
s.xr$=!0}},
$iad:1,
$idd:1}
A.a07.prototype={
$1(a){var s=this.a,r=s.rx$
r.toString
s=s.ry$
s===$&&A.b()
r.a1O(s.e.ga_g())},
$S:2}
A.aJ.prototype={
wf(a,b,c,d){var s=this,r=d==null?s.a:d,q=b==null?s.b:b,p=c==null?s.c:c
return new A.aJ(r,q,p,a==null?s.d:a)},
XZ(a,b){return this.wf(null,null,a,b)},
FP(a){return this.wf(a,null,null,null)},
XU(a){return this.wf(null,a,null,null)},
G0(a){var s=this,r=a.gcb(),q=a.gb6(a)+a.gb8(a),p=Math.max(0,s.a-r),o=Math.max(0,s.c-q)
return new A.aJ(p,Math.max(p,s.b-r),o,Math.max(o,s.d-q))},
n4(a){var s=this,r=a.a,q=a.b,p=a.c,o=a.d
return new A.aJ(A.E(s.a,r,q),A.E(s.b,r,q),A.E(s.c,p,o),A.E(s.d,p,o))},
IK(a,b){var s,r,q=this,p=b==null,o=q.a,n=p?o:A.E(b,o,q.b),m=q.b
p=p?m:A.E(b,o,m)
o=a==null
m=q.c
s=o?m:A.E(a,m,q.d)
r=q.d
return new A.aJ(n,p,s,o?r:A.E(a,m,r))},
rz(a){return this.IK(a,null)},
yE(a){return this.IK(null,a)},
bn(a){var s=this
return new A.Z(A.E(a.a,s.a,s.b),A.E(a.b,s.c,s.d))},
mH(a){var s,r,q,p,o,n=this,m=n.a,l=n.b
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
gHA(){var s=this
return s.a>=s.b&&s.c>=s.d},
a6(a,b){var s=this
return new A.aJ(s.a*b,s.b*b,s.c*b,s.d*b)},
cz(a,b){var s=this
return new A.aJ(s.a/b,s.b/b,s.c/b,s.d/b)},
ga_H(){var s=this,r=s.a
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
i(a){var s,r=this,q=r.ga_H()?"":"; NOT NORMALIZED",p=r.a
if(p===1/0&&r.c===1/0)return"BoxConstraints(biggest"+q+")"
if(p===0&&r.b===1/0&&r.c===0&&r.d===1/0)return"BoxConstraints(unconstrained"+q+")"
s=new A.Rl()
return"BoxConstraints("+s.$3(p,r.b,"w")+", "+s.$3(r.c,r.d,"h")+q+")"}}
A.Rl.prototype={
$3(a,b,c){if(a===b)return c+"="+B.d.M(a,1)
return B.d.M(a,1)+"<="+c+"<="+B.d.M(b,1)},
$S:199}
A.fW.prototype={
vV(a,b,c){if(c!=null){c=A.Fy(A.acW(c))
if(c==null)return!1}return this.Ff(a,b,c)},
mr(a,b,c){var s,r=b==null,q=r?c:c.a8(0,b)
r=!r
if(r)this.c.push(new A.po(new A.t(-b.a,-b.b)))
s=a.$2(this,q)
if(r)this.rj()
return s},
Ff(a,b,c){var s,r=c==null,q=r?b:A.cd(c,b)
r=!r
if(r)this.c.push(new A.wK(c))
s=a.$2(this,q)
if(r)this.rj()
return s},
Fe(a,b,c){var s,r=this
if(b!=null)r.c.push(new A.po(new A.t(-b.a,-b.b)))
else{c.toString
c=A.Fy(A.acW(c))
c.toString
r.c.push(new A.wK(c))}s=a.$1(r)
r.rj()
return s},
WD(a,b){return this.Fe(a,null,b)},
WC(a,b){return this.Fe(a,b,null)}}
A.mT.prototype={
i(a){return"<optimized out>#"+A.bB(this.a)+"@"+this.c.i(0)}}
A.ed.prototype={
i(a){return"offset="+this.a.i(0)}}
A.qA.prototype={}
A.C.prototype={
e4(a){if(!(a.e instanceof A.ed))a.e=new A.ed(B.j)},
fv(a){var s,r=this.k1
if(r==null)r=this.k1=A.y(t.k,t.DB)
s=r.bG(0,a,new A.a_A(this,a))
return s},
bV(a){return B.P},
giX(){var s=this.k3
return new A.z(0,0,0+s.a,0+s.b)},
rK(a,b){var s=null
try{s=this.iS(a)}finally{}if(s==null&&!b)return this.k3.b
return s},
Jn(a){return this.rK(a,!1)},
iS(a){var s=this,r=s.k4
if(r==null)r=s.k4=A.y(t.E7,t.u6)
r.bG(0,a,new A.a_z(s,a))
return s.k4.j(0,a)},
ee(a){return null},
gX(){return t.k.a(A.w.prototype.gX.call(this))},
P9(){var s,r=this,q=r.k4,p=q==null
if(!(!p&&q.a!==0)){s=r.id
if(!(s!=null&&s.a!==0)){s=r.k1
s=s!=null&&s.a!==0}else s=!0}else s=!0
if(s){if(!p)q.U(0)
q=r.id
if(q!=null)q.U(0)
q=r.k1
if(q!=null)q.U(0)
return!0}return!1},
a3(){var s=this
if(s.P9()&&s.c instanceof A.w){s.qZ()
return}s.M2()},
cg(a,b){var s,r=this
if(r.k3!=null)if(!a.k(0,t.k.a(A.w.prototype.gX.call(r)))){s=r.k4
s=s!=null&&s.a!==0}else s=!1
else s=!1
if(s){s=r.k4
if(s!=null)s.U(0)}r.M1(a,b)},
h3(a){return this.cg(a,!1)},
nH(){this.k3=this.bV(t.k.a(A.w.prototype.gX.call(this)))},
bx(){},
bN(a,b){var s=this
if(s.k3.B(0,b))if(s.cu(a,b)||s.iD(b)){a.E(0,new A.mT(b,s))
return!0}return!1},
iD(a){return!1},
cu(a,b){return!1},
cW(a,b){var s,r=a.e
r.toString
s=t.Ch.a(r).a
b.aw(0,s.a,s.b)},
jU(a){var s,r,q,p,o,n=this.bs(0,null)
if(n.fT(n)===0)return B.j
s=new A.f1(new Float64Array(3))
s.eV(0,0,1)
r=new A.f1(new Float64Array(3))
r.eV(0,0,0)
q=n.hP(r)
r=new A.f1(new Float64Array(3))
r.eV(0,0,1)
p=n.hP(r).a8(0,q)
r=new A.f1(new Float64Array(3))
r.eV(a.a,a.b,0)
o=n.hP(r)
r=o.a8(0,p.zp(s.Gc(o)/s.Gc(p))).a
return new A.t(r[0],r[1])},
gh9(){var s=this.k3
return new A.z(0,0,0+s.a,0+s.b)},
hG(a,b){this.M0(a,b)}}
A.a_A.prototype={
$0(){return this.a.bV(this.b)},
$S:200}
A.a_z.prototype={
$0(){return this.a.ee(this.b)},
$S:201}
A.cy.prototype={
Yr(a){var s,r,q,p=this.ar$
for(s=A.n(this).h("cy.1?");p!=null;){r=s.a(p.e)
q=p.iS(a)
if(q!=null)return q+r.a.b
p=r.ah$}return null},
G_(a){var s,r,q,p,o=this.ar$
for(s=A.n(this).h("cy.1"),r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.iS(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.ah$}return r},
wm(a,b){var s,r,q={},p=q.a=this.cG$
for(s=A.n(this).h("cy.1");p!=null;p=r){p=p.e
p.toString
s.a(p)
if(a.mr(new A.a_y(q,b,p),p.a,b))return!0
r=p.bM$
q.a=r}return!1},
mN(a,b){var s,r,q,p,o,n=this.ar$
for(s=A.n(this).h("cy.1"),r=b.a,q=b.b;n!=null;){p=n.e
p.toString
s.a(p)
o=p.a
a.eo(n,new A.t(o.a+r,o.b+q))
n=p.ah$}}}
A.a_y.prototype={
$2(a,b){return this.a.a.bN(a,b)},
$S:15}
A.wb.prototype={
ad(a){this.tl(0)}}
A.eK.prototype={
i(a){return this.oi(0)+"; id="+A.h(this.e)}}
A.YA.prototype={
dj(a,b){var s,r=this.b.j(0,a)
r.cg(b,!0)
s=r.k3
s.toString
return s},
dG(a,b){var s=this.b.j(0,a).e
s.toString
t.DU.a(s).a=b},
OS(a,b){var s,r,q,p,o,n,m=this,l=m.b
try{m.b=A.y(t.K,t.x)
for(r=t.DU,q=b;q!=null;q=n){p=q.e
p.toString
s=r.a(p)
p=m.b
p.toString
o=s.e
o.toString
p.l(0,o,q)
n=s.ah$}m.rh(a)}finally{m.b=l}},
i(a){return"MultiChildLayoutDelegate"}}
A.H0.prototype={
e4(a){if(!(a.e instanceof A.eK))a.e=new A.eK(null,null,B.j)},
swp(a){var s=this,r=s.K
if(r===a)return
if(A.A(a)!==A.A(r)||a.lE(r))s.a3()
s.K=a
s.b!=null},
al(a){this.N0(a)},
ad(a){this.N1(0)},
bV(a){return a.bn(new A.Z(A.E(1/0,a.a,a.b),A.E(1/0,a.c,a.d)))},
bx(){var s=this,r=t.k.a(A.w.prototype.gX.call(s))
r=r.bn(new A.Z(A.E(1/0,r.a,r.b),A.E(1/0,r.c,r.d)))
s.k3=r
s.K.OS(r,s.ar$)},
aF(a,b){this.mN(a,b)},
cu(a,b){return this.wm(a,b)}}
A.x6.prototype={
al(a){var s,r,q
this.e9(a)
s=this.ar$
for(r=t.DU;s!=null;){s.al(a)
q=s.e
q.toString
s=r.a(q).ah$}},
ad(a){var s,r,q
this.dq(0)
s=this.ar$
for(r=t.DU;s!=null;){s.ad(0)
q=s.e
q.toString
s=r.a(q).ah$}}}
A.N5.prototype={}
A.Bt.prototype={
S(a,b){var s=this.a
return s==null?null:s.S(0,b)},
F(a,b){var s=this.a
return s==null?null:s.F(0,b)},
gzs(){return null},
zF(a){return this.hY(a)},
qJ(a){return null},
i(a){var s=A.bB(this),r=this.a
r=r==null?null:r.i(0)
if(r==null)r=""
return"<optimized out>#"+s+"("+r+")"}}
A.H1.prototype={
srf(a){var s=this.v
if(s==a)return
this.v=a
this.BG(a,s)},
sGJ(a){var s=this.O
if(s==a)return
this.O=a
this.BG(a,s)},
BG(a,b){var s=this,r=a==null
if(r)s.aj()
else if(b==null||A.A(a)!==A.A(b)||a.hY(b))s.aj()
if(s.b!=null){if(b!=null)b.F(0,s.gdF())
if(!r)a.S(0,s.gdF())}if(r){if(s.b!=null)s.aX()}else if(b==null||A.A(a)!==A.A(b)||a.zF(b))s.aX()},
srl(a){if(this.au.k(0,a))return
this.au=a
this.a3()},
al(a){var s,r=this
r.lR(a)
s=r.v
if(s!=null)s.S(0,r.gdF())
s=r.O
if(s!=null)s.S(0,r.gdF())},
ad(a){var s=this,r=s.v
if(r!=null)r.F(0,s.gdF())
r=s.O
if(r!=null)r.F(0,s.gdF())
s.ka(0)},
cu(a,b){var s=this.O
if(s!=null){s=s.qJ(b)
s=s===!0}else s=!1
if(s)return!0
return this.om(a,b)},
iD(a){var s=this.v
if(s!=null){s=s.qJ(a)
s=s!==!1}else s=!1
return s},
bx(){this.tr()
this.aX()},
mG(a){return a.bn(this.au)},
Df(a,b,c){var s
A.aZ("debugPreviousCanvasSaveCount")
a.ck(0)
if(!b.k(0,B.j))a.aw(0,b.a,b.b)
s=this.k3
s.toString
c.aF(a,s)
a.ci(0)},
aF(a,b){var s,r,q=this
if(q.v!=null){s=a.gbz(a)
r=q.v
r.toString
q.Df(s,b,r)
q.DZ(a)}q.fE(a,b)
if(q.O!=null){s=a.gbz(a)
r=q.O
r.toString
q.Df(s,b,r)
q.DZ(a)}},
DZ(a){},
eg(a){var s,r=this
r.fD(a)
r.bE=null
s=r.O
r.dA=s==null?null:s.gzs()
a.a=!1},
mx(a,b,c){var s,r,q,p,o=this
o.fj=A.agH(o.fj,B.rd)
o.hF=A.agH(o.hF,B.rd)
s=o.fj
r=s!=null&&!s.gP(s)
s=o.hF
q=s!=null&&!s.gP(s)
s=A.a([],t.T)
if(r){p=o.fj
p.toString
B.b.I(s,p)}B.b.I(s,c)
if(q){p=o.hF
p.toString
B.b.I(s,p)}o.Al(a,b,s)},
kF(){this.tn()
this.hF=this.fj=null}}
A.So.prototype={}
A.H4.prototype={
O8(a){var s,r,q,p,o=this
try{r=o.K
if(r!==""){q=$.ak3()
s=$.av().wh(q)
s.yi($.ak4())
s.pD(r)
r=s.b2()
o.q!==$&&A.ev()
o.q=r}else{o.q!==$&&A.ev()
o.q=null}}catch(p){}},
giZ(){return!0},
iD(a){return!0},
bV(a){return a.bn(B.TQ)},
aF(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
try{p=a.gbz(a)
o=i.k3
n=b.a
m=b.b
l=o.a
o=o.b
k=$.av().bf()
k.saq(0,$.ak2())
p.c7(new A.z(n,m,n+l,m+o),k)
p=i.q
p===$&&A.b()
if(p!=null){s=i.k3.a
r=0
q=0
if(s>328){s-=128
r+=64}p.h3(new A.jH(s))
if(i.k3.b>96+p.gbF(p)+12)q+=96
a.gbz(a).jl(p,b.W(0,new A.t(r,q)))}}catch(j){}}}
A.CL.prototype={
D(){return"FlexFit."+this.b}}
A.d5.prototype={
i(a){return this.oi(0)+"; flex="+A.h(this.e)+"; fit="+A.h(this.f)}}
A.t4.prototype={
D(){return"MainAxisSize."+this.b}}
A.nJ.prototype={
D(){return"MainAxisAlignment."+this.b}}
A.jb.prototype={
D(){return"CrossAxisAlignment."+this.b}}
A.o4.prototype={
e4(a){if(!(a.e instanceof A.d5))a.e=new A.d5(null,null,B.j)},
ee(a){if(this.K===B.ao)return this.G_(a)
return this.Yr(a)},
oC(a){switch(this.K.a){case 0:return a.b
case 1:return a.a}},
oE(a){switch(this.K.a){case 0:return a.a
case 1:return a.b}},
bV(a){var s
if(this.ao===B.mZ)return B.P
s=this.Bu(a,A.abj())
switch(this.K.a){case 0:return a.bn(new A.Z(s.a,s.b))
case 1:return a.bn(new A.Z(s.b,s.a))}},
Bu(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.K===B.ao?a2.b:a2.d,a0=a<1/0,a1=c.ar$
for(s=t.uc,r=a2.b,q=a2.d,p=b,o=0,n=0,m=0;a1!=null;){l=a1.e
l.toString
s.a(l)
k=l.e
if(k==null)k=0
if(k>0){o+=k
p=a1}else{if(c.ao===B.mY)switch(c.K.a){case 0:j=A.mR(q,b)
break
case 1:j=A.mR(b,r)
break
default:j=b}else switch(c.K.a){case 0:j=new A.aJ(0,1/0,0,q)
break
case 1:j=new A.aJ(0,r,0,1/0)
break
default:j=b}i=a3.$2(a1,j)
m+=c.oE(i)
n=Math.max(n,A.ki(c.oC(i)))}a1=l.ah$}h=Math.max(0,(a0?a:0)-m)
if(o>0){g=a0?h/o:0/0
a1=c.ar$
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
switch((l==null?B.n9:l).a){case 0:if(d.b!==d)A.a_(A.XN(d.a))
d.b=e
break
case 1:if(d.b!==d)A.a_(A.XN(d.a))
d.b=0
break}if(c.ao===B.mY)switch(c.K.a){case 0:l=d.b
if(l===d)A.a_(A.fu(d.a))
j=new A.aJ(l,e,q,q)
break
case 1:l=d.b
if(l===d)A.a_(A.fu(d.a))
j=new A.aJ(r,r,l,e)
break
default:j=b}else switch(c.K.a){case 0:l=d.b
if(l===d)A.a_(A.fu(d.a))
j=new A.aJ(l,e,0,q)
break
case 1:l=d.b
if(l===d)A.a_(A.fu(d.a))
j=new A.aJ(0,r,l,e)
break
default:j=b}i=a3.$2(a1,j)
m+=c.oE(i)
f+=e
n=Math.max(n,A.ki(c.oC(i)))}l=a1.e
l.toString
a1=s.a(l).ah$}}return new A.a7q(a0&&c.H===B.L?a:m,n,m)},
bx(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.k.a(A.w.prototype.gX.call(a)),a1=a.Bu(a0,A.abk()),a2=a1.a,a3=a1.b
if(a.ao===B.mZ){s=a.ar$
for(r=t.uc,q=0,p=0,o=0;s!=null;){n=a.bw
n.toString
m=s.rK(n,!0)
if(m!=null){q=Math.max(q,m)
p=Math.max(m,p)
o=Math.max(s.k3.b-m,o)
a3=Math.max(p+o,a3)}n=s.e
n.toString
s=r.a(n).ah$}}else q=0
switch(a.K.a){case 0:r=a.k3=a0.bn(new A.Z(a2,a3))
a2=r.a
a3=r.b
break
case 1:r=a.k3=a0.bn(new A.Z(a3,a2))
a2=r.b
a3=r.a
break}l=a2-a1.c
a.c0=Math.max(0,-l)
k=Math.max(0,l)
j=A.aZ("leadingSpace")
i=A.aZ("betweenSpace")
r=A.aiK(a.K,a.ae,a.aT)
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
r=a.d_$
i.sbS(r>1?k/(r-1):0)
break
case 4:r=a.d_$
i.sbS(r>0?k/r:0)
j.sbS(i.aC()/2)
break
case 5:r=a.d_$
i.sbS(r>0?k/(r+1):0)
j.sbS(i.aC())
break}g=h?a2-j.aC():j.aC()
s=a.ar$
for(r=t.uc,n=a3/2,f=i.a;s!=null;){e=s.e
e.toString
r.a(e)
d=a.ao
switch(d.a){case 0:case 1:if(A.aiK(A.au2(a.K),a.ae,a.aT)===(d===B.b8))c=0
else{d=s.k3
d.toString
c=a3-a.oC(d)}break
case 2:d=s.k3
d.toString
c=n-a.oC(d)/2
break
case 3:c=0
break
case 4:if(a.K===B.ao){d=a.bw
d.toString
m=s.rK(d,!0)
c=m!=null?q-m:0}else c=0
break
default:c=null}if(h){d=s.k3
d.toString
g-=a.oE(d)}switch(a.K.a){case 0:e.a=new A.t(g,c)
break
case 1:e.a=new A.t(c,g)
break}if(h){d=i.b
if(d===i)A.a_(A.fu(f))
g-=d}else{d=s.k3
d.toString
d=a.oE(d)
b=i.b
if(b===i)A.a_(A.fu(f))
g+=d+b}s=e.ah$}},
cu(a,b){return this.wm(a,b)},
aF(a,b){var s,r,q,p=this
if(!(p.c0>1e-10)){p.mN(a,b)
return}s=p.k3
if(s.gP(s))return
s=p.c1
r=p.cx
r===$&&A.b()
q=p.k3
s.saM(0,a.jL(r,b,new A.z(0,0,0+q.a,0+q.b),p.gYs(),p.c9,s.a))},
m(){this.c1.saM(0,null)
this.N2()},
ih(a){var s
switch(this.c9.a){case 0:return null
case 1:case 2:case 3:if(this.c0>1e-10){s=this.k3
s=new A.z(0,0,0+s.a,0+s.b)}else s=null
return s}},
bP(){var s=this.M5()
return s}}
A.a7q.prototype={}
A.N6.prototype={
al(a){var s,r,q
this.e9(a)
s=this.ar$
for(r=t.uc;s!=null;){s.al(a)
q=s.e
q.toString
s=r.a(q).ah$}},
ad(a){var s,r,q
this.dq(0)
s=this.ar$
for(r=t.uc;s!=null;){s.ad(0)
q=s.e
q.toString
s=r.a(q).ah$}}}
A.N7.prototype={}
A.x7.prototype={
m(){var s,r,q
for(s=this.Gw$,r=s.length,q=0;q<r;++q)s[q].m()
this.hq()},
ep(){this.M4()}}
A.H7.prototype={
SF(){var s=this
if(s.K!=null)return
s.K=s.e_
s.q=!1},
CR(){this.q=this.K=null
this.aj()},
sh0(a,b){var s=this,r=s.H
if(b==r)return
if(b!=null&&r!=null&&b.Ht(r)){b.m()
return}r=s.H
if(r!=null)r.m()
s.H=b
s.aj()
if(s.ae==null||s.aT==null)s.a3()},
sbd(a,b){if(b==this.ae)return
this.ae=b
this.a3()},
sbF(a,b){if(b==this.aT)return
this.aT=b
this.a3()},
sJL(a,b){if(b===this.bw)return
this.bw=b
this.a3()},
VR(){this.c0=null},
saq(a,b){return},
slh(a,b){return},
sl4(a){if(a===this.bJ)return
this.bJ=a
this.aj()},
sXu(a){return},
swX(a){if(a===this.dZ)return
this.dZ=a
this.aj()},
sdU(a){if(a.k(0,this.e_))return
this.e_=a
this.CR()},
sa1h(a,b){if(b===this.dg)return
this.dg=b
this.aj()},
sX8(a){return},
sxm(a){if(a===this.eh)return
this.eh=a
this.aj()},
sa08(a){return},
sbA(a){if(this.ei==a)return
this.ei=a
this.CR()},
sxn(a){return},
E6(a){var s,r,q=this,p=q.ae
a=A.mR(q.aT,p).n4(a)
p=q.H
if(p==null)return new A.Z(A.E(0,a.a,a.b),A.E(0,a.c,a.d))
p=p.gbd(p)
s=q.bw
r=q.H
return a.mH(new A.Z(p/s,r.gbF(r)/q.bw))},
iD(a){return!0},
bV(a){return this.E6(a)},
bx(){this.k3=this.E6(t.k.a(A.w.prototype.gX.call(this)))},
al(a){this.e9(a)},
ad(a){this.dq(0)},
aF(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(d.H==null)return
d.SF()
s=a.gbz(a)
r=d.k3
q=b.a
p=b.b
o=r.a
r=r.b
n=d.H
n.toString
m=d.ao
l=d.bw
k=d.c0
j=d.dZ
i=d.K
i.toString
h=d.ix
g=d.dg
f=d.q
f.toString
e=d.eh
A.ajw(i,s,h,k,m,d.bJ,j,f,n,e,!1,1,new A.z(q,p,q+o,p+r),g,l)},
m(){var s=this.H
if(s!=null)s.m()
this.H=null
this.hq()}}
A.q2.prototype={
i(a){return"AnnotationEntry(annotation: "+this.a.i(0)+", localPosition: "+this.b.i(0)+")"}}
A.yZ.prototype={}
A.rT.prototype={
hr(){},
ps(a){var s,r=this
r.e+=a
s=t.ow
if(s.a(A.F.prototype.gaU.call(r,r))!=null)s.a(A.F.prototype.gaU.call(r,r)).ps(a)},
m4(a){var s,r,q
for(s=this.d,s=A.ax(s.gaY(s),!0,t.M),r=s.length,q=0;q<r;++q)s[q].$0()},
m(){var s=this.z
if(s!=null)s.m()
this.z=null},
dE(){if(this.y)return
this.y=!0},
shB(a){var s,r=this,q=r.z
if(q!=null)q.m()
r.z=a
q=t.ow
if(q.a(A.F.prototype.gaU.call(r,r))!=null){q.a(A.F.prototype.gaU.call(r,r)).toString
s=!0}else s=!1
if(s)q.a(A.F.prototype.gaU.call(r,r)).dE()},
rE(){this.y=this.y||!1},
ik(a){var s
this.dE()
s=a.e
if(s!==0)this.ps(-s)
this.tb(a)},
ll(a){var s,r,q=this,p=t.ow.a(A.F.prototype.gaU.call(q,q))
if(p!=null){s=q.as
r=q.Q
if(s==null)p.CW=r
else s.Q=r
r=q.Q
if(r==null)p.cx=s
else r.as=s
q.Q=q.as=null
p.ik(q)
q.w.saM(0,null)}},
ej(a,b,c){return!1},
GC(a,b,c){var s=A.a([],c.h("x<q2<0>>"))
this.ej(new A.yZ(s,c.h("yZ<0>")),b,!0,c)
return s.length===0?null:B.b.gJ(s).a},
Or(a){var s,r=this
if(!r.y&&r.z!=null){s=r.z
s.toString
a.Wx(s)
return}r.fM(a)
r.y=!1},
bP(){var s=this.KQ()
return s+(this.b==null?" DETACHED":"")}}
A.Dz.prototype={
saM(a,b){var s=this.a
if(b==null?s==null:b===s)return
if(s!=null)if(--s.x===0)s.m()
this.a=b
if(b!=null)++b.x},
i(a){var s=this.a
return"LayerHandle("+(s!=null?J.dn(s):"DISPOSED")+")"}}
A.Gy.prototype={
sI4(a){var s
this.dE()
s=this.cx
if(s!=null)s.m()
this.cx=a},
m(){this.sI4(null)
this.A4()},
fM(a){var s=this.cx
s.toString
a.Wv(B.j,s,this.cy,this.db)},
ej(a,b,c){return!1}}
A.Gr.prototype={
fM(a){a.Wu(this.cx,this.CW)
a.K8(this.cy)
a.K0(!1)
a.K_(!1)},
ej(a,b,c){return!1}}
A.ef.prototype={
m4(a){var s
this.Lh(a)
if(!a)return
s=this.CW
for(;s!=null;){s.m4(!0)
s=s.Q}},
X0(a){var s=this
s.rE()
s.fM(a)
if(s.e>0)s.m4(!0)
s.y=!1
return a.b2()},
m(){this.ys()
this.d.U(0)
this.A4()},
rE(){var s,r=this
r.Li()
s=r.CW
for(;s!=null;){s.rE()
r.y=r.y||s.y
s=s.Q}},
ej(a,b,c,d){var s,r,q
for(s=this.cx,r=a.a;s!=null;s=s.as){if(s.ej(a,b,!0,d))return!0
q=r.length
if(q!==0)return!1}return!1},
al(a){var s
this.ta(a)
s=this.CW
for(;s!=null;){s.al(a)
s=s.Q}},
ad(a){var s
this.dq(0)
s=this.CW
for(;s!=null;){s.ad(0)
s=s.Q}this.m4(!1)},
fO(a,b){var s,r=this
r.dE()
s=b.e
if(s!==0)r.ps(s)
r.zQ(b)
s=b.as=r.cx
if(s!=null)s.Q=b
r.cx=b
if(r.CW==null)r.CW=b
b.w.saM(0,b)},
ys(){var s,r,q,p=this,o=p.CW
for(s=t.ow;o!=null;o=r){r=o.Q
o.Q=o.as=null
p.dE()
q=o.e
if(q!==0){q=-q
p.e+=q
if(s.a(A.F.prototype.gaU.call(p,p))!=null)s.a(A.F.prototype.gaU.call(p,p)).ps(q)}p.tb(o)
o.w.saM(0,null)}p.cx=p.CW=null},
fM(a){this.j9(a)},
j9(a){var s=this.CW
for(;s!=null;){s.Or(a)
s=s.Q}}}
A.hl.prototype={
shN(a,b){if(!b.k(0,this.p1))this.dE()
this.p1=b},
ej(a,b,c,d){return this.lM(a,b.a8(0,this.p1),!0,d)},
fM(a){var s=this,r=s.p1
s.shB(a.Ie(r.a,r.b,t.cV.a(s.z)))
s.j9(a)
a.hb()}}
A.n_.prototype={
ej(a,b,c,d){if(!this.p1.B(0,b))return!1
return this.lM(a,b,!0,d)},
fM(a){var s=this,r=s.p1
r.toString
s.shB(a.a0Q(r,s.p2,t.CW.a(s.z)))
s.j9(a)
a.hb()}}
A.qx.prototype={
ej(a,b,c,d){if(!this.p1.B(0,b))return!1
return this.lM(a,b,!0,d)},
fM(a){var s=this,r=s.p1
r.toString
s.shB(a.a0O(r,s.p2,t.cB.a(s.z)))
s.j9(a)
a.hb()}}
A.qw.prototype={
ej(a,b,c,d){if(!this.p1.B(0,b))return!1
return this.lM(a,b,!0,d)},
fM(a){var s=this,r=s.p1
r.toString
s.shB(a.a0N(r,s.p2,t.xS.a(s.z)))
s.j9(a)
a.hb()}}
A.k0.prototype={
sbh(a,b){var s=this
if(b.k(0,s.aa))return
s.aa=b
s.bb=!0
s.dE()},
fM(a){var s,r,q=this
q.aR=q.aa
if(!q.p1.k(0,B.j)){s=q.p1
s=A.tn(s.a,s.b,0)
r=q.aR
r.toString
s.cn(0,r)
q.aR=s}q.shB(a.a0S(q.aR.a,t.Al.a(q.z)))
q.j9(a)
a.hb()},
VK(a){var s,r=this
if(r.bb){s=r.aa
s.toString
r.bg=A.Fy(A.acW(s))
r.bb=!1}s=r.bg
if(s==null)return null
return A.cd(s,a)},
ej(a,b,c,d){var s=this.VK(b)
if(s==null)return!1
return this.LF(a,s,!0,d)}}
A.tN.prototype={
sFi(a,b){var s=this,r=s.aa
if(b!=r){if(b===255||r===255)s.shB(null)
s.aa=b
s.dE()}},
fM(a){var s,r,q,p=this
if(p.CW==null){p.shB(null)
return}s=p.aa
s.toString
r=p.p1
q=p.z
if(s<255)p.shB(a.a0R(s,r,t.i6.a(q)))
else p.shB(a.Ie(r.a,r.b,t.cV.a(q)))
p.j9(a)
a.hb()}}
A.q1.prototype={
ej(a,b,c,d){var s,r,q,p=this,o=p.lM(a,b,!0,d),n=a.a
if(n.length!==0&&!0)return o
s=p.p2
if(s!=null){r=p.p3
q=r.a
r=r.b
s=!new A.z(q,r,q+s.a,r+s.b).B(0,b)}else s=!1
if(s)return o
if(A.az(p.$ti.c)===A.az(d)){o=o||!1
n.push(new A.q2(d.a(p.p1),b.a8(0,p.p3),d.h("q2<0>")))}return o}}
A.Lr.prototype={}
A.LU.prototype={
a1i(a){var s=this.a
this.a=a
return s},
i(a){var s="<optimized out>#",r=A.bB(this.b),q=this.a.a
return s+A.bB(this)+"("+("latestEvent: "+(s+r))+", "+("annotations: [list of "+q+"]")+")"}}
A.LV.prototype={
ghx(a){var s=this.c
return s.ghx(s)}}
A.FI.prototype={
Cw(a){var s,r,q,p,o,n,m=t.mC,l=A.jv(null,null,m,t.rA)
for(s=a.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q){p=s[q]
o=p.a
if(m.b(o)){n=p.b
n.toString
l.l(0,o,n)}}return l},
Q8(a,b){var s=a.b,r=s.gbr(s)
s=a.b
if(!this.b.V(0,s.ghx(s)))return A.jv(null,null,t.mC,t.rA)
return this.Cw(b.$1(r))},
Cj(a){var s,r
A.aoG(a)
s=a.b
r=A.n(s).h("b0<1>")
this.a.Zl(a.ghx(a),a.d,A.nK(new A.b0(s,r),new A.Yw(),r.h("p.E"),t.oR))},
a1U(a,b){var s,r,q,p,o
if(a.gc2(a)!==B.c1)return
if(t.zs.b(a))return
s=t.yg.b(a)?A.afI():b.$0()
r=a.ghx(a)
q=this.b
p=q.j(0,r)
if(!A.aoH(p,a))return
o=q.a
new A.Yz(this,p,a,r,s).$0()
if(o!==0!==(q.a!==0))this.av()},
a1O(a){new A.Yx(this,a).$0()}}
A.Yw.prototype={
$1(a){return a.gFY(a)},
$S:202}
A.Yz.prototype={
$0(){var s=this
new A.Yy(s.a,s.b,s.c,s.d,s.e).$0()},
$S:0}
A.Yy.prototype={
$0(){var s,r,q,p,o,n=this,m=null,l=n.b
if(l==null){s=n.c
if(t.yg.b(s))return
n.a.b.l(0,n.d,new A.LU(A.jv(m,m,t.mC,t.rA),s))}else{s=n.c
if(t.yg.b(s))n.a.b.A(0,s.ghx(s))}r=n.a
q=r.b.j(0,n.d)
if(q==null){l.toString
q=l}p=q.b
q.b=s
o=t.yg.b(s)?A.jv(m,m,t.mC,t.rA):r.Cw(n.e)
r.Cj(new A.LV(q.a1i(o),o,p,s))},
$S:0}
A.Yx.prototype={
$0(){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.b,r=r.gaY(r),r=new A.dH(J.ar(r.a),r.b),q=this.b,p=A.n(r).z[1];r.t();){o=r.a
if(o==null)o=p.a(o)
n=o.b
m=s.Q8(o,q)
l=o.a
o.a=m
s.Cj(new A.LV(l,m,n,null))}},
$S:0}
A.Yu.prototype={
$2(a,b){var s
if(!this.a.V(0,a))if(a.gyU()&&a.gxV(a)!=null){s=a.gxV(a)
s.toString
s.$1(this.b.aH(this.c.j(0,a)))}},
$S:203}
A.Yv.prototype={
$1(a){return!this.a.V(0,a)},
$S:204}
A.Pt.prototype={}
A.c5.prototype={
ad(a){},
i(a){return"<none>"}}
A.jG.prototype={
eo(a,b){var s,r=this
if(a.gdh()){r.lL()
if(!a.cy){s=a.ay
s===$&&A.b()
s=!s}else s=!0
if(s)A.agp(a,null,!0)
else if(a.db)A.ap_(a)
s=a.ch.a
s.toString
t.cY.a(s)
s.shN(0,b)
r.vY(s)}else{s=a.ay
s===$&&A.b()
if(s){a.ch.saM(0,null)
a.v3(r,b)}else a.v3(r,b)}},
vY(a){a.ll(0)
this.a.fO(0,a)},
gbz(a){var s,r,q=this
if(q.e==null){q.c=A.ap3(q.b)
s=$.av()
r=s.Yb()
q.d=r
q.e=s.Y5(r,null)
r=q.c
r.toString
q.a.fO(0,r)}s=q.e
s.toString
return s},
lL(){var s,r=this
if(r.e==null)return
s=r.c
s.toString
s.sI4(r.d.YN())
r.e=r.d=r.c=null},
zz(){var s=this.c
if(s!=null)if(!s.cy){s.cy=!0
s.dE()}},
nL(a,b,c,d){var s,r=this
if(a.CW!=null)a.ys()
r.lL()
r.vY(a)
s=r.Y7(a,d==null?r.b:d)
b.$2(s,c)
s.lL()},
Id(a,b,c){return this.nL(a,b,c,null)},
Y7(a,b){return new A.jG(a,b)},
jL(a,b,c,d,e,f){var s,r,q=this
if(e===B.J){d.$2(q,b)
return null}s=c.cQ(b)
if(a){if(f==null){r=new A.n_(B.a9,A.y(t.S,t.M),A.am())
r.hr()}else r=f
if(!s.k(0,r.p1)){r.p1=s
r.dE()}if(e!==r.p2){r.p2=e
r.dE()}q.nL(r,d,b,s)
return r}else{q.Xp(s,e,s,new A.Zm(q,d,b))
return null}},
a0P(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.J){e.$2(p,b)
return null}s=c.cQ(b)
r=d.cQ(b)
if(a){if(g==null){q=new A.qx(B.mL,A.y(t.S,t.M),A.am())
q.hr()}else q=g
if(!r.k(0,q.p1)){q.p1=r
q.dE()}if(f!==q.p2){q.p2=f
q.dE()}p.nL(q,e,b,s)
return q}else{p.Xn(r,f,s,new A.Zl(p,e,b))
return null}},
Ic(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.J){e.$2(p,b)
return null}s=c.cQ(b)
r=d.cQ(b)
if(a){if(g==null){q=new A.qw(B.mL,A.y(t.S,t.M),A.am())
q.hr()}else q=g
if(r!==q.p1){q.p1=r
q.dE()}if(f!==q.p2){q.p2=f
q.dE()}p.nL(q,e,b,s)
return q}else{p.Xm(r,f,s,new A.Zk(p,e,b))
return null}},
nM(a,b,c,d,e){var s,r=this,q=b.a,p=b.b,o=A.tn(q,p,0)
o.cn(0,c)
o.aw(0,-q,-p)
if(a){s=e==null?A.ahm(null):e
s.sbh(0,o)
r.nL(s,d,b,A.aga(o,r.b))
return s}else{q=r.gbz(r)
q.ck(0)
q.ac(0,o.a)
d.$2(r,b)
r.gbz(r).ci(0)
return null}},
a0T(a,b,c,d){return this.nM(a,b,c,d,null)},
yg(a,b,c,d){var s=d==null?A.agm():d
s.sFi(0,b)
s.shN(0,a)
this.Id(s,c,B.j)
return s},
i(a){return"PaintingContext#"+A.fA(this)+"(layer: "+this.a.i(0)+", canvas bounds: "+this.b.i(0)+")"}}
A.Zm.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.Zl.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.Zk.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.Sd.prototype={}
A.a1D.prototype={
m(){var s,r=this.b
if(r!=null)this.a.as.F(0,r)
r=this.a
if(--r.at===0){s=r.as
s.b.U(0)
s.c.U(0)
s.d.U(0)
s.dr()
r.as=null
r.d.$0()}}}
A.Gz.prototype={
ln(){this.a.$0()},
sa1s(a){var s=this.e
if(s===a)return
if(s!=null)s.ad(0)
this.e=a
a.al(this)},
Zb(){var s,r,q,p,o,n,m,l,k,j,i,h=this
try{for(p=t.W,o=t.By;n=h.r,n.length!==0;){s=n
h.r=A.a([],o)
n=s
m=new A.Zx()
if(!!n.immutable$list)A.a_(A.X("sort"))
l=n.length-1
if(l-0<=32)A.Ig(n,0,l,m)
else A.If(n,0,l,m)
for(r=0;r<J.bH(s);++r){if(h.f){h.f=!1
n=h.r
if(n.length!==0){m=s
l=r
k=J.bH(s)
A.cT(l,k,J.bH(m),null,null)
j=A.aI(m)
i=new A.fJ(m,l,k,j.h("fJ<1>"))
i.tv(m,l,k,j.c)
B.b.I(n,i)
break}}q=J.ba(s,r)
if(q.z){n=q
n=p.a(A.F.prototype.gbl.call(n))===h}else n=!1
if(n)q.SX()}h.f=!1}}finally{h.f=!1}},
PU(a){try{a.$0()}finally{this.f=!0}},
Za(){var s,r,q,p,o=this.y
B.b.d6(o,new A.Zw())
for(s=o.length,r=t.W,q=0;q<o.length;o.length===s||(0,A.Q)(o),++q){p=o[q]
if(p.CW&&r.a(A.F.prototype.gbl.call(p))===this)p.EE()}B.b.U(o)},
Zc(){var s,r,q,p,o,n,m,l,k
try{s=this.z
this.z=A.a([],t.By)
for(q=s,J.abX(q,new A.Zy()),p=q.length,o=t.W,n=t.cY,m=0;m<q.length;q.length===p||(0,A.Q)(q),++m){r=q[m]
if(r.cy||r.db){l=r
l=o.a(A.F.prototype.gbl.call(l))===this}else l=!1
if(l)if(r.ch.a.b!=null)if(r.cy)A.agp(r,null,!1)
else{l=r
k=l.ch.a
k.toString
l.nY(n.a(k))
l.db=!1}else r.Vi()}}finally{}},
YP(a){var s,r=this
if(++r.at===1){s=t.ju
r.as=new A.uY(r.c,A.b7(s),A.y(t.S,s),A.b7(s),$.bq())
r.b.$0()}if(a!=null)r.as.S(0,a)
return new A.a1D(r,a)},
Gr(){return this.YP(null)},
Zd(){var s,r,q,p,o,n,m,l,k=this
if(k.as==null)return
try{q=k.ay
p=A.ax(q,!0,A.n(q).c)
B.b.d6(p,new A.Zz())
s=p
q.U(0)
for(q=s,o=q.length,n=t.W,m=0;m<q.length;q.length===o||(0,A.Q)(q),++m){r=q[m]
if(r.dy){l=r
l=n.a(A.F.prototype.gbl.call(l))===k}else l=!1
if(l)r.W2()}k.as.JY()}finally{}}}
A.Zx.prototype={
$2(a,b){return a.a-b.a},
$S:37}
A.Zw.prototype={
$2(a,b){return a.a-b.a},
$S:37}
A.Zy.prototype={
$2(a,b){return b.a-a.a},
$S:37}
A.Zz.prototype={
$2(a,b){return a.a-b.a},
$S:37}
A.w.prototype={
aB(){var s=this
s.cx=s.gdh()||s.gkC()
s.ay=s.gdh()},
ep(){var s=this
s.a3()
s.jD()
s.aj()
s.aX()
s.aP(new A.a_M())},
m(){this.ch.saM(0,null)},
e4(a){if(!(a.e instanceof A.c5))a.e=new A.c5()},
hu(a){var s=this
s.e4(a)
s.a3()
s.jD()
s.aX()
s.zQ(a)},
ik(a){var s=this
a.Bf()
a.e.ad(0)
a.e=null
s.tb(a)
s.a3()
s.jD()
s.aX()},
aP(a){},
pb(a,b,c){A.dr(new A.bt(b,c,"rendering library",A.bj("during "+a+"()"),new A.a_I(this),!1))},
al(a){var s=this
s.ta(a)
if(s.z&&s.Q!=null){s.z=!1
s.a3()}if(s.CW){s.CW=!1
s.jD()}if(s.cy&&s.ch.a!=null){s.cy=!1
s.aj()}if(s.dy&&s.gvn().a){s.dy=!1
s.aX()}},
gX(){var s=this.at
if(s==null)throw A.d(A.aa("A RenderObject does not have any constraints before it has been laid out."))
return s},
a3(){var s,r=this
if(r.z)return
s=r.Q
if(s==null){r.z=!0
if(r.c!=null)r.qZ()
return}if(s!==r)r.qZ()
else{r.z=!0
s=t.W
if(s.a(A.F.prototype.gbl.call(r))!=null){s.a(A.F.prototype.gbl.call(r)).r.push(r)
s.a(A.F.prototype.gbl.call(r)).ln()}}},
qZ(){this.z=!0
var s=this.c
s.toString
t.d.a(s)
if(!this.as)s.a3()},
Bf(){var s=this
if(s.Q!==s){s.Q=null
s.aP(A.ajt())}},
Ui(){var s,r,q=this,p=q.Q
if(p===q)return
s=t.B2.a(q.c)
r=s==null?null:s.Q
if(r!=p){q.Q=r
q.aP(A.aju())}},
SX(){var s,r,q,p=this
try{p.bx()
p.aX()}catch(q){s=A.au(q)
r=A.aG(q)
p.pb("performLayout",s,r)}p.z=!1
p.aj()},
cg(a,b){var s,r,q,p,o,n,m,l=this
if(!b||l.giZ()||a.gHA()||!(l.c instanceof A.w))o=l
else{n=l.c
n.toString
n=t.d.a(n).Q
n.toString
o=n}if(!l.z&&a.k(0,l.at)){if(o!==l.Q){l.Q=o
l.aP(A.aju())}return}l.at=a
n=l.Q
if(n!=null&&o!==n)l.aP(A.ajt())
l.Q=o
if(l.giZ())try{l.nH()}catch(m){s=A.au(m)
r=A.aG(m)
l.pb("performResize",s,r)}try{l.bx()
l.aX()}catch(m){q=A.au(m)
p=A.aG(m)
l.pb("performLayout",q,p)}l.z=!1
l.aj()},
giZ(){return!1},
Hr(a,b){var s=this
s.as=!0
try{t.W.a(A.F.prototype.gbl.call(s)).PU(new A.a_L(s,a,b))}finally{s.as=!1}},
gdh(){return!1},
gkC(){return!1},
nY(a){return a==null?A.aoV(B.j):a},
jD(){var s,r,q,p=this
if(p.CW)return
s=p.CW=!0
r=p.c
if(r instanceof A.w){if(r.CW)return
q=p.ay
q===$&&A.b()
if((q?!p.gdh():s)&&!r.gdh()){r.jD()
return}}s=t.W
if(s.a(A.F.prototype.gbl.call(p))!=null)s.a(A.F.prototype.gbl.call(p)).y.push(p)},
EE(){var s,r,q=this
if(!q.CW)return
s=q.cx
s===$&&A.b()
q.cx=!1
q.aP(new A.a_J(q))
if(q.gdh()||q.gkC())q.cx=!0
if(!q.gdh()){r=q.ay
r===$&&A.b()}else r=!1
if(r){q.db=q.cy=!1
s=t.W.a(A.F.prototype.gbl.call(q))
if(s!=null)B.b.A(s.z,q)
q.CW=!1
q.aj()}else if(s!==q.cx){q.CW=!1
q.aj()}else q.CW=!1},
aj(){var s,r=this
if(r.cy)return
r.cy=!0
if(r.gdh()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=t.W
if(s.a(A.F.prototype.gbl.call(r))!=null){s.a(A.F.prototype.gbl.call(r)).z.push(r)
s.a(A.F.prototype.gbl.call(r)).ln()}}else{s=r.c
if(s instanceof A.w)s.aj()
else{s=t.W
if(s.a(A.F.prototype.gbl.call(r))!=null)s.a(A.F.prototype.gbl.call(r)).ln()}}},
a06(){var s,r=this
if(r.db||r.cy)return
r.db=!0
if(r.gdh()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=t.W
if(s.a(A.F.prototype.gbl.call(r))!=null){s.a(A.F.prototype.gbl.call(r)).z.push(r)
s.a(A.F.prototype.gbl.call(r)).ln()}}else r.aj()},
Vi(){var s,r=this.c
for(;r instanceof A.w;){if(r.gdh()){s=r.ch.a
if(s==null)break
if(s.b!=null)break
r.cy=!0}r=r.c}},
v3(a,b){var s,r,q,p=this
if(p.z)return
p.db=p.cy=!1
p.ay=p.gdh()
try{p.aF(a,b)}catch(q){s=A.au(q)
r=A.aG(q)
p.pb("paint",s,r)}},
aF(a,b){},
cW(a,b){},
jJ(a){return!0},
bs(a,b){var s,r,q,p,o,n,m,l,k=b==null
if(k){s=t.W.a(A.F.prototype.gbl.call(this)).e
if(s instanceof A.w)b=s}r=A.a([],t.By)
q=t.d
p=this
while(p!==b){r.push(p)
o=p.c
o.toString
q.a(o)
p=o}if(!k){b.toString
r.push(b)}n=new A.bb(new Float64Array(16))
n.cO()
for(m=r.length-1;m>0;m=l){l=m-1
r[m].cW(r[l],n)}return n},
ih(a){return null},
wr(a){return null},
eg(a){},
rZ(a){var s
if(t.W.a(A.F.prototype.gbl.call(this)).as==null)return
s=this.fr
if(s!=null&&!s.as)s.JX(a)
else{s=this.c
if(s!=null)t.d.a(s).rZ(a)}},
gvn(){var s,r=this
if(r.dx==null){s=A.ok()
r.dx=s
r.eg(s)}s=r.dx
s.toString
return s},
kF(){this.dy=!0
this.fr=null
this.aP(new A.a_K())},
aX(){var s,r,q,p,o,n,m=this
if(m.b==null||t.W.a(A.F.prototype.gbl.call(m)).as==null){m.dx=null
return}if(m.fr!=null){s=m.dx
s=s==null?null:s.a
r=s===!0}else r=!1
m.dx=null
q=m.gvn().a&&r
s=t.d
p=m
while(!0){if(!(!q&&p.c instanceof A.w))break
if(p!==m&&p.dy)break
p.dy=!0
o=p.c
o.toString
s.a(o)
if(o.dx==null){n=A.ok()
o.dx=n
o.eg(n)}q=o.dx.a
if(q&&o.fr==null)return
p=o}if(p!==m&&m.fr!=null&&m.dy)t.W.a(A.F.prototype.gbl.call(m)).ay.A(0,m)
if(!p.dy){p.dy=!0
s=t.W
if(s.a(A.F.prototype.gbl.call(m))!=null){s.a(A.F.prototype.gbl.call(m)).ay.E(0,p)
s.a(A.F.prototype.gbl.call(m)).ln()}}},
W2(){var s,r,q,p,o,n,m=this,l=null
if(m.z)return
s=m.fr
if(s==null)s=l
else{s=t.aa.a(A.F.prototype.gaU.call(s,s))
if(s==null)s=l
else s=s.at||s.as}r=t.sP.a(m.Cc(s===!0))
q=A.a([],t.T)
s=m.fr
p=s==null
o=p?l:s.x
n=p?l:s.y
s=p?l:s.z
r.mF(s==null?0:s,n,o,q)
B.b.gb4(q)},
Cc(a){var s,r,q,p,o,n,m,l,k=this,j={},i=k.gvn()
j.a=i.c
s=!i.d&&!i.a
r=t.yj
q=A.a([],r)
p=A.b7(t.sP)
k.eR(new A.a_H(j,k,a||i.p2,q,p,i,s))
for(o=A.iP(p,p.r),n=A.n(o).c;o.t();){m=o.d;(m==null?n.a(m):m).xz()}k.dy=!1
if(!(k.c instanceof A.w)){o=j.a
l=new A.Nr(A.a([],r),A.a([k],t.By),o)}else{o=j.a
if(s)l=new A.a67(A.a([],r),o)
else{l=new A.Oh(a,i,A.a([],r),A.a([k],t.By),o)
if(i.a)l.x=!0}}l.I(0,q)
return l},
eR(a){this.aP(a)},
mx(a,b,c){a.iQ(0,t.d1.a(c),b)},
hG(a,b){},
bP(){var s=A.bB(this)
return"<optimized out>#"+s},
i(a){return this.bP()},
e5(a,b,c,d){var s=this.c
if(s instanceof A.w)s.e5(a,b==null?this:b,c,d)},
lG(){return this.e5(B.aJ,null,B.t,null)},
jY(a,b){return this.e5(B.aJ,a,B.t,b)},
$iad:1}
A.a_M.prototype={
$1(a){a.ep()},
$S:25}
A.a_I.prototype={
$0(){var s=A.a([],t.F),r=this.a
s.push(A.acj("The following RenderObject was being processed when the exception was fired",B.EE,r))
s.push(A.acj("RenderObject",B.EF,r))
return s},
$S:14}
A.a_L.prototype={
$0(){this.b.$1(this.c.a(this.a.gX()))},
$S:0}
A.a_J.prototype={
$1(a){var s
a.EE()
s=a.cx
s===$&&A.b()
if(s)this.a.cx=!0},
$S:25}
A.a_K.prototype={
$1(a){a.kF()},
$S:25}
A.a_H.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a.Cc(f.c)
if(e.a){B.b.U(f.d)
f.e.U(0)
if(!f.f.a)f.a.a=!0}for(s=e.gHj(),r=s.length,q=f.d,p=f.e,o=f.f,n=f.b,m=f.r,l=0;l<s.length;s.length===r||(0,A.Q)(s),++l){k=s[l]
q.push(k)
k.b.push(n)
k.WA(o.aa)
if(o.b||!(n.c instanceof A.w)){k.xz()
continue}if(k.gjf()==null||m)continue
if(!o.Hu(k.gjf()))p.E(0,k)
j=q.length-1
for(i=0;i<j;++i){h=q[i]
g=k.gjf()
g.toString
if(!g.Hu(h.gjf())){p.E(0,k)
p.E(0,h)}}}},
$S:25}
A.ay.prototype={
saJ(a){var s=this,r=s.q$
if(r!=null)s.ik(r)
s.q$=a
if(a!=null)s.hu(a)},
iL(){var s=this.q$
if(s!=null)this.yp(s)},
aP(a){var s=this.q$
if(s!=null)a.$1(s)}}
A.dC.prototype={$ic5:1}
A.ap.prototype={
gpS(){return this.d_$},
CF(a,b){var s,r,q,p=this,o=a.e
o.toString
s=A.n(p).h("ap.1")
s.a(o);++p.d_$
if(b==null){o=o.ah$=p.ar$
if(o!=null){o=o.e
o.toString
s.a(o).bM$=a}p.ar$=a
if(p.cG$==null)p.cG$=a}else{r=b.e
r.toString
s.a(r)
q=r.ah$
if(q==null){o.bM$=b
p.cG$=r.ah$=a}else{o.ah$=q
o.bM$=b
o=q.e
o.toString
s.a(o).bM$=r.ah$=a}}},
xk(a,b,c){this.hu(b)
this.CF(b,c)},
I(a,b){},
Du(a){var s,r,q,p,o=this,n=a.e
n.toString
s=A.n(o).h("ap.1")
s.a(n)
r=n.bM$
q=n.ah$
if(r==null)o.ar$=q
else{p=r.e
p.toString
s.a(p).ah$=q}q=n.ah$
if(q==null)o.cG$=r
else{q=q.e
q.toString
s.a(q).bM$=r}n.ah$=n.bM$=null;--o.d_$},
A(a,b){this.Du(b)
this.ik(b)},
r2(a,b){var s=this,r=a.e
r.toString
if(A.n(s).h("ap.1").a(r).bM$==b)return
s.Du(a)
s.CF(a,b)
s.a3()},
iL(){var s,r,q,p=this.ar$
for(s=A.n(this).h("ap.1");p!=null;){r=p.a
q=this.a
if(r<=q){p.a=q+1
p.iL()}r=p.e
r.toString
p=s.a(r).ah$}},
aP(a){var s,r,q=this.ar$
for(s=A.n(this).h("ap.1");q!=null;){a.$1(q)
r=q.e
r.toString
q=s.a(r).ah$}},
gZ6(a){return this.ar$},
Xf(a){var s=a.e
s.toString
return A.n(this).h("ap.1").a(s).bM$},
Xd(a){var s=a.e
s.toString
return A.n(this).h("ap.1").a(s).ah$}}
A.GS.prototype={
tu(){this.a3()}}
A.a95.prototype={}
A.a67.prototype={
I(a,b){B.b.I(this.b,b)},
gHj(){return this.b}}
A.mo.prototype={
gHj(){return A.a([this],t.yj)},
WA(a){var s
if(a==null||a.a===0)return
s=this.c;(s==null?this.c=A.b7(t.xJ):s).I(0,a)}}
A.Nr.prototype={
mF(a,b,c,d){var s,r,q,p,o,n=this.b,m=B.b.gJ(n)
if(m.fr==null){s=B.b.gJ(n).glF()
r=B.b.gJ(n)
r=t.W.a(A.F.prototype.gbl.call(r)).as
r.toString
q=$.abO()
q=new A.bM(null,0,s,B.T,q.p2,q.e,q.p3,q.f,q.aR,q.p4,q.R8,q.RG,q.rx,q.ry,q.to,q.x2,q.xr,q.y1)
q.al(r)
m.fr=q}m=B.b.gJ(n).fr
m.toString
m.saI(0,B.b.gJ(n).giX())
p=A.a([],t.T)
for(n=this.e,s=n.length,o=0;o<n.length;n.length===s||(0,A.Q)(n),++o)n[o].mF(0,b,c,p)
m.iQ(0,p,null)
d.push(m)},
gjf(){return null},
xz(){},
I(a,b){B.b.I(this.e,b)}}
A.Oh.prototype={
mF(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(!h.x){s=h.b
B.b.gJ(s).fr=null
for(r=h.w,q=r.length,p=A.ai(s),o=p.c,p=p.h("fJ<1>"),n=0;n<r.length;r.length===q||(0,A.Q)(r),++n){m=r[n]
l=new A.fJ(s,1,g,p)
l.tv(s,1,g,o)
B.b.I(m.b,l)
m.mF(a+h.f.x2,b,c,d)}return}s=h.b
if(s.length>1){k=new A.a96()
k.Pm(c,b,s)}else k=g
r=h.e
q=!r
if(q){if(k==null)p=g
else{p=k.d
p===$&&A.b()
if(!p.gP(p)){p=k.c
p===$&&A.b()
p=p.HE()}else p=!0}p=p===!0}else p=!1
if(p)return
p=B.b.gJ(s)
if(p.fr==null)p.fr=A.a1F(g,B.b.gJ(s).glF())
j=B.b.gJ(s).fr
j.sHx(r)
j.dx=h.c
j.z=a
if(a!==0){h.BR()
r=h.f
r.shA(0,r.x2+a)}if(k!=null){r=k.d
r===$&&A.b()
j.saI(0,r)
r=k.c
r===$&&A.b()
j.sbh(0,r)
j.x=k.b
j.y=k.a
if(q&&k.e){h.BR()
h.f.b5(B.le,!0)}}i=A.a([],t.T)
for(r=h.w,q=r.length,n=0;n<r.length;r.length===q||(0,A.Q)(r),++n){m=r[n]
p=j.x
m.mF(0,j.y,p,i)}r=h.f
if(r.a)B.b.gJ(s).mx(j,h.f,i)
else j.iQ(0,i,r)
d.push(j)},
gjf(){return this.x?null:this.f},
I(a,b){var s,r,q,p,o,n,m=this
for(s=b.length,r=m.w,q=0;q<b.length;b.length===s||(0,A.Q)(b),++q){p=b[q]
r.push(p)
if(p.gjf()==null)continue
if(!m.r){m.f=m.f.XP()
m.r=!0}o=m.f
n=p.gjf()
n.toString
o.j7(n)}},
BR(){var s,r,q=this
if(!q.r){s=q.f
r=A.ok()
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
r.aR=s.aR
r.aa=s.aa
r.y2=s.y2
r.ai=s.ai
r.an=s.an
r.ag=s.ag
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
xz(){this.x=!0}}
A.a96.prototype={
Pm(a,b,c){var s,r,q,p,o,n,m=this,l=new A.bb(new Float64Array(16))
l.cO()
m.c=l
m.b=a
m.a=b
for(s=c.length-1;s>0;){r=c[s];--s
q=c[s]
a=r.wr(q)
if(a!=null){m.b=a
m.a=A.ahN(m.a,r.ih(q))}else m.b=A.ahN(m.b,r.ih(q))
l=$.akH()
l.cO()
A.arz(r,q,m.c,l)
m.b=A.ahO(m.b,l)
m.a=A.ahO(m.a,l)}p=B.b.gJ(c)
l=m.b
l=l==null?p.giX():l.eJ(p.giX())
m.d=l
o=m.a
if(o!=null){n=o.eJ(l)
if(n.gP(n)){l=m.d
l=!l.gP(l)}else l=!1
m.e=l
if(!l)m.d=n}}}
A.N9.prototype={}
A.hD.prototype={
i(a){var s=A.a(["offset="+this.a.i(0)],t.s)
s.push(this.oi(0))
return B.b.bj(s,"; ")}}
A.uo.prototype={
e4(a){if(!(a.e instanceof A.hD))a.e=new A.hD(null,null,B.j)},
srw(a,b){var s=this,r=s.K
switch(r.d.b0(0,b).a){case 0:case 1:return
case 2:r.srw(0,b)
s.H=s.q=null
s.uh(b)
s.aj()
s.aX()
break
case 3:r.srw(0,b)
s.H=s.q=s.bJ=null
s.uh(b)
s.a3()
s.v8()
s.BK()
s.EU()
break}},
snO(a){var s=this
if(a==s.ae)return
s.v8()
s.BK()
s.ae=a
s.EU()},
EU(){var s,r,q=this
if(q.ae==null)return
s=q.ao
if(s==null)s=q.ao=q.QM()
r=q.ae
B.b.Z(s,r.gj8(r))},
v8(){var s,r=this.ae
if(r==null||this.ao==null)return
s=this.ao
s.toString
B.b.Z(s,r.gyr(r))},
QM(){var s,r,q,p,o=this.K.d.IQ(!1),n=A.a([],t.sb)
for(s=o.length,r=0;r<s;){q=B.c.nm(o,$.ak5(),r)
if(r!==q){if(q===-1)q=s
p=new A.iQ(new A.er(r,q),this,o,$.bq())
p.w=p.Cb()
n.push(p)
r=q}++r}return n},
BK(){var s,r,q,p=this.ao
if(p==null)return
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.Q)(p),++r){q=p[r]
q.y2$=$.bq()
q.y1$=0}this.ao=null},
a3(){var s=this.ao
if(s!=null)B.b.Z(s,new A.a_R())
this.LX()},
m(){var s=this
s.v8()
s.ao=null
s.K.m()
s.hq()},
uh(a){this.aT=A.a([],t.e9)
a.aP(new A.a_O(this))},
syA(a,b){var s=this.K
if(s.f===b)return
s.syA(0,b)
this.aj()},
sbA(a){var s=this.K
if(s.r===a)return
s.sbA(a)
this.a3()},
sKj(a){if(this.bw===a)return
this.bw=a
this.a3()},
sa0B(a,b){var s,r=this
if(r.c0===b)return
r.c0=b
s=b===B.c3?"\u2026":null
r.K.sYI(s)
r.a3()},
syB(a){var s=this.K
if(s.w===a)return
s.syB(a)
this.bJ=null
this.a3()},
sxC(a){var s=this.K
if(s.z==a)return
s.sxC(a)
this.bJ=null
this.a3()},
sxx(a,b){var s=this.K
if(J.f(s.y,b))return
s.sxx(0,b)
this.bJ=null
this.a3()},
sKt(a){return},
syC(a){var s=this.K
if(s.as===a)return
s.syC(a)
this.bJ=null
this.a3()},
sIJ(a){return},
sJU(a){var s,r=this
if(J.f(r.c9,a))return
r.c9=a
s=r.ao
s=s==null?null:B.b.ja(s,new A.a_T())
if(s===!0)r.aj()},
oH(a){var s,r=this,q=r.z9(a,B.T)
r.i5(t.k.a(A.w.prototype.gX.call(r)))
s=r.K
s.Bq(a,B.T)
s=s.db
s===$&&A.b()
s=s.b
return q.W(0,new A.t(0,s==null?0:s))},
ee(a){this.i5(t.k.a(A.w.prototype.gX.call(this)))
return this.K.ee(B.F)},
iD(a){return!0},
cu(a,b){var s,r,q,p,o,n,m,l,k,j={},i=this.K,h=i.a.hg(b),g=i.d.JD(h)
if(g!=null&&!0){a.E(0,new A.h8(t.kZ.a(g),t.Cq))
s=!0}else s=!1
r=j.a=this.ar$
q=A.n(this).h("ap.1")
p=t.lO
o=0
while(!0){if(!(r!=null&&o<i.ax.length))break
r=r.e
r.toString
p.a(r)
n=r.a
m=new Float64Array(16)
l=new A.bb(m)
l.cO()
m[14]=0
m[13]=n.b
m[12]=n.a
n=r.e
l.hi(0,n,n,n)
if(a.vV(new A.a_Q(j,b,r),b,l))return!0
r=j.a.e
r.toString
k=q.a(r).ah$
j.a=k;++o
r=k}return s},
CN(a,b){var s=this.bw||this.c0===B.c3?a:1/0
this.K.xv(s,b)},
tu(){var s=this,r=$.bG,q=r.CW$
switch(q.a){case 0:case 4:if(s.fi)return
s.fi=!0
r.rU(new A.a_U(s,q))
break
case 1:case 2:case 3:s.Ai()
s.K.a3()
break}},
i5(a){this.K.t4(this.dZ)
this.CN(a.b,a.a)},
CL(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.d_$
if(i===0)return A.a([],t.aE)
s=j.ar$
r=A.aX(i,B.Sk,!1,t.cP)
q=new A.aJ(0,a.b,0,1/0).cz(0,j.K.w)
for(i=A.n(j).h("ap.1"),p=!b,o=0;s!=null;){if(p){s.cg(q,!0)
n=s.k3
n.toString
m=j.aT
m===$&&A.b()
switch(m[o].gdU()){case B.l_:l=s.Jn(j.aT[o].gpK())
break
case B.l0:case B.l1:case B.fh:case B.l3:case B.l2:l=null
break
default:l=null}k=n}else{k=s.fv(q)
l=null}n=j.aT
n===$&&A.b()
r[o]=new A.lq(k,n[o].gdU(),l,j.aT[o].gpK())
n=s.e
n.toString
s=i.a(n).ah$;++o}return r},
SW(a){return this.CL(a,!1)},
V7(){var s,r,q=this.ar$,p=t.lO,o=this.K,n=A.n(this).h("ap.1"),m=0
while(!0){if(!(q!=null&&m<o.ax.length))break
s=q.e
s.toString
p.a(s)
r=o.ax[m]
s.a=new A.t(r.a,r.b)
s.e=o.ay[m]
q=n.a(s).ah$;++m}},
OU(){var s,r,q=this.aT
q===$&&A.b()
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.Q)(q),++r)switch(q[r].gdU()){case B.l_:case B.l0:case B.l1:return!1
case B.l2:case B.l3:case B.fh:continue}return!0},
bV(a){var s,r,q=this
if(!q.OU())return B.P
s=q.K
s.t4(q.CL(a,!0))
q.CN(a.b,a.a)
r=s.gbd(s)
s=s.a
return a.bn(new A.Z(r,Math.ceil(s.gbF(s))))},
bx(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=t.k.a(A.w.prototype.gX.call(i))
i.dZ=i.SW(g)
i.i5(g)
i.V7()
s=i.K
r=s.gbd(s)
q=s.a
q=Math.ceil(q.gbF(q))
p=s.a.gYy()
o=i.k3=g.bn(new A.Z(r,q))
n=o.b<q||p
m=o.a<r
if(m||n)switch(i.c0.a){case 3:i.c1=!1
i.bJ=null
break
case 0:case 2:i.c1=!0
i.bJ=null
break
case 1:i.c1=!0
r=A.a4S(h,s.d.a,"\u2026")
q=s.r
q.toString
o=s.w
l=A.a4Q(h,s.y,h,h,r,B.bD,q,h,o,B.aP)
l.a_U()
if(m){switch(s.r.a){case 0:k=l.gbd(l)
j=0
break
case 1:j=i.k3.a
k=j-l.gbd(l)
break
default:k=h
j=k}i.bJ=A.acw(new A.t(k,0),new A.t(j,0),A.a([B.k,B.mN],t.bk),h,B.dI,h)}else{j=i.k3.b
s=l.a
i.bJ=A.acw(new A.t(0,j-Math.ceil(s.gbF(s))/2),new A.t(0,j),A.a([B.k,B.mN],t.bk),h,B.dI,h)}l.m()
break}else{i.c1=!1
i.bJ=null}},
aF(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e={}
f.i5(t.k.a(A.w.prototype.gX.call(f)))
if(f.c1){s=f.k3
r=b.a
q=b.b
p=new A.z(r,q,r+s.a,q+s.b)
if(f.bJ!=null)a.gbz(a).zl(p,$.av().bf())
else a.gbz(a).ck(0)
a.gbz(a).jc(p)}s=f.K
s.aF(a.gbz(a),b)
r=e.a=f.ar$
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
a.a0T(j,new A.t(o+r.a,n+r.b),A.tm(k,k,k),new A.a_S(e))
k=e.a.e
k.toString
i=m.a(k).ah$
e.a=i;++l
r=i}if(f.c1){if(f.bJ!=null){a.gbz(a).aw(0,o,n)
h=$.av().bf()
h.sWV(B.Cj)
h.szD(f.bJ)
s=a.gbz(a)
r=f.k3
s.c7(new A.z(0,0,0+r.a,0+r.b),h)}a.gbz(a).ci(0)}s=f.ao
if(s!=null)for(r=s.length,g=0;g<s.length;s.length===r||(0,A.Q)(s),++g)s[g].aF(a,b)
f.M3(a,b)},
z9(a,b){var s
this.i5(t.k.a(A.w.prototype.gX.call(this)))
s=this.K
s.Bq(a,b)
s=s.db
s===$&&A.b()
return s.a},
z0(a){this.i5(t.k.a(A.w.prototype.gX.call(this)))
return this.K.a.rJ(a.a,a.b,B.m2,B.fV)},
hg(a){this.i5(t.k.a(A.w.prototype.gX.call(this)))
return this.K.a.hg(a)},
lu(a){this.i5(t.k.a(A.w.prototype.gX.call(this)))
return this.K.a.lu(a)},
eg(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.fD(a)
s=d.K
r=s.d
r.toString
q=A.a([],t.lF)
r.XE(q)
d.e_=q
if(B.b.ja(q,new A.a_P()))a.a=a.b=!0
else{r=d.q
if(r==null){p=new A.bR("")
o=A.a([],t.ve)
for(r=d.e_,n=r.length,m=0,l=0,k="";l<r.length;r.length===n||(0,A.Q)(r),++l){j=r[l]
i=j.b
if(i==null)i=j.a
for(k=j.f,h=k.length,g=0;g<k.length;k.length===h||(0,A.Q)(k),++g){f=k[g]
e=f.a
o.push(f.FL(new A.er(m+e.a,m+e.b)))}k=p.a+=i
m+=i.length}r=d.q=new A.ck(k.charCodeAt(0)==0?k:k,o)}a.p4=r
a.d=!0
s=s.r
s.toString
a.y1=s}},
mx(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=A.a([],t.T),b0=a7.K,b1=b0.r
b1.toString
s=A.jv(a8,a8,t.qI,t.ju)
r=a7.H
if(r==null){r=a7.e_
r.toString
r=a7.H=A.atE(r)}for(q=r.length,p=t.k,o=b1,n=0,m=0,l=0;l<r.length;r.length===q||(0,A.Q)(r),++l,m=j){k=r[l]
b1=k.a
j=m+b1.length
i=m<j
h=i?m:j
i=i?j:m
g=p.a(A.w.prototype.gX.call(a7))
b0.t4(a7.dZ)
f=g.b
f=a7.bw||a7.c0===B.c3?f:1/0
b0.xv(f,g.a)
e=b0.a.rJ(h,i,B.m2,B.fV)
if(e.length===0)continue
i=B.b.gJ(e)
d=new A.z(i.a,i.b,i.c,i.d)
c=B.b.gJ(e).e
for(i=A.ai(e),h=new A.fJ(e,1,a8,i.h("fJ<1>")),h.tv(e,1,a8,i.c),h=new A.dh(h,h.gp(h)),i=A.n(h).c;h.t();){g=h.d
if(g==null)g=i.a(g)
d=d.n7(new A.z(g.a,g.b,g.c,g.d))
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
a0=new A.z(b,a,i,g)
a1=A.ok()
a2=n+1
a1.id=new A.tO(n,a8)
a1.d=!0
a1.y1=o
f=k.b
b1=f==null?b1:f
a1.p4=new A.ck(b1,k.f)
b1=b2.y
if(b1!=null){a3=b1.eJ(a0)
if(a3.a>=a3.c||a3.b>=a3.d)b1=!(b>=i||a>=g)
else b1=!1
a1.b5(B.le,b1)}a4=A.aZ("newChild")
b1=a7.dg
i=b1==null?a8:b1.a!==0
if(i===!0){b1.toString
i=new A.b0(b1,A.n(b1).h("b0<1>"))
a5=i.ga7(i)
if(!a5.t())A.a_(A.bJ())
b1=b1.A(0,a5.gG(a5))
b1.toString
if(a4.b!==a4)A.a_(A.XN(a4.a))
a4.b=b1}else{a6=new A.iH()
b1=A.a1F(a6,a7.PB(a6))
if(a4.b!==a4)A.a_(A.XN(a4.a))
a4.b=b1}if(b1===a4)A.a_(A.fu(a4.a))
J.alR(b1,a1)
if(!b1.w.k(0,a0)){b1.w=a0
b1.ht()}b1=a4.b
if(b1===a4)A.a_(A.fu(a4.a))
i=b1.d
i.toString
s.l(0,i,b1)
b1=a4.b
if(b1===a4)A.a_(A.fu(a4.a))
a9.push(b1)
n=a2
o=c}a7.dg=s
b2.iQ(0,a9,b3)},
PB(a){return new A.a_N(this,a)},
kF(){this.tn()
this.dg=null}}
A.a_R.prototype={
$1(a){return a.x=null},
$S:208}
A.a_O.prototype={
$1(a){return!0},
$S:38}
A.a_T.prototype={
$1(a){var s=a.w
s===$&&A.b()
return s.c!==B.cH},
$S:209}
A.a_Q.prototype={
$2(a,b){return this.a.a.bN(a,b)},
$S:15}
A.a_U.prototype={
$1(a){var s=this.a
s.fi=!1
if(s.b!=null){s.Ai()
s.K.a3()}},
$S:2}
A.a_S.prototype={
$2(a,b){var s=this.a.a
s.toString
a.eo(s,b)},
$S:8}
A.a_P.prototype={
$1(a){return!1},
$S:210}
A.a_N.prototype={
$0(){var s=this.a,r=s.dg.j(0,this.b)
r.toString
s.jY(s,r.w)},
$S:0}
A.iQ.prototype={
gn(a){var s=this.w
s===$&&A.b()
return s},
TT(){var s=this,r=s.Cb(),q=s.w
q===$&&A.b()
if(q.k(0,r))return
s.w=r
s.av()},
Cb(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f==null||g.e==null)return B.SU
s=f.a
r=g.e.a
f=g.b
q=f.oH(new A.aW(s,B.A))
p=s===r?q:f.oH(new A.aW(r,B.A))
f=f.K
o=f.r
o.toString
n=s>r!==(B.Q===o)
m=A.tn(g.gf1().a,g.gf1().b,0)
m.fT(m)
o=A.cd(m,q)
l=f.grk()
k=n?B.By:B.Bx
j=A.cd(m,p)
f=f.grk()
i=n?B.Bx:B.By
h=g.d.a===g.e.a?B.SW:B.ld
return new A.jR(new A.lO(o,l,k),new A.lO(j,f,i),h,!0)},
qe(a){var s=this,r=A.aZ("result"),q=s.d,p=s.e,o=a.a
switch(o.a){case 0:case 1:r.sbS(s.W1(t.ib.a(a).b,o===B.dx))
break
case 2:s.e=s.d=null
r.sbS(B.cG)
break
case 3:o=s.a
s.d=new A.aW(o.a,B.A)
s.e=new A.aW(o.b,B.K)
r.sbS(B.cG)
break
case 4:r.sbS(s.Sf(t.k2.a(a).gzh()))
break
case 5:t.uQ.a(a)
r.sbS(s.RA(a.gGL(a),a.gfl(),a.ga25()))
break
case 6:t.sQ.a(a)
r.sbS(s.Rg(a.gwJ(a),a.gfl(),a.gG6(a)))
break}if(!J.f(q,s.d)||!J.f(p,s.e)){s.b.aj()
s.TT()}return r.aC()},
W1(a,b){var s,r,q,p,o,n,m=this
if(b)m.e=null
else m.d=null
s=m.b
r=s.bs(0,null)
r.fT(r)
q=A.cd(r,a)
p=m.gf1()
if(p.gP(p))return A.agV(m.gf1(),q)
p=m.gf1()
o=s.K.r
o.toString
n=m.ot(s.hg(A.aq8(p,q,o)))
if(b)m.e=n
else m.d=n
s=n.a
p=m.a
if(s===p.b)return B.b3
if(s===p.a)return B.b4
return A.agV(m.gf1(),q)},
ot(a){var s,r=a.a,q=this.a,p=q.b
if(r<=p)s=r===p&&a.b===B.A
else s=!0
if(s)return new A.aW(p,B.K)
q=q.a
if(r<q)return new A.aW(q,B.A)
return a},
Sf(a){var s,r,q,p,o=this,n=o.b,m=n.hg(n.jU(a))
if(o.Ub(m))return B.aq
s=n.lu(m)
r=A.aZ("start")
q=A.aZ("end")
n=m.a
p=s.b
if(n>=p)r.b=q.b=new A.aW(n,B.A)
else{r.b=new A.aW(s.a,B.A)
q.b=new A.aW(p,B.K)}o.d=r.aC()
o.e=q.aC()
return B.aq},
Rg(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.bs(0,null)
if(j.fT(j)===0)switch(c){case B.fl:case B.dz:return B.b4
case B.fm:case B.dy:return B.b3}s=A.cd(j,new A.t(a,0)).a
switch(c){case B.fl:case B.fm:if(b){k=l.e
k.toString
r=k}else{k=l.d
k.toString
r=k}q=l.SB(r,!1,s)
p=q.a
o=q.b
break
case B.dy:case B.dz:n=l.e
if(n==null){n=new A.aW(l.a.b,B.K)
l.e=n
r=n}else r=n
n=l.d
if(n==null){l.d=r
m=r}else m=n
p=k.hg(new A.t(s,k.oH(b?r:m).b-k.K.grk()/2))
o=B.aq
break
default:p=null
o=null}if(b)l.e=p
else l.d=p
return o},
RA(a,b,c){var s,r,q,p,o,n,m=this,l=m.e
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
switch(c){case B.UJ:l=m.a
q=m.oG(new A.RW(B.c.ab(m.c,l.a,l.b)),s,a)
p=B.aq
break
case B.UK:l=m.a
q=m.oG(new A.KF(new A.a5t(m),new A.a5r(B.c.ab(m.c,l.a,l.b))),s,a)
p=B.aq
break
case B.UL:q=m.oG(new A.XQ(m),s,a)
p=B.aq
break
case B.UM:o=m.a
n=o.a
o=o.b
q=m.oG(new A.SQ(B.c.ab(m.c,n,o)),s,a)
if(a&&q.a===o)p=B.b3
else p=l&&q.a===n?B.b4:B.aq
break
default:p=null
q=null}if(b)m.e=q
else m.d=q
return p},
oG(a,b,c){if(c)return this.ot(a.fz(B.Ss.fz(b)))
return this.ot(a.fw(B.Sr.fw(b)))},
SB(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.K,i=j.fr
if(i==null)i=j.fr=j.a.XD()
s=k.z9(a,B.T)
j=i.length
r=j-1
for(q=s.b,p=0;p<i.length;i.length===j||(0,A.Q)(i),++p){o=i[p]
if(o.gpK()>q){r=J.alB(o)
break}}if(b&&r===i.length-1)n=new A.aW(l.a.b,B.K)
else if(!b&&r===0)n=new A.aW(l.a.a,B.A)
else n=l.ot(k.hg(new A.t(c,i[b?r+1:r-1].gpK())))
k=n.a
j=l.a
if(k===j.a)m=B.b4
else m=k===j.b?B.b3:B.aq
return new A.aU(n,m,t.nz)},
Ub(a){var s,r,q,p,o=this
if(o.d==null||o.e==null)return!1
s=A.aZ("currentStart")
r=A.aZ("currentEnd")
q=o.d
q.toString
p=o.e
p.toString
if(A.adC(q,p)>0){s.b=q
r.b=p}else{s.b=p
r.b=q}return A.adC(s.aC(),a)>=0&&A.adC(r.aC(),a)<=0},
bs(a,b){var s=A.tn(this.gf1().a,this.gf1().b,0)
s.cn(0,this.b.bs(0,b))
return s},
hc(a,b){if(this.b.b==null)return},
gf1(){var s,r,q,p,o,n,m=this,l=m.x
if(l==null){l=m.b
s=m.a
r=s.a
q=l.z0(A.a4R(B.A,r,s.b,!1))
if(q.length!==0){l=B.b.gJ(q)
p=new A.z(l.a,l.b,l.c,l.d)
for(o=1;o<q.length;++o){l=q[o]
p=p.n7(new A.z(l.a,l.b,l.c,l.d))}m.x=p
l=p}else{n=l.oH(new A.aW(r,B.A))
l=A.ad0(n,new A.t(n.a+0,n.b+-l.K.grk()))
m.x=l}}return l},
gd5(a){var s=this.gf1()
return new A.Z(s.c-s.a,s.d-s.b)},
aF(a,b){var s,r,q,p,o,n=this,m=n.d
if(m==null||n.e==null)return
s=n.b
if(s.c9!=null){r=A.a4R(B.A,m.a,n.e.a,!1)
q=$.av().bf()
q.scA(0,B.aO)
m=s.c9
m.toString
q.saq(0,m)
for(m=s.z0(r),s=m.length,p=0;p<m.length;m.length===s||(0,A.Q)(m),++p){o=m[p]
a.gbz(a).c7(new A.z(o.a,o.b,o.c,o.d).cQ(b),q)}}A.tn(n.gf1().a,n.gf1().b,0)},
z6(a){var s=this.b.K.a.Js(a),r=this.a,q=r.a
r=r.b
return A.a4R(B.A,B.f.fS(s.a,q,r),B.f.fS(s.b,q,r),!1)},
$ia1:1}
A.x9.prototype={
al(a){var s,r,q
this.e9(a)
s=this.ar$
for(r=t.lO;s!=null;){s.al(a)
q=s.e
q.toString
s=r.a(q).ah$}},
ad(a){var s,r,q
this.dq(0)
s=this.ar$
for(r=t.lO;s!=null;){s.ad(0)
q=s.e
q.toString
s=r.a(q).ah$}}}
A.Na.prototype={}
A.Nb.prototype={
al(a){this.N3(a)
$.fz.wP$.a.E(0,this.gAv())},
ad(a){$.fz.wP$.a.A(0,this.gAv())
this.N4(0)}}
A.PF.prototype={}
A.PG.prototype={}
A.Hf.prototype={
sa0A(a){if(a===this.K)return
this.K=a
this.aj()},
sa0W(a){if(a===this.q)return
this.q=a
this.aj()},
sXb(a){return},
sXa(a){return},
giZ(){return!0},
gkC(){return!0},
gSQ(){var s=this.K,r=(s|1)>>>0>0||(s|2)>>>0>0?80:0
return(s|4)>>>0>0||(s|8)>>>0>0?r+80:r},
bV(a){return a.bn(new A.Z(1/0,this.gSQ()))},
aF(a,b){var s=b.a,r=b.b,q=this.k3
q=new A.Gr(new A.z(s,r,s+q.a,r+q.b),this.K,this.q,!1,!1,A.y(t.S,t.M),A.am())
q.hr()
a.lL()
a.vY(q)}}
A.Hk.prototype={}
A.e3.prototype={
e4(a){if(!(a.e instanceof A.c5))a.e=new A.c5()},
bV(a){var s=this.q$
if(s!=null)return s.fv(a)
return this.mG(a)},
bx(){var s=this,r=s.q$,q=t.k
if(r!=null){r.cg(q.a(A.w.prototype.gX.call(s)),!0)
r=s.q$.k3
r.toString
s.k3=r}else s.k3=s.mG(q.a(A.w.prototype.gX.call(s)))},
mG(a){return new A.Z(A.E(0,a.a,a.b),A.E(0,a.c,a.d))},
cu(a,b){var s=this.q$
s=s==null?null:s.bN(a,b)
return s===!0},
cW(a,b){},
aF(a,b){var s=this.q$
if(s!=null)a.eo(s,b)}}
A.nm.prototype={
D(){return"HitTestBehavior."+this.b}}
A.up.prototype={
bN(a,b){var s,r=this
if(r.k3.B(0,b)){s=r.cu(a,b)||r.v===B.au
if(s||r.v===B.e1)a.E(0,new A.mT(b,r))}else s=!1
return s},
iD(a){return this.v===B.au}}
A.H_.prototype={
sFg(a){if(this.v.k(0,a))return
this.v=a
this.a3()},
bx(){var s=this,r=t.k.a(A.w.prototype.gX.call(s)),q=s.q$,p=s.v
if(q!=null){q.cg(p.n4(r),!0)
q=s.q$.k3
q.toString
s.k3=q}else s.k3=p.n4(r).bn(B.P)},
bV(a){var s=this.q$,r=this.v
if(s!=null)return s.fv(r.n4(a))
else return r.n4(a).bn(B.P)}}
A.H9.prototype={
sa0d(a,b){if(this.v===b)return
this.v=b
this.a3()},
sa0a(a,b){if(this.O===b)return
this.O=b
this.a3()},
CO(a){var s,r,q=a.a,p=a.b
p=p<1/0?p:A.E(this.v,q,p)
s=a.c
r=a.d
return new A.aJ(q,p,s,r<1/0?r:A.E(this.O,s,r))},
Dp(a,b){var s=this.q$
if(s!=null)return a.bn(b.$2(s,this.CO(a)))
return this.CO(a).bn(B.P)},
bV(a){return this.Dp(a,A.abj())},
bx(){this.k3=this.Dp(t.k.a(A.w.prototype.gX.call(this)),A.abk())}}
A.GW.prototype={
sWN(a,b){if(this.v===b)return
this.v=b
this.a3()},
AX(a){var s,r,q,p,o=a.a,n=a.b
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
r=p}return a.bn(new A.Z(o,r))},
bV(a){return this.AX(a)},
bx(){var s,r=this,q=r.AX(t.k.a(A.w.prototype.gX.call(r)))
r.k3=q
s=r.q$
if(s!=null)s.h3(A.qh(q))}}
A.Hd.prototype={
gkC(){return this.q$!=null&&this.v>0},
slh(a,b){var s,r,q,p,o=this
if(o.O===b)return
s=o.q$!=null
r=s&&o.v>0
q=o.v
o.O=b
p=B.d.b1(A.Qn(b,0,1)*255)
o.v=p
if(r!==(s&&p>0))o.jD()
o.aj()
if(q!==0!==(o.v!==0)&&!0)o.aX()},
spI(a){return},
jJ(a){return this.v>0},
aF(a,b){var s,r,q=this
if(q.q$==null)return
s=q.v
if(s===0){q.ch.saM(0,null)
return}r=q.ch
r.saM(0,a.yg(b,s,A.e3.prototype.gjI.call(q),t.Ex.a(r.a)))},
eR(a){var s,r=this.q$
if(r!=null)s=this.v!==0||!1
else s=!1
if(s){r.toString
a.$1(r)}}}
A.uk.prototype={
gdh(){if(this.q$!=null){var s=this.wT$
s.toString}else s=!1
return s},
nY(a){var s=a==null?A.agm():a
s.sFi(0,this.kW$)
return s},
slh(a,b){var s=this,r=s.kX$
if(r===b)return
if(s.b!=null&&r!=null)r.F(0,s.gpp())
s.kX$=b
if(s.b!=null)b.S(0,s.gpp())
s.vF()},
spI(a){if(!1===this.wU$)return
this.wU$=!1
this.aX()},
vF(){var s,r=this,q=r.kW$,p=r.kX$
p=r.kW$=B.d.b1(A.Qn(p.gn(p),0,1)*255)
if(q!==p){s=r.wT$
p=p>0
r.wT$=p
if(r.q$!=null&&s!==p)r.jD()
r.a06()
if(q===0||r.kW$===0)r.aX()}},
jJ(a){var s=this.kX$
return s.gn(s)>0},
eR(a){var s,r=this.q$
if(r!=null)if(this.kW$===0){s=this.wU$
s.toString}else s=!0
else s=!1
if(s){r.toString
a.$1(r)}}}
A.GV.prototype={}
A.qL.prototype={
S(a,b){return null},
F(a,b){return null},
i(a){return"CustomClipper"}}
A.lR.prototype={
Jl(a){return this.b.eT(new A.z(0,0,0+a.a,0+a.b),this.c)},
Kf(a){if(A.A(a)!==B.YI)return!0
t.qm.a(a)
return!a.b.k(0,this.b)||a.c!=this.c}}
A.pt.prototype={
smE(a){var s,r=this,q=r.v
if(q==a)return
r.v=a
s=a==null
if(s||q==null||A.A(a)!==A.A(q)||a.Kf(q))r.oT()
if(r.b!=null){if(q!=null)q.F(0,r.goS())
if(!s)a.S(0,r.goS())}},
al(a){var s
this.lR(a)
s=this.v
if(s!=null)s.S(0,this.goS())},
ad(a){var s=this.v
if(s!=null)s.F(0,this.goS())
this.ka(0)},
oT(){this.O=null
this.aj()
this.aX()},
spU(a){if(a!==this.au){this.au=a
this.aj()}},
bx(){var s,r=this,q=r.k3
q=q!=null?q:null
r.tr()
s=r.k3
s.toString
if(!J.f(q,s))r.O=null},
i9(){var s,r,q=this
if(q.O==null){s=q.v
if(s==null)s=null
else{r=q.k3
r.toString
r=s.Jl(r)
s=r}q.O=s==null?q.gow():s}},
ih(a){var s,r=this
switch(r.au.a){case 0:return null
case 1:case 2:case 3:if(r.v==null)s=null
else{s=r.k3
s=new A.z(0,0,0+s.a,0+s.b)}if(s==null){s=r.k3
s=new A.z(0,0,0+s.a,0+s.b)}return s}},
m(){this.ca=null
this.hq()}}
A.GZ.prototype={
gow(){var s=this.k3
return new A.z(0,0,0+s.a,0+s.b)},
bN(a,b){var s=this
if(s.v!=null){s.i9()
if(!s.O.B(0,b))return!1}return s.i_(a,b)},
aF(a,b){var s,r,q=this,p=q.q$
if(p!=null){s=q.ch
if(q.au!==B.J){q.i9()
p=q.cx
p===$&&A.b()
r=q.O
r.toString
s.saM(0,a.jL(p,b,r,A.e3.prototype.gjI.call(q),q.au,t.iM.a(s.a)))}else{a.eo(p,b)
s.saM(0,null)}}else q.ch.saM(0,null)}}
A.GY.prototype={
gow(){var s=$.av().de(),r=this.k3
s.vU(new A.z(0,0,0+r.a,0+r.b))
return s},
bN(a,b){var s=this
if(s.v!=null){s.i9()
if(!s.O.B(0,b))return!1}return s.i_(a,b)},
aF(a,b){var s,r,q,p,o=this,n=o.q$
if(n!=null){s=o.ch
if(o.au!==B.J){o.i9()
n=o.cx
n===$&&A.b()
r=o.k3
q=r.a
r=r.b
p=o.O
p.toString
s.saM(0,a.Ic(n,b,new A.z(0,0,0+q,0+r),p,A.e3.prototype.gjI.call(o),o.au,t.n0.a(s.a)))}else{a.eo(n,b)
s.saM(0,null)}}else o.ch.saM(0,null)}}
A.xa.prototype={
shA(a,b){if(this.aQ===b)return
this.aQ=b
this.aj()},
sfA(a,b){if(this.bv.k(0,b))return
this.bv=b
this.aj()},
saq(a,b){if(this.dw.k(0,b))return
this.dw=b
this.aj()},
eg(a){this.fD(a)
a.shA(0,this.aQ)}}
A.Hg.prototype={
scP(a,b){if(this.wR===b)return
this.wR=b
this.oT()},
sWX(a,b){if(J.f(this.wS,b))return
this.wS=b
this.oT()},
gow(){var s,r,q=this.k3,p=0+q.a
q=0+q.b
switch(this.wR.a){case 0:s=this.wS
if(s==null)s=B.az
return s.dJ(new A.z(0,0,p,q))
case 1:s=(p-0)/2
r=(q-0)/2
return new A.ht(0,0,p,q,s,r,s,r,s,r,s,r,s===r)}},
bN(a,b){var s=this
if(s.v!=null){s.i9()
if(!s.O.B(0,b))return!1}return s.i_(a,b)},
aF(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.q$==null){i.ch.saM(0,null)
return}i.i9()
s=i.O.cQ(b)
r=$.av()
q=r.de()
q.f6(s)
p=a.gbz(a)
if(i.aQ!==0&&!0){p.c7(new A.z(s.a,s.b,s.c,s.d).cJ(20),$.aeF())
o=i.bv
n=i.aQ
m=i.dw
p.n2(q,o,n,(m.gn(m)>>>24&255)!==255)}l=i.au===B.h9
if(!l){r=r.bf()
r.saq(0,i.dw)
p.cF(s,r)}r=i.cx
r===$&&A.b()
o=i.k3
n=o.a
o=o.b
m=i.O
m.toString
k=i.ch
j=t.bG.a(k.a)
k.saM(0,a.a0P(r,b,new A.z(0,0,0+n,0+o),m,new A.a_V(i,l),i.au,j))}}
A.a_V.prototype={
$2(a,b){var s,r
if(this.b){s=a.gbz(a)
r=$.av().bf()
r.saq(0,this.a.dw)
s.n1(r)}this.a.fE(a,b)},
$S:8}
A.Hh.prototype={
gow(){var s=$.av().de(),r=this.k3
s.vU(new A.z(0,0,0+r.a,0+r.b))
return s},
bN(a,b){var s=this
if(s.v!=null){s.i9()
if(!s.O.B(0,b))return!1}return s.i_(a,b)},
aF(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(j.q$==null){j.ch.saM(0,null)
return}j.i9()
s=j.k3
r=b.a
q=b.b
p=s.a
s=s.b
o=j.O.cQ(b)
n=a.gbz(a)
if(j.aQ!==0&&!0){n.c7(new A.z(r,q,r+p,q+s).cJ(20),$.aeF())
s=j.bv
r=j.aQ
q=j.dw
n.n2(o,s,r,(q.gn(q)>>>24&255)!==255)}m=j.au===B.h9
if(!m){s=$.av().bf()
s.saq(0,j.dw)
n.dt(o,s)}s=j.cx
s===$&&A.b()
r=j.k3
q=r.a
r=r.b
p=j.O
p.toString
l=j.ch
k=t.n0.a(l.a)
l.saM(0,a.Ic(s,b,new A.z(0,0,0+q,0+r),p,new A.a_W(j,m),j.au,k))}}
A.a_W.prototype={
$2(a,b){var s,r
if(this.b){s=a.gbz(a)
r=$.av().bf()
r.saq(0,this.a.dw)
s.n1(r)}this.a.fE(a,b)},
$S:8}
A.qQ.prototype={
D(){return"DecorationPosition."+this.b}}
A.H3.prototype={
sYn(a){var s,r=this
if(a.k(0,r.O))return
s=r.v
if(s!=null)s.m()
r.v=null
r.O=a
r.aj()},
sbr(a,b){if(b===this.au)return
this.au=b
this.aj()},
swc(a){if(a.k(0,this.bq))return
this.bq=a
this.aj()},
ad(a){var s=this,r=s.v
if(r!=null)r.m()
s.v=null
s.ka(0)
s.aj()},
iD(a){var s=this.O,r=this.k3
r.toString
return s.H7(r,a,this.bq.d)},
aF(a,b){var s,r,q,p=this,o=p.v
if(o==null)o=p.v=p.O.q_(p.gdF())
s=p.bq
r=p.k3
r.toString
q=new A.no(s.a,s.b,s.c,s.d,r,s.f)
if(p.au===B.hh){o.nG(a.gbz(a),b,q)
if(p.O.gxo())a.zz()}p.fE(a,b)
if(p.au===B.EA){o=p.v
o.toString
o.nG(a.gbz(a),b,q)
if(p.O.gxo())a.zz()}}}
A.Hq.prototype={
sI_(a,b){return},
sdU(a){var s=this
if(J.f(s.O,a))return
s.O=a
s.aj()
s.aX()},
sbA(a){var s=this
if(s.au==a)return
s.au=a
s.aj()
s.aX()},
gkC(){return!1},
sbh(a,b){var s,r=this
if(J.f(r.ca,b))return
s=new A.bb(new Float64Array(16))
s.ba(b)
r.ca=s
r.aj()
r.aX()},
sl4(a){return},
guc(){var s,r,q=this,p=q.O,o=p==null?null:p.Y(q.au)
if(o==null)return q.ca
s=new A.bb(new Float64Array(16))
s.cO()
p=q.k3
p.toString
r=o.WI(p)
s.aw(0,r.a,r.b)
p=q.ca
p.toString
s.cn(0,p)
s.aw(0,-r.a,-r.b)
return s},
bN(a,b){return this.cu(a,b)},
cu(a,b){var s=this.bq?this.guc():null
return a.vV(new A.a04(this),b,s)},
aF(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
if(a.q$!=null){s=a.guc()
s.toString
r=A.Ye(s)
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
if(b===0||!isFinite(b)){a.ch.saM(0,null)
return}q=a.cx
q===$&&A.b()
p=A.e3.prototype.gjI.call(a)
o=a.ch
n=o.a
o.saM(0,a0.nM(q,a1,s,p,n instanceof A.k0?n:null))}else{a.fE(a0,a1.W(0,r))
a.ch.saM(0,null)}}},
cW(a,b){var s=this.guc()
s.toString
b.cn(0,s)}}
A.a04.prototype={
$2(a,b){return this.a.om(a,b)},
$S:15}
A.um.prototype={
UB(){if(this.v!=null)return
this.v=this.au},
BZ(a){switch(a.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
swX(a){var s=this,r=s.O
if(r===a)return
s.O=a
if(s.BZ(r)||s.BZ(a))s.a3()
else{s.bE=s.ca=null
s.aj()}},
sdU(a){var s=this
if(s.au.k(0,a))return
s.au=a
s.v=s.bE=s.ca=null
s.aj()},
sbA(a){var s=this
if(s.bq==a)return
s.bq=a
s.v=s.bE=s.ca=null
s.aj()},
bV(a){var s,r=this.q$
if(r!=null){s=r.fv(B.bF)
switch(this.O.a){case 6:return a.bn(new A.aJ(0,a.b,0,a.d).mH(s))
case 1:case 2:case 0:case 4:case 3:case 5:return a.mH(s)}}else return new A.Z(A.E(0,a.a,a.b),A.E(0,a.c,a.d))},
bx(){var s,r,q,p=this,o=p.q$
if(o!=null){o.cg(B.bF,!0)
switch(p.O.a){case 6:o=t.k
s=o.a(A.w.prototype.gX.call(p))
r=p.q$.k3
r.toString
q=new A.aJ(0,s.b,0,s.d).mH(r)
p.k3=o.a(A.w.prototype.gX.call(p)).bn(q)
break
case 1:case 2:case 0:case 4:case 3:case 5:o=t.k.a(A.w.prototype.gX.call(p))
s=p.q$.k3
s.toString
p.k3=o.mH(s)
break}p.bE=p.ca=null}else{o=t.k.a(A.w.prototype.gX.call(p))
p.k3=new A.Z(A.E(0,o.a,o.b),A.E(0,o.c,o.d))}},
vG(){var s,r,q,p,o,n,m,l,k,j=this
if(j.bE!=null)return
if(j.q$==null){j.ca=!1
s=new A.bb(new Float64Array(16))
s.cO()
j.bE=s}else{j.UB()
s=j.q$.k3
s.toString
r=j.O
q=j.k3
q.toString
p=A.aiP(r,s,q)
q=p.b
r=p.a
o=s.a
s=s.b
n=j.v.xi(r,new A.z(0,0,0+o,0+s))
m=j.v
m.toString
l=j.k3
k=m.xi(q,new A.z(0,0,0+l.a,0+l.b))
m=n.a
j.ca=n.c-m<o||n.d-n.b<s
s=A.tn(k.a,k.b,0)
s.hi(0,q.a/r.a,q.b/r.b,1)
s.aw(0,-m,-n.b)
j.bE=s}},
D9(a,b){var s,r,q,p,o=this,n=o.bE
n.toString
s=A.Ye(n)
if(s==null){n=o.cx
n===$&&A.b()
r=o.bE
r.toString
q=A.e3.prototype.gjI.call(o)
p=o.ch.a
return a.nM(n,b,r,q,p instanceof A.k0?p:null)}else o.fE(a,b.W(0,s))
return null},
aF(a,b){var s,r,q,p,o,n=this
if(n.q$!=null){s=n.k3
if(!s.gP(s)){s=n.q$.k3
s=s.gP(s)}else s=!0}else s=!0
if(s)return
n.vG()
s=n.ca
s.toString
if(s&&n.dA!==B.J){s=n.cx
s===$&&A.b()
r=n.k3
q=r.a
r=r.b
p=n.ch
o=p.a
o=o instanceof A.n_?o:null
p.saM(0,a.jL(s,b,new A.z(0,0,0+q,0+r),n.gTN(),n.dA,o))}else n.ch.saM(0,n.D9(a,b))},
cu(a,b){var s=this,r=s.k3
if(!r.gP(r)){r=s.q$
if(r==null)r=null
else{r=r.k3
r=r.gP(r)}r=r===!0}else r=!0
if(r)return!1
s.vG()
return a.vV(new A.a_B(s),b,s.bE)},
jJ(a){var s=this.k3
if(!s.gP(s)){s=a.k3
s=!s.gP(s)}else s=!1
return s},
cW(a,b){var s=this.k3
if(!s.gP(s)){s=a.k3
s=!s.gP(s)}else s=!1
if(!s)b.zC()
else{this.vG()
s=this.bE
s.toString
b.cn(0,s)}}}
A.a_B.prototype={
$2(a,b){return this.a.om(a,b)},
$S:15}
A.H6.prototype={
sa1L(a){var s=this
if(s.v.k(0,a))return
s.v=a
s.aj()
s.aX()},
bN(a,b){return this.cu(a,b)},
cu(a,b){var s,r,q=this
if(q.O){s=q.v
r=q.k3
r=new A.t(s.a*r.a,s.b*r.b)
s=r}else s=null
return a.mr(new A.a_C(q),s,b)},
aF(a,b){var s,r,q=this
if(q.q$!=null){s=q.v
r=q.k3
q.fE(a,new A.t(b.a+s.a*r.a,b.b+s.b*r.b))}},
cW(a,b){var s=this.v,r=this.k3
b.aw(0,s.a*r.a,s.b*r.b)}}
A.a_C.prototype={
$2(a,b){return this.a.om(a,b)},
$S:15}
A.Hi.prototype={
mG(a){return new A.Z(A.E(1/0,a.a,a.b),A.E(1/0,a.c,a.d))},
hG(a,b){var s,r=this,q=null
if(t.Y.b(a)){s=r.cs
return s==null?q:s.$1(a)}if(t._.b(a))return q
if(t.Cs.b(a)){s=r.af
return s==null?q:s.$1(a)}if(t.hV.b(a))return q
if(t.AJ.b(a)){s=r.aQ
return s==null?q:s.$1(a)}if(t.EL.b(a)){s=r.bv
return s==null?q:s.$1(a)}if(t.c.b(a))return q
if(t.zv.b(a))return q
if(t.zs.b(a)){s=r.ah
return s==null?q:s.$1(a)}}}
A.Hb.prototype={
bN(a,b){return this.M7(a,b)&&!0},
hG(a,b){var s=this.af
if(s!=null&&t.hV.b(a))return s.$1(a)},
gFY(a){return this.aQ},
gyU(){return this.bv},
al(a){this.lR(a)
this.bv=!0},
ad(a){this.bv=!1
this.ka(0)},
mG(a){return new A.Z(A.E(1/0,a.a,a.b),A.E(1/0,a.c,a.d))},
$iim:1,
gxU(a){return this.bp},
gxV(a){return this.aW}}
A.Hl.prototype={
gdh(){return!0}}
A.un.prototype={
sHb(a){var s,r=this
if(a===r.v)return
r.v=a
s=r.O
if(s==null||!s)r.aX()},
sxg(a){var s=this,r=s.O
if(a==r)return
if(r==null)r=s.v
s.O=a
if(r!==(a==null?s.v:a))s.aX()},
bN(a,b){return!this.v&&this.i_(a,b)},
eR(a){var s,r=this.q$
if(r!=null){s=this.O
s=!(s==null?this.v:s)}else s=!1
if(s){r.toString
a.$1(r)}}}
A.Hc.prototype={
sr3(a){var s=this
if(a===s.v)return
s.v=a
s.a3()
s.qZ()},
ee(a){if(this.v)return null
return this.At(a)},
giZ(){return this.v},
bV(a){if(this.v)return new A.Z(A.E(0,a.a,a.b),A.E(0,a.c,a.d))
return this.M6(a)},
nH(){this.LY()},
bx(){var s,r=this
if(r.v){s=r.q$
if(s!=null)s.h3(t.k.a(A.w.prototype.gX.call(r)))}else r.tr()},
bN(a,b){return!this.v&&this.i_(a,b)},
jJ(a){return!this.v},
aF(a,b){if(this.v)return
this.fE(a,b)},
eR(a){if(this.v)return
this.tp(a)}}
A.uj.prototype={
sF6(a){if(this.v===a)return
this.v=a
this.aX()},
sxg(a){return},
bN(a,b){return this.v?this.k3.B(0,b):this.i_(a,b)},
eR(a){var s,r,q=this.q$
if(q!=null){s=this.O
r=this.v
s=!r}else s=!1
if(s){q.toString
a.$1(q)}}}
A.iw.prototype={
sa1V(a){if(A.aei(a,this.cs))return
this.cs=a
this.aX()},
siJ(a){var s,r=this
if(J.f(r.bp,a))return
s=r.bp
r.bp=a
if(a!=null!==(s!=null))r.aX()},
sjG(a){var s,r=this
if(J.f(r.af,a))return
s=r.af
r.af=a
if(a!=null!==(s!=null))r.aX()},
sa0s(a){var s,r=this
if(J.f(r.aW,a))return
s=r.aW
r.aW=a
if(a!=null!==(s!=null))r.aX()},
sa0y(a){var s,r=this
if(J.f(r.aQ,a))return
s=r.aQ
r.aQ=a
if(a!=null!==(s!=null))r.aX()},
eg(a){var s,r=this
r.fD(a)
if(r.bp!=null){s=r.cs
s=s==null||s.B(0,B.dA)}else s=!1
if(s)a.siJ(r.bp)
if(r.af!=null){s=r.cs
s=s==null||s.B(0,B.AL)}else s=!1
if(s)a.sjG(r.af)
if(r.aW!=null){s=r.cs
if(s==null||s.B(0,B.dE))a.sr7(r.gU4())
s=r.cs
if(s==null||s.B(0,B.dD))a.sr6(r.gU2())}if(r.aQ!=null){s=r.cs
if(s==null||s.B(0,B.dB))a.sr8(r.gU6())
s=r.cs
if(s==null||s.B(0,B.dC))a.sr5(r.gU0())}},
U3(){var s,r,q=this.aW
if(q!=null){s=this.k3
r=s.a*-0.8
s=s.ie(B.j)
s=A.cd(this.bs(0,null),s)
q.$1(new A.h4(null,new A.t(r,0),r,s))}},
U5(){var s,r,q=this.aW
if(q!=null){s=this.k3
r=s.a*0.8
s=s.ie(B.j)
s=A.cd(this.bs(0,null),s)
q.$1(new A.h4(null,new A.t(r,0),r,s))}},
U7(){var s,r,q=this.aQ
if(q!=null){s=this.k3
r=s.b*-0.8
s=s.ie(B.j)
s=A.cd(this.bs(0,null),s)
q.$1(new A.h4(null,new A.t(0,r),r,s))}},
U1(){var s,r,q=this.aQ
if(q!=null){s=this.k3
r=s.b*0.8
s=s.ie(B.j)
s=A.cd(this.bs(0,null),s)
q.$1(new A.h4(null,new A.t(0,r),r,s))}}}
A.uq.prototype={
sIa(a){var s=this
if(s.v===a)return
s.v=a
s.EA(a)
s.aX()},
sXG(a){if(this.O===a)return
this.O=a
this.aX()},
sYZ(a){if(this.au===a)return
this.au=a
this.aX()},
sYX(a){return},
EA(a){var s=this,r=a.fy
r=a.fx
r=r==null?null:new A.ck(r,B.ag)
s.ca=r
s.bE=null
s.dA=null
s.fj=null
s.hF=null},
sbA(a){if(this.wV==a)return
this.wV=a
this.aX()},
eR(a){this.tp(a)},
eg(a){var s,r,q=this
q.fD(a)
a.a=q.O
a.b=q.au
s=q.v.a
if(s!=null){a.b5(B.AW,!0)
a.b5(B.AO,s)}s=q.v.e
if(s!=null)a.b5(B.AT,s)
s=q.v.f
if(s!=null)a.b5(B.AX,s)
s=q.v.w
if(s!=null)a.b5(B.AV,s)
s=q.v.as
if(s!=null)a.b5(B.AR,s)
s=q.v.at
if(s!=null)a.b5(B.AS,s)
s=q.v.db
if(s!=null)a.b5(B.AP,s)
s=q.ca
if(s!=null){a.p4=s
a.d=!0}s=q.bE
if(s!=null){a.R8=s
a.d=!0}s=q.dA
if(s!=null){a.RG=s
a.d=!0}s=q.fj
if(s!=null){a.rx=s
a.d=!0}s=q.hF
if(s!=null){a.ry=s
a.d=!0}s=q.v
r=s.p2
if(r!=null){a.to=r
a.d=!0}s.p3!=null
s=q.v.cx
if(s!=null)a.b5(B.AQ,s)
s=q.v.cy
if(s!=null)a.b5(B.AU,s)
s=q.wV
if(s!=null){a.y1=s
a.d=!0}s=q.v
r=s.R8
if(r!=null){a.id=r
a.d=!0}s=s.RG
if(s!=null)a.Fd(s)
if(q.v.rx!=null)a.siJ(q.gU8())
if(q.v.ry!=null)a.sjG(q.gTZ())
if(q.v.q!=null)a.sr4(q.gTX())},
U9(){var s=this.v.rx
if(s!=null)s.$0()},
U_(){var s=this.v.ry
if(s!=null)s.$0()},
TY(){var s=this.v.q
if(s!=null)s.$0()}}
A.GX.prototype={
sWW(a){return},
eg(a){this.fD(a)
a.c=!0}}
A.Ha.prototype={
eg(a){this.fD(a)
a.d=a.p2=a.a=!0}}
A.H5.prototype={
sYY(a){if(a===this.v)return
this.v=a
this.aX()},
eR(a){if(this.v)return
this.tp(a)}}
A.H8.prototype={
sxh(a,b){if(b===this.v)return
this.v=b
this.aX()},
eg(a){this.fD(a)
a.k1=this.v
a.d=!0}}
A.ul.prototype={
sn(a,b){if(this.v.k(0,b))return
this.v=b
this.aj()},
sKh(a){return},
aF(a,b){var s,r=this,q=r.v,p=r.k3
p.toString
s=new A.q1(q,p,b,A.y(t.S,t.M),A.am(),r.$ti.h("q1<1>"))
s.hr()
a.Id(s,A.e3.prototype.gjI.call(r),b)},
gkC(){return!0}}
A.N1.prototype={
ee(a){var s=this.q$
if(s!=null)return s.iS(a)
return this.At(a)}}
A.N2.prototype={
al(a){var s=this
s.lR(a)
s.kX$.S(0,s.gpp())
s.vF()},
ad(a){this.kX$.F(0,this.gpp())
this.ka(0)},
aF(a,b){if(this.kW$===0)return
this.fE(a,b)}}
A.xb.prototype={
al(a){var s
this.e9(a)
s=this.q$
if(s!=null)s.al(a)},
ad(a){var s
this.dq(0)
s=this.q$
if(s!=null)s.ad(0)}}
A.xc.prototype={
ee(a){var s=this.q$
if(s!=null)return s.iS(a)
return this.Aj(a)}}
A.iz.prototype={
D(){return"SelectionResult."+this.b}}
A.cU.prototype={$ia1:1}
A.HU.prototype={
snO(a){var s=this,r=s.kV$
if(a==r)return
if(a==null)s.F(0,s.gDT())
else if(r==null)s.S(0,s.gDT())
s.DS()
s.kV$=a
s.DU()},
DU(){var s=this
if(s.kV$==null){s.jr$=!1
return}if(s.jr$&&!s.gn(s).d){s.kV$.A(0,s)
s.jr$=!1}else if(!s.jr$&&s.gn(s).d){s.kV$.E(0,s)
s.jr$=!0}},
DS(){var s=this
if(s.jr$){s.kV$.A(0,s)
s.jr$=!1}}}
A.oi.prototype={
D(){return"SelectionEventType."+this.b}}
A.m0.prototype={
D(){return"TextGranularity."+this.b}}
A.a1p.prototype={}
A.qu.prototype={}
A.lM.prototype={}
A.lN.prototype={
D(){return"SelectionExtendDirection."+this.b}}
A.oj.prototype={
D(){return"SelectionStatus."+this.b}}
A.jR.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.jR&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&b.c===s.c&&b.d===s.d},
gu(a){var s=this
return A.T(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.lO.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.lO&&b.a.k(0,s.a)&&b.b===s.b&&b.c===s.c},
gu(a){return A.T(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.vB.prototype={
D(){return"TextSelectionHandleType."+this.b}}
A.Hm.prototype={
ee(a){var s,r,q=this.q$
if(q!=null){s=q.iS(a)
r=q.e
r.toString
t.Ch.a(r)
if(s!=null)s+=r.a.b}else s=this.Aj(a)
return s},
aF(a,b){var s,r=this.q$
if(r!=null){s=r.e
s.toString
a.eo(r,t.Ch.a(s).a.W(0,b))}},
cu(a,b){var s,r=this.q$
if(r!=null){s=r.e
s.toString
t.Ch.a(s)
return a.mr(new A.a_X(b,s,r),s.a,b)}return!1}}
A.a_X.prototype={
$2(a,b){return this.c.bN(a,b)},
$S:15}
A.He.prototype={
pf(){var s=this
if(s.v!=null)return
s.v=s.O.Y(s.au)},
sd2(a,b){var s=this
if(s.O.k(0,b))return
s.O=b
s.v=null
s.a3()},
sbA(a){var s=this
if(s.au==a)return
s.au=a
s.v=null
s.a3()},
bV(a){var s,r,q,p=this
p.pf()
if(p.q$==null){s=p.v
return a.bn(new A.Z(s.a+s.c,s.b+s.d))}s=p.v
s.toString
r=a.G0(s)
q=p.q$.fv(r)
s=p.v
return a.bn(new A.Z(s.a+q.a+s.c,s.b+q.b+s.d))},
bx(){var s,r,q,p,o,n,m=this,l=t.k.a(A.w.prototype.gX.call(m))
m.pf()
if(m.q$==null){s=m.v
m.k3=l.bn(new A.Z(s.a+s.c,s.b+s.d))
return}s=m.v
s.toString
r=l.G0(s)
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
m.k3=l.bn(new A.Z(o+s.a+p.c,n+s.b+p.d))}}
A.GU.prototype={
pf(){var s=this
if(s.v!=null)return
s.v=s.O.Y(s.au)},
sdU(a){var s=this
if(s.O.k(0,a))return
s.O=a
s.v=null
s.a3()},
sbA(a){var s=this
if(s.au==a)return
s.au=a
s.v=null
s.a3()},
vW(){var s,r,q,p,o=this
o.pf()
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
r.a=q.kB(t.uu.a(p.a8(0,s)))}}
A.Hj.prototype={
sa1X(a){if(this.af==a)return
this.af=a
this.a3()},
sa_6(a){if(this.aW==a)return
this.aW=a
this.a3()},
bV(a){var s,r,q=this,p=q.af!=null||a.b===1/0,o=q.aW!=null||a.d===1/0,n=q.q$
if(n!=null){s=n.fv(new A.aJ(0,a.b,0,a.d))
if(p){n=q.af
if(n==null)n=1
n=s.a*n}else n=1/0
if(o){r=q.aW
if(r==null)r=1
r=s.b*r}else r=1/0
return a.bn(new A.Z(n,r))}n=p?0:1/0
return a.bn(new A.Z(n,o?0:1/0))},
bx(){var s,r,q=this,p=t.k.a(A.w.prototype.gX.call(q)),o=q.af!=null||p.b===1/0,n=q.aW!=null||p.d===1/0,m=q.q$
if(m!=null){m.cg(new A.aJ(0,p.b,0,p.d),!0)
if(o){m=q.q$.k3.a
s=q.af
m*=s==null?1:s}else m=1/0
if(n){s=q.q$.k3.b
r=q.aW
s*=r==null?1:r}else s=1/0
q.k3=p.bn(new A.Z(m,s))
q.vW()}else{m=o?0:1/0
q.k3=p.bn(new A.Z(m,n?0:1/0))}}}
A.a1X.prototype={
rP(a){return new A.Z(A.E(1/0,a.a,a.b),A.E(1/0,a.c,a.d))}}
A.H2.prototype={
swp(a){var s=this,r=s.v
if(r===a)return
if(A.A(a)!==A.A(r)||a.lE(r))s.a3()
s.v=a
s.b!=null},
al(a){this.N5(a)},
ad(a){this.N6(0)},
bV(a){return a.bn(this.v.rP(a))},
bx(){var s,r,q,p,o,n,m=this,l=t.k,k=l.a(A.w.prototype.gX.call(m))
m.k3=k.bn(m.v.rP(k))
if(m.q$!=null){s=m.v.z2(l.a(A.w.prototype.gX.call(m)))
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
l.toString}p.a=o.zc(n,l)}}}
A.xd.prototype={
al(a){var s
this.e9(a)
s=this.q$
if(s!=null)s.al(a)},
ad(a){var s
this.dq(0)
s=this.q$
if(s!=null)s.ad(0)}}
A.rx.prototype={
D(){return"GrowthDirection."+this.b}}
A.jU.prototype={
gHA(){return!1},
WM(a,b){var s=this.w
switch(A.b9(this.a).a){case 0:return new A.aJ(b,a,s,s)
case 1:return new A.aJ(s,s,b,a)}},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.jU))return!1
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
return"SliverConstraints("+B.b.bj(r,", ")+")"}}
A.a3G.prototype={
bP(){return"SliverGeometry"}}
A.op.prototype={}
A.Ia.prototype={
i(a){return A.A(this.a).i(0)+"@(mainAxis: "+A.h(this.c)+", crossAxis: "+A.h(this.d)+")"}}
A.va.prototype={
i(a){var s=this.a
return"layoutOffset="+(s==null?"None":B.d.M(s,1))}}
A.jV.prototype={
i(a){return"paintOffset="+A.h(this.a)}}
A.iC.prototype={}
A.c9.prototype={
gX(){return t.p.a(A.w.prototype.gX.call(this))},
giX(){return this.gh9()},
gh9(){var s=this,r=t.p
switch(A.b9(r.a(A.w.prototype.gX.call(s)).a).a){case 0:return new A.z(0,0,0+s.id.c,0+r.a(A.w.prototype.gX.call(s)).w)
case 1:return new A.z(0,0,0+r.a(A.w.prototype.gX.call(s)).w,0+s.id.c)}},
nH(){},
H6(a,b,c){var s=this
if(c>=0&&c<s.id.r&&b>=0&&b<t.p.a(A.w.prototype.gX.call(s)).w)if(s.xe(a,b,c)||!1){a.E(0,new A.Ia(c,b,s))
return!0}return!1},
xe(a,b,c){return!1},
fQ(a,b,c){var s=a.d,r=a.r,q=s+r
return A.E(A.E(c,s,q)-A.E(b,s,q),0,r)},
mA(a,b,c){var s=a.d,r=s+a.z,q=a.Q,p=s+q
return A.E(A.E(c,r,p)-A.E(b,r,p),0,q)},
wa(a){return 0},
cW(a,b){},
hG(a,b){}}
A.a_Y.prototype={
C9(a){var s
switch(a.a.a){case 0:case 3:s=!1
break
case 2:case 1:s=!0
break
default:s=null}switch(a.b.a){case 0:break
case 1:s=!s
break}return s},
a_e(a,b,c,d){var s,r,q,p,o=this,n={},m=t.p,l=o.C9(m.a(A.w.prototype.gX.call(o))),k=b.e
k.toString
k=t.D.a(k).a
k.toString
s=k-m.a(A.w.prototype.gX.call(o)).d
r=d-s
q=c-0
p=n.a=null
switch(A.b9(m.a(A.w.prototype.gX.call(o)).a).a){case 0:if(!l){m=b.k3.a
r=m-r
s=o.id.c-m-s}p=new A.t(s,0)
n.a=new A.t(r,q)
break
case 1:if(!l){m=b.k3.b
r=m-r
s=o.id.c-m-s}p=new A.t(0,s)
n.a=new A.t(q,r)
break}return a.WC(new A.a_Z(n,b),p)}}
A.a_Z.prototype={
$1(a){return this.b.bN(a,this.a.a)},
$S:114}
A.NX.prototype={}
A.O_.prototype={
ad(a){this.tl(0)}}
A.Hn.prototype={
so1(a){if(this.qo===a)return
this.qo=a
this.a3()}}
A.Ho.prototype={
Ju(a,b){var s,r
if(b>0){s=a/b
r=B.d.b1(s)
if(Math.abs(s*b-r*b)<1e-10)return r
return B.d.ct(s)}return 0},
z7(a,b){var s,r
if(b>0){s=a/b-1
r=B.d.b1(s)
if(Math.abs(s*b-r*b)<1e-10)return Math.max(0,r)
return Math.max(0,B.d.cX(s))}return 0},
OQ(a){var s,r=this.ar$,q=A.n(this).h("ap.1"),p=t.D,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s<a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).ah$}return o},
OR(a){var s,r=this.cG$,q=A.n(this).h("ap.1"),p=t.D,o=0
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
s=a6.a(A.w.prototype.gX.call(a4)).y*a4.qo
a6=a7.d
r=a6+a7.z
q=r+a7.Q
p=a7.WM(s,s)
o=a4.Ju(r,s)
n=isFinite(q)?a4.z7(q,s):a5
if(a4.ar$!=null){m=a4.OQ(o)
a4.FB(m,n!=null?a4.OR(n):0)}else a4.FB(0,0)
if(a4.ar$==null)if(!a4.Wr(o,s*o)){l=o<=0?0:a8.gpS()*s
a4.id=A.v9(a5,!1,a5,a5,l,0,0,l,a5)
a8.G4()
return}k=a4.ar$
k.toString
k=k.e
k.toString
j=t.D
k=j.a(k).b
k.toString
i=k-1
h=a5
for(;i>=o;--i){g=a4.a_r(p)
if(g==null){a4.id=A.v9(a5,!1,a5,a5,0,0,0,0,i*s)
return}k=g.e
k.toString
j.a(k).a=s*i
if(h==null)h=g}if(h==null){a4.ar$.h3(p)
h=a4.ar$
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
g=k.a(d).ah$
if(g!=null){d=g.e
d.toString
d=j.a(d).b
d.toString
d=d!==i}else d=!0
if(d){g=a4.a_q(p,h)
if(g==null){e=i*s
break}}else g.h3(p)
d=g.e
d.toString
j.a(d)
c=d.b
c.toString
d.a=s*c;++i
h=g}k=a4.cG$
k.toString
k=k.e
k.toString
k=j.a(k).b
k.toString
b=s*o
a=s*(k+1)
e=Math.min(e,a8.YU(a7,o,k,b,a))
a0=a4.fQ(a7,b,a)
a1=a4.mA(a7,b,a)
a2=a6+a7.r
a3=isFinite(a2)?a4.z7(a2,s):a5
a4.id=A.v9(a1,a3!=null&&k>=a3||a6>0,a5,a5,e,a0,0,e,a5)
if(e===a)a8.R8=!0
a8.G4()}}
A.hd.prototype={$ic5:1}
A.a02.prototype={
e4(a){}}
A.fH.prototype={
i(a){var s=this.b,r=this.nb$?"keepAlive; ":""
return"index="+A.h(s)+"; "+r+this.MG(0)}}
A.lF.prototype={
e4(a){if(!(a.e instanceof A.fH))a.e=new A.fH(!1,null,null)},
hu(a){var s
this.Ak(a)
s=a.e
s.toString
t.D.a(s)
if(!s.c){t.x.a(a)
s.b=this.bg.p4}},
xk(a,b,c){this.te(0,b,c)},
r2(a,b){var s,r,q,p=this,o=a.e
o.toString
s=t.D
s.a(o)
if(!o.c){p.KJ(a,b)
o=a.e
o.toString
s.a(o).b=p.bg.p4
p.a3()}else{r=p.bb
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
if(!s.c){this.KL(0,b)
return}this.bb.A(0,s.b)
this.ik(b)},
u3(a,b){this.Hr(new A.a0_(this,a,b),t.p)},
BE(a){var s,r=this,q=a.e
q.toString
t.D.a(q)
if(q.nb$){r.A(0,a)
s=q.b
s.toString
r.bb.l(0,s,a)
a.e=q
r.Ak(a)
q.c=!0}else r.bg.Io(a)},
al(a){var s,r,q
this.N7(a)
for(s=this.bb,s=s.gaY(s),s=new A.dH(J.ar(s.a),s.b),r=A.n(s).z[1];s.t();){q=s.a;(q==null?r.a(q):q).al(a)}},
ad(a){var s,r,q
this.N8(0)
for(s=this.bb,s=s.gaY(s),s=new A.dH(J.ar(s.a),s.b),r=A.n(s).z[1];s.t();){q=s.a;(q==null?r.a(q):q).ad(0)}},
iL(){this.KK()
var s=this.bb
s.gaY(s).Z(0,this.gIl())},
aP(a){var s
this.zV(a)
s=this.bb
s.gaY(s).Z(0,a)},
eR(a){this.zV(a)},
Wr(a,b){var s
this.u3(a,null)
s=this.ar$
if(s!=null){s=s.e
s.toString
t.D.a(s).a=b
return!0}this.bg.R8=!0
return!1},
a_r(a){var s,r,q,p=this,o=p.ar$
o.toString
o=o.e
o.toString
s=t.D
o=s.a(o).b
o.toString
r=o-1
p.u3(r,null)
o=p.ar$
o.toString
q=o.e
q.toString
q=s.a(q).b
q.toString
if(q===r){o.cg(a,!1)
return p.ar$}p.bg.R8=!0
return null},
a_q(a,b){var s,r,q,p=b.e
p.toString
s=t.D
p=s.a(p).b
p.toString
r=p+1
this.u3(r,b)
p=b.e
p.toString
q=A.n(this).h("ap.1").a(p).ah$
if(q!=null){p=q.e
p.toString
p=s.a(p).b
p.toString
p=p===r}else p=!1
if(p){q.cg(a,!1)
return q}this.bg.R8=!0
return null},
FB(a,b){var s={}
s.a=a
s.b=b
this.Hr(new A.a01(s,this),t.p)},
I0(a){switch(A.b9(t.p.a(A.w.prototype.gX.call(this)).a).a){case 0:return a.k3.a
case 1:return a.k3.b}},
xe(a,b,c){var s,r,q=this.cG$,p=A.af6(a)
for(s=A.n(this).h("ap.1");q!=null;){if(this.a_e(p,q,b,c))return!0
r=q.e
r.toString
q=s.a(r).bM$}return!1},
wa(a){var s=a.e
s.toString
return t.D.a(s).a},
jJ(a){var s=t.ub.a(a.e)
return(s==null?null:s.b)!=null&&!this.bb.V(0,s.b)},
cW(a,b){var s,r,q,p,o=this
if(!o.jJ(a))b.zC()
else{s=t.p
r=o.C9(s.a(A.w.prototype.gX.call(o)))
q=a.e
q.toString
q=t.D.a(q).a
q.toString
p=q-s.a(A.w.prototype.gX.call(o)).d
switch(A.b9(s.a(A.w.prototype.gX.call(o)).a).a){case 0:b.aw(0,!r?o.id.c-a.k3.a-p:p,0)
break
case 1:b.aw(0,0,!r?o.id.c-a.k3.b-p:p)
break}}},
aF(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null
if(d.ar$==null)return
s=t.p
switch(A.iZ(s.a(A.w.prototype.gX.call(d)).a,s.a(A.w.prototype.gX.call(d)).b)){case B.x:r=b.W(0,new A.t(0,d.id.c))
q=B.S2
p=B.fc
o=!0
break
case B.ar:r=b
q=B.fc
p=B.ie
o=!1
break
case B.v:r=b
q=B.ie
p=B.fc
o=!1
break
case B.ab:r=b.W(0,new A.t(d.id.c,0))
q=B.S5
p=B.ie
o=!0
break
default:o=c
r=o
p=r
q=p}n=d.ar$
for(m=A.n(d).h("ap.1"),l=t.D;n!=null;){k=n.e
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
if(o){e=d.I0(n)
f=new A.t(k+i*e,h+g*e)}if(j<s.a(A.w.prototype.gX.call(d)).r&&j+d.I0(n)>0)a.eo(n,f)
k=n.e
k.toString
n=m.a(k).ah$}}}
A.a0_.prototype={
$1(a){var s=this.a,r=s.bb,q=this.b,p=this.c
if(r.V(0,q)){r=r.A(0,q)
r.toString
q=r.e
q.toString
t.D.a(q)
s.ik(r)
r.e=q
s.te(0,r,p)
q.c=!1}else s.bg.Y6(q,p)},
$S:82}
A.a01.prototype={
$1(a){var s,r,q
for(s=this.a,r=this.b;s.a>0;){q=r.ar$
q.toString
r.BE(q);--s.a}for(;s.b>0;){q=r.cG$
q.toString
r.BE(q);--s.b}s=r.bb
s=s.gaY(s)
q=A.n(s).h("aF<p.E>")
B.b.Z(A.ax(new A.aF(s,new A.a00(),q),!0,q.h("p.E")),r.bg.ga19())},
$S:82}
A.a00.prototype={
$1(a){var s=a.e
s.toString
return!t.D.a(s).nb$},
$S:215}
A.xf.prototype={
al(a){var s,r,q
this.e9(a)
s=this.ar$
for(r=t.D;s!=null;){s.al(a)
q=s.e
q.toString
s=r.a(q).ah$}},
ad(a){var s,r,q
this.dq(0)
s=this.ar$
for(r=t.D;s!=null;){s.ad(0)
q=s.e
q.toString
s=r.a(q).ah$}}}
A.Nf.prototype={}
A.Ng.prototype={}
A.NY.prototype={
ad(a){this.tl(0)}}
A.NZ.prototype={}
A.ur.prototype={
gw4(){var s=this,r=t.p
switch(A.iZ(r.a(A.w.prototype.gX.call(s)).a,r.a(A.w.prototype.gX.call(s)).b)){case B.x:return s.bD.d
case B.ar:return s.bD.a
case B.v:return s.bD.b
case B.ab:return s.bD.c}},
gWE(){var s=this,r=t.p
switch(A.iZ(r.a(A.w.prototype.gX.call(s)).a,r.a(A.w.prototype.gX.call(s)).b)){case B.x:return s.bD.b
case B.ar:return s.bD.c
case B.v:return s.bD.d
case B.ab:return s.bD.a}},
gYf(){switch(A.b9(t.p.a(A.w.prototype.gX.call(this)).a).a){case 0:var s=this.bD
return s.gb6(s)+s.gb8(s)
case 1:return this.bD.gcb()}},
e4(a){if(!(a.e instanceof A.jV))a.e=new A.jV(B.j)},
bx(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=null,a2=t.p,a3=a2.a(A.w.prototype.gX.call(a0)),a4=a0.gw4()
a0.gWE()
s=a0.bD
s.toString
a2=s.WH(A.b9(a2.a(A.w.prototype.gX.call(a0)).a))
r=a0.gYf()
if(a0.q$==null){q=a0.fQ(a3,0,a2)
a0.id=A.v9(a0.mA(a3,0,a2),!1,a1,a1,a2,Math.min(q,a3.r),0,a2,a1)
return}p=a0.fQ(a3,0,a4)
o=a3.f
if(o>0)o=Math.max(0,o-p)
s=a0.q$
s.toString
n=Math.max(0,a3.d-a4)
m=Math.min(0,a3.z+a4)
l=a3.r
k=a0.fQ(a3,0,a4)
j=a3.Q
i=a0.mA(a3,0,a4)
h=Math.max(0,a3.w-r)
g=a3.a
f=a3.b
s.cg(new A.jU(g,f,a3.c,n,a4+a3.e,o,l-k,h,a3.x,a3.y,m,j-i),!0)
e=a0.q$.id
s=e.y
if(s!=null){a0.id=A.v9(a1,!1,a1,a1,0,0,0,0,s)
return}s=e.a
n=a4+s
m=a2+s
d=a0.fQ(a3,n,m)
c=p+d
b=a0.mA(a3,0,a4)
a=a0.mA(a3,n,m)
n=e.c
k=e.d
q=Math.min(p+Math.max(n,k+d),l)
l=e.b
k=Math.min(c+k,q)
j=Math.min(a+b+e.z,j)
i=e.e
n=Math.max(c+n,p+e.r)
a0.id=A.v9(j,e.x,n,k,a2+i,q,l,m,a1)
m=a0.q$.e
m.toString
t.v.a(m)
switch(A.iZ(g,f)){case B.x:a2=a0.bD
n=a2.a
s=a2.d+s
m.a=new A.t(n,a0.fQ(a3,s,s+a2.b))
break
case B.ar:m.a=new A.t(a0.fQ(a3,0,a0.bD.a),a0.bD.b)
break
case B.v:a2=a0.bD
m.a=new A.t(a2.a,a0.fQ(a3,0,a2.b))
break
case B.ab:a2=a0.bD
s=a2.c+s
m.a=new A.t(a0.fQ(a3,s,s+a2.a),a0.bD.b)
break}},
xe(a,b,c){var s,r,q,p,o=this,n=o.q$
if(n!=null&&n.id.r>0){n=n.e
n.toString
t.v.a(n)
s=o.fQ(t.p.a(A.w.prototype.gX.call(o)),0,o.gw4())
r=o.q$
r.toString
r=o.Xg(r)
n=n.a
q=o.q$.ga_c()
p=n!=null
if(p)a.c.push(new A.po(new A.t(-n.a,-n.b)))
q.$3$crossAxisPosition$mainAxisPosition(a,b-r,c-s)
if(p)a.rj()}return!1},
Xg(a){var s=this,r=t.p
switch(A.iZ(r.a(A.w.prototype.gX.call(s)).a,r.a(A.w.prototype.gX.call(s)).b)){case B.x:case B.v:return s.bD.a
case B.ab:case B.ar:return s.bD.b}},
wa(a){return this.gw4()},
cW(a,b){var s=a.e
s.toString
s=t.v.a(s).a
b.aw(0,s.a,s.b)},
aF(a,b){var s,r=this.q$
if(r!=null&&r.id.w){s=r.e
s.toString
a.eo(r,b.W(0,t.v.a(s).a))}}}
A.Nd.prototype={
al(a){var s
this.e9(a)
s=this.q$
if(s!=null)s.al(a)},
ad(a){var s
this.dq(0)
s=this.q$
if(s!=null)s.ad(0)}}
A.a_x.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return b instanceof A.a_x&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gu(a){var s=this
return A.T(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this
return"RelativeRect.fromLTRB("+B.d.M(s.a,1)+", "+B.d.M(s.b,1)+", "+B.d.M(s.c,1)+", "+B.d.M(s.d,1)+")"}}
A.dw.prototype={
gxq(){var s=this
return s.e!=null||s.f!=null||s.r!=null||s.w!=null||s.x!=null||s.y!=null},
i(a){var s=this,r=A.a([],t.s),q=s.e
if(q!=null)r.push("top="+A.fR(q))
q=s.f
if(q!=null)r.push("right="+A.fR(q))
q=s.r
if(q!=null)r.push("bottom="+A.fR(q))
q=s.w
if(q!=null)r.push("left="+A.fR(q))
q=s.x
if(q!=null)r.push("width="+A.fR(q))
q=s.y
if(q!=null)r.push("height="+A.fR(q))
if(r.length===0)r.push("not positioned")
r.push(s.oi(0))
return B.b.bj(r,"; ")}}
A.vh.prototype={
D(){return"StackFit."+this.b}}
A.us.prototype={
e4(a){if(!(a.e instanceof A.dw))a.e=new A.dw(null,null,B.j)},
Vo(){var s=this
if(s.q!=null)return
s.q=s.H.Y(s.ao)},
sdU(a){var s=this
if(s.H.k(0,a))return
s.H=a
s.q=null
s.a3()},
sbA(a){var s=this
if(s.ao==a)return
s.ao=a
s.q=null
s.a3()},
ee(a){return this.G_(a)},
bV(a){return this.E9(a,A.abj())},
E9(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.Vo()
if(e.d_$===0){s=a.a
r=a.b
q=A.E(1/0,s,r)
p=a.c
o=a.d
n=A.E(1/0,p,o)
return isFinite(q)&&isFinite(n)?new A.Z(A.E(1/0,s,r),A.E(1/0,p,o)):new A.Z(A.E(0,s,r),A.E(0,p,o))}m=a.a
l=a.c
switch(e.ae.a){case 0:k=new A.aJ(0,a.b,0,a.d)
break
case 1:k=A.qh(new A.Z(A.E(1/0,m,a.b),A.E(1/0,l,a.d)))
break
case 2:k=a
break
default:k=null}j=e.ar$
for(s=t.B,i=l,h=m,g=!1;j!=null;){r=j.e
r.toString
s.a(r)
if(!r.gxq()){f=b.$2(j,k)
h=Math.max(h,f.a)
i=Math.max(i,f.b)
g=!0}j=r.ah$}return g?new A.Z(h,i):new A.Z(A.E(1/0,m,a.b),A.E(1/0,l,a.d))},
bx(){var s,r,q,p,o,n,m,l=this,k=t.k.a(A.w.prototype.gX.call(l))
l.K=!1
l.k3=l.E9(k,A.abk())
s=l.ar$
for(r=t.B,q=t.uu;s!=null;){p=s.e
p.toString
r.a(p)
if(!p.gxq()){o=l.q
o.toString
n=l.k3
n.toString
m=s.k3
m.toString
p.a=o.kB(q.a(n.a8(0,m)))}else{o=l.k3
o.toString
n=l.q
n.toString
l.K=A.agI(s,p,o,n)||l.K}s=p.ah$}},
cu(a,b){return this.wm(a,b)},
re(a,b){this.mN(a,b)},
aF(a,b){var s,r=this,q=r.aT,p=q!==B.J&&r.K,o=r.bw
if(p){p=r.cx
p===$&&A.b()
s=r.k3
o.saM(0,a.jL(p,b,new A.z(0,0,0+s.a,0+s.b),r.gyb(),q,o.a))}else{o.saM(0,null)
r.mN(a,b)}},
m(){this.bw.saM(0,null)
this.hq()},
ih(a){var s
switch(this.aT.a){case 0:return null
case 1:case 2:case 3:if(this.K){s=this.k3
s=new A.z(0,0,0+s.a,0+s.b)}else s=null
return s}}}
A.Nh.prototype={
al(a){var s,r,q
this.e9(a)
s=this.ar$
for(r=t.B;s!=null;){s.al(a)
q=s.e
q.toString
s=r.a(q).ah$}},
ad(a){var s,r,q
this.dq(0)
s=this.ar$
for(r=t.B;s!=null;){s.ad(0)
q=s.e
q.toString
s=r.a(q).ah$}}}
A.Ni.prototype={}
A.J5.prototype={
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return b instanceof A.J5&&b.a.k(0,this.a)&&b.b===this.b},
gu(a){return A.T(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return this.a.i(0)+" at "+A.fR(this.b)+"x"}}
A.ut.prototype={
swc(a){var s,r,q,p,o=this
if(o.k1.k(0,a))return
s=o.k1
o.k1=a
r=s.b
r=A.tm(r,r,1)
q=o.k1.b
if(!r.k(0,A.tm(q,q,1))){r=o.EN()
q=o.ch
p=q.a
p.toString
J.alz(p)
q.saM(0,r)
o.aj()}o.a3()},
EN(){var s,r=this.k1.b
r=A.tm(r,r,1)
this.k4=r
s=A.ahm(r)
s.al(this)
return s},
nH(){},
bx(){var s,r=this.k1.a
this.id=r
s=this.q$
if(s!=null)s.h3(A.qh(r))},
bN(a,b){var s=this.q$
if(s!=null)s.bN(A.af6(a),b)
a.E(0,new A.h8(this,t.Cq))
return!0},
a_h(a){var s,r=A.a([],t.f1),q=new A.bb(new Float64Array(16))
q.cO()
s=new A.fW(r,A.a([q],t.hZ),A.a([],t.pw))
this.bN(s,a)
return s},
gdh(){return!0},
aF(a,b){var s=this.q$
if(s!=null)a.eo(s,b)},
cW(a,b){var s=this.k4
s.toString
b.cn(0,s)
this.M_(a,b)},
XA(){var s,r,q
try{q=$.av()
s=q.Yc()
r=this.ch.a.X0(s)
this.W7()
q.a1f(r)
r.m()}finally{}},
W7(){var s,r,q,p,o,n,m,l,k,j=null,i=this.gh9(),h=i.gaS(),g=this.k2
g.gjO()
s=i.gaS()
g.gjO()
g=this.ch
r=t.g9
q=g.a.GC(0,new A.t(h.a,0),r)
switch(A.kl().a){case 0:p=g.a.GC(0,new A.t(s.a,i.d-1-0),r)
break
case 1:case 2:case 3:case 4:case 5:p=j
break
default:p=j}h=q==null
if(h&&p==null)return
if(!h&&p!=null){h=q.f
g=q.r
s=q.e
r=q.w
A.ahb(new A.hB(p.a,p.b,p.c,p.d,s,h,g,r))
return}o=A.kl()===B.aw
n=h?p:q
h=n.f
g=n.r
s=n.e
r=n.w
m=o?n.a:j
l=o?n.b:j
k=o?n.c:j
A.ahb(new A.hB(m,l,k,o?n.d:j,s,h,g,r))},
gh9(){var s=this.id.a6(0,this.k1.b)
return new A.z(0,0,0+s.a,0+s.b)},
giX(){var s,r=this.k4
r.toString
s=this.id
return A.fx(r,new A.z(0,0,0+s.a,0+s.b))}}
A.Nk.prototype={
al(a){var s
this.e9(a)
s=this.q$
if(s!=null)s.al(a)},
ad(a){var s
this.dq(0)
s=this.q$
if(s!=null)s.ad(0)}}
A.zo.prototype={
D(){return"CacheExtentStyle."+this.b}}
A.o8.prototype={
i(a){return"RevealedOffset(offset: "+A.h(this.a)+", rect: "+this.b.i(0)+")"}}
A.o5.prototype={
eg(a){this.fD(a)
a.Fd(B.AY)},
eR(a){var s=this.gFx()
new A.aF(s,new A.a06(),A.aI(s).h("aF<1>")).Z(0,a)},
sf8(a){if(a===this.K)return
this.K=a
this.a3()},
sYe(a){if(a===this.q)return
this.q=a
this.a3()},
shN(a,b){var s=this,r=s.H
if(b===r)return
if(s.b!=null)r.F(0,s.gqY())
s.H=b
if(s.b!=null)b.S(0,s.gqY())
s.a3()},
sX3(a){if(a===this.ao)return
this.ao=a
this.a3()},
sX4(a){if(a===this.aT)return
this.aT=a
this.a3()},
al(a){this.N9(a)
this.H.S(0,this.gqY())},
ad(a){this.H.F(0,this.gqY())
this.Na(0)},
gdh(){return!0},
HG(a,b,c,d,e,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.atn(h.H.k4,e),f=a0+a2
for(s=e.a,r=t.v,q=a0,p=0;c!=null;){o=a5<=0?0:a5
n=Math.max(b,-o)
m=b-n
c.cg(new A.jU(h.K,e,g,o,p,f-q,Math.max(0,a4-q+a0),d,h.q,a1,n,Math.max(0,a3+m)),!0)
l=c.id
k=l.y
if(k!=null)return k
j=q+l.b
k=l.w||a5>0
i=c.e
if(k){i.toString
r.a(i).a=h.FD(c,j,e)}else{i.toString
r.a(i).a=h.FD(c,-a5+a0,e)}f=Math.max(j+l.c,f)
k=l.a
a5-=k
p+=k
q+=l.d
i=l.z
if(i!==0){a3-=i-m
b=Math.min(n+i,0)}switch(s){case 0:i=h.im
i===$&&A.b()
h.im=i+k
break
case 1:i=h.il
i===$&&A.b()
h.il=i-k
break}if(l.x)h.fg=!0
c=a.$1(c)}return 0},
ih(a){var s,r,q,p,o,n
switch(this.bw.a){case 0:return null
case 1:case 2:case 3:break}s=this.k3
r=0+s.a
q=0+s.b
s=t.p
if(s.a(A.w.prototype.gX.call(a)).f===0||!isFinite(s.a(A.w.prototype.gX.call(a)).y))return new A.z(0,0,r,q)
p=s.a(A.w.prototype.gX.call(a)).y-s.a(A.w.prototype.gX.call(a)).r+s.a(A.w.prototype.gX.call(a)).f
switch(A.iZ(this.K,s.a(A.w.prototype.gX.call(a)).b)){case B.v:o=0+p
n=0
break
case B.x:q-=p
n=0
o=0
break
case B.ar:n=0+p
o=0
break
case B.ab:r-=p
n=0
o=0
break
default:n=0
o=0}return new A.z(n,o,r,q)},
wr(a){var s,r=this,q=r.ae
if(q==null){q=r.k3
return new A.z(0,0,0+q.a,0+q.b)}switch(A.b9(r.K).a){case 1:s=r.k3
return new A.z(0,0-q,0+s.a,0+s.b+q)
case 0:s=r.k3
return new A.z(0-q,0,0+s.a+q,0+s.b)}},
aF(a,b){var s,r,q,p=this
if(p.ar$==null)return
s=p.fg&&p.bw!==B.J
r=p.c0
if(s){s=p.cx
s===$&&A.b()
q=p.k3
r.saM(0,a.jL(s,b,new A.z(0,0,0+q.a,0+q.b),p.gTO(),p.bw,r.a))}else{r.saM(0,null)
p.Da(a,b)}},
m(){this.c0.saM(0,null)
this.hq()},
Da(a,b){var s,r,q,p,o,n,m,l
for(s=this.gFx(),r=s.length,q=t.v,p=b.a,o=b.b,n=0;n<s.length;s.length===r||(0,A.Q)(s),++n){m=s[n]
if(m.id.w){l=m.e
l.toString
l=q.a(l).a
a.eo(m,new A.t(p+l.a,o+l.b))}}},
cu(a,b){var s,r,q,p,o,n,m,l,k={}
k.a=k.b=null
switch(A.b9(this.K).a){case 1:k.b=b.b
k.a=b.a
break
case 0:k.b=b.a
k.a=b.b
break}s=new A.op(a.a,a.b,a.c)
for(r=this.gXh(),q=r.length,p=t.v,o=0;o<r.length;r.length===q||(0,A.Q)(r),++o){n=r[o]
if(!n.id.w)continue
m=new A.bb(new Float64Array(16))
m.cO()
l=n.e
l.toString
l=p.a(l).a
m.aw(0,l.a,l.b)
if(a.WD(new A.a05(k,this,n,s),m))return!0}return!1},
jP(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=a instanceof A.c9
for(s=t.d,r=c,q=a,p=0;o=q.c,o!==d;q=o){o.toString
s.a(o)
if(q instanceof A.C)r=q
if(o instanceof A.c9){n=o.wa(q)
n.toString
p+=n}else{p=0
b=!1}}if(r!=null){s=r.c
s.toString
t.q0.a(s)
m=t.p.a(A.w.prototype.gX.call(s)).b
switch(A.b9(d.K).a){case 0:l=r.k3.a
break
case 1:l=r.k3.b
break
default:l=c}if(a1==null)a1=a.gh9()
k=A.fx(a.bs(0,r),a1)}else{if(b){t.q0.a(a)
s=t.p
m=s.a(A.w.prototype.gX.call(a)).b
l=a.id.a
if(a1==null)switch(A.b9(d.K).a){case 0:a1=new A.z(0,0,0+l,0+s.a(A.w.prototype.gX.call(a)).w)
break
case 1:a1=new A.z(0,0,0+s.a(A.w.prototype.gX.call(a)).w,0+a.id.a)
break}}else{s=d.H.at
s.toString
a1.toString
return new A.o8(s,a1)}k=a1}t.q0.a(q)
switch(A.iZ(d.K,m)){case B.x:s=k.d
p+=l-s
j=s-k.b
break
case B.ar:s=k.a
p+=s
j=k.c-s
break
case B.v:s=k.b
p+=s
j=k.d-s
break
case B.ab:s=k.c
p+=l-s
j=s-k.a
break
default:j=c}q.id.toString
p=d.JS(q,p)
i=A.fx(a.bs(0,d),a1)
h=d.a0c(q)
switch(t.p.a(A.w.prototype.gX.call(q)).b.a){case 0:p-=h
break
case 1:switch(A.b9(d.K).a){case 1:p-=i.d-i.b
break
case 0:p-=i.c-i.a
break}break}s=d.K
switch(A.b9(s).a){case 0:g=d.k3.a-h
break
case 1:g=d.k3.b-h
break
default:g=c}f=p-(g-j)*a0
o=d.H.at
o.toString
e=o-f
switch(s.a){case 2:i=i.aw(0,0,e)
break
case 1:i=i.aw(0,e,0)
break
case 0:i=i.aw(0,0,-e)
break
case 3:i=i.aw(0,-e,0)
break}return new A.o8(f,i)},
FD(a,b,c){switch(A.iZ(this.K,c)){case B.x:return new A.t(0,this.k3.b-(b+a.id.c))
case B.ar:return new A.t(b,0)
case B.v:return new A.t(0,b)
case B.ab:return new A.t(this.k3.a-(b+a.id.c),0)}},
e5(a,b,c,d){var s=this
if(!s.H.r.gkA())return s.ol(a,b,c,d)
s.ol(a,null,c,A.agK(a,b,c,s.H,d,s))},
lG(){return this.e5(B.aJ,null,B.t,null)},
jY(a,b){return this.e5(B.aJ,a,B.t,b)},
$iGT:1}
A.a06.prototype={
$1(a){var s=a.id
return s.w||s.z>0},
$S:217}
A.a05.prototype={
$1(a){var s=this,r=s.c,q=s.a,p=s.b.XC(r,q.b)
return r.H6(s.d,q.a,p)},
$S:114}
A.uu.prototype={
e4(a){if(!(a.e instanceof A.iC))a.e=new A.iC(null,null,B.j)},
sWJ(a){if(a===this.qs)return
this.qs=a
this.a3()},
saS(a){if(a==this.dB)return
this.dB=a
this.a3()},
giZ(){return!0},
bV(a){return new A.Z(A.E(1/0,a.a,a.b),A.E(1/0,a.c,a.d))},
bx(){var s,r,q,p,o,n,m,l,k,j=this
switch(A.b9(j.K).a){case 1:j.H.mw(j.k3.b)
break
case 0:j.H.mw(j.k3.a)
break}if(j.dB==null){j.im=j.il=0
j.fg=!1
j.H.mt(0,0)
return}switch(A.b9(j.K).a){case 1:s=j.k3
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
o=j.OC(r,q,p+0)
if(o!==0){p=j.H
n=p.at
n.toString
p.at=n+o
p.ch=!0}else{p=j.H
n=j.il
n===$&&A.b()
m=j.qs
n=Math.min(0,n+r*m)
l=j.im
l===$&&A.b()
if(p.mt(n,Math.max(0,l-r*(1-m))))break}k=s+1
if(k<10){s=k
continue}else break}while(!0)},
OC(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.im=e.il=0
e.fg=!1
s=a*e.qs-c
r=A.E(s,0,a)
q=a-s
p=A.E(q,0,a)
switch(e.aT.a){case 0:e.ae=e.ao
break
case 1:e.ae=a*e.ao
break}o=e.ae
o.toString
n=a+2*o
m=s+o
l=A.E(m,0,n)
k=A.E(n-m,0,n)
j=e.dB.e
j.toString
i=A.n(e).h("ap.1").a(j).bM$
j=i==null
if(!j){h=Math.max(a,s)
g=e.HG(e.gXe(),A.E(q,-o,0),i,b,B.nh,p,a,0,l,r,h-a)
if(g!==0)return-g}q=e.dB
o=-s
h=Math.max(0,o)
o=j?Math.min(0,o):0
j=s>=a?s:r
f=e.ae
f.toString
return e.HG(e.gXc(),A.E(s,-f,0),q,b,B.ng,j,a,o,k,p,h)},
JS(a,b){var s,r,q,p,o=this
switch(t.p.a(A.w.prototype.gX.call(a)).b.a){case 0:s=o.dB
for(r=A.n(o).h("ap.1"),q=0;s!==a;){q+=s.id.a
p=s.e
p.toString
s=r.a(p).ah$}return q+b
case 1:r=o.dB.e
r.toString
p=A.n(o).h("ap.1")
s=p.a(r).bM$
for(q=0;s!==a;){q-=s.id.a
r=s.e
r.toString
s=p.a(r).bM$}return q-b}},
a0c(a){var s,r,q,p=this
switch(t.p.a(A.w.prototype.gX.call(a)).b.a){case 0:s=p.dB
for(r=A.n(p).h("ap.1");s!==a;){s.id.toString
q=s.e
q.toString
s=r.a(q).ah$}return 0
case 1:r=p.dB.e
r.toString
q=A.n(p).h("ap.1")
s=q.a(r).bM$
for(;s!==a;){s.id.toString
r=s.e
r.toString
s=q.a(r).bM$}return 0}},
cW(a,b){var s=a.e
s.toString
s=t.v.a(s).a
b.aw(0,s.a,s.b)},
XC(a,b){var s,r=a.e
r.toString
t.v.a(r)
s=t.p
switch(A.iZ(s.a(A.w.prototype.gX.call(a)).a,s.a(A.w.prototype.gX.call(a)).b)){case B.v:return b-r.a.b
case B.ar:return b-r.a.a
case B.x:return a.id.c-(b-r.a.b)
case B.ab:return a.id.c-(b-r.a.a)}},
gFx(){var s,r,q=this,p=A.a([],t.jT),o=q.ar$
if(o==null)return p
for(s=A.n(q).h("ap.1");o!=q.dB;){o.toString
p.push(o)
r=o.e
r.toString
o=s.a(r).ah$}o=q.cG$
for(;!0;){o.toString
p.push(o)
if(o===q.dB)return p
r=o.e
r.toString
o=s.a(r).bM$}},
gXh(){var s,r,q,p=this,o=A.a([],t.jT)
if(p.ar$==null)return o
s=p.dB
for(r=A.n(p).h("ap.1");s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).ah$}q=p.dB.e
q.toString
s=r.a(q).bM$
for(;s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).bM$}return o}}
A.hP.prototype={
al(a){var s,r,q
this.e9(a)
s=this.ar$
for(r=A.n(this).h("hP.0");s!=null;){s.al(a)
q=s.e
q.toString
s=r.a(q).ah$}},
ad(a){var s,r,q
this.dq(0)
s=this.ar$
for(r=A.n(this).h("hP.0");s!=null;){s.ad(0)
q=s.e
q.toString
s=r.a(q).ah$}}}
A.oe.prototype={
D(){return"ScrollDirection."+this.b}}
A.f2.prototype={
nB(a,b,c,d){var s=d.a===B.t.a
if(s){this.di(b)
return A.bW(null,t.H)}else return this.fN(b,c,d)},
i(a){var s=this,r=A.a([],t.s)
s.MA(r)
r.push(A.A(s.w).i(0))
r.push(s.r.i(0))
r.push(A.h(s.fr))
r.push(s.k4.i(0))
return"<optimized out>#"+A.bB(s)+"("+B.b.bj(r,", ")+")"},
c6(a){var s=this.at
if(s!=null)a.push("offset: "+B.d.M(s,1))}}
A.p8.prototype={}
A.jP.prototype={
D(){return"SchedulerPhase."+this.b}}
A.Zr.prototype={}
A.dd.prototype={
WB(a){var s=this.f$
s.push(a)
if(s.length===1){s=$.aE()
s.ay=this.gQ_()
s.ch=$.ah}},
Is(a){var s=this.f$
B.b.A(s,a)
if(s.length===0){s=$.aE()
s.ay=null
s.ch=$.ah}},
Q0(a){var s,r,q,p,o,n,m,l,k=this.f$,j=A.ax(k,!0,t.wX)
for(p=j.length,o=0;o<p;++o){s=j[o]
try{if(B.b.B(k,s))s.$1(a)}catch(n){r=A.au(n)
q=A.aG(n)
m=A.bj("while executing callbacks for FrameTiming")
l=$.f9()
if(l!=null)l.$1(new A.bt(r,q,"Flutter framework",m,null,!1))}}},
qA(a){this.r$=a
switch(a.a){case 0:case 1:this.DV(!0)
break
case 2:case 3:this.DV(!1)
break}},
BT(){if(this.y$)return
this.y$=!0
A.cg(B.t,this.gUJ())},
UK(){this.y$=!1
if(this.Zo())this.BT()},
Zo(){var s,r,q,p,o,n,m=this,l="No element",k=m.x$,j=k.c===0
if(j||m.b>0)return!1
if(j)A.a_(A.aa(l))
s=k.ox(0)
j=s.b
if(m.w$.$2$priority$scheduler(j,m)){try{if(k.c===0)A.a_(A.aa(l));++k.d
k.ox(0)
p=k.c-1
o=k.ox(p)
k.b[p]=null
k.c=p
if(p>0)k.OG(o,0)
s.a2G()}catch(n){r=A.au(n)
q=A.aG(n)
j=A.bj("during a task callback")
A.dr(new A.bt(r,q,"scheduler library",j,null,!1))}return k.c!==0}return!1},
ob(a,b){var s,r=this
r.hj()
s=++r.z$
r.Q$.l(0,s,new A.p8(a))
return r.z$},
rU(a){return this.ob(a,!1)},
gGp(){var s=this
if(s.ay$==null){if(s.CW$===B.cD)s.hj()
s.ay$=new A.bg(new A.aq($.ah,t.U),t.V)
s.ax$.push(new A.a0W(s))}return s.ay$.a},
gGN(){return this.cx$},
DV(a){if(this.cx$===a)return
this.cx$=a
if(a)this.hj()},
Gq(){var s=$.aE()
if(s.w==null){s.w=this.gR2()
s.x=$.ah}if(s.y==null){s.y=this.gRq()
s.z=$.ah}},
wN(){switch(this.CW$.a){case 0:case 4:this.hj()
return
case 1:case 2:case 3:return}},
hj(){var s,r=this
if(!r.ch$)s=!(A.dd.prototype.gGN.call(r)&&r.c1$)
else s=!0
if(s)return
r.Gq()
$.aE().hj()
r.ch$=!0},
JN(){if(this.ch$)return
this.Gq()
$.aE().hj()
this.ch$=!0},
rV(){var s,r,q=this
if(q.cy$||q.CW$!==B.cD)return
q.cy$=!0
s=new A.IM(null,0,A.a([],t.vS))
s.og(0,"Warm-up frame")
r=q.ch$
A.cg(B.t,new A.a0Y(q))
A.cg(B.t,new A.a0Z(q,r))
q.a05(new A.a1_(q,s))},
a1m(){var s=this
s.dx$=s.AL(s.dy$)
s.db$=null},
AL(a){var s=this.db$,r=s==null?B.t:new A.aS(a.a-s.a)
return A.c2(B.d.b1(r.a/$.aiM)+this.dx$.a,0)},
R3(a){if(this.cy$){this.go$=!0
return}this.GR(a)},
Rr(){var s=this
if(s.go$){s.go$=!1
s.ax$.push(new A.a0V(s))
return}s.GT()},
GR(a){var s,r,q=this,p=q.id$,o=p==null
if(!o)p.og(0,"Frame")
if(q.db$==null)q.db$=a
r=a==null
q.fr$=q.AL(r?q.dy$:a)
if(!r)q.dy$=a
q.ch$=!1
try{if(!o)p.og(0,"Animate")
q.CW$=B.SE
s=q.Q$
q.Q$=A.y(t.S,t.b1)
J.mE(s,new A.a0X(q))
q.as$.U(0)}finally{q.CW$=B.SF}},
a1k(a){var s=this,r=s.k1$,q=r==null
if(!q&&r!==a)return null
if(r===a)++s.k2$
else if(q){s.k1$=a
s.k2$=1}return new A.Zr(s.gPM())},
PN(){if(--this.k2$===0){this.k1$=null
$.aE()}},
GT(){var s,r,q,p,o,n,m,l=this,k=l.id$,j=k==null
if(!j)k.qw(0)
try{l.CW$=B.AG
for(p=l.at$,o=p.length,n=0;n<p.length;p.length===o||(0,A.Q)(p),++n){s=p[n]
m=l.fr$
m.toString
l.CG(s,m)}l.CW$=B.SG
p=l.ax$
r=A.ax(p,!0,t.qP)
B.b.U(p)
for(p=r,o=p.length,n=0;n<p.length;p.length===o||(0,A.Q)(p),++n){q=p[n]
m=l.fr$
m.toString
l.CG(q,m)}}finally{l.CW$=B.cD
if(!j)k.qw(0)
l.fr$=null}},
CH(a,b,c){var s,r,q,p
try{a.$1(b)}catch(q){s=A.au(q)
r=A.aG(q)
p=A.bj("during a scheduler callback")
A.dr(new A.bt(s,r,"scheduler library",p,null,!1))}},
CG(a,b){return this.CH(a,b,null)}}
A.a0W.prototype={
$1(a){var s=this.a
s.ay$.fa(0)
s.ay$=null},
$S:2}
A.a0Y.prototype={
$0(){this.a.GR(null)},
$S:0}
A.a0Z.prototype={
$0(){var s=this.a
s.GT()
s.a1m()
s.cy$=!1
if(this.b)s.hj()},
$S:0}
A.a1_.prototype={
$0(){var s=0,r=A.a8(t.H),q=this
var $async$$0=A.a9(function(a,b){if(a===1)return A.a5(b,r)
while(true)switch(s){case 0:s=2
return A.an(q.a.gGp(),$async$$0)
case 2:q.b.qw(0)
return A.a6(null,r)}})
return A.a7($async$$0,r)},
$S:43}
A.a0V.prototype={
$1(a){var s=this.a
s.ch$=!1
s.hj()},
$S:2}
A.a0X.prototype={
$2(a,b){var s,r,q=this.a
if(!q.as$.B(0,a)){s=b.a
r=q.fr$
r.toString
q.CH(s,r,b.b)}},
$S:219}
A.oH.prototype={
sxL(a,b){var s=this
if(b===s.b)return
s.b=b
if(b)s.yL()
else if(s.a!=null&&s.e==null)s.e=$.bG.ob(s.gvz(),!1)},
ga_L(){if(this.a==null)return!1
if(this.b)return!1
var s=$.bG
s.toString
if(A.dd.prototype.gGN.call(s)&&s.c1$)return!0
if($.bG.CW$!==B.cD)return!0
return!1},
lJ(a){var s,r,q=this
q.a=new A.m4(new A.bg(new A.aq($.ah,t.U),t.V))
if(!q.b)s=q.e==null
else s=!1
if(s)q.e=$.bG.ob(q.gvz(),!1)
s=$.bG
r=s.CW$.a
if(r>0&&r<4){s=s.fr$
s.toString
q.c=s}s=q.a
s.toString
return s},
lK(a,b){var s=this,r=s.a
if(r==null)return
s.c=s.a=null
s.yL()
if(b)r.B4(s)
else r.Er()},
ho(a){return this.lK(a,!1)},
VE(a){var s,r=this
r.e=null
s=r.c
if(s==null)s=r.c=a
r.d.$1(new A.aS(a.a-s.a))
if(!r.b&&r.a!=null&&r.e==null)r.e=$.bG.ob(r.gvz(),!0)},
yL(){var s,r=this.e
if(r!=null){s=$.bG
s.Q$.A(0,r)
s.as$.E(0,r)
this.e=null}},
m(){var s=this,r=s.a
if(r!=null){s.a=null
s.yL()
r.B4(s)}},
a1F(a,b){var s=""+"Ticker()"
return s.charCodeAt(0)==0?s:s},
i(a){return this.a1F(a,!1)}}
A.m4.prototype={
Er(){this.c=!0
this.a.fa(0)
var s=this.b
if(s!=null)s.fa(0)},
B4(a){var s
this.c=!1
s=this.b
if(s!=null)s.je(new A.vG(a))},
J5(a){var s,r,q=this,p=new A.a4W(a)
if(q.b==null){s=q.b=new A.bg(new A.aq($.ah,t.U),t.V)
r=q.c
if(r!=null)if(r)s.fa(0)
else s.je(B.Yd)}q.b.a.eQ(p,p,t.H)},
kE(a,b){return this.a.a.kE(a,b)},
ic(a){return this.kE(a,null)},
eQ(a,b,c){return this.a.a.eQ(a,b,c)},
by(a,b){return this.eQ(a,null,b)},
hV(a){return this.a.a.hV(a)},
i(a){var s=A.bB(this),r=this.c
if(r==null)r="active"
else r=r?"complete":"canceled"
return"<optimized out>#"+s+"("+r+")"},
$iaj:1}
A.a4W.prototype={
$1(a){this.a.$0()},
$S:20}
A.vG.prototype={
i(a){var s=this.a
if(s!=null)return"This ticker was canceled: "+s.i(0)
return'The ticker was canceled before the "orCancel" property was first used.'},
$idg:1}
A.a1q.prototype={}
A.uZ.prototype={
i(a){return"SemanticsTag("+this.a+")"}}
A.ck.prototype={
W(a,b){var s,r,q,p,o,n,m,l=this.a,k=l.length
if(k===0)return b
s=b.a
if(s.length===0)return this
r=A.ax(this.b,!0,t.lS)
q=b.b
p=q.length
if(p!==0)for(o=0;o<q.length;q.length===p||(0,A.Q)(q),++o){n=q[o]
m=n.a
r.push(n.FL(new A.er(m.a+k,m.b+k)))}return new A.ck(l+s,r)},
k(a,b){if(b==null)return!1
return J.S(b)===A.A(this)&&b instanceof A.ck&&b.a===this.a&&A.cE(b.b,this.b)},
gu(a){return A.T(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"AttributedString('"+this.a+"', attributes: "+A.h(this.b)+")"}}
A.HV.prototype={
bP(){return"SemanticsData"},
k(a,b){var s=this
if(b==null)return!1
return b instanceof A.HV&&b.a===s.a&&b.b===s.b&&b.c.k(0,s.c)&&b.d.k(0,s.d)&&b.e.k(0,s.e)&&b.f.k(0,s.f)&&b.r.k(0,s.r)&&b.w===s.w&&b.x==s.x&&b.cx.k(0,s.cx)&&A.aei(b.cy,s.cy)&&b.Q==s.Q&&b.as==s.as&&b.at==s.at&&b.ax==s.ax&&J.f(b.db,s.db)&&b.dx===s.dx&&b.dy===s.dy&&A.aq9(b.fr,s.fr)},
gu(a){var s=this,r=A.cS(s.fr)
return A.T(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.cx,s.cy,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,A.T(s.CW,s.db,s.dx,s.dy,r,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a))}}
A.NG.prototype={}
A.HX.prototype={
bP(){return"SemanticsProperties"}}
A.bM.prototype={
sbh(a,b){var s
if(!A.aoE(this.r,b)){s=A.acM(b)
this.r=s?null:b
this.ht()}},
saI(a,b){if(!this.w.k(0,b)){this.w=b
this.ht()}},
sHx(a){if(this.as===a)return
this.as=a
this.ht()},
Ur(a){var s,r,q,p,o,n,m,l=this,k=l.ax
if(k!=null)for(s=k.length,r=0;r<s;++r)k[r].ch=!0
for(k=a.length,r=0;r<k;++r)a[r].ch=!1
k=l.ax
if(k!=null)for(s=k.length,q=t.aa,p=!1,r=0;r<k.length;k.length===s||(0,A.Q)(k),++r){o=k[r]
if(o.ch){n=J.de(o)
if(q.a(A.F.prototype.gaU.call(n,o))===l){o.c=null
if(l.b!=null)o.ad(0)}p=!0}}else p=!1
for(k=a.length,s=t.aa,r=0;r<a.length;a.length===k||(0,A.Q)(a),++r){o=a[r]
q=J.de(o)
if(s.a(A.F.prototype.gaU.call(q,o))!==l){if(s.a(A.F.prototype.gaU.call(q,o))!=null){q=s.a(A.F.prototype.gaU.call(q,o))
if(q!=null){o.c=null
if(q.b!=null)o.ad(0)}}o.c=l
q=l.b
if(q!=null)o.al(q)
q=o.a
n=l.a
if(q<=n){o.a=n+1
o.iL()}p=!0}}if(!p&&l.ax!=null)for(k=l.ax,s=k.length,m=0;m<s;++m)if(k[m].e!==a[m].e){p=!0
break}l.ax=a
if(p)l.ht()},
ga_2(){var s=this.ax
s=s==null?null:s.length!==0
return s===!0},
vN(a){var s,r,q,p=this.ax
if(p!=null)for(s=p.length,r=0;r<p.length;p.length===s||(0,A.Q)(p),++r){q=p[r]
if(!a.$1(q)||!q.vN(a))return!1}return!0},
iL(){var s=this.ax
if(s!=null)B.b.Z(s,this.gIl())},
al(a){var s,r,q,p=this
p.ta(a)
for(s=a.c;s.V(0,p.e);)p.e=$.a1H=($.a1H+1)%65535
s.l(0,p.e,p)
a.d.A(0,p)
if(p.CW){p.CW=!1
p.ht()}s=p.ax
if(s!=null)for(r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].al(a)},
ad(a){var s,r,q,p,o,n=this,m=t.nU
m.a(A.F.prototype.gbl.call(n)).c.A(0,n.e)
m.a(A.F.prototype.gbl.call(n)).d.E(0,n)
n.dq(0)
m=n.ax
if(m!=null)for(s=m.length,r=t.aa,q=0;q<m.length;m.length===s||(0,A.Q)(m),++q){p=m[q]
o=J.de(p)
if(r.a(A.F.prototype.gaU.call(o,p))===n)o.ad(p)}n.ht()},
ht(){var s=this
if(s.CW)return
s.CW=!0
if(s.b!=null)t.nU.a(A.F.prototype.gbl.call(s)).b.E(0,s)},
iQ(a,b,c){var s,r=this
if(c==null)c=$.abO()
if(r.fr.k(0,c.p4))if(r.id.k(0,c.ry))if(r.k2===c.x2)if(r.k3===c.xr)if(r.fx.k(0,c.R8))if(r.fy.k(0,c.RG))if(r.go.k(0,c.rx))if(r.k1===c.to)if(r.dy===c.aR)if(r.ok==c.y1)if(r.p1==c.id)if(r.RG==c.ai)if(r.rx==c.an)if(r.ry==c.ag)if(r.db===c.f)if(r.Q==c.k1)s=r.at!==c.p2
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
if(s)r.ht()
r.fr=c.p4
r.fx=c.R8
r.fy=c.RG
r.go=c.rx
r.id=c.ry
r.k1=c.to
r.k4=c.x1
r.k2=c.x2
r.k3=c.xr
r.dy=c.aR
r.ok=c.y1
r.p1=c.id
r.cx=A.nE(c.e,t.nS,t.BT)
r.cy=A.nE(c.p3,t.zN,t.M)
r.db=c.f
r.p2=c.y2
r.RG=c.ai
r.rx=c.an
r.ry=c.ag
r.at=c.p2
r.p4=c.k2
r.R8=c.k3
r.Q=c.k1
r.to=c.k4
r.x1=c.ok
r.x2=c.p1
r.Ur(b==null?B.hK:b)},
a1T(a,b){return this.iQ(a,null,b)},
JC(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7={}
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
a7.y=s==null?null:A.jw(s,t.xJ)
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
for(s=a6.cy,s=A.ij(s,s.r);s.t();)q.E(0,A.afj(s.d))
a6.k4!=null
if(a6.at)a6.vN(new A.a1I(a7,a6,q))
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
B.b.hm(a5)
return new A.HV(s,p,o,n,m,l,k,j,i,d,c,b,a,a0,a1,a2,a3,a4,h,e,g,r,f,a5)},
Os(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.JC()
if(!a.ga_2()||a.at){s=$.aka()
r=s}else{q=a.ax.length
p=a.P5()
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
if(c==null)c=$.akc()
b=l==null?$.akb():l
a1.a.push(new A.HW(n,a0.a,a0.b,-1,-1,-1,0,g,f,e,d,a0.cx,m.a,m.b,h.a,h.b,k.a,k.b,j.a,j.b,i.a,i.b,a0.w,a0.x,A.aej(c),s,r,b,a0.dy))
a.CW=!1},
P5(){var s,r,q,p,o,n,m,l,k,j=this,i=j.ok,h=t.aa,g=h.a(A.F.prototype.gaU.call(j,j))
while(!0){s=i==null
if(!(s&&g!=null))break
i=g.ok
g=h.a(A.F.prototype.gaU.call(g,g))}r=j.ax
if(!s){r.toString
r=A.asb(r,i)}h=t.Dr
q=A.a([],h)
p=A.a([],h)
for(o=null,n=0;n<r.length;++n){m=r[n]
l=m.p1
o=n>0?r[n-1].p1:null
if(n!==0)if(J.S(l)===J.S(o)){if(l!=null)o.toString
k=!0}else k=!1
else k=!0
if(!k&&p.length!==0){if(o!=null){if(!!p.immutable$list)A.a_(A.X("sort"))
h=p.length-1
if(h-0<=32)A.Ig(p,0,h,J.adU())
else A.If(p,0,h,J.adU())}B.b.I(q,p)
B.b.U(p)}p.push(new A.iS(m,l,n))}if(o!=null)B.b.hm(p)
B.b.I(q,p)
h=t.wg
return A.ax(new A.aL(q,new A.a1G(),h),!0,h.h("bk.E"))},
JX(a){if(this.b==null)return
B.lX.ly(0,a.IO(this.e))},
bP(){return"SemanticsNode#"+this.e},
a1B(a,b,c){return new A.NG(a,this,b,!0,!0,null,c)},
IM(a){return this.a1B(B.Ey,null,a)}}
A.a1I.prototype={
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
if(s!=null){r=q.y;(r==null?q.y=A.b7(t.xJ):r).I(0,s)}for(s=this.b.cy,s=A.ij(s,s.r),r=this.c;s.t();)r.E(0,A.afj(s.d))
a.k4!=null
s=q.c
r=q.x
q.c=A.aah(a.fr,a.ok,s,r)
r=q.r
s=q.x
q.r=A.aah(a.id,a.ok,r,s)
q.cy=Math.max(q.cy,a.k3+a.k2)
return!0},
$S:46}
A.a1G.prototype={
$1(a){return a.a},
$S:221}
A.iK.prototype={
b0(a,b){return B.d.b0(this.b,b.b)},
$iby:1}
A.fQ.prototype={
b0(a,b){return B.d.b0(this.a,b.a)},
Kn(){var s,r,q,p,o,n,m,l,k,j=A.a([],t.iV)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q){p=s[q]
o=p.w
j.push(new A.iK(!0,A.my(p,new A.t(o.a- -0.1,o.b- -0.1)).a,p))
j.push(new A.iK(!1,A.my(p,new A.t(o.c+-0.1,o.d+-0.1)).a,p))}B.b.hm(j)
n=A.a([],t.dK)
for(s=j.length,r=this.b,o=t.T,m=null,l=0,q=0;q<j.length;j.length===s||(0,A.Q)(j),++q){k=j[q]
if(k.a){++l
if(m==null)m=new A.fQ(k.b,r,A.a([],o))
m.c.push(k.c)}else --l
if(l===0){m.toString
n.push(m)
m=null}}B.b.hm(n)
if(r===B.Q){s=t.FF
n=A.ax(new A.cz(n,s),!0,s.h("bk.E"))}s=A.ai(n).h("i9<1,bM>")
return A.ax(new A.i9(n,new A.a9b(),s),!0,s.h("p.E"))},
Km(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this.c,a4=a3.length
if(a4<=1)return a3
s=t.S
r=A.y(s,t.ju)
q=A.y(s,s)
for(p=this.b,o=p===B.Q,p=p===B.r,n=a4,m=0;m<n;g===a4||(0,A.Q)(a3),++m,n=g){l=a3[m]
r.l(0,l.e,l)
n=l.w
k=n.a
j=n.b
i=A.my(l,new A.t(k+(n.c-k)/2,j+(n.d-j)/2))
for(n=a3.length,k=i.a,j=i.b,h=0;g=a3.length,h<g;a3.length===n||(0,A.Q)(a3),++h){f=a3[h]
if((l==null?f==null:l===f)||q.j(0,f.e)===l.e)continue
g=f.w
e=g.a
d=g.b
c=A.my(f,new A.t(e+(g.c-e)/2,d+(g.d-d)/2))
b=Math.atan2(c.b-j,c.a-k)
a=p&&-0.7853981633974483<b&&b<2.356194490192345
if(o)a0=b<-2.356194490192345||b>2.356194490192345
else a0=!1
if(a||a0)q.l(0,l.e,f.e)}}a1=A.a([],t.t)
a2=A.a(a3.slice(0),A.ai(a3))
B.b.d6(a2,new A.a97())
new A.aL(a2,new A.a98(),A.ai(a2).h("aL<1,l>")).Z(0,new A.a9a(A.b7(s),q,a1))
a3=t.sC
a3=A.ax(new A.aL(a1,new A.a99(r),a3),!0,a3.h("bk.E"))
a4=A.ai(a3).h("cz<1>")
return A.ax(new A.cz(a3,a4),!0,a4.h("bk.E"))}}
A.a9b.prototype={
$1(a){return a.Km()},
$S:95}
A.a97.prototype={
$2(a,b){var s,r,q=a.w,p=A.my(a,new A.t(q.a,q.b))
q=b.w
s=A.my(b,new A.t(q.a,q.b))
r=B.d.b0(p.b,s.b)
if(r!==0)return-r
return-B.d.b0(p.a,s.a)},
$S:45}
A.a9a.prototype={
$1(a){var s=this,r=s.a
if(r.B(0,a))return
r.E(0,a)
r=s.b
if(r.V(0,a)){r=r.j(0,a)
r.toString
s.$1(r)}s.c.push(a)},
$S:33}
A.a98.prototype={
$1(a){return a.e},
$S:224}
A.a99.prototype={
$1(a){var s=this.a.j(0,a)
s.toString
return s},
$S:225}
A.aad.prototype={
$1(a){return a.Kn()},
$S:95}
A.iS.prototype={
b0(a,b){var s,r=this.b
if(r==null||b.b==null)return this.c-b.c
r.toString
s=b.b
s.toString
return r.b0(0,s)},
$iby:1}
A.uY.prototype={
JY(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.b
if(e.a===0)return
s=A.b7(t.S)
r=A.a([],t.T)
for(q=t.aa,p=A.n(e).h("aF<1>"),o=p.h("p.E"),n=f.d;e.a!==0;){m=A.ax(new A.aF(e,new A.a1L(f),p),!0,o)
e.U(0)
n.U(0)
l=new A.a1M()
if(!!m.immutable$list)A.a_(A.X("sort"))
k=m.length-1
if(k-0<=32)A.Ig(m,0,k,l)
else A.If(m,0,k,l)
B.b.I(r,m)
for(l=m.length,j=0;j<m.length;m.length===l||(0,A.Q)(m),++j){i=m[j]
if(i.at||i.as){k=J.de(i)
if(q.a(A.F.prototype.gaU.call(k,i))!=null){h=q.a(A.F.prototype.gaU.call(k,i))
h=h.at||h.as}else h=!1
if(h){q.a(A.F.prototype.gaU.call(k,i)).ht()
i.CW=!1}}}}B.b.d6(r,new A.a1N())
$.a1r.toString
g=new A.a1P(A.a([],t.fr))
for(q=r.length,j=0;j<r.length;r.length===q||(0,A.Q)(r),++j){i=r[j]
if(i.CW&&i.b!=null)i.Os(g,s)}e.U(0)
for(e=A.iP(s,s.r),q=A.n(e).c;e.t();){p=e.d
$.afg.j(0,p==null?q.a(p):p).toString}f.a.$1(new A.HZ(g.a))
f.av()},
QN(a,b){var s,r={},q=r.a=this.c.j(0,a)
if(q!=null)s=(q.at||q.as)&&!q.cx.V(0,b)
else s=!1
if(s)q.vN(new A.a1K(r,b))
s=r.a
if(s==null||!s.cx.V(0,b))return null
return r.a.cx.j(0,b)},
a0G(a,b,c){var s=this.QN(a,b)
if(s!=null){s.$1(c)
return}if(b===B.T1&&this.c.j(0,a).f!=null)this.c.j(0,a).f.$0()},
i(a){return"<optimized out>#"+A.bB(this)}}
A.a1L.prototype={
$1(a){return!this.a.d.B(0,a)},
$S:46}
A.a1M.prototype={
$2(a,b){return a.a-b.a},
$S:45}
A.a1N.prototype={
$2(a,b){return a.a-b.a},
$S:45}
A.a1K.prototype={
$1(a){if(a.cx.V(0,this.b)){this.a.a=a
return!1}return!0},
$S:46}
A.a1s.prototype={
j_(a,b){var s=this
s.e.l(0,a,b)
s.f=s.f|a.a
s.d=!0},
dP(a,b){this.j_(a,new A.a1t(b))},
siJ(a){a.toString
this.dP(B.dA,a)},
sjG(a){a.toString
this.dP(B.AL,a)},
sr6(a){this.dP(B.dD,a)},
sr4(a){this.dP(B.T2,a)},
sr7(a){this.dP(B.dE,a)},
sr8(a){this.dP(B.dB,a)},
sr5(a){this.dP(B.dC,a)},
sxW(a){this.dP(B.AM,a)},
sxR(a){this.dP(B.AK,a)},
sxP(a,b){this.dP(B.T4,b)},
sxQ(a,b){this.dP(B.T8,b)},
sy4(a,b){this.dP(B.SZ,b)},
sy0(a){this.j_(B.T5,new A.a1w(a))},
sxZ(a){this.j_(B.SX,new A.a1u(a))},
sy3(a){this.j_(B.T6,new A.a1x(a))},
sy_(a){this.j_(B.SY,new A.a1v(a))},
sy7(a){this.j_(B.T_,new A.a1y(a))},
sy8(a){this.j_(B.T0,new A.a1z(a))},
sxS(a){this.dP(B.T3,a)},
sxT(a){this.dP(B.T7,a)},
sJQ(a){return},
sJR(a){if(a==this.k3)return
this.k3=a
this.d=!0},
sxD(a){return},
swk(a){return},
shA(a,b){if(b===this.x2)return
this.x2=b
this.d=!0},
Fd(a){var s=this.aa;(s==null?this.aa=A.b7(t.xJ):s).E(0,a)},
b5(a,b){var s=this,r=s.aR,q=a.a
if(b)s.aR=r|q
else s.aR=r&~q
s.d=!0},
Hu(a){var s,r=this
if(a==null||!a.d||!r.d)return!0
if((r.f&a.f)!==0)return!1
if((r.aR&a.aR)!==0)return!1
if(r.R8.a.length!==0)s=a.R8.a.length!==0
else s=!1
if(s)return!1
return!0},
j7(a){var s,r,q=this
if(!a.d)return
q.e.I(0,a.e)
q.p3.I(0,a.p3)
q.f=q.f|a.f
q.aR=q.aR|a.aR
q.y2=a.y2
if(q.ai==null)q.ai=a.ai
if(q.an==null)q.an=a.an
if(q.ag==null)q.ag=a.ag
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
q.p4=A.aah(a.p4,a.y1,r,s)
s=q.R8
if(s.a==="")q.R8=a.R8
s=q.RG
if(s.a==="")q.RG=a.RG
s=q.rx
if(s.a==="")q.rx=a.rx
s=q.ry
r=q.y1
q.ry=A.aah(a.ry,a.y1,s,r)
if(q.to==="")q.to=a.to
q.xr=Math.max(q.xr,a.xr+a.x2)
q.d=q.d||a.d},
XP(){var s=this,r=A.ok()
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
r.aR=s.aR
r.aa=s.aa
r.y2=s.y2
r.ai=s.ai
r.an=s.an
r.ag=s.ag
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
A.a1t.prototype={
$1(a){this.a.$0()},
$S:6}
A.a1w.prototype={
$1(a){a.toString
this.a.$1(A.pH(a))},
$S:6}
A.a1u.prototype={
$1(a){a.toString
this.a.$1(A.pH(a))},
$S:6}
A.a1x.prototype={
$1(a){a.toString
this.a.$1(A.pH(a))},
$S:6}
A.a1v.prototype={
$1(a){a.toString
this.a.$1(A.pH(a))},
$S:6}
A.a1y.prototype={
$1(a){var s,r,q
a.toString
s=J.abR(t.G.a(a),t.N,t.S)
r=s.j(0,"base")
r.toString
q=s.j(0,"extent")
q.toString
this.a.$1(A.a4R(B.A,r,q,!1))},
$S:6}
A.a1z.prototype={
$1(a){a.toString
this.a.$1(A.ch(a))},
$S:6}
A.Bz.prototype={
D(){return"DebugSemanticsDumpOrder."+this.b}}
A.ol.prototype={
b0(a,b){var s=this.YF(b)
return s},
$iby:1}
A.tO.prototype={
YF(a){var s=a.b===this.b
if(s)return 0
return B.f.b0(this.b,a.b)}}
A.NF.prototype={}
A.NH.prototype={}
A.NI.prototype={}
A.a1B.prototype={
IO(a){var s=A.aR(["type",this.a,"data",this.o4()],t.N,t.z)
if(a!=null)s.l(0,"nodeId",a)
return s},
a1E(){return this.IO(null)},
i(a){var s,r,q,p=A.a([],t.s),o=this.o4(),n=J.aeR(o.gbk(o))
B.b.hm(n)
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.Q)(n),++r){q=n[r]
p.push(A.h(q)+": "+A.h(o.j(0,q)))}return"SemanticsEvent("+B.b.bj(p,", ")+")"}}
A.a4Y.prototype={
o4(){return A.aR(["message",this.b],t.N,t.z)}}
A.Y0.prototype={
o4(){return B.yS}}
A.a4k.prototype={
o4(){return B.yS}}
A.z1.prototype={
jC(a,b){return this.a03(a,!0)},
a03(a,b){var s=0,r=A.a8(t.N),q,p=this,o
var $async$jC=A.a9(function(c,d){if(c===1)return A.a5(d,r)
while(true)switch(s){case 0:s=3
return A.an(p.cv(0,a),$async$jC)
case 3:o=d
if(o.byteLength<51200){q=B.a8.dW(0,A.cR(o.buffer,0,null))
s=1
break}q=A.Qo(A.atp(),o,'UTF8 decode for "'+a+'"',t.B6,t.N)
s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$jC,r)},
i(a){return"<optimized out>#"+A.bB(this)+"()"}}
A.Rs.prototype={
jC(a,b){return this.Kw(a,!0)},
a04(a,b,c){var s,r={},q=this.b
if(q.V(0,a)){r=q.j(0,a)
r.toString
return c.h("aj<0>").a(r)}r.a=r.b=null
this.jC(a,!1).by(b,c).by(new A.Rt(r,this,a,c),t.H)
s=r.a
if(s!=null)return s
s=new A.aq($.ah,c.h("aq<0>"))
r.b=new A.bg(s,c.h("bg<0>"))
q.l(0,a,s)
return r.b.a}}
A.Rt.prototype={
$1(a){var s=this,r=new A.bl(a,s.d.h("bl<0>")),q=s.a
q.a=r
s.b.b.l(0,s.c,r)
q=q.b
if(q!=null)q.cY(0,a)},
$S(){return this.d.h("aN(0)")}}
A.ZA.prototype={
cv(a,b){var s,r,q,p,o,n=null,m=A.P5(B.hL,b,B.a8,!1),l=A.ai2(n,0,0),k=A.ahZ(n,0,0,!1),j=A.ai1(n,0,0,n),i=A.ahY(n,0,0),h=A.ai0(n,"")
if(k==null)s=l.length!==0||h!=null||!1
else s=!1
if(s)k=""
s=k==null
r=!s
q=A.ai_(m,0,m.length,n,"",r)
if(s&&!B.c.c_(q,"/"))q=A.ai5(q,r)
else q=A.ai7(q)
p=B.ca.dV(A.ahU("",l,s&&B.c.c_(q,"//")?"":k,h,q,j,i).e)
m=$.fG.bb$
m===$&&A.b()
o=m.rY(0,"flutter/assets",A.jB(p.buffer,0,n)).by(new A.ZB(b),t.B6)
return o},
qU(a){return this.a02(a)},
a02(a){var s=0,r=A.a8(t.gG),q,p=this,o
var $async$qU=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)switch(s){case 0:s=3
return A.an(p.cv(0,a),$async$qU)
case 3:o=c
q=A.acB(A.cR(o.buffer,0,null))
s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$qU,r)}}
A.ZB.prototype={
$1(a){if(a==null)throw A.d(A.acp(A.a([A.asu(this.a),A.bj("The asset does not exist or has empty data.")],t.F)))
return a},
$S:226}
A.Rd.prototype={}
A.om.prototype={
ni(){var s=$.QA()
s.a.U(0)
s.b.U(0)},
iB(a){return this.ZR(a)},
ZR(a){var s=0,r=A.a8(t.H),q,p=this
var $async$iB=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)switch(s){case 0:switch(A.ch(J.ba(t.a.a(a),"type"))){case"memoryPressure":p.ni()
break}s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$iB,r)},
On(){var s,r=A.aZ("controller")
r.sbS(new A.oS(new A.a1S(r),null,null,null,t.tI))
s=r.aC()
return new A.oW(s,A.aI(s).h("oW<1>"))},
a0Y(){if(this.r$!=null)return
$.aE()
var s=A.agW("AppLifecycleState.resumed")
if(s!=null)this.qA(s)},
uA(a){return this.RI(a)},
RI(a){var s=0,r=A.a8(t.dR),q,p=this,o
var $async$uA=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)switch(s){case 0:a.toString
o=A.agW(a)
o.toString
p.qA(o)
q=null
s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$uA,r)},
uB(a){return this.RR(a)},
RR(a){var s=0,r=A.a8(t.H)
var $async$uB=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)switch(s){case 0:t.j.a(a.b)
return A.a6(null,r)}})
return A.a7($async$uB,r)},
$idd:1}
A.a1S.prototype={
$0(){var s=0,r=A.a8(t.H),q=this,p,o,n
var $async$$0=A.a9(function(a,b){if(a===1)return A.a5(b,r)
while(true)switch(s){case 0:o=A.aZ("rawLicenses")
n=o
s=2
return A.an($.QA().jC("NOTICES",!1),$async$$0)
case 2:n.sbS(b)
p=q.a
n=J
s=3
return A.an(A.Qo(A.atu(),o.aC(),"parseLicenses",t.N,t.rh),$async$$0)
case 3:n.mE(b,J.alA(p.aC()))
s=4
return A.an(J.alw(p.aC()),$async$$0)
case 4:return A.a6(null,r)}})
return A.a7($async$$0,r)},
$S:43}
A.a6i.prototype={
rY(a,b,c){var s=new A.aq($.ah,t.sB)
$.aE().V3(b,c,A.anr(new A.a6j(new A.bg(s,t.BB))))
return s},
zA(a,b){if(b==null){a=$.Qy().a.j(0,a)
if(a!=null)a.e=null}else $.Qy().K4(a,new A.a6k(b))}}
A.a6j.prototype={
$1(a){var s,r,q,p
try{this.a.cY(0,a)}catch(q){s=A.au(q)
r=A.aG(q)
p=A.bj("during a platform message response callback")
A.dr(new A.bt(s,r,"services library",p,null,!1))}},
$S:18}
A.a6k.prototype={
$2(a,b){return this.Jh(a,b)},
Jh(a,b){var s=0,r=A.a8(t.H),q=1,p,o=[],n=this,m,l,k,j,i,h
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
$S:230}
A.Uj.prototype={}
A.TF.prototype={}
A.TO.prototype={}
A.C1.prototype={}
A.Ul.prototype={}
A.C_.prototype={}
A.TW.prototype={}
A.Ta.prototype={}
A.TX.prototype={}
A.C7.prototype={}
A.BY.prototype={}
A.C4.prototype={}
A.Ch.prototype={}
A.TK.prototype={}
A.U1.prototype={}
A.Tj.prototype={}
A.Tx.prototype={}
A.SV.prototype={}
A.Tn.prototype={}
A.Cc.prototype={}
A.SX.prototype={}
A.U6.prototype={}
A.nB.prototype={}
A.jr.prototype={}
A.lg.prototype={}
A.js.prototype={}
A.rS.prototype={}
A.Wq.prototype={
PH(a){var s,r,q,p,o,n,m,l,k,j
this.d=!0
s=!1
for(n=this.c,m=0;!1;++m){r=n[m]
try{q=r.$1(a)
s=s||q}catch(l){p=A.au(l)
o=A.aG(l)
k=A.bj("while processing a key handler")
j=$.f9()
if(j!=null)j.$1(new A.bt(p,o,"services library",k,null,!1))}}this.d=!1
return s},
GV(a){var s,r,q=this,p=a.a,o=a.b
if(a instanceof A.lg){q.a.l(0,p,o)
s=$.ajZ().j(0,o.a)
if(s!=null){r=q.b
if(r.B(0,s))r.A(0,s)
else r.E(0,s)}}else if(a instanceof A.js)q.a.A(0,p)
return q.PH(a)}}
A.rQ.prototype={
D(){return"KeyDataTransitMode."+this.b}}
A.rR.prototype={
i(a){return"KeyMessage("+A.h(this.a)+")"}}
A.Dx.prototype={
Zu(a){var s,r=this,q=r.d
switch((q==null?r.d=B.Fy:q).a){case 0:return!1
case 1:if(a.c===0&&a.d===0)return!1
s=A.ao6(a)
if(a.f&&r.e.length===0){r.b.GV(s)
r.BJ(A.a([s],t.DG),null)}else r.e.push(s)
return!1}},
BJ(a,b){var s,r,q,p,o=this.a
if(o!=null){s=new A.rR(a,b)
try{o=o.$1(s)
return o}catch(p){r=A.au(p)
q=A.aG(p)
o=A.bj("while processing the key message handler")
A.dr(new A.bt(r,q,"services library",o,null,!1))}}return!1},
x9(a){var s=0,r=A.a8(t.a),q,p=this,o,n,m,l,k,j,i
var $async$x9=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)switch(s){case 0:if(p.d==null){p.d=B.Fx
p.c.a.push(p.gPp())}o=A.apI(t.a.a(a))
if(o instanceof A.hu){n=o.c
m=p.f
if(!n.Kd()){m.E(0,n.gdl())
l=!1}else{m.A(0,n.gdl())
l=!0}}else if(o instanceof A.o1){n=p.f
m=o.c
if(n.B(0,m.gdl())){n.A(0,m.gdl())
l=!1}else l=!0}else l=!0
if(l){p.c.ZL(o)
for(n=p.e,m=n.length,k=p.b,j=!1,i=0;i<n.length;n.length===m||(0,A.Q)(n),++i)j=k.GV(n[i])||j
j=p.BJ(n,o)||j
B.b.U(n)}else j=!0
q=A.aR(["handled",j],t.N,t.z)
s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$x9,r)},
Pq(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.c,d=e.gdl(),c=e.gnw()
e=this.b.a
s=A.n(e).h("b0<1>")
r=A.jw(new A.b0(e,s),s.h("p.E"))
q=A.a([],t.DG)
p=e.j(0,d)
o=$.fG.dy$
n=a.a
if(n==="")n=f
if(a instanceof A.hu)if(p==null){m=new A.lg(d,c,n,o,!1)
r.E(0,d)}else m=new A.rS(d,p,n,o,!1)
else if(p==null)m=f
else{m=new A.js(d,p,f,o,!1)
r.A(0,d)}for(s=this.c.d,l=A.n(s).h("b0<1>"),k=l.h("p.E"),j=r.jk(A.jw(new A.b0(s,l),k)),j=j.ga7(j),i=this.e;j.t();){h=j.gG(j)
if(h.k(0,d))q.push(new A.js(h,c,f,o,!0))
else{g=e.j(0,h)
g.toString
i.push(new A.js(h,g,f,o,!0))}}for(e=A.jw(new A.b0(s,l),k).jk(r),e=e.ga7(e);e.t();){l=e.gG(e)
k=s.j(0,l)
k.toString
i.push(new A.lg(l,k,f,o,!0))}if(m!=null)i.push(m)
B.b.I(i,q)}}
A.Lp.prototype={}
A.XM.prototype={}
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
A.Lq.prototype={}
A.hi.prototype={
i(a){return"MethodCall("+this.a+", "+A.h(this.b)+")"}}
A.u4.prototype={
i(a){var s=this
return"PlatformException("+s.a+", "+A.h(s.b)+", "+A.h(s.c)+", "+A.h(s.d)+")"},
$idg:1}
A.tq.prototype={
i(a){return"MissingPluginException("+A.h(this.a)+")"},
$idg:1}
A.a42.prototype={
ef(a){if(a==null)return null
return B.cL.dV(A.cR(a.buffer,a.byteOffset,a.byteLength))},
bI(a){if(a==null)return null
return A.jB(B.ca.dV(a).buffer,0,null)}}
A.Xh.prototype={
bI(a){if(a==null)return null
return B.h6.bI(B.bI.wL(a))},
ef(a){var s
if(a==null)return a
s=B.h6.ef(a)
s.toString
return B.bI.dW(0,s)}}
A.Xj.prototype={
fe(a){var s=B.bH.bI(A.aR(["method",a.a,"args",a.b],t.N,t.X))
s.toString
return s},
fc(a){var s,r,q,p=null,o=B.bH.ef(a)
if(!t.G.b(o))throw A.d(A.bu("Expected method call Map, got "+A.h(o),p,p))
s=J.aO(o)
r=s.j(o,"method")
q=s.j(o,"args")
if(typeof r=="string")return new A.hi(r,q)
throw A.d(A.bu("Invalid method call: "+A.h(o),p,p))},
FZ(a){var s,r,q,p=null,o=B.bH.ef(a)
if(!t.j.b(o))throw A.d(A.bu("Expected envelope List, got "+A.h(o),p,p))
s=J.aO(o)
if(s.gp(o)===1)return s.j(o,0)
if(s.gp(o)===3)if(typeof s.j(o,0)=="string")r=s.j(o,1)==null||typeof s.j(o,1)=="string"
else r=!1
else r=!1
if(r){r=A.ch(s.j(o,0))
q=A.ci(s.j(o,1))
throw A.d(A.acV(r,s.j(o,2),q,p))}if(s.gp(o)===4)if(typeof s.j(o,0)=="string")if(s.j(o,1)==null||typeof s.j(o,1)=="string")r=s.j(o,3)==null||typeof s.j(o,3)=="string"
else r=!1
else r=!1
else r=!1
if(r){r=A.ch(s.j(o,0))
q=A.ci(s.j(o,1))
throw A.d(A.acV(r,s.j(o,2),q,A.ci(s.j(o,3))))}throw A.d(A.bu("Invalid envelope: "+A.h(o),p,p))},
n3(a){var s=B.bH.bI([a])
s.toString
return s},
jn(a,b,c){var s=B.bH.bI([a,c,b])
s.toString
return s},
Gm(a,b){return this.jn(a,null,b)}}
A.a3T.prototype={
bI(a){var s
if(a==null)return null
s=A.a5w(64)
this.cw(0,s,a)
return s.ij()},
ef(a){var s,r
if(a==null)return null
s=new A.uf(a)
r=this.eN(0,s)
if(s.b<a.byteLength)throw A.d(B.aB)
return r},
cw(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i=null
if(c==null)b.cT(0,0)
else if(A.mv(c))b.cT(0,c?1:2)
else if(typeof c=="number"){b.cT(0,6)
b.fF(8)
s=$.cF()
b.d.setFloat64(0,c,B.a5===s)
b.Of(b.e)}else if(A.mw(c)){s=-2147483648<=c&&c<=2147483647
r=b.d
if(s){b.cT(0,3)
s=$.cF()
r.setInt32(0,c,B.a5===s)
b.lU(b.e,0,4)}else{b.cT(0,4)
s=$.cF()
B.fb.zy(r,0,c,s)}}else if(typeof c=="string"){b.cT(0,7)
s=c.length
q=new Uint8Array(s)
n=0
while(!0){if(!(n<s)){p=i
o=0
break}m=B.c.a9(c,n)
if(m<=127)q[n]=m
else{p=B.ca.dV(B.c.e8(c,n))
o=n
break}++n}if(p!=null){j.dL(b,o+p.length)
l=q.BYTES_PER_ELEMENT
k=A.cT(0,o,B.f.i0(q.byteLength,l),i,i)
b.j0(A.cR(q.buffer,q.byteOffset+0*l,(k-0)*l))
b.j0(p)}else{j.dL(b,s)
b.j0(q)}}else if(t.uo.b(c)){b.cT(0,8)
j.dL(b,c.length)
b.j0(c)}else if(t.fO.b(c)){b.cT(0,9)
s=c.length
j.dL(b,s)
b.fF(4)
b.j0(A.cR(c.buffer,c.byteOffset,4*s))}else if(t.D4.b(c)){b.cT(0,14)
s=c.length
j.dL(b,s)
b.fF(4)
b.j0(A.cR(c.buffer,c.byteOffset,4*s))}else if(t.cE.b(c)){b.cT(0,11)
s=c.length
j.dL(b,s)
b.fF(8)
b.j0(A.cR(c.buffer,c.byteOffset,8*s))}else if(t.j.b(c)){b.cT(0,12)
s=J.aO(c)
j.dL(b,s.gp(c))
for(s=s.ga7(c);s.t();)j.cw(0,b,s.gG(s))}else if(t.G.b(c)){b.cT(0,13)
s=J.aO(c)
j.dL(b,s.gp(c))
s.Z(c,new A.a3U(j,b))}else throw A.d(A.i2(c,i,i))},
eN(a,b){if(b.b>=b.a.byteLength)throw A.d(B.aB)
return this.hQ(b.jR(0),b)},
hQ(a,b){var s,r,q,p,o,n,m,l,k=this
switch(a){case 0:return null
case 1:return!0
case 2:return!1
case 3:s=b.b
r=$.cF()
q=b.a.getInt32(s,B.a5===r)
b.b+=4
return q
case 4:return b.rM(0)
case 6:b.fF(8)
s=b.b
r=$.cF()
q=b.a.getFloat64(s,B.a5===r)
b.b+=8
return q
case 5:case 7:p=k.d3(b)
return B.cL.dV(b.jS(p))
case 8:return b.jS(k.d3(b))
case 9:p=k.d3(b)
b.fF(4)
s=b.a
o=A.agh(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+4*p
return o
case 10:return b.rN(k.d3(b))
case 14:p=k.d3(b)
b.fF(4)
s=b.a
r=s.buffer
s=s.byteOffset+b.b
A.Qd(r,s,p)
o=new Float32Array(r,s,p)
b.b=b.b+4*p
return o
case 11:p=k.d3(b)
b.fF(8)
s=b.a
o=A.agf(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+8*p
return o
case 12:p=k.d3(b)
n=A.aX(p,null,!1,t.X)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.a_(B.aB)
b.b=r+1
n[m]=k.hQ(s.getUint8(r),b)}return n
case 13:p=k.d3(b)
s=t.X
n=A.y(s,s)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.a_(B.aB)
b.b=r+1
r=k.hQ(s.getUint8(r),b)
l=b.b
if(l>=s.byteLength)A.a_(B.aB)
b.b=l+1
n.l(0,r,k.hQ(s.getUint8(l),b))}return n
default:throw A.d(B.aB)}},
dL(a,b){var s,r
if(b<254)a.cT(0,b)
else{s=a.d
if(b<=65535){a.cT(0,254)
r=$.cF()
s.setUint16(0,b,B.a5===r)
a.lU(a.e,0,2)}else{a.cT(0,255)
r=$.cF()
s.setUint32(0,b,B.a5===r)
a.lU(a.e,0,4)}}},
d3(a){var s,r,q=a.jR(0)
switch(q){case 254:s=a.b
r=$.cF()
q=a.a.getUint16(s,B.a5===r)
a.b+=2
return q
case 255:s=a.b
r=$.cF()
q=a.a.getUint32(s,B.a5===r)
a.b+=4
return q
default:return q}}}
A.a3U.prototype={
$2(a,b){var s=this.a,r=this.b
s.cw(0,r,a)
s.cw(0,r,b)},
$S:59}
A.a3X.prototype={
fe(a){var s=A.a5w(64)
B.ad.cw(0,s,a.a)
B.ad.cw(0,s,a.b)
return s.ij()},
fc(a){var s,r,q
a.toString
s=new A.uf(a)
r=B.ad.eN(0,s)
q=B.ad.eN(0,s)
if(typeof r=="string"&&s.b>=a.byteLength)return new A.hi(r,q)
else throw A.d(B.nb)},
n3(a){var s=A.a5w(64)
s.cT(0,0)
B.ad.cw(0,s,a)
return s.ij()},
jn(a,b,c){var s=A.a5w(64)
s.cT(0,1)
B.ad.cw(0,s,a)
B.ad.cw(0,s,c)
B.ad.cw(0,s,b)
return s.ij()},
Gm(a,b){return this.jn(a,null,b)},
FZ(a){var s,r,q,p,o,n
if(a.byteLength===0)throw A.d(B.Fa)
s=new A.uf(a)
if(s.jR(0)===0)return B.ad.eN(0,s)
r=B.ad.eN(0,s)
q=B.ad.eN(0,s)
p=B.ad.eN(0,s)
o=s.b<a.byteLength?A.ci(B.ad.eN(0,s)):null
if(typeof r=="string")n=(q==null||typeof q=="string")&&s.b>=a.byteLength
else n=!1
if(n)throw A.d(A.acV(r,p,A.ci(q),o))
else throw A.d(B.Fb)}}
A.Yt.prototype={
Zl(a,b,c){var s,r,q,p
if(t.yg.b(b)){this.b.A(0,a)
return}s=this.b
r=s.j(0,a)
q=A.arb(c)
if(q==null)q=this.a
if(J.f(r==null?null:t.Ft.a(r.a),q))return
p=q.q1(a)
s.l(0,a,p)
B.S8.fk("activateSystemCursor",A.aR(["device",p.b,"kind",t.Ft.a(p.a).a],t.N,t.z),t.H)}}
A.ts.prototype={}
A.dJ.prototype={
i(a){var s=this.gq3()
return s}}
A.Kj.prototype={
q1(a){throw A.d(A.c_(null))},
gq3(){return"defer"}}
A.Oj.prototype={}
A.jX.prototype={
gq3(){return"SystemMouseCursor("+this.a+")"},
q1(a){return new A.Oj(this,a)},
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return b instanceof A.jX&&b.a===this.a},
gu(a){return B.c.gu(this.a)}}
A.LT.prototype={}
A.j7.prototype={
gmy(){var s,r=$.fG.bb$
r===$&&A.b()
s=r
return s},
ly(a,b){return this.JW(0,b,this.$ti.h("1?"))},
JW(a,b,c){var s=0,r=A.a8(c),q,p=this,o,n
var $async$ly=A.a9(function(d,e){if(d===1)return A.a5(e,r)
while(true)switch(s){case 0:o=p.b
n=o
s=3
return A.an(p.gmy().rY(0,p.a,o.bI(b)),$async$ly)
case 3:q=n.ef(e)
s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$ly,r)},
t3(a){this.gmy().zA(this.a,new A.Rc(this,a))}}
A.Rc.prototype={
$1(a){return this.Jd(a)},
Jd(a){var s=0,r=A.a8(t.yD),q,p=this,o,n
var $async$$1=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)switch(s){case 0:o=p.a.b
n=o
s=3
return A.an(p.b.$1(o.ef(a)),$async$$1)
case 3:q=n.bI(c)
s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$$1,r)},
$S:96}
A.tp.prototype={
gmy(){var s,r=$.fG.bb$
r===$&&A.b()
s=r
return s},
m6(a,b,c,d){return this.SS(a,b,c,d,d.h("0?"))},
SS(a,b,c,d,e){var s=0,r=A.a8(e),q,p=this,o,n,m,l
var $async$m6=A.a9(function(f,g){if(f===1)return A.a5(g,r)
while(true)switch(s){case 0:o=p.b
n=o.fe(new A.hi(a,b))
m=p.a
s=3
return A.an(p.gmy().rY(0,m,n),$async$m6)
case 3:l=g
if(l==null){if(c){q=null
s=1
break}throw A.d(A.aoF("No implementation found for method "+a+" on channel "+m))}q=d.h("0?").a(o.FZ(l))
s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$m6,r)},
lC(a){var s=this.gmy()
s.zA(this.a,new A.Yg(this,a))},
oJ(a,b){return this.R0(a,b)},
R0(a,b){var s=0,r=A.a8(t.yD),q,p=2,o,n=this,m,l,k,j,i,h,g,f,e
var $async$oJ=A.a9(function(c,d){if(c===1){o=d
s=p}while(true)switch(s){case 0:h=n.b
g=h.fc(a)
p=4
e=h
s=7
return A.an(b.$1(g),$async$oJ)
case 7:k=e.n3(d)
q=k
s=1
break
p=2
s=6
break
case 4:p=3
f=o
k=A.au(f)
if(k instanceof A.u4){m=k
k=m.a
i=m.b
q=h.jn(k,m.c,i)
s=1
break}else if(k instanceof A.tq){q=null
s=1
break}else{l=k
h=h.Gm("error",J.dn(l))
q=h
s=1
break}s=6
break
case 3:s=2
break
case 6:case 1:return A.a6(q,r)
case 2:return A.a5(o,r)}})
return A.a7($async$oJ,r)}}
A.Yg.prototype={
$1(a){return this.a.oJ(a,this.b)},
$S:96}
A.jE.prototype={
fk(a,b,c){return this.a_B(a,b,c,c.h("0?"))},
qO(a,b){return this.fk(a,null,b)},
a_B(a,b,c,d){var s=0,r=A.a8(d),q,p=this
var $async$fk=A.a9(function(e,f){if(e===1)return A.a5(f,r)
while(true)switch(s){case 0:q=p.Ll(a,b,!0,c)
s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$fk,r)}}
A.jt.prototype={
D(){return"KeyboardSide."+this.b}}
A.e1.prototype={
D(){return"ModifierKey."+this.b}}
A.ud.prototype={
ga0k(){var s,r,q,p=A.y(t.BK,t.FD)
for(s=0;s<9;++s){r=B.nW[s]
if(this.a_G(r)){q=this.Jv(r)
if(q!=null)p.l(0,r,q)}}return p},
Kd(){return!0}}
A.fB.prototype={}
A.a_b.prototype={
$0(){var s,r,q,p=this.b,o=J.aO(p),n=A.ci(o.j(p,"key")),m=n==null
if(!m){s=n.length
s=s!==0&&s===1}else s=!1
if(s)this.a.a=n
s=A.ci(o.j(p,"code"))
if(s==null)s=""
m=m?"":n
r=A.mu(o.j(p,"location"))
if(r==null)r=0
q=A.mu(o.j(p,"metaState"))
if(q==null)q=0
p=A.mu(o.j(p,"keyCode"))
return new A.o0(s,m,r,q,p==null?0:p)},
$S:234}
A.hu.prototype={}
A.o1.prototype={}
A.a_g.prototype={
ZL(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(a instanceof A.hu){p=a.c
i.d.l(0,p.gdl(),p.gnw())}else if(a instanceof A.o1)i.d.A(0,a.c.gdl())
i.Vy(a)
for(p=i.a,o=A.ax(p,!0,t.vc),n=o.length,m=0;m<n;++m){s=o[m]
try{if(B.b.B(p,s))s.$1(a)}catch(l){r=A.au(l)
q=A.aG(l)
k=A.bj("while processing a raw key listener")
j=$.f9()
if(j!=null)j.$1(new A.bt(r,q,"services library",k,null,!1))}}return!1},
Vy(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=a1.c,f=g.ga0k(),e=t.F3,d=A.y(e,t.lT),c=A.b7(e),b=this.d,a=A.jw(new A.b0(b,A.n(b).h("b0<1>")),e),a0=a1 instanceof A.hu
if(a0)a.E(0,g.gdl())
for(s=null,r=0;r<9;++r){q=B.nW[r]
p=$.ak1()
o=p.j(0,new A.c0(q,B.b9))
if(o==null)continue
if(o.B(0,g.gdl()))s=q
if(f.j(0,q)===B.ch){c.I(0,o)
if(o.ja(0,a.gig(a)))continue}n=f.j(0,q)==null?A.b7(e):p.j(0,new A.c0(q,f.j(0,q)))
if(n==null)continue
for(p=new A.ph(n,n.r),p.c=n.e,m=A.n(p).c;p.t();){l=p.d
if(l==null)l=m.a(l)
k=$.ak0().j(0,l)
k.toString
d.l(0,l,k)}}e=g instanceof A.a_9
j=(e||g instanceof A.o0)&&b.j(0,B.bA)!=null&&!J.f(b.j(0,B.bA),B.dc)
for(a=$.abM(),a=A.ij(a,a.r);a.t();){p=a.d
i=j&&p.k(0,B.bA)
if(!c.B(0,p)&&!i)b.A(0,p)}if(!(g instanceof A.a_7)&&!(g instanceof A.a_a))b.A(0,B.dq)
b.I(0,d)
if(a0&&s!=null&&!b.V(0,g.gdl())){if(e&&g.gdl().k(0,B.bB)||g instanceof A.a_8||g instanceof A.a_6){h=$.abM().j(0,g.gdl())
if(h!=null)b.l(0,g.gdl(),h)}if(g instanceof A.o0&&g.gdl().k(0,B.bB))b.l(0,g.gdl(),g.gnw())}}}
A.c0.prototype={
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return b instanceof A.c0&&b.a===this.a&&b.b==this.b},
gu(a){return A.T(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.MZ.prototype={}
A.MY.prototype={}
A.a_6.prototype={}
A.a_7.prototype={}
A.a_8.prototype={}
A.a_9.prototype={}
A.a_a.prototype={}
A.o0.prototype={
gdl(){var s=this.a,r=B.RJ.j(0,s)
return r==null?new A.i(98784247808+B.c.gu(s)):r},
gnw(){var s,r=this.b,q=B.RL.j(0,r),p=q==null?null:q[this.c]
if(p!=null)return p
s=B.RI.j(0,r)
if(s!=null)return s
if(r.length===1)return new A.e(B.c.a9(r.toLowerCase(),0))
return new A.e(B.c.gu(this.a)+98784247808)},
a_G(a){var s=this
switch(a.a){case 0:return(s.d&4)!==0
case 1:return(s.d&1)!==0
case 2:return(s.d&2)!==0
case 3:return(s.d&8)!==0
case 5:return(s.d&16)!==0
case 4:return(s.d&32)!==0
case 6:return(s.d&64)!==0
case 7:case 8:return!1}},
Jv(a){return B.ch},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.S(b)!==A.A(s))return!1
return b instanceof A.o0&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e},
gu(a){var s=this
return A.T(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.ux.prototype={
ga1r(){var s=this
if(s.c)return new A.bl(s.a,t.m6)
if(s.b==null){s.b=new A.bg(new A.aq($.ah,t.jr),t.Fj)
s.oI()}return s.b.a},
oI(){var s=0,r=A.a8(t.H),q,p=this,o
var $async$oI=A.a9(function(a,b){if(a===1)return A.a5(b,r)
while(true)switch(s){case 0:s=3
return A.an(B.ig.qO("get",t.mE),$async$oI)
case 3:o=b
if(p.b==null){s=1
break}p.Dg(o)
case 1:return A.a6(q,r)}})
return A.a7($async$oI,r)},
Dg(a){var s,r=a==null
if(!r){s=J.ba(a,"enabled")
s.toString
A.pH(s)}else s=!1
this.ZN(r?null:t.Fx.a(J.ba(a,"data")),s)},
ZN(a,b){var s,r,q=this,p=q.c&&b
q.d=p
if(p)$.bG.ax$.push(new A.a0c(q))
s=q.a
if(b){p=q.PC(a)
r=t.N
if(p==null){p=t.X
p=A.y(p,p)}r=new A.ce(p,q,null,"root",A.y(r,t.hp),A.y(r,t.Cm))
p=r}else p=null
q.a=p
q.c=!0
r=q.b
if(r!=null)r.cY(0,p)
q.b=null
if(q.a!=s){q.av()
if(s!=null)s.m()}},
uU(a){return this.Tg(a)},
Tg(a){var s=0,r=A.a8(t.H),q=this,p
var $async$uU=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)switch(s){case 0:p=a.a
switch(p){case"push":q.Dg(t.mE.a(a.b))
break
default:throw A.d(A.c_(p+" was invoked but isn't implemented by "+A.A(q).i(0)))}return A.a6(null,r)}})
return A.a7($async$uU,r)},
PC(a){if(a==null)return null
return t.ym.a(B.ad.ef(A.jB(a.buffer,a.byteOffset,a.byteLength)))},
JO(a){var s=this
s.r.E(0,a)
if(!s.f){s.f=!0
$.bG.ax$.push(new A.a0d(s))}},
BL(){var s,r,q,p,o,n=this
if(!n.f)return
n.f=!1
for(s=n.r,r=A.iP(s,s.r),q=A.n(r).c;r.t();){p=r.d;(p==null?q.a(p):p).w=!1}s.U(0)
o=B.ad.bI(n.a.a)
B.ig.fk("put",A.cR(o.buffer,o.byteOffset,o.byteLength),t.H)},
GF(){if($.bG.ch$)return
this.BL()}}
A.a0c.prototype={
$1(a){this.a.d=!1},
$S:2}
A.a0d.prototype={
$1(a){return this.a.BL()},
$S:2}
A.ce.prototype={
gme(){var s=J.yQ(this.a,"c",new A.a09())
s.toString
return t.mE.a(s)},
gi6(){var s=J.yQ(this.a,"v",new A.a0a())
s.toString
return t.mE.a(s)},
a16(a,b,c){var s=this,r=J.dA(s.gi6(),b),q=c.h("0?").a(J.i0(s.gi6(),b))
if(J.fa(s.gi6()))J.i0(s.a,"v")
if(r)s.km()
return q},
Xj(a,b){var s,r,q,p,o=this,n=o.f
if(n.V(0,a)||!J.dA(o.gme(),a)){n=t.N
s=new A.ce(A.y(n,t.X),null,null,a,A.y(n,t.hp),A.y(n,t.Cm))
o.hu(s)
return s}r=t.N
q=o.c
p=J.ba(o.gme(),a)
p.toString
s=new A.ce(t.mE.a(p),q,o,a,A.y(r,t.hp),A.y(r,t.Cm))
n.l(0,a,s)
return s},
hu(a){var s=this,r=a.d
if(r!==s){if(r!=null)r.p9(a)
a.d=s
s.AA(a)
if(a.c!=s.c)s.Dr(a)}},
PR(a){this.p9(a)
a.d=null
if(a.c!=null){a.vh(null)
a.F1(this.gDq())}},
km(){var s,r=this
if(!r.w){r.w=!0
s=r.c
if(s!=null)s.JO(r)}},
Dr(a){a.vh(this.c)
a.F1(this.gDq())},
vh(a){var s=this,r=s.c
if(r==a)return
if(s.w)if(r!=null)r.r.A(0,s)
s.c=a
if(s.w&&a!=null){s.w=!1
s.km()}},
p9(a){var s,r,q,p=this
if(J.f(p.f.A(0,a.e),a)){J.i0(p.gme(),a.e)
s=p.r
r=s.j(0,a.e)
if(r!=null){q=J.bF(r)
p.BW(q.eO(r))
if(q.gP(r))s.A(0,a.e)}if(J.fa(p.gme()))J.i0(p.a,"c")
p.km()
return}s=p.r
q=s.j(0,a.e)
if(q!=null)J.i0(q,a)
q=s.j(0,a.e)
q=q==null?null:J.fa(q)
if(q===!0)s.A(0,a.e)},
AA(a){var s=this
if(s.f.V(0,a.e)){J.kr(s.r.bG(0,a.e,new A.a08()),a)
s.km()
return}s.BW(a)
s.km()},
BW(a){this.f.l(0,a.e,a)
J.eb(this.gme(),a.e,a.a)},
F2(a,b){var s,r,q=this.f
q=q.gaY(q)
s=this.r
s=s.gaY(s)
r=q.Zg(0,new A.i9(s,new A.a0b(),A.n(s).h("i9<p.E,ce>")))
J.mE(b?A.ax(r,!1,A.n(r).h("p.E")):r,a)},
F1(a){return this.F2(a,!1)},
a1d(a){var s,r=this
if(a===r.e)return
s=r.d
if(s!=null)s.p9(r)
r.e=a
s=r.d
if(s!=null)s.AA(r)},
m(){var s,r=this
r.F2(r.gPQ(),!0)
r.f.U(0)
r.r.U(0)
s=r.d
if(s!=null)s.p9(r)
r.d=null
r.vh(null)
r.x=!0},
i(a){return"RestorationBucket(restorationId: "+this.e+", owner: "+A.h(this.b)+")"}}
A.a09.prototype={
$0(){var s=t.X
return A.y(s,s)},
$S:98}
A.a0a.prototype={
$0(){var s=t.X
return A.y(s,s)},
$S:98}
A.a08.prototype={
$0(){return A.a([],t.oy)},
$S:237}
A.a0b.prototype={
$1(a){return a},
$S:238}
A.R_.prototype={}
A.hB.prototype={
Es(){var s,r,q,p,o=this,n=o.a
n=n==null?null:n.a
s=o.e
s=s==null?null:s.a
r=o.f.D()
q=o.r.D()
p=o.c
p=p==null?null:p.D()
return A.aR(["systemNavigationBarColor",n,"systemNavigationBarDividerColor",null,"systemStatusBarContrastEnforced",o.w,"statusBarColor",s,"statusBarBrightness",r,"statusBarIconBrightness",q,"systemNavigationBarIconBrightness",p,"systemNavigationBarContrastEnforced",o.d],t.N,t.z)},
i(a){return"SystemUiOverlayStyle("+this.Es().i(0)+")"},
gu(a){var s=this
return A.T(s.a,s.b,s.d,s.e,s.f,s.r,s.w,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s,r=this
if(b==null)return!1
if(J.S(b)!==A.A(r))return!1
if(b instanceof A.hB)if(J.f(b.a,r.a))if(J.f(b.e,r.e))if(b.r===r.r)if(b.f===r.f)s=b.c==r.c
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.a4e.prototype={
$0(){if(!J.f($.oz,$.add)){B.bW.fk("SystemChrome.setSystemUIOverlayStyle",$.oz.Es(),t.H)
$.add=$.oz}$.oz=null},
$S:0}
A.vp.prototype={
D(){return"SystemSoundType."+this.b}}
A.a4m.prototype={
W(a,b){return new A.KF(b,this)}}
A.RW.prototype={
fw(a){var s,r,q,p,o,n=a.a
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
p=null}return new A.aW(A.ah5(s,p,o).b,B.A)},
fz(a){var s,r,q,p,o,n=a.a
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
q=null}o=A.ah5(s,q,p)
return new A.aW(r-(o.a.length-o.c),B.K)}}
A.a5t.prototype={
fw(a){return new A.aW(this.a.b.lu(a).a,B.A)},
fz(a){return new A.aW(this.a.b.lu(a).b,B.K)}}
A.XQ.prototype={
fw(a){return new A.aW(this.a.z6(a).a,B.A)},
fz(a){return new A.aW(this.a.z6(a).b,B.K)}}
A.SQ.prototype={
fw(a){return B.cK},
fz(a){return new A.aW(this.a.length,B.K)}}
A.a5r.prototype={
fw(a){var s,r=a.a,q=this.a,p=q.length
if(r<=p)r=r===p&&a.b===B.A
else r=!0
if(r)a=new A.aW(p,B.K)
s=a.a
if(s<=0)return B.cK
if(a.b===B.A&&!A.a4O(B.c.am(q,s)))return a
for(;--s,s>=0;)if(!A.a4O(B.c.am(q,s)))return new A.aW(s+1,B.K)
return B.cK},
fz(a){var s,r=a.a,q=this.a,p=q.length
if(r>=p)return new A.aW(p,B.K)
if(r>=0)r=r===0&&a.b===B.K
else r=!0
if(r)a=B.cK
s=a.a
if(a.b===B.K&&!A.a4O(B.c.am(q,s-1)))return a
for(;s<p;++s)if(!A.a4O(B.c.am(q,s)))return new A.aW(s,B.A)
return new A.aW(p,B.K)}}
A.KF.prototype={
fw(a){return this.a.fw(this.b.fw(a))},
fz(a){return this.a.fz(this.b.fz(a))}}
A.GM.prototype={
B3(a){if(this.a)switch(a.b.a){case 0:return new A.aW(a.a,B.A)
case 1:return new A.aW(a.a+1,B.K)}else switch(a.b.a){case 0:return new A.aW(a.a-1,B.A)
case 1:return new A.aW(a.a,B.K)}},
fw(a){return this.B3(a)},
fz(a){return this.B3(a)}}
A.IF.prototype={
i(a){var s,r,q=this,p=", isDirectional: "
if(!q.gjB())return"TextSelection.invalid"
s=""+q.c
r=""+q.f
return q.a===q.b?"TextSelection.collapsed(offset: "+s+", affinity: "+q.e.i(0)+p+r+")":"TextSelection(baseOffset: "+s+", extentOffset: "+q.d+p+r+")"},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof A.IF))return!1
if(!r.gjB())return!b.gjB()
if(b.c===r.c)if(b.d===r.d)s=(r.a!==r.b||b.e===r.e)&&b.f===r.f
else s=!1
else s=!1
return s},
gu(a){var s,r=this
if(!r.gjB())return A.T(-B.f.gu(1),-B.f.gu(1),A.fA(B.A),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)
s=r.a===r.b?A.fA(r.e):A.fA(B.A)
return A.T(B.f.gu(r.c),B.f.gu(r.d),s,B.nl.gu(r.f),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.HS.prototype={
D(){return"SelectionChangedCause."+this.b}}
A.ID.prototype={
gOX(){var s=this.c
s===$&&A.b()
return s},
oR(a){return this.T3(a)},
T3(a){var s=0,r=A.a8(t.z),q,p=2,o,n=this,m,l,k,j,i
var $async$oR=A.a9(function(b,c){if(b===1){o=c
s=p}while(true)switch(s){case 0:p=4
s=7
return A.an(n.uG(a),$async$oR)
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
A.dr(new A.bt(m,l,"services library",k,new A.a4N(a),!1))
throw i
s=6
break
case 3:s=2
break
case 6:case 1:return A.a6(q,r)
case 2:return A.a5(o,r)}})
return A.a7($async$oR,r)},
uG(a){return this.Sx(a)},
Sx(a){var s=0,r=A.a8(t.z),q,p=this,o,n,m,l,k,j
var $async$uG=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)switch(s){case 0:j=a.a
if(j==="TextInputClient.focusElement"){p.f.j(0,J.ba(t.j.a(a.b),0))
s=1
break}else if(j==="TextInputClient.requestElementsInRect"){o=J.ks(t.j.a(a.b),t.fY)
n=A.n(o).h("aL<W.E,L>")
m=p.f
l=A.n(m).h("b0<1>")
k=l.h("di<p.E,B<@>>")
q=A.ax(new A.di(new A.aF(new A.b0(m,l),new A.a4K(p,A.ax(new A.aL(o,new A.a4L(),n),!0,n.h("bk.E"))),l.h("aF<p.E>")),new A.a4M(p),k),!0,k.h("p.E"))
s=1
break}else if(j==="TextInputClient.scribbleInteractionBegan"){s=1
break}else if(j==="TextInputClient.scribbleInteractionFinished"){s=1
break}s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$uG,r)}}
A.a4N.prototype={
$0(){var s=null
return A.a([A.jd("call",this.a,!0,B.b7,s,!1,s,s,B.aA,s,!1,!0,!0,B.bm,s,t.fw)],t.F)},
$S:14}
A.a4L.prototype={
$1(a){return a},
$S:240}
A.a4K.prototype={
$1(a){this.a.f.j(0,a)
return!1},
$S:64}
A.a4M.prototype={
$1(a){var s=this.a.f.j(0,a),r=s.gw7(s)
s=[a]
B.b.I(s,[r.gh4(r),r.gyI(r),r.gbd(r),r.gbF(r)])
return s},
$S:241}
A.vA.prototype={}
A.Mj.prototype={}
A.Px.prototype={}
A.aas.prototype={
$1(a){this.a.sbS(a)
return!1},
$S:35}
A.aD.prototype={}
A.bf.prototype={
f4(a){this.b=a},
hJ(a,b){this.gqP()
return!0},
gqP(){return!0},
pX(a){return!0},
Wn(a){var s=this.a
s.b=!0
s.a.push(a)
return null},
In(a){return this.a.A(0,a)}}
A.kL.prototype={}
A.kE.prototype={
cK(a){return this.c.$1(a)}}
A.QI.prototype={
Hp(a,b,c){if(a instanceof A.kL)return a.l9(b,c)
else return a.cK(b)}}
A.i1.prototype={
ap(){return new A.vX(A.b7(t.nT),new A.N(),B.l)}}
A.QK.prototype={
$1(a){var s=a.f
s.toString
t.ke.a(s)
return!1},
$S:34}
A.QN.prototype={
$1(a){var s,r=this,q=a.f
q.toString
s=A.abY(t.ke.a(q),r.b,r.d)
if(s!=null){r.c.A_(a,null)
r.a.a=s
return!0}return!1},
$S:34}
A.QL.prototype={
$1(a){var s,r=a.f
r.toString
s=A.abY(t.ke.a(r),this.b,this.c)
if(s!=null){this.a.a=s
return!0}return!1},
$S:34}
A.QO.prototype={
$1(a){var s,r,q=this,p=a.f
p.toString
s=q.b
r=A.abY(t.ke.a(p),s,q.d)
p=r!=null
if(p&&r.hJ(0,s))q.a.a=A.aeT(a).Hp(r,s,q.c)
return p},
$S:34}
A.vX.prototype={
aD(){this.aV()
this.Ey()},
QT(a){this.az(new A.a5x(this))},
Ey(){var s,r,q,p,o=this,n=o.a.d
n=n.gaY(n)
s=A.jw(n,A.n(n).h("p.E"))
r=o.d.jk(s)
n=o.d
n.toString
q=s.jk(n)
for(n=r.ga7(r),p=o.gCg();n.t();)n.gG(n).In(p)
for(n=q.ga7(q);n.t();)n.gG(n).Wn(p)
o.d=s},
b_(a){this.bt(a)
this.Ey()},
m(){var s,r,q,p,o=this
o.aN()
for(s=o.d,s=A.iP(s,s.r),r=o.gCg(),q=A.n(s).c;s.t();){p=s.d;(p==null?q.a(p):p).In(r)}o.d=null},
L(a){var s=this.a
return new A.vW(null,s.d,this.e,s.e,null)}}
A.a5x.prototype={
$0(){this.a.e=new A.N()},
$S:0}
A.vW.prototype={
bQ(a){var s
if(this.w===a.w)s=!A.abq(a.r,this.r)
else s=!0
return s}}
A.J8.prototype={
cK(a){a.a2k()
return null}}
A.BS.prototype={
pX(a){return this.c},
cK(a){}}
A.mF.prototype={}
A.mV.prototype={}
A.h1.prototype={}
A.BQ.prototype={}
A.lC.prototype={}
A.GK.prototype={
hJ(a,b){var s,r,q,p,o,n=$.ac.H$.f.f
if(n==null||n.e==null)return!1
for(s=t.r,r=0;r<2;++r){q=B.FY[r]
p=n.e
p.toString
o=A.ac_(p,q,s)
if(o!=null&&o.hJ(0,q)){this.c=o
this.d=q
return!0}}return!1},
cK(a){var s,r=this.c
r===$&&A.b()
s=this.d
s===$&&A.b()
r.cK(s)}}
A.Md.prototype={
ST(a,b,c){var s
a.f4(this.gjh())
s=A.n(this).h("kL<1>").b(a)?a.l9(b,c):a.cK(b)
a.f4(null)
return s},
l9(a,b){var s=this,r=A.abZ(s.gqW(),A.n(s).c)
return r==null?s.a_A(a,s.b,b):s.ST(r,a,b)},
cK(a){return this.l9(a,null)},
gqP(){var s=this,r=A.ac_(s.gqW(),null,A.n(s).c)
if(r!=null){r.f4(s.gjh())
r.gqP()
r.f4(null)}else s.gjh().gqP()
return!0},
hJ(a,b){var s,r=this,q=A.abZ(r.gqW(),A.n(r).c),p=q==null
if(!p)q.f4(r.gjh())
s=(p?r.gjh():q).hJ(0,b)
if(!p)q.f4(null)
return s},
pX(a){var s,r=this,q=A.abZ(r.gqW(),A.n(r).c),p=q==null
if(!p)q.f4(r.gjh())
s=(p?r.gjh():q).pX(a)
if(!p)q.f4(null)
return s}}
A.x0.prototype={
a_A(a,b,c){var s=this.e
if(b==null)return s.cK(a)
else return s.cK(a)},
gjh(){return this.e},
gqW(){return this.f}}
A.Jf.prototype={}
A.Je.prototype={}
A.Ll.prototype={}
A.yl.prototype={
f4(a){this.Kv(a)
this.e.f4(a)}}
A.q0.prototype={
aA(a){var s=new A.ul(this.e,!0,null,A.am(),this.$ti.h("ul<1>"))
s.aB()
s.saJ(null)
return s},
aE(a,b){b.sn(0,this.e)
b.sKh(!0)}}
A.vU.prototype={
ap(){return new A.y5(B.l)}}
A.y5.prototype={
gSH(){var s,r
$.ac.toString
s=$.aE()
if(s.gwn()!=="/"){$.ac.toString
s=s.gwn()}else{r=this.a.ax
$.ac.toString
s=s.gwn()
s=s}return s},
aD(){var s=this
s.aV()
s.W0()
$.ac.toString
s.r=s.vg($.aE().a.f,s.a.fy)
$.ac.ae$.push(s)},
b_(a){this.bt(a)
this.ES(a)},
m(){B.b.A($.ac.ae$,this)
var s=this.d
if(s!=null)s.m()
this.aN()},
Bi(){var s=this.d
if(s!=null)s.m()
this.e=this.d=null},
ES(a){var s,r=this
r.a.toString
if(r.gF0()){r.Bi()
if(r.f==null||r.a.c!=a.c){s=r.a.c
r.f=s==null?new A.jk(r,t.yh):s}}else{r.Bi()
r.f=null}},
W0(){return this.ES(null)},
gF0(){var s=this.a
if(s.Q==null){s=s.as
s=s==null?null:s.gbK(s)
s=s===!0||this.a.d!=null||!1}else s=!0
return s},
Tt(a){var s,r=this,q=a.a,p=q==="/"&&r.a.Q!=null?new A.a9R(r):r.a.as.j(0,q)
if(p!=null)return r.a.f.$1$2(a,p,t.z)
s=r.a.d
if(s!=null)return s.$1(a)
return null},
TH(a){return this.a.at.$1(a)},
ii(){var s=0,r=A.a8(t.y),q,p=this,o,n
var $async$ii=A.a9(function(a,b){if(a===1)return A.a5(b,r)
while(true)switch(s){case 0:p.a.toString
o=p.f
n=o==null?null:o.gbi()
if(n==null){q=!1
s=1
break}q=n.HN()
s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$ii,r)},
mV(a){return this.Yz(a)},
Yz(a){var s=0,r=A.a8(t.y),q,p=this,o,n
var $async$mV=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)switch(s){case 0:p.a.toString
o=p.f
n=o==null?null:o.gbi()
if(n==null){q=!1
s=1
break}o=n.vk(a,null,t.X)
o.toString
o=A.ahL(o,B.BX,!1,null)
n.e.push(o)
n.uj()
n.AP(o.a)
q=!0
s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$mV,r)},
vg(a,b){this.a.toString
return A.att(a,b)},
ws(a){var s=this,r=s.vg(a,s.a.fy)
if(!r.k(0,s.r))s.az(new A.a9U(s,r))},
L(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g={}
g.a=null
s=i.a
s.toString
if(i.gF0()){s=i.f
r=i.gSH()
q=i.a
p=q.e==null?A.auz():new A.a9S(i)
o=q.ay
o.toString
g.a=A.afC(!0,new A.tD(r,i.gTs(),i.gTG(),o,"nav",p,!0,s),"Navigator Scope",h,h)
s=q}else{s=i.a
s.toString}g.b=null
n=new A.fX(new A.a9T(g,i),h)
g.b=n
n=A.qS(n,h,B.cJ,!0,s.cy,h,h,B.aP)
g.b=n
s=$.ar3
if(s)m=new A.Gq(15,!1,!1,h)
else m=h
if(m!=null)g.b=A.lV(B.bj,A.a([n,A.GG(h,m,h,h,0,0,0,h)],t.E),B.a9,B.bC)
s=i.a
r=s.CW
s=s.db
s=A.aY(255,s.gn(s)>>>16&255,s.gn(s)>>>8&255,s.gn(s)&255)
g=g.b
l=i.vg(A.a([i.a.dx],t.as),i.a.fy)
q=t.eu
p=A.a([],q)
B.b.I(p,i.a.dy)
p.push(B.DH)
q=A.a(p.slice(0),q)
k=new A.t2(l,q,new A.IN(r,s,g,h),h)
A.d6(a)
g=i.a
j=new A.wL(k,h)
k=j
g=g.p3
s=A.ar2()
r=A.nE($.akv(),t.n,t.nT)
q=t.B8
p=t.dc
r.l(0,B.BF,new A.x0(new A.oc(new A.bd(A.a([],q),p)),a,!1,!1,!1,!1,new A.bd(A.a([],q),p),t.uq.h("x0<bf.T>")))
return new A.uA(new A.v1(A.ad7(new A.BI(A.QJ(r,A.afD(new A.Iy(new A.v2(k,h),h),new A.ug(A.y(t.j5,t.uJ)))),h),"<Default WidgetsApp Shortcuts>",s),h),g,h)}}
A.a9R.prototype={
$1(a){var s=this.a.a.Q
s.toString
return s},
$S:13}
A.a9U.prototype={
$0(){this.a.r=this.b},
$S:0}
A.a9S.prototype={
$2(a,b){return this.a.a.e.$1(b)},
$S:112}
A.a9T.prototype={
$1(a){return this.b.a.ch.$2(a,this.a.a)},
$S:13}
A.Q8.prototype={}
A.mN.prototype={
ap(){return new A.w1(B.l)}}
A.w1.prototype={
aD(){this.aV()
this.ED()},
b_(a){this.bt(a)
this.ED()},
ED(){this.e=new A.cx(this.gOi(),this.a.c,null,t.dm)},
m(){var s,r,q=this.d
if(q!=null)for(q=A.ij(q,q.r);q.t();){s=q.d
r=this.d.j(0,s)
r.toString
s.F(0,r)}this.aN()},
Oj(a){var s,r=this,q=a.a,p=r.d
if(p==null)p=r.d=A.y(t.yF,t.M)
p.l(0,q,r.Ps(q))
p=r.d.j(0,q)
p.toString
q.S(0,p)
if(!r.f){r.f=!0
s=r.C2()
if(s!=null)r.EO(s)
else $.bG.ax$.push(new A.a5M(r))}return!1},
C2(){var s={},r=this.c
r.toString
s.a=null
r.aP(new A.a5R(s))
return t.ot.a(s.a)},
EO(a){var s,r
this.c.toString
s=this.f
r=this.e
r===$&&A.b()
a.AY(t.CR.a(A.ao4(r,s)))},
Ps(a){return new A.a5Q(this,a)},
L(a){var s=this.f,r=this.e
r===$&&A.b()
return new A.rP(s,r,null)}}
A.a5M.prototype={
$1(a){var s,r=this.a
if(r.c==null)return
s=r.C2()
s.toString
r.EO(s)},
$S:2}
A.a5R.prototype={
$1(a){this.a.a=a},
$S:4}
A.a5Q.prototype={
$0(){var s=this.a
s.d.A(0,this.b)
if(s.d.a===0)if($.bG.CW$.a<3)s.az(new A.a5O(s))
else{s.f=!1
A.f7(new A.a5P(s))}},
$S:0}
A.a5O.prototype={
$0(){this.a.f=!1},
$S:0}
A.a5P.prototype={
$0(){var s=this.a
if(s.c!=null&&s.d.a===0)s.az(new A.a5N(s))},
$S:0}
A.a5N.prototype={
$0(){},
$S:0}
A.lf.prototype={}
A.Dw.prototype={}
A.mO.prototype={
oy(){var s=new A.Dw($.bq())
this.fY$=s
this.c.cD(new A.lf(s))},
nZ(){var s,r=this
if(r.grG()){if(r.fY$==null)r.oy()}else{s=r.fY$
if(s!=null){s.av()
s.dr()
r.fY$=null}}},
L(a){if(this.grG()&&this.fY$==null)this.oy()
return B.a_3}}
A.M4.prototype={
L(a){throw A.d(A.rr("Widgets that mix AutomaticKeepAliveClientMixin into their State must call super.build() but must ignore the return value of the superclass."))}}
A.P0.prototype={
zv(a,b){},
le(a){A.ahQ(this,new A.a9G(this,a))}}
A.a9G.prototype={
$1(a){var s=a.z
if(s!=null&&s.B(0,this.a))a.b3()},
$S:4}
A.a9F.prototype={
$1(a){A.ahQ(a,this.a)},
$S:4}
A.P1.prototype={
bH(a){var s=A.h7(t.h,t.X)
return new A.P0(s,this,B.a2)}}
A.ez.prototype={
bQ(a){return this.w!==a.w}}
A.nP.prototype={
aA(a){var s=this.e
s=new A.Hd(B.d.b1(A.Qn(s,0,1)*255),s,!1,null,A.am())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.slh(0,this.e)
b.spI(!1)}}
A.qN.prototype={
aA(a){var s=new A.H1(this.e,this.f,this.r,!1,!1,null,A.am())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.srf(this.e)
b.sGJ(this.f)
b.srl(this.r)
b.ca=b.bq=!1},
mX(a){a.srf(null)
a.sGJ(null)}}
A.mZ.prototype={
aA(a){var s=new A.GZ(null,this.f,null,A.am())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.smE(null)
b.spU(this.f)},
mX(a){a.smE(null)}}
A.zu.prototype={
aA(a){var s=new A.GY(this.e,this.f,null,A.am())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.smE(this.e)
b.spU(this.f)},
mX(a){a.smE(null)}}
A.Gw.prototype={
aA(a){var s=this,r=new A.Hg(s.e,s.r,s.w,s.y,s.x,null,s.f,null,A.am())
r.aB()
r.saJ(null)
return r},
aE(a,b){var s=this
b.scP(0,s.e)
b.spU(s.f)
b.sWX(0,s.r)
b.shA(0,s.w)
b.saq(0,s.x)
b.sfA(0,s.y)}}
A.Gx.prototype={
aA(a){var s=this,r=new A.Hh(s.r,s.x,s.w,s.e,s.f,null,A.am())
r.aB()
r.saJ(null)
return r},
aE(a,b){var s=this
b.smE(s.e)
b.spU(s.f)
b.shA(0,s.r)
b.saq(0,s.w)
b.sfA(0,s.x)}}
A.oJ.prototype={
aA(a){var s=this,r=A.dF(a),q=new A.Hq(s.w,null,A.am())
q.aB()
q.saJ(null)
q.sbh(0,s.e)
q.sdU(s.r)
q.sbA(r)
q.sl4(s.x)
q.sI_(0,null)
return q},
aE(a,b){var s=this
b.sbh(0,s.e)
b.sI_(0,null)
b.sdU(s.r)
b.sbA(A.dF(a))
b.bq=s.w
b.sl4(s.x)}}
A.CI.prototype={
aA(a){var s=new A.um(this.e,this.f,A.dF(a),B.J,null,A.am())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.swX(this.e)
b.sdU(this.f)
b.sbA(A.dF(a))
if(B.J!==b.dA){b.dA=B.J
b.aj()
b.aX()}}}
A.D_.prototype={
aA(a){var s=new A.H6(this.e,this.f,null,A.am())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.sa1L(this.e)
b.O=this.f}}
A.hn.prototype={
aA(a){var s=new A.He(this.e,A.dF(a),null,A.am())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.sd2(0,this.e)
b.sbA(A.dF(a))}}
A.ku.prototype={
aA(a){var s=new A.Hj(this.f,this.r,this.e,A.dF(a),null,A.am())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.sdU(this.e)
b.sa1X(this.f)
b.sa_6(this.r)
b.sbA(A.dF(a))}}
A.j8.prototype={}
A.qO.prototype={
aA(a){var s=new A.H2(this.e,null,A.am())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.swp(this.e)}}
A.rU.prototype={
mv(a){var s,r,q=a.e
q.toString
t.DU.a(q)
s=this.f
if(q.e!==s){q.e=s
r=a.c
if(r instanceof A.w)r.a3()}}}
A.qM.prototype={
aA(a){var s=new A.H0(this.e,0,null,null,A.am())
s.aB()
s.I(0,null)
return s},
aE(a,b){b.swp(this.e)}}
A.v6.prototype={
aA(a){return A.agF(A.mR(this.f,this.e))},
aE(a,b){b.sFg(A.mR(this.f,this.e))},
bP(){var s,r=this,q=r.e
if(q===1/0&&r.f===1/0)s="SizedBox.expand"
else s=q===0&&r.f===0?"SizedBox.shrink":"SizedBox"
q=r.a
return q==null?s:s+"-"+q.i(0)}}
A.ff.prototype={
aA(a){return A.agF(this.e)},
aE(a,b){b.sFg(this.e)}}
A.DE.prototype={
aA(a){var s=new A.H9(this.e,this.f,null,A.am())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.sa0d(0,this.e)
b.sa0a(0,this.f)}}
A.tL.prototype={
aA(a){var s=new A.Hc(this.e,null,A.am())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.sr3(this.e)},
bH(a){return new A.Ma(this,B.a2)}}
A.Ma.prototype={}
A.z0.prototype={
aA(a){var s=new A.GW(this.e,null,A.am())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.sWN(0,this.e)}}
A.vg.prototype={
aA(a){var s=A.dF(a)
s=new A.us(this.e,s,this.r,this.w,A.am(),0,null,null,A.am())
s.aB()
s.I(0,null)
return s},
aE(a,b){var s
b.sdU(this.e)
s=A.dF(a)
b.sbA(s)
s=this.r
if(b.ae!==s){b.ae=s
b.a3()}s=this.w
if(s!==b.aT){b.aT=s
b.aj()
b.aX()}}}
A.lA.prototype={
mv(a){var s,r,q,p=this,o=a.e
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
if(q instanceof A.w)q.a3()}}}
A.GH.prototype={
L(a){var s,r,q=this,p=null,o=a.a1(t.I)
o.toString
s=q.c
switch(o.w.a){case 0:r=p
break
case 1:r=s
s=p
break
default:s=p
r=s}return A.GG(q.f,q.x,p,p,r,s,q.d,q.r)}}
A.rm.prototype={
gTl(){switch(this.e.a){case 0:return!0
case 1:var s=this.w
return s===B.b8||s===B.En}},
rL(a){var s=this.x
s=this.gTl()?A.dF(a):null
return s},
aA(a){var s=this
return A.apP(B.J,s.w,s.e,s.f,s.r,s.z,s.rL(a),s.y)},
aE(a,b){var s=this,r=s.e
if(b.K!==r){b.K=r
b.a3()}r=s.f
if(b.q!==r){b.q=r
b.a3()}r=s.r
if(b.H!==r){b.H=r
b.a3()}r=s.w
if(b.ao!==r){b.ao=r
b.a3()}r=s.rL(a)
if(b.ae!=r){b.ae=r
b.a3()}r=s.y
if(b.aT!==r){b.aT=r
b.a3()}if(B.J!==b.c9){b.c9=B.J
b.aj()
b.aX()}}}
A.Hx.prototype={}
A.zA.prototype={}
A.CM.prototype={
mv(a){var s,r,q,p=a.e
p.toString
t.uc.a(p)
s=this.f
if(p.e!==s){p.e=s
r=!0}else r=!1
s=this.r
if(p.f!==s){p.f=s
r=!0}if(r){q=a.c
if(q instanceof A.w)q.a3()}}}
A.CC.prototype={}
A.Hs.prototype={
aA(a){var s,r,q,p=this,o=null,n=p.e,m=p.r
if(m==null){m=a.a1(t.I)
m.toString
m=m.w}s=p.x
r=A.acJ(a)
q=s===B.c3?"\u2026":o
s=new A.uo(A.a4Q(q,r,p.z,p.as,n,p.f,m,p.ax,p.y,p.at),p.w,s,p.ch,0,o,o,A.am())
s.aB()
s.I(0,o)
s.uh(n)
s.snO(p.ay)
return s},
aE(a,b){var s,r=this
b.srw(0,r.e)
b.syA(0,r.f)
s=r.r
if(s==null){s=a.a1(t.I)
s.toString
s=s.w}b.sbA(s)
b.sKj(r.w)
b.sa0B(0,r.x)
b.syB(r.y)
b.sxC(r.z)
b.sKt(r.as)
b.syC(r.at)
b.sIJ(r.ax)
s=A.acJ(a)
b.sxx(0,s)
b.snO(r.ay)
b.sJU(r.ch)}}
A.a0f.prototype={
$1(a){return!0},
$S:38}
A.GP.prototype={
aA(a){var s=this,r=s.d
r=r==null?null:r.cr(0)
r=new A.H7(r,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.CW,!1,null,!1,A.am())
r.aB()
r.VR()
return r},
aE(a,b){var s=this,r=s.d
b.sh0(0,r==null?null:r.cr(0))
b.ao=s.e
b.sbd(0,s.f)
b.sbF(0,s.r)
b.sJL(0,s.w)
b.saq(0,s.x)
b.slh(0,s.y)
b.sXu(s.Q)
b.swX(s.as)
b.sdU(s.at)
b.sa1h(0,s.ax)
b.sX8(s.ay)
b.sa08(!1)
b.sbA(null)
b.sxm(s.CW)
b.sxn(!1)
b.sl4(s.z)},
mX(a){a.sh0(0,null)}}
A.DF.prototype={
aA(a){var s=this,r=null,q=new A.Hi(s.e,r,s.r,r,s.x,s.y,r,r,s.as,s.at,r,A.am())
q.aB()
q.saJ(r)
return q},
aE(a,b){var s=this
b.cs=s.e
b.bp=null
b.af=s.r
b.aW=null
b.aQ=s.x
b.bv=s.y
b.bM=b.dw=null
b.ah=s.as
b.v=s.at}}
A.FH.prototype={
aA(a){var s=this,r=new A.Hb(!0,s.e,s.f,s.r,s.w,B.au,null,A.am())
r.aB()
r.saJ(null)
return r},
aE(a,b){var s,r=this
b.bp=r.e
b.af=r.f
b.aW=r.r
s=r.w
if(!b.aQ.k(0,s)){b.aQ=s
b.aj()}if(b.v!==B.au){b.v=B.au
b.aj()}}}
A.fC.prototype={
aA(a){var s=new A.Hl(null,A.am())
s.aB()
s.saJ(null)
return s}}
A.ha.prototype={
aA(a){var s=new A.un(this.e,this.f,null,A.am())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.sHb(this.e)
b.sxg(this.f)}}
A.yR.prototype={
aA(a){var s=new A.uj(!1,null,null,A.am())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.sF6(!1)
b.sxg(null)}}
A.uX.prototype={
aA(a){var s=this,r=new A.uq(s.e,s.f,s.r,!1,s.Cd(a),null,A.am())
r.aB()
r.saJ(null)
r.EA(r.v)
return r},
Cd(a){var s,r=this.e,q=r.p4
if(q!=null)return q
if(r.fx==null){r=r.p2!=null
s=r}else s=!0
if(!s)return null
return A.dF(a)},
aE(a,b){var s=this
b.sXG(s.f)
b.sYZ(s.r)
b.sYX(!1)
b.sIa(s.e)
b.sbA(s.Cd(a))}}
A.FC.prototype={
aA(a){var s=new A.Ha(null,A.am())
s.aB()
s.saJ(null)
return s}}
A.ze.prototype={
aA(a){var s=new A.GX(!0,null,A.am())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.sWW(!0)}}
A.rd.prototype={
aA(a){var s=new A.H5(this.e,null,A.am())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.sYY(this.e)}}
A.rF.prototype={
aA(a){var s=new A.H8(this.e,null,A.am())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.sxh(0,this.e)}}
A.ih.prototype={
L(a){return this.c}}
A.fX.prototype={
L(a){return this.c.$1(a)}}
A.qy.prototype={
aA(a){var s=new A.x5(this.e,B.au,null,A.am())
s.aB()
s.saJ(null)
return s},
aE(a,b){t.oZ.a(b).saq(0,this.e)}}
A.x5.prototype={
saq(a,b){if(b.k(0,this.cs))return
this.cs=b
this.aj()},
aF(a,b){var s,r,q,p,o,n,m=this
if(m.k3.JI(0,B.P)){s=a.gbz(a)
r=m.k3
q=b.a
p=b.b
o=r.a
r=r.b
n=$.av().bf()
n.saq(0,m.cs)
s.c7(new A.z(q,p,q+o,p+r),n)}s=m.q$
if(s!=null)a.eo(s,b)}}
A.a9W.prototype={
$0(){var s,r,q=this,p=q.b
if(p==null||t._.b(q.c)){p=q.a.ry$
p===$&&A.b()
p=p.e
p.toString
s=q.c
s=s.gbr(s)
r=A.am9()
p.bN(r,s)
p=r}return p},
$S:314}
A.a9X.prototype={
$1(a){var s=a==null?t.K.a(a):a
return this.a.iB(s)},
$S:251}
A.cZ.prototype={
ii(){return A.bW(!1,t.y)},
mV(a){return A.bW(!1,t.y)},
YA(a){var s=a.a
s.toString
return this.mV(s)},
q6(){},
G3(){},
G2(){},
ws(a){},
G1(a){}}
A.vV.prototype={
Wt(a){return this.ae$.push(a)},
Zx(){this.YE($.aE().a.f)},
YE(a){var s,r,q
for(s=this.ae$,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].ws(a)},
qC(){var s=0,r=A.a8(t.H),q,p=this,o,n,m
var $async$qC=A.a9(function(a,b){if(a===1)return A.a5(b,r)
while(true)switch(s){case 0:o=A.ax(p.ae$,!0,t.nR),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.an(o[m].ii(),$async$qC)
case 6:if(b){s=1
break}case 4:++m
s=3
break
case 5:A.a4f()
case 1:return A.a6(q,r)}})
return A.a7($async$qC,r)},
qD(a){return this.ZK(a)},
ZK(a){var s=0,r=A.a8(t.H),q,p=this,o,n,m
var $async$qD=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)switch(s){case 0:o=A.ax(p.ae$,!0,t.nR),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.an(o[m].mV(a),$async$qD)
case 6:if(c){s=1
break}case 4:++m
s=3
break
case 5:case 1:return A.a6(q,r)}})
return A.a7($async$qD,r)},
oL(a){return this.S6(a)},
S6(a){var s=0,r=A.a8(t.H),q,p=this,o,n,m,l
var $async$oL=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)switch(s){case 0:o=A.ax(p.ae$,!0,t.nR),n=o.length,m=J.aO(a),l=0
case 3:if(!(l<n)){s=5
break}s=6
return A.an(o[l].YA(new A.o9(A.ch(m.j(a,"location")),m.j(a,"state"))),$async$oL)
case 6:if(c){s=1
break}case 4:++l
s=3
break
case 5:case 1:return A.a6(q,r)}})
return A.a7($async$oL,r)},
RL(a){switch(a.a){case"popRoute":return this.qC()
case"pushRoute":return this.qD(A.ch(a.b))
case"pushRouteInformation":return this.oL(t.G.a(a.b))}return A.bW(null,t.z)},
R5(){this.wN()},
JM(a){A.cg(B.t,new A.a5s(this,a))},
$iad:1,
$idd:1}
A.a9V.prototype={
$1(a){var s,r,q=$.bG
q.toString
s=this.a
r=s.a
r.toString
q.Is(r)
s.a=null
this.b.bw$.fa(0)},
$S:86}
A.a5s.prototype={
$0(){var s,r,q=this.a,p=q.c9$
q.c1$=!0
s=q.ry$
s===$&&A.b()
s=s.e
s.toString
r=q.H$
r.toString
q.c9$=new A.lE(this.b,s,"[root]",new A.jk(s,t.l9),t.go).WO(r,t.jv.a(p))
if(p==null)$.bG.wN()},
$S:0}
A.lE.prototype={
bH(a){return new A.jM(this,B.a2,this.$ti.h("jM<1>"))},
aA(a){return this.d},
aE(a,b){},
WO(a,b){var s,r={}
r.a=b
if(b==null){a.HJ(new A.a_F(r,this,a))
s=r.a
s.toString
a.pN(s,new A.a_G(r))}else{b.bg=this
b.fn()}r=r.a
r.toString
return r},
bP(){return this.e}}
A.a_F.prototype={
$0(){var s=this.b,r=A.apQ(s,s.$ti.c)
this.a.a=r
r.r=this.c},
$S:0}
A.a_G.prototype={
$0(){var s=this.a.a
s.toString
s.An(null,null)
s.p7()},
$S:0}
A.jM.prototype={
aP(a){var s=this.aR
if(s!=null)a.$1(s)},
iz(a){this.aR=null
this.k0(a)},
eM(a,b){this.An(a,b)
this.p7()},
b9(a,b){this.lO(0,b)
this.p7()},
ha(){var s=this,r=s.bg
if(r!=null){s.bg=null
s.lO(0,s.$ti.h("lE<1>").a(r))
s.p7()}s.Am()},
p7(){var s,r,q,p,o,n,m,l=this
try{o=l.aR
n=l.f
n.toString
l.aR=l.dm(o,l.$ti.h("lE<1>").a(n).c,B.mv)}catch(m){s=A.au(m)
r=A.aG(m)
o=A.bj("attaching to the render tree")
q=new A.bt(s,r,"widgets library",o,null,!1)
A.dr(q)
p=A.V8(q)
l.aR=l.dm(null,p,B.mv)}},
ga5(){return this.$ti.h("ay<1>").a(A.bs.prototype.ga5.call(this))},
iE(a,b){var s=this.$ti
s.h("ay<1>").a(A.bs.prototype.ga5.call(this)).saJ(s.c.a(a))},
iG(a,b,c){},
iM(a,b){this.$ti.h("ay<1>").a(A.bs.prototype.ga5.call(this)).saJ(null)}}
A.Ja.prototype={$iad:1}
A.y6.prototype={
ek(){this.Kx()
$.dW=this
var s=$.aE()
s.Q=this.gRS()
s.as=$.ah},
yK(){this.KA()
this.ul()}}
A.y7.prototype={
ek(){this.NA()
$.bG=this},
hI(){this.Ky()}}
A.y8.prototype={
ek(){var s,r,q,p,o=this
o.NC()
$.fG=o
o.bb$!==$&&A.ev()
o.bb$=B.Dz
s=new A.ux(A.b7(t.hp),$.bq())
B.ig.lC(s.gTf())
o.c8$=s
s=t.F3
r=new A.Wq(A.y(s,t.lT),A.b7(t.vQ),A.a([],t.AV))
o.aR$!==$&&A.ev()
o.aR$=r
q=$.abN()
p=A.a([],t.DG)
o.bg$!==$&&A.ev()
s=o.bg$=new A.Dx(r,q,p,A.b7(s))
p=$.aE()
p.at=s.gZt()
p.ax=$.ah
B.Cf.t3(s.gZM())
s=$.ag_
if(s==null)s=$.ag_=A.a([],t.e8)
s.push(o.gOm())
B.Ch.t3(new A.a9X(o))
B.Cg.t3(o.gRH())
B.bW.lC(o.gRQ())
$.akf()
o.a0Y()},
hI(){this.ND()}}
A.y9.prototype={
ek(){this.NE()
$.fz=this
var s=t.K
this.hC$=new A.WQ(A.y(s,t.fx),A.y(s,t.lM),A.y(s,t.s8))},
ni(){this.ME()
var s=this.hC$
s===$&&A.b()
s.U(0)},
iB(a){return this.ZS(a)},
ZS(a){var s=0,r=A.a8(t.H),q,p=this
var $async$iB=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)switch(s){case 0:s=3
return A.an(p.MF(a),$async$iB)
case 3:switch(A.ch(J.ba(t.a.a(a),"type"))){case"fontsChange":p.wP$.av()
break}s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$iB,r)}}
A.ya.prototype={
ek(){this.NH()
$.a1r=this
this.dw$=$.aE().a.a}}
A.yb.prototype={
ek(){var s,r,q,p,o=this
o.NI()
$.jN=o
s=t.By
o.ry$=new A.Gz(o.gYR(),o.gSl(),o.gSp(),o.gSn(),A.a([],s),A.a([],s),A.a([],s),A.b7(t.d))
s=$.aE()
s.f=o.gZz()
r=s.r=$.ah
s.fy=o.ga_0()
s.go=r
s.k2=o.gZF()
s.k3=r
s.p1=o.gSj()
s.p2=r
s.p3=o.gSh()
s.p4=r
r=new A.ut(B.P,o.FW(),$.cc(),null,A.am())
r.aB()
r.saJ(null)
q=o.ry$
q===$&&A.b()
q.sa1s(r)
r=o.ry$.e
r.Q=r
q=t.W
q.a(A.F.prototype.gbl.call(r)).r.push(r)
p=r.EN()
r.ch.saM(0,p)
q.a(A.F.prototype.gbl.call(r)).z.push(r)
o.K9(s.a.c)
o.at$.push(o.gRO())
s=o.rx$
if(s!=null)s.m()
s=t.S
r=$.bq()
o.rx$=new A.FI(new A.Yt(B.lr,A.y(s,t.Df)),A.y(s,t.eg),r)
o.ax$.push(o.gSC())},
hI(){this.NF()},
wD(a,b,c){this.rx$.a1U(b,new A.a9W(this,c,b))
this.L_(0,b,c)},
hO(){var s=0,r=A.a8(t.H),q=[],p=this,o
var $async$hO=A.a9(function(a,b){if(a===1)return A.a5(b,r)
while(true)switch(s){case 0:s=2
return A.an(p.Kz(),$async$hO)
case 2:o=$.aeX
if((o==null?null:o.a)==null)try{o=p.ry$
o===$&&A.b()
o.e.ep()}finally{}p.rV()
s=3
return A.an(p.gGp(),$async$hO)
case 3:return A.a6(null,r)}})
return A.a7($async$hO,r)}}
A.yc.prototype={
hI(){this.NK()},
x6(){var s,r,q
this.Ma()
for(s=this.ae$,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].q6()},
xc(){var s,r,q
this.Mc()
for(s=this.ae$,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].G3()},
x8(){var s,r,q
this.Mb()
for(s=this.ae$,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].G2()},
qA(a){var s,r,q
this.Mr(a)
for(s=this.ae$,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].G1(a)},
ni(){var s,r
this.NG()
for(s=this.ae$.length,r=0;r<s;++r);},
wI(){var s,r,q=this,p={}
p.a=null
if(q.aT$){s=new A.a9V(p,q)
p.a=s
$.bG.WB(s)}try{r=q.c9$
if(r!=null)q.H$.X1(r)
q.M9()
q.H$.Z2()}finally{}r=q.aT$=!1
p=p.a
if(p!=null)r=!(q.xr$||q.x2$===0)
if(r){q.aT$=!0
r=$.bG
r.toString
p.toString
r.Is(p)}},
hO(){var s=this.c9$
if(s!=null)this.H$.a12(s,$.aeX)
return this.NL()}}
A.BA.prototype={
aA(a){var s=new A.H3(this.e,this.f,A.ae5(a,null),null,A.am())
s.aB()
s.saJ(null)
return s},
aE(a,b){b.sYn(this.e)
b.swc(A.ae5(a,null))
b.sbr(0,this.f)}}
A.n3.prototype={
gTJ(){var s,r=this.r
if(r==null||r.gd2(r)==null)return this.e
s=r.gd2(r)
r=this.e
if(r==null)return s
s.toString
return r.E(0,s)},
L(a){var s,r,q=this,p=null,o=q.c
if(o==null){s=q.x
if(s!=null)s=!(s.a>=s.b&&s.c>=s.d)
else s=!0}else s=!1
if(s)o=A.aob(new A.ff(B.m0,p,p),0,0)
else{s=q.d
if(s!=null)o=new A.ku(s,p,p,o,p)}r=q.gTJ()
if(r!=null)o=new A.hn(r,o,p)
s=q.f
if(s!=null)o=new A.qy(s,o,p)
s=q.r
if(s!=null)o=A.afl(o,s,B.hh)
s=q.x
if(s!=null)o=new A.ff(s,o,p)
s=q.y
if(s!=null)o=new A.hn(s,o,p)
o.toString
return o}}
A.n8.prototype={
bQ(a){return!J.f(this.w,a.w)||!J.f(this.x,a.x)}}
A.M5.prototype={
L(a){throw A.d(A.rr("A DefaultSelectionStyle constructed with DefaultSelectionStyle.fallback cannot be incorporated into the widget tree, it is meant only to provide a fallback value returned by DefaultSelectionStyle.of() when no enclosing default selection style is present in a BuildContext."))}}
A.BI.prototype={
Qz(){var s=$.ajV()
return s},
L(a){var s=this.c,r=this.Qz()
if(r!=null)s=A.ad7(s,"<Web Disabling Text Editing Shortcuts>",r)
return A.ad7(s,"<Default Text Editing Shortcuts>",A.amU())}}
A.BR.prototype={
gaK(a){var s=this.a
if(s==null)return null
s=s.c
s.toString
return s}}
A.nb.prototype={
ap(){return new A.wi(A.GL(null),A.GL(null),B.l)},
Zi(a,b,c){return this.d.$3(a,b,c)},
a1p(a,b,c){return this.e.$3(a,b,c)}}
A.wi.prototype={
aD(){var s,r=this
r.aV()
s=r.a.c
r.d=s.gaZ(s)
r.a.c.cV(r.gtD())
r.Ez()},
AU(a){var s,r=this,q=r.d
q===$&&A.b()
s=r.OP(a,q)
r.d=s
if(q!==s)r.Ez()},
b_(a){var s,r,q=this
q.bt(a)
s=a.c
if(s!==q.a.c){r=q.gtD()
s.bZ(r)
q.a.c.cV(r)
r=q.a.c
q.AU(r.gaZ(r))}},
OP(a,b){switch(a.a){case 0:case 3:return a
case 1:switch(b.a){case 0:case 3:case 1:return a
case 2:return b}break
case 2:switch(b.a){case 0:case 3:case 2:return a
case 1:return b}break}},
Ez(){var s=this,r=s.d
r===$&&A.b()
switch(r.a){case 0:case 1:s.e.saU(0,s.a.c)
s.f.saU(0,B.cb)
break
case 2:case 3:s.e.saU(0,B.cR)
s.f.saU(0,new A.eo(s.a.c,new A.bd(A.a([],t.A),t.Q),0))
break}},
m(){this.a.c.bZ(this.gtD())
this.aN()},
L(a){var s=this.a
return s.Zi(a,this.e,s.a1p(a,this.f,s.f))}}
A.ig.prototype={
D(){return"KeyEventResult."+this.b}}
A.Jv.prototype={}
A.VA.prototype={
ad(a){var s,r=this.a
if(r.ax===this){if(!r.giC()){s=r.w
s=s!=null&&s.w===r}else s=!0
if(s)r.IY(B.BI)
s=r.w
if(s!=null){if(s.f===r)s.f=null
s.r.A(0,r)}s=r.Q
if(s!=null)s.Uq(0,r)
r.ax=null}},
yu(a){var s,r=this.a
if(r.ax===this){s=r.e
s.toString
a=A.anK(s,!0);(a==null?r.e.r.f.e:a).va(r)}},
It(){return this.yu(null)}}
A.vP.prototype={
D(){return"UnfocusDisposition."+this.b}}
A.ct.prototype={
gdN(){var s,r,q
if(this.a)return!0
for(s=this.gf7(),r=s.length,q=0;q<r;++q)s[q].toString
return!1},
sdN(a){var s,r=this
if(a!==r.a){r.a=a
s=r.w
if(s!=null){s.oU()
s.r.E(0,r)}}},
gcd(){var s,r,q,p
if(!this.b)return!1
s=this.gdf()
if(s!=null&&!s.gcd())return!1
for(r=this.gf7(),q=r.length,p=0;p<q;++p)r[p].toString
return!0},
scd(a){var s,r=this
if(a!==r.b){r.b=a
if(r.gjw()&&!a)r.IY(B.BI)
s=r.w
if(s!=null){s.oU()
s.r.E(0,r)}}},
skJ(a){return},
skK(a){},
gmP(){var s,r,q,p,o=this.y
if(o==null){s=A.a([],t.i4)
for(o=this.as,r=o.length,q=0;q<o.length;o.length===r||(0,A.Q)(o),++q){p=o[q]
B.b.I(s,p.gmP())
s.push(p)}this.y=s
o=s}return o},
gnV(){var s=this.gmP()
return new A.aF(s,new A.VB(),A.ai(s).h("aF<1>"))},
gf7(){var s,r,q=this.x
if(q==null){s=A.a([],t.i4)
r=this.Q
for(;r!=null;){s.push(r)
r=r.Q}this.x=s
q=s}return q},
gjw(){if(!this.giC()){var s=this.w
if(s==null)s=null
else{s=s.f
s=s==null?null:B.b.B(s.gf7(),this)}s=s===!0}else s=!0
return s},
giC(){var s=this.w
return(s==null?null:s.f)===this},
gjE(){return this.gdf()},
gdf(){var s,r,q,p
for(s=this.gf7(),r=s.length,q=0;q<r;++q){p=s[q]
if(p instanceof A.kX)return p}return null},
gaI(a){var s,r=this.e.ga5(),q=r.bs(0,null),p=r.giX(),o=A.cd(q,new A.t(p.a,p.b))
p=r.bs(0,null)
q=r.giX()
s=A.cd(p,new A.t(q.c,q.d))
return new A.z(o.a,o.b,s.a,s.b)},
IY(a){var s,r,q=this
if(!q.gjw()){s=q.w
s=s==null||s.w!==q}else s=!1
if(s)return
r=q.gdf()
if(r==null)return
switch(a.a){case 0:if(r.gcd())B.b.U(r.dy)
for(;!r.gcd();){r=r.gdf()
if(r==null){s=q.w
r=s==null?null:s.e}}r.i3(!1)
break
case 1:if(r.gcd())B.b.A(r.dy,q)
for(;!r.gcd();){s=r.gdf()
if(s!=null)B.b.A(s.dy,r)
r=r.gdf()
if(r==null){s=q.w
r=s==null?null:s.e}}r.i3(!0)
break}},
CT(a){var s=this,r=s.w
if(r!=null){if(r.f===s)r.w=null
else{r.w=s
r.oU()}return}a.ku()
a.uY()
if(a!==s)s.uY()},
Ds(a,b,c){var s,r,q
if(c){s=b.gdf()
if(s!=null)B.b.A(s.dy,b)}b.Q=null
B.b.A(this.as,b)
for(s=this.gf7(),r=s.length,q=0;q<r;++q)s[q].y=null
this.y=null},
Uq(a,b){return this.Ds(a,b,!0)},
VW(a){var s,r,q,p
this.w=a
for(s=this.gmP(),r=s.length,q=0;q<r;++q){p=s[q]
p.w=a
p.x=null}},
va(a){var s,r,q,p,o,n=this
if(a.Q===n)return
s=a.gdf()
r=a.gjw()
q=a.Q
if(q!=null)q.Ds(0,a,s!=n.gjE())
n.as.push(a)
a.Q=n
a.x=null
a.VW(n.w)
for(q=a.gf7(),p=q.length,o=0;o<p;++o)q[o].y=null
if(r){q=n.w
if(q!=null){q=q.f
if(q!=null)q.ku()}}if(s!=null&&a.e!=null&&a.gdf()!==s){q=a.e
q.toString
q=A.afE(q)
if(q!=null)q.w9(a,s)}if(a.ay){a.i3(!0)
a.ay=!1}},
m(){var s=this.ax
if(s!=null)s.ad(0)
this.dr()},
uY(){var s=this
if(s.Q==null)return
if(s.giC())s.ku()
s.av()},
rt(){this.i3(!0)},
i3(a){var s,r=this
if(!r.gcd())return
if(r.Q==null){r.ay=!0
return}r.ku()
if(r.giC()){s=r.w.w
s=s==null||s===r}else s=!1
if(s)return
r.CT(r)},
ku(){var s,r,q,p,o,n
for(s=B.b.ga7(this.gf7()),r=new A.oQ(s,t.oj),q=t.j5,p=this;r.t();p=o){o=q.a(s.gG(s))
n=o.dy
B.b.A(n,p)
n.push(p)}},
bP(){var s,r,q,p=this
p.gjw()
s=p.gjw()&&!p.giC()?"[IN FOCUS PATH]":""
r=s+(p.giC()?"[PRIMARY FOCUS]":"")
s=A.bB(p)
q=r.length!==0?"("+r+")":""
return"<optimized out>#"+s+q},
$ia1:1}
A.VB.prototype={
$1(a){return!a.gdN()&&a.gcd()},
$S:9}
A.kX.prototype={
gjE(){return this},
gnV(){if(!this.gcd())return B.CL
return A.ct.prototype.gnV.call(this)},
lB(a){if(a.Q==null)this.va(a)
if(this.gjw())a.i3(!0)
else a.ku()},
i3(a){var s,r,q=this,p=q.dy
while(!0){if((p.length!==0?B.b.gT(p):null)!=null)s=!(p.length!==0?B.b.gT(p):null).gcd()
else s=!1
if(!s)break
p.pop()}r=p.length!==0?B.b.gT(p):null
if(!a||r==null){if(q.gcd()){q.ku()
q.CT(q)}return}r.i3(!0)}}
A.ia.prototype={
D(){return"FocusHighlightMode."+this.b}}
A.CU.prototype={
D(){return"FocusHighlightStrategy."+this.b}}
A.rs.prototype={
EM(){var s,r,q=this
switch(0){case 0:s=q.c
if(s==null)return
r=s?B.hn:B.dZ
break}s=q.b
if(s==null)s=A.CV()
q.b=r
if((r==null?A.CV():r)!==s)q.Tp()},
Tp(){var s,r,q,p,o,n,m,l,k,j=this,i=j.d,h=i.a
if(h.a===0)return
p=A.ax(i,!0,t.tP)
for(i=p.length,o=0;o<i;++o){s=p[o]
try{if(h.V(0,s)){n=j.b
if(n==null)n=A.CV()
s.$1(n)}}catch(m){r=A.au(m)
q=A.aG(m)
l=j instanceof A.bP?A.cL(j):null
n=A.bj("while dispatching notifications for "+A.az(l==null?A.aI(j):l).i(0))
k=$.f9()
if(k!=null)k.$1(new A.bt(r,q,"widgets library",n,null,!1))}}},
Ql(a){var s,r,q=this
switch(a.gc2(a).a){case 0:case 2:case 3:q.c=!0
s=B.hn
break
case 1:case 4:case 5:q.c=!1
s=B.dZ
break
default:s=null}r=q.b
if(s!==(r==null?A.CV():r))q.EM()},
RF(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.c=!1
i.EM()
s=i.f
if(s==null)return!1
s=A.a([s],t.i4)
B.b.I(s,i.f.gf7())
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
switch(A.atD(k).a){case 1:break c$1
case 0:r=!0
break
case 2:r=!1
break
default:r=!1}break}s.length===q||(0,A.Q)(s);++m}return r},
oU(){if(this.y)return
this.y=!0
A.f7(this.gOz())},
OA(){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.y=!1
s=h.f
for(r=h.x,q=r.length,p=h.e,o=0;o<r.length;r.length===q||(0,A.Q)(r),++o){n=r[o]
m=n.a
if(m.Q!=null||m===p)if(m.w===h){l=m.dy
m=(l.length!==0?B.b.gT(l):null)==null&&B.b.B(n.b.gf7(),m)
k=m}else k=!1
else k=!1
if(k)n.b.i3(!0)}B.b.U(r)
r=h.f
if(r==null&&h.w==null)h.w=p
q=h.w
if(q!=null&&q!==r){if(s==null)j=null
else{r=s.gf7()
r=A.rX(r,A.ai(r).c)
j=r}if(j==null)j=A.b7(t.lc)
r=h.w.gf7()
i=A.rX(r,A.ai(r).c)
r=h.r
r.I(0,i.jk(j))
r.I(0,j.jk(i))
r=h.f=h.w
h.w=null}if(s!=r){if(s!=null)h.r.E(0,s)
r=h.f
if(r!=null)h.r.E(0,r)}for(r=h.r,q=A.iP(r,r.r),p=A.n(q).c;q.t();){m=q.d;(m==null?p.a(m):m).uY()}r.U(0)
if(s!=h.f)h.av()},
$ia1:1}
A.KS.prototype={}
A.KT.prototype={}
A.KU.prototype={}
A.KV.prototype={}
A.kW.prototype={
gHX(){var s=this.w,r=this.e
s=r==null?null:r.r
return s},
gxY(){var s=this.x
if(s==null){s=this.e
s=s==null?null:s.f}return s},
gcd(){var s=this.y
if(s==null){s=this.e
s=s==null?null:s.gcd()}return s!==!1},
gdN(){var s=this.z
if(s==null){s=this.e
s=s==null?null:s.gdN()}return s===!0},
gkJ(){var s=this.Q
if(s==null)s=this.e!=null||null
return s!==!1},
gkK(){var s=this.as
if(s==null)s=this.e!=null||null
return s!==!1},
gkI(){var s=this.ax
if(s==null){s=this.e
s=s==null?null:s.at}return s},
ap(){return A.ard()}}
A.p4.prototype={
gbO(a){var s=this.a.e
if(s==null){s=this.d
s.toString}return s},
aD(){this.aV()
this.CB()},
CB(){var s,r,q,p=this
if(p.a.e==null)if(p.d==null)p.d=p.Bz()
s=p.gbO(p)
p.a.gkJ()
s.skJ(!0)
s=p.gbO(p)
p.a.gkK()
s.skK(!0)
p.a.gdN()
p.gbO(p).sdN(p.a.gdN())
if(p.a.y!=null){s=p.gbO(p)
r=p.a.y
r.toString
s.scd(r)}p.f=p.gbO(p).gcd()
p.gbO(p)
p.r=!0
p.gbO(p)
p.w=!0
p.e=p.gbO(p).giC()
s=p.gbO(p)
r=p.c
r.toString
p.a.gHX()
q=p.a.gxY()
s.e=r
s.f=q==null?s.f:q
r=s.r
s.r=r
p.y=s.ax=new A.VA(s)
p.gbO(p).S(0,p.guz())},
Bz(){var s=this,r=s.a.gkI(),q=s.a.gcd()
s.a.gkJ()
s.a.gkK()
return A.acq(q,r,!0,!0,null,null,s.a.gdN())},
m(){var s,r=this
r.gbO(r).F(0,r.guz())
r.y.ad(0)
s=r.d
if(s!=null)s.m()
r.aN()},
b3(){this.cl()
var s=this.y
if(s!=null)s.It()
this.Ci()},
Ci(){var s,r,q,p=this
if(!p.x&&p.a.f){s=p.c
s.toString
s=A.anJ(s)
r=p.gbO(p)
if(r.Q==null)s.va(r)
q=s.w
if(q!=null)q.x.push(new A.Jv(s,r))
s=s.w
if(s!=null)s.oU()
p.x=!0}},
cZ(){this.lQ()
var s=this.y
if(s!=null)s.It()
this.x=!1},
b_(a){var s,r,q=this
q.bt(a)
s=a.e
r=q.a
if(s==r.e){if(!J.f(r.gxY(),q.gbO(q).f))q.gbO(q).f=q.a.gxY()
q.a.gHX()
q.gbO(q)
q.a.gdN()
q.gbO(q).sdN(q.a.gdN())
if(q.a.y!=null){s=q.gbO(q)
r=q.a.y
r.toString
s.scd(r)}s=q.gbO(q)
q.a.gkJ()
s.skJ(!0)
s=q.gbO(q)
q.a.gkK()
s.skK(!0)}else{q.y.ad(0)
if(s!=null)s.F(0,q.guz())
q.CB()}if(a.f!==q.a.f)q.Ci()},
Rz(){var s,r=this,q=r.gbO(r).giC(),p=r.gbO(r).gcd()
r.gbO(r)
r.gbO(r)
s=r.a.r
if(s!=null)s.$1(r.gbO(r).gjw())
s=r.e
s===$&&A.b()
if(s!==q)r.az(new A.a6C(r,q))
s=r.f
s===$&&A.b()
if(s!==p)r.az(new A.a6D(r,p))
s=r.r
s===$&&A.b()
if(!s)r.az(new A.a6E(r,!0))
s=r.w
s===$&&A.b()
if(!s)r.az(new A.a6F(r,!0))},
L(a){var s,r,q=this,p=null,o=q.y
o.toString
o.yu(q.a.c)
o=q.a
s=o.d
if(o.at){o=q.f
o===$&&A.b()
r=q.e
r===$&&A.b()
s=A.dv(p,s,!1,p,!1,o,r,p,p,p,p,p,p,p,p,p,p,p,p,p)}return A.ahB(s,q.gbO(q))}}
A.a6C.prototype={
$0(){this.a.e=this.b},
$S:0}
A.a6D.prototype={
$0(){this.a.f=this.b},
$S:0}
A.a6E.prototype={
$0(){this.a.r=this.b},
$S:0}
A.a6F.prototype={
$0(){this.a.w=this.b},
$S:0}
A.CW.prototype={
ap(){return new A.KW(B.l)}}
A.KW.prototype={
Bz(){var s=this.a.gkI()
return A.acr(this.a.gcd(),s,this.a.gdN())},
L(a){var s=this,r=null,q=s.y
q.toString
q.yu(s.a.c)
q=s.gbO(s)
return A.dv(r,A.ahB(s.a.d,q),!1,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)}}
A.wm.prototype={}
A.aap.prototype={
$1(a){var s=this.a
if(--s.a===0){s.b=a
return!1}return!0},
$S:35}
A.p5.prototype={}
A.m7.prototype={
D(){return"TraversalDirection."+this.b}}
A.CX.prototype={
BX(a,b,c){var s,r=a.gjE(),q=r.dy,p=q.length!==0?B.b.gT(q):null
q=p==null&&r.gmP().length!==0
if(q){s=this.E7(r,a)
if(s.length===0)p=null
else p=b?B.b.gT(s):B.b.gJ(s)}return p==null?a:p},
Qb(a,b){return this.BX(a,!1,b)},
a_y(a){},
w9(a,b){},
QH(a){var s
if(a==null)s=null
else{s=a.iT(t.AB)
if(s==null)s=null
else{s=s.f
s.toString}}return t.fc.a(s)},
E7(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=this.QH(a.e),c=d==null,b=c?e:d.f
if(b==null)b=new A.ug(A.y(t.j5,t.uJ))
s=A.y(t.k_,t.hF)
for(r=a.gmP(),q=r.length,p=t.fc,o=t.AB,n=t.i4,m=0;m<r.length;r.length===q||(0,A.Q)(r),++m){l=r[m]
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
h=A.air(k,2)
if(h==null)k=e
else{k=h.y
j=k==null?e:k.j(0,A.az(o))
if(j==null)k=e
else{k=j.f
k.toString}}p.a(k)
g=k==null?e:k.r
if(s.j(0,g)==null)s.l(0,g,A.ahC(k,b,A.a([],n)))
s.j(0,g).c.push(i)
continue}if(l.gcd()&&!l.gdN()){if(s.j(0,i)==null)s.l(0,i,A.ahC(k,b,A.a([],n)))
s.j(0,i).c.push(l)}}for(r=A.ij(s,s.r);r.t();){q=r.d
p=s.j(0,q).b.Kk(s.j(0,q).c,a0)
p=A.a(p.slice(0),A.ai(p))
B.b.U(s.j(0,q).c)
B.b.I(s.j(0,q).c,p)}f=A.a([],n)
if(s.a!==0)r=s.V(0,c?e:d.r)
else r=!1
if(r){r=s.j(0,c?e:d.r)
r.toString
new A.VD(s,f).$1(r)}if(!!f.fixed$length)A.a_(A.X("removeWhere"))
B.b.v9(f,new A.VC(),!0)
return f},
CZ(a,b){var s,r,q,p,o,n,m=this,l=a.gjE()
l.toString
m.k5(l)
m.na$.A(0,l)
s=l.dy
r=s.length!==0?B.b.gT(s):null
if(r==null){q=b?m.Qb(a,!1):m.BX(a,!0,!1)
A.kg(q,b?B.cE:B.cF)
return!0}p=m.E7(l,a)
if(p.length===0)return!1
if(b&&r===B.b.gT(p)){A.kg(B.b.gJ(p),B.cE)
return!0}if(!b&&r===B.b.gJ(p)){A.kg(B.b.gT(p),B.cF)
return!0}for(l=J.ar(b?p:new A.cz(p,A.ai(p).h("cz<1>"))),o=null;l.t();o=n){n=l.gG(l)
if(o==r){l=b?B.cE:B.cF
n.rt()
s=n.e
s.toString
A.agT(s,1,l)
return!0}}return!1}}
A.VD.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=a.c,r=s.length,q=this.b,p=this.a,o=0;o<s.length;s.length===r||(0,A.Q)(s),++o){n=s[o]
if(p.V(0,n)){m=p.j(0,n)
m.toString
this.$1(m)}else q.push(n)}},
$S:254}
A.VC.prototype={
$1(a){return!a.gcd()||a.gdN()},
$S:9}
A.p_.prototype={}
A.Kn.prototype={}
A.SA.prototype={
Z4(a,b){var s=this
switch(b.a){case 0:return s.pg(a,!1,!0)
case 2:return s.pg(a,!0,!0)
case 3:return s.pg(a,!1,!1)
case 1:return s.pg(a,!0,!1)}},
pg(a,b,c){var s=a.gjE().gnV().dI(0)
A.mD(s,new A.SI(c,b),t.lc)
if(s.length!==0)return B.b.gJ(s)
return null},
Vl(a,b,c){var s,r=c.gnV().dI(0)
A.mD(r,new A.SC(),t.lc)
switch(a.a){case 3:s=new A.aF(r,new A.SD(b),A.ai(r).h("aF<1>"))
break
case 1:s=new A.aF(r,new A.SE(b),A.ai(r).h("aF<1>"))
break
case 0:case 2:s=null
break
default:s=null}return s},
Vm(a,b,c){var s=c.dI(0)
A.mD(s,new A.SF(),t.lc)
switch(a.a){case 0:return new A.aF(s,new A.SG(b),A.ai(s).h("aF<1>"))
case 2:return new A.aF(s,new A.SH(b),A.ai(s).h("aF<1>"))
case 3:case 1:break}return null},
Ua(a,b,c){var s,r,q=this,p=q.na$,o=p.j(0,b),n=o!=null
if(n){s=o.a
s=s.length!==0&&B.b.gJ(s).a!==a}else s=!1
if(s){s=o.a
if(B.b.gT(s).b.Q==null){q.k5(b)
p.A(0,b)
return!1}r=new A.SB(q,o,b)
switch(a.a){case 2:case 0:switch(B.b.gJ(s).a.a){case 3:case 1:q.k5(b)
p.A(0,b)
break
case 0:case 2:if(r.$1(a))return!0
break}break
case 3:case 1:switch(B.b.gJ(s).a.a){case 3:case 1:if(r.$1(a))return!0
break
case 0:case 2:q.k5(b)
p.A(0,b)
break}break}}if(n&&o.a.length===0){q.k5(b)
p.A(0,b)}return!1},
a_k(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=a.gjE(),f=g.dy,e=f.length!==0?B.b.gT(f):h
if(e==null){s=i.Z4(a,b)
if(s==null)s=a
switch(b.a){case 0:case 3:A.kg(s,B.cF)
break
case 1:case 2:A.kg(s,B.cE)
break}return!0}if(i.Ua(b,g,e))return!0
f=e.e
f.toString
r=A.hA(f)
f=b.a
switch(f){case 2:case 0:q=i.Vm(b,e.gaI(e),g.gnV())
if(r!=null&&!r.d.gFo()){q.toString
p=new A.aF(q,new A.SJ(r),q.$ti.h("aF<p.E>"))
if(!p.gP(p))q=p}if(!q.ga7(q).t()){o=h
break}n=A.ax(q,!0,A.n(q).h("p.E"))
if(b===B.Yj){m=A.ai(n).h("cz<1>")
n=A.ax(new A.cz(n,m),!0,m.h("bk.E"))}l=new A.aF(n,new A.SK(new A.z(e.gaI(e).a,-1/0,e.gaI(e).c,1/0)),A.ai(n).h("aF<1>"))
if(!l.gP(l)){o=l.gJ(l)
break}A.mD(n,new A.SL(e),t.lc)
o=B.b.gJ(n)
break
case 1:case 3:q=i.Vl(b,e.gaI(e),g)
if(r!=null&&!r.d.gFo()){q.toString
p=new A.aF(q,new A.SM(r),q.$ti.h("aF<p.E>"))
if(!p.gP(p))q=p}if(!q.ga7(q).t()){o=h
break}n=A.ax(q,!0,A.n(q).h("p.E"))
if(b===B.Yk){m=A.ai(n).h("cz<1>")
n=A.ax(new A.cz(n,m),!0,m.h("bk.E"))}l=new A.aF(n,new A.SN(new A.z(-1/0,e.gaI(e).b,1/0,e.gaI(e).d)),A.ai(n).h("aF<1>"))
if(!l.gP(l)){o=l.gJ(l)
break}A.mD(n,new A.SO(e),t.lc)
o=B.b.gJ(n)
break
default:o=h}if(o!=null){m=i.na$
k=m.j(0,g)
j=new A.p_(b,e)
if(k!=null)k.a.push(j)
else m.l(0,g,new A.Kn(A.a([j],t.gE)))
switch(f){case 0:case 3:A.kg(o,B.cF)
break
case 2:case 1:A.kg(o,B.cE)
break}return!0}return!1}}
A.a8y.prototype={
$1(a){return a.b===this.a},
$S:255}
A.SI.prototype={
$2(a,b){if(this.a)if(this.b)return B.d.b0(a.gaI(a).b,b.gaI(b).b)
else return B.d.b0(b.gaI(b).d,a.gaI(a).d)
else if(this.b)return B.d.b0(a.gaI(a).a,b.gaI(b).a)
else return B.d.b0(b.gaI(b).c,a.gaI(a).c)},
$S:28}
A.SC.prototype={
$2(a,b){return B.d.b0(a.gaI(a).gaS().a,b.gaI(b).gaS().a)},
$S:28}
A.SD.prototype={
$1(a){var s=this.a
return!a.gaI(a).k(0,s)&&a.gaI(a).gaS().a<=s.a},
$S:9}
A.SE.prototype={
$1(a){var s=this.a
return!a.gaI(a).k(0,s)&&a.gaI(a).gaS().a>=s.c},
$S:9}
A.SF.prototype={
$2(a,b){return B.d.b0(a.gaI(a).gaS().b,b.gaI(b).gaS().b)},
$S:28}
A.SG.prototype={
$1(a){var s=this.a
return!a.gaI(a).k(0,s)&&a.gaI(a).gaS().b<=s.b},
$S:9}
A.SH.prototype={
$1(a){var s=this.a
return!a.gaI(a).k(0,s)&&a.gaI(a).gaS().b>=s.d},
$S:9}
A.SB.prototype={
$1(a){var s,r,q=this.b.a.pop().b,p=q.e
p.toString
p=A.hA(p)
s=$.ac.H$.f.f.e
s.toString
if(p!=A.hA(s)){p=this.a
s=this.c
p.k5(s)
p.na$.A(0,s)
return!1}switch(a.a){case 0:case 3:r=B.cF
break
case 1:case 2:r=B.cE
break
default:r=null}A.kg(q,r)
return!0},
$S:257}
A.SJ.prototype={
$1(a){var s=a.e
s.toString
return A.hA(s)===this.a},
$S:9}
A.SK.prototype={
$1(a){var s=a.gaI(a).eJ(this.a)
return!s.gP(s)},
$S:9}
A.SL.prototype={
$2(a,b){var s=this.a
return B.d.b0(Math.abs(a.gaI(a).gaS().a-s.gaI(s).gaS().a),Math.abs(b.gaI(b).gaS().a-s.gaI(s).gaS().a))},
$S:28}
A.SM.prototype={
$1(a){var s=a.e
s.toString
return A.hA(s)===this.a},
$S:9}
A.SN.prototype={
$1(a){var s=a.gaI(a).eJ(this.a)
return!s.gP(s)},
$S:9}
A.SO.prototype={
$2(a,b){var s=this.a
return B.d.b0(Math.abs(a.gaI(a).gaS().b-s.gaI(s).gaS().b),Math.abs(b.gaI(b).gaS().b-s.gaI(s).gaS().b))},
$S:28}
A.cC.prototype={
gG7(){var s=this.d
if(s==null){s=this.c.e
s.toString
s=this.d=new A.a8w().$1(s)}s.toString
return s}}
A.a8v.prototype={
$1(a){var s=a.gG7()
return A.rX(s,A.ai(s).c)},
$S:258}
A.a8x.prototype={
$2(a,b){switch(this.a.a){case 1:return B.d.b0(a.b.a,b.b.a)
case 0:return B.d.b0(b.b.c,a.b.c)}},
$S:93}
A.a8w.prototype={
$1(a){var s,r,q=A.a([],t.AG),p=t.I,o=a.iT(p)
for(;o!=null;){s=o.f
s.toString
q.push(p.a(s))
s=A.air(o,1)
if(s==null)o=null
else{s=s.y
r=s==null?null:s.j(0,A.az(p))
o=r}}return q},
$S:260}
A.hO.prototype={
gaI(a){var s,r,q,p,o=this
if(o.b==null)for(s=o.a,s=new A.aL(s,new A.a8t(),A.ai(s).h("aL<1,z>")),s=new A.dh(s,s.gp(s)),r=A.n(s).c;s.t();){q=s.d
if(q==null)q=r.a(q)
p=o.b
if(p==null){o.b=q
p=q}o.b=p.n7(q)}s=o.b
s.toString
return s}}
A.a8t.prototype={
$1(a){return a.b},
$S:261}
A.a8u.prototype={
$2(a,b){switch(this.a.a){case 1:return B.d.b0(a.gaI(a).a,b.gaI(b).a)
case 0:return B.d.b0(b.gaI(b).c,a.gaI(a).c)}},
$S:262}
A.ug.prototype={
Pe(a){var s,r,q,p,o,n=B.b.gJ(a).a,m=t.hY,l=A.a([],m),k=A.a([],t.lZ)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.Q)(a),++r){q=a[r]
p=q.a
if(p==n){l.push(q)
continue}k.push(new A.hO(l))
l=A.a([q],m)
n=p}if(l.length!==0)k.push(new A.hO(l))
for(m=k.length,r=0;r<k.length;k.length===m||(0,A.Q)(k),++r){s=k[r].a
if(s.length===1)continue
o=B.b.gJ(s).a
o.toString
A.ahK(s,o)}return k},
Dl(a){var s,r,q,p
A.mD(a,new A.a_t(),t.dP)
s=B.b.gJ(a)
r=new A.a_u().$2(s,a)
if(J.bH(r)<=1)return s
q=A.aru(r)
q.toString
A.ahK(r,q)
p=this.Pe(r)
if(p.length===1)return B.b.gJ(B.b.gJ(p).a)
A.art(p,q)
return B.b.gJ(B.b.gJ(p).a)},
Kk(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a.length<=1)return a
s=A.a([],t.hY)
for(r=a.length,q=t.n2,p=t.I,o=0;o<a.length;a.length===r||(0,A.Q)(a),++o){n=a[o]
m=n.gaI(n)
l=n.e.y
k=l==null?null:l.j(0,A.az(p))
if(k==null)l=null
else{l=k.f
l.toString}q.a(l)
s.push(new A.cC(l==null?null:l.w,m,n))}j=A.a([],t.i4)
i=this.Dl(s)
j.push(i.c)
B.b.A(s,i)
for(;s.length!==0;){h=this.Dl(s)
j.push(h.c)
B.b.A(s,h)}return j}}
A.a_t.prototype={
$2(a,b){return B.d.b0(a.b.b,b.b.b)},
$S:93}
A.a_u.prototype={
$2(a,b){var s=a.b,r=A.ai(b).h("aF<1>")
return A.ax(new A.aF(b,new A.a_v(new A.z(-1/0,s.b,1/0,s.d)),r),!0,r.h("p.E"))},
$S:263}
A.a_v.prototype={
$1(a){var s=a.b.eJ(this.a)
return!s.gP(s)},
$S:264}
A.rt.prototype={
ap(){return new A.KX(B.l)}}
A.KX.prototype={
aD(){this.aV()
this.d=A.acq(!1,"FocusTraversalGroup",!0,!0,null,null,!0)},
m(){var s=this.d
if(s!=null)s.m()
this.aN()},
L(a){var s=null,r=this.a,q=r.c,p=this.d
p.toString
return new A.p6(q,p,A.CT(!1,!1,r.f,s,!0,!0,p,!1,s,s,s,s,s,!0),s)}}
A.p6.prototype={
bQ(a){return!1}}
A.Hr.prototype={
cK(a){A.kg(a.gbO(a),B.SN)}}
A.lm.prototype={}
A.FU.prototype={
cK(a){var s=$.ac.H$.f.f
s.e.a1(t.AB).f.CZ(s,!0)}}
A.lB.prototype={}
A.GI.prototype={
cK(a){var s=$.ac.H$.f.f
s.e.a1(t.AB).f.CZ(s,!1)}}
A.BO.prototype={
cK(a){var s=$.ac.H$.f.f,r=s.e.a1(t.AB)
r.f.a_k(s,a.a)}}
A.KY.prototype={}
A.N0.prototype={
w9(a,b){var s
this.KZ(a,b)
s=this.na$.j(0,b)
if(s!=null){s=s.a
if(!!s.fixed$length)A.a_(A.X("removeWhere"))
B.b.v9(s,new A.a8y(a),!0)}}}
A.PA.prototype={}
A.PB.prototype={}
A.dX.prototype={
gbi(){var s,r=$.ac.H$.z.j(0,this)
if(r instanceof A.eX){s=r.ok
s.toString
if(A.n(this).c.b(s))return s}return null}}
A.br.prototype={
i(a){var s=this,r=s.a,q=r!=null?" "+r:""
if(A.A(s)===B.Yz)return"[GlobalKey#"+A.bB(s)+q+"]"
return"["+("<optimized out>#"+A.bB(s))+q+"]"}}
A.jk.prototype={
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return this.$ti.b(b)&&b.a===this.a},
gu(a){return A.pQ(this.a)},
i(a){var s="GlobalObjectKey",r=B.c.YO(s,"<State<StatefulWidget>>")?B.c.ab(s,0,-8):s
return"["+r+" "+("<optimized out>#"+A.bB(this.a))+"]"}}
A.k.prototype={
bP(){var s=this.a
return s==null?"Widget":"Widget-"+s.i(0)},
k(a,b){if(b==null)return!1
return this.LE(0,b)},
gu(a){return A.N.prototype.gu.call(this,this)}}
A.b2.prototype={
bH(a){return new A.Im(this,B.a2)}}
A.a3.prototype={
bH(a){return A.aqr(this)}}
A.O6.prototype={
D(){return"_StateLifecycle."+this.b}}
A.ag.prototype={
aD(){},
b_(a){},
ep(){},
az(a){a.$0()
this.c.fn()},
cZ(){},
c5(){},
m(){},
b3(){}}
A.aM.prototype={}
A.d9.prototype={
bH(a){return new A.lo(this,B.a2,A.n(this).h("lo<d9.T>"))}}
A.b5.prototype={
bH(a){return A.anZ(this)}}
A.at.prototype={
aE(a,b){},
mX(a){}}
A.DB.prototype={
bH(a){return new A.DA(this,B.a2)}}
A.aV.prototype={
bH(a){return A.aqi(this)}}
A.e2.prototype={
bH(a){return A.aoI(this)}}
A.mj.prototype={
D(){return"_ElementLifecycle."+this.b}}
A.Lg.prototype={
Ex(a){a.aP(new A.a7b(this,a))
a.nW()},
VN(){var s,r,q,p=this
p.a=!0
r=p.b
q=A.ax(r,!0,A.n(r).c)
B.b.d6(q,A.ab5())
s=q
r.U(0)
try{r=s
new A.cz(r,A.aI(r).h("cz<1>")).Z(0,p.gVL())}finally{p.a=!1}},
E(a,b){if(b.w===B.c6){b.cZ()
b.aP(A.ab6())}this.b.E(0,b)}}
A.a7b.prototype={
$1(a){this.a.Ex(a)},
$S:4}
A.Rq.prototype={
zq(a){var s=this
if(a.at){s.e=!0
return}if(!s.d&&s.a!=null){s.d=!0
s.a.$0()}s.c.push(a)
a.at=!0},
HJ(a){try{a.$0()}finally{}},
pN(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=b==null
if(f&&h.c.length===0)return
try{h.d=!0
if(!f){g.a=null
h.e=!1
try{b.$0()}finally{}}f=h.c
B.b.d6(f,A.ab5())
h.e=!1
g.b=f.length
g.c=0
for(n=0;n<g.b;){s=f[n]
r=!1
if(r){n=s.f
n.toString
m=n instanceof A.bP?A.cL(n):null
A.adj(A.az(m==null?A.aI(n):m).i(0),null,null)}try{s.Ii()}catch(l){q=A.au(l)
p=A.aG(l)
n=A.bj("while rebuilding dirty elements")
k=$.f9()
if(k!=null)k.$1(new A.bt(q,p,"widgets library",n,new A.Rr(g,h,s),!1))}if(r)A.adi()
n=++g.c
k=g.b
j=f.length
if(k>=j){k=h.e
k.toString}else k=!0
if(k){if(!!f.immutable$list)A.a_(A.X("sort"))
n=j-1
if(n-0<=32)A.Ig(f,0,n,A.ab5())
else A.If(f,0,n,A.ab5())
n=h.e=!1
g.b=f.length
while(!0){k=g.c
if(!(k>0?f[k-1].as:n))break
g.c=k-1}n=k}}}finally{for(f=h.c,n=f.length,i=0;i<n;++i){o=f[i]
o.at=!1}B.b.U(f)
h.d=!1
h.e=null}},
X1(a){return this.pN(a,null)},
Z2(){var s,r,q
try{this.HJ(this.b.gVM())}catch(q){s=A.au(q)
r=A.aG(q)
A.ae0(A.Cz("while finalizing the widget tree"),s,r,null)}finally{}},
a12(a,b){try{a.b=b
a.ep()}finally{}}}
A.Rr.prototype={
$0(){var s=null,r=A.a([],t.F),q=this.a,p=q.c,o=this.b.c.length,n="The element being rebuilt at the time was index "+p
q=""+q.b
if(p<o)J.kr(r,A.jd(n+" of "+q,this.c,!0,B.b7,s,!1,s,s,B.aA,s,!1,!0,!0,B.bm,s,t.h))
else J.kr(r,A.V7(n+" of "+q+", but _dirtyElements only had "+o+" entries. This suggests some confusion in the framework internals."))
return r},
$S:14}
A.tG.prototype={
w2(){var s=this.a
this.c=new A.a8c(this,s==null?null:s.c)}}
A.a8c.prototype={
cD(a){var s=this.a.HY(a)
if(s)return
s=this.b
if(s!=null)s.cD(a)}}
A.aP.prototype={
NZ(a){},
k(a,b){if(b==null)return!1
return this===b},
ep(){var s=this
if(A.aij(s.b,s.f)){s.fn()
s.b=null}s.aP(new A.UD(s))
s.b=null},
ga5(){var s,r
for(s=this;s!=null;){r={}
if(s.w===B.BQ)break
else if(s instanceof A.bs)return s.ga5()
else{r.a=null
s.aP(new A.UE(r))
s=r.a}}return null},
Yv(a){var s=null
return A.jd(a,this,!0,B.b7,s,!1,s,s,B.aA,s,!1,!0,!0,B.bm,s,t.h)},
aP(a){},
dm(a,b,c){var s,r,q=this
if(b==null){if(a!=null)q.wl(a)
return null}if(a!=null){s=a.f.k(0,b)
if(s){if(!J.f(a.d,c))q.J2(a,c)
s=a}else{s=a.f
s.toString
if(A.A(s)===A.A(b)&&J.f(s.a,b.a)){if(!J.f(a.d,c))q.J2(a,c)
a.b9(0,b)
s=a}else{q.wl(a)
r=q.qL(b,c)
s=r}}}else{r=q.qL(b,c)
s=r}return s},
eM(a,b){var s,r,q,p=this
p.a=a
p.d=b
p.w=B.c6
s=a!=null
if(s){r=a.e
r===$&&A.b();++r}else r=1
p.e=r
if(s)p.r=a.r
q=p.f.a
if(q instanceof A.dX)p.r.z.l(0,q,p)
p.vE()
p.w2()},
b9(a,b){this.f=b},
J2(a,b){new A.UF(b).$1(a)},
vJ(a){this.d=a},
EH(a){var s=a+1,r=this.e
r===$&&A.b()
if(r<s){this.e=s
this.aP(new A.UA(s))}},
mR(){this.aP(new A.UC())
this.d=null},
pJ(a){this.aP(new A.UB(a))
this.d=a},
UD(a,b){var s,r,q=$.ac.H$.z.j(0,a)
if(q==null)return null
s=q.f
s.toString
if(!(A.A(s)===A.A(b)&&J.f(s.a,b.a)))return null
r=q.a
if(r!=null){r.iz(q)
r.wl(q)}this.r.b.b.A(0,q)
return q},
qL(a,b){var s,r,q,p,o,n,m=this,l=!1
if(l)A.adj(A.A(a).i(0),null,null)
try{s=a.a
if(s instanceof A.dX){r=m.UD(s,a)
if(r!=null){o=r
o.a=m
o.toString
n=m.e
n===$&&A.b()
o.EH(n)
o.c5()
o.aP(A.ajc())
o.pJ(b)
q=m.dm(r,a,b)
o=q
o.toString
return o}}p=a.bH(0)
p.eM(m,b)
return p}finally{if(l)A.adi()}},
wl(a){a.a=null
a.mR()
this.r.b.E(0,a)},
iz(a){},
c5(){var s=this,r=s.z,q=r==null,p=!q&&r.a!==0||s.Q
s.w=B.c6
if(!q)r.U(0)
s.Q=!1
s.vE()
s.w2()
if(s.as)s.r.zq(s)
if(p)s.b3()},
cZ(){var s,r,q=this,p=q.z
if(p!=null&&p.a!==0)for(p=new A.k5(p,p.m1()),s=A.n(p).c;p.t();){r=p.d;(r==null?s.a(r):r).ag.A(0,q)}q.y=null
q.w=B.ZC},
nW(){var s=this,r=s.f,q=r==null?null:r.a
if(q instanceof A.dX){r=s.r.z
if(J.f(r.j(0,q),s))r.A(0,q)}s.z=s.f=null
s.w=B.BQ},
gd5(a){var s,r=this.ga5()
if(r instanceof A.C){s=r.k3
s.toString
return s}return null},
wq(a,b){var s=this.z;(s==null?this.z=A.cu(t.tx):s).E(0,a)
a.IZ(this,b)
s=a.f
s.toString
return t.sg.a(s)},
a1(a){var s=this.y,r=s==null?null:s.j(0,A.az(a))
if(r!=null)return a.a(this.wq(r,null))
this.Q=!0
return null},
iT(a){var s=this.y
return s==null?null:s.j(0,A.az(a))},
w2(){var s=this.a
this.c=s==null?null:s.c},
vE(){var s=this.a
this.y=s==null?null:s.y},
GD(a){var s,r,q,p=this.a
while(!0){s=p==null
if(!s){r=p.f
r.toString
q=r instanceof A.bP?A.cL(r):null
r=A.az(q==null?A.aI(r):q)!==A.az(a)}else r=!1
if(!r)break
p=p.a}if(s)s=null
else{s=p.f
s.toString}return a.h("0?").a(s)},
ju(a){var s,r,q=this.a
for(;s=q==null,!s;){if(q instanceof A.eX){r=q.ok
r.toString
r=a.b(r)}else r=!1
if(r)break
q=q.a}t.Ci.a(q)
if(s)s=null
else{s=q.ok
s.toString}return a.h("0?").a(s)},
qv(a){var s=this.a
for(;s!=null;){if(s instanceof A.bs&&a.b(s.ga5()))return a.a(s.ga5())
s=s.a}return null},
yW(a){var s=this.a
while(!0){if(!(s!=null&&a.$1(s)))break
s=s.a}},
b3(){this.fn()},
cD(a){var s=this.c
if(s!=null)s.cD(a)},
bP(){var s=this.f
s=s==null?null:s.bP()
return s==null?"<optimized out>#"+A.bB(this)+"(DEFUNCT)":s},
fn(){var s=this
if(s.w!==B.c6)return
if(s.as)return
s.as=!0
s.r.zq(s)},
rn(a){var s
if(this.w===B.c6)s=!this.as&&!a
else s=!0
if(s)return
this.ha()},
Ii(){return this.rn(!1)},
ha(){this.as=!1},
$iaf:1}
A.UD.prototype={
$1(a){a.b=this.a.b
a.ep()},
$S:4}
A.UE.prototype={
$1(a){this.a.a=a},
$S:4}
A.UF.prototype={
$1(a){a.vJ(this.a)
if(!(a instanceof A.bs))a.aP(this)},
$S:4}
A.UA.prototype={
$1(a){a.EH(this.a)},
$S:4}
A.UC.prototype={
$1(a){a.mR()},
$S:4}
A.UB.prototype={
$1(a){a.pJ(this.a)},
$S:4}
A.CA.prototype={
aA(a){var s=this.d,r=new A.H4(s,A.am())
r.aB()
r.O8(s)
return r}}
A.qz.prototype={
eM(a,b){this.A1(a,b)
this.ui()},
ui(){this.Ii()},
ha(){var s,r,q,p,o,n,m=this,l=null
try{l=m.b2()
m.f.toString}catch(o){s=A.au(o)
r=A.aG(o)
n=A.V8(A.ae0(A.bj("building "+m.i(0)),s,r,new A.S8(m)))
l=n}finally{m.tg()}try{m.ay=m.dm(m.ay,l,m.d)}catch(o){q=A.au(o)
p=A.aG(o)
n=A.V8(A.ae0(A.bj("building "+m.i(0)),q,p,new A.S9(m)))
l=n
m.ay=m.dm(null,l,m.d)}},
aP(a){var s=this.ay
if(s!=null)a.$1(s)},
iz(a){this.ay=null
this.k0(a)}}
A.S8.prototype={
$0(){var s=A.a([],t.F)
return s},
$S:14}
A.S9.prototype={
$0(){var s=A.a([],t.F)
return s},
$S:14}
A.Im.prototype={
b2(){var s=this.f
s.toString
return t.yB.a(s).L(this)},
b9(a,b){this.oj(0,b)
this.rn(!0)}}
A.eX.prototype={
b2(){return this.ok.L(this)},
ep(){var s=this
if(A.aij(s.b,s.f))s.ok.ep()
s.KW()},
ui(){this.ok.aD()
this.ok.b3()
this.KH()},
ha(){var s=this
if(s.p1){s.ok.b3()
s.p1=!1}s.KI()},
b9(a,b){var s,r,q,p=this
p.oj(0,b)
s=p.ok
r=s.a
r.toString
q=p.f
q.toString
s.a=t.aw.a(q)
s.b_(r)
p.rn(!0)},
c5(){this.KU()
this.ok.c5()
this.fn()},
cZ(){this.ok.cZ()
this.zZ()},
nW(){var s=this
s.th()
s.ok.m()
s.ok=s.ok.c=null},
wq(a,b){return this.A_(a,b)},
b3(){this.KV()
this.p1=!0}}
A.u9.prototype={
b2(){var s=this.f
s.toString
return t.im.a(s).b},
b9(a,b){var s=this,r=s.f
r.toString
t.im.a(r)
s.oj(0,b)
s.yS(r)
s.rn(!0)},
yS(a){this.le(a)}}
A.lo.prototype={
AY(a){this.aP(new A.Zn(a))},
le(a){var s=this.f
s.toString
this.AY(this.$ti.h("d9<1>").a(s))}}
A.Zn.prototype={
$1(a){if(a instanceof A.bs)this.a.mv(a.ga5())
else a.aP(this)},
$S:4}
A.eF.prototype={
vE(){var s=this,r=s.a,q=r==null?null:r.y
if(q==null)q=B.Sf
r=s.f
r.toString
s.y=q.a0V(0,A.A(r),s)},
zv(a,b){this.ag.l(0,a,b)},
IZ(a,b){this.zv(a,null)},
HV(a,b){b.b3()},
yS(a){var s=this.f
s.toString
if(t.sg.a(s).bQ(a))this.LS(a)},
le(a){var s,r,q
for(s=this.ag,s=new A.wr(s,s.tX()),r=A.n(s).c;s.t();){q=s.d
this.HV(a,q==null?r.a(q):q)}}}
A.bs.prototype={
ga5(){var s=this.ay
s.toString
return s},
Q7(){var s=this.a
while(!0){if(!(s!=null&&!(s instanceof A.bs)))break
s=s.a}return t.bI.a(s)},
Q6(){var s,r={},q=r.a=this.a
r.b=null
while(!0){if(!(q!=null&&!(q instanceof A.bs)))break
if(q instanceof A.lo){r.b=q
break}s=q.a
r.a=s
q=s}return r.b},
eM(a,b){var s,r=this
r.A1(a,b)
s=r.f
s.toString
r.ay=t.xL.a(s).aA(r)
r.pJ(b)
r.tg()},
b9(a,b){this.oj(0,b)
this.Dk()},
ha(){this.Dk()},
Dk(){var s=this,r=s.f
r.toString
t.xL.a(r).aE(s,s.ga5())
s.tg()},
a1Q(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=new A.a_D(a4),g=new A.a_E(i),f=a3.length,e=f-1,d=a2.length,c=d-1,b=d===f?a2:A.aX(f,$.aet(),!1,t.h),a=i,a0=0,a1=0
while(!0){if(!(a1<=c&&a0<=e))break
s=h.$1(a2[a1])
r=a3[a0]
if(s!=null){f=s.f
f.toString
q=f instanceof A.bP?A.cL(f):i
d=A.az(q==null?A.aI(f):q)
q=r instanceof A.bP?A.cL(r):i
f=!(d===A.az(q==null?A.aI(r):q)&&J.f(f.a,r.a))}else f=!0
if(f)break
f=j.dm(s,r,g.$2(a0,a))
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
d=A.az(q==null?A.aI(f):q)
q=r instanceof A.bP?A.cL(r):i
f=!(d===A.az(q==null?A.aI(r):q)&&J.f(f.a,r.a))}else f=!0
if(f)break;--p;--e}if(o){n=A.y(t.qI,t.h)
for(;a1<=p;){s=h.$1(a2[a1])
if(s!=null){f=s.f.a
if(f!=null)n.l(0,f,s)
else{s.a=null
s.mR()
f=j.r.b
if(s.w===B.c6){s.cZ()
s.aP(A.ab6())}f.b.E(0,s)}}++a1}o=!0}else n=i
for(;a0<=e;a=f){r=a3[a0]
if(o){m=r.a
if(m!=null){s=n.j(0,m)
if(s!=null){f=s.f
f.toString
q=f instanceof A.bP?A.cL(f):i
d=A.az(q==null?A.aI(f):q)
q=r instanceof A.bP?A.cL(r):i
if(d===A.az(q==null?A.aI(r):q)&&J.f(f.a,m))n.A(0,m)
else s=i}}else s=i}else s=i
f=j.dm(s,r,g.$2(a0,a))
f.toString
b[a0]=f;++a0}e=a3.length-1
while(!0){if(!(a1<=c&&a0<=e))break
f=j.dm(a2[a1],a3[a0],g.$2(a0,a))
f.toString
b[a0]=f;++a0;++a1
a=f}if(o&&n.a!==0)for(f=n.gaY(n),f=new A.dH(J.ar(f.a),f.b),d=A.n(f).z[1];f.t();){l=f.a
if(l==null)l=d.a(l)
if(!a4.B(0,l)){l.a=null
l.mR()
k=j.r.b
if(l.w===B.c6){l.cZ()
l.aP(A.ab6())}k.b.E(0,l)}}return b},
cZ(){this.zZ()},
nW(){var s=this,r=s.f
r.toString
t.xL.a(r)
s.th()
r.mX(s.ga5())
s.ay.m()
s.ay=null},
vJ(a){var s,r=this,q=r.d
r.KT(a)
s=r.CW
s.toString
s.iG(r.ga5(),q,r.d)},
pJ(a){var s,r,q=this
q.d=a
s=q.CW=q.Q7()
if(s!=null)s.iE(q.ga5(),a)
r=q.Q6()
if(r!=null){s=r.f
s.toString
t.yL.a(s).mv(q.ga5())}},
mR(){var s=this,r=s.CW
if(r!=null){r.iM(s.ga5(),s.d)
s.CW=null}s.d=null},
iE(a,b){},
iG(a,b,c){},
iM(a,b){}}
A.a_D.prototype={
$1(a){var s=this.a.B(0,a)
return s?null:a},
$S:265}
A.a_E.prototype={
$2(a,b){return new A.nu(b,a,t.wx)},
$S:266}
A.uz.prototype={
eM(a,b){this.tq(a,b)}}
A.DA.prototype={
iz(a){this.k0(a)},
iE(a,b){},
iG(a,b,c){},
iM(a,b){}}
A.v3.prototype={
aP(a){var s=this.p1
if(s!=null)a.$1(s)},
iz(a){this.p1=null
this.k0(a)},
eM(a,b){var s,r,q=this
q.tq(a,b)
s=q.p1
r=q.f
r.toString
q.p1=q.dm(s,t.Dp.a(r).c,null)},
b9(a,b){var s,r,q=this
q.lO(0,b)
s=q.p1
r=q.f
r.toString
q.p1=q.dm(s,t.Dp.a(r).c,null)},
iE(a,b){var s=this.ay
s.toString
t.fB.a(s).saJ(a)},
iG(a,b,c){},
iM(a,b){var s=this.ay
s.toString
t.fB.a(s).saJ(null)}}
A.ek.prototype={
ga5(){return t.gz.a(A.bs.prototype.ga5.call(this))},
gFw(a){var s=this.p1
s===$&&A.b()
return new A.aF(s,new A.YB(this),A.ai(s).h("aF<1>"))},
iE(a,b){var s=this.ga5(),r=b.a
s.xk(0,a,r==null?null:r.ga5())},
iG(a,b,c){var s=this.ga5(),r=c.a
s.r2(a,r==null?null:r.ga5())},
iM(a,b){this.ga5().A(0,a)},
aP(a){var s,r,q,p,o=this.p1
o===$&&A.b()
s=o.length
r=this.p2
q=0
for(;q<s;++q){p=o[q]
if(!r.B(0,p))a.$1(p)}},
iz(a){this.p2.E(0,a)
this.k0(a)},
qL(a,b){return this.A0(a,b)},
eM(a,b){var s,r,q,p,o,n,m,l=this
l.tq(a,b)
s=l.f
s.toString
s=t.tk.a(s).c
r=s.length
q=A.aX(r,$.aet(),!1,t.h)
for(p=t.wx,o=null,n=0;n<r;++n,o=m){m=l.A0(s[n],new A.nu(o,n,p))
q[n]=m}l.p1=q},
b9(a,b){var s,r,q,p=this
p.lO(0,b)
s=p.f
s.toString
t.tk.a(s)
r=p.p1
r===$&&A.b()
q=p.p2
p.p1=p.a1Q(r,s.c,q)
q.U(0)}}
A.YB.prototype={
$1(a){return!this.a.p2.B(0,a)},
$S:35}
A.nu.prototype={
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return b instanceof A.nu&&this.b===b.b&&J.f(this.a,b.a)},
gu(a){return A.T(this.b,this.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.M3.prototype={}
A.M6.prototype={
bH(a){return A.a_(A.c_(null))}}
A.O7.prototype={}
A.l_.prototype={}
A.c3.prototype={
FK(){return this.a.$0()},
Hf(a){return this.b.$1(a)}}
A.D4.prototype={
L(a){var s=this,r=A.y(t.n,t.ob),q=A.d6(a),p=q==null?null:q.ay
if(s.d==null)if(s.e==null)if(s.f==null)if(s.r==null)q=!1
else q=!0
else q=!0
else q=!0
else q=!0
if(q)r.l(0,B.BH,new A.c3(new A.VS(s),new A.VT(s,p),t.g0))
if(s.ay==null)q=!1
else q=!0
if(q)r.l(0,B.Yr,new A.c3(new A.VU(s),new A.VY(s,p),t.da))
if(s.cy==null)q=!1
else q=!0
if(q)r.l(0,B.BE,new A.c3(new A.VZ(s),new A.W_(s,p),t.on))
if(s.rx!=null||s.ry!=null||s.to!=null||!1)r.l(0,B.ly,new A.c3(new A.W0(s),new A.W1(s,p),t.n_))
if(s.x2!=null||s.y1!=null||s.y2!=null||s.ai!=null)r.l(0,B.lx,new A.c3(new A.W2(s),new A.W3(s,p),t.ta))
if(s.an!=null||s.aa!=null||s.aR!=null||!1)r.l(0,B.lw,new A.c3(new A.W4(s),new A.VV(s,p),t.uX))
q=!1
if(q)r.l(0,B.Yu,new A.c3(new A.VW(s),new A.VX(s,p),t.p1))
return new A.iv(s.c,r,s.ao,s.ae,null,null)}}
A.VS.prototype={
$0(){return A.aqz(this.a,null)},
$S:267}
A.VT.prototype={
$1(a){var s=this.a
a.y1=s.d
a.y2=s.e
a.ai=s.f
a.an=s.r
a.eH=a.c8=a.bb=a.bg=a.aR=a.aa=a.ag=null
a.b=this.b},
$S:268}
A.VU.prototype={
$0(){var s=t.S
return new A.fl(A.y(s,t.Aj),this.a,null,A.y(s,t.C))},
$S:269}
A.VY.prototype={
$1(a){a.e=null
a.f=this.a.ay
a.r=null
a.b=this.b},
$S:270}
A.VZ.prototype={
$0(){return A.aok(this.a,null,null)},
$S:271}
A.W_.prototype={
$1(a){a.k3=a.k2=null
a.k4=this.a.cy
a.ag=a.an=a.ai=a.y2=a.y1=a.xr=a.x2=a.x1=a.to=a.ry=a.rx=a.RG=a.R8=a.p4=a.p3=a.p2=a.p1=a.ok=null
a.b=this.b},
$S:272}
A.W0.prototype={
$0(){return A.ahv(this.a,null)},
$S:87}
A.W1.prototype={
$1(a){var s
a.as=null
s=this.a
a.at=s.rx
a.ax=s.ry
a.ay=s.to
a.ch=null
a.Q=s.aT
a.b=this.b},
$S:70}
A.W2.prototype={
$0(){return A.acy(this.a,null)},
$S:68}
A.W3.prototype={
$1(a){var s=this.a
a.as=s.x2
a.at=null
a.ax=s.y1
a.ay=s.y2
a.ch=s.ai
a.Q=s.aT
a.b=this.b},
$S:75}
A.W4.prototype={
$0(){return A.ap0(this.a,null)},
$S:277}
A.VV.prototype={
$1(a){var s=this.a
a.as=s.an
a.at=null
a.ax=s.aa
a.ay=s.aR
a.ch=null
a.Q=s.aT
a.b=this.b},
$S:278}
A.VW.prototype={
$0(){var s=t.S,r=A.cu(s)
return new A.fo(B.lG,A.y(s,t.o),r,this.a,null,A.y(s,t.C))},
$S:279}
A.VX.prototype={
$1(a){a.ax=a.as=a.at=a.Q=null
a.b=this.b},
$S:280}
A.iv.prototype={
ap(){return new A.o_(B.RA,B.l)}}
A.o_.prototype={
aD(){var s,r,q=this
q.aV()
s=q.a
r=s.r
q.e=r==null?new A.Kg(q):r
q.vv(s.d)},
b_(a){var s,r=this
r.bt(a)
if(!(a.r==null&&r.a.r==null)){s=r.a.r
r.e=s==null?new A.Kg(r):s}r.vv(r.a.d)},
a1j(a){if(this.a.f)return
t.qS.a(this.c.ga5()).sa1V(a)},
m(){for(var s=this.d,s=J.ar(s.gaY(s));s.t();)s.gG(s).m()
this.d=null
this.aN()},
vv(a){var s,r,q,p,o=this,n=o.d
n.toString
o.d=A.y(t.n,t.oi)
for(s=J.ar(a.gbk(a));s.t();){r=s.gG(s)
q=o.d
q.toString
p=n.j(0,r)
q.l(0,r,p==null?a.j(0,r).FK():p)
q=a.j(0,r)
q.toString
r=o.d.j(0,r)
r.toString
q.Hf(r)}for(s=J.ar(n.gbk(n));s.t();){r=s.gG(s)
if(!o.d.V(0,r))n.j(0,r).m()}},
Qq(a){var s,r
for(s=this.d,s=J.ar(s.gaY(s));s.t();){r=s.gG(s)
r.d.l(0,a.gbL(),a.gc2(a))
if(r.eK(a))r.fL(a)
else r.nj(a)}},
RZ(a){var s,r
for(s=this.d,s=J.ar(s.gaY(s));s.t();){r=s.gG(s)
r.d.l(0,a.gbL(),a.gc2(a))
if(r.a_I(a))r.vR(a)}},
W4(a){this.e.w1(a)},
L(a){var s,r,q,p=this,o=null,n=p.a,m=n.e,l=m==null
if(l)s=n.c==null?B.e1:B.bM
else s=m
r=n.c
q=A.DG(s,r,o,p.gQp(),p.gRY(),o,o)
if(!n.f){if(l)n=r==null?B.e1:B.bM
else n=m
q=new A.L3(n,p.gW3(),q,o)}return q}}
A.L3.prototype={
aA(a){var s=new A.iw(B.bM,null,A.am())
s.aB()
s.saJ(null)
s.v=this.e
this.f.$1(s)
return s},
aE(a,b){b.v=this.e
this.f.$1(b)}}
A.a1C.prototype={
i(a){return"SemanticsGestureDelegate()"}}
A.Kg.prototype={
w1(a){var s=this,r=s.a.d
r.toString
a.siJ(s.QP(r))
a.sjG(s.QG(r))
a.sa0s(s.QD(r))
a.sa0y(s.QQ(r))},
QP(a){var s=t.f3.a(a.j(0,B.BH))
if(s==null)return null
return new A.a6q(s)},
QG(a){var s=t.yA.a(a.j(0,B.BE))
if(s==null)return null
return new A.a6p(s)},
QD(a){var s=t.oq.a(a.j(0,B.lx)),r=t.rR.a(a.j(0,B.lw)),q=s==null?null:new A.a6m(s),p=r==null?null:new A.a6n(r)
if(q==null&&p==null)return null
return new A.a6o(q,p)},
QQ(a){var s=t.iC.a(a.j(0,B.ly)),r=t.rR.a(a.j(0,B.lw)),q=s==null?null:new A.a6r(s),p=r==null?null:new A.a6s(r)
if(q==null&&p==null)return null
return new A.a6t(q,p)}}
A.a6q.prototype={
$0(){var s=this.a,r=s.y1
if(r!=null)r.$1(new A.oB(B.j,B.j))
r=s.y2
if(r!=null)r.$1(new A.oC())
s=s.ai
if(s!=null)s.$0()},
$S:0}
A.a6p.prototype={
$0(){var s=this.a,r=s.ok
if(r!=null)r.$1(B.PZ)
r=s.k4
if(r!=null)r.$0()
s=s.p3
if(s!=null)s.$1(B.PX)},
$S:0}
A.a6m.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.i7(B.j))
r=s.at
if(r!=null)r.$1(new A.h3(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fm(B.c5,0))},
$S:16}
A.a6n.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.i7(B.j))
r=s.at
if(r!=null)r.$1(new A.h3(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fm(B.c5,null))},
$S:16}
A.a6o.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(a)
s=this.b
if(s!=null)s.$1(a)},
$S:16}
A.a6r.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.i7(B.j))
r=s.at
if(r!=null)r.$1(new A.h3(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fm(B.c5,0))},
$S:16}
A.a6s.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.i7(B.j))
r=s.at
if(r!=null)r.$1(new A.h3(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fm(B.c5,null))},
$S:16}
A.a6t.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(a)
s=this.b
if(s!=null)s.$1(a)},
$S:16}
A.l6.prototype={
D(){return"HeroFlightDirection."+this.b}}
A.l4.prototype={
ap(){return new A.pb(new A.br(null,t.J),B.l)}}
A.Wx.prototype={
$2(a,b){var s=a.f
s.toString
t.tV.a(s)
s=a.ok
s.toString
t.BJ.a(s)
if(!this.b||!1)this.a.l(0,b,s)
else s.Gn()},
$S:283}
A.Wy.prototype={
$1(a){var s,r,q=this,p=a.f
p.toString
if(p instanceof A.l4){t.jw.a(a)
s=p.c
if(A.acP(a)===q.a)q.b.$2(a,s)
else{r=A.Yq(a,t.X)
if(r!=null)p=r.gjy()
else p=!1
if(p)q.b.$2(a,s)}}a.aP(q)},
$S:4}
A.pb.prototype={
t8(a){var s,r=this
r.f=a
s=r.c.ga5()
s.toString
r.az(new A.a75(r,t.x.a(s)))},
t7(){return this.t8(!1)},
kQ(a){var s=this
if(a||s.e==null)return
s.e=null
if(s.c!=null)s.az(new A.a74())},
Gn(){return this.kQ(!1)},
L(a){var s,r=this,q=null,p=r.e,o=p==null,n=!o
if(n)r.a.toString
if(n&&!r.f){o=p.a
return A.jT(q,p.b,o)}s=o?q:p.a
p=o?q:p.b
return A.jT(new A.tL(n,new A.oI(o,new A.ih(r.a.e,r.d),q),q),p,s)}}
A.a75.prototype={
$0(){var s=this.b.k3
s.toString
this.a.e=s},
$S:0}
A.a74.prototype={
$0(){},
$S:0}
A.a71.prototype={
gbB(a){var s,r=this
if(r.a===B.bK){s=r.e.fy
s.toString}else{s=r.d.fy
s.toString}return A.ey(B.cc,s,r.z?null:new A.ro(B.cc))},
mM(a,b){var s
this.r.a.toString
s=this.w.$2(a,b)
return s==null?new A.ui(a,b):s},
gGP(){var s,r,q=this,p=q.Q
if(p===$){s=q.f.c
s.toString
r=A.ahE(s,$.ac.H$.z.j(0,q.d.k2))
q.Q!==$&&A.be()
q.Q=r
p=r}return p},
grA(){var s,r,q=this,p=q.as
if(p===$){s=q.r.c
s.toString
r=A.ahE(s,$.ac.H$.z.j(0,q.e.k2))
q.as!==$&&A.be()
q.as=r
p=r}return p},
gjB(){var s,r,q=this,p=q.at
if(p===$){s=q.grA()
if(s.gHv(s))if(!q.z){s=q.gGP()
s=s.gHv(s)
r=s}else r=!0
else r=!1
q.at!==$&&A.be()
p=q.at=r}return p},
i(a){var s,r,q=this,p=q.a.i(0),o=q.f,n=o.a.c.i(0),m=q.d.b.i(0),l=q.e.b.i(0)
o=o.i(0)
s=q.r.i(0)
r=q.gjB()?"":", INVALID"
return"_HeroFlightManifest("+p+" tag: "+n+" from route: "+m+" to route: "+l+" with hero: "+o+" to "+s+")"+r}}
A.iN.prototype={
ON(a){var s,r,q,p,o=this,n=o.c
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
return A.kv(s,new A.a72(o),n)},
Dj(a){var s,r=this,q=a===B.U
if(q||a===B.H){s=r.e
s===$&&A.b()
s.saU(0,null)
r.r.ll(0)
r.r=null
s=r.f
s===$&&A.b()
s.f.kQ(q)
r.f.r.kQ(a===B.H)
r.a.$1(r)
r.e.F(0,r.gHZ())}},
Ch(a){var s=this,r=s.f
r===$&&A.b()
r=r.d.a
if((r==null?null:r.CW.a)!==!0){s.Dj(a)
return}if(s.x)return
r.toString
s.x=!0
r.CW.S(0,new A.a73(s,r))},
a0x(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(!h.w){s=h.f
s===$&&A.b()
s=s.r.c!=null}else s=!1
if(s){s=h.f
s===$&&A.b()
r=t.av.a(s.r.c.ga5())}else r=null
if(r!=null&&r.b!=null&&r.k3!=null){s=h.f
s===$&&A.b()
s=$.ac.H$.z.j(0,s.e.k2)
s=s==null?null:s.ga5()
q=A.cd(r.bs(0,t.av.a(s)),B.j)}else q=null
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
h.b=i.mM(p.a,new A.z(k,j,k+(n-m),j+(l-o)))}}else{p=h.d
if(p.gaZ(p)===B.U){p=h.e
p===$&&A.b()
o=$.akC()
n=p.gn(p)
m=A.n(o).h("mg<aB.T>")
h.d=new A.b4(t.m.a(p),new A.mg(new A.i6(new A.id(n,1,B.aS)),o,m),m.h("b4<aB.T>"))}}if(s)s=!(isFinite(q.a)&&isFinite(q.b))
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
A.a72.prototype={
$2(a,b){var s,r=null,q=this.a,p=q.b
p===$&&A.b()
s=q.e
s===$&&A.b()
s=p.ac(0,s.gn(s))
s.toString
p=q.f
p===$&&A.b()
p=p.c
return A.GG(p.b-s.d,new A.ha(!0,r,A.afz(b,q.d),r),r,r,s.a,p.a-s.c,s.b,r)},
$S:284}
A.a73.prototype={
$0(){var s,r=this.a
r.x=!1
this.b.CW.F(0,this)
s=r.e
s===$&&A.b()
r.Dj(s.gaZ(s))},
$S:0}
A.rA.prototype={
q8(a,b){this.oY(b,a,B.bK,!1)},
q7(a,b){var s=$.fS()
A.CD(this)
if(!s.a.get(this).CW.a)this.oY(a,b,B.bL,!1)},
q9(a,b){var s=a.gjy()
if(s)this.oY(b,a,B.bK,!1)},
G5(a,b){this.oY(a,b,B.bL,!0)},
mW(){var s,r,q,p=$.fS()
A.CD(this)
if(p.a.get(this).CW.a)return
p=this.b
p=p.gaY(p)
s=A.n(p).h("aF<p.E>")
r=A.ax(new A.aF(p,new A.Ww(),s),!1,s.h("p.E"))
for(p=r.length,q=0;q<p;++q)r[q].Ch(B.H)},
oY(a,b,c,d){var s
if(b!=a&&b instanceof A.ho&&a instanceof A.ho){switch(c.a){case 1:s=a.fy
if(s.gn(s)===0)return
break
case 0:s=b.fy
if(s.gn(s)===1)return
break}if(d)if(c===B.bL){b.gnx()
s=!0}else s=!1
else s=!1
if(s)this.Eb(a,b,c,d)
else{s=b.fy
b.sr3(s.gn(s)===0)
$.ac.ax$.push(new A.Wv(this,a,b,c,d))}}},
Eb(b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null
b4.sr3(!1)
s=$.fS()
A.CD(b1)
s=s.a.get(b1)
r=s==null
if(r)q=b2
else{p=s.d
p===$&&A.b()
q=p.gbi()}if(r||q==null)return
o=s.c.ga5()
if(!(o instanceof A.C))return
n=$.ac.H$.z.j(0,b3.k2)
m=n!=null?A.afH(n,b6,s):B.yU
l=$.ac.H$.z.j(0,b4.k2)
k=l!=null?A.afH(l,b6,s):B.yU
for(s=m.gff(m),s=s.ga7(s),r=b1.gPD(),p=b1.a,j=b1.b,i=t.Cf,h=b1.gRx(),g=t.A,f=t.Q,e=t.b,d=t.tY,c=t.a7,b=t.m,a=c.h("b4<aB.T>"),a0=t.sD;s.t();){a1=s.gG(s)
a2=a1.gdD(a1)
a3=a1.gn(a1)
a4=k.j(0,a2)
a5=j.j(0,a2)
if(a4==null)a6=b2
else{a1=o.k3
a1.toString
a4.a.toString
a3.a.toString
a6=new A.a71(b5,q,a1,b3,b4,a3,a4,p,r,b6,a5!=null)}if(a6!=null&&a6.gjB()){k.A(0,a2)
if(a5!=null){a1=a5.f
a1===$&&A.b()
a7=a1.a
if(a7===B.bK&&a6.a===B.bL){a1=a5.e
a1===$&&A.b()
a1.saU(0,new A.eo(a6.gbB(a6),new A.bd(A.a([],g),f),0))
a1=a5.b
a1===$&&A.b()
a5.b=new A.uy(a1,a1.b,a1.a,a0)}else{a7=a7===B.bL&&a6.a===B.bK
a8=a5.e
if(a7){a8===$&&A.b()
a1=a6.gbB(a6)
a7=a5.f
a7=a7.gbB(a7)
a7=a7.gn(a7)
a8.saU(0,new A.b4(b.a(a1),new A.aH(a7,1,c),a))
a1=a5.f
a7=a1.f
a8=a6.r
if(a7!==a8){a7.kQ(!0)
a8.t7()
a1=a5.f
a7=a5.b
a7===$&&A.b()
a5.b=a1.mM(a7.b,a6.grA())}else{a7=a5.b
a7===$&&A.b()
a5.b=a1.mM(a7.b,a7.a)}}else{a7=a5.b
a7===$&&A.b()
a8===$&&A.b()
a5.b=a1.mM(a7.ac(0,a8.gn(a8)),a6.grA())
a5.c=null
a1=a6.a
a7=a5.e
if(a1===B.bL)a7.saU(0,new A.eo(a6.gbB(a6),new A.bd(A.a([],g),f),0))
else a7.saU(0,a6.gbB(a6))
a5.f.f.kQ(!0)
a5.f.r.kQ(!0)
a6.f.t8(a1===B.bK)
a6.r.t7()
a1=a5.r.f.gbi()
if(a1!=null)a1.CS()}}a5.f=a6}else{a1=new A.iN(h,B.cR)
a7=A.a([],g)
a8=new A.bd(a7,f)
a9=new A.u8(a8,new A.bd(A.a([],e),d),0)
a9.a=B.H
a9.b=0
a9.bo()
a8.b=!0
a7.push(a1.gQY())
a1.e=a9
a1.f=a6
switch(a6.a.a){case 1:a9.saU(0,new A.eo(a6.gbB(a6),new A.bd(A.a([],g),f),0))
b0=!1
break
case 0:a9.saU(0,a6.gbB(a6))
b0=!0
break
default:b0=b2}a7=a1.f
a1.b=a7.mM(a7.gGP(),a1.f.grA())
a1.f.f.t8(b0)
a1.f.r.t7()
a7=a1.f
a8=new A.m9(!1,$.bq())
a8.aa$=!0
a8=new A.eN(a1.gOM(),!1,a8,new A.br(b2,i))
a1.r=a8
a7.b.xj(0,a8)
a8=a1.e
a8.bo()
a8=a8.aW$
a8.b=!0
a8.a.push(a1.gHZ())
j.l(0,a2,a1)}}else if(a5!=null)a5.w=!0}for(s=J.ar(k.gaY(k));s.t();)s.gG(s).Gn()},
Ry(a){var s=a.f
s===$&&A.b()
this.b.A(0,s.f.a.c)},
PE(a,b,c,d,e){var s,r,q=e.f
q.toString
t.tV.a(q)
s=A.d6(e)
r=A.d6(d)
if(s==null||r==null)return q.e
return A.kv(b,new A.Wu(s,c,r.f,s.f,b,q),null)}}
A.Ww.prototype={
$1(a){var s=a.f
s===$&&A.b()
if(s.y)if(s.a===B.bL){s=a.e
s===$&&A.b()
s=s.gaZ(s)===B.H}else s=!1
else s=!1
return s},
$S:287}
A.Wv.prototype={
$1(a){var s=this
s.a.Eb(s.b,s.c,s.d,s.e)},
$S:2}
A.Wu.prototype={
$2(a,b){var s=this,r=s.c,q=s.d,p=s.e
r=s.b===B.bK?new A.r6(r,q).ac(0,p.gn(p)):new A.r6(q,r).ac(0,p.gn(p))
return new A.eH(s.a.FQ(r),s.f.e,null)},
$S:288}
A.nn.prototype={
L(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.a1(t.I)
f.toString
s=f.w
r=A.afL(a)
q=r.a
p=r.b
o=r.c
n=r.d
m=r.e
f=this.c
if(f==null)return A.dv(g,A.jT(g,q,q),!1,g,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)
l=r.r
k=l==null?g:A.E(l,0,1)
if(k==null)k=1
l=r.f
l.toString
if(k!==1)j=A.aY(B.d.b1(255*((l.gn(l)>>>24&255)/255*k)),l.gn(l)>>>16&255,l.gn(l)>>>8&255,l.gn(l)&255)
else j=l
l=A.bp(f.a)
i=A.a([],t.BV)
if(p!=null)i.push(new A.jg("FILL",p))
if(o!=null)i.push(new A.jg("wght",o))
if(n!=null)i.push(new A.jg("GRAD",n))
if(m!=null)i.push(new A.jg("opsz",m))
h=A.agL(g,g,B.UO,g,g,!0,g,A.a4S(g,A.bS(g,g,j,g,g,g,g,g,"MaterialIcons",g,g,q,g,i,g,g,g,!1,g,g,g,g,g,r.w,g,g),l),B.bD,s,g,1,B.aP)
if(f.d)switch(s.a){case 0:f=new A.bb(new Float64Array(16))
f.cO()
f.hi(0,-1,1,1)
h=A.ahk(B.a3,h,f,!1)
break
case 1:break}return A.dv(g,new A.rd(!0,A.jT(A.mX(h,g,g),q,q),g),!1,g,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)}}
A.l9.prototype={
k(a,b){var s
if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
if(b instanceof A.l9)if(b.a===this.a)s=b.d===this.d
else s=!1
else s=!1
return s},
gu(a){return A.T(this.a,"MaterialIcons",null,this.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"IconData(U+"+B.c.jH(B.f.iP(this.a,16).toUpperCase(),5,"0")+")"}}
A.la.prototype={
bQ(a){return!this.w.k(0,a.w)}}
A.WP.prototype={
$1(a){return A.acA(this.c,A.afK(a).bT(this.b),this.a)},
$S:289}
A.cn.prototype={
mL(a,b,c,d,e,f,g,h){var s,r=this,q=g==null?r.a:g,p=b==null?r.b:b,o=h==null?r.c:h,n=c==null?r.d:c,m=e==null?r.e:e,l=a==null?r.f:a
if(d==null){s=r.r
s=s==null?null:A.E(s,0,1)}else s=d
return new A.cn(q,p,o,n,m,l,s,f==null?r.w:f)},
fU(a){return this.mL(a,null,null,null,null,null,null,null)},
bT(a){var s=a.r
s=s==null?null:A.E(s,0,1)
return this.mL(a.f,a.b,a.d,s,a.e,a.w,a.a,a.c)},
Y(a){return this},
k(a,b){var s,r,q=this
if(b==null)return!1
if(J.S(b)!==A.A(q))return!1
if(b instanceof A.cn)if(b.a==q.a)if(b.b==q.b)if(b.c==q.c)if(b.d==q.d)if(b.e==q.e)if(J.f(b.f,q.f)){s=b.r
s=s==null?null:A.E(s,0,1)
r=q.r
s=s==(r==null?null:A.E(r,0,1))&&A.cE(b.w,q.w)}else s=!1
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
A.Ld.prototype={}
A.rD.prototype={
ap(){return new A.ws(B.l)}}
A.ws.prototype={
aD(){var s=this
s.aV()
$.ac.ae$.push(s)
s.z=new A.BR(s)},
m(){var s,r=this
B.b.A($.ac.ae$,r)
r.Vu()
s=r.at
if(s!=null)s.m()
s=r.z
s===$&&A.b()
s.a=null
r.vb(null)
r.aN()},
b3(){var s,r=this
r.VV()
r.vf()
s=r.c
s.toString
if(A.ahh(s))r.SZ()
else r.Ef(!0)
r.cl()},
b_(a){var s=this
s.bt(a)
if(s.r)s.a.toString
if(!s.a.c.k(0,a.c))s.vf()},
ep(){this.vf()
this.MI()},
VV(){var s=this.c
s.toString
s=A.d6(s)
s=s==null?null:s.z
if(s==null){s=$.a1r.dw$
s===$&&A.b()
s=(s.a&2)!==0}this.w=s},
vf(){var s,r,q,p,o=this,n=o.z
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
o.W6(new A.uI(n,r,t.rZ).Y(A.ae5(q,s)))},
QF(a){var s=this,r=s.ax
if(r==null||a){s.as=s.Q=null
s.a.toString
r=s.ax=new A.ej(s.gRC(),null,null)}r.toString
return r},
oD(){return this.QF(!1)},
RD(a,b){this.az(new A.a77(this,a,b))},
vb(a){var s=this.e
$.bG.ax$.push(new A.a78(s))
this.e=a},
W6(a){var s,r,q=this,p=q.d
if(p==null)s=null
else{s=p.a
if(s==null)s=p}r=a.a
if(s===(r==null?a:r))return
if(q.r){p.toString
p.F(0,q.oD())}q.a.toString
q.az(new A.a79(q))
q.az(new A.a7a(q))
q.d=a
if(q.r)a.S(0,q.oD())},
SZ(){var s,r=this
if(r.r)return
s=r.d
s.toString
s.S(0,r.oD())
s=r.at
if(s!=null)s.m()
r.at=null
r.r=!0},
Ef(a){var s,r,q=this
if(!q.r)return
if(a)if(q.at==null){s=q.d
s=(s==null?null:s.a)!=null}else s=!1
else s=!1
if(s){s=q.d.a
if(s.w)A.a_(A.aa(u.y))
r=new A.nq(s)
r.oo(s)
q.at=r}s=q.d
s.toString
s.F(0,q.oD())
q.r=!1},
Vu(){return this.Ef(!1)},
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
l=new A.GP(q,p,n,m,s,j,j,B.dY,j,o,B.a3,B.bN,j,!1,r,!1,j)
l=A.dv(j,l,!1,j,!1,j,j,j,!0,"",j,j,j,j,j,j,j,j,j,j)
return l}}
A.a77.prototype={
$0(){var s,r=this.a
r.vb(this.b)
r.as=r.Q=r.f=null
s=r.x
r.x=s==null?0:s+1
r.y=B.nl.JK(r.y,this.c)},
$S:0}
A.a78.prototype={
$1(a){var s=this.a
if(s!=null)s.a.m()
return null},
$S:2}
A.a79.prototype={
$0(){this.a.vb(null)},
$S:0}
A.a7a.prototype={
$0(){var s=this.a
s.x=s.f=null
s.y=!1},
$S:0}
A.Pp.prototype={}
A.BE.prototype={
dk(a){var s=A.Ss(this.a,this.b,a)
s.toString
return s}}
A.r6.prototype={
dk(a){var s=A.acn(this.a,this.b,a)
s.toString
return s}}
A.kC.prototype={
dk(a){return A.mP(this.a,this.b,a)}}
A.m2.prototype={
dk(a){var s=A.b3(this.a,this.b,a)
s.toString
return s}}
A.Dm.prototype={}
A.ns.prototype={
gj1(){var s,r,q=this,p=q.d
if(p===$){s=q.a.d
r=A.ec(null,s,null,null,q)
q.d!==$&&A.be()
q.d=r
p=r}return p},
geY(){var s,r=this,q=r.e
if(q===$){s=r.gj1()
q=r.e=A.ey(r.a.c,s,null)}return q},
aD(){var s,r=this
r.aV()
s=r.gj1()
s.bo()
s=s.aQ$
s.b=!0
s.a.push(new A.X7(r))
r.Bv()},
b_(a){var s,r=this
r.bt(a)
if(r.a.c!==a.c){r.geY().m()
s=r.gj1()
r.e=A.ey(r.a.c,s,null)}r.gj1().e=r.a.d
if(r.Bv()){r.nf(new A.X6(r))
s=r.gj1()
s.sn(0,0)
s.d0(0)}},
m(){this.geY().m()
this.gj1().m()
this.MS()},
W9(a,b){var s
if(a==null)return
s=this.geY()
a.sw5(a.ac(0,s.gn(s)))
a.skP(0,b)},
Bv(){var s={}
s.a=!1
this.nf(new A.X5(s,this))
return s.a}}
A.X7.prototype={
$1(a){switch(a.a){case 3:this.a.a.toString
break
case 0:case 1:case 2:break}},
$S:3}
A.X6.prototype={
$3(a,b,c){this.a.W9(a,b)
return a},
$S:108}
A.X5.prototype={
$3(a,b,c){var s
if(b!=null){if(a==null)a=c.$1(b)
s=a.b
if(!J.f(b,s==null?a.a:s))this.a.a=!0
else if(a.b==null)a.skP(0,a.a)}else a=null
return a},
$S:108}
A.mH.prototype={
aD(){this.L8()
var s=this.gj1()
s.bo()
s=s.aW$
s.b=!0
s.a.push(this.gQW())},
QX(){this.az(new A.QR())}}
A.QR.prototype={
$0(){},
$S:0}
A.pT.prototype={
ap(){return new A.Ji(null,null,B.l)}}
A.Ji.prototype={
nf(a){this.CW=t.uh.a(a.$3(this.CW,this.a.w,new A.a5z()))},
L(a){var s,r=this.CW
r.toString
s=this.geY()
s=r.ac(0,s.gn(s))
return A.qS(this.a.r,null,B.cJ,!0,s,null,null,B.aP)}}
A.a5z.prototype={
$1(a){return new A.m2(t.F1.a(a),null)},
$S:291}
A.pU.prototype={
ap(){return new A.Jj(null,null,B.l)}}
A.Jj.prototype={
nf(a){var s=this,r=s.CW
s.a.toString
s.CW=t.iH.a(a.$3(r,B.az,new A.a5A()))
s.cx=t.nr.a(a.$3(s.cx,s.a.z,new A.a5B()))
r=t.mo
s.cy=r.a(a.$3(s.cy,s.a.Q,new A.a5C()))
s.db=r.a(a.$3(s.db,s.a.at,new A.a5D()))},
L(a){var s,r,q,p,o,n=this,m=n.a,l=m.w
m=m.x
s=n.CW
s.toString
r=n.geY()
r=s.ac(0,r.gn(r))
s=n.cx
s.toString
q=n.geY()
q=s.ac(0,q.gn(q))
s=n.a.Q
p=n.db
p.toString
o=n.geY()
o=p.ac(0,o.gn(o))
o.toString
return new A.Gw(l,m,r,q,s,o,n.a.r,null)}}
A.a5A.prototype={
$1(a){return new A.kC(t.ak.a(a),null)},
$S:292}
A.a5B.prototype={
$1(a){return new A.aH(A.Qb(a),null,t.a7)},
$S:92}
A.a5C.prototype={
$1(a){return new A.fZ(t.iO.a(a),null)},
$S:40}
A.a5D.prototype={
$1(a){return new A.fZ(t.iO.a(a),null)},
$S:40}
A.pe.prototype={
m(){var s=this,r=s.fh$
if(r!=null)r.F(0,s.gpt())
s.fh$=null
s.aN()},
c5(){this.dO()
this.cU()
this.pu()}}
A.jm.prototype={
bH(a){var s=A.h7(t.h,t.X)
return new A.rG(s,this,B.a2,A.n(this).h("rG<jm.T>"))}}
A.rG.prototype={
IZ(a,b){var s=this.ag,r=this.$ti,q=r.h("bZ<1>?").a(s.j(0,a))
if(q!=null&&q.gP(q))return
s.l(0,a,A.cu(r.c))},
HV(a,b){var s,r=this.$ti,q=r.h("bZ<1>?").a(this.ag.j(0,b))
if(q==null)return
if(!q.gP(q)){s=this.f
s.toString
s=r.h("jm<1>").a(s).a1S(a,q)
r=s}else r=!0
if(r)b.b3()}}
A.hb.prototype={
bQ(a){return a.f!==this.f},
bH(a){var s=new A.pf(A.h7(t.h,t.X),this,B.a2,A.n(this).h("pf<hb.T>"))
this.f.S(0,s.guH())
return s}}
A.pf.prototype={
b9(a,b){var s,r,q=this,p=q.f
p.toString
s=q.$ti.h("hb<1>").a(p).f
r=b.f
if(s!==r){p=q.guH()
s.F(0,p)
r.S(0,p)}q.LR(0,b)},
b2(){var s,r=this
if(r.bJ){s=r.f
s.toString
r.A3(r.$ti.h("hb<1>").a(s))
r.bJ=!1}return r.LQ()},
SA(){this.bJ=!0
this.fn()},
le(a){this.A3(a)
this.bJ=!1},
nW(){var s=this,r=s.f
r.toString
s.$ti.h("hb<1>").a(r).f.F(0,s.guH())
s.th()}}
A.Dn.prototype={}
A.pq.prototype={}
A.aaE.prototype={
$1(a){return this.a.a=a},
$S:48}
A.aaF.prototype={
$1(a){return a.b},
$S:293}
A.aaG.prototype={
$1(a){var s,r,q,p
for(s=J.aO(a),r=this.a,q=this.b,p=0;p<s.gp(a);++p)q.l(0,A.az(A.n(r.a[p].a).h("cH.T")),s.j(a,p))
return q},
$S:294}
A.cH.prototype={
i(a){return"LocalizationsDelegate["+A.az(A.n(this).h("cH.T")).i(0)+"]"}}
A.Pb.prototype={
la(a){return!0},
cv(a,b){return new A.bl(B.CH,t.mq)},
jX(a){return!1},
i(a){return"DefaultWidgetsLocalizations.delegate(en_US)"}}
A.BK.prototype={
gbA(){return B.r},
$iiJ:1}
A.wE.prototype={
bQ(a){return this.w!==a.w}}
A.t2.prototype={
ap(){return new A.LB(new A.br(null,t.J),A.y(t.n,t.z),B.l)}}
A.LB.prototype={
aD(){this.aV()
this.cv(0,this.a.c)},
Ow(a){var s,r,q,p,o,n,m=this.a.d,l=a.d
if(m.length!==l.length)return!0
s=A.a(m.slice(0),A.ai(m))
r=A.a(l.slice(0),A.ai(l))
for(q=0;q<s.length;++q){p=s[q]
o=r[q]
n=p instanceof A.bP?A.cL(p):null
m=A.az(n==null?A.aI(p):n)
n=o instanceof A.bP?A.cL(o):null
if(m===A.az(n==null?A.aI(o):n)){p.jX(o)
m=!1}else m=!0
if(m)return!0}return!1},
b_(a){var s,r=this
r.bt(a)
if(r.a.c.k(0,a.c)){r.a.toString
s=r.Ow(a)}else s=!0
if(s)r.cv(0,r.a.c)},
cv(a,b){var s,r=this,q={},p=r.a.d,o=p.length
if(o===0){r.f=b
return}q.a=null
s=A.at2(b,p).by(new A.a7x(q),t.Co)
q=q.a
if(q!=null){r.e=q
r.f=b}else{++$.jN.x2$
s.by(new A.a7y(r,b),t.H)}},
gEo(){return t.cC.a(J.ba(this.e,B.YP)).gbA()},
L(a){var s,r,q,p=this,o=null
if(p.f==null)return B.lq
s=p.gEo()
p.f.toString
r=p.e
q=p.gEo()
return A.dv(o,new A.wE(p,r,A.acl(p.a.e,q),p.d),!1,o,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,s,o)}}
A.a7x.prototype={
$1(a){return this.a.a=a},
$S:295}
A.a7y.prototype={
$1(a){var s=this.a
if(s.c!=null)s.az(new A.a7w(s,a,this.b))
$.jN.Fh()},
$S:296}
A.a7w.prototype={
$0(){var s=this.a
s.e=this.b
s.f=this.c},
$S:0}
A.tP.prototype={
D(){return"Orientation."+this.b}}
A.il.prototype={
pZ(a,b,c,d,e){var s=this,r=c==null?s.c:c,q=a==null?s.f:a,p=e==null?s.r:e,o=d==null?s.e:d
return new A.il(s.a,s.b,r,s.d,o,q,p,s.w,!1,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch)},
we(a){return this.pZ(null,null,a,null,null)},
FQ(a){return this.pZ(a,null,null,null,null)},
Y0(a,b){return this.pZ(null,null,null,a,b)},
Y_(a,b){return this.pZ(a,null,null,null,b)},
Iq(a,b,c,d){var s,r,q,p,o,n,m=this,l=null
if(!(b||d||c||a))return m
s=m.f
r=b?0:l
q=d?0:l
p=c?0:l
r=s.mJ(a?0:l,r,p,q)
q=m.r
p=b?Math.max(0,q.a-s.a):l
o=d?Math.max(0,q.b-s.b):l
n=c?Math.max(0,q.c-s.c):l
return m.Y_(r,q.mJ(a?Math.max(0,q.d-s.d):l,p,n,o))},
a1c(a){var s=this,r=null,q=s.r,p=s.e,o=Math.max(0,q.d-p.d)
q=q.mJ(o,r,r,r)
return s.Y0(p.mJ(0,r,r,r),q)},
k(a,b){var s=this
if(b==null)return!1
if(J.S(b)!==A.A(s))return!1
return b instanceof A.il&&b.a.k(0,s.a)&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.f.k(0,s.f)&&b.r.k(0,s.r)&&b.e.k(0,s.e)&&b.Q===s.Q&&b.as===s.as&&b.z===s.z&&b.y===s.y&&b.at===s.at&&b.ax===s.ax&&b.ay.k(0,s.ay)&&A.cE(b.ch,s.ch)},
gu(a){var s=this
return A.T(s.a,s.b,s.c,s.d,s.f,s.r,s.e,!1,s.Q,s.as,s.z,s.y,s.at,s.ax,s.ay,A.cS(s.ch),B.a,B.a,B.a,B.a)},
i(a){var s=this
return"MediaQueryData("+B.b.bj(A.a(["size: "+s.a.i(0),"devicePixelRatio: "+B.d.M(s.b,1),"textScaleFactor: "+B.d.M(s.c,1),"platformBrightness: "+s.d.i(0),"padding: "+s.f.i(0),"viewPadding: "+s.r.i(0),"viewInsets: "+s.e.i(0),"alwaysUse24HourFormat: false","accessibleNavigation: "+s.y,"highContrast: "+s.Q,"disableAnimations: "+s.as,"invertColors: "+s.z,"boldText: "+s.at,"navigationMode: "+s.ax.b,"gestureSettings: "+s.ay.i(0),"displayFeatures: "+A.h(s.ch)],t.s),", ")+")"}}
A.eH.prototype={
bQ(a){return!this.f.k(0,a.f)}}
A.FS.prototype={
D(){return"NavigationMode."+this.b}}
A.wL.prototype={
ap(){return new A.LJ(B.l)}}
A.LJ.prototype={
aD(){this.aV()
$.ac.ae$.push(this)},
q6(){this.az(new A.a7T())},
G3(){this.az(new A.a7V())},
G2(){this.az(new A.a7U())},
L(a){var s
$.ac.toString
s=A.agb($.cc())
return new A.eH(s,this.a.c,null)},
m(){B.b.A($.ac.ae$,this)
this.aN()}}
A.a7T.prototype={
$0(){},
$S:0}
A.a7V.prototype={
$0(){},
$S:0}
A.a7U.prototype={
$0(){},
$S:0}
A.Pr.prototype={}
A.tr.prototype={
L(a){var s,r=null
switch(A.kl().a){case 0:case 1:case 3:case 5:break
case 2:case 4:break}s=this.c
return A.am2(new A.rd(!0,new A.LS(A.dv(r,A.tt(new A.ff(B.m0,s==null?r:new A.qy(s,r,r),r),B.lr,r,r,r),!1,r,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),new A.Yo(this,a),r),r))}}
A.Yo.prototype={
$0(){A.Iv(B.UA)},
$S:0}
A.oR.prototype={
eK(a){if(this.y1==null)return!1
return this.lN(a)},
GY(a){},
GZ(a,b){var s=this.y1
if(s!=null)s.$0()},
qE(a,b,c){}}
A.a7W.prototype={
w1(a){a.siJ(this.a)}}
A.Jo.prototype={
FK(){var s=t.S,r=A.cu(s)
return new A.oR(B.aU,18,B.bn,A.y(s,t.o),r,null,null,A.y(s,t.C))},
Hf(a){a.y1=this.a}}
A.LS.prototype={
L(a){var s=this.d
return new A.iv(this.c,A.aR([B.YQ,new A.Jo(s)],t.n,t.ob),B.au,!1,new A.a7W(s),null)}}
A.FT.prototype={
L(a){var s,r,q=this,p=a.a1(t.I)
p.toString
s=A.a([],t.E)
r=q.c
if(r!=null)s.push(A.XP(r,B.fQ))
r=q.d
if(r!=null)s.push(A.XP(r,B.fR))
r=q.e
if(r!=null)s.push(A.XP(r,B.fS))
return new A.qM(new A.a9w(q.f,q.r,p.w),s,null)}}
A.pD.prototype={
D(){return"_ToolbarSlot."+this.b}}
A.a9w.prototype={
rh(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.b.j(0,B.fQ)!=null){s=a.a
r=a.b
q=e.dj(B.fQ,new A.aJ(0,s,r,r)).a
switch(e.f.a){case 0:p=s-q
break
case 1:p=0
break
default:p=null}e.dG(B.fQ,new A.t(p,0))}else q=0
if(e.b.j(0,B.fS)!=null){o=e.dj(B.fS,A.ac7(a))
switch(e.f.a){case 0:n=0
break
case 1:n=a.a-o.a
break
default:n=null}m=o.a
e.dG(B.fS,new A.t(n,(a.b-o.b)/2))}else m=0
if(e.b.j(0,B.fR)!=null){s=a.a
r=e.e
l=Math.max(s-q-m-r*2,0)
k=e.dj(B.fR,A.ac7(a).XU(l))
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
default:f=null}e.dG(B.fR,new A.t(f,(a.b-k.b)/2))}},
lE(a){return a.d!==this.d||a.e!==this.e||a.f!==this.f}}
A.lG.prototype={
D(){return"RoutePopDisposition."+this.b}}
A.bQ.prototype={
gr9(){return B.rc},
iF(){},
mU(){var s=A.adg()
s.by(new A.a0i(this),t.H)
return s},
mS(){var s=this.a
if(s==null)s=null
else{s.a.toString
s=!0}if(s===!0)A.adg().by(new A.a0h(this),t.H)},
wy(a){},
eS(){var s=0,r=A.a8(t.ij),q,p=this
var $async$eS=A.a9(function(a,b){if(a===1)return A.a5(b,r)
while(true)switch(s){case 0:q=p.gHw()?B.SB:B.AF
s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$eS,r)},
gJ6(){return!1},
ji(a){this.Yx(a)
return!0},
Yx(a){this.d.cY(0,null)},
kL(a){},
mT(a){},
wt(a){},
mC(){},
pR(){},
m(){this.a=null},
gjy(){var s,r=this.a
if(r==null)return!1
r=r.e
r=new A.bm(r,A.ai(r).h("bm<1,d0?>"))
s=r.ld(r,new A.a0l(),new A.a0m())
if(s==null)return!1
return s.a===this},
gHw(){var s,r=this.a
if(r==null)return!1
r=r.e
r=new A.bm(r,A.ai(r).h("bm<1,d0?>"))
s=r.qy(r,new A.a0n(),new A.a0o())
if(s==null)return!1
return s.a===this},
gqI(){var s,r,q,p,o=this.a
if(o==null)return!1
for(o=o.e,s=o.length,r=0;r<s;++r){q=o[r]
if(q.a===this)return!1
p=q.d.a
if(p<=10&&p>=1)return!0}return!1},
ga_D(){var s=this.a
if(s==null)return!1
s=s.e
s=new A.bm(s,A.ai(s).h("bm<1,d0?>"))
s=s.qy(s,new A.a0j(this),new A.a0k())
s=s==null?null:s.gjA()
return s===!0}}
A.a0i.prototype={
$1(a){var s,r=this.a.a
if(r==null)s=null
else{r.a.toString
s=!0}if(s===!0){r=r.x.gdf()
if(r!=null)r.rt()}},
$S:23}
A.a0h.prototype={
$1(a){var s=this.a.a
if(s!=null){s=s.x.gdf()
if(s!=null)s.rt()}},
$S:23}
A.a0l.prototype={
$1(a){return a!=null&&a.gjA()},
$S:24}
A.a0m.prototype={
$0(){return null},
$S:7}
A.a0n.prototype={
$1(a){return a!=null&&a.gjA()},
$S:24}
A.a0o.prototype={
$0(){return null},
$S:7}
A.a0j.prototype={
$1(a){return a!=null&&A.ahM(this.a).$1(a)},
$S:24}
A.a0k.prototype={
$0(){return null},
$S:7}
A.fD.prototype={
i(a){var s=this.a
s=s==null?"none":'"'+s+'"'
return"RouteSettings("+s+", "+A.h(this.b)+")"}}
A.io.prototype={
q8(a,b){},
q7(a,b){},
wx(a,b){},
q9(a,b){},
G5(a,b){},
mW(){}}
A.l5.prototype={
bQ(a){return a.f!=this.f}}
A.a0g.prototype={}
A.IT.prototype={}
A.BJ.prototype={}
A.tD.prototype={
ap(){var s=null,r=A.a([],t.hi),q=$.bq(),p=t.a4
return new A.eL(r,new A.L9(q),A.jx(s,p),A.jx(s,p),A.acq(!0,"Navigator",!0,!0,s,s,!1),new A.uw(0,q,t.rj),A.iI(!1),A.b7(t.S),s,A.y(t.wb,t.M),s,!0,s,s,s,B.l)},
a0r(a,b){return this.z.$2(a,b)}}
A.YT.prototype={
$1(a){return a==null},
$S:298}
A.dz.prototype={
D(){return"_RouteLifecycle."+this.b}}
A.M2.prototype={}
A.d0.prototype={
gco(){var s,r
if(this.c){s=t.kd.a(this.a.b)
s.gco()
r=A.h(s.gco())
return"p+"+r}r=this.b
if(r!=null)return"r+"+r.gIA()
return null},
ZJ(a,b,c,d){var s,r,q,p=this,o=p.d,n=p.a
n.a=b
n.iF()
s=p.d
if(s===B.BX||s===B.BY){r=n.mU()
p.d=B.BZ
r.J5(new A.a8N(p,b))}else{n.wy(c)
p.d=B.cN}if(a)n.mT(null)
s=o===B.a_b||o===B.BY
q=b.r
if(s)q.d8(0,new A.wV(n,d))
else q.d8(0,new A.pn(n,d))},
ZI(a,b){var s,r=this
r.d=B.a_7
s=r.a
if((s.d.a.a&30)!==0)return!0
if(!s.ji(r.w)){r.d=B.cN
return!1}r.w=null
return!0},
m(){var s,r,q,p,o,n,m={}
this.d=B.a_9
s=this.a
r=s.gr9()
q=new A.a8L()
p=new A.aF(r,q,A.ai(r).h("aF<1>"))
if(!p.ga7(p).t())s.m()
else{m.a=p.gp(p)
for(s=B.b.ga7(r),q=new A.vT(s,q);q.t();){r=s.gG(s)
o=A.aZ("listener")
n=new A.a8M(m,this,r,o)
o.b=n
r.d.S(0,n)}}},
ga1Y(){var s=this.d.a
return s<=7&&s>=1},
gjA(){var s=this.d.a
return s<=10&&s>=1}}
A.a8N.prototype={
$0(){var s=this.a
if(s.d===B.BZ){s.d=B.cN
this.b.uj()}},
$S:0}
A.a8L.prototype={
$1(a){return a.d.a},
$S:299}
A.a8M.prototype={
$0(){var s=this,r=s.a;--r.a
s.c.d.F(0,s.d.aC())
if(r.a===0)s.b.a.m()},
$S:0}
A.a8O.prototype={
$1(a){return a.a===this.a},
$S:36}
A.k9.prototype={}
A.pn.prototype={
jF(a){a.q8(this.a,this.b)}}
A.pm.prototype={
jF(a){a.q7(this.a,this.b)}}
A.wU.prototype={
jF(a){a.wx(this.a,this.b)}}
A.wV.prototype={
jF(a){a.q9(this.a,this.b)}}
A.eL.prototype={
aD(){var s,r,q,p,o=this
o.aV()
for(s=o.a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q){p=s[q]
$.fS().a.set(p,o)}o.Q=o.a.x
s=o.c.iT(t.hS)
if(s==null)s=null
else{s=s.f
s.toString}t.cn.a(s)
o.vD(s==null?null:s.f)
o.a.toString
B.fe.qO("selectSingleEntryHistory",t.H)},
hS(a,b){var s,r,q,p,o,n,m=this
m.lk(m.as,"id")
s=m.f
m.lk(s,"history")
for(;r=m.e,r.length!==0;)r.pop().m()
m.d=new A.br(null,t.r9)
B.b.I(r,s.IB(null,m))
m.a.toString
q=0
for(;!1;++q){p=B.LG[q]
r=m.c
r.toString
r=p.wi(r)
o=$.abP()
n=new A.d0(r,null,!0,B.lH,o,o,o)
m.e.push(n)
B.b.I(m.e,s.IB(n,m))}if(s.y==null){s=m.a
r=m.e
o=s.f
B.b.I(r,J.abV(s.a0r(m,o),new A.YS(m),t.ee))}m.uj()},
wA(a){var s,r=this
r.Me(a)
s=r.f
if(r.bc$!=null)s.b9(0,r.e)
else s.U(0)},
gco(){return this.a.y},
b3(){var s,r,q,p,o=this
o.MW()
s=o.c.a1(t.hS)
o.vD(s==null?null:s.f)
for(r=o.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.Q)(r),++p)r[p].a.pR()},
vD(a){var s,r,q=this
if(q.z!=a){if(a!=null)$.fS().a.set(a,q)
s=q.z
if(s==null)s=null
else{r=$.fS()
A.CD(s)
s=r.a.get(s)}if(s===q){s=$.fS()
r=q.z
r.toString
s.a.set(r,null)}q.z=a
q.EK()}},
EK(){var s=this,r=s.z,q=s.a
if(r!=null)s.Q=B.b.W(q.x,A.a([r],t.yx))
else s.Q=q.x},
b_(a){var s,r,q,p,o=this
o.MX(a)
s=a.x
if(s!==o.a.x){for(r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q){p=s[q]
$.fS().a.set(p,null)}for(s=o.a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q){p=s[q]
$.fS().a.set(p,o)}o.EK()}o.a.toString
for(s=o.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].a.pR()},
cZ(){var s,r,q,p=this.Q
p===$&&A.b()
s=p.length
r=0
for(;r<p.length;p.length===s||(0,A.Q)(p),++r){q=p[r]
$.fS().a.set(q,null)}this.lQ()},
c5(){var s,r,q,p
this.MU()
s=this.Q
s===$&&A.b()
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.Q)(s),++q){p=s[q]
$.fS().a.set(p,this)}},
m(){var s,r,q,p=this
p.vD(null)
p.x.m()
for(s=p.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].m()
p.MY()},
gAR(){var s,r,q,p=A.a([],t.tD)
for(s=this.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)B.b.I(p,s[q].a.gr9())
return p},
uk(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null
a.ay=!0
s=a.e
r=s.length-1
q=s[r]
p=r>0?s[r-1]:a0
o=A.a([],t.hi)
for(s=a.w,n=a.r,m=a0,l=m,k=!1,j=!1;r>=0;){switch(q.d.a){case 1:i=a.i4(r-1,A.aec())
h=i>=0?a.e[i]:a0
h=h==null?a0:h.a
g=q.a
g.a=a
g.iF()
q.d=B.a_a
n.d8(0,new A.pn(g,h))
continue
case 2:if(k||l==null){h=q.a
h.mS()
q.d=B.cN
if(l==null)h.mT(a0)
continue}break
case 3:case 4:case 6:h=p==null?a0:p.a
i=a.i4(r-1,A.aec())
g=i>=0?a.e[i]:a0
g=g==null?a0:g.a
q.ZJ(l==null,a,h,g)
if(q.d===B.cN)continue
break
case 5:if(!j&&m!=null){q.a.kL(m)
q.f=m}j=!0
break
case 7:if(!j&&m!=null){q.a.kL(m)
q.f=m}k=!0
j=!0
break
case 8:i=a.i4(r,A.yH())
h=i>=0?a.e[i]:a0
if(!q.ZI(a,h==null?a0:h.a))continue
if(!j){if(m!=null){q.a.kL(m)
q.f=m}m=q.a}h=q.a
i=a.i4(r,A.yH())
g=i>=0?a.e[i]:a0
s.d8(0,new A.pm(h,g==null?a0:g.a))
if(q.d===B.lI)continue
k=!0
break
case 11:break
case 9:h=q.a
h=h.d.a
if((h.a&30)!==0)A.a_(A.aa("Future already completed"))
h.lY(a0)
q.w=null
q.d=B.a_6
continue
case 10:if(!j){if(m!=null)q.a.kL(m)
m=a0}i=a.i4(r,A.yH())
h=i>=0?a.e[i]:a0
h=h==null?a0:h.a
q.d=B.a_8
if(q.x)s.d8(0,new A.wU(q.a,h))
continue
case 12:if(!k&&l!=null)break
q.d=B.lI
continue
case 13:o.push(B.b.fq(a.e,r))
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
s=new A.bm(s,A.ai(s).h("bm<1,d0?>"))
e=s.ld(s,new A.YM(),new A.YN())
d=e==null?a0:e.a.b.a
if(d!=null&&d!==a.at){A.ahc(d,!1,a0)
a.at=d}for(s=o.length,c=0;c<o.length;o.length===s||(0,A.Q)(o),++c){q=o[c]
for(n=q.a.gr9(),h=n.length,b=0;b<n.length;n.length===h||(0,A.Q)(n),++b)J.alJ(n[b])
q.m()}if(a1){s=a.d
s===$&&A.b()
s=s.gbi()
if(s!=null)s.a11(a.gAR())}if(a.bc$!=null)a.f.b9(0,a.e)
a.ay=!1},
uj(){return this.uk(!0)},
Qh(){var s,r=this,q=r.Q
q===$&&A.b()
if(q.length===0){r.w.U(0)
r.r.U(0)
return}for(q=r.r;!q.gP(q);){s=q.eO(0)
B.b.Z(r.Q,s.gnD())}for(q=r.w;!q.gP(q);){s=q.nP()
B.b.Z(r.Q,s.gnD())}},
Qj(){var s,r,q,p,o,n,m=this,l=null,k=m.e.length-1
for(;k>=0;){s=m.e[k]
r=s.d.a
if(!(r<=12&&r>=3)){--k
continue}q=m.QL(k+1,A.ajs())
r=q==null
p=r?l:q.a
o=s.r
if(p!=o){if((r?l:q.a)==null){p=s.f
p=p!=null&&p===o}else p=!1
if(!p){p=s.a
p.mT(r?l:q.a)}s.r=r?l:q.a}--k
n=m.i4(k,A.ajs())
r=n>=0?m.e[n]:l
p=r==null
o=p?l:r.a
if(o!=s.e){o=s.a
o.wt(p?l:r.a)
s.e=p?l:r.a}}},
Ca(a,b){a=this.i4(a,b)
return a>=0?this.e[a]:null},
i4(a,b){while(!0){if(!(a>=0&&!b.$1(this.e[a])))break;--a}return a},
QL(a,b){var s
while(!0){s=this.e
if(!(a<s.length&&!b.$1(s[a])))break;++a}s=this.e
return a<s.length?s[a]:null},
pe(a,b,c,d){var s,r,q
if(b)this.a.toString
s=new A.fD(a,c)
r=d.h("bQ<0?>?")
q=r.a(this.a.r.$1(s))
return q==null&&!b?r.a(this.a.w.$1(s)):q},
vk(a,b,c){return this.pe(a,!1,b,c)},
AP(a){this.OW()},
nz(a){var s=0,r=A.a8(t.y),q,p=this,o,n,m
var $async$nz=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)$async$outer:switch(s){case 0:m=p.e
m=new A.bm(m,A.ai(m).h("bm<1,d0?>"))
o=m.ld(m,new A.YO(),new A.YP())
if(o==null){q=!1
s=1
break}s=3
return A.an(o.a.eS(),$async$nz)
case 3:n=c
if(p.c==null){q=!0
s=1
break}m=p.e
m=new A.bm(m,A.ai(m).h("bm<1,d0?>"))
if(o!==m.ld(m,new A.YQ(),new A.YR())){q=!0
s=1
break}switch(n.a){case 2:q=!1
s=1
break $async$outer
case 0:p.a0I(a)
q=!0
s=1
break $async$outer
case 1:q=!0
s=1
break $async$outer}case 1:return A.a6(q,r)}})
return A.a7($async$nz,r)},
HN(){return this.nz(null,t.X)},
a0e(a){return this.nz(a,t.X)},
I5(a){var s=this,r=B.b.a_T(s.e,A.aec())
if(r.c){s.a.toString
if(null.$2(r.a,a)&&r.d===B.cN)r.d=B.lJ}else{r.w=a
r.d=B.lJ}if(r.d===B.lJ)s.uk(!1)
s.AP(r.a)},
hb(){return this.I5(null,t.X)},
a0I(a){return this.I5(a,t.X)},
GB(a){var s,r=this,q=B.b.a_n(r.e,A.ahM(a)),p=r.e[q]
if(p.c&&p.d.a<8){s=r.Ca(q-1,A.yH())
s=s==null?null:s.a
r.w.d8(0,new A.pm(a,s))}p.d=B.lI
if(!r.ay)r.uk(!1)},
sF_(a){this.ch=a
this.CW.sn(0,a>0)},
YB(){var s,r,q,p,o,n,m=this
m.sF_(m.ch+1)
if(m.ch===1){s=m.i4(m.e.length-1,A.yH())
r=m.e[s].a
q=!r.gJ6()&&s>0?m.Ca(s-1,A.yH()).a:null
p=m.Q
p===$&&A.b()
o=p.length
n=0
for(;n<p.length;p.length===o||(0,A.Q)(p),++n)p[n].G5(r,q)}},
mW(){var s,r,q,p=this
p.sF_(p.ch-1)
if(p.ch===0){s=p.Q
s===$&&A.b()
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].mW()}},
RV(a){this.cx.E(0,a.gbL())},
S2(a){this.cx.A(0,a.gbL())},
OW(){if($.bG.CW$===B.cD){var s=this.d
s===$&&A.b()
s=$.ac.H$.z.j(0,s)
this.az(new A.YL(s==null?null:s.qv(t.CE)))}s=this.cx
B.b.Z(A.ax(s,!0,A.n(s).c),$.ac.gX6())},
L(a){var s,r=this,q=null,p=r.gS1(),o=A.afE(a),n=r.bc$,m=r.d
m===$&&A.b()
r.a.toString
if(m.gbi()==null){s=r.gAR()
s=J.le(s.slice(0),A.ai(s).c)}else s=B.rc
return new A.l5(q,A.DG(B.bM,new A.yR(!1,A.afD(A.CT(!0,q,A.a5d(n,new A.nQ(s,B.a9,m)),q,q,q,r.x,!1,q,q,q,q,q,!0),o),q),p,r.gRU(),q,q,p),q)}}
A.YS.prototype={
$1(a){var s,r,q=a.b.a
if(q!=null){s=this.a.as
r=s.y
if(r==null)r=s.$ti.h("bK.T").a(r)
s.Md(0,r+1)
q=new A.LX(r,q,null,B.lK)}else q=null
return A.ahL(a,B.lH,!1,q)},
$S:302}
A.YM.prototype={
$1(a){return a!=null&&a.gjA()},
$S:24}
A.YN.prototype={
$0(){return null},
$S:7}
A.YO.prototype={
$1(a){return a!=null&&a.gjA()},
$S:24}
A.YP.prototype={
$0(){return null},
$S:7}
A.YQ.prototype={
$1(a){return a!=null&&a.gjA()},
$S:24}
A.YR.prototype={
$0(){return null},
$S:7}
A.YL.prototype={
$0(){var s=this.a
if(s!=null)s.sF6(!0)},
$S:0}
A.pw.prototype={
D(){return"_RouteRestorationType."+this.b}}
A.Nn.prototype={
gHz(){return!0},
pW(){return A.a([this.a.a],t.f)}}
A.LX.prototype={
pW(){var s=this,r=s.Nd(),q=A.a([s.c,s.d],t.f),p=s.e
if(p!=null)q.push(p)
B.b.I(r,q)
return r},
wi(a){var s=a.vk(this.d,this.e,t.z)
s.toString
return s},
gIA(){return this.c}}
A.adr.prototype={
gHz(){return!1},
pW(){A.ap9(this.d)},
wi(a){var s=a.c
s.toString
return this.d.$2(s,this.e)},
gIA(){return this.c}}
A.L9.prototype={
b9(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.y==null
if(a)c.y=A.y(t.N,t.lC)
s=t.f
r=A.a([],s)
q=c.y
q.toString
p=J.ba(q,null)
if(p==null)p=B.d7
o=A.y(t.dR,t.lC)
q=c.y
q.toString
n=J.alP(J.yP(q))
for(q=a1.length,m=b,l=a,k=!0,j=0;j<a1.length;a1.length===q||(0,A.Q)(a1),++j){i=a1[j]
if(i.d.a>7){h=i.a
h.c.sn(0,b)
continue}if(i.c){l=l||r.length!==J.bH(p)
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
p=J.ba(h,i.gco())
if(p==null)p=B.d7}else{r=B.d7
p=B.d7}m=i
continue}if(k){h=i.b
h=h==null?b:h.gHz()
k=h===!0}else k=!1
h=i.a
f=k?i.gco():b
h.c.sn(0,f)
if(k){h=i.b
f=h.b
h=f==null?h.b=h.pW():f
if(!l){f=J.aO(p)
e=f.gp(p)
d=r.length
l=e<=d||!J.f(f.j(p,d),h)}else l=!0
B.b.E(r,h)}}l=l||r.length!==J.bH(p)
c.Q3(r,m,o,n)
if(l||n.gbK(n)){c.y=o
c.av()}},
Q3(a,b,c,d){var s,r=a.length
if(r!==0){s=b==null?null:b.gco()
c.l(0,s,a)
d.A(0,s)}},
U(a){if(this.y==null)return
this.y=null
this.av()},
IB(a,b){var s,r,q,p,o,n=A.a([],t.hi)
if(this.y!=null)s=a!=null&&a.gco()==null
else s=!0
if(s)return n
s=this.y
s.toString
r=J.ba(s,a==null?null:a.gco())
if(r==null)return n
for(s=J.ar(r);s.t();){q=A.arv(s.gG(s))
p=q.wi(b)
o=$.abP()
n.push(new A.d0(p,q,!1,B.lH,o,o,o))}return n},
q0(){return null},
l7(a){a.toString
return J.aeP(t.G.a(a),new A.a76(),t.dR,t.lC)},
He(a){this.y=a},
lr(){return this.y},
gkO(a){return this.y!=null}}
A.a76.prototype={
$2(a,b){return new A.aU(A.ci(a),A.jy(t.j.a(b),!0,t.K),t.cj)},
$S:303}
A.a8a.prototype={
$2(a,b){if(!a.a)a.F(0,b)},
$S:30}
A.wW.prototype={
c5(){this.dO()
this.cU()
this.ec()},
m(){var s=this,r=s.af$
if(r!=null)r.F(0,s.gdT())
s.af$=null
s.aN()}}
A.wX.prototype={
b_(a){this.bt(a)
this.mY()},
b3(){var s,r,q,p,o=this
o.cl()
s=o.bc$
r=o.glo()
q=o.c
q.toString
q=A.o7(q)
o.eG$=q
p=o.ky(q,r)
if(r){o.hS(s,o.dv$)
o.dv$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.eF$.Z(0,new A.a8a())
s=r.bc$
if(s!=null)s.m()
r.bc$=null
r.MV()}}
A.d7.prototype={
i(a){var s=A.a([],t.s)
this.c6(s)
return"Notification("+B.b.bj(s,", ")+")"},
c6(a){}}
A.cx.prototype={
bH(a){return new A.wY(this,B.a2,this.$ti.h("wY<1>"))}}
A.wY.prototype={
HY(a){var s,r=this.f
r.toString
s=this.$ti
s.h("cx<1>").a(r)
if(s.c.b(a))return r.d.$1(a)
return!1},
le(a){}}
A.e_.prototype={}
A.Pw.prototype={}
A.eN.prototype={
sli(a){var s
if(this.b===a)return
this.b=a
s=this.e
if(s!=null)s.BF()},
snx(a){if(this.c)return
this.c=!0
this.e.BF()},
S(a,b){this.d.S(0,b)},
F(a,b){this.d.F(0,b)},
ll(a){var s,r=this.e
r.toString
this.e=null
if(r.c==null)return
B.b.A(r.d,this)
s=$.bG
if(s.CW$===B.AG)s.ax$.push(new A.Za(r))
else r.CQ()},
fn(){var s=this.f.gbi()
if(s!=null)s.CS()},
i(a){return"<optimized out>#"+A.bB(this)+"(opaque: "+this.b+"; maintainState: "+this.c+")"},
$ia1:1,
Fu(a){return this.a.$1(a)}}
A.Za.prototype={
$1(a){this.a.CQ()},
$S:2}
A.pp.prototype={
ap(){return new A.x_(B.l)}}
A.x_.prototype={
aD(){this.aV()
this.a.c.d.sn(0,!0)},
m(){this.a.c.d.sn(0,!1)
this.a.toString
this.aN()},
L(a){var s=this.a
return new A.oI(s.d,s.c.Fu(a),null)},
CS(){this.az(new A.a8f())}}
A.a8f.prototype={
$0(){},
$S:0}
A.nQ.prototype={
ap(){return new A.nS(A.a([],t.tD),null,null,B.l)}}
A.nS.prototype={
aD(){this.aV()
this.a_p(0,this.a.c)},
uN(a,b){return this.d.length},
xj(a,b){b.e=this
this.az(new A.Ze(this,null,null,b))},
a_p(a,b){var s,r=b.length
if(r===0)return
for(s=0;s<r;++s)b[s].e=this
this.az(new A.Zd(this,null,null,b))},
a11(a){var s,r,q,p,o,n=this
if(t.rF.b(a))s=a
else s=J.le(a.slice(0),A.ai(a).c)
if(s.length===0)return
r=n.d
if(A.cE(r,s))return
q=A.jw(r,t.u7)
for(r=s.length,p=0;p<r;++p){o=s[p]
if(o.e==null)o.e=n}n.az(new A.Zf(n,s,q,null,null))},
CQ(){if(this.c!=null)this.az(new A.Zc())},
BF(){this.az(new A.Zb())},
L(a){var s,r,q,p,o,n=A.a([],t.E)
for(s=this.d,r=s.length-1,q=!0,p=0;r>=0;--r){o=s[r]
if(q){++p
n.push(new A.pp(o,!0,o.f))
q=!o.b||!1}else if(o.c)n.push(new A.pp(o,!1,o.f))}s=t.m8
return new A.Ov(n.length-p,this.a.d,A.ax(new A.cz(n,s),!1,s.h("bk.E")),null)}}
A.Ze.prototype={
$0(){var s=this,r=s.a
B.b.nn(r.d,r.uN(s.b,s.c),s.d)},
$S:0}
A.Zd.prototype={
$0(){var s=this,r=s.a
B.b.Hg(r.d,r.uN(s.b,s.c),s.d)},
$S:0}
A.Zf.prototype={
$0(){var s,r,q=this,p=q.a,o=p.d
B.b.U(o)
s=q.b
B.b.I(o,s)
r=q.c
r.a17(s)
B.b.Hg(o,p.uN(q.d,q.e),r)},
$S:0}
A.Zc.prototype={
$0(){},
$S:0}
A.Zb.prototype={
$0(){},
$S:0}
A.Ov.prototype={
bH(a){var s=A.cu(t.h)
return new A.Ow(s,this,B.a2)},
aA(a){var s=a.a1(t.I)
s.toString
s=new A.pv(s.w,this.e,this.f,A.am(),0,null,null,A.am())
s.aB()
s.I(0,null)
return s},
aE(a,b){var s=this.e
if(b.ao!==s){b.ao=s
b.a3()}s=a.a1(t.I)
s.toString
b.sbA(s.w)
s=this.f
if(s!==b.ae){b.ae=s
b.aj()
b.aX()}}}
A.Ow.prototype={
ga5(){return t.z2.a(A.ek.prototype.ga5.call(this))}}
A.pv.prototype={
e4(a){if(!(a.e instanceof A.dw))a.e=new A.dw(null,null,B.j)},
TI(){if(this.q!=null)return
this.q=B.bj.Y(this.H)},
sbA(a){var s=this
if(s.H===a)return
s.H=a
s.q=null
s.a3()},
goA(){var s,r,q,p,o=this
if(o.ao===A.ap.prototype.gpS.call(o))return null
s=A.ap.prototype.gZ6.call(o,o)
for(r=o.ao,q=t.B;r>0;--r){p=s.e
p.toString
s=q.a(p).ah$}return s},
ee(a){var s,r,q,p,o=this.goA()
for(s=t.B,r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.iS(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.ah$}return r},
giZ(){return!0},
bV(a){return new A.Z(A.E(1/0,a.a,a.b),A.E(1/0,a.c,a.d))},
bx(){var s,r,q,p,o,n,m,l,k=this
k.K=!1
if(k.d_$-k.ao===0)return
k.TI()
s=t.k.a(A.w.prototype.gX.call(k))
r=A.qh(new A.Z(A.E(1/0,s.a,s.b),A.E(1/0,s.c,s.d)))
q=k.goA()
for(s=t.B,p=t.uu;q!=null;){o=q.e
o.toString
s.a(o)
if(!o.gxq()){q.cg(r,!0)
n=k.q
n.toString
m=k.k3
m.toString
l=q.k3
l.toString
o.a=n.kB(p.a(m.a8(0,l)))}else{n=k.k3
n.toString
m=k.q
m.toString
k.K=A.agI(q,o,n,m)||k.K}q=o.ah$}},
cu(a,b){var s,r,q,p=this,o={},n=o.a=p.ao===A.ap.prototype.gpS.call(p)?null:p.cG$
for(s=t.B,r=0;r<p.d_$-p.ao;++r,n=q){n=n.e
n.toString
s.a(n)
if(a.mr(new A.a8C(o,b,n),n.a,b))return!0
q=n.bM$
o.a=q}return!1},
re(a,b){var s,r,q,p,o,n=this.goA()
for(s=t.B,r=b.a,q=b.b;n!=null;){p=n.e
p.toString
s.a(p)
o=p.a
a.eo(n,new A.t(o.a+r,o.b+q))
n=p.ah$}},
aF(a,b){var s,r=this,q=r.K&&r.ae!==B.J,p=r.aT
if(q){q=r.cx
q===$&&A.b()
s=r.k3
p.saM(0,a.jL(q,b,new A.z(0,0,0+s.a,0+s.b),r.gyb(),r.ae,p.a))}else{p.saM(0,null)
r.re(a,b)}},
m(){this.aT.saM(0,null)
this.hq()},
eR(a){var s,r,q=this.goA()
for(s=t.B;q!=null;){a.$1(q)
r=q.e
r.toString
q=s.a(r).ah$}},
ih(a){var s
switch(this.ae.a){case 0:return null
case 1:case 2:case 3:if(this.K){s=this.k3
s=new A.z(0,0,0+s.a,0+s.b)}else s=null
return s}}}
A.a8C.prototype={
$2(a,b){return this.a.a.bN(a,b)},
$S:15}
A.Mc.prototype={
c5(){this.dO()
this.cU()
this.ec()},
m(){var s=this,r=s.af$
if(r!=null)r.F(0,s.gdT())
s.af$=null
s.aN()}}
A.PC.prototype={
al(a){var s,r,q
this.e9(a)
s=this.ar$
for(r=t.B;s!=null;){s.al(a)
q=s.e
q.toString
s=r.a(q).ah$}},
ad(a){var s,r,q
this.dq(0)
s=this.ar$
for(r=t.B;s!=null;){s.ad(0)
q=s.e
q.toString
s=r.a(q).ah$}}}
A.nl.prototype={
ap(){var s=t.y
return new A.wp(A.aR([!1,!0,!0,!0],s,s),null,null,B.l)},
iI(a){return A.yK().$1(a)}}
A.wp.prototype={
aD(){var s,r,q=this
q.aV()
s=q.a
r=s.f
q.d=A.ahD(A.b9(s.e),r,q)
r=q.a
s=r.f
s=A.ahD(A.b9(r.e),s,q)
q.e=s
r=q.d
r.toString
q.f=new A.wM(A.a([r,s],t.ro))},
b_(a){var s,r=this
r.bt(a)
if(!a.f.k(0,r.a.f)||A.b9(a.e)!==A.b9(r.a.e)){s=r.d
s.toString
s.saq(0,r.a.f)
s=r.d
s.toString
s.sFp(A.b9(r.a.e))
s=r.e
s.toString
s.saq(0,r.a.f)
s=r.e
s.toString
s.sFp(A.b9(r.a.e))}},
v2(a){var s,r,q,p,o,n,m,l,k,j=this
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
if(a instanceof A.hm){q=a.e
if(q<0)n=s
else if(q>0)n=p
else n=null
m=n===s
s=j.c
s.cD(new A.tR(m,0))
s=j.w
s.l(0,m,!0)
s.j(0,m).toString
n.d=0
j.w.j(0,m).toString
s=a.f
if(s!==0){r=n.c
if(r!=null)r.aO(0)
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
r.e=A.c2(0,B.d.b1(0.15+l*0.02))
r.jv(0,0)
n.as=0.5
n.a=B.ZH}else{s=a.d
if(s!=null){p=a.b.ga5()
p.toString
t.x.a(p)
o=p.k3
o.toString
k=p.jU(s.d)
switch(A.b9(r.e).a){case 0:n.toString
s=o.b
n.Ib(0,Math.abs(q),o.a,A.E(k.b,0,s),s)
break
case 1:n.toString
s=o.a
n.Ib(0,Math.abs(q),o.b,A.E(k.a,0,s),s)
break}}}}else if(a instanceof A.ix||a instanceof A.eT)if(a.gGd()!=null){s=j.d
if(s.a===B.fH)s.j4(B.cW)
s=j.e
if(s.a===B.fH)s.j4(B.cW)}j.r=A.A(a)
return!1},
m(){this.d.m()
this.e.m()
this.NN()},
L(a){var s=this,r=null,q=s.a,p=s.d,o=s.e,n=q.e,m=s.f
return new A.cx(s.gv1(),new A.fC(A.Sk(new A.fC(q.w,r),new A.L8(p,o,n,m),r,r,B.P),r),r,t.Bf)}}
A.ml.prototype={
D(){return"_GlowState."+this.b}}
A.wo.prototype={
saq(a,b){if(this.ax.k(0,b))return
this.ax=b
this.av()},
sFp(a){if(this.ay===a)return
this.ay=a
this.av()},
m(){var s=this,r=s.b
r===$&&A.b()
r.m()
r=s.y
r===$&&A.b()
r.w.bp$.A(0,r)
r.Aq()
r=s.c
if(r!=null)r.aO(0)
s.dr()},
Ib(a,b,c,d,e){var s,r,q,p=this,o=p.c
if(o!=null)o.aO(0)
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
s.b=Math.max(1-1/(0.7*Math.sqrt(p.at*q)),A.ki(o.ac(0,r.gn(r))))
r=d/e
p.Q=r
if(r!==p.as){o=p.y
o===$&&A.b()
if(!o.ga_L())o.lJ(0)}else{o=p.y
o===$&&A.b()
o.ho(0)
p.z=null}o=p.b
o===$&&A.b()
o.e=B.n6
if(p.a!==B.fH){o.jv(0,0)
p.a=B.fH}else{o=o.r
if(!(o!=null&&o.a!=null))p.av()}p.c=A.cg(B.n6,new A.a7_(p))},
tK(a){var s=this
if(a!==B.U)return
switch(s.a.a){case 1:s.j4(B.cW)
break
case 3:s.a=B.fG
s.at=0
break
case 2:case 0:break}},
j4(a){var s,r,q=this,p=q.a
if(p===B.BU||p===B.fG)return
p=q.c
if(p!=null)p.aO(0)
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
p.jv(0,0)
q.a=B.BU},
VD(a){var s,r=this,q=r.z
if(q!=null){q=q.a
s=r.Q
r.as=s-(s-r.as)*Math.pow(2,-(a.a-q)/$.akB().a)
r.av()}if(A.yI(r.Q,r.as,0.001)){q=r.y
q===$&&A.b()
q.ho(0)
r.z=null}else r.z=a},
aF(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.r
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
m.saq(0,A.aY(B.d.b1(255*i.b.ac(0,k.gn(k))),l.gn(l)>>>16&255,l.gn(l)>>>8&255,l.gn(l)&255))
a.ck(0)
a.aw(0,0,j.d+j.e)
a.d4(0,1,n*q)
a.jc(new A.z(0,0,0+s,0+o))
a.hz(new A.t(s/2*(0.5+r),o-p),p,m)
a.ci(0)},
i(a){return"_GlowController(color: "+this.ax.i(0)+", axis: "+A.atU(this.ay)+")"}}
A.a7_.prototype={
$0(){return this.a.j4(B.hk)},
$S:0}
A.L8.prototype={
Dc(a,b,c,d,e){var s
if(c==null)return
switch(A.iZ(d,e)){case B.x:c.aF(a,b)
break
case B.v:a.ck(0)
a.aw(0,0,b.b)
a.d4(0,1,-1)
c.aF(a,b)
a.ci(0)
break
case B.ab:a.ck(0)
a.jM(0,1.5707963267948966)
a.d4(0,1,-1)
c.aF(a,new A.Z(b.b,b.a))
a.ci(0)
break
case B.ar:a.ck(0)
s=b.a
a.aw(0,s,0)
a.jM(0,1.5707963267948966)
c.aF(a,new A.Z(b.b,s))
a.ci(0)
break}},
aF(a,b){var s=this,r=s.d
s.Dc(a,b,s.b,r,B.nh)
s.Dc(a,b,s.c,r,B.ng)},
hY(a){return a.b!=this.b||a.c!=this.c},
i(a){return"_GlowingOverscrollIndicatorPainter("+A.h(this.b)+", "+A.h(this.c)+")"}}
A.ov.prototype={
ap(){return new A.xN(null,null,B.l)},
iI(a){return A.yK().$1(a)}}
A.xN.prototype={
gj6(){var s,r,q,p,o,n,m=this,l=null,k=m.d
if(k===$){s=t.a7
r=new A.aH(0,0,s)
q=new A.xM(r,B.lP,$.bq())
p=A.ec(l,l,l,l,m)
p.bo()
o=p.aQ$
o.b=!0
o.a.push(q.gtJ())
q.a!==$&&A.ev()
q.a=p
n=A.ey(B.mE,p,l)
n.a.S(0,q.ge0())
t.m.a(n)
q.b!==$&&A.ev()
q.b=new A.b4(n,r,s.h("b4<aB.T>"))
m.d!==$&&A.be()
m.d=q
k=q}return k},
v2(a){var s,r,q,p,o,n,m=this
if(!m.a.iI(a))return!1
if(a instanceof A.hm){m.f=a
J.S(m.e)
s=a.e
r=m.c
r.cD(new A.tR(s<0,0))
m.r=!0
r=a.f
if(r!==0){s=m.gj6()
q=A.E(Math.abs(r),1,1e4)
r=s.c
p=s.b
p===$&&A.b()
o=p.a
r.a=p.b.ac(0,o.gn(o))
r.b=Math.min(0.016+1.01/q,1)
r=s.a
r===$&&A.b()
r.e=A.c2(0,B.d.b1(q*0.02))
r.jv(0,0)
s.d=B.a_d}else if(a.d!=null){r=a.a.d
r.toString
n=A.E(Math.abs(s)/r+m.gj6().e,0,1)
r=m.gj6()
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
o.e=B.hl
if(r.d!==B.lQ){o.jv(0,0)
r.d=B.lQ}else{s=o.r
if(!(s!=null&&s.a!=null))r.av()}}}else if(a instanceof A.ix||a instanceof A.eT){s=m.gj6()
if(s.d===B.lQ)s.j4(B.hl)}m.e=a
return!1},
Qt(a){switch(this.a.c.a){case 0:return a>0?B.lS:B.lR
case 1:return a>0?B.dQ:B.fT
case 2:return a>0?B.lR:B.lS
case 3:return a>0?B.fT:B.dQ}},
m(){var s=this.gj6(),r=s.a
r===$&&A.b()
r.m()
s.dr()
this.NW()},
L(a){var s={},r=a.a1(t.l).f
s.a=null
return new A.cx(this.gv1(),A.kv(this.gj6(),new A.a9e(s,this,r.a),null),null,t.Bf)}}
A.a9e.prototype={
$2(a,b){var s,r,q,p,o,n,m=this,l=m.b,k=l.gj6().b
k===$&&A.b()
s=k.a
s=k.b.ac(0,s.gn(s))
switch(A.b9(l.a.c).a){case 0:r=1+s
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
p=l.Qt(k==null?0:k)
k=l.f
if(k==null)o=null
else{k=k.a.d
k.toString
o=k}if(o==null)o=m.a.a
k=A.tm(r,q,1)
l=l.a
n=A.ahk(p,l.f,k,!0)
return A.afa(n,s!==0&&o!==m.a.a?l.e:B.J)},
$S:304}
A.mt.prototype={
D(){return"_StretchState."+this.b}}
A.xM.prototype={
tK(a){var s=this
if(a!==B.U)return
switch(s.d.a){case 1:s.j4(B.hl)
break
case 3:s.d=B.lP
s.e=0
break
case 2:case 0:break}},
j4(a){var s,r,q=this,p=q.d
if(p===B.C_||p===B.lP)return
p=q.c
s=q.b
s===$&&A.b()
r=s.a
p.a=s.b.ac(0,r.gn(r))
p.b=0
p=q.a
p===$&&A.b()
p.e=a
p.jv(0,0)
q.d=B.C_},
i(a){return"_StretchController()"}}
A.tR.prototype={
c6(a){this.MZ(a)
a.push("side: "+(this.a?"leading edge":"trailing edge"))}}
A.x1.prototype={
c6(a){var s,r
this.ti(a)
s=this.bv$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.yj.prototype={
c5(){this.dO()
this.cU()
this.ec()},
m(){var s=this,r=s.af$
if(r!=null)r.F(0,s.gdT())
s.af$=null
s.aN()}}
A.yq.prototype={
c5(){this.dO()
this.cU()
this.ec()},
m(){var s=this,r=s.af$
if(r!=null)r.F(0,s.gdT())
s.af$=null
s.aN()}}
A.xI.prototype={
k(a,b){if(b==null)return!1
if(J.S(b)!==A.A(this))return!1
return b instanceof A.xI&&A.cE(b.a,this.a)},
gu(a){return A.cS(this.a)},
i(a){return"StorageEntryIdentifier("+B.b.bj(this.a,":")+")"}}
A.Zh.prototype={
AQ(a){var s=A.a([],t.D5)
if(A.agn(a,s))a.yW(new A.Zi(s))
return s},
J9(a,b){var s,r=this
if(r.a==null)r.a=A.y(t.K,t.z)
s=r.AQ(a)
if(s.length!==0)r.a.l(0,new A.xI(s),b)},
yn(a){var s
if(this.a==null)return null
s=this.AQ(a)
return s.length!==0?this.a.j(0,new A.xI(s)):null}}
A.Zi.prototype={
$1(a){return A.agn(a,this.a)},
$S:35}
A.nU.prototype={
L(a){return this.c}}
A.G3.prototype={
Fj(a,b,c){var s=t.sa.a(B.b.gb4(this.d))
if(s.H!=null){s.H=a
return A.bW(null,t.H)}return s.fN(s.jQ(a),b,c)},
qQ(a){var s=t.sa.a(B.b.gb4(this.d))
if(s.H!=null){s.H=a
return}s.di(s.jQ(a))},
FV(a,b,c){var s=null,r=new A.ka(this.z,this.as,B.fj,a,b,!0,s,A.iI(!1),$.bq())
r.Aw(b,s,!0,c,a)
r.Ax(b,s,s,!0,c,a)
return r},
al(a){this.Ms(a)
t.sa.a(a).so1(this.as)}}
A.ln.prototype={}
A.ka.prototype={
wM(a,b,c,d,e,f){return this.MC(a,b,c,d,e,null)},
so1(a){var s,r=this
if(r.ao===a)return
s=r.gh7(r)
r.ao=a
if(s!=null)r.x0(r.jQ(s))},
goP(){var s=this.ax
s.toString
return Math.max(0,s*(this.ao-1)/2)},
o5(a,b){var s=Math.max(0,a-this.goP())/(b*this.ao),r=B.d.yw(s)
if(Math.abs(s-r)<1e-10)return r
return s},
jQ(a){var s=this.ax
s.toString
return a*s*this.ao+this.goP()},
gh7(a){var s,r,q=this,p=q.at
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
s=q.o5(r,s)
p=s}else p=s}return p},
zn(){var s,r,q=this,p=q.w,o=p.c
o.toString
o=A.G4(o)
if(o!=null){p=p.c
p.toString
s=q.H
if(s==null){s=q.at
s.toString
r=q.ax
r.toString
r=q.o5(s,r)
s=r}o.J9(p,s)}},
ID(){var s,r,q
if(this.at==null){s=this.w
r=s.c
r.toString
r=A.G4(r)
if(r==null)q=null
else{s=s.c
s.toString
q=r.yn(s)}if(q!=null)this.q=q}},
zm(){var s,r=this,q=r.H
if(q==null){q=r.at
q.toString
s=r.ax
s.toString
s=r.o5(q,s)
q=s}r.w.e.sn(0,q)
q=$.fG.c8$
q===$&&A.b()
q.GF()},
IC(a,b){if(b)this.q=a
else this.di(this.jQ(a))},
mw(a){var s,r,q,p,o=this,n=o.ax
n=n!=null?n:null
if(a===n)return!0
o.My(a)
s=o.at
s=s!=null?s:null
if(s==null)r=o.q
else if(n===0){q=o.H
q.toString
r=q}else{n.toString
r=o.o5(s,n)}p=o.jQ(r)
o.H=a===0?r:null
if(p!==s){o.at=p
return!1}return!0},
j7(a){var s
this.MD(a)
if(!(a instanceof A.ka))return
s=a.H
if(s!=null)this.H=s},
mt(a,b){var s=a+this.goP()
return this.Mw(s,Math.max(s,b-this.goP()))},
fb(){var s,r,q,p,o,n=this,m=null,l=n.z
if(l!=null&&n.Q!=null)l.toString
else l=m
if(n.z!=null&&n.Q!=null){s=n.Q
s.toString}else s=m
r=n.at
r=r!=null?r:m
q=n.ax
q=q!=null?q:m
p=n.w.a.c
o=n.ao
return new A.ln(o,l,s,r,q,p)},
$iln:1}
A.p7.prototype={
jb(a){return new A.p7(!1,this.fP(a))},
gkA(){return this.b}}
A.nT.prototype={
jb(a){return new A.nT(this.fP(a))},
QI(a){var s,r
if(a instanceof A.ka){s=a.gh7(a)
s.toString
return s}s=a.at
s.toString
r=a.ax
r.toString
return s/r},
QJ(a,b){var s
if(a instanceof A.ka)return a.jQ(b)
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
if(s)return n.Mu(a,b)
q=n.gnT()
p=n.QI(a)
s=q.c
if(b<-s)p-=0.5
else if(b>s)p+=0.5
o=n.QJ(a,B.d.yw(p))
s=a.at
s.toString
if(o!==s){s=n.gk_()
r=a.at
r.toString
return new A.jQ(o,A.xG(s,r-o,b),q)}return null}}
A.nV.prototype={
ap(){return new A.Mf(B.l)}}
A.Mf.prototype={
aD(){this.aV()
this.d=this.a.r.z},
Qy(a){var s,r
switch(this.a.e.a){case 0:s=a.a1(t.I)
s.toString
r=A.aby(s.w)
this.a.toString
return r
case 1:return B.v}},
L(a){var s,r,q=this,p=null,o=q.Qy(a),n=q.a,m=n.w
if(m==null){n=n.at
n=n==null?p:n.iV(a)}else n=m
n=new A.nT(B.z7.fP(n))
n=new A.p7(!1,p).fP(n)
m=q.a
s=m.Q
r=m.r
m=m.at
if(m==null)m=A.HN(a).XW(!1)
return new A.cx(new A.a8g(q),A.agS(o,r,s,new A.p7(!1,n),p,m,new A.a8h(q,o)),p,t.Bf)}}
A.a8g.prototype={
$1(a){var s,r,q,p,o
if(a.bv$===0&&this.a.a.y!=null&&a instanceof A.eT){s=t.y9.a(a.a)
r=s.c
r.toString
q=s.a
q.toString
p=s.b
p.toString
p=Math.max(0,A.E(r,q,p))
q=s.d
q.toString
o=B.d.b1(p/Math.max(1,q*s.f))
r=this.a
if(o!==r.d){r.d=o
r.a.y.$1(o)}}return!1},
$S:22}
A.a8h.prototype={
$2(a,b){var s=this.a.a
return new A.mc(this.b,b,0,B.DJ,s.as,A.a([new A.I9(s.r.as,!0,s.z,null)],t.E),null)},
$S:305}
A.ho.prototype={
gli(){return!0},
gw3(){return!1},
Fv(a){return!0}}
A.Gq.prototype={
aA(a){var s=new A.Hf(this.d,0,!1,!1,A.am())
s.aB()
return s},
aE(a,b){b.sa0A(this.d)
b.sa0W(0)
b.sXb(!1)
b.sXa(!1)}}
A.Yf.prototype={}
A.ZE.prototype={}
A.BH.prototype={
uT(a){return this.Te(a)},
Te(a){var s=0,r=A.a8(t.H),q,p=this,o,n,m
var $async$uT=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)switch(s){case 0:n=A.eu(a.b)
m=p.a
if(!m.V(0,n)){s=1
break}m=m.j(0,n)
m.toString
o=a.a
if(o==="Menu.selectedCallback"){m.ga2y().$0()
m.ga0v()
o=$.ac.H$.f.f.e
o.toString
A.alU(o,m.ga0v(),t.r)}else if(o==="Menu.opened")m.ga2x(m).$0()
else if(o==="Menu.closed")m.ga2w(m).$0()
case 1:return A.a6(q,r)}})
return A.a7($async$uT,r)}}
A.nZ.prototype={
bQ(a){return this.f!=a.f}}
A.jO.prototype={
ap(){return new A.No(null,A.y(t.wb,t.M),null,!0,null,B.l)}}
A.No.prototype={
gco(){return this.a.d},
hS(a,b){},
L(a){return A.a5d(this.bc$,this.a.c)}}
A.vQ.prototype={
bQ(a){return a.f!=this.f}}
A.uA.prototype={
ap(){return new A.xh(B.l)}}
A.xh.prototype={
b3(){var s,r=this
r.cl()
s=r.c
s.toString
r.r=A.o7(s)
r.uQ()
if(r.d==null){r.a.toString
r.d=!1}},
b_(a){this.bt(a)
this.uQ()},
gCI(){this.a.toString
return!1},
uQ(){var s,r=this
if(r.gCI()&&!r.w){r.w=!0;++$.jN.x2$
s=$.fG.c8$
s===$&&A.b()
s.ga1r().by(new A.a8G(r),t.P)}},
Us(){var s,r=this
r.e=!1
r.f=null
s=$.fG.c8$
s===$&&A.b()
s.F(0,r.gvc())
r.uQ()},
m(){if(this.e){var s=$.fG.c8$
s===$&&A.b()
s.F(0,this.gvc())}this.aN()},
L(a){var s,r,q=this,p=q.d
p.toString
if(p&&q.gCI())return B.lq
p=q.r
if(p==null)p=q.f
s=q.a
r=s.d
return A.a5d(p,new A.jO(s.c,r,null))}}
A.a8G.prototype={
$1(a){var s,r=this.a
r.w=!1
if(r.c!=null){s=$.fG.c8$
s===$&&A.b()
s.S(0,r.gvc())
r.az(new A.a8F(r,a))}$.jN.Fh()},
$S:306}
A.a8F.prototype={
$0(){var s=this.a
s.f=this.b
s.e=!0
s.d=!1},
$S:0}
A.db.prototype={
gkO(a){return!0},
m(){var s=this,r=s.c
if(r!=null){r=r.eF$.A(0,s)
r.toString
s.F(0,r)
s.c=s.b=null}s.dr()
s.a=!0}}
A.hx.prototype={
wA(a){},
lk(a,b){var s,r,q=this,p=q.bc$
p=p==null?null:J.dA(p.gi6(),b)
s=p===!0
r=s?a.l7(J.ba(q.bc$.gi6(),b)):a.q0()
if(a.b==null){a.b=b
a.c=q
p=new A.a0e(q,a)
a.S(0,p)
q.eF$.l(0,a,p)}a.He(r)
if(!s&&a.gkO(a)&&q.bc$!=null)q.vH(a)},
mY(){var s,r,q=this
if(q.eG$!=null){s=q.bc$
s=s==null?null:s.e
s=s==q.gco()||q.glo()}else s=!0
if(s)return
r=q.bc$
if(q.ky(q.eG$,!1))if(r!=null)r.m()},
glo(){var s,r,q=this
if(q.dv$)return!0
if(q.gco()==null)return!1
s=q.c
s.toString
r=A.o7(s)
if(r!=q.eG$){if(r==null)s=null
else{s=r.c
s=s==null?null:s.d
s=s===!0}s=s===!0}else s=!1
return s},
ky(a,b){var s,r,q=this
if(q.gco()==null||a==null)return q.DX(null,b)
if(b||q.bc$==null){s=q.gco()
s.toString
return q.DX(a.Xj(s,q),b)}s=q.bc$
s.toString
r=q.gco()
r.toString
s.a1d(r)
r=q.bc$
r.toString
a.hu(r)
return!1},
DX(a,b){var s,r=this,q=r.bc$
if(a==q)return!1
r.bc$=a
if(!b){if(a!=null){s=r.eF$
new A.b0(s,A.n(s).h("b0<1>")).Z(0,r.gW_())}r.wA(q)}return!0},
vH(a){var s,r=a.gkO(a),q=this.bc$
if(r){if(q!=null){r=a.b
r.toString
s=a.lr()
if(!J.f(J.ba(q.gi6(),r),s)||!J.dA(q.gi6(),r)){J.eb(q.gi6(),r,s)
q.km()}}}else if(q!=null){r=a.b
r.toString
q.a16(0,r,t.K)}}}
A.a0e.prototype={
$0(){var s=this.a
if(s.bc$==null)return
s.vH(this.b)},
$S:0}
A.aa5.prototype={
$2(a,b){if(!a.a)a.F(0,b)},
$S:30}
A.PD.prototype={
b_(a){this.bt(a)
this.mY()},
b3(){var s,r,q,p,o=this
o.cl()
s=o.bc$
r=o.glo()
q=o.c
q.toString
q=A.o7(q)
o.eG$=q
p=o.ky(q,r)
if(r){o.hS(s,o.dv$)
o.dv$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.eF$.Z(0,new A.aa5())
s=r.bc$
if(s!=null)s.m()
r.bc$=null
r.aN()}}
A.bK.prototype={
sn(a,b){var s=this.y
if(b==null?s!=null:b!==s){this.y=b
this.wC(s)}},
He(a){this.y=a}}
A.fP.prototype={
q0(){return this.cy},
wC(a){this.av()},
l7(a){return A.n(this).h("fP.T").a(a)},
lr(){var s=this.y
return s==null?A.n(this).h("bK.T").a(s):s}}
A.xg.prototype={
l7(a){return this.Nb(a)},
lr(){var s=this.Nc()
s.toString
return s}}
A.uw.prototype={}
A.uv.prototype={}
A.aa6.prototype={
$2(a,b){if(!a.a)a.F(0,b)},
$S:30}
A.o9.prototype={}
A.Hv.prototype={
ap(){return new A.px(new A.Nl($.bq()),null,A.y(t.wb,t.M),null,!0,null,B.l,this.$ti.h("px<1>"))}}
A.uB.prototype={
D(){return"RouteInformationReportingType."+this.b}}
A.px.prototype={
gco(){return this.a.r},
aD(){var s,r=this
r.aV()
s=r.a.c
if(s!=null)s.S(0,r.goM())
r.a.f.Wo(r.gux())
r.a.e.S(0,r.guC())},
hS(a,b){var s,r,q=this,p=q.f
q.lk(p,"route")
s=p.y
r=s==null
if((r?A.n(p).h("bK.T").a(s):s)!=null){p=r?A.n(p).h("bK.T").a(s):s
p.toString
q.p6(p,new A.a8V(q))}else{p=q.a.c
if(p!=null)q.p6(p.a,new A.a8W(q))}},
US(){var s=this
if(s.w||s.a.c==null)return
s.w=!0
$.bG.ax$.push(s.gUv())},
Uw(a){var s,r,q,p,o=this
o.w=!1
s=o.f
r=s.y
q=r==null
if((q?A.n(s).h("bK.T").a(r):r)!=null){s=q?A.n(s).h("bK.T").a(r):r
s.toString
r=o.a.c
r.toString
q=o.e
q.toString
if(q!==B.Sz)p=q===B.l8&&r.b.a==s.a
else p=!0
B.fe.qO("selectMultiEntryHistory",t.H)
q=s.a
q.toString
A.ahc(q,p,s.b)
r.b=r.a=s}o.e=B.l8},
UE(){this.a.e.ga2l()
this.a.toString
return null},
oW(){var s=this
s.f.sn(0,s.UE())
if(s.e==null)s.e=B.l8
s.US()},
b3(){var s,r=this
r.r=!0
r.NS()
s=r.a.c
if(s!=null&&r.r)r.p6(s.a,new A.a8U(r))
r.r=!1
r.oW()},
b_(a){var s,r,q,p=this
p.NT(a)
s=p.a
r=a.c
q=s.c==r
if(q)s.f===a.f
p.d=new A.N()
if(!q){s=r==null
if(!s)r.F(0,p.goM())
q=p.a.c
if(q!=null)q.S(0,p.goM())
s=s?null:r.a
r=p.a.c
if(s!=(r==null?null:r.a))p.Cs()}s=a.f
if(p.a.f!==s){r=p.gux()
s.a18(r)
p.a.f.Wo(r)}p.a.toString
s=p.guC()
a.e.F(0,s)
p.a.e.S(0,s)
p.oW()},
m(){var s=this,r=s.a.c
if(r!=null)r.F(0,s.goM())
s.a.f.a18(s.gux())
s.a.e.F(0,s.guC())
s.d=null
s.NU()},
p6(a,b){var s,r,q=this
q.r=!1
q.d=new A.N()
s=q.a.d
s.toString
r=q.c
r.toString
s.a2B(a,r).by(q.Uh(q.d,b),t.H)},
Uh(a,b){return new A.a8S(this,a,b)},
Cs(){var s=this
s.r=!0
s.p6(s.a.c.a,new A.a8P(s))},
R1(){var s=this
s.d=new A.N()
return s.a.e.a2D().by(s.S7(s.d),t.y)},
S7(a){return new A.a8Q(this,a)},
DE(){this.az(new A.a8T())
this.oW()
return new A.bl(null,t.E8)},
S8(){this.az(new A.a8R())
this.oW()},
L(a){var s=this.bc$,r=this.a,q=r.c,p=r.f,o=r.d
r=r.e
return A.a5d(s,new A.Nt(q,p,o,r,this,new A.fX(r.gFr(),null),null))}}
A.a8V.prototype={
$0(){return this.a.a.e.ga29()},
$S(){return this.a.$ti.h("aj<~>(1)()")}}
A.a8W.prototype={
$0(){return this.a.a.e.ga28()},
$S(){return this.a.$ti.h("aj<~>(1)()")}}
A.a8U.prototype={
$0(){return this.a.a.e.gK5()},
$S(){return this.a.$ti.h("aj<~>(1)()")}}
A.a8S.prototype={
$1(a){var s=0,r=A.a8(t.H),q,p=this,o,n
var $async$$1=A.a9(function(b,c){if(b===1)return A.a5(c,r)
while(true)switch(s){case 0:o=p.a
n=p.b
if(o.d!=n){s=1
break}s=3
return A.an(p.c.$0().$1(a),$async$$1)
case 3:if(o.d==n)o.DE()
case 1:return A.a6(q,r)}})
return A.a7($async$$1,r)},
$S(){return this.a.$ti.h("aj<~>(1)")}}
A.a8P.prototype={
$0(){return this.a.a.e.gK5()},
$S(){return this.a.$ti.h("aj<~>(1)()")}}
A.a8Q.prototype={
$1(a){var s=this.a
if(this.b!=s.d)return new A.bl(!0,t.a9)
s.DE()
return new A.bl(a,t.a9)},
$S:308}
A.a8T.prototype={
$0(){},
$S:0}
A.a8R.prototype={
$0(){},
$S:0}
A.Nt.prototype={
bQ(a){if(this.f==a.f)this.r===a.r
return!0}}
A.Nl.prototype={
q0(){return null},
wC(a){this.av()},
l7(a){var s
if(a==null)return null
t.DI.a(a)
s=J.bF(a)
return new A.o9(A.ci(s.gJ(a)),s.gT(a))},
lr(){var s,r=this,q=r.y,p=q==null
if((p?A.n(r).h("bK.T").a(q):q)==null)q=null
else{s=(p?A.n(r).h("bK.T").a(q):q).a
q=[s,(p?A.n(r).h("bK.T").a(q):q).b]}return q}}
A.pG.prototype={
b_(a){this.bt(a)
this.mY()},
b3(){var s,r,q,p,o=this
o.cl()
s=o.bc$
r=o.glo()
q=o.c
q.toString
q=A.o7(q)
o.eG$=q
p=o.ky(q,r)
if(r){o.hS(s,o.dv$)
o.dv$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.eF$.Z(0,new A.aa6())
s=r.bc$
if(s!=null)s.m()
r.bc$=null
r.aN()}}
A.nR.prototype={
gr9(){return this.e},
iF(){var s,r=this,q=A.acS(r.gOI(),!1)
r.k4=q
r.gnx()
s=A.acS(r.gOK(),!0)
r.p1=s
B.b.I(r.e,A.a([q,s],t.tD))
r.Mp()},
ji(a){var s,r=this
r.Mk(a)
s=r.at.Q
s===$&&A.b()
if(s===B.H&&!r.Q)r.a.GB(r)
return!0},
m(){B.b.U(this.e)
this.Mo()}}
A.dy.prototype={
gbB(a){return this.as},
gzr(){return this.ax},
St(a){var s,r=this
switch(a.a){case 3:s=r.e
if(s.length!==0){s=B.b.gJ(s)
r.gli()
s.sli(!0)}s=r.z
if(s!=null){s.a.$0()
s.a=null}r.z=null
break
case 1:case 2:s=r.e
if(s.length!==0)B.b.gJ(s).sli(!1)
if(r.z==null)r.z=$.bG.a1k(B.Et)
break
case 0:if(!r.ga_D()){r.a.GB(r)
r.Q=!0
s=r.z
if(s!=null){s.a.$0()
s.a=null}r.z=null}break}},
iF(){var s=this,r=s.gIW(s),q=s.gIW(s),p=s.gkI(),o=s.a
o.toString
o=s.at=A.ec(p,r,q,null,o)
o.bo()
p=o.aQ$
p.b=!0
p.a.push(s.gCt())
s.as=o
s.LK()
p=s.as
if(p.gaZ(p)===B.U&&s.e.length!==0){p=B.b.gJ(s.e)
s.gli()
p.sli(!0)}},
mU(){this.Mm()
return this.at.d0(0)},
mS(){this.Mh()
var s=this.at
s.sn(0,s.b)},
wy(a){var s,r
if(a instanceof A.dy){s=this.at
s.toString
r=a.at.x
r===$&&A.b()
s.sn(0,r)}this.Mn(a)},
ji(a){this.ch=a
this.at.fs(0)
this.LI(a)
return!0},
kL(a){this.ET(a)
this.Ml(a)},
mT(a){this.ET(a)
this.Mi(a)},
ET(a){var s,r,q,p,o,n,m,l=this,k={},j=l.CW
l.CW=null
if(a instanceof A.dy&&l.Fv(a)&&!0){s=l.ax.c
if(s!=null){r=s instanceof A.m6?s.a:s
r.toString
q=a.as
q.toString
p=r.gn(r)
o=q.x
o===$&&A.b()
if(!J.f(p,o)){p=q.Q
p===$&&A.b()
p=p===B.U||p===B.H}else p=!0
o=a.y.a
if(p)l.kv(q,o)
else{k.a=null
p=new A.a58(l,q,a)
l.CW=new A.a56(k,q,p)
q.bo()
n=q.aQ$
n.b=!0
n.a.push(p)
m=A.adl(r,q,new A.a57(k,l,a))
k.a=m
l.kv(m,o)}}else l.kv(a.as,a.y.a)}else l.V9(B.cb)
if(j!=null)j.$0()},
kv(a,b){this.ax.saU(0,a)
if(b!=null)b.by(new A.a55(this,a),t.P)},
V9(a){return this.kv(a,null)},
m(){var s=this,r=s.as
if(r!=null)r.bZ(s.gCt())
r=s.z
if(r!=null){r.a.$0()
r.a=null}s.z=null
r=s.at
if(r!=null)r.m()
s.y.cY(0,s.ch)
s.LJ()},
gkI(){return"TransitionRoute"},
i(a){return"TransitionRoute(animation: "+A.h(this.at)+")"}}
A.a58.prototype={
$1(a){var s,r
switch(a.a){case 3:case 0:s=this.a
s.kv(this.b,this.c.y.a)
r=s.CW
if(r!=null){r.$0()
s.CW=null}break
case 1:case 2:break}},
$S:3}
A.a56.prototype={
$0(){this.b.bZ(this.c)
var s=this.a.a
if(s!=null)s.m()},
$S:0}
A.a57.prototype={
$0(){var s,r=this.b
r.kv(this.a.a.a,this.c.y.a)
s=r.CW
if(s!=null){s.$0()
r.CW=null}},
$S:0}
A.a55.prototype={
$1(a){var s=this.a.ax,r=this.b
if(s.c==r){s.saU(0,B.cb)
if(r instanceof A.m6)r.m()}},
$S:10}
A.DH.prototype={
gJ6(){var s=this.jq$
return s!=null&&s.length!==0}}
A.Kp.prototype={
hJ(a,b){A.Yq(this.e,t.z).gw3()
return!1},
cK(a){return A.acP(this.e).HN()}}
A.wO.prototype={
bQ(a){var s=this
return s.f!==a.f||s.r!==a.r||s.w!==a.w||s.x!==a.x}}
A.pl.prototype={
ap(){return new A.mp(A.acr(!0,B.YR.i(0)+" Focus Scope",!1),A.ad3(),B.l,this.$ti.h("mp<1>"))}}
A.mp.prototype={
aD(){var s,r,q=this
q.aV()
s=A.a([],t.ro)
r=q.a.c.fy
if(r!=null)s.push(r)
r=q.a.c.go
if(r!=null)s.push(r)
q.e=new A.wM(s)
if(q.a.c.gjy()){q.a.c.a.a.toString
s=!0}else s=!1
if(s){s=q.a.c.a.x.gdf()
if(s!=null)s.lB(q.f)}},
b_(a){var s,r=this
r.bt(a)
if(r.a.c.gjy()){r.a.c.a.a.toString
s=!0}else s=!1
if(s){s=r.a.c.a.x.gdf()
if(s!=null)s.lB(r.f)}},
b3(){this.cl()
this.d=null},
Qm(){this.az(new A.a7X(this))},
m(){this.f.m()
this.aN()},
gE2(){var s=this.a.c.fy
if((s==null?null:s.gaZ(s))!==B.an){s=this.a.c.a
s=s==null?null:s.CW.a
s=s===!0}else s=!0
return s},
L(a){var s,r,q=this,p=null,o=q.a.c,n=o.gjy(),m=q.a.c
if(!m.gqI()){m=m.jq$
m=m!=null&&m.length!==0}else m=!0
s=q.a.c
s=s.gqI()||s.wQ$>0
r=q.a.c
return A.kv(o.c,new A.a80(q),new A.wO(n,m,s,o,new A.tL(r.fx,new A.nU(new A.fX(new A.a81(q),p),r.k3,p),p),p))}}
A.a7X.prototype={
$0(){this.a.d=null},
$S:0}
A.a80.prototype={
$2(a,b){var s=this.a.a.c.c.a
b.toString
return new A.jO(b,s,null)},
$S:309}
A.a81.prototype={
$1(a){var s,r=null,q=A.aR([B.BD,new A.Kp(a,new A.bd(A.a([],t.B8),t.dc))],t.n,t.nT),p=this.a,o=p.e
o===$&&A.b()
s=p.d
if(s==null)s=p.d=new A.fC(new A.fX(new A.a7Z(p),r),p.a.c.k2)
return A.QJ(q,new A.nZ(p.r,B.c7,B.Tv,A.afC(!1,new A.fC(A.kv(o,new A.a8_(p),s),r),r,r,p.f),r))},
$S:310}
A.a8_.prototype={
$2(a,b){var s,r,q=this.a,p=q.a.c,o=p.fy
o.toString
s=p.go
s.toString
r=p.a
r=r==null?null:r.CW
if(r==null)r=A.iI(!1)
return p.Ft(a,o,s,A.kv(r,new A.a7Y(q),b))},
$S:26}
A.a7Y.prototype={
$2(a,b){var s=this.a,r=s.gE2()
s.f.scd(!r)
return new A.ha(r,null,b,null)},
$S:311}
A.a7Z.prototype={
$1(a){var s,r=this.a.a.c,q=r.fy
q.toString
s=r.go
s.toString
return r.X_(a,q,s)},
$S:13}
A.jA.prototype={
az(a){var s,r=this.k1
if(r.gbi()!=null){r=r.gbi()
if(r.a.c.gjy())if(!r.gE2()){r.a.c.a.a.toString
s=!0}else s=!1
else s=!1
if(s){s=r.a.c.a.x.gdf()
if(s!=null)s.lB(r.f)}r.az(a)}else a.$0()},
Ft(a,b,c,d){return d},
iF(){var s=this
s.MN()
s.fy=A.GL(A.dy.prototype.gbB.call(s,s))
s.go=A.GL(A.dy.prototype.gzr.call(s))},
mU(){var s,r=this,q=r.k1
if(q.gbi()!=null){r.a.a.toString
s=!0}else s=!1
if(s){s=r.a.x.gdf()
if(s!=null)s.lB(q.gbi().f)}return r.MM()},
mS(){var s,r=this,q=r.k1
if(q.gbi()!=null){r.a.a.toString
s=!0}else s=!1
if(s){s=r.a.x.gdf()
if(s!=null)s.lB(q.gbi().f)}r.MK()},
sr3(a){var s,r=this
if(r.fx===a)return
r.az(new A.Yr(r,a))
s=r.fy
s.toString
s.saU(0,r.fx?B.cR:A.dy.prototype.gbB.call(r,r))
s=r.go
s.toString
s.saU(0,r.fx?B.cb:A.dy.prototype.gzr.call(r))
r.mC()},
eS(){var s=0,r=A.a8(t.ij),q,p=this,o,n,m,l
var $async$eS=A.a9(function(a,b){if(a===1)return A.a5(b,r)
while(true)switch(s){case 0:p.k1.gbi()
o=A.ax(p.id,!0,t.CQ),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}l=J
s=6
return A.an(o[m].$0(),$async$eS)
case 6:if(!l.f(b,!0)){q=B.SA
s=1
break}case 4:++m
s=3
break
case 5:q=p.MT()
s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$eS,r)},
wt(a){this.Mj(a)
this.mC()},
mC(){var s,r=this
r.Mg()
r.az(new A.Yp())
s=r.k4
s===$&&A.b()
s.fn()
s=r.p1
s===$&&A.b()
r.gnx()
s.snx(!0)},
pR(){this.Mf()
var s=this.k4
s===$&&A.b()
s.fn()
s=this.k1
if(s.gbi()!=null)s.gbi().Qm()},
OJ(a){var s,r,q=this,p=null
q.gWQ()
q.gw3()
s=q.gWR()
r=q.fy
if(r.gaZ(r)!==B.an){r=q.fy
r=r.gaZ(r)===B.H}else r=!0
q.gw3()
return new A.ha(r,p,new A.tr(p,!1,p,!0,s,p),p)},
OL(a){var s=this,r=null,q=s.ok
return q==null?s.ok=A.dv(r,new A.pl(s,s.k1,A.n(s).h("pl<1>")),!1,r,!1,r,r,r,r,r,r,r,r,r,r,r,B.S9,r,r,r):q},
i(a){return"ModalRoute("+this.b.i(0)+", animation: "+A.h(this.as)+")"}}
A.Yr.prototype={
$0(){this.a.fx=this.b},
$S:0}
A.Yp.prototype={
$0(){},
$S:0}
A.pk.prototype={
eS(){var s=0,r=A.a8(t.ij),q,p=this,o
var $async$eS=A.a9(function(a,b){if(a===1)return A.a5(b,r)
while(true)switch(s){case 0:o=p.jq$
if(o!=null&&o.length!==0){q=B.AF
s=1
break}q=p.Mq()
s=1
break
case 1:return A.a6(q,r)}})
return A.a7($async$eS,r)},
ji(a){var s,r,q=this,p=q.jq$
if(p!=null&&p.length!==0){s=p.pop()
s.b=null
s.a2e()
r=s.c&&--q.wQ$===0
if(q.jq$.length===0||r)q.mC()
return!1}q.ML(a)
return!0}}
A.HH.prototype={
L(a){var s,r,q,p=t.l,o=a.a1(p).f.f,n=Math.max(o.a,0),m=this.d,l=m?o.b:0
l=Math.max(l,0)
s=Math.max(o.c,0)
r=this.f
q=r?o.d:0
return new A.hn(new A.bi(n,l,s,Math.max(q,0)),new A.eH(a.a1(p).f.Iq(r,!0,!0,m),this.x,null),null)}}
A.HL.prototype={
Iw(){},
G9(a,b){if(b!=null)b.cD(new A.uO(null,a,b,0))},
Ga(a,b,c){b.cD(A.ad4(b,null,null,a,c))},
qd(a,b,c){b.cD(new A.hm(null,c,0,a,b,0))},
G8(a,b){b.cD(new A.ix(null,a,b,0))},
mu(){},
m(){},
i(a){return"<optimized out>#"+A.bB(this)}}
A.jl.prototype={
mu(){this.a.eU(0)},
ghl(){return!1},
gfm(){return!1},
gdK(){return 0}}
A.Wz.prototype={
ghl(){return!1},
gfm(){return!1},
gdK(){return 0},
m(){this.b.$0()
this.on()}}
A.a19.prototype={
Ot(a,b){var s,r,q=this
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
else return Math.min(r/3,s)*J.dS(a)}else return 0}}},
b9(a,b){var s,r,q,p,o=this
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
p=o.Ot(s,q)
if(p===0)return
s=o.a
if(A.aaV(s.w.a.c))p=-p
s.yR(p>0?B.l9:B.la)
r=s.at
r.toString
s.ts(r-s.r.w0(s,p))},
m(){this.x=null
this.b.$0()},
i(a){return"<optimized out>#"+A.bB(this)}}
A.Ut.prototype={
G9(a,b){var s=t.o5.a(this.b.x)
if(b!=null)b.cD(new A.uO(s,a,b,0))},
Ga(a,b,c){b.cD(A.ad4(b,null,t.mF.a(this.b.x),a,c))},
qd(a,b,c){b.cD(new A.hm(t.mF.a(this.b.x),c,0,a,b,0))},
G8(a,b){var s=this.b.x
b.cD(new A.ix(s instanceof A.fm?s:null,a,b,0))},
ghl(){var s=this.b
return(s==null?null:s.w)!==B.du},
gfm(){return!0},
gdK(){return 0},
m(){this.b=null
this.on()},
i(a){return"<optimized out>#"+A.bB(this)+"("+A.h(this.b)+")"}}
A.za.prototype={
Iw(){var s=this.a,r=this.b
r===$&&A.b()
s.eU(r.gdK())},
mu(){var s=this.a,r=this.b
r===$&&A.b()
s.eU(r.gdK())},
vy(){var s=this.b
s===$&&A.b()
s=s.x
s===$&&A.b()
if(!(Math.abs(this.a.ts(s))<1e-10)){s=this.a
s.eC(new A.jl(s))}},
vm(){this.a.eU(0)},
qd(a,b,c){var s=this.b
s===$&&A.b()
b.cD(new A.hm(null,c,s.gdK(),a,b,0))},
gfm(){return!0},
gdK(){var s=this.b
s===$&&A.b()
return s.gdK()},
m(){var s=this.b
s===$&&A.b()
s.m()
this.on()},
i(a){var s=A.bB(this),r=this.b
r===$&&A.b()
return"<optimized out>#"+s+"("+r.i(0)+")"},
ghl(){return this.c}}
A.Ck.prototype={
vy(){var s=this.a,r=this.c
r===$&&A.b()
r=r.x
r===$&&A.b()
if(s.ts(r)!==0){s=this.a
s.eC(new A.jl(s))}},
vm(){var s=this.a,r=this.c
r===$&&A.b()
s.eU(r.gdK())},
qd(a,b,c){var s=this.c
s===$&&A.b()
b.cD(new A.hm(null,c,s.gdK(),a,b,0))},
ghl(){return!0},
gfm(){return!0},
gdK(){var s=this.c
s===$&&A.b()
return s.gdK()},
m(){var s=this.b
s===$&&A.b()
s.fa(0)
s=this.c
s===$&&A.b()
s.m()
this.on()},
i(a){var s=A.bB(this),r=this.c
r===$&&A.b()
return"<optimized out>#"+s+"("+r.i(0)+")"}}
A.uI.prototype={
nQ(a,b,c,d){var s,r=this
if(b.a==null){s=$.fz.hC$
s===$&&A.b()
s=s.V(0,c)}else s=!0
if(s){r.b.nQ(a,b,c,d)
return}s=r.a
if(s.gaK(s)==null)return
s=s.gaK(s)
s.toString
if(A.aq6(s)){$.bG.rU(new A.a15(r,a,b,c,d))
return}r.b.nQ(a,b,c,d)},
qT(a,b,c){return this.b.qT(0,b,c)},
qV(a,b){return this.b.qV(a,b)},
xN(a){return this.b.xN(a)}}
A.a15.prototype={
$1(a){var s=this
A.f7(new A.a14(s.a,s.b,s.c,s.d,s.e))},
$S:2}
A.a14.prototype={
$0(){var s=this
return s.a.nQ(s.b,s.c,s.d,s.e)},
$S:0}
A.pS.prototype={
D(){return"AndroidOverscrollIndicator."+this.b}}
A.HM.prototype={
FT(a,b,c,d,e,f){return new A.a9Y(this,f,c!==!1,d,e,b,a)},
XW(a){return this.FT(null,null,null,null,null,a)},
Y2(a,b,c){return this.FT(null,a,b,null,null,c)},
iU(a){return A.kl()},
gwG(){return B.B_},
pO(a,b,c){var s=null
switch(this.iU(a)){case B.bg:case B.b5:case B.bh:return A.apK(b,c.b,B.ce,s,s,A.yK(),B.t,s,s,s,s,B.cW,s)
case B.aw:case B.bf:case B.ax:return b}},
pM(a,b,c){var s
switch(this.iU(a)){case B.ax:case B.bg:case B.b5:case B.bh:s=1
break
case B.aw:s=2
break
case B.bf:s=3
break
default:s=null
break}if(s)c$0:for(;!0;)switch(s){case 1:return b
case 2:switch(1){case 1:break}if(2)c$1:for(;!0;)switch(2){case 1:return new A.ov(c.a,B.a9,b,null)
case 2:s=3
continue c$0}break c$0
case 3:return new A.nl(c.a,B.k,b,null)}},
rF(a){switch(this.iU(a)){case B.ax:return new A.a16()
case B.b5:return new A.a17()
case B.aw:case B.bf:case B.bg:case B.bh:return new A.a18()}},
iV(a){switch(this.iU(a)){case B.ax:return B.Cp
case B.b5:return B.Cq
case B.aw:case B.bf:case B.bg:case B.bh:return B.DP}},
i(a){return"ScrollBehavior"}}
A.a16.prototype={
$1(a){return A.anT(a.gc2(a))},
$S:312}
A.a17.prototype={
$1(a){var s=a.gc2(a),r=t.pa
return new A.nI(A.aX(20,null,!1,r),s,A.aX(20,null,!1,r))},
$S:313}
A.a18.prototype={
$1(a){return new A.fL(a.gc2(a),A.aX(20,null,!1,t.pa))},
$S:76}
A.a9Y.prototype={
gwG(){var s=this.f
return s==null?B.B_:s},
pM(a,b,c){if(this.c)return this.a.pM(a,b,c)
return b},
pO(a,b,c){if(this.b)return this.a.pO(a,b,c)
return b},
iV(a){var s=this.a.iV(a)
return s},
rF(a){return this.a.rF(a)},
i(a){return"_WrappedScrollBehavior"}}
A.uJ.prototype={
bQ(a){var s
if(A.A(this.f)===A.A(a.f))s=!1
else s=!0
return s}}
A.od.prototype={
fN(a,b,c){return this.WK(a,b,c)},
WK(a,b,c){var s=0,r=A.a8(t.H),q=this,p,o,n
var $async$fN=A.a9(function(d,e){if(d===1)return A.a5(e,r)
while(true)switch(s){case 0:n=A.a([],t.iJ)
for(p=q.d,o=0;o<p.length;++o)n.push(p[o].fN(a,b,c))
s=2
return A.an(A.D2(n,t.H),$async$fN)
case 2:return A.a6(null,r)}})
return A.a7($async$fN,r)},
al(a){this.d.push(a)
a.S(0,this.ge0())},
mQ(a,b){b.F(0,this.ge0())
B.b.A(this.d,b)},
m(){var s,r,q,p
for(s=this.d,r=s.length,q=this.ge0(),p=0;p<s.length;s.length===r||(0,A.Q)(s),++p)s[p].F(0,q)
this.dr()},
FV(a,b,c){return A.aq5(b,null,0,!0,c,a)},
i(a){var s=A.a([],t.s),r=this.d,q=r.length
if(q===0)s.push("no clients")
else if(q===1){r=B.b.gb4(r).at
r.toString
s.push("one client, offset "+B.d.M(r,1))}else s.push(""+q+" clients")
return"<optimized out>#"+A.bB(this)+"("+B.b.bj(s,", ")+")"}}
A.fF.prototype={
fb(){var s=this,r=null,q=s.gxd()?s.gen():r,p=s.gxd()?s.gem():r,o=s.gH2()?s.gc3():r,n=s.gH5()?s.go0():r,m=s.gf8()
return new A.rl(q,p,o,n,m)},
gya(){var s=this
return s.gc3()<s.gen()||s.gc3()>s.gem()},
gFo(){var s=this
return s.gc3()===s.gen()||s.gc3()===s.gem()},
gjo(){var s=this
return s.go0()-A.E(s.gen()-s.gc3(),0,s.go0())-A.E(s.gc3()-s.gem(),0,s.go0())}}
A.rl.prototype={
gen(){var s=this.a
s.toString
return s},
gem(){var s=this.b
s.toString
return s},
gxd(){return this.a!=null&&this.b!=null},
gc3(){var s=this.c
s.toString
return s},
gH2(){return this.c!=null},
go0(){var s=this.d
s.toString
return s},
gH5(){return this.d!=null},
i(a){var s=this
return"FixedScrollMetrics("+B.d.M(Math.max(s.gc3()-s.gen(),0),1)+"..["+B.d.M(s.gjo(),1)+"].."+B.d.M(Math.max(s.gem()-s.gc3(),0),1)+")"},
gf8(){return this.e}}
A.KM.prototype={}
A.dK.prototype={}
A.J7.prototype={
HY(a){if(t.bx.b(a))++a.bv$
return!1}}
A.du.prototype={
c6(a){this.Nu(a)
a.push(this.a.i(0))}}
A.uO.prototype={
c6(a){var s
this.lP(a)
s=this.d
if(s!=null)a.push(s.i(0))}}
A.eT.prototype={
c6(a){var s
this.lP(a)
a.push("scrollDelta: "+A.h(this.e))
s=this.d
if(s!=null)a.push(s.i(0))},
gGd(){return this.d}}
A.hm.prototype={
c6(a){var s,r=this
r.lP(a)
a.push("overscroll: "+B.d.M(r.e,1))
a.push("velocity: "+B.d.M(r.f,1))
s=r.d
if(s!=null)a.push(s.i(0))}}
A.ix.prototype={
c6(a){var s
this.lP(a)
s=this.d
if(s!=null)a.push(s.i(0))},
gGd(){return this.d}}
A.J1.prototype={
c6(a){this.lP(a)
a.push("direction: "+this.d.i(0))}}
A.xq.prototype={
c6(a){var s,r
this.ti(a)
s=this.bv$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.xp.prototype={
bQ(a){return this.f!==a.f}}
A.k7.prototype={
a_Z(a,b){return this.d.$1(b)}}
A.uM.prototype={
ap(){return new A.uN(new A.rY(t.uk),B.l)}}
A.uN.prototype={
F(a,b){var s,r,q,p=this.d
p.toString
p=A.ari(p)
s=A.n(p).c
for(;p.t();){r=p.c
if(r==null)r=s.a(r)
if(J.f(r.d,b)){p=r.a
p.toString
A.n(r).h("li.E").a(r);++p.a
s=r.b
s.c=r.c
r.c.b=s
q=--p.b
r.a=r.b=r.c=null
if(q===0)p.c=null
else if(r===p.c)p.c=s
return}}},
D3(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.d
if(i.b===0)return
p=A.ax(i,!0,t.cS)
for(i=p.length,o=0;o<i;++o){s=p[o]
try{if(s.a!=null)J.alG(s,a)}catch(n){r=A.au(n)
q=A.aG(n)
m=j instanceof A.bP?A.cL(j):null
l=A.bj("while dispatching notifications for "+A.az(m==null?A.aI(j):m).i(0))
k=$.f9()
if(k!=null)k.$1(new A.bt(r,q,"widget library",l,new A.a1a(j),!1))}}},
L(a){var s=this
return new A.cx(new A.a1b(s),new A.cx(new A.a1c(s),new A.xp(s,s.a.c,null),null,t.Bf),null,t.iY)},
m(){this.d=null
this.aN()}}
A.a1a.prototype={
$0(){var s=null,r=this.a
return A.a([A.jd("The "+A.A(r).i(0)+" sending notification was",r,!0,B.b7,s,!1,s,s,B.aA,s,!1,!0,!0,B.bm,s,t.Ec)],t.F)},
$S:14}
A.a1b.prototype={
$1(a){var s=new A.JP(null,null,a.a,a.b,0)
s.bv$=a.bv$
this.a.D3(s)
return!1},
$S:66}
A.a1c.prototype={
$1(a){this.a.D3(a)
return!1},
$S:22}
A.JP.prototype={}
A.uK.prototype={
D(){return"ScrollDecelerationRate."+this.b}}
A.lK.prototype={
fP(a){var s=this.a
s=s==null?null:s.jb(a)
return s==null?a:s},
jb(a){return new A.lK(this.fP(a))},
w0(a,b){var s=this.a
if(s==null)return b
return s.w0(a,b)},
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
if(s==null){$.ac.toString
s=$.cc().gjK()
return Math.abs(a)>Math.max(Math.abs(s.a),Math.abs(s.b))}return s.Ik(a,b,c)},
ms(a,b){var s=this.a
if(s==null)return 0
return s.ms(a,b)},
pE(a,b,c,d){var s=this.a
if(s==null){s=b.c
s.toString
return s}return s.pE(a,b,c,d)},
kH(a,b){var s=this.a
if(s==null)return null
return s.kH(a,b)},
gk_(){var s=this.a
s=s==null?null:s.gk_()
return s==null?$.ak8():s},
gnT(){var s=this.a
s=s==null?null:s.gnT()
return s==null?$.ak9():s},
gxG(){var s=this.a
s=s==null?null:s.gxG()
return s==null?18:s},
gr0(){var s=this.a
s=s==null?null:s.gr0()
return s==null?50:s},
gny(){var s=this.a
s=s==null?null:s.gny()
return s==null?8000:s},
w8(a){var s=this.a
if(s==null)return 0
return s.w8(a)},
gwH(){var s=this.a
return s==null?null:s.gwH()},
gkA(){return!0},
i(a){var s=this.a
if(s==null)return"ScrollPhysics"
return"ScrollPhysics -> "+s.i(0)}}
A.GO.prototype={
jb(a){return new A.GO(this.fP(a))},
pE(a,b,c,d){var s,r,q,p,o,n,m,l
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
return p+(o-q)}}l=this.Mt(a,b,c,d)
if(r){q=b.b
q.toString
l=A.E(l,p,q)}return l}}
A.qg.prototype={
jb(a){return new A.qg(this.b,this.fP(a))},
GO(a){switch(this.b.a){case 1:return 0.07*Math.pow(1-a,2)
case 0:return 0.52*Math.pow(1-a,2)}},
w0(a,b){var s,r,q,p,o,n,m
if(!a.gya())return b
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
m=this.GO((o-Math.abs(b))/s)}else{s.toString
m=this.GO(o/s)}return J.dS(b)*A.am6(o,Math.abs(b),m)},
ms(a,b){return 0},
kH(a,b){var s,r,q,p,o,n,m,l=this.gnT()
if(Math.abs(b)>=l.c||a.gya()){switch(this.b.a){case 1:s=1400
break
case 0:s=0
break
default:s=null}r=this.gk_()
q=a.at
q.toString
p=a.z
p.toString
o=a.Q
o.toString
n=new A.Rk(p,o,r,l)
if(q<p){n.f=new A.jQ(p,A.xG(r,q-p,b),B.c4)
n.r=-1/0}else if(q>o){n.f=new A.jQ(o,A.xG(r,q-o,b),B.c4)
n.r=-1/0}else{q=n.e=A.anM(0.135,q,b,s)
m=q.gqt()
if(b>0&&m>o){p=q.IL(o)
n.r=p
n.f=new A.jQ(o,A.xG(r,o-o,Math.min(q.du(0,p),5000)),B.c4)}else if(b<0&&m<p){o=q.IL(p)
n.r=o
n.f=new A.jQ(p,A.xG(r,p-p,Math.min(q.du(0,o),5000)),B.c4)}else n.r=1/0}return n}return null},
gr0(){return 100},
w8(a){return J.dS(a)*Math.min(0.000816*Math.pow(Math.abs(a),1.967),4e4)},
gwH(){return 3.5},
gny(){switch(this.b.a){case 1:return 64e3
case 0:return A.lK.prototype.gny.call(this)}},
gk_(){switch(this.b.a){case 1:return A.ah4(0.3,1.3,75)
case 0:return A.lK.prototype.gk_.call(this)}}}
A.qt.prototype={
jb(a){return new A.qt(this.fP(a))},
ms(a,b){var s,r,q=a.at
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
kH(a,b){var s,r,q,p,o=null,n=this.gnT()
if(a.gya()){s=a.at
s.toString
r=a.Q
r.toString
if(s>r)q=r
else q=o
r=a.z
r.toString
if(s<r)q=r
s=this.gk_()
r=a.at
r.toString
q.toString
return new A.jQ(q,A.xG(s,r-q,Math.min(0,b)),n)}s=Math.abs(b)
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
r=new A.RX(r,b,n)
s=Math.exp(Math.log(0.35*s/778.3530259679999)/($.ajQ()-1))
r.e=s
r.f=Math.abs(b*s/3.065)
return r}}
A.of.prototype={
D(){return"ScrollPositionAlignmentPolicy."+this.b}}
A.iy.prototype={
Aw(a,b,c,d,e){if(d!=null)this.j7(d)
this.ID()},
gen(){var s=this.z
s.toString
return s},
gem(){var s=this.Q
s.toString
return s},
gxd(){return this.z!=null&&this.Q!=null},
gc3(){var s=this.at
s.toString
return s},
gH2(){return this.at!=null},
go0(){var s=this.ax
s.toString
return s},
gH5(){return this.ax!=null},
j7(a){var s=this,r=a.z
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
if(A.A(a)!==A.A(s))s.fr.Iw()
s.w.zx(s.fr.ghl())
s.dy.sn(0,s.fr.gfm())},
K6(a){var s,r,q,p=this,o=p.at
o.toString
if(a!==o){s=p.r.ms(p,a)
o=p.at
o.toString
r=a-s
p.at=r
if(r!==o){p.vI()
p.zU()
r=p.at
r.toString
p.wB(r-o)}if(s!==0){o=p.fr
o.toString
r=p.fb()
q=$.ac.H$.z.j(0,p.w.z)
q.toString
o.qd(r,q,s)
return s}}return 0},
x0(a){var s=this,r=s.at
r.toString
s.as=a-r
s.at=a
s.vI()
s.zU()
$.bG.ax$.push(new A.a1d(s))},
zn(){var s,r=this.w,q=r.c
q.toString
q=A.G4(q)
if(q!=null){r=r.c
r.toString
s=this.at
s.toString
q.J9(r,s)}},
ID(){var s,r,q
if(this.at==null){s=this.w
r=s.c
r.toString
r=A.G4(r)
if(r==null)q=null
else{s=s.c
s.toString
q=r.yn(s)}if(q!=null)this.at=q}},
IC(a,b){if(b)this.at=a
else this.di(a)},
zm(){var s=this.at
s.toString
this.w.e.sn(0,s)
s=$.fG.c8$
s===$&&A.b()
s.GF()},
mw(a){if(this.ax!==a){this.ax=a
this.ch=!0}return!0},
mt(a,b){var s,r,q,p=this
if(!A.yI(p.z,a,0.001)||!A.yI(p.Q,b,0.001)||p.ch||p.db!==A.b9(p.gf8())){p.z=a
p.Q=b
p.db=A.b9(p.gf8())
s=p.ay?p.fb():null
p.ch=!1
p.CW=!0
if(p.ay){r=p.cx
r.toString
s.toString
r=!p.Y3(r,s)}else r=!1
if(r)return!1
p.ay=!0}if(p.CW){p.Mx()
p.w.JZ(p.r.iY(p))
p.CW=!1}s=p.fb()
if(p.cx!=null){r=Math.max(s.gc3()-s.gen(),0)
q=p.cx
if(r===Math.max(q.gc3()-q.gen(),0))if(s.gjo()===p.cx.gjo()){r=Math.max(s.gem()-s.gc3(),0)
q=p.cx
r=r===Math.max(q.gem()-q.gc3(),0)&&s.e===p.cx.e}else r=!1
else r=!1
r=!r}else r=!0
if(r){if(!p.cy){A.f7(p.gYC())
p.cy=!0}p.cx=p.fb()}return!0},
Y3(a,b){var s=this,r=s.r.pE(s.fr.gfm(),b,a,s.fr.gdK()),q=s.at
q.toString
if(r!==q){s.at=r
return!1}return!0},
mu(){this.fr.mu()
this.vI()},
vI(){var s,r,q,p,o,n=this,m=n.w
switch(m.a.c.a){case 0:s=B.dC
r=B.dB
break
case 1:s=B.dD
r=B.dE
break
case 2:s=B.dB
r=B.dC
break
case 3:s=B.dE
r=B.dD
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
if(A.aei(q,n.dx))return
n.dx=q
m=m.z
if(m.gbi()!=null)m.gbi().a1j(q)},
wM(a,b,c,d,e,f){var s,r,q,p,o,n=this,m=null,l=A.apO(a)
l.toString
s=f!=null&&f!==a?A.fx(f.bs(0,a),a.gh9().eJ(f.gh9())):m
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
if(o===r)return A.bW(m,t.H)
if(e.a===B.t.a){n.di(o)
return A.bW(m,t.H)}return n.fN(o,d,e)},
nB(a,b,c,d){var s,r=this.z
r.toString
s=this.Q
s.toString
b=A.E(b,r,s)
return this.MP(0,b,c,d)},
eC(a){var s,r,q=this,p=q.fr
if(p!=null){s=p.ghl()
r=q.fr.gfm()
if(r&&!a.gfm())q.wv()
q.fr.m()}else{r=!1
s=!1}q.fr=a
if(s!==a.ghl())q.w.zx(q.fr.ghl())
q.dy.sn(0,q.fr.gfm())
if(!r&&q.fr.gfm())q.wz()},
wz(){var s=this.fr
s.toString
s.G9(this.fb(),$.ac.H$.z.j(0,this.w.z))},
wB(a){var s,r,q=this.fr
q.toString
s=this.fb()
r=$.ac.H$.z.j(0,this.w.z)
r.toString
q.Ga(s,r,a)},
wv(){var s,r,q=this,p=q.fr
p.toString
s=q.fb()
r=$.ac.H$.z.j(0,q.w.z)
r.toString
p.G8(s,r)
q.zm()
q.zn()},
YD(){var s,r,q
this.cy=!1
s=this.w.z
if($.ac.H$.z.j(0,s)!=null){r=this.fb()
q=$.ac.H$.z.j(0,s)
q.toString
s=$.ac.H$.z.j(0,s)
if(s!=null)s.cD(new A.lJ(r,q,0))}},
m(){var s=this,r=s.fr
if(r!=null)r.m()
s.fr=null
s.dy.m()
s.dr()},
c6(a){var s,r,q=this
q.MO(a)
s=q.z
s=s==null?null:B.d.M(s,1)
r=q.Q
r=r==null?null:B.d.M(r,1)
a.push("range: "+A.h(s)+".."+A.h(r))
r=q.ax
a.push("viewport: "+A.h(r==null?null:B.d.M(r,1)))}}
A.a1d.prototype={
$1(a){this.a.as=0},
$S:2}
A.lJ.prototype={
c6(a){this.Nt(a)
a.push(this.a.i(0))}}
A.xo.prototype={
c6(a){var s,r
this.ti(a)
s=this.bv$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.Nz.prototype={}
A.lL.prototype={
Ax(a,b,c,d,e,f){var s=this
if(s.at==null&&c!=null)s.at=c
if(s.fr==null)s.eC(new A.jl(s))},
gf8(){return this.w.a.c},
j7(a){var s,r=this
r.Mv(a)
r.fr.a=r
r.k4=a.k4
s=a.ok
if(s!=null){r.ok=s
s.a=r
a.ok=null}},
eC(a){var s,r=this
r.k3=0
r.Mz(a)
s=r.ok
if(s!=null)s.m()
r.ok=null
if(!r.fr.gfm())r.yR(B.fj)},
eU(a){var s,r,q,p=this,o=p.r.kH(p,a)
if(o!=null){s=p.fr
s=s==null?null:s.ghl()
s=new A.za(s!==!1,p)
r=A.ac2(null,0,p.w)
r.bo()
q=r.aW$
q.b=!0
q.a.push(s.gvx())
r.ho(0)
r.z=B.aH
r.Ed(o).a.a.hV(s.gvl())
s.b=r
p.eC(s)}else p.eC(new A.jl(p))},
yR(a){var s,r,q,p=this
if(p.k4===a)return
p.k4=a
s=p.fb()
r=p.w.z
q=$.ac.H$.z.j(0,r)
q.toString
r=$.ac.H$.z.j(0,r)
if(r!=null)r.cD(new A.J1(a,s,q,0))},
fN(a,b,c){var s,r,q,p=this,o=p.at
o.toString
if(A.yI(a,o,p.r.gnT().a)){p.di(a)
return A.bW(null,t.H)}o=p.at
o.toString
s=new A.Ck(p)
r=new A.bg(new A.aq($.ah,t.U),t.V)
s.b=r
o=A.ac2("DrivenScrollActivity",o,p.w)
o.bo()
q=o.aW$
q.b=!0
q.a.push(s.gvx())
o.z=B.aH
o.kb(a,b,c).a.a.hV(s.gvl())
s.c!==$&&A.ev()
s.c=o
p.eC(s)
return r.a},
di(a){var s,r,q=this
q.eC(new A.jl(q))
s=q.at
s.toString
if(s!==a){q.x0(a)
q.wz()
r=q.at
r.toString
q.wB(r-s)
q.wv()}q.eU(0)},
yd(a){var s,r,q,p,o=this
if(a===0){o.eU(0)
return}s=o.at
s.toString
r=o.z
r.toString
r=Math.max(s+a,r)
q=o.Q
q.toString
p=Math.min(r,q)
if(p!==s){o.eC(new A.jl(o))
o.yR(-a>0?B.l9:B.la)
s=o.at
s.toString
o.dy.sn(0,!0)
o.x0(p)
o.wz()
r=o.at
r.toString
o.wB(r-s)
o.wv()
o.eU(0)}},
m(){var s=this.ok
if(s!=null)s.m()
this.ok=null
this.MB()}}
A.Rk.prototype={
vt(a){var s,r=this,q=r.r
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
cM(a,b){return this.vt(b).cM(0,b-this.w)},
du(a,b){return this.vt(b).du(0,b-this.w)},
jz(a){return this.vt(a).jz(a-this.w)},
i(a){return"BouncingScrollSimulation(leadingExtent: "+A.h(this.b)+", trailingExtent: "+A.h(this.c)+")"}}
A.RX.prototype={
cM(a,b){var s,r=this,q=r.e
q===$&&A.b()
s=A.E(b/q,0,1)
q=r.f
q===$&&A.b()
return r.b+q*(1.2*s*s*s-3.27*s*s+3.065*s)*J.dS(r.c)},
du(a,b){var s,r=this,q=r.e
q===$&&A.b()
s=A.E(b/q,0,1)
q=r.f
q===$&&A.b()
return q*(3.6*s*s-6.54*s+3.065)*J.dS(r.c)/r.e},
jz(a){var s=this.e
s===$&&A.b()
return a>=s}}
A.HO.prototype={
D(){return"ScrollViewKeyboardDismissBehavior."+this.b}}
A.a93.prototype={
$2(a,b){if(!a.a)a.F(0,b)},
$S:30}
A.uQ.prototype={
ap(){var s=null,r=t.J
return new A.uR(new A.Nm($.bq()),new A.br(s,r),new A.br(s,t.lV),new A.br(s,r),B.yT,s,A.y(t.wb,t.M),s,!0,s,s,s,B.l)},
a1W(a,b){retur