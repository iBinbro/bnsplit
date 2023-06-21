a,b){if(a instanceof A.dr)return A.aj2(this,a,b)
return this.D1(a,b)},
u4(a,b,c,d,e){var s,r=this
if(r.gp5()){s=r.a
switch(s.c.a){case 0:return
case 1:switch(d.a){case 1:A.amw(a,b,s)
break
case 0:if(c!=null&&!c.k(0,B.aA)){A.amx(a,b,s,c)
return}A.amy(a,b,s)
break}return}}A.arD(a,b,r.c,r.d,r.b,r.a)},
hM(a,b,c){return this.u4(a,b,null,B.a6,c)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.A(s))return!1
return b instanceof A.dr&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c.k(0,s.c)&&b.d.k(0,s.d)},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s,r,q=this
if(q.gp5())return"Border.all("+q.a.i(0)+")"
s=A.a([],t.s)
r=q.a
if(!r.k(0,B.D))s.push("top: "+r.i(0))
r=q.b
if(!r.k(0,B.D))s.push("right: "+r.i(0))
r=q.c
if(!r.k(0,B.D))s.push("bottom: "+r.i(0))
r=q.d
if(!r.k(0,B.D))s.push("left: "+r.i(0))
return"Border("+B.c.b3(s,", ")+")"}}
A.dQ.prototype={
glY(){var s,r=this
if(r.gp5()){s=r.a.geA()
return new A.aY(s,s,s,s)}return new A.aY(r.b.geA(),r.a.geA(),r.c.geA(),r.d.geA())},
gp5(){var s,r,q,p=this,o=p.a,n=o.a,m=p.b
if(!m.a.k(0,n)||!p.c.a.k(0,n)||!p.d.a.k(0,n))return!1
s=o.b
if(m.b!==s||p.c.b!==s||p.d.b!==s)return!1
r=o.c
if(m.c!==r||p.c.c!==r||p.d.c!==r)return!1
q=o.d
if(!(m.d===q&&p.d.d===q&&p.c.d===q))return!1
return!0},
fi(a,b,c){var s,r,q,p=this,o=null
if(b instanceof A.dQ){s=p.a
r=b.a
if(A.iM(s,r)&&A.iM(p.b,b.b)&&A.iM(p.c,b.c)&&A.iM(p.d,b.d))return new A.dQ(A.fO(s,r),A.fO(p.b,b.b),A.fO(p.c,b.c),A.fO(p.d,b.d))
return o}if(b instanceof A.dr){s=b.a
r=p.a
if(!A.iM(s,r)||!A.iM(b.c,p.d))return o
q=p.b
if(!q.k(0,B.D)||!p.c.k(0,B.D)){if(!b.d.k(0,B.D)||!b.b.k(0,B.D))return o
return new A.dQ(A.fO(s,r),q,p.c,A.fO(b.c,p.d))}return new A.dr(A.fO(s,r),b.b,A.fO(b.c,p.d),b.d)}return o},
C(a,b){return this.fi(a,b,!1)},
aI(a,b){var s=this
return new A.dQ(s.a.aI(0,b),s.b.aI(0,b),s.c.aI(0,b),s.d.aI(0,b))},
c7(a,b){if(a instanceof A.dQ)return A.aj1(a,this,b)
return this.D0(a,b)},
c8(a,b){if(a instanceof A.dQ)return A.aj1(this,a,b)
return this.D1(a,b)},
u4(a,b,c,d,e){var s,r,q,p=this
if(p.gp5()){s=p.a
switch(s.c.a){case 0:return
case 1:switch(d.a){case 1:A.amw(a,b,s)
break
case 0:if(c!=null&&!c.k(0,B.aA)){A.amx(a,b,s,c)
return}A.amy(a,b,s)
break}return}}switch(e.a){case 0:r=p.c
q=p.b
break
case 1:r=p.b
q=p.c
break
default:r=null
q=null}A.arD(a,b,p.d,r,q,p.a)},
hM(a,b,c){return this.u4(a,b,null,B.a6,c)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.A(s))return!1
return b instanceof A.dQ&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c.k(0,s.c)&&b.d.k(0,s.d)},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r=A.a([],t.s),q=s.a
if(!q.k(0,B.D))r.push("top: "+q.i(0))
q=s.b
if(!q.k(0,B.D))r.push("start: "+q.i(0))
q=s.c
if(!q.k(0,B.D))r.push("end: "+q.i(0))
q=s.d
if(!q.k(0,B.D))r.push("bottom: "+q.i(0))
return"BorderDirectional("+B.c.b3(r,", ")+")"}}
A.cB.prototype={
gdv(a){var s=this.c
return s==null?null:s.glY()},
uA(a,b){var s,r,q
switch(this.w.a){case 1:s=A.pk(a.gaK(),a.gfE()/2)
r=$.aq().cp()
r.y6(s)
return r
case 0:r=this.d
if(r!=null){q=$.aq().cp()
q.eK(r.W(b).dA(a))
return q}r=$.aq().cp()
r.nX(a)
return r}},
aI(a,b){var s=this,r=null,q=A.v(r,s.a,b),p=A.amz(r,s.c,b),o=A.hz(r,s.d,b),n=A.amC(r,s.e,b),m=s.f
m=m==null?r:m.aI(0,b)
return new A.cB(q,s.b,p,o,n,m,s.w)},
gzI(){return this.e!=null},
c7(a,b){if(a==null)return this.aI(0,b)
if(a instanceof A.cB)return A.amA(a,this,b)
return this.Cv(a,b)},
c8(a,b){if(a==null)return this.aI(0,1-b)
if(a instanceof A.cB)return A.amA(this,a,b)
return this.Cw(a,b)},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.X(b)!==A.A(r))return!1
if(b instanceof A.cB)if(J.f(b.a,r.a))if(J.f(b.b,r.b))if(J.f(b.c,r.c))if(J.f(b.d,r.d))if(A.cS(b.e,r.e))if(J.f(b.f,r.f))s=b.w===r.w
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gt(a){var s=this,r=s.e
r=r==null?null:A.df(r)
return A.S(s.a,s.b,s.c,s.d,r,s.f,null,s.w,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
K4(a,b,c){var s
switch(this.w.a){case 0:s=this.d
if(s!=null)return s.W(c).dA(new A.C(0,0,0+a.a,0+a.b)).B(0,b)
return!0
case 1:return b.aa(0,a.j0(B.j)).gd1()<=Math.min(a.a,a.b)/2}},
rM(a){return new A.abh(this,a)}}
A.abh.prototype={
FM(a,b,c,d){var s=this.b
switch(s.w.a){case 1:a.ij(b.gaK(),b.gfE()/2,c)
break
case 0:s=s.d
if(s==null||s.k(0,B.aA))a.cj(b,c)
else a.d2(s.W(d).dA(b),c)
break}},
XZ(a,b,c){var s,r,q,p,o,n,m=this.b.e
if(m==null)return
for(s=m.length,r=0;r<m.length;m.length===s||(0,A.P)(m),++r){q=m[r]
p=$.aq().bg()
p.saf(0,q.a)
o=q.e
n=q.c
p.sa51(new A.uP(o,n>0?n*0.57735+0.5:0))
o=b.df(q.b)
n=q.d
this.FM(a,new A.C(o.a-n,o.b-n,o.c+n,o.d+n),p,c)}},
XV(a,b,c){var s,r,q=this,p=q.b,o=p.b
if(o==null)return
if(q.e==null)q.e=new A.DM(o,q.a)
switch(p.w.a){case 1:s=A.pk(b.gaK(),b.gfE()/2)
r=$.aq().cp()
r.y6(s)
break
case 0:p=p.d
if(p!=null){r=$.aq().cp()
r.eK(p.W(c.d).dA(b))}else r=null
break
default:r=null}q.e.u3(a,b,r,c)},
m(){var s,r=this.e
if(r!=null){s=r.c
if(s!=null)s.G(0,new A.dv(r.gF0(),null,null))
s=r.d
if(s!=null)s.a.m()
r.d=null}this.NQ()},
po(a,b,c){var s,r,q,p,o=this,n=c.e,m=b.a,l=b.b,k=new A.C(m,l,m+n.a,l+n.b),j=c.d
o.XZ(a,k,j)
n=o.b
m=n.a
l=m==null
if(!l||n.f!=null){if(o.c!=null)s=n.f!=null&&!J.f(o.d,k)
else s=!0
if(s){r=$.aq().bg()
if(!l)r.saf(0,m)
m=n.f
if(m!=null){l=m.d.W(j).Mi(k)
s=m.e.W(j).Mi(k)
q=m.a
p=m.wN()
m=m.f
r.sC9(A.ajz(l,s,q,p,m,null))
o.d=k}o.c=r}m=o.c
m.toString
o.FM(a,k,m,j)}o.XV(a,k,c)
m=n.c
if(m!=null){l=n.d
l=l==null?null:l.W(j)
m.u4(a,k,l,n.w,j)}},
i(a){return"BoxPainter for "+this.b.i(0)}}
A.lI.prototype={
E(){return"BoxFit."+this.b}}
A.EU.prototype={}
A.iN.prototype={
aI(a,b){var s=this
return new A.iN(s.d*b,s.e,s.a,s.b.a_(0,b),s.c*b)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.A(s))return!1
return b instanceof A.iN&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c===s.c&&b.d===s.d&&b.e===s.e},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this
return"BoxShadow("+s.a.i(0)+", "+s.b.i(0)+", "+A.ht(s.c)+", "+A.ht(s.d)+", "+s.e.i(0)+")"}}
A.ds.prototype={
aI(a,b){return new A.ds(this.b,this.a.aI(0,b))},
c7(a,b){var s,r
if(a instanceof A.ds){s=A.az(a.a,this.a,b)
r=A.T(a.b,this.b,b)
r.toString
return new A.ds(A.H(r,0,1),s)}return this.la(a,b)},
c8(a,b){var s,r
if(a instanceof A.ds){s=A.az(this.a,a.a,b)
r=A.T(this.b,a.b,b)
r.toString
return new A.ds(A.H(r,0,1),s)}return this.lb(a,b)},
fB(a,b){var s=$.aq().cp()
s.y6(this.Ds(a))
return s},
hM(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=r.b*r.d
if(this.b===0)a.ij(b.gaK(),(b.gfE()+s)/2,r.hU())
else a.t6(this.Ds(b).d6(s/2),r.hU())
break}},
Ds(a){var s,r,q,p,o,n,m,l=this.b
if(l===0||a.c-a.a===a.d-a.b)return A.pk(a.gaK(),a.gfE()/2)
s=a.c
r=a.a
q=s-r
p=a.d
o=a.b
n=p-o
l=1-l
if(q<n){m=l*(n-q)/2
return new A.C(r,o+m,s,p-m)}else{m=l*(q-n)/2
return new A.C(r+m,o,s-m,p)}},
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return b instanceof A.ds&&b.a.k(0,this.a)&&b.b===this.b},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this.b
if(s!==0)return"CircleBorder("+this.a.i(0)+", eccentricity: "+A.h(s)+")"
return"CircleBorder("+this.a.i(0)+")"}}
A.Vl.prototype={
vI(a,b,c,d){var s=this
s.gbE(s).cA(0)
switch(b.a){case 0:break
case 1:a.$1(!1)
break
case 2:a.$1(!0)
break
case 3:a.$1(!0)
s.gbE(s).BR(c,$.aq().bg())
break}d.$0()
if(b===B.hs)s.gbE(s).cv(0)
s.gbE(s).cv(0)},
a0S(a,b,c,d){this.vI(new A.Vm(this,a),b,c,d)},
a0T(a,b,c,d){this.vI(new A.Vn(this,a),b,c,d)},
a0V(a,b,c,d){this.vI(new A.Vo(this,a),b,c,d)}}
A.Vm.prototype={
$1(a){var s=this.a
return s.gbE(s).Io(0,this.b,a)},
$S:24}
A.Vn.prototype={
$1(a){var s=this.a
return s.gbE(s).Ip(this.b,a)},
$S:24}
A.Vo.prototype={
$1(a){var s=this.a
return s.gbE(s).a0U(this.b,a)},
$S:24}
A.k4.prototype={
j(a,b){return this.b.j(0,b)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.A(s))return!1
return s.NR(0,b)&&A.n(s).h("k4<k4.T>").b(b)&&A.aik(b.b,s.b)},
gt(a){return A.S(A.A(this),this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"ColorSwatch(primary value: "+this.NS(0)+")"}}
A.fR.prototype={
c_(){return"Decoration"},
gdv(a){return B.aY},
gzI(){return!1},
c7(a,b){return null},
c8(a,b){return null},
K4(a,b,c){return!0},
uA(a,b){throw A.c(A.O("This Decoration subclass does not expect to be used for clipping."))}}
A.Br.prototype={
m(){}}
A.MW.prototype={}
A.mk.prototype={
E(){return"ImageRepeat."+this.b}}
A.DL.prototype={
k(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(J.X(b)!==A.A(this))return!1
if(b instanceof A.DL)if(b.a.k(0,this.a))if(B.a0.k(0,B.a0))s=!0
else s=!1
else s=!1
else s=!1
return s},
gt(a){return A.S(this.a,null,B.O,B.a0,null,B.bs,!1,1,1,B.d4,!1,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=A.a([this.a.i(0)],t.s),r=!0
if(r)s.push(B.O.i(0))
s.push(B.a0.i(0))
s.push("scale 1")
s.push("opacity 1")
s.push(B.d4.i(0))
return"DecorationImage("+B.c.b3(s,", ")+")"}}
A.DM.prototype={
u3(a,b,c,d){var s,r,q,p,o=this,n=null,m=o.a.a.W(d),l=m.a
if(l==null)l=m
s=o.c
r=s==null
if(r)q=n
else{q=s.a
if(q==null)q=s}if(l!==q){p=new A.dv(o.gF0(),n,n)
if(!r)s.G(0,p)
o.c=m
m.Z(0,p)}if(o.d==null)return
l=c!=null
if(l){a.cA(0)
a.fP(0,c)}s=o.d
r=s.a
A.arE(B.a0,a,n,n,s.c,B.d4,B.O,!1,r,!1,!1,1,b,B.bs,s.b)
if(l)a.cv(0)},
Vm(a,b){var s,r,q=this
if(J.f(q.d,a))return
s=q.d
if(s!=null)if(a.a.Kr(s.a)){r=s.b
s=r===r&&a.c==s.c}else s=!1
else s=!1
if(s){a.a.m()
return}s=q.d
if(s!=null)s.a.m()
q.d=a
if(!b)q.b.$0()},
i(a){return"DecorationImagePainter(stream: "+A.h(this.c)+", image: "+A.h(this.d)+") for "+this.a.i(0)}}
A.dc.prototype={
gcn(){var s=this
return s.gdi(s)+s.gdj(s)+s.geh(s)+s.gei()},
a0c(a){var s=this
switch(a.a){case 0:return s.gcn()
case 1:return s.gb6(s)+s.gb9(s)}},
C(a,b){var s=this
return new A.la(s.gdi(s)+b.gdi(b),s.gdj(s)+b.gdj(b),s.geh(s)+b.geh(b),s.gei()+b.gei(),s.gb6(s)+b.gb6(b),s.gb9(s)+b.gb9(b))},
j1(a,b,c){var s=this
return new A.la(A.H(s.gdi(s),b.a,c.a),A.H(s.gdj(s),b.c,c.b),A.H(s.geh(s),0,c.c),A.H(s.gei(),0,c.d),A.H(s.gb6(s),b.b,c.e),A.H(s.gb9(s),b.d,c.f))},
i(a){var s=this
if(s.geh(s)===0&&s.gei()===0){if(s.gdi(s)===0&&s.gdj(s)===0&&s.gb6(s)===0&&s.gb9(s)===0)return"EdgeInsets.zero"
if(s.gdi(s)===s.gdj(s)&&s.gdj(s)===s.gb6(s)&&s.gb6(s)===s.gb9(s))return"EdgeInsets.all("+B.d.N(s.gdi(s),1)+")"
return"EdgeInsets("+B.d.N(s.gdi(s),1)+", "+B.d.N(s.gb6(s),1)+", "+B.d.N(s.gdj(s),1)+", "+B.d.N(s.gb9(s),1)+")"}if(s.gdi(s)===0&&s.gdj(s)===0)return"EdgeInsetsDirectional("+B.d.N(s.geh(s),1)+", "+B.d.N(s.gb6(s),1)+", "+B.d.N(s.gei(),1)+", "+B.d.N(s.gb9(s),1)+")"
return"EdgeInsets("+B.d.N(s.gdi(s),1)+", "+B.d.N(s.gb6(s),1)+", "+B.d.N(s.gdj(s),1)+", "+B.d.N(s.gb9(s),1)+") + EdgeInsetsDirectional("+B.d.N(s.geh(s),1)+", 0.0, "+B.d.N(s.gei(),1)+", 0.0)"},
k(a,b){var s=this
if(b==null)return!1
return b instanceof A.dc&&b.gdi(b)===s.gdi(s)&&b.gdj(b)===s.gdj(s)&&b.geh(b)===s.geh(s)&&b.gei()===s.gei()&&b.gb6(b)===s.gb6(s)&&b.gb9(b)===s.gb9(s)},
gt(a){var s=this
return A.S(s.gdi(s),s.gdj(s),s.geh(s),s.gei(),s.gb6(s),s.gb9(s),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.bq.prototype={
gdi(a){return this.a},
gb6(a){return this.b},
gdj(a){return this.c},
gb9(a){return this.d},
geh(a){return 0},
gei(){return 0},
yI(a){var s=this
return new A.C(a.a+s.a,a.b+s.b,a.c-s.c,a.d-s.d)},
C(a,b){if(b instanceof A.bq)return this.V(0,b)
return this.Cx(0,b)},
j1(a,b,c){var s=this
return new A.bq(A.H(s.a,b.a,c.a),A.H(s.b,b.b,c.e),A.H(s.c,b.c,c.b),A.H(s.d,b.d,c.f))},
aa(a,b){var s=this
return new A.bq(s.a-b.a,s.b-b.b,s.c-b.c,s.d-b.d)},
V(a,b){var s=this
return new A.bq(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
a_(a,b){var s=this
return new A.bq(s.a*b,s.b*b,s.c*b,s.d*b)},
W(a){return this},
oh(a,b,c,d){var s=this,r=b==null?s.a:b,q=d==null?s.b:d,p=c==null?s.c:c
return new A.bq(r,q,p,a==null?s.d:a)},
yu(a){return this.oh(a,null,null,null)}}
A.aY.prototype={
geh(a){return this.a},
gb6(a){return this.b},
gei(){return this.c},
gb9(a){return this.d},
gdi(a){return 0},
gdj(a){return 0},
C(a,b){if(b instanceof A.aY)return this.V(0,b)
return this.Cx(0,b)},
aa(a,b){var s=this
return new A.aY(s.a-b.a,s.b-b.b,s.c-b.c,s.d-b.d)},
V(a,b){var s=this
return new A.aY(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
a_(a,b){var s=this
return new A.aY(s.a*b,s.b*b,s.c*b,s.d*b)},
W(a){var s=this
switch(a.a){case 0:return new A.bq(s.c,s.b,s.a,s.d)
case 1:return new A.bq(s.a,s.b,s.c,s.d)}}}
A.la.prototype={
a_(a,b){var s=this
return new A.la(s.a*b,s.b*b,s.c*b,s.d*b,s.e*b,s.f*b)},
W(a){var s=this
switch(a.a){case 0:return new A.bq(s.d+s.a,s.e,s.c+s.b,s.f)
case 1:return new A.bq(s.c+s.a,s.e,s.d+s.b,s.f)}},
gdi(a){return this.a},
gdj(a){return this.b},
geh(a){return this.c},
gei(){return this.d},
gb6(a){return this.e},
gb9(a){return this.f}}
A.abu.prototype={}
A.ahr.prototype={
$1(a){return a<=this.a},
$S:219}
A.agX.prototype={
$1(a){var s=this,r=A.v(A.aqw(s.a,s.b,a),A.aqw(s.c,s.d,a),s.e)
r.toString
return r},
$S:220}
A.a_p.prototype={
wN(){var s,r,q,p=this.b
if(p!=null)return p
p=this.a.length
s=1/(p-1)
if(p>4294967295)A.K(A.bt(p,0,4294967295,"length",null))
r=J.mo(new Array(p),t.i)
for(q=0;q<p;++q)r[q]=q*s
return r}}
A.mr.prototype={
aI(a,b){var s=this,r=s.a,q=A.aj(r).h("aC<1,M>")
return new A.mr(s.d,s.e,s.f,A.aA(new A.aC(r,new A.a1p(b),q),!0,q.h("bm.E")),s.b,null)},
c7(a,b){var s=A.anC(a,this,b)
return s},
c8(a,b){var s=A.anC(this,a,b)
return s},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.A(s))return!1
return b instanceof A.mr&&b.d.k(0,s.d)&&b.e.k(0,s.e)&&b.f===s.f&&A.cS(b.a,s.a)&&A.cS(b.b,s.b)},
gt(a){var s=this,r=A.df(s.a),q=s.b
q=q==null?null:A.df(q)
return A.S(s.d,s.e,s.f,s.c,r,q,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r=A.a(["begin: "+s.d.i(0),"end: "+s.e.i(0),"colors: "+A.h(s.a)],t.s),q=s.b
if(q!=null)r.push("stops: "+A.h(q))
r.push("tileMode: "+s.f.i(0))
return"LinearGradient("+B.c.b3(r,", ")+")"}}
A.a1p.prototype={
$1(a){var s=A.v(null,a,this.a)
s.toString
return s},
$S:56}
A.a0j.prototype={
a0(a){var s,r,q,p
for(s=this.b,r=s.gaS(s),r=new A.dU(J.at(r.a),r.b),q=A.n(r).z[1];r.q();){p=r.a;(p==null?q.a(p):p).m()}s.a0(0)
for(s=this.a,r=s.gaS(s),r=new A.dU(J.at(r.a),r.b),q=A.n(r).z[1];r.q();){p=r.a
if(p==null)p=q.a(p)
p.a.G(0,p.b)}s.a0(0)
this.f=0},
m2(a){var s,r,q,p=this,o=p.c.v(0,a)
if(o!=null){s=o.a
r=o.d
r===$&&A.b()
if(s.w)A.K(A.a5(u.V))
B.c.v(s.x,r)
o.D4()}q=p.a.v(0,a)
if(q!=null){q.a.G(0,q.b)
return!0}o=p.b.v(0,a)
if(o!=null){s=p.f
r=o.b
r.toString
p.f=s-r
o.m()
return!0}return!1},
Hc(a,b,c){var s,r=this,q=b.b
if(q!=null&&q<=104857600&&!0){s=r.f
q.toString
r.f=s+q
r.b.l(0,a,b)
r.Sv(c)}else b.m()},
xH(a,b,c){var s=this.c.bD(0,a,new A.a0m(this,b,a))
if(s.b==null)s.b=c},
Lp(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g={}
g.a=g.b=null
q=i.a
p=q.j(0,b)
o=p==null?h:p.a
g.c=o
if(o!=null)return o
p=i.b
n=p.v(0,b)
if(n!=null){g=n.a
i.xH(b,g,n.b)
p.l(0,b,n)
return g}m=i.c.j(0,b)
if(m!=null){g=m.a
i.Hc(b,new A.xS(g,m.b,g.mt()),h)
return g}try{o=g.c=c.$0()
i.xH(b,o,h)
p=o}catch(l){s=A.ae(l)
r=A.au(l)
d.$2(s,r)
return h}g.d=!1
k=A.b6("pendingImage")
j=new A.dv(new A.a0n(g,i,b,!0,k),h,h)
k.b=new A.P4(p,j)
q.l(0,b,k.aD())
g.c.Z(0,j)
return g.c},
R(a,b){return this.a.j(0,b)!=null||this.b.j(0,b)!=null},
Sv(a){var s,r,q,p,o,n=this,m=n.b,l=A.n(m).h("b8<1>")
while(!0){if(!(n.f>104857600||m.a>1000))break
s=new A.b8(m,l)
r=s.ga4(s)
if(!r.q())A.K(A.bO())
q=r.gF(r)
p=m.j(0,q)
s=n.f
o=p.b
o.toString
n.f=s-o
p.m()
m.v(0,q)}}}
A.a0m.prototype={
$0(){return A.aAF(this.b,new A.a0l(this.a,this.c))},
$S:221}
A.a0l.prototype={
$0(){this.a.c.v(0,this.b)},
$S:0}
A.a0n.prototype={
$2(a,b){var s,r,q,p,o,n=this
if(a!=null){s=a.a
r=s.gbQ(s)*s.gbj(s)*4
s.m()}else r=null
s=n.a
q=s.c
p=new A.xS(q,r,q.mt())
q=n.b
o=n.c
q.xH(o,s.c,r)
if(n.d)q.Hc(o,p,s.a)
else p.m()
q.a.v(0,o)
if(!s.d){q=n.e.aD()
q.a.G(0,q.b)}s.d=!0},
$S:222}
A.Mk.prototype={
m(){$.bP.ax$.push(new A.abl(this))}}
A.abl.prototype={
$1(a){var s=this.a,r=s.c
if(r!=null)r.m()
s.c=null},
$S:2}
A.xS.prototype={}
A.qH.prototype={
RC(a,b,c){var s=new A.ads(this,b)
this.d=s
if(a.w)A.K(A.a5(u.V))
a.x.push(s)},
i(a){return"<optimized out>#"+A.bM(this)}}
A.ads.prototype={
$0(){var s,r,q
this.b.$0()
s=this.a
r=s.a
q=s.d
q===$&&A.b()
if(r.w)A.K(A.a5(u.V))
B.c.v(r.x,q)
s.D4()},
$S:0}
A.P4.prototype={}
A.oF.prototype={
k(a,b){var s=this
if(b==null)return!1
if(J.X(b)!==A.A(s))return!1
return b instanceof A.oF&&b.a==s.a&&b.b==s.b&&J.f(b.c,s.c)&&b.d==s.d&&J.f(b.e,s.e)&&b.f==s.f},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.e,s.f,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s,r=this,q=""+"ImageConfiguration(",p=r.a
if(p!=null){q+="bundle: "+p.i(0)
s=!0}else s=!1
p=r.b
if(p!=null){if(s)q+=", "
p=q+("devicePixelRatio: "+B.d.N(p,1))
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
A.dS.prototype={
W(a){var s=new A.a0z()
this.T3(a,new A.a0x(this,a,s),new A.a0y(this,a,s))
return s},
T3(a,b,c){var s,r,q,p,o,n={}
n.a=null
n.b=!1
s=new A.a0u(n,c)
r=null
try{r=this.tU(a)}catch(o){q=A.ae(o)
p=A.au(o)
s.$2(q,p)
return}r.aE(new A.a0t(n,this,b,s),t.H).fO(s)},
py(a,b,c,d){var s,r
if(b.a!=null){s=$.eS.fV$
s===$&&A.b()
s.Lp(0,c,new A.a0v(b),d)
return}s=$.eS.fV$
s===$&&A.b()
r=s.Lp(0,c,new A.a0w(this,c),d)
if(r!=null)b.C_(r)},
p8(a,b,c){throw A.c(A.O("Implement loadBuffer for faster image loading"))},
p9(a,b){return this.p8(0,a,$.eS.ga4i())},
i(a){return"ImageConfiguration()"}}
A.a0x.prototype={
$2(a,b){this.a.py(this.b,this.c,a,b)},
$S(){return A.n(this.a).h("~(dS.T,~(B,bL?))")}}
A.a0y.prototype={
$3(a,b,c){return this.Mu(a,b,c)},
Mu(a,b,c){var s=0,r=A.a2(t.H),q=this,p
var $async$$3=A.Y(function(d,e){if(d===1)return A.a_(e,r)
while(true)switch(s){case 0:s=2
return A.a4(null,$async$$3)
case 2:p=q.c
if(p.a==null)p.C_(new A.ac0(A.a([],t.fE),A.a([],t.b)))
p=p.a
p.toString
p.kQ(A.bo("while resolving an image"),b,null,!0,c)
return A.a0(null,r)}})
return A.a1($async$$3,r)},
$S(){return A.n(this.a).h("ab<~>(dS.T?,B,bL?)")}}
A.a0u.prototype={
Mt(a,b){var s=0,r=A.a2(t.H),q,p=this,o
var $async$$2=A.Y(function(c,d){if(c===1)return A.a_(d,r)
while(true)switch(s){case 0:o=p.a
if(o.b){s=1
break}p.b.$3(o.a,a,b)
o.b=!0
case 1:return A.a0(q,r)}})
return A.a1($async$$2,r)},
$2(a,b){return this.Mt(a,b)},
$S:223}
A.a0t.prototype={
$1(a){var s,r,q,p=this
p.a.a=a
try{p.c.$2(a,p.d)}catch(q){s=A.ae(q)
r=A.au(q)
p.d.$2(s,r)}},
$S(){return A.n(this.b).h("ay(dS.T)")}}
A.a0v.prototype={
$0(){var s=this.a.a
s.toString
return s},
$S:88}
A.a0w.prototype={
$0(){return this.a.p9(this.b,$.eS.ga4l())},
$S:88}
A.hy.prototype={
k(a,b){var s=this
if(b==null)return!1
if(J.X(b)!==A.A(s))return!1
return b instanceof A.hy&&b.a===s.a&&b.b===s.b&&b.c===s.c},
gt(a){return A.S(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"AssetBundleImageKey(bundle: "+this.a.i(0)+', name: "'+this.b+'", scale: '+A.h(this.c)+")"}}
A.B7.prototype={
p9(a,b){return A.anQ(this.lr(a,b,null),a.b,null,a.c)},
p8(a,b,c){return A.anQ(this.lr(b,null,c),b.b,null,b.c)},
lr(a,b,c){return this.WT(a,b,c)},
WT(a,b,c){var s=0,r=A.a2(t.gP),q,p=2,o,n,m,l,k,j,i
var $async$lr=A.Y(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:s=b!=null?3:4
break
case 3:n=null
p=6
s=9
return A.a4(a.a.tM(a.b),$async$lr)
case 9:n=e
p=2
s=8
break
case 6:p=5
j=o
if(A.ae(j) instanceof A.kc){k=$.eS.fV$
k===$&&A.b()
k.m2(a)
throw j}else throw j
s=8
break
case 5:s=2
break
case 8:if(n==null){k=$.eS.fV$
k===$&&A.b()
k.m2(a)
throw A.c(A.a5("Unable to read data"))}q=b.$1(n)
s=1
break
case 4:m=null
p=11
s=14
return A.a4(a.a.cU(0,a.b),$async$lr)
case 14:m=e
p=2
s=13
break
case 11:p=10
i=o
if(A.ae(i) instanceof A.kc){k=$.eS.fV$
k===$&&A.b()
k.m2(a)
throw i}else throw i
s=13
break
case 10:s=2
break
case 13:if(m==null){k=$.eS.fV$
k===$&&A.b()
k.m2(a)
throw A.c(A.a5("Unable to read data"))}c.toString
q=c.$1(A.cK(m.buffer,0,null))
s=1
break
case 1:return A.a0(q,r)
case 2:return A.a_(o,r)}})
return A.a1($async$lr,r)}}
A.ac0.prototype={}
A.o_.prototype={
gmu(){return this.a},
tU(a){var s,r={},q=a.a
if(q==null)q=$.Ts()
r.a=r.b=null
q.a4Z("AssetManifest.a3f9a259.json",A.aEc(),t.jd).aE(new A.TT(r,this,a,q),t.H).fO(new A.TU(r))
s=r.a
if(s!=null)return s
s=new A.a7($.a8,t.hv)
r.b=new A.aI(s,t.q8)
return s},
SF(a,b,c){var s,r,q,p=b.b
if(p==null||c==null||J.fM(c))return a
s=A.ake(t.i,t.N)
for(r=J.at(c);r.q();){q=r.gF(r)
s.l(0,this.FV(q),q)}p.toString
return this.TV(s,p)},
TV(a,b){var s,r,q
if(a.nq(b)){s=a.j(0,b)
s.toString
return s}r=a.a4L(b)
q=a.a2V(b)
if(r==null)return a.j(0,q)
if(q==null)return a.j(0,r)
if(b<2||b>(r+q)/2)return a.j(0,q)
else return a.j(0,r)},
FV(a){var s,r,q,p
if(a===this.a)return 1
s=A.l_(a,0,null)
r=s.gjC().length>1?s.gjC()[s.gjC().length-2]:""
q=$.arW().tl(r)
if(q!=null&&q.b.length-1>0){p=q.b[1]
p.toString
return A.ar3(p)}return 1},
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return b instanceof A.o_&&b.gmu()===this.gmu()&&!0},
gt(a){return A.S(this.gmu(),this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"AssetImage(bundle: "+A.h(this.b)+', name: "'+this.gmu()+'")'}}
A.TT.prototype={
$1(a){var s,r=this,q=r.b,p=q.gmu(),o=a==null?null:J.aM(a,q.gmu())
o=q.SF(p,r.c,o)
o.toString
s=new A.hy(r.d,o,q.FV(o))
q=r.a
p=q.b
if(p!=null)p.bR(0,s)
else q.a=new A.bp(s,t.rT)},
$S:225}
A.TU.prototype={
$2(a,b){this.a.b.dr(a,b)},
$S:31}
A.eN.prototype={
cP(a){return new A.eN(this.a.cP(0),this.b,this.c)},
i(a){var s=this.c
s=s!=null?s+" ":""
return s+this.a.i(0)+" @ "+A.ht(this.b)+"x"},
gt(a){return A.S(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(J.X(b)!==A.A(s))return!1
return b instanceof A.eN&&b.a===s.a&&b.b===s.b&&b.c==s.c}}
A.dv.prototype={
gt(a){return A.S(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(J.X(b)!==A.A(s))return!1
return b instanceof A.dv&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&J.f(b.c,s.c)},
a5o(a,b){return this.a.$2(a,b)}}
A.a0z.prototype={
C_(a){var s,r=this
r.a=a
s=r.b
if(s!=null){r.b=null
a.f=!0
B.c.Y(s,a.gnW(a))
r.a.f=!1}},
Z(a,b){var s=this.a
if(s!=null)return s.Z(0,b)
s=this.b;(s==null?this.b=A.a([],t.fE):s).push(b)},
G(a,b){var s,r=this.a
if(r!=null)return r.G(0,b)
for(s=0;r=this.b,s<r.length;++s)if(J.f(r[s],b)){r=this.b
r.toString
B.c.e8(r,s)
break}}}
A.a0A.prototype={
m(){var s=this.a;--s.r
s.qJ()
this.a=null}}
A.ki.prototype={
Z(a,b){var s,r,q,p,o,n,m,l=this
if(l.w)A.K(A.a5(u.V))
l.e=!0
l.a.push(b)
o=l.b
if(o!=null)try{o=o.cP(0)
n=l.f
b.a.$2(o,!n)}catch(m){s=A.ae(m)
r=A.au(m)
l.LF(A.bo("by a synchronously-called image listener"),s,r)}o=l.c
if(o!=null&&b.c!=null)try{n=b.c
n.toString
n.$2(o.a,o.b)}catch(s){q=A.ae(s)
p=A.au(s)
if(!J.f(q,l.c.a))A.e6(new A.bJ(q,p,"image resource service",A.bo("by a synchronously-called image error listener"),null,!1))}},
mt(){if(this.w)A.K(A.a5(u.V));++this.r
return new A.a0A(this)},
G(a,b){var s,r,q,p,o,n=this
if(n.w)A.K(A.a5(u.V))
for(s=n.a,r=0;r<s.length;++r)if(J.f(s[r],b)){B.c.e8(s,r)
break}if(s.length===0){s=n.x
q=A.a(s.slice(0),A.aj(s))
for(p=q.length,o=0;o<q.length;q.length===p||(0,A.P)(q),++o)q[o].$0()
B.c.a0(s)
n.qJ()}},
qJ(){var s,r=this
if(!r.e||r.w||r.a.length!==0||r.r!==0)return
s=r.b
if(s!=null)s.a.m()
r.b=null
r.w=!0},
C3(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.w)A.K(A.a5(u.V))
p=i.b
if(p!=null)p.a.m()
i.b=a
p=i.a
if(p.length===0)return
o=A.aA(p,!0,t.tg)
for(p=o.length,n=a.a,m=a.b,l=a.c,k=0;k<p;++k){s=o[k]
try{s.a5o(new A.eN(n.cP(0),m,l),!1)}catch(j){r=A.ae(j)
q=A.au(j)
i.LF(A.bo("by an image listener"),r,q)}}},
kQ(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i="image resource service"
this.c=new A.bJ(b,e,i,a,c,d)
o=this.a
n=t.pE
m=A.aA(new A.dk(new A.aC(o,new A.a0B(),A.aj(o).h("aC<1,~(B,bL?)?>")),n),!0,n.h("o.E"))
s=!1
for(o=m.length,l=0;l<o;++l){r=m[l]
try{r.$2(b,e)
s=!0}catch(k){q=A.ae(k)
p=A.au(k)
if(!J.f(q,b)){n=A.bo("when reporting an error to an image listener")
j=$.fL()
if(j!=null)j.$1(new A.bJ(q,p,i,n,null,!1))}}}if(!s){o=this.c
o.toString
A.e6(o)}},
LF(a,b,c){return this.kQ(a,b,null,!1,c)},
a6n(a){var s,r,q,p
if(this.w)A.K(A.a5(u.V))
s=this.a
if(s.length!==0){r=t.zG
q=A.aA(new A.dk(new A.aC(s,new A.a0C(),A.aj(s).h("aC<1,~(eM)?>")),r),!0,r.h("o.E"))
for(s=q.length,p=0;p<s;++p)q[p].$1(a)}}}
A.a0B.prototype={
$1(a){return a.c},
$S:228}
A.a0C.prototype={
$1(a){return a.b},
$S:229}
A.I0.prototype={
Rq(a,b,c,d,e){this.d=c
b.dR(this.gUT(),new A.a2u(this,d),t.H)},
UU(a){this.z=a
if(this.a.length!==0)this.lk()},
UL(a){var s,r,q,p=this
p.cx=!1
if(p.a.length===0)return
s=p.ay
if(s!=null){r=p.ax
r===$&&A.b()
r=a.a-r.a>=s.a}else r=!0
if(r){s=p.at
p.Eu(new A.eN(s.gfq(s).cP(0),p.Q,p.d))
p.ax=a
s=p.at
p.ay=s.gJe(s)
s=p.at
s.gfq(s).m()
p.at=null
q=B.f.hh(p.ch,p.z.gmj())
if(p.z.guj()===-1||q<=p.z.guj())p.lk()
return}s.toString
r=p.ax
r===$&&A.b()
p.CW=A.cb(new A.aP(B.d.b8((s.a-(a.a-r.a))*$.aqE)),new A.a2t(p))},
lk(){var s=0,r=A.a2(t.H),q,p=2,o,n=this,m,l,k,j,i
var $async$lk=A.Y(function(a,b){if(a===1){o=b
s=p}while(true)switch(s){case 0:j=n.at
if(j!=null)j.gfq(j).m()
n.at=null
p=4
s=7
return A.a4(n.z.pS(),$async$lk)
case 7:n.at=b
p=2
s=6
break
case 4:p=3
i=o
m=A.ae(i)
l=A.au(i)
n.kQ(A.bo("resolving an image frame"),m,n.as,!0,l)
s=1
break
s=6
break
case 3:s=2
break
case 6:if(n.z.gmj()===1){if(n.a.length===0){s=1
break}j=n.at
n.Eu(new A.eN(j.gfq(j).cP(0),n.Q,n.d))
j=n.at
j.gfq(j).m()
n.at=null
s=1
break}n.Go()
case 1:return A.a0(q,r)
case 2:return A.a_(o,r)}})
return A.a1($async$lk,r)},
Go(){if(this.cx)return
this.cx=!0
$.bP.q_(this.gUK())},
Eu(a){this.C3(a);++this.ch},
Z(a,b){var s,r=this
if(r.a.length===0){s=r.z
if(s!=null)s=r.b==null||s.gmj()>1
else s=!1}else s=!1
if(s)r.lk()
r.CD(0,b)},
G(a,b){var s,r=this
r.CE(0,b)
if(r.a.length===0){s=r.CW
if(s!=null)s.ah(0)
r.CW=null}},
qJ(){this.Oh()
if(this.w)this.y=null}}
A.a2u.prototype={
$2(a,b){this.a.kQ(A.bo("resolving an image codec"),a,this.b,!0,b)},
$S:31}
A.a2t.prototype={
$0(){this.a.Go()},
$S:0}
A.NY.prototype={}
A.NX.prototype={}
A.B_.prototype={}
A.km.prototype={
k(a,b){var s
if(b==null)return!1
if(b instanceof A.km)if(b.a===this.a)if(b.b==this.b)s=A.cS(b.f,this.f)
else s=!1
else s=!1
else s=!1
return s},
gt(a){return A.S(this.a,this.b,this.c,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"InlineSpanSemanticsInformation{text: "+this.a+", semanticsLabel: "+A.h(this.b)+", recognizer: "+A.h(this.c)+"}"}}
A.h2.prototype={
MQ(a){var s={}
s.a=null
this.aT(new A.a0M(s,a,new A.B_()))
return s.a},
M1(a){var s,r=new A.bw("")
this.Iy(r,!0,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
ab(a,b){var s={}
if(b<0)return null
s.a=null
this.aT(new A.a0L(s,b,new A.B_()))
return s.a},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.X(b)!==A.A(this))return!1
return b instanceof A.h2&&J.f(b.a,this.a)},
gt(a){return J.p(this.a)}}
A.a0M.prototype={
$1(a){var s=a.MR(this.b,this.c)
this.a.a=s
return s==null},
$S:40}
A.a0L.prototype={
$1(a){var s=a.a0Y(this.b,this.c)
this.a.a=s
return s==null},
$S:40}
A.dC.prototype={
aI(a,b){var s=this.a.aI(0,b)
return new A.dC(this.b.a_(0,b),s)},
c7(a,b){var s,r,q=this
if(a instanceof A.dC){s=A.az(a.a,q.a,b)
r=A.hz(a.b,q.b,b)
r.toString
return new A.dC(r,s)}if(a instanceof A.ds){s=A.az(a.a,q.a,b)
return new A.eb(q.b,1-b,a.b,s)}return q.la(a,b)},
c8(a,b){var s,r,q=this
if(a instanceof A.dC){s=A.az(q.a,a.a,b)
r=A.hz(q.b,a.b,b)
r.toString
return new A.dC(r,s)}if(a instanceof A.ds){s=A.az(q.a,a.a,b)
return new A.eb(q.b,b,a.b,s)}return q.lb(a,b)},
fB(a,b){var s=$.aq().cp()
s.eK(this.b.W(b).dA(a))
return s},
hM(a,b,c){var s,r,q,p,o=this.a
switch(o.c.a){case 0:break
case 1:s=this.b
if(o.b===0)a.d2(s.W(c).dA(b),o.hU())
else{r=$.aq().bg()
r.saf(0,o.a)
q=s.W(c).dA(b)
p=q.d6(-o.geA())
a.t5(q.d6(o.gCl()),p,r)}break}},
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return b instanceof A.dC&&b.a.k(0,this.a)&&b.b.k(0,this.b)},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"RoundedRectangleBorder("+this.a.i(0)+", "+this.b.i(0)+")"}}
A.eb.prototype={
aI(a,b){var s=this.a.aI(0,b)
return new A.eb(this.b.a_(0,b),b,this.d,s)},
c7(a,b){var s,r,q,p=this
if(a instanceof A.dC){s=A.az(a.a,p.a,b)
r=A.hz(a.b,p.b,b)
r.toString
return new A.eb(r,p.c*b,p.d,s)}if(a instanceof A.ds){s=A.az(a.a,p.a,b)
r=p.c
return new A.eb(p.b,r+(1-r)*(1-b),a.b,s)}if(a instanceof A.eb){s=A.az(a.a,p.a,b)
r=A.hz(a.b,p.b,b)
r.toString
q=A.T(a.c,p.c,b)
q.toString
return new A.eb(r,q,p.d,s)}return p.la(a,b)},
c8(a,b){var s,r,q,p=this
if(a instanceof A.dC){s=A.az(p.a,a.a,b)
r=A.hz(p.b,a.b,b)
r.toString
return new A.eb(r,p.c*(1-b),p.d,s)}if(a instanceof A.ds){s=A.az(p.a,a.a,b)
r=p.c
return new A.eb(p.b,r+(1-r)*b,a.b,s)}if(a instanceof A.eb){s=A.az(p.a,a.a,b)
r=A.hz(p.b,a.b,b)
r.toString
q=A.T(p.c,a.c,b)
q.toString
return new A.eb(r,q,p.d,s)}return p.lb(a,b)},
Gk(a){var s,r,q,p,o,n,m,l,k=this.c
if(k===0||a.c-a.a===a.d-a.b)return a
s=a.c
r=a.a
q=s-r
p=a.d
o=a.b
n=p-o
m=1-this.d
if(q<n){l=k*((n-q)/2)*m
return new A.C(r,o+l,s,p-l)}else{l=k*((q-n)/2)*m
return new A.C(r+l,o,s-l,p)}},
Dq(a,b){var s,r,q,p=this.b.W(b),o=this.c
if(o===0)return p
s=this.d
if(s!==0){r=a.c-a.a
q=a.d-a.b
s=0.5+s/2
if(r<q){o=A.o2(p,A.Bn(new A.bs(r/2,s*q/2)),o)
o.toString
return o}else{o=A.o2(p,A.Bn(new A.bs(s*r/2,q/2)),o)
o.toString
return o}}return A.o2(p,A.iL(a.gfE()/2),o)},
fB(a,b){var s=$.aq().cp(),r=this.Dq(a,b)
r.toString
s.eK(r.dA(this.Gk(a)))
return s},
hM(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=this.Dq(b,c)
s.toString
a.d2(s.dA(this.Gk(b)).d6(r.b*r.d/2),r.hU())
break}},
k(a,b){var s=this
if(b==null)return!1
if(J.X(b)!==A.A(s))return!1
return b instanceof A.eb&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c===s.c},
gt(a){return A.S(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r="RoundedRectangleBorder(",q=s.d
if(q!==0)return r+s.a.i(0)+", "+s.b.i(0)+", "+B.d.N(s.c*100,1)+u.T+B.d.N(q*100,1)+"% oval)"
return r+s.a.i(0)+", "+s.b.i(0)+", "+B.d.N(s.c*100,1)+"% of the way to being a CircleBorder)"}}
A.eu.prototype={
aI(a,b){return new A.eu(this.a.aI(0,b))},
c7(a,b){var s,r=this
if(a instanceof A.eu)return new A.eu(A.az(a.a,r.a,b))
if(a instanceof A.ds){s=A.az(a.a,r.a,b)
return new A.ed(1-b,a.b,s)}if(a instanceof A.dC){s=A.az(a.a,r.a,b)
return new A.ee(a.b,1-b,s)}return r.la(a,b)},
c8(a,b){var s,r=this
if(a instanceof A.eu)return new A.eu(A.az(r.a,a.a,b))
if(a instanceof A.ds){s=A.az(r.a,a.a,b)
return new A.ed(b,a.b,s)}if(a instanceof A.dC){s=A.az(r.a,a.a,b)
return new A.ee(a.b,b,s)}return r.lb(a,b)},
fB(a,b){var s=a.gfE()/2,r=$.aq().cp()
r.eK(A.ak1(a,new A.bs(s,s)))
return r},
hM(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=b.gfE()/2
a.d2(A.ak1(b,new A.bs(s,s)).d6(r.b*r.d/2),r.hU())
break}},
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return b instanceof A.eu&&b.a.k(0,this.a)},
gt(a){var s=this.a
return A.S(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"StadiumBorder("+this.a.i(0)+")"}}
A.ed.prototype={
aI(a,b){return new A.ed(b,this.c,this.a.aI(0,b))},
c7(a,b){var s,r,q,p=this
if(a instanceof A.eu)return new A.ed(p.b*b,p.c,A.az(a.a,p.a,b))
if(a instanceof A.ds){s=A.az(a.a,p.a,b)
r=p.b
return new A.ed(r+(1-r)*(1-b),a.b,s)}if(a instanceof A.ed){s=A.az(a.a,p.a,b)
r=A.T(a.b,p.b,b)
r.toString
q=A.T(a.c,p.c,b)
q.toString
return new A.ed(r,q,s)}return p.la(a,b)},
c8(a,b){var s,r,q,p=this
if(a instanceof A.eu)return new A.ed(p.b*(1-b),p.c,A.az(p.a,a.a,b))
if(a instanceof A.ds){s=A.az(p.a,a.a,b)
r=p.b
return new A.ed(r+(1-r)*b,a.b,s)}if(a instanceof A.ed){s=A.az(p.a,a.a,b)
r=A.T(p.b,a.b,b)
r.toString
q=A.T(p.c,a.c,b)
q.toString
return new A.ed(r,q,s)}return p.lb(a,b)},
GU(a){var s,r,q,p,o,n,m,l,k=this.b
if(k===0||a.c-a.a===a.d-a.b)return a
s=a.c
r=a.a
q=s-r
p=a.d
o=a.b
n=p-o
m=1-this.c
if(q<n){l=k*((n-q)/2)*m
return new A.C(r,o+l,s,p-l)}else{l=k*((q-n)/2)*m
return new A.C(r+l,o,s-l,p)}},
nM(a){var s,r,q,p=A.iL(a.gfE()/2),o=this.c
if(o!==0){s=a.c-a.a
r=a.d-a.b
q=this.b
o=0.5+o/2
if(s<r){o=A.o2(p,A.Bn(new A.bs(s/2,o*r/2)),q)
o.toString
return o}else{o=A.o2(p,A.Bn(new A.bs(o*s/2,r/2)),q)
o.toString
return o}}return p},
fB(a,b){var s=$.aq().cp()
s.eK(this.nM(a).dA(this.GU(a)))
return s},
hM(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.d2(this.nM(b).dA(this.GU(b)).d6(s.b*s.d/2),s.hU())
break}},
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return b instanceof A.ed&&b.a.k(0,this.a)&&b.b===this.b},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r=s.c
if(r!==0)return"StadiumBorder("+s.a.i(0)+", "+B.d.N(s.b*100,1)+u.T+B.d.N(r*100,1)+"% oval)"
return"StadiumBorder("+s.a.i(0)+", "+B.d.N(s.b*100,1)+"% of the way to being a CircleBorder)"}}
A.ee.prototype={
aI(a,b){var s=this.a.aI(0,b)
return new A.ee(this.b.a_(0,b),b,s)},
c7(a,b){var s,r,q,p=this
if(a instanceof A.eu)return new A.ee(p.b,p.c*b,A.az(a.a,p.a,b))
if(a instanceof A.dC){s=p.c
return new A.ee(p.b,s+(1-s)*(1-b),A.az(a.a,p.a,b))}if(a instanceof A.ee){s=A.az(a.a,p.a,b)
r=A.hz(a.b,p.b,b)
r.toString
q=A.T(a.c,p.c,b)
q.toString
return new A.ee(r,q,s)}return p.la(a,b)},
c8(a,b){var s,r,q,p=this
if(a instanceof A.eu)return new A.ee(p.b,p.c*(1-b),A.az(p.a,a.a,b))
if(a instanceof A.dC){s=p.c
return new A.ee(p.b,s+(1-s)*b,A.az(p.a,a.a,b))}if(a instanceof A.ee){s=A.az(p.a,a.a,b)
r=A.hz(p.b,a.b,b)
r.toString
q=A.T(p.c,a.c,b)
q.toString
return new A.ee(r,q,s)}return p.lb(a,b)},
nM(a){var s=a.gfE()/2
s=A.hz(this.b,A.Bn(new A.bs(s,s)),1-this.c)
s.toString
return s},
fB(a,b){var s=$.aq().cp()
s.eK(this.nM(a).W(b).dA(a))
return s},
hM(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.d2(this.nM(b).W(c).dA(b).d6(s.b*s.d/2),s.hU())
break}},
k(a,b){var s=this
if(b==null)return!1
if(J.X(b)!==A.A(s))return!1
return b instanceof A.ee&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c===s.c},
gt(a){return A.S(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"StadiumBorder("+this.a.i(0)+", "+this.b.i(0)+", "+B.d.N(this.c*100,1)+"% of the way to being a RoundedRectangleBorder)"}}
A.nf.prototype={
E(){return"TextOverflow."+this.b}}
A.mD.prototype={
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(b instanceof A.mD)if(b.a.k(0,r.a))if(b.b===r.b)s=b.c==r.c
else s=!1
else s=!1
else s=!1
return s},
gt(a){var s=this
return A.S(s.a,s.b,s.d,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"PlaceholderDimensions("+this.a.i(0)+", "+A.h(this.d)+")"}}
A.xp.prototype={
E(){return"TextWidthBasis."+this.b}}
A.abm.prototype={}
A.L9.prototype={
a8(){var s=this,r=s.a
if(r!=null)r.m()
s.dy=s.dx=s.fr=s.a=null},
scq(a,b){var s,r,q=this
if(J.f(q.d,b))return
s=q.d
s=s==null?null:s.a
if(!J.f(s,b.a)){s=q.CW
if(s!=null)s.m()
q.CW=null}s=q.d
s=s==null?null:s.aF(0,b)
r=s==null?B.cG:s
q.d=b
q.e=null
s=r.a
if(s>=3)q.a8()
else if(s>=2)q.b=!0},
gu8(){var s=this.e
if(s==null){s=this.d
s=s==null?null:s.M1(!1)
this.e=s}return s==null?"":s},
sB3(a,b){if(this.f===b)return
this.f=b
this.a8()},
sbH(a){var s,r=this
if(r.r===a)return
r.r=a
r.a8()
s=r.CW
if(s!=null)s.m()
r.CW=null},
sB4(a){var s,r=this
if(r.w===a)return
r.w=a
r.a8()
s=r.CW
if(s!=null)s.m()
r.CW=null},
sa2q(a){if(this.x==a)return
this.x=a
this.a8()},
szU(a,b){if(J.f(this.y,b))return
this.y=b
this.a8()},
szZ(a){if(this.z==a)return
this.z=a
this.a8()},
sB5(a){if(this.as===a)return
this.as=a
this.a8()},
uV(a){if(a==null||a.length===0||A.cS(a,this.ch))return
this.ch=a
this.a8()},
Ef(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.d.a
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
o=l==null?f:new A.L6(l)
k=e.w
j=e.x
i=e.d
h=e.r
if(h==null)h=14
e=e.as
e=A.ajX(n,i,h*q,j,k,e,m,p,f,s,r,o)}if(e==null){e=g.f
s=g.r
if(s==null)s=a
r=g.w
q=g.z
p=g.at
p=A.ajX(g.x,f,14*r,f,f,f,g.y,q,f,e,s,p)
e=p}return e},
T8(){return this.Ef(null)},
gua(){var s,r,q=this,p=q.CW
if(p==null){p=q.Ef(B.X)
s=$.aq().yz(p)
p=q.d
if(p==null)r=null
else{p=p.a
r=p==null?null:p.BM(q.w)}if(r!=null)s.AN(r)
s.rp(" ")
p=s.ba()
p.iz(B.TD)
q.CW=p}return p.gbQ(p)},
gbj(a){var s=this.as,r=this.a
s=s===B.ZB?r.gKL():r.gbj(r)
return Math.ceil(s)},
eO(a){var s
switch(a.a){case 0:s=this.a
return s.grt(s)
case 1:s=this.a
return s.ga47(s)}},
Ee(){var s,r,q=this,p=q.d
if(p==null)throw A.c(A.a5("TextPainter.text must be set to a non-null value before using the TextPainter."))
s=q.T8()
r=$.aq().yz(s)
s=q.w
p.Ii(r,q.ch,s)
q.ay=r.ga5F()
q.a=r.ba()
q.b=!1},
Fq(a,b){var s,r,q=this
q.a.iz(new A.kD(b))
if(a!==b){switch(q.as.a){case 1:s=Math.ceil(q.a.gKL())
break
case 0:s=Math.ceil(q.a.ga55())
break
default:s=null}s=A.H(s,a,b)
r=q.a
if(s!==Math.ceil(r.gbj(r)))q.a.iz(new A.kD(s))}},
zR(a,b){var s=this,r=s.a==null
if(!r&&b===s.cx&&a===s.cy)return
if(s.b||r)s.Ee()
s.cx=b
s.cy=a
s.dy=s.dx=s.fr=null
s.Fq(b,a)
s.ax=s.a.uy()},
a4N(){return this.zR(1/0,0)},
aH(a,b){var s,r=this,q=r.cx,p=r.cy
if(r.a==null||q==null||p==null)throw A.c(A.a5("TextPainter.paint called when text geometry was not yet calculated.\nPlease call layout() before paint() to position the text before painting it."))
if(r.b){r.Ee()
r.Fq(q,p)}s=r.a
s.toString
a.kt(s,b)},
EN(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.gu8().length
if(g===0||a>g)return null
s=B.b.ab(h.gu8(),Math.max(0,a-1))
r=(s&63488)===55296||h.d.ab(0,a)===8205||s===8207||s===8206
q=r?2:1
p=A.a([],t.px)
for(o=-g,n=!r,m=s===10;p.length===0;){l=a-q
p=h.a.Bx(l,a,B.mo)
if(p.length===0){if(n&&m)break
if(l<o)break
q*=2
continue}k=B.c.gJ(p)
if(m){o=k.d
return new A.C(h.gw8().a,o,h.gw8().a,o+o-k.b)}o=k.e
j=o===B.t?k.c:k.a
i=o===B.X?j-(b.c-b.a):j
o=h.a
o=A.H(i,0,o.gbj(o))
n=h.a
return new A.C(o,k.b,A.H(i,0,n.gbj(n)),k.d)}return null},
EM(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.gu8().length
if(h===0||a<0)return null
s=B.b.ab(i.gu8(),Math.min(a,h-1))
r=(s&63488)===55296||s===8205||s===8207||s===8206
q=r?2:1
p=A.a([],t.px)
for(o=h<<1>>>0,n=!r;p.length===0;){m=a+q
p=i.a.Bx(a,m,B.mo)
if(p.length===0){if(n)break
if(m>=o)break
q*=2
continue}l=B.c.gS(p)
o=l.e
k=o===B.t?l.a:l.c
j=o===B.X?k-(b.c-b.a):k
o=i.a
o=A.H(j,0,o.gbj(o))
n=i.a
return new A.C(o,l.b,A.H(j,0,n.gbj(n)),l.d)}return null},
gw8(){var s=this
switch(s.f.a){case 0:return B.j
case 1:return new A.t(s.gbj(s),0)
case 2:return new A.t(s.gbj(s)/2,0)
case 3:case 4:switch(s.r.a){case 0:return new A.t(s.gbj(s),0)
case 1:return B.j}break
case 5:switch(s.r.a){case 0:return B.j
case 1:return new A.t(s.gbj(s),0)}break}},
E4(a,b){var s,r,q,p,o=this
if(a.k(0,o.dx)&&b.k(0,o.dy))return
s=a.a
switch(a.b.a){case 0:r=o.EN(s,b)
if(r==null)r=o.EM(s,b)
break
case 1:r=o.EM(s,b)
if(r==null)r=o.EN(s,b)
break
default:r=null}q=r!=null
p=q?new A.t(r.a,r.b):o.gw8()
o.db=new A.abm(p,q?r.d-r.b:null)
o.dx=a
o.dy=b},
m(){var s=this,r=s.CW
if(r!=null)r.m()
s.CW=null
r=s.a
if(r!=null)r.m()
s.d=s.a=null}}
A.xo.prototype={
gIR(a){return this.e},
gBq(){return!0},
is(a,b){t.Y.b(a)},
Ii(a,b,c){var s,r,q,p,o=this.a,n=o!=null
if(n)a.AN(o.BM(c))
o=this.b
if(o!=null)try{a.rp(o)}catch(q){o=A.ae(q)
if(o instanceof A.fN){s=o
r=A.au(q)
A.e6(new A.bJ(s,r,"painting library",A.bo("while building a TextSpan"),null,!1))
a.rp("\ufffd")}else throw q}o=this.c
if(o!=null)for(p=0;p<1;++p)o[p].Ii(a,b,c)
if(n)a.hP()},
aT(a){var s,r
if(this.b!=null)if(!a.$1(this))return!1
s=this.c
if(s!=null)for(r=0;r<1;++r)if(!s[r].aT(a))return!1
return!0},
MR(a,b){var s,r,q,p,o=this.b
if(o==null)return null
s=a.b
r=a.a
q=b.a
p=q+o.length
if(!(q===r&&s===B.C))if(!(q<r&&r<p))o=p===r&&s===B.M
else o=!0
else o=!0
if(o)return this
b.a=p
return null},
Iy(a,b,c){var s,r=this.b
if(r!=null)a.a+=r
r=this.c
if(r!=null)for(s=0;s<1;++s)r[s].Iy(a,!0,c)},
Ix(a,b,c){var s,r,q=this.b
if(q!=null){s=A.a([],t.ve)
a.push(A.anq(q,null,null,s))}q=this.c
if(q!=null)for(r=0;r<1;++r)q[r].Ix(a,b,!1)},
a1c(a){return this.Ix(a,null,!1)},
a0Y(a,b){var s,r,q,p=this.b
if(p==null)return null
s=b.a
r=a-s
q=p.length
if(r<q)return B.b.ab(p,r)
b.a=s+q
return null},
aF(a,b){var s,r,q,p,o,n=this
if(n===b)return B.dL
if(A.A(b)!==A.A(n))return B.cG
if(b.b==n.b){s=n.c==null?null:1
s=s!=(b.c==null?null:1)||n.a==null!==(b.a==null)}else s=!0
if(s)return B.cG
s=n.a
if(s!=null){r=b.a
r.toString
q=s.aF(0,r)
p=q.a>0?q:B.dL
if(p===B.cG)return p}else p=B.dL
s=n.c
if(s!=null)for(r=b.c,o=0;o<1;++o){q=s[o].aF(0,r[o])
if(q.a>p.a)p=q
if(p===B.cG)return p}return p},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.A(s))return!1
if(!s.Ok(0,b))return!1
return b instanceof A.xo&&b.b==s.b&&s.e.k(0,b.e)&&A.cS(b.c,s.c)},
gt(a){var s=this,r=null,q=A.h2.prototype.gt.call(s,s),p=s.c
p=p==null?r:A.df(p)
return A.S(q,s.b,r,r,r,r,s.e,p,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
c_(){return"TextSpan"},
$iao:1,
$ij5:1,
gAm(){return null},
gAn(){return null}}
A.r.prototype={
gmi(){return this.e},
glH(a){return this.d},
og(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=b9==null?a.a:b9,a1=a.ay
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
c=b0==null?a.glH(a):b0
b=b1==null?a.e:b1
return A.bY(r,q,s,null,g,f,e,d,c,b,a.fr,p,a.x,h,o,a1,k,a0,j,n,a.ax,a.fy,a.f,i,l,m)},
hz(a){return this.og(null,null,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
a1u(a){return this.og(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null)},
a1E(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5){return this.og(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,null,r,s,a0,a1,a2,a3,a4,a5)},
IK(a,b){return this.og(null,null,a,null,null,null,null,null,null,null,null,b,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
IF(a){return this.og(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null,null,null)},
c4(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
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
a1=a4.glH(a4)
a2=a4.e
a3=a4.f
return this.a1E(g,r,s,null,c,b,a,a0,a1,a2,e,q,o,d,p,h,k,j,n,i,a4.fy,a3,f,l,m)},
BM(a){var s,r,q=this,p=q.gmi(),o=q.r
o=o==null?null:o*a
s=q.ch
if(s==null){s=q.c
if(s!=null){r=$.aq().bg()
r.saf(0,s)
s=r}else s=null}return A.aoS(s,q.b,q.CW,q.cx,q.cy,q.db,q.d,p,q.fr,o,q.x,q.fx,q.w,q.ay,q.as,q.at,q.y,q.ax,q.dy,q.Q,q.z)},
aF(a,b){var s=this
if(s===b)return B.dL
if(s.a!==b.a||s.d!=b.d||s.r!=b.r||s.w!=b.w||s.y!=b.y||s.z!=b.z||s.Q!=b.Q||s.as!=b.as||s.at!=b.at||s.ay!=b.ay||s.ch!=b.ch||!A.cS(s.dy,b.dy)||!A.cS(s.fr,b.fr)||!A.cS(s.fx,b.fx)||!A.cS(s.gmi(),b.gmi())||!1)return B.cG
if(!J.f(s.b,b.b)||!J.f(s.c,b.c)||!J.f(s.CW,b.CW)||!J.f(s.cx,b.cx)||s.cy!=b.cy||s.db!=b.db)return B.TW
return B.dL},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.X(b)!==A.A(r))return!1
if(b instanceof A.r)if(b.a===r.a)if(J.f(b.b,r.b))if(J.f(b.c,r.c))if(b.r==r.r)if(b.w==r.w)if(b.y==r.y)if(b.z==r.z)if(b.Q==r.Q)if(b.as==r.as)if(b.at==r.at)if(b.ay==r.ay)if(b.ch==r.ch)if(A.cS(b.dy,r.dy))if(A.cS(b.fr,r.fr))if(A.cS(b.fx,r.fx))if(J.f(b.CW,r.CW))if(J.f(b.cx,r.cx))if(b.cy==r.cy)if(b.db==r.db)if(b.d==r.d)if(A.cS(b.gmi(),r.gmi()))s=!0
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
gt(a){var s,r=this,q=null,p=r.gmi(),o=p==null?q:A.df(p),n=A.S(r.cy,r.db,r.d,o,r.f,r.fy,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a),m=r.dy,l=r.fx
o=m==null?q:A.df(m)
s=l==null?q:A.df(l)
return A.S(r.a,r.b,r.c,r.r,r.w,r.x,r.y,r.z,r.Q,r.as,r.at,r.ax,r.ay,r.ch,o,q,s,r.CW,r.cx,n)},
c_(){return"TextStyle"}}
A.Rg.prototype={}
A.Fa.prototype={
Rm(a,b,c,d,e){var s=this
s.r=A.aqn(new A.ZD(s),s.gz3(s),0,10,0)},
cW(a,b){var s,r,q=this
if(b>q.r)return q.gtg()
s=q.e
r=q.c
return q.d+s*Math.pow(q.b,b)/r-s/r-q.f/2*b*b},
dH(a,b){var s=this
if(b>s.r)return 0
return s.e*Math.pow(s.b,b)-s.f*b},
gtg(){var s=this
if(s.f===0)return s.d-s.e/s.c
return s.cW(0,s.r)},
LX(a){var s,r=this,q=r.d
if(a===q)return 0
s=r.e
if(s!==0)if(s>0)q=a<q||a>r.gtg()
else q=a>q||a<r.gtg()
else q=!0
if(q)return 1/0
return A.aqn(r.gz3(r),r.ga7i(r),0,10,a)},
jr(a){return Math.abs(this.dH(0,a))<this.a.c},
i(a){return"FrictionSimulation(c\u2093: "+B.d.N(this.b,1)+", x\u2080: "+B.d.N(this.d,1)+", dx\u2080: "+B.d.N(this.e,1)+")"}}
A.ZD.prototype={
$1(a){var s=this.a
return s.e*Math.pow(s.b,a)*s.c-s.f},
$S:74}
A.a6P.prototype={
i(a){return"Simulation"}}
A.a8J.prototype={
i(a){return"SpringDescription(mass: "+B.d.N(this.a,1)+", stiffness: "+B.f.N(this.b,1)+", damping: "+B.d.N(this.c,1)+")"}}
A.pM.prototype={
E(){return"SpringType."+this.b}}
A.KL.prototype={
cW(a,b){return this.b+this.c.cW(0,b)},
dH(a,b){return this.c.dH(0,b)},
jr(a){var s=this.c
return A.AL(s.cW(0,a),0,this.a.a)&&A.AL(s.dH(0,a),0,this.a.c)},
i(a){var s=this.c
return"SpringSimulation(end: "+B.d.N(this.b,1)+", "+s.gda(s).i(0)+")"}}
A.kN.prototype={
cW(a,b){return this.jr(b)?this.b:this.PW(0,b)}}
A.abB.prototype={
cW(a,b){return(this.b+this.c*b)*Math.pow(2.718281828459045,this.a*b)},
dH(a,b){var s=this.a,r=Math.pow(2.718281828459045,s*b),q=this.c
return s*(this.b+q*b)*r+q*r},
gda(a){return B.Vo}}
A.aef.prototype={
cW(a,b){var s=this
return s.c*Math.pow(2.718281828459045,s.a*b)+s.d*Math.pow(2.718281828459045,s.b*b)},
dH(a,b){var s=this,r=s.a,q=s.b
return s.c*r*Math.pow(2.718281828459045,r*b)+s.d*q*Math.pow(2.718281828459045,q*b)},
gda(a){return B.Vq}}
A.afS.prototype={
cW(a,b){var s=this,r=s.a*b
return Math.pow(2.718281828459045,s.b*b)*(s.c*Math.cos(r)+s.d*Math.sin(r))},
dH(a,b){var s,r=this,q=r.b,p=Math.pow(2.718281828459045,q*b),o=r.a,n=o*b,m=Math.cos(n),l=Math.sin(n)
n=r.d
s=r.c
return p*(n*o*m-s*o*l)+q*p*(n*l+s*m)},
gda(a){return B.Vp}}
A.Lj.prototype={
i(a){return"Tolerance(distance: \xb1"+A.h(this.a)+", time: \xb10.001, velocity: \xb1"+A.h(this.c)+")"}}
A.po.prototype={
zq(){var s=this,r=s.ry$
r===$&&A.b()
r=r.e
r.toString
r.sys(s.IP())
if(s.ry$.e.u$!=null)s.N_()},
zw(){},
zs(){},
IP(){var s,r=$.cq(),q=r.w
if(q==null){s=self.window.devicePixelRatio
q=s===0?1:s}return new A.LC(r.gkM().cX(0,q),q)},
W6(){var s,r=this
if($.aO().a.c){if(r.to$==null){s=r.ry$
s===$&&A.b()
r.to$=s.Jp()}}else{s=r.to$
if(s!=null)s.m()
r.to$=null}},
No(a){var s,r=this
if(a){if(r.to$==null){s=r.ry$
s===$&&A.b()
r.to$=s.Jp()}}else{s=r.to$
if(s!=null)s.m()
r.to$=null}},
Wp(a){B.Tl.nx("first-frame",null,!1,t.H)},
W4(a,b,c){var s=this.ry$
s===$&&A.b()
s=s.as
if(s!=null)s.a5D(a,b,null)},
W8(){var s,r=this.ry$
r===$&&A.b()
r=r.e
r.toString
s=t.W
s.a(A.L.prototype.gbs.call(r)).ay.C(0,r)
s.a(A.L.prototype.gbs.call(r)).mJ()},
Wc(a){var s=this.ry$
s===$&&A.b()
s.e.toString
s=$.dG;(s==null?$.dG=A.k9():s).a71(a)},
Wa(){var s=this.ry$
s===$&&A.b()
s.e.lR()},
VB(a){this.z2()
this.Z7()},
Z7(){$.bP.ax$.push(new A.a4Z(this))},
I2(){--this.x2$
if(!this.xr$)this.uL()},
z2(){var s=this,r=s.ry$
r===$&&A.b()
r.a2Y()
s.ry$.a2X()
s.ry$.a2Z()
if(s.xr$||s.x2$===0){s.ry$.e.a18()
s.ry$.a3_()
s.xr$=!0}},
$iao:1,
$idE:1}
A.a4Z.prototype={
$1(a){var s=this.a,r=s.rx$
r.toString
s=s.ry$
s===$&&A.b()
r.a6Z(s.e.ga44())},
$S:2}
A.aQ.prototype={
yw(a,b,c,d){var s=this,r=d==null?s.a:d,q=b==null?s.b:b,p=c==null?s.c:c
return new A.aQ(r,q,p,a==null?s.d:a)},
a1B(a,b){return this.yw(null,null,a,b)},
IH(a){return this.yw(a,null,null,null)},
a1v(a){return this.yw(null,a,null,null)},
IV(a){var s=this,r=a.gcn(),q=a.gb6(a)+a.gb9(a),p=Math.max(0,s.a-r),o=Math.max(0,s.c-q)
return new A.aQ(p,Math.max(p,s.b-r),o,Math.max(o,s.d-q))},
oE(a){var s=this,r=a.a,q=a.b,p=a.c,o=a.d
return new A.aQ(A.H(s.a,r,q),A.H(s.b,r,q),A.H(s.c,p,o),A.H(s.d,p,o))},
B8(a,b){var s,r,q=this,p=b==null,o=q.a,n=p?o:A.H(b,o,q.b),m=q.b
p=p?m:A.H(b,o,m)
o=a==null
m=q.c
s=o?m:A.H(a,m,q.d)
r=q.d
return new A.aQ(n,p,s,o?r:A.H(a,m,r))},
un(a){return this.B8(a,null)},
B7(a){return this.B8(null,a)},
by(a){var s=this
return new A.a6(A.H(a.a,s.a,s.b),A.H(a.b,s.c,s.d))},
of(a){var s,r,q,p,o,n=this,m=n.a,l=n.b
if(m>=l&&n.c>=n.d)return new A.a6(A.H(0,m,l),A.H(0,n.c,n.d))
s=a.a
r=a.b
q=s/r
if(s>l){r=l/q
s=l}p=n.d
if(r>p){s=p*q
r=p}if(s<m){r=m/q
s=m}o=n.c
if(r<o){s=o*q
r=o}return new A.a6(A.H(s,m,l),A.H(r,o,p))},
gKy(){var s=this
return s.a>=s.b&&s.c>=s.d},
a_(a,b){var s=this
return new A.aQ(s.a*b,s.b*b,s.c*b,s.d*b)},
cX(a,b){var s=this
return new A.aQ(s.a/b,s.b/b,s.c/b,s.d/b)},
ga4A(){var s=this,r=s.a
if(r>=0)if(r<=s.b){r=s.c
r=r>=0&&r<=s.d}else r=!1
else r=!1
return r},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.A(s))return!1
return b instanceof A.aQ&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s,r=this,q=r.ga4A()?"":"; NOT NORMALIZED",p=r.a
if(p===1/0&&r.c===1/0)return"BoxConstraints(biggest"+q+")"
if(p===0&&r.b===1/0&&r.c===0&&r.d===1/0)return"BoxConstraints(unconstrained"+q+")"
s=new A.Uj()
return"BoxConstraints("+s.$3(p,r.b,"w")+", "+s.$3(r.c,r.d,"h")+q+")"}}
A.Uj.prototype={
$3(a,b,c){if(a===b)return c+"="+B.d.N(a,1)
return B.d.N(a,1)+"<="+c+"<="+B.d.N(b,1)},
$S:235}
A.hA.prototype={
y7(a,b,c){if(c!=null){c=A.HQ(A.ajZ(c))
if(c==null)return!1}return this.I0(a,b,c)},
nY(a,b,c){var s,r=b==null,q=r?c:c.aa(0,b)
r=!r
if(r)this.c.push(new A.qO(new A.t(-b.a,-b.b)))
s=a.$2(this,q)
if(r)this.u9()
return s},
I0(a,b,c){var s,r=c==null,q=r?b:A.cw(c,b)
r=!r
if(r)this.c.push(new A.yG(c))
s=a.$2(this,q)
if(r)this.u9()
return s},
I_(a,b,c){var s,r=this
if(b!=null)r.c.push(new A.qO(new A.t(-b.a,-b.b)))
else{c.toString
c=A.HQ(A.ajZ(c))
c.toString
r.c.push(new A.yG(c))}s=a.$1(r)
r.u9()
return s},
a09(a,b){return this.I_(a,null,b)},
a08(a,b){return this.I_(a,b,null)}}
A.o5.prototype={
i(a){return"<optimized out>#"+A.bM(this.a)+"@"+this.c.i(0)}}
A.eC.prototype={
i(a){return"offset="+this.a.i(0)}}
A.t4.prototype={}
A.F.prototype={
ex(a){if(!(a.e instanceof A.eC))a.e=new A.eC(B.j)},
h8(a){var s,r=this.k1
if(r==null)r=this.k1=A.y(t.k,t.DB)
s=r.bD(0,a,new A.a4r(this,a))
return s},
cc(a){return B.R},
gjR(){var s=this.k3
return new A.C(0,0,0+s.a,0+s.b)},
uC(a,b){var s=null
try{s=this.jM(a)}finally{}if(s==null&&!b)return this.k3.b
return s},
MB(a){return this.uC(a,!1)},
jM(a){var s=this,r=s.k4
if(r==null)r=s.k4=A.y(t.E9,t.u6)
r.bD(0,a,new A.a4q(s,a))
return s.k4.j(0,a)},
eO(a){return null},
ga1(){return t.k.a(A.z.prototype.ga1.call(this))},
SI(){var s,r=this,q=r.k4,p=q==null
if(!(!p&&q.a!==0)){s=r.id
if(!(s!=null&&s.a!==0)){s=r.k1
s=s!=null&&s.a!==0}else s=!0}else s=!0
if(s){if(!p)q.a0(0)
q=r.id
if(q!=null)q.a0(0)
q=r.k1
if(q!=null)q.a0(0)
return!0}return!1},
a8(){var s=this
if(s.SI()&&s.c instanceof A.z){s.tP()
return}s.Pf()},
cu(a,b){var s,r=this
if(r.k3!=null)if(!a.k(0,t.k.a(A.z.prototype.ga1.call(r)))){s=r.k4
s=s!=null&&s.a!==0}else s=!1
else s=!1
if(s){s=r.k4
if(s!=null)s.a0(0)}r.Pe(a,b)},
iz(a){return this.cu(a,!1)},
pp(){this.k3=this.cc(t.k.a(A.z.prototype.ga1.call(this)))},
bG(){},
bX(a,b){var s=this
if(s.k3.B(0,b))if(s.cS(a,b)||s.jo(b)){a.C(0,new A.o5(b,s))
return!0}return!1},
jo(a){return!1},
cS(a,b){return!1},
dn(a,b){var s,r=a.e
r.toString
s=t.Ch.a(r).a
b.aB(0,s.a,s.b)},
kZ(a){var s,r,q,p,o,n=this.bw(0,null)
if(n.hy(n)===0)return B.j
s=new A.fC(new Float64Array(3))
s.fD(0,0,1)
r=new A.fC(new Float64Array(3))
r.fD(0,0,0)
q=n.iB(r)
r=new A.fC(new Float64Array(3))
r.fD(0,0,1)
p=n.iB(r).aa(0,q)
r=new A.fC(new Float64Array(3))
r.fD(a.a,a.b,0)
o=n.iB(r)
r=o.aa(0,p.BV(s.J7(o)/s.J7(p))).a
return new A.t(r[0],r[1])},
ghN(){var s=this.k3
return new A.C(0,0,0+s.a,0+s.b)},
is(a,b){this.Pd(a,b)}}
A.a4r.prototype={
$0(){return this.a.cc(this.b)},
$S:236}
A.a4q.prototype={
$0(){return this.a.eO(this.b)},
$S:237}
A.cL.prototype={
a28(a){var s,r,q,p=this.av$
for(s=A.n(this).h("cL.1?");p!=null;){r=s.a(p.e)
q=p.jM(a)
if(q!=null)return q+r.a.b
p=r.al$}return null},
IU(a){var s,r,q,p,o=this.av$
for(s=A.n(this).h("cL.1"),r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.jM(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.al$}return r},
yG(a,b){var s,r,q={},p=q.a=this.d3$
for(s=A.n(this).h("cL.1");p!=null;p=r){p=p.e
p.toString
s.a(p)
if(a.nY(new A.a4p(q,b,p),p.a,b))return!0
r=p.bW$
q.a=r}return!1},
om(a,b){var s,r,q,p,o,n=this.av$
for(s=A.n(this).h("cL.1"),r=b.a,q=b.b;n!=null;){p=n.e
p.toString
s.a(p)
o=p.a
a.f1(n,new A.t(o.a+r,o.b+q))
n=p.al$}}}
A.a4p.prototype={
$2(a,b){return this.a.a.bX(a,b)},
$S:15}
A.xY.prototype={
ag(a){this.vc(0)}}
A.fj.prototype={
i(a){return this.q8(0)+"; id="+A.h(this.e)}}
A.a2q.prototype={
dN(a,b){var s,r=this.b.j(0,a)
r.cu(b,!0)
s=r.k3
s.toString
return s},
e7(a,b){var s=this.b.j(0,a).e
s.toString
t.DU.a(s).a=b},
Sp(a,b){var s,r,q,p,o,n,m=this,l=m.b
try{m.b=A.y(t.K,t.x)
for(r=t.DU,q=b;q!=null;q=n){p=q.e
p.toString
s=r.a(p)
p=m.b
p.toString
o=s.e
o.toString
p.l(0,o,q)
n=s.al$}m.u7(a)}finally{m.b=l}},
i(a){return"MultiChildLayoutDelegate"}}
A.Jr.prototype={
ex(a){if(!(a.e instanceof A.fj))a.e=new A.fj(null,null,B.j)},
syJ(a){var s=this,r=s.L
if(r===a)return
if(A.A(a)!==A.A(r)||a.n_(r))s.a8()
s.L=a
s.b!=null},
an(a){this.Qf(a)},
ag(a){this.Qg(0)},
cc(a){return a.by(new A.a6(A.H(1/0,a.a,a.b),A.H(1/0,a.c,a.d)))},
bG(){var s=this,r=t.k.a(A.z.prototype.ga1.call(s))
r=r.by(new A.a6(A.H(1/0,r.a,r.b),A.H(1/0,r.c,r.d)))
s.k3=r
s.L.Sp(r,s.av$)},
aH(a,b){this.om(a,b)},
cS(a,b){return this.yG(a,b)}}
A.z3.prototype={
an(a){var s,r,q
this.eB(a)
s=this.av$
for(r=t.DU;s!=null;){s.an(a)
q=s.e
q.toString
s=r.a(q).al$}},
ag(a){var s,r,q
this.dU(0)
s=this.av$
for(r=t.DU;s!=null;){s.ag(0)
q=s.e
q.toString
s=r.a(q).al$}}}
A.PU.prototype={}
A.DC.prototype={
Z(a,b){var s=this.a
return s==null?null:s.Z(0,b)},
G(a,b){var s=this.a
return s==null?null:s.G(0,b)},
gBY(){return null},
Ca(a){return this.i1(a)},
tA(a){return null},
i(a){var s=A.bM(this),r=this.a
r=r==null?null:r.i(0)
if(r==null)r=""
return"<optimized out>#"+s+"("+r+")"}}
A.Js.prototype={
su6(a){var s=this.A
if(s==a)return
this.A=a
this.Ek(a,s)},
sJL(a){var s=this.U
if(s==a)return
this.U=a
this.Ek(a,s)},
Ek(a,b){var s=this,r=a==null
if(r)s.ar()
else if(b==null||A.A(a)!==A.A(b)||a.i1(b))s.ar()
if(s.b!=null){if(b!=null)b.G(0,s.ge6())
if(!r)a.Z(0,s.ge6())}if(r){if(s.b!=null)s.b2()}else if(b==null||A.A(a)!==A.A(b)||a.Ca(b))s.b2()},
suc(a){if(this.az.k(0,a))return
this.az=a
this.a8()},
an(a){var s,r=this
r.nd(a)
s=r.A
if(s!=null)s.Z(0,r.ge6())
s=r.U
if(s!=null)s.Z(0,r.ge6())},
ag(a){var s=this,r=s.A
if(r!=null)r.G(0,s.ge6())
r=s.U
if(r!=null)r.G(0,s.ge6())
s.le(0)},
cS(a,b){var s=this.U
if(s!=null){s=s.tA(b)
s=s===!0}else s=!1
if(s)return!0
return this.qb(a,b)},
jo(a){var s=this.A
if(s!=null){s=s.tA(a)
s=s!==!1}else s=!1
return s},
bG(){this.vh()
this.b2()},
oe(a){return a.by(this.az)},
FT(a,b,c){var s
A.b6("debugPreviousCanvasSaveCount")
a.cA(0)
if(!b.k(0,B.j))a.aB(0,b.a,b.b)
s=this.k3
s.toString
c.aH(a,s)
a.cv(0)},
aH(a,b){var s,r,q=this
if(q.A!=null){s=a.gbE(a)
r=q.A
r.toString
q.FT(s,b,r)
q.GH(a)}q.hg(a,b)
if(q.U!=null){s=a.gbE(a)
r=q.U
r.toString
q.FT(s,b,r)
q.GH(a)}},
GH(a){},
eR(a){var s,r=this
r.hf(a)
r.bP=null
s=r.U
r.e2=s==null?null:s.gBY()
a.a=!1},
o6(a,b,c){var s,r,q,p,o=this
o.fX=A.aol(o.fX,B.rI)
o.ir=A.aol(o.ir,B.rI)
s=o.fX
r=s!=null&&!s.gO(s)
s=o.ir
q=s!=null&&!s.gO(s)
s=A.a([],t.T)
if(r){p=o.fX
p.toString
B.c.I(s,p)}B.c.I(s,c)
if(q){p=o.ir
p.toString
B.c.I(s,p)}o.CY(a,b,s)},
lR(){this.ve()
this.ir=this.fX=null}}
A.VQ.prototype={}
A.Jv.prototype={
Rv(a){var s,r,q,p,o=this
try{r=o.L
if(r!==""){q=$.asf()
s=$.aq().yz(q)
s.AN($.asg())
s.rp(r)
r=s.ba()
o.u!==$&&A.eA()
o.u=r}else{o.u!==$&&A.eA()
o.u=null}}catch(p){}},
gjU(){return!0},
jo(a){return!0},
cc(a){return a.by(B.Vh)},
aH(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
try{p=a.gbE(a)
o=i.k3
n=b.a
m=b.b
l=o.a
o=o.b
k=$.aq().bg()
k.saf(0,$.ase())
p.cj(new A.C(n,m,n+l,m+o),k)
p=i.u
p===$&&A.b()
if(p!=null){s=i.k3.a
r=0
q=0
if(s>328){s-=128
r+=64}p.iz(new A.kD(s))
if(i.k3.b>96+p.gbQ(p)+12)q+=96
a.gbE(a).kt(p,b.V(0,new A.t(r,q)))}}catch(j){}}}
A.tY.prototype={
E(){return"FlexFit."+this.b}}
A.du.prototype={
i(a){return this.q8(0)+"; flex="+A.h(this.e)+"; fit="+A.h(this.f)}}
A.uM.prototype={
E(){return"MainAxisSize."+this.b}}
A.mt.prototype={
E(){return"MainAxisAlignment."+this.b}}
A.k6.prototype={
E(){return"CrossAxisAlignment."+this.b}}
A.pm.prototype={
ex(a){if(!(a.e instanceof A.du))a.e=new A.du(null,null,B.j)},
eO(a){if(this.L===B.aT)return this.IU(a)
return this.a28(a)},
qp(a){switch(this.L.a){case 0:return a.b
case 1:return a.a}},
qq(a){switch(this.L.a){case 0:return a.a
case 1:return a.b}},
cc(a){var s
if(this.aq===B.nl)return B.R
s=this.E8(a,A.ai9())
switch(this.L.a){case 0:return a.by(new A.a6(s.a,s.b))
case 1:return a.by(new A.a6(s.b,s.a))}},
E8(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.L===B.aT?a2.b:a2.d,a0=a<1/0,a1=c.av$
for(s=t.uc,r=a2.b,q=a2.d,p=b,o=0,n=0,m=0;a1!=null;){l=a1.e
l.toString
s.a(l)
k=l.e
if(k==null)k=0
if(k>0){o+=k
p=a1}else{if(c.aq===B.nk)switch(c.L.a){case 0:j=A.o4(q,b)
break
case 1:j=A.o4(b,r)
break
default:j=b}else switch(c.L.a){case 0:j=new A.aQ(0,1/0,0,q)
break
case 1:j=new A.aQ(0,r,0,1/0)
break
default:j=b}i=a3.$2(a1,j)
m+=c.qq(i)
n=Math.max(n,A.iF(c.qp(i)))}a1=l.al$}h=Math.max(0,(a0?a:0)-m)
if(o>0){g=a0?h/o:0/0
a1=c.av$
for(f=0;a1!=null;){l=a1.e
l.toString
k=s.a(l).e
if(k==null)k=0
if(k>0){if(a0)e=a1===p?h-f:g*k
else e=1/0
d=A.b6("minChildExtent")
l=a1.e
l.toString
l=s.a(l).f
switch((l==null?B.ny:l).a){case 0:if(d.b!==d)A.K(A.a1k(d.a))
d.b=e
break
case 1:if(d.b!==d)A.K(A.a1k(d.a))
d.b=0
break}if(c.aq===B.nk)switch(c.L.a){case 0:l=d.b
if(l===d)A.K(A.h5(d.a))
j=new A.aQ(l,e,q,q)
break
case 1:l=d.b
if(l===d)A.K(A.h5(d.a))
j=new A.aQ(r,r,l,e)
break
default:j=b}else switch(c.L.a){case 0:l=d.b
if(l===d)A.K(A.h5(d.a))
j=new A.aQ(l,e,0,q)
break
case 1:l=d.b
if(l===d)A.K(A.h5(d.a))
j=new A.aQ(0,r,l,e)
break
default:j=b}i=a3.$2(a1,j)
m+=c.qq(i)
f+=e
n=Math.max(n,A.iF(c.qp(i)))}l=a1.e
l.toString
a1=s.a(l).al$}}return new A.adn(a0&&c.K===B.B?a:m,n,m)},
bG(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.k.a(A.z.prototype.ga1.call(a)),a1=a.E8(a0,A.aia()),a2=a1.a,a3=a1.b
if(a.aq===B.nl){s=a.av$
for(r=t.uc,q=0,p=0,o=0;s!=null;){n=a.bB
n.toString
m=s.uC(n,!0)
if(m!=null){q=Math.max(q,m)
p=Math.max(m,p)
o=Math.max(s.k3.b-m,o)
a3=Math.max(p+o,a3)}n=s.e
n.toString
s=r.a(n).al$}}else q=0
switch(a.L.a){case 0:r=a.k3=a0.by(new A.a6(a2,a3))
a2=r.a
a3=r.b
break
case 1:r=a.k3=a0.by(new A.a6(a3,a2))
a2=r.b
a3=r.a
break}l=a2-a1.c
a.cd=Math.max(0,-l)
k=Math.max(0,l)
j=A.b6("leadingSpace")
i=A.b6("betweenSpace")
r=A.aqB(a.L,a.ai,a.b_)
h=r===!1
switch(a.u.a){case 0:j.sc3(0)
i.sc3(0)
break
case 1:j.sc3(k)
i.sc3(0)
break
case 2:j.sc3(k/2)
i.sc3(0)
break
case 3:j.sc3(0)
r=a.dt$
i.sc3(r>1?k/(r-1):0)
break
case 4:r=a.dt$
i.sc3(r>0?k/r:0)
j.sc3(i.aD()/2)
break
case 5:r=a.dt$
i.sc3(r>0?k/(r+1):0)
j.sc3(i.aD())
break}g=h?a2-j.aD():j.aD()
s=a.av$
for(r=t.uc,n=a3/2,f=i.a;s!=null;){e=s.e
e.toString
r.a(e)
d=a.aq
switch(d.a){case 0:case 1:if(A.aqB(A.aDQ(a.L),a.ai,a.b_)===(d===B.bb))c=0
else{d=s.k3
d.toString
c=a3-a.qp(d)}break
case 2:d=s.k3
d.toString
c=n-a.qp(d)/2
break
case 3:c=0
break
case 4:if(a.L===B.aT){d=a.bB
d.toString
m=s.uC(d,!0)
c=m!=null?q-m:0}else c=0
break
default:c=null}if(h){d=s.k3
d.toString
g-=a.qq(d)}switch(a.L.a){case 0:e.a=new A.t(g,c)
break
case 1:e.a=new A.t(c,g)
break}if(h){d=i.b
if(d===i)A.K(A.h5(f))
g-=d}else{d=s.k3
d.toString
d=a.qq(d)
b=i.b
if(b===i)A.K(A.h5(f))
g+=d+b}s=e.al$}},
cS(a,b){return this.yG(a,b)},
aH(a,b){var s,r,q,p=this
if(!(p.cd>1e-10)){p.om(a,b)
return}s=p.k3
if(s.gO(s))return
s=p.ce
r=p.cx
r===$&&A.b()
q=p.k3
s.saZ(0,a.kN(r,b,new A.C(0,0,0+q.a,0+q.b),p.ga29(),p.cl,s.a))},
m(){this.ce.saZ(0,null)
this.Qh()},
j3(a){var s
switch(this.cl.a){case 0:return null
case 1:case 2:case 3:if(this.cd>1e-10){s=this.k3
s=new A.C(0,0,0+s.a,0+s.b)}else s=null
return s}},
c_(){var s=this.Pi()
return s}}
A.adn.prototype={}
A.PV.prototype={
an(a){var s,r,q
this.eB(a)
s=this.av$
for(r=t.uc;s!=null;){s.an(a)
q=s.e
q.toString
s=r.a(q).al$}},
ag(a){var s,r,q
this.dU(0)
s=this.av$
for(r=t.uc;s!=null;){s.ag(0)
q=s.e
q.toString
s=r.a(q).al$}}}
A.PW.prototype={}
A.z4.prototype={
m(){var s,r,q
for(s=this.Jx$,r=s.length,q=0;q<r;++q)s[q].m()
this.i5()},
f2(){this.Ph()}}
A.Jy.prototype={
Ws(){var s=this
if(s.L!=null)return
s.L=s.ep
s.u=!1},
Fw(){this.u=this.L=null
this.ar()},
sfq(a,b){var s=this,r=s.K
if(b==r)return
if(b!=null&&r!=null&&b.Kr(r)){b.m()
return}r=s.K
if(r!=null)r.m()
s.K=b
s.ar()
if(s.ai==null||s.b_==null)s.a8()},
sbj(a,b){if(b==this.ai)return
this.ai=b
this.a8()},
sbQ(a,b){if(b==this.b_)return
this.b_=b
this.a8()},
sMY(a,b){if(b===this.bB)return
this.bB=b
this.a8()},
a_c(){this.cd=null},
saf(a,b){return},
su0(a,b){return},
smg(a){if(a===this.bN)return
this.bN=a
this.ar()},
sa11(a){return},
szj(a){if(a==this.eo)return
this.eo=a
this.ar()},
sej(a){if(a.k(0,this.ep))return
this.ep=a
this.Fw()},
sa6h(a,b){if(b===this.dJ)return
this.dJ=b
this.ar()},
sa0E(a){return},
szG(a){if(a===this.eS)return
this.eS=a
this.ar()},
sa52(a){return},
sbH(a){if(this.eT==a)return
this.eT=a
this.Fw()},
szH(a){return},
GP(a){var s,r,q=this,p=q.ai
a=A.o4(q.b_,p).oE(a)
p=q.K
if(p==null)return new A.a6(A.H(0,a.a,a.b),A.H(0,a.c,a.d))
p=p.gbj(p)
s=q.bB
r=q.K
return a.of(new A.a6(p/s,r.gbQ(r)/q.bB))},
jo(a){return!0},
cc(a){return this.GP(a)},
bG(){this.k3=this.GP(t.k.a(A.z.prototype.ga1.call(this)))},
an(a){this.eB(a)},
ag(a){this.dU(0)},
aH(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(d.K==null)return
d.Ws()
s=a.gbE(a)
r=d.k3
q=b.a
p=b.b
o=r.a
r=r.b
n=d.K
n.toString
m=d.aq
l=d.bB
k=d.cd
j=d.eo
i=d.L
i.toString
h=d.ji
g=d.dJ
f=d.u
f.toString
e=d.eS
A.arE(i,s,h,k,m,d.bN,j,f,n,e,!1,1,new A.C(q,p,q+o,p+r),g,l)},
m(){var s=this.K
if(s!=null)s.m()
this.K=null
this.i5()}}
A.ry.prototype={
i(a){return"AnnotationEntry(annotation: "+this.a.i(0)+", localPosition: "+this.b.i(0)+")"}}
A.B4.prototype={}
A.uz.prototype={
i6(){},
re(a){var s,r=this
r.e+=a
s=t.ow
if(s.a(A.L.prototype.gaL.call(r,r))!=null)s.a(A.L.prototype.gaL.call(r,r)).re(a)},
nt(a){var s,r,q
for(s=this.d,s=A.aA(s.gaS(s),!0,t.M),r=s.length,q=0;q<r;++q)s[q].$0()},
m(){var s=this.z
if(s!=null)s.m()
this.z=null},
e5(){if(this.y)return
this.y=!0},
sim(a){var s,r=this,q=r.z
if(q!=null)q.m()
r.z=a
q=t.ow
if(q.a(A.L.prototype.gaL.call(r,r))!=null){q.a(A.L.prototype.gaL.call(r,r)).toString
s=!0}else s=!1
if(s)q.a(A.L.prototype.gaL.call(r,r)).e5()},
ut(){this.y=this.y||!1},
j6(a){var s
this.e5()
s=a.e
if(s!==0)this.re(-s)
this.v2(a)},
mH(a){var s,r,q=this,p=t.ow.a(A.L.prototype.gaL.call(q,q))
if(p!=null){s=q.as
r=q.Q
if(s==null)p.CW=r
else s.Q=r
r=q.Q
if(r==null)p.cx=s
else r.as=s
q.Q=q.as=null
p.j6(q)
q.w.saZ(0,null)}},
eU(a,b,c){return!1},
JD(a,b,c){var s=A.a([],c.h("w<ry<0>>"))
this.eU(new A.B4(s,c.h("B4<0>")),b,!0,c)
return s.length===0?null:B.c.gJ(s).a},
RW(a){var s,r=this
if(!r.y&&r.z!=null){s=r.z
s.toString
a.a01(s)
return}r.ht(a)
r.y=!1},
c_(){var s=this.O1()
return s+(this.b==null?" DETACHED":"")}}
A.FS.prototype={
saZ(a,b){var s=this.a
if(b==null?s==null:b===s)return
if(s!=null)if(--s.x===0)s.m()
this.a=b
if(b!=null)++b.x},
i(a){var s=this.a
return"LayerHandle("+(s!=null?J.cU(s):"DISPOSED")+")"}}
A.IV.prototype={
sLc(a){var s
this.e5()
s=this.cx
if(s!=null)s.m()
this.cx=a},
m(){this.sLc(null)
this.CG()},
ht(a){var s=this.cx
s.toString
a.a0_(B.j,s,this.cy,this.db)},
eU(a,b,c){return!1}}
A.IO.prototype={
ht(a){a.a_Z(this.cx,this.CW)
a.Nl(this.cy)
a.Ne(!1)
a.Nd(!1)},
eU(a,b,c){return!1}}
A.eG.prototype={
nt(a){var s
this.Ou(a)
if(!a)return
s=this.CW
for(;s!=null;){s.nt(!0)
s=s.Q}},
a0v(a){var s=this
s.ut()
s.ht(a)
if(s.e>0)s.nt(!0)
s.y=!1
return a.ba()},
m(){this.AX()
this.d.a0(0)
this.CG()},
ut(){var s,r=this
r.Ov()
s=r.CW
for(;s!=null;){s.ut()
r.y=r.y||s.y
s=s.Q}},
eU(a,b,c,d){var s,r,q
for(s=this.cx,r=a.a;s!=null;s=s.as){if(s.eU(a,b,!0,d))return!0
q=r.length
if(q!==0)return!1}return!1},
an(a){var s
this.v1(a)
s=this.CW
for(;s!=null;){s.an(a)
s=s.Q}},
ag(a){var s
this.dU(0)
s=this.CW
for(;s!=null;){s.ag(0)
s=s.Q}this.nt(!1)},
hv(a,b){var s,r=this
r.e5()
s=b.e
if(s!==0)r.re(s)
r.Cn(b)
s=b.as=r.cx
if(s!=null)s.Q=b
r.cx=b
if(r.CW==null)r.CW=b
b.w.saZ(0,b)},
AX(){var s,r,q,p=this,o=p.CW
for(s=t.ow;o!=null;o=r){r=o.Q
o.Q=o.as=null
p.e5()
q=o.e
if(q!==0){q=-q
p.e+=q
if(s.a(A.L.prototype.gaL.call(p,p))!=null)s.a(A.L.prototype.gaL.call(p,p)).re(q)}p.v2(o)
o.w.saZ(0,null)}p.cx=p.CW=null},
ht(a){this.kg(a)},
kg(a){var s=this.CW
for(;s!=null;){s.RW(a)
s=s.Q}}}
A.hY.prototype={
sbF(a,b){if(!b.k(0,this.p1))this.e5()
this.p1=b},
eU(a,b,c,d){return this.n8(a,b.aa(0,this.p1),!0,d)},
ht(a){var s=this,r=s.p1
s.sim(a.Ln(r.a,r.b,t.cV.a(s.z)))
s.kg(a)
a.hP()}}
A.oc.prototype={
eU(a,b,c,d){if(!this.p1.B(0,b))return!1
return this.n8(a,b,!0,d)},
ht(a){var s=this,r=s.p1
r.toString
s.sim(a.a5O(r,s.p2,t.CW.a(s.z)))
s.kg(a)
a.hP()}}
A.t_.prototype={
eU(a,b,c,d){if(!this.p1.B(0,b))return!1
return this.n8(a,b,!0,d)},
ht(a){var s=this,r=s.p1
r.toString
s.sim(a.a5M(r,s.p2,t.cB.a(s.z)))
s.kg(a)
a.hP()}}
A.rZ.prototype={
eU(a,b,c,d){if(!this.p1.B(0,b))return!1
return this.n8(a,b,!0,d)},
ht(a){var s=this,r=s.p1
r.toString
s.sim(a.a5L(r,s.p2,t.xS.a(s.z)))
s.kg(a)
a.hP()}}
A.kY.prototype={
sbp(a,b){var s=this
if(b.k(0,s.ad))return
s.ad=b
s.bh=!0
s.e5()},
ht(a){var s,r,q=this
q.aY=q.ad
if(!q.p1.k(0,B.j)){s=q.p1
s=A.v4(s.a,s.b,0)
r=q.aY
r.toString
s.cI(0,r)
q.aY=s}q.sim(a.a5Q(q.aY.a,t.Al.a(q.z)))
q.kg(a)
a.hP()},
a_4(a){var s,r=this
if(r.bh){s=r.ad
s.toString
r.bm=A.HQ(A.ajZ(s))
r.bh=!1}s=r.bm
if(s==null)return null
return A.cw(s,a)},
eU(a,b,c,d){var s=this.a_4(b)
if(s==null)return!1
return this.OS(a,s,!0,d)}}
A.Il.prototype={
sI3(a,b){var s=this,r=s.ad
if(b!=r){if(b===255||r===255)s.sim(null)
s.ad=b
s.e5()}},
ht(a){var s,r,q,p=this
if(p.CW==null){p.sim(null)
return}s=p.ad
s.toString
r=p.p1
q=p.z
if(s<255)p.sim(a.a5P(s,r,t.i6.a(q)))
else p.sim(a.Ln(r.a,r.b,t.cV.a(q)))
p.kg(a)
a.hP()}}
A.rx.prototype={
eU(a,b,c,d){var s,r,q,p=this,o=p.n8(a,b,!0,d),n=a.a
if(n.length!==0&&!0)return o
s=p.p2
if(s!=null){r=p.p3
q=r.a
r=r.b
s=!new A.C(q,r,q+s.a,r+s.b).B(0,b)}else s=!1
if(s)return o
if(A.aD(p.$ti.c)===A.aD(d)){o=o||!1
n.push(new A.ry(d.a(p.p1),b.aa(0,p.p3),d.h("ry<0>")))}return o}}
A.Oc.prototype={}
A.OH.prototype={
a6k(a){var s=this.a
this.a=a
return s},
i(a){var s="<optimized out>#",r=A.bM(this.b),q=this.a.a
return s+A.bM(this)+"("+("latestEvent: "+(s+r))+", "+("annotations: [list of "+q+"]")+")"}}
A.OI.prototype={
gih(a){var s=this.c
return s.gih(s)}}
A.I_.prototype={
Fa(a){var s,r,q,p,o,n,m=t.mC,l=A.hU(null,null,null,m,t.rA)
for(s=a.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
o=p.a
if(m.b(o)){n=p.b
n.toString
l.l(0,o,n)}}return l},
TU(a,b){var s=a.b,r=s.gbv(s)
s=a.b
if(!this.b.R(0,s.gih(s)))return A.hU(null,null,null,t.mC,t.rA)
return this.Fa(b.$1(r))},
EY(a){var s,r
A.axI(a)
s=a.b
r=A.n(s).h("b8<1>")
this.a.a38(a.gih(a),a.d,A.ku(new A.b8(s,r),new A.a2m(),r.h("o.E"),t.oR))},
a74(a,b){var s,r,q,p,o
if(a.gcf(a)!==B.cE)return
if(t.zs.b(a))return
s=t.yg.b(a)?A.anj():b.$0()
r=a.gih(a)
q=this.b
p=q.j(0,r)
if(!A.axJ(p,a))return
o=q.a
new A.a2p(this,p,a,r,s).$0()
if(o!==0!==(q.a!==0))this.aA()},
a6Z(a){new A.a2n(this,a).$0()}}
A.a2m.prototype={
$1(a){return a.gIR(a)},
$S:238}
A.a2p.prototype={
$0(){var s=this
new A.a2o(s.a,s.b,s.c,s.d,s.e).$0()},
$S:0}
A.a2o.prototype={
$0(){var s,r,q,p,o,n=this,m=null,l=n.b
if(l==null){s=n.c
if(t.yg.b(s))return
n.a.b.l(0,n.d,new A.OH(A.hU(m,m,m,t.mC,t.rA),s))}else{s=n.c
if(t.yg.b(s))n.a.b.v(0,s.gih(s))}r=n.a
q=r.b.j(0,n.d)
if(q==null){l.toString
q=l}p=q.b
q.b=s
o=t.yg.b(s)?A.hU(m,m,m,t.mC,t.rA):r.Fa(n.e)
r.EY(new A.OI(q.a6k(o),o,p,s))},
$S:0}
A.a2n.prototype={
$0(){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.b,r=r.gaS(r),r=new A.dU(J.at(r.a),r.b),q=this.b,p=A.n(r).z[1];r.q();){o=r.a
if(o==null)o=p.a(o)
n=o.b
m=s.TU(o,q)
l=o.a
o.a=m
s.EY(new A.OI(l,m,n,null))}},
$S:0}
A.a2k.prototype={
$2(a,b){var s
if(!this.a.R(0,a))if(a.gBq()&&a.gAn(a)!=null){s=a.gAn(a)
s.toString
s.$1(this.b.aM(this.c.j(0,a)))}},
$S:239}
A.a2l.prototype={
$1(a){return!this.a.R(0,a)},
$S:240}
A.Sj.prototype={}
A.cg.prototype={
ag(a){},
i(a){return"<none>"}}
A.kC.prototype={
f1(a,b){var s,r=this
if(a.gdL()){r.n7()
if(!a.cy){s=a.ay
s===$&&A.b()
s=!s}else s=!0
if(s)A.ao1(a,null,!0)
else if(a.db)A.ay3(a)
s=a.ch.a
s.toString
t.cY.a(s)
s.sbF(0,b)
r.yc(s)}else{s=a.ay
s===$&&A.b()
if(s){a.ch.saZ(0,null)
a.x8(r,b)}else a.x8(r,b)}},
yc(a){a.mH(0)
this.a.hv(0,a)},
gbE(a){var s,r,q=this
if(q.e==null){q.c=A.ay6(q.b)
s=$.aq()
r=s.a1Q()
q.d=r
q.e=s.a1J(r,null)
r=q.c
r.toString
q.a.hv(0,r)}s=q.e
s.toString
return s},
n7(){var s,r=this
if(r.e==null)return
s=r.c
s.toString
s.sLc(r.d.a2u())
r.e=r.d=r.c=null},
C5(){var s=this.c
if(s!=null)if(!s.cy){s.cy=!0
s.e5()}},
pt(a,b,c,d){var s,r=this
if(a.CW!=null)a.AX()
r.n7()
r.yc(a)
s=r.a1L(a,d==null?r.b:d)
b.$2(s,c)
s.n7()},
Lm(a,b,c){return this.pt(a,b,c,null)},
a1L(a,b){return new A.kC(a,b)},
kN(a,b,c,d,e,f){var s,r,q=this
if(e===B.l){d.$2(q,b)
return null}s=c.df(b)
if(a){if(f==null){r=new A.oc(B.T,A.y(t.S,t.M),A.aw())
r.i6()}else r=f
if(!s.k(0,r.p1)){r.p1=s
r.e5()}if(e!==r.p2){r.p2=e
r.e5()}q.pt(r,d,b,s)
return r}else{q.a0V(s,e,s,new A.a3d(q,d,b))
return null}},
a5N(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.l){e.$2(p,b)
return null}s=c.df(b)
r=d.df(b)
if(a){if(g==null){q=new A.t_(B.n6,A.y(t.S,t.M),A.aw())
q.i6()}else q=g
if(!r.k(0,q.p1)){q.p1=r
q.e5()}if(f!==q.p2){q.p2=f
q.e5()}p.pt(q,e,b,s)
return q}else{p.a0T(r,f,s,new A.a3c(p,e,b))
return null}},
Ll(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.l){e.$2(p,b)
return null}s=c.df(b)
r=d.df(b)
if(a){if(g==null){q=new A.rZ(B.n6,A.y(t.S,t.M),A.aw())
q.i6()}else q=g
if(r!==q.p1){q.p1=r
q.e5()}if(f!==q.p2){q.p2=f
q.e5()}p.pt(q,e,b,s)
return q}else{p.a0S(r,f,s,new A.a3b(p,e,b))
return null}},
pu(a,b,c,d,e){var s,r=this,q=b.a,p=b.b,o=A.v4(q,p,0)
o.cI(0,c)
o.aB(0,-q,-p)
if(a){s=e==null?A.ap_(null):e
s.sbp(0,o)
r.pt(s,d,b,A.anN(o,r.b))
return s}else{q=r.gbE(r)
q.cA(0)
q.ae(0,o.a)
d.$2(r,b)
r.gbE(r).cv(0)
return null}},
a5R(a,b,c,d){return this.pu(a,b,c,d,null)},
Lo(a,b,c,d){var s=d==null?A.anZ():d
s.sI3(0,b)
s.sbF(0,a)
this.Lm(s,c,B.j)
return s},
i(a){return"PaintingContext#"+A.eT(this)+"(layer: "+this.a.i(0)+", canvas bounds: "+this.b.i(0)+")"}}
A.a3d.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.a3c.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.a3b.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.VE.prototype={}
A.a6w.prototype={
m(){var s,r=this.b
if(r!=null)this.a.as.G(0,r)
r=this.a
if(--r.at===0){s=r.as
s.b.a0(0)
s.c.a0(0)
s.d.a0(0)
s.dV()
r.as=null
r.d.$0()}}}
A.IW.prototype={
mJ(){this.a.$0()},
sa6z(a){var s=this.e
if(s===a)return
if(s!=null)s.ag(0)
this.e=a
a.an(this)},
a2Y(){var s,r,q,p,o,n,m,l,k,j,i,h=this
try{for(p=t.W,o=t.By;n=h.r,n.length!==0;){s=n
h.r=A.a([],o)
n=s
m=new A.a3o()
if(!!n.immutable$list)A.K(A.O("sort"))
l=n.length-1
if(l-0<=32)A.KD(n,0,l,m)
else A.KC(n,0,l,m)
for(r=0;r<J.bI(s);++r){if(h.f){h.f=!1
n=h.r
if(n.length!==0){m=s
l=r
k=J.bI(s)
A.dg(l,k,J.bI(m),null,null)
j=A.aT(m)
i=new A.eX(m,l,k,j.h("eX<1>"))
i.qd(m,l,k,j.c)
B.c.I(n,i)
break}}q=J.aM(s,r)
if(q.z){n=q
n=p.a(A.L.prototype.gbs.call(n))===h}else n=!1
if(n)q.WQ()}h.f=!1}}finally{h.f=!1}},
TA(a){try{a.$0()}finally{this.f=!0}},
a2X(){var s,r,q,p,o=this.y
B.c.dg(o,new A.a3n())
for(s=o.length,r=t.W,q=0;q<o.length;o.length===s||(0,A.P)(o),++q){p=o[q]
if(p.CW&&r.a(A.L.prototype.gbs.call(p))===this)p.Hn()}B.c.a0(o)},
a2Z(){var s,r,q,p,o,n,m,l,k
try{s=this.z
this.z=A.a([],t.By)
for(q=s,J.Tw(q,new A.a3p()),p=q.length,o=t.W,n=t.cY,m=0;m<q.length;q.length===p||(0,A.P)(q),++m){r=q[m]
if(r.cy||r.db){l=r
l=o.a(A.L.prototype.gbs.call(l))===this}else l=!1
if(l)if(r.ch.a.b!=null)if(r.cy)A.ao1(r,null,!1)
else{l=r
k=l.ch.a
k.toString
l.pI(n.a(k))
l.db=!1}else r.ZB()}}finally{}},
a2v(a){var s,r=this
if(++r.at===1){s=t.ju
r.as=new A.wI(r.c,A.b3(s),A.y(t.S,s),A.b3(s),$.by())
r.b.$0()}if(a!=null)r.as.Z(0,a)
return new A.a6w(r,a)},
Jp(){return this.a2v(null)},
a3_(){var s,r,q,p,o,n,m,l,k=this
if(k.as==null)return
try{q=k.ay
p=A.aA(q,!0,A.n(q).c)
B.c.dg(p,new A.a3q())
s=p
q.a0(0)
for(q=s,o=q.length,n=t.W,m=0;m<q.length;q.length===o||(0,A.P)(q),++m){r=q[m]
if(r.dy){l=r
l=n.a(A.L.prototype.gbs.call(l))===k}else l=!1
if(l)r.a_p()}k.as.Nb()}finally{}}}
A.a3o.prototype={
$2(a,b){return a.a-b.a},
$S:49}
A.a3n.prototype={
$2(a,b){return a.a-b.a},
$S:49}
A.a3p.prototype={
$2(a,b){return b.a-a.a},
$S:49}
A.a3q.prototype={
$2(a,b){return a.a-b.a},
$S:49}
A.z.prototype={
aJ(){var s=this
s.cx=s.gdL()||s.go_()
s.ay=s.gdL()},
f2(){var s=this
s.a8()
s.mw()
s.ar()
s.b2()
s.aT(new A.a4D())},
m(){this.ch.saZ(0,null)},
ex(a){if(!(a.e instanceof A.cg))a.e=new A.cg()},
ib(a){var s=this
s.ex(a)
s.a8()
s.mw()
s.b2()
s.Cn(a)},
j6(a){var s=this
a.DU()
a.e.ag(0)
a.e=null
s.v2(a)
s.a8()
s.mw()
s.b2()},
aT(a){},
qX(a,b,c){A.e6(new A.bJ(b,c,"rendering library",A.bo("during "+a+"()"),new A.a4z(this),!1))},
an(a){var s=this
s.v1(a)
if(s.z&&s.Q!=null){s.z=!1
s.a8()}if(s.CW){s.CW=!1
s.mw()}if(s.cy&&s.ch.a!=null){s.cy=!1
s.ar()}if(s.dy&&s.gxu().a){s.dy=!1
s.b2()}},
ga1(){var s=this.at
if(s==null)throw A.c(A.a5("A RenderObject does not have any constraints before it has been laid out."))
return s},
a8(){var s,r=this
if(r.z)return
s=r.Q
if(s==null){r.z=!0
if(r.c!=null)r.tP()
return}if(s!==r)r.tP()
else{r.z=!0
s=t.W
if(s.a(A.L.prototype.gbs.call(r))!=null){s.a(A.L.prototype.gbs.call(r)).r.push(r)
s.a(A.L.prototype.gbs.call(r)).mJ()}}},
tP(){this.z=!0
var s=this.c
s.toString
t.d.a(s)
if(!this.as)s.a8()},
DU(){var s=this
if(s.Q!==s){s.Q=null
s.aT(A.arB())}},
Yv(){var s,r,q=this,p=q.Q
if(p===q)return
s=t.B2.a(q.c)
r=s==null?null:s.Q
if(r!=p){q.Q=r
q.aT(A.arC())}},
WQ(){var s,r,q,p=this
try{p.bG()
p.b2()}catch(q){s=A.ae(q)
r=A.au(q)
p.qX("performLayout",s,r)}p.z=!1
p.ar()},
cu(a,b){var s,r,q,p,o,n,m,l=this
if(!b||l.gjU()||a.gKy()||!(l.c instanceof A.z))o=l
else{n=l.c
n.toString
n=t.d.a(n).Q
n.toString
o=n}if(!l.z&&a.k(0,l.at)){if(o!==l.Q){l.Q=o
l.aT(A.arC())}return}l.at=a
n=l.Q
if(n!=null&&o!==n)l.aT(A.arB())
l.Q=o
if(l.gjU())try{l.pp()}catch(m){s=A.ae(m)
r=A.au(m)
l.qX("performResize",s,r)}try{l.bG()
l.b2()}catch(m){q=A.ae(m)
p=A.au(m)
l.qX("performLayout",q,p)}l.z=!1
l.ar()},
gjU(){return!1},
Kp(a,b){var s=this
s.as=!0
try{t.W.a(A.L.prototype.gbs.call(s)).TA(new A.a4C(s,a,b))}finally{s.as=!1}},
gdL(){return!1},
go_(){return!1},
pI(a){return a==null?A.axY(B.j):a},
mw(){var s,r,q,p=this
if(p.CW)return
s=p.CW=!0
r=p.c
if(r instanceof A.z){if(r.CW)return
q=p.ay
q===$&&A.b()
if((q?!p.gdL():s)&&!r.gdL()){r.mw()
return}}s=t.W
if(s.a(A.L.prototype.gbs.call(p))!=null)s.a(A.L.prototype.gbs.call(p)).y.push(p)},
Hn(){var s,r,q=this
if(!q.CW)return
s=q.cx
s===$&&A.b()
q.cx=!1
q.aT(new A.a4A(q))
if(q.gdL()||q.go_())q.cx=!0
if(!q.gdL()){r=q.ay
r===$&&A.b()}else r=!1
if(r){q.db=q.cy=!1
s=t.W.a(A.L.prototype.gbs.call(q))
if(s!=null)B.c.v(s.z,q)
q.CW=!1
q.ar()}else if(s!==q.cx){q.CW=!1
q.ar()}else q.CW=!1},
ar(){var s,r=this
if(r.cy)return
r.cy=!0
if(r.gdL()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=t.W
if(s.a(A.L.prototype.gbs.call(r))!=null){s.a(A.L.prototype.gbs.call(r)).z.push(r)
s.a(A.L.prototype.gbs.call(r)).mJ()}}else{s=r.c
if(s instanceof A.z)s.ar()
else{s=t.W
if(s.a(A.L.prototype.gbs.call(r))!=null)s.a(A.L.prototype.gbs.call(r)).mJ()}}},
a50(){var s,r=this
if(r.db||r.cy)return
r.db=!0
if(r.gdL()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=t.W
if(s.a(A.L.prototype.gbs.call(r))!=null){s.a(A.L.prototype.gbs.call(r)).z.push(r)
s.a(A.L.prototype.gbs.call(r)).mJ()}}else r.ar()},
ZB(){var s,r=this.c
for(;r instanceof A.z;){if(r.gdL()){s=r.ch.a
if(s==null)break
if(s.b!=null)break
r.cy=!0}r=r.c}},
x8(a,b){var s,r,q,p=this
if(p.z)return
p.db=p.cy=!1
p.ay=p.gdL()
try{p.aH(a,b)}catch(q){s=A.ae(q)
r=A.au(q)
p.qX("paint",s,r)}},
aH(a,b){},
dn(a,b){},
mE(a){return!0},
bw(a,b){var s,r,q,p,o,n,m,l,k=b==null
if(k){s=t.W.a(A.L.prototype.gbs.call(this)).e
if(s instanceof A.z)b=s}r=A.a([],t.By)
q=t.d
p=this
while(p!==b){r.push(p)
o=p.c
o.toString
q.a(o)
p=o}if(!k){b.toString
r.push(b)}n=new A.bf(new Float64Array(16))
n.dd()
for(m=r.length-1;m>0;m=l){l=m-1
r[m].dn(r[l],n)}return n},
j3(a){return null},
yL(a){return null},
eR(a){},
uP(a){var s
if(t.W.a(A.L.prototype.gbs.call(this)).as==null)return
s=this.fr
if(s!=null&&!s.as)s.Na(a)
else{s=this.c
if(s!=null)t.d.a(s).uP(a)}},
gxu(){var s,r=this
if(r.dx==null){s=A.pC()
r.dx=s
r.eR(s)}s=r.dx
s.toString
return s},
lR(){this.dy=!0
this.fr=null
this.aT(new A.a4B())},
b2(){var s,r,q,p,o,n,m=this
if(m.b==null||t.W.a(A.L.prototype.gbs.call(m)).as==null){m.dx=null
return}if(m.fr!=null){s=m.dx
s=s==null?null:s.a
r=s===!0}else r=!1
m.dx=null
q=m.gxu().a&&r
s=t.d
p=m
while(!0){if(!(!q&&p.c instanceof A.z))break
if(p!==m&&p.dy)break
p.dy=!0
o=p.c
o.toString
s.a(o)
if(o.dx==null){n=A.pC()
o.dx=n
o.eR(n)}q=o.dx.a
if(q&&o.fr==null)return
p=o}if(p!==m&&m.fr!=null&&m.dy)t.W.a(A.L.prototype.gbs.call(m)).ay.v(0,m)
if(!p.dy){p.dy=!0
s=t.W
if(s.a(A.L.prototype.gbs.call(m))!=null){s.a(A.L.prototype.gbs.call(m)).ay.C(0,p)
s.a(A.L.prototype.gbs.call(m)).mJ()}}},
a_p(){var s,r,q,p,o,n,m=this,l=null
if(m.z)return
s=m.fr
if(s==null)s=l
else{s=t.aa.a(A.L.prototype.gaL.call(s,s))
if(s==null)s=l
else s=s.at||s.as}r=t.sP.a(m.ER(s===!0))
q=A.a([],t.T)
s=m.fr
p=s==null
o=p?l:s.x
n=p?l:s.y
s=p?l:s.z
r.od(s==null?0:s,n,o,q)
B.c.gbk(q)},
ER(a){var s,r,q,p,o,n,m,l,k=this,j={},i=k.gxu()
j.a=i.c
s=!i.d&&!i.a
r=t.yj
q=A.a([],r)
p=A.b3(t.sP)
k.h7(new A.a4y(j,k,a||i.p2,q,p,i,s))
for(o=A.jz(p,p.r),n=A.n(o).c;o.q();){m=o.d;(m==null?n.a(m):m).zW()}k.dy=!1
if(!(k.c instanceof A.z)){o=j.a
l=new A.Qg(A.a([],r),A.a([k],t.By),o)}else{o=j.a
if(s)l=new A.abz(A.a([],r),o)
else{l=new A.R5(a,i,A.a([],r),A.a([k],t.By),o)
if(i.a)l.x=!0}}l.I(0,q)
return l},
h7(a){this.aT(a)},
o6(a,b,c){a.jK(0,t.d1.a(c),b)},
is(a,b){},
c_(){var s=A.bM(this)
return"<optimized out>#"+s},
i(a){return this.c_()},
ey(a,b,c,d){var s=this.c
if(s instanceof A.z)s.ey(a,b==null?this:b,c,d)},
n1(){return this.ey(B.aK,null,B.u,null)},
l3(a,b){return this.ey(B.aK,a,B.u,b)},
$iao:1}
A.a4D.prototype={
$1(a){a.f2()},
$S:28}
A.a4z.prototype={
$0(){var s=A.a([],t.F),r=this.a
s.push(A.aje("The following RenderObject was being processed when the exception was fired",B.FC,r))
s.push(A.aje("RenderObject",B.FD,r))
return s},
$S:17}
A.a4C.prototype={
$0(){this.b.$1(this.c.a(this.a.ga1()))},
$S:0}
A.a4A.prototype={
$1(a){var s
a.Hn()
s=a.cx
s===$&&A.b()
if(s)this.a.cx=!0},
$S:28}
A.a4B.prototype={
$1(a){a.lR()},
$S:28}
A.a4y.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a.ER(f.c)
if(e.a){B.c.a0(f.d)
f.e.a0(0)
if(!f.f.a)f.a.a=!0}for(s=e.gKg(),r=s.length,q=f.d,p=f.e,o=f.f,n=f.b,m=f.r,l=0;l<s.length;s.length===r||(0,A.P)(s),++l){k=s[l]
q.push(k)
k.b.push(n)
k.a06(o.ad)
if(o.b||!(n.c instanceof A.z)){k.zW()
continue}if(k.gkn()==null||m)continue
if(!o.Ks(k.gkn()))p.C(0,k)
j=q.length-1
for(i=0;i<j;++i){h=q[i]
g=k.gkn()
g.toString
if(!g.Ks(h.gkn())){p.C(0,k)
p.C(0,h)}}}},
$S:28}
A.aG.prototype={
saV(a){var s=this,r=s.u$
if(r!=null)s.j6(r)
s.u$=a
if(a!=null)s.ib(a)},
jE(){var s=this.u$
if(s!=null)this.AU(s)},
aT(a){var s=this.u$
if(s!=null)a.$1(s)}}
A.e3.prototype={$icg:1}
A.av.prototype={
grF(){return this.dt$},
Fi(a,b){var s,r,q,p=this,o=a.e
o.toString
s=A.n(p).h("av.1")
s.a(o);++p.dt$
if(b==null){o=o.al$=p.av$
if(o!=null){o=o.e
o.toString
s.a(o).bW$=a}p.av$=a
if(p.d3$==null)p.d3$=a}else{r=b.e
r.toString
s.a(r)
q=r.al$
if(q==null){o.bW$=b
p.d3$=r.al$=a}else{o.al$=q
o.bW$=b
o=q.e
o.toString
s.a(o).bW$=r.al$=a}}},
zE(a,b,c){this.ib(b)
this.Fi(b,c)},
I(a,b){},
Ga(a){var s,r,q,p,o=this,n=a.e
n.toString
s=A.n(o).h("av.1")
s.a(n)
r=n.bW$
q=n.al$
if(r==null)o.av$=q
else{p=r.e
p.toString
s.a(p).al$=q}q=n.al$
if(q==null)o.d3$=r
else{q=q.e
q.toString
s.a(q).bW$=r}n.al$=n.bW$=null;--o.dt$},
v(a,b){this.Ga(b)
this.j6(b)},
tT(a,b){var s=this,r=a.e
r.toString
if(A.n(s).h("av.1").a(r).bW$==b)return
s.Ga(a)
s.Fi(a,b)
s.a8()},
jE(){var s,r,q,p=this.av$
for(s=A.n(this).h("av.1");p!=null;){r=p.a
q=this.a
if(r<=q){p.a=q+1
p.jE()}r=p.e
r.toString
p=s.a(r).al$}},
aT(a){var s,r,q=this.av$
for(s=A.n(this).h("av.1");q!=null;){a.$1(q)
r=q.e
r.toString
q=s.a(r).al$}},
ga2T(a){return this.av$},
a0L(a){var s=a.e
s.toString
return A.n(this).h("av.1").a(s).bW$},
a0J(a){var s=a.e
s.toString
return A.n(this).h("av.1").a(s).al$}}
A.Jj.prototype={
vl(){this.a8()}}
A.afc.prototype={}
A.abz.prototype={
I(a,b){B.c.I(this.b,b)},
gKg(){return this.b}}
A.nD.prototype={
gKg(){return A.a([this],t.yj)},
a06(a){var s
if(a==null||a.a===0)return
s=this.c;(s==null?this.c=A.b3(t.xJ):s).I(0,a)}}
A.Qg.prototype={
od(a,b,c,d){var s,r,q,p,o,n=this.b,m=B.c.gJ(n)
if(m.fr==null){s=B.c.gJ(n).gn0()
r=B.c.gJ(n)
r=t.W.a(A.L.prototype.gbs.call(r)).as
r.toString
q=$.aiK()
q=new A.bX(null,0,s,B.a_,q.p2,q.e,q.p3,q.f,q.aY,q.p4,q.R8,q.RG,q.rx,q.ry,q.to,q.x2,q.xr,q.y1)
q.an(r)
m.fr=q}m=B.c.gJ(n).fr
m.toString
m.saP(0,B.c.gJ(n).gjR())
p=A.a([],t.T)
for(n=this.e,s=n.length,o=0;o<n.length;n.length===s||(0,A.P)(n),++o)n[o].od(0,b,c,p)
m.jK(0,p,null)
d.push(m)},
gkn(){return null},
zW(){},
I(a,b){B.c.I(this.e,b)}}
A.R5.prototype={
od(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(!h.x){s=h.b
B.c.gJ(s).fr=null
for(r=h.w,q=r.length,p=A.aj(s),o=p.c,p=p.h("eX<1>"),n=0;n<r.length;r.length===q||(0,A.P)(r),++n){m=r[n]
l=new A.eX(s,1,g,p)
l.qd(s,1,g,o)
B.c.I(m.b,l)
m.od(a+h.f.x2,b,c,d)}return}s=h.b
if(s.length>1){k=new A.afd()
k.SW(c,b,s)}else k=g
r=h.e
q=!r
if(q){if(k==null)p=g
else{p=k.d
p===$&&A.b()
if(!p.gO(p)){p=k.c
p===$&&A.b()
p=p.KC()}else p=!0}p=p===!0}else p=!1
if(p)return
p=B.c.gJ(s)
if(p.fr==null)p.fr=A.a6y(g,B.c.gJ(s).gn0())
j=B.c.gJ(s).fr
j.sKv(r)
j.dx=h.c
j.z=a
if(a!==0){h.Ev()
r=h.f
r.sik(0,r.x2+a)}if(k!=null){r=k.d
r===$&&A.b()
j.saP(0,r)
r=k.c
r===$&&A.b()
j.sbp(0,r)
j.x=k.b
j.y=k.a
if(q&&k.e){h.Ev()
h.f.b5(B.lA,!0)}}i=A.a([],t.T)
for(r=h.w,q=r.length,n=0;n<r.length;r.length===q||(0,A.P)(r),++n){m=r[n]
p=j.x
m.od(0,j.y,p,i)}r=h.f
if(r.a)B.c.gJ(s).o6(j,h.f,i)
else j.jK(0,i,r)
d.push(j)},
gkn(){return this.x?null:this.f},
I(a,b){var s,r,q,p,o,n,m=this
for(s=b.length,r=m.w,q=0;q<b.length;b.length===s||(0,A.P)(b),++q){p=b[q]
r.push(p)
if(p.gkn()==null)continue
if(!m.r){m.f=m.f.a1p()
m.r=!0}o=m.f
n=p.gkn()
n.toString
o.kf(n)}},
Ev(){var s,r,q=this
if(!q.r){s=q.f
r=A.pC()
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
r.aY=s.aY
r.ad=s.ad
r.y2=s.y2
r.am=s.am
r.ap=s.ap
r.ak=s.ak
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
zW(){this.x=!0}}
A.afd.prototype={
SW(a,b,c){var s,r,q,p,o,n,m=this,l=new A.bf(new Float64Array(16))
l.dd()
m.c=l
m.b=a
m.a=b
for(s=c.length-1;s>0;){r=c[s];--s
q=c[s]
a=r.yL(q)
if(a!=null){m.b=a
m.a=A.apt(m.a,r.j3(q))}else m.b=A.apt(m.b,r.j3(q))
l=$.at_()
l.dd()
A.aAT(r,q,m.c,l)
m.b=A.apu(m.b,l)
m.a=A.apu(m.a,l)}p=B.c.gJ(c)
l=m.b
l=l==null?p.gjR():l.fs(p.gjR())
m.d=l
o=m.a
if(o!=null){n=o.fs(l)
if(n.gO(n)){l=m.d
l=!l.gO(l)}else l=!1
m.e=l
if(!l)m.d=n}}}
A.PY.prototype={}
A.ii.prototype={
i(a){var s=A.a(["offset="+this.a.i(0)],t.s)
s.push(this.q8(0))
return B.c.b3(s,"; ")}}
A.w7.prototype={
ex(a){if(!(a.e instanceof A.ii))a.e=new A.ii(null,null,B.j)},
scq(a,b){var s=this,r=s.L
switch(r.d.aF(0,b).a){case 0:case 1:return
case 2:r.scq(0,b)
s.K=s.u=null
s.wc(b)
s.ar()
s.b2()
break
case 3:r.scq(0,b)
s.K=s.u=s.bN=null
s.wc(b)
s.a8()
s.xf()
s.Eo()
s.HD()
break}},
spw(a){var s=this
if(a==s.ai)return
s.xf()
s.Eo()
s.ai=a
s.HD()},
HD(){var s,r,q=this
if(q.ai==null)return
s=q.aq
if(s==null)s=q.aq=q.Ux()
r=q.ai
B.c.Y(s,r.gfh(r))},
xf(){var s,r=this.ai
if(r==null||this.aq==null)return
s=this.aq
s.toString
B.c.Y(s,r.gAW(r))},
Ux(){var s,r,q,p,o=this.L.d.M1(!1),n=A.a([],t.sb)
for(s=o.length,r=0;r<s;){q=B.b.hH(o,$.ash(),r)
if(r!==q){if(q===-1)q=s
p=new A.jA(new A.eY(r,q),this,o,$.by())
p.w=p.EQ()
n.push(p)
r=q}++r}return n},
Eo(){var s,r,q,p=this.aq
if(p==null)return
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.P)(p),++r){q=p[r]
q.y2$=$.by()
q.y1$=0}this.aq=null},
a8(){var s=this.aq
if(s!=null)B.c.Y(s,new A.a4I())
this.P9()},
m(){var s=this
s.xf()
s.aq=null
s.L.m()
s.i5()},
wc(a){this.b_=A.a([],t.e9)
a.aT(new A.a4F(this))},
sB3(a,b){var s=this.L
if(s.f===b)return
s.sB3(0,b)
this.ar()},
sbH(a){var s=this.L
if(s.r===a)return
s.sbH(a)
this.a8()},
sNx(a){if(this.bB===a)return
this.bB=a
this.a8()},
sa5x(a,b){var s,r=this
if(r.cd===b)return
r.cd=b
s=b===B.bm?"\u2026":null
r.L.sa2q(s)
r.a8()},
sB4(a){var s=this.L
if(s.w===a)return
s.sB4(a)
this.bN=null
this.a8()},
szZ(a){var s=this.L
if(s.z==a)return
s.szZ(a)
this.bN=null
this.a8()},
szU(a,b){var s=this.L
if(J.f(s.y,b))return
s.szU(0,b)
this.bN=null
this.a8()},
sNG(a){return},
sB5(a){var s=this.L
if(s.as===a)return
s.sB5(a)
this.bN=null
this.a8()},
sLW(a){return},
sN6(a){var s,r=this
if(J.f(r.cl,a))return
r.cl=a
s=r.aq
s=s==null?null:B.c.kh(s,new A.a4K())
if(s===!0)r.ar()},
qt(a){var s,r=this,q=r.BF(a,B.a_)
r.iR(t.k.a(A.z.prototype.ga1.call(r)))
s=r.L
s.E4(a,B.a_)
s=s.db
s===$&&A.b()
s=s.b
return q.V(0,new A.t(0,s==null?0:s))},
eO(a){this.iR(t.k.a(A.z.prototype.ga1.call(this)))
return this.L.eO(B.H)},
jo(a){return!0},
cS(a,b){var s,r,q,p,o,n,m,l,k,j={},i=this.L,h=i.a.hW(b),g=i.d.MQ(h)
if(g!=null&&!0){a.C(0,new A.hN(t.kZ.a(g),t.Cq))
s=!0}else s=!1
r=j.a=this.av$
q=A.n(this).h("av.1")
p=t.lO
o=0
while(!0){if(!(r!=null&&o<i.ax.length))break
r=r.e
r.toString
p.a(r)
n=r.a
m=new Float64Array(16)
l=new A.bf(m)
l.dd()
m[14]=0
m[13]=n.b
m[12]=n.a
n=r.e
l.hY(0,n,n,n)
if(a.y7(new A.a4H(j,b,r),b,l))return!0
r=j.a.e
r.toString
k=q.a(r).al$
j.a=k;++o
r=k}return s},
Fr(a,b){var s=this.bB||this.cd===B.bm?a:1/0
this.L.zR(s,b)},
vl(){var s=this,r=$.bP,q=r.CW$
switch(q.a){case 0:case 4:if(s.fW)return
s.fW=!0
r.q_(new A.a4L(s,q))
break
case 1:case 2:case 3:s.CU()
s.L.a8()
break}},
iR(a){this.L.uV(this.eo)
this.Fr(a.b,a.a)},
Fp(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.dt$
if(i===0)return A.a([],t.aE)
s=j.av$
r=A.aR(i,B.TK,!1,t.cP)
q=new A.aQ(0,a.b,0,1/0).cX(0,j.L.w)
for(i=A.n(j).h("av.1"),p=!b,o=0;s!=null;){if(p){s.cu(q,!0)
n=s.k3
n.toString
m=j.b_
m===$&&A.b()
switch(m[o].gej()){case B.lj:l=s.MB(j.b_[o].grv())
break
case B.lk:case B.ll:case B.fy:case B.ln:case B.lm:l=null
break
default:l=null}k=n}else{k=s.h8(q)
l=null}n=j.b_
n===$&&A.b()
r[o]=new A.mD(k,n[o].gej(),l,j.b_[o].grv())
n=s.e
n.toString
s=i.a(n).al$;++o}return r},
WP(a){return this.Fp(a,!1)},
Zp(){var s,r,q=this.av$,p=t.lO,o=this.L,n=A.n(this).h("av.1"),m=0
while(!0){if(!(q!=null&&m<o.ax.length))break
s=q.e
s.toString
p.a(s)
r=o.ax[m]
s.a=new A.t(r.a,r.b)
s.e=o.ay[m]
q=n.a(s).al$;++m}},
Sr(){var s,r,q=this.b_
q===$&&A.b()
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.P)(q),++r)switch(q[r].gej()){case B.lj:case B.lk:case B.ll:return!1
case B.lm:case B.ln:case B.fy:continue}return!0},
cc(a){var s,r,q=this
if(!q.Sr())return B.R
s=q.L
s.uV(q.Fp(a,!0))
q.Fr(a.b,a.a)
r=s.gbj(s)
s=s.a
return a.by(new A.a6(r,Math.ceil(s.gbQ(s))))},
bG(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=t.k.a(A.z.prototype.ga1.call(i))
i.eo=i.WP(g)
i.iR(g)
i.Zp()
s=i.L
r=s.gbj(s)
q=s.a
q=Math.ceil(q.gbQ(q))
p=s.a.ga2g()
o=i.k3=g.by(new A.a6(r,q))
n=o.b<q||p
m=o.a<r
if(m||n)switch(i.cd.a){case 3:i.ce=!1
i.bN=null
break
case 0:case 2:i.ce=!0
i.bN=null
break
case 1:i.ce=!0
r=A.aa_(h,s.d.a,"\u2026")
q=s.r
q.toString
o=s.w
l=A.a9Y(h,s.y,h,h,r,B.bI,q,h,o,B.aQ)
l.a4N()
if(m){switch(s.r.a){case 0:k=l.gbj(l)
j=0
break
case 1:j=i.k3.a
k=j-l.gbj(l)
break
default:k=h
j=k}i.bN=A.ajz(new A.t(k,0),new A.t(j,0),A.a([B.k,B.n8],t.bk),h,B.cP,h)}else{j=i.k3.b
s=l.a
i.bN=A.ajz(new A.t(0,j-Math.ceil(s.gbQ(s))/2),new A.t(0,j),A.a([B.k,B.n8],t.bk),h,B.cP,h)}l.m()
break}else{i.ce=!1
i.bN=null}},
aH(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e={}
f.iR(t.k.a(A.z.prototype.ga1.call(f)))
if(f.ce){s=f.k3
r=b.a
q=b.b
p=new A.C(r,q,r+s.a,q+s.b)
if(f.bN!=null)a.gbE(a).BR(p,$.aq().bg())
else a.gbE(a).cA(0)
a.gbE(a).kl(p)}s=f.L
s.aH(a.gbE(a),b)
r=e.a=f.av$
q=t.lO
o=b.a
n=b.b
m=A.n(f).h("av.1")
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
a.a5R(j,new A.t(o+r.a,n+r.b),A.v3(k,k,k),new A.a4J(e))
k=e.a.e
k.toString
i=m.a(k).al$
e.a=i;++l
r=i}if(f.ce){if(f.bN!=null){a.gbE(a).aB(0,o,n)
h=$.aq().bg()
h.sa0p(B.CV)
h.sC9(f.bN)
s=a.gbE(a)
r=f.k3
s.cj(new A.C(0,0,0+r.a,0+r.b),h)}a.gbE(a).cv(0)}s=f.aq
if(s!=null)for(r=s.length,g=0;g<s.length;s.length===r||(0,A.P)(s),++g)s[g].aH(a,b)
f.Pg(a,b)},
BF(a,b){var s
this.iR(t.k.a(A.z.prototype.ga1.call(this)))
s=this.L
s.E4(a,b)
s=s.db
s===$&&A.b()
return s.a},
By(a){this.iR(t.k.a(A.z.prototype.ga1.call(this)))
return this.L.a.uz(a.a,a.b,B.mn,B.hd)},
hW(a){this.iR(t.k.a(A.z.prototype.ga1.call(this)))
return this.L.a.hW(a)},
mT(a){this.iR(t.k.a(A.z.prototype.ga1.call(this)))
return this.L.a.mT(a)},
eR(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.hf(a)
s=d.L
r=s.d
r.toString
q=A.a([],t.lF)
r.a1c(q)
d.ep=q
if(B.c.kh(q,new A.a4G()))a.a=a.b=!0
else{r=d.u
if(r==null){p=new A.bw("")
o=A.a([],t.ve)
for(r=d.ep,n=r.length,m=0,l=0,k="";l<r.length;r.length===n||(0,A.P)(r),++l){j=r[l]
i=j.b
if(i==null)i=j.a
for(k=j.f,h=k.length,g=0;g<k.length;k.length===h||(0,A.P)(k),++g){f=k[g]
e=f.a
o.push(f.ID(new A.eY(m+e.a,m+e.b)))}k=p.a+=i
m+=i.length}r=d.u=new A.cr(k.charCodeAt(0)==0?k:k,o)}a.p4=r
a.d=!0
s=s.r
s.toString
a.y1=s}},
o6(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=A.a([],t.T),b0=a7.L,b1=b0.r
b1.toString
s=A.hU(a8,a8,a8,t.qI,t.ju)
r=a7.K
if(r==null){r=a7.ep
r.toString
r=a7.K=A.aDj(r)}for(q=r.length,p=t.k,o=b1,n=0,m=0,l=0;l<r.length;r.length===q||(0,A.P)(r),++l,m=j){k=r[l]
b1=k.a
j=m+b1.length
i=m<j
h=i?m:j
i=i?j:m
g=p.a(A.z.prototype.ga1.call(a7))
b0.uV(a7.eo)
f=g.b
f=a7.bB||a7.cd===B.bm?f:1/0
b0.zR(f,g.a)
e=b0.a.uz(h,i,B.mn,B.hd)
if(e.length===0)continue
i=B.c.gJ(e)
d=new A.C(i.a,i.b,i.c,i.d)
c=B.c.gJ(e).e
for(i=A.aj(e),h=new A.eX(e,1,a8,i.h("eX<1>")),h.qd(e,1,a8,i.c),h=new A.bT(h,h.gp(h)),i=A.n(h).c;h.q();){g=h.d
if(g==null)g=i.a(g)
d=d.oH(new A.C(g.a,g.b,g.c,g.d))
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
a0=new A.C(b,a,i,g)
a1=A.pC()
a2=n+1
a1.id=new A.vz(n,a8)
a1.d=!0
a1.y1=o
f=k.b
b1=f==null?b1:f
a1.p4=new A.cr(b1,k.f)
b1=b2.y
if(b1!=null){a3=b1.fs(a0)
if(a3.a>=a3.c||a3.b>=a3.d)b1=!(b>=i||a>=g)
else b1=!1
a1.b5(B.lA,b1)}a4=A.b6("newChild")
b1=a7.dJ
i=b1==null?a8:b1.a!==0
if(i===!0){b1.toString
i=new A.b8(b1,A.n(b1).h("b8<1>"))
a5=i.ga4(i)
if(!a5.q())A.K(A.bO())
b1=b1.v(0,a5.gF(a5))
b1.toString
if(a4.b!==a4)A.K(A.a1k(a4.a))
a4.b=b1}else{a6=new A.jp()
b1=A.a6y(a6,a7.Ta(a6))
if(a4.b!==a4)A.K(A.a1k(a4.a))
a4.b=b1}if(b1===a4)A.K(A.h5(a4.a))
J.aux(b1,a1)
if(!b1.w.k(0,a0)){b1.w=a0
b1.ia()}b1=a4.b
if(b1===a4)A.K(A.h5(a4.a))
i=b1.d
i.toString
s.l(0,i,b1)
b1=a4.b
if(b1===a4)A.K(A.h5(a4.a))
a9.push(b1)
n=a2
o=c}a7.dJ=s
b2.jK(0,a9,b3)},
Ta(a){return new A.a4E(this,a)},
lR(){this.ve()
this.dJ=null}}
A.a4I.prototype={
$1(a){return a.x=null},
$S:244}
A.a4F.prototype={
$1(a){return!0},
$S:40}
A.a4K.prototype={
$1(a){var s=a.w
s===$&&A.b()
return s.c!==B.cL},
$S:245}
A.a4H.prototype={
$2(a,b){return this.a.a.bX(a,b)},
$S:15}
A.a4L.prototype={
$1(a){var s=this.a
s.fW=!1
if(s.b!=null){s.CU()
s.L.a8()}},
$S:2}
A.a4J.prototype={
$2(a,b){var s=this.a.a
s.toString
a.f1(s,b)},
$S:11}
A.a4G.prototype={
$1(a){return!1},
$S:246}
A.a4E.prototype={
$0(){var s=this.a,r=s.dJ.j(0,this.b)
r.toString
s.l3(s,r.w)},
$S:0}
A.jA.prototype={
gn(a){var s=this.w
s===$&&A.b()
return s},
Y1(){var s=this,r=s.EQ(),q=s.w
q===$&&A.b()
if(q.k(0,r))return
s.w=r
s.aA()},
EQ(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f==null||g.e==null)return B.Ul
s=f.a
r=g.e.a
f=g.b
q=f.qt(new A.b0(s,B.C))
p=s===r?q:f.qt(new A.b0(r,B.C))
f=f.L
o=f.r
o.toString
n=s>r!==(B.X===o)
m=A.v4(g.gfH().a,g.gfH().b,0)
m.hy(m)
o=A.cw(m,q)
l=f.gua()
k=n?B.C7:B.C6
j=A.cw(m,p)
f=f.gua()
i=n?B.C6:B.C7
h=g.d.a===g.e.a?B.Un:B.lz
return new A.kO(new A.n1(o,l,k),new A.n1(j,f,i),h,!0)},
t1(a){var s=this,r=A.b6("result"),q=s.d,p=s.e,o=a.a
switch(o.a){case 0:case 1:r.sc3(s.a_o(t.ib.a(a).b,o===B.dM))
break
case 2:s.e=s.d=null
r.sc3(B.cK)
break
case 3:o=s.a
s.d=new A.b0(o.a,B.C)
s.e=new A.b0(o.b,B.M)
r.sc3(B.cK)
break
case 4:r.sc3(s.W1(t.k2.a(a).gBN()))
break
case 5:t.uQ.a(a)
r.sc3(s.Vl(a.gJN(a),a.gfZ(),a.ga7l()))
break
case 6:t.sQ.a(a)
r.sc3(s.V1(a.gz3(a),a.gfZ(),a.gJ0(a)))
break}if(!J.f(q,s.d)||!J.f(p,s.e)){s.b.ar()
s.Y1()}return r.aD()},
a_o(a,b){var s,r,q,p,o,n,m=this
if(b)m.e=null
else m.d=null
s=m.b
r=s.bw(0,null)
r.hy(r)
q=A.cw(r,a)
p=m.gfH()
if(p.gO(p))return A.aoA(m.gfH(),q)
p=m.gfH()
o=s.L.r
o.toString
n=m.qg(s.hW(A.azd(p,q,o)))
if(b)m.e=n
else m.d=n
s=n.a
p=m.a
if(s===p.b)return B.b6
if(s===p.a)return B.b7
return A.aoA(m.gfH(),q)},
qg(a){var s,r=a.a,q=this.a,p=q.b
if(r<=p)s=r===p&&a.b===B.C
else s=!0
if(s)return new A.b0(p,B.M)
q=q.a
if(r<q)return new A.b0(q,B.C)
return a},
W1(a){var s,r,q,p,o=this,n=o.b,m=n.hW(n.kZ(a))
if(o.Ym(m))return B.ar
s=n.mT(m)
r=A.b6("start")
q=A.b6("end")
n=m.a
p=s.b
if(n>=p)r.b=q.b=new A.b0(n,B.C)
else{r.b=new A.b0(s.a,B.C)
q.b=new A.b0(p,B.M)}o.d=r.aD()
o.e=q.aD()
return B.ar},
V1(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.bw(0,null)
if(j.hy(j)===0)switch(c){case B.fC:case B.dO:return B.b7
case B.fD:case B.dN:return B.b6}s=A.cw(j,new A.t(a,0)).a
switch(c){case B.fC:case B.fD:if(b){k=l.e
k.toString
r=k}else{k=l.d
k.toString
r=k}q=l.Wn(r,!1,s)
p=q.a
o=q.b
break
case B.dN:case B.dO:n=l.e
if(n==null){n=new A.b0(l.a.b,B.M)
l.e=n
r=n}else r=n
n=l.d
if(n==null){l.d=r
m=r}else m=n
p=k.hW(new A.t(s,k.qt(b?r:m).b-k.L.gua()/2))
o=B.ar
break
default:p=null
o=null}if(b)l.e=p
else l.d=p
return o},
Vl(a,b,c){var s,r,q,p,o,n,m=this,l=m.e
if(l==null){l=m.a
l=a?new A.b0(l.a,B.C):new A.b0(l.b,B.M)
m.e=l
s=l}else s=l
l=m.d
if(l==null){m.d=s
r=s}else r=l
s=b?s:r
if(a&&s.a===m.a.b)return B.b6
l=!a
if(l&&s.a===m.a.a)return B.b7
switch(c){case B.W8:l=m.a
q=m.qs(new A.Vj(B.b.T(m.c,l.a,l.b)),s,a)
p=B.ar
break
case B.W9:l=m.a
q=m.qs(new A.Nl(new A.aaH(m),new A.aaF(B.b.T(m.c,l.a,l.b))),s,a)
p=B.ar
break
case B.Wa:q=m.qs(new A.a1n(m),s,a)
p=B.ar
break
case B.Wb:o=m.a
n=o.a
o=o.b
q=m.qs(new A.WE(B.b.T(m.c,n,o)),s,a)
if(a&&q.a===o)p=B.b6
else p=l&&q.a===n?B.b7:B.ar
break
default:p=null
q=null}if(b)m.e=q
else m.d=q
return p},
qs(a,b,c){if(c)return this.qg(a.ha(B.TS.ha(b)))
return this.qg(a.h9(B.TR.h9(b)))},
Wn(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.L,i=j.fr
if(i==null)i=j.fr=j.a.a1b()
s=k.BF(a,B.a_)
j=i.length
r=j-1
for(q=s.b,p=0;p<i.length;i.length===j||(0,A.P)(i),++p){o=i[p]
if(o.grv()>q){r=J.au6(o)
break}}if(b&&r===i.length-1)n=new A.b0(l.a.b,B.M)
else if(!b&&r===0)n=new A.b0(l.a.a,B.C)
else n=l.qg(k.hW(new A.t(c,i[b?r+1:r-1].grv())))
k=n.a
j=l.a
if(k===j.a)m=B.b7
else m=k===j.b?B.b6:B.ar
return new A.al(n,m,t.nz)},
Ym(a){var s,r,q,p,o=this
if(o.d==null||o.e==null)return!1
s=A.b6("currentStart")
r=A.b6("currentEnd")
q=o.d
q.toString
p=o.e
p.toString
if(A.akH(q,p)>0){s.b=q
r.b=p}else{s.b=p
r.b=q}return A.akH(s.aD(),a)>=0&&A.akH(r.aD(),a)<=0},
bw(a,b){var s=A.v4(this.gfH().a,this.gfH().b,0)
s.cI(0,this.b.bw(0,b))
return s},
hQ(a,b){if(this.b.b==null)return},
gfH(){var s,r,q,p,o,n,m=this,l=m.x
if(l==null){l=m.b
s=m.a
r=s.a
q=l.By(A.a9Z(B.C,r,s.b,!1))
if(q.length!==0){l=B.c.gJ(q)
p=new A.C(l.a,l.b,l.c,l.d)
for(o=1;o<q.length;++o){l=q[o]
p=p.oH(new A.C(l.a,l.b,l.c,l.d))}m.x=p
l=p}else{n=l.qt(new A.b0(r,B.C))
l=A.ak4(n,new A.t(n.a+0,n.b+-l.L.gua()))
m.x=l}}return l},
gcM(a){var s=this.gfH()
return new A.a6(s.c-s.a,s.d-s.b)},
aH(a,b){var s,r,q,p,o,n=this,m=n.d
if(m==null||n.e==null)return
s=n.b
if(s.cl!=null){r=A.a9Z(B.C,m.a,n.e.a,!1)
q=$.aq().bg()
q.scC(0,B.aP)
m=s.cl
m.toString
q.saf(0,m)
for(m=s.By(r),s=m.length,p=0;p<m.length;m.length===s||(0,A.P)(m),++p){o=m[p]
a.gbE(a).cj(new A.C(o.a,o.b,o.c,o.d).df(b),q)}}A.v4(n.gfH().a,n.gfH().b,0)},
BD(a){var s=this.b.L.a.ME(a),r=this.a,q=r.a
r=r.b
return A.a9Z(B.C,B.f.j1(s.a,q,r),B.f.j1(s.b,q,r),!1)},
$iac:1}
A.z6.prototype={
an(a){var s,r,q
this.eB(a)
s=this.av$
for(r=t.lO;s!=null;){s.an(a)
q=s.e
q.toString
s=r.a(q).al$}},
ag(a){var s,r,q
this.dU(0)
s=this.av$
for(r=t.lO;s!=null;){s.ag(0)
q=s.e
q.toString
s=r.a(q).al$}}}
A.PZ.prototype={}
A.Q_.prototype={
an(a){this.Qi(a)
$.eS.za$.a.C(0,this.gD9())},
ag(a){$.eS.za$.a.v(0,this.gD9())
this.Qj(0)}}
A.Sv.prototype={}
A.Sw.prototype={}
A.JF.prototype={
sa5w(a){if(a===this.L)return
this.L=a
this.ar()},
sa5V(a){if(a===this.u)return
this.u=a
this.ar()},
sa0H(a){return},
sa0G(a){return},
gjU(){return!0},
go_(){return!0},
gWG(){var s=this.L,r=(s|1)>>>0>0||(s|2)>>>0>0?80:0
return(s|4)>>>0>0||(s|8)>>>0>0?r+80:r},
cc(a){return a.by(new A.a6(1/0,this.gWG()))},
aH(a,b){var s=b.a,r=b.b,q=this.k3
q=new A.IO(new A.C(s,r,s+q.a,r+q.b),this.L,this.u,!1,!1,A.y(t.S,t.M),A.aw())
q.i6()
a.n7()
a.yc(q)}}
A.JK.prototype={}
A.eU.prototype={
ex(a){if(!(a.e instanceof A.cg))a.e=new A.cg()},
cc(a){var s=this.u$
if(s!=null)return s.h8(a)
return this.oe(a)},
bG(){var s=this,r=s.u$,q=t.k
if(r!=null){r.cu(q.a(A.z.prototype.ga1.call(s)),!0)
r=s.u$.k3
r.toString
s.k3=r}else s.k3=s.oe(q.a(A.z.prototype.ga1.call(s)))},
oe(a){return new A.a6(A.H(0,a.a,a.b),A.H(0,a.c,a.d))},
cS(a,b){var s=this.u$
s=s==null?null:s.bX(a,b)
return s===!0},
dn(a,b){},
aH(a,b){var s=this.u$
if(s!=null)a.f1(s,b)}}
A.oC.prototype={
E(){return"HitTestBehavior."+this.b}}
A.w8.prototype={
bX(a,b){var s,r=this
if(r.k3.B(0,b)){s=r.cS(a,b)||r.A===B.aD
if(s||r.A===B.d5)a.C(0,new A.o5(b,r))}else s=!1
return s},
jo(a){return this.A===B.aD}}
A.Jq.prototype={
sI1(a){if(this.A.k(0,a))return
this.A=a
this.a8()},
bG(){var s=this,r=t.k.a(A.z.prototype.ga1.call(s)),q=s.u$,p=s.A
if(q!=null){q.cu(p.oE(r),!0)
q=s.u$.k3
q.toString
s.k3=q}else s.k3=p.oE(r).by(B.R)},
cc(a){var s=this.u$,r=this.A
if(s!=null)return s.h8(r.oE(a))
else return r.oE(a).by(B.R)}}
A.JA.prototype={
sa57(a,b){if(this.A===b)return
this.A=b
this.a8()},
sa54(a,b){if(this.U===b)return
this.U=b
this.a8()},
Fs(a){var s,r,q=a.a,p=a.b
p=p<1/0?p:A.H(this.A,q,p)
s=a.c
r=a.d
return new A.aQ(q,p,s,r<1/0?r:A.H(this.U,s,r))},
G2(a,b){var s=this.u$
if(s!=null)return a.by(b.$2(s,this.Fs(a)))
return this.Fs(a).by(B.R)},
cc(a){return this.G2(a,A.ai9())},
bG(){this.k3=this.G2(t.k.a(A.z.prototype.ga1.call(this)),A.aia())}}
A.w3.prototype={
gdL(){if(this.u$!=null){var s=this.ze$
s.toString}else s=!1
return s},
pI(a){var s=a==null?A.anZ():a
s.sI3(0,this.m7$)
return s},
su0(a,b){var s=this,r=s.m8$
if(r===b)return
if(s.b!=null&&r!=null)r.G(0,s.gra())
s.m8$=b
if(s.b!=null)b.Z(0,s.gra())
s.xO()},
sI4(a){if(!1===this.zf$)return
this.zf$=!1
this.b2()},
xO(){var s,r=this,q=r.m7$,p=r.m8$
p=r.m7$=B.d.b8(A.alj(p.gn(p),0,1)*255)
if(q!==p){s=r.ze$
p=p>0
r.ze$=p
if(r.u$!=null&&s!==p)r.mw()
r.a50()
if(q===0||r.m7$===0)r.b2()}},
mE(a){var s=this.m8$
return s.gn(s)>0},
h7(a){var s,r=this.u$
if(r!=null)if(this.m7$===0){s=this.zf$
s.toString}else s=!0
else s=!1
if(s){r.toString
a.$1(r)}}}
A.Jm.prototype={}
A.tf.prototype={
Z(a,b){return null},
G(a,b){return null},
i(a){return"CustomClipper"}}
A.n4.prototype={
Bz(a){return this.b.fB(new A.C(0,0,0+a.a,0+a.b),this.c)},
Cb(a){if(A.A(a)!==B.a_7)return!0
t.qm.a(a)
return!a.b.k(0,this.b)||a.c!=this.c}}
A.qV.prototype={
soc(a){var s,r=this,q=r.A
if(q==a)return
r.A=a
s=a==null
if(s||q==null||A.A(a)!==A.A(q)||a.Cb(q))r.qH()
if(r.b!=null){if(q!=null)q.G(0,r.gqG())
if(!s)a.Z(0,r.gqG())}},
an(a){var s
this.nd(a)
s=this.A
if(s!=null)s.Z(0,this.gqG())},
ag(a){var s=this.A
if(s!=null)s.G(0,this.gqG())
this.le(0)},
qH(){this.U=null
this.ar()
this.b2()},
srH(a){if(a!==this.az){this.az=a
this.ar()}},
bG(){var s,r=this,q=r.k3
q=q!=null?q:null
r.vh()
s=r.k3
s.toString
if(!J.f(q,s))r.U=null},
iY(){var s,r,q=this
if(q.U==null){s=q.A
if(s==null)s=null
else{r=q.k3
r.toString
r=s.Bz(r)
s=r}q.U=s==null?q.gqj():s}},
j3(a){var s,r=this
switch(r.az.a){case 0:return null
case 1:case 2:case 3:if(r.A==null)s=null
else{s=r.k3
s=new A.C(0,0,0+s.a,0+s.b)}if(s==null){s=r.k3
s=new A.C(0,0,0+s.a,0+s.b)}return s}},
m(){this.cm=null
this.i5()}}
A.Jp.prototype={
gqj(){var s=this.k3
return new A.C(0,0,0+s.a,0+s.b)},
bX(a,b){var s=this
if(s.A!=null){s.iY()
if(!s.U.B(0,b))return!1}return s.iL(a,b)},
aH(a,b){var s,r,q=this,p=q.u$
if(p!=null){s=q.ch
if(q.az!==B.l){q.iY()
p=q.cx
p===$&&A.b()
r=q.U
r.toString
s.saZ(0,a.kN(p,b,r,A.eU.prototype.gmD.call(q),q.az,t.iM.a(s.a)))}else{a.f1(p,b)
s.saZ(0,null)}}else q.ch.saZ(0,null)}}
A.Jo.prototype={
gqj(){var s=$.aq().cp(),r=this.k3
s.nX(new A.C(0,0,0+r.a,0+r.b))
return s},
bX(a,b){var s=this
if(s.A!=null){s.iY()
if(!s.U.B(0,b))return!1}return s.iL(a,b)},
aH(a,b){var s,r,q,p,o=this,n=o.u$
if(n!=null){s=o.ch
if(o.az!==B.l){o.iY()
n=o.cx
n===$&&A.b()
r=o.k3
q=r.a
r=r.b
p=o.U
p.toString
s.saZ(0,a.Ll(n,b,new A.C(0,0,0+q,0+r),p,A.eU.prototype.gmD.call(o),o.az,t.n0.a(s.a)))}else{a.f1(n,b)
s.saZ(0,null)}}else o.ch.saZ(0,null)}}
A.z7.prototype={
sik(a,b){if(this.aX===b)return
this.aX=b
this.ar()},
shb(a,b){if(this.bA.k(0,b))return
this.bA=b
this.ar()},
saf(a,b){if(this.e0.k(0,b))return
this.e0=b
this.ar()},
eR(a){this.hf(a)
a.sik(0,this.aX)}}
A.JG.prototype={
sde(a,b){if(this.zc===b)return
this.zc=b
this.qH()},
sa0r(a,b){if(J.f(this.zd,b))return
this.zd=b
this.qH()},
gqj(){var s,r,q=this.k3,p=0+q.a
q=0+q.b
switch(this.zc.a){case 0:s=this.zd
if(s==null)s=B.aA
return s.dA(new A.C(0,0,p,q))
case 1:s=(p-0)/2
r=(q-0)/2
return new A.i5(0,0,p,q,s,r,s,r,s,r,s,r,s===r)}},
bX(a,b){var s=this
if(s.A!=null){s.iY()
if(!s.U.B(0,b))return!1}return s.iL(a,b)},
aH(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.u$==null){i.ch.saZ(0,null)
return}i.iY()
s=i.U.df(b)
r=$.aq()
q=r.cp()
q.eK(s)
p=a.gbE(a)
if(i.aX!==0&&!0){p.cj(new A.C(s.a,s.b,s.c,s.d).d6(20),$.am3())
o=i.bA
n=i.aX
m=i.e0
p.oC(q,o,n,(m.gn(m)>>>24&255)!==255)}l=i.az===B.hs
if(!l){r=r.bg()
r.saf(0,i.e0)
p.d2(s,r)}r=i.cx
r===$&&A.b()
o=i.k3
n=o.a
o=o.b
m=i.U
m.toString
k=i.ch
j=t.bG.a(k.a)
k.saZ(0,a.a5N(r,b,new A.C(0,0,0+n,0+o),m,new A.a4M(i,l),i.az,j))}}
A.a4M.prototype={
$2(a,b){var s,r
if(this.b){s=a.gbE(a)
r=$.aq().bg()
r.saf(0,this.a.e0)
s.oB(r)}this.a.hg(a,b)},
$S:11}
A.JH.prototype={
gqj(){var s=$.aq().cp(),r=this.k3
s.nX(new A.C(0,0,0+r.a,0+r.b))
return s},
bX(a,b){var s=this
if(s.A!=null){s.iY()
if(!s.U.B(0,b))return!1}return s.iL(a,b)},
aH(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(j.u$==null){j.ch.saZ(0,null)
return}j.iY()
s=j.k3
r=b.a
q=b.b
p=s.a
s=s.b
o=j.U.df(b)
n=a.gbE(a)
if(j.aX!==0&&!0){n.cj(new A.C(r,q,r+p,q+s).d6(20),$.am3())
s=j.bA
r=j.aX
q=j.e0
n.oC(o,s,r,(q.gn(q)>>>24&255)!==255)}m=j.az===B.hs
if(!m){s=$.aq().bg()
s.saf(0,j.e0)
n.dG(o,s)}s=j.cx
s===$&&A.b()
r=j.k3
q=r.a
r=r.b
p=j.U
p.toString
l=j.ch
k=t.n0.a(l.a)
l.saZ(0,a.Ll(s,b,new A.C(0,0,0+q,0+r),p,new A.a4N(j,m),j.az,k))}}
A.a4N.prototype={
$2(a,b){var s,r
if(this.b){s=a.gbE(a)
r=$.aq().bg()
r.saf(0,this.a.e0)
s.oB(r)}this.a.hg(a,b)},
$S:11}
A.tl.prototype={
E(){return"DecorationPosition."+this.b}}
A.Ju.prototype={
sa22(a){var s,r=this
if(a.k(0,r.U))return
s=r.A
if(s!=null)s.m()
r.A=null
r.U=a
r.ar()},
sbv(a,b){if(b===this.az)return
this.az=b
this.ar()},
sys(a){if(a.k(0,this.bu))return
this.bu=a
this.ar()},
ag(a){var s=this,r=s.A
if(r!=null)r.m()
s.A=null
s.le(0)
s.ar()},
jo(a){var s=this.U,r=this.k3
r.toString
return s.K4(r,a,this.bu.d)},
aH(a,b){var s,r,q,p=this,o=p.A
if(o==null)o=p.A=p.U.rM(p.ge6())
s=p.bu
r=p.k3
r.toString
q=new A.oF(s.a,s.b,s.c,s.d,r,s.f)
if(p.az===B.hB){o.po(a.gbE(a),b,q)
if(p.U.gzI())a.C5()}p.hg(a,b)
if(p.az===B.Fy){o=p.A
o.toString
o.po(a.gbE(a),b,q)
if(p.U.gzI())a.C5()}}}
A.JQ.prototype={
sL8(a,b){return},
sej(a){var s=this
if(J.f(s.U,a))return
s.U=a
s.ar()
s.b2()},
sbH(a){var s=this
if(s.az==a)return
s.az=a
s.ar()
s.b2()},
go_(){return!1},
sbp(a,b){var s,r=this
if(J.f(r.cm,b))return
s=new A.bf(new Float64Array(16))
s.bc(b)
r.cm=s
r.ar()
r.b2()},
smg(a){return},
gw7(){var s,r,q=this,p=q.U,o=p==null?null:p.W(q.az)
if(o==null)return q.cm
s=new A.bf(new Float64Array(16))
s.dd()
p=q.k3
p.toString
r=o.a0d(p)
s.aB(0,r.a,r.b)
p=q.cm
p.toString
s.cI(0,p)
s.aB(0,-r.a,-r.b)
return s},
bX(a,b){return this.cS(a,b)},
cS(a,b){var s=this.bu?this.gw7():null
return a.y7(new A.a4W(this),b,s)},
aH(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
if(a.u$!=null){s=a.gw7()
s.toString
r=A.a1O(s)
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
if(b===0||!isFinite(b)){a.ch.saZ(0,null)
return}q=a.cx
q===$&&A.b()
p=A.eU.prototype.gmD.call(a)
o=a.ch
n=o.a
o.saZ(0,a0.pu(q,a1,s,p,n instanceof A.kY?n:null))}else{a.hg(a0,a1.V(0,r))
a.ch.saZ(0,null)}}},
dn(a,b){var s=this.gw7()
s.toString
b.cI(0,s)}}
A.a4W.prototype={
$2(a,b){return this.a.qb(a,b)},
$S:15}
A.w5.prototype={
YR(){if(this.A!=null)return
this.A=this.az},
EC(a){switch(a.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
szj(a){var s=this,r=s.U
if(r===a)return
s.U=a
if(s.EC(r)||s.EC(a))s.a8()
else{s.bP=s.cm=null
s.ar()}},
sej(a){var s=this
if(s.az.k(0,a))return
s.az=a
s.A=s.bP=s.cm=null
s.ar()},
sbH(a){var s=this
if(s.bu==a)return
s.bu=a
s.A=s.bP=s.cm=null
s.ar()},
cc(a){var s,r=this.u$
if(r!=null){s=r.h8(B.bK)
switch(this.U.a){case 6:return a.by(new A.aQ(0,a.b,0,a.d).of(s))
case 1:case 2:case 0:case 4:case 3:case 5:return a.of(s)}}else return new A.a6(A.H(0,a.a,a.b),A.H(0,a.c,a.d))},
bG(){var s,r,q,p=this,o=p.u$
if(o!=null){o.cu(B.bK,!0)
switch(p.U.a){case 6:o=t.k
s=o.a(A.z.prototype.ga1.call(p))
r=p.u$.k3
r.toString
q=new A.aQ(0,s.b,0,s.d).of(r)
p.k3=o.a(A.z.prototype.ga1.call(p)).by(q)
break
case 1:case 2:case 0:case 4:case 3:case 5:o=t.k.a(A.z.prototype.ga1.call(p))
s=p.u$.k3
s.toString
p.k3=o.of(s)
break}p.bP=p.cm=null}else{o=t.k.a(A.z.prototype.ga1.call(p))
p.k3=new A.a6(A.H(0,o.a,o.b),A.H(0,o.c,o.d))}},
xP(){var s,r,q,p,o,n,m,l,k,j=this
if(j.bP!=null)return
if(j.u$==null){j.cm=!1
s=new A.bf(new Float64Array(16))
s.dd()
j.bP=s}else{j.YR()
s=j.u$.k3
s.toString
r=j.U
q=j.k3
q.toString
p=A.aqK(r,s,q)
q=p.b
r=p.a
o=s.a
s=s.b
n=j.A.zC(r,new A.C(0,0,0+o,0+s))
m=j.A
m.toString
l=j.k3
k=m.zC(q,new A.C(0,0,0+l.a,0+l.b))
m=n.a
j.cm=n.c-m<o||n.d-n.b<s
s=A.v4(k.a,k.b,0)
s.hY(0,q.a/r.a,q.b/r.b,1)
s.aB(0,-m,-n.b)
j.bP=s}},
FN(a,b){var s,r,q,p,o=this,n=o.bP
n.toString
s=A.a1O(n)
if(s==null){n=o.cx
n===$&&A.b()
r=o.bP
r.toString
q=A.eU.prototype.gmD.call(o)
p=o.ch.a
return a.pu(n,b,r,q,p instanceof A.kY?p:null)}else o.hg(a,b.V(0,s))
return null},
aH(a,b){var s,r,q,p,o,n=this
if(n.u$!=null){s=n.k3
if(!s.gO(s)){s=n.u$.k3
s=s.gO(s)}else s=!0}else s=!0
if(s)return
n.xP()
s=n.cm
s.toString
if(s&&n.e2!==B.l){s=n.cx
s===$&&A.b()
r=n.k3
q=r.a
r=r.b
p=n.ch
o=p.a
o=o instanceof A.oc?o:null
p.saZ(0,a.kN(s,b,new A.C(0,0,0+q,0+r),n.gXW(),n.e2,o))}else n.ch.saZ(0,n.FN(a,b))},
cS(a,b){var s=this,r=s.k3
if(!r.gO(r)){r=s.u$
if(r==null)r=null
else{r=r.k3
r=r.gO(r)}r=r===!0}else r=!0
if(r)return!1
s.xP()
return a.y7(new A.a4s(s),b,s.bP)},
mE(a){var s=this.k3
if(!s.gO(s)){s=a.k3
s=!s.gO(s)}else s=!1
return s},
dn(a,b){var s=this.k3
if(!s.gO(s)){s=a.k3
s=!s.gO(s)}else s=!1
if(!s)b.C8()
else{this.xP()
s=this.bP
s.toString
b.cI(0,s)}}}
A.a4s.prototype={
$2(a,b){return this.a.qb(a,b)},
$S:15}
A.Jx.prototype={
sa6W(a){var s=this
if(s.A.k(0,a))return
s.A=a
s.ar()
s.b2()},
bX(a,b){return this.cS(a,b)},
cS(a,b){var s,r,q=this
if(q.U){s=q.A
r=q.k3
r=new A.t(s.a*r.a,s.b*r.b)
s=r}else s=null
return a.nY(new A.a4t(q),s,b)},
aH(a,b){var s,r,q=this
if(q.u$!=null){s=q.A
r=q.k3
q.hg(a,new A.t(b.a+s.a*r.a,b.b+s.b*r.b))}},
dn(a,b){var s=this.A,r=this.k3
b.aB(0,s.a*r.a,s.b*r.b)}}
A.a4t.prototype={
$2(a,b){return this.a.qb(a,b)},
$S:15}
A.JI.prototype={
oe(a){return new A.a6(A.H(1/0,a.a,a.b),A.H(1/0,a.c,a.d))},
is(a,b){var s,r=this,q=null
if(t.Y.b(a)){s=r.cQ
return s==null?q:s.$1(a)}if(t.c.b(a))return q
if(t.Cs.b(a)){s=r.au
return s==null?q:s.$1(a)}if(t.hV.b(a))return q
if(t.AJ.b(a)){s=r.aX
return s==null?q:s.$1(a)}if(t.EL.b(a)){s=r.bA
return s==null?q:s.$1(a)}if(t.r.b(a))return q
if(t.zv.b(a))return q
if(t.zs.b(a)){s=r.al
return s==null?q:s.$1(a)}}}
A.JC.prototype={
bX(a,b){return this.Pk(a,b)&&!0},
is(a,b){var s=this.au
if(s!=null&&t.hV.b(a))return s.$1(a)},
gIR(a){return this.aX},
gBq(){return this.bA},
an(a){this.nd(a)
this.bA=!0},
ag(a){this.bA=!1
this.le(0)},
oe(a){return new A.a6(A.H(1/0,a.a,a.b),A.H(1/0,a.c,a.d))},
$ij5:1,
gAm(a){return this.bz},
gAn(a){return this.b0}}
A.JL.prototype={
gdL(){return!0}}
A.w6.prototype={
sK8(a){var s,r=this
if(a===r.A)return
r.A=a
s=r.U
if(s==null||!s)r.b2()},
szA(a){var s=this,r=s.U
if(a==r)return
if(r==null)r=s.A
s.U=a
if(r!==(a==null?s.A:a))s.b2()},
bX(a,b){return!this.A&&this.iL(a,b)},
h7(a){var s,r=this.u$
if(r!=null){s=this.U
s=!(s==null?this.A:s)}else s=!1
if(s){r.toString
a.$1(r)}}}
A.JD.prototype={
stV(a){var s=this
if(a===s.A)return
s.A=a
s.a8()
s.tP()},
eO(a){if(this.A)return null
return this.D7(a)},
gjU(){return this.A},
cc(a){if(this.A)return new A.a6(A.H(0,a.a,a.b),A.H(0,a.c,a.d))
return this.Pj(a)},
pp(){this.Pa()},
bG(){var s,r=this
if(r.A){s=r.u$
if(s!=null)s.iz(t.k.a(A.z.prototype.ga1.call(r)))}else r.vh()},
bX(a,b){return!this.A&&this.iL(a,b)},
mE(a){return!this.A},
aH(a,b){if(this.A)return
this.hg(a,b)},
h7(a){if(this.A)return
this.vf(a)}}
A.w2.prototype={
sHT(a){if(this.A===a)return
this.A=a
this.b2()},
szA(a){return},
bX(a,b){return this.A?this.k3.B(0,b):this.iL(a,b)},
h7(a){var s,r,q=this.u$
if(q!=null){s=this.U
r=this.A
s=!r}else s=!1
if(s){q.toString
a.$1(q)}}}
A.jd.prototype={
sa75(a){if(A.alA(a,this.cQ))return
this.cQ=a
this.b2()},
sjy(a){var s,r=this
if(J.f(r.bz,a))return
s=r.bz
r.bz=a
if(a!=null!==(s!=null))r.b2()},
skL(a){var s,r=this
if(J.f(r.au,a))return
s=r.au
r.au=a
if(a!=null!==(s!=null))r.b2()},
sa5n(a){var s,r=this
if(J.f(r.b0,a))return
s=r.b0
r.b0=a
if(a!=null!==(s!=null))r.b2()},
sa5t(a){var s,r=this
if(J.f(r.aX,a))return
s=r.aX
r.aX=a
if(a!=null!==(s!=null))r.b2()},
eR(a){var s,r=this
r.hf(a)
if(r.bz!=null){s=r.cQ
s=s==null||s.B(0,B.dP)}else s=!1
if(s)a.sjy(r.bz)
if(r.au!=null){s=r.cQ
s=s==null||s.B(0,B.Bi)}else s=!1
if(s)a.skL(r.au)
if(r.b0!=null){s=r.cQ
if(s==null||s.B(0,B.dT))a.stZ(r.gYd())
s=r.cQ
if(s==null||s.B(0,B.dS))a.stY(r.gYb())}if(r.aX!=null){s=r.cQ
if(s==null||s.B(0,B.dQ))a.su_(r.gYf())
s=r.cQ
if(s==null||s.B(0,B.dR))a.stX(r.gY9())}},
Yc(){var s,r,q=this.b0
if(q!=null){s=this.k3
r=s.a*-0.8
s=s.j0(B.j)
s=A.cw(this.bw(0,null),s)
q.$1(new A.hK(null,new A.t(r,0),r,s))}},
Ye(){var s,r,q=this.b0
if(q!=null){s=this.k3
r=s.a*0.8
s=s.j0(B.j)
s=A.cw(this.bw(0,null),s)
q.$1(new A.hK(null,new A.t(r,0),r,s))}},
Yg(){var s,r,q=this.aX
if(q!=null){s=this.k3
r=s.b*-0.8
s=s.j0(B.j)
s=A.cw(this.bw(0,null),s)
q.$1(new A.hK(null,new A.t(0,r),r,s))}},
Ya(){var s,r,q=this.aX
if(q!=null){s=this.k3
r=s.b*0.8
s=s.j0(B.j)
s=A.cw(this.bw(0,null),s)
q.$1(new A.hK(null,new A.t(0,r),r,s))}}}
A.w9.prototype={
sLj(a){var s=this
if(s.A===a)return
s.A=a
s.Hj(a)
s.b2()},
sa1e(a){if(this.U===a)return
this.U=a
this.b2()},
sa2G(a){if(this.az===a)return
this.az=a
this.b2()},
sa2D(a){return},
Hj(a){var s=this,r=a.fy
r=a.fx
r=r==null?null:new A.cr(r,B.ad)
s.cm=r
r=a.id
r=a.go
r=r==null?null:new A.cr(r,B.ad)
s.bP=r
s.e2=null
s.fX=null
s.ir=null},
sbH(a){if(this.zh==a)return
this.zh=a
this.b2()},
h7(a){this.vf(a)},
eR(a){var s,r,q=this
q.hf(a)
a.a=q.U
a.b=q.az
s=q.A.a
if(s!=null){a.b5(B.Bt,!0)
a.b5(B.Bl,s)}s=q.A.e
if(s!=null)a.b5(B.Bq,s)
s=q.A.f
if(s!=null)a.b5(B.Bu,s)
s=q.A.w
if(s!=null)a.b5(B.Bs,s)
s=q.A.as
if(s!=null)a.b5(B.Bo,s)
s=q.A.at
if(s!=null)a.b5(B.Bp,s)
s=q.A.db
if(s!=null)a.b5(B.Bm,s)
s=q.cm
if(s!=null){a.p4=s
a.d=!0}s=q.bP
if(s!=null){a.R8=s
a.d=!0}s=q.e2
if(s!=null){a.RG=s
a.d=!0}s=q.fX
if(s!=null){a.rx=s
a.d=!0}s=q.ir
if(s!=null){a.ry=s
a.d=!0}s=q.A
r=s.p2
if(r!=null){a.to=r
a.d=!0}s.p3!=null
s=q.A.cx
if(s!=null)a.b5(B.Bn,s)
s=q.A.cy
if(s!=null)a.b5(B.Br,s)
s=q.zh
if(s!=null){a.y1=s
a.d=!0}s=q.A
r=s.R8
if(r!=null){a.id=r
a.d=!0}s=s.RG
if(s!=null)a.HZ(s)
if(q.A.rx!=null)a.sjy(q.gYh())
if(q.A.ry!=null)a.skL(q.gY7())
if(q.A.u!=null)a.stW(q.gY5())},
Yi(){var s=this.A.rx
if(s!=null)s.$0()},
Y8(){var s=this.A.ry
if(s!=null)s.$0()},
Y6(){var s=this.A.u
if(s!=null)s.$0()}}
A.Jn.prototype={
sa0q(a){return},
eR(a){this.hf(a)
a.c=!0}}
A.JB.prototype={
eR(a){this.hf(a)
a.d=a.p2=a.a=!0}}
A.Jw.prototype={
sa2E(a){if(a===this.A)return
this.A=a
this.b2()},
h7(a){if(this.A)return
this.vf(a)}}
A.Jz.prototype={
szB(a,b){if(b===this.A)return
this.A=b
this.b2()},
eR(a){this.hf(a)
a.k1=this.A
a.d=!0}}
A.w4.prototype={
sn(a,b){if(this.A.k(0,b))return
this.A=b
this.ar()},
sNv(a){return},
aH(a,b){var s,r=this,q=r.A,p=r.k3
p.toString
s=new A.rx(q,p,b,A.y(t.S,t.M),A.aw(),r.$ti.h("rx<1>"))
s.i6()
a.Lm(s,A.eU.prototype.gmD.call(r),b)},
go_(){return!0}}
A.PQ.prototype={
eO(a){var s=this.u$
if(s!=null)return s.jM(a)
return this.D7(a)}}
A.PR.prototype={
an(a){var s=this
s.nd(a)
s.m8$.Z(0,s.gra())
s.xO()},
ag(a){this.m8$.G(0,this.gra())
this.le(0)},
aH(a,b){if(this.m7$===0)return
this.hg(a,b)}}
A.z8.prototype={
an(a){var s
this.eB(a)
s=this.u$
if(s!=null)s.an(a)},
ag(a){var s
this.dU(0)
s=this.u$
if(s!=null)s.ag(0)}}
A.z9.prototype={
eO(a){var s=this.u$
if(s!=null)return s.jM(a)
return this.CV(a)}}
A.jh.prototype={
E(){return"SelectionResult."+this.b}}
A.dh.prototype={$iac:1}
A.Kg.prototype={
spw(a){var s=this,r=s.m6$
if(a==r)return
if(a==null)s.G(0,s.gGB())
else if(r==null)s.Z(0,s.gGB())
s.GA()
s.m6$=a
s.GC()},
GC(){var s=this
if(s.m6$==null){s.ky$=!1
return}if(s.ky$&&!s.gn(s).d){s.m6$.v(0,s)
s.ky$=!1}else if(!s.ky$&&s.gn(s).d){s.m6$.C(0,s)
s.ky$=!0}},
GA(){var s=this
if(s.ky$){s.m6$.v(0,s)
s.ky$=!1}}}
A.pA.prototype={
E(){return"SelectionEventType."+this.b}}
A.ne.prototype={
E(){return"TextGranularity."+this.b}}
A.a6i.prototype={}
A.rX.prototype={}
A.n_.prototype={}
A.n0.prototype={
E(){return"SelectionExtendDirection."+this.b}}
A.pB.prototype={
E(){return"SelectionStatus."+this.b}}
A.kO.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.A(s))return!1
return b instanceof A.kO&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&b.c===s.c&&b.d===s.d},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.n1.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.A(s))return!1
return b instanceof A.n1&&b.a.k(0,s.a)&&b.b===s.b&&b.c===s.c},
gt(a){return A.S(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.xm.prototype={
E(){return"TextSelectionHandleType."+this.b}}
A.JM.prototype={
eO(a){var s,r,q=this.u$
if(q!=null){s=q.jM(a)
r=q.e
r.toString
t.Ch.a(r)
if(s!=null)s+=r.a.b}else s=this.CV(a)
return s},
aH(a,b){var s,r=this.u$
if(r!=null){s=r.e
s.toString
a.f1(r,t.Ch.a(s).a.V(0,b))}},
cS(a,b){var s,r=this.u$
if(r!=null){s=r.e
s.toString
t.Ch.a(s)
return a.nY(new A.a4O(b,s,r),s.a,b)}return!1}}
A.a4O.prototype={
$2(a,b){return this.c.bX(a,b)},
$S:15}
A.JE.prototype={
r0(){var s=this
if(s.A!=null)return
s.A=s.U.W(s.az)},
sdv(a,b){var s=this
if(s.U.k(0,b))return
s.U=b
s.A=null
s.a8()},
sbH(a){var s=this
if(s.az==a)return
s.az=a
s.A=null
s.a8()},
cc(a){var s,r,q,p=this
p.r0()
if(p.u$==null){s=p.A
return a.by(new A.a6(s.a+s.c,s.b+s.d))}s=p.A
s.toString
r=a.IV(s)
q=p.u$.h8(r)
s=p.A
return a.by(new A.a6(s.a+q.a+s.c,s.b+q.b+s.d))},
bG(){var s,r,q,p,o,n,m=this,l=t.k.a(A.z.prototype.ga1.call(m))
m.r0()
if(m.u$==null){s=m.A
m.k3=l.by(new A.a6(s.a+s.c,s.b+s.d))
return}s=m.A
s.toString
r=l.IV(s)
m.u$.cu(r,!0)
s=m.u$
q=s.e
q.toString
t.Ch.a(q)
p=m.A
o=p.a
n=p.b
q.a=new A.t(o,n)
s=s.k3
m.k3=l.by(new A.a6(o+s.a+p.c,n+s.b+p.d))}}
A.Jl.prototype={
r0(){var s=this
if(s.A!=null)return
s.A=s.U.W(s.az)},
sej(a){var s=this
if(s.U.k(0,a))return
s.U=a
s.A=null
s.a8()},
sbH(a){var s=this
if(s.az==a)return
s.az=a
s.A=null
s.a8()},
y8(){var s,r,q,p,o=this
o.r0()
s=o.u$
r=s.e
r.toString
t.Ch.a(r)
q=o.A
q.toString
p=o.k3
p.toString
s=s.k3
s.toString
r.a=q.lO(t.uu.a(p.aa(0,s)))}}
A.JJ.prototype={
sa7a(a){if(this.au==a)return
this.au=a
this.a8()},
sa3T(a){if(this.b0==a)return
this.b0=a
this.a8()},
cc(a){var s,r,q=this,p=q.au!=null||a.b===1/0,o=q.b0!=null||a.d===1/0,n=q.u$
if(n!=null){s=n.h8(new A.aQ(0,a.b,0,a.d))
if(p){n=q.au
if(n==null)n=1
n=s.a*n}else n=1/0
if(o){r=q.b0
if(r==null)r=1
r=s.b*r}else r=1/0
return a.by(new A.a6(n,r))}n=p?0:1/0
return a.by(new A.a6(n,o?0:1/0))},
bG(){var s,r,q=this,p=t.k.a(A.z.prototype.ga1.call(q)),o=q.au!=null||p.b===1/0,n=q.b0!=null||p.d===1/0,m=q.u$
if(m!=null){m.cu(new A.aQ(0,p.b,0,p.d),!0)
if(o){m=q.u$.k3.a
s=q.au
m*=s==null?1:s}else m=1/0
if(n){s=q.u$.k3.b
r=q.b0
s*=r==null?1:r}else s=1/0
q.k3=p.by(new A.a6(m,s))
q.y8()}else{m=o?0:1/0
q.k3=p.by(new A.a6(m,n?0:1/0))}}}
A.a6Q.prototype={
uG(a){return new A.a6(A.H(1/0,a.a,a.b),A.H(1/0,a.c,a.d))}}
A.Jt.prototype={
syJ(a){var s=this,r=s.A
if(r===a)return
if(A.A(a)!==A.A(r)||a.n_(r))s.a8()
s.A=a
s.b!=null},
an(a){this.Qk(a)},
ag(a){this.Ql(0)},
cc(a){return a.by(this.A.uG(a))},
bG(){var s,r,q,p,o,n,m=this,l=t.k,k=l.a(A.z.prototype.ga1.call(m))
m.k3=k.by(m.A.uG(k))
if(m.u$!=null){s=m.A.BA(l.a(A.z.prototype.ga1.call(m)))
l=m.u$
l.toString
k=s.a
r=s.b
q=k>=r
l.cu(s,!(q&&s.c>=s.d))
l=m.u$
p=l.e
p.toString
t.Ch.a(p)
o=m.A
n=m.k3
n.toString
if(q&&s.c>=s.d)l=new A.a6(A.H(0,k,r),A.H(0,s.c,s.d))
else{l=l.k3
l.toString}p.a=o.BJ(n,l)}}}
A.za.prototype={
an(a){var s
this.eB(a)
s=this.u$
if(s!=null)s.an(a)},
ag(a){var s
this.dU(0)
s=this.u$
if(s!=null)s.ag(0)}}
A.u8.prototype={
E(){return"GrowthDirection."+this.b}}
A.kR.prototype={
gKy(){return!1},
a0i(a,b){var s=this.w
switch(A.bd(this.a).a){case 0:return new A.aQ(b,a,s,s)
case 1:return new A.aQ(s,s,b,a)}},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.kR))return!1
return b.a===s.a&&b.b===s.b&&b.d===s.d&&b.f===s.f&&b.r===s.r&&b.w===s.w&&b.x===s.x&&b.y===s.y&&b.Q===s.Q&&b.z===s.z},
gt(a){var s=this
return A.S(s.a,s.b,s.d,s.f,s.r,s.w,s.x,s.y,s.Q,s.z,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r=A.a([s.a.i(0),s.b.i(0),s.c.i(0),"scrollOffset: "+B.d.N(s.d,1),"remainingPaintExtent: "+B.d.N(s.r,1)],t.s),q=s.f
if(q!==0)r.push("overlap: "+B.d.N(q,1))
r.push("crossAxisExtent: "+B.d.N(s.w,1))
r.push("crossAxisDirection: "+s.x.i(0))
r.push("viewportMainAxisExtent: "+B.d.N(s.y,1))
r.push("remainingCacheExtent: "+B.d.N(s.Q,1))
r.push("cacheOrigin: "+B.d.N(s.z,1))
return"SliverConstraints("+B.c.b3(r,", ")+")"}}
A.a8y.prototype={
c_(){return"SliverGeometry"}}
A.pG.prototype={}
A.Kx.prototype={
i(a){return A.A(this.a).i(0)+"@(mainAxis: "+A.h(this.c)+", crossAxis: "+A.h(this.d)+")"}}
A.wV.prototype={
i(a){var s=this.a
return"layoutOffset="+(s==null?"None":B.d.N(s,1))}}
A.kS.prototype={
i(a){return"paintOffset="+A.h(this.a)}}
A.jk.prototype={}
A.ck.prototype={
ga1(){return t.p.a(A.z.prototype.ga1.call(this))},
gjR(){return this.ghN()},
ghN(){var s=this,r=t.p
switch(A.bd(r.a(A.z.prototype.ga1.call(s)).a).a){case 0:return new A.C(0,0,0+s.id.c,0+r.a(A.z.prototype.ga1.call(s)).w)
case 1:return new A.C(0,0,0+r.a(A.z.prototype.ga1.call(s)).w,0+s.id.c)}},
pp(){},
K3(a,b,c){var s=this
if(c>=0&&c<s.id.r&&b>=0&&b<t.p.a(A.z.prototype.ga1.call(s)).w)if(s.zz(a,b,c)||!1){a.C(0,new A.Kx(c,b,s))
return!0}return!1},
zz(a,b,c){return!1},
hx(a,b,c){var s=a.d,r=a.r,q=s+r
return A.H(A.H(c,s,q)-A.H(b,s,q),0,r)},
o8(a,b,c){var s=a.d,r=s+a.z,q=a.Q,p=s+q
return A.H(A.H(c,r,p)-A.H(b,r,p),0,q)},
yq(a){return 0},
dn(a,b){},
is(a,b){}}
A.a4P.prototype={
EO(a){var s
switch(a.a.a){case 0:case 3:s=!1
break
case 2:case 1:s=!0
break
default:s=null}switch(a.b.a){case 0:break
case 1:s=!s
break}return s},
a42(a,b,c,d){var s,r,q,p,o=this,n={},m=t.p,l=o.EO(m.a(A.z.prototype.ga1.call(o))),k=b.e
k.toString
k=t.D.a(k).a
k.toString
s=k-m.a(A.z.prototype.ga1.call(o)).d
r=d-s
q=c-0
p=n.a=null
switch(A.bd(m.a(A.z.prototype.ga1.call(o)).a).a){case 0:if(!l){m=b.k3.a
r=m-r
s=o.id.c-m-s}p=new A.t(s,0)
n.a=new A.t(r,q)
break
case 1:if(!l){m=b.k3.b
r=m-r
s=o.id.c-m-s}p=new A.t(0,s)
n.a=new A.t(q,r)
break}return a.a08(new A.a4Q(n,b),p)}}
A.a4Q.prototype={
$1(a){return this.b.bX(a,this.a.a)},
$S:97}
A.QL.prototype={}
A.QO.prototype={
ag(a){this.vc(0)}}
A.JN.prototype={
spN(a){if(this.tc===a)return
this.tc=a
this.a8()}}
A.JO.prototype={
MG(a,b){var s,r
if(b>0){s=a/b
r=B.d.b8(s)
if(Math.abs(s*b-r*b)<1e-10)return r
return B.d.cG(s)}return 0},
BE(a,b){var s,r
if(b>0){s=a/b-1
r=B.d.b8(s)
if(Math.abs(s*b-r*b)<1e-10)return Math.max(0,r)
return Math.max(0,B.d.dq(s))}return 0},
Sn(a){var s,r=this.av$,q=A.n(this).h("av.1"),p=t.D,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s<a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).al$}return o},
So(a){var s,r=this.d3$,q=A.n(this).h("av.1"),p=t.D,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s>a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).bW$}return o},
bG(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=t.p,a7=a6.a(A.z.prototype.ga1.call(a4)),a8=a4.bm
a8.R8=!1
s=a6.a(A.z.prototype.ga1.call(a4)).y*a4.tc
a6=a7.d
r=a6+a7.z
q=r+a7.Q
p=a7.a0i(s,s)
o=a4.MG(r,s)
n=isFinite(q)?a4.BE(q,s):a5
if(a4.av$!=null){m=a4.Sn(o)
a4.Is(m,n!=null?a4.So(n):0)}else a4.Is(0,0)
if(a4.av$==null)if(!a4.a_W(o,s*o)){l=o<=0?0:a8.grF()*s
a4.id=A.wU(a5,!1,a5,a5,l,0,0,l,a5)
a8.IZ()
return}k=a4.av$
k.toString
k=k.e
k.toString
j=t.D
k=j.a(k).b
k.toString
i=k-1
h=a5
for(;i>=o;--i){g=a4.a4g(p)
if(g==null){a4.id=A.wU(a5,!1,a5,a5,0,0,0,0,i*s)
return}k=g.e
k.toString
j.a(k).a=s*i
if(h==null)h=g}if(h==null){a4.av$.iz(p)
h=a4.av$
k=h.e
k.toString
j.a(k).a=s*o}k=h.e
k.toString
k=j.a(k).b
k.toString
i=k+1
k=A.n(a4).h("av.1")
f=n!=null
while(!0){if(!(!f||i<=n)){e=1/0
break}d=h.e
d.toString
g=k.a(d).al$
if(g!=null){d=g.e
d.toString
d=j.a(d).b
d.toString
d=d!==i}else d=!0
if(d){g=a4.a4f(p,h)
if(g==null){e=i*s
break}}else g.iz(p)
d=g.e
d.toString
j.a(d)
c=d.b
c.toString
d.a=s*c;++i
h=g}k=a4.d3$
k.toString
k=k.e
k.toString
k=j.a(k).b
k.toString
b=s*o
a=s*(k+1)
e=Math.min(e,a8.a2A(a7,o,k,b,a))
a0=a4.hx(a7,b,a)
a1=a4.o8(a7,b,a)
a2=a6+a7.r
a3=isFinite(a2)?a4.BE(a2,s):a5
a4.id=A.wU(a1,a3!=null&&k>=a3||a6>0,a5,a5,e,a0,0,e,a5)
if(e===a)a8.R8=!0
a8.IZ()}}
A.hS.prototype={$icg:1}
A.a4U.prototype={
ex(a){}}
A.hg.prototype={
i(a){var s=this.b,r=this.oM$?"keepAlive; ":""
return"index="+A.h(s)+"; "+r+this.PT(0)}}
A.mR.prototype={
ex(a){if(!(a.e instanceof A.hg))a.e=new A.hg(!1,null,null)},
ib(a){var s
this.CX(a)
s=a.e
s.toString
t.D.a(s)
if(!s.c){t.x.a(a)
s.b=this.bm.p4}},
zE(a,b,c){this.v5(0,b,c)},
tT(a,b){var s,r,q,p=this,o=a.e
o.toString
s=t.D
s.a(o)
if(!o.c){p.NV(a,b)
o=a.e
o.toString
s.a(o).b=p.bm.p4
p.a8()}else{r=p.bh
if(r.j(0,o.b)===a)r.v(0,o.b)
q=a.e
q.toString
s.a(q).b=p.bm.p4
o=o.b
o.toString
r.l(0,o,a)}},
v(a,b){var s=b.e
s.toString
t.D.a(s)
if(!s.c){this.NX(0,b)
return}this.bh.v(0,s.b)
this.j6(b)},
w_(a,b){this.Kp(new A.a4R(this,a,b),t.p)},
Ei(a){var s,r=this,q=a.e
q.toString
t.D.a(q)
if(q.oM$){r.v(0,a)
s=q.b
s.toString
r.bh.l(0,s,a)
a.e=q
r.CX(a)
q.c=!0}else r.bm.Ly(a)},
an(a){var s,r,q
this.Qm(a)
for(s=this.bh,s=s.gaS(s),s=new A.dU(J.at(s.a),s.b),r=A.n(s).z[1];s.q();){q=s.a;(q==null?r.a(q):q).an(a)}},
ag(a){var s,r,q
this.Qn(0)
for(s=this.bh,s=s.gaS(s),s=new A.dU(J.at(s.a),s.b),r=A.n(s).z[1];s.q();){q=s.a;(q==null?r.a(q):q).ag(0)}},
jE(){this.NW()
var s=this.bh
s.gaS(s).Y(0,this.gLv())},
aT(a){var s
this.Cu(a)
s=this.bh
s.gaS(s).Y(0,a)},
h7(a){this.Cu(a)},
a_W(a,b){var s
this.w_(a,null)
s=this.av$
if(s!=null){s=s.e
s.toString
t.D.a(s).a=b
return!0}this.bm.R8=!0
return!1},
a4g(a){var s,r,q,p=this,o=p.av$
o.toString
o=o.e
o.toString
s=t.D
o=s.a(o).b
o.toString
r=o-1
p.w_(r,null)
o=p.av$
o.toString
q=o.e
q.toString
q=s.a(q).b
q.toString
if(q===r){o.cu(a,!1)
return p.av$}p.bm.R8=!0
return null},
a4f(a,b){var s,r,q,p=b.e
p.toString
s=t.D
p=s.a(p).b
p.toString
r=p+1
this.w_(r,b)
p=b.e
p.toString
q=A.n(this).h("av.1").a(p).al$
if(q!=null){p=q.e
p.toString
p=s.a(p).b
p.toString
p=p===r}else p=!1
if(p){q.cu(a,!1)
return q}this.bm.R8=!0
return null},
Is(a,b){var s={}
s.a=a
s.b=b
this.Kp(new A.a4T(s,this),t.p)},
L9(a){switch(A.bd(t.p.a(A.z.prototype.ga1.call(this)).a).a){case 0:return a.k3.a
case 1:return a.k3.b}},
zz(a,b,c){var s,r,q=this.d3$,p=A.amB(a)
for(s=A.n(this).h("av.1");q!=null;){if(this.a42(p,q,b,c))return!0
r=q.e
r.toString
q=s.a(r).bW$}return!1},
yq(a){var s=a.e
s.toString
return t.D.a(s).a},
mE(a){var s=t.ub.a(a.e)
return(s==null?null:s.b)!=null&&!this.bh.R(0,s.b)},
dn(a,b){var s,r,q,p,o=this
if(!o.mE(a))b.C8()
else{s=t.p
r=o.EO(s.a(A.z.prototype.ga1.call(o)))
q=a.e
q.toString
q=t.D.a(q).a
q.toString
p=q-s.a(A.z.prototype.ga1.call(o)).d
switch(A.bd(s.a(A.z.prototype.ga1.call(o)).a).a){case 0:b.aB(0,!r?o.id.c-a.k3.a-p:p,0)
break
case 1:b.aB(0,0,!r?o.id.c-a.k3.b-p:p)
break}}},
aH(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null
if(d.av$==null)return
s=t.p
switch(A.jQ(s.a(A.z.prototype.ga1.call(d)).a,s.a(A.z.prototype.ga1.call(d)).b)){case B.y:r=b.V(0,new A.t(0,d.id.c))
q=B.zy
p=B.dD
o=!0
break
case B.au:r=b
q=B.dD
p=B.ft
o=!1
break
case B.x:r=b
q=B.ft
p=B.dD
o=!1
break
case B.ae:r=b.V(0,new A.t(d.id.c,0))
q=B.zz
p=B.ft
o=!0
break
default:o=c
r=o
p=r
q=p}n=d.av$
for(m=A.n(d).h("av.1"),l=t.D;n!=null;){k=n.e
k.toString
k=l.a(k).a
k.toString
j=k-s.a(A.z.prototype.ga1.call(d)).d
k=r.a
i=q.a
k=k+i*j+p.a*0
h=r.b
g=q.b
h=h+g*j+p.b*0
f=new A.t(k,h)
if(o){e=d.L9(n)
f=new A.t(k+i*e,h+g*e)}if(j<s.a(A.z.prototype.ga1.call(d)).r&&j+d.L9(n)>0)a.f1(n,f)
k=n.e
k.toString
n=m.a(k).al$}}}
A.a4R.prototype={
$1(a){var s=this.a,r=s.bh,q=this.b,p=this.c
if(r.R(0,q)){r=r.v(0,q)
r.toString
q=r.e
q.toString
t.D.a(q)
s.j6(r)
r.e=q
s.v5(0,r,p)
q.c=!1}else s.bm.a1K(q,p)},
$S:98}
A.a4T.prototype={
$1(a){var s,r,q
for(s=this.a,r=this.b;s.a>0;){q=r.av$
q.toString
r.Ei(q);--s.a}for(;s.b>0;){q=r.d3$
q.toString
r.Ei(q);--s.b}s=r.bh
s=s.gaS(s)
q=A.n(s).h("aH<o.E>")
B.c.Y(A.aA(new A.aH(s,new A.a4S(),q),!0,q.h("o.E")),r.bm.ga6a())},
$S:98}
A.a4S.prototype={
$1(a){var s=a.e
s.toString
return!t.D.a(s).oM$},
$S:251}
A.zc.prototype={
an(a){var s,r,q
this.eB(a)
s=this.av$
for(r=t.D;s!=null;){s.an(a)
q=s.e
q.toString
s=r.a(q).al$}},
ag(a){var s,r,q
this.dU(0)
s=this.av$
for(r=t.D;s!=null;){s.ag(0)
q=s.e
q.toString
s=r.a(q).al$}}}
A.Q3.prototype={}
A.Q4.prototype={}
A.QM.prototype={
ag(a){this.vc(0)}}
A.QN.prototype={}
A.wa.prototype={
gyk(){var s=this,r=t.p
switch(A.jQ(r.a(A.z.prototype.ga1.call(s)).a,r.a(A.z.prototype.ga1.call(s)).b)){case B.y:return s.bO.d
case B.au:return s.bO.a
case B.x:return s.bO.b
case B.ae:return s.bO.c}},
ga0a(){var s=this,r=t.p
switch(A.jQ(r.a(A.z.prototype.ga1.call(s)).a,r.a(A.z.prototype.ga1.call(s)).b)){case B.y:return s.bO.b
case B.au:return s.bO.c
case B.x:return s.bO.d
case B.ae:return s.bO.a}},
ga1V(){switch(A.bd(t.p.a(A.z.prototype.ga1.call(this)).a).a){case 0:var s=this.bO
return s.gb6(s)+s.gb9(s)
case 1:return this.bO.gcn()}},
ex(a){if(!(a.e instanceof A.kS))a.e=new A.kS(B.j)},
bG(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=null,a2=t.p,a3=a2.a(A.z.prototype.ga1.call(a0)),a4=a0.gyk()
a0.ga0a()
s=a0.bO
s.toString
a2=s.a0c(A.bd(a2.a(A.z.prototype.ga1.call(a0)).a))
r=a0.ga1V()
if(a0.u$==null){q=a0.hx(a3,0,a2)
a0.id=A.wU(a0.o8(a3,0,a2),!1,a1,a1,a2,Math.min(q,a3.r),0,a2,a1)
return}p=a0.hx(a3,0,a4)
o=a3.f
if(o>0)o=Math.max(0,o-p)
s=a0.u$
s.toString
n=Math.max(0,a3.d-a4)
m=Math.min(0,a3.z+a4)
l=a3.r
k=a0.hx(a3,0,a4)
j=a3.Q
i=a0.o8(a3,0,a4)
h=Math.max(0,a3.w-r)
g=a3.a
f=a3.b
s.cu(new A.kR(g,f,a3.c,n,a4+a3.e,o,l-k,h,a3.x,a3.y,m,j-i),!0)
e=a0.u$.id
s=e.y
if(s!=null){a0.id=A.wU(a1,!1,a1,a1,0,0,0,0,s)
return}s=e.a
n=a4+s
m=a2+s
d=a0.hx(a3,n,m)
c=p+d
b=a0.o8(a3,0,a4)
a=a0.o8(a3,n,m)
n=e.c
k=e.d
q=Math.min(p+Math.max(n,k+d),l)
l=e.b
k=Math.min(c+k,q)
j=Math.min(a+b+e.z,j)
i=e.e
n=Math.max(c+n,p+e.r)
a0.id=A.wU(j,e.x,n,k,a2+i,q,l,m,a1)
m=a0.u$.e
m.toString
t.v.a(m)
switch(A.jQ(g,f)){case B.y:a2=a0.bO
n=a2.a
s=a2.d+s
m.a=new A.t(n,a0.hx(a3,s,s+a2.b))
break
case B.au:m.a=new A.t(a0.hx(a3,0,a0.bO.a),a0.bO.b)
break
case B.x:a2=a0.bO
m.a=new A.t(a2.a,a0.hx(a3,0,a2.b))
break
case B.ae:a2=a0.bO
s=a2.c+s
m.a=new A.t(a0.hx(a3,s,s+a2.a),a0.bO.b)
break}},
zz(a,b,c){var s,r,q,p,o=this,n=o.u$
if(n!=null&&n.id.r>0){n=n.e
n.toString
t.v.a(n)
s=o.hx(t.p.a(A.z.prototype.ga1.call(o)),0,o.gyk())
r=o.u$
r.toString
r=o.a0M(r)
n=n.a
q=o.u$.ga40()
p=n!=null
if(p)a.c.push(new A.qO(new A.t(-n.a,-n.b)))
q.$3$crossAxisPosition$mainAxisPosition(a,b-r,c-s)
if(p)a.u9()}return!1},
a0M(a){var s=this,r=t.p
switch(A.jQ(r.a(A.z.prototype.ga1.call(s)).a,r.a(A.z.prototype.ga1.call(s)).b)){case B.y:case B.x:return s.bO.a
case B.ae:case B.au:return s.bO.b}},
yq(a){return this.gyk()},
dn(a,b){var s=a.e
s.toString
s=t.v.a(s).a
b.aB(0,s.a,s.b)},
aH(a,b){var s,r=this.u$
if(r!=null&&r.id.w){s=r.e
s.toString
a.f1(r,b.V(0,t.v.a(s).a))}}}
A.Q1.prototype={
an(a){var s
this.eB(a)
s=this.u$
if(s!=null)s.an(a)},
ag(a){var s
this.dU(0)
s=this.u$
if(s!=null)s.ag(0)}}
A.a4o.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return b instanceof A.a4o&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this
return"RelativeRect.fromLTRB("+B.d.N(s.a,1)+", "+B.d.N(s.b,1)+", "+B.d.N(s.c,1)+", "+B.d.N(s.d,1)+")"}}
A.dX.prototype={
gzK(){var s=this
return s.e!=null||s.f!=null||s.r!=null||s.w!=null||s.x!=null||s.y!=null},
i(a){var s=this,r=A.a([],t.s),q=s.e
if(q!=null)r.push("top="+A.ht(q))
q=s.f
if(q!=null)r.push("right="+A.ht(q))
q=s.r
if(q!=null)r.push("bottom="+A.ht(q))
q=s.w
if(q!=null)r.push("left="+A.ht(q))
q=s.x
if(q!=null)r.push("width="+A.ht(q))
q=s.y
if(q!=null)r.push("height="+A.ht(q))
if(r.length===0)r.push("not positioned")
r.push(s.q8(0))
return B.c.b3(r,"; ")}}
A.x2.prototype={
E(){return"StackFit."+this.b}}
A.wb.prototype={
ex(a){if(!(a.e instanceof A.dX))a.e=new A.dX(null,null,B.j)},
ZH(){var s=this
if(s.u!=null)return
s.u=s.K.W(s.aq)},
sej(a){var s=this
if(s.K.k(0,a))return
s.K=a
s.u=null
s.a8()},
sbH(a){var s=this
if(s.aq==a)return
s.aq=a
s.u=null
s.a8()},
eO(a){return this.IU(a)},
cc(a){return this.GT(a,A.ai9())},
GT(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.ZH()
if(e.dt$===0){s=a.a
r=a.b
q=A.H(1/0,s,r)
p=a.c
o=a.d
n=A.H(1/0,p,o)
return isFinite(q)&&isFinite(n)?new A.a6(A.H(1/0,s,r),A.H(1/0,p,o)):new A.a6(A.H(0,s,r),A.H(0,p,o))}m=a.a
l=a.c
switch(e.ai.a){case 0:k=new A.aQ(0,a.b,0,a.d)
break
case 1:k=A.Bq(new A.a6(A.H(1/0,m,a.b),A.H(1/0,l,a.d)))
break
case 2:k=a
break
default:k=null}j=e.av$
for(s=t.B,i=l,h=m,g=!1;j!=null;){r=j.e
r.toString
s.a(r)
if(!r.gzK()){f=b.$2(j,k)
h=Math.max(h,f.a)
i=Math.max(i,f.b)
g=!0}j=r.al$}return g?new A.a6(h,i):new A.a6(A.H(1/0,m,a.b),A.H(1/0,l,a.d))},
bG(){var s,r,q,p,o,n,m,l=this,k=t.k.a(A.z.prototype.ga1.call(l))
l.L=!1
l.k3=l.GT(k,A.aia())
s=l.av$
for(r=t.B,q=t.uu;s!=null;){p=s.e
p.toString
r.a(p)
if(!p.gzK()){o=l.u
o.toString
n=l.k3
n.toString
m=s.k3
m.toString
p.a=o.lO(q.a(n.aa(0,m)))}else{o=l.k3
o.toString
n=l.u
n.toString
l.L=A.aom(s,p,o,n)||l.L}s=p.al$}},
cS(a,b){return this.yG(a,b)},
u5(a,b){this.om(a,b)},
aH(a,b){var s,r=this,q=r.b_,p=q!==B.l&&r.L,o=r.bB
if(p){p=r.cx
p===$&&A.b()
s=r.k3
o.saZ(0,a.kN(p,b,new A.C(0,0,0+s.a,0+s.b),r.gAF(),q,o.a))}else{o.saZ(0,null)
r.om(a,b)}},
m(){this.bB.saZ(0,null)
this.i5()},
j3(a){var s
switch(this.b_.a){case 0:return null
case 1:case 2:case 3:if(this.L){s=this.k3
s=new A.C(0,0,0+s.a,0+s.b)}else s=null
return s}}}
A.Q5.prototype={
an(a){var s,r,q
this.eB(a)
s=this.av$
for(r=t.B;s!=null;){s.an(a)
q=s.e
q.toString
s=r.a(q).al$}},
ag(a){var s,r,q
this.dU(0)
s=this.av$
for(r=t.B;s!=null;){s.ag(0)
q=s.e
q.toString
s=r.a(q).al$}}}
A.Q6.prototype={}
A.LC.prototype={
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return b instanceof A.LC&&b.a.k(0,this.a)&&b.b===this.b},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return this.a.i(0)+" at "+A.ht(this.b)+"x"}}
A.wc.prototype={
sys(a){var s,r,q,p,o=this
if(o.k1.k(0,a))return
s=o.k1
o.k1=a
r=s.b
r=A.v3(r,r,1)
q=o.k1.b
if(!r.k(0,A.v3(q,q,1))){r=o.Hw()
q=o.ch
p=q.a
p.toString
J.au3(p)
q.saZ(0,r)
o.ar()}o.a8()},
Hw(){var s,r=this.k1.b
r=A.v3(r,r,1)
this.k4=r
s=A.ap_(r)
s.an(this)
return s},
pp(){},
bG(){var s,r=this.k1.a
this.id=r
s=this.u$
if(s!=null)s.iz(A.Bq(r))},
bX(a,b){var s=this.u$
if(s!=null)s.bX(A.amB(a),b)
a.C(0,new A.hN(this,t.Cq))
return!0},
a45(a){var s,r=A.a([],t.f1),q=new A.bf(new Float64Array(16))
q.dd()
s=new A.hA(r,A.a([q],t.hZ),A.a([],t.pw))
this.bX(s,a)
return s},
gdL(){return!0},
aH(a,b){var s=this.u$
if(s!=null)a.f1(s,b)},
dn(a,b){var s=this.k4
s.toString
b.cI(0,s)
this.Pc(a,b)},
a18(){var s,r,q
try{q=$.aq()
s=q.a1R()
r=this.ch.a.a0v(s)
this.a_u()
q.a6f(r)
r.m()}finally{}},
a_u(){var s,r,q,p,o,n,m,l,k,j=null,i=this.ghN(),h=i.gaK(),g=this.k2
g.gkS()
s=i.gaK()
g.gkS()
g=this.ch
r=t.g9
q=g.a.JD(0,new A.t(h.a,0),r)
switch(A.lo().a){case 0:p=g.a.JD(0,new A.t(s.a,i.d-1-0),r)
break
case 1:case 2:case 3:case 4:case 5:p=j
break
default:p=j}h=q==null
if(h&&p==null)return
if(!h&&p!=null){h=q.f
g=q.r
s=q.e
r=q.w
A.aoP(new A.ig(p.a,p.b,p.c,p.d,s,h,g,r))
return}o=A.lo()===B.ay
n=h?p:q
h=n.f
g=n.r
s=n.e
r=n.w
m=o?n.a:j
l=o?n.b:j
k=o?n.c:j
A.aoP(new A.ig(m,l,k,o?n.d:j,s,h,g,r))},
ghN(){var s=this.id.a_(0,this.k1.b)
return new A.C(0,0,0+s.a,0+s.b)},
gjR(){var s,r=this.k4
r.toString
s=this.id
return A.h9(r,new A.C(0,0,0+s.a,0+s.b))}}
A.Q8.prototype={
an(a){var s
this.eB(a)
s=this.u$
if(s!=null)s.an(a)},
ag(a){var s
this.dU(0)
s=this.u$
if(s!=null)s.ag(0)}}
A.Bw.prototype={
E(){return"CacheExtentStyle."+this.b}}
A.pq.prototype={
i(a){return"RevealedOffset(offset: "+A.h(this.a)+", rect: "+this.b.i(0)+")"}}
A.pn.prototype={
eR(a){this.hf(a)
a.HZ(B.Bv)},
h7(a){var s=this.gIn()
new A.aH(s,new A.a4Y(),A.aT(s).h("aH<1>")).Y(0,a)},
sfN(a){if(a===this.L)return
this.L=a
this.a8()},
sa1U(a){if(a===this.u)return
this.u=a
this.a8()},
sbF(a,b){var s=this,r=s.K
if(b===r)return
if(s.b!=null)r.G(0,s.gtO())
s.K=b
if(s.b!=null)b.Z(0,s.gtO())
s.a8()},
sa0y(a){if(a===this.aq)return
this.aq=a
this.a8()},
sa0z(a){if(a===this.b_)return
this.b_=a
this.a8()},
an(a){this.Qo(a)
this.K.Z(0,this.gtO())},
ag(a){this.K.G(0,this.gtO())
this.Qp(0)},
gdL(){return!0},
KF(a,b,c,d,e,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.aCY(h.K.k4,e),f=a0+a2
for(s=e.a,r=t.v,q=a0,p=0;c!=null;){o=a5<=0?0:a5
n=Math.max(b,-o)
m=b-n
c.cu(new A.kR(h.L,e,g,o,p,f-q,Math.max(0,a4-q+a0),d,h.u,a1,n,Math.max(0,a3+m)),!0)
l=c.id
k=l.y
if(k!=null)return k
j=q+l.b
k=l.w||a5>0
i=c.e
if(k){i.toString
r.a(i).a=h.Iu(c,j,e)}else{i.toString
r.a(i).a=h.Iu(c,-a5+a0,e)}f=Math.max(j+l.c,f)
k=l.a
a5-=k
p+=k
q+=l.d
i=l.z
if(i!==0){a3-=i-m
b=Math.min(n+i,0)}switch(s){case 0:i=h.j8
i===$&&A.b()
h.j8=i+k
break
case 1:i=h.j7
i===$&&A.b()
h.j7=i-k
break}if(l.x)h.fU=!0
c=a.$1(c)}return 0},
j3(a){var s,r,q,p,o,n
switch(this.bB.a){case 0:return null
case 1:case 2:case 3:break}s=this.k3
r=0+s.a
q=0+s.b
s=t.p
if(s.a(A.z.prototype.ga1.call(a)).f===0||!isFinite(s.a(A.z.prototype.ga1.call(a)).y))return new A.C(0,0,r,q)
p=s.a(A.z.prototype.ga1.call(a)).y-s.a(A.z.prototype.ga1.call(a)).r+s.a(A.z.prototype.ga1.call(a)).f
switch(A.jQ(this.L,s.a(A.z.prototype.ga1.call(a)).b)){case B.x:o=0+p
n=0
break
case B.y:q-=p
n=0
o=0
break
case B.au:n=0+p
o=0
break
case B.ae:r-=p
n=0
o=0
break
default:n=0
o=0}return new A.C(n,o,r,q)},
yL(a){var s,r=this,q=r.ai
if(q==null){q=r.k3
return new A.C(0,0,0+q.a,0+q.b)}switch(A.bd(r.L).a){case 1:s=r.k3
return new A.C(0,0-q,0+s.a,0+s.b+q)
case 0:s=r.k3
return new A.C(0-q,0,0+s.a+q,0+s.b)}},
aH(a,b){var s,r,q,p=this
if(p.av$==null)return
s=p.fU&&p.bB!==B.l
r=p.cd
if(s){s=p.cx
s===$&&A.b()
q=p.k3
r.saZ(0,a.kN(s,b,new A.C(0,0,0+q.a,0+q.b),p.gXX(),p.bB,r.a))}else{r.saZ(0,null)
p.FO(a,b)}},
m(){this.cd.saZ(0,null)
this.i5()},
FO(a,b){var s,r,q,p,o,n,m,l
for(s=this.gIn(),r=s.length,q=t.v,p=b.a,o=b.b,n=0;n<s.length;s.length===r||(0,A.P)(s),++n){m=s[n]
if(m.id.w){l=m.e
l.toString
l=q.a(l).a
a.f1(m,new A.t(p+l.a,o+l.b))}}},
cS(a,b){var s,r,q,p,o,n,m,l,k={}
k.a=k.b=null
switch(A.bd(this.L).a){case 1:k.b=b.b
k.a=b.a
break
case 0:k.b=b.a
k.a=b.b
break}s=new A.pG(a.a,a.b,a.c)
for(r=this.ga0N(),q=r.length,p=t.v,o=0;o<r.length;r.length===q||(0,A.P)(r),++o){n=r[o]
if(!n.id.w)continue
m=new A.bf(new Float64Array(16))
m.dd()
l=n.e
l.toString
l=p.a(l).a
m.aB(0,l.a,l.b)
if(a.a09(new A.a4X(k,this,n,s),m))return!0}return!1},
kT(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=a instanceof A.ck
for(s=t.d,r=c,q=a,p=0;o=q.c,o!==d;q=o){o.toString
s.a(o)
if(q instanceof A.F)r=q
if(o instanceof A.ck){n=o.yq(q)
n.toString
p+=n}else{p=0
b=!1}}if(r!=null){s=r.c
s.toString
t.q0.a(s)
m=t.p.a(A.z.prototype.ga1.call(s)).b
switch(A.bd(d.L).a){case 0:l=r.k3.a
break
case 1:l=r.k3.b
break
default:l=c}if(a1==null)a1=a.ghN()
k=A.h9(a.bw(0,r),a1)}else{if(b){t.q0.a(a)
s=t.p
m=s.a(A.z.prototype.ga1.call(a)).b
l=a.id.a
if(a1==null)switch(A.bd(d.L).a){case 0:a1=new A.C(0,0,0+l,0+s.a(A.z.prototype.ga1.call(a)).w)
break
case 1:a1=new A.C(0,0,0+s.a(A.z.prototype.ga1.call(a)).w,0+a.id.a)
break}}else{s=d.K.at
s.toString
a1.toString
return new A.pq(s,a1)}k=a1}t.q0.a(q)
switch(A.jQ(d.L,m)){case B.y:s=k.d
p+=l-s
j=s-k.b
break
case B.au:s=k.a
p+=s
j=k.c-s
break
case B.x:s=k.b
p+=s
j=k.d-s
break
case B.ae:s=k.c
p+=l-s
j=s-k.a
break
default:j=c}q.id.toString
p=d.N4(q,p)
i=A.h9(a.bw(0,d),a1)
h=d.a56(q)
switch(t.p.a(A.z.prototype.ga1.call(q)).b.a){case 0:p-=h
break
case 1:switch(A.bd(d.L).a){case 1:p-=i.d-i.b
break
case 0:p-=i.c-i.a
break}break}s=d.L
switch(A.bd(s).a){case 0:g=d.k3.a-h
break
case 1:g=d.k3.b-h
break
default:g=c}f=p-(g-j)*a0
o=d.K.at
o.toString
e=o-f
switch(s.a){case 2:i=i.aB(0,0,e)
break
case 1:i=i.aB(0,e,0)
break
case 0:i=i.aB(0,0,-e)
break
case 3:i=i.aB(0,-e,0)
break}return new A.pq(f,i)},
Iu(a,b,c){switch(A.jQ(this.L,c)){case B.y:return new A.t(0,this.k3.b-(b+a.id.c))
case B.au:return new A.t(b,0)
case B.x:return new A.t(0,b)
case B.ae:return new A.t(this.k3.a-(b+a.id.c),0)}},
ey(a,b,c,d){var s=this
if(!s.K.r.glN())return s.qa(a,b,c,d)
s.qa(a,null,c,A.aoo(a,b,c,s.K,d,s))},
n1(){return this.ey(B.aK,null,B.u,null)},
l3(a,b){return this.ey(B.aK,a,B.u,b)},
$iJk:1}
A.a4Y.prototype={
$1(a){var s=a.id
return s.w||s.z>0},
$S:253}
A.a4X.prototype={
$1(a){var s=this,r=s.c,q=s.a,p=s.b.a1a(r,q.b)
return r.K3(s.d,q.a,p)},
$S:97}
A.wd.prototype={
ex(a){if(!(a.e instanceof A.jk))a.e=new A.jk(null,null,B.j)},
sa0e(a){if(a===this.tf)return
this.tf=a
this.a8()},
saK(a){if(a==this.e3)return
this.e3=a
this.a8()},
gjU(){return!0},
cc(a){return new A.a6(A.H(1/0,a.a,a.b),A.H(1/0,a.c,a.d))},
bG(){var s,r,q,p,o,n,m,l,k,j=this
switch(A.bd(j.L).a){case 1:j.K.o4(j.k3.b)
break
case 0:j.K.o4(j.k3.a)
break}if(j.e3==null){j.j8=j.j7=0
j.fU=!1
j.K.o1(0,0)
return}switch(A.bd(j.L).a){case 1:s=j.k3
r=s.b
q=s.a
break
case 0:s=j.k3
r=s.a
q=s.b
break
default:r=null
q=null}s=0
do{p=j.K.at
p.toString
o=j.S6(r,q,p+0)
if(o!==0){p=j.K
n=p.at
n.toString
p.at=n+o
p.ch=!0}else{p=j.K
n=j.j7
n===$&&A.b()
m=j.tf
n=Math.min(0,n+r*m)
l=j.j8
l===$&&A.b()
if(p.o1(n,Math.max(0,l-r*(1-m))))break}k=s+1
if(k<10){s=k
continue}else break}while(!0)},
S6(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.j8=e.j7=0
e.fU=!1
s=a*e.tf-c
r=A.H(s,0,a)
q=a-s
p=A.H(q,0,a)
switch(e.b_.a){case 0:e.ai=e.aq
break
case 1:e.ai=a*e.aq
break}o=e.ai
o.toString
n=a+2*o
m=s+o
l=A.H(m,0,n)
k=A.H(n-m,0,n)
j=e.e3.e
j.toString
i=A.n(e).h("av.1").a(j).bW$
j=i==null
if(!j){h=Math.max(a,s)
g=e.KF(e.ga0K(),A.H(q,-o,0),i,b,B.nH,p,a,0,l,r,h-a)
if(g!==0)return-g}q=e.e3
o=-s
h=Math.max(0,o)
o=j?Math.min(0,o):0
j=s>=a?s:r
f=e.ai
f.toString
return e.KF(e.ga0I(),A.H(s,-f,0),q,b,B.nG,j,a,o,k,p,h)},
N4(a,b){var s,r,q,p,o=this
switch(t.p.a(A.z.prototype.ga1.call(a)).b.a){case 0:s=o.e3
for(r=A.n(o).h("av.1"),q=0;s!==a;){q+=s.id.a
p=s.e
p.toString
s=r.a(p).al$}return q+b
case 1:r=o.e3.e
r.toString
p=A.n(o).h("av.1")
s=p.a(r).bW$
for(q=0;s!==a;){q-=s.id.a
r=s.e
r.toString
s=p.a(r).bW$}return q-b}},
a56(a){var s,r,q,p=this
switch(t.p.a(A.z.prototype.ga1.call(a)).b.a){case 0:s=p.e3
for(r=A.n(p).h("av.1");s!==a;){s.id.toString
q=s.e
q.toString
s=r.a(q).al$}return 0
case 1:r=p.e3.e
r.toString
q=A.n(p).h("av.1")
s=q.a(r).bW$
for(;s!==a;){s.id.toString
r=s.e
r.toString
s=q.a(r).bW$}return 0}},
dn(a,b){var s=a.e
s.toString
s=t.v.a(s).a
b.aB(0,s.a,s.b)},
a1a(a,b){var s,r=a.e
r.toString
t.v.a(r)
s=t.p
switch(A.jQ(s.a(A.z.prototype.ga1.call(a)).a,s.a(A.z.prototype.ga1.call(a)).b)){case B.x:return b-r.a.b
case B.au:return b-r.a.a
case B.y:return a.id.c-(b-r.a.b)
case B.ae:return a.id.c-(b-r.a.a)}},
gIn(){var s,r,q=this,p=A.a([],t.jT),o=q.av$
if(o==null)return p
for(s=A.n(q).h("av.1");o!=q.e3;){o.toString
p.push(o)
r=o.e
r.toString
o=s.a(r).al$}o=q.d3$
for(;!0;){o.toString
p.push(o)
if(o===q.e3)return p
r=o.e
r.toString
o=s.a(r).bW$}},
ga0N(){var s,r,q,p=this,o=A.a([],t.jT)
if(p.av$==null)return o
s=p.e3
for(r=A.n(p).h("av.1");s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).al$}q=p.e3.e
q.toString
s=r.a(q).bW$
for(;s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).bW$}return o}}
A.iw.prototype={
an(a){var s,r,q
this.eB(a)
s=this.av$
for(r=A.n(this).h("iw.0");s!=null;){s.an(a)
q=s.e
q.toString
s=r.a(q).al$}},
ag(a){var s,r,q
this.dU(0)
s=this.av$
for(r=A.n(this).h("iw.0");s!=null;){s.ag(0)
q=s.e
q.toString
s=r.a(q).al$}}}
A.pw.prototype={
E(){return"ScrollDirection."+this.b}}
A.fD.prototype={
ph(a,b,c,d){var s=d.a===B.u.a
if(s){this.dM(b)
return A.bF(null,t.H)}else return this.hu(b,c,d)},
i(a){var s=this,r=A.a([],t.s)
s.PN(r)
r.push(A.A(s.w).i(0))
r.push(s.r.i(0))
r.push(A.h(s.fr))
r.push(s.k4.i(0))
return"<optimized out>#"+A.bM(s)+"("+B.c.b3(r,", ")+")"},
ci(a){var s=this.at
if(s!=null)a.push("offset: "+B.d.N(s,1))}}
A.qw.prototype={}
A.kM.prototype={
E(){return"SchedulerPhase."+this.b}}
A.a3i.prototype={}
A.dE.prototype={
a07(a){var s=this.f$
s.push(a)
if(s.length===1){s=$.aO()
s.ay=this.gTJ()
s.ch=$.a8}},
LC(a){var s=this.f$
B.c.v(s,a)
if(s.length===0){s=$.aO()
s.ay=null
s.ch=$.a8}},
TK(a){var s,r,q,p,o,n,m,l,k=this.f$,j=A.aA(k,!0,t.wX)
for(p=j.length,o=0;o<p;++o){s=j[o]
try{if(B.c.B(k,s))s.$1(a)}catch(n){r=A.ae(n)
q=A.au(n)
m=A.bo("while executing callbacks for FrameTiming")
l=$.fL()
if(l!=null)l.$1(new A.bJ(r,q,"Flutter framework",m,null,!1))}}},
tq(a){this.r$=a
switch(a.a){case 0:case 1:this.GD(!0)
break
case 2:case 3:this.GD(!1)
break}},
Ex(){if(this.y$)return
this.y$=!0
A.cb(B.u,this.gZ_())},
Z0(){this.y$=!1
if(this.a3b())this.Ex()},
a3b(){var s,r,q,p,o,n,m=this,l="No element",k=m.x$,j=k.c===0
if(j||m.b>0)return!1
if(j)A.K(A.a5(l))
s=k.qk(0)
j=s.b
if(m.w$.$2$priority$scheduler(j,m)){try{if(k.c===0)A.K(A.a5(l));++k.d
k.qk(0)
p=k.c-1
o=k.qk(p)
k.b[p]=null
k.c=p
if(p>0)k.Sa(o,0)
s.a7Z()}catch(n){r=A.ae(n)
q=A.au(n)
j=A.bo("during a task callback")
A.e6(new A.bJ(r,q,"scheduler library",j,null,!1))}return k.c!==0}return!1},
q0(a,b){var s,r=this
r.hZ()
s=++r.z$
r.Q$.l(0,s,new A.qw(a))
return r.z$},
q_(a){return this.q0(a,!1)},
gJn(){var s=this
if(s.ay$==null){if(s.CW$===B.cH)s.hZ()
s.ay$=new A.aI(new A.a7($.a8,t.U),t._)
s.ax$.push(new A.a5O(s))}return s.ay$.a},
gJO(){return this.cx$},
GD(a){if(this.cx$===a)return
this.cx$=a
if(a)this.hZ()},
Jo(){var s=$.aO()
if(s.w==null){s.w=this.gUO()
s.x=$.a8}if(s.y==null){s.y=this.gVb()
s.z=$.a8}},
z6(){switch(this.CW$.a){case 0:case 4:this.hZ()
return
case 1:case 2:case 3:return}},
hZ(){var s,r=this
if(!r.ch$)s=!(A.dE.prototype.gJO.call(r)&&r.ce$)
else s=!0
if(s)return
r.Jo()
$.aO().hZ()
r.ch$=!0},
N_(){if(this.ch$)return
this.Jo()
$.aO().hZ()
this.ch$=!0},
uL(){var s,r,q=this
if(q.cy$||q.CW$!==B.cH)return
q.cy$=!0
s=new A.Lh(null,0,A.a([],t.vS))
s.q5(0,"Warm-up frame")
r=q.ch$
A.cb(B.u,new A.a5Q(q))
A.cb(B.u,new A.a5R(q,r))
q.a5_(new A.a5S(q,s))},
a6s(){var s=this
s.dx$=s.Dr(s.dy$)
s.db$=null},
Dr(a){var s=this.db$,r=s==null?B.u:new A.aP(a.a-s.a)
return A.c7(B.d.b8(r.a/$.aqE)+this.dx$.a,0,0)},
UP(a){if(this.cy$){this.go$=!0
return}this.JR(a)},
Vc(){var s=this
if(s.go$){s.go$=!1
s.ax$.push(new A.a5N(s))
return}s.JT()},
JR(a){var s,r,q=this,p=q.id$,o=p==null
if(!o)p.q5(0,"Frame")
if(q.db$==null)q.db$=a
r=a==null
q.fr$=q.Dr(r?q.dy$:a)
if(!r)q.dy$=a
q.ch$=!1
try{if(!o)p.q5(0,"Animate")
q.CW$=B.U5
s=q.Q$
q.Q$=A.y(t.S,t.b1)
J.jW(s,new A.a5P(q))
q.as$.a0(0)}finally{q.CW$=B.U6}},
a6q(a){var s=this,r=s.k1$,q=r==null
if(!q&&r!==a)return null
if(r===a)++s.k2$
else if(q){s.k1$=a
s.k2$=1}return new A.a3i(s.gTq())},
Tr(){if(--this.k2$===0){this.k1$=null
$.aO()}},
JT(){var s,r,q,p,o,n,m,l=this,k=l.id$,j=k==null
if(!j)k.tk(0)
try{l.CW$=B.Bd
for(p=l.at$,o=p.length,n=0;n<p.length;p.length===o||(0,A.P)(p),++n){s=p[n]
m=l.fr$
m.toString
l.Fj(s,m)}l.CW$=B.U7
p=l.ax$
r=A.aA(p,!0,t.qP)
B.c.a0(p)
for(p=r,o=p.length,n=0;n<p.length;p.length===o||(0,A.P)(p),++n){q=p[n]
m=l.fr$
m.toString
l.Fj(q,m)}}finally{l.CW$=B.cH
if(!j)k.tk(0)
l.fr$=null}},
Fk(a,b,c){var s,r,q,p
try{a.$1(b)}catch(q){s=A.ae(q)
r=A.au(q)
p=A.bo("during a scheduler callback")
A.e6(new A.bJ(s,r,"scheduler library",p,null,!1))}},
Fj(a,b){return this.Fk(a,b,null)}}
A.a5O.prototype={
$1(a){var s=this.a
s.ay$.eN(0)
s.ay$=null},
$S:2}
A.a5Q.prototype={
$0(){this.a.JR(null)},
$S:0}
A.a5R.prototype={
$0(){var s=this.a
s.JT()
s.a6s()
s.cy$=!1
if(this.b)s.hZ()},
$S:0}
A.a5S.prototype={
$0(){var s=0,r=A.a2(t.H),q=this
var $async$$0=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:s=2
return A.a4(q.a.gJn(),$async$$0)
case 2:q.b.tk(0)
return A.a0(null,r)}})
return A.a1($async$$0,r)},
$S:58}
A.a5N.prototype={
$1(a){var s=this.a
s.ch$=!1
s.hZ()},
$S:2}
A.a5P.prototype={
$2(a,b){var s,r,q=this.a
if(!q.as$.B(0,a)){s=b.a
r=q.fr$
r.toString
q.Fk(s,r,b.b)}},
$S:255}
A.q2.prototype={
sA7(a,b){var s=this
if(b===s.b)return
s.b=b
if(b)s.Bh()
else if(s.a!=null&&s.e==null)s.e=$.bP.q0(s.gxF(),!1)},
ga4F(){if(this.a==null)return!1
if(this.b)return!1
var s=$.bP
s.toString
if(A.dE.prototype.gJO.call(s)&&s.ce$)return!0
if($.bP.CW$!==B.cH)return!0
return!1},
n5(a){var s,r,q=this
q.a=new A.ni(new A.aI(new A.a7($.a8,t.U),t._))
if(!q.b)s=q.e==null
else s=!1
if(s)q.e=$.bP.q0(q.gxF(),!1)
s=$.bP
r=s.CW$.a
if(r>0&&r<4){s=s.fr$
s.toString
q.c=s}s=q.a
s.toString
return s},
n6(a,b){var s=this,r=s.a
if(r==null)return
s.c=s.a=null
s.Bh()
if(b)r.DJ(s)
else r.H9()},
hc(a){return this.n6(a,!1)},
ZY(a){var s,r=this
r.e=null
s=r.c
if(s==null)s=r.c=a
r.d.$1(new A.aP(a.a-s.a))
if(!r.b&&r.a!=null&&r.e==null)r.e=$.bP.q0(r.gxF(),!0)},
Bh(){var s,r=this.e
if(r!=null){s=$.bP
s.Q$.v(0,r)
s.as$.C(0,r)
this.e=null}},
m(){var s=this,r=s.a
if(r!=null){s.a=null
s.Bh()
r.DJ(s)}},
a6P(a,b){var s=""+"Ticker()"
return s.charCodeAt(0)==0?s:s},
i(a){return this.a6P(a,!1)}}
A.ni.prototype={
H9(){this.c=!0
this.a.eN(0)
var s=this.b
if(s!=null)s.eN(0)},
DJ(a){var s
this.c=!1
s=this.b
if(s!=null)s.ic(new A.xr(a))},
Mg(a){var s,r,q=this,p=new A.aa3(a)
if(q.b==null){s=q.b=new A.aI(new A.a7($.a8,t.U),t._)
r=q.c
if(r!=null)if(r)s.eN(0)
else s.ic(B.ZD)}q.b.a.dR(p,p,t.H)},
lQ(a,b){return this.a.a.lQ(a,b)},
fO(a){return this.lQ(a,null)},
dR(a,b,c){return this.a.a.dR(a,b,c)},
aE(a,b){return this.dR(a,null,b)},
f3(a){return this.a.a.f3(a)},
i(a){var s=A.bM(this),r=this.c
if(r==null)r="active"
else r=r?"complete":"canceled"
return"<optimized out>#"+s+"("+r+")"},
$iab:1}
A.aa3.prototype={
$1(a){this.a.$0()},
$S:23}
A.xr.prototype={
i(a){var s=this.a
if(s!=null)return"This ticker was canceled: "+s.i(0)
return'The ticker was canceled before the "orCancel" property was first used.'},
$ibr:1}
A.a6j.prototype={}
A.wJ.prototype={
i(a){return"SemanticsTag("+this.a+")"}}
A.cr.prototype={
V(a,b){var s,r,q,p,o,n,m,l=this.a,k=l.length
if(k===0)return b
s=b.a
if(s.length===0)return this
r=A.aA(this.b,!0,t.lS)
q=b.b
p=q.length
if(p!==0)for(o=0;o<q.length;q.length===p||(0,A.P)(q),++o){n=q[o]
m=n.a
r.push(n.ID(new A.eY(m.a+k,m.b+k)))}return new A.cr(l+s,r)},
k(a,b){if(b==null)return!1
return J.X(b)===A.A(this)&&b instanceof A.cr&&b.a===this.a&&A.cS(b.b,this.b)},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"AttributedString('"+this.a+"', attributes: "+A.h(this.b)+")"}}
A.Kh.prototype={
c_(){return"SemanticsData"},
k(a,b){var s=this
if(b==null)return!1
return b instanceof A.Kh&&b.a===s.a&&b.b===s.b&&b.c.k(0,s.c)&&b.d.k(0,s.d)&&b.e.k(0,s.e)&&b.f.k(0,s.f)&&b.r.k(0,s.r)&&b.w===s.w&&b.x==s.x&&b.cx.k(0,s.cx)&&A.alA(b.cy,s.cy)&&b.Q==s.Q&&b.as==s.as&&b.at==s.at&&b.ax==s.ax&&J.f(b.db,s.db)&&b.dx===s.dx&&b.dy===s.dy&&A.aze(b.fr,s.fr)},
gt(a){var s=this,r=A.df(s.fr)
return A.S(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.cx,s.cy,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,A.S(s.CW,s.db,s.dx,s.dy,r,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a))}}
A.Qv.prototype={}
A.Kj.prototype={
c_(){return"SemanticsProperties"}}
A.bX.prototype={
sbp(a,b){var s
if(!A.axF(this.r,b)){s=A.ajP(b)
this.r=s?null:b
this.ia()}},
saP(a,b){if(!this.w.k(0,b)){this.w=b
this.ia()}},
sKv(a){if(this.as===a)return
this.as=a
this.ia()},
YH(a){var s,r,q,p,o,n,m,l=this,k=l.ax
if(k!=null)for(s=k.length,r=0;r<s;++r)k[r].ch=!0
for(k=a.length,r=0;r<k;++r)a[r].ch=!1
k=l.ax
if(k!=null)for(s=k.length,q=t.aa,p=!1,r=0;r<k.length;k.length===s||(0,A.P)(k),++r){o=k[r]
if(o.ch){n=J.cd(o)
if(q.a(A.L.prototype.gaL.call(n,o))===l){o.c=null
if(l.b!=null)o.ag(0)}p=!0}}else p=!1
for(k=a.length,s=t.aa,r=0;r<a.length;a.length===k||(0,A.P)(a),++r){o=a[r]
q=J.cd(o)
if(s.a(A.L.prototype.gaL.call(q,o))!==l){if(s.a(A.L.prototype.gaL.call(q,o))!=null){q=s.a(A.L.prototype.gaL.call(q,o))
if(q!=null){o.c=null
if(q.b!=null)o.ag(0)}}o.c=l
q=l.b
if(q!=null)o.an(q)
q=o.a
n=l.a
if(q<=n){o.a=n+1
o.jE()}p=!0}}if(!p&&l.ax!=null)for(k=l.ax,s=k.length,m=0;m<s;++m)if(k[m].e!==a[m].e){p=!0
break}l.ax=a
if(p)l.ia()},
ga3Q(){var s=this.ax
s=s==null?null:s.length!==0
return s===!0},
xW(a){var s,r,q,p=this.ax
if(p!=null)for(s=p.length,r=0;r<p.length;p.length===s||(0,A.P)(p),++r){q=p[r]
if(!a.$1(q)||!q.xW(a))return!1}return!0},
jE(){var s=this.ax
if(s!=null)B.c.Y(s,this.gLv())},
an(a){var s,r,q,p=this
p.v1(a)
for(s=a.c;s.R(0,p.e);)p.e=$.a6A=($.a6A+1)%65535
s.l(0,p.e,p)
a.d.v(0,p)
if(p.CW){p.CW=!1
p.ia()}s=p.ax
if(s!=null)for(r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].an(a)},
ag(a){var s,r,q,p,o,n=this,m=t.nU
m.a(A.L.prototype.gbs.call(n)).c.v(0,n.e)
m.a(A.L.prototype.gbs.call(n)).d.C(0,n)
n.dU(0)
m=n.ax
if(m!=null)for(s=m.length,r=t.aa,q=0;q<m.length;m.length===s||(0,A.P)(m),++q){p=m[q]
o=J.cd(p)
if(r.a(A.L.prototype.gaL.call(o,p))===n)o.ag(p)}n.ia()},
ia(){var s=this
if(s.CW)return
s.CW=!0
if(s.b!=null)t.nU.a(A.L.prototype.gbs.call(s)).b.C(0,s)},
jK(a,b,c){var s,r=this
if(c==null)c=$.aiK()
if(r.fr.k(0,c.p4))if(r.id.k(0,c.ry))if(r.k2===c.x2)if(r.k3===c.xr)if(r.fx.k(0,c.R8))if(r.fy.k(0,c.RG))if(r.go.k(0,c.rx))if(r.k1===c.to)if(r.dy===c.aY)if(r.ok==c.y1)if(r.p1==c.id)if(r.RG==c.am)if(r.rx==c.ap)if(r.ry==c.ak)if(r.db===c.f)if(r.Q==c.k1)s=r.at!==c.p2
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
if(s)r.ia()
r.fr=c.p4
r.fx=c.R8
r.fy=c.RG
r.go=c.rx
r.id=c.ry
r.k1=c.to
r.k4=c.x1
r.k2=c.x2
r.k3=c.xr
r.dy=c.aY
r.ok=c.y1
r.p1=c.id
r.cx=A.oW(c.e,t.nS,t.BT)
r.cy=A.oW(c.p3,t.zN,t.M)
r.db=c.f
r.p2=c.y2
r.RG=c.am
r.rx=c.ap
r.ry=c.ak
r.at=c.p2
r.p4=c.k2
r.R8=c.k3
r.Q=c.k1
r.to=c.k4
r.x1=c.ok
r.x2=c.p1
r.YH(b==null?B.i4:b)},
a73(a,b){return this.jK(a,null,b)},
MP(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7={}
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
a7.y=s==null?null:A.kt(s,t.xJ)
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
q=A.b3(t.S)
for(s=a6.cy,s=A.j1(s,s.r);s.q();)q.C(0,A.amQ(s.d))
a6.k4!=null
if(a6.at)a6.xW(new A.a6B(a7,a6,q))
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
B.c.i2(a5)
return new A.Kh(s,p,o,n,m,l,k,j,i,d,c,b,a,a0,a1,a2,a3,a4,h,e,g,r,f,a5)},
RX(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.MP()
if(!a.ga3Q()||a.at){s=$.asm()
r=s}else{q=a.ax.length
p=a.SE()
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
if(c==null)c=$.aso()
b=l==null?$.asn():l
a1.a.push(new A.Ki(n,a0.a,a0.b,-1,-1,-1,0,g,f,e,d,a0.cx,m.a,m.b,h.a,h.b,k.a,k.b,j.a,j.b,i.a,i.b,a0.w,a0.x,A.alC(c),s,r,b,a0.dy))
a.CW=!1},
SE(){var s,r,q,p,o,n,m,l,k,j=this,i=j.ok,h=t.aa,g=h.a(A.L.prototype.gaL.call(j,j))
while(!0){s=i==null
if(!(s&&g!=null))break
i=g.ok
g=h.a(A.L.prototype.gaL.call(g,g))}r=j.ax
if(!s){r.toString
r=A.aBy(r,i)}h=t.Dr
q=A.a([],h)
p=A.a([],h)
for(o=null,n=0;n<r.length;++n){m=r[n]
l=m.p1
o=n>0?r[n-1].p1:null
if(n!==0)if(J.X(l)===J.X(o)){if(l!=null)o.toString
k=!0}else k=!1
else k=!0
if(!k&&p.length!==0){if(o!=null){if(!!p.immutable$list)A.K(A.O("sort"))
h=p.length-1
if(h-0<=32)A.KD(p,0,h,J.al8())
else A.KC(p,0,h,J.al8())}B.c.I(q,p)
B.c.a0(p)}p.push(new A.jD(m,l,n))}if(o!=null)B.c.i2(p)
B.c.I(q,p)
h=t.wg
return A.aA(new A.aC(q,new A.a6z(),h),!0,h.h("bm.E"))},
Na(a){if(this.b==null)return
B.mf.ev(0,a.M_(this.e))},
c_(){return"SemanticsNode#"+this.e},
a6L(a,b,c){return new A.Qv(a,this,b,!0,!0,null,c)},
LY(a){return this.a6L(B.Fw,null,a)}}
A.a6B.prototype={
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
if(s!=null){r=q.y;(r==null?q.y=A.b3(t.xJ):r).I(0,s)}for(s=this.b.cy,s=A.j1(s,s.r),r=this.c;s.q();)r.C(0,A.amQ(s.d))
a.k4!=null
s=q.c
r=q.x
q.c=A.agy(a.fr,a.ok,s,r)
r=q.r
s=q.x
q.r=A.agy(a.id,a.ok,r,s)
q.cy=Math.max(q.cy,a.k3+a.k2)
return!0},
$S:70}
A.a6z.prototype={
$1(a){return a.a},
$S:257}
A.jt.prototype={
aF(a,b){return B.d.aF(this.b,b.b)},
$ibe:1}
A.hr.prototype={
aF(a,b){return B.d.aF(this.a,b.a)},
NB(){var s,r,q,p,o,n,m,l,k,j=A.a([],t.iV)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
o=p.w
j.push(new A.jt(!0,A.nN(p,new A.t(o.a- -0.1,o.b- -0.1)).a,p))
j.push(new A.jt(!1,A.nN(p,new A.t(o.c+-0.1,o.d+-0.1)).a,p))}B.c.i2(j)
n=A.a([],t.dK)
for(s=j.length,r=this.b,o=t.T,m=null,l=0,q=0;q<j.length;j.length===s||(0,A.P)(j),++q){k=j[q]
if(k.a){++l
if(m==null)m=new A.hr(k.b,r,A.a([],o))
m.c.push(k.c)}else --l
if(l===0){m.toString
n.push(m)
m=null}}B.c.i2(n)
if(r===B.X){s=t.FF
n=A.aA(new A.cy(n,s),!0,s.h("bm.E"))}s=A.aj(n).h("fX<1,bX>")
return A.aA(new A.fX(n,new A.afi(),s),!0,s.h("o.E"))},
NA(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this.c,a4=a3.length
if(a4<=1)return a3
s=t.S
r=A.y(s,t.ju)
q=A.y(s,s)
for(p=this.b,o=p===B.X,p=p===B.t,n=a4,m=0;m<n;g===a4||(0,A.P)(a3),++m,n=g){l=a3[m]
r.l(0,l.e,l)
n=l.w
k=n.a
j=n.b
i=A.nN(l,new A.t(k+(n.c-k)/2,j+(n.d-j)/2))
for(n=a3.length,k=i.a,j=i.b,h=0;g=a3.length,h<g;a3.length===n||(0,A.P)(a3),++h){f=a3[h]
if((l==null?f==null:l===f)||q.j(0,f.e)===l.e)continue
g=f.w
e=g.a
d=g.b
c=A.nN(f,new A.t(e+(g.c-e)/2,d+(g.d-d)/2))
b=Math.atan2(c.b-j,c.a-k)
a=p&&-0.7853981633974483<b&&b<2.356194490192345
if(o)a0=b<-2.356194490192345||b>2.356194490192345
else a0=!1
if(a||a0)q.l(0,l.e,f.e)}}a1=A.a([],t.t)
a2=A.a(a3.slice(0),A.aj(a3))
B.c.dg(a2,new A.afe())
new A.aC(a2,new A.aff(),A.aj(a2).h("aC<1,k>")).Y(0,new A.afh(A.b3(s),q,a1))
a3=t.sC
a3=A.aA(new A.aC(a1,new A.afg(r),a3),!0,a3.h("bm.E"))
a4=A.aj(a3).h("cy<1>")
return A.aA(new A.cy(a3,a4),!0,a4.h("bm.E"))}}
A.afi.prototype={
$1(a){return a.NA()},
$S:101}
A.afe.prototype={
$2(a,b){var s,r,q=a.w,p=A.nN(a,new A.t(q.a,q.b))
q=b.w
s=A.nN(b,new A.t(q.a,q.b))
r=B.d.aF(p.b,s.b)
if(r!==0)return-r
return-B.d.aF(p.a,s.a)},
$S:69}
A.afh.prototype={
$1(a){var s=this,r=s.a
if(r.B(0,a))return
r.C(0,a)
r=s.b
if(r.R(0,a)){r=r.j(0,a)
r.toString
s.$1(r)}s.c.push(a)},
$S:59}
A.aff.prototype={
$1(a){return a.e},
$S:260}
A.afg.prototype={
$1(a){var s=this.a.j(0,a)
s.toString
return s},
$S:261}
A.agu.prototype={
$1(a){return a.NB()},
$S:101}
A.jD.prototype={
aF(a,b){var s,r=this.b
if(r==null||b.b==null)return this.c-b.c
r.toString
s=b.b
s.toString
return r.aF(0,s)},
$ibe:1}
A.wI.prototype={
Nb(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.b
if(e.a===0)return
s=A.b3(t.S)
r=A.a([],t.T)
for(q=t.aa,p=A.n(e).h("aH<1>"),o=p.h("o.E"),n=f.d;e.a!==0;){m=A.aA(new A.aH(e,new A.a6E(f),p),!0,o)
e.a0(0)
n.a0(0)
l=new A.a6F()
if(!!m.immutable$list)A.K(A.O("sort"))
k=m.length-1
if(k-0<=32)A.KD(m,0,k,l)
else A.KC(m,0,k,l)
B.c.I(r,m)
for(l=m.length,j=0;j<m.length;m.length===l||(0,A.P)(m),++j){i=m[j]
if(i.at||i.as){k=J.cd(i)
if(q.a(A.L.prototype.gaL.call(k,i))!=null){h=q.a(A.L.prototype.gaL.call(k,i))
h=h.at||h.as}else h=!1
if(h){q.a(A.L.prototype.gaL.call(k,i)).ia()
i.CW=!1}}}}B.c.dg(r,new A.a6G())
$.a6k.toString
g=new A.a6I(A.a([],t.fr))
for(q=r.length,j=0;j<r.length;r.length===q||(0,A.P)(r),++j){i=r[j]
if(i.CW&&i.b!=null)i.RX(g,s)}e.a0(0)
for(e=A.jz(s,s.r),q=A.n(e).c;e.q();){p=e.d
$.amN.j(0,p==null?q.a(p):p).toString}f.a.$1(new A.Kl(g.a))
f.aA()},
Uy(a,b){var s,r={},q=r.a=this.c.j(0,a)
if(q!=null)s=(q.at||q.as)&&!q.cx.R(0,b)
else s=!1
if(s)q.xW(new A.a6D(r,b))
s=r.a
if(s==null||!s.cx.R(0,b))return null
return r.a.cx.j(0,b)},
a5D(a,b,c){var s=this.Uy(a,b)
if(s!=null){s.$1(c)
return}if(b===B.Ut&&this.c.j(0,a).f!=null)this.c.j(0,a).f.$0()},
i(a){return"<optimized out>#"+A.bM(this)}}
A.a6E.prototype={
$1(a){return!this.a.d.B(0,a)},
$S:70}
A.a6F.prototype={
$2(a,b){return a.a-b.a},
$S:69}
A.a6G.prototype={
$2(a,b){return a.a-b.a},
$S:69}
A.a6D.prototype={
$1(a){if(a.cx.R(0,this.b)){this.a.a=a
return!1}return!0},
$S:70}
A.a6l.prototype={
jV(a,b){var s=this
s.e.l(0,a,b)
s.f=s.f|a.a
s.d=!0},
ef(a,b){this.jV(a,new A.a6m(b))},
sjy(a){a.toString
this.ef(B.dP,a)},
skL(a){a.toString
this.ef(B.Bi,a)},
stY(a){this.ef(B.dS,a)},
stW(a){this.ef(B.Uu,a)},
stZ(a){this.ef(B.dT,a)},
su_(a){this.ef(B.dQ,a)},
stX(a){this.ef(B.dR,a)},
sAo(a){this.ef(B.Bj,a)},
sAh(a){this.ef(B.Bh,a)},
sAe(a,b){this.ef(B.Uw,b)},
sAf(a,b){this.ef(B.UA,b)},
sAw(a,b){this.ef(B.Uq,b)},
sAu(a){this.jV(B.Ux,new A.a6p(a))},
sAs(a){this.jV(B.Uo,new A.a6n(a))},
sAv(a){this.jV(B.Uy,new A.a6q(a))},
sAt(a){this.jV(B.Up,new A.a6o(a))},
sAB(a){this.jV(B.Ur,new A.a6r(a))},
sAC(a){this.jV(B.Us,new A.a6s(a))},
sAi(a){this.ef(B.Uv,a)},
sAj(a){this.ef(B.Uz,a)},
sN2(a){return},
sN3(a){if(a==this.k3)return
this.k3=a
this.d=!0},
sA_(a){return},
syD(a){return},
sik(a,b){if(b===this.x2)return
this.x2=b
this.d=!0},
HZ(a){var s=this.ad;(s==null?this.ad=A.b3(t.xJ):s).C(0,a)},
b5(a,b){var s=this,r=s.aY,q=a.a
if(b)s.aY=r|q
else s.aY=r&~q
s.d=!0},
Ks(a){var s,r=this
if(a==null||!a.d||!r.d)return!0
if((r.f&a.f)!==0)return!1
if((r.aY&a.aY)!==0)return!1
if(r.R8.a.length!==0)s=a.R8.a.length!==0
else s=!1
if(s)return!1
return!0},
kf(a){var s,r,q=this
if(!a.d)return
q.e.I(0,a.e)
q.p3.I(0,a.p3)
q.f=q.f|a.f
q.aY=q.aY|a.aY
q.y2=a.y2
if(q.am==null)q.am=a.am
if(q.ap==null)q.ap=a.ap
if(q.ak==null)q.ak=a.ak
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
q.p4=A.agy(a.p4,a.y1,r,s)
s=q.R8
if(s.a==="")q.R8=a.R8
s=q.RG
if(s.a==="")q.RG=a.RG
s=q.rx
if(s.a==="")q.rx=a.rx
s=q.ry
r=q.y1
q.ry=A.agy(a.ry,a.y1,s,r)
if(q.to==="")q.to=a.to
q.xr=Math.max(q.xr,a.xr+a.x2)
q.d=q.d||a.d},
a1p(){var s=this,r=A.pC()
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
r.aY=s.aY
r.ad=s.ad
r.y2=s.y2
r.am=s.am
r.ap=s.ap
r.ak=s.ak
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
A.a6m.prototype={
$1(a){this.a.$0()},
$S:5}
A.a6p.prototype={
$1(a){a.toString
this.a.$1(A.nK(a))},
$S:5}
A.a6n.prototype={
$1(a){a.toString
this.a.$1(A.nK(a))},
$S:5}
A.a6q.prototype={
$1(a){a.toString
this.a.$1(A.nK(a))},
$S:5}
A.a6o.prototype={
$1(a){a.toString
this.a.$1(A.nK(a))},
$S:5}
A.a6r.prototype={
$1(a){var s,r,q
a.toString
s=J.aiQ(t.G.a(a),t.N,t.S)
r=s.j(0,"base")
r.toString
q=s.j(0,"extent")
q.toString
this.a.$1(A.a9Z(B.C,r,q,!1))},
$S:5}
A.a6s.prototype={
$1(a){a.toString
this.a.$1(A.bD(a))},
$S:5}
A.DI.prototype={
E(){return"DebugSemanticsDumpOrder."+this.b}}
A.pD.prototype={
aF(a,b){var s=this.a2o(b)
return s},
$ibe:1}
A.vz.prototype={
a2o(a){var s=a.b===this.b
if(s)return 0
return B.f.aF(this.b,a.b)}}
A.Qu.prototype={}
A.Qw.prototype={}
A.Qx.prototype={}
A.a6u.prototype={
M_(a){var s=A.aW(["type",this.a,"data",this.pR()],t.N,t.z)
if(a!=null)s.l(0,"nodeId",a)
return s},
a6O(){return this.M_(null)},
i(a){var s,r,q,p=A.a([],t.s),o=this.pR(),n=J.amk(o.gbn(o))
B.c.i2(n)
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.P)(n),++r){q=n[r]
p.push(A.h(q)+": "+A.h(o.j(0,q)))}return"SemanticsEvent("+B.c.b3(p,", ")+")"}}
A.aa5.prototype={
pR(){return A.aW(["message",this.b],t.N,t.z)}}
A.a1y.prototype={
pR(){return B.iv}}
A.a9s.prototype={
pR(){return B.iv}}
A.B6.prototype={
kH(a,b){return this.a4Y(a,!0)},
a4Y(a,b){var s=0,r=A.a2(t.N),q,p=this,o
var $async$kH=A.Y(function(c,d){if(c===1)return A.a_(d,r)
while(true)switch(s){case 0:s=3
return A.a4(p.cU(0,a),$async$kH)
case 3:o=d
if(o.byteLength<51200){q=B.S.dZ(0,A.cK(o.buffer,0,null))
s=1
break}q=A.Td(A.aD_(),o,'UTF8 decode for "'+a+'"',t.B6,t.N)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$kH,r)},
i(a){return"<optimized out>#"+A.bM(this)+"()"}}
A.UV.prototype={
kH(a,b){return this.NJ(a,!0)},
a4Z(a,b,c){var s,r={},q=this.b
if(q.R(0,a)){r=q.j(0,a)
r.toString
return c.h("ab<0>").a(r)}r.a=r.b=null
this.kH(a,!1).aE(b,c).aE(new A.UW(r,this,a,c),t.H)
s=r.a
if(s!=null)return s
s=new A.a7($.a8,c.h("a7<0>"))
r.b=new A.aI(s,c.h("aI<0>"))
q.l(0,a,s)
return r.b.a}}
A.UW.prototype={
$1(a){var s=this,r=new A.bp(a,s.d.h("bp<0>")),q=s.a
q.a=r
s.b.b.l(0,s.c,r)
q=q.b
if(q!=null)q.bR(0,a)},
$S(){return this.d.h("ay(0)")}}
A.a3r.prototype={
cU(a,b){var s,r=B.cd.ek(A.apD(A.A4(B.i5,b,B.S,!1)).e),q=$.hf.bh$
q===$&&A.b()
s=q.uO(0,"flutter/assets",A.kx(r.buffer,0,null)).aE(new A.a3s(b),t.B6)
return s},
tM(a){return this.a4W(a)},
a4W(a){var s=0,r=A.a2(t.gG),q,p=this,o
var $async$tM=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:s=3
return A.a4(p.cU(0,a),$async$tM)
case 3:o=c
q=A.a0F(A.cK(o.buffer,0,null))
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$tM,r)}}
A.a3s.prototype={
$1(a){if(a==null)throw A.c(A.ajt(A.a([A.aBZ(this.a),A.bo("The asset does not exist or has empty data.")],t.F)))
return a},
$S:262}
A.Ub.prototype={}
A.pE.prototype={
oT(){var s=$.Ts()
s.a.a0(0)
s.b.a0(0)},
jm(a){return this.a3E(a)},
a3E(a){var s=0,r=A.a2(t.H),q,p=this
var $async$jm=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:switch(A.bD(J.aM(t.a.a(a),"type"))){case"memoryPressure":p.oT()
break}s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$jm,r)},
RS(){var s=A.b6("controller")
s.sc3(A.pN(null,new A.a6L(s),null,!1,t.xe))
return J.aub(s.aD())},
a5X(){if(this.r$!=null)return
$.aO()
var s=A.aoB("AppLifecycleState.resumed")
if(s!=null)this.tq(s)},
wC(a){return this.Vu(a)},
Vu(a){var s=0,r=A.a2(t.dR),q,p=this,o
var $async$wC=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:a.toString
o=A.aoB(a)
o.toString
p.tq(o)
q=null
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$wC,r)},
wD(a){return this.VD(a)},
VD(a){var s=0,r=A.a2(t.H)
var $async$wD=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:t.j.a(a.b)
return A.a0(null,r)}})
return A.a1($async$wD,r)},
$idE:1}
A.a6L.prototype={
$0(){var s=0,r=A.a2(t.H),q=this,p,o,n
var $async$$0=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:o=A.b6("rawLicenses")
n=o
s=2
return A.a4($.Ts().kH("NOTICES",!1),$async$$0)
case 2:n.sc3(b)
p=q.a
n=J
s=3
return A.a4(A.Td(A.aD7(),o.aD(),"parseLicenses",t.N,t.rh),$async$$0)
case 3:n.jW(b,J.au4(p.aD()))
s=4
return A.a4(J.amc(p.aD()),$async$$0)
case 4:return A.a0(null,r)}})
return A.a1($async$$0,r)},
$S:58}
A.abL.prototype={
uO(a,b,c){var s=new A.a7($.a8,t.sB)
$.aO().Zl(b,c,A.awg(new A.abM(new A.aI(s,t.BB))))
return s},
C6(a,b){if(b==null){a=$.Tq().a.j(0,a)
if(a!=null)a.e=null}else $.Tq().Nh(a,new A.abN(b))}}
A.abM.prototype={
$1(a){var s,r,q,p
try{this.a.bR(0,a)}catch(q){s=A.ae(q)
r=A.au(q)
p=A.bo("during a platform message response callback")
A.e6(new A.bJ(s,r,"services library",p,null,!1))}},
$S:21}
A.abN.prototype={
$2(a,b){return this.Mv(a,b)},
Mv(a,b){var s=0,r=A.a2(t.H),q=1,p,o=[],n=this,m,l,k,j,i,h
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
m=A.ae(h)
l=A.au(h)
j=A.bo("during a platform message callback")
A.e6(new A.bJ(m,l,"services library",j,null,!1))
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
$S:266}
A.Y7.prototype={}
A.Xt.prototype={}
A.XC.prototype={}
A.Eb.prototype={}
A.Y9.prototype={}
A.E9.prototype={}
A.XK.prototype={}
A.WZ.prototype={}
A.XL.prototype={}
A.Eh.prototype={}
A.E7.prototype={}
A.Ee.prototype={}
A.Er.prototype={}
A.Xy.prototype={}
A.XQ.prototype={}
A.X7.prototype={}
A.Xl.prototype={}
A.WJ.prototype={}
A.Xb.prototype={}
A.Em.prototype={}
A.WL.prototype={}
A.XV.prototype={}
A.oU.prototype={}
A.ko.prototype={}
A.mq.prototype={}
A.kp.prototype={}
A.uy.prototype={}
A.a_t.prototype={
Tj(a){var s,r,q,p,o,n,m,l,k,j
this.d=!0
s=!1
for(n=this.c,m=0;!1;++m){r=n[m]
try{q=r.$1(a)
s=s||q}catch(l){p=A.ae(l)
o=A.au(l)
k=A.bo("while processing a key handler")
j=$.fL()
if(j!=null)j.$1(new A.bJ(p,o,"services library",k,null,!1))}}this.d=!1
return s},
JV(a){var s,r,q=this,p=a.a,o=a.b
if(a instanceof A.mq){q.a.l(0,p,o)
s=$.asa().j(0,o.a)
if(s!=null){r=q.b
if(r.B(0,s))r.v(0,s)
else r.C(0,s)}}else if(a instanceof A.kp)q.a.v(0,p)
return q.Tj(a)}}
A.uw.prototype={
E(){return"KeyDataTransitMode."+this.b}}
A.ux.prototype={
i(a){return"KeyMessage("+A.h(this.a)+")"}}
A.FQ.prototype={
a3h(a){var s,r=this,q=r.d
switch((q==null?r.d=B.GM:q).a){case 0:return!1
case 1:if(a.c===0&&a.d===0)return!1
s=A.ax8(a)
if(a.f&&r.e.length===0){r.b.JV(s)
r.En(A.a([s],t.DG),null)}else r.e.push(s)
return!1}},
En(a,b){var s,r,q,p,o=this.a
if(o!=null){s=new A.ux(a,b)
try{o=o.$1(s)
return o}catch(p){r=A.ae(p)
q=A.au(p)
o=A.bo("while processing the key message handler")
A.e6(new A.bJ(r,q,"services library",o,null,!1))}}return!1},
zt(a){var s=0,r=A.a2(t.a),q,p=this,o,n,m,l,k,j,i
var $async$zt=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:if(p.d==null){p.d=B.GL
p.c.a.push(p.gSZ())}o=A.ayN(t.a.a(a))
if(o instanceof A.i6){n=o.c
m=p.f
if(!n.Ns()){m.C(0,n.gdP())
l=!1}else{m.v(0,n.gdP())
l=!0}}else if(o instanceof A.ph){n=p.f
m=o.c
if(n.B(0,m.gdP())){n.v(0,m.gdP())
l=!1}else l=!0}else l=!0
if(l){p.c.a3y(o)
for(n=p.e,m=n.length,k=p.b,j=!1,i=0;i<n.length;n.length===m||(0,A.P)(n),++i)j=k.JV(n[i])||j
j=p.En(n,o)||j
B.c.a0(n)}else j=!0
q=A.aW(["handled",j],t.N,t.z)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$zt,r)},
T_(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.c,d=e.gdP(),c=e.gpb()
e=this.b.a
s=A.n(e).h("b8<1>")
r=A.kt(new A.b8(e,s),s.h("o.E"))
q=A.a([],t.DG)
p=e.j(0,d)
o=$.hf.dy$
n=a.a
if(n==="")n=f
if(a instanceof A.i6)if(p==null){m=new A.mq(d,c,n,o,!1)
r.C(0,d)}else m=new A.uy(d,p,n,o,!1)
else if(p==null)m=f
else{m=new A.kp(d,p,f,o,!1)
r.v(0,d)}for(s=this.c.d,l=A.n(s).h("b8<1>"),k=l.h("o.E"),j=r.ks(A.kt(new A.b8(s,l),k)),j=j.ga4(j),i=this.e;j.q();){h=j.gF(j)
if(h.k(0,d))q.push(new A.kp(h,c,f,o,!0))
else{g=e.j(0,h)
g.toString
i.push(new A.kp(h,g,f,o,!0))}}for(e=A.kt(new A.b8(s,l),k).ks(r),e=e.ga4(e);e.q();){l=e.gF(e)
k=s.j(0,l)
k.toString
i.push(new A.mq(l,k,f,o,!0))}if(m!=null)i.push(m)
B.c.I(i,q)}}
A.Oa.prototype={}
A.a1j.prototype={}
A.e.prototype={
gt(a){return B.f.gt(this.a)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.X(b)!==A.A(this))return!1
return b instanceof A.e&&b.a===this.a}}
A.l.prototype={
gt(a){return B.f.gt(this.a)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.X(b)!==A.A(this))return!1
return b instanceof A.l&&b.a===this.a}}
A.Ob.prototype={}
A.hW.prototype={
i(a){return"MethodCall("+this.a+", "+A.h(this.b)+")"}}
A.vR.prototype={
i(a){var s=this
return"PlatformException("+s.a+", "+A.h(s.b)+", "+A.h(s.c)+", "+A.h(s.d)+")"},
$ibr:1}
A.vb.prototype={
i(a){return"MissingPluginException("+A.h(this.a)+")"},
$ibr:1}
A.a93.prototype={
eQ(a){if(a==null)return null
return B.cQ.ek(A.cK(a.buffer,a.byteOffset,a.byteLength))},
bT(a){if(a==null)return null
return A.kx(B.cd.ek(a).buffer,0,null)}}
A.a0S.prototype={
bT(a){if(a==null)return null
return B.hp.bT(B.aB.t7(a))},
eQ(a){var s
if(a==null)return a
s=B.hp.eQ(a)
s.toString
return B.aB.dZ(0,s)}}
A.a0U.prototype={
fT(a){var s=B.bM.bT(A.aW(["method",a.a,"args",a.b],t.N,t.X))
s.toString
return s},
fR(a){var s,r,q,p=null,o=B.bM.eQ(a)
if(!t.G.b(o))throw A.c(A.bz("Expected method call Map, got "+A.h(o),p,p))
s=J.aJ(o)
r=s.j(o,"method")
q=s.j(o,"args")
if(typeof r=="string")return new A.hW(r,q)
throw A.c(A.bz("Invalid method call: "+A.h(o),p,p))},
IT(a){var s,r,q,p=null,o=B.bM.eQ(a)
if(!t.j.b(o))throw A.c(A.bz("Expected envelope List, got "+A.h(o),p,p))
s=J.aJ(o)
if(s.gp(o)===1)return s.j(o,0)
if(s.gp(o)===3)if(typeof s.j(o,0)=="string")r=s.j(o,1)==null||typeof s.j(o,1)=="string"
else r=!1
else r=!1
if(r){r=A.bD(s.j(o,0))
q=A.co(s.j(o,1))
throw A.c(A.ajY(r,s.j(o,2),q,p))}if(s.gp(o)===4)if(typeof s.j(o,0)=="string")if(s.j(o,1)==null||typeof s.j(o,1)=="string")r=s.j(o,3)==null||typeof s.j(o,3)=="string"
else r=!1
else r=!1
else r=!1
if(r){r=A.bD(s.j(o,0))
q=A.co(s.j(o,1))
throw A.c(A.ajY(r,s.j(o,2),q,A.co(s.j(o,3))))}throw A.c(A.bz("Invalid envelope: "+A.h(o),p,p))},
oD(a){var s=B.bM.bT([a])
s.toString
return s},
kv(a,b,c){var s=B.bM.bT([a,c,b])
s.toString
return s},
Jk(a,b){return this.kv(a,null,b)}}
A.a8N.prototype={
bT(a){var s
if(a==null)return null
s=A.aaK(64)
this.cV(0,s,a)
return s.j5()},
eQ(a){var s,r
if(a==null)return null
s=new A.w_(a)
r=this.fw(0,s)
if(s.b<a.byteLength)throw A.c(B.aC)
return r},
cV(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i=null
if(c==null)b.dk(0,0)
else if(A.jM(c))b.dk(0,c?1:2)
else if(typeof c=="number"){b.dk(0,6)
b.hi(8)
s=$.cT()
b.d.setFloat64(0,c,B.a8===s)
b.RJ(b.e)}else if(A.jN(c)){s=-2147483648<=c&&c<=2147483647
r=b.d
if(s){b.dk(0,3)
s=$.cT()
r.setInt32(0,c,B.a8===s)
b.ng(b.e,0,4)}else{b.dk(0,4)
s=$.cT()
B.fs.C4(r,0,c,s)}}else if(typeof c=="string"){b.dk(0,7)
s=c.length
q=new Uint8Array(s)
n=0
while(!0){if(!(n<s)){p=i
o=0
break}m=B.b.X(c,n)
if(m<=127)q[n]=m
else{p=B.cd.ek(B.b.bJ(c,n))
o=n
break}++n}if(p!=null){j.ec(b,o+p.length)
l=q.BYTES_PER_ELEMENT
k=A.dg(0,o,B.f.hh(q.byteLength,l),i,i)
b.jW(A.cK(q.buffer,q.byteOffset+0*l,(k-0)*l))
b.jW(p)}else{j.ec(b,s)
b.jW(q)}}else if(t.uo.b(c)){b.dk(0,8)
j.ec(b,c.length)
b.jW(c)}else if(t.fO.b(c)){b.dk(0,9)
s=c.length
j.ec(b,s)
b.hi(4)
b.jW(A.cK(c.buffer,c.byteOffset,4*s))}else if(t.D4.b(c)){b.dk(0,14)
s=c.length
j.ec(b,s)
b.hi(4)
b.jW(A.cK(c.buffer,c.byteOffset,4*s))}else if(t.cE.b(c)){b.dk(0,11)
s=c.length
j.ec(b,s)
b.hi(8)
b.jW(A.cK(c.buffer,c.byteOffset,8*s))}else if(t.j.b(c)){b.dk(0,12)
s=J.aJ(c)
j.ec(b,s.gp(c))
for(s=s.ga4(c);s.q();)j.cV(0,b,s.gF(s))}else if(t.G.b(c)){b.dk(0,13)
s=J.aJ(c)
j.ec(b,s.gp(c))
s.Y(c,new A.a8O(j,b))}else throw A.c(A.f0(c,i,i))},
fw(a,b){if(b.b>=b.a.byteLength)throw A.c(B.aC)
return this.iC(b.kW(0),b)},
iC(a,b){var s,r,q,p,o,n,m,l,k=this
switch(a){case 0:return null
case 1:return!0
case 2:return!1
case 3:s=b.b
r=$.cT()
q=b.a.getInt32(s,B.a8===r)
b.b+=4
return q
case 4:return b.uE(0)
case 6:b.hi(8)
s=b.b
r=$.cT()
q=b.a.getFloat64(s,B.a8===r)
b.b+=8
return q
case 5:case 7:p=k.dz(b)
return B.cQ.ek(b.kX(p))
case 8:return b.kX(k.dz(b))
case 9:p=k.dz(b)
b.hi(4)
s=b.a
o=A.anU(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+4*p
return o
case 10:return b.uF(k.dz(b))
case 14:p=k.dz(b)
b.hi(4)
s=b.a
r=s.buffer
s=s.byteOffset+b.b
A.T3(r,s,p)
o=new Float32Array(r,s,p)
b.b=b.b+4*p
return o
case 11:p=k.dz(b)
b.hi(8)
s=b.a
o=A.anS(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+8*p
return o
case 12:p=k.dz(b)
n=A.aR(p,null,!1,t.X)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.K(B.aC)
b.b=r+1
n[m]=k.iC(s.getUint8(r),b)}return n
case 13:p=k.dz(b)
s=t.X
n=A.y(s,s)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.K(B.aC)
b.b=r+1
r=k.iC(s.getUint8(r),b)
l=b.b
if(l>=s.byteLength)A.K(B.aC)
b.b=l+1
n.l(0,r,k.iC(s.getUint8(l),b))}return n
default:throw A.c(B.aC)}},
ec(a,b){var s,r
if(b<254)a.dk(0,b)
else{s=a.d
if(b<=65535){a.dk(0,254)
r=$.cT()
s.setUint16(0,b,B.a8===r)
a.ng(a.e,0,2)}else{a.dk(0,255)
r=$.cT()
s.setUint32(0,b,B.a8===r)
a.ng(a.e,0,4)}}},
dz(a){var s,r,q=a.kW(0)
switch(q){case 254:s=a.b
r=$.cT()
q=a.a.getUint16(s,B.a8===r)
a.b+=2
return q
case 255:s=a.b
r=$.cT()
q=a.a.getUint32(s,B.a8===r)
a.b+=4
return q
default:return q}}}
A.a8O.prototype={
$2(a,b){var s=this.a,r=this.b
s.cV(0,r,a)
s.cV(0,r,b)},
$S:72}
A.a8R.prototype={
fT(a){var s=A.aaK(64)
B.ag.cV(0,s,a.a)
B.ag.cV(0,s,a.b)
return s.j5()},
fR(a){var s,r,q
a.toString
s=new A.w_(a)
r=B.ag.fw(0,s)
q=B.ag.fw(0,s)
if(typeof r=="string"&&s.b>=a.byteLength)return new A.hW(r,q)
else throw A.c(B.nB)},
oD(a){var s=A.aaK(64)
s.dk(0,0)
B.ag.cV(0,s,a)
return s.j5()},
kv(a,b,c){var s=A.aaK(64)
s.dk(0,1)
B.ag.cV(0,s,a)
B.ag.cV(0,s,c)
B.ag.cV(0,s,b)
return s.j5()},
Jk(a,b){return this.kv(a,null,b)},
IT(a){var s,r,q,p,o,n
if(a.byteLength===0)throw A.c(B.Gk)
s=new A.w_(a)
if(s.kW(0)===0)return B.ag.fw(0,s)
r=B.ag.fw(0,s)
q=B.ag.fw(0,s)
p=B.ag.fw(0,s)
o=s.b<a.byteLength?A.co(B.ag.fw(0,s)):null
if(typeof r=="string")n=(q==null||typeof q=="string")&&s.b>=a.byteLength
else n=!1
if(n)throw A.c(A.ajY(r,p,A.co(q),o))
else throw A.c(B.Gl)}}
A.a2j.prototype={
a38(a,b,c){var s,r,q,p
if(t.yg.b(b)){this.b.v(0,a)
return}s=this.b
r=s.j(0,a)
q=A.aAk(c)
if(q==null)q=this.a
if(J.f(r==null?null:t.Ft.a(r.a),q))return
p=q.rO(a)
s.l(0,a,p)
B.Ty.fY("activateSystemCursor",A.aW(["device",p.b,"kind",t.Ft.a(p.a).a],t.N,t.z),t.H)}}
A.vd.prototype={}
A.e8.prototype={
i(a){var s=this.grQ()
return s}}
A.N0.prototype={
rO(a){throw A.c(A.c2(null))},
grQ(){return"defer"}}
A.R8.prototype={}
A.kU.prototype={
grQ(){return"SystemMouseCursor("+this.a+")"},
rO(a){return new A.R8(this,a)},
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return b instanceof A.kU&&b.a===this.a},
gt(a){return B.b.gt(this.a)}}
A.OG.prototype={}
A.k0.prototype={
go7(){var s,r=$.hf.bh$
r===$&&A.b()
s=r
return s},
ev(a,b){return this.N8(0,b,this.$ti.h("1?"))},
N8(a,b,c){var s=0,r=A.a2(c),q,p=this,o,n
var $async$ev=A.Y(function(d,e){if(d===1)return A.a_(e,r)
while(true)switch(s){case 0:o=p.b
n=o
s=3
return A.a4(p.go7().uO(0,p.a,o.bT(b)),$async$ev)
case 3:q=n.eQ(e)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$ev,r)},
uU(a){this.go7().C6(this.a,new A.U9(this,a))}}
A.U9.prototype={
$1(a){return this.Mo(a)},
Mo(a){var s=0,r=A.a2(t.yD),q,p=this,o,n
var $async$$1=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:o=p.a.b
n=o
s=3
return A.a4(p.b.$1(o.eQ(a)),$async$$1)
case 3:q=n.bT(c)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$$1,r)},
$S:104}
A.va.prototype={
go7(){var s,r=$.hf.bh$
r===$&&A.b()
s=r
return s},
nx(a,b,c,d){return this.WI(a,b,c,d,d.h("0?"))},
WI(a,b,c,d,e){var s=0,r=A.a2(e),q,p=this,o,n,m,l
var $async$nx=A.Y(function(f,g){if(f===1)return A.a_(g,r)
while(true)switch(s){case 0:o=p.b
n=o.fT(new A.hW(a,b))
m=p.a
s=3
return A.a4(p.go7().uO(0,m,n),$async$nx)
case 3:l=g
if(l==null){if(c){q=null
s=1
break}throw A.c(A.axH("No implementation found for method "+a+" on channel "+m))}q=d.h("0?").a(o.IT(l))
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$nx,r)},
mY(a){var s=this.go7()
s.C6(this.a,new A.a26(this,a))},
qv(a,b){return this.UM(a,b)},
UM(a,b){var s=0,r=A.a2(t.yD),q,p=2,o,n=this,m,l,k,j,i,h,g,f,e
var $async$qv=A.Y(function(c,d){if(c===1){o=d
s=p}while(true)switch(s){case 0:h=n.b
g=h.fR(a)
p=4
e=h
s=7
return A.a4(b.$1(g),$async$qv)
case 7:k=e.oD(d)
q=k
s=1
break
p=2
s=6
break
case 4:p=3
f=o
k=A.ae(f)
if(k instanceof A.vR){m=k
k=m.a
i=m.b
q=h.kv(k,m.c,i)
s=1
break}else if(k instanceof A.vb){q=null
s=1
break}else{l=k
h=h.Jk("error",J.cU(l))
q=h
s=1
break}s=6
break
case 3:s=2
break
case 6:case 1:return A.a0(q,r)
case 2:return A.a_(o,r)}})
return A.a1($async$qv,r)}}
A.a26.prototype={
$1(a){return this.a.qv(a,this.b)},
$S:104}
A.kA.prototype={
fY(a,b,c){return this.a4u(a,b,c,c.h("0?"))},
tF(a,b){return this.fY(a,null,b)},
a4u(a,b,c,d){var s=0,r=A.a2(d),q,p=this
var $async$fY=A.Y(function(e,f){if(e===1)return A.a_(f,r)
while(true)switch(s){case 0:q=p.Oy(a,b,!0,c)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$fY,r)}}
A.kq.prototype={
E(){return"KeyboardSide."+this.b}}
A.eq.prototype={
E(){return"ModifierKey."+this.b}}
A.vY.prototype={
ga5f(){var s,r,q,p=A.y(t.BL,t.FE)
for(s=0;s<9;++s){r=B.oq[s]
if(this.a4z(r)){q=this.MH(r)
if(q!=null)p.l(0,r,q)}}return p},
Ns(){return!0}}
A.hc.prototype={}
A.a42.prototype={
$0(){var s,r,q,p=this.b,o=J.aJ(p),n=A.co(o.j(p,"key")),m=n==null
if(!m){s=n.length
s=s!==0&&s===1}else s=!1
if(s)this.a.a=n
s=A.co(o.j(p,"code"))
if(s==null)s=""
m=m?"":n
r=A.nL(o.j(p,"location"))
if(r==null)r=0
q=A.nL(o.j(p,"metaState"))
if(q==null)q=0
p=A.nL(o.j(p,"keyCode"))
return new A.pg(s,m,r,q,p==null?0:p)},
$S:270}
A.i6.prototype={}
A.ph.prototype={}
A.a47.prototype={
a3y(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(a instanceof A.i6){p=a.c
i.d.l(0,p.gdP(),p.gpb())}else if(a instanceof A.ph)i.d.v(0,a.c.gdP())
i.ZS(a)
for(p=i.a,o=A.aA(p,!0,t.vc),n=o.length,m=0;m<n;++m){s=o[m]
try{if(B.c.B(p,s))s.$1(a)}catch(l){r=A.ae(l)
q=A.au(l)
k=A.bo("while processing a raw key listener")
j=$.fL()
if(j!=null)j.$1(new A.bJ(r,q,"services library",k,null,!1))}}return!1},
ZS(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=a1.c,f=g.ga5f(),e=t.F3,d=A.y(e,t.lT),c=A.b3(e),b=this.d,a=A.kt(new A.b8(b,A.n(b).h("b8<1>")),e),a0=a1 instanceof A.i6
if(a0)a.C(0,g.gdP())
for(s=null,r=0;r<9;++r){q=B.oq[r]
p=$.asd()
o=p.j(0,new A.cc(q,B.bd))
if(o==null)continue
if(o.B(0,g.gdP()))s=q
if(f.j(0,q)===B.ck){c.I(0,o)
if(o.kh(0,a.gj2(a)))continue}n=f.j(0,q)==null?A.b3(e):p.j(0,new A.cc(q,f.j(0,q)))
if(n==null)continue
for(p=new A.qG(n,n.r),p.c=n.e,m=A.n(p).c;p.q();){l=p.d
if(l==null)l=m.a(l)
k=$.asc().j(0,l)
k.toString
d.l(0,l,k)}}e=g instanceof A.a40
j=(e||g instanceof A.pg)&&b.j(0,B.bG)!=null&&!J.f(b.j(0,B.bG),B.dn)
for(a=$.aiI(),a=A.j1(a,a.r);a.q();){p=a.d
i=j&&p.k(0,B.bG)
if(!c.B(0,p)&&!i)b.v(0,p)}if(!(g instanceof A.a3Z)&&!(g instanceof A.a41))b.v(0,B.dE)
b.I(0,d)
if(a0&&s!=null&&!b.R(0,g.gdP())){if(e&&g.gdP().k(0,B.bH)||g instanceof A.a4_||g instanceof A.a3Y){h=$.aiI().j(0,g.gdP())
if(h!=null)b.l(0,g.gdP(),h)}if(g instanceof A.pg&&g.gdP().k(0,B.bH))b.l(0,g.gdP(),g.gpb())}}}
A.cc.prototype={
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return b instanceof A.cc&&b.a===this.a&&b.b==this.b},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.PN.prototype={}
A.PM.prototype={}
A.a3Y.prototype={}
A.a3Z.prototype={}
A.a4_.prototype={}
A.a40.prototype={}
A.a41.prototype={}
A.pg.prototype={
gdP(){var s=this.a,r=B.T6.j(0,s)
return r==null?new A.l(98784247808+B.b.gt(s)):r},
gpb(){var s,r=this.b,q=B.T8.j(0,r),p=q==null?null:q[this.c]
if(p!=null)return p
s=B.T5.j(0,r)
if(s!=null)return s
if(r.length===1)return new A.e(B.b.X(r.toLowerCase(),0))
return new A.e(B.b.gt(this.a)+98784247808)},
a4z(a){var s=this
switch(a.a){case 0:return(s.d&4)!==0
case 1:return(s.d&1)!==0
case 2:return(s.d&2)!==0
case 3:return(s.d&8)!==0
case 5:return(s.d&16)!==0
case 4:return(s.d&32)!==0
case 6:return(s.d&64)!==0
case 7:case 8:return!1}},
MH(a){return B.ck},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.A(s))return!1
return b instanceof A.pg&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.wg.prototype={
ga6y(){var s=this
if(s.c)return new A.bp(s.a,t.m6)
if(s.b==null){s.b=new A.aI(new A.a7($.a8,t.jr),t.Fk)
s.qu()}return s.b.a},
qu(){var s=0,r=A.a2(t.H),q,p=this,o
var $async$qu=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:s=3
return A.a4(B.iB.tF("get",t.mE),$async$qu)
case 3:o=b
if(p.b==null){s=1
break}p.FU(o)
case 1:return A.a0(q,r)}})
return A.a1($async$qu,r)},
FU(a){var s,r=a==null
if(!r){s=J.aM(a,"enabled")
s.toString
A.nK(s)}else s=!1
this.a3A(r?null:t.Fx.a(J.aM(a,"data")),s)},
a3A(a,b){var s,r,q=this,p=q.c&&b
q.d=p
if(p)$.bP.ax$.push(new A.a54(q))
s=q.a
if(b){p=q.Tb(a)
r=t.N
if(p==null){p=t.X
p=A.y(p,p)}r=new A.cx(p,q,null,"root",A.y(r,t.hp),A.y(r,t.Cm))
p=r}else p=null
q.a=p
q.c=!0
r=q.b
if(r!=null)r.bR(0,p)
q.b=null
if(q.a!=s){q.aA()
if(s!=null)s.m()}},
wX(a){return this.Xf(a)},
Xf(a){var s=0,r=A.a2(t.H),q=this,p
var $async$wX=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:p=a.a
switch(p){case"push":q.FU(t.mE.a(a.b))
break
default:throw A.c(A.c2(p+" was invoked but isn't implemented by "+A.A(q).i(0)))}return A.a0(null,r)}})
return A.a1($async$wX,r)},
Tb(a){if(a==null)return null
return t.ym.a(B.ag.eQ(A.kx(a.buffer,a.byteOffset,a.byteLength)))},
N0(a){var s=this
s.r.C(0,a)
if(!s.f){s.f=!0
$.bP.ax$.push(new A.a55(s))}},
Ep(){var s,r,q,p,o,n=this
if(!n.f)return
n.f=!1
for(s=n.r,r=A.jz(s,s.r),q=A.n(r).c;r.q();){p=r.d;(p==null?q.a(p):p).w=!1}s.a0(0)
o=B.ag.bT(n.a.a)
B.iB.fY("put",A.cK(o.buffer,o.byteOffset,o.byteLength),t.H)},
JH(){if($.bP.ch$)return
this.Ep()}}
A.a54.prototype={
$1(a){this.a.d=!1},
$S:2}
A.a55.prototype={
$1(a){return this.a.Ep()},
$S:2}
A.cx.prototype={
gnH(){var s=J.AW(this.a,"c",new A.a51())
s.toString
return t.mE.a(s)},
giT(){var s=J.AW(this.a,"v",new A.a52())
s.toString
return t.mE.a(s)},
a67(a,b,c){var s=this,r=J.e0(s.giT(),b),q=c.h("0?").a(J.iI(s.giT(),b))
if(J.fM(s.giT()))J.iI(s.a,"v")
if(r)s.ls()
return q},
a0P(a,b){var s,r,q,p,o=this,n=o.f
if(n.R(0,a)||!J.e0(o.gnH(),a)){n=t.N
s=new A.cx(A.y(n,t.X),null,null,a,A.y(n,t.hp),A.y(n,t.Cm))
o.ib(s)
return s}r=t.N
q=o.c
p=J.aM(o.gnH(),a)
p.toString
s=new A.cx(t.mE.a(p),q,o,a,A.y(r,t.hp),A.y(r,t.Cm))
n.l(0,a,s)
return s},
ib(a){var s=this,r=a.d
if(r!==s){if(r!=null)r.qV(a)
a.d=s
s.Dg(a)
if(a.c!=s.c)s.G7(a)}},
Tx(a){this.qV(a)
a.d=null
if(a.c!=null){a.xn(null)
a.HL(this.gG6())}},
ls(){var s,r=this
if(!r.w){r.w=!0
s=r.c
if(s!=null)s.N0(r)}},
G7(a){a.xn(this.c)
a.HL(this.gG6())},
xn(a){var s=this,r=s.c
if(r==a)return
if(s.w)if(r!=null)r.r.v(0,s)
s.c=a
if(s.w&&a!=null){s.w=!1
s.ls()}},
qV(a){var s,r,q,p=this
if(J.f(p.f.v(0,a.e),a)){J.iI(p.gnH(),a.e)
s=p.r
r=s.j(0,a.e)
if(r!=null){q=J.bH(r)
p.Ez(q.dQ(r))
if(q.gO(r))s.v(0,a.e)}if(J.fM(p.gnH()))J.iI(p.a,"c")
p.ls()
return}s=p.r
q=s.j(0,a.e)
if(q!=null)J.iI(q,a)
q=s.j(0,a.e)
q=q==null?null:J.fM(q)
if(q===!0)s.v(0,a.e)},
Dg(a){var s=this
if(s.f.R(0,a.e)){J.jV(s.r.bD(0,a.e,new A.a50()),a)
s.ls()
return}s.Ez(a)
s.ls()},
Ez(a){this.f.l(0,a.e,a)
J.cG(this.gnH(),a.e,a.a)},
HM(a,b){var s,r,q=this.f
q=q.gaS(q)
s=this.r
s=s.gaS(s)
r=q.a32(0,new A.fX(s,new A.a53(),A.n(s).h("fX<o.E,cx>")))
J.jW(b?A.aA(r,!1,A.n(r).h("o.E")):r,a)},
HL(a){return this.HM(a,!1)},
a6d(a){var s,r=this
if(a===r.e)return
s=r.d
if(s!=null)s.qV(r)
r.e=a
s=r.d
if(s!=null)s.Dg(r)},
m(){var s,r=this
r.HM(r.gTw(),!0)
r.f.a0(0)
r.r.a0(0)
s=r.d
if(s!=null)s.qV(r)
r.d=null
r.xn(null)
r.x=!0},
i(a){return"RestorationBucket(restorationId: "+this.e+", owner: "+A.h(this.b)+")"}}
A.a51.prototype={
$0(){var s=t.X
return A.y(s,s)},
$S:106}
A.a52.prototype={
$0(){var s=t.X
return A.y(s,s)},
$S:106}
A.a50.prototype={
$0(){return A.a([],t.oy)},
$S:273}
A.a53.prototype={
$1(a){return a},
$S:274}
A.TS.prototype={}
A.ig.prototype={
Ha(){var s,r,q,p,o=this,n=o.a
n=n==null?null:n.a
s=o.e
s=s==null?null:s.a
r=o.f.E()
q=o.r.E()
p=o.c
p=p==null?null:p.E()
return A.aW(["systemNavigationBarColor",n,"systemNavigationBarDividerColor",null,"systemStatusBarContrastEnforced",o.w,"statusBarColor",s,"statusBarBrightness",r,"statusBarIconBrightness",q,"systemNavigationBarIconBrightness",p,"systemNavigationBarContrastEnforced",o.d],t.N,t.z)},
i(a){return"SystemUiOverlayStyle("+this.Ha().i(0)+")"},
gt(a){var s=this
return A.S(s.a,s.b,s.d,s.e,s.f,s.r,s.w,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s,r=this
if(b==null)return!1
if(J.X(b)!==A.A(r))return!1
if(b instanceof A.ig)if(J.f(b.a,r.a))if(J.f(b.e,r.e))if(b.r===r.r)if(b.f===r.f)s=b.c==r.c
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.a9m.prototype={
$0(){if(!J.f($.pV,$.aki)){B.c0.fY("SystemChrome.setSystemUIOverlayStyle",$.pV.Ha(),t.H)
$.aki=$.pV}$.pV=null},
$S:0}
A.xa.prototype={
E(){return"SystemSoundType."+this.b}}
A.a9u.prototype={
V(a,b){return new A.Nl(b,this)}}
A.Vj.prototype={
h9(a){var s,r,q,p,o,n=a.a
if(n<=0)return B.cO
s=this.a
r=s.length
if(n<=r)q=n===r&&a.b===B.C
else q=!0
if(q)return new A.b0(r,B.M)
switch(a.b.a){case 0:p=Math.min(n-1,r)
o=Math.min(n,r)
break
case 1:p=Math.min(n,r)
o=Math.min(n+1,r)
break
default:o=null
p=null}return new A.b0(A.aoL(s,p,o).b,B.C)},
ha(a){var s,r,q,p,o,n=a.a
if(n>=0)s=n===0&&a.b===B.M
else s=!0
if(s)return B.cO
s=this.a
r=s.length
if(n>=r)return new A.b0(r,B.M)
switch(a.b.a){case 0:q=Math.min(n-1,r)
p=Math.min(n,r)
break
case 1:q=Math.min(n,r)
p=Math.min(n+1,r)
break
default:p=null
q=null}o=A.aoL(s,q,p)
return new A.b0(r-(o.a.length-o.c),B.M)}}
A.aaH.prototype={
h9(a){return new A.b0(this.a.b.mT(a).a,B.C)},
ha(a){return new A.b0(this.a.b.mT(a).b,B.M)}}
A.a1n.prototype={
h9(a){return new A.b0(this.a.BD(a).a,B.C)},
ha(a){return new A.b0(this.a.BD(a).b,B.M)}}
A.WE.prototype={
h9(a){return B.cO},
ha(a){return new A.b0(this.a.length,B.M)}}
A.aaF.prototype={
h9(a){var s,r=a.a,q=this.a,p=q.length
if(r<=p)r=r===p&&a.b===B.C
else r=!0
if(r)a=new A.b0(p,B.M)
s=a.a
if(s<=0)return B.cO
if(a.b===B.C&&!A.a9W(B.b.ab(q,s)))return a
for(;--s,s>=0;)if(!A.a9W(B.b.ab(q,s)))return new A.b0(s+1,B.M)
return B.cO},
ha(a){var s,r=a.a,q=this.a,p=q.length
if(r>=p)return new A.b0(p,B.M)
if(r>=0)r=r===0&&a.b===B.M
else r=!0
if(r)a=B.cO
s=a.a
if(a.b===B.M&&!A.a9W(B.b.ab(q,s-1)))return a
for(;s<p;++s)if(!A.a9W(B.b.ab(q,s)))return new A.b0(s,B.C)
return new A.b0(p,B.M)}}
A.Nl.prototype={
h9(a){return this.a.h9(this.b.h9(a))},
ha(a){return this.a.ha(this.b.ha(a))}}
A.Jb.prototype={
DI(a){if(this.a)switch(a.b.a){case 0:return new A.b0(a.a,B.C)
case 1:return new A.b0(a.a+1,B.M)}else switch(a.b.a){case 0:return new A.b0(a.a-1,B.C)
case 1:return new A.b0(a.a,B.M)}},
h9(a){return this.DI(a)},
ha(a){return this.DI(a)}}
A.La.prototype={
i(a){var s,r,q=this,p=", isDirectional: "
if(!q.gkG())return"TextSelection.invalid"
s=""+q.c
r=""+q.f
return q.a===q.b?"TextSelection.collapsed(offset: "+s+", affinity: "+q.e.i(0)+p+r+")":"TextSelection(baseOffset: "+s+", extentOffset: "+q.d+p+r+")"},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof A.La))return!1
if(!r.gkG())return!b.gkG()
if(b.c===r.c)if(b.d===r.d)s=(r.a!==r.b||b.e===r.e)&&b.f===r.f
else s=!1
else s=!1
return s},
gt(a){var s,r=this
if(!r.gkG())return A.S(-B.f.gt(1),-B.f.gt(1),A.eT(B.C),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)
s=r.a===r.b?A.eT(r.e):A.eT(B.C)
return A.S(B.f.gt(r.c),B.f.gt(r.d),s,B.nN.gt(r.f),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.Ke.prototype={
E(){return"SelectionChangedCause."+this.b}}
A.L8.prototype={
gSu(){var s=this.c
s===$&&A.b()
return s},
qF(a){return this.X1(a)},
X1(a){var s=0,r=A.a2(t.z),q,p=2,o,n=this,m,l,k,j,i
var $async$qF=A.Y(function(b,c){if(b===1){o=c
s=p}while(true)switch(s){case 0:p=4
s=7
return A.a4(n.wI(a),$async$qF)
case 7:k=c
q=k
s=1
break
p=2
s=6
break
case 4:p=3
i=o
m=A.ae(i)
l=A.au(i)
k=A.bo("during method call "+a.a)
A.e6(new A.bJ(m,l,"services library",k,new A.a9V(a),!1))
throw i
s=6
break
case 3:s=2
break
case 6:case 1:return A.a0(q,r)
case 2:return A.a_(o,r)}})
return A.a1($async$qF,r)},
wI(a){return this.Wj(a)},
Wj(a){var s=0,r=A.a2(t.z),q,p=this,o,n,m,l,k,j
var $async$wI=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:j=a.a
if(j==="TextInputClient.focusElement"){p.f.j(0,J.aM(t.j.a(a.b),0))
s=1
break}else if(j==="TextInputClient.requestElementsInRect"){o=J.lw(t.j.a(a.b),t.fY)
n=A.n(o).h("aC<V.E,W>")
m=p.f
l=A.n(m).h("b8<1>")
k=l.h("dI<o.E,x<@>>")
q=A.aA(new A.dI(new A.aH(new A.b8(m,l),new A.a9S(p,A.aA(new A.aC(o,new A.a9T(),n),!0,n.h("bm.E"))),l.h("aH<o.E>")),new A.a9U(p),k),!0,k.h("o.E"))
s=1
break}else if(j==="TextInputClient.scribbleInteractionBegan"){s=1
break}else if(j==="TextInputClient.scribbleInteractionFinished"){s=1
break}s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$wI,r)}}
A.a9V.prototype={
$0(){var s=null
return A.a([A.hF("call",this.a,!0,B.aJ,s,!1,s,s,B.ap,s,!1,!0,!0,B.aW,s,t.fw)],t.F)},
$S:17}
A.a9T.prototype={
$1(a){return a},
$S:276}
A.a9S.prototype={
$1(a){this.a.f.j(0,a)
return!1},
$S:30}
A.a9U.prototype={
$1(a){var s=this.a.f.j(0,a),r=s.gyn(s)
s=[a]
B.c.I(s,[r.ghK(r),r.gBe(r),r.gbj(r),r.gbQ(r)])
return s},
$S:277}
A.xl.prototype={}
A.P7.prototype={}
A.Sn.prototype={}
A.agW.prototype={
$1(a){this.a.sc3(a)
return!1},
$S:50}
A.aN.prototype={}
A.bn.prototype={
fK(a){this.b=a},
iv(a,b){this.gtG()
return!0},
gtG(){return!0},
rJ(a){return!0},
a_R(a){var s=this.a
s.b=!0
s.a.push(a)
return null},
Lx(a){return this.a.v(0,a)}}
A.lR.prototype={}
A.lJ.prototype={
d7(a){return this.c.$1(a)}}
A.TA.prototype={
Kn(a,b,c){if(a instanceof A.lR)return a.mq(b,c)
else return a.d7(b)}}
A.iJ.prototype={
aj(){return new A.xI(A.b3(t.nT),new A.B(),B.m)}}
A.TC.prototype={
$1(a){var s=a.f
s.toString
t.ke.a(s)
return!1},
$S:51}
A.TF.prototype={
$1(a){var s,r=this,q=a.f
q.toString
s=A.aiV(t.ke.a(q),r.b,r.d)
if(s!=null){r.c.Cz(a,null)
r.a.a=s
return!0}return!1},
$S:51}
A.TD.prototype={
$1(a){var s,r=a.f
r.toString
s=A.aiV(t.ke.a(r),this.b,this.c)
if(s!=null){this.a.a=s
return!0}return!1},
$S:51}
A.TG.prototype={
$1(a){var s,r,q=this,p=a.f
p.toString
s=q.b
r=A.aiV(t.ke.a(p),s,q.d)
p=r!=null
if(p&&r.iv(0,s))q.a.a=A.amm(a).Kn(r,s,q.c)
return p},
$S:51}
A.xI.prototype={
aC(){this.aU()
this.Hh()},
UE(a){this.aw(new A.aaO(this))},
Hh(){var s,r,q,p,o=this,n=o.a.d
n=n.gaS(n)
s=A.kt(n,A.n(n).h("o.E"))
r=o.d.ks(s)
n=o.d
n.toString
q=s.ks(n)
for(n=r.ga4(r),p=o.gEV();n.q();)n.gF(n).Lx(p)
for(n=q.ga4(q);n.q();)n.gF(n).a_R(p)
o.d=s},
aW(a){this.bl(a)
this.Hh()},
m(){var s,r,q,p,o=this
o.aQ()
for(s=o.d,s=A.jz(s,s.r),r=o.gEV(),q=A.n(s).c;s.q();){p=s.d;(p==null?q.a(p):p).Lx(r)}o.d=null},
M(a){var s=this.a
return new A.xH(null,s.d,this.e,s.e,null)}}
A.aaO.prototype={
$0(){this.a.e=new A.B()},
$S:0}
A.xH.prototype={
c0(a){var s
if(this.w===a.w)s=!A.aik(a.r,this.r)
else s=!0
return s}}
A.LF.prototype={
d7(a){a.a7z()
return null}}
A.E1.prototype={
rJ(a){return this.c},
d7(a){}}
A.nT.prototype={}
A.o7.prototype={}
A.hH.prototype={}
A.E_.prototype={}
A.mP.prototype={}
A.J8.prototype={
iv(a,b){var s,r,q,p,o,n=$.ai.K$.f.f
if(n==null||n.e==null)return!1
for(s=t.q,r=0;r<2;++r){q=B.Hd[r]
p=n.e
p.toString
o=A.aiX(p,q,s)
if(o!=null&&o.iv(0,q)){this.c=o
this.d=q
return!0}}return!1},
d7(a){var s,r=this.c
r===$&&A.b()
s=this.d
s===$&&A.b()
r.d7(s)}}
A.P1.prototype={
WJ(a,b,c){var s
a.fK(this.gkp())
s=A.n(this).h("lR<1>").b(a)?a.mq(b,c):a.d7(b)
a.fK(null)
return s},
mq(a,b){var s=this,r=A.aiW(s.gtN(),A.n(s).c)
return r==null?s.a4t(a,s.b,b):s.WJ(r,a,b)},
d7(a){return this.mq(a,null)},
gtG(){var s=this,r=A.aiX(s.gtN(),null,A.n(s).c)
if(r!=null){r.fK(s.gkp())
r.gtG()
r.fK(null)}else s.gkp().gtG()
return!0},
iv(a,b){var s,r=this,q=A.aiW(r.gtN(),A.n(r).c),p=q==null
if(!p)q.fK(r.gkp())
s=(p?r.gkp():q).iv(0,b)
if(!p)q.fK(null)
return s},
rJ(a){var s,r=this,q=A.aiW(r.gtN(),A.n(r).c),p=q==null
if(!p)q.fK(r.gkp())
s=(p?r.gkp():q).rJ(a)
if(!p)q.fK(null)
return s}}
A.yZ.prototype={
a4t(a,b,c){var s=this.e
if(b==null)return s.d7(a)
else return s.d7(a)},
gkp(){return this.e},
gtN(){return this.f}}
A.LN.prototype={}
A.LM.prototype={}
A.O3.prototype={}
A.An.prototype={
fK(a){this.NI(a)
this.e.fK(a)}}
A.rw.prototype={
aG(a){var s=new A.w4(this.e,!0,null,A.aw(),this.$ti.h("w4<1>"))
s.aJ()
s.saV(null)
return s},
aN(a,b){b.sn(0,this.e)
b.sNv(!0)}}
A.xF.prototype={
aj(){return new A.A5(B.m)}}
A.A5.prototype={
gWw(){var s,r
$.ai.toString
s=$.aO()
if(s.gyH()!=="/"){$.ai.toString
s=s.gyH()}else{r=this.a.ax
$.ai.toString
s=s.gyH()
s=s}return s},
aC(){var s=this
s.aU()
s.a_n()
$.ai.toString
s.r=s.xm($.aO().a.f,s.a.fy)
$.ai.ai$.push(s)},
aW(a){this.bl(a)
this.HB(a)},
m(){B.c.v($.ai.ai$,this)
var s=this.d
if(s!=null)s.m()
this.aQ()},
DX(){var s=this.d
if(s!=null)s.m()
this.e=this.d=null},
HB(a){var s,r=this
r.a.toString
if(r.gHK()){r.DX()
if(r.f==null||r.a.c!=a.c){s=r.a.c
r.f=s==null?new A.kg(r,t.yh):s}}else{r.DX()
r.f=null}},
a_n(){return this.HB(null)},
gHK(){var s=this.a
if(s.Q==null){s=s.as
s=s==null?null:s.gbC(s)
s=s===!0||this.a.d!=null||!1}else s=!0
return s},
XC(a){var s,r=this,q=a.a,p=q==="/"&&r.a.Q!=null?new A.ag4(r):r.a.as.j(0,q)
if(p!=null)return r.a.f.$1$2(a,p,t.z)
s=r.a.d
if(s!=null)return s.$1(a)
return null},
XQ(a){return this.a.at.$1(a)},
j4(){var s=0,r=A.a2(t.y),q,p=this,o,n
var $async$j4=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:p.a.toString
o=p.f
n=o==null?null:o.gbr()
if(n==null){q=!1
s=1
break}q=n.KO()
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$j4,r)},
ou(a){return this.a2h(a)},
a2h(a){var s=0,r=A.a2(t.y),q,p=this,o,n
var $async$ou=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:p.a.toString
o=p.f
n=o==null?null:o.gbr()
if(n==null){q=!1
s=1
break}o=n.xq(a,null,t.X)
o.toString
o=A.apr(o,B.Cw,!1,null)
n.e.push(o)
n.we()
n.Dv(o.a)
q=!0
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$ou,r)},
xm(a,b){this.a.toString
return A.aD6(a,b)},
yM(a){var s=this,r=s.xm(a,s.a.fy)
if(!r.k(0,s.r))s.aw(new A.ag7(s,r))},
M(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g={}
g.a=null
s=i.a
s.toString
if(i.gHK()){s=i.f
r=i.gWw()
q=i.a
p=q.e==null?A.aEx():new A.ag5(i)
o=q.ay
o.toString
g.a=A.anb(!0,new A.vq(r,i.gXB(),i.gXP(),o,"nav",p,!0,s),"Navigator Scope",h,h)
s=q}else{s=i.a
s.toString}g.b=null
n=new A.hB(new A.ag6(g,i),h)
g.b=n
n=A.tn(n,h,B.cN,!0,s.cy,h,h,B.aQ)
g.b=n
s=$.aAc
if(s)m=new A.IN(15,!1,!1,h)
else m=h
if(m!=null)g.b=A.ie(B.aS,A.a([n,A.J2(h,m,h,h,0,0,0,h)],t.E),B.T,B.b8)
s=i.a
r=s.CW
s=s.db
s=A.b2(255,s.gn(s)>>>16&255,s.gn(s)>>>8&255,s.gn(s)&255)
g=g.b
l=i.xm(A.a([i.a.dx],t.as),i.a.fy)
q=t.eu
p=A.a([],q)
B.c.I(p,i.a.dy)
p.push(B.Es)
q=A.a(p.slice(0),q)
k=new A.uK(l,q,new A.Li(r,s,g,h),h)
A.dw(a)
g=i.a
j=new A.yH(k,h)
k=j
g=g.p3
s=A.aAb()
r=A.oW($.asK(),t.n,t.nT)
q=t.B8
p=t.dc
r.l(0,B.Ce,new A.yZ(new A.pu(new A.bk(A.a([],q),p)),a,!1,!1,!1,!1,new A.bk(A.a([],q),p),t.uq.h("yZ<bn.T>")))
return new A.wj(new A.wM(A.akb(new A.DR(A.TB(r,A.anc(new A.L3(new A.wN(k,h),h),new A.w0(A.y(t.j5,t.uJ)))),h),"<Default WidgetsApp Shortcuts>",s),h),g,h)}}
A.ag4.prototype={
$1(a){var s=this.a.a.Q
s.toString
return s},
$S:14}
A.ag7.prototype={
$0(){this.a.r=this.b},
$S:0}
A.ag5.prototype={
$2(a,b){return this.a.a.e.$1(b)},
$S:110}
A.ag6.prototype={
$1(a){return this.b.a.ch.$2(a,this.a.a)},
$S:14}
A.SZ.prototype={}
A.oe.prototype={
E(){return"ConnectionState."+this.b}}
A.f1.prototype={
i(a){var s=this
return"AsyncSnapshot("+s.a.i(0)+", "+A.h(s.b)+", "+A.h(s.c)+", "+A.h(s.d)+")"},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return s.$ti.b(b)&&b.a===s.a&&J.f(b.b,s.b)&&J.f(b.c,s.c)&&b.d==s.d},
gt(a){return A.S(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.oy.prototype={
aj(){return new A.yg(B.m,this.$ti.h("yg<1>"))}}
A.yg.prototype={
aC(){var s=this
s.aU()
s.a.toString
s.e=new A.f1(B.nj,null,null,null,s.$ti.h("f1<1>"))
s.GZ()},
aW(a){var s,r=this
r.bl(a)
if(a.c!==r.a.c){if(r.d!=null){r.d=null
s=r.e
s===$&&A.b()
r.e=new A.f1(B.nj,s.b,s.c,s.d,s.$ti)}r.GZ()}},
M(a){var s,r=this.a
r.toString
s=this.e
s===$&&A.b()
return r.d.$2(a,s)},
m(){this.d=null
this.aQ()},
GZ(){var s,r=this,q=r.a
q.toString
s=r.d=new A.B()
q.c.dR(new A.aco(r,s),new A.acp(r,s),t.H)
q=r.e
q===$&&A.b()
if(q.a!==B.ee)r.e=new A.f1(B.Fk,q.b,q.c,q.d,q.$ti)}}
A.aco.prototype={
$1(a){var s=this.a
if(s.d===this.b)s.aw(new A.acn(s,a))},
$S(){return this.a.$ti.h("ay(1)")}}
A.acn.prototype={
$0(){var s=this.a
s.e=new A.f1(B.ee,this.b,null,null,s.$ti.h("f1<1>"))},
$S:0}
A.acp.prototype={
$2(a,b){var s=this.a
if(s.d===this.b)s.aw(new A.acm(s,a,b))},
$S:31}
A.acm.prototype={
$0(){var s=this.a
s.e=new A.f1(B.ee,null,this.b,this.c,s.$ti.h("f1<1>"))},
$S:0}
A.rB.prototype={
aj(){return new A.xO(B.m)}}
A.xO.prototype={
aC(){this.aU()
this.Hm()},
aW(a){this.bl(a)
this.Hm()},
Hm(){this.e=new A.de(this.gRM(),this.a.c,null,t.dm)},
m(){var s,r,q=this.d
if(q!=null)for(q=A.j1(q,q.r);q.q();){s=q.d
r=this.d.j(0,s)
r.toString
s.G(0,r)}this.aQ()},
RN(a){var s,r=this,q=a.a,p=r.d
if(p==null)p=r.d=A.y(t.yF,t.M)
p.l(0,q,r.T1(q))
p=r.d.j(0,q)
p.toString
q.Z(0,p)
if(!r.f){r.f=!0
s=r.EG()
if(s!=null)r.Hx(s)
else $.bP.ax$.push(new A.ab8(r))}return!1},
EG(){var s={},r=this.c
r.toString
s.a=null
r.aT(new A.abd(s))
return t.ot.a(s.a)},
Hx(a){var s,r
this.c.toString
s=this.f
r=this.e
r===$&&A.b()
a.DD(t.CR.a(A.ax6(r,s)))},
T1(a){return new A.abc(this,a)},
M(a){var s=this.f,r=this.e
r===$&&A.b()
return new A.uv(s,r,null)}}
A.ab8.prototype={
$1(a){var s,r=this.a
if(r.c==null)return
s=r.EG()
s.toString
r.Hx(s)},
$S:2}
A.abd.prototype={
$1(a){this.a.a=a},
$S:8}
A.abc.prototype={
$0(){var s=this.a
s.d.v(0,this.b)
if(s.d.a===0)if($.bP.CW$.a<3)s.aw(new A.aba(s))
else{s.f=!1
A.dP(new A.abb(s))}},
$S:0}
A.aba.prototype={
$0(){this.a.f=!1},
$S:0}
A.abb.prototype={
$0(){var s=this.a
if(s.c!=null&&s.d.a===0)s.aw(new A.ab9(s))},
$S:0}
A.ab9.prototype={
$0(){},
$S:0}
A.oR.prototype={}
A.FP.prototype={}
A.o0.prototype={
ql(){var s=new A.FP($.by())
this.hD$=s
this.c.d0(new A.oR(s))},
pJ(){var s,r=this
if(r.guv()){if(r.hD$==null)r.ql()}else{s=r.hD$
if(s!=null){s.aA()
s.dV()
r.hD$=null}}},
M(a){if(this.guv()&&this.hD$==null)this.ql()
return B.a0t}}
A.OS.prototype={
M(a){throw A.c(A.F_("Widgets that mix AutomaticKeepAliveClientMixin into their State must call super.build() but must ignore the return value of the superclass."))}}
A.RQ.prototype={
C0(a,b){},
my(a){A.apx(this,new A.afR(this,a))}}
A.afR.prototype={
$1(a){var s=a.z
if(s!=null&&s.B(0,this.a))a.b4()},
$S:8}
A.afQ.prototype={
$1(a){A.apx(a,this.a)},
$S:8}
A.RR.prototype={
bS(a){var s=A.h_(t.h,t.X)
return new A.RQ(s,this,B.a5)}}
A.f7.prototype={
c0(a){return this.w!==a.w}}
A.th.prototype={
aG(a){var s=new A.Js(this.e,this.f,this.r,!1,!1,null,A.aw())
s.aJ()
s.saV(null)
return s},
aN(a,b){b.su6(this.e)
b.sJL(this.f)
b.suc(this.r)
b.cm=b.bu=!1},
ow(a){a.su6(null)
a.sJL(null)}}
A.ob.prototype={
aG(a){var s=new A.Jp(null,this.f,null,A.aw())
s.aJ()
s.saV(null)
return s},
aN(a,b){b.soc(null)
b.srH(this.f)},
ow(a){a.soc(null)}}
A.BE.prototype={
aG(a){var s=new A.Jo(this.e,this.f,null,A.aw())
s.aJ()
s.saV(null)
return s},
aN(a,b){b.soc(this.e)
b.srH(this.f)},
ow(a){a.soc(null)}}
A.IT.prototype={
aG(a){var s=this,r=new A.JG(s.e,s.r,s.w,s.y,s.x,null,s.f,null,A.aw())
r.aJ()
r.saV(null)
return r},
aN(a,b){var s=this
b.sde(0,s.e)
b.srH(s.f)
b.sa0r(0,s.r)
b.sik(0,s.w)
b.saf(0,s.x)
b.shb(0,s.y)}}
A.IU.prototype={
aG(a){var s=this,r=new A.JH(s.r,s.x,s.w,s.e,s.f,null,A.aw())
r.aJ()
r.saV(null)
return r},
aN(a,b){var s=this
b.soc(s.e)
b.srH(s.f)
b.sik(0,s.r)
b.saf(0,s.w)
b.shb(0,s.x)}}
A.q4.prototype={
aG(a){var s=this,r=A.dR(a),q=new A.JQ(s.w,null,A.aw())
q.aJ()
q.saV(null)
q.sbp(0,s.e)
q.sej(s.r)
q.sbH(r)
q.smg(s.x)
q.sL8(0,null)
return q},
aN(a,b){var s=this
b.sbp(0,s.e)
b.sL8(0,null)
b.sej(s.r)
b.sbH(A.dR(a))
b.bu=s.w
b.smg(s.x)}}
A.ET.prototype={
aG(a){var s=new A.w5(this.e,this.f,A.dR(a),B.l,null,A.aw())
s.aJ()
s.saV(null)
return s},
aN(a,b){b.szj(this.e)
b.sej(this.f)
b.sbH(A.dR(a))
if(B.l!==b.e2){b.e2=B.l
b.ar()
b.b2()}}}
A.F9.prototype={
aG(a){var s=new A.Jx(this.e,this.f,null,A.aw())
s.aJ()
s.saV(null)
return s},
aN(a,b){b.sa6W(this.e)
b.U=this.f}}
A.i_.prototype={
aG(a){var s=new A.JE(this.e,A.dR(a),null,A.aw())
s.aJ()
s.saV(null)
return s},
aN(a,b){b.sdv(0,this.e)
b.sbH(A.dR(a))}}
A.ly.prototype={
aG(a){var s=new A.JJ(this.f,this.r,this.e,A.dR(a),null,A.aw())
s.aJ()
s.saV(null)
return s},
aN(a,b){b.sej(this.e)
b.sa7a(this.f)
b.sa3T(this.r)
b.sbH(A.dR(a))}}
A.lN.prototype={}
A.ti.prototype={
aG(a){var s=new A.Jt(this.e,null,A.aw())
s.aJ()
s.saV(null)
return s},
aN(a,b){b.syJ(this.e)}}
A.uA.prototype={
o3(a){var s,r,q=a.e
q.toString
t.DU.a(q)
s=this.f
if(q.e!==s){q.e=s
r=a.c
if(r instanceof A.z)r.a8()}}}
A.tg.prototype={
aG(a){var s=new A.Jr(this.e,0,null,null,A.aw())
s.aJ()
s.I(0,null)
return s},
aN(a,b){b.syJ(this.e)}}
A.wR.prototype={
aG(a){return A.aoj(A.o4(this.f,this.e))},
aN(a,b){b.sI1(A.o4(this.f,this.e))},
c_(){var s,r=this,q=r.e
if(q===1/0&&r.f===1/0)s="SizedBox.expand"
else s=q===0&&r.f===0?"SizedBox.shrink":"SizedBox"
q=r.a
return q==null?s:s+"-"+q.i(0)}}
A.fP.prototype={
aG(a){return A.aoj(this.e)},
aN(a,b){b.sI1(this.e)}}
A.FX.prototype={
aG(a){var s=new A.JA(this.e,this.f,null,A.aw())
s.aJ()
s.saV(null)
return s},
aN(a,b){b.sa57(0,this.e)
b.sa54(0,this.f)}}
A.vx.prototype={
aG(a){var s=new A.JD(this.e,null,A.aw())
s.aJ()
s.saV(null)
return s},
aN(a,b){b.stV(this.e)},
bS(a){return new A.OZ(this,B.a5)}}
A.OZ.prototype={}
A.x1.prototype={
aG(a){var s=A.dR(a)
s=new A.wb(this.e,s,this.r,this.w,A.aw(),0,null,null,A.aw())
s.aJ()
s.I(0,null)
return s},
aN(a,b){var s
b.sej(this.e)
s=A.dR(a)
b.sbH(s)
s=this.r
if(b.ai!==s){b.ai=s
b.a8()}s=this.w
if(s!==b.b_){b.b_=s
b.ar()
b.b2()}}}
A.mN.prototype={
o3(a){var s,r,q,p=this,o=a.e
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
if(q instanceof A.z)q.a8()}}}
A.J3.prototype={
M(a){var s,r,q,p=this,o=null,n=a.a6(t.I)
n.toString
s=p.c
r=p.e
switch(n.w.a){case 0:break
case 1:q=s
s=r
r=q
break
default:s=o
r=s}return A.J2(p.f,p.x,o,o,r,s,p.d,p.r)}}
A.tX.prototype={
gXo(){switch(this.e.a){case 0:return!0
case 1:var s=this.w
return s===B.bb||s===B.Fl}},
uD(a){var s=this.x
s=this.gXo()?A.dR(a):null
return s},
aG(a){var s=this
return A.ayU(B.l,s.w,s.e,s.f,s.r,s.z,s.uD(a),s.y)},
aN(a,b){var s=this,r=s.e
if(b.L!==r){b.L=r
b.a8()}r=s.f
if(b.u!==r){b.u=r
b.a8()}r=s.r
if(b.K!==r){b.K=r
b.a8()}r=s.w
if(b.aq!==r){b.aq=r
b.a8()}r=s.uD(a)
if(b.ai!=r){b.ai=r
b.a8()}r=s.y
if(b.b_!==r){b.b_=r
b.a8()}if(B.l!==b.cl){b.cl=B.l
b.ar()
b.b2()}}}
A.JY.prototype={}
A.BI.prototype={}
A.ow.prototype={
o3(a){var s,r,q,p=a.e
p.toString
t.uc.a(p)
s=this.f
if(p.e!==s){p.e=s
r=!0}else r=!1
s=this.r
if(p.f!==s){p.f=s
r=!0}if(r){q=a.c
if(q instanceof A.z)q.a8()}}}
A.EM.prototype={}
A.JS.prototype={
aG(a){var s,r,q,p=this,o=null,n=p.e,m=p.r
if(m==null){m=a.a6(t.I)
m.toString
m=m.w}s=p.x
r=A.ajO(a)
q=s===B.bm?"\u2026":o
s=new A.w7(A.a9Y(q,r,p.z,p.as,n,p.f,m,p.ax,p.y,p.at),p.w,s,p.ch,0,o,o,A.aw())
s.aJ()
s.I(0,o)
s.wc(n)
s.spw(p.ay)
return s},
aN(a,b){var s,r=this
b.scq(0,r.e)
b.sB3(0,r.f)
s=r.r
if(s==null){s=a.a6(t.I)
s.toString
s=s.w}b.sbH(s)
b.sNx(r.w)
b.sa5x(0,r.x)
b.sB4(r.y)
b.szZ(r.z)
b.sNG(r.as)
b.sB5(r.at)
b.sLW(r.ax)
s=A.ajO(a)
b.szU(0,s)
b.spw(r.ay)
b.sN6(r.ch)}}
A.a57.prototype={
$1(a){return!0},
$S:40}
A.Jf.prototype={
aG(a){var s=this,r=s.d
r=r==null?null:r.cP(0)
r=new A.Jy(r,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.CW,!1,null,!1,A.aw())
r.aJ()
r.a_c()
return r},
aN(a,b){var s=this,r=s.d
b.sfq(0,r==null?null:r.cP(0))
b.aq=s.e
b.sbj(0,s.f)
b.sbQ(0,s.r)
b.sMY(0,s.w)
b.saf(0,s.x)
b.su0(0,s.y)
b.sa11(s.Q)
b.szj(s.as)
b.sej(s.at)
b.sa6h(0,s.ax)
b.sa0E(s.ay)
b.sa52(!1)
b.sbH(null)
b.szG(s.CW)
b.szH(!1)
b.smg(s.z)},
ow(a){a.sfq(0,null)}}
A.FY.prototype={
aG(a){var s=this,r=null,q=new A.JI(s.e,r,s.r,r,s.x,s.y,r,r,s.as,s.at,r,A.aw())
q.aJ()
q.saV(r)
return q},
aN(a,b){var s=this
b.cQ=s.e
b.bz=null
b.au=s.r
b.b0=null
b.aX=s.x
b.bA=s.y
b.bW=b.e0=null
b.al=s.as
b.A=s.at}}
A.HZ.prototype={
aG(a){var s=this,r=new A.JC(!0,s.e,s.f,s.r,s.w,B.aD,null,A.aw())
r.aJ()
r.saV(null)
return r},
aN(a,b){var s,r=this
b.bz=r.e
b.au=r.f
b.b0=r.r
s=r.w
if(!b.aX.k(0,s)){b.aX=s
b.ar()}if(b.A!==B.aD){b.A=B.aD
b.ar()}}}
A.i9.prototype={
aG(a){var s=new A.JL(null,A.aw())
s.aJ()
s.saV(null)
return s}}
A.hP.prototype={
aG(a){var s=new A.w6(this.e,this.f,null,A.aw())
s.aJ()
s.saV(null)
return s},
aN(a,b){b.sK8(this.e)
b.szA(this.f)}}
A.AX.prototype={
aG(a){var s=new A.w2(!1,null,null,A.aw())
s.aJ()
s.saV(null)
return s},
aN(a,b){b.sHT(!1)
b.szA(null)}}
A.wH.prototype={
aG(a){var s=this,r=new A.w9(s.e,s.f,s.r,!1,s.ES(a),null,A.aw())
r.aJ()
r.saV(null)
r.Hj(r.A)
return r},
ES(a){var s,r=this.e,q=r.p4
if(q!=null)return q
if(r.fx==null){if(r.go==null)r=r.p2!=null
else r=!0
s=r}else s=!0
if(!s)return null
return A.dR(a)},
aN(a,b){var s=this
b.sa1e(s.f)
b.sa2G(s.r)
b.sa2D(!1)
b.sLj(s.e)
b.sbH(s.ES(a))}}
A.HU.prototype={
aG(a){var s=new A.JB(null,A.aw())
s.aJ()
s.saV(null)
return s}}
A.Bl.prototype={
aG(a){var s=new A.Jn(!0,null,A.aw())
s.aJ()
s.saV(null)
return s},
aN(a,b){b.sa0q(!0)}}
A.tM.prototype={
aG(a){var s=new A.Jw(this.e,null,A.aw())
s.aJ()
s.saV(null)
return s},
aN(a,b){b.sa2E(this.e)}}
A.FB.prototype={
aG(a){var s=new A.Jz(this.e,null,A.aw())
s.aJ()
s.saV(null)
return s},
aN(a,b){b.szB(0,this.e)}}
A.kr.prototype={
M(a){return this.c}}
A.hB.prototype={
M(a){return this.c.$1(a)}}
A.t2.prototype={
aG(a){var s=new A.z2(this.e,B.aD,null,A.aw())
s.aJ()
s.saV(null)
return s},
aN(a,b){t.oZ.a(b).saf(0,this.e)}}
A.z2.prototype={
saf(a,b){if(b.k(0,this.cQ))return
this.cQ=b
this.ar()},
aH(a,b){var s,r,q,p,o,n,m=this
if(m.k3.MV(0,B.R)){s=a.gbE(a)
r=m.k3
q=b.a
p=b.b
o=r.a
r=r.b
n=$.aq().bg()
n.saf(0,m.cQ)
s.cj(new A.C(q,p,q+o,p+r),n)}s=m.u$
if(s!=null)a.f1(s,b)}}
A.ag9.prototype={
$0(){var s,r,q=this,p=q.b
if(p==null||t.c.b(q.c)){p=q.a.ry$
p===$&&A.b()
p=p.e
p.toString
s=q.c
s=s.gbv(s)
r=A.auT()
p.bX(r,s)
p=r}return p},
$S:286}
A.aga.prototype={
$1(a){var s=a==null?t.K.a(a):a
return this.a.jm(s)},
$S:287}
A.dl.prototype={
j4(){return A.bF(!1,t.y)},
ou(a){return A.bF(!1,t.y)},
a2i(a){var s=a.a
s.toString
return this.ou(s)},
rU(){},
IY(){},
IX(){},
yM(a){},
IW(a){}}
A.xG.prototype={
a_Y(a){return this.ai$.push(a)},
a3k(){this.a2n($.aO().a.f)},
a2n(a){var s,r,q
for(s=this.ai$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].yM(a)},
ts(){var s=0,r=A.a2(t.H),q,p=this,o,n,m
var $async$ts=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:o=A.aA(p.ai$,!0,t.nR),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.a4(o[m].j4(),$async$ts)
case 6:if(b){s=1
break}case 4:++m
s=3
break
case 5:A.a9n()
case 1:return A.a0(q,r)}})
return A.a1($async$ts,r)},
tt(a){return this.a3x(a)},
a3x(a){var s=0,r=A.a2(t.H),q,p=this,o,n,m
var $async$tt=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:o=A.aA(p.ai$,!0,t.nR),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.a4(o[m].ou(a),$async$tt)
case 6:if(c){s=1
break}case 4:++m
s=3
break
case 5:case 1:return A.a0(q,r)}})
return A.a1($async$tt,r)},
qx(a){return this.VT(a)},
VT(a){var s=0,r=A.a2(t.H),q,p=this,o,n,m,l
var $async$qx=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:o=A.aA(p.ai$,!0,t.nR),n=o.length,m=J.aJ(a),l=0
case 3:if(!(l<n)){s=5
break}s=6
return A.a4(o[l].a2i(new A.pr(A.bD(m.j(a,"location")),m.j(a,"state"))),$async$qx)
case 6:if(c){s=1
break}case 4:++l
s=3
break
case 5:case 1:return A.a0(q,r)}})
return A.a1($async$qx,r)},
Vx(a){switch(a.a){case"popRoute":return this.ts()
case"pushRoute":return this.tt(A.bD(a.b))
case"pushRouteInformation":return this.qx(t.G.a(a.b))}return A.bF(null,t.z)},
UR(){this.z6()},
MZ(a){A.cb(B.u,new A.aaG(this,a))},
$iao:1,
$idE:1}
A.ag8.prototype={
$1(a){var s,r,q=$.bP
q.toString
s=this.a
r=s.a
r.toString
q.LC(r)
s.a=null
this.b.bB$.eN(0)},
$S:99}
A.aaG.prototype={
$0(){var s,r,q=this.a,p=q.cl$
q.ce$=!0
s=q.ry$
s===$&&A.b()
s=s.e
s.toString
r=q.K$
r.toString
q.cl$=new A.mQ(this.b,s,"[root]",new A.kg(s,t.l9),t.go).a0j(r,t.jv.a(p))
if(p==null)$.bP.z6()},
$S:0}
A.mQ.prototype={
bS(a){return new A.kJ(this,B.a5,this.$ti.h("kJ<1>"))},
aG(a){return this.d},
aN(a,b){},
a0j(a,b){var s,r={}
r.a=b
if(b==null){a.KK(new A.a4w(r,this,a))
s=r.a
s.toString
a.rA(s,new A.a4x(r))}else{b.bm=this
b.h1()}r=r.a
r.toString
return r},
c_(){return this.e}}
A.a4w.prototype={
$0(){var s=this.b,r=A.ayV(s,s.$ti.c)
this.a.a=r
r.r=this.c},
$S:0}
A.a4x.prototype={
$0(){var s=this.a.a
s.toString
s.D_(null,null)
s.qT()},
$S:0}
A.kJ.prototype={
aT(a){var s=this.aY
if(s!=null)a.$1(s)},
jk(a){this.aY=null
this.l7(a)},
fv(a,b){this.D_(a,b)
this.qT()},
bb(a,b){this.na(0,b)
this.qT()},
hO(){var s=this,r=s.bm
if(r!=null){s.bm=null
s.na(0,s.$ti.h("mQ<1>").a(r))
s.qT()}s.CZ()},
qT(){var s,r,q,p,o,n,m,l=this
try{o=l.aY
n=l.f
n.toString
l.aY=l.dT(o,l.$ti.h("mQ<1>").a(n).c,B.mR)}catch(m){s=A.ae(m)
r=A.au(m)
o=A.bo("attaching to the render tree")
q=new A.bJ(s,r,"widgets library",o,null,!1)
A.e6(q)
p=A.ajn(q)
l.aY=l.dT(null,p,B.mR)}},
ga9(){return this.$ti.h("aG<1>").a(A.bC.prototype.ga9.call(this))},
jp(a,b){var s=this.$ti
s.h("aG<1>").a(A.bC.prototype.ga9.call(this)).saV(s.c.a(a))},
ju(a,b,c){},
jF(a,b){this.$ti.h("aG<1>").a(A.bC.prototype.ga9.call(this)).saV(null)}}
A.LH.prototype={$iao:1}
A.A6.prototype={
eW(){this.NL()
$.em=this
var s=$.aO()
s.Q=this.gVE()
s.as=$.a8},
Bg(){this.NO()
this.wg()}}
A.A7.prototype={
eW(){this.QQ()
$.bP=this},
iu(){this.NM()}}
A.A8.prototype={
eW(){var s,r,q,p,o=this
o.QS()
$.hf=o
o.bh$!==$&&A.eA()
o.bh$=B.Eh
s=new A.wg(A.b3(t.hp),$.by())
B.iB.mY(s.gXe())
o.ck$=s
s=t.F3
r=new A.a_t(A.y(s,t.lT),A.b3(t.vQ),A.a([],t.AV))
o.aY$!==$&&A.eA()
o.aY$=r
q=$.aiJ()
p=A.a([],t.DG)
o.bm$!==$&&A.eA()
s=o.bm$=new A.FQ(r,q,p,A.b3(s))
p=$.aO()
p.at=s.ga3g()
p.ax=$.a8
B.CR.uU(s.ga3z())
s=$.anA
if(s==null)s=$.anA=A.a([],t.e8)
s.push(o.gRR())
B.CT.uU(new A.aga(o))
B.CS.uU(o.gVt())
B.c0.mY(o.gVC())
$.asr()
o.a5X()},
iu(){this.QT()}}
A.A9.prototype={
eW(){this.QU()
$.eS=this
var s=t.K
this.fV$=new A.a0j(A.y(s,t.fx),A.y(s,t.lM),A.y(s,t.s8))},
oT(){this.PR()
var s=this.fV$
s===$&&A.b()
s.a0(0)},
jm(a){return this.a3F(a)},
a3F(a){var s=0,r=A.a2(t.H),q,p=this
var $async$jm=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:s=3
return A.a4(p.PS(a),$async$jm)
case 3:switch(A.bD(J.aM(t.a.a(a),"type"))){case"fontsChange":p.za$.aA()
break}s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$jm,r)}}
A.Aa.prototype={
eW(){this.QX()
$.a6k=this
this.e0$=$.aO().a.a}}
A.Ab.prototype={
eW(){var s,r,q,p,o=this
o.QY()
$.kK=o
s=t.By
o.ry$=new A.IW(o.ga2x(),o.gW7(),o.gWb(),o.gW9(),A.a([],s),A.a([],s),A.a([],s),A.b3(t.d))
s=$.aO()
s.f=o.ga3m()
r=s.r=$.a8
s.fy=o.ga3O()
s.go=r
s.k2=o.ga3s()
s.k3=r
s.p1=o.gW5()
s.p2=r
s.p3=o.gW3()
s.p4=r
r=new A.wc(B.R,o.IP(),$.cq(),null,A.aw())
r.aJ()
r.saV(null)
q=o.ry$
q===$&&A.b()
q.sa6z(r)
r=o.ry$.e
r.Q=r
q=t.W
q.a(A.L.prototype.gbs.call(r)).r.push(r)
p=r.Hw()
r.ch.saZ(0,p)
q.a(A.L.prototype.gbs.call(r)).z.push(r)
o.No(s.a.c)
o.at$.push(o.gVA())
s=o.rx$
if(s!=null)s.m()
s=t.S
r=$.by()
o.rx$=new A.I_(new A.a2j(B.lM,A.y(s,t.Df)),A.y(s,t.eg),r)
o.ax$.push(o.gWo())},
iu(){this.QV()},
yX(a,b,c){this.rx$.a74(b,new A.ag9(this,c,b))
this.Ob(0,b,c)},
iA(){var s=0,r=A.a2(t.H),q=[],p=this,o
var $async$iA=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:s=2
return A.a4(p.NN(),$async$iA)
case 2:o=$.amq
if((o==null?null:o.a)==null)try{o=p.ry$
o===$&&A.b()
o.e.f2()}finally{}p.uL()
s=3
return A.a4(p.gJn(),$async$iA)
case 3:return A.a0(null,r)}})
return A.a1($async$iA,r)}}
A.Ac.prototype={
iu(){this.R_()},
zq(){var s,r,q
this.Pn()
for(s=this.ai$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].rU()},
zw(){var s,r,q
this.Pp()
for(s=this.ai$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].IY()},
zs(){var s,r,q
this.Po()
for(s=this.ai$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].IX()},
tq(a){var s,r,q
this.PE(a)
for(s=this.ai$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].IW(a)},
oT(){var s,r
this.QW()
for(s=this.ai$.length,r=0;r<s;++r);},
z2(){var s,r,q=this,p={}
p.a=null
if(q.b_$){s=new A.ag8(p,q)
p.a=s
$.bP.a07(s)}try{r=q.cl$
if(r!=null)q.K$.a0w(r)
q.Pm()
q.K$.a2P()}finally{}r=q.b_$=!1
p=p.a
if(p!=null)r=!(q.xr$||q.x2$===0)
if(r){q.b_$=!0
r=$.bP
r.toString
p.toString
r.LC(p)}},
iA(){var s=this.cl$
if(s!=null)this.K$.a61(s,$.amq)
return this.R0()}}
A.DJ.prototype={
aG(a){var s=new A.Ju(this.e,this.f,A.all(a,null),null,A.aw())
s.aJ()
s.saV(null)
return s},
aN(a,b){b.sa22(this.e)
b.sys(A.all(a,null))
b.sbv(0,this.f)}}
A.og.prototype={
gXS(){var s,r=this.r
if(r==null||r.gdv(r)==null)return this.e
s=r.gdv(r)
r=this.e
if(r==null)return s
s.toString
return r.C(0,s)},
M(a){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){s=o.x
if(s!=null)s=!(s.a>=s.b&&s.c>=s.d)
else s=!0}else s=!1
if(s)m=A.axd(new A.fP(B.mj,n,n),0,0)
else{s=o.d
if(s!=null)m=new A.ly(s,n,n,m,n)}r=o.gXS()
if(r!=null)m=new A.i_(r,m,n)
s=o.f
if(s!=null)m=new A.t2(s,m,n)
s=o.as
if(s!==B.l){q=A.dR(a)
p=o.r
p.toString
m=A.amE(m,s,new A.MV(q==null?B.t:q,p))}s=o.r
if(s!=null)m=A.amS(m,s,B.hB)
s=o.x
if(s!=null)m=new A.fP(s,m,n)
s=o.y
if(s!=null)m=new A.i_(s,m,n)
m.toString
return m}}
A.MV.prototype={
Bz(a){return this.c.uA(new A.C(0,0,0+a.a,0+a.b),this.b)},
Cb(a){return!a.c.k(0,this.c)||a.b!==this.b}}
A.ok.prototype={
c0(a){return!J.f(this.w,a.w)||!J.f(this.x,a.x)}}
A.OT.prototype={
M(a){throw A.c(A.F_("A DefaultSelectionStyle constructed with DefaultSelectionStyle.fallback cannot be incorporated into the widget tree, it is meant only to provide a fallback value returned by DefaultSelectionStyle.of() when no enclosing default selection style is present in a BuildContext."))}}
A.DR.prototype={
Ul(){var s=$.as4()
return s},
M(a){var s=this.c,r=this.Ul()
if(r!=null)s=A.akb(s,"<Web Disabling Text Editing Shortcuts>",r)
return A.akb(s,"<Default Text Editing Shortcuts>",A.avE())}}
A.E0.prototype={
gao(a){var s=this.a
if(s==null)return null
s=s.c
s.toString
return s}}
A.oo.prototype={
aj(){return new A.y3(A.Ja(null),A.Ja(null),B.m)},
a35(a,b,c){return this.d.$3(a,b,c)},
a6w(a,b,c){return this.e.$3(a,b,c)}}
A.y3.prototype={
aC(){var s,r=this
r.aU()
s=r.a.c
r.d=s.gb1(s)
r.a.c.cN(r.gvu())
r.Hi()},
DA(a){var s,r=this,q=r.d
q===$&&A.b()
s=r.Sm(a,q)
r.d=s
if(q!==s)r.Hi()},
aW(a){var s,r,q=this
q.bl(a)
s=a.c
if(s!==q.a.c){r=q.gvu()
s.bZ(r)
q.a.c.cN(r)
r=q.a.c
q.DA(r.gb1(r))}},
Sm(a,b){switch(a.a){case 0:case 3:return a
case 1:switch(b.a){case 0:case 3:case 1:return a
case 2:return b}break
case 2:switch(b.a){case 0:case 3:case 2:return a
case 1:return b}break}},
Hi(){var s=this,r=s.d
r===$&&A.b()
switch(r.a){case 0:case 1:s.e.saL(0,s.a.c)
s.f.saL(0,B.ce)
break
case 2:case 3:s.e.saL(0,B.cX)
s.f.saL(0,new A.eV(s.a.c,new A.bk(A.a([],t.A),t.Q),0))
break}},
m(){this.a.c.bZ(this.gvu())
this.aQ()},
M(a){var s=this.a
return s.a35(a,this.e,s.a6w(a,this.f,s.f))}}
A.j_.prototype={
E(){return"KeyEventResult."+this.b}}
A.M7.prototype={}
A.Zw.prototype={
ag(a){var s,r=this.a
if(r.ax===this){if(!r.gjn()){s=r.w
s=s!=null&&s.w===r}else s=!0
if(s)r.M8(B.Cg)
s=r.w
if(s!=null){if(s.f===r)s.f=null
s.r.v(0,r)}s=r.Q
if(s!=null)s.YE(0,r)
r.ax=null}},
AZ(a){var s,r=this.a
if(r.ax===this){s=r.e
s.toString
a=A.awE(s,!0);(a==null?r.e.r.f.e:a).xg(r)}},
LD(){return this.AZ(null)}}
A.xA.prototype={
E(){return"UnfocusDisposition."+this.b}}
A.cH.prototype={
gee(){var s,r,q
if(this.a)return!0
for(s=this.gfM(),r=s.length,q=0;q<r;++q)s[q].toString
return!1},
see(a){var s,r=this
if(a!==r.a){r.a=a
s=r.w
if(s!=null){s.qI()
s.r.C(0,r)}}},
gco(){var s,r,q,p
if(!this.b)return!1
s=this.gdI()
if(s!=null&&!s.gco())return!1
for(r=this.gfM(),q=r.length,p=0;p<q;++p)r[p].toString
return!0},
sco(a){var s,r=this
if(a!==r.b){r.b=a
if(r.gkD()&&!a)r.M8(B.Cg)
s=r.w
if(s!=null){s.qI()
s.r.C(0,r)}}},
slV(a){return},
slW(a){},
goo(){var s,r,q,p,o=this.y
if(o==null){s=A.a([],t.i4)
for(o=this.as,r=o.length,q=0;q<o.length;o.length===r||(0,A.P)(o),++q){p=o[q]
B.c.I(s,p.goo())
s.push(p)}this.y=s
o=s}return o},
gpF(){var s=this.goo()
return new A.aH(s,new A.Zx(),A.aj(s).h("aH<1>"))},
gfM(){var s,r,q=this.x
if(q==null){s=A.a([],t.i4)
r=this.Q
for(;r!=null;){s.push(r)
r=r.Q}this.x=s
q=s}return q},
gkD(){if(!this.gjn()){var s=this.w
if(s==null)s=null
else{s=s.f
s=s==null?null:B.c.B(s.gfM(),this)}s=s===!0}else s=!0
return s},
gjn(){var s=this.w
return(s==null?null:s.f)===this},
gkI(){return this.gdI()},
gdI(){var s,r,q,p
for(s=this.gfM(),r=s.length,q=0;q<r;++q){p=s[q]
if(p instanceof A.m4)return p}return null},
gaP(a){var s,r=this.e.ga9(),q=r.bw(0,null),p=r.gjR(),o=A.cw(q,new A.t(p.a,p.b))
p=r.bw(0,null)
q=r.gjR()
s=A.cw(p,new A.t(q.c,q.d))
return new A.C(o.a,o.b,s.a,s.b)},
M8(a){var s,r,q=this
if(!q.gkD()){s=q.w
s=s==null||s.w!==q}else s=!1
if(s)return
r=q.gdI()
if(r==null)return
switch(a.a){case 0:if(r.gco())B.c.a0(r.dy)
for(;!r.gco();){r=r.gdI()
if(r==null){s=q.w
r=s==null?null:s.e}}r.iP(!1)
break
case 1:if(r.gco())B.c.v(r.dy,q)
for(;!r.gco();){s=r.gdI()
if(s!=null)B.c.v(s.dy,r)
r=r.gdI()
if(r==null){s=q.w
r=s==null?null:s.e}}r.iP(!0)
break}},
Fy(a){var s=this,r=s.w
if(r!=null){if(r.f===s)r.w=null
else{r.w=s
r.qI()}return}a.lE()
a.x0()
if(a!==s)s.x0()},
G8(a,b,c){var s,r,q
if(c){s=b.gdI()
if(s!=null)B.c.v(s.dy,b)}b.Q=null
B.c.v(this.as,b)
for(s=this.gfM(),r=s.length,q=0;q<r;++q)s[q].y=null
this.y=null},
YE(a,b){return this.G8(a,b,!0)},
a_i(a){var s,r,q,p
this.w=a
for(s=this.goo(),r=s.length,q=0;q<r;++q){p=s[q]
p.w=a
p.x=null}},
xg(a){var s,r,q,p,o,n=this
if(a.Q===n)return
s=a.gdI()
r=a.gkD()
q=a.Q
if(q!=null)q.G8(0,a,s!=n.gkI())
n.as.push(a)
a.Q=n
a.x=null
a.a_i(n.w)
for(q=a.gfM(),p=q.length,o=0;o<p;++o)q[o].y=null
if(r){q=n.w
if(q!=null){q=q.f
if(q!=null)q.lE()}}if(s!=null&&a.e!=null&&a.gdI()!==s){q=a.e
q.toString
q=A.and(q)
if(q!=null)q.yp(a,s)}if(a.ay){a.iP(!0)
a.ay=!1}},
m(){var s=this.ax
if(s!=null)s.ag(0)
this.dV()},
x0(){var s=this
if(s.Q==null)return
if(s.gjn())s.lE()
s.aA()},
ul(){this.iP(!0)},
iP(a){var s,r=this
if(!r.gco())return
if(r.Q==null){r.ay=!0
return}r.lE()
if(r.gjn()){s=r.w.w
s=s==null||s===r}else s=!1
if(s)return
r.Fy(r)},
lE(){var s,r,q,p,o,n
for(s=B.c.ga4(this.gfM()),r=new A.qc(s,t.oj),q=t.j5,p=this;r.q();p=o){o=q.a(s.gF(s))
n=o.dy
B.c.v(n,p)
n.push(p)}},
c_(){var s,r,q,p=this
p.gkD()
s=p.gkD()&&!p.gjn()?"[IN FOCUS PATH]":""
r=s+(p.gjn()?"[PRIMARY FOCUS]":"")
s=A.bM(p)
q=r.length!==0?"("+r+")":""
return"<optimized out>#"+s+q},
$iac:1}
A.Zx.prototype={
$1(a){return!a.gee()&&a.gco()},
$S:12}
A.m4.prototype={
gkI(){return this},
gpF(){if(!this.gco())return B.Dr
return A.cH.prototype.gpF.call(this)},
mX(a){if(a.Q==null)this.xg(a)
if(this.gkD())a.iP(!0)
else a.lE()},
iP(a){var s,r,q=this,p=q.dy
while(!0){if((p.length!==0?B.c.gS(p):null)!=null)s=!(p.length!==0?B.c.gS(p):null).gco()
else s=!1
if(!s)break
p.pop()}r=p.length!==0?B.c.gS(p):null
if(!a||r==null){if(q.gco()){q.lE()
q.Fy(q)}return}r.iP(!0)}}
A.iV.prototype={
E(){return"FocusHighlightMode."+this.b}}
A.F3.prototype={
E(){return"FocusHighlightStrategy."+this.b}}
A.u2.prototype={
Hv(){var s,r,q=this
switch(0){case 0:s=q.c
if(s==null)return
r=s?B.hH:B.eh
break}s=q.b
if(s==null)s=A.F4()
q.b=r
if((r==null?A.F4():r)!==s)q.Xs()},
Xs(){var s,r,q,p,o,n,m,l,k,j=this,i=j.d,h=i.a
if(h.a===0)return
p=A.aA(i,!0,t.tP)
for(i=p.length,o=0;o<i;++o){s=p[o]
try{if(h.R(0,s)){n=j.b
if(n==null)n=A.F4()
s.$1(n)}}catch(m){r=A.ae(m)
q=A.au(m)
l=j instanceof A.bR?A.cR(j):null
n=A.bo("while dispatching notifications for "+A.aD(l==null?A.aT(j):l).i(0))
k=$.fL()
if(k!=null)k.$1(new A.bJ(r,q,"widgets library",n,null,!1))}}},
U6(a){var s,r,q=this
switch(a.gcf(a).a){case 0:case 2:case 3:q.c=!0
s=B.hH
break
case 1:case 4:case 5:q.c=!1
s=B.eh
break
default:s=null}r=q.b
if(s!==(r==null?A.F4():r))q.Hv()},
Vs(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.c=!1
i.Hv()
s=i.f
if(s==null)return!1
s=A.a([s],t.i4)
B.c.I(s,i.f.gfM())
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
switch(A.aDi(k).a){case 1:break c$1
case 0:r=!0
break
case 2:r=!1
break
default:r=!1}break}s.length===q||(0,A.P)(s);++m}return r},
qI(){if(this.y)return
this.y=!0
A.dP(this.gS3())},
S4(){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.y=!1
s=h.f
for(r=h.x,q=r.length,p=h.e,o=0;o<r.length;r.length===q||(0,A.P)(r),++o){n=r[o]
m=n.a
if(m.Q!=null||m===p)if(m.w===h){l=m.dy
m=(l.length!==0?B.c.gS(l):null)==null&&B.c.B(n.b.gfM(),m)
k=m}else k=!1
else k=!1
if(k)n.b.iP(!0)}B.c.a0(r)
r=h.f
if(r==null&&h.w==null)h.w=p
q=h.w
if(q!=null&&q!==r){if(s==null)j=null
else{r=s.gfM()
r=A.uD(r,A.aj(r).c)
j=r}if(j==null)j=A.b3(t.lc)
r=h.w.gfM()
i=A.uD(r,A.aj(r).c)
r=h.r
r.I(0,i.ks(j))
r.I(0,j.ks(i))
r=h.f=h.w
h.w=null}if(s!=r){if(s!=null)h.r.C(0,s)
r=h.f
if(r!=null)h.r.C(0,r)}for(r=h.r,q=A.jz(r,r.r),p=A.n(q).c;q.q();){m=q.d;(m==null?p.a(m):m).x0()}r.a0(0)
if(s!=h.f)h.aA()},
$iac:1}
A.Nz.prototype={}
A.NA.prototype={}
A.NB.prototype={}
A.NC.prototype={}
A.m3.prototype={
gL_(){var s=this.w,r=this.e
s=r==null?null:r.r
return s},
gAq(){var s=this.x
if(s==null){s=this.e
s=s==null?null:s.f}return s},
gco(){var s=this.y
if(s==null){s=this.e
s=s==null?null:s.gco()}return s!==!1},
gee(){var s=this.z
if(s==null){s=this.e
s=s==null?null:s.gee()}return s===!0},
glV(){var s=this.Q
if(s==null)s=this.e!=null||null
return s!==!1},
glW(){var s=this.as
if(s==null)s=this.e!=null||null
return s!==!1},
glU(){var s=this.ax
if(s==null){s=this.e
s=s==null?null:s.at}return s},
aj(){return A.aAo()}}
A.qr.prototype={
gbY(a){var s=this.a.e
if(s==null){s=this.d
s.toString}return s},
aC(){this.aU()
this.Fe()},
Fe(){var s,r,q,p=this
if(p.a.e==null)if(p.d==null)p.d=p.Ed()
s=p.gbY(p)
p.a.glV()
s.slV(!0)
s=p.gbY(p)
p.a.glW()
s.slW(!0)
p.a.gee()
p.gbY(p).see(p.a.gee())
if(p.a.y!=null){s=p.gbY(p)
r=p.a.y
r.toString
s.sco(r)}p.f=p.gbY(p).gco()
p.gbY(p)
p.r=!0
p.gbY(p)
p.w=!0
p.e=p.gbY(p).gjn()
s=p.gbY(p)
r=p.c
r.toString
p.a.gL_()
q=p.a.gAq()
s.e=r
s.f=q==null?s.f:q
r=s.r
s.r=r
p.y=s.ax=new A.Zw(s)
p.gbY(p).Z(0,p.gwB())},
Ed(){var s=this,r=s.a.glU(),q=s.a.gco()
s.a.glV()
s.a.glW()
return A.aju(q,r,!0,!0,null,null,s.a.gee())},
m(){var s,r=this
r.gbY(r).G(0,r.gwB())
r.y.ag(0)
s=r.d
if(s!=null)s.m()
r.aQ()},
b4(){this.cD()
var s=this.y
if(s!=null)s.LD()
this.EX()},
EX(){var s,r,q,p=this
if(!p.x&&p.a.f){s=p.c
s.toString
s=A.awD(s)
r=p.gbY(p)
if(r.Q==null)s.xg(r)
q=s.w
if(q!=null)q.x.push(new A.M7(s,r))
s=s.w
if(s!=null)s.qI()
p.x=!0}},
ds(){this.nc()
var s=this.y
if(s!=null)s.LD()
this.x=!1},
aW(a){var s,r,q=this
q.bl(a)
s=a.e
r=q.a
if(s==r.e){if(!J.f(r.gAq(),q.gbY(q).f))q.gbY(q).f=q.a.gAq()
q.a.gL_()
q.gbY(q)
q.a.gee()
q.gbY(q).see(q.a.gee())
if(q.a.y!=null){s=q.gbY(q)
r=q.a.y
r.toString
s.sco(r)}s=q.gbY(q)
q.a.glV()
s.slV(!0)
s=q.gbY(q)
q.a.glW()
s.slW(!0)}else{q.y.ag(0)
if(s!=null)s.G(0,q.gwB())
q.Fe()}if(a.f!==q.a.f)q.EX()},
Vk(){var s,r=this,q=r.gbY(r).gjn(),p=r.gbY(r).gco()
r.gbY(r)
r.gbY(r)
s=r.a.r
if(s!=null)s.$1(r.gbY(r).gkD())
s=r.e
s===$&&A.b()
if(s!==q)r.aw(new A.acf(r,q))
s=r.f
s===$&&A.b()
if(s!==p)r.aw(new A.acg(r,p))
s=r.r
s===$&&A.b()
if(!s)r.aw(new A.ach(r,!0))
s=r.w
s===$&&A.b()
if(!s)r.aw(new A.aci(r,!0))},
M(a){var s,r,q=this,p=null,o=q.y
o.toString
o.AZ(q.a.c)
o=q.a
s=o.d
if(o.at){o=q.f
o===$&&A.b()
r=q.e
r===$&&A.b()
s=A.dK(p,s,!1,p,!1,o,r,p,p,p,p,p,p,p,p,p,p,p,p,p,p)}return A.apg(s,q.gbY(q))}}
A.acf.prototype={
$0(){this.a.e=this.b},
$S:0}
A.acg.prototype={
$0(){this.a.f=this.b},
$S:0}
A.ach.prototype={
$0(){this.a.r=this.b},
$S:0}
A.aci.prototype={
$0(){this.a.w=this.b},
$S:0}
A.F5.prototype={
aj(){return new A.ND(B.m)}}
A.ND.prototype={
Ed(){var s=this.a.glU()
return A.ajv(this.a.gco(),s,this.a.gee())},
M(a){var s=this,r=null,q=s.y
q.toString
q.AZ(s.a.c)
q=s.gbY(s)
return A.dK(r,A.apg(s.a.d,q),!1,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)}}
A.ye.prototype={}
A.agT.prototype={
$1(a){var s=this.a
if(--s.a===0){s.b=a
return!1}return!0},
$S:50}
A.qs.prototype={}
A.nl.prototype={
E(){return"TraversalDirection."+this.b}}
A.F6.prototype={
EA(a,b,c){var s,r=a.gkI(),q=r.dy,p=q.length!==0?B.c.gS(q):null
q=p==null&&r.goo().length!==0
if(q){s=this.GQ(r,a)
if(s.length===0)p=null
else p=b?B.c.gS(s):B.c.gJ(s)}return p==null?a:p},
TX(a,b){return this.EA(a,!1,b)},
a4r(a){},
yp(a,b){},
Us(a){var s
if(a==null)s=null
else{s=a.jN(t.AB)
if(s==null)s=null
else{s=s.f
s.toString}}return t.fc.a(s)},
GQ(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=this.Us(a.e),c=d==null,b=c?e:d.f
if(b==null)b=new A.w0(A.y(t.j5,t.uJ))
s=A.y(t.k_,t.hF)
for(r=a.goo(),q=r.length,p=t.fc,o=t.AB,n=t.i4,m=0;m<r.length;r.length===q||(0,A.P)(r),++m){l=r[m]
k=l.e
if(k==null)k=e
else{k=k.y
j=k==null?e:k.j(0,A.aD(o))
if(j==null)k=e
else{k=j.f
k.toString}}p.a(k)
i=k==null?e:k.r
if(J.f(l,i)){k=i.e
k.toString
h=A.aqb(k,2)
if(h==null)k=e
else{k=h.y
j=k==null?e:k.j(0,A.aD(o))
if(j==null)k=e
else{k=j.f
k.toString}}p.a(k)
g=k==null?e:k.r
if(s.j(0,g)==null)s.l(0,g,A.aph(k,b,A.a([],n)))
s.j(0,g).c.push(i)
continue}if(l.gco()&&!l.gee()){if(s.j(0,i)==null)s.l(0,i,A.aph(k,b,A.a([],n)))
s.j(0,i).c.push(l)}}for(r=A.j1(s,s.r);r.q();){q=r.d
p=s.j(0,q).b.Ny(s.j(0,q).c,a0)
p=A.a(p.slice(0),A.aj(p))
B.c.a0(s.j(0,q).c)
B.c.I(s.j(0,q).c,p)}f=A.a([],n)
if(s.a!==0)r=s.R(0,c?e:d.r)
else r=!1
if(r){r=s.j(0,c?e:d.r)
r.toString
new A.Zz(s,f).$1(r)}if(!!f.fixed$length)A.K(A.O("removeWhere"))
B.c.nK(f,new A.Zy(),!0)
return f},
FE(a,b){var s,r,q,p,o,n,m=this,l=a.gkI()
l.toString
m.l8(l)
m.oL$.v(0,l)
s=l.dy
r=s.length!==0?B.c.gS(s):null
if(r==null){q=b?m.TX(a,!1):m.EA(a,!0,!1)
A.lk(q,b?B.cI:B.cJ)
return!0}p=m.GQ(l,a)
if(p.length===0)return!1
if(b&&r===B.c.gS(p)){A.lk(B.c.gJ(p),B.cI)
return!0}if(!b&&r===B.c.gJ(p)){A.lk(B.c.gS(p),B.cJ)
return!0}for(l=J.at(b?p:new A.cy(p,A.aj(p).h("cy<1>"))),o=null;l.q();o=n){n=l.gF(l)
if(o==r){l=b?B.cI:B.cJ
n.ul()
s=n.e
s.toString
A.aoy(s,1,l)
return!0}}return!1}}
A.Zz.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=a.c,r=s.length,q=this.b,p=this.a,o=0;o<s.length;s.length===r||(0,A.P)(s),++o){n=s[o]
if(p.R(0,n)){m=p.j(0,n)
m.toString
this.$1(m)}else q.push(n)}},
$S:290}
A.Zy.prototype={
$1(a){return!a.gco()||a.gee()},
$S:12}
A.qm.prototype={}
A.N5.prototype={}
A.Wn.prototype={
a2R(a,b){var s=this
switch(b.a){case 0:return s.r1(a,!1,!0)
case 2:return s.r1(a,!0,!0)
case 3:return s.r1(a,!1,!1)
case 1:return s.r1(a,!0,!1)}},
r1(a,b,c){var s=a.gkI().gpF().dS(0)
A.nR(s,new A.Wv(c,b),t.lc)
if(s.length!==0)return B.c.gJ(s)
return null},
ZE(a,b,c){var s,r=c.gpF().dS(0)
A.nR(r,new A.Wp(),t.lc)
switch(a.a){case 3:s=new A.aH(r,new A.Wq(b),A.aj(r).h("aH<1>"))
break
case 1:s=new A.aH(r,new A.Wr(b),A.aj(r).h("aH<1>"))
break
case 0:case 2:s=null
break
default:s=null}return s},
ZF(a,b,c){var s=c.dS(0)
A.nR(s,new A.Ws(),t.lc)
switch(a.a){case 0:return new A.aH(s,new A.Wt(b),A.aj(s).h("aH<1>"))
case 2:return new A.aH(s,new A.Wu(b),A.aj(s).h("aH<1>"))
case 3:case 1:break}return null},
Yl(a,b,c){var s,r,q=this,p=q.oL$,o=p.j(0,b),n=o!=null
if(n){s=o.a
s=s.length!==0&&B.c.gJ(s).a!==a}else s=!1
if(s){s=o.a
if(B.c.gS(s).b.Q==null){q.l8(b)
p.v(0,b)
return!1}r=new A.Wo(q,o,b)
switch(a.a){case 2:case 0:switch(B.c.gJ(s).a.a){case 3:case 1:q.l8(b)
p.v(0,b)
break
case 0:case 2:if(r.$1(a))return!0
break}break
case 3:case 1:switch(B.c.gJ(s).a.a){case 3:case 1:if(r.$1(a))return!0
break
case 0:case 2:q.l8(b)
p.v(0,b)
break}break}}if(n&&o.a.length===0){q.l8(b)
p.v(0,b)}return!1},
a49(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=a.gkI(),f=g.dy,e=f.length!==0?B.c.gS(f):h
if(e==null){s=i.a2R(a,b)
if(s==null)s=a
switch(b.a){case 0:case 3:A.lk(s,B.cJ)
break
case 1:case 2:A.lk(s,B.cI)
break}return!0}if(i.Yl(b,g,e))return!0
f=e.e
f.toString
r=A.ic(f)
f=b.a
switch(f){case 2:case 0:q=i.ZF(b,e.gaP(e),g.gpF())
if(r!=null&&!r.d.gIa()){q.toString
p=new A.aH(q,new A.Ww(r),q.$ti.h("aH<o.E>"))
if(!p.gO(p))q=p}if(!q.ga4(q).q()){o=h
break}n=A.aA(q,!0,A.n(q).h("o.E"))
if(b===B.ZJ){m=A.aj(n).h("cy<1>")
n=A.aA(new A.cy(n,m),!0,m.h("bm.E"))}l=new A.aH(n,new A.Wx(new A.C(e.gaP(e).a,-1/0,e.gaP(e).c,1/0)),A.aj(n).h("aH<1>"))
if(!l.gO(l)){o=l.gJ(l)
break}A.nR(n,new A.Wy(e),t.lc)
o=B.c.gJ(n)
break
case 1:case 3:q=i.ZE(b,e.gaP(e),g)
if(r!=null&&!r.d.gIa()){q.toString
p=new A.aH(q,new A.Wz(r),q.$ti.h("aH<o.E>"))
if(!p.gO(p))q=p}if(!q.ga4(q).q()){o=h
break}n=A.aA(q,!0,A.n(q).h("o.E"))
if(b===B.ZK){m=A.aj(n).h("cy<1>")
n=A.aA(new A.cy(n,m),!0,m.h("bm.E"))}l=new A.aH(n,new A.WA(new A.C(-1/0,e.gaP(e).b,1/0,e.gaP(e).d)),A.aj(n).h("aH<1>"))
if(!l.gO(l)){o=l.gJ(l)
break}A.nR(n,new A.WB(e),t.lc)
o=B.c.gJ(n)
break
default:o=h}if(o!=null){m=i.oL$
k=m.j(0,g)
j=new A.qm(b,e)
if(k!=null)k.a.push(j)
else m.l(0,g,new A.N5(A.a([j],t.gE)))
switch(f){case 0:case 3:A.lk(o,B.cJ)
break
case 2:case 1:A.lk(o,B.cI)
break}return!0}return!1}}
A.aeB.prototype={
$1(a){return a.b===this.a},
$S:291}
A.Wv.prototype={
$2(a,b){if(this.a)if(this.b)return B.d.aF(a.gaP(a).b,b.gaP(b).b)
else return B.d.aF(b.gaP(b).d,a.gaP(a).d)
else if(this.b)return B.d.aF(a.gaP(a).a,b.gaP(b).a)
else return B.d.aF(b.gaP(b).c,a.gaP(a).c)},
$S:38}
A.Wp.prototype={
$2(a,b){return B.d.aF(a.gaP(a).gaK().a,b.gaP(b).gaK().a)},
$S:38}
A.Wq.prototype={
$1(a){var s=this.a
return!a.gaP(a).k(0,s)&&a.gaP(a).gaK().a<=s.a},
$S:12}
A.Wr.prototype={
$1(a){var s=this.a
return!a.gaP(a).k(0,s)&&a.gaP(a).gaK().a>=s.c},
$S:12}
A.Ws.prototype={
$2(a,b){return B.d.aF(a.gaP(a).gaK().b,b.gaP(b).gaK().b)},
$S:38}
A.Wt.prototype={
$1(a){var s=this.a
return!a.gaP(a).k(0,s)&&a.gaP(a).gaK().b<=s.b},
$S:12}
A.Wu.prototype={
$1(a){var s=this.a
return!a.gaP(a).k(0,s)&&a.gaP(a).gaK().b>=s.d},
$S:12}
A.Wo.prototype={
$1(a){var s,r,q=this.b.a.pop().b,p=q.e
p.toString
p=A.ic(p)
s=$.ai.K$.f.f.e
s.toString
if(p!=A.ic(s)){p=this.a
s=this.c
p.l8(s)
p.oL$.v(0,s)
return!1}switch(a.a){case 0:case 3:r=B.cJ
break
case 1:case 2:r=B.cI
break
default:r=null}A.lk(q,r)
return!0},
$S:293}
A.Ww.prototype={
$1(a){var s=a.e
s.toString
return A.ic(s)===this.a},
$S:12}
A.Wx.prototype={
$1(a){var s=a.gaP(a).fs(this.a)
return!s.gO(s)},
$S:12}
A.Wy.prototype={
$2(a,b){var s=this.a
return B.d.aF(Math.abs(a.gaP(a).gaK().a-s.gaP(s).gaK().a),Math.abs(b.gaP(b).gaK().a-s.gaP(s).gaK().a))},
$S:38}
A.Wz.prototype={
$1(a){var s=a.e
s.toString
return A.ic(s)===this.a},
$S:12}
A.WA.prototype={
$1(a){var s=a.gaP(a).fs(this.a)
return!s.gO(s)},
$S:12}
A.WB.prototype={
$2(a,b){var s=this.a
return B.d.aF(Math.abs(a.gaP(a).gaK().b-s.gaP(s).gaK().b),Math.abs(b.gaP(b).gaK().b-s.gaP(s).gaK().b))},
$S:38}
A.cP.prototype={
gJ1(){var s=this.d
if(s==null){s=this.c.e
s.toString
s=this.d=new A.aez().$1(s)}s.toString
return s}}
A.aey.prototype={
$1(a){var s=a.gJ1()
return A.uD(s,A.aj(s).c)},
$S:294}
A.aeA.prototype={
$2(a,b){switch(this.a.a){case 1:return B.d.aF(a.b.a,b.b.a)
case 0:return B.d.aF(b.b.c,a.b.c)}},
$S:114}
A.aez.prototype={
$1(a){var s,r,q=A.a([],t.AG),p=t.I,o=a.jN(p)
for(;o!=null;){s=o.f
s.toString
q.push(p.a(s))
s=A.aqb(o,1)
if(s==null)o=null
else{s=s.y
r=s==null?null:s.j(0,A.aD(p))
o=r}}return q},
$S:296}
A.iv.prototype={
gaP(a){var s,r,q,p,o=this
if(o.b==null)for(s=o.a,s=new A.aC(s,new A.aew(),A.aj(s).h("aC<1,C>")),s=new A.bT(s,s.gp(s)),r=A.n(s).c;s.q();){q=s.d
if(q==null)q=r.a(q)
p=o.b
if(p==null){o.b=q
p=q}o.b=p.oH(q)}s=o.b
s.toString
return s}}
A.aew.prototype={
$1(a){return a.b},
$S:297}
A.aex.prototype={
$2(a,b){switch(this.a.a){case 1:return B.d.aF(a.gaP(a).a,b.gaP(b).a)
case 0:return B.d.aF(b.gaP(b).c,a.gaP(a).c)}},
$S:298}
A.w0.prototype={
SO(a){var s,r,q,p,o,n=B.c.gJ(a).a,m=t.hY,l=A.a([],m),k=A.a([],t.lZ)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.P)(a),++r){q=a[r]
p=q.a
if(p==n){l.push(q)
continue}k.push(new A.iv(l))
l=A.a([q],m)
n=p}if(l.length!==0)k.push(new A.iv(l))
for(m=k.length,r=0;r<k.length;k.length===m||(0,A.P)(k),++r){s=k[r].a
if(s.length===1)continue
o=B.c.gJ(s).a
o.toString
A.apq(s,o)}return k},
FZ(a){var s,r,q,p
A.nR(a,new A.a4k(),t.dP)
s=B.c.gJ(a)
r=new A.a4l().$2(s,a)
if(J.bI(r)<=1)return s
q=A.aAO(r)
q.toString
A.apq(r,q)
p=this.SO(r)
if(p.length===1)return B.c.gJ(B.c.gJ(p).a)
A.aAN(p,q)
return B.c.gJ(B.c.gJ(p).a)},
Ny(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a.length<=1)return a
s=A.a([],t.hY)
for(r=a.length,q=t.n2,p=t.I,o=0;o<a.length;a.length===r||(0,A.P)(a),++o){n=a[o]
m=n.gaP(n)
l=n.e.y
k=l==null?null:l.j(0,A.aD(p))
if(k==null)l=null
else{l=k.f
l.toString}q.a(l)
s.push(new A.cP(l==null?null:l.w,m,n))}j=A.a([],t.i4)
i=this.FZ(s)
j.push(i.c)
B.c.v(s,i)
for(;s.length!==0;){h=this.FZ(s)
j.push(h.c)
B.c.v(s,h)}return j}}
A.a4k.prototype={
$2(a,b){return B.d.aF(a.b.b,b.b.b)},
$S:114}
A.a4l.prototype={
$2(a,b){var s=a.b,r=A.aj(b).h("aH<1>")
return A.aA(new A.aH(b,new A.a4m(new A.C(-1/0,s.b,1/0,s.d)),r),!0,r.h("o.E"))},
$S:299}
A.a4m.prototype={
$1(a){var s=a.b.fs(this.a)
return!s.gO(s)},
$S:300}
A.u3.prototype={
aj(){return new A.NE(B.m)}}
A.NE.prototype={
aC(){this.aU()
this.d=A.aju(!1,"FocusTraversalGroup",!0,!0,null,null,!0)},
m(){var s=this.d
if(s!=null)s.m()
this.aQ()},
M(a){var s=null,r=this.a,q=r.c,p=this.d
p.toString
return new A.qt(q,p,A.F2(!1,!1,r.f,s,!0,!0,p,!1,s,s,s,s,s,!0),s)}}
A.qt.prototype={
c0(a){return!1}}
A.JR.prototype={
d7(a){A.lk(a.gbY(a),B.Ue)}}
A.my.prototype={}
A.Ia.prototype={
d7(a){var s=$.ai.K$.f.f
s.e.a6(t.AB).f.FE(s,!0)}}
A.mO.prototype={}
A.J6.prototype={
d7(a){var s=$.ai.K$.f.f
s.e.a6(t.AB).f.FE(s,!1)}}
A.DY.prototype={
d7(a){var s=$.ai.K$.f.f,r=s.e.a6(t.AB)
r.f.a49(s,a.a)}}
A.NF.prototype={}
A.PP.prototype={
yp(a,b){var s
this.Oa(a,b)
s=this.oL$.j(0,b)
if(s!=null){s=s.a
if(!!s.fixed$length)A.K(A.O("removeWhere"))
B.c.nK(s,new A.aeB(a),!0)}}}
A.Sq.prototype={}
A.Sr.prototype={}
A.en.prototype={
gbr(){var s,r=$.ai.K$.z.j(0,this)
if(r instanceof A.fy){s=r.ok
s.toString
if(A.n(this).c.b(s))return s}return null}}
A.bB.prototype={
i(a){var s=this,r=s.a,q=r!=null?" "+r:""
if(A.A(s)===B.ZZ)return"[GlobalKey#"+A.bM(s)+q+"]"
return"["+("<optimized out>#"+A.bM(s))+q+"]"}}
A.kg.prototype={
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return this.$ti.b(b)&&b.a===this.a},
gt(a){return A.lt(this.a)},
i(a){var s="GlobalObjectKey",r=B.b.il(s,"<State<StatefulWidget>>")?B.b.T(s,0,-8):s
return"["+r+" "+("<optimized out>#"+A.bM(this.a))+"]"}}
A.j.prototype={
c_(){var s=this.a
return s==null?"Widget":"Widget-"+s.i(0)},
k(a,b){if(b==null)return!1
return this.OR(0,b)},
gt(a){return A.B.prototype.gt.call(this,this)}}
A.b5.prototype={
bS(a){return new A.KP(this,B.a5)}}
A.af.prototype={
bS(a){return A.azw(this)}}
A.QV.prototype={
E(){return"_StateLifecycle."+this.b}}
A.am.prototype={
aC(){},
aW(a){},
f2(){},
aw(a){a.$0()
this.c.h1()},
ds(){},
cb(){},
m(){},
b4(){}}
A.aS.prototype={}
A.dy.prototype={
bS(a){return new A.mA(this,B.a5,A.n(this).h("mA<dy.T>"))}}
A.b7.prototype={
bS(a){return A.ax_(this)}}
A.aB.prototype={
aN(a,b){},
ow(a){}}
A.FU.prototype={
bS(a){return new A.FT(this,B.a5)}}
A.b4.prototype={
bS(a){return A.azn(this)}}
A.er.prototype={
bS(a){return A.axK(this)}}
A.ny.prototype={
E(){return"_ElementLifecycle."+this.b}}
A.NZ.prototype={
Hg(a){a.aT(new A.ad6(this,a))
a.pG()},
a_7(){var s,r,q,p=this
p.a=!0
r=p.b
q=A.aA(r,!0,A.n(r).c)
B.c.dg(q,A.ahU())
s=q
r.a0(0)
try{r=s
new A.cy(r,A.aT(r).h("cy<1>")).Y(0,p.ga_5())}finally{p.a=!1}},
C(a,b){if(b.w===B.c9){b.ds()
b.aT(A.ahV())}this.b.C(0,b)}}
A.ad6.prototype={
$1(a){this.a.Hg(a)},
$S:8}
A.UC.prototype={
BW(a){var s=this
if(a.at){s.e=!0
return}if(!s.d&&s.a!=null){s.d=!0
s.a.$0()}s.c.push(a)
a.at=!0},
KK(a){try{a.$0()}finally{}},
rA(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=b==null
if(f&&h.c.length===0)return
try{h.d=!0
if(!f){g.a=null
h.e=!1
try{b.$0()}finally{}}f=h.c
B.c.dg(f,A.ahU())
h.e=!1
g.b=f.length
g.c=0
for(n=0;n<g.b;){s=f[n]
r=!1
if(r){n=s.f
n.toString
m=n instanceof A.bR?A.cR(n):null
A.akp(A.aD(m==null?A.aT(n):m).i(0),null,null)}try{s.Ls()}catch(l){q=A.ae(l)
p=A.au(l)
n=A.bo("while rebuilding dirty elements")
k=$.fL()
if(k!=null)k.$1(new A.bJ(q,p,"widgets library",n,new A.UD(g,h,s),!1))}if(r)A.ako()
n=++g.c
k=g.b
j=f.length
if(k>=j){k=h.e
k.toString}else k=!0
if(k){if(!!f.immutable$list)A.K(A.O("sort"))
n=j-1
if(n-0<=32)A.KD(f,0,n,A.ahU())
else A.KC(f,0,n,A.ahU())
n=h.e=!1
g.b=f.length
while(!0){k=g.c
if(!(k>0?f[k-1].as:n))break
g.c=k-1}n=k}}}finally{for(f=h.c,n=f.length,i=0;i<n;++i){o=f[i]
o.at=!1}B.c.a0(f)
h.d=!1
h.e=null}},
a0w(a){return this.rA(a,null)},
a2P(){var s,r,q
try{this.KK(this.b.ga_6())}catch(q){s=A.ae(q)
r=A.au(q)
A.ale(A.EJ("while finalizing the widget tree"),s,r,null)}finally{}},
a61(a,b){try{a.b=b
a.f2()}finally{}}}
A.UD.prototype={
$0(){var s=null,r=A.a([],t.F),q=this.a,p=q.c,o=this.b.c.length,n="The element being rebuilt at the time was index "+p
q=""+q.b
if(p<o)J.jV(r,A.hF(n+" of "+q,this.c,!0,B.aJ,s,!1,s,s,B.ap,s,!1,!0,!0,B.aW,s,t.h))
else J.jV(r,A.Z1(n+" of "+q+", but _dirtyElements only had "+o+" entries. This suggests some confusion in the framework internals."))
return r},
$S:17}
A.vt.prototype={
yh(){var s=this.a
this.c=new A.aee(this,s==null?null:s.c)}}
A.aee.prototype={
d0(a){var s=this.a.L1(a)
if(s)return
s=this.b
if(s!=null)s.d0(a)}}
A.aV.prototype={
Rj(a){},
k(a,b){if(b==null)return!1
return this===b},
f2(){var s=this
if(A.aq3(s.b,s.f)){s.h1()
s.b=null}s.aT(new A.Yr(s))
s.b=null},
ga9(){var s,r
for(s=this;s!=null;){r={}
if(s.w===B.Co)break
else if(s instanceof A.bC)return s.ga9()
else{r.a=null
s.aT(new A.Ys(r))
s=r.a}}return null},
a2d(a){var s=null
return A.hF(a,this,!0,B.aJ,s,!1,s,s,B.ap,s,!1,!0,!0,B.aW,s,t.h)},
aT(a){},
dT(a,b,c){var s,r,q=this
if(b==null){if(a!=null)q.yE(a)
return null}if(a!=null){s=a.f.k(0,b)
if(s){if(!J.f(a.d,c))q.Md(a,c)
s=a}else{s=a.f
s.toString
if(A.A(s)===A.A(b)&&J.f(s.a,b.a)){if(!J.f(a.d,c))q.Md(a,c)
a.bb(0,b)
s=a}else{q.yE(a)
r=q.tC(b,c)
s=r}}}else{r=q.tC(b,c)
s=r}return s},
fv(a,b){var s,r,q,p=this
p.a=a
p.d=b
p.w=B.c9
s=a!=null
if(s){r=a.e
r===$&&A.b();++r}else r=1
p.e=r
if(s)p.r=a.r
q=p.f.a
if(q instanceof A.en)p.r.z.l(0,q,p)
p.xN()
p.yh()},
bb(a,b){this.f=b},
Md(a,b){new A.Yt(b).$1(a)},
xS(a){this.d=a},
Hq(a){var s=a+1,r=this.e
r===$&&A.b()
if(r<s){this.e=s
this.aT(new A.Yo(s))}},
oq(){this.aT(new A.Yq())
this.d=null},
ru(a){this.aT(new A.Yp(a))
this.d=a},
YU(a,b){var s,r,q=$.ai.K$.z.j(0,a)
if(q==null)return null
s=q.f
s.toString
if(!(A.A(s)===A.A(b)&&J.f(s.a,b.a)))return null
r=q.a
if(r!=null){r.jk(q)
r.yE(q)}this.r.b.b.v(0,q)
return q},
tC(a,b){var s,r,q,p,o,n,m=this,l=!1
if(l)A.akp(A.A(a).i(0),null,null)
try{s=a.a
if(s instanceof A.en){r=m.YU(s,a)
if(r!=null){o=r
o.a=m
o.toString
n=m.e
n===$&&A.b()
o.Hq(n)
o.cb()
o.aT(A.arc())
o.ru(b)
q=m.dT(r,a,b)
o=q
o.toString
return o}}p=a.bS(0)
p.fv(m,b)
return p}finally{if(l)A.ako()}},
yE(a){a.a=null
a.oq()
this.r.b.C(0,a)},
jk(a){},
cb(){var s=this,r=s.z,q=r==null,p=!q&&r.a!==0||s.Q
s.w=B.c9
if(!q)r.a0(0)
s.Q=!1
s.xN()
s.yh()
if(s.as)s.r.BW(s)
if(p)s.b4()},
ds(){var s,r,q=this,p=q.z
if(p!=null&&p.a!==0)for(p=new A.l6(p,p.np()),s=A.n(p).c;p.q();){r=p.d;(r==null?s.a(r):r).ak.v(0,q)}q.y=null
q.w=B.a01},
pG(){var s=this,r=s.f,q=r==null?null:r.a
if(q instanceof A.en){r=s.r.z
if(J.f(r.j(0,q),s))r.v(0,q)}s.z=s.f=null
s.w=B.Co},
gcM(a){var s,r=this.ga9()
if(r instanceof A.F){s=r.k3
s.toString
return s}return null},
yK(a,b){var s=this.z;(s==null?this.z=A.cW(t.tx):s).C(0,a)
a.M9(this,b)
s=a.f
s.toString
return t.sg.a(s)},
a6(a){var s=this.y,r=s==null?null:s.j(0,A.aD(a))
if(r!=null)return a.a(this.yK(r,null))
this.Q=!0
return null},
jN(a){var s=this.y
return s==null?null:s.j(0,A.aD(a))},
yh(){var s=this.a
this.c=s==null?null:s.c},
xN(){var s=this.a
this.y=s==null?null:s.y},
JE(a){var s,r,q,p=this.a
while(!0){s=p==null
if(!s){r=p.f
r.toString
q=r instanceof A.bR?A.cR(r):null
r=A.aD(q==null?A.aT(r):q)!==A.aD(a)}else r=!1
if(!r)break
p=p.a}if(s)s=null
else{s=p.f
s.toString}return a.h("0?").a(s)},
kB(a){var s,r,q=this.a
for(;s=q==null,!s;){if(q instanceof A.fy){r=q.ok
r.toString
r=a.b(r)}else r=!1
if(r)break
q=q.a}t.Ci.a(q)
if(s)s=null
else{s=q.ok
s.toString}return a.h("0?").a(s)},
ti(a){var s=this.a
for(;s!=null;){if(s instanceof A.bC&&a.b(s.ga9()))return a.a(s.ga9())
s=s.a}return null},
Br(a){var s=this.a
while(!0){if(!(s!=null&&a.$1(s)))break
s=s.a}},
b4(){this.h1()},
d0(a){var s=this.c
if(s!=null)s.d0(a)},
c_(){var s=this.f
s=s==null?null:s.c_()
return s==null?"<optimized out>#"+A.bM(this)+"(DEFUNCT)":s},
h1(){var s=this
if(s.w!==B.c9)return
if(s.as)return
s.as=!0
s.r.BW(s)},
uf(a){var s
if(this.w===B.c9)s=!this.as&&!a
else s=!0
if(s)return
this.hO()},
Ls(){return this.uf(!1)},
hO(){this.as=!1},
$iah:1}
A.Yr.prototype={
$1(a){a.b=this.a.b
a.f2()},
$S:8}
A.Ys.prototype={
$1(a){this.a.a=a},
$S:8}
A.Yt.prototype={
$1(a){a.xS(this.a)
if(!(a instanceof A.bC))a.aT(this)},
$S:8}
A.Yo.prototype={
$1(a){a.Hq(this.a)},
$S:8}
A.Yq.prototype={
$1(a){a.oq()},
$S:8}
A.Yp.prototype={
$1(a){a.ru(this.a)},
$S:8}
A.EK.prototype={
aG(a){var s=this.d,r=new A.Jv(s,A.aw())
r.aJ()
r.Rv(s)
return r}}
A.t3.prototype={
fv(a,b){this.CB(a,b)
this.wd()},
wd(){this.Ls()},
hO(){var s,r,q,p,o,n,m=this,l=null
try{l=m.ba()
m.f.toString}catch(o){s=A.ae(o)
r=A.au(o)
n=A.ajn(A.ale(A.bo("building "+m.i(0)),s,r,new A.Vy(m)))
l=n}finally{m.v7()}try{m.ay=m.dT(m.ay,l,m.d)}catch(o){q=A.ae(o)
p=A.au(o)
n=A.ajn(A.ale(A.bo("building "+m.i(0)),q,p,new A.Vz(m)))
l=n
m.ay=m.dT(null,l,m.d)}},
aT(a){var s=this.ay
if(s!=null)a.$1(s)},
jk(a){this.ay=null
this.l7(a)}}
A.Vy.prototype={
$0(){var s=A.a([],t.F)
return s},
$S:17}
A.Vz.prototype={
$0(){var s=A.a([],t.F)
return s},
$S:17}
A.KP.prototype={
ba(){var s=this.f
s.toString
return t.yB.a(s).M(this)},
bb(a,b){this.q9(0,b)
this.uf(!0)}}
A.fy.prototype={
ba(){return this.ok.M(this)},
f2(){var s=this
if(A.aq3(s.b,s.f))s.ok.f2()
s.O7()},
wd(){this.ok.aC()
this.ok.b4()
this.NT()},
hO(){var s=this
if(s.p1){s.ok.b4()
s.p1=!1}s.NU()},
bb(a,b){var s,r,q,p=this
p.q9(0,b)
s=p.ok
r=s.a
r.toString
q=p.f
q.toString
s.a=t.aw.a(q)
s.aW(r)
p.uf(!0)},
cb(){this.O5()
this.ok.cb()
this.h1()},
ds(){this.ok.ds()
this.Cy()},
pG(){var s=this
s.v8()
s.ok.m()
s.ok=s.ok.c=null},
yK(a,b){return this.Cz(a,b)},
b4(){this.O6()
this.p1=!0}}
A.vV.prototype={
ba(){var s=this.f
s.toString
return t.im.a(s).b},
bb(a,b){var s=this,r=s.f
r.toString
t.im.a(r)
s.q9(0,b)
s.Bo(r)
s.uf(!0)},
Bo(a){this.my(a)}}
A.mA.prototype={
DD(a){this.aT(new A.a3e(a))},
my(a){var s=this.f
s.toString
this.DD(this.$ti.h("dy<1>").a(s))}}
A.a3e.prototype={
$1(a){if(a instanceof A.bC)this.a.o3(a.ga9())
else a.aT(this)},
$S:8}
A.fd.prototype={
xN(){var s=this,r=s.a,q=r==null?null:r.y
if(q==null)q=B.TF
r=s.f
r.toString
s.y=q.a5T(0,A.A(r),s)},
C0(a,b){this.ak.l(0,a,b)},
M9(a,b){this.C0(a,null)},
KX(a,b){b.b4()},
Bo(a){var s=this.f
s.toString
if(t.sg.a(s).c0(a))this.P4(a)},
my(a){var s,r,q
for(s=this.ak,s=new A.yl(s,s.vS()),r=A.n(s).c;s.q();){q=s.d
this.KX(a,q==null?r.a(q):q)}}}
A.bC.prototype={
ga9(){var s=this.ay
s.toString
return s},
TT(){var s=this.a
while(!0){if(!(s!=null&&!(s instanceof A.bC)))break
s=s.a}return t.bI.a(s)},
TS(){var s,r={},q=r.a=this.a
r.b=null
while(!0){if(!(q!=null&&!(q instanceof A.bC)))break
if(q instanceof A.mA){r.b=q
break}s=q.a
r.a=s
q=s}return r.b},
fv(a,b){var s,r=this
r.CB(a,b)
s=r.f
s.toString
r.ay=t.xL.a(s).aG(r)
r.ru(b)
r.v7()},
bb(a,b){this.q9(0,b)
this.FY()},
hO(){this.FY()},
FY(){var s=this,r=s.f
r.toString
t.xL.a(r).aN(s,s.ga9())
s.v7()},
a70(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=new A.a4u(a4),g=new A.a4v(i),f=a3.length,e=f-1,d=a2.length,c=d-1,b=d===f?a2:A.aR(f,$.alN(),!1,t.h),a=i,a0=0,a1=0
while(!0){if(!(a1<=c&&a0<=e))break
s=h.$1(a2[a1])
r=a3[a0]
if(s!=null){f=s.f
f.toString
q=f instanceof A.bR?A.cR(f):i
d=A.aD(q==null?A.aT(f):q)
q=r instanceof A.bR?A.cR(r):i
f=!(d===A.aD(q==null?A.aT(r):q)&&J.f(f.a,r.a))}else f=!0
if(f)break
f=j.dT(s,r,g.$2(a0,a))
f.toString
b[a0]=f;++a0;++a1
a=f}p=c
while(!0){o=a1<=p
if(!(o&&a0<=e))break
s=h.$1(a2[p])
r=a3[e]
if(s!=null){f=s.f
f.toString
q=f instanceof A.bR?A.cR(f):i
d=A.aD(q==null?A.aT(f):q)
q=r instanceof A.bR?A.cR(r):i
f=!(d===A.aD(q==null?A.aT(r):q)&&J.f(f.a,r.a))}else f=!0
if(f)break;--p;--e}if(o){n=A.y(t.qI,t.h)
for(;a1<=p;){s=h.$1(a2[a1])
if(s!=null){f=s.f.a
if(f!=null)n.l(0,f,s)
else{s.a=null
s.oq()
f=j.r.b
if(s.w===B.c9){s.ds()
s.aT(A.ahV())}f.b.C(0,s)}}++a1}o=!0}else n=i
for(;a0<=e;a=f){r=a3[a0]
if(o){m=r.a
if(m!=null){s=n.j(0,m)
if(s!=null){f=s.f
f.toString
q=f instanceof A.bR?A.cR(f):i
d=A.aD(q==null?A.aT(f):q)
q=r instanceof A.bR?A.cR(r):i
if(d===A.aD(q==null?A.aT(r):q)&&J.f(f.a,m))n.v(0,m)
else s=i}}else s=i}else s=i
f=j.dT(s,r,g.$2(a0,a))
f.toString
b[a0]=f;++a0}e=a3.length-1
while(!0){if(!(a1<=c&&a0<=e))break
f=j.dT(a2[a1],a3[a0],g.$2(a0,a))
f.toString
b[a0]=f;++a0;++a1
a=f}if(o&&n.a!==0)for(f=n.gaS(n),f=new A.dU(J.at(f.a),f.b),d=A.n(f).z[1];f.q();){l=f.a
if(l==null)l=d.a(l)
if(!a4.B(0,l)){l.a=null
l.oq()
k=j.r.b
if(l.w===B.c9){l.ds()
l.aT(A.ahV())}k.b.C(0,l)}}return b},
ds(){this.Cy()},
pG(){var s=this,r=s.f
r.toString
t.xL.a(r)
s.v8()
r.ow(s.ga9())
s.ay.m()
s.ay=null},
xS(a){var s,r=this,q=r.d
r.O4(a)
s=r.CW
s.toString
s.ju(r.ga9(),q,r.d)},
ru(a){var s,r,q=this
q.d=a
s=q.CW=q.TT()
if(s!=null)s.jp(q.ga9(),a)
r=q.TS()
if(r!=null){s=r.f
s.toString
t.yL.a(s).o3(q.ga9())}},
oq(){var s=this,r=s.CW
if(r!=null){r.jF(s.ga9(),s.d)
s.CW=null}s.d=null},
jp(a,b){},
ju(a,b,c){},
jF(a,b){}}
A.a4u.prototype={
$1(a){var s=this.a.B(0,a)
return s?null:a},
$S:301}
A.a4v.prototype={
$2(a,b){return new A.oL(b,a,t.wx)},
$S:302}
A.wi.prototype={
fv(a,b){this.vg(a,b)}}
A.FT.prototype={
jk(a){this.l7(a)},
jp(a,b){},
ju(a,b,c){},
jF(a,b){}}
A.wO.prototype={
aT(a){var s=this.p1
if(s!=null)a.$1(s)},
jk(a){this.p1=null
this.l7(a)},
fv(a,b){var s,r,q=this
q.vg(a,b)
s=q.p1
r=q.f
r.toString
q.p1=q.dT(s,t.Dp.a(r).c,null)},
bb(a,b){var s,r,q=this
q.na(0,b)
s=q.p1
r=q.f
r.toString
q.p1=q.dT(s,t.Dp.a(r).c,null)},
jp(a,b){var s=this.ay
s.toString
t.fB.a(s).saV(a)},
ju(a,b,c){},
jF(a,b){var s=this.ay
s.toString
t.fB.a(s).saV(null)}}
A.eQ.prototype={
ga9(){return t.gz.a(A.bC.prototype.ga9.call(this))},
gIm(a){var s=this.p1
s===$&&A.b()
return new A.aH(s,new A.a2r(this),A.aj(s).h("aH<1>"))},
jp(a,b){var s=this.ga9(),r=b.a
s.zE(0,a,r==null?null:r.ga9())},
ju(a,b,c){var s=this.ga9(),r=c.a
s.tT(a,r==null?null:r.ga9())},
jF(a,b){this.ga9().v(0,a)},
aT(a){var s,r,q,p,o=this.p1
o===$&&A.b()
s=o.length
r=this.p2
q=0
for(;q<s;++q){p=o[q]
if(!r.B(0,p))a.$1(p)}},
jk(a){this.p2.C(0,a)
this.l7(a)},
tC(a,b){return this.CA(a,b)},
fv(a,b){var s,r,q,p,o,n,m,l=this
l.vg(a,b)
s=l.f
s.toString
s=t.tk.a(s).c
r=s.length
q=A.aR(r,$.alN(),!1,t.h)
for(p=t.wx,o=null,n=0;n<r;++n,o=m){m=l.CA(s[n],new A.oL(o,n,p))
q[n]=m}l.p1=q},
bb(a,b){var s,r,q,p=this
p.na(0,b)
s=p.f
s.toString
t.tk.a(s)
r=p.p1
r===$&&A.b()
q=p.p2
p.p1=p.a70(r,s.c,q)
q.a0(0)}}
A.a2r.prototype={
$1(a){return!this.a.p2.B(0,a)},
$S:50}
A.oL.prototype={
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return b instanceof A.oL&&this.b===b.b&&J.f(this.a,b.a)},
gt(a){return A.S(this.b,this.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.OR.prototype={}
A.OU.prototype={
bS(a){return A.K(A.c2(null))}}
A.QW.prototype={}
A.m7.prototype={}
A.cv.prototype={
IC(){return this.a.$0()},
Kd(a){return this.b.$1(a)}}
A.Fd.prototype={
M(a){var s=this,r=A.y(t.n,t.ob),q=A.dw(a),p=q==null?null:q.ay
if(s.d==null)if(s.e==null)if(s.f==null)if(s.r==null)q=!1
else q=!0
else q=!0
else q=!0
else q=!0
if(q)r.l(0,B.Cf,new A.cv(new A.ZV(s),new A.ZW(s,p),t.g0))
if(s.ay==null)q=!1
else q=!0
if(q)r.l(0,B.ZR,new A.cv(new A.ZX(s),new A.a_0(s,p),t.da))
if(s.cy==null)q=!1
else q=!0
if(q)r.l(0,B.Cd,new A.cv(new A.a_1(s),new A.a_2(s,p),t.on))
if(s.rx!=null||s.ry!=null||s.to!=null||!1)r.l(0,B.lT,new A.cv(new A.a_3(s),new A.a_4(s,p),t.n_))
if(s.x2!=null||s.y1!=null||s.y2!=null||s.am!=null)r.l(0,B.lS,new A.cv(new A.a_5(s),new A.a_6(s,p),t.ta))
if(s.ap!=null||s.ad!=null||s.aY!=null||!1)r.l(0,B.lR,new A.cv(new A.a_7(s),new A.ZY(s,p),t.uX))
q=!1
if(q)r.l(0,B.ZU,new A.cv(new A.ZZ(s),new A.a__(s,p),t.p1))
return new A.kI(s.c,r,s.aq,s.ai,null,null)}}
A.ZV.prototype={
$0(){return A.azF(this.a,null)},
$S:303}
A.ZW.prototype={
$1(a){var s=this.a
a.y1=s.d
a.y2=s.e
a.am=s.f
a.ap=s.r
a.fo=a.ck=a.bh=a.bm=a.aY=a.ad=a.ak=null
a.b=this.b},
$S:304}
A.ZX.prototype={
$0(){var s=t.S
return new A.fV(A.y(s,t.Aj),this.a,null,A.y(s,t.V))},
$S:305}
A.a_0.prototype={
$1(a){a.e=null
a.f=this.a.ay
a.r=null
a.b=this.b},
$S:306}
A.a_1.prototype={
$0(){return A.axl(this.a,null,null)},
$S:307}
A.a_2.prototype={
$1(a){a.k3=a.k2=null
a.k4=this.a.cy
a.ak=a.ap=a.am=a.y2=a.y1=a.xr=a.x2=a.x1=a.to=a.ry=a.rx=a.RG=a.R8=a.p4=a.p3=a.p2=a.p1=a.ok=null
a.b=this.b},
$S:308}
A.a_3.prototype={
$0(){return A.ap9(this.a,null)},
$S:115}
A.a_4.prototype={
$1(a){var s
a.as=null
s=this.a
a.at=s.rx
a.ax=s.ry
a.ay=s.to
a.ch=null
a.Q=s.b_
a.b=this.b},
$S:116}
A.a_5.prototype={
$0(){return A.ajB(this.a,null)},
$S:117}
A.a_6.prototype={
$1(a){var s=this.a
a.as=s.x2
a.at=null
a.ax=s.y1
a.ay=s.y2
a.ch=s.am
a.Q=s.b_
a.b=this.b},
$S:118}
A.a_7.prototype={
$0(){var s=t.S,r=A.cW(s)
return new A.hb(B.bc,A.als(),B.c8,A.y(s,t.ki),A.b3(s),A.y(s,t.o),r,this.a,null,A.y(s,t.V))},
$S:313}
A.ZY.prototype={
$1(a){var s=this.a
a.as=s.ap
a.at=null
a.ax=s.ad
a.ay=s.aY
a.ch=null
a.Q=s.b_
a.b=this.b},
$S:314}
A.ZZ.prototype={
$0(){var s=t.S,r=A.cW(s)
return new A.fZ(B.m0,A.y(s,t.o),r,this.a,null,A.y(s,t.V))},
$S:315}
A.a__.prototype={
$1(a){a.ax=a.as=a.at=a.Q=null
a.b=this.b},
$S:316}
A.kI.prototype={
aj(){return new A.pf(B.SW,B.m)}}
A.pf.prototype={
aC(){var s,r,q=this
q.aU()
s=q.a
r=s.r
q.e=r==null?new A.MY(q):r
q.xB(s.d)},
aW(a){var s,r=this
r.bl(a)
if(!(a.r==null&&r.a.r==null)){s=r.a.r
r.e=s==null?new A.MY(r):s}r.xB(r.a.d)},
a6l(a){if(this.a.f)return
t.qS.a(this.c.ga9()).sa75(a)},
m(){for(var s=this.d,s=J.at(s.gaS(s));s.q();)s.gF(s).m()
this.d=null
this.aQ()},
xB(a){var s,r,q,p,o=this,n=o.d
n.toString
o.d=A.y(t.n,t.id)
for(s=J.at(a.gbn(a));s.q();){r=s.gF(s)
q=o.d
q.toString
p=n.j(0,r)
q.l(0,r,p==null?a.j(0,r).IC():p)
q=a.j(0,r)
q.toString
r=o.d.j(0,r)
r.toString
q.Kd(r)}for(s=J.at(n.gbn(n));s.q();){r=s.gF(s)
if(!o.d.R(0,r))n.j(0,r).m()}},
Ub(a){var s,r
for(s=this.d,s=J.at(s.gaS(s));s.q();){r=s.gF(s)
r.d.l(0,a.gbU(),a.gcf(a))
if(r.ft(a))r.hs(a)
else r.oU(a)}},
VL(a){var s,r
for(s=this.d,s=J.at(s.gaS(s));s.q();){r=s.gF(s)
r.d.l(0,a.gbU(),a.gcf(a))
if(r.a4B(a))r.y0(a)}},
a_r(a){this.e.yg(a)},
M(a){var s,r,q,p=this,o=null,n=p.a,m=n.e,l=m==null
if(l)s=n.c==null?B.d5:B.bR
else s=m
r=n.c
q=A.FZ(s,r,o,p.gUa(),p.gVK(),o,o)
if(!n.f){if(l)n=r==null?B.d5:B.bR
else n=m
q=new A.NL(n,p.ga_q(),q,o)}return q}}
A.NL.prototype={
aG(a){var s=new A.jd(B.bR,null,A.aw())
s.aJ()
s.saV(null)
s.A=this.e
this.f.$1(s)
return s},
aN(a,b){b.A=this.e
this.f.$1(b)}}
A.a6v.prototype={
i(a){return"SemanticsGestureDelegate()"}}
A.MY.prototype={
yg(a){var s=this,r=s.a.d
r.toString
a.sjy(s.UA(r))
a.skL(s.Ur(r))
a.sa5n(s.Up(r))
a.sa5t(s.UB(r))},
UA(a){var s=t.f3.a(a.j(0,B.Cf))
if(s==null)return null
return new A.abT(s)},
Ur(a){var s=t.yA.a(a.j(0,B.Cd))
if(s==null)return null
return new A.abS(s)},
Up(a){var s=t.oq.a(a.j(0,B.lS)),r=t.rR.a(a.j(0,B.lR)),q=s==null?null:new A.abP(s),p=r==null?null:new A.abQ(r)
if(q==null&&p==null)return null
return new A.abR(q,p)},
UB(a){var s=t.iC.a(a.j(0,B.lT)),r=t.rR.a(a.j(0,B.lR)),q=s==null?null:new A.abU(s),p=r==null?null:new A.abV(r)
if(q==null&&p==null)return null
return new A.abW(q,p)}}
A.abT.prototype={
$0(){var s=this.a,r=s.y1
if(r!=null)r.$1(new A.pX(B.j,B.j))
r=s.y2
if(r!=null)r.$1(new A.pY())
s=s.am
if(s!=null)s.$0()},
$S:0}
A.abS.prototype={
$0(){var s=this.a,r=s.ok
if(r!=null)r.$1(B.Ri)
r=s.k4
if(r!=null)r.$0()
s=s.p3
if(s!=null)s.$1(B.Rg)},
$S:0}
A.abP.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.iQ(B.j))
r=s.at
if(r!=null)r.$1(new A.hJ(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fW(B.c7,0))},
$S:22}
A.abQ.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.iQ(B.j))
r=s.at
if(r!=null)r.$1(new A.hJ(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fW(B.c7,null))},
$S:22}
A.abR.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(a)
s=this.b
if(s!=null)s.$1(a)},
$S:22}
A.abU.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.iQ(B.j))
r=s.at
if(r!=null)r.$1(new A.hJ(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fW(B.c7,0))},
$S:22}
A.abV.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.iQ(B.j))
r=s.at
if(r!=null)r.$1(new A.hJ(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fW(B.c7,null))},
$S:22}
A.abW.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(a)
s=this.b
if(s!=null)s.$1(a)},
$S:22}
A.me.prototype={
E(){return"HeroFlightDirection."+this.b}}
A.mc.prototype={
aj(){return new A.qA(new A.bB(null,t.C),B.m)}}
A.a_D.prototype={
$2(a,b){var s=a.f
s.toString
t.tV.a(s)
s=a.ok
s.toString
t.BJ.a(s)
if(!this.b||!1)this.a.l(0,b,s)
else s.Jl()},
$S:319}
A.a_E.prototype={
$1(a){var s,r,q=this,p=a.f
p.toString
if(p instanceof A.mc){t.jw.a(a)
s=p.c
if(A.ajS(a)===q.a)q.b.$2(a,s)
else{r=A.a2g(a,t.X)
if(r!=null)p=r.gkE()
else p=!1
if(p)q.b.$2(a,s)}}a.aT(q)},
$S:8}
A.qA.prototype={
v_(a){var s,r=this
r.f=a
s=r.c.ga9()
s.toString
r.aw(new A.acX(r,t.x.a(s)))},
uZ(){return this.v_(!1)},
m0(a){var s=this
if(a||s.e==null)return
s.e=null
if(s.c!=null)s.aw(new A.acW())},
Jl(){return this.m0(!1)},
M(a){var s,r=this,q=null,p=r.e,o=p==null,n=!o
if(n)r.a.toString
if(n&&!r.f){o=p.a
return A.ft(q,p.b,o)}s=o?q:p.a
p=o?q:p.b
return A.ft(new A.vx(n,new A.q3(o,new A.kr(r.a.e,r.d),q),q),p,s)}}
A.acX.prototype={
$0(){var s=this.b.k3
s.toString
this.a.e=s},
$S:0}
A.acW.prototype={
$0(){},
$S:0}
A.acT.prototype={
gbL(a){var s,r=this
if(r.a===B.bP){s=r.e.fy
s.toString}else{s=r.d.fy
s.toString}return A.el(B.bq,s,r.z?null:new A.u_(B.bq))},
ol(a,b){var s
this.r.a.toString
s=this.w.$2(a,b)
return s==null?new A.w1(a,b):s},
gJQ(){var s,r,q=this,p=q.Q
if(p===$){s=q.f.c
s.toString
r=A.apj(s,$.ai.K$.z.j(0,q.d.k2))
q.Q!==$&&A.bi()
q.Q=r
p=r}return p},
guo(){var s,r,q=this,p=q.as
if(p===$){s=q.r.c
s.toString
r=A.apj(s,$.ai.K$.z.j(0,q.e.k2))
q.as!==$&&A.bi()
q.as=r
p=r}return p},
gkG(){var s,r,q=this,p=q.at
if(p===$){s=q.guo()
if(s.gKt(s))if(!q.z){s=q.gJQ()
s=s.gKt(s)
r=s}else r=!0
else r=!1
q.at!==$&&A.bi()
p=q.at=r}return p},
i(a){var s,r,q=this,p=q.a.i(0),o=q.f,n=o.a.c.i(0),m=q.d.b.i(0),l=q.e.b.i(0)
o=o.i(0)
s=q.r.i(0)
r=q.gkG()?"":", INVALID"
return"_HeroFlightManifest("+p+" tag: "+n+" from route: "+m+" to route: "+l+" with hero: "+o+" to "+s+")"+r}}
A.jx.prototype={
Sj(a){var s,r,q,p,o=this,n=o.c
if(n==null){n=o.f
n===$&&A.b()
s=n.gbL(n)
r=o.f
q=r.f.c
q.toString
p=r.r.c
p.toString
p=o.c=n.x.$5(a,s,r.a,q,p)
n=p}s=o.e
s===$&&A.b()
return A.lz(s,new A.acU(o),n)},
FX(a){var s,r=this,q=a===B.Y
if(q||a===B.K){s=r.e
s===$&&A.b()
s.saL(0,null)
r.r.mH(0)
r.r=null
s=r.f
s===$&&A.b()
s.f.m0(q)
r.f.r.m0(a===B.K)
r.a.$1(r)
r.e.G(0,r.gL7())}},
EW(a){var s=this,r=s.f
r===$&&A.b()
r=r.d.a
if((r==null?null:r.CW.a)!==!0){s.FX(a)
return}if(s.x)return
r.toString
s.x=!0
r.CW.Z(0,new A.acV(s,r))},
a5s(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(!h.w){s=h.f
s===$&&A.b()
s=s.r.c!=null}else s=!1
if(s){s=h.f
s===$&&A.b()
r=t.av.a(s.r.c.ga9())}else r=null
if(r!=null&&r.b!=null&&r.k3!=null){s=h.f
s===$&&A.b()
s=$.ai.K$.z.j(0,s.e.k2)
s=s==null?null:s.ga9()
q=A.cw(r.bw(0,t.av.a(s)),B.j)}else q=null
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
h.b=i.ol(p.a,new A.C(k,j,k+(n-m),j+(l-o)))}}else{p=h.d
if(p.gb1(p)===B.Y){p=h.e
p===$&&A.b()
o=$.asV()
n=p.gn(p)
m=A.n(o).h("nv<aF.T>")
h.d=new A.aZ(t.m.a(p),new A.nv(new A.iO(new A.h3(n,1,B.aV)),o,m),m.h("aZ<aF.T>"))}}if(s)s=!(isFinite(q.a)&&isFinite(q.b))
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
A.acU.prototype={
$2(a,b){var s,r=null,q=this.a,p=q.b
p===$&&A.b()
s=q.e
s===$&&A.b()
s=p.ae(0,s.gn(s))
s.toString
p=q.f
p===$&&A.b()
p=p.c
return A.J2(p.b-s.d,new A.hP(!0,r,A.ajq(b,q.d),r),r,r,s.a,p.a-s.c,s.b,r)},
$S:320}
A.acV.prototype={
$0(){var s,r=this.a
r.x=!1
this.b.CW.G(0,this)
s=r.e
s===$&&A.b()
r.FX(s.gb1(s))},
$S:0}
A.ub.prototype={
rW(a,b){this.qM(b,a,B.bP,!1)},
rV(a,b){var s=$.hv()
A.ov(this)
if(!s.a.get(this).CW.a)this.qM(a,b,B.bQ,!1)},
rX(a,b){var s=a.gkE()
if(s)this.qM(b,a,B.bP,!1)},
J_(a,b){this.qM(a,b,B.bQ,!0)},
ov(){var s,r,q,p=$.hv()
A.ov(this)
if(p.a.get(this).CW.a)return
p=this.b
p=p.gaS(p)
s=A.n(p).h("aH<o.E>")
r=A.aA(new A.aH(p,new A.a_C(),s),!1,s.h("o.E"))
for(p=r.length,q=0;q<p;++q)r[q].EW(B.K)},
qM(a,b,c,d){var s
if(b!=a&&b instanceof A.i0&&a instanceof A.i0){switch(c.a){case 1:s=a.fy
if(s.gn(s)===0)return
break
case 0:s=b.fy
if(s.gn(s)===1)return
break}if(d)if(c===B.bQ){b.gpc()
s=!0}else s=!1
else s=!1
if(s)this.GV(a,b,c,d)
else{s=b.fy
b.stV(s.gn(s)===0)
$.ai.ax$.push(new A.a_B(this,a,b,c,d))}}},
GV(b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null
b4.stV(!1)
s=$.hv()
A.ov(b1)
s=s.a.get(b1)
r=s==null
if(r)q=b2
else{p=s.d
p===$&&A.b()
q=p.gbr()}if(r||q==null)return
o=s.c.ga9()
if(!(o instanceof A.F))return
n=$.ai.K$.z.j(0,b3.k2)
m=n!=null?A.ani(n,b6,s):B.zn
l=$.ai.K$.z.j(0,b4.k2)
k=l!=null?A.ani(l,b6,s):B.zn
for(s=m.gem(m),s=s.ga4(s),r=b1.gTc(),p=b1.a,j=b1.b,i=t.Cf,h=b1.gVi(),g=t.A,f=t.Q,e=t.b,d=t.tY,c=t.a7,b=t.m,a=c.h("aZ<aF.T>"),a0=t.sD;s.q();){a1=s.gF(s)
a2=a1.gcH(a1)
a3=a1.gn(a1)
a4=k.j(0,a2)
a5=j.j(0,a2)
if(a4==null)a6=b2
else{a1=o.k3
a1.toString
a4.a.toString
a3.a.toString
a6=new A.acT(b5,q,a1,b3,b4,a3,a4,p,r,b6,a5!=null)}if(a6!=null&&a6.gkG()){k.v(0,a2)
if(a5!=null){a1=a5.f
a1===$&&A.b()
a7=a1.a
if(a7===B.bP&&a6.a===B.bQ){a1=a5.e
a1===$&&A.b()
a1.saL(0,new A.eV(a6.gbL(a6),new A.bk(A.a([],g),f),0))
a1=a5.b
a1===$&&A.b()
a5.b=new A.wh(a1,a1.b,a1.a,a0)}else{a7=a7===B.bQ&&a6.a===B.bP
a8=a5.e
if(a7){a8===$&&A.b()
a1=a6.gbL(a6)
a7=a5.f
a7=a7.gbL(a7)
a7=a7.gn(a7)
a8.saL(0,new A.aZ(b.a(a1),new A.aL(a7,1,c),a))
a1=a5.f
a7=a1.f
a8=a6.r
if(a7!==a8){a7.m0(!0)
a8.uZ()
a1=a5.f
a7=a5.b
a7===$&&A.b()
a5.b=a1.ol(a7.b,a6.guo())}else{a7=a5.b
a7===$&&A.b()
a5.b=a1.ol(a7.b,a7.a)}}else{a7=a5.b
a7===$&&A.b()
a8===$&&A.b()
a5.b=a1.ol(a7.ae(0,a8.gn(a8)),a6.guo())
a5.c=null
a1=a6.a
a7=a5.e
if(a1===B.bQ)a7.saL(0,new A.eV(a6.gbL(a6),new A.bk(A.a([],g),f),0))
else a7.saL(0,a6.gbL(a6))
a5.f.f.m0(!0)
a5.f.r.m0(!0)
a6.f.v_(a1===B.bP)
a6.r.uZ()
a1=a5.r.f.gbr()
if(a1!=null)a1.Fx()}}a5.f=a6}else{a1=new A.jx(h,B.cX)
a7=A.a([],g)
a8=new A.bk(a7,f)
a9=new A.vU(a8,new A.bk(A.a([],e),d),0)
a9.a=B.K
a9.b=0
a9.bt()
a8.b=!0
a7.push(a1.gUJ())
a1.e=a9
a1.f=a6
switch(a6.a.a){case 1:a9.saL(0,new A.eV(a6.gbL(a6),new A.bk(A.a([],g),f),0))
b0=!1
break
case 0:a9.saL(0,a6.gbL(a6))
b0=!0
break
default:b0=b2}a7=a1.f
a1.b=a7.ol(a7.gJQ(),a1.f.guo())
a1.f.f.v_(b0)
a1.f.r.uZ()
a7=a1.f
a8=new A.nm(!1,$.by())
a8.ad$=!0
a8=new A.fm(a1.gSi(),!1,a8,new A.bB(b2,i))
a1.r=a8
a7.b.zD(0,a8)
a8=a1.e
a8.bt()
a8=a8.b0$
a8.b=!0
a8.a.push(a1.gL7())
j.l(0,a2,a1)}}else if(a5!=null)a5.w=!0}for(s=J.at(k.gaS(k));s.q();)s.gF(s).Jl()},
Vj(a){var s=a.f
s===$&&A.b()
this.b.v(0,s.f.a.c)},
Td(a,b,c,d,e){var s,r,q=e.f
q.toString
t.tV.a(q)
s=A.dw(e)
r=A.dw(d)
if(s==null||r==null)return q.e
return A.lz(b,new A.a_A(s,c,r.f,s.f,b,q),null)}}
A.a_C.prototype={
$1(a){var s=a.f
s===$&&A.b()
if(s.y)if(s.a===B.bQ){s=a.e
s===$&&A.b()
s=s.gb1(s)===B.K}else s=!1
else s=!1
return s},
$S:323}
A.a_B.prototype={
$1(a){var s=this
s.a.GV(s.b,s.c,s.d,s.e)},
$S:2}
A.a_A.prototype={
$2(a,b){var s=this,r=s.c,q=s.d,p=s.e
r=s.b===B.bP?new A.tE(r,q).ae(0,p.gn(p)):new A.tE(q,r).ae(0,p.gn(p))
return new A.fg(s.a.II(r),s.f.e,null)},
$S:324}
A.oD.prototype={
M(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.a6(t.I)
f.toString
s=f.w
r=A.anm(a)
q=r.a
p=r.b
o=r.c
n=r.d
m=r.e
f=this.c
if(f==null)return A.dK(g,A.ft(g,q,q),!1,g,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)
l=r.r
k=l==null?g:A.H(l,0,1)
if(k==null)k=1
l=r.f
l.toString
if(k!==1)j=A.b2(B.d.b8(255*((l.gn(l)>>>24&255)/255*k)),l.gn(l)>>>16&255,l.gn(l)>>>8&255,l.gn(l)&255)
else j=l
l=A.dJ(f.a)
i=A.a([],t.BV)
if(p!=null)i.push(new A.kd("FILL",p))
if(o!=null)i.push(new A.kd("wght",o))
if(n!=null)i.push(new A.kd("GRAD",n))
if(m!=null)i.push(new A.kd("opsz",m))
h=A.aoq(g,g,B.Wd,g,g,!0,g,A.aa_(g,A.bY(g,g,j,g,g,g,g,g,"MaterialIcons",g,g,q,g,i,g,g,g,!1,g,g,g,g,g,r.w,g,g),l),B.bI,s,g,1,B.aQ)
if(f.d)switch(s.a){case 0:f=new A.bf(new Float64Array(16))
f.dd()
f.hY(0,-1,1,1)
h=A.aoY(B.a0,h,f,!1)
break
case 1:break}return A.dK(g,new A.tM(!0,A.ft(A.rS(h,g,g),q,q),g),!1,g,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)}}
A.mi.prototype={
k(a,b){var s
if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
if(b instanceof A.mi)if(b.a===this.a)s=b.d===this.d
else s=!1
else s=!1
return s},
gt(a){return A.S(this.a,"MaterialIcons",null,this.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"IconData(U+"+B.b.jA(B.f.iG(this.a,16).toUpperCase(),5,"0")+")"}}
A.mj.prototype={
c0(a){return!this.w.k(0,a.w)}}
A.a0i.prototype={
$1(a){return A.ajE(this.c,A.anl(a).c4(this.b),this.a)},
$S:325}
A.cC.prototype={
oj(a,b,c,d,e,f,g,h){var s,r=this,q=g==null?r.a:g,p=b==null?r.b:b,o=h==null?r.c:h,n=c==null?r.d:c,m=e==null?r.e:e,l=a==null?r.f:a
if(d==null){s=r.r
s=s==null?null:A.H(s,0,1)}else s=d
return new A.cC(q,p,o,n,m,l,s,f==null?r.w:f)},
hz(a){return this.oj(a,null,null,null,null,null,null,null)},
c4(a){var s=a.r
s=s==null?null:A.H(s,0,1)
return this.oj(a.f,a.b,a.d,s,a.e,a.w,a.a,a.c)},
W(a){return this},
k(a,b){var s,r,q=this
if(b==null)return!1
if(J.X(b)!==A.A(q))return!1
if(b instanceof A.cC)if(b.a==q.a)if(b.b==q.b)if(b.c==q.c)if(b.d==q.d)if(b.e==q.e)if(J.f(b.f,q.f)){s=b.r
s=s==null?null:A.H(s,0,1)
r=q.r
s=s==(r==null?null:A.H(r,0,1))&&A.cS(b.w,q.w)}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gt(a){var s,r=this,q=r.r
q=q==null?null:A.H(q,0,1)
s=r.w
s=s==null?null:A.df(s)
return A.S(r.a,r.b,r.c,r.d,r.e,r.f,q,s,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.NV.prototype={}
A.oE.prototype={
aj(){return new A.ym(B.m)}}
A.ym.prototype={
aC(){var s=this
s.aU()
$.ai.ai$.push(s)
s.z=new A.E0(s)},
m(){var s,r=this
B.c.v($.ai.ai$,r)
r.ZN()
s=r.at
if(s!=null)s.m()
s=r.z
s===$&&A.b()
s.a=null
r.xh(null)
r.aQ()},
b4(){var s,r=this
r.a_h()
r.xl()
s=r.c
s.toString
if(A.aoV(s))r.WS()
else r.GY(!0)
r.cD()},
aW(a){var s,r,q=this
q.bl(a)
if(q.r&&q.a.e==null!==(a.e==null)){s=q.nv()
r=q.d
r.toString
r.Z(0,q.EK(!0))
q.d.G(0,s)}if(!q.a.c.k(0,a.c))q.xl()},
f2(){this.xl()
this.PX()},
a_h(){var s=this.c
s.toString
s=A.dw(s)
s=s==null?null:s.z
if(s==null){s=$.a6k.e0$
s===$&&A.b()
s=(s.a&2)!==0}this.w=s},
xl(){var s,r,q,p,o=this,n=o.z
n===$&&A.b()
s=o.a
r=s.c
q=o.c
q.toString
p=s.r
if(p!=null&&s.w!=null){p.toString
s=s.w
s.toString
s=new A.a6(p,s)}else s=null
o.a_t(new A.ws(n,r,t.rZ).W(A.all(q,s)))},
EK(a){var s,r=this,q=r.ax
if(q==null||a){r.as=r.Q=null
q=r.a
s=q.e==null?null:r.gVn()
q=q.f!=null||!1?new A.ad0(r):null
q=r.ax=new A.dv(r.gVp(),s,q)}q.toString
return q},
nv(){return this.EK(!1)},
Vq(a,b){this.aw(new A.ad2(this,a,b))},
Vo(a){this.aw(new A.ad1(this,a))},
xh(a){var s=this.e
$.bP.ax$.push(new A.ad3(s))
this.e=a},
a_t(a){var s,r,q=this,p=q.d
if(p==null)s=null
else{s=p.a
if(s==null)s=p}r=a.a
if(s===(r==null?a:r))return
if(q.r){p.toString
p.G(0,q.nv())}q.a.toString
q.aw(new A.ad4(q))
q.aw(new A.ad5(q))
q.d=a
if(q.r)a.Z(0,q.nv())},
WS(){var s,r=this
if(r.r)return
s=r.d
s.toString
s.Z(0,r.nv())
s=r.at
if(s!=null)s.m()
r.at=null
r.r=!0},
GY(a){var s,r=this
if(!r.r)return
if(a)if(r.at==null){s=r.d
s=(s==null?null:s.a)!=null}else s=!1
else s=!1
if(s)r.at=r.d.a.mt()
s=r.d
s.toString
s.G(0,r.nv())
r.r=!1},
ZN(){return this.GY(!1)},
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
h=new A.Jf(r,q,o,n,e,s,f,p.z,m,l,k,j,f,!1,i,!1,f)
h=A.dK(f,h,!1,f,!1,f,f,f,!0,"",f,f,f,f,f,f,f,f,f,f,f)
e=p.d
if(e!=null)h=e.$4(a,h,g.x,g.y)
e=g.a.e
return e!=null?e.$3(a,h,g.f):h}}
A.ad0.prototype={
$2(a,b){var s=this.a
s.aw(new A.ad_(s,a,b))},
$S:326}
A.ad_.prototype={
$0(){var s=this.a
s.Q=this.b
s.as=this.c},
$S:0}
A.ad2.prototype={
$0(){var s,r=this.a
r.xh(this.b)
r.as=r.Q=r.f=null
s=r.x
r.x=s==null?0:s+1
r.y=B.nN.MX(r.y,this.c)},
$S:0}
A.ad1.prototype={
$0(){var s=this.a
s.f=this.b
s.as=s.Q=null},
$S:0}
A.ad3.prototype={
$1(a){var s=this.a
if(s!=null)s.a.m()
return null},
$S:2}
A.ad4.prototype={
$0(){this.a.xh(null)},
$S:0}
A.ad5.prototype={
$0(){var s=this.a
s.x=s.f=null
s.y=!1},
$S:0}
A.Sf.prototype={}
A.DN.prototype={
dO(a){var s=A.VU(this.a,this.b,a)
s.toString
return s}}
A.tE.prototype={
dO(a){var s=A.ajl(this.a,this.b,a)
s.toString
return s}}
A.lG.prototype={
dO(a){return A.o2(this.a,this.b,a)}}
A.ng.prototype={
dO(a){var s=A.ba(this.a,this.b,a)
s.toString
return s}}
A.FA.prototype={}
A.oJ.prototype={
gk_(){var s,r,q=this,p=q.d
if(p===$){s=q.a.d
r=A.e1(null,s,null,null,q)
q.d!==$&&A.bi()
q.d=r
p=r}return p},
gfG(){var s,r=this,q=r.e
if(q===$){s=r.gk_()
q=r.e=A.el(r.a.c,s,null)}return q},
aC(){var s,r=this
r.aU()
s=r.gk_()
s.bt()
s=s.aX$
s.b=!0
s.a.push(new A.a0I(r))
r.E9()},
aW(a){var s,r=this
r.bl(a)
if(r.a.c!==a.c){r.gfG().m()
s=r.gk_()
r.e=A.el(r.a.c,s,null)}r.gk_().e=r.a.d
if(r.E9()){r.oQ(new A.a0H(r))
s=r.gk_()
s.sn(0,0)
s.cR(0)}},
m(){this.gfG().m()
this.gk_().m()
this.Q6()},
a_w(a,b){var s
if(a==null)return
s=this.gfG()
a.syl(a.ae(0,s.gn(s)))
a.saR(0,b)},
E9(){var s={}
s.a=!1
this.oQ(new A.a0G(s,this))
return s.a}}
A.a0I.prototype={
$1(a){switch(a.a){case 3:this.a.a.toString
break
case 0:case 1:case 2:break}},
$S:4}
A.a0H.prototype={
$3(a,b,c){this.a.a_w(a,b)
return a},
$S:119}
A.a0G.prototype={
$3(a,b,c){var s
if(b!=null){if(a==null)a=c.$1(b)
s=a.b
if(!J.f(b,s==null?a.a:s))this.a.a=!0
else if(a.b==null)a.saR(0,a.a)}else a=null
return a},
$S:119}
A.nU.prototype={
aC(){this.Oj()
var s=this.gk_()
s.bt()
s=s.b0$
s.b=!0
s.a.push(this.gUH())},
UI(){this.aw(new A.TJ())}}
A.TJ.prototype={
$0(){},
$S:0}
A.rn.prototype={
aj(){return new A.LU(null,null,B.m)}}
A.LU.prototype={
oQ(a){this.CW=t.uh.a(a.$3(this.CW,this.a.w,new A.aaQ()))},
M(a){var s,r=this.CW
r.toString
s=this.gfG()
s=r.ae(0,s.gn(s))
return A.tn(this.a.r,null,B.cN,!0,s,null,null,B.aQ)}}
A.aaQ.prototype={
$1(a){return new A.ng(t.F1.a(a),null)},
$S:328}
A.ro.prototype={
aj(){return new A.LV(null,null,B.m)}}
A.LV.prototype={
oQ(a){var s=this,r=s.CW
s.a.toString
s.CW=t.iH.a(a.$3(r,B.aA,new A.aaR()))
s.cx=t.nr.a(a.$3(s.cx,s.a.z,new A.aaS()))
r=t.mo
s.cy=r.a(a.$3(s.cy,s.a.Q,new A.aaT()))
s.db=r.a(a.$3(s.db,s.a.at,new A.aaU()))},
M(a){var s,r,q,p,o,n=this,m=n.a,l=m.w
m=m.x
s=n.CW
s.toString
r=n.gfG()
r=s.ae(0,r.gn(r))
s=n.cx
s.toString
q=n.gfG()
q=s.ae(0,q.gn(q))
s=n.a.Q
p=n.db
p.toString
o=n.gfG()
o=p.ae(0,o.gn(o))
o.toString
return new A.IT(l,m,r,q,s,o,n.a.r,null)}}
A.aaR.prototype={
$1(a){return new A.lG(t.ak.a(a),null)},
$S:329}
A.aaS.prototype={
$1(a){return new A.aL(A.T1(a),null,t.a7)},
$S:84}
A.aaT.prototype={
$1(a){return new A.hD(t.iO.a(a),null)},
$S:48}
A.aaU.prototype={
$1(a){return new A.hD(t.iO.a(a),null)},
$S:48}
A.qD.prototype={
m(){var s=this,r=s.du$
if(r!=null)r.G(0,s.glK())
s.du$=null
s.aQ()},
cb(){this.dW()
this.cZ()
this.lL()}}
A.kj.prototype={
bS(a){var s=A.h_(t.h,t.X)
return new A.ui(s,this,B.a5,A.n(this).h("ui<kj.T>"))}}
A.ui.prototype={
M9(a,b){var s=this.ak,r=this.$ti,q=r.h("ca<1>?").a(s.j(0,a))
if(q!=null&&q.gO(q))return
s.l(0,a,A.cW(r.c))},
KX(a,b){var s,r=this.$ti,q=r.h("ca<1>?").a(this.ak.j(0,b))
if(q==null)return
if(!q.gO(q)){s=this.f
s.toString
s=r.h("kj<1>").a(s).a72(a,q)
r=s}else r=!0
if(r)b.b4()}}
A.hQ.prototype={
c0(a){return a.f!==this.f},
bS(a){var s=new A.qE(A.h_(t.h,t.X),this,B.a5,A.n(this).h("qE<hQ.T>"))
this.f.Z(0,s.gwJ())
return s}}
A.qE.prototype={
bb(a,b){var s,r,q=this,p=q.f
p.toString
s=q.$ti.h("hQ<1>").a(p).f
r=b.f
if(s!==r){p=q.gwJ()
s.G(0,p)
r.Z(0,p)}q.P3(0,b)},
ba(){var s,r=this
if(r.bN){s=r.f
s.toString
r.CF(r.$ti.h("hQ<1>").a(s))
r.bN=!1}return r.P2()},
Wm(){this.bN=!0
this.h1()},
my(a){this.CF(a)
this.bN=!1},
pG(){var s=this,r=s.f
r.toString
s.$ti.h("hQ<1>").a(r).f.G(0,s.gwJ())
s.v8()}}
A.FC.prototype={}
A.qQ.prototype={}
A.ah7.prototype={
$1(a){return this.a.a=a},
$S:26}
A.ah8.prototype={
$1(a){return a.b},
$S:330}
A.ah9.prototype={
$1(a){var s,r,q,p
for(s=J.aJ(a),r=this.a,q=this.b,p=0;p<s.gp(a);++p)q.l(0,A.aD(A.n(r.a[p].a).h("d_.T")),s.j(a,p))
return q},
$S:331}
A.d_.prototype={
i(a){return"LocalizationsDelegate["+A.aD(A.n(this).h("d_.T")).i(0)+"]"}}
A.S0.prototype={
mr(a){return!0},
cU(a,b){return new A.bp(B.Dn,t.mq)},
l2(a){return!1},
i(a){return"DefaultWidgetsLocalizations.delegate(en_US)"}}
A.DT.prototype={
gbH(){return B.t},
$ijs:1}
A.yA.prototype={
c0(a){return this.w!==a.w}}
A.uK.prototype={
aj(){return new A.On(new A.bB(null,t.C),A.y(t.n,t.z),B.m)}}
A.On.prototype={
aC(){this.aU()
this.cU(0,this.a.c)},
S0(a){var s,r,q,p,o,n,m=this.a.d,l=a.d
if(m.length!==l.length)return!0
s=A.a(m.slice(0),A.aj(m))
r=A.a(l.slice(0),A.aj(l))
for(q=0;q<s.length;++q){p=s[q]
o=r[q]
n=p instanceof A.bR?A.cR(p):null
m=A.aD(n==null?A.aT(p):n)
n=o instanceof A.bR?A.cR(o):null
if(m===A.aD(n==null?A.aT(o):n)){p.l2(o)
m=!1}else m=!0
if(m)return!0}return!1},
aW(a){var s,r=this
r.bl(a)
if(r.a.c.k(0,a.c)){r.a.toString
s=r.S0(a)}else s=!0
if(s)r.cU(0,r.a.c)},
cU(a,b){var s,r=this,q={},p=r.a.d,o=p.length
if(o===0){r.f=b
return}q.a=null
s=A.aCA(b,p).aE(new A.adu(q),t.Co)
q=q.a
if(q!=null){r.e=q
r.f=b}else{++$.kK.x2$
s.aE(new A.adv(r,b),t.H)}},
gH6(){return t.cC.a(J.aM(this.e,B.a_e)).gbH()},
M(a){var s,r,q,p=this,o=null
if(p.f==null)return B.fO
s=p.gH6()
p.f.toString
r=p.e
q=p.gH6()
return A.dK(o,new A.yA(p,r,A.aji(p.a.e,q),p.d),!1,o,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,s,o,o)}}
A.adu.prototype={
$1(a){return this.a.a=a},
$S:332}
A.adv.prototype={
$1(a){var s=this.a
if(s.c!=null)s.aw(new A.adt(s,a,this.b))
$.kK.I2()},
$S:333}
A.adt.prototype={
$0(){var s=this.a
s.e=this.b
s.f=this.c},
$S:0}
A.vA.prototype={
E(){return"Orientation."+this.b}}
A.j4.prototype={
rL(a,b,c,d,e){var s=this,r=c==null?s.c:c,q=a==null?s.f:a,p=e==null?s.r:e,o=d==null?s.e:d
return new A.j4(s.a,s.b,r,s.d,o,q,p,s.w,!1,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch)},
yv(a){return this.rL(null,null,a,null,null)},
II(a){return this.rL(a,null,null,null,null)},
a1D(a,b){return this.rL(null,null,null,a,b)},
a1C(a,b){return this.rL(a,null,null,null,b)},
LA(a,b,c,d){var s,r,q,p,o,n,m=this,l=null
if(!(b||d||c||a))return m
s=m.f
r=b?0:l
q=d?0:l
p=c?0:l
r=s.oh(a?0:l,r,p,q)
q=m.r
p=b?Math.max(0,q.a-s.a):l
o=d?Math.max(0,q.b-s.b):l
n=c?Math.max(0,q.c-s.c):l
return m.a1C(r,q.oh(a?Math.max(0,q.d-s.d):l,p,n,o))},
a6c(a){var s=this,r=null,q=s.r,p=s.e,o=Math.max(0,q.d-p.d)
q=q.oh(o,r,r,r)
return s.a1D(p.oh(0,r,r,r),q)},
k(a,b){var s=this
if(b==null)return!1
if(J.X(b)!==A.A(s))return!1
return b instanceof A.j4&&b.a.k(0,s.a)&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.f.k(0,s.f)&&b.r.k(0,s.r)&&b.e.k(0,s.e)&&b.Q===s.Q&&b.as===s.as&&b.z===s.z&&b.y===s.y&&b.at===s.at&&b.ax===s.ax&&b.ay.k(0,s.ay)&&A.cS(b.ch,s.ch)},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,s.f,s.r,s.e,!1,s.Q,s.as,s.z,s.y,s.at,s.ax,s.ay,A.df(s.ch),B.a,B.a,B.a,B.a)},
i(a){var s=this
return"MediaQueryData("+B.c.b3(A.a(["size: "+s.a.i(0),"devicePixelRatio: "+B.d.N(s.b,1),"textScaleFactor: "+B.d.N(s.c,1),"platformBrightness: "+s.d.i(0),"padding: "+s.f.i(0),"viewPadding: "+s.r.i(0),"viewInsets: "+s.e.i(0),"alwaysUse24HourFormat: false","accessibleNavigation: "+s.y,"highContrast: "+s.Q,"disableAnimations: "+s.as,"invertColors: "+s.z,"boldText: "+s.at,"navigationMode: "+s.ax.b,"gestureSettings: "+s.ay.i(0),"displayFeatures: "+A.h(s.ch)],t.s),", ")+")"}}
A.fg.prototype={
c0(a){return!this.f.k(0,a.f)}}
A.I8.prototype={
E(){return"NavigationMode."+this.b}}
A.yH.prototype={
aj(){return new A.Ov(B.m)}}
A.Ov.prototype={
aC(){this.aU()
$.ai.ai$.push(this)},
rU(){this.aw(new A.adQ())},
IY(){this.aw(new A.adS())},
IX(){this.aw(new A.adR())},
M(a){var s
$.ai.toString
s=A.anO($.cq())
return new A.fg(s,this.a.c,null)},
m(){B.c.v($.ai.ai$,this)
this.aQ()}}
A.adQ.prototype={
$0(){},
$S:0}
A.adS.prototype={
$0(){},
$S:0}
A.adR.prototype={
$0(){},
$S:0}
A.Sh.prototype={}
A.vc.prototype={
M(a){var s,r=null
switch(A.lo().a){case 0:case 1:case 3:case 5:break
case 2:case 4:break}s=this.c
return A.auM(new A.tM(!0,new A.OF(A.dK(r,A.ve(new A.fP(B.mj,s==null?r:new A.t2(s,r,r),r),B.lM,r,r,r),!1,r,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),new A.a2e(this,a),r),r))}}
A.a2e.prototype={
$0(){A.L0(B.W_)},
$S:0}
A.qd.prototype={
ft(a){if(this.y1==null)return!1
return this.n9(a)},
JY(a){},
JZ(a,b){var s=this.y1
if(s!=null)s.$0()},
tu(a,b,c){}}
A.adW.prototype={
yg(a){a.sjy(this.a)}}
A.M_.prototype={
IC(){var s=t.S,r=A.cW(s)
return new A.qd(B.aX,18,B.br,A.y(s,t.o),r,null,null,A.y(s,t.V))},
Kd(a){a.y1=this.a}}
A.OF.prototype={
M(a){var s=this.d
return new A.kI(this.c,A.aW([B.a_f,new A.M_(s)],t.n,t.ob),B.aD,!1,new A.adW(s),null)}}
A.I9.prototype={
M(a){var s,r,q=this,p=a.a6(t.I)
p.toString
s=A.a([],t.E)
r=q.c
if(r!=null)s.push(A.a1m(r,B.h8))
r=q.d
if(r!=null)s.push(A.a1m(r,B.h9))
r=q.e
if(r!=null)s.push(A.a1m(r,B.ha))
return new A.tg(new A.afH(q.f,q.r,p.w),s,null)}}
A.r7.prototype={
E(){return"_ToolbarSlot."+this.b}}
A.afH.prototype={
u7(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.b.j(0,B.h8)!=null){s=a.a
r=a.b
q=e.dN(B.h8,new A.aQ(0,s,r,r)).a
switch(e.f.a){case 0:p=s-q
break
case 1:p=0
break
default:p=null}e.e7(B.h8,new A.t(p,0))}else q=0
if(e.b.j(0,B.ha)!=null){o=e.dN(B.ha,A.aj3(a))
switch(e.f.a){case 0:n=0
break
case 1:n=a.a-o.a
break
default:n=null}m=o.a
e.e7(B.ha,new A.t(n,(a.b-o.b)/2))}else m=0
if(e.b.j(0,B.h9)!=null){s=a.a
r=e.e
l=Math.max(s-q-m-r*2,0)
k=e.dN(B.h9,A.aj3(a).a1v(l))
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
default:f=null}e.e7(B.h9,new A.t(f,(a.b-k.b)/2))}},
n_(a){return a.d!==this.d||a.e!==this.e||a.f!==this.f}}
A.mV.prototype={
E(){return"RoutePopDisposition."+this.b}}
A.c0.prototype={
gu1(){return B.rH},
jq(){},
ot(){var s=A.akm()
s.aE(new A.a5a(this),t.H)
return s},
or(){var s=this.a
if(s==null)s=null
else{s.a.toString
s=!0}if(s===!0)A.akm().aE(new A.a59(this),t.H)},
yS(a){},
fA(){var s=0,r=A.a2(t.ij),q,p=this
var $async$fA=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:q=p.gKu()?B.U1:B.Bc
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$fA,r)},
gMh(){return!1},
kq(a){this.a2f(a)
return!0},
a2f(a){this.d.bR(0,null)},
lX(a){},
os(a){},
yN(a){},
oa(){},
rE(){},
m(){this.a=null},
gkE(){var s,r=this.a
if(r==null)return!1
r=r.e
r=new A.bu(r,A.aj(r).h("bu<1,dn?>"))
s=r.mv(r,new A.a5d(),new A.a5e())
if(s==null)return!1
return s.a===this},
gKu(){var s,r=this.a
if(r==null)return!1
r=r.e
r=new A.bu(r,A.aj(r).h("bu<1,dn?>"))
s=r.tm(r,new A.a5f(),new A.a5g())
if(s==null)return!1
return s.a===this},
gtz(){var s,r,q,p,o=this.a
if(o==null)return!1
for(o=o.e,s=o.length,r=0;r<s;++r){q=o[r]
if(q.a===this)return!1
p=q.d.a
if(p<=10&&p>=1)return!0}return!1},
ga4w(){var s=this.a
if(s==null)return!1
s=s.e
s=new A.bu(s,A.aj(s).h("bu<1,dn?>"))
s=s.tm(s,new A.a5b(this),new A.a5c())
s=s==null?null:s.gkF()
return s===!0}}
A.a5a.prototype={
$1(a){var s,r=this.a.a
if(r==null)s=null
else{r.a.toString
s=!0}if(s===!0){r=r.x.gdI()
if(r!=null)r.ul()}},
$S:20}
A.a59.prototype={
$1(a){var s=this.a.a
if(s!=null){s=s.x.gdI()
if(s!=null)s.ul()}},
$S:20}
A.a5d.prototype={
$1(a){return a!=null&&a.gkF()},
$S:29}
A.a5e.prototype={
$0(){return null},
$S:3}
A.a5f.prototype={
$1(a){return a!=null&&a.gkF()},
$S:29}
A.a5g.prototype={
$0(){return null},
$S:3}
A.a5b.prototype={
$1(a){return a!=null&&A.aps(this.a).$1(a)},
$S:29}
A.a5c.prototype={
$0(){return null},
$S:3}
A.hd.prototype={
i(a){var s=this.a
s=s==null?"none":'"'+s+'"'
return"RouteSettings("+s+", "+A.h(this.b)+")"}}
A.j6.prototype={
rW(a,b){},
rV(a,b){},
yR(a,b){},
rX(a,b){},
J_(a,b){},
ov(){}}
A.md.prototype={
c0(a){return a.f!=this.f}}
A.a58.prototype={}
A.Lo.prototype={}
A.DS.prototype={}
A.vq.prototype={
aj(){var s=null,r=A.a([],t.hi),q=$.by(),p=t.a4
return new A.fk(r,new A.NR(q),A.j2(s,p),A.j2(s,p),A.aju(!0,"Navigator",!0,!0,s,s,!1),new A.wf(0,q,t.rj),A.jr(!1),A.b3(t.S),s,A.y(t.wb,t.M),s,!0,s,s,s,B.m)},
a5m(a,b){return this.z.$2(a,b)}}
A.a2L.prototype={
$1(a){return a==null},
$S:335}
A.e_.prototype={
E(){return"_RouteLifecycle."+this.b}}
A.OQ.prototype={}
A.dn.prototype={
gcJ(){var s,r
if(this.c){s=t.kd.a(this.a.b)
s.gcJ()
r=A.h(s.gcJ())
return"p+"+r}r=this.b
if(r!=null)return"r+"+r.gLM()
return null},
a3w(a,b,c,d){var s,r,q,p=this,o=p.d,n=p.a
n.a=b
n.jq()
s=p.d
if(s===B.Cw||s===B.Cx){r=n.ot()
p.d=B.Cy
r.Mg(new A.aeU(p,b))}else{n.yS(c)
p.d=B.cS}if(a)n.os(null)
s=o===B.a0D||o===B.Cx
q=b.r
if(s)q.dh(0,new A.yU(n,d))
else q.dh(0,new A.qN(n,d))},
a3v(a,b){var s,r=this
r.d=B.a0z
s=r.a
if((s.d.a.a&30)!==0)return!0
if(!s.kq(r.w)){r.d=B.cS
return!1}r.w=null
return!0},
m(){var s,r,q,p,o,n,m={}
this.d=B.a0B
s=this.a
r=s.gu1()
q=new A.aeS()
p=new A.aH(r,q,A.aj(r).h("aH<1>"))
if(!p.ga4(p).q())s.m()
else{m.a=p.gp(p)
for(s=B.c.ga4(r),q=new A.qb(s,q);q.q();){r=s.gF(s)
o=A.b6("listener")
n=new A.aeT(m,this,r,o)
o.b=n
r.d.Z(0,n)}}},
ga7b(){var s=this.d.a
return s<=7&&s>=1},
gkF(){var s=this.d.a
return s<=10&&s>=1}}
A.aeU.prototype={
$0(){var s=this.a
if(s.d===B.Cy){s.d=B.cS
this.b.we()}},
$S:0}
A.aeS.prototype={
$1(a){return a.d.a},
$S:336}
A.aeT.prototype={
$0(){var s=this,r=s.a;--r.a
s.c.d.G(0,s.d.aD())
if(r.a===0)s.b.a.m()},
$S:0}
A.aeV.prototype={
$1(a){return a.a===this.a},
$S:46}
A.lb.prototype={}
A.qN.prototype={
kJ(a){a.rW(this.a,this.b)}}
A.qM.prototype={
kJ(a){a.rV(this.a,this.b)}}
A.yT.prototype={
kJ(a){a.yR(this.a,this.b)}}
A.yU.prototype={
kJ(a){a.rX(this.a,this.b)}}
A.fk.prototype={
aC(){var s,r,q,p,o=this
o.aU()
for(s=o.a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
$.hv().a.set(p,o)}o.Q=o.a.x
s=o.c.jN(t.hS)
if(s==null)s=null
else{s=s.f
s.toString}t.cn.a(s)
o.xM(s==null?null:s.f)
o.a.toString
B.fv.tF("selectSingleEntryHistory",t.H)},
iE(a,b){var s,r,q,p,o,n,m=this
m.mG(m.as,"id")
s=m.f
m.mG(s,"history")
for(;r=m.e,r.length!==0;)r.pop().m()
m.d=new A.bB(null,t.r9)
B.c.I(r,s.LN(null,m))
m.a.toString
q=0
for(;!1;++q){p=B.MY[q]
r=m.c
r.toString
r=p.yA(r)
o=$.aiM()
n=new A.dn(r,null,!0,B.m1,o,o,o)
m.e.push(n)
B.c.I(m.e,s.LN(n,m))}if(s.y==null){s=m.a
r=m.e
o=s.f
B.c.I(r,J.AV(s.a5m(m,o),new A.a2K(m),t.ee))}m.we()},
yU(a){var s,r=this
r.Pr(a)
s=r.f
if(r.bi$!=null)s.bb(0,r.e)
else s.a0(0)},
gcJ(){return this.a.y},
b4(){var s,r,q,p,o=this
o.Qa()
s=o.c.a6(t.hS)
o.xM(s==null?null:s.f)
for(r=o.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.P)(r),++p)r[p].a.rE()},
xM(a){var s,r,q=this
if(q.z!=a){if(a!=null)$.hv().a.set(a,q)
s=q.z
if(s==null)s=null
else{r=$.hv()
A.ov(s)
s=r.a.get(s)}if(s===q){s=$.hv()
r=q.z
r.toString
s.a.set(r,null)}q.z=a
q.Ht()}},
Ht(){var s=this,r=s.z,q=s.a
if(r!=null)s.Q=B.c.V(q.x,A.a([r],t.yx))
else s.Q=q.x},
aW(a){var s,r,q,p,o=this
o.Qb(a)
s=a.x
if(s!==o.a.x){for(r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
$.hv().a.set(p,null)}for(s=o.a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
$.hv().a.set(p,o)}o.Ht()}o.a.toString
for(s=o.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].a.rE()},
ds(){var s,r,q,p=this.Q
p===$&&A.b()
s=p.length
r=0
for(;r<p.length;p.length===s||(0,A.P)(p),++r){q=p[r]
$.hv().a.set(q,null)}this.nc()},
cb(){var s,r,q,p
this.Q8()
s=this.Q
s===$&&A.b()
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
$.hv().a.set(p,this)}},
m(){var s,r,q,p=this
p.xM(null)
p.x.m()
for(s=p.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].m()
p.Qc()},
gDx(){var s,r,q,p=A.a([],t.tD)
for(s=this.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)B.c.I(p,s[q].a.gu1())
return p},
wf(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null
a.ay=!0
s=a.e
r=s.length-1
q=s[r]
p=r>0?s[r-1]:a0
o=A.a([],t.hi)
for(s=a.w,n=a.r,m=a0,l=m,k=!1,j=!1;r>=0;){switch(q.d.a){case 1:i=a.iQ(r-1,A.alt())
h=i>=0?a.e[i]:a0
h=h==null?a0:h.a
g=q.a
g.a=a
g.jq()
q.d=B.a0C
n.dh(0,new A.qN(g,h))
continue
case 2:if(k||l==null){h=q.a
h.or()
q.d=B.cS
if(l==null)h.os(a0)
continue}break
case 3:case 4:case 6:h=p==null?a0:p.a
i=a.iQ(r-1,A.alt())
g=i>=0?a.e[i]:a0
g=g==null?a0:g.a
q.a3w(l==null,a,h,g)
if(q.d===B.cS)continue
break
case 5:if(!j&&m!=null){q.a.lX(m)
q.f=m}j=!0
break
case 7:if(!j&&m!=null){q.a.lX(m)
q.f=m}k=!0
j=!0
break
case 8:i=a.iQ(r,A.AK())
h=i>=0?a.e[i]:a0
if(!q.a3v(a,h==null?a0:h.a))continue
if(!j){if(m!=null){q.a.lX(m)
q.f=m}m=q.a}h=q.a
i=a.iQ(r,A.AK())
g=i>=0?a.e[i]:a0
s.dh(0,new A.qM(h,g==null?a0:g.a))
if(q.d===B.m2)continue
k=!0
break
case 11:break
case 9:h=q.a
h=h.d.a
if((h.a&30)!==0)A.K(A.a5("Future already completed"))
h.f9(a0)
q.w=null
q.d=B.a0y
continue
case 10:if(!j){if(m!=null)q.a.lX(m)
m=a0}i=a.iQ(r,A.AK())
h=i>=0?a.e[i]:a0
h=h==null?a0:h.a
q.d=B.a0A
if(q.x)s.dh(0,new A.yT(q.a,h))
continue
case 12:if(!k&&l!=null)break
q.d=B.m2
continue
case 13:o.push(B.c.e8(a.e,r))
q=l
break
case 14:case 0:break}--r
f=r>0?a.e[r-1]:a0
l=q
q=p
p=f}a.U2()
a.U4()
a.a.toString
s=a.e
s=new A.bu(s,A.aj(s).h("bu<1,dn?>"))
e=s.mv(s,new A.a2E(),new A.a2F())
d=e==null?a0:e.a.b.a
if(d!=null&&d!==a.at){A.aoQ(d,!1,a0)
a.at=d}for(s=o.length,c=0;c<o.length;o.length===s||(0,A.P)(o),++c){q=o[c]
for(n=q.a.gu1(),h=n.length,b=0;b<n.length;n.length===h||(0,A.P)(n),++b)J.aun(n[b])
q.m()}if(a1){s=a.d
s===$&&A.b()
s=s.gbr()
if(s!=null)s.a60(a.gDx())}if(a.bi$!=null)a.f.bb(0,a.e)
a.ay=!1},
we(){return this.wf(!0)},
U2(){var s,r=this,q=r.Q
q===$&&A.b()
if(q.length===0){r.w.a0(0)
r.r.a0(0)
return}for(q=r.r;!q.gO(q);){s=q.dQ(0)
B.c.Y(r.Q,s.gpj())}for(q=r.w;!q.gO(q);){s=q.mI()
B.c.Y(r.Q,s.gpj())}},
U4(){var s,r,q,p,o,n,m=this,l=null,k=m.e.length-1
for(;k>=0;){s=m.e[k]
r=s.d.a
if(!(r<=12&&r>=3)){--k
continue}q=m.Uw(k+1,A.arA())
r=q==null
p=r?l:q.a
o=s.r
if(p!=o){if((r?l:q.a)==null){p=s.f
p=p!=null&&p===o}else p=!1
if(!p){p=s.a
p.os(r?l:q.a)}s.r=r?l:q.a}--k
n=m.iQ(k,A.arA())
r=n>=0?m.e[n]:l
p=r==null
o=p?l:r.a
if(o!=s.e){o=s.a
o.yN(p?l:r.a)
s.e=p?l:r.a}}},
EP(a,b){a=this.iQ(a,b)
return a>=0?this.e[a]:null},
iQ(a,b){while(!0){if(!(a>=0&&!b.$1(this.e[a])))break;--a}return a},
Uw(a,b){var s
while(!0){s=this.e
if(!(a<s.length&&!b.$1(s[a])))break;++a}s=this.e
return a<s.length?s[a]:null},
r_(a,b,c,d){var s,r,q
if(b)this.a.toString
s=new A.hd(a,c)
r=d.h("c0<0?>?")
q=r.a(this.a.r.$1(s))
return q==null&&!b?r.a(this.a.w.$1(s)):q},
xq(a,b,c){return this.r_(a,!1,b,c)},
Dv(a){this.St()},
pe(a){var s=0,r=A.a2(t.y),q,p=this,o,n,m
var $async$pe=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)$async$outer:switch(s){case 0:m=p.e
m=new A.bu(m,A.aj(m).h("bu<1,dn?>"))
o=m.mv(m,new A.a2G(),new A.a2H())
if(o==null){q=!1
s=1
break}s=3
return A.a4(o.a.fA(),$async$pe)
case 3:n=c
if(p.c==null){q=!0
s=1
break}m=p.e
m=new A.bu(m,A.aj(m).h("bu<1,dn?>"))
if(o!==m.mv(m,new A.a2I(),new A.a2J())){q=!0
s=1
break}switch(n.a){case 2:q=!1
s=1
break $async$outer
case 0:p.a5G(a)
q=!0
s=1
break $async$outer
case 1:q=!0
s=1
break $async$outer}case 1:return A.a0(q,r)}})
return A.a1($async$pe,r)},
KO(){return this.pe(null,t.X)},
a58(a){return this.pe(a,t.X)},
Ld(a){var s=this,r=B.c.a4M(s.e,A.alt())
if(r.c){s.a.toString
if(null.$2(r.a,a)&&r.d===B.cS)r.d=B.m3}else{r.w=a
r.d=B.m3}if(r.d===B.m3)s.wf(!1)
s.Dv(r.a)},
hP(){return this.Ld(null,t.X)},
a5G(a){return this.Ld(a,t.X)},
JC(a){var s,r=this,q=B.c.K9(r.e,A.aps(a)),p=r.e[q]
if(p.c&&p.d.a<8){s=r.EP(q-1,A.AK())
s=s==null?null:s.a
r.w.dh(0,new A.qM(a,s))}p.d=B.m2
if(!r.ay)r.wf(!1)},
sHJ(a){this.ch=a
this.CW.sn(0,a>0)},
a2j(){var s,r,q,p,o,n,m=this
m.sHJ(m.ch+1)
if(m.ch===1){s=m.iQ(m.e.length-1,A.AK())
r=m.e[s].a
q=!r.gMh()&&s>0?m.EP(s-1,A.AK()).a:null
p=m.Q
p===$&&A.b()
o=p.length
n=0
for(;n<p.length;p.length===o||(0,A.P)(p),++n)p[n].J_(r,q)}},
ov(){var s,r,q,p=this
p.sHJ(p.ch-1)
if(p.ch===0){s=p.Q
s===$&&A.b()
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].ov()}},
VH(a){this.cx.C(0,a.gbU())},
VP(a){this.cx.v(0,a.gbU())},
St(){if($.bP.CW$===B.cH){var s=this.d
s===$&&A.b()
s=$.ai.K$.z.j(0,s)
this.aw(new A.a2D(s==null?null:s.ti(t.CE)))}s=this.cx
B.c.Y(A.aA(s,!0,A.n(s).c),$.ai.ga0C())},
M(a){var s,r=this,q=null,p=r.gVO(),o=A.and(a),n=r.bi$,m=r.d
m===$&&A.b()
r.a.toString
if(m.gbr()==null){s=r.gDx()
s=J.mo(s.slice(0),A.aj(s).c)}else s=B.rH
return new A.md(q,A.FZ(B.bR,new A.AX(!1,A.anc(A.F2(!0,q,A.aan(n,new A.p4(s,B.T,m)),q,q,q,r.x,!1,q,q,q,q,q,!0),o),q),p,r.gVG(),q,q,p),q)}}
A.a2K.prototype={
$1(a){var s,r,q=a.b.a
if(q!=null){s=this.a.as
r=s.y
if(r==null)r=s.$ti.h("bV.T").a(r)
s.Pq(0,r+1)
q=new A.OK(r,q,null,B.m4)}else q=null
return A.apr(a,B.m1,!1,q)},
$S:339}
A.a2E.prototype={
$1(a){return a!=null&&a.gkF()},
$S:29}
A.a2F.prototype={
$0(){return null},
$S:3}
A.a2G.prototype={
$1(a){return a!=null&&a.gkF()},
$S:29}
A.a2H.prototype={
$0(){return null},
$S:3}
A.a2I.prototype={
$1(a){return a!=null&&a.gkF()},
$S:29}
A.a2J.prototype={
$0(){return null},
$S:3}
A.a2D.prototype={
$0(){var s=this.a
if(s!=null)s.sHT(!0)},
$S:0}
A.qY.prototype={
E(){return"_RouteRestorationType."+this.b}}
A.Qc.prototype={
gKx(){return!0},
rI(){return A.a([this.a.a],t.f)}}
A.OK.prototype={
rI(){var s=this,r=s.Qs(),q=A.a([s.c,s.d],t.f),p=s.e
if(p!=null)q.push(p)
B.c.I(r,q)
return r},
yA(a){var s=a.xq(this.d,this.e,t.z)
s.toString
return s},
gLM(){return this.c}}
A.akv.prototype={
gKx(){return!1},
rI(){A.ayc(this.d)},
yA(a){var s=a.c
s.toString
return this.d.$2(s,this.e)},
gLM(){return this.c}}
A.NR.prototype={
bb(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.y==null
if(a)c.y=A.y(t.N,t.lC)
s=t.f
r=A.a([],s)
q=c.y
q.toString
p=J.aM(q,null)
if(p==null)p=B.dh
o=A.y(t.dR,t.lC)
q=c.y
q.toString
n=J.aut(J.AU(q))
for(q=a1.length,m=b,l=a,k=!0,j=0;j<a1.length;a1.length===q||(0,A.P)(a1),++j){i=a1[j]
if(i.d.a>7){h=i.a
h.c.sn(0,b)
continue}if(i.c){l=l||r.length!==J.bI(p)
h=r.length
if(h!==0){g=m==null?b:m.gcJ()
o.l(0,g,r)
n.v(0,g)}k=i.gcJ()!=null
h=i.a
f=k?i.gcJ():b
h.c.sn(0,f)
if(k){r=A.a([],s)
h=c.y
h.toString
p=J.aM(h,i.gcJ())
if(p==null)p=B.dh}else{r=B.dh
p=B.dh}m=i
continue}if(k){h=i.b
h=h==null?b:h.gKx()
k=h===!0}else k=!1
h=i.a
f=k?i.gcJ():b
h.c.sn(0,f)
if(k){h=i.b
f=h.b
h=f==null?h.b=h.rI():f
if(!l){f=J.aJ(p)
e=f.gp(p)
d=r.length
l=e<=d||!J.f(f.j(p,d),h)}else l=!0
B.c.C(r,h)}}l=l||r.length!==J.bI(p)
c.TP(r,m,o,n)
if(l||n.gbC(n)){c.y=o
c.aA()}},
TP(a,b,c,d){var s,r=a.length
if(r!==0){s=b==null?null:b.gcJ()
c.l(0,s,a)
d.v(0,s)}},
a0(a){if(this.y==null)return
this.y=null
this.aA()},
LN(a,b){var s,r,q,p,o,n=A.a([],t.hi)
if(this.y!=null)s=a!=null&&a.gcJ()==null
else s=!0
if(s)return n
s=this.y
s.toString
r=J.aM(s,a==null?null:a.gcJ())
if(r==null)return n
for(s=J.at(r);s.q();){q=A.aAP(s.gF(s))
p=q.yA(b)
o=$.aiM()
n.push(new A.dn(p,q,!1,B.m1,o,o,o))}return n},
rN(){return null},
mk(a){a.toString
return J.amg(t.G.a(a),new A.acZ(),t.dR,t.lC)},
Kc(a){this.y=a},
mO(){return this.y},
gm_(a){return this.y!=null}}
A.acZ.prototype={
$2(a,b){return new A.al(A.co(a),A.eP(t.j.a(b),!0,t.K),t.cj)},
$S:340}
A.aec.prototype={
$2(a,b){if(!a.a)a.G(0,b)},
$S:33}
A.yV.prototype={
cb(){this.dW()
this.cZ()
this.fg()},
m(){var s=this,r=s.au$
if(r!=null)r.G(0,s.geJ())
s.au$=null
s.aQ()}}
A.yW.prototype={
aW(a){this.bl(a)
this.ox()},
b4(){var s,r,q,p,o=this
o.cD()
s=o.bi$
r=o.gmK()
q=o.c
q.toString
q=A.pp(q)
o.fn$=q
p=o.lI(q,r)
if(r){o.iE(s,o.e_$)
o.e_$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.fm$.Y(0,new A.aec())
s=r.bi$
if(s!=null)s.m()
r.bi$=null
r.Q9()}}
A.Id.prototype={
i(a){var s=A.a([],t.s)
this.ci(s)
return"Notification("+B.c.b3(s,", ")+")"},
ci(a){}}
A.de.prototype={
bS(a){return new A.yX(this,B.a5,this.$ti.h("yX<1>"))}}
A.yX.prototype={
L1(a){var s,r=this.f
r.toString
s=this.$ti
s.h("de<1>").a(r)
if(s.c.b(a))return r.d.$1(a)
return!1},
my(a){}}
A.eO.prototype={}
A.Sm.prototype={}
A.fm.prototype={
smC(a){var s
if(this.b===a)return
this.b=a
s=this.e
if(s!=null)s.Ej()},
spc(a){if(this.c)return
this.c=!0
this.e.Ej()},
G(a,b){this.d.G(0,b)},
mH(a){var s,r=this.e
r.toString
this.e=null
if(r.c==null)return
B.c.v(r.d,this)
s=$.bP
if(s.CW$===B.Bd)s.ax$.push(new A.a31(r))
else r.Fv()},
h1(){var s=this.f.gbr()
if(s!=null)s.Fx()},
i(a){return"<optimized out>#"+A.bM(this)+"(opaque: "+this.b+"; maintainState: "+this.c+")"},
$iac:1,
Ik(a){return this.a.$1(a)}}
A.a31.prototype={
$1(a){this.a.Fv()},
$S:2}
A.qP.prototype={
aj(){return new A.yY(B.m)}}
A.yY.prototype={
aC(){this.aU()
this.a.c.d.sn(0,!0)},
m(){this.a.c.d.sn(0,!1)
this.a.toString
this.aQ()},
M(a){var s=this.a
return new A.q3(s.d,s.c.Ik(a),null)},
Fx(){this.aw(new A.aeg())}}
A.aeg.prototype={
$0(){},
$S:0}
A.p4.prototype={
aj(){return new A.p6(A.a([],t.tD),null,null,B.m)}}
A.p6.prototype={
aC(){this.aU()
this.a4e(0,this.a.c)},
wP(a,b){return this.d.length},
zD(a,b){b.e=this
this.aw(new A.a35(this,null,null,b))},
a4e(a,b){var s,r=b.length
if(r===0)return
for(s=0;s<r;++s)b[s].e=this
this.aw(new A.a34(this,null,null,b))},
a60(a){var s,r,q,p,o,n=this
if(t.rF.b(a))s=a
else s=J.mo(a.slice(0),A.aj(a).c)
if(s.length===0)return
r=n.d
if(A.cS(r,s))return
q=A.kt(r,t.u7)
for(r=s.length,p=0;p<r;++p){o=s[p]
if(o.e==null)o.e=n}n.aw(new A.a36(n,s,q,null,null))},
Fv(){if(this.c!=null)this.aw(new A.a33())},
Ej(){this.aw(new A.a32())},
M(a){var s,r,q,p,o,n=A.a([],t.E)
for(s=this.d,r=s.length-1,q=!0,p=0;r>=0;--r){o=s[r]
if(q){++p
n.push(new A.qP(o,!0,o.f))
q=!o.b||!1}else if(o.c)n.push(new A.qP(o,!1,o.f))}s=t.m8
return new A.Rk(n.length-p,this.a.d,A.aA(new A.cy(n,s),!1,s.h("bm.E")),null)}}
A.a35.prototype={
$0(){var s=this,r=s.a
B.c.mn(r.d,r.wP(s.b,s.c),s.d)},
$S:0}
A.a34.prototype={
$0(){var s=this,r=s.a
B.c.oZ(r.d,r.wP(s.b,s.c),s.d)},
$S:0}
A.a36.prototype={
$0(){var s,r,q=this,p=q.a,o=p.d
B.c.a0(o)
s=q.b
B.c.I(o,s)
r=q.c
r.a68(s)
B.c.oZ(o,p.wP(q.d,q.e),r)},
$S:0}
A.a33.prototype={
$0(){},
$S:0}
A.a32.prototype={
$0(){},
$S:0}
A.Rk.prototype={
bS(a){var s=A.cW(t.h)
return new A.Rl(s,this,B.a5)},
aG(a){var s=a.a6(t.I)
s.toString
s=new A.qX(s.w,this.e,this.f,A.aw(),0,null,null,A.aw())
s.aJ()
s.I(0,null)
return s},
aN(a,b){var s=this.e
if(b.aq!==s){b.aq=s
b.a8()}s=a.a6(t.I)
s.toString
b.sbH(s.w)
s=this.f
if(s!==b.ai){b.ai=s
b.ar()
b.b2()}}}
A.Rl.prototype={
ga9(){return t.z2.a(A.eQ.prototype.ga9.call(this))}}
A.qX.prototype={
ex(a){if(!(a.e instanceof A.dX))a.e=new A.dX(null,null,B.j)},
XR(){if(this.u!=null)return
this.u=B.aS.W(this.K)},
sbH(a){var s=this
if(s.K===a)return
s.K=a
s.u=null
s.a8()},
gqn(){var s,r,q,p,o=this
if(o.aq===A.av.prototype.grF.call(o))return null
s=A.av.prototype.ga2T.call(o,o)
for(r=o.aq,q=t.B;r>0;--r){p=s.e
p.toString
s=q.a(p).al$}return s},
eO(a){var s,r,q,p,o=this.gqn()
for(s=t.B,r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.jM(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.al$}return r},
gjU(){return!0},
cc(a){return new A.a6(A.H(1/0,a.a,a.b),A.H(1/0,a.c,a.d))},
bG(){var s,r,q,p,o,n,m,l,k=this
k.L=!1
if(k.dt$-k.aq===0)return
k.XR()
s=t.k.a(A.z.prototype.ga1.call(k))
r=A.Bq(new A.a6(A.H(1/0,s.a,s.b),A.H(1/0,s.c,s.d)))
q=k.gqn()
for(s=t.B,p=t.uu;q!=null;){o=q.e
o.toString
s.a(o)
if(!o.gzK()){q.cu(r,!0)
n=k.u
n.toString
m=k.k3
m.toString
l=q.k3
l.toString
o.a=n.lO(p.a(m.aa(0,l)))}else{n=k.k3
n.toString
m=k.u
m.toString
k.L=A.aom(q,o,n,m)||k.L}q=o.al$}},
cS(a,b){var s,r,q,p=this,o={},n=o.a=p.aq===A.av.prototype.grF.call(p)?null:p.d3$
for(s=t.B,r=0;r<p.dt$-p.aq;++r,n=q){n=n.e
n.toString
s.a(n)
if(a.nY(new A.aeG(o,b,n),n.a,b))return!0
q=n.bW$
o.a=q}return!1},
u5(a,b){var s,r,q,p,o,n=this.gqn()
for(s=t.B,r=b.a,q=b.b;n!=null;){p=n.e
p.toString
s.a(p)
o=p.a
a.f1(n,new A.t(o.a+r,o.b+q))
n=p.al$}},
aH(a,b){var s,r=this,q=r.L&&r.ai!==B.l,p=r.b_
if(q){q=r.cx
q===$&&A.b()
s=r.k3
p.saZ(0,a.kN(q,b,new A.C(0,0,0+s.a,0+s.b),r.gAF(),r.ai,p.a))}else{p.saZ(0,null)
r.u5(a,b)}},
m(){this.b_.saZ(0,null)
this.i5()},
h7(a){var s,r,q=this.gqn()
for(s=t.B;q!=null;){a.$1(q)
r=q.e
r.toString
q=s.a(r).al$}},
j3(a){var s
switch(this.ai.a){case 0:return null
case 1:case 2:case 3:if(this.L){s=this.k3
s=new A.C(0,0,0+s.a,0+s.b)}else s=null
return s}}}
A.aeG.prototype={
$2(a,b){return this.a.a.bX(a,b)},
$S:15}
A.P0.prototype={
cb(){this.dW()
this.cZ()
this.fg()},
m(){var s=this,r=s.au$
if(r!=null)r.G(0,s.geJ())
s.au$=null
s.aQ()}}
A.Ss.prototype={
an(a){var s,r,q
this.eB(a)
s=this.av$
for(r=t.B;s!=null;){s.an(a)
q=s.e
q.toString
s=r.a(q).al$}},
ag(a){var s,r,q
this.dU(0)
s=this.av$
for(r=t.B;s!=null;){s.ag(0)
q=s.e
q.toString
s=r.a(q).al$}}}
A.oB.prototype={
aj(){var s=t.y
return new A.yj(A.aW([!1,!0,!0,!0],s,s),null,null,B.m)},
jw(a){return A.AM().$1(a)}}
A.yj.prototype={
aC(){var s,r,q=this
q.aU()
s=q.a
r=s.f
q.d=A.api(A.bd(s.e),r,q)
r=q.a
s=r.f
s=A.api(A.bd(r.e),s,q)
q.e=s
r=q.d
r.toString
q.f=new A.yI(A.a([r,s],t.ro))},
aW(a){var s,r=this
r.bl(a)
if(!a.f.k(0,r.a.f)||A.bd(a.e)!==A.bd(r.a.e)){s=r.d
s.toString
s.saf(0,r.a.f)
s=r.d
s.toString
s.sIb(A.bd(r.a.e))
s=r.e
s.toString
s.saf(0,r.a.f)
s=r.e
s.toString
s.sIb(A.bd(r.a.e))}},
x7(a){var s,r,q,p,o,n,m,l,k,j=this
if(!j.a.jw(a))return!1
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
if(a instanceof A.hZ){q=a.e
if(q<0)n=s
else if(q>0)n=p
else n=null
m=n===s
s=j.c
s.d0(new A.vC(m,0))
s=j.w
s.l(0,m,!0)
s.j(0,m).toString
n.d=0
j.w.j(0,m).toString
s=a.f
if(s!==0){r=n.c
if(r!=null)r.ah(0)
n.c=null
l=A.H(Math.abs(s),100,1e4)
s=n.f
if(n.a===B.fZ)r=0.3
else{r=n.r
r===$&&A.b()
q=r.a
q=r.b.ae(0,q.gn(q))
r=q}s.a=r
r.toString
s.b=A.H(l*0.00006,r,0.5)
r=n.w
s=n.x
s===$&&A.b()
q=s.a
r.a=s.b.ae(0,q.gn(q))
r.b=Math.min(0.025+75e-8*l*l,1)
r=n.b
r===$&&A.b()
r.e=A.c7(0,B.d.b8(0.15+l*0.02),0)
r.kC(0,0)
n.as=0.5
n.a=B.a06}else{s=a.d
if(s!=null){p=a.b.ga9()
p.toString
t.x.a(p)
o=p.k3
o.toString
k=p.kZ(s.d)
switch(A.bd(r.e).a){case 0:n.toString
s=o.b
n.Lk(0,Math.abs(q),o.a,A.H(k.b,0,s),s)
break
case 1:n.toString
s=o.a
n.Lk(0,Math.abs(q),o.b,A.H(k.a,0,s),s)
break}}}}else if(a instanceof A.jf||a instanceof A.ib)if(a.gJ8()!=null){s=j.d
if(s.a===B.h_)s.ka(B.d3)
s=j.e
if(s.a===B.h_)s.ka(B.d3)}j.r=A.A(a)
return!1},
m(){this.d.m()
this.e.m()
this.R4()},
M(a){var s=this,r=null,q=s.a,p=s.d,o=s.e,n=q.e,m=s.f
return new A.de(s.gx6(),new A.i9(A.DB(new A.i9(q.w,r),new A.NQ(p,o,n,m),r,r,B.R),r),r,t.Bf)}}
A.nA.prototype={
E(){return"_GlowState."+this.b}}
A.yi.prototype={
saf(a,b){if(this.ax.k(0,b))return
this.ax=b
this.aA()},
sIb(a){if(this.ay===a)return
this.ay=a
this.aA()},
m(){var s=this,r=s.b
r===$&&A.b()
r.m()
r=s.y
r===$&&A.b()
r.w.bz$.v(0,r)
r.D2()
r=s.c
if(r!=null)r.ah(0)
s.dV()},
Lk(a,b,c,d,e){var s,r,q,p=this,o=p.c
if(o!=null)o.ah(0)
p.at=p.at+b/200
o=p.f
s=p.r
s===$&&A.b()
r=s.b
s=s.a
o.a=r.ae(0,s.gn(s))
o.b=Math.min(r.ae(0,s.gn(s))+b/c*0.8,0.5)
q=Math.min(c,e*0.20096189432249995)
s=p.w
r=p.x
r===$&&A.b()
o=r.b
r=r.a
s.a=o.ae(0,r.gn(r))
s.b=Math.max(1-1/(0.7*Math.sqrt(p.at*q)),A.iF(o.ae(0,r.gn(r))))
r=d/e
p.Q=r
if(r!==p.as){o=p.y
o===$&&A.b()
if(!o.ga4F())o.n5(0)}else{o=p.y
o===$&&A.b()
o.hc(0)
p.z=null}o=p.b
o===$&&A.b()
o.e=B.nt
if(p.a!==B.h_){o.kC(0,0)
p.a=B.h_}else{o=o.r
if(!(o!=null&&o.a!=null))p.aA()}p.c=A.cb(B.nt,new A.acH(p))},
vE(a){var s=this
if(a!==B.Y)return
switch(s.a.a){case 1:s.ka(B.d3)
break
case 3:s.a=B.fZ
s.at=0
break
case 2:case 0:break}},
ka(a){var s,r,q=this,p=q.a
if(p===B.Cs||p===B.fZ)return
p=q.c
if(p!=null)p.ah(0)
q.c=null
p=q.f
s=q.r
s===$&&A.b()
r=s.a
p.a=s.b.ae(0,r.gn(r))
p.b=0
p=q.w
r=q.x
r===$&&A.b()
s=r.a
p.a=r.b.ae(0,s.gn(s))
p.b=0
p=q.b
p===$&&A.b()
p.e=a
p.kC(0,0)
q.a=B.Cs},
ZX(a){var s,r=this,q=r.z
if(q!=null){q=q.a
s=r.Q
r.as=s-(s-r.as)*Math.pow(2,-(a.a-q)/$.asU().a)
r.aA()}if(A.AL(r.Q,r.as,0.001)){q=r.y
q===$&&A.b()
q.hc(0)
r.z=null}else r.z=a},
aH(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.r
i===$&&A.b()
s=i.a
if(J.f(i.b.ae(0,s.gn(s)),0))return
s=b.a
r=b.b
q=s>r?r/s:1
p=s*3/2
o=Math.min(r,s*0.20096189432249995)
r=j.x
r===$&&A.b()
n=r.a
n=r.b.ae(0,n.gn(n))
r=j.as
m=$.aq().bg()
l=j.ax
k=i.a
m.saf(0,A.b2(B.d.b8(255*i.b.ae(0,k.gn(k))),l.gn(l)>>>16&255,l.gn(l)>>>8&255,l.gn(l)&255))
a.cA(0)
a.aB(0,0,j.d+j.e)
a.dB(0,1,n*q)
a.kl(new A.C(0,0,0+s,0+o))
a.ij(new A.t(s/2*(0.5+r),o-p),p,m)
a.cv(0)},
i(a){return"_GlowController(color: "+this.ax.i(0)+", axis: "+A.aDF(this.ay)+")"}}
A.acH.prototype={
$0(){return this.a.ka(B.hD)},
$S:0}
A.NQ.prototype={
FQ(a,b,c,d,e){var s
if(c==null)return
switch(A.jQ(d,e)){case B.y:c.aH(a,b)
break
case B.x:a.cA(0)
a.aB(0,0,b.b)
a.dB(0,1,-1)
c.aH(a,b)
a.cv(0)
break
case B.ae:a.cA(0)
a.kR(0,1.5707963267948966)
a.dB(0,1,-1)
c.aH(a,new A.a6(b.b,b.a))
a.cv(0)
break
case B.au:a.cA(0)
s=b.a
a.aB(0,s,0)
a.kR(0,1.5707963267948966)
c.aH(a,new A.a6(b.b,s))
a.cv(0)
break}},
aH(a,b){var s=this,r=s.d
s.FQ(a,b,s.b,r,B.nH)
s.FQ(a,b,s.c,r,B.nG)},
i1(a){return a.b!=this.b||a.c!=this.c},
i(a){return"_GlowingOverscrollIndicatorPainter("+A.h(this.b)+", "+A.h(this.c)+")"}}
A.pP.prototype={
aj(){return new A.zL(null,null,B.m)},
jw(a){return A.AM().$1(a)}}
A.zL.prototype={
gke(){var s,r,q,p,o,n,m=this,l=null,k=m.d
if(k===$){s=t.a7
r=new A.aL(0,0,s)
q=new A.zK(r,B.m9,$.by())
p=A.e1(l,l,l,l,m)
p.bt()
o=p.aX$
o.b=!0
o.a.push(q.gvD())
q.a!==$&&A.eA()
q.a=p
n=A.el(B.n0,p,l)
n.a.Z(0,q.geq())
t.m.a(n)
q.b!==$&&A.eA()
q.b=new A.aZ(n,r,s.h("aZ<aF.T>"))
m.d!==$&&A.bi()
m.d=q
k=q}return k},
x7(a){var s,r,q,p,o,n,m=this
if(!m.a.jw(a))return!1
if(a instanceof A.hZ){m.f=a
J.X(m.e)
s=a.e
r=m.c
r.d0(new A.vC(s<0,0))
m.r=!0
r=a.f
if(r!==0){s=m.gke()
q=A.H(Math.abs(r),1,1e4)
r=s.c
p=s.b
p===$&&A.b()
o=p.a
r.a=p.b.ae(0,o.gn(o))
r.b=Math.min(0.016+1.01/q,1)
r=s.a
r===$&&A.b()
r.e=A.c7(0,B.d.b8(q*0.02),0)
r.kC(0,0)
s.d=B.a0F}else if(a.d!=null){r=a.a.d
r.toString
n=A.H(Math.abs(s)/r+m.gke().e,0,1)
r=m.gke()
r.e=n
s=r.c
p=r.b
p===$&&A.b()
o=p.a
s.a=p.b.ae(0,o.gn(o))
o=r.e
s.b=0.016*o+0.016*(1-Math.exp(-o*8.237217661997105))
o=r.a
o===$&&A.b()
o.e=B.hE
if(r.d!==B.ma){o.kC(0,0)
r.d=B.ma}else{s=o.r
if(!(s!=null&&s.a!=null))r.aA()}}}else if(a instanceof A.jf||a instanceof A.ib){s=m.gke()
if(s.d===B.ma)s.ka(B.hE)}m.e=a
return!1},
Ue(a){switch(this.a.c.a){case 0:return a>0?B.mc:B.mb
case 1:return a>0?B.e3:B.hb
case 2:return a>0?B.mb:B.mc
case 3:return a>0?B.hb:B.e3}},
m(){var s=this.gke(),r=s.a
r===$&&A.b()
r.m()
s.dV()
this.Re()},
M(a){var s={},r=a.a6(t.l).f
s.a=null
return new A.de(this.gx6(),A.lz(this.gke(),new A.afm(s,this,r.a),null),null,t.Bf)}}
A.afm.prototype={
$2(a,b){var s,r,q,p,o,n,m=this,l=m.b,k=l.gke().b
k===$&&A.b()
s=k.a
s=k.b.ae(0,s.gn(s))
switch(A.bd(l.a.c).a){case 0:r=1+s
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
p=l.Ue(k==null?0:k)
k=l.f
if(k==null)o=null
else{k=k.a.d
k.toString
o=k}if(o==null)o=m.a.a
k=A.v3(r,q,1)
l=l.a
n=A.aoY(p,l.f,k,!0)
return A.amH(n,s!==0&&o!==m.a.a?l.e:B.l)},
$S:341}
A.nI.prototype={
E(){return"_StretchState."+this.b}}
A.zK.prototype={
vE(a){var s=this
if(a!==B.Y)return
switch(s.d.a){case 1:s.ka(B.hE)
break
case 3:s.d=B.m9
s.e=0
break
case 2:case 0:break}},
ka(a){var s,r,q=this,p=q.d
if(p===B.Cz||p===B.m9)return
p=q.c
s=q.b
s===$&&A.b()
r=s.a
p.a=s.b.ae(0,r.gn(r))
p.b=0
p=q.a
p===$&&A.b()
p.e=a
p.kC(0,0)
q.d=B.Cz},
i(a){return"_StretchController()"}}
A.vC.prototype={
ci(a){this.Qd(a)
a.push("side: "+(this.a?"leading edge":"trailing edge"))}}
A.z_.prototype={
ci(a){var s,r
this.v9(a)
s=this.bA$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.Al.prototype={
cb(){this.dW()
this.cZ()
this.fg()},
m(){var s=this,r=s.au$
if(r!=null)r.G(0,s.geJ())
s.au$=null
s.aQ()}}
A.Ar.prototype={
cb(){this.dW()
this.cZ()
this.fg()},
m(){var s=this,r=s.au$
if(r!=null)r.G(0,s.geJ())
s.au$=null
s.aQ()}}
A.zG.prototype={
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return b instanceof A.zG&&A.cS(b.a,this.a)},
gt(a){return A.df(this.a)},
i(a){return"StorageEntryIdentifier("+B.c.b3(this.a,":")+")"}}
A.a37.prototype={
Dw(a){var s=A.a([],t.D5)
if(A.ao_(a,s))a.Br(new A.a38(s))
return s},
Mk(a,b){var s,r=this
if(r.a==null)r.a=A.y(t.K,t.z)
s=r.Dw(a)
if(s.length!==0)r.a.l(0,new A.zG(s),b)},
Lr(a){var s
if(this.a==null)return null
s=this.Dw(a)
return s.length!==0?this.a.j(0,new A.zG(s)):null}}
A.a38.prototype={
$1(a){return A.ao_(a,this.a)},
$S:50}
A.p8.prototype={
M(a){return this.c}}
A.Io.prototype={
I5(a,b,c){var s=t.sa.a(B.c.gbk(this.d))
if(s.K!=null){s.K=a
return A.bF(null,t.H)}return s.hu(s.kU(a),b,c)},
tI(a){var s=t.sa.a(B.c.gbk(this.d))
if(s.K!=null){s.K=a
return}s.dM(s.kU(a))},
IM(a,b,c){var s=null,r=new A.lc(this.z,this.as,B.fA,a,b,!0,s,A.jr(!1),$.by())
r.Da(b,s,!0,c,a)
r.Db(b,s,s,!0,c,a)
return r},
an(a){this.PF(a)
t.sa.a(a).spN(this.as)}}
A.Ip.prototype={}
A.lc.prototype={
z5(a,b,c,d,e,f){return this.PP(a,b,c,d,e,null)},
spN(a){var s,r=this
if(r.aq===a)return
s=r.gjB(r)
r.aq=a
if(s!=null)r.zn(r.kU(s))},
gqC(){var s=this.ax
s.toString
return Math.max(0,s*(this.aq-1)/2)},
pT(a,b){var s=Math.max(0,a-this.gqC())/(b*this.aq),r=B.d.B0(s)
if(Math.abs(s-r)<1e-10)return r
return s},
kU(a){var s=this.ax
s.toString
return a*s*this.aq+this.gqC()},
gjB(a){var s,r,q=this,p=q.at
if(p!=null)s=!(q.z!=null&&q.Q!=null)
else s=!0
if(s)p=null
else{s=q.K
if(s==null){p.toString
s=q.z
s.toString
r=q.Q
r.toString
r=A.H(p,s,r)
s=q.ax
s.toString
s=q.pT(r,s)
p=s}else p=s}return p},
BT(){var s,r,q=this,p=q.w,o=p.c
o.toString
o=A.a39(o)
if(o!=null){p=p.c
p.toString
s=q.K
if(s==null){s=q.at
s.toString
r=q.ax
r.toString
r=q.pT(s,r)
s=r}o.Mk(p,s)}},
LP(){var s,r,q
if(this.at==null){s=this.w
r=s.c
r.toString
r=A.a39(r)
if(r==null)q=null
else{s=s.c
s.toString
q=r.Lr(s)}if(q!=null)this.u=q}},
BS(){var s,r=this,q=r.K
if(q==null){q=r.at
q.toString
s=r.ax
s.toString
s=r.pT(q,s)
q=s}r.w.e.sn(0,q)
q=$.hf.ck$
q===$&&A.b()
q.JH()},
LO(a,b){if(b)this.u=a
else this.dM(this.kU(a))},
o4(a){var s,r,q,p,o=this,n=o.ax
n=n!=null?n:null
if(a===n)return!0
o.PL(a)
s=o.at
s=s!=null?s:null
if(s==null)r=o.u
else if(n===0){q=o.K
q.toString
r=q}else{n.toString
r=o.pT(s,n)}p=o.kU(r)
o.K=a===0?r:null
if(p!==s){o.at=p
return!1}return!0},
kf(a){var s
this.PQ(a)
if(!(a instanceof A.lc))return
s=a.K
if(s!=null)this.K=s},
o1(a,b){var s=a+this.gqC()
return this.PJ(s,Math.max(s,b-this.gqC()))},
fQ(){var s,r,q,p,o,n=this,m=null,l=n.z
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
return new A.Ip(o,l,s,r,q,p)}}
A.qu.prototype={
ki(a){return new A.qu(!1,this.hw(a))},
glN(){return this.b}}
A.p7.prototype={
ki(a){return new A.p7(this.hw(a))},
Ut(a){var s,r
if(a instanceof A.lc){s=a.gjB(a)
s.toString
return s}s=a.at
s.toString
r=a.ax
r.toString
return s/r},
Uu(a,b){var s
if(a instanceof A.lc)return a.kU(b)
s=a.ax
s.toString
return b*s},
lT(a,b){var s,r,q,p,o,n=this
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
if(s)return n.PH(a,b)
q=n.gpD()
p=n.Ut(a)
s=q.c
if(b<-s)p-=0.5
else if(b>s)p+=0.5
o=n.Uu(a,B.d.B0(p))
s=a.at
s.toString
if(o!==s){s=n.gl5()
r=a.at
r.toString
return new A.kN(o,A.zE(s,r-o,b),q)}return null}}
A.vD.prototype={
aj(){return new A.P3(B.m)}}
A.P3.prototype={
aC(){this.aU()
this.d=this.a.r.z},
Uk(a){var s,r
this.a.toString
switch(0){case 0:s=a.a6(t.I)
s.toString
r=A.aiv(s.w)
this.a.toString
return r}},
M(a){var s,r,q,p=this,o=p.Uk(a),n=p.a.w
n=new A.p7(B.zD.hw(n))
n=new A.qu(!1,null).hw(n)
s=p.a
r=s.Q
s=s.r
q=A.a61(a).a1x(!1)
return new A.de(new A.aeh(p),A.aox(o,s,r,new A.qu(!1,n),null,q,new A.aei(p,o)),null,t.Bf)}}
A.aeh.prototype={
$1(a){if(a.bA$===0)this.a.a.toString
return!1},
$S:25}
A.aei.prototype={
$2(a,b){var s=this.a.a
return new A.np(this.b,b,0,B.Eu,s.as,A.a([new A.Kw(s.r.as,!0,s.z,null)],t.E),null)},
$S:342}
A.i0.prototype={
gmC(){return!0},
gyj(){return!1},
Il(a){return!0}}
A.IN.prototype={
aG(a){var s=new A.JF(this.d,0,!1,!1,A.aw())
s.aJ()
return s},
aN(a,b){b.sa5w(this.d)
b.sa5V(0)
b.sa0H(!1)
b.sa0G(!1)}}
A.a25.prototype={}
A.a3v.prototype={}
A.DQ.prototype={
wW(a){return this.Xd(a)},
Xd(a){var s=0,r=A.a2(t.H),q,p=this,o,n,m
var $async$wW=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:n=A.eg(a.b)
m=p.a
if(!m.R(0,n)){s=1
break}m=m.j(0,n)
m.toString
o=a.a
if(o==="Menu.selectedCallback"){m.ga7S().$0()
m.ga5q()
o=$.ai.K$.f.f.e
o.toString
A.auA(o,m.ga5q(),t.q)}else if(o==="Menu.opened")m.ga7R(m).$0()
else if(o==="Menu.closed")m.ga7Q(m).$0()
case 1:return A.a0(q,r)}})
return A.a1($async$wW,r)}}
A.pc.prototype={
c0(a){return this.f!=a.f}}
A.kL.prototype={
aj(){return new A.Qd(null,A.y(t.wb,t.M),null,!0,null,B.m)}}
A.Qd.prototype={
gcJ(){return this.a.d},
iE(a,b){},
M(a){return A.aan(this.bi$,this.a.c)}}
A.xB.prototype={
c0(a){return a.f!=this.f}}
A.wj.prototype={
aj(){return new A.ze(B.m)}}
A.ze.prototype={
b4(){var s,r=this
r.cD()
s=r.c
s.toString
r.r=A.pp(s)
r.wT()
if(r.d==null){r.a.toString
r.d=!1}},
aW(a){this.bl(a)
this.wT()},
gFm(){this.a.toString
return!1},
wT(){var s,r=this
if(r.gFm()&&!r.w){r.w=!0;++$.kK.x2$
s=$.hf.ck$
s===$&&A.b()
s.ga6y().aE(new A.aeN(r),t.P)}},
YI(){var s,r=this
r.e=!1
r.f=null
s=$.hf.ck$
s===$&&A.b()
s.G(0,r.gxi())
r.wT()},
m(){if(this.e){var s=$.hf.ck$
s===$&&A.b()
s.G(0,this.gxi())}this.aQ()},
M(a){var s,r,q=this,p=q.d
p.toString
if(p&&q.gFm())return B.fO
p=q.r
if(p==null)p=q.f
s=q.a
r=s.d
return A.aan(p,new A.kL(s.c,r,null))}}
A.aeN.prototype={
$1(a){var s,r=this.a
r.w=!1
if(r.c!=null){s=$.hf.ck$
s===$&&A.b()
s.Z(0,r.gxi())
r.aw(new A.aeM(r,a))}$.kK.I2()},
$S:343}
A.aeM.prototype={
$0(){var s=this.a
s.f=this.b
s.e=!0
s.d=!1},
$S:0}
A.dB.prototype={
gm_(a){return!0},
m(){var s=this,r=s.c
if(r!=null){r=r.fm$.v(0,s)
r.toString
s.G(0,r)
s.c=s.b=null}s.dV()
s.a=!0}}
A.ia.prototype={
yU(a){},
mG(a,b){var s,r,q=this,p=q.bi$
p=p==null?null:J.e0(p.giT(),b)
s=p===!0
r=s?a.mk(J.aM(q.bi$.giT(),b)):a.rN()
if(a.b==null){a.b=b
a.c=q
p=new A.a56(q,a)
a.Z(0,p)
q.fm$.l(0,a,p)}a.Kc(r)
if(!s&&a.gm_(a)&&q.bi$!=null)q.xQ(a)},
ox(){var s,r,q=this
if(q.fn$!=null){s=q.bi$
s=s==null?null:s.e
s=s==q.gcJ()||q.gmK()}else s=!0
if(s)return
r=q.bi$
if(q.lI(q.fn$,!1))if(r!=null)r.m()},
gmK(){var s,r,q=this
if(q.e_$)return!0
if(q.gcJ()==null)return!1
s=q.c
s.toString
r=A.pp(s)
if(r!=q.fn$){if(r==null)s=null
else{s=r.c
s=s==null?null:s.d
s=s===!0}s=s===!0}else s=!1
return s},
lI(a,b){var s,r,q=this
if(q.gcJ()==null||a==null)return q.GF(null,b)
if(b||q.bi$==null){s=q.gcJ()
s.toString
return q.GF(a.a0P(s,q),b)}s=q.bi$
s.toString
r=q.gcJ()
r.toString
s.a6d(r)
r=q.bi$
r.toString
a.ib(r)
return!1},
GF(a,b){var s,r=this,q=r.bi$
if(a==q)return!1
r.bi$=a
if(!b){if(a!=null){s=r.fm$
new A.b8(s,A.n(s).h("b8<1>")).Y(0,r.ga_m())}r.yU(q)}return!0},
xQ(a){var s,r=a.gm_(a),q=this.bi$
if(r){if(q!=null){r=a.b
r.toString
s=a.mO()
if(!J.f(J.aM(q.giT(),r),s)||!J.e0(q.giT(),r)){J.cG(q.giT(),r,s)
q.ls()}}}else if(q!=null){r=a.b
r.toString
q.a67(0,r,t.K)}}}
A.a56.prototype={
$0(){var s=this.a
if(s.bi$==null)return
s.xQ(this.b)},
$S:0}
A.agj.prototype={
$2(a,b){if(!a.a)a.G(0,b)},
$S:33}
A.St.prototype={
aW(a){this.bl(a)
this.ox()},
b4(){var s,r,q,p,o=this
o.cD()
s=o.bi$
r=o.gmK()
q=o.c
q.toString
q=A.pp(q)
o.fn$=q
p=o.lI(q,r)
if(r){o.iE(s,o.e_$)
o.e_$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.fm$.Y(0,new A.agj())
s=r.bi$
if(s!=null)s.m()
r.bi$=null
r.aQ()}}
A.bV.prototype={
sn(a,b){var s=this.y
if(b==null?s!=null:b!==s){this.y=b
this.yW(s)}},
Kc(a){this.y=a}}
A.hq.prototype={
rN(){return this.cy},
yW(a){this.aA()},
mk(a){return A.n(this).h("hq.T").a(a)},
mO(){var s=this.y
return s==null?A.n(this).h("bV.T").a(s):s}}
A.zd.prototype={
mk(a){return this.Qq(a)},
mO(){var s=this.Qr()
s.toString
return s}}
A.wf.prototype={}
A.we.prototype={}
A.agk.prototype={
$2(a,b){if(!a.a)a.G(0,b)},
$S:33}
A.pr.prototype={}
A.JW.prototype={
aj(){return new A.qZ(new A.Qa($.by()),null,A.y(t.wb,t.M),null,!0,null,B.m,this.$ti.h("qZ<1>"))}}
A.wk.prototype={
E(){return"RouteInformationReportingType."+this.b}}
A.qZ.prototype={
gcJ(){return this.a.r},
aC(){var s,r=this
r.aU()
s=r.a.c
if(s!=null)s.Z(0,r.gqy())
r.a.f.a_S(r.gwt())
r.a.e.Z(0,r.gwE())},
iE(a,b){var s,r,q=this,p=q.f
q.mG(p,"route")
s=p.y
r=s==null
if((r?A.n(p).h("bV.T").a(s):s)!=null){p=r?A.n(p).h("bV.T").a(s):s
p.toString
q.qS(p,new A.af1(q))}else{p=q.a.c
if(p!=null)q.qS(p.a,new A.af2(q))}},
Z8(){var s=this
if(s.w||s.a.c==null)return
s.w=!0
$.bP.ax$.push(s.gYL())},
YM(a){var s,r,q,p,o=this
o.w=!1
s=o.f
r=s.y
q=r==null
if((q?A.n(s).h("bV.T").a(r):r)!=null){s=q?A.n(s).h("bV.T").a(r):r
s.toString
r=o.a.c
r.toString
q=o.e
q.toString
if(q!==B.U_)p=q===B.lt&&r.b.a==s.a
else p=!0
B.fv.tF("selectMultiEntryHistory",t.H)
q=s.a
q.toString
A.aoQ(q,p,s.b)
r.b=r.a=s}o.e=B.lt},
YV(){this.a.e.ga7A()
this.a.toString
return null},
qK(){var s=this
s.f.sn(0,s.YV())
if(s.e==null)s.e=B.lt
s.Z8()},
b4(){var s,r=this
r.r=!0
r.Ra()
s=r.a.c
if(s!=null&&r.r)r.qS(s.a,new A.af0(r))
r.r=!1
r.qK()},
aW(a){var s,r,q,p=this
p.Rb(a)
s=p.a
r=a.c
q=s.c==r
if(q)s.f===a.f
p.d=new A.B()
if(!q){s=r==null
if(!s)r.G(0,p.gqy())
q=p.a.c
if(q!=null)q.Z(0,p.gqy())
s=s?null:r.a
r=p.a.c
if(s!=(r==null?null:r.a))p.F6()}s=a.f
if(p.a.f!==s){r=p.gwt()
s.a69(r)
p.a.f.a_S(r)}p.a.toString
s=p.gwE()
a.e.G(0,s)
p.a.e.Z(0,s)
p.qK()},
m(){var s=this,r=s.a.c
if(r!=null)r.G(0,s.gqy())
s.a.f.a69(s.gwt())
s.a.e.G(0,s.gwE())
s.d=null
s.Rc()},
qS(a,b){var s,r,q=this
q.r=!1
q.d=new A.B()
s=q.a.d
s.toString
r=q.c
r.toString
s.a7V(a,r).aE(q.Yu(q.d,b),t.H)},
Yu(a,b){return new A.aeZ(this,a,b)},
F6(){var s=this
s.r=!0
s.qS(s.a.c.a,new A.aeW(s))},
UN(){var s=this
s.d=new A.B()
return s.a.e.a7W().aE(s.VU(s.d),t.y)},
VU(a){return new A.aeX(this,a)},
Gl(){this.aw(new A.af_())
this.qK()
return new A.bp(null,t.E8)},
VV(){this.aw(new A.aeY())
this.qK()},
M(a){var s=this.bi$,r=this.a,q=r.c,p=r.f,o=r.d
r=r.e
return A.aan(s,new A.Qi(q,p,o,r,this,new A.hB(r.gIg(),null),null))}}
A.af1.prototype={
$0(){return this.a.a.e.ga7p()},
$S(){return this.a.$ti.h("ab<~>(1)()")}}
A.af2.prototype={
$0(){return this.a.a.e.ga7o()},
$S(){return this.a.$ti.h("ab<~>(1)()")}}
A.af0.prototype={
$0(){return this.a.a.e.gNi()},
$S(){return this.a.$ti.h("ab<~>(1)()")}}
A.aeZ.prototype={
$1(a){var s=0,r=A.a2(t.H),q,p=this,o,n
var $async$$1=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:o=p.a
n=p.b
if(o.d!=n){s=1
break}s=3
return A.a4(p.c.$0().$1(a),$async$$1)
case 3:if(o.d==n)o.Gl()
case 1:return A.a0(q,r)}})
return A.a1($async$$1,r)},
$S(){return this.a.$ti.h("ab<~>(1)")}}
A.aeW.prototype={
$0(){return this.a.a.e.gNi()},
$S(){return this.a.$ti.h("ab<~>(1)()")}}
A.aeX.prototype={
$1(a){var s=this.a
if(this.b!=s.d)return new A.bp(!0,t.a9)
s.Gl()
return new A.bp(a,t.a9)},
$S:345}
A.af_.prototype={
$0(){},
$S:0}
A.aeY.prototype={
$0(){},
$S:0}
A.Qi.prototype={
c0(a){if(this.f==a.f)this.r===a.r
return!0}}
A.Qa.prototype={
rN(){return null},
yW(a){this.aA()},
mk(a){var s
if(a==null)return null
t.DI.a(a)
s=J.bH(a)
return new A.pr(A.co(s.gJ(a)),s.gS(a))},
mO(){var s,r=this,q=r.y,p=q==null
if((p?A.n(r).h("bV.T").a(q):q)==null)q=null
else{s=(p?A.n(r).h("bV.T").a(q):q).a
q=[s,(p?A.n(r).h("bV.T").a(q):q).b]}return q}}
A.ra.prototype={
aW(a){this.bl(a)
this.ox()},
b4(){var s,r,q,p,o=this
o.cD()
s=o.bi$
r=o.gmK()
q=o.c
q.toString
q=A.pp(q)
o.fn$=q
p=o.lI(q,r)
if(r){o.iE(s,o.e_$)
o.e_$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.fm$.Y(0,new A.agk())
s=r.bi$
if(s!=null)s.m()
r.bi$=null
r.aQ()}}
A.p5.prototype={
gu1(){return this.e},
jq(){var s,r=this,q=A.ajV(r.gSe(),!1)
r.k4=q
r.gpc()
s=A.ajV(r.gSg(),!0)
r.p1=s
B.c.I(r.e,A.a([q,s],t.tD))
r.PC()},
kq(a){var s,r=this
r.Px(a)
s=r.at.Q
s===$&&A.b()
if(s===B.K&&!r.Q)r.a.JC(r)
return!0},
m(){B.c.a0(this.e)
this.PB()}}
A.dY.prototype={
gbL(a){return this.as},
gBX(){return this.ax},
Wf(a){var s,r=this
switch(a.a){case 3:s=r.e
if(s.length!==0){s=B.c.gJ(s)
r.gmC()
s.smC(!0)}s=r.z
if(s!=null){s.a.$0()
s.a=null}r.z=null
break
case 1:case 2:s=r.e
if(s.length!==0)B.c.gJ(s).smC(!1)
if(r.z==null)r.z=$.bP.a6q(B.Fr)
break
case 0:if(!r.ga4w()){r.a.JC(r)
r.Q=!0
s=r.z
if(s!=null){s.a.$0()
s.a=null}r.z=null}break}},
jq(){var s=this,r=s.gM7(s),q=s.gM7(s),p=s.glU(),o=s.a
o.toString
o=s.at=A.e1(p,r,q,null,o)
o.bt()
p=o.aX$
p.b=!0
p.a.push(s.gF7())
s.as=o
s.OX()
p=s.as
if(p.gb1(p)===B.Y&&s.e.length!==0){p=B.c.gJ(s.e)
s.gmC()
p.smC(!0)}},
ot(){this.Pz()
return this.at.cR(0)},
or(){this.Pu()
var s=this.at
s.sn(0,s.b)},
yS(a){var s,r
if(a instanceof A.dY){s=this.at
s.toString
r=a.at.x
r===$&&A.b()
s.sn(0,r)}this.PA(a)},
kq(a){this.ch=a
this.at.h4(0)
this.OV(a)
return!0},
lX(a){this.HC(a)
this.Py(a)},
os(a){this.HC(a)
this.Pv(a)},
HC(a){var s,r,q,p,o,n,m,l=this,k={},j=l.CW
l.CW=null
if(a instanceof A.dY&&l.Il(a)&&!0){s=l.ax.c
if(s!=null){r=s instanceof A.nk?s.a:s
r.toString
q=a.as
q.toString
p=r.gn(r)
o=q.x
o===$&&A.b()
if(!J.f(p,o)){p=q.Q
p===$&&A.b()
p=p===B.Y||p===B.K}else p=!0
o=a.y.a
if(p)l.lF(q,o)
else{k.a=null
p=new A.aai(l,q,a)
l.CW=new A.aag(k,q,p)
q.bt()
n=q.aX$
n.b=!0
n.a.push(p)
m=A.akr(r,q,new A.aah(k,l,a))
k.a=m
l.lF(m,o)}}else l.lF(a.as,a.y.a)}else l.Zr(B.ce)
if(j!=null)j.$0()},
lF(a,b){this.ax.saL(0,a)
if(b!=null)b.aE(new A.aaf(this,a),t.P)},
Zr(a){return this.lF(a,null)},
m(){var s=this,r=s.as
if(r!=null)r.bZ(s.gF7())
r=s.z
if(r!=null){r.a.$0()
r.a=null}s.z=null
r=s.at
if(r!=null)r.m()
s.y.bR(0,s.ch)
s.OW()},
glU(){return"TransitionRoute"},
i(a){return"TransitionRoute(animation: "+A.h(this.at)+")"}}
A.aai.prototype={
$1(a){var s,r
switch(a.a){case 3:case 0:s=this.a
s.lF(this.b,this.c.y.a)
r=s.CW
if(r!=null){r.$0()
s.CW=null}break
case 1:case 2:break}},
$S:4}
A.aag.prototype={
$0(){this.b.bZ(this.c)
var s=this.a.a
if(s!=null)s.m()},
$S:0}
A.aah.prototype={
$0(){var s,r=this.b
r.lF(this.a.a.a,this.c.y.a)
s=r.CW
if(s!=null){s.$0()
r.CW=null}},
$S:0}
A.aaf.prototype={
$1(a){var s=this.a.ax,r=this.b
if(s.c==r){s.saL(0,B.ce)
if(r instanceof A.nk)r.m()}},
$S:7}
A.G_.prototype={
gMh(){var s=this.kx$
return s!=null&&s.length!==0}}
A.N7.prototype={
iv(a,b){A.a2g(this.e,t.z).gyj()
return!1},
d7(a){return A.ajS(this.e).KO()}}
A.yK.prototype={
c0(a){var s=this
return s.f!==a.f||s.r!==a.r||s.w!==a.w||s.x!==a.x}}
A.qL.prototype={
aj(){return new A.nE(A.ajv(!0,B.a_g.i(0)+" Focus Scope",!1),A.ak7(),B.m,this.$ti.h("nE<1>"))}}
A.nE.prototype={
aC(){var s,r,q=this
q.aU()
s=A.a([],t.ro)
r=q.a.c.fy
if(r!=null)s.push(r)
r=q.a.c.go
if(r!=null)s.push(r)
q.e=new A.yI(s)
if(q.a.c.gkE()){q.a.c.a.a.toString
s=!0}else s=!1
if(s){s=q.a.c.a.x.gdI()
if(s!=null)s.mX(q.f)}},
aW(a){var s,r=this
r.bl(a)
if(r.a.c.gkE()){r.a.c.a.a.toString
s=!0}else s=!1
if(s){s=r.a.c.a.x.gdI()
if(s!=null)s.mX(r.f)}},
b4(){this.cD()
this.d=null},
U7(){this.aw(new A.adX(this))},
m(){this.f.m()
this.aQ()},
gGL(){var s=this.a.c.fy
if((s==null?null:s.gb1(s))!==B.ak){s=this.a.c.a
s=s==null?null:s.CW.a
s=s===!0}else s=!0
return s},
M(a){var s,r,q=this,p=null,o=q.a.c,n=o.gkE(),m=q.a.c
if(!m.gtz()){m=m.kx$
m=m!=null&&m.length!==0}else m=!0
s=q.a.c
s=s.gtz()||s.zb$>0
r=q.a.c
return A.lz(o.c,new A.ae0(q),new A.yK(n,m,s,o,new A.vx(r.fx,new A.p8(new A.hB(new A.ae1(q),p),r.k3,p),p),p))}}
A.adX.prototype={
$0(){this.a.d=null},
$S:0}
A.ae0.prototype={
$2(a,b){var s=this.a.a.c.c.a
b.toString
return new A.kL(b,s,null)},
$S:346}
A.ae1.prototype={
$1(a){var s,r=null,q=A.aW([B.Cc,new A.N7(a,new A.bk(A.a([],t.B8),t.dc))],t.n,t.nT),p=this.a,o=p.e
o===$&&A.b()
s=p.d
if(s==null)s=p.d=new A.i9(new A.hB(new A.adZ(p),r),p.a.c.k2)
return A.TB(q,new A.pc(p.r,B.ca,B.UX,A.anb(!1,new A.i9(A.lz(o,new A.ae_(p),s),r),r,r,p.f),r))},
$S:347}
A.ae_.prototype={
$2(a,b){var s,r,q=this.a,p=q.a.c,o=p.fy
o.toString
s=p.go
s.toString
r=p.a
r=r==null?null:r.CW
if(r==null)r=A.jr(!1)
return p.Ij(a,o,s,A.lz(r,new A.adY(q),b))},
$S:27}
A.adY.prototype={
$2(a,b){var s=this.a,r=s.gGL()
s.f.sco(!r)
return new A.hP(r,null,b,null)},
$S:348}
A.adZ.prototype={
$1(a){var s,r=this.a.a.c,q=r.fy
q.toString
s=r.go
s.toString
return r.a0u(a,q,s)},
$S:14}
A.kw.prototype={
aw(a){var s,r=this.k1
if(r.gbr()!=null){r=r.gbr()
if(r.a.c.gkE())if(!r.gGL()){r.a.c.a.a.toString
s=!0}else s=!1
else s=!1
if(s){s=r.a.c.a.x.gdI()
if(s!=null)s.mX(r.f)}r.aw(a)}else a.$0()},
Ij(a,b,c,d){return d},
jq(){var s=this
s.Q1()
s.fy=A.Ja(A.dY.prototype.gbL.call(s,s))
s.go=A.Ja(A.dY.prototype.gBX.call(s))},
ot(){var s,r=this,q=r.k1
if(q.gbr()!=null){r.a.a.toString
s=!0}else s=!1
if(s){s=r.a.x.gdI()
if(s!=null)s.mX(q.gbr().f)}return r.Q0()},
or(){var s,r=this,q=r.k1
if(q.gbr()!=null){r.a.a.toString
s=!0}else s=!1
if(s){s=r.a.x.gdI()
if(s!=null)s.mX(q.gbr().f)}r.PZ()},
stV(a){var s,r=this
if(r.fx===a)return
r.aw(new A.a2h(r,a))
s=r.fy
s.toString
s.saL(0,r.fx?B.cX:A.dY.prototype.gbL.call(r,r))
s=r.go
s.toString
s.saL(0,r.fx?B.ce:A.dY.prototype.gBX.call(r))
r.oa()},
fA(){var s=0,r=A.a2(t.ij),q,p=this,o,n,m,l
var $async$fA=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:p.k1.gbr()
o=A.aA(p.id,!0,t.CQ),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}l=J
s=6
return A.a4(o[m].$0(),$async$fA)
case 6:if(!l.f(b,!0)){q=B.U0
s=1
break}case 4:++m
s=3
break
case 5:q=p.Q7()
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$fA,r)},
yN(a){this.Pw(a)
this.oa()},
oa(){var s,r=this
r.Pt()
r.aw(new A.a2f())
s=r.k4
s===$&&A.b()
s.h1()
s=r.p1
s===$&&A.b()
r.gpc()
s.spc(!0)},
rE(){this.Ps()
var s=this.k4
s===$&&A.b()
s.h1()
s=this.k1
if(s.gbr()!=null)s.gbr().U7()},
Sf(a){var s,r,q=this,p=null
q.ga0l()
q.gyj()
s=q.ga0m()
r=q.fy
if(r.gb1(r)!==B.ak){r=q.fy
r=r.gb1(r)===B.K}else r=!0
q.gyj()
return new A.hP(r,p,new A.vc(p,!1,p,!0,s,p),p)},
Sh(a){var s=this,r=null,q=s.ok
return q==null?s.ok=A.dK(r,new A.qL(s,s.k1,A.n(s).h("qL<1>")),!1,r,!1,r,r,r,r,r,r,r,r,r,r,r,B.Tz,r,r,r,r):q},
i(a){return"ModalRoute("+this.b.i(0)+", animation: "+A.h(this.as)+")"}}
A.a2h.prototype={
$0(){this.a.fx=this.b},
$S:0}
A.a2f.prototype={
$0(){},
$S:0}
A.qK.prototype={
fA(){var s=0,r=A.a2(t.ij),q,p=this,o
var $async$fA=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:o=p.kx$
if(o!=null&&o.length!==0){q=B.Bc
s=1
break}q=p.PD()
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$fA,r)},
kq(a){var s,r,q=this,p=q.kx$
if(p!=null&&p.length!==0){s=p.pop()
s.b=null
s.a7u()
r=s.c&&--q.zb$===0
if(q.kx$.length===0||r)q.oa()
return!1}q.Q_(a)
return!0}}
A.K4.prototype={
M(a){var s,r,q,p=t.l,o=a.a6(p).f.f,n=Math.max(o.a,0),m=this.d,l=m?o.b:0
l=Math.max(l,0)
s=Math.max(o.c,0)
r=this.f
q=r?o.d:0
return new A.i_(new A.bq(n,l,s,Math.max(q,0)),new A.fg(a.a6(p).f.LA(r,!0,!0,m),this.x,null),null)}}
A.K8.prototype={
LG(){},
J4(a,b){if(b!=null)b.d0(new A.wy(null,a,b,0))},
J5(a,b,c){b.d0(A.ak8(b,null,null,a,c))},
t0(a,b,c){b.d0(new A.hZ(null,c,0,a,b,0))},
J3(a,b){b.d0(new A.jf(null,a,b,0))},
o2(){},
m(){},
i(a){return"<optimized out>#"+A.bM(this)}}
A.kh.prototype={
o2(){this.a.fC(0)},
gi0(){return!1},
gh_(){return!1},
geb(){return 0}}
A.a00.prototype={
gi0(){return!1},
gh_(){return!1},
geb(){return 0},
m(){this.b.$0()
this.qc()}}
A.a62.prototype={
RY(a,b){var s,r,q=this
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
else return Math.min(r/3,s)*J.ei(a)}else return 0}}},
bb(a,b){var s,r,q,p,o=this
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
p=o.RY(s,q)
if(p===0)return
s=o.a
if(A.ahA(s.w.a.c))p=-p
s.Bn(p>0?B.lv:B.lw)
r=s.at
r.toString
s.vi(r-s.r.yf(s,p))},
m(){this.x=null
this.b.$0()},
i(a){return"<optimized out>#"+A.bM(this)}}
A.Yh.prototype={
J4(a,b){var s=t.hb.a(this.b.x)
if(b!=null)b.d0(new A.wy(s,a,b,0))},
J5(a,b,c){b.d0(A.ak8(b,null,t.mF.a(this.b.x),a,c))},
t0(a,b,c){b.d0(new A.hZ(t.mF.a(this.b.x),c,0,a,b,0))},
J3(a,b){var s=this.b.x
b.d0(new A.jf(s instanceof A.fW?s:null,a,b,0))},
gi0(){var s=this.b
return(s==null?null:s.w)!==B.dJ},
gh_(){return!0},
geb(){return 0},
m(){this.b=null
this.qc()},
i(a){return"<optimized out>#"+A.bM(this)+"("+A.h(this.b)+")"}}
A.Bf.prototype={
LG(){var s=this.a,r=this.b
r===$&&A.b()
s.fC(r.geb())},
o2(){var s=this.a,r=this.b
r===$&&A.b()
s.fC(r.geb())},
xE(){var s=this.b
s===$&&A.b()
s=s.x
s===$&&A.b()
if(!(Math.abs(this.a.vi(s))<1e-10)){s=this.a
s.fj(new A.kh(s))}},
xt(){this.a.fC(0)},
t0(a,b,c){var s=this.b
s===$&&A.b()
b.d0(new A.hZ(null,c,s.geb(),a,b,0))},
gh_(){return!0},
geb(){var s=this.b
s===$&&A.b()
return s.geb()},
m(){var s=this.b
s===$&&A.b()
s.m()
this.qc()},
i(a){var s=A.bM(this),r=this.b
r===$&&A.b()
return"<optimized out>#"+s+"("+r.i(0)+")"},
gi0(){return this.c}}
A.Eu.prototype={
xE(){var s=this.a,r=this.c
r===$&&A.b()
r=r.x
r===$&&A.b()
if(s.vi(r)!==0){s=this.a
s.fj(new A.kh(s))}},
xt(){var s=this.a,r=this.c
r===$&&A.b()
s.fC(r.geb())},
t0(a,b,c){var s=this.c
s===$&&A.b()
b.d0(new A.hZ(null,c,s.geb(),a,b,0))},
gi0(){return!0},
gh_(){return!0},
geb(){var s=this.c
s===$&&A.b()
return s.geb()},
m(){var s=this.b
s===$&&A.b()
s.eN(0)
s=this.c
s===$&&A.b()
s.m()
this.qc()},
i(a){var s=A.bM(this),r=this.c
r===$&&A.b()
return"<optimized out>#"+s+"("+r.i(0)+")"}}
A.ws.prototype={
py(a,b,c,d){var s,r=this
if(b.a==null){s=$.eS.fV$
s===$&&A.b()
s=s.R(0,c)}else s=!0
if(s){r.b.py(a,b,c,d)
return}s=r.a
if(s.gao(s)==null)return
s=s.gao(s)
s.toString
if(A.azb(s)){$.bP.q_(new A.a5Y(r,a,b,c,d))
return}r.b.py(a,b,c,d)},
p8(a,b,c){return this.b.p8(0,b,c)},
p9(a,b){return this.b.p9(a,b)},
tU(a){return this.b.tU(a)}}
A.a5Y.prototype={
$1(a){var s=this
A.dP(new A.a5X(s.a,s.b,s.c,s.d,s.e))},
$S:2}
A.a5X.prototype={
$0(){var s=this
return s.a.py(s.b,s.c,s.d,s.e)},
$S:0}
A.rm.prototype={
E(){return"AndroidOverscrollIndicator."+this.b}}
A.K9.prototype={
a1G(a,b,c,d,e,f){return new A.agb(this,f,c!==!1,d,e,b,a)},
a1x(a){return this.a1G(null,null,null,null,null,a)},
jP(a){return A.lo()},
gz0(){return B.Bx},
rB(a,b,c){var s=null
switch(this.jP(a)){case B.bk:case B.b9:case B.bl:return A.ayP(b,c.b,B.cg,s,s,A.AM(),B.u,s,s,s,s,B.d3,s)
case B.ay:case B.bj:case B.az:return b}},
rz(a,b,c){var s
switch(this.jP(a)){case B.az:case B.bk:case B.b9:case B.bl:s=1
break
case B.ay:s=2
break
case B.bj:s=3
break
default:s=null
break}if(s)c$0:for(;!0;)switch(s){case 1:return b
case 2:switch(1){case 1:break}if(2)c$1:for(;!0;)switch(2){case 1:return new A.pP(c.a,B.T,b,null)
case 2:s=3
continue c$0}break c$0
case 3:return new A.oB(c.a,B.k,b,null)}},
uu(a){switch(this.jP(a)){case B.az:return new A.a5Z()
case B.b9:return new A.a6_()
case B.ay:case B.bj:case B.bk:case B.bl:return new A.a60()}},
kV(a){switch(this.jP(a)){case B.az:return B.D0
case B.b9:return B.D1
case B.ay:case B.bj:case B.bk:case B.bl:return B.EA}},
i(a){return"ScrollBehavior"}}
A.a5Z.prototype={
$1(a){return A.awU(a.gcf(a))},
$S:349}
A.a6_.prototype={
$1(a){var s=a.gcf(a),r=t.pa
return new A.p_(A.aR(20,null,!1,r),s,A.aR(20,null,!1,r))},
$S:350}
A.a60.prototype={
$1(a){return new A.hk(a.gcf(a),A.aR(20,null,!1,t.pa))},
$S:123}
A.agb.prototype={
gz0(){var s=this.f
return s==null?B.Bx:s},
rz(a,b,c){var s=this.a.rz(a,b,c)
return s},
rB(a,b,c){if(this.b)return this.a.rB(a,b,c)
return b},
kV(a){var s=this.a.kV(a)
return s},
uu(a){return this.a.uu(a)},
i(a){return"_WrappedScrollBehavior"}}
A.wt.prototype={
c0(a){var s
if(A.A(this.f)===A.A(a.f))s=!1
else s=!0
return s}}
A.pv.prototype={
hu(a,b,c){return this.a0f(a,b,c)},
a0f(a,b,c){var s=0,r=A.a2(t.H),q=this,p,o,n
var $async$hu=A.Y(function(d,e){if(d===1)return A.a_(e,r)
while(true)switch(s){case 0:n=A.a([],t.iJ)
for(p=q.d,o=0;o<p.length;++o)n.push(p[o].hu(a,b,c))
s=2
return A.a4(A.u5(n,t.H),$async$hu)
case 2:return A.a0(null,r)}})
return A.a1($async$hu,r)},
an(a){this.d.push(a)
a.Z(0,this.geq())},
op(a,b){b.G(0,this.geq())
B.c.v(this.d,b)},
m(){var s,r,q,p
for(s=this.d,r=s.length,q=this.geq(),p=0;p<s.length;s.length===r||(0,A.P)(s),++p)s[p].G(0,q)
this.dV()},
IM(a,b,c){return A.aza(b,null,0,!0,c,a)},
i(a){var s=A.a([],t.s),r=this.d,q=r.length
if(q===0)s.push("no clients")
else if(q===1){r=B.c.gbk(r).at
r.toString
s.push("one client, offset "+B.d.N(r,1))}else s.push(""+q+" clients")
return"<optimized out>#"+A.bM(this)+"("+B.c.b3(s,", ")+")"}}
A.he.prototype={
fQ(){var s=this,r=null,q=s.gzx()?s.gf_():r,p=s.gzx()?s.geZ():r,o=s.gK0()?s.gcg():r,n=s.gK2()?s.gpM():r,m=s.gfN()
return new A.tW(q,p,o,n,m)},
gAE(){var s=this
return s.gcg()<s.gf_()||s.gcg()>s.geZ()},
gIa(){var s=this
return s.gcg()===s.gf_()||s.gcg()===s.geZ()},
gkw(){var s=this
return s.gpM()-A.H(s.gf_()-s.gcg(),0,s.gpM())-A.H(s.gcg()-s.geZ(),0,s.gpM())}}
A.tW.prototype={
gf_(){var s=this.a
s.toString
return s},
geZ(){var s=this.b
s.toString
return s},
gzx(){return this.a!=null&&this.b!=null},
gcg(){var s=this.c
s.toString
return s},
gK0(){return this.c!=null},
gpM(){var s=this.d
s.toString
return s},
gK2(){return this.d!=null},
i(a){var s=this
return"FixedScrollMetrics("+B.d.N(Math.max(s.gcg()-s.gf_(),0),1)+"..["+B.d.N(s.gkw(),1)+"].."+B.d.N(Math.max(s.geZ()-s.gcg(),0),1)+")"},
gfN(){return this.e}}
A.Nt.prototype={}
A.ea.prototype={}
A.LE.prototype={
L1(a){if(t.bx.b(a))++a.bA$
return!1}}
A.dW.prototype={
ci(a){this.QJ(a)
a.push(this.a.i(0))}}
A.wy.prototype={
ci(a){var s
this.nb(a)
s=this.d
if(s!=null)a.push(s.i(0))}}
A.ib.prototype={
ci(a){var s
this.nb(a)
a.push("scrollDelta: "+A.h(this.e))
s=this.d
if(s!=null)a.push(s.i(0))},
gJ8(){return this.d}}
A.hZ.prototype={
ci(a){var s,r=this
r.nb(a)
a.push("overscroll: "+B.d.N(r.e,1))
a.push("velocity: "+B.d.N(r.f,1))
s=r.d
if(s!=null)a.push(s.i(0))}}
A.jf.prototype={
ci(a){var s
this.nb(a)
s=this.d
if(s!=null)a.push(s.i(0))},
gJ8(){return this.d}}
A.Ly.prototype={
ci(a){this.nb(a)
a.push("direction: "+this.d.i(0))}}
A.zn.prototype={
ci(a){var s,r
this.v9(a)
s=this.bA$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.zm.prototype={
c0(a){return this.f!==a.f}}
A.l9.prototype={
a4S(a,b){return this.d.$1(b)}}
A.ww.prototype={
aj(){return new A.wx(new A.uE(t.uk),B.m)}}
A.wx.prototype={
G(a,b){var s,r,q,p=this.d
p.toString
p=A.aAC(p)
s=A.n(p).c
for(;p.q();){r=p.c
if(r==null)r=s.a(r)
if(J.f(r.d,b)){p=r.a
p.toString
A.n(r).h("ms.E").a(r);++p.a
s=r.b
s.c=r.c
r.c.b=s
q=--p.b
r.a=r.b=r.c=null
if(q===0)p.c=null
else if(r===p.c)p.c=s
return}}},
FK(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.d
if(i.b===0)return
p=A.aA(i,!0,t.cS)
for(i=p.length,o=0;o<i;++o){s=p[o]
try{if(s.a!=null)J.aug(s,a)}catch(n){r=A.ae(n)
q=A.au(n)
m=j instanceof A.bR?A.cR(j):null
l=A.bo("while dispatching notifications for "+A.aD(m==null?A.aT(j):m).i(0))
k=$.fL()
if(k!=null)k.$1(new A.bJ(r,q,"widget library",l,new A.a63(j),!1))}}},
M(a){var s=this
return new A.de(new A.a64(s),new A.de(new A.a65(s),new A.zm(s,s.a.c,null),null,t.Bf),null,t.iY)},
m(){this.d=null
this.aQ()}}
A.a63.prototype={
$0(){var s=null,r=this.a
return A.a([A.hF("The "+A.A(r).i(0)+" sending notification was",r,!0,B.aJ,s,!1,s,s,B.ap,s,!1,!0,!0,B.aW,s,t.Ec)],t.F)},
$S:17}
A.a64.prototype={
$1(a){var s=new A.Mu(null,null,a.a,a.b,0)
s.bA$=a.bA$
this.a.FK(s)
return!1},
$S:66}
A.a65.prototype={
$1(a){this.a.FK(a)
return!1},
$S:25}
A.Mu.prototype={}
A.wu.prototype={
E(){return"ScrollDecelerationRate."+this.b}}
A.mY.prototype={
hw(a){var s=this.a
s=s==null?null:s.ki(a)
return s==null?a:s},
ki(a){return new A.mY(this.hw(a))},
yf(a,b){var s=this.a
if(s==null)return b
return s.yf(a,b)},
jT(a){var s,r=this.a
if(r==null){r=a.at
r.toString
if(r===0){r=a.z
r.toString
s=a.Q
s.toString
s=r!==s
r=s}else r=!0
return r}return r.jT(a)},
Lu(a,b,c){var s=this.a
if(s==null){$.ai.toString
s=$.cq().gkM()
return Math.abs(a)>Math.max(Math.abs(s.a),Math.abs(s.b))}return s.Lu(a,b,c)},
o0(a,b){var s=this.a
if(s==null)return 0
return s.o0(a,b)},
rq(a,b,c,d){var s=this.a
if(s==null){s=b.c
s.toString
return s}return s.rq(a,b,c,d)},
lT(a,b){var s=this.a
if(s==null)return null
return s.lT(a,b)},
gl5(){var s=this.a
s=s==null?null:s.gl5()
return s==null?$.ask():s},
gpD(){var s=this.a
s=s==null?null:s.gpD()
return s==null?$.asl():s},
gA2(){var s=this.a
s=s==null?null:s.gA2()
return s==null?18:s},
gtR(){var s=this.a
s=s==null?null:s.gtR()
return s==null?50:s},
gpd(){var s=this.a
s=s==null?null:s.gpd()
return s==null?8000:s},
yo(a){var s=this.a
if(s==null)return 0
return s.yo(a)},
gz1(){var s=this.a
return s==null?null:s.gz1()},
glN(){return!0},
i(a){var s=this.a
if(s==null)return"ScrollPhysics"
return"ScrollPhysics -> "+s.i(0)}}
A.Je.prototype={
ki(a){return new A.Je(this.hw(a))},
rq(a,b,c,d){var s,r,q,p,o,n,m,l
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
return p+(o-q)}}l=this.PG(a,b,c,d)
if(r){q=b.b
q.toString
l=A.H(l,p,q)}return l}}
A.rK.prototype={
ki(a){return new A.rK(this.b,this.hw(a))},
JP(a){switch(this.b.a){case 1:return 0.07*Math.pow(1-a,2)
case 0:return 0.52*Math.pow(1-a,2)}},
yf(a,b){var s,r,q,p,o,n,m
if(!a.gAE())return b
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
m=this.JP((o-Math.abs(b))/s)}else{s.toString
m=this.JP(o/s)}return J.ei(b)*A.auQ(o,Math.abs(b),m)},
o0(a,b){return 0},
lT(a,b){var s,r,q,p,o,n,m,l=this.gpD()
if(Math.abs(b)>=l.c||a.gAE()){switch(this.b.a){case 1:s=1400
break
case 0:s=0
break
default:s=null}r=this.gl5()
q=a.at
q.toString
p=a.z
p.toString
o=a.Q
o.toString
n=new A.Ui(p,o,r,l)
if(q<p){n.f=new A.kN(p,A.zE(r,q-p,b),B.bJ)
n.r=-1/0}else if(q>o){n.f=new A.kN(o,A.zE(r,q-o,b),B.bJ)
n.r=-1/0}else{q=n.e=A.awG(0.135,q,b,s)
m=q.gtg()
if(b>0&&m>o){p=q.LX(o)
n.r=p
n.f=new A.kN(o,A.zE(r,o-o,Math.min(q.dH(0,p),5000)),B.bJ)}else if(b<0&&m<p){o=q.LX(p)
n.r=o
n.f=new A.kN(p,A.zE(r,p-p,Math.min(q.dH(0,o),5000)),B.bJ)}else n.r=1/0}return n}return null},
gtR(){return 100},
yo(a){return J.ei(a)*Math.min(0.000816*Math.pow(Math.abs(a),1.967),4e4)},
gz1(){return 3.5},
gpd(){switch(this.b.a){case 1:return 64e3
case 0:return A.mY.prototype.gpd.call(this)}},
gl5(){switch(this.b.a){case 1:return A.aoK(0.3,1.3,75)
case 0:return A.mY.prototype.gl5.call(this)}}}
A.rW.prototype={
ki(a){return new A.rW(this.hw(a))},
o0(a,b){var s,r,q=a.at
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
lT(a,b){var s,r,q,p,o=null,n=this.gpD()
if(a.gAE()){s=a.at
s.toString
r=a.Q
r.toString
if(s>r)q=r
else q=o
r=a.z
r.toString
if(s<r)q=r
s=this.gl5()
r=a.at
r.toString
q.toString
return new A.kN(q,A.zE(s,r-q,Math.min(0,b)),n)}s=Math.abs(b)
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
r=new A.Vk(r,b,n)
s=Math.exp(Math.log(0.35*s/778.3530259679999)/($.as_()-1))
r.e=s
r.f=Math.abs(b*s/3.065)
return r}}
A.px.prototype={
E(){return"ScrollPositionAlignmentPolicy."+this.b}}
A.jg.prototype={
Da(a,b,c,d,e){if(d!=null)this.kf(d)
this.LP()},
gf_(){var s=this.z
s.toString
return s},
geZ(){var s=this.Q
s.toString
return s},
gzx(){return this.z!=null&&this.Q!=null},
gcg(){var s=this.at
s.toString
return s},
gK0(){return this.at!=null},
gpM(){var s=this.ax
s.toString
return s},
gK2(){return this.ax!=null},
kf(a){var s=this,r=a.z
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
if(A.A(a)!==A.A(s))s.fr.LG()
s.w.C2(s.fr.gi0())
s.dy.sn(0,s.fr.gh_())},
Nj(a){var s,r,q,p=this,o=p.at
o.toString
if(a!==o){s=p.r.o0(p,a)
o=p.at
o.toString
r=a-s
p.at=r
if(r!==o){p.xR()
p.Ct()
r=p.at
r.toString
p.yV(r-o)}if(s!==0){o=p.fr
o.toString
r=p.fQ()
q=$.ai.K$.z.j(0,p.w.z)
q.toString
o.t0(r,q,s)
return s}}return 0},
zn(a){var s=this,r=s.at
r.toString
s.as=a-r
s.at=a
s.xR()
s.Ct()
$.bP.ax$.push(new A.a66(s))},
BT(){var s,r=this.w,q=r.c
q.toString
q=A.a39(q)
if(q!=null){r=r.c
r.toString
s=this.at
s.toString
q.Mk(r,s)}},
LP(){var s,r,q
if(this.at==null){s=this.w
r=s.c
r.toString
r=A.a39(r)
if(r==null)q=null
else{s=s.c
s.toString
q=r.Lr(s)}if(q!=null)this.at=q}},
LO(a,b){if(b)this.at=a
else this.dM(a)},
BS(){var s=this.at
s.toString
this.w.e.sn(0,s)
s=$.hf.ck$
s===$&&A.b()
s.JH()},
o4(a){if(this.ax!==a){this.ax=a
this.ch=!0}return!0},
o1(a,b){var s,r,q,p=this
if(!A.AL(p.z,a,0.001)||!A.AL(p.Q,b,0.001)||p.ch||p.db!==A.bd(p.gfN())){p.z=a
p.Q=b
p.db=A.bd(p.gfN())
s=p.ay?p.fQ():null
p.ch=!1
p.CW=!0
if(p.ay){r=p.cx
r.toString
s.toString
r=!p.a1H(r,s)}else r=!1
if(r)return!1
p.ay=!0}if(p.CW){p.PK()
p.w.Nc(p.r.jT(p))
p.CW=!1}s=p.fQ()
if(p.cx!=null){r=Math.max(s.gcg()-s.gf_(),0)
q=p.cx
if(r===Math.max(q.gcg()-q.gf_(),0))if(s.gkw()===p.cx.gkw()){r=Math.max(s.geZ()-s.gcg(),0)
q=p.cx
r=r===Math.max(q.geZ()-q.gcg(),0)&&s.e===p.cx.e}else r=!1
else r=!1
r=!r}else r=!0
if(r){if(!p.cy){A.dP(p.ga2