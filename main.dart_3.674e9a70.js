)}}
A.dV.prototype={
ghu(){return 0},
ght(a){return this.a},
ghv(){return this.b},
ad(a,b){return new A.dV(this.a-b.a,this.b-b.b)},
V(a,b){return new A.dV(this.a+b.a,this.b+b.b)},
a0(a,b){return new A.dV(this.a*b,this.b*b)},
Y(a){var s=this
switch(a.a){case 0:return new A.cZ(-s.a,s.b)
case 1:return new A.cZ(s.a,s.b)}},
k(a){return A.akO(this.a,this.b)}}
A.zw.prototype={
a0(a,b){return new A.zw(this.a*b,this.b*b,this.c*b)},
Y(a){var s=this
switch(a.a){case 0:return new A.cZ(s.a-s.b,s.c)
case 1:return new A.cZ(s.a+s.b,s.c)}},
ghu(){return this.a},
ght(a){return this.b},
ghv(){return this.c}}
A.pW.prototype={
G(){return"RenderComparison."+this.b}}
A.tj.prototype={
G(){return"Axis."+this.b}}
A.yq.prototype={
G(){return"VerticalDirection."+this.b}}
A.m1.prototype={
G(){return"AxisDirection."+this.b}}
A.wu.prototype={
KD(a,b,c,d){return $.at().u_(a,!1,c,d)},
a4L(a){return this.KD(a,!1,null,null)},
KE(a,b,c,d){var s=$.at(),r=a.a
r.toString
return s.u_(r,!1,c,d)},
a4O(a){return this.KE(a,!1,null,null)},
$idH:1}
A.S4.prototype={
aC(){var s,r,q
for(s=this.a,s=A.jR(s,s.r),r=A.o(s).c;s.t();){q=s.d;(q==null?r.a(q):q).$0()}},
X(a,b){this.a.E(0,b)},
I(a,b){this.a.v(0,b)}}
A.ou.prototype={
qn(a){var s=this
return new A.zx(s.gdu().ad(0,a.gdu()),s.geN().ad(0,a.geN()),s.geI().ad(0,a.geI()),s.gfg().ad(0,a.gfg()),s.gdv().ad(0,a.gdv()),s.geM().ad(0,a.geM()),s.gfh().ad(0,a.gfh()),s.geH().ad(0,a.geH()))},
E(a,b){var s=this
return new A.zx(s.gdu().V(0,b.gdu()),s.geN().V(0,b.geN()),s.geI().V(0,b.geI()),s.gfg().V(0,b.gfg()),s.gdv().V(0,b.gdv()),s.geM().V(0,b.geM()),s.gfh().V(0,b.gfh()),s.geH().V(0,b.geH()))},
k(a){var s,r,q,p,o=this
if(o.gdu().l(0,o.geN())&&o.geN().l(0,o.geI())&&o.geI().l(0,o.gfg()))if(!o.gdu().l(0,B.T))s=o.gdu().a===o.gdu().b?"BorderRadius.circular("+B.d.N(o.gdu().a,1)+")":"BorderRadius.all("+o.gdu().k(0)+")"
else s=null
else{r=""+"BorderRadius.only("
if(!o.gdu().l(0,B.T)){r+="topLeft: "+o.gdu().k(0)
q=!0}else q=!1
if(!o.geN().l(0,B.T)){if(q)r+=", "
r+="topRight: "+o.geN().k(0)
q=!0}if(!o.geI().l(0,B.T)){if(q)r+=", "
r+="bottomLeft: "+o.geI().k(0)
q=!0}if(!o.gfg().l(0,B.T)){if(q)r+=", "
r+="bottomRight: "+o.gfg().k(0)}r+=")"
s=r.charCodeAt(0)==0?r:r}if(o.gdv().l(0,o.geM())&&o.geM().l(0,o.geH())&&o.geH().l(0,o.gfh()))if(!o.gdv().l(0,B.T))p=o.gdv().a===o.gdv().b?"BorderRadiusDirectional.circular("+B.d.N(o.gdv().a,1)+")":"BorderRadiusDirectional.all("+o.gdv().k(0)+")"
else p=null
else{r=""+"BorderRadiusDirectional.only("
if(!o.gdv().l(0,B.T)){r+="topStart: "+o.gdv().k(0)
q=!0}else q=!1
if(!o.geM().l(0,B.T)){if(q)r+=", "
r+="topEnd: "+o.geM().k(0)
q=!0}if(!o.gfh().l(0,B.T)){if(q)r+=", "
r+="bottomStart: "+o.gfh().k(0)
q=!0}if(!o.geH().l(0,B.T)){if(q)r+=", "
r+="bottomEnd: "+o.geH().k(0)}r+=")"
p=r.charCodeAt(0)==0?r:r}r=s!=null
if(r&&p!=null)return A.h(s)+" + "+p
if(r)return s
if(p!=null)return p
return"BorderRadius.zero"},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.Y(b)!==A.C(s))return!1
return b instanceof A.ou&&b.gdu().l(0,s.gdu())&&b.geN().l(0,s.geN())&&b.geI().l(0,s.geI())&&b.gfg().l(0,s.gfg())&&b.gdv().l(0,s.gdv())&&b.geM().l(0,s.geM())&&b.gfh().l(0,s.gfh())&&b.geH().l(0,s.geH())},
gu(a){var s=this
return A.T(s.gdu(),s.geN(),s.geI(),s.gfg(),s.gdv(),s.geM(),s.gfh(),s.geH(),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.cy.prototype={
gdu(){return this.a},
geN(){return this.b},
geI(){return this.c},
gfg(){return this.d},
gdv(){return B.T},
geM(){return B.T},
gfh(){return B.T},
geH(){return B.T},
dG(a){var s=this,r=s.a.t1(0,B.T),q=s.b.t1(0,B.T)
return A.K3(a,s.c.t1(0,B.T),s.d.t1(0,B.T),r,q)},
qn(a){if(a instanceof A.cy)return this.ad(0,a)
return this.CR(a)},
E(a,b){if(b instanceof A.cy)return this.V(0,b)
return this.CQ(0,b)},
ad(a,b){var s=this
return new A.cy(s.a.ad(0,b.a),s.b.ad(0,b.b),s.c.ad(0,b.c),s.d.ad(0,b.d))},
V(a,b){var s=this
return new A.cy(s.a.V(0,b.a),s.b.V(0,b.b),s.c.V(0,b.c),s.d.V(0,b.d))},
a0(a,b){var s=this
return new A.cy(s.a.a0(0,b),s.b.a0(0,b),s.c.a0(0,b),s.d.a0(0,b))},
Y(a){return this}}
A.zx.prototype={
a0(a,b){var s=this
return new A.zx(s.a.a0(0,b),s.b.a0(0,b),s.c.a0(0,b),s.d.a0(0,b),s.e.a0(0,b),s.f.a0(0,b),s.r.a0(0,b),s.w.a0(0,b))},
Y(a){var s=this
switch(a.a){case 0:return new A.cy(s.a.V(0,s.f),s.b.V(0,s.e),s.c.V(0,s.w),s.d.V(0,s.r))
case 1:return new A.cy(s.a.V(0,s.e),s.b.V(0,s.f),s.c.V(0,s.r),s.d.V(0,s.w))}},
gdu(){return this.a},
geN(){return this.b},
geI(){return this.c},
gfg(){return this.d},
gdv(){return this.e},
geM(){return this.f},
gfh(){return this.r},
geH(){return this.w}}
A.tn.prototype={
G(){return"BorderStyle."+this.b}}
A.dc.prototype={
aM(a,b){var s=Math.max(0,this.b*b),r=b<=0?B.cf:this.c
return new A.dc(this.a,s,r,-1)},
i1(){switch(this.c.a){case 1:var s=$.at().bn()
s.san(0,this.a)
s.shj(this.b)
s.scE(0,B.a2)
return s
case 0:s=$.at().bn()
s.san(0,B.ap)
s.shj(0)
s.scE(0,B.a2)
return s}},
geF(){return this.b*(1-(1+this.d)/2)},
gCK(){return this.b*(1+this.d)/2},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.Y(b)!==A.C(s))return!1
return b instanceof A.dc&&b.a.l(0,s.a)&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gu(a){var s=this
return A.T(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
c4(){return"BorderSide"}}
A.bN.prototype={
fo(a,b,c){return null},
E(a,b){return this.fo(a,b,!1)},
V(a,b){var s=this.E(0,b)
if(s==null)s=b.fo(0,this,!0)
return s==null?new A.fM(A.a([b,this],t.N_)):s},
cd(a,b){if(a==null)return this.aM(0,b)
return null},
ce(a,b){if(a==null)return this.aM(0,1-b)
return null},
k(a){return"ShapeBorder()"}}
A.dB.prototype={
gm8(){var s=Math.max(this.a.geF(),0)
return new A.bq(s,s,s,s)},
cd(a,b){if(a==null)return this.aM(0,b)
return null},
ce(a,b){if(a==null)return this.aM(0,1-b)
return null}}
A.fM.prototype={
gm8(){return B.c.zM(this.a,B.b2,new A.ad4())},
fo(a,b,c){var s,r,q,p=b instanceof A.fM
if(!p){s=this.a
r=c?B.c.gT(s):B.c.gJ(s)
q=r.fo(0,b,c)
if(q==null)q=b.fo(0,r,!c)
if(q!=null){p=A.aA(s,!0,t.RY)
p[c?p.length-1:0]=q
return new A.fM(p)}}s=A.a([],t.N_)
if(c)B.c.K(s,this.a)
if(p)B.c.K(s,b.a)
else s.push(b)
if(!c)B.c.K(s,this.a)
return new A.fM(s)},
E(a,b){return this.fo(a,b,!1)},
aM(a,b){var s=this.a,r=A.al(s).i("au<1,bN>")
return new A.fM(A.aA(new A.au(s,new A.ad5(b),r),!0,r.i("bh.E")))},
cd(a,b){return A.ari(a,this,b)},
ce(a,b){return A.ari(this,a,b)},
fI(a,b){return B.c.gJ(this.a).fI(a,b)},
hU(a,b,c){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q){p=s[q]
p.hU(a,b,c)
b=p.gm8().Y(c).z6(b)}},
l(a,b){if(b==null)return!1
if(this===b)return!0
if(J.Y(b)!==A.C(this))return!1
return b instanceof A.fM&&A.cX(b.a,this.a)},
gu(a){return A.dj(this.a)},
k(a){var s=this.a,r=A.al(s).i("cE<1>")
return new A.au(new A.cE(s,r),new A.ad6(),r.i("au<bh.E,i>")).b6(0," + ")}}
A.ad4.prototype={
$2(a,b){return a.E(0,b.gm8())},
$S:227}
A.ad5.prototype={
$1(a){return a.aM(0,this.a)},
$S:228}
A.ad6.prototype={
$1(a){return a.k(0)},
$S:229}
A.N6.prototype={}
A.tv.prototype={
G(){return"BoxShape."+this.b}}
A.Ci.prototype={
fo(a,b,c){return null},
E(a,b){return this.fo(a,b,!1)},
fI(a,b){var s=$.at().cq()
s.o3(a)
return s}}
A.dv.prototype={
gm8(){var s,r=this
if(r.gIj()){s=r.a.geF()
return new A.bq(s,s,s,s)}return new A.bq(r.d.geF(),r.a.geF(),r.b.geF(),r.c.geF())},
gpg(){var s,r,q=this,p=q.a,o=p.a,n=q.b
if(n.a.l(0,o)&&q.c.a.l(0,o)&&q.d.a.l(0,o))if(q.gIj()){s=p.c
if(n.c===s&&q.c.c===s&&q.d.c===s){r=p.d
p=n.d===r&&q.c.d===r&&q.d.d===r}else p=!1}else p=!1
else p=!1
return p},
gIj(){var s=this,r=s.a.b
return s.b.b===r&&s.c.b===r&&s.d.b===r},
fo(a,b,c){var s=this
if(b instanceof A.dv&&A.iZ(s.a,b.a)&&A.iZ(s.b,b.b)&&A.iZ(s.c,b.c)&&A.iZ(s.d,b.d))return new A.dv(A.fV(s.a,b.a),A.fV(s.b,b.b),A.fV(s.c,b.c),A.fV(s.d,b.d))
return null},
E(a,b){return this.fo(a,b,!1)},
aM(a,b){var s=this
return new A.dv(s.a.aM(0,b),s.b.aM(0,b),s.c.aM(0,b),s.d.aM(0,b))},
cd(a,b){if(a instanceof A.dv)return A.akT(a,this,b)
return this.Dr(a,b)},
ce(a,b){if(a instanceof A.dv)return A.akT(this,a,b)
return this.Ds(a,b)},
ut(a,b,c,d,e){var s,r=this
if(r.gpg()){s=r.a
switch(s.c.a){case 0:return
case 1:switch(d.a){case 1:A.aoz(a,b,s)
break
case 0:if(c!=null&&!c.l(0,B.aG)){A.aoA(a,b,s,c)
return}A.aoB(a,b,s)
break}return}}A.atF(a,b,r.c,r.d,r.b,r.a)},
hU(a,b,c){return this.ut(a,b,null,B.H,c)},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.Y(b)!==A.C(s))return!1
return b instanceof A.dv&&b.a.l(0,s.a)&&b.b.l(0,s.b)&&b.c.l(0,s.c)&&b.d.l(0,s.d)},
gu(a){var s=this
return A.T(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a){var s,r,q=this
if(q.gpg())return"Border.all("+q.a.k(0)+")"
s=A.a([],t.s)
r=q.a
if(!r.l(0,B.G))s.push("top: "+r.k(0))
r=q.b
if(!r.l(0,B.G))s.push("right: "+r.k(0))
r=q.c
if(!r.l(0,B.G))s.push("bottom: "+r.k(0))
r=q.d
if(!r.l(0,B.G))s.push("left: "+r.k(0))
return"Border("+B.c.b6(s,", ")+")"}}
A.dX.prototype={
gm8(){var s,r=this
if(r.gpg()){s=r.a.geF()
return new A.as(s,s,s,s)}return new A.as(r.b.geF(),r.a.geF(),r.c.geF(),r.d.geF())},
gpg(){var s,r,q,p=this,o=p.a,n=o.a,m=p.b
if(!m.a.l(0,n)||!p.c.a.l(0,n)||!p.d.a.l(0,n))return!1
s=o.b
if(m.b!==s||p.c.b!==s||p.d.b!==s)return!1
r=o.c
if(m.c!==r||p.c.c!==r||p.d.c!==r)return!1
q=o.d
if(!(m.d===q&&p.d.d===q&&p.c.d===q))return!1
return!0},
fo(a,b,c){var s,r,q,p=this,o=null
if(b instanceof A.dX){s=p.a
r=b.a
if(A.iZ(s,r)&&A.iZ(p.b,b.b)&&A.iZ(p.c,b.c)&&A.iZ(p.d,b.d))return new A.dX(A.fV(s,r),A.fV(p.b,b.b),A.fV(p.c,b.c),A.fV(p.d,b.d))
return o}if(b instanceof A.dv){s=b.a
r=p.a
if(!A.iZ(s,r)||!A.iZ(b.c,p.d))return o
q=p.b
if(!q.l(0,B.G)||!p.c.l(0,B.G)){if(!b.d.l(0,B.G)||!b.b.l(0,B.G))return o
return new A.dX(A.fV(s,r),q,p.c,A.fV(b.c,p.d))}return new A.dv(A.fV(s,r),b.b,A.fV(b.c,p.d),b.d)}return o},
E(a,b){return this.fo(a,b,!1)},
aM(a,b){var s=this
return new A.dX(s.a.aM(0,b),s.b.aM(0,b),s.c.aM(0,b),s.d.aM(0,b))},
cd(a,b){if(a instanceof A.dX)return A.akS(a,this,b)
return this.Dr(a,b)},
ce(a,b){if(a instanceof A.dX)return A.akS(this,a,b)
return this.Ds(a,b)},
ut(a,b,c,d,e){var s,r,q,p=this
if(p.gpg()){s=p.a
switch(s.c.a){case 0:return
case 1:switch(d.a){case 1:A.aoz(a,b,s)
break
case 0:if(c!=null&&!c.l(0,B.aG)){A.aoA(a,b,s,c)
return}A.aoB(a,b,s)
break}return}}switch(e.a){case 0:r=p.c
q=p.b
break
case 1:r=p.b
q=p.c
break
default:r=null
q=null}A.atF(a,b,p.d,r,q,p.a)},
hU(a,b,c){return this.ut(a,b,null,B.H,c)},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.Y(b)!==A.C(s))return!1
return b instanceof A.dX&&b.a.l(0,s.a)&&b.b.l(0,s.b)&&b.c.l(0,s.c)&&b.d.l(0,s.d)},
gu(a){var s=this
return A.T(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a){var s=this,r=A.a([],t.s),q=s.a
if(!q.l(0,B.G))r.push("top: "+q.k(0))
q=s.b
if(!q.l(0,B.G))r.push("start: "+q.k(0))
q=s.c
if(!q.l(0,B.G))r.push("end: "+q.k(0))
q=s.d
if(!q.l(0,B.G))r.push("bottom: "+q.k(0))
return"BorderDirectional("+B.c.b6(r,", ")+")"}}
A.bx.prototype={
gdB(a){var s=this.c
return s==null?null:s.gm8()},
uY(a,b){var s,r,q
switch(this.w.a){case 1:s=A.pV(a.gaN(),a.gfL()/2)
r=$.at().cq()
r.yu(s)
return r
case 0:r=this.d
if(r!=null){q=$.at().cq()
q.eP(r.Y(b).dG(a))
return q}r=$.at().cq()
r.o3(a)
return r}},
aM(a,b){var s=this,r=null,q=A.w(r,s.a,b),p=A.aoC(r,s.c,b),o=A.hK(r,s.d,b),n=A.aoF(r,s.e,b),m=s.f
m=m==null?r:m.aM(0,b)
return new A.bx(q,s.b,p,o,n,m,s.w)},
gA8(){return this.e!=null},
cd(a,b){if(a==null)return this.aM(0,b)
if(a instanceof A.bx)return A.aoD(a,this,b)
return this.CU(a,b)},
ce(a,b){if(a==null)return this.aM(0,1-b)
if(a instanceof A.bx)return A.aoD(this,a,b)
return this.CV(a,b)},
l(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.Y(b)!==A.C(r))return!1
if(b instanceof A.bx)if(J.f(b.a,r.a))if(J.f(b.b,r.b))if(J.f(b.c,r.c))if(J.f(b.d,r.d))if(A.cX(b.e,r.e))if(J.f(b.f,r.f))s=b.w===r.w
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gu(a){var s=this,r=s.e
r=r==null?null:A.dj(r)
return A.T(s.a,s.b,s.c,s.d,r,s.f,null,s.w,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
Kt(a,b,c){var s
switch(this.w.a){case 0:s=this.d
if(s!=null)return s.Y(c).dG(new A.E(0,0,0+a.a,0+a.b)).D(0,b)
return!0
case 1:return b.ad(0,a.ja(B.k)).gd9()<=Math.min(a.a,a.b)/2}},
t7(a){return new A.acQ(this,a)}}
A.acQ.prototype={
Gj(a,b,c,d){var s=this.b
switch(s.w.a){case 1:a.is(b.gaN(),b.gfL()/2,c)
break
case 0:s=s.d
if(s==null||s.l(0,B.aG))a.cm(b,c)
else a.da(s.Y(d).dG(b),c)
break}},
Yp(a,b,c){var s,r,q,p,o,n,m=this.b.e
if(m==null)return
for(s=m.length,r=0;r<m.length;m.length===s||(0,A.Q)(m),++r){q=m[r]
p=$.at().bn()
p.san(0,q.a)
o=q.e
n=q.c
p.sa5t(new A.vC(o,n>0?n*0.57735+0.5:0))
o=b.dm(q.b)
n=q.d
this.Gj(a,new A.E(o.a-n,o.b-n,o.c+n,o.d+n),p,c)}},
Yl(a,b,c){var s,r,q=this,p=q.b,o=p.b
if(o==null)return
if(q.e==null)q.e=new A.ED(o,q.a)
switch(p.w.a){case 1:s=A.pV(b.gaN(),b.gfL()/2)
r=$.at().cq()
r.yu(s)
break
case 0:p=p.d
if(p!=null){r=$.at().cq()
r.eP(p.Y(c.d).dG(b))}else r=null
break
default:r=null}q.e.us(a,b,r,c)},
m(){var s,r=this.e
if(r!=null){s=r.c
if(s!=null)s.I(0,new A.dz(r.gFx(),null,null))
s=r.d
if(s!=null)s.a.m()
r.d=null}this.Ob()},
pC(a,b,c){var s,r,q,p,o=this,n=c.e,m=b.a,l=b.b,k=new A.E(m,l,m+n.a,l+n.b),j=c.d
o.Yp(a,k,j)
n=o.b
m=n.a
l=m==null
if(!l||n.f!=null){if(o.c!=null)s=n.f!=null&&!J.f(o.d,k)
else s=!0
if(s){r=$.at().bn()
if(!l)r.san(0,m)
m=n.f
if(m!=null){l=m.d.Y(j).MF(k)
s=m.e.Y(j).MF(k)
q=m.a
p=m.xe()
m=m.f
r.sCy(A.alr(l,s,q,p,m,null))
o.d=k}o.c=r}m=o.c
m.toString
o.Gj(a,k,m,j)}o.Yl(a,k,c)
m=n.c
if(m!=null){l=n.d
l=l==null?null:l.Y(j)
m.ut(a,k,l,n.w,j)}},
k(a){return"BoxPainter for "+this.b.k(0)}}
A.m6.prototype={
G(){return"BoxFit."+this.b}}
A.FM.prototype={}
A.hM.prototype={
aM(a,b){var s=this
return new A.hM(s.d*b,s.e,s.a,s.b.a0(0,b),s.c*b)},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.Y(b)!==A.C(s))return!1
return b instanceof A.hM&&b.a.l(0,s.a)&&b.b.l(0,s.b)&&b.c===s.c&&b.d===s.d&&b.e===s.e},
gu(a){var s=this
return A.T(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a){var s=this
return"BoxShadow("+s.a.k(0)+", "+s.b.k(0)+", "+A.hE(s.c)+", "+A.hE(s.d)+", "+s.e.k(0)+")"}}
A.dw.prototype={
aM(a,b){return new A.dw(this.b,this.a.aM(0,b))},
cd(a,b){var s,r
if(a instanceof A.dw){s=A.aE(a.a,this.a,b)
r=A.U(a.b,this.b,b)
r.toString
return new A.dw(A.K(r,0,1),s)}return this.lm(a,b)},
ce(a,b){var s,r
if(a instanceof A.dw){s=A.aE(this.a,a.a,b)
r=A.U(this.b,a.b,b)
r.toString
return new A.dw(A.K(r,0,1),s)}return this.ln(a,b)},
fI(a,b){var s=$.at().cq()
s.yu(this.DT(a))
return s},
hU(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=r.b*r.d
if(this.b===0)a.is(b.gaN(),(b.gfL()+s)/2,r.i1())
else a.tt(this.DT(b).df(s/2),r.i1())
break}},
DT(a){var s,r,q,p,o,n,m,l=this.b
if(l===0||a.c-a.a===a.d-a.b)return A.pV(a.gaN(),a.gfL()/2)
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
l(a,b){if(b==null)return!1
if(J.Y(b)!==A.C(this))return!1
return b instanceof A.dw&&b.a.l(0,this.a)&&b.b===this.b},
gu(a){return A.T(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a){var s=this.b
if(s!==0)return"CircleBorder("+this.a.k(0)+", eccentricity: "+A.h(s)+")"
return"CircleBorder("+this.a.k(0)+")"}}
A.Wv.prototype={
w5(a,b,c,d){var s=this
s.gbJ(s).cC(0)
switch(b.a){case 0:break
case 1:a.$1(!1)
break
case 2:a.$1(!0)
break
case 3:a.$1(!0)
s.gbJ(s).Cf(c,$.at().bn())
break}d.$0()
if(b===B.hA)s.gbJ(s).cz(0)
s.gbJ(s).cz(0)},
a1l(a,b,c,d){this.w5(new A.Ww(this,a),b,c,d)},
a1m(a,b,c,d){this.w5(new A.Wx(this,a),b,c,d)},
a1o(a,b,c,d){this.w5(new A.Wy(this,a),b,c,d)}}
A.Ww.prototype={
$1(a){var s=this.a
return s.gbJ(s).IS(0,this.b,a)},
$S:24}
A.Wx.prototype={
$1(a){var s=this.a
return s.gbJ(s).IT(this.b,a)},
$S:24}
A.Wy.prototype={
$1(a){var s=this.a
return s.gbJ(s).a1n(this.b,a)},
$S:24}
A.kl.prototype={
h(a,b){return this.b.h(0,b)},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.Y(b)!==A.C(s))return!1
return s.Oc(0,b)&&A.o(s).i("kl<kl.T>").b(b)&&A.aka(b.b,s.b)},
gu(a){return A.T(A.C(this),this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a){return"ColorSwatch(primary value: "+this.Od(0)+")"}}
A.fY.prototype={
c4(){return"Decoration"},
gdB(a){return B.b2},
gA8(){return!1},
cd(a,b){return null},
ce(a,b){return null},
Kt(a,b,c){return!0},
uY(a,b){throw A.c(A.P("This Decoration subclass does not expect to be used for clipping."))}}
A.Ck.prototype={
m(){}}
A.NR.prototype={}
A.mK.prototype={
G(){return"ImageRepeat."+this.b}}
A.j1.prototype={
l(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.Y(b)!==A.C(r))return!1
if(b instanceof A.j1)if(b.a.l(0,r.a))if(b.d===r.d)if(B.M.l(0,B.M))s=!0
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gu(a){return A.T(this.a,null,this.d,B.M,null,B.bv,!1,1,1,B.da,!1,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a){var s=A.a([this.a.k(0)],t.s),r=!(this.d===B.mx&&!0)
if(r)s.push(this.d.k(0))
s.push(B.M.k(0))
s.push("scale 1")
s.push("opacity 1")
s.push(B.da.k(0))
return"DecorationImage("+B.c.b6(s,", ")+")"}}
A.ED.prototype={
us(a,b,c,d){var s,r,q,p,o=this,n=null,m=o.a,l=m.a.Y(d),k=l.a
if(k==null)k=l
s=o.c
r=s==null
if(r)q=n
else{q=s.a
if(q==null)q=s}if(k!==q){p=new A.dz(o.gFx(),n,n)
if(!r)s.I(0,p)
o.c=l
l.X(0,p)}if(o.d==null)return
k=c!=null
if(k){a.cC(0)
a.fW(0,c)}s=o.d
r=s.a
A.atG(B.M,a,n,n,s.c,B.da,m.d,!1,r,!1,!1,1,b,B.bv,s.b)
if(k)a.cz(0)},
VM(a,b){var s,r,q=this
if(J.f(q.d,a))return
s=q.d
if(s!=null)if(a.a.KQ(s.a)){r=s.b
s=r===r&&a.c==s.c}else s=!1
else s=!1
if(s){a.a.m()
return}s=q.d
if(s!=null)s.a.m()
q.d=a
if(!b)q.b.$0()},
k(a){return"DecorationImagePainter(stream: "+A.h(this.c)+", image: "+A.h(this.d)+") for "+this.a.k(0)}}
A.dg.prototype={
gco(){var s=this
return s.gdr(s)+s.gds(s)+s.gen(s)+s.gem()},
a0G(a){var s=this
switch(a.a){case 0:return s.gco()
case 1:return s.gbd(s)+s.gbh(s)}},
E(a,b){var s=this
return new A.lx(s.gdr(s)+b.gdr(b),s.gds(s)+b.gds(b),s.gen(s)+b.gen(b),s.gem()+b.gem(),s.gbd(s)+b.gbd(b),s.gbh(s)+b.gbh(b))},
jb(a,b,c){var s=this
return new A.lx(A.K(s.gdr(s),b.a,c.a),A.K(s.gds(s),b.c,c.b),A.K(s.gen(s),0,c.c),A.K(s.gem(),0,c.d),A.K(s.gbd(s),b.b,c.e),A.K(s.gbh(s),b.d,c.f))},
k(a){var s=this
if(s.gen(s)===0&&s.gem()===0){if(s.gdr(s)===0&&s.gds(s)===0&&s.gbd(s)===0&&s.gbh(s)===0)return"EdgeInsets.zero"
if(s.gdr(s)===s.gds(s)&&s.gds(s)===s.gbd(s)&&s.gbd(s)===s.gbh(s))return"EdgeInsets.all("+B.d.N(s.gdr(s),1)+")"
return"EdgeInsets("+B.d.N(s.gdr(s),1)+", "+B.d.N(s.gbd(s),1)+", "+B.d.N(s.gds(s),1)+", "+B.d.N(s.gbh(s),1)+")"}if(s.gdr(s)===0&&s.gds(s)===0)return"EdgeInsetsDirectional("+B.d.N(s.gen(s),1)+", "+B.d.N(s.gbd(s),1)+", "+B.d.N(s.gem(),1)+", "+B.d.N(s.gbh(s),1)+")"
return"EdgeInsets("+B.d.N(s.gdr(s),1)+", "+B.d.N(s.gbd(s),1)+", "+B.d.N(s.gds(s),1)+", "+B.d.N(s.gbh(s),1)+") + EdgeInsetsDirectional("+B.d.N(s.gen(s),1)+", 0.0, "+B.d.N(s.gem(),1)+", 0.0)"},
l(a,b){var s=this
if(b==null)return!1
return b instanceof A.dg&&b.gdr(b)===s.gdr(s)&&b.gds(b)===s.gds(s)&&b.gen(b)===s.gen(s)&&b.gem()===s.gem()&&b.gbd(b)===s.gbd(s)&&b.gbh(b)===s.gbh(s)},
gu(a){var s=this
return A.T(s.gdr(s),s.gds(s),s.gen(s),s.gem(),s.gbd(s),s.gbh(s),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.bq.prototype={
gdr(a){return this.a},
gbd(a){return this.b},
gds(a){return this.c},
gbh(a){return this.d},
gen(a){return 0},
gem(){return 0},
z6(a){var s=this
return new A.E(a.a+s.a,a.b+s.b,a.c-s.c,a.d-s.d)},
E(a,b){if(b instanceof A.bq)return this.V(0,b)
return this.CY(0,b)},
jb(a,b,c){var s=this
return new A.bq(A.K(s.a,b.a,c.a),A.K(s.b,b.b,c.e),A.K(s.c,b.c,c.b),A.K(s.d,b.d,c.f))},
ad(a,b){var s=this
return new A.bq(s.a-b.a,s.b-b.b,s.c-b.c,s.d-b.d)},
V(a,b){var s=this
return new A.bq(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
a0(a,b){var s=this
return new A.bq(s.a*b,s.b*b,s.c*b,s.d*b)},
Y(a){return this},
op(a,b,c,d){var s=this,r=b==null?s.a:b,q=d==null?s.b:d,p=c==null?s.c:c
return new A.bq(r,q,p,a==null?s.d:a)},
yT(a){return this.op(a,null,null,null)}}
A.as.prototype={
gen(a){return this.a},
gbd(a){return this.b},
gem(){return this.c},
gbh(a){return this.d},
gdr(a){return 0},
gds(a){return 0},
E(a,b){if(b instanceof A.as)return this.V(0,b)
return this.CY(0,b)},
ad(a,b){var s=this
return new A.as(s.a-b.a,s.b-b.b,s.c-b.c,s.d-b.d)},
V(a,b){var s=this
return new A.as(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
a0(a,b){var s=this
return new A.as(s.a*b,s.b*b,s.c*b,s.d*b)},
Y(a){var s=this
switch(a.a){case 0:return new A.bq(s.c,s.b,s.a,s.d)
case 1:return new A.bq(s.a,s.b,s.c,s.d)}}}
A.lx.prototype={
a0(a,b){var s=this
return new A.lx(s.a*b,s.b*b,s.c*b,s.d*b,s.e*b,s.f*b)},
Y(a){var s=this
switch(a.a){case 0:return new A.bq(s.d+s.a,s.e,s.c+s.b,s.f)
case 1:return new A.bq(s.c+s.a,s.e,s.d+s.b,s.f)}},
gdr(a){return this.a},
gds(a){return this.b},
gen(a){return this.c},
gem(){return this.d},
gbd(a){return this.e},
gbh(a){return this.f}}
A.ad2.prototype={}
A.ajh.prototype={
$1(a){return a<=this.a},
$S:231}
A.aiN.prototype={
$1(a){var s=this,r=A.w(A.asA(s.a,s.b,a),A.asA(s.c,s.d,a),s.e)
r.toString
return r},
$S:232}
A.a0O.prototype={
xe(){var s,r,q,p=this.b
if(p!=null)return p
p=this.a.length
s=1/(p-1)
if(p>4294967295)A.L(A.bw(p,0,4294967295,"length",null))
r=J.mP(new Array(p),t.i)
for(q=0;q<p;++q)r[q]=q*s
return r}}
A.jg.prototype={
aM(a,b){var s=this,r=s.a,q=A.al(r).i("au<1,F>")
return new A.jg(s.d,s.e,s.f,A.aA(new A.au(r,new A.a2Q(b),q),!0,q.i("bh.E")),s.b,null)},
cd(a,b){var s=A.apH(a,this,b)
return s},
ce(a,b){var s=A.apH(this,a,b)
return s},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.Y(b)!==A.C(s))return!1
return b instanceof A.jg&&b.d.l(0,s.d)&&b.e.l(0,s.e)&&b.f===s.f&&A.cX(b.a,s.a)&&A.cX(b.b,s.b)},
gu(a){var s=this,r=A.dj(s.a),q=s.b
q=q==null?null:A.dj(q)
return A.T(s.d,s.e,s.f,s.c,r,q,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a){var s=this,r=A.a(["begin: "+s.d.k(0),"end: "+s.e.k(0),"colors: "+A.h(s.a)],t.s),q=s.b
if(q!=null)r.push("stops: "+A.h(q))
r.push("tileMode: "+s.f.k(0))
return"LinearGradient("+B.c.b6(r,", ")+")"}}
A.a2Q.prototype={
$1(a){var s=A.w(null,a,this.a)
s.toString
return s},
$S:55}
A.a1I.prototype={
a_(a){var s,r,q,p
for(s=this.b,r=s.gaW(s),r=new A.e0(J.ax(r.a),r.b),q=A.o(r).z[1];r.t();){p=r.a;(p==null?q.a(p):p).m()}s.a_(0)
for(s=this.a,r=s.gaW(s),r=new A.e0(J.ax(r.a),r.b),q=A.o(r).z[1];r.t();){p=r.a
if(p==null)p=q.a(p)
p.a.I(0,p.b)}s.a_(0)
this.f=0},
md(a){var s,r,q,p=this,o=p.c.v(0,a)
if(o!=null){s=o.a
r=o.d
r===$&&A.b()
if(s.w)A.L(A.a6(u.V))
B.c.v(s.x,r)
o.Dv()}q=p.a.v(0,a)
if(q!=null){q.a.I(0,q.b)
return!0}o=p.b.v(0,a)
if(o!=null){s=p.f
r=o.b
r.toString
p.f=s-r
o.m()
return!0}return!1},
HI(a,b,c){var s,r=this,q=b.b
if(q!=null&&q<=104857600&&!0){s=r.f
q.toString
r.f=s+q
r.b.j(0,a,b)
r.ST(c)}else b.m()},
y5(a,b,c){var s=this.c.bI(0,a,new A.a1L(this,b,a))
if(s.b==null)s.b=c},
LM(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g={}
g.a=g.b=null
q=i.a
p=q.h(0,b)
o=p==null?h:p.a
g.c=o
if(o!=null)return o
p=i.b
n=p.v(0,b)
if(n!=null){g=n.a
i.y5(b,g,n.b)
p.j(0,b,n)
return g}m=i.c.h(0,b)
if(m!=null){g=m.a
i.HI(b,new A.yF(g,m.b,g.mD()),h)
return g}try{o=g.c=c.$0()
i.y5(b,o,h)
p=o}catch(l){s=A.af(l)
r=A.aw(l)
d.$2(s,r)
return h}g.d=!1
k=A.b8("pendingImage")
j=new A.dz(new A.a1M(g,i,b,!0,k),h,h)
k.b=new A.Q_(p,j)
q.j(0,b,k.aF())
g.c.X(0,j)
return g.c},
R(a,b){return this.a.h(0,b)!=null||this.b.h(0,b)!=null},
ST(a){var s,r,q,p,o,n=this,m=n.b,l=A.o(m).i("bb<1>")
while(!0){if(!(n.f>104857600||m.a>1000))break
s=new A.bb(m,l)
r=s.ga5(s)
if(!r.t())A.L(A.bW())
q=r.gH(r)
p=m.h(0,q)
s=n.f
o=p.b
o.toString
n.f=s-o
p.m()
m.v(0,q)}}}
A.a1L.prototype={
$0(){return A.aCW(this.b,new A.a1K(this.a,this.c))},
$S:233}
A.a1K.prototype={
$0(){this.a.c.v(0,this.b)},
$S:0}
A.a1M.prototype={
$2(a,b){var s,r,q,p,o,n=this
if(a!=null){s=a.a
r=s.gbV(s)*s.gbq(s)*4
s.m()}else r=null
s=n.a
q=s.c
p=new A.yF(q,r,q.mD())
q=n.b
o=n.c
q.y5(o,s.c,r)
if(n.d)q.HI(o,p,s.a)
else p.m()
q.a.v(0,o)
if(!s.d){q=n.e.aF()
q.a.I(0,q.b)}s.d=!0},
$S:234}
A.Nf.prototype={
m(){$.bJ.cy$.push(new A.acU(this))}}
A.acU.prototype={
$1(a){var s=this.a,r=s.c
if(r!=null)r.m()
s.c=null},
$S:2}
A.yF.prototype={}
A.rl.prototype={
S0(a,b,c){var s=new A.af8(this,b)
this.d=s
if(a.w)A.L(A.a6(u.V))
a.x.push(s)},
k(a){return"<optimized out>#"+A.bS(this)}}
A.af8.prototype={
$0(){var s,r,q
this.b.$0()
s=this.a
r=s.a
q=s.d
q===$&&A.b()
if(r.w)A.L(A.a6(u.V))
B.c.v(r.x,q)
s.Dv()},
$S:0}
A.Q_.prototype={}
A.pd.prototype={
l(a,b){var s=this
if(b==null)return!1
if(J.Y(b)!==A.C(s))return!1
return b instanceof A.pd&&b.a==s.a&&b.b==s.b&&J.f(b.c,s.c)&&b.d==s.d&&J.f(b.e,s.e)&&b.f==s.f},
gu(a){var s=this
return A.T(s.a,s.b,s.c,s.e,s.f,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a){var s,r=this,q=""+"ImageConfiguration(",p=r.a
if(p!=null){q+="bundle: "+p.k(0)
s=!0}else s=!1
p=r.b
if(p!=null){if(s)q+=", "
p=q+("devicePixelRatio: "+B.d.N(p,1))
q=p
s=!0}p=r.c
if(p!=null){if(s)q+=", "
p=q+("locale: "+p.k(0))
q=p
s=!0}p=r.d
if(p!=null){if(s)q+=", "
p=q+("textDirection: "+p.k(0))
q=p
s=!0}p=r.e
if(p!=null){if(s)q+=", "
p=q+("size: "+p.k(0))
q=p
s=!0}p=r.f
if(p!=null){if(s)q+=", "
p=q+("platform: "+p.b)
q=p}q+=")"
return q.charCodeAt(0)==0?q:q}}
A.dZ.prototype={
Y(a){var s=new A.a1Y()
this.Tr(a,new A.a1W(this,a,s),new A.a1X(this,a,s))
return s},
Tr(a,b,c){var s,r,q,p,o,n={}
n.a=null
n.b=!1
s=new A.a1T(n,c)
r=null
try{r=this.uh(a)}catch(o){q=A.af(o)
p=A.aw(o)
s.$2(q,p)
return}r.aE(new A.a1S(n,this,b,s),t.H).fV(s)},
pM(a,b,c,d){var s,r
if(b.a!=null){s=$.f_.h1$
s===$&&A.b()
s.LM(0,c,new A.a1U(b),d)
return}s=$.f_.h1$
s===$&&A.b()
r=s.LM(0,c,new A.a1V(this,c),d)
if(r!=null)b.Co(r)},
pj(a,b,c){throw A.c(A.P("Implement loadBuffer for faster image loading"))},
pk(a,b){return this.pj(0,a,$.f_.ga4K())},
k(a){return"ImageConfiguration()"}}
A.a1W.prototype={
$2(a,b){this.a.pM(this.b,this.c,a,b)},
$S(){return A.o(this.a).i("~(dZ.T,~(A,bC?))")}}
A.a1X.prototype={
$3(a,b,c){return this.MP(a,b,c)},
MP(a,b,c){var s=0,r=A.a2(t.H),q=this,p
var $async$$3=A.Z(function(d,e){if(d===1)return A.a_(e,r)
while(true)switch(s){case 0:s=2
return A.a4(null,$async$$3)
case 2:p=q.c
if(p.a==null)p.Co(new A.adz(A.a([],t.XZ),A.a([],t.b)))
p=p.a
p.toString
p.l1(A.bs("while resolving an image"),b,null,!0,c)
return A.a0(null,r)}})
return A.a1($async$$3,r)},
$S(){return A.o(this.a).i("ah<~>(dZ.T?,A,bC?)")}}
A.a1T.prototype={
MO(a,b){var s=0,r=A.a2(t.H),q,p=this,o
var $async$$2=A.Z(function(c,d){if(c===1)return A.a_(d,r)
while(true)switch(s){case 0:o=p.a
if(o.b){s=1
break}p.b.$3(o.a,a,b)
o.b=!0
case 1:return A.a0(q,r)}})
return A.a1($async$$2,r)},
$2(a,b){return this.MO(a,b)},
$S:235}
A.a1S.prototype={
$1(a){var s,r,q,p=this
p.a.a=a
try{p.c.$2(a,p.d)}catch(q){s=A.af(q)
r=A.aw(q)
p.d.$2(s,r)}},
$S(){return A.o(this.b).i("ar(dZ.T)")}}
A.a1U.prototype={
$0(){var s=this.a.a
s.toString
return s},
$S:91}
A.a1V.prototype={
$0(){return this.a.pk(this.b,$.f_.ga4N())},
$S:91}
A.hJ.prototype={
l(a,b){var s=this
if(b==null)return!1
if(J.Y(b)!==A.C(s))return!1
return b instanceof A.hJ&&b.a===s.a&&b.b===s.b&&b.c===s.c},
gu(a){return A.T(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a){return"AssetBundleImageKey(bundle: "+this.a.k(0)+', name: "'+this.b+'", scale: '+A.h(this.c)+")"}}
A.BY.prototype={
pk(a,b){return A.apU(this.lE(a,b,null),a.b,null,a.c)},
pj(a,b,c){return A.apU(this.lE(b,null,c),b.b,null,b.c)},
lE(a,b,c){return this.Xi(a,b,c)},
Xi(a,b,c){var s=0,r=A.a2(t.hP),q,p=2,o,n,m,l,k,j,i
var $async$lE=A.Z(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:s=b!=null?3:4
break
case 3:n=null
p=6
s=9
return A.a4(a.a.u8(a.b),$async$lE)
case 9:n=e
p=2
s=8
break
case 6:p=5
j=o
if(A.af(j) instanceof A.ks){k=$.f_.h1$
k===$&&A.b()
k.md(a)
throw j}else throw j
s=8
break
case 5:s=2
break
case 8:if(n==null){k=$.f_.h1$
k===$&&A.b()
k.md(a)
throw A.c(A.a6("Unable to read data"))}q=b.$1(n)
s=1
break
case 4:m=null
p=11
s=14
return A.a4(a.a.d1(0,a.b),$async$lE)
case 14:m=e
p=2
s=13
break
case 11:p=10
i=o
if(A.af(i) instanceof A.ks){k=$.f_.h1$
k===$&&A.b()
k.md(a)
throw i}else throw i
s=13
break
case 10:s=2
break
case 13:if(m==null){k=$.f_.h1$
k===$&&A.b()
k.md(a)
throw A.c(A.a6("Unable to read data"))}c.toString
q=c.$1(A.cP(m.buffer,0,null))
s=1
break
case 1:return A.a0(q,r)
case 2:return A.a_(o,r)}})
return A.a1($async$lE,r)}}
A.adz.prototype={}
A.fU.prototype={
gmE(){return this.a},
uh(a){var s,r={},q=a.a
if(q==null)q=$.Uw()
r.a=r.b=null
q.a5q("AssetManifest.da3e370d.json",A.aGz(),t.wd).aE(new A.UX(r,this,a,q),t.H).fV(new A.UY(r))
s=r.a
if(s!=null)return s
s=new A.a7($.aa,t.Lv)
r.b=new A.aI(s,t.h8)
return s},
T2(a,b,c){var s,r,q,p=b.b
if(p==null||c==null||J.fS(c))return a
s=A.amb(t.i,t.N)
for(r=J.ax(c);r.t();){q=r.gH(r)
s.j(0,this.Gs(q),q)}p.toString
return this.Uj(s,p)},
Uj(a,b){var s,r,q
if(a.nv(b)){s=a.h(0,b)
s.toString
return s}r=a.a5c(b)
q=a.a3n(b)
if(r==null)return a.h(0,q)
if(q==null)return a.h(0,r)
if(b<2||b>(r+q)/2)return a.h(0,q)
else return a.h(0,r)},
Gs(a){var s,r,q,p
if(a===this.a)return 1
s=A.ll(a,0,null)
r=s.gjI().length>1?s.gjI()[s.gjI().length-2]:""
q=$.au1().oZ(r)
if(q!=null&&q.b.length-1>0){p=q.b[1]
p.toString
return A.anh(p)}return 1},
l(a,b){if(b==null)return!1
if(J.Y(b)!==A.C(this))return!1
return b instanceof A.fU&&b.gmE()===this.gmE()&&!0},
gu(a){return A.T(this.gmE(),this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a){return"AssetImage(bundle: "+A.h(this.b)+', name: "'+this.gmE()+'")'}}
A.UX.prototype={
$1(a){var s,r=this,q=r.b,p=q.gmE(),o=a==null?null:J.aS(a,q.gmE())
o=q.T2(p,r.c,o)
o.toString
s=new A.hJ(r.d,o,q.Gs(o))
q=r.a
p=q.b
if(p!=null)p.bK(0,s)
else q.a=new A.bt(s,t.WT)},
$S:237}
A.UY.prototype={
$2(a,b){this.a.b.cI(a,b)},
$S:30}
A.eU.prototype={
cW(a){return new A.eU(this.a.cW(0),this.b,this.c)},
k(a){var s=this.c
s=s!=null?s+" ":""
return s+this.a.k(0)+" @ "+A.hE(this.b)+"x"},
gu(a){return A.T(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
l(a,b){var s=this
if(b==null)return!1
if(J.Y(b)!==A.C(s))return!1
return b instanceof A.eU&&b.a===s.a&&b.b===s.b&&b.c==s.c}}
A.dz.prototype={
gu(a){return A.T(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
l(a,b){var s=this
if(b==null)return!1
if(J.Y(b)!==A.C(s))return!1
return b instanceof A.dz&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&J.f(b.c,s.c)},
a5T(a,b){return this.a.$2(a,b)}}
A.a1Y.prototype={
Co(a){var s,r=this
r.a=a
s=r.b
if(s!=null){r.b=null
a.f=!0
B.c.Z(s,a.go2(a))
r.a.f=!1}},
X(a,b){var s=this.a
if(s!=null)return s.X(0,b)
s=this.b;(s==null?this.b=A.a([],t.XZ):s).push(b)},
I(a,b){var s,r=this.a
if(r!=null)return r.I(0,b)
for(s=0;r=this.b,s<r.length;++s)if(J.f(r[s],b)){r=this.b
r.toString
B.c.ec(r,s)
break}}}
A.a1Z.prototype={
m(){var s=this.a;--s.r
s.r_()
this.a=null}}
A.kA.prototype={
X(a,b){var s,r,q,p,o,n,m,l=this
if(l.w)A.L(A.a6(u.V))
l.e=!0
l.a.push(b)
o=l.b
if(o!=null)try{o=o.cW(0)
n=l.f
b.a.$2(o,!n)}catch(m){s=A.af(m)
r=A.aw(m)
l.M2(A.bs("by a synchronously-called image listener"),s,r)}o=l.c
if(o!=null&&b.c!=null)try{n=b.c
n.toString
n.$2(o.a,o.b)}catch(s){q=A.af(s)
p=A.aw(s)
if(!J.f(q,l.c.a))A.ed(new A.bQ(q,p,"image resource service",A.bs("by a synchronously-called image error listener"),null,!1))}},
mD(){if(this.w)A.L(A.a6(u.V));++this.r
return new A.a1Z(this)},
I(a,b){var s,r,q,p,o,n=this
if(n.w)A.L(A.a6(u.V))
for(s=n.a,r=0;r<s.length;++r)if(J.f(s[r],b)){B.c.ec(s,r)
break}if(s.length===0){s=n.x
q=A.a(s.slice(0),A.al(s))
for(p=q.length,o=0;o<q.length;q.length===p||(0,A.Q)(q),++o)q[o].$0()
B.c.a_(s)
n.r_()}},
r_(){var s,r=this
if(!r.e||r.w||r.a.length!==0||r.r!==0)return
s=r.b
if(s!=null)s.a.m()
r.b=null
r.w=!0},
Cs(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.w)A.L(A.a6(u.V))
p=i.b
if(p!=null)p.a.m()
i.b=a
p=i.a
if(p.length===0)return
o=A.aA(p,!0,t.dW)
for(p=o.length,n=a.a,m=a.b,l=a.c,k=0;k<p;++k){s=o[k]
try{s.a5T(new A.eU(n.cW(0),m,l),!1)}catch(j){r=A.af(j)
q=A.aw(j)
i.M2(A.bs("by an image listener"),r,q)}}},
l1(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i="image resource service"
this.c=new A.bQ(b,e,i,a,c,d)
o=this.a
n=t.kE
m=A.aA(new A.dp(new A.au(o,new A.a2_(),A.al(o).i("au<1,~(A,bC?)?>")),n),!0,n.i("p.E"))
s=!1
for(o=m.length,l=0;l<o;++l){r=m[l]
try{r.$2(b,e)
s=!0}catch(k){q=A.af(k)
p=A.aw(k)
if(!J.f(q,b)){n=A.bs("when reporting an error to an image listener")
j=$.fR()
if(j!=null)j.$1(new A.bQ(q,p,i,n,null,!1))}}}if(!s){o=this.c
o.toString
A.ed(o)}},
M2(a,b,c){return this.l1(a,b,null,!1,c)},
a6X(a){var s,r,q,p
if(this.w)A.L(A.a6(u.V))
s=this.a
if(s.length!==0){r=t.r7
q=A.aA(new A.dp(new A.au(s,new A.a20(),A.al(s).i("au<1,~(eT)?>")),r),!0,r.i("p.E"))
for(s=q.length,p=0;p<s;++p)q[p].$1(a)}}}
A.a2_.prototype={
$1(a){return a.c},
$S:240}
A.a20.prototype={
$1(a){return a.b},
$S:241}
A.IU.prototype={
RP(a,b,c,d,e){this.d=c
b.dY(this.gVi(),new A.a3V(this,d),t.H)},
Vj(a){this.z=a
if(this.a.length!==0)this.lx()},
Va(a){var s,r,q,p=this
p.cx=!1
if(p.a.length===0)return
s=p.ay
if(s!=null){r=p.ax
r===$&&A.b()
r=a.a-r.a>=s.a}else r=!0
if(r){s=p.at
p.F0(new A.eU(s.gfw(s).cW(0),p.Q,p.d))
p.ax=a
s=p.at
p.ay=s.gJH(s)
s=p.at
s.gfw(s).m()
p.at=null
q=B.f.hm(p.ch,p.z.gmt())
if(p.z.guI()===-1||q<=p.z.guI())p.lx()
return}s.toString
r=p.ax
r===$&&A.b()
p.CW=A.c6(new A.aU(B.d.b0((s.a-(a.a-r.a))*$.asH)),new A.a3U(p))},
lx(){var s=0,r=A.a2(t.H),q,p=2,o,n=this,m,l,k,j,i
var $async$lx=A.Z(function(a,b){if(a===1){o=b
s=p}while(true)switch(s){case 0:j=n.at
if(j!=null)j.gfw(j).m()
n.at=null
p=4
s=7
return A.a4(n.z.q6(),$async$lx)
case 7:n.at=b
p=2
s=6
break
case 4:p=3
i=o
m=A.af(i)
l=A.aw(i)
n.l1(A.bs("resolving an image frame"),m,n.as,!0,l)
s=1
break
s=6
break
case 3:s=2
break
case 6:if(n.z.gmt()===1){if(n.a.length===0){s=1
break}j=n.at
n.F0(new A.eU(j.gfw(j).cW(0),n.Q,n.d))
j=n.at
j.gfw(j).m()
n.at=null
s=1
break}n.GU()
case 1:return A.a0(q,r)
case 2:return A.a_(o,r)}})
return A.a1($async$lx,r)},
GU(){if(this.cx)return
this.cx=!0
$.bJ.qf(this.gV9())},
F0(a){this.Cs(a);++this.ch},
X(a,b){var s,r=this
if(r.a.length===0){s=r.z
if(s!=null)s=r.b==null||s.gmt()>1
else s=!1}else s=!1
if(s)r.lx()
r.D3(0,b)},
I(a,b){var s,r=this
r.D4(0,b)
if(r.a.length===0){s=r.CW
if(s!=null)s.al(0)
r.CW=null}},
r_(){this.OD()
if(this.w)this.y=null}}
A.a3V.prototype={
$2(a,b){this.a.l1(A.bs("resolving an image codec"),a,this.b,!0,b)},
$S:30}
A.a3U.prototype={
$0(){this.a.GU()},
$S:0}
A.OV.prototype={}
A.OU.prototype={}
A.BR.prototype={}
A.kE.prototype={
l(a,b){var s
if(b==null)return!1
if(b instanceof A.kE)if(b.a===this.a)if(b.b==this.b)s=A.cX(b.f,this.f)
else s=!1
else s=!1
else s=!1
return s},
gu(a){return A.T(this.a,this.b,this.c,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a){return"InlineSpanSemanticsInformation{text: "+this.a+", semanticsLabel: "+A.h(this.b)+", recognizer: "+A.h(this.c)+"}"}}
A.fm.prototype={
Na(a){var s={}
s.a=null
this.aY(new A.a2a(s,a,new A.BR()))
return s.a},
Mo(a){var s,r=new A.bD("")
this.J1(r,!0,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
ae(a,b){var s={}
if(b<0)return null
s.a=null
this.aY(new A.a29(s,b,new A.BR()))
return s.a},
l(a,b){if(b==null)return!1
if(this===b)return!0
if(J.Y(b)!==A.C(this))return!1
return b instanceof A.fm&&J.f(b.a,this.a)},
gu(a){return J.q(this.a)}}
A.a2a.prototype={
$1(a){var s=a.Nb(this.b,this.c)
this.a.a=s
return s==null},
$S:54}
A.a29.prototype={
$1(a){var s=a.a1r(this.b,this.c)
this.a.a=s
return s==null},
$S:54}
A.dG.prototype={
aM(a,b){var s=this.a.aM(0,b)
return new A.dG(this.b.a0(0,b),s)},
cd(a,b){var s,r,q=this
if(a instanceof A.dG){s=A.aE(a.a,q.a,b)
r=A.hK(a.b,q.b,b)
r.toString
return new A.dG(r,s)}if(a instanceof A.dw){s=A.aE(a.a,q.a,b)
return new A.ei(q.b,1-b,a.b,s)}return q.lm(a,b)},
ce(a,b){var s,r,q=this
if(a instanceof A.dG){s=A.aE(q.a,a.a,b)
r=A.hK(q.b,a.b,b)
r.toString
return new A.dG(r,s)}if(a instanceof A.dw){s=A.aE(q.a,a.a,b)
return new A.ei(q.b,b,a.b,s)}return q.ln(a,b)},
fI(a,b){var s=$.at().cq()
s.eP(this.b.Y(b).dG(a))
return s},
hU(a,b,c){var s,r,q,p,o=this.a
switch(o.c.a){case 0:break
case 1:s=this.b
if(o.b===0)a.da(s.Y(c).dG(b),o.i1())
else{r=$.at().bn()
r.san(0,o.a)
q=s.Y(c).dG(b)
p=q.df(-o.geF())
a.ts(q.df(o.gCK()),p,r)}break}},
l(a,b){if(b==null)return!1
if(J.Y(b)!==A.C(this))return!1
return b instanceof A.dG&&b.a.l(0,this.a)&&b.b.l(0,this.b)},
gu(a){return A.T(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a){return"RoundedRectangleBorder("+this.a.k(0)+", "+this.b.k(0)+")"}}
A.ei.prototype={
aM(a,b){var s=this.a.aM(0,b)
return new A.ei(this.b.a0(0,b),b,this.d,s)},
cd(a,b){var s,r,q,p=this
if(a instanceof A.dG){s=A.aE(a.a,p.a,b)
r=A.hK(a.b,p.b,b)
r.toString
return new A.ei(r,p.c*b,p.d,s)}if(a instanceof A.dw){s=A.aE(a.a,p.a,b)
r=p.c
return new A.ei(p.b,r+(1-r)*(1-b),a.b,s)}if(a instanceof A.ei){s=A.aE(a.a,p.a,b)
r=A.hK(a.b,p.b,b)
r.toString
q=A.U(a.c,p.c,b)
q.toString
return new A.ei(r,q,p.d,s)}return p.lm(a,b)},
ce(a,b){var s,r,q,p=this
if(a instanceof A.dG){s=A.aE(p.a,a.a,b)
r=A.hK(p.b,a.b,b)
r.toString
return new A.ei(r,p.c*(1-b),p.d,s)}if(a instanceof A.dw){s=A.aE(p.a,a.a,b)
r=p.c
return new A.ei(p.b,r+(1-r)*b,a.b,s)}if(a instanceof A.ei){s=A.aE(p.a,a.a,b)
r=A.hK(p.b,a.b,b)
r.toString
q=A.U(p.c,a.c,b)
q.toString
return new A.ei(r,q,p.d,s)}return p.ln(a,b)},
GR(a){var s,r,q,p,o,n,m,l,k=this.c
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
DR(a,b){var s,r,q,p=this.b.Y(b),o=this.c
if(o===0)return p
s=this.d
if(s!==0){r=a.c-a.a
q=a.d-a.b
s=0.5+s/2
if(r<q){o=A.ov(p,A.Cf(new A.bv(r/2,s*q/2)),o)
o.toString
return o}else{o=A.ov(p,A.Cf(new A.bv(s*r/2,q/2)),o)
o.toString
return o}}return A.ov(p,A.dK(a.gfL()/2),o)},
fI(a,b){var s=$.at().cq(),r=this.DR(a,b)
r.toString
s.eP(r.dG(this.GR(a)))
return s},
hU(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=this.DR(b,c)
s.toString
a.da(s.dG(this.GR(b)).df(r.b*r.d/2),r.i1())
break}},
l(a,b){var s=this
if(b==null)return!1
if(J.Y(b)!==A.C(s))return!1
return b instanceof A.ei&&b.a.l(0,s.a)&&b.b.l(0,s.b)&&b.c===s.c},
gu(a){return A.T(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a){var s=this,r="RoundedRectangleBorder(",q=s.d
if(q!==0)return r+s.a.k(0)+", "+s.b.k(0)+", "+B.d.N(s.c*100,1)+u.T+B.d.N(q*100,1)+"% oval)"
return r+s.a.k(0)+", "+s.b.k(0)+", "+B.d.N(s.c*100,1)+"% of the way to being a CircleBorder)"}}
A.eB.prototype={
aM(a,b){return new A.eB(this.a.aM(0,b))},
cd(a,b){var s,r=this
if(a instanceof A.eB)return new A.eB(A.aE(a.a,r.a,b))
if(a instanceof A.dw){s=A.aE(a.a,r.a,b)
return new A.ek(1-b,a.b,s)}if(a instanceof A.dG){s=A.aE(a.a,r.a,b)
return new A.el(a.b,1-b,s)}return r.lm(a,b)},
ce(a,b){var s,r=this
if(a instanceof A.eB)return new A.eB(A.aE(r.a,a.a,b))
if(a instanceof A.dw){s=A.aE(r.a,a.a,b)
return new A.ek(b,a.b,s)}if(a instanceof A.dG){s=A.aE(r.a,a.a,b)
return new A.el(a.b,b,s)}return r.ln(a,b)},
fI(a,b){var s=a.gfL()/2,r=$.at().cq()
r.eP(A.alX(a,new A.bv(s,s)))
return r},
hU(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=b.gfL()/2
a.da(A.alX(b,new A.bv(s,s)).df(r.b*r.d/2),r.i1())
break}},
l(a,b){if(b==null)return!1
if(J.Y(b)!==A.C(this))return!1
return b instanceof A.eB&&b.a.l(0,this.a)},
gu(a){var s=this.a
return A.T(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a){return"StadiumBorder("+this.a.k(0)+")"}}
A.ek.prototype={
aM(a,b){return new A.ek(b,this.c,this.a.aM(0,b))},
cd(a,b){var s,r,q,p=this
if(a instanceof A.eB)return new A.ek(p.b*b,p.c,A.aE(a.a,p.a,b))
if(a instanceof A.dw){s=A.aE(a.a,p.a,b)
r=p.b
return new A.ek(r+(1-r)*(1-b),a.b,s)}if(a instanceof A.ek){s=A.aE(a.a,p.a,b)
r=A.U(a.b,p.b,b)
r.toString
q=A.U(a.c,p.c,b)
q.toString
return new A.ek(r,q,s)}return p.lm(a,b)},
ce(a,b){var s,r,q,p=this
if(a instanceof A.eB)return new A.ek(p.b*(1-b),p.c,A.aE(p.a,a.a,b))
if(a instanceof A.dw){s=A.aE(p.a,a.a,b)
r=p.b
return new A.ek(r+(1-r)*b,a.b,s)}if(a instanceof A.ek){s=A.aE(p.a,a.a,b)
r=A.U(p.b,a.b,b)
r.toString
q=A.U(p.c,a.c,b)
q.toString
return new A.ek(r,q,s)}return p.ln(a,b)},
Hp(a){var s,r,q,p,o,n,m,l,k=this.b
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
nT(a){var s,r,q,p=A.dK(a.gfL()/2),o=this.c
if(o!==0){s=a.c-a.a
r=a.d-a.b
q=this.b
o=0.5+o/2
if(s<r){o=A.ov(p,A.Cf(new A.bv(s/2,o*r/2)),q)
o.toString
return o}else{o=A.ov(p,A.Cf(new A.bv(o*s/2,r/2)),q)
o.toString
return o}}return p},
fI(a,b){var s=$.at().cq()
s.eP(this.nT(a).dG(this.Hp(a)))
return s},
hU(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.da(this.nT(b).dG(this.Hp(b)).df(s.b*s.d/2),s.i1())
break}},
l(a,b){if(b==null)return!1
if(J.Y(b)!==A.C(this))return!1
return b instanceof A.ek&&b.a.l(0,this.a)&&b.b===this.b},
gu(a){return A.T(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a){var s=this,r=s.c
if(r!==0)return"StadiumBorder("+s.a.k(0)+", "+B.d.N(s.b*100,1)+u.T+B.d.N(r*100,1)+"% oval)"
return"StadiumBorder("+s.a.k(0)+", "+B.d.N(s.b*100,1)+"% of the way to being a CircleBorder)"}}
A.el.prototype={
aM(a,b){var s=this.a.aM(0,b)
return new A.el(this.b.a0(0,b),b,s)},
cd(a,b){var s,r,q,p=this
if(a instanceof A.eB)return new A.el(p.b,p.c*b,A.aE(a.a,p.a,b))
if(a instanceof A.dG){s=p.c
return new A.el(p.b,s+(1-s)*(1-b),A.aE(a.a,p.a,b))}if(a instanceof A.el){s=A.aE(a.a,p.a,b)
r=A.hK(a.b,p.b,b)
r.toString
q=A.U(a.c,p.c,b)
q.toString
return new A.el(r,q,s)}return p.lm(a,b)},
ce(a,b){var s,r,q,p=this
if(a instanceof A.eB)return new A.el(p.b,p.c*(1-b),A.aE(p.a,a.a,b))
if(a instanceof A.dG){s=p.c
return new A.el(p.b,s+(1-s)*b,A.aE(p.a,a.a,b))}if(a instanceof A.el){s=A.aE(p.a,a.a,b)
r=A.hK(p.b,a.b,b)
r.toString
q=A.U(p.c,a.c,b)
q.toString
return new A.el(r,q,s)}return p.ln(a,b)},
nT(a){var s=a.gfL()/2
s=A.hK(this.b,A.Cf(new A.bv(s,s)),1-this.c)
s.toString
return s},
fI(a,b){var s=$.at().cq()
s.eP(this.nT(a).Y(b).dG(a))
return s},
hU(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.da(this.nT(b).Y(c).dG(b).df(s.b*s.d/2),s.i1())
break}},
l(a,b){var s=this
if(b==null)return!1
if(J.Y(b)!==A.C(s))return!1
return b instanceof A.el&&b.a.l(0,s.a)&&b.b.l(0,s.b)&&b.c===s.c},
gu(a){return A.T(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a){return"StadiumBorder("+this.a.k(0)+", "+this.b.k(0)+", "+B.d.N(this.c*100,1)+"% of the way to being a RoundedRectangleBorder)"}}
A.nH.prototype={
G(){return"TextOverflow."+this.b}}
A.n1.prototype={
l(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(b instanceof A.n1)if(b.a.l(0,r.a))if(b.b===r.b)s=b.c==r.c
else s=!1
else s=!1
else s=!1
return s},
gu(a){var s=this
return A.T(s.a,s.b,s.d,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a){return"PlaceholderDimensions("+this.a.k(0)+", "+A.h(this.d)+")"}}
A.yc.prototype={
G(){return"TextWidthBasis."+this.b}}
A.acV.prototype={}
A.M4.prototype={
a9(){var s=this,r=s.a
if(r!=null)r.m()
s.dy=s.dx=s.fr=s.a=null},
scs(a,b){var s,r,q=this
if(J.f(q.d,b))return
s=q.d
s=s==null?null:s.a
if(!J.f(s,b.a)){s=q.CW
if(s!=null)s.m()
q.CW=null}s=q.d
s=s==null?null:s.aG(0,b)
r=s==null?B.cM:s
q.d=b
q.e=null
s=r.a
if(s>=3)q.a9()
else if(s>=2)q.b=!0},
gux(){var s=this.e
if(s==null){s=this.d
s=s==null?null:s.Mo(!1)
this.e=s}return s==null?"":s},
sBs(a,b){if(this.f===b)return
this.f=b
this.a9()},
sbO(a){var s,r=this
if(r.r===a)return
r.r=a
r.a9()
s=r.CW
if(s!=null)s.m()
r.CW=null},
sBt(a){var s,r=this
if(r.w===a)return
r.w=a
r.a9()
s=r.CW
if(s!=null)s.m()
r.CW=null},
sa2V(a){if(this.x==a)return
this.x=a
this.a9()},
sAk(a,b){if(J.f(this.y,b))return
this.y=b
this.a9()},
sAp(a){if(this.z==a)return
this.z=a
this.a9()},
sBu(a){if(this.as===a)return
this.as=a
this.a9()},
vi(a){if(a==null||a.length===0||A.cX(a,this.ch))return
this.ch=a
this.a9()},
EJ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.d.a
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
o=l==null?f:new A.M1(l)
k=e.w
j=e.x
i=e.d
h=e.r
if(h==null)h=14
e=e.as
e=A.alR(n,i,h*q,j,k,e,m,p,f,s,r,o)}if(e==null){e=g.f
s=g.r
if(s==null)s=a
r=g.w
q=g.z
p=g.at
p=A.alR(g.x,f,14*r,f,f,f,g.y,q,f,e,s,p)
e=p}return e},
Tw(){return this.EJ(null)},
guz(){var s,r,q=this,p=q.CW
if(p==null){p=q.EJ(B.a1)
s=$.at().yY(p)
p=q.d
if(p==null)r=null
else{p=p.a
r=p==null?null:p.Ca(q.w)}if(r!=null)s.Bb(r)
s.rK(" ")
p=s.b7()
p.iG(B.Uk)
q.CW=p}return p.gbV(p)},
gbq(a){var s=this.as,r=this.a
s=s===B.a_m?r.gL8():r.gbq(r)
return Math.ceil(s)},
eS(a){var s
switch(a.a){case 0:s=this.a
return s.grO(s)
case 1:s=this.a
return s.ga4A(s)}},
EI(){var s,r,q=this,p=q.d
if(p==null)throw A.c(A.a6("TextPainter.text must be set to a non-null value before using the TextPainter."))
s=q.Tw()
r=$.at().yY(s)
s=q.w
p.IM(r,q.ch,s)
q.ay=r.ga6c()
q.a=r.b7()
q.b=!1},
FX(a,b){var s,r,q=this
q.a.iG(new A.kY(b))
if(a!==b){switch(q.as.a){case 1:s=Math.ceil(q.a.gL8())
break
case 0:s=Math.ceil(q.a.ga5x())
break
default:s=null}s=A.K(s,a,b)
r=q.a
if(s!==Math.ceil(r.gbq(r)))q.a.iG(new A.kY(s))}},
Ah(a,b){var s=this,r=s.a==null
if(!r&&b===s.cx&&a===s.cy)return
if(s.b||r)s.EI()
s.cx=b
s.cy=a
s.dy=s.dx=s.fr=null
s.FX(b,a)
s.ax=s.a.uW()},
a5e(){return this.Ah(1/0,0)},
aI(a,b){var s,r=this,q=r.cx,p=r.cy
if(r.a==null||q==null||p==null)throw A.c(A.a6("TextPainter.paint called when text geometry was not yet calculated.\nPlease call layout() before paint() to position the text before painting it."))
if(r.b){r.EI()
r.FX(q,p)}s=r.a
s.toString
a.kB(s,b)},
Fj(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.gux().length
if(g===0||a>g)return null
s=B.b.ae(h.gux(),Math.max(0,a-1))
r=(s&63488)===55296||h.d.ae(0,a)===8205||s===8207||s===8206
q=r?2:1
p=A.a([],t.Lx)
for(o=-g,n=!r,m=s===10;p.length===0;){l=a-q
p=h.a.BW(l,a,B.mz)
if(p.length===0){if(n&&m)break
if(l<o)break
q*=2
continue}k=B.c.gJ(p)
if(m){o=k.d
return new A.E(h.gww().a,o,h.gww().a,o+o-k.b)}o=k.e
j=o===B.w?k.c:k.a
i=o===B.a1?j-(b.c-b.a):j
o=h.a
o=A.K(i,0,o.gbq(o))
n=h.a
return new A.E(o,k.b,A.K(i,0,n.gbq(n)),k.d)}return null},
Fi(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.gux().length
if(h===0||a<0)return null
s=B.b.ae(i.gux(),Math.min(a,h-1))
r=(s&63488)===55296||s===8205||s===8207||s===8206
q=r?2:1
p=A.a([],t.Lx)
for(o=h<<1>>>0,n=!r;p.length===0;){m=a+q
p=i.a.BW(a,m,B.mz)
if(p.length===0){if(n)break
if(m>=o)break
q*=2
continue}l=B.c.gT(p)
o=l.e
k=o===B.w?l.a:l.c
j=o===B.a1?k-(b.c-b.a):k
o=i.a
o=A.K(j,0,o.gbq(o))
n=i.a
return new A.E(o,l.b,A.K(j,0,n.gbq(n)),l.d)}return null},
gww(){var s=this
switch(s.f.a){case 0:return B.k
case 1:return new A.t(s.gbq(s),0)
case 2:return new A.t(s.gbq(s)/2,0)
case 3:case 4:switch(s.r.a){case 0:return new A.t(s.gbq(s),0)
case 1:return B.k}break
case 5:switch(s.r.a){case 0:return B.k
case 1:return new A.t(s.gbq(s),0)}break}},
Ey(a,b){var s,r,q,p,o=this
if(a.l(0,o.dx)&&b.l(0,o.dy))return
s=a.a
switch(a.b.a){case 0:r=o.Fj(s,b)
if(r==null)r=o.Fi(s,b)
break
case 1:r=o.Fi(s,b)
if(r==null)r=o.Fj(s,b)
break
default:r=null}q=r!=null
p=q?new A.t(r.a,r.b):o.gww()
o.db=new A.acV(p,q?r.d-r.b:null)
o.dx=a
o.dy=b},
m(){var s=this,r=s.CW
if(r!=null)r.m()
s.CW=null
r=s.a
if(r!=null)r.m()
s.d=s.a=null}}
A.yb.prototype={
gJj(a){return this.e},
gBO(){return!0},
iA(a,b){t._.b(a)},
IM(a,b,c){var s,r,q,p,o,n=this.a,m=n!=null
if(m)a.Bb(n.Ca(c))
n=this.b
if(n!=null)try{a.rK(n)}catch(q){n=A.af(q)
if(n instanceof A.fT){s=n
r=A.aw(q)
A.ed(new A.bQ(s,r,"painting library",A.bs("while building a TextSpan"),null,!1))
a.rK("\ufffd")}else throw q}n=this.c
if(n!=null)for(p=n.length,o=0;o<n.length;n.length===p||(0,A.Q)(n),++o)n[o].IM(a,b,c)
if(m)a.hX()},
aY(a){var s,r,q
if(this.b!=null)if(!a.$1(this))return!1
s=this.c
if(s!=null)for(r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)if(!s[q].aY(a))return!1
return!0},
Nb(a,b){var s,r,q,p,o=this.b
if(o==null)return null
s=a.b
r=a.a
q=b.a
p=q+o.length
if(!(q===r&&s===B.F))if(!(q<r&&r<p))o=p===r&&s===B.R
else o=!0
else o=!0
if(o)return this
b.a=p
return null},
J1(a,b,c){var s,r,q=this.b
if(q!=null)a.a+=q
q=this.c
if(q!=null)for(s=q.length,r=0;r<q.length;q.length===s||(0,A.Q)(q),++r)q[r].J1(a,!0,c)},
J0(a,b,c){var s,r,q=this.b
if(q!=null){s=A.a([],t.oU)
a.push(A.apv(q,null,null,s))}q=this.c
if(q!=null)for(s=q.length,r=0;r<q.length;q.length===s||(0,A.Q)(q),++r)q[r].J0(a,b,!1)},
a1G(a){return this.J0(a,null,!1)},
a1r(a,b){var s,r,q,p=this.b
if(p==null)return null
s=b.a
r=a-s
q=p.length
if(r<q)return B.b.ae(p,r)
b.a=s+q
return null},
aG(a,b){var s,r,q,p,o,n=this
if(n===b)return B.dO
if(A.C(b)!==A.C(n))return B.cM
if(b.b==n.b){s=n.c
s=s==null?null:s.length
r=b.c
s=s!=(r==null?null:r.length)||n.a==null!==(b.a==null)}else s=!0
if(s)return B.cM
s=n.a
if(s!=null){r=b.a
r.toString
q=s.aG(0,r)
p=q.a>0?q:B.dO
if(p===B.cM)return p}else p=B.dO
s=n.c
if(s!=null)for(r=b.c,o=0;o<s.length;++o){q=s[o].aG(0,r[o])
if(q.a>p.a)p=q
if(p===B.cM)return p}return p},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.Y(b)!==A.C(s))return!1
if(!s.OG(0,b))return!1
return b instanceof A.yb&&b.b==s.b&&s.e.l(0,b.e)&&A.cX(b.c,s.c)},
gu(a){var s=this,r=null,q=A.fm.prototype.gu.call(s,s),p=s.c
p=p==null?r:A.dj(p)
return A.T(q,s.b,r,r,r,r,s.e,p,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
c4(){return"TextSpan"},
$iap:1,
$ijl:1,
gAM(){return null},
gAN(){return null}}
A.u.prototype={
gms(){return this.e},
glU(a){return this.d},
oo(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=c0==null?a0.a:c0,a2=a0.ay
if(a2==null&&b8==null)s=a5==null?a0.b:a5
else s=null
r=a0.ch
if(r==null&&a3==null)q=a4==null?a0.c:a4
else q=null
p=b4==null?a0.r:b4
o=b7==null?a0.w:b7
n=b5==null?a0.x:b5
m=c2==null?a0.y:c2
l=c8==null?a0.z:c8
k=c7==null?a0.Q:c7
j=b9==null?a0.as:b9
i=c1==null?a0.at:c1
a2=b8==null?a2:b8
r=a3==null?r:a3
h=c6==null?a0.dy:c6
g=b6==null?a0.fx:b6
f=a7==null?a0.CW:a7
e=a8==null?a0.cx:a8
d=a9==null?a0.cy:a9
c=b0==null?a0.db:b0
b=b1==null?a0.glU(a0):b1
a=b2==null?a0.e:b2
return A.bd(r,q,s,null,f,e,d,c,b,a,a0.fr,p,n,g,o,a2,j,a1,i,m,a0.ax,a0.fy,a0.f,h,k,l)},
a27(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5){return this.oo(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,null,r,s,a0,a1,a2,a3,a4,a5)},
hE(a){return this.oo(null,null,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
a1Y(a){return this.oo(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null)},
Jc(a,b){return this.oo(null,null,a,null,null,null,null,null,null,null,null,b,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
J7(a){return this.oo(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null,null,null)},
cb(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
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
a1=a4.glU(a4)
a2=a4.e
a3=a4.f
return this.a27(g,r,s,null,c,b,a,a0,a1,a2,e,q,o,d,p,h,k,j,n,i,a4.fy,a3,f,l,m)},
Ca(a){var s,r,q=this,p=q.gms(),o=q.r
o=o==null?null:o*a
s=q.ch
if(s==null){s=q.c
if(s!=null){r=$.at().bn()
r.san(0,s)
s=r}else s=null}return A.aqX(s,q.b,q.CW,q.cx,q.cy,q.db,q.d,p,q.fr,o,q.x,q.fx,q.w,q.ay,q.as,q.at,q.y,q.ax,q.dy,q.Q,q.z)},
aG(a,b){var s=this
if(s===b)return B.dO
if(s.a!==b.a||s.d!=b.d||s.r!=b.r||s.w!=b.w||s.x!=b.x||s.y!=b.y||s.z!=b.z||s.Q!=b.Q||s.as!=b.as||s.at!=b.at||s.ay!=b.ay||s.ch!=b.ch||!A.cX(s.dy,b.dy)||!A.cX(s.fr,b.fr)||!A.cX(s.fx,b.fx)||!A.cX(s.gms(),b.gms())||!1)return B.cM
if(!J.f(s.b,b.b)||!J.f(s.c,b.c)||!J.f(s.CW,b.CW)||!J.f(s.cx,b.cx)||s.cy!=b.cy||s.db!=b.db)return B.UD
return B.dO},
l(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.Y(b)!==A.C(r))return!1
if(b instanceof A.u)if(b.a===r.a)if(J.f(b.b,r.b))if(J.f(b.c,r.c))if(b.r==r.r)if(b.w==r.w)if(b.x==r.x)if(b.y==r.y)if(b.z==r.z)if(b.Q==r.Q)if(b.as==r.as)if(b.at==r.at)if(b.ay==r.ay)if(b.ch==r.ch)if(A.cX(b.dy,r.dy))if(A.cX(b.fr,r.fr))if(A.cX(b.fx,r.fx))if(J.f(b.CW,r.CW))if(J.f(b.cx,r.cx))if(b.cy==r.cy)if(b.db==r.db)if(b.d==r.d)if(A.cX(b.gms(),r.gms()))s=!0
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
gu(a){var s,r=this,q=null,p=r.gms(),o=p==null?q:A.dj(p),n=A.T(r.cy,r.db,r.d,o,r.f,r.fy,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a),m=r.dy,l=r.fx
o=m==null?q:A.dj(m)
s=l==null?q:A.dj(l)
return A.T(r.a,r.b,r.c,r.r,r.w,r.x,r.y,r.z,r.Q,r.as,r.at,r.ax,r.ay,r.ch,o,q,s,r.CW,r.cx,n)},
c4(){return"TextStyle"}}
A.Sd.prototype={}
A.G2.prototype={
RL(a,b,c,d,e){var s=this
s.r=A.asr(new A.a01(s),s.gzs(s),0,10,0)},
d3(a,b){var s,r,q=this
if(b>q.r)return q.gtE()
s=q.e
r=q.c
return q.d+s*Math.pow(q.b,b)/r-s/r-q.f/2*b*b},
dP(a,b){var s=this
if(b>s.r)return 0
return s.e*Math.pow(s.b,b)-s.f*b},
gtE(){var s=this
if(s.f===0)return s.d-s.e/s.c
return s.d3(0,s.r)},
Mj(a){var s,r=this,q=r.d
if(a===q)return 0
s=r.e
if(s!==0)if(s>0)q=a<q||a>r.gtE()
else q=a>q||a<r.gtE()
else q=!0
if(q)return 1/0
return A.asr(r.gzs(r),r.ga7R(r),0,10,a)},
jy(a){return Math.abs(this.dP(0,a))<this.a.c},
k(a){return"FrictionSimulation(c\u2093: "+B.d.N(this.b,1)+", x\u2080: "+B.d.N(this.d,1)+", dx\u2080: "+B.d.N(this.e,1)+")"}}
A.a01.prototype={
$1(a){var s=this.a
return s.e*Math.pow(s.b,a)*s.c-s.f},
$S:66}
A.a8m.prototype={
k(a){return"Simulation"}}
A.aag.prototype={
k(a){return"SpringDescription(mass: "+B.d.N(this.a,1)+", stiffness: "+B.f.N(this.b,1)+", damping: "+B.d.N(this.c,1)+")"}}
A.qo.prototype={
G(){return"SpringType."+this.b}}
A.LH.prototype={
d3(a,b){return this.b+this.c.d3(0,b)},
dP(a,b){return this.c.dP(0,b)},
jy(a){var s=this.c
return A.BD(s.d3(0,a),0,this.a.a)&&A.BD(s.dP(0,a),0,this.a.c)},
k(a){var s=this.c
return"SpringSimulation(end: "+B.d.N(this.b,1)+", "+s.gdi(s).k(0)+")"}}
A.l9.prototype={
d3(a,b){return this.jy(b)?this.b:this.Qh(0,b)}}
A.ad9.prototype={
d3(a,b){return(this.b+this.c*b)*Math.pow(2.718281828459045,this.a*b)},
dP(a,b){var s=this.a,r=Math.pow(2.718281828459045,s*b),q=this.c
return s*(this.b+q*b)*r+q*r},
gdi(a){return B.W7}}
A.afX.prototype={
d3(a,b){var s=this
return s.c*Math.pow(2.718281828459045,s.a*b)+s.d*Math.pow(2.718281828459045,s.b*b)},
dP(a,b){var s=this,r=s.a,q=s.b
return s.c*r*Math.pow(2.718281828459045,r*b)+s.d*q*Math.pow(2.718281828459045,q*b)},
gdi(a){return B.W9}}
A.ahH.prototype={
d3(a,b){var s=this,r=s.a*b
return Math.pow(2.718281828459045,s.b*b)*(s.c*Math.cos(r)+s.d*Math.sin(r))},
dP(a,b){var s,r=this,q=r.b,p=Math.pow(2.718281828459045,q*b),o=r.a,n=o*b,m=Math.cos(n),l=Math.sin(n)
n=r.d
s=r.c
return p*(n*o*m-s*o*l)+q*p*(n*l+s*m)},
gdi(a){return B.W8}}
A.Me.prototype={
k(a){return"Tolerance(distance: \xb1"+A.h(this.a)+", time: \xb10.001, velocity: \xb1"+A.h(this.c)+")"}}
A.pZ.prototype={
zR(){var s=this,r=s.y1$
r===$&&A.b()
r=r.e
r.toString
r.syQ(s.Jh())
if(s.y1$.e.C$!=null)s.Nj()},
zX(){},
zT(){},
Jh(){var s,r=$.cw(),q=r.w
if(q==null){s=self.window.devicePixelRatio
q=s===0?1:s}return new A.Mx(r.gkY().d4(0,q),q)},
Ww(){var s,r=this
if($.aR().a.c){if(r.y2$==null){s=r.y1$
s===$&&A.b()
r.y2$=s.JQ()}}else{s=r.y2$
if(s!=null)s.m()
r.y2$=null}},
NI(a){var s,r=this
if(a){if(r.y2$==null){s=r.y1$
s===$&&A.b()
r.y2$=s.JQ()}}else{s=r.y2$
if(s!=null)s.m()
r.y2$=null}},
WP(a){B.U2.nD("first-frame",null,!1,t.H)},
Wu(a,b,c){var s=this.y1$
s===$&&A.b()
s=s.as
if(s!=null)s.a6a(a,b,null)},
Wy(){var s,r=this.y1$
r===$&&A.b()
r=r.e
r.toString
s=t.W
s.a(A.N.prototype.gbz.call(r)).ay.E(0,r)
s.a(A.N.prototype.gbz.call(r)).mR()},
WC(a){var s=this.y1$
s===$&&A.b()
s.e.toString
s=$.dL;(s==null?$.dL=A.kp():s).a7A(a)},
WA(){var s=this.y1$
s===$&&A.b()
s.e.m1()},
W0(a){this.zr()
this.ZA()},
ZA(){$.bJ.cy$.push(new A.a6v(this))},
Iy(){--this.bt$
if(!this.b9$)this.v8()},
zr(){var s=this,r=s.y1$
r===$&&A.b()
r.a3q()
s.y1$.a3p()
s.y1$.a3r()
if(s.b9$||s.bt$===0){s.y1$.e.a1C()
s.y1$.a3s()
s.b9$=!0}},
$iap:1,
$idH:1}
A.a6v.prototype={
$1(a){var s=this.a,r=s.xr$
r.toString
s=s.y1$
s===$&&A.b()
r.a7x(s.e.ga4x())},
$S:2}
A.aT.prototype={
yV(a,b,c,d){var s=this,r=d==null?s.a:d,q=b==null?s.b:b,p=c==null?s.c:c
return new A.aT(r,q,p,a==null?s.d:a)},
a24(a,b){return this.yV(null,null,a,b)},
J9(a){return this.yV(a,null,null,null)},
a1Z(a){return this.yV(null,a,null,null)},
Jn(a){var s=this,r=a.gco(),q=a.gbd(a)+a.gbh(a),p=Math.max(0,s.a-r),o=Math.max(0,s.c-q)
return new A.aT(p,Math.max(p,s.b-r),o,Math.max(o,s.d-q))},
oL(a){var s=this,r=a.a,q=a.b,p=a.c,o=a.d
return new A.aT(A.K(s.a,r,q),A.K(s.b,r,q),A.K(s.c,p,o),A.K(s.d,p,o))},
Bx(a,b){var s,r,q=this,p=b==null,o=q.a,n=p?o:A.K(b,o,q.b),m=q.b
p=p?m:A.K(b,o,m)
o=a==null
m=q.c
s=o?m:A.K(a,m,q.d)
r=q.d
return new A.aT(n,p,s,o?r:A.K(a,m,r))},
uN(a){return this.Bx(a,null)},
Bw(a){return this.Bx(null,a)},
bF(a){var s=this
return new A.a9(A.K(a.a,s.a,s.b),A.K(a.b,s.c,s.d))},
om(a){var s,r,q,p,o,n=this,m=n.a,l=n.b
if(m>=l&&n.c>=n.d)return new A.a9(A.K(0,m,l),A.K(0,n.c,n.d))
s=a.a
r=a.b
q=s/r
if(s>l){r=l/q
s=l}p=n.d
if(r>p){s=p*q
r=p}if(s<m){r=m/q
s=m}o=n.c
if(r<o){s=o*q
r=o}return new A.a9(A.K(s,m,l),A.K(r,o,p))},
gKX(){var s=this
return s.a>=s.b&&s.c>=s.d},
a0(a,b){var s=this
return new A.aT(s.a*b,s.b*b,s.c*b,s.d*b)},
d4(a,b){var s=this
return new A.aT(s.a/b,s.b/b,s.c/b,s.d/b)},
ga51(){var s=this,r=s.a
if(r>=0)if(r<=s.b){r=s.c
r=r>=0&&r<=s.d}else r=!1
else r=!1
return r},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.Y(b)!==A.C(s))return!1
return b instanceof A.aT&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gu(a){var s=this
return A.T(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a){var s,r=this,q=r.ga51()?"":"; NOT NORMALIZED",p=r.a
if(p===1/0&&r.c===1/0)return"BoxConstraints(biggest"+q+")"
if(p===0&&r.b===1/0&&r.c===0&&r.d===1/0)return"BoxConstraints(unconstrained"+q+")"
s=new A.Vs()
return"BoxConstraints("+s.$3(p,r.b,"w")+", "+s.$3(r.c,r.d,"h")+q+")"}}
A.Vs.prototype={
$3(a,b,c){if(a===b)return c+"="+B.d.N(a,1)
return B.d.N(a,1)+"<="+c+"<="+B.d.N(b,1)},
$S:247}
A.hL.prototype={
yv(a,b,c){if(c!=null){c=A.IJ(A.alT(c))
if(c==null)return!1}return this.Iw(a,b,c)},
o4(a,b,c){var s,r=b==null,q=r?c:c.ad(0,b)
r=!r
if(r)this.c.push(new A.rs(new A.t(-b.a,-b.b)))
s=a.$2(this,q)
if(r)this.uy()
return s},
Iw(a,b,c){var s,r=c==null,q=r?b:A.cC(c,b)
r=!r
if(r)this.c.push(new A.zt(c))
s=a.$2(this,q)
if(r)this.uy()
return s},
Iv(a,b,c){var s,r=this
if(b!=null)r.c.push(new A.rs(new A.t(-b.a,-b.b)))
else{c.toString
c=A.IJ(A.alT(c))
c.toString
r.c.push(new A.zt(c))}s=a.$1(r)
r.uy()
return s},
a0D(a,b){return this.Iv(a,null,b)},
a0C(a,b){return this.Iv(a,b,null)}}
A.oy.prototype={
k(a){return"<optimized out>#"+A.bS(this.a)+"@"+this.c.k(0)}}
A.eK.prototype={
k(a){return"offset="+this.a.k(0)}}
A.tL.prototype={}
A.H.prototype={
eC(a){if(!(a.e instanceof A.eK))a.e=new A.eK(B.k)},
hd(a){var s,r=this.k1
if(r==null)r=this.k1=A.y(t.k,t.FW)
s=r.bI(0,a,new A.a5Y(this,a))
return s},
cg(a){return B.W},
gjV(){var s=this.k3
return new A.E(0,0,0+s.a,0+s.b)},
v_(a,b){var s=null
try{s=this.jQ(a)}finally{}if(s==null&&!b)return this.k3.b
return s},
MW(a){return this.v_(a,!1)},
jQ(a){var s=this,r=s.k4
if(r==null)r=s.k4=A.y(t._0,t.PM)
r.bI(0,a,new A.a5X(s,a))
return s.k4.h(0,a)},
eS(a){return null},
ga1(){return t.k.a(A.B.prototype.ga1.call(this))},
T5(){var s,r=this,q=r.k4,p=q==null
if(!(!p&&q.a!==0)){s=r.id
if(!(s!=null&&s.a!==0)){s=r.k1
s=s!=null&&s.a!==0}else s=!0}else s=!0
if(s){if(!p)q.a_(0)
q=r.id
if(q!=null)q.a_(0)
q=r.k1
if(q!=null)q.a_(0)
return!0}return!1},
a9(){var s=this
if(s.T5()&&s.c instanceof A.B){s.uc()
return}s.PB()},
cw(a,b){var s,r=this
if(r.k3!=null)if(!a.l(0,t.k.a(A.B.prototype.ga1.call(r)))){s=r.k4
s=s!=null&&s.a!==0}else s=!1
else s=!1
if(s){s=r.k4
if(s!=null)s.a_(0)}r.PA(a,b)},
iG(a){return this.cw(a,!1)},
pD(){this.k3=this.cg(t.k.a(A.B.prototype.ga1.call(this)))},
bN(){},
c_(a,b){var s=this
if(s.k3.D(0,b))if(s.d_(a,b)||s.jv(b)){a.E(0,new A.oy(b,s))
return!0}return!1},
jv(a){return!1},
d_(a,b){return!1},
dw(a,b){var s,r=a.e
r.toString
s=t.hX.a(r).a
b.aD(0,s.a,s.b)},
la(a){var s,r,q,p,o,n=this.bC(0,null)
if(n.hD(n)===0)return B.k
s=new A.fJ(new Float64Array(3))
s.fK(0,0,1)
r=new A.fJ(new Float64Array(3))
r.fK(0,0,0)
q=n.iK(r)
r=new A.fJ(new Float64Array(3))
r.fK(0,0,1)
p=n.iK(r).ad(0,q)
r=new A.fJ(new Float64Array(3))
r.fK(a.a,a.b,0)
o=n.iK(r)
r=o.ad(0,p.Cj(s.JA(o)/s.JA(p))).a
return new A.t(r[0],r[1])},
ghV(){var s=this.k3
return new A.E(0,0,0+s.a,0+s.b)},
iA(a,b){this.Pz(a,b)}}
A.a5Y.prototype={
$0(){return this.a.cg(this.b)},
$S:248}
A.a5X.prototype={
$0(){return this.a.eS(this.b)},
$S:249}
A.cQ.prototype={
a2C(a){var s,r,q,p=this.a8$
for(s=A.o(this).i("cQ.1?");p!=null;){r=s.a(p.e)
q=p.jQ(a)
if(q!=null)return q+r.a.b
p=r.ab$}return null},
Jm(a){var s,r,q,p,o=this.a8$
for(s=A.o(this).i("cQ.1"),r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.jQ(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.ab$}return r},
z4(a,b){var s,r,q={},p=q.a=this.bG$
for(s=A.o(this).i("cQ.1");p!=null;p=r){p=p.e
p.toString
s.a(p)
if(a.o4(new A.a5W(q,b,p),p.a,b))return!0
r=p.aU$
q.a=r}return!1},
ot(a,b){var s,r,q,p,o,n=this.a8$
for(s=A.o(this).i("cQ.1"),r=b.a,q=b.b;n!=null;){p=n.e
p.toString
s.a(p)
o=p.a
a.f8(n,new A.t(o.a+r,o.b+q))
n=p.ab$}}}
A.a5W.prototype={
$2(a,b){return this.a.a.c_(a,b)},
$S:18}
A.yL.prototype={
ao(a){this.vA(0)}}
A.fr.prototype={
k(a){return this.qo(0)+"; id="+A.h(this.e)}}
A.a3R.prototype={
dU(a,b){var s,r=this.b.h(0,a)
r.cw(b,!0)
s=r.k3
s.toString
return s},
eb(a,b){var s=this.b.h(0,a).e
s.toString
t.Wz.a(s).a=b},
SN(a,b){var s,r,q,p,o,n,m=this,l=m.b
try{m.b=A.y(t.K,t.x)
for(r=t.Wz,q=b;q!=null;q=n){p=q.e
p.toString
s=r.a(p)
p=m.b
p.toString
o=s.e
o.toString
p.j(0,o,q)
n=s.ab$}m.uw(a)}finally{m.b=l}},
k(a){return"MultiChildLayoutDelegate"}}
A.Ki.prototype={
eC(a){if(!(a.e instanceof A.fr))a.e=new A.fr(null,null,B.k)},
sz7(a){var s=this,r=s.M
if(r===a)return
if(A.C(a)!==A.C(r)||a.n7(r))s.a9()
s.M=a
s.b!=null},
aw(a){this.QC(a)},
ao(a){this.QD(0)},
cg(a){return a.bF(new A.a9(A.K(1/0,a.a,a.b),A.K(1/0,a.c,a.d)))},
bN(){var s=this,r=t.k.a(A.B.prototype.ga1.call(s))
r=r.bF(new A.a9(A.K(1/0,r.a,r.b),A.K(1/0,r.c,r.d)))
s.k3=r
s.M.SN(r,s.a8$)},
aI(a,b){this.ot(a,b)},
d_(a,b){return this.z4(a,b)}}
A.zT.prototype={
aw(a){var s,r,q
this.eG(a)
s=this.a8$
for(r=t.Wz;s!=null;){s.aw(a)
q=s.e
q.toString
s=r.a(q).ab$}},
ao(a){var s,r,q
this.e_(0)
s=this.a8$
for(r=t.Wz;s!=null;){s.ao(0)
q=s.e
q.toString
s=r.a(q).ab$}}}
A.QR.prototype={}
A.Eu.prototype={
X(a,b){var s=this.a
return s==null?null:s.X(0,b)},
I(a,b){var s=this.a
return s==null?null:s.I(0,b)},
gCm(){return null},
Cz(a){return this.i9(a)},
tW(a){return null},
k(a){var s=A.bS(this),r=this.a
r=r==null?null:r.k(0)
if(r==null)r=""
return"<optimized out>#"+s+"("+r+")"}}
A.Kj.prototype={
suv(a){var s=this.A
if(s==a)return
this.A=a
this.EO(a,s)},
sK9(a){var s=this.S
if(s==a)return
this.S=a
this.EO(a,s)},
EO(a,b){var s=this,r=a==null
if(r)s.au()
else if(b==null||A.C(a)!==A.C(b)||a.i9(b))s.au()
if(s.b!=null){if(b!=null)b.I(0,s.gea())
if(!r)a.X(0,s.gea())}if(r){if(s.b!=null)s.b3()}else if(b==null||A.C(a)!==A.C(b)||a.Cz(b))s.b3()},
suA(a){if(this.aB.l(0,a))return
this.aB=a
this.a9()},
aw(a){var s,r=this
r.nj(a)
s=r.A
if(s!=null)s.X(0,r.gea())
s=r.S
if(s!=null)s.X(0,r.gea())},
ao(a){var s=this,r=s.A
if(r!=null)r.I(0,s.gea())
r=s.S
if(r!=null)r.I(0,s.gea())
s.lr(0)},
d_(a,b){var s=this.S
if(s!=null){s=s.tW(b)
s=s===!0}else s=!1
if(s)return!0
return this.qr(a,b)},
jv(a){var s=this.A
if(s!=null){s=s.tW(a)
s=s!==!1}else s=!1
return s},
bN(){this.vF()
this.b3()},
ol(a){return a.bF(this.aB)},
Gq(a,b,c){var s
A.b8("debugPreviousCanvasSaveCount")
a.cC(0)
if(!b.l(0,B.k))a.aD(0,b.a,b.b)
s=this.k3
s.toString
c.aI(a,s)
a.cz(0)},
aI(a,b){var s,r,q=this
if(q.A!=null){s=a.gbJ(a)
r=q.A
r.toString
q.Gq(s,b,r)
q.Hc(a)}q.hl(a,b)
if(q.S!=null){s=a.gbJ(a)
r=q.S
r.toString
q.Gq(s,b,r)
q.Hc(a)}},
Hc(a){},
eV(a){var s,r=this
r.hk(a)
r.bU=null
s=r.S
r.e6=s==null?null:s.gCm()
a.a=!1},
oc(a,b,c){var s,r,q,p,o=this
o.h3=A.aqp(o.h3,B.t_)
o.iy=A.aqp(o.iy,B.t_)
s=o.h3
r=s!=null&&!s.gO(s)
s=o.iy
q=s!=null&&!s.gO(s)
s=A.a([],t.V)
if(r){p=o.h3
p.toString
B.c.K(s,p)}B.c.K(s,c)
if(q){p=o.iy
p.toString
B.c.K(s,p)}o.Do(a,b,s)},
m1(){this.vC()
this.iy=this.h3=null}}
A.X1.prototype={}
A.Km.prototype={
RU(a){var s,r,q,p,o=this
try{r=o.M
if(r!==""){q=$.aum()
s=$.at().yY(q)
s.Bb($.aun())
s.rK(r)
r=s.b7()
o.ag!==$&&A.eI()
o.ag=r}else{o.ag!==$&&A.eI()
o.ag=null}}catch(p){}},
gjY(){return!0},
jv(a){return!0},
cg(a){return a.bF(B.W_)},
aI(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
try{p=a.gbJ(a)
o=i.k3
n=b.a
m=b.b
l=o.a
o=o.b
k=$.at().bn()
k.san(0,$.aul())
p.cm(new A.E(n,m,n+l,m+o),k)
p=i.ag
p===$&&A.b()
if(p!=null){s=i.k3.a
r=0
q=0
if(s>328){s-=128
r+=64}p.iG(new A.kY(s))
if(i.k3.b>96+p.gbV(p)+12)q+=96
a.gbJ(a).kB(p,b.V(0,new A.t(r,q)))}}catch(j){}}}
A.uH.prototype={
G(){return"FlexFit."+this.b}}
A.dy.prototype={
k(a){return this.qo(0)+"; flex="+A.h(this.e)+"; fit="+A.h(this.f)}}
A.vz.prototype={
G(){return"MainAxisSize."+this.b}}
A.mT.prototype={
G(){return"MainAxisAlignment."+this.b}}
A.kn.prototype={
G(){return"CrossAxisAlignment."+this.b}}
A.pX.prototype={
eC(a){if(!(a.e instanceof A.dy))a.e=new A.dy(null,null,B.k)},
eS(a){if(this.M===B.aY)return this.Jm(a)
return this.a2C(a)},
qG(a){switch(this.M.a){case 0:return a.b
case 1:return a.a}},
qH(a){switch(this.M.a){case 0:return a.a
case 1:return a.b}},
cg(a){var s
if(this.aA===B.nz)return B.W
s=this.EC(a,A.ak_())
switch(this.M.a){case 0:return a.bF(new A.a9(s.a,s.b))
case 1:return a.bF(new A.a9(s.b,s.a))}},
EC(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.M===B.aY?a2.b:a2.d,a0=a<1/0,a1=c.a8$
for(s=t.US,r=a2.b,q=a2.d,p=b,o=0,n=0,m=0;a1!=null;){l=a1.e
l.toString
s.a(l)
k=l.e
if(k==null)k=0
if(k>0){o+=k
p=a1}else{if(c.aA===B.ny)switch(c.M.a){case 0:j=A.ox(q,b)
break
case 1:j=A.ox(b,r)
break
default:j=b}else switch(c.M.a){case 0:j=new A.aT(0,1/0,0,q)
break
case 1:j=new A.aT(0,r,0,1/0)
break
default:j=b}i=a3.$2(a1,j)
m+=c.qH(i)
n=Math.max(n,A.iR(c.qG(i)))}a1=l.ab$}h=Math.max(0,(a0?a:0)-m)
if(o>0){g=a0?h/o:0/0
a1=c.a8$
for(f=0;a1!=null;){l=a1.e
l.toString
k=s.a(l).e
if(k==null)k=0
if(k>0){if(a0)e=a1===p?h-f:g*k
else e=1/0
d=A.b8("minChildExtent")
l=a1.e
l.toString
l=s.a(l).f
switch((l==null?B.nO:l).a){case 0:if(d.b!==d)A.L(A.a2L(d.a))
d.b=e
break
case 1:if(d.b!==d)A.L(A.a2L(d.a))
d.b=0
break}if(c.aA===B.ny)switch(c.M.a){case 0:l=d.b
if(l===d)A.L(A.he(d.a))
j=new A.aT(l,e,q,q)
break
case 1:l=d.b
if(l===d)A.L(A.he(d.a))
j=new A.aT(r,r,l,e)
break
default:j=b}else switch(c.M.a){case 0:l=d.b
if(l===d)A.L(A.he(d.a))
j=new A.aT(l,e,0,q)
break
case 1:l=d.b
if(l===d)A.L(A.he(d.a))
j=new A.aT(0,r,l,e)
break
default:j=b}i=a3.$2(a1,j)
m+=c.qH(i)
f+=e
n=Math.max(n,A.iR(c.qG(i)))}l=a1.e
l.toString
a1=s.a(l).ab$}}return new A.af3(a0&&c.ac===B.q?a:m,n,m)},
bN(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.k.a(A.B.prototype.ga1.call(a)),a1=a.EC(a0,A.ak0()),a2=a1.a,a3=a1.b
if(a.aA===B.nz){s=a.a8$
for(r=t.US,q=0,p=0,o=0;s!=null;){n=a.C
n.toString
m=s.v_(n,!0)
if(m!=null){q=Math.max(q,m)
p=Math.max(m,p)
o=Math.max(s.k3.b-m,o)
a3=Math.max(p+o,a3)}n=s.e
n.toString
s=r.a(n).ab$}}else q=0
switch(a.M.a){case 0:r=a.k3=a0.bF(new A.a9(a2,a3))
a2=r.a
a3=r.b
break
case 1:r=a.k3=a0.bF(new A.a9(a3,a2))
a2=r.b
a3=r.a
break}l=a2-a1.c
a.ai=Math.max(0,-l)
k=Math.max(0,l)
j=A.b8("leadingSpace")
i=A.b8("betweenSpace")
r=A.asF(a.M,a.b2,a.ba)
h=r===!1
switch(a.ag.a){case 0:j.sc9(0)
i.sc9(0)
break
case 1:j.sc9(k)
i.sc9(0)
break
case 2:j.sc9(k/2)
i.sc9(0)
break
case 3:j.sc9(0)
r=a.dA$
i.sc9(r>1?k/(r-1):0)
break
case 4:r=a.dA$
i.sc9(r>0?k/r:0)
j.sc9(i.aF()/2)
break
case 5:r=a.dA$
i.sc9(r>0?k/(r+1):0)
j.sc9(i.aF())
break}g=h?a2-j.aF():j.aF()
s=a.a8$
for(r=t.US,n=a3/2,f=i.a;s!=null;){e=s.e
e.toString
r.a(e)
d=a.aA
switch(d.a){case 0:case 1:if(A.asF(A.aG7(a.M),a.b2,a.ba)===(d===B.aC))c=0
else{d=s.k3
d.toString
c=a3-a.qG(d)}break
case 2:d=s.k3
d.toString
c=n-a.qG(d)/2
break
case 3:c=0
break
case 4:if(a.M===B.aY){d=a.C
d.toString
m=s.v_(d,!0)
c=m!=null?q-m:0}else c=0
break
default:c=null}if(h){d=s.k3
d.toString
g-=a.qH(d)}switch(a.M.a){case 0:e.a=new A.t(g,c)
break
case 1:e.a=new A.t(c,g)
break}if(h){d=i.b
if(d===i)A.L(A.he(f))
g-=d}else{d=s.k3
d.toString
d=a.qH(d)
b=i.b
if(b===i)A.L(A.he(f))
g+=d+b}s=e.ab$}},
d_(a,b){return this.z4(a,b)},
aI(a,b){var s,r,q,p=this
if(!(p.ai>1e-10)){p.ot(a,b)
return}s=p.k3
if(s.gO(s))return
s=p.b5
r=p.cx
r===$&&A.b()
q=p.k3
s.saV(0,a.kZ(r,b,new A.E(0,0,0+q.a,0+q.b),p.ga2D(),p.cK,s.a))},
m(){this.b5.saV(0,null)
this.QE()},
jd(a){var s
switch(this.cK.a){case 0:return null
case 1:case 2:case 3:if(this.ai>1e-10){s=this.k3
s=new A.E(0,0,0+s.a,0+s.b)}else s=null
return s}},
c4(){var s=this.PE()
return s}}
A.af3.prototype={}
A.QS.prototype={
aw(a){var s,r,q
this.eG(a)
s=this.a8$
for(r=t.US;s!=null;){s.aw(a)
q=s.e
q.toString
s=r.a(q).ab$}},
ao(a){var s,r,q
this.e_(0)
s=this.a8$
for(r=t.US;s!=null;){s.ao(0)
q=s.e
q.toString
s=r.a(q).ab$}}}
A.QT.prototype={}
A.zU.prototype={
m(){var s,r,q
for(s=this.JY$,r=s.length,q=0;q<r;++q)s[q].m()
this.ie()},
f9(){this.PD()}}
A.Kp.prototype={
WS(){var s=this
if(s.M!=null)return
s.M=s.cY
s.ag=!1},
G2(){this.ag=this.M=null
this.au()},
sfw(a,b){var s=this,r=s.ac
if(b==r)return
if(b!=null&&r!=null&&b.KQ(r)){b.m()
return}r=s.ac
if(r!=null)r.m()
s.ac=b
s.au()
if(s.b2==null||s.ba==null)s.a9()},
sbq(a,b){if(b==this.b2)return
this.b2=b
this.a9()},
sbV(a,b){if(b==this.ba)return
this.ba=b
this.a9()},
sNh(a,b){if(b===this.C)return
this.C=b
this.a9()},
a_G(){this.ai=null},
san(a,b){return},
smL(a,b){return},
smq(a){if(a===this.by)return
this.by=a
this.au()},
sa1v(a){return},
szK(a){if(a==this.e5)return
this.e5=a
this.au()},
seo(a){if(a.l(0,this.cY))return
this.cY=a
this.G2()},
sa6R(a,b){if(b===this.cL)return
this.cL=b
this.au()},
sa17(a){return},
sA6(a){if(a===this.eZ)return
this.eZ=a
this.au()},
sa5u(a){return},
sbO(a){if(this.f_==a)return
this.f_=a
this.G2()},
sA7(a){return},
Hk(a){var s,r,q=this,p=q.b2
a=A.ox(q.ba,p).oL(a)
p=q.ac
if(p==null)return new A.a9(A.K(0,a.a,a.b),A.K(0,a.c,a.d))
p=p.gbq(p)
s=q.C
r=q.ac
return a.om(new A.a9(p/s,r.gbV(r)/q.C))},
jv(a){return!0},
cg(a){return this.Hk(a)},
bN(){this.k3=this.Hk(t.k.a(A.B.prototype.ga1.call(this)))},
aw(a){this.eG(a)},
ao(a){this.e_(0)},
aI(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(d.ac==null)return
d.WS()
s=a.gbJ(a)
r=d.k3
q=b.a
p=b.b
o=r.a
r=r.b
n=d.ac
n.toString
m=d.aA
l=d.C
k=d.ai
j=d.e5
i=d.M
i.toString
h=d.jp
g=d.cL
f=d.ag
f.toString
e=d.eZ
A.atG(i,s,h,k,m,d.by,j,f,n,e,!1,1,new A.E(q,p,q+o,p+r),g,l)},
m(){var s=this.ac
if(s!=null)s.m()
this.ac=null
this.ie()}}
A.tf.prototype={
k(a){return"AnnotationEntry(annotation: "+this.a.k(0)+", localPosition: "+this.b.k(0)+")"}}
A.BV.prototype={}
A.vm.prototype={
ig(){},
rw(a){var s,r=this
r.e+=a
s=t.Hb
if(s.a(A.N.prototype.gaO.call(r,r))!=null)s.a(A.N.prototype.gaO.call(r,r)).rw(a)},
nz(a){var s,r,q
for(s=this.d,s=A.aA(s.gaW(s),!0,t.M),r=s.length,q=0;q<r;++q)s[q].$0()},
m(){var s=this.z
if(s!=null)s.m()
this.z=null},
e9(){if(this.y)return
this.y=!0},
siv(a){var s,r=this,q=r.z
if(q!=null)q.m()
r.z=a
q=t.Hb
if(q.a(A.N.prototype.gaO.call(r,r))!=null){q.a(A.N.prototype.gaO.call(r,r)).toString
s=!0}else s=!1
if(s)q.a(A.N.prototype.gaO.call(r,r)).e9()},
uS(){this.y=this.y||!1},
jg(a){var s
this.e9()
s=a.e
if(s!==0)this.rw(-s)
this.vq(a)},
mP(a){var s,r,q=this,p=t.Hb.a(A.N.prototype.gaO.call(q,q))
if(p!=null){s=q.as
r=q.Q
if(s==null)p.CW=r
else s.Q=r
r=q.Q
if(r==null)p.cx=s
else r.as=s
q.Q=q.as=null
p.jg(q)
q.w.saV(0,null)}},
f0(a,b,c){return!1},
K1(a,b,c){var s=A.a([],c.i("x<tf<0>>"))
this.f0(new A.BV(s,c.i("BV<0>")),b,!0,c)
return s.length===0?null:B.c.gJ(s).a},
Sj(a){var s,r=this
if(!r.y&&r.z!=null){s=r.z
s.toString
a.a0u(s)
return}r.hy(a)
r.y=!1},
c4(){var s=this.On()
return s+(this.b==null?" DETACHED":"")}}
A.GK.prototype={
saV(a,b){var s=this.a
if(b==null?s==null:b===s)return
if(s!=null)if(--s.x===0)s.m()
this.a=b
if(b!=null)++b.x},
k(a){var s=this.a
return"LayerHandle("+(s!=null?J.db(s):"DISPOSED")+")"}}
A.JM.prototype={
sLz(a){var s
this.e9()
s=this.cx
if(s!=null)s.m()
this.cx=a},
m(){this.sLz(null)
this.D6()},
hy(a){var s=this.cx
s.toString
a.a0s(B.k,s,this.cy,this.db)},
f0(a,b,c){return!1}}
A.JF.prototype={
hy(a){a.a0r(this.cx,this.CW)
a.NF(this.cy)
a.Ny(!1)
a.Nx(!1)},
f0(a,b,c){return!1}}
A.eO.prototype={
nz(a){var s
this.OQ(a)
if(!a)return
s=this.CW
for(;s!=null;){s.nz(!0)
s=s.Q}},
a0Z(a){var s=this
s.uS()
s.hy(a)
if(s.e>0)s.nz(!0)
s.y=!1
return a.b7()},
m(){this.Bl()
this.d.a_(0)
this.D6()},
uS(){var s,r=this
r.OR()
s=r.CW
for(;s!=null;){s.uS()
r.y=r.y||s.y
s=s.Q}},
f0(a,b,c,d){var s,r,q
for(s=this.cx,r=a.a;s!=null;s=s.as){if(s.f0(a,b,!0,d))return!0
q=r.length
if(q!==0)return!1}return!1},
aw(a){var s
this.vp(a)
s=this.CW
for(;s!=null;){s.aw(a)
s=s.Q}},
ao(a){var s
this.e_(0)
s=this.CW
for(;s!=null;){s.ao(0)
s=s.Q}this.nz(!1)},
hA(a,b){var s,r=this
r.e9()
s=b.e
if(s!==0)r.rw(s)
r.CM(b)
s=b.as=r.cx
if(s!=null)s.Q=b
r.cx=b
if(r.CW==null)r.CW=b
b.w.saV(0,b)},
Bl(){var s,r,q,p=this,o=p.CW
for(s=t.Hb;o!=null;o=r){r=o.Q
o.Q=o.as=null
p.e9()
q=o.e
if(q!==0){q=-q
p.e+=q
if(s.a(A.N.prototype.gaO.call(p,p))!=null)s.a(A.N.prototype.gaO.call(p,p)).rw(q)}p.vq(o)
o.w.saV(0,null)}p.cx=p.CW=null},
hy(a){this.kn(a)},
kn(a){var s=this.CW
for(;s!=null;){s.Sj(a)
s=s.Q}}}
A.i9.prototype={
sbM(a,b){if(!b.l(0,this.p1))this.e9()
this.p1=b},
f0(a,b,c,d){return this.nf(a,b.ad(0,this.p1),!0,d)},
hy(a){var s=this,r=s.p1
s.siv(a.LK(r.a,r.b,t.Ff.a(s.z)))
s.kn(a)
a.hX()}}
A.oF.prototype={
f0(a,b,c,d){if(!this.p1.D(0,b))return!1
return this.nf(a,b,!0,d)},
hy(a){var s=this,r=s.p1
r.toString
s.siv(a.a6l(r,s.p2,t.GB.a(s.z)))
s.kn(a)
a.hX()}}
A.tI.prototype={
f0(a,b,c,d){if(!this.p1.D(0,b))return!1
return this.nf(a,b,!0,d)},
hy(a){var s=this,r=s.p1
r.toString
s.siv(a.a6j(r,s.p2,t.cW.a(s.z)))
s.kn(a)
a.hX()}}
A.tH.prototype={
f0(a,b,c,d){if(!this.p1.D(0,b))return!1
return this.nf(a,b,!0,d)},
hy(a){var s=this,r=s.p1
r.toString
s.siv(a.a6i(r,s.p2,t.L5.a(s.z)))
s.kn(a)
a.hX()}}
A.lj.prototype={
sbv(a,b){var s=this
if(b.l(0,s.aj))return
s.aj=b
s.aq=!0
s.e9()},
hy(a){var s,r,q=this
q.af=q.aj
if(!q.p1.l(0,B.k)){s=q.p1
s=A.vS(s.a,s.b,0)
r=q.af
r.toString
s.cO(0,r)
q.af=s}q.siv(a.a6n(q.af.a,t.qf.a(q.z)))
q.kn(a)
a.hX()},
a_y(a){var s,r=this
if(r.aq){s=r.aj
s.toString
r.ap=A.IJ(A.alT(s))
r.aq=!1}s=r.ap
if(s==null)return null
return A.cC(s,a)},
f0(a,b,c,d){var s=this.a_y(b)
if(s==null)return!1
return this.Pd(a,s,!0,d)}}
A.wn.prototype={
sIz(a,b){var s=this,r=s.aj
if(b!=r){if(b===255||r===255)s.siv(null)
s.aj=b
s.e9()}},
hy(a){var s,r,q,p=this
if(p.CW==null){p.siv(null)
return}s=p.aj
s.toString
r=p.p1
q=p.z
if(s<255)p.siv(a.a6m(s,r,t.Zr.a(q)))
else p.siv(a.LK(r.a,r.b,t.Ff.a(q)))
p.kn(a)
a.hX()}}
A.te.prototype={
f0(a,b,c,d){var s,r,q,p=this,o=p.nf(a,b,!0,d),n=a.a
if(n.length!==0&&!0)return o
s=p.p2
if(s!=null){r=p.p3
q=r.a
r=r.b
s=!new A.E(q,r,q+s.a,r+s.b).D(0,b)}else s=!1
if(s)return o
if(A.aG(p.$ti.c)===A.aG(d)){o=o||!1
n.push(new A.tf(d.a(p.p1),b.ad(0,p.p3),d.i("tf<0>")))}return o}}
A.P8.prototype={}
A.PC.prototype={
a6U(a){var s=this.a
this.a=a
return s},
k(a){var s="<optimized out>#",r=A.bS(this.b),q=this.a.a
return s+A.bS(this)+"("+("latestEvent: "+(s+r))+", "+("annotations: [list of "+q+"]")+")"}}
A.PD.prototype={
giq(a){var s=this.c
return s.giq(s)}}
A.IT.prototype={
FH(a){var s,r,q,p,o,n,m=t._h,l=A.i5(null,null,null,m,t.xV)
for(s=a.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q){p=s[q]
o=p.a
if(m.b(o)){n=p.b
n.toString
l.j(0,o,n)}}return l},
Ui(a,b){var s=a.b,r=s.gbB(s)
s=a.b
if(!this.b.R(0,s.giq(s)))return A.i5(null,null,null,t._h,t.xV)
return this.FH(b.$1(r))},
Fu(a){var s,r
A.azT(a)
s=a.b
r=A.o(s).i("bb<1>")
this.a.a3B(a.giq(a),a.d,A.kN(new A.bb(s,r),new A.a3N(),r.i("p.E"),t.Pb))},
a7D(a,b){var s,r,q,p,o
if(a.gcj(a)!==B.cK)return
if(t.ks.b(a))return
s=t.PB.b(a)?A.apo():b.$0()
r=a.giq(a)
q=this.b
p=q.h(0,r)
if(!A.azU(p,a))return
o=q.a
new A.a3Q(this,p,a,r,s).$0()
if(o!==0!==(q.a!==0))this.aC()},
a7x(a){new A.a3O(this,a).$0()}}
A.a3N.prototype={
$1(a){return a.gJj(a)},
$S:250}
A.a3Q.prototype={
$0(){var s=this
new A.a3P(s.a,s.b,s.c,s.d,s.e).$0()},
$S:0}
A.a3P.prototype={
$0(){var s,r,q,p,o,n=this,m=null,l=n.b
if(l==null){s=n.c
if(t.PB.b(s))return
n.a.b.j(0,n.d,new A.PC(A.i5(m,m,m,t._h,t.xV),s))}else{s=n.c
if(t.PB.b(s))n.a.b.v(0,s.giq(s))}r=n.a
q=r.b.h(0,n.d)
if(q==null){l.toString
q=l}p=q.b
q.b=s
o=t.PB.b(s)?A.i5(m,m,m,t._h,t.xV):r.FH(n.e)
r.Fu(new A.PD(q.a6U(o),o,p,s))},
$S:0}
A.a3O.prototype={
$0(){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.b,r=r.gaW(r),r=new A.e0(J.ax(r.a),r.b),q=this.b,p=A.o(r).z[1];r.t();){o=r.a
if(o==null)o=p.a(o)
n=o.b
m=s.Ui(o,q)
l=o.a
o.a=m
s.Fu(new A.PD(l,m,n,null))}},
$S:0}
A.a3L.prototype={
$2(a,b){var s
if(!this.a.R(0,a))if(a.gBO()&&a.gAN(a)!=null){s=a.gAN(a)
s.toString
s.$1(this.b.aP(this.c.h(0,a)))}},
$S:251}
A.a3M.prototype={
$1(a){return!this.a.R(0,a)},
$S:252}
A.Th.prototype={}
A.cn.prototype={
ao(a){},
k(a){return"<none>"}}
A.kX.prototype={
f8(a,b){var s,r=this
if(a.gdS()){r.ne()
if(!a.cy){s=a.ay
s===$&&A.b()
s=!s}else s=!0
if(s)A.aq4(a,null,!0)
else if(a.db)A.aAf(a)
s=a.ch.a
s.toString
t.gY.a(s)
s.sbM(0,b)
r.yA(s)}else{s=a.ay
s===$&&A.b()
if(s){a.ch.saV(0,null)
a.xz(r,b)}else a.xz(r,b)}},
yA(a){a.mP(0)
this.a.hA(0,a)},
gbJ(a){var s,r,q=this
if(q.e==null){q.c=A.aAi(q.b)
s=$.at()
r=s.a2j()
q.d=r
q.e=s.a2c(r,null)
r=q.c
r.toString
q.a.hA(0,r)}s=q.e
s.toString
return s},
ne(){var s,r=this
if(r.e==null)return
s=r.c
s.toString
s.sLz(r.d.a2Z())
r.e=r.d=r.c=null},
Cu(){var s=this.c
if(s!=null)if(!s.cy){s.cy=!0
s.e9()}},
pH(a,b,c,d){var s,r=this
if(a.CW!=null)a.Bl()
r.ne()
r.yA(a)
s=r.a2e(a,d==null?r.b:d)
b.$2(s,c)
s.ne()},
LJ(a,b,c){return this.pH(a,b,c,null)},
a2e(a,b){return new A.kX(a,b)},
kZ(a,b,c,d,e,f){var s,r,q=this
if(e===B.h){d.$2(q,b)
return null}s=c.dm(b)
if(a){if(f==null){r=new A.oF(B.S,A.y(t.S,t.M),A.az())
r.ig()}else r=f
if(!s.l(0,r.p1)){r.p1=s
r.e9()}if(e!==r.p2){r.p2=e
r.e9()}q.pH(r,d,b,s)
return r}else{q.a1o(s,e,s,new A.a4K(q,d,b))
return null}},
a6k(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.h){e.$2(p,b)
return null}s=c.dm(b)
r=d.dm(b)
if(a){if(g==null){q=new A.tI(B.nh,A.y(t.S,t.M),A.az())
q.ig()}else q=g
if(!r.l(0,q.p1)){q.p1=r
q.e9()}if(f!==q.p2){q.p2=f
q.e9()}p.pH(q,e,b,s)
return q}else{p.a1m(r,f,s,new A.a4J(p,e,b))
return null}},
LI(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.h){e.$2(p,b)
return null}s=c.dm(b)
r=d.dm(b)
if(a){if(g==null){q=new A.tH(B.nh,A.y(t.S,t.M),A.az())
q.ig()}else q=g
if(r!==q.p1){q.p1=r
q.e9()}if(f!==q.p2){q.p2=f
q.e9()}p.pH(q,e,b,s)
return q}else{p.a1l(r,f,s,new A.a4I(p,e,b))
return null}},
pI(a,b,c,d,e){var s,r=this,q=b.a,p=b.b,o=A.vS(q,p,0)
o.cO(0,c)
o.aD(0,-q,-p)
if(a){s=e==null?A.ar4(null):e
s.sbv(0,o)
r.pH(s,d,b,A.apR(o,r.b))
return s}else{q=r.gbJ(r)
q.cC(0)
q.ak(0,o.a)
d.$2(r,b)
r.gbJ(r).cz(0)
return null}},
a6o(a,b,c,d){return this.pI(a,b,c,d,null)},
B9(a,b,c,d){var s=d==null?A.aq1():d
s.sIz(0,b)
s.sbM(0,a)
this.LJ(s,c,B.k)
return s},
k(a){return"PaintingContext#"+A.f0(this)+"(layer: "+this.a.k(0)+", canvas bounds: "+this.b.k(0)+")"}}
A.a4K.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.a4J.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.a4I.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.WO.prototype={}
A.a83.prototype={
m(){var s,r=this.b
if(r!=null)this.a.as.I(0,r)
r=this.a
if(--r.at===0){s=r.as
s.b.a_(0)
s.c.a_(0)
s.d.a_(0)
s.dI()
r.as=null
r.d.$0()}}}
A.JN.prototype={
mR(){this.a.$0()},
sa77(a){var s=this.e
if(s===a)return
if(s!=null)s.ao(0)
this.e=a
a.aw(this)},
a3q(){var s,r,q,p,o,n,m,l,k,j,i,h=this
try{for(p=t.W,o=t.TT;n=h.r,n.length!==0;){s=n
h.r=A.a([],o)
n=s
m=new A.a4V()
if(!!n.immutable$list)A.L(A.P("sort"))
l=n.length-1
if(l-0<=32)A.Lz(n,0,l,m)
else A.Ly(n,0,l,m)
for(r=0;r<J.bP(s);++r){if(h.f){h.f=!1
n=h.r
if(n.length!==0){m=s
l=r
k=J.bP(s)
A.dk(l,k,J.bP(m),null,null)
j=A.aY(m)
i=new A.f3(m,l,k,j.i("f3<1>"))
i.qt(m,l,k,j.c)
B.c.K(n,i)
break}}q=J.aS(s,r)
if(q.z){n=q
n=p.a(A.N.prototype.gbz.call(n))===h}else n=!1
if(n)q.Xf()}h.f=!1}}finally{h.f=!1}},
TZ(a){try{a.$0()}finally{this.f=!0}},
a3p(){var s,r,q,p,o=this.y
B.c.dn(o,new A.a4U())
for(s=o.length,r=t.W,q=0;q<o.length;o.length===s||(0,A.Q)(o),++q){p=o[q]
if(p.CW&&r.a(A.N.prototype.gbz.call(p))===this)p.HT()}B.c.a_(o)},
a3r(){var s,r,q,p,o,n,m,l,k
try{s=this.z
this.z=A.a([],t.TT)
for(q=s,J.UA(q,new A.a4W()),p=q.length,o=t.W,n=t.gY,m=0;m<q.length;q.length===p||(0,A.Q)(q),++m){r=q[m]
if(r.cy||r.db){l=r
l=o.a(A.N.prototype.gbz.call(l))===this}else l=!1
if(l)if(r.ch.a.b!=null)if(r.cy)A.aq4(r,null,!1)
else{l=r
k=l.ch.a
k.toString
l.pW(n.a(k))
l.db=!1}else r.a_4()}}finally{}},
a3_(a){var s,r=this
if(++r.at===1){s=t.bu
r.as=new A.xx(r.c,A.b7(s),A.y(t.S,s),A.b7(s),$.bF())
r.b.$0()}if(a!=null)r.as.X(0,a)
return new A.a83(r,a)},
JQ(){return this.a3_(null)},
a3s(){var s,r,q,p,o,n,m,l,k=this
if(k.as==null)return
try{q=k.ay
p=A.aA(q,!0,A.o(q).c)
B.c.dn(p,new A.a4X())
s=p
q.a_(0)
for(q=s,o=q.length,n=t.W,m=0;m<q.length;q.length===o||(0,A.Q)(q),++m){r=q[m]
if(r.dy){l=r
l=n.a(A.N.prototype.gbz.call(l))===k}else l=!1
if(l)r.a_S()}k.as.Nv()}finally{}}}
A.a4V.prototype={
$2(a,b){return a.a-b.a},
$S:50}
A.a4U.prototype={
$2(a,b){return a.a-b.a},
$S:50}
A.a4W.prototype={
$2(a,b){return b.a-a.a},
$S:50}
A.a4X.prototype={
$2(a,b){return a.a-b.a},
$S:50}
A.B.prototype={
aK(){var s=this
s.cx=s.gdS()||s.gm_()
s.ay=s.gdS()},
f9(){var s=this
s.a9()
s.kS()
s.au()
s.b3()
s.aY(new A.a69())},
m(){this.ch.saV(0,null)},
eC(a){if(!(a.e instanceof A.cn))a.e=new A.cn()},
il(a){var s=this
s.eC(a)
s.a9()
s.kS()
s.b3()
s.CM(a)},
jg(a){var s=this
a.En()
a.e.ao(0)
a.e=null
s.vq(a)
s.a9()
s.kS()
s.b3()},
aY(a){},
re(a,b,c){A.ed(new A.bQ(b,c,"rendering library",A.bs("during "+a+"()"),new A.a65(this),!1))},
aw(a){var s=this
s.vp(a)
if(s.z&&s.Q!=null){s.z=!1
s.a9()}if(s.CW){s.CW=!1
s.kS()}if(s.cy&&s.ch.a!=null){s.cy=!1
s.au()}if(s.dy&&s.gxT().a){s.dy=!1
s.b3()}},
ga1(){var s=this.at
if(s==null)throw A.c(A.a6("A RenderObject does not have any constraints before it has been laid out."))
return s},
a9(){var s,r=this
if(r.z)return
s=r.Q
if(s==null){r.z=!0
if(r.c!=null)r.uc()
return}if(s!==r)r.uc()
else{r.z=!0
s=t.W
if(s.a(A.N.prototype.gbz.call(r))!=null){s.a(A.N.prototype.gbz.call(r)).r.push(r)
s.a(A.N.prototype.gbz.call(r)).mR()}}},
uc(){this.z=!0
var s=this.c
s.toString
t.d.a(s)
if(!this.as)s.a9()},
En(){var s=this
if(s.Q!==s){s.Q=null
s.aY(A.atD())}},
YW(){var s,r,q=this,p=q.Q
if(p===q)return
s=t.Rn.a(q.c)
r=s==null?null:s.Q
if(r!=p){q.Q=r
q.aY(A.atE())}},
Xf(){var s,r,q,p=this
try{p.bN()
p.b3()}catch(q){s=A.af(q)
r=A.aw(q)
p.re("performLayout",s,r)}p.z=!1
p.au()},
cw(a,b){var s,r,q,p,o,n,m,l=this
if(!b||l.gjY()||a.gKX()||!(l.c instanceof A.B))o=l
else{n=l.c
n.toString
n=t.d.a(n).Q
n.toString
o=n}if(!l.z&&a.l(0,l.at)){if(o!==l.Q){l.Q=o
l.aY(A.atE())}return}l.at=a
n=l.Q
if(n!=null&&o!==n)l.aY(A.atD())
l.Q=o
if(l.gjY())try{l.pD()}catch(m){s=A.af(m)
r=A.aw(m)
l.re("performResize",s,r)}try{l.bN()
l.b3()}catch(m){q=A.af(m)
p=A.aw(m)
l.re("performLayout",q,p)}l.z=!1
l.au()},
gjY(){return!1},
KO(a,b){var s=this
s.as=!0
try{t.W.a(A.N.prototype.gbz.call(s)).TZ(new A.a68(s,a,b))}finally{s.as=!1}},
gdS(){return!1},
gm_(){return!1},
pW(a){return a==null?A.aA9(B.k):a},
kS(){var s,r,q,p=this
if(p.CW)return
s=p.CW=!0
r=p.c
if(r instanceof A.B){if(r.CW)return
q=p.ay
q===$&&A.b()
if((q?!p.gdS():s)&&!r.gdS()){r.kS()
return}}s=t.W
if(s.a(A.N.prototype.gbz.call(p))!=null)s.a(A.N.prototype.gbz.call(p)).y.push(p)},
HT(){var s,r,q=this
if(!q.CW)return
s=q.cx
s===$&&A.b()
q.cx=!1
q.aY(new A.a66(q))
if(q.gdS()||q.gm_())q.cx=!0
if(!q.gdS()){r=q.ay
r===$&&A.b()}else r=!1
if(r){q.db=q.cy=!1
s=t.W.a(A.N.prototype.gbz.call(q))
if(s!=null)B.c.v(s.z,q)
q.CW=!1
q.au()}else if(s!==q.cx){q.CW=!1
q.au()}else q.CW=!1},
au(){var s,r=this
if(r.cy)return
r.cy=!0
if(r.gdS()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=t.W
if(s.a(A.N.prototype.gbz.call(r))!=null){s.a(A.N.prototype.gbz.call(r)).z.push(r)
s.a(A.N.prototype.gbz.call(r)).mR()}}else{s=r.c
if(s instanceof A.B)s.au()
else{s=t.W
if(s.a(A.N.prototype.gbz.call(r))!=null)s.a(A.N.prototype.gbz.call(r)).mR()}}},
a5s(){var s,r=this
if(r.db||r.cy)return
r.db=!0
if(r.gdS()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=t.W
if(s.a(A.N.prototype.gbz.call(r))!=null){s.a(A.N.prototype.gbz.call(r)).z.push(r)
s.a(A.N.prototype.gbz.call(r)).mR()}}else r.au()},
a_4(){var s,r=this.c
for(;r instanceof A.B;){if(r.gdS()){s=r.ch.a
if(s==null)break
if(s.b!=null)break
r.cy=!0}r=r.c}},
xz(a,b){var s,r,q,p=this
if(p.z)return
p.db=p.cy=!1
p.ay=p.gdS()
try{p.aI(a,b)}catch(q){s=A.af(q)
r=A.aw(q)
p.re("paint",s,r)}},
aI(a,b){},
dw(a,b){},
kX(a){return!0},
bC(a,b){var s,r,q,p,o,n,m,l,k=b==null
if(k){s=t.W.a(A.N.prototype.gbz.call(this)).e
if(s instanceof A.B)b=s}r=A.a([],t.TT)
q=t.d
p=this
while(p!==b){r.push(p)
o=p.c
o.toString
q.a(o)
p=o}if(!k){b.toString
r.push(b)}n=new A.bj(new Float64Array(16))
n.dk()
for(m=r.length-1;m>0;m=l){l=m-1
r[m].dw(r[l],n)}return n},
jd(a){return null},
z9(a){return null},
eV(a){},
vc(a){var s
if(t.W.a(A.N.prototype.gbz.call(this)).as==null)return
s=this.fr
if(s!=null&&!s.as)s.Nu(a)
else{s=this.c
if(s!=null)t.d.a(s).vc(a)}},
gxT(){var s,r=this
if(r.dx==null){s=A.qd()
r.dx=s
r.eV(s)}s=r.dx
s.toString
return s},
m1(){this.dy=!0
this.fr=null
this.aY(new A.a67())},
b3(){var s,r,q,p,o,n,m=this
if(m.b==null||t.W.a(A.N.prototype.gbz.call(m)).as==null){m.dx=null
return}if(m.fr!=null){s=m.dx
s=s==null?null:s.a
r=s===!0}else r=!1
m.dx=null
q=m.gxT().a&&r
s=t.d
p=m
while(!0){if(!(!q&&p.c instanceof A.B))break
if(p!==m&&p.dy)break
p.dy=!0
o=p.c
o.toString
s.a(o)
if(o.dx==null){n=A.qd()
o.dx=n
o.eV(n)}q=o.dx.a
if(q&&o.fr==null)return
p=o}if(p!==m&&m.fr!=null&&m.dy)t.W.a(A.N.prototype.gbz.call(m)).ay.v(0,m)
if(!p.dy){p.dy=!0
s=t.W
if(s.a(A.N.prototype.gbz.call(m))!=null){s.a(A.N.prototype.gbz.call(m)).ay.E(0,p)
s.a(A.N.prototype.gbz.call(m)).mR()}}},
a_S(){var s,r,q,p,o,n,m=this,l=null
if(m.z)return
s=m.fr
if(s==null)s=l
else{s=t.LQ.a(A.N.prototype.gaO.call(s,s))
if(s==null)s=l
else s=s.at||s.as}r=t.pp.a(m.Fn(s===!0))
q=A.a([],t.V)
s=m.fr
p=s==null
o=p?l:s.x
n=p?l:s.y
s=p?l:s.z
r.oj(s==null?0:s,n,o,q)
B.c.gbr(q)},
Fn(a){var s,r,q,p,o,n,m,l,k=this,j={},i=k.gxT()
j.a=i.c
s=!i.d&&!i.a
r=t.CZ
q=A.a([],r)
p=A.b7(t.pp)
k.fG(new A.a64(j,k,a||i.p2,q,p,i,s))
for(o=A.jR(p,p.r),n=A.o(o).c;o.t();){m=o.d;(m==null?n.a(m):m).Am()}k.dy=!1
if(!(k.c instanceof A.B)){o=j.a
l=new A.Rd(A.a([],r),A.a([k],t.TT),o)}else{o=j.a
if(s)l=new A.ad7(A.a([],r),o)
else{l=new A.S2(a,i,A.a([],r),A.a([k],t.TT),o)
if(i.a)l.x=!0}}l.K(0,q)
return l},
fG(a){this.aY(a)},
oc(a,b,c){a.jO(0,t.V1.a(c),b)},
iA(a,b){},
c4(){var s=A.bS(this)
return"<optimized out>#"+s},
k(a){return this.c4()},
eD(a,b,c,d){var s=this.c
if(s instanceof A.B)s.eD(a,b==null?this:b,c,d)},
n9(){return this.eD(B.aR,null,B.v,null)},
lf(a,b){return this.eD(B.aR,a,B.v,b)},
$iap:1}
A.a69.prototype={
$1(a){a.f9()},
$S:32}
A.a65.prototype={
$0(){var s=A.a([],t.F),r=this.a
s.push(A.al4("The following RenderObject was being processed when the exception was fired",B.G3,r))
s.push(A.al4("RenderObject",B.G4,r))
return s},
$S:17}
A.a68.prototype={
$0(){this.b.$1(this.c.a(this.a.ga1()))},
$S:0}
A.a66.prototype={
$1(a){var s
a.HT()
s=a.cx
s===$&&A.b()
if(s)this.a.cx=!0},
$S:32}
A.a67.prototype={
$1(a){a.m1()},
$S:32}
A.a64.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a.Fn(f.c)
if(e.a){B.c.a_(f.d)
f.e.a_(0)
if(!f.f.a)f.a.a=!0}for(s=e.gKF(),r=s.length,q=f.d,p=f.e,o=f.f,n=f.b,m=f.r,l=0;l<s.length;s.length===r||(0,A.Q)(s),++l){k=s[l]
q.push(k)
k.b.push(n)
k.a0A(o.aj)
if(o.b||!(n.c instanceof A.B)){k.Am()
continue}if(k.gkv()==null||m)continue
if(!o.KR(k.gkv()))p.E(0,k)
j=q.length-1
for(i=0;i<j;++i){h=q[i]
g=k.gkv()
g.toString
if(!g.KR(h.gkv())){p.E(0,k)
p.E(0,h)}}}},
$S:32}
A.aM.prototype={
saX(a){var s=this,r=s.C$
if(r!=null)s.jg(r)
s.C$=a
if(a!=null)s.il(a)},
jJ(){var s=this.C$
if(s!=null)this.Bi(s)},
aY(a){var s=this.C$
if(s!=null)a.$1(s)}}
A.ea.prototype={$icn:1}
A.aB.prototype={
gt0(){return this.dA$},
FP(a,b){var s,r,q,p=this,o=a.e
o.toString
s=A.o(p).i("aB.1")
s.a(o);++p.dA$
if(b==null){o=o.ab$=p.a8$
if(o!=null){o=o.e
o.toString
s.a(o).aU$=a}p.a8$=a
if(p.bG$==null)p.bG$=a}else{r=b.e
r.toString
s.a(r)
q=r.ab$
if(q==null){o.aU$=b
p.bG$=r.ab$=a}else{o.ab$=q
o.aU$=b
o=q.e
o.toString
s.a(o).aU$=r.ab$=a}}},
A4(a,b,c){this.il(b)
this.FP(b,c)},
K(a,b){},
GH(a){var s,r,q,p,o=this,n=a.e
n.toString
s=A.o(o).i("aB.1")
s.a(n)
r=n.aU$
q=n.ab$
if(r==null)o.a8$=q
else{p=r.e
p.toString
s.a(p).ab$=q}q=n.ab$
if(q==null)o.bG$=r
else{q=q.e
q.toString
s.a(q).aU$=r}n.ab$=n.aU$=null;--o.dA$},
v(a,b){this.GH(b)
this.jg(b)},
ug(a,b){var s=this,r=a.e
r.toString
if(A.o(s).i("aB.1").a(r).aU$==b)return
s.GH(a)
s.FP(a,b)
s.a9()},
jJ(){var s,r,q,p=this.a8$
for(s=A.o(this).i("aB.1");p!=null;){r=p.a
q=this.a
if(r<=q){p.a=q+1
p.jJ()}r=p.e
r.toString
p=s.a(r).ab$}},
aY(a){var s,r,q=this.a8$
for(s=A.o(this).i("aB.1");q!=null;){a.$1(q)
r=q.e
r.toString
q=s.a(r).ab$}},
ga3l(a){return this.a8$},
a1e(a){var s=a.e
s.toString
return A.o(this).i("aB.1").a(s).aU$},
a1c(a){var s=a.e
s.toString
return A.o(this).i("aB.1").a(s).ab$}}
A.Ka.prototype={
vJ(){this.a9()}}
A.ah1.prototype={}
A.ad7.prototype={
K(a,b){B.c.K(this.b,b)},
gKF(){return this.b}}
A.o6.prototype={
gKF(){return A.a([this],t.CZ)},
a0A(a){var s
if(a==null||a.a===0)return
s=this.c;(s==null?this.c=A.b7(t.g3):s).K(0,a)}}
A.Rd.prototype={
oj(a,b,c,d){var s,r,q,p,o,n=this.b,m=B.c.gJ(n)
if(m.fr==null){s=B.c.gJ(n).gn8()
r=B.c.gJ(n)
r=t.W.a(A.N.prototype.gbz.call(r)).as
r.toString
q=$.akA()
q=new A.c5(null,0,s,B.a3,q.p2,q.e,q.p3,q.f,q.af,q.p4,q.R8,q.RG,q.rx,q.ry,q.to,q.x2,q.xr,q.y1)
q.aw(r)
m.fr=q}m=B.c.gJ(n).fr
m.toString
m.saS(0,B.c.gJ(n).gjV())
p=A.a([],t.V)
for(n=this.e,s=n.length,o=0;o<n.length;n.length===s||(0,A.Q)(n),++o)n[o].oj(0,b,c,p)
m.jO(0,p,null)
d.push(m)},
gkv(){return null},
Am(){},
K(a,b){B.c.K(this.e,b)}}
A.S2.prototype={
oj(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(!h.x){s=h.b
B.c.gJ(s).fr=null
for(r=h.w,q=r.length,p=A.al(s),o=p.c,p=p.i("f3<1>"),n=0;n<r.length;r.length===q||(0,A.Q)(r),++n){m=r[n]
l=new A.f3(s,1,g,p)
l.qt(s,1,g,o)
B.c.K(m.b,l)
m.oj(a+h.f.x2,b,c,d)}return}s=h.b
if(s.length>1){k=new A.ah2()
k.Tj(c,b,s)}else k=g
r=h.e
q=!r
if(q){if(k==null)p=g
else{p=k.d
p===$&&A.b()
if(!p.gO(p)){p=k.c
p===$&&A.b()
p=p.L0()}else p=!0}p=p===!0}else p=!1
if(p)return
p=B.c.gJ(s)
if(p.fr==null)p.fr=A.a85(g,B.c.gJ(s).gn8())
j=B.c.gJ(s).fr
j.sKU(r)
j.dx=h.c
j.z=a
if(a!==0){h.F1()
r=h.f
r.sit(0,r.x2+a)}if(k!=null){r=k.d
r===$&&A.b()
j.saS(0,r)
r=k.c
r===$&&A.b()
j.sbv(0,r)
j.x=k.b
j.y=k.a
if(q&&k.e){h.F1()
h.f.bc(B.lL,!0)}}i=A.a([],t.V)
for(r=h.w,q=r.length,n=0;n<r.length;r.length===q||(0,A.Q)(r),++n){m=r[n]
p=j.x
m.oj(0,j.y,p,i)}r=h.f
if(r.a)B.c.gJ(s).oc(j,h.f,i)
else j.jO(0,i,r)
d.push(j)},
gkv(){return this.x?null:this.f},
K(a,b){var s,r,q,p,o,n,m=this
for(s=b.length,r=m.w,q=0;q<b.length;b.length===s||(0,A.Q)(b),++q){p=b[q]
r.push(p)
if(p.gkv()==null)continue
if(!m.r){m.f=m.f.a1T()
m.r=!0}o=m.f
n=p.gkv()
n.toString
o.km(n)}},
F1(){var s,r,q=this
if(!q.r){s=q.f
r=A.qd()
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
r.af=s.af
r.aj=s.aj
r.y2=s.y2
r.bL=s.bL
r.bt=s.bt
r.b9=s.b9
r.f=s.f
r.k1=s.k1
r.k3=s.k3
r.k2=s.k2
r.k4=s.k4
r.ok=s.ok
r.p1=s.p1
r.e.K(0,s.e)
r.p3.K(0,s.p3)
q.f=r
q.r=!0}},
Am(){this.x=!0}}
A.ah2.prototype={
Tj(a,b,c){var s,r,q,p,o,n,m=this,l=new A.bj(new Float64Array(16))
l.dk()
m.c=l
m.b=a
m.a=b
for(s=c.length-1;s>0;){r=c[s];--s
q=c[s]
a=r.z9(q)
if(a!=null){m.b=a
m.a=A.ary(m.a,r.jd(q))}else m.b=A.ary(m.b,r.jd(q))
l=$.av6()
l.dk()
A.aD9(r,q,m.c,l)
m.b=A.arz(m.b,l)
m.a=A.arz(m.a,l)}p=B.c.gJ(c)
l=m.b
l=l==null?p.gjV():l.fz(p.gjV())
m.d=l
o=m.a
if(o!=null){n=o.fz(l)
if(n.gO(n)){l=m.d
l=!l.gO(l)}else l=!1
m.e=l
if(!l)m.d=n}}}
A.QV.prototype={}
A.iv.prototype={
k(a){var s=A.a(["offset="+this.a.k(0)],t.s)
s.push(this.qo(0))
return B.c.b6(s,"; ")}}
A.wY.prototype={
eC(a){if(!(a.e instanceof A.iv))a.e=new A.iv(null,null,B.k)},
scs(a,b){var s=this,r=s.M
switch(r.d.aG(0,b).a){case 0:case 1:return
case 2:r.scs(0,b)
s.ac=s.ag=null
s.wC(b)
s.au()
s.b3()
break
case 3:r.scs(0,b)
s.ac=s.ag=s.by=null
s.wC(b)
s.a9()
s.xG()
s.ES()
s.I8()
break}},
spK(a){var s=this
if(a==s.b2)return
s.xG()
s.ES()
s.b2=a
s.I8()},
I8(){var s,r,q=this
if(q.b2==null)return
s=q.aA
if(s==null)s=q.aA=q.UX()
r=q.b2
B.c.Z(s,r.gfn(r))},
xG(){var s,r=this.b2
if(r==null||this.aA==null)return
s=this.aA
s.toString
B.c.Z(s,r.gBk(r))},
UX(){var s,r,q,p,o=this.M.d.Mo(!1),n=A.a([],t.lb)
for(s=o.length,r=0;r<s;){q=B.b.hO(o,$.auo(),r)
if(r!==q){if(q===-1)q=s
p=new A.jS(new A.f4(r,q),this,o,$.bF())
p.w=p.Fm()
n.push(p)
r=q}++r}return n},
ES(){var s,r,q,p=this.aA
if(p==null)return
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.Q)(p),++r){q=p[r]
q.af$=$.bF()
q.aj$=0}this.aA=null},
a9(){var s=this.aA
if(s!=null)B.c.Z(s,new A.a6e())
this.Pv()},
m(){var s=this
s.xG()
s.aA=null
s.M.m()
s.ie()},
wC(a){this.ba=A.a([],t.TP)
a.aY(new A.a6b(this))},
sBs(a,b){var s=this.M
if(s.f===b)return
s.sBs(0,b)
this.au()},
sbO(a){var s=this.M
if(s.r===a)return
s.sbO(a)
this.a9()},
sNT(a){if(this.C===a)return
this.C=a
this.a9()},
sa64(a,b){var s,r=this
if(r.ai===b)return
r.ai=b
s=b===B.bo?"\u2026":null
r.M.sa2V(s)
r.a9()},
sBt(a){var s=this.M
if(s.w===a)return
s.sBt(a)
this.by=null
this.a9()},
sAp(a){var s=this.M
if(s.z==a)return
s.sAp(a)
this.by=null
this.a9()},
sAk(a,b){var s=this.M
if(J.f(s.y,b))return
s.sAk(0,b)
this.by=null
this.a9()},
sO1(a){return},
sBu(a){var s=this.M
if(s.as===a)return
s.sBu(a)
this.by=null
this.a9()},
sMi(a){return},
sNq(a){var s,r=this
if(J.f(r.cK,a))return
r.cK=a
s=r.aA
s=s==null?null:B.c.ko(s,new A.a6g())
if(s===!0)r.au()},
qK(a){var s,r=this,q=r.C3(a,B.a3)
r.j0(t.k.a(A.B.prototype.ga1.call(r)))
s=r.M
s.Ey(a,B.a3)
s=s.db
s===$&&A.b()
s=s.b
return q.V(0,new A.t(0,s==null?0:s))},
eS(a){this.j0(t.k.a(A.B.prototype.ga1.call(this)))
return this.M.eS(B.L)},
jv(a){return!0},
d_(a,b){var s,r,q,p,o,n,m,l,k,j={},i=this.M,h=i.a.i3(b),g=i.d.Na(h)
if(g!=null&&!0){a.E(0,new A.i_(t.zE.a(g),t.AL))
s=!0}else s=!1
r=j.a=this.a8$
q=A.o(this).i("aB.1")
p=t.tq
o=0
while(!0){if(!(r!=null&&o<i.ax.length))break
r=r.e
r.toString
p.a(r)
n=r.a
m=new Float64Array(16)
l=new A.bj(m)
l.dk()
m[14]=0
m[13]=n.b
m[12]=n.a
n=r.e
l.i5(0,n,n,n)
if(a.yv(new A.a6d(j,b,r),b,l))return!0
r=j.a.e
r.toString
k=q.a(r).ab$
j.a=k;++o
r=k}return s},
FY(a,b){var s=this.C||this.ai===B.bo?a:1/0
this.M.Ah(s,b)},
vJ(){var s=this,r=$.bJ,q=r.dy$
switch(q.a){case 0:case 4:if(s.eY)return
s.eY=!0
r.qf(new A.a6h(s,q))
break
case 1:case 2:case 3:s.Dl()
s.M.a9()
break}},
j0(a){this.M.vi(this.e5)
this.FY(a.b,a.a)},
FW(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.dA$
if(i===0)return A.a([],t.tZ)
s=j.a8$
r=A.aW(i,B.Ur,!1,t.jP)
q=new A.aT(0,a.b,0,1/0).d4(0,j.M.w)
for(i=A.o(j).i("aB.1"),p=!b,o=0;s!=null;){if(p){s.cw(q,!0)
n=s.k3
n.toString
m=j.ba
m===$&&A.b()
switch(m[o].geo()){case B.lu:l=s.MW(j.ba[o].grR())
break
case B.lv:case B.lw:case B.fF:case B.ly:case B.lx:l=null
break
default:l=null}k=n}else{k=s.hd(q)
l=null}n=j.ba
n===$&&A.b()
r[o]=new A.n1(k,n[o].geo(),l,j.ba[o].grR())
n=s.e
n.toString
s=i.a(n).ab$;++o}return r},
Xe(a){return this.FW(a,!1)},
ZS(){var s,r,q=this.a8$,p=t.tq,o=this.M,n=A.o(this).i("aB.1"),m=0
while(!0){if(!(q!=null&&m<o.ax.length))break
s=q.e
s.toString
p.a(s)
r=o.ax[m]
s.a=new A.t(r.a,r.b)
s.e=o.ay[m]
q=n.a(s).ab$;++m}},
SP(){var s,r,q=this.ba
q===$&&A.b()
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.Q)(q),++r)switch(q[r].geo()){case B.lu:case B.lv:case B.lw:return!1
case B.lx:case B.ly:case B.fF:continue}return!0},
cg(a){var s,r,q=this
if(!q.SP())return B.W
s=q.M
s.vi(q.FW(a,!0))
q.FY(a.b,a.a)
r=s.gbq(s)
s=s.a
return a.bF(new A.a9(r,Math.ceil(s.gbV(s))))},
bN(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=t.k.a(A.B.prototype.ga1.call(i))
i.e5=i.Xe(g)
i.j0(g)
i.ZS()
s=i.M
r=s.gbq(s)
q=s.a
q=Math.ceil(q.gbV(q))
p=s.a.ga2K()
o=i.k3=g.bF(new A.a9(r,q))
n=o.b<q||p
m=o.a<r
if(m||n)switch(i.ai.a){case 3:i.b5=!1
i.by=null
break
case 0:case 2:i.b5=!0
i.by=null
break
case 1:i.b5=!0
r=A.qF(h,s.d.a,"\u2026")
q=s.r
q.toString
o=s.w
l=A.abv(h,s.y,h,h,r,B.bM,q,h,o,B.aW)
l.a5e()
if(m){switch(s.r.a){case 0:k=l.gbq(l)
j=0
break
case 1:j=i.k3.a
k=j-l.gbq(l)
break
default:k=h
j=k}i.by=A.alr(new A.t(k,0),new A.t(j,0),A.a([B.l,B.nj],t.t_),h,B.bN,h)}else{j=i.k3.b
s=l.a
i.by=A.alr(new A.t(0,j-Math.ceil(s.gbV(s))/2),new A.t(0,j),A.a([B.l,B.nj],t.t_),h,B.bN,h)}l.m()
break}else{i.b5=!1
i.by=null}},
aI(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e={}
f.j0(t.k.a(A.B.prototype.ga1.call(f)))
if(f.b5){s=f.k3
r=b.a
q=b.b
p=new A.E(r,q,r+s.a,q+s.b)
if(f.by!=null)a.gbJ(a).Cf(p,$.at().bn())
else a.gbJ(a).cC(0)
a.gbJ(a).kt(p)}s=f.M
s.aI(a.gbJ(a),b)
r=e.a=f.a8$
q=t.tq
o=b.a
n=b.b
m=A.o(f).i("aB.1")
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
a.a6o(j,new A.t(o+r.a,n+r.b),A.vR(k,k,k),new A.a6f(e))
k=e.a.e
k.toString
i=m.a(k).ab$
e.a=i;++l
r=i}if(f.b5){if(f.by!=null){a.gbJ(a).aD(0,o,n)
h=$.at().bn()
h.sa0T(B.Dd)
h.sCy(f.by)
s=a.gbJ(a)
r=f.k3
s.cm(new A.E(0,0,0+r.a,0+r.b),h)}a.gbJ(a).cz(0)}s=f.aA
if(s!=null)for(r=s.length,g=0;g<s.length;s.length===r||(0,A.Q)(s),++g)s[g].aI(a,b)
f.PC(a,b)},
C3(a,b){var s
this.j0(t.k.a(A.B.prototype.ga1.call(this)))
s=this.M
s.Ey(a,b)
s=s.db
s===$&&A.b()
return s.a},
BX(a){this.j0(t.k.a(A.B.prototype.ga1.call(this)))
return this.M.a.uX(a.a,a.b,B.my,B.hl)},
i3(a){this.j0(t.k.a(A.B.prototype.ga1.call(this)))
return this.M.a.i3(a)},
n0(a){this.j0(t.k.a(A.B.prototype.ga1.call(this)))
return this.M.a.n0(a)},
eV(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.hk(a)
s=d.M
r=s.d
r.toString
q=A.a([],t.O_)
r.a1G(q)
d.cY=q
if(B.c.ko(q,new A.a6c()))a.a=a.b=!0
else{r=d.ag
if(r==null){p=new A.bD("")
o=A.a([],t.oU)
for(r=d.cY,n=r.length,m=0,l=0,k="";l<r.length;r.length===n||(0,A.Q)(r),++l){j=r[l]
i=j.b
if(i==null)i=j.a
for(k=j.f,h=k.length,g=0;g<k.length;k.length===h||(0,A.Q)(k),++g){f=k[g]
e=f.a
o.push(f.J5(new A.f4(m+e.a,m+e.b)))}k=p.a+=i
m+=i.length}r=d.ag=new A.cx(k.charCodeAt(0)==0?k:k,o)}a.p4=r
a.d=!0
s=s.r
s.toString
a.y1=s}},
oc(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=A.a([],t.V),b0=a7.M,b1=b0.r
b1.toString
s=A.i5(a8,a8,a8,t.D2,t.bu)
r=a7.ac
if(r==null){r=a7.cY
r.toString
r=a7.ac=A.aFB(r)}for(q=r.length,p=t.k,o=b1,n=0,m=0,l=0;l<r.length;r.length===q||(0,A.Q)(r),++l,m=j){k=r[l]
b1=k.a
j=m+b1.length
i=m<j
h=i?m:j
i=i?j:m
g=p.a(A.B.prototype.ga1.call(a7))
b0.vi(a7.e5)
f=g.b
f=a7.C||a7.ai===B.bo?f:1/0
b0.Ah(f,g.a)
e=b0.a.uX(h,i,B.my,B.hl)
if(e.length===0)continue
i=B.c.gJ(e)
d=new A.E(i.a,i.b,i.c,i.d)
c=B.c.gJ(e).e
for(i=A.al(e),h=new A.f3(e,1,a8,i.i("f3<1>")),h.qt(e,1,a8,i.c),h=new A.c2(h,h.gp(h)),i=A.o(h).c;h.t();){g=h.d
if(g==null)g=i.a(g)
d=d.oO(new A.E(g.a,g.b,g.c,g.d))
c=g.e}i=d.a
h=Math.max(0,i)
g=d.b
f=Math.max(0,g)
i=Math.min(d.c-i,p.a(A.B.prototype.ga1.call(a7)).b)
g=Math.min(d.d-g,p.a(A.B.prototype.ga1.call(a7)).d)
b=Math.floor(h)-4
a=Math.floor(f)-4
i=Math.ceil(h+i)+4
g=Math.ceil(f+g)+4
a0=new A.E(b,a,i,g)
a1=A.qd()
a2=n+1
a1.id=new A.wo(n,a8)
a1.d=!0
a1.y1=o
f=k.b
b1=f==null?b1:f
a1.p4=new A.cx(b1,k.f)
b1=b2.y
if(b1!=null){a3=b1.fz(a0)
if(a3.a>=a3.c||a3.b>=a3.d)b1=!(b>=i||a>=g)
else b1=!1
a1.bc(B.lL,b1)}a4=A.b8("newChild")
b1=a7.cL
i=b1==null?a8:b1.a!==0
if(i===!0){b1.toString
i=new A.bb(b1,A.o(b1).i("bb<1>"))
a5=i.ga5(i)
if(!a5.t())A.L(A.bW())
b1=b1.v(0,a5.gH(a5))
b1.toString
if(a4.b!==a4)A.L(A.a2L(a4.a))
a4.b=b1}else{a6=new A.jH()
b1=A.a85(a6,a7.Ty(a6))
if(a4.b!==a4)A.L(A.a2L(a4.a))
a4.b=b1}if(b1===a4)A.L(A.he(a4.a))
J.awG(b1,a1)
if(!b1.w.l(0,a0)){b1.w=a0
b1.ik()}b1=a4.b
if(b1===a4)A.L(A.he(a4.a))
i=b1.d
i.toString
s.j(0,i,b1)
b1=a4.b
if(b1===a4)A.L(A.he(a4.a))
a9.push(b1)
n=a2
o=c}a7.cL=s
b2.jO(0,a9,b3)},
Ty(a){return new A.a6a(this,a)},
m1(){this.vC()
this.cL=null}}
A.a6e.prototype={
$1(a){return a.x=null},
$S:256}
A.a6b.prototype={
$1(a){return!0},
$S:54}
A.a6g.prototype={
$1(a){var s=a.w
s===$&&A.b()
return s.c!==B.cR},
$S:257}
A.a6d.prototype={
$2(a,b){return this.a.a.c_(a,b)},
$S:18}
A.a6h.prototype={
$1(a){var s=this.a
s.eY=!1
if(s.b!=null){s.Dl()
s.M.a9()}},
$S:2}
A.a6f.prototype={
$2(a,b){var s=this.a.a
s.toString
a.f8(s,b)},
$S:11}
A.a6c.prototype={
$1(a){return!1},
$S:258}
A.a6a.prototype={
$0(){var s=this.a,r=s.cL.h(0,this.b)
r.toString
s.lf(s,r.w)},
$S:0}
A.jS.prototype={
gn(a){var s=this.w
s===$&&A.b()
return s},
Ys(){var s=this,r=s.Fm(),q=s.w
q===$&&A.b()
if(q.l(0,r))return
s.w=r
s.aC()},
Fm(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f==null||g.e==null)return B.V3
s=f.a
r=g.e.a
f=g.b
q=f.qK(new A.b4(s,B.F))
p=s===r?q:f.qK(new A.b4(r,B.F))
f=f.M
o=f.r
o.toString
n=s>r!==(B.a1===o)
m=A.vS(g.gfO().a,g.gfO().b,0)
m.hD(m)
o=A.cC(m,q)
l=f.guz()
k=n?B.Cp:B.Co
j=A.cC(m,p)
f=f.guz()
i=n?B.Co:B.Cp
h=g.d.a===g.e.a?B.V5:B.lK
return new A.la(new A.nt(o,l,k),new A.nt(j,f,i),h,!0)},
tn(a){var s=this,r=A.b8("result"),q=s.d,p=s.e,o=a.a
switch(o.a){case 0:case 1:r.sc9(s.a_R(t.mb.a(a).b,o===B.dQ))
break
case 2:s.e=s.d=null
r.sc9(B.cQ)
break
case 3:o=s.a
s.d=new A.b4(o.a,B.F)
s.e=new A.b4(o.b,B.R)
r.sc9(B.cQ)
break
case 4:r.sc9(s.Wr(t.hI.a(a).gCb()))
break
case 5:t.rQ.a(a)
r.sc9(s.VL(a.gKb(a),a.gh5(),a.ga7U()))
break
case 6:t.ra.a(a)
r.sc9(s.Vr(a.gzs(a),a.gh5(),a.gJt(a)))
break}if(!J.f(q,s.d)||!J.f(p,s.e)){s.b.au()
s.Ys()}return r.aF()},
a_R(a,b){var s,r,q,p,o,n,m=this
if(b)m.e=null
else m.d=null
s=m.b
r=s.bC(0,null)
r.hD(r)
q=A.cC(r,a)
p=m.gfO()
if(p.gO(p))return A.aqE(m.gfO(),q)
p=m.gfO()
o=s.M.r
o.toString
n=m.qw(s.i3(A.aBs(p,q,o)))
if(b)m.e=n
else m.d=n
s=n.a
p=m.a
if(s===p.b)return B.bb
if(s===p.a)return B.bc
return A.aqE(m.gfO(),q)},
qw(a){var s,r=a.a,q=this.a,p=q.b
if(r<=p)s=r===p&&a.b===B.F
else s=!0
if(s)return new A.b4(p,B.R)
q=q.a
if(r<q)return new A.b4(q,B.F)
return a},
Wr(a){var s,r,q,p,o=this,n=o.b,m=n.i3(n.la(a))
if(o.YN(m))return B.aw
s=n.n0(m)
r=A.b8("start")
q=A.b8("end")
n=m.a
p=s.b
if(n>=p)r.b=q.b=new A.b4(n,B.F)
else{r.b=new A.b4(s.a,B.F)
q.b=new A.b4(p,B.R)}o.d=r.aF()
o.e=q.aF()
return B.aw},
Vr(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.bC(0,null)
if(j.hD(j)===0)switch(c){case B.fJ:case B.dS:return B.bc
case B.fK:case B.dR:return B.bb}s=A.cC(j,new A.t(a,0)).a
switch(c){case B.fJ:case B.fK:if(b){k=l.e
k.toString
r=k}else{k=l.d
k.toString
r=k}q=l.WN(r,!1,s)
p=q.a
o=q.b
break
case B.dR:case B.dS:n=l.e
if(n==null){n=new A.b4(l.a.b,B.R)
l.e=n
r=n}else r=n
n=l.d
if(n==null){l.d=r
m=r}else m=n
p=k.i3(new A.t(s,k.qK(b?r:m).b-k.M.guz()/2))
o=B.aw
break
default:p=null
o=null}if(b)l.e=p
else l.d=p
return o},
VL(a,b,c){var s,r,q,p,o,n,m=this,l=m.e
if(l==null){l=m.a
l=a?new A.b4(l.a,B.F):new A.b4(l.b,B.R)
m.e=l
s=l}else s=l
l=m.d
if(l==null){m.d=s
r=s}else r=l
s=b?s:r
if(a&&s.a===m.a.b)return B.bb
l=!a
if(l&&s.a===m.a.a)return B.bc
switch(c){case B.WS:l=m.a
q=m.qJ(new A.Wt(B.b.U(m.c,l.a,l.b)),s,a)
p=B.aw
break
case B.WT:l=m.a
q=m.qJ(new A.Og(new A.acf(m),new A.acd(B.b.U(m.c,l.a,l.b))),s,a)
p=B.aw
break
case B.WU:q=m.qJ(new A.a2O(m),s,a)
p=B.aw
break
case B.WV:o=m.a
n=o.a
o=o.b
q=m.qJ(new A.XT(B.b.U(m.c,n,o)),s,a)
if(a&&q.a===o)p=B.bb
else p=l&&q.a===n?B.bc:B.aw
break
default:p=null
q=null}if(b)m.e=q
else m.d=q
return p},
qJ(a,b,c){if(c)return this.qw(a.hf(B.Uz.hf(b)))
return this.qw(a.he(B.Uy.he(b)))},
WN(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.M,i=j.fr
if(i==null)i=j.fr=j.a.a1F()
s=k.C3(a,B.a3)
j=i.length
r=j-1
for(q=s.b,p=0;p<i.length;i.length===j||(0,A.Q)(i),++p){o=i[p]
if(o.grR()>q){r=J.awf(o)
break}}if(b&&r===i.length-1)n=new A.b4(l.a.b,B.R)
else if(!b&&r===0)n=new A.b4(l.a.a,B.F)
else n=l.qw(k.i3(new A.t(c,i[b?r+1:r-1].grR())))
k=n.a
j=l.a
if(k===j.a)m=B.bc
else m=k===j.b?B.bb:B.aw
return new A.ao(n,m,t.UH)},
YN(a){var s,r,q,p,o=this
if(o.d==null||o.e==null)return!1
s=A.b8("currentStart")
r=A.b8("currentEnd")
q=o.d
q.toString
p=o.e
p.toString
if(A.amD(q,p)>0){s.b=q
r.b=p}else{s.b=p
r.b=q}return A.amD(s.aF(),a)>=0&&A.amD(r.aF(),a)<=0},
bC(a,b){var s=A.vS(this.gfO().a,this.gfO().b,0)
s.cO(0,this.b.bC(0,b))
return s},
hY(a,b){if(this.b.b==null)return},
gfO(){var s,r,q,p,o,n,m=this,l=m.x
if(l==null){l=m.b
s=m.a
r=s.a
q=l.BX(A.abw(B.F,r,s.b,!1))
if(q.length!==0){l=B.c.gJ(q)
p=new A.E(l.a,l.b,l.c,l.d)
for(o=1;o<q.length;++o){l=q[o]
p=p.oO(new A.E(l.a,l.b,l.c,l.d))}m.x=p
l=p}else{n=l.qK(new A.b4(r,B.F))
l=A.am_(n,new A.t(n.a+0,n.b+-l.M.guz()))
m.x=l}}return l},
gcS(a){var s=this.gfO()
return new A.a9(s.c-s.a,s.d-s.b)},
aI(a,b){var s,r,q,p,o,n=this,m=n.d
if(m==null||n.e==null)return
s=n.b
if(s.cK!=null){r=A.abw(B.F,m.a,n.e.a,!1)
q=$.at().bn()
q.scE(0,B.aV)
m=s.cK
m.toString
q.san(0,m)
for(m=s.BX(r),s=m.length,p=0;p<m.length;m.length===s||(0,A.Q)(m),++p){o=m[p]
a.gbJ(a).cm(new A.E(o.a,o.b,o.c,o.d).dm(b),q)}}A.vS(n.gfO().a,n.gfO().b,0)},
C1(a){var s=this.b.M.a.MZ(a),r=this.a,q=r.a
r=r.b
return A.abw(B.F,B.f.jb(s.a,q,r),B.f.jb(s.b,q,r),!1)},
$iag:1}
A.zW.prototype={
aw(a){var s,r,q
this.eG(a)
s=this.a8$
for(r=t.tq;s!=null;){s.aw(a)
q=s.e
q.toString
s=r.a(q).ab$}},
ao(a){var s,r,q
this.e_(0)
s=this.a8$
for(r=t.tq;s!=null;){s.ao(0)
q=s.e
q.toString
s=r.a(q).ab$}}}
A.QW.prototype={}
A.QX.prototype={
aw(a){this.QF(a)
$.f_.zC$.a.E(0,this.gDA())},
ao(a){$.f_.zC$.a.v(0,this.gDA())
this.QG(0)}}
A.Tt.prototype={}
A.Tu.prototype={}
A.Kx.prototype={
sa63(a){if(a===this.M)return
this.M=a
this.au()},
sa6s(a){if(a===this.ag)return
this.ag=a
this.au()},
sa1a(a){return},
sa19(a){return},
gjY(){return!0},
gm_(){return!0},
gX5(){var s=this.M,r=(s|1)>>>0>0||(s|2)>>>0>0?80:0
return(s|4)>>>0>0||(s|8)>>>0>0?r+80:r},
cg(a){return a.bF(new A.a9(1/0,this.gX5()))},
aI(a,b){var s=b.a,r=b.b,q=this.k3
q=new A.JF(new A.E(s,r,s+q.a,r+q.b),this.M,this.ag,!1,!1,A.y(t.S,t.M),A.az())
q.ig()
a.ne()
a.yA(q)}}
A.KC.prototype={}
A.eA.prototype={
eC(a){if(!(a.e instanceof A.cn))a.e=new A.cn()},
cg(a){var s=this.C$
if(s!=null)return s.hd(a)
return this.ol(a)},
bN(){var s=this,r=s.C$,q=t.k
if(r!=null){r.cw(q.a(A.B.prototype.ga1.call(s)),!0)
r=s.C$.k3
r.toString
s.k3=r}else s.k3=s.ol(q.a(A.B.prototype.ga1.call(s)))},
ol(a){return new A.a9(A.K(0,a.a,a.b),A.K(0,a.c,a.d))},
d_(a,b){var s=this.C$
s=s==null?null:s.c_(a,b)
return s===!0},
dw(a,b){},
aI(a,b){var s=this.C$
if(s!=null)a.f8(s,b)}}
A.pb.prototype={
G(){return"HitTestBehavior."+this.b}}
A.wZ.prototype={
c_(a,b){var s,r=this
if(r.k3.D(0,b)){s=r.d_(a,b)||r.A===B.aK
if(s||r.A===B.bX)a.E(0,new A.oy(b,r))}else s=!1
return s},
jv(a){return this.A===B.aK}}
A.Kh.prototype={
sIx(a){if(this.A.l(0,a))return
this.A=a
this.a9()},
bN(){var s=this,r=t.k.a(A.B.prototype.ga1.call(s)),q=s.C$,p=s.A
if(q!=null){q.cw(p.oL(r),!0)
q=s.C$.k3
q.toString
s.k3=q}else s.k3=p.oL(r).bF(B.W)},
cg(a){var s=this.C$,r=this.A
if(s!=null)return s.hd(r.oL(a))
else return r.oL(a).bF(B.W)}}
A.Kr.prototype={
sa5z(a,b){if(this.A===b)return
this.A=b
this.a9()},
sa5w(a,b){if(this.S===b)return
this.S=b
this.a9()},
FZ(a){var s,r,q=a.a,p=a.b
p=p<1/0?p:A.K(this.A,q,p)
s=a.c
r=a.d
return new A.aT(q,p,s,r<1/0?r:A.K(this.S,s,r))},
EB(a,b){var s=this.C$
if(s!=null)return a.bF(b.$2(s,this.FZ(a)))
return this.FZ(a).bF(B.W)},
cg(a){return this.EB(a,A.ak_())},
bN(){this.k3=this.EB(t.k.a(A.B.prototype.ga1.call(this)),A.ak0())}}
A.Kv.prototype={
gm_(){return this.C$!=null&&this.A>0},
smL(a,b){var s,r,q,p,o=this
if(o.S===b)return
s=o.C$!=null
r=s&&o.A>0
q=o.A
o.S=b
p=B.d.b0(A.Uc(b,0,1)*255)
o.A=p
if(r!==(s&&p>0))o.kS()
o.au()
if(q!==0!==(o.A!==0)&&!0)o.b3()},
srP(a){return},
kX(a){return this.A>0},
aI(a,b){var s,r,q=this
if(q.C$==null)return
s=q.A
if(s===0){q.ch.saV(0,null)
return}r=q.ch
r.saV(0,a.B9(b,s,A.eA.prototype.gkW.call(q),t.Jq.a(r.a)))},
fG(a){var s,r=this.C$
if(r!=null)s=this.A!==0||!1
else s=!1
if(s){r.toString
a.$1(r)}}}
A.wU.prototype={
gdS(){if(this.C$!=null){var s=this.kG$
s.toString}else s=!1
return s},
pW(a){var s=a==null?A.aq1():a
s.sIz(0,this.me$)
return s},
smL(a,b){var s=this,r=s.hI$
if(r===b)return
if(s.b!=null&&r!=null)r.I(0,s.grt())
s.hI$=b
if(s.b!=null)b.X(0,s.grt())
s.yd()},
srP(a){if(!1===this.zB$)return
this.zB$=!1
this.b3()},
yd(){var s,r=this,q=r.me$,p=r.hI$
p=r.me$=B.d.b0(A.Uc(p.gn(p),0,1)*255)
if(q!==p){s=r.kG$
p=p>0
r.kG$=p
if(r.C$!=null&&s!==p)r.kS()
r.a5s()
if(q===0||r.me$===0)r.b3()}},
kX(a){var s=this.hI$
return s.gn(s)>0},
fG(a){var s,r=this.C$
if(r!=null)if(this.me$===0){s=this.zB$
s.toString}else s=!0
else s=!1
if(s){r.toString
a.$1(r)}}}
A.Kd.prototype={}
A.tW.prototype={
X(a,b){return null},
I(a,b){return null},
k(a){return"CustomClipper"}}
A.nw.prototype={
BY(a){return this.b.fI(new A.E(0,0,0+a.a,0+a.b),this.c)},
CA(a){if(A.C(a)!==B.a01)return!0
t.jH.a(a)
return!a.b.l(0,this.b)||a.c!=this.c}}
A.rz.prototype={
soi(a){var s,r=this,q=r.A
if(q==a)return
r.A=a
s=a==null
if(s||q==null||A.C(a)!==A.C(q)||a.CA(q))r.qY()
if(r.b!=null){if(q!=null)q.I(0,r.gqX())
if(!s)a.X(0,r.gqX())}},
aw(a){var s
this.nj(a)
s=this.A
if(s!=null)s.X(0,this.gqX())},
ao(a){var s=this.A
if(s!=null)s.I(0,this.gqX())
this.lr(0)},
qY(){this.S=null
this.au()
this.b3()},
st2(a){if(a!==this.aB){this.aB=a
this.au()}},
bN(){var s,r=this,q=r.k3
q=q!=null?q:null
r.vF()
s=r.k3
s.toString
if(!J.f(q,s))r.S=null},
j7(){var s,r,q=this
if(q.S==null){s=q.A
if(s==null)s=null
else{r=q.k3
r.toString
r=s.BY(r)
s=r}q.S=s==null?q.gqz():s}},
jd(a){var s,r=this
switch(r.aB.a){case 0:return null
case 1:case 2:case 3:if(r.A==null)s=null
else{s=r.k3
s=new A.E(0,0,0+s.a,0+s.b)}if(s==null){s=r.k3
s=new A.E(0,0,0+s.a,0+s.b)}return s}},
m(){this.cn=null
this.ie()}}
A.Kg.prototype={
gqz(){var s=this.k3
return new A.E(0,0,0+s.a,0+s.b)},
c_(a,b){var s=this
if(s.A!=null){s.j7()
if(!s.S.D(0,b))return!1}return s.iV(a,b)},
aI(a,b){var s,r,q=this,p=q.C$
if(p!=null){s=q.ch
if(q.aB!==B.h){q.j7()
p=q.cx
p===$&&A.b()
r=q.S
r.toString
s.saV(0,a.kZ(p,b,r,A.eA.prototype.gkW.call(q),q.aB,t.EM.a(s.a)))}else{a.f8(p,b)
s.saV(0,null)}}else q.ch.saV(0,null)}}
A.Kf.prototype={
gqz(){var s=$.at().cq(),r=this.k3
s.o3(new A.E(0,0,0+r.a,0+r.b))
return s},
c_(a,b){var s=this
if(s.A!=null){s.j7()
if(!s.S.D(0,b))return!1}return s.iV(a,b)},
aI(a,b){var s,r,q,p,o=this,n=o.C$
if(n!=null){s=o.ch
if(o.aB!==B.h){o.j7()
n=o.cx
n===$&&A.b()
r=o.k3
q=r.a
r=r.b
p=o.S
p.toString
s.saV(0,a.LI(n,b,new A.E(0,0,0+q,0+r),p,A.eA.prototype.gkW.call(o),o.aB,t.JG.a(s.a)))}else{a.f8(n,b)
s.saV(0,null)}}else o.ch.saV(0,null)}}
A.zX.prototype={
sit(a,b){if(this.cr===b)return
this.cr=b
this.au()},
shg(a,b){if(this.dc.l(0,b))return
this.dc=b
this.au()},
san(a,b){if(this.h0.l(0,b))return
this.h0=b
this.au()},
eV(a){this.hk(a)
a.sit(0,this.cr)}}
A.Ky.prototype={
sdl(a,b){if(this.kG===b)return
this.kG=b
this.qY()},
sa0V(a,b){if(J.f(this.hI,b))return
this.hI=b
this.qY()},
gqz(){var s,r,q=this.k3,p=0+q.a
q=0+q.b
switch(this.kG.a){case 0:s=this.hI
if(s==null)s=B.aG
return s.dG(new A.E(0,0,p,q))
case 1:s=(p-0)/2
r=(q-0)/2
return new A.ii(0,0,p,q,s,r,s,r,s,r,s,r,s===r)}},
c_(a,b){var s=this
if(s.A!=null){s.j7()
if(!s.S.D(0,b))return!1}return s.iV(a,b)},
aI(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.C$==null){i.ch.saV(0,null)
return}i.j7()
s=i.S.dm(b)
r=$.at()
q=r.cq()
q.eP(s)
p=a.gbJ(a)
if(i.cr!==0&&!0){p.cm(new A.E(s.a,s.b,s.c,s.d).df(20),$.ao5())
o=i.dc
n=i.cr
m=i.h0
p.oJ(q,o,n,(m.gn(m)>>>24&255)!==255)}l=i.aB===B.hA
if(!l){r=r.bn()
r.san(0,i.h0)
p.da(s,r)}r=i.cx
r===$&&A.b()
o=i.k3
n=o.a
o=o.b
m=i.S
m.toString
k=i.ch
j=t.xs.a(k.a)
k.saV(0,a.a6k(r,b,new A.E(0,0,0+n,0+o),m,new A.a6i(i,l),i.aB,j))}}
A.a6i.prototype={
$2(a,b){var s,r
if(this.b){s=a.gbJ(a)
r=$.at().bn()
r.san(0,this.a.h0)
s.oI(r)}this.a.hl(a,b)},
$S:11}
A.Kz.prototype={
gqz(){var s=$.at().cq(),r=this.k3
s.o3(new A.E(0,0,0+r.a,0+r.b))
return s},
c_(a,b){var s=this
if(s.A!=null){s.j7()
if(!s.S.D(0,b))return!1}return s.iV(a,b)},
aI(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(j.C$==null){j.ch.saV(0,null)
return}j.j7()
s=j.k3
r=b.a
q=b.b
p=s.a
s=s.b
o=j.S.dm(b)
n=a.gbJ(a)
if(j.cr!==0&&!0){n.cm(new A.E(r,q,r+p,q+s).df(20),$.ao5())
s=j.dc
r=j.cr
q=j.h0
n.oJ(o,s,r,(q.gn(q)>>>24&255)!==255)}m=j.aB===B.hA
if(!m){s=$.at().bn()
s.san(0,j.h0)
n.dO(o,s)}s=j.cx
s===$&&A.b()
r=j.k3
q=r.a
r=r.b
p=j.S
p.toString
l=j.ch
k=t.JG.a(l.a)
l.saV(0,a.LI(s,b,new A.E(0,0,0+q,0+r),p,new A.a6j(j,m),j.aB,k))}}
A.a6j.prototype={
$2(a,b){var s,r
if(this.b){s=a.gbJ(a)
r=$.at().bn()
r.san(0,this.a.h0)
s.oI(r)}this.a.hl(a,b)},
$S:11}
A.u0.prototype={
G(){return"DecorationPosition."+this.b}}
A.Kl.prototype={
sa2w(a){var s,r=this
if(a.l(0,r.S))return
s=r.A
if(s!=null)s.m()
r.A=null
r.S=a
r.au()},
sbB(a,b){if(b===this.aB)return
this.aB=b
this.au()},
syQ(a){if(a.l(0,this.bA))return
this.bA=a
this.au()},
ao(a){var s=this,r=s.A
if(r!=null)r.m()
s.A=null
s.lr(0)
s.au()},
jv(a){var s=this.S,r=this.k3
r.toString
return s.Kt(r,a,this.bA.d)},
aI(a,b){var s,r,q,p=this,o=p.A
if(o==null)o=p.A=p.S.t7(p.gea())
s=p.bA
r=p.k3
r.toString
q=new A.pd(s.a,s.b,s.c,s.d,r,s.f)
if(p.aB===B.hK){o.pC(a.gbJ(a),b,q)
if(p.S.gA8())a.Cu()}p.hl(a,b)
if(p.aB===B.G_){o=p.A
o.toString
o.pC(a.gbJ(a),b,q)
if(p.S.gA8())a.Cu()}}}
A.KI.prototype={
sLv(a,b){return},
seo(a){var s=this
if(J.f(s.S,a))return
s.S=a
s.au()
s.b3()},
sbO(a){var s=this
if(s.aB==a)return
s.aB=a
s.au()
s.b3()},
gm_(){return!1},
sbv(a,b){var s,r=this
if(J.f(r.cn,b))return
s=new A.bj(new Float64Array(16))
s.bk(b)
r.cn=s
r.au()
r.b3()},
smq(a){return},
gwv(){var s,r,q=this,p=q.S,o=p==null?null:p.Y(q.aB)
if(o==null)return q.cn
s=new A.bj(new Float64Array(16))
s.dk()
p=q.k3
p.toString
r=o.a0H(p)
s.aD(0,r.a,r.b)
p=q.cn
p.toString
s.cO(0,p)
s.aD(0,-r.a,-r.b)
return s},
c_(a,b){return this.d_(a,b)},
d_(a,b){var s=this.bA?this.gwv():null
return a.yv(new A.a6s(this),b,s)},
aI(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
if(a.C$!=null){s=a.gwv()
s.toString
r=A.a3e(s)
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
if(b===0||!isFinite(b)){a.ch.saV(0,null)
return}q=a.cx
q===$&&A.b()
p=A.eA.prototype.gkW.call(a)
o=a.ch
n=o.a
o.saV(0,a0.pI(q,a1,s,p,n instanceof A.lj?n:null))}else{a.hl(a0,a1.V(0,r))
a.ch.saV(0,null)}}},
dw(a,b){var s=this.gwv()
s.toString
b.cO(0,s)}}
A.a6s.prototype={
$2(a,b){return this.a.qr(a,b)},
$S:18}
A.wW.prototype={
YX(){if(this.A!=null)return
this.A=this.aB},
F8(a){switch(a.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
szK(a){var s=this,r=s.S
if(r===a)return
s.S=a
if(s.F8(r)||s.F8(a))s.a9()
else{s.bU=s.cn=null
s.au()}},
seo(a){var s=this
if(s.aB.l(0,a))return
s.aB=a
s.A=s.bU=s.cn=null
s.au()},
sbO(a){var s=this
if(s.bA==a)return
s.bA=a
s.A=s.bU=s.cn=null
s.au()},
cg(a){var s,r=this.C$
if(r!=null){s=r.hd(B.bQ)
switch(this.S.a){case 6:return a.bF(new A.aT(0,a.b,0,a.d).om(s))
case 1:case 2:case 0:case 4:case 3:case 5:return a.om(s)}}else return new A.a9(A.K(0,a.a,a.b),A.K(0,a.c,a.d))},
bN(){var s,r,q,p=this,o=p.C$
if(o!=null){o.cw(B.bQ,!0)
switch(p.S.a){case 6:o=t.k
s=o.a(A.B.prototype.ga1.call(p))
r=p.C$.k3
r.toString
q=new A.aT(0,s.b,0,s.d).om(r)
p.k3=o.a(A.B.prototype.ga1.call(p)).bF(q)
break
case 1:case 2:case 0:case 4:case 3:case 5:o=t.k.a(A.B.prototype.ga1.call(p))
s=p.C$.k3
s.toString
p.k3=o.om(s)
break}p.bU=p.cn=null}else{o=t.k.a(A.B.prototype.ga1.call(p))
p.k3=new A.a9(A.K(0,o.a,o.b),A.K(0,o.c,o.d))}},
ye(){var s,r,q,p,o,n,m,l,k,j=this
if(j.bU!=null)return
if(j.C$==null){j.cn=!1
s=new A.bj(new Float64Array(16))
s.dk()
j.bU=s}else{j.YX()
s=j.C$.k3
s.toString
r=j.S
q=j.k3
q.toString
p=A.asN(r,s,q)
q=p.b
r=p.a
o=s.a
s=s.b
n=j.A.A2(r,new A.E(0,0,0+o,0+s))
m=j.A
m.toString
l=j.k3
k=m.A2(q,new A.E(0,0,0+l.a,0+l.b))
m=n.a
j.cn=n.c-m<o||n.d-n.b<s
s=A.vS(k.a,k.b,0)
s.i5(0,q.a/r.a,q.b/r.b,1)
s.aD(0,-m,-n.b)
j.bU=s}},
Gk(a,b){var s,r,q,p,o=this,n=o.bU
n.toString
s=A.a3e(n)
if(s==null){n=o.cx
n===$&&A.b()
r=o.bU
r.toString
q=A.eA.prototype.gkW.call(o)
p=o.ch.a
return a.pI(n,b,r,q,p instanceof A.lj?p:null)}else o.hl(a,b.V(0,s))
return null},
aI(a,b){var s,r,q,p,o,n=this
if(n.C$!=null){s=n.k3
if(!s.gO(s)){s=n.C$.k3
s=s.gO(s)}else s=!0}else s=!0
if(s)return
n.ye()
s=n.cn
s.toString
if(s&&n.e6!==B.h){s=n.cx
s===$&&A.b()
r=n.k3
q=r.a
r=r.b
p=n.ch
o=p.a
o=o instanceof A.oF?o:null
p.saV(0,a.kZ(s,b,new A.E(0,0,0+q,0+r),n.gYm(),n.e6,o))}else n.ch.saV(0,n.Gk(a,b))},
d_(a,b){var s=this,r=s.k3
if(!r.gO(r)){r=s.C$
if(r==null)r=null
else{r=r.k3
r=r.gO(r)}r=r===!0}else r=!0
if(r)return!1
s.ye()
return a.yv(new A.a5Z(s),b,s.bU)},
kX(a){var s=this.k3
if(!s.gO(s)){s=a.k3
s=!s.gO(s)}else s=!1
return s},
dw(a,b){var s=this.k3
if(!s.gO(s)){s=a.k3
s=!s.gO(s)}else s=!1
if(!s)b.Cx()
else{this.ye()
s=this.bU
s.toString
b.cO(0,s)}}}
A.a5Z.prototype={
$2(a,b){return this.a.qr(a,b)},
$S:18}
A.Ko.prototype={
sa7u(a){var s=this
if(s.A.l(0,a))return
s.A=a
s.au()
s.b3()},
c_(a,b){return this.d_(a,b)},
d_(a,b){var s,r,q=this
if(q.S){s=q.A
r=q.k3
r=new A.t(s.a*r.a,s.b*r.b)
s=r}else s=null
return a.o4(new A.a6_(q),s,b)},
aI(a,b){var s,r,q=this
if(q.C$!=null){s=q.A
r=q.k3
q.hl(a,new A.t(b.a+s.a*r.a,b.b+s.b*r.b))}},
dw(a,b){var s=this.A,r=this.k3
b.aD(0,s.a*r.a,s.b*r.b)}}
A.a6_.prototype={
$2(a,b){return this.a.qr(a,b)},
$S:18}
A.KA.prototype={
ol(a){return new A.a9(A.K(1/0,a.a,a.b),A.K(1/0,a.c,a.d))},
iA(a,b){var s,r=this,q=null
if(t._.b(a)){s=r.a8
return s==null?q:s.$1(a)}if(t.c.b(a))return q
if(t.oN.b(a)){s=r.aU
return s==null?q:s.$1(a)}if(t.XA.b(a))return q
if(t.Ko.b(a)){s=r.cr
return s==null?q:s.$1(a)}if(t.w5.b(a)){s=r.dc
return s==null?q:s.$1(a)}if(t.r.b(a))return q
if(t.WQ.b(a))return q
if(t.ks.b(a)){s=r.zz
return s==null?q:s.$1(a)}}}
A.Kt.prototype={
c_(a,b){return this.PG(a,b)&&!0},
iA(a,b){var s=this.aU
if(s!=null&&t.XA.b(a))return s.$1(a)},
gJj(a){return this.cr},
gBO(){return this.dc},
aw(a){this.nj(a)
this.dc=!0},
ao(a){this.dc=!1
this.lr(0)},
ol(a){return new A.a9(A.K(1/0,a.a,a.b),A.K(1/0,a.c,a.d))},
$ijl:1,
gAM(a){return this.bG},
gAN(a){return this.ab}}
A.KD.prototype={
gdS(){return!0}}
A.wX.prototype={
sKx(a){var s,r=this
if(a===r.A)return
r.A=a
s=r.S
if(s==null||!s)r.b3()},
sA0(a){var s=this,r=s.S
if(a==r)return
if(r==null)r=s.A
s.S=a
if(r!==(a==null?s.A:a))s.b3()},
c_(a,b){return!this.A&&this.iV(a,b)},
fG(a){var s,r=this.C$
if(r!=null){s=this.S
s=!(s==null?this.A:s)}else s=!1
if(s){r.toString
a.$1(r)}}}
A.Ku.prototype={
sui(a){var s=this
if(a===s.A)return
s.A=a
s.a9()
s.uc()},
eS(a){if(this.A)return null
return this.Dy(a)},
gjY(){return this.A},
cg(a){if(this.A)return new A.a9(A.K(0,a.a,a.b),A.K(0,a.c,a.d))
return this.PF(a)},
pD(){this.Pw()},
bN(){var s,r=this
if(r.A){s=r.C$
if(s!=null)s.iG(t.k.a(A.B.prototype.ga1.call(r)))}else r.vF()},
c_(a,b){return!this.A&&this.iV(a,b)},
kX(a){return!this.A},
aI(a,b){if(this.A)return
this.hl(a,b)},
fG(a){if(this.A)return
this.vD(a)}}
A.wT.prototype={
sIo(a){if(this.A===a)return
this.A=a
this.b3()},
sA0(a){return},
c_(a,b){return this.A?this.k3.D(0,b):this.iV(a,b)},
fG(a){var s,r,q=this.C$
if(q!=null){s=this.S
r=this.A
s=!r}else s=!1
if(s){q.toString
a.$1(q)}}}
A.ju.prototype={
sa7E(a){if(A.anv(a,this.a8))return
this.a8=a
this.b3()},
sjF(a){var s,r=this
if(J.f(r.bG,a))return
s=r.bG
r.bG=a
if(a!=null!==(s!=null))r.b3()},
skV(a){var s,r=this
if(J.f(r.aU,a))return
s=r.aU
r.aU=a
if(a!=null!==(s!=null))r.b3()},
sa5S(a){var s,r=this
if(J.f(r.ab,a))return
s=r.ab
r.ab=a
if(a!=null!==(s!=null))r.b3()},
sa60(a){var s,r=this
if(J.f(r.cr,a))return
s=r.cr
r.cr=a
if(a!=null!==(s!=null))r.b3()},
eV(a){var s,r=this
r.hk(a)
if(r.bG!=null){s=r.a8
s=s==null||s.D(0,B.dT)}else s=!1
if(s)a.sjF(r.bG)
if(r.aU!=null){s=r.a8
s=s==null||s.D(0,B.BA)}else s=!1
if(s)a.skV(r.aU)
if(r.ab!=null){s=r.a8
if(s==null||s.D(0,B.dX))a.sum(r.gYE())
s=r.a8
if(s==null||s.D(0,B.dW))a.sul(r.gYC())}if(r.cr!=null){s=r.a8
if(s==null||s.D(0,B.dU))a.sun(r.gYG())
s=r.a8
if(s==null||s.D(0,B.dV))a.suk(r.gYA())}},
YD(){var s,r,q=this.ab
if(q!=null){s=this.k3
r=s.a*-0.8
s=s.ja(B.k)
s=A.cC(this.bC(0,null),s)
q.$1(new A.hX(null,new A.t(r,0),r,s))}},
YF(){var s,r,q=this.ab
if(q!=null){s=this.k3
r=s.a*0.8
s=s.ja(B.k)
s=A.cC(this.bC(0,null),s)
q.$1(new A.hX(null,new A.t(r,0),r,s))}},
YH(){var s,r,q=this.cr
if(q!=null){s=this.k3
r=s.b*-0.8
s=s.ja(B.k)
s=A.cC(this.bC(0,null),s)
q.$1(new A.hX(null,new A.t(0,r),r,s))}},
YB(){var s,r,q=this.cr
if(q!=null){s=this.k3
r=s.b*0.8
s=s.ja(B.k)
s=A.cC(this.bC(0,null),s)
q.$1(new A.hX(null,new A.t(0,r),r,s))}}}
A.x_.prototype={
sLG(a){var s=this
if(s.A===a)return
s.A=a
s.HP(a)
s.b3()},
sa1I(a){if(this.S===a)return
this.S=a
this.b3()},
sa3a(a){if(this.aB===a)return
this.aB=a
this.b3()},
sa37(a){return},
HP(a){var s=this,r=a.fy
r=a.fx
r=r==null?null:new A.cx(r,B.ae)
s.cn=r
r=a.id
r=a.go
r=r==null?null:new A.cx(r,B.ae)
s.bU=r
s.e6=null
s.h3=null
s.iy=null},
sbO(a){if(this.zJ==a)return
this.zJ=a
this.b3()},
fG(a){this.vD(a)},
eV(a){var s,r,q=this
q.hk(a)
a.a=q.S
a.b=q.aB
s=q.A.a
if(s!=null){a.bc(B.BL,!0)
a.bc(B.BD,s)}s=q.A.e
if(s!=null)a.bc(B.BI,s)
s=q.A.f
if(s!=null)a.bc(B.BM,s)
s=q.A.w
if(s!=null)a.bc(B.BK,s)
s=q.A.as
if(s!=null)a.bc(B.BG,s)
s=q.A.at
if(s!=null)a.bc(B.BH,s)
s=q.A.db
if(s!=null)a.bc(B.BE,s)
s=q.cn
if(s!=null){a.p4=s
a.d=!0}s=q.bU
if(s!=null){a.R8=s
a.d=!0}s=q.e6
if(s!=null){a.RG=s
a.d=!0}s=q.h3
if(s!=null){a.rx=s
a.d=!0}s=q.iy
if(s!=null){a.ry=s
a.d=!0}s=q.A
r=s.p2
if(r!=null){a.to=r
a.d=!0}s.p3!=null
s=q.A.cx
if(s!=null)a.bc(B.BF,s)
s=q.A.cy
if(s!=null)a.bc(B.BJ,s)
s=q.zJ
if(s!=null){a.y1=s
a.d=!0}s=q.A
r=s.R8
if(r!=null){a.id=r
a.d=!0}s=s.RG
if(s!=null)a.Iu(s)
if(q.A.rx!=null)a.sjF(q.gYI())
if(q.A.ry!=null)a.skV(q.gYy())
if(q.A.ag!=null)a.suj(q.gYw())},
YJ(){var s=this.A.rx
if(s!=null)s.$0()},
Yz(){var s=this.A.ry
if(s!=null)s.$0()},
Yx(){var s=this.A.ag
if(s!=null)s.$0()}}
A.Ke.prototype={
sa0U(a){return},
eV(a){this.hk(a)
a.c=!0}}
A.Ks.prototype={
eV(a){this.hk(a)
a.d=a.p2=a.a=!0}}
A.Kn.prototype={
sa38(a){if(a===this.A)return
this.A=a
this.b3()},
fG(a){if(this.A)return
this.vD(a)}}
A.Kq.prototype={
sA1(a,b){if(b===this.A)return
this.A=b
this.b3()},
eV(a){this.hk(a)
a.k1=this.A
a.d=!0}}
A.wV.prototype={
sn(a,b){if(this.A.l(0,b))return
this.A=b
this.au()},
sNR(a){return},
aI(a,b){var s,r=this,q=r.A,p=r.k3
p.toString
s=new A.te(q,p,b,A.y(t.S,t.M),A.az(),r.$ti.i("te<1>"))
s.ig()
a.LJ(s,A.eA.prototype.gkW.call(r),b)},
gm_(){return!0}}
A.QN.prototype={
eS(a){var s=this.C$
if(s!=null)return s.jQ(a)
return this.Dy(a)}}
A.QO.prototype={
aw(a){var s=this
s.nj(a)
s.hI$.X(0,s.grt())
s.yd()},
ao(a){this.hI$.I(0,this.grt())
this.lr(0)},
aI(a,b){if(this.me$===0)return
this.hl(a,b)}}
A.zY.prototype={
aw(a){var s
this.eG(a)
s=this.C$
if(s!=null)s.aw(a)},
ao(a){var s
this.e_(0)
s=this.C$
if(s!=null)s.ao(0)}}
A.zZ.prototype={
eS(a){var s=this.C$
if(s!=null)return s.jQ(a)
return this.Dm(a)}}
A.jy.prototype={
G(){return"SelectionResult."+this.b}}
A.dl.prototype={$iag:1}
A.Lc.prototype={
spK(a){var s=this,r=s.mi$
if(a==r)return
if(a==null)s.I(0,s.gH6())
else if(r==null)s.X(0,s.gH6())
s.H5()
s.mi$=a
s.H7()},
H7(){var s=this
if(s.mi$==null){s.kH$=!1
return}if(s.kH$&&!s.gn(s).d){s.mi$.v(0,s)
s.kH$=!1}else if(!s.kH$&&s.gn(s).d){s.mi$.E(0,s)
s.kH$=!0}},
H5(){var s=this
if(s.kH$){s.mi$.v(0,s)
s.kH$=!1}}}
A.qb.prototype={
G(){return"SelectionEventType."+this.b}}
A.nG.prototype={
G(){return"TextGranularity."+this.b}}
A.a7Q.prototype={}
A.tF.prototype={}
A.nr.prototype={}
A.ns.prototype={
G(){return"SelectionExtendDirection."+this.b}}
A.qc.prototype={
G(){return"SelectionStatus."+this.b}}
A.la.prototype={
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.Y(b)!==A.C(s))return!1
return b instanceof A.la&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&b.c===s.c&&b.d===s.d},
gu(a){var s=this
return A.T(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.nt.prototype={
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.Y(b)!==A.C(s))return!1
return b instanceof A.nt&&b.a.l(0,s.a)&&b.b===s.b&&b.c===s.c},
gu(a){return A.T(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.y9.prototype={
G(){return"TextSelectionHandleType."+this.b}}
A.KE.prototype={
eS(a){var s,r,q=this.C$
if(q!=null){s=q.jQ(a)
r=q.e
r.toString
t.hX.a(r)
if(s!=null)s+=r.a.b}else s=this.Dm(a)
return s},
aI(a,b){var s,r=this.C$
if(r!=null){s=r.e
s.toString
a.f8(r,t.hX.a(s).a.V(0,b))}},
d_(a,b){var s,r=this.C$
if(r!=null){s=r.e
s.toString
t.hX.a(s)
return a.o4(new A.a6k(b,s,r),s.a,b)}return!1}}
A.a6k.prototype={
$2(a,b){return this.c.c_(a,b)},
$S:18}
A.Kw.prototype={
ri(){var s=this
if(s.A!=null)return
s.A=s.S.Y(s.aB)},
sdB(a,b){var s=this
if(s.S.l(0,b))return
s.S=b
s.A=null
s.a9()},
sbO(a){var s=this
if(s.aB==a)return
s.aB=a
s.A=null
s.a9()},
cg(a){var s,r,q,p=this
p.ri()
if(p.C$==null){s=p.A
return a.bF(new A.a9(s.a+s.c,s.b+s.d))}s=p.A
s.toString
r=a.Jn(s)
q=p.C$.hd(r)
s=p.A
return a.bF(new A.a9(s.a+q.a+s.c,s.b+q.b+s.d))},
bN(){var s,r,q,p,o,n,m=this,l=t.k.a(A.B.prototype.ga1.call(m))
m.ri()
if(m.C$==null){s=m.A
m.k3=l.bF(new A.a9(s.a+s.c,s.b+s.d))
return}s=m.A
s.toString
r=l.Jn(s)
m.C$.cw(r,!0)
s=m.C$
q=s.e
q.toString
t.hX.a(q)
p=m.A
o=p.a
n=p.b
q.a=new A.t(o,n)
s=s.k3
m.k3=l.bF(new A.a9(o+s.a+p.c,n+s.b+p.d))}}
A.Kc.prototype={
ri(){var s=this
if(s.A!=null)return
s.A=s.S.Y(s.aB)},
seo(a){var s=this
if(s.S.l(0,a))return
s.S=a
s.A=null
s.a9()},
sbO(a){var s=this
if(s.aB==a)return
s.aB=a
s.A=null
s.a9()},
yw(){var s,r,q,p,o=this
o.ri()
s=o.C$
r=s.e
r.toString
t.hX.a(r)
q=o.A
q.toString
p=o.k3
p.toString
s=s.k3
s.toString
r.a=q.lZ(t.EP.a(p.ad(0,s)))}}
A.KB.prototype={
sa7J(a){if(this.aU==a)return
this.aU=a
this.a9()},
sa4l(a){if(this.ab==a)return
this.ab=a
this.a9()},
cg(a){var s,r,q=this,p=q.aU!=null||a.b===1/0,o=q.ab!=null||a.d===1/0,n=q.C$
if(n!=null){s=n.hd(new A.aT(0,a.b,0,a.d))
if(p){n=q.aU
if(n==null)n=1
n=s.a*n}else n=1/0
if(o){r=q.ab
if(r==null)r=1
r=s.b*r}else r=1/0
return a.bF(new A.a9(n,r))}n=p?0:1/0
return a.bF(new A.a9(n,o?0:1/0))},
bN(){var s,r,q=this,p=t.k.a(A.B.prototype.ga1.call(q)),o=q.aU!=null||p.b===1/0,n=q.ab!=null||p.d===1/0,m=q.C$
if(m!=null){m.cw(new A.aT(0,p.b,0,p.d),!0)
if(o){m=q.C$.k3.a
s=q.aU
m*=s==null?1:s}else m=1/0
if(n){s=q.C$.k3.b
r=q.ab
s*=r==null?1:r}else s=1/0
q.k3=p.bF(new A.a9(m,s))
q.yw()}else{m=o?0:1/0
q.k3=p.bF(new A.a9(m,n?0:1/0))}}}
A.a8n.prototype={
v3(a){return new A.a9(A.K(1/0,a.a,a.b),A.K(1/0,a.c,a.d))}}
A.Kk.prototype={
sz7(a){var s=this,r=s.A
if(r===a)return
if(A.C(a)!==A.C(r)||a.n7(r))s.a9()
s.A=a
s.b!=null},
aw(a){this.QH(a)},
ao(a){this.QI(0)},
cg(a){return a.bF(this.A.v3(a))},
bN(){var s,r,q,p,o,n,m=this,l=t.k,k=l.a(A.B.prototype.ga1.call(m))
m.k3=k.bF(m.A.v3(k))
if(m.C$!=null){s=m.A.BZ(l.a(A.B.prototype.ga1.call(m)))
l=m.C$
l.toString
k=s.a
r=s.b
q=k>=r
l.cw(s,!(q&&s.c>=s.d))
l=m.C$
p=l.e
p.toString
t.hX.a(p)
o=m.A
n=m.k3
n.toString
if(q&&s.c>=s.d)l=new A.a9(A.K(0,k,r),A.K(0,s.c,s.d))
else{l=l.k3
l.toString}p.a=o.C7(n,l)}}}
A.A_.prototype={
aw(a){var s
this.eG(a)
s=this.C$
if(s!=null)s.aw(a)},
ao(a){var s
this.e_(0)
s=this.C$
if(s!=null)s.ao(0)}}
A.uV.prototype={
G(){return"GrowthDirection."+this.b}}
A.lc.prototype={
gKX(){return!1},
a0M(a,b){var s=this.w
switch(A.bi(this.a).a){case 0:return new A.aT(b,a,s,s)
case 1:return new A.aT(s,s,b,a)}},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.lc))return!1
return b.a===s.a&&b.b===s.b&&b.d===s.d&&b.f===s.f&&b.r===s.r&&b.w===s.w&&b.x===s.x&&b.y===s.y&&b.Q===s.Q&&b.z===s.z},
gu(a){var s=this
return A.T(s.a,s.b,s.d,s.f,s.r,s.w,s.x,s.y,s.Q,s.z,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a){var s=this,r=A.a([s.a.k(0),s.b.k(0),s.c.k(0),"scrollOffset: "+B.d.N(s.d,1),"remainingPaintExtent: "+B.d.N(s.r,1)],t.s),q=s.f
if(q!==0)r.push("overlap: "+B.d.N(q,1))
r.push("crossAxisExtent: "+B.d.N(s.w,1))
r.push("crossAxisDirection: "+s.x.k(0))
r.push("viewportMainAxisExtent: "+B.d.N(s.y,1))
r.push("remainingCacheExtent: "+B.d.N(s.Q,1))
r.push("cacheOrigin: "+B.d.N(s.z,1))
return"SliverConstraints("+B.c.b6(r,", ")+")"}}
A.aa5.prototype={
c4(){return"SliverGeometry"}}
A.qi.prototype={}
A.Lt.prototype={
k(a){return A.C(this.a).k(0)+"@(mainAxis: "+A.h(this.c)+", crossAxis: "+A.h(this.d)+")"}}
A.xJ.prototype={
k(a){var s=this.a
return"layoutOffset="+(s==null?"None":B.d.N(s,1))}}
A.ld.prototype={
k(a){return"paintOffset="+A.h(this.a)}}
A.jC.prototype={}
A.cq.prototype={
ga1(){return t.p.a(A.B.prototype.ga1.call(this))},
gjV(){return this.ghV()},
ghV(){var s=this,r=t.p
switch(A.bi(r.a(A.B.prototype.ga1.call(s)).a).a){case 0:return new A.E(0,0,0+s.id.c,0+r.a(A.B.prototype.ga1.call(s)).w)
case 1:return new A.E(0,0,0+r.a(A.B.prototype.ga1.call(s)).w,0+s.id.c)}},
pD(){},
Ks(a,b,c){var s=this
if(c>=0&&c<s.id.r&&b>=0&&b<t.p.a(A.B.prototype.ga1.call(s)).w)if(s.A_(a,b,c)||!1){a.E(0,new A.Lt(c,b,s))
return!0}return!1},
A_(a,b,c){return!1},
hC(a,b,c){var s=a.d,r=a.r,q=s+r
return A.K(A.K(c,s,q)-A.K(b,s,q),0,r)},
oe(a,b,c){var s=a.d,r=s+a.z,q=a.Q,p=s+q
return A.K(A.K(c,r,p)-A.K(b,r,p),0,q)},
yO(a){return 0},
dw(a,b){},
iA(a,b){}}
A.a6l.prototype={
Fk(a){var s
switch(a.a.a){case 0:case 3:s=!1
break
case 2:case 1:s=!0
break
default:s=null}switch(a.b.a){case 0:break
case 1:s=!s
break}return s},
a4v(a,b,c,d){var s,r,q,p,o=this,n={},m=t.p,l=o.Fk(m.a(A.B.prototype.ga1.call(o))),k=b.e
k.toString
k=t.D.a(k).a
k.toString
s=k-m.a(A.B.prototype.ga1.call(o)).d
r=d-s
q=c-0
p=n.a=null
switch(A.bi(m.a(A.B.prototype.ga1.call(o)).a).a){case 0:if(!l){m=b.k3.a
r=m-r
s=o.id.c-m-s}p=new A.t(s,0)
n.a=new A.t(r,q)
break
case 1:if(!l){m=b.k3.b
r=m-r
s=o.id.c-m-s}p=new A.t(0,s)
n.a=new A.t(q,r)
break}return a.a0C(new A.a6m(n,b),p)}}
A.a6m.prototype={
$1(a){return this.b.c_(a,this.a.a)},
$S:100}
A.RI.prototype={}
A.RL.prototype={
ao(a){this.vA(0)}}
A.KF.prototype={
sq0(a){if(this.c1===a)return
this.c1=a
this.a9()}}
A.KG.prototype={
N0(a,b){var s,r
if(b>0){s=a/b
r=B.d.b0(s)
if(Math.abs(s*b-r*b)<1e-10)return r
return B.d.cM(s)}return 0},
C2(a,b){var s,r
if(b>0){s=a/b-1
r=B.d.b0(s)
if(Math.abs(s*b-r*b)<1e-10)return Math.max(0,r)
return Math.max(0,B.d.dz(s))}return 0},
SL(a){var s,r=this.a8$,q=A.o(this).i("aB.1"),p=t.D,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s<a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).ab$}return o},
SM(a){var s,r=this.bG$,q=A.o(this).i("aB.1"),p=t.D,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s>a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).aU$}return o},
bN(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=t.p,a7=a6.a(A.B.prototype.ga1.call(a4)),a8=a4.ap
a8.R8=!1
s=a6.a(A.B.prototype.ga1.call(a4)).y*a4.c1
a6=a7.d
r=a6+a7.z
q=r+a7.Q
p=a7.a0M(s,s)
o=a4.N0(r,s)
n=isFinite(q)?a4.C2(q,s):a5
if(a4.a8$!=null){m=a4.SL(o)
a4.IW(m,n!=null?a4.SM(n):0)}else a4.IW(0,0)
if(a4.a8$==null)if(!a4.a0o(o,s*o)){l=o<=0?0:a8.gt0()*s
a4.id=A.xI(a5,!1,a5,a5,l,0,0,l,a5)
a8.Jr()
return}k=a4.a8$
k.toString
k=k.e
k.toString
j=t.D
k=j.a(k).b
k.toString
i=k-1
h=a5
for(;i>=o;--i){g=a4.a4I(p)
if(g==null){a4.id=A.xI(a5,!1,a5,a5,0,0,0,0,i*s)
return}k=g.e
k.toString
j.a(k).a=s*i
if(h==null)h=g}if(h==null){a4.a8$.iG(p)
h=a4.a8$
k=h.e
k.toString
j.a(k).a=s*o}k=h.e
k.toString
k=j.a(k).b
k.toString
i=k+1
k=A.o(a4).i("aB.1")
f=n!=null
while(!0){if(!(!f||i<=n)){e=1/0
break}d=h.e
d.toString
g=k.a(d).ab$
if(g!=null){d=g.e
d.toString
d=j.a(d).b
d.toString
d=d!==i}else d=!0
if(d){g=a4.a4H(p,h)
if(g==null){e=i*s
break}}else g.iG(p)
d=g.e
d.toString
j.a(d)
c=d.b
c.toString
d.a=s*c;++i
h=g}k=a4.bG$
k.toString
k=k.e
k.toString
k=j.a(k).b
k.toString
b=s*o
a=s*(k+1)
e=Math.min(e,a8.a34(a7,o,k,b,a))
a0=a4.hC(a7,b,a)
a1=a4.oe(a7,b,a)
a2=a6+a7.r
a3=isFinite(a2)?a4.C2(a2,s):a5
a4.id=A.xI(a1,a3!=null&&k>=a3||a6>0,a5,a5,e,a0,0,e,a5)
if(e===a)a8.R8=!0
a8.Jr()}}
A.i3.prototype={$icn:1}
A.a6q.prototype={
eC(a){}}
A.hq.prototype={
k(a){var s=this.b,r=this.oU$?"keepAlive; ":""
return"index="+A.h(s)+"; "+r+this.Qe(0)}}
A.nh.prototype={
eC(a){if(!(a.e instanceof A.hq))a.e=new A.hq(!1,null,null)},
il(a){var s
this.Dn(a)
s=a.e
s.toString
t.D.a(s)
if(!s.c){t.x.a(a)
s.b=this.ap.p4}},
A4(a,b,c){this.vt(0,b,c)},
ug(a,b){var s,r,q,p=this,o=a.e
o.toString
s=t.D
s.a(o)
if(!o.c){p.Og(a,b)
o=a.e
o.toString
s.a(o).b=p.ap.p4
p.a9()}else{r=p.aq
if(r.h(0,o.b)===a)r.v(0,o.b)
q=a.e
q.toString
s.a(q).b=p.ap.p4
o=o.b
o.toString
r.j(0,o,a)}},
v(a,b){var s=b.e
s.toString
t.D.a(s)
if(!s.c){this.Oi(0,b)
return}this.aq.v(0,s.b)
this.jg(b)},
wn(a,b){this.KO(new A.a6n(this,a,b),t.p)},
EM(a){var s,r=this,q=a.e
q.toString
t.D.a(q)
if(q.oU$){r.v(0,a)
s=q.b
s.toString
r.aq.j(0,s,a)
a.e=q
r.Dn(a)
q.c=!0}else r.ap.LW(a)},
aw(a){var s,r,q
this.QJ(a)
for(s=this.aq,s=s.gaW(s),s=new A.e0(J.ax(s.a),s.b),r=A.o(s).z[1];s.t();){q=s.a;(q==null?r.a(q):q).aw(a)}},
ao(a){var s,r,q
this.QK(0)
for(s=this.aq,s=s.gaW(s),s=new A.e0(J.ax(s.a),s.b),r=A.o(s).z[1];s.t();){q=s.a;(q==null?r.a(q):q).ao(0)}},
jJ(){this.Oh()
var s=this.aq
s.gaW(s).Z(0,this.gLS())},
aY(a){var s
this.CT(a)
s=this.aq
s.gaW(s).Z(0,a)},
fG(a){this.CT(a)},
a0o(a,b){var s
this.wn(a,null)
s=this.a8$
if(s!=null){s=s.e
s.toString
t.D.a(s).a=b
return!0}this.ap.R8=!0
return!1},
a4I(a){var s,r,q,p=this,o=p.a8$
o.toString
o=o.e
o.toString
s=t.D
o=s.a(o).b
o.toString
r=o-1
p.wn(r,null)
o=p.a8$
o.toString
q=o.e
q.toString
q=s.a(q).b
q.toString
if(q===r){o.cw(a,!1)
return p.a8$}p.ap.R8=!0
return null},
a4H(a,b){var s,r,q,p=b.e
p.toString
s=t.D
p=s.a(p).b
p.toString
r=p+1
this.wn(r,b)
p=b.e
p.toString
q=A.o(this).i("aB.1").a(p).ab$
if(q!=null){p=q.e
p.toString
p=s.a(p).b
p.toString
p=p===r}else p=!1
if(p){q.cw(a,!1)
return q}this.ap.R8=!0
return null},
IW(a,b){var s={}
s.a=a
s.b=b
this.KO(new A.a6p(s,this),t.p)},
Lw(a){switch(A.bi(t.p.a(A.B.prototype.ga1.call(this)).a).a){case 0:return a.k3.a
case 1:return a.k3.b}},
A_(a,b,c){var s,r,q=this.bG$,p=A.aoE(a)
for(s=A.o(this).i("aB.1");q!=null;){if(this.a4v(p,q,b,c))return!0
r=q.e
r.toString
q=s.a(r).aU$}return!1},
yO(a){var s=a.e
s.toString
return t.D.a(s).a},
kX(a){var s=t.MR.a(a.e)
return(s==null?null:s.b)!=null&&!this.aq.R(0,s.b)},
dw(a,b){var s,r,q,p,o=this
if(!o.kX(a))b.Cx()
else{s=t.p
r=o.Fk(s.a(A.B.prototype.ga1.call(o)))
q=a.e
q.toString
q=t.D.a(q).a
q.toString
p=q-s.a(A.B.prototype.ga1.call(o)).d
switch(A.bi(s.a(A.B.prototype.ga1.call(o)).a).a){case 0:b.aD(0,!r?o.id.c-a.k3.a-p:p,0)
break
case 1:b.aD(0,0,!r?o.id.c-a.k3.b-p:p)
break}}},
aI(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null
if(d.a8$==null)return
s=t.p
switch(A.k7(s.a(A.B.prototype.ga1.call(d)).a,s.a(A.B.prototype.ga1.call(d)).b)){case B.A:r=b.V(0,new A.t(0,d.id.c))
q=B.zR
p=B.dG
o=!0
break
case B.aA:r=b
q=B.dG
p=B.fA
o=!1
break
case B.z:r=b
q=B.fA
p=B.dG
o=!1
break
case B.ag:r=b.V(0,new A.t(d.id.c,0))
q=B.zS
p=B.fA
o=!0
break
default:o=c
r=o
p=r
q=p}n=d.a8$
for(m=A.o(d).i("aB.1"),l=t.D;n!=null;){k=n.e
k.toString
k=l.a(k).a
k.toString
j=k-s.a(A.B.prototype.ga1.call(d)).d
k=r.a
i=q.a
k=k+i*j+p.a*0
h=r.b
g=q.b
h=h+g*j+p.b*0
f=new A.t(k,h)
if(o){e=d.Lw(n)
f=new A.t(k+i*e,h+g*e)}if(j<s.a(A.B.prototype.ga1.call(d)).r&&j+d.Lw(n)>0)a.f8(n,f)
k=n.e
k.toString
n=m.a(k).ab$}}}
A.a6n.prototype={
$1(a){var s=this.a,r=s.aq,q=this.b,p=this.c
if(r.R(0,q)){r=r.v(0,q)
r.toString
q=r.e
q.toString
t.D.a(q)
s.jg(r)
r.e=q
s.vt(0,r,p)
q.c=!1}else s.ap.a2d(q,p)},
$S:101}
A.a6p.prototype={
$1(a){var s,r,q
for(s=this.a,r=this.b;s.a>0;){q=r.a8$
q.toString
r.EM(q);--s.a}for(;s.b>0;){q=r.bG$
q.toString
r.EM(q);--s.b}s=r.aq
s=s.gaW(s)
q=A.o(s).i("aO<p.E>")
B.c.Z(A.aA(new A.aO(s,new A.a6o(),q),!0,q.i("p.E")),r.ap.ga6I())},
$S:101}
A.a6o.prototype={
$1(a){var s=a.e
s.toString
return!t.D.a(s).oU$},
$S:263}
A.A1.prototype={
aw(a){var s,r,q
this.eG(a)
s=this.a8$
for(r=t.D;s!=null;){s.aw(a)
q=s.e
q.toString
s=r.a(q).ab$}},
ao(a){var s,r,q
this.e_(0)
s=this.a8$
for(r=t.D;s!=null;){s.ao(0)
q=s.e
q.toString
s=r.a(q).ab$}}}
A.R0.prototype={}
A.R1.prototype={}
A.RJ.prototype={
ao(a){this.vA(0)}}
A.RK.prototype={}
A.x0.prototype={
gyI(){var s=this,r=t.p
switch(A.k7(r.a(A.B.prototype.ga1.call(s)).a,r.a(A.B.prototype.ga1.call(s)).b)){case B.A:return s.bT.d
case B.aA:return s.bT.a
case B.z:return s.bT.b
case B.ag:return s.bT.c}},
ga0E(){var s=this,r=t.p
switch(A.k7(r.a(A.B.prototype.ga1.call(s)).a,r.a(A.B.prototype.ga1.call(s)).b)){case B.A:return s.bT.b
case B.aA:return s.bT.c
case B.z:return s.bT.d
case B.ag:return s.bT.a}},
ga2o(){switch(A.bi(t.p.a(A.B.prototype.ga1.call(this)).a).a){case 0:var s=this.bT
return s.gbd(s)+s.gbh(s)
case 1:return this.bT.gco()}},
eC(a){if(!(a.e instanceof A.ld))a.e=new A.ld(B.k)},
bN(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=null,a2=t.p,a3=a2.a(A.B.prototype.ga1.call(a0)),a4=a0.gyI()
a0.ga0E()
s=a0.bT
s.toString
a2=s.a0G(A.bi(a2.a(A.B.prototype.ga1.call(a0)).a))
r=a0.ga2o()
if(a0.C$==null){q=a0.hC(a3,0,a2)
a0.id=A.xI(a0.oe(a3,0,a2),!1,a1,a1,a2,Math.min(q,a3.r),0,a2,a1)
return}p=a0.hC(a3,0,a4)
o=a3.f
if(o>0)o=Math.max(0,o-p)
s=a0.C$
s.toString
n=Math.max(0,a3.d-a4)
m=Math.min(0,a3.z+a4)
l=a3.r
k=a0.hC(a3,0,a4)
j=a3.Q
i=a0.oe(a3,0,a4)
h=Math.max(0,a3.w-r)
g=a3.a
f=a3.b
s.cw(new A.lc(g,f,a3.c,n,a4+a3.e,o,l-k,h,a3.x,a3.y,m,j-i),!0)
e=a0.C$.id
s=e.y
if(s!=null){a0.id=A.xI(a1,!1,a1,a1,0,0,0,0,s)
return}s=e.a
n=a4+s
m=a2+s
d=a0.hC(a3,n,m)
c=p+d
b=a0.oe(a3,0,a4)
a=a0.oe(a3,n,m)
n=e.c
k=e.d
q=Math.min(p+Math.max(n,k+d),l)
l=e.b
k=Math.min(c+k,q)
j=Math.min(a+b+e.z,j)
i=e.e
n=Math.max(c+n,p+e.r)
a0.id=A.xI(j,e.x,n,k,a2+i,q,l,m,a1)
m=a0.C$.e
m.toString
t.v.a(m)
switch(A.k7(g,f)){case B.A:a2=a0.bT
n=a2.a
s=a2.d+s
m.a=new A.t(n,a0.hC(a3,s,s+a2.b))
break
case B.aA:m.a=new A.t(a0.hC(a3,0,a0.bT.a),a0.bT.b)
break
case B.z:a2=a0.bT
m.a=new A.t(a2.a,a0.hC(a3,0,a2.b))
break
case B.ag:a2=a0.bT
s=a2.c+s
m.a=new A.t(a0.hC(a3,s,s+a2.a),a0.bT.b)
break}},
A_(a,b,c){var s,r,q,p,o=this,n=o.C$
if(n!=null&&n.id.r>0){n=n.e
n.toString
t.v.a(n)
s=o.hC(t.p.a(A.B.prototype.ga1.call(o)),0,o.gyI())
r=o.C$
r.toString
r=o.a1f(r)
n=n.a
q=o.C$.ga4t()
p=n!=null
if(p)a.c.push(new A.rs(new A.t(-n.a,-n.b)))
q.$3$crossAxisPosition$mainAxisPosition(a,b-r,c-s)
if(p)a.uy()}return!1},
a1f(a){var s=this,r=t.p
switch(A.k7(r.a(A.B.prototype.ga1.call(s)).a,r.a(A.B.prototype.ga1.call(s)).b)){case B.A:case B.z:return s.bT.a
case B.ag:case B.aA:return s.bT.b}},
yO(a){return this.gyI()},
dw(a,b){var s=a.e
s.toString
s=t.v.a(s).a
b.aD(0,s.a,s.b)},
aI(a,b){var s,r=this.C$
if(r!=null&&r.id.w){s=r.e
s.toString
a.f8(r,b.V(0,t.v.a(s).a))}}}
A.QZ.prototype={
aw(a){var s
this.eG(a)
s=this.C$
if(s!=null)s.aw(a)},
ao(a){var s
this.e_(0)
s=this.C$
if(s!=null)s.ao(0)}}
A.a5V.prototype={
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return b instanceof A.a5V&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gu(a){var s=this
return A.T(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a){var s=this
return"RelativeRect.fromLTRB("+B.d.N(s.a,1)+", "+B.d.N(s.b,1)+", "+B.d.N(s.c,1)+", "+B.d.N(s.d,1)+")"}}
A.e5.prototype={
gAa(){var s=this
return s.e!=null||s.f!=null||s.r!=null||s.w!=null||s.x!=null||s.y!=null},
k(a){var s=this,r=A.a([],t.s),q=s.e
if(q!=null)r.push("top="+A.hE(q))
q=s.f
if(q!=null)r.push("right="+A.hE(q))
q=s.r
if(q!=null)r.push("bottom="+A.hE(q))
q=s.w
if(q!=null)r.push("left="+A.hE(q))
q=s.x
if(q!=null)r.push("width="+A.hE(q))
q=s.y
if(q!=null)r.push("height="+A.hE(q))
if(r.length===0)r.push("not positioned")
r.push(s.qo(0))
return B.c.b6(r,"; ")}}
A.xR.prototype={
G(){return"StackFit."+this.b}}
A.x1.prototype={
eC(a){if(!(a.e instanceof A.e5))a.e=new A.e5(null,null,B.k)},
a_a(){var s=this
if(s.ag!=null)return
s.ag=s.ac.Y(s.aA)},
seo(a){var s=this
if(s.ac.l(0,a))return
s.ac=a
s.ag=null
s.a9()},
sbO(a){var s=this
if(s.aA==a)return
s.aA=a
s.ag=null
s.a9()},
eS(a){return this.Jm(a)},
cg(a){return this.Ho(a,A.ak_())},
Ho(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.a_a()
if(e.dA$===0){s=a.a
r=a.b
q=A.K(1/0,s,r)
p=a.c
o=a.d
n=A.K(1/0,p,o)
return isFinite(q)&&isFinite(n)?new A.a9(A.K(1/0,s,r),A.K(1/0,p,o)):new A.a9(A.K(0,s,r),A.K(0,p,o))}m=a.a
l=a.c
switch(e.b2.a){case 0:k=new A.aT(0,a.b,0,a.d)
break
case 1:k=A.Cj(new A.a9(A.K(1/0,m,a.b),A.K(1/0,l,a.d)))
break
case 2:k=a
break
default:k=null}j=e.a8$
for(s=t.B,i=l,h=m,g=!1;j!=null;){r=j.e
r.toString
s.a(r)
if(!r.gAa()){f=b.$2(j,k)
h=Math.max(h,f.a)
i=Math.max(i,f.b)
g=!0}j=r.ab$}return g?new A.a9(h,i):new A.a9(A.K(1/0,m,a.b),A.K(1/0,l,a.d))},
bN(){var s,r,q,p,o,n,m,l=this,k=t.k.a(A.B.prototype.ga1.call(l))
l.M=!1
l.k3=l.Ho(k,A.ak0())
s=l.a8$
for(r=t.B,q=t.EP;s!=null;){p=s.e
p.toString
r.a(p)
if(!p.gAa()){o=l.ag
o.toString
n=l.k3
n.toString
m=s.k3
m.toString
p.a=o.lZ(q.a(n.ad(0,m)))}else{o=l.k3
o.toString
n=l.ag
n.toString
l.M=A.aqq(s,p,o,n)||l.M}s=p.ab$}},
d_(a,b){return this.z4(a,b)},
uu(a,b){this.ot(a,b)},
aI(a,b){var s,r=this,q=r.ba,p=q!==B.h&&r.M,o=r.C
if(p){p=r.cx
p===$&&A.b()
s=r.k3
o.saV(0,a.kZ(p,b,new A.E(0,0,0+s.a,0+s.b),r.gB1(),q,o.a))}else{o.saV(0,null)
r.ot(a,b)}},
m(){this.C.saV(0,null)
this.ie()},
jd(a){var s
switch(this.ba.a){case 0:return null
case 1:case 2:case 3:if(this.M){s=this.k3
s=new A.E(0,0,0+s.a,0+s.b)}else s=null
return s}}}
A.R2.prototype={
aw(a){var s,r,q
this.eG(a)
s=this.a8$
for(r=t.B;s!=null;){s.aw(a)
q=s.e
q.toString
s=r.a(q).ab$}},
ao(a){var s,r,q
this.e_(0)
s=this.a8$
for(r=t.B;s!=null;){s.ao(0)
q=s.e
q.toString
s=r.a(q).ab$}}}
A.R3.prototype={}
A.Mx.prototype={
l(a,b){if(b==null)return!1
if(J.Y(b)!==A.C(this))return!1
return b instanceof A.Mx&&b.a.l(0,this.a)&&b.b===this.b},
gu(a){return A.T(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a){return this.a.k(0)+" at "+A.hE(this.b)+"x"}}
A.x2.prototype={
syQ(a){var s,r,q,p,o=this
if(o.k1.l(0,a))return
s=o.k1
o.k1=a
r=s.b
r=A.vR(r,r,1)
q=o.k1.b
if(!r.l(0,A.vR(q,q,1))){r=o.I1()
q=o.ch
p=q.a
p.toString
J.awc(p)
q.saV(0,r)
o.au()}o.a9()},
I1(){var s,r=this.k1.b
r=A.vR(r,r,1)
this.k4=r
s=A.ar4(r)
s.aw(this)
return s},
pD(){},
bN(){var s,r=this.k1.a
this.id=r
s=this.C$
if(s!=null)s.iG(A.Cj(r))},
c_(a,b){var s=this.C$
if(s!=null)s.c_(A.aoE(a),b)
a.E(0,new A.i_(this,t.AL))
return!0},
a4y(a){var s,r=A.a([],t.om),q=new A.bj(new Float64Array(16))
q.dk()
s=new A.hL(r,A.a([q],t.rE),A.a([],t.cR))
this.c_(s,a)
return s},
gdS(){return!0},
aI(a,b){var s=this.C$
if(s!=null)a.f8(s,b)},
dw(a,b){var s=this.k4
s.toString
b.cO(0,s)
this.Py(a,b)},
a1C(){var s,r,q
try{q=$.at()
s=q.a2k()
r=this.ch.a.a0Z(s)
this.a_X()
q.a6P(r)
r.m()}finally{}},
a_X(){var s,r,q,p,o,n,m,l,k,j=null,i=this.ghV(),h=i.gaN(),g=this.k2
g.gl3()
s=i.gaN()
g.gl3()
g=this.ch
r=t.lu
q=g.a.K1(0,new A.t(h.a,0),r)
switch(A.lL().a){case 0:p=g.a.K1(0,new A.t(s.a,i.d-1-0),r)
break
case 1:case 2:case 3:case 4:case 5:p=j
break
default:p=j}h=q==null
if(h&&p==null)return
if(!h&&p!=null){h=q.f
g=q.r
s=q.e
r=q.w
A.aqT(new A.it(p.a,p.b,p.c,p.d,s,h,g,r))
return}o=A.lL()===B.aE
n=h?p:q
h=n.f
g=n.r
s=n.e
r=n.w
m=o?n.a:j
l=o?n.b:j
k=o?n.c:j
A.aqT(new A.it(m,l,k,o?n.d:j,s,h,g,r))},
ghV(){var s=this.id.a0(0,this.k1.b)
return new A.E(0,0,0+s.a,0+s.b)},
gjV(){var s,r=this.k4
r.toString
s=this.id
return A.hi(r,new A.E(0,0,0+s.a,0+s.b))}}
A.R5.prototype={
aw(a){var s
this.eG(a)
s=this.C$
if(s!=null)s.aw(a)},
ao(a){var s
this.e_(0)
s=this.C$
if(s!=null)s.ao(0)}}
A.Cp.prototype={
G(){return"CacheExtentStyle."+this.b}}
A.q0.prototype={
k(a){return"RevealedOffset(offset: "+A.h(this.a)+", rect: "+this.b.k(0)+")"}}
A.pY.prototype={
eV(a){this.hk(a)
a.Iu(B.BN)},
fG(a){var s=this.gIR()
new A.aO(s,new A.a6u(),A.aY(s).i("aO<1>")).Z(0,a)},
sfU(a){if(a===this.M)return
this.M=a
this.a9()},
sa2n(a){if(a===this.ag)return
this.ag=a
this.a9()},
sbM(a,b){var s=this,r=s.ac
if(b===r)return
if(s.b!=null)r.I(0,s.gua())
s.ac=b
if(s.b!=null)b.X(0,s.gua())
s.a9()},
sa11(a){if(a===this.aA)return
this.aA=a
this.a9()},
sa12(a){if(a===this.ba)return
this.ba=a
this.a9()},
aw(a){this.QL(a)
this.ac.X(0,this.gua())},
ao(a){this.ac.I(0,this.gua())
this.QM(0)},
gdS(){return!0},
L3(a,b,c,d,e,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.aFg(h.ac.k4,e),f=a0+a2
for(s=e.a,r=t.v,q=a0,p=0;c!=null;){o=a5<=0?0:a5
n=Math.max(b,-o)
m=b-n
c.cw(new A.lc(h.M,e,g,o,p,f-q,Math.max(0,a4-q+a0),d,h.ag,a1,n,Math.max(0,a3+m)),!0)
l=c.id
k=l.y
if(k!=null)return k
j=q+l.b
k=l.w||a5>0
i=c.e
if(k){i.toString
r.a(i).a=h.IY(c,j,e)}else{i.toString
r.a(i).a=h.IY(c,-a5+a0,e)}f=Math.max(j+l.c,f)
k=l.a
a5-=k
p+=k
q+=l.d
i=l.z
if(i!==0){a3-=i-m
b=Math.min(n+i,0)}switch(s){case 0:i=h.oT
i===$&&A.b()
h.oT=i+k
break
case 1:i=h.oS
i===$&&A.b()
h.oS=i-k
break}if(l.x)h.c8=!0
c=a.$1(c)}return 0},
jd(a){var s,r,q,p,o,n
switch(this.C.a){case 0:return null
case 1:case 2:case 3:break}s=this.k3
r=0+s.a
q=0+s.b
s=t.p
if(s.a(A.B.prototype.ga1.call(a)).f===0||!isFinite(s.a(A.B.prototype.ga1.call(a)).y))return new A.E(0,0,r,q)
p=s.a(A.B.prototype.ga1.call(a)).y-s.a(A.B.prototype.ga1.call(a)).r+s.a(A.B.prototype.ga1.call(a)).f
switch(A.k7(this.M,s.a(A.B.prototype.ga1.call(a)).b)){case B.z:o=0+p
n=0
break
case B.A:q-=p
n=0
o=0
break
case B.aA:n=0+p
o=0
break
case B.ag:r-=p
n=0
o=0
break
default:n=0
o=0}return new A.E(n,o,r,q)},
z9(a){var s,r=this,q=r.b2
if(q==null){q=r.k3
return new A.E(0,0,0+q.a,0+q.b)}switch(A.bi(r.M).a){case 1:s=r.k3
return new A.E(0,0-q,0+s.a,0+s.b+q)
case 0:s=r.k3
return new A.E(0-q,0,0+s.a+q,0+s.b)}},
aI(a,b){var s,r,q,p=this
if(p.a8$==null)return
s=p.c8&&p.C!==B.h
r=p.ai
if(s){s=p.cx
s===$&&A.b()
q=p.k3
r.saV(0,a.kZ(s,b,new A.E(0,0,0+q.a,0+q.b),p.gYn(),p.C,r.a))}else{r.saV(0,null)
p.Gl(a,b)}},
m(){this.ai.saV(0,null)
this.ie()},
Gl(a,b){var s,r,q,p,o,n,m,l
for(s=this.gIR(),r=s.length,q=t.v,p=b.a,o=b.b,n=0;n<s.length;s.length===r||(0,A.Q)(s),++n){m=s[n]
if(m.id.w){l=m.e
l.toString
l=q.a(l).a
a.f8(m,new A.t(p+l.a,o+l.b))}}},
d_(a,b){var s,r,q,p,o,n,m,l,k={}
k.a=k.b=null
switch(A.bi(this.M).a){case 1:k.b=b.b
k.a=b.a
break
case 0:k.b=b.a
k.a=b.b
break}s=new A.qi(a.a,a.b,a.c)
for(r=this.ga1g(),q=r.length,p=t.v,o=0;o<r.length;r.length===q||(0,A.Q)(r),++o){n=r[o]
if(!n.id.w)continue
m=new A.bj(new Float64Array(16))
m.dk()
l=n.e
l.toString
l=p.a(l).a
m.aD(0,l.a,l.b)
if(a.a0D(new A.a6t(k,this,n,s),m))return!0}return!1},
l4(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=a instanceof A.cq
for(s=t.d,r=c,q=a,p=0;o=q.c,o!==d;q=o){o.toString
s.a(o)
if(q instanceof A.H)r=q
if(o instanceof A.cq){n=o.yO(q)
n.toString
p+=n}else{p=0
b=!1}}if(r!=null){s=r.c
s.toString
t.nl.a(s)
m=t.p.a(A.B.prototype.ga1.call(s)).b
switch(A.bi(d.M).a){case 0:l=r.k3.a
break
case 1:l=r.k3.b
break
default:l=c}if(a1==null)a1=a.ghV()
k=A.hi(a.bC(0,r),a1)}else{if(b){t.nl.a(a)
s=t.p
m=s.a(A.B.prototype.ga1.call(a)).b
l=a.id.a
if(a1==null)switch(A.bi(d.M).a){case 0:a1=new A.E(0,0,0+l,0+s.a(A.B.prototype.ga1.call(a)).w)
break
case 1:a1=new A.E(0,0,0+s.a(A.B.prototype.ga1.call(a)).w,0+a.id.a)
break}}else{s=d.ac.at
s.toString
a1.toString
return new A.q0(s,a1)}k=a1}t.nl.a(q)
switch(A.k7(d.M,m)){case B.A:s=k.d
p+=l-s
j=s-k.b
break
case B.aA:s=k.a
p+=s
j=k.c-s
break
case B.z:s=k.b
p+=s
j=k.d-s
break
case B.ag:s=k.c
p+=l-s
j=s-k.a
break
default:j=c}q.id.toString
p=d.No(q,p)
i=A.hi(a.bC(0,d),a1)
h=d.a5y(q)
switch(t.p.a(A.B.prototype.ga1.call(q)).b.a){case 0:p-=h
break
case 1:switch(A.bi(d.M).a){case 1:p-=i.d-i.b
break
case 0:p-=i.c-i.a
break}break}s=d.M
switch(A.bi(s).a){case 0:g=d.k3.a-h
break
case 1:g=d.k3.b-h
break
default:g=c}f=p-(g-j)*a0
o=d.ac.at
o.toString
e=o-f
switch(s.a){case 2:i=i.aD(0,0,e)
break
case 1:i=i.aD(0,e,0)
break
case 0:i=i.aD(0,0,-e)
break
case 3:i=i.aD(0,-e,0)
break}return new A.q0(f,i)},
IY(a,b,c){switch(A.k7(this.M,c)){case B.A:return new A.t(0,this.k3.b-(b+a.id.c))
case B.aA:return new A.t(b,0)
case B.z:return new A.t(0,b)
case B.ag:return new A.t(this.k3.a-(b+a.id.c),0)}},
eD(a,b,c,d){var s=this
if(!s.ac.r.glY())return s.qq(a,b,c,d)
s.qq(a,null,c,A.aqs(a,b,c,s.ac,d,s))},
n9(){return this.eD(B.aR,null,B.v,null)},
lf(a,b){return this.eD(B.aR,a,B.v,b)},
$iKb:1}
A.a6u.prototype={
$1(a){var s=a.id
return s.w||s.z>0},
$S:265}
A.a6t.prototype={
$1(a){var s=this,r=s.c,q=s.a,p=s.b.a1E(r,q.b)
return r.Ks(s.d,q.a,p)},
$S:100}
A.x3.prototype={
eC(a){if(!(a.e instanceof A.jC))a.e=new A.jC(null,null,B.k)},
sa0I(a){if(a===this.tD)return
this.tD=a
this.a9()},
saN(a){if(a==this.e7)return
this.e7=a
this.a9()},
gjY(){return!0},
cg(a){return new A.a9(A.K(1/0,a.a,a.b),A.K(1/0,a.c,a.d))},
bN(){var s,r,q,p,o,n,m,l,k,j=this
switch(A.bi(j.M).a){case 1:j.ac.oa(j.k3.b)
break
case 0:j.ac.oa(j.k3.a)
break}if(j.e7==null){j.oT=j.oS=0
j.c8=!1
j.ac.o7(0,0)
return}switch(A.bi(j.M).a){case 1:s=j.k3
r=s.b
q=s.a
break
case 0:s=j.k3
r=s.a
q=s.b
break
default:r=null
q=null}s=0
do{p=j.ac.at
p.toString
o=j.Su(r,q,p+0)
if(o!==0){p=j.ac
n=p.at
n.toString
p.at=n+o
p.ch=!0}else{p=j.ac
n=j.oS
n===$&&A.b()
m=j.tD
n=Math.min(0,n+r*m)
l=j.oT
l===$&&A.b()
if(p.o7(n,Math.max(0,l-r*(1-m))))break}k=s+1
if(k<10){s=k
continue}else break}while(!0)},
Su(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.oT=e.oS=0
e.c8=!1
s=a*e.tD-c
r=A.K(s,0,a)
q=a-s
p=A.K(q,0,a)
switch(e.ba.a){case 0:e.b2=e.aA
break
case 1:e.b2=a*e.aA
break}o=e.b2
o.toString
n=a+2*o
m=s+o
l=A.K(m,0,n)
k=A.K(n-m,0,n)
j=e.e7.e
j.toString
i=A.o(e).i("aB.1").a(j).aU$
j=i==null
if(!j){h=Math.max(a,s)
g=e.L3(e.ga1d(),A.K(q,-o,0),i,b,B.nY,p,a,0,l,r,h-a)
if(g!==0)return-g}q=e.e7
o=-s
h=Math.max(0,o)
o=j?Math.min(0,o):0
j=s>=a?s:r
f=e.b2
f.toString
return e.L3(e.ga1b(),A.K(s,-f,0),q,b,B.nX,j,a,o,k,p,h)},
No(a,b){var s,r,q,p,o=this
switch(t.p.a(A.B.prototype.ga1.call(a)).b.a){case 0:s=o.e7
for(r=A.o(o).i("aB.1"),q=0;s!==a;){q+=s.id.a
p=s.e
p.toString
s=r.a(p).ab$}return q+b
case 1:r=o.e7.e
r.toString
p=A.o(o).i("aB.1")
s=p.a(r).aU$
for(q=0;s!==a;){q-=s.id.a
r=s.e
r.toString
s=p.a(r).aU$}return q-b}},
a5y(a){var s,r,q,p=this
switch(t.p.a(A.B.prototype.ga1.call(a)).b.a){case 0:s=p.e7
for(r=A.o(p).i("aB.1");s!==a;){s.id.toString
q=s.e
q.toString
s=r.a(q).ab$}return 0
case 1:r=p.e7.e
r.toString
q=A.o(p).i("aB.1")
s=q.a(r).aU$
for(;s!==a;){s.id.toString
r=s.e
r.toString
s=q.a(r).aU$}return 0}},
dw(a,b){var s=a.e
s.toString
s=t.v.a(s).a
b.aD(0,s.a,s.b)},
a1E(a,b){var s,r=a.e
r.toString
t.v.a(r)
s=t.p
switch(A.k7(s.a(A.B.prototype.ga1.call(a)).a,s.a(A.B.prototype.ga1.call(a)).b)){case B.z:return b-r.a.b
case B.aA:return b-r.a.a
case B.A:return a.id.c-(b-r.a.b)
case B.ag:return a.id.c-(b-r.a.a)}},
gIR(){var s,r,q=this,p=A.a([],t.Ry),o=q.a8$
if(o==null)return p
for(s=A.o(q).i("aB.1");o!=q.e7;){o.toString
p.push(o)
r=o.e
r.toString
o=s.a(r).ab$}o=q.bG$
for(;!0;){o.toString
p.push(o)
if(o===q.e7)return p
r=o.e
r.toString
o=s.a(r).aU$}},
ga1g(){var s,r,q,p=this,o=A.a([],t.Ry)
if(p.a8$==null)return o
s=p.e7
for(r=A.o(p).i("aB.1");s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).ab$}q=p.e7.e
q.toString
s=r.a(q).aU$
for(;s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).aU$}return o}}
A.iI.prototype={
aw(a){var s,r,q
this.eG(a)
s=this.a8$
for(r=A.o(this).i("iI.0");s!=null;){s.aw(a)
q=s.e
q.toString
s=r.a(q).ab$}},
ao(a){var s,r,q
this.e_(0)
s=this.a8$
for(r=A.o(this).i("iI.0");s!=null;){s.ao(0)
q=s.e
q.toString
s=r.a(q).ab$}}}
A.q7.prototype={
G(){return"ScrollDirection."+this.b}}
A.fK.prototype={
ps(a,b,c,d){var s=d.a===B.v.a
if(s){this.dT(b)
return A.bG(null,t.H)}else return this.hz(b,c,d)},
k(a){var s=this,r=A.a([],t.s)
s.Q8(r)
r.push(A.C(s.w).k(0))
r.push(s.r.k(0))
r.push(A.h(s.fr))
r.push(s.k4.k(0))
return"<optimized out>#"+A.bS(s)+"("+B.c.b6(r,", ")+")"},
cl(a){var s=this.at
if(s!=null)a.push("offset: "+B.d.N(s,1))}}
A.ra.prototype={}
A.l8.prototype={
G(){return"SchedulerPhase."+this.b}}
A.a4P.prototype={}
A.dH.prototype={
a0B(a){var s=this.z$
s.push(a)
if(s.length===1){s=$.aR()
s.ay=this.gU7()
s.ch=$.aa}},
M_(a){var s=this.z$
B.c.v(s,a)
if(s.length===0){s=$.aR()
s.ay=null
s.ch=$.aa}},
U8(a){var s,r,q,p,o,n,m,l,k=this.z$,j=A.aA(k,!0,t.xt)
for(p=j.length,o=0;o<p;++o){s=j[o]
try{if(B.c.D(k,s))s.$1(a)}catch(n){r=A.af(n)
q=A.aw(n)
m=A.bs("while executing callbacks for FrameTiming")
l=$.fR()
if(l!=null)l.$1(new A.bQ(r,q,"Flutter framework",m,null,!1))}}},
tM(a){this.Q$=a
switch(a.a){case 0:case 1:this.H8(!0)
break
case 2:case 3:this.H8(!1)
break}},
F3(){if(this.ax$)return
this.ax$=!0
A.c6(B.v,this.gZq())},
Zr(){this.ax$=!1
if(this.a3E())this.F3()},
a3E(){var s,r,q,p,o,n,m=this,l="No element",k=m.at$,j=k.c===0
if(j||m.b>0)return!1
if(j)A.L(A.a6(l))
s=k.qC(0)
j=s.b
if(m.as$.$2$priority$scheduler(j,m)){try{if(k.c===0)A.L(A.a6(l));++k.d
k.qC(0)
p=k.c-1
o=k.qC(p)
k.b[p]=null
k.c=p
if(p>0)k.Sy(o,0)
s.a8r()}catch(n){r=A.af(n)
q=A.aw(n)
j=A.bs("during a task callback")
A.ed(new A.bQ(r,q,"scheduler library",j,null,!1))}return k.c!==0}return!1},
qg(a,b){var s,r=this
r.i6()
s=++r.ay$
r.ch$.j(0,s,new A.ra(a))
return r.ay$},
qf(a){return this.qg(a,!1)},
gJO(){var s=this
if(s.db$==null){if(s.dy$===B.cN)s.i6()
s.db$=new A.aI(new A.a7($.aa,t.U),t.Q)
s.cy$.push(new A.a7l(s))}return s.db$.a},
gKc(){return this.fr$},
H8(a){if(this.fr$===a)return
this.fr$=a
if(a)this.i6()},
JP(){var s=$.aR()
if(s.w==null){s.w=this.gVd()
s.x=$.aa}if(s.y==null){s.y=this.gVB()
s.z=$.aa}},
zv(){switch(this.dy$.a){case 0:case 4:this.i6()
return
case 1:case 2:case 3:return}},
i6(){var s,r=this
if(!r.dx$)s=!(A.dH.prototype.gKc.call(r)&&r.cL$)
else s=!0
if(s)return
r.JP()
$.aR().i6()
r.dx$=!0},
Nj(){if(this.dx$)return
this.JP()
$.aR().i6()
this.dx$=!0},
v8(){var s,r,q=this
if(q.fx$||q.dy$!==B.cN)return
q.fx$=!0
s=new A.Mc(null,0,A.a([],t._x))
s.ql(0,"Warm-up frame")
r=q.dx$
A.c6(B.v,new A.a7n(q))
A.c6(B.v,new A.a7o(q,r))
q.a5r(new A.a7p(q,s))},
a70(){var s=this
s.go$=s.DS(s.id$)
s.fy$=null},
DS(a){var s=this.fy$,r=s==null?B.v:new A.aU(a.a-s.a)
return A.bV(B.d.b0(r.a/$.asH)+this.go$.a,0,0)},
Ve(a){if(this.fx$){this.k4$=!0
return}this.Kf(a)},
VC(){var s=this
if(s.k4$){s.k4$=!1
s.cy$.push(new A.a7k(s))
return}s.Kh()},
Kf(a){var s,r,q=this,p=q.ok$,o=p==null
if(!o)p.ql(0,"Frame")
if(q.fy$==null)q.fy$=a
r=a==null
q.k1$=q.DS(r?q.id$:a)
if(!r)q.id$=a
q.dx$=!1
try{if(!o)p.ql(0,"Animate")
q.dy$=B.UO
s=q.ch$
q.ch$=A.y(t.S,t.h1)
J.iU(s,new A.a7m(q))
q.CW$.a_(0)}finally{q.dy$=B.UP}},
a6Z(a){var s=this,r=s.p1$,q=r==null
if(!q&&r!==a)return null
if(r===a)++s.p2$
else if(q){s.p1$=a
s.p2$=1}return new A.a4P(s.gTP())},
TQ(){if(--this.p2$===0){this.p1$=null
$.aR()}},
Kh(){var s,r,q,p,o,n,m,l=this,k=l.ok$,j=k==null
if(!j)k.tI(0)
try{l.dy$=B.dP
for(p=l.cx$,o=p.length,n=0;n<p.length;p.length===o||(0,A.Q)(p),++n){s=p[n]
m=l.k1$
m.toString
l.FQ(s,m)}l.dy$=B.UQ
p=l.cy$
r=A.aA(p,!0,t.Vu)
B.c.a_(p)
for(p=r,o=p.length,n=0;n<p.length;p.length===o||(0,A.Q)(p),++n){q=p[n]
m=l.k1$
m.toString
l.FQ(q,m)}}finally{l.dy$=B.cN
if(!j)k.tI(0)
l.k1$=null}},
FR(a,b,c){var s,r,q,p
try{a.$1(b)}catch(q){s=A.af(q)
r=A.aw(q)
p=A.bs("during a scheduler callback")
A.ed(new A.bQ(s,r,"scheduler library",p,null,!1))}},
FQ(a,b){return this.FR(a,b,null)}}
A.a7l.prototype={
$1(a){var s=this.a
s.db$.ep(0)
s.db$=null},
$S:2}
A.a7n.prototype={
$0(){this.a.Kf(null)},
$S:0}
A.a7o.prototype={
$0(){var s=this.a
s.Kh()
s.a70()
s.fx$=!1
if(this.b)s.i6()},
$S:0}
A.a7p.prototype={
$0(){var s=0,r=A.a2(t.H),q=this
var $async$$0=A.Z(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:s=2
return A.a4(q.a.gJO(),$async$$0)
case 2:q.b.tI(0)
return A.a0(null,r)}})
return A.a1($async$$0,r)},
$S:44}
A.a7k.prototype={
$1(a){var s=this.a
s.dx$=!1
s.i6()},
$S:2}
A.a7m.prototype={
$2(a,b){var s,r,q=this.a
if(!q.CW$.D(0,a)){s=b.a
r=q.k1$
r.toString
q.FR(s,r,b.b)}},
$S:267}
A.qG.prototype={
sAy(a,b){var s=this
if(b===s.b)return
s.b=b
if(b)s.BF()
else if(s.a!=null&&s.e==null)s.e=$.bJ.qg(s.gy3(),!1)},
ga56(){if(this.a==null)return!1
if(this.b)return!1
var s=$.bJ
s.toString
if(A.dH.prototype.gKc.call(s)&&s.cL$)return!0
if($.bJ.dy$!==B.cN)return!0
return!1},
jZ(a){var s,r,q=this
q.a=new A.nK(new A.aI(new A.a7($.aa,t.U),t.Q))
if(!q.b)s=q.e==null
else s=!1
if(s)q.e=$.bJ.qg(q.gy3(),!1)
s=$.bJ
r=s.dy$.a
if(r>0&&r<4){s=s.k1$
s.toString
q.c=s}s=q.a
s.toString
return s},
nd(a,b){var s=this,r=s.a
if(r==null)return
s.c=s.a=null
s.BF()
if(b)r.Ec(s)
else r.HF()},
hh(a){return this.nd(a,!1)},
a_p(a){var s,r=this
r.e=null
s=r.c
if(s==null)s=r.c=a
r.d.$1(new A.aU(a.a-s.a))
if(!r.b&&r.a!=null&&r.e==null)r.e=$.bJ.qg(r.gy3(),!0)},
BF(){var s,r=this.e
if(r!=null){s=$.bJ
s.ch$.v(0,r)
s.CW$.E(0,r)
this.e=null}},
m(){var s=this,r=s.a
if(r!=null){s.a=null
s.BF()
r.Ec(s)}},
a7n(a,b){var s=""+"Ticker()"
return s.charCodeAt(0)==0?s:s},
k(a){return this.a7n(a,!1)}}
A.nK.prototype={
HF(){this.c=!0
this.a.ep(0)
var s=this.b
if(s!=null)s.ep(0)},
Ec(a){var s
this.c=!1
s=this.b
if(s!=null)s.im(new A.ye(a))},
MD(a){var s,r,q=this,p=new A.abB(a)
if(q.b==null){s=q.b=new A.aI(new A.a7($.aa,t.U),t.Q)
r=q.c
if(r!=null)if(r)s.ep(0)
else s.im(B.a_p)}q.b.a.dY(p,p,t.H)},
ks(a,b){return this.a.a.ks(a,b)},
fV(a){return this.ks(a,null)},
dY(a,b,c){return this.a.a.dY(a,b,c)},
aE(a,b){return this.dY(a,null,b)},
eg(a){return this.a.a.eg(a)},
k(a){var s=A.bS(this),r=this.c
if(r==null)r="active"
else r=r?"complete":"canceled"
return"<optimized out>#"+s+"("+r+")"},
$iah:1}
A.abB.prototype={
$1(a){this.a.$0()},
$S:15}
A.ye.prototype={
k(a){var s=this.a
if(s!=null)return"This ticker was canceled: "+s.k(0)
return'The ticker was canceled before the "orCancel" property was first used.'},
$ibu:1}
A.a7R.prototype={}
A.xy.prototype={
k(a){return"SemanticsTag("+this.a+")"}}
A.cx.prototype={
V(a,b){var s,r,q,p,o,n,m,l=this.a,k=l.length
if(k===0)return b
s=b.a
if(s.length===0)return this
r=A.aA(this.b,!0,t.u1)
q=b.b
p=q.length
if(p!==0)for(o=0;o<q.length;q.length===p||(0,A.Q)(q),++o){n=q[o]
m=n.a
r.push(n.J5(new A.f4(m.a+k,m.b+k)))}return new A.cx(l+s,r)},
l(a,b){if(b==null)return!1
return J.Y(b)===A.C(this)&&b instanceof A.cx&&b.a===this.a&&A.cX(b.b,this.b)},
gu(a){return A.T(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a){return"AttributedString('"+this.a+"', attributes: "+A.h(this.b)+")"}}
A.Ld.prototype={
c4(){return"SemanticsData"},
l(a,b){var s=this
if(b==null)return!1
return b instanceof A.Ld&&b.a===s.a&&b.b===s.b&&b.c.l(0,s.c)&&b.d.l(0,s.d)&&b.e.l(0,s.e)&&b.f.l(0,s.f)&&b.r.l(0,s.r)&&b.w===s.w&&b.x==s.x&&b.cx.l(0,s.cx)&&A.anv(b.cy,s.cy)&&b.Q==s.Q&&b.as==s.as&&b.at==s.at&&b.ax==s.ax&&J.f(b.db,s.db)&&b.dx===s.dx&&b.dy===s.dy&&A.aBt(b.fr,s.fr)},
gu(a){var s=this,r=A.dj(s.fr)
return A.T(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.cx,s.cy,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,A.T(s.CW,s.db,s.dx,s.dy,r,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a))}}
A.Rs.prototype={}
A.Lf.prototype={
c4(){return"SemanticsProperties"}}
A.c5.prototype={
sbv(a,b){var s
if(!A.azQ(this.r,b)){s=A.alI(b)
this.r=s?null:b
this.ik()}},
saS(a,b){if(!this.w.l(0,b)){this.w=b
this.ik()}},
sKU(a){if(this.as===a)return
this.as=a
this.ik()},
Z8(a){var s,r,q,p,o,n,m,l=this,k=l.ax
if(k!=null)for(s=k.length,r=0;r<s;++r)k[r].ch=!0
for(k=a.length,r=0;r<k;++r)a[r].ch=!1
k=l.ax
if(k!=null)for(s=k.length,q=t.LQ,p=!1,r=0;r<k.length;k.length===s||(0,A.Q)(k),++r){o=k[r]
if(o.ch){n=J.ck(o)
if(q.a(A.N.prototype.gaO.call(n,o))===l){o.c=null
if(l.b!=null)o.ao(0)}p=!0}}else p=!1
for(k=a.length,s=t.LQ,r=0;r<a.length;a.length===k||(0,A.Q)(a),++r){o=a[r]
q=J.ck(o)
if(s.a(A.N.prototype.gaO.call(q,o))!==l){if(s.a(A.N.prototype.gaO.call(q,o))!=null){q=s.a(A.N.prototype.gaO.call(q,o))
if(q!=null){o.c=null
if(q.b!=null)o.ao(0)}}o.c=l
q=l.b
if(q!=null)o.aw(q)
q=o.a
n=l.a
if(q<=n){o.a=n+1
o.jJ()}p=!0}}if(!p&&l.ax!=null)for(k=l.ax,s=k.length,m=0;m<s;++m)if(k[m].e!==a[m].e){p=!0
break}l.ax=a
if(p)l.ik()},
ga4i(){var s=this.ax
s=s==null?null:s.length!==0
return s===!0},
yl(a){var s,r,q,p=this.ax
if(p!=null)for(s=p.length,r=0;r<p.length;p.length===s||(0,A.Q)(p),++r){q=p[r]
if(!a.$1(q)||!q.yl(a))return!1}return!0},
jJ(){var s=this.ax
if(s!=null)B.c.Z(s,this.gLS())},
aw(a){var s,r,q,p=this
p.vp(a)
for(s=a.c;s.R(0,p.e);)p.e=$.a87=($.a87+1)%65535
s.j(0,p.e,p)
a.d.v(0,p)
if(p.CW){p.CW=!1
p.ik()}s=p.ax
if(s!=null)for(r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].aw(a)},
ao(a){var s,r,q,p,o,n=this,m=t.m5
m.a(A.N.prototype.gbz.call(n)).c.v(0,n.e)
m.a(A.N.prototype.gbz.call(n)).d.E(0,n)
n.e_(0)
m=n.ax
if(m!=null)for(s=m.length,r=t.LQ,q=0;q<m.length;m.length===s||(0,A.Q)(m),++q){p=m[q]
o=J.ck(p)
if(r.a(A.N.prototype.gaO.call(o,p))===n)o.ao(p)}n.ik()},
ik(){var s=this
if(s.CW)return
s.CW=!0
if(s.b!=null)t.m5.a(A.N.prototype.gbz.call(s)).b.E(0,s)},
jO(a,b,c){var s,r=this
if(c==null)c=$.akA()
if(r.fr.l(0,c.p4))if(r.id.l(0,c.ry))if(r.k2===c.x2)if(r.k3===c.xr)if(r.fx.l(0,c.R8))if(r.fy.l(0,c.RG))if(r.go.l(0,c.rx))if(r.k1===c.to)if(r.dy===c.af)if(r.ok==c.y1)if(r.p1==c.id)if(r.RG==c.bL)if(r.rx==c.bt)if(r.ry==c.b9)if(r.db===c.f)if(r.Q==c.k1)s=r.at!==c.p2
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
if(s)r.ik()
r.fr=c.p4
r.fx=c.R8
r.fy=c.RG
r.go=c.rx
r.id=c.ry
r.k1=c.to
r.k4=c.x1
r.k2=c.x2
r.k3=c.xr
r.dy=c.af
r.ok=c.y1
r.p1=c.id
r.cx=A.pu(c.e,t._S,t.HT)
r.cy=A.pu(c.p3,t.I7,t.M)
r.db=c.f
r.p2=c.y2
r.RG=c.bL
r.rx=c.bt
r.ry=c.b9
r.at=c.p2
r.p4=c.k2
r.R8=c.k3
r.Q=c.k1
r.to=c.k4
r.x1=c.ok
r.x2=c.p1
r.Z8(b==null?B.ig:b)},
a7C(a,b){return this.jO(a,null,b)},
N9(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7={}
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
a7.y=s==null?null:A.kM(s,t.g3)
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
for(s=a6.cy,s=A.jh(s,s.r);s.t();)q.E(0,A.aoT(s.d))
a6.k4!=null
if(a6.at)a6.yl(new A.a88(a7,a6,q))
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
a5=A.aA(q,!0,q.$ti.c)
B.c.ia(a5)
return new A.Ld(s,p,o,n,m,l,k,j,i,d,c,b,a,a0,a1,a2,a3,a4,h,e,g,r,f,a5)},
Sk(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.N9()
if(!a.ga4i()||a.at){s=$.aut()
r=s}else{q=a.ax.length
p=a.T1()
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
if(c==null)c=$.auv()
b=l==null?$.auu():l
a1.a.push(new A.Le(n,a0.a,a0.b,-1,-1,-1,0,g,f,e,d,a0.cx,m.a,m.b,h.a,h.b,k.a,k.b,j.a,j.b,i.a,i.b,a0.w,a0.x,A.any(c),s,r,b,a0.dy))
a.CW=!1},
T1(){var s,r,q,p,o,n,m,l,k,j=this,i=j.ok,h=t.LQ,g=h.a(A.N.prototype.gaO.call(j,j))
while(!0){s=i==null
if(!(s&&g!=null))break
i=g.ok
g=h.a(A.N.prototype.gaO.call(g,g))}r=j.ax
if(!s){r.toString
r=A.aDP(r,i)}h=t.NM
q=A.a([],h)
p=A.a([],h)
for(o=null,n=0;n<r.length;++n){m=r[n]
l=m.p1
o=n>0?r[n-1].p1:null
if(n!==0)if(J.Y(l)===J.Y(o)){if(l!=null)o.toString
k=!0}else k=!1
else k=!0
if(!k&&p.length!==0){if(o!=null){if(!!p.immutable$list)A.L(A.P("sort"))
h=p.length-1
if(h-0<=32)A.Lz(p,0,h,J.an4())
else A.Ly(p,0,h,J.an4())}B.c.K(q,p)
B.c.a_(p)}p.push(new A.jV(m,l,n))}if(o!=null)B.c.ia(p)
B.c.K(q,p)
h=t.rB
return A.aA(new A.au(q,new A.a86(),h),!0,h.i("bh.E"))},
Nu(a){if(this.b==null)return
B.mq.eA(0,a.Mm(this.e))},
c4(){return"SemanticsNode#"+this.e},
a7j(a,b,c){return new A.Rs(a,this,b,!0,!0,null,c)},
Mk(a){return this.a7j(B.FU,null,a)}}
A.a88.prototype={
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
if(s!=null){r=q.y;(r==null?q.y=A.b7(t.g3):r).K(0,s)}for(s=this.b.cy,s=A.jh(s,s.r),r=this.c;s.t();)r.E(0,A.aoT(s.d))
a.k4!=null
s=q.c
r=q.x
q.c=A.aio(a.fr,a.ok,s,r)
r=q.r
s=q.x
q.r=A.aio(a.id,a.ok,r,s)
q.cy=Math.max(q.cy,a.k3+a.k2)
return!0},
$S:73}
A.a86.prototype={
$1(a){return a.a},
$S:269}
A.jL.prototype={
aG(a,b){return B.d.aG(this.b,b.b)},
$ib9:1}
A.hC.prototype={
aG(a,b){return B.d.aG(this.a,b.a)},
NX(){var s,r,q,p,o,n,m,l,k,j=A.a([],t.TV)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q){p=s[q]
o=p.w
j.push(new A.jL(!0,A.og(p,new A.t(o.a- -0.1,o.b- -0.1)).a,p))
j.push(new A.jL(!1,A.og(p,new A.t(o.c+-0.1,o.d+-0.1)).a,p))}B.c.ia(j)
n=A.a([],t.YK)
for(s=j.length,r=this.b,o=t.V,m=null,l=0,q=0;q<j.length;j.length===s||(0,A.Q)(j),++q){k=j[q]
if(k.a){++l
if(m==null)m=new A.hC(k.b,r,A.a([],o))
m.c.push(k.c)}else --l
if(l===0){m.toString
n.push(m)
m=null}}B.c.ia(n)
if(r===B.a1){s=t.o_
n=A.aA(new A.cE(n,s),!0,s.i("bh.E"))}s=A.al(n).i("h3<1,c5>")
return A.aA(new A.h3(n,new A.ah7(),s),!0,s.i("p.E"))},
NW(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this.c,a4=a3.length
if(a4<=1)return a3
s=t.S
r=A.y(s,t.bu)
q=A.y(s,s)
for(p=this.b,o=p===B.a1,p=p===B.w,n=a4,m=0;m<n;g===a4||(0,A.Q)(a3),++m,n=g){l=a3[m]
r.j(0,l.e,l)
n=l.w
k=n.a
j=n.b
i=A.og(l,new A.t(k+(n.c-k)/2,j+(n.d-j)/2))
for(n=a3.length,k=i.a,j=i.b,h=0;g=a3.length,h<g;a3.length===n||(0,A.Q)(a3),++h){f=a3[h]
if((l==null?f==null:l===f)||q.h(0,f.e)===l.e)continue
g=f.w
e=g.a
d=g.b
c=A.og(f,new A.t(e+(g.c-e)/2,d+(g.d-d)/2))
b=Math.atan2(c.b-j,c.a-k)
a=p&&-0.7853981633974483<b&&b<2.356194490192345
if(o)a0=b<-2.356194490192345||b>2.356194490192345
else a0=!1
if(a||a0)q.j(0,l.e,f.e)}}a1=A.a([],t.t)
a2=A.a(a3.slice(0),A.al(a3))
B.c.dn(a2,new A.ah3())
new A.au(a2,new A.ah4(),A.al(a2).i("au<1,k>")).Z(0,new A.ah6(A.b7(s),q,a1))
a3=t.qn
a3=A.aA(new A.au(a1,new A.ah5(r),a3),!0,a3.i("bh.E"))
a4=A.al(a3).i("cE<1>")
return A.aA(new A.cE(a3,a4),!0,a4.i("bh.E"))}}
A.ah7.prototype={
$1(a){return a.NW()},
$S:104}
A.ah3.prototype={
$2(a,b){var s,r,q=a.w,p=A.og(a,new A.t(q.a,q.b))
q=b.w
s=A.og(b,new A.t(q.a,q.b))
r=B.d.aG(p.b,s.b)
if(r!==0)return-r
return-B.d.aG(p.a,s.a)},
$S:71}
A.ah6.prototype={
$1(a){var s=this,r=s.a
if(r.D(0,a))return
r.E(0,a)
r=s.b
if(r.R(0,a)){r=r.h(0,a)
r.toString
s.$1(r)}s.c.push(a)},
$S:75}
A.ah4.prototype={
$1(a){return a.e},
$S:272}
A.ah5.prototype={
$1(a){var s=this.a.h(0,a)
s.toString
return s},
$S:273}
A.aik.prototype={
$1(a){return a.NX()},
$S:104}
A.jV.prototype={
aG(a,b){var s,r=this.b
if(r==null||b.b==null)return this.c-b.c
r.toString
s=b.b
s.toString
return r.aG(0,s)},
$ib9:1}
A.xx.prototype={
Nv(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.b
if(e.a===0)return
s=A.b7(t.S)
r=A.a([],t.V)
for(q=t.LQ,p=A.o(e).i("aO<1>"),o=p.i("p.E"),n=f.d;e.a!==0;){m=A.aA(new A.aO(e,new A.a8b(f),p),!0,o)
e.a_(0)
n.a_(0)
l=new A.a8c()
if(!!m.immutable$list)A.L(A.P("sort"))
k=m.length-1
if(k-0<=32)A.Lz(m,0,k,l)
else A.Ly(m,0,k,l)
B.c.K(r,m)
for(l=m.length,j=0;j<m.length;m.length===l||(0,A.Q)(m),++j){i=m[j]
if(i.at||i.as){k=J.ck(i)
if(q.a(A.N.prototype.gaO.call(k,i))!=null){h=q.a(A.N.prototype.gaO.call(k,i))
h=h.at||h.as}else h=!1
if(h){q.a(A.N.prototype.gaO.call(k,i)).ik()
i.CW=!1}}}}B.c.dn(r,new A.a8d())
$.a7S.toString
g=new A.a8f(A.a([],t.o4))
for(q=r.length,j=0;j<r.length;r.length===q||(0,A.Q)(r),++j){i=r[j]
if(i.CW&&i.b!=null)i.Sk(g,s)}e.a_(0)
for(e=A.jR(s,s.r),q=A.o(e).c;e.t();){p=e.d
$.aoQ.h(0,p==null?q.a(p):p).toString}f.a.$1(new A.Lh(g.a))
f.aC()},
UY(a,b){var s,r={},q=r.a=this.c.h(0,a)
if(q!=null)s=(q.at||q.as)&&!q.cx.R(0,b)
else s=!1
if(s)q.yl(new A.a8a(r,b))
s=r.a
if(s==null||!s.cx.R(0,b))return null
return r.a.cx.h(0,b)},
a6a(a,b,c){var s=this.UY(a,b)
if(s!=null){s.$1(c)
return}if(b===B.Vb&&this.c.h(0,a).f!=null)this.c.h(0,a).f.$0()},
k(a){return"<optimized out>#"+A.bS(this)}}
A.a8b.prototype={
$1(a){return!this.a.d.D(0,a)},
$S:73}
A.a8c.prototype={
$2(a,b){return a.a-b.a},
$S:71}
A.a8d.prototype={
$2(a,b){return a.a-b.a},
$S:71}
A.a8a.prototype={
$1(a){if(a.cx.R(0,this.b)){this.a.a=a
return!1}return!0},
$S:73}
A.a7T.prototype={
k_(a,b){var s=this
s.e.j(0,a,b)
s.f=s.f|a.a
s.d=!0},
ek(a,b){this.k_(a,new A.a7U(b))},
sjF(a){a.toString
this.ek(B.dT,a)},
skV(a){a.toString
this.ek(B.BA,a)},
sul(a){this.ek(B.dW,a)},
suj(a){this.ek(B.Vc,a)},
sum(a){this.ek(B.dX,a)},
sun(a){this.ek(B.dU,a)},
suk(a){this.ek(B.dV,a)},
sAO(a){this.ek(B.BB,a)},
sAH(a){this.ek(B.Bz,a)},
sAE(a,b){this.ek(B.Ve,b)},
sAF(a,b){this.ek(B.Vi,b)},
sAV(a,b){this.ek(B.V8,b)},
sAT(a){this.k_(B.Vf,new A.a7X(a))},
sAR(a){this.k_(B.V6,new A.a7V(a))},
sAU(a){this.k_(B.Vg,new A.a7Y(a))},
sAS(a){this.k_(B.V7,new A.a7W(a))},
sAY(a){this.k_(B.V9,new A.a7Z(a))},
sAZ(a){this.k_(B.Va,new A.a8_(a))},
sAI(a){this.ek(B.Vd,a)},
sAJ(a){this.ek(B.Vh,a)},
sNm(a){return},
sNn(a){if(a==this.k3)return
this.k3=a
this.d=!0},
sAq(a){return},
sz1(a){return},
sit(a,b){if(b===this.x2)return
this.x2=b
this.d=!0},
Iu(a){var s=this.aj;(s==null?this.aj=A.b7(t.g3):s).E(0,a)},
bc(a,b){var s=this,r=s.af,q=a.a
if(b)s.af=r|q
else s.af=r&~q
s.d=!0},
KR(a){var s,r=this
if(a==null||!a.d||!r.d)return!0
if((r.f&a.f)!==0)return!1
if((r.af&a.af)!==0)return!1
if(r.R8.a.length!==0)s=a.R8.a.length!==0
else s=!1
if(s)return!1
return!0},
km(a){var s,r,q=this
if(!a.d)return
q.e.K(0,a.e)
q.p3.K(0,a.p3)
q.f=q.f|a.f
q.af=q.af|a.af
q.y2=a.y2
if(q.bL==null)q.bL=a.bL
if(q.bt==null)q.bt=a.bt
if(q.b9==null)q.b9=a.b9
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
q.p4=A.aio(a.p4,a.y1,r,s)
s=q.R8
if(s.a==="")q.R8=a.R8
s=q.RG
if(s.a==="")q.RG=a.RG
s=q.rx
if(s.a==="")q.rx=a.rx
s=q.ry
r=q.y1
q.ry=A.aio(a.ry,a.y1,s,r)
if(q.to==="")q.to=a.to
q.xr=Math.max(q.xr,a.xr+a.x2)
q.d=q.d||a.d},
a1T(){var s=this,r=A.qd()
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
r.af=s.af
r.aj=s.aj
r.y2=s.y2
r.bL=s.bL
r.bt=s.bt
r.b9=s.b9
r.f=s.f
r.k1=s.k1
r.k3=s.k3
r.k2=s.k2
r.k4=s.k4
r.ok=s.ok
r.p1=s.p1
r.e.K(0,s.e)
r.p3.K(0,s.p3)
return r}}
A.a7U.prototype={
$1(a){this.a.$0()},
$S:5}
A.a7X.prototype={
$1(a){a.toString
this.a.$1(A.od(a))},
$S:5}
A.a7V.prototype={
$1(a){a.toString
this.a.$1(A.od(a))},
$S:5}
A.a7Y.prototype={
$1(a){a.toString
this.a.$1(A.od(a))},
$S:5}
A.a7W.prototype={
$1(a){a.toString
this.a.$1(A.od(a))},
$S:5}
A.a7Z.prototype={
$1(a){var s,r,q
a.toString
s=J.akG(t.G.a(a),t.N,t.S)
r=s.h(0,"base")
r.toString
q=s.h(0,"extent")
q.toString
this.a.$1(A.abw(B.F,r,q,!1))},
$S:5}
A.a8_.prototype={
$1(a){a.toString
this.a.$1(A.bK(a))},
$S:5}
A.EA.prototype={
G(){return"DebugSemanticsDumpOrder."+this.b}}
A.qe.prototype={
aG(a,b){var s=this.a2T(b)
return s},
$ib9:1}
A.wo.prototype={
a2T(a){var s=a.b===this.b
if(s)return 0
return B.f.aG(this.b,a.b)}}
A.Rr.prototype={}
A.Rt.prototype={}
A.Ru.prototype={}
A.a81.prototype={
Mm(a){var s=A.aV(["type",this.a,"data",this.q5()],t.N,t.z)
if(a!=null)s.j(0,"nodeId",a)
return s},
a7m(){return this.Mm(null)},
k(a){var s,r,q,p=A.a([],t.s),o=this.q5(),n=J.aom(o.gbu(o))
B.c.ia(n)
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.Q)(n),++r){q=n[r]
p.push(A.h(q)+": "+A.h(o.h(0,q)))}return"SemanticsEvent("+B.c.b6(p,", ")+")"}}
A.abD.prototype={
q5(){return A.aV(["message",this.b],t.N,t.z)}}
A.a2Z.prototype={
q5(){return B.iG}}
A.ab_.prototype={
q5(){return B.iG}}
A.BX.prototype={
kR(a,b){return this.a5p(a,!0)},
a5p(a,b){var s=0,r=A.a2(t.N),q,p=this,o
var $async$kR=A.Z(function(c,d){if(c===1)return A.a_(d,r)
while(true)switch(s){case 0:s=3
return A.a4(p.d1(0,a),$async$kR)
case 3:o=d
if(o.byteLength<51200){q=B.Z.e2(0,A.cP(o.buffer,0,null))
s=1
break}q=A.Ud(A.aFi(),o,'UTF8 decode for "'+a+'"',t.V4,t.N)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$kR,r)},
k(a){return"<optimized out>#"+A.bS(this)+"()"}}
A.W4.prototype={
kR(a,b){return this.O4(a,!0)},
a5q(a,b,c){var s,r={},q=this.b
if(q.R(0,a)){r=q.h(0,a)
r.toString
return c.i("ah<0>").a(r)}r.a=r.b=null
this.kR(a,!1).aE(b,c).aE(new A.W5(r,this,a,c),t.H)
s=r.a
if(s!=null)return s
s=new A.a7($.aa,c.i("a7<0>"))
r.b=new A.aI(s,c.i("aI<0>"))
q.j(0,a,s)
return r.b.a}}
A.W5.prototype={
$1(a){var s=this,r=new A.bt(a,s.d.i("bt<0>")),q=s.a
q.a=r
s.b.b.j(0,s.c,r)
q=q.b
if(q!=null)q.bK(0,a)},
$S(){return this.d.i("ar(0)")}}
A.a4Y.prototype={
d1(a,b){var s,r=B.ch.eq(A.arH(A.AV(B.ih,b,B.Z,!1)).e),q=$.hp.ag$
q===$&&A.b()
s=q.vb(0,"flutter/assets",A.kR(r.buffer,0,null)).aE(new A.a4Z(b),t.V4)
return s},
u8(a){return this.a5n(a)},
a5n(a){var s=0,r=A.a2(t.SG),q,p=this,o
var $async$u8=A.Z(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:s=3
return A.a4(p.d1(0,a),$async$u8)
case 3:o=c
q=A.a23(A.cP(o.buffer,0,null))
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$u8,r)}}
A.a4Z.prototype={
$1(a){if(a==null)throw A.c(A.alj(A.a([A.aEf(this.a),A.bs("The asset does not exist or has empty data.")],t.F)))
return a},
$S:274}
A.Vj.prototype={}
A.qf.prototype={
p7(){var s=$.Uw()
s.a.a_(0)
s.b.a_(0)},
jt(a){return this.a46(a)},
a46(a){var s=0,r=A.a2(t.H),q,p=this
var $async$jt=A.Z(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:switch(A.bK(J.aS(t.a.a(a),"type"))){case"memoryPressure":p.p7()
break}s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$jt,r)},
Sf(){var s=A.b8("controller")
s.sc9(A.qp(null,new A.a8i(s),null,!1,t.hz))
return J.awk(s.aF())},
a6u(){if(this.Q$!=null)return
$.aR()
var s=A.aqF("AppLifecycleState.resumed")
if(s!=null)this.tM(s)},
x3(a){return this.VU(a)},
VU(a){var s=0,r=A.a2(t.ob),q,p=this,o
var $async$x3=A.Z(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:a.toString
o=A.aqF(a)
o.toString
p.tM(o)
q=null
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$x3,r)},
x4(a){return this.W2(a)},
W2(a){var s=0,r=A.a2(t.H)
var $async$x4=A.Z(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:t.j.a(a.b)
return A.a0(null,r)}})
return A.a1($async$x4,r)},
$idH:1}
A.a8i.prototype={
$0(){var s=0,r=A.a2(t.H),q=this,p,o,n
var $async$$0=A.Z(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:o=A.b8("rawLicenses")
n=o
s=2
return A.a4($.Uw().kR("NOTICES",!1),$async$$0)
case 2:n.sc9(b)
p=q.a
n=J
s=3
return A.a4(A.Ud(A.aFq(),o.aF(),"parseLicenses",t.N,t.qC),$async$$0)
case 3:n.iU(b,J.awd(p.aF()))
s=4
return A.a4(J.aoe(p.aF()),$async$$0)
case 4:return A.a0(null,r)}})
return A.a1($async$$0,r)},
$S:44}
A.adj.prototype={
vb(a,b,c){var s=new A.a7($.aa,t.gg)
$.aR().ZO(b,c,A.aym(new A.adk(new A.aI(s,t.yB))))
return s},
Cv(a,b){if(b==null){a=$.Uu().a.h(0,a)
if(a!=null)a.e=null}else $.Uu().NB(a,new A.adl(b))}}
A.adk.prototype={
$1(a){var s,r,q,p
try{this.a.bK(0,a)}catch(q){s=A.af(q)
r=A.aw(q)
p=A.bs("during a platform message response callback")
A.ed(new A.bQ(s,r,"services library",p,null,!1))}},
$S:21}
A.adl.prototype={
$2(a,b){return this.MQ(a,b)},
MQ(a,b){var s=0,r=A.a2(t.H),q=1,p,o=[],n=this,m,l,k,j,i,h
var $async$$2=A.Z(function(c,d){if(c===1){p=d
s=q}while(true)switch(s){case 0:i=null
q=3
s=6
return A.a4(n.a.$1(a),$async$$2)
case 6:i=d
o.push(5)
s=4
break
case 3:q=2
h=p
m=A.af(h)
l=A.aw(h)
j=A.bs("during a platform message callback")
A.ed(new A.bQ(m,l,"services library",j,null,!1))
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
$S:278}
A.Zm.prototype={}
A.YI.prototype={}
A.YR.prototype={}
A.F2.prototype={}
A.Zo.prototype={}
A.F0.prototype={}
A.YZ.prototype={}
A.Yd.prototype={}
A.Z_.prototype={}
A.F8.prototype={}
A.EZ.prototype={}
A.F5.prototype={}
A.Fi.prototype={}
A.YN.prototype={}
A.Z4.prototype={}
A.Ym.prototype={}
A.YA.prototype={}
A.XY.prototype={}
A.Yq.prototype={}
A.Fd.prototype={}
A.Y_.prototype={}
A.Z9.prototype={}
A.ps.prototype={}
A.kG.prototype={}
A.mR.prototype={}
A.kH.prototype={}
A.vl.prototype={}
A.a0S.prototype={
TI(a){var s,r,q,p,o,n,m,l,k,j
this.d=!0
s=!1
for(n=this.c,m=0;!1;++m){r=n[m]
try{q=r.$1(a)
s=s||q}catch(l){p=A.af(l)
o=A.aw(l)
k=A.bs("while processing a key handler")
j=$.fR()
if(j!=null)j.$1(new A.bQ(p,o,"services library",k,null,!1))}}this.d=!1
return s},
Kj(a){var s,r,q=this,p=a.a,o=a.b
if(a instanceof A.mR){q.a.j(0,p,o)
s=$.auh().h(0,o.a)
if(s!=null){r=q.b
if(r.D(0,s))r.v(0,s)
else r.E(0,s)}}else if(a instanceof A.kH)q.a.v(0,p)
return q.TI(a)}}
A.vj.prototype={
G(){return"KeyDataTransitMode."+this.b}}
A.vk.prototype={
k(a){return"KeyMessage("+A.h(this.a)+")"}}
A.GI.prototype={
a3K(a){var s,r=this,q=r.d
switch((q==null?r.d=B.Hs:q).a){case 0:return!1
case 1:if(a.c===0&&a.d===0)return!1
s=A.azj(a)
if(a.f&&r.e.length===0){r.b.Kj(s)
r.ER(A.a([s],t.K0),null)}else r.e.push(s)
return!1}},
ER(a,b){var s,r,q,p,o=this.a
if(o!=null){s=new A.vk(a,b)
try{o=o.$1(s)
return o}catch(p){r=A.af(p)
q=A.aw(p)
o=A.bs("while processing the key message handler")
A.ed(new A.bQ(r,q,"services library",o,null,!1))}}return!1},
zU(a){var s=0,r=A.a2(t.a),q,p=this,o,n,m,l,k,j,i
var $async$zU=A.Z(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:if(p.d==null){p.d=B.Hr
p.c.a.push(p.gTm())}o=A.aB0(t.a.a(a))
if(o instanceof A.ij){n=o.c
m=p.f
if(!n.NM()){m.E(0,n.gdW())
l=!1}else{m.v(0,n.gdW())
l=!0}}else if(o instanceof A.pS){n=p.f
m=o.c
if(n.D(0,m.gdW())){n.v(0,m.gdW())
l=!1}else l=!0}else l=!0
if(l){p.c.a40(o)
for(n=p.e,m=n.length,k=p.b,j=!1,i=0;i<n.length;n.length===m||(0,A.Q)(n),++i)j=k.Kj(n[i])||j
j=p.ER(n,o)||j
B.c.a_(n)}else j=!0
q=A.aV(["handled",j],t.N,t.z)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$zU,r)},
Tn(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.c,d=e.gdW(),c=e.gpm()
e=this.b.a
s=A.o(e).i("bb<1>")
r=A.kM(new A.bb(e,s),s.i("p.E"))
q=A.a([],t.K0)
p=e.h(0,d)
o=$.hp.id$
n=a.a
if(n==="")n=f
if(a instanceof A.ij)if(p==null){m=new A.mR(d,c,n,o,!1)
r.E(0,d)}else m=new A.vl(d,p,n,o,!1)
else if(p==null)m=f
else{m=new A.kH(d,p,f,o,!1)
r.v(0,d)}for(s=this.c.d,l=A.o(s).i("bb<1>"),k=l.i("p.E"),j=r.kA(A.kM(new A.bb(s,l),k)),j=j.ga5(j),i=this.e;j.t();){h=j.gH(j)
if(h.l(0,d))q.push(new A.kH(h,c,f,o,!0))
else{g=e.h(0,h)
g.toString
i.push(new A.kH(h,g,f,o,!0))}}for(e=A.kM(new A.bb(s,l),k).kA(r),e=e.ga5(e);e.t();){l=e.gH(e)
k=s.h(0,l)
k.toString
i.push(new A.mR(l,k,f,o,!0))}if(m!=null)i.push(m)
B.c.K(i,q)}}
A.P6.prototype={}
A.a2K.prototype={}
A.e.prototype={
gu(a){return B.f.gu(this.a)},
l(a,b){if(b==null)return!1
if(this===b)return!0
if(J.Y(b)!==A.C(this))return!1
return b instanceof A.e&&b.a===this.a}}
A.m.prototype={
gu(a){return B.f.gu(this.a)},
l(a,b){if(b==null)return!1
if(this===b)return!0
if(J.Y(b)!==A.C(this))return!1
return b instanceof A.m&&b.a===this.a}}
A.P7.prototype={}
A.i7.prototype={
k(a){return"MethodCall("+this.a+", "+A.h(this.b)+")"}}
A.wG.prototype={
k(a){var s=this
return"PlatformException("+s.a+", "+A.h(s.b)+", "+A.h(s.c)+", "+A.h(s.d)+")"},
$ibu:1}
A.vZ.prototype={
k(a){return"MissingPluginException("+A.h(this.a)+")"},
$ibu:1}
A.aaB.prototype={
eU(a){if(a==null)return null
return B.cV.eq(A.cP(a.buffer,a.byteOffset,a.byteLength))},
bX(a){if(a==null)return null
return A.kR(B.ch.eq(a).buffer,0,null)}}
A.a2g.prototype={
bX(a){if(a==null)return null
return B.hx.bX(B.Y.tv(a))},
eU(a){var s
if(a==null)return a
s=B.hx.eU(a)
s.toString
return B.Y.e2(0,s)}}
A.a2i.prototype={
h_(a){var s=B.bR.bX(A.aV(["method",a.a,"args",a.b],t.N,t.X))
s.toString
return s},
fY(a){var s,r,q,p=null,o=B.bR.eU(a)
if(!t.G.b(o))throw A.c(A.bA("Expected method call Map, got "+A.h(o),p,p))
s=J.aJ(o)
r=s.h(o,"method")
q=s.h(o,"args")
if(typeof r=="string")return new A.i7(r,q)
throw A.c(A.bA("Invalid method call: "+A.h(o),p,p))},
Jl(a){var s,r,q,p=null,o=B.bR.eU(a)
if(!t.j.b(o))throw A.c(A.bA("Expected envelope List, got "+A.h(o),p,p))
s=J.aJ(o)
if(s.gp(o)===1)return s.h(o,0)
if(s.gp(o)===3)if(typeof s.h(o,0)=="string")r=s.h(o,1)==null||typeof s.h(o,1)=="string"
else r=!1
else r=!1
if(r){r=A.bK(s.h(o,0))
q=A.cu(s.h(o,1))
throw A.c(A.alS(r,s.h(o,2),q,p))}if(s.gp(o)===4)if(typeof s.h(o,0)=="string")if(s.h(o,1)==null||typeof s.h(o,1)=="string")r=s.h(o,3)==null||typeof s.h(o,3)=="string"
else r=!1
else r=!1
else r=!1
if(r){r=A.bK(s.h(o,0))
q=A.cu(s.h(o,1))
throw A.c(A.alS(r,s.h(o,2),q,A.cu(s.h(o,3))))}throw A.c(A.bA("Invalid envelope: "+A.h(o),p,p))},
oK(a){var s=B.bR.bX([a])
s.toString
return s},
kD(a,b,c){var s=B.bR.bX([a,c,b])
s.toString
return s},
JL(a,b){return this.kD(a,null,b)}}
A.aak.prototype={
bX(a){var s
if(a==null)return null
s=A.aci(64)
this.d2(0,s,a)
return s.jf()},
eU(a){var s,r
if(a==null)return null
s=new A.wQ(a)
r=this.fE(0,s)
if(s.b<a.byteLength)throw A.c(B.aJ)
return r},
d2(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i=null
if(c==null)b.dt(0,0)
else if(A.k3(c))b.dt(0,c?1:2)
else if(typeof c=="number"){b.dt(0,6)
b.hn(8)
s=$.cY()
b.d.setFloat64(0,c,B.aa===s)
b.S6(b.e)}else if(A.k4(c)){s=-2147483648<=c&&c<=2147483647
r=b.d
if(s){b.dt(0,3)
s=$.cY()
r.setInt32(0,c,B.aa===s)
b.nm(b.e,0,4)}else{b.dt(0,4)
s=$.cY()
B.fz.Ct(r,0,c,s)}}else if(typeof c=="string"){b.dt(0,7)
s=c.length
q=new Uint8Array(s)
n=0
while(!0){if(!(n<s)){p=i
o=0
break}m=B.b.W(c,n)
if(m<=127)q[n]=m
else{p=B.ch.eq(B.b.bQ(c,n))
o=n
break}++n}if(p!=null){j.eh(b,o+p.length)
l=q.BYTES_PER_ELEMENT
k=A.dk(0,o,B.f.hm(q.byteLength,l),i,i)
b.k0(A.cP(q.buffer,q.byteOffset+0*l,(k-0)*l))
b.k0(p)}else{j.eh(b,s)
b.k0(q)}}else if(t.H3.b(c)){b.dt(0,8)
j.eh(b,c.length)
b.k0(c)}else if(t.XO.b(c)){b.dt(0,9)
s=c.length
j.eh(b,s)
b.hn(4)
b.k0(A.cP(c.buffer,c.byteOffset,4*s))}else if(t.s4.b(c)){b.dt(0,14)
s=c.length
j.eh(b,s)
b.hn(4)
b.k0(A.cP(c.buffer,c.byteOffset,4*s))}else if(t.OE.b(c)){b.dt(0,11)
s=c.length
j.eh(b,s)
b.hn(8)
b.k0(A.cP(c.buffer,c.byteOffset,8*s))}else if(t.j.b(c)){b.dt(0,12)
s=J.aJ(c)
j.eh(b,s.gp(c))
for(s=s.ga5(c);s.t();)j.d2(0,b,s.gH(s))}else if(t.G.b(c)){b.dt(0,13)
s=J.aJ(c)
j.eh(b,s.gp(c))
s.Z(c,new A.aal(j,b))}else throw A.c(A.f8(c,i,i))},
fE(a,b){if(b.b>=b.a.byteLength)throw A.c(B.aJ)
return this.iL(b.l7(0),b)},
iL(a,b){var s,r,q,p,o,n,m,l,k=this
switch(a){case 0:return null
case 1:return!0
case 2:return!1
case 3:s=b.b
r=$.cY()
q=b.a.getInt32(s,B.aa===r)
b.b+=4
return q
case 4:return b.v1(0)
case 6:b.hn(8)
s=b.b
r=$.cY()
q=b.a.getFloat64(s,B.aa===r)
b.b+=8
return q
case 5:case 7:p=k.dD(b)
return B.cV.eq(b.l8(p))
case 8:return b.l8(k.dD(b))
case 9:p=k.dD(b)
b.hn(4)
s=b.a
o=A.apY(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+4*p
return o
case 10:return b.v2(k.dD(b))
case 14:p=k.dD(b)
b.hn(4)
s=b.a
r=s.buffer
s=s.byteOffset+b.b
A.U1(r,s,p)
o=new Float32Array(r,s,p)
b.b=b.b+4*p
return o
case 11:p=k.dD(b)
b.hn(8)
s=b.a
o=A.apW(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+8*p
return o
case 12:p=k.dD(b)
n=A.aW(p,null,!1,t.X)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.L(B.aJ)
b.b=r+1
n[m]=k.iL(s.getUint8(r),b)}return n
case 13:p=k.dD(b)
s=t.X
n=A.y(s,s)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.L(B.aJ)
b.b=r+1
r=k.iL(s.getUint8(r),b)
l=b.b
if(l>=s.byteLength)A.L(B.aJ)
b.b=l+1
n.j(0,r,k.iL(s.getUint8(l),b))}return n
default:throw A.c(B.aJ)}},
eh(a,b){var s,r
if(b<254)a.dt(0,b)
else{s=a.d
if(b<=65535){a.dt(0,254)
r=$.cY()
s.setUint16(0,b,B.aa===r)
a.nm(a.e,0,2)}else{a.dt(0,255)
r=$.cY()
s.setUint32(0,b,B.aa===r)
a.nm(a.e,0,4)}}},
dD(a){var s,r,q=a.l7(0)
switch(q){case 254:s=a.b
r=$.cY()
q=a.a.getUint16(s,B.aa===r)
a.b+=2
return q
case 255:s=a.b
r=$.cY()
q=a.a.getUint32(s,B.aa===r)
a.b+=4
return q
default:return q}}}
A.aal.prototype={
$2(a,b){var s=this.a,r=this.b
s.d2(0,r,a)
s.d2(0,r,b)},
$S:76}
A.aao.prototype={
h_(a){var s=A.aci(64)
B.ai.d2(0,s,a.a)
B.ai.d2(0,s,a.b)
return s.jf()},
fY(a){var s,r,q
a.toString
s=new A.wQ(a)
r=B.ai.fE(0,s)
q=B.ai.fE(0,s)
if(typeof r=="string"&&s.b>=a.byteLength)return new A.i7(r,q)
else throw A.c(B.nS)},
oK(a){var s=A.aci(64)
s.dt(0,0)
B.ai.d2(0,s,a)
return s.jf()},
kD(a,b,c){var s=A.aci(64)
s.dt(0,1)
B.ai.d2(0,s,a)
B.ai.d2(0,s,c)
B.ai.d2(0,s,b)
return s.jf()},
JL(a,b){return this.kD(a,null,b)},
Jl(a){var s,r,q,p,o,n
if(a.byteLength===0)throw A.c(B.H_)
s=new A.wQ(a)
if(s.l7(0)===0)return B.ai.fE(0,s)
r=B.ai.fE(0,s)
q=B.ai.fE(0,s)
p=B.ai.fE(0,s)
o=s.b<a.byteLength?A.cu(B.ai.fE(0,s)):null
if(typeof r=="string")n=(q==null||typeof q=="string")&&s.b>=a.byteLength
else n=!1
if(n)throw A.c(A.alS(r,p,A.cu(q),o))
else throw A.c(B.H0)}}
A.a3K.prototype={
a3B(a,b,c){var s,r,q,p
if(t.PB.b(b)){this.b.v(0,a)
return}s=this.b
r=s.h(0,a)
q=A.aCB(c)
if(q==null)q=this.a
if(J.f(r==null?null:t.ZC.a(r.a),q))return
p=q.t9(a)
s.j(0,a,p)
B.Uf.h4("activateSystemCursor",A.aV(["device",p.b,"kind",t.ZC.a(p.a).a],t.N,t.z),t.H)}}
A.w0.prototype={}
A.ef.prototype={
k(a){var s=this.gtb()
return s}}
A.NW.prototype={
t9(a){throw A.c(A.c8(null))},
gtb(){return"defer"}}
A.S5.prototype={}
A.le.prototype={
gtb(){return"SystemMouseCursor("+this.a+")"},
t9(a){return new A.S5(this,a)},
l(a,b){if(b==null)return!1
if(J.Y(b)!==A.C(this))return!1
return b instanceof A.le&&b.a===this.a},
gu(a){return B.b.gu(this.a)}}
A.PB.prototype={}
A.kg.prototype={
god(){var s,r=$.hp.ag$
r===$&&A.b()
s=r
return s},
eA(a,b){return this.Ns(0,b,this.$ti.i("1?"))},
Ns(a,b,c){var s=0,r=A.a2(c),q,p=this,o,n
var $async$eA=A.Z(function(d,e){if(d===1)return A.a_(e,r)
while(true)switch(s){case 0:o=p.b
n=o
s=3
return A.a4(p.god().vb(0,p.a,o.bX(b)),$async$eA)
case 3:q=n.eU(e)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$eA,r)},
vh(a){this.god().Cv(this.a,new A.Vh(this,a))}}
A.Vh.prototype={
$1(a){return this.MK(a)},
MK(a){var s=0,r=A.a2(t.CD),q,p=this,o,n
var $async$$1=A.Z(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:o=p.a.b
n=o
s=3
return A.a4(p.b.$1(o.eU(a)),$async$$1)
case 3:q=n.bX(c)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$$1,r)},
$S:107}
A.vY.prototype={
god(){var s,r=$.hp.ag$
r===$&&A.b()
s=r
return s},
nD(a,b,c,d){return this.X7(a,b,c,d,d.i("0?"))},
X7(a,b,c,d,e){var s=0,r=A.a2(e),q,p=this,o,n,m,l
var $async$nD=A.Z(function(f,g){if(f===1)return A.a_(g,r)
while(true)switch(s){case 0:o=p.b
n=o.h_(new A.i7(a,b))
m=p.a
s=3
return A.a4(p.god().vb(0,m,n),$async$nD)
case 3:l=g
if(l==null){if(c){q=null
s=1
break}throw A.c(A.azS("No implementation found for method "+a+" on channel "+m))}q=d.i("0?").a(o.Jl(l))
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$nD,r)},
n5(a){var s=this.god()
s.Cv(this.a,new A.a3x(this,a))},
qM(a,b){return this.Vb(a,b)},
Vb(a,b){var s=0,r=A.a2(t.CD),q,p=2,o,n=this,m,l,k,j,i,h,g,f,e
var $async$qM=A.Z(function(c,d){if(c===1){o=d
s=p}while(true)switch(s){case 0:h=n.b
g=h.fY(a)
p=4
e=h
s=7
return A.a4(b.$1(g),$async$qM)
case 7:k=e.oK(d)
q=k
s=1
break
p=2
s=6
break
case 4:p=3
f=o
k=A.af(f)
if(k instanceof A.wG){m=k
k=m.a
i=m.b
q=h.kD(k,m.c,i)
s=1
break}else if(k instanceof A.vZ){q=null
s=1
break}else{l=k
h=h.JL("error",J.db(l))
q=h
s=1
break}s=6
break
case 3:s=2
break
case 6:case 1:return A.a0(q,r)
case 2:return A.a_(o,r)}})
return A.a1($async$qM,r)}}
A.a3x.prototype={
$1(a){return this.a.qM(a,this.b)},
$S:107}
A.kV.prototype={
h4(a,b,c){return this.a4W(a,b,c,c.i("0?"))},
u0(a,b){return this.h4(a,null,b)},
a4W(a,b,c,d){var s=0,r=A.a2(d),q,p=this
var $async$h4=A.Z(function(e,f){if(e===1)return A.a_(f,r)
while(true)switch(s){case 0:q=p.OU(a,b,!0,c)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$h4,r)}}
A.kI.prototype={
G(){return"KeyboardSide."+this.b}}
A.ew.prototype={
G(){return"ModifierKey."+this.b}}
A.wO.prototype={
ga5H(){var s,r,q,p=A.y(t.xS,t.LE)
for(s=0;s<9;++s){r=B.oI[s]
if(this.a50(r)){q=this.N1(r)
if(q!=null)p.j(0,r,q)}}return p},
NM(){return!0}}
A.hl.prototype={}
A.a5z.prototype={
$0(){var s,r,q,p=this.b,o=J.aJ(p),n=A.cu(o.h(p,"key")),m=n==null
if(!m){s=n.length
s=s!==0&&s===1}else s=!1
if(s)this.a.a=n
s=A.cu(o.h(p,"code"))
if(s==null)s=""
m=m?"":n
r=A.oe(o.h(p,"location"))
if(r==null)r=0
q=A.oe(o.h(p,"metaState"))
if(q==null)q=0
p=A.oe(o.h(p,"keyCode"))
return new A.pR(s,m,r,q,p==null?0:p)},
$S:282}
A.ij.prototype={}
A.pS.prototype={}
A.a5E.prototype={
a40(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(a instanceof A.ij){p=a.c
i.d.j(0,p.gdW(),p.gpm())}else if(a instanceof A.pS)i.d.v(0,a.c.gdW())
i.a_l(a)
for(p=i.a,o=A.aA(p,!0,t.iS),n=o.length,m=0;m<n;++m){s=o[m]
try{if(B.c.D(p,s))s.$1(a)}catch(l){r=A.af(l)
q=A.aw(l)
k=A.bs("while processing a raw key listener")
j=$.fR()
if(j!=null)j.$1(new A.bQ(r,q,"services library",k,null,!1))}}return!1},
a_l(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=a1.c,f=g.ga5H(),e=t.v3,d=A.y(e,t.bd),c=A.b7(e),b=this.d,a=A.kM(new A.bb(b,A.o(b).i("bb<1>")),e),a0=a1 instanceof A.ij
if(a0)a.E(0,g.gdW())
for(s=null,r=0;r<9;++r){q=B.oI[r]
p=$.auk()
o=p.h(0,new A.cj(q,B.bf))
if(o==null)continue
if(o.D(0,g.gdW()))s=q
if(f.h(0,q)===B.cp){c.K(0,o)
if(o.ko(0,a.gjc(a)))continue}n=f.h(0,q)==null?A.b7(e):p.h(0,new A.cj(q,f.h(0,q)))
if(n==null)continue
for(p=new A.rk(n,n.r),p.c=n.e,m=A.o(p).c;p.t();){l=p.d
if(l==null)l=m.a(l)
k=$.auj().h(0,l)
k.toString
d.j(0,l,k)}}e=g instanceof A.a5x
j=(e||g instanceof A.pR)&&b.h(0,B.bK)!=null&&!J.f(b.h(0,B.bK),B.dt)
for(a=$.aky(),a=A.jh(a,a.r);a.t();){p=a.d
i=j&&p.l(0,B.bK)
if(!c.D(0,p)&&!i)b.v(0,p)}if(!(g instanceof A.a5v)&&!(g instanceof A.a5y))b.v(0,B.dH)
b.K(0,d)
if(a0&&s!=null&&!b.R(0,g.gdW())){if(e&&g.gdW().l(0,B.bL)||g instanceof A.a5w||g instanceof A.a5u){h=$.aky().h(0,g.gdW())
if(h!=null)b.j(0,g.gdW(),h)}if(g instanceof A.pR&&g.gdW().l(0,B.bL))b.j(0,g.gdW(),g.gpm())}}}
A.cj.prototype={
l(a,b){if(b==null)return!1
if(J.Y(b)!==A.C(this))return!1
return b instanceof A.cj&&b.a===this.a&&b.b==this.b},
gu(a){return A.T(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.QK.prototype={}
A.QJ.prototype={}
A.a5u.prototype={}
A.a5v.prototype={}
A.a5w.prototype={}
A.a5x.prototype={}
A.a5y.prototype={}
A.pR.prototype={
gdW(){var s=this.a,r=B.TN.h(0,s)
return r==null?new A.m(98784247808+B.b.gu(s)):r},
gpm(){var s,r=this.b,q=B.TP.h(0,r),p=q==null?null:q[this.c]
if(p!=null)return p
s=B.TM.h(0,r)
if(s!=null)return s
if(r.length===1)return new A.e(B.b.W(r.toLowerCase(),0))
return new A.e(B.b.gu(this.a)+98784247808)},
a50(a){var s=this
switch(a.a){case 0:return(s.d&4)!==0
case 1:return(s.d&1)!==0
case 2:return(s.d&2)!==0
case 3:return(s.d&8)!==0
case 5:return(s.d&16)!==0
case 4:return(s.d&32)!==0
case 6:return(s.d&64)!==0
case 7:case 8:return!1}},
N1(a){return B.cp},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.Y(b)!==A.C(s))return!1
return b instanceof A.pR&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e},
gu(a){var s=this
return A.T(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.x6.prototype={
ga76(){var s=this
if(s.c)return new A.bt(s.a,t.hr)
if(s.b==null){s.b=new A.aI(new A.a7($.aa,t.X6),t.EZ)
s.qL()}return s.b.a},
qL(){var s=0,r=A.a2(t.H),q,p=this,o
var $async$qL=A.Z(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:s=3
return A.a4(B.iM.u0("get",t.pE),$async$qL)
case 3:o=b
if(p.b==null){s=1
break}p.Gr(o)
case 1:return A.a0(q,r)}})
return A.a1($async$qL,r)},
Gr(a){var s,r=a==null
if(!r){s=J.aS(a,"enabled")
s.toString
A.od(s)}else s=!1
this.a42(r?null:t.nc.a(J.aS(a,"data")),s)},
a42(a,b){var s,r,q=this,p=q.c&&b
q.d=p
if(p)$.bJ.cy$.push(new A.a6B(q))
s=q.a
if(b){p=q.Tz(a)
r=t.N
if(p==null){p=t.X
p=A.y(p,p)}r=new A.cD(p,q,null,"root",A.y(r,t.z4),A.y(r,t.I1))
p=r}else p=null
q.a=p
q.c=!0
r=q.b
if(r!=null)r.bK(0,p)
q.b=null
if(q.a!=s){q.aC()
if(s!=null)s.m()}},
xo(a){return this.XF(a)},
XF(a){var s=0,r=A.a2(t.H),q=this,p
var $async$xo=A.Z(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:p=a.a
switch(p){case"push":q.Gr(t.pE.a(a.b))
break
default:throw A.c(A.c8(p+" was invoked but isn't implemented by "+A.C(q).k(0)))}return A.a0(null,r)}})
return A.a1($async$xo,r)},
Tz(a){if(a==null)return null
return t.J1.a(B.ai.eU(A.kR(a.buffer,a.byteOffset,a.byteLength)))},
Nk(a){var s=this
s.r.E(0,a)
if(!s.f){s.f=!0
$.bJ.cy$.push(new A.a6C(s))}},
ET(){var s,r,q,p,o,n=this
if(!n.f)return
n.f=!1
for(s=n.r,r=A.jR(s,s.r),q=A.o(r).c;r.t();){p=r.d;(p==null?q.a(p):p).w=!1}s.a_(0)
o=B.ai.bX(n.a.a)
B.iM.h4("put",A.cP(o.buffer,o.byteOffset,o.byteLength),t.H)},
K5(){if($.bJ.dx$)return
this.ET()}}
A.a6B.prototype={
$1(a){this.a.d=!1},
$S:2}
A.a6C.prototype={
$1(a){return this.a.ET()},
$S:2}
A.cD.prototype={
gnN(){var s=J.BN(this.a,"c",new A.a6y())
s.toString
return t.pE.a(s)},
gj2(){var s=J.BN(this.a,"v",new A.a6z())
s.toString
return t.pE.a(s)},
a6F(a,b,c){var s=this,r=J.e9(s.gj2(),b),q=c.i("0?").a(J.iV(s.gj2(),b))
if(J.fS(s.gj2()))J.iV(s.a,"v")
if(r)s.lF()
return q},
a1i(a,b){var s,r,q,p,o=this,n=o.f
if(n.R(0,a)||!J.e9(o.gnN(),a)){n=t.N
s=new A.cD(A.y(n,t.X),null,null,a,A.y(n,t.z4),A.y(n,t.I1))
o.il(s)
return s}r=t.N
q=o.c
p=J.aS(o.gnN(),a)
p.toString
s=new A.cD(t.pE.a(p),q,o,a,A.y(r,t.z4),A.y(r,t.I1))
n.j(0,a,s)
return s},
il(a){var s=this,r=a.d
if(r!==s){if(r!=null)r.rb(a)
a.d=s
s.DH(a)
if(a.c!=s.c)s.GE(a)}},
TW(a){this.rb(a)
a.d=null
if(a.c!=null){a.yc(null)
a.Ig(this.gGD())}},
lF(){var s,r=this
if(!r.w){r.w=!0
s=r.c
if(s!=null)s.Nk(r)}},
GE(a){a.yc(this.c)
a.Ig(this.gGD())},
yc(a){var s=this,r=s.c
if(r==a)return
if(s.w)if(r!=null)r.r.v(0,s)
s.c=a
if(s.w&&a!=null){s.w=!1
s.lF()}},
rb(a){var s,r,q,p=this
if(J.f(p.f.v(0,a.e),a)){J.iV(p.gnN(),a.e)
s=p.r
r=s.h(0,a.e)
if(r!=null){q=J.bO(r)
p.F5(q.dX(r))
if(q.gO(r))s.v(0,a.e)}if(J.fS(p.gnN()))J.iV(p.a,"c")
p.lF()
return}s=p.r
q=s.h(0,a.e)
if(q!=null)J.iV(q,a)
q=s.h(0,a.e)
q=q==null?null:J.fS(q)
if(q===!0)s.v(0,a.e)},
DH(a){var s=this
if(s.f.R(0,a.e)){J.kb(s.r.bI(0,a.e,new A.a6x()),a)
s.lF()
return}s.F5(a)
s.lF()},
F5(a){this.f.j(0,a.e,a)
J.cL(this.gnN(),a.e,a.a)},
Ih(a,b){var s,r,q=this.f
q=q.gaW(q)
s=this.r
s=s.gaW(s)
r=q.a3v(0,new A.h3(s,new A.a6A(),A.o(s).i("h3<p.E,cD>")))
J.iU(b?A.aA(r,!1,A.o(r).i("p.E")):r,a)},
Ig(a){return this.Ih(a,!1)},
a6N(a){var s,r=this
if(a===r.e)return
s=r.d
if(s!=null)s.rb(r)
r.e=a
s=r.d
if(s!=null)s.DH(r)},
m(){var s,r=this
r.Ih(r.gTV(),!0)
r.f.a_(0)
r.r.a_(0)
s=r.d
if(s!=null)s.rb(r)
r.d=null
r.yc(null)
r.x=!0},
k(a){return"RestorationBucket(restorationId: "+this.e+", owner: "+A.h(this.b)+")"}}
A.a6y.prototype={
$0(){var s=t.X
return A.y(s,s)},
$S:109}
A.a6z.prototype={
$0(){var s=t.X
return A.y(s,s)},
$S:109}
A.a6x.prototype={
$0(){return A.a([],t.QT)},
$S:285}
A.a6A.prototype={
$1(a){return a},
$S:286}
A.UW.prototype={}
A.it.prototype={
HG(){var s,r,q,p,o=this,n=o.a
n=n==null?null:n.a
s=o.e
s=s==null?null:s.a
r=o.f.G()
q=o.r.G()
p=o.c
p=p==null?null:p.G()
return A.aV(["systemNavigationBarColor",n,"systemNavigationBarDividerColor",null,"systemStatusBarContrastEnforced",o.w,"statusBarColor",s,"statusBarBrightness",r,"statusBarIconBrightness",q,"systemNavigationBarIconBrightness",p,"systemNavigationBarContrastEnforced",o.d],t.N,t.z)},
k(a){return"SystemUiOverlayStyle("+this.HG().k(0)+")"},
gu(a){var s=this
return A.T(s.a,s.b,s.d,s.e,s.f,s.r,s.w,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
l(a,b){var s,r=this
if(b==null)return!1
if(J.Y(b)!==A.C(r))return!1
if(b instanceof A.it)if(J.f(b.a,r.a))if(J.f(b.e,r.e))if(b.r===r.r)if(b.f===r.f)s=b.c==r.c
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.aaU.prototype={
$0(){if(!J.f($.qx,$.amf)){B.c5.h4("SystemChrome.setSystemUIOverlayStyle",$.qx.HG(),t.H)
$.amf=$.qx}$.qx=null},
$S:0}
A.xZ.prototype={
G(){return"SystemSoundType."+this.b}}
A.ab1.prototype={
V(a,b){return new A.Og(b,this)}}
A.Wt.prototype={
he(a){var s,r,q,p,o,n=a.a
if(n<=0)return B.cU
s=this.a
r=s.length
if(n<=r)q=n===r&&a.b===B.F
else q=!0
if(q)return new A.b4(r,B.R)
switch(a.b.a){case 0:p=Math.min(n-1,r)
o=Math.min(n,r)
break
case 1:p=Math.min(n,r)
o=Math.min(n+1,r)
break
default:o=null
p=null}return new A.b4(A.aqP(s,p,o).b,B.F)},
hf(a){var s,r,q,p,o,n=a.a
if(n>=0)s=n===0&&a.b===B.R
else s=!0
if(s)return B.cU
s=this.a
r=s.length
if(n>=r)return new A.b4(r,B.R)
switch(a.b.a){case 0:q=Math.min(n-1,r)
p=Math.min(n,r)
break
case 1:q=Math.min(n,r)
p=Math.min(n+1,r)
break
default:p=null
q=null}o=A.aqP(s,q,p)
return new A.b4(r-(o.a.length-o.c),B.R)}}
A.acf.prototype={
he(a){return new A.b4(this.a.b.n0(a).a,B.F)},
hf(a){return new A.b4(this.a.b.n0(a).b,B.R)}}
A.a2O.prototype={
he(a){return new A.b4(this.a.C1(a).a,B.F)},
hf(a){return new A.b4(this.a.C1(a).b,B.R)}}
A.XT.prototype={
he(a){return B.cU},
hf(a){return new A.b4(this.a.length,B.R)}}
A.acd.prototype={
he(a){var s,r=a.a,q=this.a,p=q.length
if(r<=p)r=r===p&&a.b===B.F
else r=!0
if(r)a=new A.b4(p,B.R)
s=a.a
if(s<=0)return B.cU
if(a.b===B.F&&!A.abt(B.b.ae(q,s)))return a
for(;--s,s>=0;)if(!A.abt(B.b.ae(q,s)))return new A.b4(s+1,B.R)
return B.cU},
hf(a){var s,r=a.a,q=this.a,p=q.length
if(r>=p)return new A.b4(p,B.R)
if(r>=0)r=r===0&&a.b===B.R
else r=!0
if(r)a=B.cU
s=a.a
if(a.b===B.R&&!A.abt(B.b.ae(q,s-1)))return a
for(;s<p;++s)if(!A.abt(B.b.ae(q,s)))return new A.b4(s,B.F)
return new A.b4(p,B.R)}}
A.Og.prototype={
he(a){return this.a.he(this.b.he(a))},
hf(a){return this.a.hf(this.b.hf(a))}}
A.K1.prototype={
Ea(a){if(this.a)switch(a.b.a){case 0:return new A.b4(a.a,B.F)
case 1:return new A.b4(a.a+1,B.R)}else switch(a.b.a){case 0:return new A.b4(a.a-1,B.F)
case 1:return new A.b4(a.a,B.R)}},
he(a){return this.Ea(a)},
hf(a){return this.Ea(a)}}
A.M5.prototype={
k(a){var s,r,q=this,p=", isDirectional: "
if(!q.gkQ())return"TextSelection.invalid"
s=""+q.c
r=""+q.f
return q.a===q.b?"TextSelection.collapsed(offset: "+s+", affinity: "+q.e.k(0)+p+r+")":"TextSelection(baseOffset: "+s+", extentOffset: "+q.d+p+r+")"},
l(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof A.M5))return!1
if(!r.gkQ())return!b.gkQ()
if(b.c===r.c)if(b.d===r.d)s=(r.a!==r.b||b.e===r.e)&&b.f===r.f
else s=!1
else s=!1
return s},
gu(a){var s,r=this
if(!r.gkQ())return A.T(-B.f.gu(1),-B.f.gu(1),A.f0(B.F),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)
s=r.a===r.b?A.f0(r.e):A.f0(B.F)
return A.T(B.f.gu(r.c),B.f.gu(r.d),s,B.o3.gu(r.f),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.La.prototype={
G(){return"SelectionChangedCause."+this.b}}
A.M3.prototype={
gSS(){var s=this.c
s===$&&A.b()
return s},
qW(a){return this.Xr(a)},
Xr(a){var s=0,r=A.a2(t.z),q,p=2,o,n=this,m,l,k,j,i
var $async$qW=A.Z(function(b,c){if(b===1){o=c
s=p}while(true)switch(s){case 0:p=4
s=7
return A.a4(n.x9(a),$async$qW)
case 7:k=c
q=k
s=1
break
p=2
s=6
break
case 4:p=3
i=o
m=A.af(i)
l=A.aw(i)
k=A.bs("during method call "+a.a)
A.ed(new A.bQ(m,l,"services library",k,new A.abs(a),!1))
throw i
s=6
break
case 3:s=2
break
case 6:case 1:return A.a0(q,r)
case 2:return A.a_(o,r)}})
return A.a1($async$qW,r)},
x9(a){return this.WJ(a)},
WJ(a){var s=0,r=A.a2(t.z),q,p=this,o,n,m,l,k,j
var $async$x9=A.Z(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:j=a.a
if(j==="TextInputClient.focusElement"){p.f.h(0,J.aS(t.j.a(a.b),0))
s=1
break}else if(j==="TextInputClient.requestElementsInRect"){o=J.lU(t.j.a(a.b),t.Jy)
n=A.o(o).i("au<W.E,X>")
m=p.f
l=A.o(m).i("bb<1>")
k=l.i("dN<p.E,z<@>>")
q=A.aA(new A.dN(new A.aO(new A.bb(m,l),new A.abp(p,A.aA(new A.au(o,new A.abq(),n),!0,n.i("bh.E"))),l.i("aO<p.E>")),new A.abr(p),k),!0,k.i("p.E"))
s=1
break}else if(j==="TextInputClient.scribbleInteractionBegan"){s=1
break}else if(j==="TextInputClient.scribbleInteractionFinished"){s=1
break}s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$x9,r)}}
A.abs.prototype={
$0(){var s=null
return A.a([A.hR("call",this.a,!0,B.aQ,s,!1,s,s,B.au,s,!1,!0,!0,B.b0,s,t.O5)],t.F)},
$S:17}
A.abq.prototype={
$1(a){return a},
$S:288}
A.abp.prototype={
$1(a){this.a.f.h(0,a)
return!1},
$S:27}
A.abr.prototype={
$1(a){var s=this.a.f.h(0,a),r=s.gyL(s)
s=[a]
B.c.K(s,[r.ghR(r),r.gBC(r),r.gbq(r),r.gbV(r)])
return s},
$S:289}
A.y8.prototype={}
A.Q2.prototype={}
A.Tl.prototype={}
A.aiM.prototype={
$1(a){this.a.sc9(a)
return!1},
$S:48}
A.aQ.prototype={}
A.br.prototype={
fR(a){this.b=a},
iD(a,b){this.gu1()
return!0},
gu1(){return!0},
t4(a){return!0},
a0j(a){var s=this.a
s.b=!0
s.a.push(a)
return null},
LV(a){return this.a.v(0,a)}}
A.me.prototype={}
A.m7.prototype={
dg(a){return this.c.$1(a)}}
A.UE.prototype={
KM(a,b,c){if(a instanceof A.me)return a.mA(b,c)
else return a.dg(b)}}
A.iW.prototype={
am(){return new A.yv(A.b7(t.od),new A.A(),B.m)}}
A.UG.prototype={
$1(a){var s=a.f
s.toString
t.KU.a(s)
return!1},
$S:45}
A.UJ.prototype={
$1(a){var s,r=this,q=a.f
q.toString
s=A.akL(t.KU.a(q),r.b,r.d)
if(s!=null){r.c.D_(a,null)
r.a.a=s
return!0}return!1},
$S:45}
A.UH.prototype={
$1(a){var s,r=a.f
r.toString
s=A.akL(t.KU.a(r),this.b,this.c)
if(s!=null){this.a.a=s
return!0}return!1},
$S:45}
A.UK.prototype={
$1(a){var s,r,q=this,p=a.f
p.toString
s=q.b
r=A.akL(t.KU.a(p),s,q.d)
p=r!=null
if(p&&r.iD(0,s))q.a.a=A.aoo(a).KM(r,s,q.c)
return p},
$S:45}
A.yv.prototype={
ar(){this.aJ()
this.HN()},
V3(a){this.av(new A.acm(this))},
HN(){var s,r,q,p,o=this,n=o.a.d
n=n.gaW(n)
s=A.kM(n,A.o(n).i("p.E"))
r=o.d.kA(s)
n=o.d
n.toString
q=s.kA(n)
for(n=r.ga5(r),p=o.gFr();n.t();)n.gH(n).LV(p)
for(n=q.ga5(q);n.t();)n.gH(n).a0j(p)
o.d=s},
aZ(a){this.bs(a)
this.HN()},
m(){var s,r,q,p,o=this
o.aQ()
for(s=o.d,s=A.jR(s,s.r),r=o.gFr(),q=A.o(s).c;s.t();){p=s.d;(p==null?q.a(p):p).LV(r)}o.d=null},
L(a){var s=this.a
return new A.yu(null,s.d,this.e,s.e,null)}}
A.acm.prototype={
$0(){this.a.e=new A.A()},
$S:0}
A.yu.prototype={
c5(a){var s
if(this.w===a.w)s=!A.aka(a.r,this.r)
else s=!0
return s}}
A.MA.prototype={
dg(a){a.a86()
return null}}
A.ET.prototype={
t4(a){return this.c},
dg(a){}}
A.on.prototype={}
A.oA.prototype={}
A.hU.prototype={}
A.ER.prototype={}
A.nf.prototype={}
A.JZ.prototype={
iD(a,b){var s,r,q,p,o,n=$.am.ai$.f.f
if(n==null||n.e==null)return!1
for(s=t.q,r=0;r<2;++r){q=B.HU[r]
p=n.e
p.toString
o=A.akN(p,q,s)
if(o!=null&&o.iD(0,q)){this.c=o
this.d=q
return!0}}return!1},
dg(a){var s,r=this.c
r===$&&A.b()
s=this.d
s===$&&A.b()
r.dg(s)}}
A.PX.prototype={
X8(a,b,c){var s
a.fR(this.gkx())
s=A.o(this).i("me<1>").b(a)?a.mA(b,c):a.dg(b)
a.fR(null)
return s},
mA(a,b){var s=this,r=A.akM(s.gu9(),A.o(s).c)
return r==null?s.a4V(a,s.b,b):s.X8(r,a,b)},
dg(a){return this.mA(a,null)},
gu1(){var s=this,r=A.akN(s.gu9(),null,A.o(s).c)
if(r!=null){r.fR(s.gkx())
r.gu1()
r.fR(null)}else s.gkx().gu1()
return!0},
iD(a,b){var s,r=this,q=A.akM(r.gu9(),A.o(r).c),p=q==null
if(!p)q.fR(r.gkx())
s=(p?r.gkx():q).iD(0,b)
if(!p)q.fR(null)
return s},
t4(a){var s,r=this,q=A.akM(r.gu9(),A.o(r).c),p=q==null
if(!p)q.fR(r.gkx())
s=(p?r.gkx():q).t4(a)
if(!p)q.fR(null)
return s}}
A.zO.prototype={
a4V(a,b,c){var s=this.e
if(b==null)return s.dg(a)
else return s.dg(a)},
gkx(){return this.e},
gu9(){return this.f}}
A.MI.prototype={}
A.MH.prototype={}
A.P1.prototype={}
A.Bd.prototype={
fR(a){this.O3(a)
this.e.fR(a)}}
A.td.prototype={
aH(a){var s=new A.wV(this.e,!0,null,A.az(),this.$ti.i("wV<1>"))
s.aK()
s.saX(null)
return s},
aL(a,b){b.sn(0,this.e)
b.sNR(!0)}}
A.ys.prototype={
am(){return new A.AW(B.m)}}
A.AW.prototype={
gWW(){var s,r
$.am.toString
s=$.aR()
if(s.gz5()!=="/"){$.am.toString
s=s.gz5()}else{r=this.a.ax
$.am.toString
s=s.gz5()
s=s}return s},
ar(){var s=this
s.aJ()
s.a_Q()
$.am.toString
s.r=s.xN($.aR().a.f,s.a.fy)
$.am.b5$.push(s)},
aZ(a){this.bs(a)
this.I6(a)},
m(){B.c.v($.am.b5$,this)
var s=this.d
if(s!=null)s.m()
this.aQ()},
Eq(){var s=this.d
if(s!=null)s.m()
this.e=this.d=null},
I6(a){var s,r=this
r.a.toString
if(r.gIf()){r.Eq()
if(r.f==null||r.a.c!=a.c){s=r.a.c
r.f=s==null?new A.kw(r,t.TX):s}}else{r.Eq()
r.f=null}},
a_Q(){return this.I6(null)},
gIf(){var s=this.a
if(s.Q==null){s=s.as
s=s==null?null:s.gbH(s)
s=s===!0||this.a.d!=null||!1}else s=!0
return s},
Y2(a){var s,r=this,q=a.a,p=q==="/"&&r.a.Q!=null?new A.ahV(r):r.a.as.h(0,q)
if(p!=null)return r.a.f.$1$2(a,p,t.z)
s=r.a.d
if(s!=null)return s.$1(a)
return null},
Yg(a){return this.a.at.$1(a)},
je(){var s=0,r=A.a2(t.y),q,p=this,o,n
var $async$je=A.Z(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:p.a.toString
o=p.f
n=o==null?null:o.gbo()
if(n==null){q=!1
s=1
break}q=n.Lb()
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$je,r)},
oB(a){return this.a2L(a)},
a2L(a){var s=0,r=A.a2(t.y),q,p=this,o,n
var $async$oB=A.Z(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:p.a.toString
o=p.f
n=o==null?null:o.gbo()
if(n==null){q=!1
s=1
break}o=n.xQ(a,null,t.X)
o.toString
o=A.arw(o,B.CN,!1,null)
n.e.push(o)
n.wE()
n.DW(o.a)
q=!0
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$oB,r)},
xN(a,b){this.a.toString
return A.aFp(a,b)},
za(a){var s=this,r=s.xN(a,s.a.fy)
if(!r.l(0,s.r))s.av(new A.ahY(s,r))},
L(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g={}
g.a=null
s=i.a
s.toString
if(i.gIf()){s=i.f
r=i.gWW()
q=i.a
p=q.e==null?A.aGT():new A.ahW(i)
o=q.ay
o.toString
g.a=A.apg(!0,new A.wd(r,i.gY1(),i.gYf(),o,"nav",p,!0,s),"Navigator Scope",h,h)
s=q}else{s=i.a
s.toString}g.b=null
n=new A.hN(new A.ahX(g,i),h)
g.b=n
n=A.u2(n,h,B.cT,!0,s.cy,h,h,B.aW)
g.b=n
s=$.aCt
if(s)m=new A.JE(15,!1,!1,h)
else m=h
if(m!=null)g.b=A.e4(B.ay,A.a([n,A.l1(h,m,h,h,0,0,0,h)],t.E),B.S,B.am)
s=i.a
r=s.CW
s=s.db
s=A.b2(255,s.gn(s)>>>16&255,s.gn(s)>>>8&255,s.gn(s)&255)
g=g.b
q=i.a.dx
if(q!=null)l=i.xN(A.a([q],t.ss),i.a.fy)
else{q=i.r
q.toString
l=q}q=t.a9
p=A.a([],q)
B.c.K(p,i.a.dy)
p.push(B.EO)
q=A.a(p.slice(0),q)
k=new A.vx(l,q,new A.Md(r,s,g,h),h)
A.dA(a)
g=i.a
j=new A.zu(k,h)
k=j
g=g.p3
s=A.aCs()
r=A.pu($.auR(),t.n,t.od)
q=t.ot
p=t.wS
r.j(0,B.Cv,new A.zO(new A.q5(new A.bo(A.a([],q),p)),a,!1,!1,!1,!1,new A.bo(A.a([],q),p),t.x5.i("zO<br.T>")))
return new A.x9(new A.xB(A.am7(new A.EI(A.UF(r,A.aph(new A.LZ(new A.xC(k,h),h),new A.wR(A.y(t.l5,t.UJ)))),h),"<Default WidgetsApp Shortcuts>",s),h),g,h)}}
A.ahV.prototype={
$1(a){var s=this.a.a.Q
s.toString
return s},
$S:14}
A.ahY.prototype={
$0(){this.a.r=this.b},
$S:0}
A.ahW.prototype={
$2(a,b){return this.a.a.e.$1(b)},
$S:113}
A.ahX.prototype={
$1(a){return this.b.a.ch.$2(a,this.a.a)},
$S:14}
A.TX.prototype={}
A.oK.prototype={
G(){return"ConnectionState."+this.b}}
A.f9.prototype={
k(a){var s=this
return"AsyncSnapshot("+s.a.k(0)+", "+A.h(s.b)+", "+A.h(s.c)+", "+A.h(s.d)+")"},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return s.$ti.b(b)&&b.a===s.a&&J.f(b.b,s.b)&&J.f(b.c,s.c)&&b.d==s.d},
gu(a){return A.T(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.p6.prototype={
am(){return new A.z3(B.m,this.$ti.i("z3<1>"))}}
A.z3.prototype={
ar(){var s=this
s.aJ()
s.a.toString
s.e=new A.f9(B.nx,null,null,null,s.$ti.i("f9<1>"))
s.Hu()},
aZ(a){var s,r=this
r.bs(a)
if(a.c!=r.a.c){if(r.d!=null){r.d=null
s=r.e
s===$&&A.b()
r.e=new A.f9(B.nx,s.b,s.c,s.d,s.$ti)}r.Hu()}},
L(a){var s,r=this.a
r.toString
s=this.e
s===$&&A.b()
return r.d.$2(a,s)},
m(){this.d=null
this.aQ()},
Hu(){var s,r=this,q=r.a.c
if(q!=null){s=r.d=new A.A()
q.dY(new A.adX(r,s),new A.adY(r,s),t.H)
q=r.e
q===$&&A.b()
if(q.a!==B.bs)r.e=new A.f9(B.FI,q.b,q.c,q.d,q.$ti)}}}
A.adX.prototype={
$1(a){var s=this.a
if(s.d===this.b)s.av(new A.adW(s,a))},
$S(){return this.a.$ti.i("ar(1)")}}
A.adW.prototype={
$0(){var s=this.a
s.e=new A.f9(B.bs,this.b,null,null,s.$ti.i("f9<1>"))},
$S:0}
A.adY.prototype={
$2(a,b){var s=this.a
if(s.d===this.b)s.av(new A.adV(s,a,b))},
$S:30}
A.adV.prototype={
$0(){var s=this.a
s.e=new A.f9(B.bs,null,this.b,this.c,s.$ti.i("f9<1>"))},
$S:0}
A.ti.prototype={
am(){return new A.yB(B.m)}}
A.yB.prototype={
ar(){this.aJ()
this.HS()},
aZ(a){this.bs(a)
this.HS()},
HS(){this.e=new A.di(this.gS9(),this.a.c,null,t.Jc)},
m(){var s,r,q=this.d
if(q!=null)for(q=A.jh(q,q.r);q.t();){s=q.d
r=this.d.h(0,s)
r.toString
s.I(0,r)}this.aQ()},
Sa(a){var s,r=this,q=a.a,p=r.d
if(p==null)p=r.d=A.y(t.I_,t.M)
p.j(0,q,r.Tp(q))
p=r.d.h(0,q)
p.toString
q.X(0,p)
if(!r.f){r.f=!0
s=r.Fc()
if(s!=null)r.I2(s)
else $.bJ.cy$.push(new A.acH(r))}return!1},
Fc(){var s={},r=this.c
r.toString
s.a=null
r.aY(new A.acM(s))
return t.xO.a(s.a)},
I2(a){var s,r
this.c.toString
s=this.f
r=this.e
r===$&&A.b()
a.E3(t.Fw.a(A.azh(r,s)))},
Tp(a){return new A.acL(this,a)},
L(a){var s=this.f,r=this.e
r===$&&A.b()
return new A.vi(s,r,null)}}
A.acH.prototype={
$1(a){var s,r=this.a
if(r.c==null)return
s=r.Fc()
s.toString
r.I2(s)},
$S:2}
A.acM.prototype={
$1(a){this.a.a=a},
$S:8}
A.acL.prototype={
$0(){var s=this.a
s.d.v(0,this.b)
if(s.d.a===0)if($.bJ.dy$.a<3)s.av(new A.acJ(s))
else{s.f=!1
A.dU(new A.acK(s))}},
$S:0}
A.acJ.prototype={
$0(){this.a.f=!1},
$S:0}
A.acK.prototype={
$0(){var s=this.a
if(s.c!=null&&s.d.a===0)s.av(new A.acI(s))},
$S:0}
A.acI.prototype={
$0(){},
$S:0}
A.pp.prototype={}
A.GH.prototype={}
A.m0.prototype={
nx(){var s=new A.GH($.bF())
this.eX$=s
this.c.d8(new A.pp(s))},
pX(){var s,r=this
if(r.gq1()){if(r.eX$==null)r.nx()}else{s=r.eX$
if(s!=null){s.aC()
s.dI()
r.eX$=null}}},
L(a){if(this.gq1()&&this.eX$==null)this.nx()
return B.a1r}}
A.PN.prototype={
L(a){throw A.c(A.FS("Widgets that mix AutomaticKeepAliveClientMixin into their State must call super.build() but must ignore the return value of the superclass."))}}
A.SN.prototype={
Cp(a,b){},
mH(a){A.arC(this,new A.ahG(this,a))}}
A.ahG.prototype={
$1(a){var s=a.z
if(s!=null&&s.D(0,this.a))a.b8()},
$S:8}
A.ahF.prototype={
$1(a){A.arC(a,this.a)},
$S:8}
A.SO.prototype={
bW(a){var s=A.h6(t.h,t.X)
return new A.SN(s,this,B.a9)}}
A.ff.prototype={
c5(a){return this.w!==a.w}}
A.pD.prototype={
aH(a){var s=this.e
s=new A.Kv(B.d.b0(A.Uc(s,0,1)*255),s,!1,null,A.az())
s.aK()
s.saX(null)
return s},
aL(a,b){b.smL(0,this.e)
b.srP(!1)}}
A.tY.prototype={
aH(a){var s=new A.Kj(this.e,this.f,this.r,!1,!1,null,A.az())
s.aK()
s.saX(null)
return s},
aL(a,b){b.suv(this.e)
b.sK9(this.f)
b.suA(this.r)
b.cn=b.bA=!1},
oD(a){a.suv(null)
a.sK9(null)}}
A.oE.prototype={
aH(a){var s=new A.Kg(null,this.f,null,A.az())
s.aK()
s.saX(null)
return s},
aL(a,b){b.soi(null)
b.st2(this.f)},
oD(a){a.soi(null)}}
A.Cx.prototype={
aH(a){var s=new A.Kf(this.e,this.f,null,A.az())
s.aK()
s.saX(null)
return s},
aL(a,b){b.soi(this.e)
b.st2(this.f)},
oD(a){a.soi(null)}}
A.JK.prototype={
aH(a){var s=this,r=new A.Ky(s.e,s.r,s.w,s.y,s.x,null,s.f,null,A.az())
r.aK()
r.saX(null)
return r},
aL(a,b){var s=this
b.sdl(0,s.e)
b.st2(s.f)
b.sa0V(0,s.r)
b.sit(0,s.w)
b.san(0,s.x)
b.shg(0,s.y)}}
A.JL.prototype={
aH(a){var s=this,r=new A.Kz(s.r,s.x,s.w,s.e,s.f,null,A.az())
r.aK()
r.saX(null)
return r},
aL(a,b){var s=this
b.soi(s.e)
b.st2(s.f)
b.sit(0,s.r)
b.san(0,s.w)
b.shg(0,s.x)}}
A.qI.prototype={
aH(a){var s=this,r=A.dY(a),q=new A.KI(s.w,null,A.az())
q.aK()
q.saX(null)
q.sbv(0,s.e)
q.seo(s.r)
q.sbO(r)
q.smq(s.x)
q.sLv(0,null)
return q},
aL(a,b){var s=this
b.sbv(0,s.e)
b.sLv(0,null)
b.seo(s.r)
b.sbO(A.dY(a))
b.bA=s.w
b.smq(s.x)}}
A.FL.prototype={
aH(a){var s=new A.wW(this.e,this.f,A.dY(a),B.h,null,A.az())
s.aK()
s.saX(null)
return s},
aL(a,b){b.szK(this.e)
b.seo(this.f)
b.sbO(A.dY(a))
if(B.h!==b.e6){b.e6=B.h
b.au()
b.b3()}}}
A.G1.prototype={
aH(a){var s=new A.Ko(this.e,this.f,null,A.az())
s.aK()
s.saX(null)
return s},
aL(a,b){b.sa7u(this.e)
b.S=this.f}}
A.ib.prototype={
aH(a){var s=new A.Kw(this.e,A.dY(a),null,A.az())
s.aK()
s.saX(null)
return s},
aL(a,b){b.sdB(0,this.e)
b.sbO(A.dY(a))}}
A.lW.prototype={
aH(a){var s=new A.KB(this.f,this.r,this.e,A.dY(a),null,A.az())
s.aK()
s.saX(null)
return s},
aL(a,b){b.seo(this.e)
b.sa7J(this.f)
b.sa4l(this.r)
b.sbO(A.dY(a))}}
A.kk.prototype={}
A.tZ.prototype={
aH(a){var s=new A.Kk(this.e,null,A.az())
s.aK()
s.saX(null)
return s},
aL(a,b){b.sz7(this.e)}}
A.vn.prototype={
o9(a){var s,r,q=a.e
q.toString
t.Wz.a(q)
s=this.f
if(q.e!==s){q.e=s
r=a.c
if(r instanceof A.B)r.a9()}}}
A.tX.prototype={
aH(a){var s=new A.Ki(this.e,0,null,null,A.az())
s.aK()
s.K(0,null)
return s},
aL(a,b){b.sz7(this.e)}}
A.qh.prototype={
aH(a){return A.aqn(A.ox(this.f,this.e))},
aL(a,b){b.sIx(A.ox(this.f,this.e))},
c4(){var s,r=this,q=r.e
if(q===1/0&&r.f===1/0)s="SizedBox.expand"
else s=q===0&&r.f===0?"SizedBox.shrink":"SizedBox"
q=r.a
return q==null?s:s+"-"+q.k(0)}}
A.fW.prototype={
aH(a){return A.aqn(this.e)},
aL(a,b){b.sIx(this.e)}}
A.GQ.prototype={
aH(a){var s=new A.Kr(this.e,this.f,null,A.az())
s.aK()
s.saX(null)
return s},
aL(a,b){b.sa5z(0,this.e)
b.sa5w(0,this.f)}}
A.wl.prototype={
aH(a){var s=new A.Ku(this.e,null,A.az())
s.aK()
s.saX(null)
return s},
aL(a,b){b.sui(this.e)},
bW(a){return new A.PU(this,B.a9)}}
A.PU.prototype={}
A.xQ.prototype={
aH(a){var s=A.dY(a)
s=new A.x1(this.e,s,this.r,this.w,A.az(),0,null,null,A.az())
s.aK()
s.K(0,null)
return s},
aL(a,b){var s
b.seo(this.e)
s=A.dY(a)
b.sbO(s)
s=this.r
if(b.b2!==s){b.b2=s
b.a9()}s=this.w
if(s!==b.ba){b.ba=s
b.au()
b.b3()}}}
A.nb.prototype={
o9(a){var s,r,q,p=this,o=a.e
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
if(q instanceof A.B)q.a9()}}}
A.JU.prototype={
L(a){var s,r,q,p=this,o=null,n=a.a4(t.I)
n.toString
s=p.c
r=p.e
switch(n.w.a){case 0:break
case 1:q=s
s=r
r=q
break
default:s=o
r=s}return A.l1(p.f,p.x,o,o,r,s,p.d,p.r)}}
A.uG.prototype={
gXO(){switch(this.e.a){case 0:return!0
case 1:var s=this.w
return s===B.aC||s===B.FJ}},
v0(a){var s=this.x
s=this.gXO()?A.dY(a):null
return s},
aH(a){var s=this
return A.aB7(B.h,s.w,s.e,s.f,s.r,s.z,s.v0(a),s.y)},
aL(a,b){var s=this,r=s.e
if(b.M!==r){b.M=r
b.a9()}r=s.f
if(b.ag!==r){b.ag=r
b.a9()}r=s.r
if(b.ac!==r){b.ac=r
b.a9()}r=s.w
if(b.aA!==r){b.aA=r
b.a9()}r=s.v0(a)
if(b.b2!=r){b.b2=r
b.a9()}r=s.y
if(b.ba!==r){b.ba=r
b.a9()}if(B.h!==b.cK){b.cK=B.h
b.au()
b.b3()}}}
A.KQ.prototype={}
A.oI.prototype={}
A.p4.prototype={
o9(a){var s,r,q,p=a.e
p.toString
t.US.a(p)
s=this.f
if(p.e!==s){p.e=s
r=!0}else r=!1
s=this.r
if(p.f!==s){p.f=s
r=!0}if(r){q=a.c
if(q instanceof A.B)q.a9()}}}
A.FE.prototype={}
A.KK.prototype={
aH(a){var s,r,q,p=this,o=null,n=p.e,m=p.r
if(m==null){m=a.a4(t.I)
m.toString
m=m.w}s=p.x
r=A.alH(a)
q=s===B.bo?"\u2026":o
s=new A.wY(A.abv(q,r,p.z,p.as,n,p.f,m,p.ax,p.y,p.at),p.w,s,p.ch,0,o,o,A.az())
s.aK()
s.K(0,o)
s.wC(n)
s.spK(p.ay)
return s},
aL(a,b){var s,r=this
b.scs(0,r.e)
b.sBs(0,r.f)
s=r.r
if(s==null){s=a.a4(t.I)
s.toString
s=s.w}b.sbO(s)
b.sNT(r.w)
b.sa64(0,r.x)
b.sBt(r.y)
b.sAp(r.z)
b.sO1(r.as)
b.sBu(r.at)
b.sMi(r.ax)
s=A.alH(a)
b.sAk(0,s)
b.spK(r.ay)
b.sNq(r.ch)}}
A.a6E.prototype={
$1(a){return!0},
$S:54}
A.K6.prototype={
aH(a){var s=this,r=s.d
r=r==null?null:r.cW(0)
r=new A.Kp(r,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.CW,!1,null,!1,A.az())
r.aK()
r.a_G()
return r},
aL(a,b){var s=this,r=s.d
b.sfw(0,r==null?null:r.cW(0))
b.aA=s.e
b.sbq(0,s.f)
b.sbV(0,s.r)
b.sNh(0,s.w)
b.san(0,s.x)
b.smL(0,s.y)
b.sa1v(s.Q)
b.szK(s.as)
b.seo(s.at)
b.sa6R(0,s.ax)
b.sa17(s.ay)
b.sa5u(!1)
b.sbO(null)
b.sA6(s.CW)
b.sA7(!1)
b.smq(s.z)},
oD(a){a.sfw(0,null)}}
A.GR.prototype={
aH(a){var s=this,r=null,q=new A.KA(s.e,r,s.r,r,s.x,s.y,r,r,s.as,s.at,r,A.az())
q.aK()
q.saX(r)
return q},
aL(a,b){var s=this
b.a8=s.e
b.bG=null
b.aU=s.r
b.ab=null
b.cr=s.x
b.dc=s.y
b.JX=b.h0=null
b.zz=s.as
b.A=s.at}}
A.IS.prototype={
aH(a){var s=this,r=new A.Kt(!0,s.e,s.f,s.r,s.w,B.aK,null,A.az())
r.aK()
r.saX(null)
return r},
aL(a,b){var s,r=this
b.bG=r.e
b.aU=r.f
b.ab=r.r
s=r.w
if(!b.cr.l(0,s)){b.cr=s
b.au()}if(b.A!==B.aK){b.A=B.aK
b.au()}}}
A.im.prototype={
aH(a){var s=new A.KD(null,A.az())
s.aK()
s.saX(null)
return s}}
A.ha.prototype={
aH(a){var s=new A.wX(this.e,this.f,null,A.az())
s.aK()
s.saX(null)
return s},
aL(a,b){b.sKx(this.e)
b.sA0(this.f)}}
A.BO.prototype={
aH(a){var s=new A.wT(!1,null,null,A.az())
s.aK()
s.saX(null)
return s},
aL(a,b){b.sIo(!1)
b.sA0(null)}}
A.xw.prototype={
aH(a){var s=this,r=new A.x_(s.e,s.f,s.r,!1,s.Fo(a),null,A.az())
r.aK()
r.saX(null)
r.HP(r.A)
return r},
Fo(a){var s,r=this.e,q=r.p4
if(q!=null)return q
if(r.fx==null){if(r.go==null)r=r.p2!=null
else r=!0
s=r}else s=!0
if(!s)return null
return A.dY(a)},
aL(a,b){var s=this
b.sa1I(s.f)
b.sa3a(s.r)
b.sa37(!1)
b.sLG(s.e)
b.sbO(s.Fo(a))}}
A.IN.prototype={
aH(a){var s=new A.Ks(null,A.az())
s.aK()
s.saX(null)
return s}}
A.Cd.prototype={
aH(a){var s=new A.Ke(!0,null,A.az())
s.aK()
s.saX(null)
return s},
aL(a,b){b.sa0U(!0)}}
A.uv.prototype={
aH(a){var s=new A.Kn(this.e,null,A.az())
s.aK()
s.saX(null)
return s},
aL(a,b){b.sa38(this.e)}}
A.Gv.prototype={
aH(a){var s=new A.Kq(this.e,null,A.az())
s.aK()
s.saX(null)
return s},
aL(a,b){b.sA1(0,this.e)}}
A.kJ.prototype={
L(a){return this.c}}
A.hN.prototype={
L(a){return this.c.$1(a)}}
A.tJ.prototype={
aH(a){var s=new A.zS(this.e,B.aK,null,A.az())
s.aK()
s.saX(null)
return s},
aL(a,b){t.ri.a(b).san(0,this.e)}}
A.zS.prototype={
san(a,b){if(b.l(0,this.a8))return
this.a8=b
this.au()},
aI(a,b){var s,r,q,p,o,n,m=this
if(m.k3.Nf(0,B.W)){s=a.gbJ(a)
r=m.k3
q=b.a
p=b.b
o=r.a
r=r.b
n=$.at().bn()
n.san(0,m.a8)
s.cm(new A.E(q,p,q+o,p+r),n)}s=m.C$
if(s!=null)a.f8(s,b)}}
A.ai_.prototype={
$0(){var s,r,q=this,p=q.b
if(p==null||t.c.b(q.c)){p=q.a.y1$
p===$&&A.b()
p=p.e
p.toString
s=q.c
s=s.gbB(s)
r=A.ax0()
p.c_(r,s)
p=r}return p},
$S:298}
A.ai0.prototype={
$1(a){var s=a==null?t.K.a(a):a
return this.a.jt(s)},
$S:299}
A.dq.prototype={
je(){return A.bG(!1,t.y)},
oB(a){return A.bG(!1,t.y)},
a2M(a){var s=a.a
s.toString
return this.oB(s)},
tf(){},
Jq(){},
Jp(){},
za(a){},
Jo(a){}}
A.yt.prototype={
a0q(a){return this.b5$.push(a)},
a3N(){this.a2S($.aR().a.f)},
a2S(a){var s,r,q
for(s=this.b5$,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].za(a)},
tO(){var s=0,r=A.a2(t.H),q,p=this,o,n,m
var $async$tO=A.Z(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:o=A.aA(p.b5$,!0,t.X5),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.a4(o[m].je(),$async$tO)
case 6:if(b){s=1
break}case 4:++m
s=3
break
case 5:A.aaV()
case 1:return A.a0(q,r)}})
return A.a1($async$tO,r)},
tP(a){return this.a4_(a)},
a4_(a){var s=0,r=A.a2(t.H),q,p=this,o,n,m
var $async$tP=A.Z(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:o=A.aA(p.b5$,!0,t.X5),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.a4(o[m].oB(a),$async$tP)
case 6:if(c){s=1
break}case 4:++m
s=3
break
case 5:case 1:return A.a0(q,r)}})
return A.a1($async$tP,r)},
qO(a){return this.Wi(a)},
Wi(a){var s=0,r=A.a2(t.H),q,p=this,o,n,m,l
var $async$qO=A.Z(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:o=A.aA(p.b5$,!0,t.X5),n=o.length,m=J.aJ(a),l=0
case 3:if(!(l<n)){s=5
break}s=6
return A.a4(o[l].a2M(new A.q1(A.bK(m.h(a,"location")),m.h(a,"state"))),$async$qO)
case 6:if(c){s=1
break}case 4:++l
s=3
break
case 5:case 1:return A.a0(q,r)}})
return A.a1($async$qO,r)},
VX(a){switch(a.a){case"popRoute":return this.tO()
case"pushRoute":return this.tP(A.bK(a.b))
case"pushRouteInformation":return this.qO(t.G.a(a.b))}return A.bG(null,t.z)},
Vg(){this.zv()},
Ni(a){A.c6(B.v,new A.ace(this,a))},
$iap:1,
$idH:1}
A.ahZ.prototype={
$1(a){var s,r,q=$.bJ
q.toString
s=this.a
r=s.a
r.toString
q.M_(r)
s.a=null
this.b.eY$.ep(0)},
$S:102}
A.ace.prototype={
$0(){var s,r,q=this.a,p=q.cY$
q.cL$=!0
s=q.y1$
s===$&&A.b()
s=s.e
s.toString
r=q.ai$
r.toString
q.cY$=new A.ng(this.b,s,"[root]",new A.kw(s,t.bT),t.Cg).a0N(r,t.NT.a(p))
if(p==null)$.bJ.zv()},
$S:0}
A.ng.prototype={
bW(a){return new A.l5(this,B.a9,this.$ti.i("l5<1>"))},
aH(a){return this.d},
aL(a,b){},
a0N(a,b){var s,r={}
r.a=b
if(b==null){a.L7(new A.a62(r,this,a))
s=r.a
s.toString
a.rV(s,new A.a63(r))}else{b.ap=this
b.ev()}r=r.a
r.toString
return r},
c4(){return this.e}}
A.a62.prototype={
$0(){var s=this.b,r=A.aB8(s,s.$ti.c)
this.a.a=r
r.r=this.c},
$S:0}
A.a63.prototype={
$0(){var s=this.a.a
s.toString
s.Dq(null,null)
s.r9()},
$S:0}
A.l5.prototype={
aY(a){var s=this.af
if(s!=null)a.$1(s)},
jr(a){this.af=null
this.lj(a)},
fD(a,b){this.Dq(a,b)
this.r9()},
bj(a,b){this.nh(0,b)
this.r9()},
hW(){var s=this,r=s.ap
if(r!=null){s.ap=null
s.nh(0,s.$ti.i("ng<1>").a(r))
s.r9()}s.Dp()},
r9(){var s,r,q,p,o,n,m,l=this
try{o=l.af
n=l.f
n.toString
l.af=l.dZ(o,l.$ti.i("ng<1>").a(n).c,B.n1)}catch(m){s=A.af(m)
r=A.aw(m)
o=A.bs("attaching to the render tree")
q=new A.bQ(s,r,"widgets library",o,null,!1)
A.ed(q)
p=A.ald(q)
l.af=l.dZ(null,p,B.n1)}},
gaa(){return this.$ti.i("aM<1>").a(A.bI.prototype.gaa.call(this))},
jw(a,b){var s=this.$ti
s.i("aM<1>").a(A.bI.prototype.gaa.call(this)).saX(s.c.a(a))},
jB(a,b,c){},
jK(a,b){this.$ti.i("aM<1>").a(A.bI.prototype.gaa.call(this)).saX(null)}}
A.MC.prototype={$iap:1}
A.AX.prototype={
f2(){this.O6()
$.er=this
var s=$.aR()
s.Q=this.gW3()
s.as=$.aa},
BE(){this.O9()
this.wG()}}
A.AY.prototype={
f2(){this.Rd()
$.bJ=this},
iC(){this.O7()}}
A.AZ.prototype={
f2(){var s,r,q,p,o=this
o.Rf()
$.hp=o
o.ag$!==$&&A.eI()
o.ag$=B.ED
s=new A.x6(A.b7(t.z4),$.bF())
B.iM.n5(s.gXE())
o.ac$=s
s=t.v3
r=new A.a0S(A.y(s,t.bd),A.b7(t.SQ),A.a([],t.sA))
o.h2$!==$&&A.eI()
o.h2$=r
q=$.akz()
p=A.a([],t.K0)
o.M$!==$&&A.eI()
s=o.M$=new A.GI(r,q,p,A.b7(s))
p=$.aR()
p.at=s.ga3J()
p.ax=$.aa
B.D9.vh(s.ga41())
s=$.apF
if(s==null)s=$.apF=A.a([],t.iL)
s.push(o.gSe())
B.Db.vh(new A.ai0(o))
B.Da.vh(o.gVT())
B.c5.n5(o.gW1())
$.auy()
o.a6u()},
iC(){this.Rg()}}
A.B_.prototype={
f2(){this.Rh()
$.f_=this
var s=t.K
this.h1$=new A.a1I(A.y(s,t.Sc),A.y(s,t.B6),A.y(s,t.pt))},
p7(){this.Qc()
var s=this.h1$
s===$&&A.b()
s.a_(0)},
jt(a){return this.a47(a)},
a47(a){var s=0,r=A.a2(t.H),q,p=this
var $async$jt=A.Z(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:s=3
return A.a4(p.Qd(a),$async$jt)
case 3:switch(A.bK(J.aS(t.a.a(a),"type"))){case"fontsChange":p.zC$.aC()
break}s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$jt,r)}}
A.B0.prototype={
f2(){this.Rk()
$.a7S=this
this.zy$=$.aR().a.a}}
A.B1.prototype={
f2(){var s,r,q,p,o=this
o.Rl()
$.l6=o
s=t.TT
o.y1$=new A.JN(o.ga31(),o.gWx(),o.gWB(),o.gWz(),A.a([],s),A.a([],s),A.a([],s),A.b7(t.d))
s=$.aR()
s.f=o.ga3P()
r=s.r=$.aa
s.fy=o.ga4g()
s.go=r
s.k2=o.ga3V()
s.k3=r
s.p1=o.gWv()
s.p2=r
s.p3=o.gWt()
s.p4=r
r=new A.x2(B.W,o.Jh(),$.cw(),null,A.az())
r.aK()
r.saX(null)
q=o.y1$
q===$&&A.b()
q.sa77(r)
r=o.y1$.e
r.Q=r
q=t.W
q.a(A.N.prototype.gbz.call(r)).r.push(r)
p=r.I1()
r.ch.saV(0,p)
q.a(A.N.prototype.gbz.call(r)).z.push(r)
o.NI(s.a.c)
o.cx$.push(o.gW_())
s=o.xr$
if(s!=null)s.m()
s=t.S
r=$.bF()
o.xr$=new A.IT(new A.a3K(B.lX,A.y(s,t.ZA)),A.y(s,t.xg),r)
o.cy$.push(o.gWO())},
iC(){this.Ri()},
zl(a,b,c){this.xr$.a7D(b,new A.ai_(this,c,b))
this.Ox(0,b,c)},
iJ(){var s=0,r=A.a2(t.H),q=[],p=this,o
var $async$iJ=A.Z(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:s=2
return A.a4(p.O8(),$async$iJ)
case 2:o=$.aot
if((o==null?null:o.a)==null)try{o=p.y1$
o===$&&A.b()
o.e.f9()}finally{}p.v8()
s=3
return A.a4(p.gJO(),$async$iJ)
case 3:return A.a0(null,r)}})
return A.a1($async$iJ,r)}}
A.B2.prototype={
iC(){this.Rn()},
zR(){var s,r,q
this.PJ()
for(s=this.b5$,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].tf()},
zX(){var s,r,q
this.PL()
for(s=this.b5$,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].Jq()},
zT(){var s,r,q
this.PK()
for(s=this.b5$,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].Jp()},
tM(a){var s,r,q
this.Q_(a)
for(s=this.b5$,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].Jo(a)},
p7(){var s,r
this.Rj()
for(s=this.b5$.length,r=0;r<s;++r);},
zr(){var s,r,q=this,p={}
p.a=null
if(q.by$){s=new A.ahZ(p,q)
p.a=s
$.bJ.a0B(s)}try{r=q.cY$
if(r!=null)q.ai$.a1_(r)
q.PI()
q.ai$.a3h()}finally{}r=q.by$=!1
p=p.a
if(p!=null)r=!(q.b9$||q.bt$===0)
if(r){q.by$=!0
r=$.bJ
r.toString
p.toString
r.M_(p)}},
iJ(){var s=this.cY$
if(s!=null)this.ai$.a6z(s,$.aot)
return this.Ro()}}
A.EB.prototype={
aH(a){var s=new A.Kl(this.e,this.f,A.ang(a,null),null,A.az())
s.aK()
s.saX(null)
return s},
aL(a,b){b.sa2w(this.e)
b.syQ(A.ang(a,null))
b.sbB(0,this.f)}}
A.j_.prototype={
gYi(){var s,r=this.r
if(r==null||r.gdB(r)==null)return this.e
s=r.gdB(r)
r=this.e
if(r==null)return s
s.toString
return r.E(0,s)},
L(a){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){s=o.x
if(s!=null)s=!(s.a>=s.b&&s.c>=s.d)
else s=!0}else s=!1
if(s)m=A.azo(new A.fW(B.mt,n,n),0,0)
else{s=o.d
if(s!=null)m=new A.lW(s,n,n,m,n)}r=o.gYi()
if(r!=null)m=new A.ib(r,m,n)
s=o.f
if(s!=null)m=new A.tJ(s,m,n)
s=o.as
if(s!==B.h){q=A.dY(a)
p=o.r
p.toString
m=A.aoH(m,s,new A.NQ(q==null?B.w:q,p))}s=o.r
if(s!=null)m=A.aoW(m,s,B.hK)
s=o.x
if(s!=null)m=new A.fW(s,m,n)
s=o.y
if(s!=null)m=new A.ib(s,m,n)
m.toString
return m}}
A.NQ.prototype={
BY(a){return this.c.uY(new A.E(0,0,0+a.a,0+a.b),this.b)},
CA(a){return!a.c.l(0,this.c)||a.b!==this.b}}
A.oQ.prototype={
c5(a){return!J.f(this.w,a.w)||!J.f(this.x,a.x)}}
A.PO.prototype={
L(a){throw A.c(A.FS("A DefaultSelectionStyle constructed with DefaultSelectionStyle.fallback cannot be incorporated into the widget tree, it is meant only to provide a fallback value returned by DefaultSelectionStyle.of() when no enclosing default selection style is present in a BuildContext."))}}
A.EI.prototype={
UL(){var s=$.aub()
return s},
L(a){var s=this.c,r=this.UL()
if(r!=null)s=A.am7(s,"<Web Disabling Text Editing Shortcuts>",r)
return A.am7(s,"<Default Text Editing Shortcuts>",A.axM())}}
A.ES.prototype={
gaz(a){var s=this.a
if(s==null)return null
s=s.c
s.toString
return s}}
A.oU.prototype={
am(){return new A.yQ(A.K0(null),A.K0(null),B.m)},
a3y(a,b,c){return this.d.$3(a,b,c)},
a74(a,b,c){return this.e.$3(a,b,c)}}
A.yQ.prototype={
ar(){var s,r=this
r.aJ()
s=r.a.c
r.d=s.gb4(s)
r.a.c.cU(r.gvS())
r.EY()},
E0(a){var s,r=this,q=r.d
q===$&&A.b()
s=r.SK(a,q)
r.d=s
if(q!==s)r.EY()},
aZ(a){var s,r,q=this
q.bs(a)
s=a.c
if(s!==q.a.c){r=q.gvS()
s.c3(r)
q.a.c.cU(r)
r=q.a.c
q.E0(r.gb4(r))}},
SK(a,b){switch(a.a){case 0:case 3:return a
case 1:switch(b.a){case 0:case 3:case 1:return a
case 2:return b}break
case 2:switch(b.a){case 0:case 3:case 2:return a
case 1:return b}break}},
EY(){var s=this,r=s.d
r===$&&A.b()
switch(r.a){case 0:case 1:s.e.saO(0,s.a.c)
s.f.saO(0,B.ci)
break
case 2:case 3:s.e.saO(0,B.d2)
s.f.saO(0,new A.f1(s.a.c,new A.bo(A.a([],t.A),t.R),0))
break}},
m(){this.a.c.c3(this.gvS())
this.aQ()},
L(a){var s=this.a
return s.a3y(a,this.e,s.a74(a,this.f,s.f))}}
A.je.prototype={
G(){return"KeyEventResult."+this.b}}
A.N2.prototype={}
A.a_V.prototype={
ao(a){var s,r=this.a
if(r.ax===this){if(!r.gju()){s=r.w
s=s!=null&&s.w===r}else s=!0
if(s)r.Mv(B.Cx)
s=r.w
if(s!=null){if(s.f===r)s.f=null
s.r.v(0,r)}s=r.Q
if(s!=null)s.Z5(0,r)
r.ax=null}},
Bn(a){var s,r=this.a
if(r.ax===this){s=r.e
s.toString
a=A.ayK(s,!0);(a==null?r.e.r.f.e:a).xH(r)}},
M0(){return this.Bn(null)}}
A.yn.prototype={
G(){return"UnfocusDisposition."+this.b}}
A.cM.prototype={
gej(){var s,r,q
if(this.a)return!0
for(s=this.gfT(),r=s.length,q=0;q<r;++q)s[q].toString
return!1},
sej(a){var s,r=this
if(a!==r.a){r.a=a
s=r.w
if(s!=null){s.qZ()
s.r.E(0,r)}}},
gcp(){var s,r,q,p
if(!this.b)return!1
s=this.gdQ()
if(s!=null&&!s.gcp())return!1
for(r=this.gfT(),q=r.length,p=0;p<q;++p)r[p].toString
return!0},
scp(a){var s,r=this
if(a!==r.b){r.b=a
if(r.gkN()&&!a)r.Mv(B.Cx)
s=r.w
if(s!=null){s.qZ()
s.r.E(0,r)}}},
sm5(a){return},
sm6(a){},
gov(){var s,r,q,p,o=this.y
if(o==null){s=A.a([],t.bp)
for(o=this.as,r=o.length,q=0;q<o.length;o.length===r||(0,A.Q)(o),++q){p=o[q]
B.c.K(s,p.gov())
s.push(p)}this.y=s
o=s}return o},
gpT(){var s=this.gov()
return new A.aO(s,new A.a_W(),A.al(s).i("aO<1>"))},
gfT(){var s,r,q=this.x
if(q==null){s=A.a([],t.bp)
r=this.Q
for(;r!=null;){s.push(r)
r=r.Q}this.x=s
q=s}return q},
gkN(){if(!this.gju()){var s=this.w
if(s==null)s=null
else{s=s.f
s=s==null?null:B.c.D(s.gfT(),this)}s=s===!0}else s=!0
return s},
gju(){var s=this.w
return(s==null?null:s.f)===this},
gkT(){return this.gdQ()},
gdQ(){var s,r,q,p
for(s=this.gfT(),r=s.length,q=0;q<r;++q){p=s[q]
if(p instanceof A.ms)return p}return null},
gaS(a){var s,r=this.e.gaa(),q=r.bC(0,null),p=r.gjV(),o=A.cC(q,new A.t(p.a,p.b))
p=r.bC(0,null)
q=r.gjV()
s=A.cC(p,new A.t(q.c,q.d))
return new A.E(o.a,o.b,s.a,s.b)},
Mv(a){var s,r,q=this
if(!q.gkN()){s=q.w
s=s==null||s.w!==q}else s=!1
if(s)return
r=q.gdQ()
if(r==null)return
switch(a.a){case 0:if(r.gcp())B.c.a_(r.dy)
for(;!r.gcp();){r=r.gdQ()
if(r==null){s=q.w
r=s==null?null:s.e}}r.iZ(!1)
break
case 1:if(r.gcp())B.c.v(r.dy,q)
for(;!r.gcp();){s=r.gdQ()
if(s!=null)B.c.v(s.dy,r)
r=r.gdQ()
if(r==null){s=q.w
r=s==null?null:s.e}}r.iZ(!0)
break}},
G4(a){var s=this,r=s.w
if(r!=null){if(r.f===s)r.w=null
else{r.w=s
r.qZ()}return}a.lR()
a.xt()
if(a!==s)s.xt()},
GF(a,b,c){var s,r,q
if(c){s=b.gdQ()
if(s!=null)B.c.v(s.dy,b)}b.Q=null
B.c.v(this.as,b)
for(s=this.gfT(),r=s.length,q=0;q<r;++q)s[q].y=null
this.y=null},
Z5(a,b){return this.GF(a,b,!0)},
Uw(a){var s,r,q,p
this.w=a
for(s=this.gov(),r=s.length,q=0;q<r;++q){p=s[q]
p.w=a
p.x=null}},
xH(a){var s,r,q,p,o,n=this
if(a.Q===n)return
s=a.gdQ()
r=a.gkN()
q=a.Q
if(q!=null)q.GF(0,a,s!=n.gkT())
n.as.push(a)
a.Q=n
a.x=null
a.Uw(n.w)
for(q=a.gfT(),p=q.length,o=0;o<p;++o)q[o].y=null
if(r){q=n.w
if(q!=null){q=q.f
if(q!=null)q.lR()}}if(s!=null&&a.e!=null&&a.gdQ()!==s){q=a.e
q.toString
q=A.api(q)
if(q!=null)q.yN(a,s)}if(a.ay){a.iZ(!0)
a.ay=!1}},
m(){var s=this.ax
if(s!=null)s.ao(0)
this.dI()},
xt(){var s=this
if(s.Q==null)return
if(s.gju())s.lR()
s.aC()},
uK(){this.iZ(!0)},
iZ(a){var s,r=this
if(!r.gcp())return
if(r.Q==null){r.ay=!0
return}r.lR()
if(r.gju()){s=r.w.w
s=s==null||s===r}else s=!1
if(s)return
r.G4(r)},
lR(){var s,r,q,p,o,n
for(s=B.c.ga5(this.gfT()),r=new A.qQ(s,t.YE),q=t.l5,p=this;r.t();p=o){o=q.a(s.gH(s))
n=o.dy
B.c.v(n,p)
n.push(p)}},
c4(){var s,r,q,p=this
p.gkN()
s=p.gkN()&&!p.gju()?"[IN FOCUS PATH]":""
r=s+(p.gju()?"[PRIMARY FOCUS]":"")
s=A.bS(p)
q=r.length!==0?"("+r+")":""
return"<optimized out>#"+s+q},
$iag:1}
A.a_W.prototype={
$1(a){return!a.gej()&&a.gcp()},
$S:12}
A.ms.prototype={
gkT(){return this},
gpT(){if(!this.gcp())return B.DN
return A.cM.prototype.gpT.call(this)},
n4(a){if(a.Q==null)this.xH(a)
if(this.gkN())a.iZ(!0)
else a.lR()},
iZ(a){var s,r,q=this,p=q.dy
while(!0){if((p.length!==0?B.c.gT(p):null)!=null)s=!(p.length!==0?B.c.gT(p):null).gcp()
else s=!1
if(!s)break
p.pop()}r=p.length!==0?B.c.gT(p):null
if(!a||r==null){if(q.gcp()){q.lR()
q.G4(q)}return}r.iZ(!0)}}
A.j8.prototype={
G(){return"FocusHighlightMode."+this.b}}
A.FW.prototype={
G(){return"FocusHighlightStrategy."+this.b}}
A.uM.prototype={
I0(){var s,r,q=this
switch(0){case 0:s=q.c
if(s==null)return
r=s?B.hQ:B.eo
break}s=q.b
if(s==null)s=A.FX()
q.b=r
if((r==null?A.FX():r)!==s)q.XT()},
XT(){var s,r,q,p,o,n,m,l,k,j=this,i=j.d,h=i.a
if(h.a===0)return
p=A.aA(i,!0,t.Su)
for(i=p.length,o=0;o<i;++o){s=p[o]
try{if(h.R(0,s)){n=j.b
if(n==null)n=A.FX()
s.$1(n)}}catch(m){r=A.af(m)
q=A.aw(m)
l=j instanceof A.bZ?A.cW(j):null
n=A.bs("while dispatching notifications for "+A.aG(l==null?A.aY(j):l).k(0))
k=$.fR()
if(k!=null)k.$1(new A.bQ(r,q,"widgets library",n,null,!1))}}},
Uv(a){var s,r,q=this
switch(a.gcj(a).a){case 0:case 2:case 3:q.c=!0
s=B.hQ
break
case 1:case 4:case 5:q.c=!1
s=B.eo
break
default:s=null}r=q.b
if(s!==(r==null?A.FX():r))q.I0()},
VS(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.c=!1
i.I0()
s=i.f
if(s==null)return!1
s=A.a([s],t.bp)
B.c.K(s,i.f.gfT())
q=s.length
p=t.CE
o=a.b
n=o!=null
m=0
while(!0){if(!(m<s.length)){r=!1
break}c$1:{l=s[m]
k=A.a([],p)
j=l.f
if(j!=null&&n)k.push(j.$2(l,o))
switch(A.aFA(k).a){case 1:break c$1
case 0:r=!0
break
case 2:r=!1
break
default:r=!1}break}s.length===q||(0,A.Q)(s);++m}return r},
qZ(){if(this.y)return
this.y=!0
A.dU(this.gSr())},
Ss(){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.y=!1
s=h.f
for(r=h.x,q=r.length,p=h.e,o=0;o<r.length;r.length===q||(0,A.Q)(r),++o){n=r[o]
m=n.a
if(m.Q!=null||m===p)if(m.w===h){l=m.dy
m=(l.length!==0?B.c.gT(l):null)==null&&B.c.D(n.b.gfT(),m)
k=m}else k=!1
else k=!1
if(k)n.b.iZ(!0)}B.c.a_(r)
r=h.f
if(r==null&&h.w==null)h.w=p
q=h.w
if(q!=null&&q!==r){if(s==null)j=null
else{r=s.gfT()
r=A.vq(r,A.al(r).c)
j=r}if(j==null)j=A.b7(t.mx)
r=h.w.gfT()
i=A.vq(r,A.al(r).c)
r=h.r
r.K(0,i.kA(j))
r.K(0,j.kA(i))
r=h.f=h.w
h.w=null}if(s!=r){if(s!=null)h.r.E(0,s)
r=h.f
if(r!=null)h.r.E(0,r)}for(r=h.r,q=A.jR(r,r.r),p=A.o(q).c;q.t();){m=q.d;(m==null?p.a(m):m).xt()}r.a_(0)
if(s!=h.f)h.aC()},
$iag:1}
A.Ou.prototype={}
A.Ov.prototype={}
A.Ow.prototype={}
A.Ox.prototype={}
A.mr.prototype={
gLn(){var s=this.w,r=this.e
s=r==null?null:r.r
return s},
gAP(){var s=this.x
if(s==null){s=this.e
s=s==null?null:s.f}return s},
gcp(){var s=this.y
if(s==null){s=this.e
s=s==null?null:s.gcp()}return s!==!1},
gej(){var s=this.z
if(s==null){s=this.e
s=s==null?null:s.gej()}return s===!0},
gm5(){var s=this.Q
if(s==null)s=this.e!=null||null
return s!==!1},
gm6(){var s=this.as
if(s==null)s=this.e!=null||null
return s!==!1},
gm4(){var s=this.ax
if(s==null){s=this.e
s=s==null?null:s.at}return s},
am(){return A.aCF()}}
A.r5.prototype={
gc2(a){var s=this.a.e
if(s==null){s=this.d
s.toString}return s},
ar(){this.aJ()
this.FL()},
FL(){var s,r,q,p=this
if(p.a.e==null)if(p.d==null)p.d=p.EH()
s=p.gc2(p)
p.a.gm5()
s.sm5(!0)
s=p.gc2(p)
p.a.gm6()
s.sm6(!0)
p.a.gej()
p.gc2(p).sej(p.a.gej())
if(p.a.y!=null){s=p.gc2(p)
r=p.a.y
r.toString
s.scp(r)}p.f=p.gc2(p).gcp()
p.gc2(p)
p.r=!0
p.gc2(p)
p.w=!0
p.e=p.gc2(p).gju()
s=p.gc2(p)
r=p.c
r.toString
p.a.gLn()
q=p.a.gAP()
s.e=r
s.f=q==null?s.f:q
r=s.r
s.r=r
p.y=s.ax=new A.a_V(s)
p.gc2(p).X(0,p.gx0())},
EH(){var s=this,r=s.a.gm4(),q=s.a.gcp()
s.a.gm5()
s.a.gm6()
return A.alk(q,r,!0,!0,null,null,s.a.gej())},
m(){var s,r=this
r.gc2(r).I(0,r.gx0())
r.y.ao(0)
s=r.d
if(s!=null)s.m()
r.aQ()},
b8(){this.cF()
var s=this.y
if(s!=null)s.M0()
this.Ft()},
Ft(){var s,r,q,p=this
if(!p.x&&p.a.f){s=p.c
s.toString
s=A.ayJ(s)
r=p.gc2(p)
if(r.Q==null)s.xH(r)
q=s.w
if(q!=null)q.x.push(new A.N2(s,r))
s=s.w
if(s!=null)s.qZ()
p.x=!0}},
d7(){this.lp()
var s=this.y
if(s!=null)s.M0()
this.x=!1},
aZ(a){var s,r,q=this
q.bs(a)
s=a.e
r=q.a
if(s==r.e){if(!J.f(r.gAP(),q.gc2(q).f))q.gc2(q).f=q.a.gAP()
q.a.gLn()
q.gc2(q)
q.a.gej()
q.gc2(q).sej(q.a.gej())
if(q.a.y!=null){s=q.gc2(q)
r=q.a.y
r.toString
s.scp(r)}s=q.gc2(q)
q.a.gm5()
s.sm5(!0)
s=q.gc2(q)
q.a.gm6()
s.sm6(!0)}else{q.y.ao(0)
if(s!=null)s.I(0,q.gx0())
q.FL()}if(a.f!==q.a.f)q.Ft()},
VK(){var s,r=this,q=r.gc2(r).gju(),p=r.gc2(r).gcp()
r.gc2(r)
r.gc2(r)
s=r.a.r
if(s!=null)s.$1(r.gc2(r).gkN())
s=r.e
s===$&&A.b()
if(s!==q)r.av(new A.adO(r,q))
s=r.f
s===$&&A.b()
if(s!==p)r.av(new A.adP(r,p))
s=r.r
s===$&&A.b()
if(!s)r.av(new A.adQ(r,!0))
s=r.w
s===$&&A.b()
if(!s)r.av(new A.adR(r,!0))},
L(a){var s,r,q=this,p=null,o=q.y
o.toString
o.Bn(q.a.c)
o=q.a
s=o.d
if(o.at){o=q.f
o===$&&A.b()
r=q.e
r===$&&A.b()
s=A.dP(p,s,!1,p,!1,o,r,p,p,p,p,p,p,p,p,p,p,p,p,p,p)}return A.arl(s,q.gc2(q))}}
A.adO.prototype={
$0(){this.a.e=this.b},
$S:0}
A.adP.prototype={
$0(){this.a.f=this.b},
$S:0}
A.adQ.prototype={
$0(){this.a.r=this.b},
$S:0}
A.adR.prototype={
$0(){this.a.w=this.b},
$S:0}
A.FY.prototype={
am(){return new A.Oy(B.m)}}
A.Oy.prototype={
EH(){var s=this.a.gm4()
return A.all(this.a.gcp(),s,this.a.gej())},
L(a){var s=this,r=null,q=s.y
q.toString
q.Bn(s.a.c)
q=s.gc2(s)
return A.dP(r,A.arl(s.a.d,q),!1,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)}}
A.z1.prototype={}
A.aiJ.prototype={
$1(a){var s=this.a
if(--s.a===0){s.b=a
return!1}return!0},
$S:48}
A.r6.prototype={}
A.nN.prototype={
G(){return"TraversalDirection."+this.b}}
A.FZ.prototype={
F6(a,b,c){var s,r=a.gkT(),q=r.dy,p=q.length!==0?B.c.gT(q):null
q=p==null&&r.gov().length!==0
if(q){s=this.Hl(r,a)
if(s.length===0)p=null
else p=b?B.c.gT(s):B.c.gJ(s)}return p==null?a:p},
Ul(a,b){return this.F6(a,!1,b)},
a4T(a){},
yN(a,b){},
US(a){var s
if(a==null)s=null
else{s=a.jR(t.ag)
if(s==null)s=null
else{s=s.f
s.toString}}return t.zH.a(s)},
Hl(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=this.US(a.e),c=d==null,b=c?e:d.f
if(b==null)b=new A.wR(A.y(t.l5,t.UJ))
s=A.y(t.pk,t.fk)
for(r=a.gov(),q=r.length,p=t.zH,o=t.ag,n=t.bp,m=0;m<r.length;r.length===q||(0,A.Q)(r),++m){l=r[m]
k=l.e
if(k==null)k=e
else{k=k.y
j=k==null?e:k.h(0,A.aG(o))
if(j==null)k=e
else{k=j.f
k.toString}}p.a(k)
i=k==null?e:k.r
if(J.f(l,i)){k=i.e
k.toString
h=A.asf(k,2)
if(h==null)k=e
else{k=h.y
j=k==null?e:k.h(0,A.aG(o))
if(j==null)k=e
else{k=j.f
k.toString}}p.a(k)
g=k==null?e:k.r
if(s.h(0,g)==null)s.j(0,g,A.arm(k,b,A.a([],n)))
s.h(0,g).c.push(i)
continue}if(l.gcp()&&!l.gej()){if(s.h(0,i)==null)s.j(0,i,A.arm(k,b,A.a([],n)))
s.h(0,i).c.push(l)}}for(r=A.jh(s,s.r);r.t();){q=r.d
p=s.h(0,q).b.NU(s.h(0,q).c,a0)
p=A.a(p.slice(0),A.al(p))
B.c.a_(s.h(0,q).c)
B.c.K(s.h(0,q).c,p)}f=A.a([],n)
if(s.a!==0)r=s.R(0,c?e:d.r)
else r=!1
if(r){r=s.h(0,c?e:d.r)
r.toString
new A.a_Y(s,f).$1(r)}if(!!f.fixed$length)A.L(A.P("removeWhere"))
B.c.nQ(f,new A.a_X(),!0)
return f},
Ga(a,b){var s,r,q,p,o,n,m=this,l=a.gkT()
l.toString
m.lk(l)
m.dc$.v(0,l)
s=l.dy
r=s.length!==0?B.c.gT(s):null
if(r==null){q=b?m.Ul(a,!1):m.F6(a,!0,!1)
A.lH(q,b?B.cO:B.cP)
return!0}p=m.Hl(l,a)
if(p.length===0)return!1
if(b&&r===B.c.gT(p)){A.lH(B.c.gJ(p),B.cO)
return!0}if(!b&&r===B.c.gJ(p)){A.lH(B.c.gT(p),B.cP)
return!0}for(l=J.ax(b?p:new A.cE(p,A.al(p).i("cE<1>"))),o=null;l.t();o=n){n=l.gH(l)
if(o==r){l=b?B.cO:B.cP
n.uK()
s=n.e
s.toString
A.aqC(s,1,l)
return!0}}return!1}}
A.a_Y.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=a.c,r=s.length,q=this.b,p=this.a,o=0;o<s.length;s.length===r||(0,A.Q)(s),++o){n=s[o]
if(p.R(0,n)){m=p.h(0,n)
m.toString
this.$1(m)}else q.push(n)}},
$S:302}
A.a_X.prototype={
$1(a){return!a.gcp()||a.gej()},
$S:12}
A.r_.prototype={}
A.O0.prototype={}
A.XC.prototype={
a3j(a,b){var s=this
switch(b.a){case 0:return s.rk(a,!1,!0)
case 2:return s.rk(a,!0,!0)
case 3:return s.rk(a,!1,!1)
case 1:return s.rk(a,!0,!1)}},
rk(a,b,c){var s=a.gkT().gpT().dF(0)
A.ol(s,new A.XK(c,b),t.mx)
if(s.length!==0)return B.c.gJ(s)
return null},
a_7(a,b,c){var s,r=c.gpT().dF(0)
A.ol(r,new A.XE(),t.mx)
switch(a.a){case 3:s=new A.aO(r,new A.XF(b),A.al(r).i("aO<1>"))
break
case 1:s=new A.aO(r,new A.XG(b),A.al(r).i("aO<1>"))
break
case 0:case 2:s=null
break
default:s=null}return s},
a_8(a,b,c){var s=c.dF(0)
A.ol(s,new A.XH(),t.mx)
switch(a.a){case 0:return new A.aO(s,new A.XI(b),A.al(s).i("aO<1>"))
case 2:return new A.aO(s,new A.XJ(b),A.al(s).i("aO<1>"))
case 3:case 1:break}return null},
YM(a,b,c){var s,r,q=this,p=q.dc$,o=p.h(0,b),n=o!=null
if(n){s=o.a
s=s.length!==0&&B.c.gJ(s).a!==a}else s=!1
if(s){s=o.a
if(B.c.gT(s).b.Q==null){q.lk(b)
p.v(0,b)
return!1}r=new A.XD(q,o,b)
switch(a.a){case 2:case 0:switch(B.c.gJ(s).a.a){case 3:case 1:q.lk(b)
p.v(0,b)
break
case 0:case 2:if(r.$1(a))return!0
break}break
case 3:case 1:switch(B.c.gJ(s).a.a){case 3:case 1:if(r.$1(a))return!0
break
case 0:case 2:q.lk(b)
p.v(0,b)
break}break}}if(n&&o.a.length===0){q.lk(b)
p.v(0,b)}return!1},
a4C(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=a.gkT(),f=g.dy,e=f.length!==0?B.c.gT(f):h
if(e==null){s=i.a3j(a,b)
if(s==null)s=a
switch(b.a){case 0:case 3:A.lH(s,B.cP)
break
case 1:case 2:A.lH(s,B.cO)
break}return!0}if(i.YM(b,g,e))return!0
f=e.e
f.toString
r=A.ir(f)
f=b.a
switch(f){case 2:case 0:q=i.a_8(b,e.gaS(e),g.gpT())
if(r!=null&&!r.d.gIF()){q.toString
p=new A.aO(q,new A.XL(r),q.$ti.i("aO<p.E>"))
if(!p.gO(p))q=p}if(!q.ga5(q).t()){o=h
break}n=A.aA(q,!0,A.o(q).i("p.E"))
if(b===B.a_v){m=A.al(n).i("cE<1>")
n=A.aA(new A.cE(n,m),!0,m.i("bh.E"))}l=new A.aO(n,new A.XM(new A.E(e.gaS(e).a,-1/0,e.gaS(e).c,1/0)),A.al(n).i("aO<1>"))
if(!l.gO(l)){o=l.gJ(l)
break}A.ol(n,new A.XN(e),t.mx)
o=B.c.gJ(n)
break
case 1:case 3:q=i.a_7(b,e.gaS(e),g)
if(r!=null&&!r.d.gIF()){q.toString
p=new A.aO(q,new A.XO(r),q.$ti.i("aO<p.E>"))
if(!p.gO(p))q=p}if(!q.ga5(q).t()){o=h
break}n=A.aA(q,!0,A.o(q).i("p.E"))
if(b===B.a_w){m=A.al(n).i("cE<1>")
n=A.aA(new A.cE(n,m),!0,m.i("bh.E"))}l=new A.aO(n,new A.XP(new A.E(-1/0,e.gaS(e).b,1/0,e.gaS(e).d)),A.al(n).i("aO<1>"))
if(!l.gO(l)){o=l.gJ(l)
break}A.ol(n,new A.XQ(e),t.mx)
o=B.c.gJ(n)
break
default:o=h}if(o!=null){m=i.dc$
k=m.h(0,g)
j=new A.r_(b,e)
if(k!=null)k.a.push(j)
else m.j(0,g,new A.O0(A.a([j],t.Kj)))
switch(f){case 0:case 3:A.lH(o,B.cP)
break
case 2:case 1:A.lH(o,B.cO)
break}return!0}return!1}}
A.agq.prototype={
$1(a){return a.b===this.a},
$S:303}
A.XK.prototype={
$2(a,b){if(this.a)if(this.b)return B.d.aG(a.gaS(a).b,b.gaS(b).b)
else return B.d.aG(b.gaS(b).d,a.gaS(a).d)
else if(this.b)return B.d.aG(a.gaS(a).a,b.gaS(b).a)
else return B.d.aG(b.gaS(b).c,a.gaS(a).c)},
$S:39}
A.XE.prototype={
$2(a,b){return B.d.aG(a.gaS(a).gaN().a,b.gaS(b).gaN().a)},
$S:39}
A.XF.prototype={
$1(a){var s=this.a
return!a.gaS(a).l(0,s)&&a.gaS(a).gaN().a<=s.a},
$S:12}
A.XG.prototype={
$1(a){var s=this.a
return!a.gaS(a).l(0,s)&&a.gaS(a).gaN().a>=s.c},
$S:12}
A.XH.prototype={
$2(a,b){return B.d.aG(a.gaS(a).gaN().b,b.gaS(b).gaN().b)},
$S:39}
A.XI.prototype={
$1(a){var s=this.a
return!a.gaS(a).l(0,s)&&a.gaS(a).gaN().b<=s.b},
$S:12}
A.XJ.prototype={
$1(a){var s=this.a
return!a.gaS(a).l(0,s)&&a.gaS(a).gaN().b>=s.d},
$S:12}
A.XD.prototype={
$1(a){var s,r,q=this.b.a.pop().b,p=q.e
p.toString
p=A.ir(p)
s=$.am.ai$.f.f.e
s.toString
if(p!=A.ir(s)){p=this.a
s=this.c
p.lk(s)
p.dc$.v(0,s)
return!1}switch(a.a){case 0:case 3:r=B.cP
break
case 1:case 2:r=B.cO
break
default:r=null}A.lH(q,r)
return!0},
$S:305}
A.XL.prototype={
$1(a){var s=a.e
s.toString
return A.ir(s)===this.a},
$S:12}
A.XM.prototype={
$1(a){var s=a.gaS(a).fz(this.a)
return!s.gO(s)},
$S:12}
A.XN.prototype={
$2(a,b){var s=this.a
return B.d.aG(Math.abs(a.gaS(a).gaN().a-s.gaS(s).gaN().a),Math.abs(b.gaS(b).gaN().a-s.gaS(s).gaN().a))},
$S:39}
A.XO.prototype={
$1(a){var s=a.e
s.toString
return A.ir(s)===this.a},
$S:12}
A.XP.prototype={
$1(a){var s=a.gaS(a).fz(this.a)
return!s.gO(s)},
$S:12}
A.XQ.prototype={
$2(a,b){var s=this.a
return B.d.aG(Math.abs(a.gaS(a).gaN().b-s.gaS(s).gaN().b),Math.abs(b.gaS(b).gaN().b-s.gaS(s).gaN().b))},
$S:39}
A.cU.prototype={
gJu(){var s=this.d
if(s==null){s=this.c.e
s.toString
s=this.d=new A.ago().$1(s)}s.toString
return s}}
A.agn.prototype={
$1(a){var s=a.gJu()
return A.vq(s,A.al(s).c)},
$S:306}
A.agp.prototype={
$2(a,b){switch(this.a.a){case 1:return B.d.aG(a.b.a,b.b.a)
case 0:return B.d.aG(b.b.c,a.b.c)}},
$S:117}
A.ago.prototype={
$1(a){var s,r,q=A.a([],t.vl),p=t.I,o=a.jR(p)
for(;o!=null;){s=o.f
s.toString
q.push(p.a(s))
s=A.asf(o,1)
if(s==null)o=null
else{s=s.y
r=s==null?null:s.h(0,A.aG(p))
o=r}}return q},
$S:463}
A.iH.prototype={
gaS(a){var s,r,q,p,o=this
if(o.b==null)for(s=o.a,s=new A.au(s,new A.agl(),A.al(s).i("au<1,E>")),s=new A.c2(s,s.gp(s)),r=A.o(s).c;s.t();){q=s.d
if(q==null)q=r.a(q)
p=o.b
if(p==null){o.b=q
p=q}o.b=p.oO(q)}s=o.b
s.toString
return s}}
A.agl.prototype={
$1(a){return a.b},
$S:309}
A.agm.prototype={
$2(a,b){switch(this.a.a){case 1:return B.d.aG(a.gaS(a).a,b.gaS(b).a)
case 0:return B.d.aG(b.gaS(b).c,a.gaS(a).c)}},
$S:310}
A.wR.prototype={
Tb(a){var s,r,q,p,o,n=B.c.gJ(a).a,m=t.qi,l=A.a([],m),k=A.a([],t.jE)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.Q)(a),++r){q=a[r]
p=q.a
if(p==n){l.push(q)
continue}k.push(new A.iH(l))
l=A.a([q],m)
n=p}if(l.length!==0)k.push(new A.iH(l))
for(m=k.length,r=0;r<k.length;k.length===m||(0,A.Q)(k),++r){s=k[r].a
if(s.length===1)continue
o=B.c.gJ(s).a
o.toString
A.arv(s,o)}return k},
Gw(a){var s,r,q,p
A.ol(a,new A.a5R(),t.zP)
s=B.c.gJ(a)
r=new A.a5S().$2(s,a)
if(J.bP(r)<=1)return s
q=A.aD4(r)
q.toString
A.arv(r,q)
p=this.Tb(r)
if(p.length===1)return B.c.gJ(B.c.gJ(p).a)
A.aD3(p,q)
return B.c.gJ(B.c.gJ(p).a)},
NU(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a.length<=1)return a
s=A.a([],t.qi)
for(r=a.length,q=t.V2,p=t.I,o=0;o<a.length;a.length===r||(0,A.Q)(a),++o){n=a[o]
m=n.gaS(n)
l=n.e.y
k=l==null?null:l.h(0,A.aG(p))
if(k==null)l=null
else{l=k.f
l.toString}q.a(l)
s.push(new A.cU(l==null?null:l.w,m,n))}j=A.a([],t.bp)
i=this.Gw(s)
j.push(i.c)
B.c.v(s,i)
for(;s.length!==0;){h=this.Gw(s)
j.push(h.c)
B.c.v(s,h)}return j}}
A.a5R.prototype={
$2(a,b){return B.d.aG(a.b.b,b.b.b)},
$S:117}
A.a5S.prototype={
$2(a,b){var s=a.b,r=A.al(b).i("aO<1>")
return A.aA(new A.aO(b,new A.a5T(new A.E(-1/0,s.b,1/0,s.d)),r),!0,r.i("p.E"))},
$S:311}
A.a5T.prototype={
$1(a){var s=a.b.fz(this.a)
return!s.gO(s)},
$S:312}
A.uN.prototype={
am(){return new A.Oz(B.m)}}
A.Oz.prototype={
ar(){this.aJ()
this.d=A.alk(!1,"FocusTraversalGroup",!0,!0,null,null,!0)},
m(){var s=this.d
if(s!=null)s.m()
this.aQ()},
L(a){var s=null,r=this.a,q=r.c,p=this.d
p.toString
return new A.r7(q,p,A.FV(!1,!1,r.f,s,!0,!0,p,!1,s,s,s,s,s,!0),s)}}
A.r7.prototype={
c5(a){return!1}}
A.KJ.prototype={
dg(a){A.lH(a.gc2(a),B.UX)}}
A.mX.prototype={}
A.J2.prototype={
dg(a){var s=$.am.ai$.f.f
s.e.a4(t.ag).f.Ga(s,!0)}}
A.ne.prototype={}
A.JY.prototype={
dg(a){var s=$.am.ai$.f.f
s.e.a4(t.ag).f.Ga(s,!1)}}
A.EP.prototype={
dg(a){var s=$.am.ai$.f.f,r=s.e.a4(t.ag)
r.f.a4C(s,a.a)}}
A.OA.prototype={}
A.QM.prototype={
yN(a,b){var s
this.Ow(a,b)
s=this.dc$.h(0,b)
if(s!=null){s=s.a
if(!!s.fixed$length)A.L(A.P("removeWhere"))
B.c.nQ(s,new A.agq(a),!0)}}}
A.To.prototype={}
A.Tp.prototype={}
A.et.prototype={
gbo(){var s,r=$.am.ai$.z.h(0,this)
if(r instanceof A.fF){s=r.ok
s.toString
if(A.o(this).c.b(s))return s}return null}}
A.bB.prototype={
k(a){var s=this,r=s.a,q=r!=null?" "+r:""
if(A.C(s)===B.a_R)return"[GlobalKey#"+A.bS(s)+q+"]"
return"["+("<optimized out>#"+A.bS(s))+q+"]"}}
A.kw.prototype={
l(a,b){if(b==null)return!1
if(J.Y(b)!==A.C(this))return!1
return this.$ti.b(b)&&b.a===this.a},
gu(a){return A.lQ(this.a)},
k(a){var s="GlobalObjectKey",r=B.b.iu(s,"<State<StatefulWidget>>")?B.b.U(s,0,-8):s
return"["+r+" "+("<optimized out>#"+A.bS(this.a))+"]"}}
A.j.prototype={
c4(){var s=this.a
return s==null?"Widget":"Widget-"+s.k(0)},
l(a,b){if(b==null)return!1
return this.Pc(0,b)},
gu(a){return A.A.prototype.gu.call(this,this)}}
A.b_.prototype={
bW(a){return new A.LL(this,B.a9)}}
A.ac.prototype={
bW(a){return A.aBK(this)}}
A.RS.prototype={
G(){return"_StateLifecycle."+this.b}}
A.ak.prototype={
ar(){},
aZ(a){},
f9(){},
av(a){a.$0()
this.c.ev()},
d7(){},
cc(){},
m(){},
b8(){}}
A.aX.prototype={}
A.dC.prototype={
bW(a){return new A.mZ(this,B.a9,A.o(this).i("mZ<dC.T>"))}}
A.ba.prototype={
bW(a){return A.aza(this)}}
A.aF.prototype={
aL(a,b){},
oD(a){}}
A.GM.prototype={
bW(a){return new A.GL(this,B.a9)}}
A.b5.prototype={
bW(a){return A.aBC(this)}}
A.ex.prototype={
bW(a){return A.azV(this)}}
A.o1.prototype={
G(){return"_ElementLifecycle."+this.b}}
A.OW.prototype={
HM(a){a.aY(new A.aeN(this,a))
a.pU()},
a_B(){var s,r,q,p=this
p.a=!0
r=p.b
q=A.aA(r,!0,A.o(r).c)
B.c.dn(q,A.ajK())
s=q
r.a_(0)
try{r=s
new A.cE(r,A.aY(r).i("cE<1>")).Z(0,p.ga_z())}finally{p.a=!1}},
E(a,b){if(b.w===B.ce){b.d7()
b.aY(A.ajL())}this.b.E(0,b)}}
A.aeN.prototype={
$1(a){this.a.HM(a)},
$S:8}
A.VM.prototype={
Ck(a){var s=this
if(a.at){s.e=!0
return}if(!s.d&&s.a!=null){s.d=!0
s.a.$0()}s.c.push(a)
a.at=!0},
L7(a){try{a.$0()}finally{}},
rV(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=b==null
if(f&&h.c.length===0)return
try{h.d=!0
if(!f){g.a=null
h.e=!1
try{b.$0()}finally{}}f=h.c
B.c.dn(f,A.ajK())
h.e=!1
g.b=f.length
g.c=0
for(n=0;n<g.b;){s=f[n]
r=!1
if(r){n=s.f
n.toString
m=n instanceof A.bZ?A.cW(n):null
A.aml(A.aG(m==null?A.aY(n):m).k(0),null,null)}try{s.LP()}catch(l){q=A.af(l)
p=A.aw(l)
n=A.bs("while rebuilding dirty elements")
k=$.fR()
if(k!=null)k.$1(new A.bQ(q,p,"widgets library",n,new A.VN(g,h,s),!1))}if(r)A.amk()
n=++g.c
k=g.b
j=f.length
if(k>=j){k=h.e
k.toString}else k=!0
if(k){if(!!f.immutable$list)A.L(A.P("sort"))
n=j-1
if(n-0<=32)A.Lz(f,0,n,A.ajK())
else A.Ly(f,0,n,A.ajK())
n=h.e=!1
g.b=f.length
while(!0){k=g.c
if(!(k>0?f[k-1].as:n))break
g.c=k-1}n=k}}}finally{for(f=h.c,n=f.length,i=0;i<n;++i){o=f[i]
o.at=!1}B.c.a_(f)
h.d=!1
h.e=null}},
a1_(a){return this.rV(a,null)},
a3h(){var s,r,q
try{this.L7(this.b.ga_A())}catch(q){s=A.af(q)
r=A.aw(q)
A.ana(A.FB("while finalizing the widget tree"),s,r,null)}finally{}},
a6z(a,b){try{a.b=b
a.f9()}finally{}}}
A.VN.prototype={
$0(){var s=null,r=A.a([],t.F),q=this.a,p=q.c,o=this.b.c.length,n="The element being rebuilt at the time was index "+p
q=""+q.b
if(p<o)J.kb(r,A.hR(n+" of "+q,this.c,!0,B.aQ,s,!1,s,s,B.au,s,!1,!0,!0,B.b0,s,t.h))
else J.kb(r,A.a_q(n+" of "+q+", but _dirtyElements only had "+o+" entries. This suggests some confusion in the framework internals."))
return r},
$S:17}
A.wg.prototype={
yF(){var s=this.a
this.c=new A.afV(this,s==null?null:s.c)}}
A.afV.prototype={
d8(a){var s=this.a.Lp(a)
if(s)return
s=this.b
if(s!=null)s.d8(a)}}
A.b1.prototype={
RI(a){},
l(a,b){if(b==null)return!1
return this===b},
f9(){var s=this
if(A.as7(s.b,s.f)){s.ev()
s.b=null}s.aY(new A.ZQ(s))
s.b=null},
gaa(){var s,r
for(s=this;s!=null;){r={}
if(s.w===B.CF)break
else if(s instanceof A.bI)return s.gaa()
else{r.a=null
s.aY(new A.ZR(r))
s=r.a}}return null},
a2H(a){var s=null
return A.hR(a,this,!0,B.aQ,s,!1,s,s,B.au,s,!1,!0,!0,B.b0,s,t.h)},
aY(a){},
dZ(a,b,c){var s,r,q=this
if(b==null){if(a!=null)q.z2(a)
return null}if(a!=null){s=a.f.l(0,b)
if(s){if(!J.f(a.d,c))q.MA(a,c)
s=a}else{s=a.f
s.toString
if(A.C(s)===A.C(b)&&J.f(s.a,b.a)){if(!J.f(a.d,c))q.MA(a,c)
a.bj(0,b)
s=a}else{q.z2(a)
r=q.tY(b,c)
s=r}}}else{r=q.tY(b,c)
s=r}return s},
fD(a,b){var s,r,q,p=this
p.a=a
p.d=b
p.w=B.ce
s=a!=null
if(s){r=a.e
r===$&&A.b();++r}else r=1
p.e=r
if(s)p.r=a.r
q=p.f.a
if(q instanceof A.et)p.r.z.j(0,q,p)
p.yb()
p.yF()},
bj(a,b){this.f=b},
MA(a,b){new A.ZS(b).$1(a)},
yh(a){this.d=a},
HW(a){var s=a+1,r=this.e
r===$&&A.b()
if(r<s){this.e=s
this.aY(new A.ZN(s))}},
ox(){this.aY(new A.ZP())
this.d=null},
rQ(a){this.aY(new A.ZO(a))
this.d=a},
Zk(a,b){var s,r,q=$.am.ai$.z.h(0,a)
if(q==null)return null
s=q.f
s.toString
if(!(A.C(s)===A.C(b)&&J.f(s.a,b.a)))return null
r=q.a
if(r!=null){r.jr(q)
r.z2(q)}this.r.b.b.v(0,q)
return q},
tY(a,b){var s,r,q,p,o,n,m=this,l=!1
if(l)A.aml(A.C(a).k(0),null,null)
try{s=a.a
if(s instanceof A.et){r=m.Zk(s,a)
if(r!=null){o=r
o.a=m
o.toString
n=m.e
n===$&&A.b()
o.HW(n)
o.cc()
o.aY(A.ate())
o.rQ(b)
q=m.dZ(r,a,b)
o=q
o.toString
return o}}p=a.bW(0)
p.fD(m,b)
return p}finally{if(l)A.amk()}},
z2(a){a.a=null
a.ox()
this.r.b.E(0,a)},
jr(a){},
cc(){var s=this,r=s.z,q=r==null,p=!q&&r.a!==0||s.Q
s.w=B.ce
if(!q)r.a_(0)
s.Q=!1
s.yb()
s.yF()
if(s.as)s.r.Ck(s)
if(p)s.b8()},
d7(){var s,r,q=this,p=q.z
if(p!=null&&p.a!==0)for(p=new A.lt(p,p.nu()),s=A.o(p).c;p.t();){r=p.d;(r==null?s.a(r):r).b9.v(0,q)}q.y=null
q.w=B.a1_},
pU(){var s=this,r=s.f,q=r==null?null:r.a
if(q instanceof A.et){r=s.r.z
if(J.f(r.h(0,q),s))r.v(0,q)}s.z=s.f=null
s.w=B.CF},
gcS(a){var s,r=this.gaa()
if(r instanceof A.H){s=r.k3
s.toString
return s}return null},
z8(a,b){var s=this.z;(s==null?this.z=A.d0(t.IS):s).E(0,a)
a.Mw(this,b)
s=a.f
s.toString
return t.WB.a(s)},
a4(a){var s=this.y,r=s==null?null:s.h(0,A.aG(a))
if(r!=null)return a.a(this.z8(r,null))
this.Q=!0
return null},
jR(a){var s=this.y
return s==null?null:s.h(0,A.aG(a))},
yF(){var s=this.a
this.c=s==null?null:s.c},
yb(){var s=this.a
this.y=s==null?null:s.y},
K2(a){var s,r,q,p=this.a
while(!0){s=p==null
if(!s){r=p.f
r.toString
q=r instanceof A.bZ?A.cW(r):null
r=A.aG(q==null?A.aY(r):q)!==A.aG(a)}else r=!1
if(!r)break
p=p.a}if(s)s=null
else{s=p.f
s.toString}return a.i("0?").a(s)},
kM(a){var s,r,q=this.a
for(;s=q==null,!s;){if(q instanceof A.fF){r=q.ok
r.toString
r=a.b(r)}else r=!1
if(r)break
q=q.a}t.lE.a(q)
if(s)s=null
else{s=q.ok
s.toString}return a.i("0?").a(s)},
tG(a){var s=this.a
for(;s!=null;){if(s instanceof A.bI&&a.b(s.gaa()))return a.a(s.gaa())
s=s.a}return null},
BP(a){var s=this.a
while(!0){if(!(s!=null&&a.$1(s)))break
s=s.a}},
b8(){this.ev()},
d8(a){var s=this.c
if(s!=null)s.d8(a)},
c4(){var s=this.f
s=s==null?null:s.c4()
return s==null?"<optimized out>#"+A.bS(this)+"(DEFUNCT)":s},
ev(){var s=this
if(s.w!==B.ce)return
if(s.as)return
s.as=!0
s.r.Ck(s)},
uD(a){var s
if(this.w===B.ce)s=!this.as&&!a
else s=!0
if(s)return
this.hW()},
LP(){return this.uD(!1)},
hW(){this.as=!1},
$iaj:1}
A.ZQ.prototype={
$1(a){a.b=this.a.b
a.f9()},
$S:8}
A.ZR.prototype={
$1(a){this.a.a=a},
$S:8}
A.ZS.prototype={
$1(a){a.yh(this.a)
if(!(a instanceof A.bI))a.aY(this)},
$S:8}
A.ZN.prototype={
$1(a){a.HW(this.a)},
$S:8}
A.ZP.prototype={
$1(a){a.ox()},
$S:8}
A.ZO.prototype={
$1(a){a.rQ(this.a)},
$S:8}
A.FC.prototype={
aH(a){var s=this.d,r=new A.Km(s,A.az())
r.aK()
r.RU(s)
return r}}
A.tK.prototype={
fD(a,b){this.D1(a,b)
this.wD()},
wD(){this.LP()},
hW(){var s,r,q,p,o,n,m=this,l=null
try{l=m.b7()
m.f.toString}catch(o){s=A.af(o)
r=A.aw(o)
n=A.ald(A.ana(A.bs("building "+m.k(0)),s,r,new A.WI(m)))
l=n}finally{m.vv()}try{m.ay=m.dZ(m.ay,l,m.d)}catch(o){q=A.af(o)
p=A.aw(o)
n=A.ald(A.ana(A.bs("building "+m.k(0)),q,p,new A.WJ(m)))
l=n
m.ay=m.dZ(null,l,m.d)}},
aY(a){var s=this.ay
if(s!=null)a.$1(s)},
jr(a){this.ay=null
this.lj(a)}}
A.WI.prototype={
$0(){var s=A.a([],t.F)
return s},
$S:17}
A.WJ.prototype={
$0(){var s=A.a([],t.F)
return s},
$S:17}
A.LL.prototype={
b7(){var s=this.f
s.toString
return t.gU.a(s).L(this)},
bj(a,b){this.qp(0,b)
this.uD(!0)}}
A.fF.prototype={
b7(){return this.ok.L(this)},
f9(){var s=this
if(A.as7(s.b,s.f))s.ok.f9()
s.Ot()},
wD(){this.ok.ar()
this.ok.b8()
this.Oe()},
hW(){var s=this
if(s.p1){s.ok.b8()
s.p1=!1}s.Of()},
bj(a,b){var s,r,q,p=this
p.qp(0,b)
s=p.ok
r=s.a
r.toString
q=p.f
q.toString
s.a=t.d2.a(q)
s.aZ(r)
p.uD(!0)},
cc(){this.Or()
this.ok.cc()
this.ev()},
d7(){this.ok.d7()
this.CZ()},
pU(){var s=this
s.vw()
s.ok.m()
s.ok=s.ok.c=null},
z8(a,b){return this.D_(a,b)},
b8(){this.Os()
this.p1=!0}}
A.wL.prototype={
b7(){var s=this.f
s.toString
return t.yH.a(s).b},
bj(a,b){var s=this,r=s.f
r.toString
t.yH.a(r)
s.qp(0,b)
s.BM(r)
s.uD(!0)},
BM(a){this.mH(a)}}
A.mZ.prototype={
E3(a){this.aY(new A.a4L(a))},
mH(a){var s=this.f
s.toString
this.E3(this.$ti.i("dC<1>").a(s))}}
A.a4L.prototype={
$1(a){if(a instanceof A.bI)this.a.o9(a.gaa())
else a.aY(this)},
$S:8}
A.fl.prototype={
yb(){var s=this,r=s.a,q=r==null?null:r.y
if(q==null)q=B.Um
r=s.f
r.toString
s.y=q.a6q(0,A.C(r),s)},
Cp(a,b){this.b9.j(0,a,b)},
Mw(a,b){this.Cp(a,null)},
Lk(a,b){b.b8()},
BM(a){var s=this.f
s.toString
if(t.WB.a(s).c5(a))this.Pq(a)},
mH(a){var s,r,q
for(s=this.b9,s=new A.z8(s,s.wf()),r=A.o(s).c;s.t();){q=s.d
this.Lk(a,q==null?r.a(q):q)}}}
A.bI.prototype={
gaa(){var s=this.ay
s.toString
return s},
Uh(){var s=this.a
while(!0){if(!(s!=null&&!(s instanceof A.bI)))break
s=s.a}return t.c_.a(s)},
Ug(){var s,r={},q=r.a=this.a
r.b=null
while(!0){if(!(q!=null&&!(q instanceof A.bI)))break
if(q instanceof A.mZ){r.b=q
break}s=q.a
r.a=s
q=s}return r.b},
fD(a,b){var s,r=this
r.D1(a,b)
s=r.f
s.toString
r.ay=t.F5.a(s).aH(r)
r.rQ(b)
r.vv()},
bj(a,b){this.qp(0,b)
this.Gv()},
hW(){this.Gv()},
Gv(){var s=this,r=s.f
r.toString
t.F5.a(r).aL(s,s.gaa())
s.vv()},
a7z(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=new A.a60(a4),g=new A.a61(i),f=a3.length,e=f-1,d=a2.length,c=d-1,b=d===f?a2:A.aW(f,$.anP(),!1,t.h),a=i,a0=0,a1=0
while(!0){if(!(a1<=c&&a0<=e))break
s=h.$1(a2[a1])
r=a3[a0]
if(s!=null){f=s.f
f.toString
q=f instanceof A.bZ?A.cW(f):i
d=A.aG(q==null?A.aY(f):q)
q=r instanceof A.bZ?A.cW(r):i
f=!(d===A.aG(q==null?A.aY(r):q)&&J.f(f.a,r.a))}else f=!0
if(f)break
f=j.dZ(s,r,g.$2(a0,a))
f.toString
b[a0]=f;++a0;++a1
a=f}p=c
while(!0){o=a1<=p
if(!(o&&a0<=e))break
s=h.$1(a2[p])
r=a3[e]
if(s!=null){f=s.f
f.toString
q=f instanceof A.bZ?A.cW(f):i
d=A.aG(q==null?A.aY(f):q)
q=r instanceof A.bZ?A.cW(r):i
f=!(d===A.aG(q==null?A.aY(r):q)&&J.f(f.a,r.a))}else f=!0
if(f)break;--p;--e}if(o){n=A.y(t.D2,t.h)
for(;a1<=p;){s=h.$1(a2[a1])
if(s!=null){f=s.f.a
if(f!=null)n.j(0,f,s)
else{s.a=null
s.ox()
f=j.r.b
if(s.w===B.ce){s.d7()
s.aY(A.ajL())}f.b.E(0,s)}}++a1}o=!0}else n=i
for(;a0<=e;a=f){r=a3[a0]
if(o){m=r.a
if(m!=null){s=n.h(0,m)
if(s!=null){f=s.f
f.toString
q=f instanceof A.bZ?A.cW(f):i
d=A.aG(q==null?A.aY(f):q)
q=r instanceof A.bZ?A.cW(r):i
if(d===A.aG(q==null?A.aY(r):q)&&J.f(f.a,m))n.v(0,m)
else s=i}}else s=i}else s=i
f=j.dZ(s,r,g.$2(a0,a))
f.toString
b[a0]=f;++a0}e=a3.length-1
while(!0){if(!(a1<=c&&a0<=e))break
f=j.dZ(a2[a1],a3[a0],g.$2(a0,a))
f.toString
b[a0]=f;++a0;++a1
a=f}if(o&&n.a!==0)for(f=n.gaW(n),f=new A.e0(J.ax(f.a),f.b),d=A.o(f).z[1];f.t();){l=f.a
if(l==null)l=d.a(l)
if(!a4.D(0,l)){l.a=null
l.ox()
k=j.r.b
if(l.w===B.ce){l.d7()
l.aY(A.ajL())}k.b.E(0,l)}}return b},
d7(){this.CZ()},
pU(){var s=this,r=s.f
r.toString
t.F5.a(r)
s.vw()
r.oD(s.gaa())
s.ay.m()
s.ay=null},
yh(a){var s,r=this,q=r.d
r.Oq(a)
s=r.CW
s.toString
s.jB(r.gaa(),q,r.d)},
rQ(a){var s,r,q=this
q.d=a
s=q.CW=q.Uh()
if(s!=null)s.jw(q.gaa(),a)
r=q.Ug()
if(r!=null){s=r.f
s.toString
t.IL.a(s).o9(q.gaa())}},
ox(){var s=this,r=s.CW
if(r!=null){r.jK(s.gaa(),s.d)
s.CW=null}s.d=null},
jw(a,b){},
jB(a,b,c){},
jK(a,b){}}
A.a60.prototype={
$1(a){var s=this.a.D(0,a)
return s?null:a},
$S:313}
A.a61.prototype={
$2(a,b){return new A.pj(b,a,t.Bc)},
$S:314}
A.x8.prototype={
fD(a,b){this.vE(a,b)}}
A.GL.prototype={
jr(a){this.lj(a)},
jw(a,b){},
jB(a,b,c){},
jK(a,b){}}
A.xD.prototype={
aY(a){var s=this.p1
if(s!=null)a.$1(s)},
jr(a){this.p1=null
this.lj(a)},
fD(a,b){var s,r,q=this
q.vE(a,b)
s=q.p1
r=q.f
r.toString
q.p1=q.dZ(s,t.Mp.a(r).c,null)},
bj(a,b){var s,r,q=this
q.nh(0,b)
s=q.p1
r=q.f
r.toString
q.p1=q.dZ(s,t.Mp.a(r).c,null)},
jw(a,b){var s=this.ay
s.toString
t.GM.a(s).saX(a)},
jB(a,b,c){},
jK(a,b){var s=this.ay
s.toString
t.GM.a(s).saX(null)}}
A.eX.prototype={
gaa(){return t.pU.a(A.bI.prototype.gaa.call(this))},
gIQ(a){var s=this.p1
s===$&&A.b()
return new A.aO(s,new A.a3S(this),A.al(s).i("aO<1>"))},
jw(a,b){var s=this.gaa(),r=b.a
s.A4(0,a,r==null?null:r.gaa())},
jB(a,b,c){var s=this.gaa(),r=c.a
s.ug(a,r==null?null:r.gaa())},
jK(a,b){this.gaa().v(0,a)},
aY(a){var s,r,q,p,o=this.p1
o===$&&A.b()
s=o.length
r=this.p2
q=0
for(;q<s;++q){p=o[q]
if(!r.D(0,p))a.$1(p)}},
jr(a){this.p2.E(0,a)
this.lj(a)},
tY(a,b){return this.D0(a,b)},
fD(a,b){var s,r,q,p,o,n,m,l=this
l.vE(a,b)
s=l.f
s.toString
s=t.Lb.a(s).c
r=s.length
q=A.aW(r,$.anP(),!1,t.h)
for(p=t.Bc,o=null,n=0;n<r;++n,o=m){m=l.D0(s[n],new A.pj(o,n,p))
q[n]=m}l.p1=q},
bj(a,b){var s,r,q,p=this
p.nh(0,b)
s=p.f
s.toString
t.Lb.a(s)
r=p.p1
r===$&&A.b()
q=p.p2
p.p1=p.a7z(r,s.c,q)
q.a_(0)}}
A.a3S.prototype={
$1(a){return!this.a.p2.D(0,a)},
$S:48}
A.pj.prototype={
l(a,b){if(b==null)return!1
if(J.Y(b)!==A.C(this))return!1
return b instanceof A.pj&&this.b===b.b&&J.f(this.a,b.a)},
gu(a){return A.T(this.b,this.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.PM.prototype={}
A.PP.prototype={
bW(a){return A.L(A.c8(null))}}
A.RT.prototype={}
A.mv.prototype={}
A.cB.prototype={
J4(){return this.a.$0()},
KC(a){return this.b.$1(a)}}
A.G6.prototype={
L(a){var s=this,r=A.y(t.n,t.xR),q=A.dA(a),p=q==null?null:q.ay
if(s.d==null)if(s.e==null)if(s.f==null)if(s.r==null)q=!1
else q=!0
else q=!0
else q=!0
else q=!0
if(q)r.j(0,B.Cw,new A.cB(new A.a0j(s),new A.a0k(s,p),t.jl))
if(s.ay==null)q=!1
else q=!0
if(q)r.j(0,B.a_E,new A.cB(new A.a0l(s),new A.a0p(s,p),t.uA))
if(s.cy==null)q=!1
else q=!0
if(q)r.j(0,B.Cu,new A.cB(new A.a0q(s),new A.a0r(s,p),t.jn))
if(s.rx!=null||s.ry!=null||s.to!=null||!1)r.j(0,B.m4,new A.cB(new A.a0s(s),new A.a0t(s,p),t.ok))
if(s.x2!=null||s.y1!=null||s.y2!=null||s.bL!=null)r.j(0,B.m3,new A.cB(new A.a0u(s),new A.a0v(s,p),t.Uv))
if(s.bt!=null||s.aj!=null||s.af!=null||!1)r.j(0,B.m2,new A.cB(new A.a0w(s),new A.a0m(s,p),t.YC))
q=!1
if(q)r.j(0,B.a_H,new A.cB(new A.a0n(s),new A.a0o(s,p),t.C1))
return new A.l4(s.c,r,s.aA,s.b2,null,null)}}
A.a0j.prototype={
$0(){return A.aBT(this.a,null)},
$S:315}
A.a0k.prototype={
$1(a){var s=this.a
a.y1=s.d
a.y2=s.e
a.bL=s.f
a.bt=s.r
a.b1=a.b_=a.aq=a.ap=a.af=a.aj=a.b9=null
a.b=this.b},
$S:316}
A.a0l.prototype={
$0(){var s=t.S
return new A.h1(A.y(s,t.jk),this.a,null,A.y(s,t.Y))},
$S:317}
A.a0p.prototype={
$1(a){a.e=null
a.f=this.a.ay
a.r=null
a.b=this.b},
$S:318}
A.a0q.prototype={
$0(){return A.azw(this.a,null,null)},
$S:319}
A.a0r.prototype={
$1(a){a.k3=a.k2=null
a.k4=this.a.cy
a.b9=a.bt=a.bL=a.y2=a.y1=a.xr=a.x2=a.x1=a.to=a.ry=a.rx=a.RG=a.R8=a.p4=a.p3=a.p2=a.p1=a.ok=null
a.b=this.b},
$S:320}
A.a0s.prototype={
$0(){return A.are(this.a,null)},
$S:118}
A.a0t.prototype={
$1(a){var s
a.as=null
s=this.a
a.at=s.rx
a.ax=s.ry
a.ay=s.to
a.ch=null
a.Q=s.ba
a.b=this.b},
$S:119}
A.a0u.prototype={
$0(){return A.alt(this.a,null)},
$S:120}
A.a0v.prototype={
$1(a){var s=this.a
a.as=s.x2
a.at=null
a.ax=s.y1
a.ay=s.y2
a.ch=s.bL
a.Q=s.ba
a.b=this.b},
$S:121}
A.a0w.prototype={
$0(){var s=t.S,r=A.d0(s)
return new A.hk(B.aH,A.ano(),B.cd,A.y(s,t.GY),A.b7(s),A.y(s,t.o),r,this.a,null,A.y(s,t.Y))},
$S:325}
A.a0m.prototype={
$1(a){var s=this.a
a.as=s.bt
a.at=null
a.ax=s.aj
a.ay=s.af
a.ch=null
a.Q=s.ba
a.b=this.b},
$S:326}
A.a0n.prototype={
$0(){var s=t.S,r=A.d0(s)
return new A.h5(B.mc,A.y(s,t.o),r,this.a,null,A.y(s,t.Y))},
$S:327}
A.a0o.prototype={
$1(a){a.ax=a.as=a.at=a.Q=null
a.b=this.b},
$S:328}
A.l4.prototype={
am(){return new A.pQ(B.TC,B.m)}}
A.pQ.prototype={
ar(){var s,r,q=this
q.aJ()
s=q.a
r=s.r
q.e=r==null?new A.NT(q):r
q.y_(s.d)},
aZ(a){var s,r=this
r.bs(a)
if(!(a.r==null&&r.a.r==null)){s=r.a.r
r.e=s==null?new A.NT(r):s}r.y_(r.a.d)},
a6V(a){if(this.a.f)return
t.ym.a(this.c.gaa()).sa7E(a)},
m(){for(var s=this.d,s=J.ax(s.gaW(s));s.t();)s.gH(s).m()
this.d=null
this.aQ()},
y_(a){var s,r,q,p,o=this,n=o.d
n.toString
o.d=A.y(t.n,t.cD)
for(s=J.ax(a.gbu(a));s.t();){r=s.gH(s)
q=o.d
q.toString
p=n.h(0,r)
q.j(0,r,p==null?a.h(0,r).J4():p)
q=a.h(0,r)
q.toString
r=o.d.h(0,r)
r.toString
q.KC(r)}for(s=J.ax(n.gbu(n));s.t();){r=s.gH(s)
if(!o.d.R(0,r))n.h(0,r).m()}},
UB(a){var s,r
for(s=this.d,s=J.ax(s.gaW(s));s.t();){r=s.gH(s)
r.d.j(0,a.gbY(),a.gcj(a))
if(r.fB(a))r.hx(a)
else r.p8(a)}},
Wa(a){var s,r
for(s=this.d,s=J.ax(s.gaW(s));s.t();){r=s.gH(s)
r.d.j(0,a.gbY(),a.gcj(a))
if(r.a52(a))r.yq(a)}},
a_U(a){this.e.yE(a)},
L(a){var s,r,q,p=this,o=null,n=p.a,m=n.e,l=m==null
if(l)s=n.c==null?B.bX:B.bW
else s=m
r=n.c
q=A.GS(s,r,o,p.gUA(),p.gW9(),o,o)
if(!n.f){if(l)n=r==null?B.bX:B.bW
else n=m
q=new A.OG(n,p.ga_T(),q,o)}return q}}
A.OG.prototype={
aH(a){var s=new A.ju(B.bW,null,A.az())
s.aK()
s.saX(null)
s.A=this.e
this.f.$1(s)
return s},
aL(a,b){b.A=this.e
this.f.$1(b)}}
A.a82.prototype={
k(a){return"SemanticsGestureDelegate()"}}
A.NT.prototype={
yE(a){var s=this,r=s.a.d
r.toString
a.sjF(s.V_(r))
a.skV(s.UR(r))
a.sa5S(s.UP(r))
a.sa60(s.V0(r))},
V_(a){var s=t.zm.a(a.h(0,B.Cw))
if(s==null)return null
return new A.adr(s)},
UR(a){var s=t.qA.a(a.h(0,B.Cu))
if(s==null)return null
return new A.adq(s)},
UP(a){var s=t.gx.a(a.h(0,B.m3)),r=t.uR.a(a.h(0,B.m2)),q=s==null?null:new A.adn(s),p=r==null?null:new A.ado(r)
if(q==null&&p==null)return null
return new A.adp(q,p)},
V0(a){var s=t.Wn.a(a.h(0,B.m4)),r=t.uR.a(a.h(0,B.m2)),q=s==null?null:new A.ads(s),p=r==null?null:new A.adt(r)
if(q==null&&p==null)return null
return new A.adu(q,p)}}
A.adr.prototype={
$0(){var s=this.a,r=s.y1
if(r!=null)r.$1(new A.qz(B.k,B.k))
r=s.y2
if(r!=null)r.$1(new A.qA())
s=s.bL
if(s!=null)s.$0()},
$S:0}
A.adq.prototype={
$0(){var s=this.a,r=s.ok
if(r!=null)r.$1(B.S_)
r=s.k4
if(r!=null)r.$0()
s=s.p3
if(s!=null)s.$1(B.RY)},
$S:0}
A.adn.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.j3(B.k))
r=s.at
if(r!=null)r.$1(new A.hW(null,B.k,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.h2(B.cc,0))},
$S:23}
A.ado.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.j3(B.k))
r=s.at
if(r!=null)r.$1(new A.hW(null,B.k,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.h2(B.cc,null))},
$S:23}
A.adp.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(a)
s=this.b
if(s!=null)s.$1(a)},
$S:23}
A.ads.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.j3(B.k))
r=s.at
if(r!=null)r.$1(new A.hW(null,B.k,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.h2(B.cc,0))},
$S:23}
A.adt.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.j3(B.k))
r=s.at
if(r!=null)r.$1(new A.hW(null,B.k,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.h2(B.cc,null))},
$S:23}
A.adu.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(a)
s=this.b
if(s!=null)s.$1(a)},
$S:23}
A.mC.prototype={
G(){return"HeroFlightDirection."+this.b}}
A.mA.prototype={
am(){return new A.re(new A.bB(null,t.C),B.m)}}
A.a11.prototype={
$2(a,b){var s=a.f
s.toString
t.rA.a(s)
s=a.ok
s.toString
t.U3.a(s)
if(!this.b||!1)this.a.j(0,b,s)
else s.JM()},
$S:331}
A.a12.prototype={
$1(a){var s,r,q=this,p=a.f
p.toString
if(p instanceof A.mA){t.MF.a(a)
s=p.c
if(A.alL(a)===q.a)q.b.$2(a,s)
else{r=A.a3H(a,t.X)
if(r!=null)p=r.gkO()
else p=!1
if(p)q.b.$2(a,s)}}a.aY(q)},
$S:8}
A.re.prototype={
vn(a){var s,r=this
r.f=a
s=r.c.gaa()
s.toString
r.av(new A.aev(r,t.x.a(s)))},
vm(){return this.vn(!1)},
mb(a){var s=this
if(a||s.e==null)return
s.e=null
if(s.c!=null)s.av(new A.aeu())},
JM(){return this.mb(!1)},
L(a){var s,r=this,q=null,p=r.e,o=p==null,n=!o
if(n)r.a.toString
if(n&&!r.f){o=p.a
return A.e3(q,p.b,o)}s=o?q:p.a
p=o?q:p.b
return A.e3(new A.wl(n,new A.qH(o,new A.kJ(r.a.e,r.d),q),q),p,s)}}
A.aev.prototype={
$0(){var s=this.b.k3
s.toString
this.a.e=s},
$S:0}
A.aeu.prototype={
$0(){},
$S:0}
A.aer.prototype={
gbR(a){var s,r=this
if(r.a===B.bU){s=r.e.fy
s.toString}else{s=r.d.fy
s.toString}return A.eq(B.bt,s,r.z?null:new A.uJ(B.bt))},
os(a,b){var s
this.r.a.toString
s=this.w.$2(a,b)
return s==null?new A.wS(a,b):s},
gKe(){var s,r,q=this,p=q.Q
if(p===$){s=q.f.c
s.toString
r=A.aro(s,$.am.ai$.z.h(0,q.d.k2))
q.Q!==$&&A.bm()
q.Q=r
p=r}return p},
guO(){var s,r,q=this,p=q.as
if(p===$){s=q.r.c
s.toString
r=A.aro(s,$.am.ai$.z.h(0,q.e.k2))
q.as!==$&&A.bm()
q.as=r
p=r}return p},
gkQ(){var s,r,q=this,p=q.at
if(p===$){s=q.guO()
if(s.gKS(s))if(!q.z){s=q.gKe()
s=s.gKS(s)
r=s}else r=!0
else r=!1
q.at!==$&&A.bm()
p=q.at=r}return p},
k(a){var s,r,q=this,p=q.a.k(0),o=q.f,n=o.a.c.k(0),m=q.d.b.k(0),l=q.e.b.k(0)
o=o.k(0)
s=q.r.k(0)
r=q.gkQ()?"":", INVALID"
return"_HeroFlightManifest("+p+" tag: "+n+" from route: "+m+" to route: "+l+" with hero: "+o+" to "+s+")"+r}}
A.jP.prototype={
SH(a){var s,r,q,p,o=this,n=o.c
if(n==null){n=o.f
n===$&&A.b()
s=n.gbR(n)
r=o.f
q=r.f.c
q.toString
p=r.r.c
p.toString
p=o.c=n.x.$5(a,s,r.a,q,p)
n=p}s=o.e
s===$&&A.b()
return A.iX(s,new A.aes(o),n)},
Gu(a){var s,r=this,q=a===B.X
if(q||a===B.O){s=r.e
s===$&&A.b()
s.saO(0,null)
r.r.mP(0)
r.r=null
s=r.f
s===$&&A.b()
s.f.mb(q)
r.f.r.mb(a===B.O)
r.a.$1(r)
r.e.I(0,r.gLu())}},
Fs(a){var s=this,r=s.f
r===$&&A.b()
r=r.d.a
if((r==null?null:r.CW.a)!==!0){s.Gu(a)
return}if(s.x)return
r.toString
s.x=!0
r.CW.X(0,new A.aet(s,r))},
a6_(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(!h.w){s=h.f
s===$&&A.b()
s=s.r.c!=null}else s=!1
if(s){s=h.f
s===$&&A.b()
r=t.Qv.a(s.r.c.gaa())}else r=null
if(r!=null&&r.b!=null&&r.k3!=null){s=h.f
s===$&&A.b()
s=$.am.ai$.z.h(0,s.e.k2)
s=s==null?null:s.gaa()
q=A.cC(r.bC(0,t.Qv.a(s)),B.k)}else q=null
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
h.b=i.os(p.a,new A.E(k,j,k+(n-m),j+(l-o)))}}else{p=h.d
if(p.gb4(p)===B.X){p=h.e
p===$&&A.b()
o=$.av1()
n=p.gn(p)
m=A.o(o).i("nZ<aL.T>")
h.d=new A.b0(t.m.a(p),new A.nZ(new A.j0(new A.hc(n,1,B.b_)),o,m),m.i("b0<aL.T>"))}}if(s)s=!(isFinite(q.a)&&isFinite(q.b))
else s=!0
h.w=s},
k(a){var s,r,q,p,o,n=this.f
n===$&&A.b()
s=n.d.b
r=n.e.b
n=n.f.a.c.k(0)
q=s.k(0)
p=r.k(0)
o=this.e
o===$&&A.b()
return"HeroFlight(for: "+n+", from: "+q+", to: "+p+" "+A.h(o.c)+")"}}
A.aes.prototype={
$2(a,b){var s,r=null,q=this.a,p=q.b
p===$&&A.b()
s=q.e
s===$&&A.b()
s=p.ak(0,s.gn(s))
s.toString
p=q.f
p===$&&A.b()
p=p.c
return A.l1(p.b-s.d,new A.ha(!0,r,A.alg(b,q.d),r),r,r,s.a,p.a-s.c,s.b,r)},
$S:332}
A.aet.prototype={
$0(){var s,r=this.a
r.x=!1
this.b.CW.I(0,this)
s=r.e
s===$&&A.b()
r.Gu(s.gb4(s))},
$S:0}
A.uY.prototype={
th(a,b){this.r2(b,a,B.bU,!1)},
tg(a,b){var s=$.hG()
A.p3(this)
if(!s.a.get(this).CW.a)this.r2(a,b,B.bV,!1)},
ti(a,b){var s=a.gkO()
if(s)this.r2(b,a,B.bU,!1)},
Js(a,b){this.r2(a,b,B.bV,!0)},
oC(){var s,r,q,p=$.hG()
A.p3(this)
if(p.a.get(this).CW.a)return
p=this.b
p=p.gaW(p)
s=A.o(p).i("aO<p.E>")
r=A.aA(new A.aO(p,new A.a10(),s),!1,s.i("p.E"))
for(p=r.length,q=0;q<p;++q)r[q].Fs(B.O)},
r2(a,b,c,d){var s
if(b!=a&&b instanceof A.ic&&a instanceof A.ic){switch(c.a){case 1:s=a.fy
if(s.gn(s)===0)return
break
case 0:s=b.fy
if(s.gn(s)===1)return
break}if(d)if(c===B.bV){b.gpn()
s=!0}else s=!1
else s=!1
if(s)this.Hq(a,b,c,d)
else{s=b.fy
b.sui(s.gn(s)===0)
$.am.cy$.push(new A.a1_(this,a,b,c,d))}}},
Hq(b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null
b4.sui(!1)
s=$.hG()
A.p3(b1)
s=s.a.get(b1)
r=s==null
if(r)q=b2
else{p=s.d
p===$&&A.b()
q=p.gbo()}if(r||q==null)return
o=s.c.gaa()
if(!(o instanceof A.H))return
n=$.am.ai$.z.h(0,b3.k2)
m=n!=null?A.apn(n,b6,s):B.zE
l=$.am.ai$.z.h(0,b4.k2)
k=l!=null?A.apn(l,b6,s):B.zE
for(s=m.ges(m),s=s.ga5(s),r=b1.gTA(),p=b1.a,j=b1.b,i=t.af,h=b1.gVI(),g=t.A,f=t.R,e=t.b,d=t.wi,c=t.H7,b=t.m,a=c.i("b0<aL.T>"),a0=t.k2;s.t();){a1=s.gH(s)
a2=a1.gcN(a1)
a3=a1.gn(a1)
a4=k.h(0,a2)
a5=j.h(0,a2)
if(a4==null)a6=b2
else{a1=o.k3
a1.toString
a4.a.toString
a3.a.toString
a6=new A.aer(b5,q,a1,b3,b4,a3,a4,p,r,b6,a5!=null)}if(a6!=null&&a6.gkQ()){k.v(0,a2)
if(a5!=null){a1=a5.f
a1===$&&A.b()
a7=a1.a
if(a7===B.bU&&a6.a===B.bV){a1=a5.e
a1===$&&A.b()
a1.saO(0,new A.f1(a6.gbR(a6),new A.bo(A.a([],g),f),0))
a1=a5.b
a1===$&&A.b()
a5.b=new A.x7(a1,a1.b,a1.a,a0)}else{a7=a7===B.bV&&a6.a===B.bU
a8=a5.e
if(a7){a8===$&&A.b()
a1=a6.gbR(a6)
a7=a5.f
a7=a7.gbR(a7)
a7=a7.gn(a7)
a8.saO(0,new A.b0(b.a(a1),new A.aN(a7,1,c),a))
a1=a5.f
a7=a1.f
a8=a6.r
if(a7!==a8){a7.mb(!0)
a8.vm()
a1=a5.f
a7=a5.b
a7===$&&A.b()
a5.b=a1.os(a7.b,a6.guO())}else{a7=a5.b
a7===$&&A.b()
a5.b=a1.os(a7.b,a7.a)}}else{a7=a5.b
a7===$&&A.b()
a8===$&&A.b()
a5.b=a1.os(a7.ak(0,a8.gn(a8)),a6.guO())
a5.c=null
a1=a6.a
a7=a5.e
if(a1===B.bV)a7.saO(0,new A.f1(a6.gbR(a6),new A.bo(A.a([],g),f),0))
else a7.saO(0,a6.gbR(a6))
a5.f.f.mb(!0)
a5.f.r.mb(!0)
a6.f.vn(a1===B.bU)
a6.r.vm()
a1=a5.r.f.gbo()
if(a1!=null)a1.G3()}}a5.f=a6}else{a1=new A.jP(h,B.d2)
a7=A.a([],g)
a8=new A.bo(a7,f)
a9=new A.wK(a8,new A.bo(A.a([],e),d),0)
a9.a=B.O
a9.b=0
a9.bx()
a8.b=!0
a7.push(a1.gV8())
a1.e=a9
a1.f=a6
switch(a6.a.a){case 1:a9.saO(0,new A.f1(a6.gbR(a6),new A.bo(A.a([],g),f),0))
b0=!1
break
case 0:a9.saO(0,a6.gbR(a6))
b0=!0
break
default:b0=b2}a7=a1.f
a1.b=a7.os(a7.gKe(),a1.f.guO())
a1.f.f.vn(b0)
a1.f.r.vm()
a7=a1.f
a8=new A.nQ(!1,$.bF())
a8.b1$=!0
a8=new A.eZ(a1.gSG(),!1,a8,new A.bB(b2,i))
a1.r=a8
a7.b.A3(0,a8)
a8=a1.e
a8.bx()
a8=a8.ci$
a8.b=!0
a8.a.push(a1.gLu())
j.j(0,a2,a1)}}else if(a5!=null)a5.w=!0}for(s=J.ax(k.gaW(k));s.t();)s.gH(s).JM()},
VJ(a){var s=a.f
s===$&&A.b()
this.b.v(0,s.f.a.c)},
TB(a,b,c,d,e){var s,r,q=e.f
q.toString
t.rA.a(q)
s=A.dA(e)
r=A.dA(d)
if(s==null||r==null)return q.e
return A.iX(b,new A.a0Z(s,c,r.f,s.f,b,q),null)}}
A.a10.prototype={
$1(a){var s=a.f
s===$&&A.b()
if(s.y)if(s.a===B.bV){s=a.e
s===$&&A.b()
s=s.gb4(s)===B.O}else s=!1
else s=!1
return s},
$S:335}
A.a1_.prototype={
$1(a){var s=this
s.a.Hq(s.b,s.c,s.d,s.e)},
$S:2}
A.a0Z.prototype={
$2(a,b){var s=this,r=s.c,q=s.d,p=s.e
r=s.b===B.bU?new A.un(r,q).ak(0,p.gn(p)):new A.un(q,r).ak(0,p.gn(p))
return new A.fo(s.a.Ja(r),s.f.e,null)},
$S:336}
A.pc.prototype={
L(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.a4(t.I)
f.toString
s=f.w
r=A.apr(a)
q=r.a
p=r.b
o=r.c
n=r.d
m=r.e
f=this.c
if(f==null)return A.dP(g,A.e3(g,q,q),!1,g,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)
l=r.r
k=l==null?g:A.K(l,0,1)
if(k==null)k=1
l=r.f
l.toString
if(k!==1)j=A.b2(B.d.b0(255*((l.gn(l)>>>24&255)/255*k)),l.gn(l)>>>16&255,l.gn(l)>>>8&255,l.gn(l)&255)
else j=l
l=A.dO(f.a)
i=A.a([],t.Wj)
if(p!=null)i.push(new A.kt("FILL",p))
if(o!=null)i.push(new A.kt("wght",o))
if(n!=null)i.push(new A.kt("GRAD",n))
if(m!=null)i.push(new A.kt("opsz",m))
h=A.aqu(g,g,B.WX,g,g,!0,g,A.qF(g,A.bd(g,g,j,g,g,g,g,g,"MaterialIcons",g,g,q,g,i,g,g,g,!1,g,g,g,g,g,r.w,g,g),l),B.bM,s,g,1,B.aW)
if(f.d)switch(s.a){case 0:f=new A.bj(new Float64Array(16))
f.dk()
f.i5(0,-1,1,1)
h=A.ar2(B.M,h,f,!1)
break
case 1:break}return A.dP(g,new A.uv(!0,A.e3(A.tA(h,g,g),q,q),g),!1,g,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)}}
A.mI.prototype={
l(a,b){var s
if(b==null)return!1
if(J.Y(b)!==A.C(this))return!1
if(b instanceof A.mI)if(b.a===this.a)s=b.d===this.d
else s=!1
else s=!1
return s},
gu(a){return A.T(this.a,"MaterialIcons",null,this.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a){return"IconData(U+"+B.b.hT(B.f.iQ(this.a,16).toUpperCase(),5,"0")+")"}}
A.mJ.prototype={
c5(a){return!this.w.l(0,a.w)}}
A.a1H.prototype={
$1(a){return A.alw(this.c,A.apq(a).cb(this.b),this.a)},
$S:337}
A.cH.prototype={
or(a,b,c,d,e,f,g,h){var s,r=this,q=g==null?r.a:g,p=b==null?r.b:b,o=h==null?r.c:h,n=c==null?r.d:c,m=e==null?r.e:e,l=a==null?r.f:a
if(d==null){s=r.r
s=s==null?null:A.K(s,0,1)}else s=d
return new A.cH(q,p,o,n,m,l,s,f==null?r.w:f)},
hE(a){return this.or(a,null,null,null,null,null,null,null)},
cb(a){var s=a.r
s=s==null?null:A.K(s,0,1)
return this.or(a.f,a.b,a.d,s,a.e,a.w,a.a,a.c)},
Y(a){return this},
l(a,b){var s,r,q=this
if(b==null)return!1
if(J.Y(b)!==A.C(q))return!1
if(b instanceof A.cH)if(b.a==q.a)if(b.b==q.b)if(b.c==q.c)if(b.d==q.d)if(b.e==q.e)if(J.f(b.f,q.f)){s=b.r
s=s==null?null:A.K(s,0,1)
r=q.r
s=s==(r==null?null:A.K(r,0,1))&&A.cX(b.w,q.w)}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gu(a){var s,r=this,q=r.r
q=q==null?null:A.K(q,0,1)
s=r.w
s=s==null?null:A.dj(s)
return A.T(r.a,r.b,r.c,r.d,r.e,r.f,q,s,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.OS.prototype={}
A.kz.prototype={
am(){return new A.z9(B.m)}}
A.z9.prototype={
ar(){var s=this
s.aJ()
$.am.b5$.push(s)
s.z=new A.ES(s)},
m(){var s,r=this
B.c.v($.am.b5$,r)
r.a_g()
s=r.at
if(s!=null)s.m()
s=r.z
s===$&&A.b()
s.a=null
r.xI(null)
r.aQ()},
b8(){var s,r=this
r.a_L()
r.xM()
s=r.c
s.toString
if(A.ar_(s))r.Xh()
else r.Ht(!0)
r.cF()},
aZ(a){var s,r,q=this
q.bs(a)
if(q.r&&q.a.e==null!==(a.e==null)){s=q.nB()
r=q.d
r.toString
r.X(0,q.Fg(!0))
q.d.I(0,s)}if(!q.a.c.l(0,a.c))q.xM()},
f9(){this.xM()
this.Qi()},
a_L(){var s=this.c
s.toString
s=A.dA(s)
s=s==null?null:s.z
if(s==null){s=$.a7S.zy$
s===$&&A.b()
s=(s.a&2)!==0}this.w=s},
xM(){var s,r,q,p,o=this,n=o.z
n===$&&A.b()
s=o.a
r=s.c
q=o.c
q.toString
p=s.r
if(p!=null&&s.w!=null){p.toString
s=s.w
s.toString
s=new A.a9(p,s)}else s=null
o.a_W(new A.xh(n,r,t.JE).Y(A.ang(q,s)))},
Fg(a){var s,r=this,q=r.ax
if(q==null||a){r.as=r.Q=null
q=r.a
s=q.e==null?null:r.gVN()
q=q.f!=null||!1?new A.aeH(r):null
q=r.ax=new A.dz(r.gVP(),s,q)}q.toString
return q},
nB(){return this.Fg(!1)},
VQ(a,b){this.av(new A.aeJ(this,a,b))},
VO(a){this.av(new A.aeI(this,a))},
xI(a){var s=this.e
$.bJ.cy$.push(new A.aeK(s))
this.e=a},
a_W(a){var s,r,q=this,p=q.d
if(p==null)s=null
else{s=p.a
if(s==null)s=p}r=a.a
if(s===(r==null?a:r))return
if(q.r){p.toString
p.I(0,q.nB())}q.a.toString
q.av(new A.aeL(q))
q.av(new A.aeM(q))
q.d=a
if(q.r)a.X(0,q.nB())},
Xh(){var s,r=this
if(r.r)return
s=r.d
s.toString
s.X(0,r.nB())
s=r.at
if(s!=null)s.m()
r.at=null
r.r=!0},
Ht(a){var s,r=this
if(!r.r)return
if(a)if(r.at==null){s=r.d
s=(s==null?null:s.a)!=null}else s=!1
else s=!1
if(s)r.at=r.d.a.mD()
s=r.d
s.toString
s.I(0,r.nB())
r.r=!1},
a_g(){return this.Ht(!1)},
L(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.Q
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
h=new A.K6(r,q,o,n,e,s,f,p.z,m,l,k,j,f,!1,i,!1,f)
h=A.dP(f,h,!1,f,!1,f,f,f,!0,"",f,f,f,f,f,f,f,f,f,f,f)
e=p.d
if(e!=null)h=e.$4(a,h,g.x,g.y)
e=g.a.e
return e!=null?e.$3(a,h,g.f):h}}
A.aeH.prototype={
$2(a,b){var s=this.a
s.av(new A.aeG(s,a,b))},
$S:338}
A.aeG.prototype={
$0(){var s=this.a
s.Q=this.b
s.as=this.c},
$S:0}
A.aeJ.prototype={
$0(){var s,r=this.a
r.xI(this.b)
r.as=r.Q=r.f=null
s=r.x
r.x=s==null?0:s+1
r.y=B.o3.Ng(r.y,this.c)},
$S:0}
A.aeI.prototype={
$0(){var s=this.a
s.f=this.b
s.as=s.Q=null},
$S:0}
A.aeK.prototype={
$1(a){var s=this.a
if(s!=null)s.a.m()
return null},
$S:2}
A.aeL.prototype={
$0(){this.a.xI(null)},
$S:0}
A.aeM.prototype={
$0(){var s=this.a
s.x=s.f=null
s.y=!1},
$S:0}
A.Td.prototype={}
A.EE.prototype={
dV(a){var s=A.X5(this.a,this.b,a)
s.toString
return s}}
A.un.prototype={
dV(a){var s=A.alb(this.a,this.b,a)
s.toString
return s}}
A.m4.prototype={
dV(a){return A.ov(this.a,this.b,a)}}
A.nI.prototype={
dV(a){var s=A.be(this.a,this.b,a)
s.toString
return s}}
A.Gu.prototype={}
A.ph.prototype={
gk8(){var s,r,q=this,p=q.d
if(p===$){s=q.a.d
r=A.dW(null,s,null,null,q)
q.d!==$&&A.bm()
q.d=r
p=r}return p},
gfN(){var s,r=this,q=r.e
if(q===$){s=r.gk8()
q=r.e=A.eq(r.a.c,s,null)}return q},
ar(){var s,r=this
r.aJ()
s=r.gk8()
s.bx()
s=s.c1$
s.b=!0
s.a.push(new A.a26(r))
r.ED()},
aZ(a){var s,r=this
r.bs(a)
if(r.a.c!==a.c){r.gfN().m()
s=r.gk8()
r.e=A.eq(r.a.c,s,null)}r.gk8().e=r.a.d
if(r.ED()){r.p0(new A.a25(r))
s=r.gk8()
s.sn(0,0)
s.cZ(0)}},
m(){this.gfN().m()
this.gk8().m()
this.Qt()},
a_Z(a,b){var s
if(a==null)return
s=this.gfN()
a.syJ(a.ak(0,s.gn(s)))
a.saT(0,b)},
ED(){var s={}
s.a=!1
this.p0(new A.a24(s,this))
return s.a}}
A.a26.prototype={
$1(a){switch(a.a){case 3:this.a.a.toString
break
case 0:case 1:case 2:break}},
$S:4}
A.a25.prototype={
$3(a,b,c){this.a.a_Z(a,b)
return a},
$S:122}
A.a24.prototype={
$3(a,b,c){var s
if(b!=null){if(a==null)a=c.$1(b)
s=a.b
if(!J.f(b,s==null?a.a:s))this.a.a=!0
else if(a.b==null)a.saT(0,a.a)}else a=null
return a},
$S:122}
A.oo.prototype={
ar(){this.OF()
var s=this.gk8()
s.bx()
s=s.ci$
s.b=!0
s.a.push(this.gV6())},
V7(){this.av(new A.UN())}}
A.UN.prototype={
$0(){},
$S:0}
A.t4.prototype={
am(){return new A.MP(null,null,B.m)}}
A.MP.prototype={
p0(a){this.CW=t.Dh.a(a.$3(this.CW,this.a.w,new A.aco()))},
L(a){var s,r=this.CW
r.toString
s=this.gfN()
s=r.ak(0,s.gn(s))
return A.u2(this.a.r,null,B.cT,!0,s,null,null,B.aW)}}
A.aco.prototype={
$1(a){return new A.nI(t.em.a(a),null)},
$S:340}
A.t5.prototype={
am(){return new A.MQ(null,null,B.m)}}
A.MQ.prototype={
p0(a){var s=this,r=s.CW
s.a.toString
s.CW=t.eJ.a(a.$3(r,B.aG,new A.acp()))
s.cx=t.ir.a(a.$3(s.cx,s.a.z,new A.acq()))
r=t.YJ
s.cy=r.a(a.$3(s.cy,s.a.Q,new A.acr()))
s.db=r.a(a.$3(s.db,s.a.at,new A.acs()))},
L(a){var s,r,q,p,o,n=this,m=n.a,l=m.w
m=m.x
s=n.CW
s.toString
r=n.gfN()
r=s.ak(0,r.gn(r))
s=n.cx
s.toString
q=n.gfN()
q=s.ak(0,q.gn(q))
s=n.a.Q
p=n.db
p.toString
o=n.gfN()
o=p.ak(0,o.gn(o))
o.toString
return new A.JK(l,m,r,q,s,o,n.a.r,null)}}
A.acp.prototype={
$1(a){return new A.m4(t.m_.a(a),null)},
$S:341}
A.acq.prototype={
$1(a){return new A.aN(A.U_(a),null,t.H7)},
$S:134}
A.acr.prototype={
$1(a){return new A.hP(t.n8.a(a),null)},
$S:51}
A.acs.prototype={
$1(a){return new A.hP(t.n8.a(a),null)},
$S:51}
A.rh.prototype={
m(){var s=this,r=s.cJ$
if(r!=null)r.I(0,s.gkk())
s.cJ$=null
s.aQ()},
cc(){this.dJ()
this.cT()
this.kl()}}
A.kB.prototype={
bW(a){var s=A.h6(t.h,t.X)
return new A.v5(s,this,B.a9,A.o(this).i("v5<kB.T>"))}}
A.v5.prototype={
Mw(a,b){var s=this.b9,r=this.$ti,q=r.i("ci<1>?").a(s.h(0,a))
if(q!=null&&q.gO(q))return
s.j(0,a,A.d0(r.c))},
Lk(a,b){var s,r=this.$ti,q=r.i("ci<1>?").a(this.b9.h(0,b))
if(q==null)return
if(!q.gO(q)){s=this.f
s.toString
s=r.i("kB<1>").a(s).a7B(a,q)
r=s}else r=!0
if(r)b.b8()}}
A.i1.prototype={
c5(a){return a.f!==this.f},
bW(a){var s=new A.ri(A.h6(t.h,t.X),this,B.a9,A.o(this).i("ri<i1.T>"))
this.f.X(0,s.gxa())
return s}}
A.ri.prototype={
bj(a,b){var s,r,q=this,p=q.f
p.toString
s=q.$ti.i("i1<1>").a(p).f
r=b.f
if(s!==r){p=q.gxa()
s.I(0,p)
r.X(0,p)}q.Pp(0,b)},
b7(){var s,r=this
if(r.by){s=r.f
s.toString
r.D5(r.$ti.i("i1<1>").a(s))
r.by=!1}return r.Po()},
WM(){this.by=!0
this.ev()},
mH(a){this.D5(a)
this.by=!1},
pU(){var s=this,r=s.f
r.toString
s.$ti.i("i1<1>").a(r).f.I(0,s.gxa())
s.vw()}}
A.Gw.prototype={}
A.ru.prototype={}
A.aiY.prototype={
$1(a){return this.a.a=a},
$S:29}
A.aiZ.prototype={
$1(a){return a.b},
$S:342}
A.aj_.prototype={
$1(a){var s,r,q,p
for(s=J.aJ(a),r=this.a,q=this.b,p=0;p<s.gp(a);++p)q.j(0,A.aG(A.o(r.a[p].a).i("d3.T")),s.h(a,p))
return q},
$S:343}
A.d3.prototype={
k(a){return"LocalizationsDelegate["+A.aG(A.o(this).i("d3.T")).k(0)+"]"}}
A.SZ.prototype={
mB(a){return!0},
d1(a,b){return new A.bt(B.DJ,t.E8)},
le(a){return!1},
k(a){return"DefaultWidgetsLocalizations.delegate(en_US)"}}
A.EK.prototype={
gbO(){return B.w},
$ijK:1}
A.zn.prototype={
c5(a){return this.w!==a.w}}
A.vx.prototype={
am(){return new A.Pj(new A.bB(null,t.C),A.y(t.n,t.z),B.m)}}
A.Pj.prototype={
ar(){this.aJ()
this.d1(0,this.a.c)},
So(a){var s,r,q,p,o,n,m=this.a.d,l=a.d
if(m.length!==l.length)return!0
s=A.a(m.slice(0),A.al(m))
r=A.a(l.slice(0),A.al(l))
for(q=0;q<s.length;++q){p=s[q]
o=r[q]
n=p instanceof A.bZ?A.cW(p):null
m=A.aG(n==null?A.aY(p):n)
n=o instanceof A.bZ?A.cW(o):null
if(m===A.aG(n==null?A.aY(o):n)){p.le(o)
m=!1}else m=!0
if(m)return!0}return!1},
aZ(a){var s,r=this
r.bs(a)
if(r.a.c.l(0,a.c)){r.a.toString
s=r.So(a)}else s=!0
if(s)r.d1(0,r.a.c)},
d1(a,b){var s,r=this,q={},p=r.a.d,o=p.length
if(o===0){r.f=b
return}q.a=null
s=A.aES(b,p).aE(new A.afa(q),t.e3)
q=q.a
if(q!=null){r.e=q
r.f=b}else{++$.l6.bt$
s.aE(new A.afb(r,b),t.H)}},
gHC(){return t.Uh.a(J.aS(this.e,B.a0b)).gbO()},
L(a){var s,r,q,p=this,o=null
if(p.f==null)return B.e_
s=p.gHC()
p.f.toString
r=p.e
q=p.gHC()
return A.dP(o,new A.zn(p,r,A.al8(p.a.e,q),p.d),!1,o,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,s,o,o)}}
A.afa.prototype={
$1(a){return this.a.a=a},
$S:344}
A.afb.prototype={
$1(a){var s=this.a
if(s.c!=null)s.av(new A.af9(s,a,this.b))
$.l6.Iy()},
$S:345}
A.af9.prototype={
$0(){var s=this.a
s.e=this.b
s.f=this.c},
$S:0}
A.wp.prototype={
G(){return"Orientation."+this.b}}
A.jk.prototype={
t6(a,b,c,d,e){var s=this,r=c==null?s.c:c,q=a==null?s.f:a,p=e==null?s.r:e,o=d==null?s.e:d
return new A.jk(s.a,s.b,r,s.d,o,q,p,s.w,!1,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch)},
yU(a){return this.t6(null,null,a,null,null)},
Ja(a){return this.t6(a,null,null,null,null)},
a26(a,b){return this.t6(null,null,null,a,b)},
a25(a,b){return this.t6(a,null,null,null,b)},
LY(a,b,c,d){var s,r,q,p,o,n,m=this,l=null
if(!(b||d||c||a))return m
s=m.f
r=b?0:l
q=d?0:l
p=c?0:l
r=s.op(a?0:l,r,p,q)
q=m.r
p=b?Math.max(0,q.a-s.a):l
o=d?Math.max(0,q.b-s.b):l
n=c?Math.max(0,q.c-s.c):l
return m.a25(r,q.op(a?Math.max(0,q.d-s.d):l,p,n,o))},
a6M(a){var s=this,r=null,q=s.r,p=s.e,o=Math.max(0,q.d-p.d)
q=q.op(o,r,r,r)
return s.a26(p.op(0,r,r,r),q)},
l(a,b){var s=this
if(b==null)return!1
if(J.Y(b)!==A.C(s))return!1
return b instanceof A.jk&&b.a.l(0,s.a)&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.f.l(0,s.f)&&b.r.l(0,s.r)&&b.e.l(0,s.e)&&b.Q===s.Q&&b.as===s.as&&b.z===s.z&&b.y===s.y&&b.at===s.at&&b.ax===s.ax&&b.ay.l(0,s.ay)&&A.cX(b.ch,s.ch)},
gu(a){var s=this
return A.T(s.a,s.b,s.c,s.d,s.f,s.r,s.e,!1,s.Q,s.as,s.z,s.y,s.at,s.ax,s.ay,A.dj(s.ch),B.a,B.a,B.a,B.a)},
k(a){var s=this
return"MediaQueryData("+B.c.b6(A.a(["size: "+s.a.k(0),"devicePixelRatio: "+B.d.N(s.b,1),"textScaleFactor: "+B.d.N(s.c,1),"platformBrightness: "+s.d.k(0),"padding: "+s.f.k(0),"viewPadding: "+s.r.k(0),"viewInsets: "+s.e.k(0),"alwaysUse24HourFormat: false","accessibleNavigation: "+s.y,"highContrast: "+s.Q,"disableAnimations: "+s.as,"invertColors: "+s.z,"boldText: "+s.at,"navigationMode: "+s.ax.b,"gestureSettings: "+s.ay.k(0),"displayFeatures: "+A.h(s.ch)],t.s),", ")+")"}}
A.fo.prototype={
c5(a){return!this.f.l(0,a.f)}}
A.J0.prototype={
G(){return"NavigationMode."+this.b}}
A.zu.prototype={
am(){return new A.Pr(B.m)}}
A.Pr.prototype={
ar(){this.aJ()
$.am.b5$.push(this)},
tf(){this.av(new A.afw())},
Jq(){this.av(new A.afy())},
Jp(){this.av(new A.afx())},
L(a){var s
$.am.toString
s=A.apS($.cw())
return new A.fo(s,this.a.c,null)},
m(){B.c.v($.am.b5$,this)
this.aQ()}}
A.afw.prototype={
$0(){},
$S:0}
A.afy.prototype={
$0(){},
$S:0}
A.afx.prototype={
$0(){},
$S:0}
A.Tf.prototype={}
A.w_.prototype={
L(a){var s,r=null
switch(A.lL().a){case 0:case 1:case 3:case 5:break
case 2:case 4:break}s=this.c
return A.awV(new A.uv(!0,new A.PA(A.dP(r,A.w1(new A.fW(B.mt,s==null?r:new A.tJ(s,r,r),r),B.lX,r,r,r),!1,r,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),new A.a3F(this,a),r),r))}}
A.a3F.prototype={
$0(){A.LW(B.WJ)},
$S:0}
A.qR.prototype={
fB(a){if(this.y1==null)return!1
return this.ng(a)},
Km(a){},
Kn(a,b){var s=this.y1
if(s!=null)s.$0()},
tQ(a,b,c){}}
A.afC.prototype={
yE(a){a.sjF(this.a)}}
A.MV.prototype={
J4(){var s=t.S,r=A.d0(s)
return new A.qR(B.b1,18,B.bu,A.y(s,t.o),r,null,null,A.y(s,t.Y))},
KC(a){a.y1=this.a}}
A.PA.prototype={
L(a){var s=this.d
return new A.l4(this.c,A.aV([B.a0c,new A.MV(s)],t.n,t.xR),B.aK,!1,new A.afC(s),null)}}
A.J1.prototype={
L(a){var s,r,q=this,p=a.a4(t.I)
p.toString
s=A.a([],t.E)
r=q.c
if(r!=null)s.push(A.a2N(r,B.hd))
r=q.d
if(r!=null)s.push(A.a2N(r,B.he))
r=q.e
if(r!=null)s.push(A.a2N(r,B.hf))
return new A.tX(new A.ahw(q.f,q.r,p.w),s,null)}}
A.rM.prototype={
G(){return"_ToolbarSlot."+this.b}}
A.ahw.prototype={
uw(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.b.h(0,B.hd)!=null){s=a.a
r=a.b
q=e.dU(B.hd,new A.aT(0,s,r,r)).a
switch(e.f.a){case 0:p=s-q
break
case 1:p=0
break
default:p=null}e.eb(B.hd,new A.t(p,0))}else q=0
if(e.b.h(0,B.hf)!=null){o=e.dU(B.hf,A.akU(a))
switch(e.f.a){case 0:n=0
break
case 1:n=a.a-o.a
break
default:n=null}m=o.a
e.eb(B.hf,new A.t(n,(a.b-o.b)/2))}else m=0
if(e.b.h(0,B.he)!=null){s=a.a
r=e.e
l=Math.max(s-q-m-r*2,0)
k=e.dU(B.he,A.akU(a).a1Z(l))
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
default:f=null}e.eb(B.he,new A.t(f,(a.b-k.b)/2))}},
n7(a){return a.d!==this.d||a.e!==this.e||a.f!==this.f}}
A.nm.prototype={
G(){return"RoutePopDisposition."+this.b}}
A.cb.prototype={
guq(){return B.rY},
jx(){},
oA(){var s=A.ami()
s.aE(new A.a6H(this),t.H)
return s},
oy(){var s=this.a
if(s==null)s=null
else{s.a.toString
s=!0}if(s===!0)A.ami().aE(new A.a6G(this),t.H)},
zg(a){},
fH(){var s=0,r=A.a2(t.oj),q,p=this
var $async$fH=A.Z(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:q=p.gKT()?B.UJ:B.Bv
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$fH,r)},
gME(){return!1},
ky(a){this.a2J(a)
return!0},
a2J(a){this.d.bK(0,null)},
m7(a){},
oz(a){},
zb(a){},
og(){},
t_(){},
m(){this.a=null},
gkO(){var s,r=this.a
if(r==null)return!1
r=r.e
r=new A.by(r,A.al(r).i("by<1,ds?>"))
s=r.mF(r,new A.a6K(),new A.a6L())
if(s==null)return!1
return s.a===this},
gKT(){var s,r=this.a
if(r==null)return!1
r=r.e
r=new A.by(r,A.al(r).i("by<1,ds?>"))
s=r.tJ(r,new A.a6M(),new A.a6N())
if(s==null)return!1
return s.a===this},
gtV(){var s,r,q,p,o=this.a
if(o==null)return!1
for(o=o.e,s=o.length,r=0;r<s;++r){q=o[r]
if(q.a===this)return!1
p=q.d.a
if(p<=10&&p>=1)return!0}return!1},
ga4Y(){var s=this.a
if(s==null)return!1
s=s.e
s=new A.by(s,A.al(s).i("by<1,ds?>"))
s=s.tJ(s,new A.a6I(this),new A.a6J())
s=s==null?null:s.gkP()
return s===!0}}
A.a6H.prototype={
$1(a){var s,r=this.a.a
if(r==null)s=null
else{r.a.toString
s=!0}if(s===!0){r=r.x.gdQ()
if(r!=null)r.uK()}},
$S:19}
A.a6G.prototype={
$1(a){var s=this.a.a
if(s!=null){s=s.x.gdQ()
if(s!=null)s.uK()}},
$S:19}
A.a6K.prototype={
$1(a){return a!=null&&a.gkP()},
$S:31}
A.a6L.prototype={
$0(){return null},
$S:3}
A.a6M.prototype={
$1(a){return a!=null&&a.gkP()},
$S:31}
A.a6N.prototype={
$0(){return null},
$S:3}
A.a6I.prototype={
$1(a){return a!=null&&A.arx(this.a).$1(a)},
$S:31}
A.a6J.prototype={
$0(){return null},
$S:3}
A.hm.prototype={
k(a){var s=this.a
s=s==null?"none":'"'+s+'"'
return"RouteSettings("+s+", "+A.h(this.b)+")"}}
A.jm.prototype={
th(a,b){},
tg(a,b){},
zf(a,b){},
ti(a,b){},
Js(a,b){},
oC(){}}
A.mB.prototype={
c5(a){return a.f!=this.f}}
A.a6F.prototype={}
A.Mj.prototype={}
A.EJ.prototype={}
A.wd.prototype={
am(){var s=null,r=A.a([],t.uD),q=$.bF(),p=t.Tp
return new A.fs(r,new A.ON(q),A.ji(s,p),A.ji(s,p),A.alk(!0,"Navigator",!0,!0,s,s,!1),new A.x5(0,q,t.dZ),A.jJ(!1),A.b7(t.S),s,A.y(t.yb,t.M),s,!0,s,s,s,B.m)},
a5R(a,b){return this.z.$2(a,b)}}
A.a4b.prototype={
$1(a){return a==null},
$S:347}
A.e8.prototype={
G(){return"_RouteLifecycle."+this.b}}
A.PL.prototype={}
A.ds.prototype={
gcP(){var s,r
if(this.c){s=t.sd.a(this.a.b)
s.gcP()
r=A.h(s.gcP())
return"p+"+r}r=this.b
if(r!=null)return"r+"+r.gM9()
return null},
a3Z(a,b,c,d){var s,r,q,p=this,o=p.d,n=p.a
n.a=b
n.jx()
s=p.d
if(s===B.CN||s===B.CO){r=n.oA()
p.d=B.CP
r.MD(new A.agJ(p,b))}else{n.zg(c)
p.d=B.cX}if(a)n.oz(null)
s=o===B.a1B||o===B.CO
q=b.r
if(s)q.dq(0,new A.zI(n,d))
else q.dq(0,new A.rr(n,d))},
a3Y(a,b){var s,r=this
r.d=B.a1x
s=r.a
if((s.d.a.a&30)!==0)return!0
if(!s.ky(r.w)){r.d=B.cX
return!1}r.w=null
return!0},
m(){var s,r,q,p,o,n,m={}
this.d=B.a1z
s=this.a
r=s.guq()
q=new A.agH()
p=new A.aO(r,q,A.al(r).i("aO<1>"))
if(!p.ga5(p).t())s.m()
else{m.a=p.gp(p)
for(s=B.c.ga5(r),q=new A.qP(s,q);q.t();){r=s.gH(s)
o=A.b8("listener")
n=new A.agI(m,this,r,o)
o.b=n
r.d.X(0,n)}}},
ga7K(){var s=this.d.a
return s<=7&&s>=1},
gkP(){var s=this.d.a
return s<=10&&s>=1}}
A.agJ.prototype={
$0(){var s=this.a
if(s.d===B.CP){s.d=B.cX
this.b.wE()}},
$S:0}
A.agH.prototype={
$1(a){return a.d.a},
$S:348}
A.agI.prototype={
$0(){var s=this,r=s.a;--r.a
s.c.d.I(0,s.d.aF())
if(r.a===0)s.b.a.m()},
$S:0}
A.agK.prototype={
$1(a){return a.a===this.a},
$S:43}
A.ly.prototype={}
A.rr.prototype={
kU(a){a.th(this.a,this.b)}}
A.rq.prototype={
kU(a){a.tg(this.a,this.b)}}
A.zH.prototype={
kU(a){a.zf(this.a,this.b)}}
A.zI.prototype={
kU(a){a.ti(this.a,this.b)}}
A.fs.prototype={
ar(){var s,r,q,p,o=this
o.aJ()
for(s=o.a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q){p=s[q]
$.hG().a.set(p,o)}o.Q=o.a.x
s=o.c.jR(t.mS)
if(s==null)s=null
else{s=s.f
s.toString}t._I.a(s)
o.ya(s==null?null:s.f)
o.a.toString
B.fC.u0("selectSingleEntryHistory",t.H)},
iN(a,b){var s,r,q,p,o,n,m=this
m.mO(m.as,"id")
s=m.f
m.mO(s,"history")
for(;r=m.e,r.length!==0;)r.pop().m()
m.d=new A.bB(null,t.ku)
B.c.K(r,s.Ma(null,m))
m.a.toString
q=0
for(;!1;++q){p=B.NF[q]
r=m.c
r.toString
r=p.yZ(r)
o=$.akC()
n=new A.ds(r,null,!0,B.md,o,o,o)
m.e.push(n)
B.c.K(m.e,s.Ma(n,m))}if(s.y==null){s=m.a
r=m.e
o=s.f
B.c.K(r,J.t0(s.a5R(m,o),new A.a4a(m),t.Ez))}m.wE()},
zi(a){var s,r=this
r.PN(a)
s=r.f
if(r.bp$!=null)s.bj(0,r.e)
else s.a_(0)},
gcP(){return this.a.y},
b8(){var s,r,q,p,o=this
o.Qx()
s=o.c.a4(t.mS)
o.ya(s==null?null:s.f)
for(r=o.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.Q)(r),++p)r[p].a.t_()},
ya(a){var s,r,q=this
if(q.z!=a){if(a!=null)$.hG().a.set(a,q)
s=q.z
if(s==null)s=null
else{r=$.hG()
A.p3(s)
s=r.a.get(s)}if(s===q){s=$.hG()
r=q.z
r.toString
s.a.set(r,null)}q.z=a
q.HZ()}},
HZ(){var s=this,r=s.z,q=s.a
if(r!=null)s.Q=B.c.V(q.x,A.a([r],t.tc))
else s.Q=q.x},
aZ(a){var s,r,q,p,o=this
o.Qy(a)
s=a.x
if(s!==o.a.x){for(r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q){p=s[q]
$.hG().a.set(p,null)}for(s=o.a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q){p=s[q]
$.hG().a.set(p,o)}o.HZ()}o.a.toString
for(s=o.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].a.t_()},
d7(){var s,r,q,p=this.Q
p===$&&A.b()
s=p.length
r=0
for(;r<p.length;p.length===s||(0,A.Q)(p),++r){q=p[r]
$.hG().a.set(q,null)}this.lp()},
cc(){var s,r,q,p
this.Qv()
s=this.Q
s===$&&A.b()
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.Q)(s),++q){p=s[q]
$.hG().a.set(p,this)}},
m(){var s,r,q,p=this
p.ya(null)
p.x.m()
for(s=p.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].m()
p.Qz()},
gDY(){var s,r,q,p=A.a([],t.fy)
for(s=this.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)B.c.K(p,s[q].a.guq())
return p},
wF(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null
a.ay=!0
s=a.e
r=s.length-1
q=s[r]
p=r>0?s[r-1]:a0
o=A.a([],t.uD)
for(s=a.w,n=a.r,m=a0,l=m,k=!1,j=!1;r>=0;){switch(q.d.a){case 1:i=a.j_(r-1,A.anp())
h=i>=0?a.e[i]:a0
h=h==null?a0:h.a
g=q.a
g.a=a
g.jx()
q.d=B.a1A
n.dq(0,new A.rr(g,h))
continue
case 2:if(k||l==null){h=q.a
h.oy()
q.d=B.cX
if(l==null)h.oz(a0)
continue}break
case 3:case 4:case 6:h=p==null?a0:p.a
i=a.j_(r-1,A.anp())
g=i>=0?a.e[i]:a0
g=g==null?a0:g.a
q.a3Z(l==null,a,h,g)
if(q.d===B.cX)continue
break
case 5:if(!j&&m!=null){q.a.m7(m)
q.f=m}j=!0
break
case 7:if(!j&&m!=null){q.a.m7(m)
q.f=m}k=!0
j=!0
break
case 8:i=a.j_(r,A.BC())
h=i>=0?a.e[i]:a0
if(!q.a3Y(a,h==null?a0:h.a))continue
if(!j){if(m!=null){q.a.m7(m)
q.f=m}m=q.a}h=q.a
i=a.j_(r,A.BC())
g=i>=0?a.e[i]:a0
s.dq(0,new A.rq(h,g==null?a0:g.a))
if(q.d===B.me)continue
k=!0
break
case 11:break
case 9:h=q.a
h=h.d.a
if((h.a&30)!==0)A.L(A.a6("Future already completed"))
h.ff(a0)
q.w=null
q.d=B.a1w
continue
case 10:if(!j){if(m!=null)q.a.m7(m)
m=a0}i=a.j_(r,A.BC())
h=i>=0?a.e[i]:a0
h=h==null?a0:h.a
q.d=B.a1y
if(q.x)s.dq(0,new A.zH(q.a,h))
continue
case 12:if(!k&&l!=null)break
q.d=B.me
continue
case 13:o.push(B.c.ec(a.e,r))
q=l
break
case 14:case 0:break}--r
f=r>0?a.e[r-1]:a0
l=q
q=p
p=f}a.Ur()
a.Ut()
a.a.toString
s=a.e
s=new A.by(s,A.al(s).i("by<1,ds?>"))
e=s.mF(s,new A.a44(),new A.a45())
d=e==null?a0:e.a.b.a
if(d!=null&&d!==a.at){A.aqU(d,!1,a0)
a.at=d}for(s=o.length,c=0;c<o.length;o.length===s||(0,A.Q)(o),++c){q=o[c]
for(n=q.a.guq(),h=n.length,b=0;b<n.length;n.length===h||(0,A.Q)(n),++b)J.aww(n[b])
q.m()}if(a1){s=a.d
s===$&&A.b()
s=s.gbo()
if(s!=null)s.a6y(a.gDY())}if(a.bp$!=null)a.f.bj(0,a.e)
a.ay=!1},
wE(){return this.wF(!0)},
Ur(){var s,r=this,q=r.Q
q===$&&A.b()
if(q.length===0){r.w.a_(0)
r.r.a_(0)
return}for(q=r.r;!q.gO(q);){s=q.dX(0)
B.c.Z(r.Q,s.gpu())}for(q=r.w;!q.gO(q);){s=q.mQ()
B.c.Z(r.Q,s.gpu())}},
Ut(){var s,r,q,p,o,n,m=this,l=null,k=m.e.length-1
for(;k>=0;){s=m.e[k]
r=s.d.a
if(!(r<=12&&r>=3)){--k
continue}q=m.UW(k+1,A.atC())
r=q==null
p=r?l:q.a
o=s.r
if(p!=o){if((r?l:q.a)==null){p=s.f
p=p!=null&&p===o}else p=!1
if(!p){p=s.a
p.oz(r?l:q.a)}s.r=r?l:q.a}--k
n=m.j_(k,A.atC())
r=n>=0?m.e[n]:l
p=r==null
o=p?l:r.a
if(o!=s.e){o=s.a
o.zb(p?l:r.a)
s.e=p?l:r.a}}},
Fl(a,b){a=this.j_(a,b)
return a>=0?this.e[a]:null},
j_(a,b){while(!0){if(!(a>=0&&!b.$1(this.e[a])))break;--a}return a},
UW(a,b){var s
while(!0){s=this.e
if(!(a<s.length&&!b.$1(s[a])))break;++a}s=this.e
return a<s.length?s[a]:null},
rh(a,b,c,d){var s,r,q
if(b)this.a.toString
s=new A.hm(a,c)
r=d.i("cb<0?>?")
q=r.a(this.a.r.$1(s))
return q==null&&!b?r.a(this.a.w.$1(s)):q},
xQ(a,b,c){return this.rh(a,!1,b,c)},
DW(a){this.SR()},
pp(a){var s=0,r=A.a2(t.y),q,p=this,o,n,m
var $async$pp=A.Z(function(b,c){if(b===1)return A.a_(c,r)
while(true)$async$outer:switch(s){case 0:m=p.e
m=new A.by(m,A.al(m).i("by<1,ds?>"))
o=m.mF(m,new A.a46(),new A.a47())
if(o==null){q=!1
s=1
break}s=3
return A.a4(o.a.fH(),$async$pp)
case 3:n=c
if(p.c==null){q=!0
s=1
break}m=p.e
m=new A.by(m,A.al(m).i("by<1,ds?>"))
if(o!==m.mF(m,new A.a48(),new A.a49())){q=!0
s=1
break}switch(n.a){case 2:q=!1
s=1
break $async$outer
case 0:p.a6d(a)
q=!0
s=1
break $async$outer
case 1:q=!0
s=1
break $async$outer}case 1:return A.a0(q,r)}})
return A.a1($async$pp,r)},
Lb(){return this.pp(null,t.X)},
a5A(a){return this.pp(a,t.X)},
LA(a){var s=this,r=B.c.a5d(s.e,A.anp())
if(r.c){s.a.toString
if(null.$2(r.a,a)&&r.d===B.cX)r.d=B.mf}else{r.w=a
r.d=B.mf}if(r.d===B.mf)s.wF(!1)
s.DW(r.a)},
a6d(a){return this.LA(a,t.X)},
hX(){return this.LA(null,t.X)},
K0(a){var s,r=this,q=B.c.Ky(r.e,A.arx(a)),p=r.e[q]
if(p.c&&p.d.a<8){s=r.Fl(q-1,A.BC())
s=s==null?null:s.a
r.w.dq(0,new A.rq(a,s))}p.d=B.me
if(!r.ay)r.wF(!1)},
sIe(a){this.ch=a
this.CW.sn(0,a>0)},
a2N(){var s,r,q,p,o,n,m=this
m.sIe(m.ch+1)
if(m.ch===1){s=m.j_(m.e.length-1,A.BC())
r=m.e[s].a
q=!r.gME()&&s>0?m.Fl(s-1,A.BC()).a:null
p=m.Q
p===$&&A.b()
o=p.length
n=0
for(;n<p.length;p.length===o||(0,A.Q)(p),++n)p[n].Js(r,q)}},
oC(){var s,r,q,p=this
p.sIe(p.ch-1)
if(p.ch===0){s=p.Q
s===$&&A.b()
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].oC()}},
W6(a){this.cx.E(0,a.gbY())},
We(a){this.cx.v(0,a.gbY())},
SR(){if($.bJ.dy$===B.cN){var s=this.d
s===$&&A.b()
s=$.am.ai$.z.h(0,s)
this.av(new A.a43(s==null?null:s.tG(t.MY)))}s=this.cx
B.c.Z(A.aA(s,!0,A.o(s).c),$.am.ga15())},
L(a){var s,r=this,q=null,p=r.gWd(),o=A.api(a),n=r.bp$,m=r.d
m===$&&A.b()
r.a.toString
if(m.gbo()==null){s=r.gDY()
s=J.mP(s.slice(0),A.al(s).c)}else s=B.rY
return new A.mB(q,A.GS(B.bW,new A.BO(!1,A.aph(A.FV(!0,q,A.abV(n,new A.pE(s,B.S,m)),q,q,q,r.x,!1,q,q,q,q,q,!0),o),q),p,r.gW5(),q,q,p),q)}}
A.a4a.prototype={
$1(a){var s,r,q=a.b.a
if(q!=null){s=this.a.as
r=s.y
if(r==null)r=s.$ti.i("c3.T").a(r)
s.PM(0,r+1)
q=new A.PF(r,q,null,B.mg)}else q=null
return A.arw(a,B.md,!1,q)},
$S:351}
A.a44.prototype={
$1(a){return a!=null&&a.gkP()},
$S:31}
A.a45.prototype={
$0(){return null},
$S:3}
A.a46.prototype={
$1(a){return a!=null&&a.gkP()},
$S:31}
A.a47.prototype={
$0(){return null},
$S:3}
A.a48.prototype={
$1(a){return a!=null&&a.gkP()},
$S:31}
A.a49.prototype={
$0(){return null},
$S:3}
A.a43.prototype={
$0(){var s=this.a
if(s!=null)s.sIo(!0)},
$S:0}
A.rC.prototype={
G(){return"_RouteRestorationType."+this.b}}
A.R9.prototype={
gKW(){return!0},
t3(){return A.a([this.a.a],t.f)}}
A.PF.prototype={
t3(){var s=this,r=s.QP(),q=A.a([s.c,s.d],t.f),p=s.e
if(p!=null)q.push(p)
B.c.K(r,q)
return r},
yZ(a){var s=a.xQ(this.d,this.e,t.z)
s.toString
return s},
gM9(){return this.c}}
A.amr.prototype={
gKW(){return!1},
t3(){A.aAo(this.d)},
yZ(a){var s=a.c
s.toString
return this.d.$2(s,this.e)},
gM9(){return this.c}}
A.ON.prototype={
bj(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.y==null
if(a)c.y=A.y(t.N,t.UX)
s=t.f
r=A.a([],s)
q=c.y
q.toString
p=J.aS(q,null)
if(p==null)p=B.dm
o=A.y(t.ob,t.UX)
q=c.y
q.toString
n=J.awC(J.BM(q))
for(q=a1.length,m=b,l=a,k=!0,j=0;j<a1.length;a1.length===q||(0,A.Q)(a1),++j){i=a1[j]
if(i.d.a>7){h=i.a
h.c.sn(0,b)
continue}if(i.c){l=l||r.length!==J.bP(p)
h=r.length
if(h!==0){g=m==null?b:m.gcP()
o.j(0,g,r)
n.v(0,g)}k=i.gcP()!=null
h=i.a
f=k?i.gcP():b
h.c.sn(0,f)
if(k){r=A.a([],s)
h=c.y
h.toString
p=J.aS(h,i.gcP())
if(p==null)p=B.dm}else{r=B.dm
p=B.dm}m=i
continue}if(k){h=i.b
h=h==null?b:h.gKW()
k=h===!0}else k=!1
h=i.a
f=k?i.gcP():b
h.c.sn(0,f)
if(k){h=i.b
f=h.b
h=f==null?h.b=h.t3():f
if(!l){f=J.aJ(p)
e=f.gp(p)
d=r.length
l=e<=d||!J.f(f.h(p,d),h)}else l=!0
B.c.E(r,h)}}l=l||r.length!==J.bP(p)
c.Ud(r,m,o,n)
if(l||n.gbH(n)){c.y=o
c.aC()}},
Ud(a,b,c,d){var s,r=a.length
if(r!==0){s=b==null?null:b.gcP()
c.j(0,s,a)
d.v(0,s)}},
a_(a){if(this.y==null)return
this.y=null
this.aC()},
Ma(a,b){var s,r,q,p,o,n=A.a([],t.uD)
if(this.y!=null)s=a!=null&&a.gcP()==null
else s=!0
if(s)return n
s=this.y
s.toString
r=J.aS(s,a==null?null:a.gcP())
if(r==null)return n
for(s=J.ax(r);s.t();){q=A.aD5(s.gH(s))
p=q.yZ(b)
o=$.akC()
n.push(new A.ds(p,q,!1,B.md,o,o,o))}return n},
t8(){return null},
mu(a){a.toString
return J.aoi(t.G.a(a),new A.aex(),t.ob,t.UX)},
KB(a){this.y=a},
mW(){return this.y},
gma(a){return this.y!=null}}
A.aex.prototype={
$2(a,b){return new A.ao(A.cu(a),A.eW(t.j.a(b),!0,t.K),t.qE)},
$S:352}
A.afT.prototype={
$2(a,b){if(!a.a)a.I(0,b)},
$S:36}
A.zJ.prototype={
cc(){this.dJ()
this.cT()
this.fm()},
m(){var s=this,r=s.be$
if(r!=null)r.I(0,s.geO())
s.be$=null
s.aQ()}}
A.zK.prototype={
aZ(a){this.bs(a)
this.oE()},
b8(){var s,r,q,p,o=this
o.cF()
s=o.bp$
r=o.gmS()
q=o.c
q.toString
q=A.q_(q)
o.fu$=q
p=o.lV(q,r)
if(r){o.iN(s,o.e3$)
o.e3$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.ft$.Z(0,new A.afT())
s=r.bp$
if(s!=null)s.m()
r.bp$=null
r.Qw()}}
A.J5.prototype={
k(a){var s=A.a([],t.s)
this.cl(s)
return"Notification("+B.c.b6(s,", ")+")"},
cl(a){}}
A.di.prototype={
bW(a){return new A.zL(this,B.a9,this.$ti.i("zL<1>"))}}
A.zL.prototype={
Lp(a){var s,r=this.f
r.toString
s=this.$ti
s.i("di<1>").a(r)
if(s.c.b(a))return r.d.$1(a)
return!1},
mH(a){}}
A.eV.prototype={}
A.Tk.prototype={}
A.eZ.prototype={
smM(a){var s
if(this.b===a)return
this.b=a
s=this.e
if(s!=null)s.EN()},
spn(a){if(this.c)return
this.c=!0
this.e.EN()},
I(a,b){this.d.I(0,b)},
mP(a){var s,r=this.e
r.toString
this.e=null
if(r.c==null)return
B.c.v(r.d,this)
s=$.bJ
if(s.dy$===B.dP)s.cy$.push(new A.a4y(r))
else r.G1()},
ev(){var s=this.f.gbo()
if(s!=null)s.G3()},
k(a){return"<optimized out>#"+A.bS(this)+"(opaque: "+this.b+"; maintainState: "+this.c+")"},
$iag:1,
IO(a){return this.a.$1(a)}}
A.a4y.prototype={
$1(a){this.a.G1()},
$S:2}
A.rt.prototype={
am(){return new A.zN(B.m)}}
A.zN.prototype={
ar(){this.aJ()
this.a.c.d.sn(0,!0)},
m(){this.a.c.d.sn(0,!1)
this.a.toString
this.aQ()},
L(a){var s=this.a
return new A.qH(s.d,s.c.IO(a),null)},
G3(){this.av(new A.afY())}}
A.afY.prototype={
$0(){},
$S:0}
A.pE.prototype={
am(){return new A.pG(A.a([],t.fy),null,null,B.m)}}
A.pG.prototype={
ar(){this.aJ()
this.a4G(0,this.a.c)},
xg(a,b){return this.d.length},
A3(a,b){b.e=this
this.av(new A.a4C(this,null,null,b))},
a4G(a,b){var s,r=b.length
if(r===0)return
for(s=0;s<r;++s)b[s].e=this
this.av(new A.a4B(this,null,null,b))},
a6y(a){var s,r,q,p,o,n=this
if(t.LF.b(a))s=a
else s=J.mP(a.slice(0),A.al(a).c)
if(s.length===0)return
r=n.d
if(A.cX(r,s))return
q=A.kM(r,t.Ms)
for(r=s.length,p=0;p<r;++p){o=s[p]
if(o.e==null)o.e=n}n.av(new A.a4D(n,s,q,null,null))},
G1(){if(this.c!=null)this.av(new A.a4A())},
EN(){this.av(new A.a4z())},
L(a){var s,r,q,p,o,n=A.a([],t.E)
for(s=this.d,r=s.length-1,q=!0,p=0;r>=0;--r){o=s[r]
if(q){++p
n.push(new A.rt(o,!0,o.f))
q=!o.b||!1}else if(o.c)n.push(new A.rt(o,!1,o.f))}s=t.H8
return new A.Sh(n.length-p,this.a.d,A.aA(new A.cE(n,s),!1,s.i("bh.E")),null)}}
A.a4C.prototype={
$0(){var s=this,r=s.a
B.c.mx(r.d,r.xg(s.b,s.c),s.d)},
$S:0}
A.a4B.prototype={
$0(){var s=this,r=s.a
B.c.pd(r.d,r.xg(s.b,s.c),s.d)},
$S:0}
A.a4D.prototype={
$0(){var s,r,q=this,p=q.a,o=p.d
B.c.a_(o)
s=q.b
B.c.K(o,s)
r=q.c
r.a6G(s)
B.c.pd(o,p.xg(q.d,q.e),r)},
$S:0}
A.a4A.prototype={
$0(){},
$S:0}
A.a4z.prototype={
$0(){},
$S:0}
A.Sh.prototype={
bW(a){var s=A.d0(t.h)
return new A.Si(s,this,B.a9)},
aH(a){var s=a.a4(t.I)
s.toString
s=new A.rB(s.w,this.e,this.f,A.az(),0,null,null,A.az())
s.aK()
s.K(0,null)
return s},
aL(a,b){var s=this.e
if(b.aA!==s){b.aA=s
b.a9()}s=a.a4(t.I)
s.toString
b.sbO(s.w)
s=this.f
if(s!==b.b2){b.b2=s
b.au()
b.b3()}}}
A.Si.prototype={
gaa(){return t._2.a(A.eX.prototype.gaa.call(this))}}
A.rB.prototype={
eC(a){if(!(a.e instanceof A.e5))a.e=new A.e5(null,null,B.k)},
Yh(){if(this.ag!=null)return
this.ag=B.ay.Y(this.ac)},
sbO(a){var s=this
if(s.ac===a)return
s.ac=a
s.ag=null
s.a9()},
gqE(){var s,r,q,p,o=this
if(o.aA===A.aB.prototype.gt0.call(o))return null
s=A.aB.prototype.ga3l.call(o,o)
for(r=o.aA,q=t.B;r>0;--r){p=s.e
p.toString
s=q.a(p).ab$}return s},
eS(a){var s,r,q,p,o=this.gqE()
for(s=t.B,r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.jQ(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.ab$}return r},
gjY(){return!0},
cg(a){return new A.a9(A.K(1/0,a.a,a.b),A.K(1/0,a.c,a.d))},
bN(){var s,r,q,p,o,n,m,l,k=this
k.M=!1
if(k.dA$-k.aA===0)return
k.Yh()
s=t.k.a(A.B.prototype.ga1.call(k))
r=A.Cj(new A.a9(A.K(1/0,s.a,s.b),A.K(1/0,s.c,s.d)))
q=k.gqE()
for(s=t.B,p=t.EP;q!=null;){o=q.e
o.toString
s.a(o)
if(!o.gAa()){q.cw(r,!0)
n=k.ag
n.toString
m=k.k3
m.toString
l=q.k3
l.toString
o.a=n.lZ(p.a(m.ad(0,l)))}else{n=k.k3
n.toString
m=k.ag
m.toString
k.M=A.aqq(q,o,n,m)||k.M}q=o.ab$}},
d_(a,b){var s,r,q,p=this,o={},n=o.a=p.aA===A.aB.prototype.gt0.call(p)?null:p.bG$
for(s=t.B,r=0;r<p.dA$-p.aA;++r,n=q){n=n.e
n.toString
s.a(n)
if(a.o4(new A.agv(o,b,n),n.a,b))return!0
q=n.aU$
o.a=q}return!1},
uu(a,b){var s,r,q,p,o,n=this.gqE()
for(s=t.B,r=b.a,q=b.b;n!=null;){p=n.e
p.toString
s.a(p)
o=p.a
a.f8(n,new A.t(o.a+r,o.b+q))
n=p.ab$}},
aI(a,b){var s,r=this,q=r.M&&r.b2!==B.h,p=r.ba
if(q){q=r.cx
q===$&&A.b()
s=r.k3
p.saV(0,a.kZ(q,b,new A.E(0,0,0+s.a,0+s.b),r.gB1(),r.b2,p.a))}else{p.saV(0,null)
r.uu(a,b)}},
m(){this.ba.saV(0,null)
this.ie()},
fG(a){var s,r,q=this.gqE()
for(s=t.B;q!=null;){a.$1(q)
r=q.e
r.toString
q=s.a(r).ab$}},
jd(a){var s
switch(this.b2.a){case 0:return null
case 1:case 2:case 3:if(this.M){s=this.k3
s=new A.E(0,0,0+s.a,0+s.b)}else s=null
return s}}}
A.agv.prototype={
$2(a,b){return this.a.a.c_(a,b)},
$S:18}
A.PW.prototype={
cc(){this.dJ()
this.cT()
this.fm()},
m(){var s=this,r=s.be$
if(r!=null)r.I(0,s.geO())
s.be$=null
s.aQ()}}
A.Tq.prototype={
aw(a){var s,r,q
this.eG(a)
s=this.a8$
for(r=t.B;s!=null;){s.aw(a)
q=s.e
q.toString
s=r.a(q).ab$}},
ao(a){var s,r,q
this.e_(0)
s=this.a8$
for(r=t.B;s!=null;){s.ao(0)
q=s.e
q.toString
s=r.a(q).ab$}}}
A.pa.prototype={
am(){var s=t.y
return new A.z6(A.aV([!1,!0,!0,!0],s,s),null,null,B.m)},
jE(a){return A.BE().$1(a)}}
A.z6.prototype={
ar(){var s,r,q=this
q.aJ()
s=q.a
r=s.f
q.d=A.arn(A.bi(s.e),r,q)
r=q.a
s=r.f
s=A.arn(A.bi(r.e),s,q)
q.e=s
r=q.d
r.toString
q.f=new A.zv(A.a([r,s],t.Eo))},
aZ(a){var s,r=this
r.bs(a)
if(!a.f.l(0,r.a.f)||A.bi(a.e)!==A.bi(r.a.e)){s=r.d
s.toString
s.san(0,r.a.f)
s=r.d
s.toString
s.sIG(A.bi(r.a.e))
s=r.e
s.toString
s.san(0,r.a.f)
s=r.e
s.toString
s.sIG(A.bi(r.a.e))}},
xy(a){var s,r,q,p,o,n,m,l,k,j=this
if(!j.a.jE(a))return!1
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
if(a instanceof A.ia){q=a.e
if(q<0)n=s
else if(q>0)n=p
else n=null
m=n===s
s=j.c
s.d8(new A.wr(m,0))
s=j.w
s.j(0,m,!0)
s.h(0,m).toString
n.d=0
j.w.h(0,m).toString
s=a.f
if(s!==0){r=n.c
if(r!=null)r.al(0)
n.c=null
l=A.K(Math.abs(s),100,1e4)
s=n.f
if(n.a===B.h3)r=0.3
else{r=n.r
r===$&&A.b()
q=r.a
q=r.b.ak(0,q.gn(q))
r=q}s.a=r
r.toString
s.b=A.K(l*0.00006,r,0.5)
r=n.w
s=n.x
s===$&&A.b()
q=s.a
r.a=s.b.ak(0,q.gn(q))
r.b=Math.min(0.025+75e-8*l*l,1)
r=n.b
r===$&&A.b()
r.e=A.bV(0,B.d.b0(0.15+l*0.02),0)
r.iz(0,0)
n.as=0.5
n.a=B.a14}else{s=a.d
if(s!=null){p=a.b.gaa()
p.toString
t.x.a(p)
o=p.k3
o.toString
k=p.la(s.d)
switch(A.bi(r.e).a){case 0:n.toString
s=o.b
n.LH(0,Math.abs(q),o.a,A.K(k.b,0,s),s)
break
case 1:n.toString
s=o.a
n.LH(0,Math.abs(q),o.b,A.K(k.a,0,s),s)
break}}}}else if(a instanceof A.jw||a instanceof A.iq)if(a.gJB()!=null){s=j.d
if(s.a===B.h4)s.kf(B.d9)
s=j.e
if(s.a===B.h4)s.kf(B.d9)}j.r=A.C(a)
return!1},
m(){this.d.m()
this.e.m()
this.Rs()},
L(a){var s=this,r=null,q=s.a,p=s.d,o=s.e,n=q.e,m=s.f
return new A.di(s.gxx(),new A.im(A.Et(new A.im(q.w,r),new A.OM(p,o,n,m),r,r,B.W),r),r,t.WA)}}
A.o3.prototype={
G(){return"_GlowState."+this.b}}
A.z5.prototype={
san(a,b){if(this.ax.l(0,b))return
this.ax=b
this.aC()},
sIG(a){if(this.ay===a)return
this.ay=a
this.aC()},
m(){var s=this,r=s.b
r===$&&A.b()
r.m()
r=s.y
r===$&&A.b()
r.w.c8$.v(0,r)
r.Dt()
r=s.c
if(r!=null)r.al(0)
s.dI()},
LH(a,b,c,d,e){var s,r,q,p=this,o=p.c
if(o!=null)o.al(0)
p.at=p.at+b/200
o=p.f
s=p.r
s===$&&A.b()
r=s.b
s=s.a
o.a=r.ak(0,s.gn(s))
o.b=Math.min(r.ak(0,s.gn(s))+b/c*0.8,0.5)
q=Math.min(c,e*0.20096189432249995)
s=p.w
r=p.x
r===$&&A.b()
o=r.b
r=r.a
s.a=o.ak(0,r.gn(r))
s.b=Math.max(1-1/(0.7*Math.sqrt(p.at*q)),A.iR(o.ak(0,r.gn(r))))
r=d/e
p.Q=r
if(r!==p.as){o=p.y
o===$&&A.b()
if(!o.ga56())o.jZ(0)}else{o=p.y
o===$&&A.b()
o.hh(0)
p.z=null}o=p.b
o===$&&A.b()
o.e=B.nH
if(p.a!==B.h4){o.iz(0,0)
p.a=B.h4}else{o=o.r
if(!(o!=null&&o.a!=null))p.aC()}p.c=A.c6(B.nH,new A.aef(p))},
w1(a){var s=this
if(a!==B.X)return
switch(s.a.a){case 1:s.kf(B.d9)
break
case 3:s.a=B.h3
s.at=0
break
case 2:case 0:break}},
kf(a){var s,r,q=this,p=q.a
if(p===B.CJ||p===B.h3)return
p=q.c
if(p!=null)p.al(0)
q.c=null
p=q.f
s=q.r
s===$&&A.b()
r=s.a
p.a=s.b.ak(0,r.gn(r))
p.b=0
p=q.w
r=q.x
r===$&&A.b()
s=r.a
p.a=r.b.ak(0,s.gn(s))
p.b=0
p=q.b
p===$&&A.b()
p.e=a
p.iz(0,0)
q.a=B.CJ},
a_r(a){var s,r=this,q=r.z
if(q!=null){q=q.a
s=r.Q
r.as=s-(s-r.as)*Math.pow(2,-(a.a-q)/$.av0().a)
r.aC()}if(A.BD(r.Q,r.as,0.001)){q=r.y
q===$&&A.b()
q.hh(0)
r.z=null}else r.z=a},
aI(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.r
i===$&&A.b()
s=i.a
if(J.f(i.b.ak(0,s.gn(s)),0))return
s=b.a
r=b.b
q=s>r?r/s:1
p=s*3/2
o=Math.min(r,s*0.20096189432249995)
r=j.x
r===$&&A.b()
n=r.a
n=r.b.ak(0,n.gn(n))
r=j.as
m=$.at().bn()
l=j.ax
k=i.a
m.san(0,A.b2(B.d.b0(255*i.b.ak(0,k.gn(k))),l.gn(l)>>>16&255,l.gn(l)>>>8&255,l.gn(l)&255))
a.cC(0)
a.aD(0,0,j.d+j.e)
a.dH(0,1,n*q)
a.kt(new A.E(0,0,0+s,0+o))
a.is(new A.t(s/2*(0.5+r),o-p),p,m)
a.cz(0)},
k(a){return"_GlowController(color: "+this.ax.k(0)+", axis: "+A.aFX(this.ay)+")"}}
A.aef.prototype={
$0(){return this.a.kf(B.em)},
$S:0}
A.OM.prototype={
Gn(a,b,c,d,e){var s
if(c==null)return
switch(A.k7(d,e)){case B.A:c.aI(a,b)
break
case B.z:a.cC(0)
a.aD(0,0,b.b)
a.dH(0,1,-1)
c.aI(a,b)
a.cz(0)
break
case B.ag:a.cC(0)
a.l2(0,1.5707963267948966)
a.dH(0,1,-1)
c.aI(a,new A.a9(b.b,b.a))
a.cz(0)
break
case B.aA:a.cC(0)
s=b.a
a.aD(0,s,0)
a.l2(0,1.5707963267948966)
c.aI(a,new A.a9(b.b,s))
a.cz(0)
break}},
aI(a,b){var s=this,r=s.d
s.Gn(a,b,s.b,r,B.nY)
s.Gn(a,b,s.c,r,B.nX)},
i9(a){return a.b!=this.b||a.c!=this.c},
k(a){return"_GlowingOverscrollIndicatorPainter("+A.h(this.b)+", "+A.h(this.c)+")"}}
A.qr.prototype={
am(){return new A.AB(null,null,B.m)},
jE(a){return A.BE().$1(a)}}
A.AB.prototype={
gkj(){var s,r,q,p,o,n,m=this,l=null,k=m.d
if(k===$){s=t.H7
r=new A.aN(0,0,s)
q=new A.AA(r,B.ml,$.bF())
p=A.dW(l,l,l,l,m)
p.bx()
o=p.c1$
o.b=!0
o.a.push(q.gw0())
q.a!==$&&A.eI()
q.a=p
n=A.eq(B.nb,p,l)
n.a.X(0,q.gew())
t.m.a(n)
q.b!==$&&A.eI()
q.b=new A.b0(n,r,s.i("b0<aL.T>"))
m.d!==$&&A.bm()
m.d=q
k=q}return k},
xy(a){var s,r,q,p,o,n,m=this
if(!m.a.jE(a))return!1
if(a instanceof A.ia){m.f=a
J.Y(m.e)
s=a.e
r=m.c
r.d8(new A.wr(s<0,0))
m.r=!0
r=a.f
if(r!==0){s=m.gkj()
q=A.K(Math.abs(r),1,1e4)
r=s.c
p=s.b
p===$&&A.b()
o=p.a
r.a=p.b.ak(0,o.gn(o))
r.b=Math.min(0.016+1.01/q,1)
r=s.a
r===$&&A.b()
r.e=A.bV(0,B.d.b0(q*0.02),0)
r.iz(0,0)
s.d=B.a1D}else if(a.d!=null){r=a.a.d
r.toString
n=A.K(Math.abs(s)/r+m.gkj().e,0,1)
r=m.gkj()
r.e=n
s=r.c
p=r.b
p===$&&A.b()
o=p.a
s.a=p.b.ak(0,o.gn(o))
o=r.e
s.b=0.016*o+0.016*(1-Math.exp(-o*8.237217661997105))
o=r.a
o===$&&A.b()
o.e=B.hM
if(r.d!==B.mm){o.iz(0,0)
r.d=B.mm}else{s=o.r
if(!(s!=null&&s.a!=null))r.aC()}}}else if(a instanceof A.jw||a instanceof A.iq){s=m.gkj()
if(s.d===B.mm)s.kf(B.hM)}m.e=a
return!1},
UE(a){switch(this.a.c.a){case 0:return a>0?B.ea:B.e9
case 1:return a>0?B.cZ:B.hi
case 2:return a>0?B.e9:B.ea
case 3:return a>0?B.hi:B.cZ}},
m(){var s=this.gkj(),r=s.a
r===$&&A.b()
r.m()
s.dI()
this.RC()},
L(a){var s={},r=a.a4(t.l).f
s.a=null
return new A.di(this.gxx(),A.iX(this.gkj(),new A.ahb(s,this,r.a),null),null,t.WA)}}
A.ahb.prototype={
$2(a,b){var s,r,q,p,o,n,m=this,l=m.b,k=l.gkj().b
k===$&&A.b()
s=k.a
s=k.b.ak(0,s.gn(s))
switch(A.bi(l.a.c).a){case 0:r=1+s
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
p=l.UE(k==null?0:k)
k=l.f
if(k==null)o=null
else{k=k.a.d
k.toString
o=k}if(o==null)o=m.a.a
k=A.vR(r,q,1)
l=l.a
n=A.ar2(p,l.f,k,!0)
return A.aoK(n,s!==0&&o!==m.a.a?l.e:B.h)},
$S:353}
A.ob.prototype={
G(){return"_StretchState."+this.b}}
A.AA.prototype={
w1(a){var s=this
if(a!==B.X)return
switch(s.d.a){case 1:s.kf(B.hM)
break
case 3:s.d=B.ml
s.e=0
break
case 2:case 0:break}},
kf(a){var s,r,q=this,p=q.d
if(p===B.CQ||p===B.ml)return
p=q.c
s=q.b
s===$&&A.b()
r=s.a
p.a=s.b.ak(0,r.gn(r))
p.b=0
p=q.a
p===$&&A.b()
p.e=a
p.iz(0,0)
q.d=B.CQ},
k(a){return"_StretchController()"}}
A.wr.prototype={
cl(a){this.QA(a)
a.push("side: "+(this.a?"leading edge":"trailing edge"))}}
A.zP.prototype={
cl(a){var s,r
this.vx(a)
s=this.cX$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.Bb.prototype={
cc(){this.dJ()
this.cT()
this.fm()},
m(){var s=this,r=s.be$
if(r!=null)r.I(0,s.geO())
s.be$=null
s.aQ()}}
A.Bj.prototype={
cc(){this.dJ()
this.cT()
this.fm()},
m(){var s=this,r=s.be$
if(r!=null)r.I(0,s.geO())
s.be$=null
s.aQ()}}
A.Aw.prototype={
l(a,b){if(b==null)return!1
if(J.Y(b)!==A.C(this))return!1
return b instanceof A.Aw&&A.cX(b.a,this.a)},
gu(a){return A.dj(this.a)},
k(a){return"StorageEntryIdentifier("+B.c.b6(this.a,":")+")"}}
A.a4E.prototype={
DX(a){var s=A.a([],t.g8)
if(A.aq2(a,s))a.BP(new A.a4F(s))
return s},
MH(a,b){var s,r=this
if(r.a==null)r.a=A.y(t.K,t.z)
s=r.DX(a)
if(s.length!==0)r.a.j(0,new A.Aw(s),b)},
LO(a){var s
if(this.a==null)return null
s=this.DX(a)
return s.length!==0?this.a.h(0,new A.Aw(s)):null}}
A.a4F.prototype={
$1(a){return A.aq2(a,this.a)},
$S:48}
A.pI.prototype={
L(a){return this.c}}
A.Jf.prototype={
IA(a,b,c){var s=t.gQ.a(B.c.gbr(this.d))
if(s.ac!=null){s.ac=a
return A.bG(null,t.H)}return s.hz(s.l5(a),b,c)},
u3(a){var s=t.gQ.a(B.c.gbr(this.d))
if(s.ac!=null){s.ac=a
return}s.dT(s.l5(a))},
Je(a,b,c){var s=null,r=new A.lz(this.z,this.as,B.fH,a,b,!0,s,A.jJ(!1),$.bF())
r.DB(b,s,!0,c,a)
r.DC(b,s,s,!0,c,a)
return r},
aw(a){this.Q0(a)
t.gQ.a(a).sq0(this.as)}}
A.Jg.prototype={}
A.lz.prototype={
zu(a,b,c,d,e,f){return this.Qa(a,b,c,d,e,null)},
sq0(a){var s,r=this
if(r.aA===a)return
s=r.gjH(r)
r.aA=a
if(s!=null)r.zO(r.l5(s))},
gqT(){var s=this.ax
s.toString
return Math.max(0,s*(this.aA-1)/2)},
q7(a,b){var s=Math.max(0,a-this.gqT())/(b*this.aA),r=B.d.Bp(s)
if(Math.abs(s-r)<1e-10)return r
return s},
l5(a){var s=this.ax
s.toString
return a*s*this.aA+this.gqT()},
gjH(a){var s,r,q=this,p=q.at
if(p!=null)s=!(q.z!=null&&q.Q!=null)
else s=!0
if(s)p=null
else{s=q.ac
if(s==null){p.toString
s=q.z
s.toString
r=q.Q
r.toString
r=A.K(p,s,r)
s=q.ax
s.toString
s=q.q7(r,s)
p=s}else p=s}return p},
Ch(){var s,r,q=this,p=q.w,o=p.c
o.toString
o=A.a4G(o)
if(o!=null){p=p.c
p.toString
s=q.ac
if(s==null){s=q.at
s.toString
r=q.ax
r.toString
r=q.q7(s,r)
s=r}o.MH(p,s)}},
Mc(){var s,r,q
if(this.at==null){s=this.w
r=s.c
r.toString
r=A.a4G(r)
if(r==null)q=null
else{s=s.c
s.toString
q=r.LO(s)}if(q!=null)this.ag=q}},
Cg(){var s,r=this,q=r.ac
if(q==null){q=r.at
q.toString
s=r.ax
s.toString
s=r.q7(q,s)
q=s}r.w.e.sn(0,q)
q=$.hp.ac$
q===$&&A.b()
q.K5()},
Mb(a,b){if(b)this.ag=a
else this.dT(this.l5(a))},
oa(a){var s,r,q,p,o=this,n=o.ax
n=n!=null?n:null
if(a===n)return!0
o.Q6(a)
s=o.at
s=s!=null?s:null
if(s==null)r=o.ag
else if(n===0){q=o.ac
q.toString
r=q}else{n.toString
r=o.q7(s,n)}p=o.l5(r)
o.ac=a===0?r:null
if(p!==s){o.at=p
return!1}return!0},
km(a){var s
this.Qb(a)
if(!(a instanceof A.lz))return
s=a.ac
if(s!=null)this.ac=s},
o7(a,b){var s=a+this.gqT()
return this.Q4(s,Math.max(s,b-this.gqT()))},
fX(){var s,r,q,p,o,n=this,m=null,l=n.z
if(l!=null&&n.Q!=null)l.toString
else l=m
if(n.z!=null&&n.Q!=null){s=n.Q
s.toString}else s=m
r=n.at
r=r!=null?r:m
q=n.ax
q=q!=null?q:m
p=n.w.a.c
o=n.aA
return new A.Jg(o,l,s,r,q,p)}}
A.r8.prototype={
kp(a){return new A.r8(!1,this.hB(a))},
glY(){return this.b}}
A.pH.prototype={
kp(a){return new A.pH(this.hB(a))},
UT(a){var s,r
if(a instanceof A.lz){s=a.gjH(a)
s.toString
return s}s=a.at
s.toString
r=a.ax
r.toString
return s/r},
UU(a,b){var s
if(a instanceof A.lz)return a.l5(b)
s=a.ax
s.toString
return b*s},
m3(a,b){var s,r,q,p,o,n=this
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
if(s)return n.Q2(a,b)
q=n.gpR()
p=n.UT(a)
s=q.c
if(b<-s)p-=0.5
else if(b>s)p+=0.5
o=n.UU(a,B.d.Bp(p))
s=a.at
s.toString
if(o!==s){s=n.glh()
r=a.at
r.toString
return new A.l9(o,A.Au(s,r-o,b),q)}return null}}
A.ws.prototype={
am(){return new A.PZ(B.m)}}
A.PZ.prototype={
ar(){this.aJ()
this.d=this.a.r.z},
UK(a){var s,r
this.a.toString
switch(0){case 0:s=a.a4(t.I)
s.toString
r=A.akl(s.w)
this.a.toString
return r}},
L(a){var s,r,q,p=this,o=p.UK(a),n=p.a.w
n=new A.pH(B.zW.hB(n))
n=new A.r8(!1,null).hB(n)
s=p.a
r=s.Q
s=s.r
q=A.a7z(a).a20(!1)
return new A.di(new A.afZ(p),A.aqB(o,s,r,new A.r8(!1,n),null,q,new A.ag_(p,o)),null,t.WA)}}
A.afZ.prototype={
$1(a){if(a.cX$===0)this.a.a.toString
return!1},
$S:26}
A.ag_.prototype={
$2(a,b){var s=this.a.a
return new A.nT(this.b,b,0,B.EQ,s.as,A.a([new A.Ls(s.r.as,!0,s.z,null)],t.E),null)},
$S:354}
A.ic.prototype={
gmM(){return!0},
gyH(){return!1},
IP(a){return!0}}
A.JE.prototype={
aH(a){var s=new A.Kx(this.d,0,!1,!1,A.az())
s.aK()
return s},
aL(a,b){b.sa63(this.d)
b.sa6s(0)
b.sa1a(!1)
b.sa19(!1)}}
A.a3w.prototype={}
A.a51.prototype={}
A.EH.prototype={
xn(a){return this.XD(a)},
XD(a){var s=0,r=A.a2(t.H),q,p=this,o,n,m
var $async$xn=A.Z(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:n=A.en(a.b)
m=p.a
if(!m.R(0,n)){s=1
break}m=m.h(0,n)
m.toString
o=a.a
if(o==="Menu.selectedCallback"){m.ga8k().$0()
m.ga5Y()
o=$.am.ai$.f.f.e
o.toString
A.awJ(o,m.ga5Y(),t.q)}else if(o==="Menu.opened")m.ga8j(m).$0()
else if(o==="Menu.closed")m.ga8i(m).$0()
case 1:return A.a0(q,r)}})
return A.a1($async$xn,r)}}
A.pM.prototype={
c5(a){return this.f!=a.f}}
A.l7.prototype={
am(){return new A.Ra(null,A.y(t.yb,t.M),null,!0,null,B.m)}}
A.Ra.prototype={
gcP(){return this.a.d},
iN(a,b){},
L(a){return A.abV(this.bp$,this.a.c)}}
A.yo.prototype={
c5(a){return a.f!=this.f}}
A.x9.prototype={
am(){return new A.A3(B.m)}}
A.A3.prototype={
b8(){var s,r=this
r.cF()
s=r.c
s.toString
r.r=A.q_(s)
r.xk()
if(r.d==null){r.a.toString
r.d=!1}},
aZ(a){this.bs(a)
this.xk()},
gFT(){this.a.toString
return!1},
xk(){var s,r=this
if(r.gFT()&&!r.w){r.w=!0;++$.l6.bt$
s=$.hp.ac$
s===$&&A.b()
s.ga76().aE(new A.agC(r),t.P)}},
Z9(){var s,r=this
r.e=!1
r.f=null
s=$.hp.ac$
s===$&&A.b()
s.I(0,r.gxJ())
r.xk()},
m(){if(this.e){var s=$.hp.ac$
s===$&&A.b()
s.I(0,this.gxJ())}this.aQ()},
L(a){var s,r,q=this,p=q.d
p.toString
if(p&&q.gFT())return B.e_
p=q.r
if(p==null)p=q.f
s=q.a
r=s.d
return A.abV(p,new A.l7(s.c,r,null))}}
A.agC.prototype={
$1(a){var s,r=this.a
r.w=!1
if(r.c!=null){s=$.hp.ac$
s===$&&A.b()
s.X(0,r.gxJ())
r.av(new A.agB(r,a))}$.l6.Iy()},
$S:355}
A.agB.prototype={
$0(){var s=this.a
s.f=this.b
s.e=!0
s.d=!1},
$S:0}
A.dF.prototype={
gma(a){return!0},
m(){var s=this,r=s.c
if(r!=null){r=r.ft$.v(0,s)
r.toString
s.I(0,r)
s.c=s.b=null}s.dI()
s.a=!0}}
A.ip.prototype={
zi(a){},
mO(a,b){var s,r,q=this,p=q.bp$
p=p==null?null:J.e9(p.gj2(),b)
s=p===!0
r=s?a.mu(J.aS(q.bp$.gj2(),b)):a.t8()
if(a.b==null){a.b=b
a.c=q
p=new A.a6D(q,a)
a.X(0,p)
q.ft$.j(0,a,p)}a.KB(r)
if(!s&&a.gma(a)&&q.bp$!=null)q.yf(a)},
oE(){var s,r,q=this
if(q.fu$!=null){s=q.bp$
s=s==null?null:s.e
s=s==q.gcP()||q.gmS()}else s=!0
if(s)return
r=q.bp$
if(q.lV(q.fu$,!1))if(r!=null)r.m()},
gmS(){var s,r,q=this
if(q.e3$)return!0
if(q.gcP()==null)return!1
s=q.c
s.toString
r=A.q_(s)
if(r!=q.fu$){if(r==null)s=null
else{s=r.c
s=s==null?null:s.d
s=s===!0}s=s===!0}else s=!1
return s},
lV(a,b){var s,r,q=this
if(q.gcP()==null||a==null)return q.Ha(null,b)
if(b||q.bp$==null){s=q.gcP()
s.toString
return q.Ha(a.a1i(s,q),b)}s=q.bp$
s.toString
r=q.gcP()
r.toString
s.a6N(r)
r=q.bp$
r.toString
a.il(r)
return!1},
Ha(a,b){var s,r=this,q=r.bp$
if(a==q)return!1
r.bp$=a
if(!b){if(a!=null){s=r.ft$
new A.bb(s,A.o(s).i("bb<1>")).Z(0,r.ga_P())}r.zi(q)}return!0},
yf(a){var s,r=a.gma(a),q=this.bp$
if(r){if(q!=null){r=a.b
r.toString
s=a.mW()
if(!J.f(J.aS(q.gj2(),r),s)||!J.e9(q.gj2(),r)){J.cL(q.gj2(),r,s)
q.lF()}}}else if(q!=null){r=a.b
r.toString
q.a6F(0,r,t.K)}}}
A.a6D.prototype={
$0(){var s=this.a
if(s.bp$==null)return
s.yf(this.b)},
$S:0}
A.ai9.prototype={
$2(a,b){if(!a.a)a.I(0,b)},
$S:36}
A.Tr.prototype={
aZ(a){this.bs(a)
this.oE()},
b8(){var s,r,q,p,o=this
o.cF()
s=o.bp$
r=o.gmS()
q=o.c
q.toString
q=A.q_(q)
o.fu$=q
p=o.lV(q,r)
if(r){o.iN(s,o.e3$)
o.e3$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.ft$.Z(0,new A.ai9())
s=r.bp$
if(s!=null)s.m()
r.bp$=null
r.aQ()}}
A.c3.prototype={
sn(a,b){var s=this.y
if(b==null?s!=null:b!==s){this.y=b
this.zk(s)}},
KB(a){this.y=a}}
A.hB.prototype={
t8(){return this.cy},
zk(a){this.aC()},
mu(a){return A.o(this).i("hB.T").a(a)},
mW(){var s=this.y
return s==null?A.o(this).i("c3.T").a(s):s}}
A.A2.prototype={
mu(a){return this.QN(a)},
mW(){var s=this.QO()
s.toString
return s}}
A.x5.prototype={}
A.x4.prototype={}
A.aia.prototype={
$2(a,b){if(!a.a)a.I(0,b)},
$S:36}
A.q1.prototype={}
A.KO.prototype={
am(){return new A.rD(new A.R7($.bF()),null,A.y(t.yb,t.M),null,!0,null,B.m,this.$ti.i("rD<1>"))}}
A.xa.prototype={
G(){return"RouteInformationReportingType."+this.b}}
A.rD.prototype={
gcP(){return this.a.r},
ar(){var s,r=this
r.aJ()
s=r.a.c
if(s!=null)s.X(0,r.gqP())
r.a.f.a0k(r.gwT())
r.a.e.X(0,r.gx5())},
iN(a,b){var s,r,q=this,p=q.f
q.mO(p,"route")
s=p.y
r=s==null
if((r?A.o(p).i("c3.T").a(s):s)!=null){p=r?A.o(p).i("c3.T").a(s):s
p.toString
q.r8(p,new A.agR(q))}else{p=q.a.c
if(p!=null)q.r8(p.a,new A.agS(q))}},
ZB(){var s=this
if(s.w||s.a.c==null)return
s.w=!0
$.bJ.cy$.push(s.gZc())},
Zd(a){var s,r,q,p,o=this
o.w=!1
s=o.f
r=s.y
q=r==null
if((q?A.o(s).i("c3.T").a(r):r)!=null){s=q?A.o(s).i("c3.T").a(r):r
s.toString
r=o.a.c
r.toString
q=o.e
q.toString
if(q!==B.UH)p=q===B.lE&&r.b.a==s.a
else p=!0
B.fC.u0("selectMultiEntryHistory",t.H)
q=s.a
q.toString
A.aqU(q,p,s.b)
r.b=r.a=s}o.e=B.lE},
Zl(){this.a.e.ga87()
this.a.toString
return null},
r0(){var s=this
s.f.sn(0,s.Zl())
if(s.e==null)s.e=B.lE
s.ZB()},
b8(){var s,r=this
r.r=!0
r.Ry()
s=r.a.c
if(s!=null&&r.r)r.r8(s.a,new A.agQ(r))
r.r=!1
r.r0()},
aZ(a){var s,r,q,p=this
p.Rz(a)
s=p.a
r=a.c
q=s.c==r
if(q)s.f===a.f
p.d=new A.A()
if(!q){s=r==null
if(!s)r.I(0,p.gqP())
q=p.a.c
if(q!=null)q.X(0,p.gqP())
s=s?null:r.a
r=p.a.c
if(s!=(r==null?null:r.a))p.FD()}s=a.f
if(p.a.f!==s){r=p.gwT()
s.a6H(r)
p.a.f.a0k(r)}p.a.toString
s=p.gx5()
a.e.I(0,s)
p.a.e.X(0,s)
p.r0()},
m(){var s=this,r=s.a.c
if(r!=null)r.I(0,s.gqP())
s.a.f.a6H(s.gwT())
s.a.e.I(0,s.gx5())
s.d=null
s.RA()},
r8(a,b){var s,r,q=this
q.r=!1
q.d=new A.A()
s=q.a.d
s.toString
r=q.c
r.toString
s.a8n(a,r).aE(q.YV(q.d,b),t.H)},
YV(a,b){return new A.agO(this,a,b)},
FD(){var s=this
s.r=!0
s.r8(s.a.c.a,new A.agL(s))},
Vc(){var s=this
s.d=new A.A()
return s.a.e.a8o().aE(s.Wj(s.d),t.y)},
Wj(a){return new A.agM(this,a)},
GS(){this.av(new A.agP())
this.r0()
return new A.bt(null,t.b5)},
Wk(){this.av(new A.agN())
this.r0()},
L(a){var s=this.bp$,r=this.a,q=r.c,p=r.f,o=r.d
r=r.e
return A.abV(s,new A.Rf(q,p,o,r,this,new A.hN(r.grT(),null),null))}}
A.agR.prototype={
$0(){return this.a.a.e.ga7X()},
$S(){return this.a.$ti.i("ah<~>(1)()")}}
A.agS.prototype={
$0(){return this.a.a.e.ga7W()},
$S(){return this.a.$ti.i("ah<~>(1)()")}}
A.agQ.prototype={
$0(){return this.a.a.e.gNC()},
$S(){return this.a.$ti.i("ah<~>(1)()")}}
A.agO.prototype={
$1(a){var s=0,r=A.a2(t.H),q,p=this,o,n
var $async$$1=A.Z(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:o=p.a
n=p.b
if(o.d!=n){s=1
break}s=3
return A.a4(p.c.$0().$1(a),$async$$1)
case 3:if(o.d==n)o.GS()
case 1:return A.a0(q,r)}})
return A.a1($async$$1,r)},
$S(){return this.a.$ti.i("ah<~>(1)")}}
A.agL.prototype={
$0(){return this.a.a.e.gNC()},
$S(){return this.a.$ti.i("ah<~>(1)()")}}
A.agM.prototype={
$1(a){var s=this.a
if(this.b!=s.d)return new A.bt(!0,t.d9)
s.GS()
return new A.bt(a,t.d9)},
$S:357}
A.agP.prototype={
$0(){},
$S:0}
A.agN.prototype={
$0(){},
$S:0}
A.Rf.prototype={
c5(a){if(this.f==a.f)this.r===a.r
return!0}}
A.R7.prototype={
t8(){return null},
zk(a){this.aC()},
mu(a){var s
if(a==null)return null
t.Dn.a(a)
s=J.bO(a)
return new A.q1(A.cu(s.gJ(a)),s.gT(a))},
mW(){var s,r=this,q=r.y,p=q==null
if((p?A.o(r).i("c3.T").a(q):q)==null)q=null
else{s=(p?A.o(r).i("c3.T").a(q):q).a
q=[s,(p?A.o(r).i("c3.T").a(q):q).b]}return q}}
A.rP.prototype={
aZ(a){this.bs(a)
this.oE()},
b8(){var s,r,q,p,o=this
o.cF()
s=o.bp$
r=o.gmS()
q=o.c
q.toString
q=A.q_(q)
o.fu$=q
p=o.lV(q,r)
if(r){o.iN(s,o.e3$)
o.e3$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.ft$.Z(0,new A.aia())
s=r.bp$
if(s!=null)s.m()
r.bp$=null
r.aQ()}}
A.pF.prototype={
guq(){return this.e},
jx(){var s,r=this,q=A.alP(r.gSC(),!1)
r.k4=q
r.gpn()
s=A.alP(r.gSE(),!0)
r.p1=s
B.c.K(r.e,A.a([q,s],t.fy))
r.PY()},
ky(a){var s,r=this
r.PT(a)
s=r.at.Q
s===$&&A.b()
if(s===B.O&&!r.Q)r.a.K0(r)
return!0},
m(){B.c.a_(this.e)
this.PX()}}
A.e6.prototype={
gbR(a){return this.as},
gCl(){return this.ax},
WF(a){var s,r=this
switch(a.a){case 3:s=r.e
if(s.length!==0){s=B.c.gJ(s)
r.gmM()
s.smM(!0)}s=r.z
if(s!=null){s.a.$0()
s.a=null}r.z=null
break
case 1:case 2:s=r.e
if(s.length!==0)B.c.gJ(s).smM(!1)
if(r.z==null)r.z=$.bJ.a6Z(B.FP)
break
case 0:if(!r.ga4Y()){r.a.K0(r)
r.Q=!0
s=r.z
if(s!=null){s.a.$0()
s.a=null}r.z=null}break}},
jx(){var s=this,r=s.gMu(s),q=s.gMu(s),p=s.gm4(),o=s.a
o.toString
o=s.at=A.dW(p,r,q,null,o)
o.bx()
p=o.c1$
p.b=!0
p.a.push(s.gFE())
s.as=o
s.Pi()
p=s.as
if(p.gb4(p)===B.X&&s.e.length!==0){p=B.c.gJ(s.e)
s.gmM()
p.smM(!0)}},
oA(){this.PV()
return this.at.cZ(0)},
oy(){this.PQ()
var s=this.at
s.sn(0,s.b)},
zg(a){var s,r
if(a instanceof A.e6){s=this.at
s.toString
r=a.at.x
r===$&&A.b()
s.sn(0,r)}this.PW(a)},
ky(a){this.ch=a
this.at.ha(0)
this.Pg(a)
return!0},
m7(a){this.I7(a)
this.PU(a)},
oz(a){this.I7(a)
this.PR(a)},
I7(a){var s,r,q,p,o,n,m,l=this,k={},j=l.CW
l.CW=null
if(a instanceof A.e6&&l.IP(a)&&!0){s=l.ax.c
if(s!=null){r=s instanceof A.nM?s.a:s
r.toString
q=a.as
q.toString
p=r.gn(r)
o=q.x
o===$&&A.b()
if(!J.f(p,o)){p=q.Q
p===$&&A.b()
p=p===B.X||p===B.O}else p=!0
o=a.y.a
if(p)l.lS(q,o)
else{k.a=null
p=new A.abQ(l,q,a)
l.CW=new A.abO(k,q,p)
q.bx()
n=q.c1$
n.b=!0
n.a.push(p)
m=A.amn(r,q,new A.abP(k,l,a))
k.a=m
l.lS(m,o)}}else l.lS(a.as,a.y.a)}else l.ZU(B.ci)
if(j!=null)j.$0()},
lS(a,b){this.ax.saO(0,a)
if(b!=null)b.aE(new A.abN(this,a),t.P)},
ZU(a){return this.lS(a,null)},
m(){var s=this,r=s.as
if(r!=null)r.c3(s.gFE())
r=s.z
if(r!=null){r.a.$0()
r.a=null}s.z=null
r=s.at
if(r!=null)r.m()
s.y.bK(0,s.ch)
s.Ph()},
gm4(){return"TransitionRoute"},
k(a){return"TransitionRoute(animation: "+A.h(this.at)+")"}}
A.abQ.prototype={
$1(a){var s,r
switch(a.a){case 3:case 0:s=this.a
s.lS(this.b,this.c.y.a)
r=s.CW
if(r!=null){r.$0()
s.CW=null}break
case 1:case 2:break}},
$S:4}
A.abO.prototype={
$0(){this.b.c3(this.c)
var s=this.a.a
if(s!=null)s.m()},
$S:0}
A.abP.prototype={
$0(){var s,r=this.b
r.lS(this.a.a.a,this.c.y.a)
s=r.CW
if(s!=null){s.$0()
r.CW=null}},
$S:0}
A.abN.prototype={
$1(a){var s=this.a.ax,r=this.b
if(s.c==r){s.saO(0,B.ci)
if(r instanceof A.nM)r.m()}},
$S:7}
A.GT.prototype={
gME(){var s=this.kF$
return s!=null&&s.length!==0}}
A.O2.prototype={
iD(a,b){A.a3H(this.e,t.z).gyH()
return!1},
dg(a){return A.alL(this.e).Lb()}}
A.zy.prototype={
c5(a){var s=this
return s.f!==a.f||s.r!==a.r||s.w!==a.w||s.x!==a.x}}
A.rp.prototype={
am(){return new A.o7(A.all(!0,B.a0d.k(0)+" Focus Scope",!1),A.am3(),B.m,this.$ti.i("o7<1>"))}}
A.o7.prototype={
ar(){var s,r,q=this
q.aJ()
s=A.a([],t.Eo)
r=q.a.c.fy
if(r!=null)s.push(r)
r=q.a.c.go
if(r!=null)s.push(r)
q.e=new A.zv(s)
if(q.a.c.gkO()){q.a.c.a.a.toString
s=!0}else s=!1
if(s){s=q.a.c.a.x.gdQ()
if(s!=null)s.n4(q.f)}},
aZ(a){var s,r=this
r.bs(a)
if(r.a.c.gkO()){r.a.c.a.a.toString
s=!0}else s=!1
if(s){s=r.a.c.a.x.gdQ()
if(s!=null)s.n4(r.f)}},
b8(){this.cF()
this.d=null},
Ux(){this.av(new A.afD(this))},
m(){this.f.m()
this.aQ()},
gHg(){var s=this.a.c.fy
if((s==null?null:s.gb4(s))!==B.an){s=this.a.c.a
s=s==null?null:s.CW.a
s=s===!0}else s=!0
return s},
L(a){var s,r,q=this,p=null,o=q.a.c,n=o.gkO(),m=q.a.c
if(!m.gtV()){m=m.kF$
m=m!=null&&m.length!==0}else m=!0
s=q.a.c
s=s.gtV()||s.zA$>0
r=q.a.c
return A.iX(o.c,new A.afH(q),new A.zy(n,m,s,o,new A.wl(r.fx,new A.pI(new A.hN(new A.afI(q),p),r.k3,p),p),p))}}
A.afD.prototype={
$0(){this.a.d=null},
$S:0}
A.afH.prototype={
$2(a,b){var s=this.a.a.c.c.a
b.toString
return new A.l7(b,s,null)},
$S:358}
A.afI.prototype={
$1(a){var s,r=null,q=A.aV([B.Ct,new A.O2(a,new A.bo(A.a([],t.ot),t.wS))],t.n,t.od),p=this.a,o=p.e
o===$&&A.b()
s=p.d
if(s==null)s=p.d=new A.im(new A.hN(new A.afF(p),r),p.a.c.k2)
return A.UF(q,new A.pM(p.r,B.bP,B.VF,A.apg(!1,new A.im(A.iX(o,new A.afG(p),s),r),r,r,p.f),r))},
$S:359}
A.afG.prototype={
$2(a,b){var s,r,q=this.a,p=q.a.c,o=p.fy
o.toString
s=p.go
s.toString
r=p.a
r=r==null?null:r.CW
if(r==null)r=A.jJ(!1)
return p.IN(a,o,s,A.iX(r,new A.afE(q),b))},
$S:25}
A.afE.prototype={
$2(a,b){var s=this.a,r=s.gHg()
s.f.scp(!r)
return new A.ha(r,null,b,null)},
$S:360}
A.afF.prototype={
$1(a){var s,r=this.a.a.c,q=r.fy
q.toString
s=r.go
s.toString
return r.a0Y(a,q,s)},
$S:14}
A.kQ.prototype={
av(a){var s,r=this.k1
if(r.gbo()!=null){r=r.gbo()
if(r.a.c.gkO())if(!r.gHg()){r.a.c.a.a.toString
s=!0}else s=!1
else s=!1
if(s){s=r.a.c.a.x.gdQ()
if(s!=null)s.n4(r.f)}r.av(a)}else a.$0()},
IN(a,b,c,d){return d},
jx(){var s=this
s.Qn()
s.fy=A.K0(A.e6.prototype.gbR.call(s,s))
s.go=A.K0(A.e6.prototype.gCl.call(s))},
oA(){var s,r=this,q=r.k1
if(q.gbo()!=null){r.a.a.toString
s=!0}else s=!1
if(s){s=r.a.x.gdQ()
if(s!=null)s.n4(q.gbo().f)}return r.Qm()},
oy(){var s,r=this,q=r.k1
if(q.gbo()!=null){r.a.a.toString
s=!0}else s=!1
if(s){s=r.a.x.gdQ()
if(s!=null)s.n4(q.gbo().f)}r.Qk()},
sui(a){var s,r=this
if(r.fx===a)return
r.av(new A.a3I(r,a))
s=r.fy
s.toString
s.saO(0,r.fx?B.d2:A.e6.prototype.gbR.call(r,r))
s=r.go
s.toString
s.saO(0,r.fx?B.ci:A.e6.prototype.gCl.call(r))
r.og()},
fH(){var s=0,r=A.a2(t.oj),q,p=this,o,n,m,l
var $async$fH=A.Z(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:p.k1.gbo()
o=A.aA(p.id,!0,t.Ev),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}l=J
s=6
return A.a4(o[m].$0(),$async$fH)
case 6:if(!l.f(b,!0)){q=B.UI
s=1
break}case 4:++m
s=3
break
case 5:q=p.Qu()
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$fH,r)},
zb(a){this.PS(a)
this.og()},
og(){var s,r=this
r.PP()
r.av(new A.a3G())
s=r.k4
s===$&&A.b()
s.ev()
s=r.p1
s===$&&A.b()
r.gpn()
s.spn(!0)},
t_(){this.PO()
var s=this.k4
s===$&&A.b()
s.ev()
s=this.k1
if(s.gbo()!=null)s.gbo().Ux()},
SD(a){var s,r,q=this,p=null
q.ga0P()
q.gyH()
s=q.ga0Q()
r=q.fy
if(r.gb4(r)!==B.an){r=q.fy
r=r.gb4(r)===B.O}else r=!0
q.gyH()
return new A.ha(r,p,new A.w_(p,!1,p,!0,s,p),p)},
SF(a){var s=this,r=null,q=s.ok
return q==null?s.ok=A.dP(r,new A.rp(s,s.k1,A.o(s).i("rp<1>")),!1,r,!1,r,r,r,r,r,r,r,r,r,r,r,B.Ug,r,r,r,r):q},
k(a){return"ModalRoute("+this.b.k(0)+", animation: "+A.h(this.as)+")"}}
A.a3I.prototype={
$0(){this.a.fx=this.b},
$S:0}
A.a3G.prototype={
$0(){},
$S:0}
A.ro.prototype={
fH(){var s=0,r=A.a2(t.oj),q,p=this,o
var $async$fH=A.Z(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:o=p.kF$
if(o!=null&&o.length!==0){q=B.Bv
s=1
break}q=p.PZ()
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$fH,r)},
ky(a){var s,r,q=this,p=q.kF$
if(p!=null&&p.length!==0){s=p.pop()
s.b=null
s.a81()
r=s.c&&--q.zA$===0
if(q.kF$.length===0||r)q.og()
return!1}q.Ql(a)
return!0}}
A.L0.prototype={
L(a){var s,r,q,p=t.l,o=a.a4(p).f.f,n=Math.max(o.a,0),m=this.d,l=m?o.b:0
l=Math.max(l,0)
s=Math.max(o.c,0)
r=this.f
q=r?o.d:0
return new A.ib(new A.bq(n,l,s,Math.max(q,0)),new A.fo(a.a4(p).f.LY(r,!0,!0,m),this.x,null),null)}}
A.L4.prototype={
M3(){},
Jx(a,b){if(b!=null)b.d8(new A.xn(null,a,b,0))},
Jy(a,b,c){b.d8(A.am4(b,null,null,a,c))},
tm(a,b,c){b.d8(new A.ia(null,c,0,a,b,0))},
Jw(a,b){b.d8(new A.jw(null,a,b,0))},
o8(){},
m(){},
k(a){return"<optimized out>#"+A.bS(this)}}
A.ky.prototype={
o8(){this.a.fJ(0)},
gi8(){return!1},
gh6(){return!1},
gef(){return 0}}
A.a1p.prototype={
gi8(){return!1},
gh6(){return!1},
gef(){return 0},
m(){this.b.$0()
this.qs()}}
A.a7A.prototype={
Sl(a,b){var s,r,q=this
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
else return Math.min(r/3,s)*J.eo(a)}else return 0}}},
bj(a,b){var s,r,q,p,o=this
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
p=o.Sl(s,q)
if(p===0)return
s=o.a
if(A.ajq(s.w.a.c))p=-p
s.BL(p>0?B.lG:B.lH)
r=s.at
r.toString
s.vG(r-s.r.yD(s,p))},
m(){this.x=null
this.b.$0()},
k(a){return"<optimized out>#"+A.bS(this)}}
A.Zw.prototype={
Jx(a,b){var s=t.uL.a(this.b.x)
if(b!=null)b.d8(new A.xn(s,a,b,0))},
Jy(a,b,c){b.d8(A.am4(b,null,t.zk.a(this.b.x),a,c))},
tm(a,b,c){b.d8(new A.ia(t.zk.a(this.b.x),c,0,a,b,0))},
Jw(a,b){var s=this.b.x
b.d8(new A.jw(s instanceof A.h2?s:null,a,b,0))},
gi8(){var s=this.b
return(s==null?null:s.w)!==B.dM},
gh6(){return!0},
gef(){return 0},
m(){this.b=null
this.qs()},
k(a){return"<optimized out>#"+A.bS(this)+"("+A.h(this.b)+")"}}
A.C5.prototype={
M3(){var s=this.a,r=this.b
r===$&&A.b()
s.fJ(r.gef())},
o8(){var s=this.a,r=this.b
r===$&&A.b()
s.fJ(r.gef())},
xS(){var s=this.b
s===$&&A.b()
s=s.x
s===$&&A.b()
if(!(Math.abs(this.a.vG(s))<1e-10)){s=this.a
s.fp(new A.ky(s))}},
wy(){this.a.fJ(0)},
tm(a,b,c){var s=this.b
s===$&&A.b()
b.d8(new A.ia(null,c,s.gef(),a,b,0))},
gh6(){return!0},
gef(){var s=this.b
s===$&&A.b()
return s.gef()},
m(){var s=this.b
s===$&&A.b()
s.m()
this.qs()},
k(a){var s=A.bS(this),r=this.b
r===$&&A.b()
return"<optimized out>#"+s+"("+r.k(0)+")"},
gi8(){return this.c}}
A.Fl.prototype={
xS(){var s=this.a,r=this.c
r===$&&A.b()
r=r.x
r===$&&A.b()
if(s.vG(r)!==0){s=this.a
s.fp(new A.ky(s))}},
wy(){var s=this.a,r=this.c
r===$&&A.b()
s.fJ(r.gef())},
tm(a,b,c){var s=this.c
s===$&&A.b()
b.d8(new A.ia(null,c,s.gef(),a,b,0))},
gi8(){return!0},
gh6(){return!0},
gef(){var s=this.c
s===$&&A.b()
return s.gef()},
m(){var s=this.b
s===$&&A.b()
s.ep(0)
s=this.c
s===$&&A.b()
s.m()
this.qs()},
k(a){var s=A.bS(this),r=this.c
r===$&&A.b()
return"<optimized out>#"+s+"("+r.k(0)+")"}}
A.xh.prototype={
pM(a,b,c,d){var s,r=this
if(b.a==null){s=$.f_.h1$
s===$&&A.b()
s=s.R(0,c)}else s=!0
if(s){r.b.pM(a,b,c,d)
return}s=r.a
if(s.gaz(s)==null)return
s=s.gaz(s)
s.toString
if(A.aBq(s)){$.bJ.qf(new A.a7v(r,a,b,c,d))
return}r.b.pM(a,b,c,d)},
pj(a,b,c){return this.b.pj(0,b,c)},
pk(a,b){return this.b.pk(a,b)},
uh(a){return this.b.uh(a)}}
A.a7v.prototype={
$1(a){var s=this
A.dU(new A.a7u(s.a,s.b,s.c,s.d,s.e))},
$S:2}
A.a7u.prototype={
$0(){var s=this
return s.a.pM(s.b,s.c,s.d,s.e)},
$S:0}
A.t3.prototype={
G(){return"AndroidOverscrollIndicator."+this.b}}
A.L5.prototype={
a29(a,b,c,d,e,f){return new A.ai1(this,f,c!==!1,d,e,b,a)},
a20(a){return this.a29(null,null,null,null,null,a)},
jT(a){return A.lL()},
gzp(){return B.BP},
rW(a,b,c){var s=null
switch(this.jT(a)){case B.bm:case B.bd:case B.bn:return A.aB2(b,c.b,B.cl,s,s,A.BE(),B.v,s,s,s,s,B.d9,s)
case B.aE:case B.bl:case B.aF:return b}},
rU(a,b,c){var s
switch(this.jT(a)){case B.aF:case B.bm:case B.bd:case B.bn:s=1
break
case B.aE:s=2
break
case B.bl:s=3
break
default:s=null
break}if(s)c$0:for(;!0;)switch(s){case 1:return b
case 2:switch(1){case 1:break}if(2)c$1:for(;!0;)switch(2){case 1:return new A.qr(c.a,B.S,b,null)
case 2:s=3
continue c$0}break c$0
case 3:return new A.pa(c.a,B.l,b,null)}},
uT(a){switch(this.jT(a)){case B.aF:return new A.a7w()
case B.bd:return new A.a7x()
case B.aE:case B.bl:case B.bm:case B.bn:return new A.a7y()}},
l6(a){switch(this.jT(a)){case B.aF:return B.Dj
case B.bd:return B.Dk
case B.aE:case B.bl:case B.bm:case B.bn:return B.EW}},
k(a){return"ScrollBehavior"}}
A.a7w.prototype={
$1(a){return A.az4(a.gcj(a))},
$S:361}
A.a7x.prototype={
$1(a){var s=a.gcj(a),r=t.av
return new A.py(A.aW(20,null,!1,r),s,A.aW(20,null,!1,r))},
$S:362}
A.a7y.prototype={
$1(a){return new A.hv(a.gcj(a),A.aW(20,null,!1,t.av))},
$S:126}
A.ai1.prototype={
gzp(){var s=this.f
return s==null?B.BP:s},
rU(a,b,c){var s=this.a.rU(a,b,c)
return s},
rW(a,b,c){if(this.b)return this.a.rW(a,b,c)
return b},
l6(a){var s=this.a.l6(a)
return s},
uT(a){return this.a.uT(a)},
k(a){return"_WrappedScrollBehavior"}}
A.xi.prototype={
c5(a){var s
if(A.C(this.f)===A.C(a.f))s=!1
else s=!0
return s}}
A.q6.prototype={
hz(a,b,c){return this.a0J(a,b,c)},
a0J(a,b,c){var s=0,r=A.a2(t.H),q=this,p,o,n
var $async$hz=A.Z(function(d,e){if(d===1)return A.a_(e,r)
while(true)switch(s){case 0:n=A.a([],t.mo)
for(p=q.d,o=0;o<p.length;++o)n.push(p[o].hz(a,b,c))
s=2
return A.a4(A.uR(n,t.H),$async$hz)
case 2:return A.a0(null,r)}})
return A.a1($async$hz,r)},
aw(a){this.d.push(a)
a.X(0,this.gew())},
ow(a,b){b.I(0,this.gew())
B.c.v(this.d,b)},
m(){var s,r,q,p
for(s=this.d,r=s.length,q=this.gew(),p=0;p<s.length;s.length===r||(0,A.Q)(s),++p)s[p].I(0,q)
this.dI()},
Je(a,b,c){return A.aBp(b,null,0,!0,c,a)},
k(a){var s=A.a([],t.s),r=this.d,q=r.length
if(q===0)s.push("no clients")
else if(q===1){r=B.c.gbr(r).at
r.toString
s.push("one client, offset "+B.d.N(r,1))}else s.push(""+q+" clients")
return"<optimized out>#"+A.bS(this)+"("+B.c.b6(s,", ")+")"}}
A.ho.prototype={
fX(){var s=this,r=null,q=s.gzY()?s.gf6():r,p=s.gzY()?s.gf5():r,o=s.gKp()?s.gck():r,n=s.gKr()?s.gq_():r,m=s.gfU()
return new A.uF(q,p,o,n,m)},
gB0(){var s=this
return s.gck()<s.gf6()||s.gck()>s.gf5()},
gIF(){var s=this
return s.gck()===s.gf6()||s.gck()===s.gf5()},
gkE(){var s=this
return s.gq_()-A.K(s.gf6()-s.gck(),0,s.gq_())-A.K(s.gck()-s.gf5(),0,s.gq_())}}
A.uF.prototype={
gf6(){var s=this.a
s.toString
return s},
gf5(){var s=this.b
s.toString
return s},
gzY(){return this.a!=null&&this.b!=null},
gck(){var s=this.c
s.toString
return s},
gKp(){return this.c!=null},
gq_(){var s=this.d
s.toString
return s},
gKr(){return this.d!=null},
k(a){var s=this
return"FixedScrollMetrics("+B.d.N(Math.max(s.gck()-s.gf6(),0),1)+"..["+B.d.N(s.gkE(),1)+"].."+B.d.N(Math.max(s.gf5()-s.gck(),0),1)+")"},
gfU(){return this.e}}
A.Oo.prototype={}
A.eh.prototype={}
A.Mz.prototype={
Lp(a){if(t.rS.b(a))++a.cX$
return!1}}
A.e2.prototype={
cl(a){this.R5(a)
a.push(this.a.k(0))}}
A.xn.prototype={
cl(a){var s
this.ni(a)
s=this.d
if(s!=null)a.push(s.k(0))}}
A.iq.prototype={
cl(a){var s
this.ni(a)
a.push("scrollDelta: "+A.h(this.e))
s=this.d
if(s!=null)a.push(s.k(0))},
gJB(){return this.d}}
A.ia.prototype={
cl(a){var s,r=this
r.ni(a)
a.push("overscroll: "+B.d.N(r.e,1))
a.push("velocity: "+B.d.N(r.f,1))
s=r.d
if(s!=null)a.push(s.k(0))}}
A.jw.prototype={
cl(a){var s
this.ni(a)
s=this.d
if(s!=null)a.push(s.k(0))},
gJB(){return this.d}}
A.Mt.prototype={
cl(a){this.ni(a)
a.push("direction: "+this.d.k(0))}}
A.Ad.prototype={
cl(a){var s,r
this.vx(a)
s=this.cX$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.Ac.prototype={
c5(a){return this.f!==a.f}}
A.lw.prototype={
a5j(a,b){return this.d.$1(b)}}
A.xl.prototype={
am(){return new A.xm(new A.vr(t.z_),B.m)}}
A.xm.prototype={
I(a,b){var s,r,q,p=this.d
p.toString
p=A.aCT(p)
s=A.o(p).c
for(;p.t();){r=p.c
if(r==null)r=s.a(r)
if(J.f(r.d,b)){p=r.a
p.toString
A.o(r).i("mS.E").a(r);++p.a
s=r.b
s.c=r.c
r.c.b=s
q=--p.b
r.a=r.b=r.c=null
if(q===0)p.c=null
else if(r===p.c)p.c=s
return}}},
Gh(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.d
if(i.b===0)return
p=A.aA(i,!0,t.Sx)
for(i=p.length,o=0;o<i;++o){s=p[o]
try{if(s.a!=null)J.awp(s,a)}catch(n){r=A.af(n)
q=A.aw(n)
m=j instanceof A.bZ?A.cW(j):null
l=A.bs("while dispatching notifications for "+A.aG(m==null?A.aY(j):m).k(0))
k=$.fR()
if(k!=null)k.$1(new A.bQ(r,q,"widget library",l,new A.a7B(j),!1))}}},
L(a){var s=this
return new A.di(new A.a7C(s),new A.di(new A.a7D(s),new A.Ac(s,s.a.c,null),null,t.WA),null,t.ji)},
m(){this.d=null
this.aQ()}}
A.a7B.prototype={
$0(){var s=null,r=this.a
return A.a([A.hR("The "+A.C(r).k(0)+" sending notification was",r,!0,B.aQ,s,!1,s,s,B.au,s,!1,!0,!0,B.b0,s,t.ap)],t.F)},
$S:17}
A.a7C.prototype={
$1(a){var s=new A.Np(null,null,a.a,a.b,0)
s.cX$=a.cX$
this.a.Gh(s)
return!1},
$S:79}
A.a7D.prototype={
$1(a){this.a.Gh(a)
return!1},
$S:26}
A.Np.prototype={}
A.xj.prototype={
G(){return"ScrollDecelerationRate."+this.b}}
A.np.prototype={
hB(a){var s=this.a
s=s==null?null:s.kp(a)
return s==null?a:s},
kp(a){return new A.np(this.hB(a))},
yD(a,b){var s=this.a
if(s==null)return b
return s.yD(a,b)},
jX(a){var s,r=this.a
if(r==null){r=a.at
r.toString
if(r===0){r=a.z
r.toString
s=a.Q
s.toString
s=r!==s
r=s}else r=!0
return r}return r.jX(a)},
LR(a,b,c){var s=this.a
if(s==null){$.am.toString
s=$.cw().gkY()
return Math.abs(a)>Math.max(Math.abs(s.a),Math.abs(s.b))}return s.LR(a,b,c)},
o6(a,b){var s=this.a
if(s==null)return 0
return s.o6(a,b)},
rL(a,b,c,d){var s=this.a
if(s==null){s=b.c
s.toString
return s}return s.rL(a,b,c,d)},
m3(a,b){var s=this.a
if(s==null)return null
return s.m3(a,b)},
glh(){var s=this.a
s=s==null?null:s.glh()
return s==null?$.aur():s},
gpR(){var s=this.a
s=s==null?null:s.gpR()
return s==null?$.aus():s},
gAt(){var s=this.a
s=s==null?null:s.gAt()
return s==null?18:s},
gue(){var s=this.a
s=s==null?null:s.gue()
return s==null?50:s},
gpo(){var s=this.a
s=s==null?null:s.gpo()
return s==null?8000:s},
yM(a){var s=this.a
if(s==null)return 0
return s.yM(a)},
gzq(){var s=this.a
return s==null?null:s.gzq()},
glY(){return!0},
k(a){var s=this.a
if(s==null)return"ScrollPhysics"
return"ScrollPhysics -> "+s.k(0)}}
A.K5.prototype={
kp(a){return new A.K5(this.hB(a))},
rL(a,b,c,d){var s,r,q,p,o,n,m,l
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
return p+(o-q)}}l=this.Q1(a,b,c,d)
if(r){q=b.b
q.toString
l=A.K(l,p,q)}return l}}
A.ts.prototype={
kp(a){return new A.ts(this.b,this.hB(a))},
Kd(a){switch(this.b.a){case 1:return 0.07*Math.pow(1-a,2)
case 0:return 0.52*Math.pow(1-a,2)}},
yD(a,b){var s,r,q,p,o,n,m
if(!a.gB0())return b
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
m=this.Kd((o-Math.abs(b))/s)}else{s.toString
m=this.Kd(o/s)}return J.eo(b)*A.awY(o,Math.abs(b),m)},
o6(a,b){return 0},
m3(a,b){var s,r,q,p,o,n,m,l=this.gpR()
if(Math.abs(b)>=l.c||a.gB0()){switch(this.b.a){case 1:s=1400
break
case 0:s=0
break
default:s=null}r=this.glh()
q=a.at
q.toString
p=a.z
p.toString
o=a.Q
o.toString
n=new A.Vr(p,o,r,l)
if(q<p){n.f=new A.l9(p,A.Au(r,q-p,b),B.bO)
n.r=-1/0}else if(q>o){n.f=new A.l9(o,A.Au(r,q-o,b),B.bO)
n.r=-1/0}else{q=n.e=A.ayM(0.135,q,b,s)
m=q.gtE()
if(b>0&&m>o){p=q.Mj(o)
n.r=p
n.f=new A.l9(o,A.Au(r,o-o,Math.min(q.dP(0,p),5000)),B.bO)}else if(b<0&&m<p){o=q.Mj(p)
n.r=o
n.f=new A.l9(p,A.Au(r,p-p,Math.min(q.dP(0,o),5000)),B.bO)}else n.r=1/0}return n}return null},
gue(){return 100},
yM(a){return J.eo(a)*Math.min(0.000816*Math.pow(Math.abs(a),1.967),4e4)},
gzq(){return 3.5},
gpo(){switch(this.b.a){case 1:return 64e3
case 0:return A.np.prototype.gpo.call(this)}},
glh(){switch(this.b.a){case 1:return A.aqO(0.3,1.3,75)
case 0:return A.np.prototype.glh.call(this)}}}
A.tE.prototype={
kp(a){return new A.tE(this.hB(a))},
o6(a,b){var s,r,q=a.at
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
m3(a,b){var s,r,q,p,o=null,n=this.gpR()
if(a.gB0()){s=a.at
s.toString
r=a.Q
r.toString
if(s>r)q=r
else q=o
r=a.z
r.toString
if(s<r)q=r
s=this.glh()
r=a.at
r.toString
q.toString
return new A.l9(q,A.Au(s,r-q,Math.min(0,b)),n)}s=Math.abs(b)
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
r=new A.Wu(r,b,n)
s=Math.exp(Math.log(0.35*s/778.3530259679999)/($.au5()-1))
r.e=s
r.f=Math.abs(b*s/3.065)
return r}}
A.q8.prototype={
G(){return"ScrollPositionAlignmentPolicy."+this.b}}
A.jx.prototype={
DB(a,b,c,d,e){if(d!=null)this.km(d)
this.Mc()},
gf6(){var s=this.z
s.toString
return s},
gf5(){var s=this.Q
s.toString
return s},
gzY(){return this.z!=null&&this.Q!=null},
gck(){var s=this.at
s.toString
return s},
gKp(){return this.at!=null},
gq_(){var s=this.ax
s.toString
return s},
gKr(){return this.ax!=null},
km(a){var s=this,r=a.z
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
if(A.C(a)!==A.C(s))s.fr.M3()
s.w.Cr(s.fr.gi8())
s.dy.sn(0,s.fr.gh6())},
ND(a){var s,r,q,p=this,o=p.at
o.toString
if(a!==o){s=p.r.o6(p,a)
o=p.at
o.toString
r=a-s
p.at=r
if(r!==o){p.yg()
p.CS()
r=p.at
r.toString
p.zj(r-o)}if(s!==0){o=p.fr
o.toString
r=p.fX()
q=$.am.ai$.z.h(0,p.w.z)
q.toString
o.tm(r,q,s)
return s}}return 0},
zO(a){var s=this,r=s.at
r.toString
s.as=a-r
s.at=a
s.yg()
s.CS()
$.bJ.cy$.push(new A.a7E(s))},
Ch(){var s,r=this.w,q=r.c
q.toString
q=A.a4G(q)
if(q!=null){r=r.c
r.toString
s=this.at
s.toString
q.MH(r,s)}},
Mc(){var s,r,q
if(this.at==null){s=this.w
r=s.c
r.toString
r=A.a4G(r)
if(r==null)q=null
else{s=s.c
s.toString
q=r.LO(s)}if(q!=null)this.at=q}},
Mb(a,b){if(b)this.at=a
else this.dT(a)},
Cg(){var s=this.at
s.toString
this.w.e.sn(0,s)
s=$.hp.ac$
s===$&&A.b()
s.K5()},
oa(a){if(this.ax!==a){this.ax=a
this.ch=!0}return!0},
o7(a,b){var s,r,q,p=this
if(!A.BD(p.z,a,0.001)||!A.BD(p.Q,b,0.001)||p.ch||p.db!==A.bi(p.gfU())){p.z=a
p