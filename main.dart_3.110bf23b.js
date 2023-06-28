){return this.b},
gf1(){return this.c},
gfv(){return this.d},
gdM(){return this.e},
gf5(){return this.f},
gfw(){return this.r},
gf0(){return this.w}}
A.u5.prototype={
H(){return"BorderStyle."+this.b}}
A.dp.prototype={
aJ(a,b){var s=Math.max(0,this.b*b),r=b<=0?B.cs:this.c
return new A.dp(this.a,s,r,-1)},
ie(){switch(this.c.a){case 1:var s=$.as().ba()
s.sap(0,this.a)
s.sez(this.b)
s.sct(0,B.Z)
return s
case 0:s=$.as().ba()
s.sap(0,B.ab)
s.sez(0)
s.sct(0,B.Z)
return s}},
geZ(){return this.b*(1-(1+this.d)/2)},
gDw(){return this.b*(1+this.d)/2},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.a0(b)!==A.D(s))return!1
return b instanceof A.dp&&b.a.l(0,s.a)&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gu(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
cd(){return"BorderSide"}}
A.bW.prototype={
fD(a,b,c){return null},
D(a,b){return this.fD(a,b,!1)},
U(a,b){var s=this.D(0,b)
if(s==null)s=b.fD(0,this,!0)
return s==null?new A.h7(A.a([b,this],t.N_)):s},
cq(a,b){if(a==null)return this.aJ(0,b)
return null},
cr(a,b){if(a==null)return this.aJ(0,1-b)
return null},
j(a){return"ShapeBorder()"}}
A.dN.prototype={
gmw(){var s=Math.max(this.a.geZ(),0)
return new A.bx(s,s,s,s)},
cq(a,b){if(a==null)return this.aJ(0,b)
return null},
cr(a,b){if(a==null)return this.aJ(0,1-b)
return null}}
A.h7.prototype={
gmw(){return B.c.Ap(this.a,B.b_,new A.ag6())},
fD(a,b,c){var s,r,q,p=b instanceof A.h7
if(!p){s=this.a
r=c?B.c.gT(s):B.c.gK(s)
q=r.fD(0,b,c)
if(q==null)q=b.fD(0,r,!c)
if(q!=null){p=A.aF(s,!0,t.RY)
p[c?p.length-1:0]=q
return new A.h7(p)}}s=A.a([],t.N_)
if(c)B.c.L(s,this.a)
if(p)B.c.L(s,b.a)
else s.push(b)
if(!c)B.c.L(s,this.a)
return new A.h7(s)},
D(a,b){return this.fD(a,b,!1)},
aJ(a,b){var s=this.a,r=A.ap(s).h("aG<1,bW>")
return new A.h7(A.aF(new A.aG(s,new A.ag7(b),r),!0,r.h("bm.E")))},
cq(a,b){return A.avm(a,this,b)},
cr(a,b){return A.avm(this,a,b)},
fU(a,b){return B.c.gK(this.a).fU(a,b)},
i7(a,b,c){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
p.i7(a,b,c)
b=p.gmw().a_(c).zK(b)}},
l(a,b){if(b==null)return!1
if(this===b)return!0
if(J.a0(b)!==A.D(this))return!1
return b instanceof A.h7&&A.d8(b.a,this.a)},
gu(a){return A.dv(this.a)},
j(a){var s=this.a,r=A.ap(s).h("cx<1>")
return new A.aG(new A.cx(s,r),new A.ag8(),r.h("aG<bm.E,j>")).bb(0," + ")}}
A.ag6.prototype={
$2(a,b){return a.D(0,b.gmw())},
$S:225}
A.ag7.prototype={
$1(a){return a.aJ(0,this.a)},
$S:226}
A.ag8.prototype={
$1(a){return a.j(0)},
$S:227}
A.OZ.prototype={}
A.ud.prototype={
H(){return"BoxShape."+this.b}}
A.DV.prototype={
fD(a,b,c){return null},
D(a,b){return this.fD(a,b,!1)},
fU(a,b){var s=$.as().ce()
s.kF(a)
return s}}
A.dG.prototype={
gmw(){var s,r=this
if(r.gJ9()){s=r.a.geZ()
return new A.bx(s,s,s,s)}return new A.bx(r.d.geZ(),r.a.geZ(),r.b.geZ(),r.c.geZ())},
gpE(){var s,r,q=this,p=q.a,o=p.a,n=q.b
if(n.a.l(0,o)&&q.c.a.l(0,o)&&q.d.a.l(0,o))if(q.gJ9()){s=p.c
if(n.c===s&&q.c.c===s&&q.d.c===s){r=p.d
p=n.d===r&&q.c.d===r&&q.d.d===r}else p=!1}else p=!1
else p=!1
return p},
gJ9(){var s=this,r=s.a.b
return s.b.b===r&&s.c.b===r&&s.d.b===r},
fD(a,b,c){var s=this
if(b instanceof A.dG&&A.jq(s.a,b.a)&&A.jq(s.b,b.b)&&A.jq(s.c,b.c)&&A.jq(s.d,b.d))return new A.dG(A.hg(s.a,b.a),A.hg(s.b,b.b),A.hg(s.c,b.c),A.hg(s.d,b.d))
return null},
D(a,b){return this.fD(a,b,!1)},
aJ(a,b){var s=this
return new A.dG(s.a.aJ(0,b),s.b.aJ(0,b),s.c.aJ(0,b),s.d.aJ(0,b))},
cq(a,b){if(a instanceof A.dG)return A.aoU(a,this,b)
return this.Ed(a,b)},
cr(a,b){if(a instanceof A.dG)return A.aoU(this,a,b)
return this.Ee(a,b)},
uR(a,b,c,d,e){var s,r=this
if(r.gpE()){s=r.a
switch(s.c.a){case 0:return
case 1:switch(d.a){case 1:A.asC(a,b,s)
break
case 0:if(c!=null&&!c.l(0,B.aM)){A.asD(a,b,s,c)
return}A.asE(a,b,s)
break}return}}A.axK(a,b,r.c,r.d,r.b,r.a)},
i7(a,b,c){return this.uR(a,b,null,B.y,c)},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.a0(b)!==A.D(s))return!1
return b instanceof A.dG&&b.a.l(0,s.a)&&b.b.l(0,s.b)&&b.c.l(0,s.c)&&b.d.l(0,s.d)},
gu(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s,r,q=this
if(q.gpE())return"Border.all("+q.a.j(0)+")"
s=A.a([],t.s)
r=q.a
if(!r.l(0,B.K))s.push("top: "+r.j(0))
r=q.b
if(!r.l(0,B.K))s.push("right: "+r.j(0))
r=q.c
if(!r.l(0,B.K))s.push("bottom: "+r.j(0))
r=q.d
if(!r.l(0,B.K))s.push("left: "+r.j(0))
return"Border("+B.c.bb(s,", ")+")"}}
A.ec.prototype={
gmw(){var s,r=this
if(r.gpE()){s=r.a.geZ()
return new A.ao(s,s,s,s)}return new A.ao(r.b.geZ(),r.a.geZ(),r.c.geZ(),r.d.geZ())},
gpE(){var s,r,q,p=this,o=p.a,n=o.a,m=p.b
if(!m.a.l(0,n)||!p.c.a.l(0,n)||!p.d.a.l(0,n))return!1
s=o.b
if(m.b!==s||p.c.b!==s||p.d.b!==s)return!1
r=o.c
if(m.c!==r||p.c.c!==r||p.d.c!==r)return!1
q=o.d
if(!(m.d===q&&p.d.d===q&&p.c.d===q))return!1
return!0},
fD(a,b,c){var s,r,q,p=this,o=null
if(b instanceof A.ec){s=p.a
r=b.a
if(A.jq(s,r)&&A.jq(p.b,b.b)&&A.jq(p.c,b.c)&&A.jq(p.d,b.d))return new A.ec(A.hg(s,r),A.hg(p.b,b.b),A.hg(p.c,b.c),A.hg(p.d,b.d))
return o}if(b instanceof A.dG){s=b.a
r=p.a
if(!A.jq(s,r)||!A.jq(b.c,p.d))return o
q=p.b
if(!q.l(0,B.K)||!p.c.l(0,B.K)){if(!b.d.l(0,B.K)||!b.b.l(0,B.K))return o
return new A.ec(A.hg(s,r),q,p.c,A.hg(b.c,p.d))}return new A.dG(A.hg(s,r),b.b,A.hg(b.c,p.d),b.d)}return o},
D(a,b){return this.fD(a,b,!1)},
aJ(a,b){var s=this
return new A.ec(s.a.aJ(0,b),s.b.aJ(0,b),s.c.aJ(0,b),s.d.aJ(0,b))},
cq(a,b){if(a instanceof A.ec)return A.aoT(a,this,b)
return this.Ed(a,b)},
cr(a,b){if(a instanceof A.ec)return A.aoT(this,a,b)
return this.Ee(a,b)},
uR(a,b,c,d,e){var s,r,q,p=this
if(p.gpE()){s=p.a
switch(s.c.a){case 0:return
case 1:switch(d.a){case 1:A.asC(a,b,s)
break
case 0:if(c!=null&&!c.l(0,B.aM)){A.asD(a,b,s,c)
return}A.asE(a,b,s)
break}return}}switch(e.a){case 0:r=p.c
q=p.b
break
case 1:r=p.b
q=p.c
break
default:r=null
q=null}A.axK(a,b,p.d,r,q,p.a)},
i7(a,b,c){return this.uR(a,b,null,B.y,c)},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.a0(b)!==A.D(s))return!1
return b instanceof A.ec&&b.a.l(0,s.a)&&b.b.l(0,s.b)&&b.c.l(0,s.c)&&b.d.l(0,s.d)},
gu(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this,r=A.a([],t.s),q=s.a
if(!q.l(0,B.K))r.push("top: "+q.j(0))
q=s.b
if(!q.l(0,B.K))r.push("start: "+q.j(0))
q=s.c
if(!q.l(0,B.K))r.push("end: "+q.j(0))
q=s.d
if(!q.l(0,B.K))r.push("bottom: "+q.j(0))
return"BorderDirectional("+B.c.bb(r,", ")+")"}}
A.aO.prototype={
gde(a){var s=this.c
return s==null?null:s.gmw()},
vr(a,b){var s,r,q
switch(this.w.a){case 1:s=A.lF(a.gaP(),a.gfY()/2)
r=$.as().ce()
r.t1(s)
return r
case 0:r=this.d
if(r!=null){q=$.as().ce()
q.f8(r.a_(b).dR(a))
return q}r=$.as().ce()
r.kF(a)
return r}},
aJ(a,b){var s=this,r=null,q=A.x(r,s.a,b),p=A.asF(r,s.c,b),o=A.i8(r,s.d,b),n=A.asI(r,s.e,b),m=s.f
m=m==null?r:m.aJ(0,b)
return new A.aO(q,s.b,p,o,n,m,s.w)},
gAO(){return this.e!=null},
cq(a,b){if(a==null)return this.aJ(0,b)
if(a instanceof A.aO)return A.asG(a,this,b)
return this.DG(a,b)},
cr(a,b){if(a==null)return this.aJ(0,1-b)
if(a instanceof A.aO)return A.asG(this,a,b)
return this.DH(a,b)},
l(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.a0(b)!==A.D(r))return!1
if(b instanceof A.aO)if(J.f(b.a,r.a))if(J.f(b.b,r.b))if(J.f(b.c,r.c))if(J.f(b.d,r.d))if(A.d8(b.e,r.e))if(J.f(b.f,r.f))s=b.w===r.w
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gu(a){var s=this,r=s.e
r=r==null?null:A.dv(r)
return A.Y(s.a,s.b,s.c,s.d,r,s.f,null,s.w,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
Ln(a,b,c){var s
switch(this.w.a){case 0:s=this.d
if(s!=null)return s.a_(c).dR(new A.E(0,0,0+a.a,0+a.b)).C(0,b)
return!0
case 1:return b.af(0,a.jt(B.j)).gdq()<=Math.min(a.a,a.b)/2}},
tu(a){return new A.afS(this,a)}}
A.afS.prototype={
H8(a,b,c,d){var s=this.b
switch(s.w.a){case 1:a.iF(b.gaP(),b.gfY()/2,c)
break
case 0:s=s.d
if(s==null||s.l(0,B.aM))a.cz(b,c)
else a.dr(s.a_(d).dR(b),c)
break}},
a_1(a,b,c){var s,r,q,p,o,n,m=this.b.e
if(m==null)return
for(s=m.length,r=0;r<m.length;m.length===s||(0,A.P)(m),++r){q=m[r]
p=$.as().ba()
p.sap(0,q.a)
o=q.e
n=q.c
p.sa73(new A.ws(o,n>0?n*0.57735+0.5:0))
o=b.dF(q.b)
n=q.d
this.H8(a,new A.E(o.a-n,o.b-n,o.c+n,o.d+n),p,c)}},
ZY(a,b,c){var s,r,q=this,p=q.b,o=p.b
if(o==null)return
if(q.e==null)q.e=new A.Gf(o,q.a)
switch(p.w.a){case 1:s=A.lF(b.gaP(),b.gfY()/2)
r=$.as().ce()
r.t1(s)
break
case 0:p=p.d
if(p!=null){r=$.as().ce()
r.f8(p.a_(c.d).dR(b))}else r=null
break
default:r=null}q.e.uQ(a,b,r,c)},
m(){var s,r=this.e
if(r!=null){s=r.c
if(s!=null)s.F(0,new A.dL(r.gGl(),null,null))
s=r.d
if(s!=null)s.a.m()
r.d=null}this.P7()},
pY(a,b,c){var s,r,q,p,o=this,n=c.e,m=b.a,l=b.b,k=new A.E(m,l,m+n.a,l+n.b),j=c.d
o.a_1(a,k,j)
n=o.b
m=n.a
l=m==null
if(!l||n.f!=null){if(o.c!=null)s=n.f!=null&&!J.f(o.d,k)
else s=!0
if(s){r=$.as().ba()
if(!l)r.sap(0,m)
m=n.f
if(m!=null){l=m.d.a_(j).Nw(k)
s=m.e.a_(j).Nw(k)
q=m.a
p=m.xN()
m=m.f
r.sDk(A.apt(l,s,q,p,m,null))
o.d=k}o.c=r}m=o.c
m.toString
o.H8(a,k,m,j)}o.ZY(a,k,c)
m=n.c
if(m!=null){l=n.d
l=l==null?null:l.a_(j)
m.uR(a,k,l,n.w,j)}},
j(a){return"BoxPainter for "+this.b.j(0)}}
A.mB.prototype={
H(){return"BoxFit."+this.b}}
A.Ho.prototype={}
A.ia.prototype={
aJ(a,b){var s=this
return new A.ia(s.d*b,s.e,s.a,s.b.a3(0,b),s.c*b)},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.a0(b)!==A.D(s))return!1
return b instanceof A.ia&&b.a.l(0,s.a)&&b.b.l(0,s.b)&&b.c===s.c&&b.d===s.d&&b.e===s.e},
gu(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this
return"BoxShadow("+s.a.j(0)+", "+s.b.j(0)+", "+A.i2(s.c)+", "+A.i2(s.d)+", "+s.e.j(0)+")"}}
A.dH.prototype={
aJ(a,b){return new A.dH(this.b,this.a.aJ(0,b))},
cq(a,b){var s,r
if(a instanceof A.dH){s=A.aI(a.a,this.a,b)
r=A.V(a.b,this.b,b)
r.toString
return new A.dH(A.J(r,0,1),s)}return this.lG(a,b)},
cr(a,b){var s,r
if(a instanceof A.dH){s=A.aI(this.a,a.a,b)
r=A.V(this.b,a.b,b)
r.toString
return new A.dH(A.J(r,0,1),s)}return this.lH(a,b)},
fU(a,b){var s=$.as().ce()
s.t1(this.EF(a))
return s},
i7(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=r.b*r.d
if(this.b===0)a.iF(b.gaP(),(b.gfY()+s)/2,r.ie())
else a.tQ(this.EF(b).dw(s/2),r.ie())
break}},
EF(a){var s,r,q,p,o,n,m,l=this.b
if(l===0||a.c-a.a===a.d-a.b)return A.lF(a.gaP(),a.gfY()/2)
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
if(J.a0(b)!==A.D(this))return!1
return b instanceof A.dH&&b.a.l(0,this.a)&&b.b===this.b},
gu(a){return A.Y(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this.b
if(s!==0)return"CircleBorder("+this.a.j(0)+", eccentricity: "+A.h(s)+")"
return"CircleBorder("+this.a.j(0)+")"}}
A.YT.prototype={
wD(a,b,c,d){var s=this
s.gbR(s).cQ(0)
switch(b.a){case 0:break
case 1:a.$1(!1)
break
case 2:a.$1(!0)
break
case 3:a.$1(!0)
s.gbR(s).D1(c,$.as().ba())
break}d.$0()
if(b===B.hM)s.gbR(s).cM(0)
s.gbR(s).cM(0)},
a2Y(a,b,c,d){this.wD(new A.YU(this,a),b,c,d)},
a2Z(a,b,c,d){this.wD(new A.YV(this,a),b,c,d)},
a30(a,b,c,d){this.wD(new A.YW(this,a),b,c,d)}}
A.YU.prototype={
$1(a){var s=this.a
return s.gbR(s).JK(0,this.b,a)},
$S:26}
A.YV.prototype={
$1(a){var s=this.a
return s.gbR(s).JL(this.b,a)},
$S:26}
A.YW.prototype={
$1(a){var s=this.a
return s.gbR(s).a3_(this.b,a)},
$S:26}
A.kU.prototype={
i(a,b){return this.b.i(0,b)},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.a0(b)!==A.D(s))return!1
return s.P8(0,b)&&A.o(s).h("kU<kU.T>").b(b)&&A.aoa(b.b,s.b)},
gu(a){return A.Y(A.D(this),this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"ColorSwatch(primary value: "+this.P9(0)+")"}}
A.hj.prototype={
cd(){return"Decoration"},
gde(a){return B.b_},
gAO(){return!1},
cq(a,b){return null},
cr(a,b){return null},
Ln(a,b,c){return!0},
vr(a,b){throw A.c(A.R("This Decoration subclass does not expect to be used for clipping."))}}
A.DX.prototype={
m(){}}
A.PJ.prototype={}
A.ng.prototype={
H(){return"ImageRepeat."+this.b}}
A.ig.prototype={
l(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.a0(b)!==A.D(r))return!1
if(b instanceof A.ig)if(b.a.l(0,r.a))if(b.d===r.d)if(B.t.l(0,B.t))s=!0
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gu(a){return A.Y(this.a,null,this.d,B.t,null,B.bI,!1,1,1,B.dk,!1,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=A.a([this.a.j(0)],t.s),r=!(this.d===B.mK&&!0)
if(r)s.push(this.d.j(0))
s.push(B.t.j(0))
s.push("scale 1")
s.push("opacity 1")
s.push(B.dk.j(0))
return"DecorationImage("+B.c.bb(s,", ")+")"}}
A.Gf.prototype={
uQ(a,b,c,d){var s,r,q,p,o=this,n=null,m=o.a,l=m.a.a_(d),k=l.a
if(k==null)k=l
s=o.c
r=s==null
if(r)q=n
else{q=s.a
if(q==null)q=s}if(k!==q){p=new A.dL(o.gGl(),n,n)
if(!r)s.F(0,p)
o.c=l
l.Y(0,p)}if(o.d==null)return
k=c!=null
if(k){a.cQ(0)
a.h9(0,c)}s=o.d
r=s.a
A.axL(B.t,a,n,n,s.c,B.dk,m.d,!1,r,!1,!1,1,b,B.bI,s.b)
if(k)a.cM(0)},
Xn(a,b){var s,r,q=this
if(J.f(q.d,a))return
s=q.d
if(s!=null)if(a.a.LL(s.a)){r=s.b
s=r===r&&a.c==s.c}else s=!1
else s=!1
if(s){a.a.m()
return}s=q.d
if(s!=null)s.a.m()
q.d=a
if(!b)q.b.$0()},
j(a){return"DecorationImagePainter(stream: "+A.h(this.c)+", image: "+A.h(this.d)+") for "+this.a.j(0)}}
A.dt.prototype={
gcB(){var s=this
return s.gdI(s)+s.gdJ(s)+s.geE(s)+s.geD()},
a2l(a){var s=this
switch(a.a){case 0:return s.gcB()
case 1:return s.gbl(s)+s.gbp(s)}},
D(a,b){var s=this
return new A.m5(s.gdI(s)+b.gdI(b),s.gdJ(s)+b.gdJ(b),s.geE(s)+b.geE(b),s.geD()+b.geD(),s.gbl(s)+b.gbl(b),s.gbp(s)+b.gbp(b))},
hQ(a,b,c){var s=this
return new A.m5(A.J(s.gdI(s),b.a,c.a),A.J(s.gdJ(s),b.c,c.b),A.J(s.geE(s),0,c.c),A.J(s.geD(),0,c.d),A.J(s.gbl(s),b.b,c.e),A.J(s.gbp(s),b.d,c.f))},
j(a){var s=this
if(s.geE(s)===0&&s.geD()===0){if(s.gdI(s)===0&&s.gdJ(s)===0&&s.gbl(s)===0&&s.gbp(s)===0)return"EdgeInsets.zero"
if(s.gdI(s)===s.gdJ(s)&&s.gdJ(s)===s.gbl(s)&&s.gbl(s)===s.gbp(s))return"EdgeInsets.all("+B.d.N(s.gdI(s),1)+")"
return"EdgeInsets("+B.d.N(s.gdI(s),1)+", "+B.d.N(s.gbl(s),1)+", "+B.d.N(s.gdJ(s),1)+", "+B.d.N(s.gbp(s),1)+")"}if(s.gdI(s)===0&&s.gdJ(s)===0)return"EdgeInsetsDirectional("+B.d.N(s.geE(s),1)+", "+B.d.N(s.gbl(s),1)+", "+B.d.N(s.geD(),1)+", "+B.d.N(s.gbp(s),1)+")"
return"EdgeInsets("+B.d.N(s.gdI(s),1)+", "+B.d.N(s.gbl(s),1)+", "+B.d.N(s.gdJ(s),1)+", "+B.d.N(s.gbp(s),1)+") + EdgeInsetsDirectional("+B.d.N(s.geE(s),1)+", 0.0, "+B.d.N(s.geD(),1)+", 0.0)"},
l(a,b){var s=this
if(b==null)return!1
return b instanceof A.dt&&b.gdI(b)===s.gdI(s)&&b.gdJ(b)===s.gdJ(s)&&b.geE(b)===s.geE(s)&&b.geD()===s.geD()&&b.gbl(b)===s.gbl(s)&&b.gbp(b)===s.gbp(s)},
gu(a){var s=this
return A.Y(s.gdI(s),s.gdJ(s),s.geE(s),s.geD(),s.gbl(s),s.gbp(s),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.bx.prototype={
gdI(a){return this.a},
gbl(a){return this.b},
gdJ(a){return this.c},
gbp(a){return this.d},
geE(a){return 0},
geD(){return 0},
zK(a){var s=this
return new A.E(a.a+s.a,a.b+s.b,a.c-s.c,a.d-s.d)},
D(a,b){if(b instanceof A.bx)return this.U(0,b)
return this.DJ(0,b)},
hQ(a,b,c){var s=this
return new A.bx(A.J(s.a,b.a,c.a),A.J(s.b,b.b,c.e),A.J(s.c,b.c,c.b),A.J(s.d,b.d,c.f))},
af(a,b){var s=this
return new A.bx(s.a-b.a,s.b-b.b,s.c-b.c,s.d-b.d)},
U(a,b){var s=this
return new A.bx(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
a3(a,b){var s=this
return new A.bx(s.a*b,s.b*b,s.c*b,s.d*b)},
a_(a){return this},
mr(a,b,c,d){var s=this,r=b==null?s.a:b,q=d==null?s.b:d,p=c==null?s.c:c
return new A.bx(r,q,p,a==null?s.d:a)},
zv(a){return this.mr(a,null,null,null)},
a3H(a,b){return this.mr(a,null,null,b)}}
A.ao.prototype={
geE(a){return this.a},
gbl(a){return this.b},
geD(){return this.c},
gbp(a){return this.d},
gdI(a){return 0},
gdJ(a){return 0},
D(a,b){if(b instanceof A.ao)return this.U(0,b)
return this.DJ(0,b)},
af(a,b){var s=this
return new A.ao(s.a-b.a,s.b-b.b,s.c-b.c,s.d-b.d)},
U(a,b){var s=this
return new A.ao(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
a3(a,b){var s=this
return new A.ao(s.a*b,s.b*b,s.c*b,s.d*b)},
a_(a){var s=this
switch(a.a){case 0:return new A.bx(s.c,s.b,s.a,s.d)
case 1:return new A.bx(s.a,s.b,s.c,s.d)}}}
A.m5.prototype={
a3(a,b){var s=this
return new A.m5(s.a*b,s.b*b,s.c*b,s.d*b,s.e*b,s.f*b)},
a_(a){var s=this
switch(a.a){case 0:return new A.bx(s.d+s.a,s.e,s.c+s.b,s.f)
case 1:return new A.bx(s.c+s.a,s.e,s.d+s.b,s.f)}},
gdI(a){return this.a},
gdJ(a){return this.b},
geE(a){return this.c},
geD(){return this.d},
gbl(a){return this.e},
gbp(a){return this.f}}
A.ag4.prototype={}
A.ani.prototype={
$1(a){return a<=this.a},
$S:229}
A.amO.prototype={
$1(a){var s=this,r=A.x(A.awE(s.a,s.b,a),A.awE(s.c,s.d,a),s.e)
r.toString
return r},
$S:230}
A.a3H.prototype={
xN(){var s,r,q,p=this.b
if(p!=null)return p
p=this.a.length
s=1/(p-1)
if(p>4294967295)A.L(A.bC(p,0,4294967295,"length",null))
r=J.nm(new Array(p),t.i)
for(q=0;q<p;++q)r[q]=q*s
return r}}
A.fK.prototype={
aJ(a,b){var s=this,r=s.a,q=A.ap(r).h("aG<1,B>")
return new A.fK(s.d,s.e,s.f,A.aF(new A.aG(r,new A.a5K(b),q),!0,q.h("bm.E")),s.b,null)},
cq(a,b){var s=A.atJ(a,this,b)
return s},
cr(a,b){var s=A.atJ(this,a,b)
return s},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.a0(b)!==A.D(s))return!1
return b instanceof A.fK&&b.d.l(0,s.d)&&b.e.l(0,s.e)&&b.f===s.f&&A.d8(b.a,s.a)&&A.d8(b.b,s.b)},
gu(a){var s=this,r=A.dv(s.a),q=s.b
q=q==null?null:A.dv(q)
return A.Y(s.d,s.e,s.f,s.c,r,q,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this,r=A.a(["begin: "+s.d.j(0),"end: "+s.e.j(0),"colors: "+A.h(s.a)],t.s),q=s.b
if(q!=null)r.push("stops: "+A.h(q))
r.push("tileMode: "+s.f.j(0))
return"LinearGradient("+B.c.bb(r,", ")+")"}}
A.a5K.prototype={
$1(a){var s=A.x(null,a,this.a)
s.toString
return s},
$S:67}
A.a4C.prototype={
Z(a){var s,r,q,p
for(s=this.b,r=s.gb_(s),r=new A.ei(J.aC(r.a),r.b),q=A.o(r).z[1];r.t();){p=r.a;(p==null?q.a(p):p).m()}s.Z(0)
for(s=this.a,r=s.gb_(s),r=new A.ei(J.aC(r.a),r.b),q=A.o(r).z[1];r.t();){p=r.a
if(p==null)p=q.a(p)
p.a.F(0,p.b)}s.Z(0)
this.f=0},
mB(a){var s,r,q,p=this,o=p.c.A(0,a)
if(o!=null){s=o.a
r=o.d
r===$&&A.b()
if(s.w)A.L(A.ab(u.V))
B.c.A(s.x,r)
o.Eh()}q=p.a.A(0,a)
if(q!=null){q.a.F(0,q.b)
return!0}o=p.b.A(0,a)
if(o!=null){s=p.f
r=o.b
r.toString
p.f=s-r
o.m()
return!0}return!1},
Ix(a,b,c){var s,r=this,q=b.b
if(q!=null&&q<=104857600&&!0){s=r.f
q.toString
r.f=s+q
r.b.k(0,a,b)
r.Uk(c)}else b.m()},
yE(a,b,c){var s=this.c.bQ(0,a,new A.a4F(this,b,a))
if(s.b==null)s.b=c},
MG(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g={}
g.a=g.b=null
q=i.a
p=q.i(0,b)
o=p==null?h:p.a
g.c=o
if(o!=null)return o
p=i.b
n=p.A(0,b)
if(n!=null){g=n.a
i.yE(b,g,n.b)
p.k(0,b,n)
return g}m=i.c.i(0,b)
if(m!=null){g=m.a
i.Ix(b,new A.zY(g,m.b,g.n_()),h)
return g}try{o=g.c=c.$0()
i.yE(b,o,h)
p=o}catch(l){s=A.ai(l)
r=A.az(l)
d.$2(s,r)
return h}g.d=!1
k=A.ba("pendingImage")
j=new A.dL(new A.a4G(g,i,b,!0,k),h,h)
k.b=new A.RX(p,j)
q.k(0,b,k.aL())
g.c.Y(0,j)
return g.c},
P(a,b){return this.a.i(0,b)!=null||this.b.i(0,b)!=null},
Uk(a){var s,r,q,p,o,n=this,m=n.b,l=A.o(m).h("bf<1>")
while(!0){if(!(n.f>104857600||m.a>1000))break
s=new A.bf(m,l)
r=s.gad(s)
if(!r.t())A.L(A.c7())
q=r.gI(r)
p=m.i(0,q)
s=n.f
o=p.b
o.toString
n.f=s-o
p.m()
m.A(0,q)}}}
A.a4F.prototype={
$0(){return A.aH7(this.b,new A.a4E(this.a,this.c))},
$S:231}
A.a4E.prototype={
$0(){this.a.c.A(0,this.b)},
$S:0}
A.a4G.prototype={
$2(a,b){var s,r,q,p,o,n=this
if(a!=null){s=a.a
r=s.gc0(s)*s.gbv(s)*4
s.m()}else r=null
s=n.a
q=s.c
p=new A.zY(q,r,q.n_())
q=n.b
o=n.c
q.yE(o,s.c,r)
if(n.d)q.Ix(o,p,s.a)
else p.m()
q.a.A(0,o)
if(!s.d){q=n.e.aL()
q.a.F(0,q.b)}s.d=!0},
$S:232}
A.P7.prototype={
m(){$.bS.cy$.push(new A.afW(this))}}
A.afW.prototype={
$1(a){var s=this.a,r=s.c
if(r!=null)r.m()
s.c=null},
$S:2}
A.zY.prototype={}
A.rZ.prototype={
Tr(a,b,c){var s=new A.aie(this,b)
this.d=s
if(a.w)A.L(A.ab(u.V))
a.x.push(s)},
j(a){return"<optimized out>#"+A.c4(this)}}
A.aie.prototype={
$0(){var s,r,q
this.b.$0()
s=this.a
r=s.a
q=s.d
q===$&&A.b()
if(r.w)A.L(A.ab(u.V))
B.c.A(r.x,q)
s.Eh()},
$S:0}
A.RX.prototype={}
A.pO.prototype={
l(a,b){var s=this
if(b==null)return!1
if(J.a0(b)!==A.D(s))return!1
return b instanceof A.pO&&b.a==s.a&&b.b==s.b&&J.f(b.c,s.c)&&b.d==s.d&&J.f(b.e,s.e)&&b.f==s.f},
gu(a){var s=this
return A.Y(s.a,s.b,s.c,s.e,s.f,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
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
A.eg.prototype={
a_(a){var s=new A.a4S()
this.UT(a,new A.a4Q(this,a,s),new A.a4R(this,a,s))
return s},
UT(a,b,c){var s,r,q,p,o,n={}
n.a=null
n.b=!1
s=new A.a4N(n,c)
r=null
try{r=this.uF(a)}catch(o){q=A.ai(o)
p=A.az(o)
s.$2(q,p)
return}r.aI(new A.a4M(n,this,b,s),t.H).h8(s)},
q8(a,b,c,d){var s,r
if(b.a!=null){s=$.fm.he$
s===$&&A.b()
s.MG(0,c,new A.a4O(b),d)
return}s=$.fm.he$
s===$&&A.b()
r=s.MG(0,c,new A.a4P(this,c),d)
if(r!=null)b.Da(r)},
pH(a,b,c){throw A.c(A.R("Implement loadBuffer for faster image loading"))},
pI(a,b){return this.pH(0,a,$.fm.ga6k())},
j(a){return"ImageConfiguration()"}}
A.a4Q.prototype={
$2(a,b){this.a.q8(this.b,this.c,a,b)},
$S(){return A.o(this.a).h("~(eg.T,~(C,bL?))")}}
A.a4R.prototype={
$3(a,b,c){return this.NG(a,b,c)},
NG(a,b,c){var s=0,r=A.a5(t.H),q=this,p
var $async$$3=A.a1(function(d,e){if(d===1)return A.a2(e,r)
while(true)switch(s){case 0:s=2
return A.a9(null,$async$$3)
case 2:p=q.c
if(p.a==null)p.Da(new A.agB(A.a([],t.XZ),A.a([],t.b)))
p=p.a
p.toString
p.ll(A.bt("while resolving an image"),b,null,!0,c)
return A.a3(null,r)}})
return A.a4($async$$3,r)},
$S(){return A.o(this.a).h("am<~>(eg.T?,C,bL?)")}}
A.a4N.prototype={
NF(a,b){var s=0,r=A.a5(t.H),q,p=this,o
var $async$$2=A.a1(function(c,d){if(c===1)return A.a2(d,r)
while(true)switch(s){case 0:o=p.a
if(o.b){s=1
break}p.b.$3(o.a,a,b)
o.b=!0
case 1:return A.a3(q,r)}})
return A.a4($async$$2,r)},
$2(a,b){return this.NF(a,b)},
$S:233}
A.a4M.prototype={
$1(a){var s,r,q,p=this
p.a.a=a
try{p.c.$2(a,p.d)}catch(q){s=A.ai(q)
r=A.az(q)
p.d.$2(s,r)}},
$S(){return A.o(this.b).h("au(eg.T)")}}
A.a4O.prototype={
$0(){var s=this.a.a
s.toString
return s},
$S:93}
A.a4P.prototype={
$0(){return this.a.pI(this.b,$.fm.ga6n())},
$S:93}
A.i7.prototype={
l(a,b){var s=this
if(b==null)return!1
if(J.a0(b)!==A.D(s))return!1
return b instanceof A.i7&&b.a===s.a&&b.b===s.b&&b.c===s.c},
gu(a){return A.Y(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"AssetBundleImageKey(bundle: "+this.a.j(0)+', name: "'+this.b+'", scale: '+A.h(this.c)+")"}}
A.DF.prototype={
pI(a,b){return A.atV(this.lZ(a,b,null),a.b,null,a.c)},
pH(a,b,c){return A.atV(this.lZ(b,null,c),b.b,null,b.c)},
lZ(a,b,c){return this.YV(a,b,c)},
YV(a,b,c){var s=0,r=A.a5(t.hP),q,p=2,o,n,m,l,k,j,i
var $async$lZ=A.a1(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:s=b!=null?3:4
break
case 3:n=null
p=6
s=9
return A.a9(a.a.ux(a.b),$async$lZ)
case 9:n=e
p=2
s=8
break
case 6:p=5
j=o
if(A.ai(j) instanceof A.l2){k=$.fm.he$
k===$&&A.b()
k.mB(a)
throw j}else throw j
s=8
break
case 5:s=2
break
case 8:if(n==null){k=$.fm.he$
k===$&&A.b()
k.mB(a)
throw A.c(A.ab("Unable to read data"))}q=b.$1(n)
s=1
break
case 4:m=null
p=11
s=14
return A.a9(a.a.dd(0,a.b),$async$lZ)
case 14:m=e
p=2
s=13
break
case 11:p=10
i=o
if(A.ai(i) instanceof A.l2){k=$.fm.he$
k===$&&A.b()
k.mB(a)
throw i}else throw i
s=13
break
case 10:s=2
break
case 13:if(m==null){k=$.fm.he$
k===$&&A.b()
k.mB(a)
throw A.c(A.ab("Unable to read data"))}c.toString
q=c.$1(A.d_(m.buffer,0,null))
s=1
break
case 1:return A.a3(q,r)
case 2:return A.a2(o,r)}})
return A.a4($async$lZ,r)}}
A.agB.prototype={}
A.fy.prototype={
gn0(){return this.a},
uF(a){var s,r={},q=a.a
if(q==null)q=$.WX()
r.a=r.b=null
q.a70("AssetManifest.d054361b.json",A.aKI(),t.wd).aI(new A.Xo(r,this,a,q),t.H).h8(new A.Xp(r))
s=r.a
if(s!=null)return s
s=new A.a7($.ad,t.Lv)
r.b=new A.aL(s,t.h8)
return s},
Uu(a,b,c){var s,r,q,p=b.b
if(p==null||c==null||J.he(c))return a
s=A.aqb(t.i,t.N)
for(r=J.aC(c);r.t();){q=r.gI(r)
s.k(0,this.Hh(q),q)}p.toString
return this.VL(s,p)},
VL(a,b){var s,r,q
if(a.nR(b)){s=a.i(0,b)
s.toString
return s}r=a.a6N(b)
q=a.a4Z(b)
if(r==null)return a.i(0,q)
if(q==null)return a.i(0,r)
if(b<2||b>(r+q)/2)return a.i(0,q)
else return a.i(0,r)},
Hh(a){var s,r,q,p
if(a===this.a)return 1
s=A.kc(a,0,null)
r=s.gk_().length>1?s.gk_()[s.gk_().length-2]:""
q=$.ay5().pq(r)
if(q!=null&&q.b.length-1>0){p=q.b[1]
p.toString
return A.arl(p)}return 1},
l(a,b){if(b==null)return!1
if(J.a0(b)!==A.D(this))return!1
return b instanceof A.fy&&b.gn0()===this.gn0()&&!0},
gu(a){return A.Y(this.gn0(),this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"AssetImage(bundle: "+A.h(this.b)+', name: "'+this.gn0()+'")'}}
A.Xo.prototype={
$1(a){var s,r=this,q=r.b,p=q.gn0(),o=a==null?null:J.aY(a,q.gn0())
o=q.Uu(p,r.c,o)
o.toString
s=new A.i7(r.d,o,q.Hh(o))
q=r.a
p=q.b
if(p!=null)p.bS(0,s)
else q.a=new A.bA(s,t.WT)},
$S:235}
A.Xp.prototype={
$2(a,b){this.a.b.cW(a,b)},
$S:30}
A.ff.prototype={
d6(a){return new A.ff(this.a.d6(0),this.b,this.c)},
j(a){var s=this.c
s=s!=null?s+" ":""
return s+this.a.j(0)+" @ "+A.i2(this.b)+"x"},
gu(a){return A.Y(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
l(a,b){var s=this
if(b==null)return!1
if(J.a0(b)!==A.D(s))return!1
return b instanceof A.ff&&b.a===s.a&&b.b===s.b&&b.c==s.c}}
A.dL.prototype={
gu(a){return A.Y(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
l(a,b){var s=this
if(b==null)return!1
if(J.a0(b)!==A.D(s))return!1
return b instanceof A.dL&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&J.f(b.c,s.c)},
a7t(a,b){return this.a.$2(a,b)}}
A.a4S.prototype={
Da(a){var s,r=this
r.a=a
s=r.b
if(s!=null){r.b=null
a.f=!0
B.c.W(s,a.gor(a))
r.a.f=!1}},
Y(a,b){var s=this.a
if(s!=null)return s.Y(0,b)
s=this.b;(s==null?this.b=A.a([],t.XZ):s).push(b)},
F(a,b){var s,r=this.a
if(r!=null)return r.F(0,b)
for(s=0;r=this.b,s<r.length;++s)if(J.f(r[s],b)){r=this.b
r.toString
B.c.ep(r,s)
break}}}
A.a4T.prototype={
m(){var s=this.a;--s.r
s.rm()
this.a=null}}
A.la.prototype={
Y(a,b){var s,r,q,p,o,n,m,l=this
if(l.w)A.L(A.ab(u.V))
l.e=!0
l.a.push(b)
o=l.b
if(o!=null)try{o=o.d6(0)
n=l.f
b.a.$2(o,!n)}catch(m){s=A.ai(m)
r=A.az(m)
l.MV(A.bt("by a synchronously-called image listener"),s,r)}o=l.c
if(o!=null&&b.c!=null)try{n=b.c
n.toString
n.$2(o.a,o.b)}catch(s){q=A.ai(s)
p=A.az(s)
if(!J.f(q,l.c.a))A.e1(new A.bP(q,p,"image resource service",A.bt("by a synchronously-called image error listener"),null,!1))}},
n_(){if(this.w)A.L(A.ab(u.V));++this.r
return new A.a4T(this)},
F(a,b){var s,r,q,p,o,n=this
if(n.w)A.L(A.ab(u.V))
for(s=n.a,r=0;r<s.length;++r)if(J.f(s[r],b)){B.c.ep(s,r)
break}if(s.length===0){s=n.x
q=A.a(s.slice(0),A.ap(s))
for(p=q.length,o=0;o<q.length;q.length===p||(0,A.P)(q),++o)q[o].$0()
B.c.Z(s)
n.rm()}},
rm(){var s,r=this
if(!r.e||r.w||r.a.length!==0||r.r!==0)return
s=r.b
if(s!=null)s.a.m()
r.b=null
r.w=!0},
De(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.w)A.L(A.ab(u.V))
p=i.b
if(p!=null)p.a.m()
i.b=a
p=i.a
if(p.length===0)return
o=A.aF(p,!0,t.dW)
for(p=o.length,n=a.a,m=a.b,l=a.c,k=0;k<p;++k){s=o[k]
try{s.a7t(new A.ff(n.d6(0),m,l),!1)}catch(j){r=A.ai(j)
q=A.az(j)
i.MV(A.bt("by an image listener"),r,q)}}},
ll(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i="image resource service"
this.c=new A.bP(b,e,i,a,c,d)
o=this.a
n=t.kE
m=A.aF(new A.dA(new A.aG(o,new A.a4U(),A.ap(o).h("aG<1,~(C,bL?)?>")),n),!0,n.h("p.E"))
s=!1
for(o=m.length,l=0;l<o;++l){r=m[l]
try{r.$2(b,e)
s=!0}catch(k){q=A.ai(k)
p=A.az(k)
if(!J.f(q,b)){n=A.bt("when reporting an error to an image listener")
j=$.hd()
if(j!=null)j.$1(new A.bP(q,p,i,n,null,!1))}}}if(!s){o=this.c
o.toString
A.e1(o)}},
MV(a,b,c){return this.ll(a,b,null,!1,c)},
a8z(a){var s,r,q,p
if(this.w)A.L(A.ab(u.V))
s=this.a
if(s.length!==0){r=t.r7
q=A.aF(new A.dA(new A.aG(s,new A.a4V(),A.ap(s).h("aG<1,~(fe)?>")),r),!0,r.h("p.E"))
for(s=q.length,p=0;p<s;++p)q[p].$1(a)}}}
A.a4U.prototype={
$1(a){return a.c},
$S:238}
A.a4V.prototype={
$1(a){return a.b},
$S:239}
A.Ky.prototype={
Tf(a,b,c,d,e){this.d=c
b.e9(this.gWW(),new A.a6T(this,d),t.H)},
WX(a){this.z=a
if(this.a.length!==0)this.lR()},
WO(a){var s,r,q,p=this
p.cx=!1
if(p.a.length===0)return
s=p.ay
if(s!=null){r=p.ax
r===$&&A.b()
r=a.a-r.a>=s.a}else r=!0
if(r){s=p.at
p.FO(new A.ff(s.gfK(s).d6(0),p.Q,p.d))
p.ax=a
s=p.at
p.ay=s.gKy(s)
s=p.at
s.gfK(s).m()
p.at=null
q=B.f.f_(p.ch,p.z.gmQ())
if(p.z.gv7()===-1||q<=p.z.gv7())p.lR()
return}s.toString
r=p.ax
r===$&&A.b()
p.CW=A.c3(new A.aS(B.d.b5((s.a-(a.a-r.a))*$.awL)),new A.a6S(p))},
lR(){var s=0,r=A.a5(t.H),q,p=2,o,n=this,m,l,k,j,i
var $async$lR=A.a1(function(a,b){if(a===1){o=b
s=p}while(true)switch(s){case 0:j=n.at
if(j!=null)j.gfK(j).m()
n.at=null
p=4
s=7
return A.a9(n.z.qr(),$async$lR)
case 7:n.at=b
p=2
s=6
break
case 4:p=3
i=o
m=A.ai(i)
l=A.az(i)
n.ll(A.bt("resolving an image frame"),m,n.as,!0,l)
s=1
break
s=6
break
case 3:s=2
break
case 6:if(n.z.gmQ()===1){if(n.a.length===0){s=1
break}j=n.at
n.FO(new A.ff(j.gfK(j).d6(0),n.Q,n.d))
j=n.at
j.gfK(j).m()
n.at=null
s=1
break}n.HJ()
case 1:return A.a3(q,r)
case 2:return A.a2(o,r)}})
return A.a4($async$lR,r)},
HJ(){if(this.cx)return
this.cx=!0
$.bS.qz(this.gWN())},
FO(a){this.De(a);++this.ch},
Y(a,b){var s,r=this
if(r.a.length===0){s=r.z
if(s!=null)s=r.b==null||s.gmQ()>1
else s=!1}else s=!1
if(s)r.lR()
r.DP(0,b)},
F(a,b){var s,r=this
r.DQ(0,b)
if(r.a.length===0){s=r.CW
if(s!=null)s.ar(0)
r.CW=null}},
rm(){this.Pz()
if(this.w)this.y=null}}
A.a6T.prototype={
$2(a,b){this.a.ll(A.bt("resolving an image codec"),a,this.b,!0,b)},
$S:30}
A.a6S.prototype={
$0(){this.a.HJ()},
$S:0}
A.QR.prototype={}
A.QQ.prototype={}
A.Dx.prototype={}
A.le.prototype={
l(a,b){var s
if(b==null)return!1
if(b instanceof A.le)if(b.a===this.a)if(b.b==this.b)s=A.d8(b.f,this.f)
else s=!1
else s=!1
else s=!1
return s},
gu(a){return A.Y(this.a,this.b,this.c,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"InlineSpanSemanticsInformation{text: "+this.a+", semanticsLabel: "+A.h(this.b)+", recognizer: "+A.h(this.c)+"}"}}
A.fg.prototype={
O4(a){var s={}
s.a=null
this.b0(new A.a54(s,a,new A.Dx()))
return s.a},
Ng(a){var s,r=new A.bM("")
this.JU(r,!0,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
ak(a,b){var s={}
if(b<0)return null
s.a=null
this.b0(new A.a53(s,b,new A.Dx()))
return s.a},
l(a,b){if(b==null)return!1
if(this===b)return!0
if(J.a0(b)!==A.D(this))return!1
return b instanceof A.fg&&J.f(b.a,this.a)},
gu(a){return J.q(this.a)}}
A.a54.prototype={
$1(a){var s=a.O5(this.b,this.c)
this.a.a=s
return s==null},
$S:44}
A.a53.prototype={
$1(a){var s=a.a33(this.b,this.c)
this.a.a=s
return s==null},
$S:44}
A.dS.prototype={
aJ(a,b){var s=this.a.aJ(0,b)
return new A.dS(this.b.a3(0,b),s)},
cq(a,b){var s,r,q=this
if(a instanceof A.dS){s=A.aI(a.a,q.a,b)
r=A.i8(a.b,q.b,b)
r.toString
return new A.dS(r,s)}if(a instanceof A.dH){s=A.aI(a.a,q.a,b)
return new A.ex(q.b,1-b,a.b,s)}return q.lG(a,b)},
cr(a,b){var s,r,q=this
if(a instanceof A.dS){s=A.aI(q.a,a.a,b)
r=A.i8(q.b,a.b,b)
r.toString
return new A.dS(r,s)}if(a instanceof A.dH){s=A.aI(q.a,a.a,b)
return new A.ex(q.b,b,a.b,s)}return q.lH(a,b)},
fU(a,b){var s=$.as().ce()
s.f8(this.b.a_(b).dR(a))
return s},
i7(a,b,c){var s,r,q,p,o=this.a
switch(o.c.a){case 0:break
case 1:s=this.b
if(o.b===0)a.dr(s.a_(c).dR(b),o.ie())
else{r=$.as().ba()
r.sap(0,o.a)
q=s.a_(c).dR(b)
p=q.dw(-o.geZ())
a.tP(q.dw(o.gDw()),p,r)}break}},
l(a,b){if(b==null)return!1
if(J.a0(b)!==A.D(this))return!1
return b instanceof A.dS&&b.a.l(0,this.a)&&b.b.l(0,this.b)},
gu(a){return A.Y(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"RoundedRectangleBorder("+this.a.j(0)+", "+this.b.j(0)+")"}}
A.ex.prototype={
aJ(a,b){var s=this.a.aJ(0,b)
return new A.ex(this.b.a3(0,b),b,this.d,s)},
cq(a,b){var s,r,q,p=this
if(a instanceof A.dS){s=A.aI(a.a,p.a,b)
r=A.i8(a.b,p.b,b)
r.toString
return new A.ex(r,p.c*b,p.d,s)}if(a instanceof A.dH){s=A.aI(a.a,p.a,b)
r=p.c
return new A.ex(p.b,r+(1-r)*(1-b),a.b,s)}if(a instanceof A.ex){s=A.aI(a.a,p.a,b)
r=A.i8(a.b,p.b,b)
r.toString
q=A.V(a.c,p.c,b)
q.toString
return new A.ex(r,q,p.d,s)}return p.lG(a,b)},
cr(a,b){var s,r,q,p=this
if(a instanceof A.dS){s=A.aI(p.a,a.a,b)
r=A.i8(p.b,a.b,b)
r.toString
return new A.ex(r,p.c*(1-b),p.d,s)}if(a instanceof A.dH){s=A.aI(p.a,a.a,b)
r=p.c
return new A.ex(p.b,r+(1-r)*b,a.b,s)}if(a instanceof A.ex){s=A.aI(p.a,a.a,b)
r=A.i8(p.b,a.b,b)
r.toString
q=A.V(p.c,a.c,b)
q.toString
return new A.ex(r,q,p.d,s)}return p.lH(a,b)},
HG(a){var s,r,q,p,o,n,m,l,k=this.c
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
ED(a,b){var s,r,q,p=this.b.a_(b),o=this.c
if(o===0)return p
s=this.d
if(s!==0){r=a.c-a.a
q=a.d-a.b
s=0.5+s/2
if(r<q){o=A.p3(p,A.u4(new A.bo(r/2,s*q/2)),o)
o.toString
return o}else{o=A.p3(p,A.u4(new A.bo(s*r/2,q/2)),o)
o.toString
return o}}return A.p3(p,A.cX(a.gfY()/2),o)},
fU(a,b){var s=$.as().ce(),r=this.ED(a,b)
r.toString
s.f8(r.dR(this.HG(a)))
return s},
i7(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=this.ED(b,c)
s.toString
a.dr(s.dR(this.HG(b)).dw(r.b*r.d/2),r.ie())
break}},
l(a,b){var s=this
if(b==null)return!1
if(J.a0(b)!==A.D(s))return!1
return b instanceof A.ex&&b.a.l(0,s.a)&&b.b.l(0,s.b)&&b.c===s.c},
gu(a){return A.Y(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this,r="RoundedRectangleBorder(",q=s.d
if(q!==0)return r+s.a.j(0)+", "+s.b.j(0)+", "+B.d.N(s.c*100,1)+u.T+B.d.N(q*100,1)+"% oval)"
return r+s.a.j(0)+", "+s.b.j(0)+", "+B.d.N(s.c*100,1)+"% of the way to being a CircleBorder)"}}
A.eW.prototype={
aJ(a,b){return new A.eW(this.a.aJ(0,b))},
cq(a,b){var s,r=this
if(a instanceof A.eW)return new A.eW(A.aI(a.a,r.a,b))
if(a instanceof A.dH){s=A.aI(a.a,r.a,b)
return new A.ez(1-b,a.b,s)}if(a instanceof A.dS){s=A.aI(a.a,r.a,b)
return new A.eA(a.b,1-b,s)}return r.lG(a,b)},
cr(a,b){var s,r=this
if(a instanceof A.eW)return new A.eW(A.aI(r.a,a.a,b))
if(a instanceof A.dH){s=A.aI(r.a,a.a,b)
return new A.ez(b,a.b,s)}if(a instanceof A.dS){s=A.aI(r.a,a.a,b)
return new A.eA(a.b,b,s)}return r.lH(a,b)},
fU(a,b){var s=a.gfY()/2,r=$.as().ce()
r.f8(A.apX(a,new A.bo(s,s)))
return r},
i7(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=b.gfY()/2
a.dr(A.apX(b,new A.bo(s,s)).dw(r.b*r.d/2),r.ie())
break}},
l(a,b){if(b==null)return!1
if(J.a0(b)!==A.D(this))return!1
return b instanceof A.eW&&b.a.l(0,this.a)},
gu(a){var s=this.a
return A.Y(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"StadiumBorder("+this.a.j(0)+")"}}
A.ez.prototype={
aJ(a,b){return new A.ez(b,this.c,this.a.aJ(0,b))},
cq(a,b){var s,r,q,p=this
if(a instanceof A.eW)return new A.ez(p.b*b,p.c,A.aI(a.a,p.a,b))
if(a instanceof A.dH){s=A.aI(a.a,p.a,b)
r=p.b
return new A.ez(r+(1-r)*(1-b),a.b,s)}if(a instanceof A.ez){s=A.aI(a.a,p.a,b)
r=A.V(a.b,p.b,b)
r.toString
q=A.V(a.c,p.c,b)
q.toString
return new A.ez(r,q,s)}return p.lG(a,b)},
cr(a,b){var s,r,q,p=this
if(a instanceof A.eW)return new A.ez(p.b*(1-b),p.c,A.aI(p.a,a.a,b))
if(a instanceof A.dH){s=A.aI(p.a,a.a,b)
r=p.b
return new A.ez(r+(1-r)*b,a.b,s)}if(a instanceof A.ez){s=A.aI(p.a,a.a,b)
r=A.V(p.b,a.b,b)
r.toString
q=A.V(p.c,a.c,b)
q.toString
return new A.ez(r,q,s)}return p.lH(a,b)},
Ie(a){var s,r,q,p,o,n,m,l,k=this.b
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
og(a){var s,r,q,p=A.cX(a.gfY()/2),o=this.c
if(o!==0){s=a.c-a.a
r=a.d-a.b
q=this.b
o=0.5+o/2
if(s<r){o=A.p3(p,A.u4(new A.bo(s/2,o*r/2)),q)
o.toString
return o}else{o=A.p3(p,A.u4(new A.bo(o*s/2,r/2)),q)
o.toString
return o}}return p},
fU(a,b){var s=$.as().ce()
s.f8(this.og(a).dR(this.Ie(a)))
return s},
i7(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.dr(this.og(b).dR(this.Ie(b)).dw(s.b*s.d/2),s.ie())
break}},
l(a,b){if(b==null)return!1
if(J.a0(b)!==A.D(this))return!1
return b instanceof A.ez&&b.a.l(0,this.a)&&b.b===this.b},
gu(a){return A.Y(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this,r=s.c
if(r!==0)return"StadiumBorder("+s.a.j(0)+", "+B.d.N(s.b*100,1)+u.T+B.d.N(r*100,1)+"% oval)"
return"StadiumBorder("+s.a.j(0)+", "+B.d.N(s.b*100,1)+"% of the way to being a CircleBorder)"}}
A.eA.prototype={
aJ(a,b){var s=this.a.aJ(0,b)
return new A.eA(this.b.a3(0,b),b,s)},
cq(a,b){var s,r,q,p=this
if(a instanceof A.eW)return new A.eA(p.b,p.c*b,A.aI(a.a,p.a,b))
if(a instanceof A.dS){s=p.c
return new A.eA(p.b,s+(1-s)*(1-b),A.aI(a.a,p.a,b))}if(a instanceof A.eA){s=A.aI(a.a,p.a,b)
r=A.i8(a.b,p.b,b)
r.toString
q=A.V(a.c,p.c,b)
q.toString
return new A.eA(r,q,s)}return p.lG(a,b)},
cr(a,b){var s,r,q,p=this
if(a instanceof A.eW)return new A.eA(p.b,p.c*(1-b),A.aI(p.a,a.a,b))
if(a instanceof A.dS){s=p.c
return new A.eA(p.b,s+(1-s)*b,A.aI(p.a,a.a,b))}if(a instanceof A.eA){s=A.aI(p.a,a.a,b)
r=A.i8(p.b,a.b,b)
r.toString
q=A.V(p.c,a.c,b)
q.toString
return new A.eA(r,q,s)}return p.lH(a,b)},
og(a){var s=a.gfY()/2
s=A.i8(this.b,A.u4(new A.bo(s,s)),1-this.c)
s.toString
return s},
fU(a,b){var s=$.as().ce()
s.f8(this.og(a).a_(b).dR(a))
return s},
i7(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.dr(this.og(b).a_(c).dR(b).dw(s.b*s.d/2),s.ie())
break}},
l(a,b){var s=this
if(b==null)return!1
if(J.a0(b)!==A.D(s))return!1
return b instanceof A.eA&&b.a.l(0,s.a)&&b.b.l(0,s.b)&&b.c===s.c},
gu(a){return A.Y(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"StadiumBorder("+this.a.j(0)+", "+this.b.j(0)+", "+B.d.N(this.c*100,1)+"% of the way to being a RoundedRectangleBorder)"}}
A.of.prototype={
H(){return"TextOverflow."+this.b}}
A.nz.prototype={
l(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(b instanceof A.nz)if(b.a.l(0,r.a))if(b.b===r.b)s=b.c==r.c
else s=!1
else s=!1
else s=!1
return s},
gu(a){var s=this
return A.Y(s.a,s.b,s.d,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"PlaceholderDimensions("+this.a.j(0)+", "+A.h(this.d)+")"}}
A.zv.prototype={
H(){return"TextWidthBasis."+this.b}}
A.afX.prototype={}
A.zr.prototype={
a6(){var s=this,r=s.a
if(r!=null)r.m()
s.dy=s.dx=s.fr=s.a=null},
scF(a,b){var s,r,q=this
if(J.f(q.d,b))return
s=q.d
s=s==null?null:s.a
if(!J.f(s,b.a)){s=q.CW
if(s!=null)s.m()
q.CW=null}s=q.d
s=s==null?null:s.aN(0,b)
r=s==null?B.cX:s
q.d=b
q.e=null
s=r.a
if(s>=3)q.a6()
else if(s>=2)q.b=!0},
guV(){var s=this.e
if(s==null){s=this.d
s=s==null?null:s.Ng(!1)
this.e=s}return s==null?"":s},
sCa(a,b){if(this.f===b)return
this.f=b
this.a6()},
sbJ(a){var s,r=this
if(r.r===a)return
r.r=a
r.a6()
s=r.CW
if(s!=null)s.m()
r.CW=null},
sCb(a){var s,r=this
if(r.w===a)return
r.w=a
r.a6()
s=r.CW
if(s!=null)s.m()
r.CW=null},
sa4z(a){if(this.x==a)return
this.x=a
this.a6()},
sB0(a,b){if(J.f(this.y,b))return
this.y=b
this.a6()},
sB5(a){if(this.z==a)return
this.z=a
this.a6()},
sCc(a){if(this.as===a)return
this.as=a
this.a6()},
vN(a){if(a==null||a.length===0||A.d8(a,this.ch))return
this.ch=a
this.a6()},
Fw(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.d.a
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
o=l==null?f:new A.NU(l)
k=e.w
j=e.x
i=e.d
h=e.r
if(h==null)h=14
e=e.as
e=A.apR(n,i,h*q,j,k,e,m,p,f,s,r,o)}if(e==null){e=g.f
s=g.r
if(s==null)s=a
r=g.w
q=g.z
p=g.at
p=A.apR(g.x,f,14*r,f,f,f,g.y,q,f,e,s,p)
e=p}return e},
UY(){return this.Fw(null)},
guX(){var s,r,q=this,p=q.CW
if(p==null){p=q.Fw(B.a1)
s=$.as().zB(p)
p=q.d
if(p==null)r=null
else{p=p.a
r=p==null?null:p.CV(q.w)}if(r!=null)s.BT(r)
s.t5(" ")
p=s.be()
p.hk(B.Vi)
q.CW=p}return p.gc0(p)},
gbv(a){var s=this.as,r=this.a
s=s===B.a0j?r.gM2():r.gbv(r)
return Math.ceil(s)},
eG(a){var s
switch(a.a){case 0:s=this.a
return s.gta(s)
case 1:s=this.a
return s.ga6c(s)}},
Fv(){var s,r,q=this,p=q.d
if(p==null)throw A.c(A.ab("TextPainter.text must be set to a non-null value before using the TextPainter."))
s=q.UY()
r=$.as().zB(s)
s=q.w
p.JF(r,q.ch,s)
q.ay=r.ga7N()
q.a=r.be()
q.b=!1},
GN(a,b){var s,r,q=this
q.a.hk(new A.lx(b))
if(a!==b){switch(q.as.a){case 1:s=Math.ceil(q.a.gM2())
break
case 0:s=Math.ceil(q.a.ga77())
break
default:s=null}s=A.J(s,a,b)
r=q.a
if(s!==Math.ceil(r.gbv(r)))q.a.hk(new A.lx(s))}},
AY(a,b){var s=this,r=s.a==null
if(!r&&b===s.cx&&a===s.cy)return
if(s.b||r)s.Fv()
s.cx=b
s.cy=a
s.dy=s.dx=s.fr=null
s.GN(b,a)
s.ax=s.a.vo()},
a6P(){return this.AY(1/0,0)},
aF(a,b){var s,r=this,q=r.cx,p=r.cy
if(r.a==null||q==null||p==null)throw A.c(A.ab("TextPainter.paint called when text geometry was not yet calculated.\nPlease call layout() before paint() to position the text before painting it."))
if(r.b){r.Fv()
r.GN(q,p)}s=r.a
s.toString
a.kW(s,b)},
G6(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.guV().length
if(g===0||a>g)return null
s=B.b.ak(h.guV(),Math.max(0,a-1))
r=(s&63488)===55296||h.d.ak(0,a)===8205||s===8207||s===8206
q=r?2:1
p=A.a([],t.Lx)
for(o=-g,n=!r,m=s===10;p.length===0;){l=a-q
p=h.a.CG(l,a,B.mM)
if(p.length===0){if(n&&m)break
if(l<o)break
q*=2
continue}k=B.c.gK(p)
if(m){o=k.d
return new A.E(h.gx5().a,o,h.gx5().a,o+o-k.b)}o=k.e
j=o===B.w?k.c:k.a
i=o===B.a1?j-(b.c-b.a):j
o=h.a
o=A.J(i,0,o.gbv(o))
n=h.a
return new A.E(o,k.b,A.J(i,0,n.gbv(n)),k.d)}return null},
G5(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.guV().length
if(h===0||a<0)return null
s=B.b.ak(i.guV(),Math.min(a,h-1))
r=(s&63488)===55296||s===8205||s===8207||s===8206
q=r?2:1
p=A.a([],t.Lx)
for(o=h<<1>>>0,n=!r;p.length===0;){m=a+q
p=i.a.CG(a,m,B.mM)
if(p.length===0){if(n)break
if(m>=o)break
q*=2
continue}l=B.c.gT(p)
o=l.e
k=o===B.w?l.a:l.c
j=o===B.a1?k-(b.c-b.a):k
o=i.a
o=A.J(j,0,o.gbv(o))
n=i.a
return new A.E(o,l.b,A.J(j,0,n.gbv(n)),l.d)}return null},
gx5(){var s=this
switch(s.f.a){case 0:return B.j
case 1:return new A.r(s.gbv(s),0)
case 2:return new A.r(s.gbv(s)/2,0)
case 3:case 4:switch(s.r.a){case 0:return new A.r(s.gbv(s),0)
case 1:return B.j}break
case 5:switch(s.r.a){case 0:return B.j
case 1:return new A.r(s.gbv(s),0)}break}},
Fl(a,b){var s,r,q,p,o=this
if(a.l(0,o.dx)&&b.l(0,o.dy))return
s=a.a
switch(a.b.a){case 0:r=o.G6(s,b)
if(r==null)r=o.G5(s,b)
break
case 1:r=o.G5(s,b)
if(r==null)r=o.G6(s,b)
break
default:r=null}q=r!=null
p=q?new A.r(r.a,r.b):o.gx5()
o.db=new A.afX(p,q?r.d-r.b:null)
o.dx=a
o.dy=b},
m(){var s=this,r=s.CW
if(r!=null)r.m()
s.CW=null
r=s.a
if(r!=null)r.m()
s.d=s.a=null}}
A.zu.prototype={
gKb(a){return this.e},
gCy(){return!0},
iN(a,b){t.c.b(a)},
JF(a,b,c){var s,r,q,p,o,n=this.a,m=n!=null
if(m)a.BT(n.CV(c))
n=this.b
if(n!=null)try{a.t5(n)}catch(q){n=A.ai(q)
if(n instanceof A.hf){s=n
r=A.az(q)
A.e1(new A.bP(s,r,"painting library",A.bt("while building a TextSpan"),null,!1))
a.t5("\ufffd")}else throw q}n=this.c
if(n!=null)for(p=n.length,o=0;o<n.length;n.length===p||(0,A.P)(n),++o)n[o].JF(a,b,c)
if(m)a.ho()},
b0(a){var s,r,q
if(this.b!=null)if(!a.$1(this))return!1
s=this.c
if(s!=null)for(r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)if(!s[q].b0(a))return!1
return!0},
O5(a,b){var s,r,q,p,o=this.b
if(o==null)return null
s=a.b
r=a.a
q=b.a
p=q+o.length
if(!(q===r&&s===B.J))if(!(q<r&&r<p))o=p===r&&s===B.W
else o=!0
else o=!0
if(o)return this
b.a=p
return null},
JU(a,b,c){var s,r,q=this.b
if(q!=null)a.a+=q
q=this.c
if(q!=null)for(s=q.length,r=0;r<q.length;q.length===s||(0,A.P)(q),++r)q[r].JU(a,!0,c)},
JT(a,b,c){var s,r,q=this.b
if(q!=null){s=A.a([],t.oU)
a.push(A.atx(q,null,null,s))}q=this.c
if(q!=null)for(s=q.length,r=0;r<q.length;q.length===s||(0,A.P)(q),++r)q[r].JT(a,b,!1)},
a3j(a){return this.JT(a,null,!1)},
a33(a,b){var s,r,q,p=this.b
if(p==null)return null
s=b.a
r=a-s
q=p.length
if(r<q)return B.b.ak(p,r)
b.a=s+q
return null},
aN(a,b){var s,r,q,p,o,n=this
if(n===b)return B.dX
if(A.D(b)!==A.D(n))return B.cX
if(b.b==n.b){s=n.c
s=s==null?null:s.length
r=b.c
s=s!=(r==null?null:r.length)||n.a==null!==(b.a==null)}else s=!0
if(s)return B.cX
s=n.a
if(s!=null){r=b.a
r.toString
q=s.aN(0,r)
p=q.a>0?q:B.dX
if(p===B.cX)return p}else p=B.dX
s=n.c
if(s!=null)for(r=b.c,o=0;o<s.length;++o){q=s[o].aN(0,r[o])
if(q.a>p.a)p=q
if(p===B.cX)return p}return p},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.a0(b)!==A.D(s))return!1
if(!s.PC(0,b))return!1
return b instanceof A.zu&&b.b==s.b&&s.e.l(0,b.e)&&A.d8(b.c,s.c)},
gu(a){var s=this,r=null,q=A.fg.prototype.gu.call(s,s),p=s.c
p=p==null?r:A.dv(p)
return A.Y(q,s.b,r,r,r,r,s.e,p,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
cd(){return"TextSpan"},
$iar:1,
$ijK:1,
gBs(){return null},
gBt(){return null}}
A.u.prototype={
gmP(){return this.e},
gme(a){return this.d},
oL(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=c0==null?a0.a:c0,a2=a0.ay
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
b=b1==null?a0.gme(a0):b1
a=b2==null?a0.e:b2
return A.b5(r,q,s,null,f,e,d,c,b,a,a0.fr,p,n,g,o,a2,j,a1,i,m,a0.ax,a0.fy,a0.f,h,k,l)},
a3M(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5){return this.oL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,null,r,s,a0,a1,a2,a3,a4,a5)},
hS(a){return this.oL(null,null,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
a3B(a){return this.oL(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null)},
K0(a){return this.oL(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null,null,null)},
K4(a,b){return this.oL(null,null,a,null,null,null,null,null,null,null,null,b,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
cn(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
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
a1=a4.gme(a4)
a2=a4.e
a3=a4.f
return this.a3M(g,r,s,null,c,b,a,a0,a1,a2,e,q,o,d,p,h,k,j,n,i,a4.fy,a3,f,l,m)},
CV(a){var s,r,q=this,p=q.gmP(),o=q.r
o=o==null?null:o*a
s=q.ch
if(s==null){s=q.c
if(s!=null){r=$.as().ba()
r.sap(0,s)
s=r}else s=null}return A.av_(s,q.b,q.CW,q.cx,q.cy,q.db,q.d,p,q.fr,o,q.x,q.fx,q.w,q.ay,q.as,q.at,q.y,q.ax,q.dy,q.Q,q.z)},
aN(a,b){var s=this
if(s===b)return B.dX
if(s.a!==b.a||s.d!=b.d||s.r!=b.r||s.w!=b.w||s.x!=b.x||s.y!=b.y||s.z!=b.z||s.Q!=b.Q||s.as!=b.as||s.at!=b.at||s.ay!=b.ay||s.ch!=b.ch||!A.d8(s.dy,b.dy)||!A.d8(s.fr,b.fr)||!A.d8(s.fx,b.fx)||!A.d8(s.gmP(),b.gmP())||!1)return B.cX
if(!J.f(s.b,b.b)||!J.f(s.c,b.c)||!J.f(s.CW,b.CW)||!J.f(s.cx,b.cx)||s.cy!=b.cy||s.db!=b.db)return B.VC
return B.dX},
l(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.a0(b)!==A.D(r))return!1
if(b instanceof A.u)if(b.a===r.a)if(J.f(b.b,r.b))if(J.f(b.c,r.c))if(b.r==r.r)if(b.w==r.w)if(b.x==r.x)if(b.y==r.y)if(b.z==r.z)if(b.Q==r.Q)if(b.as==r.as)if(b.at==r.at)if(b.ay==r.ay)if(b.ch==r.ch)if(A.d8(b.dy,r.dy))if(A.d8(b.fr,r.fr))if(A.d8(b.fx,r.fx))if(J.f(b.CW,r.CW))if(J.f(b.cx,r.cx))if(b.cy==r.cy)if(b.db==r.db)if(b.d==r.d)if(A.d8(b.gmP(),r.gmP()))s=!0
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
gu(a){var s,r=this,q=null,p=r.gmP(),o=p==null?q:A.dv(p),n=A.Y(r.cy,r.db,r.d,o,r.f,r.fy,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a),m=r.dy,l=r.fx
o=m==null?q:A.dv(m)
s=l==null?q:A.dv(l)
return A.Y(r.a,r.b,r.c,r.r,r.w,r.x,r.y,r.z,r.Q,r.as,r.at,r.ax,r.ay,r.ch,o,q,s,r.CW,r.cx,n)},
cd(){return"TextStyle"}}
A.UB.prototype={}
A.HF.prototype={
Tb(a,b,c,d,e){var s=this
s.r=A.awu(new A.a2p(s),s.gA4(s),0,10,0)},
dg(a,b){var s,r,q=this
if(b>q.r)return q.gu1()
s=q.e
r=q.c
return q.d+s*Math.pow(q.b,b)/r-s/r-q.f/2*b*b},
dZ(a,b){var s=this
if(b>s.r)return 0
return s.e*Math.pow(s.b,b)-s.f*b},
gu1(){var s=this
if(s.f===0)return s.d-s.e/s.c
return s.dg(0,s.r)},
Nb(a){var s,r=this,q=r.d
if(a===q)return 0
s=r.e
if(s!==0)if(s>0)q=a<q||a>r.gu1()
else q=a>q||a<r.gu1()
else q=!0
if(q)return 1/0
return A.awu(r.gA4(r),r.ga9z(r),0,10,a)},
jR(a){return Math.abs(this.dZ(0,a))<this.a.c},
j(a){return"FrictionSimulation(c\u2093: "+B.d.N(this.b,1)+", x\u2080: "+B.d.N(this.d,1)+", dx\u2080: "+B.d.N(this.e,1)+")"}}
A.a2p.prototype={
$1(a){var s=this.a
return s.e*Math.pow(s.b,a)*s.c-s.f},
$S:77}
A.abl.prototype={
j(a){return"Simulation"}}
A.adj.prototype={
j(a){return"SpringDescription(mass: "+B.d.N(this.a,1)+", stiffness: "+B.f.N(this.b,1)+", damping: "+B.d.N(this.c,1)+")"}}
A.r_.prototype={
H(){return"SpringType."+this.b}}
A.Ny.prototype={
dg(a,b){return this.b+this.c.dg(0,b)},
dZ(a,b){return this.c.dZ(0,b)},
jR(a){var s=this.c
return A.Dj(s.dg(0,a),0,this.a.a)&&A.Dj(s.dZ(0,a),0,this.a.c)},
j(a){var s=this.c
return"SpringSimulation(end: "+B.d.N(this.b,1)+", "+s.gdB(s).j(0)+")"}}
A.lL.prototype={
dg(a,b){return this.jR(b)?this.b:this.Rh(0,b)}}
A.agb.prototype={
dg(a,b){return(this.b+this.c*b)*Math.pow(2.718281828459045,this.a*b)},
dZ(a,b){var s=this.a,r=Math.pow(2.718281828459045,s*b),q=this.c
return s*(this.b+q*b)*r+q*r},
gdB(a){return B.X6}}
A.aj2.prototype={
dg(a,b){var s=this
return s.c*Math.pow(2.718281828459045,s.a*b)+s.d*Math.pow(2.718281828459045,s.b*b)},
dZ(a,b){var s=this,r=s.a,q=s.b
return s.c*r*Math.pow(2.718281828459045,r*b)+s.d*q*Math.pow(2.718281828459045,q*b)},
gdB(a){return B.X8}}
A.alI.prototype={
dg(a,b){var s=this,r=s.a*b
return Math.pow(2.718281828459045,s.b*b)*(s.c*Math.cos(r)+s.d*Math.sin(r))},
dZ(a,b){var s,r=this,q=r.b,p=Math.pow(2.718281828459045,q*b),o=r.a,n=o*b,m=Math.cos(n),l=Math.sin(n)
n=r.d
s=r.c
return p*(n*o*m-s*o*l)+q*p*(n*l+s*m)},
gdB(a){return B.X7}}
A.O6.prototype={
j(a){return"Tolerance(distance: \xb1"+A.h(this.a)+", time: \xb10.001, velocity: \xb1"+A.h(this.c)+")"}}
A.qC.prototype={
Au(){var s=this,r=s.y1$
r===$&&A.b()
r=r.e
r.toString
r.szq(s.K9())
if(s.y1$.e.B$!=null)s.Oe()},
AA(){},
Aw(){},
K9(){var s,r=$.cG(),q=r.w
if(q==null){s=self.window.devicePixelRatio
q=s===0?1:s}return new A.Oq(r.gli().dh(0,q),q)},
Y7(){var s,r=this
if($.aX().a.c){if(r.y2$==null){s=r.y1$
s===$&&A.b()
r.y2$=s.KH()}}else{s=r.y2$
if(s!=null)s.m()
r.y2$=null}},
OD(a){var s,r=this
if(a){if(r.y2$==null){s=r.y1$
s===$&&A.b()
r.y2$=s.KH()}}else{s=r.y2$
if(s!=null)s.m()
r.y2$=null}},
Yq(a){B.UZ.o_("first-frame",null,!1,t.H)},
Y5(a,b,c){var s=this.y1$
s===$&&A.b()
s=s.as
if(s!=null)s.a7L(a,b,null)},
Y9(){var s,r=this.y1$
r===$&&A.b()
r=r.e
r.toString
s=t.W
s.a(A.M.prototype.gbI.call(r)).ay.D(0,r)
s.a(A.M.prototype.gbI.call(r)).nd()},
Yd(a){var s=this.y1$
s===$&&A.b()
s.e.toString
s=$.e0;(s==null?$.e0=A.l_():s).a9i(a)},
Yb(){var s=this.y1$
s===$&&A.b()
s.e.mo()},
XC(a){this.A3()
this.a0c()},
a0c(){$.bS.cy$.push(new A.a9t(this))},
Jr(){--this.bA$
if(!this.bg$)this.vD()},
A3(){var s=this,r=s.y1$
r===$&&A.b()
r.a51()
s.y1$.a50()
s.y1$.a52()
if(s.bg$||s.bA$===0){s.y1$.e.a3e()
s.y1$.a53()
s.bg$=!0}},
$iar:1,
$idT:1}
A.a9t.prototype={
$1(a){var s=this.a,r=s.xr$
r.toString
s=s.y1$
s===$&&A.b()
r.a9e(s.e.ga69())},
$S:2}
A.aJ.prototype={
zy(a,b,c,d){var s=this,r=d==null?s.a:d,q=b==null?s.b:b,p=c==null?s.c:c
return new A.aJ(r,q,p,a==null?s.d:a)},
a3J(a,b){return this.zy(null,null,a,b)},
K2(a){return this.zy(a,null,null,null)},
a3C(a){return this.zy(null,a,null,null)},
Kf(a){var s=this,r=a.gcB(),q=a.gbl(a)+a.gbp(a),p=Math.max(0,s.a-r),o=Math.max(0,s.c-q)
return new A.aJ(p,Math.max(p,s.b-r),o,Math.max(o,s.d-q))},
pb(a){var s=this,r=a.a,q=a.b,p=a.c,o=a.d
return new A.aJ(A.J(s.a,r,q),A.J(s.b,r,q),A.J(s.c,p,o),A.J(s.d,p,o))},
Cf(a,b){var s,r,q=this,p=b==null,o=q.a,n=p?o:A.J(b,o,q.b),m=q.b
p=p?m:A.J(b,o,m)
o=a==null
m=q.c
s=o?m:A.J(a,m,q.d)
r=q.d
return new A.aJ(n,p,s,o?r:A.J(a,m,r))},
ve(a){return this.Cf(a,null)},
Ce(a){return this.Cf(null,a)},
by(a){var s=this
return new A.K(A.J(a.a,s.a,s.b),A.J(a.b,s.c,s.d))},
oK(a){var s,r,q,p,o,n=this,m=n.a,l=n.b
if(m>=l&&n.c>=n.d)return new A.K(A.J(0,m,l),A.J(0,n.c,n.d))
s=a.a
r=a.b
q=s/r
if(s>l){r=l/q
s=l}p=n.d
if(r>p){s=p*q
r=p}if(s<m){r=m/q
s=m}o=n.c
if(r<o){s=o*q
r=o}return new A.K(A.J(s,m,l),A.J(r,o,p))},
gLR(){var s=this
return s.a>=s.b&&s.c>=s.d},
a3(a,b){var s=this
return new A.aJ(s.a*b,s.b*b,s.c*b,s.d*b)},
dh(a,b){var s=this
return new A.aJ(s.a/b,s.b/b,s.c/b,s.d/b)},
ga6C(){var s=this,r=s.a
if(r>=0)if(r<=s.b){r=s.c
r=r>=0&&r<=s.d}else r=!1
else r=!1
return r},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.a0(b)!==A.D(s))return!1
return b instanceof A.aJ&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gu(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s,r=this,q=r.ga6C()?"":"; NOT NORMALIZED",p=r.a
if(p===1/0&&r.c===1/0)return"BoxConstraints(biggest"+q+")"
if(p===0&&r.b===1/0&&r.c===0&&r.d===1/0)return"BoxConstraints(unconstrained"+q+")"
s=new A.XQ()
return"BoxConstraints("+s.$3(p,r.b,"w")+", "+s.$3(r.c,r.d,"h")+q+")"}}
A.XQ.prototype={
$3(a,b,c){if(a===b)return c+"="+B.d.N(a,1)
return B.d.N(a,1)+"<="+c+"<="+B.d.N(b,1)},
$S:245}
A.i9.prototype={
z2(a,b,c){if(c!=null){c=A.Kl(A.apT(c))
if(c==null)return!1}return this.Jp(a,b,c)},
os(a,b,c){var s,r=b==null,q=r?c:c.af(0,b)
r=!r
if(r)this.c.push(new A.t5(new A.r(-b.a,-b.b)))
s=a.$2(this,q)
if(r)this.uW()
return s},
Jp(a,b,c){var s,r=c==null,q=r?b:A.cM(c,b)
r=!r
if(r)this.c.push(new A.AN(c))
s=a.$2(this,q)
if(r)this.uW()
return s},
Jo(a,b,c){var s,r=this
if(b!=null)r.c.push(new A.t5(new A.r(-b.a,-b.b)))
else{c.toString
c=A.Kl(A.apT(c))
c.toString
r.c.push(new A.AN(c))}s=a.$1(r)
r.uW()
return s},
a2i(a,b){return this.Jo(a,null,b)},
a2h(a,b){return this.Jo(a,b,null)}}
A.p6.prototype={
j(a){return"<optimized out>#"+A.c4(this.a)+"@"+this.c.j(0)}}
A.eG.prototype={
j(a){return"offset="+this.a.j(0)}}
A.ut.prototype={}
A.G.prototype={
ex(a){if(!(a.e instanceof A.eG))a.e=new A.eG(B.j)},
fT(a){var s,r=this.k1
if(r==null)r=this.k1=A.y(t.k,t.FW)
s=r.bQ(0,a,new A.a8W(this,a))
return s},
ck(a){return B.R},
gkg(){var s=this.k3
return new A.E(0,0,0+s.a,0+s.b)},
vt(a,b){var s=null
try{s=this.j7(a)}finally{}if(s==null&&!b)return this.k3.b
return s},
NP(a){return this.vt(a,!1)},
j7(a){var s=this,r=s.k4
if(r==null)r=s.k4=A.y(t._0,t.PM)
r.bQ(0,a,new A.a8V(s,a))
return s.k4.i(0,a)},
eG(a){return null},
ga1(){return t.k.a(A.z.prototype.ga1.call(this))},
Ux(){var s,r=this,q=r.k4,p=q==null
if(!(!p&&q.a!==0)){s=r.id
if(!(s!=null&&s.a!==0)){s=r.k1
s=s!=null&&s.a!==0}else s=!0}else s=!0
if(s){if(!p)q.Z(0)
q=r.id
if(q!=null)q.Z(0)
q=r.k1
if(q!=null)q.Z(0)
return!0}return!1},
a6(){var s=this
if(s.Ux()&&s.c instanceof A.z){s.uA()
return}s.Qz()},
cC(a,b){var s,r=this
if(r.k3!=null)if(!a.l(0,t.k.a(A.z.prototype.ga1.call(r)))){s=r.k4
s=s!=null&&s.a!==0}else s=!1
else s=!1
if(s){s=r.k4
if(s!=null)s.Z(0)}r.Qy(a,b)},
hk(a){return this.cC(a,!1)},
pZ(){this.k3=this.ck(t.k.a(A.z.prototype.ga1.call(this)))},
bD(){},
c5(a,b){var s=this
if(s.k3.C(0,b))if(s.d_(a,b)||s.jQ(b)){a.D(0,new A.p6(b,s))
return!0}return!1},
jQ(a){return!1},
d_(a,b){return!1},
dk(a,b){var s,r=a.e
r.toString
s=t.hX.a(r).a
b.aA(0,s.a,s.b)},
lv(a){var s,r,q,p,o,n=this.bM(0,null)
if(n.hR(n)===0)return B.j
s=new A.h5(new Float64Array(3))
s.fX(0,0,1)
r=new A.h5(new Float64Array(3))
r.fX(0,0,0)
q=n.iZ(r)
r=new A.h5(new Float64Array(3))
r.fX(0,0,1)
p=n.iZ(r).af(0,q)
r=new A.h5(new Float64Array(3))
r.fX(a.a,a.b,0)
o=n.iZ(r)
r=o.af(0,p.D5(s.Kt(o)/s.Kt(p))).a
return new A.r(r[0],r[1])},
gi8(){var s=this.k3
return new A.E(0,0,0+s.a,0+s.b)},
iN(a,b){this.Qx(a,b)}}
A.a8W.prototype={
$0(){return this.a.ck(this.b)},
$S:246}
A.a8V.prototype={
$0(){return this.a.eG(this.b)},
$S:247}
A.d1.prototype={
a4h(a){var s,r,q,p=this.a8$
for(s=A.o(this).h("d1.1?");p!=null;){r=s.a(p.e)
q=p.j7(a)
if(q!=null)return q+r.a.b
p=r.a9$}return null},
Ke(a){var s,r,q,p,o=this.a8$
for(s=A.o(this).h("d1.1"),r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.j7(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.a9$}return r},
zI(a,b){var s,r,q={},p=q.a=this.bz$
for(s=A.o(this).h("d1.1");p!=null;p=r){p=p.e
p.toString
s.a(p)
if(a.os(new A.a8U(q,b,p),p.a,b))return!0
r=p.aO$
q.a=r}return!1},
oP(a,b){var s,r,q,p,o,n=this.a8$
for(s=A.o(this).h("d1.1"),r=b.a,q=b.b;n!=null;){p=n.e
p.toString
s.a(p)
o=p.a
a.eP(n,new A.r(o.a+r,o.b+q))
n=p.a9$}}}
A.a8U.prototype={
$2(a,b){return this.a.a.c5(a,b)},
$S:20}
A.A3.prototype={
au(a){this.w6(0)}}
A.fN.prototype={
j(a){return this.qI(0)+"; id="+A.h(this.e)}}
A.Kx.prototype={
e6(a,b){var s,r=this.b.i(0,a)
r.cC(b,!0)
s=r.k3
s.toString
return s},
eo(a,b){var s=this.b.i(0,a).e
s.toString
t.Wz.a(s).a=b},
Ue(a,b){var s,r,q,p,o,n,m=this,l=m.b
try{m.b=A.y(t.K,t.x)
for(r=t.Wz,q=b;q!=null;q=n){p=q.e
p.toString
s=r.a(p)
p=m.b
p.toString
o=s.e
o.toString
p.k(0,o,q)
n=s.a9$}m.uU(a)}finally{m.b=l}},
j(a){return"MultiChildLayoutDelegate"}}
A.M0.prototype={
ex(a){if(!(a.e instanceof A.fN))a.e=new A.fN(null,null,B.j)},
szL(a){var s=this,r=s.M
if(r===a)return
if(A.D(a)!==A.D(r)||a.nv(r))s.a6()
s.M=a
s.b!=null},
aB(a){this.RH(a)},
au(a){this.RI(0)},
ck(a){return a.by(new A.K(A.J(1/0,a.a,a.b),A.J(1/0,a.c,a.d)))},
bD(){var s=this,r=t.k.a(A.z.prototype.ga1.call(s))
r=r.by(new A.K(A.J(1/0,r.a,r.b),A.J(1/0,r.c,r.d)))
s.k3=r
s.M.Ue(r,s.a8$)},
aF(a,b){this.oP(a,b)},
d_(a,b){return this.zI(a,b)}}
A.Bd.prototype={
aB(a){var s,r,q
this.eA(a)
s=this.a8$
for(r=t.Wz;s!=null;){s.aB(a)
q=s.e
q.toString
s=r.a(q).a9$}},
au(a){var s,r,q
this.dT(0)
s=this.a8$
for(r=t.Wz;s!=null;){s.au(0)
q=s.e
q.toString
s=r.a(q).a9$}}}
A.SR.prototype={}
A.uH.prototype={
Y(a,b){var s=this.a
return s==null?null:s.Y(0,b)},
F(a,b){var s=this.a
return s==null?null:s.F(0,b)},
gD8(){return null},
Dm(a){return this.eW(a)},
uj(a){return null},
j(a){var s=A.c4(this),r=this.a
r=r==null?null:r.j(0)
if(r==null)r=""
return"<optimized out>#"+s+"("+r+")"}}
A.M1.prototype={
suT(a){var s=this.v
if(s==a)return
this.v=a
this.FB(a,s)},
sL3(a){var s=this.R
if(s==a)return
this.R=a
this.FB(a,s)},
FB(a,b){var s=this,r=a==null
if(r)s.az()
else if(b==null||A.D(a)!==A.D(b)||a.eW(b))s.az()
if(s.b!=null){if(b!=null)b.F(0,s.gen())
if(!r)a.Y(0,s.gen())}if(r){if(s.b!=null)s.b2()}else if(b==null||A.D(a)!==A.D(b)||a.Dm(b))s.b2()},
suY(a){if(this.aC.l(0,a))return
this.aC=a
this.a6()},
aB(a){var s,r=this
r.nG(a)
s=r.v
if(s!=null)s.Y(0,r.gen())
s=r.R
if(s!=null)s.Y(0,r.gen())},
au(a){var s=this,r=s.v
if(r!=null)r.F(0,s.gen())
r=s.R
if(r!=null)r.F(0,s.gen())
s.lL(0)},
d_(a,b){var s=this.R
if(s!=null){s=s.uj(b)
s=s===!0}else s=!1
if(s)return!0
return this.qN(a,b)},
jQ(a){var s=this.v
if(s!=null){s=s.uj(a)
s=s!==!1}else s=!1
return s},
bD(){this.wc()
this.b2()},
oJ(a){return a.by(this.aC)},
Hf(a,b,c){var s
A.ba("debugPreviousCanvasSaveCount")
a.cQ(0)
if(!b.l(0,B.j))a.aA(0,b.a,b.b)
s=this.k3
s.toString
c.aF(a,s)
a.cM(0)},
aF(a,b){var s,r,q=this
if(q.v!=null){s=a.gbR(a)
r=q.v
r.toString
q.Hf(s,b,r)
q.I1(a)}q.hA(a,b)
if(q.R!=null){s=a.gbR(a)
r=q.R
r.toString
q.Hf(s,b,r)
q.I1(a)}},
I1(a){},
fd(a){var s,r=this
r.hy(a)
r.bK=null
s=r.R
r.ek=s==null?null:s.gD8()
a.a=!1},
oA(a,b,c){var s,r,q,p,o=this
o.hg=A.aus(o.hg,B.te)
o.iL=A.aus(o.iL,B.te)
s=o.hg
r=s!=null&&!s.gO(s)
s=o.iL
q=s!=null&&!s.gO(s)
s=A.a([],t.Y)
if(r){p=o.hg
p.toString
B.c.L(s,p)}B.c.L(s,c)
if(q){p=o.iL
p.toString
B.c.L(s,p)}o.E8(a,b,s)},
mo(){this.w9()
this.iL=this.hg=null}}
A.Gc.prototype={}
A.M4.prototype={
Tk(a){var s,r,q,p,o=this
try{r=o.M
if(r!==""){q=$.ayq()
s=$.as().zB(q)
s.BT($.ayr())
s.t5(r)
r=s.be()
o.am!==$&&A.eD()
o.am=r}else{o.am!==$&&A.eD()
o.am=null}}catch(p){}},
gki(){return!0},
jQ(a){return!0},
ck(a){return a.by(B.X_)},
aF(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
try{p=a.gbR(a)
o=i.k3
n=b.a
m=b.b
l=o.a
o=o.b
k=$.as().ba()
k.sap(0,$.ayp())
p.cz(new A.E(n,m,n+l,m+o),k)
p=i.am
p===$&&A.b()
if(p!=null){s=i.k3.a
r=0
q=0
if(s>328){s-=128
r+=64}p.hk(new A.lx(s))
if(i.k3.b>96+p.gc0(p)+12)q+=96
a.gbR(a).kW(p,b.U(0,new A.r(r,q)))}}catch(j){}}}
A.vs.prototype={
H(){return"FlexFit."+this.b}}
A.dK.prototype={
j(a){return this.qI(0)+"; flex="+A.h(this.e)+"; fit="+A.h(this.f)}}
A.wp.prototype={
H(){return"MainAxisSize."+this.b}}
A.lm.prototype={
H(){return"MainAxisAlignment."+this.b}}
A.kX.prototype={
H(){return"CrossAxisAlignment."+this.b}}
A.qz.prototype={
ex(a){if(!(a.e instanceof A.dK))a.e=new A.dK(null,null,B.j)},
eG(a){if(this.M===B.b5)return this.Ke(a)
return this.a4h(a)},
r0(a){switch(this.M.a){case 0:return a.b
case 1:return a.a}},
r1(a){switch(this.M.a){case 0:return a.a
case 1:return a.b}},
ck(a){var s
if(this.aE===B.nN)return B.R
s=this.Fp(a,A.ao_())
switch(this.M.a){case 0:return a.by(new A.K(s.a,s.b))
case 1:return a.by(new A.K(s.b,s.a))}},
Fp(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.M===B.b5?a2.b:a2.d,a0=a<1/0,a1=c.a8$
for(s=t.US,r=a2.b,q=a2.d,p=b,o=0,n=0,m=0;a1!=null;){l=a1.e
l.toString
s.a(l)
k=l.e
if(k==null)k=0
if(k>0){o+=k
p=a1}else{if(c.aE===B.nM)switch(c.M.a){case 0:j=A.p5(q,b)
break
case 1:j=A.p5(b,r)
break
default:j=b}else switch(c.M.a){case 0:j=new A.aJ(0,1/0,0,q)
break
case 1:j=new A.aJ(0,r,0,1/0)
break
default:j=b}i=a3.$2(a1,j)
m+=c.r1(i)
n=Math.max(n,A.i0(c.r0(i)))}a1=l.a9$}h=Math.max(0,(a0?a:0)-m)
if(o>0){g=a0?h/o:0/0
a1=c.a8$
for(f=0;a1!=null;){l=a1.e
l.toString
k=s.a(l).e
if(k==null)k=0
if(k>0){if(a0)e=a1===p?h-f:g*k
else e=1/0
d=A.ba("minChildExtent")
l=a1.e
l.toString
l=s.a(l).f
switch((l==null?B.i_:l).a){case 0:if(d.b!==d)A.L(A.a5F(d.a))
d.b=e
break
case 1:if(d.b!==d)A.L(A.a5F(d.a))
d.b=0
break}if(c.aE===B.nM)switch(c.M.a){case 0:l=d.b
if(l===d)A.L(A.hA(d.a))
j=new A.aJ(l,e,q,q)
break
case 1:l=d.b
if(l===d)A.L(A.hA(d.a))
j=new A.aJ(r,r,l,e)
break
default:j=b}else switch(c.M.a){case 0:l=d.b
if(l===d)A.L(A.hA(d.a))
j=new A.aJ(l,e,0,q)
break
case 1:l=d.b
if(l===d)A.L(A.hA(d.a))
j=new A.aJ(0,r,l,e)
break
default:j=b}i=a3.$2(a1,j)
m+=c.r1(i)
f+=e
n=Math.max(n,A.i0(c.r0(i)))}l=a1.e
l.toString
a1=s.a(l).a9$}}return new A.ai9(a0&&c.ah===B.n?a:m,n,m)},
bD(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.k.a(A.z.prototype.ga1.call(a)),a1=a.Fp(a0,A.ao0()),a2=a1.a,a3=a1.b
if(a.aE===B.nN){s=a.a8$
for(r=t.US,q=0,p=0,o=0;s!=null;){n=a.B
n.toString
m=s.vt(n,!0)
if(m!=null){q=Math.max(q,m)
p=Math.max(m,p)
o=Math.max(s.k3.b-m,o)
a3=Math.max(p+o,a3)}n=s.e
n.toString
s=r.a(n).a9$}}else q=0
switch(a.M.a){case 0:r=a.k3=a0.by(new A.K(a2,a3))
a2=r.a
a3=r.b
break
case 1:r=a.k3=a0.by(new A.K(a3,a2))
a2=r.b
a3=r.a
break}l=a2-a1.c
a.an=Math.max(0,-l)
k=Math.max(0,l)
j=A.ba("leadingSpace")
i=A.ba("betweenSpace")
r=A.awJ(a.M,a.b9,a.bh)
h=r===!1
switch(a.am.a){case 0:j.scl(0)
i.scl(0)
break
case 1:j.scl(k)
i.scl(0)
break
case 2:j.scl(k/2)
i.scl(0)
break
case 3:j.scl(0)
r=a.cX$
i.scl(r>1?k/(r-1):0)
break
case 4:r=a.cX$
i.scl(r>0?k/r:0)
j.scl(i.aL()/2)
break
case 5:r=a.cX$
i.scl(r>0?k/(r+1):0)
j.scl(i.aL())
break}g=h?a2-j.aL():j.aL()
s=a.a8$
for(r=t.US,n=a3/2,f=i.a;s!=null;){e=s.e
e.toString
r.a(e)
d=a.aE
switch(d.a){case 0:case 1:if(A.awJ(A.aKk(a.M),a.b9,a.bh)===(d===B.aH))c=0
else{d=s.k3
d.toString
c=a3-a.r0(d)}break
case 2:d=s.k3
d.toString
c=n-a.r0(d)/2
break
case 3:c=0
break
case 4:if(a.M===B.b5){d=a.B
d.toString
m=s.vt(d,!0)
c=m!=null?q-m:0}else c=0
break
default:c=null}if(h){d=s.k3
d.toString
g-=a.r1(d)}switch(a.M.a){case 0:e.a=new A.r(g,c)
break
case 1:e.a=new A.r(c,g)
break}if(h){d=i.b
if(d===i)A.L(A.hA(f))
g-=d}else{d=s.k3
d.toString
d=a.r1(d)
b=i.b
if(b===i)A.L(A.hA(f))
g+=d+b}s=e.a9$}},
d_(a,b){return this.zI(a,b)},
aF(a,b){var s,r,q,p=this
if(!(p.an>1e-10)){p.oP(a,b)
return}s=p.k3
if(s.gO(s))return
s=p.bc
r=p.cx
r===$&&A.b()
q=p.k3
s.saW(0,a.k0(r,b,new A.E(0,0,0+q.a,0+q.b),p.ga4i(),p.cY,s.a))},
m(){this.bc.saW(0,null)
this.RJ()},
iC(a){var s
switch(this.cY.a){case 0:return null
case 1:case 2:case 3:if(this.an>1e-10){s=this.k3
s=new A.E(0,0,0+s.a,0+s.b)}else s=null
return s}},
cd(){var s=this.Ea()
return s}}
A.ai9.prototype={}
A.SS.prototype={
aB(a){var s,r,q
this.eA(a)
s=this.a8$
for(r=t.US;s!=null;){s.aB(a)
q=s.e
q.toString
s=r.a(q).a9$}},
au(a){var s,r,q
this.dT(0)
s=this.a8$
for(r=t.US;s!=null;){s.au(0)
q=s.e
q.toString
s=r.a(q).a9$}}}
A.ST.prototype={}
A.Be.prototype={
m(){var s,r,q
for(s=this.tY$,r=s.length,q=0;q<r;++q)s[q].m()
this.hz()},
eQ(){this.E9()}}
A.M7.prototype={
Yt(){var s=this
if(s.M!=null)return
s.M=s.da
s.am=s.hY&&s.eM===B.a1},
xW(){this.am=this.M=null
this.az()},
sfK(a,b){var s=this,r=s.ah
if(b==r)return
if(b!=null&&r!=null&&b.LL(r)){b.m()
return}r=s.ah
if(r!=null)r.m()
s.ah=b
s.az()
if(s.b9==null||s.bh==null)s.a6()},
sbv(a,b){if(b==this.b9)return
this.b9=b
this.a6()},
sc0(a,b){if(b==this.bh)return
this.bh=b
this.a6()},
sOc(a,b){if(b===this.B)return
this.B=b
this.a6()},
a1m(){this.an=null},
sap(a,b){return},
sn8(a,b){return},
smN(a){if(a===this.bH)return
this.bH=a
this.az()},
sa37(a){return},
sAn(a){if(a==this.ej)return
this.ej=a
this.az()},
see(a){if(a.l(0,this.da))return
this.da=a
this.xW()},
sa8t(a,b){if(b===this.cZ)return
this.cZ=b
this.az()},
sa2L(a){return},
sAL(a){if(a===this.eL)return
this.eL=a
this.az()},
sa74(a){if(a===this.hY)return
this.hY=a
this.xW()},
sbJ(a){if(this.eM==a)return
this.eM=a
this.xW()},
sAN(a){return},
I9(a){var s,r,q=this,p=q.b9
a=A.p5(q.bh,p).pb(a)
p=q.ah
if(p==null)return new A.K(A.J(0,a.a,a.b),A.J(0,a.c,a.d))
p=p.gbv(p)
s=q.B
r=q.ah
return a.oK(new A.K(p/s,r.gc0(r)/q.B))},
jQ(a){return!0},
ck(a){return this.I9(a)},
bD(){this.k3=this.I9(t.k.a(A.z.prototype.ga1.call(this)))},
aB(a){this.eA(a)},
au(a){this.dT(0)},
aF(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(d.ah==null)return
d.Yt()
s=a.gbR(a)
r=d.k3
q=b.a
p=b.b
o=r.a
r=r.b
n=d.ah
n.toString
m=d.aE
l=d.B
k=d.an
j=d.ej
i=d.M
i.toString
h=d.jI
g=d.cZ
f=d.am
f.toString
e=d.eL
A.axL(i,s,h,k,m,d.bH,j,f,n,e,!1,1,new A.E(q,p,q+o,p+r),g,l)},
m(){var s=this.ah
if(s!=null)s.m()
this.ah=null
this.hz()}}
A.DC.prototype={}
A.w9.prototype={
iq(){},
rT(a){var s,r=this
r.e+=a
s=t.Hb
if(s.a(A.M.prototype.gaS.call(r,r))!=null)s.a(A.M.prototype.gaS.call(r,r)).rT(a)},
nW(a){var s,r,q
for(s=this.d,s=A.aF(s.gb_(s),!0,t.O),r=s.length,q=0;q<r;++q)s[q].$0()},
m(){var s=this.z
if(s!=null)s.m()
this.z=null},
em(){if(this.y)return
this.y=!0},
siI(a){var s,r=this,q=r.z
if(q!=null)q.m()
r.z=a
q=t.Hb
if(q.a(A.M.prototype.gaS.call(r,r))!=null){q.a(A.M.prototype.gaS.call(r,r)).toString
s=!0}else s=!1
if(s)q.a(A.M.prototype.gaS.call(r,r)).em()},
vk(){this.y=this.y||!1},
jy(a){var s
this.em()
s=a.e
if(s!==0)this.rT(-s)
this.vY(a)},
nb(a){var s,r,q=this,p=t.Hb.a(A.M.prototype.gaS.call(q,q))
if(p!=null){s=q.as
r=q.Q
if(s==null)p.CW=r
else s.Q=r
r=q.Q
if(r==null)p.cx=s
else r.as=s
q.Q=q.as=null
p.jy(q)
q.w.saW(0,null)}},
ff(a,b,c){return!1},
KV(a,b,c){var s=A.a([],c.h("v<tW<0>>"))
this.ff(new A.DC(s,c.h("DC<0>")),b,!0,c)
return s.length===0?null:B.c.gK(s).a},
TK(a){var s,r=this
if(!r.y&&r.z!=null){s=r.z
s.toString
a.a29(s)
return}r.hM(a)
r.y=!1},
cd(){var s=this.Pj()
return s+(this.b==null?" DETACHED":"")}}
A.Im.prototype={
saW(a,b){var s=this.a
if(b==null?s==null:b===s)return
if(s!=null)if(--s.x===0)s.m()
this.a=b
if(b!=null)++b.x},
j(a){var s=this.a
return"LayerHandle("+(s!=null?J.dn(s):"DISPOSED")+")"}}
A.Lt.prototype={
sMt(a){var s
this.em()
s=this.cx
if(s!=null)s.m()
this.cx=a},
m(){this.sMt(null)
this.DS()},
hM(a){var s=this.cx
s.toString
a.a28(B.j,s,this.cy,this.db)},
ff(a,b,c){return!1}}
A.Lm.prototype={
hM(a){a.a27(this.cx,this.CW)
a.OA(this.cy)
a.Ot(!1)
a.Os(!1)},
ff(a,b,c){return!1}}
A.eI.prototype={
nW(a){var s
this.PM(a)
if(!a)return
s=this.CW
for(;s!=null;){s.nW(!0)
s=s.Q}},
a2A(a){var s=this
s.vk()
s.hM(a)
if(s.e>0)s.nW(!0)
s.y=!1
return a.be()},
m(){this.C2()
this.d.Z(0)
this.DS()},
vk(){var s,r=this
r.PN()
s=r.CW
for(;s!=null;){s.vk()
r.y=r.y||s.y
s=s.Q}},
ff(a,b,c,d){var s,r,q
for(s=this.cx,r=a.a;s!=null;s=s.as){if(s.ff(a,b,!0,d))return!0
q=r.length
if(q!==0)return!1}return!1},
aB(a){var s
this.vX(a)
s=this.CW
for(;s!=null;){s.aB(a)
s=s.Q}},
au(a){var s
this.dT(0)
s=this.CW
for(;s!=null;){s.au(0)
s=s.Q}this.nW(!1)},
hO(a,b){var s,r=this
r.em()
s=b.e
if(s!==0)r.rT(s)
r.Dy(b)
s=b.as=r.cx
if(s!=null)s.Q=b
r.cx=b
if(r.CW==null)r.CW=b
b.w.saW(0,b)},
C2(){var s,r,q,p=this,o=p.CW
for(s=t.Hb;o!=null;o=r){r=o.Q
o.Q=o.as=null
p.em()
q=o.e
if(q!==0){q=-q
p.e+=q
if(s.a(A.M.prototype.gaS.call(p,p))!=null)s.a(A.M.prototype.gaS.call(p,p)).rT(q)}p.vY(o)
o.w.saW(0,null)}p.cx=p.CW=null},
hM(a){this.kE(a)},
kE(a){var s=this.CW
for(;s!=null;){s.TK(a)
s=s.Q}}}
A.iE.prototype={
sbV(a,b){if(!b.l(0,this.p1))this.em()
this.p1=b},
ff(a,b,c,d){return this.nD(a,b.af(0,this.p1),!0,d)},
hM(a){var s=this,r=s.p1
s.siI(a.ME(r.a,r.b,t.Ff.a(s.z)))
s.kE(a)
a.ho()}}
A.pd.prototype={
ff(a,b,c,d){if(!this.p1.C(0,b))return!1
return this.nD(a,b,!0,d)},
hM(a){var s=this,r=s.p1
r.toString
s.siI(a.a7X(r,s.p2,t.GB.a(s.z)))
s.kE(a)
a.ho()}}
A.uq.prototype={
ff(a,b,c,d){if(!this.p1.C(0,b))return!1
return this.nD(a,b,!0,d)},
hM(a){var s=this,r=s.p1
r.toString
s.siI(a.a7V(r,s.p2,t.cW.a(s.z)))
s.kE(a)
a.ho()}}
A.up.prototype={
ff(a,b,c,d){if(!this.p1.C(0,b))return!1
return this.nD(a,b,!0,d)},
hM(a){var s=this,r=s.p1
r.toString
s.siI(a.a7U(r,s.p2,t.L5.a(s.z)))
s.kE(a)
a.ho()}}
A.lU.prototype={
sbE(a,b){var s=this
if(b.l(0,s.aq))return
s.aq=b
s.aw=!0
s.em()},
hM(a){var s,r,q=this
q.ai=q.aq
if(!q.p1.l(0,B.j)){s=q.p1
s=A.wI(s.a,s.b,0)
r=q.ai
r.toString
s.d2(0,r)
q.ai=s}q.siI(a.a7Z(q.ai.a,t.qf.a(q.z)))
q.kE(a)
a.ho()},
a1e(a){var s,r=this
if(r.aw){s=r.aq
s.toString
r.av=A.Kl(A.apT(s))
r.aw=!1}s=r.av
if(s==null)return null
return A.cM(s,a)},
ff(a,b,c,d){var s=this.a1e(b)
if(s==null)return!1
return this.Qb(a,s,!0,d)}}
A.xd.prototype={
sJt(a,b){var s=this,r=s.aq
if(b!=r){if(b===255||r===255)s.siI(null)
s.aq=b
s.em()}},
hM(a){var s,r,q,p=this
if(p.CW==null){p.siI(null)
return}s=p.aq
s.toString
r=p.p1
q=p.z
if(s<255)p.siI(a.a7Y(s,r,t.Zr.a(q)))
else p.siI(a.ME(r.a,r.b,t.Ff.a(q)))
p.kE(a)
a.ho()}}
A.R4.prototype={}
A.Rz.prototype={
a8w(a){var s=this.a
this.a=a
return s},
j(a){var s="<optimized out>#",r=A.c4(this.b),q=this.a.a
return s+A.c4(this)+"("+("latestEvent: "+(s+r))+", "+("annotations: [list of "+q+"]")+")"}}
A.RA.prototype={
giD(a){var s=this.c
return s.giD(s)}}
A.Kw.prototype={
Gv(a){var s,r,q,p,o,n,m=t._h,l=A.iz(null,null,null,m,t.xV)
for(s=a.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
o=p.a
if(m.b(o)){n=p.b
n.toString
l.k(0,o,n)}}return l},
VK(a,b){var s=a.b,r=s.gbL(s)
s=a.b
if(!this.b.P(0,s.giD(s)))return A.iz(null,null,null,t._h,t.xV)
return this.Gv(b.$1(r))},
Gi(a){var s,r
A.aE0(a)
s=a.b
r=A.o(s).h("bf<1>")
this.a.a5c(a.giD(a),a.d,A.ln(new A.bf(s,r),new A.a6M(),r.h("p.E"),t.Pb))},
a9l(a,b){var s,r,q,p,o
if(a.gcu(a)!==B.cV)return
if(t.ks.b(a))return
s=t.PB.b(a)?A.atq():b.$0()
r=a.giD(a)
q=this.b
p=q.i(0,r)
if(!A.aE1(p,a))return
o=q.a
new A.a6P(this,p,a,r,s).$0()
if(o!==0!==(q.a!==0))this.aG()},
a9e(a){new A.a6N(this,a).$0()}}
A.a6M.prototype={
$1(a){return a.gKb(a)},
$S:248}
A.a6P.prototype={
$0(){var s=this
new A.a6O(s.a,s.b,s.c,s.d,s.e).$0()},
$S:0}
A.a6O.prototype={
$0(){var s,r,q,p,o,n=this,m=null,l=n.b
if(l==null){s=n.c
if(t.PB.b(s))return
n.a.b.k(0,n.d,new A.Rz(A.iz(m,m,m,t._h,t.xV),s))}else{s=n.c
if(t.PB.b(s))n.a.b.A(0,s.giD(s))}r=n.a
q=r.b.i(0,n.d)
if(q==null){l.toString
q=l}p=q.b
q.b=s
o=t.PB.b(s)?A.iz(m,m,m,t._h,t.xV):r.Gv(n.e)
r.Gi(new A.RA(q.a8w(o),o,p,s))},
$S:0}
A.a6N.prototype={
$0(){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.b,r=r.gb_(r),r=new A.ei(J.aC(r.a),r.b),q=this.b,p=A.o(r).z[1];r.t();){o=r.a
if(o==null)o=p.a(o)
n=o.b
m=s.VK(o,q)
l=o.a
o.a=m
s.Gi(new A.RA(l,m,n,null))}},
$S:0}
A.a6K.prototype={
$2(a,b){var s
if(!this.a.P(0,a))if(a.gCy()&&a.gBt(a)!=null){s=a.gBt(a)
s.toString
s.$1(this.b.aT(this.c.i(0,a)))}},
$S:249}
A.a6L.prototype={
$1(a){return!this.a.P(0,a)},
$S:250}
A.VE.prototype={}
A.cq.prototype={
au(a){},
j(a){return"<none>"}}
A.lw.prototype={
eP(a,b){var s,r=this
if(a.ge4()){r.nC()
if(!a.cy){s=a.ay
s===$&&A.b()
s=!s}else s=!0
if(s)A.au5(a,null,!0)
else if(a.db)A.aEn(a)
s=a.ch.a
s.toString
t.gY.a(s)
s.sbV(0,b)
r.z6(s)}else{s=a.ay
s===$&&A.b()
if(s){a.ch.saW(0,null)
a.y9(r,b)}else a.y9(r,b)}},
z6(a){a.nb(0)
this.a.hO(0,a)},
gbR(a){var s,r,q=this
if(q.e==null){q.c=A.aEq(q.b)
s=$.as()
r=s.a3Z()
q.d=r
q.e=s.a3S(r,null)
r=q.c
r.toString
q.a.hO(0,r)}s=q.e
s.toString
return s},
nC(){var s,r=this
if(r.e==null)return
s=r.c
s.toString
s.sMt(r.d.a4C())
r.e=r.d=r.c=null},
Dg(){var s=this.c
if(s!=null)if(!s.cy){s.cy=!0
s.em()}},
q2(a,b,c,d){var s,r=this
if(a.CW!=null)a.C2()
r.nC()
r.z6(a)
s=r.a3U(a,d==null?r.b:d)
b.$2(s,c)
s.nC()},
MD(a,b,c){return this.q2(a,b,c,null)},
a3U(a,b){return new A.lw(a,b)},
k0(a,b,c,d,e,f){var s,r,q=this
if(e===B.h){d.$2(q,b)
return null}s=c.dF(b)
if(a){if(f==null){r=new A.pd(B.z,A.y(t.S,t.O),A.ay())
r.iq()}else r=f
if(!s.l(0,r.p1)){r.p1=s
r.em()}if(e!==r.p2){r.p2=e
r.em()}q.q2(r,d,b,s)
return r}else{q.a30(s,e,s,new A.a7H(q,d,b))
return null}},
a7W(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.h){e.$2(p,b)
return null}s=c.dF(b)
r=d.dF(b)
if(a){if(g==null){q=new A.uq(B.hL,A.y(t.S,t.O),A.ay())
q.iq()}else q=g
if(!r.l(0,q.p1)){q.p1=r
q.em()}if(f!==q.p2){q.p2=f
q.em()}p.q2(q,e,b,s)
return q}else{p.a2Z(r,f,s,new A.a7G(p,e,b))
return null}},
MC(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.h){e.$2(p,b)
return null}s=c.dF(b)
r=d.dF(b)
if(a){if(g==null){q=new A.up(B.hL,A.y(t.S,t.O),A.ay())
q.iq()}else q=g
if(r!==q.p1){q.p1=r
q.em()}if(f!==q.p2){q.p2=f
q.em()}p.q2(q,e,b,s)
return q}else{p.a2Y(r,f,s,new A.a7F(p,e,b))
return null}},
q3(a,b,c,d,e){var s,r=this,q=b.a,p=b.b,o=A.wI(q,p,0)
o.d2(0,c)
o.aA(0,-q,-p)
if(a){s=e==null?A.av6(null):e
s.sbE(0,o)
r.q2(s,d,b,A.atS(o,r.b))
return s}else{q=r.gbR(r)
q.cQ(0)
q.bi(0,o.a)
d.$2(r,b)
r.gbR(r).cM(0)
return null}},
a8_(a,b,c,d){return this.q3(a,b,c,d,null)},
BR(a,b,c,d){var s=d==null?A.au2():d
s.sJt(0,b)
s.sbV(0,a)
this.MD(s,c,B.j)
return s},
j(a){return"PaintingContext#"+A.fn(this)+"(layer: "+this.a.j(0)+", canvas bounds: "+this.b.j(0)+")"}}
A.a7H.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.a7G.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.a7F.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.Zb.prototype={}
A.ab2.prototype={
m(){var s,r=this.b
if(r!=null)this.a.as.F(0,r)
r=this.a
if(--r.at===0){s=r.as
s.b.Z(0)
s.c.Z(0)
s.d.Z(0)
s.dG()
r.as=null
r.d.$0()}}}
A.Lu.prototype={
nd(){this.a.$0()},
sa8K(a){var s=this.e
if(s===a)return
if(s!=null)s.au(0)
this.e=a
a.aB(this)},
a51(){var s,r,q,p,o,n,m,l,k,j,i,h=this
try{for(p=t.W,o=t.TT;n=h.r,n.length!==0;){s=n
h.r=A.a([],o)
n=s
m=new A.a7S()
if(!!n.immutable$list)A.L(A.R("sort"))
l=n.length-1
if(l-0<=32)A.Nn(n,0,l,m)
else A.Nm(n,0,l,m)
for(r=0;r<J.bU(s);++r){if(h.f){h.f=!1
n=h.r
if(n.length!==0){m=s
l=r
k=J.bU(s)
A.dw(l,k,J.bU(m),null,null)
j=A.b1(m)
i=new A.fr(m,l,k,j.h("fr<1>"))
i.qP(m,l,k,j.c)
B.c.L(n,i)
break}}q=J.aY(s,r)
if(q.z){n=q
n=p.a(A.M.prototype.gbI.call(n))===h}else n=!1
if(n)q.YS()}h.f=!1}}finally{h.f=!1}},
Vq(a){try{a.$0()}finally{this.f=!0}},
a50(){var s,r,q,p,o=this.y
B.c.di(o,new A.a7R())
for(s=o.length,r=t.W,q=0;q<o.length;o.length===s||(0,A.P)(o),++q){p=o[q]
if(p.CW&&r.a(A.M.prototype.gbI.call(p))===this)p.II()}B.c.Z(o)},
a52(){var s,r,q,p,o,n,m,l,k
try{s=this.z
this.z=A.a([],t.TT)
for(q=s,J.X1(q,new A.a7T()),p=q.length,o=t.W,n=t.gY,m=0;m<q.length;q.length===p||(0,A.P)(q),++m){r=q[m]
if(r.cy||r.db){l=r
l=o.a(A.M.prototype.gbI.call(l))===this}else l=!1
if(l)if(r.ch.a.b!=null)if(r.cy)A.au5(r,null,!1)
else{l=r
k=l.ch.a
k.toString
l.qh(n.a(k))
l.db=!1}else r.a0J()}}finally{}},
a4D(a){var s,r=this
if(++r.at===1){s=t.bu
r.as=new A.yv(r.c,A.bc(s),A.y(t.S,s),A.bc(s),$.bO())
r.b.$0()}if(a!=null)r.as.Y(0,a)
return new A.ab2(r,a)},
KH(){return this.a4D(null)},
a53(){var s,r,q,p,o,n,m,l,k=this
if(k.as==null)return
try{q=k.ay
p=A.aF(q,!0,A.o(q).c)
B.c.di(p,new A.a7U())
s=p
q.Z(0)
for(q=s,o=q.length,n=t.W,m=0;m<q.length;q.length===o||(0,A.P)(q),++m){r=q[m]
if(r.dy){l=r
l=n.a(A.M.prototype.gbI.call(l))===k}else l=!1
if(l)r.a1y()}k.as.Oq()}finally{}}}
A.a7S.prototype={
$2(a,b){return a.a-b.a},
$S:45}
A.a7R.prototype={
$2(a,b){return a.a-b.a},
$S:45}
A.a7T.prototype={
$2(a,b){return b.a-a.a},
$S:45}
A.a7U.prototype={
$2(a,b){return a.a-b.a},
$S:45}
A.z.prototype={
aK(){var s=this
s.cx=s.ge4()||s.gmk()
s.ay=s.ge4()},
eQ(){var s=this
s.a6()
s.lc()
s.az()
s.b2()
s.b0(new A.a97())},
m(){this.ch.saW(0,null)},
ex(a){if(!(a.e instanceof A.cq))a.e=new A.cq()},
ix(a){var s=this
s.ex(a)
s.a6()
s.lc()
s.b2()
s.Dy(a)},
jy(a){var s=this
a.Fa()
a.e.au(0)
a.e=null
s.vY(a)
s.a6()
s.lc()
s.b2()},
b0(a){},
rC(a,b,c){A.e1(new A.bP(b,c,"rendering library",A.bt("during "+a+"()"),new A.a93(this),!1))},
aB(a){var s=this
s.vX(a)
if(s.z&&s.Q!=null){s.z=!1
s.a6()}if(s.CW){s.CW=!1
s.lc()}if(s.cy&&s.ch.a!=null){s.cy=!1
s.az()}if(s.dy&&s.gyt().a){s.dy=!1
s.b2()}},
ga1(){var s=this.at
if(s==null)throw A.c(A.ab("A RenderObject does not have any constraints before it has been laid out."))
return s},
a6(){var s,r=this
if(r.z)return
s=r.Q
if(s==null){r.z=!0
if(r.c!=null)r.uA()
return}if(s!==r)r.uA()
else{r.z=!0
s=t.W
if(s.a(A.M.prototype.gbI.call(r))!=null){s.a(A.M.prototype.gbI.call(r)).r.push(r)
s.a(A.M.prototype.gbI.call(r)).nd()}}},
uA(){this.z=!0
var s=this.c
s.toString
t.F.a(s)
if(!this.as)s.a6()},
Fa(){var s=this
if(s.Q!==s){s.Q=null
s.b0(A.axI())}},
a_y(){var s,r,q=this,p=q.Q
if(p===q)return
s=t.Rn.a(q.c)
r=s==null?null:s.Q
if(r!=p){q.Q=r
q.b0(A.axJ())}},
YS(){var s,r,q,p=this
try{p.bD()
p.b2()}catch(q){s=A.ai(q)
r=A.az(q)
p.rC("performLayout",s,r)}p.z=!1
p.az()},
cC(a,b){var s,r,q,p,o,n,m,l=this
if(!b||l.gki()||a.gLR()||!(l.c instanceof A.z))o=l
else{n=l.c
n.toString
n=t.F.a(n).Q
n.toString
o=n}if(!l.z&&a.l(0,l.at)){if(o!==l.Q){l.Q=o
l.b0(A.axJ())}return}l.at=a
n=l.Q
if(n!=null&&o!==n)l.b0(A.axI())
l.Q=o
if(l.gki())try{l.pZ()}catch(m){s=A.ai(m)
r=A.az(m)
l.rC("performResize",s,r)}try{l.bD()
l.b2()}catch(m){q=A.ai(m)
p=A.az(m)
l.rC("performLayout",q,p)}l.z=!1
l.az()},
gki(){return!1},
AM(a,b){var s=this
s.as=!0
try{t.W.a(A.M.prototype.gbI.call(s)).Vq(new A.a96(s,a,b))}finally{s.as=!1}},
ge4(){return!1},
gmk(){return!1},
qh(a){return a==null?A.aEh(B.j):a},
lc(){var s,r,q,p=this
if(p.CW)return
s=p.CW=!0
r=p.c
if(r instanceof A.z){if(r.CW)return
q=p.ay
q===$&&A.b()
if((q?!p.ge4():s)&&!r.ge4()){r.lc()
return}}s=t.W
if(s.a(A.M.prototype.gbI.call(p))!=null)s.a(A.M.prototype.gbI.call(p)).y.push(p)},
II(){var s,r,q=this
if(!q.CW)return
s=q.cx
s===$&&A.b()
q.cx=!1
q.b0(new A.a94(q))
if(q.ge4()||q.gmk())q.cx=!0
if(!q.ge4()){r=q.ay
r===$&&A.b()}else r=!1
if(r){q.db=q.cy=!1
s=t.W.a(A.M.prototype.gbI.call(q))
if(s!=null)B.c.A(s.z,q)
q.CW=!1
q.az()}else if(s!==q.cx){q.CW=!1
q.az()}else q.CW=!1},
az(){var s,r=this
if(r.cy)return
r.cy=!0
if(r.ge4()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=t.W
if(s.a(A.M.prototype.gbI.call(r))!=null){s.a(A.M.prototype.gbI.call(r)).z.push(r)
s.a(A.M.prototype.gbI.call(r)).nd()}}else{s=r.c
if(s instanceof A.z)s.az()
else{s=t.W
if(s.a(A.M.prototype.gbI.call(r))!=null)s.a(A.M.prototype.gbI.call(r)).nd()}}},
a72(){var s,r=this
if(r.db||r.cy)return
r.db=!0
if(r.ge4()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=t.W
if(s.a(A.M.prototype.gbI.call(r))!=null){s.a(A.M.prototype.gbI.call(r)).z.push(r)
s.a(A.M.prototype.gbI.call(r)).nd()}}else r.az()},
a0J(){var s,r=this.c
for(;r instanceof A.z;){if(r.ge4()){s=r.ch.a
if(s==null)break
if(s.b!=null)break
r.cy=!0}r=r.c}},
y9(a,b){var s,r,q,p=this
if(p.z)return
p.db=p.cy=!1
p.ay=p.ge4()
try{p.aF(a,b)}catch(q){s=A.ai(q)
r=A.az(q)
p.rC("paint",s,r)}},
aF(a,b){},
dk(a,b){},
lh(a){return!0},
bM(a,b){var s,r,q,p,o,n,m,l,k=b==null
if(k){s=t.W.a(A.M.prototype.gbI.call(this)).e
if(s instanceof A.z)b=s}r=A.a([],t.TT)
q=t.F
p=this
while(p!==b){r.push(p)
o=p.c
o.toString
q.a(o)
p=o}if(!k){b.toString
r.push(b)}n=new A.aT(new Float64Array(16))
n.c1()
for(m=r.length-1;m>0;m=l){l=m-1
r[m].dk(r[l],n)}return n},
iC(a){return null},
zN(a){return null},
fd(a){},
vH(a){var s
if(t.W.a(A.M.prototype.gbI.call(this)).as==null)return
s=this.fr
if(s!=null&&!s.as)s.Op(a)
else{s=this.c
if(s!=null)t.F.a(s).vH(a)}},
gyt(){var s,r=this
if(r.dx==null){s=A.qR()
r.dx=s
r.fd(s)}s=r.dx
s.toString
return s},
mo(){this.dy=!0
this.fr=null
this.b0(new A.a95())},
b2(){var s,r,q,p,o,n,m=this
if(m.b==null||t.W.a(A.M.prototype.gbI.call(m)).as==null){m.dx=null
return}if(m.fr!=null){s=m.dx
s=s==null?null:s.a
r=s===!0}else r=!1
m.dx=null
q=m.gyt().a&&r
s=t.F
p=m
while(!0){if(!(!q&&p.c instanceof A.z))break
if(p!==m&&p.dy)break
p.dy=!0
o=p.c
o.toString
s.a(o)
if(o.dx==null){n=A.qR()
o.dx=n
o.fd(n)}q=o.dx.a
if(q&&o.fr==null)return
p=o}if(p!==m&&m.fr!=null&&m.dy)t.W.a(A.M.prototype.gbI.call(m)).ay.A(0,m)
if(!p.dy){p.dy=!0
s=t.W
if(s.a(A.M.prototype.gbI.call(m))!=null){s.a(A.M.prototype.gbI.call(m)).ay.D(0,p)
s.a(A.M.prototype.gbI.call(m)).nd()}}},
a1y(){var s,r,q,p,o,n,m=this,l=null
if(m.z)return
s=m.fr
if(s==null)s=l
else{s=t.LQ.a(A.M.prototype.gaS.call(s,s))
if(s==null)s=l
else s=s.at||s.as}r=t.pp.a(m.Ga(s===!0))
q=A.a([],t.Y)
s=m.fr
p=s==null
o=p?l:s.x
n=p?l:s.y
s=p?l:s.z
r.oI(s==null?0:s,n,o,q)
B.c.gbw(q)},
Ga(a){var s,r,q,p,o,n,m,l,k=this,j={},i=k.gyt()
j.a=i.c
s=!i.d&&!i.a
r=t.CZ
q=A.a([],r)
p=A.bc(t.pp)
k.fR(new A.a92(j,k,a||i.p2,q,p,i,s))
for(o=A.kl(p,p.r),n=A.o(o).c;o.t();){m=o.d;(m==null?n.a(m):m).B2()}k.dy=!1
if(!(k.c instanceof A.z)){o=j.a
l=new A.Te(A.a([],r),A.a([k],t.TT),o)}else{o=j.a
if(s)l=new A.ag9(A.a([],r),o)
else{l=new A.Uq(a,i,A.a([],r),A.a([k],t.TT),o)
if(i.a)l.x=!0}}l.L(0,q)
return l},
fR(a){this.b0(a)},
oA(a,b,c){a.k9(0,t.V1.a(c),b)},
iN(a,b){},
cd(){var s=A.c4(this)
return"<optimized out>#"+s},
j(a){return this.cd()},
eX(a,b,c,d){var s=this.c
if(s instanceof A.z)s.eX(a,b==null?this:b,c,d)},
nx(){return this.eX(B.aZ,null,B.x,null)},
lA(a,b){return this.eX(B.aZ,a,B.x,b)},
$iar:1}
A.a97.prototype={
$1(a){a.eQ()},
$S:31}
A.a93.prototype={
$0(){var s=A.a([],t.E),r=this.a
s.push(A.ap7("The following RenderObject was being processed when the exception was fired",B.GC,r))
s.push(A.ap7("RenderObject",B.GD,r))
return s},
$S:13}
A.a96.prototype={
$0(){this.b.$1(this.c.a(this.a.ga1()))},
$S:0}
A.a94.prototype={
$1(a){var s
a.II()
s=a.cx
s===$&&A.b()
if(s)this.a.cx=!0},
$S:31}
A.a95.prototype={
$1(a){a.mo()},
$S:31}
A.a92.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a.Ga(f.c)
if(e.a){B.c.Z(f.d)
f.e.Z(0)
if(!f.f.a)f.a.a=!0}for(s=e.gLB(),r=s.length,q=f.d,p=f.e,o=f.f,n=f.b,m=f.r,l=0;l<s.length;s.length===r||(0,A.P)(s),++l){k=s[l]
q.push(k)
k.b.push(n)
k.a2f(o.aq)
if(o.b||!(n.c instanceof A.z)){k.B2()
continue}if(k.gkN()==null||m)continue
if(!o.LM(k.gkN()))p.D(0,k)
j=q.length-1
for(i=0;i<j;++i){h=q[i]
g=k.gkN()
g.toString
if(!g.LM(h.gkN())){p.D(0,k)
p.D(0,h)}}}},
$S:31}
A.aM.prototype={
saQ(a){var s=this,r=s.B$
if(r!=null)s.jy(r)
s.B$=a
if(a!=null)s.ix(a)},
k5(){var s=this.B$
if(s!=null)this.C_(s)},
b0(a){var s=this.B$
if(s!=null)a.$1(s)}}
A.ed.prototype={$icq:1}
A.aA.prototype={
goG(){return this.cX$},
GD(a,b){var s,r,q,p=this,o=a.e
o.toString
s=A.o(p).h("aA.1")
s.a(o);++p.cX$
if(b==null){o=o.a9$=p.a8$
if(o!=null){o=o.e
o.toString
s.a(o).aO$=a}p.a8$=a
if(p.bz$==null)p.bz$=a}else{r=b.e
r.toString
s.a(r)
q=r.a9$
if(q==null){o.aO$=b
p.bz$=r.a9$=a}else{o.a9$=q
o.aO$=b
o=q.e
o.toString
s.a(o).aO$=r.a9$=a}}},
AJ(a,b,c){this.ix(b)
this.GD(b,c)},
L(a,b){},
Hw(a){var s,r,q,p,o=this,n=a.e
n.toString
s=A.o(o).h("aA.1")
s.a(n)
r=n.aO$
q=n.a9$
if(r==null)o.a8$=q
else{p=r.e
p.toString
s.a(p).a9$=q}q=n.a9$
if(q==null)o.bz$=r
else{q=q.e
q.toString
s.a(q).aO$=r}n.a9$=n.aO$=null;--o.cX$},
A(a,b){this.Hw(b)
this.jy(b)},
uE(a,b){var s=this,r=a.e
r.toString
if(A.o(s).h("aA.1").a(r).aO$==b)return
s.Hw(a)
s.GD(a,b)
s.a6()},
k5(){var s,r,q,p=this.a8$
for(s=A.o(this).h("aA.1");p!=null;){r=p.a
q=this.a
if(r<=q){p.a=q+1
p.k5()}r=p.e
r.toString
p=s.a(r).a9$}},
b0(a){var s,r,q=this.a8$
for(s=A.o(this).h("aA.1");q!=null;){a.$1(q)
r=q.e
r.toString
q=s.a(r).a9$}},
ga4X(a){return this.a8$},
a2S(a){var s=a.e
s.toString
return A.o(this).h("aA.1").a(s).aO$},
a2Q(a){var s=a.e
s.toString
return A.o(this).h("aA.1").a(s).a9$}}
A.LT.prototype={
wg(){this.a6()}}
A.akp.prototype={}
A.ag9.prototype={
L(a,b){B.c.L(this.b,b)},
gLB(){return this.b}}
A.oF.prototype={
gLB(){return A.a([this],t.CZ)},
a2f(a){var s
if(a==null||a.a===0)return
s=this.c;(s==null?this.c=A.bc(t.g3):s).L(0,a)}}
A.Te.prototype={
oI(a,b,c,d){var s,r,q,p,o,n=this.b,m=B.c.gK(n)
if(m.fr==null){s=B.c.gK(n).gnw()
r=B.c.gK(n)
r=t.W.a(A.M.prototype.gbI.call(r)).as
r.toString
q=$.aoA()
q=new A.cg(null,0,s,B.V,q.p2,q.e,q.p3,q.f,q.ai,q.p4,q.R8,q.RG,q.rx,q.ry,q.to,q.x2,q.xr,q.y1)
q.aB(r)
m.fr=q}m=B.c.gK(n).fr
m.toString
m.saY(0,B.c.gK(n).gkg())
p=A.a([],t.Y)
for(n=this.e,s=n.length,o=0;o<n.length;n.length===s||(0,A.P)(n),++o)n[o].oI(0,b,c,p)
m.k9(0,p,null)
d.push(m)},
gkN(){return null},
B2(){},
L(a,b){B.c.L(this.e,b)}}
A.Uq.prototype={
oI(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(!h.x){s=h.b
B.c.gK(s).fr=null
for(r=h.w,q=r.length,p=A.ap(s),o=p.c,p=p.h("fr<1>"),n=0;n<r.length;r.length===q||(0,A.P)(r),++n){m=r[n]
l=new A.fr(s,1,g,p)
l.qP(s,1,g,o)
B.c.L(m.b,l)
m.oI(a+h.f.x2,b,c,d)}return}s=h.b
if(s.length>1){k=new A.akq()
k.UL(c,b,s)}else k=g
r=h.e
q=!r
if(q){if(k==null)p=g
else{p=k.d
p===$&&A.b()
if(!p.gO(p)){p=k.c
p===$&&A.b()
p=p.LV()}else p=!0}p=p===!0}else p=!1
if(p)return
p=B.c.gK(s)
if(p.fr==null)p.fr=A.ab4(g,B.c.gK(s).gnw())
j=B.c.gK(s).fr
j.sLO(r)
j.dx=h.c
j.z=a
if(a!==0){h.FP()
r=h.f
r.siG(0,r.x2+a)}if(k!=null){r=k.d
r===$&&A.b()
j.saY(0,r)
r=k.c
r===$&&A.b()
j.sbE(0,r)
j.x=k.b
j.y=k.a
if(q&&k.e){h.FP()
h.f.bk(B.lW,!0)}}i=A.a([],t.Y)
for(r=h.w,q=r.length,n=0;n<r.length;r.length===q||(0,A.P)(r),++n){m=r[n]
p=j.x
m.oI(0,j.y,p,i)}r=h.f
if(r.a)B.c.gK(s).oA(j,h.f,i)
else j.k9(0,i,r)
d.push(j)},
gkN(){return this.x?null:this.f},
L(a,b){var s,r,q,p,o,n,m=this
for(s=b.length,r=m.w,q=0;q<b.length;b.length===s||(0,A.P)(b),++q){p=b[q]
r.push(p)
if(p.gkN()==null)continue
if(!m.r){m.f=m.f.a3w()
m.r=!0}o=m.f
n=p.gkN()
n.toString
o.kD(n)}},
FP(){var s,r,q=this
if(!q.r){s=q.f
r=A.qR()
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
r.ai=s.ai
r.aq=s.aq
r.y2=s.y2
r.bU=s.bU
r.bA=s.bA
r.bg=s.bg
r.f=s.f
r.k1=s.k1
r.k3=s.k3
r.k2=s.k2
r.k4=s.k4
r.ok=s.ok
r.p1=s.p1
r.e.L(0,s.e)
r.p3.L(0,s.p3)
q.f=r
q.r=!0}},
B2(){this.x=!0}}
A.akq.prototype={
UL(a,b,c){var s,r,q,p,o,n,m=this,l=new A.aT(new Float64Array(16))
l.c1()
m.c=l
m.b=a
m.a=b
for(s=c.length-1;s>0;){r=c[s];--s
q=c[s]
a=r.zN(q)
if(a!=null){m.b=a
m.a=A.avC(m.a,r.iC(q))}else m.b=A.avC(m.b,r.iC(q))
l=$.azd()
l.c1()
A.aHl(r,q,m.c,l)
m.b=A.avD(m.b,l)
m.a=A.avD(m.a,l)}p=B.c.gK(c)
l=m.b
l=l==null?p.gkg():l.fL(p.gkg())
m.d=l
o=m.a
if(o!=null){n=o.fL(l)
if(n.gO(n)){l=m.d
l=!l.gO(l)}else l=!1
m.e=l
if(!l)m.d=n}}}
A.SW.prototype={}
A.iX.prototype={
j(a){var s=A.a(["offset="+this.a.j(0)],t.s)
s.push(this.qI(0))
return B.c.bb(s,"; ")}}
A.xT.prototype={
ex(a){if(!(a.e instanceof A.iX))a.e=new A.iX(null,null,B.j)},
scF(a,b){var s=this,r=s.M
switch(r.d.aN(0,b).a){case 0:case 1:return
case 2:r.scF(0,b)
s.ah=s.am=null
s.xb(b)
s.az()
s.b2()
break
case 3:r.scF(0,b)
s.ah=s.am=s.bH=null
s.xb(b)
s.a6()
s.yg()
s.FF()
s.IY()
break}},
sq5(a){var s=this
if(a==s.b9)return
s.yg()
s.FF()
s.b9=a
s.IY()},
IY(){var s,r,q=this
if(q.b9==null)return
s=q.aE
if(s==null)s=q.aE=q.Wq()
r=q.b9
B.c.W(s,r.gf7(r))},
yg(){var s,r=this.b9
if(r==null||this.aE==null)return
s=this.aE
s.toString
B.c.W(s,r.gC1(r))},
Wq(){var s,r,q,p,o=this.M.d.Ng(!1),n=A.a([],t.lb)
for(s=o.length,r=0;r<s;){q=B.b.i0(o,$.ays(),r)
if(r!==q){if(q===-1)q=s
p=new A.km(new A.fs(r,q),this,o,$.bO())
p.w=p.G9()
n.push(p)
r=q}++r}return n},
FF(){var s,r,q,p=this.aE
if(p==null)return
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.P)(p),++r){q=p[r]
q.ai$=$.bO()
q.aq$=0}this.aE=null},
a6(){var s=this.aE
if(s!=null)B.c.W(s,new A.a9c())
this.Qt()},
m(){var s=this
s.yg()
s.aE=null
s.M.m()
s.hz()},
xb(a){this.bh=A.a([],t.TP)
a.b0(new A.a99(this))},
sCa(a,b){var s=this.M
if(s.f===b)return
s.sCa(0,b)
this.az()},
sbJ(a){var s=this.M
if(s.r===a)return
s.sbJ(a)
this.a6()},
sON(a){if(this.B===a)return
this.B=a
this.a6()},
sa7E(a,b){var s,r=this
if(r.an===b)return
r.an=b
s=b===B.bz?"\u2026":null
r.M.sa4z(s)
r.a6()},
sCb(a){var s=this.M
if(s.w===a)return
s.sCb(a)
this.bH=null
this.a6()},
sB5(a){var s=this.M
if(s.z==a)return
s.sB5(a)
this.bH=null
this.a6()},
sB0(a,b){var s=this.M
if(J.f(s.y,b))return
s.sB0(0,b)
this.bH=null
this.a6()},
sOW(a){return},
sCc(a){var s=this.M
if(s.as===a)return
s.sCc(a)
this.bH=null
this.a6()},
sNa(a){return},
sOl(a){var s,r=this
if(J.f(r.cY,a))return
r.cY=a
s=r.aE
s=s==null?null:B.c.kG(s,new A.a9e())
if(s===!0)r.az()},
r5(a){var s,r=this,q=r.CO(a,B.V)
r.jj(t.k.a(A.z.prototype.ga1.call(r)))
s=r.M
s.Fl(a,B.V)
s=s.db
s===$&&A.b()
s=s.b
return q.U(0,new A.r(0,s==null?0:s))},
eG(a){this.jj(t.k.a(A.z.prototype.ga1.call(this)))
return this.M.eG(B.O)},
jQ(a){return!0},
d_(a,b){var s,r,q,p,o,n,m,l,k,j={},i=this.M,h=i.a.ih(b),g=i.d.O4(h)
if(g!=null&&!0){a.D(0,new A.iu(t.zE.a(g),t.AL))
s=!0}else s=!1
r=j.a=this.a8$
q=A.o(this).h("aA.1")
p=t.tq
o=0
while(!0){if(!(r!=null&&o<i.ax.length))break
r=r.e
r.toString
p.a(r)
n=r.a
m=new Float64Array(16)
l=new A.aT(m)
l.c1()
m[14]=0
m[13]=n.b
m[12]=n.a
n=r.e
l.fW(0,n,n,n)
if(a.z2(new A.a9b(j,b,r),b,l))return!0
r=j.a.e
r.toString
k=q.a(r).a9$
j.a=k;++o
r=k}return s},
GO(a,b){var s=this.B||this.an===B.bz?a:1/0
this.M.AY(s,b)},
wg(){var s=this,r=$.bS,q=r.dy$
switch(q.a){case 0:case 4:if(s.fe)return
s.fe=!0
r.qz(new A.a9f(s,q))
break
case 1:case 2:case 3:s.E6()
s.M.a6()
break}},
jj(a){this.M.vN(this.ej)
this.GO(a.b,a.a)},
GM(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.cX$
if(i===0)return A.a([],t.tZ)
s=j.a8$
r=A.b_(i,B.Vp,!1,t.jP)
q=new A.aJ(0,a.b,0,1/0).dh(0,j.M.w)
for(i=A.o(j).h("aA.1"),p=!b,o=0;s!=null;){if(p){s.cC(q,!0)
n=s.k3
n.toString
m=j.bh
m===$&&A.b()
switch(m[o].gee()){case B.lF:l=s.NP(j.bh[o].gtf())
break
case B.lG:case B.lH:case B.fS:case B.lJ:case B.lI:l=null
break
default:l=null}k=n}else{k=s.fT(q)
l=null}n=j.bh
n===$&&A.b()
r[o]=new A.nz(k,n[o].gee(),l,j.bh[o].gtf())
n=s.e
n.toString
s=i.a(n).a9$;++o}return r},
YR(a){return this.GM(a,!1)},
a0u(){var s,r,q=this.a8$,p=t.tq,o=this.M,n=A.o(this).h("aA.1"),m=0
while(!0){if(!(q!=null&&m<o.ax.length))break
s=q.e
s.toString
p.a(s)
r=o.ax[m]
s.a=new A.r(r.a,r.b)
s.e=o.ay[m]
q=n.a(s).a9$;++m}},
Ug(){var s,r,q=this.bh
q===$&&A.b()
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.P)(q),++r)switch(q[r].gee()){case B.lF:case B.lG:case B.lH:return!1
case B.lI:case B.lJ:case B.fS:continue}return!0},
ck(a){var s,r,q=this
if(!q.Ug())return B.R
s=q.M
s.vN(q.GM(a,!0))
q.GO(a.b,a.a)
r=s.gbv(s)
s=s.a
return a.by(new A.K(r,Math.ceil(s.gc0(s))))},
bD(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=t.k.a(A.z.prototype.ga1.call(i))
i.ej=i.YR(g)
i.jj(g)
i.a0u()
s=i.M
r=s.gbv(s)
q=s.a
q=Math.ceil(q.gc0(q))
p=s.a.ga4p()
o=i.k3=g.by(new A.K(r,q))
n=o.b<q||p
m=o.a<r
if(m||n)switch(i.an.a){case 3:i.bc=!1
i.bH=null
break
case 0:case 2:i.bc=!0
i.bH=null
break
case 1:i.bc=!0
r=A.k6(h,s.d.a,"\u2026")
q=s.r
q.toString
o=s.w
l=A.NX(h,s.y,h,h,r,B.bl,q,h,o,B.aX)
l.a6P()
if(m){switch(s.r.a){case 0:k=l.gbv(l)
j=0
break
case 1:j=i.k3.a
k=j-l.gbv(l)
break
default:k=h
j=k}i.bH=A.apt(new A.r(k,0),new A.r(j,0),A.a([B.l,B.nv],t.t_),h,B.b3,h)}else{j=i.k3.b
s=l.a
i.bH=A.apt(new A.r(0,j-Math.ceil(s.gc0(s))/2),new A.r(0,j),A.a([B.l,B.nv],t.t_),h,B.b3,h)}l.m()
break}else{i.bc=!1
i.bH=null}},
aF(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e={}
f.jj(t.k.a(A.z.prototype.ga1.call(f)))
if(f.bc){s=f.k3
r=b.a
q=b.b
p=new A.E(r,q,r+s.a,q+s.b)
if(f.bH!=null)a.gbR(a).D1(p,$.as().ba())
else a.gbR(a).cQ(0)
a.gbR(a).kL(p)}s=f.M
s.aF(a.gbR(a),b)
r=e.a=f.a8$
q=t.tq
o=b.a
n=b.b
m=A.o(f).h("aA.1")
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
a.a8_(j,new A.r(o+r.a,n+r.b),A.wH(k,k,k),new A.a9d(e))
k=e.a.e
k.toString
i=m.a(k).a9$
e.a=i;++l
r=i}if(f.bc){if(f.bH!=null){a.gbR(a).aA(0,o,n)
h=$.as().ba()
h.sa2v(B.Dw)
h.sDk(f.bH)
s=a.gbR(a)
r=f.k3
s.cz(new A.E(0,0,0+r.a,0+r.b),h)}a.gbR(a).cM(0)}s=f.aE
if(s!=null)for(r=s.length,g=0;g<s.length;s.length===r||(0,A.P)(s),++g)s[g].aF(a,b)
f.QA(a,b)},
CO(a,b){var s
this.jj(t.k.a(A.z.prototype.ga1.call(this)))
s=this.M
s.Fl(a,b)
s=s.db
s===$&&A.b()
return s.a},
CH(a){this.jj(t.k.a(A.z.prototype.ga1.call(this)))
return this.M.a.vp(a.a,a.b,B.mL,B.hw)},
ih(a){this.jj(t.k.a(A.z.prototype.ga1.call(this)))
return this.M.a.ih(a)},
no(a){this.jj(t.k.a(A.z.prototype.ga1.call(this)))
return this.M.a.no(a)},
fd(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.hy(a)
s=d.M
r=s.d
r.toString
q=A.a([],t.O_)
r.a3j(q)
d.da=q
if(B.c.kG(q,new A.a9a()))a.a=a.b=!0
else{r=d.am
if(r==null){p=new A.bM("")
o=A.a([],t.oU)
for(r=d.da,n=r.length,m=0,l=0,k="";l<r.length;r.length===n||(0,A.P)(r),++l){j=r[l]
i=j.b
if(i==null)i=j.a
for(k=j.f,h=k.length,g=0;g<k.length;k.length===h||(0,A.P)(k),++g){f=k[g]
e=f.a
o.push(f.JZ(new A.fs(m+e.a,m+e.b)))}k=p.a+=i
m+=i.length}r=d.am=new A.cH(k.charCodeAt(0)==0?k:k,o)}a.p4=r
a.d=!0
s=s.r
s.toString
a.y1=s}},
oA(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=A.a([],t.Y),b0=a7.M,b1=b0.r
b1.toString
s=A.iz(a8,a8,a8,t.D2,t.bu)
r=a7.ah
if(r==null){r=a7.da
r.toString
r=a7.ah=A.aJO(r)}for(q=r.length,p=t.k,o=b1,n=0,m=0,l=0;l<r.length;r.length===q||(0,A.P)(r),++l,m=j){k=r[l]
b1=k.a
j=m+b1.length
i=m<j
h=i?m:j
i=i?j:m
g=p.a(A.z.prototype.ga1.call(a7))
b0.vN(a7.ej)
f=g.b
f=a7.B||a7.an===B.bz?f:1/0
b0.AY(f,g.a)
e=b0.a.vp(h,i,B.mL,B.hw)
if(e.length===0)continue
i=B.c.gK(e)
d=new A.E(i.a,i.b,i.c,i.d)
c=B.c.gK(e).e
for(i=A.ap(e),h=new A.fr(e,1,a8,i.h("fr<1>")),h.qP(e,1,a8,i.c),h=new A.cd(h,h.gp(h)),i=A.o(h).c;h.t();){g=h.d
if(g==null)g=i.a(g)
d=d.pe(new A.E(g.a,g.b,g.c,g.d))
c=g.e}i=d.a
h=Math.max(0,i)
g=d.b
f=Math.max(0,g)
i=Math.min(d.c-i,p.a(A.z.prototype.ga1.call(a7)).b)
g=Math.min(d.d-g,p.a(A.z.prototype.ga1.call(a7)).d)
b=Math.floor(h)-4
a=Math.floor(f)-4
i=Math.ceil(h+i)+4
g=Math.ceil(f+g)+4
a0=new A.E(b,a,i,g)
a1=A.qR()
a2=n+1
a1.id=new A.xe(n,a8)
a1.d=!0
a1.y1=o
f=k.b
b1=f==null?b1:f
a1.p4=new A.cH(b1,k.f)
b1=b2.y
if(b1!=null){a3=b1.fL(a0)
if(a3.a>=a3.c||a3.b>=a3.d)b1=!(b>=i||a>=g)
else b1=!1
a1.bk(B.lW,b1)}a4=A.ba("newChild")
b1=a7.cZ
i=b1==null?a8:b1.a!==0
if(i===!0){b1.toString
i=new A.bf(b1,A.o(b1).h("bf<1>"))
a5=i.gad(i)
if(!a5.t())A.L(A.c7())
b1=b1.A(0,a5.gI(a5))
b1.toString
if(a4.b!==a4)A.L(A.a5F(a4.a))
a4.b=b1}else{a6=new A.ka()
b1=A.ab4(a6,a7.V_(a6))
if(a4.b!==a4)A.L(A.a5F(a4.a))
a4.b=b1}if(b1===a4)A.L(A.hA(a4.a))
J.aAN(b1,a1)
if(!b1.w.l(0,a0)){b1.w=a0
b1.iv()}b1=a4.b
if(b1===a4)A.L(A.hA(a4.a))
i=b1.d
i.toString
s.k(0,i,b1)
b1=a4.b
if(b1===a4)A.L(A.hA(a4.a))
a9.push(b1)
n=a2
o=c}a7.cZ=s
b2.k9(0,a9,b3)},
V_(a){return new A.a98(this,a)},
mo(){this.w9()
this.cZ=null}}
A.a9c.prototype={
$1(a){return a.x=null},
$S:254}
A.a99.prototype={
$1(a){return!0},
$S:44}
A.a9e.prototype={
$1(a){var s=a.w
s===$&&A.b()
return s.c!==B.d1},
$S:255}
A.a9b.prototype={
$2(a,b){return this.a.a.c5(a,b)},
$S:20}
A.a9f.prototype={
$1(a){var s=this.a
s.fe=!1
if(s.b!=null){s.E6()
s.M.a6()}},
$S:2}
A.a9d.prototype={
$2(a,b){var s=this.a.a
s.toString
a.eP(s,b)},
$S:11}
A.a9a.prototype={
$1(a){return!1},
$S:256}
A.a98.prototype={
$0(){var s=this.a,r=s.cZ.i(0,this.b)
r.toString
s.lA(s,r.w)},
$S:0}
A.km.prototype={
gn(a){var s=this.w
s===$&&A.b()
return s},
a_4(){var s=this,r=s.G9(),q=s.w
q===$&&A.b()
if(q.l(0,r))return
s.w=r
s.aG()},
G9(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f==null||g.e==null)return B.W3
s=f.a
r=g.e.a
f=g.b
q=f.r5(new A.b9(s,B.J))
p=s===r?q:f.r5(new A.b9(r,B.J))
f=f.M
o=f.r
o.toString
n=s>r!==(B.a1===o)
m=A.wI(g.gh0().a,g.gh0().b,0)
m.hR(m)
o=A.cM(m,q)
l=f.guX()
k=n?B.CG:B.CF
j=A.cM(m,p)
f=f.guX()
i=n?B.CF:B.CG
h=g.d.a===g.e.a?B.W5:B.lV
return new A.lM(new A.o_(o,l,k),new A.o_(j,f,i),h,!0)},
tL(a){var s=this,r=A.ba("result"),q=s.d,p=s.e,o=a.a
switch(o.a){case 0:case 1:r.scl(s.a1x(t.mb.a(a).b,o===B.dZ))
break
case 2:s.e=s.d=null
r.scl(B.d0)
break
case 3:o=s.a
s.d=new A.b9(o.a,B.J)
s.e=new A.b9(o.b,B.W)
r.scl(B.d0)
break
case 4:r.scl(s.Y2(t.hI.a(a).gCX()))
break
case 5:t.rQ.a(a)
r.scl(s.Xm(a.gL5(a),a.ghi(),a.ga9C()))
break
case 6:t.ra.a(a)
r.scl(s.X4(a.gA4(a),a.ghi(),a.gKm(a)))
break}if(!J.f(q,s.d)||!J.f(p,s.e)){s.b.az()
s.a_4()}return r.aL()},
a1x(a,b){var s,r,q,p,o,n,m=this
if(b)m.e=null
else m.d=null
s=m.b
r=s.bM(0,null)
r.hR(r)
q=A.cM(r,a)
p=m.gh0()
if(p.gO(p))return A.auG(m.gh0(),q)
p=m.gh0()
o=s.M.r
o.toString
n=m.qS(s.ih(A.aFE(p,q,o)))
if(b)m.e=n
else m.d=n
s=n.a
p=m.a
if(s===p.b)return B.bi
if(s===p.a)return B.bj
return A.auG(m.gh0(),q)},
qS(a){var s,r=a.a,q=this.a,p=q.b
if(r<=p)s=r===p&&a.b===B.J
else s=!0
if(s)return new A.b9(p,B.W)
q=q.a
if(r<q)return new A.b9(q,B.J)
return a},
Y2(a){var s,r,q,p,o=this,n=o.b,m=n.ih(n.lv(a))
if(o.a_p(m))return B.aD
s=n.no(m)
r=A.ba("start")
q=A.ba("end")
n=m.a
p=s.b
if(n>=p)r.b=q.b=new A.b9(n,B.J)
else{r.b=new A.b9(s.a,B.J)
q.b=new A.b9(p,B.W)}o.d=r.aL()
o.e=q.aL()
return B.aD},
X4(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.bM(0,null)
if(j.hR(j)===0)switch(c){case B.fW:case B.e0:return B.bj
case B.fX:case B.e_:return B.bi}s=A.cM(j,new A.r(a,0)).a
switch(c){case B.fW:case B.fX:if(b){k=l.e
k.toString
r=k}else{k=l.d
k.toString
r=k}q=l.Yo(r,!1,s)
p=q.a
o=q.b
break
case B.e_:case B.e0:n=l.e
if(n==null){n=new A.b9(l.a.b,B.W)
l.e=n
r=n}else r=n
n=l.d
if(n==null){l.d=r
m=r}else m=n
p=k.ih(new A.r(s,k.r5(b?r:m).b-k.M.guX()/2))
o=B.aD
break
default:p=null
o=null}if(b)l.e=p
else l.d=p
return o},
Xm(a,b,c){var s,r,q,p,o,n,m=this,l=m.e
if(l==null){l=m.a
l=a?new A.b9(l.a,B.J):new A.b9(l.b,B.W)
m.e=l
s=l}else s=l
l=m.d
if(l==null){m.d=s
r=s}else r=l
s=b?s:r
if(a&&s.a===m.a.b)return B.bi
l=!a
if(l&&s.a===m.a.a)return B.bj
switch(c){case B.XQ:l=m.a
q=m.r4(new A.YR(B.b.V(m.c,l.a,l.b)),s,a)
p=B.aD
break
case B.XR:l=m.a
q=m.r4(new A.Q9(new A.afg(m),new A.afe(B.b.V(m.c,l.a,l.b))),s,a)
p=B.aD
break
case B.XS:q=m.r4(new A.a5I(m),s,a)
p=B.aD
break
case B.XT:o=m.a
n=o.a
o=o.b
q=m.r4(new A.a_g(B.b.V(m.c,n,o)),s,a)
if(a&&q.a===o)p=B.bi
else p=l&&q.a===n?B.bj:B.aD
break
default:p=null
q=null}if(b)m.e=q
else m.d=q
return p},
r4(a,b,c){if(c)return this.qS(a.hu(B.Vy.hu(b)))
return this.qS(a.ht(B.Vx.ht(b)))},
Yo(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.M,i=j.fr
if(i==null)i=j.fr=j.a.a3i()
s=k.CO(a,B.V)
j=i.length
r=j-1
for(q=s.b,p=0;p<i.length;i.length===j||(0,A.P)(i),++p){o=i[p]
if(o.gtf()>q){r=J.aAm(o)
break}}if(b&&r===i.length-1)n=new A.b9(l.a.b,B.W)
else if(!b&&r===0)n=new A.b9(l.a.a,B.J)
else n=l.qS(k.ih(new A.r(c,i[b?r+1:r-1].gtf())))
k=n.a
j=l.a
if(k===j.a)m=B.bj
else m=k===j.b?B.bi:B.aD
return new A.aw(n,m,t.UH)},
a_p(a){var s,r,q,p,o=this
if(o.d==null||o.e==null)return!1
s=A.ba("currentStart")
r=A.ba("currentEnd")
q=o.d
q.toString
p=o.e
p.toString
if(A.aqG(q,p)>0){s.b=q
r.b=p}else{s.b=p
r.b=q}return A.aqG(s.aL(),a)>=0&&A.aqG(r.aL(),a)<=0},
bM(a,b){var s=A.wI(this.gh0().a,this.gh0().b,0)
s.d2(0,this.b.bM(0,b))
return s},
i9(a,b){if(this.b.b==null)return},
gh0(){var s,r,q,p,o,n,m=this,l=m.x
if(l==null){l=m.b
s=m.a
r=s.a
q=l.CH(A.aey(B.J,r,s.b,!1))
if(q.length!==0){l=B.c.gK(q)
p=new A.E(l.a,l.b,l.c,l.d)
for(o=1;o<q.length;++o){l=q[o]
p=p.pe(new A.E(l.a,l.b,l.c,l.d))}m.x=p
l=p}else{n=l.r5(new A.b9(r,B.J))
l=A.LP(n,new A.r(n.a+0,n.b+-l.M.guX()))
m.x=l}}return l},
gcG(a){var s=this.gh0()
return new A.K(s.c-s.a,s.d-s.b)},
aF(a,b){var s,r,q,p,o,n=this,m=n.d
if(m==null||n.e==null)return
s=n.b
if(s.cY!=null){r=A.aey(B.J,m.a,n.e.a,!1)
q=$.as().ba()
q.sct(0,B.aW)
m=s.cY
m.toString
q.sap(0,m)
for(m=s.CH(r),s=m.length,p=0;p<m.length;m.length===s||(0,A.P)(m),++p){o=m[p]
a.gbR(a).cz(new A.E(o.a,o.b,o.c,o.d).dF(b),q)}}A.wI(n.gh0().a,n.gh0().b,0)},
CM(a){var s=this.b.M.a.NS(a),r=this.a,q=r.a
r=r.b
return A.aey(B.J,B.f.hQ(s.a,q,r),B.f.hQ(s.b,q,r),!1)},
$iah:1}
A.Bg.prototype={
aB(a){var s,r,q
this.eA(a)
s=this.a8$
for(r=t.tq;s!=null;){s.aB(a)
q=s.e
q.toString
s=r.a(q).a9$}},
au(a){var s,r,q
this.dT(0)
s=this.a8$
for(r=t.tq;s!=null;){s.au(0)
q=s.e
q.toString
s=r.a(q).a9$}}}
A.SX.prototype={}
A.SY.prototype={
aB(a){this.RK(a)
$.fm.Af$.a.D(0,this.gEm())},
au(a){$.fm.Af$.a.A(0,this.gEm())
this.RL(0)}}
A.VT.prototype={}
A.VU.prototype={}
A.Mf.prototype={
sa7D(a){if(a===this.M)return
this.M=a
this.az()},
sa83(a){if(a===this.am)return
this.am=a
this.az()},
sa2O(a){return},
sa2N(a){return},
gki(){return!0},
gmk(){return!0},
gYH(){var s=this.M,r=(s|1)>>>0>0||(s|2)>>>0>0?80:0
return(s|4)>>>0>0||(s|8)>>>0>0?r+80:r},
ck(a){return a.by(new A.K(1/0,this.gYH()))},
aF(a,b){var s=b.a,r=b.b,q=this.k3
q=new A.Lm(new A.E(s,r,s+q.a,r+q.b),this.M,this.am,!1,!1,A.y(t.S,t.O),A.ay())
q.iq()
a.nC()
a.z6(q)}}
A.xU.prototype={}
A.eU.prototype={
ex(a){if(!(a.e instanceof A.cq))a.e=new A.cq()},
ck(a){var s=this.B$
if(s!=null)return s.fT(a)
return this.oJ(a)},
bD(){var s=this,r=s.B$,q=t.k
if(r!=null){r.cC(q.a(A.z.prototype.ga1.call(s)),!0)
r=s.B$.k3
r.toString
s.k3=r}else s.k3=s.oJ(q.a(A.z.prototype.ga1.call(s)))},
oJ(a){return new A.K(A.J(0,a.a,a.b),A.J(0,a.c,a.d))},
d_(a,b){var s=this.B$
s=s==null?null:s.c5(a,b)
return s===!0},
dk(a,b){},
aF(a,b){var s=this.B$
if(s!=null)a.eP(s,b)}}
A.pL.prototype={
H(){return"HitTestBehavior."+this.b}}
A.xV.prototype={
c5(a,b){var s,r=this
if(r.k3.C(0,b)){s=r.d_(a,b)||r.v===B.aQ
if(s||r.v===B.bp)a.D(0,new A.p6(b,r))}else s=!1
return s},
jQ(a){return this.v===B.aQ}}
A.LZ.prototype={
sJq(a){if(this.v.l(0,a))return
this.v=a
this.a6()},
bD(){var s=this,r=t.k.a(A.z.prototype.ga1.call(s)),q=s.B$,p=s.v
if(q!=null){q.cC(p.pb(r),!0)
q=s.B$.k3
q.toString
s.k3=q}else s.k3=p.pb(r).by(B.R)},
ck(a){var s=this.B$,r=this.v
if(s!=null)return s.fT(r.pb(a))
else return r.pb(a).by(B.R)}}
A.M9.prototype={
sa79(a,b){if(this.v===b)return
this.v=b
this.a6()},
sa76(a,b){if(this.R===b)return
this.R=b
this.a6()},
GP(a){var s,r,q=a.a,p=a.b
p=p<1/0?p:A.J(this.v,q,p)
s=a.c
r=a.d
return new A.aJ(q,p,s,r<1/0?r:A.J(this.R,s,r))},
Fo(a,b){var s=this.B$
if(s!=null)return a.by(b.$2(s,this.GP(a)))
return this.GP(a).by(B.R)},
ck(a){return this.Fo(a,A.ao_())},
bD(){this.k3=this.Fo(t.k.a(A.z.prototype.ga1.call(this)),A.ao0())}}
A.Md.prototype={
gmk(){return this.B$!=null&&this.v>0},
sn8(a,b){var s,r,q,p,o=this
if(o.R===b)return
s=o.B$!=null
r=s&&o.v>0
q=o.v
o.R=b
p=B.d.b5(A.WC(b,0,1)*255)
o.v=p
if(r!==(s&&p>0))o.lc()
o.az()
if(q!==0!==(o.v!==0)&&!0)o.b2()},
stb(a){return},
lh(a){return this.v>0},
aF(a,b){var s,r,q=this
if(q.B$==null)return
s=q.v
if(s===0){q.ch.saW(0,null)
return}r=q.ch
r.saW(0,a.BR(b,s,A.eU.prototype.giW.call(q),t.Jq.a(r.a)))},
fR(a){var s,r=this.B$
if(r!=null)s=this.v!==0||!1
else s=!1
if(s){r.toString
a.$1(r)}}}
A.xP.prototype={
ge4(){if(this.B$!=null){var s=this.l_$
s.toString}else s=!1
return s},
qh(a){var s=a==null?A.au2():a
s.sJt(0,this.mD$)
return s},
sn8(a,b){var s=this,r=s.hV$
if(r===b)return
if(s.b!=null&&r!=null)r.F(0,s.grQ())
s.hV$=b
if(s.b!=null)b.Y(0,s.grQ())
s.yM()},
stb(a){if(!1===this.Ae$)return
this.Ae$=!1
this.b2()},
yM(){var s,r=this,q=r.mD$,p=r.hV$
p=r.mD$=B.d.b5(A.WC(p.gn(p),0,1)*255)
if(q!==p){s=r.l_$
p=p>0
r.l_$=p
if(r.B$!=null&&s!==p)r.lc()
r.a72()
if(q===0||r.mD$===0)r.b2()}},
lh(a){var s=this.hV$
return s.gn(s)>0},
fR(a){var s,r=this.B$
if(r!=null)if(this.mD$===0){s=this.Ae$
s.toString}else s=!0
else s=!1
if(s){r.toString
a.$1(r)}}}
A.LV.prototype={}
A.uE.prototype={
Y(a,b){return null},
F(a,b){return null},
j(a){return"CustomClipper"}}
A.o2.prototype={
vq(a){return this.b.fU(new A.E(0,0,0+a.a,0+a.b),this.c)},
vQ(a){if(A.D(a)!==B.a1b)return!0
t.jH.a(a)
return!a.b.l(0,this.b)||a.c!=this.c}}
A.tc.prototype={
soH(a){var s,r=this,q=r.v
if(q==a)return
r.v=a
s=a==null
if(s||q==null||A.D(a)!==A.D(q)||a.vQ(q))r.rk()
if(r.b!=null){if(q!=null)q.F(0,r.grj())
if(!s)a.Y(0,r.grj())}},
aB(a){var s
this.nG(a)
s=this.v
if(s!=null)s.Y(0,this.grj())},
au(a){var s=this.v
if(s!=null)s.F(0,this.grj())
this.lL(0)},
rk(){this.R=null
this.az()
this.b2()},
smp(a){if(a!==this.aC){this.aC=a
this.az()}},
bD(){var s,r=this,q=r.k3
q=q!=null?q:null
r.wc()
s=r.k3
s.toString
if(!J.f(q,s))r.R=null},
jq(){var s,r,q=this
if(q.R==null){s=q.v
if(s==null)s=null
else{r=q.k3
r.toString
r=s.vq(r)
s=r}q.R=s==null?q.gqW():s}},
iC(a){var s,r=this
switch(r.aC.a){case 0:return null
case 1:case 2:case 3:if(r.v==null)s=null
else{s=r.k3
s=new A.E(0,0,0+s.a,0+s.b)}if(s==null){s=r.k3
s=new A.E(0,0,0+s.a,0+s.b)}return s}},
m(){this.cA=null
this.hz()}}
A.LY.prototype={
gqW(){var s=this.k3
return new A.E(0,0,0+s.a,0+s.b)},
c5(a,b){var s=this
if(s.v!=null){s.jq()
if(!s.R.C(0,b))return!1}return s.jc(a,b)},
aF(a,b){var s,r,q=this,p=q.B$
if(p!=null){s=q.ch
if(q.aC!==B.h){q.jq()
p=q.cx
p===$&&A.b()
r=q.R
r.toString
s.saW(0,a.k0(p,b,r,A.eU.prototype.giW.call(q),q.aC,t.EM.a(s.a)))}else{a.eP(p,b)
s.saW(0,null)}}else q.ch.saW(0,null)}}
A.LX.prototype={
gqW(){var s=$.as().ce(),r=this.k3
s.kF(new A.E(0,0,0+r.a,0+r.b))
return s},
c5(a,b){var s=this
if(s.v!=null){s.jq()
if(!s.R.C(0,b))return!1}return s.jc(a,b)},
aF(a,b){var s,r,q,p,o=this,n=o.B$
if(n!=null){s=o.ch
if(o.aC!==B.h){o.jq()
n=o.cx
n===$&&A.b()
r=o.k3
q=r.a
r=r.b
p=o.R
p.toString
s.saW(0,a.MC(n,b,new A.E(0,0,0+q,0+r),p,A.eU.prototype.giW.call(o),o.aC,t.JG.a(s.a)))}else{a.eP(n,b)
s.saW(0,null)}}else o.ch.saW(0,null)}}
A.Bh.prototype={
siG(a,b){if(this.cp===b)return
this.cp=b
this.az()},
shv(a,b){if(this.cK.l(0,b))return
this.cK=b
this.az()},
sap(a,b){if(this.eh.l(0,b))return
this.eh=b
this.az()},
fd(a){this.hy(a)
a.siG(0,this.cp)}}
A.Mg.prototype={
sdE(a,b){if(this.l_===b)return
this.l_=b
this.rk()},
sa2x(a,b){if(J.f(this.hV,b))return
this.hV=b
this.rk()},
gqW(){var s,r,q=this.k3,p=0+q.a
q=0+q.b
switch(this.l_.a){case 0:s=this.hV
if(s==null)s=B.aM
return s.dR(new A.E(0,0,p,q))
case 1:s=(p-0)/2
r=(q-0)/2
return new A.iM(0,0,p,q,s,r,s,r,s,r,s,r,s===r)}},
c5(a,b){var s=this
if(s.v!=null){s.jq()
if(!s.R.C(0,b))return!1}return s.jc(a,b)},
aF(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.B$==null){i.ch.saW(0,null)
return}i.jq()
s=i.R.dF(b)
r=$.as()
q=r.ce()
q.f8(s)
p=a.gbR(a)
if(i.cp!==0&&!0){p.cz(new A.E(s.a,s.b,s.c,s.d).dw(20),$.as7())
o=i.cK
n=i.cp
m=i.eh
p.p9(q,o,n,(m.gn(m)>>>24&255)!==255)}l=i.aC===B.hM
if(!l){r=r.ba()
r.sap(0,i.eh)
p.dr(s,r)}r=i.cx
r===$&&A.b()
o=i.k3
n=o.a
o=o.b
m=i.R
m.toString
k=i.ch
j=t.xs.a(k.a)
k.saW(0,a.a7W(r,b,new A.E(0,0,0+n,0+o),m,new A.a9g(i,l),i.aC,j))}}
A.a9g.prototype={
$2(a,b){var s,r
if(this.b){s=a.gbR(a)
r=$.as().ba()
r.sap(0,this.a.eh)
s.p8(r)}this.a.hA(a,b)},
$S:11}
A.Mh.prototype={
gqW(){var s=$.as().ce(),r=this.k3
s.kF(new A.E(0,0,0+r.a,0+r.b))
return s},
c5(a,b){var s=this
if(s.v!=null){s.jq()
if(!s.R.C(0,b))return!1}return s.jc(a,b)},
aF(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(j.B$==null){j.ch.saW(0,null)
return}j.jq()
s=j.k3
r=b.a
q=b.b
p=s.a
s=s.b
o=j.R.dF(b)
n=a.gbR(a)
if(j.cp!==0&&!0){n.cz(new A.E(r,q,r+p,q+s).dw(20),$.as7())
s=j.cK
r=j.cp
q=j.eh
n.p9(o,s,r,(q.gn(q)>>>24&255)!==255)}m=j.aC===B.hM
if(!m){s=$.as().ba()
s.sap(0,j.eh)
n.d8(o,s)}s=j.cx
s===$&&A.b()
r=j.k3
q=r.a
r=r.b
p=j.R
p.toString
l=j.ch
k=t.JG.a(l.a)
l.saW(0,a.MC(s,b,new A.E(0,0,0+q,0+r),p,new A.a9h(j,m),j.aC,k))}}
A.a9h.prototype={
$2(a,b){var s,r
if(this.b){s=a.gbR(a)
r=$.as().ba()
r.sap(0,this.a.eh)
s.p8(r)}this.a.hA(a,b)},
$S:11}
A.uK.prototype={
H(){return"DecorationPosition."+this.b}}
A.M3.prototype={
sa4b(a){var s,r=this
if(a.l(0,r.R))return
s=r.v
if(s!=null)s.m()
r.v=null
r.R=a
r.az()},
sbL(a,b){if(b===this.aC)return
this.aC=b
this.az()},
szq(a){if(a.l(0,this.bB))return
this.bB=a
this.az()},
au(a){var s=this,r=s.v
if(r!=null)r.m()
s.v=null
s.lL(0)
s.az()},
jQ(a){var s=this.R,r=this.k3
r.toString
return s.Ln(r,a,this.bB.d)},
aF(a,b){var s,r,q,p=this,o=p.v
if(o==null)o=p.v=p.R.tu(p.gen())
s=p.bB
r=p.k3
r.toString
q=new A.pO(s.a,s.b,s.c,s.d,r,s.f)
if(p.aC===B.a6){o.pY(a.gbR(a),b,q)
if(p.R.gAO())a.Dg()}p.hA(a,b)
if(p.aC===B.Gy){o=p.v
o.toString
o.pY(a.gbR(a),b,q)
if(p.R.gAO())a.Dg()}}}
A.Mq.prototype={
sMp(a,b){var s=this
if(J.f(s.v,b))return
s.v=b
s.az()
s.b2()},
see(a){var s=this
if(J.f(s.R,a))return
s.R=a
s.az()
s.b2()},
sbJ(a){var s=this
if(s.aC==a)return
s.aC=a
s.az()
s.b2()},
gmk(){return!1},
sbE(a,b){var s,r=this
if(J.f(r.cA,b))return
s=new A.aT(new Float64Array(16))
s.br(b)
r.cA=s
r.az()
r.b2()},
smN(a){return},
gx4(){var s,r,q,p=this,o=p.R,n=o==null?null:o.a_(p.aC)
if(p.v==null&&n==null)return p.cA
s=new A.aT(new Float64Array(16))
s.c1()
o=p.v
if(o!=null)s.aA(0,o.a,o.b)
o=n!=null
if(o){r=p.k3
r.toString
q=n.Js(r)
s.aA(0,q.a,q.b)}else q=null
r=p.cA
r.toString
s.d2(0,r)
if(o)s.aA(0,-q.a,-q.b)
o=p.v
if(o!=null)s.aA(0,-o.a,-o.b)
return s},
c5(a,b){return this.d_(a,b)},
d_(a,b){var s=this.bB?this.gx4():null
return a.z2(new A.a9q(this),b,s)},
aF(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
if(a.B$!=null){s=a.gx4()
s.toString
r=A.a68(s)
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
if(b===0||!isFinite(b)){a.ch.saW(0,null)
return}q=a.cx
q===$&&A.b()
p=A.eU.prototype.giW.call(a)
o=a.ch
n=o.a
o.saW(0,a0.q3(q,a1,s,p,n instanceof A.lU?n:null))}else{a.hA(a0,a1.U(0,r))
a.ch.saW(0,null)}}},
dk(a,b){var s=this.gx4()
s.toString
b.d2(0,s)}}
A.a9q.prototype={
$2(a,b){return this.a.qN(a,b)},
$S:20}
A.xR.prototype={
a_z(){if(this.v!=null)return
this.v=this.aC},
FW(a){switch(a.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
sAn(a){var s=this,r=s.R
if(r===a)return
s.R=a
if(s.FW(r)||s.FW(a))s.a6()
else{s.bK=s.cA=null
s.az()}},
see(a){var s=this
if(s.aC.l(0,a))return
s.aC=a
s.v=s.bK=s.cA=null
s.az()},
sbJ(a){var s=this
if(s.bB==a)return
s.bB=a
s.v=s.bK=s.cA=null
s.az()},
ck(a){var s,r=this.B$
if(r!=null){s=r.fT(B.bD)
switch(this.R.a){case 6:return a.by(new A.aJ(0,a.b,0,a.d).oK(s))
case 1:case 2:case 0:case 4:case 3:case 5:return a.oK(s)}}else return new A.K(A.J(0,a.a,a.b),A.J(0,a.c,a.d))},
bD(){var s,r,q,p=this,o=p.B$
if(o!=null){o.cC(B.bD,!0)
switch(p.R.a){case 6:o=t.k
s=o.a(A.z.prototype.ga1.call(p))
r=p.B$.k3
r.toString
q=new A.aJ(0,s.b,0,s.d).oK(r)
p.k3=o.a(A.z.prototype.ga1.call(p)).by(q)
break
case 1:case 2:case 0:case 4:case 3:case 5:o=t.k.a(A.z.prototype.ga1.call(p))
s=p.B$.k3
s.toString
p.k3=o.oK(s)
break}p.bK=p.cA=null}else{o=t.k.a(A.z.prototype.ga1.call(p))
p.k3=new A.K(A.J(0,o.a,o.b),A.J(0,o.c,o.d))}},
yN(){var s,r,q,p,o,n,m,l,k,j=this
if(j.bK!=null)return
if(j.B$==null){j.cA=!1
s=new A.aT(new Float64Array(16))
s.c1()
j.bK=s}else{j.a_z()
s=j.B$.k3
s.toString
r=j.R
q=j.k3
q.toString
p=A.awR(r,s,q)
q=p.b
r=p.a
o=s.a
s=s.b
n=j.v.AH(r,new A.E(0,0,0+o,0+s))
m=j.v
m.toString
l=j.k3
k=m.AH(q,new A.E(0,0,0+l.a,0+l.b))
m=n.a
j.cA=n.c-m<o||n.d-n.b<s
s=A.wI(k.a,k.b,0)
s.fW(0,q.a/r.a,q.b/r.b,1)
s.aA(0,-m,-n.b)
j.bK=s}},
H9(a,b){var s,r,q,p,o=this,n=o.bK
n.toString
s=A.a68(n)
if(s==null){n=o.cx
n===$&&A.b()
r=o.bK
r.toString
q=A.eU.prototype.giW.call(o)
p=o.ch.a
return a.q3(n,b,r,q,p instanceof A.lU?p:null)}else o.hA(a,b.U(0,s))
return null},
aF(a,b){var s,r,q,p,o,n=this
if(n.B$!=null){s=n.k3
if(!s.gO(s)){s=n.B$.k3
s=s.gO(s)}else s=!0}else s=!0
if(s)return
n.yN()
s=n.cA
s.toString
if(s&&n.ek!==B.h){s=n.cx
s===$&&A.b()
r=n.k3
q=r.a
r=r.b
p=n.ch
o=p.a
o=o instanceof A.pd?o:null
p.saW(0,a.k0(s,b,new A.E(0,0,0+q,0+r),n.gZZ(),n.ek,o))}else n.ch.saW(0,n.H9(a,b))},
d_(a,b){var s=this,r=s.k3
if(!r.gO(r)){r=s.B$
if(r==null)r=null
else{r=r.k3
r=r.gO(r)}r=r===!0}else r=!0
if(r)return!1
s.yN()
return a.z2(new A.a8X(s),b,s.bK)},
lh(a){var s=this.k3
if(!s.gO(s)){s=a.k3
s=!s.gO(s)}else s=!1
return s},
dk(a,b){var s=this.k3
if(!s.gO(s)){s=a.k3
s=!s.gO(s)}else s=!1
if(!s)b.Dj()
else{this.yN()
s=this.bK
s.toString
b.d2(0,s)}}}
A.a8X.prototype={
$2(a,b){return this.a.qN(a,b)},
$S:20}
A.M6.prototype={
sa9a(a){var s=this
if(s.v.l(0,a))return
s.v=a
s.az()
s.b2()},
c5(a,b){return this.d_(a,b)},
d_(a,b){var s,r,q=this
if(q.R){s=q.v
r=q.k3
r=new A.r(s.a*r.a,s.b*r.b)
s=r}else s=null
return a.os(new A.a8Y(q),s,b)},
aF(a,b){var s,r,q=this
if(q.B$!=null){s=q.v
r=q.k3
q.hA(a,new A.r(b.a+s.a*r.a,b.b+s.b*r.b))}},
dk(a,b){var s=this.v,r=this.k3
b.aA(0,s.a*r.a,s.b*r.b)}}
A.a8Y.prototype={
$2(a,b){return this.a.qN(a,b)},
$S:20}
A.Mi.prototype={
oJ(a){return new A.K(A.J(1/0,a.a,a.b),A.J(1/0,a.c,a.d))},
iN(a,b){var s,r=this,q=null
if(t.c.b(a)){s=r.a8
return s==null?q:s.$1(a)}if(t.d.b(a))return q
if(t.oN.b(a)){s=r.aO
return s==null?q:s.$1(a)}if(t.XA.b(a))return q
if(t.Ko.b(a)){s=r.cp
return s==null?q:s.$1(a)}if(t.w5.b(a)){s=r.cK
return s==null?q:s.$1(a)}if(t.v.b(a))return q
if(t.WQ.b(a))return q
if(t.ks.b(a)){s=r.mC
return s==null?q:s.$1(a)}}}
A.Mb.prototype={
c5(a,b){return this.QD(a,b)&&!0},
iN(a,b){var s=this.aO
if(s!=null&&t.XA.b(a))return s.$1(a)},
gKb(a){return this.cp},
gCy(){return this.cK},
aB(a){this.nG(a)
this.cK=!0},
au(a){this.cK=!1
this.lL(0)},
oJ(a){return new A.K(A.J(1/0,a.a,a.b),A.J(1/0,a.c,a.d))},
$ijK:1,
gBs(a){return this.bz},
gBt(a){return this.a9}}
A.Mk.prototype={
ge4(){return!0}}
A.xS.prototype={
sLr(a){var s,r=this
if(a===r.v)return
r.v=a
s=r.R
if(s==null||!s)r.b2()},
sAF(a){var s=this,r=s.R
if(a==r)return
if(r==null)r=s.v
s.R=a
if(r!==(a==null?s.v:a))s.b2()},
c5(a,b){return!this.v&&this.jc(a,b)},
fR(a){var s,r=this.B$
if(r!=null){s=this.R
s=!(s==null?this.v:s)}else s=!1
if(s){r.toString
a.$1(r)}}}
A.Mc.prototype={
suG(a){var s=this
if(a===s.v)return
s.v=a
s.a6()
s.uA()},
eG(a){if(this.v)return null
return this.Ek(a)},
gki(){return this.v},
ck(a){if(this.v)return new A.K(A.J(0,a.a,a.b),A.J(0,a.c,a.d))
return this.QC(a)},
pZ(){this.Qu()},
bD(){var s,r=this
if(r.v){s=r.B$
if(s!=null)s.hk(t.k.a(A.z.prototype.ga1.call(r)))}else r.wc()},
c5(a,b){return!this.v&&this.jc(a,b)},
lh(a){return!this.v},
aF(a,b){if(this.v)return
this.hA(a,b)},
fR(a){if(this.v)return
this.wa(a)}}
A.xN.prototype={
sJf(a){if(this.v===a)return
this.v=a
this.b2()},
sAF(a){return},
c5(a,b){return this.v?this.k3.C(0,b):this.jc(a,b)},
fR(a){var s,r,q=this.B$
if(q!=null){s=this.R
r=this.v
s=!r}else s=!1
if(s){q.toString
a.$1(q)}}}
A.jU.prototype={
sa9m(a){if(A.arA(a,this.a8))return
this.a8=a
this.b2()},
sjX(a){var s,r=this
if(J.f(r.bz,a))return
s=r.bz
r.bz=a
if(a!=null!==(s!=null))r.b2()},
slf(a){var s,r=this
if(J.f(r.aO,a))return
s=r.aO
r.aO=a
if(a!=null!==(s!=null))r.b2()},
sa7s(a){var s,r=this
if(J.f(r.a9,a))return
s=r.a9
r.a9=a
if(a!=null!==(s!=null))r.b2()},
sa7A(a){var s,r=this
if(J.f(r.cp,a))return
s=r.cp
r.cp=a
if(a!=null!==(s!=null))r.b2()},
fd(a){var s,r=this
r.hy(a)
if(r.bz!=null){s=r.a8
s=s==null||s.C(0,B.e1)}else s=!1
if(s)a.sjX(r.bz)
if(r.aO!=null){s=r.a8
s=s==null||s.C(0,B.BQ)}else s=!1
if(s)a.slf(r.aO)
if(r.a9!=null){s=r.a8
if(s==null||s.C(0,B.e5))a.suK(r.ga_g())
s=r.a8
if(s==null||s.C(0,B.e4))a.suJ(r.ga_e())}if(r.cp!=null){s=r.a8
if(s==null||s.C(0,B.e2))a.suL(r.ga_i())
s=r.a8
if(s==null||s.C(0,B.e3))a.suI(r.ga_c())}},
a_f(){var s,r,q=this.a9
if(q!=null){s=this.k3
r=s.a*-0.8
s=s.jt(B.j)
s=A.cM(this.bM(0,null),s)
q.$1(new A.ip(null,new A.r(r,0),r,s))}},
a_h(){var s,r,q=this.a9
if(q!=null){s=this.k3
r=s.a*0.8
s=s.jt(B.j)
s=A.cM(this.bM(0,null),s)
q.$1(new A.ip(null,new A.r(r,0),r,s))}},
a_j(){var s,r,q=this.cp
if(q!=null){s=this.k3
r=s.b*-0.8
s=s.jt(B.j)
s=A.cM(this.bM(0,null),s)
q.$1(new A.ip(null,new A.r(0,r),r,s))}},
a_d(){var s,r,q=this.cp
if(q!=null){s=this.k3
r=s.b*0.8
s=s.jt(B.j)
s=A.cM(this.bM(0,null),s)
q.$1(new A.ip(null,new A.r(0,r),r,s))}}}
A.xW.prototype={
sMA(a){var s=this
if(s.v===a)return
s.v=a
s.IE(a)
s.b2()},
sa3l(a){if(this.R===a)return
this.R=a
this.b2()},
sa4N(a){if(this.aC===a)return
this.aC=a
this.b2()},
sa4K(a){return},
IE(a){var s=this,r=a.fy
r=a.fx
r=r==null?null:new A.cH(r,B.am)
s.cA=r
r=a.id
r=a.go
r=r==null?null:new A.cH(r,B.am)
s.bK=r
s.ek=null
s.hg=null
s.iL=null},
sbJ(a){if(this.mM==a)return
this.mM=a
this.b2()},
fR(a){this.wa(a)},
fd(a){var s,r,q=this
q.hy(a)
a.a=q.R
a.b=q.aC
s=q.v.a
if(s!=null){a.bk(B.C0,!0)
a.bk(B.BT,s)}s=q.v.e
if(s!=null)a.bk(B.BY,s)
s=q.v.f
if(s!=null)a.bk(B.C1,s)
s=q.v.w
if(s!=null)a.bk(B.C_,s)
s=q.v.as
if(s!=null)a.bk(B.BW,s)
s=q.v.at
if(s!=null)a.bk(B.BX,s)
s=q.v.db
if(s!=null)a.bk(B.BU,s)
s=q.cA
if(s!=null){a.p4=s
a.d=!0}s=q.bK
if(s!=null){a.R8=s
a.d=!0}s=q.ek
if(s!=null){a.RG=s
a.d=!0}s=q.hg
if(s!=null){a.rx=s
a.d=!0}s=q.iL
if(s!=null){a.ry=s
a.d=!0}s=q.v
r=s.p2
if(r!=null){a.to=r
a.d=!0}s.p3!=null
s=q.v.cx
if(s!=null)a.bk(B.BV,s)
s=q.v.cy
if(s!=null)a.bk(B.BZ,s)
s=q.mM
if(s!=null){a.y1=s
a.d=!0}s=q.v
r=s.R8
if(r!=null){a.id=r
a.d=!0}s=s.RG
if(s!=null)a.Jn(s)
if(q.v.rx!=null)a.sjX(q.ga_k())
if(q.v.ry!=null)a.slf(q.ga_a())
if(q.v.am!=null)a.suH(q.ga_8())},
a_l(){var s=this.v.rx
if(s!=null)s.$0()},
a_b(){var s=this.v.ry
if(s!=null)s.$0()},
a_9(){var s=this.v.am
if(s!=null)s.$0()}}
A.LW.prototype={
sa2w(a){return},
fd(a){this.hy(a)
a.c=!0}}
A.Ma.prototype={
fd(a){this.hy(a)
a.d=a.p2=a.a=!0}}
A.M5.prototype={
sa4L(a){if(a===this.v)return
this.v=a
this.b2()},
fR(a){if(this.v)return
this.wa(a)}}
A.M8.prototype={
sAG(a,b){if(b===this.v)return
this.v=b
this.b2()},
fd(a){this.hy(a)
a.k1=this.v
a.d=!0}}
A.SN.prototype={
eG(a){var s=this.B$
if(s!=null)return s.j7(a)
return this.Ek(a)}}
A.SO.prototype={
aB(a){var s=this
s.nG(a)
s.hV$.Y(0,s.grQ())
s.yM()},
au(a){this.hV$.F(0,this.grQ())
this.lL(0)},
aF(a,b){if(this.mD$===0)return
this.hA(a,b)}}
A.Bi.prototype={
aB(a){var s
this.eA(a)
s=this.B$
if(s!=null)s.aB(a)},
au(a){var s
this.dT(0)
s=this.B$
if(s!=null)s.au(0)}}
A.Bj.prototype={
eG(a){var s=this.B$
if(s!=null)return s.j7(a)
return this.w8(a)}}
A.jZ.prototype={
H(){return"SelectionResult."+this.b}}
A.dx.prototype={$iah:1}
A.MW.prototype={
sq5(a){var s=this,r=s.mH$
if(a==r)return
if(a==null)s.F(0,s.gHW())
else if(r==null)s.Y(0,s.gHW())
s.HV()
s.mH$=a
s.HX()},
HX(){var s=this
if(s.mH$==null){s.l1$=!1
return}if(s.l1$&&!s.gn(s).d){s.mH$.A(0,s)
s.l1$=!1}else if(!s.l1$&&s.gn(s).d){s.mH$.D(0,s)
s.l1$=!0}},
HV(){var s=this
if(s.l1$){s.mH$.A(0,s)
s.l1$=!1}}}
A.qP.prototype={
H(){return"SelectionEventType."+this.b}}
A.oe.prototype={
H(){return"TextGranularity."+this.b}}
A.aaP.prototype={}
A.un.prototype={}
A.nY.prototype={}
A.nZ.prototype={
H(){return"SelectionExtendDirection."+this.b}}
A.qQ.prototype={
H(){return"SelectionStatus."+this.b}}
A.lM.prototype={
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.a0(b)!==A.D(s))return!1
return b instanceof A.lM&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&b.c===s.c&&b.d===s.d},
gu(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.o_.prototype={
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.a0(b)!==A.D(s))return!1
return b instanceof A.o_&&b.a.l(0,s.a)&&b.b===s.b&&b.c===s.c},
gu(a){return A.Y(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.zs.prototype={
H(){return"TextSelectionHandleType."+this.b}}
A.nN.prototype={
eG(a){var s,r,q=this.B$
if(q!=null){s=q.j7(a)
r=q.e
r.toString
t.hX.a(r)
if(s!=null)s+=r.a.b}else s=this.w8(a)
return s},
aF(a,b){var s,r=this.B$
if(r!=null){s=r.e
s.toString
a.eP(r,t.hX.a(s).a.U(0,b))}},
d_(a,b){var s,r=this.B$
if(r!=null){s=r.e
s.toString
t.hX.a(s)
return a.os(new A.a9i(b,s,r),s.a,b)}return!1}}
A.a9i.prototype={
$2(a,b){return this.c.c5(a,b)},
$S:20}
A.Me.prototype={
rG(){var s=this
if(s.v!=null)return
s.v=s.R.a_(s.aC)},
sde(a,b){var s=this
if(s.R.l(0,b))return
s.R=b
s.v=null
s.a6()},
sbJ(a){var s=this
if(s.aC==a)return
s.aC=a
s.v=null
s.a6()},
ck(a){var s,r,q,p=this
p.rG()
if(p.B$==null){s=p.v
return a.by(new A.K(s.a+s.c,s.b+s.d))}s=p.v
s.toString
r=a.Kf(s)
q=p.B$.fT(r)
s=p.v
return a.by(new A.K(s.a+q.a+s.c,s.b+q.b+s.d))},
bD(){var s,r,q,p,o,n,m=this,l=t.k.a(A.z.prototype.ga1.call(m))
m.rG()
if(m.B$==null){s=m.v
m.k3=l.by(new A.K(s.a+s.c,s.b+s.d))
return}s=m.v
s.toString
r=l.Kf(s)
m.B$.cC(r,!0)
s=m.B$
q=s.e
q.toString
t.hX.a(q)
p=m.v
o=p.a
n=p.b
q.a=new A.r(o,n)
s=s.k3
m.k3=l.by(new A.K(o+s.a+p.c,n+s.b+p.d))}}
A.xO.prototype={
rG(){var s=this
if(s.v!=null)return
s.v=s.R.a_(s.aC)},
see(a){var s=this
if(s.R.l(0,a))return
s.R=a
s.v=null
s.a6()},
sbJ(a){var s=this
if(s.aC==a)return
s.aC=a
s.v=null
s.a6()},
t8(){var s,r,q,p,o=this
o.rG()
s=o.B$
r=s.e
r.toString
t.hX.a(r)
q=o.v
q.toString
p=o.k3
p.toString
s=s.k3
s.toString
r.a=q.mj(t.r.a(p.af(0,s)))}}
A.Mj.prototype={
sa9r(a){if(this.aO==a)return
this.aO=a
this.a6()},
sa5Y(a){if(this.a9==a)return
this.a9=a
this.a6()},
ck(a){var s,r,q=this,p=q.aO!=null||a.b===1/0,o=q.a9!=null||a.d===1/0,n=q.B$
if(n!=null){s=n.fT(new A.aJ(0,a.b,0,a.d))
if(p){n=q.aO
if(n==null)n=1
n=s.a*n}else n=1/0
if(o){r=q.a9
if(r==null)r=1
r=s.b*r}else r=1/0
return a.by(new A.K(n,r))}n=p?0:1/0
return a.by(new A.K(n,o?0:1/0))},
bD(){var s,r,q=this,p=t.k.a(A.z.prototype.ga1.call(q)),o=q.aO!=null||p.b===1/0,n=q.a9!=null||p.d===1/0,m=q.B$
if(m!=null){m.cC(new A.aJ(0,p.b,0,p.d),!0)
if(o){m=q.B$.k3.a
s=q.aO
m*=s==null?1:s}else m=1/0
if(n){s=q.B$.k3.b
r=q.a9
s*=r==null?1:r}else s=1/0
q.k3=p.by(new A.K(m,s))
q.t8()}else{m=o?0:1/0
q.k3=p.by(new A.K(m,n?0:1/0))}}}
A.N4.prototype={
vy(a){return new A.K(A.J(1/0,a.a,a.b),A.J(1/0,a.c,a.d))}}
A.M2.prototype={
szL(a){var s=this,r=s.v
if(r===a)return
if(A.D(a)!==A.D(r)||a.nv(r))s.a6()
s.v=a
s.b!=null},
aB(a){this.RM(a)},
au(a){this.RN(0)},
ck(a){return a.by(this.v.vy(a))},
bD(){var s,r,q,p,o,n,m=this,l=t.k,k=l.a(A.z.prototype.ga1.call(m))
m.k3=k.by(m.v.vy(k))
if(m.B$!=null){s=m.v.CI(l.a(A.z.prototype.ga1.call(m)))
l=m.B$
l.toString
k=s.a
r=s.b
q=k>=r
l.cC(s,!(q&&s.c>=s.d))
l=m.B$
p=l.e
p.toString
t.hX.a(p)
o=m.v
n=m.k3
n.toString
if(q&&s.c>=s.d)l=new A.K(A.J(0,k,r),A.J(0,s.c,s.d))
else{l=l.k3
l.toString}p.a=o.CS(n,l)}}}
A.Bk.prototype={
aB(a){var s
this.eA(a)
s=this.B$
if(s!=null)s.aB(a)},
au(a){var s
this.dT(0)
s=this.B$
if(s!=null)s.au(0)}}
A.vH.prototype={
H(){return"GrowthDirection."+this.b}}
A.k1.prototype={
gLR(){return!1},
tc(a,b,c){if(a==null)a=this.w
switch(A.bl(this.a).a){case 0:return new A.aJ(c,b,a,a)
case 1:return new A.aJ(a,a,c,b)}},
a2q(a,b){return this.tc(null,a,b)},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.k1))return!1
return b.a===s.a&&b.b===s.b&&b.d===s.d&&b.f===s.f&&b.r===s.r&&b.w===s.w&&b.x===s.x&&b.y===s.y&&b.Q===s.Q&&b.z===s.z},
gu(a){var s=this
return A.Y(s.a,s.b,s.d,s.f,s.r,s.w,s.x,s.y,s.Q,s.z,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this,r=A.a([s.a.j(0),s.b.j(0),s.c.j(0),"scrollOffset: "+B.d.N(s.d,1),"remainingPaintExtent: "+B.d.N(s.r,1)],t.s),q=s.f
if(q!==0)r.push("overlap: "+B.d.N(q,1))
r.push("crossAxisExtent: "+B.d.N(s.w,1))
r.push("crossAxisDirection: "+s.x.j(0))
r.push("viewportMainAxisExtent: "+B.d.N(s.y,1))
r.push("remainingCacheExtent: "+B.d.N(s.Q,1))
r.push("cacheOrigin: "+B.d.N(s.z,1))
return"SliverConstraints("+B.c.bb(r,", ")+")"}}
A.ad3.prototype={
cd(){return"SliverGeometry"}}
A.qW.prototype={}
A.Ng.prototype={
j(a){return A.D(this.a).j(0)+"@(mainAxis: "+A.h(this.c)+", crossAxis: "+A.h(this.d)+")"}}
A.yG.prototype={
j(a){var s=this.a
return"layoutOffset="+(s==null?"None":B.d.N(s,1))}}
A.lP.prototype={
j(a){return"paintOffset="+A.h(this.a)}}
A.k3.prototype={}
A.ck.prototype={
ga1(){return t.p.a(A.z.prototype.ga1.call(this))},
gkg(){return this.gi8()},
gi8(){var s=this,r=t.p
switch(A.bl(r.a(A.z.prototype.ga1.call(s)).a).a){case 0:return new A.E(0,0,0+s.id.c,0+r.a(A.z.prototype.ga1.call(s)).w)
case 1:return new A.E(0,0,0+r.a(A.z.prototype.ga1.call(s)).w,0+s.id.c)}},
pZ(){},
Lm(a,b,c){var s=this
if(c>=0&&c<s.id.r&&b>=0&&b<t.p.a(A.z.prototype.ga1.call(s)).w)if(s.AE(a,b,c)||!1){a.D(0,new A.Ng(c,b,s))
return!0}return!1},
AE(a,b,c){return!1},
h7(a,b,c){var s=a.d,r=a.r,q=s+r
return A.J(A.J(c,s,q)-A.J(b,s,q),0,r)},
mm(a,b,c){var s=a.d,r=s+a.z,q=a.Q,p=s+q
return A.J(A.J(c,r,p)-A.J(b,r,p),0,q)},
mn(a){return 0},
zo(a){return 0},
dk(a,b){},
iN(a,b){}}
A.a9j.prototype={
G7(a){var s
switch(a.a.a){case 0:case 3:s=!1
break
case 2:case 1:s=!0
break
default:s=null}switch(a.b.a){case 0:break
case 1:s=!s
break}return s},
a67(a,b,c,d){var s,r,q,p,o,n=this,m={},l=t.p,k=n.G7(l.a(A.z.prototype.ga1.call(n))),j=b.e
j.toString
j=t.U.a(j).a
j.toString
s=j-l.a(A.z.prototype.ga1.call(n)).d
r=n.mn(b)
q=d-s
p=c-r
o=m.a=null
switch(A.bl(l.a(A.z.prototype.ga1.call(n)).a).a){case 0:if(!k){l=b.k3.a
q=l-q
s=n.id.c-l-s}o=new A.r(s,r)
m.a=new A.r(q,p)
break
case 1:if(!k){l=b.k3.b
q=l-q
s=n.id.c-l-s}o=new A.r(r,s)
m.a=new A.r(p,q)
break}return a.a2h(new A.a9k(m,b),o)}}
A.a9k.prototype={
$1(a){return this.b.c5(a,this.a.a)},
$S:102}
A.TJ.prototype={}
A.TM.prototype={
au(a){this.w6(0)}}
A.Ml.prototype={
sqm(a){if(this.ca===a)return
this.ca=a
this.a6()}}
A.Mm.prototype={
NV(a,b){var s,r
if(b>0){s=a/b
r=B.d.b5(s)
if(Math.abs(s*b-r*b)<1e-10)return r
return B.d.cE(s)}return 0},
CN(a,b){var s,r
if(b>0){s=a/b-1
r=B.d.b5(s)
if(Math.abs(s*b-r*b)<1e-10)return Math.max(0,r)
return Math.max(0,B.d.dl(s))}return 0},
Uc(a){var s,r=this.a8$,q=A.o(this).h("aA.1"),p=t.U,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s<a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).a9$}return o},
Ud(a){var s,r=this.bz$,q=A.o(this).h("aA.1"),p=t.U,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s>a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).aO$}return o},
bD(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=t.p,a7=a6.a(A.z.prototype.ga1.call(a4)),a8=a4.av
a8.R8=!1
s=a6.a(A.z.prototype.ga1.call(a4)).y*a4.ca
a6=a7.d
r=a6+a7.z
q=r+a7.Q
p=a7.a2q(s,s)
o=a4.NV(r,s)
n=isFinite(q)?a4.CN(q,s):a5
if(a4.a8$!=null){m=a4.Uc(o)
a4.tp(m,n!=null?a4.Ud(n):0)}else a4.tp(0,0)
if(a4.a8$==null)if(!a4.Jj(o,s*o)){l=o<=0?0:a8.goG()*s
a4.id=A.o6(a5,!1,a5,a5,l,0,0,l,a5)
a8.tD()
return}k=a4.a8$
k.toString
k=k.e
k.toString
j=t.U
k=j.a(k).b
k.toString
i=k-1
h=a5
for(;i>=o;--i){g=a4.Ly(p)
if(g==null){a4.id=A.o6(a5,!1,a5,a5,0,0,0,0,i*s)
return}k=g.e
k.toString
j.a(k).a=s*i
if(h==null)h=g}if(h==null){a4.a8$.hk(p)
h=a4.a8$
k=h.e
k.toString
j.a(k).a=s*o}k=h.e
k.toString
k=j.a(k).b
k.toString
i=k+1
k=A.o(a4).h("aA.1")
f=n!=null
while(!0){if(!(!f||i<=n)){e=1/0
break}d=h.e
d.toString
g=k.a(d).a9$
if(g!=null){d=g.e
d.toString
d=j.a(d).b
d.toString
d=d!==i}else d=!0
if(d){g=a4.Lx(p,h)
if(g==null){e=i*s
break}}else g.hk(p)
d=g.e
d.toString
j.a(d)
c=d.b
c.toString
d.a=s*c;++i
h=g}k=a4.bz$
k.toString
k=k.e
k.toString
k=j.a(k).b
k.toString
b=s*o
a=s*(k+1)
e=Math.min(e,a8.KK(a7,o,k,b,a))
a0=a4.h7(a7,b,a)
a1=a4.mm(a7,b,a)
a2=a6+a7.r
a3=isFinite(a2)?a4.CN(a2,s):a5
a4.id=A.o6(a1,a3!=null&&k>=a3||a6>0,a5,a5,e,a0,0,e,a5)
if(e===a)a8.R8=!0
a8.tD()}}
A.hy.prototype={$icq:1}
A.a9o.prototype={
ex(a){}}
A.e5.prototype={
j(a){var s=this.b,r=this.mI$?"keepAlive; ":""
return"index="+A.h(s)+"; "+r+this.Rc(0)}}
A.jV.prototype={
ex(a){if(!(a.e instanceof A.e5))a.e=new A.e5(!1,null,null)},
ix(a){var s
this.E7(a)
s=a.e
s.toString
t.U.a(s)
if(!s.c){t.x.a(a)
s.b=this.av.p4}},
AJ(a,b,c){this.w0(0,b,c)},
uE(a,b){var s,r,q,p=this,o=a.e
o.toString
s=t.U
s.a(o)
if(!o.c){p.Pc(a,b)
o=a.e
o.toString
s.a(o).b=p.av.p4
p.a6()}else{r=p.aw
if(r.i(0,o.b)===a)r.A(0,o.b)
q=a.e
q.toString
s.a(q).b=p.av.p4
o=o.b
o.toString
r.k(0,o,a)}},
A(a,b){var s=b.e
s.toString
t.U.a(s)
if(!s.c){this.Pe(0,b)
return}this.aw.A(0,s.b)
this.jy(b)},
wV(a,b){this.AM(new A.a9l(this,a,b),t.p)},
Fz(a){var s,r=this,q=a.e
q.toString
t.U.a(q)
if(q.mI$){r.A(0,a)
s=q.b
s.toString
r.aw.k(0,s,a)
a.e=q
r.E7(a)
q.c=!0}else r.av.MP(a)},
aB(a){var s,r,q
this.RO(a)
for(s=this.aw,s=s.gb_(s),s=new A.ei(J.aC(s.a),s.b),r=A.o(s).z[1];s.t();){q=s.a;(q==null?r.a(q):q).aB(a)}},
au(a){var s,r,q
this.RP(0)
for(s=this.aw,s=s.gb_(s),s=new A.ei(J.aC(s.a),s.b),r=A.o(s).z[1];s.t();){q=s.a;(q==null?r.a(q):q).au(0)}},
k5(){this.Pd()
var s=this.aw
s.gb_(s).W(0,this.gMM())},
b0(a){var s
this.DF(a)
s=this.aw
s.gb_(s).W(0,a)},
fR(a){this.DF(a)},
Jj(a,b){var s
this.wV(a,null)
s=this.a8$
if(s!=null){s=s.e
s.toString
t.U.a(s).a=b
return!0}this.av.R8=!0
return!1},
Ly(a){var s,r,q,p=this,o=p.a8$
o.toString
o=o.e
o.toString
s=t.U
o=s.a(o).b
o.toString
r=o-1
p.wV(r,null)
o=p.a8$
o.toString
q=o.e
q.toString
q=s.a(q).b
q.toString
if(q===r){o.cC(a,!1)
return p.a8$}p.av.R8=!0
return null},
Lx(a,b){var s,r,q,p=b.e
p.toString
s=t.U
p=s.a(p).b
p.toString
r=p+1
this.wV(r,b)
p=b.e
p.toString
q=A.o(this).h("aA.1").a(p).a9$
if(q!=null){p=q.e
p.toString
p=s.a(p).b
p.toString
p=p===r}else p=!1
if(p){q.cC(a,!1)
return q}this.av.R8=!0
return null},
tp(a,b){var s={}
s.a=a
s.b=b
this.AM(new A.a9n(s,this),t.p)},
Mq(a){switch(A.bl(t.p.a(A.z.prototype.ga1.call(this)).a).a){case 0:return a.k3.a
case 1:return a.k3.b}},
AE(a,b,c){var s,r,q=this.bz$,p=A.asH(a)
for(s=A.o(this).h("aA.1");q!=null;){if(this.a67(p,q,b,c))return!0
r=q.e
r.toString
q=s.a(r).aO$}return!1},
zo(a){var s=a.e
s.toString
return t.U.a(s).a},
lh(a){var s=t.MR.a(a.e)
return(s==null?null:s.b)!=null&&!this.aw.P(0,s.b)},
dk(a,b){var s,r,q,p,o,n=this
if(!n.lh(a))b.Dj()
else{s=t.p
r=n.G7(s.a(A.z.prototype.ga1.call(n)))
q=a.e
q.toString
q=t.U.a(q).a
q.toString
p=q-s.a(A.z.prototype.ga1.call(n)).d
o=n.mn(a)
switch(A.bl(s.a(A.z.prototype.ga1.call(n)).a).a){case 0:b.aA(0,!r?n.id.c-a.k3.a-p:p,o)
break
case 1:b.aA(0,o,!r?n.id.c-a.k3.b-p:p)
break}}},
aF(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null
if(c.a8$==null)return
s=t.p
switch(A.kC(s.a(A.z.prototype.ga1.call(c)).a,s.a(A.z.prototype.ga1.call(c)).b)){case B.F:r=a0.U(0,new A.r(0,c.id.c))
q=B.A5
p=B.ch
o=!0
break
case B.aF:r=a0
q=B.ch
p=B.fM
o=!1
break
case B.E:r=a0
q=B.fM
p=B.ch
o=!1
break
case B.an:r=a0.U(0,new A.r(c.id.c,0))
q=B.fN
p=B.fM
o=!0
break
default:o=b
r=o
p=r
q=p}n=c.a8$
for(m=A.o(c).h("aA.1"),l=t.U;n!=null;){k=n.e
k.toString
k=l.a(k).a
k.toString
j=k-s.a(A.z.prototype.ga1.call(c)).d
i=c.mn(n)
k=r.a
h=q.a
k=k+h*j+p.a*i
g=r.b
f=q.b
g=g+f*j+p.b*i
e=new A.r(k,g)
if(o){d=c.Mq(n)
e=new A.r(k+h*d,g+f*d)}if(j<s.a(A.z.prototype.ga1.call(c)).r&&j+c.Mq(n)>0)a.eP(n,e)
k=n.e
k.toString
n=m.a(k).a9$}}}
A.a9l.prototype={
$1(a){var s=this.a,r=s.aw,q=this.b,p=this.c
if(r.P(0,q)){r=r.A(0,q)
r.toString
q=r.e
q.toString
t.U.a(q)
s.jy(r)
r.e=q
s.w0(0,r,p)
q.c=!1}else s.av.a3T(q,p)},
$S:103}
A.a9n.prototype={
$1(a){var s,r,q
for(s=this.a,r=this.b;s.a>0;){q=r.a8$
q.toString
r.Fz(q);--s.a}for(;s.b>0;){q=r.bz$
q.toString
r.Fz(q);--s.b}s=r.aw
s=s.gb_(s)
q=A.o(s).h("aR<p.E>")
B.c.W(A.aF(new A.aR(s,new A.a9m(),q),!0,q.h("p.E")),r.av.ga8k())},
$S:103}
A.a9m.prototype={
$1(a){var s=a.e
s.toString
return!t.U.a(s).mI$},
$S:261}
A.Bm.prototype={
aB(a){var s,r,q
this.eA(a)
s=this.a8$
for(r=t.U;s!=null;){s.aB(a)
q=s.e
q.toString
s=r.a(q).a9$}},
au(a){var s,r,q
this.dT(0)
s=this.a8$
for(r=t.U;s!=null;){s.au(0)
q=s.e
q.toString
s=r.a(q).a9$}}}
A.T1.prototype={}
A.T2.prototype={}
A.TK.prototype={
au(a){this.w6(0)}}
A.TL.prototype={}
A.qA.prototype={
gzf(){var s=this,r=t.p
switch(A.kC(r.a(A.z.prototype.ga1.call(s)).a,r.a(A.z.prototype.ga1.call(s)).b)){case B.F:return s.gco().d
case B.aF:return s.gco().a
case B.E:return s.gco().b
case B.an:return s.gco().c}},
ga2j(){var s=this,r=t.p
switch(A.kC(r.a(A.z.prototype.ga1.call(s)).a,r.a(A.z.prototype.ga1.call(s)).b)){case B.F:return s.gco().b
case B.aF:return s.gco().c
case B.E:return s.gco().d
case B.an:return s.gco().a}},
ga43(){switch(A.bl(t.p.a(A.z.prototype.ga1.call(this)).a).a){case 0:var s=this.gco()
return s.gbl(s)+s.gbp(s)
case 1:return this.gco().gcB()}},
ex(a){if(!(a.e instanceof A.lP))a.e=new A.lP(B.j)},
bD(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=null,a2=t.p,a3=a2.a(A.z.prototype.ga1.call(a0)),a4=a0.gzf()
a0.ga2j()
s=a0.gco()
s.toString
a2=s.a2l(A.bl(a2.a(A.z.prototype.ga1.call(a0)).a))
r=a0.ga43()
if(a0.B$==null){q=a0.h7(a3,0,a2)
a0.id=A.o6(a0.mm(a3,0,a2),!1,a1,a1,a2,Math.min(q,a3.r),0,a2,a1)
return}p=a0.h7(a3,0,a4)
o=a3.f
if(o>0)o=Math.max(0,o-p)
s=a0.B$
s.toString
n=Math.max(0,a3.d-a4)
m=Math.min(0,a3.z+a4)
l=a3.r
k=a0.h7(a3,0,a4)
j=a3.Q
i=a0.mm(a3,0,a4)
h=Math.max(0,a3.w-r)
g=a3.a
f=a3.b
s.cC(new A.k1(g,f,a3.c,n,a4+a3.e,o,l-k,h,a3.x,a3.y,m,j-i),!0)
e=a0.B$.id
s=e.y
if(s!=null){a0.id=A.o6(a1,!1,a1,a1,0,0,0,0,s)
return}s=e.a
n=a4+s
m=a2+s
d=a0.h7(a3,n,m)
c=p+d
b=a0.mm(a3,0,a4)
a=a0.mm(a3,n,m)
n=e.c
k=e.d
q=Math.min(p+Math.max(n,k+d),l)
l=e.b
k=Math.min(c+k,q)
j=Math.min(a+b+e.z,j)
i=e.e
n=Math.max(c+n,p+e.r)
a0.id=A.o6(j,e.x,n,k,a2+i,q,l,m,a1)
m=a0.B$.e
m.toString
t.jB.a(m)
switch(A.kC(g,f)){case B.F:m.a=new A.r(a0.gco().a,a0.h7(a3,a0.gco().d+s,a0.gco().d+s+a0.gco().b))
break
case B.aF:m.a=new A.r(a0.h7(a3,0,a0.gco().a),a0.gco().b)
break
case B.E:m.a=new A.r(a0.gco().a,a0.h7(a3,0,a0.gco().b))
break
case B.an:m.a=new A.r(a0.h7(a3,a0.gco().c+s,a0.gco().c+s+a0.gco().a),a0.gco().b)
break}},
AE(a,b,c){var s,r,q,p,o=this,n=o.B$
if(n!=null&&n.id.r>0){n=n.e
n.toString
t.jB.a(n)
s=o.h7(t.p.a(A.z.prototype.ga1.call(o)),0,o.gzf())
r=o.B$
r.toString
r=o.mn(r)
n=n.a
q=o.B$.ga65()
p=n!=null
if(p)a.c.push(new A.t5(new A.r(-n.a,-n.b)))
q.$3$crossAxisPosition$mainAxisPosition(a,b-r,c-s)
if(p)a.uW()}return!1},
mn(a){var s=this,r=t.p
switch(A.kC(r.a(A.z.prototype.ga1.call(s)).a,r.a(A.z.prototype.ga1.call(s)).b)){case B.F:case B.E:return s.gco().a
case B.an:case B.aF:return s.gco().b}},
zo(a){return this.gzf()},
dk(a,b){var s=a.e
s.toString
s=t.jB.a(s).a
b.aA(0,s.a,s.b)},
aF(a,b){var s,r=this.B$
if(r!=null&&r.id.w){s=r.e
s.toString
a.eP(r,b.U(0,t.jB.a(s).a))}}}
A.T_.prototype={
aB(a){var s
this.eA(a)
s=this.B$
if(s!=null)s.aB(a)},
au(a){var s
this.dT(0)
s=this.B$
if(s!=null)s.au(0)}}
A.LS.prototype={
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return b instanceof A.LS&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gu(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this
return"RelativeRect.fromLTRB("+B.d.N(s.a,1)+", "+B.d.N(s.b,1)+", "+B.d.N(s.c,1)+", "+B.d.N(s.d,1)+")"}}
A.em.prototype={
gAR(){var s=this
return s.e!=null||s.f!=null||s.r!=null||s.w!=null||s.x!=null||s.y!=null},
j(a){var s=this,r=A.a([],t.s),q=s.e
if(q!=null)r.push("top="+A.i2(q))
q=s.f
if(q!=null)r.push("right="+A.i2(q))
q=s.r
if(q!=null)r.push("bottom="+A.i2(q))
q=s.w
if(q!=null)r.push("left="+A.i2(q))
q=s.x
if(q!=null)r.push("width="+A.i2(q))
q=s.y
if(q!=null)r.push("height="+A.i2(q))
if(r.length===0)r.push("not positioned")
r.push(s.qI(0))
return B.c.bb(r,"; ")}}
A.z9.prototype={
H(){return"StackFit."+this.b}}
A.xX.prototype={
ex(a){if(!(a.e instanceof A.em))a.e=new A.em(null,null,B.j)},
a0Q(){var s=this
if(s.am!=null)return
s.am=s.ah.a_(s.aE)},
see(a){var s=this
if(s.ah.l(0,a))return
s.ah=a
s.am=null
s.a6()},
sbJ(a){var s=this
if(s.aE==a)return
s.aE=a
s.am=null
s.a6()},
eG(a){return this.Ke(a)},
ck(a){return this.Id(a,A.ao_())},
Id(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.a0Q()
if(e.cX$===0){s=a.a
r=a.b
q=A.J(1/0,s,r)
p=a.c
o=a.d
n=A.J(1/0,p,o)
return isFinite(q)&&isFinite(n)?new A.K(A.J(1/0,s,r),A.J(1/0,p,o)):new A.K(A.J(0,s,r),A.J(0,p,o))}m=a.a
l=a.c
switch(e.b9.a){case 0:k=new A.aJ(0,a.b,0,a.d)
break
case 1:k=A.DW(new A.K(A.J(1/0,m,a.b),A.J(1/0,l,a.d)))
break
case 2:k=a
break
default:k=null}j=e.a8$
for(s=t.B,i=l,h=m,g=!1;j!=null;){r=j.e
r.toString
s.a(r)
if(!r.gAR()){f=b.$2(j,k)
h=Math.max(h,f.a)
i=Math.max(i,f.b)
g=!0}j=r.a9$}return g?new A.K(h,i):new A.K(A.J(1/0,m,a.b),A.J(1/0,l,a.d))},
bD(){var s,r,q,p,o,n,m,l=this,k=t.k.a(A.z.prototype.ga1.call(l))
l.M=!1
l.k3=l.Id(k,A.ao0())
s=l.a8$
for(r=t.B,q=t.r;s!=null;){p=s.e
p.toString
r.a(p)
if(!p.gAR()){o=l.am
o.toString
n=l.k3
n.toString
m=s.k3
m.toString
p.a=o.mj(q.a(n.af(0,m)))}else{o=l.k3
o.toString
n=l.am
n.toString
l.M=A.aut(s,p,o,n)||l.M}s=p.a9$}},
d_(a,b){return this.zI(a,b)},
uS(a,b){this.oP(a,b)},
aF(a,b){var s,r=this,q=r.bh,p=q!==B.h&&r.M,o=r.B
if(p){p=r.cx
p===$&&A.b()
s=r.k3
o.saW(0,a.k0(p,b,new A.E(0,0,0+s.a,0+s.b),r.gBJ(),q,o.a))}else{o.saW(0,null)
r.oP(a,b)}},
m(){this.B.saW(0,null)
this.hz()},
iC(a){var s
switch(this.bh.a){case 0:return null
case 1:case 2:case 3:if(this.M){s=this.k3
s=new A.E(0,0,0+s.a,0+s.b)}else s=null
return s}}}
A.T3.prototype={
aB(a){var s,r,q
this.eA(a)
s=this.a8$
for(r=t.B;s!=null;){s.aB(a)
q=s.e
q.toString
s=r.a(q).a9$}},
au(a){var s,r,q
this.dT(0)
s=this.a8$
for(r=t.B;s!=null;){s.au(0)
q=s.e
q.toString
s=r.a(q).a9$}}}
A.T4.prototype={}
A.Oq.prototype={
l(a,b){if(b==null)return!1
if(J.a0(b)!==A.D(this))return!1
return b instanceof A.Oq&&b.a.l(0,this.a)&&b.b===this.b},
gu(a){return A.Y(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return this.a.j(0)+" at "+A.i2(this.b)+"x"}}
A.xY.prototype={
szq(a){var s,r,q,p,o=this
if(o.k1.l(0,a))return
s=o.k1
o.k1=a
r=s.b
r=A.wH(r,r,1)
q=o.k1.b
if(!r.l(0,A.wH(q,q,1))){r=o.IR()
q=o.ch
p=q.a
p.toString
J.aAj(p)
q.saW(0,r)
o.az()}o.a6()},
IR(){var s,r=this.k1.b
r=A.wH(r,r,1)
this.k4=r
s=A.av6(r)
s.aB(this)
return s},
pZ(){},
bD(){var s,r=this.k1.a
this.id=r
s=this.B$
if(s!=null)s.hk(A.DW(r))},
c5(a,b){var s=this.B$
if(s!=null)s.c5(A.asH(a),b)
a.D(0,new A.iu(this,t.AL))
return!0},
a6a(a){var s,r=A.a([],t.om),q=new A.aT(new Float64Array(16))
q.c1()
s=new A.i9(r,A.a([q],t.rE),A.a([],t.cR))
this.c5(s,a)
return s},
ge4(){return!0},
aF(a,b){var s=this.B$
if(s!=null)a.eP(s,b)},
dk(a,b){var s=this.k4
s.toString
b.d2(0,s)
this.Qw(a,b)},
a3e(){var s,r,q
try{q=$.as()
s=q.a4_()
r=this.ch.a.a2A(s)
this.a1D()
q.a8r(r)
r.m()}finally{}},
a1D(){var s,r,q,p,o,n,m,l,k,j=null,i=this.gi8(),h=i.gaP(),g=this.k2
g.glo()
s=i.gaP()
g.glo()
g=this.ch
r=t.lu
q=g.a.KV(0,new A.r(h.a,0),r)
switch(A.mk().a){case 0:p=g.a.KV(0,new A.r(s.a,i.d-1-0),r)
break
case 1:case 2:case 3:case 4:case 5:p=j
break
default:p=j}h=q==null
if(h&&p==null)return
if(!h&&p!=null){h=q.f
g=q.r
s=q.e
r=q.w
A.auV(new A.iV(p.a,p.b,p.c,p.d,s,h,g,r))
return}o=A.mk()===B.aK
n=h?p:q
h=n.f
g=n.r
s=n.e
r=n.w
m=o?n.a:j
l=o?n.b:j
k=o?n.c:j
A.auV(new A.iV(m,l,k,o?n.d:j,s,h,g,r))},
gi8(){var s=this.id.a3(0,this.k1.b)
return new A.E(0,0,0+s.a,0+s.b)},
gkg(){var s,r=this.k4
r.toString
s=this.id
return A.hE(r,new A.E(0,0,0+s.a,0+s.b))}}
A.T6.prototype={
aB(a){var s
this.eA(a)
s=this.B$
if(s!=null)s.aB(a)},
au(a){var s
this.dT(0)
s=this.B$
if(s!=null)s.au(0)}}
A.ug.prototype={
H(){return"CacheExtentStyle."+this.b}}
A.qE.prototype={
j(a){return"RevealedOffset(offset: "+A.h(this.a)+", rect: "+this.b.j(0)+")"}}
A.qB.prototype={
fd(a){this.hy(a)
a.Jn(B.C2)},
fR(a){var s=this.gJJ()
new A.aR(s,new A.a9s(),A.b1(s).h("aR<1>")).W(0,a)},
sh6(a){if(a===this.M)return
this.M=a
this.a6()},
sa42(a){if(a===this.am)return
this.am=a
this.a6()},
sbV(a,b){var s=this,r=s.ah
if(b===r)return
if(s.b!=null)r.F(0,s.guz())
s.ah=b
if(s.b!=null)b.Y(0,s.guz())
s.a6()},
sa2F(a){if(a==null)a=250
if(a===this.aE)return
this.aE=a
this.a6()},
sa2G(a){if(a===this.bh)return
this.bh=a
this.a6()},
smp(a){var s=this
if(a!==s.B){s.B=a
s.az()
s.b2()}},
aB(a){this.RQ(a)
this.ah.Y(0,this.guz())},
au(a){this.ah.F(0,this.guz())
this.RR(0)},
ge4(){return!0},
LY(a,b,c,d,e,f,g,h,a0,a1,a2){var s,r,q,p,o,n,m,l,k=this,j=A.aJs(k.ah.k4,e),i=f+h
for(s=f,r=0;c!=null;){q=a2<=0?0:a2
p=Math.max(b,-q)
o=b-p
c.cC(new A.k1(k.M,e,j,q,r,i-s,Math.max(0,a1-s+f),d,k.am,g,p,Math.max(0,a0+o)),!0)
n=c.id
m=n.y
if(m!=null)return m
l=s+n.b
if(n.w||a2>0)k.Nm(c,l,e)
else k.Nm(c,-a2+f,e)
i=Math.max(l+n.c,i)
m=n.a
a2-=m
r+=m
s+=n.d
m=n.z
if(m!==0){a0-=m-o
b=Math.min(p+m,0)}k.a9h(e,n)
c=a.$1(c)}return 0},
iC(a){var s,r,q,p,o,n
switch(this.B.a){case 0:return null
case 1:case 2:case 3:break}s=this.k3
r=0+s.a
q=0+s.b
s=t.p
if(s.a(A.z.prototype.ga1.call(a)).f===0||!isFinite(s.a(A.z.prototype.ga1.call(a)).y))return new A.E(0,0,r,q)
p=s.a(A.z.prototype.ga1.call(a)).y-s.a(A.z.prototype.ga1.call(a)).r+s.a(A.z.prototype.ga1.call(a)).f
switch(A.kC(this.M,s.a(A.z.prototype.ga1.call(a)).b)){case B.E:o=0+p
n=0
break
case B.F:q-=p
n=0
o=0
break
case B.aF:n=0+p
o=0
break
case B.an:r-=p
n=0
o=0
break
default:n=0
o=0}return new A.E(n,o,r,q)},
zN(a){var s,r=this,q=r.b9
if(q==null){q=r.k3
return new A.E(0,0,0+q.a,0+q.b)}switch(A.bl(r.M).a){case 1:s=r.k3
return new A.E(0,0-q,0+s.a,0+s.b+q)
case 0:s=r.k3
return new A.E(0-q,0,0+s.a+q,0+s.b)}},
aF(a,b){var s,r,q,p=this
if(p.a8$==null)return
s=p.ga5W()&&p.B!==B.h
r=p.an
if(s){s=p.cx
s===$&&A.b()
q=p.k3
r.saW(0,a.k0(s,b,new A.E(0,0,0+q.a,0+q.b),p.ga__(),p.B,r.a))}else{r.saW(0,null)
p.Ha(a,b)}},
m(){this.an.saW(0,null)
this.hz()},
Ha(a,b){var s,r,q,p,o,n,m
for(s=this.gJJ(),r=s.length,q=b.a,p=b.b,o=0;o<s.length;s.length===r||(0,A.P)(s),++o){n=s[o]
if(n.id.w){m=this.a7I(n)
a.eP(n,new A.r(q+m.a,p+m.b))}}},
d_(a,b){var s,r,q,p,o,n,m=this,l={}
l.a=l.b=null
switch(A.bl(m.M).a){case 1:l.b=b.b
l.a=b.a
break
case 0:l.b=b.a
l.a=b.b
break}s=new A.qW(a.a,a.b,a.c)
for(r=m.ga2T(),q=r.length,p=0;p<r.length;r.length===q||(0,A.P)(r),++p){o=r[p]
if(!o.id.w)continue
n=new A.aT(new Float64Array(16))
n.c1()
m.dk(o,n)
if(a.a2i(new A.a9r(l,m,o,s),n))return!0}return!1},
lp(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=a instanceof A.ck
for(s=t.F,r=c,q=a,p=0;o=q.c,o!==d;q=o){o.toString
s.a(o)
if(q instanceof A.G)r=q
if(o instanceof A.ck){n=o.zo(q)
n.toString
p+=n}else{p=0
b=!1}}if(r!=null){s=r.c
s.toString
t.nl.a(s)
m=t.p.a(A.z.prototype.ga1.call(s)).b
switch(A.bl(d.M).a){case 0:l=r.k3.a
break
case 1:l=r.k3.b
break
default:l=c}if(a1==null)a1=a.gi8()
k=A.hE(a.bM(0,r),a1)}else{if(b){t.nl.a(a)
s=t.p
m=s.a(A.z.prototype.ga1.call(a)).b
l=a.id.a
if(a1==null)switch(A.bl(d.M).a){case 0:a1=new A.E(0,0,0+l,0+s.a(A.z.prototype.ga1.call(a)).w)
break
case 1:a1=new A.E(0,0,0+s.a(A.z.prototype.ga1.call(a)).w,0+a.id.a)
break}}else{s=d.ah.at
s.toString
a1.toString
return new A.qE(s,a1)}k=a1}t.nl.a(q)
switch(A.kC(d.M,m)){case B.F:s=k.d
p+=l-s
j=s-k.b
break
case B.aF:s=k.a
p+=s
j=k.c-s
break
case B.E:s=k.b
p+=s
j=k.d-s
break
case B.an:s=k.c
p+=l-s
j=s-k.a
break
default:j=c}q.id.toString
p=d.Oj(q,p)
i=A.hE(a.bM(0,d),a1)
h=d.a78(q)
switch(t.p.a(A.z.prototype.ga1.call(q)).b.a){case 0:p-=h
break
case 1:switch(A.bl(d.M).a){case 1:p-=i.d-i.b
break
case 0:p-=i.c-i.a
break}break}s=d.M
switch(A.bl(s).a){case 0:g=d.k3.a-h
break
case 1:g=d.k3.b-h
break
default:g=c}f=p-(g-j)*a0
o=d.ah.at
o.toString
e=o-f
switch(s.a){case 2:i=i.aA(0,0,e)
break
case 1:i=i.aA(0,e,0)
break
case 0:i=i.aA(0,0,-e)
break
case 3:i=i.aA(0,-e,0)
break}return new A.qE(f,i)},
a3f(a,b,c){switch(A.kC(this.M,c)){case B.F:return new A.r(0,this.k3.b-(b+a.id.c))
case B.aF:return new A.r(b,0)
case B.E:return new A.r(0,b)
case B.an:return new A.r(this.k3.a-(b+a.id.c),0)}},
eX(a,b,c,d){var s=this
if(!s.ah.r.gmi())return s.qL(a,b,c,d)
s.qL(a,null,c,A.auv(a,b,c,s.ah,d,s))},
nx(){return this.eX(B.aZ,null,B.x,null)},
lA(a,b){return this.eX(B.aZ,a,B.x,b)},
$iLU:1}
A.a9s.prototype={
$1(a){var s=a.id
return s.w||s.z>0},
$S:263}
A.a9r.prototype={
$1(a){var s=this,r=s.c,q=s.a,p=s.b.a3h(r,q.b)
return r.Lm(s.d,q.a,p)},
$S:102}
A.xZ.prototype={
ex(a){if(!(a.e instanceof A.k3))a.e=new A.k3(null,null,B.j)},
sa2m(a){if(a===this.u0)return
this.u0=a
this.a6()},
saP(a){if(a==this.e2)return
this.e2=a
this.a6()},
gki(){return!0},
ck(a){return new A.K(A.J(1/0,a.a,a.b),A.J(1/0,a.c,a.d))},
bD(){var s,r,q,p,o,n,m,l,k,j=this
switch(A.bl(j.M).a){case 1:j.ah.oy(j.k3.b)
break
case 0:j.ah.oy(j.k3.a)
break}if(j.e2==null){j.pj=j.pi=0
j.c4=!1
j.ah.ov(0,0)
return}switch(A.bl(j.M).a){case 1:s=j.k3
r=s.b
q=s.a
break
case 0:s=j.k3
r=s.a
q=s.b
break
default:r=null
q=null}s=0
do{p=j.ah.at
p.toString
o=j.TV(r,q,p+0)
if(o!==0)j.ah.a3P(o)
else{p=j.ah
n=j.pi
n===$&&A.b()
m=j.u0
n=Math.min(0,n+r*m)
l=j.pj
l===$&&A.b()
if(p.ov(n,Math.max(0,l-r*(1-m))))break}k=s+1
if(k<10){s=k
continue}else break}while(!0)},
TV(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.pj=e.pi=0
e.c4=!1
s=a*e.u0-c
r=A.J(s,0,a)
q=a-s
p=A.J(q,0,a)
switch(e.bh.a){case 0:e.b9=e.aE
break
case 1:e.b9=a*e.aE
break}o=e.b9
o.toString
n=a+2*o
m=s+o
l=A.J(m,0,n)
k=A.J(n-m,0,n)
j=e.e2.e
j.toString
i=A.o(e).h("aA.1").a(j).aO$
j=i==null
if(!j){h=Math.max(a,s)
g=e.LY(e.ga2R(),A.J(q,-o,0),i,b,B.o9,p,a,0,l,r,h-a)
if(g!==0)return-g}q=e.e2
o=-s
h=Math.max(0,o)
o=j?Math.min(0,o):0
j=s>=a?s:r
f=e.b9
f.toString
return e.LY(e.ga2P(),A.J(s,-f,0),q,b,B.o8,j,a,o,k,p,h)},
ga5W(){return this.c4},
a9h(a,b){var s,r=this
switch(a.a){case 0:s=r.pj
s===$&&A.b()
r.pj=s+b.a
break
case 1:s=r.pi
s===$&&A.b()
r.pi=s-b.a
break}if(b.x)r.c4=!0},
Nm(a,b,c){var s=a.e
s.toString
t.jB.a(s).a=this.a3f(a,b,c)},
a7I(a){var s=a.e
s.toString
return t.jB.a(s).a},
Oj(a,b){var s,r,q,p,o=this
switch(t.p.a(A.z.prototype.ga1.call(a)).b.a){case 0:s=o.e2
for(r=A.o(o).h("aA.1"),q=0;s!==a;){q+=s.id.a
p=s.e
p.toString
s=r.a(p).a9$}return q+b
case 1:r=o.e2.e
r.toString
p=A.o(o).h("aA.1")
s=p.a(r).aO$
for(q=0;s!==a;){q-=s.id.a
r=s.e
r.toString
s=p.a(r).aO$}return q-b}},
a78(a){var s,r,q,p=this
switch(t.p.a(A.z.prototype.ga1.call(a)).b.a){case 0:s=p.e2
for(r=A.o(p).h("aA.1");s!==a;){s.id.toString
q=s.e
q.toString
s=r.a(q).a9$}return 0
case 1:r=p.e2.e
r.toString
q=A.o(p).h("aA.1")
s=q.a(r).aO$
for(;s!==a;){s.id.toString
r=s.e
r.toString
s=q.a(r).aO$}return 0}},
dk(a,b){var s=a.e
s.toString
s=t.jB.a(s).a
b.aA(0,s.a,s.b)},
a3h(a,b){var s,r=a.e
r.toString
t.jB.a(r)
s=t.p
switch(A.kC(s.a(A.z.prototype.ga1.call(a)).a,s.a(A.z.prototype.ga1.call(a)).b)){case B.E:return b-r.a.b
case B.aF:return b-r.a.a
case B.F:return a.id.c-(b-r.a.b)
case B.an:return a.id.c-(b-r.a.a)}},
gJJ(){var s,r,q=this,p=A.a([],t.Ry),o=q.a8$
if(o==null)return p
for(s=A.o(q).h("aA.1");o!=q.e2;){o.toString
p.push(o)
r=o.e
r.toString
o=s.a(r).a9$}o=q.bz$
for(;!0;){o.toString
p.push(o)
if(o===q.e2)return p
r=o.e
r.toString
o=s.a(r).aO$}},
ga2T(){var s,r,q,p=this,o=A.a([],t.Ry)
if(p.a8$==null)return o
s=p.e2
for(r=A.o(p).h("aA.1");s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).a9$}q=p.e2.e
q.toString
s=r.a(q).aO$
for(;s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).aO$}return o}}
A.j9.prototype={
aB(a){var s,r,q
this.eA(a)
s=this.a8$
for(r=A.o(this).h("j9.0");s!=null;){s.aB(a)
q=s.e
q.toString
s=r.a(q).a9$}},
au(a){var s,r,q
this.dT(0)
s=this.a8$
for(r=A.o(this).h("j9.0");s!=null;){s.au(0)
q=s.e
q.toString
s=r.a(q).a9$}}}
A.qL.prototype={
H(){return"ScrollDirection."+this.b}}
A.f1.prototype={
pP(a,b,c,d){var s=d.a===B.x.a
if(s){this.e5(b)
return A.bQ(null,t.H)}else return this.hN(b,c,d)},
j(a){var s=this,r=A.a([],t.s)
s.R5(r)
r.push(A.D(s.w).j(0))
r.push(s.r.j(0))
r.push(A.h(s.fr))
r.push(s.k4.j(0))
return"<optimized out>#"+A.c4(s)+"("+B.c.bb(r,", ")+")"},
cw(a){var s=this.at
if(s!=null)a.push("offset: "+B.d.N(s,1))}}
A.rM.prototype={}
A.lJ.prototype={
H(){return"SchedulerPhase."+this.b}}
A.a7M.prototype={}
A.dT.prototype={
a2g(a){var s=this.z$
s.push(a)
if(s.length===1){s=$.aX()
s.ay=this.gVz()
s.ch=$.ad}},
MT(a){var s=this.z$
B.c.A(s,a)
if(s.length===0){s=$.aX()
s.ay=null
s.ch=$.ad}},
VA(a){var s,r,q,p,o,n,m,l,k=this.z$,j=A.aF(k,!0,t.ph)
for(p=j.length,o=0;o<p;++o){s=j[o]
try{if(B.c.C(k,s))s.$1(a)}catch(n){r=A.ai(n)
q=A.az(n)
m=A.bt("while executing callbacks for FrameTiming")
l=$.hd()
if(l!=null)l.$1(new A.bP(r,q,"Flutter framework",m,null,!1))}}},
u9(a){this.Q$=a
switch(a.a){case 0:case 1:this.HY(!0)
break
case 2:case 3:this.HY(!1)
break}},
FR(){if(this.ax$)return
this.ax$=!0
A.c3(B.x,this.ga02())},
a03(){this.ax$=!1
if(this.a5f())this.FR()},
a5f(){var s,r,q,p,o,n,m=this,l="No element",k=m.at$,j=k.c===0
if(j||m.b>0)return!1
if(j)A.L(A.ab(l))
s=k.qX(0)
j=s.b
if(m.as$.$2$priority$scheduler(j,m)){try{if(k.c===0)A.L(A.ab(l));++k.d
k.qX(0)
p=k.c-1
o=k.qX(p)
k.b[p]=null
k.c=p
if(p>0)k.U_(o,0)
s.aac()}catch(n){r=A.ai(n)
q=A.az(n)
j=A.bt("during a task callback")
A.e1(new A.bP(r,q,"scheduler library",j,null,!1))}return k.c!==0}return!1},
qA(a,b){var s,r=this
r.ij()
s=++r.ay$
r.ch$.k(0,s,new A.rM(a))
return r.ay$},
qz(a){return this.qA(a,!1)},
gKF(){var s=this
if(s.db$==null){if(s.dy$===B.cY)s.ij()
s.db$=new A.aL(new A.a7($.ad,t.V),t.Q)
s.cy$.push(new A.aai(s))}return s.db$.a},
gL6(){return this.fr$},
HY(a){if(this.fr$===a)return
this.fr$=a
if(a)this.ij()},
KG(){var s=$.aX()
if(s.w==null){s.w=this.gWR()
s.x=$.ad}if(s.y==null){s.y=this.gXe()
s.z=$.ad}},
A8(){switch(this.dy$.a){case 0:case 4:this.ij()
return
case 1:case 2:case 3:return}},
ij(){var s,r=this
if(!r.dx$)s=!(A.dT.prototype.gL6.call(r)&&r.cZ$)
else s=!0
if(s)return
r.KG()
$.aX().ij()
r.dx$=!0},
Oe(){if(this.dx$)return
this.KG()
$.aX().ij()
this.dx$=!0},
vD(){var s,r,q=this
if(q.fx$||q.dy$!==B.cY)return
q.fx$=!0
s=new A.O4(null,0,A.a([],t._x))
s.qF(0,"Warm-up frame")
r=q.dx$
A.c3(B.x,new A.aak(q))
A.c3(B.x,new A.aal(q,r))
q.a71(new A.aam(q,s))},
a8D(){var s=this
s.go$=s.EE(s.id$)
s.fy$=null},
EE(a){var s=this.fy$,r=s==null?B.x:new A.aS(a.a-s.a)
return A.bF(B.d.b5(r.a/$.awL)+this.go$.a,0,0)},
WS(a){if(this.fx$){this.k4$=!0
return}this.L9(a)},
Xf(){var s=this
if(s.k4$){s.k4$=!1
s.cy$.push(new A.aah(s))
return}s.Lb()},
L9(a){var s,r,q=this,p=q.ok$,o=p==null
if(!o)p.qF(0,"Frame")
if(q.fy$==null)q.fy$=a
r=a==null
q.k1$=q.EE(r?q.id$:a)
if(!r)q.id$=a
q.dx$=!1
try{if(!o)p.qF(0,"Animate")
q.dy$=B.VM
s=q.ch$
q.ch$=A.y(t.S,t.h1)
J.jk(s,new A.aaj(q))
q.CW$.Z(0)}finally{q.dy$=B.VN}},
a8B(a){var s=this,r=s.p1$,q=r==null
if(!q&&r!==a)return null
if(r===a)++s.p2$
else if(q){s.p1$=a
s.p2$=1}return new A.a7M(s.gVg())},
Vh(){if(--this.p2$===0){this.p1$=null
$.aX()}},
Lb(){var s,r,q,p,o,n,m,l=this,k=l.ok$,j=k==null
if(!j)k.u5(0)
try{l.dy$=B.dY
for(p=l.cx$,o=p.length,n=0;n<p.length;p.length===o||(0,A.P)(p),++n){s=p[n]
m=l.k1$
m.toString
l.GE(s,m)}l.dy$=B.VO
p=l.cy$
r=A.aF(p,!0,t.Vu)
B.c.Z(p)
for(p=r,o=p.length,n=0;n<p.length;p.length===o||(0,A.P)(p),++n){q=p[n]
m=l.k1$
m.toString
l.GE(q,m)}}finally{l.dy$=B.cY
if(!j)k.u5(0)
l.k1$=null}},
GF(a,b,c){var s,r,q,p
try{a.$1(b)}catch(q){s=A.ai(q)
r=A.az(q)
p=A.bt("during a scheduler callback")
A.e1(new A.bP(s,r,"scheduler library",p,null,!1))}},
GE(a,b){return this.GF(a,b,null)}}
A.aai.prototype={
$1(a){var s=this.a
s.db$.eF(0)
s.db$=null},
$S:2}
A.aak.prototype={
$0(){this.a.L9(null)},
$S:0}
A.aal.prototype={
$0(){var s=this.a
s.Lb()
s.a8D()
s.fx$=!1
if(this.b)s.ij()},
$S:0}
A.aam.prototype={
$0(){var s=0,r=A.a5(t.H),q=this
var $async$$0=A.a1(function(a,b){if(a===1)return A.a2(b,r)
while(true)switch(s){case 0:s=2
return A.a9(q.a.gKF(),$async$$0)
case 2:q.b.u5(0)
return A.a3(null,r)}})
return A.a4($async$$0,r)},
$S:55}
A.aah.prototype={
$1(a){var s=this.a
s.dx$=!1
s.ij()},
$S:2}
A.aaj.prototype={
$2(a,b){var s,r,q=this.a
if(!q.CW$.C(0,a)){s=b.a
r=q.k1$
r.toString
q.GF(s,r,b.b)}},
$S:265}
A.rh.prototype={
sBe(a,b){var s=this
if(b===s.b)return
s.b=b
if(b)s.Co()
else if(s.a!=null&&s.e==null)s.e=$.bS.qA(s.gyC(),!1)},
ga6H(){if(this.a==null)return!1
if(this.b)return!1
var s=$.bS
s.toString
if(A.dT.prototype.gL6.call(s)&&s.cZ$)return!0
if($.bS.dy$!==B.cY)return!0
return!1},
kj(a){var s,r,q=this
q.a=new A.oi(new A.aL(new A.a7($.ad,t.V),t.Q))
if(!q.b)s=q.e==null
else s=!1
if(s)q.e=$.bS.qA(q.gyC(),!1)
s=$.bS
r=s.dy$.a
if(r>0&&r<4){s=s.k1$
s.toString
q.c=s}s=q.a
s.toString
return s},
nB(a,b){var s=this,r=s.a
if(r==null)return
s.c=s.a=null
s.Co()
if(b)r.EZ(s)
else r.Iu()},
hw(a){return this.nB(a,!1)},
a15(a){var s,r=this
r.e=null
s=r.c
if(s==null)s=r.c=a
r.d.$1(new A.aS(a.a-s.a))
if(!r.b&&r.a!=null&&r.e==null)r.e=$.bS.qA(r.gyC(),!0)},
Co(){var s,r=this.e
if(r!=null){s=$.bS
s.ch$.A(0,r)
s.CW$.D(0,r)
this.e=null}},
m(){var s=this,r=s.a
if(r!=null){s.a=null
s.Co()
r.EZ(s)}},
a93(a,b){var s=""+"Ticker()"
return s.charCodeAt(0)==0?s:s},
j(a){return this.a93(a,!1)}}
A.oi.prototype={
Iu(){this.c=!0
this.a.eF(0)
var s=this.b
if(s!=null)s.eF(0)},
EZ(a){var s
this.c=!1
s=this.b
if(s!=null)s.iz(new A.zx(a))},
Nu(a){var s,r,q=this,p=new A.aeC(a)
if(q.b==null){s=q.b=new A.aL(new A.a7($.ad,t.V),t.Q)
r=q.c
if(r!=null)if(r)s.eF(0)
else s.iz(B.a0n)}q.b.a.e9(p,p,t.H)},
kK(a,b){return this.a.a.kK(a,b)},
h8(a){return this.kK(a,null)},
e9(a,b,c){return this.a.a.e9(a,b,c)},
aI(a,b){return this.e9(a,null,b)},
eu(a){return this.a.a.eu(a)},
j(a){var s=A.c4(this),r=this.c
if(r==null)r="active"
else r=r?"complete":"canceled"
return"<optimized out>#"+s+"("+r+")"},
$iam:1}
A.aeC.prototype={
$1(a){this.a.$0()},
$S:17}
A.zx.prototype={
j(a){var s=this.a
if(s!=null)return"This ticker was canceled: "+s.j(0)
return'The ticker was canceled before the "orCancel" property was first used.'},
$ibB:1}
A.aaQ.prototype={}
A.yw.prototype={
j(a){return"SemanticsTag("+this.a+")"}}
A.cH.prototype={
U(a,b){var s,r,q,p,o,n,m,l=this.a,k=l.length
if(k===0)return b
s=b.a
if(s.length===0)return this
r=A.aF(this.b,!0,t.u1)
q=b.b
p=q.length
if(p!==0)for(o=0;o<q.length;q.length===p||(0,A.P)(q),++o){n=q[o]
m=n.a
r.push(n.JZ(new A.fs(m.a+k,m.b+k)))}return new A.cH(l+s,r)},
l(a,b){if(b==null)return!1
return J.a0(b)===A.D(this)&&b instanceof A.cH&&b.a===this.a&&A.d8(b.b,this.b)},
gu(a){return A.Y(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"AttributedString('"+this.a+"', attributes: "+A.h(this.b)+")"}}
A.MX.prototype={
cd(){return"SemanticsData"},
l(a,b){var s=this
if(b==null)return!1
return b instanceof A.MX&&b.a===s.a&&b.b===s.b&&b.c.l(0,s.c)&&b.d.l(0,s.d)&&b.e.l(0,s.e)&&b.f.l(0,s.f)&&b.r.l(0,s.r)&&b.w===s.w&&b.x==s.x&&b.cx.l(0,s.cx)&&A.arA(b.cy,s.cy)&&b.z==s.z&&b.Q==s.Q&&b.as==s.as&&b.at==s.at&&b.ax==s.ax&&J.f(b.db,s.db)&&b.dx===s.dx&&b.dy===s.dy&&A.aFF(b.fr,s.fr)},
gu(a){var s=this,r=A.dv(s.fr)
return A.Y(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.cx,s.cy,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,A.Y(s.CW,s.db,s.dx,s.dy,r,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a))}}
A.Tt.prototype={}
A.MZ.prototype={
cd(){return"SemanticsProperties"}}
A.cg.prototype={
sbE(a,b){var s
if(!A.aDY(this.r,b)){s=A.apI(b)
this.r=s?null:b
this.iv()}},
saY(a,b){if(!this.w.l(0,b)){this.w=b
this.iv()}},
sLO(a){if(this.as===a)return
this.as=a
this.iv()},
a_L(a){var s,r,q,p,o,n,m,l=this,k=l.ax
if(k!=null)for(s=k.length,r=0;r<s;++r)k[r].ch=!0
for(k=a.length,r=0;r<k;++r)a[r].ch=!1
k=l.ax
if(k!=null)for(s=k.length,q=t.LQ,p=!1,r=0;r<k.length;k.length===s||(0,A.P)(k),++r){o=k[r]
if(o.ch){n=J.cu(o)
if(q.a(A.M.prototype.gaS.call(n,o))===l){o.c=null
if(l.b!=null)o.au(0)}p=!0}}else p=!1
for(k=a.length,s=t.LQ,r=0;r<a.length;a.length===k||(0,A.P)(a),++r){o=a[r]
q=J.cu(o)
if(s.a(A.M.prototype.gaS.call(q,o))!==l){if(s.a(A.M.prototype.gaS.call(q,o))!=null){q=s.a(A.M.prototype.gaS.call(q,o))
if(q!=null){o.c=null
if(q.b!=null)o.au(0)}}o.c=l
q=l.b
if(q!=null)o.aB(q)
q=o.a
n=l.a
if(q<=n){o.a=n+1
o.k5()}p=!0}}if(!p&&l.ax!=null)for(k=l.ax,s=k.length,m=0;m<s;++m)if(k[m].e!==a[m].e){p=!0
break}l.ax=a
if(p)l.iv()},
ga5U(){var s=this.ax
s=s==null?null:s.length!==0
return s===!0},
yU(a){var s,r,q,p=this.ax
if(p!=null)for(s=p.length,r=0;r<p.length;p.length===s||(0,A.P)(p),++r){q=p[r]
if(!a.$1(q)||!q.yU(a))return!1}return!0},
k5(){var s=this.ax
if(s!=null)B.c.W(s,this.gMM())},
aB(a){var s,r,q,p=this
p.vX(a)
for(s=a.c;s.P(0,p.e);)p.e=$.ab6=($.ab6+1)%65535
s.k(0,p.e,p)
a.d.A(0,p)
if(p.CW){p.CW=!1
p.iv()}s=p.ax
if(s!=null)for(r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].aB(a)},
au(a){var s,r,q,p,o,n=this,m=t.m5
m.a(A.M.prototype.gbI.call(n)).c.A(0,n.e)
m.a(A.M.prototype.gbI.call(n)).d.D(0,n)
n.dT(0)
m=n.ax
if(m!=null)for(s=m.length,r=t.LQ,q=0;q<m.length;m.length===s||(0,A.P)(m),++q){p=m[q]
o=J.cu(p)
if(r.a(A.M.prototype.gaS.call(o,p))===n)o.au(p)}n.iv()},
iv(){var s=this
if(s.CW)return
s.CW=!0
if(s.b!=null)t.m5.a(A.M.prototype.gbI.call(s)).b.D(0,s)},
k9(a,b,c){var s,r=this
if(c==null)c=$.aoA()
if(r.fr.l(0,c.p4))if(r.id.l(0,c.ry))if(r.k2===c.x2)if(r.k3===c.xr)if(r.fx.l(0,c.R8))if(r.fy.l(0,c.RG))if(r.go.l(0,c.rx))if(r.k1===c.to)if(r.dy===c.ai)if(r.ok==c.y1)if(r.p1==c.id)if(r.RG==c.bU)if(r.rx==c.bA)if(r.ry==c.bg)if(r.db===c.f)if(r.Q==c.k1)s=r.at!==c.p2
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
if(s)r.iv()
r.fr=c.p4
r.fx=c.R8
r.fy=c.RG
r.go=c.rx
r.id=c.ry
r.k1=c.to
r.k4=c.x1
r.k2=c.x2
r.k3=c.xr
r.dy=c.ai
r.ok=c.y1
r.p1=c.id
r.cx=A.q4(c.e,t._S,t.HT)
r.cy=A.q4(c.p3,t.I7,t.O)
r.db=c.f
r.p2=c.y2
r.RG=c.bU
r.rx=c.bA
r.ry=c.bg
r.at=c.p2
r.p4=c.k2
r.R8=c.k3
r.Q=c.k1
r.to=c.k4
r.x1=c.ok
r.x2=c.p1
r.a_L(b==null?B.is:b)},
a9k(a,b){return this.k9(a,null,b)},
O3(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7={}
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
a7.y=s==null?null:A.ll(s,t.g3)
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
q=A.bc(t.S)
for(s=a6.cy,s=A.jG(s,s.r);s.t();)q.D(0,A.asV(s.d))
a6.k4!=null
if(a6.at)a6.yU(new A.ab7(a7,a6,q))
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
a5=A.aF(q,!0,q.$ti.c)
B.c.im(a5)
return new A.MX(s,p,o,n,m,l,k,j,i,d,c,b,a,a0,a1,a2,a3,a4,h,e,g,r,f,a5)},
TL(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.O3()
if(!a0.ga5U()||a0.at){s=$.ayx()
r=s}else{q=a0.ax.length
p=a0.Ut()
s=new Int32Array(q)
for(o=0;o<q;++o)s[o]=p[o].e
r=new Int32Array(q)
for(o=q-1,n=a0.ax;o>=0;--o)r[o]=n[q-o-1].e}n=a1.fr
m=n.length
if(m!==0){l=new Int32Array(m)
for(o=0;o<n.length;++o){m=n[o]
l[o]=m
a3.D(0,m)}}else l=null
n=a0.e
m=a1.c
k=a1.d
j=a1.e
i=a1.f
h=a1.r
g=a1.z
if(g==null)g=0
f=a1.Q
if(f==null)f=0
e=a1.as
if(e==null)e=0/0
d=a1.at
if(d==null)d=0/0
c=a1.ax
if(c==null)c=0/0
b=a1.db
b=b==null?null:b.a
if(b==null)b=$.ayz()
a=l==null?$.ayy():l
a2.a.push(new A.MY(n,a1.a,a1.b,-1,-1,-1,g,f,e,d,c,a1.cx,m.a,m.b,h.a,h.b,k.a,k.b,j.a,j.b,i.a,i.b,a1.w,a1.x,A.arC(b),s,r,a,a1.dy))
a0.CW=!1},
Ut(){var s,r,q,p,o,n,m,l,k,j=this,i=j.ok,h=t.LQ,g=h.a(A.M.prototype.gaS.call(j,j))
while(!0){s=i==null
if(!(s&&g!=null))break
i=g.ok
g=h.a(A.M.prototype.gaS.call(g,g))}r=j.ax
if(!s){r.toString
r=A.aI0(r,i)}h=t.NM
q=A.a([],h)
p=A.a([],h)
for(o=null,n=0;n<r.length;++n){m=r[n]
l=m.p1
o=n>0?r[n-1].p1:null
if(n!==0)if(J.a0(l)===J.a0(o)){if(l!=null)o.toString
k=!0}else k=!1
else k=!0
if(!k&&p.length!==0){if(o!=null){if(!!p.immutable$list)A.L(A.R("sort"))
h=p.length-1
if(h-0<=32)A.Nn(p,0,h,J.ar7())
else A.Nm(p,0,h,J.ar7())}B.c.L(q,p)
B.c.Z(p)}p.push(new A.kp(m,l,n))}if(o!=null)B.c.im(p)
B.c.L(q,p)
h=t.rB
return A.aF(new A.aG(q,new A.ab5(),h),!0,h.h("bm.E"))},
Op(a){if(this.b==null)return
B.mD.eU(0,a.Ne(this.e))},
cd(){return"SemanticsNode#"+this.e},
a9_(a,b,c){return new A.Tt(a,this,b,!0,!0,null,c)},
Nc(a){return this.a9_(B.Gr,null,a)}}
A.ab7.prototype={
$1(a){var s,r,q=this.a
q.a=q.a|a.dy
q.b=q.b|a.db
if(q.x==null)q.x=a.ok
q.z=a.p2
if(q.Q==null)q.Q=a.p4
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
if(s!=null){r=q.y;(r==null?q.y=A.bc(t.g3):r).L(0,s)}for(s=this.b.cy,s=A.jG(s,s.r),r=this.c;s.t();)r.D(0,A.asV(s.d))
a.k4!=null
s=q.c
r=q.x
q.c=A.amp(a.fr,a.ok,s,r)
r=q.r
s=q.x
q.r=A.amp(a.id,a.ok,r,s)
q.cy=Math.max(q.cy,a.k3+a.k2)
return!0},
$S:79}
A.ab5.prototype={
$1(a){return a.a},
$S:267}
A.ke.prototype={
aN(a,b){return B.d.aN(this.b,b.b)},
$ibd:1}
A.i_.prototype={
aN(a,b){return B.d.aN(this.a,b.a)},
OR(){var s,r,q,p,o,n,m,l,k,j=A.a([],t.TV)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
o=p.w
j.push(new A.ke(!0,A.oO(p,new A.r(o.a- -0.1,o.b- -0.1)).a,p))
j.push(new A.ke(!1,A.oO(p,new A.r(o.c+-0.1,o.d+-0.1)).a,p))}B.c.im(j)
n=A.a([],t.YK)
for(s=j.length,r=this.b,o=t.Y,m=null,l=0,q=0;q<j.length;j.length===s||(0,A.P)(j),++q){k=j[q]
if(k.a){++l
if(m==null)m=new A.i_(k.b,r,A.a([],o))
m.c.push(k.c)}else --l
if(l===0){m.toString
n.push(m)
m=null}}B.c.im(n)
if(r===B.a1){s=t.o_
n=A.aF(new A.cx(n,s),!0,s.h("bm.E"))}s=A.ap(n).h("hq<1,cg>")
return A.aF(new A.hq(n,new A.akv(),s),!0,s.h("p.E"))},
OQ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this.c,a4=a3.length
if(a4<=1)return a3
s=t.S
r=A.y(s,t.bu)
q=A.y(s,s)
for(p=this.b,o=p===B.a1,p=p===B.w,n=a4,m=0;m<n;g===a4||(0,A.P)(a3),++m,n=g){l=a3[m]
r.k(0,l.e,l)
n=l.w
k=n.a
j=n.b
i=A.oO(l,new A.r(k+(n.c-k)/2,j+(n.d-j)/2))
for(n=a3.length,k=i.a,j=i.b,h=0;g=a3.length,h<g;a3.length===n||(0,A.P)(a3),++h){f=a3[h]
if((l==null?f==null:l===f)||q.i(0,f.e)===l.e)continue
g=f.w
e=g.a
d=g.b
c=A.oO(f,new A.r(e+(g.c-e)/2,d+(g.d-d)/2))
b=Math.atan2(c.b-j,c.a-k)
a=p&&-0.7853981633974483<b&&b<2.356194490192345
if(o)a0=b<-2.356194490192345||b>2.356194490192345
else a0=!1
if(a||a0)q.k(0,l.e,f.e)}}a1=A.a([],t.t)
a2=A.a(a3.slice(0),A.ap(a3))
B.c.di(a2,new A.akr())
new A.aG(a2,new A.aks(),A.ap(a2).h("aG<1,l>")).W(0,new A.aku(A.bc(s),q,a1))
a3=t.qn
a3=A.aF(new A.aG(a1,new A.akt(r),a3),!0,a3.h("bm.E"))
a4=A.ap(a3).h("cx<1>")
return A.aF(new A.cx(a3,a4),!0,a4.h("bm.E"))}}
A.akv.prototype={
$1(a){return a.OQ()},
$S:106}
A.akr.prototype={
$2(a,b){var s,r,q=a.w,p=A.oO(a,new A.r(q.a,q.b))
q=b.w
s=A.oO(b,new A.r(q.a,q.b))
r=B.d.aN(p.b,s.b)
if(r!==0)return-r
return-B.d.aN(p.a,s.a)},
$S:80}
A.aku.prototype={
$1(a){var s=this,r=s.a
if(r.C(0,a))return
r.D(0,a)
r=s.b
if(r.P(0,a)){r=r.i(0,a)
r.toString
s.$1(r)}s.c.push(a)},
$S:70}
A.aks.prototype={
$1(a){return a.e},
$S:270}
A.akt.prototype={
$1(a){var s=this.a.i(0,a)
s.toString
return s},
$S:271}
A.aml.prototype={
$1(a){return a.OR()},
$S:106}
A.kp.prototype={
aN(a,b){var s,r=this.b
if(r==null||b.b==null)return this.c-b.c
r.toString
s=b.b
s.toString
return r.aN(0,s)},
$ibd:1}
A.yv.prototype={
Oq(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.b
if(e.a===0)return
s=A.bc(t.S)
r=A.a([],t.Y)
for(q=t.LQ,p=A.o(e).h("aR<1>"),o=p.h("p.E"),n=f.d;e.a!==0;){m=A.aF(new A.aR(e,new A.aba(f),p),!0,o)
e.Z(0)
n.Z(0)
l=new A.abb()
if(!!m.immutable$list)A.L(A.R("sort"))
k=m.length-1
if(k-0<=32)A.Nn(m,0,k,l)
else A.Nm(m,0,k,l)
B.c.L(r,m)
for(l=m.length,j=0;j<m.length;m.length===l||(0,A.P)(m),++j){i=m[j]
if(i.at||i.as){k=J.cu(i)
if(q.a(A.M.prototype.gaS.call(k,i))!=null){h=q.a(A.M.prototype.gaS.call(k,i))
h=h.at||h.as}else h=!1
if(h){q.a(A.M.prototype.gaS.call(k,i)).iv()
i.CW=!1}}}}B.c.di(r,new A.abc())
$.aaR.toString
g=new A.abe(A.a([],t.o4))
for(q=r.length,j=0;j<r.length;r.length===q||(0,A.P)(r),++j){i=r[j]
if(i.CW&&i.b!=null)i.TL(g,s)}e.Z(0)
for(e=A.kl(s,s.r),q=A.o(e).c;e.t();){p=e.d
$.asS.i(0,p==null?q.a(p):p).toString}f.a.$1(new A.N0(g.a))
f.aG()},
Wr(a,b){var s,r={},q=r.a=this.c.i(0,a)
if(q!=null)s=(q.at||q.as)&&!q.cx.P(0,b)
else s=!1
if(s)q.yU(new A.ab9(r,b))
s=r.a
if(s==null||!s.cx.P(0,b))return null
return r.a.cx.i(0,b)},
a7L(a,b,c){var s=this.Wr(a,b)
if(s!=null){s.$1(c)
return}if(b===B.Wb&&this.c.i(0,a).f!=null)this.c.i(0,a).f.$0()},
j(a){return"<optimized out>#"+A.c4(this)}}
A.aba.prototype={
$1(a){return!this.a.d.C(0,a)},
$S:79}
A.abb.prototype={
$2(a,b){return a.a-b.a},
$S:80}
A.abc.prototype={
$2(a,b){return a.a-b.a},
$S:80}
A.ab9.prototype={
$1(a){if(a.cx.P(0,this.b)){this.a.a=a
return!1}return!0},
$S:79}
A.aaS.prototype={
km(a,b){var s=this
s.e.k(0,a,b)
s.f=s.f|a.a
s.d=!0},
eB(a,b){this.km(a,new A.aaT(b))},
sjX(a){a.toString
this.eB(B.e1,a)},
slf(a){a.toString
this.eB(B.BQ,a)},
suJ(a){this.eB(B.e4,a)},
suH(a){this.eB(B.Wc,a)},
suK(a){this.eB(B.e5,a)},
suL(a){this.eB(B.e2,a)},
suI(a){this.eB(B.e3,a)},
sBu(a){this.eB(B.BR,a)},
sBn(a){this.eB(B.BP,a)},
sBk(a,b){this.eB(B.We,b)},
sBl(a,b){this.eB(B.Wi,b)},
sBB(a,b){this.eB(B.W8,b)},
sBz(a){this.km(B.Wf,new A.aaW(a))},
sBx(a){this.km(B.W6,new A.aaU(a))},
sBA(a){this.km(B.Wg,new A.aaX(a))},
sBy(a){this.km(B.W7,new A.aaV(a))},
sBE(a){this.km(B.W9,new A.aaY(a))},
sBF(a){this.km(B.Wa,new A.aaZ(a))},
sBo(a){this.eB(B.Wd,a)},
sBp(a){this.eB(B.Wh,a)},
sOh(a){if(a==this.k2)return
this.k2=a
this.d=!0},
sOi(a){if(a==this.k3)return
this.k3=a
this.d=!0},
sB6(a){return},
szF(a){return},
siG(a,b){if(b===this.x2)return
this.x2=b
this.d=!0},
Jn(a){var s=this.aq;(s==null?this.aq=A.bc(t.g3):s).D(0,a)},
bk(a,b){var s=this,r=s.ai,q=a.a
if(b)s.ai=r|q
else s.ai=r&~q
s.d=!0},
LM(a){var s,r=this
if(a==null||!a.d||!r.d)return!0
if((r.f&a.f)!==0)return!1
if((r.ai&a.ai)!==0)return!1
if(r.R8.a.length!==0)s=a.R8.a.length!==0
else s=!1
if(s)return!1
return!0},
kD(a){var s,r,q=this
if(!a.d)return
q.e.L(0,a.e)
q.p3.L(0,a.p3)
q.f=q.f|a.f
q.ai=q.ai|a.ai
q.y2=a.y2
if(q.bU==null)q.bU=a.bU
if(q.bA==null)q.bA=a.bA
if(q.bg==null)q.bg=a.bg
if(q.x1==null)q.x1=a.x1
if(q.k1==null)q.k1=a.k1
if(q.k3==null)q.k3=a.k3
if(q.k2==null)q.k2=a.k2
q.k4=a.k4
q.ok=a.ok
q.p1=a.p1
s=q.y1
if(s==null){s=q.y1=a.y1
q.d=!0}if(q.id==null)q.id=a.id
r=q.p4
q.p4=A.amp(a.p4,a.y1,r,s)
s=q.R8
if(s.a==="")q.R8=a.R8
s=q.RG
if(s.a==="")q.RG=a.RG
s=q.rx
if(s.a==="")q.rx=a.rx
s=q.ry
r=q.y1
q.ry=A.amp(a.ry,a.y1,s,r)
if(q.to==="")q.to=a.to
q.xr=Math.max(q.xr,a.xr+a.x2)
q.d=q.d||a.d},
a3w(){var s=this,r=A.qR()
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
r.ai=s.ai
r.aq=s.aq
r.y2=s.y2
r.bU=s.bU
r.bA=s.bA
r.bg=s.bg
r.f=s.f
r.k1=s.k1
r.k3=s.k3
r.k2=s.k2
r.k4=s.k4
r.ok=s.ok
r.p1=s.p1
r.e.L(0,s.e)
r.p3.L(0,s.p3)
return r}}
A.aaT.prototype={
$1(a){this.a.$0()},
$S:7}
A.aaW.prototype={
$1(a){a.toString
this.a.$1(A.oL(a))},
$S:7}
A.aaU.prototype={
$1(a){a.toString
this.a.$1(A.oL(a))},
$S:7}
A.aaX.prototype={
$1(a){a.toString
this.a.$1(A.oL(a))},
$S:7}
A.aaV.prototype={
$1(a){a.toString
this.a.$1(A.oL(a))},
$S:7}
A.aaY.prototype={
$1(a){var s,r,q
a.toString
s=J.aoG(t.G.a(a),t.N,t.S)
r=s.i(0,"base")
r.toString
q=s.i(0,"extent")
q.toString
this.a.$1(A.aey(B.J,r,q,!1))},
$S:7}
A.aaZ.prototype={
$1(a){a.toString
this.a.$1(A.bT(a))},
$S:7}
A.Gd.prototype={
H(){return"DebugSemanticsDumpOrder."+this.b}}
A.qS.prototype={
aN(a,b){var s=this.a4x(b)
return s},
$ibd:1}
A.xe.prototype={
a4x(a){var s=a.b===this.b
if(s)return 0
return B.f.aN(this.b,a.b)}}
A.Ts.prototype={}
A.Tu.prototype={}
A.Tv.prototype={}
A.ab0.prototype={
Ne(a){var s=A.aZ(["type",this.a,"data",this.qq()],t.N,t.z)
if(a!=null)s.k(0,"nodeId",a)
return s},
a92(){return this.Ne(null)},
j(a){var s,r,q,p=A.a([],t.s),o=this.qq(),n=J.asp(o.gbC(o))
B.c.im(n)
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.P)(n),++r){q=n[r]
p.push(A.h(q)+": "+A.h(o.i(0,q)))}return"SemanticsEvent("+B.c.bb(p,", ")+")"}}
A.aeE.prototype={
qq(){return A.aZ(["message",this.b],t.N,t.z)}}
A.a5T.prototype={
qq(){return B.iR}}
A.ae2.prototype={
qq(){return B.iR}}
A.DE.prototype={
lb(a,b){return this.a7_(a,!0)},
a7_(a,b){var s=0,r=A.a5(t.N),q,p=this,o
var $async$lb=A.a1(function(c,d){if(c===1)return A.a2(d,r)
while(true)switch(s){case 0:s=3
return A.a9(p.dd(0,a),$async$lb)
case 3:o=d
if(o.byteLength<51200){q=B.a2.ef(0,A.d_(o.buffer,0,null))
s=1
break}q=A.WD(A.aJu(),o,'UTF8 decode for "'+a+'"',t.V4,t.N)
s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$lb,r)},
j(a){return"<optimized out>#"+A.c4(this)+"()"}}
A.Ys.prototype={
lb(a,b){return this.P0(a,!0)},
a70(a,b,c){var s,r={},q=this.b
if(q.P(0,a)){r=q.i(0,a)
r.toString
return c.h("am<0>").a(r)}r.a=r.b=null
this.lb(a,!1).aI(b,c).aI(new A.Yt(r,this,a,c),t.H)
s=r.a
if(s!=null)return s
s=new A.a7($.ad,c.h("a7<0>"))
r.b=new A.aL(s,c.h("aL<0>"))
q.k(0,a,s)
return r.b.a}}
A.Yt.prototype={
$1(a){var s=this,r=new A.bA(a,s.d.h("bA<0>")),q=s.a
q.a=r
s.b.b.k(0,s.c,r)
q=q.b
if(q!=null)q.bS(0,a)},
$S(){return this.d.h("au(0)")}}
A.a7V.prototype={
dd(a,b){var s,r=B.cu.eH(A.avL(A.Cd(B.it,b,B.a2,!1)).e),q=$.hM.am$
q===$&&A.b()
s=q.vG(0,"flutter/assets",A.lq(r.buffer,0,null)).aI(new A.a7W(b),t.V4)
return s},
ux(a){return this.a6Y(a)},
a6Y(a){var s=0,r=A.a5(t.SG),q,p=this,o
var $async$ux=A.a1(function(b,c){if(b===1)return A.a2(c,r)
while(true)switch(s){case 0:s=3
return A.a9(p.dd(0,a),$async$ux)
case 3:o=c
q=A.a4Y(A.d_(o.buffer,0,null))
s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$ux,r)}}
A.a7W.prototype={
$1(a){if(a==null)throw A.c(A.apk(A.a([A.aIr(this.a),A.bt("The asset does not exist or has empty data.")],t.E)))
return a},
$S:272}
A.XI.prototype={}
A.qT.prototype={
pv(){var s=$.WX()
s.a.Z(0)
s.b.Z(0)},
jN(a){return this.a5I(a)},
a5I(a){var s=0,r=A.a5(t.H),q,p=this
var $async$jN=A.a1(function(b,c){if(b===1)return A.a2(c,r)
while(true)switch(s){case 0:switch(A.bT(J.aY(t.a.a(a),"type"))){case"memoryPressure":p.pv()
break}s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$jN,r)},
TG(){var s=A.ba("controller")
s.scl(A.r0(null,new A.abh(s),null,!1,t.hz))
return J.aAr(s.aL())},
a85(){if(this.Q$!=null)return
$.aX()
var s=A.auH("AppLifecycleState.resumed")
if(s!=null)this.u9(s)},
xC(a){return this.Xv(a)},
Xv(a){var s=0,r=A.a5(t.ob),q,p=this,o
var $async$xC=A.a1(function(b,c){if(b===1)return A.a2(c,r)
while(true)switch(s){case 0:a.toString
o=A.auH(a)
o.toString
p.u9(o)
q=null
s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$xC,r)},
xD(a){return this.XE(a)},
XE(a){var s=0,r=A.a5(t.H)
var $async$xD=A.a1(function(b,c){if(b===1)return A.a2(c,r)
while(true)switch(s){case 0:t.j.a(a.b)
return A.a3(null,r)}})
return A.a4($async$xD,r)},
$idT:1}
A.abh.prototype={
$0(){var s=0,r=A.a5(t.H),q=this,p,o,n
var $async$$0=A.a1(function(a,b){if(a===1)return A.a2(b,r)
while(true)switch(s){case 0:o=A.ba("rawLicenses")
n=o
s=2
return A.a9($.WX().lb("NOTICES",!1),$async$$0)
case 2:n.scl(b)
p=q.a
n=J
s=3
return A.a9(A.WD(A.aJD(),o.aL(),"parseLicenses",t.N,t.qC),$async$$0)
case 3:n.jk(b,J.aAk(p.aL()))
s=4
return A.a9(J.ash(p.aL()),$async$$0)
case 4:return A.a3(null,r)}})
return A.a4($async$$0,r)},
$S:55}
A.agl.prototype={
vG(a,b,c){var s=new A.a7($.ad,t.gg)
$.aX().a0q(b,c,A.aCr(new A.agm(new A.aL(s,t.yB))))
return s},
Dh(a,b){if(b==null){a=$.WV().a.i(0,a)
if(a!=null)a.e=null}else $.WV().Ow(a,new A.agn(b))}}
A.agm.prototype={
$1(a){var s,r,q,p
try{this.a.bS(0,a)}catch(q){s=A.ai(q)
r=A.az(q)
p=A.bt("during a platform message response callback")
A.e1(new A.bP(s,r,"services library",p,null,!1))}},
$S:22}
A.agn.prototype={
$2(a,b){return this.NH(a,b)},
NH(a,b){var s=0,r=A.a5(t.H),q=1,p,o=[],n=this,m,l,k,j,i,h
var $async$$2=A.a1(function(c,d){if(c===1){p=d
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
m=A.ai(h)
l=A.az(h)
j=A.bt("during a platform message callback")
A.e1(new A.bP(m,l,"services library",j,null,!1))
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
b.$1(i)
s=o.pop()
break
case 5:return A.a3(null,r)
case 1:return A.a2(p,r)}})
return A.a4($async$$2,r)},
$S:276}
A.a0K.prototype={}
A.a05.prototype={}
A.a0e.prototype={}
A.GF.prototype={}
A.a0M.prototype={}
A.GD.prototype={}
A.a0m.prototype={}
A.a_B.prototype={}
A.a0n.prototype={}
A.GL.prototype={}
A.GB.prototype={}
A.GI.prototype={}
A.GV.prototype={}
A.a0a.prototype={}
A.a0s.prototype={}
A.a_K.prototype={}
A.a_Y.prototype={}
A.a_l.prototype={}
A.a_O.prototype={}
A.GQ.prototype={}
A.a_n.prototype={}
A.a0x.prototype={}
A.q2.prototype={}
A.lg.prototype={}
A.no.prototype={}
A.lh.prototype={}
A.w8.prototype={}
A.a3L.prototype={
V9(a){var s,r,q,p,o,n,m,l,k,j
this.d=!0
s=!1
for(n=this.c,m=0;!1;++m){r=n[m]
try{q=r.$1(a)
s=s||q}catch(l){p=A.ai(l)
o=A.az(l)
k=A.bt("while processing a key handler")
j=$.hd()
if(j!=null)j.$1(new A.bP(p,o,"services library",k,null,!1))}}this.d=!1
return s},
Ld(a){var s,r,q=this,p=a.a,o=a.b
if(a instanceof A.no){q.a.k(0,p,o)
s=$.ayl().i(0,o.a)
if(s!=null){r=q.b
if(r.C(0,s))r.A(0,s)
else r.D(0,s)}}else if(a instanceof A.lh)q.a.A(0,p)
return q.V9(a)}}
A.w6.prototype={
H(){return"KeyDataTransitMode."+this.b}}
A.w7.prototype={
j(a){return"KeyMessage("+A.h(this.a)+")"}}
A.Ik.prototype={
a5l(a){var s,r=this,q=r.d
switch((q==null?r.d=B.Ig:q).a){case 0:return!1
case 1:if(a.c===0&&a.d===0)return!1
s=A.aDr(a)
if(a.f&&r.e.length===0){r.b.Ld(s)
r.FE(A.a([s],t.K0),null)}else r.e.push(s)
return!1}},
FE(a,b){var s,r,q,p,o=this.a
if(o!=null){s=new A.w7(a,b)
try{o=o.$1(s)
return o}catch(p){r=A.ai(p)
q=A.az(p)
o=A.bt("while processing the key message handler")
A.e1(new A.bP(r,q,"services library",o,null,!1))}}return!1},
Ax(a){var s=0,r=A.a5(t.a),q,p=this,o,n,m,l,k,j,i
var $async$Ax=A.a1(function(b,c){if(b===1)return A.a2(c,r)
while(true)switch(s){case 0:if(p.d==null){p.d=B.If
p.c.a.push(p.gUO())}o=A.aF9(t.a.a(a))
if(o instanceof A.iN){n=o.c
m=p.f
if(!n.OH()){m.D(0,n.ge7())
l=!1}else{m.A(0,n.ge7())
l=!0}}else if(o instanceof A.qv){n=p.f
m=o.c
if(n.C(0,m.ge7())){n.A(0,m.ge7())
l=!1}else l=!0}else l=!0
if(l){p.c.a5C(o)
for(n=p.e,m=n.length,k=p.b,j=!1,i=0;i<n.length;n.length===m||(0,A.P)(n),++i)j=k.Ld(n[i])||j
j=p.FE(n,o)||j
B.c.Z(n)}else j=!0
q=A.aZ(["handled",j],t.N,t.z)
s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$Ax,r)},
UP(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.c,d=e.ge7(),c=e.gpK()
e=this.b.a
s=A.o(e).h("bf<1>")
r=A.ll(new A.bf(e,s),s.h("p.E"))
q=A.a([],t.K0)
p=e.i(0,d)
o=$.hM.id$
n=a.a
if(n==="")n=f
if(a instanceof A.iN)if(p==null){m=new A.no(d,c,n,o,!1)
r.D(0,d)}else m=new A.w8(d,p,n,o,!1)
else if(p==null)m=f
else{m=new A.lh(d,p,f,o,!1)
r.A(0,d)}for(s=this.c.d,l=A.o(s).h("bf<1>"),k=l.h("p.E"),j=r.kT(A.ll(new A.bf(s,l),k)),j=j.gad(j),i=this.e;j.t();){h=j.gI(j)
if(h.l(0,d))q.push(new A.lh(h,c,f,o,!0))
else{g=e.i(0,h)
g.toString
i.push(new A.lh(h,g,f,o,!0))}}for(e=A.ll(new A.bf(s,l),k).kT(r),e=e.gad(e);e.t();){l=e.gI(e)
k=s.i(0,l)
k.toString
i.push(new A.no(l,k,f,o,!0))}if(m!=null)i.push(m)
B.c.L(i,q)}}
A.R2.prototype={}
A.a5E.prototype={}
A.e.prototype={
gu(a){return B.f.gu(this.a)},
l(a,b){if(b==null)return!1
if(this===b)return!0
if(J.a0(b)!==A.D(this))return!1
return b instanceof A.e&&b.a===this.a}}
A.m.prototype={
gu(a){return B.f.gu(this.a)},
l(a,b){if(b==null)return!1
if(this===b)return!0
if(J.a0(b)!==A.D(this))return!1
return b instanceof A.m&&b.a===this.a}}
A.R3.prototype={}
A.iB.prototype={
j(a){return"MethodCall("+this.a+", "+A.h(this.b)+")"}}
A.xw.prototype={
j(a){var s=this
return"PlatformException("+s.a+", "+A.h(s.b)+", "+A.h(s.c)+", "+A.h(s.d)+")"},
$ibB:1}
A.wP.prototype={
j(a){return"MissingPluginException("+A.h(this.a)+")"},
$ibB:1}
A.adE.prototype={
fc(a){if(a==null)return null
return B.d5.eH(A.d_(a.buffer,a.byteOffset,a.byteLength))},
c3(a){if(a==null)return null
return A.lq(B.cu.eH(a).buffer,0,null)}}
A.a5a.prototype={
c3(a){if(a==null)return null
return B.hI.c3(B.a5.tS(a))},
fc(a){var s
if(a==null)return a
s=B.hI.fc(a)
s.toString
return B.a5.ef(0,s)}}
A.a5c.prototype={
hd(a){var s=B.bZ.c3(A.aZ(["method",a.a,"args",a.b],t.N,t.X))
s.toString
return s},
hb(a){var s,r,q,p=null,o=B.bZ.fc(a)
if(!t.G.b(o))throw A.c(A.bH("Expected method call Map, got "+A.h(o),p,p))
s=J.aN(o)
r=s.i(o,"method")
q=s.i(o,"args")
if(typeof r=="string")return new A.iB(r,q)
throw A.c(A.bH("Invalid method call: "+A.h(o),p,p))},
Kd(a){var s,r,q,p=null,o=B.bZ.fc(a)
if(!t.j.b(o))throw A.c(A.bH("Expected envelope List, got "+A.h(o),p,p))
s=J.aN(o)
if(s.gp(o)===1)return s.i(o,0)
if(s.gp(o)===3)if(typeof s.i(o,0)=="string")r=s.i(o,1)==null||typeof s.i(o,1)=="string"
else r=!1
else r=!1
if(r){r=A.bT(s.i(o,0))
q=A.cE(s.i(o,1))
throw A.c(A.apS(r,s.i(o,2),q,p))}if(s.gp(o)===4)if(typeof s.i(o,0)=="string")if(s.i(o,1)==null||typeof s.i(o,1)=="string")r=s.i(o,3)==null||typeof s.i(o,3)=="string"
else r=!1
else r=!1
else r=!1
if(r){r=A.bT(s.i(o,0))
q=A.cE(s.i(o,1))
throw A.c(A.apS(r,s.i(o,2),q,A.cE(s.i(o,3))))}throw A.c(A.bH("Invalid envelope: "+A.h(o),p,p))},
pa(a){var s=B.bZ.c3([a])
s.toString
return s},
kY(a,b,c){var s=B.bZ.c3([a,c,b])
s.toString
return s},
KC(a,b){return this.kY(a,null,b)}}
A.adn.prototype={
c3(a){var s
if(a==null)return null
s=A.afj(64)
this.df(0,s,a)
return s.jx()},
fc(a){var s,r
if(a==null)return null
s=new A.xK(a)
r=this.fP(0,s)
if(s.b<a.byteLength)throw A.c(B.aP)
return r},
df(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i=null
if(c==null)b.dK(0,0)
else if(A.ky(c))b.dK(0,c?1:2)
else if(typeof c=="number"){b.dK(0,6)
b.hB(8)
s=$.d9()
b.d.setFloat64(0,c,B.ae===s)
b.Tx(b.e)}else if(A.kz(c)){s=-2147483648<=c&&c<=2147483647
r=b.d
if(s){b.dK(0,3)
s=$.d9()
r.setInt32(0,c,B.ae===s)
b.nJ(b.e,0,4)}else{b.dK(0,4)
s=$.d9()
B.fL.Df(r,0,c,s)}}else if(typeof c=="string"){b.dK(0,7)
s=c.length
q=new Uint8Array(s)
n=0
while(!0){if(!(n<s)){p=i
o=0
break}m=B.b.a0(c,n)
if(m<=127)q[n]=m
else{p=B.cu.eH(B.b.bX(c,n))
o=n
break}++n}if(p!=null){j.ev(b,o+p.length)
l=q.BYTES_PER_ELEMENT
k=A.dw(0,o,B.f.f_(q.byteLength,l),i,i)
b.kn(A.d_(q.buffer,q.byteOffset+0*l,(k-0)*l))
b.kn(p)}else{j.ev(b,s)
b.kn(q)}}else if(t.H3.b(c)){b.dK(0,8)
j.ev(b,c.length)
b.kn(c)}else if(t.XO.b(c)){b.dK(0,9)
s=c.length
j.ev(b,s)
b.hB(4)
b.kn(A.d_(c.buffer,c.byteOffset,4*s))}else if(t.s4.b(c)){b.dK(0,14)
s=c.length
j.ev(b,s)
b.hB(4)
b.kn(A.d_(c.buffer,c.byteOffset,4*s))}else if(t.OE.b(c)){b.dK(0,11)
s=c.length
j.ev(b,s)
b.hB(8)
b.kn(A.d_(c.buffer,c.byteOffset,8*s))}else if(t.j.b(c)){b.dK(0,12)
s=J.aN(c)
j.ev(b,s.gp(c))
for(s=s.gad(c);s.t();)j.df(0,b,s.gI(s))}else if(t.G.b(c)){b.dK(0,13)
s=J.aN(c)
j.ev(b,s.gp(c))
s.W(c,new A.ado(j,b))}else throw A.c(A.fx(c,i,i))},
fP(a,b){if(b.b>=b.a.byteLength)throw A.c(B.aP)
return this.j_(b.ls(0),b)},
j_(a,b){var s,r,q,p,o,n,m,l,k=this
switch(a){case 0:return null
case 1:return!0
case 2:return!1
case 3:s=b.b
r=$.d9()
q=b.a.getInt32(s,B.ae===r)
b.b+=4
return q
case 4:return b.vw(0)
case 6:b.hB(8)
s=b.b
r=$.d9()
q=b.a.getFloat64(s,B.ae===r)
b.b+=8
return q
case 5:case 7:p=k.dP(b)
return B.d5.eH(b.lt(p))
case 8:return b.lt(k.dP(b))
case 9:p=k.dP(b)
b.hB(4)
s=b.a
o=A.atZ(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+4*p
return o
case 10:return b.vx(k.dP(b))
case 14:p=k.dP(b)
b.hB(4)
s=b.a
r=s.buffer
s=s.byteOffset+b.b
A.Wr(r,s,p)
o=new Float32Array(r,s,p)
b.b=b.b+4*p
return o
case 11:p=k.dP(b)
b.hB(8)
s=b.a
o=A.atX(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+8*p
return o
case 12:p=k.dP(b)
n=A.b_(p,null,!1,t.X)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.L(B.aP)
b.b=r+1
n[m]=k.j_(s.getUint8(r),b)}return n
case 13:p=k.dP(b)
s=t.X
n=A.y(s,s)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.L(B.aP)
b.b=r+1
r=k.j_(s.getUint8(r),b)
l=b.b
if(l>=s.byteLength)A.L(B.aP)
b.b=l+1
n.k(0,r,k.j_(s.getUint8(l),b))}return n
default:throw A.c(B.aP)}},
ev(a,b){var s,r
if(b<254)a.dK(0,b)
else{s=a.d
if(b<=65535){a.dK(0,254)
r=$.d9()
s.setUint16(0,b,B.ae===r)
a.nJ(a.e,0,2)}else{a.dK(0,255)
r=$.d9()
s.setUint32(0,b,B.ae===r)
a.nJ(a.e,0,4)}}},
dP(a){var s,r,q=a.ls(0)
switch(q){case 254:s=a.b
r=$.d9()
q=a.a.getUint16(s,B.ae===r)
a.b+=2
return q
case 255:s=a.b
r=$.d9()
q=a.a.getUint32(s,B.ae===r)
a.b+=4
return q
default:return q}}}
A.ado.prototype={
$2(a,b){var s=this.a,r=this.b
s.df(0,r,a)
s.df(0,r,b)},
$S:75}
A.adr.prototype={
hd(a){var s=A.afj(64)
B.aq.df(0,s,a.a)
B.aq.df(0,s,a.b)
return s.jx()},
hb(a){var s,r,q
a.toString
s=new A.xK(a)
r=B.aq.fP(0,s)
q=B.aq.fP(0,s)
if(typeof r=="string"&&s.b>=a.byteLength)return new A.iB(r,q)
else throw A.c(B.o3)},
pa(a){var s=A.afj(64)
s.dK(0,0)
B.aq.df(0,s,a)
return s.jx()},
kY(a,b,c){var s=A.afj(64)
s.dK(0,1)
B.aq.df(0,s,a)
B.aq.df(0,s,c)
B.aq.df(0,s,b)
return s.jx()},
KC(a,b){return this.kY(a,null,b)},
Kd(a){var s,r,q,p,o,n
if(a.byteLength===0)throw A.c(B.Hy)
s=new A.xK(a)
if(s.ls(0)===0)return B.aq.fP(0,s)
r=B.aq.fP(0,s)
q=B.aq.fP(0,s)
p=B.aq.fP(0,s)
o=s.b<a.byteLength?A.cE(B.aq.fP(0,s)):null
if(typeof r=="string")n=(q==null||typeof q=="string")&&s.b>=a.byteLength
else n=!1
if(n)throw A.c(A.apS(r,p,A.cE(q),o))
else throw A.c(B.Hz)}}
A.a6J.prototype={
a5c(a,b,c){var s,r,q,p
if(t.PB.b(b)){this.b.A(0,a)
return}s=this.b
r=s.i(0,a)
q=A.aGN(c)
if(q==null)q=this.a
if(J.f(r==null?null:t.ZC.a(r.a),q))return
p=q.tw(a)
s.k(0,a,p)
B.Vd.hh("activateSystemCursor",A.aZ(["device",p.b,"kind",t.ZC.a(p.a).a],t.N,t.z),t.H)}}
A.wR.prototype={}
A.ev.prototype={
j(a){var s=this.gty()
return s}}
A.PO.prototype={
tw(a){throw A.c(A.cb(null))},
gty(){return"defer"}}
A.Ut.prototype={}
A.lQ.prototype={
gty(){return"SystemMouseCursor("+this.a+")"},
tw(a){return new A.Ut(this,a)},
l(a,b){if(b==null)return!1
if(J.a0(b)!==A.D(this))return!1
return b instanceof A.lQ&&b.a===this.a},
gu(a){return B.b.gu(this.a)}}
A.Ry.prototype={}
A.kP.prototype={
goB(){var s,r=$.hM.am$
r===$&&A.b()
s=r
return s},
eU(a,b){return this.On(0,b,this.$ti.h("1?"))},
On(a,b,c){var s=0,r=A.a5(c),q,p=this,o,n
var $async$eU=A.a1(function(d,e){if(d===1)return A.a2(e,r)
while(true)switch(s){case 0:o=p.b
n=o
s=3
return A.a9(p.goB().vG(0,p.a,o.c3(b)),$async$eU)
case 3:q=n.fc(e)
s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$eU,r)},
vM(a){this.goB().Dh(this.a,new A.XG(this,a))}}
A.XG.prototype={
$1(a){return this.NB(a)},
NB(a){var s=0,r=A.a5(t.CD),q,p=this,o,n
var $async$$1=A.a1(function(b,c){if(b===1)return A.a2(c,r)
while(true)switch(s){case 0:o=p.a.b
n=o
s=3
return A.a9(p.b.$1(o.fc(a)),$async$$1)
case 3:q=n.c3(c)
s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$$1,r)},
$S:109}
A.wO.prototype={
goB(){var s,r=$.hM.am$
r===$&&A.b()
s=r
return s},
o_(a,b,c,d){return this.YJ(a,b,c,d,d.h("0?"))},
YJ(a,b,c,d,e){var s=0,r=A.a5(e),q,p=this,o,n,m,l
var $async$o_=A.a1(function(f,g){if(f===1)return A.a2(g,r)
while(true)switch(s){case 0:o=p.b
n=o.hd(new A.iB(a,b))
m=p.a
s=3
return A.a9(p.goB().vG(0,m,n),$async$o_)
case 3:l=g
if(l==null){if(c){q=null
s=1
break}throw A.c(A.aE_("No implementation found for method "+a+" on channel "+m))}q=d.h("0?").a(o.Kd(l))
s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$o_,r)},
nt(a){var s=this.goB()
s.Dh(this.a,new A.a6r(this,a))},
r7(a,b){return this.WP(a,b)},
WP(a,b){var s=0,r=A.a5(t.CD),q,p=2,o,n=this,m,l,k,j,i,h,g,f,e
var $async$r7=A.a1(function(c,d){if(c===1){o=d
s=p}while(true)switch(s){case 0:h=n.b
g=h.hb(a)
p=4
e=h
s=7
return A.a9(b.$1(g),$async$r7)
case 7:k=e.pa(d)
q=k
s=1
break
p=2
s=6
break
case 4:p=3
f=o
k=A.ai(f)
if(k instanceof A.xw){m=k
k=m.a
i=m.b
q=h.kY(k,m.c,i)
s=1
break}else if(k instanceof A.wP){q=null
s=1
break}else{l=k
h=h.KC("error",J.dn(l))
q=h
s=1
break}s=6
break
case 3:s=2
break
case 6:case 1:return A.a3(q,r)
case 2:return A.a2(o,r)}})
return A.a4($async$r7,r)}}
A.a6r.prototype={
$1(a){return this.a.r7(a,this.b)},
$S:109}
A.lu.prototype={
hh(a,b,c){return this.a6w(a,b,c,c.h("0?"))},
uo(a,b){return this.hh(a,null,b)},
a6w(a,b,c,d){var s=0,r=A.a5(d),q,p=this
var $async$hh=A.a1(function(e,f){if(e===1)return A.a2(f,r)
while(true)switch(s){case 0:q=p.PQ(a,b,!0,c)
s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$hh,r)}}
A.li.prototype={
H(){return"KeyboardSide."+this.b}}
A.eP.prototype={
H(){return"ModifierKey."+this.b}}
A.xI.prototype={
ga7h(){var s,r,q,p=A.y(t.xS,t.LE)
for(s=0;s<9;++s){r=B.oX[s]
if(this.a6B(r)){q=this.NW(r)
if(q!=null)p.k(0,r,q)}}return p},
OH(){return!0}}
A.hI.prototype={}
A.a8y.prototype={
$0(){var s,r,q,p=this.b,o=J.aN(p),n=A.cE(o.i(p,"key")),m=n==null
if(!m){s=n.length
s=s!==0&&s===1}else s=!1
if(s)this.a.a=n
s=A.cE(o.i(p,"code"))
if(s==null)s=""
m=m?"":n
r=A.oM(o.i(p,"location"))
if(r==null)r=0
q=A.oM(o.i(p,"metaState"))
if(q==null)q=0
p=A.oM(o.i(p,"keyCode"))
return new A.qu(s,m,r,q,p==null?0:p)},
$S:280}
A.iN.prototype={}
A.qv.prototype={}
A.a8D.prototype={
a5C(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(a instanceof A.iN){p=a.c
i.d.k(0,p.ge7(),p.gpK())}else if(a instanceof A.qv)i.d.A(0,a.c.ge7())
i.a11(a)
for(p=i.a,o=A.aF(p,!0,t.iS),n=o.length,m=0;m<n;++m){s=o[m]
try{if(B.c.C(p,s))s.$1(a)}catch(l){r=A.ai(l)
q=A.az(l)
k=A.bt("while processing a raw key listener")
j=$.hd()
if(j!=null)j.$1(new A.bP(r,q,"services library",k,null,!1))}}return!1},
a11(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=a1.c,f=g.ga7h(),e=t.v3,d=A.y(e,t.bd),c=A.bc(e),b=this.d,a=A.ll(new A.bf(b,A.o(b).h("bf<1>")),e),a0=a1 instanceof A.iN
if(a0)a.D(0,g.ge7())
for(s=null,r=0;r<9;++r){q=B.oX[r]
p=$.ayo()
o=p.i(0,new A.ct(q,B.bq))
if(o==null)continue
if(o.C(0,g.ge7()))s=q
if(f.i(0,q)===B.cA){c.L(0,o)
if(o.kG(0,a.gju(a)))continue}n=f.i(0,q)==null?A.bc(e):p.i(0,new A.ct(q,f.i(0,q)))
if(n==null)continue
for(p=new A.rY(n,n.r),p.c=n.e,m=A.o(p).c;p.t();){l=p.d
if(l==null)l=m.a(l)
k=$.ayn().i(0,l)
k.toString
d.k(0,l,k)}}e=g instanceof A.a8w
j=(e||g instanceof A.qu)&&b.i(0,B.bW)!=null&&!J.f(b.i(0,B.bW),B.dD)
for(a=$.aoy(),a=A.jG(a,a.r);a.t();){p=a.d
i=j&&p.l(0,B.bW)
if(!c.C(0,p)&&!i)b.A(0,p)}if(!(g instanceof A.a8u)&&!(g instanceof A.a8x))b.A(0,B.dQ)
b.L(0,d)
if(a0&&s!=null&&!b.P(0,g.ge7())){if(e&&g.ge7().l(0,B.bX)||g instanceof A.a8v||g instanceof A.a8t){h=$.aoy().i(0,g.ge7())
if(h!=null)b.k(0,g.ge7(),h)}if(g instanceof A.qu&&g.ge7().l(0,B.bX))b.k(0,g.ge7(),g.gpK())}}}
A.ct.prototype={
l(a,b){if(b==null)return!1
if(J.a0(b)!==A.D(this))return!1
return b instanceof A.ct&&b.a===this.a&&b.b==this.b},
gu(a){return A.Y(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.SK.prototype={}
A.SJ.prototype={}
A.a8t.prototype={}
A.a8u.prototype={}
A.a8v.prototype={}
A.a8w.prototype={}
A.a8x.prototype={}
A.qu.prototype={
ge7(){var s=this.a,r=B.UJ.i(0,s)
return r==null?new A.m(98784247808+B.b.gu(s)):r},
gpK(){var s,r=this.b,q=B.UL.i(0,r),p=q==null?null:q[this.c]
if(p!=null)return p
s=B.UI.i(0,r)
if(s!=null)return s
if(r.length===1)return new A.e(B.b.a0(r.toLowerCase(),0))
return new A.e(B.b.gu(this.a)+98784247808)},
a6B(a){var s=this
switch(a.a){case 0:return(s.d&4)!==0
case 1:return(s.d&1)!==0
case 2:return(s.d&2)!==0
case 3:return(s.d&8)!==0
case 5:return(s.d&16)!==0
case 4:return(s.d&32)!==0
case 6:return(s.d&64)!==0
case 7:case 8:return!1}},
NW(a){return B.cA},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.a0(b)!==A.D(s))return!1
return b instanceof A.qu&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e},
gu(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.y1.prototype={
ga8J(){var s=this
if(s.c)return new A.bA(s.a,t.hr)
if(s.b==null){s.b=new A.aL(new A.a7($.ad,t.X6),t.EZ)
s.r6()}return s.b.a},
r6(){var s=0,r=A.a5(t.H),q,p=this,o
var $async$r6=A.a1(function(a,b){if(a===1)return A.a2(b,r)
while(true)switch(s){case 0:s=3
return A.a9(B.iX.uo("get",t.pE),$async$r6)
case 3:o=b
if(p.b==null){s=1
break}p.Hg(o)
case 1:return A.a3(q,r)}})
return A.a4($async$r6,r)},
Hg(a){var s,r=a==null
if(!r){s=J.aY(a,"enabled")
s.toString
A.oL(s)}else s=!1
this.a5E(r?null:t.nc.a(J.aY(a,"data")),s)},
a5E(a,b){var s,r,q=this,p=q.c&&b
q.d=p
if(p)$.bS.cy$.push(new A.a9z(q))
s=q.a
if(b){p=q.V0(a)
r=t.N
if(p==null){p=t.X
p=A.y(p,p)}r=new A.cN(p,q,null,"root",A.y(r,t.z4),A.y(r,t.I1))
p=r}else p=null
q.a=p
q.c=!0
r=q.b
if(r!=null)r.bS(0,p)
q.b=null
if(q.a!=s){q.aG()
if(s!=null)s.m()}},
xY(a){return this.Zh(a)},
Zh(a){var s=0,r=A.a5(t.H),q=this,p
var $async$xY=A.a1(function(b,c){if(b===1)return A.a2(c,r)
while(true)switch(s){case 0:p=a.a
switch(p){case"push":q.Hg(t.pE.a(a.b))
break
default:throw A.c(A.cb(p+" was invoked but isn't implemented by "+A.D(q).j(0)))}return A.a3(null,r)}})
return A.a4($async$xY,r)},
V0(a){if(a==null)return null
return t.J1.a(B.aq.fc(A.lq(a.buffer,a.byteOffset,a.byteLength)))},
Of(a){var s=this
s.r.D(0,a)
if(!s.f){s.f=!0
$.bS.cy$.push(new A.a9A(s))}},
FG(){var s,r,q,p,o,n=this
if(!n.f)return
n.f=!1
for(s=n.r,r=A.kl(s,s.r),q=A.o(r).c;r.t();){p=r.d;(p==null?q.a(p):p).w=!1}s.Z(0)
o=B.aq.c3(n.a.a)
B.iX.hh("put",A.d_(o.buffer,o.byteOffset,o.byteLength),t.H)},
L_(){if($.bS.dx$)return
this.FG()}}
A.a9z.prototype={
$1(a){this.a.d=!1},
$S:2}
A.a9A.prototype={
$1(a){return this.a.FG()},
$S:2}
A.cN.prototype={
go9(){var s=J.Dt(this.a,"c",new A.a9w())
s.toString
return t.pE.a(s)},
gjl(){var s=J.Dt(this.a,"v",new A.a9x())
s.toString
return t.pE.a(s)},
a8h(a,b,c){var s=this,r=J.ep(s.gjl(),b),q=c.h("0?").a(J.jl(s.gjl(),b))
if(J.he(s.gjl()))J.jl(s.a,"v")
if(r)s.m_()
return q},
a2V(a,b){var s,r,q,p,o=this,n=o.f
if(n.P(0,a)||!J.ep(o.go9(),a)){n=t.N
s=new A.cN(A.y(n,t.X),null,null,a,A.y(n,t.z4),A.y(n,t.I1))
o.ix(s)
return s}r=t.N
q=o.c
p=J.aY(o.go9(),a)
p.toString
s=new A.cN(t.pE.a(p),q,o,a,A.y(r,t.z4),A.y(r,t.I1))
n.k(0,a,s)
return s},
ix(a){var s=this,r=a.d
if(r!==s){if(r!=null)r.rA(a)
a.d=s
s.Et(a)
if(a.c!=s.c)s.Ht(a)}},
Vn(a){this.rA(a)
a.d=null
if(a.c!=null){a.yL(null)
a.J5(this.gHs())}},
m_(){var s,r=this
if(!r.w){r.w=!0
s=r.c
if(s!=null)s.Of(r)}},
Ht(a){a.yL(this.c)
a.J5(this.gHs())},
yL(a){var s=this,r=s.c
if(r==a)return
if(s.w)if(r!=null)r.r.A(0,s)
s.c=a
if(s.w&&a!=null){s.w=!1
s.m_()}},
rA(a){var s,r,q,p=this
if(J.f(p.f.A(0,a.e),a)){J.jl(p.go9(),a.e)
s=p.r
r=s.i(0,a.e)
if(r!=null){q=J.bY(r)
p.FT(q.e8(r))
if(q.gO(r))s.A(0,a.e)}if(J.he(p.go9()))J.jl(p.a,"c")
p.m_()
return}s=p.r
q=s.i(0,a.e)
if(q!=null)J.jl(q,a)
q=s.i(0,a.e)
q=q==null?null:J.he(q)
if(q===!0)s.A(0,a.e)},
Et(a){var s=this
if(s.f.P(0,a.e)){J.kI(s.r.bQ(0,a.e,new A.a9v()),a)
s.m_()
return}s.FT(a)
s.m_()},
FT(a){this.f.k(0,a.e,a)
J.cW(this.go9(),a.e,a.a)},
J6(a,b){var s,r,q=this.f
q=q.gb_(q)
s=this.r
s=s.gb_(s)
r=q.a56(0,new A.hq(s,new A.a9y(),A.o(s).h("hq<p.E,cN>")))
J.jk(b?A.aF(r,!1,A.o(r).h("p.E")):r,a)},
J5(a){return this.J6(a,!1)},
a8p(a){var s,r=this
if(a===r.e)return
s=r.d
if(s!=null)s.rA(r)
r.e=a
s=r.d
if(s!=null)s.Et(r)},
m(){var s,r=this
r.J6(r.gVm(),!0)
r.f.Z(0)
r.r.Z(0)
s=r.d
if(s!=null)s.rA(r)
r.d=null
r.yL(null)
r.x=!0},
j(a){return"RestorationBucket(restorationId: "+this.e+", owner: "+A.h(this.b)+")"}}
A.a9w.prototype={
$0(){var s=t.X
return A.y(s,s)},
$S:111}
A.a9x.prototype={
$0(){var s=t.X
return A.y(s,s)},
$S:111}
A.a9v.prototype={
$0(){return A.a([],t.QT)},
$S:283}
A.a9y.prototype={
$1(a){return a},
$S:284}
A.Xn.prototype={}
A.iV.prototype={
Iv(){var s,r,q,p,o=this,n=o.a
n=n==null?null:n.a
s=o.e
s=s==null?null:s.a
r=o.f.H()
q=o.r.H()
p=o.c
p=p==null?null:p.H()
return A.aZ(["systemNavigationBarColor",n,"systemNavigationBarDividerColor",null,"systemStatusBarContrastEnforced",o.w,"statusBarColor",s,"statusBarBrightness",r,"statusBarIconBrightness",q,"systemNavigationBarIconBrightness",p,"systemNavigationBarContrastEnforced",o.d],t.N,t.z)},
j(a){return"SystemUiOverlayStyle("+this.Iv().j(0)+")"},
gu(a){var s=this
return A.Y(s.a,s.b,s.d,s.e,s.f,s.r,s.w,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
l(a,b){var s,r=this
if(b==null)return!1
if(J.a0(b)!==A.D(r))return!1
if(b instanceof A.iV)if(J.f(b.a,r.a))if(J.f(b.e,r.e))if(b.r===r.r)if(b.f===r.f)s=b.c==r.c
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.adX.prototype={
$0(){if(!J.f($.r8,$.aqf)){B.ci.hh("SystemChrome.setSystemUIOverlayStyle",$.r8.Iv(),t.H)
$.aqf=$.r8}$.r8=null},
$S:0}
A.zh.prototype={
H(){return"SystemSoundType."+this.b}}
A.ae4.prototype={
U(a,b){return new A.Q9(b,this)}}
A.YR.prototype={
ht(a){var s,r,q,p,o,n=a.a
if(n<=0)return B.d4
s=this.a
r=s.length
if(n<=r)q=n===r&&a.b===B.J
else q=!0
if(q)return new A.b9(r,B.W)
switch(a.b.a){case 0:p=Math.min(n-1,r)
o=Math.min(n,r)
break
case 1:p=Math.min(n,r)
o=Math.min(n+1,r)
break
default:o=null
p=null}return new A.b9(A.auR(s,p,o).b,B.J)},
hu(a){var s,r,q,p,o,n=a.a
if(n>=0)s=n===0&&a.b===B.W
else s=!0
if(s)return B.d4
s=this.a
r=s.length
if(n>=r)return new A.b9(r,B.W)
switch(a.b.a){case 0:q=Math.min(n-1,r)
p=Math.min(n,r)
break
case 1:q=Math.min(n,r)
p=Math.min(n+1,r)
break
default:p=null
q=null}o=A.auR(s,q,p)
return new A.b9(r-(o.a.length-o.c),B.W)}}
A.afg.prototype={
ht(a){return new A.b9(this.a.b.no(a).a,B.J)},
hu(a){return new A.b9(this.a.b.no(a).b,B.W)}}
A.a5I.prototype={
ht(a){return new A.b9(this.a.CM(a).a,B.J)},
hu(a){return new A.b9(this.a.CM(a).b,B.W)}}
A.a_g.prototype={
ht(a){return B.d4},
hu(a){return new A.b9(this.a.length,B.W)}}
A.afe.prototype={
ht(a){var s,r=a.a,q=this.a,p=q.length
if(r<=p)r=r===p&&a.b===B.J
else r=!0
if(r)a=new A.b9(p,B.W)
s=a.a
if(s<=0)return B.d4
if(a.b===B.J&&!A.aew(B.b.ak(q,s)))return a
for(;--s,s>=0;)if(!A.aew(B.b.ak(q,s)))return new A.b9(s+1,B.W)
return B.d4},
hu(a){var s,r=a.a,q=this.a,p=q.length
if(r>=p)return new A.b9(p,B.W)
if(r>=0)r=r===0&&a.b===B.W
else r=!0
if(r)a=B.d4
s=a.a
if(a.b===B.W&&!A.aew(B.b.ak(q,s-1)))return a
for(;s<p;++s)if(!A.aew(B.b.ak(q,s)))return new A.b9(s,B.J)
return new A.b9(p,B.W)}}
A.Q9.prototype={
ht(a){return this.a.ht(this.b.ht(a))},
hu(a){return this.a.hu(this.b.hu(a))}}
A.LI.prototype={
EX(a){if(this.a)switch(a.b.a){case 0:return new A.b9(a.a,B.J)
case 1:return new A.b9(a.a+1,B.W)}else switch(a.b.a){case 0:return new A.b9(a.a-1,B.J)
case 1:return new A.b9(a.a,B.W)}},
ht(a){return this.EX(a)},
hu(a){return this.EX(a)}}
A.NY.prototype={
j(a){var s,r,q=this,p=", isDirectional: "
if(!q.gla())return"TextSelection.invalid"
s=""+q.c
r=""+q.f
return q.a===q.b?"TextSelection.collapsed(offset: "+s+", affinity: "+q.e.j(0)+p+r+")":"TextSelection(baseOffset: "+s+", extentOffset: "+q.d+p+r+")"},
l(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof A.NY))return!1
if(!r.gla())return!b.gla()
if(b.c===r.c)if(b.d===r.d)s=(r.a!==r.b||b.e===r.e)&&b.f===r.f
else s=!1
else s=!1
return s},
gu(a){var s,r=this
if(!r.gla())return A.Y(-B.f.gu(1),-B.f.gu(1),A.fn(B.J),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)
s=r.a===r.b?A.fn(r.e):A.fn(B.J)
return A.Y(B.f.gu(r.c),B.f.gu(r.d),s,B.oi.gu(r.f),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.MU.prototype={
H(){return"SelectionChangedCause."+this.b}}
A.NW.prototype={
gUj(){var s=this.c
s===$&&A.b()
return s},
ri(a){return this.Z3(a)},
Z3(a){var s=0,r=A.a5(t.z),q,p=2,o,n=this,m,l,k,j,i
var $async$ri=A.a1(function(b,c){if(b===1){o=c
s=p}while(true)switch(s){case 0:p=4
s=7
return A.a9(n.xI(a),$async$ri)
case 7:k=c
q=k
s=1
break
p=2
s=6
break
case 4:p=3
i=o
m=A.ai(i)
l=A.az(i)
k=A.bt("during method call "+a.a)
A.e1(new A.bP(m,l,"services library",k,new A.aev(a),!1))
throw i
s=6
break
case 3:s=2
break
case 6:case 1:return A.a3(q,r)
case 2:return A.a2(o,r)}})
return A.a4($async$ri,r)},
xI(a){return this.Yk(a)},
Yk(a){var s=0,r=A.a5(t.z),q,p=this,o,n,m,l,k,j
var $async$xI=A.a1(function(b,c){if(b===1)return A.a2(c,r)
while(true)switch(s){case 0:j=a.a
if(j==="TextInputClient.focusElement"){p.f.i(0,J.aY(t.j.a(a.b),0))
s=1
break}else if(j==="TextInputClient.requestElementsInRect"){o=J.mr(t.j.a(a.b),t.Jy)
n=A.o(o).h("aG<a_.E,S>")
m=p.f
l=A.o(m).h("bf<1>")
k=l.h("e3<p.E,A<@>>")
q=A.aF(new A.e3(new A.aR(new A.bf(m,l),new A.aes(p,A.aF(new A.aG(o,new A.aet(),n),!0,n.h("bm.E"))),l.h("aR<p.E>")),new A.aeu(p),k),!0,k.h("p.E"))
s=1
break}else if(j==="TextInputClient.scribbleInteractionBegan"){s=1
break}else if(j==="TextInputClient.scribbleInteractionFinished"){s=1
break}s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$xI,r)}}
A.aev.prototype={
$0(){var s=null
return A.a([A.ii("call",this.a,!0,B.aY,s,!1,s,s,B.aB,s,!1,!0,!0,B.b8,s,t.O5)],t.E)},
$S:13}
A.aet.prototype={
$1(a){return a},
$S:286}
A.aes.prototype={
$1(a){this.a.f.i(0,a)
return!1},
$S:32}
A.aeu.prototype={
$1(a){var s=this.a.f.i(0,a),r=s.gzi(s)
s=[a]
B.c.L(s,[r.gi4(r),r.gCk(r),r.gbv(r),r.gc0(r)])
return s},
$S:287}
A.zq.prototype={}
A.S_.prototype={}
A.VI.prototype={}
A.amN.prototype={
$1(a){this.a.scl(a)
return!1},
$S:47}
A.aW.prototype={}
A.by.prototype={
h3(a){this.b=a},
iR(a,b){this.guq()
return!0},
guq(){return!0},
tr(a){return!0},
a20(a){var s=this.a
s.b=!0
s.a.push(a)
return null},
MO(a){return this.a.A(0,a)}}
A.mL.prototype={}
A.mC.prototype={
dz(a){return this.c.$1(a)}}
A.X5.prototype={
LI(a,b,c){if(a instanceof A.mL)return a.mX(b,c)
else return a.dz(b)}}
A.jm.prototype={
X(){return new A.zP(A.bc(t.od),new A.C(),B.i)}}
A.X7.prototype={
$1(a){var s=a.f
s.toString
t.KU.a(s)
return!1},
$S:48}
A.Xa.prototype={
$1(a){var s,r=this,q=a.f
q.toString
s=A.aoL(t.KU.a(q),r.b,r.d)
if(s!=null){r.c.DL(a,null)
r.a.a=s
return!0}return!1},
$S:48}
A.X8.prototype={
$1(a){var s,r=a.f
r.toString
s=A.aoL(t.KU.a(r),this.b,this.c)
if(s!=null){this.a.a=s
return!0}return!1},
$S:48}
A.Xb.prototype={
$1(a){var s,r,q=this,p=a.f
p.toString
s=q.b
r=A.aoL(t.KU.a(p),s,q.d)
p=r!=null
if(p&&r.iR(0,s))q.a.a=A.asr(a).LI(r,s,q.c)
return p},
$S:48}
A.zP.prototype={
a2(){this.ag()
this.IC()},
WH(a){this.a7(new A.afn(this))},
IC(){var s,r,q,p,o=this,n=o.a.d
n=n.gb_(n)
s=A.ll(n,A.o(n).h("p.E"))
r=o.d.kT(s)
n=o.d
n.toString
q=s.kT(n)
for(n=r.gad(r),p=o.gGf();n.t();)n.gI(n).MO(p)
for(n=q.gad(q);n.t();)n.gI(n).a20(p)
o.d=s},
b4(a){this.bx(a)
this.IC()},
m(){var s,r,q,p,o=this
o.aj()
for(s=o.d,s=A.kl(s,s.r),r=o.gGf(),q=A.o(s).c;s.t();){p=s.d;(p==null?q.a(p):p).MO(r)}o.d=null},
G(a){var s=this.a
return new A.zO(null,s.d,this.e,s.e,null)}}
A.afn.prototype={
$0(){this.a.e=new A.C()},
$S:0}
A.zO.prototype={
cg(a){var s
if(this.w===a.w)s=!A.aoa(a.r,this.r)
else s=!0
return s}}
A.Ot.prototype={
dz(a){a.a9P()
return null}}
A.Gv.prototype={
tr(a){return this.c},
dz(a){}}
A.oU.prototype={}
A.p8.prototype={}
A.il.prototype={}
A.Gt.prototype={}
A.nL.prototype={}
A.LG.prototype={
iR(a,b){var s,r,q,p,o,n=$.aq.an$.f.f
if(n==null||n.e==null)return!1
for(s=t.q,r=0;r<2;++r){q=B.IL[r]
p=n.e
p.toString
o=A.aoN(p,q,s)
if(o!=null&&o.iR(0,q)){this.c=o
this.d=q
return!0}}return!1},
dz(a){var s,r=this.c
r===$&&A.b()
s=this.d
s===$&&A.b()
r.dz(s)}}
A.RU.prototype={
YK(a,b,c){var s
a.h3(this.gkP())
s=A.o(this).h("mL<1>").b(a)?a.mX(b,c):a.dz(b)
a.h3(null)
return s},
mX(a,b){var s=this,r=A.aoM(s.guy(),A.o(s).c)
return r==null?s.a6v(a,s.b,b):s.YK(r,a,b)},
dz(a){return this.mX(a,null)},
guq(){var s=this,r=A.aoN(s.guy(),null,A.o(s).c)
if(r!=null){r.h3(s.gkP())
r.guq()
r.h3(null)}else s.gkP().guq()
return!0},
iR(a,b){var s,r=this,q=A.aoM(r.guy(),A.o(r).c),p=q==null
if(!p)q.h3(r.gkP())
s=(p?r.gkP():q).iR(0,b)
if(!p)q.h3(null)
return s},
tr(a){var s,r=this,q=A.aoM(r.guy(),A.o(r).c),p=q==null
if(!p)q.h3(r.gkP())
s=(p?r.gkP():q).tr(a)
if(!p)q.h3(null)
return s}}
A.B7.prototype={
a6v(a,b,c){var s=this.e
if(b==null)return s.dz(a)
else return s.dz(a)},
gkP(){return this.e},
guy(){return this.f}}
A.OA.prototype={}
A.Oz.prototype={}
A.QY.prototype={}
A.Cw.prototype={
h3(a){this.OY(a)
this.e.h3(a)}}
A.zL.prototype={
X(){return new A.Ce(B.i)}}
A.Ce.prototype={
gYx(){var s,r
$.aq.toString
s=$.aX()
if(s.gzJ()!=="/"){$.aq.toString
s=s.gzJ()}else{r=this.a.ax
$.aq.toString
s=s.gzJ()
s=s}return s},
a2(){var s=this
s.ag()
s.a1w()
$.aq.toString
s.r=s.yn($.aX().a.f,s.a.fy)
$.aq.bc$.push(s)},
b4(a){this.bx(a)
this.IW(a)},
m(){B.c.A($.aq.bc$,this)
var s=this.d
if(s!=null)s.m()
this.aj()},
Fd(){var s=this.d
if(s!=null)s.m()
this.e=this.d=null},
IW(a){var s,r=this
r.a.toString
if(r.gJ4()){r.Fd()
if(r.f==null||r.a.c!=a.c){s=r.a.c
r.f=s==null?new A.l6(r,t.TX):s}}else{r.Fd()
r.f=null}},
a1w(){return this.IW(null)},
gJ4(){var s=this.a
if(s.Q==null){s=s.as
s=s==null?null:s.gbP(s)
s=s===!0||this.a.d!=null||!1}else s=!0
return s},
ZF(a){var s,r=this,q=a.a,p=q==="/"&&r.a.Q!=null?new A.alW(r):r.a.as.i(0,q)
if(p!=null)return r.a.f.$1$2(a,p,t.z)
s=r.a.d
if(s!=null)return s.$1(a)
return null},
ZT(a){return this.a.at.$1(a)},
jw(){var s=0,r=A.a5(t.y),q,p=this,o,n
var $async$jw=A.a1(function(a,b){if(a===1)return A.a2(b,r)
while(true)switch(s){case 0:p.a.toString
o=p.f
n=o==null?null:o.gbG()
if(n==null){q=!1
s=1
break}q=n.M5()
s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$jw,r)},
oY(a){return this.a4q(a)},
a4q(a){var s=0,r=A.a5(t.y),q,p=this,o,n
var $async$oY=A.a1(function(b,c){if(b===1)return A.a2(c,r)
while(true)switch(s){case 0:p.a.toString
o=p.f
n=o==null?null:o.gbG()
if(n==null){q=!1
s=1
break}o=n.yq(a,null,t.X)
o.toString
n.v_(o)
q=!0
s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$oY,r)},
yn(a,b){this.a.toString
return A.aJB(a,b)},
zO(a){var s=this,r=s.yn(a,s.a.fy)
if(!r.l(0,s.r))s.a7(new A.alZ(s,r))},
G(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g={}
g.a=null
s=i.a
s.toString
if(i.gJ4()){s=i.f
r=i.gYx()
q=i.a
p=q.e==null?A.aL1():new A.alX(i)
o=q.ay
o.toString
g.a=A.ath(!0,new A.x3(r,i.gZE(),i.gZS(),o,"nav",p,!0,s),"Navigator Scope",h,h)
s=q}else{s=i.a
s.toString}g.b=null
n=new A.ib(new A.alY(g,i),h)
g.b=n
n=A.uM(n,h,B.d3,!0,s.cy,h,h,B.aX)
g.b=n
s=$.aGF
if(s)m=new A.Ll(15,!1,!1,h)
else m=h
if(m!=null)g.b=A.c9(B.T,A.a([n,A.eR(h,m,h,h,0,0,0,h)],t.D),B.z,B.S)
s=i.a
r=s.CW
s=s.db
s=A.b7(255,s.gn(s)>>>16&255,s.gn(s)>>>8&255,s.gn(s)&255)
g=g.b
q=i.a.dx
if(q!=null)l=i.yn(A.a([q],t.ss),i.a.fy)
else{q=i.r
q.toString
l=q}q=t.a9
p=A.a([],q)
B.c.L(p,i.a.dy)
p.push(B.F8)
q=A.a(p.slice(0),q)
k=new A.wn(l,q,new A.O5(r,s,g,h),h)
A.dM(a)
g=i.a
j=new A.AO(k,h)
k=j
g=g.p3
s=A.aGE()
r=A.q4($.ayV(),t.n,t.od)
q=t.ot
p=t.wS
r.k(0,B.CO,new A.B7(new A.qJ(new A.bu(A.a([],q),p)),a,!1,!1,!1,!1,new A.bu(A.a([],q),p),t.x5.h("B7<by.T>")))
return new A.y4(new A.yz(A.aq7(new A.Gk(A.X6(r,A.atj(new A.NR(new A.yA(k,h),h),new A.xL(A.y(t.l5,t.UJ)))),h),"<Default WidgetsApp Shortcuts>",s),h),g,h)}}
A.alW.prototype={
$1(a){var s=this.a.a.Q
s.toString
return s},
$S:16}
A.alZ.prototype={
$0(){this.a.r=this.b},
$S:0}
A.alX.prototype={
$2(a,b){return this.a.a.e.$1(b)},
$S:115}
A.alY.prototype={
$1(a){return this.b.a.ch.$2(a,this.a.a)},
$S:16}
A.Wm.prototype={}
A.pg.prototype={
H(){return"ConnectionState."+this.b}}
A.fz.prototype={
j(a){var s=this
return"AsyncSnapshot("+s.a.j(0)+", "+A.h(s.b)+", "+A.h(s.c)+", "+A.h(s.d)+")"},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return s.$ti.b(b)&&b.a===s.a&&J.f(b.b,s.b)&&J.f(b.c,s.c)&&b.d==s.d},
gu(a){return A.Y(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.pG.prototype={
X(){return new A.Am(B.i,this.$ti.h("Am<1>"))}}
A.Am.prototype={
a2(){var s=this
s.ag()
s.a.toString
s.e=new A.fz(B.nL,null,null,null,s.$ti.h("fz<1>"))
s.Ij()},
b4(a){var s,r=this
r.bx(a)
if(a.c!=r.a.c){if(r.d!=null){r.d=null
s=r.e
s===$&&A.b()
r.e=new A.fz(B.nL,s.b,s.c,s.d,s.$ti)}r.Ij()}},
G(a){var s,r=this.a
r.toString
s=this.e
s===$&&A.b()
return r.d.$2(a,s)},
m(){this.d=null
this.aj()},
Ij(){var s,r=this,q=r.a.c
if(q!=null){s=r.d=new A.C()
q.e9(new A.agZ(r,s),new A.ah_(r,s),t.H)
q=r.e
q===$&&A.b()
if(q.a!==B.bG)r.e=new A.fz(B.Ge,q.b,q.c,q.d,q.$ti)}}}
A.agZ.prototype={
$1(a){var s=this.a
if(s.d===this.b)s.a7(new A.agY(s,a))},
$S(){return this.a.$ti.h("au(1)")}}
A.agY.prototype={
$0(){var s=this.a
s.e=new A.fz(B.bG,this.b,null,null,s.$ti.h("fz<1>"))},
$S:0}
A.ah_.prototype={
$2(a,b){var s=this.a
if(s.d===this.b)s.a7(new A.agX(s,a,b))},
$S:30}
A.agX.prototype={
$0(){var s=this.a
s.e=new A.fz(B.bG,null,this.b,this.c,s.$ti.h("fz<1>"))},
$S:0}
A.p1.prototype={
X(){return new A.zV(B.i)}}
A.zV.prototype={
a2(){this.ag()
this.IH()},
b4(a){this.bx(a)
this.IH()},
IH(){this.e=new A.d0(this.gTA(),this.a.c,null,t.Jc)},
m(){var s,r,q=this.d
if(q!=null)for(q=A.jG(q,q.r);q.t();){s=q.d
r=this.d.i(0,s)
r.toString
s.F(0,r)}this.aj()},
TB(a){var s,r=this,q=a.a,p=r.d
if(p==null)p=r.d=A.y(t.I_,t.O)
p.k(0,q,r.UR(q))
p=r.d.i(0,q)
p.toString
q.Y(0,p)
if(!r.f){r.f=!0
s=r.G_()
if(s!=null)r.IS(s)
else $.bS.cy$.push(new A.afI(r))}return!1},
G_(){var s={},r=this.c
r.toString
s.a=null
r.b0(new A.afN(s))
return t.xO.a(s.a)},
IS(a){var s,r
this.c.toString
s=this.f
r=this.e
r===$&&A.b()
a.EQ(t.Fw.a(A.aDp(r,s)))},
UR(a){return new A.afM(this,a)},
G(a){var s=this.f,r=this.e
r===$&&A.b()
return new A.w5(s,r,null)}}
A.afI.prototype={
$1(a){var s,r=this.a
if(r.c==null)return
s=r.G_()
s.toString
r.IS(s)},
$S:2}
A.afN.prototype={
$1(a){this.a.a=a},
$S:9}
A.afM.prototype={
$0(){var s=this.a
s.d.A(0,this.b)
if(s.d.a===0)if($.bS.dy$.a<3)s.a7(new A.afK(s))
else{s.f=!1
A.eb(new A.afL(s))}},
$S:0}
A.afK.prototype={
$0(){this.a.f=!1},
$S:0}
A.afL.prototype={
$0(){var s=this.a
if(s.c!=null&&s.d.a===0)s.a7(new A.afJ(s))},
$S:0}
A.afJ.prototype={
$0(){},
$S:0}
A.q_.prototype={}
A.Ij.prototype={}
A.kN.prototype={
lT(){var s=new A.Ij($.bO())
this.e0$=s
this.c.dn(new A.q_(s))},
qi(){var s,r=this
if(r.gnk()){if(r.e0$==null)r.lT()}else{s=r.e0$
if(s!=null){s.aG()
s.dG()
r.e0$=null}}},
G(a){if(this.gnk()&&this.e0$==null)this.lT()
return B.a2C}}
A.RK.prototype={
G(a){throw A.c(A.Hu("Widgets that mix AutomaticKeepAliveClientMixin into their State must call super.build() but must ignore the return value of the superclass."))}}
A.Va.prototype={
Db(a,b){},
n4(a){A.avG(this,new A.alH(this,a))}}
A.alH.prototype={
$1(a){var s=a.z
if(s!=null&&s.C(0,this.a))a.bf()},
$S:9}
A.alG.prototype={
$1(a){A.avG(a,this.a)},
$S:9}
A.Vb.prototype={
c_(a){var s=A.ht(t.h,t.X)
return new A.Va(s,this,B.a9)}}
A.fb.prototype={
cg(a){return this.w!==a.w}}
A.qd.prototype={
aH(a){var s=this.e
s=new A.Md(B.d.b5(A.WC(s,0,1)*255),s,!1,null,A.ay())
s.aK()
s.saQ(null)
return s},
aM(a,b){b.sn8(0,this.e)
b.stb(!1)}}
A.uG.prototype={
aH(a){var s=new A.M1(this.e,this.f,this.r,!1,!1,null,A.ay())
s.aK()
s.saQ(null)
return s},
aM(a,b){b.suT(this.e)
b.sL3(this.f)
b.suY(this.r)
b.cA=b.bB=!1},
oZ(a){a.suT(null)
a.sL3(null)}}
A.pc.prototype={
aH(a){var s=new A.LY(null,this.f,null,A.ay())
s.aK()
s.saQ(null)
return s},
aM(a,b){b.soH(null)
b.smp(this.f)},
oZ(a){a.soH(null)}}
A.Ea.prototype={
aH(a){var s=new A.LX(this.e,this.f,null,A.ay())
s.aK()
s.saQ(null)
return s},
aM(a,b){b.soH(this.e)
b.smp(this.f)},
oZ(a){a.soH(null)}}
A.Lr.prototype={
aH(a){var s=this,r=new A.Mg(s.e,s.r,s.w,s.y,s.x,null,s.f,null,A.ay())
r.aK()
r.saQ(null)
return r},
aM(a,b){var s=this
b.sdE(0,s.e)
b.smp(s.f)
b.sa2x(0,s.r)
b.siG(0,s.w)
b.sap(0,s.x)
b.shv(0,s.y)}}
A.Ls.prototype={
aH(a){var s=this,r=new A.Mh(s.r,s.x,s.w,s.e,s.f,null,A.ay())
r.aK()
r.saQ(null)
return r},
aM(a,b){var s=this
b.soH(s.e)
b.smp(s.f)
b.siG(0,s.r)
b.sap(0,s.w)
b.shv(0,s.x)}}
A.rj.prototype={
aH(a){var s=this,r=A.dI(a),q=new A.Mq(s.w,null,A.ay())
q.aK()
q.saQ(null)
q.sbE(0,s.e)
q.see(s.r)
q.sbJ(r)
q.smN(s.x)
q.sMp(0,s.f)
return q},
aM(a,b){var s=this
b.sbE(0,s.e)
b.sMp(0,s.f)
b.see(s.r)
b.sbJ(A.dI(a))
b.bB=s.w
b.smN(s.x)}}
A.Hn.prototype={
aH(a){var s=new A.xR(this.e,this.f,A.dI(a),B.h,null,A.ay())
s.aK()
s.saQ(null)
return s},
aM(a,b){b.sAn(this.e)
b.see(this.f)
b.sbJ(A.dI(a))
if(B.h!==b.ek){b.ek=B.h
b.az()
b.b2()}}}
A.HE.prototype={
aH(a){var s=new A.M6(this.e,this.f,null,A.ay())
s.aK()
s.saQ(null)
return s},
aM(a,b){b.sa9a(this.e)
b.R=this.f}}
A.iG.prototype={
aH(a){var s=new A.Me(this.e,A.dI(a),null,A.ay())
s.aK()
s.saQ(null)
return s},
aM(a,b){b.sde(0,this.e)
b.sbJ(A.dI(a))}}
A.eF.prototype={
aH(a){var s=new A.Mj(this.f,this.r,this.e,A.dI(a),null,A.ay())
s.aK()
s.saQ(null)
return s},
aM(a,b){b.see(this.e)
b.sa9r(this.f)
b.sa5Y(this.r)
b.sbJ(A.dI(a))}}
A.ic.prototype={}
A.uI.prototype={
aH(a){var s=new A.M2(this.e,null,A.ay())
s.aK()
s.saQ(null)
return s},
aM(a,b){b.szL(this.e)}}
A.wa.prototype={
ox(a){var s,r,q=a.e
q.toString
t.Wz.a(q)
s=this.f
if(q.e!==s){q.e=s
r=a.c
if(r instanceof A.z)r.a6()}}}
A.uF.prototype={
aH(a){var s=new A.M0(this.e,0,null,null,A.ay())
s.aK()
s.L(0,null)
return s},
aM(a,b){b.szL(this.e)}}
A.lO.prototype={
aH(a){return A.auq(A.p5(this.f,this.e))},
aM(a,b){b.sJq(A.p5(this.f,this.e))},
cd(){var s,r=this,q=r.e
if(q===1/0&&r.f===1/0)s="SizedBox.expand"
else s=q===0&&r.f===0?"SizedBox.shrink":"SizedBox"
q=r.a
return q==null?s:s+"-"+q.j(0)}}
A.hh.prototype={
aH(a){return A.auq(this.e)},
aM(a,b){b.sJq(this.e)}}
A.It.prototype={
aH(a){var s=new A.M9(this.e,this.f,null,A.ay())
s.aK()
s.saQ(null)
return s},
aM(a,b){b.sa79(0,this.e)
b.sa76(0,this.f)}}
A.xb.prototype={
aH(a){var s=new A.Mc(this.e,null,A.ay())
s.aK()
s.saQ(null)
return s},
aM(a,b){b.suG(this.e)},
c_(a){return new A.RR(this,B.a9)}}
A.RR.prototype={}
A.iU.prototype={
aH(a){var s=A.dI(a)
s=new A.xX(this.e,s,this.r,this.w,A.ay(),0,null,null,A.ay())
s.aK()
s.L(0,null)
return s},
aM(a,b){var s
b.see(this.e)
s=A.dI(a)
b.sbJ(s)
s=this.r
if(b.b9!==s){b.b9=s
b.a6()}s=this.w
if(s!==b.bh){b.bh=s
b.az()
b.b2()}}}
A.jR.prototype={
ox(a){var s,r,q,p=this,o=a.e
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
if(q instanceof A.z)q.a6()}}}
A.LB.prototype={
G(a){var s,r,q,p=this,o=null,n=a.a4(t.I)
n.toString
s=p.c
r=p.e
switch(n.w.a){case 0:break
case 1:q=s
s=r
r=q
break
default:s=o
r=s}return A.eR(p.f,p.x,o,o,r,s,p.d,p.r)}}
A.vr.prototype={
gZq(){switch(this.e.a){case 0:return!0
case 1:var s=this.w
return s===B.aH||s===B.Gf}},
vu(a){var s=this.x
s=this.gZq()?A.dI(a):null
return s},
aH(a){var s=this
return A.aFh(B.h,s.w,s.e,s.f,s.r,s.z,s.vu(a),s.y)},
aM(a,b){var s=this,r=s.e
if(b.M!==r){b.M=r
b.a6()}r=s.f
if(b.am!==r){b.am=r
b.a6()}r=s.r
if(b.ah!==r){b.ah=r
b.a6()}r=s.w
if(b.aE!==r){b.aE=r
b.a6()}r=s.vu(a)
if(b.b9!=r){b.b9=r
b.a6()}r=s.y
if(b.bh!==r){b.bh=r
b.a6()}if(B.h!==b.cY){b.cY=B.h
b.az()
b.b2()}}}
A.My.prototype={}
A.pe.prototype={}
A.pE.prototype={
ox(a){var s,r,q,p=a.e
p.toString
t.US.a(p)
s=this.f
if(p.e!==s){p.e=s
r=!0}else r=!1
s=this.r
if(p.f!==s){p.f=s
r=!0}if(r){q=a.c
if(q instanceof A.z)q.a6()}}}
A.vi.prototype={}
A.Ms.prototype={
aH(a){var s,r,q,p=this,o=null,n=p.e,m=p.r
if(m==null){m=a.a4(t.I)
m.toString
m=m.w}s=p.x
r=A.apG(a)
q=s===B.bz?"\u2026":o
s=new A.xT(A.NX(q,r,p.z,p.as,n,p.f,m,p.ax,p.y,p.at),p.w,s,p.ch,0,o,o,A.ay())
s.aK()
s.L(0,o)
s.xb(n)
s.sq5(p.ay)
return s},
aM(a,b){var s,r=this
b.scF(0,r.e)
b.sCa(0,r.f)
s=r.r
if(s==null){s=a.a4(t.I)
s.toString
s=s.w}b.sbJ(s)
b.sON(r.w)
b.sa7E(0,r.x)
b.sCb(r.y)
b.sB5(r.z)
b.sOW(r.as)
b.sCc(r.at)
b.sNa(r.ax)
s=A.apG(a)
b.sB0(0,s)
b.sq5(r.ay)
b.sOl(r.ch)}}
A.a9C.prototype={
$1(a){return!0},
$S:44}
A.LN.prototype={
aH(a){var s,r,q=this,p=q.d
p=p==null?null:p.d6(0)
s=q.ch
if(s||!1){r=a.a4(t.I)
r.toString
r=r.w}else r=null
r=new A.M7(p,q.e,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at,q.ax,q.ay,q.CW,s,r,!1,A.ay())
r.aK()
r.a1m()
return r},
aM(a,b){var s=this,r=s.d
b.sfK(0,r==null?null:r.d6(0))
b.aE=s.e
b.sbv(0,s.f)
b.sc0(0,s.r)
b.sOc(0,s.w)
b.sap(0,s.x)
b.sn8(0,s.y)
b.sa37(s.Q)
b.sAn(s.as)
b.see(s.at)
b.sa8t(0,s.ax)
b.sa2L(s.ay)
r=s.ch
b.sa74(r)
if(r||!1){r=a.a4(t.I)
r.toString
r=r.w}else r=null
b.sbJ(r)
b.sAL(s.CW)
b.sAN(!1)
b.smN(s.z)},
oZ(a){a.sfK(0,null)}}
A.Iu.prototype={
aH(a){var s=this,r=null,q=new A.Mi(s.e,r,s.r,r,s.x,s.y,r,r,s.as,s.at,r,A.ay())
q.aK()
q.saQ(r)
return q},
aM(a,b){var s=this
b.a8=s.e
b.bz=null
b.aO=s.r
b.a9=null
b.cp=s.x
b.cK=s.y
b.pk=b.eh=null
b.mC=s.as
b.v=s.at}}
A.Kv.prototype={
aH(a){var s=this,r=new A.Mb(!0,s.e,s.f,s.r,s.w,B.aQ,null,A.ay())
r.aK()
r.saQ(null)
return r},
aM(a,b){var s,r=this
b.bz=r.e
b.aO=r.f
b.a9=r.r
s=r.w
if(!b.cp.l(0,s)){b.cp=s
b.az()}if(b.v!==B.aQ){b.v=B.aQ
b.az()}}}
A.hJ.prototype={
aH(a){var s=new A.Mk(null,A.ay())
s.aK()
s.saQ(null)
return s}}
A.hw.prototype={
aH(a){var s=new A.xS(this.e,this.f,null,A.ay())
s.aK()
s.saQ(null)
return s},
aM(a,b){b.sLr(this.e)
b.sAF(this.f)}}
A.Du.prototype={
aH(a){var s=new A.xN(!1,null,null,A.ay())
s.aK()
s.saQ(null)
return s},
aM(a,b){b.sJf(!1)
b.sAF(null)}}
A.yu.prototype={
aH(a){var s=this,r=new A.xW(s.e,s.f,s.r,!1,s.Gb(a),null,A.ay())
r.aK()
r.saQ(null)
r.IE(r.v)
return r},
Gb(a){var s,r=this.e,q=r.p4
if(q!=null)return q
if(r.fx==null){if(r.go==null)r=r.p2!=null
else r=!0
s=r}else s=!0
if(!s)return null
return A.dI(a)},
aM(a,b){var s=this
b.sa3l(s.f)
b.sa4N(s.r)
b.sa4K(!1)
b.sMA(s.e)
b.sbJ(s.Gb(a))}}
A.Kp.prototype={
aH(a){var s=new A.Ma(null,A.ay())
s.aK()
s.saQ(null)
return s}}
A.DS.prototype={
aH(a){var s=new A.LW(!0,null,A.ay())
s.aK()
s.saQ(null)
return s},
aM(a,b){b.sa2w(!0)}}
A.vf.prototype={
aH(a){var s=new A.M5(this.e,null,A.ay())
s.aK()
s.saQ(null)
return s},
aM(a,b){b.sa4L(this.e)}}
A.vS.prototype={
aH(a){var s=new A.M8(this.e,null,A.ay())
s.aK()
s.saQ(null)
return s},
aM(a,b){b.sAG(0,this.e)}}
A.jE.prototype={
G(a){return this.c}}
A.ib.prototype={
G(a){return this.c.$1(a)}}
A.ur.prototype={
aH(a){var s=new A.Bb(this.e,B.aQ,null,A.ay())
s.aK()
s.saQ(null)
return s},
aM(a,b){t.ri.a(b).sap(0,this.e)}}
A.Bb.prototype={
sap(a,b){if(b.l(0,this.a8))return
this.a8=b
this.az()},
aF(a,b){var s,r,q,p,o,n,m=this
if(m.k3.Oa(0,B.R)){s=a.gbR(a)
r=m.k3
q=b.a
p=b.b
o=r.a
r=r.b
n=$.as().ba()
n.sap(0,m.a8)
s.cz(new A.E(q,p,q+o,p+r),n)}s=m.B$
if(s!=null)a.eP(s,b)}}
A.am0.prototype={
$0(){var s,r,q=this,p=q.b
if(p==null||t.d.b(q.c)){p=q.a.y1$
p===$&&A.b()
p=p.e
p.toString
s=q.c
s=s.gbL(s)
r=A.aB5()
p.c5(r,s)
p=r}return p},
$S:296}
A.am1.prototype={
$1(a){var s=a==null?t.K.a(a):a
return this.a.jN(s)},
$S:297}
A.dB.prototype={
jw(){return A.bQ(!1,t.y)},
oY(a){return A.bQ(!1,t.y)},
a4r(a){var s=a.a
s.toString
return this.oY(s)},
tC(){},
Kj(){},
Ki(){},
zO(a){},
Kh(a){}}
A.zM.prototype={
a26(a){return this.bc$.push(a)},
a5o(){this.a4w($.aX().a.f)},
a4w(a){var s,r,q
for(s=this.bc$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].zO(a)},
uc(){var s=0,r=A.a5(t.H),q,p=this,o,n,m
var $async$uc=A.a1(function(a,b){if(a===1)return A.a2(b,r)
while(true)switch(s){case 0:o=A.aF(p.bc$,!0,t.X5),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.a9(o[m].jw(),$async$uc)
case 6:if(b){s=1
break}case 4:++m
s=3
break
case 5:A.adY()
case 1:return A.a3(q,r)}})
return A.a4($async$uc,r)},
ud(a){return this.a5B(a)},
a5B(a){var s=0,r=A.a5(t.H),q,p=this,o,n,m
var $async$ud=A.a1(function(b,c){if(b===1)return A.a2(c,r)
while(true)switch(s){case 0:o=A.aF(p.bc$,!0,t.X5),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.a9(o[m].oY(a),$async$ud)
case 6:if(c){s=1
break}case 4:++m
s=3
break
case 5:case 1:return A.a3(q,r)}})
return A.a4($async$ud,r)},
r9(a){return this.XU(a)},
XU(a){var s=0,r=A.a5(t.H),q,p=this,o,n,m,l
var $async$r9=A.a1(function(b,c){if(b===1)return A.a2(c,r)
while(true)switch(s){case 0:o=A.aF(p.bc$,!0,t.X5),n=o.length,m=J.aN(a),l=0
case 3:if(!(l<n)){s=5
break}s=6
return A.a9(o[l].a4r(new A.qF(A.bT(m.i(a,"location")),m.i(a,"state"))),$async$r9)
case 6:if(c){s=1
break}case 4:++l
s=3
break
case 5:case 1:return A.a3(q,r)}})
return A.a4($async$r9,r)},
Xy(a){switch(a.a){case"popRoute":return this.uc()
case"pushRoute":return this.ud(A.bT(a.b))
case"pushRouteInformation":return this.r9(t.G.a(a.b))}return A.bQ(null,t.z)},
WU(){this.A8()},
Od(a){A.c3(B.x,new A.aff(this,a))},
$iar:1,
$idT:1}
A.am_.prototype={
$1(a){var s,r,q=$.bS
q.toString
s=this.a
r=s.a
r.toString
q.MT(r)
s.a=null
this.b.fe$.eF(0)},
$S:104}
A.aff.prototype={
$0(){var s,r,q=this.a,p=q.da$
q.cZ$=!0
s=q.y1$
s===$&&A.b()
s=s.e
s.toString
r=q.an$
r.toString
q.da$=new A.nM(this.b,s,"[root]",new A.l6(s,t.bT),t.Cg).a2r(r,t.NT.a(p))
if(p==null)$.bS.A8()},
$S:0}
A.nM.prototype={
c_(a){return new A.lG(this,B.a9,this.$ti.h("lG<1>"))},
aH(a){return this.d},
aM(a,b){},
a2r(a,b){var s,r={}
r.a=b
if(b==null){a.M1(new A.a90(r,this,a))
s=r.a
s.toString
a.oC(s,new A.a91(r))}else{b.av=this
b.eN()}r=r.a
r.toString
return r},
cd(){return this.e}}
A.a90.prototype={
$0(){var s=this.b,r=A.aFi(s,s.$ti.c)
this.a.a=r
r.r=this.c},
$S:0}
A.a91.prototype={
$0(){var s=this.a.a
s.toString
s.Ec(null,null)
s.rw()},
$S:0}
A.lG.prototype={
b0(a){var s=this.ai
if(s!=null)a.$1(s)},
iM(a){this.ai=null
this.kk(a)},
fn(a,b){this.Ec(a,b)
this.rw()},
bo(a,b){this.lJ(0,b)
this.rw()},
hm(){var s=this,r=s.av
if(r!=null){s.av=null
s.lJ(0,s.$ti.h("nM<1>").a(r))
s.rw()}s.wb()},
rw(){var s,r,q,p,o,n,m,l=this
try{o=l.ai
n=l.f
n.toString
l.ai=l.dC(o,l.$ti.h("nM<1>").a(n).c,B.ne)}catch(m){s=A.ai(m)
r=A.az(m)
o=A.bt("attaching to the render tree")
q=new A.bP(s,r,"widgets library",o,null,!1)
A.e1(q)
p=A.vd(q)
l.ai=l.dC(null,p,B.ne)}},
ga5(){return this.$ti.h("aM<1>").a(A.bp.prototype.ga5.call(this))},
iQ(a,b){var s=this.$ti
s.h("aM<1>").a(A.bp.prototype.ga5.call(this)).saQ(s.c.a(a))},
iU(a,b,c){},
j1(a,b){this.$ti.h("aM<1>").a(A.bp.prototype.ga5.call(this)).saQ(null)}}
A.Ov.prototype={$iar:1}
A.Cf.prototype={
fi(){this.P2()
$.eK=this
var s=$.aX()
s.Q=this.gXF()
s.as=$.ad},
Cn(){this.P5()
this.xf()}}
A.Cg.prototype={
fi(){this.Sh()
$.bS=this},
iP(){this.P3()}}
A.Ch.prototype={
fi(){var s,r,q,p,o=this
o.Sj()
$.hM=o
o.am$!==$&&A.eD()
o.am$=B.EY
s=new A.y1(A.bc(t.z4),$.bO())
B.iX.nt(s.gZg())
o.ah$=s
s=t.v3
r=new A.a3L(A.y(s,t.bd),A.bc(t.SQ),A.a([],t.sA))
o.hf$!==$&&A.eD()
o.hf$=r
q=$.aoz()
p=A.a([],t.K0)
o.M$!==$&&A.eD()
s=o.M$=new A.Ik(r,q,p,A.bc(s))
p=$.aX()
p.at=s.ga5k()
p.ax=$.ad
B.Ds.vM(s.ga5D())
s=$.atH
if(s==null)s=$.atH=A.a([],t.iL)
s.push(o.gTF())
B.Du.vM(new A.am1(o))
B.Dt.vM(o.gXu())
B.ci.nt(o.gXD())
$.ayC()
o.a85()},
iP(){this.Sk()}}
A.Ci.prototype={
fi(){this.Sl()
$.fm=this
var s=t.K
this.he$=new A.a4C(A.y(s,t.Sc),A.y(s,t.B6),A.y(s,t.pt))},
pv(){this.Ra()
var s=this.he$
s===$&&A.b()
s.Z(0)},
jN(a){return this.a5J(a)},
a5J(a){var s=0,r=A.a5(t.H),q,p=this
var $async$jN=A.a1(function(b,c){if(b===1)return A.a2(c,r)
while(true)switch(s){case 0:s=3
return A.a9(p.Rb(a),$async$jN)
case 3:switch(A.bT(J.aY(t.a.a(a),"type"))){case"fontsChange":p.Af$.aG()
break}s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$jN,r)}}
A.Cj.prototype={
fi(){this.So()
$.aaR=this
this.Ac$=$.aX().a.a}}
A.Ck.prototype={
fi(){var s,r,q,p,o=this
o.Sp()
$.lH=o
s=t.TT
o.y1$=new A.Lu(o.ga4F(),o.gY8(),o.gYc(),o.gYa(),A.a([],s),A.a([],s),A.a([],s),A.bc(t.F))
s=$.aX()
s.f=o.ga5q()
r=s.r=$.ad
s.fy=o.ga5S()
s.go=r
s.k2=o.ga5w()
s.k3=r
s.p1=o.gY6()
s.p2=r
s.p3=o.gY4()
s.p4=r
r=new A.xY(B.R,o.K9(),$.cG(),null,A.ay())
r.aK()
r.saQ(null)
q=o.y1$
q===$&&A.b()
q.sa8K(r)
r=o.y1$.e
r.Q=r
q=t.W
q.a(A.M.prototype.gbI.call(r)).r.push(r)
p=r.IR()
r.ch.saW(0,p)
q.a(A.M.prototype.gbI.call(r)).z.push(r)
o.OD(s.a.c)
o.cx$.push(o.gXB())
s=o.xr$
if(s!=null)s.m()
s=t.S
r=$.bO()
o.xr$=new A.Kw(new A.a6J(B.m9,A.y(s,t.ZA)),A.y(s,t.xg),r)
o.cy$.push(o.gYp())},
iP(){this.Sm()},
zY(a,b,c){this.xr$.a9l(b,new A.am0(this,c,b))
this.Pt(0,b,c)},
iY(){var s=0,r=A.a5(t.H),q=[],p=this,o
var $async$iY=A.a1(function(a,b){if(a===1)return A.a2(b,r)
while(true)switch(s){case 0:s=2
return A.a9(p.P4(),$async$iY)
case 2:o=$.asw
if((o==null?null:o.a)==null)try{o=p.y1$
o===$&&A.b()
o.e.eQ()}finally{}p.vD()
s=3
return A.a9(p.gKF(),$async$iY)
case 3:return A.a3(null,r)}})
return A.a4($async$iY,r)}}
A.Cl.prototype={
iP(){this.Sr()},
Au(){var s,r,q
this.QG()
for(s=this.bc$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].tC()},
AA(){var s,r,q
this.QI()
for(s=this.bc$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].Kj()},
Aw(){var s,r,q
this.QH()
for(s=this.bc$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].Ki()},
u9(a){var s,r,q
this.QX(a)
for(s=this.bc$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].Kh(a)},
pv(){var s,r
this.Sn()
for(s=this.bc$.length,r=0;r<s;++r);},
A3(){var s,r,q=this,p={}
p.a=null
if(q.bH$){s=new A.am_(p,q)
p.a=s
$.bS.a2g(s)}try{r=q.da$
if(r!=null)q.an$.a2B(r)
q.QF()
q.an$.a4T()}finally{}r=q.bH$=!1
p=p.a
if(p!=null)r=!(q.bg$||q.bA$===0)
if(r){q.bH$=!0
r=$.bS
r.toString
p.toString
r.MT(p)}},
iY(){var s=this.da$
if(s!=null)this.an$.a8a(s,$.asw)
return this.Ss()}}
A.mM.prototype={
aH(a){var s=new A.M3(this.e,this.f,A.ark(a,null),null,A.ay())
s.aK()
s.saQ(null)
return s},
aM(a,b){b.sa4b(this.e)
b.szq(A.ark(a,null))
b.sbL(0,this.f)}}
A.pi.prototype={
gZV(){var s,r=this.r
if(r==null||r.gde(r)==null)return this.e
s=r.gde(r)
r=this.e
if(r==null)return s
s.toString
return r.D(0,s)},
G(a){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){s=o.x
if(s!=null)s=!(s.a>=s.b&&s.c>=s.d)
else s=!0}else s=!1
if(s)m=A.aDw(new A.hh(B.mG,n,n),0,0)
else{s=o.d
if(s!=null)m=new A.eF(s,n,n,m,n)}r=o.gZV()
if(r!=null)m=new A.iG(r,m,n)
s=o.f
if(s!=null)m=new A.ur(s,m,n)
s=o.as
if(s!==B.h){q=A.dI(a)
p=o.r
p.toString
m=A.aoW(m,s,new A.PI(q==null?B.w:q,p))}s=o.r
if(s!=null)m=A.ef(m,s,B.a6)
s=o.x
if(s!=null)m=new A.hh(s,m,n)
s=o.y
if(s!=null)m=new A.iG(s,m,n)
m.toString
return m}}
A.PI.prototype={
vq(a){return this.c.vr(new A.E(0,0,0+a.a,0+a.b),this.b)},
vQ(a){return!a.c.l(0,this.c)||a.b!==this.b}}
A.po.prototype={
cg(a){return!J.f(this.w,a.w)||!J.f(this.x,a.x)}}
A.RL.prototype={
G(a){throw A.c(A.Hu("A DefaultSelectionStyle constructed with DefaultSelectionStyle.fallback cannot be incorporated into the widget tree, it is meant only to provide a fallback value returned by DefaultSelectionStyle.of() when no enclosing default selection style is present in a BuildContext."))}}
A.Gk.prototype={
Wd(){var s=$.ayf()
return s},
G(a){var s=this.c,r=this.Wd()
if(r!=null)s=A.aq7(s,"<Web Disabling Text Editing Shortcuts>",r)
return A.aq7(s,"<Default Text Editing Shortcuts>",A.aBR())}}
A.Gu.prototype={
gaD(a){var s=this.a
if(s==null)return null
s=s.c
s.toString
return s}}
A.ps.prototype={
X(){return new A.A8(A.xE(null),A.xE(null),B.i)},
a59(a,b,c){return this.d.$3(a,b,c)},
a8H(a,b,c){return this.e.$3(a,b,c)}}
A.A8.prototype={
a2(){var s,r=this
r.ag()
s=r.a.c
r.d=s.gb6(s)
r.a.c.cU(r.gwp())
r.FL()},
EN(a){var s,r=this,q=r.d
q===$&&A.b()
s=r.Ub(a,q)
r.d=s
if(q!==s)r.FL()},
b4(a){var s,r,q=this
q.bx(a)
s=a.c
if(s!==q.a.c){r=q.gwp()
s.cc(r)
q.a.c.cU(r)
r=q.a.c
q.EN(r.gb6(r))}},
Ub(a,b){switch(a.a){case 0:case 3:return a
case 1:switch(b.a){case 0:case 3:case 1:return a
case 2:return b}break
case 2:switch(b.a){case 0:case 3:case 2:return a
case 1:return b}break}},
FL(){var s=this,r=s.d
r===$&&A.b()
switch(r.a){case 0:case 1:s.e.saS(0,s.a.c)
s.f.saS(0,B.c_)
break
case 2:case 3:s.e.saS(0,B.dc)
s.f.saS(0,new A.fp(s.a.c,new A.bu(A.a([],t.A),t.R),0))
break}},
m(){this.a.c.cc(this.gwp())
this.aj()},
G(a){var s=this.a
return s.a59(a,this.e,s.a8H(a,this.f,s.f))}}
A.jD.prototype={
H(){return"KeyEventResult."+this.b}}
A.OV.prototype={}
A.a2i.prototype={
au(a){var s,r=this.a
if(r.ax===this){if(!r.gjP()){s=r.w
s=s!=null&&s.w===r}else s=!0
if(s)r.Cm(B.CQ)
s=r.w
if(s!=null){if(s.f===r)s.f=null
s.r.A(0,r)}s=r.Q
if(s!=null)s.a_I(0,r)
r.ax=null}},
C4(a){var s,r=this.a
if(r.ax===this){s=r.e
s.toString
a=A.aCO(s,!0);(a==null?r.e.r.f.e:a).yh(r)}},
MU(){return this.C4(null)}}
A.zG.prototype={
H(){return"UnfocusDisposition."+this.b}}
A.cY.prototype={
gey(){var s,r,q
if(this.a)return!0
for(s=this.gh5(),r=s.length,q=0;q<r;++q)s[q].toString
return!1},
sey(a){var s,r=this
if(a!==r.a){r.a=a
s=r.w
if(s!=null){s.rl()
s.r.D(0,r)}}},
gcD(){var s,r,q,p
if(!this.b)return!1
s=this.ge_()
if(s!=null&&!s.gcD())return!1
for(r=this.gh5(),q=r.length,p=0;p<q;++p)r[p].toString
return!0},
scD(a){var s,r=this
if(a!==r.b){r.b=a
if(r.gjO()&&!a)r.Cm(B.CQ)
s=r.w
if(s!=null){s.rl()
s.r.D(0,r)}}},
smt(a){return},
smu(a){},
goR(){var s,r,q,p,o=this.y
if(o==null){s=A.a([],t.bp)
for(o=this.as,r=o.length,q=0;q<o.length;o.length===r||(0,A.P)(o),++q){p=o[q]
B.c.L(s,p.goR())
s.push(p)}this.y=s
o=s}return o},
gqf(){var s=this.goR()
return new A.aR(s,new A.a2j(),A.ap(s).h("aR<1>"))},
gh5(){var s,r,q=this.x
if(q==null){s=A.a([],t.bp)
r=this.Q
for(;r!=null;){s.push(r)
r=r.Q}this.x=s
q=s}return q},
gjO(){if(!this.gjP()){var s=this.w
if(s==null)s=null
else{s=s.f
s=s==null?null:B.c.C(s.gh5(),this)}s=s===!0}else s=!0
return s},
gjP(){var s=this.w
return(s==null?null:s.f)===this},
gld(){return this.ge_()},
ge_(){var s,r,q,p
for(s=this.gh5(),r=s.length,q=0;q<r;++q){p=s[q]
if(p instanceof A.n_)return p}return null},
gaY(a){var s,r=this.e.ga5(),q=r.bM(0,null),p=r.gkg(),o=A.cM(q,new A.r(p.a,p.b))
p=r.bM(0,null)
q=r.gkg()
s=A.cM(p,new A.r(q.c,q.d))
return new A.E(o.a,o.b,s.a,s.b)},
Cm(a){var s,r,q=this
if(!q.gjO()){s=q.w
s=s==null||s.w!==q}else s=!1
if(s)return
r=q.ge_()
if(r==null)return
switch(a.a){case 0:if(r.gcD())B.c.Z(r.dy)
for(;!r.gcD();){r=r.ge_()
if(r==null){s=q.w
r=s==null?null:s.e}}r.jh(!1)
break
case 1:if(r.gcD())B.c.A(r.dy,q)
for(;!r.gcD();){s=r.ge_()
if(s!=null)B.c.A(s.dy,r)
r=r.ge_()
if(r==null){s=q.w
r=s==null?null:s.e}}r.jh(!0)
break}},
a9c(){return this.Cm(B.a1w)},
GU(a){var s=this,r=s.w
if(r!=null){if(r.f===s)r.w=null
else{r.w=s
r.rl()}return}a.mb()
a.y3()
if(a!==s)s.y3()},
Hu(a,b,c){var s,r,q
if(c){s=b.ge_()
if(s!=null)B.c.A(s.dy,b)}b.Q=null
B.c.A(this.as,b)
for(s=this.gh5(),r=s.length,q=0;q<r;++q)s[q].y=null
this.y=null},
a_I(a,b){return this.Hu(a,b,!0)},
VY(a){var s,r,q,p
this.w=a
for(s=this.goR(),r=s.length,q=0;q<r;++q){p=s[q]
p.w=a
p.x=null}},
yh(a){var s,r,q,p,o,n=this
if(a.Q===n)return
s=a.ge_()
r=a.gjO()
q=a.Q
if(q!=null)q.Hu(0,a,s!=n.gld())
n.as.push(a)
a.Q=n
a.x=null
a.VY(n.w)
for(q=a.gh5(),p=q.length,o=0;o<p;++o)q[o].y=null
if(r){q=n.w
if(q!=null){q=q.f
if(q!=null)q.mb()}}if(s!=null&&a.e!=null&&a.ge_()!==s){q=a.e
q.toString
q=A.atk(q)
if(q!=null)q.zn(a,s)}if(a.ay){a.jh(!0)
a.ay=!1}},
m(){var s=this.ax
if(s!=null)s.au(0)
this.dG()},
y3(){var s=this
if(s.Q==null)return
if(s.gjP())s.mb()
s.aG()},
v9(){this.jh(!0)},
jh(a){var s,r=this
if(!r.gcD())return
if(r.Q==null){r.ay=!0
return}r.mb()
if(r.gjP()){s=r.w.w
s=s==null||s===r}else s=!1
if(s)return
r.GU(r)},
mb(){var s,r,q,p,o,n
for(s=B.c.gad(this.gh5()),r=new A.rr(s,t.YE),q=t.l5,p=this;r.t();p=o){o=q.a(s.gI(s))
n=o.dy
B.c.A(n,p)
n.push(p)}},
cd(){var s,r,q,p=this
p.gjO()
s=p.gjO()&&!p.gjP()?"[IN FOCUS PATH]":""
r=s+(p.gjP()?"[PRIMARY FOCUS]":"")
s=A.c4(p)
q=r.length!==0?"("+r+")":""
return"<optimized out>#"+s+q},
$iah:1}
A.a2j.prototype={
$1(a){return!a.gey()&&a.gcD()},
$S:14}
A.n_.prototype={
gld(){return this},
gqf(){if(!this.gcD())return B.E5
return A.cY.prototype.gqf.call(this)},
ns(a){if(a.Q==null)this.yh(a)
if(this.gjO())a.jh(!0)
else a.mb()},
jh(a){var s,r,q=this,p=q.dy
while(!0){if((p.length!==0?B.c.gT(p):null)!=null)s=!(p.length!==0?B.c.gT(p):null).gcD()
else s=!1
if(!s)break
p.pop()}r=p.length!==0?B.c.gT(p):null
if(!a||r==null){if(q.gcD()){q.mb()
q.GU(q)}return}r.jh(!0)}}
A.jx.prototype={
H(){return"FocusHighlightMode."+this.b}}
A.Hy.prototype={
H(){return"FocusHighlightStrategy."+this.b}}
A.vx.prototype={
IQ(){var s,r,q=this
switch(0){case 0:s=q.c
if(s==null)return
r=s?B.i0:B.eA
break}s=q.b
if(s==null)s=A.Hz()
q.b=r
if((r==null?A.Hz():r)!==s)q.Zv()},
Zv(){var s,r,q,p,o,n,m,l,k,j=this,i=j.d,h=i.a
if(h.a===0)return
p=A.aF(i,!0,t.Su)
for(i=p.length,o=0;o<i;++o){s=p[o]
try{if(h.P(0,s)){n=j.b
if(n==null)n=A.Hz()
s.$1(n)}}catch(m){r=A.ai(m)
q=A.az(m)
l=j instanceof A.c5?A.d7(j):null
n=A.bt("while dispatching notifications for "+A.aK(l==null?A.b1(j):l).j(0))
k=$.hd()
if(k!=null)k.$1(new A.bP(r,q,"widgets library",n,null,!1))}}},
VX(a){var s,r,q=this
switch(a.gcu(a).a){case 0:case 2:case 3:q.c=!0
s=B.i0
break
case 1:case 4:case 5:q.c=!1
s=B.eA
break
default:s=null}r=q.b
if(s!==(r==null?A.Hz():r))q.IQ()},
Xt(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.c=!1
i.IQ()
s=i.f
if(s==null)return!1
s=A.a([s],t.bp)
B.c.L(s,i.f.gh5())
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
switch(A.aJN(k).a){case 1:break c$1
case 0:r=!0
break
case 2:r=!1
break
default:r=!1}break}s.length===q||(0,A.P)(s);++m}return r},
rl(){if(this.y)return
this.y=!0
A.eb(this.gTS())},
TT(){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.y=!1
s=h.f
for(r=h.x,q=r.length,p=h.e,o=0;o<r.length;r.length===q||(0,A.P)(r),++o){n=r[o]
m=n.a
if(m.Q!=null||m===p)if(m.w===h){l=m.dy
m=(l.length!==0?B.c.gT(l):null)==null&&B.c.C(n.b.gh5(),m)
k=m}else k=!1
else k=!1
if(k)n.b.jh(!0)}B.c.Z(r)
r=h.f
if(r==null&&h.w==null)h.w=p
q=h.w
if(q!=null&&q!==r){if(s==null)j=null
else{r=s.gh5()
r=A.wd(r,A.ap(r).c)
j=r}if(j==null)j=A.bc(t.mx)
r=h.w.gh5()
i=A.wd(r,A.ap(r).c)
r=h.r
r.L(0,i.kT(j))
r.L(0,j.kT(i))
r=h.f=h.w
h.w=null}if(s!=r){if(s!=null)h.r.D(0,s)
r=h.f
if(r!=null)h.r.D(0,r)}for(r=h.r,q=A.kl(r,r.r),p=A.o(q).c;q.t();){m=q.d;(m==null?p.a(m):m).y3()}r.Z(0)
if(s!=h.f)h.aG()},
$iah:1}
A.Qo.prototype={}
A.Qp.prototype={}
A.Qq.prototype={}
A.Qr.prototype={}
A.mZ.prototype={
gMh(){var s=this.w,r=this.e
s=r==null?null:r.r
return s},
gBv(){var s=this.x
if(s==null){s=this.e
s=s==null?null:s.f}return s},
gcD(){var s=this.y
if(s==null){s=this.e
s=s==null?null:s.gcD()}return s!==!1},
gey(){var s=this.z
if(s==null){s=this.e
s=s==null?null:s.gey()}return s===!0},
gmt(){var s=this.Q
if(s==null)s=this.e!=null||null
return s!==!1},
gmu(){var s=this.as
if(s==null)s=this.e!=null||null
return s!==!1},
gjv(){var s=this.ax
if(s==null){s=this.e
s=s==null?null:s.at}return s},
X(){return A.aGR()}}
A.rI.prototype={
gcf(a){var s=this.a.e
if(s==null){s=this.d
s.toString}return s},
a2(){this.ag()
this.Gz()},
Gz(){var s,r,q,p=this
if(p.a.e==null)if(p.d==null)p.d=p.Fu()
s=p.gcf(p)
p.a.gmt()
s.smt(!0)
s=p.gcf(p)
p.a.gmu()
s.smu(!0)
p.a.gey()
p.gcf(p).sey(p.a.gey())
if(p.a.y!=null){s=p.gcf(p)
r=p.a.y
r.toString
s.scD(r)}p.f=p.gcf(p).gcD()
p.gcf(p)
p.r=!0
p.gcf(p)
p.w=!0
p.e=p.gcf(p).gjP()
s=p.gcf(p)
r=p.c
r.toString
p.a.gMh()
q=p.a.gBv()
s.e=r
s.f=q==null?s.f:q
r=s.r
s.r=r
p.y=s.ax=new A.a2i(s)
p.gcf(p).Y(0,p.gxB())},
Fu(){var s=this,r=s.a.gjv(),q=s.a.gcD()
s.a.gmt()
s.a.gmu()
return A.apl(q,r,!0,!0,null,null,s.a.gey())},
m(){var s,r=this
r.gcf(r).F(0,r.gxB())
r.y.au(0)
s=r.d
if(s!=null)s.m()
r.aj()},
bf(){this.cS()
var s=this.y
if(s!=null)s.MU()
this.Gh()},
Gh(){var s,r,q,p=this
if(!p.x&&p.a.f){s=p.c
s.toString
s=A.ati(s)
r=p.gcf(p)
if(r.Q==null)s.yh(r)
q=s.w
if(q!=null)q.x.push(new A.OV(s,r))
s=s.w
if(s!=null)s.rl()
p.x=!0}},
d7(){this.kl()
var s=this.y
if(s!=null)s.MU()
this.x=!1},
b4(a){var s,r,q=this
q.bx(a)
s=a.e
r=q.a
if(s==r.e){if(!J.f(r.gBv(),q.gcf(q).f))q.gcf(q).f=q.a.gBv()
q.a.gMh()
q.gcf(q)
q.a.gey()
q.gcf(q).sey(q.a.gey())
if(q.a.y!=null){s=q.gcf(q)
r=q.a.y
r.toString
s.scD(r)}s=q.gcf(q)
q.a.gmt()
s.smt(!0)
s=q.gcf(q)
q.a.gmu()
s.smu(!0)}else{q.y.au(0)
if(s!=null)s.F(0,q.gxB())
q.Gz()}if(a.f!==q.a.f)q.Gh()},
Xl(){var s,r=this,q=r.gcf(r).gjP(),p=r.gcf(r).gcD()
r.gcf(r)
r.gcf(r)
s=r.a.r
if(s!=null)s.$1(r.gcf(r).gjO())
s=r.e
s===$&&A.b()
if(s!==q)r.a7(new A.agQ(r,q))
s=r.f
s===$&&A.b()
if(s!==p)r.a7(new A.agR(r,p))
s=r.r
s===$&&A.b()
if(!s)r.a7(new A.agS(r,!0))
s=r.w
s===$&&A.b()
if(!s)r.a7(new A.agT(r,!0))},
G(a){var s,r,q=this,p=null,o=q.y
o.toString
o.C4(q.a.c)
o=q.a
s=o.d
if(o.at){o=q.f
o===$&&A.b()
r=q.e
r===$&&A.b()
s=A.dU(p,s,!1,p,!1,o,r,p,p,p,p,p,p,p,p,p,p,p,p,p,p)}return A.avp(s,q.gcf(q))}}
A.agQ.prototype={
$0(){this.a.e=this.b},
$S:0}
A.agR.prototype={
$0(){this.a.f=this.b},
$S:0}
A.agS.prototype={
$0(){this.a.r=this.b},
$S:0}
A.agT.prototype={
$0(){this.a.w=this.b},
$S:0}
A.HA.prototype={
X(){return new A.Qs(B.i)}}
A.Qs.prototype={
Fu(){var s=this.a.gjv()
return A.apm(this.a.gcD(),s,this.a.gey())},
G(a){var s=this,r=null,q=s.y
q.toString
q.C4(s.a.c)
q=s.gcf(s)
return A.dU(r,A.avp(s.a.d,q),!1,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)}}
A.Aj.prototype={}
A.amK.prototype={
$1(a){var s=this.a
if(--s.a===0){s.b=a
return!1}return!0},
$S:47}
A.rJ.prototype={}
A.ol.prototype={
H(){return"TraversalDirection."+this.b}}
A.HB.prototype={
FU(a,b,c){var s,r=a.gld(),q=r.dy,p=q.length!==0?B.c.gT(q):null
q=p==null&&r.goR().length!==0
if(q){s=this.Ia(r,a)
if(s.length===0)p=null
else p=b?B.c.gT(s):B.c.gK(s)}return p==null?a:p},
VN(a,b){return this.FU(a,!1,b)},
a6t(a){},
zn(a,b){},
Wk(a){var s
if(a==null)s=null
else{s=a.kb(t.ag)
if(s==null)s=null
else{s=s.f
s.toString}}return t.zH.a(s)},
Ia(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=this.Wk(a.e),c=d==null,b=c?e:d.f
if(b==null)b=new A.xL(A.y(t.l5,t.UJ))
s=A.y(t.pk,t.fk)
for(r=a.goR(),q=r.length,p=t.zH,o=t.ag,n=t.bp,m=0;m<r.length;r.length===q||(0,A.P)(r),++m){l=r[m]
k=l.e
if(k==null)k=e
else{k=k.y
j=k==null?e:k.i(0,A.aK(o))
if(j==null)k=e
else{k=j.f
k.toString}}p.a(k)
i=k==null?e:k.r
if(J.f(l,i)){k=i.e
k.toString
h=A.awj(k,2)
if(h==null)k=e
else{k=h.y
j=k==null?e:k.i(0,A.aK(o))
if(j==null)k=e
else{k=j.f
k.toString}}p.a(k)
g=k==null?e:k.r
if(s.i(0,g)==null)s.k(0,g,A.avq(k,b,A.a([],n)))
s.i(0,g).c.push(i)
continue}if(l.gcD()&&!l.gey()){if(s.i(0,i)==null)s.k(0,i,A.avq(k,b,A.a([],n)))
s.i(0,i).c.push(l)}}for(r=A.jG(s,s.r);r.t();){q=r.d
p=s.i(0,q).b.OO(s.i(0,q).c,a0)
p=A.a(p.slice(0),A.ap(p))
B.c.Z(s.i(0,q).c)
B.c.L(s.i(0,q).c,p)}f=A.a([],n)
if(s.a!==0)r=s.P(0,c?e:d.r)
else r=!1
if(r){r=s.i(0,c?e:d.r)
r.toString
new A.a2l(s,f).$1(r)}if(!!f.fixed$length)A.L(A.R("removeWhere"))
B.c.oc(f,new A.a2k(),!0)
return f},
H_(a,b){var s,r,q,p,o,n,m=this,l=a.gld()
l.toString
m.lE(l)
m.cK$.A(0,l)
s=l.dy
r=s.length!==0?B.c.gT(s):null
if(r==null){q=b?m.VN(a,!1):m.FU(a,!0,!1)
A.mg(q,b?B.cZ:B.d_)
return!0}p=m.Ia(l,a)
if(p.length===0)return!1
if(b&&r===B.c.gT(p)){A.mg(B.c.gK(p),B.cZ)
return!0}if(!b&&r===B.c.gK(p)){A.mg(B.c.gT(p),B.d_)
return!0}for(l=J.aC(b?p:new A.cx(p,A.ap(p).h("cx<1>"))),o=null;l.t();o=n){n=l.gI(l)
if(o==r){l=b?B.cZ:B.d_
n.v9()
s=n.e
s.toString
A.auE(s,1,l)
return!0}}return!1}}
A.a2l.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=a.c,r=s.length,q=this.b,p=this.a,o=0;o<s.length;s.length===r||(0,A.P)(s),++o){n=s[o]
if(p.P(0,n)){m=p.i(0,n)
m.toString
this.$1(m)}else q.push(n)}},
$S:300}
A.a2k.prototype={
$1(a){return!a.gcD()||a.gey()},
$S:14}
A.rC.prototype={}
A.PT.prototype={}
A.a__.prototype={
a4V(a,b){var s=this
switch(b.a){case 0:return s.rH(a,!1,!0)
case 2:return s.rH(a,!0,!0)
case 3:return s.rH(a,!1,!1)
case 1:return s.rH(a,!0,!1)}},
rH(a,b,c){var s=a.gld().gqf().dQ(0)
A.oS(s,new A.a_7(c,b),t.mx)
if(s.length!==0)return B.c.gK(s)
return null},
a0N(a,b,c){var s,r=c.gqf().dQ(0)
A.oS(r,new A.a_1(),t.mx)
switch(a.a){case 3:s=new A.aR(r,new A.a_2(b),A.ap(r).h("aR<1>"))
break
case 1:s=new A.aR(r,new A.a_3(b),A.ap(r).h("aR<1>"))
break
case 0:case 2:s=null
break
default:s=null}return s},
a0O(a,b,c){var s=c.dQ(0)
A.oS(s,new A.a_4(),t.mx)
switch(a.a){case 0:return new A.aR(s,new A.a_5(b),A.ap(s).h("aR<1>"))
case 2:return new A.aR(s,new A.a_6(b),A.ap(s).h("aR<1>"))
case 3:case 1:break}return null},
a_o(a,b,c){var s,r,q=this,p=q.cK$,o=p.i(0,b),n=o!=null
if(n){s=o.a
s=s.length!==0&&B.c.gK(s).a!==a}else s=!1
if(s){s=o.a
if(B.c.gT(s).b.Q==null){q.lE(b)
p.A(0,b)
return!1}r=new A.a_0(q,o,b)
switch(a.a){case 2:case 0:switch(B.c.gK(s).a.a){case 3:case 1:q.lE(b)
p.A(0,b)
break
case 0:case 2:if(r.$1(a))return!0
break}break
case 3:case 1:switch(B.c.gK(s).a.a){case 3:case 1:if(r.$1(a))return!0
break
case 0:case 2:q.lE(b)
p.A(0,b)
break}break}}if(n&&o.a.length===0){q.lE(b)
p.A(0,b)}return!1},
a6e(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=a.gld(),f=g.dy,e=f.length!==0?B.c.gT(f):h
if(e==null){s=i.a4V(a,b)
if(s==null)s=a
switch(b.a){case 0:case 3:A.mg(s,B.d_)
break
case 1:case 2:A.mg(s,B.cZ)
break}return!0}if(i.a_o(b,g,e))return!0
f=e.e
f.toString
r=A.iS(f)
f=b.a
switch(f){case 2:case 0:q=i.a0O(b,e.gaY(e),g.gqf())
if(r!=null&&!r.d.gJz()){q.toString
p=new A.aR(q,new A.a_8(r),q.$ti.h("aR<p.E>"))
if(!p.gO(p))q=p}if(!q.gad(q).t()){o=h
break}n=A.aF(q,!0,A.o(q).h("p.E"))
if(b===B.a0G){m=A.ap(n).h("cx<1>")
n=A.aF(new A.cx(n,m),!0,m.h("bm.E"))}l=new A.aR(n,new A.a_9(new A.E(e.gaY(e).a,-1/0,e.gaY(e).c,1/0)),A.ap(n).h("aR<1>"))
if(!l.gO(l)){o=l.gK(l)
break}A.oS(n,new A.a_a(e),t.mx)
o=B.c.gK(n)
break
case 1:case 3:q=i.a0N(b,e.gaY(e),g)
if(r!=null&&!r.d.gJz()){q.toString
p=new A.aR(q,new A.a_b(r),q.$ti.h("aR<p.E>"))
if(!p.gO(p))q=p}if(!q.gad(q).t()){o=h
break}n=A.aF(q,!0,A.o(q).h("p.E"))
if(b===B.a0H){m=A.ap(n).h("cx<1>")
n=A.aF(new A.cx(n,m),!0,m.h("bm.E"))}l=new A.aR(n,new A.a_c(new A.E(-1/0,e.gaY(e).b,1/0,e.gaY(e).d)),A.ap(n).h("aR<1>"))
if(!l.gO(l)){o=l.gK(l)
break}A.oS(n,new A.a_d(e),t.mx)
o=B.c.gK(n)
break
default:o=h}if(o!=null){m=i.cK$
k=m.i(0,g)
j=new A.rC(b,e)
if(k!=null)k.a.push(j)
else m.k(0,g,new A.PT(A.a([j],t.Kj)))
switch(f){case 0:case 3:A.mg(o,B.d_)
break
case 2:case 1:A.mg(o,B.cZ)
break}return!0}return!1}}
A.ajO.prototype={
$1(a){return a.b===this.a},
$S:301}
A.a_7.prototype={
$2(a,b){if(this.a)if(this.b)return B.d.aN(a.gaY(a).b,b.gaY(b).b)
else return B.d.aN(b.gaY(b).d,a.gaY(a).d)
else if(this.b)return B.d.aN(a.gaY(a).a,b.gaY(b).a)
else return B.d.aN(b.gaY(b).c,a.gaY(a).c)},
$S:33}
A.a_1.prototype={
$2(a,b){return B.d.aN(a.gaY(a).gaP().a,b.gaY(b).gaP().a)},
$S:33}
A.a_2.prototype={
$1(a){var s=this.a
return!a.gaY(a).l(0,s)&&a.gaY(a).gaP().a<=s.a},
$S:14}
A.a_3.prototype={
$1(a){var s=this.a
return!a.gaY(a).l(0,s)&&a.gaY(a).gaP().a>=s.c},
$S:14}
A.a_4.prototype={
$2(a,b){return B.d.aN(a.gaY(a).gaP().b,b.gaY(b).gaP().b)},
$S:33}
A.a_5.prototype={
$1(a){var s=this.a
return!a.gaY(a).l(0,s)&&a.gaY(a).gaP().b<=s.b},
$S:14}
A.a_6.prototype={
$1(a){var s=this.a
return!a.gaY(a).l(0,s)&&a.gaY(a).gaP().b>=s.d},
$S:14}
A.a_0.prototype={
$1(a){var s,r,q=this.b.a.pop().b,p=q.e
p.toString
p=A.iS(p)
s=$.aq.an$.f.f.e
s.toString
if(p!=A.iS(s)){p=this.a
s=this.c
p.lE(s)
p.cK$.A(0,s)
return!1}switch(a.a){case 0:case 3:r=B.d_
break
case 1:case 2:r=B.cZ
break
default:r=null}A.mg(q,r)
return!0},
$S:303}
A.a_8.prototype={
$1(a){var s=a.e
s.toString
return A.iS(s)===this.a},
$S:14}
A.a_9.prototype={
$1(a){var s=a.gaY(a).fL(this.a)
return!s.gO(s)},
$S:14}
A.a_a.prototype={
$2(a,b){var s=this.a
return B.d.aN(Math.abs(a.gaY(a).gaP().a-s.gaY(s).gaP().a),Math.abs(b.gaY(b).gaP().a-s.gaY(s).gaP().a))},
$S:33}
A.a_b.prototype={
$1(a){var s=a.e
s.toString
return A.iS(s)===this.a},
$S:14}
A.a_c.prototype={
$1(a){var s=a.gaY(a).fL(this.a)
return!s.gO(s)},
$S:14}
A.a_d.prototype={
$2(a,b){var s=this.a
return B.d.aN(Math.abs(a.gaY(a).gaP().b-s.gaY(s).gaP().b),Math.abs(b.gaY(b).gaP().b-s.gaY(s).gaP().b))},
$S:33}
A.d5.prototype={
gKn(){var s=this.d
if(s==null){s=this.c.e
s.toString
s=this.d=new A.ajM().$1(s)}s.toString
return s}}
A.ajL.prototype={
$1(a){var s=a.gKn()
return A.wd(s,A.ap(s).c)},
$S:304}
A.ajN.prototype={
$2(a,b){switch(this.a.a){case 1:return B.d.aN(a.b.a,b.b.a)
case 0:return B.d.aN(b.b.c,a.b.c)}},
$S:119}
A.ajM.prototype={
$1(a){var s,r,q=A.a([],t.vl),p=t.I,o=a.kb(p)
for(;o!=null;){s=o.f
s.toString
q.push(p.a(s))
s=A.awj(o,1)
if(s==null)o=null
else{s=s.y
r=s==null?null:s.i(0,A.aK(p))
o=r}}return q},
$S:306}
A.j8.prototype={
gaY(a){var s,r,q,p,o=this
if(o.b==null)for(s=o.a,s=new A.aG(s,new A.ajJ(),A.ap(s).h("aG<1,E>")),s=new A.cd(s,s.gp(s)),r=A.o(s).c;s.t();){q=s.d
if(q==null)q=r.a(q)
p=o.b
if(p==null){o.b=q
p=q}o.b=p.pe(q)}s=o.b
s.toString
return s}}
A.ajJ.prototype={
$1(a){return a.b},
$S:307}
A.ajK.prototype={
$2(a,b){switch(this.a.a){case 1:return B.d.aN(a.gaY(a).a,b.gaY(b).a)
case 0:return B.d.aN(b.gaY(b).c,a.gaY(a).c)}},
$S:308}
A.xL.prototype={
UD(a){var s,r,q,p,o,n=B.c.gK(a).a,m=t.qi,l=A.a([],m),k=A.a([],t.jE)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.P)(a),++r){q=a[r]
p=q.a
if(p==n){l.push(q)
continue}k.push(new A.j8(l))
l=A.a([q],m)
n=p}if(l.length!==0)k.push(new A.j8(l))
for(m=k.length,r=0;r<k.length;k.length===m||(0,A.P)(k),++r){s=k[r].a
if(s.length===1)continue
o=B.c.gK(s).a
o.toString
A.avz(s,o)}return k},
Hl(a){var s,r,q,p
A.oS(a,new A.a8Q(),t.zP)
s=B.c.gK(a)
r=new A.a8R().$2(s,a)
if(J.bU(r)<=1)return s
q=A.aHg(r)
q.toString
A.avz(r,q)
p=this.UD(r)
if(p.length===1)return B.c.gK(B.c.gK(p).a)
A.aHf(p,q)
return B.c.gK(B.c.gK(p).a)},
OO(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a.length<=1)return a
s=A.a([],t.qi)
for(r=a.length,q=t.V2,p=t.I,o=0;o<a.length;a.length===r||(0,A.P)(a),++o){n=a[o]
m=n.gaY(n)
l=n.e.y
k=l==null?null:l.i(0,A.aK(p))
if(k==null)l=null
else{l=k.f
l.toString}q.a(l)
s.push(new A.d5(l==null?null:l.w,m,n))}j=A.a([],t.bp)
i=this.Hl(s)
j.push(i.c)
B.c.A(s,i)
for(;s.length!==0;){h=this.Hl(s)
j.push(h.c)
B.c.A(s,h)}return j}}
A.a8Q.prototype={
$2(a,b){return B.d.aN(a.b.b,b.b.b)},
$S:119}
A.a8R.prototype={
$2(a,b){var s=a.b,r=A.ap(b).h("aR<1>")
return A.aF(new A.aR(b,new A.a8S(new A.E(-1/0,s.b,1/0,s.d)),r),!0,r.h("p.E"))},
$S:309}
A.a8S.prototype={
$1(a){var s=a.b.fL(this.a)
return!s.gO(s)},
$S:310}
A.vy.prototype={
X(){return new A.Qt(B.i)}}
A.Qt.prototype={
a2(){this.ag()
this.d=A.apl(!1,"FocusTraversalGroup",!0,!0,null,null,!0)},
m(){var s=this.d
if(s!=null)s.m()
this.aj()},
G(a){var s=null,r=this.a,q=r.c,p=this.d
p.toString
return new A.rK(q,p,A.Hx(!1,!1,r.f,s,!0,!0,p,!1,s,s,s,s,s,!0),s)}}
A.rK.prototype={
cg(a){return!1}}
A.Mr.prototype={
dz(a){A.mg(a.gcf(a),B.VV)}}
A.nt.prototype={}
A.KI.prototype={
dz(a){var s=$.aq.an$.f.f
s.e.a4(t.ag).f.H_(s,!0)}}
A.nK.prototype={}
A.LE.prototype={
dz(a){var s=$.aq.an$.f.f
s.e.a4(t.ag).f.H_(s,!1)}}
A.Gr.prototype={
dz(a){var s=$.aq.an$.f.f,r=s.e.a4(t.ag)
r.f.a6e(s,a.a)}}
A.Qu.prototype={}
A.SM.prototype={
zn(a,b){var s
this.Ps(a,b)
s=this.cK$.i(0,b)
if(s!=null){s=s.a
if(!!s.fixed$length)A.L(A.R("removeWhere"))
B.c.oc(s,new A.ajO(a),!0)}}}
A.VM.prototype={}
A.VN.prototype={}
A.eM.prototype={
gbG(){var s,r=$.aq.an$.z.i(0,this)
if(r instanceof A.h1){s=r.ok
s.toString
if(A.o(this).c.b(s))return s}return null}}
A.bz.prototype={
j(a){var s=this,r=s.a,q=r!=null?" "+r:""
if(A.D(s)===B.a1_)return"[GlobalKey#"+A.c4(s)+q+"]"
return"["+("<optimized out>#"+A.c4(s))+q+"]"}}
A.l6.prototype={
l(a,b){if(b==null)return!1
if(J.a0(b)!==A.D(this))return!1
return this.$ti.b(b)&&b.a===this.a},
gu(a){return A.mp(this.a)},
j(a){var s="GlobalObjectKey",r=B.b.iH(s,"<State<StatefulWidget>>")?B.b.V(s,0,-8):s
return"["+r+" "+("<optimized out>#"+A.c4(this.a))+"]"}}
A.i.prototype={
cd(){var s=this.a
return s==null?"Widget":"Widget-"+s.j(0)},
l(a,b){if(b==null)return!1
return this.Qa(0,b)},
gu(a){return A.C.prototype.gu.call(this,this)}}
A.aV.prototype={
c_(a){return new A.NC(this,B.a9)}}
A.W.prototype={
c_(a){return A.aFW(this)}}
A.Uf.prototype={
H(){return"_StateLifecycle."+this.b}}
A.a8.prototype={
a2(){},
b4(a){},
eQ(){},
a7(a){a.$0()
this.c.eN()},
d7(){},
aU(){},
m(){},
bf(){}}
A.b0.prototype={}
A.dO.prototype={
c_(a){return new A.nw(this,B.a9,A.o(this).h("nw<dO.T>"))}}
A.be.prototype={
c_(a){return A.aDi(this)}}
A.aD.prototype={
aM(a,b){},
oZ(a){}}
A.Ip.prototype={
c_(a){return new A.Io(this,B.a9)}}
A.b6.prototype={
c_(a){return A.aFO(this)}}
A.eQ.prototype={
c_(a){return A.aE2(this)}}
A.oz.prototype={
H(){return"_ElementLifecycle."+this.b}}
A.QS.prototype={
IB(a){a.b0(new A.ahQ(this,a))
a.ln()},
a1h(){var s,r,q,p=this
p.a=!0
r=p.b
q=A.aF(r,!0,A.o(r).c)
B.c.di(q,A.anK())
s=q
r.Z(0)
try{r=s
new A.cx(r,A.b1(r).h("cx<1>")).W(0,p.ga1f())}finally{p.a=!1}},
D(a,b){if(b.w===B.cr){b.d7()
b.b0(A.anL())}this.b.D(0,b)}}
A.ahQ.prototype={
$1(a){this.a.IB(a)},
$S:9}
A.Y9.prototype={
D6(a){var s=this
if(a.at){s.e=!0
return}if(!s.d&&s.a!=null){s.d=!0
s.a.$0()}s.c.push(a)
a.at=!0},
M1(a){try{a.$0()}finally{}},
oC(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=b==null
if(f&&h.c.length===0)return
try{h.d=!0
if(!f){g.a=null
h.e=!1
try{b.$0()}finally{}}f=h.c
B.c.di(f,A.anK())
h.e=!1
g.b=f.length
g.c=0
for(n=0;n<g.b;){s=f[n]
r=!1
if(r){n=s.f
n.toString
m=n instanceof A.c5?A.d7(n):null
A.aqn(A.aK(m==null?A.b1(n):m).j(0),null,null)}try{s.MJ()}catch(l){q=A.ai(l)
p=A.az(l)
n=A.bt("while rebuilding dirty elements")
k=$.hd()
if(k!=null)k.$1(new A.bP(q,p,"widgets library",n,new A.Ya(g,h,s),!1))}if(r)A.aqm()
n=++g.c
k=g.b
j=f.length
if(k>=j){k=h.e
k.toString}else k=!0
if(k){if(!!f.immutable$list)A.L(A.R("sort"))
n=j-1
if(n-0<=32)A.Nn(f,0,n,A.anK())
else A.Nm(f,0,n,A.anK())
n=h.e=!1
g.b=f.length
while(!0){k=g.c
if(!(k>0?f[k-1].as:n))break
g.c=k-1}n=k}}}finally{for(f=h.c,n=f.length,i=0;i<n;++i){o=f[i]
o.at=!1}B.c.Z(f)
h.d=!1
h.e=null}},
a2B(a){return this.oC(a,null)},
a4T(){var s,r,q
try{this.M1(this.b.ga1g())}catch(q){s=A.ai(q)
r=A.az(q)
A.are(A.He("while finalizing the widget tree"),s,r,null)}finally{}},
a8a(a,b){try{a.b=b
a.eQ()}finally{}}}
A.Ya.prototype={
$0(){var s=null,r=A.a([],t.E),q=this.a,p=q.c,o=this.b.c.length,n="The element being rebuilt at the time was index "+p
q=""+q.b
if(p<o)J.kI(r,A.ii(n+" of "+q,this.c,!0,B.aY,s,!1,s,s,B.aB,s,!1,!0,!0,B.b8,s,t.h))
else J.kI(r,A.a1O(n+" of "+q+", but _dirtyElements only had "+o+" entries. This suggests some confusion in the framework internals."))
return r},
$S:13}
A.x6.prototype={
zb(){var s=this.a
this.c=new A.aj0(this,s==null?null:s.c)}}
A.aj0.prototype={
dn(a){var s=this.a.Mj(a)
if(s)return
s=this.b
if(s!=null)s.dn(a)}}
A.b3.prototype={
T8(a){},
l(a,b){if(b==null)return!1
return this===b},
eQ(){var s=this
if(A.awb(s.b,s.f)){s.eN()
s.b=null}s.b0(new A.a1d(s))
s.b=null},
ga5(){var s,r
for(s=this;s!=null;){r={}
if(s.w===B.CY)break
else if(s instanceof A.bp)return s.ga5()
else{r.a=null
s.b0(new A.a1e(r))
s=r.a}}return null},
a4m(a){var s=null
return A.ii(a,this,!0,B.aY,s,!1,s,s,B.aB,s,!1,!0,!0,B.b8,s,t.h)},
b0(a){},
dC(a,b,c){var s,r,q=this
if(b==null){if(a!=null)q.zG(a)
return null}if(a!=null){s=a.f.l(0,b)
if(s){if(!J.f(a.d,c))q.Nr(a,c)
s=a}else{s=a.f
s.toString
if(A.D(s)===A.D(b)&&J.f(s.a,b.a)){if(!J.f(a.d,c))q.Nr(a,c)
a.bo(0,b)
s=a}else{q.zG(a)
r=q.ul(b,c)
s=r}}}else{r=q.ul(b,c)
s=r}return s},
fn(a,b){var s,r,q,p=this
p.a=a
p.d=b
p.w=B.cr
s=a!=null
if(s){r=a.e
r===$&&A.b();++r}else r=1
p.e=r
if(s)p.r=a.r
q=p.f.a
if(q instanceof A.eM)p.r.z.k(0,q,p)
p.yK()
p.zb()},
bo(a,b){this.f=b},
Nr(a,b){new A.a1f(b).$1(a)},
yQ(a){this.d=a},
IL(a){var s=a+1,r=this.e
r===$&&A.b()
if(r<s){this.e=s
this.b0(new A.a1a(s))}},
oT(){this.b0(new A.a1c())
this.d=null},
td(a){this.b0(new A.a1b(a))
this.d=a},
a_X(a,b){var s,r,q=$.aq.an$.z.i(0,a)
if(q==null)return null
s=q.f
s.toString
if(!(A.D(s)===A.D(b)&&J.f(s.a,b.a)))return null
r=q.a
if(r!=null){r.iM(q)
r.zG(q)}this.r.b.b.A(0,q)
return q},
ul(a,b){var s,r,q,p,o,n,m=this,l=!1
if(l)A.aqn(A.D(a).j(0),null,null)
try{s=a.a
if(s instanceof A.eM){r=m.a_X(s,a)
if(r!=null){o=r
o.a=m
o.toString
n=m.e
n===$&&A.b()
o.IL(n)
o.aU()
o.b0(A.axi())
o.td(b)
q=m.dC(r,a,b)
o=q
o.toString
return o}}p=a.c_(0)
p.fn(m,b)
return p}finally{if(l)A.aqm()}},
zG(a){a.a=null
a.oT()
this.r.b.D(0,a)},
iM(a){},
aU(){var s=this,r=s.z,q=r==null,p=!q&&r.a!==0||s.Q
s.w=B.cr
if(!q)r.Z(0)
s.Q=!1
s.yK()
s.zb()
if(s.as)s.r.D6(s)
if(p)s.bf()},
d7(){var s,r,q=this,p=q.z
if(p!=null&&p.a!==0)for(p=new A.ki(p,p.lO()),s=A.o(p).c;p.t();){r=p.d;(r==null?s.a(r):r).bg.A(0,q)}q.y=null
q.w=B.a2a},
ln(){var s=this,r=s.f,q=r==null?null:r.a
if(q instanceof A.eM){r=s.r.z
if(J.f(r.i(0,q),s))r.A(0,q)}s.z=s.f=null
s.w=B.CY},
gcG(a){var s,r=this.ga5()
if(r instanceof A.G){s=r.k3
s.toString
return s}return null},
zM(a,b){var s=this.z;(s==null?this.z=A.dc(t.IS):s).D(0,a)
a.Nn(this,b)
s=a.f
s.toString
return t.WB.a(s)},
a4(a){var s=this.y,r=s==null?null:s.i(0,A.aK(a))
if(r!=null)return a.a(this.zM(r,null))
this.Q=!0
return null},
kb(a){var s=this.y
return s==null?null:s.i(0,A.aK(a))},
zb(){var s=this.a
this.c=s==null?null:s.c},
yK(){var s=this.a
this.y=s==null?null:s.y},
KW(a){var s,r,q,p=this.a
while(!0){s=p==null
if(!s){r=p.f
r.toString
q=r instanceof A.c5?A.d7(r):null
r=A.aK(q==null?A.b1(r):q)!==A.aK(a)}else r=!1
if(!r)break
p=p.a}if(s)s=null
else{s=p.f
s.toString}return a.h("0?").a(s)},
l7(a){var s,r,q=this.a
for(;s=q==null,!s;){if(q instanceof A.h1){r=q.ok
r.toString
r=a.b(r)}else r=!1
if(r)break
q=q.a}t.lE.a(q)
if(s)s=null
else{s=q.ok
s.toString}return a.h("0?").a(s)},
u3(a){var s=this.a
for(;s!=null;){if(s instanceof A.bp&&a.b(s.ga5()))return a.a(s.ga5())
s=s.a}return null},
Cz(a){var s=this.a
while(!0){if(!(s!=null&&a.$1(s)))break
s=s.a}},
bf(){this.eN()},
dn(a){var s=this.c
if(s!=null)s.dn(a)},
cd(){var s=this.f
s=s==null?null:s.cd()
return s==null?"<optimized out>#"+A.c4(this)+"(DEFUNCT)":s},
eN(){var s=this
if(s.w!==B.cr)return
if(s.as)return
s.as=!0
s.r.D6(s)},
v1(a){var s
if(this.w===B.cr)s=!this.as&&!a
else s=!0
if(s)return
this.hm()},
MJ(){return this.v1(!1)},
hm(){this.as=!1},
$iak:1}
A.a1d.prototype={
$1(a){a.b=this.a.b
a.eQ()},
$S:9}
A.a1e.prototype={
$1(a){this.a.a=a},
$S:9}
A.a1f.prototype={
$1(a){a.yQ(this.a)
if(!(a instanceof A.bp))a.b0(this)},
$S:9}
A.a1a.prototype={
$1(a){a.IL(this.a)},
$S:9}
A.a1c.prototype={
$1(a){a.oT()},
$S:9}
A.a1b.prototype={
$1(a){a.td(this.a)},
$S:9}
A.Hf.prototype={
aH(a){var s=this.d,r=new A.M4(s,A.ay())
r.aK()
r.Tk(s)
return r}}
A.us.prototype={
fn(a,b){this.DN(a,b)
this.xc()},
xc(){this.MJ()},
hm(){var s,r,q,p,o,n,m=this,l=null
try{l=m.be()
m.f.toString}catch(o){s=A.ai(o)
r=A.az(o)
n=A.vd(A.are(A.bt("building "+m.j(0)),s,r,new A.Z5(m)))
l=n}finally{m.w2()}try{m.ay=m.dC(m.ay,l,m.d)}catch(o){q=A.ai(o)
p=A.az(o)
n=A.vd(A.are(A.bt("building "+m.j(0)),q,p,new A.Z6(m)))
l=n
m.ay=m.dC(null,l,m.d)}},
b0(a){var s=this.ay
if(s!=null)a.$1(s)},
iM(a){this.ay=null
this.kk(a)}}
A.Z5.prototype={
$0(){var s=A.a([],t.E)
return s},
$S:13}
A.Z6.prototype={
$0(){var s=A.a([],t.E)
return s},
$S:13}
A.NC.prototype={
be(){var s=this.f
s.toString
return t.gU.a(s).G(this)},
bo(a,b){this.qJ(0,b)
this.v1(!0)}}
A.h1.prototype={
be(){return this.ok.G(this)},
eQ(){var s=this
if(A.awb(s.b,s.f))s.ok.eQ()
s.Pp()},
xc(){this.ok.a2()
this.ok.bf()
this.Pa()},
hm(){var s=this
if(s.p1){s.ok.bf()
s.p1=!1}s.Pb()},
bo(a,b){var s,r,q,p=this
p.qJ(0,b)
s=p.ok
r=s.a
r.toString
q=p.f
q.toString
s.a=t.d2.a(q)
s.b4(r)
p.v1(!0)},
aU(){this.Pn()
this.ok.aU()
this.eN()},
d7(){this.ok.d7()
this.DK()},
ln(){var s=this
s.w3()
s.ok.m()
s.ok=s.ok.c=null},
zM(a,b){return this.DL(a,b)},
bf(){this.Po()
this.p1=!0}}
A.xF.prototype={
be(){var s=this.f
s.toString
return t.yH.a(s).b},
bo(a,b){var s=this,r=s.f
r.toString
t.yH.a(r)
s.qJ(0,b)
s.Cw(r)
s.v1(!0)},
Cw(a){this.n4(a)}}
A.nw.prototype={
EQ(a){this.b0(new A.a7I(a))},
n4(a){var s=this.f
s.toString
this.EQ(this.$ti.h("dO<1>").a(s))}}
A.a7I.prototype={
$1(a){if(a instanceof A.bp)this.a.ox(a.ga5())
else a.b0(this)},
$S:9}
A.fI.prototype={
yK(){var s=this,r=s.a,q=r==null?null:r.y
if(q==null)q=B.Vk
r=s.f
r.toString
s.y=q.a81(0,A.D(r),s)},
Db(a,b){this.bg.k(0,a,b)},
Nn(a,b){this.Db(a,null)},
Me(a,b){b.bf()},
Cw(a){var s=this.f
s.toString
if(t.WB.a(s).cg(a))this.Qo(a)},
n4(a){var s,r,q
for(s=this.bg,s=new A.As(s,s.wN()),r=A.o(s).c;s.t();){q=s.d
this.Me(a,q==null?r.a(q):q)}}}
A.bp.prototype={
ga5(){var s=this.ay
s.toString
return s},
VJ(){var s=this.a
while(!0){if(!(s!=null&&!(s instanceof A.bp)))break
s=s.a}return t.c_.a(s)},
VI(){var s,r={},q=r.a=this.a
r.b=null
while(!0){if(!(q!=null&&!(q instanceof A.bp)))break
if(q instanceof A.nw){r.b=q
break}s=q.a
r.a=s
q=s}return r.b},
fn(a,b){var s,r=this
r.DN(a,b)
s=r.f
s.toString
r.ay=t.F5.a(s).aH(r)
r.td(b)
r.w2()},
bo(a,b){this.qJ(0,b)
this.Hk()},
hm(){this.Hk()},
Hk(){var s=this,r=s.f
r.toString
t.F5.a(r).aM(s,s.ga5())
s.w2()},
a9g(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=new A.a8Z(a4),g=new A.a9_(i),f=a3.length,e=f-1,d=a2.length,c=d-1,b=d===f?a2:A.b_(f,$.arR(),!1,t.h),a=i,a0=0,a1=0
while(!0){if(!(a1<=c&&a0<=e))break
s=h.$1(a2[a1])
r=a3[a0]
if(s!=null){f=s.f
f.toString
q=f instanceof A.c5?A.d7(f):i
d=A.aK(q==null?A.b1(f):q)
q=r instanceof A.c5?A.d7(r):i
f=!(d===A.aK(q==null?A.b1(r):q)&&J.f(f.a,r.a))}else f=!0
if(f)break
f=j.dC(s,r,g.$2(a0,a))
f.toString
b[a0]=f;++a0;++a1
a=f}p=c
while(!0){o=a1<=p
if(!(o&&a0<=e))break
s=h.$1(a2[p])
r=a3[e]
if(s!=null){f=s.f
f.toString
q=f instanceof A.c5?A.d7(f):i
d=A.aK(q==null?A.b1(f):q)
q=r instanceof A.c5?A.d7(r):i
f=!(d===A.aK(q==null?A.b1(r):q)&&J.f(f.a,r.a))}else f=!0
if(f)break;--p;--e}if(o){n=A.y(t.D2,t.h)
for(;a1<=p;){s=h.$1(a2[a1])
if(s!=null){f=s.f.a
if(f!=null)n.k(0,f,s)
else{s.a=null
s.oT()
f=j.r.b
if(s.w===B.cr){s.d7()
s.b0(A.anL())}f.b.D(0,s)}}++a1}o=!0}else n=i
for(;a0<=e;a=f){r=a3[a0]
if(o){m=r.a
if(m!=null){s=n.i(0,m)
if(s!=null){f=s.f
f.toString
q=f instanceof A.c5?A.d7(f):i
d=A.aK(q==null?A.b1(f):q)
q=r instanceof A.c5?A.d7(r):i
if(d===A.aK(q==null?A.b1(r):q)&&J.f(f.a,m))n.A(0,m)
else s=i}}else s=i}else s=i
f=j.dC(s,r,g.$2(a0,a))
f.toString
b[a0]=f;++a0}e=a3.length-1
while(!0){if(!(a1<=c&&a0<=e))break
f=j.dC(a2[a1],a3[a0],g.$2(a0,a))
f.toString
b[a0]=f;++a0;++a1
a=f}if(o&&n.a!==0)for(f=n.gb_(n),f=new A.ei(J.aC(f.a),f.b),d=A.o(f).z[1];f.t();){l=f.a
if(l==null)l=d.a(l)
if(!a4.C(0,l)){l.a=null
l.oT()
k=j.r.b
if(l.w===B.cr){l.d7()
l.b0(A.anL())}k.b.D(0,l)}}return b},
d7(){this.DK()},
ln(){var s=this,r=s.f
r.toString
t.F5.a(r)
s.w3()
r.oZ(s.ga5())
s.ay.m()
s.ay=null},
yQ(a){var s,r=this,q=r.d
r.Pm(a)
s=r.CW
s.toString
s.iU(r.ga5(),q,r.d)},
td(a){var s,r,q=this
q.d=a
s=q.CW=q.VJ()
if(s!=null)s.iQ(q.ga5(),a)
r=q.VI()
if(r!=null){s=r.f
s.toString
t.IL.a(s).ox(q.ga5())}},
oT(){var s=this,r=s.CW
if(r!=null){r.j1(s.ga5(),s.d)
s.CW=null}s.d=null},
iQ(a,b){},
iU(a,b,c){},
j1(a,b){}}
A.a8Z.prototype={
$1(a){var s=this.a.C(0,a)
return s?null:a},
$S:389}
A.a9_.prototype={
$2(a,b){return new A.pU(b,a,t.Bc)},
$S:312}
A.y3.prototype={
fn(a,b){this.qM(a,b)}}
A.Io.prototype={
iM(a){this.kk(a)},
iQ(a,b){},
iU(a,b,c){},
j1(a,b){}}
A.yB.prototype={
b0(a){var s=this.p1
if(s!=null)a.$1(s)},
iM(a){this.p1=null
this.kk(a)},
fn(a,b){var s,r,q=this
q.qM(a,b)
s=q.p1
r=q.f
r.toString
q.p1=q.dC(s,t.Mp.a(r).c,null)},
bo(a,b){var s,r,q=this
q.lJ(0,b)
s=q.p1
r=q.f
r.toString
q.p1=q.dC(s,t.Mp.a(r).c,null)},
iQ(a,b){var s=this.ay
s.toString
t.GM.a(s).saQ(a)},
iU(a,b,c){},
j1(a,b){var s=this.ay
s.toString
t.GM.a(s).saQ(null)}}
A.fj.prototype={
ga5(){return t.pU.a(A.bp.prototype.ga5.call(this))},
gJI(a){var s=this.p1
s===$&&A.b()
return new A.aR(s,new A.a6Q(this),A.ap(s).h("aR<1>"))},
iQ(a,b){var s=this.ga5(),r=b.a
s.AJ(0,a,r==null?null:r.ga5())},
iU(a,b,c){var s=this.ga5(),r=c.a
s.uE(a,r==null?null:r.ga5())},
j1(a,b){this.ga5().A(0,a)},
b0(a){var s,r,q,p,o=this.p1
o===$&&A.b()
s=o.length
r=this.p2
q=0
for(;q<s;++q){p=o[q]
if(!r.C(0,p))a.$1(p)}},
iM(a){this.p2.D(0,a)
this.kk(a)},
ul(a,b){return this.DM(a,b)},
fn(a,b){var s,r,q,p,o,n,m,l=this
l.qM(a,b)
s=l.f
s.toString
s=t.Lb.a(s).c
r=s.length
q=A.b_(r,$.arR(),!1,t.h)
for(p=t.Bc,o=null,n=0;n<r;++n,o=m){m=l.DM(s[n],new A.pU(o,n,p))
q[n]=m}l.p1=q},
bo(a,b){var s,r,q,p=this
p.lJ(0,b)
s=p.f
s.toString
t.Lb.a(s)
r=p.p1
r===$&&A.b()
q=p.p2
p.p1=p.a9g(r,s.c,q)
q.Z(0)}}
A.a6Q.prototype={
$1(a){return!this.a.p2.C(0,a)},
$S:47}
A.pU.prototype={
l(a,b){if(b==null)return!1
if(J.a0(b)!==A.D(this))return!1
return b instanceof A.pU&&this.b===b.b&&J.f(this.a,b.a)},
gu(a){return A.Y(this.b,this.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.RJ.prototype={}
A.RM.prototype={
c_(a){return A.L(A.cb(null))}}
A.Ug.prototype={}
A.n3.prototype={}
A.cL.prototype={
JY(){return this.a.$0()},
Lw(a){return this.b.$1(a)}}
A.HJ.prototype={
G(a){var s=this,r=A.y(t.n,t.xR),q=A.dM(a),p=q==null?null:q.ay
if(s.d==null)if(s.e==null)if(s.f==null)if(s.r==null)q=!1
else q=!0
else q=!0
else q=!0
else q=!0
if(q)r.k(0,B.CP,new A.cL(new A.a2H(s),new A.a2I(s,p),t.jl))
if(s.ay==null)q=!1
else q=!0
if(q)r.k(0,B.a0O,new A.cL(new A.a2J(s),new A.a2N(s,p),t.uA))
if(s.cy==null)q=!1
else q=!0
if(q)r.k(0,B.CN,new A.cL(new A.a2O(s),new A.a2P(s,p),t.jn))
if(s.rx!=null||s.ry!=null||s.to!=null||!1)r.k(0,B.mi,new A.cL(new A.a2Q(s),new A.a2R(s,p),t.ok))
if(s.x2!=null||s.y1!=null||s.y2!=null||s.bU!=null)r.k(0,B.mh,new A.cL(new A.a2S(s),new A.a2T(s,p),t.Uv))
if(s.bA!=null||s.aq!=null||s.ai!=null||!1)r.k(0,B.mg,new A.cL(new A.a2U(s),new A.a2K(s,p),t.YC))
q=!1
if(q)r.k(0,B.a0R,new A.cL(new A.a2L(s),new A.a2M(s,p),t.C1))
return new A.lE(s.c,r,s.aE,s.b9,null,null)}}
A.a2H.prototype={
$0(){return A.aG4(this.a,null)},
$S:313}
A.a2I.prototype={
$1(a){var s=this.a
a.y1=s.d
a.y2=s.e
a.bU=s.f
a.bA=s.r
a.b7=a.b1=a.aw=a.av=a.ai=a.aq=a.bg=null
a.b=this.b},
$S:314}
A.a2J.prototype={
$0(){var s=t.S
return new A.ho(A.y(s,t.jk),this.a,null,A.y(s,t._))},
$S:315}
A.a2N.prototype={
$1(a){a.e=null
a.f=this.a.ay
a.r=null
a.b=this.b},
$S:316}
A.a2O.prototype={
$0(){return A.aDE(this.a,null,null)},
$S:317}
A.a2P.prototype={
$1(a){a.k3=a.k2=null
a.k4=this.a.cy
a.bg=a.bA=a.bU=a.y2=a.y1=a.xr=a.x2=a.x1=a.to=a.ry=a.rx=a.RG=a.R8=a.p4=a.p3=a.p2=a.p1=a.ok=null
a.b=this.b},
$S:318}
A.a2Q.prototype={
$0(){return A.avh(this.a,null)},
$S:120}
A.a2R.prototype={
$1(a){var s
a.as=null
s=this.a
a.at=s.rx
a.ax=s.ry
a.ay=s.to
a.ch=null
a.Q=s.bh
a.b=this.b},
$S:121}
A.a2S.prototype={
$0(){return A.a4j(this.a,null)},
$S:122}
A.a2T.prototype={
$1(a){var s=this.a
a.as=s.x2
a.at=null
a.ax=s.y1
a.ay=s.y2
a.ch=s.bU
a.Q=s.bh
a.b=this.b},
$S:123}
A.a2U.prototype={
$0(){var s=t.S,r=A.dc(s)
return new A.hG(B.ag,A.art(),B.cq,A.y(s,t.GY),A.bc(s),A.y(s,t.o),r,this.a,null,A.y(s,t._))},
$S:323}
A.a2K.prototype={
$1(a){var s=this.a
a.as=s.bA
a.at=null
a.ax=s.aq
a.ay=s.ai
a.ch=null
a.Q=s.bh
a.b=this.b},
$S:324}
A.a2L.prototype={
$0(){var s=t.S,r=A.dc(s)
return new A.hs(B.mp,A.y(s,t.o),r,this.a,null,A.y(s,t._))},
$S:325}
A.a2M.prototype={
$1(a){a.ax=a.as=a.at=a.Q=null
a.b=this.b},
$S:326}
A.lE.prototype={
X(){return new A.qt(B.Uy,B.i)}}
A.qt.prototype={
a2(){var s,r,q=this
q.ag()
s=q.a
r=s.r
q.e=r==null?new A.PL(q):r
q.yA(s.d)},
b4(a){var s,r=this
r.bx(a)
if(!(a.r==null&&r.a.r==null)){s=r.a.r
r.e=s==null?new A.PL(r):s}r.yA(r.a.d)},
a8x(a){if(this.a.f)return
t.ym.a(this.c.ga5()).sa9m(a)},
m(){for(var s=this.d,s=J.aC(s.gb_(s));s.t();)s.gI(s).m()
this.d=null
this.aj()},
yA(a){var s,r,q,p,o=this,n=o.d
n.toString
o.d=A.y(t.n,t.cD)
for(s=J.aC(a.gbC(a));s.t();){r=s.gI(s)
q=o.d
q.toString
p=n.i(0,r)
q.k(0,r,p==null?a.i(0,r).JY():p)
q=a.i(0,r)
q.toString
r=o.d.i(0,r)
r.toString
q.Lw(r)}for(s=J.aC(n.gbC(n));s.t();){r=s.gI(s)
if(!o.d.P(0,r))n.i(0,r).m()}},
W2(a){var s,r
for(s=this.d,s=J.aC(s.gb_(s));s.t();){r=s.gI(s)
r.d.k(0,a.gc6(),a.gcu(a))
if(r.fN(a))r.hL(a)
else r.pw(a)}},
XM(a){var s,r
for(s=this.d,s=J.aC(s.gb_(s));s.t();){r=s.gI(s)
r.d.k(0,a.gc6(),a.gcu(a))
if(r.a6D(a))r.yZ(a)}},
a1A(a){this.e.za(a)},
G(a){var s,r,q,p=this,o=null,n=p.a,m=n.e,l=m==null
if(l)s=n.c==null?B.bp:B.c8
else s=m
r=n.c
q=A.wk(s,r,o,p.gW1(),p.gXL(),o,o)
if(!n.f){if(l)n=r==null?B.bp:B.c8
else n=m
q=new A.QA(n,p.ga1z(),q,o)}return q}}
A.QA.prototype={
aH(a){var s=new A.jU(B.c8,null,A.ay())
s.aK()
s.saQ(null)
s.v=this.e
this.f.$1(s)
return s},
aM(a,b){b.v=this.e
this.f.$1(b)}}
A.ab1.prototype={
j(a){return"SemanticsGestureDelegate()"}}
A.PL.prototype={
za(a){var s=this,r=s.a.d
r.toString
a.sjX(s.Wt(r))
a.slf(s.Wj(r))
a.sa7s(s.Wh(r))
a.sa7A(s.Wu(r))},
Wt(a){var s=t.zm.a(a.i(0,B.CP))
if(s==null)return null
return new A.agt(s)},
Wj(a){var s=t.qA.a(a.i(0,B.CN))
if(s==null)return null
return new A.ags(s)},
Wh(a){var s=t.gx.a(a.i(0,B.mh)),r=t.uR.a(a.i(0,B.mg)),q=s==null?null:new A.agp(s),p=r==null?null:new A.agq(r)
if(q==null&&p==null)return null
return new A.agr(q,p)},
Wu(a){var s=t.Wn.a(a.i(0,B.mi)),r=t.uR.a(a.i(0,B.mg)),q=s==null?null:new A.agu(s),p=r==null?null:new A.agv(r)
if(q==null&&p==null)return null
return new A.agw(q,p)}}
A.agt.prototype={
$0(){var s=this.a,r=s.y1
if(r!=null)r.$1(new A.rb(B.j,B.j))
r=s.y2
if(r!=null)r.$1(new A.rc())
s=s.bU
if(s!=null)s.$0()},
$S:0}
A.ags.prototype={
$0(){var s=this.a,r=s.ok
if(r!=null)r.$1(B.SV)
r=s.k4
if(r!=null)r.$0()
s=s.p3
if(s!=null)s.$1(B.ST)},
$S:0}
A.agp.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.js(B.j))
r=s.at
if(r!=null)r.$1(new A.io(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.hp(B.cp,0))},
$S:19}
A.agq.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.js(B.j))
r=s.at
if(r!=null)r.$1(new A.io(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.hp(B.cp,null))},
$S:19}
A.agr.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(a)
s=this.b
if(s!=null)s.$1(a)},
$S:19}
A.agu.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.js(B.j))
r=s.at
if(r!=null)r.$1(new A.io(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.hp(B.cp,0))},
$S:19}
A.agv.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.js(B.j))
r=s.at
if(r!=null)r.$1(new A.io(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.hp(B.cp,null))},
$S:19}
A.agw.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(a)
s=this.b
if(s!=null)s.$1(a)},
$S:19}
A.n9.prototype={
H(){return"HeroFlightDirection."+this.b}}
A.n7.prototype={
X(){return new A.rR(new A.bz(null,t.C),B.i)}}
A.a3V.prototype={
$2(a,b){var s=a.f
s.toString
t.rA.a(s)
s=a.ok
s.toString
t.U3.a(s)
if(!this.b||!1)this.a.k(0,b,s)
else s.KD()},
$S:329}
A.a3W.prototype={
$1(a){var s,r,q=this,p=a.f
p.toString
if(p instanceof A.n7){t.MF.a(a)
s=p.c
if(A.apL(a)===q.a)q.b.$2(a,s)
else{r=A.a6G(a,t.X)
if(r!=null)p=r.gl8()
else p=!1
if(p)q.b.$2(a,s)}}a.b0(q)},
$S:9}
A.rR.prototype={
vU(a){var s,r=this
r.f=a
s=r.c.ga5()
s.toString
r.a7(new A.ahx(r,t.x.a(s)))},
vT(){return this.vU(!1)},
my(a){var s=this
if(a||s.e==null)return
s.e=null
if(s.c!=null)s.a7(new A.ahw())},
KD(){return this.my(!1)},
G(a){var s,r=this,q=null,p=r.e,o=p==null,n=!o
if(n)r.a.toString
if(n&&!r.f){o=p.a
return A.cy(q,p.b,o)}s=o?q:p.a
p=o?q:p.b
return A.cy(new A.xb(n,new A.ri(o,new A.jE(r.a.e,r.d),q),q),p,s)}}
A.ahx.prototype={
$0(){var s=this.b.k3
s.toString
this.a.e=s},
$S:0}
A.ahw.prototype={
$0(){},
$S:0}
A.aht.prototype={
gbY(a){var s,r=this
if(r.a===B.c6){s=r.e.fy
s.toString}else{s=r.d.fy
s.toString}return A.bb(B.b7,s,r.z?null:new A.vu(B.b7))},
oO(a,b){var s
this.r.a.toString
s=this.w.$2(a,b)
return s==null?new A.xM(a,b):s},
gL8(){var s,r,q=this,p=q.Q
if(p===$){s=q.f.c
s.toString
r=A.avs(s,$.aq.an$.z.i(0,q.d.k2))
q.Q!==$&&A.br()
q.Q=r
p=r}return p},
gvf(){var s,r,q=this,p=q.as
if(p===$){s=q.r.c
s.toString
r=A.avs(s,$.aq.an$.z.i(0,q.e.k2))
q.as!==$&&A.br()
q.as=r
p=r}return p},
gla(){var s,r,q=this,p=q.at
if(p===$){s=q.gvf()
if(s.gLN(s))if(!q.z){s=q.gL8()
s=s.gLN(s)
r=s}else r=!0
else r=!1
q.at!==$&&A.br()
p=q.at=r}return p},
j(a){var s,r,q=this,p=q.a.j(0),o=q.f,n=o.a.c.j(0),m=q.d.b.j(0),l=q.e.b.j(0)
o=o.j(0)
s=q.r.j(0)
r=q.gla()?"":", INVALID"
return"_HeroFlightManifest("+p+" tag: "+n+" from route: "+m+" to route: "+l+" with hero: "+o+" to "+s+")"+r}}
A.kj.prototype={
U8(a){var s,r,q,p,o=this,n=o.c
if(n==null){n=o.f
n===$&&A.b()
s=n.gbY(n)
r=o.f
q=r.f.c
q.toString
p=r.r.c
p.toString
p=o.c=n.x.$5(a,s,r.a,q,p)
n=p}s=o.e
s===$&&A.b()
return A.jn(s,new A.ahu(o),n)},
Hj(a){var s,r=this,q=a===B.Y
if(q||a===B.Q){s=r.e
s===$&&A.b()
s.saS(0,null)
r.r.nb(0)
r.r=null
s=r.f
s===$&&A.b()
s.f.my(q)
r.f.r.my(a===B.Q)
r.a.$1(r)
r.e.F(0,r.gMo())}},
Gg(a){var s=this,r=s.f
r===$&&A.b()
r=r.d.a
if((r==null?null:r.CW.a)!==!0){s.Hj(a)
return}if(s.x)return
r.toString
s.x=!0
r.CW.Y(0,new A.ahv(s,r))},
a7z(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(!h.w){s=h.f
s===$&&A.b()
s=s.r.c!=null}else s=!1
if(s){s=h.f
s===$&&A.b()
r=t.Qv.a(s.r.c.ga5())}else r=null
if(r!=null&&r.b!=null&&r.k3!=null){s=h.f
s===$&&A.b()
s=$.aq.an$.z.i(0,s.e.k2)
s=s==null?null:s.ga5()
q=A.cM(r.bM(0,t.Qv.a(s)),B.j)}else q=null
s=q!=null
if(s&&isFinite(q.a)&&isFinite(q.b)){p=h.b
p===$&&A.b()
p=p.b
if(!J.f(q,new A.r(p.a,p.b))){p=h.b
o=p.b
n=o.c
m=o.a
l=o.d
o=o.b
k=q.a
j=q.b
i=h.f
i===$&&A.b()
h.b=i.oO(p.a,new A.E(k,j,k+(n-m),j+(l-o)))}}else{p=h.d
if(p.gb6(p)===B.Y){p=h.e
p===$&&A.b()
o=$.az8()
n=p.gn(p)
m=A.o(o).h("fv<ag.T>")
h.d=new A.O(t.m.a(p),new A.fv(new A.f8(new A.c0(n,1,B.al)),o,m),m.h("O<ag.T>"))}}if(s)s=!(isFinite(q.a)&&isFinite(q.b))
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
A.ahu.prototype={
$2(a,b){var s,r=null,q=this.a,p=q.b
p===$&&A.b()
s=q.e
s===$&&A.b()
s=p.al(0,s)
s.toString
p=q.f
p===$&&A.b()
p=p.c
return A.eR(p.b-s.d,new A.hw(!0,r,A.iq(b,q.d),r),r,r,s.a,p.a-s.c,s.b,r)},
$S:330}
A.ahv.prototype={
$0(){var s,r=this.a
r.x=!1
this.b.CW.F(0,this)
s=r.e
s===$&&A.b()
r.Hj(s.gb6(s))},
$S:0}
A.vK.prototype={
tF(a,b){this.rp(b,a,B.c6,!1)},
tE(a,b){var s=$.i4()
A.pD(this)
if(!s.a.get(this).CW.a)this.rp(a,b,B.c7,!1)},
tG(a,b){var s=a.gl8()
if(s)this.rp(b,a,B.c6,!1)},
Kl(a,b){this.rp(a,b,B.c7,!0)},
kR(){var s,r,q,p=$.i4()
A.pD(this)
if(p.a.get(this).CW.a)return
p=this.b
p=p.gb_(p)
s=A.o(p).h("aR<p.E>")
r=A.aF(new A.aR(p,new A.a3U(),s),!1,s.h("p.E"))
for(p=r.length,q=0;q<p;++q)r[q].Gg(B.Q)},
rp(a,b,c,d){var s
if(b!=a&&b instanceof A.iH&&a instanceof A.iH){switch(c.a){case 1:s=a.fy
if(s.gn(s)===0)return
break
case 0:s=b.fy
if(s.gn(s)===1)return
break}if(d)if(c===B.c7){b.gn2()
s=!0}else s=!1
else s=!1
if(s)this.If(a,b,c,d)
else{s=b.fy
b.suG(s.gn(s)===0)
$.aq.cy$.push(new A.a3T(this,a,b,c,d))}}},
If(b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null
b4.suG(!1)
s=$.i4()
A.pD(b1)
s=s.a.get(b1)
r=s==null
if(r)q=b2
else{p=s.d
p===$&&A.b()
q=p.gbG()}if(r||q==null)return
o=s.c.ga5()
if(!(o instanceof A.G))return
n=$.aq.an$.z.i(0,b3.k2)
m=n!=null?A.atp(n,b6,s):B.zT
l=$.aq.an$.z.i(0,b4.k2)
k=l!=null?A.atp(l,b6,s):B.zT
for(s=m.geJ(m),s=s.gad(s),r=b1.gV1(),p=b1.a,j=b1.b,i=t.af,h=b1.gXj(),g=t.A,f=t.R,e=t.b,d=t.fy,c=t.H7,b=t.m,a=c.h("O<ag.T>"),a0=t.k2;s.t();){a1=s.gI(s)
a2=a1.gd0(a1)
a3=a1.gn(a1)
a4=k.i(0,a2)
a5=j.i(0,a2)
if(a4==null)a6=b2
else{a1=o.k3
a1.toString
a4.a.toString
a3.a.toString
a6=new A.aht(b5,q,a1,b3,b4,a3,a4,p,r,b6,a5!=null)}if(a6!=null&&a6.gla()){k.A(0,a2)
if(a5!=null){a1=a5.f
a1===$&&A.b()
a7=a1.a
if(a7===B.c6&&a6.a===B.c7){a1=a5.e
a1===$&&A.b()
a1.saS(0,new A.fp(a6.gbY(a6),new A.bu(A.a([],g),f),0))
a1=a5.b
a1===$&&A.b()
a5.b=new A.y2(a1,a1.b,a1.a,a0)}else{a7=a7===B.c7&&a6.a===B.c6
a8=a5.e
if(a7){a8===$&&A.b()
a1=a6.gbY(a6)
a7=a5.f
a7=a7.gbY(a7)
a7=a7.gn(a7)
a8.saS(0,new A.O(b.a(a1),new A.ac(a7,1,c),a))
a1=a5.f
a7=a1.f
a8=a6.r
if(a7!==a8){a7.my(!0)
a8.vT()
a1=a5.f
a7=a5.b
a7===$&&A.b()
a5.b=a1.oO(a7.b,a6.gvf())}else{a7=a5.b
a7===$&&A.b()
a5.b=a1.oO(a7.b,a7.a)}}else{a7=a5.b
a7===$&&A.b()
a8===$&&A.b()
a5.b=a1.oO(a7.al(0,a8),a6.gvf())
a5.c=null
a1=a6.a
a7=a5.e
if(a1===B.c7)a7.saS(0,new A.fp(a6.gbY(a6),new A.bu(A.a([],g),f),0))
else a7.saS(0,a6.gbY(a6))
a5.f.f.my(!0)
a5.f.r.my(!0)
a6.f.vU(a1===B.c6)
a6.r.vT()
a1=a5.r.f.gbG()
if(a1!=null)a1.GT()}}a5.f=a6}else{a1=new A.kj(h,B.dc)
a7=A.a([],g)
a8=new A.bu(a7,f)
a9=new A.xD(a8,new A.bu(A.a([],e),d),0)
a9.a=B.Q
a9.b=0
a9.aR()
a8.b=!0
a7.push(a1.gWM())
a1.e=a9
a1.f=a6
switch(a6.a.a){case 1:a9.saS(0,new A.fp(a6.gbY(a6),new A.bu(A.a([],g),f),0))
b0=!1
break
case 0:a9.saS(0,a6.gbY(a6))
b0=!0
break
default:b0=b2}a7=a1.f
a1.b=a7.oO(a7.gL8(),a1.f.gvf())
a1.f.f.vU(b0)
a1.f.r.vT()
a7=a1.f
a8=new A.oo(!1,$.bO())
a8.b7$=!0
a8=new A.fl(a1.gU7(),!1,a8,new A.bz(b2,i))
a1.r=a8
a7.b.AI(0,a8)
a8=a1.e
a8.aR()
a8=a8.bm$
a8.b=!0
a8.a.push(a1.gMo())
j.k(0,a2,a1)}}else if(a5!=null)a5.w=!0}for(s=J.aC(k.gb_(k));s.t();)s.gI(s).KD()},
Xk(a){var s=a.f
s===$&&A.b()
this.b.A(0,s.f.a.c)},
V2(a,b,c,d,e){var s,r,q=e.f
q.toString
t.rA.a(q)
s=A.dM(e)
r=A.dM(d)
if(s==null||r==null)return q.e
return A.jn(b,new A.a3S(s,c,r.f,s.f,b,q),null)}}
A.a3U.prototype={
$1(a){var s=a.f
s===$&&A.b()
if(s.y)if(s.a===B.c7){s=a.e
s===$&&A.b()
s=s.gb6(s)===B.Q}else s=!1
else s=!1
return s},
$S:333}
A.a3T.prototype={
$1(a){var s=this
s.a.If(s.b,s.c,s.d,s.e)},
$S:2}
A.a3S.prototype={
$2(a,b){var s=this,r=s.c,q=s.d,p=s.e
r=s.b===B.c6?new A.v6(r,q).bi(0,p.gn(p)):new A.v6(q,r).bi(0,p.gn(p))
return new A.ej(s.a.zw(r),s.f.e,null)},
$S:334}
A.pM.prototype={
G(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.a4(t.I)
f.toString
s=f.w
r=A.att(a)
q=this.d
if(q==null)q=r.a
p=r.b
o=r.c
n=r.d
m=r.e
f=this.c
if(f==null)return A.dU(g,A.cy(g,q,q),!1,g,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)
l=r.r
k=l==null?g:A.J(l,0,1)
if(k==null)k=1
j=this.x
if(j==null){l=r.f
l.toString
j=l}if(k!==1)j=A.b7(B.d.b5(255*((j.gn(j)>>>24&255)/255*k)),j.gn(j)>>>16&255,j.gn(j)>>>8&255,j.gn(j)&255)
l=A.e4(f.a)
i=A.a([],t.Wj)
if(p!=null)i.push(new A.l3("FILL",p))
if(o!=null)i.push(new A.l3("wght",o))
if(n!=null)i.push(new A.l3("GRAD",n))
if(m!=null)i.push(new A.l3("opsz",m))
h=A.aux(g,g,B.XV,g,g,!0,g,A.k6(g,A.b5(g,g,j,g,g,g,g,g,"MaterialIcons",g,g,q,g,i,g,g,g,!1,g,g,g,g,g,r.w,g,g),l),B.bl,s,g,1,B.aX)
if(f.d)switch(s.a){case 0:f=new A.aT(new Float64Array(16))
f.c1()
f.fW(0,-1,1,1)
h=A.e9(B.t,h,f,!1)
break
case 1:break}return A.dU(g,new A.vf(!0,A.cy(A.bZ(h,g,g),q,q),g),!1,g,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)}}
A.pN.prototype={
l(a,b){var s
if(b==null)return!1
if(J.a0(b)!==A.D(this))return!1
if(b instanceof A.pN)if(b.a===this.a)s=b.d===this.d
else s=!1
else s=!1
return s},
gu(a){return A.Y(this.a,"MaterialIcons",null,this.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"IconData(U+"+B.b.i6(B.f.j5(this.a,16).toUpperCase(),5,"0")+")"}}
A.nf.prototype={
cg(a){return!this.w.l(0,a.w)}}
A.a4B.prototype={
$1(a){return A.apw(this.c,A.ats(a).cn(this.b),this.a)},
$S:335}
A.cR.prototype={
oN(a,b,c,d,e,f,g,h){var s,r=this,q=g==null?r.a:g,p=b==null?r.b:b,o=h==null?r.c:h,n=c==null?r.d:c,m=e==null?r.e:e,l=a==null?r.f:a
if(d==null){s=r.r
s=s==null?null:A.J(s,0,1)}else s=d
return new A.cR(q,p,o,n,m,l,s,f==null?r.w:f)},
hS(a){return this.oN(a,null,null,null,null,null,null,null)},
cn(a){var s=a.r
s=s==null?null:A.J(s,0,1)
return this.oN(a.f,a.b,a.d,s,a.e,a.w,a.a,a.c)},
a_(a){return this},
l(a,b){var s,r,q=this
if(b==null)return!1
if(J.a0(b)!==A.D(q))return!1
if(b instanceof A.cR)if(b.a==q.a)if(b.b==q.b)if(b.c==q.c)if(b.d==q.d)if(b.e==q.e)if(J.f(b.f,q.f)){s=b.r
s=s==null?null:A.J(s,0,1)
r=q.r
s=s==(r==null?null:A.J(r,0,1))&&A.d8(b.w,q.w)}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gu(a){var s,r=this,q=r.r
q=q==null?null:A.J(q,0,1)
s=r.w
s=s==null?null:A.dv(s)
return A.Y(r.a,r.b,r.c,r.d,r.e,r.f,q,s,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.QO.prototype={}
A.l9.prototype={
X(){return new A.At(B.i)}}
A.At.prototype={
a2(){var s=this
s.ag()
$.aq.bc$.push(s)
s.z=new A.Gu(s)},
m(){var s,r=this
B.c.A($.aq.bc$,r)
r.a0X()
s=r.at
if(s!=null)s.m()
s=r.z
s===$&&A.b()
s.a=null
r.yi(null)
r.aj()},
bf(){var s,r=this
r.a1r()
r.ym()
s=r.c
s.toString
if(A.av2(s))r.YU()
else r.Ii(!0)
r.cS()},
b4(a){var s,r,q=this
q.bx(a)
if(q.r&&q.a.e==null!==(a.e==null)){s=q.nY()
r=q.d
r.toString
r.Y(0,q.G3(!0))
q.d.F(0,s)}if(!q.a.c.l(0,a.c))q.ym()},
eQ(){this.ym()
this.Ri()},
a1r(){var s=this.c
s.toString
s=A.dM(s)
s=s==null?null:s.z
if(s==null){s=$.aaR.Ac$
s===$&&A.b()
s=(s.a&2)!==0}this.w=s},
ym(){var s,r,q,p,o=this,n=o.z
n===$&&A.b()
s=o.a
r=s.c
q=o.c
q.toString
p=s.r
if(p!=null&&s.w!=null){p.toString
s=s.w
s.toString
s=new A.K(p,s)}else s=null
o.a1C(new A.ye(n,r,t.JE).a_(A.ark(q,s)))},
G3(a){var s,r=this,q=r.ax
if(q==null||a){r.as=r.Q=null
q=r.a
s=q.e==null?null:r.gXo()
q=q.f!=null||!1?new A.ahK(r):null
q=r.ax=new A.dL(r.gXq(),s,q)}q.toString
return q},
nY(){return this.G3(!1)},
Xr(a,b){this.a7(new A.ahM(this,a,b))},
Xp(a){this.a7(new A.ahL(this,a))},
yi(a){var s=this.e
$.bS.cy$.push(new A.ahN(s))
this.e=a},
a1C(a){var s,r,q=this,p=q.d
if(p==null)s=null
else{s=p.a
if(s==null)s=p}r=a.a
if(s===(r==null?a:r))return
if(q.r){p.toString
p.F(0,q.nY())}q.a.toString
q.a7(new A.ahO(q))
q.a7(new A.ahP(q))
q.d=a
if(q.r)a.Y(0,q.nY())},
YU(){var s,r=this
if(r.r)return
s=r.d
s.toString
s.Y(0,r.nY())
s=r.at
if(s!=null)s.m()
r.at=null
r.r=!0},
Ii(a){var s,r=this
if(!r.r)return
if(a)if(r.at==null){s=r.d
s=(s==null?null:s.a)!=null}else s=!1
else s=!1
if(s)r.at=r.d.a.n_()
s=r.d
s.toString
s.F(0,r.nY())
r.r=!1},
a0X(){return this.Ii(!1)},
G(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.Q
if(d!=null){s=f.a.f
if(s!=null)return s.$3(a,d,f.as)}d=f.e
s=d==null
r=s?e:d.a
q=s?e:d.c
p=f.a
o=p.r
n=p.w
d=s?e:d.b
if(d==null)d=1
s=p.x
m=p.Q
l=p.as
k=p.at
j=p.ax
i=p.ch
h=f.w
h===$&&A.b()
g=new A.LN(r,q,o,n,d,s,e,p.z,m,l,k,j,e,i,h,!1,e)
g=A.dU(e,g,!1,e,!1,e,e,e,!0,"",e,e,e,e,e,e,e,e,e,e,e)
d=p.d
if(d!=null)g=d.$4(a,g,f.x,f.y)
d=f.a.e
return d!=null?d.$3(a,g,f.f):g}}
A.ahK.prototype={
$2(a,b){var s=this.a
s.a7(new A.ahJ(s,a,b))},
$S:336}
A.ahJ.prototype={
$0(){var s=this.a
s.Q=this.b
s.as=this.c},
$S:0}
A.ahM.prototype={
$0(){var s,r=this.a
r.yi(this.b)
r.as=r.Q=r.f=null
s=r.x
r.x=s==null?0:s+1
r.y=B.oi.Ob(r.y,this.c)},
$S:0}
A.ahL.prototype={
$0(){var s=this.a
s.f=this.b
s.as=s.Q=null},
$S:0}
A.ahN.prototype={
$1(a){var s=this.a
if(s!=null)s.a.m()
return null},
$S:2}
A.ahO.prototype={
$0(){this.a.yi(null)},
$S:0}
A.ahP.prototype={
$0(){var s=this.a
s.x=s.f=null
s.y=!1},
$S:0}
A.VA.prototype={}
A.Gg.prototype={
d1(a){var s=A.Zt(this.a,this.b,a)
s.toString
return s}}
A.v6.prototype={
d1(a){var s=A.ape(this.a,this.b,a)
s.toString
return s}}
A.mz.prototype={
d1(a){return A.p3(this.a,this.b,a)}}
A.og.prototype={
d1(a){var s=A.bh(this.a,this.b,a)
s.toString
return s}}
A.I7.prototype={}
A.pS.prototype={
gkr(){var s,r,q=this,p=q.d
if(p===$){s=q.a.d
r=A.bi(null,s,null,null,q)
q.d!==$&&A.br()
q.d=r
p=r}return p},
gh_(){var s,r=this,q=r.e
if(q===$){s=r.gkr()
q=r.e=A.bb(r.a.c,s,null)}return q},
a2(){var s,r=this
r.ag()
s=r.gkr()
s.aR()
s=s.ca$
s.b=!0
s.a.push(new A.a50(r))
r.Fq()},
b4(a){var s,r=this
r.bx(a)
if(r.a.c!==a.c){r.gh_().m()
s=r.gkr()
r.e=A.bb(r.a.c,s,null)}r.gkr().e=r.a.d
if(r.Fq()){r.ps(new A.a5_(r))
s=r.gkr()
s.sn(0,0)
s.dc(0)}},
m(){this.gh_().m()
this.gkr().m()
this.Rw()},
a1F(a,b){if(a==null)return
a.szg(a.al(0,this.gh_()))
a.saZ(0,b)},
Fq(){var s={}
s.a=!1
this.ps(new A.a4Z(s,this))
return s.a}}
A.a50.prototype={
$1(a){switch(a.a){case 3:this.a.a.toString
break
case 0:case 1:case 2:break}},
$S:5}
A.a5_.prototype={
$3(a,b,c){this.a.a1F(a,b)
return a},
$S:124}
A.a4Z.prototype={
$3(a,b,c){var s
if(b!=null){if(a==null)a=c.$1(b)
s=a.b
if(!J.f(b,s==null?a.a:s))this.a.a=!0
else if(a.b==null)a.saZ(0,a.a)}else a=null
return a},
$S:124}
A.oW.prototype={
a2(){this.PB()
var s=this.gkr()
s.aR()
s=s.bm$
s.b=!0
s.a.push(this.gWK())},
WL(){this.a7(new A.Xe())}}
A.Xe.prototype={
$0(){},
$S:0}
A.tM.prototype={
X(){return new A.OH(null,null,B.i)}}
A.OH.prototype={
ps(a){this.CW=t.Dh.a(a.$3(this.CW,this.a.w,new A.afp()))},
G(a){var s,r=this.CW
r.toString
s=this.gh_()
s=r.bi(0,s.gn(s))
return A.uM(this.a.r,null,B.d3,!0,s,null,null,B.aX)}}
A.afp.prototype={
$1(a){return new A.og(t.em.a(a),null)},
$S:338}
A.tN.prototype={
X(){return new A.OI(null,null,B.i)}}
A.OI.prototype={
ps(a){var s=this,r=s.CW
s.a.toString
s.CW=t.eJ.a(a.$3(r,B.aM,new A.afq()))
s.cx=t.ir.a(a.$3(s.cx,s.a.z,new A.afr()))
r=t.YJ
s.cy=r.a(a.$3(s.cy,s.a.Q,new A.afs()))
s.db=r.a(a.$3(s.db,s.a.at,new A.aft()))},
G(a){var s,r,q,p,o,n=this,m=n.a,l=m.w
m=m.x
s=n.CW
s.toString
r=n.gh_()
r=s.bi(0,r.gn(r))
s=n.cx
s.toString
s=s.al(0,n.gh_())
q=n.a.Q
p=n.db
p.toString
o=n.gh_()
o=p.bi(0,o.gn(o))
o.toString
return new A.Lr(l,m,r,s,q,o,n.a.r,null)}}
A.afq.prototype={
$1(a){return new A.mz(t.m_.a(a),null)},
$S:339}
A.afr.prototype={
$1(a){return new A.ac(A.Wp(a),null,t.H7)},
$S:125}
A.afs.prototype={
$1(a){return new A.ie(t.n8.a(a),null)},
$S:59}
A.aft.prototype={
$1(a){return new A.ie(t.n8.a(a),null)},
$S:59}
A.rU.prototype={
m(){var s=this,r=s.aa$
if(r!=null)r.F(0,s.gc8())
s.aa$=null
s.aj()},
aU(){this.bd()
this.b8()
this.c9()}}
A.lb.prototype={
c_(a){var s=A.ht(t.h,t.X)
return new A.vT(s,this,B.a9,A.o(this).h("vT<lb.T>"))}}
A.vT.prototype={
Nn(a,b){var s=this.bg,r=this.$ti,q=r.h("cs<1>?").a(s.i(0,a))
if(q!=null&&q.gO(q))return
s.k(0,a,A.dc(r.c))},
Me(a,b){var s,r=this.$ti,q=r.h("cs<1>?").a(this.bg.i(0,b))
if(q==null)return
if(!q.gO(q)){s=this.f
s.toString
s=r.h("lb<1>").a(s).a9j(a,q)
r=s}else r=!0
if(r)b.bf()}}
A.iw.prototype={
cg(a){return a.f!==this.f},
c_(a){var s=new A.rV(A.ht(t.h,t.X),this,B.a9,A.o(this).h("rV<iw.T>"))
this.f.Y(0,s.gxJ())
return s}}
A.rV.prototype={
bo(a,b){var s,r,q=this,p=q.f
p.toString
s=q.$ti.h("iw<1>").a(p).f
r=b.f
if(s!==r){p=q.gxJ()
s.F(0,p)
r.Y(0,p)}q.Qn(0,b)},
be(){var s,r=this
if(r.bH){s=r.f
s.toString
r.DR(r.$ti.h("iw<1>").a(s))
r.bH=!1}return r.Qm()},
Yn(){this.bH=!0
this.eN()},
n4(a){this.DR(a)
this.bH=!1},
ln(){var s=this,r=s.f
r.toString
s.$ti.h("iw<1>").a(r).f.F(0,s.gxJ())
s.w3()}}
A.I8.prototype={}
A.kV.prototype={
c_(a){return new A.rX(this,B.a9,A.o(this).h("rX<kV.0>"))}}
A.rX.prototype={
ga5(){return this.$ti.h("fo<1,z>").a(A.bp.prototype.ga5.call(this))},
b0(a){var s=this.p1
if(s!=null)a.$1(s)},
iM(a){this.p1=null
this.kk(a)},
fn(a,b){var s=this
s.qM(a,b)
s.$ti.h("fo<1,z>").a(A.bp.prototype.ga5.call(s)).Cq(s.gGL())},
bo(a,b){var s,r=this
r.lJ(0,b)
s=r.$ti.h("fo<1,z>")
s.a(A.bp.prototype.ga5.call(r)).Cq(r.gGL())
s=s.a(A.bp.prototype.ga5.call(r))
s.tZ$=!0
s.a6()},
hm(){var s=this.$ti.h("fo<1,z>").a(A.bp.prototype.ga5.call(this))
s.tZ$=!0
s.a6()
this.wb()},
ln(){this.$ti.h("fo<1,z>").a(A.bp.prototype.ga5.call(this)).Cq(null)
this.QB()},
YQ(a){this.r.oC(this,new A.ai6(this,a))},
iQ(a,b){this.$ti.h("fo<1,z>").a(A.bp.prototype.ga5.call(this)).saQ(a)},
iU(a,b,c){},
j1(a,b){this.$ti.h("fo<1,z>").a(A.bp.prototype.ga5.call(this)).saQ(null)}}
A.ai6.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{o=k.a
n=o.f
n.toString
j=o.$ti.h("kV<1>").a(n).c.$2(o,k.b)
o.f.toString}catch(m){s=A.ai(m)
r=A.az(m)
o=k.a
l=A.vd(A.awz(A.bt("building "+o.f.j(0)),s,r,new A.ai7(o)))
j=l}try{o=k.a
o.p1=o.dC(o.p1,j,null)}catch(m){q=A.ai(m)
p=A.az(m)
o=k.a
l=A.vd(A.awz(A.bt("building "+o.f.j(0)),q,p,new A.ai8(o)))
j=l
o.p1=o.dC(null,j,o.d)}},
$S:0}
A.ai7.prototype={
$0(){var s=A.a([],t.E)
return s},
$S:13}
A.ai8.prototype={
$0(){var s=A.a([],t.E)
return s},
$S:13}
A.fo.prototype={
Cq(a){if(J.f(a,this.Ag$))return
this.Ag$=a
this.a6()}}
A.In.prototype={
aH(a){var s=new A.SV(null,!0,null,null,A.ay())
s.aK()
return s}}
A.SV.prototype={
ck(a){return B.R},
bD(){var s=this,r=t.k,q=r.a(A.z.prototype.ga1.call(s))
if(s.tZ$||!r.a(A.z.prototype.ga1.call(s)).l(0,s.KQ$)){s.KQ$=r.a(A.z.prototype.ga1.call(s))
s.tZ$=!1
r=s.Ag$
r.toString
s.AM(r,A.o(s).h("fo.0"))}r=s.B$
if(r!=null){r.cC(q,!0)
r=s.B$.k3
r.toString
s.k3=q.by(r)}else s.k3=new A.K(A.J(1/0,q.a,q.b),A.J(1/0,q.c,q.d))},
eG(a){var s=this.B$
if(s!=null)return s.j7(a)
return this.w8(a)},
d_(a,b){var s=this.B$
s=s==null?null:s.c5(a,b)
return s===!0},
aF(a,b){var s=this.B$
if(s!=null)a.eP(s,b)}}
A.VO.prototype={
aB(a){var s
this.eA(a)
s=this.B$
if(s!=null)s.aB(a)},
au(a){var s
this.dT(0)
s=this.B$
if(s!=null)s.au(0)}}
A.VP.prototype={}
A.t7.prototype={}
A.amZ.prototype={
$1(a){return this.a.a=a},
$S:29}
A.an_.prototype={
$1(a){return a.b},
$S:340}
A.an0.prototype={
$1(a){var s,r,q,p
for(s=J.aN(a),r=this.a,q=this.b,p=0;p<s.gp(a);++p)q.k(0,A.aK(A.o(r.a[p].a).h("df.T")),s.i(a,p))
return q},
$S:341}
A.df.prototype={
j(a){return"LocalizationsDelegate["+A.aK(A.o(this).h("df.T")).j(0)+"]"}}
A.Vl.prototype={
mY(a){return!0},
dd(a,b){return new A.bA(B.E1,t.E8)},
lz(a){return!1},
j(a){return"DefaultWidgetsLocalizations.delegate(en_US)"}}
A.Gm.prototype={
gbJ(){return B.w},
$ikd:1}
A.AH.prototype={
cg(a){return this.w!==a.w}}
A.wn.prototype={
X(){return new A.Rg(new A.bz(null,t.C),A.y(t.n,t.z),B.i)}}
A.Rg.prototype={
a2(){this.ag()
this.dd(0,this.a.c)},
TP(a){var s,r,q,p,o,n,m=this.a.d,l=a.d
if(m.length!==l.length)return!0
s=A.a(m.slice(0),A.ap(m))
r=A.a(l.slice(0),A.ap(l))
for(q=0;q<s.length;++q){p=s[q]
o=r[q]
n=p instanceof A.c5?A.d7(p):null
m=A.aK(n==null?A.b1(p):n)
n=o instanceof A.c5?A.d7(o):null
if(m===A.aK(n==null?A.b1(o):n)){p.lz(o)
m=!1}else m=!0
if(m)return!0}return!1},
b4(a){var s,r=this
r.bx(a)
if(r.a.c.l(0,a.c)){r.a.toString
s=r.TP(a)}else s=!0
if(s)r.dd(0,r.a.c)},
dd(a,b){var s,r=this,q={},p=r.a.d,o=p.length
if(o===0){r.f=b
return}q.a=null
s=A.aJ3(b,p).aI(new A.aig(q),t.e3)
q=q.a
if(q!=null){r.e=q
r.f=b}else{++$.lH.bA$
s.aI(new A.aih(r,b),t.H)}},
gIr(){return t.Uh.a(J.aY(this.e,B.a1l)).gbJ()},
G(a){var s,r,q,p=this,o=null
if(p.f==null)return B.e8
s=p.gIr()
p.f.toString
r=p.e
q=p.gIr()
return A.dU(o,new A.AH(p,r,A.apb(p.a.e,q),p.d),!1,o,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,s,o,o)}}
A.aig.prototype={
$1(a){return this.a.a=a},
$S:342}
A.aih.prototype={
$1(a){var s=this.a
if(s.c!=null)s.a7(new A.aif(s,a,this.b))
$.lH.Jr()},
$S:343}
A.aif.prototype={
$0(){var s=this.a
s.e=this.b
s.f=this.c},
$S:0}
A.xf.prototype={
H(){return"Orientation."+this.b}}
A.jJ.prototype={
tt(a,b,c,d,e){var s=this,r=c==null?s.c:c,q=a==null?s.f:a,p=e==null?s.r:e,o=d==null?s.e:d
return new A.jJ(s.a,s.b,r,s.d,o,q,p,s.w,!1,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch)},
zx(a){return this.tt(null,null,a,null,null)},
zw(a){return this.tt(a,null,null,null,null)},
a3L(a,b){return this.tt(null,null,null,a,b)},
a3K(a,b){return this.tt(a,null,null,null,b)},
MR(a,b,c,d){var s,r,q,p,o,n,m=this,l=null
if(!(b||d||c||a))return m
s=m.f
r=b?0:l
q=d?0:l
p=c?0:l
r=s.mr(a?0:l,r,p,q)
q=m.r
p=b?Math.max(0,q.a-s.a):l
o=d?Math.max(0,q.b-s.b):l
n=c?Math.max(0,q.c-s.c):l
return m.a3K(r,q.mr(a?Math.max(0,q.d-s.d):l,p,n,o))},
a8o(a){var s=this,r=null,q=s.r,p=s.e,o=Math.max(0,q.d-p.d)
q=q.mr(o,r,r,r)
return s.a3L(p.mr(0,r,r,r),q)},
l(a,b){var s=this
if(b==null)return!1
if(J.a0(b)!==A.D(s))return!1
return b instanceof A.jJ&&b.a.l(0,s.a)&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.f.l(0,s.f)&&b.r.l(0,s.r)&&b.e.l(0,s.e)&&b.Q===s.Q&&b.as===s.as&&b.z===s.z&&b.y===s.y&&b.at===s.at&&b.ax===s.ax&&b.ay.l(0,s.ay)&&A.d8(b.ch,s.ch)},
gu(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.f,s.r,s.e,!1,s.Q,s.as,s.z,s.y,s.at,s.ax,s.ay,A.dv(s.ch),B.a,B.a,B.a,B.a)},
j(a){var s=this
return"MediaQueryData("+B.c.bb(A.a(["size: "+s.a.j(0),"devicePixelRatio: "+B.d.N(s.b,1),"textScaleFactor: "+B.d.N(s.c,1),"platformBrightness: "+s.d.j(0),"padding: "+s.f.j(0),"viewPadding: "+s.r.j(0),"viewInsets: "+s.e.j(0),"alwaysUse24HourFormat: false","accessibleNavigation: "+s.y,"highContrast: "+s.Q,"disableAnimations: "+s.as,"invertColors: "+s.z,"boldText: "+s.at,"navigationMode: "+s.ax.b,"gestureSettings: "+s.ay.j(0),"displayFeatures: "+A.h(s.ch)],t.s),", ")+")"}}
A.ej.prototype={
cg(a){return!this.f.l(0,a.f)}}
A.KG.prototype={
H(){return"NavigationMode."+this.b}}
A.AO.prototype={
X(){return new A.Ro(B.i)}}
A.Ro.prototype={
a2(){this.ag()
$.aq.bc$.push(this)},
tC(){this.a7(new A.aiC())},
Kj(){this.a7(new A.aiE())},
Ki(){this.a7(new A.aiD())},
G(a){var s
$.aq.toString
s=A.atT($.cG())
return new A.ej(s,this.a.c,null)},
m(){B.c.A($.aq.bc$,this)
this.aj()}}
A.aiC.prototype={
$0(){},
$S:0}
A.aiE.prototype={
$0(){},
$S:0}
A.aiD.prototype={
$0(){},
$S:0}
A.VC.prototype={}
A.wQ.prototype={
G(a){var s,r=null
switch(A.mk().a){case 0:case 1:case 3:case 5:break
case 2:case 4:break}s=this.c
return A.aB_(new A.vf(!0,new A.Rx(A.dU(r,A.wS(new A.hh(B.mG,s==null?r:new A.ur(s,r,r),r),B.m9,r,r,r),!1,r,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),new A.a6E(this,a),r),r))}}
A.a6E.prototype={
$0(){A.NN(B.XI)},
$S:0}
A.rs.prototype={
fN(a){if(this.y1==null)return!1
return this.nE(a)},
Lg(a){},
Lh(a,b){var s=this.y1
if(s!=null)s.$0()},
ue(a,b,c){}}
A.aiI.prototype={
za(a){a.sjX(this.a)}}
A.ON.prototype={
JY(){var s=t.S,r=A.dc(s)
return new A.rs(B.b9,18,B.bH,A.y(s,t.o),r,null,null,A.y(s,t._))},
Lw(a){a.y1=this.a}}
A.Rx.prototype={
G(a){var s=this.d
return new A.lE(this.c,A.aZ([B.a1m,new A.ON(s)],t.n,t.xR),B.aQ,!1,new A.aiI(s),null)}}
A.nS.prototype={
H(){return"RoutePopDisposition."+this.b}}
A.ce.prototype={
guO(){return B.tc},
i2(){},
oX(){var s=A.aqk()
s.aI(new A.a9F(this),t.H)
return s},
oU(){var s=this.a
if(s==null)s=null
else{s.a.toString
s=!0}if(s===!0)A.aqk().aI(new A.a9E(this),t.H)},
zT(a){},
fS(){var s=0,r=A.a5(t.oj),q,p=this
var $async$fS=A.a1(function(a,b){if(a===1)return A.a2(b,r)
while(true)switch(s){case 0:q=p.gAP()?B.VI:B.BK
s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$fS,r)},
gNv(){return!1},
kQ(a){this.a4o(a)
return!0},
a4o(a){this.d.bS(0,null)},
mv(a){},
oV(a){},
oW(a){},
oE(){},
tm(){},
m(){this.a=null},
gl8(){var s,r=this.a
if(r==null)return!1
r=r.e
r=new A.bE(r,A.ap(r).h("bE<1,dD?>"))
s=r.n1(r,new A.a9I(),new A.a9J())
if(s==null)return!1
return s.a===this},
gAP(){var s,r=this.a
if(r==null)return!1
r=r.e
r=new A.bE(r,A.ap(r).h("bE<1,dD?>"))
s=r.u6(r,new A.a9K(),new A.a9L())
if(s==null)return!1
return s.a===this},
gAB(){var s,r,q,p,o=this.a
if(o==null)return!1
for(o=o.e,s=o.length,r=0;r<s;++r){q=o[r]
if(q.a===this)return!1
p=q.d.a
if(p<=10&&p>=1)return!0}return!1},
ga6y(){var s=this.a
if(s==null)return!1
s=s.e
s=new A.bE(s,A.ap(s).h("bE<1,dD?>"))
s=s.u6(s,new A.a9G(this),new A.a9H())
s=s==null?null:s.gl9()
return s===!0}}
A.a9F.prototype={
$1(a){var s,r=this.a.a
if(r==null)s=null
else{r.a.toString
s=!0}if(s===!0){r=r.x.ge_()
if(r!=null)r.v9()}},
$S:21}
A.a9E.prototype={
$1(a){var s=this.a.a
if(s!=null){s=s.x.ge_()
if(s!=null)s.v9()}},
$S:21}
A.a9I.prototype={
$1(a){return a!=null&&a.gl9()},
$S:28}
A.a9J.prototype={
$0(){return null},
$S:3}
A.a9K.prototype={
$1(a){return a!=null&&a.gl9()},
$S:28}
A.a9L.prototype={
$0(){return null},
$S:3}
A.a9G.prototype={
$1(a){return a!=null&&A.avB(this.a).$1(a)},
$S:28}
A.a9H.prototype={
$0(){return null},
$S:3}
A.fU.prototype={
j(a){var s=this.a
s=s==null?"none":'"'+s+'"'
return"RouteSettings("+s+", "+A.h(this.b)+")"}}
A.jL.prototype={
tF(a,b){},
tE(a,b){},
zS(a,b){},
tG(a,b){},
Kl(a,b){},
kR(){}}
A.n8.prototype={
cg(a){return a.f!=this.f}}
A.a9D.prototype={}
A.Ob.prototype={}
A.Gl.prototype={}
A.x3.prototype={
X(){var s=null,r=A.a([],t.uD),q=$.bO(),p=t.Tp
return new A.fO(r,new A.QH(q),A.jH(s,p),A.jH(s,p),A.apl(!0,"Navigator",!0,!0,s,s,!1),new A.y0(0,q,t.dZ),A.hS(!1),A.bc(t.S),s,A.y(t.yb,t.O),s,!0,s,s,s,B.i)},
a7r(a,b){return this.z.$2(a,b)}}
A.a7a.prototype={
$1(a){return a==null},
$S:345}
A.eo.prototype={
H(){return"_RouteLifecycle."+this.b}}
A.RI.prototype={}
A.dD.prototype={
gd3(){var s,r
if(this.c){s=t.sd.a(this.a.b)
s.gd3()
r=A.h(s.gd3())
return"p+"+r}r=this.b
if(r!=null)return"r+"+r.gN1()
return null},
a5A(a,b,c,d){var s,r,q,p=this,o=p.d,n=p.a
n.a=b
n.i2()
s=p.d
if(s===B.D5||s===B.D6){r=n.oX()
p.d=B.D7
r.Nu(new A.ak6(p,b))}else{n.zT(c)
p.d=B.d7}if(a)n.oV(null)
s=o===B.a2M||o===B.D6
q=b.r
if(s)q.dH(0,new A.B1(n,d))
else q.dH(0,new A.t4(n,d))},
a5z(a,b){var s,r=this
r.d=B.a2I
s=r.a
if((s.d.a.a&30)!==0)return!0
if(!s.kQ(r.w)){r.d=B.d7
return!1}r.w=null
return!0},
m(){var s,r,q,p,o,n,m={}
this.d=B.a2K
s=this.a
r=s.guO()
q=new A.ak4()
p=new A.aR(r,q,A.ap(r).h("aR<1>"))
if(!p.gad(p).t())s.m()
else{m.a=p.gp(p)
for(s=B.c.gad(r),q=new A.rq(s,q);q.t();){r=s.gI(s)
o=A.ba("listener")
n=new A.ak5(m,this,r,o)
o.b=n
r.d.Y(0,n)}}},
ga9s(){var s=this.d.a
return s<=7&&s>=1},
gl9(){var s=this.d.a
return s<=10&&s>=1}}
A.ak6.prototype={
$0(){var s=this.a
if(s.d===B.D7){s.d=B.d7
this.b.xd()}},
$S:0}
A.ak4.prototype={
$1(a){return a.d.a},
$S:346}
A.ak5.prototype={
$0(){var s=this,r=s.a;--r.a
s.c.d.F(0,s.d.aL())
if(r.a===0)s.b.a.m()},
$S:0}
A.ak7.prototype={
$1(a){return a.a===this.a},
$S:53}
A.m7.prototype={}
A.t4.prototype={
le(a){a.tF(this.a,this.b)}}
A.t3.prototype={
le(a){a.tE(this.a,this.b)}}
A.B0.prototype={
le(a){a.zS(this.a,this.b)}}
A.B1.prototype={
le(a){a.tG(this.a,this.b)}}
A.fO.prototype={
a2(){var s,r,q,p,o=this
o.ag()
for(s=o.a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
$.i4().a.set(p,o)}o.Q=o.a.x
s=o.c.kb(t.mS)
if(s==null)s=null
else{s=s.f
s.toString}t._I.a(s)
o.yJ(s==null?null:s.f)
o.a.toString
B.fP.uo("selectSingleEntryHistory",t.H)},
j2(a,b){var s,r,q,p,o,n,m=this
m.na(m.as,"id")
s=m.f
m.na(s,"history")
for(;r=m.e,r.length!==0;)r.pop().m()
m.d=new A.bz(null,t.ku)
B.c.L(r,s.N2(null,m))
m.a.toString
q=0
for(;!1;++q){p=B.Oy[q]
r=m.c
r.toString
r=p.zC(r)
o=$.aoC()
n=new A.dD(r,null,!0,B.mq,o,o,o)
m.e.push(n)
B.c.L(m.e,s.N2(n,m))}if(s.y==null){s=m.a
r=m.e
o=s.f
B.c.L(r,J.tI(s.a7r(m,o),new A.a79(m),t.Ez))}m.xd()},
zV(a){var s,r=this
r.QK(a)
s=r.f
if(r.bu$!=null)s.bo(0,r.e)
else s.Z(0)},
gd3(){return this.a.y},
bf(){var s,r,q,p,o=this
o.RA()
s=o.c.a4(t.mS)
o.yJ(s==null?null:s.f)
for(r=o.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.P)(r),++p)r[p].a.tm()},
yJ(a){var s,r,q=this
if(q.z!=a){if(a!=null)$.i4().a.set(a,q)
s=q.z
if(s==null)s=null
else{r=$.i4()
A.pD(s)
s=r.a.get(s)}if(s===q){s=$.i4()
r=q.z
r.toString
s.a.set(r,null)}q.z=a
q.IO()}},
IO(){var s=this,r=s.z,q=s.a
if(r!=null)s.Q=B.c.U(q.x,A.a([r],t.tc))
else s.Q=q.x},
b4(a){var s,r,q,p,o=this
o.RB(a)
s=a.x
if(s!==o.a.x){for(r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
$.i4().a.set(p,null)}for(s=o.a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
$.i4().a.set(p,o)}o.IO()}o.a.toString
for(s=o.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].a.tm()},
d7(){var s,r,q,p=this.Q
p===$&&A.b()
s=p.length
r=0
for(;r<p.length;p.length===s||(0,A.P)(p),++r){q=p[r]
$.i4().a.set(q,null)}this.kl()},
aU(){var s,r,q,p
this.Ry()
s=this.Q
s===$&&A.b()
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
$.i4().a.set(p,this)}},
m(){var s,r,q,p=this
p.yJ(null)
p.x.m()
for(s=p.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].m()
p.RC()},
gEK(){var s,r,q,p=A.a([],t.wi)
for(s=this.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)B.c.L(p,s[q].a.guO())
return p},
xe(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null
a.ay=!0
s=a.e
r=s.length-1
q=s[r]
p=r>0?s[r-1]:a0
o=A.a([],t.uD)
for(s=a.w,n=a.r,m=a0,l=m,k=!1,j=!1;r>=0;){switch(q.d.a){case 1:i=a.ji(r-1,A.aru())
h=i>=0?a.e[i]:a0
h=h==null?a0:h.a
g=q.a
g.a=a
g.i2()
q.d=B.a2L
n.dH(0,new A.t4(g,h))
continue
case 2:if(k||l==null){h=q.a
h.oU()
q.d=B.d7
if(l==null)h.oV(a0)
continue}break
case 3:case 4:case 6:h=p==null?a0:p.a
i=a.ji(r-1,A.aru())
g=i>=0?a.e[i]:a0
g=g==null?a0:g.a
q.a5A(l==null,a,h,g)
if(q.d===B.d7)continue
break
case 5:if(!j&&m!=null){q.a.mv(m)
q.f=m}j=!0
break
case 7:if(!j&&m!=null){q.a.mv(m)
q.f=m}k=!0
j=!0
break
case 8:i=a.ji(r,A.Di())
h=i>=0?a.e[i]:a0
if(!q.a5z(a,h==null?a0:h.a))continue
if(!j){if(m!=null){q.a.mv(m)
q.f=m}m=q.a}h=q.a
i=a.ji(r,A.Di())
g=i>=0?a.e[i]:a0
s.dH(0,new A.t3(h,g==null?a0:g.a))
if(q.d===B.mr)continue
k=!0
break
case 11:break
case 9:h=q.a
h=h.d.a
if((h.a&30)!==0)A.L(A.ab("Future already completed"))
h.fu(a0)
q.w=null
q.d=B.a2H
continue
case 10:if(!j){if(m!=null)q.a.mv(m)
m=a0}i=a.ji(r,A.Di())
h=i>=0?a.e[i]:a0
h=h==null?a0:h.a
q.d=B.a2J
if(q.x)s.dH(0,new A.B0(q.a,h))
continue
case 12:if(!k&&l!=null)break
q.d=B.mr
continue
case 13:o.push(B.c.ep(a.e,r))
q=l
break
case 14:case 0:break}--r
f=r>0?a.e[r-1]:a0
l=q
q=p
p=f}a.VT()
a.VV()
a.a.toString
s=a.e
s=new A.bE(s,A.ap(s).h("bE<1,dD?>"))
e=s.n1(s,new A.a73(),new A.a74())
d=e==null?a0:e.a.b.a
if(d!=null&&d!==a.at){A.auW(d,!1,a0)
a.at=d}for(s=o.length,c=0;c<o.length;o.length===s||(0,A.P)(o),++c){q=o[c]
for(n=q.a.guO(),h=n.length,b=0;b<n.length;n.length===h||(0,A.P)(n),++b)J.aAD(n[b])
q.m()}if(a1){s=a.d
s===$&&A.b()
s=s.gbG()
if(s!=null)s.a89(a.gEK())}if(a.bu$!=null)a.f.bo(0,a.e)
a.ay=!1},
xd(){return this.xe(!0)},
VT(){var s,r=this,q=r.Q
q===$&&A.b()
if(q.length===0){r.w.Z(0)
r.r.Z(0)
return}for(q=r.r;!q.gO(q);){s=q.e8(0)
B.c.W(r.Q,s.gpR())}for(q=r.w;!q.gO(q);){s=q.nc()
B.c.W(r.Q,s.gpR())}},
VV(){var s,r,q,p,o,n,m=this,l=null,k=m.e.length-1
for(;k>=0;){s=m.e[k]
r=s.d.a
if(!(r<=12&&r>=3)){--k
continue}q=m.Wp(k+1,A.axH())
r=q==null
p=r?l:q.a
o=s.r
if(p!=o){if((r?l:q.a)==null){p=s.f
p=p!=null&&p===o}else p=!1
if(!p){p=s.a
p.oV(r?l:q.a)}s.r=r?l:q.a}--k
n=m.ji(k,A.axH())
r=n>=0?m.e[n]:l
p=r==null
o=p?l:r.a
if(o!=s.e){o=s.a
o.oW(p?l:r.a)
s.e=p?l:r.a}}},
G8(a,b){a=this.ji(a,b)
return a>=0?this.e[a]:null},
ji(a,b){while(!0){if(!(a>=0&&!b.$1(this.e[a])))break;--a}return a},
Wp(a,b){var s
while(!0){s=this.e
if(!(a<s.length&&!b.$1(s[a])))break;++a}s=this.e
return a<s.length?s[a]:null},
rF(a,b,c,d){var s,r,q
if(b)this.a.toString
s=new A.fU(a,c)
r=d.h("ce<0?>?")
q=r.a(this.a.r.$1(s))
return q==null&&!b?r.a(this.a.w.$1(s)):q},
yq(a,b,c){return this.rF(a,!1,b,c)},
a7S(a){var s=A.avA(a,B.D5,!1,null)
this.e.push(s)
this.xd()
this.EI(s.a)
return a.d.a},
v_(a){return this.a7S(a,t.X)},
EI(a){this.Ui()},
pM(a){var s=0,r=A.a5(t.y),q,p=this,o,n,m
var $async$pM=A.a1(function(b,c){if(b===1)return A.a2(c,r)
while(true)$async$outer:switch(s){case 0:m=p.e
m=new A.bE(m,A.ap(m).h("bE<1,dD?>"))
o=m.n1(m,new A.a75(),new A.a76())
if(o==null){q=!1
s=1
break}s=3
return A.a9(o.a.fS(),$async$pM)
case 3:n=c
if(p.c==null){q=!0
s=1
break}m=p.e
m=new A.bE(m,A.ap(m).h("bE<1,dD?>"))
if(o!==m.n1(m,new A.a77(),new A.a78())){q=!0
s=1
break}switch(n.a){case 2:q=!1
s=1
break $async$outer
case 0:p.a7O(a)
q=!0
s=1
break $async$outer
case 1:q=!0
s=1
break $async$outer}case 1:return A.a3(q,r)}})
return A.a4($async$pM,r)},
M5(){return this.pM(null,t.X)},
a7a(a){return this.pM(a,t.X)},
Mu(a){var s=this,r=B.c.a6O(s.e,A.aru())
if(r.c){s.a.toString
if(null.$2(r.a,a)&&r.d===B.d7)r.d=B.ms}else{r.w=a
r.d=B.ms}if(r.d===B.ms)s.xe(!1)
s.EI(r.a)},
a7O(a){return this.Mu(a,t.X)},
ho(){return this.Mu(null,t.X)},
KU(a){var s,r=this,q=B.c.Ls(r.e,A.avB(a)),p=r.e[q]
if(p.c&&p.d.a<8){s=r.G8(q-1,A.Di())
s=s==null?null:s.a
r.w.dH(0,new A.t3(a,s))}p.d=B.mr
if(!r.ay)r.xe(!1)},
sJ3(a){this.ch=a
this.CW.sn(0,a>0)},
Kk(){var s,r,q,p,o,n,m=this
m.sJ3(m.ch+1)
if(m.ch===1){s=m.ji(m.e.length-1,A.Di())
r=m.e[s].a
q=!r.gNv()&&s>0?m.G8(s-1,A.Di()).a:null
p=m.Q
p===$&&A.b()
o=p.length
n=0
for(;n<p.length;p.length===o||(0,A.P)(p),++n)p[n].Kl(r,q)}},
kR(){var s,r,q,p=this
p.sJ3(p.ch-1)
if(p.ch===0){s=p.Q
s===$&&A.b()
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].kR()}},
XI(a){this.cx.D(0,a.gc6())},
XQ(a){this.cx.A(0,a.gc6())},
Ui(){if($.bS.dy$===B.cY){var s=this.d
s===$&&A.b()
s=$.aq.an$.z.i(0,s)
this.a7(new A.a72(s==null?null:s.u3(t.MY)))}s=this.cx
B.c.W(A.aF(s,!0,A.o(s).c),$.aq.ga2J())},
G(a){var s,r=this,q=null,p=r.gXP(),o=A.atk(a),n=r.bu$,m=r.d
m===$&&A.b()
r.a.toString
if(m.gbG()==null){s=r.gEK()
s=J.nm(s.slice(0),A.ap(s).c)}else s=B.tc
return new A.n8(q,A.wk(B.c8,new A.Du(!1,A.atj(A.Hx(!0,q,A.aeW(n,new A.qe(s,B.z,m)),q,q,q,r.x,!1,q,q,q,q,q,!0),o),q),p,r.gXH(),q,q,p),q)}}
A.a79.prototype={
$1(a){var s,r,q=a.b.a
if(q!=null){s=this.a.as
r=s.y
if(r==null)r=s.$ti.h("cl.T").a(r)
s.QJ(0,r+1)
q=new A.RC(r,q,null,B.mt)}else q=null
return A.avA(a,B.mq,!1,q)},
$S:349}
A.a73.prototype={
$1(a){return a!=null&&a.gl9()},
$S:28}
A.a74.prototype={
$0(){return null},
$S:3}
A.a75.prototype={
$1(a){return a!=null&&a.gl9()},
$S:28}
A.a76.prototype={
$0(){return null},
$S:3}
A.a77.prototype={
$1(a){return a!=null&&a.gl9()},
$S:28}
A.a78.prototype={
$0(){return null},
$S:3}
A.a72.prototype={
$0(){var s=this.a
if(s!=null)s.sJf(!0)},
$S:0}
A.tf.prototype={
H(){return"_RouteRestorationType."+this.b}}
A.Ta.prototype={
gLQ(){return!0},
tq(){return A.a([this.a.a],t.f)}}
A.RC.prototype={
tq(){var s=this,r=s.RU(),q=A.a([s.c,s.d],t.f),p=s.e
if(p!=null)q.push(p)
B.c.L(r,q)
return r},
zC(a){var s=a.yq(this.d,this.e,t.z)
s.toString
return s},
gN1(){return this.c}}
A.aqu.prototype={
gLQ(){return!1},
tq(){A.aEw(this.d)},
zC(a){var s=a.c
s.toString
return this.d.$2(s,this.e)},
gN1(){return this.c}}
A.QH.prototype={
bo(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.y==null
if(a)c.y=A.y(t.N,t.UX)
s=t.f
r=A.a([],s)
q=c.y
q.toString
p=J.aY(q,null)
if(p==null)p=B.dx
o=A.y(t.ob,t.UX)
q=c.y
q.toString
n=J.aAJ(J.Ds(q))
for(q=a1.length,m=b,l=a,k=!0,j=0;j<a1.length;a1.length===q||(0,A.P)(a1),++j){i=a1[j]
if(i.d.a>7){h=i.a
h.c.sn(0,b)
continue}if(i.c){l=l||r.length!==J.bU(p)
h=r.length
if(h!==0){g=m==null?b:m.gd3()
o.k(0,g,r)
n.A(0,g)}k=i.gd3()!=null
h=i.a
f=k?i.gd3():b
h.c.sn(0,f)
if(k){r=A.a([],s)
h=c.y
h.toString
p=J.aY(h,i.gd3())
if(p==null)p=B.dx}else{r=B.dx
p=B.dx}m=i
continue}if(k){h=i.b
h=h==null?b:h.gLQ()
k=h===!0}else k=!1
h=i.a
f=k?i.gd3():b
h.c.sn(0,f)
if(k){h=i.b
f=h.b
h=f==null?h.b=h.tq():f
if(!l){f=J.aN(p)
e=f.gp(p)
d=r.length
l=e<=d||!J.f(f.i(p,d),h)}else l=!0
B.c.D(r,h)}}l=l||r.length!==J.bU(p)
c.VF(r,m,o,n)
if(l||n.gbP(n)){c.y=o
c.aG()}},
VF(a,b,c,d){var s,r=a.length
if(r!==0){s=b==null?null:b.gd3()
c.k(0,s,a)
d.A(0,s)}},
Z(a){if(this.y==null)return
this.y=null
this.aG()},
N2(a,b){var s,r,q,p,o,n=A.a([],t.uD)
if(this.y!=null)s=a!=null&&a.gd3()==null
else s=!0
if(s)return n
s=this.y
s.toString
r=J.aY(s,a==null?null:a.gd3())
if(r==null)return n
for(s=J.aC(r);s.t();){q=A.aHh(s.gI(s))
p=q.zC(b)
o=$.aoC()
n.push(new A.dD(p,q,!1,B.mq,o,o,o))}return n},
tv(){return null},
mR(a){a.toString
return J.asl(t.G.a(a),new A.ahz(),t.ob,t.UX)},
Lv(a){this.y=a},
ni(){return this.y},
gmx(a){return this.y!=null}}
A.ahz.prototype={
$2(a,b){return new A.aw(A.cE(a),A.fi(t.j.a(b),!0,t.K),t.qE)},
$S:350}
A.aiZ.prototype={
$2(a,b){if(!a.a)a.F(0,b)},
$S:40}
A.B2.prototype={
aU(){this.bd()
this.b8()
this.ed()},
m(){var s=this,r=s.aX$
if(r!=null)r.F(0,s.gdV())
s.aX$=null
s.aj()}}
A.B3.prototype={
b4(a){this.bx(a)
this.p_()},
bf(){var s,r,q,p,o=this
o.cS()
s=o.bu$
r=o.gne()
q=o.c
q.toString
q=A.qD(q)
o.fJ$=q
p=o.mf(q,r)
if(r){o.j2(s,o.eg$)
o.eg$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.fI$.W(0,new A.aiZ())
s=r.bu$
if(s!=null)s.m()
r.bu$=null
r.Rz()}}
A.KL.prototype={
j(a){var s=A.a([],t.s)
this.cw(s)
return"Notification("+B.c.bb(s,", ")+")"},
cw(a){}}
A.d0.prototype={
c_(a){return new A.B4(this,B.a9,this.$ti.h("B4<1>"))}}
A.B4.prototype={
Mj(a){var s,r=this.f
r.toString
s=this.$ti
s.h("d0<1>").a(r)
if(s.c.b(a))return r.d.$1(a)
return!1},
n4(a){}}
A.fh.prototype={}
A.VH.prototype={}
A.fl.prototype={
slg(a){var s
if(this.b===a)return
this.b=a
s=this.e
if(s!=null)s.FA()},
sn2(a){if(this.c)return
this.c=!0
this.e.FA()},
F(a,b){this.d.F(0,b)},
nb(a){var s,r=this.e
r.toString
this.e=null
if(r.c==null)return
B.c.A(r.d,this)
s=$.bS
if(s.dy$===B.dY)s.cy$.push(new A.a7w(r))
else r.GS()},
eN(){var s=this.f.gbG()
if(s!=null)s.GT()},
j(a){return"<optimized out>#"+A.c4(this)+"(opaque: "+this.b+"; maintainState: "+this.c+")"},
$iah:1,
JH(a){return this.a.$1(a)}}
A.a7w.prototype={
$1(a){this.a.GS()},
$S:2}
A.t6.prototype={
X(){return new A.B6(B.i)}}
A.B6.prototype={
a2(){this.ag()
this.a.c.d.sn(0,!0)},
m(){this.a.c.d.sn(0,!1)
this.a.toString
this.aj()},
G(a){var s=this.a
return new A.ri(s.d,s.c.JH(a),null)},
GT(){this.a7(new A.aj3())}}
A.aj3.prototype={
$0(){},
$S:0}
A.qe.prototype={
X(){return new A.qg(A.a([],t.wi),null,null,B.i)}}
A.qg.prototype={
a2(){this.ag()
this.a6i(0,this.a.c)},
xP(a,b){return this.d.length},
AI(a,b){b.e=this
this.a7(new A.a7A(this,null,null,b))},
a6i(a,b){var s,r=b.length
if(r===0)return
for(s=0;s<r;++s)b[s].e=this
this.a7(new A.a7z(this,null,null,b))},
a89(a){var s,r,q,p,o,n=this
if(t.LF.b(a))s=a
else s=J.nm(a.slice(0),A.ap(a).c)
if(s.length===0)return
r=n.d
if(A.d8(r,s))return
q=A.ll(r,t.Ms)
for(r=s.length,p=0;p<r;++p){o=s[p]
if(o.e==null)o.e=n}n.a7(new A.a7B(n,s,q,null,null))},
GS(){if(this.c!=null)this.a7(new A.a7y())},
FA(){this.a7(new A.a7x())},
G(a){var s,r,q,p,o,n=A.a([],t.D)
for(s=this.d,r=s.length-1,q=!0,p=0;r>=0;--r){o=s[r]
if(q){++p
n.push(new A.t6(o,!0,o.f))
q=!o.b||!1}else if(o.c)n.push(new A.t6(o,!1,o.f))}s=t.H8
return new A.UF(n.length-p,this.a.d,A.aF(new A.cx(n,s),!1,s.h("bm.E")),null)}}
A.a7A.prototype={
$0(){var s=this,r=s.a
B.c.mU(r.d,r.xP(s.b,s.c),s.d)},
$S:0}
A.a7z.prototype={
$0(){var s=this,r=s.a
B.c.pB(r.d,r.xP(s.b,s.c),s.d)},
$S:0}
A.a7B.prototype={
$0(){var s,r,q=this,p=q.a,o=p.d
B.c.Z(o)
s=q.b
B.c.L(o,s)
r=q.c
r.a8i(s)
B.c.pB(o,p.xP(q.d,q.e),r)},
$S:0}
A.a7y.prototype={
$0(){},
$S:0}
A.a7x.prototype={
$0(){},
$S:0}
A.UF.prototype={
c_(a){var s=A.dc(t.h)
return new A.UG(s,this,B.a9)},
aH(a){var s=a.a4(t.I)
s.toString
s=new A.te(s.w,this.e,this.f,A.ay(),0,null,null,A.ay())
s.aK()
s.L(0,null)
return s},
aM(a,b){var s=this.e
if(b.aE!==s){b.aE=s
b.a6()}s=a.a4(t.I)
s.toString
b.sbJ(s.w)
s=this.f
if(s!==b.b9){b.b9=s
b.az()
b.b2()}}}
A.UG.prototype={
ga5(){return t._2.a(A.fj.prototype.ga5.call(this))}}
A.te.prototype={
ex(a){if(!(a.e instanceof A.em))a.e=new A.em(null,null,B.j)},
ZU(){if(this.am!=null)return
this.am=B.T.a_(this.ah)},
sbJ(a){var s=this
if(s.ah===a)return
s.ah=a
s.am=null
s.a6()},
gqZ(){var s,r,q,p,o=this
if(o.aE===A.aA.prototype.goG.call(o))return null
s=A.aA.prototype.ga4X.call(o,o)
for(r=o.aE,q=t.B;r>0;--r){p=s.e
p.toString
s=q.a(p).a9$}return s},
eG(a){var s,r,q,p,o=this.gqZ()
for(s=t.B,r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.j7(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.a9$}return r},
gki(){return!0},
ck(a){return new A.K(A.J(1/0,a.a,a.b),A.J(1/0,a.c,a.d))},
bD(){var s,r,q,p,o,n,m,l,k=this
k.M=!1
if(k.cX$-k.aE===0)return
k.ZU()
s=t.k.a(A.z.prototype.ga1.call(k))
r=A.DW(new A.K(A.J(1/0,s.a,s.b),A.J(1/0,s.c,s.d)))
q=k.gqZ()
for(s=t.B,p=t.r;q!=null;){o=q.e
o.toString
s.a(o)
if(!o.gAR()){q.cC(r,!0)
n=k.am
n.toString
m=k.k3
m.toString
l=q.k3
l.toString
o.a=n.mj(p.a(m.af(0,l)))}else{n=k.k3
n.toString
m=k.am
m.toString
k.M=A.aut(q,o,n,m)||k.M}q=o.a9$}},
d_(a,b){var s,r,q,p=this,o={},n=o.a=p.aE===A.aA.prototype.goG.call(p)?null:p.bz$
for(s=t.B,r=0;r<p.cX$-p.aE;++r,n=q){n=n.e
n.toString
s.a(n)
if(a.os(new A.ajT(o,b,n),n.a,b))return!0
q=n.aO$
o.a=q}return!1},
uS(a,b){var s,r,q,p,o,n=this.gqZ()
for(s=t.B,r=b.a,q=b.b;n!=null;){p=n.e
p.toString
s.a(p)
o=p.a
a.eP(n,new A.r(o.a+r,o.b+q))
n=p.a9$}},
aF(a,b){var s,r=this,q=r.M&&r.b9!==B.h,p=r.bh
if(q){q=r.cx
q===$&&A.b()
s=r.k3
p.saW(0,a.k0(q,b,new A.E(0,0,0+s.a,0+s.b),r.gBJ(),r.b9,p.a))}else{p.saW(0,null)
r.uS(a,b)}},
m(){this.bh.saW(0,null)
this.hz()},
fR(a){var s,r,q=this.gqZ()
for(s=t.B;q!=null;){a.$1(q)
r=q.e
r.toString
q=s.a(r).a9$}},
iC(a){var s
switch(this.b9.a){case 0:return null
case 1:case 2:case 3:if(this.M){s=this.k3
s=new A.E(0,0,0+s.a,0+s.b)}else s=null
return s}}}
A.ajT.prototype={
$2(a,b){return this.a.a.c5(a,b)},
$S:20}
A.RT.prototype={
aU(){this.bd()
this.b8()
this.ed()},
m(){var s=this,r=s.aX$
if(r!=null)r.F(0,s.gdV())
s.aX$=null
s.aj()}}
A.VQ.prototype={
aB(a){var s,r,q
this.eA(a)
s=this.a8$
for(r=t.B;s!=null;){s.aB(a)
q=s.e
q.toString
s=r.a(q).a9$}},
au(a){var s,r,q
this.dT(0)
s=this.a8$
for(r=t.B;s!=null;){s.au(0)
q=s.e
q.toString
s=r.a(q).a9$}}}
A.pK.prototype={
X(){var s=t.y
return new A.Aq(A.aZ([!1,!0,!0,!0],s,s),null,null,B.i)},
jW(a){return A.Dk().$1(a)}}
A.Aq.prototype={
a2(){var s,r,q=this
q.ag()
s=q.a
r=s.f
q.d=A.avr(A.bl(s.e),r,q)
r=q.a
s=r.f
s=A.avr(A.bl(r.e),s,q)
q.e=s
r=q.d
r.toString
q.f=new A.AP(A.a([r,s],t.Eo))},
b4(a){var s,r=this
r.bx(a)
if(!a.f.l(0,r.a.f)||A.bl(a.e)!==A.bl(r.a.e)){s=r.d
s.toString
s.sap(0,r.a.f)
s=r.d
s.toString
s.sJA(A.bl(r.a.e))
s=r.e
s.toString
s.sap(0,r.a.f)
s=r.e
s.toString
s.sJA(A.bl(r.a.e))}},
y8(a){var s,r,q,p,o,n,m,l,k,j=this
if(!j.a.jW(a))return!1
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
if(a instanceof A.iF){q=a.e
if(q<0)n=s
else if(q>0)n=p
else n=null
m=n===s
s=j.c
s.dn(new A.xh(m,0))
s=j.w
s.k(0,m,!0)
s.i(0,m).toString
n.d=0
j.w.i(0,m).toString
s=a.f
if(s!==0){r=n.c
if(r!=null)r.ar(0)
n.c=null
l=A.J(Math.abs(s),100,1e4)
s=n.f
if(n.a===B.hg)r=0.3
else{r=n.r
r===$&&A.b()
r=r.b.al(0,r.a)}s.a=r
r.toString
s.b=A.J(l*0.00006,r,0.5)
r=n.w
s=n.x
s===$&&A.b()
r.a=s.b.al(0,s.a)
r.b=Math.min(0.025+75e-8*l*l,1)
r=n.b
r===$&&A.b()
r.e=A.bF(0,B.d.b5(0.15+l*0.02),0)
r.fg(0,0)
n.as=0.5
n.a=B.a2f}else{s=a.d
if(s!=null){p=a.b.ga5()
p.toString
t.x.a(p)
o=p.k3
o.toString
k=p.lv(s.d)
switch(A.bl(r.e).a){case 0:n.toString
s=o.b
n.MB(0,Math.abs(q),o.a,A.J(k.b,0,s),s)
break
case 1:n.toString
s=o.a
n.MB(0,Math.abs(q),o.b,A.J(k.a,0,s),s)
break}}}}else if(a instanceof A.jX||a instanceof A.eV)if(a.gKu()!=null){s=j.d
if(s.a===B.hh)s.ky(B.dj)
s=j.e
if(s.a===B.hh)s.ky(B.dj)}j.r=A.D(a)
return!1},
m(){this.d.m()
this.e.m()
this.Sw()},
G(a){var s=this,r=null,q=s.a,p=s.d,o=s.e,n=q.e,m=s.f
return new A.d0(s.gy7(),new A.hJ(A.kY(new A.hJ(q.w,r),new A.QG(p,o,n,m),r,r,B.R),r),r,t.WA)}}
A.oC.prototype={
H(){return"_GlowState."+this.b}}
A.Ap.prototype={
sap(a,b){if(this.ax.l(0,b))return
this.ax=b
this.aG()},
sJA(a){if(this.ay===a)return
this.ay=a
this.aG()},
m(){var s=this,r=s.b
r===$&&A.b()
r.m()
r=s.y
r===$&&A.b()
r.w.c4$.A(0,r)
r.Ef()
r=s.c
if(r!=null)r.ar(0)
s.dG()},
MB(a,b,c,d,e){var s,r,q,p=this,o=p.c
if(o!=null)o.ar(0)
p.at=p.at+b/200
o=p.f
s=p.r
s===$&&A.b()
r=s.b
s=s.a
o.a=r.al(0,s)
o.b=Math.min(r.al(0,s)+b/c*0.8,0.5)
q=Math.min(c,e*0.20096189432249995)
s=p.w
r=p.x
r===$&&A.b()
o=r.b
r=r.a
s.a=o.al(0,r)
s.b=Math.max(1-1/(0.7*Math.sqrt(p.at*q)),A.i0(o.al(0,r)))
r=d/e
p.Q=r
if(r!==p.as){o=p.y
o===$&&A.b()
if(!o.ga6H())o.kj(0)}else{o=p.y
o===$&&A.b()
o.hw(0)
p.z=null}o=p.b
o===$&&A.b()
o.e=B.nT
if(p.a!==B.hh){o.fg(0,0)
p.a=B.hh}else{o=o.r
if(!(o!=null&&o.a!=null))p.aG()}p.c=A.c3(B.nT,new A.ahh(p))},
wz(a){var s=this
if(a!==B.Y)return
switch(s.a.a){case 1:s.ky(B.dj)
break
case 3:s.a=B.hg
s.at=0
break
case 2:case 0:break}},
ky(a){var s,r=this,q=r.a
if(q===B.D1||q===B.hg)return
q=r.c
if(q!=null)q.ar(0)
r.c=null
q=r.f
s=r.r
s===$&&A.b()
q.a=s.b.al(0,s.a)
q.b=0
q=r.w
s=r.x
s===$&&A.b()
q.a=s.b.al(0,s.a)
q.b=0
q=r.b
q===$&&A.b()
q.e=a
q.fg(0,0)
r.a=B.D1},
a17(a){var s,r=this,q=r.z
if(q!=null){q=q.a
s=r.Q
r.as=s-(s-r.as)*Math.pow(2,-(a.a-q)/$.az7().a)
r.aG()}if(A.Dj(r.Q,r.as,0.001)){q=r.y
q===$&&A.b()
q.hw(0)
r.z=null}else r.z=a},
aF(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.r
j===$&&A.b()
if(J.f(j.b.al(0,j.a),0))return
s=b.a
r=b.b
q=s>r?r/s:1
p=s*3/2
o=Math.min(r,s*0.20096189432249995)
r=k.x
r===$&&A.b()
r=r.b.al(0,r.a)
n=k.as
m=$.as().ba()
l=k.ax
m.sap(0,A.b7(B.d.b5(255*j.b.al(0,j.a)),l.gn(l)>>>16&255,l.gn(l)>>>8&255,l.gn(l)&255))
a.cQ(0)
a.aA(0,0,k.d+k.e)
a.dS(0,1,r*q)
a.kL(new A.E(0,0,0+s,0+o))
a.iF(new A.r(s/2*(0.5+n),o-p),p,m)
a.cM(0)},
j(a){return"_GlowController(color: "+this.ax.j(0)+", axis: "+A.aK9(this.ay)+")"}}
A.ahh.prototype={
$0(){return this.a.ky(B.c1)},
$S:0}
A.QG.prototype={
Hc(a,b,c,d,e){var s
if(c==null)return
switch(A.kC(d,e)){case B.F:c.aF(a,b)
break
case B.E:a.cQ(0)
a.aA(0,0,b.b)
a.dS(0,1,-1)
c.aF(a,b)
a.cM(0)
break
case B.an:a.cQ(0)
a.lm(0,1.5707963267948966)
a.dS(0,1,-1)
c.aF(a,new A.K(b.b,b.a))
a.cM(0)
break
case B.aF:a.cQ(0)
s=b.a
a.aA(0,s,0)
a.lm(0,1.5707963267948966)
c.aF(a,new A.K(b.b,s))
a.cM(0)
break}},
aF(a,b){var s=this,r=s.d
s.Hc(a,b,s.b,r,B.o9)
s.Hc(a,b,s.c,r,B.o8)},
eW(a){return a.b!=this.b||a.c!=this.c},
j(a){return"_GlowingOverscrollIndicatorPainter("+A.h(this.b)+", "+A.h(this.c)+")"}}
A.r2.prototype={
X(){return new A.BU(null,null,B.i)},
jW(a){return A.Dk().$1(a)}}
A.BU.prototype={
gkC(){var s,r,q,p,o,n,m=this,l=null,k=m.d
if(k===$){s=t.H7
r=new A.ac(0,0,s)
q=new A.BT(r,B.my,$.bO())
p=A.bi(l,l,l,l,m)
p.aR()
o=p.ca$
o.b=!0
o.a.push(q.gwy())
q.a!==$&&A.eD()
q.a=p
n=A.bb(B.no,p,l)
n.a.Y(0,q.geO())
t.m.a(n)
q.b!==$&&A.eD()
q.b=new A.O(n,r,s.h("O<ag.T>"))
m.d!==$&&A.br()
m.d=q
k=q}return k},
y8(a){var s,r,q,p,o,n=this
if(!n.a.jW(a))return!1
if(a instanceof A.iF){n.f=a
J.a0(n.e)
s=a.e
r=n.c
r.dn(new A.xh(s<0,0))
n.r=!0
r=a.f
if(r!==0){s=n.gkC()
q=A.J(Math.abs(r),1,1e4)
r=s.c
p=s.b
p===$&&A.b()
r.a=p.b.al(0,p.a)
r.b=Math.min(0.016+1.01/q,1)
r=s.a
r===$&&A.b()
r.e=A.bF(0,B.d.b5(q*0.02),0)
r.fg(0,0)
s.d=B.a2O}else if(a.d!=null){r=a.a.d
r.toString
o=A.J(Math.abs(s)/r+n.gkC().e,0,1)
r=n.gkC()
r.e=o
s=r.c
p=r.b
p===$&&A.b()
s.a=p.b.al(0,p.a)
p=r.e
s.b=0.016*p+0.016*(1-Math.exp(-p*8.237217661997105))
p=r.a
p===$&&A.b()
p.e=B.ew
if(r.d!==B.mz){p.fg(0,0)
r.d=B.mz}else{s=p.r
if(!(s!=null&&s.a!=null))r.aG()}}}else if(a instanceof A.jX||a instanceof A.eV){s=n.gkC()
if(s.d===B.mz)s.ky(B.ew)}n.e=a
return!1},
W5(a){switch(this.a.c.a){case 0:return a>0?B.ej:B.ei
case 1:return a>0?B.bB:B.bC
case 2:return a>0?B.ei:B.ej
case 3:return a>0?B.bC:B.bB}},
m(){var s=this.gkC(),r=s.a
r===$&&A.b()
r.m()
s.dG()
this.T3()},
G(a){var s={},r=a.a4(t.l).f
s.a=null
return new A.d0(this.gy7(),A.jn(this.gkC(),new A.alc(s,this,r.a),null),null,t.WA)}}
A.alc.prototype={
$2(a,b){var s,r,q,p,o,n,m=this,l=m.b,k=l.gkC().b
k===$&&A.b()
k=k.b.al(0,k.a)
switch(A.bl(l.a.c).a){case 0:s=1+k
m.a.a=m.c.a
r=1
break
case 1:r=1+k
m.a.a=m.c.b
s=1
break
default:s=1
r=1}q=l.f
q=q==null?null:q.e
p=l.W5(q==null?0:q)
q=l.f
if(q==null)o=null
else{q=q.a.d
q.toString
o=q}if(o==null)o=m.a.a
q=A.wH(s,r,1)
l=l.a
n=A.e9(p,l.f,q,!0)
return A.aoX(n,k!==0&&o!==m.a.a?l.e:B.h)},
$S:351}
A.oJ.prototype={
H(){return"_StretchState."+this.b}}
A.BT.prototype={
wz(a){var s=this
if(a!==B.Y)return
switch(s.d.a){case 1:s.ky(B.ew)
break
case 3:s.d=B.my
s.e=0
break
case 2:case 0:break}},
ky(a){var s,r=this,q=r.d
if(q===B.D8||q===B.my)return
q=r.c
s=r.b
s===$&&A.b()
q.a=s.b.al(0,s.a)
q.b=0
q=r.a
q===$&&A.b()
q.e=a
q.fg(0,0)
r.d=B.D8},
j(a){return"_StretchController()"}}
A.xh.prototype={
cw(a){this.RD(a)
a.push("side: "+(this.a?"leading edge":"trailing edge"))}}
A.B8.prototype={
cw(a){var s,r
this.w4(a)
s=this.d9$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.Cu.prototype={
aU(){this.bd()
this.b8()
this.ed()},
m(){var s=this,r=s.aX$
if(r!=null)r.F(0,s.gdV())
s.aX$=null
s.aj()}}
A.D_.prototype={
aU(){this.bd()
this.b8()
this.ed()},
m(){var s=this,r=s.aX$
if(r!=null)r.F(0,s.gdV())
s.aX$=null
s.aj()}}
A.BP.prototype={
l(a,b){if(b==null)return!1
if(J.a0(b)!==A.D(this))return!1
return b instanceof A.BP&&A.d8(b.a,this.a)},
gu(a){return A.dv(this.a)},
j(a){return"StorageEntryIdentifier("+B.c.bb(this.a,":")+")"}}
A.KY.prototype={
EJ(a){var s=A.a([],t.g8)
if(A.au3(a,s))a.Cz(new A.a7C(s))
return s},
Ny(a,b){var s,r=this
if(r.a==null)r.a=A.y(t.K,t.z)
s=r.EJ(a)
if(s.length!==0)r.a.k(0,new A.BP(s),b)},
MI(a){var s
if(this.a==null)return null
s=this.EJ(a)
return s.length!==0?this.a.i(0,new A.BP(s)):null}}
A.a7C.prototype={
$1(a){return A.au3(a,this.a)},
$S:47}
A.qi.prototype={
G(a){return this.c}}
A.KV.prototype={
Ju(a,b,c){var s=t.gQ.a(B.c.gbw(this.d))
if(s.ah!=null){s.ah=a
return A.bQ(null,t.H)}return s.hN(s.lq(a),b,c)},
us(a){var s=t.gQ.a(B.c.gbw(this.d))
if(s.ah!=null){s.ah=a
return}s.e5(s.lq(a))},
K6(a,b,c){var s=null,r=new A.m8(this.z,this.as,B.fU,a,b,!0,s,A.hS(!1),$.bO())
r.En(b,s,!0,c,a)
r.Eo(b,s,s,!0,c,a)
return r},
aB(a){this.QY(a)
t.gQ.a(a).sqm(this.as)}}
A.KW.prototype={}
A.m8.prototype={
A7(a,b,c,d,e,f){return this.R7(a,b,c,d,e,null)},
sqm(a){var s,r=this
if(r.aE===a)return
s=r.gjZ(r)
r.aE=a
if(s!=null)r.Ar(r.lq(s))},
grf(){var s=this.ax
s.toString
return Math.max(0,s*(this.aE-1)/2)},
qs(a,b){var s=Math.max(0,a-this.grf())/(b*this.aE),r=B.d.C7(s)
if(Math.abs(s-r)<1e-10)return r
return s},
lq(a){var s=this.ax
s.toString
return a*s*this.aE+this.grf()},
gjZ(a){var s,r,q=this,p=q.at
if(p!=null)s=!(q.z!=null&&q.Q!=null)
else s=!0
if(s)p=null
else{s=q.ah
if(s==null){p.toString
s=q.z
s.toString
r=q.Q
r.toString
r=A.J(p,s,r)
s=q.ax
s.toString
s=q.qs(r,s)
p=s}else p=s}return p},
D3(){var s,r,q=this,p=q.w,o=p.c
o.toString
o=A.a7D(o)
if(o!=null){p=p.c
p.toString
s=q.ah
if(s==null){s=q.at
s.toString
r=q.ax
r.toString
r=q.qs(s,r)
s=r}o.Ny(p,s)}},
N4(){var s,r,q
if(this.at==null){s=this.w
r=s.c
r.toString
r=A.a7D(r)
if(r==null)q=null
else{s=s.c
s.toString
q=r.MI(s)}if(q!=null)this.am=q}},
D2(){var s,r=this,q=r.ah
if(q==null){q=r.at
q.toString
s=r.ax
s.toString
s=r.qs(q,s)
q=s}r.w.e.sn(0,q)
q=$.hM.ah$
q===$&&A.b()
q.L_()},
N3(a,b){if(b)this.am=a
else this.e5(this.lq(a))},
oy(a){var s,r,q,p,o=this,n=o.ax
n=n!=null?n:null
if(a===n)return!0
o.R3(a)
s=o.at
s=s!=null?s:null
if(s==null)r=o.am
else if(n===0){q=o.ah
q.toString
r=q}else{n.toString
r=o.qs(s,n)}p=o.lq(r)
o.ah=a===0?r:null
if(p!==s){o.at=p
return!1}return!0},
kD(a){var s
this.R9(a)
if(!(a instanceof A.m8))return
s=a.ah
if(s!=null)this.ah=s},
ov(a,b){var s=a+this.grf()
return this.R1(s,Math.max(s,b-this.grf()))},
ha(){var s,r,q,p,o,n=this,m=null,l=n.z
if(l!=null&&n.Q!=null)l.toString
else l=m
if(n.z!=null&&n.Q!=null){s=n.Q
s.toString}else s=m
r=n.at
r=r!=null?r:m
q=n.ax
q=q!=null?q:m
p=n.w.a.c
o=n.aE
return new A.KW(o,l,s,r,q,p)}}
A.Ak.prototype={
iy(a){return new A.Ak(!1,this.hP(a))},
gmi(){return this.b}}
A.qh.prototype={
iy(a){return new A.qh(this.hP(a))},
Wm(a){var s,r
if(a instanceof A.m8){s=a.gjZ(a)
s.toString
return s}s=a.at
s.toString
r=a.ax
r.toString
return s/r},
Wn(a,b){var s
if(a instanceof A.m8)return a.lq(b)
s=a.ax
s.toString
return b*s},
ms(a,b){var s,r,q,p,o,n=this
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
if(s)return n.R_(a,b)
q=n.gqd()
p=n.Wm(a)
s=q.c
if(b<-s)p-=0.5
else if(b>s)p+=0.5
o=n.Wn(a,B.d.C7(p))
s=a.at
s.toString
if(o!==s){s=n.glC()
r=a.at
r.toString
return new A.lL(o,A.BN(s,r-o,b),q)}return null}}
A.xi.prototype={
X(){return new A.RW(B.i)}}
A.RW.prototype={
a2(){this.ag()
this.d=this.a.r.z},
Wc(a){var s,r
this.a.toString
switch(0){case 0:s=a.a4(t.I)
s.toString
r=A.aom(s.w)
this.a.toString
return r}},
G(a){var s,r,q,p=this,o=null,n=p.Wc(a),m=p.a.w
m=new A.qh(B.A9.hP(m))
m=new A.Ak(!1,o).hP(m)
s=p.a
r=s.Q
s=s.r
q=A.aaw(a).a3E(!1)
return new A.d0(new A.aj4(p),A.aq4(n,B.z,s,r,new A.Ak(!1,m),o,q,o,new A.aj5(p,n)),o,t.WA)}}
A.aj4.prototype={
$1(a){if(a.d9$===0)this.a.a.toString
return!1},
$S:27}
A.aj5.prototype={
$2(a,b){var s=this.a.a
return A.avi(0,this.b,0,B.Fb,null,s.as,b,A.a([new A.Ne(s.r.as,!0,s.z,null)],t.D))},
$S:352}
A.iH.prototype={
glg(){return!0},
gte(){return!1},
zl(a){return!0}}
A.Ll.prototype={
aH(a){var s=new A.Mf(this.d,0,!1,!1,A.ay())
s.aK()
return s},
aM(a,b){b.sa7D(this.d)
b.sa83(0)
b.sa2O(!1)
b.sa2N(!1)}}
A.a6q.prototype={}
A.a7Z.prototype={}
A.Gj.prototype={
xX(a){return this.Zf(a)},
Zf(a){var s=0,r=A.a5(t.H),q,p=this,o,n,m
var $async$xX=A.a1(function(b,c){if(b===1)return A.a2(c,r)
while(true)switch(s){case 0:n=A.eC(a.b)
m=p.a
if(!m.P(0,n)){s=1
break}m=m.i(0,n)
m.toString
o=a.a
if(o==="Menu.selectedCallback"){m.gaa5().$0()
m.ga7y()
o=$.aq.an$.f.f.e
o.toString
A.aAQ(o,m.ga7y(),t.q)}else if(o==="Menu.opened")m.gaa1(m).$0()
else if(o==="Menu.closed")m.gaa0(m).$0()
case 1:return A.a3(q,r)}})
return A.a4($async$xX,r)}}
A.qp.prototype={
cg(a){return this.f!=a.f}}
A.lI.prototype={
X(){return new A.Tb(null,A.y(t.yb,t.O),null,!0,null,B.i)}}
A.Tb.prototype={
gd3(){return this.a.d},
j2(a,b){},
G(a){return A.aeW(this.bu$,this.a.c)}}
A.zH.prototype={
cg(a){return a.f!=this.f}}
A.y4.prototype={
X(){return new A.Bo(B.i)}}
A.Bo.prototype={
bf(){var s,r=this
r.cS()
s=r.c
s.toString
r.r=A.qD(s)
r.xT()
if(r.d==null){r.a.toString
r.d=!1}},
b4(a){this.bx(a)
this.xT()},
gGH(){this.a.toString
return!1},
xT(){var s,r=this
if(r.gGH()&&!r.w){r.w=!0;++$.lH.bA$
s=$.hM.ah$
s===$&&A.b()
s.ga8J().aI(new A.ak_(r),t.P)}},
a_M(){var s,r=this
r.e=!1
r.f=null
s=$.hM.ah$
s===$&&A.b()
s.F(0,r.gyj())
r.xT()},
m(){if(this.e){var s=$.hM.ah$
s===$&&A.b()
s.F(0,this.gyj())}this.aj()},
G(a){var s,r,q=this,p=q.d
p.toString
if(p&&q.gGH())return B.e8
p=q.r
if(p==null)p=q.f
s=q.a
r=s.d
return A.aeW(p,new A.lI(s.c,r,null))}}
A.ak_.prototype={
$1(a){var s,r=this.a
r.w=!1
if(r.c!=null){s=$.hM.ah$
s===$&&A.b()
s.Y(0,r.gyj())
r.a7(new A.ajZ(r,a))}$.lH.Jr()},
$S:353}
A.ajZ.prototype={
$0(){var s=this.a
s.f=this.b
s.e=!0
s.d=!1},
$S:0}
A.dR.prototype={
gmx(a){return!0},
m(){var s=this,r=s.c
if(r!=null){r=r.fI$.A(0,s)
r.toString
s.F(0,r)
s.c=s.b=null}s.dG()
s.a=!0}}
A.iR.prototype={
zV(a){},
na(a,b){var s,r,q=this,p=q.bu$
p=p==null?null:J.ep(p.gjl(),b)
s=p===!0
r=s?a.mR(J.aY(q.bu$.gjl(),b)):a.tv()
if(a.b==null){a.b=b
a.c=q
p=new A.a9B(q,a)
a.Y(0,p)
q.fI$.k(0,a,p)}a.Lv(r)
if(!s&&a.gmx(a)&&q.bu$!=null)q.yO(a)},
p_(){var s,r,q=this
if(q.fJ$!=null){s=q.bu$
s=s==null?null:s.e
s=s==q.gd3()||q.gne()}else s=!0
if(s)return
r=q.bu$
if(q.mf(q.fJ$,!1))if(r!=null)r.m()},
gne(){var s,r,q=this
if(q.eg$)return!0
if(q.gd3()==null)return!1
s=q.c
s.toString
r=A.qD(s)
if(r!=q.fJ$){if(r==null)s=null
else{s=r.c
s=s==null?null:s.d
s=s===!0}s=s===!0}else s=!1
return s},
mf(a,b){var s,r,q=this
if(q.gd3()==null||a==null)return q.I_(null,b)
if(b||q.bu$==null){s=q.gd3()
s.toString
return q.I_(a.a2V(s,q),b)}s=q.bu$
s.toString
r=q.gd3()
r.toString
s.a8p(r)
r=q.bu$
r.toString
a.ix(r)
return!1},
I_(a,b){var s,r=this,q=r.bu$
if(a==q)return!1
r.bu$=a
if(!b){if(a!=null){s=r.fI$
new A.bf(s,A.o(s).h("bf<1>")).W(0,r.ga1v())}r.zV(q)}return!0},
yO(a){var s,r=a.gmx(a),q=this.bu$
if(r){if(q!=null){r=a.b
r.toString
s=a.ni()
if(!J.f(J.aY(q.gjl(),r),s)||!J.ep(q.gjl(),r)){J.cW(q.gjl(),r,s)
q.m_()}}}else if(q!=null){r=a.b
r.toString
q.a8h(0,r,t.K)}}}
A.a9B.prototype={
$0(){var s=this.a
if(s.bu$==null)return
s.yO(this.b)},
$S:0}
A.ama.prototype={
$2(a,b){if(!a.a)a.F(0,b)},
$S:40}
A.VR.prototype={
b4(a){this.bx(a)
this.p_()},
bf(){var s,r,q,p,o=this
o.cS()
s=o.bu$
r=o.gne()
q=o.c
q.toString
q=A.qD(q)
o.fJ$=q
p=o.mf(q,r)
if(r){o.j2(s,o.eg$)
o.eg$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.fI$.W(0,new A.ama())
s=r.bu$
if(s!=null)s.m()
r.bu$=null
r.aj()}}
A.cl.prototype={
sn(a,b){var s=this.y
if(b==null?s!=null:b!==s){this.y=b
this.zX(s)}},
Lv(a){this.y=a}}
A.hZ.prototype={
tv(){return this.cy},
zX(a){this.aG()},
mR(a){return A.o(this).h("hZ.T").a(a)},
ni(){var s=this.y
return s==null?A.o(this).h("cl.T").a(s):s}}
A.Bn.prototype={
mR(a){return this.RS(a)},
ni(){var s=this.RT()
s.toString
return s}}
A.y0.prototype={}
A.y_.prototype={}
A.amb.prototype={
$2(a,b){if(!a.a)a.F(0,b)},
$S:40}
A.qF.prototype={}
A.Mx.prototype={
X(){return new A.tg(new A.T8($.bO()),null,A.y(t.yb,t.O),null,!0,null,B.i,this.$ti.h("tg<1>"))}}
A.y5.prototype={
H(){return"RouteInformationReportingType."+this.b}}
A.tg.prototype={
gd3(){return this.a.r},
a2(){var s,r=this
r.ag()
s=r.a.c
if(s!=null)s.Y(0,r.gra())
r.a.f.a21(r.gxt())
r.a.e.Y(0,r.gxE())},
j2(a,b){var s,r,q=this,p=q.f
q.na(p,"route")
s=p.y
r=s==null
if((r?A.o(p).h("cl.T").a(s):s)!=null){p=r?A.o(p).h("cl.T").a(s):s
p.toString
q.rv(p,new A.ake(q))}else{p=q.a.c
if(p!=null)q.rv(p.a,new A.akf(q))}},
a0d(){var s=this
if(s.w||s.a.c==null)return
s.w=!0
$.bS.cy$.push(s.ga_P())},
a_Q(a){var s,r,q,p,o=this
o.w=!1
s=o.f
r=s.y
q=r==null
if((q?A.o(s).h("cl.T").a(r):r)!=null){s=q?A.o(s).h("cl.T").a(r):r
s.toString
r=o.a.c
r.toString
q=o.e
q.toString
if(q!==B.VG)p=q===B.lP&&r.b.a==s.a
else p=!0
B.fP.uo("selectMultiEntryHistory",t.H)
q=s.a
q.toString
A.auW(q,p,s.b)
r.b=r.a=s}o.e=B.lP},
a_Y(){this.a.e.ga9Q()
this.a.toString
return null},
rn(){var s=this
s.f.sn(0,s.a_Y())
if(s.e==null)s.e=B.lP
s.a0d()},
bf(){var s,r=this
r.r=!0
r.SD()
s=r.a.c
if(s!=null&&r.r)r.rv(s.a,new A.akd(r))
r.r=!1
r.rn()},
b4(a){var s,r,q,p=this
p.SE(a)
s=p.a
r=a.c
q=s.c==r
if(q)s.f===a.f
p.d=new A.C()
if(!q){s=r==null
if(!s)r.F(0,p.gra())
q=p.a.c
if(q!=null)q.Y(0,p.gra())
s=s?null:r.a
r=p.a.c
if(s!=(r==null?null:r.a))p.Gr()}s=a.f
if(p.a.f!==s){r=p.gxt()
s.a8j(r)
p.a.f.a21(r)}p.a.toString
s=p.gxE()
a.e.F(0,s)
p.a.e.Y(0,s)
p.rn()},
m(){var s=this,r=s.a.c
if(r!=null)r.F(0,s.gra())
s.a.f.a8j(s.gxt())
s.a.e.F(0,s.gxE())
s.d=null
s.SF()},
rv(a,b){var s,r,q=this
q.r=!1
q.d=new A.C()
s=q.a.d
s.toString
r=q.c
r.toString
s.aa8(a,r).aI(q.a_x(q.d,b),t.H)},
a_x(a,b){return new A.akb(this,a,b)},
Gr(){var s=this
s.r=!0
s.rv(s.a.c.a,new A.ak8(s))},
WQ(){var s=this
s.d=new A.C()
return s.a.e.aa9().aI(s.XV(s.d),t.y)},
XV(a){return new A.ak9(this,a)},
HH(){this.a7(new A.akc())
this.rn()
return new A.bA(null,t.b5)},
XW(){this.a7(new A.aka())
this.rn()},
G(a){var s=this.bu$,r=this.a,q=r.c,p=r.f,o=r.d
r=r.e
return A.aeW(s,new A.Tg(q,p,o,r,this,new A.ib(r.gth(),null),null))}}
A.ake.prototype={
$0(){return this.a.a.e.ga9F()},
$S(){return this.a.$ti.h("am<~>(1)()")}}
A.akf.prototype={
$0(){return this.a.a.e.ga9E()},
$S(){return this.a.$ti.h("am<~>(1)()")}}
A.akd.prototype={
$0(){return this.a.a.e.gOx()},
$S(){return this.a.$ti.h("am<~>(1)()")}}
A.akb.prototype={
$1(a){var s=0,r=A.a5(t.H),q,p=this,o,n
var $async$$1=A.a1(function(b,c){if(b===1)return A.a2(c,r)
while(true)switch(s){case 0:o=p.a
n=p.b
if(o.d!=n){s=1
break}s=3
return A.a9(p.c.$0().$1(a),$async$$1)
case 3:if(o.d==n)o.HH()
case 1:return A.a3(q,r)}})
return A.a4($async$$1,r)},
$S(){return this.a.$ti.h("am<~>(1)")}}
A.ak8.prototype={
$0(){return this.a.a.e.gOx()},
$S(){return this.a.$ti.h("am<~>(1)()")}}
A.ak9.prototype={
$1(a){var s=this.a
if(this.b!=s.d)return new A.bA(!0,t.d9)
s.HH()
return new A.bA(a,t.d9)},
$S:355}
A.akc.prototype={
$0(){},
$S:0}
A.aka.prototype={
$0(){},
$S:0}
A.Tg.prototype={
cg(a){if(this.f==a.f)this.r===a.r
return!0}}
A.T8.prototype={
tv(){return null},
zX(a){this.aG()},
mR(a){var s
if(a==null)return null
t.Dn.a(a)
s=J.bY(a)
return new A.qF(A.cE(s.gK(a)),s.gT(a))},
ni(){var s,r=this,q=r.y,p=q==null
if((p?A.o(r).h("cl.T").a(q):q)==null)q=null
else{s=(p?A.o(r).h("cl.T").a(q):q).a
q=[s,(p?A.o(r).h("cl.T").a(q):q).b]}return q}}
A.tv.prototype={
b4(a){this.bx(a)
this.p_()},
bf(){var s,r,q,p,o=this
o.cS()
s=o.bu$
r=o.gne()
q=o.c
q.toString
q=A.qD(q)
o.fJ$=q
p=o.mf(q,r)
if(r){o.j2(s,o.eg$)
o.eg$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.fI$.W(0,new A.amb())
s=r.bu$
if(s!=null)s.m()
r.bu$=null
r.aj()}}
A.qf.prototype={
guO(){return this.e},
i2(){var s,r=this,q=A.apP(r.gU3(),!1)
r.k4=q
r.gn2()
s=A.apP(r.gU5(),!0)
r.p1=s
B.c.L(r.e,A.a([q,s],t.wi))
r.QV()},
kQ(a){var s,r=this
r.QQ(a)
s=r.at.Q
s===$&&A.b()
if(s===B.Q&&!r.Q)r.a.KU(r)
return!0},
m(){B.c.Z(this.e)
this.QU()}}
A.dX.prototype={
gbY(a){return this.as},
gD7(){return this.ax},
Yg(a){var s,r=this
switch(a.a){case 3:s=r.e
if(s.length!==0){s=B.c.gK(s)
r.glg()
s.slg(!0)}s=r.z
if(s!=null){s.a.$0()
s.a=null}r.z=null
break
case 1:case 2:s=r.e
if(s.length!==0)B.c.gK(s).slg(!1)
if(r.z==null)r.z=$.bS.a8B(B.Gm)
break
case 0:if(!r.ga6y()){r.a.KU(r)
r.Q=!0
s=r.z
if(s!=null){s.a.$0()
s.a=null}r.z=null}break}},
i2(){var s=this,r=s.gvi(s),q=s.gvi(s),p=s.gjv(),o=s.a
o.toString
o=s.at=A.bi(p,r,q,null,o)
o.aR()
p=o.ca$
p.b=!0
p.a.push(s.gGs())
s.as=o
s.Qg()
p=s.as
if(p.gb6(p)===B.Y&&s.e.length!==0){p=B.c.gK(s.e)
s.glg()
p.slg(!0)}},
oX(){this.QS()
return this.at.dc(0)},
oU(){this.QN()
var s=this.at
s.sn(0,s.b)},
zT(a){var s,r
if(a instanceof A.dX){s=this.at
s.toString
r=a.at.x
r===$&&A.b()
s.sn(0,r)}this.QT(a)},
kQ(a){this.ch=a
this.at.hq(0)
this.Qe(a)
return!0},
mv(a){this.IX(a)
this.QR(a)},
oV(a){this.IX(a)
this.QO(a)},
IX(a){var s,r,q,p,o,n,m,l=this,k={},j=l.CW
l.CW=null
if(a instanceof A.dX&&l.zl(a)&&!0){s=l.ax.c
if(s!=null){r=s instanceof A.ok?s.a:s
r.toString
q=a.as
q.toString
p=r.gn(r)
o=q.x
o===$&&A.b()
if(!J.f(p,o)){p=q.Q
p===$&&A.b()
p=p===B.Y||p===B.Q}else p=!0
o=a.y.a
if(p)l.mc(q,o)
else{k.a=null
p=new A.aeR(l,q,a)
l.CW=new A.aeP(k,q,p)
q.aR()
n=q.ca$
n.b=!0
n.a.push(p)
m=A.aqp(r,q,new A.aeQ(k,l,a))
k.a=m
l.mc(m,o)}}else l.mc(a.as,a.y.a)}else l.a0w(B.c_)
if(j!=null)j.$0()},
mc(a,b){this.ax.saS(0,a)
if(b!=null)b.aI(new A.aeO(this,a),t.P)},
a0w(a){return this.mc(a,null)},
m(){var s=this,r=s.as
if(r!=null)r.cc(s.gGs())
r=s.z
if(r!=null){r.a.$0()
r.a=null}s.z=null
r=s.at
if(r!=null)r.m()
s.y.bS(0,s.ch)
s.Qf()},
gjv(){return"TransitionRoute"},
j(a){return"TransitionRoute(animation: "+A.h(this.at)+")"}}
A.aeR.prototype={
$1(a){var s,r
switch(a.a){case 3:case 0:s=this.a
s.mc(this.b,this.c.y.a)
r=s.CW
if(r!=null){r.$0()
s.CW=null}break
case 1:case 2:break}},
$S:5}
A.aeP.prototype={
$0(){this.b.cc(this.c)
var s=this.a.a
if(s!=null)s.m()},
$S:0}
A.aeQ.prototype={
$0(){var s,r=this.b
r.mc(this.a.a.a,this.c.y.a)
s=r.CW
if(s!=null){s.$0()
r.CW=null}},
$S:0}
A.aeO.prototype={
$1(a){var s=this.a.ax,r=this.b
if(s.c==r){s.saS(0,B.c_)
if(r instanceof A.ok)r.m()}},
$S:6}
A.Iv.prototype={
gNv(){var s=this.jA$
return s!=null&&s.length!==0}}
A.PV.prototype={
iR(a,b){A.a6G(this.e,t.z).gte()
return!1},
dz(a){return A.apL(this.e).M5()}}
A.AS.prototype={
cg(a){var s=this
return s.f!==a.f||s.r!==a.r||s.w!==a.w||s.x!==a.x}}
A.t2.prototype={
X(){return new A.m6(A.apm(!0,B.a1n.j(0)+" Focus Scope",!1),A.aq2(),B.i,this.$ti.h("m6<1>"))}}
A.m6.prototype={
a2(){var s,r,q=this
q.ag()
s=A.a([],t.Eo)
r=q.a.c.fy
if(r!=null)s.push(r)
r=q.a.c.go
if(r!=null)s.push(r)
q.e=new A.AP(s)
if(q.a.c.gl8()){q.a.c.a.a.toString
s=!0}else s=!1
if(s){s=q.a.c.a.x.ge_()
if(s!=null)s.ns(q.f)}},
b4(a){var s,r=this
r.bx(a)
if(r.a.c.gl8()){r.a.c.a.a.toString
s=!0}else s=!1
if(s){s=r.a.c.a.x.ge_()
if(s!=null)s.ns(r.f)}},
bf(){this.cS()
this.d=null},
VZ(){this.a7(new A.aiJ(this))},
m(){this.f.m()
this.aj()},
gI5(){var s=this.a.c.fy
if((s==null?null:s.gb6(s))!==B.au){s=this.a.c.a
s=s==null?null:s.CW.a
s=s===!0}else s=!0
return s},
G(a){var s,r,q=this,p=null,o=q.a.c,n=o.gl8(),m=q.a.c
if(!m.gAB()){m=m.jA$
m=m!=null&&m.length!==0}else m=!0
s=q.a.c
s=s.gAB()||s.Ad$>0
r=q.a.c
return A.jn(o.c,new A.aiN(q),new A.AS(n,m,s,o,new A.xb(r.fx,new A.qi(new A.ib(new A.aiO(q),p),r.k3,p),p),p))}}
A.aiJ.prototype={
$0(){this.a.d=null},
$S:0}
A.aiN.prototype={
$2(a,b){var s=this.a.a.c.c.a
b.toString
return new A.lI(b,s,null)},
$S:356}
A.aiO.prototype={
$1(a){var s,r=null,q=A.aZ([B.CM,new A.PV(a,new A.bu(A.a([],t.ot),t.wS))],t.n,t.od),p=this.a,o=p.e
o===$&&A.b()
s=p.d
if(s==null)s=p.d=new A.hJ(new A.ib(new A.aiL(p),r),p.a.c.k2)
return A.X6(q,new A.qp(p.r,B.bm,B.WF,A.ath(!1,new A.hJ(A.jn(o,new A.aiM(p),s),r),r,r,p.f),r))},
$S:357}
A.aiM.prototype={
$2(a,b){var s,r,q=this.a,p=q.a.c,o=p.fy
o.toString
s=p.go
s.toString
r=p.a
r=r==null?null:r.CW
if(r==null)r=A.hS(!1)
return p.zk(a,o,s,A.jn(r,new A.aiK(q),b))},
$S:25}
A.aiK.prototype={
$2(a,b){var s=this.a,r=s.gI5()
s.f.scD(!r)
return new A.hw(r,null,b,null)},
$S:358}
A.aiL.prototype={
$1(a){var s,r=this.a.a.c,q=r.fy
q.toString
s=r.go
s.toString
return r.JG(a,q,s)},
$S:16}
A.iC.prototype={
a7(a){var s,r=this.k1
if(r.gbG()!=null){r=r.gbG()
if(r.a.c.gl8())if(!r.gI5()){r.a.c.a.a.toString
s=!0}else s=!1
else s=!1
if(s){s=r.a.c.a.x.ge_()
if(s!=null)s.ns(r.f)}r.a7(a)}else a.$0()},
zk(a,b,c,d){return d},
i2(){var s=this
s.Ro()
s.fy=A.xE(A.dX.prototype.gbY.call(s,s))
s.go=A.xE(A.dX.prototype.gD7.call(s))},
oX(){var s,r=this,q=r.k1
if(q.gbG()!=null){r.a.a.toString
s=!0}else s=!1
if(s){s=r.a.x.ge_()
if(s!=null)s.ns(q.gbG().f)}return r.Rm()},
oU(){var s,r=this,q=r.k1
if(q.gbG()!=null){r.a.a.toString
s=!0}else s=!1
if(s){s=r.a.x.ge_()
if(s!=null)s.ns(q.gbG().f)}r.Rk()},
suG(a){var s,r=this
if(r.fx===a)return
r.a7(new A.a6H(r,a))
s=r.fy
s.toString
s.saS(0,r.fx?B.dc:A.dX.prototype.gbY.call(r,r))
s=r.go
s.toString
s.saS(0,r.fx?B.c_:A.dX.prototype.gD7.call(r))
r.oE()},
fS(){var s=0,r=A.a5(t.oj),q,p=this,o,n,m,l
var $async$fS=A.a1(function(a,b){if(a===1)return A.a2(b,r)
while(true)switch(s){case 0:p.k1.gbG()
o=A.aF(p.id,!0,t.Ev),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}l=J
s=6
return A.a9(o[m].$0(),$async$fS)
case 6:if(!l.f(b,!0)){q=B.VH
s=1
break}case 4:++m
s=3
break
case 5:q=p.Rx()
s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$fS,r)},
oW(a){this.QP(a)
this.oE()},
oE(){var s,r=this
r.QM()
r.a7(new A.a6F())
s=r.k4
s===$&&A.b()
s.eN()
s=r.p1
s===$&&A.b()
r.gn2()
s.sn2(!0)},
tm(){this.QL()
var s=this.k4
s===$&&A.b()
s.eN()
s=this.k1
if(s.gbG()!=null)s.gbG().VZ()},
U4(a){var s,r,q=this,p=null
q.gzd()
q.gte()
s=q.gze()
r=q.fy
if(r.gb6(r)!==B.au){r=q.fy
r=r.gb6(r)===B.Q}else r=!0
q.gte()
return new A.hw(r,p,new A.wQ(p,!1,p,!0,s,p),p)},
U6(a){var s=this,r=null,q=s.ok
return q==null?s.ok=A.dU(r,new A.t2(s,s.k1,A.o(s).h("t2<1>")),!1,r,!1,r,r,r,r,r,r,r,r,r,r,r,B.Ve,r,r,r,r):q},
j(a){return"ModalRoute("+this.b.j(0)+", animation: "+A.h(this.as)+")"}}
A.a6H.prototype={
$0(){this.a.fx=this.b},
$S:0}
A.a6F.prototype={
$0(){},
$S:0}
A.t1.prototype={
fS(){var s=0,r=A.a5(t.oj),q,p=this,o
var $async$fS=A.a1(function(a,b){if(a===1)return A.a2(b,r)
while(true)switch(s){case 0:o=p.jA$
if(o!=null&&o.length!==0){q=B.BK
s=1
break}q=p.QW()
s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$fS,r)},
kQ(a){var s,r,q=this,p=q.jA$
if(p!=null&&p.length!==0){s=p.pop()
s.b=null
s.a9K()
r=s.c&&--q.Ad$===0
if(q.jA$.length===0||r)q.oE()
return!1}q.Rl(a)
return!0}}
A.MJ.prototype={
G(a){var s,r,q,p=t.l,o=a.a4(p).f.f,n=Math.max(o.a,0),m=this.d,l=m?o.b:0
l=Math.max(l,0)
s=Math.max(o.c,0)
r=this.f
q=r?o.d:0
return new A.iG(new A.bx(n,l,s,Math.max(q,0)),new A.ej(a.a4(p).f.MR(r,!0,!0,m),this.x,null),null)}}
A.MO.prototype={
MW(){},
Kq(a,b){if(b!=null)b.dn(new A.yk(null,a,b,0))},
Kr(a,b,c){b.dn(A.aq3(b,null,null,a,c))},
tK(a,b,c){b.dn(new A.iF(null,c,0,a,b,0))},
Kp(a,b){b.dn(new A.jX(null,a,b,0))},
ow(){},
m(){},
j(a){return"<optimized out>#"+A.c4(this)}}
A.l8.prototype={
ow(){this.a.fV(0)},
gil(){return!1},
ghj(){return!1},
ges(){return 0}}
A.a4i.prototype={
gil(){return!1},
ghj(){return!1},
ges(){return 0},
m(){this.b.$0()
this.qO()}}
A.aax.prototype={
TM(a,b){var s,r,q=this
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
else return Math.min(r/3,s)*J.eE(a)}else return 0}}},
bo(a,b){var s,r,q,p,o=this
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
p=o.TM(s,q)
if(p===0)return
s=o.a
if(A.WA(s.w.a.c))p=-p
s.Cv(p>0?B.lR:B.lS)
r=s.at
r.toString
s.wd(r-s.r.z9(s,p))},
m(){this.x=null
this.b.$0()},
j(a){return"<optimized out>#"+A.c4(this)}}
A.a0U.prototype={
Kq(a,b){var s=t.uL.a(this.b.x)
if(b!=null)b.dn(new A.yk(s,a,b,0))},
Kr(a,b,c){b.dn(A.aq3(b,null,t.zk.a(this.b.x),a,c))},
tK(a,b,c){b.dn(new A.iF(t.zk.a(this.b.x),c,0,a,b,0))},
Kp(a,b){var s=this.b.x
b.dn(new A.jX(s instanceof A.hp?s:null,a,b,0))},
gil(){var s=this.b
return(s==null?null:s.w)!==B.dV},
ghj(){return!0},
ges(){return 0},
m(){this.b=null
this.qO()},
j(a){return"<optimized out>#"+A.c4(this)+"("+A.h(this.b)+")"}}
A.DL.prototype={
MW(){var s=this.a,r=this.b
r===$&&A.b()
s.fV(r.ges())},
ow(){var s=this.a,r=this.b
r===$&&A.b()
s.fV(r.ges())},
ys(){var s=this.b
s===$&&A.b()
s=s.x
s===$&&A.b()
if(!(Math.abs(this.a.wd(s))<1e-10)){s=this.a
s.fE(new A.l8(s))}},
x7(){this.a.fV(0)},
tK(a,b,c){var s=this.b
s===$&&A.b()
b.dn(new A.iF(null,c,s.ges(),a,b,0))},
ghj(){return!0},
ges(){var s=this.b
s===$&&A.b()
return s.ges()},
m(){var s=this.b
s===$&&A.b()
s.m()
this.qO()},
j(a){var s=A.c4(this),r=this.b
r===$&&A.b()
return"<optimized out>#"+s+"("+r.j(0)+")"},
gil(){return this.c}}
A.GY.prototype={
ys(){var s=this.a,r=this.c
r===$&&A.b()
r=r.x
r===$&&A.b()
if(s.wd(r)!==0){s=this.a
s.fE(new A.l8(s))}},
x7(){var s=this.a,r=this.c
r===$&&A.b()
s.fV(r.ges())},
tK(a,b,c){var s=this.c
s===$&&A.b()
b.dn(new A.iF(null,c,s.ges(),a,b,0))},
gil(){return!0},
ghj(){return!0},
ges(){var s=this.c
s===$&&A.b()
return s.ges()},
m(){var s=this.b
s===$&&A.b()
s.eF(0)
s=this.c
s===$&&A.b()
s.m()
this.qO()},
j(a){var s=A.c4(this),r=this.c
r===$&&A.b()
return"<optimized out>#"+s+"("+r.j(0)+")"}}
A.ye.prototype={
q8(a,b,c,d){var s,r=this
if(b.a==null){s=$.fm.he$
s===$&&A.b()
s=s.P(0,c)}else s=!0
if(s){r.b.q8(a,b,c,d)
return}s=r.a
if(s.gaD(s)==null)return
s=s.gaD(s)
s.toString
if(A.aFC(s)){$.bS.qz(new A.aas(r,a,b,c,d))
return}r.b.q8(a,b,c,d)},
pH(a,b,c){return this.b.pH(0,b,c)},
pI(a,b){return this.b.pI(a,b)},
uF(a){return this.b.uF(a)}}
A.aas.prototype={
$1(a){var s=this
A.eb(new A.aar(s.a,s.b,s.c,s.d,s.e))},
$S:2}
A.aar.prototype={
$0(){var s=this
return s.a.q8(s.b,s.c,s.d,s.e)},
$S:0}
A.tL.prototype={
H(){return"AndroidOverscrollIndicator."+this.b}}
A.MP.prototype={
a3O(a,b,c,d,e,f){return new A.am2(this,f,c!==!1,d,e,b,a)},
a3E(a){return this.a3O(null,null,null,null,null,a)},
kd(a){return A.mk()},
gA1(){return B.C4},
tj(a,b,c){var s=null
switch(this.kd(a)){case B.bx:case B.bk:case B.by:return A.aFb(b,c.b,B.cw,s,s,A.Dk(),B.x,s,s,s,s,B.dj,s)
case B.aK:case B.bw:case B.aL:return b}},
ti(a,b,c){var s
switch(this.kd(a)){case B.aL:case B.bx:case B.bk:case B.by:s=1
break
case B.aK:s=2
break
case B.bw:s=3
break
default:s=null
break}if(s)c$0:for(;!0;)switch(s){case 1:return b
case 2:switch(1){case 1:break}if(2)c$1:for(;!0;)switch(2){case 1:return new A.r2(c.a,B.z,b,null)
case 2:s=3
continue c$0}break c$0
case 3:return new A.pK(c.a,B.l,b,null)}},
vl(a){switch(this.kd(a)){case B.aL:return new A.aat()
case B.bk:return new A.aau()
case B.aK:case B.bw:case B.bx:case B.by:return new A.aav()}},
lr(a){switch(this.kd(a)){case B.aL:return B.DC
case B.bk:return B.DD
case B.aK:case B.bw:case B.bx:case B.by:return B.Fh}},
j(a){return"ScrollBehavior"}}
A.aat.prototype={
$1(a){return A.aDa(a.gcu(a))},
$S:359}
A.aau.prototype={
$1(a){var s=a.gcu(a),r=t.av
return new A.q8(A.b_(20,null,!1,r),s,A.b_(20,null,!1,r))},
$S:360}
A.aav.prototype={
$1(a){return new A.hT(a.gcu(a),A.b_(20,null,!1,t.av))},
$S:128}
A.am2.prototype={
gA1(){var s=this.f
return s==null?B.C4:s},
ti(a,b,c){var s=this.a.ti(a,b,c)
return s},
tj(a,b,c){if(this.b)return this.a.tj(a,b,c)
return b},
lr(a){var s=this.a.lr(a)
return s},
vl(a){return this.a.vl(a)},
j(a){return"_WrappedScrollBehavior"}}
A.yf.prototype={
cg(a){var s
if(A.D(this.f)===A.D(a.f))s=!1
else s=!0
return s}}
A.qK.prototype={
hN(a,b,c){return this.a2n(a,b,c)},
a2n(a,b,c){var s=0,r=A.a5(t.H),q=this,p,o,n
var $async$hN=A.a1(function(d,e){if(d===1)return A.a2(e,r)
while(true)switch(s){case 0:n=A.a([],t.mo)
for(p=q.d,o=0;o<p.length;++o)n.push(p[o].hN(a,b,c))
s=2
return A.a9(A.vC(n,t.H),$async$hN)
case 2:return A.a3(null,r)}})
return A.a4($async$hN,r)},
aB(a){this.d.push(a)
a.Y(0,this.geO())},
oS(a,b){b.F(0,this.geO())
B.c.A(this.d,b)},
m(){var s,r,q,p
for(s=this.d,r=s.length,q=this.geO(),p=0;p<s.length;s.length===r||(0,A.P)(s),++p)s[p].F(0,q)
this.dG()},
K6(a,b,c){return A.aFB(b,null,0,!0,c,a)},
j(a){var s=A.a([],t.s),r=this.d,q=r.length
if(q===0)s.push("no clients")
else if(q===1){r=B.c.gbw(r).at
r.toString
s.push("one client, offset "+B.d.N(r,1))}else s.push(""+q+" clients")
return"<optimized out>#"+A.c4(this)+"("+B.c.bb(s,", ")+")"}}
A.hL.prototype={
ha(){var s=this,r=null,q=s.gAC()?s.gfm():r,p=s.gAC()?s.gfl():r,o=s.gLj()?s.gcv():r,n=s.gLl()?s.gql():r,m=s.gh6()
return new A.vq(q,p,o,n,m)},
gBI(){var s=this
return s.gcv()<s.gfm()||s.gcv()>s.gfl()},
gJz(){var s=this
return s.gcv()===s.gfm()||s.gcv()===s.gfl()},
gkZ(){var s=this
return s.gql()-A.J(s.gfm()-s.gcv(),0,s.gql())-A.J(s.gcv()-s.gfl(),0,s.gql())}}
A.vq.prototype={
gfm(){var s=this.a
s.toString
return s},
gfl(){var s=this.b
s.toString
return s},
gAC(){return this.a!=null&&this.b!=null},
gcv(){var s=this.c
s.toString
return s},
gLj(){return this.c!=null},
gql(){var s=this.d
s.toString
return s},
gLl(){return this.d!=null},
j(a){var s=this
return"FixedScrollMetrics("+B.d.N(Math.max(s.gcv()-s.gfm(),0),1)+"..["+B.d.N(s.gkZ(),1)+"].."+B.d.N(Math.max(s.gfl()-s.gcv(),0),1)+")"},
gh6(){return this.e}}
A.Qi.prototype={}
A.ew.prototype={}
A.Os.prototype={
Mj(a){if(t.rS.b(a))++a.d9$
return!1}}
A.el.prototype={
cw(a){this.Sa(a)
a.push(this.a.j(0))}}
A.yk.prototype={
cw(a){var s
this.nF(a)
s=this.d
if(s!=null)a.push(s.j(0))}}
A.eV.prototype={
cw(a){var s
this.nF(a)
a.push("scrollDelta: "+A.h(this.e))
s=this.d
if(s!=null)a.push(s.j(0))},
gKu(){return this.d}}
A.iF.prototype={
cw(a){var s,r=this
r.nF(a)
a.push("overscroll: "+B.d.N(r.e,1))
a.push("velocity: "+B.d.N(r.f,1))
s=r.d
if(s!=null)a.push(s.j(0))}}
A.jX.prototype={
cw(a){var s
this.nF(a)
s=this.d
if(s!=null)a.push(s.j(0))},
gKu(){return this.d}}
A.Om.prototype={
cw(a){this.nF(a)
a.push("direction: "+this.d.j(0))}}
A.Bx.prototype={
cw(a){var s,r
this.w4(a)
s=this.d9$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.Bw.prototype={
cg(a){return this.f!==a.f}}
A.m4.prototype={
a6U(a,b){return this.d.$1(b)}}
A.yi.prototype={
X(){return new A.yj(new A.we(t.z_),B.i)}}
A.yj.prototype={
F(a,b){var s,r,q,p=this.d
p.toString
p=A.aH4(p)
s=A.o(p).c
for(;p.t();){r=p.c
if(r==null)r=s.a(r)
if(J.f(r.d,b)){p=r.a
p.toString
A.o(r).h("np.E").a(r);++p.a
s=r.b
s.c=r.c
r.c.b=s
q=--p.b
r.a=r.b=r.c=null
if(q===0)p.c=null
else if(r===p.c)p.c=s
return}}},
H6(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.d
if(i.b===0)return
p=A.aF(i,!0,t.Sx)
for(i=p.length,o=0;o<i;++o){s=p[o]
try{if(s.a!=null)J.aAw(s,a)}catch(n){r=A.ai(n)
q=A.az(n)
m=j instanceof A.c5?A.d7(j):null
l=A.bt("while dispatching notifications for "+A.aK(m==null?A.b1(j):m).j(0))
k=$.hd()
if(k!=null)k.$1(new A.bP(r,q,"widget library",l,new A.aay(j),!1))}}},
G(a){var s=this
return new A.d0(new A.aaz(s),new A.d0(new A.aaA(s),new A.Bw(s,s.a.c,null),null,t.WA),null,t.ji)},
m(){this.d=null
this.aj()}}
A.aay.prototype={
$0(){var s=null,r=this.a
return A.a([A.ii("The "+A.D(r).j(0)+" sending notification was",r,!0,B.aY,s,!1,s,s,B.aB,s,!1,!0,!0,B.b8,s,t.ap)],t.E)},
$S:13}
A.aaz.prototype={
$1(a){var s=new A.Ph(null,null,a.a,a.b,0)
s.d9$=a.d9$
this.a.H6(s)
return!1},
$S:85}
A.aaA.prototype={
$1(a){this.a.H6(a)
return!1},
$S:27}
A.Ph.prototype={}
A.yg.prototype={
H(){return"ScrollDecelerationRate."+this.b}}
A.lK.prototype={
hP(a){var s=this.a
s=s==null?null:s.iy(a)
return s==null?a:s},
iy(a){return new A.lK(this.hP(a))},
z9(a,b){var s=this.a
if(s==null)return b
return s.z9(a,b)},
ja(a){var s,r=this.a
if(r==null){r=a.at
r.toString
if(r===0){r=a.z
r.toString
s=a.Q
s.toString
s=r!==s
r=s}else r=!0
return r}return r.ja(a)},
ML(a,b,c){var s=this.a
if(s==null){$.aq.toString
s=$.cG().gli()
return Math.abs(a)>Math.max(Math.abs(s.a),Math.abs(s.b))}return s.ML(a,b,c)},
ou(a,b){var s=this.a
if(s==null)return 0
return s.ou(a,b)},
t6(a,b,c,d){var s=this.a
if(s==null){s=b.c
s.toString
return s}return s.t6(a,b,c,d)},
ms(a,b){var s=this.a
if(s==null)return null
return s.ms(a,b)},
glC(){var s=this.a
s=s==null?null:s.glC()
return s==null?$.ayv():s},
gqd(){var s=this.a
s=s==null?null:s.gqd()
return s==null?$.ayw():s},
gB9(){var s=this.a
s=s==null?null:s.gB9()
return s==null?18:s},
guC(){var s=this.a
s=s==null?null:s.guC()
return s==null?50:s},
gpL(){var s=this.a
s=s==null?null:s.gpL()
return s==null?8000:s},
zm(a){var s=this.a
if(s==null)return 0
return s.zm(a)},
gA2(){var s=this.a
return s==null?null:s.gA2()},
gmi(){return!0},
j(a){var s=this.a
if(s==null)return"ScrollPhysics"
return"ScrollPhysics -> "+s.j(0)}}
A.LM.prototype={
iy(a){return new A.LM(this.hP(a))},
t6(a,b,c,d){var s,r,q,p,o,n,m,l
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
return p+(o-q)}}l=this.QZ(a,b,c,d)
if(r){q=b.b
q.toString
l=A.J(l,p,q)}return l}}
A.ua.prototype={
iy(a){return new A.ua(this.b,this.hP(a))},
L7(a){switch(this.b.a){case 1:return 0.07*Math.pow(1-a,2)
case 0:return 0.52*Math.pow(1-a,2)}},
z9(a,b){var s,r,q,p,o,n,m
if(!a.gBI())return b
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
m=this.L7((o-Math.abs(b))/s)}else{s.toString
m=this.L7(o/s)}return J.eE(b)*A.aB2(o,Math.abs(b),m)},
ou(a,b){return 0},
ms(a,b){var s,r,q,p,o,n,m,l=this.gqd()
if(Math.abs(b)>=l.c||a.gBI()){switch(this.b.a){case 1:s=1400
break
case 0:s=0
break
default:s=null}r=this.glC()
q=a.at
q.toString
p=a.z
p.toString
o=a.Q
o.toString
n=new A.XP(p,o,r,l)
if(q<p){n.f=new A.lL(p,A.BN(r,q-p,b),B.bY)
n.r=-1/0}else if(q>o){n.f=new A.lL(o,A.BN(r,q-o,b),B.bY)
n.r=-1/0}else{q=n.e=A.aCQ(0.135,q,b,s)
m=q.gu1()
if(b>0&&m>o){p=q.Nb(o)
n.r=p
n.f=new A.lL(o,A.BN(r,o-o,Math.min(q.dZ(0,p),5000)),B.bY)}else if(b<0&&m<p){o=q.Nb(p)
n.r=o
n.f=new A.lL(p,A.BN(r,p-p,Math.min(q.dZ(0,o),5000)),B.bY)}else n.r=1/0}return n}return null},
guC(){return 100},
zm(a){return J.eE(a)*Math.min(0.000816*Math.pow(Math.abs(a),1.967),4e4)},
gA2(){return 3.5},
gpL(){switch(this.b.a){case 1:return 64e3
case 0:return A.lK.prototype.gpL.call(this)}},
glC(){switch(this.b.a){case 1:return A.auQ(0.3,1.3,75)
case 0:return A.lK.prototype.glC.call(this)}}}
A.um.prototype={
iy(a){return new A.um(this.hP(a))},
ou(a,b){var s,r,q=a.at
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
ms(a,b){var s,r,q,p,o=null,n=this.gqd()
if(a.gBI()){s=a.at
s.toString
r=a.Q
r.toString
if(s>r)q=r
else q=o
r=a.z
r.toString
if(s<r)q=r
s=this.glC()
r=a.at
r.toString
q.toString
return new A.lL(q,A.BN(s,r-q,Math.min(0,b)),n)}s=Math.abs(b)
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
r=new A.YS(r,b,n)
s=Math.exp(Math.log(0.35*s/778.3530259679999)/($.ay9()-1))
r.e=s
r.f=Math.abs(b*s/3.065)
return r}}
A.qM.prototype={
H(){return"ScrollPositionAlignmentPolicy."+this.b}}
A.jY.prototype={
En(a,b,c,d,e){if(d!=null)this.kD(d)
this.N4()},
gfm(){var s=this.z
s.toString
return s},
gfl(){var s=this.Q
s.toString
return s},
gAC(){return this.z!=null&&this.Q!=null},
gcv(){var s=this.at
s.toString
return s},
gLj(){return this.at!=null},
gql(){var s=this.ax
s.toString
return s},
gLl(){return this.ax!=null},
kD(a){var s=this,r=a.z
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
if(A.D(a)!==A.D(s))s.fr.MW()
s.w.Dd(s.fr.gil())
s.dy.sn(0,s.fr.ghj())},
Oy(a){var s,r,q,p=this,o=p.at
o.toString
if(a!==o){s=p.r.ou(p,a)
o=p.at
o.toString
r=a-s
p.at=r
if(r!==o){p.yP()
p.DE()
r=p.at
r.toString
p.zW(r-o)}if(s!==0){o=p.fr
o.toString
r=p.ha()
q=$.aq.an$.z.i(0,p.w.z)
q.toString
o.tK(r,q,s)
return s}}return 0},
a3P(a){var s=this.at
s.toString
this.at=s+a
this.ch=!0},
Ar(a){var s=this,r=s.at
r.toString
s.as=a-r
s.at=a
s.yP()
s.DE()
$.bS.cy$.push(new A.aaB(s))},
D3(){var s,r=this.w,q=r.c
q.toString
q=A.a7D(q)
if(q!=null){r=r.c
r.toString
s=this.at
s.toString
q.Ny(r,s)}},
N4(){var s,r,q
if(this.at==null){s=this.w
r=s.c
r.toString
r=A.a7D(r)
if(r==null)q=null
else{s=s.c
s.toString
q=r.MI(s)}if(q!=null)this.at=q}},
N3(a,b){if(b)this.at=a
else this.e5(a)},
D2(){var s=this.at
s.toString
this.w.e.sn(0,s)
s=$.hM.ah$
s===$&&A.b()
s.L_()},
oy(a){if(this.ax!==a){this.ax=a
this.ch=!0}return!0},
ov(a,b){var s,r,q,p=this
if(!A.Dj(p.z,a,0.001)||!A.Dj(p.Q,b,0.001)||p.ch||p.db!==A.bl(p.gh6())){p.z=a
p.Q=b
p.db=A.bl(p.gh6())
s=p.ay?p.ha():null
p.ch=!1
p.CW=!0
if(p.ay){r=p.cx
r.toString
s.toString
r=!p.a3Q(r,s)}else r=!1
if(r)return!1
p.ay=!0}if(p.CW){p.R2()
p.w.Or(p.r.ja(p))
p.CW=!1}s=p.ha()
if(p.cx!=null){r=Math.max(s.gcv()-s.gfm(),0)
q=p.cx
if(r===Math.max(q.gcv()-q.gfm(),0))if(s.gkZ()===p.cx.gkZ()){r=Math.max(s.gfl()-s.gcv(),0)
q=p.cx
r=r===Math.max(q.gfl()-q.gcv(),0)&&s.e===p.cx.e}else r=!1
else r=!1
r=!r}else r=!0
if(r){if(!p.cy){A.eb(p.ga4s())
p.cy=!0}p.cx=p.ha()}return!0},
a3Q(a,b){var s=this,r=s.r.t6(s.fr.ghj(),b,a,s.fr.ges()),q=s.at
q.toString
if(r!==q){s.at=r
return!1}return!0},
ow(){this.fr.ow()
this.yP()},
yP(){var s,r,q,p,o,n=this,m=n.w
switch(m.a.c.a){case 0:s=B.e3
r=B.e2
break
case 1:s=B.e4
r=B.e5
break
case 2:s=B.e2
r=B.e3
break
case 3:s=B.e5
r=B.e4
break
default:s=null
r=null}q=A.bc(t._S)
p=n.at
p.toString
o=n.z
o.toString
if(p>o)q.D(0,r)
p=n.at
p.toString
o=n.Q
o.toString
if(p<o)q.D(0,s)
if(A.arA(q,n.dx))return
n.dx=q
m=m.z
if(m.gbG()!=null)m.gbG().a8x(q)},
A7(a,b,c,d,e,f){var s,r,q,p,o,n=this,m=null,l=A.aFg(a)
l.toString
s=f!=null&&f!==a?A.hE(f.bM(0,a),a.gi8().fL(f.gi8())):m
switch(c.a){case 0:r=l.lp(a,b,s)
q=n.z
q.toString
p=n.Q
p.toString
o=A.J(r.a,q,p)
break
case 1:r=l.lp(a,1,s)
q=n.z
q.toString
p=n.Q
p.toString
o=A.J(r.a,q,p)
r=n.at
r.toString
if(o<r)o=r
break
case 2:r=l.lp(a,0,s)
q=n.z
q.toString
p=n.Q
p.toString
o=A.J(r.a,q,p)
r=n.at
r.toString
if(o>r)o=r
break
default:o=m}r=n.at
r.toString
if(o===r)return A.bQ(m,t.H)
if(e.a===B.x.a){n.e5(o)
return A.bQ(m,t.H)}return n.hN(o,d,e)},
pP(a,b,c,d){var s,r=this.z
r.toString
s=this.Q
s.toString
b=A.J(b,r,s)
return this.Rr(0,b,c,d)},
fE(a){var s,r,q=this,p=q.fr
if(p!=null){s=p.gil()
r=q.fr.ghj()
if(r&&!a.ghj())q.zQ()
q.fr.m()}else{r=!1
s=!1}q.fr=a
if(s!==a.gil())q.w.Dd(q.fr.gil())
q.dy.sn(0,q.fr.ghj())
if(!r&&q.fr.ghj())q.zU()},
zU(){var s=this.fr
s.toString
s.Kq(this.ha(),$.aq.an$.z.i(0,this.w.z))},
zW(a){var s,r,q=this.fr
q.toString
s=this.ha()
r=$.aq.an$.z.i(0,this.w.z)
r.toString
q.Kr(s,r,a)},
zQ(){var s,r,q=this,p=q.fr
p.toString
s=q.ha()
r=$.aq.an$.z.i(0,q.w.z)
r.toString
p.Kp(s,r)
q.D2()
q.D3()},
a4t(){var s,r,q
this.cy=!1
s=this.w.z
if($.aq.an$.z.i(0,s)!=null){r=this.ha()
q=$.aq.an$.z.i(0,s)
q.toString
s=$.aq.an$.z.i(0,s)
if(s!=null)s.dn(new A.nW(r,q,0))}},
m(){var s=this,r=s.fr
if(r!=null)r.m()
s.fr=null
s.dy.m()
s.dG()},
cw(a){var s,r,q=this
q.Rq(a)
s=q.z
s=s==null?null:B.d.N(s,1)
r=q.Q
r=r==null?null:B.d.N(r,1)
a.push("range: "+A.h(s)+".."+A.h(r))
r=q.ax
a.push("viewport: "+A.h(r==null?null:B.d.N(r,1)))}}
A.aaB.prototype={
$1(a){this.a.as=0},
$S:2}
A.nW.prototype={
cw(a){this.S9(a)
a.push(this.a.j(0))}}
A.Bv.prototype={
cw(a){var s,r
this.w4(a)
s=this.d9$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.Tm.prototype={}
A.nX.prototype={
Eo(a,b,c,d,e,f){var s=this
if(s.at==null&&c!=null)s.at=c
if(s.fr==null)s.fE(new A.l8(s))},
gh6(){return this.w.a.c},
kD(a){var s,r=this
r.R0(a)
r.fr.a=r
r.k4=a.k4
s=a.ok
if(s!=null){r.ok=s
s.a=r
a.ok=null}},
fE(a){var s,r=this
r.k3=0
r.R4(a)
s=r.ok
if(s!=null)s.m()
r.ok=null
if(!r.fr.ghj())r.Cv(B.fU)},
fV(a){var s,r,q,p=this,o=p.r.ms(p,a)
if(o!=null){s=p.fr
s=s==null?null:s.gil()
s=new A.DL(s!==!1,p)
r=A.aoQ(null,0,p.w)
r.aR()
q=r.bm$
q.b=!0
q.a.push(s.gyr())
r.hw(0)
r.z=B.az
r.yy(o).a.a.eu(s.gx6())
s.b=r
p.fE(s)}else p.fE(new A.l8(p))},
Cv(a){var s,r,q,p=this
if(p.k4===a)return
p.k4=a
s=p.ha()
r=p.w.z
q=$.aq.an$.z.i(0,r)
q.toString
r=$.aq.an$.z.i(0,r)
if(r!=null)r.dn(new A.Om(a,s,q,0))},
hN(a,b,c){var s,r,q,p=this,o=p.at
o.toString
if(A.Dj(a,o,p.r.gqd().a)){p.e5(a)
return A.bQ(null,t.H)}o=p.at
o.toString
s=new A.GY(p)
r=new A.aL(new A.a7($.ad,t.V),t.Q)
s.b=r
o=A.aoQ("DrivenScrollActivity",o,p.w)
o.aR()
q=o.bm$
q.b=!0
q.a.push(s.gyr())
o.z=B.az
o.je(a,b,c).a.a.eu(s.gx6())
s.c!==$&&A.eD()
s.c=o
p.fE(s)
return r.a},
e5(a){var s,r,q=this
q.fE(new A.l8(q))
s=q.at
s.toString
if(s!==a){q.Ar(a)
q.zU()
r=q.at
r.toString
q.zW(r-s)
q.zQ()}q.fV(0)},
BO(a){var s,r,q,p,o=this
if(a===0){o.fV(0)
return}s=o.at
s.toString
r=o.z
r.toString
r=Math.max(s+a,r)
q=o.Q
q.toS