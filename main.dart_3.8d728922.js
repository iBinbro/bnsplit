(a,b,c,d){return $.ar().tP(a,!1,c,d)},
a4t(a){return this.Kq(a,!1,null,null)},
Kr(a,b,c,d){var s=$.ar(),r=a.a
r.toString
return s.tP(r,!1,c,d)},
a4w(a){return this.Kr(a,!1,null,null)},
$idH:1}
A.RC.prototype={
aC(){var s,r,q
for(s=this.a,s=A.jK(s,s.r),r=A.n(s).c;s.q();){q=s.d;(q==null?r.a(q):q).$0()}},
X(a,b){this.a.D(0,b)},
H(a,b){this.a.u(0,b)}}
A.om.prototype={
qh(a){var s=this
return new A.z9(s.gdr().ad(0,a.gdr()),s.geJ().ad(0,a.geJ()),s.geE().ad(0,a.geE()),s.gfc().ad(0,a.gfc()),s.gds().ad(0,a.gds()),s.geI().ad(0,a.geI()),s.gfd().ad(0,a.gfd()),s.geD().ad(0,a.geD()))},
D(a,b){var s=this
return new A.z9(s.gdr().V(0,b.gdr()),s.geJ().V(0,b.geJ()),s.geE().V(0,b.geE()),s.gfc().V(0,b.gfc()),s.gds().V(0,b.gds()),s.geI().V(0,b.geI()),s.gfd().V(0,b.gfd()),s.geD().V(0,b.geD()))},
j(a){var s,r,q,p,o=this
if(o.gdr().l(0,o.geJ())&&o.geJ().l(0,o.geE())&&o.geE().l(0,o.gfc()))if(!o.gdr().l(0,B.R))s=o.gdr().a===o.gdr().b?"BorderRadius.circular("+B.d.N(o.gdr().a,1)+")":"BorderRadius.all("+o.gdr().j(0)+")"
else s=null
else{r=""+"BorderRadius.only("
if(!o.gdr().l(0,B.R)){r+="topLeft: "+o.gdr().j(0)
q=!0}else q=!1
if(!o.geJ().l(0,B.R)){if(q)r+=", "
r+="topRight: "+o.geJ().j(0)
q=!0}if(!o.geE().l(0,B.R)){if(q)r+=", "
r+="bottomLeft: "+o.geE().j(0)
q=!0}if(!o.gfc().l(0,B.R)){if(q)r+=", "
r+="bottomRight: "+o.gfc().j(0)}r+=")"
s=r.charCodeAt(0)==0?r:r}if(o.gds().l(0,o.geI())&&o.geI().l(0,o.geD())&&o.geD().l(0,o.gfd()))if(!o.gds().l(0,B.R))p=o.gds().a===o.gds().b?"BorderRadiusDirectional.circular("+B.d.N(o.gds().a,1)+")":"BorderRadiusDirectional.all("+o.gds().j(0)+")"
else p=null
else{r=""+"BorderRadiusDirectional.only("
if(!o.gds().l(0,B.R)){r+="topStart: "+o.gds().j(0)
q=!0}else q=!1
if(!o.geI().l(0,B.R)){if(q)r+=", "
r+="topEnd: "+o.geI().j(0)
q=!0}if(!o.gfd().l(0,B.R)){if(q)r+=", "
r+="bottomStart: "+o.gfd().j(0)
q=!0}if(!o.geD().l(0,B.R)){if(q)r+=", "
r+="bottomEnd: "+o.geD().j(0)}r+=")"
p=r.charCodeAt(0)==0?r:r}r=s!=null
if(r&&p!=null)return A.h(s)+" + "+p
if(r)return s
if(p!=null)return p
return"BorderRadius.zero"},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.C(s))return!1
return b instanceof A.om&&b.gdr().l(0,s.gdr())&&b.geJ().l(0,s.geJ())&&b.geE().l(0,s.geE())&&b.gfc().l(0,s.gfc())&&b.gds().l(0,s.gds())&&b.geI().l(0,s.geI())&&b.gfd().l(0,s.gfd())&&b.geD().l(0,s.geD())},
gt(a){var s=this
return A.S(s.gdr(),s.geJ(),s.geE(),s.gfc(),s.gds(),s.geI(),s.gfd(),s.geD(),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.cw.prototype={
gdr(){return this.a},
geJ(){return this.b},
geE(){return this.c},
gfc(){return this.d},
gds(){return B.R},
geI(){return B.R},
gfd(){return B.R},
geD(){return B.R},
dF(a){var s=this,r=s.a.rS(0,B.R),q=s.b.rS(0,B.R)
return A.JE(a,s.c.rS(0,B.R),s.d.rS(0,B.R),r,q)},
qh(a){if(a instanceof A.cw)return this.ad(0,a)
return this.CE(a)},
D(a,b){if(b instanceof A.cw)return this.V(0,b)
return this.CD(0,b)},
ad(a,b){var s=this
return new A.cw(s.a.ad(0,b.a),s.b.ad(0,b.b),s.c.ad(0,b.c),s.d.ad(0,b.d))},
V(a,b){var s=this
return new A.cw(s.a.V(0,b.a),s.b.V(0,b.b),s.c.V(0,b.c),s.d.V(0,b.d))},
a0(a,b){var s=this
return new A.cw(s.a.a0(0,b),s.b.a0(0,b),s.c.a0(0,b),s.d.a0(0,b))},
Y(a){return this}}
A.z9.prototype={
a0(a,b){var s=this
return new A.z9(s.a.a0(0,b),s.b.a0(0,b),s.c.a0(0,b),s.d.a0(0,b),s.e.a0(0,b),s.f.a0(0,b),s.r.a0(0,b),s.w.a0(0,b))},
Y(a){var s=this
switch(a.a){case 0:return new A.cw(s.a.V(0,s.f),s.b.V(0,s.e),s.c.V(0,s.w),s.d.V(0,s.r))
case 1:return new A.cw(s.a.V(0,s.e),s.b.V(0,s.f),s.c.V(0,s.r),s.d.V(0,s.w))}},
gdr(){return this.a},
geJ(){return this.b},
geE(){return this.c},
gfc(){return this.d},
gds(){return this.e},
geI(){return this.f},
gfd(){return this.r},
geD(){return this.w}}
A.t8.prototype={
F(){return"BorderStyle."+this.b}}
A.dc.prototype={
aJ(a,b){var s=Math.max(0,this.b*b),r=b<=0?B.cd:this.c
return new A.dc(this.a,s,r,-1)},
hZ(){switch(this.c.a){case 1:var s=$.ar().bm()
s.sam(0,this.a)
s.shg(this.b)
s.scE(0,B.a1)
return s
case 0:s=$.ar().bm()
s.sam(0,B.aA)
s.shg(0)
s.scE(0,B.a1)
return s}},
geB(){return this.b*(1-(1+this.d)/2)},
gCx(){return this.b*(1+this.d)/2},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.C(s))return!1
return b instanceof A.dc&&b.a.l(0,s.a)&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
c3(){return"BorderSide"}}
A.bJ.prototype={
fk(a,b,c){return null},
D(a,b){return this.fk(a,b,!1)},
V(a,b){var s=this.D(0,b)
if(s==null)s=b.fk(0,this,!0)
return s==null?new A.fM(A.a([b,this],t.h_)):s},
cc(a,b){if(a==null)return this.aJ(0,b)
return null},
cd(a,b){if(a==null)return this.aJ(0,1-b)
return null},
j(a){return"ShapeBorder()"}}
A.dB.prototype={
gm2(){var s=Math.max(this.a.geB(),0)
return new A.bs(s,s,s,s)},
cc(a,b){if(a==null)return this.aJ(0,b)
return null},
cd(a,b){if(a==null)return this.aJ(0,1-b)
return null}}
A.fM.prototype={
gm2(){return B.c.zB(this.a,B.b2,new A.ach())},
fk(a,b,c){var s,r,q,p=b instanceof A.fM
if(!p){s=this.a
r=c?B.c.gS(s):B.c.gJ(s)
q=r.fk(0,b,c)
if(q==null)q=b.fk(0,r,!c)
if(q!=null){p=A.aB(s,!0,t.mD)
p[c?p.length-1:0]=q
return new A.fM(p)}}s=A.a([],t.h_)
if(c)B.c.I(s,this.a)
if(p)B.c.I(s,b.a)
else s.push(b)
if(!c)B.c.I(s,this.a)
return new A.fM(s)},
D(a,b){return this.fk(a,b,!1)},
aJ(a,b){var s=this.a,r=A.am(s).h("aC<1,bJ>")
return new A.fM(A.aB(new A.aC(s,new A.aci(b),r),!0,r.h("bn.E")))},
cc(a,b){return A.aqi(a,this,b)},
cd(a,b){return A.aqi(this,a,b)},
fD(a,b){return B.c.gJ(this.a).fD(a,b)},
hR(a,b,c){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
p.hR(a,b,c)
b=p.gm2().Y(c).yV(b)}},
l(a,b){if(b==null)return!1
if(this===b)return!0
if(J.X(b)!==A.C(this))return!1
return b instanceof A.fM&&A.cX(b.a,this.a)},
gt(a){return A.dj(this.a)},
j(a){var s=this.a,r=A.am(s).h("cC<1>")
return new A.aC(new A.cC(s,r),new A.acj(),r.h("aC<bn.E,i>")).b5(0," + ")}}
A.ach.prototype={
$2(a,b){return a.D(0,b.gm2())},
$S:223}
A.aci.prototype={
$1(a){return a.aJ(0,this.a)},
$S:224}
A.acj.prototype={
$1(a){return a.j(0)},
$S:451}
A.MF.prototype={}
A.tg.prototype={
F(){return"BoxShape."+this.b}}
A.BU.prototype={
fk(a,b,c){return null},
D(a,b){return this.fk(a,b,!1)},
fD(a,b){var s=$.ar().cq()
s.o0(a)
return s}}
A.dv.prototype={
gm2(){var s,r=this
if(r.gI2()){s=r.a.geB()
return new A.bs(s,s,s,s)}return new A.bs(r.d.geB(),r.a.geB(),r.b.geB(),r.c.geB())},
gpc(){var s,r,q=this,p=q.a,o=p.a,n=q.b
if(n.a.l(0,o)&&q.c.a.l(0,o)&&q.d.a.l(0,o))if(q.gI2()){s=p.c
if(n.c===s&&q.c.c===s&&q.d.c===s){r=p.d
p=n.d===r&&q.c.d===r&&q.d.d===r}else p=!1}else p=!1
else p=!1
return p},
gI2(){var s=this,r=s.a.b
return s.b.b===r&&s.c.b===r&&s.d.b===r},
fk(a,b,c){var s=this
if(b instanceof A.dv&&A.iV(s.a,b.a)&&A.iV(s.b,b.b)&&A.iV(s.c,b.c)&&A.iV(s.d,b.d))return new A.dv(A.fU(s.a,b.a),A.fU(s.b,b.b),A.fU(s.c,b.c),A.fU(s.d,b.d))
return null},
D(a,b){return this.fk(a,b,!1)},
aJ(a,b){var s=this
return new A.dv(s.a.aJ(0,b),s.b.aJ(0,b),s.c.aJ(0,b),s.d.aJ(0,b))},
cc(a,b){if(a instanceof A.dv)return A.ajY(a,this,b)
return this.Dd(a,b)},
cd(a,b){if(a instanceof A.dv)return A.ajY(this,a,b)
return this.De(a,b)},
uh(a,b,c,d,e){var s,r=this
if(r.gpc()){s=r.a
switch(s.c.a){case 0:return
case 1:switch(d.a){case 1:A.any(a,b,s)
break
case 0:if(c!=null&&!c.l(0,B.aG)){A.anz(a,b,s,c)
return}A.anA(a,b,s)
break}return}}A.asG(a,b,r.c,r.d,r.b,r.a)},
hR(a,b,c){return this.uh(a,b,null,B.Q,c)},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.C(s))return!1
return b instanceof A.dv&&b.a.l(0,s.a)&&b.b.l(0,s.b)&&b.c.l(0,s.c)&&b.d.l(0,s.d)},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s,r,q=this
if(q.gpc())return"Border.all("+q.a.j(0)+")"
s=A.a([],t.s)
r=q.a
if(!r.l(0,B.E))s.push("top: "+r.j(0))
r=q.b
if(!r.l(0,B.E))s.push("right: "+r.j(0))
r=q.c
if(!r.l(0,B.E))s.push("bottom: "+r.j(0))
r=q.d
if(!r.l(0,B.E))s.push("left: "+r.j(0))
return"Border("+B.c.b5(s,", ")+")"}}
A.dV.prototype={
gm2(){var s,r=this
if(r.gpc()){s=r.a.geB()
return new A.aF(s,s,s,s)}return new A.aF(r.b.geB(),r.a.geB(),r.c.geB(),r.d.geB())},
gpc(){var s,r,q,p=this,o=p.a,n=o.a,m=p.b
if(!m.a.l(0,n)||!p.c.a.l(0,n)||!p.d.a.l(0,n))return!1
s=o.b
if(m.b!==s||p.c.b!==s||p.d.b!==s)return!1
r=o.c
if(m.c!==r||p.c.c!==r||p.d.c!==r)return!1
q=o.d
if(!(m.d===q&&p.d.d===q&&p.c.d===q))return!1
return!0},
fk(a,b,c){var s,r,q,p=this,o=null
if(b instanceof A.dV){s=p.a
r=b.a
if(A.iV(s,r)&&A.iV(p.b,b.b)&&A.iV(p.c,b.c)&&A.iV(p.d,b.d))return new A.dV(A.fU(s,r),A.fU(p.b,b.b),A.fU(p.c,b.c),A.fU(p.d,b.d))
return o}if(b instanceof A.dv){s=b.a
r=p.a
if(!A.iV(s,r)||!A.iV(b.c,p.d))return o
q=p.b
if(!q.l(0,B.E)||!p.c.l(0,B.E)){if(!b.d.l(0,B.E)||!b.b.l(0,B.E))return o
return new A.dV(A.fU(s,r),q,p.c,A.fU(b.c,p.d))}return new A.dv(A.fU(s,r),b.b,A.fU(b.c,p.d),b.d)}return o},
D(a,b){return this.fk(a,b,!1)},
aJ(a,b){var s=this
return new A.dV(s.a.aJ(0,b),s.b.aJ(0,b),s.c.aJ(0,b),s.d.aJ(0,b))},
cc(a,b){if(a instanceof A.dV)return A.ajX(a,this,b)
return this.Dd(a,b)},
cd(a,b){if(a instanceof A.dV)return A.ajX(this,a,b)
return this.De(a,b)},
uh(a,b,c,d,e){var s,r,q,p=this
if(p.gpc()){s=p.a
switch(s.c.a){case 0:return
case 1:switch(d.a){case 1:A.any(a,b,s)
break
case 0:if(c!=null&&!c.l(0,B.aG)){A.anz(a,b,s,c)
return}A.anA(a,b,s)
break}return}}switch(e.a){case 0:r=p.c
q=p.b
break
case 1:r=p.b
q=p.c
break
default:r=null
q=null}A.asG(a,b,p.d,r,q,p.a)},
hR(a,b,c){return this.uh(a,b,null,B.Q,c)},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.C(s))return!1
return b instanceof A.dV&&b.a.l(0,s.a)&&b.b.l(0,s.b)&&b.c.l(0,s.c)&&b.d.l(0,s.d)},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this,r=A.a([],t.s),q=s.a
if(!q.l(0,B.E))r.push("top: "+q.j(0))
q=s.b
if(!q.l(0,B.E))r.push("start: "+q.j(0))
q=s.c
if(!q.l(0,B.E))r.push("end: "+q.j(0))
q=s.d
if(!q.l(0,B.E))r.push("bottom: "+q.j(0))
return"BorderDirectional("+B.c.b5(r,", ")+")"}}
A.bQ.prototype={
gdB(a){var s=this.c
return s==null?null:s.gm2()},
uN(a,b){var s,r,q
switch(this.w.a){case 1:s=A.pI(a.gaL(),a.gfG()/2)
r=$.ar().cq()
r.yj(s)
return r
case 0:r=this.d
if(r!=null){q=$.ar().cq()
q.eL(r.Y(b).dF(a))
return q}r=$.ar().cq()
r.o0(a)
return r}},
aJ(a,b){var s=this,r=null,q=A.w(r,s.a,b),p=A.anB(r,s.c,b),o=A.hI(r,s.d,b),n=A.anE(r,s.e,b),m=s.f
m=m==null?r:m.aJ(0,b)
return new A.bQ(q,s.b,p,o,n,m,s.w)},
gzY(){return this.e!=null},
cc(a,b){if(a==null)return this.aJ(0,b)
if(a instanceof A.bQ)return A.anC(a,this,b)
return this.CH(a,b)},
cd(a,b){if(a==null)return this.aJ(0,1-b)
if(a instanceof A.bQ)return A.anC(this,a,b)
return this.CI(a,b)},
l(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.X(b)!==A.C(r))return!1
if(b instanceof A.bQ)if(J.f(b.a,r.a))if(J.f(b.b,r.b))if(J.f(b.c,r.c))if(J.f(b.d,r.d))if(A.cX(b.e,r.e))if(J.f(b.f,r.f))s=b.w===r.w
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gt(a){var s=this,r=s.e
r=r==null?null:A.dj(r)
return A.S(s.a,s.b,s.c,s.d,r,s.f,null,s.w,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
Kg(a,b,c){var s
switch(this.w.a){case 0:s=this.d
if(s!=null)return s.Y(c).dF(new A.D(0,0,0+a.a,0+a.b)).C(0,b)
return!0
case 1:return b.ad(0,a.j8(B.k)).gd6()<=Math.min(a.a,a.b)/2}},
rY(a){return new A.ac2(this,a)}}
A.ac2.prototype={
G2(a,b,c,d){var s=this.b
switch(s.w.a){case 1:a.ip(b.gaL(),b.gfG()/2,c)
break
case 0:s=s.d
if(s==null||s.l(0,B.aG))a.cm(b,c)
else a.d7(s.Y(d).dF(b),c)
break}},
Y9(a,b,c){var s,r,q,p,o,n,m=this.b.e
if(m==null)return
for(s=m.length,r=0;r<m.length;m.length===s||(0,A.P)(m),++r){q=m[r]
p=$.ar().bm()
p.sam(0,q.a)
o=q.e
n=q.c
p.sa5b(new A.vh(o,n>0?n*0.57735+0.5:0))
o=b.dj(q.b)
n=q.d
this.G2(a,new A.D(o.a-n,o.b-n,o.c+n,o.d+n),p,c)}},
Y5(a,b,c){var s,r,q=this,p=q.b,o=p.b
if(o==null)return
if(q.e==null)q.e=new A.Ee(o,q.a)
switch(p.w.a){case 1:s=A.pI(b.gaL(),b.gfG()/2)
r=$.ar().cq()
r.yj(s)
break
case 0:p=p.d
if(p!=null){r=$.ar().cq()
r.eL(p.Y(c.d).dF(b))}else r=null
break
default:r=null}q.e.ug(a,b,r,c)},
m(){var s,r=this.e
if(r!=null){s=r.c
if(s!=null)s.H(0,new A.dz(r.gFg(),null,null))
s=r.d
if(s!=null)s.a.m()
r.d=null}this.NZ()},
py(a,b,c){var s,r,q,p,o=this,n=c.e,m=b.a,l=b.b,k=new A.D(m,l,m+n.a,l+n.b),j=c.d
o.Y9(a,k,j)
n=o.b
m=n.a
l=m==null
if(!l||n.f!=null){if(o.c!=null)s=n.f!=null&&!J.f(o.d,k)
else s=!0
if(s){r=$.ar().bm()
if(!l)r.sam(0,m)
m=n.f
if(m!=null){l=m.d.Y(j).Mu(k)
s=m.e.Y(j).Mu(k)
q=m.a
p=m.x3()
m=m.f
r.sCl(A.aku(l,s,q,p,m,null))
o.d=k}o.c=r}m=o.c
m.toString
o.G2(a,k,m,j)}o.Y5(a,k,c)
m=n.c
if(m!=null){l=n.d
l=l==null?null:l.Y(j)
m.uh(a,k,l,n.w,j)}},
j(a){return"BoxPainter for "+this.b.j(0)}}
A.m_.prototype={
F(){return"BoxFit."+this.b}}
A.Fm.prototype={}
A.iW.prototype={
aJ(a,b){var s=this
return new A.iW(s.d*b,s.e,s.a,s.b.a0(0,b),s.c*b)},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.C(s))return!1
return b instanceof A.iW&&b.a.l(0,s.a)&&b.b.l(0,s.b)&&b.c===s.c&&b.d===s.d&&b.e===s.e},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this
return"BoxShadow("+s.a.j(0)+", "+s.b.j(0)+", "+A.hB(s.c)+", "+A.hB(s.d)+", "+s.e.j(0)+")"}}
A.dw.prototype={
aJ(a,b){return new A.dw(this.b,this.a.aJ(0,b))},
cc(a,b){var s,r
if(a instanceof A.dw){s=A.aA(a.a,this.a,b)
r=A.T(a.b,this.b,b)
r.toString
return new A.dw(A.I(r,0,1),s)}return this.lf(a,b)},
cd(a,b){var s,r
if(a instanceof A.dw){s=A.aA(this.a,a.a,b)
r=A.T(this.b,a.b,b)
r.toString
return new A.dw(A.I(r,0,1),s)}return this.lg(a,b)},
fD(a,b){var s=$.ar().cq()
s.yj(this.DF(a))
return s},
hR(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=r.b*r.d
if(this.b===0)a.ip(b.gaL(),(b.gfG()+s)/2,r.hZ())
else a.ti(this.DF(b).dc(s/2),r.hZ())
break}},
DF(a){var s,r,q,p,o,n,m,l=this.b
if(l===0||a.c-a.a===a.d-a.b)return A.pI(a.gaL(),a.gfG()/2)
s=a.c
r=a.a
q=s-r
p=a.d
o=a.b
n=p-o
l=1-l
if(q<n){m=l*(n-q)/2
return new A.D(r,o+m,s,p-m)}else{m=l*(q-n)/2
return new A.D(r+m,o,s-m,p)}},
l(a,b){if(b==null)return!1
if(J.X(b)!==A.C(this))return!1
return b instanceof A.dw&&b.a.l(0,this.a)&&b.b===this.b},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this.b
if(s!==0)return"CircleBorder("+this.a.j(0)+", eccentricity: "+A.h(s)+")"
return"CircleBorder("+this.a.j(0)+")"}}
A.VY.prototype={
vV(a,b,c,d){var s=this
s.gbJ(s).cC(0)
switch(b.a){case 0:break
case 1:a.$1(!1)
break
case 2:a.$1(!0)
break
case 3:a.$1(!0)
s.gbJ(s).C2(c,$.ar().bm())
break}d.$0()
if(b===B.hv)s.gbJ(s).cz(0)
s.gbJ(s).cz(0)},
a14(a,b,c,d){this.vV(new A.VZ(this,a),b,c,d)},
a15(a,b,c,d){this.vV(new A.W_(this,a),b,c,d)},
a17(a,b,c,d){this.vV(new A.W0(this,a),b,c,d)}}
A.VZ.prototype={
$1(a){var s=this.a
return s.gbJ(s).IC(0,this.b,a)},
$S:24}
A.W_.prototype={
$1(a){var s=this.a
return s.gbJ(s).ID(this.b,a)},
$S:24}
A.W0.prototype={
$1(a){var s=this.a
return s.gbJ(s).a16(this.b,a)},
$S:24}
A.ke.prototype={
i(a,b){return this.b.i(0,b)},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.C(s))return!1
return s.O_(0,b)&&A.n(s).h("ke<ke.T>").b(b)&&A.ajg(b.b,s.b)},
gt(a){return A.S(A.C(this),this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"ColorSwatch(primary value: "+this.O0(0)+")"}}
A.fX.prototype={
c3(){return"Decoration"},
gdB(a){return B.b2},
gzY(){return!1},
cc(a,b){return null},
cd(a,b){return null},
Kg(a,b,c){return!0},
uN(a,b){throw A.c(A.O("This Decoration subclass does not expect to be used for clipping."))}}
A.BW.prototype={
m(){}}
A.Np.prototype={}
A.mB.prototype={
F(){return"ImageRepeat."+this.b}}
A.ki.prototype={
l(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.X(b)!==A.C(r))return!1
if(b instanceof A.ki)if(b.a.l(0,r.a))if(b.d===r.d)if(B.P.l(0,B.P))s=!0
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gt(a){return A.S(this.a,null,this.d,B.P,null,B.bu,!1,1,1,B.d5,!1,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=A.a([this.a.j(0)],t.s),r=!(this.d===B.mu&&!0)
if(r)s.push(this.d.j(0))
s.push(B.P.j(0))
s.push("scale 1")
s.push("opacity 1")
s.push(B.d5.j(0))
return"DecorationImage("+B.c.b5(s,", ")+")"}}
A.Ee.prototype={
ug(a,b,c,d){var s,r,q,p,o=this,n=null,m=o.a,l=m.a.Y(d),k=l.a
if(k==null)k=l
s=o.c
r=s==null
if(r)q=n
else{q=s.a
if(q==null)q=s}if(k!==q){p=new A.dz(o.gFg(),n,n)
if(!r)s.H(0,p)
o.c=l
l.X(0,p)}if(o.d==null)return
k=c!=null
if(k){a.cC(0)
a.fR(0,c)}s=o.d
r=s.a
A.asH(B.P,a,n,n,s.c,B.d5,m.d,!1,r,!1,!1,1,b,B.bu,s.b)
if(k)a.cz(0)},
Vw(a,b){var s,r,q=this
if(J.f(q.d,a))return
s=q.d
if(s!=null)if(a.a.KD(s.a)){r=s.b
s=r===r&&a.c==s.c}else s=!1
else s=!1
if(s){a.a.m()
return}s=q.d
if(s!=null)s.a.m()
q.d=a
if(!b)q.b.$0()},
j(a){return"DecorationImagePainter(stream: "+A.h(this.c)+", image: "+A.h(this.d)+") for "+this.a.j(0)}}
A.dg.prototype={
gco(){var s=this
return s.gdm(s)+s.gdn(s)+s.gel(s)+s.gek()},
a0p(a){var s=this
switch(a.a){case 0:return s.gco()
case 1:return s.gbc(s)+s.gbg(s)}},
D(a,b){var s=this
return new A.ls(s.gdm(s)+b.gdm(b),s.gdn(s)+b.gdn(b),s.gel(s)+b.gel(b),s.gek()+b.gek(),s.gbc(s)+b.gbc(b),s.gbg(s)+b.gbg(b))},
j9(a,b,c){var s=this
return new A.ls(A.I(s.gdm(s),b.a,c.a),A.I(s.gdn(s),b.c,c.b),A.I(s.gel(s),0,c.c),A.I(s.gek(),0,c.d),A.I(s.gbc(s),b.b,c.e),A.I(s.gbg(s),b.d,c.f))},
j(a){var s=this
if(s.gel(s)===0&&s.gek()===0){if(s.gdm(s)===0&&s.gdn(s)===0&&s.gbc(s)===0&&s.gbg(s)===0)return"EdgeInsets.zero"
if(s.gdm(s)===s.gdn(s)&&s.gdn(s)===s.gbc(s)&&s.gbc(s)===s.gbg(s))return"EdgeInsets.all("+B.d.N(s.gdm(s),1)+")"
return"EdgeInsets("+B.d.N(s.gdm(s),1)+", "+B.d.N(s.gbc(s),1)+", "+B.d.N(s.gdn(s),1)+", "+B.d.N(s.gbg(s),1)+")"}if(s.gdm(s)===0&&s.gdn(s)===0)return"EdgeInsetsDirectional("+B.d.N(s.gel(s),1)+", "+B.d.N(s.gbc(s),1)+", "+B.d.N(s.gek(),1)+", "+B.d.N(s.gbg(s),1)+")"
return"EdgeInsets("+B.d.N(s.gdm(s),1)+", "+B.d.N(s.gbc(s),1)+", "+B.d.N(s.gdn(s),1)+", "+B.d.N(s.gbg(s),1)+") + EdgeInsetsDirectional("+B.d.N(s.gel(s),1)+", 0.0, "+B.d.N(s.gek(),1)+", 0.0)"},
l(a,b){var s=this
if(b==null)return!1
return b instanceof A.dg&&b.gdm(b)===s.gdm(s)&&b.gdn(b)===s.gdn(s)&&b.gel(b)===s.gel(s)&&b.gek()===s.gek()&&b.gbc(b)===s.gbc(s)&&b.gbg(b)===s.gbg(s)},
gt(a){var s=this
return A.S(s.gdm(s),s.gdn(s),s.gel(s),s.gek(),s.gbc(s),s.gbg(s),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.bs.prototype={
gdm(a){return this.a},
gbc(a){return this.b},
gdn(a){return this.c},
gbg(a){return this.d},
gel(a){return 0},
gek(){return 0},
yV(a){var s=this
return new A.D(a.a+s.a,a.b+s.b,a.c-s.c,a.d-s.d)},
D(a,b){if(b instanceof A.bs)return this.V(0,b)
return this.CK(0,b)},
j9(a,b,c){var s=this
return new A.bs(A.I(s.a,b.a,c.a),A.I(s.b,b.b,c.e),A.I(s.c,b.c,c.b),A.I(s.d,b.d,c.f))},
ad(a,b){var s=this
return new A.bs(s.a-b.a,s.b-b.b,s.c-b.c,s.d-b.d)},
V(a,b){var s=this
return new A.bs(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
a0(a,b){var s=this
return new A.bs(s.a*b,s.b*b,s.c*b,s.d*b)},
Y(a){return this},
om(a,b,c,d){var s=this,r=b==null?s.a:b,q=d==null?s.b:d,p=c==null?s.c:c
return new A.bs(r,q,p,a==null?s.d:a)},
yH(a){return this.om(a,null,null,null)}}
A.aF.prototype={
gel(a){return this.a},
gbc(a){return this.b},
gek(){return this.c},
gbg(a){return this.d},
gdm(a){return 0},
gdn(a){return 0},
D(a,b){if(b instanceof A.aF)return this.V(0,b)
return this.CK(0,b)},
ad(a,b){var s=this
return new A.aF(s.a-b.a,s.b-b.b,s.c-b.c,s.d-b.d)},
V(a,b){var s=this
return new A.aF(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
a0(a,b){var s=this
return new A.aF(s.a*b,s.b*b,s.c*b,s.d*b)},
Y(a){var s=this
switch(a.a){case 0:return new A.bs(s.c,s.b,s.a,s.d)
case 1:return new A.bs(s.a,s.b,s.c,s.d)}}}
A.ls.prototype={
a0(a,b){var s=this
return new A.ls(s.a*b,s.b*b,s.c*b,s.d*b,s.e*b,s.f*b)},
Y(a){var s=this
switch(a.a){case 0:return new A.bs(s.d+s.a,s.e,s.c+s.b,s.f)
case 1:return new A.bs(s.c+s.a,s.e,s.d+s.b,s.f)}},
gdm(a){return this.a},
gdn(a){return this.b},
gel(a){return this.c},
gek(){return this.d},
gbc(a){return this.e},
gbg(a){return this.f}}
A.acf.prototype={}
A.ail.prototype={
$1(a){return a<=this.a},
$S:227}
A.ahR.prototype={
$1(a){var s=this,r=A.w(A.arA(s.a,s.b,a),A.arA(s.c,s.d,a),s.e)
r.toString
return r},
$S:228}
A.a03.prototype={
x3(){var s,r,q,p=this.b
if(p!=null)return p
p=this.a.length
s=1/(p-1)
if(p>4294967295)A.L(A.bv(p,0,4294967295,"length",null))
r=J.mG(new Array(p),t.i)
for(q=0;q<p;++q)r[q]=q*s
return r}}
A.ja.prototype={
aJ(a,b){var s=this,r=s.a,q=A.am(r).h("aC<1,F>")
return new A.ja(s.d,s.e,s.f,A.aB(new A.aC(r,new A.a25(b),q),!0,q.h("bn.E")),s.b,null)},
cc(a,b){var s=A.aoF(a,this,b)
return s},
cd(a,b){var s=A.aoF(this,a,b)
return s},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.C(s))return!1
return b instanceof A.ja&&b.d.l(0,s.d)&&b.e.l(0,s.e)&&b.f===s.f&&A.cX(b.a,s.a)&&A.cX(b.b,s.b)},
gt(a){var s=this,r=A.dj(s.a),q=s.b
q=q==null?null:A.dj(q)
return A.S(s.d,s.e,s.f,s.c,r,q,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this,r=A.a(["begin: "+s.d.j(0),"end: "+s.e.j(0),"colors: "+A.h(s.a)],t.s),q=s.b
if(q!=null)r.push("stops: "+A.h(q))
r.push("tileMode: "+s.f.j(0))
return"LinearGradient("+B.c.b5(r,", ")+")"}}
A.a25.prototype={
$1(a){var s=A.w(null,a,this.a)
s.toString
return s},
$S:60}
A.a0Y.prototype={
a_(a){var s,r,q,p
for(s=this.b,r=s.gaV(s),r=new A.dZ(J.av(r.a),r.b),q=A.n(r).z[1];r.q();){p=r.a;(p==null?q.a(p):p).m()}s.a_(0)
for(s=this.a,r=s.gaV(s),r=new A.dZ(J.av(r.a),r.b),q=A.n(r).z[1];r.q();){p=r.a
if(p==null)p=q.a(p)
p.a.H(0,p.b)}s.a_(0)
this.f=0},
m7(a){var s,r,q,p=this,o=p.c.u(0,a)
if(o!=null){s=o.a
r=o.d
r===$&&A.b()
if(s.w)A.L(A.a6(u.V))
B.c.u(s.x,r)
o.Dh()}q=p.a.u(0,a)
if(q!=null){q.a.H(0,q.b)
return!0}o=p.b.u(0,a)
if(o!=null){s=p.f
r=o.b
r.toString
p.f=s-r
o.m()
return!0}return!1},
Hr(a,b,c){var s,r=this,q=b.b
if(q!=null&&q<=104857600&&!0){s=r.f
q.toString
r.f=s+q
r.b.k(0,a,b)
r.SE(c)}else b.m()},
xT(a,b,c){var s=this.c.bH(0,a,new A.a10(this,b,a))
if(s.b==null)s.b=c},
LB(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g={}
g.a=g.b=null
q=i.a
p=q.i(0,b)
o=p==null?h:p.a
g.c=o
if(o!=null)return o
p=i.b
n=p.u(0,b)
if(n!=null){g=n.a
i.xT(b,g,n.b)
p.k(0,b,n)
return g}m=i.c.i(0,b)
if(m!=null){g=m.a
i.Hr(b,new A.yj(g,m.b,g.mx()),h)
return g}try{o=g.c=c.$0()
i.xT(b,o,h)
p=o}catch(l){s=A.af(l)
r=A.au(l)
d.$2(s,r)
return h}g.d=!1
k=A.b7("pendingImage")
j=new A.dz(new A.a11(g,i,b,!0,k),h,h)
k.b=new A.Px(p,j)
q.k(0,b,k.aE())
g.c.X(0,j)
return g.c},
R(a,b){return this.a.i(0,b)!=null||this.b.i(0,b)!=null},
SE(a){var s,r,q,p,o,n=this,m=n.b,l=A.n(m).h("ba<1>")
while(!0){if(!(n.f>104857600||m.a>1000))break
s=new A.ba(m,l)
r=s.ga5(s)
if(!r.q())A.L(A.bS())
q=r.gG(r)
p=m.i(0,q)
s=n.f
o=p.b
o.toString
n.f=s-o
p.m()
m.u(0,q)}}}
A.a10.prototype={
$0(){return A.aBP(this.b,new A.a1_(this.a,this.c))},
$S:229}
A.a1_.prototype={
$0(){this.a.c.u(0,this.b)},
$S:0}
A.a11.prototype={
$2(a,b){var s,r,q,p,o,n=this
if(a!=null){s=a.a
r=s.gbU(s)*s.gbo(s)*4
s.m()}else r=null
s=n.a
q=s.c
p=new A.yj(q,r,q.mx())
q=n.b
o=n.c
q.xT(o,s.c,r)
if(n.d)q.Hr(o,p,s.a)
else p.m()
q.a.u(0,o)
if(!s.d){q=n.e.aE()
q.a.H(0,q.b)}s.d=!0},
$S:230}
A.MO.prototype={
m(){$.bT.cy$.push(new A.ac6(this))}}
A.ac6.prototype={
$1(a){var s=this.a,r=s.c
if(r!=null)r.m()
s.c=null},
$S:2}
A.yj.prototype={}
A.r7.prototype={
RM(a,b,c){var s=new A.aed(this,b)
this.d=s
if(a.w)A.L(A.a6(u.V))
a.x.push(s)},
j(a){return"<optimized out>#"+A.bP(this)}}
A.aed.prototype={
$0(){var s,r,q
this.b.$0()
s=this.a
r=s.a
q=s.d
q===$&&A.b()
if(r.w)A.L(A.a6(u.V))
B.c.u(r.x,q)
s.Dh()},
$S:0}
A.Px.prototype={}
A.p2.prototype={
l(a,b){var s=this
if(b==null)return!1
if(J.X(b)!==A.C(s))return!1
return b instanceof A.p2&&b.a==s.a&&b.b==s.b&&J.f(b.c,s.c)&&b.d==s.d&&J.f(b.e,s.e)&&b.f==s.f},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.e,s.f,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s,r=this,q=""+"ImageConfiguration(",p=r.a
if(p!=null){q+="bundle: "+p.j(0)
s=!0}else s=!1
p=r.b
if(p!=null){if(s)q+=", "
p=q+("devicePixelRatio: "+B.d.N(p,1))
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
A.dX.prototype={
Y(a){var s=new A.a1d()
this.Tc(a,new A.a1b(this,a,s),new A.a1c(this,a,s))
return s},
Tc(a,b,c){var s,r,q,p,o,n={}
n.a=null
n.b=!1
s=new A.a18(n,c)
r=null
try{r=this.u5(a)}catch(o){q=A.af(o)
p=A.au(o)
s.$2(q,p)
return}r.aF(new A.a17(n,this,b,s),t.H).fQ(s)},
pI(a,b,c,d){var s,r
if(b.a!=null){s=$.eY.fX$
s===$&&A.b()
s.LB(0,c,new A.a19(b),d)
return}s=$.eY.fX$
s===$&&A.b()
r=s.LB(0,c,new A.a1a(this,c),d)
if(r!=null)b.Cb(r)},
pf(a,b,c){throw A.c(A.O("Implement loadBuffer for faster image loading"))},
pg(a,b){return this.pf(0,a,$.eY.ga4s())},
j(a){return"ImageConfiguration()"}}
A.a1b.prototype={
$2(a,b){this.a.pI(this.b,this.c,a,b)},
$S(){return A.n(this.a).h("~(dX.T,~(B,bO?))")}}
A.a1c.prototype={
$3(a,b,c){return this.ME(a,b,c)},
ME(a,b,c){var s=0,r=A.a2(t.H),q=this,p
var $async$$3=A.Y(function(d,e){if(d===1)return A.a_(e,r)
while(true)switch(s){case 0:s=2
return A.a4(null,$async$$3)
case 2:p=q.c
if(p.a==null)p.Cb(new A.acM(A.a([],t.fE),A.a([],t.b)))
p=p.a
p.toString
p.kV(A.bq("while resolving an image"),b,null,!0,c)
return A.a0(null,r)}})
return A.a1($async$$3,r)},
$S(){return A.n(this.a).h("ah<~>(dX.T?,B,bO?)")}}
A.a18.prototype={
MD(a,b){var s=0,r=A.a2(t.H),q,p=this,o
var $async$$2=A.Y(function(c,d){if(c===1)return A.a_(d,r)
while(true)switch(s){case 0:o=p.a
if(o.b){s=1
break}p.b.$3(o.a,a,b)
o.b=!0
case 1:return A.a0(q,r)}})
return A.a1($async$$2,r)},
$2(a,b){return this.MD(a,b)},
$S:231}
A.a17.prototype={
$1(a){var s,r,q,p=this
p.a.a=a
try{p.c.$2(a,p.d)}catch(q){s=A.af(q)
r=A.au(q)
p.d.$2(s,r)}},
$S(){return A.n(this.b).h("as(dX.T)")}}
A.a19.prototype={
$0(){var s=this.a.a
s.toString
return s},
$S:107}
A.a1a.prototype={
$0(){return this.a.pg(this.b,$.eY.ga4v())},
$S:107}
A.hG.prototype={
l(a,b){var s=this
if(b==null)return!1
if(J.X(b)!==A.C(s))return!1
return b instanceof A.hG&&b.a===s.a&&b.b===s.b&&b.c===s.c},
gt(a){return A.S(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"AssetBundleImageKey(bundle: "+this.a.j(0)+', name: "'+this.b+'", scale: '+A.h(this.c)+")"}}
A.BA.prototype={
pg(a,b){return A.aoS(this.lw(a,b,null),a.b,null,a.c)},
pf(a,b,c){return A.aoS(this.lw(b,null,c),b.b,null,b.c)},
lw(a,b,c){return this.X2(a,b,c)},
X2(a,b,c){var s=0,r=A.a2(t.gP),q,p=2,o,n,m,l,k,j,i
var $async$lw=A.Y(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:s=b!=null?3:4
break
case 3:n=null
p=6
s=9
return A.a4(a.a.tY(a.b),$async$lw)
case 9:n=e
p=2
s=8
break
case 6:p=5
j=o
if(A.af(j) instanceof A.kn){k=$.eY.fX$
k===$&&A.b()
k.m7(a)
throw j}else throw j
s=8
break
case 5:s=2
break
case 8:if(n==null){k=$.eY.fX$
k===$&&A.b()
k.m7(a)
throw A.c(A.a6("Unable to read data"))}q=b.$1(n)
s=1
break
case 4:m=null
p=11
s=14
return A.a4(a.a.cZ(0,a.b),$async$lw)
case 14:m=e
p=2
s=13
break
case 11:p=10
i=o
if(A.af(i) instanceof A.kn){k=$.eY.fX$
k===$&&A.b()
k.m7(a)
throw i}else throw i
s=13
break
case 10:s=2
break
case 13:if(m==null){k=$.eY.fX$
k===$&&A.b()
k.m7(a)
throw A.c(A.a6("Unable to read data"))}c.toString
q=c.$1(A.cP(m.buffer,0,null))
s=1
break
case 1:return A.a0(q,r)
case 2:return A.a_(o,r)}})
return A.a1($async$lw,r)}}
A.acM.prototype={}
A.hH.prototype={
gmy(){return this.a},
u5(a){var s,r={},q=a.a
if(q==null)q=$.TZ()
r.a=r.b=null
q.a58("AssetManifest.08578714.json",A.aFl(),t.jd).aF(new A.Up(r,this,a,q),t.H).fQ(new A.Uq(r))
s=r.a
if(s!=null)return s
s=new A.a8($.a9,t.hv)
r.b=new A.aL(s,t.q8)
return s},
SO(a,b,c){var s,r,q,p=b.b
if(p==null||c==null||J.fS(c))return a
s=A.alb(t.i,t.N)
for(r=J.av(c);r.q();){q=r.gG(r)
s.k(0,this.Gb(q),q)}p.toString
return this.U3(s,p)},
U3(a,b){var s,r,q
if(a.nt(b)){s=a.i(0,b)
s.toString
return s}r=a.a4V(b)
q=a.a35(b)
if(r==null)return a.i(0,q)
if(q==null)return a.i(0,r)
if(b<2||b>(r+q)/2)return a.i(0,q)
else return a.i(0,r)},
Gb(a){var s,r,q,p
if(a===this.a)return 1
s=A.lg(a,0,null)
r=s.gjH().length>1?s.gjH()[s.gjH().length-2]:""
q=$.at1().oV(r)
if(q!=null&&q.b.length-1>0){p=q.b[1]
p.toString
return A.ami(p)}return 1},
l(a,b){if(b==null)return!1
if(J.X(b)!==A.C(this))return!1
return b instanceof A.hH&&b.gmy()===this.gmy()&&!0},
gt(a){return A.S(this.gmy(),this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"AssetImage(bundle: "+A.h(this.b)+', name: "'+this.gmy()+'")'}}
A.Up.prototype={
$1(a){var s,r=this,q=r.b,p=q.gmy(),o=a==null?null:J.aR(a,q.gmy())
o=q.SO(p,r.c,o)
o.toString
s=new A.hG(r.d,o,q.Gb(o))
q=r.a
p=q.b
if(p!=null)p.bV(0,s)
else q.a=new A.br(s,t.rT)},
$S:233}
A.Uq.prototype={
$2(a,b){this.a.b.dv(a,b)},
$S:28}
A.eT.prototype={
cT(a){return new A.eT(this.a.cT(0),this.b,this.c)},
j(a){var s=this.c
s=s!=null?s+" ":""
return s+this.a.j(0)+" @ "+A.hB(this.b)+"x"},
gt(a){return A.S(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
l(a,b){var s=this
if(b==null)return!1
if(J.X(b)!==A.C(s))return!1
return b instanceof A.eT&&b.a===s.a&&b.b===s.b&&b.c==s.c}}
A.dz.prototype={
gt(a){return A.S(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
l(a,b){var s=this
if(b==null)return!1
if(J.X(b)!==A.C(s))return!1
return b instanceof A.dz&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&J.f(b.c,s.c)},
a5A(a,b){return this.a.$2(a,b)}}
A.a1d.prototype={
Cb(a){var s,r=this
r.a=a
s=r.b
if(s!=null){r.b=null
a.f=!0
B.c.Z(s,a.go_(a))
r.a.f=!1}},
X(a,b){var s=this.a
if(s!=null)return s.X(0,b)
s=this.b;(s==null?this.b=A.a([],t.fE):s).push(b)},
H(a,b){var s,r=this.a
if(r!=null)return r.H(0,b)
for(s=0;r=this.b,s<r.length;++s)if(J.f(r[s],b)){r=this.b
r.toString
B.c.eb(r,s)
break}}}
A.a1e.prototype={
m(){var s=this.a;--s.r
s.qT()
this.a=null}}
A.ku.prototype={
X(a,b){var s,r,q,p,o,n,m,l=this
if(l.w)A.L(A.a6(u.V))
l.e=!0
l.a.push(b)
o=l.b
if(o!=null)try{o=o.cT(0)
n=l.f
b.a.$2(o,!n)}catch(m){s=A.af(m)
r=A.au(m)
l.LR(A.bq("by a synchronously-called image listener"),s,r)}o=l.c
if(o!=null&&b.c!=null)try{n=b.c
n.toString
n.$2(o.a,o.b)}catch(s){q=A.af(s)
p=A.au(s)
if(!J.f(q,l.c.a))A.eb(new A.bM(q,p,"image resource service",A.bq("by a synchronously-called image error listener"),null,!1))}},
mx(){if(this.w)A.L(A.a6(u.V));++this.r
return new A.a1e(this)},
H(a,b){var s,r,q,p,o,n=this
if(n.w)A.L(A.a6(u.V))
for(s=n.a,r=0;r<s.length;++r)if(J.f(s[r],b)){B.c.eb(s,r)
break}if(s.length===0){s=n.x
q=A.a(s.slice(0),A.am(s))
for(p=q.length,o=0;o<q.length;q.length===p||(0,A.P)(q),++o)q[o].$0()
B.c.a_(s)
n.qT()}},
qT(){var s,r=this
if(!r.e||r.w||r.a.length!==0||r.r!==0)return
s=r.b
if(s!=null)s.a.m()
r.b=null
r.w=!0},
Cf(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.w)A.L(A.a6(u.V))
p=i.b
if(p!=null)p.a.m()
i.b=a
p=i.a
if(p.length===0)return
o=A.aB(p,!0,t.tg)
for(p=o.length,n=a.a,m=a.b,l=a.c,k=0;k<p;++k){s=o[k]
try{s.a5A(new A.eT(n.cT(0),m,l),!1)}catch(j){r=A.af(j)
q=A.au(j)
i.LR(A.bq("by an image listener"),r,q)}}},
kV(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i="image resource service"
this.c=new A.bM(b,e,i,a,c,d)
o=this.a
n=t.pE
m=A.aB(new A.dp(new A.aC(o,new A.a1f(),A.am(o).h("aC<1,~(B,bO?)?>")),n),!0,n.h("o.E"))
s=!1
for(o=m.length,l=0;l<o;++l){r=m[l]
try{r.$2(b,e)
s=!0}catch(k){q=A.af(k)
p=A.au(k)
if(!J.f(q,b)){n=A.bq("when reporting an error to an image listener")
j=$.fR()
if(j!=null)j.$1(new A.bM(q,p,i,n,null,!1))}}}if(!s){o=this.c
o.toString
A.eb(o)}},
LR(a,b,c){return this.kV(a,b,null,!1,c)},
a6F(a){var s,r,q,p
if(this.w)A.L(A.a6(u.V))
s=this.a
if(s.length!==0){r=t.zG
q=A.aB(new A.dp(new A.aC(s,new A.a1g(),A.am(s).h("aC<1,~(eS)?>")),r),!0,r.h("o.E"))
for(s=q.length,p=0;p<s;++p)q[p].$1(a)}}}
A.a1f.prototype={
$1(a){return a.c},
$S:236}
A.a1g.prototype={
$1(a){return a.b},
$S:237}
A.It.prototype={
Rz(a,b,c,d,e){this.d=c
b.dV(this.gV2(),new A.a3a(this,d),t.H)},
V3(a){this.z=a
if(this.a.length!==0)this.lp()},
UV(a){var s,r,q,p=this
p.cx=!1
if(p.a.length===0)return
s=p.ay
if(s!=null){r=p.ax
r===$&&A.b()
r=a.a-r.a>=s.a}else r=!0
if(r){s=p.at
p.EK(new A.eT(s.gfs(s).cT(0),p.Q,p.d))
p.ax=a
s=p.at
p.ay=s.gJt(s)
s=p.at
s.gfs(s).m()
p.at=null
q=B.f.hj(p.ch,p.z.gmn())
if(p.z.gux()===-1||q<=p.z.gux())p.lp()
return}s.toString
r=p.ax
r===$&&A.b()
p.CW=A.cf(new A.aT(B.d.ba((s.a-(a.a-r.a))*$.arI)),new A.a39(p))},
lp(){var s=0,r=A.a2(t.H),q,p=2,o,n=this,m,l,k,j,i
var $async$lp=A.Y(function(a,b){if(a===1){o=b
s=p}while(true)switch(s){case 0:j=n.at
if(j!=null)j.gfs(j).m()
n.at=null
p=4
s=7
return A.a4(n.z.q1(),$async$lp)
case 7:n.at=b
p=2
s=6
break
case 4:p=3
i=o
m=A.af(i)
l=A.au(i)
n.kV(A.bq("resolving an image frame"),m,n.as,!0,l)
s=1
break
s=6
break
case 3:s=2
break
case 6:if(n.z.gmn()===1){if(n.a.length===0){s=1
break}j=n.at
n.EK(new A.eT(j.gfs(j).cT(0),n.Q,n.d))
j=n.at
j.gfs(j).m()
n.at=null
s=1
break}n.GD()
case 1:return A.a0(q,r)
case 2:return A.a_(o,r)}})
return A.a1($async$lp,r)},
GD(){if(this.cx)return
this.cx=!0
$.bT.q9(this.gUU())},
EK(a){this.Cf(a);++this.ch},
X(a,b){var s,r=this
if(r.a.length===0){s=r.z
if(s!=null)s=r.b==null||s.gmn()>1
else s=!1}else s=!1
if(s)r.lp()
r.CQ(0,b)},
H(a,b){var s,r=this
r.CR(0,b)
if(r.a.length===0){s=r.CW
if(s!=null)s.al(0)
r.CW=null}},
qT(){this.Oq()
if(this.w)this.y=null}}
A.a3a.prototype={
$2(a,b){this.a.kV(A.bq("resolving an image codec"),a,this.b,!0,b)},
$S:28}
A.a39.prototype={
$0(){this.a.GD()},
$S:0}
A.Os.prototype={}
A.Or.prototype={}
A.Bs.prototype={}
A.ky.prototype={
l(a,b){var s
if(b==null)return!1
if(b instanceof A.ky)if(b.a===this.a)if(b.b==this.b)s=A.cX(b.f,this.f)
else s=!1
else s=!1
else s=!1
return s},
gt(a){return A.S(this.a,this.b,this.c,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"InlineSpanSemanticsInformation{text: "+this.a+", semanticsLabel: "+A.h(this.b)+", recognizer: "+A.h(this.c)+"}"}}
A.h8.prototype={
N_(a){var s={}
s.a=null
this.aW(new A.a1q(s,a,new A.Bs()))
return s.a},
Md(a){var s,r=new A.bA("")
this.IM(r,!0,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
ae(a,b){var s={}
if(b<0)return null
s.a=null
this.aW(new A.a1p(s,b,new A.Bs()))
return s.a},
l(a,b){if(b==null)return!1
if(this===b)return!0
if(J.X(b)!==A.C(this))return!1
return b instanceof A.h8&&J.f(b.a,this.a)},
gt(a){return J.p(this.a)}}
A.a1q.prototype={
$1(a){var s=a.N0(this.b,this.c)
this.a.a=s
return s==null},
$S:45}
A.a1p.prototype={
$1(a){var s=a.a1a(this.b,this.c)
this.a.a=s
return s==null},
$S:45}
A.dG.prototype={
aJ(a,b){var s=this.a.aJ(0,b)
return new A.dG(this.b.a0(0,b),s)},
cc(a,b){var s,r,q=this
if(a instanceof A.dG){s=A.aA(a.a,q.a,b)
r=A.hI(a.b,q.b,b)
r.toString
return new A.dG(r,s)}if(a instanceof A.dw){s=A.aA(a.a,q.a,b)
return new A.eg(q.b,1-b,a.b,s)}return q.lf(a,b)},
cd(a,b){var s,r,q=this
if(a instanceof A.dG){s=A.aA(q.a,a.a,b)
r=A.hI(q.b,a.b,b)
r.toString
return new A.dG(r,s)}if(a instanceof A.dw){s=A.aA(q.a,a.a,b)
return new A.eg(q.b,b,a.b,s)}return q.lg(a,b)},
fD(a,b){var s=$.ar().cq()
s.eL(this.b.Y(b).dF(a))
return s},
hR(a,b,c){var s,r,q,p,o=this.a
switch(o.c.a){case 0:break
case 1:s=this.b
if(o.b===0)a.d7(s.Y(c).dF(b),o.hZ())
else{r=$.ar().bm()
r.sam(0,o.a)
q=s.Y(c).dF(b)
p=q.dc(-o.geB())
a.th(q.dc(o.gCx()),p,r)}break}},
l(a,b){if(b==null)return!1
if(J.X(b)!==A.C(this))return!1
return b instanceof A.dG&&b.a.l(0,this.a)&&b.b.l(0,this.b)},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"RoundedRectangleBorder("+this.a.j(0)+", "+this.b.j(0)+")"}}
A.eg.prototype={
aJ(a,b){var s=this.a.aJ(0,b)
return new A.eg(this.b.a0(0,b),b,this.d,s)},
cc(a,b){var s,r,q,p=this
if(a instanceof A.dG){s=A.aA(a.a,p.a,b)
r=A.hI(a.b,p.b,b)
r.toString
return new A.eg(r,p.c*b,p.d,s)}if(a instanceof A.dw){s=A.aA(a.a,p.a,b)
r=p.c
return new A.eg(p.b,r+(1-r)*(1-b),a.b,s)}if(a instanceof A.eg){s=A.aA(a.a,p.a,b)
r=A.hI(a.b,p.b,b)
r.toString
q=A.T(a.c,p.c,b)
q.toString
return new A.eg(r,q,p.d,s)}return p.lf(a,b)},
cd(a,b){var s,r,q,p=this
if(a instanceof A.dG){s=A.aA(p.a,a.a,b)
r=A.hI(p.b,a.b,b)
r.toString
return new A.eg(r,p.c*(1-b),p.d,s)}if(a instanceof A.dw){s=A.aA(p.a,a.a,b)
r=p.c
return new A.eg(p.b,r+(1-r)*b,a.b,s)}if(a instanceof A.eg){s=A.aA(p.a,a.a,b)
r=A.hI(p.b,a.b,b)
r.toString
q=A.T(p.c,a.c,b)
q.toString
return new A.eg(r,q,p.d,s)}return p.lg(a,b)},
GA(a){var s,r,q,p,o,n,m,l,k=this.c
if(k===0||a.c-a.a===a.d-a.b)return a
s=a.c
r=a.a
q=s-r
p=a.d
o=a.b
n=p-o
m=1-this.d
if(q<n){l=k*((n-q)/2)*m
return new A.D(r,o+l,s,p-l)}else{l=k*((q-n)/2)*m
return new A.D(r+l,o,s-l,p)}},
DD(a,b){var s,r,q,p=this.b.Y(b),o=this.c
if(o===0)return p
s=this.d
if(s!==0){r=a.c-a.a
q=a.d-a.b
s=0.5+s/2
if(r<q){o=A.on(p,A.BS(new A.bu(r/2,s*q/2)),o)
o.toString
return o}else{o=A.on(p,A.BS(new A.bu(s*r/2,q/2)),o)
o.toString
return o}}return A.on(p,A.eI(a.gfG()/2),o)},
fD(a,b){var s=$.ar().cq(),r=this.DD(a,b)
r.toString
s.eL(r.dF(this.GA(a)))
return s},
hR(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=this.DD(b,c)
s.toString
a.d7(s.dF(this.GA(b)).dc(r.b*r.d/2),r.hZ())
break}},
l(a,b){var s=this
if(b==null)return!1
if(J.X(b)!==A.C(s))return!1
return b instanceof A.eg&&b.a.l(0,s.a)&&b.b.l(0,s.b)&&b.c===s.c},
gt(a){return A.S(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this,r="RoundedRectangleBorder(",q=s.d
if(q!==0)return r+s.a.j(0)+", "+s.b.j(0)+", "+B.d.N(s.c*100,1)+u.T+B.d.N(q*100,1)+"% oval)"
return r+s.a.j(0)+", "+s.b.j(0)+", "+B.d.N(s.c*100,1)+"% of the way to being a CircleBorder)"}}
A.ez.prototype={
aJ(a,b){return new A.ez(this.a.aJ(0,b))},
cc(a,b){var s,r=this
if(a instanceof A.ez)return new A.ez(A.aA(a.a,r.a,b))
if(a instanceof A.dw){s=A.aA(a.a,r.a,b)
return new A.ei(1-b,a.b,s)}if(a instanceof A.dG){s=A.aA(a.a,r.a,b)
return new A.ej(a.b,1-b,s)}return r.lf(a,b)},
cd(a,b){var s,r=this
if(a instanceof A.ez)return new A.ez(A.aA(r.a,a.a,b))
if(a instanceof A.dw){s=A.aA(r.a,a.a,b)
return new A.ei(b,a.b,s)}if(a instanceof A.dG){s=A.aA(r.a,a.a,b)
return new A.ej(a.b,b,s)}return r.lg(a,b)},
fD(a,b){var s=a.gfG()/2,r=$.ar().cq()
r.eL(A.akZ(a,new A.bu(s,s)))
return r},
hR(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=b.gfG()/2
a.d7(A.akZ(b,new A.bu(s,s)).dc(r.b*r.d/2),r.hZ())
break}},
l(a,b){if(b==null)return!1
if(J.X(b)!==A.C(this))return!1
return b instanceof A.ez&&b.a.l(0,this.a)},
gt(a){var s=this.a
return A.S(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"StadiumBorder("+this.a.j(0)+")"}}
A.ei.prototype={
aJ(a,b){return new A.ei(b,this.c,this.a.aJ(0,b))},
cc(a,b){var s,r,q,p=this
if(a instanceof A.ez)return new A.ei(p.b*b,p.c,A.aA(a.a,p.a,b))
if(a instanceof A.dw){s=A.aA(a.a,p.a,b)
r=p.b
return new A.ei(r+(1-r)*(1-b),a.b,s)}if(a instanceof A.ei){s=A.aA(a.a,p.a,b)
r=A.T(a.b,p.b,b)
r.toString
q=A.T(a.c,p.c,b)
q.toString
return new A.ei(r,q,s)}return p.lf(a,b)},
cd(a,b){var s,r,q,p=this
if(a instanceof A.ez)return new A.ei(p.b*(1-b),p.c,A.aA(p.a,a.a,b))
if(a instanceof A.dw){s=A.aA(p.a,a.a,b)
r=p.b
return new A.ei(r+(1-r)*b,a.b,s)}if(a instanceof A.ei){s=A.aA(p.a,a.a,b)
r=A.T(p.b,a.b,b)
r.toString
q=A.T(p.c,a.c,b)
q.toString
return new A.ei(r,q,s)}return p.lg(a,b)},
H8(a){var s,r,q,p,o,n,m,l,k=this.b
if(k===0||a.c-a.a===a.d-a.b)return a
s=a.c
r=a.a
q=s-r
p=a.d
o=a.b
n=p-o
m=1-this.c
if(q<n){l=k*((n-q)/2)*m
return new A.D(r,o+l,s,p-l)}else{l=k*((q-n)/2)*m
return new A.D(r+l,o,s-l,p)}},
nQ(a){var s,r,q,p=A.eI(a.gfG()/2),o=this.c
if(o!==0){s=a.c-a.a
r=a.d-a.b
q=this.b
o=0.5+o/2
if(s<r){o=A.on(p,A.BS(new A.bu(s/2,o*r/2)),q)
o.toString
return o}else{o=A.on(p,A.BS(new A.bu(o*s/2,r/2)),q)
o.toString
return o}}return p},
fD(a,b){var s=$.ar().cq()
s.eL(this.nQ(a).dF(this.H8(a)))
return s},
hR(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.d7(this.nQ(b).dF(this.H8(b)).dc(s.b*s.d/2),s.hZ())
break}},
l(a,b){if(b==null)return!1
if(J.X(b)!==A.C(this))return!1
return b instanceof A.ei&&b.a.l(0,this.a)&&b.b===this.b},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this,r=s.c
if(r!==0)return"StadiumBorder("+s.a.j(0)+", "+B.d.N(s.b*100,1)+u.T+B.d.N(r*100,1)+"% oval)"
return"StadiumBorder("+s.a.j(0)+", "+B.d.N(s.b*100,1)+"% of the way to being a CircleBorder)"}}
A.ej.prototype={
aJ(a,b){var s=this.a.aJ(0,b)
return new A.ej(this.b.a0(0,b),b,s)},
cc(a,b){var s,r,q,p=this
if(a instanceof A.ez)return new A.ej(p.b,p.c*b,A.aA(a.a,p.a,b))
if(a instanceof A.dG){s=p.c
return new A.ej(p.b,s+(1-s)*(1-b),A.aA(a.a,p.a,b))}if(a instanceof A.ej){s=A.aA(a.a,p.a,b)
r=A.hI(a.b,p.b,b)
r.toString
q=A.T(a.c,p.c,b)
q.toString
return new A.ej(r,q,s)}return p.lf(a,b)},
cd(a,b){var s,r,q,p=this
if(a instanceof A.ez)return new A.ej(p.b,p.c*(1-b),A.aA(p.a,a.a,b))
if(a instanceof A.dG){s=p.c
return new A.ej(p.b,s+(1-s)*b,A.aA(p.a,a.a,b))}if(a instanceof A.ej){s=A.aA(p.a,a.a,b)
r=A.hI(p.b,a.b,b)
r.toString
q=A.T(p.c,a.c,b)
q.toString
return new A.ej(r,q,s)}return p.lg(a,b)},
nQ(a){var s=a.gfG()/2
s=A.hI(this.b,A.BS(new A.bu(s,s)),1-this.c)
s.toString
return s},
fD(a,b){var s=$.ar().cq()
s.eL(this.nQ(a).Y(b).dF(a))
return s},
hR(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.d7(this.nQ(b).Y(c).dF(b).dc(s.b*s.d/2),s.hZ())
break}},
l(a,b){var s=this
if(b==null)return!1
if(J.X(b)!==A.C(s))return!1
return b instanceof A.ej&&b.a.l(0,s.a)&&b.b.l(0,s.b)&&b.c===s.c},
gt(a){return A.S(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"StadiumBorder("+this.a.j(0)+", "+this.b.j(0)+", "+B.d.N(this.c*100,1)+"% of the way to being a RoundedRectangleBorder)"}}
A.nz.prototype={
F(){return"TextOverflow."+this.b}}
A.mT.prototype={
l(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(b instanceof A.mT)if(b.a.l(0,r.a))if(b.b===r.b)s=b.c==r.c
else s=!1
else s=!1
else s=!1
return s},
gt(a){var s=this
return A.S(s.a,s.b,s.d,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"PlaceholderDimensions("+this.a.j(0)+", "+A.h(this.d)+")"}}
A.xR.prototype={
F(){return"TextWidthBasis."+this.b}}
A.ac7.prototype={}
A.LD.prototype={
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
r=s==null?B.cI:s
q.d=b
q.e=null
s=r.a
if(s>=3)q.a9()
else if(s>=2)q.b=!0},
gul(){var s=this.e
if(s==null){s=this.d
s=s==null?null:s.Md(!1)
this.e=s}return s==null?"":s},
sBf(a,b){if(this.f===b)return
this.f=b
this.a9()},
sbN(a){var s,r=this
if(r.r===a)return
r.r=a
r.a9()
s=r.CW
if(s!=null)s.m()
r.CW=null},
sBg(a){var s,r=this
if(r.w===a)return
r.w=a
r.a9()
s=r.CW
if(s!=null)s.m()
r.CW=null},
sa2D(a){if(this.x==a)return
this.x=a
this.a9()},
sA9(a,b){if(J.f(this.y,b))return
this.y=b
this.a9()},
sAe(a){if(this.z==a)return
this.z=a
this.a9()},
sBh(a){if(this.as===a)return
this.as=a
this.a9()},
v7(a){if(a==null||a.length===0||A.cX(a,this.ch))return
this.ch=a
this.a9()},
Eu(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.d.a
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
o=l==null?f:new A.LA(l)
k=e.w
j=e.x
i=e.d
h=e.r
if(h==null)h=14
e=e.as
e=A.akT(n,i,h*q,j,k,e,m,p,f,s,r,o)}if(e==null){e=g.f
s=g.r
if(s==null)s=a
r=g.w
q=g.z
p=g.at
p=A.akT(g.x,f,14*r,f,f,f,g.y,q,f,e,s,p)
e=p}return e},
Th(){return this.Eu(null)},
gun(){var s,r,q=this,p=q.CW
if(p==null){p=q.Eu(B.Z)
s=$.ar().yM(p)
p=q.d
if(p==null)r=null
else{p=p.a
r=p==null?null:p.BY(q.w)}if(r!=null)s.AZ(r)
s.rC(" ")
p=s.b6()
p.iE(B.TT)
q.CW=p}return p.gbU(p)},
gbo(a){var s=this.as,r=this.a
s=s===B.ZU?r.gKW():r.gbo(r)
return Math.ceil(s)},
eP(a){var s
switch(a.a){case 0:s=this.a
return s.grG(s)
case 1:s=this.a
return s.ga4i(s)}},
Et(){var s,r,q=this,p=q.d
if(p==null)throw A.c(A.a6("TextPainter.text must be set to a non-null value before using the TextPainter."))
s=q.Th()
r=$.ar().yM(s)
s=q.w
p.Iw(r,q.ch,s)
q.ay=r.ga5V()
q.a=r.b6()
q.b=!1},
FG(a,b){var s,r,q=this
q.a.iE(new A.kS(b))
if(a!==b){switch(q.as.a){case 1:s=Math.ceil(q.a.gKW())
break
case 0:s=Math.ceil(q.a.ga5f())
break
default:s=null}s=A.I(s,a,b)
r=q.a
if(s!==Math.ceil(r.gbo(r)))q.a.iE(new A.kS(s))}},
A6(a,b){var s=this,r=s.a==null
if(!r&&b===s.cx&&a===s.cy)return
if(s.b||r)s.Et()
s.cx=b
s.cy=a
s.dy=s.dx=s.fr=null
s.FG(b,a)
s.ax=s.a.uL()},
a4X(){return this.A6(1/0,0)},
aI(a,b){var s,r=this,q=r.cx,p=r.cy
if(r.a==null||q==null||p==null)throw A.c(A.a6("TextPainter.paint called when text geometry was not yet calculated.\nPlease call layout() before paint() to position the text before painting it."))
if(r.b){r.Et()
r.FG(q,p)}s=r.a
s.toString
a.kw(s,b)},
F2(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.gul().length
if(g===0||a>g)return null
s=B.b.ae(h.gul(),Math.max(0,a-1))
r=(s&63488)===55296||h.d.ae(0,a)===8205||s===8207||s===8206
q=r?2:1
p=A.a([],t.px)
for(o=-g,n=!r,m=s===10;p.length===0;){l=a-q
p=h.a.BJ(l,a,B.mw)
if(p.length===0){if(n&&m)break
if(l<o)break
q*=2
continue}k=B.c.gJ(p)
if(m){o=k.d
return new A.D(h.gwl().a,o,h.gwl().a,o+o-k.b)}o=k.e
j=o===B.u?k.c:k.a
i=o===B.Z?j-(b.c-b.a):j
o=h.a
o=A.I(i,0,o.gbo(o))
n=h.a
return new A.D(o,k.b,A.I(i,0,n.gbo(n)),k.d)}return null},
F1(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.gul().length
if(h===0||a<0)return null
s=B.b.ae(i.gul(),Math.min(a,h-1))
r=(s&63488)===55296||s===8205||s===8207||s===8206
q=r?2:1
p=A.a([],t.px)
for(o=h<<1>>>0,n=!r;p.length===0;){m=a+q
p=i.a.BJ(a,m,B.mw)
if(p.length===0){if(n)break
if(m>=o)break
q*=2
continue}l=B.c.gS(p)
o=l.e
k=o===B.u?l.a:l.c
j=o===B.Z?k-(b.c-b.a):k
o=i.a
o=A.I(j,0,o.gbo(o))
n=i.a
return new A.D(o,l.b,A.I(j,0,n.gbo(n)),l.d)}return null},
gwl(){var s=this
switch(s.f.a){case 0:return B.k
case 1:return new A.u(s.gbo(s),0)
case 2:return new A.u(s.gbo(s)/2,0)
case 3:case 4:switch(s.r.a){case 0:return new A.u(s.gbo(s),0)
case 1:return B.k}break
case 5:switch(s.r.a){case 0:return B.k
case 1:return new A.u(s.gbo(s),0)}break}},
Ej(a,b){var s,r,q,p,o=this
if(a.l(0,o.dx)&&b.l(0,o.dy))return
s=a.a
switch(a.b.a){case 0:r=o.F2(s,b)
if(r==null)r=o.F1(s,b)
break
case 1:r=o.F1(s,b)
if(r==null)r=o.F2(s,b)
break
default:r=null}q=r!=null
p=q?new A.u(r.a,r.b):o.gwl()
o.db=new A.ac7(p,q?r.d-r.b:null)
o.dx=a
o.dy=b},
m(){var s=this,r=s.CW
if(r!=null)r.m()
s.CW=null
r=s.a
if(r!=null)r.m()
s.d=s.a=null}}
A.xQ.prototype={
gJ5(a){return this.e},
gBB(){return!0},
ix(a,b){t.Y.b(a)},
Iw(a,b,c){var s,r,q,p,o=this.a,n=o!=null
if(n)a.AZ(o.BY(c))
o=this.b
if(o!=null)try{a.rC(o)}catch(q){o=A.af(q)
if(o instanceof A.fT){s=o
r=A.au(q)
A.eb(new A.bM(s,r,"painting library",A.bq("while building a TextSpan"),null,!1))
a.rC("\ufffd")}else throw q}o=this.c
if(o!=null)for(p=0;p<1;++p)o[p].Iw(a,b,c)
if(n)a.hU()},
aW(a){var s,r
if(this.b!=null)if(!a.$1(this))return!1
s=this.c
if(s!=null)for(r=0;r<1;++r)if(!s[r].aW(a))return!1
return!0},
N0(a,b){var s,r,q,p,o=this.b
if(o==null)return null
s=a.b
r=a.a
q=b.a
p=q+o.length
if(!(q===r&&s===B.D))if(!(q<r&&r<p))o=p===r&&s===B.O
else o=!0
else o=!0
if(o)return this
b.a=p
return null},
IM(a,b,c){var s,r=this.b
if(r!=null)a.a+=r
r=this.c
if(r!=null)for(s=0;s<1;++s)r[s].IM(a,!0,c)},
IL(a,b,c){var s,r,q=this.b
if(q!=null){s=A.a([],t.ve)
a.push(A.aot(q,null,null,s))}q=this.c
if(q!=null)for(r=0;r<1;++r)q[r].IL(a,b,!1)},
a1p(a){return this.IL(a,null,!1)},
a1a(a,b){var s,r,q,p=this.b
if(p==null)return null
s=b.a
r=a-s
q=p.length
if(r<q)return B.b.ae(p,r)
b.a=s+q
return null},
aG(a,b){var s,r,q,p,o,n=this
if(n===b)return B.dM
if(A.C(b)!==A.C(n))return B.cI
if(b.b==n.b){s=n.c==null?null:1
s=s!=(b.c==null?null:1)||n.a==null!==(b.a==null)}else s=!0
if(s)return B.cI
s=n.a
if(s!=null){r=b.a
r.toString
q=s.aG(0,r)
p=q.a>0?q:B.dM
if(p===B.cI)return p}else p=B.dM
s=n.c
if(s!=null)for(r=b.c,o=0;o<1;++o){q=s[o].aG(0,r[o])
if(q.a>p.a)p=q
if(p===B.cI)return p}return p},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.C(s))return!1
if(!s.Ot(0,b))return!1
return b instanceof A.xQ&&b.b==s.b&&s.e.l(0,b.e)&&A.cX(b.c,s.c)},
gt(a){var s=this,r=null,q=A.h8.prototype.gt.call(s,s),p=s.c
p=p==null?r:A.dj(p)
return A.S(q,s.b,r,r,r,r,s.e,p,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
c3(){return"TextSpan"},
$iaq:1,
$ijf:1,
gAB(){return null},
gAC(){return null}}
A.t.prototype={
gmm(){return this.e},
glM(a){return this.d},
ol(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=b9==null?a.a:b9,a1=a.ay
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
c=b0==null?a.glM(a):b0
b=b1==null?a.e:b1
return A.bw(r,q,s,null,g,f,e,d,c,b,a.fr,p,a.x,h,o,a1,k,a0,j,n,a.ax,a.fy,a.f,i,l,m)},
a1R(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5){return this.ol(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,null,r,s,a0,a1,a2,a3,a4,a5)},
hB(a){return this.ol(null,null,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
a1H(a){return this.ol(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null)},
IZ(a,b){return this.ol(null,null,a,null,null,null,null,null,null,null,null,b,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
IU(a){return this.ol(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null,null,null)},
ca(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
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
a1=a4.glM(a4)
a2=a4.e
a3=a4.f
return this.a1R(g,r,s,null,c,b,a,a0,a1,a2,e,q,o,d,p,h,k,j,n,i,a4.fy,a3,f,l,m)},
BY(a){var s,r,q=this,p=q.gmm(),o=q.r
o=o==null?null:o*a
s=q.ch
if(s==null){s=q.c
if(s!=null){r=$.ar().bm()
r.sam(0,s)
s=r}else s=null}return A.apX(s,q.b,q.CW,q.cx,q.cy,q.db,q.d,p,q.fr,o,q.x,q.fx,q.w,q.ay,q.as,q.at,q.y,q.ax,q.dy,q.Q,q.z)},
aG(a,b){var s=this
if(s===b)return B.dM
if(s.a!==b.a||s.d!=b.d||s.r!=b.r||s.w!=b.w||s.y!=b.y||s.z!=b.z||s.Q!=b.Q||s.as!=b.as||s.at!=b.at||s.ay!=b.ay||s.ch!=b.ch||!A.cX(s.dy,b.dy)||!A.cX(s.fr,b.fr)||!A.cX(s.fx,b.fx)||!A.cX(s.gmm(),b.gmm())||!1)return B.cI
if(!J.f(s.b,b.b)||!J.f(s.c,b.c)||!J.f(s.CW,b.CW)||!J.f(s.cx,b.cx)||s.cy!=b.cy||s.db!=b.db)return B.Ub
return B.dM},
l(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.X(b)!==A.C(r))return!1
if(b instanceof A.t)if(b.a===r.a)if(J.f(b.b,r.b))if(J.f(b.c,r.c))if(b.r==r.r)if(b.w==r.w)if(b.y==r.y)if(b.z==r.z)if(b.Q==r.Q)if(b.as==r.as)if(b.at==r.at)if(b.ay==r.ay)if(b.ch==r.ch)if(A.cX(b.dy,r.dy))if(A.cX(b.fr,r.fr))if(A.cX(b.fx,r.fx))if(J.f(b.CW,r.CW))if(J.f(b.cx,r.cx))if(b.cy==r.cy)if(b.db==r.db)if(b.d==r.d)if(A.cX(b.gmm(),r.gmm()))s=!0
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
gt(a){var s,r=this,q=null,p=r.gmm(),o=p==null?q:A.dj(p),n=A.S(r.cy,r.db,r.d,o,r.f,r.fy,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a),m=r.dy,l=r.fx
o=m==null?q:A.dj(m)
s=l==null?q:A.dj(l)
return A.S(r.a,r.b,r.c,r.r,r.w,r.x,r.y,r.z,r.Q,r.as,r.at,r.ax,r.ay,r.ch,o,q,s,r.CW,r.cx,n)},
c3(){return"TextStyle"}}
A.RL.prototype={}
A.FD.prototype={
Rv(a,b,c,d,e){var s=this
s.r=A.arr(new A.a_h(s),s.gzg(s),0,10,0)},
d0(a,b){var s,r,q=this
if(b>q.r)return q.gtt()
s=q.e
r=q.c
return q.d+s*Math.pow(q.b,b)/r-s/r-q.f/2*b*b},
dM(a,b){var s=this
if(b>s.r)return 0
return s.e*Math.pow(s.b,b)-s.f*b},
gtt(){var s=this
if(s.f===0)return s.d-s.e/s.c
return s.d0(0,s.r)},
M8(a){var s,r=this,q=r.d
if(a===q)return 0
s=r.e
if(s!==0)if(s>0)q=a<q||a>r.gtt()
else q=a>q||a<r.gtt()
else q=!0
if(q)return 1/0
return A.arr(r.gzg(r),r.ga7z(r),0,10,a)},
jx(a){return Math.abs(this.dM(0,a))<this.a.c},
j(a){return"FrictionSimulation(c\u2093: "+B.d.N(this.b,1)+", x\u2080: "+B.d.N(this.d,1)+", dx\u2080: "+B.d.N(this.e,1)+")"}}
A.a_h.prototype={
$1(a){var s=this.a
return s.e*Math.pow(s.b,a)*s.c-s.f},
$S:64}
A.a7y.prototype={
j(a){return"Simulation"}}
A.a9s.prototype={
j(a){return"SpringDescription(mass: "+B.d.N(this.a,1)+", stiffness: "+B.f.N(this.b,1)+", damping: "+B.d.N(this.c,1)+")"}}
A.qb.prototype={
F(){return"SpringType."+this.b}}
A.Lf.prototype={
d0(a,b){return this.b+this.c.d0(0,b)},
dM(a,b){return this.c.dM(0,b)},
jx(a){var s=this.c
return A.Be(s.d0(0,a),0,this.a.a)&&A.Be(s.dM(0,a),0,this.a.c)},
j(a){var s=this.c
return"SpringSimulation(end: "+B.d.N(this.b,1)+", "+s.gdf(s).j(0)+")"}}
A.l2.prototype={
d0(a,b){return this.jx(b)?this.b:this.Q4(0,b)}}
A.acm.prototype={
d0(a,b){return(this.b+this.c*b)*Math.pow(2.718281828459045,this.a*b)},
dM(a,b){var s=this.a,r=Math.pow(2.718281828459045,s*b),q=this.c
return s*(this.b+q*b)*r+q*r},
gdf(a){return B.VG}}
A.af1.prototype={
d0(a,b){var s=this
return s.c*Math.pow(2.718281828459045,s.a*b)+s.d*Math.pow(2.718281828459045,s.b*b)},
dM(a,b){var s=this,r=s.a,q=s.b
return s.c*r*Math.pow(2.718281828459045,r*b)+s.d*q*Math.pow(2.718281828459045,q*b)},
gdf(a){return B.VI}}
A.agK.prototype={
d0(a,b){var s=this,r=s.a*b
return Math.pow(2.718281828459045,s.b*b)*(s.c*Math.cos(r)+s.d*Math.sin(r))},
dM(a,b){var s,r=this,q=r.b,p=Math.pow(2.718281828459045,q*b),o=r.a,n=o*b,m=Math.cos(n),l=Math.sin(n)
n=r.d
s=r.c
return p*(n*o*m-s*o*l)+q*p*(n*l+s*m)},
gdf(a){return B.VH}}
A.LN.prototype={
j(a){return"Tolerance(distance: \xb1"+A.h(this.a)+", time: \xb10.001, velocity: \xb1"+A.h(this.c)+")"}}
A.pM.prototype={
zG(){var s=this,r=s.y1$
r===$&&A.b()
r=r.e
r.toString
r.syF(s.J3())
if(s.y1$.e.B$!=null)s.N8()},
zM(){},
zI(){},
J3(){var s,r=$.cu(),q=r.w
if(q==null){s=self.window.devicePixelRatio
q=s===0?1:s}return new A.M5(r.gkR().d1(0,q),q)},
Wg(){var s,r=this
if($.aQ().a.c){if(r.y2$==null){s=r.y1$
s===$&&A.b()
r.y2$=s.JD()}}else{s=r.y2$
if(s!=null)s.m()
r.y2$=null}},
Nx(a){var s,r=this
if(a){if(r.y2$==null){s=r.y1$
s===$&&A.b()
r.y2$=s.JD()}}else{s=r.y2$
if(s!=null)s.m()
r.y2$=null}},
Wz(a){B.TB.nA("first-frame",null,!1,t.H)},
We(a,b,c){var s=this.y1$
s===$&&A.b()
s=s.as
if(s!=null)s.a5T(a,b,null)},
Wi(){var s,r=this.y1$
r===$&&A.b()
r=r.e
r.toString
s=t.W
s.a(A.M.prototype.gbx.call(r)).ay.D(0,r)
s.a(A.M.prototype.gbx.call(r)).mN()},
Wm(a){var s=this.y1$
s===$&&A.b()
s.e.toString
s=$.dK;(s==null?$.dK=A.kk():s).a7i(a)},
Wk(){var s=this.y1$
s===$&&A.b()
s.e.lW()},
VL(a){this.zf()
this.Zk()},
Zk(){$.bT.cy$.push(new A.a5I(this))},
Ih(){--this.br$
if(!this.b8$)this.uY()},
zf(){var s=this,r=s.y1$
r===$&&A.b()
r.a38()
s.y1$.a37()
s.y1$.a39()
if(s.b8$||s.br$===0){s.y1$.e.a1l()
s.y1$.a3a()
s.b8$=!0}},
$iaq:1,
$idH:1}
A.a5I.prototype={
$1(a){var s=this.a,r=s.xr$
r.toString
s=s.y1$
s===$&&A.b()
r.a7f(s.e.ga4f())},
$S:2}
A.aU.prototype={
yJ(a,b,c,d){var s=this,r=d==null?s.a:d,q=b==null?s.b:b,p=c==null?s.c:c
return new A.aU(r,q,p,a==null?s.d:a)},
a1O(a,b){return this.yJ(null,null,a,b)},
IW(a){return this.yJ(a,null,null,null)},
a1I(a){return this.yJ(null,a,null,null)},
J9(a){var s=this,r=a.gco(),q=a.gbc(a)+a.gbg(a),p=Math.max(0,s.a-r),o=Math.max(0,s.c-q)
return new A.aU(p,Math.max(p,s.b-r),o,Math.max(o,s.d-q))},
oI(a){var s=this,r=a.a,q=a.b,p=a.c,o=a.d
return new A.aU(A.I(s.a,r,q),A.I(s.b,r,q),A.I(s.c,p,o),A.I(s.d,p,o))},
Bk(a,b){var s,r,q=this,p=b==null,o=q.a,n=p?o:A.I(b,o,q.b),m=q.b
p=p?m:A.I(b,o,m)
o=a==null
m=q.c
s=o?m:A.I(a,m,q.d)
r=q.d
return new A.aU(n,p,s,o?r:A.I(a,m,r))},
uB(a){return this.Bk(a,null)},
Bj(a){return this.Bk(null,a)},
bE(a){var s=this
return new A.a7(A.I(a.a,s.a,s.b),A.I(a.b,s.c,s.d))},
oj(a){var s,r,q,p,o,n=this,m=n.a,l=n.b
if(m>=l&&n.c>=n.d)return new A.a7(A.I(0,m,l),A.I(0,n.c,n.d))
s=a.a
r=a.b
q=s/r
if(s>l){r=l/q
s=l}p=n.d
if(r>p){s=p*q
r=p}if(s<m){r=m/q
s=m}o=n.c
if(r<o){s=o*q
r=o}return new A.a7(A.I(s,m,l),A.I(r,o,p))},
gKK(){var s=this
return s.a>=s.b&&s.c>=s.d},
a0(a,b){var s=this
return new A.aU(s.a*b,s.b*b,s.c*b,s.d*b)},
d1(a,b){var s=this
return new A.aU(s.a/b,s.b/b,s.c/b,s.d/b)},
ga4K(){var s=this,r=s.a
if(r>=0)if(r<=s.b){r=s.c
r=r>=0&&r<=s.d}else r=!1
else r=!1
return r},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.C(s))return!1
return b instanceof A.aU&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s,r=this,q=r.ga4K()?"":"; NOT NORMALIZED",p=r.a
if(p===1/0&&r.c===1/0)return"BoxConstraints(biggest"+q+")"
if(p===0&&r.b===1/0&&r.c===0&&r.d===1/0)return"BoxConstraints(unconstrained"+q+")"
s=new A.UW()
return"BoxConstraints("+s.$3(p,r.b,"w")+", "+s.$3(r.c,r.d,"h")+q+")"}}
A.UW.prototype={
$3(a,b,c){if(a===b)return c+"="+B.d.N(a,1)
return B.d.N(a,1)+"<="+c+"<="+B.d.N(b,1)},
$S:243}
A.hJ.prototype={
yk(a,b,c){if(c!=null){c=A.Ii(A.akV(c))
if(c==null)return!1}return this.If(a,b,c)},
o1(a,b,c){var s,r=b==null,q=r?c:c.ad(0,b)
r=!r
if(r)this.c.push(new A.re(new A.u(-b.a,-b.b)))
s=a.$2(this,q)
if(r)this.um()
return s},
If(a,b,c){var s,r=c==null,q=r?b:A.cA(c,b)
r=!r
if(r)this.c.push(new A.z6(c))
s=a.$2(this,q)
if(r)this.um()
return s},
Ie(a,b,c){var s,r=this
if(b!=null)r.c.push(new A.re(new A.u(-b.a,-b.b)))
else{c.toString
c=A.Ii(A.akV(c))
c.toString
r.c.push(new A.z6(c))}s=a.$1(r)
r.um()
return s},
a0m(a,b){return this.Ie(a,null,b)},
a0l(a,b){return this.Ie(a,b,null)}}
A.oq.prototype={
j(a){return"<optimized out>#"+A.bP(this.a)+"@"+this.c.j(0)}}
A.eJ.prototype={
j(a){return"offset="+this.a.j(0)}}
A.tx.prototype={}
A.G.prototype={
ey(a){if(!(a.e instanceof A.eJ))a.e=new A.eJ(B.k)},
ha(a){var s,r=this.k1
if(r==null)r=this.k1=A.z(t.k,t.DB)
s=r.bH(0,a,new A.a5a(this,a))
return s},
cg(a){return B.U},
gjU(){var s=this.k3
return new A.D(0,0,0+s.a,0+s.b)},
uP(a,b){var s=null
try{s=this.jP(a)}finally{}if(s==null&&!b)return this.k3.b
return s},
ML(a){return this.uP(a,!1)},
jP(a){var s=this,r=s.k4
if(r==null)r=s.k4=A.z(t.E9,t.u6)
r.bH(0,a,new A.a59(s,a))
return s.k4.i(0,a)},
eP(a){return null},
ga1(){return t.k.a(A.A.prototype.ga1.call(this))},
SR(){var s,r=this,q=r.k4,p=q==null
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
if(s.SR()&&s.c instanceof A.A){s.u0()
return}s.Po()},
cw(a,b){var s,r=this
if(r.k3!=null)if(!a.l(0,t.k.a(A.A.prototype.ga1.call(r)))){s=r.k4
s=s!=null&&s.a!==0}else s=!1
else s=!1
if(s){s=r.k4
if(s!=null)s.a_(0)}r.Pn(a,b)},
iE(a){return this.cw(a,!1)},
pz(){this.k3=this.cg(t.k.a(A.A.prototype.ga1.call(this)))},
bM(){},
c_(a,b){var s=this
if(s.k3.C(0,b))if(s.cX(a,b)||s.ju(b)){a.D(0,new A.oq(b,s))
return!0}return!1},
ju(a){return!1},
cX(a,b){return!1},
dt(a,b){var s,r=a.e
r.toString
s=t.Ch.a(r).a
b.aD(0,s.a,s.b)},
l3(a){var s,r,q,p,o,n=this.bB(0,null)
if(n.hA(n)===0)return B.k
s=new A.fJ(new Float64Array(3))
s.fF(0,0,1)
r=new A.fJ(new Float64Array(3))
r.fF(0,0,0)
q=n.iI(r)
r=new A.fJ(new Float64Array(3))
r.fF(0,0,1)
p=n.iI(r).ad(0,q)
r=new A.fJ(new Float64Array(3))
r.fF(a.a,a.b,0)
o=n.iI(r)
r=o.ad(0,p.C6(s.Jm(o)/s.Jm(p))).a
return new A.u(r[0],r[1])},
ghS(){var s=this.k3
return new A.D(0,0,0+s.a,0+s.b)},
ix(a,b){this.Pm(a,b)}}
A.a5a.prototype={
$0(){return this.a.cg(this.b)},
$S:244}
A.a59.prototype={
$0(){return this.a.eP(this.b)},
$S:245}
A.cQ.prototype={
a2l(a){var s,r,q,p=this.a8$
for(s=A.n(this).h("cQ.1?");p!=null;){r=s.a(p.e)
q=p.jP(a)
if(q!=null)return q+r.a.b
p=r.ab$}return null},
J8(a){var s,r,q,p,o=this.a8$
for(s=A.n(this).h("cQ.1"),r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.jP(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.ab$}return r},
yT(a,b){var s,r,q={},p=q.a=this.bF$
for(s=A.n(this).h("cQ.1");p!=null;p=r){p=p.e
p.toString
s.a(p)
if(a.o1(new A.a58(q,b,p),p.a,b))return!0
r=p.aU$
q.a=r}return!1},
oq(a,b){var s,r,q,p,o,n=this.a8$
for(s=A.n(this).h("cQ.1"),r=b.a,q=b.b;n!=null;){p=n.e
p.toString
s.a(p)
o=p.a
a.f3(n,new A.u(o.a+r,o.b+q))
n=p.ab$}}}
A.a58.prototype={
$2(a,b){return this.a.a.c_(a,b)},
$S:18}
A.yp.prototype={
ao(a){this.vp(0)}}
A.fq.prototype={
j(a){return this.qi(0)+"; id="+A.h(this.e)}}
A.a36.prototype={
dR(a,b){var s,r=this.b.i(0,a)
r.cw(b,!0)
s=r.k3
s.toString
return s},
ea(a,b){var s=this.b.i(0,a).e
s.toString
t.DU.a(s).a=b},
Sy(a,b){var s,r,q,p,o,n,m=this,l=m.b
try{m.b=A.z(t.K,t.x)
for(r=t.DU,q=b;q!=null;q=n){p=q.e
p.toString
s=r.a(p)
p=m.b
p.toString
o=s.e
o.toString
p.k(0,o,q)
n=s.ab$}m.uk(a)}finally{m.b=l}},
j(a){return"MultiChildLayoutDelegate"}}
A.JS.prototype={
ey(a){if(!(a.e instanceof A.fq))a.e=new A.fq(null,null,B.k)},
syW(a){var s=this,r=s.K
if(r===a)return
if(A.C(a)!==A.C(r)||a.n3(r))s.a9()
s.K=a
s.b!=null},
ar(a){this.Qo(a)},
ao(a){this.Qp(0)},
cg(a){return a.bE(new A.a7(A.I(1/0,a.a,a.b),A.I(1/0,a.c,a.d)))},
bM(){var s=this,r=t.k.a(A.A.prototype.ga1.call(s))
r=r.bE(new A.a7(A.I(1/0,r.a,r.b),A.I(1/0,r.c,r.d)))
s.k3=r
s.K.Sy(r,s.a8$)},
aI(a,b){this.oq(a,b)},
cX(a,b){return this.yT(a,b)}}
A.zv.prototype={
ar(a){var s,r,q
this.eC(a)
s=this.a8$
for(r=t.DU;s!=null;){s.ar(a)
q=s.e
q.toString
s=r.a(q).ab$}},
ao(a){var s,r,q
this.dX(0)
s=this.a8$
for(r=t.DU;s!=null;){s.ao(0)
q=s.e
q.toString
s=r.a(q).ab$}}}
A.Qo.prototype={}
A.E5.prototype={
X(a,b){var s=this.a
return s==null?null:s.X(0,b)},
H(a,b){var s=this.a
return s==null?null:s.H(0,b)},
gC9(){return null},
Cm(a){return this.i6(a)},
tL(a){return null},
j(a){var s=A.bP(this),r=this.a
r=r==null?null:r.j(0)
if(r==null)r=""
return"<optimized out>#"+s+"("+r+")"}}
A.JT.prototype={
suj(a){var s=this.A
if(s==a)return
this.A=a
this.Ez(a,s)},
sJX(a){var s=this.U
if(s==a)return
this.U=a
this.Ez(a,s)},
Ez(a,b){var s=this,r=a==null
if(r)s.av()
else if(b==null||A.C(a)!==A.C(b)||a.i6(b))s.av()
if(s.b!=null){if(b!=null)b.H(0,s.ge9())
if(!r)a.X(0,s.ge9())}if(r){if(s.b!=null)s.b3()}else if(b==null||A.C(a)!==A.C(b)||a.Cm(b))s.b3()},
suo(a){if(this.aB.l(0,a))return
this.aB=a
this.a9()},
ar(a){var s,r=this
r.nh(a)
s=r.A
if(s!=null)s.X(0,r.ge9())
s=r.U
if(s!=null)s.X(0,r.ge9())},
ao(a){var s=this,r=s.A
if(r!=null)r.H(0,s.ge9())
r=s.U
if(r!=null)r.H(0,s.ge9())
s.lj(0)},
cX(a,b){var s=this.U
if(s!=null){s=s.tL(b)
s=s===!0}else s=!1
if(s)return!0
return this.ql(a,b)},
ju(a){var s=this.A
if(s!=null){s=s.tL(a)
s=s!==!1}else s=!1
return s},
bM(){this.vu()
this.b3()},
oi(a){return a.bE(this.aB)},
G9(a,b,c){var s
A.b7("debugPreviousCanvasSaveCount")
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
q.G9(s,b,r)
q.GW(a)}q.hi(a,b)
if(q.U!=null){s=a.gbJ(a)
r=q.U
r.toString
q.G9(s,b,r)
q.GW(a)}},
GW(a){},
eS(a){var s,r=this
r.hh(a)
r.bT=null
s=r.U
r.e5=s==null?null:s.gC9()
a.a=!1},
oa(a,b,c){var s,r,q,p,o=this
o.fZ=A.apo(o.fZ,B.rQ)
o.iw=A.apo(o.iw,B.rQ)
s=o.fZ
r=s!=null&&!s.gO(s)
s=o.iw
q=s!=null&&!s.gO(s)
s=A.a([],t.T)
if(r){p=o.fZ
p.toString
B.c.I(s,p)}B.c.I(s,c)
if(q){p=o.iw
p.toString
B.c.I(s,p)}o.Da(a,b,s)},
lW(){this.vr()
this.iw=this.fZ=null}}
A.Wu.prototype={}
A.JW.prototype={
RE(a){var s,r,q,p,o=this
try{r=o.K
if(r!==""){q=$.atm()
s=$.ar().yM(q)
s.AZ($.atn())
s.rC(r)
r=s.b6()
o.ag!==$&&A.eG()
o.ag=r}else{o.ag!==$&&A.eG()
o.ag=null}}catch(p){}},
gjX(){return!0},
ju(a){return!0},
cg(a){return a.bE(B.Vy)},
aI(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
try{p=a.gbJ(a)
o=i.k3
n=b.a
m=b.b
l=o.a
o=o.b
k=$.ar().bm()
k.sam(0,$.atl())
p.cm(new A.D(n,m,n+l,m+o),k)
p=i.ag
p===$&&A.b()
if(p!=null){s=i.k3.a
r=0
q=0
if(s>328){s-=128
r+=64}p.iE(new A.kS(s))
if(i.k3.b>96+p.gbU(p)+12)q+=96
a.gbJ(a).kw(p,b.V(0,new A.u(r,q)))}}catch(j){}}}
A.up.prototype={
F(){return"FlexFit."+this.b}}
A.dy.prototype={
j(a){return this.qi(0)+"; flex="+A.h(this.e)+"; fit="+A.h(this.f)}}
A.ve.prototype={
F(){return"MainAxisSize."+this.b}}
A.mK.prototype={
F(){return"MainAxisAlignment."+this.b}}
A.kg.prototype={
F(){return"CrossAxisAlignment."+this.b}}
A.pK.prototype={
ey(a){if(!(a.e instanceof A.dy))a.e=new A.dy(null,null,B.k)},
eP(a){if(this.K===B.aX)return this.J8(a)
return this.a2l(a)},
qz(a){switch(this.K.a){case 0:return a.b
case 1:return a.a}},
qA(a){switch(this.K.a){case 0:return a.a
case 1:return a.b}},
cg(a){var s
if(this.aw===B.nt)return B.U
s=this.En(a,A.aj4())
switch(this.K.a){case 0:return a.bE(new A.a7(s.a,s.b))
case 1:return a.bE(new A.a7(s.b,s.a))}},
En(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.K===B.aX?a2.b:a2.d,a0=a<1/0,a1=c.a8$
for(s=t.uc,r=a2.b,q=a2.d,p=b,o=0,n=0,m=0;a1!=null;){l=a1.e
l.toString
s.a(l)
k=l.e
if(k==null)k=0
if(k>0){o+=k
p=a1}else{if(c.aw===B.ns)switch(c.K.a){case 0:j=A.op(q,b)
break
case 1:j=A.op(b,r)
break
default:j=b}else switch(c.K.a){case 0:j=new A.aU(0,1/0,0,q)
break
case 1:j=new A.aU(0,r,0,1/0)
break
default:j=b}i=a3.$2(a1,j)
m+=c.qA(i)
n=Math.max(n,A.iO(c.qz(i)))}a1=l.ab$}h=Math.max(0,(a0?a:0)-m)
if(o>0){g=a0?h/o:0/0
a1=c.a8$
for(f=0;a1!=null;){l=a1.e
l.toString
k=s.a(l).e
if(k==null)k=0
if(k>0){if(a0)e=a1===p?h-f:g*k
else e=1/0
d=A.b7("minChildExtent")
l=a1.e
l.toString
l=s.a(l).f
switch((l==null?B.nG:l).a){case 0:if(d.b!==d)A.L(A.a20(d.a))
d.b=e
break
case 1:if(d.b!==d)A.L(A.a20(d.a))
d.b=0
break}if(c.aw===B.ns)switch(c.K.a){case 0:l=d.b
if(l===d)A.L(A.hc(d.a))
j=new A.aU(l,e,q,q)
break
case 1:l=d.b
if(l===d)A.L(A.hc(d.a))
j=new A.aU(r,r,l,e)
break
default:j=b}else switch(c.K.a){case 0:l=d.b
if(l===d)A.L(A.hc(d.a))
j=new A.aU(l,e,0,q)
break
case 1:l=d.b
if(l===d)A.L(A.hc(d.a))
j=new A.aU(0,r,l,e)
break
default:j=b}i=a3.$2(a1,j)
m+=c.qA(i)
f+=e
n=Math.max(n,A.iO(c.qz(i)))}l=a1.e
l.toString
a1=s.a(l).ab$}}return new A.ae8(a0&&c.ac===B.v?a:m,n,m)},
bM(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.k.a(A.A.prototype.ga1.call(a)),a1=a.En(a0,A.aj5()),a2=a1.a,a3=a1.b
if(a.aw===B.nt){s=a.a8$
for(r=t.uc,q=0,p=0,o=0;s!=null;){n=a.B
n.toString
m=s.uP(n,!0)
if(m!=null){q=Math.max(q,m)
p=Math.max(m,p)
o=Math.max(s.k3.b-m,o)
a3=Math.max(p+o,a3)}n=s.e
n.toString
s=r.a(n).ab$}}else q=0
switch(a.K.a){case 0:r=a.k3=a0.bE(new A.a7(a2,a3))
a2=r.a
a3=r.b
break
case 1:r=a.k3=a0.bE(new A.a7(a3,a2))
a2=r.b
a3=r.a
break}l=a2-a1.c
a.ai=Math.max(0,-l)
k=Math.max(0,l)
j=A.b7("leadingSpace")
i=A.b7("betweenSpace")
r=A.arF(a.K,a.b1,a.b9)
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
j.sc9(i.aE()/2)
break
case 5:r=a.dA$
i.sc9(r>0?k/(r+1):0)
j.sc9(i.aE())
break}g=h?a2-j.aE():j.aE()
s=a.a8$
for(r=t.uc,n=a3/2,f=i.a;s!=null;){e=s.e
e.toString
r.a(e)
d=a.aw
switch(d.a){case 0:case 1:if(A.arF(A.aEZ(a.K),a.b1,a.b9)===(d===B.aB))c=0
else{d=s.k3
d.toString
c=a3-a.qz(d)}break
case 2:d=s.k3
d.toString
c=n-a.qz(d)/2
break
case 3:c=0
break
case 4:if(a.K===B.aX){d=a.B
d.toString
m=s.uP(d,!0)
c=m!=null?q-m:0}else c=0
break
default:c=null}if(h){d=s.k3
d.toString
g-=a.qA(d)}switch(a.K.a){case 0:e.a=new A.u(g,c)
break
case 1:e.a=new A.u(c,g)
break}if(h){d=i.b
if(d===i)A.L(A.hc(f))
g-=d}else{d=s.k3
d.toString
d=a.qA(d)
b=i.b
if(b===i)A.L(A.hc(f))
g+=d+b}s=e.ab$}},
cX(a,b){return this.yT(a,b)},
aI(a,b){var s,r,q,p=this
if(!(p.ai>1e-10)){p.oq(a,b)
return}s=p.k3
if(s.gO(s))return
s=p.b4
r=p.cx
r===$&&A.b()
q=p.k3
s.sb_(0,a.kS(r,b,new A.D(0,0,0+q.a,0+q.b),p.ga2m(),p.cI,s.a))},
m(){this.b4.sb_(0,null)
this.Qq()},
jb(a){var s
switch(this.cI.a){case 0:return null
case 1:case 2:case 3:if(this.ai>1e-10){s=this.k3
s=new A.D(0,0,0+s.a,0+s.b)}else s=null
return s}},
c3(){var s=this.Pr()
return s}}
A.ae8.prototype={}
A.Qp.prototype={
ar(a){var s,r,q
this.eC(a)
s=this.a8$
for(r=t.uc;s!=null;){s.ar(a)
q=s.e
q.toString
s=r.a(q).ab$}},
ao(a){var s,r,q
this.dX(0)
s=this.a8$
for(r=t.uc;s!=null;){s.ao(0)
q=s.e
q.toString
s=r.a(q).ab$}}}
A.Qq.prototype={}
A.zw.prototype={
m(){var s,r,q
for(s=this.JL$,r=s.length,q=0;q<r;++q)s[q].m()
this.ia()},
f4(){this.Pq()}}
A.JZ.prototype={
WC(){var s=this
if(s.K!=null)return
s.K=s.cV
s.ag=!1},
FM(){this.ag=this.K=null
this.av()},
sfs(a,b){var s=this,r=s.ac
if(b==r)return
if(b!=null&&r!=null&&b.KD(r)){b.m()
return}r=s.ac
if(r!=null)r.m()
s.ac=b
s.av()
if(s.b1==null||s.b9==null)s.a9()},
sbo(a,b){if(b==this.b1)return
this.b1=b
this.a9()},
sbU(a,b){if(b==this.b9)return
this.b9=b
this.a9()},
sN6(a,b){if(b===this.B)return
this.B=b
this.a9()},
a_p(){this.ai=null},
sam(a,b){return},
sud(a,b){return},
smk(a){if(a===this.bw)return
this.bw=a
this.av()},
sa1e(a){return},
szz(a){if(a==this.e4)return
this.e4=a
this.av()},
sem(a){if(a.l(0,this.cV))return
this.cV=a
this.FM()},
sa6z(a,b){if(b===this.cJ)return
this.cJ=b
this.av()},
sa0R(a){return},
szW(a){if(a===this.eU)return
this.eU=a
this.av()},
sa5c(a){return},
sbN(a){if(this.eV==a)return
this.eV=a
this.FM()},
szX(a){return},
H3(a){var s,r,q=this,p=q.b1
a=A.op(q.b9,p).oI(a)
p=q.ac
if(p==null)return new A.a7(A.I(0,a.a,a.b),A.I(0,a.c,a.d))
p=p.gbo(p)
s=q.B
r=q.ac
return a.oj(new A.a7(p/s,r.gbU(r)/q.B))},
ju(a){return!0},
cg(a){return this.H3(a)},
bM(){this.k3=this.H3(t.k.a(A.A.prototype.ga1.call(this)))},
ar(a){this.eC(a)},
ao(a){this.dX(0)},
aI(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(d.ac==null)return
d.WC()
s=a.gbJ(a)
r=d.k3
q=b.a
p=b.b
o=r.a
r=r.b
n=d.ac
n.toString
m=d.aw
l=d.B
k=d.ai
j=d.e4
i=d.K
i.toString
h=d.jo
g=d.cJ
f=d.ag
f.toString
e=d.eU
A.asH(i,s,h,k,m,d.bw,j,f,n,e,!1,1,new A.D(q,p,q+o,p+r),g,l)},
m(){var s=this.ac
if(s!=null)s.m()
this.ac=null
this.ia()}}
A.t0.prototype={
j(a){return"AnnotationEntry(annotation: "+this.a.j(0)+", localPosition: "+this.b.j(0)+")"}}
A.Bx.prototype={}
A.v1.prototype={
ib(){},
ro(a){var s,r=this
r.e+=a
s=t.ow
if(s.a(A.M.prototype.gaM.call(r,r))!=null)s.a(A.M.prototype.gaM.call(r,r)).ro(a)},
nw(a){var s,r,q
for(s=this.d,s=A.aB(s.gaV(s),!0,t.M),r=s.length,q=0;q<r;++q)s[q].$0()},
m(){var s=this.z
if(s!=null)s.m()
this.z=null},
e8(){if(this.y)return
this.y=!0},
sis(a){var s,r=this,q=r.z
if(q!=null)q.m()
r.z=a
q=t.ow
if(q.a(A.M.prototype.gaM.call(r,r))!=null){q.a(A.M.prototype.gaM.call(r,r)).toString
s=!0}else s=!1
if(s)q.a(A.M.prototype.gaM.call(r,r)).e8()},
uG(){this.y=this.y||!1},
je(a){var s
this.e8()
s=a.e
if(s!==0)this.ro(-s)
this.vf(a)},
mL(a){var s,r,q=this,p=t.ow.a(A.M.prototype.gaM.call(q,q))
if(p!=null){s=q.as
r=q.Q
if(s==null)p.CW=r
else s.Q=r
r=q.Q
if(r==null)p.cx=s
else r.as=s
q.Q=q.as=null
p.je(q)
q.w.sb_(0,null)}},
eW(a,b,c){return!1},
JP(a,b,c){var s=A.a([],c.h("x<t0<0>>"))
this.eW(new A.Bx(s,c.h("Bx<0>")),b,!0,c)
return s.length===0?null:B.c.gJ(s).a},
S4(a){var s,r=this
if(!r.y&&r.z!=null){s=r.z
s.toString
a.a0d(s)
return}r.hv(a)
r.y=!1},
c3(){var s=this.Oa()
return s+(this.b==null?" DETACHED":"")}}
A.Gj.prototype={
sb_(a,b){var s=this.a
if(b==null?s==null:b===s)return
if(s!=null)if(--s.x===0)s.m()
this.a=b
if(b!=null)++b.x},
j(a){var s=this.a
return"LayerHandle("+(s!=null?J.da(s):"DISPOSED")+")"}}
A.Jm.prototype={
sLm(a){var s
this.e8()
s=this.cx
if(s!=null)s.m()
this.cx=a},
m(){this.sLm(null)
this.CT()},
hv(a){var s=this.cx
s.toString
a.a0b(B.k,s,this.cy,this.db)},
eW(a,b,c){return!1}}
A.Jf.prototype={
hv(a){a.a0a(this.cx,this.CW)
a.Nu(this.cy)
a.Nn(!1)
a.Nm(!1)},
eW(a,b,c){return!1}}
A.eN.prototype={
nw(a){var s
this.OD(a)
if(!a)return
s=this.CW
for(;s!=null;){s.nw(!0)
s=s.Q}},
a0I(a){var s=this
s.uG()
s.hv(a)
if(s.e>0)s.nw(!0)
s.y=!1
return a.b6()},
m(){this.B8()
this.d.a_(0)
this.CT()},
uG(){var s,r=this
r.OE()
s=r.CW
for(;s!=null;){s.uG()
r.y=r.y||s.y
s=s.Q}},
eW(a,b,c,d){var s,r,q
for(s=this.cx,r=a.a;s!=null;s=s.as){if(s.eW(a,b,!0,d))return!0
q=r.length
if(q!==0)return!1}return!1},
ar(a){var s
this.ve(a)
s=this.CW
for(;s!=null;){s.ar(a)
s=s.Q}},
ao(a){var s
this.dX(0)
s=this.CW
for(;s!=null;){s.ao(0)
s=s.Q}this.nw(!1)},
hx(a,b){var s,r=this
r.e8()
s=b.e
if(s!==0)r.ro(s)
r.Cz(b)
s=b.as=r.cx
if(s!=null)s.Q=b
r.cx=b
if(r.CW==null)r.CW=b
b.w.sb_(0,b)},
B8(){var s,r,q,p=this,o=p.CW
for(s=t.ow;o!=null;o=r){r=o.Q
o.Q=o.as=null
p.e8()
q=o.e
if(q!==0){q=-q
p.e+=q
if(s.a(A.M.prototype.gaM.call(p,p))!=null)s.a(A.M.prototype.gaM.call(p,p)).ro(q)}p.vf(o)
o.w.sb_(0,null)}p.cx=p.CW=null},
hv(a){this.kj(a)},
kj(a){var s=this.CW
for(;s!=null;){s.S4(a)
s=s.Q}}}
A.i6.prototype={
sbL(a,b){if(!b.l(0,this.p1))this.e8()
this.p1=b},
eW(a,b,c,d){return this.nc(a,b.ad(0,this.p1),!0,d)},
hv(a){var s=this,r=s.p1
s.sis(a.Ly(r.a,r.b,t.cV.a(s.z)))
s.kj(a)
a.hU()}}
A.ox.prototype={
eW(a,b,c,d){if(!this.p1.C(0,b))return!1
return this.nc(a,b,!0,d)},
hv(a){var s=this,r=s.p1
r.toString
s.sis(a.a63(r,s.p2,t.CW.a(s.z)))
s.kj(a)
a.hU()}}
A.tt.prototype={
eW(a,b,c,d){if(!this.p1.C(0,b))return!1
return this.nc(a,b,!0,d)},
hv(a){var s=this,r=s.p1
r.toString
s.sis(a.a61(r,s.p2,t.cB.a(s.z)))
s.kj(a)
a.hU()}}
A.ts.prototype={
eW(a,b,c,d){if(!this.p1.C(0,b))return!1
return this.nc(a,b,!0,d)},
hv(a){var s=this,r=s.p1
r.toString
s.sis(a.a60(r,s.p2,t.xS.a(s.z)))
s.kj(a)
a.hU()}}
A.le.prototype={
sbt(a,b){var s=this
if(b.l(0,s.aj))return
s.aj=b
s.aq=!0
s.e8()},
hv(a){var s,r,q=this
q.af=q.aj
if(!q.p1.l(0,B.k)){s=q.p1
s=A.vx(s.a,s.b,0)
r=q.af
r.toString
s.cM(0,r)
q.af=s}q.sis(a.a65(q.af.a,t.Al.a(q.z)))
q.kj(a)
a.hU()},
a_h(a){var s,r=this
if(r.aq){s=r.aj
s.toString
r.ap=A.Ii(A.akV(s))
r.aq=!1}s=r.ap
if(s==null)return null
return A.cA(s,a)},
eW(a,b,c,d){var s=this.a_h(b)
if(s==null)return!1
return this.P0(a,s,!0,d)}}
A.IN.prototype={
sIi(a,b){var s=this,r=s.aj
if(b!=r){if(b===255||r===255)s.sis(null)
s.aj=b
s.e8()}},
hv(a){var s,r,q,p=this
if(p.CW==null){p.sis(null)
return}s=p.aj
s.toString
r=p.p1
q=p.z
if(s<255)p.sis(a.a64(s,r,t.i6.a(q)))
else p.sis(a.Ly(r.a,r.b,t.cV.a(q)))
p.kj(a)
a.hU()}}
A.t_.prototype={
eW(a,b,c,d){var s,r,q,p=this,o=p.nc(a,b,!0,d),n=a.a
if(n.length!==0&&!0)return o
s=p.p2
if(s!=null){r=p.p3
q=r.a
r=r.b
s=!new A.D(q,r,q+s.a,r+s.b).C(0,b)}else s=!1
if(s)return o
if(A.aD(p.$ti.c)===A.aD(d)){o=o||!1
n.push(new A.t0(d.a(p.p1),b.ad(0,p.p3),d.h("t0<0>")))}return o}}
A.OF.prototype={}
A.P9.prototype={
a6C(a){var s=this.a
this.a=a
return s},
j(a){var s="<optimized out>#",r=A.bP(this.b),q=this.a.a
return s+A.bP(this)+"("+("latestEvent: "+(s+r))+", "+("annotations: [list of "+q+"]")+")"}}
A.Pa.prototype={
gim(a){var s=this.c
return s.gim(s)}}
A.Is.prototype={
Fq(a){var s,r,q,p,o,n,m=t.mC,l=A.i2(null,null,null,m,t.rA)
for(s=a.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
o=p.a
if(m.b(o)){n=p.b
n.toString
l.k(0,o,n)}}return l},
U2(a,b){var s=a.b,r=s.gbA(s)
s=a.b
if(!this.b.R(0,s.gim(s)))return A.i2(null,null,null,t.mC,t.rA)
return this.Fq(b.$1(r))},
Fd(a){var s,r
A.ayO(a)
s=a.b
r=A.n(s).h("ba<1>")
this.a.a3j(a.gim(a),a.d,A.kH(new A.ba(s,r),new A.a32(),r.h("o.E"),t.oR))},
a7l(a,b){var s,r,q,p,o
if(a.gcj(a)!==B.cG)return
if(t.zs.b(a))return
s=t.yg.b(a)?A.aom():b.$0()
r=a.gim(a)
q=this.b
p=q.i(0,r)
if(!A.ayP(p,a))return
o=q.a
new A.a35(this,p,a,r,s).$0()
if(o!==0!==(q.a!==0))this.aC()},
a7f(a){new A.a33(this,a).$0()}}
A.a32.prototype={
$1(a){return a.gJ5(a)},
$S:246}
A.a35.prototype={
$0(){var s=this
new A.a34(s.a,s.b,s.c,s.d,s.e).$0()},
$S:0}
A.a34.prototype={
$0(){var s,r,q,p,o,n=this,m=null,l=n.b
if(l==null){s=n.c
if(t.yg.b(s))return
n.a.b.k(0,n.d,new A.P9(A.i2(m,m,m,t.mC,t.rA),s))}else{s=n.c
if(t.yg.b(s))n.a.b.u(0,s.gim(s))}r=n.a
q=r.b.i(0,n.d)
if(q==null){l.toString
q=l}p=q.b
q.b=s
o=t.yg.b(s)?A.i2(m,m,m,t.mC,t.rA):r.Fq(n.e)
r.Fd(new A.Pa(q.a6C(o),o,p,s))},
$S:0}
A.a33.prototype={
$0(){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.b,r=r.gaV(r),r=new A.dZ(J.av(r.a),r.b),q=this.b,p=A.n(r).z[1];r.q();){o=r.a
if(o==null)o=p.a(o)
n=o.b
m=s.U2(o,q)
l=o.a
o.a=m
s.Fd(new A.Pa(l,m,n,null))}},
$S:0}
A.a30.prototype={
$2(a,b){var s
if(!this.a.R(0,a))if(a.gBB()&&a.gAC(a)!=null){s=a.gAC(a)
s.toString
s.$1(this.b.aN(this.c.i(0,a)))}},
$S:247}
A.a31.prototype={
$1(a){return!this.a.R(0,a)},
$S:248}
A.SO.prototype={}
A.ck.prototype={
ao(a){},
j(a){return"<none>"}}
A.kR.prototype={
f3(a,b){var s,r=this
if(a.gdP()){r.nb()
if(!a.cy){s=a.ay
s===$&&A.b()
s=!s}else s=!0
if(s)A.ap3(a,null,!0)
else if(a.db)A.az9(a)
s=a.ch.a
s.toString
t.cY.a(s)
s.sbL(0,b)
r.yp(s)}else{s=a.ay
s===$&&A.b()
if(s){a.ch.sb_(0,null)
a.xn(r,b)}else a.xn(r,b)}},
yp(a){a.mL(0)
this.a.hx(0,a)},
gbJ(a){var s,r,q=this
if(q.e==null){q.c=A.azc(q.b)
s=$.ar()
r=s.a22()
q.d=r
q.e=s.a1W(r,null)
r=q.c
r.toString
q.a.hx(0,r)}s=q.e
s.toString
return s},
nb(){var s,r=this
if(r.e==null)return
s=r.c
s.toString
s.sLm(r.d.a2H())
r.e=r.d=r.c=null},
Ch(){var s=this.c
if(s!=null)if(!s.cy){s.cy=!0
s.e8()}},
pD(a,b,c,d){var s,r=this
if(a.CW!=null)a.B8()
r.nb()
r.yp(a)
s=r.a1Y(a,d==null?r.b:d)
b.$2(s,c)
s.nb()},
Lx(a,b,c){return this.pD(a,b,c,null)},
a1Y(a,b){return new A.kR(a,b)},
kS(a,b,c,d,e,f){var s,r,q=this
if(e===B.i){d.$2(q,b)
return null}s=c.dj(b)
if(a){if(f==null){r=new A.ox(B.W,A.z(t.S,t.M),A.ay())
r.ib()}else r=f
if(!s.l(0,r.p1)){r.p1=s
r.e8()}if(e!==r.p2){r.p2=e
r.e8()}q.pD(r,d,b,s)
return r}else{q.a17(s,e,s,new A.a3W(q,d,b))
return null}},
a62(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.i){e.$2(p,b)
return null}s=c.dj(b)
r=d.dj(b)
if(a){if(g==null){q=new A.tt(B.ne,A.z(t.S,t.M),A.ay())
q.ib()}else q=g
if(!r.l(0,q.p1)){q.p1=r
q.e8()}if(f!==q.p2){q.p2=f
q.e8()}p.pD(q,e,b,s)
return q}else{p.a15(r,f,s,new A.a3V(p,e,b))
return null}},
Lw(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.i){e.$2(p,b)
return null}s=c.dj(b)
r=d.dj(b)
if(a){if(g==null){q=new A.ts(B.ne,A.z(t.S,t.M),A.ay())
q.ib()}else q=g
if(r!==q.p1){q.p1=r
q.e8()}if(f!==q.p2){q.p2=f
q.e8()}p.pD(q,e,b,s)
return q}else{p.a14(r,f,s,new A.a3U(p,e,b))
return null}},
pE(a,b,c,d,e){var s,r=this,q=b.a,p=b.b,o=A.vx(q,p,0)
o.cM(0,c)
o.aD(0,-q,-p)
if(a){s=e==null?A.aq4(null):e
s.sbt(0,o)
r.pD(s,d,b,A.aoP(o,r.b))
return s}else{q=r.gbJ(r)
q.cC(0)
q.ak(0,o.a)
d.$2(r,b)
r.gbJ(r).cz(0)
return null}},
a66(a,b,c,d){return this.pE(a,b,c,d,null)},
Lz(a,b,c,d){var s=d==null?A.ap0():d
s.sIi(0,b)
s.sbL(0,a)
this.Lx(s,c,B.k)
return s},
j(a){return"PaintingContext#"+A.eZ(this)+"(layer: "+this.a.j(0)+", canvas bounds: "+this.b.j(0)+")"}}
A.a3W.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.a3V.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.a3U.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.Wg.prototype={}
A.a7f.prototype={
m(){var s,r=this.b
if(r!=null)this.a.as.H(0,r)
r=this.a
if(--r.at===0){s=r.as
s.b.a_(0)
s.c.a_(0)
s.d.a_(0)
s.dY()
r.as=null
r.d.$0()}}}
A.Jn.prototype={
mN(){this.a.$0()},
sa6Q(a){var s=this.e
if(s===a)return
if(s!=null)s.ao(0)
this.e=a
a.ar(this)},
a38(){var s,r,q,p,o,n,m,l,k,j,i,h=this
try{for(p=t.W,o=t.By;n=h.r,n.length!==0;){s=n
h.r=A.a([],o)
n=s
m=new A.a46()
if(!!n.immutable$list)A.L(A.O("sort"))
l=n.length-1
if(l-0<=32)A.L7(n,0,l,m)
else A.L6(n,0,l,m)
for(r=0;r<J.bL(s);++r){if(h.f){h.f=!1
n=h.r
if(n.length!==0){m=s
l=r
k=J.bL(s)
A.dk(l,k,J.bL(m),null,null)
j=A.aX(m)
i=new A.f3(m,l,k,j.h("f3<1>"))
i.qn(m,l,k,j.c)
B.c.I(n,i)
break}}q=J.aR(s,r)
if(q.z){n=q
n=p.a(A.M.prototype.gbx.call(n))===h}else n=!1
if(n)q.X_()}h.f=!1}}finally{h.f=!1}},
TJ(a){try{a.$0()}finally{this.f=!0}},
a37(){var s,r,q,p,o=this.y
B.c.dk(o,new A.a45())
for(s=o.length,r=t.W,q=0;q<o.length;o.length===s||(0,A.P)(o),++q){p=o[q]
if(p.CW&&r.a(A.M.prototype.gbx.call(p))===this)p.HC()}B.c.a_(o)},
a39(){var s,r,q,p,o,n,m,l,k
try{s=this.z
this.z=A.a([],t.By)
for(q=s,J.U2(q,new A.a47()),p=q.length,o=t.W,n=t.cY,m=0;m<q.length;q.length===p||(0,A.P)(q),++m){r=q[m]
if(r.cy||r.db){l=r
l=o.a(A.M.prototype.gbx.call(l))===this}else l=!1
if(l)if(r.ch.a.b!=null)if(r.cy)A.ap3(r,null,!1)
else{l=r
k=l.ch.a
k.toString
l.pS(n.a(k))
l.db=!1}else r.ZO()}}finally{}},
a2I(a){var s,r=this
if(++r.at===1){s=t.ju
r.as=new A.xb(r.c,A.b5(s),A.z(t.S,s),A.b5(s),$.bC())
r.b.$0()}if(a!=null)r.as.X(0,a)
return new A.a7f(r,a)},
JD(){return this.a2I(null)},
a3a(){var s,r,q,p,o,n,m,l,k=this
if(k.as==null)return
try{q=k.ay
p=A.aB(q,!0,A.n(q).c)
B.c.dk(p,new A.a48())
s=p
q.a_(0)
for(q=s,o=q.length,n=t.W,m=0;m<q.length;q.length===o||(0,A.P)(q),++m){r=q[m]
if(r.dy){l=r
l=n.a(A.M.prototype.gbx.call(l))===k}else l=!1
if(l)r.a_B()}k.as.Nk()}finally{}}}
A.a46.prototype={
$2(a,b){return a.a-b.a},
$S:46}
A.a45.prototype={
$2(a,b){return a.a-b.a},
$S:46}
A.a47.prototype={
$2(a,b){return b.a-a.a},
$S:46}
A.a48.prototype={
$2(a,b){return a.a-b.a},
$S:46}
A.A.prototype={
aK(){var s=this
s.cx=s.gdP()||s.go3()
s.ay=s.gdP()},
f4(){var s=this
s.a9()
s.mA()
s.av()
s.b3()
s.aW(new A.a5m())},
m(){this.ch.sb_(0,null)},
ey(a){if(!(a.e instanceof A.ck))a.e=new A.ck()},
ii(a){var s=this
s.ey(a)
s.a9()
s.mA()
s.b3()
s.Cz(a)},
je(a){var s=this
a.E8()
a.e.ao(0)
a.e=null
s.vf(a)
s.a9()
s.mA()
s.b3()},
aW(a){},
r6(a,b,c){A.eb(new A.bM(b,c,"rendering library",A.bq("during "+a+"()"),new A.a5i(this),!1))},
ar(a){var s=this
s.ve(a)
if(s.z&&s.Q!=null){s.z=!1
s.a9()}if(s.CW){s.CW=!1
s.mA()}if(s.cy&&s.ch.a!=null){s.cy=!1
s.av()}if(s.dy&&s.gxI().a){s.dy=!1
s.b3()}},
ga1(){var s=this.at
if(s==null)throw A.c(A.a6("A RenderObject does not have any constraints before it has been laid out."))
return s},
a9(){var s,r=this
if(r.z)return
s=r.Q
if(s==null){r.z=!0
if(r.c!=null)r.u0()
return}if(s!==r)r.u0()
else{r.z=!0
s=t.W
if(s.a(A.M.prototype.gbx.call(r))!=null){s.a(A.M.prototype.gbx.call(r)).r.push(r)
s.a(A.M.prototype.gbx.call(r)).mN()}}},
u0(){this.z=!0
var s=this.c
s.toString
t.d.a(s)
if(!this.as)s.a9()},
E8(){var s=this
if(s.Q!==s){s.Q=null
s.aW(A.asE())}},
YG(){var s,r,q=this,p=q.Q
if(p===q)return
s=t.B2.a(q.c)
r=s==null?null:s.Q
if(r!=p){q.Q=r
q.aW(A.asF())}},
X_(){var s,r,q,p=this
try{p.bM()
p.b3()}catch(q){s=A.af(q)
r=A.au(q)
p.r6("performLayout",s,r)}p.z=!1
p.av()},
cw(a,b){var s,r,q,p,o,n,m,l=this
if(!b||l.gjX()||a.gKK()||!(l.c instanceof A.A))o=l
else{n=l.c
n.toString
n=t.d.a(n).Q
n.toString
o=n}if(!l.z&&a.l(0,l.at)){if(o!==l.Q){l.Q=o
l.aW(A.asF())}return}l.at=a
n=l.Q
if(n!=null&&o!==n)l.aW(A.asE())
l.Q=o
if(l.gjX())try{l.pz()}catch(m){s=A.af(m)
r=A.au(m)
l.r6("performResize",s,r)}try{l.bM()
l.b3()}catch(m){q=A.af(m)
p=A.au(m)
l.r6("performLayout",q,p)}l.z=!1
l.av()},
gjX(){return!1},
KB(a,b){var s=this
s.as=!0
try{t.W.a(A.M.prototype.gbx.call(s)).TJ(new A.a5l(s,a,b))}finally{s.as=!1}},
gdP(){return!1},
go3(){return!1},
pS(a){return a==null?A.az3(B.k):a},
mA(){var s,r,q,p=this
if(p.CW)return
s=p.CW=!0
r=p.c
if(r instanceof A.A){if(r.CW)return
q=p.ay
q===$&&A.b()
if((q?!p.gdP():s)&&!r.gdP()){r.mA()
return}}s=t.W
if(s.a(A.M.prototype.gbx.call(p))!=null)s.a(A.M.prototype.gbx.call(p)).y.push(p)},
HC(){var s,r,q=this
if(!q.CW)return
s=q.cx
s===$&&A.b()
q.cx=!1
q.aW(new A.a5j(q))
if(q.gdP()||q.go3())q.cx=!0
if(!q.gdP()){r=q.ay
r===$&&A.b()}else r=!1
if(r){q.db=q.cy=!1
s=t.W.a(A.M.prototype.gbx.call(q))
if(s!=null)B.c.u(s.z,q)
q.CW=!1
q.av()}else if(s!==q.cx){q.CW=!1
q.av()}else q.CW=!1},
av(){var s,r=this
if(r.cy)return
r.cy=!0
if(r.gdP()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=t.W
if(s.a(A.M.prototype.gbx.call(r))!=null){s.a(A.M.prototype.gbx.call(r)).z.push(r)
s.a(A.M.prototype.gbx.call(r)).mN()}}else{s=r.c
if(s instanceof A.A)s.av()
else{s=t.W
if(s.a(A.M.prototype.gbx.call(r))!=null)s.a(A.M.prototype.gbx.call(r)).mN()}}},
a5a(){var s,r=this
if(r.db||r.cy)return
r.db=!0
if(r.gdP()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=t.W
if(s.a(A.M.prototype.gbx.call(r))!=null){s.a(A.M.prototype.gbx.call(r)).z.push(r)
s.a(A.M.prototype.gbx.call(r)).mN()}}else r.av()},
ZO(){var s,r=this.c
for(;r instanceof A.A;){if(r.gdP()){s=r.ch.a
if(s==null)break
if(s.b!=null)break
r.cy=!0}r=r.c}},
xn(a,b){var s,r,q,p=this
if(p.z)return
p.db=p.cy=!1
p.ay=p.gdP()
try{p.aI(a,b)}catch(q){s=A.af(q)
r=A.au(q)
p.r6("paint",s,r)}},
aI(a,b){},
dt(a,b){},
mI(a){return!0},
bB(a,b){var s,r,q,p,o,n,m,l,k=b==null
if(k){s=t.W.a(A.M.prototype.gbx.call(this)).e
if(s instanceof A.A)b=s}r=A.a([],t.By)
q=t.d
p=this
while(p!==b){r.push(p)
o=p.c
o.toString
q.a(o)
p=o}if(!k){b.toString
r.push(b)}n=new A.bg(new Float64Array(16))
n.dh()
for(m=r.length-1;m>0;m=l){l=m-1
r[m].dt(r[l],n)}return n},
jb(a){return null},
yY(a){return null},
eS(a){},
v1(a){var s
if(t.W.a(A.M.prototype.gbx.call(this)).as==null)return
s=this.fr
if(s!=null&&!s.as)s.Nj(a)
else{s=this.c
if(s!=null)t.d.a(s).v1(a)}},
gxI(){var s,r=this
if(r.dx==null){s=A.q0()
r.dx=s
r.eS(s)}s=r.dx
s.toString
return s},
lW(){this.dy=!0
this.fr=null
this.aW(new A.a5k())},
b3(){var s,r,q,p,o,n,m=this
if(m.b==null||t.W.a(A.M.prototype.gbx.call(m)).as==null){m.dx=null
return}if(m.fr!=null){s=m.dx
s=s==null?null:s.a
r=s===!0}else r=!1
m.dx=null
q=m.gxI().a&&r
s=t.d
p=m
while(!0){if(!(!q&&p.c instanceof A.A))break
if(p!==m&&p.dy)break
p.dy=!0
o=p.c
o.toString
s.a(o)
if(o.dx==null){n=A.q0()
o.dx=n
o.eS(n)}q=o.dx.a
if(q&&o.fr==null)return
p=o}if(p!==m&&m.fr!=null&&m.dy)t.W.a(A.M.prototype.gbx.call(m)).ay.u(0,m)
if(!p.dy){p.dy=!0
s=t.W
if(s.a(A.M.prototype.gbx.call(m))!=null){s.a(A.M.prototype.gbx.call(m)).ay.D(0,p)
s.a(A.M.prototype.gbx.call(m)).mN()}}},
a_B(){var s,r,q,p,o,n,m=this,l=null
if(m.z)return
s=m.fr
if(s==null)s=l
else{s=t.aa.a(A.M.prototype.gaM.call(s,s))
if(s==null)s=l
else s=s.at||s.as}r=t.sP.a(m.F6(s===!0))
q=A.a([],t.T)
s=m.fr
p=s==null
o=p?l:s.x
n=p?l:s.y
s=p?l:s.z
r.oh(s==null?0:s,n,o,q)
B.c.gbp(q)},
F6(a){var s,r,q,p,o,n,m,l,k=this,j={},i=k.gxI()
j.a=i.c
s=!i.d&&!i.a
r=t.yj
q=A.a([],r)
p=A.b5(t.sP)
k.h9(new A.a5h(j,k,a||i.p2,q,p,i,s))
for(o=A.jK(p,p.r),n=A.n(o).c;o.q();){m=o.d;(m==null?n.a(m):m).Ab()}k.dy=!1
if(!(k.c instanceof A.A)){o=j.a
l=new A.QL(A.a([],r),A.a([k],t.By),o)}else{o=j.a
if(s)l=new A.ack(A.a([],r),o)
else{l=new A.RA(a,i,A.a([],r),A.a([k],t.By),o)
if(i.a)l.x=!0}}l.I(0,q)
return l},
h9(a){this.aW(a)},
oa(a,b,c){a.jN(0,t.d1.a(c),b)},
ix(a,b){},
c3(){var s=A.bP(this)
return"<optimized out>#"+s},
j(a){return this.c3()},
ez(a,b,c,d){var s=this.c
if(s instanceof A.A)s.ez(a,b==null?this:b,c,d)},
n5(){return this.ez(B.aP,null,B.t,null)},
l8(a,b){return this.ez(B.aP,a,B.t,b)},
$iaq:1}
A.a5m.prototype={
$1(a){a.f4()},
$S:32}
A.a5i.prototype={
$0(){var s=A.a([],t.F),r=this.a
s.push(A.ak9("The following RenderObject was being processed when the exception was fired",B.FQ,r))
s.push(A.ak9("RenderObject",B.FR,r))
return s},
$S:17}
A.a5l.prototype={
$0(){this.b.$1(this.c.a(this.a.ga1()))},
$S:0}
A.a5j.prototype={
$1(a){var s
a.HC()
s=a.cx
s===$&&A.b()
if(s)this.a.cx=!0},
$S:32}
A.a5k.prototype={
$1(a){a.lW()},
$S:32}
A.a5h.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a.F6(f.c)
if(e.a){B.c.a_(f.d)
f.e.a_(0)
if(!f.f.a)f.a.a=!0}for(s=e.gKs(),r=s.length,q=f.d,p=f.e,o=f.f,n=f.b,m=f.r,l=0;l<s.length;s.length===r||(0,A.P)(s),++l){k=s[l]
q.push(k)
k.b.push(n)
k.a0j(o.aj)
if(o.b||!(n.c instanceof A.A)){k.Ab()
continue}if(k.gkq()==null||m)continue
if(!o.KE(k.gkq()))p.D(0,k)
j=q.length-1
for(i=0;i<j;++i){h=q[i]
g=k.gkq()
g.toString
if(!g.KE(h.gkq())){p.D(0,k)
p.D(0,h)}}}},
$S:32}
A.aJ.prototype={
saX(a){var s=this,r=s.B$
if(r!=null)s.je(r)
s.B$=a
if(a!=null)s.ii(a)},
jI(){var s=this.B$
if(s!=null)this.B5(s)},
aW(a){var s=this.B$
if(s!=null)a.$1(s)}}
A.e8.prototype={$ick:1}
A.ax.prototype={
grR(){return this.dA$},
Fy(a,b){var s,r,q,p=this,o=a.e
o.toString
s=A.n(p).h("ax.1")
s.a(o);++p.dA$
if(b==null){o=o.ab$=p.a8$
if(o!=null){o=o.e
o.toString
s.a(o).aU$=a}p.a8$=a
if(p.bF$==null)p.bF$=a}else{r=b.e
r.toString
s.a(r)
q=r.ab$
if(q==null){o.aU$=b
p.bF$=r.ab$=a}else{o.ab$=q
o.aU$=b
o=q.e
o.toString
s.a(o).aU$=r.ab$=a}}},
zU(a,b,c){this.ii(b)
this.Fy(b,c)},
I(a,b){},
Gq(a){var s,r,q,p,o=this,n=a.e
n.toString
s=A.n(o).h("ax.1")
s.a(n)
r=n.aU$
q=n.ab$
if(r==null)o.a8$=q
else{p=r.e
p.toString
s.a(p).ab$=q}q=n.ab$
if(q==null)o.bF$=r
else{q=q.e
q.toString
s.a(q).aU$=r}n.ab$=n.aU$=null;--o.dA$},
u(a,b){this.Gq(b)
this.je(b)},
u4(a,b){var s=this,r=a.e
r.toString
if(A.n(s).h("ax.1").a(r).aU$==b)return
s.Gq(a)
s.Fy(a,b)
s.a9()},
jI(){var s,r,q,p=this.a8$
for(s=A.n(this).h("ax.1");p!=null;){r=p.a
q=this.a
if(r<=q){p.a=q+1
p.jI()}r=p.e
r.toString
p=s.a(r).ab$}},
aW(a){var s,r,q=this.a8$
for(s=A.n(this).h("ax.1");q!=null;){a.$1(q)
r=q.e
r.toString
q=s.a(r).ab$}},
ga33(a){return this.a8$},
a0Y(a){var s=a.e
s.toString
return A.n(this).h("ax.1").a(s).aU$},
a0W(a){var s=a.e
s.toString
return A.n(this).h("ax.1").a(s).ab$}}
A.JK.prototype={
vy(){this.a9()}}
A.ag4.prototype={}
A.ack.prototype={
I(a,b){B.c.I(this.b,b)},
gKs(){return this.b}}
A.nZ.prototype={
gKs(){return A.a([this],t.yj)},
a0j(a){var s
if(a==null||a.a===0)return
s=this.c;(s==null?this.c=A.b5(t.xJ):s).I(0,a)}}
A.QL.prototype={
oh(a,b,c,d){var s,r,q,p,o,n=this.b,m=B.c.gJ(n)
if(m.fr==null){s=B.c.gJ(n).gn4()
r=B.c.gJ(n)
r=t.W.a(A.M.prototype.gbx.call(r)).as
r.toString
q=$.ajF()
q=new A.c2(null,0,s,B.a2,q.p2,q.e,q.p3,q.f,q.af,q.p4,q.R8,q.RG,q.rx,q.ry,q.to,q.x2,q.xr,q.y1)
q.ar(r)
m.fr=q}m=B.c.gJ(n).fr
m.toString
m.saS(0,B.c.gJ(n).gjU())
p=A.a([],t.T)
for(n=this.e,s=n.length,o=0;o<n.length;n.length===s||(0,A.P)(n),++o)n[o].oh(0,b,c,p)
m.jN(0,p,null)
d.push(m)},
gkq(){return null},
Ab(){},
I(a,b){B.c.I(this.e,b)}}
A.RA.prototype={
oh(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(!h.x){s=h.b
B.c.gJ(s).fr=null
for(r=h.w,q=r.length,p=A.am(s),o=p.c,p=p.h("f3<1>"),n=0;n<r.length;r.length===q||(0,A.P)(r),++n){m=r[n]
l=new A.f3(s,1,g,p)
l.qn(s,1,g,o)
B.c.I(m.b,l)
m.oh(a+h.f.x2,b,c,d)}return}s=h.b
if(s.length>1){k=new A.ag5()
k.T4(c,b,s)}else k=g
r=h.e
q=!r
if(q){if(k==null)p=g
else{p=k.d
p===$&&A.b()
if(!p.gO(p)){p=k.c
p===$&&A.b()
p=p.KO()}else p=!0}p=p===!0}else p=!1
if(p)return
p=B.c.gJ(s)
if(p.fr==null)p.fr=A.a7h(g,B.c.gJ(s).gn4())
j=B.c.gJ(s).fr
j.sKH(r)
j.dx=h.c
j.z=a
if(a!==0){h.EL()
r=h.f
r.siq(0,r.x2+a)}if(k!=null){r=k.d
r===$&&A.b()
j.saS(0,r)
r=k.c
r===$&&A.b()
j.sbt(0,r)
j.x=k.b
j.y=k.a
if(q&&k.e){h.EL()
h.f.bb(B.lG,!0)}}i=A.a([],t.T)
for(r=h.w,q=r.length,n=0;n<r.length;r.length===q||(0,A.P)(r),++n){m=r[n]
p=j.x
m.oh(0,j.y,p,i)}r=h.f
if(r.a)B.c.gJ(s).oa(j,h.f,i)
else j.jN(0,i,r)
d.push(j)},
gkq(){return this.x?null:this.f},
I(a,b){var s,r,q,p,o,n,m=this
for(s=b.length,r=m.w,q=0;q<b.length;b.length===s||(0,A.P)(b),++q){p=b[q]
r.push(p)
if(p.gkq()==null)continue
if(!m.r){m.f=m.f.a1C()
m.r=!0}o=m.f
n=p.gkq()
n.toString
o.ki(n)}},
EL(){var s,r,q=this
if(!q.r){s=q.f
r=A.q0()
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
r.bK=s.bK
r.br=s.br
r.b8=s.b8
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
Ab(){this.x=!0}}
A.ag5.prototype={
T4(a,b,c){var s,r,q,p,o,n,m=this,l=new A.bg(new Float64Array(16))
l.dh()
m.c=l
m.b=a
m.a=b
for(s=c.length-1;s>0;){r=c[s];--s
q=c[s]
a=r.yY(q)
if(a!=null){m.b=a
m.a=A.aqy(m.a,r.jb(q))}else m.b=A.aqy(m.b,r.jb(q))
l=$.au6()
l.dh()
A.aC2(r,q,m.c,l)
m.b=A.aqz(m.b,l)
m.a=A.aqz(m.a,l)}p=B.c.gJ(c)
l=m.b
l=l==null?p.gjU():l.ft(p.gjU())
m.d=l
o=m.a
if(o!=null){n=o.ft(l)
if(n.gO(n)){l=m.d
l=!l.gO(l)}else l=!1
m.e=l
if(!l)m.d=n}}}
A.Qs.prototype={}
A.is.prototype={
j(a){var s=A.a(["offset="+this.a.j(0)],t.s)
s.push(this.qi(0))
return B.c.b5(s,"; ")}}
A.wC.prototype={
ey(a){if(!(a.e instanceof A.is))a.e=new A.is(null,null,B.k)},
scs(a,b){var s=this,r=s.K
switch(r.d.aG(0,b).a){case 0:case 1:return
case 2:r.scs(0,b)
s.ac=s.ag=null
s.wr(b)
s.av()
s.b3()
break
case 3:r.scs(0,b)
s.ac=s.ag=s.bw=null
s.wr(b)
s.a9()
s.xv()
s.ED()
s.HS()
break}},
spG(a){var s=this
if(a==s.b1)return
s.xv()
s.ED()
s.b1=a
s.HS()},
HS(){var s,r,q=this
if(q.b1==null)return
s=q.aw
if(s==null)s=q.aw=q.UH()
r=q.b1
B.c.Z(s,r.gfj(r))},
xv(){var s,r=this.b1
if(r==null||this.aw==null)return
s=this.aw
s.toString
B.c.Z(s,r.gB7(r))},
UH(){var s,r,q,p,o=this.K.d.Md(!1),n=A.a([],t.sb)
for(s=o.length,r=0;r<s;){q=B.b.hL(o,$.ato(),r)
if(r!==q){if(q===-1)q=s
p=new A.jL(new A.f4(r,q),this,o,$.bC())
p.w=p.F5()
n.push(p)
r=q}++r}return n},
ED(){var s,r,q,p=this.aw
if(p==null)return
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.P)(p),++r){q=p[r]
q.af$=$.bC()
q.aj$=0}this.aw=null},
a9(){var s=this.aw
if(s!=null)B.c.Z(s,new A.a5r())
this.Pi()},
m(){var s=this
s.xv()
s.aw=null
s.K.m()
s.ia()},
wr(a){this.b9=A.a([],t.e9)
a.aW(new A.a5o(this))},
sBf(a,b){var s=this.K
if(s.f===b)return
s.sBf(0,b)
this.av()},
sbN(a){var s=this.K
if(s.r===a)return
s.sbN(a)
this.a9()},
sNG(a){if(this.B===a)return
this.B=a
this.a9()},
sa5N(a,b){var s,r=this
if(r.ai===b)return
r.ai=b
s=b===B.bo?"\u2026":null
r.K.sa2D(s)
r.a9()},
sBg(a){var s=this.K
if(s.w===a)return
s.sBg(a)
this.bw=null
this.a9()},
sAe(a){var s=this.K
if(s.z==a)return
s.sAe(a)
this.bw=null
this.a9()},
sA9(a,b){var s=this.K
if(J.f(s.y,b))return
s.sA9(0,b)
this.bw=null
this.a9()},
sNP(a){return},
sBh(a){var s=this.K
if(s.as===a)return
s.sBh(a)
this.bw=null
this.a9()},
sM7(a){return},
sNf(a){var s,r=this
if(J.f(r.cI,a))return
r.cI=a
s=r.aw
s=s==null?null:B.c.kk(s,new A.a5t())
if(s===!0)r.av()},
qD(a){var s,r=this,q=r.BR(a,B.a2)
r.iZ(t.k.a(A.A.prototype.ga1.call(r)))
s=r.K
s.Ej(a,B.a2)
s=s.db
s===$&&A.b()
s=s.b
return q.V(0,new A.u(0,s==null?0:s))},
eP(a){this.iZ(t.k.a(A.A.prototype.ga1.call(this)))
return this.K.eP(B.I)},
ju(a){return!0},
cX(a,b){var s,r,q,p,o,n,m,l,k,j={},i=this.K,h=i.a.i0(b),g=i.d.N_(h)
if(g!=null&&!0){a.D(0,new A.hW(t.kZ.a(g),t.Cq))
s=!0}else s=!1
r=j.a=this.a8$
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
l.dh()
m[14]=0
m[13]=n.b
m[12]=n.a
n=r.e
l.i2(0,n,n,n)
if(a.yk(new A.a5q(j,b,r),b,l))return!0
r=j.a.e
r.toString
k=q.a(r).ab$
j.a=k;++o
r=k}return s},
FH(a,b){var s=this.B||this.ai===B.bo?a:1/0
this.K.A6(s,b)},
vy(){var s=this,r=$.bT,q=r.dy$
switch(q.a){case 0:case 4:if(s.eT)return
s.eT=!0
r.q9(new A.a5u(s,q))
break
case 1:case 2:case 3:s.D7()
s.K.a9()
break}},
iZ(a){this.K.v7(this.e4)
this.FH(a.b,a.a)},
FF(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.dA$
if(i===0)return A.a([],t.aE)
s=j.a8$
r=A.aV(i,B.U_,!1,t.cP)
q=new A.aU(0,a.b,0,1/0).d1(0,j.K.w)
for(i=A.n(j).h("ax.1"),p=!b,o=0;s!=null;){if(p){s.cw(q,!0)
n=s.k3
n.toString
m=j.b9
m===$&&A.b()
switch(m[o].gem()){case B.lp:l=s.ML(j.b9[o].grI())
break
case B.lq:case B.lr:case B.fA:case B.lt:case B.ls:l=null
break
default:l=null}k=n}else{k=s.ha(q)
l=null}n=j.b9
n===$&&A.b()
r[o]=new A.mT(k,n[o].gem(),l,j.b9[o].grI())
n=s.e
n.toString
s=i.a(n).ab$;++o}return r},
WZ(a){return this.FF(a,!1)},
ZC(){var s,r,q=this.a8$,p=t.lO,o=this.K,n=A.n(this).h("ax.1"),m=0
while(!0){if(!(q!=null&&m<o.ax.length))break
s=q.e
s.toString
p.a(s)
r=o.ax[m]
s.a=new A.u(r.a,r.b)
s.e=o.ay[m]
q=n.a(s).ab$;++m}},
SA(){var s,r,q=this.b9
q===$&&A.b()
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.P)(q),++r)switch(q[r].gem()){case B.lp:case B.lq:case B.lr:return!1
case B.ls:case B.lt:case B.fA:continue}return!0},
cg(a){var s,r,q=this
if(!q.SA())return B.U
s=q.K
s.v7(q.FF(a,!0))
q.FH(a.b,a.a)
r=s.gbo(s)
s=s.a
return a.bE(new A.a7(r,Math.ceil(s.gbU(s))))},
bM(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=t.k.a(A.A.prototype.ga1.call(i))
i.e4=i.WZ(g)
i.iZ(g)
i.ZC()
s=i.K
r=s.gbo(s)
q=s.a
q=Math.ceil(q.gbU(q))
p=s.a.ga2t()
o=i.k3=g.bE(new A.a7(r,q))
n=o.b<q||p
m=o.a<r
if(m||n)switch(i.ai.a){case 3:i.b4=!1
i.bw=null
break
case 0:case 2:i.b4=!0
i.bw=null
break
case 1:i.b4=!0
r=A.aaJ(h,s.d.a,"\u2026")
q=s.r
q.toString
o=s.w
l=A.aaH(h,s.y,h,h,r,B.bK,q,h,o,B.aV)
l.a4X()
if(m){switch(s.r.a){case 0:k=l.gbo(l)
j=0
break
case 1:j=i.k3.a
k=j-l.gbo(l)
break
default:k=h
j=k}i.bw=A.aku(new A.u(k,0),new A.u(j,0),A.a([B.l,B.ng],t.bk),h,B.bL,h)}else{j=i.k3.b
s=l.a
i.bw=A.aku(new A.u(0,j-Math.ceil(s.gbU(s))/2),new A.u(0,j),A.a([B.l,B.ng],t.bk),h,B.bL,h)}l.m()
break}else{i.b4=!1
i.bw=null}},
aI(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e={}
f.iZ(t.k.a(A.A.prototype.ga1.call(f)))
if(f.b4){s=f.k3
r=b.a
q=b.b
p=new A.D(r,q,r+s.a,q+s.b)
if(f.bw!=null)a.gbJ(a).C2(p,$.ar().bm())
else a.gbJ(a).cC(0)
a.gbJ(a).ko(p)}s=f.K
s.aI(a.gbJ(a),b)
r=e.a=f.a8$
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
a.a66(j,new A.u(o+r.a,n+r.b),A.vw(k,k,k),new A.a5s(e))
k=e.a.e
k.toString
i=m.a(k).ab$
e.a=i;++l
r=i}if(f.b4){if(f.bw!=null){a.gbJ(a).aD(0,o,n)
h=$.ar().bm()
h.sa0C(B.D3)
h.sCl(f.bw)
s=a.gbJ(a)
r=f.k3
s.cm(new A.D(0,0,0+r.a,0+r.b),h)}a.gbJ(a).cz(0)}s=f.aw
if(s!=null)for(r=s.length,g=0;g<s.length;s.length===r||(0,A.P)(s),++g)s[g].aI(a,b)
f.Pp(a,b)},
BR(a,b){var s
this.iZ(t.k.a(A.A.prototype.ga1.call(this)))
s=this.K
s.Ej(a,b)
s=s.db
s===$&&A.b()
return s.a},
BK(a){this.iZ(t.k.a(A.A.prototype.ga1.call(this)))
return this.K.a.uM(a.a,a.b,B.mv,B.hg)},
i0(a){this.iZ(t.k.a(A.A.prototype.ga1.call(this)))
return this.K.a.i0(a)},
mX(a){this.iZ(t.k.a(A.A.prototype.ga1.call(this)))
return this.K.a.mX(a)},
eS(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.hh(a)
s=d.K
r=s.d
r.toString
q=A.a([],t.lF)
r.a1p(q)
d.cV=q
if(B.c.kk(q,new A.a5p()))a.a=a.b=!0
else{r=d.ag
if(r==null){p=new A.bA("")
o=A.a([],t.ve)
for(r=d.cV,n=r.length,m=0,l=0,k="";l<r.length;r.length===n||(0,A.P)(r),++l){j=r[l]
i=j.b
if(i==null)i=j.a
for(k=j.f,h=k.length,g=0;g<k.length;k.length===h||(0,A.P)(k),++g){f=k[g]
e=f.a
o.push(f.IS(new A.f4(m+e.a,m+e.b)))}k=p.a+=i
m+=i.length}r=d.ag=new A.cv(k.charCodeAt(0)==0?k:k,o)}a.p4=r
a.d=!0
s=s.r
s.toString
a.y1=s}},
oa(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=A.a([],t.T),b0=a7.K,b1=b0.r
b1.toString
s=A.i2(a8,a8,a8,t.qI,t.ju)
r=a7.ac
if(r==null){r=a7.cV
r.toString
r=a7.ac=A.aEs(r)}for(q=r.length,p=t.k,o=b1,n=0,m=0,l=0;l<r.length;r.length===q||(0,A.P)(r),++l,m=j){k=r[l]
b1=k.a
j=m+b1.length
i=m<j
h=i?m:j
i=i?j:m
g=p.a(A.A.prototype.ga1.call(a7))
b0.v7(a7.e4)
f=g.b
f=a7.B||a7.ai===B.bo?f:1/0
b0.A6(f,g.a)
e=b0.a.uM(h,i,B.mv,B.hg)
if(e.length===0)continue
i=B.c.gJ(e)
d=new A.D(i.a,i.b,i.c,i.d)
c=B.c.gJ(e).e
for(i=A.am(e),h=new A.f3(e,1,a8,i.h("f3<1>")),h.qn(e,1,a8,i.c),h=new A.c_(h,h.gp(h)),i=A.n(h).c;h.q();){g=h.d
if(g==null)g=i.a(g)
d=d.oL(new A.D(g.a,g.b,g.c,g.d))
c=g.e}i=d.a
h=Math.max(0,i)
g=d.b
f=Math.max(0,g)
i=Math.min(d.c-i,p.a(A.A.prototype.ga1.call(a7)).b)
g=Math.min(d.d-g,p.a(A.A.prototype.ga1.call(a7)).d)
b=Math.floor(h)-4
a=Math.floor(f)-4
i=Math.ceil(h+i)+4
g=Math.ceil(f+g)+4
a0=new A.D(b,a,i,g)
a1=A.q0()
a2=n+1
a1.id=new A.w2(n,a8)
a1.d=!0
a1.y1=o
f=k.b
b1=f==null?b1:f
a1.p4=new A.cv(b1,k.f)
b1=b2.y
if(b1!=null){a3=b1.ft(a0)
if(a3.a>=a3.c||a3.b>=a3.d)b1=!(b>=i||a>=g)
else b1=!1
a1.bb(B.lG,b1)}a4=A.b7("newChild")
b1=a7.cJ
i=b1==null?a8:b1.a!==0
if(i===!0){b1.toString
i=new A.ba(b1,A.n(b1).h("ba<1>"))
a5=i.ga5(i)
if(!a5.q())A.L(A.bS())
b1=b1.u(0,a5.gG(a5))
b1.toString
if(a4.b!==a4)A.L(A.a20(a4.a))
a4.b=b1}else{a6=new A.jA()
b1=A.a7h(a6,a7.Tj(a6))
if(a4.b!==a4)A.L(A.a20(a4.a))
a4.b=b1}if(b1===a4)A.L(A.hc(a4.a))
J.avE(b1,a1)
if(!b1.w.l(0,a0)){b1.w=a0
b1.ih()}b1=a4.b
if(b1===a4)A.L(A.hc(a4.a))
i=b1.d
i.toString
s.k(0,i,b1)
b1=a4.b
if(b1===a4)A.L(A.hc(a4.a))
a9.push(b1)
n=a2
o=c}a7.cJ=s
b2.jN(0,a9,b3)},
Tj(a){return new A.a5n(this,a)},
lW(){this.vr()
this.cJ=null}}
A.a5r.prototype={
$1(a){return a.x=null},
$S:252}
A.a5o.prototype={
$1(a){return!0},
$S:45}
A.a5t.prototype={
$1(a){var s=a.w
s===$&&A.b()
return s.c!==B.cN},
$S:253}
A.a5q.prototype={
$2(a,b){return this.a.a.c_(a,b)},
$S:18}
A.a5u.prototype={
$1(a){var s=this.a
s.eT=!1
if(s.b!=null){s.D7()
s.K.a9()}},
$S:2}
A.a5s.prototype={
$2(a,b){var s=this.a.a
s.toString
a.f3(s,b)},
$S:11}
A.a5p.prototype={
$1(a){return!1},
$S:254}
A.a5n.prototype={
$0(){var s=this.a,r=s.cJ.i(0,this.b)
r.toString
s.l8(s,r.w)},
$S:0}
A.jL.prototype={
gn(a){var s=this.w
s===$&&A.b()
return s},
Yc(){var s=this,r=s.F5(),q=s.w
q===$&&A.b()
if(q.l(0,r))return
s.w=r
s.aC()},
F5(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f==null||g.e==null)return B.UC
s=f.a
r=g.e.a
f=g.b
q=f.qD(new A.b3(s,B.D))
p=s===r?q:f.qD(new A.b3(r,B.D))
f=f.K
o=f.r
o.toString
n=s>r!==(B.Z===o)
m=A.vx(g.gfJ().a,g.gfJ().b,0)
m.hA(m)
o=A.cA(m,q)
l=f.gun()
k=n?B.Cg:B.Cf
j=A.cA(m,p)
f=f.gun()
i=n?B.Cf:B.Cg
h=g.d.a===g.e.a?B.UE:B.lF
return new A.l3(new A.nl(o,l,k),new A.nl(j,f,i),h,!0)},
td(a){var s=this,r=A.b7("result"),q=s.d,p=s.e,o=a.a
switch(o.a){case 0:case 1:r.sc9(s.a_A(t.ib.a(a).b,o===B.dN))
break
case 2:s.e=s.d=null
r.sc9(B.cM)
break
case 3:o=s.a
s.d=new A.b3(o.a,B.D)
s.e=new A.b3(o.b,B.O)
r.sc9(B.cM)
break
case 4:r.sc9(s.Wb(t.k2.a(a).gBZ()))
break
case 5:t.uQ.a(a)
r.sc9(s.Vv(a.gJZ(a),a.gh0(),a.ga7C()))
break
case 6:t.sQ.a(a)
r.sc9(s.Vb(a.gzg(a),a.gh0(),a.gJf(a)))
break}if(!J.f(q,s.d)||!J.f(p,s.e)){s.b.av()
s.Yc()}return r.aE()},
a_A(a,b){var s,r,q,p,o,n,m=this
if(b)m.e=null
else m.d=null
s=m.b
r=s.bB(0,null)
r.hA(r)
q=A.cA(r,a)
p=m.gfJ()
if(p.gO(p))return A.apE(m.gfJ(),q)
p=m.gfJ()
o=s.K.r
o.toString
n=m.qq(s.i0(A.aAl(p,q,o)))
if(b)m.e=n
else m.d=n
s=n.a
p=m.a
if(s===p.b)return B.bb
if(s===p.a)return B.bc
return A.apE(m.gfJ(),q)},
qq(a){var s,r=a.a,q=this.a,p=q.b
if(r<=p)s=r===p&&a.b===B.D
else s=!0
if(s)return new A.b3(p,B.O)
q=q.a
if(r<q)return new A.b3(q,B.D)
return a},
Wb(a){var s,r,q,p,o=this,n=o.b,m=n.i0(n.l3(a))
if(o.Yx(m))return B.au
s=n.mX(m)
r=A.b7("start")
q=A.b7("end")
n=m.a
p=s.b
if(n>=p)r.b=q.b=new A.b3(n,B.D)
else{r.b=new A.b3(s.a,B.D)
q.b=new A.b3(p,B.O)}o.d=r.aE()
o.e=q.aE()
return B.au},
Vb(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.bB(0,null)
if(j.hA(j)===0)switch(c){case B.fE:case B.dP:return B.bc
case B.fF:case B.dO:return B.bb}s=A.cA(j,new A.u(a,0)).a
switch(c){case B.fE:case B.fF:if(b){k=l.e
k.toString
r=k}else{k=l.d
k.toString
r=k}q=l.Wx(r,!1,s)
p=q.a
o=q.b
break
case B.dO:case B.dP:n=l.e
if(n==null){n=new A.b3(l.a.b,B.O)
l.e=n
r=n}else r=n
n=l.d
if(n==null){l.d=r
m=r}else m=n
p=k.i0(new A.u(s,k.qD(b?r:m).b-k.K.gun()/2))
o=B.au
break
default:p=null
o=null}if(b)l.e=p
else l.d=p
return o},
Vv(a,b,c){var s,r,q,p,o,n,m=this,l=m.e
if(l==null){l=m.a
l=a?new A.b3(l.a,B.D):new A.b3(l.b,B.O)
m.e=l
s=l}else s=l
l=m.d
if(l==null){m.d=s
r=s}else r=l
s=b?s:r
if(a&&s.a===m.a.b)return B.bb
l=!a
if(l&&s.a===m.a.a)return B.bc
switch(c){case B.Wq:l=m.a
q=m.qC(new A.VW(B.b.T(m.c,l.a,l.b)),s,a)
p=B.au
break
case B.Wr:l=m.a
q=m.qC(new A.NP(new A.abs(m),new A.abq(B.b.T(m.c,l.a,l.b))),s,a)
p=B.au
break
case B.Ws:q=m.qC(new A.a23(m),s,a)
p=B.au
break
case B.Wt:o=m.a
n=o.a
o=o.b
q=m.qC(new A.Xi(B.b.T(m.c,n,o)),s,a)
if(a&&q.a===o)p=B.bb
else p=l&&q.a===n?B.bc:B.au
break
default:p=null
q=null}if(b)m.e=q
else m.d=q
return p},
qC(a,b,c){if(c)return this.qq(a.hc(B.U7.hc(b)))
return this.qq(a.hb(B.U6.hb(b)))},
Wx(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.K,i=j.fr
if(i==null)i=j.fr=j.a.a1o()
s=k.BR(a,B.a2)
j=i.length
r=j-1
for(q=s.b,p=0;p<i.length;i.length===j||(0,A.P)(i),++p){o=i[p]
if(o.grI()>q){r=J.avd(o)
break}}if(b&&r===i.length-1)n=new A.b3(l.a.b,B.O)
else if(!b&&r===0)n=new A.b3(l.a.a,B.D)
else n=l.qq(k.i0(new A.u(c,i[b?r+1:r-1].grI())))
k=n.a
j=l.a
if(k===j.a)m=B.bc
else m=k===j.b?B.bb:B.au
return new A.ao(n,m,t.nz)},
Yx(a){var s,r,q,p,o=this
if(o.d==null||o.e==null)return!1
s=A.b7("currentStart")
r=A.b7("currentEnd")
q=o.d
q.toString
p=o.e
p.toString
if(A.alD(q,p)>0){s.b=q
r.b=p}else{s.b=p
r.b=q}return A.alD(s.aE(),a)>=0&&A.alD(r.aE(),a)<=0},
bB(a,b){var s=A.vx(this.gfJ().a,this.gfJ().b,0)
s.cM(0,this.b.bB(0,b))
return s},
hV(a,b){if(this.b.b==null)return},
gfJ(){var s,r,q,p,o,n,m=this,l=m.x
if(l==null){l=m.b
s=m.a
r=s.a
q=l.BK(A.aaI(B.D,r,s.b,!1))
if(q.length!==0){l=B.c.gJ(q)
p=new A.D(l.a,l.b,l.c,l.d)
for(o=1;o<q.length;++o){l=q[o]
p=p.oL(new A.D(l.a,l.b,l.c,l.d))}m.x=p
l=p}else{n=l.qD(new A.b3(r,B.D))
l=A.al1(n,new A.u(n.a+0,n.b+-l.K.gun()))
m.x=l}}return l},
gcQ(a){var s=this.gfJ()
return new A.a7(s.c-s.a,s.d-s.b)},
aI(a,b){var s,r,q,p,o,n=this,m=n.d
if(m==null||n.e==null)return
s=n.b
if(s.cI!=null){r=A.aaI(B.D,m.a,n.e.a,!1)
q=$.ar().bm()
q.scE(0,B.aU)
m=s.cI
m.toString
q.sam(0,m)
for(m=s.BK(r),s=m.length,p=0;p<m.length;m.length===s||(0,A.P)(m),++p){o=m[p]
a.gbJ(a).cm(new A.D(o.a,o.b,o.c,o.d).dj(b),q)}}A.vx(n.gfJ().a,n.gfJ().b,0)},
BP(a){var s=this.b.K.a.MO(a),r=this.a,q=r.a
r=r.b
return A.aaI(B.D,B.f.j9(s.a,q,r),B.f.j9(s.b,q,r),!1)},
$iag:1}
A.zy.prototype={
ar(a){var s,r,q
this.eC(a)
s=this.a8$
for(r=t.lO;s!=null;){s.ar(a)
q=s.e
q.toString
s=r.a(q).ab$}},
ao(a){var s,r,q
this.dX(0)
s=this.a8$
for(r=t.lO;s!=null;){s.ao(0)
q=s.e
q.toString
s=r.a(q).ab$}}}
A.Qt.prototype={}
A.Qu.prototype={
ar(a){this.Qr(a)
$.eY.zq$.a.D(0,this.gDm())},
ao(a){$.eY.zq$.a.u(0,this.gDm())
this.Qs(0)}}
A.T_.prototype={}
A.T0.prototype={}
A.K5.prototype={
sa5M(a){if(a===this.K)return
this.K=a
this.av()},
sa6a(a){if(a===this.ag)return
this.ag=a
this.av()},
sa0U(a){return},
sa0T(a){return},
gjX(){return!0},
go3(){return!0},
gWQ(){var s=this.K,r=(s|1)>>>0>0||(s|2)>>>0>0?80:0
return(s|4)>>>0>0||(s|8)>>>0>0?r+80:r},
cg(a){return a.bE(new A.a7(1/0,this.gWQ()))},
aI(a,b){var s=b.a,r=b.b,q=this.k3
q=new A.Jf(new A.D(s,r,s+q.a,r+q.b),this.K,this.ag,!1,!1,A.z(t.S,t.M),A.ay())
q.ib()
a.nb()
a.yp(q)}}
A.Ka.prototype={}
A.f_.prototype={
ey(a){if(!(a.e instanceof A.ck))a.e=new A.ck()},
cg(a){var s=this.B$
if(s!=null)return s.ha(a)
return this.oi(a)},
bM(){var s=this,r=s.B$,q=t.k
if(r!=null){r.cw(q.a(A.A.prototype.ga1.call(s)),!0)
r=s.B$.k3
r.toString
s.k3=r}else s.k3=s.oi(q.a(A.A.prototype.ga1.call(s)))},
oi(a){return new A.a7(A.I(0,a.a,a.b),A.I(0,a.c,a.d))},
cX(a,b){var s=this.B$
s=s==null?null:s.c_(a,b)
return s===!0},
dt(a,b){},
aI(a,b){var s=this.B$
if(s!=null)a.f3(s,b)}}
A.p0.prototype={
F(){return"HitTestBehavior."+this.b}}
A.wD.prototype={
c_(a,b){var s,r=this
if(r.k3.C(0,b)){s=r.cX(a,b)||r.A===B.aI
if(s||r.A===B.d6)a.D(0,new A.oq(b,r))}else s=!1
return s},
ju(a){return this.A===B.aI}}
A.JR.prototype={
sIg(a){if(this.A.l(0,a))return
this.A=a
this.a9()},
bM(){var s=this,r=t.k.a(A.A.prototype.ga1.call(s)),q=s.B$,p=s.A
if(q!=null){q.cw(p.oI(r),!0)
q=s.B$.k3
q.toString
s.k3=q}else s.k3=p.oI(r).bE(B.U)},
cg(a){var s=this.B$,r=this.A
if(s!=null)return s.ha(r.oI(a))
else return r.oI(a).bE(B.U)}}
A.K0.prototype={
sa5h(a,b){if(this.A===b)return
this.A=b
this.a9()},
sa5e(a,b){if(this.U===b)return
this.U=b
this.a9()},
FI(a){var s,r,q=a.a,p=a.b
p=p<1/0?p:A.I(this.A,q,p)
s=a.c
r=a.d
return new A.aU(q,p,s,r<1/0?r:A.I(this.U,s,r))},
Em(a,b){var s=this.B$
if(s!=null)return a.bE(b.$2(s,this.FI(a)))
return this.FI(a).bE(B.U)},
cg(a){return this.Em(a,A.aj4())},
bM(){this.k3=this.Em(t.k.a(A.A.prototype.ga1.call(this)),A.aj5())}}
A.wy.prototype={
gdP(){if(this.B$!=null){var s=this.kB$
s.toString}else s=!1
return s},
pS(a){var s=a==null?A.ap0():a
s.sIi(0,this.m8$)
return s},
sud(a,b){var s=this,r=s.hE$
if(r===b)return
if(s.b!=null&&r!=null)r.H(0,s.grl())
s.hE$=b
if(s.b!=null)b.X(0,s.grl())
s.y0()},
sIj(a){if(!1===this.zp$)return
this.zp$=!1
this.b3()},
y0(){var s,r=this,q=r.m8$,p=r.hE$
p=r.m8$=B.d.ba(A.amf(p.gn(p),0,1)*255)
if(q!==p){s=r.kB$
p=p>0
r.kB$=p
if(r.B$!=null&&s!==p)r.mA()
r.a5a()
if(q===0||r.m8$===0)r.b3()}},
mI(a){var s=this.hE$
return s.gn(s)>0},
h9(a){var s,r=this.B$
if(r!=null)if(this.m8$===0){s=this.zp$
s.toString}else s=!0
else s=!1
if(s){r.toString
a.$1(r)}}}
A.JN.prototype={}
A.tI.prototype={
X(a,b){return null},
H(a,b){return null},
j(a){return"CustomClipper"}}
A.no.prototype={
BL(a){return this.b.fD(new A.D(0,0,0+a.a,0+a.b),this.c)},
Cn(a){if(A.C(a)!==B.a_u)return!0
t.qm.a(a)
return!a.b.l(0,this.b)||a.c!=this.c}}
A.rl.prototype={
sog(a){var s,r=this,q=r.A
if(q==a)return
r.A=a
s=a==null
if(s||q==null||A.C(a)!==A.C(q)||a.Cn(q))r.qR()
if(r.b!=null){if(q!=null)q.H(0,r.gqQ())
if(!s)a.X(0,r.gqQ())}},
ar(a){var s
this.nh(a)
s=this.A
if(s!=null)s.X(0,this.gqQ())},
ao(a){var s=this.A
if(s!=null)s.H(0,this.gqQ())
this.lj(0)},
qR(){this.U=null
this.av()
this.b3()},
srT(a){if(a!==this.aB){this.aB=a
this.av()}},
bM(){var s,r=this,q=r.k3
q=q!=null?q:null
r.vu()
s=r.k3
s.toString
if(!J.f(q,s))r.U=null},
j5(){var s,r,q=this
if(q.U==null){s=q.A
if(s==null)s=null
else{r=q.k3
r.toString
r=s.BL(r)
s=r}q.U=s==null?q.gqt():s}},
jb(a){var s,r=this
switch(r.aB.a){case 0:return null
case 1:case 2:case 3:if(r.A==null)s=null
else{s=r.k3
s=new A.D(0,0,0+s.a,0+s.b)}if(s==null){s=r.k3
s=new A.D(0,0,0+s.a,0+s.b)}return s}},
m(){this.cn=null
this.ia()}}
A.JQ.prototype={
gqt(){var s=this.k3
return new A.D(0,0,0+s.a,0+s.b)},
c_(a,b){var s=this
if(s.A!=null){s.j5()
if(!s.U.C(0,b))return!1}return s.iT(a,b)},
aI(a,b){var s,r,q=this,p=q.B$
if(p!=null){s=q.ch
if(q.aB!==B.i){q.j5()
p=q.cx
p===$&&A.b()
r=q.U
r.toString
s.sb_(0,a.kS(p,b,r,A.f_.prototype.gmH.call(q),q.aB,t.iM.a(s.a)))}else{a.f3(p,b)
s.sb_(0,null)}}else q.ch.sb_(0,null)}}
A.JP.prototype={
gqt(){var s=$.ar().cq(),r=this.k3
s.o0(new A.D(0,0,0+r.a,0+r.b))
return s},
c_(a,b){var s=this
if(s.A!=null){s.j5()
if(!s.U.C(0,b))return!1}return s.iT(a,b)},
aI(a,b){var s,r,q,p,o=this,n=o.B$
if(n!=null){s=o.ch
if(o.aB!==B.i){o.j5()
n=o.cx
n===$&&A.b()
r=o.k3
q=r.a
r=r.b
p=o.U
p.toString
s.sb_(0,a.Lw(n,b,new A.D(0,0,0+q,0+r),p,A.f_.prototype.gmH.call(o),o.aB,t.n0.a(s.a)))}else{a.f3(n,b)
s.sb_(0,null)}}else o.ch.sb_(0,null)}}
A.zz.prototype={
siq(a,b){if(this.cr===b)return
this.cr=b
this.av()},
shd(a,b){if(this.d8.l(0,b))return
this.d8=b
this.av()},
sam(a,b){if(this.fW.l(0,b))return
this.fW=b
this.av()},
eS(a){this.hh(a)
a.siq(0,this.cr)}}
A.K6.prototype={
sdi(a,b){if(this.kB===b)return
this.kB=b
this.qR()},
sa0E(a,b){if(J.f(this.hE,b))return
this.hE=b
this.qR()},
gqt(){var s,r,q=this.k3,p=0+q.a
q=0+q.b
switch(this.kB.a){case 0:s=this.hE
if(s==null)s=B.aG
return s.dF(new A.D(0,0,p,q))
case 1:s=(p-0)/2
r=(q-0)/2
return new A.ie(0,0,p,q,s,r,s,r,s,r,s,r,s===r)}},
c_(a,b){var s=this
if(s.A!=null){s.j5()
if(!s.U.C(0,b))return!1}return s.iT(a,b)},
aI(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.B$==null){i.ch.sb_(0,null)
return}i.j5()
s=i.U.dj(b)
r=$.ar()
q=r.cq()
q.eL(s)
p=a.gbJ(a)
if(i.cr!==0&&!0){p.cm(new A.D(s.a,s.b,s.c,s.d).dc(20),$.an4())
o=i.d8
n=i.cr
m=i.fW
p.oG(q,o,n,(m.gn(m)>>>24&255)!==255)}l=i.aB===B.hv
if(!l){r=r.bm()
r.sam(0,i.fW)
p.d7(s,r)}r=i.cx
r===$&&A.b()
o=i.k3
n=o.a
o=o.b
m=i.U
m.toString
k=i.ch
j=t.bG.a(k.a)
k.sb_(0,a.a62(r,b,new A.D(0,0,0+n,0+o),m,new A.a5v(i,l),i.aB,j))}}
A.a5v.prototype={
$2(a,b){var s,r
if(this.b){s=a.gbJ(a)
r=$.ar().bm()
r.sam(0,this.a.fW)
s.oF(r)}this.a.hi(a,b)},
$S:11}
A.K7.prototype={
gqt(){var s=$.ar().cq(),r=this.k3
s.o0(new A.D(0,0,0+r.a,0+r.b))
return s},
c_(a,b){var s=this
if(s.A!=null){s.j5()
if(!s.U.C(0,b))return!1}return s.iT(a,b)},
aI(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(j.B$==null){j.ch.sb_(0,null)
return}j.j5()
s=j.k3
r=b.a
q=b.b
p=s.a
s=s.b
o=j.U.dj(b)
n=a.gbJ(a)
if(j.cr!==0&&!0){n.cm(new A.D(r,q,r+p,q+s).dc(20),$.an4())
s=j.d8
r=j.cr
q=j.fW
n.oG(o,s,r,(q.gn(q)>>>24&255)!==255)}m=j.aB===B.hv
if(!m){s=$.ar().bm()
s.sam(0,j.fW)
n.dL(o,s)}s=j.cx
s===$&&A.b()
r=j.k3
q=r.a
r=r.b
p=j.U
p.toString
l=j.ch
k=t.n0.a(l.a)
l.sb_(0,a.Lw(s,b,new A.D(0,0,0+q,0+r),p,new A.a5w(j,m),j.aB,k))}}
A.a5w.prototype={
$2(a,b){var s,r
if(this.b){s=a.gbJ(a)
r=$.ar().bm()
r.sam(0,this.a.fW)
s.oF(r)}this.a.hi(a,b)},
$S:11}
A.tN.prototype={
F(){return"DecorationPosition."+this.b}}
A.JV.prototype={
sa2f(a){var s,r=this
if(a.l(0,r.U))return
s=r.A
if(s!=null)s.m()
r.A=null
r.U=a
r.av()},
sbA(a,b){if(b===this.aB)return
this.aB=b
this.av()},
syF(a){if(a.l(0,this.bz))return
this.bz=a
this.av()},
ao(a){var s=this,r=s.A
if(r!=null)r.m()
s.A=null
s.lj(0)
s.av()},
ju(a){var s=this.U,r=this.k3
r.toString
return s.Kg(r,a,this.bz.d)},
aI(a,b){var s,r,q,p=this,o=p.A
if(o==null)o=p.A=p.U.rY(p.ge9())
s=p.bz
r=p.k3
r.toString
q=new A.p2(s.a,s.b,s.c,s.d,r,s.f)
if(p.aB===B.hF){o.py(a.gbJ(a),b,q)
if(p.U.gzY())a.Ch()}p.hi(a,b)
if(p.aB===B.FM){o=p.A
o.toString
o.py(a.gbJ(a),b,q)
if(p.U.gzY())a.Ch()}}}
A.Kg.prototype={
sLi(a,b){return},
sem(a){var s=this
if(J.f(s.U,a))return
s.U=a
s.av()
s.b3()},
sbN(a){var s=this
if(s.aB==a)return
s.aB=a
s.av()
s.b3()},
go3(){return!1},
sbt(a,b){var s,r=this
if(J.f(r.cn,b))return
s=new A.bg(new Float64Array(16))
s.bj(b)
r.cn=s
r.av()
r.b3()},
smk(a){return},
gwk(){var s,r,q=this,p=q.U,o=p==null?null:p.Y(q.aB)
if(o==null)return q.cn
s=new A.bg(new Float64Array(16))
s.dh()
p=q.k3
p.toString
r=o.a0q(p)
s.aD(0,r.a,r.b)
p=q.cn
p.toString
s.cM(0,p)
s.aD(0,-r.a,-r.b)
return s},
c_(a,b){return this.cX(a,b)},
cX(a,b){var s=this.bz?this.gwk():null
return a.yk(new A.a5F(this),b,s)},
aI(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
if(a.B$!=null){s=a.gwk()
s.toString
r=A.a2u(s)
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
if(b===0||!isFinite(b)){a.ch.sb_(0,null)
return}q=a.cx
q===$&&A.b()
p=A.f_.prototype.gmH.call(a)
o=a.ch
n=o.a
o.sb_(0,a0.pE(q,a1,s,p,n instanceof A.le?n:null))}else{a.hi(a0,a1.V(0,r))
a.ch.sb_(0,null)}}},
dt(a,b){var s=this.gwk()
s.toString
b.cM(0,s)}}
A.a5F.prototype={
$2(a,b){return this.a.ql(a,b)},
$S:18}
A.wA.prototype={
YH(){if(this.A!=null)return
this.A=this.aB},
ES(a){switch(a.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
szz(a){var s=this,r=s.U
if(r===a)return
s.U=a
if(s.ES(r)||s.ES(a))s.a9()
else{s.bT=s.cn=null
s.av()}},
sem(a){var s=this
if(s.aB.l(0,a))return
s.aB=a
s.A=s.bT=s.cn=null
s.av()},
sbN(a){var s=this
if(s.bz==a)return
s.bz=a
s.A=s.bT=s.cn=null
s.av()},
cg(a){var s,r=this.B$
if(r!=null){s=r.ha(B.bO)
switch(this.U.a){case 6:return a.bE(new A.aU(0,a.b,0,a.d).oj(s))
case 1:case 2:case 0:case 4:case 3:case 5:return a.oj(s)}}else return new A.a7(A.I(0,a.a,a.b),A.I(0,a.c,a.d))},
bM(){var s,r,q,p=this,o=p.B$
if(o!=null){o.cw(B.bO,!0)
switch(p.U.a){case 6:o=t.k
s=o.a(A.A.prototype.ga1.call(p))
r=p.B$.k3
r.toString
q=new A.aU(0,s.b,0,s.d).oj(r)
p.k3=o.a(A.A.prototype.ga1.call(p)).bE(q)
break
case 1:case 2:case 0:case 4:case 3:case 5:o=t.k.a(A.A.prototype.ga1.call(p))
s=p.B$.k3
s.toString
p.k3=o.oj(s)
break}p.bT=p.cn=null}else{o=t.k.a(A.A.prototype.ga1.call(p))
p.k3=new A.a7(A.I(0,o.a,o.b),A.I(0,o.c,o.d))}},
y3(){var s,r,q,p,o,n,m,l,k,j=this
if(j.bT!=null)return
if(j.B$==null){j.cn=!1
s=new A.bg(new Float64Array(16))
s.dh()
j.bT=s}else{j.YH()
s=j.B$.k3
s.toString
r=j.U
q=j.k3
q.toString
p=A.arO(r,s,q)
q=p.b
r=p.a
o=s.a
s=s.b
n=j.A.zS(r,new A.D(0,0,0+o,0+s))
m=j.A
m.toString
l=j.k3
k=m.zS(q,new A.D(0,0,0+l.a,0+l.b))
m=n.a
j.cn=n.c-m<o||n.d-n.b<s
s=A.vx(k.a,k.b,0)
s.i2(0,q.a/r.a,q.b/r.b,1)
s.aD(0,-m,-n.b)
j.bT=s}},
G3(a,b){var s,r,q,p,o=this,n=o.bT
n.toString
s=A.a2u(n)
if(s==null){n=o.cx
n===$&&A.b()
r=o.bT
r.toString
q=A.f_.prototype.gmH.call(o)
p=o.ch.a
return a.pE(n,b,r,q,p instanceof A.le?p:null)}else o.hi(a,b.V(0,s))
return null},
aI(a,b){var s,r,q,p,o,n=this
if(n.B$!=null){s=n.k3
if(!s.gO(s)){s=n.B$.k3
s=s.gO(s)}else s=!0}else s=!0
if(s)return
n.y3()
s=n.cn
s.toString
if(s&&n.e5!==B.i){s=n.cx
s===$&&A.b()
r=n.k3
q=r.a
r=r.b
p=n.ch
o=p.a
o=o instanceof A.ox?o:null
p.sb_(0,a.kS(s,b,new A.D(0,0,0+q,0+r),n.gY6(),n.e5,o))}else n.ch.sb_(0,n.G3(a,b))},
cX(a,b){var s=this,r=s.k3
if(!r.gO(r)){r=s.B$
if(r==null)r=null
else{r=r.k3
r=r.gO(r)}r=r===!0}else r=!0
if(r)return!1
s.y3()
return a.yk(new A.a5b(s),b,s.bT)},
mI(a){var s=this.k3
if(!s.gO(s)){s=a.k3
s=!s.gO(s)}else s=!1
return s},
dt(a,b){var s=this.k3
if(!s.gO(s)){s=a.k3
s=!s.gO(s)}else s=!1
if(!s)b.Ck()
else{this.y3()
s=this.bT
s.toString
b.cM(0,s)}}}
A.a5b.prototype={
$2(a,b){return this.a.ql(a,b)},
$S:18}
A.JY.prototype={
sa7c(a){var s=this
if(s.A.l(0,a))return
s.A=a
s.av()
s.b3()},
c_(a,b){return this.cX(a,b)},
cX(a,b){var s,r,q=this
if(q.U){s=q.A
r=q.k3
r=new A.u(s.a*r.a,s.b*r.b)
s=r}else s=null
return a.o1(new A.a5c(q),s,b)},
aI(a,b){var s,r,q=this
if(q.B$!=null){s=q.A
r=q.k3
q.hi(a,new A.u(b.a+s.a*r.a,b.b+s.b*r.b))}},
dt(a,b){var s=this.A,r=this.k3
b.aD(0,s.a*r.a,s.b*r.b)}}
A.a5c.prototype={
$2(a,b){return this.a.ql(a,b)},
$S:18}
A.K8.prototype={
oi(a){return new A.a7(A.I(1/0,a.a,a.b),A.I(1/0,a.c,a.d))},
ix(a,b){var s,r=this,q=null
if(t.Y.b(a)){s=r.a8
return s==null?q:s.$1(a)}if(t.c.b(a))return q
if(t.Cs.b(a)){s=r.aU
return s==null?q:s.$1(a)}if(t.hV.b(a))return q
if(t.AJ.b(a)){s=r.cr
return s==null?q:s.$1(a)}if(t.EL.b(a)){s=r.d8
return s==null?q:s.$1(a)}if(t.r.b(a))return q
if(t.zv.b(a))return q
if(t.zs.b(a)){s=r.zn
return s==null?q:s.$1(a)}}}
A.K2.prototype={
c_(a,b){return this.Pt(a,b)&&!0},
ix(a,b){var s=this.aU
if(s!=null&&t.hV.b(a))return s.$1(a)},
gJ5(a){return this.cr},
gBB(){return this.d8},
ar(a){this.nh(a)
this.d8=!0},
ao(a){this.d8=!1
this.lj(0)},
oi(a){return new A.a7(A.I(1/0,a.a,a.b),A.I(1/0,a.c,a.d))},
$ijf:1,
gAB(a){return this.bF},
gAC(a){return this.ab}}
A.Kb.prototype={
gdP(){return!0}}
A.wB.prototype={
sKk(a){var s,r=this
if(a===r.A)return
r.A=a
s=r.U
if(s==null||!s)r.b3()},
szQ(a){var s=this,r=s.U
if(a==r)return
if(r==null)r=s.A
s.U=a
if(r!==(a==null?s.A:a))s.b3()},
c_(a,b){return!this.A&&this.iT(a,b)},
h9(a){var s,r=this.B$
if(r!=null){s=this.U
s=!(s==null?this.A:s)}else s=!1
if(s){r.toString
a.$1(r)}}}
A.K3.prototype={
su6(a){var s=this
if(a===s.A)return
s.A=a
s.a9()
s.u0()},
eP(a){if(this.A)return null
return this.Dk(a)},
gjX(){return this.A},
cg(a){if(this.A)return new A.a7(A.I(0,a.a,a.b),A.I(0,a.c,a.d))
return this.Ps(a)},
pz(){this.Pj()},
bM(){var s,r=this
if(r.A){s=r.B$
if(s!=null)s.iE(t.k.a(A.A.prototype.ga1.call(r)))}else r.vu()},
c_(a,b){return!this.A&&this.iT(a,b)},
mI(a){return!this.A},
aI(a,b){if(this.A)return
this.hi(a,b)},
h9(a){if(this.A)return
this.vs(a)}}
A.wx.prototype={
sI7(a){if(this.A===a)return
this.A=a
this.b3()},
szQ(a){return},
c_(a,b){return this.A?this.k3.C(0,b):this.iT(a,b)},
h9(a){var s,r,q=this.B$
if(q!=null){s=this.U
r=this.A
s=!r}else s=!1
if(s){q.toString
a.$1(q)}}}
A.jo.prototype={
sa7m(a){if(A.amw(a,this.a8))return
this.a8=a
this.b3()},
sjE(a){var s,r=this
if(J.f(r.bF,a))return
s=r.bF
r.bF=a
if(a!=null!==(s!=null))r.b3()},
skQ(a){var s,r=this
if(J.f(r.aU,a))return
s=r.aU
r.aU=a
if(a!=null!==(s!=null))r.b3()},
sa5z(a){var s,r=this
if(J.f(r.ab,a))return
s=r.ab
r.ab=a
if(a!=null!==(s!=null))r.b3()},
sa5I(a){var s,r=this
if(J.f(r.cr,a))return
s=r.cr
r.cr=a
if(a!=null!==(s!=null))r.b3()},
eS(a){var s,r=this
r.hh(a)
if(r.bF!=null){s=r.a8
s=s==null||s.C(0,B.dQ)}else s=!1
if(s)a.sjE(r.bF)
if(r.aU!=null){s=r.a8
s=s==null||s.C(0,B.Br)}else s=!1
if(s)a.skQ(r.aU)
if(r.ab!=null){s=r.a8
if(s==null||s.C(0,B.dU))a.sua(r.gYo())
s=r.a8
if(s==null||s.C(0,B.dT))a.su9(r.gYm())}if(r.cr!=null){s=r.a8
if(s==null||s.C(0,B.dR))a.suc(r.gYq())
s=r.a8
if(s==null||s.C(0,B.dS))a.su8(r.gYk())}},
Yn(){var s,r,q=this.ab
if(q!=null){s=this.k3
r=s.a*-0.8
s=s.j8(B.k)
s=A.cA(this.bB(0,null),s)
q.$1(new A.hT(null,new A.u(r,0),r,s))}},
Yp(){var s,r,q=this.ab
if(q!=null){s=this.k3
r=s.a*0.8
s=s.j8(B.k)
s=A.cA(this.bB(0,null),s)
q.$1(new A.hT(null,new A.u(r,0),r,s))}},
Yr(){var s,r,q=this.cr
if(q!=null){s=this.k3
r=s.b*-0.8
s=s.j8(B.k)
s=A.cA(this.bB(0,null),s)
q.$1(new A.hT(null,new A.u(0,r),r,s))}},
Yl(){var s,r,q=this.cr
if(q!=null){s=this.k3
r=s.b*0.8
s=s.j8(B.k)
s=A.cA(this.bB(0,null),s)
q.$1(new A.hT(null,new A.u(0,r),r,s))}}}
A.wE.prototype={
sLu(a){var s=this
if(s.A===a)return
s.A=a
s.Hy(a)
s.b3()},
sa1r(a){if(this.U===a)return
this.U=a
this.b3()},
sa2T(a){if(this.aB===a)return
this.aB=a
this.b3()},
sa2Q(a){return},
Hy(a){var s=this,r=a.fy
r=a.fx
r=r==null?null:new A.cv(r,B.ae)
s.cn=r
r=a.id
r=a.go
r=r==null?null:new A.cv(r,B.ae)
s.bT=r
s.e5=null
s.fZ=null
s.iw=null},
sbN(a){if(this.zy==a)return
this.zy=a
this.b3()},
h9(a){this.vs(a)},
eS(a){var s,r,q=this
q.hh(a)
a.a=q.U
a.b=q.aB
s=q.A.a
if(s!=null){a.bb(B.BC,!0)
a.bb(B.Bu,s)}s=q.A.e
if(s!=null)a.bb(B.Bz,s)
s=q.A.f
if(s!=null)a.bb(B.BD,s)
s=q.A.w
if(s!=null)a.bb(B.BB,s)
s=q.A.as
if(s!=null)a.bb(B.Bx,s)
s=q.A.at
if(s!=null)a.bb(B.By,s)
s=q.A.db
if(s!=null)a.bb(B.Bv,s)
s=q.cn
if(s!=null){a.p4=s
a.d=!0}s=q.bT
if(s!=null){a.R8=s
a.d=!0}s=q.e5
if(s!=null){a.RG=s
a.d=!0}s=q.fZ
if(s!=null){a.rx=s
a.d=!0}s=q.iw
if(s!=null){a.ry=s
a.d=!0}s=q.A
r=s.p2
if(r!=null){a.to=r
a.d=!0}s.p3!=null
s=q.A.cx
if(s!=null)a.bb(B.Bw,s)
s=q.A.cy
if(s!=null)a.bb(B.BA,s)
s=q.zy
if(s!=null){a.y1=s
a.d=!0}s=q.A
r=s.R8
if(r!=null){a.id=r
a.d=!0}s=s.RG
if(s!=null)a.Id(s)
if(q.A.rx!=null)a.sjE(q.gYs())
if(q.A.ry!=null)a.skQ(q.gYi())
if(q.A.ag!=null)a.su7(q.gYg())},
Yt(){var s=this.A.rx
if(s!=null)s.$0()},
Yj(){var s=this.A.ry
if(s!=null)s.$0()},
Yh(){var s=this.A.ag
if(s!=null)s.$0()}}
A.JO.prototype={
sa0D(a){return},
eS(a){this.hh(a)
a.c=!0}}
A.K1.prototype={
eS(a){this.hh(a)
a.d=a.p2=a.a=!0}}
A.JX.prototype={
sa2R(a){if(a===this.A)return
this.A=a
this.b3()},
h9(a){if(this.A)return
this.vs(a)}}
A.K_.prototype={
szR(a,b){if(b===this.A)return
this.A=b
this.b3()},
eS(a){this.hh(a)
a.k1=this.A
a.d=!0}}
A.wz.prototype={
sn(a,b){if(this.A.l(0,b))return
this.A=b
this.av()},
sNE(a){return},
aI(a,b){var s,r=this,q=r.A,p=r.k3
p.toString
s=new A.t_(q,p,b,A.z(t.S,t.M),A.ay(),r.$ti.h("t_<1>"))
s.ib()
a.Lx(s,A.f_.prototype.gmH.call(r),b)},
go3(){return!0}}
A.Qk.prototype={
eP(a){var s=this.B$
if(s!=null)return s.jP(a)
return this.Dk(a)}}
A.Ql.prototype={
ar(a){var s=this
s.nh(a)
s.hE$.X(0,s.grl())
s.y0()},
ao(a){this.hE$.H(0,this.grl())
this.lj(0)},
aI(a,b){if(this.m8$===0)return
this.hi(a,b)}}
A.zA.prototype={
ar(a){var s
this.eC(a)
s=this.B$
if(s!=null)s.ar(a)},
ao(a){var s
this.dX(0)
s=this.B$
if(s!=null)s.ao(0)}}
A.zB.prototype={
eP(a){var s=this.B$
if(s!=null)return s.jP(a)
return this.D8(a)}}
A.js.prototype={
F(){return"SelectionResult."+this.b}}
A.dl.prototype={$iag:1}
A.KL.prototype={
spG(a){var s=this,r=s.mc$
if(a==r)return
if(a==null)s.H(0,s.gGQ())
else if(r==null)s.X(0,s.gGQ())
s.GP()
s.mc$=a
s.GR()},
GR(){var s=this
if(s.mc$==null){s.kC$=!1
return}if(s.kC$&&!s.gn(s).d){s.mc$.u(0,s)
s.kC$=!1}else if(!s.kC$&&s.gn(s).d){s.mc$.D(0,s)
s.kC$=!0}},
GP(){var s=this
if(s.kC$){s.mc$.u(0,s)
s.kC$=!1}}}
A.pZ.prototype={
F(){return"SelectionEventType."+this.b}}
A.ny.prototype={
F(){return"TextGranularity."+this.b}}
A.a71.prototype={}
A.tq.prototype={}
A.nj.prototype={}
A.nk.prototype={
F(){return"SelectionExtendDirection."+this.b}}
A.q_.prototype={
F(){return"SelectionStatus."+this.b}}
A.l3.prototype={
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.C(s))return!1
return b instanceof A.l3&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&b.c===s.c&&b.d===s.d},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.nl.prototype={
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.C(s))return!1
return b instanceof A.nl&&b.a.l(0,s.a)&&b.b===s.b&&b.c===s.c},
gt(a){return A.S(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.xO.prototype={
F(){return"TextSelectionHandleType."+this.b}}
A.Kc.prototype={
eP(a){var s,r,q=this.B$
if(q!=null){s=q.jP(a)
r=q.e
r.toString
t.Ch.a(r)
if(s!=null)s+=r.a.b}else s=this.D8(a)
return s},
aI(a,b){var s,r=this.B$
if(r!=null){s=r.e
s.toString
a.f3(r,t.Ch.a(s).a.V(0,b))}},
cX(a,b){var s,r=this.B$
if(r!=null){s=r.e
s.toString
t.Ch.a(s)
return a.o1(new A.a5x(b,s,r),s.a,b)}return!1}}
A.a5x.prototype={
$2(a,b){return this.c.c_(a,b)},
$S:18}
A.K4.prototype={
ra(){var s=this
if(s.A!=null)return
s.A=s.U.Y(s.aB)},
sdB(a,b){var s=this
if(s.U.l(0,b))return
s.U=b
s.A=null
s.a9()},
sbN(a){var s=this
if(s.aB==a)return
s.aB=a
s.A=null
s.a9()},
cg(a){var s,r,q,p=this
p.ra()
if(p.B$==null){s=p.A
return a.bE(new A.a7(s.a+s.c,s.b+s.d))}s=p.A
s.toString
r=a.J9(s)
q=p.B$.ha(r)
s=p.A
return a.bE(new A.a7(s.a+q.a+s.c,s.b+q.b+s.d))},
bM(){var s,r,q,p,o,n,m=this,l=t.k.a(A.A.prototype.ga1.call(m))
m.ra()
if(m.B$==null){s=m.A
m.k3=l.bE(new A.a7(s.a+s.c,s.b+s.d))
return}s=m.A
s.toString
r=l.J9(s)
m.B$.cw(r,!0)
s=m.B$
q=s.e
q.toString
t.Ch.a(q)
p=m.A
o=p.a
n=p.b
q.a=new A.u(o,n)
s=s.k3
m.k3=l.bE(new A.a7(o+s.a+p.c,n+s.b+p.d))}}
A.JM.prototype={
ra(){var s=this
if(s.A!=null)return
s.A=s.U.Y(s.aB)},
sem(a){var s=this
if(s.U.l(0,a))return
s.U=a
s.A=null
s.a9()},
sbN(a){var s=this
if(s.aB==a)return
s.aB=a
s.A=null
s.a9()},
yl(){var s,r,q,p,o=this
o.ra()
s=o.B$
r=s.e
r.toString
t.Ch.a(r)
q=o.A
q.toString
p=o.k3
p.toString
s=s.k3
s.toString
r.a=q.lT(t.uu.a(p.ad(0,s)))}}
A.K9.prototype={
sa7r(a){if(this.aU==a)return
this.aU=a
this.a9()},
sa43(a){if(this.ab==a)return
this.ab=a
this.a9()},
cg(a){var s,r,q=this,p=q.aU!=null||a.b===1/0,o=q.ab!=null||a.d===1/0,n=q.B$
if(n!=null){s=n.ha(new A.aU(0,a.b,0,a.d))
if(p){n=q.aU
if(n==null)n=1
n=s.a*n}else n=1/0
if(o){r=q.ab
if(r==null)r=1
r=s.b*r}else r=1/0
return a.bE(new A.a7(n,r))}n=p?0:1/0
return a.bE(new A.a7(n,o?0:1/0))},
bM(){var s,r,q=this,p=t.k.a(A.A.prototype.ga1.call(q)),o=q.aU!=null||p.b===1/0,n=q.ab!=null||p.d===1/0,m=q.B$
if(m!=null){m.cw(new A.aU(0,p.b,0,p.d),!0)
if(o){m=q.B$.k3.a
s=q.aU
m*=s==null?1:s}else m=1/0
if(n){s=q.B$.k3.b
r=q.ab
s*=r==null?1:r}else s=1/0
q.k3=p.bE(new A.a7(m,s))
q.yl()}else{m=o?0:1/0
q.k3=p.bE(new A.a7(m,n?0:1/0))}}}
A.a7z.prototype={
uT(a){return new A.a7(A.I(1/0,a.a,a.b),A.I(1/0,a.c,a.d))}}
A.JU.prototype={
syW(a){var s=this,r=s.A
if(r===a)return
if(A.C(a)!==A.C(r)||a.n3(r))s.a9()
s.A=a
s.b!=null},
ar(a){this.Qt(a)},
ao(a){this.Qu(0)},
cg(a){return a.bE(this.A.uT(a))},
bM(){var s,r,q,p,o,n,m=this,l=t.k,k=l.a(A.A.prototype.ga1.call(m))
m.k3=k.bE(m.A.uT(k))
if(m.B$!=null){s=m.A.BM(l.a(A.A.prototype.ga1.call(m)))
l=m.B$
l.toString
k=s.a
r=s.b
q=k>=r
l.cw(s,!(q&&s.c>=s.d))
l=m.B$
p=l.e
p.toString
t.Ch.a(p)
o=m.A
n=m.k3
n.toString
if(q&&s.c>=s.d)l=new A.a7(A.I(0,k,r),A.I(0,s.c,s.d))
else{l=l.k3
l.toString}p.a=o.BV(n,l)}}}
A.zC.prototype={
ar(a){var s
this.eC(a)
s=this.B$
if(s!=null)s.ar(a)},
ao(a){var s
this.dX(0)
s=this.B$
if(s!=null)s.ao(0)}}
A.uB.prototype={
F(){return"GrowthDirection."+this.b}}
A.l6.prototype={
gKK(){return!1},
a0v(a,b){var s=this.w
switch(A.bf(this.a).a){case 0:return new A.aU(b,a,s,s)
case 1:return new A.aU(s,s,b,a)}},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.l6))return!1
return b.a===s.a&&b.b===s.b&&b.d===s.d&&b.f===s.f&&b.r===s.r&&b.w===s.w&&b.x===s.x&&b.y===s.y&&b.Q===s.Q&&b.z===s.z},
gt(a){var s=this
return A.S(s.a,s.b,s.d,s.f,s.r,s.w,s.x,s.y,s.Q,s.z,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this,r=A.a([s.a.j(0),s.b.j(0),s.c.j(0),"scrollOffset: "+B.d.N(s.d,1),"remainingPaintExtent: "+B.d.N(s.r,1)],t.s),q=s.f
if(q!==0)r.push("overlap: "+B.d.N(q,1))
r.push("crossAxisExtent: "+B.d.N(s.w,1))
r.push("crossAxisDirection: "+s.x.j(0))
r.push("viewportMainAxisExtent: "+B.d.N(s.y,1))
r.push("remainingCacheExtent: "+B.d.N(s.Q,1))
r.push("cacheOrigin: "+B.d.N(s.z,1))
return"SliverConstraints("+B.c.b5(r,", ")+")"}}
A.a9h.prototype={
c3(){return"SliverGeometry"}}
A.q5.prototype={}
A.L1.prototype={
j(a){return A.C(this.a).j(0)+"@(mainAxis: "+A.h(this.c)+", crossAxis: "+A.h(this.d)+")"}}
A.xn.prototype={
j(a){var s=this.a
return"layoutOffset="+(s==null?"None":B.d.N(s,1))}}
A.l7.prototype={
j(a){return"paintOffset="+A.h(this.a)}}
A.jv.prototype={}
A.co.prototype={
ga1(){return t.p.a(A.A.prototype.ga1.call(this))},
gjU(){return this.ghS()},
ghS(){var s=this,r=t.p
switch(A.bf(r.a(A.A.prototype.ga1.call(s)).a).a){case 0:return new A.D(0,0,0+s.id.c,0+r.a(A.A.prototype.ga1.call(s)).w)
case 1:return new A.D(0,0,0+r.a(A.A.prototype.ga1.call(s)).w,0+s.id.c)}},
pz(){},
Kf(a,b,c){var s=this
if(c>=0&&c<s.id.r&&b>=0&&b<t.p.a(A.A.prototype.ga1.call(s)).w)if(s.zP(a,b,c)||!1){a.D(0,new A.L1(c,b,s))
return!0}return!1},
zP(a,b,c){return!1},
hz(a,b,c){var s=a.d,r=a.r,q=s+r
return A.I(A.I(c,s,q)-A.I(b,s,q),0,r)},
oc(a,b,c){var s=a.d,r=s+a.z,q=a.Q,p=s+q
return A.I(A.I(c,r,p)-A.I(b,r,p),0,q)},
yD(a){return 0},
dt(a,b){},
ix(a,b){}}
A.a5y.prototype={
F3(a){var s
switch(a.a.a){case 0:case 3:s=!1
break
case 2:case 1:s=!0
break
default:s=null}switch(a.b.a){case 0:break
case 1:s=!s
break}return s},
a4d(a,b,c,d){var s,r,q,p,o=this,n={},m=t.p,l=o.F3(m.a(A.A.prototype.ga1.call(o))),k=b.e
k.toString
k=t.D.a(k).a
k.toString
s=k-m.a(A.A.prototype.ga1.call(o)).d
r=d-s
q=c-0
p=n.a=null
switch(A.bf(m.a(A.A.prototype.ga1.call(o)).a).a){case 0:if(!l){m=b.k3.a
r=m-r
s=o.id.c-m-s}p=new A.u(s,0)
n.a=new A.u(r,q)
break
case 1:if(!l){m=b.k3.b
r=m-r
s=o.id.c-m-s}p=new A.u(0,s)
n.a=new A.u(q,r)
break}return a.a0l(new A.a5z(n,b),p)}}
A.a5z.prototype={
$1(a){return this.b.c_(a,this.a.a)},
$S:92}
A.Rf.prototype={}
A.Ri.prototype={
ao(a){this.vp(0)}}
A.Kd.prototype={
spX(a){if(this.c8===a)return
this.c8=a
this.a9()}}
A.Ke.prototype={
MQ(a,b){var s,r
if(b>0){s=a/b
r=B.d.ba(s)
if(Math.abs(s*b-r*b)<1e-10)return r
return B.d.cK(s)}return 0},
BQ(a,b){var s,r
if(b>0){s=a/b-1
r=B.d.ba(s)
if(Math.abs(s*b-r*b)<1e-10)return Math.max(0,r)
return Math.max(0,B.d.du(s))}return 0},
Sw(a){var s,r=this.a8$,q=A.n(this).h("ax.1"),p=t.D,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s<a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).ab$}return o},
Sx(a){var s,r=this.bF$,q=A.n(this).h("ax.1"),p=t.D,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s>a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).aU$}return o},
bM(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=t.p,a7=a6.a(A.A.prototype.ga1.call(a4)),a8=a4.ap
a8.R8=!1
s=a6.a(A.A.prototype.ga1.call(a4)).y*a4.c8
a6=a7.d
r=a6+a7.z
q=r+a7.Q
p=a7.a0v(s,s)
o=a4.MQ(r,s)
n=isFinite(q)?a4.BQ(q,s):a5
if(a4.a8$!=null){m=a4.Sw(o)
a4.IG(m,n!=null?a4.Sx(n):0)}else a4.IG(0,0)
if(a4.a8$==null)if(!a4.a07(o,s*o)){l=o<=0?0:a8.grR()*s
a4.id=A.xm(a5,!1,a5,a5,l,0,0,l,a5)
a8.Jd()
return}k=a4.a8$
k.toString
k=k.e
k.toString
j=t.D
k=j.a(k).b
k.toString
i=k-1
h=a5
for(;i>=o;--i){g=a4.a4q(p)
if(g==null){a4.id=A.xm(a5,!1,a5,a5,0,0,0,0,i*s)
return}k=g.e
k.toString
j.a(k).a=s*i
if(h==null)h=g}if(h==null){a4.a8$.iE(p)
h=a4.a8$
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
g=k.a(d).ab$
if(g!=null){d=g.e
d.toString
d=j.a(d).b
d.toString
d=d!==i}else d=!0
if(d){g=a4.a4p(p,h)
if(g==null){e=i*s
break}}else g.iE(p)
d=g.e
d.toString
j.a(d)
c=d.b
c.toString
d.a=s*c;++i
h=g}k=a4.bF$
k.toString
k=k.e
k.toString
k=j.a(k).b
k.toString
b=s*o
a=s*(k+1)
e=Math.min(e,a8.a2N(a7,o,k,b,a))
a0=a4.hz(a7,b,a)
a1=a4.oc(a7,b,a)
a2=a6+a7.r
a3=isFinite(a2)?a4.BQ(a2,s):a5
a4.id=A.xm(a1,a3!=null&&k>=a3||a6>0,a5,a5,e,a0,0,e,a5)
if(e===a)a8.R8=!0
a8.Jd()}}
A.i0.prototype={$ick:1}
A.a5D.prototype={
ey(a){}}
A.ho.prototype={
j(a){var s=this.b,r=this.oR$?"keepAlive; ":""
return"index="+A.h(s)+"; "+r+this.Q1(0)}}
A.n9.prototype={
ey(a){if(!(a.e instanceof A.ho))a.e=new A.ho(!1,null,null)},
ii(a){var s
this.D9(a)
s=a.e
s.toString
t.D.a(s)
if(!s.c){t.x.a(a)
s.b=this.ap.p4}},
zU(a,b,c){this.vi(0,b,c)},
u4(a,b){var s,r,q,p=this,o=a.e
o.toString
s=t.D
s.a(o)
if(!o.c){p.O3(a,b)
o=a.e
o.toString
s.a(o).b=p.ap.p4
p.a9()}else{r=p.aq
if(r.i(0,o.b)===a)r.u(0,o.b)
q=a.e
q.toString
s.a(q).b=p.ap.p4
o=o.b
o.toString
r.k(0,o,a)}},
u(a,b){var s=b.e
s.toString
t.D.a(s)
if(!s.c){this.O5(0,b)
return}this.aq.u(0,s.b)
this.je(b)},
wc(a,b){this.KB(new A.a5A(this,a,b),t.p)},
Ex(a){var s,r=this,q=a.e
q.toString
t.D.a(q)
if(q.oR$){r.u(0,a)
s=q.b
s.toString
r.aq.k(0,s,a)
a.e=q
r.D9(a)
q.c=!0}else r.ap.LK(a)},
ar(a){var s,r,q
this.Qv(a)
for(s=this.aq,s=s.gaV(s),s=new A.dZ(J.av(s.a),s.b),r=A.n(s).z[1];s.q();){q=s.a;(q==null?r.a(q):q).ar(a)}},
ao(a){var s,r,q
this.Qw(0)
for(s=this.aq,s=s.gaV(s),s=new A.dZ(J.av(s.a),s.b),r=A.n(s).z[1];s.q();){q=s.a;(q==null?r.a(q):q).ao(0)}},
jI(){this.O4()
var s=this.aq
s.gaV(s).Z(0,this.gLH())},
aW(a){var s
this.CG(a)
s=this.aq
s.gaV(s).Z(0,a)},
h9(a){this.CG(a)},
a07(a,b){var s
this.wc(a,null)
s=this.a8$
if(s!=null){s=s.e
s.toString
t.D.a(s).a=b
return!0}this.ap.R8=!0
return!1},
a4q(a){var s,r,q,p=this,o=p.a8$
o.toString
o=o.e
o.toString
s=t.D
o=s.a(o).b
o.toString
r=o-1
p.wc(r,null)
o=p.a8$
o.toString
q=o.e
q.toString
q=s.a(q).b
q.toString
if(q===r){o.cw(a,!1)
return p.a8$}p.ap.R8=!0
return null},
a4p(a,b){var s,r,q,p=b.e
p.toString
s=t.D
p=s.a(p).b
p.toString
r=p+1
this.wc(r,b)
p=b.e
p.toString
q=A.n(this).h("ax.1").a(p).ab$
if(q!=null){p=q.e
p.toString
p=s.a(p).b
p.toString
p=p===r}else p=!1
if(p){q.cw(a,!1)
return q}this.ap.R8=!0
return null},
IG(a,b){var s={}
s.a=a
s.b=b
this.KB(new A.a5C(s,this),t.p)},
Lj(a){switch(A.bf(t.p.a(A.A.prototype.ga1.call(this)).a).a){case 0:return a.k3.a
case 1:return a.k3.b}},
zP(a,b,c){var s,r,q=this.bF$,p=A.anD(a)
for(s=A.n(this).h("ax.1");q!=null;){if(this.a4d(p,q,b,c))return!0
r=q.e
r.toString
q=s.a(r).aU$}return!1},
yD(a){var s=a.e
s.toString
return t.D.a(s).a},
mI(a){var s=t.ub.a(a.e)
return(s==null?null:s.b)!=null&&!this.aq.R(0,s.b)},
dt(a,b){var s,r,q,p,o=this
if(!o.mI(a))b.Ck()
else{s=t.p
r=o.F3(s.a(A.A.prototype.ga1.call(o)))
q=a.e
q.toString
q=t.D.a(q).a
q.toString
p=q-s.a(A.A.prototype.ga1.call(o)).d
switch(A.bf(s.a(A.A.prototype.ga1.call(o)).a).a){case 0:b.aD(0,!r?o.id.c-a.k3.a-p:p,0)
break
case 1:b.aD(0,0,!r?o.id.c-a.k3.b-p:p)
break}}},
aI(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null
if(d.a8$==null)return
s=t.p
switch(A.k0(s.a(A.A.prototype.ga1.call(d)).a,s.a(A.A.prototype.ga1.call(d)).b)){case B.A:r=b.V(0,new A.u(0,d.id.c))
q=B.zH
p=B.dE
o=!0
break
case B.ay:r=b
q=B.dE
p=B.fv
o=!1
break
case B.z:r=b
q=B.fv
p=B.dE
o=!1
break
case B.af:r=b.V(0,new A.u(d.id.c,0))
q=B.zI
p=B.fv
o=!0
break
default:o=c
r=o
p=r
q=p}n=d.a8$
for(m=A.n(d).h("ax.1"),l=t.D;n!=null;){k=n.e
k.toString
k=l.a(k).a
k.toString
j=k-s.a(A.A.prototype.ga1.call(d)).d
k=r.a
i=q.a
k=k+i*j+p.a*0
h=r.b
g=q.b
h=h+g*j+p.b*0
f=new A.u(k,h)
if(o){e=d.Lj(n)
f=new A.u(k+i*e,h+g*e)}if(j<s.a(A.A.prototype.ga1.call(d)).r&&j+d.Lj(n)>0)a.f3(n,f)
k=n.e
k.toString
n=m.a(k).ab$}}}
A.a5A.prototype={
$1(a){var s=this.a,r=s.aq,q=this.b,p=this.c
if(r.R(0,q)){r=r.u(0,q)
r.toString
q=r.e
q.toString
t.D.a(q)
s.je(r)
r.e=q
s.vi(0,r,p)
q.c=!1}else s.ap.a1X(q,p)},
$S:87}
A.a5C.prototype={
$1(a){var s,r,q
for(s=this.a,r=this.b;s.a>0;){q=r.a8$
q.toString
r.Ex(q);--s.a}for(;s.b>0;){q=r.bF$
q.toString
r.Ex(q);--s.b}s=r.aq
s=s.gaV(s)
q=A.n(s).h("aK<o.E>")
B.c.Z(A.aB(new A.aK(s,new A.a5B(),q),!0,q.h("o.E")),r.ap.ga6q())},
$S:87}
A.a5B.prototype={
$1(a){var s=a.e
s.toString
return!t.D.a(s).oR$},
$S:259}
A.zE.prototype={
ar(a){var s,r,q
this.eC(a)
s=this.a8$
for(r=t.D;s!=null;){s.ar(a)
q=s.e
q.toString
s=r.a(q).ab$}},
ao(a){var s,r,q
this.dX(0)
s=this.a8$
for(r=t.D;s!=null;){s.ao(0)
q=s.e
q.toString
s=r.a(q).ab$}}}
A.Qy.prototype={}
A.Qz.prototype={}
A.Rg.prototype={
ao(a){this.vp(0)}}
A.Rh.prototype={}
A.wF.prototype={
gyx(){var s=this,r=t.p
switch(A.k0(r.a(A.A.prototype.ga1.call(s)).a,r.a(A.A.prototype.ga1.call(s)).b)){case B.A:return s.bS.d
case B.ay:return s.bS.a
case B.z:return s.bS.b
case B.af:return s.bS.c}},
ga0n(){var s=this,r=t.p
switch(A.k0(r.a(A.A.prototype.ga1.call(s)).a,r.a(A.A.prototype.ga1.call(s)).b)){case B.A:return s.bS.b
case B.ay:return s.bS.c
case B.z:return s.bS.d
case B.af:return s.bS.a}},
ga27(){switch(A.bf(t.p.a(A.A.prototype.ga1.call(this)).a).a){case 0:var s=this.bS
return s.gbc(s)+s.gbg(s)
case 1:return this.bS.gco()}},
ey(a){if(!(a.e instanceof A.l7))a.e=new A.l7(B.k)},
bM(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=null,a2=t.p,a3=a2.a(A.A.prototype.ga1.call(a0)),a4=a0.gyx()
a0.ga0n()
s=a0.bS
s.toString
a2=s.a0p(A.bf(a2.a(A.A.prototype.ga1.call(a0)).a))
r=a0.ga27()
if(a0.B$==null){q=a0.hz(a3,0,a2)
a0.id=A.xm(a0.oc(a3,0,a2),!1,a1,a1,a2,Math.min(q,a3.r),0,a2,a1)
return}p=a0.hz(a3,0,a4)
o=a3.f
if(o>0)o=Math.max(0,o-p)
s=a0.B$
s.toString
n=Math.max(0,a3.d-a4)
m=Math.min(0,a3.z+a4)
l=a3.r
k=a0.hz(a3,0,a4)
j=a3.Q
i=a0.oc(a3,0,a4)
h=Math.max(0,a3.w-r)
g=a3.a
f=a3.b
s.cw(new A.l6(g,f,a3.c,n,a4+a3.e,o,l-k,h,a3.x,a3.y,m,j-i),!0)
e=a0.B$.id
s=e.y
if(s!=null){a0.id=A.xm(a1,!1,a1,a1,0,0,0,0,s)
return}s=e.a
n=a4+s
m=a2+s
d=a0.hz(a3,n,m)
c=p+d
b=a0.oc(a3,0,a4)
a=a0.oc(a3,n,m)
n=e.c
k=e.d
q=Math.min(p+Math.max(n,k+d),l)
l=e.b
k=Math.min(c+k,q)
j=Math.min(a+b+e.z,j)
i=e.e
n=Math.max(c+n,p+e.r)
a0.id=A.xm(j,e.x,n,k,a2+i,q,l,m,a1)
m=a0.B$.e
m.toString
t.v.a(m)
switch(A.k0(g,f)){case B.A:a2=a0.bS
n=a2.a
s=a2.d+s
m.a=new A.u(n,a0.hz(a3,s,s+a2.b))
break
case B.ay:m.a=new A.u(a0.hz(a3,0,a0.bS.a),a0.bS.b)
break
case B.z:a2=a0.bS
m.a=new A.u(a2.a,a0.hz(a3,0,a2.b))
break
case B.af:a2=a0.bS
s=a2.c+s
m.a=new A.u(a0.hz(a3,s,s+a2.a),a0.bS.b)
break}},
zP(a,b,c){var s,r,q,p,o=this,n=o.B$
if(n!=null&&n.id.r>0){n=n.e
n.toString
t.v.a(n)
s=o.hz(t.p.a(A.A.prototype.ga1.call(o)),0,o.gyx())
r=o.B$
r.toString
r=o.a0Z(r)
n=n.a
q=o.B$.ga4b()
p=n!=null
if(p)a.c.push(new A.re(new A.u(-n.a,-n.b)))
q.$3$crossAxisPosition$mainAxisPosition(a,b-r,c-s)
if(p)a.um()}return!1},
a0Z(a){var s=this,r=t.p
switch(A.k0(r.a(A.A.prototype.ga1.call(s)).a,r.a(A.A.prototype.ga1.call(s)).b)){case B.A:case B.z:return s.bS.a
case B.af:case B.ay:return s.bS.b}},
yD(a){return this.gyx()},
dt(a,b){var s=a.e
s.toString
s=t.v.a(s).a
b.aD(0,s.a,s.b)},
aI(a,b){var s,r=this.B$
if(r!=null&&r.id.w){s=r.e
s.toString
a.f3(r,b.V(0,t.v.a(s).a))}}}
A.Qw.prototype={
ar(a){var s
this.eC(a)
s=this.B$
if(s!=null)s.ar(a)},
ao(a){var s
this.dX(0)
s=this.B$
if(s!=null)s.ao(0)}}
A.a57.prototype={
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return b instanceof A.a57&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this
return"RelativeRect.fromLTRB("+B.d.N(s.a,1)+", "+B.d.N(s.b,1)+", "+B.d.N(s.c,1)+", "+B.d.N(s.d,1)+")"}}
A.e2.prototype={
gA_(){var s=this
return s.e!=null||s.f!=null||s.r!=null||s.w!=null||s.x!=null||s.y!=null},
j(a){var s=this,r=A.a([],t.s),q=s.e
if(q!=null)r.push("top="+A.hB(q))
q=s.f
if(q!=null)r.push("right="+A.hB(q))
q=s.r
if(q!=null)r.push("bottom="+A.hB(q))
q=s.w
if(q!=null)r.push("left="+A.hB(q))
q=s.x
if(q!=null)r.push("width="+A.hB(q))
q=s.y
if(q!=null)r.push("height="+A.hB(q))
if(r.length===0)r.push("not positioned")
r.push(s.qi(0))
return B.c.b5(r,"; ")}}
A.xv.prototype={
F(){return"StackFit."+this.b}}
A.wG.prototype={
ey(a){if(!(a.e instanceof A.e2))a.e=new A.e2(null,null,B.k)},
ZU(){var s=this
if(s.ag!=null)return
s.ag=s.ac.Y(s.aw)},
sem(a){var s=this
if(s.ac.l(0,a))return
s.ac=a
s.ag=null
s.a9()},
sbN(a){var s=this
if(s.aw==a)return
s.aw=a
s.ag=null
s.a9()},
eP(a){return this.J8(a)},
cg(a){return this.H7(a,A.aj4())},
H7(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.ZU()
if(e.dA$===0){s=a.a
r=a.b
q=A.I(1/0,s,r)
p=a.c
o=a.d
n=A.I(1/0,p,o)
return isFinite(q)&&isFinite(n)?new A.a7(A.I(1/0,s,r),A.I(1/0,p,o)):new A.a7(A.I(0,s,r),A.I(0,p,o))}m=a.a
l=a.c
switch(e.b1.a){case 0:k=new A.aU(0,a.b,0,a.d)
break
case 1:k=A.BV(new A.a7(A.I(1/0,m,a.b),A.I(1/0,l,a.d)))
break
case 2:k=a
break
default:k=null}j=e.a8$
for(s=t.B,i=l,h=m,g=!1;j!=null;){r=j.e
r.toString
s.a(r)
if(!r.gA_()){f=b.$2(j,k)
h=Math.max(h,f.a)
i=Math.max(i,f.b)
g=!0}j=r.ab$}return g?new A.a7(h,i):new A.a7(A.I(1/0,m,a.b),A.I(1/0,l,a.d))},
bM(){var s,r,q,p,o,n,m,l=this,k=t.k.a(A.A.prototype.ga1.call(l))
l.K=!1
l.k3=l.H7(k,A.aj5())
s=l.a8$
for(r=t.B,q=t.uu;s!=null;){p=s.e
p.toString
r.a(p)
if(!p.gA_()){o=l.ag
o.toString
n=l.k3
n.toString
m=s.k3
m.toString
p.a=o.lT(q.a(n.ad(0,m)))}else{o=l.k3
o.toString
n=l.ag
n.toString
l.K=A.app(s,p,o,n)||l.K}s=p.ab$}},
cX(a,b){return this.yT(a,b)},
ui(a,b){this.oq(a,b)},
aI(a,b){var s,r=this,q=r.b9,p=q!==B.i&&r.K,o=r.B
if(p){p=r.cx
p===$&&A.b()
s=r.k3
o.sb_(0,a.kS(p,b,new A.D(0,0,0+s.a,0+s.b),r.gAR(),q,o.a))}else{o.sb_(0,null)
r.oq(a,b)}},
m(){this.B.sb_(0,null)
this.ia()},
jb(a){var s
switch(this.b9.a){case 0:return null
case 1:case 2:case 3:if(this.K){s=this.k3
s=new A.D(0,0,0+s.a,0+s.b)}else s=null
return s}}}
A.QA.prototype={
ar(a){var s,r,q
this.eC(a)
s=this.a8$
for(r=t.B;s!=null;){s.ar(a)
q=s.e
q.toString
s=r.a(q).ab$}},
ao(a){var s,r,q
this.dX(0)
s=this.a8$
for(r=t.B;s!=null;){s.ao(0)
q=s.e
q.toString
s=r.a(q).ab$}}}
A.QB.prototype={}
A.M5.prototype={
l(a,b){if(b==null)return!1
if(J.X(b)!==A.C(this))return!1
return b instanceof A.M5&&b.a.l(0,this.a)&&b.b===this.b},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return this.a.j(0)+" at "+A.hB(this.b)+"x"}}
A.wH.prototype={
syF(a){var s,r,q,p,o=this
if(o.k1.l(0,a))return
s=o.k1
o.k1=a
r=s.b
r=A.vw(r,r,1)
q=o.k1.b
if(!r.l(0,A.vw(q,q,1))){r=o.HL()
q=o.ch
p=q.a
p.toString
J.ava(p)
q.sb_(0,r)
o.av()}o.a9()},
HL(){var s,r=this.k1.b
r=A.vw(r,r,1)
this.k4=r
s=A.aq4(r)
s.ar(this)
return s},
pz(){},
bM(){var s,r=this.k1.a
this.id=r
s=this.B$
if(s!=null)s.iE(A.BV(r))},
c_(a,b){var s=this.B$
if(s!=null)s.c_(A.anD(a),b)
a.D(0,new A.hW(this,t.Cq))
return!0},
a4g(a){var s,r=A.a([],t.f1),q=new A.bg(new Float64Array(16))
q.dh()
s=new A.hJ(r,A.a([q],t.hZ),A.a([],t.pw))
this.c_(s,a)
return s},
gdP(){return!0},
aI(a,b){var s=this.B$
if(s!=null)a.f3(s,b)},
dt(a,b){var s=this.k4
s.toString
b.cM(0,s)
this.Pl(a,b)},
a1l(){var s,r,q
try{q=$.ar()
s=q.a23()
r=this.ch.a.a0I(s)
this.a_G()
q.a6x(r)
r.m()}finally{}},
a_G(){var s,r,q,p,o,n,m,l,k,j=null,i=this.ghS(),h=i.gaL(),g=this.k2
g.gkX()
s=i.gaL()
g.gkX()
g=this.ch
r=t.g9
q=g.a.JP(0,new A.u(h.a,0),r)
switch(A.lG().a){case 0:p=g.a.JP(0,new A.u(s.a,i.d-1-0),r)
break
case 1:case 2:case 3:case 4:case 5:p=j
break
default:p=j}h=q==null
if(h&&p==null)return
if(!h&&p!=null){h=q.f
g=q.r
s=q.e
r=q.w
A.apU(new A.iq(p.a,p.b,p.c,p.d,s,h,g,r))
return}o=A.lG()===B.aE
n=h?p:q
h=n.f
g=n.r
s=n.e
r=n.w
m=o?n.a:j
l=o?n.b:j
k=o?n.c:j
A.apU(new A.iq(m,l,k,o?n.d:j,s,h,g,r))},
ghS(){var s=this.id.a0(0,this.k1.b)
return new A.D(0,0,0+s.a,0+s.b)},
gjU(){var s,r=this.k4
r.toString
s=this.id
return A.hg(r,new A.D(0,0,0+s.a,0+s.b))}}
A.QD.prototype={
ar(a){var s
this.eC(a)
s=this.B$
if(s!=null)s.ar(a)},
ao(a){var s
this.dX(0)
s=this.B$
if(s!=null)s.ao(0)}}
A.C0.prototype={
F(){return"CacheExtentStyle."+this.b}}
A.pO.prototype={
j(a){return"RevealedOffset(offset: "+A.h(this.a)+", rect: "+this.b.j(0)+")"}}
A.pL.prototype={
eS(a){this.hh(a)
a.Id(B.BE)},
h9(a){var s=this.gIB()
new A.aK(s,new A.a5H(),A.aX(s).h("aK<1>")).Z(0,a)},
sfP(a){if(a===this.K)return
this.K=a
this.a9()},
sa26(a){if(a===this.ag)return
this.ag=a
this.a9()},
sbL(a,b){var s=this,r=s.ac
if(b===r)return
if(s.b!=null)r.H(0,s.gu_())
s.ac=b
if(s.b!=null)b.X(0,s.gu_())
s.a9()},
sa0L(a){if(a===this.aw)return
this.aw=a
this.a9()},
sa0M(a){if(a===this.b9)return
this.b9=a
this.a9()},
ar(a){this.Qx(a)
this.ac.X(0,this.gu_())},
ao(a){this.ac.H(0,this.gu_())
this.Qy(0)},
gdP(){return!0},
KR(a,b,c,d,e,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.aE7(h.ac.k4,e),f=a0+a2
for(s=e.a,r=t.v,q=a0,p=0;c!=null;){o=a5<=0?0:a5
n=Math.max(b,-o)
m=b-n
c.cw(new A.l6(h.K,e,g,o,p,f-q,Math.max(0,a4-q+a0),d,h.ag,a1,n,Math.max(0,a3+m)),!0)
l=c.id
k=l.y
if(k!=null)return k
j=q+l.b
k=l.w||a5>0
i=c.e
if(k){i.toString
r.a(i).a=h.II(c,j,e)}else{i.toString
r.a(i).a=h.II(c,-a5+a0,e)}f=Math.max(j+l.c,f)
k=l.a
a5-=k
p+=k
q+=l.d
i=l.z
if(i!==0){a3-=i-m
b=Math.min(n+i,0)}switch(s){case 0:i=h.oQ
i===$&&A.b()
h.oQ=i+k
break
case 1:i=h.oP
i===$&&A.b()
h.oP=i-k
break}if(l.x)h.c7=!0
c=a.$1(c)}return 0},
jb(a){var s,r,q,p,o,n
switch(this.B.a){case 0:return null
case 1:case 2:case 3:break}s=this.k3
r=0+s.a
q=0+s.b
s=t.p
if(s.a(A.A.prototype.ga1.call(a)).f===0||!isFinite(s.a(A.A.prototype.ga1.call(a)).y))return new A.D(0,0,r,q)
p=s.a(A.A.prototype.ga1.call(a)).y-s.a(A.A.prototype.ga1.call(a)).r+s.a(A.A.prototype.ga1.call(a)).f
switch(A.k0(this.K,s.a(A.A.prototype.ga1.call(a)).b)){case B.z:o=0+p
n=0
break
case B.A:q-=p
n=0
o=0
break
case B.ay:n=0+p
o=0
break
case B.af:r-=p
n=0
o=0
break
default:n=0
o=0}return new A.D(n,o,r,q)},
yY(a){var s,r=this,q=r.b1
if(q==null){q=r.k3
return new A.D(0,0,0+q.a,0+q.b)}switch(A.bf(r.K).a){case 1:s=r.k3
return new A.D(0,0-q,0+s.a,0+s.b+q)
case 0:s=r.k3
return new A.D(0-q,0,0+s.a+q,0+s.b)}},
aI(a,b){var s,r,q,p=this
if(p.a8$==null)return
s=p.c7&&p.B!==B.i
r=p.ai
if(s){s=p.cx
s===$&&A.b()
q=p.k3
r.sb_(0,a.kS(s,b,new A.D(0,0,0+q.a,0+q.b),p.gY7(),p.B,r.a))}else{r.sb_(0,null)
p.G4(a,b)}},
m(){this.ai.sb_(0,null)
this.ia()},
G4(a,b){var s,r,q,p,o,n,m,l
for(s=this.gIB(),r=s.length,q=t.v,p=b.a,o=b.b,n=0;n<s.length;s.length===r||(0,A.P)(s),++n){m=s[n]
if(m.id.w){l=m.e
l.toString
l=q.a(l).a
a.f3(m,new A.u(p+l.a,o+l.b))}}},
cX(a,b){var s,r,q,p,o,n,m,l,k={}
k.a=k.b=null
switch(A.bf(this.K).a){case 1:k.b=b.b
k.a=b.a
break
case 0:k.b=b.a
k.a=b.b
break}s=new A.q5(a.a,a.b,a.c)
for(r=this.ga1_(),q=r.length,p=t.v,o=0;o<r.length;r.length===q||(0,A.P)(r),++o){n=r[o]
if(!n.id.w)continue
m=new A.bg(new Float64Array(16))
m.dh()
l=n.e
l.toString
l=p.a(l).a
m.aD(0,l.a,l.b)
if(a.a0m(new A.a5G(k,this,n,s),m))return!0}return!1},
kY(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=a instanceof A.co
for(s=t.d,r=c,q=a,p=0;o=q.c,o!==d;q=o){o.toString
s.a(o)
if(q instanceof A.G)r=q
if(o instanceof A.co){n=o.yD(q)
n.toString
p+=n}else{p=0
b=!1}}if(r!=null){s=r.c
s.toString
t.q0.a(s)
m=t.p.a(A.A.prototype.ga1.call(s)).b
switch(A.bf(d.K).a){case 0:l=r.k3.a
break
case 1:l=r.k3.b
break
default:l=c}if(a1==null)a1=a.ghS()
k=A.hg(a.bB(0,r),a1)}else{if(b){t.q0.a(a)
s=t.p
m=s.a(A.A.prototype.ga1.call(a)).b
l=a.id.a
if(a1==null)switch(A.bf(d.K).a){case 0:a1=new A.D(0,0,0+l,0+s.a(A.A.prototype.ga1.call(a)).w)
break
case 1:a1=new A.D(0,0,0+s.a(A.A.prototype.ga1.call(a)).w,0+a.id.a)
break}}else{s=d.ac.at
s.toString
a1.toString
return new A.pO(s,a1)}k=a1}t.q0.a(q)
switch(A.k0(d.K,m)){case B.A:s=k.d
p+=l-s
j=s-k.b
break
case B.ay:s=k.a
p+=s
j=k.c-s
break
case B.z:s=k.b
p+=s
j=k.d-s
break
case B.af:s=k.c
p+=l-s
j=s-k.a
break
default:j=c}q.id.toString
p=d.Nd(q,p)
i=A.hg(a.bB(0,d),a1)
h=d.a5g(q)
switch(t.p.a(A.A.prototype.ga1.call(q)).b.a){case 0:p-=h
break
case 1:switch(A.bf(d.K).a){case 1:p-=i.d-i.b
break
case 0:p-=i.c-i.a
break}break}s=d.K
switch(A.bf(s).a){case 0:g=d.k3.a-h
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
break}return new A.pO(f,i)},
II(a,b,c){switch(A.k0(this.K,c)){case B.A:return new A.u(0,this.k3.b-(b+a.id.c))
case B.ay:return new A.u(b,0)
case B.z:return new A.u(0,b)
case B.af:return new A.u(this.k3.a-(b+a.id.c),0)}},
ez(a,b,c,d){var s=this
if(!s.ac.r.glS())return s.qk(a,b,c,d)
s.qk(a,null,c,A.apr(a,b,c,s.ac,d,s))},
n5(){return this.ez(B.aP,null,B.t,null)},
l8(a,b){return this.ez(B.aP,a,B.t,b)},
$iJL:1}
A.a5H.prototype={
$1(a){var s=a.id
return s.w||s.z>0},
$S:261}
A.a5G.prototype={
$1(a){var s=this,r=s.c,q=s.a,p=s.b.a1n(r,q.b)
return r.Kf(s.d,q.a,p)},
$S:92}
A.wI.prototype={
ey(a){if(!(a.e instanceof A.jv))a.e=new A.jv(null,null,B.k)},
sa0r(a){if(a===this.ts)return
this.ts=a
this.a9()},
saL(a){if(a==this.e6)return
this.e6=a
this.a9()},
gjX(){return!0},
cg(a){return new A.a7(A.I(1/0,a.a,a.b),A.I(1/0,a.c,a.d))},
bM(){var s,r,q,p,o,n,m,l,k,j=this
switch(A.bf(j.K).a){case 1:j.ac.o8(j.k3.b)
break
case 0:j.ac.o8(j.k3.a)
break}if(j.e6==null){j.oQ=j.oP=0
j.c7=!1
j.ac.o5(0,0)
return}switch(A.bf(j.K).a){case 1:s=j.k3
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
o=j.Sf(r,q,p+0)
if(o!==0){p=j.ac
n=p.at
n.toString
p.at=n+o
p.ch=!0}else{p=j.ac
n=j.oP
n===$&&A.b()
m=j.ts
n=Math.min(0,n+r*m)
l=j.oQ
l===$&&A.b()
if(p.o5(n,Math.max(0,l-r*(1-m))))break}k=s+1
if(k<10){s=k
continue}else break}while(!0)},
Sf(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.oQ=e.oP=0
e.c7=!1
s=a*e.ts-c
r=A.I(s,0,a)
q=a-s
p=A.I(q,0,a)
switch(e.b9.a){case 0:e.b1=e.aw
break
case 1:e.b1=a*e.aw
break}o=e.b1
o.toString
n=a+2*o
m=s+o
l=A.I(m,0,n)
k=A.I(n-m,0,n)
j=e.e6.e
j.toString
i=A.n(e).h("ax.1").a(j).aU$
j=i==null
if(!j){h=Math.max(a,s)
g=e.KR(e.ga0X(),A.I(q,-o,0),i,b,B.nP,p,a,0,l,r,h-a)
if(g!==0)return-g}q=e.e6
o=-s
h=Math.max(0,o)
o=j?Math.min(0,o):0
j=s>=a?s:r
f=e.b1
f.toString
return e.KR(e.ga0V(),A.I(s,-f,0),q,b,B.nO,j,a,o,k,p,h)},
Nd(a,b){var s,r,q,p,o=this
switch(t.p.a(A.A.prototype.ga1.call(a)).b.a){case 0:s=o.e6
for(r=A.n(o).h("ax.1"),q=0;s!==a;){q+=s.id.a
p=s.e
p.toString
s=r.a(p).ab$}return q+b
case 1:r=o.e6.e
r.toString
p=A.n(o).h("ax.1")
s=p.a(r).aU$
for(q=0;s!==a;){q-=s.id.a
r=s.e
r.toString
s=p.a(r).aU$}return q-b}},
a5g(a){var s,r,q,p=this
switch(t.p.a(A.A.prototype.ga1.call(a)).b.a){case 0:s=p.e6
for(r=A.n(p).h("ax.1");s!==a;){s.id.toString
q=s.e
q.toString
s=r.a(q).ab$}return 0
case 1:r=p.e6.e
r.toString
q=A.n(p).h("ax.1")
s=q.a(r).aU$
for(;s!==a;){s.id.toString
r=s.e
r.toString
s=q.a(r).aU$}return 0}},
dt(a,b){var s=a.e
s.toString
s=t.v.a(s).a
b.aD(0,s.a,s.b)},
a1n(a,b){var s,r=a.e
r.toString
t.v.a(r)
s=t.p
switch(A.k0(s.a(A.A.prototype.ga1.call(a)).a,s.a(A.A.prototype.ga1.call(a)).b)){case B.z:return b-r.a.b
case B.ay:return b-r.a.a
case B.A:return a.id.c-(b-r.a.b)
case B.af:return a.id.c-(b-r.a.a)}},
gIB(){var s,r,q=this,p=A.a([],t.jT),o=q.a8$
if(o==null)return p
for(s=A.n(q).h("ax.1");o!=q.e6;){o.toString
p.push(o)
r=o.e
r.toString
o=s.a(r).ab$}o=q.bF$
for(;!0;){o.toString
p.push(o)
if(o===q.e6)return p
r=o.e
r.toString
o=s.a(r).aU$}},
ga1_(){var s,r,q,p=this,o=A.a([],t.jT)
if(p.a8$==null)return o
s=p.e6
for(r=A.n(p).h("ax.1");s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).ab$}q=p.e6.e
q.toString
s=r.a(q).aU$
for(;s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).aU$}return o}}
A.iF.prototype={
ar(a){var s,r,q
this.eC(a)
s=this.a8$
for(r=A.n(this).h("iF.0");s!=null;){s.ar(a)
q=s.e
q.toString
s=r.a(q).ab$}},
ao(a){var s,r,q
this.dX(0)
s=this.a8$
for(r=A.n(this).h("iF.0");s!=null;){s.ao(0)
q=s.e
q.toString
s=r.a(q).ab$}}}
A.pV.prototype={
F(){return"ScrollDirection."+this.b}}
A.fK.prototype={
po(a,b,c,d){var s=d.a===B.t.a
if(s){this.dQ(b)
return A.bD(null,t.H)}else return this.hw(b,c,d)},
j(a){var s=this,r=A.a([],t.s)
s.PW(r)
r.push(A.C(s.w).j(0))
r.push(s.r.j(0))
r.push(A.h(s.fr))
r.push(s.k4.j(0))
return"<optimized out>#"+A.bP(s)+"("+B.c.b5(r,", ")+")"},
cl(a){var s=this.at
if(s!=null)a.push("offset: "+B.d.N(s,1))}}
A.qX.prototype={}
A.l1.prototype={
F(){return"SchedulerPhase."+this.b}}
A.a40.prototype={}
A.dH.prototype={
a0k(a){var s=this.z$
s.push(a)
if(s.length===1){s=$.aQ()
s.ay=this.gTS()
s.ch=$.a9}},
LO(a){var s=this.z$
B.c.u(s,a)
if(s.length===0){s=$.aQ()
s.ay=null
s.ch=$.a9}},
TT(a){var s,r,q,p,o,n,m,l,k=this.z$,j=A.aB(k,!0,t.wX)
for(p=j.length,o=0;o<p;++o){s=j[o]
try{if(B.c.C(k,s))s.$1(a)}catch(n){r=A.af(n)
q=A.au(n)
m=A.bq("while executing callbacks for FrameTiming")
l=$.fR()
if(l!=null)l.$1(new A.bM(r,q,"Flutter framework",m,null,!1))}}},
tB(a){this.Q$=a
switch(a.a){case 0:case 1:this.GS(!0)
break
case 2:case 3:this.GS(!1)
break}},
EN(){if(this.ax$)return
this.ax$=!0
A.cf(B.t,this.gZa())},
Zb(){this.ax$=!1
if(this.a3m())this.EN()},
a3m(){var s,r,q,p,o,n,m=this,l="No element",k=m.at$,j=k.c===0
if(j||m.b>0)return!1
if(j)A.L(A.a6(l))
s=k.qu(0)
j=s.b
if(m.as$.$2$priority$scheduler(j,m)){try{if(k.c===0)A.L(A.a6(l));++k.d
k.qu(0)
p=k.c-1
o=k.qu(p)
k.b[p]=null
k.c=p
if(p>0)k.Sj(o,0)
s.a89()}catch(n){r=A.af(n)
q=A.au(n)
j=A.bq("during a task callback")
A.eb(new A.bM(r,q,"scheduler library",j,null,!1))}return k.c!==0}return!1},
qa(a,b){var s,r=this
r.i3()
s=++r.ay$
r.ch$.k(0,s,new A.qX(a))
return r.ay$},
q9(a){return this.qa(a,!1)},
gJB(){var s=this
if(s.db$==null){if(s.dy$===B.cJ)s.i3()
s.db$=new A.aL(new A.a8($.a9,t.U),t._)
s.cy$.push(new A.a6x(s))}return s.db$.a},
gK_(){return this.fr$},
GS(a){if(this.fr$===a)return
this.fr$=a
if(a)this.i3()},
JC(){var s=$.aQ()
if(s.w==null){s.w=this.gUY()
s.x=$.a9}if(s.y==null){s.y=this.gVl()
s.z=$.a9}},
zj(){switch(this.dy$.a){case 0:case 4:this.i3()
return
case 1:case 2:case 3:return}},
i3(){var s,r=this
if(!r.dx$)s=!(A.dH.prototype.gK_.call(r)&&r.cJ$)
else s=!0
if(s)return
r.JC()
$.aQ().i3()
r.dx$=!0},
N8(){if(this.dx$)return
this.JC()
$.aQ().i3()
this.dx$=!0},
uY(){var s,r,q=this
if(q.fx$||q.dy$!==B.cJ)return
q.fx$=!0
s=new A.LL(null,0,A.a([],t.vS))
s.qf(0,"Warm-up frame")
r=q.dx$
A.cf(B.t,new A.a6z(q))
A.cf(B.t,new A.a6A(q,r))
q.a59(new A.a6B(q,s))},
a6J(){var s=this
s.go$=s.DE(s.id$)
s.fy$=null},
DE(a){var s=this.fy$,r=s==null?B.t:new A.aT(a.a-s.a)
return A.cb(B.d.ba(r.a/$.arI)+this.go$.a,0,0)},
UZ(a){if(this.fx$){this.k4$=!0
return}this.K2(a)},
Vm(){var s=this
if(s.k4$){s.k4$=!1
s.cy$.push(new A.a6w(s))
return}s.K4()},
K2(a){var s,r,q=this,p=q.ok$,o=p==null
if(!o)p.qf(0,"Frame")
if(q.fy$==null)q.fy$=a
r=a==null
q.k1$=q.DE(r?q.id$:a)
if(!r)q.id$=a
q.dx$=!1
try{if(!o)p.qf(0,"Animate")
q.dy$=B.Um
s=q.ch$
q.ch$=A.z(t.S,t.b1)
J.iR(s,new A.a6y(q))
q.CW$.a_(0)}finally{q.dy$=B.Un}},
a6H(a){var s=this,r=s.p1$,q=r==null
if(!q&&r!==a)return null
if(r===a)++s.p2$
else if(q){s.p1$=a
s.p2$=1}return new A.a40(s.gTz())},
TA(){if(--this.p2$===0){this.p1$=null
$.aQ()}},
K4(){var s,r,q,p,o,n,m,l=this,k=l.ok$,j=k==null
if(!j)k.tx(0)
try{l.dy$=B.Bm
for(p=l.cx$,o=p.length,n=0;n<p.length;p.length===o||(0,A.P)(p),++n){s=p[n]
m=l.k1$
m.toString
l.Fz(s,m)}l.dy$=B.Uo
p=l.cy$
r=A.aB(p,!0,t.qP)
B.c.a_(p)
for(p=r,o=p.length,n=0;n<p.length;p.length===o||(0,A.P)(p),++n){q=p[n]
m=l.k1$
m.toString
l.Fz(q,m)}}finally{l.dy$=B.cJ
if(!j)k.tx(0)
l.k1$=null}},
FA(a,b,c){var s,r,q,p
try{a.$1(b)}catch(q){s=A.af(q)
r=A.au(q)
p=A.bq("during a scheduler callback")
A.eb(new A.bM(s,r,"scheduler library",p,null,!1))}},
Fz(a,b){return this.FA(a,b,null)}}
A.a6x.prototype={
$1(a){var s=this.a
s.db$.eO(0)
s.db$=null},
$S:2}
A.a6z.prototype={
$0(){this.a.K2(null)},
$S:0}
A.a6A.prototype={
$0(){var s=this.a
s.K4()
s.a6J()
s.fx$=!1
if(this.b)s.i3()},
$S:0}
A.a6B.prototype={
$0(){var s=0,r=A.a2(t.H),q=this
var $async$$0=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:s=2
return A.a4(q.a.gJB(),$async$$0)
case 2:q.b.tx(0)
return A.a0(null,r)}})
return A.a1($async$$0,r)},
$S:62}
A.a6w.prototype={
$1(a){var s=this.a
s.dx$=!1
s.i3()},
$S:2}
A.a6y.prototype={
$2(a,b){var s,r,q=this.a
if(!q.CW$.C(0,a)){s=b.a
r=q.k1$
r.toString
q.FA(s,r,b.b)}},
$S:263}
A.qs.prototype={
sAn(a,b){var s=this
if(b===s.b)return
s.b=b
if(b)s.Bs()
else if(s.a!=null&&s.e==null)s.e=$.bT.qa(s.gxR(),!1)},
ga4P(){if(this.a==null)return!1
if(this.b)return!1
var s=$.bT
s.toString
if(A.dH.prototype.gK_.call(s)&&s.cJ$)return!0
if($.bT.dy$!==B.cJ)return!0
return!1},
n9(a){var s,r,q=this
q.a=new A.nC(new A.aL(new A.a8($.a9,t.U),t._))
if(!q.b)s=q.e==null
else s=!1
if(s)q.e=$.bT.qa(q.gxR(),!1)
s=$.bT
r=s.dy$.a
if(r>0&&r<4){s=s.k1$
s.toString
q.c=s}s=q.a
s.toString
return s},
na(a,b){var s=this,r=s.a
if(r==null)return
s.c=s.a=null
s.Bs()
if(b)r.DY(s)
else r.Ho()},
he(a){return this.na(a,!1)},
a_8(a){var s,r=this
r.e=null
s=r.c
if(s==null)s=r.c=a
r.d.$1(new A.aT(a.a-s.a))
if(!r.b&&r.a!=null&&r.e==null)r.e=$.bT.qa(r.gxR(),!0)},
Bs(){var s,r=this.e
if(r!=null){s=$.bT
s.ch$.u(0,r)
s.CW$.D(0,r)
this.e=null}},
m(){var s=this,r=s.a
if(r!=null){s.a=null
s.Bs()
r.DY(s)}},
a75(a,b){var s=""+"Ticker()"
return s.charCodeAt(0)==0?s:s},
j(a){return this.a75(a,!1)}}
A.nC.prototype={
Ho(){this.c=!0
this.a.eO(0)
var s=this.b
if(s!=null)s.eO(0)},
DY(a){var s
this.c=!1
s=this.b
if(s!=null)s.ij(new A.xT(a))},
Ms(a){var s,r,q=this,p=new A.aaO(a)
if(q.b==null){s=q.b=new A.aL(new A.a8($.a9,t.U),t._)
r=q.c
if(r!=null)if(r)s.eO(0)
else s.ij(B.ZX)}q.b.a.dV(p,p,t.H)},
lV(a,b){return this.a.a.lV(a,b)},
fQ(a){return this.lV(a,null)},
dV(a,b,c){return this.a.a.dV(a,b,c)},
aF(a,b){return this.dV(a,null,b)},
f5(a){return this.a.a.f5(a)},
j(a){var s=A.bP(this),r=this.c
if(r==null)r="active"
else r=r?"complete":"canceled"
return"<optimized out>#"+s+"("+r+")"},
$iah:1}
A.aaO.prototype={
$1(a){this.a.$0()},
$S:15}
A.xT.prototype={
j(a){var s=this.a
if(s!=null)return"This ticker was canceled: "+s.j(0)
return'The ticker was canceled before the "orCancel" property was first used.'},
$ibt:1}
A.a72.prototype={}
A.xc.prototype={
j(a){return"SemanticsTag("+this.a+")"}}
A.cv.prototype={
V(a,b){var s,r,q,p,o,n,m,l=this.a,k=l.length
if(k===0)return b
s=b.a
if(s.length===0)return this
r=A.aB(this.b,!0,t.lS)
q=b.b
p=q.length
if(p!==0)for(o=0;o<q.length;q.length===p||(0,A.P)(q),++o){n=q[o]
m=n.a
r.push(n.IS(new A.f4(m.a+k,m.b+k)))}return new A.cv(l+s,r)},
l(a,b){if(b==null)return!1
return J.X(b)===A.C(this)&&b instanceof A.cv&&b.a===this.a&&A.cX(b.b,this.b)},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"AttributedString('"+this.a+"', attributes: "+A.h(this.b)+")"}}
A.KM.prototype={
c3(){return"SemanticsData"},
l(a,b){var s=this
if(b==null)return!1
return b instanceof A.KM&&b.a===s.a&&b.b===s.b&&b.c.l(0,s.c)&&b.d.l(0,s.d)&&b.e.l(0,s.e)&&b.f.l(0,s.f)&&b.r.l(0,s.r)&&b.w===s.w&&b.x==s.x&&b.cx.l(0,s.cx)&&A.amw(b.cy,s.cy)&&b.Q==s.Q&&b.as==s.as&&b.at==s.at&&b.ax==s.ax&&J.f(b.db,s.db)&&b.dx===s.dx&&b.dy===s.dy&&A.aAm(b.fr,s.fr)},
gt(a){var s=this,r=A.dj(s.fr)
return A.S(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.cx,s.cy,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,A.S(s.CW,s.db,s.dx,s.dy,r,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a))}}
A.R_.prototype={}
A.KO.prototype={
c3(){return"SemanticsProperties"}}
A.c2.prototype={
sbt(a,b){var s
if(!A.ayL(this.r,b)){s=A.akL(b)
this.r=s?null:b
this.ih()}},
saS(a,b){if(!this.w.l(0,b)){this.w=b
this.ih()}},
sKH(a){if(this.as===a)return
this.as=a
this.ih()},
YT(a){var s,r,q,p,o,n,m,l=this,k=l.ax
if(k!=null)for(s=k.length,r=0;r<s;++r)k[r].ch=!0
for(k=a.length,r=0;r<k;++r)a[r].ch=!1
k=l.ax
if(k!=null)for(s=k.length,q=t.aa,p=!1,r=0;r<k.length;k.length===s||(0,A.P)(k),++r){o=k[r]
if(o.ch){n=J.ch(o)
if(q.a(A.M.prototype.gaM.call(n,o))===l){o.c=null
if(l.b!=null)o.ao(0)}p=!0}}else p=!1
for(k=a.length,s=t.aa,r=0;r<a.length;a.length===k||(0,A.P)(a),++r){o=a[r]
q=J.ch(o)
if(s.a(A.M.prototype.gaM.call(q,o))!==l){if(s.a(A.M.prototype.gaM.call(q,o))!=null){q=s.a(A.M.prototype.gaM.call(q,o))
if(q!=null){o.c=null
if(q.b!=null)o.ao(0)}}o.c=l
q=l.b
if(q!=null)o.ar(q)
q=o.a
n=l.a
if(q<=n){o.a=n+1
o.jI()}p=!0}}if(!p&&l.ax!=null)for(k=l.ax,s=k.length,m=0;m<s;++m)if(k[m].e!==a[m].e){p=!0
break}l.ax=a
if(p)l.ih()},
ga40(){var s=this.ax
s=s==null?null:s.length!==0
return s===!0},
ya(a){var s,r,q,p=this.ax
if(p!=null)for(s=p.length,r=0;r<p.length;p.length===s||(0,A.P)(p),++r){q=p[r]
if(!a.$1(q)||!q.ya(a))return!1}return!0},
jI(){var s=this.ax
if(s!=null)B.c.Z(s,this.gLH())},
ar(a){var s,r,q,p=this
p.ve(a)
for(s=a.c;s.R(0,p.e);)p.e=$.a7j=($.a7j+1)%65535
s.k(0,p.e,p)
a.d.u(0,p)
if(p.CW){p.CW=!1
p.ih()}s=p.ax
if(s!=null)for(r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].ar(a)},
ao(a){var s,r,q,p,o,n=this,m=t.nU
m.a(A.M.prototype.gbx.call(n)).c.u(0,n.e)
m.a(A.M.prototype.gbx.call(n)).d.D(0,n)
n.dX(0)
m=n.ax
if(m!=null)for(s=m.length,r=t.aa,q=0;q<m.length;m.length===s||(0,A.P)(m),++q){p=m[q]
o=J.ch(p)
if(r.a(A.M.prototype.gaM.call(o,p))===n)o.ao(p)}n.ih()},
ih(){var s=this
if(s.CW)return
s.CW=!0
if(s.b!=null)t.nU.a(A.M.prototype.gbx.call(s)).b.D(0,s)},
jN(a,b,c){var s,r=this
if(c==null)c=$.ajF()
if(r.fr.l(0,c.p4))if(r.id.l(0,c.ry))if(r.k2===c.x2)if(r.k3===c.xr)if(r.fx.l(0,c.R8))if(r.fy.l(0,c.RG))if(r.go.l(0,c.rx))if(r.k1===c.to)if(r.dy===c.af)if(r.ok==c.y1)if(r.p1==c.id)if(r.RG==c.bK)if(r.rx==c.br)if(r.ry==c.b8)if(r.db===c.f)if(r.Q==c.k1)s=r.at!==c.p2
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
if(s)r.ih()
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
r.cx=A.pj(c.e,t.nS,t.BT)
r.cy=A.pj(c.p3,t.zN,t.M)
r.db=c.f
r.p2=c.y2
r.RG=c.bK
r.rx=c.br
r.ry=c.b8
r.at=c.p2
r.p4=c.k2
r.R8=c.k3
r.Q=c.k1
r.to=c.k4
r.x1=c.ok
r.x2=c.p1
r.YT(b==null?B.ia:b)},
a7k(a,b){return this.jN(a,null,b)},
MZ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7={}
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
a7.y=s==null?null:A.kG(s,t.xJ)
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
q=A.b5(t.S)
for(s=a6.cy,s=A.jb(s,s.r);s.q();)q.D(0,A.anS(s.d))
a6.k4!=null
if(a6.at)a6.ya(new A.a7k(a7,a6,q))
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
a5=A.aB(q,!0,q.$ti.c)
B.c.i7(a5)
return new A.KM(s,p,o,n,m,l,k,j,i,d,c,b,a,a0,a1,a2,a3,a4,h,e,g,r,f,a5)},
S5(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.MZ()
if(!a.ga40()||a.at){s=$.att()
r=s}else{q=a.ax.length
p=a.SN()
s=new Int32Array(q)
for(o=0;o<q;++o)s[o]=p[o].e
r=new Int32Array(q)
for(o=q-1,n=a.ax;o>=0;--o)r[o]=n[q-o-1].e}n=a0.fr
m=n.length
if(m!==0){l=new Int32Array(m)
for(o=0;o<n.length;++o){m=n[o]
l[o]=m
a2.D(0,m)}}else l=null
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
if(c==null)c=$.atv()
b=l==null?$.atu():l
a1.a.push(new A.KN(n,a0.a,a0.b,-1,-1,-1,0,g,f,e,d,a0.cx,m.a,m.b,h.a,h.b,k.a,k.b,j.a,j.b,i.a,i.b,a0.w,a0.x,A.amy(c),s,r,b,a0.dy))
a.CW=!1},
SN(){var s,r,q,p,o,n,m,l,k,j=this,i=j.ok,h=t.aa,g=h.a(A.M.prototype.gaM.call(j,j))
while(!0){s=i==null
if(!(s&&g!=null))break
i=g.ok
g=h.a(A.M.prototype.gaM.call(g,g))}r=j.ax
if(!s){r.toString
r=A.aCI(r,i)}h=t.Dr
q=A.a([],h)
p=A.a([],h)
for(o=null,n=0;n<r.length;++n){m=r[n]
l=m.p1
o=n>0?r[n-1].p1:null
if(n!==0)if(J.X(l)===J.X(o)){if(l!=null)o.toString
k=!0}else k=!1
else k=!0
if(!k&&p.length!==0){if(o!=null){if(!!p.immutable$list)A.L(A.O("sort"))
h=p.length-1
if(h-0<=32)A.L7(p,0,h,J.am4())
else A.L6(p,0,h,J.am4())}B.c.I(q,p)
B.c.a_(p)}p.push(new A.jO(m,l,n))}if(o!=null)B.c.i7(p)
B.c.I(q,p)
h=t.wg
return A.aB(new A.aC(q,new A.a7i(),h),!0,h.h("bn.E"))},
Nj(a){if(this.b==null)return
B.mm.ew(0,a.Mb(this.e))},
c3(){return"SemanticsNode#"+this.e},
a71(a,b,c){return new A.R_(a,this,b,!0,!0,null,c)},
M9(a){return this.a71(B.FH,null,a)}}
A.a7k.prototype={
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
if(s!=null){r=q.y;(r==null?q.y=A.b5(t.xJ):r).I(0,s)}for(s=this.b.cy,s=A.jb(s,s.r),r=this.c;s.q();)r.D(0,A.anS(s.d))
a.k4!=null
s=q.c
r=q.x
q.c=A.ahs(a.fr,a.ok,s,r)
r=q.r
s=q.x
q.r=A.ahs(a.id,a.ok,r,s)
q.cy=Math.max(q.cy,a.k3+a.k2)
return!0},
$S:74}
A.a7i.prototype={
$1(a){return a.a},
$S:265}
A.jE.prototype={
aG(a,b){return B.d.aG(this.b,b.b)},
$ib8:1}
A.hz.prototype={
aG(a,b){return B.d.aG(this.a,b.a)},
NK(){var s,r,q,p,o,n,m,l,k,j=A.a([],t.iV)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
o=p.w
j.push(new A.jE(!0,A.o8(p,new A.u(o.a- -0.1,o.b- -0.1)).a,p))
j.push(new A.jE(!1,A.o8(p,new A.u(o.c+-0.1,o.d+-0.1)).a,p))}B.c.i7(j)
n=A.a([],t.dK)
for(s=j.length,r=this.b,o=t.T,m=null,l=0,q=0;q<j.length;j.length===s||(0,A.P)(j),++q){k=j[q]
if(k.a){++l
if(m==null)m=new A.hz(k.b,r,A.a([],o))
m.c.push(k.c)}else --l
if(l===0){m.toString
n.push(m)
m=null}}B.c.i7(n)
if(r===B.Z){s=t.FF
n=A.aB(new A.cC(n,s),!0,s.h("bn.E"))}s=A.am(n).h("h2<1,c2>")
return A.aB(new A.h2(n,new A.aga(),s),!0,s.h("o.E"))},
NJ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this.c,a4=a3.length
if(a4<=1)return a3
s=t.S
r=A.z(s,t.ju)
q=A.z(s,s)
for(p=this.b,o=p===B.Z,p=p===B.u,n=a4,m=0;m<n;g===a4||(0,A.P)(a3),++m,n=g){l=a3[m]
r.k(0,l.e,l)
n=l.w
k=n.a
j=n.b
i=A.o8(l,new A.u(k+(n.c-k)/2,j+(n.d-j)/2))
for(n=a3.length,k=i.a,j=i.b,h=0;g=a3.length,h<g;a3.length===n||(0,A.P)(a3),++h){f=a3[h]
if((l==null?f==null:l===f)||q.i(0,f.e)===l.e)continue
g=f.w
e=g.a
d=g.b
c=A.o8(f,new A.u(e+(g.c-e)/2,d+(g.d-d)/2))
b=Math.atan2(c.b-j,c.a-k)
a=p&&-0.7853981633974483<b&&b<2.356194490192345
if(o)a0=b<-2.356194490192345||b>2.356194490192345
else a0=!1
if(a||a0)q.k(0,l.e,f.e)}}a1=A.a([],t.t)
a2=A.a(a3.slice(0),A.am(a3))
B.c.dk(a2,new A.ag6())
new A.aC(a2,new A.ag7(),A.am(a2).h("aC<1,j>")).Z(0,new A.ag9(A.b5(s),q,a1))
a3=t.sC
a3=A.aB(new A.aC(a1,new A.ag8(r),a3),!0,a3.h("bn.E"))
a4=A.am(a3).h("cC<1>")
return A.aB(new A.cC(a3,a4),!0,a4.h("bn.E"))}}
A.aga.prototype={
$1(a){return a.NJ()},
$S:82}
A.ag6.prototype={
$2(a,b){var s,r,q=a.w,p=A.o8(a,new A.u(q.a,q.b))
q=b.w
s=A.o8(b,new A.u(q.a,q.b))
r=B.d.aG(p.b,s.b)
if(r!==0)return-r
return-B.d.aG(p.a,s.a)},
$S:76}
A.ag9.prototype={
$1(a){var s=this,r=s.a
if(r.C(0,a))return
r.D(0,a)
r=s.b
if(r.R(0,a)){r=r.i(0,a)
r.toString
s.$1(r)}s.c.push(a)},
$S:58}
A.ag7.prototype={
$1(a){return a.e},
$S:268}
A.ag8.prototype={
$1(a){var s=this.a.i(0,a)
s.toString
return s},
$S:269}
A.aho.prototype={
$1(a){return a.NK()},
$S:82}
A.jO.prototype={
aG(a,b){var s,r=this.b
if(r==null||b.b==null)return this.c-b.c
r.toString
s=b.b
s.toString
return r.aG(0,s)},
$ib8:1}
A.xb.prototype={
Nk(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.b
if(e.a===0)return
s=A.b5(t.S)
r=A.a([],t.T)
for(q=t.aa,p=A.n(e).h("aK<1>"),o=p.h("o.E"),n=f.d;e.a!==0;){m=A.aB(new A.aK(e,new A.a7n(f),p),!0,o)
e.a_(0)
n.a_(0)
l=new A.a7o()
if(!!m.immutable$list)A.L(A.O("sort"))
k=m.length-1
if(k-0<=32)A.L7(m,0,k,l)
else A.L6(m,0,k,l)
B.c.I(r,m)
for(l=m.length,j=0;j<m.length;m.length===l||(0,A.P)(m),++j){i=m[j]
if(i.at||i.as){k=J.ch(i)
if(q.a(A.M.prototype.gaM.call(k,i))!=null){h=q.a(A.M.prototype.gaM.call(k,i))
h=h.at||h.as}else h=!1
if(h){q.a(A.M.prototype.gaM.call(k,i)).ih()
i.CW=!1}}}}B.c.dk(r,new A.a7p())
$.a73.toString
g=new A.a7r(A.a([],t.fr))
for(q=r.length,j=0;j<r.length;r.length===q||(0,A.P)(r),++j){i=r[j]
if(i.CW&&i.b!=null)i.S5(g,s)}e.a_(0)
for(e=A.jK(s,s.r),q=A.n(e).c;e.q();){p=e.d
$.anP.i(0,p==null?q.a(p):p).toString}f.a.$1(new A.KQ(g.a))
f.aC()},
UI(a,b){var s,r={},q=r.a=this.c.i(0,a)
if(q!=null)s=(q.at||q.as)&&!q.cx.R(0,b)
else s=!1
if(s)q.ya(new A.a7m(r,b))
s=r.a
if(s==null||!s.cx.R(0,b))return null
return r.a.cx.i(0,b)},
a5T(a,b,c){var s=this.UI(a,b)
if(s!=null){s.$1(c)
return}if(b===B.UK&&this.c.i(0,a).f!=null)this.c.i(0,a).f.$0()},
j(a){return"<optimized out>#"+A.bP(this)}}
A.a7n.prototype={
$1(a){return!this.a.d.C(0,a)},
$S:74}
A.a7o.prototype={
$2(a,b){return a.a-b.a},
$S:76}
A.a7p.prototype={
$2(a,b){return a.a-b.a},
$S:76}
A.a7m.prototype={
$1(a){if(a.cx.R(0,this.b)){this.a.a=a
return!1}return!0},
$S:74}
A.a74.prototype={
jY(a,b){var s=this
s.e.k(0,a,b)
s.f=s.f|a.a
s.d=!0},
ei(a,b){this.jY(a,new A.a75(b))},
sjE(a){a.toString
this.ei(B.dQ,a)},
skQ(a){a.toString
this.ei(B.Br,a)},
su9(a){this.ei(B.dT,a)},
su7(a){this.ei(B.UL,a)},
sua(a){this.ei(B.dU,a)},
suc(a){this.ei(B.dR,a)},
su8(a){this.ei(B.dS,a)},
sAD(a){this.ei(B.Bs,a)},
sAw(a){this.ei(B.Bq,a)},
sAt(a,b){this.ei(B.UN,b)},
sAu(a,b){this.ei(B.UR,b)},
sAK(a,b){this.ei(B.UH,b)},
sAI(a){this.jY(B.UO,new A.a78(a))},
sAG(a){this.jY(B.UF,new A.a76(a))},
sAJ(a){this.jY(B.UP,new A.a79(a))},
sAH(a){this.jY(B.UG,new A.a77(a))},
sAN(a){this.jY(B.UI,new A.a7a(a))},
sAO(a){this.jY(B.UJ,new A.a7b(a))},
sAx(a){this.ei(B.UM,a)},
sAy(a){this.ei(B.UQ,a)},
sNb(a){return},
sNc(a){if(a==this.k3)return
this.k3=a
this.d=!0},
sAf(a){return},
syQ(a){return},
siq(a,b){if(b===this.x2)return
this.x2=b
this.d=!0},
Id(a){var s=this.aj;(s==null?this.aj=A.b5(t.xJ):s).D(0,a)},
bb(a,b){var s=this,r=s.af,q=a.a
if(b)s.af=r|q
else s.af=r&~q
s.d=!0},
KE(a){var s,r=this
if(a==null||!a.d||!r.d)return!0
if((r.f&a.f)!==0)return!1
if((r.af&a.af)!==0)return!1
if(r.R8.a.length!==0)s=a.R8.a.length!==0
else s=!1
if(s)return!1
return!0},
ki(a){var s,r,q=this
if(!a.d)return
q.e.I(0,a.e)
q.p3.I(0,a.p3)
q.f=q.f|a.f
q.af=q.af|a.af
q.y2=a.y2
if(q.bK==null)q.bK=a.bK
if(q.br==null)q.br=a.br
if(q.b8==null)q.b8=a.b8
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
q.p4=A.ahs(a.p4,a.y1,r,s)
s=q.R8
if(s.a==="")q.R8=a.R8
s=q.RG
if(s.a==="")q.RG=a.RG
s=q.rx
if(s.a==="")q.rx=a.rx
s=q.ry
r=q.y1
q.ry=A.ahs(a.ry,a.y1,s,r)
if(q.to==="")q.to=a.to
q.xr=Math.max(q.xr,a.xr+a.x2)
q.d=q.d||a.d},
a1C(){var s=this,r=A.q0()
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
r.bK=s.bK
r.br=s.br
r.b8=s.b8
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
A.a75.prototype={
$1(a){this.a.$0()},
$S:5}
A.a78.prototype={
$1(a){a.toString
this.a.$1(A.o5(a))},
$S:5}
A.a76.prototype={
$1(a){a.toString
this.a.$1(A.o5(a))},
$S:5}
A.a79.prototype={
$1(a){a.toString
this.a.$1(A.o5(a))},
$S:5}
A.a77.prototype={
$1(a){a.toString
this.a.$1(A.o5(a))},
$S:5}
A.a7a.prototype={
$1(a){var s,r,q
a.toString
s=J.ajL(t.G.a(a),t.N,t.S)
r=s.i(0,"base")
r.toString
q=s.i(0,"extent")
q.toString
this.a.$1(A.aaI(B.D,r,q,!1))},
$S:5}
A.a7b.prototype={
$1(a){a.toString
this.a.$1(A.bH(a))},
$S:5}
A.Eb.prototype={
F(){return"DebugSemanticsDumpOrder."+this.b}}
A.q1.prototype={
aG(a,b){var s=this.a2B(b)
return s},
$ib8:1}
A.w2.prototype={
a2B(a){var s=a.b===this.b
if(s)return 0
return B.f.aG(this.b,a.b)}}
A.QZ.prototype={}
A.R0.prototype={}
A.R1.prototype={}
A.a7d.prototype={
Mb(a){var s=A.aZ(["type",this.a,"data",this.q0()],t.N,t.z)
if(a!=null)s.k(0,"nodeId",a)
return s},
a74(){return this.Mb(null)},
j(a){var s,r,q,p=A.a([],t.s),o=this.q0(),n=J.anl(o.gbs(o))
B.c.i7(n)
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.P)(n),++r){q=n[r]
p.push(A.h(q)+": "+A.h(o.i(0,q)))}return"SemanticsEvent("+B.c.b5(p,", ")+")"}}
A.aaQ.prototype={
q0(){return A.aZ(["message",this.b],t.N,t.z)}}
A.a2e.prototype={
q0(){return B.iB}}
A.aab.prototype={
q0(){return B.iB}}
A.Bz.prototype={
kN(a,b){return this.a57(a,!0)},
a57(a,b){var s=0,r=A.a2(t.N),q,p=this,o
var $async$kN=A.Y(function(c,d){if(c===1)return A.a_(d,r)
while(true)switch(s){case 0:s=3
return A.a4(p.cZ(0,a),$async$kN)
case 3:o=d
if(o.byteLength<51200){q=B.V.e1(0,A.cP(o.buffer,0,null))
s=1
break}q=A.TI(A.aE9(),o,'UTF8 decode for "'+a+'"',t.B6,t.N)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$kN,r)},
j(a){return"<optimized out>#"+A.bP(this)+"()"}}
A.Vx.prototype={
kN(a,b){return this.NS(a,!0)},
a58(a,b,c){var s,r={},q=this.b
if(q.R(0,a)){r=q.i(0,a)
r.toString
return c.h("ah<0>").a(r)}r.a=r.b=null
this.kN(a,!1).aF(b,c).aF(new A.Vy(r,this,a,c),t.H)
s=r.a
if(s!=null)return s
s=new A.a8($.a9,c.h("a8<0>"))
r.b=new A.aL(s,c.h("aL<0>"))
q.k(0,a,s)
return r.b.a}}
A.Vy.prototype={
$1(a){var s=this,r=new A.br(a,s.d.h("br<0>")),q=s.a
q.a=r
s.b.b.k(0,s.c,r)
q=q.b
if(q!=null)q.bV(0,a)},
$S(){return this.d.h("as(0)")}}
A.a49.prototype={
cZ(a,b){var s,r=B.cf.en(A.aqH(A.Ax(B.ib,b,B.V,!1)).e),q=$.hn.ag$
q===$&&A.b()
s=q.v0(0,"flutter/assets",A.kL(r.buffer,0,null)).aF(new A.a4a(b),t.B6)
return s},
tY(a){return this.a55(a)},
a55(a){var s=0,r=A.a2(t.gG),q,p=this,o
var $async$tY=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:s=3
return A.a4(p.cZ(0,a),$async$tY)
case 3:o=c
q=A.a1j(A.cP(o.buffer,0,null))
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$tY,r)}}
A.a4a.prototype={
$1(a){if(a==null)throw A.c(A.ako(A.a([A.aD8(this.a),A.bq("The asset does not exist or has empty data.")],t.F)))
return a},
$S:270}
A.UM.prototype={}
A.q2.prototype={
p_(){var s=$.TZ()
s.a.a_(0)
s.b.a_(0)},
js(a){return this.a3P(a)},
a3P(a){var s=0,r=A.a2(t.H),q,p=this
var $async$js=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:switch(A.bH(J.aR(t.a.a(a),"type"))){case"memoryPressure":p.p_()
break}s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$js,r)},
S0(){var s=A.b7("controller")
s.sc9(A.qc(null,new A.a7u(s),null,!1,t.xe))
return J.avi(s.aE())},
a6c(){if(this.Q$!=null)return
$.aQ()
var s=A.apF("AppLifecycleState.resumed")
if(s!=null)this.tB(s)},
wR(a){return this.VE(a)},
VE(a){var s=0,r=A.a2(t.dR),q,p=this,o
var $async$wR=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:a.toString
o=A.apF(a)
o.toString
p.tB(o)
q=null
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$wR,r)},
wS(a){return this.VN(a)},
VN(a){var s=0,r=A.a2(t.H)
var $async$wS=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:t.j.a(a.b)
return A.a0(null,r)}})
return A.a1($async$wS,r)},
$idH:1}
A.a7u.prototype={
$0(){var s=0,r=A.a2(t.H),q=this,p,o,n
var $async$$0=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:o=A.b7("rawLicenses")
n=o
s=2
return A.a4($.TZ().kN("NOTICES",!1),$async$$0)
case 2:n.sc9(b)
p=q.a
n=J
s=3
return A.a4(A.TI(A.aEh(),o.aE(),"parseLicenses",t.N,t.rh),$async$$0)
case 3:n.iR(b,J.avb(p.aE()))
s=4
return A.a4(J.and(p.aE()),$async$$0)
case 4:return A.a0(null,r)}})
return A.a1($async$$0,r)},
$S:62}
A.acw.prototype={
v0(a,b,c){var s=new A.a8($.a9,t.sB)
$.aQ().Zy(b,c,A.axm(new A.acx(new A.aL(s,t.BB))))
return s},
Ci(a,b){if(b==null){a=$.TX().a.i(0,a)
if(a!=null)a.e=null}else $.TX().Nq(a,new A.acy(b))}}
A.acx.prototype={
$1(a){var s,r,q,p
try{this.a.bV(0,a)}catch(q){s=A.af(q)
r=A.au(q)
p=A.bq("during a platform message response callback")
A.eb(new A.bM(s,r,"services library",p,null,!1))}},
$S:21}
A.acy.prototype={
$2(a,b){return this.MF(a,b)},
MF(a,b){var s=0,r=A.a2(t.H),q=1,p,o=[],n=this,m,l,k,j,i,h
var $async$$2=A.Y(function(c,d){if(c===1){p=d
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
l=A.au(h)
j=A.bq("during a platform message callback")
A.eb(new A.bM(m,l,"services library",j,null,!1))
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
$S:274}
A.YM.prototype={}
A.Y7.prototype={}
A.Yg.prototype={}
A.EE.prototype={}
A.YO.prototype={}
A.EC.prototype={}
A.Yo.prototype={}
A.XD.prototype={}
A.Yp.prototype={}
A.EK.prototype={}
A.EA.prototype={}
A.EH.prototype={}
A.EU.prototype={}
A.Yc.prototype={}
A.Yu.prototype={}
A.XM.prototype={}
A.Y_.prototype={}
A.Xn.prototype={}
A.XQ.prototype={}
A.EP.prototype={}
A.Xp.prototype={}
A.Yz.prototype={}
A.ph.prototype={}
A.kA.prototype={}
A.mI.prototype={}
A.kB.prototype={}
A.v0.prototype={}
A.a07.prototype={
Ts(a){var s,r,q,p,o,n,m,l,k,j
this.d=!0
s=!1
for(n=this.c,m=0;!1;++m){r=n[m]
try{q=r.$1(a)
s=s||q}catch(l){p=A.af(l)
o=A.au(l)
k=A.bq("while processing a key handler")
j=$.fR()
if(j!=null)j.$1(new A.bM(p,o,"services library",k,null,!1))}}this.d=!1
return s},
K6(a){var s,r,q=this,p=a.a,o=a.b
if(a instanceof A.mI){q.a.k(0,p,o)
s=$.ath().i(0,o.a)
if(s!=null){r=q.b
if(r.C(0,s))r.u(0,s)
else r.D(0,s)}}else if(a instanceof A.kB)q.a.u(0,p)
return q.Ts(a)}}
A.uZ.prototype={
F(){return"KeyDataTransitMode."+this.b}}
A.v_.prototype={
j(a){return"KeyMessage("+A.h(this.a)+")"}}
A.Gh.prototype={
a3s(a){var s,r=this,q=r.d
switch((q==null?r.d=B.H_:q).a){case 0:return!1
case 1:if(a.c===0&&a.d===0)return!1
s=A.aye(a)
if(a.f&&r.e.length===0){r.b.K6(s)
r.EC(A.a([s],t.DG),null)}else r.e.push(s)
return!1}},
EC(a,b){var s,r,q,p,o=this.a
if(o!=null){s=new A.v_(a,b)
try{o=o.$1(s)
return o}catch(p){r=A.af(p)
q=A.au(p)
o=A.bq("while processing the key message handler")
A.eb(new A.bM(r,q,"services library",o,null,!1))}}return!1},
zJ(a){var s=0,r=A.a2(t.a),q,p=this,o,n,m,l,k,j,i
var $async$zJ=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:if(p.d==null){p.d=B.GZ
p.c.a.push(p.gT7())}o=A.azU(t.a.a(a))
if(o instanceof A.ig){n=o.c
m=p.f
if(!n.NB()){m.D(0,n.gdT())
l=!1}else{m.u(0,n.gdT())
l=!0}}else if(o instanceof A.pF){n=p.f
m=o.c
if(n.C(0,m.gdT())){n.u(0,m.gdT())
l=!1}else l=!0}else l=!0
if(l){p.c.a3J(o)
for(n=p.e,m=n.length,k=p.b,j=!1,i=0;i<n.length;n.length===m||(0,A.P)(n),++i)j=k.K6(n[i])||j
j=p.EC(n,o)||j
B.c.a_(n)}else j=!0
q=A.aZ(["handled",j],t.N,t.z)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$zJ,r)},
T8(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.c,d=e.gdT(),c=e.gpi()
e=this.b.a
s=A.n(e).h("ba<1>")
r=A.kG(new A.ba(e,s),s.h("o.E"))
q=A.a([],t.DG)
p=e.i(0,d)
o=$.hn.id$
n=a.a
if(n==="")n=f
if(a instanceof A.ig)if(p==null){m=new A.mI(d,c,n,o,!1)
r.D(0,d)}else m=new A.v0(d,p,n,o,!1)
else if(p==null)m=f
else{m=new A.kB(d,p,f,o,!1)
r.u(0,d)}for(s=this.c.d,l=A.n(s).h("ba<1>"),k=l.h("o.E"),j=r.kv(A.kG(new A.ba(s,l),k)),j=j.ga5(j),i=this.e;j.q();){h=j.gG(j)
if(h.l(0,d))q.push(new A.kB(h,c,f,o,!0))
else{g=e.i(0,h)
g.toString
i.push(new A.kB(h,g,f,o,!0))}}for(e=A.kG(new A.ba(s,l),k).kv(r),e=e.ga5(e);e.q();){l=e.gG(e)
k=s.i(0,l)
k.toString
i.push(new A.mI(l,k,f,o,!0))}if(m!=null)i.push(m)
B.c.I(i,q)}}
A.OD.prototype={}
A.a2_.prototype={}
A.e.prototype={
gt(a){return B.f.gt(this.a)},
l(a,b){if(b==null)return!1
if(this===b)return!0
if(J.X(b)!==A.C(this))return!1
return b instanceof A.e&&b.a===this.a}}
A.l.prototype={
gt(a){return B.f.gt(this.a)},
l(a,b){if(b==null)return!1
if(this===b)return!0
if(J.X(b)!==A.C(this))return!1
return b instanceof A.l&&b.a===this.a}}
A.OE.prototype={}
A.i4.prototype={
j(a){return"MethodCall("+this.a+", "+A.h(this.b)+")"}}
A.wk.prototype={
j(a){var s=this
return"PlatformException("+s.a+", "+A.h(s.b)+", "+A.h(s.c)+", "+A.h(s.d)+")"},
$ibt:1}
A.vE.prototype={
j(a){return"MissingPluginException("+A.h(this.a)+")"},
$ibt:1}
A.a9N.prototype={
eR(a){if(a==null)return null
return B.cR.en(A.cP(a.buffer,a.byteOffset,a.byteLength))},
bX(a){if(a==null)return null
return A.kL(B.cf.en(a).buffer,0,null)}}
A.a1w.prototype={
bX(a){if(a==null)return null
return B.hs.bX(B.aa.tj(a))},
eR(a){var s
if(a==null)return a
s=B.hs.eR(a)
s.toString
return B.aa.e1(0,s)}}
A.a1y.prototype={
fV(a){var s=B.bP.bX(A.aZ(["method",a.a,"args",a.b],t.N,t.X))
s.toString
return s},
fT(a){var s,r,q,p=null,o=B.bP.eR(a)
if(!t.G.b(o))throw A.c(A.bz("Expected method call Map, got "+A.h(o),p,p))
s=J.aH(o)
r=s.i(o,"method")
q=s.i(o,"args")
if(typeof r=="string")return new A.i4(r,q)
throw A.c(A.bz("Invalid method call: "+A.h(o),p,p))},
J7(a){var s,r,q,p=null,o=B.bP.eR(a)
if(!t.j.b(o))throw A.c(A.bz("Expected envelope List, got "+A.h(o),p,p))
s=J.aH(o)
if(s.gp(o)===1)return s.i(o,0)
if(s.gp(o)===3)if(typeof s.i(o,0)=="string")r=s.i(o,1)==null||typeof s.i(o,1)=="string"
else r=!1
else r=!1
if(r){r=A.bH(s.i(o,0))
q=A.cs(s.i(o,1))
throw A.c(A.akU(r,s.i(o,2),q,p))}if(s.gp(o)===4)if(typeof s.i(o,0)=="string")if(s.i(o,1)==null||typeof s.i(o,1)=="string")r=s.i(o,3)==null||typeof s.i(o,3)=="string"
else r=!1
else r=!1
else r=!1
if(r){r=A.bH(s.i(o,0))
q=A.cs(s.i(o,1))
throw A.c(A.akU(r,s.i(o,2),q,A.cs(s.i(o,3))))}throw A.c(A.bz("Invalid envelope: "+A.h(o),p,p))},
oH(a){var s=B.bP.bX([a])
s.toString
return s},
ky(a,b,c){var s=B.bP.bX([a,c,b])
s.toString
return s},
Jy(a,b){return this.ky(a,null,b)}}
A.a9w.prototype={
bX(a){var s
if(a==null)return null
s=A.abv(64)
this.d_(0,s,a)
return s.jd()},
eR(a){var s,r
if(a==null)return null
s=new A.wu(a)
r=this.fz(0,s)
if(s.b<a.byteLength)throw A.c(B.aH)
return r},
d_(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i=null
if(c==null)b.dq(0,0)
else if(A.jX(c))b.dq(0,c?1:2)
else if(typeof c=="number"){b.dq(0,6)
b.hk(8)
s=$.cY()
b.d.setFloat64(0,c,B.a9===s)
b.RS(b.e)}else if(A.jY(c)){s=-2147483648<=c&&c<=2147483647
r=b.d
if(s){b.dq(0,3)
s=$.cY()
r.setInt32(0,c,B.a9===s)
b.nk(b.e,0,4)}else{b.dq(0,4)
s=$.cY()
B.fu.Cg(r,0,c,s)}}else if(typeof c=="string"){b.dq(0,7)
s=c.length
q=new Uint8Array(s)
n=0
while(!0){if(!(n<s)){p=i
o=0
break}m=B.b.W(c,n)
if(m<=127)q[n]=m
else{p=B.cf.en(B.b.bP(c,n))
o=n
break}++n}if(p!=null){j.ef(b,o+p.length)
l=q.BYTES_PER_ELEMENT
k=A.dk(0,o,B.f.hj(q.byteLength,l),i,i)
b.jZ(A.cP(q.buffer,q.byteOffset+0*l,(k-0)*l))
b.jZ(p)}else{j.ef(b,s)
b.jZ(q)}}else if(t.uo.b(c)){b.dq(0,8)
j.ef(b,c.length)
b.jZ(c)}else if(t.fO.b(c)){b.dq(0,9)
s=c.length
j.ef(b,s)
b.hk(4)
b.jZ(A.cP(c.buffer,c.byteOffset,4*s))}else if(t.D4.b(c)){b.dq(0,14)
s=c.length
j.ef(b,s)
b.hk(4)
b.jZ(A.cP(c.buffer,c.byteOffset,4*s))}else if(t.cE.b(c)){b.dq(0,11)
s=c.length
j.ef(b,s)
b.hk(8)
b.jZ(A.cP(c.buffer,c.byteOffset,8*s))}else if(t.j.b(c)){b.dq(0,12)
s=J.aH(c)
j.ef(b,s.gp(c))
for(s=s.ga5(c);s.q();)j.d_(0,b,s.gG(s))}else if(t.G.b(c)){b.dq(0,13)
s=J.aH(c)
j.ef(b,s.gp(c))
s.Z(c,new A.a9x(j,b))}else throw A.c(A.f8(c,i,i))},
fz(a,b){if(b.b>=b.a.byteLength)throw A.c(B.aH)
return this.iJ(b.l0(0),b)},
iJ(a,b){var s,r,q,p,o,n,m,l,k=this
switch(a){case 0:return null
case 1:return!0
case 2:return!1
case 3:s=b.b
r=$.cY()
q=b.a.getInt32(s,B.a9===r)
b.b+=4
return q
case 4:return b.uR(0)
case 6:b.hk(8)
s=b.b
r=$.cY()
q=b.a.getFloat64(s,B.a9===r)
b.b+=8
return q
case 5:case 7:p=k.dD(b)
return B.cR.en(b.l1(p))
case 8:return b.l1(k.dD(b))
case 9:p=k.dD(b)
b.hk(4)
s=b.a
o=A.aoW(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+4*p
return o
case 10:return b.uS(k.dD(b))
case 14:p=k.dD(b)
b.hk(4)
s=b.a
r=s.buffer
s=s.byteOffset+b.b
A.Ty(r,s,p)
o=new Float32Array(r,s,p)
b.b=b.b+4*p
return o
case 11:p=k.dD(b)
b.hk(8)
s=b.a
o=A.aoU(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+8*p
return o
case 12:p=k.dD(b)
n=A.aV(p,null,!1,t.X)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.L(B.aH)
b.b=r+1
n[m]=k.iJ(s.getUint8(r),b)}return n
case 13:p=k.dD(b)
s=t.X
n=A.z(s,s)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.L(B.aH)
b.b=r+1
r=k.iJ(s.getUint8(r),b)
l=b.b
if(l>=s.byteLength)A.L(B.aH)
b.b=l+1
n.k(0,r,k.iJ(s.getUint8(l),b))}return n
default:throw A.c(B.aH)}},
ef(a,b){var s,r
if(b<254)a.dq(0,b)
else{s=a.d
if(b<=65535){a.dq(0,254)
r=$.cY()
s.setUint16(0,b,B.a9===r)
a.nk(a.e,0,2)}else{a.dq(0,255)
r=$.cY()
s.setUint32(0,b,B.a9===r)
a.nk(a.e,0,4)}}},
dD(a){var s,r,q=a.l0(0)
switch(q){case 254:s=a.b
r=$.cY()
q=a.a.getUint16(s,B.a9===r)
a.b+=2
return q
case 255:s=a.b
r=$.cY()
q=a.a.getUint32(s,B.a9===r)
a.b+=4
return q
default:return q}}}
A.a9x.prototype={
$2(a,b){var s=this.a,r=this.b
s.d_(0,r,a)
s.d_(0,r,b)},
$S:79}
A.a9A.prototype={
fV(a){var s=A.abv(64)
B.ah.d_(0,s,a.a)
B.ah.d_(0,s,a.b)
return s.jd()},
fT(a){var s,r,q
a.toString
s=new A.wu(a)
r=B.ah.fz(0,s)
q=B.ah.fz(0,s)
if(typeof r=="string"&&s.b>=a.byteLength)return new A.i4(r,q)
else throw A.c(B.nJ)},
oH(a){var s=A.abv(64)
s.dq(0,0)
B.ah.d_(0,s,a)
return s.jd()},
ky(a,b,c){var s=A.abv(64)
s.dq(0,1)
B.ah.d_(0,s,a)
B.ah.d_(0,s,c)
B.ah.d_(0,s,b)
return s.jd()},
Jy(a,b){return this.ky(a,null,b)},
J7(a){var s,r,q,p,o,n
if(a.byteLength===0)throw A.c(B.Gy)
s=new A.wu(a)
if(s.l0(0)===0)return B.ah.fz(0,s)
r=B.ah.fz(0,s)
q=B.ah.fz(0,s)
p=B.ah.fz(0,s)
o=s.b<a.byteLength?A.cs(B.ah.fz(0,s)):null
if(typeof r=="string")n=(q==null||typeof q=="string")&&s.b>=a.byteLength
else n=!1
if(n)throw A.c(A.akU(r,p,A.cs(q),o))
else throw A.c(B.Gz)}}
A.a3_.prototype={
a3j(a,b,c){var s,r,q,p
if(t.yg.b(b)){this.b.u(0,a)
return}s=this.b
r=s.i(0,a)
q=A.aBu(c)
if(q==null)q=this.a
if(J.f(r==null?null:t.Ft.a(r.a),q))return
p=q.t_(a)
s.k(0,a,p)
B.TO.h_("activateSystemCursor",A.aZ(["device",p.b,"kind",t.Ft.a(p.a).a],t.N,t.z),t.H)}}
A.vG.prototype={}
A.ed.prototype={
j(a){var s=this.gt1()
return s}}
A.Nu.prototype={
t_(a){throw A.c(A.c4(null))},
gt1(){return"defer"}}
A.RD.prototype={}
A.l9.prototype={
gt1(){return"SystemMouseCursor("+this.a+")"},
t_(a){return new A.RD(this,a)},
l(a,b){if(b==null)return!1
if(J.X(b)!==A.C(this))return!1
return b instanceof A.l9&&b.a===this.a},
gt(a){return B.b.gt(this.a)}}
A.P8.prototype={}
A.k9.prototype={
gob(){var s,r=$.hn.ag$
r===$&&A.b()
s=r
return s},
ew(a,b){return this.Nh(0,b,this.$ti.h("1?"))},
Nh(a,b,c){var s=0,r=A.a2(c),q,p=this,o,n
var $async$ew=A.Y(function(d,e){if(d===1)return A.a_(e,r)
while(true)switch(s){case 0:o=p.b
n=o
s=3
return A.a4(p.gob().v0(0,p.a,o.bX(b)),$async$ew)
case 3:q=n.eR(e)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$ew,r)},
v6(a){this.gob().Ci(this.a,new A.UK(this,a))}}
A.UK.prototype={
$1(a){return this.Mz(a)},
Mz(a){var s=0,r=A.a2(t.yD),q,p=this,o,n
var $async$$1=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:o=p.a.b
n=o
s=3
return A.a4(p.b.$1(o.eR(a)),$async$$1)
case 3:q=n.bX(c)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$$1,r)},
$S:100}
A.vD.prototype={
gob(){var s,r=$.hn.ag$
r===$&&A.b()
s=r
return s},
nA(a,b,c,d){return this.WS(a,b,c,d,d.h("0?"))},
WS(a,b,c,d,e){var s=0,r=A.a2(e),q,p=this,o,n,m,l
var $async$nA=A.Y(function(f,g){if(f===1)return A.a_(g,r)
while(true)switch(s){case 0:o=p.b
n=o.fV(new A.i4(a,b))
m=p.a
s=3
return A.a4(p.gob().v0(0,m,n),$async$nA)
case 3:l=g
if(l==null){if(c){q=null
s=1
break}throw A.c(A.ayN("No implementation found for method "+a+" on channel "+m))}q=d.h("0?").a(o.J7(l))
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$nA,r)},
n1(a){var s=this.gob()
s.Ci(this.a,new A.a2N(this,a))},
qF(a,b){return this.UW(a,b)},
UW(a,b){var s=0,r=A.a2(t.yD),q,p=2,o,n=this,m,l,k,j,i,h,g,f,e
var $async$qF=A.Y(function(c,d){if(c===1){o=d
s=p}while(true)switch(s){case 0:h=n.b
g=h.fT(a)
p=4
e=h
s=7
return A.a4(b.$1(g),$async$qF)
case 7:k=e.oH(d)
q=k
s=1
break
p=2
s=6
break
case 4:p=3
f=o
k=A.af(f)
if(k instanceof A.wk){m=k
k=m.a
i=m.b
q=h.ky(k,m.c,i)
s=1
break}else if(k instanceof A.vE){q=null
s=1
break}else{l=k
h=h.Jy("error",J.da(l))
q=h
s=1
break}s=6
break
case 3:s=2
break
case 6:case 1:return A.a0(q,r)
case 2:return A.a_(o,r)}})
return A.a1($async$qF,r)}}
A.a2N.prototype={
$1(a){return this.a.qF(a,this.b)},
$S:100}
A.kP.prototype={
h_(a,b,c){return this.a4E(a,b,c,c.h("0?"))},
tQ(a,b){return this.h_(a,null,b)},
a4E(a,b,c,d){var s=0,r=A.a2(d),q,p=this
var $async$h_=A.Y(function(e,f){if(e===1)return A.a_(f,r)
while(true)switch(s){case 0:q=p.OH(a,b,!0,c)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$h_,r)}}
A.kC.prototype={
F(){return"KeyboardSide."+this.b}}
A.ev.prototype={
F(){return"ModifierKey."+this.b}}
A.ws.prototype={
ga5p(){var s,r,q,p=A.z(t.BL,t.a0)
for(s=0;s<9;++s){r=B.oy[s]
if(this.a4J(r)){q=this.MR(r)
if(q!=null)p.k(0,r,q)}}return p},
NB(){return!0}}
A.hj.prototype={}
A.a4M.prototype={
$0(){var s,r,q,p=this.b,o=J.aH(p),n=A.cs(o.i(p,"key")),m=n==null
if(!m){s=n.length
s=s!==0&&s===1}else s=!1
if(s)this.a.a=n
s=A.cs(o.i(p,"code"))
if(s==null)s=""
m=m?"":n
r=A.o6(o.i(p,"location"))
if(r==null)r=0
q=A.o6(o.i(p,"metaState"))
if(q==null)q=0
p=A.o6(o.i(p,"keyCode"))
return new A.pE(s,m,r,q,p==null?0:p)},
$S:278}
A.ig.prototype={}
A.pF.prototype={}
A.a4R.prototype={
a3J(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(a instanceof A.ig){p=a.c
i.d.k(0,p.gdT(),p.gpi())}else if(a instanceof A.pF)i.d.u(0,a.c.gdT())
i.a_4(a)
for(p=i.a,o=A.aB(p,!0,t.vc),n=o.length,m=0;m<n;++m){s=o[m]
try{if(B.c.C(p,s))s.$1(a)}catch(l){r=A.af(l)
q=A.au(l)
k=A.bq("while processing a raw key listener")
j=$.fR()
if(j!=null)j.$1(new A.bM(r,q,"services library",k,null,!1))}}return!1},
a_4(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=a1.c,f=g.ga5p(),e=t.F3,d=A.z(e,t.lT),c=A.b5(e),b=this.d,a=A.kG(new A.ba(b,A.n(b).h("ba<1>")),e),a0=a1 instanceof A.ig
if(a0)a.D(0,g.gdT())
for(s=null,r=0;r<9;++r){q=B.oy[r]
p=$.atk()
o=p.i(0,new A.cg(q,B.bf))
if(o==null)continue
if(o.C(0,g.gdT()))s=q
if(f.i(0,q)===B.cm){c.I(0,o)
if(o.kk(0,a.gja(a)))continue}n=f.i(0,q)==null?A.b5(e):p.i(0,new A.cg(q,f.i(0,q)))
if(n==null)continue
for(p=new A.r6(n,n.r),p.c=n.e,m=A.n(p).c;p.q();){l=p.d
if(l==null)l=m.a(l)
k=$.atj().i(0,l)
k.toString
d.k(0,l,k)}}e=g instanceof A.a4K
j=(e||g instanceof A.pE)&&b.i(0,B.bI)!=null&&!J.f(b.i(0,B.bI),B.dp)
for(a=$.ajD(),a=A.jb(a,a.r);a.q();){p=a.d
i=j&&p.l(0,B.bI)
if(!c.C(0,p)&&!i)b.u(0,p)}if(!(g instanceof A.a4I)&&!(g instanceof A.a4L))b.u(0,B.dF)
b.I(0,d)
if(a0&&s!=null&&!b.R(0,g.gdT())){if(e&&g.gdT().l(0,B.bJ)||g instanceof A.a4J||g instanceof A.a4H){h=$.ajD().i(0,g.gdT())
if(h!=null)b.k(0,g.gdT(),h)}if(g instanceof A.pE&&g.gdT().l(0,B.bJ))b.k(0,g.gdT(),g.gpi())}}}
A.cg.prototype={
l(a,b){if(b==null)return!1
if(J.X(b)!==A.C(this))return!1
return b instanceof A.cg&&b.a===this.a&&b.b==this.b},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.Qh.prototype={}
A.Qg.prototype={}
A.a4H.prototype={}
A.a4I.prototype={}
A.a4J.prototype={}
A.a4K.prototype={}
A.a4L.prototype={}
A.pE.prototype={
gdT(){var s=this.a,r=B.Tl.i(0,s)
return r==null?new A.l(98784247808+B.b.gt(s)):r},
gpi(){var s,r=this.b,q=B.Tn.i(0,r),p=q==null?null:q[this.c]
if(p!=null)return p
s=B.Tk.i(0,r)
if(s!=null)return s
if(r.length===1)return new A.e(B.b.W(r.toLowerCase(),0))
return new A.e(B.b.gt(this.a)+98784247808)},
a4J(a){var s=this
switch(a.a){case 0:return(s.d&4)!==0
case 1:return(s.d&1)!==0
case 2:return(s.d&2)!==0
case 3:return(s.d&8)!==0
case 5:return(s.d&16)!==0
case 4:return(s.d&32)!==0
case 6:return(s.d&64)!==0
case 7:case 8:return!1}},
MR(a){return B.cm},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.C(s))return!1
return b instanceof A.pE&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.wL.prototype={
ga6P(){var s=this
if(s.c)return new A.br(s.a,t.m6)
if(s.b==null){s.b=new A.aL(new A.a8($.a9,t.jr),t.Fk)
s.qE()}return s.b.a},
qE(){var s=0,r=A.a2(t.H),q,p=this,o
var $async$qE=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:s=3
return A.a4(B.iH.tQ("get",t.mE),$async$qE)
case 3:o=b
if(p.b==null){s=1
break}p.Ga(o)
case 1:return A.a0(q,r)}})
return A.a1($async$qE,r)},
Ga(a){var s,r=a==null
if(!r){s=J.aR(a,"enabled")
s.toString
A.o5(s)}else s=!1
this.a3L(r?null:t.Fx.a(J.aR(a,"data")),s)},
a3L(a,b){var s,r,q=this,p=q.c&&b
q.d=p
if(p)$.bT.cy$.push(new A.a5O(q))
s=q.a
if(b){p=q.Tk(a)
r=t.N
if(p==null){p=t.X
p=A.z(p,p)}r=new A.cB(p,q,null,"root",A.z(r,t.hp),A.z(r,t.Cm))
p=r}else p=null
q.a=p
q.c=!0
r=q.b
if(r!=null)r.bV(0,p)
q.b=null
if(q.a!=s){q.aC()
if(s!=null)s.m()}},
xd(a){return this.Xp(a)},
Xp(a){var s=0,r=A.a2(t.H),q=this,p
var $async$xd=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:p=a.a
switch(p){case"push":q.Ga(t.mE.a(a.b))
break
default:throw A.c(A.c4(p+" was invoked but isn't implemented by "+A.C(q).j(0)))}return A.a0(null,r)}})
return A.a1($async$xd,r)},
Tk(a){if(a==null)return null
return t.ym.a(B.ah.eR(A.kL(a.buffer,a.byteOffset,a.byteLength)))},
N9(a){var s=this
s.r.D(0,a)
if(!s.f){s.f=!0
$.bT.cy$.push(new A.a5P(s))}},
EE(){var s,r,q,p,o,n=this
if(!n.f)return
n.f=!1
for(s=n.r,r=A.jK(s,s.r),q=A.n(r).c;r.q();){p=r.d;(p==null?q.a(p):p).w=!1}s.a_(0)
o=B.ah.bX(n.a.a)
B.iH.h_("put",A.cP(o.buffer,o.byteOffset,o.byteLength),t.H)},
JT(){if($.bT.dx$)return
this.EE()}}
A.a5O.prototype={
$1(a){this.a.d=!1},
$S:2}
A.a5P.prototype={
$1(a){return this.a.EE()},
$S:2}
A.cB.prototype={
gnK(){var s=J.Bo(this.a,"c",new A.a5L())
s.toString
return t.mE.a(s)},
gj0(){var s=J.Bo(this.a,"v",new A.a5M())
s.toString
return t.mE.a(s)},
a6n(a,b,c){var s=this,r=J.e6(s.gj0(),b),q=c.h("0?").a(J.iS(s.gj0(),b))
if(J.fS(s.gj0()))J.iS(s.a,"v")
if(r)s.lx()
return q},
a11(a,b){var s,r,q,p,o=this,n=o.f
if(n.R(0,a)||!J.e6(o.gnK(),a)){n=t.N
s=new A.cB(A.z(n,t.X),null,null,a,A.z(n,t.hp),A.z(n,t.Cm))
o.ii(s)
return s}r=t.N
q=o.c
p=J.aR(o.gnK(),a)
p.toString
s=new A.cB(t.mE.a(p),q,o,a,A.z(r,t.hp),A.z(r,t.Cm))
n.k(0,a,s)
return s},
ii(a){var s=this,r=a.d
if(r!==s){if(r!=null)r.r4(a)
a.d=s
s.Dt(a)
if(a.c!=s.c)s.Gn(a)}},
TG(a){this.r4(a)
a.d=null
if(a.c!=null){a.y_(null)
a.I_(this.gGm())}},
lx(){var s,r=this
if(!r.w){r.w=!0
s=r.c
if(s!=null)s.N9(r)}},
Gn(a){a.y_(this.c)
a.I_(this.gGm())},
y_(a){var s=this,r=s.c
if(r==a)return
if(s.w)if(r!=null)r.r.u(0,s)
s.c=a
if(s.w&&a!=null){s.w=!1
s.lx()}},
r4(a){var s,r,q,p=this
if(J.f(p.f.u(0,a.e),a)){J.iS(p.gnK(),a.e)
s=p.r
r=s.i(0,a.e)
if(r!=null){q=J.bK(r)
p.EP(q.dU(r))
if(q.gO(r))s.u(0,a.e)}if(J.fS(p.gnK()))J.iS(p.a,"c")
p.lx()
return}s=p.r
q=s.i(0,a.e)
if(q!=null)J.iS(q,a)
q=s.i(0,a.e)
q=q==null?null:J.fS(q)
if(q===!0)s.u(0,a.e)},
Dt(a){var s=this
if(s.f.R(0,a.e)){J.k4(s.r.bH(0,a.e,new A.a5K()),a)
s.lx()
return}s.EP(a)
s.lx()},
EP(a){this.f.k(0,a.e,a)
J.cL(this.gnK(),a.e,a.a)},
I0(a,b){var s,r,q=this.f
q=q.gaV(q)
s=this.r
s=s.gaV(s)
r=q.a3d(0,new A.h2(s,new A.a5N(),A.n(s).h("h2<o.E,cB>")))
J.iR(b?A.aB(r,!1,A.n(r).h("o.E")):r,a)},
I_(a){return this.I0(a,!1)},
a6v(a){var s,r=this
if(a===r.e)return
s=r.d
if(s!=null)s.r4(r)
r.e=a
s=r.d
if(s!=null)s.Dt(r)},
m(){var s,r=this
r.I0(r.gTF(),!0)
r.f.a_(0)
r.r.a_(0)
s=r.d
if(s!=null)s.r4(r)
r.d=null
r.y_(null)
r.x=!0},
j(a){return"RestorationBucket(restorationId: "+this.e+", owner: "+A.h(this.b)+")"}}
A.a5L.prototype={
$0(){var s=t.X
return A.z(s,s)},
$S:83}
A.a5M.prototype={
$0(){var s=t.X
return A.z(s,s)},
$S:83}
A.a5K.prototype={
$0(){return A.a([],t.oy)},
$S:281}
A.a5N.prototype={
$1(a){return a},
$S:282}
A.Uo.prototype={}
A.iq.prototype={
Hp(){var s,r,q,p,o=this,n=o.a
n=n==null?null:n.a
s=o.e
s=s==null?null:s.a
r=o.f.F()
q=o.r.F()
p=o.c
p=p==null?null:p.F()
return A.aZ(["systemNavigationBarColor",n,"systemNavigationBarDividerColor",null,"systemStatusBarContrastEnforced",o.w,"statusBarColor",s,"statusBarBrightness",r,"statusBarIconBrightness",q,"systemNavigationBarIconBrightness",p,"systemNavigationBarContrastEnforced",o.d],t.N,t.z)},
j(a){return"SystemUiOverlayStyle("+this.Hp().j(0)+")"},
gt(a){var s=this
return A.S(s.a,s.b,s.d,s.e,s.f,s.r,s.w,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
l(a,b){var s,r=this
if(b==null)return!1
if(J.X(b)!==A.C(r))return!1
if(b instanceof A.iq)if(J.f(b.a,r.a))if(J.f(b.e,r.e))if(b.r===r.r)if(b.f===r.f)s=b.c==r.c
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.aa5.prototype={
$0(){if(!J.f($.qk,$.alf)){B.c3.h_("SystemChrome.setSystemUIOverlayStyle",$.qk.Hp(),t.H)
$.alf=$.qk}$.qk=null},
$S:0}
A.xD.prototype={
F(){return"SystemSoundType."+this.b}}
A.aad.prototype={
V(a,b){return new A.NP(b,this)}}
A.VW.prototype={
hb(a){var s,r,q,p,o,n=a.a
if(n<=0)return B.cQ
s=this.a
r=s.length
if(n<=r)q=n===r&&a.b===B.D
else q=!0
if(q)return new A.b3(r,B.O)
switch(a.b.a){case 0:p=Math.min(n-1,r)
o=Math.min(n,r)
break
case 1:p=Math.min(n,r)
o=Math.min(n+1,r)
break
default:o=null
p=null}return new A.b3(A.apQ(s,p,o).b,B.D)},
hc(a){var s,r,q,p,o,n=a.a
if(n>=0)s=n===0&&a.b===B.O
else s=!0
if(s)return B.cQ
s=this.a
r=s.length
if(n>=r)return new A.b3(r,B.O)
switch(a.b.a){case 0:q=Math.min(n-1,r)
p=Math.min(n,r)
break
case 1:q=Math.min(n,r)
p=Math.min(n+1,r)
break
default:p=null
q=null}o=A.apQ(s,q,p)
return new A.b3(r-(o.a.length-o.c),B.O)}}
A.abs.prototype={
hb(a){return new A.b3(this.a.b.mX(a).a,B.D)},
hc(a){return new A.b3(this.a.b.mX(a).b,B.O)}}
A.a23.prototype={
hb(a){return new A.b3(this.a.BP(a).a,B.D)},
hc(a){return new A.b3(this.a.BP(a).b,B.O)}}
A.Xi.prototype={
hb(a){return B.cQ},
hc(a){return new A.b3(this.a.length,B.O)}}
A.abq.prototype={
hb(a){var s,r=a.a,q=this.a,p=q.length
if(r<=p)r=r===p&&a.b===B.D
else r=!0
if(r)a=new A.b3(p,B.O)
s=a.a
if(s<=0)return B.cQ
if(a.b===B.D&&!A.aaF(B.b.ae(q,s)))return a
for(;--s,s>=0;)if(!A.aaF(B.b.ae(q,s)))return new A.b3(s+1,B.O)
return B.cQ},
hc(a){var s,r=a.a,q=this.a,p=q.length
if(r>=p)return new A.b3(p,B.O)
if(r>=0)r=r===0&&a.b===B.O
else r=!0
if(r)a=B.cQ
s=a.a
if(a.b===B.O&&!A.aaF(B.b.ae(q,s-1)))return a
for(;s<p;++s)if(!A.aaF(B.b.ae(q,s)))return new A.b3(s,B.D)
return new A.b3(p,B.O)}}
A.NP.prototype={
hb(a){return this.a.hb(this.b.hb(a))},
hc(a){return this.a.hc(this.b.hc(a))}}
A.JC.prototype={
DX(a){if(this.a)switch(a.b.a){case 0:return new A.b3(a.a,B.D)
case 1:return new A.b3(a.a+1,B.O)}else switch(a.b.a){case 0:return new A.b3(a.a-1,B.D)
case 1:return new A.b3(a.a,B.O)}},
hb(a){return this.DX(a)},
hc(a){return this.DX(a)}}
A.LE.prototype={
j(a){var s,r,q=this,p=", isDirectional: "
if(!q.gkM())return"TextSelection.invalid"
s=""+q.c
r=""+q.f
return q.a===q.b?"TextSelection.collapsed(offset: "+s+", affinity: "+q.e.j(0)+p+r+")":"TextSelection(baseOffset: "+s+", extentOffset: "+q.d+p+r+")"},
l(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof A.LE))return!1
if(!r.gkM())return!b.gkM()
if(b.c===r.c)if(b.d===r.d)s=(r.a!==r.b||b.e===r.e)&&b.f===r.f
else s=!1
else s=!1
return s},
gt(a){var s,r=this
if(!r.gkM())return A.S(-B.f.gt(1),-B.f.gt(1),A.eZ(B.D),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)
s=r.a===r.b?A.eZ(r.e):A.eZ(B.D)
return A.S(B.f.gt(r.c),B.f.gt(r.d),s,B.nV.gt(r.f),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.KJ.prototype={
F(){return"SelectionChangedCause."+this.b}}
A.LC.prototype={
gSD(){var s=this.c
s===$&&A.b()
return s},
qP(a){return this.Xb(a)},
Xb(a){var s=0,r=A.a2(t.z),q,p=2,o,n=this,m,l,k,j,i
var $async$qP=A.Y(function(b,c){if(b===1){o=c
s=p}while(true)switch(s){case 0:p=4
s=7
return A.a4(n.wX(a),$async$qP)
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
l=A.au(i)
k=A.bq("during method call "+a.a)
A.eb(new A.bM(m,l,"services library",k,new A.aaE(a),!1))
throw i
s=6
break
case 3:s=2
break
case 6:case 1:return A.a0(q,r)
case 2:return A.a_(o,r)}})
return A.a1($async$qP,r)},
wX(a){return this.Wt(a)},
Wt(a){var s=0,r=A.a2(t.z),q,p=this,o,n,m,l,k,j
var $async$wX=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:j=a.a
if(j==="TextInputClient.focusElement"){p.f.i(0,J.aR(t.j.a(a.b),0))
s=1
break}else if(j==="TextInputClient.requestElementsInRect"){o=J.lO(t.j.a(a.b),t.fY)
n=A.n(o).h("aC<V.E,W>")
m=p.f
l=A.n(m).h("ba<1>")
k=l.h("dM<o.E,y<@>>")
q=A.aB(new A.dM(new A.aK(new A.ba(m,l),new A.aaB(p,A.aB(new A.aC(o,new A.aaC(),n),!0,n.h("bn.E"))),l.h("aK<o.E>")),new A.aaD(p),k),!0,k.h("o.E"))
s=1
break}else if(j==="TextInputClient.scribbleInteractionBegan"){s=1
break}else if(j==="TextInputClient.scribbleInteractionFinished"){s=1
break}s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$wX,r)}}
A.aaE.prototype={
$0(){var s=null
return A.a([A.hO("call",this.a,!0,B.aO,s,!1,s,s,B.ar,s,!1,!0,!0,B.b_,s,t.fw)],t.F)},
$S:17}
A.aaC.prototype={
$1(a){return a},
$S:284}
A.aaB.prototype={
$1(a){this.a.f.i(0,a)
return!1},
$S:31}
A.aaD.prototype={
$1(a){var s=this.a.f.i(0,a),r=s.gyA(s)
s=[a]
B.c.I(s,[r.ghO(r),r.gBp(r),r.gbo(r),r.gbU(r)])
return s},
$S:285}
A.xN.prototype={}
A.PA.prototype={}
A.SS.prototype={}
A.ahQ.prototype={
$1(a){this.a.sc9(a)
return!1},
$S:41}
A.aP.prototype={}
A.bp.prototype={
fM(a){this.b=a},
iA(a,b){this.gtR()
return!0},
gtR(){return!0},
rV(a){return!0},
a02(a){var s=this.a
s.b=!0
s.a.push(a)
return null},
LJ(a){return this.a.u(0,a)}}
A.m7.prototype={}
A.m0.prototype={
dd(a){return this.c.$1(a)}}
A.U6.prototype={
Kz(a,b,c){if(a instanceof A.m7)return a.mu(b,c)
else return a.dd(b)}}
A.iT.prototype={
an(){return new A.y9(A.b5(t.nT),new A.B(),B.m)}}
A.U8.prototype={
$1(a){var s=a.f
s.toString
t.ke.a(s)
return!1},
$S:40}
A.Ub.prototype={
$1(a){var s,r=this,q=a.f
q.toString
s=A.ajQ(t.ke.a(q),r.b,r.d)
if(s!=null){r.c.CM(a,null)
r.a.a=s
return!0}return!1},
$S:40}
A.U9.prototype={
$1(a){var s,r=a.f
r.toString
s=A.ajQ(t.ke.a(r),this.b,this.c)
if(s!=null){this.a.a=s
return!0}return!1},
$S:40}
A.Uc.prototype={
$1(a){var s,r,q=this,p=a.f
p.toString
s=q.b
r=A.ajQ(t.ke.a(p),s,q.d)
p=r!=null
if(p&&r.iA(0,s))q.a.a=A.ann(a).Kz(r,s,q.c)
return p},
$S:40}
A.y9.prototype={
aA(){this.aP()
this.Hw()},
UO(a){this.az(new A.abz(this))},
Hw(){var s,r,q,p,o=this,n=o.a.d
n=n.gaV(n)
s=A.kG(n,A.n(n).h("o.E"))
r=o.d.kv(s)
n=o.d
n.toString
q=s.kv(n)
for(n=r.ga5(r),p=o.gFa();n.q();)n.gG(n).LJ(p)
for(n=q.ga5(q);n.q();)n.gG(n).a02(p)
o.d=s},
aY(a){this.bq(a)
this.Hw()},
m(){var s,r,q,p,o=this
o.aR()
for(s=o.d,s=A.jK(s,s.r),r=o.gFa(),q=A.n(s).c;s.q();){p=s.d;(p==null?q.a(p):p).LJ(r)}o.d=null},
L(a){var s=this.a
return new A.y8(null,s.d,this.e,s.e,null)}}
A.abz.prototype={
$0(){this.a.e=new A.B()},
$S:0}
A.y8.prototype={
c4(a){var s
if(this.w===a.w)s=!A.ajg(a.r,this.r)
else s=!0
return s}}
A.M8.prototype={
dd(a){a.a7P()
return null}}
A.Eu.prototype={
rV(a){return this.c},
dd(a){}}
A.oe.prototype={}
A.os.prototype={}
A.hQ.prototype={}
A.Es.prototype={}
A.n7.prototype={}
A.Jz.prototype={
iA(a,b){var s,r,q,p,o,n=$.al.ai$.f.f
if(n==null||n.e==null)return!1
for(s=t.q,r=0;r<2;++r){q=B.Hs[r]
p=n.e
p.toString
o=A.ajS(p,q,s)
if(o!=null&&o.iA(0,q)){this.c=o
this.d=q
return!0}}return!1},
dd(a){var s,r=this.c
r===$&&A.b()
s=this.d
s===$&&A.b()
r.dd(s)}}
A.Pu.prototype={
WT(a,b,c){var s
a.fM(this.gks())
s=A.n(this).h("m7<1>").b(a)?a.mu(b,c):a.dd(b)
a.fM(null)
return s},
mu(a,b){var s=this,r=A.ajR(s.gtZ(),A.n(s).c)
return r==null?s.a4D(a,s.b,b):s.WT(r,a,b)},
dd(a){return this.mu(a,null)},
gtR(){var s=this,r=A.ajS(s.gtZ(),null,A.n(s).c)
if(r!=null){r.fM(s.gks())
r.gtR()
r.fM(null)}else s.gks().gtR()
return!0},
iA(a,b){var s,r=this,q=A.ajR(r.gtZ(),A.n(r).c),p=q==null
if(!p)q.fM(r.gks())
s=(p?r.gks():q).iA(0,b)
if(!p)q.fM(null)
return s},
rV(a){var s,r=this,q=A.ajR(r.gtZ(),A.n(r).c),p=q==null
if(!p)q.fM(r.gks())
s=(p?r.gks():q).rV(a)
if(!p)q.fM(null)
return s}}
A.zq.prototype={
a4D(a,b,c){var s=this.e
if(b==null)return s.dd(a)
else return s.dd(a)},
gks(){return this.e},
gtZ(){return this.f}}
A.Mg.prototype={}
A.Mf.prototype={}
A.Oy.prototype={}
A.AQ.prototype={
fM(a){this.NR(a)
this.e.fM(a)}}
A.rZ.prototype={
aH(a){var s=new A.wz(this.e,!0,null,A.ay(),this.$ti.h("wz<1>"))
s.aK()
s.saX(null)
return s},
aO(a,b){b.sn(0,this.e)
b.sNE(!0)}}
A.y6.prototype={
an(){return new A.Ay(B.m)}}
A.Ay.prototype={
gWG(){var s,r
$.al.toString
s=$.aQ()
if(s.gyU()!=="/"){$.al.toString
s=s.gyU()}else{r=this.a.ax
$.al.toString
s=s.gyU()
s=s}return s},
aA(){var s=this
s.aP()
s.a_z()
$.al.toString
s.r=s.xC($.aQ().a.f,s.a.fy)
$.al.b4$.push(s)},
aY(a){this.bq(a)
this.HQ(a)},
m(){B.c.u($.al.b4$,this)
var s=this.d
if(s!=null)s.m()
this.aR()},
Eb(){var s=this.d
if(s!=null)s.m()
this.e=this.d=null},
HQ(a){var s,r=this
r.a.toString
if(r.gHZ()){r.Eb()
if(r.f==null||r.a.c!=a.c){s=r.a.c
r.f=s==null?new A.kr(r,t.yh):s}}else{r.Eb()
r.f=null}},
a_z(){return this.HQ(null)},
gHZ(){var s=this.a
if(s.Q==null){s=s.as
s=s==null?null:s.gbG(s)
s=s===!0||this.a.d!=null||!1}else s=!0
return s},
XN(a){var s,r=this,q=a.a,p=q==="/"&&r.a.Q!=null?new A.agZ(r):r.a.as.i(0,q)
if(p!=null)return r.a.f.$1$2(a,p,t.z)
s=r.a.d
if(s!=null)return s.$1(a)
return null},
Y0(a){return this.a.at.$1(a)},
jc(){var s=0,r=A.a2(t.y),q,p=this,o,n
var $async$jc=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:p.a.toString
o=p.f
n=o==null?null:o.gbv()
if(n==null){q=!1
s=1
break}q=n.KZ()
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$jc,r)},
oy(a){return this.a2u(a)},
a2u(a){var s=0,r=A.a2(t.y),q,p=this,o,n
var $async$oy=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:p.a.toString
o=p.f
n=o==null?null:o.gbv()
if(n==null){q=!1
s=1
break}o=n.xF(a,null,t.X)
o.toString
o=A.aqw(o,B.CE,!1,null)
n.e.push(o)
n.wt()
n.DI(o.a)
q=!0
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$oy,r)},
xC(a,b){this.a.toString
return A.aEg(a,b)},
yZ(a){var s=this,r=s.xC(a,s.a.fy)
if(!r.l(0,s.r))s.az(new A.ah1(s,r))},
L(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g={}
g.a=null
s=i.a
s.toString
if(i.gHZ()){s=i.f
r=i.gWG()
q=i.a
p=q.e==null?A.aFF():new A.ah_(i)
o=q.ay
o.toString
g.a=A.aoe(!0,new A.vT(r,i.gXM(),i.gY_(),o,"nav",p,!0,s),"Navigator Scope",h,h)
s=q}else{s=i.a
s.toString}g.b=null
n=new A.hK(new A.ah0(g,i),h)
g.b=n
n=A.tP(n,h,B.cP,!0,s.cy,h,h,B.aV)
g.b=n
s=$.aBm
if(s)m=new A.Je(15,!1,!1,h)
else m=h
if(m!=null)g.b=A.f2(B.aw,A.a([n,A.n3(h,m,h,h,0,0,0,h)],t.E),B.W,B.aD)
s=i.a
r=s.CW
s=s.db
s=A.b4(255,s.gn(s)>>>16&255,s.gn(s)>>>8&255,s.gn(s)&255)
g=g.b
q=i.a.dx
if(q!=null)l=i.xC(A.a([q],t.as),i.a.fy)
else{q=i.r
q.toString
l=q}q=t.eu
p=A.a([],q)
B.c.I(p,i.a.dy)
p.push(B.ED)
q=A.a(p.slice(0),q)
k=new A.vc(l,q,new A.LM(r,s,g,h),h)
A.dA(a)
g=i.a
j=new A.z7(k,h)
k=j
g=g.p3
s=A.aBl()
r=A.pj($.atR(),t.n,t.nT)
q=t.B8
p=t.dc
r.k(0,B.Cm,new A.zq(new A.pT(new A.bl(A.a([],q),p)),a,!1,!1,!1,!1,new A.bl(A.a([],q),p),t.uq.h("zq<bp.T>")))
return new A.wO(new A.xf(A.al8(new A.Ej(A.U7(r,A.aof(new A.Lx(new A.xg(k,h),h),new A.wv(A.z(t.j5,t.uJ)))),h),"<Default WidgetsApp Shortcuts>",s),h),g,h)}}
A.agZ.prototype={
$1(a){var s=this.a.a.Q
s.toString
return s},
$S:13}
A.ah1.prototype={
$0(){this.a.r=this.b},
$S:0}
A.ah_.prototype={
$2(a,b){return this.a.a.e.$1(b)},
$S:88}
A.ah0.prototype={
$1(a){return this.b.a.ch.$2(a,this.a.a)},
$S:13}
A.Tt.prototype={}
A.oB.prototype={
F(){return"ConnectionState."+this.b}}
A.f9.prototype={
j(a){var s=this
return"AsyncSnapshot("+s.a.j(0)+", "+A.h(s.b)+", "+A.h(s.c)+", "+A.h(s.d)+")"},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return s.$ti.b(b)&&b.a===s.a&&J.f(b.b,s.b)&&J.f(b.c,s.c)&&b.d==s.d},
gt(a){return A.S(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.oW.prototype={
an(){return new A.yH(B.m,this.$ti.h("yH<1>"))}}
A.yH.prototype={
aA(){var s=this
s.aP()
s.a.toString
s.e=new A.f9(B.nr,null,null,null,s.$ti.h("f9<1>"))
s.Hd()},
aY(a){var s,r=this
r.bq(a)
if(a.c!=r.a.c){if(r.d!=null){r.d=null
s=r.e
s===$&&A.b()
r.e=new A.f9(B.nr,s.b,s.c,s.d,s.$ti)}r.Hd()}},
L(a){var s,r=this.a
r.toString
s=this.e
s===$&&A.b()
return r.d.$2(a,s)},
m(){this.d=null
this.aR()},
Hd(){var s,r=this,q=r.a.c
if(q!=null){s=r.d=new A.B()
q.dV(new A.ad9(r,s),new A.ada(r,s),t.H)
q=r.e
q===$&&A.b()
if(q.a!==B.bQ)r.e=new A.f9(B.Fv,q.b,q.c,q.d,q.$ti)}}}
A.ad9.prototype={
$1(a){var s=this.a
if(s.d===this.b)s.az(new A.ad8(s,a))},
$S(){return this.a.$ti.h("as(1)")}}
A.ad8.prototype={
$0(){var s=this.a
s.e=new A.f9(B.bQ,this.b,null,null,s.$ti.h("f9<1>"))},
$S:0}
A.ada.prototype={
$2(a,b){var s=this.a
if(s.d===this.b)s.az(new A.ad7(s,a,b))},
$S:28}
A.ad7.prototype={
$0(){var s=this.a
s.e=new A.f9(B.bQ,null,this.b,this.c,s.$ti.h("f9<1>"))},
$S:0}
A.t3.prototype={
an(){return new A.yf(B.m)}}
A.yf.prototype={
aA(){this.aP()
this.HB()},
aY(a){this.bq(a)
this.HB()},
HB(){this.e=new A.di(this.gRV(),this.a.c,null,t.dm)},
m(){var s,r,q=this.d
if(q!=null)for(q=A.jb(q,q.r);q.q();){s=q.d
r=this.d.i(0,s)
r.toString
s.H(0,r)}this.aR()},
RW(a){var s,r=this,q=a.a,p=r.d
if(p==null)p=r.d=A.z(t.yF,t.M)
p.k(0,q,r.Ta(q))
p=r.d.i(0,q)
p.toString
q.X(0,p)
if(!r.f){r.f=!0
s=r.EW()
if(s!=null)r.HM(s)
else $.bT.cy$.push(new A.abU(r))}return!1},
EW(){var s={},r=this.c
r.toString
s.a=null
r.aW(new A.abZ(s))
return t.ot.a(s.a)},
HM(a){var s,r
this.c.toString
s=this.f
r=this.e
r===$&&A.b()
a.DQ(t.CR.a(A.ayc(r,s)))},
Ta(a){return new A.abY(this,a)},
L(a){var s=this.f,r=this.e
r===$&&A.b()
return new A.uY(s,r,null)}}
A.abU.prototype={
$1(a){var s,r=this.a
if(r.c==null)return
s=r.EW()
s.toString
r.HM(s)},
$S:2}
A.abZ.prototype={
$1(a){this.a.a=a},
$S:8}
A.abY.prototype={
$0(){var s=this.a
s.d.u(0,this.b)
if(s.d.a===0)if($.bT.dy$.a<3)s.az(new A.abW(s))
else{s.f=!1
A.dU(new A.abX(s))}},
$S:0}
A.abW.prototype={
$0(){this.a.f=!1},
$S:0}
A.abX.prototype={
$0(){var s=this.a
if(s.c!=null&&s.d.a===0)s.az(new A.abV(s))},
$S:0}
A.abV.prototype={
$0(){},
$S:0}
A.pe.prototype={}
A.Gg.prototype={}
A.ol.prototype={
qv(){var s=new A.Gg($.bC())
this.hG$=s
this.c.d5(new A.pe(s))},
pT(){var s,r=this
if(r.guI()){if(r.hG$==null)r.qv()}else{s=r.hG$
if(s!=null){s.aC()
s.dY()
r.hG$=null}}},
L(a){if(this.guI()&&this.hG$==null)this.qv()
return B.a0U}}
A.Pk.prototype={
L(a){throw A.c(A.Fs("Widgets that mix AutomaticKeepAliveClientMixin into their State must call super.build() but must ignore the return value of the superclass."))}}
A.Sk.prototype={
Cc(a,b){},
mC(a){A.aqC(this,new A.agJ(this,a))}}
A.agJ.prototype={
$1(a){var s=a.z
if(s!=null&&s.C(0,this.a))a.b7()},
$S:8}
A.agI.prototype={
$1(a){A.aqC(a,this.a)},
$S:8}
A.Sl.prototype={
bW(a){var s=A.h5(t.h,t.X)
return new A.Sk(s,this,B.a8)}}
A.ff.prototype={
c4(a){return this.w!==a.w}}
A.tK.prototype={
aH(a){var s=new A.JT(this.e,this.f,this.r,!1,!1,null,A.ay())
s.aK()
s.saX(null)
return s},
aO(a,b){b.suj(this.e)
b.sJX(this.f)
b.suo(this.r)
b.cn=b.bz=!1},
oA(a){a.suj(null)
a.sJX(null)}}
A.ow.prototype={
aH(a){var s=new A.JQ(null,this.f,null,A.ay())
s.aK()
s.saX(null)
return s},
aO(a,b){b.sog(null)
b.srT(this.f)},
oA(a){a.sog(null)}}
A.C8.prototype={
aH(a){var s=new A.JP(this.e,this.f,null,A.ay())
s.aK()
s.saX(null)
return s},
aO(a,b){b.sog(this.e)
b.srT(this.f)},
oA(a){a.sog(null)}}
A.Jk.prototype={
aH(a){var s=this,r=new A.K6(s.e,s.r,s.w,s.y,s.x,null,s.f,null,A.ay())
r.aK()
r.saX(null)
return r},
aO(a,b){var s=this
b.sdi(0,s.e)
b.srT(s.f)
b.sa0E(0,s.r)
b.siq(0,s.w)
b.sam(0,s.x)
b.shd(0,s.y)}}
A.Jl.prototype={
aH(a){var s=this,r=new A.K7(s.r,s.x,s.w,s.e,s.f,null,A.ay())
r.aK()
r.saX(null)
return r},
aO(a,b){var s=this
b.sog(s.e)
b.srT(s.f)
b.siq(0,s.r)
b.sam(0,s.w)
b.shd(0,s.x)}}
A.qu.prototype={
aH(a){var s=this,r=A.dW(a),q=new A.Kg(s.w,null,A.ay())
q.aK()
q.saX(null)
q.sbt(0,s.e)
q.sem(s.r)
q.sbN(r)
q.smk(s.x)
q.sLi(0,null)
return q},
aO(a,b){var s=this
b.sbt(0,s.e)
b.sLi(0,null)
b.sem(s.r)
b.sbN(A.dW(a))
b.bz=s.w
b.smk(s.x)}}
A.Fl.prototype={
aH(a){var s=new A.wA(this.e,this.f,A.dW(a),B.i,null,A.ay())
s.aK()
s.saX(null)
return s},
aO(a,b){b.szz(this.e)
b.sem(this.f)
b.sbN(A.dW(a))
if(B.i!==b.e5){b.e5=B.i
b.av()
b.b3()}}}
A.FC.prototype={
aH(a){var s=new A.JY(this.e,this.f,null,A.ay())
s.aK()
s.saX(null)
return s},
aO(a,b){b.sa7c(this.e)
b.U=this.f}}
A.i8.prototype={
aH(a){var s=new A.K4(this.e,A.dW(a),null,A.ay())
s.aK()
s.saX(null)
return s},
aO(a,b){b.sdB(0,this.e)
b.sbN(A.dW(a))}}
A.lQ.prototype={
aH(a){var s=new A.K9(this.f,this.r,this.e,A.dW(a),null,A.ay())
s.aK()
s.saX(null)
return s},
aO(a,b){b.sem(this.e)
b.sa7r(this.f)
b.sa43(this.r)
b.sbN(A.dW(a))}}
A.kd.prototype={}
A.tL.prototype={
aH(a){var s=new A.JU(this.e,null,A.ay())
s.aK()
s.saX(null)
return s},
aO(a,b){b.syW(this.e)}}
A.v2.prototype={
o7(a){var s,r,q=a.e
q.toString
t.DU.a(q)
s=this.f
if(q.e!==s){q.e=s
r=a.c
if(r instanceof A.A)r.a9()}}}
A.tJ.prototype={
aH(a){var s=new A.JS(this.e,0,null,null,A.ay())
s.aK()
s.I(0,null)
return s},
aO(a,b){b.syW(this.e)}}
A.q4.prototype={
aH(a){return A.apm(A.op(this.f,this.e))},
aO(a,b){b.sIg(A.op(this.f,this.e))},
c3(){var s,r=this,q=r.e
if(q===1/0&&r.f===1/0)s="SizedBox.expand"
else s=q===0&&r.f===0?"SizedBox.shrink":"SizedBox"
q=r.a
return q==null?s:s+"-"+q.j(0)}}
A.fV.prototype={
aH(a){return A.apm(this.e)},
aO(a,b){b.sIg(this.e)}}
A.Gp.prototype={
aH(a){var s=new A.K0(this.e,this.f,null,A.ay())
s.aK()
s.saX(null)
return s},
aO(a,b){b.sa5h(0,this.e)
b.sa5e(0,this.f)}}
A.w0.prototype={
aH(a){var s=new A.K3(this.e,null,A.ay())
s.aK()
s.saX(null)
return s},
aO(a,b){b.su6(this.e)},
bW(a){return new A.Pr(this,B.a8)}}
A.Pr.prototype={}
A.xu.prototype={
aH(a){var s=A.dW(a)
s=new A.wG(this.e,s,this.r,this.w,A.ay(),0,null,null,A.ay())
s.aK()
s.I(0,null)
return s},
aO(a,b){var s
b.sem(this.e)
s=A.dW(a)
b.sbN(s)
s=this.r
if(b.b1!==s){b.b1=s
b.a9()}s=this.w
if(s!==b.b9){b.b9=s
b.av()
b.b3()}}}
A.n2.prototype={
o7(a){var s,r,q,p=this,o=a.e
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
if(q instanceof A.A)q.a9()}}}
A.Ju.prototype={
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
r=s}return A.n3(p.f,p.x,o,o,r,s,p.d,p.r)}}
A.uo.prototype={
gXy(){switch(this.e.a){case 0:return!0
case 1:var s=this.w
return s===B.aB||s===B.Fw}},
uQ(a){var s=this.x
s=this.gXy()?A.dW(a):null
return s},
aH(a){var s=this
return A.aA0(B.i,s.w,s.e,s.f,s.r,s.z,s.uQ(a),s.y)},
aO(a,b){var s=this,r=s.e
if(b.K!==r){b.K=r
b.a9()}r=s.f
if(b.ag!==r){b.ag=r
b.a9()}r=s.r
if(b.ac!==r){b.ac=r
b.a9()}r=s.w
if(b.aw!==r){b.aw=r
b.a9()}r=s.uQ(a)
if(b.b1!=r){b.b1=r
b.a9()}r=s.y
if(b.b9!==r){b.b9=r
b.a9()}if(B.i!==b.cI){b.cI=B.i
b.av()
b.b3()}}}
A.Ko.prototype={}
A.oz.prototype={}
A.oU.prototype={
o7(a){var s,r,q,p=a.e
p.toString
t.uc.a(p)
s=this.f
if(p.e!==s){p.e=s
r=!0}else r=!1
s=this.r
if(p.f!==s){p.f=s
r=!0}if(r){q=a.c
if(q instanceof A.A)q.a9()}}}
A.Fe.prototype={}
A.Ki.prototype={
aH(a){var s,r,q,p=this,o=null,n=p.e,m=p.r
if(m==null){m=a.a4(t.I)
m.toString
m=m.w}s=p.x
r=A.akK(a)
q=s===B.bo?"\u2026":o
s=new A.wC(A.aaH(q,r,p.z,p.as,n,p.f,m,p.ax,p.y,p.at),p.w,s,p.ch,0,o,o,A.ay())
s.aK()
s.I(0,o)
s.wr(n)
s.spG(p.ay)
return s},
aO(a,b){var s,r=this
b.scs(0,r.e)
b.sBf(0,r.f)
s=r.r
if(s==null){s=a.a4(t.I)
s.toString
s=s.w}b.sbN(s)
b.sNG(r.w)
b.sa5N(0,r.x)
b.sBg(r.y)
b.sAe(r.z)
b.sNP(r.as)
b.sBh(r.at)
b.sM7(r.ax)
s=A.akK(a)
b.sA9(0,s)
b.spG(r.ay)
b.sNf(r.ch)}}
A.a5R.prototype={
$1(a){return!0},
$S:45}
A.JG.prototype={
aH(a){var s=this,r=s.d
r=r==null?null:r.cT(0)
r=new A.JZ(r,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.CW,!1,null,!1,A.ay())
r.aK()
r.a_p()
return r},
aO(a,b){var s=this,r=s.d
b.sfs(0,r==null?null:r.cT(0))
b.aw=s.e
b.sbo(0,s.f)
b.sbU(0,s.r)
b.sN6(0,s.w)
b.sam(0,s.x)
b.sud(0,s.y)
b.sa1e(s.Q)
b.szz(s.as)
b.sem(s.at)
b.sa6z(0,s.ax)
b.sa0R(s.ay)
b.sa5c(!1)
b.sbN(null)
b.szW(s.CW)
b.szX(!1)
b.smk(s.z)},
oA(a){a.sfs(0,null)}}
A.Gq.prototype={
aH(a){var s=this,r=null,q=new A.K8(s.e,r,s.r,r,s.x,s.y,r,r,s.as,s.at,r,A.ay())
q.aK()
q.saX(r)
return q},
aO(a,b){var s=this
b.a8=s.e
b.bF=null
b.aU=s.r
b.ab=null
b.cr=s.x
b.d8=s.y
b.JK=b.fW=null
b.zn=s.as
b.A=s.at}}
A.Ir.prototype={
aH(a){var s=this,r=new A.K2(!0,s.e,s.f,s.r,s.w,B.aI,null,A.ay())
r.aK()
r.saX(null)
return r},
aO(a,b){var s,r=this
b.bF=r.e
b.aU=r.f
b.ab=r.r
s=r.w
if(!b.cr.l(0,s)){b.cr=s
b.av()}if(b.A!==B.aI){b.A=B.aI
b.av()}}}
A.ij.prototype={
aH(a){var s=new A.Kb(null,A.ay())
s.aK()
s.saX(null)
return s}}
A.hY.prototype={
aH(a){var s=new A.wB(this.e,this.f,null,A.ay())
s.aK()
s.saX(null)
return s},
aO(a,b){b.sKk(this.e)
b.szQ(this.f)}}
A.Bp.prototype={
aH(a){var s=new A.wx(!1,null,null,A.ay())
s.aK()
s.saX(null)
return s},
aO(a,b){b.sI7(!1)
b.szQ(null)}}
A.xa.prototype={
aH(a){var s=this,r=new A.wE(s.e,s.f,s.r,!1,s.F7(a),null,A.ay())
r.aK()
r.saX(null)
r.Hy(r.A)
return r},
F7(a){var s,r=this.e,q=r.p4
if(q!=null)return q
if(r.fx==null){if(r.go==null)r=r.p2!=null
else r=!0
s=r}else s=!0
if(!s)return null
return A.dW(a)},
aO(a,b){var s=this
b.sa1r(s.f)
b.sa2T(s.r)
b.sa2Q(!1)
b.sLu(s.e)
b.sbN(s.F7(a))}}
A.Im.prototype={
aH(a){var s=new A.K1(null,A.ay())
s.aK()
s.saX(null)
return s}}
A.BQ.prototype={
aH(a){var s=new A.JO(!0,null,A.ay())
s.aK()
s.saX(null)
return s},
aO(a,b){b.sa0D(!0)}}
A.ud.prototype={
aH(a){var s=new A.JX(this.e,null,A.ay())
s.aK()
s.saX(null)
return s},
aO(a,b){b.sa2R(this.e)}}
A.G4.prototype={
aH(a){var s=new A.K_(this.e,null,A.ay())
s.aK()
s.saX(null)
return s},
aO(a,b){b.szR(0,this.e)}}
A.kD.prototype={
L(a){return this.c}}
A.hK.prototype={
L(a){return this.c.$1(a)}}
A.tv.prototype={
aH(a){var s=new A.zu(this.e,B.aI,null,A.ay())
s.aK()
s.saX(null)
return s},
aO(a,b){t.oZ.a(b).sam(0,this.e)}}
A.zu.prototype={
sam(a,b){if(b.l(0,this.a8))return
this.a8=b
this.av()},
aI(a,b){var s,r,q,p,o,n,m=this
if(m.k3.N4(0,B.U)){s=a.gbJ(a)
r=m.k3
q=b.a
p=b.b
o=r.a
r=r.b
n=$.ar().bm()
n.sam(0,m.a8)
s.cm(new A.D(q,p,q+o,p+r),n)}s=m.B$
if(s!=null)a.f3(s,b)}}
A.ah3.prototype={
$0(){var s,r,q=this,p=q.b
if(p==null||t.c.b(q.c)){p=q.a.y1$
p===$&&A.b()
p=p.e
p.toString
s=q.c
s=s.gbA(s)
r=A.avZ()
p.c_(r,s)
p=r}return p},
$S:294}
A.ah4.prototype={
$1(a){var s=a==null?t.K.a(a):a
return this.a.js(s)},
$S:295}
A.dq.prototype={
jc(){return A.bD(!1,t.y)},
oy(a){return A.bD(!1,t.y)},
a2v(a){var s=a.a
s.toString
return this.oy(s)},
t5(){},
Jc(){},
Jb(){},
yZ(a){},
Ja(a){}}
A.y7.prototype={
a09(a){return this.b4$.push(a)},
a3v(){this.a2A($.aQ().a.f)},
a2A(a){var s,r,q
for(s=this.b4$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].yZ(a)},
tD(){var s=0,r=A.a2(t.H),q,p=this,o,n,m
var $async$tD=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:o=A.aB(p.b4$,!0,t.nR),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.a4(o[m].jc(),$async$tD)
case 6:if(b){s=1
break}case 4:++m
s=3
break
case 5:A.aa6()
case 1:return A.a0(q,r)}})
return A.a1($async$tD,r)},
tE(a){return this.a3I(a)},
a3I(a){var s=0,r=A.a2(t.H),q,p=this,o,n,m
var $async$tE=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:o=A.aB(p.b4$,!0,t.nR),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.a4(o[m].oy(a),$async$tE)
case 6:if(c){s=1
break}case 4:++m
s=3
break
case 5:case 1:return A.a0(q,r)}})
return A.a1($async$tE,r)},
qH(a){return this.W2(a)},
W2(a){var s=0,r=A.a2(t.H),q,p=this,o,n,m,l
var $async$qH=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:o=A.aB(p.b4$,!0,t.nR),n=o.length,m=J.aH(a),l=0
case 3:if(!(l<n)){s=5
break}s=6
return A.a4(o[l].a2v(new A.pP(A.bH(m.i(a,"location")),m.i(a,"state"))),$async$qH)
case 6:if(c){s=1
break}case 4:++l
s=3
break
case 5:case 1:return A.a0(q,r)}})
return A.a1($async$qH,r)},
VH(a){switch(a.a){case"popRoute":return this.tD()
case"pushRoute":return this.tE(A.bH(a.b))
case"pushRouteInformation":return this.qH(t.G.a(a.b))}return A.bD(null,t.z)},
V0(){this.zj()},
N7(a){A.cf(B.t,new A.abr(this,a))},
$iaq:1,
$idH:1}
A.ah2.prototype={
$1(a){var s,r,q=$.bT
q.toString
s=this.a
r=s.a
r.toString
q.LO(r)
s.a=null
this.b.eT$.eO(0)},
$S:85}
A.abr.prototype={
$0(){var s,r,q=this.a,p=q.cV$
q.cJ$=!0
s=q.y1$
s===$&&A.b()
s=s.e
s.toString
r=q.ai$
r.toString
q.cV$=new A.n8(this.b,s,"[root]",new A.kr(s,t.l9),t.go).a0w(r,t.jv.a(p))
if(p==null)$.bT.zj()},
$S:0}
A.n8.prototype={
bW(a){return new A.kZ(this,B.a8,this.$ti.h("kZ<1>"))},
aH(a){return this.d},
aO(a,b){},
a0w(a,b){var s,r={}
r.a=b
if(b==null){a.KV(new A.a5f(r,this,a))
s=r.a
s.toString
a.rM(s,new A.a5g(r))}else{b.ap=this
b.h3()}r=r.a
r.toString
return r},
c3(){return this.e}}
A.a5f.prototype={
$0(){var s=this.b,r=A.aA1(s,s.$ti.c)
this.a.a=r
r.r=this.c},
$S:0}
A.a5g.prototype={
$0(){var s=this.a.a
s.toString
s.Dc(null,null)
s.r2()},
$S:0}
A.kZ.prototype={
aW(a){var s=this.af
if(s!=null)a.$1(s)},
jq(a){this.af=null
this.lc(a)},
fw(a,b){this.Dc(a,b)
this.r2()},
bi(a,b){this.ne(0,b)
this.r2()},
hT(){var s=this,r=s.ap
if(r!=null){s.ap=null
s.ne(0,s.$ti.h("n8<1>").a(r))
s.r2()}s.Db()},
r2(){var s,r,q,p,o,n,m,l=this
try{o=l.af
n=l.f
n.toString
l.af=l.dW(o,l.$ti.h("n8<1>").a(n).c,B.mZ)}catch(m){s=A.af(m)
r=A.au(m)
o=A.bq("attaching to the render tree")
q=new A.bM(s,r,"widgets library",o,null,!1)
A.eb(q)
p=A.aki(q)
l.af=l.dW(null,p,B.mZ)}},
gaa(){return this.$ti.h("aJ<1>").a(A.bG.prototype.gaa.call(this))},
jv(a,b){var s=this.$ti
s.h("aJ<1>").a(A.bG.prototype.gaa.call(this)).saX(s.c.a(a))},
jA(a,b,c){},
jJ(a,b){this.$ti.h("aJ<1>").a(A.bG.prototype.gaa.call(this)).saX(null)}}
A.Ma.prototype={$iaq:1}
A.Az.prototype={
eY(){this.NU()
$.eq=this
var s=$.aQ()
s.Q=this.gVO()
s.as=$.a9},
Br(){this.NX()
this.wv()}}
A.AA.prototype={
eY(){this.QZ()
$.bT=this},
iz(){this.NV()}}
A.AB.prototype={
eY(){var s,r,q,p,o=this
o.R0()
$.hn=o
o.ag$!==$&&A.eG()
o.ag$=B.Es
s=new A.wL(A.b5(t.hp),$.bC())
B.iH.n1(s.gXo())
o.ac$=s
s=t.F3
r=new A.a07(A.z(s,t.lT),A.b5(t.vQ),A.a([],t.AV))
o.fY$!==$&&A.eG()
o.fY$=r
q=$.ajE()
p=A.a([],t.DG)
o.K$!==$&&A.eG()
s=o.K$=new A.Gh(r,q,p,A.b5(s))
p=$.aQ()
p.at=s.ga3r()
p.ax=$.a9
B.D_.v6(s.ga3K())
s=$.aoD
if(s==null)s=$.aoD=A.a([],t.e8)
s.push(o.gS_())
B.D1.v6(new A.ah4(o))
B.D0.v6(o.gVD())
B.c3.n1(o.gVM())
$.aty()
o.a6c()},
iz(){this.R1()}}
A.AC.prototype={
eY(){this.R2()
$.eY=this
var s=t.K
this.fX$=new A.a0Y(A.z(s,t.fx),A.z(s,t.lM),A.z(s,t.s8))},
p_(){this.Q_()
var s=this.fX$
s===$&&A.b()
s.a_(0)},
js(a){return this.a3Q(a)},
a3Q(a){var s=0,r=A.a2(t.H),q,p=this
var $async$js=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:s=3
return A.a4(p.Q0(a),$async$js)
case 3:switch(A.bH(J.aR(t.a.a(a),"type"))){case"fontsChange":p.zq$.aC()
break}s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$js,r)}}
A.AD.prototype={
eY(){this.R5()
$.a73=this
this.zm$=$.aQ().a.a}}
A.AE.prototype={
eY(){var s,r,q,p,o=this
o.R6()
$.l_=o
s=t.By
o.y1$=new A.Jn(o.ga2K(),o.gWh(),o.gWl(),o.gWj(),A.a([],s),A.a([],s),A.a([],s),A.b5(t.d))
s=$.aQ()
s.f=o.ga3x()
r=s.r=$.a9
s.fy=o.ga3Z()
s.go=r
s.k2=o.ga3D()
s.k3=r
s.p1=o.gWf()
s.p2=r
s.p3=o.gWd()
s.p4=r
r=new A.wH(B.U,o.J3(),$.cu(),null,A.ay())
r.aK()
r.saX(null)
q=o.y1$
q===$&&A.b()
q.sa6Q(r)
r=o.y1$.e
r.Q=r
q=t.W
q.a(A.M.prototype.gbx.call(r)).r.push(r)
p=r.HL()
r.ch.sb_(0,p)
q.a(A.M.prototype.gbx.call(r)).z.push(r)
o.Nx(s.a.c)
o.cx$.push(o.gVK())
s=o.xr$
if(s!=null)s.m()
s=t.S
r=$.bC()
o.xr$=new A.Is(new A.a3_(B.lS,A.z(s,t.Df)),A.z(s,t.eg),r)
o.cy$.push(o.gWy())},
iz(){this.R3()},
z9(a,b,c){this.xr$.a7l(b,new A.ah3(this,c,b))
this.Ok(0,b,c)},
iH(){var s=0,r=A.a2(t.H),q=[],p=this,o
var $async$iH=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:s=2
return A.a4(p.NW(),$async$iH)
case 2:o=$.ans
if((o==null?null:o.a)==null)try{o=p.y1$
o===$&&A.b()
o.e.f4()}finally{}p.uY()
s=3
return A.a4(p.gJB(),$async$iH)
case 3:return A.a0(null,r)}})
return A.a1($async$iH,r)}}
A.AF.prototype={
iz(){this.R9()},
zG(){var s,r,q
this.Pw()
for(s=this.b4$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].t5()},
zM(){var s,r,q
this.Py()
for(s=this.b4$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].Jc()},
zI(){var s,r,q
this.Px()
for(s=this.b4$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].Jb()},
tB(a){var s,r,q
this.PN(a)
for(s=this.b4$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].Ja(a)},
p_(){var s,r
this.R4()
for(s=this.b4$.length,r=0;r<s;++r);},
zf(){var s,r,q=this,p={}
p.a=null
if(q.bw$){s=new A.ah2(p,q)
p.a=s
$.bT.a0k(s)}try{r=q.cV$
if(r!=null)q.ai$.a0J(r)
q.Pv()
q.ai$.a3_()}finally{}r=q.bw$=!1
p=p.a
if(p!=null)r=!(q.b8$||q.br$===0)
if(r){q.bw$=!0
r=$.bT
r.toString
p.toString
r.LO(p)}},
iH(){var s=this.cV$
if(s!=null)this.ai$.a6h(s,$.ans)
return this.Ra()}}
A.Ec.prototype={
aH(a){var s=new A.JV(this.e,this.f,A.amh(a,null),null,A.ay())
s.aK()
s.saX(null)
return s},
aO(a,b){b.sa2f(this.e)
b.syF(A.amh(a,null))
b.sbA(0,this.f)}}
A.oD.prototype={
gY2(){var s,r=this.r
if(r==null||r.gdB(r)==null)return this.e
s=r.gdB(r)
r=this.e
if(r==null)return s
s.toString
return r.D(0,s)},
L(a){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){s=o.x
if(s!=null)s=!(s.a>=s.b&&s.c>=s.d)
else s=!0}else s=!1
if(s)m=A.ayj(new A.fV(B.mq,n,n),0,0)
else{s=o.d
if(s!=null)m=new A.lQ(s,n,n,m,n)}r=o.gY2()
if(r!=null)m=new A.i8(r,m,n)
s=o.f
if(s!=null)m=new A.tv(s,m,n)
s=o.as
if(s!==B.i){q=A.dW(a)
p=o.r
p.toString
m=A.anG(m,s,new A.No(q==null?B.u:q,p))}s=o.r
if(s!=null)m=A.anV(m,s,B.hF)
s=o.x
if(s!=null)m=new A.fV(s,m,n)
s=o.y
if(s!=null)m=new A.i8(s,m,n)
m.toString
return m}}
A.No.prototype={
BL(a){return this.c.uN(new A.D(0,0,0+a.a,0+a.b),this.b)},
Cn(a){return!a.c.l(0,this.c)||a.b!==this.b}}
A.oI.prototype={
c4(a){return!J.f(this.w,a.w)||!J.f(this.x,a.x)}}
A.Pl.prototype={
L(a){throw A.c(A.Fs("A DefaultSelectionStyle constructed with DefaultSelectionStyle.fallback cannot be incorporated into the widget tree, it is meant only to provide a fallback value returned by DefaultSelectionStyle.of() when no enclosing default selection style is present in a BuildContext."))}}
A.Ej.prototype={
Uv(){var s=$.atb()
return s},
L(a){var s=this.c,r=this.Uv()
if(r!=null)s=A.al8(s,"<Web Disabling Text Editing Shortcuts>",r)
return A.al8(s,"<Default Text Editing Shortcuts>",A.awK())}}
A.Et.prototype={
gau(a){var s=this.a
if(s==null)return null
s=s.c
s.toString
return s}}
A.oM.prototype={
an(){return new A.yu(A.JB(null),A.JB(null),B.m)},
a3g(a,b,c){return this.d.$3(a,b,c)},
a6N(a,b,c){return this.e.$3(a,b,c)}}
A.yu.prototype={
aA(){var s,r=this
r.aP()
s=r.a.c
r.d=s.gb2(s)
r.a.c.cR(r.gvH())
r.EJ()},
DN(a){var s,r=this,q=r.d
q===$&&A.b()
s=r.Sv(a,q)
r.d=s
if(q!==s)r.EJ()},
aY(a){var s,r,q=this
q.bq(a)
s=a.c
if(s!==q.a.c){r=q.gvH()
s.c2(r)
q.a.c.cR(r)
r=q.a.c
q.DN(r.gb2(r))}},
Sv(a,b){switch(a.a){case 0:case 3:return a
case 1:switch(b.a){case 0:case 3:case 1:return a
case 2:return b}break
case 2:switch(b.a){case 0:case 3:case 2:return a
case 1:return b}break}},
EJ(){var s=this,r=s.d
r===$&&A.b()
switch(r.a){case 0:case 1:s.e.saM(0,s.a.c)
s.f.saM(0,B.cg)
break
case 2:case 3:s.e.saM(0,B.cY)
s.f.saM(0,new A.f0(s.a.c,new A.bl(A.a([],t.A),t.Q),0))
break}},
m(){this.a.c.c2(this.gvH())
this.aR()},
L(a){var s=this.a
return s.a3g(a,this.e,s.a6N(a,this.f,s.f))}}
A.j8.prototype={
F(){return"KeyEventResult."+this.b}}
A.MB.prototype={}
A.a_a.prototype={
ao(a){var s,r=this.a
if(r.ax===this){if(!r.gjt()){s=r.w
s=s!=null&&s.w===r}else s=!0
if(s)r.Mk(B.Co)
s=r.w
if(s!=null){if(s.f===r)s.f=null
s.r.u(0,r)}s=r.Q
if(s!=null)s.YQ(0,r)
r.ax=null}},
Ba(a){var s,r=this.a
if(r.ax===this){s=r.e
s.toString
a=A.axK(s,!0);(a==null?r.e.r.f.e:a).xw(r)}},
LP(){return this.Ba(null)}}
A.y1.prototype={
F(){return"UnfocusDisposition."+this.b}}
A.cM.prototype={
geh(){var s,r,q
if(this.a)return!0
for(s=this.gfO(),r=s.length,q=0;q<r;++q)s[q].toString
return!1},
seh(a){var s,r=this
if(a!==r.a){r.a=a
s=r.w
if(s!=null){s.qS()
s.r.D(0,r)}}},
gcp(){var s,r,q,p
if(!this.b)return!1
s=this.gdN()
if(s!=null&&!s.gcp())return!1
for(r=this.gfO(),q=r.length,p=0;p<q;++p)r[p].toString
return!0},
scp(a){var s,r=this
if(a!==r.b){r.b=a
if(r.gkJ()&&!a)r.Mk(B.Co)
s=r.w
if(s!=null){s.qS()
s.r.D(0,r)}}},
sm_(a){return},
sm0(a){},
gos(){var s,r,q,p,o=this.y
if(o==null){s=A.a([],t.i4)
for(o=this.as,r=o.length,q=0;q<o.length;o.length===r||(0,A.P)(o),++q){p=o[q]
B.c.I(s,p.gos())
s.push(p)}this.y=s
o=s}return o},
gpP(){var s=this.gos()
return new A.aK(s,new A.a_b(),A.am(s).h("aK<1>"))},
gfO(){var s,r,q=this.x
if(q==null){s=A.a([],t.i4)
r=this.Q
for(;r!=null;){s.push(r)
r=r.Q}this.x=s
q=s}return q},
gkJ(){if(!this.gjt()){var s=this.w
if(s==null)s=null
else{s=s.f
s=s==null?null:B.c.C(s.gfO(),this)}s=s===!0}else s=!0
return s},
gjt(){var s=this.w
return(s==null?null:s.f)===this},
gkO(){return this.gdN()},
gdN(){var s,r,q,p
for(s=this.gfO(),r=s.length,q=0;q<r;++q){p=s[q]
if(p instanceof A.ml)return p}return null},
gaS(a){var s,r=this.e.gaa(),q=r.bB(0,null),p=r.gjU(),o=A.cA(q,new A.u(p.a,p.b))
p=r.bB(0,null)
q=r.gjU()
s=A.cA(p,new A.u(q.c,q.d))
return new A.D(o.a,o.b,s.a,s.b)},
Mk(a){var s,r,q=this
if(!q.gkJ()){s=q.w
s=s==null||s.w!==q}else s=!1
if(s)return
r=q.gdN()
if(r==null)return
switch(a.a){case 0:if(r.gcp())B.c.a_(r.dy)
for(;!r.gcp();){r=r.gdN()
if(r==null){s=q.w
r=s==null?null:s.e}}r.iX(!1)
break
case 1:if(r.gcp())B.c.u(r.dy,q)
for(;!r.gcp();){s=r.gdN()
if(s!=null)B.c.u(s.dy,r)
r=r.gdN()
if(r==null){s=q.w
r=s==null?null:s.e}}r.iX(!0)
break}},
FO(a){var s=this,r=s.w
if(r!=null){if(r.f===s)r.w=null
else{r.w=s
r.qS()}return}a.lJ()
a.xh()
if(a!==s)s.xh()},
Go(a,b,c){var s,r,q
if(c){s=b.gdN()
if(s!=null)B.c.u(s.dy,b)}b.Q=null
B.c.u(this.as,b)
for(s=this.gfO(),r=s.length,q=0;q<r;++q)s[q].y=null
this.y=null},
YQ(a,b){return this.Go(a,b,!0)},
Ug(a){var s,r,q,p
this.w=a
for(s=this.gos(),r=s.length,q=0;q<r;++q){p=s[q]
p.w=a
p.x=null}},
xw(a){var s,r,q,p,o,n=this
if(a.Q===n)return
s=a.gdN()
r=a.gkJ()
q=a.Q
if(q!=null)q.Go(0,a,s!=n.gkO())
n.as.push(a)
a.Q=n
a.x=null
a.Ug(n.w)
for(q=a.gfO(),p=q.length,o=0;o<p;++o)q[o].y=null
if(r){q=n.w
if(q!=null){q=q.f
if(q!=null)q.lJ()}}if(s!=null&&a.e!=null&&a.gdN()!==s){q=a.e
q.toString
q=A.aog(q)
if(q!=null)q.yC(a,s)}if(a.ay){a.iX(!0)
a.ay=!1}},
m(){var s=this.ax
if(s!=null)s.ao(0)
this.dY()},
xh(){var s=this
if(s.Q==null)return
if(s.gjt())s.lJ()
s.aC()},
uz(){this.iX(!0)},
iX(a){var s,r=this
if(!r.gcp())return
if(r.Q==null){r.ay=!0
return}r.lJ()
if(r.gjt()){s=r.w.w
s=s==null||s===r}else s=!1
if(s)return
r.FO(r)},
lJ(){var s,r,q,p,o,n
for(s=B.c.ga5(this.gfO()),r=new A.qC(s,t.oj),q=t.j5,p=this;r.q();p=o){o=q.a(s.gG(s))
n=o.dy
B.c.u(n,p)
n.push(p)}},
c3(){var s,r,q,p=this
p.gkJ()
s=p.gkJ()&&!p.gjt()?"[IN FOCUS PATH]":""
r=s+(p.gjt()?"[PRIMARY FOCUS]":"")
s=A.bP(p)
q=r.length!==0?"("+r+")":""
return"<optimized out>#"+s+q},
$iag:1}
A.a_b.prototype={
$1(a){return!a.geh()&&a.gcp()},
$S:14}
A.ml.prototype={
gkO(){return this},
gpP(){if(!this.gcp())return B.DC
return A.cM.prototype.gpP.call(this)},
n0(a){if(a.Q==null)this.xw(a)
if(this.gkJ())a.iX(!0)
else a.lJ()},
iX(a){var s,r,q=this,p=q.dy
while(!0){if((p.length!==0?B.c.gS(p):null)!=null)s=!(p.length!==0?B.c.gS(p):null).gcp()
else s=!1
if(!s)break
p.pop()}r=p.length!==0?B.c.gS(p):null
if(!a||r==null){if(q.gcp()){q.lJ()
q.FO(q)}return}r.iX(!0)}}
A.j3.prototype={
F(){return"FocusHighlightMode."+this.b}}
A.Fw.prototype={
F(){return"FocusHighlightStrategy."+this.b}}
A.uu.prototype={
HK(){var s,r,q=this
switch(0){case 0:s=q.c
if(s==null)return
r=s?B.hL:B.ej
break}s=q.b
if(s==null)s=A.Fx()
q.b=r
if((r==null?A.Fx():r)!==s)q.XD()},
XD(){var s,r,q,p,o,n,m,l,k,j=this,i=j.d,h=i.a
if(h.a===0)return
p=A.aB(i,!0,t.tP)
for(i=p.length,o=0;o<i;++o){s=p[o]
try{if(h.R(0,s)){n=j.b
if(n==null)n=A.Fx()
s.$1(n)}}catch(m){r=A.af(m)
q=A.au(m)
l=j instanceof A.bY?A.cW(j):null
n=A.bq("while dispatching notifications for "+A.aD(l==null?A.aX(j):l).j(0))
k=$.fR()
if(k!=null)k.$1(new A.bM(r,q,"widgets library",n,null,!1))}}},
Uf(a){var s,r,q=this
switch(a.gcj(a).a){case 0:case 2:case 3:q.c=!0
s=B.hL
break
case 1:case 4:case 5:q.c=!1
s=B.ej
break
default:s=null}r=q.b
if(s!==(r==null?A.Fx():r))q.HK()},
VC(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.c=!1
i.HK()
s=i.f
if(s==null)return!1
s=A.a([s],t.i4)
B.c.I(s,i.f.gfO())
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
switch(A.aEr(k).a){case 1:break c$1
case 0:r=!0
break
case 2:r=!1
break
default:r=!1}break}s.length===q||(0,A.P)(s);++m}return r},
qS(){if(this.y)return
this.y=!0
A.dU(this.gSc())},
Sd(){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.y=!1
s=h.f
for(r=h.x,q=r.length,p=h.e,o=0;o<r.length;r.length===q||(0,A.P)(r),++o){n=r[o]
m=n.a
if(m.Q!=null||m===p)if(m.w===h){l=m.dy
m=(l.length!==0?B.c.gS(l):null)==null&&B.c.C(n.b.gfO(),m)
k=m}else k=!1
else k=!1
if(k)n.b.iX(!0)}B.c.a_(r)
r=h.f
if(r==null&&h.w==null)h.w=p
q=h.w
if(q!=null&&q!==r){if(s==null)j=null
else{r=s.gfO()
r=A.v5(r,A.am(r).c)
j=r}if(j==null)j=A.b5(t.lc)
r=h.w.gfO()
i=A.v5(r,A.am(r).c)
r=h.r
r.I(0,i.kv(j))
r.I(0,j.kv(i))
r=h.f=h.w
h.w=null}if(s!=r){if(s!=null)h.r.D(0,s)
r=h.f
if(r!=null)h.r.D(0,r)}for(r=h.r,q=A.jK(r,r.r),p=A.n(q).c;q.q();){m=q.d;(m==null?p.a(m):m).xh()}r.a_(0)
if(s!=h.f)h.aC()},
$iag:1}
A.O2.prototype={}
A.O3.prototype={}
A.O4.prototype={}
A.O5.prototype={}
A.mk.prototype={
gLa(){var s=this.w,r=this.e
s=r==null?null:r.r
return s},
gAE(){var s=this.x
if(s==null){s=this.e
s=s==null?null:s.f}return s},
gcp(){var s=this.y
if(s==null){s=this.e
s=s==null?null:s.gcp()}return s!==!1},
geh(){var s=this.z
if(s==null){s=this.e
s=s==null?null:s.geh()}return s===!0},
gm_(){var s=this.Q
if(s==null)s=this.e!=null||null
return s!==!1},
gm0(){var s=this.as
if(s==null)s=this.e!=null||null
return s!==!1},
glZ(){var s=this.ax
if(s==null){s=this.e
s=s==null?null:s.at}return s},
an(){return A.aBy()}}
A.qS.prototype={
gc1(a){var s=this.a.e
if(s==null){s=this.d
s.toString}return s},
aA(){this.aP()
this.Fu()},
Fu(){var s,r,q,p=this
if(p.a.e==null)if(p.d==null)p.d=p.Es()
s=p.gc1(p)
p.a.gm_()
s.sm_(!0)
s=p.gc1(p)
p.a.gm0()
s.sm0(!0)
p.a.geh()
p.gc1(p).seh(p.a.geh())
if(p.a.y!=null){s=p.gc1(p)
r=p.a.y
r.toString
s.scp(r)}p.f=p.gc1(p).gcp()
p.gc1(p)
p.r=!0
p.gc1(p)
p.w=!0
p.e=p.gc1(p).gjt()
s=p.gc1(p)
r=p.c
r.toString
p.a.gLa()
q=p.a.gAE()
s.e=r
s.f=q==null?s.f:q
r=s.r
s.r=r
p.y=s.ax=new A.a_a(s)
p.gc1(p).X(0,p.gwQ())},
Es(){var s=this,r=s.a.glZ(),q=s.a.gcp()
s.a.gm_()
s.a.gm0()
return A.akp(q,r,!0,!0,null,null,s.a.geh())},
m(){var s,r=this
r.gc1(r).H(0,r.gwQ())
r.y.ao(0)
s=r.d
if(s!=null)s.m()
r.aR()},
b7(){this.cF()
var s=this.y
if(s!=null)s.LP()
this.Fc()},
Fc(){var s,r,q,p=this
if(!p.x&&p.a.f){s=p.c
s.toString
s=A.axJ(s)
r=p.gc1(p)
if(r.Q==null)s.xw(r)
q=s.w
if(q!=null)q.x.push(new A.MB(s,r))
s=s.w
if(s!=null)s.qS()
p.x=!0}},
dw(){this.ng()
var s=this.y
if(s!=null)s.LP()
this.x=!1},
aY(a){var s,r,q=this
q.bq(a)
s=a.e
r=q.a
if(s==r.e){if(!J.f(r.gAE(),q.gc1(q).f))q.gc1(q).f=q.a.gAE()
q.a.gLa()
q.gc1(q)
q.a.geh()
q.gc1(q).seh(q.a.geh())
if(q.a.y!=null){s=q.gc1(q)
r=q.a.y
r.toString
s.scp(r)}s=q.gc1(q)
q.a.gm_()
s.sm_(!0)
s=q.gc1(q)
q.a.gm0()
s.sm0(!0)}else{q.y.ao(0)
if(s!=null)s.H(0,q.gwQ())
q.Fu()}if(a.f!==q.a.f)q.Fc()},
Vu(){var s,r=this,q=r.gc1(r).gjt(),p=r.gc1(r).gcp()
r.gc1(r)
r.gc1(r)
s=r.a.r
if(s!=null)s.$1(r.gc1(r).gkJ())
s=r.e
s===$&&A.b()
if(s!==q)r.az(new A.ad0(r,q))
s=r.f
s===$&&A.b()
if(s!==p)r.az(new A.ad1(r,p))
s=r.r
s===$&&A.b()
if(!s)r.az(new A.ad2(r,!0))
s=r.w
s===$&&A.b()
if(!s)r.az(new A.ad3(r,!0))},
L(a){var s,r,q=this,p=null,o=q.y
o.toString
o.Ba(q.a.c)
o=q.a
s=o.d
if(o.at){o=q.f
o===$&&A.b()
r=q.e
r===$&&A.b()
s=A.dO(p,s,!1,p,!1,o,r,p,p,p,p,p,p,p,p,p,p,p,p,p,p)}return A.aql(s,q.gc1(q))}}
A.ad0.prototype={
$0(){this.a.e=this.b},
$S:0}
A.ad1.prototype={
$0(){this.a.f=this.b},
$S:0}
A.ad2.prototype={
$0(){this.a.r=this.b},
$S:0}
A.ad3.prototype={
$0(){this.a.w=this.b},
$S:0}
A.Fy.prototype={
an(){return new A.O6(B.m)}}
A.O6.prototype={
Es(){var s=this.a.glZ()
return A.akq(this.a.gcp(),s,this.a.geh())},
L(a){var s=this,r=null,q=s.y
q.toString
q.Ba(s.a.c)
q=s.gc1(s)
return A.dO(r,A.aql(s.a.d,q),!1,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)}}
A.yF.prototype={}
A.ahN.prototype={
$1(a){var s=this.a
if(--s.a===0){s.b=a
return!1}return!0},
$S:41}
A.qT.prototype={}
A.nF.prototype={
F(){return"TraversalDirection."+this.b}}
A.Fz.prototype={
EQ(a,b,c){var s,r=a.gkO(),q=r.dy,p=q.length!==0?B.c.gS(q):null
q=p==null&&r.gos().length!==0
if(q){s=this.H4(r,a)
if(s.length===0)p=null
else p=b?B.c.gS(s):B.c.gJ(s)}return p==null?a:p},
U5(a,b){return this.EQ(a,!1,b)},
a4B(a){},
yC(a,b){},
UC(a){var s
if(a==null)s=null
else{s=a.jQ(t.AB)
if(s==null)s=null
else{s=s.f
s.toString}}return t.fc.a(s)},
H4(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=this.UC(a.e),c=d==null,b=c?e:d.f
if(b==null)b=new A.wv(A.z(t.j5,t.uJ))
s=A.z(t.k_,t.hF)
for(r=a.gos(),q=r.length,p=t.fc,o=t.AB,n=t.i4,m=0;m<r.length;r.length===q||(0,A.P)(r),++m){l=r[m]
k=l.e
if(k==null)k=e
else{k=k.y
j=k==null?e:k.i(0,A.aD(o))
if(j==null)k=e
else{k=j.f
k.toString}}p.a(k)
i=k==null?e:k.r
if(J.f(l,i)){k=i.e
k.toString
h=A.arf(k,2)
if(h==null)k=e
else{k=h.y
j=k==null?e:k.i(0,A.aD(o))
if(j==null)k=e
else{k=j.f
k.toString}}p.a(k)
g=k==null?e:k.r
if(s.i(0,g)==null)s.k(0,g,A.aqm(k,b,A.a([],n)))
s.i(0,g).c.push(i)
continue}if(l.gcp()&&!l.geh()){if(s.i(0,i)==null)s.k(0,i,A.aqm(k,b,A.a([],n)))
s.i(0,i).c.push(l)}}for(r=A.jb(s,s.r);r.q();){q=r.d
p=s.i(0,q).b.NH(s.i(0,q).c,a0)
p=A.a(p.slice(0),A.am(p))
B.c.a_(s.i(0,q).c)
B.c.I(s.i(0,q).c,p)}f=A.a([],n)
if(s.a!==0)r=s.R(0,c?e:d.r)
else r=!1
if(r){r=s.i(0,c?e:d.r)
r.toString
new A.a_d(s,f).$1(r)}if(!!f.fixed$length)A.L(A.O("removeWhere"))
B.c.nN(f,new A.a_c(),!0)
return f},
FU(a,b){var s,r,q,p,o,n,m=this,l=a.gkO()
l.toString
m.ld(l)
m.d8$.u(0,l)
s=l.dy
r=s.length!==0?B.c.gS(s):null
if(r==null){q=b?m.U5(a,!1):m.EQ(a,!0,!1)
A.lC(q,b?B.cK:B.cL)
return!0}p=m.H4(l,a)
if(p.length===0)return!1
if(b&&r===B.c.gS(p)){A.lC(B.c.gJ(p),B.cK)
return!0}if(!b&&r===B.c.gJ(p)){A.lC(B.c.gS(p),B.cL)
return!0}for(l=J.av(b?p:new A.cC(p,A.am(p).h("cC<1>"))),o=null;l.q();o=n){n=l.gG(l)
if(o==r){l=b?B.cK:B.cL
n.uz()
s=n.e
s.toString
A.apC(s,1,l)
return!0}}return!1}}
A.a_d.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=a.c,r=s.length,q=this.b,p=this.a,o=0;o<s.length;s.length===r||(0,A.P)(s),++o){n=s[o]
if(p.R(0,n)){m=p.i(0,n)
m.toString
this.$1(m)}else q.push(n)}},
$S:298}
A.a_c.prototype={
$1(a){return!a.gcp()||a.geh()},
$S:14}
A.qM.prototype={}
A.Nz.prototype={}
A.X1.prototype={
a31(a,b){var s=this
switch(b.a){case 0:return s.rb(a,!1,!0)
case 2:return s.rb(a,!0,!0)
case 3:return s.rb(a,!1,!1)
case 1:return s.rb(a,!0,!1)}},
rb(a,b,c){var s=a.gkO().gpP().dE(0)
A.oc(s,new A.X9(c,b),t.lc)
if(s.length!==0)return B.c.gJ(s)
return null},
ZR(a,b,c){var s,r=c.gpP().dE(0)
A.oc(r,new A.X3(),t.lc)
switch(a.a){case 3:s=new A.aK(r,new A.X4(b),A.am(r).h("aK<1>"))
break
case 1:s=new A.aK(r,new A.X5(b),A.am(r).h("aK<1>"))
break
case 0:case 2:s=null
break
default:s=null}return s},
ZS(a,b,c){var s=c.dE(0)
A.oc(s,new A.X6(),t.lc)
switch(a.a){case 0:return new A.aK(s,new A.X7(b),A.am(s).h("aK<1>"))
case 2:return new A.aK(s,new A.X8(b),A.am(s).h("aK<1>"))
case 3:case 1:break}return null},
Yw(a,b,c){var s,r,q=this,p=q.d8$,o=p.i(0,b),n=o!=null
if(n){s=o.a
s=s.length!==0&&B.c.gJ(s).a!==a}else s=!1
if(s){s=o.a
if(B.c.gS(s).b.Q==null){q.ld(b)
p.u(0,b)
return!1}r=new A.X2(q,o,b)
switch(a.a){case 2:case 0:switch(B.c.gJ(s).a.a){case 3:case 1:q.ld(b)
p.u(0,b)
break
case 0:case 2:if(r.$1(a))return!0
break}break
case 3:case 1:switch(B.c.gJ(s).a.a){case 3:case 1:if(r.$1(a))return!0
break
case 0:case 2:q.ld(b)
p.u(0,b)
break}break}}if(n&&o.a.length===0){q.ld(b)
p.u(0,b)}return!1},
a4k(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=a.gkO(),f=g.dy,e=f.length!==0?B.c.gS(f):h
if(e==null){s=i.a31(a,b)
if(s==null)s=a
switch(b.a){case 0:case 3:A.lC(s,B.cL)
break
case 1:case 2:A.lC(s,B.cK)
break}return!0}if(i.Yw(b,g,e))return!0
f=e.e
f.toString
r=A.io(f)
f=b.a
switch(f){case 2:case 0:q=i.ZS(b,e.gaS(e),g.gpP())
if(r!=null&&!r.d.gIp()){q.toString
p=new A.aK(q,new A.Xa(r),q.$ti.h("aK<o.E>"))
if(!p.gO(p))q=p}if(!q.ga5(q).q()){o=h
break}n=A.aB(q,!0,A.n(q).h("o.E"))
if(b===B.a_2){m=A.am(n).h("cC<1>")
n=A.aB(new A.cC(n,m),!0,m.h("bn.E"))}l=new A.aK(n,new A.Xb(new A.D(e.gaS(e).a,-1/0,e.gaS(e).c,1/0)),A.am(n).h("aK<1>"))
if(!l.gO(l)){o=l.gJ(l)
break}A.oc(n,new A.Xc(e),t.lc)
o=B.c.gJ(n)
break
case 1:case 3:q=i.ZR(b,e.gaS(e),g)
if(r!=null&&!r.d.gIp()){q.toString
p=new A.aK(q,new A.Xd(r),q.$ti.h("aK<o.E>"))
if(!p.gO(p))q=p}if(!q.ga5(q).q()){o=h
break}n=A.aB(q,!0,A.n(q).h("o.E"))
if(b===B.a_3){m=A.am(n).h("cC<1>")
n=A.aB(new A.cC(n,m),!0,m.h("bn.E"))}l=new A.aK(n,new A.Xe(new A.D(-1/0,e.gaS(e).b,1/0,e.gaS(e).d)),A.am(n).h("aK<1>"))
if(!l.gO(l)){o=l.gJ(l)
break}A.oc(n,new A.Xf(e),t.lc)
o=B.c.gJ(n)
break
default:o=h}if(o!=null){m=i.d8$
k=m.i(0,g)
j=new A.qM(b,e)
if(k!=null)k.a.push(j)
else m.k(0,g,new A.Nz(A.a([j],t.gE)))
switch(f){case 0:case 3:A.lC(o,B.cL)
break
case 2:case 1:A.lC(o,B.cK)
break}return!0}return!1}}
A.aft.prototype={
$1(a){return a.b===this.a},
$S:299}
A.X9.prototype={
$2(a,b){if(this.a)if(this.b)return B.d.aG(a.gaS(a).b,b.gaS(b).b)
else return B.d.aG(b.gaS(b).d,a.gaS(a).d)
else if(this.b)return B.d.aG(a.gaS(a).a,b.gaS(b).a)
else return B.d.aG(b.gaS(b).c,a.gaS(a).c)},
$S:33}
A.X3.prototype={
$2(a,b){return B.d.aG(a.gaS(a).gaL().a,b.gaS(b).gaL().a)},
$S:33}
A.X4.prototype={
$1(a){var s=this.a
return!a.gaS(a).l(0,s)&&a.gaS(a).gaL().a<=s.a},
$S:14}
A.X5.prototype={
$1(a){var s=this.a
return!a.gaS(a).l(0,s)&&a.gaS(a).gaL().a>=s.c},
$S:14}
A.X6.prototype={
$2(a,b){return B.d.aG(a.gaS(a).gaL().b,b.gaS(b).gaL().b)},
$S:33}
A.X7.prototype={
$1(a){var s=this.a
return!a.gaS(a).l(0,s)&&a.gaS(a).gaL().b<=s.b},
$S:14}
A.X8.prototype={
$1(a){var s=this.a
return!a.gaS(a).l(0,s)&&a.gaS(a).gaL().b>=s.d},
$S:14}
A.X2.prototype={
$1(a){var s,r,q=this.b.a.pop().b,p=q.e
p.toString
p=A.io(p)
s=$.al.ai$.f.f.e
s.toString
if(p!=A.io(s)){p=this.a
s=this.c
p.ld(s)
p.d8$.u(0,s)
return!1}switch(a.a){case 0:case 3:r=B.cL
break
case 1:case 2:r=B.cK
break
default:r=null}A.lC(q,r)
return!0},
$S:301}
A.Xa.prototype={
$1(a){var s=a.e
s.toString
return A.io(s)===this.a},
$S:14}
A.Xb.prototype={
$1(a){var s=a.gaS(a).ft(this.a)
return!s.gO(s)},
$S:14}
A.Xc.prototype={
$2(a,b){var s=this.a
return B.d.aG(Math.abs(a.gaS(a).gaL().a-s.gaS(s).gaL().a),Math.abs(b.gaS(b).gaL().a-s.gaS(s).gaL().a))},
$S:33}
A.Xd.prototype={
$1(a){var s=a.e
s.toString
return A.io(s)===this.a},
$S:14}
A.Xe.prototype={
$1(a){var s=a.gaS(a).ft(this.a)
return!s.gO(s)},
$S:14}
A.Xf.prototype={
$2(a,b){var s=this.a
return B.d.aG(Math.abs(a.gaS(a).gaL().b-s.gaS(s).gaL().b),Math.abs(b.gaS(b).gaL().b-s.gaS(s).gaL().b))},
$S:33}
A.cU.prototype={
gJg(){var s=this.d
if(s==null){s=this.c.e
s.toString
s=this.d=new A.afr().$1(s)}s.toString
return s}}
A.afq.prototype={
$1(a){var s=a.gJg()
return A.v5(s,A.am(s).c)},
$S:302}
A.afs.prototype={
$2(a,b){switch(this.a.a){case 1:return B.d.aG(a.b.a,b.b.a)
case 0:return B.d.aG(b.b.c,a.b.c)}},
$S:93}
A.afr.prototype={
$1(a){var s,r,q=A.a([],t.AG),p=t.I,o=a.jQ(p)
for(;o!=null;){s=o.f
s.toString
q.push(p.a(s))
s=A.arf(o,1)
if(s==null)o=null
else{s=s.y
r=s==null?null:s.i(0,A.aD(p))
o=r}}return q},
$S:304}
A.iE.prototype={
gaS(a){var s,r,q,p,o=this
if(o.b==null)for(s=o.a,s=new A.aC(s,new A.afo(),A.am(s).h("aC<1,D>")),s=new A.c_(s,s.gp(s)),r=A.n(s).c;s.q();){q=s.d
if(q==null)q=r.a(q)
p=o.b
if(p==null){o.b=q
p=q}o.b=p.oL(q)}s=o.b
s.toString
return s}}
A.afo.prototype={
$1(a){return a.b},
$S:305}
A.afp.prototype={
$2(a,b){switch(this.a.a){case 1:return B.d.aG(a.gaS(a).a,b.gaS(b).a)
case 0:return B.d.aG(b.gaS(b).c,a.gaS(a).c)}},
$S:306}
A.wv.prototype={
SX(a){var s,r,q,p,o,n=B.c.gJ(a).a,m=t.hY,l=A.a([],m),k=A.a([],t.lZ)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.P)(a),++r){q=a[r]
p=q.a
if(p==n){l.push(q)
continue}k.push(new A.iE(l))
l=A.a([q],m)
n=p}if(l.length!==0)k.push(new A.iE(l))
for(m=k.length,r=0;r<k.length;k.length===m||(0,A.P)(k),++r){s=k[r].a
if(s.length===1)continue
o=B.c.gJ(s).a
o.toString
A.aqv(s,o)}return k},
Gf(a){var s,r,q,p
A.oc(a,new A.a53(),t.dP)
s=B.c.gJ(a)
r=new A.a54().$2(s,a)
if(J.bL(r)<=1)return s
q=A.aBY(r)
q.toString
A.aqv(r,q)
p=this.SX(r)
if(p.length===1)return B.c.gJ(B.c.gJ(p).a)
A.aBX(p,q)
return B.c.gJ(B.c.gJ(p).a)},
NH(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a.length<=1)return a
s=A.a([],t.hY)
for(r=a.length,q=t.n2,p=t.I,o=0;o<a.length;a.length===r||(0,A.P)(a),++o){n=a[o]
m=n.gaS(n)
l=n.e.y
k=l==null?null:l.i(0,A.aD(p))
if(k==null)l=null
else{l=k.f
l.toString}q.a(l)
s.push(new A.cU(l==null?null:l.w,m,n))}j=A.a([],t.i4)
i=this.Gf(s)
j.push(i.c)
B.c.u(s,i)
for(;s.length!==0;){h=this.Gf(s)
j.push(h.c)
B.c.u(s,h)}return j}}
A.a53.prototype={
$2(a,b){return B.d.aG(a.b.b,b.b.b)},
$S:93}
A.a54.prototype={
$2(a,b){var s=a.b,r=A.am(b).h("aK<1>")
return A.aB(new A.aK(b,new A.a55(new A.D(-1/0,s.b,1/0,s.d)),r),!0,r.h("o.E"))},
$S:307}
A.a55.prototype={
$1(a){var s=a.b.ft(this.a)
return!s.gO(s)},
$S:308}
A.uv.prototype={
an(){return new A.O7(B.m)}}
A.O7.prototype={
aA(){this.aP()
this.d=A.akp(!1,"FocusTraversalGroup",!0,!0,null,null,!0)},
m(){var s=this.d
if(s!=null)s.m()
this.aR()},
L(a){var s=null,r=this.a,q=r.c,p=this.d
p.toString
return new A.qU(q,p,A.Fv(!1,!1,r.f,s,!0,!0,p,!1,s,s,s,s,s,!0),s)}}
A.qU.prototype={
c4(a){return!1}}
A.Kh.prototype={
dd(a){A.lC(a.gc1(a),B.Uv)}}
A.mO.prototype={}
A.IC.prototype={
dd(a){var s=$.al.ai$.f.f
s.e.a4(t.AB).f.FU(s,!0)}}
A.n6.prototype={}
A.Jx.prototype={
dd(a){var s=$.al.ai$.f.f
s.e.a4(t.AB).f.FU(s,!1)}}
A.Eq.prototype={
dd(a){var s=$.al.ai$.f.f,r=s.e.a4(t.AB)
r.f.a4k(s,a.a)}}
A.O8.prototype={}
A.Qj.prototype={
yC(a,b){var s
this.Oj(a,b)
s=this.d8$.i(0,b)
if(s!=null){s=s.a
if(!!s.fixed$length)A.L(A.O("removeWhere"))
B.c.nN(s,new A.aft(a),!0)}}}
A.SV.prototype={}
A.SW.prototype={}
A.es.prototype={
gbv(){var s,r=$.al.ai$.z.i(0,this)
if(r instanceof A.fF){s=r.ok
s.toString
if(A.n(this).c.b(s))return s}return null}}
A.bF.prototype={
j(a){var s=this,r=s.a,q=r!=null?" "+r:""
if(A.C(s)===B.a_j)return"[GlobalKey#"+A.bP(s)+q+"]"
return"["+("<optimized out>#"+A.bP(s))+q+"]"}}
A.kr.prototype={
l(a,b){if(b==null)return!1
if(J.X(b)!==A.C(this))return!1
return this.$ti.b(b)&&b.a===this.a},
gt(a){return A.lL(this.a)},
j(a){var s="GlobalObjectKey",r=B.b.ir(s,"<State<StatefulWidget>>")?B.b.T(s,0,-8):s
return"["+r+" "+("<optimized out>#"+A.bP(this.a))+"]"}}
A.k.prototype={
c3(){var s=this.a
return s==null?"Widget":"Widget-"+s.j(0)},
l(a,b){if(b==null)return!1
return this.P_(0,b)},
gt(a){return A.B.prototype.gt.call(this,this)}}
A.b2.prototype={
bW(a){return new A.Lj(this,B.a8)}}
A.ac.prototype={
bW(a){return A.aAD(this)}}
A.Rp.prototype={
F(){return"_StateLifecycle."+this.b}}
A.ak.prototype={
aA(){},
aY(a){},
f4(){},
az(a){a.$0()
this.c.h3()},
dw(){},
cf(){},
m(){},
b7(){}}
A.aW.prototype={}
A.dC.prototype={
bW(a){return new A.mQ(this,B.a8,A.n(this).h("mQ<dC.T>"))}}
A.b9.prototype={
bW(a){return A.ay5(this)}}
A.aE.prototype={
aO(a,b){},
oA(a){}}
A.Gl.prototype={
bW(a){return new A.Gk(this,B.a8)}}
A.b6.prototype={
bW(a){return A.aAv(this)}}
A.ew.prototype={
bW(a){return A.ayQ(this)}}
A.nU.prototype={
F(){return"_ElementLifecycle."+this.b}}
A.Ot.prototype={
Hv(a){a.aW(new A.adS(this,a))
a.pQ()},
a_k(){var s,r,q,p=this
p.a=!0
r=p.b
q=A.aB(r,!0,A.n(r).c)
B.c.dk(q,A.aiP())
s=q
r.a_(0)
try{r=s
new A.cC(r,A.aX(r).h("cC<1>")).Z(0,p.ga_i())}finally{p.a=!1}},
D(a,b){if(b.w===B.cc){b.dw()
b.aW(A.aiQ())}this.b.D(0,b)}}
A.adS.prototype={
$1(a){this.a.Hv(a)},
$S:8}
A.Ve.prototype={
C7(a){var s=this
if(a.at){s.e=!0
return}if(!s.d&&s.a!=null){s.d=!0
s.a.$0()}s.c.push(a)
a.at=!0},
KV(a){try{a.$0()}finally{}},
rM(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=b==null
if(f&&h.c.length===0)return
try{h.d=!0
if(!f){g.a=null
h.e=!1
try{b.$0()}finally{}}f=h.c
B.c.dk(f,A.aiP())
h.e=!1
g.b=f.length
g.c=0
for(n=0;n<g.b;){s=f[n]
r=!1
if(r){n=s.f
n.toString
m=n instanceof A.bY?A.cW(n):null
A.all(A.aD(m==null?A.aX(n):m).j(0),null,null)}try{s.LE()}catch(l){q=A.af(l)
p=A.au(l)
n=A.bq("while rebuilding dirty elements")
k=$.fR()
if(k!=null)k.$1(new A.bM(q,p,"widgets library",n,new A.Vf(g,h,s),!1))}if(r)A.alk()
n=++g.c
k=g.b
j=f.length
if(k>=j){k=h.e
k.toString}else k=!0
if(k){if(!!f.immutable$list)A.L(A.O("sort"))
n=j-1
if(n-0<=32)A.L7(f,0,n,A.aiP())
else A.L6(f,0,n,A.aiP())
n=h.e=!1
g.b=f.length
while(!0){k=g.c
if(!(k>0?f[k-1].as:n))break
g.c=k-1}n=k}}}finally{for(f=h.c,n=f.length,i=0;i<n;++i){o=f[i]
o.at=!1}B.c.a_(f)
h.d=!1
h.e=null}},
a0J(a){return this.rM(a,null)},
a3_(){var s,r,q
try{this.KV(this.b.ga_j())}catch(q){s=A.af(q)
r=A.au(q)
A.ama(A.Fb("while finalizing the widget tree"),s,r,null)}finally{}},
a6h(a,b){try{a.b=b
a.f4()}finally{}}}
A.Vf.prototype={
$0(){var s=null,r=A.a([],t.F),q=this.a,p=q.c,o=this.b.c.length,n="The element being rebuilt at the time was index "+p
q=""+q.b
if(p<o)J.k4(r,A.hO(n+" of "+q,this.c,!0,B.aO,s,!1,s,s,B.ar,s,!1,!0,!0,B.b_,s,t.h))
else J.k4(r,A.ZG(n+" of "+q+", but _dirtyElements only had "+o+" entries. This suggests some confusion in the framework internals."))
return r},
$S:17}
A.vW.prototype={
yu(){var s=this.a
this.c=new A.af_(this,s==null?null:s.c)}}
A.af_.prototype={
d5(a){var s=this.a.Lc(a)
if(s)return
s=this.b
if(s!=null)s.d5(a)}}
A.b_.prototype={
Rs(a){},
l(a,b){if(b==null)return!1
return this===b},
f4(){var s=this
if(A.ar7(s.b,s.f)){s.h3()
s.b=null}s.aW(new A.Z5(s))
s.b=null},
gaa(){var s,r
for(s=this;s!=null;){r={}
if(s.w===B.Cw)break
else if(s instanceof A.bG)return s.gaa()
else{r.a=null
s.aW(new A.Z6(r))
s=r.a}}return null},
a2q(a){var s=null
return A.hO(a,this,!0,B.aO,s,!1,s,s,B.ar,s,!1,!0,!0,B.b_,s,t.h)},
aW(a){},
dW(a,b,c){var s,r,q=this
if(b==null){if(a!=null)q.yR(a)
return null}if(a!=null){s=a.f.l(0,b)
if(s){if(!J.f(a.d,c))q.Mp(a,c)
s=a}else{s=a.f
s.toString
if(A.C(s)===A.C(b)&&J.f(s.a,b.a)){if(!J.f(a.d,c))q.Mp(a,c)
a.bi(0,b)
s=a}else{q.yR(a)
r=q.tN(b,c)
s=r}}}else{r=q.tN(b,c)
s=r}return s},
fw(a,b){var s,r,q,p=this
p.a=a
p.d=b
p.w=B.cc
s=a!=null
if(s){r=a.e
r===$&&A.b();++r}else r=1
p.e=r
if(s)p.r=a.r
q=p.f.a
if(q instanceof A.es)p.r.z.k(0,q,p)
p.xZ()
p.yu()},
bi(a,b){this.f=b},
Mp(a,b){new A.Z7(b).$1(a)},
y6(a){this.d=a},
HF(a){var s=a+1,r=this.e
r===$&&A.b()
if(r<s){this.e=s
this.aW(new A.Z2(s))}},
ou(){this.aW(new A.Z4())
this.d=null},
rH(a){this.aW(new A.Z3(a))
this.d=a},
Z4(a,b){var s,r,q=$.al.ai$.z.i(0,a)
if(q==null)return null
s=q.f
s.toString
if(!(A.C(s)===A.C(b)&&J.f(s.a,b.a)))return null
r=q.a
if(r!=null){r.jq(q)
r.yR(q)}this.r.b.b.u(0,q)
return q},
tN(a,b){var s,r,q,p,o,n,m=this,l=!1
if(l)A.all(A.C(a).j(0),null,null)
try{s=a.a
if(s instanceof A.es){r=m.Z4(s,a)
if(r!=null){o=r
o.a=m
o.toString
n=m.e
n===$&&A.b()
o.HF(n)
o.cf()
o.aW(A.asf())
o.rH(b)
q=m.dW(r,a,b)
o=q
o.toString
return o}}p=a.bW(0)
p.fw(m,b)
return p}finally{if(l)A.alk()}},
yR(a){a.a=null
a.ou()
this.r.b.D(0,a)},
jq(a){},
cf(){var s=this,r=s.z,q=r==null,p=!q&&r.a!==0||s.Q
s.w=B.cc
if(!q)r.a_(0)
s.Q=!1
s.xZ()
s.yu()
if(s.as)s.r.C7(s)
if(p)s.b7()},
dw(){var s,r,q=this,p=q.z
if(p!=null&&p.a!==0)for(p=new A.lo(p,p.ns()),s=A.n(p).c;p.q();){r=p.d;(r==null?s.a(r):r).b8.u(0,q)}q.y=null
q.w=B.a0s},
pQ(){var s=this,r=s.f,q=r==null?null:r.a
if(q instanceof A.es){r=s.r.z
if(J.f(r.i(0,q),s))r.u(0,q)}s.z=s.f=null
s.w=B.Cw},
gcQ(a){var s,r=this.gaa()
if(r instanceof A.G){s=r.k3
s.toString
return s}return null},
yX(a,b){var s=this.z;(s==null?this.z=A.d_(t.tx):s).D(0,a)
a.Ml(this,b)
s=a.f
s.toString
return t.sg.a(s)},
a4(a){var s=this.y,r=s==null?null:s.i(0,A.aD(a))
if(r!=null)return a.a(this.yX(r,null))
this.Q=!0
return null},
jQ(a){var s=this.y
return s==null?null:s.i(0,A.aD(a))},
yu(){var s=this.a
this.c=s==null?null:s.c},
xZ(){var s=this.a
this.y=s==null?null:s.y},
JQ(a){var s,r,q,p=this.a
while(!0){s=p==null
if(!s){r=p.f
r.toString
q=r instanceof A.bY?A.cW(r):null
r=A.aD(q==null?A.aX(r):q)!==A.aD(a)}else r=!1
if(!r)break
p=p.a}if(s)s=null
else{s=p.f
s.toString}return a.h("0?").a(s)},
kH(a){var s,r,q=this.a
for(;s=q==null,!s;){if(q instanceof A.fF){r=q.ok
r.toString
r=a.b(r)}else r=!1
if(r)break
q=q.a}t.Ci.a(q)
if(s)s=null
else{s=q.ok
s.toString}return a.h("0?").a(s)},
tv(a){var s=this.a
for(;s!=null;){if(s instanceof A.bG&&a.b(s.gaa()))return a.a(s.gaa())
s=s.a}return null},
BC(a){var s=this.a
while(!0){if(!(s!=null&&a.$1(s)))break
s=s.a}},
b7(){this.h3()},
d5(a){var s=this.c
if(s!=null)s.d5(a)},
c3(){var s=this.f
s=s==null?null:s.c3()
return s==null?"<optimized out>#"+A.bP(this)+"(DEFUNCT)":s},
h3(){var s=this
if(s.w!==B.cc)return
if(s.as)return
s.as=!0
s.r.C7(s)},
us(a){var s
if(this.w===B.cc)s=!this.as&&!a
else s=!0
if(s)return
this.hT()},
LE(){return this.us(!1)},
hT(){this.as=!1},
$iaj:1}
A.Z5.prototype={
$1(a){a.b=this.a.b
a.f4()},
$S:8}
A.Z6.prototype={
$1(a){this.a.a=a},
$S:8}
A.Z7.prototype={
$1(a){a.y6(this.a)
if(!(a instanceof A.bG))a.aW(this)},
$S:8}
A.Z2.prototype={
$1(a){a.HF(this.a)},
$S:8}
A.Z4.prototype={
$1(a){a.ou()},
$S:8}
A.Z3.prototype={
$1(a){a.rH(this.a)},
$S:8}
A.Fc.prototype={
aH(a){var s=this.d,r=new A.JW(s,A.ay())
r.aK()
r.RE(s)
return r}}
A.tw.prototype={
fw(a,b){this.CO(a,b)
this.ws()},
ws(){this.LE()},
hT(){var s,r,q,p,o,n,m=this,l=null
try{l=m.b6()
m.f.toString}catch(o){s=A.af(o)
r=A.au(o)
n=A.aki(A.ama(A.bq("building "+m.j(0)),s,r,new A.Wa(m)))
l=n}finally{m.vk()}try{m.ay=m.dW(m.ay,l,m.d)}catch(o){q=A.af(o)
p=A.au(o)
n=A.aki(A.ama(A.bq("building "+m.j(0)),q,p,new A.Wb(m)))
l=n
m.ay=m.dW(null,l,m.d)}},
aW(a){var s=this.ay
if(s!=null)a.$1(s)},
jq(a){this.ay=null
this.lc(a)}}
A.Wa.prototype={
$0(){var s=A.a([],t.F)
return s},
$S:17}
A.Wb.prototype={
$0(){var s=A.a([],t.F)
return s},
$S:17}
A.Lj.prototype={
b6(){var s=this.f
s.toString
return t.yB.a(s).L(this)},
bi(a,b){this.qj(0,b)
this.us(!0)}}
A.fF.prototype={
b6(){return this.ok.L(this)},
f4(){var s=this
if(A.ar7(s.b,s.f))s.ok.f4()
s.Og()},
ws(){this.ok.aA()
this.ok.b7()
this.O1()},
hT(){var s=this
if(s.p1){s.ok.b7()
s.p1=!1}s.O2()},
bi(a,b){var s,r,q,p=this
p.qj(0,b)
s=p.ok
r=s.a
r.toString
q=p.f
q.toString
s.a=t.aw.a(q)
s.aY(r)
p.us(!0)},
cf(){this.Oe()
this.ok.cf()
this.h3()},
dw(){this.ok.dw()
this.CL()},
pQ(){var s=this
s.vl()
s.ok.m()
s.ok=s.ok.c=null},
yX(a,b){return this.CM(a,b)},
b7(){this.Of()
this.p1=!0}}
A.wp.prototype={
b6(){var s=this.f
s.toString
return t.im.a(s).b},
bi(a,b){var s=this,r=s.f
r.toString
t.im.a(r)
s.qj(0,b)
s.Bz(r)
s.us(!0)},
Bz(a){this.mC(a)}}
A.mQ.prototype={
DQ(a){this.aW(new A.a3X(a))},
mC(a){var s=this.f
s.toString
this.DQ(this.$ti.h("dC<1>").a(s))}}
A.a3X.prototype={
$1(a){if(a instanceof A.bG)this.a.o7(a.gaa())
else a.aW(this)},
$S:8}
A.fl.prototype={
xZ(){var s=this,r=s.a,q=r==null?null:r.y
if(q==null)q=B.TV
r=s.f
r.toString
s.y=q.a68(0,A.C(r),s)},
Cc(a,b){this.b8.k(0,a,b)},
Ml(a,b){this.Cc(a,null)},
L7(a,b){b.b7()},
Bz(a){var s=this.f
s.toString
if(t.sg.a(s).c4(a))this.Pd(a)},
mC(a){var s,r,q
for(s=this.b8,s=new A.yM(s,s.w4()),r=A.n(s).c;s.q();){q=s.d
this.L7(a,q==null?r.a(q):q)}}}
A.bG.prototype={
gaa(){var s=this.ay
s.toString
return s},
U1(){var s=this.a
while(!0){if(!(s!=null&&!(s instanceof A.bG)))break
s=s.a}return t.bI.a(s)},
U0(){var s,r={},q=r.a=this.a
r.b=null
while(!0){if(!(q!=null&&!(q instanceof A.bG)))break
if(q instanceof A.mQ){r.b=q
break}s=q.a
r.a=s
q=s}return r.b},
fw(a,b){var s,r=this
r.CO(a,b)
s=r.f
s.toString
r.ay=t.xL.a(s).aH(r)
r.rH(b)
r.vk()},
bi(a,b){this.qj(0,b)
this.Ge()},
hT(){this.Ge()},
Ge(){var s=this,r=s.f
r.toString
t.xL.a(r).aO(s,s.gaa())
s.vk()},
a7h(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=new A.a5d(a4),g=new A.a5e(i),f=a3.length,e=f-1,d=a2.length,c=d-1,b=d===f?a2:A.aV(f,$.amO(),!1,t.h),a=i,a0=0,a1=0
while(!0){if(!(a1<=c&&a0<=e))break
s=h.$1(a2[a1])
r=a3[a0]
if(s!=null){f=s.f
f.toString
q=f instanceof A.bY?A.cW(f):i
d=A.aD(q==null?A.aX(f):q)
q=r instanceof A.bY?A.cW(r):i
f=!(d===A.aD(q==null?A.aX(r):q)&&J.f(f.a,r.a))}else f=!0
if(f)break
f=j.dW(s,r,g.$2(a0,a))
f.toString
b[a0]=f;++a0;++a1
a=f}p=c
while(!0){o=a1<=p
if(!(o&&a0<=e))break
s=h.$1(a2[p])
r=a3[e]
if(s!=null){f=s.f
f.toString
q=f instanceof A.bY?A.cW(f):i
d=A.aD(q==null?A.aX(f):q)
q=r instanceof A.bY?A.cW(r):i
f=!(d===A.aD(q==null?A.aX(r):q)&&J.f(f.a,r.a))}else f=!0
if(f)break;--p;--e}if(o){n=A.z(t.qI,t.h)
for(;a1<=p;){s=h.$1(a2[a1])
if(s!=null){f=s.f.a
if(f!=null)n.k(0,f,s)
else{s.a=null
s.ou()
f=j.r.b
if(s.w===B.cc){s.dw()
s.aW(A.aiQ())}f.b.D(0,s)}}++a1}o=!0}else n=i
for(;a0<=e;a=f){r=a3[a0]
if(o){m=r.a
if(m!=null){s=n.i(0,m)
if(s!=null){f=s.f
f.toString
q=f instanceof A.bY?A.cW(f):i
d=A.aD(q==null?A.aX(f):q)
q=r instanceof A.bY?A.cW(r):i
if(d===A.aD(q==null?A.aX(r):q)&&J.f(f.a,m))n.u(0,m)
else s=i}}else s=i}else s=i
f=j.dW(s,r,g.$2(a0,a))
f.toString
b[a0]=f;++a0}e=a3.length-1
while(!0){if(!(a1<=c&&a0<=e))break
f=j.dW(a2[a1],a3[a0],g.$2(a0,a))
f.toString
b[a0]=f;++a0;++a1
a=f}if(o&&n.a!==0)for(f=n.gaV(n),f=new A.dZ(J.av(f.a),f.b),d=A.n(f).z[1];f.q();){l=f.a
if(l==null)l=d.a(l)
if(!a4.C(0,l)){l.a=null
l.ou()
k=j.r.b
if(l.w===B.cc){l.dw()
l.aW(A.aiQ())}k.b.D(0,l)}}return b},
dw(){this.CL()},
pQ(){var s=this,r=s.f
r.toString
t.xL.a(r)
s.vl()
r.oA(s.gaa())
s.ay.m()
s.ay=null},
y6(a){var s,r=this,q=r.d
r.Od(a)
s=r.CW
s.toString
s.jA(r.gaa(),q,r.d)},
rH(a){var s,r,q=this
q.d=a
s=q.CW=q.U1()
if(s!=null)s.jv(q.gaa(),a)
r=q.U0()
if(r!=null){s=r.f
s.toString
t.yL.a(s).o7(q.gaa())}},
ou(){var s=this,r=s.CW
if(r!=null){r.jJ(s.gaa(),s.d)
s.CW=null}s.d=null},
jv(a,b){},
jA(a,b,c){},
jJ(a,b){}}
A.a5d.prototype={
$1(a){var s=this.a.C(0,a)
return s?null:a},
$S:309}
A.a5e.prototype={
$2(a,b){return new A.p8(b,a,t.wx)},
$S:310}
A.wN.prototype={
fw(a,b){this.vt(a,b)}}
A.Gk.prototype={
jq(a){this.lc(a)},
jv(a,b){},
jA(a,b,c){},
jJ(a,b){}}
A.xh.prototype={
aW(a){var s=this.p1
if(s!=null)a.$1(s)},
jq(a){this.p1=null
this.lc(a)},
fw(a,b){var s,r,q=this
q.vt(a,b)
s=q.p1
r=q.f
r.toString
q.p1=q.dW(s,t.Dp.a(r).c,null)},
bi(a,b){var s,r,q=this
q.ne(0,b)
s=q.p1
r=q.f
r.toString
q.p1=q.dW(s,t.Dp.a(r).c,null)},
jv(a,b){var s=this.ay
s.toString
t.fB.a(s).saX(a)},
jA(a,b,c){},
jJ(a,b){var s=this.ay
s.toString
t.fB.a(s).saX(null)}}
A.eW.prototype={
gaa(){return t.gz.a(A.bG.prototype.gaa.call(this))},
gIA(a){var s=this.p1
s===$&&A.b()
return new A.aK(s,new A.a37(this),A.am(s).h("aK<1>"))},
jv(a,b){var s=this.gaa(),r=b.a
s.zU(0,a,r==null?null:r.gaa())},
jA(a,b,c){var s=this.gaa(),r=c.a
s.u4(a,r==null?null:r.gaa())},
jJ(a,b){this.gaa().u(0,a)},
aW(a){var s,r,q,p,o=this.p1
o===$&&A.b()
s=o.length
r=this.p2
q=0
for(;q<s;++q){p=o[q]
if(!r.C(0,p))a.$1(p)}},
jq(a){this.p2.D(0,a)
this.lc(a)},
tN(a,b){return this.CN(a,b)},
fw(a,b){var s,r,q,p,o,n,m,l=this
l.vt(a,b)
s=l.f
s.toString
s=t.tk.a(s).c
r=s.length
q=A.aV(r,$.amO(),!1,t.h)
for(p=t.wx,o=null,n=0;n<r;++n,o=m){m=l.CN(s[n],new A.p8(o,n,p))
q[n]=m}l.p1=q},
bi(a,b){var s,r,q,p=this
p.ne(0,b)
s=p.f
s.toString
t.tk.a(s)
r=p.p1
r===$&&A.b()
q=p.p2
p.p1=p.a7h(r,s.c,q)
q.a_(0)}}
A.a37.prototype={
$1(a){return!this.a.p2.C(0,a)},
$S:41}
A.p8.prototype={
l(a,b){if(b==null)return!1
if(J.X(b)!==A.C(this))return!1
return b instanceof A.p8&&this.b===b.b&&J.f(this.a,b.a)},
gt(a){return A.S(this.b,this.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.Pj.prototype={}
A.Pm.prototype={
bW(a){return A.L(A.c4(null))}}
A.Rq.prototype={}
A.mo.prototype={}
A.cz.prototype={
IQ(){return this.a.$0()},
Kp(a){return this.b.$1(a)}}
A.FG.prototype={
L(a){var s=this,r=A.z(t.n,t.ob),q=A.dA(a),p=q==null?null:q.ay
if(s.d==null)if(s.e==null)if(s.f==null)if(s.r==null)q=!1
else q=!0
else q=!0
else q=!0
else q=!0
if(q)r.k(0,B.Cn,new A.cz(new A.a_z(s),new A.a_A(s,p),t.g0))
if(s.ay==null)q=!1
else q=!0
if(q)r.k(0,B.a_a,new A.cz(new A.a_B(s),new A.a_F(s,p),t.da))
if(s.cy==null)q=!1
else q=!0
if(q)r.k(0,B.Cl,new A.cz(new A.a_G(s),new A.a_H(s,p),t.on))
if(s.rx!=null||s.ry!=null||s.to!=null||!1)r.k(0,B.m_,new A.cz(new A.a_I(s),new A.a_J(s,p),t.n_))
if(s.x2!=null||s.y1!=null||s.y2!=null||s.bK!=null)r.k(0,B.lZ,new A.cz(new A.a_K(s),new A.a_L(s,p),t.ta))
if(s.br!=null||s.aj!=null||s.af!=null||!1)r.k(0,B.lY,new A.cz(new A.a_M(s),new A.a_C(s,p),t.uX))
q=!1
if(q)r.k(0,B.a_d,new A.cz(new A.a_D(s),new A.a_E(s,p),t.p1))
return new A.kY(s.c,r,s.aw,s.b1,null,null)}}
A.a_z.prototype={
$0(){return A.aAM(this.a,null)},
$S:311}
A.a_A.prototype={
$1(a){var s=this.a
a.y1=s.d
a.y2=s.e
a.bK=s.f
a.br=s.r
a.b0=a.aZ=a.aq=a.ap=a.af=a.aj=a.b8=null
a.b=this.b},
$S:312}
A.a_B.prototype={
$0(){var s=t.S
return new A.h0(A.z(s,t.Aj),this.a,null,A.z(s,t.V))},
$S:313}
A.a_F.prototype={
$1(a){a.e=null
a.f=this.a.ay
a.r=null
a.b=this.b},
$S:314}
A.a_G.prototype={
$0(){return A.ayr(this.a,null,null)},
$S:315}
A.a_H.prototype={
$1(a){a.k3=a.k2=null
a.k4=this.a.cy
a.b8=a.br=a.bK=a.y2=a.y1=a.xr=a.x2=a.x1=a.to=a.ry=a.rx=a.RG=a.R8=a.p4=a.p3=a.p2=a.p1=a.ok=null
a.b=this.b},
$S:316}
A.a_I.prototype={
$0(){return A.aqe(this.a,null)},
$S:94}
A.a_J.prototype={
$1(a){var s
a.as=null
s=this.a
a.at=s.rx
a.ax=s.ry
a.ay=s.to
a.ch=null
a.Q=s.b9
a.b=this.b},
$S:97}
A.a_K.prototype={
$0(){return A.akw(this.a,null)},
$S:110}
A.a_L.prototype={
$1(a){var s=this.a
a.as=s.x2
a.at=null
a.ax=s.y1
a.ay=s.y2
a.ch=s.bK
a.Q=s.b9
a.b=this.b},
$S:116}
A.a_M.prototype={
$0(){var s=t.S,r=A.d_(s)
return new A.hi(B.b0,A.amp(),B.cb,A.z(s,t.ki),A.b5(s),A.z(s,t.o),r,this.a,null,A.z(s,t.V))},
$S:321}
A.a_C.prototype={
$1(a){var s=this.a
a.as=s.br
a.at=null
a.ax=s.aj
a.ay=s.af
a.ch=null
a.Q=s.b9
a.b=this.b},
$S:322}
A.a_D.prototype={
$0(){var s=t.S,r=A.d_(s)
return new A.h4(B.m7,A.z(s,t.o),r,this.a,null,A.z(s,t.V))},
$S:323}
A.a_E.prototype={
$1(a){a.ax=a.as=a.at=a.Q=null
a.b=this.b},
$S:324}
A.kY.prototype={
an(){return new A.pD(B.Ta,B.m)}}
A.pD.prototype={
aA(){var s,r,q=this
q.aP()
s=q.a
r=s.r
q.e=r==null?new A.Nr(q):r
q.xP(s.d)},
aY(a){var s,r=this
r.bq(a)
if(!(a.r==null&&r.a.r==null)){s=r.a.r
r.e=s==null?new A.Nr(r):s}r.xP(r.a.d)},
a6D(a){if(this.a.f)return
t.qS.a(this.c.gaa()).sa7m(a)},
m(){for(var s=this.d,s=J.av(s.gaV(s));s.q();)s.gG(s).m()
this.d=null
this.aR()},
xP(a){var s,r,q,p,o=this,n=o.d
n.toString
o.d=A.z(t.n,t.id)
for(s=J.av(a.gbs(a));s.q();){r=s.gG(s)
q=o.d
q.toString
p=n.i(0,r)
q.k(0,r,p==null?a.i(0,r).IQ():p)
q=a.i(0,r)
q.toString
r=o.d.i(0,r)
r.toString
q.Kp(r)}for(s=J.av(n.gbs(n));s.q();){r=s.gG(s)
if(!o.d.R(0,r))n.i(0,r).m()}},
Ul(a){var s,r
for(s=this.d,s=J.av(s.gaV(s));s.q();){r=s.gG(s)
r.d.k(0,a.gbY(),a.gcj(a))
if(r.fu(a))r.hu(a)
else r.p0(a)}},
VV(a){var s,r
for(s=this.d,s=J.av(s.gaV(s));s.q();){r=s.gG(s)
r.d.k(0,a.gbY(),a.gcj(a))
if(r.a4L(a))r.yf(a)}},
a_D(a){this.e.yt(a)},
L(a){var s,r,q,p=this,o=null,n=p.a,m=n.e,l=m==null
if(l)s=n.c==null?B.d6:B.bV
else s=m
r=n.c
q=A.Gr(s,r,o,p.gUk(),p.gVU(),o,o)
if(!n.f){if(l)n=r==null?B.d6:B.bV
else n=m
q=new A.Oe(n,p.ga_C(),q,o)}return q}}
A.Oe.prototype={
aH(a){var s=new A.jo(B.bV,null,A.ay())
s.aK()
s.saX(null)
s.A=this.e
this.f.$1(s)
return s},
aO(a,b){b.A=this.e
this.f.$1(b)}}
A.a7e.prototype={
j(a){return"SemanticsGestureDelegate()"}}
A.Nr.prototype={
yt(a){var s=this,r=s.a.d
r.toString
a.sjE(s.UK(r))
a.skQ(s.UB(r))
a.sa5z(s.Uz(r))
a.sa5I(s.UL(r))},
UK(a){var s=t.f3.a(a.i(0,B.Cn))
if(s==null)return null
return new A.acE(s)},
UB(a){var s=t.yA.a(a.i(0,B.Cl))
if(s==null)return null
return new A.acD(s)},
Uz(a){var s=t.oq.a(a.i(0,B.lZ)),r=t.rR.a(a.i(0,B.lY)),q=s==null?null:new A.acA(s),p=r==null?null:new A.acB(r)
if(q==null&&p==null)return null
return new A.acC(q,p)},
UL(a){var s=t.iC.a(a.i(0,B.m_)),r=t.rR.a(a.i(0,B.lY)),q=s==null?null:new A.acF(s),p=r==null?null:new A.acG(r)
if(q==null&&p==null)return null
return new A.acH(q,p)}}
A.acE.prototype={
$0(){var s=this.a,r=s.y1
if(r!=null)r.$1(new A.qm(B.k,B.k))
r=s.y2
if(r!=null)r.$1(new A.qn())
s=s.bK
if(s!=null)s.$0()},
$S:0}
A.acD.prototype={
$0(){var s=this.a,r=s.ok
if(r!=null)r.$1(B.Ry)
r=s.k4
if(r!=null)r.$0()
s=s.p3
if(s!=null)s.$1(B.Rw)},
$S:0}
A.acA.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.iZ(B.k))
r=s.at
if(r!=null)r.$1(new A.hS(null,B.k,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.h1(B.ca,0))},
$S:23}
A.acB.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.iZ(B.k))
r=s.at
if(r!=null)r.$1(new A.hS(null,B.k,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.h1(B.ca,null))},
$S:23}
A.acC.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(a)
s=this.b
if(s!=null)s.$1(a)},
$S:23}
A.acF.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.iZ(B.k))
r=s.at
if(r!=null)r.$1(new A.hS(null,B.k,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.h1(B.ca,0))},
$S:23}
A.acG.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.iZ(B.k))
r=s.at
if(r!=null)r.$1(new A.hS(null,B.k,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.h1(B.ca,null))},
$S:23}
A.acH.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(a)
s=this.b
if(s!=null)s.$1(a)},
$S:23}
A.mv.prototype={
F(){return"HeroFlightDirection."+this.b}}
A.mt.prototype={
an(){return new A.r0(new A.bF(null,t.C),B.m)}}
A.a0h.prototype={
$2(a,b){var s=a.f
s.toString
t.tV.a(s)
s=a.ok
s.toString
t.BJ.a(s)
if(!this.b||!1)this.a.k(0,b,s)
else s.Jz()},
$S:327}
A.a0i.prototype={
$1(a){var s,r,q=this,p=a.f
p.toString
if(p instanceof A.mt){t.jw.a(a)
s=p.c
if(A.akO(a)===q.a)q.b.$2(a,s)
else{r=A.a2X(a,t.X)
if(r!=null)p=r.gkK()
else p=!1
if(p)q.b.$2(a,s)}}a.aW(q)},
$S:8}
A.r0.prototype={
vc(a){var s,r=this
r.f=a
s=r.c.gaa()
s.toString
r.az(new A.adI(r,t.x.a(s)))},
vb(){return this.vc(!1)},
m5(a){var s=this
if(a||s.e==null)return
s.e=null
if(s.c!=null)s.az(new A.adH())},
Jz(){return this.m5(!1)},
L(a){var s,r=this,q=null,p=r.e,o=p==null,n=!o
if(n)r.a.toString
if(n&&!r.f){o=p.a
return A.e1(q,p.b,o)}s=o?q:p.a
p=o?q:p.b
return A.e1(new A.w0(n,new A.qt(o,new A.kD(r.a.e,r.d),q),q),p,s)}}
A.adI.prototype={
$0(){var s=this.b.k3
s.toString
this.a.e=s},
$S:0}
A.adH.prototype={
$0(){},
$S:0}
A.adE.prototype={
gbQ(a){var s,r=this
if(r.a===B.bT){s=r.e.fy
s.toString}else{s=r.d.fy
s.toString}return A.ep(B.bs,s,r.z?null:new A.ur(B.bs))},
op(a,b){var s
this.r.a.toString
s=this.w.$2(a,b)
return s==null?new A.ww(a,b):s},
gK1(){var s,r,q=this,p=q.Q
if(p===$){s=q.f.c
s.toString
r=A.aqo(s,$.al.ai$.z.i(0,q.d.k2))
q.Q!==$&&A.bj()
q.Q=r
p=r}return p},
guC(){var s,r,q=this,p=q.as
if(p===$){s=q.r.c
s.toString
r=A.aqo(s,$.al.ai$.z.i(0,q.e.k2))
q.as!==$&&A.bj()
q.as=r
p=r}return p},
gkM(){var s,r,q=this,p=q.at
if(p===$){s=q.guC()
if(s.gKF(s))if(!q.z){s=q.gK1()
s=s.gKF(s)
r=s}else r=!0
else r=!1
q.at!==$&&A.bj()
p=q.at=r}return p},
j(a){var s,r,q=this,p=q.a.j(0),o=q.f,n=o.a.c.j(0),m=q.d.b.j(0),l=q.e.b.j(0)
o=o.j(0)
s=q.r.j(0)
r=q.gkM()?"":", INVALID"
return"_HeroFlightManifest("+p+" tag: "+n+" from route: "+m+" to route: "+l+" with hero: "+o+" to "+s+")"+r}}
A.jI.prototype={
Ss(a){var s,r,q,p,o=this,n=o.c
if(n==null){n=o.f
n===$&&A.b()
s=n.gbQ(n)
r=o.f
q=r.f.c
q.toString
p=r.r.c
p.toString
p=o.c=n.x.$5(a,s,r.a,q,p)
n=p}s=o.e
s===$&&A.b()
return A.lR(s,new A.adF(o),n)},
Gd(a){var s,r=this,q=a===B.a_
if(q||a===B.L){s=r.e
s===$&&A.b()
s.saM(0,null)
r.r.mL(0)
r.r=null
s=r.f
s===$&&A.b()
s.f.m5(q)
r.f.r.m5(a===B.L)
r.a.$1(r)
r.e.H(0,r.gLh())}},
Fb(a){var s=this,r=s.f
r===$&&A.b()
r=r.d.a
if((r==null?null:r.CW.a)!==!0){s.Gd(a)
return}if(s.x)return
r.toString
s.x=!0
r.CW.X(0,new A.adG(s,r))},
a5H(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(!h.w){s=h.f
s===$&&A.b()
s=s.r.c!=null}else s=!1
if(s){s=h.f
s===$&&A.b()
r=t.av.a(s.r.c.gaa())}else r=null
if(r!=null&&r.b!=null&&r.k3!=null){s=h.f
s===$&&A.b()
s=$.al.ai$.z.i(0,s.e.k2)
s=s==null?null:s.gaa()
q=A.cA(r.bB(0,t.av.a(s)),B.k)}else q=null
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
h.b=i.op(p.a,new A.D(k,j,k+(n-m),j+(l-o)))}}else{p=h.d
if(p.gb2(p)===B.a_){p=h.e
p===$&&A.b()
o=$.au1()
n=p.gn(p)
m=A.n(o).h("nR<aI.T>")
h.d=new A.b0(t.m.a(p),new A.nR(new A.iX(new A.ha(n,1,B.aZ)),o,m),m.h("b0<aI.T>"))}}if(s)s=!(isFinite(q.a)&&isFinite(q.b))
else s=!0
h.w=s},
j(a){var s,r,q,p,o,n=this.f
n===$&&A.b()
s=n.d.b
r=n.e.b
n=n.f.a.c.j(0)
q=s.j(0)
p=r.j(0)
o=this.e
o===$&&A.b()
return"HeroFlight(for: "+n+", from: "+q+", to: "+p+" "+A.h(o.c)+")"}}
A.adF.prototype={
$2(a,b){var s,r=null,q=this.a,p=q.b
p===$&&A.b()
s=q.e
s===$&&A.b()
s=p.ak(0,s.gn(s))
s.toString
p=q.f
p===$&&A.b()
p=p.c
return A.n3(p.b-s.d,new A.hY(!0,r,A.akl(b,q.d),r),r,r,s.a,p.a-s.c,s.b,r)},
$S:328}
A.adG.prototype={
$0(){var s,r=this.a
r.x=!1
this.b.CW.H(0,this)
s=r.e
s===$&&A.b()
r.Gd(s.gb2(s))},
$S:0}
A.uE.prototype={
t7(a,b){this.qW(b,a,B.bT,!1)},
t6(a,b){var s=$.hD()
A.oT(this)
if(!s.a.get(this).CW.a)this.qW(a,b,B.bU,!1)},
t8(a,b){var s=a.gkK()
if(s)this.qW(b,a,B.bT,!1)},
Je(a,b){this.qW(a,b,B.bU,!0)},
oz(){var s,r,q,p=$.hD()
A.oT(this)
if(p.a.get(this).CW.a)return
p=this.b
p=p.gaV(p)
s=A.n(p).h("aK<o.E>")
r=A.aB(new A.aK(p,new A.a0g(),s),!1,s.h("o.E"))
for(p=r.length,q=0;q<p;++q)r[q].Fb(B.L)},
qW(a,b,c,d){var s
if(b!=a&&b instanceof A.i9&&a instanceof A.i9){switch(c.a){case 1:s=a.fy
if(s.gn(s)===0)return
break
case 0:s=b.fy
if(s.gn(s)===1)return
break}if(d)if(c===B.bU){b.gpj()
s=!0}else s=!1
else s=!1
if(s)this.H9(a,b,c,d)
else{s=b.fy
b.su6(s.gn(s)===0)
$.al.cy$.push(new A.a0f(this,a,b,c,d))}}},
H9(b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null
b4.su6(!1)
s=$.hD()
A.oT(b1)
s=s.a.get(b1)
r=s==null
if(r)q=b2
else{p=s.d
p===$&&A.b()
q=p.gbv()}if(r||q==null)return
o=s.c.gaa()
if(!(o instanceof A.G))return
n=$.al.ai$.z.i(0,b3.k2)
m=n!=null?A.aol(n,b6,s):B.zu
l=$.al.ai$.z.i(0,b4.k2)
k=l!=null?A.aol(l,b6,s):B.zu
for(s=m.gep(m),s=s.ga5(s),r=b1.gTl(),p=b1.a,j=b1.b,i=t.Cf,h=b1.gVs(),g=t.A,f=t.Q,e=t.b,d=t.tY,c=t.a7,b=t.m,a=c.h("b0<aI.T>"),a0=t.sD;s.q();){a1=s.gG(s)
a2=a1.gcL(a1)
a3=a1.gn(a1)
a4=k.i(0,a2)
a5=j.i(0,a2)
if(a4==null)a6=b2
else{a1=o.k3
a1.toString
a4.a.toString
a3.a.toString
a6=new A.adE(b5,q,a1,b3,b4,a3,a4,p,r,b6,a5!=null)}if(a6!=null&&a6.gkM()){k.u(0,a2)
if(a5!=null){a1=a5.f
a1===$&&A.b()
a7=a1.a
if(a7===B.bT&&a6.a===B.bU){a1=a5.e
a1===$&&A.b()
a1.saM(0,new A.f0(a6.gbQ(a6),new A.bl(A.a([],g),f),0))
a1=a5.b
a1===$&&A.b()
a5.b=new A.wM(a1,a1.b,a1.a,a0)}else{a7=a7===B.bU&&a6.a===B.bT
a8=a5.e
if(a7){a8===$&&A.b()
a1=a6.gbQ(a6)
a7=a5.f
a7=a7.gbQ(a7)
a7=a7.gn(a7)
a8.saM(0,new A.b0(b.a(a1),new A.aN(a7,1,c),a))
a1=a5.f
a7=a1.f
a8=a6.r
if(a7!==a8){a7.m5(!0)
a8.vb()
a1=a5.f
a7=a5.b
a7===$&&A.b()
a5.b=a1.op(a7.b,a6.guC())}else{a7=a5.b
a7===$&&A.b()
a5.b=a1.op(a7.b,a7.a)}}else{a7=a5.b
a7===$&&A.b()
a8===$&&A.b()
a5.b=a1.op(a7.ak(0,a8.gn(a8)),a6.guC())
a5.c=null
a1=a6.a
a7=a5.e
if(a1===B.bU)a7.saM(0,new A.f0(a6.gbQ(a6),new A.bl(A.a([],g),f),0))
else a7.saM(0,a6.gbQ(a6))
a5.f.f.m5(!0)
a5.f.r.m5(!0)
a6.f.vc(a1===B.bT)
a6.r.vb()
a1=a5.r.f.gbv()
if(a1!=null)a1.FN()}}a5.f=a6}else{a1=new A.jI(h,B.cY)
a7=A.a([],g)
a8=new A.bl(a7,f)
a9=new A.wo(a8,new A.bl(A.a([],e),d),0)
a9.a=B.L
a9.b=0
a9.by()
a8.b=!0
a7.push(a1.gUT())
a1.e=a9
a1.f=a6
switch(a6.a.a){case 1:a9.saM(0,new A.f0(a6.gbQ(a6),new A.bl(A.a([],g),f),0))
b0=!1
break
case 0:a9.saM(0,a6.gbQ(a6))
b0=!0
break
default:b0=b2}a7=a1.f
a1.b=a7.op(a7.gK1(),a1.f.guC())
a1.f.f.vc(b0)
a1.f.r.vb()
a7=a1.f
a8=new A.nI(!1,$.bC())
a8.b0$=!0
a8=new A.fu(a1.gSr(),!1,a8,new A.bF(b2,i))
a1.r=a8
a7.b.zT(0,a8)
a8=a1.e
a8.by()
a8=a8.ci$
a8.b=!0
a8.a.push(a1.gLh())
j.k(0,a2,a1)}}else if(a5!=null)a5.w=!0}for(s=J.av(k.gaV(k));s.q();)s.gG(s).Jz()},
Vt(a){var s=a.f
s===$&&A.b()
this.b.u(0,s.f.a.c)},
Tm(a,b,c,d,e){var s,r,q=e.f
q.toString
t.tV.a(q)
s=A.dA(e)
r=A.dA(d)
if(s==null||r==null)return q.e
return A.lR(b,new A.a0e(s,c,r.f,s.f,b,q),null)}}
A.a0g.prototype={
$1(a){var s=a.f
s===$&&A.b()
if(s.y)if(s.a===B.bU){s=a.e
s===$&&A.b()
s=s.gb2(s)===B.L}else s=!1
else s=!1
return s},
$S:331}
A.a0f.prototype={
$1(a){var s=this
s.a.H9(s.b,s.c,s.d,s.e)},
$S:2}
A.a0e.prototype={
$2(a,b){var s=this,r=s.c,q=s.d,p=s.e
r=s.b===B.bT?new A.u5(r,q).ak(0,p.gn(p)):new A.u5(q,r).ak(0,p.gn(p))
return new A.fn(s.a.IX(r),s.f.e,null)},
$S:332}
A.p1.prototype={
L(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.a4(t.I)
f.toString
s=f.w
r=A.aop(a)
q=r.a
p=r.b
o=r.c
n=r.d
m=r.e
f=this.c
if(f==null)return A.dO(g,A.e1(g,q,q),!1,g,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)
l=r.r
k=l==null?g:A.I(l,0,1)
if(k==null)k=1
l=r.f
l.toString
if(k!==1)j=A.b4(B.d.ba(255*((l.gn(l)>>>24&255)/255*k)),l.gn(l)>>>16&255,l.gn(l)>>>8&255,l.gn(l)&255)
else j=l
l=A.dN(f.a)
i=A.a([],t.BV)
if(p!=null)i.push(new A.ko("FILL",p))
if(o!=null)i.push(new A.ko("wght",o))
if(n!=null)i.push(new A.ko("GRAD",n))
if(m!=null)i.push(new A.ko("opsz",m))
h=A.apt(g,g,B.Wv,g,g,!0,g,A.aaJ(g,A.bw(g,g,j,g,g,g,g,g,"MaterialIcons",g,g,q,g,i,g,g,g,!1,g,g,g,g,g,r.w,g,g),l),B.bK,s,g,1,B.aV)
if(f.d)switch(s.a){case 0:f=new A.bg(new Float64Array(16))
f.dh()
f.i2(0,-1,1,1)
h=A.aq2(B.P,h,f,!1)
break
case 1:break}return A.dO(g,new A.ud(!0,A.e1(A.tl(h,g,g),q,q),g),!1,g,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)}}
A.mz.prototype={
l(a,b){var s
if(b==null)return!1
if(J.X(b)!==A.C(this))return!1
if(b instanceof A.mz)if(b.a===this.a)s=b.d===this.d
else s=!1
else s=!1
return s},
gt(a){return A.S(this.a,"MaterialIcons",null,this.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"IconData(U+"+B.b.hQ(B.f.iO(this.a,16).toUpperCase(),5,"0")+")"}}
A.mA.prototype={
c4(a){return!this.w.l(0,a.w)}}
A.a0X.prototype={
$1(a){return A.akz(this.c,A.aoo(a).ca(this.b),this.a)},
$S:333}
A.cG.prototype={
oo(a,b,c,d,e,f,g,h){var s,r=this,q=g==null?r.a:g,p=b==null?r.b:b,o=h==null?r.c:h,n=c==null?r.d:c,m=e==null?r.e:e,l=a==null?r.f:a
if(d==null){s=r.r
s=s==null?null:A.I(s,0,1)}else s=d
return new A.cG(q,p,o,n,m,l,s,f==null?r.w:f)},
hB(a){return this.oo(a,null,null,null,null,null,null,null)},
ca(a){var s=a.r
s=s==null?null:A.I(s,0,1)
return this.oo(a.f,a.b,a.d,s,a.e,a.w,a.a,a.c)},
Y(a){return this},
l(a,b){var s,r,q=this
if(b==null)return!1
if(J.X(b)!==A.C(q))return!1
if(b instanceof A.cG)if(b.a==q.a)if(b.b==q.b)if(b.c==q.c)if(b.d==q.d)if(b.e==q.e)if(J.f(b.f,q.f)){s=b.r
s=s==null?null:A.I(s,0,1)
r=q.r
s=s==(r==null?null:A.I(r,0,1))&&A.cX(b.w,q.w)}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gt(a){var s,r=this,q=r.r
q=q==null?null:A.I(q,0,1)
s=r.w
s=s==null?null:A.dj(s)
return A.S(r.a,r.b,r.c,r.d,r.e,r.f,q,s,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.Op.prototype={}
A.kt.prototype={
an(){return new A.yN(B.m)}}
A.yN.prototype={
aA(){var s=this
s.aP()
$.al.b4$.push(s)
s.z=new A.Et(s)},
m(){var s,r=this
B.c.u($.al.b4$,r)
r.a__()
s=r.at
if(s!=null)s.m()
s=r.z
s===$&&A.b()
s.a=null
r.xx(null)
r.aR()},
b7(){var s,r=this
r.a_u()
r.xB()
s=r.c
s.toString
if(A.aq_(s))r.X1()
else r.Hc(!0)
r.cF()},
aY(a){var s,r,q=this
q.bq(a)
if(q.r&&q.a.e==null!==(a.e==null)){s=q.ny()
r=q.d
r.toString
r.X(0,q.F_(!0))
q.d.H(0,s)}if(!q.a.c.l(0,a.c))q.xB()},
f4(){this.xB()
this.Q5()},
a_u(){var s=this.c
s.toString
s=A.dA(s)
s=s==null?null:s.z
if(s==null){s=$.a73.zm$
s===$&&A.b()
s=(s.a&2)!==0}this.w=s},
xB(){var s,r,q,p,o=this,n=o.z
n===$&&A.b()
s=o.a
r=s.c
q=o.c
q.toString
p=s.r
if(p!=null&&s.w!=null){p.toString
s=s.w
s.toString
s=new A.a7(p,s)}else s=null
o.a_F(new A.wW(n,r,t.rZ).Y(A.amh(q,s)))},
F_(a){var s,r=this,q=r.ax
if(q==null||a){r.as=r.Q=null
q=r.a
s=q.e==null?null:r.gVx()
q=q.f!=null||!1?new A.adM(r):null
q=r.ax=new A.dz(r.gVz(),s,q)}q.toString
return q},
ny(){return this.F_(!1)},
VA(a,b){this.az(new A.adO(this,a,b))},
Vy(a){this.az(new A.adN(this,a))},
xx(a){var s=this.e
$.bT.cy$.push(new A.adP(s))
this.e=a},
a_F(a){var s,r,q=this,p=q.d
if(p==null)s=null
else{s=p.a
if(s==null)s=p}r=a.a
if(s===(r==null?a:r))return
if(q.r){p.toString
p.H(0,q.ny())}q.a.toString
q.az(new A.adQ(q))
q.az(new A.adR(q))
q.d=a
if(q.r)a.X(0,q.ny())},
X1(){var s,r=this
if(r.r)return
s=r.d
s.toString
s.X(0,r.ny())
s=r.at
if(s!=null)s.m()
r.at=null
r.r=!0},
Hc(a){var s,r=this
if(!r.r)return
if(a)if(r.at==null){s=r.d
s=(s==null?null:s.a)!=null}else s=!1
else s=!1
if(s)r.at=r.d.a.mx()
s=r.d
s.toString
s.H(0,r.ny())
r.r=!1},
a__(){return this.Hc(!1)},
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
h=new A.JG(r,q,o,n,e,s,f,p.z,m,l,k,j,f,!1,i,!1,f)
h=A.dO(f,h,!1,f,!1,f,f,f,!0,"",f,f,f,f,f,f,f,f,f,f,f)
e=p.d
if(e!=null)h=e.$4(a,h,g.x,g.y)
e=g.a.e
return e!=null?e.$3(a,h,g.f):h}}
A.adM.prototype={
$2(a,b){var s=this.a
s.az(new A.adL(s,a,b))},
$S:334}
A.adL.prototype={
$0(){var s=this.a
s.Q=this.b
s.as=this.c},
$S:0}
A.adO.prototype={
$0(){var s,r=this.a
r.xx(this.b)
r.as=r.Q=r.f=null
s=r.x
r.x=s==null?0:s+1
r.y=B.nV.N5(r.y,this.c)},
$S:0}
A.adN.prototype={
$0(){var s=this.a
s.f=this.b
s.as=s.Q=null},
$S:0}
A.adP.prototype={
$1(a){var s=this.a
if(s!=null)s.a.m()
return null},
$S:2}
A.adQ.prototype={
$0(){this.a.xx(null)},
$S:0}
A.adR.prototype={
$0(){var s=this.a
s.x=s.f=null
s.y=!1},
$S:0}
A.SK.prototype={}
A.Ef.prototype={
dS(a){var s=A.Wy(this.a,this.b,a)
s.toString
return s}}
A.u5.prototype={
dS(a){var s=A.akg(this.a,this.b,a)
s.toString
return s}}
A.lY.prototype={
dS(a){return A.on(this.a,this.b,a)}}
A.nA.prototype={
dS(a){var s=A.bc(this.a,this.b,a)
s.toString
return s}}
A.G3.prototype={}
A.p6.prototype={
gk6(){var s,r,q=this,p=q.d
if(p===$){s=q.a.d
r=A.e7(null,s,null,null,q)
q.d!==$&&A.bj()
q.d=r
p=r}return p},
gfI(){var s,r=this,q=r.e
if(q===$){s=r.gk6()
q=r.e=A.ep(r.a.c,s,null)}return q},
aA(){var s,r=this
r.aP()
s=r.gk6()
s.by()
s=s.c8$
s.b=!0
s.a.push(new A.a1m(r))
r.Eo()},
aY(a){var s,r=this
r.bq(a)
if(r.a.c!==a.c){r.gfI().m()
s=r.gk6()
r.e=A.ep(r.a.c,s,null)}r.gk6().e=r.a.d
if(r.Eo()){r.oX(new A.a1l(r))
s=r.gk6()
s.sn(0,0)
s.cW(0)}},
m(){this.gfI().m()
this.gk6().m()
this.Qf()},
a_I(a,b){var s
if(a==null)return
s=this.gfI()
a.syy(a.ak(0,s.gn(s)))
a.saT(0,b)},
Eo(){var s={}
s.a=!1
this.oX(new A.a1k(s,this))
return s.a}}
A.a1m.prototype={
$1(a){switch(a.a){case 3:this.a.a.toString
break
case 0:case 1:case 2:break}},
$S:4}
A.a1l.prototype={
$3(a,b,c){this.a.a_I(a,b)
return a},
$S:117}
A.a1k.prototype={
$3(a,b,c){var s
if(b!=null){if(a==null)a=c.$1(b)
s=a.b
if(!J.f(b,s==null?a.a:s))this.a.a=!0
else if(a.b==null)a.saT(0,a.a)}else a=null
return a},
$S:117}
A.of.prototype={
aA(){this.Os()
var s=this.gk6()
s.by()
s=s.ci$
s.b=!0
s.a.push(this.gUR())},
US(){this.az(new A.Uf())}}
A.Uf.prototype={
$0(){},
$S:0}
A.rQ.prototype={
an(){return new A.Mn(null,null,B.m)}}
A.Mn.prototype={
oX(a){this.CW=t.uh.a(a.$3(this.CW,this.a.w,new A.abB()))},
L(a){var s,r=this.CW
r.toString
s=this.gfI()
s=r.ak(0,s.gn(s))
return A.tP(this.a.r,null,B.cP,!0,s,null,null,B.aV)}}
A.abB.prototype={
$1(a){return new A.nA(t.F1.a(a),null)},
$S:336}
A.rR.prototype={
an(){return new A.Mo(null,null,B.m)}}
A.Mo.prototype={
oX(a){var s=this,r=s.CW
s.a.toString
s.CW=t.iH.a(a.$3(r,B.aG,new A.abC()))
s.cx=t.nr.a(a.$3(s.cx,s.a.z,new A.abD()))
r=t.mo
s.cy=r.a(a.$3(s.cy,s.a.Q,new A.abE()))
s.db=r.a(a.$3(s.db,s.a.at,new A.abF()))},
L(a){var s,r,q,p,o,n=this,m=n.a,l=m.w
m=m.x
s=n.CW
s.toString
r=n.gfI()
r=s.ak(0,r.gn(r))
s=n.cx
s.toString
q=n.gfI()
q=s.ak(0,q.gn(q))
s=n.a.Q
p=n.db
p.toString
o=n.gfI()
o=p.ak(0,o.gn(o))
o.toString
return new A.Jk(l,m,r,q,s,o,n.a.r,null)}}
A.abC.prototype={
$1(a){return new A.lY(t.ak.a(a),null)},
$S:337}
A.abD.prototype={
$1(a){return new A.aN(A.Tw(a),null,t.a7)},
$S:118}
A.abE.prototype={
$1(a){return new A.hM(t.iO.a(a),null)},
$S:48}
A.abF.prototype={
$1(a){return new A.hM(t.iO.a(a),null)},
$S:48}
A.r3.prototype={
m(){var s=this,r=s.dz$
if(r!=null)r.H(0,s.glP())
s.dz$=null
s.aR()},
cf(){this.dZ()
this.d3()
this.lQ()}}
A.kv.prototype={
bW(a){var s=A.h5(t.h,t.X)
return new A.uL(s,this,B.a8,A.n(this).h("uL<kv.T>"))}}
A.uL.prototype={
Ml(a,b){var s=this.b8,r=this.$ti,q=r.h("ce<1>?").a(s.i(0,a))
if(q!=null&&q.gO(q))return
s.k(0,a,A.d_(r.c))},
L7(a,b){var s,r=this.$ti,q=r.h("ce<1>?").a(this.b8.i(0,b))
if(q==null)return
if(!q.gO(q)){s=this.f
s.toString
s=r.h("kv<1>").a(s).a7j(a,q)
r=s}else r=!0
if(r)b.b7()}}
A.hZ.prototype={
c4(a){return a.f!==this.f},
bW(a){var s=new A.r4(A.h5(t.h,t.X),this,B.a8,A.n(this).h("r4<hZ.T>"))
this.f.X(0,s.gwY())
return s}}
A.r4.prototype={
bi(a,b){var s,r,q=this,p=q.f
p.toString
s=q.$ti.h("hZ<1>").a(p).f
r=b.f
if(s!==r){p=q.gwY()
s.H(0,p)
r.X(0,p)}q.Pc(0,b)},
b6(){var s,r=this
if(r.bw){s=r.f
s.toString
r.CS(r.$ti.h("hZ<1>").a(s))
r.bw=!1}return r.Pb()},
Ww(){this.bw=!0
this.h3()},
mC(a){this.CS(a)
this.bw=!1},
pQ(){var s=this,r=s.f
r.toString
s.$ti.h("hZ<1>").a(r).f.H(0,s.gwY())
s.vl()}}
A.G5.prototype={}
A.rg.prototype={}
A.ai1.prototype={
$1(a){return this.a.a=a},
$S:27}
A.ai2.prototype={
$1(a){return a.b},
$S:338}
A.ai3.prototype={
$1(a){var s,r,q,p
for(s=J.aH(a),r=this.a,q=this.b,p=0;p<s.gp(a);++p)q.k(0,A.aD(A.n(r.a[p].a).h("d2.T")),s.i(a,p))
return q},
$S:339}
A.d2.prototype={
j(a){return"LocalizationsDelegate["+A.aD(A.n(this).h("d2.T")).j(0)+"]"}}
A.Sv.prototype={
mv(a){return!0},
cZ(a,b){return new A.br(B.Dy,t.mq)},
l7(a){return!1},
j(a){return"DefaultWidgetsLocalizations.delegate(en_US)"}}
A.El.prototype={
gbN(){return B.u},
$ijD:1}
A.z0.prototype={
c4(a){return this.w!==a.w}}
A.vc.prototype={
an(){return new A.OQ(new A.bF(null,t.C),A.z(t.n,t.z),B.m)}}
A.OQ.prototype={
aA(){this.aP()
this.cZ(0,this.a.c)},
S9(a){var s,r,q,p,o,n,m=this.a.d,l=a.d
if(m.length!==l.length)return!0
s=A.a(m.slice(0),A.am(m))
r=A.a(l.slice(0),A.am(l))
for(q=0;q<s.length;++q){p=s[q]
o=r[q]
n=p instanceof A.bY?A.cW(p):null
m=A.aD(n==null?A.aX(p):n)
n=o instanceof A.bY?A.cW(o):null
if(m===A.aD(n==null?A.aX(o):n)){p.l7(o)
m=!1}else m=!0
if(m)return!0}return!1},
aY(a){var s,r=this
r.bq(a)
if(r.a.c.l(0,a.c)){r.a.toString
s=r.S9(a)}else s=!0
if(s)r.cZ(0,r.a.c)},
cZ(a,b){var s,r=this,q={},p=r.a.d,o=p.length
if(o===0){r.f=b
return}q.a=null
s=A.aDK(b,p).aF(new A.aef(q),t.Co)
q=q.a
if(q!=null){r.e=q
r.f=b}else{++$.l_.br$
s.aF(new A.aeg(r,b),t.H)}},
gHl(){return t.cC.a(J.aR(this.e,B.a_E)).gbN()},
L(a){var s,r,q,p=this,o=null
if(p.f==null)return B.dX
s=p.gHl()
p.f.toString
r=p.e
q=p.gHl()
return A.dO(o,new A.z0(p,r,A.akd(p.a.e,q),p.d),!1,o,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,s,o,o)}}
A.aef.prototype={
$1(a){return this.a.a=a},
$S:340}
A.aeg.prototype={
$1(a){var s=this.a
if(s.c!=null)s.az(new A.aee(s,a,this.b))
$.l_.Ih()},
$S:341}
A.aee.prototype={
$0(){var s=this.a
s.e=this.b
s.f=this.c},
$S:0}
A.w3.prototype={
F(){return"Orientation."+this.b}}
A.je.prototype={
rX(a,b,c,d,e){var s=this,r=c==null?s.c:c,q=a==null?s.f:a,p=e==null?s.r:e,o=d==null?s.e:d
return new A.je(s.a,s.b,r,s.d,o,q,p,s.w,!1,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch)},
yI(a){return this.rX(null,null,a,null,null)},
IX(a){return this.rX(a,null,null,null,null)},
a1Q(a,b){return this.rX(null,null,null,a,b)},
a1P(a,b){return this.rX(a,null,null,null,b)},
LM(a,b,c,d){var s,r,q,p,o,n,m=this,l=null
if(!(b||d||c||a))return m
s=m.f
r=b?0:l
q=d?0:l
p=c?0:l
r=s.om(a?0:l,r,p,q)
q=m.r
p=b?Math.max(0,q.a-s.a):l
o=d?Math.max(0,q.b-s.b):l
n=c?Math.max(0,q.c-s.c):l
return m.a1P(r,q.om(a?Math.max(0,q.d-s.d):l,p,n,o))},
a6u(a){var s=this,r=null,q=s.r,p=s.e,o=Math.max(0,q.d-p.d)
q=q.om(o,r,r,r)
return s.a1Q(p.om(0,r,r,r),q)},
l(a,b){var s=this
if(b==null)return!1
if(J.X(b)!==A.C(s))return!1
return b instanceof A.je&&b.a.l(0,s.a)&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.f.l(0,s.f)&&b.r.l(0,s.r)&&b.e.l(0,s.e)&&b.Q===s.Q&&b.as===s.as&&b.z===s.z&&b.y===s.y&&b.at===s.at&&b.ax===s.ax&&b.ay.l(0,s.ay)&&A.cX(b.ch,s.ch)},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,s.f,s.r,s.e,!1,s.Q,s.as,s.z,s.y,s.at,s.ax,s.ay,A.dj(s.ch),B.a,B.a,B.a,B.a)},
j(a){var s=this
return"MediaQueryData("+B.c.b5(A.a(["size: "+s.a.j(0),"devicePixelRatio: "+B.d.N(s.b,1),"textScaleFactor: "+B.d.N(s.c,1),"platformBrightness: "+s.d.j(0),"padding: "+s.f.j(0),"viewPadding: "+s.r.j(0),"viewInsets: "+s.e.j(0),"alwaysUse24HourFormat: false","accessibleNavigation: "+s.y,"highContrast: "+s.Q,"disableAnimations: "+s.as,"invertColors: "+s.z,"boldText: "+s.at,"navigationMode: "+s.ax.b,"gestureSettings: "+s.ay.j(0),"displayFeatures: "+A.h(s.ch)],t.s),", ")+")"}}
A.fn.prototype={
c4(a){return!this.f.l(0,a.f)}}
A.IA.prototype={
F(){return"NavigationMode."+this.b}}
A.z7.prototype={
an(){return new A.OY(B.m)}}
A.OY.prototype={
aA(){this.aP()
$.al.b4$.push(this)},
t5(){this.az(new A.aeB())},
Jc(){this.az(new A.aeD())},
Jb(){this.az(new A.aeC())},
L(a){var s
$.al.toString
s=A.aoQ($.cu())
return new A.fn(s,this.a.c,null)},
m(){B.c.u($.al.b4$,this)
this.aR()}}
A.aeB.prototype={
$0(){},
$S:0}
A.aeD.prototype={
$0(){},
$S:0}
A.aeC.prototype={
$0(){},
$S:0}
A.SM.prototype={}
A.vF.prototype={
L(a){var s,r=null
switch(A.lG().a){case 0:case 1:case 3:case 5:break
case 2:case 4:break}s=this.c
return A.avT(new A.ud(!0,new A.P7(A.dO(r,A.vH(new A.fV(B.mq,s==null?r:new A.tv(s,r,r),r),B.lS,r,r,r),!1,r,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),new A.a2V(this,a),r),r))}}
A.a2V.prototype={
$0(){A.Lu(B.Wh)},
$S:0}
A.qD.prototype={
fu(a){if(this.y1==null)return!1
return this.nd(a)},
K9(a){},
Ka(a,b){var s=this.y1
if(s!=null)s.$0()},
tF(a,b,c){}}
A.aeH.prototype={
yt(a){a.sjE(this.a)}}
A.Mt.prototype={
IQ(){var s=t.S,r=A.d_(s)
return new A.qD(B.b1,18,B.bt,A.z(s,t.o),r,null,null,A.z(s,t.V))},
Kp(a){a.y1=this.a}}
A.P7.prototype={
L(a){var s=this.d
return new A.kY(this.c,A.aZ([B.a_F,new A.Mt(s)],t.n,t.ob),B.aI,!1,new A.aeH(s),null)}}
A.IB.prototype={
L(a){var s,r,q=this,p=a.a4(t.I)
p.toString
s=A.a([],t.E)
r=q.c
if(r!=null)s.push(A.a22(r,B.h9))
r=q.d
if(r!=null)s.push(A.a22(r,B.ha))
r=q.e
if(r!=null)s.push(A.a22(r,B.hb))
return new A.tJ(new A.agz(q.f,q.r,p.w),s,null)}}
A.ry.prototype={
F(){return"_ToolbarSlot."+this.b}}
A.agz.prototype={
uk(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.b.i(0,B.h9)!=null){s=a.a
r=a.b
q=e.dR(B.h9,new A.aU(0,s,r,r)).a
switch(e.f.a){case 0:p=s-q
break
case 1:p=0
break
default:p=null}e.ea(B.h9,new A.u(p,0))}else q=0
if(e.b.i(0,B.hb)!=null){o=e.dR(B.hb,A.ajZ(a))
switch(e.f.a){case 0:n=0
break
case 1:n=a.a-o.a
break
default:n=null}m=o.a
e.ea(B.hb,new A.u(n,(a.b-o.b)/2))}else m=0
if(e.b.i(0,B.ha)!=null){s=a.a
r=e.e
l=Math.max(s-q-m-r*2,0)
k=e.dR(B.ha,A.ajZ(a).a1I(l))
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
default:f=null}e.ea(B.ha,new A.u(f,(a.b-k.b)/2))}},
n3(a){return a.d!==this.d||a.e!==this.e||a.f!==this.f}}
A.ne.prototype={
F(){return"RoutePopDisposition."+this.b}}
A.c6.prototype={
gue(){return B.rO},
jw(){},
ox(){var s=A.ali()
s.aF(new A.a5U(this),t.H)
return s},
ov(){var s=this.a
if(s==null)s=null
else{s.a.toString
s=!0}if(s===!0)A.ali().aF(new A.a5T(this),t.H)},
z4(a){},
fC(){var s=0,r=A.a2(t.ij),q,p=this
var $async$fC=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:q=p.gKG()?B.Uh:B.Bl
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$fC,r)},
gMt(){return!1},
kt(a){this.a2s(a)
return!0},
a2s(a){this.d.bV(0,null)},
m1(a){},
ow(a){},
z_(a){},
oe(){},
rQ(){},
m(){this.a=null},
gkK(){var s,r=this.a
if(r==null)return!1
r=r.e
r=new A.bx(r,A.am(r).h("bx<1,ds?>"))
s=r.mz(r,new A.a5X(),new A.a5Y())
if(s==null)return!1
return s.a===this},
gKG(){var s,r=this.a
if(r==null)return!1
r=r.e
r=new A.bx(r,A.am(r).h("bx<1,ds?>"))
s=r.ty(r,new A.a5Z(),new A.a6_())
if(s==null)return!1
return s.a===this},
gtK(){var s,r,q,p,o=this.a
if(o==null)return!1
for(o=o.e,s=o.length,r=0;r<s;++r){q=o[r]
if(q.a===this)return!1
p=q.d.a
if(p<=10&&p>=1)return!0}return!1},
ga4G(){var s=this.a
if(s==null)return!1
s=s.e
s=new A.bx(s,A.am(s).h("bx<1,ds?>"))
s=s.ty(s,new A.a5V(this),new A.a5W())
s=s==null?null:s.gkL()
return s===!0}}
A.a5U.prototype={
$1(a){var s,r=this.a.a
if(r==null)s=null
else{r.a.toString
s=!0}if(s===!0){r=r.x.gdN()
if(r!=null)r.uz()}},
$S:19}
A.a5T.prototype={
$1(a){var s=this.a.a
if(s!=null){s=s.x.gdN()
if(s!=null)s.uz()}},
$S:19}
A.a5X.prototype={
$1(a){return a!=null&&a.gkL()},
$S:26}
A.a5Y.prototype={
$0(){return null},
$S:3}
A.a5Z.prototype={
$1(a){return a!=null&&a.gkL()},
$S:26}
A.a6_.prototype={
$0(){return null},
$S:3}
A.a5V.prototype={
$1(a){return a!=null&&A.aqx(this.a).$1(a)},
$S:26}
A.a5W.prototype={
$0(){return null},
$S:3}
A.hk.prototype={
j(a){var s=this.a
s=s==null?"none":'"'+s+'"'
return"RouteSettings("+s+", "+A.h(this.b)+")"}}
A.jg.prototype={
t7(a,b){},
t6(a,b){},
z3(a,b){},
t8(a,b){},
Je(a,b){},
oz(){}}
A.mu.prototype={
c4(a){return a.f!=this.f}}
A.a5S.prototype={}
A.LS.prototype={}
A.Ek.prototype={}
A.vT.prototype={
an(){var s=null,r=A.a([],t.hi),q=$.bC(),p=t.a4
return new A.fr(r,new A.Ol(q),A.jc(s,p),A.jc(s,p),A.akp(!0,"Navigator",!0,!0,s,s,!1),new A.wK(0,q,t.rj),A.jC(!1),A.b5(t.S),s,A.z(t.wb,t.M),s,!0,s,s,s,B.m)},
a5y(a,b){return this.z.$2(a,b)}}
A.a3r.prototype={
$1(a){return a==null},
$S:343}
A.e5.prototype={
F(){return"_RouteLifecycle."+this.b}}
A.Pi.prototype={}
A.ds.prototype={
gcN(){var s,r
if(this.c){s=t.kd.a(this.a.b)
s.gcN()
r=A.h(s.gcN())
return"p+"+r}r=this.b
if(r!=null)return"r+"+r.gLY()
return null},
a3H(a,b,c,d){var s,r,q,p=this,o=p.d,n=p.a
n.a=b
n.jw()
s=p.d
if(s===B.CE||s===B.CF){r=n.ox()
p.d=B.CG
r.Ms(new A.afM(p,b))}else{n.z4(c)
p.d=B.cT}if(a)n.ow(null)
s=o===B.a13||o===B.CF
q=b.r
if(s)q.dl(0,new A.zk(n,d))
else q.dl(0,new A.rd(n,d))},
a3G(a,b){var s,r=this
r.d=B.a1_
s=r.a
if((s.d.a.a&30)!==0)return!0
if(!s.kt(r.w)){r.d=B.cT
return!1}r.w=null
return!0},
m(){var s,r,q,p,o,n,m={}
this.d=B.a11
s=this.a
r=s.gue()
q=new A.afK()
p=new A.aK(r,q,A.am(r).h("aK<1>"))
if(!p.ga5(p).q())s.m()
else{m.a=p.gp(p)
for(s=B.c.ga5(r),q=new A.qB(s,q);q.q();){r=s.gG(s)
o=A.b7("listener")
n=new A.afL(m,this,r,o)
o.b=n
r.d.X(0,n)}}},
ga7s(){var s=this.d.a
return s<=7&&s>=1},
gkL(){var s=this.d.a
return s<=10&&s>=1}}
A.afM.prototype={
$0(){var s=this.a
if(s.d===B.CG){s.d=B.cT
this.b.wt()}},
$S:0}
A.afK.prototype={
$1(a){return a.d.a},
$S:344}
A.afL.prototype={
$0(){var s=this,r=s.a;--r.a
s.c.d.H(0,s.d.aE())
if(r.a===0)s.b.a.m()},
$S:0}
A.afN.prototype={
$1(a){return a.a===this.a},
$S:52}
A.lt.prototype={}
A.rd.prototype={
kP(a){a.t7(this.a,this.b)}}
A.rc.prototype={
kP(a){a.t6(this.a,this.b)}}
A.zj.prototype={
kP(a){a.z3(this.a,this.b)}}
A.zk.prototype={
kP(a){a.t8(this.a,this.b)}}
A.fr.prototype={
aA(){var s,r,q,p,o=this
o.aP()
for(s=o.a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
$.hD().a.set(p,o)}o.Q=o.a.x
s=o.c.jQ(t.hS)
if(s==null)s=null
else{s=s.f
s.toString}t.cn.a(s)
o.xY(s==null?null:s.f)
o.a.toString
B.fx.tQ("selectSingleEntryHistory",t.H)},
iL(a,b){var s,r,q,p,o,n,m=this
m.mK(m.as,"id")
s=m.f
m.mK(s,"history")
for(;r=m.e,r.length!==0;)r.pop().m()
m.d=new A.bF(null,t.r9)
B.c.I(r,s.LZ(null,m))
m.a.toString
q=0
for(;!1;++q){p=B.Nd[q]
r=m.c
r.toString
r=p.yN(r)
o=$.ajH()
n=new A.ds(r,null,!0,B.m8,o,o,o)
m.e.push(n)
B.c.I(m.e,s.LZ(n,m))}if(s.y==null){s=m.a
r=m.e
o=s.f
B.c.I(r,J.rM(s.a5y(m,o),new A.a3q(m),t.ee))}m.wt()},
z6(a){var s,r=this
r.PA(a)
s=r.f
if(r.bn$!=null)s.bi(0,r.e)
else s.a_(0)},
gcN(){return this.a.y},
b7(){var s,r,q,p,o=this
o.Qj()
s=o.c.a4(t.hS)
o.xY(s==null?null:s.f)
for(r=o.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.P)(r),++p)r[p].a.rQ()},
xY(a){var s,r,q=this
if(q.z!=a){if(a!=null)$.hD().a.set(a,q)
s=q.z
if(s==null)s=null
else{r=$.hD()
A.oT(s)
s=r.a.get(s)}if(s===q){s=$.hD()
r=q.z
r.toString
s.a.set(r,null)}q.z=a
q.HI()}},
HI(){var s=this,r=s.z,q=s.a
if(r!=null)s.Q=B.c.V(q.x,A.a([r],t.yx))
else s.Q=q.x},
aY(a){var s,r,q,p,o=this
o.Qk(a)
s=a.x
if(s!==o.a.x){for(r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
$.hD().a.set(p,null)}for(s=o.a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
$.hD().a.set(p,o)}o.HI()}o.a.toString
for(s=o.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].a.rQ()},
dw(){var s,r,q,p=this.Q
p===$&&A.b()
s=p.length
r=0
for(;r<p.length;p.length===s||(0,A.P)(p),++r){q=p[r]
$.hD().a.set(q,null)}this.ng()},
cf(){var s,r,q,p
this.Qh()
s=this.Q
s===$&&A.b()
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
$.hD().a.set(p,this)}},
m(){var s,r,q,p=this
p.xY(null)
p.x.m()
for(s=p.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].m()
p.Ql()},
gDK(){var s,r,q,p=A.a([],t.tD)
for(s=this.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)B.c.I(p,s[q].a.gue())
return p},
wu(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null
a.ay=!0
s=a.e
r=s.length-1
q=s[r]
p=r>0?s[r-1]:a0
o=A.a([],t.hi)
for(s=a.w,n=a.r,m=a0,l=m,k=!1,j=!1;r>=0;){switch(q.d.a){case 1:i=a.iY(r-1,A.amq())
h=i>=0?a.e[i]:a0
h=h==null?a0:h.a
g=q.a
g.a=a
g.jw()
q.d=B.a12
n.dl(0,new A.rd(g,h))
continue
case 2:if(k||l==null){h=q.a
h.ov()
q.d=B.cT
if(l==null)h.ow(a0)
continue}break
case 3:case 4:case 6:h=p==null?a0:p.a
i=a.iY(r-1,A.amq())
g=i>=0?a.e[i]:a0
g=g==null?a0:g.a
q.a3H(l==null,a,h,g)
if(q.d===B.cT)continue
break
case 5:if(!j&&m!=null){q.a.m1(m)
q.f=m}j=!0
break
case 7:if(!j&&m!=null){q.a.m1(m)
q.f=m}k=!0
j=!0
break
case 8:i=a.iY(r,A.Bd())
h=i>=0?a.e[i]:a0
if(!q.a3G(a,h==null?a0:h.a))continue
if(!j){if(m!=null){q.a.m1(m)
q.f=m}m=q.a}h=q.a
i=a.iY(r,A.Bd())
g=i>=0?a.e[i]:a0
s.dl(0,new A.rc(h,g==null?a0:g.a))
if(q.d===B.m9)continue
k=!0
break
case 11:break
case 9:h=q.a
h=h.d.a
if((h.a&30)!==0)A.L(A.a6("Future already completed"))
h.fb(a0)
q.w=null
q.d=B.a0Z
continue
case 10:if(!j){if(m!=null)q.a.m1(m)
m=a0}i=a.iY(r,A.Bd())
h=i>=0?a.e[i]:a0
h=h==null?a0:h.a
q.d=B.a10
if(q.x)s.dl(0,new A.zj(q.a,h))
continue
case 12:if(!k&&l!=null)break
q.d=B.m9
continue
case 13:o.push(B.c.eb(a.e,r))
q=l
break
case 14:case 0:break}--r
f=r>0?a.e[r-1]:a0
l=q
q=p
p=f}a.Ub()
a.Ud()
a.a.toString
s=a.e
s=new A.bx(s,A.am(s).h("bx<1,ds?>"))
e=s.mz(s,new A.a3k(),new A.a3l())
d=e==null?a0:e.a.b.a
if(d!=null&&d!==a.at){A.apV(d,!1,a0)
a.at=d}for(s=o.length,c=0;c<o.length;o.length===s||(0,A.P)(o),++c){q=o[c]
for(n=q.a.gue(),h=n.length,b=0;b<n.length;n.length===h||(0,A.P)(n),++b)J.avu(n[b])
q.m()}if(a1){s=a.d
s===$&&A.b()
s=s.gbv()
if(s!=null)s.a6g(a.gDK())}if(a.bn$!=null)a.f.bi(0,a.e)
a.ay=!1},
wt(){return this.wu(!0)},
Ub(){var s,r=this,q=r.Q
q===$&&A.b()
if(q.length===0){r.w.a_(0)
r.r.a_(0)
return}for(q=r.r;!q.gO(q);){s=q.dU(0)
B.c.Z(r.Q,s.gpq())}for(q=r.w;!q.gO(q);){s=q.mM()
B.c.Z(r.Q,s.gpq())}},
Ud(){var s,r,q,p,o,n,m=this,l=null,k=m.e.length-1
for(;k>=0;){s=m.e[k]
r=s.d.a
if(!(r<=12&&r>=3)){--k
continue}q=m.UG(k+1,A.asD())
r=q==null
p=r?l:q.a
o=s.r
if(p!=o){if((r?l:q.a)==null){p=s.f
p=p!=null&&p===o}else p=!1
if(!p){p=s.a
p.ow(r?l:q.a)}s.r=r?l:q.a}--k
n=m.iY(k,A.asD())
r=n>=0?m.e[n]:l
p=r==null
o=p?l:r.a
if(o!=s.e){o=s.a
o.z_(p?l:r.a)
s.e=p?l:r.a}}},
F4(a,b){a=this.iY(a,b)
return a>=0?this.e[a]:null},
iY(a,b){while(!0){if(!(a>=0&&!b.$1(this.e[a])))break;--a}return a},
UG(a,b){var s
while(!0){s=this.e
if(!(a<s.length&&!b.$1(s[a])))break;++a}s=this.e
return a<s.length?s[a]:null},
r9(a,b,c,d){var s,r,q
if(b)this.a.toString
s=new A.hk(a,c)
r=d.h("c6<0?>?")
q=r.a(this.a.r.$1(s))
return q==null&&!b?r.a(this.a.w.$1(s)):q},
xF(a,b,c){return this.r9(a,!1,b,c)},
DI(a){this.SC()},
pl(a){var s=0,r=A.a2(t.y),q,p=this,o,n,m
var $async$pl=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)$async$outer:switch(s){case 0:m=p.e
m=new A.bx(m,A.am(m).h("bx<1,ds?>"))
o=m.mz(m,new A.a3m(),new A.a3n())
if(o==null){q=!1
s=1
break}s=3
return A.a4(o.a.fC(),$async$pl)
case 3:n=c
if(p.c==null){q=!0
s=1
break}m=p.e
m=new A.bx(m,A.am(m).h("bx<1,ds?>"))
if(o!==m.mz(m,new A.a3o(),new A.a3p())){q=!0
s=1
break}switch(n.a){case 2:q=!1
s=1
break $async$outer
case 0:p.a5W(a)
q=!0
s=1
break $async$outer
case 1:q=!0
s=1
break $async$outer}case 1:return A.a0(q,r)}})
return A.a1($async$pl,r)},
KZ(){return this.pl(null,t.X)},
a5i(a){return this.pl(a,t.X)},
Ln(a){var s=this,r=B.c.a4W(s.e,A.amq())
if(r.c){s.a.toString
if(null.$2(r.a,a)&&r.d===B.cT)r.d=B.ma}else{r.w=a
r.d=B.ma}if(r.d===B.ma)s.wu(!1)
s.DI(r.a)},
a5W(a){return this.Ln(a,t.X)},
hU(){return this.Ln(null,t.X)},
JO(a){var s,r=this,q=B.c.Kl(r.e,A.aqx(a)),p=r.e[q]
if(p.c&&p.d.a<8){s=r.F4(q-1,A.Bd())
s=s==null?null:s.a
r.w.dl(0,new A.rc(a,s))}p.d=B.m9
if(!r.ay)r.wu(!1)},
sHY(a){this.ch=a
this.CW.sn(0,a>0)},
a2w(){var s,r,q,p,o,n,m=this
m.sHY(m.ch+1)
if(m.ch===1){s=m.iY(m.e.length-1,A.Bd())
r=m.e[s].a
q=!r.gMt()&&s>0?m.F4(s-1,A.Bd()).a:null
p=m.Q
p===$&&A.b()
o=p.length
n=0
for(;n<p.length;p.length===o||(0,A.P)(p),++n)p[n].Je(r,q)}},
oz(){var s,r,q,p=this
p.sHY(p.ch-1)
if(p.ch===0){s=p.Q
s===$&&A.b()
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].oz()}},
VR(a){this.cx.D(0,a.gbY())},
VZ(a){this.cx.u(0,a.gbY())},
SC(){if($.bT.dy$===B.cJ){var s=this.d
s===$&&A.b()
s=$.al.ai$.z.i(0,s)
this.az(new A.a3j(s==null?null:s.tv(t.CE)))}s=this.cx
B.c.Z(A.aB(s,!0,A.n(s).c),$.al.ga0P())},
L(a){var s,r=this,q=null,p=r.gVY(),o=A.aog(a),n=r.bn$,m=r.d
m===$&&A.b()
r.a.toString
if(m.gbv()==null){s=r.gDK()
s=J.mG(s.slice(0),A.am(s).c)}else s=B.rO
return new A.mu(q,A.Gr(B.bV,new A.Bp(!1,A.aof(A.Fv(!0,q,A.ab7(n,new A.ps(s,B.W,m)),q,q,q,r.x,!1,q,q,q,q,q,!0),o),q),p,r.gVQ(),q,q,p),q)}}
A.a3q.prototype={
$1(a){var s,r,q=a.b.a
if(q!=null){s=this.a.as
r=s.y
if(r==null)r=s.$ti.h("c0.T").a(r)
s.Pz(0,r+1)
q=new A.Pc(r,q,null,B.mb)}else q=null
return A.aqw(a,B.m8,!1,q)},
$S:347}
A.a3k.prototype={
$1(a){return a!=null&&a.gkL()},
$S:26}
A.a3l.prototype={
$0(){return null},
$S:3}
A.a3m.prototype={
$1(a){return a!=null&&a.gkL()},
$S:26}
A.a3n.prototype={
$0(){return null},
$S:3}
A.a3o.prototype={
$1(a){return a!=null&&a.gkL()},
$S:26}
A.a3p.prototype={
$0(){return null},
$S:3}
A.a3j.prototype={
$0(){var s=this.a
if(s!=null)s.sI7(!0)},
$S:0}
A.ro.prototype={
F(){return"_RouteRestorationType."+this.b}}
A.QH.prototype={
gKJ(){return!0},
rU(){return A.a([this.a.a],t.f)}}
A.Pc.prototype={
rU(){var s=this,r=s.QB(),q=A.a([s.c,s.d],t.f),p=s.e
if(p!=null)q.push(p)
B.c.I(r,q)
return r},
yN(a){var s=a.xF(this.d,this.e,t.z)
s.toString
return s},
gLY(){return this.c}}
A.alr.prototype={
gKJ(){return!1},
rU(){A.azi(this.d)},
yN(a){var s=a.c
s.toString
return this.d.$2(s,this.e)},
gLY(){return this.c}}
A.Ol.prototype={
bi(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.y==null
if(a)c.y=A.z(t.N,t.lC)
s=t.f
r=A.a([],s)
q=c.y
q.toString
p=J.aR(q,null)
if(p==null)p=B.di
o=A.z(t.dR,t.lC)
q=c.y
q.toString
n=J.avA(J.Bn(q))
for(q=a1.length,m=b,l=a,k=!0,j=0;j<a1.length;a1.length===q||(0,A.P)(a1),++j){i=a1[j]
if(i.d.a>7){h=i.a
h.c.sn(0,b)
continue}if(i.c){l=l||r.length!==J.bL(p)
h=r.length
if(h!==0){g=m==null?b:m.gcN()
o.k(0,g,r)
n.u(0,g)}k=i.gcN()!=null
h=i.a
f=k?i.gcN():b
h.c.sn(0,f)
if(k){r=A.a([],s)
h=c.y
h.toString
p=J.aR(h,i.gcN())
if(p==null)p=B.di}else{r=B.di
p=B.di}m=i
continue}if(k){h=i.b
h=h==null?b:h.gKJ()
k=h===!0}else k=!1
h=i.a
f=k?i.gcN():b
h.c.sn(0,f)
if(k){h=i.b
f=h.b
h=f==null?h.b=h.rU():f
if(!l){f=J.aH(p)
e=f.gp(p)
d=r.length
l=e<=d||!J.f(f.i(p,d),h)}else l=!0
B.c.D(r,h)}}l=l||r.length!==J.bL(p)
c.TY(r,m,o,n)
if(l||n.gbG(n)){c.y=o
c.aC()}},
TY(a,b,c,d){var s,r=a.length
if(r!==0){s=b==null?null:b.gcN()
c.k(0,s,a)
d.u(0,s)}},
a_(a){if(this.y==null)return
this.y=null
this.aC()},
LZ(a,b){var s,r,q,p,o,n=A.a([],t.hi)
if(this.y!=null)s=a!=null&&a.gcN()==null
else s=!0
if(s)return n
s=this.y
s.toString
r=J.aR(s,a==null?null:a.gcN())
if(r==null)return n
for(s=J.av(r);s.q();){q=A.aBZ(s.gG(s))
p=q.yN(b)
o=$.ajH()
n.push(new A.ds(p,q,!1,B.m8,o,o,o))}return n},
rZ(){return null},
mo(a){a.toString
return J.anh(t.G.a(a),new A.adK(),t.dR,t.lC)},
Ko(a){this.y=a},
mS(){return this.y},
gm4(a){return this.y!=null}}
A.adK.prototype={
$2(a,b){return new A.ao(A.cs(a),A.eV(t.j.a(b),!0,t.K),t.cj)},
$S:348}
A.aeY.prototype={
$2(a,b){if(!a.a)a.H(0,b)},
$S:39}
A.zl.prototype={
cf(){this.dZ()
this.d3()
this.fi()},
m(){var s=this,r=s.bd$
if(r!=null)r.H(0,s.geK())
s.bd$=null
s.aR()}}
A.zm.prototype={
aY(a){this.bq(a)
this.oB()},
b7(){var s,r,q,p,o=this
o.cF()
s=o.bn$
r=o.gmO()
q=o.c
q.toString
q=A.pN(q)
o.fp$=q
p=o.lN(q,r)
if(r){o.iL(s,o.e2$)
o.e2$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.fo$.Z(0,new A.aeY())
s=r.bn$
if(s!=null)s.m()
r.bn$=null
r.Qi()}}
A.IF.prototype={
j(a){var s=A.a([],t.s)
this.cl(s)
return"Notification("+B.c.b5(s,", ")+")"},
cl(a){}}
A.di.prototype={
bW(a){return new A.zn(this,B.a8,this.$ti.h("zn<1>"))}}
A.zn.prototype={
Lc(a){var s,r=this.f
r.toString
s=this.$ti
s.h("di<1>").a(r)
if(s.c.b(a))return r.d.$1(a)
return!1},
mC(a){}}
A.eU.prototype={}
A.SR.prototype={}
A.fu.prototype={
smG(a){var s
if(this.b===a)return
this.b=a
s=this.e
if(s!=null)s.Ey()},
spj(a){if(this.c)return
this.c=!0
this.e.Ey()},
H(a,b){this.d.H(0,b)},
mL(a){var s,r=this.e
r.toString
this.e=null
if(r.c==null)return
B.c.u(r.d,this)
s=$.bT
if(s.dy$===B.Bm)s.cy$.push(new A.a3K(r))
else r.FL()},
h3(){var s=this.f.gbv()
if(s!=null)s.FN()},
j(a){return"<optimized out>#"+A.bP(this)+"(opaque: "+this.b+"; maintainState: "+this.c+")"},
$iag:1,
Iy(a){return this.a.$1(a)}}
A.a3K.prototype={
$1(a){this.a.FL()},
$S:2}
A.rf.prototype={
an(){return new A.zp(B.m)}}
A.zp.prototype={
aA(){this.aP()
this.a.c.d.sn(0,!0)},
m(){this.a.c.d.sn(0,!1)
this.a.toString
this.aR()},
L(a){var s=this.a
return new A.qt(s.d,s.c.Iy(a),null)},
FN(){this.az(new A.af2())}}
A.af2.prototype={
$0(){},
$S:0}
A.ps.prototype={
an(){return new A.pu(A.a([],t.tD),null,null,B.m)}}
A.pu.prototype={
aA(){this.aP()
this.a4o(0,this.a.c)},
x5(a,b){return this.d.length},
zT(a,b){b.e=this
this.az(new A.a3O(this,null,null,b))},
a4o(a,b){var s,r=b.length
if(r===0)return
for(s=0;s<r;++s)b[s].e=this
this.az(new A.a3N(this,null,null,b))},
a6g(a){var s,r,q,p,o,n=this
if(t.rF.b(a))s=a
else s=J.mG(a.slice(0),A.am(a).c)
if(s.length===0)return
r=n.d
if(A.cX(r,s))return
q=A.kG(r,t.u7)
for(r=s.length,p=0;p<r;++p){o=s[p]
if(o.e==null)o.e=n}n.az(new A.a3P(n,s,q,null,null))},
FL(){if(this.c!=null)this.az(new A.a3M())},
Ey(){this.az(new A.a3L())},
L(a){var s,r,q,p,o,n=A.a([],t.E)
for(s=this.d,r=s.length-1,q=!0,p=0;r>=0;--r){o=s[r]
if(q){++p
n.push(new A.rf(o,!0,o.f))
q=!o.b||!1}else if(o.c)n.push(new A.rf(o,!1,o.f))}s=t.m8
return new A.RP(n.length-p,this.a.d,A.aB(new A.cC(n,s),!1,s.h("bn.E")),null)}}
A.a3O.prototype={
$0(){var s=this,r=s.a
B.c.mr(r.d,r.x5(s.b,s.c),s.d)},
$S:0}
A.a3N.prototype={
$0(){var s=this,r=s.a
B.c.p9(r.d,r.x5(s.b,s.c),s.d)},
$S:0}
A.a3P.prototype={
$0(){var s,r,q=this,p=q.a,o=p.d
B.c.a_(o)
s=q.b
B.c.I(o,s)
r=q.c
r.a6o(s)
B.c.p9(o,p.x5(q.d,q.e),r)},
$S:0}
A.a3M.prototype={
$0(){},
$S:0}
A.a3L.prototype={
$0(){},
$S:0}
A.RP.prototype={
bW(a){var s=A.d_(t.h)
return new A.RQ(s,this,B.a8)},
aH(a){var s=a.a4(t.I)
s.toString
s=new A.rn(s.w,this.e,this.f,A.ay(),0,null,null,A.ay())
s.aK()
s.I(0,null)
return s},
aO(a,b){var s=this.e
if(b.aw!==s){b.aw=s
b.a9()}s=a.a4(t.I)
s.toString
b.sbN(s.w)
s=this.f
if(s!==b.b1){b.b1=s
b.av()
b.b3()}}}
A.RQ.prototype={
gaa(){return t.z2.a(A.eW.prototype.gaa.call(this))}}
A.rn.prototype={
ey(a){if(!(a.e instanceof A.e2))a.e=new A.e2(null,null,B.k)},
Y1(){if(this.ag!=null)return
this.ag=B.aw.Y(this.ac)},
sbN(a){var s=this
if(s.ac===a)return
s.ac=a
s.ag=null
s.a9()},
gqx(){var s,r,q,p,o=this
if(o.aw===A.ax.prototype.grR.call(o))return null
s=A.ax.prototype.ga33.call(o,o)
for(r=o.aw,q=t.B;r>0;--r){p=s.e
p.toString
s=q.a(p).ab$}return s},
eP(a){var s,r,q,p,o=this.gqx()
for(s=t.B,r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.jP(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.ab$}return r},
gjX(){return!0},
cg(a){return new A.a7(A.I(1/0,a.a,a.b),A.I(1/0,a.c,a.d))},
bM(){var s,r,q,p,o,n,m,l,k=this
k.K=!1
if(k.dA$-k.aw===0)return
k.Y1()
s=t.k.a(A.A.prototype.ga1.call(k))
r=A.BV(new A.a7(A.I(1/0,s.a,s.b),A.I(1/0,s.c,s.d)))
q=k.gqx()
for(s=t.B,p=t.uu;q!=null;){o=q.e
o.toString
s.a(o)
if(!o.gA_()){q.cw(r,!0)
n=k.ag
n.toString
m=k.k3
m.toString
l=q.k3
l.toString
o.a=n.lT(p.a(m.ad(0,l)))}else{n=k.k3
n.toString
m=k.ag
m.toString
k.K=A.app(q,o,n,m)||k.K}q=o.ab$}},
cX(a,b){var s,r,q,p=this,o={},n=o.a=p.aw===A.ax.prototype.grR.call(p)?null:p.bF$
for(s=t.B,r=0;r<p.dA$-p.aw;++r,n=q){n=n.e
n.toString
s.a(n)
if(a.o1(new A.afy(o,b,n),n.a,b))return!0
q=n.aU$
o.a=q}return!1},
ui(a,b){var s,r,q,p,o,n=this.gqx()
for(s=t.B,r=b.a,q=b.b;n!=null;){p=n.e
p.toString
s.a(p)
o=p.a
a.f3(n,new A.u(o.a+r,o.b+q))
n=p.ab$}},
aI(a,b){var s,r=this,q=r.K&&r.b1!==B.i,p=r.b9
if(q){q=r.cx
q===$&&A.b()
s=r.k3
p.sb_(0,a.kS(q,b,new A.D(0,0,0+s.a,0+s.b),r.gAR(),r.b1,p.a))}else{p.sb_(0,null)
r.ui(a,b)}},
m(){this.b9.sb_(0,null)
this.ia()},
h9(a){var s,r,q=this.gqx()
for(s=t.B;q!=null;){a.$1(q)
r=q.e
r.toString
q=s.a(r).ab$}},
jb(a){var s
switch(this.b1.a){case 0:return null
case 1:case 2:case 3:if(this.K){s=this.k3
s=new A.D(0,0,0+s.a,0+s.b)}else s=null
return s}}}
A.afy.prototype={
$2(a,b){return this.a.a.c_(a,b)},
$S:18}
A.Pt.prototype={
cf(){this.dZ()
this.d3()
this.fi()},
m(){var s=this,r=s.bd$
if(r!=null)r.H(0,s.geK())
s.bd$=null
s.aR()}}
A.SX.prototype={
ar(a){var s,r,q
this.eC(a)
s=this.a8$
for(r=t.B;s!=null;){s.ar(a)
q=s.e
q.toString
s=r.a(q).ab$}},
ao(a){var s,r,q
this.dX(0)
s=this.a8$
for(r=t.B;s!=null;){s.ao(0)
q=s.e
q.toString
s=r.a(q).ab$}}}
A.p_.prototype={
an(){var s=t.y
return new A.yK(A.aZ([!1,!0,!0,!0],s,s),null,null,B.m)},
jD(a){return A.Bg().$1(a)}}
A.yK.prototype={
aA(){var s,r,q=this
q.aP()
s=q.a
r=s.f
q.d=A.aqn(A.bf(s.e),r,q)
r=q.a
s=r.f
s=A.aqn(A.bf(r.e),s,q)
q.e=s
r=q.d
r.toString
q.f=new A.z8(A.a([r,s],t.ro))},
aY(a){var s,r=this
r.bq(a)
if(!a.f.l(0,r.a.f)||A.bf(a.e)!==A.bf(r.a.e)){s=r.d
s.toString
s.sam(0,r.a.f)
s=r.d
s.toString
s.sIq(A.bf(r.a.e))
s=r.e
s.toString
s.sam(0,r.a.f)
s=r.e
s.toString
s.sIq(A.bf(r.a.e))}},
xm(a){var s,r,q,p,o,n,m,l,k,j=this
if(!j.a.jD(a))return!1
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
if(a instanceof A.i7){q=a.e
if(q<0)n=s
else if(q>0)n=p
else n=null
m=n===s
s=j.c
s.d5(new A.w5(m,0))
s=j.w
s.k(0,m,!0)
s.i(0,m).toString
n.d=0
j.w.i(0,m).toString
s=a.f
if(s!==0){r=n.c
if(r!=null)r.al(0)
n.c=null
l=A.I(Math.abs(s),100,1e4)
s=n.f
if(n.a===B.h_)r=0.3
else{r=n.r
r===$&&A.b()
q=r.a
q=r.b.ak(0,q.gn(q))
r=q}s.a=r
r.toString
s.b=A.I(l*0.00006,r,0.5)
r=n.w
s=n.x
s===$&&A.b()
q=s.a
r.a=s.b.ak(0,q.gn(q))
r.b=Math.min(0.025+75e-8*l*l,1)
r=n.b
r===$&&A.b()
r.e=A.cb(0,B.d.ba(0.15+l*0.02),0)
r.kI(0,0)
n.as=0.5
n.a=B.a0x}else{s=a.d
if(s!=null){p=a.b.gaa()
p.toString
t.x.a(p)
o=p.k3
o.toString
k=p.l3(s.d)
switch(A.bf(r.e).a){case 0:n.toString
s=o.b
n.Lv(0,Math.abs(q),o.a,A.I(k.b,0,s),s)
break
case 1:n.toString
s=o.a
n.Lv(0,Math.abs(q),o.b,A.I(k.a,0,s),s)
break}}}}else if(a instanceof A.jq||a instanceof A.im)if(a.gJn()!=null){s=j.d
if(s.a===B.h0)s.kd(B.d4)
s=j.e
if(s.a===B.h0)s.kd(B.d4)}j.r=A.C(a)
return!1},
m(){this.d.m()
this.e.m()
this.Re()},
L(a){var s=this,r=null,q=s.a,p=s.d,o=s.e,n=q.e,m=s.f
return new A.di(s.gxl(),new A.ij(A.E4(new A.ij(q.w,r),new A.Ok(p,o,n,m),r,r,B.U),r),r,t.Bf)}}
A.nW.prototype={
F(){return"_GlowState."+this.b}}
A.yJ.prototype={
sam(a,b){if(this.ax.l(0,b))return
this.ax=b
this.aC()},
sIq(a){if(this.ay===a)return
this.ay=a
this.aC()},
m(){var s=this,r=s.b
r===$&&A.b()
r.m()
r=s.y
r===$&&A.b()
r.w.c7$.u(0,r)
r.Df()
r=s.c
if(r!=null)r.al(0)
s.dY()},
Lv(a,b,c,d,e){var s,r,q,p=this,o=p.c
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
s.b=Math.max(1-1/(0.7*Math.sqrt(p.at*q)),A.iO(o.ak(0,r.gn(r))))
r=d/e
p.Q=r
if(r!==p.as){o=p.y
o===$&&A.b()
if(!o.ga4P())o.n9(0)}else{o=p.y
o===$&&A.b()
o.he(0)
p.z=null}o=p.b
o===$&&A.b()
o.e=B.nB
if(p.a!==B.h0){o.kI(0,0)
p.a=B.h0}else{o=o.r
if(!(o!=null&&o.a!=null))p.aC()}p.c=A.cf(B.nB,new A.ads(p))},
vR(a){var s=this
if(a!==B.a_)return
switch(s.a.a){case 1:s.kd(B.d4)
break
case 3:s.a=B.h_
s.at=0
break
case 2:case 0:break}},
kd(a){var s,r,q=this,p=q.a
if(p===B.CA||p===B.h_)return
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
p.kI(0,0)
q.a=B.CA},
a_a(a){var s,r=this,q=r.z
if(q!=null){q=q.a
s=r.Q
r.as=s-(s-r.as)*Math.pow(2,-(a.a-q)/$.au0().a)
r.aC()}if(A.Be(r.Q,r.as,0.001)){q=r.y
q===$&&A.b()
q.he(0)
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
m=$.ar().bm()
l=j.ax
k=i.a
m.sam(0,A.b4(B.d.ba(255*i.b.ak(0,k.gn(k))),l.gn(l)>>>16&255,l.gn(l)>>>8&255,l.gn(l)&255))
a.cC(0)
a.aD(0,0,j.d+j.e)
a.dG(0,1,n*q)
a.ko(new A.D(0,0,0+s,0+o))
a.ip(new A.u(s/2*(0.5+r),o-p),p,m)
a.cz(0)},
j(a){return"_GlowController(color: "+this.ax.j(0)+", axis: "+A.aEO(this.ay)+")"}}
A.ads.prototype={
$0(){return this.a.kd(B.hH)},
$S:0}
A.Ok.prototype={
G6(a,b,c,d,e){var s
if(c==null)return
switch(A.k0(d,e)){case B.A:c.aI(a,b)
break
case B.z:a.cC(0)
a.aD(0,0,b.b)
a.dG(0,1,-1)
c.aI(a,b)
a.cz(0)
break
case B.af:a.cC(0)
a.kW(0,1.5707963267948966)
a.dG(0,1,-1)
c.aI(a,new A.a7(b.b,b.a))
a.cz(0)
break
case B.ay:a.cC(0)
s=b.a
a.aD(0,s,0)
a.kW(0,1.5707963267948966)
c.aI(a,new A.a7(b.b,s))
a.cz(0)
break}},
aI(a,b){var s=this,r=s.d
s.G6(a,b,s.b,r,B.nP)
s.G6(a,b,s.c,r,B.nO)},
i6(a){return a.b!=this.b||a.c!=this.c},
j(a){return"_GlowingOverscrollIndicatorPainter("+A.h(this.b)+", "+A.h(this.c)+")"}}
A.qe.prototype={
an(){return new A.Ad(null,null,B.m)},
jD(a){return A.Bg().$1(a)}}
A.Ad.prototype={
gkh(){var s,r,q,p,o,n,m=this,l=null,k=m.d
if(k===$){s=t.a7
r=new A.aN(0,0,s)
q=new A.Ac(r,B.mg,$.bC())
p=A.e7(l,l,l,l,m)
p.by()
o=p.c8$
o.b=!0
o.a.push(q.gvQ())
q.a!==$&&A.eG()
q.a=p
n=A.ep(B.n8,p,l)
n.a.X(0,q.ger())
t.m.a(n)
q.b!==$&&A.eG()
q.b=new A.b0(n,r,s.h("b0<aI.T>"))
m.d!==$&&A.bj()
m.d=q
k=q}return k},
xm(a){var s,r,q,p,o,n,m=this
if(!m.a.jD(a))return!1
if(a instanceof A.i7){m.f=a
J.X(m.e)
s=a.e
r=m.c
r.d5(new A.w5(s<0,0))
m.r=!0
r=a.f
if(r!==0){s=m.gkh()
q=A.I(Math.abs(r),1,1e4)
r=s.c
p=s.b
p===$&&A.b()
o=p.a
r.a=p.b.ak(0,o.gn(o))
r.b=Math.min(0.016+1.01/q,1)
r=s.a
r===$&&A.b()
r.e=A.cb(0,B.d.ba(q*0.02),0)
r.kI(0,0)
s.d=B.a15}else if(a.d!=null){r=a.a.d
r.toString
n=A.I(Math.abs(s)/r+m.gkh().e,0,1)
r=m.gkh()
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
o.e=B.hI
if(r.d!==B.mh){o.kI(0,0)
r.d=B.mh}else{s=o.r
if(!(s!=null&&s.a!=null))r.aC()}}}else if(a instanceof A.jq||a instanceof A.im){s=m.gkh()
if(s.d===B.mh)s.kd(B.hI)}m.e=a
return!1},
Uo(a){switch(this.a.c.a){case 0:return a>0?B.mj:B.mi
case 1:return a>0?B.e5:B.he
case 2:return a>0?B.mi:B.mj
case 3:return a>0?B.he:B.e5}},
m(){var s=this.gkh(),r=s.a
r===$&&A.b()
r.m()
s.dY()
this.Rn()},
L(a){var s={},r=a.a4(t.l).f
s.a=null
return new A.di(this.gxl(),A.lR(this.gkh(),new A.age(s,this,r.a),null),null,t.Bf)}}
A.age.prototype={
$2(a,b){var s,r,q,p,o,n,m=this,l=m.b,k=l.gkh().b
k===$&&A.b()
s=k.a
s=k.b.ak(0,s.gn(s))
switch(A.bf(l.a.c).a){case 0:r=1+s
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
p=l.Uo(k==null?0:k)
k=l.f
if(k==null)o=null
else{k=k.a.d
k.toString
o=k}if(o==null)o=m.a.a
k=A.vw(r,q,1)
l=l.a
n=A.aq2(p,l.f,k,!0)
return A.anJ(n,s!==0&&o!==m.a.a?l.e:B.i)},
$S:349}
A.o3.prototype={
F(){return"_StretchState."+this.b}}
A.Ac.prototype={
vR(a){var s=this
if(a!==B.a_)return
switch(s.d.a){case 1:s.kd(B.hI)
break
case 3:s.d=B.mg
s.e=0
break
case 2:case 0:break}},
kd(a){var s,r,q=this,p=q.d
if(p===B.CH||p===B.mg)return
p=q.c
s=q.b
s===$&&A.b()
r=s.a
p.a=s.b.ak(0,r.gn(r))
p.b=0
p=q.a
p===$&&A.b()
p.e=a
p.kI(0,0)
q.d=B.CH},
j(a){return"_StretchController()"}}
A.w5.prototype={
cl(a){this.Qm(a)
a.push("side: "+(this.a?"leading edge":"trailing edge"))}}
A.zr.prototype={
cl(a){var s,r
this.vm(a)
s=this.cU$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.AO.prototype={
cf(){this.dZ()
this.d3()
this.fi()},
m(){var s=this,r=s.bd$
if(r!=null)r.H(0,s.geK())
s.bd$=null
s.aR()}}
A.AV.prototype={
cf(){this.dZ()
this.d3()
this.fi()},
m(){var s=this,r=s.bd$
if(r!=null)r.H(0,s.geK())
s.bd$=null
s.aR()}}
A.A8.prototype={
l(a,b){if(b==null)return!1
if(J.X(b)!==A.C(this))return!1
return b instanceof A.A8&&A.cX(b.a,this.a)},
gt(a){return A.dj(this.a)},
j(a){return"StorageEntryIdentifier("+B.c.b5(this.a,":")+")"}}
A.a3Q.prototype={
DJ(a){var s=A.a([],t.D5)
if(A.ap1(a,s))a.BC(new A.a3R(s))
return s},
Mw(a,b){var s,r=this
if(r.a==null)r.a=A.z(t.K,t.z)
s=r.DJ(a)
if(s.length!==0)r.a.k(0,new A.A8(s),b)},
LD(a){var s
if(this.a==null)return null
s=this.DJ(a)
return s.length!==0?this.a.i(0,new A.A8(s)):null}}
A.a3R.prototype={
$1(a){return A.ap1(a,this.a)},
$S:41}
A.pw.prototype={
L(a){return this.c}}
A.IQ.prototype={
Ik(a,b,c){var s=t.sa.a(B.c.gbp(this.d))
if(s.ac!=null){s.ac=a
return A.bD(null,t.H)}return s.hw(s.kZ(a),b,c)},
tT(a){var s=t.sa.a(B.c.gbp(this.d))
if(s.ac!=null){s.ac=a
return}s.dQ(s.kZ(a))},
J0(a,b,c){var s=null,r=new A.lu(this.z,this.as,B.fC,a,b,!0,s,A.jC(!1),$.bC())
r.Dn(b,s,!0,c,a)
r.Do(b,s,s,!0,c,a)
return r},
ar(a){this.PO(a)
t.sa.a(a).spX(this.as)}}
A.IR.prototype={}
A.lu.prototype={
zi(a,b,c,d,e,f){return this.PY(a,b,c,d,e,null)},
spX(a){var s,r=this
if(r.aw===a)return
s=r.gjG(r)
r.aw=a
if(s!=null)r.zD(r.kZ(s))},
gqM(){var s=this.ax
s.toString
return Math.max(0,s*(this.aw-1)/2)},
q2(a,b){var s=Math.max(0,a-this.gqM())/(b*this.aw),r=B.d.Bc(s)
if(Math.abs(s-r)<1e-10)return r
return s},
kZ(a){var s=this.ax
s.toString
return a*s*this.aw+this.gqM()},
gjG(a){var s,r,q=this,p=q.at
if(p!=null)s=!(q.z!=null&&q.Q!=null)
else s=!0
if(s)p=null
else{s=q.ac
if(s==null){p.toString
s=q.z
s.toString
r=q.Q
r.toString
r=A.I(p,s,r)
s=q.ax
s.toString
s=q.q2(r,s)
p=s}else p=s}return p},
C4(){var s,r,q=this,p=q.w,o=p.c
o.toString
o=A.a3S(o)
if(o!=null){p=p.c
p.toString
s=q.ac
if(s==null){s=q.at
s.toString
r=q.ax
r.toString
r=q.q2(s,r)
s=r}o.Mw(p,s)}},
M0(){var s,r,q
if(this.at==null){s=this.w
r=s.c
r.toString
r=A.a3S(r)
if(r==null)q=null
else{s=s.c
s.toString
q=r.LD(s)}if(q!=null)this.ag=q}},
C3(){var s,r=this,q=r.ac
if(q==null){q=r.at
q.toString
s=r.ax
s.toString
s=r.q2(q,s)
q=s}r.w.e.sn(0,q)
q=$.hn.ac$
q===$&&A.b()
q.JT()},
M_(a,b){if(b)this.ag=a
else this.dQ(this.kZ(a))},
o8(a){var s,r,q,p,o=this,n=o.ax
n=n!=null?n:null
if(a===n)return!0
o.PU(a)
s=o.at
s=s!=null?s:null
if(s==null)r=o.ag
else if(n===0){q=o.ac
q.toString
r=q}else{n.toString
r=o.q2(s,n)}p=o.kZ(r)
o.ac=a===0?r:null
if(p!==s){o.at=p
return!1}return!0},
ki(a){var s
this.PZ(a)
if(!(a instanceof A.lu))return
s=a.ac
if(s!=null)this.ac=s},
o5(a,b){var s=a+this.gqM()
return this.PS(s,Math.max(s,b-this.gqM()))},
fS(){var s,r,q,p,o,n=this,m=null,l=n.z
if(l!=null&&n.Q!=null)l.toString
else l=m
if(n.z!=null&&n.Q!=null){s=n.Q
s.toString}else s=m
r=n.at
r=r!=null?r:m
q=n.ax
q=q!=null?q:m
p=n.w.a.c
o=n.aw
return new A.IR(o,l,s,r,q,p)}}
A.qV.prototype={
kl(a){return new A.qV(!1,this.hy(a))},
glS(){return this.b}}
A.pv.prototype={
kl(a){return new A.pv(this.hy(a))},
UD(a){var s,r
if(a instanceof A.lu){s=a.gjG(a)
s.toString
return s}s=a.at
s.toString
r=a.ax
r.toString
return s/r},
UE(a,b){var s
if(a instanceof A.lu)return a.kZ(b)
s=a.ax
s.toString
return b*s},
lY(a,b){var s,r,q,p,o,n=this
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
if(s)return n.PQ(a,b)
q=n.gpN()
p=n.UD(a)
s=q.c
if(b<-s)p-=0.5
else if(b>s)p+=0.5
o=n.UE(a,B.d.Bc(p))
s=a.at
s.toString
if(o!==s){s=n.gla()
r=a.at
r.toString
return new A.l2(o,A.A6(s,r-o,b),q)}return null}}
A.w6.prototype={
an(){return new A.Pw(B.m)}}
A.Pw.prototype={
aA(){this.aP()
this.d=this.a.r.z},
Uu(a){var s,r
this.a.toString
switch(0){case 0:s=a.a4(t.I)
s.toString
r=A.ajr(s.w)
this.a.toString
return r}},
L(a){var s,r,q,p=this,o=p.Uu(a),n=p.a.w
n=new A.pv(B.zM.hy(n))
n=new A.qV(!1,null).hy(n)
s=p.a
r=s.Q
s=s.r
q=A.a6L(a).a1K(!1)
return new A.di(new A.af3(p),A.apB(o,s,r,new A.qV(!1,n),null,q,new A.af4(p,o)),null,t.Bf)}}
A.af3.prototype={
$1(a){if(a.cU$===0)this.a.a.toString
return!1},
$S:25}
A.af4.prototype={
$2(a,b){var s=this.a.a
return new A.nL(this.b,b,0,B.EF,s.as,A.a([new A.L0(s.r.as,!0,s.z,null)],t.E),null)},
$S:350}
A.i9.prototype={
gmG(){return!0},
gyw(){return!1},
Iz(a){return!0}}
A.Je.prototype={
aH(a){var s=new A.K5(this.d,0,!1,!1,A.ay())
s.aK()
return s},
aO(a,b){b.sa5M(this.d)
b.sa6a(0)
b.sa0U(!1)
b.sa0T(!1)}}
A.a2M.prototype={}
A.a4d.prototype={}
A.Ei.prototype={
xc(a){return this.Xn(a)},
Xn(a){var s=0,r=A.a2(t.H),q,p=this,o,n,m
var $async$xc=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:n=A.el(a.b)
m=p.a
if(!m.R(0,n)){s=1
break}m=m.i(0,n)
m.toString
o=a.a
if(o==="Menu.selectedCallback"){m.ga82().$0()
m.ga5F()
o=$.al.ai$.f.f.e
o.toString
A.avH(o,m.ga5F(),t.q)}else if(o==="Menu.opened")m.ga81(m).$0()
else if(o==="Menu.closed")m.ga80(m).$0()
case 1:return A.a0(q,r)}})
return A.a1($async$xc,r)}}
A.pA.prototype={
c4(a){return this.f!=a.f}}
A.l0.prototype={
an(){return new A.QI(null,A.z(t.wb,t.M),null,!0,null,B.m)}}
A.QI.prototype={
gcN(){return this.a.d},
iL(a,b){},
L(a){return A.ab7(this.bn$,this.a.c)}}
A.y2.prototype={
c4(a){return a.f!=this.f}}
A.wO.prototype={
an(){return new A.zG(B.m)}}
A.zG.prototype={
b7(){var s,r=this
r.cF()
s=r.c
s.toString
r.r=A.pN(s)
r.x9()
if(r.d==null){r.a.toString
r.d=!1}},
aY(a){this.bq(a)
this.x9()},
gFC(){this.a.toString
return!1},
x9(){var s,r=this
if(r.gFC()&&!r.w){r.w=!0;++$.l_.br$
s=$.hn.ac$
s===$&&A.b()
s.ga6P().aF(new A.afF(r),t.P)}},
YU(){var s,r=this
r.e=!1
r.f=null
s=$.hn.ac$
s===$&&A.b()
s.H(0,r.gxy())
r.x9()},
m(){if(this.e){var s=$.hn.ac$
s===$&&A.b()
s.H(0,this.gxy())}this.aR()},
L(a){var s,r,q=this,p=q.d
p.toString
if(p&&q.gFC())return B.dX
p=q.r
if(p==null)p=q.f
s=q.a
r=s.d
return A.ab7(p,new A.l0(s.c,r,null))}}
A.afF.prototype={
$1(a){var s,r=this.a
r.w=!1
if(r.c!=null){s=$.hn.ac$
s===$&&A.b()
s.X(0,r.gxy())
r.az(new A.afE(r,a))}$.l_.Ih()},
$S:351}
A.afE.prototype={
$0(){var s=this.a
s.f=this.b
s.e=!0
s.d=!1},
$S:0}
A.dF.prototype={
gm4(a){return!0},
m(){var s=this,r=s.c
if(r!=null){r=r.fo$.u(0,s)
r.toString
s.H(0,r)
s.c=s.b=null}s.dY()
s.a=!0}}
A.il.prototype={
z6(a){},
mK(a,b){var s,r,q=this,p=q.bn$
p=p==null?null:J.e6(p.gj0(),b)
s=p===!0
r=s?a.mo(J.aR(q.bn$.gj0(),b)):a.rZ()
if(a.b==null){a.b=b
a.c=q
p=new A.a5Q(q,a)
a.X(0,p)
q.fo$.k(0,a,p)}a.Ko(r)
if(!s&&a.gm4(a)&&q.bn$!=null)q.y4(a)},
oB(){var s,r,q=this
if(q.fp$!=null){s=q.bn$
s=s==null?null:s.e
s=s==q.gcN()||q.gmO()}else s=!0
if(s)return
r=q.bn$
if(q.lN(q.fp$,!1))if(r!=null)r.m()},
gmO(){var s,r,q=this
if(q.e2$)return!0
if(q.gcN()==null)return!1
s=q.c
s.toString
r=A.pN(s)
if(r!=q.fp$){if(r==null)s=null
else{s=r.c
s=s==null?null:s.d
s=s===!0}s=s===!0}else s=!1
return s},
lN(a,b){var s,r,q=this
if(q.gcN()==null||a==null)return q.GU(null,b)
if(b||q.bn$==null){s=q.gcN()
s.toString
return q.GU(a.a11(s,q),b)}s=q.bn$
s.toString
r=q.gcN()
r.toString
s.a6v(r)
r=q.bn$
r.toString
a.ii(r)
return!1},
GU(a,b){var s,r=this,q=r.bn$
if(a==q)return!1
r.bn$=a
if(!b){if(a!=null){s=r.fo$
new A.ba(s,A.n(s).h("ba<1>")).Z(0,r.ga_y())}r.z6(q)}return!0},
y4(a){var s,r=a.gm4(a),q=this.bn$
if(r){if(q!=null){r=a.b
r.toString
s=a.mS()
if(!J.f(J.aR(q.gj0(),r),s)||!J.e6(q.gj0(),r)){J.cL(q.gj0(),r,s)
q.lx()}}}else if(q!=null){r=a.b
r.toString
q.a6n(0,r,t.K)}}}
A.a5Q.prototype={
$0(){var s=this.a
if(s.bn$==null)return
s.y4(this.b)},
$S:0}
A.ahd.prototype={
$2(a,b){if(!a.a)a.H(0,b)},
$S:39}
A.SY.prototype={
aY(a){this.bq(a)
this.oB()},
b7(){var s,r,q,p,o=this
o.cF()
s=o.bn$
r=o.gmO()
q=o.c
q.toString
q=A.pN(q)
o.fp$=q
p=o.lN(q,r)
if(r){o.iL(s,o.e2$)
o.e2$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.fo$.Z(0,new A.ahd())
s=r.bn$
if(s!=null)s.m()
r.bn$=null
r.aR()}}
A.c0.prototype={
sn(a,b){var s=this.y
if(b==null?s!=null:b!==s){this.y=b
this.z8(s)}},
Ko(a){this.y=a}}
A.hy.prototype={
rZ(){return this.cy},
z8(a){this.aC()},
mo(a){return A.n(this).h("hy.T").a(a)},
mS(){var s=this.y
return s==null?A.n(this).h("c0.T").a(s):s}}
A.zF.prototype={
mo(a){return this.Qz(a)},
mS(){var s=this.QA()
s.toString
return s}}
A.wK.prototype={}
A.wJ.prototype={}
A.ahe.prototype={
$2(a,b){if(!a.a)a.H(0,b)},
$S:39}
A.pP.prototype={}
A.Km.prototype={
an(){return new A.rp(new A.QF($.bC()),null,A.z(t.wb,t.M),null,!0,null,B.m,this.$ti.h("rp<1>"))}}
A.wP.prototype={
F(){return"RouteInformationReportingType."+this.b}}
A.rp.prototype={
gcN(){return this.a.r},
aA(){var s,r=this
r.aP()
s=r.a.c
if(s!=null)s.X(0,r.gqI())
r.a.f.a03(r.gwI())
r.a.e.X(0,r.gwT())},
iL(a,b){var s,r,q=this,p=q.f
q.mK(p,"route")
s=p.y
r=s==null
if((r?A.n(p).h("c0.T").a(s):s)!=null){p=r?A.n(p).h("c0.T").a(s):s
p.toString
q.r1(p,new A.afU(q))}else{p=q.a.c
if(p!=null)q.r1(p.a,new A.afV(q))}},
Zl(){var s=this
if(s.w||s.a.c==null)return
s.w=!0
$.bT.cy$.push(s.gYX())},
YY(a){var s,r,q,p,o=this
o.w=!1
s=o.f
r=s.y
q=r==null
if((q?A.n(s).h("c0.T").a(r):r)!=null){s=q?A.n(s).h("c0.T").a(r):r
s.toString
r=o.a.c
r.toString
q=o.e
q.toString
if(q!==B.Uf)p=q===B.lz&&r.b.a==s.a
else p=!0
B.fx.tQ("selectMultiEntryHistory",t.H)
q=s.a
q.toString
A.apV(q,p,s.b)
r.b=r.a=s}o.e=B.lz},
Z5(){this.a.e.ga7Q()
this.a.toString
return null},
qU(){var s=this
s.f.sn(0,s.Z5())
if(s.e==null)s.e=B.lz
s.Zl()},
b7(){var s,r=this
r.r=!0
r.Rj()
s=r.a.c
if(s!=null&&r.r)r.r1(s.a,new A.afT(r))
r.r=!1
r.qU()},
aY(a){var s,r,q,p=this
p.Rk(a)
s=p.a
r=a.c
q=s.c==r
if(q)s.f===a.f
p.d=new A.B()
if(!q){s=r==null
if(!s)r.H(0,p.gqI())
q=p.a.c
if(q!=null)q.X(0,p.gqI())
s=s?null:r.a
r=p.a.c
if(s!=(r==null?null:r.a))p.Fm()}s=a.f
if(p.a.f!==s){r=p.gwI()
s.a6p(r)
p.a.f.a03(r)}p.a.toString
s=p.gwT()
a.e.H(0,s)
p.a.e.X(0,s)
p.qU()},
m(){var s=this,r=s.a.c
if(r!=null)r.H(0,s.gqI())
s.a.f.a6p(s.gwI())
s.a.e.H(0,s.gwT())
s.d=null
s.Rl()},
r1(a,b){var s,r,q=this
q.r=!1
q.d=new A.B()
s=q.a.d
s.toString
r=q.c
r.toString
s.a85(a,r).aF(q.YF(q.d,b),t.H)},
YF(a,b){return new A.afR(this,a,b)},
Fm(){var s=this
s.r=!0
s.r1(s.a.c.a,new A.afO(s))},
UX(){var s=this
s.d=new A.B()
return s.a.e.a86().aF(s.W3(s.d),t.y)},
W3(a){return new A.afP(this,a)},
GB(){this.az(new A.afS())
this.qU()
return new A.br(null,t.E8)},
W4(){this.az(new A.afQ())
this.qU()},
L(a){var s=this.bn$,r=this.a,q=r.c,p=r.f,o=r.d
r=r.e
return A.ab7(s,new A.QN(q,p,o,r,this,new A.hK(r.grK(),null),null))}}
A.afU.prototype={
$0(){return this.a.a.e.ga7F()},
$S(){return this.a.$ti.h("ah<~>(1)()")}}
A.afV.prototype={
$0(){return this.a.a.e.ga7E()},
$S(){return this.a.$ti.h("ah<~>(1)()")}}
A.afT.prototype={
$0(){return this.a.a.e.gNr()},
$S(){return this.a.$ti.h("ah<~>(1)()")}}
A.afR.prototype={
$1(a){var s=0,r=A.a2(t.H),q,p=this,o,n
var $async$$1=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:o=p.a
n=p.b
if(o.d!=n){s=1
break}s=3
return A.a4(p.c.$0().$1(a),$async$$1)
case 3:if(o.d==n)o.GB()
case 1:return A.a0(q,r)}})
return A.a1($async$$1,r)},
$S(){return this.a.$ti.h("ah<~>(1)")}}
A.afO.prototype={
$0(){return this.a.a.e.gNr()},
$S(){return this.a.$ti.h("ah<~>(1)()")}}
A.afP.prototype={
$1(a){var s=this.a
if(this.b!=s.d)return new A.br(!0,t.a9)
s.GB()
return new A.br(a,t.a9)},
$S:353}
A.afS.prototype={
$0(){},
$S:0}
A.afQ.prototype={
$0(){},
$S:0}
A.QN.prototype={
c4(a){if(this.f==a.f)this.r===a.r
return!0}}
A.QF.prototype={
rZ(){return null},
z8(a){this.aC()},
mo(a){var s
if(a==null)return null
t.DI.a(a)
s=J.bK(a)
return new A.pP(A.cs(s.gJ(a)),s.gS(a))},
mS(){var s,r=this,q=r.y,p=q==null
if((p?A.n(r).h("c0.T").a(q):q)==null)q=null
else{s=(p?A.n(r).h("c0.T").a(q):q).a
q=[s,(p?A.n(r).h("c0.T").a(q):q).b]}return q}}
A.rB.prototype={
aY(a){this.bq(a)
this.oB()},
b7(){var s,r,q,p,o=this
o.cF()
s=o.bn$
r=o.gmO()
q=o.c
q.toString
q=A.pN(q)
o.fp$=q
p=o.lN(q,r)
if(r){o.iL(s,o.e2$)
o.e2$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.fo$.Z(0,new A.ahe())
s=r.bn$
if(s!=null)s.m()
r.bn$=null
r.aR()}}
A.pt.prototype={
gue(){return this.e},
jw(){var s,r=this,q=A.akR(r.gSn(),!1)
r.k4=q
r.gpj()
s=A.akR(r.gSp(),!0)
r.p1=s
B.c.I(r.e,A.a([q,s],t.tD))
r.PL()},
kt(a){var s,r=this
r.PG(a)
s=r.at.Q
s===$&&A.b()
if(s===B.L&&!r.Q)r.a.JO(r)
return!0},
m(){B.c.a_(this.e)
this.PK()}}
A.e3.prototype={
gbQ(a){return this.as},
gC8(){return this.ax},
Wp(a){var s,r=this
switch(a.a){case 3:s=r.e
if(s.length!==0){s=B.c.gJ(s)
r.gmG()
s.smG(!0)}s=r.z
if(s!=null){s.a.$0()
s.a=null}r.z=null
break
case 1:case 2:s=r.e
if(s.length!==0)B.c.gJ(s).smG(!1)
if(r.z==null)r.z=$.bT.a6H(B.FC)
break
case 0:if(!r.ga4G()){r.a.JO(r)
r.Q=!0
s=r.z
if(s!=null){s.a.$0()
s.a=null}r.z=null}break}},
jw(){var s=this,r=s.gMj(s),q=s.gMj(s),p=s.glZ(),o=s.a
o.toString
o=s.at=A.e7(p,r,q,null,o)
o.by()
p=o.c8$
p.b=!0
p.a.push(s.gFn())
s.as=o
s.P5()
p=s.as
if(p.gb2(p)===B.a_&&s.e.length!==0){p=B.c.gJ(s.e)
s.gmG()
p.smG(!0)}},
ox(){this.PI()
return this.at.cW(0)},
ov(){this.PD()
var s=this.at
s.sn(0,s.b)},
z4(a){var s,r
if(a instanceof A.e3){s=this.at
s.toString
r=a.at.x
r===$&&A.b()
s.sn(0,r)}this.PJ(a)},
kt(a){this.ch=a
this.at.h6(0)
this.P3(a)
return!0},
m1(a){this.HR(a)
this.PH(a)},
ow(a){this.HR(a)
this.PE(a)},
HR(a){var s,r,q,p,o,n,m,l=this,k={},j=l.CW
l.CW=null
if(a instanceof A.e3&&l.Iz(a)&&!0){s=l.ax.c
if(s!=null){r=s instanceof A.nE?s.a:s
r.toString
q=a.as
q.toString
p=r.gn(r)
o=q.x
o===$&&A.b()
if(!J.f(p,o)){p=q.Q
p===$&&A.b()
p=p===B.a_||p===B.L}else p=!0
o=a.y.a
if(p)l.lK(q,o)
else{k.a=null
p=new A.ab2(l,q,a)
l.CW=new A.ab0(k,q,p)
q.by()
n=q.c8$
n.b=!0
n.a.push(p)
m=A.aln(r,q,new A.ab1(k,l,a))
k.a=m
l.lK(m,o)}}else l.lK(a.as,a.y.a)}else l.ZE(B.cg)
if(j!=null)j.$0()},
lK(a,b){this.ax.saM(0,a)
if(b!=null)b.aF(new A.ab_(this,a),t.P)},
ZE(a){return this.lK(a,null)},
m(){var s=this,r=s.as
if(r!=null)r.c2(s.gFn())
r=s.z
if(r!=null){r.a.$0()
r.a=null}s.z=null
r=s.at
if(r!=null)r.m()
s.y.bV(0,s.ch)
s.P4()},
glZ(){return"TransitionRoute"},
j(a){return"TransitionRoute(animation: "+A.h(this.at)+")"}}
A.ab2.prototype={
$1(a){var s,r
switch(a.a){case 3:case 0:s=this.a
s.lK(this.b,this.c.y.a)
r=s.CW
if(r!=null){r.$0()
s.CW=null}break
case 1:case 2:break}},
$S:4}
A.ab0.prototype={
$0(){this.b.c2(this.c)
var s=this.a.a
if(s!=null)s.m()},
$S:0}
A.ab1.prototype={
$0(){var s,r=this.b
r.lK(this.a.a.a,this.c.y.a)
s=r.CW
if(s!=null){s.$0()
r.CW=null}},
$S:0}
A.ab_.prototype={
$1(a){var s=this.a.ax,r=this.b
if(s.c==r){s.saM(0,B.cg)
if(r instanceof A.nE)r.m()}},
$S:7}
A.Gs.prototype={
gMt(){var s=this.kA$
return s!=null&&s.length!==0}}
A.NB.prototype={
iA(a,b){A.a2X(this.e,t.z).gyw()
return!1},
dd(a){return A.akO(this.e).KZ()}}
A.za.prototype={
c4(a){var s=this
return s.f!==a.f||s.r!==a.r||s.w!==a.w||s.x!==a.x}}
A.rb.prototype={
an(){return new A.o_(A.akq(!0,B.a_G.j(0)+" Focus Scope",!1),A.al4(),B.m,this.$ti.h("o_<1>"))}}
A.o_.prototype={
aA(){var s,r,q=this
q.aP()
s=A.a([],t.ro)
r=q.a.c.fy
if(r!=null)s.push(r)
r=q.a.c.go
if(r!=null)s.push(r)
q.e=new A.z8(s)
if(q.a.c.gkK()){q.a.c.a.a.toString
s=!0}else s=!1
if(s){s=q.a.c.a.x.gdN()
if(s!=null)s.n0(q.f)}},
aY(a){var s,r=this
r.bq(a)
if(r.a.c.gkK()){r.a.c.a.a.toString
s=!0}else s=!1
if(s){s=r.a.c.a.x.gdN()
if(s!=null)s.n0(r.f)}},
b7(){this.cF()
this.d=null},
Uh(){this.az(new A.aeI(this))},
m(){this.f.m()
this.aR()},
gH_(){var s=this.a.c.fy
if((s==null?null:s.gb2(s))!==B.al){s=this.a.c.a
s=s==null?null:s.CW.a
s=s===!0}else s=!0
return s},
L(a){var s,r,q=this,p=null,o=q.a.c,n=o.gkK(),m=q.a.c
if(!m.gtK()){m=m.kA$
m=m!=null&&m.length!==0}else m=!0
s=q.a.c
s=s.gtK()||s.zo$>0
r=q.a.c
return A.lR(o.c,new A.aeM(q),new A.za(n,m,s,o,new A.w0(r.fx,new A.pw(new A.hK(new A.aeN(q),p),r.k3,p),p),p))}}
A.aeI.prototype={
$0(){this.a.d=null},
$S:0}
A.aeM.prototype={
$2(a,b){var s=this.a.a.c.c.a
b.toString
return new A.l0(b,s,null)},
$S:354}
A.aeN.prototype={
$1(a){var s,r=null,q=A.aZ([B.Ck,new A.NB(a,new A.bl(A.a([],t.B8),t.dc))],t.n,t.nT),p=this.a,o=p.e
o===$&&A.b()
s=p.d
if(s==null)s=p.d=new A.ij(new A.hK(new A.aeK(p),r),p.a.c.k2)
return A.U7(q,new A.pA(p.r,B.bN,B.Vd,A.aoe(!1,new A.ij(A.lR(o,new A.aeL(p),s),r),r,r,p.f),r))},
$S:355}
A.aeL.prototype={
$2(a,b){var s,r,q=this.a,p=q.a.c,o=p.fy
o.toString
s=p.go
s.toString
r=p.a
r=r==null?null:r.CW
if(r==null)r=A.jC(!1)
return p.Ix(a,o,s,A.lR(r,new A.aeJ(q),b))},
$S:29}
A.aeJ.prototype={
$2(a,b){var s=this.a,r=s.gH_()
s.f.scp(!r)
return new A.hY(r,null,b,null)},
$S:356}
A.aeK.prototype={
$1(a){var s,r=this.a.a.c,q=r.fy
q.toString
s=r.go
s.toString
return r.a0H(a,q,s)},
$S:13}
A.kK.prototype={
az(a){var s,r=this.k1
if(r.gbv()!=null){r=r.gbv()
if(r.a.c.gkK())if(!r.gH_()){r.a.c.a.a.toString
s=!0}else s=!1
else s=!1
if(s){s=r.a.c.a.x.gdN()
if(s!=null)s.n0(r.f)}r.az(a)}else a.$0()},
Ix(a,b,c,d){return d},
jw(){var s=this
s.Qa()
s.fy=A.JB(A.e3.prototype.gbQ.call(s,s))
s.go=A.JB(A.e3.prototype.gC8.call(s))},
ox(){var s,r=this,q=r.k1
if(q.gbv()!=null){r.a.a.toString
s=!0}else s=!1
if(s){s=r.a.x.gdN()
if(s!=null)s.n0(q.gbv().f)}return r.Q9()},
ov(){var s,r=this,q=r.k1
if(q.gbv()!=null){r.a.a.toString
s=!0}else s=!1
if(s){s=r.a.x.gdN()
if(s!=null)s.n0(q.gbv().f)}r.Q7()},
su6(a){var s,r=this
if(r.fx===a)return
r.az(new A.a2Y(r,a))
s=r.fy
s.toString
s.saM(0,r.fx?B.cY:A.e3.prototype.gbQ.call(r,r))
s=r.go
s.toString
s.saM(0,r.fx?B.cg:A.e3.prototype.gC8.call(r))
r.oe()},
fC(){var s=0,r=A.a2(t.ij),q,p=this,o,n,m,l
var $async$fC=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:p.k1.gbv()
o=A.aB(p.id,!0,t.CQ),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}l=J
s=6
return A.a4(o[m].$0(),$async$fC)
case 6:if(!l.f(b,!0)){q=B.Ug
s=1
break}case 4:++m
s=3
break
case 5:q=p.Qg()
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$fC,r)},
z_(a){this.PF(a)
this.oe()},
oe(){var s,r=this
r.PC()
r.az(new A.a2W())
s=r.k4
s===$&&A.b()
s.h3()
s=r.p1
s===$&&A.b()
r.gpj()
s.spj(!0)},
rQ(){this.PB()
var s=this.k4
s===$&&A.b()
s.h3()
s=this.k1
if(s.gbv()!=null)s.gbv().Uh()},
So(a){var s,r,q=this,p=null
q.ga0y()
q.gyw()
s=q.ga0z()
r=q.fy
if(r.gb2(r)!==B.al){r=q.fy
r=r.gb2(r)===B.L}else r=!0
q.gyw()
return new A.hY(r,p,new A.vF(p,!1,p,!0,s,p),p)},
Sq(a){var s=this,r=null,q=s.ok
return q==null?s.ok=A.dO(r,new A.rb(s,s.k1,A.n(s).h("rb<1>")),!1,r,!1,r,r,r,r,r,r,r,r,r,r,r,B.TP,r,r,r,r):q},
j(a){return"ModalRoute("+this.b.j(0)+", animation: "+A.h(this.as)+")"}}
A.a2Y.prototype={
$0(){this.a.fx=this.b},
$S:0}
A.a2W.prototype={
$0(){},
$S:0}
A.ra.prototype={
fC(){var s=0,r=A.a2(t.ij),q,p=this,o
var $async$fC=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:o=p.kA$
if(o!=null&&o.length!==0){q=B.Bl
s=1
break}q=p.PM()
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$fC,r)},
kt(a){var s,r,q=this,p=q.kA$
if(p!=null&&p.length!==0){s=p.pop()
s.b=null
s.a7K()
r=s.c&&--q.zo$===0
if(q.kA$.length===0||r)q.oe()
return!1}q.Q8(a)
return!0}}
A.Kz.prototype={
L(a){var s,r,q,p=t.l,o=a.a4(p).f.f,n=Math.max(o.a,0),m=this.d,l=m?o.b:0
l=Math.max(l,0)
s=Math.max(o.c,0)
r=this.f
q=r?o.d:0
return new A.i8(new A.bs(n,l,s,Math.max(q,0)),new A.fn(a.a4(p).f.LM(r,!0,!0,m),this.x,null),null)}}
A.KD.prototype={
LS(){},
Jj(a,b){if(b!=null)b.d5(new A.x1(null,a,b,0))},
Jk(a,b,c){b.d5(A.al5(b,null,null,a,c))},
tc(a,b,c){b.d5(new A.i7(null,c,0,a,b,0))},
Ji(a,b){b.d5(new A.jq(null,a,b,0))},
o6(){},
m(){},
j(a){return"<optimized out>#"+A.bP(this)}}
A.ks.prototype={
o6(){this.a.fE(0)},
gi5(){return!1},
gh1(){return!1},
gee(){return 0}}
A.a0F.prototype={
gi5(){return!1},
gh1(){return!1},
gee(){return 0},
m(){this.b.$0()
this.qm()}}
A.a6M.prototype={
S6(a,b){var s,r,q=this
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
else return Math.min(r/3,s)*J.em(a)}else return 0}}},
bi(a,b){var s,r,q,p,o=this
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
p=o.S6(s,q)
if(p===0)return
s=o.a
if(A.aiu(s.w.a.c))p=-p
s.By(p>0?B.lB:B.lC)
r=s.at
r.toString
s.vv(r-s.r.ys(s,p))},
m(){this.x=null
this.b.$0()},
j(a){return"<optimized out>#"+A.bP(this)}}
A.YW.prototype={
Jj(a,b){var s=t.hb.a(this.b.x)
if(b!=null)b.d5(new A.x1(s,a,b,0))},
Jk(a,b,c){b.d5(A.al5(b,null,t.mF.a(this.b.x),a,c))},
tc(a,b,c){b.d5(new A.i7(t.mF.a(this.b.x),c,0,a,b,0))},
Ji(a,b){var s=this.b.x
b.d5(new A.jq(s instanceof A.h1?s:null,a,b,0))},
gi5(){var s=this.b
return(s==null?null:s.w)!==B.dK},
gh1(){return!0},
gee(){return 0},
m(){this.b=null
this.qm()},
j(a){return"<optimized out>#"+A.bP(this)+"("+A.h(this.b)+")"}}
A.BI.prototype={
LS(){var s=this.a,r=this.b
r===$&&A.b()
s.fE(r.gee())},
o6(){var s=this.a,r=this.b
r===$&&A.b()
s.fE(r.gee())},
xH(){var s=this.b
s===$&&A.b()
s=s.x
s===$&&A.b()
if(!(Math.abs(this.a.vv(s))<1e-10)){s=this.a
s.fl(new A.ks(s))}},
wn(){this.a.fE(0)},
tc(a,b,c){var s=this.b
s===$&&A.b()
b.d5(new A.i7(null,c,s.gee(),a,b,0))},
gh1(){return!0},
gee(){var s=this.b
s===$&&A.b()
return s.gee()},
m(){var s=this.b
s===$&&A.b()
s.m()
this.qm()},
j(a){var s=A.bP(this),r=this.b
r===$&&A.b()
return"<optimized out>#"+s+"("+r.j(0)+")"},
gi5(){return this.c}}
A.EX.prototype={
xH(){var s=this.a,r=this.c
r===$&&A.b()
r=r.x
r===$&&A.b()
if(s.vv(r)!==0){s=this.a
s.fl(new A.ks(s))}},
wn(){var s=this.a,r=this.c
r===$&&A.b()
s.fE(r.gee())},
tc(a,b,c){var s=this.c
s===$&&A.b()
b.d5(new A.i7(null,c,s.gee(),a,b,0))},
gi5(){return!0},
gh1(){return!0},
gee(){var s=this.c
s===$&&A.b()
return s.gee()},
m(){var s=this.b
s===$&&A.b()
s.eO(0)
s=this.c
s===$&&A.b()
s.m()
this.qm()},
j(a){var s=A.bP(this),r=this.c
r===$&&A.b()
return"<optimized out>#"+s+"("+r.j(0)+")"}}
A.wW.prototype={
pI(a,b,c,d){var s,r=this
if(b.a==null){s=$.eY.fX$
s===$&&A.b()
s=s.R(0,c)}else s=!0
if(s){r.b.pI(a,b,c,d)
return}s=r.a
if(s.gau(s)==null)return
s=s.gau(s)
s.toString
if(A.aAj(s)){$.bT.q9(new A.a6H(r,a,b,c,d))
return}r.b.pI(a,b,c,d)},
pf(a,b,c){return this.b.pf(0,b,c)},
pg(a,b){return this.b.pg(a,b)},
u5(a){return this.b.u5(a)}}
A.a6H.prototype={
$1(a){var s=this
A.dU(new A.a6G(s.a,s.b,s.c,s.d,s.e))},
$S:2}
A.a6G.prototype={
$0(){var s=this
return s.a.pI(s.b,s.c,s.d,s.e)},
$S:0}
A.rP.prototype={
F(){return"AndroidOverscrollIndicator."+this.b}}
A.KE.prototype={
a1T(a,b,c,d,e,f){return new A.ah5(this,f,c!==!1,d,e,b,a)},
a1K(a){return this.a1T(null,null,null,null,null,a)},
jS(a){return A.lG()},
gzd(){return B.BG},
rN(a,b,c){var s=null
switch(this.jS(a)){case B.bm:case B.bd:case B.bn:return A.azW(b,c.b,B.ci,s,s,A.Bg(),B.t,s,s,s,s,B.d4,s)
case B.aE:case B.bl:case B.aF:return b}},
rL(a,b,c){var s
switch(this.jS(a)){case B.aF:case B.bm:case B.bd:case B.bn:s=1
break
case B.aE:s=2
break
case B.bl:s=3
break
default:s=null
break}if(s)c$0:for(;!0;)switch(s){case 1:return b
case 2:switch(1){case 1:break}if(2)c$1:for(;!0;)switch(2){case 1:return new A.qe(c.a,B.W,b,null)
case 2:s=3
continue c$0}break c$0
case 3:return new A.p_(c.a,B.l,b,null)}},
uH(a){switch(this.jS(a)){case B.aF:return new A.a6I()
case B.bd:return new A.a6J()
case B.aE:case B.bl:case B.bm:case B.bn:return new A.a6K()}},
l_(a){switch(this.jS(a)){case B.aF:return B.D9
case B.bd:return B.Da
case B.aE:case B.bl:case B.bm:case B.bn:return B.EL}},
j(a){return"ScrollBehavior"}}
A.a6I.prototype={
$1(a){return A.ay_(a.gcj(a))},
$S:357}
A.a6J.prototype={
$1(a){var s=a.gcj(a),r=t.pa
return new A.pn(A.aV(20,null,!1,r),s,A.aV(20,null,!1,r))},
$S:358}
A.a6K.prototype={
$1(a){return new A.hs(a.gcj(a),A.aV(20,null,!1,t.pa))},
$S:140}
A.ah5.prototype={
gzd(){var s=this.f
return s==null?B.BG:s},
rL(a,b,c){var s=this.a.rL(a,b,c)
return s},
rN(a,b,c){if(this.b)return this.a.rN(a,b,c)
return b},
l_(a){var s=this.a.l_(a)
return s},
uH(a){return this.a.uH(a)},
j(a){return"_WrappedScrollBehavior"}}
A.wX.prototype={
c4(a){var s
if(A.C(this.f)===A.C(a.f))s=!1
else s=!0
return s}}
A.pU.prototype={
hw(a,b,c){return this.a0s(a,b,c)},
a0s(a,b,c){var s=0,r=A.a2(t.H),q=this,p,o,n
var $async$hw=A.Y(function(d,e){if(d===1)return A.a_(e,r)
while(true)switch(s){case 0:n=A.a([],t.iJ)
for(p=q.d,o=0;o<p.length;++o)n.push(p[o].hw(a,b,c))
s=2
return A.a4(A.uy(n,t.H),$async$hw)
case 2:return A.a0(null,r)}})
return A.a1($async$hw,r)},
ar(a){this.d.push(a)
a.X(0,this.ger())},
ot(a,b){b.H(0,this.ger())
B.c.u(this.d,b)},
m(){var s,r,q,p
for(s=this.d,r=s.length,q=this.ger(),p=0;p<s.length;s.length===r||(0,A.P)(s),++p)s[p].H(0,q)
this.dY()},
J0(a,b,c){return A.aAi(b,null,0,!0,c,a)},
j(a){var s=A.a([],t.s),r=this.d,q=r.length
if(q===0)s.push("no clients")
else if(q===1){r=B.c.gbp(r).at
r.toString
s.push("one client, offset "+B.d.N(r,1))}else s.push(""+q+" clients")
return"<optimized out>#"+A.bP(this)+"("+B.c.b5(s,", ")+")"}}
A.hm.prototype={
fS(){var s=this,r=null,q=s.gzN()?s.gf1():r,p=s.gzN()?s.gf0():r,o=s.gKc()?s.gck():r,n=s.gKe()?s.gpW():r,m=s.gfP()
return new A.un(q,p,o,n,m)},
gAQ(){var s=this
return s.gck()<s.gf1()||s.gck()>s.gf0()},
gIp(){var s=this
return s.gck()===s.gf1()||s.gck()===s.gf0()},
gkz(){var s=this
return s.gpW()-A.I(s.gf1()-s.gck(),0,s.gpW())-A.I(s.gck()-s.gf0(),0,s.gpW())}}
A.un.prototype={
gf1(){var s=this.a
s.toString
return s},
gf0(){var s=this.b
s.toString
return s},
gzN(){return this.a!=null&&this.b!=null},
gck(){var s=this.c
s.toString
return s},
gKc(){return this.c!=null},
gpW(){var s=this.d
s.toString
return s},
gKe(){return this.d!=null},
j(a){var s=this
return"FixedScrollMetrics("+B.d.N(Math.max(s.gck()-s.gf1(),0),1)+"..["+B.d.N(s.gkz(),1)+"].."+B.d.N(Math.max(s.gf0()-s.gck(),0),1)+")"},
gfP(){return this.e}}
A.NX.prototype={}
A.ef.prototype={}
A.M7.prototype={
Lc(a){if(t.bx.b(a))++a.cU$
return!1}}
A.e0.prototype={
cl(a){this.QS(a)
a.push(this.a.j(0))}}
A.x1.prototype={
cl(a){var s
this.nf(a)
s=this.d
if(s!=null)a.push(s.j(0))}}
A.im.prototype={
cl(a){var s
this.nf(a)
a.push("scrollDelta: "+A.h(this.e))
s=this.d
if(s!=null)a.push(s.j(0))},
gJn(){return this.d}}
A.i7.prototype={
cl(a){var s,r=this
r.nf(a)
a.push("overscroll: "+B.d.N(r.e,1))
a.push("velocity: "+B.d.N(r.f,1))
s=r.d
if(s!=null)a.push(s.j(0))}}
A.jq.prototype={
cl(a){var s
this.nf(a)
s=this.d
if(s!=null)a.push(s.j(0))},
gJn(){return this.d}}
A.M1.prototype={
cl(a){this.nf(a)
a.push("direction: "+this.d.j(0))}}
A.zQ.prototype={
cl(a){var s,r
this.vm(a)
s=this.cU$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.zP.prototype={
c4(a){return this.f!==a.f}}
A.lr.prototype={
a51(a,b){return this.d.$1(b)}}
A.x_.prototype={
an(){return new A.x0(new A.v6(t.uk),B.m)}}
A.x0.prototype={
H(a,b){var s,r,q,p=this.d
p.toString
p=A.aBM(p)
s=A.n(p).c
for(;p.q();){r=p.c
if(r==null)r=s.a(r)
if(J.f(r.d,b)){p=r.a
p.toString
A.n(r).h("mJ.E").a(r);++p.a
s=r.b
s.c=r.c
r.c.b=s
q=--p.b
r.a=r.b=r.c=null
if(q===0)p.c=null
else if(r===p.c)p.c=s
return}}},
G0(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.d
if(i.b===0)return
p=A.aB(i,!0,t.cS)
for(i=p.length,o=0;o<i;++o){s=p[o]
try{if(s.a!=null)J.avn(s,a)}catch(n){r=A.af(n)
q=A.au(n)
m=j instanceof A.bY?A.cW(j):null
l=A.bq("while dispatching notifications for "+A.aD(m==null?A.aX(j):m).j(0))
k=$.fR()
if(k!=null)k.$1(new A.bM(r,q,"widget library",l,new A.a6N(j),!1))}}},
L(a){var s=this
return new A.di(new A.a6O(s),new A.di(new A.a6P(s),new A.zP(s,s.a.c,null),null,t.Bf),null,t.iY)},
m(){this.d=null
this.aR()}}
A.a6N.prototype={
$0(){var s=null,r=this.a
return A.a([A.hO("The "+A.C(r).j(0)+" sending notification was",r,!0,B.aO,s,!1,s,s,B.ar,s,!1,!0,!0,B.b_,s,t.Ec)],t.F)},
$S:17}
A.a6O.prototype={
$1(a){var s=new A.MY(null,null,a.a,a.b,0)
s.cU$=a.cU$
this.a.G0(s)
return!1},
$S:56}
A.a6P.prototype={
$1(a){this.a.G0(a)
return!1},
$S:25}
A.MY.prototype={}
A.wY.prototype={
F(){return"ScrollDecelerationRate."+this.b}}
A.nh.prototype={
hy(a){var s=this.a
s=s==null?null:s.kl(a)
return s==null?a:s},
kl(a){return new A.nh(this.hy(a))},
ys(a,b){var s=this.a
if(s==null)return b
return s.ys(a,b)},
jW(a){var s,r=this.a
if(r==null){r=a.at
r.toString
if(r===0){r=a.z
r.toString
s=a.Q
s.toString
s=r!==s
r=s}else r=!0
return r}return r.jW(a)},
LG(a,b,c){var s=this.a
if(s==null){$.al.toString
s=$.cu().gkR()
return Math.abs(a)>Math.max(Math.abs(s.a),Math.abs(s.b))}return s.LG(a,b,c)},
o4(a,b){var s=this.a
if(s==null)return 0
return s.o4(a,b)},
rD(a,b,c,d){var s=this.a
if(s==null){s=b.c
s.toString
return s}return s.rD(a,b,c,d)},
lY(a,b){var s=this.a
if(s==null)return null
return s.lY(a,b)},
gla(){var s=this.a
s=s==null?null:s.gla()
return s==null?$.atr():s},
gpN(){var s=this.a
s=s==null?null:s.gpN()
return s==null?$.ats():s},
gAi(){var s=this.a
s=s==null?null:s.gAi()
return s==null?18:s},
gu2(){var s=this.a
s=s==null?null:s.gu2()
return s==null?50:s},
gpk(){var s=this.a
s=s==null?null:s.gpk()
return s==null?8000:s},
yB(a){var s=this.a
if(s==null)return 0
return s.yB(a)},
gze(){var s=this.a
return s==null?null:s.gze()},
glS(){return!0},
j(a){var s=this.a
if(s==null)return"ScrollPhysics"
return"ScrollPhysics -> "+s.j(0)}}
A.JF.prototype={
kl(a){return new A.JF(this.hy(a))},
rD(a,b,c,d){var s,r,q,p,o,n,m,l
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
return p+(o-q)}}l=this.PP(a,b,c,d)
if(r){q=b.b
q.toString
l=A.I(l,p,q)}return l}}
A.td.prototype={
kl(a){return new A.td(this.b,this.hy(a))},
K0(a){switch(this.b.a){case 1:return 0.07*Math.pow(1-a,2)
case 0:return 0.52*Math.pow(1-a,2)}},
ys(a,b){var s,r,q,p,o,n,m
if(!a.gAQ())return b
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
m=this.K0((o-Math.abs(b))/s)}else{s.toString
m=this.K0(o/s)}return J.em(b)*A.avW(o,Math.abs(b),m)},
o4(a,b){return 0},
lY(a,b){var s,r,q,p,o,n,m,l=this.gpN()
if(Math.abs(b)>=l.c||a.gAQ()){switch(this.b.a){case 1:s=1400
break
case 0:s=0
break
default:s=null}r=this.gla()
q=a.at
q.toString
p=a.z
p.toString
o=a.Q
o.toString
n=new A.UV(p,o,r,l)
if(q<p){n.f=new A.l2(p,A.A6(r,q-p,b),B.bM)
n.r=-1/0}else if(q>o){n.f=new A.l2(o,A.A6(r,q-o,b),B.bM)
n.r=-1/0}else{q=n.e=A.axM(0.135,q,b,s)
m=q.gtt()
if(b>0&&m>o){p=q.M8(o)
n.r=p
n.f=new A.l2(o,A.A6(r,o-o,Math.min(q.dM(0,p),5000)),B.bM)}else if(b<0&&m<p){o=q.M8(p)
n.r=o
n.f=new A.l2(p,A.A6(r,p-p,Math.min(q.dM(0,o),5000)),B.bM)}else n.r=1/0}return n}return null},
gu2(){return 100},
yB(a){return J.em(a)*Math.min(0.000816*Math.pow(Math.abs(a),1.967),4e4)},
gze(){return 3.5},
gpk(){switch(this.b.a){case 1:return 64e3
case 0:return A.nh.prototype.gpk.call(this)}},
gla(){switch(this.b.a){case 1:return A.apP(0.3,1.3,75)
case 0:return A.nh.prototype.gla.call(this)}}}
A.tp.prototype={
kl(a){return new A.tp(this.hy(a))},
o4(a,b){var s,r,q=a.at
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
lY(a,b){var s,r,q,p,o=null