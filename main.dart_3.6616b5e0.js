k(0,s.d)},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s,r,q=this
if(q.gp_())return"Border.all("+q.a.i(0)+")"
s=A.a([],t.s)
r=q.a
if(!r.k(0,B.D))s.push("top: "+r.i(0))
r=q.b
if(!r.k(0,B.D))s.push("right: "+r.i(0))
r=q.c
if(!r.k(0,B.D))s.push("bottom: "+r.i(0))
r=q.d
if(!r.k(0,B.D))s.push("left: "+r.i(0))
return"Border("+B.c.b4(s,", ")+")"}}
A.dR.prototype={
glX(){var s,r=this
if(r.gp_()){s=r.a.geA()
return new A.aY(s,s,s,s)}return new A.aY(r.b.geA(),r.a.geA(),r.c.geA(),r.d.geA())},
gp_(){var s,r,q,p=this,o=p.a,n=o.a,m=p.b
if(!m.a.k(0,n)||!p.c.a.k(0,n)||!p.d.a.k(0,n))return!1
s=o.b
if(m.b!==s||p.c.b!==s||p.d.b!==s)return!1
r=o.c
if(m.c!==r||p.c.c!==r||p.d.c!==r)return!1
q=o.d
if(!(m.d===q&&p.d.d===q&&p.c.d===q))return!1
return!0},
fj(a,b,c){var s,r,q,p=this,o=null
if(b instanceof A.dR){s=p.a
r=b.a
if(A.iM(s,r)&&A.iM(p.b,b.b)&&A.iM(p.c,b.c)&&A.iM(p.d,b.d))return new A.dR(A.fM(s,r),A.fM(p.b,b.b),A.fM(p.c,b.c),A.fM(p.d,b.d))
return o}if(b instanceof A.dr){s=b.a
r=p.a
if(!A.iM(s,r)||!A.iM(b.c,p.d))return o
q=p.b
if(!q.k(0,B.D)||!p.c.k(0,B.D)){if(!b.d.k(0,B.D)||!b.b.k(0,B.D))return o
return new A.dR(A.fM(s,r),q,p.c,A.fM(b.c,p.d))}return new A.dr(A.fM(s,r),b.b,A.fM(b.c,p.d),b.d)}return o},
C(a,b){return this.fj(a,b,!1)},
aI(a,b){var s=this
return new A.dR(s.a.aI(0,b),s.b.aI(0,b),s.c.aI(0,b),s.d.aI(0,b))},
ca(a,b){if(a instanceof A.dR)return A.aiZ(a,this,b)
return this.CX(a,b)},
cb(a,b){if(a instanceof A.dR)return A.aiZ(this,a,b)
return this.CY(a,b)},
u2(a,b,c,d,e){var s,r,q,p=this
if(p.gp_()){s=p.a
switch(s.c.a){case 0:return
case 1:switch(d.a){case 1:A.ams(a,b,s)
break
case 0:if(c!=null&&!c.k(0,B.aA)){A.amt(a,b,s,c)
return}A.amu(a,b,s)
break}return}}switch(e.a){case 0:r=p.c
q=p.b
break
case 1:r=p.b
q=p.c
break
default:r=null
q=null}A.arz(a,b,p.d,r,q,p.a)},
hN(a,b,c){return this.u2(a,b,null,B.a7,c)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.A(s))return!1
return b instanceof A.dR&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c.k(0,s.c)&&b.d.k(0,s.d)},
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
return"BorderDirectional("+B.c.b4(r,", ")+")"}}
A.cB.prototype={
gdA(a){var s=this.c
return s==null?null:s.glX()},
uy(a,b){var s,r,q
switch(this.w.a){case 1:s=A.pk(a.gaK(),a.gfE()/2)
r=$.aq().cp()
r.y4(s)
return r
case 0:r=this.d
if(r!=null){q=$.aq().cp()
q.eK(r.V(b).dD(a))
return q}r=$.aq().cp()
r.nU(a)
return r}},
aI(a,b){var s=this,r=null,q=A.v(r,s.a,b),p=A.amv(r,s.c,b),o=A.hy(r,s.d,b),n=A.amy(r,s.e,b),m=s.f
m=m==null?r:m.aI(0,b)
return new A.cB(q,s.b,p,o,n,m,s.w)},
gzG(){return this.e!=null},
ca(a,b){if(a==null)return this.aI(0,b)
if(a instanceof A.cB)return A.amw(a,this,b)
return this.Cr(a,b)},
cb(a,b){if(a==null)return this.aI(0,1-b)
if(a instanceof A.cB)return A.amw(this,a,b)
return this.Cs(a,b)},
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
K2(a,b,c){var s
switch(this.w.a){case 0:s=this.d
if(s!=null)return s.V(c).dD(new A.C(0,0,0+a.a,0+a.b)).B(0,b)
return!0
case 1:return b.aa(0,a.j1(B.j)).gd5()<=Math.min(a.a,a.b)/2}},
rL(a){return new A.abe(this,a)}}
A.abe.prototype={
FK(a,b,c,d){var s=this.b
switch(s.w.a){case 1:a.ik(b.gaK(),b.gfE()/2,c)
break
case 0:s=s.d
if(s==null||s.k(0,B.aA))a.cl(b,c)
else a.d6(s.V(d).dD(b),c)
break}},
XW(a,b,c){var s,r,q,p,o,n,m=this.b.e
if(m==null)return
for(s=m.length,r=0;r<m.length;m.length===s||(0,A.P)(m),++r){q=m[r]
p=$.aq().bk()
p.sak(0,q.a)
o=q.e
n=q.c
p.sa4V(new A.uR(o,n>0?n*0.57735+0.5:0))
o=b.di(q.b)
n=q.d
this.FK(a,new A.C(o.a-n,o.b-n,o.c+n,o.d+n),p,c)}},
XS(a,b,c){var s,r,q=this,p=q.b,o=p.b
if(o==null)return
if(q.e==null)q.e=new A.DN(o,q.a)
switch(p.w.a){case 1:s=A.pk(b.gaK(),b.gfE()/2)
r=$.aq().cp()
r.y4(s)
break
case 0:p=p.d
if(p!=null){r=$.aq().cp()
r.eK(p.V(c.d).dD(b))}else r=null
break
default:r=null}q.e.u1(a,b,r,c)},
m(){var s,r=this.e
if(r!=null){s=r.c
if(s!=null)s.G(0,new A.dv(r.gEZ(),null,null))
s=r.d
if(s!=null)s.a.m()
r.d=null}this.NM()},
pn(a,b,c){var s,r,q,p,o=this,n=c.e,m=b.a,l=b.b,k=new A.C(m,l,m+n.a,l+n.b),j=c.d
o.XW(a,k,j)
n=o.b
m=n.a
l=m==null
if(!l||n.f!=null){if(o.c!=null)s=n.f!=null&&!J.f(o.d,k)
else s=!0
if(s){r=$.aq().bk()
if(!l)r.sak(0,m)
m=n.f
if(m!=null){l=m.d.V(j).Mf(k)
s=m.e.V(j).Mf(k)
q=m.a
p=m.wN()
m=m.f
r.sC5(A.ajw(l,s,q,p,m,null))
o.d=k}o.c=r}m=o.c
m.toString
o.FK(a,k,m,j)}o.XS(a,k,c)
m=n.c
if(m!=null){l=n.d
l=l==null?null:l.V(j)
m.u2(a,k,l,n.w,j)}},
i(a){return"BoxPainter for "+this.b.i(0)}}
A.lJ.prototype={
E(){return"BoxFit."+this.b}}
A.EV.prototype={}
A.iN.prototype={
aI(a,b){var s=this
return new A.iN(s.d*b,s.e,s.a,s.b.Z(0,b),s.c*b)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.A(s))return!1
return b instanceof A.iN&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c===s.c&&b.d===s.d&&b.e===s.e},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this
return"BoxShadow("+s.a.i(0)+", "+s.b.i(0)+", "+A.hs(s.c)+", "+A.hs(s.d)+", "+s.e.i(0)+")"}}
A.ds.prototype={
aI(a,b){return new A.ds(this.b,this.a.aI(0,b))},
ca(a,b){var s,r
if(a instanceof A.ds){s=A.az(a.a,this.a,b)
r=A.T(a.b,this.b,b)
r.toString
return new A.ds(A.H(r,0,1),s)}return this.l9(a,b)},
cb(a,b){var s,r
if(a instanceof A.ds){s=A.az(this.a,a.a,b)
r=A.T(this.b,a.b,b)
r.toString
return new A.ds(A.H(r,0,1),s)}return this.la(a,b)},
fB(a,b){var s=$.aq().cp()
s.y4(this.Do(a))
return s},
hN(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=r.b*r.d
if(this.b===0)a.ik(b.gaK(),(b.gfE()+s)/2,r.hV())
else a.t5(this.Do(b).da(s/2),r.hV())
break}},
Do(a){var s,r,q,p,o,n,m,l=this.b
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
A.Vi.prototype={
vG(a,b,c,d){var s=this
s.gbG(s).cB(0)
switch(b.a){case 0:break
case 1:a.$1(!1)
break
case 2:a.$1(!0)
break
case 3:a.$1(!0)
s.gbG(s).BN(c,$.aq().bk())
break}d.$0()
if(b===B.ht)s.gbG(s).cw(0)
s.gbG(s).cw(0)},
a0O(a,b,c,d){this.vG(new A.Vj(this,a),b,c,d)},
a0P(a,b,c,d){this.vG(new A.Vk(this,a),b,c,d)},
a0R(a,b,c,d){this.vG(new A.Vl(this,a),b,c,d)}}
A.Vj.prototype={
$1(a){var s=this.a
return s.gbG(s).Ik(0,this.b,a)},
$S:25}
A.Vk.prototype={
$1(a){var s=this.a
return s.gbG(s).Il(this.b,a)},
$S:25}
A.Vl.prototype={
$1(a){var s=this.a
return s.gbG(s).a0Q(this.b,a)},
$S:25}
A.k4.prototype={
j(a,b){return this.b.j(0,b)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.A(s))return!1
return s.NN(0,b)&&A.n(s).h("k4<k4.T>").b(b)&&A.aih(b.b,s.b)},
gt(a){return A.S(A.A(this),this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"ColorSwatch(primary value: "+this.NO(0)+")"}}
A.fP.prototype={
c0(){return"Decoration"},
gdA(a){return B.aY},
gzG(){return!1},
ca(a,b){return null},
cb(a,b){return null},
K2(a,b,c){return!0},
uy(a,b){throw A.c(A.O("This Decoration subclass does not expect to be used for clipping."))}}
A.Bs.prototype={
m(){}}
A.MW.prototype={}
A.mk.prototype={
E(){return"ImageRepeat."+this.b}}
A.DM.prototype={
k(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(J.X(b)!==A.A(this))return!1
if(b instanceof A.DM)if(b.a.k(0,this.a))if(B.Y.k(0,B.Y))s=!0
else s=!1
else s=!1
else s=!1
return s},
gt(a){return A.S(this.a,null,B.O,B.Y,null,B.bs,!1,1,1,B.d4,!1,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=A.a([this.a.i(0)],t.s),r=!0
if(r)s.push(B.O.i(0))
s.push(B.Y.i(0))
s.push("scale 1")
s.push("opacity 1")
s.push(B.d4.i(0))
return"DecorationImage("+B.c.b4(s,", ")+")"}}
A.DN.prototype={
u1(a,b,c,d){var s,r,q,p,o=this,n=null,m=o.a.a.V(d),l=m.a
if(l==null)l=m
s=o.c
r=s==null
if(r)q=n
else{q=s.a
if(q==null)q=s}if(l!==q){p=new A.dv(o.gEZ(),n,n)
if(!r)s.G(0,p)
o.c=m
m.Y(0,p)}if(o.d==null)return
l=c!=null
if(l){a.cB(0)
a.fP(0,c)}s=o.d
r=s.a
A.arA(B.Y,a,n,n,s.c,B.d4,B.O,!1,r,!1,!1,1,b,B.bs,s.b)
if(l)a.cw(0)},
Vj(a,b){var s,r,q=this
if(J.f(q.d,a))return
s=q.d
if(s!=null)if(a.a.Kp(s.a)){r=s.b
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
return s.gdl(s)+s.gdm(s)+s.gek(s)+s.gej()},
a08(a){var s=this
switch(a.a){case 0:return s.gcn()
case 1:return s.gb8(s)+s.gbc(s)}},
C(a,b){var s=this
return new A.lb(s.gdl(s)+b.gdl(b),s.gdm(s)+b.gdm(b),s.gek(s)+b.gek(b),s.gej()+b.gej(),s.gb8(s)+b.gb8(b),s.gbc(s)+b.gbc(b))},
j2(a,b,c){var s=this
return new A.lb(A.H(s.gdl(s),b.a,c.a),A.H(s.gdm(s),b.c,c.b),A.H(s.gek(s),0,c.c),A.H(s.gej(),0,c.d),A.H(s.gb8(s),b.b,c.e),A.H(s.gbc(s),b.d,c.f))},
i(a){var s=this
if(s.gek(s)===0&&s.gej()===0){if(s.gdl(s)===0&&s.gdm(s)===0&&s.gb8(s)===0&&s.gbc(s)===0)return"EdgeInsets.zero"
if(s.gdl(s)===s.gdm(s)&&s.gdm(s)===s.gb8(s)&&s.gb8(s)===s.gbc(s))return"EdgeInsets.all("+B.d.M(s.gdl(s),1)+")"
return"EdgeInsets("+B.d.M(s.gdl(s),1)+", "+B.d.M(s.gb8(s),1)+", "+B.d.M(s.gdm(s),1)+", "+B.d.M(s.gbc(s),1)+")"}if(s.gdl(s)===0&&s.gdm(s)===0)return"EdgeInsetsDirectional("+B.d.M(s.gek(s),1)+", "+B.d.M(s.gb8(s),1)+", "+B.d.M(s.gej(),1)+", "+B.d.M(s.gbc(s),1)+")"
return"EdgeInsets("+B.d.M(s.gdl(s),1)+", "+B.d.M(s.gb8(s),1)+", "+B.d.M(s.gdm(s),1)+", "+B.d.M(s.gbc(s),1)+") + EdgeInsetsDirectional("+B.d.M(s.gek(s),1)+", 0.0, "+B.d.M(s.gej(),1)+", 0.0)"},
k(a,b){var s=this
if(b==null)return!1
return b instanceof A.dc&&b.gdl(b)===s.gdl(s)&&b.gdm(b)===s.gdm(s)&&b.gek(b)===s.gek(s)&&b.gej()===s.gej()&&b.gb8(b)===s.gb8(s)&&b.gbc(b)===s.gbc(s)},
gt(a){var s=this
return A.S(s.gdl(s),s.gdm(s),s.gek(s),s.gej(),s.gb8(s),s.gbc(s),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.bq.prototype={
gdl(a){return this.a},
gb8(a){return this.b},
gdm(a){return this.c},
gbc(a){return this.d},
gek(a){return 0},
gej(){return 0},
yG(a){var s=this
return new A.C(a.a+s.a,a.b+s.b,a.c-s.c,a.d-s.d)},
C(a,b){if(b instanceof A.bq)return this.U(0,b)
return this.Ct(0,b)},
j2(a,b,c){var s=this
return new A.bq(A.H(s.a,b.a,c.a),A.H(s.b,b.b,c.e),A.H(s.c,b.c,c.b),A.H(s.d,b.d,c.f))},
aa(a,b){var s=this
return new A.bq(s.a-b.a,s.b-b.b,s.c-b.c,s.d-b.d)},
U(a,b){var s=this
return new A.bq(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
Z(a,b){var s=this
return new A.bq(s.a*b,s.b*b,s.c*b,s.d*b)},
V(a){return this},
oe(a,b,c,d){var s=this,r=b==null?s.a:b,q=d==null?s.b:d,p=c==null?s.c:c
return new A.bq(r,q,p,a==null?s.d:a)},
ys(a){return this.oe(a,null,null,null)}}
A.aY.prototype={
gek(a){return this.a},
gb8(a){return this.b},
gej(){return this.c},
gbc(a){return this.d},
gdl(a){return 0},
gdm(a){return 0},
C(a,b){if(b instanceof A.aY)return this.U(0,b)
return this.Ct(0,b)},
aa(a,b){var s=this
return new A.aY(s.a-b.a,s.b-b.b,s.c-b.c,s.d-b.d)},
U(a,b){var s=this
return new A.aY(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
Z(a,b){var s=this
return new A.aY(s.a*b,s.b*b,s.c*b,s.d*b)},
V(a){var s=this
switch(a.a){case 0:return new A.bq(s.c,s.b,s.a,s.d)
case 1:return new A.bq(s.a,s.b,s.c,s.d)}}}
A.lb.prototype={
Z(a,b){var s=this
return new A.lb(s.a*b,s.b*b,s.c*b,s.d*b,s.e*b,s.f*b)},
V(a){var s=this
switch(a.a){case 0:return new A.bq(s.d+s.a,s.e,s.c+s.b,s.f)
case 1:return new A.bq(s.c+s.a,s.e,s.d+s.b,s.f)}},
gdl(a){return this.a},
gdm(a){return this.b},
gek(a){return this.c},
gej(){return this.d},
gb8(a){return this.e},
gbc(a){return this.f}}
A.abr.prototype={}
A.aho.prototype={
$1(a){return a<=this.a},
$S:218}
A.agU.prototype={
$1(a){var s=this,r=A.v(A.aqs(s.a,s.b,a),A.aqs(s.c,s.d,a),s.e)
r.toString
return r},
$S:219}
A.a_l.prototype={
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
return new A.mr(s.d,s.e,s.f,A.aA(new A.aC(r,new A.a1l(b),q),!0,q.h("bm.E")),s.b,null)},
ca(a,b){var s=A.any(a,this,b)
return s},
cb(a,b){var s=A.any(this,a,b)
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
return"LinearGradient("+B.c.b4(r,", ")+")"}}
A.a1l.prototype={
$1(a){var s=A.v(null,a,this.a)
s.toString
return s},
$S:54}
A.a0f.prototype={
a_(a){var s,r,q,p
for(s=this.b,r=s.gaT(s),r=new A.dV(J.at(r.a),r.b),q=A.n(r).z[1];r.q();){p=r.a;(p==null?q.a(p):p).m()}s.a_(0)
for(s=this.a,r=s.gaT(s),r=new A.dV(J.at(r.a),r.b),q=A.n(r).z[1];r.q();){p=r.a
if(p==null)p=q.a(p)
p.a.G(0,p.b)}s.a_(0)
this.f=0},
m1(a){var s,r,q,p=this,o=p.c.u(0,a)
if(o!=null){s=o.a
r=o.d
r===$&&A.b()
if(s.w)A.K(A.a5(u.V))
B.c.u(s.x,r)
o.D0()}q=p.a.u(0,a)
if(q!=null){q.a.G(0,q.b)
return!0}o=p.b.u(0,a)
if(o!=null){s=p.f
r=o.b
r.toString
p.f=s-r
o.m()
return!0}return!1},
H8(a,b,c){var s,r=this,q=b.b
if(q!=null&&q<=104857600&&!0){s=r.f
q.toString
r.f=s+q
r.b.l(0,a,b)
r.Sr(c)}else b.m()},
xE(a,b,c){var s=this.c.bF(0,a,new A.a0i(this,b,a))
if(s.b==null)s.b=c},
Lm(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g={}
g.a=g.b=null
q=i.a
p=q.j(0,b)
o=p==null?h:p.a
g.c=o
if(o!=null)return o
p=i.b
n=p.u(0,b)
if(n!=null){g=n.a
i.xE(b,g,n.b)
p.l(0,b,n)
return g}m=i.c.j(0,b)
if(m!=null){g=m.a
i.H8(b,new A.xS(g,m.b,g.mr()),h)
return g}try{o=g.c=c.$0()
i.xE(b,o,h)
p=o}catch(l){s=A.ae(l)
r=A.au(l)
d.$2(s,r)
return h}g.d=!1
k=A.b6("pendingImage")
j=new A.dv(new A.a0j(g,i,b,!0,k),h,h)
k.b=new A.P2(p,j)
q.l(0,b,k.aD())
g.c.Y(0,j)
return g.c},
P(a,b){return this.a.j(0,b)!=null||this.b.j(0,b)!=null},
Sr(a){var s,r,q,p,o,n=this,m=n.b,l=A.n(m).h("b8<1>")
while(!0){if(!(n.f>104857600||m.a>1000))break
s=new A.b8(m,l)
r=s.ga3(s)
if(!r.q())A.K(A.bO())
q=r.gF(r)
p=m.j(0,q)
s=n.f
o=p.b
o.toString
n.f=s-o
p.m()
m.u(0,q)}}}
A.a0i.prototype={
$0(){return A.aAC(this.b,new A.a0h(this.a,this.c))},
$S:220}
A.a0h.prototype={
$0(){this.a.c.u(0,this.b)},
$S:0}
A.a0j.prototype={
$2(a,b){var s,r,q,p,o,n=this
if(a!=null){s=a.a
r=s.gbS(s)*s.gbm(s)*4
s.m()}else r=null
s=n.a
q=s.c
p=new A.xS(q,r,q.mr())
q=n.b
o=n.c
q.xE(o,s.c,r)
if(n.d)q.H8(o,p,s.a)
else p.m()
q.a.u(0,o)
if(!s.d){q=n.e.aD()
q.a.G(0,q.b)}s.d=!0},
$S:221}
A.Mk.prototype={
m(){$.bP.cy$.push(new A.abi(this))}}
A.abi.prototype={
$1(a){var s=this.a,r=s.c
if(r!=null)r.m()
s.c=null},
$S:2}
A.xS.prototype={}
A.qJ.prototype={
Ry(a,b,c){var s=new A.adp(this,b)
this.d=s
if(a.w)A.K(A.a5(u.V))
a.x.push(s)},
i(a){return"<optimized out>#"+A.bM(this)}}
A.adp.prototype={
$0(){var s,r,q
this.b.$0()
s=this.a
r=s.a
q=s.d
q===$&&A.b()
if(r.w)A.K(A.a5(u.V))
B.c.u(r.x,q)
s.D0()},
$S:0}
A.P2.prototype={}
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
p=q+("devicePixelRatio: "+B.d.M(p,1))
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
A.dT.prototype={
V(a){var s=new A.a0v()
this.T_(a,new A.a0t(this,a,s),new A.a0u(this,a,s))
return s},
T_(a,b,c){var s,r,q,p,o,n={}
n.a=null
n.b=!1
s=new A.a0q(n,c)
r=null
try{r=this.tS(a)}catch(o){q=A.ae(o)
p=A.au(o)
s.$2(q,p)
return}r.aE(new A.a0p(n,this,b,s),t.H).fO(s)},
px(a,b,c,d){var s,r
if(b.a!=null){s=$.eS.fV$
s===$&&A.b()
s.Lm(0,c,new A.a0r(b),d)
return}s=$.eS.fV$
s===$&&A.b()
r=s.Lm(0,c,new A.a0s(this,c),d)
if(r!=null)b.BW(r)},
p6(a,b,c){throw A.c(A.O("Implement loadBuffer for faster image loading"))},
p7(a,b){return this.p6(0,a,$.eS.ga4b())},
i(a){return"ImageConfiguration()"}}
A.a0t.prototype={
$2(a,b){this.a.px(this.b,this.c,a,b)},
$S(){return A.n(this.a).h("~(dT.T,~(B,bL?))")}}
A.a0u.prototype={
$3(a,b,c){return this.Mq(a,b,c)},
Mq(a,b,c){var s=0,r=A.a2(t.H),q=this,p
var $async$$3=A.Y(function(d,e){if(d===1)return A.a_(e,r)
while(true)switch(s){case 0:s=2
return A.a4(null,$async$$3)
case 2:p=q.c
if(p.a==null)p.BW(new A.abY(A.a([],t.fE),A.a([],t.b)))
p=p.a
p.toString
p.kP(A.bo("while resolving an image"),b,null,!0,c)
return A.a0(null,r)}})
return A.a1($async$$3,r)},
$S(){return A.n(this.a).h("ad<~>(dT.T?,B,bL?)")}}
A.a0q.prototype={
Mp(a,b){var s=0,r=A.a2(t.H),q,p=this,o
var $async$$2=A.Y(function(c,d){if(c===1)return A.a_(d,r)
while(true)switch(s){case 0:o=p.a
if(o.b){s=1
break}p.b.$3(o.a,a,b)
o.b=!0
case 1:return A.a0(q,r)}})
return A.a1($async$$2,r)},
$2(a,b){return this.Mp(a,b)},
$S:222}
A.a0p.prototype={
$1(a){var s,r,q,p=this
p.a.a=a
try{p.c.$2(a,p.d)}catch(q){s=A.ae(q)
r=A.au(q)
p.d.$2(s,r)}},
$S(){return A.n(this.b).h("ay(dT.T)")}}
A.a0r.prototype={
$0(){var s=this.a.a
s.toString
return s},
$S:86}
A.a0s.prototype={
$0(){return this.a.p7(this.b,$.eS.ga4e())},
$S:86}
A.hx.prototype={
k(a,b){var s=this
if(b==null)return!1
if(J.X(b)!==A.A(s))return!1
return b instanceof A.hx&&b.a===s.a&&b.b===s.b&&b.c===s.c},
gt(a){return A.S(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"AssetBundleImageKey(bundle: "+this.a.i(0)+', name: "'+this.b+'", scale: '+A.h(this.c)+")"}}
A.B8.prototype={
p7(a,b){return A.anM(this.lq(a,b,null),a.b,null,a.c)},
p6(a,b,c){return A.anM(this.lq(b,null,c),b.b,null,b.c)},
lq(a,b,c){return this.WQ(a,b,c)},
WQ(a,b,c){var s=0,r=A.a2(t.gP),q,p=2,o,n,m,l,k,j,i
var $async$lq=A.Y(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:s=b!=null?3:4
break
case 3:n=null
p=6
s=9
return A.a4(a.a.tK(a.b),$async$lq)
case 9:n=e
p=2
s=8
break
case 6:p=5
j=o
if(A.ae(j) instanceof A.kc){k=$.eS.fV$
k===$&&A.b()
k.m1(a)
throw j}else throw j
s=8
break
case 5:s=2
break
case 8:if(n==null){k=$.eS.fV$
k===$&&A.b()
k.m1(a)
throw A.c(A.a5("Unable to read data"))}q=b.$1(n)
s=1
break
case 4:m=null
p=11
s=14
return A.a4(a.a.cY(0,a.b),$async$lq)
case 14:m=e
p=2
s=13
break
case 11:p=10
i=o
if(A.ae(i) instanceof A.kc){k=$.eS.fV$
k===$&&A.b()
k.m1(a)
throw i}else throw i
s=13
break
case 10:s=2
break
case 13:if(m==null){k=$.eS.fV$
k===$&&A.b()
k.m1(a)
throw A.c(A.a5("Unable to read data"))}c.toString
q=c.$1(A.cK(m.buffer,0,null))
s=1
break
case 1:return A.a0(q,r)
case 2:return A.a_(o,r)}})
return A.a1($async$lq,r)}}
A.abY.prototype={}
A.o_.prototype={
gms(){return this.a},
tS(a){var s,r={},q=a.a
if(q==null)q=$.Tp()
r.a=r.b=null
q.a4S("AssetManifest.a3f9a259.json",A.aE9(),t.jd).aE(new A.TQ(r,this,a,q),t.H).fO(new A.TR(r))
s=r.a
if(s!=null)return s
s=new A.a7($.a8,t.hv)
r.b=new A.aI(s,t.q8)
return s},
SB(a,b,c){var s,r,q,p=b.b
if(p==null||c==null||J.fK(c))return a
s=A.akb(t.i,t.N)
for(r=J.at(c);r.q();){q=r.gF(r)
s.l(0,this.FT(q),q)}p.toString
return this.TR(s,p)},
TR(a,b){var s,r,q
if(a.nm(b)){s=a.j(0,b)
s.toString
return s}r=a.a4E(b)
q=a.a2P(b)
if(r==null)return a.j(0,q)
if(q==null)return a.j(0,r)
if(b<2||b>(r+q)/2)return a.j(0,q)
else return a.j(0,r)},
FT(a){var s,r,q,p
if(a===this.a)return 1
s=A.l0(a,0,null)
r=s.gjB().length>1?s.gjB()[s.gjB().length-2]:""
q=$.arT().tj(r)
if(q!=null&&q.b.length-1>0){p=q.b[1]
p.toString
return A.ar_(p)}return 1},
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return b instanceof A.o_&&b.gms()===this.gms()&&!0},
gt(a){return A.S(this.gms(),this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"AssetImage(bundle: "+A.h(this.b)+', name: "'+this.gms()+'")'}}
A.TQ.prototype={
$1(a){var s,r=this,q=r.b,p=q.gms(),o=a==null?null:J.aO(a,q.gms())
o=q.SB(p,r.c,o)
o.toString
s=new A.hx(r.d,o,q.FT(o))
q=r.a
p=q.b
if(p!=null)p.bT(0,s)
else q.a=new A.bp(s,t.rT)},
$S:224}
A.TR.prototype={
$2(a,b){this.a.b.du(a,b)},
$S:30}
A.eN.prototype={
cS(a){return new A.eN(this.a.cS(0),this.b,this.c)},
i(a){var s=this.c
s=s!=null?s+" ":""
return s+this.a.i(0)+" @ "+A.hs(this.b)+"x"},
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
a5i(a,b){return this.a.$2(a,b)}}
A.a0v.prototype={
BW(a){var s,r=this
r.a=a
s=r.b
if(s!=null){r.b=null
a.f=!0
B.c.X(s,a.gnT(a))
r.a.f=!1}},
Y(a,b){var s=this.a
if(s!=null)return s.Y(0,b)
s=this.b;(s==null?this.b=A.a([],t.fE):s).push(b)},
G(a,b){var s,r=this.a
if(r!=null)return r.G(0,b)
for(s=0;r=this.b,s<r.length;++s)if(J.f(r[s],b)){r=this.b
r.toString
B.c.ea(r,s)
break}}}
A.a0w.prototype={
m(){var s=this.a;--s.r
s.qI()
this.a=null}}
A.ki.prototype={
Y(a,b){var s,r,q,p,o,n,m,l=this
if(l.w)A.K(A.a5(u.V))
l.e=!0
l.a.push(b)
o=l.b
if(o!=null)try{o=o.cS(0)
n=l.f
b.a.$2(o,!n)}catch(m){s=A.ae(m)
r=A.au(m)
l.LC(A.bo("by a synchronously-called image listener"),s,r)}o=l.c
if(o!=null&&b.c!=null)try{n=b.c
n.toString
n.$2(o.a,o.b)}catch(s){q=A.ae(s)
p=A.au(s)
if(!J.f(q,l.c.a))A.e7(new A.bJ(q,p,"image resource service",A.bo("by a synchronously-called image error listener"),null,!1))}},
mr(){if(this.w)A.K(A.a5(u.V));++this.r
return new A.a0w(this)},
G(a,b){var s,r,q,p,o,n=this
if(n.w)A.K(A.a5(u.V))
for(s=n.a,r=0;r<s.length;++r)if(J.f(s[r],b)){B.c.ea(s,r)
break}if(s.length===0){s=n.x
q=A.a(s.slice(0),A.aj(s))
for(p=q.length,o=0;o<q.length;q.length===p||(0,A.P)(q),++o)q[o].$0()
B.c.a_(s)
n.qI()}},
qI(){var s,r=this
if(!r.e||r.w||r.a.length!==0||r.r!==0)return
s=r.b
if(s!=null)s.a.m()
r.b=null
r.w=!0},
C_(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.w)A.K(A.a5(u.V))
p=i.b
if(p!=null)p.a.m()
i.b=a
p=i.a
if(p.length===0)return
o=A.aA(p,!0,t.tg)
for(p=o.length,n=a.a,m=a.b,l=a.c,k=0;k<p;++k){s=o[k]
try{s.a5i(new A.eN(n.cS(0),m,l),!1)}catch(j){r=A.ae(j)
q=A.au(j)
i.LC(A.bo("by an image listener"),r,q)}}},
kP(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i="image resource service"
this.c=new A.bJ(b,e,i,a,c,d)
o=this.a
n=t.pE
m=A.aA(new A.dk(new A.aC(o,new A.a0x(),A.aj(o).h("aC<1,~(B,bL?)?>")),n),!0,n.h("o.E"))
s=!1
for(o=m.length,l=0;l<o;++l){r=m[l]
try{r.$2(b,e)
s=!0}catch(k){q=A.ae(k)
p=A.au(k)
if(!J.f(q,b)){n=A.bo("when reporting an error to an image listener")
j=$.fJ()
if(j!=null)j.$1(new A.bJ(q,p,i,n,null,!1))}}}if(!s){o=this.c
o.toString
A.e7(o)}},
LC(a,b,c){return this.kP(a,b,null,!1,c)},
a6m(a){var s,r,q,p
if(this.w)A.K(A.a5(u.V))
s=this.a
if(s.length!==0){r=t.zG
q=A.aA(new A.dk(new A.aC(s,new A.a0y(),A.aj(s).h("aC<1,~(eM)?>")),r),!0,r.h("o.E"))
for(s=q.length,p=0;p<s;++p)q[p].$1(a)}}}
A.a0x.prototype={
$1(a){return a.c},
$S:227}
A.a0y.prototype={
$1(a){return a.b},
$S:228}
A.I0.prototype={
Rm(a,b,c,d,e){this.d=c
b.dT(this.gUQ(),new A.a2q(this,d),t.H)},
UR(a){this.z=a
if(this.a.length!==0)this.lj()},
UI(a){var s,r,q,p=this
p.cx=!1
if(p.a.length===0)return
s=p.ay
if(s!=null){r=p.ax
r===$&&A.b()
r=a.a-r.a>=s.a}else r=!0
if(r){s=p.at
p.Es(new A.eN(s.gfq(s).cS(0),p.Q,p.d))
p.ax=a
s=p.at
p.ay=s.gJa(s)
s=p.at
s.gfq(s).m()
p.at=null
q=B.f.hh(p.ch,p.z.gmh())
if(p.z.guh()===-1||q<=p.z.guh())p.lj()
return}s.toString
r=p.ax
r===$&&A.b()
p.CW=A.cb(new A.aP(B.d.bb((s.a-(a.a-r.a))*$.aqA)),new A.a2p(p))},
lj(){var s=0,r=A.a2(t.H),q,p=2,o,n=this,m,l,k,j,i
var $async$lj=A.Y(function(a,b){if(a===1){o=b
s=p}while(true)switch(s){case 0:j=n.at
if(j!=null)j.gfq(j).m()
n.at=null
p=4
s=7
return A.a4(n.z.pR(),$async$lj)
case 7:n.at=b
p=2
s=6
break
case 4:p=3
i=o
m=A.ae(i)
l=A.au(i)
n.kP(A.bo("resolving an image frame"),m,n.as,!0,l)
s=1
break
s=6
break
case 3:s=2
break
case 6:if(n.z.gmh()===1){if(n.a.length===0){s=1
break}j=n.at
n.Es(new A.eN(j.gfq(j).cS(0),n.Q,n.d))
j=n.at
j.gfq(j).m()
n.at=null
s=1
break}n.Gk()
case 1:return A.a0(q,r)
case 2:return A.a_(o,r)}})
return A.a1($async$lj,r)},
Gk(){if(this.cx)return
this.cx=!0
$.bP.pZ(this.gUH())},
Es(a){this.C_(a);++this.ch},
Y(a,b){var s,r=this
if(r.a.length===0){s=r.z
if(s!=null)s=r.b==null||s.gmh()>1
else s=!1}else s=!1
if(s)r.lj()
r.Cz(0,b)},
G(a,b){var s,r=this
r.CA(0,b)
if(r.a.length===0){s=r.CW
if(s!=null)s.am(0)
r.CW=null}},
qI(){this.Od()
if(this.w)this.y=null}}
A.a2q.prototype={
$2(a,b){this.a.kP(A.bo("resolving an image codec"),a,this.b,!0,b)},
$S:30}
A.a2p.prototype={
$0(){this.a.Gk()},
$S:0}
A.NY.prototype={}
A.NX.prototype={}
A.B0.prototype={}
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
A.h0.prototype={
MM(a){var s={}
s.a=null
this.aU(new A.a0I(s,a,new A.B0()))
return s.a},
LZ(a){var s,r=new A.bw("")
this.Iu(r,!0,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
ad(a,b){var s={}
if(b<0)return null
s.a=null
this.aU(new A.a0H(s,b,new A.B0()))
return s.a},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.X(b)!==A.A(this))return!1
return b instanceof A.h0&&J.f(b.a,this.a)},
gt(a){return J.p(this.a)}}
A.a0I.prototype={
$1(a){var s=a.MN(this.b,this.c)
this.a.a=s
return s==null},
$S:40}
A.a0H.prototype={
$1(a){var s=a.a0U(this.b,this.c)
this.a.a=s
return s==null},
$S:40}
A.dC.prototype={
aI(a,b){var s=this.a.aI(0,b)
return new A.dC(this.b.Z(0,b),s)},
ca(a,b){var s,r,q=this
if(a instanceof A.dC){s=A.az(a.a,q.a,b)
r=A.hy(a.b,q.b,b)
r.toString
return new A.dC(r,s)}if(a instanceof A.ds){s=A.az(a.a,q.a,b)
return new A.ec(q.b,1-b,a.b,s)}return q.l9(a,b)},
cb(a,b){var s,r,q=this
if(a instanceof A.dC){s=A.az(q.a,a.a,b)
r=A.hy(q.b,a.b,b)
r.toString
return new A.dC(r,s)}if(a instanceof A.ds){s=A.az(q.a,a.a,b)
return new A.ec(q.b,b,a.b,s)}return q.la(a,b)},
fB(a,b){var s=$.aq().cp()
s.eK(this.b.V(b).dD(a))
return s},
hN(a,b,c){var s,r,q,p,o=this.a
switch(o.c.a){case 0:break
case 1:s=this.b
if(o.b===0)a.d6(s.V(c).dD(b),o.hV())
else{r=$.aq().bk()
r.sak(0,o.a)
q=s.V(c).dD(b)
p=q.da(-o.geA())
a.t4(q.da(o.gCh()),p,r)}break}},
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return b instanceof A.dC&&b.a.k(0,this.a)&&b.b.k(0,this.b)},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"RoundedRectangleBorder("+this.a.i(0)+", "+this.b.i(0)+")"}}
A.ec.prototype={
aI(a,b){var s=this.a.aI(0,b)
return new A.ec(this.b.Z(0,b),b,this.d,s)},
ca(a,b){var s,r,q,p=this
if(a instanceof A.dC){s=A.az(a.a,p.a,b)
r=A.hy(a.b,p.b,b)
r.toString
return new A.ec(r,p.c*b,p.d,s)}if(a instanceof A.ds){s=A.az(a.a,p.a,b)
r=p.c
return new A.ec(p.b,r+(1-r)*(1-b),a.b,s)}if(a instanceof A.ec){s=A.az(a.a,p.a,b)
r=A.hy(a.b,p.b,b)
r.toString
q=A.T(a.c,p.c,b)
q.toString
return new A.ec(r,q,p.d,s)}return p.l9(a,b)},
cb(a,b){var s,r,q,p=this
if(a instanceof A.dC){s=A.az(p.a,a.a,b)
r=A.hy(p.b,a.b,b)
r.toString
return new A.ec(r,p.c*(1-b),p.d,s)}if(a instanceof A.ds){s=A.az(p.a,a.a,b)
r=p.c
return new A.ec(p.b,r+(1-r)*b,a.b,s)}if(a instanceof A.ec){s=A.az(p.a,a.a,b)
r=A.hy(p.b,a.b,b)
r.toString
q=A.T(p.c,a.c,b)
q.toString
return new A.ec(r,q,p.d,s)}return p.la(a,b)},
Gh(a){var s,r,q,p,o,n,m,l,k=this.c
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
Dm(a,b){var s,r,q,p=this.b.V(b),o=this.c
if(o===0)return p
s=this.d
if(s!==0){r=a.c-a.a
q=a.d-a.b
s=0.5+s/2
if(r<q){o=A.o2(p,A.Bo(new A.bs(r/2,s*q/2)),o)
o.toString
return o}else{o=A.o2(p,A.Bo(new A.bs(s*r/2,q/2)),o)
o.toString
return o}}return A.o2(p,A.iL(a.gfE()/2),o)},
fB(a,b){var s=$.aq().cp(),r=this.Dm(a,b)
r.toString
s.eK(r.dD(this.Gh(a)))
return s},
hN(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=this.Dm(b,c)
s.toString
a.d6(s.dD(this.Gh(b)).da(r.b*r.d/2),r.hV())
break}},
k(a,b){var s=this
if(b==null)return!1
if(J.X(b)!==A.A(s))return!1
return b instanceof A.ec&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c===s.c},
gt(a){return A.S(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r="RoundedRectangleBorder(",q=s.d
if(q!==0)return r+s.a.i(0)+", "+s.b.i(0)+", "+B.d.M(s.c*100,1)+u.T+B.d.M(q*100,1)+"% oval)"
return r+s.a.i(0)+", "+s.b.i(0)+", "+B.d.M(s.c*100,1)+"% of the way to being a CircleBorder)"}}
A.eu.prototype={
aI(a,b){return new A.eu(this.a.aI(0,b))},
ca(a,b){var s,r=this
if(a instanceof A.eu)return new A.eu(A.az(a.a,r.a,b))
if(a instanceof A.ds){s=A.az(a.a,r.a,b)
return new A.ee(1-b,a.b,s)}if(a instanceof A.dC){s=A.az(a.a,r.a,b)
return new A.ef(a.b,1-b,s)}return r.l9(a,b)},
cb(a,b){var s,r=this
if(a instanceof A.eu)return new A.eu(A.az(r.a,a.a,b))
if(a instanceof A.ds){s=A.az(r.a,a.a,b)
return new A.ee(b,a.b,s)}if(a instanceof A.dC){s=A.az(r.a,a.a,b)
return new A.ef(a.b,b,s)}return r.la(a,b)},
fB(a,b){var s=a.gfE()/2,r=$.aq().cp()
r.eK(A.ajZ(a,new A.bs(s,s)))
return r},
hN(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=b.gfE()/2
a.d6(A.ajZ(b,new A.bs(s,s)).da(r.b*r.d/2),r.hV())
break}},
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return b instanceof A.eu&&b.a.k(0,this.a)},
gt(a){var s=this.a
return A.S(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"StadiumBorder("+this.a.i(0)+")"}}
A.ee.prototype={
aI(a,b){return new A.ee(b,this.c,this.a.aI(0,b))},
ca(a,b){var s,r,q,p=this
if(a instanceof A.eu)return new A.ee(p.b*b,p.c,A.az(a.a,p.a,b))
if(a instanceof A.ds){s=A.az(a.a,p.a,b)
r=p.b
return new A.ee(r+(1-r)*(1-b),a.b,s)}if(a instanceof A.ee){s=A.az(a.a,p.a,b)
r=A.T(a.b,p.b,b)
r.toString
q=A.T(a.c,p.c,b)
q.toString
return new A.ee(r,q,s)}return p.l9(a,b)},
cb(a,b){var s,r,q,p=this
if(a instanceof A.eu)return new A.ee(p.b*(1-b),p.c,A.az(p.a,a.a,b))
if(a instanceof A.ds){s=A.az(p.a,a.a,b)
r=p.b
return new A.ee(r+(1-r)*b,a.b,s)}if(a instanceof A.ee){s=A.az(p.a,a.a,b)
r=A.T(p.b,a.b,b)
r.toString
q=A.T(p.c,a.c,b)
q.toString
return new A.ee(r,q,s)}return p.la(a,b)},
GQ(a){var s,r,q,p,o,n,m,l,k=this.b
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
nJ(a){var s,r,q,p=A.iL(a.gfE()/2),o=this.c
if(o!==0){s=a.c-a.a
r=a.d-a.b
q=this.b
o=0.5+o/2
if(s<r){o=A.o2(p,A.Bo(new A.bs(s/2,o*r/2)),q)
o.toString
return o}else{o=A.o2(p,A.Bo(new A.bs(o*s/2,r/2)),q)
o.toString
return o}}return p},
fB(a,b){var s=$.aq().cp()
s.eK(this.nJ(a).dD(this.GQ(a)))
return s},
hN(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.d6(this.nJ(b).dD(this.GQ(b)).da(s.b*s.d/2),s.hV())
break}},
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return b instanceof A.ee&&b.a.k(0,this.a)&&b.b===this.b},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r=s.c
if(r!==0)return"StadiumBorder("+s.a.i(0)+", "+B.d.M(s.b*100,1)+u.T+B.d.M(r*100,1)+"% oval)"
return"StadiumBorder("+s.a.i(0)+", "+B.d.M(s.b*100,1)+"% of the way to being a CircleBorder)"}}
A.ef.prototype={
aI(a,b){var s=this.a.aI(0,b)
return new A.ef(this.b.Z(0,b),b,s)},
ca(a,b){var s,r,q,p=this
if(a instanceof A.eu)return new A.ef(p.b,p.c*b,A.az(a.a,p.a,b))
if(a instanceof A.dC){s=p.c
return new A.ef(p.b,s+(1-s)*(1-b),A.az(a.a,p.a,b))}if(a instanceof A.ef){s=A.az(a.a,p.a,b)
r=A.hy(a.b,p.b,b)
r.toString
q=A.T(a.c,p.c,b)
q.toString
return new A.ef(r,q,s)}return p.l9(a,b)},
cb(a,b){var s,r,q,p=this
if(a instanceof A.eu)return new A.ef(p.b,p.c*(1-b),A.az(p.a,a.a,b))
if(a instanceof A.dC){s=p.c
return new A.ef(p.b,s+(1-s)*b,A.az(p.a,a.a,b))}if(a instanceof A.ef){s=A.az(p.a,a.a,b)
r=A.hy(p.b,a.b,b)
r.toString
q=A.T(p.c,a.c,b)
q.toString
return new A.ef(r,q,s)}return p.la(a,b)},
nJ(a){var s=a.gfE()/2
s=A.hy(this.b,A.Bo(new A.bs(s,s)),1-this.c)
s.toString
return s},
fB(a,b){var s=$.aq().cp()
s.eK(this.nJ(a).V(b).dD(a))
return s},
hN(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.d6(this.nJ(b).V(c).dD(b).da(s.b*s.d/2),s.hV())
break}},
k(a,b){var s=this
if(b==null)return!1
if(J.X(b)!==A.A(s))return!1
return b instanceof A.ef&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c===s.c},
gt(a){return A.S(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"StadiumBorder("+this.a.i(0)+", "+this.b.i(0)+", "+B.d.M(this.c*100,1)+"% of the way to being a RoundedRectangleBorder)"}}
A.nf.prototype={
E(){return"TextOverflow."+this.b}}
A.mC.prototype={
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(b instanceof A.mC)if(b.a.k(0,r.a))if(b.b===r.b)s=b.c==r.c
else s=!1
else s=!1
else s=!1
return s},
gt(a){var s=this
return A.S(s.a,s.b,s.d,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"PlaceholderDimensions("+this.a.i(0)+", "+A.h(this.d)+")"}}
A.xp.prototype={
E(){return"TextWidthBasis."+this.b}}
A.abj.prototype={}
A.L9.prototype={
a8(){var s=this,r=s.a
if(r!=null)r.m()
s.dy=s.dx=s.fr=s.a=null},
scr(a,b){var s,r,q=this
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
gu6(){var s=this.e
if(s==null){s=this.d
s=s==null?null:s.LZ(!1)
this.e=s}return s==null?"":s},
sB_(a,b){if(this.f===b)return
this.f=b
this.a8()},
sbK(a){var s,r=this
if(r.r===a)return
r.r=a
r.a8()
s=r.CW
if(s!=null)s.m()
r.CW=null},
sB0(a){var s,r=this
if(r.w===a)return
r.w=a
r.a8()
s=r.CW
if(s!=null)s.m()
r.CW=null},
sa2m(a){if(this.x==a)return
this.x=a
this.a8()},
szS(a,b){if(J.f(this.y,b))return
this.y=b
this.a8()},
szX(a){if(this.z==a)return
this.z=a
this.a8()},
sB1(a){if(this.as===a)return
this.as=a
this.a8()},
uT(a){if(a==null||a.length===0||A.cS(a,this.ch))return
this.ch=a
this.a8()},
Ec(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.d.a
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
e=A.ajU(n,i,h*q,j,k,e,m,p,f,s,r,o)}if(e==null){e=g.f
s=g.r
if(s==null)s=a
r=g.w
q=g.z
p=g.at
p=A.ajU(g.x,f,14*r,f,f,f,g.y,q,f,e,s,p)
e=p}return e},
T4(){return this.Ec(null)},
gu8(){var s,r,q=this,p=q.CW
if(p==null){p=q.Ec(B.X)
s=$.aq().yx(p)
p=q.d
if(p==null)r=null
else{p=p.a
r=p==null?null:p.BI(q.w)}if(r!=null)s.AJ(r)
s.ro(" ")
p=s.bd()
p.iA(B.TF)
q.CW=p}return p.gbS(p)},
gbm(a){var s=this.as,r=this.a
s=s===B.ZF?r.gKJ():r.gbm(r)
return Math.ceil(s)},
eO(a){var s
switch(a.a){case 0:s=this.a
return s.grs(s)
case 1:s=this.a
return s.ga41(s)}},
Eb(){var s,r,q=this,p=q.d
if(p==null)throw A.c(A.a5("TextPainter.text must be set to a non-null value before using the TextPainter."))
s=q.T4()
r=$.aq().yx(s)
s=q.w
p.Ie(r,q.ch,s)
q.ay=r.ga5E()
q.a=r.bd()
q.b=!1},
Fo(a,b){var s,r,q=this
q.a.iA(new A.kE(b))
if(a!==b){switch(q.as.a){case 1:s=Math.ceil(q.a.gKJ())
break
case 0:s=Math.ceil(q.a.ga4Z())
break
default:s=null}s=A.H(s,a,b)
r=q.a
if(s!==Math.ceil(r.gbm(r)))q.a.iA(new A.kE(s))}},
zP(a,b){var s=this,r=s.a==null
if(!r&&b===s.cx&&a===s.cy)return
if(s.b||r)s.Eb()
s.cx=b
s.cy=a
s.dy=s.dx=s.fr=null
s.Fo(b,a)
s.ax=s.a.uw()},
a4G(){return this.zP(1/0,0)},
aH(a,b){var s,r=this,q=r.cx,p=r.cy
if(r.a==null||q==null||p==null)throw A.c(A.a5("TextPainter.paint called when text geometry was not yet calculated.\nPlease call layout() before paint() to position the text before painting it."))
if(r.b){r.Eb()
r.Fo(q,p)}s=r.a
s.toString
a.ks(s,b)},
EL(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.gu6().length
if(g===0||a>g)return null
s=B.b.ad(h.gu6(),Math.max(0,a-1))
r=(s&63488)===55296||h.d.ad(0,a)===8205||s===8207||s===8206
q=r?2:1
p=A.a([],t.px)
for(o=-g,n=!r,m=s===10;p.length===0;){l=a-q
p=h.a.Bt(l,a,B.mq)
if(p.length===0){if(n&&m)break
if(l<o)break
q*=2
continue}k=B.c.gJ(p)
if(m){o=k.d
return new A.C(h.gw6().a,o,h.gw6().a,o+o-k.b)}o=k.e
j=o===B.t?k.c:k.a
i=o===B.X?j-(b.c-b.a):j
o=h.a
o=A.H(i,0,o.gbm(o))
n=h.a
return new A.C(o,k.b,A.H(i,0,n.gbm(n)),k.d)}return null},
EK(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.gu6().length
if(h===0||a<0)return null
s=B.b.ad(i.gu6(),Math.min(a,h-1))
r=(s&63488)===55296||s===8205||s===8207||s===8206
q=r?2:1
p=A.a([],t.px)
for(o=h<<1>>>0,n=!r;p.length===0;){m=a+q
p=i.a.Bt(a,m,B.mq)
if(p.length===0){if(n)break
if(m>=o)break
q*=2
continue}l=B.c.gR(p)
o=l.e
k=o===B.t?l.a:l.c
j=o===B.X?k-(b.c-b.a):k
o=i.a
o=A.H(j,0,o.gbm(o))
n=i.a
return new A.C(o,l.b,A.H(j,0,n.gbm(n)),l.d)}return null},
gw6(){var s=this
switch(s.f.a){case 0:return B.j
case 1:return new A.t(s.gbm(s),0)
case 2:return new A.t(s.gbm(s)/2,0)
case 3:case 4:switch(s.r.a){case 0:return new A.t(s.gbm(s),0)
case 1:return B.j}break
case 5:switch(s.r.a){case 0:return B.j
case 1:return new A.t(s.gbm(s),0)}break}},
E1(a,b){var s,r,q,p,o=this
if(a.k(0,o.dx)&&b.k(0,o.dy))return
s=a.a
switch(a.b.a){case 0:r=o.EL(s,b)
if(r==null)r=o.EK(s,b)
break
case 1:r=o.EK(s,b)
if(r==null)r=o.EL(s,b)
break
default:r=null}q=r!=null
p=q?new A.t(r.a,r.b):o.gw6()
o.db=new A.abj(p,q?r.d-r.b:null)
o.dx=a
o.dy=b},
m(){var s=this,r=s.CW
if(r!=null)r.m()
s.CW=null
r=s.a
if(r!=null)r.m()
s.d=s.a=null}}
A.xo.prototype={
gIN(a){return this.e},
gBm(){return!0},
it(a,b){t.Y.b(a)},
Ie(a,b,c){var s,r,q,p,o=this.a,n=o!=null
if(n)a.AJ(o.BI(c))
o=this.b
if(o!=null)try{a.ro(o)}catch(q){o=A.ae(q)
if(o instanceof A.fL){s=o
r=A.au(q)
A.e7(new A.bJ(s,r,"painting library",A.bo("while building a TextSpan"),null,!1))
a.ro("\ufffd")}else throw q}o=this.c
if(o!=null)for(p=0;p<1;++p)o[p].Ie(a,b,c)
if(n)a.hQ()},
aU(a){var s,r
if(this.b!=null)if(!a.$1(this))return!1
s=this.c
if(s!=null)for(r=0;r<1;++r)if(!s[r].aU(a))return!1
return!0},
MN(a,b){var s,r,q,p,o=this.b
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
Iu(a,b,c){var s,r=this.b
if(r!=null)a.a+=r
r=this.c
if(r!=null)for(s=0;s<1;++s)r[s].Iu(a,!0,c)},
It(a,b,c){var s,r,q=this.b
if(q!=null){s=A.a([],t.ve)
a.push(A.anm(q,null,null,s))}q=this.c
if(q!=null)for(r=0;r<1;++r)q[r].It(a,b,!1)},
a18(a){return this.It(a,null,!1)},
a0U(a,b){var s,r,q,p=this.b
if(p==null)return null
s=b.a
r=a-s
q=p.length
if(r<q)return B.b.ad(p,r)
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
if(!s.Og(0,b))return!1
return b instanceof A.xo&&b.b==s.b&&s.e.k(0,b.e)&&A.cS(b.c,s.c)},
gt(a){var s=this,r=null,q=A.h0.prototype.gt.call(s,s),p=s.c
p=p==null?r:A.df(p)
return A.S(q,s.b,r,r,r,r,s.e,p,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
c0(){return"TextSpan"},
$iao:1,
$ij5:1,
gAk(){return null},
gAl(){return null}}
A.r.prototype={
gmg(){return this.e},
glG(a){return this.d},
od(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=b9==null?a.a:b9,a1=a.ay
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
c=b0==null?a.glG(a):b0
b=b1==null?a.e:b1
return A.bY(r,q,s,null,g,f,e,d,c,b,a.fr,p,a.x,h,o,a1,k,a0,j,n,a.ax,a.fy,a.f,i,l,m)},
a1A(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5){return this.od(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,null,r,s,a0,a1,a2,a3,a4,a5)},
hz(a){return this.od(null,null,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
a1q(a){return this.od(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null)},
IG(a,b){return this.od(null,null,a,null,null,null,null,null,null,null,null,b,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
IB(a){return this.od(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null,null,null)},
c7(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
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
a1=a4.glG(a4)
a2=a4.e
a3=a4.f
return this.a1A(g,r,s,null,c,b,a,a0,a1,a2,e,q,o,d,p,h,k,j,n,i,a4.fy,a3,f,l,m)},
BI(a){var s,r,q=this,p=q.gmg(),o=q.r
o=o==null?null:o*a
s=q.ch
if(s==null){s=q.c
if(s!=null){r=$.aq().bk()
r.sak(0,s)
s=r}else s=null}return A.aoO(s,q.b,q.CW,q.cx,q.cy,q.db,q.d,p,q.fr,o,q.x,q.fx,q.w,q.ay,q.as,q.at,q.y,q.ax,q.dy,q.Q,q.z)},
aF(a,b){var s=this
if(s===b)return B.dL
if(s.a!==b.a||s.d!=b.d||s.r!=b.r||s.w!=b.w||s.y!=b.y||s.z!=b.z||s.Q!=b.Q||s.as!=b.as||s.at!=b.at||s.ay!=b.ay||s.ch!=b.ch||!A.cS(s.dy,b.dy)||!A.cS(s.fr,b.fr)||!A.cS(s.fx,b.fx)||!A.cS(s.gmg(),b.gmg())||!1)return B.cG
if(!J.f(s.b,b.b)||!J.f(s.c,b.c)||!J.f(s.CW,b.CW)||!J.f(s.cx,b.cx)||s.cy!=b.cy||s.db!=b.db)return B.TY
return B.dL},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.X(b)!==A.A(r))return!1
if(b instanceof A.r)if(b.a===r.a)if(J.f(b.b,r.b))if(J.f(b.c,r.c))if(b.r==r.r)if(b.w==r.w)if(b.y==r.y)if(b.z==r.z)if(b.Q==r.Q)if(b.as==r.as)if(b.at==r.at)if(b.ay==r.ay)if(b.ch==r.ch)if(A.cS(b.dy,r.dy))if(A.cS(b.fr,r.fr))if(A.cS(b.fx,r.fx))if(J.f(b.CW,r.CW))if(J.f(b.cx,r.cx))if(b.cy==r.cy)if(b.db==r.db)if(b.d==r.d)if(A.cS(b.gmg(),r.gmg()))s=!0
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
gt(a){var s,r=this,q=null,p=r.gmg(),o=p==null?q:A.df(p),n=A.S(r.cy,r.db,r.d,o,r.f,r.fy,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a),m=r.dy,l=r.fx
o=m==null?q:A.df(m)
s=l==null?q:A.df(l)
return A.S(r.a,r.b,r.c,r.r,r.w,r.x,r.y,r.z,r.Q,r.as,r.at,r.ax,r.ay,r.ch,o,q,s,r.CW,r.cx,n)},
c0(){return"TextStyle"}}
A.Re.prototype={}
A.Fb.prototype={
Ri(a,b,c,d,e){var s=this
s.r=A.aqj(new A.Zz(s),s.gz1(s),0,10,0)},
d_(a,b){var s,r,q=this
if(b>q.r)return q.gte()
s=q.e
r=q.c
return q.d+s*Math.pow(q.b,b)/r-s/r-q.f/2*b*b},
dK(a,b){var s=this
if(b>s.r)return 0
return s.e*Math.pow(s.b,b)-s.f*b},
gte(){var s=this
if(s.f===0)return s.d-s.e/s.c
return s.d_(0,s.r)},
LU(a){var s,r=this,q=r.d
if(a===q)return 0
s=r.e
if(s!==0)if(s>0)q=a<q||a>r.gte()
else q=a>q||a<r.gte()
else q=!0
if(q)return 1/0
return A.aqj(r.gz1(r),r.ga7g(r),0,10,a)},
jp(a){return Math.abs(this.dK(0,a))<this.a.c},
i(a){return"FrictionSimulation(c\u2093: "+B.d.M(this.b,1)+", x\u2080: "+B.d.M(this.d,1)+", dx\u2080: "+B.d.M(this.e,1)+")"}}
A.Zz.prototype={
$1(a){var s=this.a
return s.e*Math.pow(s.b,a)*s.c-s.f},
$S:73}
A.a6L.prototype={
i(a){return"Simulation"}}
A.a8F.prototype={
i(a){return"SpringDescription(mass: "+B.d.M(this.a,1)+", stiffness: "+B.f.M(this.b,1)+", damping: "+B.d.M(this.c,1)+")"}}
A.pN.prototype={
E(){return"SpringType."+this.b}}
A.KL.prototype={
d_(a,b){return this.b+this.c.d_(0,b)},
dK(a,b){return this.c.dK(0,b)},
jp(a){var s=this.c
return A.AL(s.d_(0,a),0,this.a.a)&&A.AL(s.dK(0,a),0,this.a.c)},
i(a){var s=this.c
return"SpringSimulation(end: "+B.d.M(this.b,1)+", "+s.gde(s).i(0)+")"}}
A.kO.prototype={
d_(a,b){return this.jp(b)?this.b:this.PS(0,b)}}
A.aby.prototype={
d_(a,b){return(this.b+this.c*b)*Math.pow(2.718281828459045,this.a*b)},
dK(a,b){var s=this.a,r=Math.pow(2.718281828459045,s*b),q=this.c
return s*(this.b+q*b)*r+q*r},
gde(a){return B.Vr}}
A.aec.prototype={
d_(a,b){var s=this
return s.c*Math.pow(2.718281828459045,s.a*b)+s.d*Math.pow(2.718281828459045,s.b*b)},
dK(a,b){var s=this,r=s.a,q=s.b
return s.c*r*Math.pow(2.718281828459045,r*b)+s.d*q*Math.pow(2.718281828459045,q*b)},
gde(a){return B.Vt}}
A.afP.prototype={
d_(a,b){var s=this,r=s.a*b
return Math.pow(2.718281828459045,s.b*b)*(s.c*Math.cos(r)+s.d*Math.sin(r))},
dK(a,b){var s,r=this,q=r.b,p=Math.pow(2.718281828459045,q*b),o=r.a,n=o*b,m=Math.cos(n),l=Math.sin(n)
n=r.d
s=r.c
return p*(n*o*m-s*o*l)+q*p*(n*l+s*m)},
gde(a){return B.Vs}}
A.Lj.prototype={
i(a){return"Tolerance(distance: \xb1"+A.h(this.a)+", time: \xb10.001, velocity: \xb1"+A.h(this.c)+")"}}
A.po.prototype={
zo(){var s=this,r=s.y1$
r===$&&A.b()
r=r.e
r.toString
r.syq(s.IL())
if(s.y1$.e.A$!=null)s.MW()},
zu(){},
zq(){},
IL(){var s,r=$.cq(),q=r.w
if(q==null){s=self.window.devicePixelRatio
q=s===0?1:s}return new A.LC(r.gkL().d0(0,q),q)},
W3(){var s,r=this
if($.aN().a.c){if(r.y2$==null){s=r.y1$
s===$&&A.b()
r.y2$=s.Jl()}}else{s=r.y2$
if(s!=null)s.m()
r.y2$=null}},
Nk(a){var s,r=this
if(a){if(r.y2$==null){s=r.y1$
s===$&&A.b()
r.y2$=s.Jl()}}else{s=r.y2$
if(s!=null)s.m()
r.y2$=null}},
Wm(a){B.Tn.nt("first-frame",null,!1,t.H)},
W1(a,b,c){var s=this.y1$
s===$&&A.b()
s=s.as
if(s!=null)s.a5C(a,b,null)},
W5(){var s,r=this.y1$
r===$&&A.b()
r=r.e
r.toString
s=t.W
s.a(A.L.prototype.gbw.call(r)).ay.C(0,r)
s.a(A.L.prototype.gbw.call(r)).mG()},
W9(a){var s=this.y1$
s===$&&A.b()
s.e.toString
s=$.dG;(s==null?$.dG=A.k9():s).a7_(a)},
W7(){var s=this.y1$
s===$&&A.b()
s.e.lQ()},
Vy(a){this.z0()
this.Z4()},
Z4(){$.bP.cy$.push(new A.a4V(this))},
HZ(){--this.bp$
if(!this.be$)this.uJ()},
z0(){var s=this,r=s.y1$
r===$&&A.b()
r.a2S()
s.y1$.a2R()
s.y1$.a2T()
if(s.be$||s.bp$===0){s.y1$.e.a14()
s.y1$.a2U()
s.be$=!0}},
$iao:1,
$idE:1}
A.a4V.prototype={
$1(a){var s=this.a,r=s.xr$
r.toString
s=s.y1$
s===$&&A.b()
r.a6X(s.e.ga3Z())},
$S:2}
A.aQ.prototype={
yu(a,b,c,d){var s=this,r=d==null?s.a:d,q=b==null?s.b:b,p=c==null?s.c:c
return new A.aQ(r,q,p,a==null?s.d:a)},
a1x(a,b){return this.yu(null,null,a,b)},
ID(a){return this.yu(a,null,null,null)},
a1r(a){return this.yu(null,a,null,null)},
IR(a){var s=this,r=a.gcn(),q=a.gb8(a)+a.gbc(a),p=Math.max(0,s.a-r),o=Math.max(0,s.c-q)
return new A.aQ(p,Math.max(p,s.b-r),o,Math.max(o,s.d-q))},
oB(a){var s=this,r=a.a,q=a.b,p=a.c,o=a.d
return new A.aQ(A.H(s.a,r,q),A.H(s.b,r,q),A.H(s.c,p,o),A.H(s.d,p,o))},
B4(a,b){var s,r,q=this,p=b==null,o=q.a,n=p?o:A.H(b,o,q.b),m=q.b
p=p?m:A.H(b,o,m)
o=a==null
m=q.c
s=o?m:A.H(a,m,q.d)
r=q.d
return new A.aQ(n,p,s,o?r:A.H(a,m,r))},
ul(a){return this.B4(a,null)},
B3(a){return this.B4(null,a)},
bC(a){var s=this
return new A.a6(A.H(a.a,s.a,s.b),A.H(a.b,s.c,s.d))},
oc(a){var s,r,q,p,o,n=this,m=n.a,l=n.b
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
gKw(){var s=this
return s.a>=s.b&&s.c>=s.d},
Z(a,b){var s=this
return new A.aQ(s.a*b,s.b*b,s.c*b,s.d*b)},
d0(a,b){var s=this
return new A.aQ(s.a/b,s.b/b,s.c/b,s.d/b)},
ga4t(){var s=this,r=s.a
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
i(a){var s,r=this,q=r.ga4t()?"":"; NOT NORMALIZED",p=r.a
if(p===1/0&&r.c===1/0)return"BoxConstraints(biggest"+q+")"
if(p===0&&r.b===1/0&&r.c===0&&r.d===1/0)return"BoxConstraints(unconstrained"+q+")"
s=new A.Ug()
return"BoxConstraints("+s.$3(p,r.b,"w")+", "+s.$3(r.c,r.d,"h")+q+")"}}
A.Ug.prototype={
$3(a,b,c){if(a===b)return c+"="+B.d.M(a,1)
return B.d.M(a,1)+"<="+c+"<="+B.d.M(b,1)},
$S:234}
A.hz.prototype={
y5(a,b,c){if(c!=null){c=A.HQ(A.ajW(c))
if(c==null)return!1}return this.HX(a,b,c)},
nV(a,b,c){var s,r=b==null,q=r?c:c.aa(0,b)
r=!r
if(r)this.c.push(new A.qQ(new A.t(-b.a,-b.b)))
s=a.$2(this,q)
if(r)this.u7()
return s},
HX(a,b,c){var s,r=c==null,q=r?b:A.cw(c,b)
r=!r
if(r)this.c.push(new A.yG(c))
s=a.$2(this,q)
if(r)this.u7()
return s},
HW(a,b,c){var s,r=this
if(b!=null)r.c.push(new A.qQ(new A.t(-b.a,-b.b)))
else{c.toString
c=A.HQ(A.ajW(c))
c.toString
r.c.push(new A.yG(c))}s=a.$1(r)
r.u7()
return s},
a05(a,b){return this.HW(a,null,b)},
a04(a,b){return this.HW(a,b,null)}}
A.o5.prototype={
i(a){return"<optimized out>#"+A.bM(this.a)+"@"+this.c.i(0)}}
A.eC.prototype={
i(a){return"offset="+this.a.i(0)}}
A.t6.prototype={}
A.F.prototype={
ex(a){if(!(a.e instanceof A.eC))a.e=new A.eC(B.j)},
h8(a){var s,r=this.k1
if(r==null)r=this.k1=A.y(t.k,t.DB)
s=r.bF(0,a,new A.a4n(this,a))
return s},
cf(a){return B.R},
gjQ(){var s=this.k3
return new A.C(0,0,0+s.a,0+s.b)},
uA(a,b){var s=null
try{s=this.jL(a)}finally{}if(s==null&&!b)return this.k3.b
return s},
Mx(a){return this.uA(a,!1)},
jL(a){var s=this,r=s.k4
if(r==null)r=s.k4=A.y(t.E9,t.u6)
r.bF(0,a,new A.a4m(s,a))
return s.k4.j(0,a)},
eO(a){return null},
ga0(){return t.k.a(A.z.prototype.ga0.call(this))},
SE(){var s,r=this,q=r.k4,p=q==null
if(!(!p&&q.a!==0)){s=r.id
if(!(s!=null&&s.a!==0)){s=r.k1
s=s!=null&&s.a!==0}else s=!0}else s=!0
if(s){if(!p)q.a_(0)
q=r.id
if(q!=null)q.a_(0)
q=r.k1
if(q!=null)q.a_(0)
return!0}return!1},
a8(){var s=this
if(s.SE()&&s.c instanceof A.z){s.tN()
return}s.Pb()},
cv(a,b){var s,r=this
if(r.k3!=null)if(!a.k(0,t.k.a(A.z.prototype.ga0.call(r)))){s=r.k4
s=s!=null&&s.a!==0}else s=!1
else s=!1
if(s){s=r.k4
if(s!=null)s.a_(0)}r.Pa(a,b)},
iA(a){return this.cv(a,!1)},
po(){this.k3=this.cf(t.k.a(A.z.prototype.ga0.call(this)))},
bJ(){},
bY(a,b){var s=this
if(s.k3.B(0,b))if(s.cW(a,b)||s.jm(b)){a.C(0,new A.o5(b,s))
return!0}return!1},
jm(a){return!1},
cW(a,b){return!1},
ds(a,b){var s,r=a.e
r.toString
s=t.Ch.a(r).a
b.aB(0,s.a,s.b)},
kY(a){var s,r,q,p,o,n=this.bA(0,null)
if(n.hy(n)===0)return B.j
s=new A.fA(new Float64Array(3))
s.fD(0,0,1)
r=new A.fA(new Float64Array(3))
r.fD(0,0,0)
q=n.iC(r)
r=new A.fA(new Float64Array(3))
r.fD(0,0,1)
p=n.iC(r).aa(0,q)
r=new A.fA(new Float64Array(3))
r.fD(a.a,a.b,0)
o=n.iC(r)
r=o.aa(0,p.BR(s.J3(o)/s.J3(p))).a
return new A.t(r[0],r[1])},
ghO(){var s=this.k3
return new A.C(0,0,0+s.a,0+s.b)},
it(a,b){this.P9(a,b)}}
A.a4n.prototype={
$0(){return this.a.cf(this.b)},
$S:235}
A.a4m.prototype={
$0(){return this.a.eO(this.b)},
$S:236}
A.cL.prototype={
a24(a){var s,r,q,p=this.a7$
for(s=A.n(this).h("cL.1?");p!=null;){r=s.a(p.e)
q=p.jL(a)
if(q!=null)return q+r.a.b
p=r.ab$}return null},
IQ(a){var s,r,q,p,o=this.a7$
for(s=A.n(this).h("cL.1"),r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.jL(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.ab$}return r},
yE(a,b){var s,r,q={},p=q.a=this.bD$
for(s=A.n(this).h("cL.1");p!=null;p=r){p=p.e
p.toString
s.a(p)
if(a.nV(new A.a4l(q,b,p),p.a,b))return!0
r=p.aS$
q.a=r}return!1},
oi(a,b){var s,r,q,p,o,n=this.a7$
for(s=A.n(this).h("cL.1"),r=b.a,q=b.b;n!=null;){p=n.e
p.toString
s.a(p)
o=p.a
a.f2(n,new A.t(o.a+r,o.b+q))
n=p.ab$}}}
A.a4l.prototype={
$2(a,b){return this.a.a.bY(a,b)},
$S:15}
A.xY.prototype={
al(a){this.va(0)}}
A.fi.prototype={
i(a){return this.q7(0)+"; id="+A.h(this.e)}}
A.a2m.prototype={
dP(a,b){var s,r=this.b.j(0,a)
r.cv(b,!0)
s=r.k3
s.toString
return s},
e9(a,b){var s=this.b.j(0,a).e
s.toString
t.DU.a(s).a=b},
Sl(a,b){var s,r,q,p,o,n,m=this,l=m.b
try{m.b=A.y(t.K,t.x)
for(r=t.DU,q=b;q!=null;q=n){p=q.e
p.toString
s=r.a(p)
p=m.b
p.toString
o=s.e
o.toString
p.l(0,o,q)
n=s.ab$}m.u5(a)}finally{m.b=l}},
i(a){return"MultiChildLayoutDelegate"}}
A.Jr.prototype={
ex(a){if(!(a.e instanceof A.fi))a.e=new A.fi(null,null,B.j)},
syH(a){var s=this,r=s.K
if(r===a)return
if(A.A(a)!==A.A(r)||a.mX(r))s.a8()
s.K=a
s.b!=null},
aq(a){this.Qb(a)},
al(a){this.Qc(0)},
cf(a){return a.bC(new A.a6(A.H(1/0,a.a,a.b),A.H(1/0,a.c,a.d)))},
bJ(){var s=this,r=t.k.a(A.z.prototype.ga0.call(s))
r=r.bC(new A.a6(A.H(1/0,r.a,r.b),A.H(1/0,r.c,r.d)))
s.k3=r
s.K.Sl(r,s.a7$)},
aH(a,b){this.oi(a,b)},
cW(a,b){return this.yE(a,b)}}
A.z3.prototype={
aq(a){var s,r,q
this.eB(a)
s=this.a7$
for(r=t.DU;s!=null;){s.aq(a)
q=s.e
q.toString
s=r.a(q).ab$}},
al(a){var s,r,q
this.dW(0)
s=this.a7$
for(r=t.DU;s!=null;){s.al(0)
q=s.e
q.toString
s=r.a(q).ab$}}}
A.PS.prototype={}
A.DD.prototype={
Y(a,b){var s=this.a
return s==null?null:s.Y(0,b)},
G(a,b){var s=this.a
return s==null?null:s.G(0,b)},
gBU(){return null},
C6(a){return this.i2(a)},
ty(a){return null},
i(a){var s=A.bM(this),r=this.a
r=r==null?null:r.i(0)
if(r==null)r=""
return"<optimized out>#"+s+"("+r+")"}}
A.Js.prototype={
su4(a){var s=this.v
if(s==a)return
this.v=a
this.Eh(a,s)},
sJI(a){var s=this.T
if(s==a)return
this.T=a
this.Eh(a,s)},
Eh(a,b){var s=this,r=a==null
if(r)s.au()
else if(b==null||A.A(a)!==A.A(b)||a.i2(b))s.au()
if(s.b!=null){if(b!=null)b.G(0,s.ge8())
if(!r)a.Y(0,s.ge8())}if(r){if(s.b!=null)s.b2()}else if(b==null||A.A(a)!==A.A(b)||a.C6(b))s.b2()},
su9(a){if(this.az.k(0,a))return
this.az=a
this.a8()},
aq(a){var s,r=this
r.na(a)
s=r.v
if(s!=null)s.Y(0,r.ge8())
s=r.T
if(s!=null)s.Y(0,r.ge8())},
al(a){var s=this,r=s.v
if(r!=null)r.G(0,s.ge8())
r=s.T
if(r!=null)r.G(0,s.ge8())
s.ld(0)},
cW(a,b){var s=this.T
if(s!=null){s=s.ty(b)
s=s===!0}else s=!1
if(s)return!0
return this.qa(a,b)},
jm(a){var s=this.v
if(s!=null){s=s.ty(a)
s=s!==!1}else s=!1
return s},
bJ(){this.vf()
this.b2()},
ob(a){return a.bC(this.az)},
FR(a,b,c){var s
A.b6("debugPreviousCanvasSaveCount")
a.cB(0)
if(!b.k(0,B.j))a.aB(0,b.a,b.b)
s=this.k3
s.toString
c.aH(a,s)
a.cw(0)},
aH(a,b){var s,r,q=this
if(q.v!=null){s=a.gbG(a)
r=q.v
r.toString
q.FR(s,b,r)
q.GD(a)}q.hg(a,b)
if(q.T!=null){s=a.gbG(a)
r=q.T
r.toString
q.FR(s,b,r)
q.GD(a)}},
GD(a){},
eR(a){var s,r=this
r.hf(a)
r.bR=null
s=r.T
r.e4=s==null?null:s.gBU()
a.a=!1},
o3(a,b,c){var s,r,q,p,o=this
o.fX=A.aoh(o.fX,B.rK)
o.is=A.aoh(o.is,B.rK)
s=o.fX
r=s!=null&&!s.gN(s)
s=o.is
q=s!=null&&!s.gN(s)
s=A.a([],t.T)
if(r){p=o.fX
p.toString
B.c.I(s,p)}B.c.I(s,c)
if(q){p=o.is
p.toString
B.c.I(s,p)}o.CT(a,b,s)},
lQ(){this.vc()
this.is=this.fX=null}}
A.VN.prototype={}
A.Jv.prototype={
Rr(a){var s,r,q,p,o=this
try{r=o.K
if(r!==""){q=$.asc()
s=$.aq().yx(q)
s.AJ($.asd())
s.ro(r)
r=s.bd()
o.af!==$&&A.eA()
o.af=r}else{o.af!==$&&A.eA()
o.af=null}}catch(p){}},
gjT(){return!0},
jm(a){return!0},
cf(a){return a.bC(B.Vk)},
aH(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
try{p=a.gbG(a)
o=i.k3
n=b.a
m=b.b
l=o.a
o=o.b
k=$.aq().bk()
k.sak(0,$.asb())
p.cl(new A.C(n,m,n+l,m+o),k)
p=i.af
p===$&&A.b()
if(p!=null){s=i.k3.a
r=0
q=0
if(s>328){s-=128
r+=64}p.iA(new A.kE(s))
if(i.k3.b>96+p.gbS(p)+12)q+=96
a.gbG(a).ks(p,b.U(0,new A.t(r,q)))}}catch(j){}}}
A.u_.prototype={
E(){return"FlexFit."+this.b}}
A.du.prototype={
i(a){return this.q7(0)+"; flex="+A.h(this.e)+"; fit="+A.h(this.f)}}
A.uO.prototype={
E(){return"MainAxisSize."+this.b}}
A.mt.prototype={
E(){return"MainAxisAlignment."+this.b}}
A.k6.prototype={
E(){return"CrossAxisAlignment."+this.b}}
A.pm.prototype={
ex(a){if(!(a.e instanceof A.du))a.e=new A.du(null,null,B.j)},
eO(a){if(this.K===B.aT)return this.IQ(a)
return this.a24(a)},
qo(a){switch(this.K.a){case 0:return a.b
case 1:return a.a}},
qp(a){switch(this.K.a){case 0:return a.a
case 1:return a.b}},
cf(a){var s
if(this.av===B.nn)return B.R
s=this.E5(a,A.ai6())
switch(this.K.a){case 0:return a.bC(new A.a6(s.a,s.b))
case 1:return a.bC(new A.a6(s.b,s.a))}},
E5(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.K===B.aT?a2.b:a2.d,a0=a<1/0,a1=c.a7$
for(s=t.uc,r=a2.b,q=a2.d,p=b,o=0,n=0,m=0;a1!=null;){l=a1.e
l.toString
s.a(l)
k=l.e
if(k==null)k=0
if(k>0){o+=k
p=a1}else{if(c.av===B.nm)switch(c.K.a){case 0:j=A.o4(q,b)
break
case 1:j=A.o4(b,r)
break
default:j=b}else switch(c.K.a){case 0:j=new A.aQ(0,1/0,0,q)
break
case 1:j=new A.aQ(0,r,0,1/0)
break
default:j=b}i=a3.$2(a1,j)
m+=c.qp(i)
n=Math.max(n,A.iF(c.qo(i)))}a1=l.ab$}h=Math.max(0,(a0?a:0)-m)
if(o>0){g=a0?h/o:0/0
a1=c.a7$
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
switch((l==null?B.nA:l).a){case 0:if(d.b!==d)A.K(A.a1g(d.a))
d.b=e
break
case 1:if(d.b!==d)A.K(A.a1g(d.a))
d.b=0
break}if(c.av===B.nm)switch(c.K.a){case 0:l=d.b
if(l===d)A.K(A.h4(d.a))
j=new A.aQ(l,e,q,q)
break
case 1:l=d.b
if(l===d)A.K(A.h4(d.a))
j=new A.aQ(r,r,l,e)
break
default:j=b}else switch(c.K.a){case 0:l=d.b
if(l===d)A.K(A.h4(d.a))
j=new A.aQ(l,e,0,q)
break
case 1:l=d.b
if(l===d)A.K(A.h4(d.a))
j=new A.aQ(0,r,l,e)
break
default:j=b}i=a3.$2(a1,j)
m+=c.qp(i)
f+=e
n=Math.max(n,A.iF(c.qo(i)))}l=a1.e
l.toString
a1=s.a(l).ab$}}return new A.adk(a0&&c.ac===B.B?a:m,n,m)},
bJ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.k.a(A.z.prototype.ga0.call(a)),a1=a.E5(a0,A.ai7()),a2=a1.a,a3=a1.b
if(a.av===B.nn){s=a.a7$
for(r=t.uc,q=0,p=0,o=0;s!=null;){n=a.A
n.toString
m=s.uA(n,!0)
if(m!=null){q=Math.max(q,m)
p=Math.max(m,p)
o=Math.max(s.k3.b-m,o)
a3=Math.max(p+o,a3)}n=s.e
n.toString
s=r.a(n).ab$}}else q=0
switch(a.K.a){case 0:r=a.k3=a0.bC(new A.a6(a2,a3))
a2=r.a
a3=r.b
break
case 1:r=a.k3=a0.bC(new A.a6(a3,a2))
a2=r.b
a3=r.a
break}l=a2-a1.c
a.ah=Math.max(0,-l)
k=Math.max(0,l)
j=A.b6("leadingSpace")
i=A.b6("betweenSpace")
r=A.aqx(a.K,a.b0,a.b6)
h=r===!1
switch(a.af.a){case 0:j.sc6(0)
i.sc6(0)
break
case 1:j.sc6(k)
i.sc6(0)
break
case 2:j.sc6(k/2)
i.sc6(0)
break
case 3:j.sc6(0)
r=a.dz$
i.sc6(r>1?k/(r-1):0)
break
case 4:r=a.dz$
i.sc6(r>0?k/r:0)
j.sc6(i.aD()/2)
break
case 5:r=a.dz$
i.sc6(r>0?k/(r+1):0)
j.sc6(i.aD())
break}g=h?a2-j.aD():j.aD()
s=a.a7$
for(r=t.uc,n=a3/2,f=i.a;s!=null;){e=s.e
e.toString
r.a(e)
d=a.av
switch(d.a){case 0:case 1:if(A.aqx(A.aDN(a.K),a.b0,a.b6)===(d===B.bb))c=0
else{d=s.k3
d.toString
c=a3-a.qo(d)}break
case 2:d=s.k3
d.toString
c=n-a.qo(d)/2
break
case 3:c=0
break
case 4:if(a.K===B.aT){d=a.A
d.toString
m=s.uA(d,!0)
c=m!=null?q-m:0}else c=0
break
default:c=null}if(h){d=s.k3
d.toString
g-=a.qp(d)}switch(a.K.a){case 0:e.a=new A.t(g,c)
break
case 1:e.a=new A.t(c,g)
break}if(h){d=i.b
if(d===i)A.K(A.h4(f))
g-=d}else{d=s.k3
d.toString
d=a.qp(d)
b=i.b
if(b===i)A.K(A.h4(f))
g+=d+b}s=e.ab$}},
cW(a,b){return this.yE(a,b)},
aH(a,b){var s,r,q,p=this
if(!(p.ah>1e-10)){p.oi(a,b)
return}s=p.k3
if(s.gN(s))return
s=p.b3
r=p.cx
r===$&&A.b()
q=p.k3
s.saZ(0,a.kM(r,b,new A.C(0,0,0+q.a,0+q.b),p.ga25(),p.cH,s.a))},
m(){this.b3.saZ(0,null)
this.Qd()},
j4(a){var s
switch(this.cH.a){case 0:return null
case 1:case 2:case 3:if(this.ah>1e-10){s=this.k3
s=new A.C(0,0,0+s.a,0+s.b)}else s=null
return s}},
c0(){var s=this.Pe()
return s}}
A.adk.prototype={}
A.PT.prototype={
aq(a){var s,r,q
this.eB(a)
s=this.a7$
for(r=t.uc;s!=null;){s.aq(a)
q=s.e
q.toString
s=r.a(q).ab$}},
al(a){var s,r,q
this.dW(0)
s=this.a7$
for(r=t.uc;s!=null;){s.al(0)
q=s.e
q.toString
s=r.a(q).ab$}}}
A.PU.prototype={}
A.z4.prototype={
m(){var s,r,q
for(s=this.Jt$,r=s.length,q=0;q<r;++q)s[q].m()
this.i6()},
f3(){this.Pd()}}
A.Jy.prototype={
Wp(){var s=this
if(s.K!=null)return
s.K=s.cU
s.af=!1},
Fu(){this.af=this.K=null
this.au()},
sfq(a,b){var s=this,r=s.ac
if(b==r)return
if(b!=null&&r!=null&&b.Kp(r)){b.m()
return}r=s.ac
if(r!=null)r.m()
s.ac=b
s.au()
if(s.b0==null||s.b6==null)s.a8()},
sbm(a,b){if(b==this.b0)return
this.b0=b
this.a8()},
sbS(a,b){if(b==this.b6)return
this.b6=b
this.a8()},
sMU(a,b){if(b===this.A)return
this.A=b
this.a8()},
a_9(){this.ah=null},
sak(a,b){return},
stZ(a,b){return},
sme(a){if(a===this.bv)return
this.bv=a
this.au()},
sa0Y(a){return},
szh(a){if(a==this.e3)return
this.e3=a
this.au()},
sel(a){if(a.k(0,this.cU))return
this.cU=a
this.Fu()},
sa6g(a,b){if(b===this.cI)return
this.cI=b
this.au()},
sa0A(a){return},
szE(a){if(a===this.eT)return
this.eT=a
this.au()},
sa4W(a){return},
sbK(a){if(this.eU==a)return
this.eU=a
this.Fu()},
szF(a){return},
GL(a){var s,r,q=this,p=q.b0
a=A.o4(q.b6,p).oB(a)
p=q.ac
if(p==null)return new A.a6(A.H(0,a.a,a.b),A.H(0,a.c,a.d))
p=p.gbm(p)
s=q.A
r=q.ac
return a.oc(new A.a6(p/s,r.gbS(r)/q.A))},
jm(a){return!0},
cf(a){return this.GL(a)},
bJ(){this.k3=this.GL(t.k.a(A.z.prototype.ga0.call(this)))},
aq(a){this.eB(a)},
al(a){this.dW(0)},
aH(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(d.ac==null)return
d.Wp()
s=a.gbG(a)
r=d.k3
q=b.a
p=b.b
o=r.a
r=r.b
n=d.ac
n.toString
m=d.av
l=d.A
k=d.ah
j=d.e3
i=d.K
i.toString
h=d.jg
g=d.cI
f=d.af
f.toString
e=d.eT
A.arA(i,s,h,k,m,d.bv,j,f,n,e,!1,1,new A.C(q,p,q+o,p+r),g,l)},
m(){var s=this.ac
if(s!=null)s.m()
this.ac=null
this.i6()}}
A.rA.prototype={
i(a){return"AnnotationEntry(annotation: "+this.a.i(0)+", localPosition: "+this.b.i(0)+")"}}
A.B5.prototype={}
A.uB.prototype={
i7(){},
rd(a){var s,r=this
r.e+=a
s=t.ow
if(s.a(A.L.prototype.gaL.call(r,r))!=null)s.a(A.L.prototype.gaL.call(r,r)).rd(a)},
np(a){var s,r,q
for(s=this.d,s=A.aA(s.gaT(s),!0,t.M),r=s.length,q=0;q<r;++q)s[q].$0()},
m(){var s=this.z
if(s!=null)s.m()
this.z=null},
e7(){if(this.y)return
this.y=!0},
sio(a){var s,r=this,q=r.z
if(q!=null)q.m()
r.z=a
q=t.ow
if(q.a(A.L.prototype.gaL.call(r,r))!=null){q.a(A.L.prototype.gaL.call(r,r)).toString
s=!0}else s=!1
if(s)q.a(A.L.prototype.gaL.call(r,r)).e7()},
ur(){this.y=this.y||!1},
j7(a){var s
this.e7()
s=a.e
if(s!==0)this.rd(-s)
this.v0(a)},
mE(a){var s,r,q=this,p=t.ow.a(A.L.prototype.gaL.call(q,q))
if(p!=null){s=q.as
r=q.Q
if(s==null)p.CW=r
else s.Q=r
r=q.Q
if(r==null)p.cx=s
else r.as=s
q.Q=q.as=null
p.j7(q)
q.w.saZ(0,null)}},
eV(a,b,c){return!1},
JA(a,b,c){var s=A.a([],c.h("w<rA<0>>"))
this.eV(new A.B5(s,c.h("B5<0>")),b,!0,c)
return s.length===0?null:B.c.gJ(s).a},
RS(a){var s,r=this
if(!r.y&&r.z!=null){s=r.z
s.toString
a.a_Y(s)
return}r.ht(a)
r.y=!1},
c0(){var s=this.NY()
return s+(this.b==null?" DETACHED":"")}}
A.FS.prototype={
saZ(a,b){var s=this.a
if(b==null?s==null:b===s)return
if(s!=null)if(--s.x===0)s.m()
this.a=b
if(b!=null)++b.x},
i(a){var s=this.a
return"LayerHandle("+(s!=null?J.d6(s):"DISPOSED")+")"}}
A.IV.prototype={
sL9(a){var s
this.e7()
s=this.cx
if(s!=null)s.m()
this.cx=a},
m(){this.sL9(null)
this.CC()},
ht(a){var s=this.cx
s.toString
a.a_W(B.j,s,this.cy,this.db)},
eV(a,b,c){return!1}}
A.IO.prototype={
ht(a){a.a_V(this.cx,this.CW)
a.Nh(this.cy)
a.Na(!1)
a.N9(!1)},
eV(a,b,c){return!1}}
A.eG.prototype={
np(a){var s
this.Oq(a)
if(!a)return
s=this.CW
for(;s!=null;){s.np(!0)
s=s.Q}},
a0r(a){var s=this
s.ur()
s.ht(a)
if(s.e>0)s.np(!0)
s.y=!1
return a.bd()},
m(){this.AT()
this.d.a_(0)
this.CC()},
ur(){var s,r=this
r.Or()
s=r.CW
for(;s!=null;){s.ur()
r.y=r.y||s.y
s=s.Q}},
eV(a,b,c,d){var s,r,q
for(s=this.cx,r=a.a;s!=null;s=s.as){if(s.eV(a,b,!0,d))return!0
q=r.length
if(q!==0)return!1}return!1},
aq(a){var s
this.v_(a)
s=this.CW
for(;s!=null;){s.aq(a)
s=s.Q}},
al(a){var s
this.dW(0)
s=this.CW
for(;s!=null;){s.al(0)
s=s.Q}this.np(!1)},
hv(a,b){var s,r=this
r.e7()
s=b.e
if(s!==0)r.rd(s)
r.Cj(b)
s=b.as=r.cx
if(s!=null)s.Q=b
r.cx=b
if(r.CW==null)r.CW=b
b.w.saZ(0,b)},
AT(){var s,r,q,p=this,o=p.CW
for(s=t.ow;o!=null;o=r){r=o.Q
o.Q=o.as=null
p.e7()
q=o.e
if(q!==0){q=-q
p.e+=q
if(s.a(A.L.prototype.gaL.call(p,p))!=null)s.a(A.L.prototype.gaL.call(p,p)).rd(q)}p.v0(o)
o.w.saZ(0,null)}p.cx=p.CW=null},
ht(a){this.kf(a)},
kf(a){var s=this.CW
for(;s!=null;){s.RS(a)
s=s.Q}}}
A.hX.prototype={
sbI(a,b){if(!b.k(0,this.p1))this.e7()
this.p1=b},
eV(a,b,c,d){return this.n5(a,b.aa(0,this.p1),!0,d)},
ht(a){var s=this,r=s.p1
s.sio(a.Lk(r.a,r.b,t.cV.a(s.z)))
s.kf(a)
a.hQ()}}
A.oc.prototype={
eV(a,b,c,d){if(!this.p1.B(0,b))return!1
return this.n5(a,b,!0,d)},
ht(a){var s=this,r=s.p1
r.toString
s.sio(a.a5N(r,s.p2,t.CW.a(s.z)))
s.kf(a)
a.hQ()}}
A.t1.prototype={
eV(a,b,c,d){if(!this.p1.B(0,b))return!1
return this.n5(a,b,!0,d)},
ht(a){var s=this,r=s.p1
r.toString
s.sio(a.a5L(r,s.p2,t.cB.a(s.z)))
s.kf(a)
a.hQ()}}
A.t0.prototype={
eV(a,b,c,d){if(!this.p1.B(0,b))return!1
return this.n5(a,b,!0,d)},
ht(a){var s=this,r=s.p1
r.toString
s.sio(a.a5K(r,s.p2,t.xS.a(s.z)))
s.kf(a)
a.hQ()}}
A.kZ.prototype={
sbs(a,b){var s=this
if(b.k(0,s.ai))return
s.ai=b
s.ap=!0
s.e7()},
ht(a){var s,r,q=this
q.ae=q.ai
if(!q.p1.k(0,B.j)){s=q.p1
s=A.v6(s.a,s.b,0)
r=q.ae
r.toString
s.cL(0,r)
q.ae=s}q.sio(a.a5P(q.ae.a,t.Al.a(q.z)))
q.kf(a)
a.hQ()},
a_1(a){var s,r=this
if(r.ap){s=r.ai
s.toString
r.ao=A.HQ(A.ajW(s))
r.ap=!1}s=r.ao
if(s==null)return null
return A.cw(s,a)},
eV(a,b,c,d){var s=this.a_1(b)
if(s==null)return!1
return this.OO(a,s,!0,d)}}
A.Il.prototype={
sI_(a,b){var s=this,r=s.ai
if(b!=r){if(b===255||r===255)s.sio(null)
s.ai=b
s.e7()}},
ht(a){var s,r,q,p=this
if(p.CW==null){p.sio(null)
return}s=p.ai
s.toString
r=p.p1
q=p.z
if(s<255)p.sio(a.a5O(s,r,t.i6.a(q)))
else p.sio(a.Lk(r.a,r.b,t.cV.a(q)))
p.kf(a)
a.hQ()}}
A.rz.prototype={
eV(a,b,c,d){var s,r,q,p=this,o=p.n5(a,b,!0,d),n=a.a
if(n.length!==0&&!0)return o
s=p.p2
if(s!=null){r=p.p3
q=r.a
r=r.b
s=!new A.C(q,r,q+s.a,r+s.b).B(0,b)}else s=!1
if(s)return o
if(A.aD(p.$ti.c)===A.aD(d)){o=o||!1
n.push(new A.rA(d.a(p.p1),b.aa(0,p.p3),d.h("rA<0>")))}return o}}
A.Oa.prototype={}
A.OF.prototype={
a6j(a){var s=this.a
this.a=a
return s},
i(a){var s="<optimized out>#",r=A.bM(this.b),q=this.a.a
return s+A.bM(this)+"("+("latestEvent: "+(s+r))+", "+("annotations: [list of "+q+"]")+")"}}
A.OG.prototype={
gii(a){var s=this.c
return s.gii(s)}}
A.I_.prototype={
F8(a){var s,r,q,p,o,n,m=t.mC,l=A.hT(null,null,null,m,t.rA)
for(s=a.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
o=p.a
if(m.b(o)){n=p.b
n.toString
l.l(0,o,n)}}return l},
TQ(a,b){var s=a.b,r=s.gbz(s)
s=a.b
if(!this.b.P(0,s.gii(s)))return A.hT(null,null,null,t.mC,t.rA)
return this.F8(b.$1(r))},
EW(a){var s,r
A.axF(a)
s=a.b
r=A.n(s).h("b8<1>")
this.a.a32(a.gii(a),a.d,A.ku(new A.b8(s,r),new A.a2i(),r.h("o.E"),t.oR))},
a72(a,b){var s,r,q,p,o
if(a.gci(a)!==B.cE)return
if(t.zs.b(a))return
s=t.yg.b(a)?A.anf():b.$0()
r=a.gii(a)
q=this.b
p=q.j(0,r)
if(!A.axG(p,a))return
o=q.a
new A.a2l(this,p,a,r,s).$0()
if(o!==0!==(q.a!==0))this.aA()},
a6X(a){new A.a2j(this,a).$0()}}
A.a2i.prototype={
$1(a){return a.gIN(a)},
$S:237}
A.a2l.prototype={
$0(){var s=this
new A.a2k(s.a,s.b,s.c,s.d,s.e).$0()},
$S:0}
A.a2k.prototype={
$0(){var s,r,q,p,o,n=this,m=null,l=n.b
if(l==null){s=n.c
if(t.yg.b(s))return
n.a.b.l(0,n.d,new A.OF(A.hT(m,m,m,t.mC,t.rA),s))}else{s=n.c
if(t.yg.b(s))n.a.b.u(0,s.gii(s))}r=n.a
q=r.b.j(0,n.d)
if(q==null){l.toString
q=l}p=q.b
q.b=s
o=t.yg.b(s)?A.hT(m,m,m,t.mC,t.rA):r.F8(n.e)
r.EW(new A.OG(q.a6j(o),o,p,s))},
$S:0}
A.a2j.prototype={
$0(){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.b,r=r.gaT(r),r=new A.dV(J.at(r.a),r.b),q=this.b,p=A.n(r).z[1];r.q();){o=r.a
if(o==null)o=p.a(o)
n=o.b
m=s.TQ(o,q)
l=o.a
o.a=m
s.EW(new A.OG(l,m,n,null))}},
$S:0}
A.a2g.prototype={
$2(a,b){var s
if(!this.a.P(0,a))if(a.gBm()&&a.gAl(a)!=null){s=a.gAl(a)
s.toString
s.$1(this.b.aM(this.c.j(0,a)))}},
$S:238}
A.a2h.prototype={
$1(a){return!this.a.P(0,a)},
$S:239}
A.Sh.prototype={}
A.cg.prototype={
al(a){},
i(a){return"<none>"}}
A.kD.prototype={
f2(a,b){var s,r=this
if(a.gdN()){r.n4()
if(!a.cy){s=a.ay
s===$&&A.b()
s=!s}else s=!0
if(s)A.anY(a,null,!0)
else if(a.db)A.ay0(a)
s=a.ch.a
s.toString
t.cY.a(s)
s.sbI(0,b)
r.ya(s)}else{s=a.ay
s===$&&A.b()
if(s){a.ch.saZ(0,null)
a.x8(r,b)}else a.x8(r,b)}},
ya(a){a.mE(0)
this.a.hv(0,a)},
gbG(a){var s,r,q=this
if(q.e==null){q.c=A.ay3(q.b)
s=$.aq()
r=s.a1M()
q.d=r
q.e=s.a1F(r,null)
r=q.c
r.toString
q.a.hv(0,r)}s=q.e
s.toString
return s},
n4(){var s,r=this
if(r.e==null)return
s=r.c
s.toString
s.sL9(r.d.a2q())
r.e=r.d=r.c=null},
C1(){var s=this.c
if(s!=null)if(!s.cy){s.cy=!0
s.e7()}},
ps(a,b,c,d){var s,r=this
if(a.CW!=null)a.AT()
r.n4()
r.ya(a)
s=r.a1H(a,d==null?r.b:d)
b.$2(s,c)
s.n4()},
Lj(a,b,c){return this.ps(a,b,c,null)},
a1H(a,b){return new A.kD(a,b)},
kM(a,b,c,d,e,f){var s,r,q=this
if(e===B.l){d.$2(q,b)
return null}s=c.di(b)
if(a){if(f==null){r=new A.oc(B.T,A.y(t.S,t.M),A.aw())
r.i7()}else r=f
if(!s.k(0,r.p1)){r.p1=s
r.e7()}if(e!==r.p2){r.p2=e
r.e7()}q.ps(r,d,b,s)
return r}else{q.a0R(s,e,s,new A.a39(q,d,b))
return null}},
a5M(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.l){e.$2(p,b)
return null}s=c.di(b)
r=d.di(b)
if(a){if(g==null){q=new A.t1(B.n8,A.y(t.S,t.M),A.aw())
q.i7()}else q=g
if(!r.k(0,q.p1)){q.p1=r
q.e7()}if(f!==q.p2){q.p2=f
q.e7()}p.ps(q,e,b,s)
return q}else{p.a0P(r,f,s,new A.a38(p,e,b))
return null}},
Li(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.l){e.$2(p,b)
return null}s=c.di(b)
r=d.di(b)
if(a){if(g==null){q=new A.t0(B.n8,A.y(t.S,t.M),A.aw())
q.i7()}else q=g
if(r!==q.p1){q.p1=r
q.e7()}if(f!==q.p2){q.p2=f
q.e7()}p.ps(q,e,b,s)
return q}else{p.a0O(r,f,s,new A.a37(p,e,b))
return null}},
pt(a,b,c,d,e){var s,r=this,q=b.a,p=b.b,o=A.v6(q,p,0)
o.cL(0,c)
o.aB(0,-q,-p)
if(a){s=e==null?A.aoW(null):e
s.sbs(0,o)
r.ps(s,d,b,A.anJ(o,r.b))
return s}else{q=r.gbG(r)
q.cB(0)
q.aj(0,o.a)
d.$2(r,b)
r.gbG(r).cw(0)
return null}},
a5Q(a,b,c,d){return this.pt(a,b,c,d,null)},
Ll(a,b,c,d){var s=d==null?A.anV():d
s.sI_(0,b)
s.sbI(0,a)
this.Lj(s,c,B.j)
return s},
i(a){return"PaintingContext#"+A.eT(this)+"(layer: "+this.a.i(0)+", canvas bounds: "+this.b.i(0)+")"}}
A.a39.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.a38.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.a37.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.VB.prototype={}
A.a6s.prototype={
m(){var s,r=this.b
if(r!=null)this.a.as.G(0,r)
r=this.a
if(--r.at===0){s=r.as
s.b.a_(0)
s.c.a_(0)
s.d.a_(0)
s.dX()
r.as=null
r.d.$0()}}}
A.IW.prototype={
mG(){this.a.$0()},
sa6x(a){var s=this.e
if(s===a)return
if(s!=null)s.al(0)
this.e=a
a.aq(this)},
a2S(){var s,r,q,p,o,n,m,l,k,j,i,h=this
try{for(p=t.W,o=t.By;n=h.r,n.length!==0;){s=n
h.r=A.a([],o)
n=s
m=new A.a3k()
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
i.qc(m,l,k,j.c)
B.c.I(n,i)
break}}q=J.aO(s,r)
if(q.z){n=q
n=p.a(A.L.prototype.gbw.call(n))===h}else n=!1
if(n)q.WN()}h.f=!1}}finally{h.f=!1}},
Tw(a){try{a.$0()}finally{this.f=!0}},
a2R(){var s,r,q,p,o=this.y
B.c.dj(o,new A.a3j())
for(s=o.length,r=t.W,q=0;q<o.length;o.length===s||(0,A.P)(o),++q){p=o[q]
if(p.CW&&r.a(A.L.prototype.gbw.call(p))===this)p.Hj()}B.c.a_(o)},
a2T(){var s,r,q,p,o,n,m,l,k
try{s=this.z
this.z=A.a([],t.By)
for(q=s,J.Tt(q,new A.a3l()),p=q.length,o=t.W,n=t.cY,m=0;m<q.length;q.length===p||(0,A.P)(q),++m){r=q[m]
if(r.cy||r.db){l=r
l=o.a(A.L.prototype.gbw.call(l))===this}else l=!1
if(l)if(r.ch.a.b!=null)if(r.cy)A.anY(r,null,!1)
else{l=r
k=l.ch.a
k.toString
l.pH(n.a(k))
l.db=!1}else r.Zy()}}finally{}},
a2r(a){var s,r=this
if(++r.at===1){s=t.ju
r.as=new A.wJ(r.c,A.b3(s),A.y(t.S,s),A.b3(s),$.by())
r.b.$0()}if(a!=null)r.as.Y(0,a)
return new A.a6s(r,a)},
Jl(){return this.a2r(null)},
a2U(){var s,r,q,p,o,n,m,l,k=this
if(k.as==null)return
try{q=k.ay
p=A.aA(q,!0,A.n(q).c)
B.c.dj(p,new A.a3m())
s=p
q.a_(0)
for(q=s,o=q.length,n=t.W,m=0;m<q.length;q.length===o||(0,A.P)(q),++m){r=q[m]
if(r.dy){l=r
l=n.a(A.L.prototype.gbw.call(l))===k}else l=!1
if(l)r.a_l()}k.as.N7()}finally{}}}
A.a3k.prototype={
$2(a,b){return a.a-b.a},
$S:48}
A.a3j.prototype={
$2(a,b){return a.a-b.a},
$S:48}
A.a3l.prototype={
$2(a,b){return b.a-a.a},
$S:48}
A.a3m.prototype={
$2(a,b){return a.a-b.a},
$S:48}
A.z.prototype={
aJ(){var s=this
s.cx=s.gdN()||s.gnX()
s.ay=s.gdN()},
f3(){var s=this
s.a8()
s.mu()
s.au()
s.b2()
s.aU(new A.a4z())},
m(){this.ch.saZ(0,null)},
ex(a){if(!(a.e instanceof A.cg))a.e=new A.cg()},
ic(a){var s=this
s.ex(a)
s.a8()
s.mu()
s.b2()
s.Cj(a)},
j7(a){var s=this
a.DR()
a.e.al(0)
a.e=null
s.v0(a)
s.a8()
s.mu()
s.b2()},
aU(a){},
qW(a,b,c){A.e7(new A.bJ(b,c,"rendering library",A.bo("during "+a+"()"),new A.a4v(this),!1))},
aq(a){var s=this
s.v_(a)
if(s.z&&s.Q!=null){s.z=!1
s.a8()}if(s.CW){s.CW=!1
s.mu()}if(s.cy&&s.ch.a!=null){s.cy=!1
s.au()}if(s.dy&&s.gxt().a){s.dy=!1
s.b2()}},
ga0(){var s=this.at
if(s==null)throw A.c(A.a5("A RenderObject does not have any constraints before it has been laid out."))
return s},
a8(){var s,r=this
if(r.z)return
s=r.Q
if(s==null){r.z=!0
if(r.c!=null)r.tN()
return}if(s!==r)r.tN()
else{r.z=!0
s=t.W
if(s.a(A.L.prototype.gbw.call(r))!=null){s.a(A.L.prototype.gbw.call(r)).r.push(r)
s.a(A.L.prototype.gbw.call(r)).mG()}}},
tN(){this.z=!0
var s=this.c
s.toString
t.d.a(s)
if(!this.as)s.a8()},
DR(){var s=this
if(s.Q!==s){s.Q=null
s.aU(A.arx())}},
Ys(){var s,r,q=this,p=q.Q
if(p===q)return
s=t.B2.a(q.c)
r=s==null?null:s.Q
if(r!=p){q.Q=r
q.aU(A.ary())}},
WN(){var s,r,q,p=this
try{p.bJ()
p.b2()}catch(q){s=A.ae(q)
r=A.au(q)
p.qW("performLayout",s,r)}p.z=!1
p.au()},
cv(a,b){var s,r,q,p,o,n,m,l=this
if(!b||l.gjT()||a.gKw()||!(l.c instanceof A.z))o=l
else{n=l.c
n.toString
n=t.d.a(n).Q
n.toString
o=n}if(!l.z&&a.k(0,l.at)){if(o!==l.Q){l.Q=o
l.aU(A.ary())}return}l.at=a
n=l.Q
if(n!=null&&o!==n)l.aU(A.arx())
l.Q=o
if(l.gjT())try{l.po()}catch(m){s=A.ae(m)
r=A.au(m)
l.qW("performResize",s,r)}try{l.bJ()
l.b2()}catch(m){q=A.ae(m)
p=A.au(m)
l.qW("performLayout",q,p)}l.z=!1
l.au()},
gjT(){return!1},
Kn(a,b){var s=this
s.as=!0
try{t.W.a(A.L.prototype.gbw.call(s)).Tw(new A.a4y(s,a,b))}finally{s.as=!1}},
gdN(){return!1},
gnX(){return!1},
pH(a){return a==null?A.axV(B.j):a},
mu(){var s,r,q,p=this
if(p.CW)return
s=p.CW=!0
r=p.c
if(r instanceof A.z){if(r.CW)return
q=p.ay
q===$&&A.b()
if((q?!p.gdN():s)&&!r.gdN()){r.mu()
return}}s=t.W
if(s.a(A.L.prototype.gbw.call(p))!=null)s.a(A.L.prototype.gbw.call(p)).y.push(p)},
Hj(){var s,r,q=this
if(!q.CW)return
s=q.cx
s===$&&A.b()
q.cx=!1
q.aU(new A.a4w(q))
if(q.gdN()||q.gnX())q.cx=!0
if(!q.gdN()){r=q.ay
r===$&&A.b()}else r=!1
if(r){q.db=q.cy=!1
s=t.W.a(A.L.prototype.gbw.call(q))
if(s!=null)B.c.u(s.z,q)
q.CW=!1
q.au()}else if(s!==q.cx){q.CW=!1
q.au()}else q.CW=!1},
au(){var s,r=this
if(r.cy)return
r.cy=!0
if(r.gdN()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=t.W
if(s.a(A.L.prototype.gbw.call(r))!=null){s.a(A.L.prototype.gbw.call(r)).z.push(r)
s.a(A.L.prototype.gbw.call(r)).mG()}}else{s=r.c
if(s instanceof A.z)s.au()
else{s=t.W
if(s.a(A.L.prototype.gbw.call(r))!=null)s.a(A.L.prototype.gbw.call(r)).mG()}}},
a4U(){var s,r=this
if(r.db||r.cy)return
r.db=!0
if(r.gdN()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=t.W
if(s.a(A.L.prototype.gbw.call(r))!=null){s.a(A.L.prototype.gbw.call(r)).z.push(r)
s.a(A.L.prototype.gbw.call(r)).mG()}}else r.au()},
Zy(){var s,r=this.c
for(;r instanceof A.z;){if(r.gdN()){s=r.ch.a
if(s==null)break
if(s.b!=null)break
r.cy=!0}r=r.c}},
x8(a,b){var s,r,q,p=this
if(p.z)return
p.db=p.cy=!1
p.ay=p.gdN()
try{p.aH(a,b)}catch(q){s=A.ae(q)
r=A.au(q)
p.qW("paint",s,r)}},
aH(a,b){},
ds(a,b){},
mB(a){return!0},
bA(a,b){var s,r,q,p,o,n,m,l,k=b==null
if(k){s=t.W.a(A.L.prototype.gbw.call(this)).e
if(s instanceof A.z)b=s}r=A.a([],t.By)
q=t.d
p=this
while(p!==b){r.push(p)
o=p.c
o.toString
q.a(o)
p=o}if(!k){b.toString
r.push(b)}n=new A.bf(new Float64Array(16))
n.dg()
for(m=r.length-1;m>0;m=l){l=m-1
r[m].ds(r[l],n)}return n},
j4(a){return null},
yJ(a){return null},
eR(a){},
uN(a){var s
if(t.W.a(A.L.prototype.gbw.call(this)).as==null)return
s=this.fr
if(s!=null&&!s.as)s.N6(a)
else{s=this.c
if(s!=null)t.d.a(s).uN(a)}},
gxt(){var s,r=this
if(r.dx==null){s=A.pD()
r.dx=s
r.eR(s)}s=r.dx
s.toString
return s},
lQ(){this.dy=!0
this.fr=null
this.aU(new A.a4x())},
b2(){var s,r,q,p,o,n,m=this
if(m.b==null||t.W.a(A.L.prototype.gbw.call(m)).as==null){m.dx=null
return}if(m.fr!=null){s=m.dx
s=s==null?null:s.a
r=s===!0}else r=!1
m.dx=null
q=m.gxt().a&&r
s=t.d
p=m
while(!0){if(!(!q&&p.c instanceof A.z))break
if(p!==m&&p.dy)break
p.dy=!0
o=p.c
o.toString
s.a(o)
if(o.dx==null){n=A.pD()
o.dx=n
o.eR(n)}q=o.dx.a
if(q&&o.fr==null)return
p=o}if(p!==m&&m.fr!=null&&m.dy)t.W.a(A.L.prototype.gbw.call(m)).ay.u(0,m)
if(!p.dy){p.dy=!0
s=t.W
if(s.a(A.L.prototype.gbw.call(m))!=null){s.a(A.L.prototype.gbw.call(m)).ay.C(0,p)
s.a(A.L.prototype.gbw.call(m)).mG()}}},
a_l(){var s,r,q,p,o,n,m=this,l=null
if(m.z)return
s=m.fr
if(s==null)s=l
else{s=t.aa.a(A.L.prototype.gaL.call(s,s))
if(s==null)s=l
else s=s.at||s.as}r=t.sP.a(m.EP(s===!0))
q=A.a([],t.T)
s=m.fr
p=s==null
o=p?l:s.x
n=p?l:s.y
s=p?l:s.z
r.oa(s==null?0:s,n,o,q)
B.c.gbn(q)},
EP(a){var s,r,q,p,o,n,m,l,k=this,j={},i=k.gxt()
j.a=i.c
s=!i.d&&!i.a
r=t.yj
q=A.a([],r)
p=A.b3(t.sP)
k.h7(new A.a4u(j,k,a||i.p2,q,p,i,s))
for(o=A.jy(p,p.r),n=A.n(o).c;o.q();){m=o.d;(m==null?n.a(m):m).zU()}k.dy=!1
if(!(k.c instanceof A.z)){o=j.a
l=new A.Qe(A.a([],r),A.a([k],t.By),o)}else{o=j.a
if(s)l=new A.abw(A.a([],r),o)
else{l=new A.R3(a,i,A.a([],r),A.a([k],t.By),o)
if(i.a)l.x=!0}}l.I(0,q)
return l},
h7(a){this.aU(a)},
o3(a,b,c){a.jJ(0,t.d1.a(c),b)},
it(a,b){},
c0(){var s=A.bM(this)
return"<optimized out>#"+s},
i(a){return this.c0()},
ey(a,b,c,d){var s=this.c
if(s instanceof A.z)s.ey(a,b==null?this:b,c,d)},
mZ(){return this.ey(B.aK,null,B.u,null)},
l2(a,b){return this.ey(B.aK,a,B.u,b)},
$iao:1}
A.a4z.prototype={
$1(a){a.f3()},
$S:31}
A.a4v.prototype={
$0(){var s=A.a([],t.F),r=this.a
s.push(A.ajb("The following RenderObject was being processed when the exception was fired",B.FF,r))
s.push(A.ajb("RenderObject",B.FG,r))
return s},
$S:16}
A.a4y.prototype={
$0(){this.b.$1(this.c.a(this.a.ga0()))},
$S:0}
A.a4w.prototype={
$1(a){var s
a.Hj()
s=a.cx
s===$&&A.b()
if(s)this.a.cx=!0},
$S:31}
A.a4x.prototype={
$1(a){a.lQ()},
$S:31}
A.a4u.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a.EP(f.c)
if(e.a){B.c.a_(f.d)
f.e.a_(0)
if(!f.f.a)f.a.a=!0}for(s=e.gKe(),r=s.length,q=f.d,p=f.e,o=f.f,n=f.b,m=f.r,l=0;l<s.length;s.length===r||(0,A.P)(s),++l){k=s[l]
q.push(k)
k.b.push(n)
k.a02(o.ai)
if(o.b||!(n.c instanceof A.z)){k.zU()
continue}if(k.gkm()==null||m)continue
if(!o.Kq(k.gkm()))p.C(0,k)
j=q.length-1
for(i=0;i<j;++i){h=q[i]
g=k.gkm()
g.toString
if(!g.Kq(h.gkm())){p.C(0,k)
p.C(0,h)}}}},
$S:31}
A.aG.prototype={
saW(a){var s=this,r=s.A$
if(r!=null)s.j7(r)
s.A$=a
if(a!=null)s.ic(a)},
jD(){var s=this.A$
if(s!=null)this.AQ(s)},
aU(a){var s=this.A$
if(s!=null)a.$1(s)}}
A.e4.prototype={$icg:1}
A.av.prototype={
grE(){return this.dz$},
Fg(a,b){var s,r,q,p=this,o=a.e
o.toString
s=A.n(p).h("av.1")
s.a(o);++p.dz$
if(b==null){o=o.ab$=p.a7$
if(o!=null){o=o.e
o.toString
s.a(o).aS$=a}p.a7$=a
if(p.bD$==null)p.bD$=a}else{r=b.e
r.toString
s.a(r)
q=r.ab$
if(q==null){o.aS$=b
p.bD$=r.ab$=a}else{o.ab$=q
o.aS$=b
o=q.e
o.toString
s.a(o).aS$=r.ab$=a}}},
zC(a,b,c){this.ic(b)
this.Fg(b,c)},
I(a,b){},
G7(a){var s,r,q,p,o=this,n=a.e
n.toString
s=A.n(o).h("av.1")
s.a(n)
r=n.aS$
q=n.ab$
if(r==null)o.a7$=q
else{p=r.e
p.toString
s.a(p).ab$=q}q=n.ab$
if(q==null)o.bD$=r
else{q=q.e
q.toString
s.a(q).aS$=r}n.ab$=n.aS$=null;--o.dz$},
u(a,b){this.G7(b)
this.j7(b)},
tR(a,b){var s=this,r=a.e
r.toString
if(A.n(s).h("av.1").a(r).aS$==b)return
s.G7(a)
s.Fg(a,b)
s.a8()},
jD(){var s,r,q,p=this.a7$
for(s=A.n(this).h("av.1");p!=null;){r=p.a
q=this.a
if(r<=q){p.a=q+1
p.jD()}r=p.e
r.toString
p=s.a(r).ab$}},
aU(a){var s,r,q=this.a7$
for(s=A.n(this).h("av.1");q!=null;){a.$1(q)
r=q.e
r.toString
q=s.a(r).ab$}},
ga2N(a){return this.a7$},
a0H(a){var s=a.e
s.toString
return A.n(this).h("av.1").a(s).aS$},
a0F(a){var s=a.e
s.toString
return A.n(this).h("av.1").a(s).ab$}}
A.Jj.prototype={
vj(){this.a8()}}
A.af9.prototype={}
A.abw.prototype={
I(a,b){B.c.I(this.b,b)},
gKe(){return this.b}}
A.nD.prototype={
gKe(){return A.a([this],t.yj)},
a02(a){var s
if(a==null||a.a===0)return
s=this.c;(s==null?this.c=A.b3(t.xJ):s).I(0,a)}}
A.Qe.prototype={
oa(a,b,c,d){var s,r,q,p,o,n=this.b,m=B.c.gJ(n)
if(m.fr==null){s=B.c.gJ(n).gmY()
r=B.c.gJ(n)
r=t.W.a(A.L.prototype.gbw.call(r)).as
r.toString
q=$.aiH()
q=new A.bX(null,0,s,B.a0,q.p2,q.e,q.p3,q.f,q.ae,q.p4,q.R8,q.RG,q.rx,q.ry,q.to,q.x2,q.xr,q.y1)
q.aq(r)
m.fr=q}m=B.c.gJ(n).fr
m.toString
m.saP(0,B.c.gJ(n).gjQ())
p=A.a([],t.T)
for(n=this.e,s=n.length,o=0;o<n.length;n.length===s||(0,A.P)(n),++o)n[o].oa(0,b,c,p)
m.jJ(0,p,null)
d.push(m)},
gkm(){return null},
zU(){},
I(a,b){B.c.I(this.e,b)}}
A.R3.prototype={
oa(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(!h.x){s=h.b
B.c.gJ(s).fr=null
for(r=h.w,q=r.length,p=A.aj(s),o=p.c,p=p.h("eX<1>"),n=0;n<r.length;r.length===q||(0,A.P)(r),++n){m=r[n]
l=new A.eX(s,1,g,p)
l.qc(s,1,g,o)
B.c.I(m.b,l)
m.oa(a+h.f.x2,b,c,d)}return}s=h.b
if(s.length>1){k=new A.afa()
k.SS(c,b,s)}else k=g
r=h.e
q=!r
if(q){if(k==null)p=g
else{p=k.d
p===$&&A.b()
if(!p.gN(p)){p=k.c
p===$&&A.b()
p=p.KA()}else p=!0}p=p===!0}else p=!1
if(p)return
p=B.c.gJ(s)
if(p.fr==null)p.fr=A.a6u(g,B.c.gJ(s).gmY())
j=B.c.gJ(s).fr
j.sKt(r)
j.dx=h.c
j.z=a
if(a!==0){h.Et()
r=h.f
r.sil(0,r.x2+a)}if(k!=null){r=k.d
r===$&&A.b()
j.saP(0,r)
r=k.c
r===$&&A.b()
j.sbs(0,r)
j.x=k.b
j.y=k.a
if(q&&k.e){h.Et()
h.f.b7(B.lB,!0)}}i=A.a([],t.T)
for(r=h.w,q=r.length,n=0;n<r.length;r.length===q||(0,A.P)(r),++n){m=r[n]
p=j.x
m.oa(0,j.y,p,i)}r=h.f
if(r.a)B.c.gJ(s).o3(j,h.f,i)
else j.jJ(0,i,r)
d.push(j)},
gkm(){return this.x?null:this.f},
I(a,b){var s,r,q,p,o,n,m=this
for(s=b.length,r=m.w,q=0;q<b.length;b.length===s||(0,A.P)(b),++q){p=b[q]
r.push(p)
if(p.gkm()==null)continue
if(!m.r){m.f=m.f.a1l()
m.r=!0}o=m.f
n=p.gkm()
n.toString
o.ke(n)}},
Et(){var s,r,q=this
if(!q.r){s=q.f
r=A.pD()
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
r.ae=s.ae
r.ai=s.ai
r.y2=s.y2
r.bH=s.bH
r.bp=s.bp
r.be=s.be
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
zU(){this.x=!0}}
A.afa.prototype={
SS(a,b,c){var s,r,q,p,o,n,m=this,l=new A.bf(new Float64Array(16))
l.dg()
m.c=l
m.b=a
m.a=b
for(s=c.length-1;s>0;){r=c[s];--s
q=c[s]
a=r.yJ(q)
if(a!=null){m.b=a
m.a=A.app(m.a,r.j4(q))}else m.b=A.app(m.b,r.j4(q))
l=$.asX()
l.dg()
A.aAQ(r,q,m.c,l)
m.b=A.apq(m.b,l)
m.a=A.apq(m.a,l)}p=B.c.gJ(c)
l=m.b
l=l==null?p.gjQ():l.fs(p.gjQ())
m.d=l
o=m.a
if(o!=null){n=o.fs(l)
if(n.gN(n)){l=m.d
l=!l.gN(l)}else l=!1
m.e=l
if(!l)m.d=n}}}
A.PW.prototype={}
A.ii.prototype={
i(a){var s=A.a(["offset="+this.a.i(0)],t.s)
s.push(this.q7(0))
return B.c.b4(s,"; ")}}
A.w9.prototype={
ex(a){if(!(a.e instanceof A.ii))a.e=new A.ii(null,null,B.j)},
scr(a,b){var s=this,r=s.K
switch(r.d.aF(0,b).a){case 0:case 1:return
case 2:r.scr(0,b)
s.ac=s.af=null
s.wc(b)
s.au()
s.b2()
break
case 3:r.scr(0,b)
s.ac=s.af=s.bv=null
s.wc(b)
s.a8()
s.xf()
s.El()
s.Hz()
break}},
spv(a){var s=this
if(a==s.b0)return
s.xf()
s.El()
s.b0=a
s.Hz()},
Hz(){var s,r,q=this
if(q.b0==null)return
s=q.av
if(s==null)s=q.av=q.Uu()
r=q.b0
B.c.X(s,r.gfi(r))},
xf(){var s,r=this.b0
if(r==null||this.av==null)return
s=this.av
s.toString
B.c.X(s,r.gAS(r))},
Uu(){var s,r,q,p,o=this.K.d.LZ(!1),n=A.a([],t.sb)
for(s=o.length,r=0;r<s;){q=B.b.hI(o,$.ase(),r)
if(r!==q){if(q===-1)q=s
p=new A.jz(new A.eY(r,q),this,o,$.by())
p.w=p.EO()
n.push(p)
r=q}++r}return n},
El(){var s,r,q,p=this.av
if(p==null)return
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.P)(p),++r){q=p[r]
q.ae$=$.by()
q.ai$=0}this.av=null},
a8(){var s=this.av
if(s!=null)B.c.X(s,new A.a4E())
this.P5()},
m(){var s=this
s.xf()
s.av=null
s.K.m()
s.i6()},
wc(a){this.b6=A.a([],t.e9)
a.aU(new A.a4B(this))},
sB_(a,b){var s=this.K
if(s.f===b)return
s.sB_(0,b)
this.au()},
sbK(a){var s=this.K
if(s.r===a)return
s.sbK(a)
this.a8()},
sNt(a){if(this.A===a)return
this.A=a
this.a8()},
sa5w(a,b){var s,r=this
if(r.ah===b)return
r.ah=b
s=b===B.bm?"\u2026":null
r.K.sa2m(s)
r.a8()},
sB0(a){var s=this.K
if(s.w===a)return
s.sB0(a)
this.bv=null
this.a8()},
szX(a){var s=this.K
if(s.z==a)return
s.szX(a)
this.bv=null
this.a8()},
szS(a,b){var s=this.K
if(J.f(s.y,b))return
s.szS(0,b)
this.bv=null
this.a8()},
sNC(a){return},
sB1(a){var s=this.K
if(s.as===a)return
s.sB1(a)
this.bv=null
this.a8()},
sLT(a){return},
sN2(a){var s,r=this
if(J.f(r.cH,a))return
r.cH=a
s=r.av
s=s==null?null:B.c.kg(s,new A.a4G())
if(s===!0)r.au()},
qs(a){var s,r=this,q=r.BB(a,B.a0)
r.iS(t.k.a(A.z.prototype.ga0.call(r)))
s=r.K
s.E1(a,B.a0)
s=s.db
s===$&&A.b()
s=s.b
return q.U(0,new A.t(0,s==null?0:s))},
eO(a){this.iS(t.k.a(A.z.prototype.ga0.call(this)))
return this.K.eO(B.H)},
jm(a){return!0},
cW(a,b){var s,r,q,p,o,n,m,l,k,j={},i=this.K,h=i.a.hX(b),g=i.d.MM(h)
if(g!=null&&!0){a.C(0,new A.hM(t.kZ.a(g),t.Cq))
s=!0}else s=!1
r=j.a=this.a7$
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
l.dg()
m[14]=0
m[13]=n.b
m[12]=n.a
n=r.e
l.hZ(0,n,n,n)
if(a.y5(new A.a4D(j,b,r),b,l))return!0
r=j.a.e
r.toString
k=q.a(r).ab$
j.a=k;++o
r=k}return s},
Fp(a,b){var s=this.A||this.ah===B.bm?a:1/0
this.K.zP(s,b)},
vj(){var s=this,r=$.bP,q=r.dy$
switch(q.a){case 0:case 4:if(s.eS)return
s.eS=!0
r.pZ(new A.a4H(s,q))
break
case 1:case 2:case 3:s.CQ()
s.K.a8()
break}},
iS(a){this.K.uT(this.e3)
this.Fp(a.b,a.a)},
Fn(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.dz$
if(i===0)return A.a([],t.aE)
s=j.a7$
r=A.aR(i,B.TM,!1,t.cP)
q=new A.aQ(0,a.b,0,1/0).d0(0,j.K.w)
for(i=A.n(j).h("av.1"),p=!b,o=0;s!=null;){if(p){s.cv(q,!0)
n=s.k3
n.toString
m=j.b6
m===$&&A.b()
switch(m[o].gel()){case B.lk:l=s.Mx(j.b6[o].gru())
break
case B.ll:case B.lm:case B.fA:case B.lo:case B.ln:l=null
break
default:l=null}k=n}else{k=s.h8(q)
l=null}n=j.b6
n===$&&A.b()
r[o]=new A.mC(k,n[o].gel(),l,j.b6[o].gru())
n=s.e
n.toString
s=i.a(n).ab$;++o}return r},
WM(a){return this.Fn(a,!1)},
Zm(){var s,r,q=this.a7$,p=t.lO,o=this.K,n=A.n(this).h("av.1"),m=0
while(!0){if(!(q!=null&&m<o.ax.length))break
s=q.e
s.toString
p.a(s)
r=o.ax[m]
s.a=new A.t(r.a,r.b)
s.e=o.ay[m]
q=n.a(s).ab$;++m}},
Sn(){var s,r,q=this.b6
q===$&&A.b()
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.P)(q),++r)switch(q[r].gel()){case B.lk:case B.ll:case B.lm:return!1
case B.ln:case B.lo:case B.fA:continue}return!0},
cf(a){var s,r,q=this
if(!q.Sn())return B.R
s=q.K
s.uT(q.Fn(a,!0))
q.Fp(a.b,a.a)
r=s.gbm(s)
s=s.a
return a.bC(new A.a6(r,Math.ceil(s.gbS(s))))},
bJ(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=t.k.a(A.z.prototype.ga0.call(i))
i.e3=i.WM(g)
i.iS(g)
i.Zm()
s=i.K
r=s.gbm(s)
q=s.a
q=Math.ceil(q.gbS(q))
p=s.a.ga2c()
o=i.k3=g.bC(new A.a6(r,q))
n=o.b<q||p
m=o.a<r
if(m||n)switch(i.ah.a){case 3:i.b3=!1
i.bv=null
break
case 0:case 2:i.b3=!0
i.bv=null
break
case 1:i.b3=!0
r=A.a9W(h,s.d.a,"\u2026")
q=s.r
q.toString
o=s.w
l=A.a9U(h,s.y,h,h,r,B.bI,q,h,o,B.aQ)
l.a4G()
if(m){switch(s.r.a){case 0:k=l.gbm(l)
j=0
break
case 1:j=i.k3.a
k=j-l.gbm(l)
break
default:k=h
j=k}i.bv=A.ajw(new A.t(k,0),new A.t(j,0),A.a([B.k,B.na],t.bk),h,B.cP,h)}else{j=i.k3.b
s=l.a
i.bv=A.ajw(new A.t(0,j-Math.ceil(s.gbS(s))/2),new A.t(0,j),A.a([B.k,B.na],t.bk),h,B.cP,h)}l.m()
break}else{i.b3=!1
i.bv=null}},
aH(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e={}
f.iS(t.k.a(A.z.prototype.ga0.call(f)))
if(f.b3){s=f.k3
r=b.a
q=b.b
p=new A.C(r,q,r+s.a,q+s.b)
if(f.bv!=null)a.gbG(a).BN(p,$.aq().bk())
else a.gbG(a).cB(0)
a.gbG(a).kk(p)}s=f.K
s.aH(a.gbG(a),b)
r=e.a=f.a7$
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
a.a5Q(j,new A.t(o+r.a,n+r.b),A.v5(k,k,k),new A.a4F(e))
k=e.a.e
k.toString
i=m.a(k).ab$
e.a=i;++l
r=i}if(f.b3){if(f.bv!=null){a.gbG(a).aB(0,o,n)
h=$.aq().bk()
h.sa0l(B.CX)
h.sC5(f.bv)
s=a.gbG(a)
r=f.k3
s.cl(new A.C(0,0,0+r.a,0+r.b),h)}a.gbG(a).cw(0)}s=f.av
if(s!=null)for(r=s.length,g=0;g<s.length;s.length===r||(0,A.P)(s),++g)s[g].aH(a,b)
f.Pc(a,b)},
BB(a,b){var s
this.iS(t.k.a(A.z.prototype.ga0.call(this)))
s=this.K
s.E1(a,b)
s=s.db
s===$&&A.b()
return s.a},
Bu(a){this.iS(t.k.a(A.z.prototype.ga0.call(this)))
return this.K.a.ux(a.a,a.b,B.mp,B.he)},
hX(a){this.iS(t.k.a(A.z.prototype.ga0.call(this)))
return this.K.a.hX(a)},
mQ(a){this.iS(t.k.a(A.z.prototype.ga0.call(this)))
return this.K.a.mQ(a)},
eR(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.hf(a)
s=d.K
r=s.d
r.toString
q=A.a([],t.lF)
r.a18(q)
d.cU=q
if(B.c.kg(q,new A.a4C()))a.a=a.b=!0
else{r=d.af
if(r==null){p=new A.bw("")
o=A.a([],t.ve)
for(r=d.cU,n=r.length,m=0,l=0,k="";l<r.length;r.length===n||(0,A.P)(r),++l){j=r[l]
i=j.b
if(i==null)i=j.a
for(k=j.f,h=k.length,g=0;g<k.length;k.length===h||(0,A.P)(k),++g){f=k[g]
e=f.a
o.push(f.Iz(new A.eY(m+e.a,m+e.b)))}k=p.a+=i
m+=i.length}r=d.af=new A.cr(k.charCodeAt(0)==0?k:k,o)}a.p4=r
a.d=!0
s=s.r
s.toString
a.y1=s}},
o3(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=A.a([],t.T),b0=a7.K,b1=b0.r
b1.toString
s=A.hT(a8,a8,a8,t.qI,t.ju)
r=a7.ac
if(r==null){r=a7.cU
r.toString
r=a7.ac=A.aDg(r)}for(q=r.length,p=t.k,o=b1,n=0,m=0,l=0;l<r.length;r.length===q||(0,A.P)(r),++l,m=j){k=r[l]
b1=k.a
j=m+b1.length
i=m<j
h=i?m:j
i=i?j:m
g=p.a(A.z.prototype.ga0.call(a7))
b0.uT(a7.e3)
f=g.b
f=a7.A||a7.ah===B.bm?f:1/0
b0.zP(f,g.a)
e=b0.a.ux(h,i,B.mp,B.he)
if(e.length===0)continue
i=B.c.gJ(e)
d=new A.C(i.a,i.b,i.c,i.d)
c=B.c.gJ(e).e
for(i=A.aj(e),h=new A.eX(e,1,a8,i.h("eX<1>")),h.qc(e,1,a8,i.c),h=new A.bT(h,h.gp(h)),i=A.n(h).c;h.q();){g=h.d
if(g==null)g=i.a(g)
d=d.oE(new A.C(g.a,g.b,g.c,g.d))
c=g.e}i=d.a
h=Math.max(0,i)
g=d.b
f=Math.max(0,g)
i=Math.min(d.c-i,p.a(A.z.prototype.ga0.call(a7)).b)
g=Math.min(d.d-g,p.a(A.z.prototype.ga0.call(a7)).d)
b=Math.floor(h)-4
a=Math.floor(f)-4
i=Math.ceil(h+i)+4
g=Math.ceil(f+g)+4
a0=new A.C(b,a,i,g)
a1=A.pD()
a2=n+1
a1.id=new A.vB(n,a8)
a1.d=!0
a1.y1=o
f=k.b
b1=f==null?b1:f
a1.p4=new A.cr(b1,k.f)
b1=b2.y
if(b1!=null){a3=b1.fs(a0)
if(a3.a>=a3.c||a3.b>=a3.d)b1=!(b>=i||a>=g)
else b1=!1
a1.b7(B.lB,b1)}a4=A.b6("newChild")
b1=a7.cI
i=b1==null?a8:b1.a!==0
if(i===!0){b1.toString
i=new A.b8(b1,A.n(b1).h("b8<1>"))
a5=i.ga3(i)
if(!a5.q())A.K(A.bO())
b1=b1.u(0,a5.gF(a5))
b1.toString
if(a4.b!==a4)A.K(A.a1g(a4.a))
a4.b=b1}else{a6=new A.jo()
b1=A.a6u(a6,a7.T6(a6))
if(a4.b!==a4)A.K(A.a1g(a4.a))
a4.b=b1}if(b1===a4)A.K(A.h4(a4.a))
J.auu(b1,a1)
if(!b1.w.k(0,a0)){b1.w=a0
b1.ib()}b1=a4.b
if(b1===a4)A.K(A.h4(a4.a))
i=b1.d
i.toString
s.l(0,i,b1)
b1=a4.b
if(b1===a4)A.K(A.h4(a4.a))
a9.push(b1)
n=a2
o=c}a7.cI=s
b2.jJ(0,a9,b3)},
T6(a){return new A.a4A(this,a)},
lQ(){this.vc()
this.cI=null}}
A.a4E.prototype={
$1(a){return a.x=null},
$S:243}
A.a4B.prototype={
$1(a){return!0},
$S:40}
A.a4G.prototype={
$1(a){var s=a.w
s===$&&A.b()
return s.c!==B.cL},
$S:244}
A.a4D.prototype={
$2(a,b){return this.a.a.bY(a,b)},
$S:15}
A.a4H.prototype={
$1(a){var s=this.a
s.eS=!1
if(s.b!=null){s.CQ()
s.K.a8()}},
$S:2}
A.a4F.prototype={
$2(a,b){var s=this.a.a
s.toString
a.f2(s,b)},
$S:11}
A.a4C.prototype={
$1(a){return!1},
$S:245}
A.a4A.prototype={
$0(){var s=this.a,r=s.cI.j(0,this.b)
r.toString
s.l2(s,r.w)},
$S:0}
A.jz.prototype={
gn(a){var s=this.w
s===$&&A.b()
return s},
XZ(){var s=this,r=s.EO(),q=s.w
q===$&&A.b()
if(q.k(0,r))return
s.w=r
s.aA()},
EO(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f==null||g.e==null)return B.Uo
s=f.a
r=g.e.a
f=g.b
q=f.qs(new A.b0(s,B.C))
p=s===r?q:f.qs(new A.b0(r,B.C))
f=f.K
o=f.r
o.toString
n=s>r!==(B.X===o)
m=A.v6(g.gfH().a,g.gfH().b,0)
m.hy(m)
o=A.cw(m,q)
l=f.gu8()
k=n?B.Ca:B.C9
j=A.cw(m,p)
f=f.gu8()
i=n?B.C9:B.Ca
h=g.d.a===g.e.a?B.Uq:B.lA
return new A.kP(new A.n1(o,l,k),new A.n1(j,f,i),h,!0)},
t0(a){var s=this,r=A.b6("result"),q=s.d,p=s.e,o=a.a
switch(o.a){case 0:case 1:r.sc6(s.a_k(t.ib.a(a).b,o===B.dM))
break
case 2:s.e=s.d=null
r.sc6(B.cK)
break
case 3:o=s.a
s.d=new A.b0(o.a,B.C)
s.e=new A.b0(o.b,B.M)
r.sc6(B.cK)
break
case 4:r.sc6(s.VZ(t.k2.a(a).gBJ()))
break
case 5:t.uQ.a(a)
r.sc6(s.Vi(a.gJK(a),a.gfZ(),a.ga7j()))
break
case 6:t.sQ.a(a)
r.sc6(s.UZ(a.gz1(a),a.gfZ(),a.gIX(a)))
break}if(!J.f(q,s.d)||!J.f(p,s.e)){s.b.au()
s.XZ()}return r.aD()},
a_k(a,b){var s,r,q,p,o,n,m=this
if(b)m.e=null
else m.d=null
s=m.b
r=s.bA(0,null)
r.hy(r)
q=A.cw(r,a)
p=m.gfH()
if(p.gN(p))return A.aow(m.gfH(),q)
p=m.gfH()
o=s.K.r
o.toString
n=m.qf(s.hX(A.aza(p,q,o)))
if(b)m.e=n
else m.d=n
s=n.a
p=m.a
if(s===p.b)return B.b6
if(s===p.a)return B.b7
return A.aow(m.gfH(),q)},
qf(a){var s,r=a.a,q=this.a,p=q.b
if(r<=p)s=r===p&&a.b===B.C
else s=!0
if(s)return new A.b0(p,B.M)
q=q.a
if(r<q)return new A.b0(q,B.C)
return a},
VZ(a){var s,r,q,p,o=this,n=o.b,m=n.hX(n.kY(a))
if(o.Yj(m))return B.ar
s=n.mQ(m)
r=A.b6("start")
q=A.b6("end")
n=m.a
p=s.b
if(n>=p)r.b=q.b=new A.b0(n,B.C)
else{r.b=new A.b0(s.a,B.C)
q.b=new A.b0(p,B.M)}o.d=r.aD()
o.e=q.aD()
return B.ar},
UZ(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.bA(0,null)
if(j.hy(j)===0)switch(c){case B.fE:case B.dO:return B.b7
case B.fF:case B.dN:return B.b6}s=A.cw(j,new A.t(a,0)).a
switch(c){case B.fE:case B.fF:if(b){k=l.e
k.toString
r=k}else{k=l.d
k.toString
r=k}q=l.Wk(r,!1,s)
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
p=k.hX(new A.t(s,k.qs(b?r:m).b-k.K.gu8()/2))
o=B.ar
break
default:p=null
o=null}if(b)l.e=p
else l.d=p
return o},
Vi(a,b,c){var s,r,q,p,o,n,m=this,l=m.e
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
switch(c){case B.Wb:l=m.a
q=m.qr(new A.Vg(B.b.S(m.c,l.a,l.b)),s,a)
p=B.ar
break
case B.Wc:l=m.a
q=m.qr(new A.Nl(new A.aaE(m),new A.aaC(B.b.S(m.c,l.a,l.b))),s,a)
p=B.ar
break
case B.Wd:q=m.qr(new A.a1j(m),s,a)
p=B.ar
break
case B.We:o=m.a
n=o.a
o=o.b
q=m.qr(new A.WA(B.b.S(m.c,n,o)),s,a)
if(a&&q.a===o)p=B.b6
else p=l&&q.a===n?B.b7:B.ar
break
default:p=null
q=null}if(b)m.e=q
else m.d=q
return p},
qr(a,b,c){if(c)return this.qf(a.ha(B.TU.ha(b)))
return this.qf(a.h9(B.TT.h9(b)))},
Wk(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.K,i=j.fr
if(i==null)i=j.fr=j.a.a17()
s=k.BB(a,B.a0)
j=i.length
r=j-1
for(q=s.b,p=0;p<i.length;i.length===j||(0,A.P)(i),++p){o=i[p]
if(o.gru()>q){r=J.au3(o)
break}}if(b&&r===i.length-1)n=new A.b0(l.a.b,B.M)
else if(!b&&r===0)n=new A.b0(l.a.a,B.C)
else n=l.qf(k.hX(new A.t(c,i[b?r+1:r-1].gru())))
k=n.a
j=l.a
if(k===j.a)m=B.b7
else m=k===j.b?B.b6:B.ar
return new A.al(n,m,t.nz)},
Yj(a){var s,r,q,p,o=this
if(o.d==null||o.e==null)return!1
s=A.b6("currentStart")
r=A.b6("currentEnd")
q=o.d
q.toString
p=o.e
p.toString
if(A.akD(q,p)>0){s.b=q
r.b=p}else{s.b=p
r.b=q}return A.akD(s.aD(),a)>=0&&A.akD(r.aD(),a)<=0},
bA(a,b){var s=A.v6(this.gfH().a,this.gfH().b,0)
s.cL(0,this.b.bA(0,b))
return s},
hR(a,b){if(this.b.b==null)return},
gfH(){var s,r,q,p,o,n,m=this,l=m.x
if(l==null){l=m.b
s=m.a
r=s.a
q=l.Bu(A.a9V(B.C,r,s.b,!1))
if(q.length!==0){l=B.c.gJ(q)
p=new A.C(l.a,l.b,l.c,l.d)
for(o=1;o<q.length;++o){l=q[o]
p=p.oE(new A.C(l.a,l.b,l.c,l.d))}m.x=p
l=p}else{n=l.qs(new A.b0(r,B.C))
l=A.ak1(n,new A.t(n.a+0,n.b+-l.K.gu8()))
m.x=l}}return l},
gcP(a){var s=this.gfH()
return new A.a6(s.c-s.a,s.d-s.b)},
aH(a,b){var s,r,q,p,o,n=this,m=n.d
if(m==null||n.e==null)return
s=n.b
if(s.cH!=null){r=A.a9V(B.C,m.a,n.e.a,!1)
q=$.aq().bk()
q.scD(0,B.aP)
m=s.cH
m.toString
q.sak(0,m)
for(m=s.Bu(r),s=m.length,p=0;p<m.length;m.length===s||(0,A.P)(m),++p){o=m[p]
a.gbG(a).cl(new A.C(o.a,o.b,o.c,o.d).di(b),q)}}A.v6(n.gfH().a,n.gfH().b,0)},
Bz(a){var s=this.b.K.a.MA(a),r=this.a,q=r.a
r=r.b
return A.a9V(B.C,B.f.j2(s.a,q,r),B.f.j2(s.b,q,r),!1)},
$iac:1}
A.z6.prototype={
aq(a){var s,r,q
this.eB(a)
s=this.a7$
for(r=t.lO;s!=null;){s.aq(a)
q=s.e
q.toString
s=r.a(q).ab$}},
al(a){var s,r,q
this.dW(0)
s=this.a7$
for(r=t.lO;s!=null;){s.al(0)
q=s.e
q.toString
s=r.a(q).ab$}}}
A.PX.prototype={}
A.PY.prototype={
aq(a){this.Qe(a)
$.eS.zb$.a.C(0,this.gD5())},
al(a){$.eS.zb$.a.u(0,this.gD5())
this.Qf(0)}}
A.St.prototype={}
A.Su.prototype={}
A.JF.prototype={
sa5v(a){if(a===this.K)return
this.K=a
this.au()},
sa5U(a){if(a===this.af)return
this.af=a
this.au()},
sa0D(a){return},
sa0C(a){return},
gjT(){return!0},
gnX(){return!0},
gWD(){var s=this.K,r=(s|1)>>>0>0||(s|2)>>>0>0?80:0
return(s|4)>>>0>0||(s|8)>>>0>0?r+80:r},
cf(a){return a.bC(new A.a6(1/0,this.gWD()))},
aH(a,b){var s=b.a,r=b.b,q=this.k3
q=new A.IO(new A.C(s,r,s+q.a,r+q.b),this.K,this.af,!1,!1,A.y(t.S,t.M),A.aw())
q.i7()
a.n4()
a.ya(q)}}
A.JK.prototype={}
A.eU.prototype={
ex(a){if(!(a.e instanceof A.cg))a.e=new A.cg()},
cf(a){var s=this.A$
if(s!=null)return s.h8(a)
return this.ob(a)},
bJ(){var s=this,r=s.A$,q=t.k
if(r!=null){r.cv(q.a(A.z.prototype.ga0.call(s)),!0)
r=s.A$.k3
r.toString
s.k3=r}else s.k3=s.ob(q.a(A.z.prototype.ga0.call(s)))},
ob(a){return new A.a6(A.H(0,a.a,a.b),A.H(0,a.c,a.d))},
cW(a,b){var s=this.A$
s=s==null?null:s.bY(a,b)
return s===!0},
ds(a,b){},
aH(a,b){var s=this.A$
if(s!=null)a.f2(s,b)}}
A.oC.prototype={
E(){return"HitTestBehavior."+this.b}}
A.wa.prototype={
bY(a,b){var s,r=this
if(r.k3.B(0,b)){s=r.cW(a,b)||r.v===B.aD
if(s||r.v===B.d5)a.C(0,new A.o5(b,r))}else s=!1
return s},
jm(a){return this.v===B.aD}}
A.Jq.prototype={
sHY(a){if(this.v.k(0,a))return
this.v=a
this.a8()},
bJ(){var s=this,r=t.k.a(A.z.prototype.ga0.call(s)),q=s.A$,p=s.v
if(q!=null){q.cv(p.oB(r),!0)
q=s.A$.k3
q.toString
s.k3=q}else s.k3=p.oB(r).bC(B.R)},
cf(a){var s=this.A$,r=this.v
if(s!=null)return s.h8(r.oB(a))
else return r.oB(a).bC(B.R)}}
A.JA.prototype={
sa50(a,b){if(this.v===b)return
this.v=b
this.a8()},
sa4Y(a,b){if(this.T===b)return
this.T=b
this.a8()},
Fq(a){var s,r,q=a.a,p=a.b
p=p<1/0?p:A.H(this.v,q,p)
s=a.c
r=a.d
return new A.aQ(q,p,s,r<1/0?r:A.H(this.T,s,r))},
E4(a,b){var s=this.A$
if(s!=null)return a.bC(b.$2(s,this.Fq(a)))
return this.Fq(a).bC(B.R)},
cf(a){return this.E4(a,A.ai6())},
bJ(){this.k3=this.E4(t.k.a(A.z.prototype.ga0.call(this)),A.ai7())}}
A.w5.prototype={
gdN(){if(this.A$!=null){var s=this.kx$
s.toString}else s=!1
return s},
pH(a){var s=a==null?A.anV():a
s.sI_(0,this.m2$)
return s},
stZ(a,b){var s=this,r=s.hC$
if(r===b)return
if(s.b!=null&&r!=null)r.G(0,s.gr9())
s.hC$=b
if(s.b!=null)b.Y(0,s.gr9())
s.xM()},
sI0(a){if(!1===this.za$)return
this.za$=!1
this.b2()},
xM(){var s,r=this,q=r.m2$,p=r.hC$
p=r.m2$=B.d.bb(A.alf(p.gn(p),0,1)*255)
if(q!==p){s=r.kx$
p=p>0
r.kx$=p
if(r.A$!=null&&s!==p)r.mu()
r.a4U()
if(q===0||r.m2$===0)r.b2()}},
mB(a){var s=this.hC$
return s.gn(s)>0},
h7(a){var s,r=this.A$
if(r!=null)if(this.m2$===0){s=this.za$
s.toString}else s=!0
else s=!1
if(s){r.toString
a.$1(r)}}}
A.Jm.prototype={}
A.th.prototype={
Y(a,b){return null},
G(a,b){return null},
i(a){return"CustomClipper"}}
A.n4.prototype={
Bv(a){return this.b.fB(new A.C(0,0,0+a.a,0+a.b),this.c)},
C7(a){if(A.A(a)!==B.a_c)return!0
t.qm.a(a)
return!a.b.k(0,this.b)||a.c!=this.c}}
A.qX.prototype={
so9(a){var s,r=this,q=r.v
if(q==a)return
r.v=a
s=a==null
if(s||q==null||A.A(a)!==A.A(q)||a.C7(q))r.qG()
if(r.b!=null){if(q!=null)q.G(0,r.gqF())
if(!s)a.Y(0,r.gqF())}},
aq(a){var s
this.na(a)
s=this.v
if(s!=null)s.Y(0,this.gqF())},
al(a){var s=this.v
if(s!=null)s.G(0,this.gqF())
this.ld(0)},
qG(){this.T=null
this.au()
this.b2()},
srG(a){if(a!==this.az){this.az=a
this.au()}},
bJ(){var s,r=this,q=r.k3
q=q!=null?q:null
r.vf()
s=r.k3
s.toString
if(!J.f(q,s))r.T=null},
iZ(){var s,r,q=this
if(q.T==null){s=q.v
if(s==null)s=null
else{r=q.k3
r.toString
r=s.Bv(r)
s=r}q.T=s==null?q.gqi():s}},
j4(a){var s,r=this
switch(r.az.a){case 0:return null
case 1:case 2:case 3:if(r.v==null)s=null
else{s=r.k3
s=new A.C(0,0,0+s.a,0+s.b)}if(s==null){s=r.k3
s=new A.C(0,0,0+s.a,0+s.b)}return s}},
m(){this.cm=null
this.i6()}}
A.Jp.prototype={
gqi(){var s=this.k3
return new A.C(0,0,0+s.a,0+s.b)},
bY(a,b){var s=this
if(s.v!=null){s.iZ()
if(!s.T.B(0,b))return!1}return s.iM(a,b)},
aH(a,b){var s,r,q=this,p=q.A$
if(p!=null){s=q.ch
if(q.az!==B.l){q.iZ()
p=q.cx
p===$&&A.b()
r=q.T
r.toString
s.saZ(0,a.kM(p,b,r,A.eU.prototype.gmA.call(q),q.az,t.iM.a(s.a)))}else{a.f2(p,b)
s.saZ(0,null)}}else q.ch.saZ(0,null)}}
A.Jo.prototype={
gqi(){var s=$.aq().cp(),r=this.k3
s.nU(new A.C(0,0,0+r.a,0+r.b))
return s},
bY(a,b){var s=this
if(s.v!=null){s.iZ()
if(!s.T.B(0,b))return!1}return s.iM(a,b)},
aH(a,b){var s,r,q,p,o=this,n=o.A$
if(n!=null){s=o.ch
if(o.az!==B.l){o.iZ()
n=o.cx
n===$&&A.b()
r=o.k3
q=r.a
r=r.b
p=o.T
p.toString
s.saZ(0,a.Li(n,b,new A.C(0,0,0+q,0+r),p,A.eU.prototype.gmA.call(o),o.az,t.n0.a(s.a)))}else{a.f2(n,b)
s.saZ(0,null)}}else o.ch.saZ(0,null)}}
A.z7.prototype={
sil(a,b){if(this.cq===b)return
this.cq=b
this.au()},
shb(a,b){if(this.d7.k(0,b))return
this.d7=b
this.au()},
sak(a,b){if(this.fU.k(0,b))return
this.fU=b
this.au()},
eR(a){this.hf(a)
a.sil(0,this.cq)}}
A.JG.prototype={
sdh(a,b){if(this.kx===b)return
this.kx=b
this.qG()},
sa0n(a,b){if(J.f(this.hC,b))return
this.hC=b
this.qG()},
gqi(){var s,r,q=this.k3,p=0+q.a
q=0+q.b
switch(this.kx.a){case 0:s=this.hC
if(s==null)s=B.aA
return s.dD(new A.C(0,0,p,q))
case 1:s=(p-0)/2
r=(q-0)/2
return new A.i4(0,0,p,q,s,r,s,r,s,r,s,r,s===r)}},
bY(a,b){var s=this
if(s.v!=null){s.iZ()
if(!s.T.B(0,b))return!1}return s.iM(a,b)},
aH(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.A$==null){i.ch.saZ(0,null)
return}i.iZ()
s=i.T.di(b)
r=$.aq()
q=r.cp()
q.eK(s)
p=a.gbG(a)
if(i.cq!==0&&!0){p.cl(new A.C(s.a,s.b,s.c,s.d).da(20),$.am_())
o=i.d7
n=i.cq
m=i.fU
p.oz(q,o,n,(m.gn(m)>>>24&255)!==255)}l=i.az===B.ht
if(!l){r=r.bk()
r.sak(0,i.fU)
p.d6(s,r)}r=i.cx
r===$&&A.b()
o=i.k3
n=o.a
o=o.b
m=i.T
m.toString
k=i.ch
j=t.bG.a(k.a)
k.saZ(0,a.a5M(r,b,new A.C(0,0,0+n,0+o),m,new A.a4I(i,l),i.az,j))}}
A.a4I.prototype={
$2(a,b){var s,r
if(this.b){s=a.gbG(a)
r=$.aq().bk()
r.sak(0,this.a.fU)
s.oy(r)}this.a.hg(a,b)},
$S:11}
A.JH.prototype={
gqi(){var s=$.aq().cp(),r=this.k3
s.nU(new A.C(0,0,0+r.a,0+r.b))
return s},
bY(a,b){var s=this
if(s.v!=null){s.iZ()
if(!s.T.B(0,b))return!1}return s.iM(a,b)},
aH(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(j.A$==null){j.ch.saZ(0,null)
return}j.iZ()
s=j.k3
r=b.a
q=b.b
p=s.a
s=s.b
o=j.T.di(b)
n=a.gbG(a)
if(j.cq!==0&&!0){n.cl(new A.C(r,q,r+p,q+s).da(20),$.am_())
s=j.d7
r=j.cq
q=j.fU
n.oz(o,s,r,(q.gn(q)>>>24&255)!==255)}m=j.az===B.ht
if(!m){s=$.aq().bk()
s.sak(0,j.fU)
n.dJ(o,s)}s=j.cx
s===$&&A.b()
r=j.k3
q=r.a
r=r.b
p=j.T
p.toString
l=j.ch
k=t.n0.a(l.a)
l.saZ(0,a.Li(s,b,new A.C(0,0,0+q,0+r),p,new A.a4J(j,m),j.az,k))}}
A.a4J.prototype={
$2(a,b){var s,r
if(this.b){s=a.gbG(a)
r=$.aq().bk()
r.sak(0,this.a.fU)
s.oy(r)}this.a.hg(a,b)},
$S:11}
A.tn.prototype={
E(){return"DecorationPosition."+this.b}}
A.Ju.prototype={
sa1Z(a){var s,r=this
if(a.k(0,r.T))return
s=r.v
if(s!=null)s.m()
r.v=null
r.T=a
r.au()},
sbz(a,b){if(b===this.az)return
this.az=b
this.au()},
syq(a){if(a.k(0,this.by))return
this.by=a
this.au()},
al(a){var s=this,r=s.v
if(r!=null)r.m()
s.v=null
s.ld(0)
s.au()},
jm(a){var s=this.T,r=this.k3
r.toString
return s.K2(r,a,this.by.d)},
aH(a,b){var s,r,q,p=this,o=p.v
if(o==null)o=p.v=p.T.rL(p.ge8())
s=p.by
r=p.k3
r.toString
q=new A.oF(s.a,s.b,s.c,s.d,r,s.f)
if(p.az===B.hC){o.pn(a.gbG(a),b,q)
if(p.T.gzG())a.C1()}p.hg(a,b)
if(p.az===B.FB){o=p.v
o.toString
o.pn(a.gbG(a),b,q)
if(p.T.gzG())a.C1()}}}
A.JQ.prototype={
sL5(a,b){return},
sel(a){var s=this
if(J.f(s.T,a))return
s.T=a
s.au()
s.b2()},
sbK(a){var s=this
if(s.az==a)return
s.az=a
s.au()
s.b2()},
gnX(){return!1},
sbs(a,b){var s,r=this
if(J.f(r.cm,b))return
s=new A.bf(new Float64Array(16))
s.bg(b)
r.cm=s
r.au()
r.b2()},
sme(a){return},
gw5(){var s,r,q=this,p=q.T,o=p==null?null:p.V(q.az)
if(o==null)return q.cm
s=new A.bf(new Float64Array(16))
s.dg()
p=q.k3
p.toString
r=o.a09(p)
s.aB(0,r.a,r.b)
p=q.cm
p.toString
s.cL(0,p)
s.aB(0,-r.a,-r.b)
return s},
bY(a,b){return this.cW(a,b)},
cW(a,b){var s=this.by?this.gw5():null
return a.y5(new A.a4S(this),b,s)},
aH(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
if(a.A$!=null){s=a.gw5()
s.toString
r=A.a1K(s)
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
p=A.eU.prototype.gmA.call(a)
o=a.ch
n=o.a
o.saZ(0,a0.pt(q,a1,s,p,n instanceof A.kZ?n:null))}else{a.hg(a0,a1.U(0,r))
a.ch.saZ(0,null)}}},
ds(a,b){var s=this.gw5()
s.toString
b.cL(0,s)}}
A.a4S.prototype={
$2(a,b){return this.a.qa(a,b)},
$S:15}
A.w7.prototype={
Yt(){if(this.v!=null)return
this.v=this.az},
EA(a){switch(a.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
szh(a){var s=this,r=s.T
if(r===a)return
s.T=a
if(s.EA(r)||s.EA(a))s.a8()
else{s.bR=s.cm=null
s.au()}},
sel(a){var s=this
if(s.az.k(0,a))return
s.az=a
s.v=s.bR=s.cm=null
s.au()},
sbK(a){var s=this
if(s.by==a)return
s.by=a
s.v=s.bR=s.cm=null
s.au()},
cf(a){var s,r=this.A$
if(r!=null){s=r.h8(B.bK)
switch(this.T.a){case 6:return a.bC(new A.aQ(0,a.b,0,a.d).oc(s))
case 1:case 2:case 0:case 4:case 3:case 5:return a.oc(s)}}else return new A.a6(A.H(0,a.a,a.b),A.H(0,a.c,a.d))},
bJ(){var s,r,q,p=this,o=p.A$
if(o!=null){o.cv(B.bK,!0)
switch(p.T.a){case 6:o=t.k
s=o.a(A.z.prototype.ga0.call(p))
r=p.A$.k3
r.toString
q=new A.aQ(0,s.b,0,s.d).oc(r)
p.k3=o.a(A.z.prototype.ga0.call(p)).bC(q)
break
case 1:case 2:case 0:case 4:case 3:case 5:o=t.k.a(A.z.prototype.ga0.call(p))
s=p.A$.k3
s.toString
p.k3=o.oc(s)
break}p.bR=p.cm=null}else{o=t.k.a(A.z.prototype.ga0.call(p))
p.k3=new A.a6(A.H(0,o.a,o.b),A.H(0,o.c,o.d))}},
xN(){var s,r,q,p,o,n,m,l,k,j=this
if(j.bR!=null)return
if(j.A$==null){j.cm=!1
s=new A.bf(new Float64Array(16))
s.dg()
j.bR=s}else{j.Yt()
s=j.A$.k3
s.toString
r=j.T
q=j.k3
q.toString
p=A.aqG(r,s,q)
q=p.b
r=p.a
o=s.a
s=s.b
n=j.v.zA(r,new A.C(0,0,0+o,0+s))
m=j.v
m.toString
l=j.k3
k=m.zA(q,new A.C(0,0,0+l.a,0+l.b))
m=n.a
j.cm=n.c-m<o||n.d-n.b<s
s=A.v6(k.a,k.b,0)
s.hZ(0,q.a/r.a,q.b/r.b,1)
s.aB(0,-m,-n.b)
j.bR=s}},
FL(a,b){var s,r,q,p,o=this,n=o.bR
n.toString
s=A.a1K(n)
if(s==null){n=o.cx
n===$&&A.b()
r=o.bR
r.toString
q=A.eU.prototype.gmA.call(o)
p=o.ch.a
return a.pt(n,b,r,q,p instanceof A.kZ?p:null)}else o.hg(a,b.U(0,s))
return null},
aH(a,b){var s,r,q,p,o,n=this
if(n.A$!=null){s=n.k3
if(!s.gN(s)){s=n.A$.k3
s=s.gN(s)}else s=!0}else s=!0
if(s)return
n.xN()
s=n.cm
s.toString
if(s&&n.e4!==B.l){s=n.cx
s===$&&A.b()
r=n.k3
q=r.a
r=r.b
p=n.ch
o=p.a
o=o instanceof A.oc?o:null
p.saZ(0,a.kM(s,b,new A.C(0,0,0+q,0+r),n.gXT(),n.e4,o))}else n.ch.saZ(0,n.FL(a,b))},
cW(a,b){var s=this,r=s.k3
if(!r.gN(r)){r=s.A$
if(r==null)r=null
else{r=r.k3
r=r.gN(r)}r=r===!0}else r=!0
if(r)return!1
s.xN()
return a.y5(new A.a4o(s),b,s.bR)},
mB(a){var s=this.k3
if(!s.gN(s)){s=a.k3
s=!s.gN(s)}else s=!1
return s},
ds(a,b){var s=this.k3
if(!s.gN(s)){s=a.k3
s=!s.gN(s)}else s=!1
if(!s)b.C4()
else{this.xN()
s=this.bR
s.toString
b.cL(0,s)}}}
A.a4o.prototype={
$2(a,b){return this.a.qa(a,b)},
$S:15}
A.Jx.prototype={
sa6U(a){var s=this
if(s.v.k(0,a))return
s.v=a
s.au()
s.b2()},
bY(a,b){return this.cW(a,b)},
cW(a,b){var s,r,q=this
if(q.T){s=q.v
r=q.k3
r=new A.t(s.a*r.a,s.b*r.b)
s=r}else s=null
return a.nV(new A.a4p(q),s,b)},
aH(a,b){var s,r,q=this
if(q.A$!=null){s=q.v
r=q.k3
q.hg(a,new A.t(b.a+s.a*r.a,b.b+s.b*r.b))}},
ds(a,b){var s=this.v,r=this.k3
b.aB(0,s.a*r.a,s.b*r.b)}}
A.a4p.prototype={
$2(a,b){return this.a.qa(a,b)},
$S:15}
A.JI.prototype={
ob(a){return new A.a6(A.H(1/0,a.a,a.b),A.H(1/0,a.c,a.d))},
it(a,b){var s,r=this,q=null
if(t.Y.b(a)){s=r.a7
return s==null?q:s.$1(a)}if(t.c.b(a))return q
if(t.Cs.b(a)){s=r.aS
return s==null?q:s.$1(a)}if(t.hV.b(a))return q
if(t.AJ.b(a)){s=r.cq
return s==null?q:s.$1(a)}if(t.EL.b(a)){s=r.d7
return s==null?q:s.$1(a)}if(t.r.b(a))return q
if(t.zv.b(a))return q
if(t.zs.b(a)){s=r.z8
return s==null?q:s.$1(a)}}}
A.JC.prototype={
bY(a,b){return this.Pg(a,b)&&!0},
it(a,b){var s=this.aS
if(s!=null&&t.hV.b(a))return s.$1(a)},
gIN(a){return this.cq},
gBm(){return this.d7},
aq(a){this.na(a)
this.d7=!0},
al(a){this.d7=!1
this.ld(0)},
ob(a){return new A.a6(A.H(1/0,a.a,a.b),A.H(1/0,a.c,a.d))},
$ij5:1,
gAk(a){return this.bD},
gAl(a){return this.ab}}
A.JL.prototype={
gdN(){return!0}}
A.w8.prototype={
sK6(a){var s,r=this
if(a===r.v)return
r.v=a
s=r.T
if(s==null||!s)r.b2()},
szy(a){var s=this,r=s.T
if(a==r)return
if(r==null)r=s.v
s.T=a
if(r!==(a==null?s.v:a))s.b2()},
bY(a,b){return!this.v&&this.iM(a,b)},
h7(a){var s,r=this.A$
if(r!=null){s=this.T
s=!(s==null?this.v:s)}else s=!1
if(s){r.toString
a.$1(r)}}}
A.JD.prototype={
stT(a){var s=this
if(a===s.v)return
s.v=a
s.a8()
s.tN()},
eO(a){if(this.v)return null
return this.D3(a)},
gjT(){return this.v},
cf(a){if(this.v)return new A.a6(A.H(0,a.a,a.b),A.H(0,a.c,a.d))
return this.Pf(a)},
po(){this.P6()},
bJ(){var s,r=this
if(r.v){s=r.A$
if(s!=null)s.iA(t.k.a(A.z.prototype.ga0.call(r)))}else r.vf()},
bY(a,b){return!this.v&&this.iM(a,b)},
mB(a){return!this.v},
aH(a,b){if(this.v)return
this.hg(a,b)},
h7(a){if(this.v)return
this.vd(a)}}
A.w4.prototype={
sHP(a){if(this.v===a)return
this.v=a
this.b2()},
szy(a){return},
bY(a,b){return this.v?this.k3.B(0,b):this.iM(a,b)},
h7(a){var s,r,q=this.A$
if(q!=null){s=this.T
r=this.v
s=!r}else s=!1
if(s){q.toString
a.$1(q)}}}
A.jd.prototype={
sa73(a){if(A.alw(a,this.a7))return
this.a7=a
this.b2()},
sjx(a){var s,r=this
if(J.f(r.bD,a))return
s=r.bD
r.bD=a
if(a!=null!==(s!=null))r.b2()},
skK(a){var s,r=this
if(J.f(r.aS,a))return
s=r.aS
r.aS=a
if(a!=null!==(s!=null))r.b2()},
sa5h(a){var s,r=this
if(J.f(r.ab,a))return
s=r.ab
r.ab=a
if(a!=null!==(s!=null))r.b2()},
sa5r(a){var s,r=this
if(J.f(r.cq,a))return
s=r.cq
r.cq=a
if(a!=null!==(s!=null))r.b2()},
eR(a){var s,r=this
r.hf(a)
if(r.bD!=null){s=r.a7
s=s==null||s.B(0,B.dP)}else s=!1
if(s)a.sjx(r.bD)
if(r.aS!=null){s=r.a7
s=s==null||s.B(0,B.Bl)}else s=!1
if(s)a.skK(r.aS)
if(r.ab!=null){s=r.a7
if(s==null||s.B(0,B.dT))a.stX(r.gYa())
s=r.a7
if(s==null||s.B(0,B.dS))a.stW(r.gY8())}if(r.cq!=null){s=r.a7
if(s==null||s.B(0,B.dQ))a.stY(r.gYc())
s=r.a7
if(s==null||s.B(0,B.dR))a.stV(r.gY6())}},
Y9(){var s,r,q=this.ab
if(q!=null){s=this.k3
r=s.a*-0.8
s=s.j1(B.j)
s=A.cw(this.bA(0,null),s)
q.$1(new A.hJ(null,new A.t(r,0),r,s))}},
Yb(){var s,r,q=this.ab
if(q!=null){s=this.k3
r=s.a*0.8
s=s.j1(B.j)
s=A.cw(this.bA(0,null),s)
q.$1(new A.hJ(null,new A.t(r,0),r,s))}},
Yd(){var s,r,q=this.cq
if(q!=null){s=this.k3
r=s.b*-0.8
s=s.j1(B.j)
s=A.cw(this.bA(0,null),s)
q.$1(new A.hJ(null,new A.t(0,r),r,s))}},
Y7(){var s,r,q=this.cq
if(q!=null){s=this.k3
r=s.b*0.8
s=s.j1(B.j)
s=A.cw(this.bA(0,null),s)
q.$1(new A.hJ(null,new A.t(0,r),r,s))}}}
A.wb.prototype={
sLg(a){var s=this
if(s.v===a)return
s.v=a
s.Hf(a)
s.b2()},
sa1a(a){if(this.T===a)return
this.T=a
this.b2()},
sa2C(a){if(this.az===a)return
this.az=a
this.b2()},
sa2z(a){return},
Hf(a){var s=this,r=a.fy
r=a.fx
r=r==null?null:new A.cr(r,B.ad)
s.cm=r
r=a.id
r=a.go
r=r==null?null:new A.cr(r,B.ad)
s.bR=r
s.e4=null
s.fX=null
s.is=null},
sbK(a){if(this.zf==a)return
this.zf=a
this.b2()},
h7(a){this.vd(a)},
eR(a){var s,r,q=this
q.hf(a)
a.a=q.T
a.b=q.az
s=q.v.a
if(s!=null){a.b7(B.Bw,!0)
a.b7(B.Bo,s)}s=q.v.e
if(s!=null)a.b7(B.Bt,s)
s=q.v.f
if(s!=null)a.b7(B.Bx,s)
s=q.v.w
if(s!=null)a.b7(B.Bv,s)
s=q.v.as
if(s!=null)a.b7(B.Br,s)
s=q.v.at
if(s!=null)a.b7(B.Bs,s)
s=q.v.db
if(s!=null)a.b7(B.Bp,s)
s=q.cm
if(s!=null){a.p4=s
a.d=!0}s=q.bR
if(s!=null){a.R8=s
a.d=!0}s=q.e4
if(s!=null){a.RG=s
a.d=!0}s=q.fX
if(s!=null){a.rx=s
a.d=!0}s=q.is
if(s!=null){a.ry=s
a.d=!0}s=q.v
r=s.p2
if(r!=null){a.to=r
a.d=!0}s.p3!=null
s=q.v.cx
if(s!=null)a.b7(B.Bq,s)
s=q.v.cy
if(s!=null)a.b7(B.Bu,s)
s=q.zf
if(s!=null){a.y1=s
a.d=!0}s=q.v
r=s.R8
if(r!=null){a.id=r
a.d=!0}s=s.RG
if(s!=null)a.HV(s)
if(q.v.rx!=null)a.sjx(q.gYe())
if(q.v.ry!=null)a.skK(q.gY4())
if(q.v.af!=null)a.stU(q.gY2())},
Yf(){var s=this.v.rx
if(s!=null)s.$0()},
Y5(){var s=this.v.ry
if(s!=null)s.$0()},
Y3(){var s=this.v.af
if(s!=null)s.$0()}}
A.Jn.prototype={
sa0m(a){return},
eR(a){this.hf(a)
a.c=!0}}
A.JB.prototype={
eR(a){this.hf(a)
a.d=a.p2=a.a=!0}}
A.Jw.prototype={
sa2A(a){if(a===this.v)return
this.v=a
this.b2()},
h7(a){if(this.v)return
this.vd(a)}}
A.Jz.prototype={
szz(a,b){if(b===this.v)return
this.v=b
this.b2()},
eR(a){this.hf(a)
a.k1=this.v
a.d=!0}}
A.w6.prototype={
sn(a,b){if(this.v.k(0,b))return
this.v=b
this.au()},
sNr(a){return},
aH(a,b){var s,r=this,q=r.v,p=r.k3
p.toString
s=new A.rz(q,p,b,A.y(t.S,t.M),A.aw(),r.$ti.h("rz<1>"))
s.i7()
a.Lj(s,A.eU.prototype.gmA.call(r),b)},
gnX(){return!0}}
A.PO.prototype={
eO(a){var s=this.A$
if(s!=null)return s.jL(a)
return this.D3(a)}}
A.PP.prototype={
aq(a){var s=this
s.na(a)
s.hC$.Y(0,s.gr9())
s.xM()},
al(a){this.hC$.G(0,this.gr9())
this.ld(0)},
aH(a,b){if(this.m2$===0)return
this.hg(a,b)}}
A.z8.prototype={
aq(a){var s
this.eB(a)
s=this.A$
if(s!=null)s.aq(a)},
al(a){var s
this.dW(0)
s=this.A$
if(s!=null)s.al(0)}}
A.z9.prototype={
eO(a){var s=this.A$
if(s!=null)return s.jL(a)
return this.CR(a)}}
A.jg.prototype={
E(){return"SelectionResult."+this.b}}
A.dh.prototype={$iac:1}
A.Kg.prototype={
spv(a){var s=this,r=s.m6$
if(a==r)return
if(a==null)s.G(0,s.gGx())
else if(r==null)s.Y(0,s.gGx())
s.Gw()
s.m6$=a
s.Gy()},
Gy(){var s=this
if(s.m6$==null){s.ky$=!1
return}if(s.ky$&&!s.gn(s).d){s.m6$.u(0,s)
s.ky$=!1}else if(!s.ky$&&s.gn(s).d){s.m6$.C(0,s)
s.ky$=!0}},
Gw(){var s=this
if(s.ky$){s.m6$.u(0,s)
s.ky$=!1}}}
A.pB.prototype={
E(){return"SelectionEventType."+this.b}}
A.ne.prototype={
E(){return"TextGranularity."+this.b}}
A.a6e.prototype={}
A.rZ.prototype={}
A.n_.prototype={}
A.n0.prototype={
E(){return"SelectionExtendDirection."+this.b}}
A.pC.prototype={
E(){return"SelectionStatus."+this.b}}
A.kP.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.A(s))return!1
return b instanceof A.kP&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&b.c===s.c&&b.d===s.d},
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
eO(a){var s,r,q=this.A$
if(q!=null){s=q.jL(a)
r=q.e
r.toString
t.Ch.a(r)
if(s!=null)s+=r.a.b}else s=this.CR(a)
return s},
aH(a,b){var s,r=this.A$
if(r!=null){s=r.e
s.toString
a.f2(r,t.Ch.a(s).a.U(0,b))}},
cW(a,b){var s,r=this.A$
if(r!=null){s=r.e
s.toString
t.Ch.a(s)
return a.nV(new A.a4K(b,s,r),s.a,b)}return!1}}
A.a4K.prototype={
$2(a,b){return this.c.bY(a,b)},
$S:15}
A.JE.prototype={
r_(){var s=this
if(s.v!=null)return
s.v=s.T.V(s.az)},
sdA(a,b){var s=this
if(s.T.k(0,b))return
s.T=b
s.v=null
s.a8()},
sbK(a){var s=this
if(s.az==a)return
s.az=a
s.v=null
s.a8()},
cf(a){var s,r,q,p=this
p.r_()
if(p.A$==null){s=p.v
return a.bC(new A.a6(s.a+s.c,s.b+s.d))}s=p.v
s.toString
r=a.IR(s)
q=p.A$.h8(r)
s=p.v
return a.bC(new A.a6(s.a+q.a+s.c,s.b+q.b+s.d))},
bJ(){var s,r,q,p,o,n,m=this,l=t.k.a(A.z.prototype.ga0.call(m))
m.r_()
if(m.A$==null){s=m.v
m.k3=l.bC(new A.a6(s.a+s.c,s.b+s.d))
return}s=m.v
s.toString
r=l.IR(s)
m.A$.cv(r,!0)
s=m.A$
q=s.e
q.toString
t.Ch.a(q)
p=m.v
o=p.a
n=p.b
q.a=new A.t(o,n)
s=s.k3
m.k3=l.bC(new A.a6(o+s.a+p.c,n+s.b+p.d))}}
A.Jl.prototype={
r_(){var s=this
if(s.v!=null)return
s.v=s.T.V(s.az)},
sel(a){var s=this
if(s.T.k(0,a))return
s.T=a
s.v=null
s.a8()},
sbK(a){var s=this
if(s.az==a)return
s.az=a
s.v=null
s.a8()},
y6(){var s,r,q,p,o=this
o.r_()
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
r.a=q.lN(t.uu.a(p.aa(0,s)))}}
A.JJ.prototype={
sa78(a){if(this.aS==a)return
this.aS=a
this.a8()},
sa3N(a){if(this.ab==a)return
this.ab=a
this.a8()},
cf(a){var s,r,q=this,p=q.aS!=null||a.b===1/0,o=q.ab!=null||a.d===1/0,n=q.A$
if(n!=null){s=n.h8(new A.aQ(0,a.b,0,a.d))
if(p){n=q.aS
if(n==null)n=1
n=s.a*n}else n=1/0
if(o){r=q.ab
if(r==null)r=1
r=s.b*r}else r=1/0
return a.bC(new A.a6(n,r))}n=p?0:1/0
return a.bC(new A.a6(n,o?0:1/0))},
bJ(){var s,r,q=this,p=t.k.a(A.z.prototype.ga0.call(q)),o=q.aS!=null||p.b===1/0,n=q.ab!=null||p.d===1/0,m=q.A$
if(m!=null){m.cv(new A.aQ(0,p.b,0,p.d),!0)
if(o){m=q.A$.k3.a
s=q.aS
m*=s==null?1:s}else m=1/0
if(n){s=q.A$.k3.b
r=q.ab
s*=r==null?1:r}else s=1/0
q.k3=p.bC(new A.a6(m,s))
q.y6()}else{m=o?0:1/0
q.k3=p.bC(new A.a6(m,n?0:1/0))}}}
A.a6M.prototype={
uE(a){return new A.a6(A.H(1/0,a.a,a.b),A.H(1/0,a.c,a.d))}}
A.Jt.prototype={
syH(a){var s=this,r=s.v
if(r===a)return
if(A.A(a)!==A.A(r)||a.mX(r))s.a8()
s.v=a
s.b!=null},
aq(a){this.Qg(a)},
al(a){this.Qh(0)},
cf(a){return a.bC(this.v.uE(a))},
bJ(){var s,r,q,p,o,n,m=this,l=t.k,k=l.a(A.z.prototype.ga0.call(m))
m.k3=k.bC(m.v.uE(k))
if(m.A$!=null){s=m.v.Bw(l.a(A.z.prototype.ga0.call(m)))
l=m.A$
l.toString
k=s.a
r=s.b
q=k>=r
l.cv(s,!(q&&s.c>=s.d))
l=m.A$
p=l.e
p.toString
t.Ch.a(p)
o=m.v
n=m.k3
n.toString
if(q&&s.c>=s.d)l=new A.a6(A.H(0,k,r),A.H(0,s.c,s.d))
else{l=l.k3
l.toString}p.a=o.BF(n,l)}}}
A.za.prototype={
aq(a){var s
this.eB(a)
s=this.A$
if(s!=null)s.aq(a)},
al(a){var s
this.dW(0)
s=this.A$
if(s!=null)s.al(0)}}
A.ua.prototype={
E(){return"GrowthDirection."+this.b}}
A.kS.prototype={
gKw(){return!1},
a0e(a,b){var s=this.w
switch(A.bd(this.a).a){case 0:return new A.aQ(b,a,s,s)
case 1:return new A.aQ(s,s,b,a)}},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.kS))return!1
return b.a===s.a&&b.b===s.b&&b.d===s.d&&b.f===s.f&&b.r===s.r&&b.w===s.w&&b.x===s.x&&b.y===s.y&&b.Q===s.Q&&b.z===s.z},
gt(a){var s=this
return A.S(s.a,s.b,s.d,s.f,s.r,s.w,s.x,s.y,s.Q,s.z,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r=A.a([s.a.i(0),s.b.i(0),s.c.i(0),"scrollOffset: "+B.d.M(s.d,1),"remainingPaintExtent: "+B.d.M(s.r,1)],t.s),q=s.f
if(q!==0)r.push("overlap: "+B.d.M(q,1))
r.push("crossAxisExtent: "+B.d.M(s.w,1))
r.push("crossAxisDirection: "+s.x.i(0))
r.push("viewportMainAxisExtent: "+B.d.M(s.y,1))
r.push("remainingCacheExtent: "+B.d.M(s.Q,1))
r.push("cacheOrigin: "+B.d.M(s.z,1))
return"SliverConstraints("+B.c.b4(r,", ")+")"}}
A.a8u.prototype={
c0(){return"SliverGeometry"}}
A.pH.prototype={}
A.Kx.prototype={
i(a){return A.A(this.a).i(0)+"@(mainAxis: "+A.h(this.c)+", crossAxis: "+A.h(this.d)+")"}}
A.wW.prototype={
i(a){var s=this.a
return"layoutOffset="+(s==null?"None":B.d.M(s,1))}}
A.kT.prototype={
i(a){return"paintOffset="+A.h(this.a)}}
A.jj.prototype={}
A.ck.prototype={
ga0(){return t.p.a(A.z.prototype.ga0.call(this))},
gjQ(){return this.ghO()},
ghO(){var s=this,r=t.p
switch(A.bd(r.a(A.z.prototype.ga0.call(s)).a).a){case 0:return new A.C(0,0,0+s.id.c,0+r.a(A.z.prototype.ga0.call(s)).w)
case 1:return new A.C(0,0,0+r.a(A.z.prototype.ga0.call(s)).w,0+s.id.c)}},
po(){},
K1(a,b,c){var s=this
if(c>=0&&c<s.id.r&&b>=0&&b<t.p.a(A.z.prototype.ga0.call(s)).w)if(s.zx(a,b,c)||!1){a.C(0,new A.Kx(c,b,s))
return!0}return!1},
zx(a,b,c){return!1},
hx(a,b,c){var s=a.d,r=a.r,q=s+r
return A.H(A.H(c,s,q)-A.H(b,s,q),0,r)},
o5(a,b,c){var s=a.d,r=s+a.z,q=a.Q,p=s+q
return A.H(A.H(c,r,p)-A.H(b,r,p),0,q)},
yo(a){return 0},
ds(a,b){},
it(a,b){}}
A.a4L.prototype={
EM(a){var s
switch(a.a.a){case 0:case 3:s=!1
break
case 2:case 1:s=!0
break
default:s=null}switch(a.b.a){case 0:break
case 1:s=!s
break}return s},
a3X(a,b,c,d){var s,r,q,p,o=this,n={},m=t.p,l=o.EM(m.a(A.z.prototype.ga0.call(o))),k=b.e
k.toString
k=t.D.a(k).a
k.toString
s=k-m.a(A.z.prototype.ga0.call(o)).d
r=d-s
q=c-0
p=n.a=null
switch(A.bd(m.a(A.z.prototype.ga0.call(o)).a).a){case 0:if(!l){m=b.k3.a
r=m-r
s=o.id.c-m-s}p=new A.t(s,0)
n.a=new A.t(r,q)
break
case 1:if(!l){m=b.k3.b
r=m-r
s=o.id.c-m-s}p=new A.t(0,s)
n.a=new A.t(q,r)
break}return a.a04(new A.a4M(n,b),p)}}
A.a4M.prototype={
$1(a){return this.b.bY(a,this.a.a)},
$S:95}
A.QJ.prototype={}
A.QM.prototype={
al(a){this.va(0)}}
A.JN.prototype={
spM(a){if(this.c5===a)return
this.c5=a
this.a8()}}
A.JO.prototype={
MC(a,b){var s,r
if(b>0){s=a/b
r=B.d.bb(s)
if(Math.abs(s*b-r*b)<1e-10)return r
return B.d.cJ(s)}return 0},
BA(a,b){var s,r
if(b>0){s=a/b-1
r=B.d.bb(s)
if(Math.abs(s*b-r*b)<1e-10)return Math.max(0,r)
return Math.max(0,B.d.dt(s))}return 0},
Sj(a){var s,r=this.a7$,q=A.n(this).h("av.1"),p=t.D,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s<a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).ab$}return o},
Sk(a){var s,r=this.bD$,q=A.n(this).h("av.1"),p=t.D,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s>a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).aS$}return o},
bJ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=t.p,a7=a6.a(A.z.prototype.ga0.call(a4)),a8=a4.ao
a8.R8=!1
s=a6.a(A.z.prototype.ga0.call(a4)).y*a4.c5
a6=a7.d
r=a6+a7.z
q=r+a7.Q
p=a7.a0e(s,s)
o=a4.MC(r,s)
n=isFinite(q)?a4.BA(q,s):a5
if(a4.a7$!=null){m=a4.Sj(o)
a4.Io(m,n!=null?a4.Sk(n):0)}else a4.Io(0,0)
if(a4.a7$==null)if(!a4.a_S(o,s*o)){l=o<=0?0:a8.grE()*s
a4.id=A.wV(a5,!1,a5,a5,l,0,0,l,a5)
a8.IV()
return}k=a4.a7$
k.toString
k=k.e
k.toString
j=t.D
k=j.a(k).b
k.toString
i=k-1
h=a5
for(;i>=o;--i){g=a4.a49(p)
if(g==null){a4.id=A.wV(a5,!1,a5,a5,0,0,0,0,i*s)
return}k=g.e
k.toString
j.a(k).a=s*i
if(h==null)h=g}if(h==null){a4.a7$.iA(p)
h=a4.a7$
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
g=k.a(d).ab$
if(g!=null){d=g.e
d.toString
d=j.a(d).b
d.toString
d=d!==i}else d=!0
if(d){g=a4.a48(p,h)
if(g==null){e=i*s
break}}else g.iA(p)
d=g.e
d.toString
j.a(d)
c=d.b
c.toString
d.a=s*c;++i
h=g}k=a4.bD$
k.toString
k=k.e
k.toString
k=j.a(k).b
k.toString
b=s*o
a=s*(k+1)
e=Math.min(e,a8.a2w(a7,o,k,b,a))
a0=a4.hx(a7,b,a)
a1=a4.o5(a7,b,a)
a2=a6+a7.r
a3=isFinite(a2)?a4.BA(a2,s):a5
a4.id=A.wV(a1,a3!=null&&k>=a3||a6>0,a5,a5,e,a0,0,e,a5)
if(e===a)a8.R8=!0
a8.IV()}}
A.hR.prototype={$icg:1}
A.a4Q.prototype={
ex(a){}}
A.hf.prototype={
i(a){var s=this.b,r=this.oK$?"keepAlive; ":""
return"index="+A.h(s)+"; "+r+this.PP(0)}}
A.mQ.prototype={
ex(a){if(!(a.e instanceof A.hf))a.e=new A.hf(!1,null,null)},
ic(a){var s
this.CS(a)
s=a.e
s.toString
t.D.a(s)
if(!s.c){t.x.a(a)
s.b=this.ao.p4}},
zC(a,b,c){this.v3(0,b,c)},
tR(a,b){var s,r,q,p=this,o=a.e
o.toString
s=t.D
s.a(o)
if(!o.c){p.NR(a,b)
o=a.e
o.toString
s.a(o).b=p.ao.p4
p.a8()}else{r=p.ap
if(r.j(0,o.b)===a)r.u(0,o.b)
q=a.e
q.toString
s.a(q).b=p.ao.p4
o=o.b
o.toString
r.l(0,o,a)}},
u(a,b){var s=b.e
s.toString
t.D.a(s)
if(!s.c){this.NT(0,b)
return}this.ap.u(0,s.b)
this.j7(b)},
vY(a,b){this.Kn(new A.a4N(this,a,b),t.p)},
Ef(a){var s,r=this,q=a.e
q.toString
t.D.a(q)
if(q.oK$){r.u(0,a)
s=q.b
s.toString
r.ap.l(0,s,a)
a.e=q
r.CS(a)
q.c=!0}else r.ao.Lv(a)},
aq(a){var s,r,q
this.Qi(a)
for(s=this.ap,s=s.gaT(s),s=new A.dV(J.at(s.a),s.b),r=A.n(s).z[1];s.q();){q=s.a;(q==null?r.a(q):q).aq(a)}},
al(a){var s,r,q
this.Qj(0)
for(s=this.ap,s=s.gaT(s),s=new A.dV(J.at(s.a),s.b),r=A.n(s).z[1];s.q();){q=s.a;(q==null?r.a(q):q).al(0)}},
jD(){this.NS()
var s=this.ap
s.gaT(s).X(0,this.gLs())},
aU(a){var s
this.Cq(a)
s=this.ap
s.gaT(s).X(0,a)},
h7(a){this.Cq(a)},
a_S(a,b){var s
this.vY(a,null)
s=this.a7$
if(s!=null){s=s.e
s.toString
t.D.a(s).a=b
return!0}this.ao.R8=!0
return!1},
a49(a){var s,r,q,p=this,o=p.a7$
o.toString
o=o.e
o.toString
s=t.D
o=s.a(o).b
o.toString
r=o-1
p.vY(r,null)
o=p.a7$
o.toString
q=o.e
q.toString
q=s.a(q).b
q.toString
if(q===r){o.cv(a,!1)
return p.a7$}p.ao.R8=!0
return null},
a48(a,b){var s,r,q,p=b.e
p.toString
s=t.D
p=s.a(p).b
p.toString
r=p+1
this.vY(r,b)
p=b.e
p.toString
q=A.n(this).h("av.1").a(p).ab$
if(q!=null){p=q.e
p.toString
p=s.a(p).b
p.toString
p=p===r}else p=!1
if(p){q.cv(a,!1)
return q}this.ao.R8=!0
return null},
Io(a,b){var s={}
s.a=a
s.b=b
this.Kn(new A.a4P(s,this),t.p)},
L6(a){switch(A.bd(t.p.a(A.z.prototype.ga0.call(this)).a).a){case 0:return a.k3.a
case 1:return a.k3.b}},
zx(a,b,c){var s,r,q=this.bD$,p=A.amx(a)
for(s=A.n(this).h("av.1");q!=null;){if(this.a3X(p,q,b,c))return!0
r=q.e
r.toString
q=s.a(r).aS$}return!1},
yo(a){var s=a.e
s.toString
return t.D.a(s).a},
mB(a){var s=t.ub.a(a.e)
return(s==null?null:s.b)!=null&&!this.ap.P(0,s.b)},
ds(a,b){var s,r,q,p,o=this
if(!o.mB(a))b.C4()
else{s=t.p
r=o.EM(s.a(A.z.prototype.ga0.call(o)))
q=a.e
q.toString
q=t.D.a(q).a
q.toString
p=q-s.a(A.z.prototype.ga0.call(o)).d
switch(A.bd(s.a(A.z.prototype.ga0.call(o)).a).a){case 0:b.aB(0,!r?o.id.c-a.k3.a-p:p,0)
break
case 1:b.aB(0,0,!r?o.id.c-a.k3.b-p:p)
break}}},
aH(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null
if(d.a7$==null)return
s=t.p
switch(A.jP(s.a(A.z.prototype.ga0.call(d)).a,s.a(A.z.prototype.ga0.call(d)).b)){case B.y:r=b.U(0,new A.t(0,d.id.c))
q=B.zB
p=B.dD
o=!0
break
case B.au:r=b
q=B.dD
p=B.fv
o=!1
break
case B.x:r=b
q=B.fv
p=B.dD
o=!1
break
case B.ae:r=b.U(0,new A.t(d.id.c,0))
q=B.zC
p=B.fv
o=!0
break
default:o=c
r=o
p=r
q=p}n=d.a7$
for(m=A.n(d).h("av.1"),l=t.D;n!=null;){k=n.e
k.toString
k=l.a(k).a
k.toString
j=k-s.a(A.z.prototype.ga0.call(d)).d
k=r.a
i=q.a
k=k+i*j+p.a*0
h=r.b
g=q.b
h=h+g*j+p.b*0
f=new A.t(k,h)
if(o){e=d.L6(n)
f=new A.t(k+i*e,h+g*e)}if(j<s.a(A.z.prototype.ga0.call(d)).r&&j+d.L6(n)>0)a.f2(n,f)
k=n.e
k.toString
n=m.a(k).ab$}}}
A.a4N.prototype={
$1(a){var s=this.a,r=s.ap,q=this.b,p=this.c
if(r.P(0,q)){r=r.u(0,q)
r.toString
q=r.e
q.toString
t.D.a(q)
s.j7(r)
r.e=q
s.v3(0,r,p)
q.c=!1}else s.ao.a1G(q,p)},
$S:96}
A.a4P.prototype={
$1(a){var s,r,q
for(s=this.a,r=this.b;s.a>0;){q=r.a7$
q.toString
r.Ef(q);--s.a}for(;s.b>0;){q=r.bD$
q.toString
r.Ef(q);--s.b}s=r.ap
s=s.gaT(s)
q=A.n(s).h("aH<o.E>")
B.c.X(A.aA(new A.aH(s,new A.a4O(),q),!0,q.h("o.E")),r.ao.ga69())},
$S:96}
A.a4O.prototype={
$1(a){var s=a.e
s.toString
return!t.D.a(s).oK$},
$S:250}
A.zc.prototype={
aq(a){var s,r,q
this.eB(a)
s=this.a7$
for(r=t.D;s!=null;){s.aq(a)
q=s.e
q.toString
s=r.a(q).ab$}},
al(a){var s,r,q
this.dW(0)
s=this.a7$
for(r=t.D;s!=null;){s.al(0)
q=s.e
q.toString
s=r.a(q).ab$}}}
A.Q1.prototype={}
A.Q2.prototype={}
A.QK.prototype={
al(a){this.va(0)}}
A.QL.prototype={}
A.wc.prototype={
gyi(){var s=this,r=t.p
switch(A.jP(r.a(A.z.prototype.ga0.call(s)).a,r.a(A.z.prototype.ga0.call(s)).b)){case B.y:return s.bQ.d
case B.au:return s.bQ.a
case B.x:return s.bQ.b
case B.ae:return s.bQ.c}},
ga06(){var s=this,r=t.p
switch(A.jP(r.a(A.z.prototype.ga0.call(s)).a,r.a(A.z.prototype.ga0.call(s)).b)){case B.y:return s.bQ.b
case B.au:return s.bQ.c
case B.x:return s.bQ.d
case B.ae:return s.bQ.a}},
ga1R(){switch(A.bd(t.p.a(A.z.prototype.ga0.call(this)).a).a){case 0:var s=this.bQ
return s.gb8(s)+s.gbc(s)
case 1:return this.bQ.gcn()}},
ex(a){if(!(a.e instanceof A.kT))a.e=new A.kT(B.j)},
bJ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=null,a2=t.p,a3=a2.a(A.z.prototype.ga0.call(a0)),a4=a0.gyi()
a0.ga06()
s=a0.bQ
s.toString
a2=s.a08(A.bd(a2.a(A.z.prototype.ga0.call(a0)).a))
r=a0.ga1R()
if(a0.A$==null){q=a0.hx(a3,0,a2)
a0.id=A.wV(a0.o5(a3,0,a2),!1,a1,a1,a2,Math.min(q,a3.r),0,a2,a1)
return}p=a0.hx(a3,0,a4)
o=a3.f
if(o>0)o=Math.max(0,o-p)
s=a0.A$
s.toString
n=Math.max(0,a3.d-a4)
m=Math.min(0,a3.z+a4)
l=a3.r
k=a0.hx(a3,0,a4)
j=a3.Q
i=a0.o5(a3,0,a4)
h=Math.max(0,a3.w-r)
g=a3.a
f=a3.b
s.cv(new A.kS(g,f,a3.c,n,a4+a3.e,o,l-k,h,a3.x,a3.y,m,j-i),!0)
e=a0.A$.id
s=e.y
if(s!=null){a0.id=A.wV(a1,!1,a1,a1,0,0,0,0,s)
return}s=e.a
n=a4+s
m=a2+s
d=a0.hx(a3,n,m)
c=p+d
b=a0.o5(a3,0,a4)
a=a0.o5(a3,n,m)
n=e.c
k=e.d
q=Math.min(p+Math.max(n,k+d),l)
l=e.b
k=Math.min(c+k,q)
j=Math.min(a+b+e.z,j)
i=e.e
n=Math.max(c+n,p+e.r)
a0.id=A.wV(j,e.x,n,k,a2+i,q,l,m,a1)
m=a0.A$.e
m.toString
t.v.a(m)
switch(A.jP(g,f)){case B.y:a2=a0.bQ
n=a2.a
s=a2.d+s
m.a=new A.t(n,a0.hx(a3,s,s+a2.b))
break
case B.au:m.a=new A.t(a0.hx(a3,0,a0.bQ.a),a0.bQ.b)
break
case B.x:a2=a0.bQ
m.a=new A.t(a2.a,a0.hx(a3,0,a2.b))
break
case B.ae:a2=a0.bQ
s=a2.c+s
m.a=new A.t(a0.hx(a3,s,s+a2.a),a0.bQ.b)
break}},
zx(a,b,c){var s,r,q,p,o=this,n=o.A$
if(n!=null&&n.id.r>0){n=n.e
n.toString
t.v.a(n)
s=o.hx(t.p.a(A.z.prototype.ga0.call(o)),0,o.gyi())
r=o.A$
r.toString
r=o.a0I(r)
n=n.a
q=o.A$.ga3V()
p=n!=null
if(p)a.c.push(new A.qQ(new A.t(-n.a,-n.b)))
q.$3$crossAxisPosition$mainAxisPosition(a,b-r,c-s)
if(p)a.u7()}return!1},
a0I(a){var s=this,r=t.p
switch(A.jP(r.a(A.z.prototype.ga0.call(s)).a,r.a(A.z.prototype.ga0.call(s)).b)){case B.y:case B.x:return s.bQ.a
case B.ae:case B.au:return s.bQ.b}},
yo(a){return this.gyi()},
ds(a,b){var s=a.e
s.toString
s=t.v.a(s).a
b.aB(0,s.a,s.b)},
aH(a,b){var s,r=this.A$
if(r!=null&&r.id.w){s=r.e
s.toString
a.f2(r,b.U(0,t.v.a(s).a))}}}
A.Q_.prototype={
aq(a){var s
this.eB(a)
s=this.A$
if(s!=null)s.aq(a)},
al(a){var s
this.dW(0)
s=this.A$
if(s!=null)s.al(0)}}
A.a4k.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return b instanceof A.a4k&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this
return"RelativeRect.fromLTRB("+B.d.M(s.a,1)+", "+B.d.M(s.b,1)+", "+B.d.M(s.c,1)+", "+B.d.M(s.d,1)+")"}}
A.dY.prototype={
gzI(){var s=this
return s.e!=null||s.f!=null||s.r!=null||s.w!=null||s.x!=null||s.y!=null},
i(a){var s=this,r=A.a([],t.s),q=s.e
if(q!=null)r.push("top="+A.hs(q))
q=s.f
if(q!=null)r.push("right="+A.hs(q))
q=s.r
if(q!=null)r.push("bottom="+A.hs(q))
q=s.w
if(q!=null)r.push("left="+A.hs(q))
q=s.x
if(q!=null)r.push("width="+A.hs(q))
q=s.y
if(q!=null)r.push("height="+A.hs(q))
if(r.length===0)r.push("not positioned")
r.push(s.q7(0))
return B.c.b4(r,"; ")}}
A.x3.prototype={
E(){return"StackFit."+this.b}}
A.wd.prototype={
ex(a){if(!(a.e instanceof A.dY))a.e=new A.dY(null,null,B.j)},
ZE(){var s=this
if(s.af!=null)return
s.af=s.ac.V(s.av)},
sel(a){var s=this
if(s.ac.k(0,a))return
s.ac=a
s.af=null
s.a8()},
sbK(a){var s=this
if(s.av==a)return
s.av=a
s.af=null
s.a8()},
eO(a){return this.IQ(a)},
cf(a){return this.GP(a,A.ai6())},
GP(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.ZE()
if(e.dz$===0){s=a.a
r=a.b
q=A.H(1/0,s,r)
p=a.c
o=a.d
n=A.H(1/0,p,o)
return isFinite(q)&&isFinite(n)?new A.a6(A.H(1/0,s,r),A.H(1/0,p,o)):new A.a6(A.H(0,s,r),A.H(0,p,o))}m=a.a
l=a.c
switch(e.b0.a){case 0:k=new A.aQ(0,a.b,0,a.d)
break
case 1:k=A.Br(new A.a6(A.H(1/0,m,a.b),A.H(1/0,l,a.d)))
break
case 2:k=a
break
default:k=null}j=e.a7$
for(s=t.B,i=l,h=m,g=!1;j!=null;){r=j.e
r.toString
s.a(r)
if(!r.gzI()){f=b.$2(j,k)
h=Math.max(h,f.a)
i=Math.max(i,f.b)
g=!0}j=r.ab$}return g?new A.a6(h,i):new A.a6(A.H(1/0,m,a.b),A.H(1/0,l,a.d))},
bJ(){var s,r,q,p,o,n,m,l=this,k=t.k.a(A.z.prototype.ga0.call(l))
l.K=!1
l.k3=l.GP(k,A.ai7())
s=l.a7$
for(r=t.B,q=t.uu;s!=null;){p=s.e
p.toString
r.a(p)
if(!p.gzI()){o=l.af
o.toString
n=l.k3
n.toString
m=s.k3
m.toString
p.a=o.lN(q.a(n.aa(0,m)))}else{o=l.k3
o.toString
n=l.af
n.toString
l.K=A.aoi(s,p,o,n)||l.K}s=p.ab$}},
cW(a,b){return this.yE(a,b)},
u3(a,b){this.oi(a,b)},
aH(a,b){var s,r=this,q=r.b6,p=q!==B.l&&r.K,o=r.A
if(p){p=r.cx
p===$&&A.b()
s=r.k3
o.saZ(0,a.kM(p,b,new A.C(0,0,0+s.a,0+s.b),r.gAB(),q,o.a))}else{o.saZ(0,null)
r.oi(a,b)}},
m(){this.A.saZ(0,null)
this.i6()},
j4(a){var s
switch(this.b6.a){case 0:return null
case 1:case 2:case 3:if(this.K){s=this.k3
s=new A.C(0,0,0+s.a,0+s.b)}else s=null
return s}}}
A.Q3.prototype={
aq(a){var s,r,q
this.eB(a)
s=this.a7$
for(r=t.B;s!=null;){s.aq(a)
q=s.e
q.toString
s=r.a(q).ab$}},
al(a){var s,r,q
this.dW(0)
s=this.a7$
for(r=t.B;s!=null;){s.al(0)
q=s.e
q.toString
s=r.a(q).ab$}}}
A.Q4.prototype={}
A.LC.prototype={
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return b instanceof A.LC&&b.a.k(0,this.a)&&b.b===this.b},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return this.a.i(0)+" at "+A.hs(this.b)+"x"}}
A.we.prototype={
syq(a){var s,r,q,p,o=this
if(o.k1.k(0,a))return
s=o.k1
o.k1=a
r=s.b
r=A.v5(r,r,1)
q=o.k1.b
if(!r.k(0,A.v5(q,q,1))){r=o.Hs()
q=o.ch
p=q.a
p.toString
J.au0(p)
q.saZ(0,r)
o.au()}o.a8()},
Hs(){var s,r=this.k1.b
r=A.v5(r,r,1)
this.k4=r
s=A.aoW(r)
s.aq(this)
return s},
po(){},
bJ(){var s,r=this.k1.a
this.id=r
s=this.A$
if(s!=null)s.iA(A.Br(r))},
bY(a,b){var s=this.A$
if(s!=null)s.bY(A.amx(a),b)
a.C(0,new A.hM(this,t.Cq))
return!0},
a4_(a){var s,r=A.a([],t.f1),q=new A.bf(new Float64Array(16))
q.dg()
s=new A.hz(r,A.a([q],t.hZ),A.a([],t.pw))
this.bY(s,a)
return s},
gdN(){return!0},
aH(a,b){var s=this.A$
if(s!=null)a.f2(s,b)},
ds(a,b){var s=this.k4
s.toString
b.cL(0,s)
this.P8(a,b)},
a14(){var s,r,q
try{q=$.aq()
s=q.a1N()
r=this.ch.a.a0r(s)
this.a_q()
q.a6e(r)
r.m()}finally{}},
a_q(){var s,r,q,p,o,n,m,l,k,j=null,i=this.ghO(),h=i.gaK(),g=this.k2
g.gkR()
s=i.gaK()
g.gkR()
g=this.ch
r=t.g9
q=g.a.JA(0,new A.t(h.a,0),r)
switch(A.lp().a){case 0:p=g.a.JA(0,new A.t(s.a,i.d-1-0),r)
break
case 1:case 2:case 3:case 4:case 5:p=j
break
default:p=j}h=q==null
if(h&&p==null)return
if(!h&&p!=null){h=q.f
g=q.r
s=q.e
r=q.w
A.aoL(new A.ig(p.a,p.b,p.c,p.d,s,h,g,r))
return}o=A.lp()===B.ay
n=h?p:q
h=n.f
g=n.r
s=n.e
r=n.w
m=o?n.a:j
l=o?n.b:j
k=o?n.c:j
A.aoL(new A.ig(m,l,k,o?n.d:j,s,h,g,r))},
ghO(){var s=this.id.Z(0,this.k1.b)
return new A.C(0,0,0+s.a,0+s.b)},
gjQ(){var s,r=this.k4
r.toString
s=this.id
return A.h8(r,new A.C(0,0,0+s.a,0+s.b))}}
A.Q6.prototype={
aq(a){var s
this.eB(a)
s=this.A$
if(s!=null)s.aq(a)},
al(a){var s
this.dW(0)
s=this.A$
if(s!=null)s.al(0)}}
A.Bx.prototype={
E(){return"CacheExtentStyle."+this.b}}
A.pq.prototype={
i(a){return"RevealedOffset(offset: "+A.h(this.a)+", rect: "+this.b.i(0)+")"}}
A.pn.prototype={
eR(a){this.hf(a)
a.HV(B.By)},
h7(a){var s=this.gIj()
new A.aH(s,new A.a4U(),A.aT(s).h("aH<1>")).X(0,a)},
sfN(a){if(a===this.K)return
this.K=a
this.a8()},
sa1Q(a){if(a===this.af)return
this.af=a
this.a8()},
sbI(a,b){var s=this,r=s.ac
if(b===r)return
if(s.b!=null)r.G(0,s.gtM())
s.ac=b
if(s.b!=null)b.Y(0,s.gtM())
s.a8()},
sa0u(a){if(a===this.av)return
this.av=a
this.a8()},
sa0v(a){if(a===this.b6)return
this.b6=a
this.a8()},
aq(a){this.Qk(a)
this.ac.Y(0,this.gtM())},
al(a){this.ac.G(0,this.gtM())
this.Ql(0)},
gdN(){return!0},
KD(a,b,c,d,e,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.aCV(h.ac.k4,e),f=a0+a2
for(s=e.a,r=t.v,q=a0,p=0;c!=null;){o=a5<=0?0:a5
n=Math.max(b,-o)
m=b-n
c.cv(new A.kS(h.K,e,g,o,p,f-q,Math.max(0,a4-q+a0),d,h.af,a1,n,Math.max(0,a3+m)),!0)
l=c.id
k=l.y
if(k!=null)return k
j=q+l.b
k=l.w||a5>0
i=c.e
if(k){i.toString
r.a(i).a=h.Iq(c,j,e)}else{i.toString
r.a(i).a=h.Iq(c,-a5+a0,e)}f=Math.max(j+l.c,f)
k=l.a
a5-=k
p+=k
q+=l.d
i=l.z
if(i!==0){a3-=i-m
b=Math.min(n+i,0)}switch(s){case 0:i=h.oJ
i===$&&A.b()
h.oJ=i+k
break
case 1:i=h.oI
i===$&&A.b()
h.oI=i-k
break}if(l.x)h.c4=!0
c=a.$1(c)}return 0},
j4(a){var s,r,q,p,o,n
switch(this.A.a){case 0:return null
case 1:case 2:case 3:break}s=this.k3
r=0+s.a
q=0+s.b
s=t.p
if(s.a(A.z.prototype.ga0.call(a)).f===0||!isFinite(s.a(A.z.prototype.ga0.call(a)).y))return new A.C(0,0,r,q)
p=s.a(A.z.prototype.ga0.call(a)).y-s.a(A.z.prototype.ga0.call(a)).r+s.a(A.z.prototype.ga0.call(a)).f
switch(A.jP(this.K,s.a(A.z.prototype.ga0.call(a)).b)){case B.x:o=0+p
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
yJ(a){var s,r=this,q=r.b0
if(q==null){q=r.k3
return new A.C(0,0,0+q.a,0+q.b)}switch(A.bd(r.K).a){case 1:s=r.k3
return new A.C(0,0-q,0+s.a,0+s.b+q)
case 0:s=r.k3
return new A.C(0-q,0,0+s.a+q,0+s.b)}},
aH(a,b){var s,r,q,p=this
if(p.a7$==null)return
s=p.c4&&p.A!==B.l
r=p.ah
if(s){s=p.cx
s===$&&A.b()
q=p.k3
r.saZ(0,a.kM(s,b,new A.C(0,0,0+q.a,0+q.b),p.gXU(),p.A,r.a))}else{r.saZ(0,null)
p.FM(a,b)}},
m(){this.ah.saZ(0,null)
this.i6()},
FM(a,b){var s,r,q,p,o,n,m,l
for(s=this.gIj(),r=s.length,q=t.v,p=b.a,o=b.b,n=0;n<s.length;s.length===r||(0,A.P)(s),++n){m=s[n]
if(m.id.w){l=m.e
l.toString
l=q.a(l).a
a.f2(m,new A.t(p+l.a,o+l.b))}}},
cW(a,b){var s,r,q,p,o,n,m,l,k={}
k.a=k.b=null
switch(A.bd(this.K).a){case 1:k.b=b.b
k.a=b.a
break
case 0:k.b=b.a
k.a=b.b
break}s=new A.pH(a.a,a.b,a.c)
for(r=this.ga0J(),q=r.length,p=t.v,o=0;o<r.length;r.length===q||(0,A.P)(r),++o){n=r[o]
if(!n.id.w)continue
m=new A.bf(new Float64Array(16))
m.dg()
l=n.e
l.toString
l=p.a(l).a
m.aB(0,l.a,l.b)
if(a.a05(new A.a4T(k,this,n,s),m))return!0}return!1},
kS(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=a instanceof A.ck
for(s=t.d,r=c,q=a,p=0;o=q.c,o!==d;q=o){o.toString
s.a(o)
if(q instanceof A.F)r=q
if(o instanceof A.ck){n=o.yo(q)
n.toString
p+=n}else{p=0
b=!1}}if(r!=null){s=r.c
s.toString
t.q0.a(s)
m=t.p.a(A.z.prototype.ga0.call(s)).b
switch(A.bd(d.K).a){case 0:l=r.k3.a
break
case 1:l=r.k3.b
break
default:l=c}if(a1==null)a1=a.ghO()
k=A.h8(a.bA(0,r),a1)}else{if(b){t.q0.a(a)
s=t.p
m=s.a(A.z.prototype.ga0.call(a)).b
l=a.id.a
if(a1==null)switch(A.bd(d.K).a){case 0:a1=new A.C(0,0,0+l,0+s.a(A.z.prototype.ga0.call(a)).w)
break
case 1:a1=new A.C(0,0,0+s.a(A.z.prototype.ga0.call(a)).w,0+a.id.a)
break}}else{s=d.ac.at
s.toString
a1.toString
return new A.pq(s,a1)}k=a1}t.q0.a(q)
switch(A.jP(d.K,m)){case B.y:s=k.d
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
p=d.N0(q,p)
i=A.h8(a.bA(0,d),a1)
h=d.a5_(q)
switch(t.p.a(A.z.prototype.ga0.call(q)).b.a){case 0:p-=h
break
case 1:switch(A.bd(d.K).a){case 1:p-=i.d-i.b
break
case 0:p-=i.c-i.a
break}break}s=d.K
switch(A.bd(s).a){case 0:g=d.k3.a-h
break
case 1:g=d.k3.b-h
break
default:g=c}f=p-(g-j)*a0
o=d.ac.at
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
Iq(a,b,c){switch(A.jP(this.K,c)){case B.y:return new A.t(0,this.k3.b-(b+a.id.c))
case B.au:return new A.t(b,0)
case B.x:return new A.t(0,b)
case B.ae:return new A.t(this.k3.a-(b+a.id.c),0)}},
ey(a,b,c,d){var s=this
if(!s.ac.r.glM())return s.q9(a,b,c,d)
s.q9(a,null,c,A.aok(a,b,c,s.ac,d,s))},
mZ(){return this.ey(B.aK,null,B.u,null)},
l2(a,b){return this.ey(B.aK,a,B.u,b)},
$iJk:1}
A.a4U.prototype={
$1(a){var s=a.id
return s.w||s.z>0},
$S:252}
A.a4T.prototype={
$1(a){var s=this,r=s.c,q=s.a,p=s.b.a16(r,q.b)
return r.K1(s.d,q.a,p)},
$S:95}
A.wf.prototype={
ex(a){if(!(a.e instanceof A.jj))a.e=new A.jj(null,null,B.j)},
sa0a(a){if(a===this.td)return
this.td=a
this.a8()},
saK(a){if(a==this.e5)return
this.e5=a
this.a8()},
gjT(){return!0},
cf(a){return new A.a6(A.H(1/0,a.a,a.b),A.H(1/0,a.c,a.d))},
bJ(){var s,r,q,p,o,n,m,l,k,j=this
switch(A.bd(j.K).a){case 1:j.ac.o1(j.k3.b)
break
case 0:j.ac.o1(j.k3.a)
break}if(j.e5==null){j.oJ=j.oI=0
j.c4=!1
j.ac.nZ(0,0)
return}switch(A.bd(j.K).a){case 1:s=j.k3
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
o=j.S2(r,q,p+0)
if(o!==0){p=j.ac
n=p.at
n.toString
p.at=n+o
p.ch=!0}else{p=j.ac
n=j.oI
n===$&&A.b()
m=j.td
n=Math.min(0,n+r*m)
l=j.oJ
l===$&&A.b()
if(p.nZ(n,Math.max(0,l-r*(1-m))))break}k=s+1
if(k<10){s=k
continue}else break}while(!0)},
S2(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.oJ=e.oI=0
e.c4=!1
s=a*e.td-c
r=A.H(s,0,a)
q=a-s
p=A.H(q,0,a)
switch(e.b6.a){case 0:e.b0=e.av
break
case 1:e.b0=a*e.av
break}o=e.b0
o.toString
n=a+2*o
m=s+o
l=A.H(m,0,n)
k=A.H(n-m,0,n)
j=e.e5.e
j.toString
i=A.n(e).h("av.1").a(j).aS$
j=i==null
if(!j){h=Math.max(a,s)
g=e.KD(e.ga0G(),A.H(q,-o,0),i,b,B.nJ,p,a,0,l,r,h-a)
if(g!==0)return-g}q=e.e5
o=-s
h=Math.max(0,o)
o=j?Math.min(0,o):0
j=s>=a?s:r
f=e.b0
f.toString
return e.KD(e.ga0E(),A.H(s,-f,0),q,b,B.nI,j,a,o,k,p,h)},
N0(a,b){var s,r,q,p,o=this
switch(t.p.a(A.z.prototype.ga0.call(a)).b.a){case 0:s=o.e5
for(r=A.n(o).h("av.1"),q=0;s!==a;){q+=s.id.a
p=s.e
p.toString
s=r.a(p).ab$}return q+b
case 1:r=o.e5.e
r.toString
p=A.n(o).h("av.1")
s=p.a(r).aS$
for(q=0;s!==a;){q-=s.id.a
r=s.e
r.toString
s=p.a(r).aS$}return q-b}},
a5_(a){var s,r,q,p=this
switch(t.p.a(A.z.prototype.ga0.call(a)).b.a){case 0:s=p.e5
for(r=A.n(p).h("av.1");s!==a;){s.id.toString
q=s.e
q.toString
s=r.a(q).ab$}return 0
case 1:r=p.e5.e
r.toString
q=A.n(p).h("av.1")
s=q.a(r).aS$
for(;s!==a;){s.id.toString
r=s.e
r.toString
s=q.a(r).aS$}return 0}},
ds(a,b){var s=a.e
s.toString
s=t.v.a(s).a
b.aB(0,s.a,s.b)},
a16(a,b){var s,r=a.e
r.toString
t.v.a(r)
s=t.p
switch(A.jP(s.a(A.z.prototype.ga0.call(a)).a,s.a(A.z.prototype.ga0.call(a)).b)){case B.x:return b-r.a.b
case B.au:return b-r.a.a
case B.y:return a.id.c-(b-r.a.b)
case B.ae:return a.id.c-(b-r.a.a)}},
gIj(){var s,r,q=this,p=A.a([],t.jT),o=q.a7$
if(o==null)return p
for(s=A.n(q).h("av.1");o!=q.e5;){o.toString
p.push(o)
r=o.e
r.toString
o=s.a(r).ab$}o=q.bD$
for(;!0;){o.toString
p.push(o)
if(o===q.e5)return p
r=o.e
r.toString
o=s.a(r).aS$}},
ga0J(){var s,r,q,p=this,o=A.a([],t.jT)
if(p.a7$==null)return o
s=p.e5
for(r=A.n(p).h("av.1");s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).ab$}q=p.e5.e
q.toString
s=r.a(q).aS$
for(;s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).aS$}return o}}
A.iw.prototype={
aq(a){var s,r,q
this.eB(a)
s=this.a7$
for(r=A.n(this).h("iw.0");s!=null;){s.aq(a)
q=s.e
q.toString
s=r.a(q).ab$}},
al(a){var s,r,q
this.dW(0)
s=this.a7$
for(r=A.n(this).h("iw.0");s!=null;){s.al(0)
q=s.e
q.toString
s=r.a(q).ab$}}}
A.px.prototype={
E(){return"ScrollDirection."+this.b}}
A.fB.prototype={
pf(a,b,c,d){var s=d.a===B.u.a
if(s){this.dO(b)
return A.bF(null,t.H)}else return this.hu(b,c,d)},
i(a){var s=this,r=A.a([],t.s)
s.PJ(r)
r.push(A.A(s.w).i(0))
r.push(s.r.i(0))
r.push(A.h(s.fr))
r.push(s.k4.i(0))
return"<optimized out>#"+A.bM(s)+"("+B.c.b4(r,", ")+")"},
ck(a){var s=this.at
if(s!=null)a.push("offset: "+B.d.M(s,1))}}
A.qy.prototype={}
A.kN.prototype={
E(){return"SchedulerPhase."+this.b}}
A.a3e.prototype={}
A.dE.prototype={
a03(a){var s=this.z$
s.push(a)
if(s.length===1){s=$.aN()
s.ay=this.gTF()
s.ch=$.a8}},
Lz(a){var s=this.z$
B.c.u(s,a)
if(s.length===0){s=$.aN()
s.ay=null
s.ch=$.a8}},
TG(a){var s,r,q,p,o,n,m,l,k=this.z$,j=A.aA(k,!0,t.wX)
for(p=j.length,o=0;o<p;++o){s=j[o]
try{if(B.c.B(k,s))s.$1(a)}catch(n){r=A.ae(n)
q=A.au(n)
m=A.bo("while executing callbacks for FrameTiming")
l=$.fJ()
if(l!=null)l.$1(new A.bJ(r,q,"Flutter framework",m,null,!1))}}},
tn(a){this.Q$=a
switch(a.a){case 0:case 1:this.Gz(!0)
break
case 2:case 3:this.Gz(!1)
break}},
Ev(){if(this.ax$)return
this.ax$=!0
A.cb(B.u,this.gYX())},
YY(){this.ax$=!1
if(this.a35())this.Ev()},
a35(){var s,r,q,p,o,n,m=this,l="No element",k=m.at$,j=k.c===0
if(j||m.b>0)return!1
if(j)A.K(A.a5(l))
s=k.qj(0)
j=s.b
if(m.as$.$2$priority$scheduler(j,m)){try{if(k.c===0)A.K(A.a5(l));++k.d
k.qj(0)
p=k.c-1
o=k.qj(p)
k.b[p]=null
k.c=p
if(p>0)k.S6(o,0)
s.a7S()}catch(n){r=A.ae(n)
q=A.au(n)
j=A.bo("during a task callback")
A.e7(new A.bJ(r,q,"scheduler library",j,null,!1))}return k.c!==0}return!1},
q_(a,b){var s,r=this
r.i_()
s=++r.ay$
r.ch$.l(0,s,new A.qy(a))
return r.ay$},
pZ(a){return this.q_(a,!1)},
gJj(){var s=this
if(s.db$==null){if(s.dy$===B.cH)s.i_()
s.db$=new A.aI(new A.a7($.a8,t.U),t._)
s.cy$.push(new A.a5K(s))}return s.db$.a},
gJL(){return this.fr$},
Gz(a){if(this.fr$===a)return
this.fr$=a
if(a)this.i_()},
Jk(){var s=$.aN()
if(s.w==null){s.w=this.gUL()
s.x=$.a8}if(s.y==null){s.y=this.gV8()
s.z=$.a8}},
z4(){switch(this.dy$.a){case 0:case 4:this.i_()
return
case 1:case 2:case 3:return}},
i_(){var s,r=this
if(!r.dx$)s=!(A.dE.prototype.gJL.call(r)&&r.cI$)
else s=!0
if(s)return
r.Jk()
$.aN().i_()
r.dx$=!0},
MW(){if(this.dx$)return
this.Jk()
$.aN().i_()
this.dx$=!0},
uJ(){var s,r,q=this
if(q.fx$||q.dy$!==B.cH)return
q.fx$=!0
s=new A.Lh(null,0,A.a([],t.vS))
s.q4(0,"Warm-up frame")
r=q.dx$
A.cb(B.u,new A.a5M(q))
A.cb(B.u,new A.a5N(q,r))
q.a4T(new A.a5O(q,s))},
a6q(){var s=this
s.go$=s.Dn(s.id$)
s.fy$=null},
Dn(a){var s=this.fy$,r=s==null?B.u:new A.aP(a.a-s.a)
return A.c7(B.d.bb(r.a/$.aqA)+this.go$.a,0,0)},
UM(a){if(this.fx$){this.k4$=!0
return}this.JO(a)},
V9(){var s=this
if(s.k4$){s.k4$=!1
s.cy$.push(new A.a5J(s))
return}s.JQ()},
JO(a){var s,r,q=this,p=q.ok$,o=p==null
if(!o)p.q4(0,"Frame")
if(q.fy$==null)q.fy$=a
r=a==null
q.k1$=q.Dn(r?q.id$:a)
if(!r)q.id$=a
q.dx$=!1
try{if(!o)p.q4(0,"Animate")
q.dy$=B.U8
s=q.ch$
q.ch$=A.y(t.S,t.b1)
J.jV(s,new A.a5L(q))
q.CW$.a_(0)}finally{q.dy$=B.U9}},
a6o(a){var s=this,r=s.p1$,q=r==null
if(!q&&r!==a)return null
if(r===a)++s.p2$
else if(q){s.p1$=a
s.p2$=1}return new A.a3e(s.gTm())},
Tn(){if(--this.p2$===0){this.p1$=null
$.aN()}},
JQ(){var s,r,q,p,o,n,m,l=this,k=l.ok$,j=k==null
if(!j)k.ti(0)
try{l.dy$=B.Bg
for(p=l.cx$,o=p.length,n=0;n<p.length;p.length===o||(0,A.P)(p),++n){s=p[n]
m=l.k1$
m.toString
l.Fh(s,m)}l.dy$=B.Ua
p=l.cy$
r=A.aA(p,!0,t.qP)
B.c.a_(p)
for(p=r,o=p.length,n=0;n<p.length;p.length===o||(0,A.P)(p),++n){q=p[n]
m=l.k1$
m.toString
l.Fh(q,m)}}finally{l.dy$=B.cH
if(!j)k.ti(0)
l.k1$=null}},
Fi(a,b,c){var s,r,q,p
try{a.$1(b)}catch(q){s=A.ae(q)
r=A.au(q)
p=A.bo("during a scheduler callback")
A.e7(new A.bJ(s,r,"scheduler library",p,null,!1))}},
Fh(a,b){return this.Fi(a,b,null)}}
A.a5K.prototype={
$1(a){var s=this.a
s.db$.eN(0)
s.db$=null},
$S:2}
A.a5M.prototype={
$0(){this.a.JO(null)},
$S:0}
A.a5N.prototype={
$0(){var s=this.a
s.JQ()
s.a6q()
s.fx$=!1
if(this.b)s.i_()},
$S:0}
A.a5O.prototype={
$0(){var s=0,r=A.a2(t.H),q=this
var $async$$0=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:s=2
return A.a4(q.a.gJj(),$async$$0)
case 2:q.b.ti(0)
return A.a0(null,r)}})
return A.a1($async$$0,r)},
$S:56}
A.a5J.prototype={
$1(a){var s=this.a
s.dx$=!1
s.i_()},
$S:2}
A.a5L.prototype={
$2(a,b){var s,r,q=this.a
if(!q.CW$.B(0,a)){s=b.a
r=q.k1$
r.toString
q.Fi(s,r,b.b)}},
$S:254}
A.q4.prototype={
sA5(a,b){var s=this
if(b===s.b)return
s.b=b
if(b)s.Bd()
else if(s.a!=null&&s.e==null)s.e=$.bP.q_(s.gxC(),!1)},
ga4y(){if(this.a==null)return!1
if(this.b)return!1
var s=$.bP
s.toString
if(A.dE.prototype.gJL.call(s)&&s.cI$)return!0
if($.bP.dy$!==B.cH)return!0
return!1},
n2(a){var s,r,q=this
q.a=new A.ni(new A.aI(new A.a7($.a8,t.U),t._))
if(!q.b)s=q.e==null
else s=!1
if(s)q.e=$.bP.q_(q.gxC(),!1)
s=$.bP
r=s.dy$.a
if(r>0&&r<4){s=s.k1$
s.toString
q.c=s}s=q.a
s.toString
return s},
n3(a,b){var s=this,r=s.a
if(r==null)return
s.c=s.a=null
s.Bd()
if(b)r.DG(s)
else r.H5()},
hc(a){return this.n3(a,!1)},
ZT(a){var s,r=this
r.e=null
s=r.c
if(s==null)s=r.c=a
r.d.$1(new A.aP(a.a-s.a))
if(!r.b&&r.a!=null&&r.e==null)r.e=$.bP.q_(r.gxC(),!0)},
Bd(){var s,r=this.e
if(r!=null){s=$.bP
s.ch$.u(0,r)
s.CW$.C(0,r)
this.e=null}},
m(){var s=this,r=s.a
if(r!=null){s.a=null
s.Bd()
r.DG(s)}},
a6N(a,b){var s=""+"Ticker()"
return s.charCodeAt(0)==0?s:s},
i(a){return this.a6N(a,!1)}}
A.ni.prototype={
H5(){this.c=!0
this.a.eN(0)
var s=this.b
if(s!=null)s.eN(0)},
DG(a){var s
this.c=!1
s=this.b
if(s!=null)s.ie(new A.xr(a))},
Md(a){var s,r,q=this,p=new A.aa0(a)
if(q.b==null){s=q.b=new A.aI(new A.a7($.a8,t.U),t._)
r=q.c
if(r!=null)if(r)s.eN(0)
else s.ie(B.ZI)}q.b.a.dT(p,p,t.H)},
lP(a,b){return this.a.a.lP(a,b)},
fO(a){return this.lP(a,null)},
dT(a,b,c){return this.a.a.dT(a,b,c)},
aE(a,b){return this.dT(a,null,b)},
f4(a){return this.a.a.f4(a)},
i(a){var s=A.bM(this),r=this.c
if(r==null)r="active"
else r=r?"complete":"canceled"
return"<optimized out>#"+s+"("+r+")"},
$iad:1}
A.aa0.prototype={
$1(a){this.a.$0()},
$S:22}
A.xr.prototype={
i(a){var s=this.a
if(s!=null)return"This ticker was canceled: "+s.i(0)
return'The ticker was canceled before the "orCancel" property was first used.'},
$ibr:1}
A.a6f.prototype={}
A.wK.prototype={
i(a){return"SemanticsTag("+this.a+")"}}
A.cr.prototype={
U(a,b){var s,r,q,p,o,n,m,l=this.a,k=l.length
if(k===0)return b
s=b.a
if(s.length===0)return this
r=A.aA(this.b,!0,t.lS)
q=b.b
p=q.length
if(p!==0)for(o=0;o<q.length;q.length===p||(0,A.P)(q),++o){n=q[o]
m=n.a
r.push(n.Iz(new A.eY(m.a+k,m.b+k)))}return new A.cr(l+s,r)},
k(a,b){if(b==null)return!1
return J.X(b)===A.A(this)&&b instanceof A.cr&&b.a===this.a&&A.cS(b.b,this.b)},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"AttributedString('"+this.a+"', attributes: "+A.h(this.b)+")"}}
A.Kh.prototype={
c0(){return"SemanticsData"},
k(a,b){var s=this
if(b==null)return!1
return b instanceof A.Kh&&b.a===s.a&&b.b===s.b&&b.c.k(0,s.c)&&b.d.k(0,s.d)&&b.e.k(0,s.e)&&b.f.k(0,s.f)&&b.r.k(0,s.r)&&b.w===s.w&&b.x==s.x&&b.cx.k(0,s.cx)&&A.alw(b.cy,s.cy)&&b.Q==s.Q&&b.as==s.as&&b.at==s.at&&b.ax==s.ax&&J.f(b.db,s.db)&&b.dx===s.dx&&b.dy===s.dy&&A.azb(b.fr,s.fr)},
gt(a){var s=this,r=A.df(s.fr)
return A.S(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.cx,s.cy,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,A.S(s.CW,s.db,s.dx,s.dy,r,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a))}}
A.Qt.prototype={}
A.Kj.prototype={
c0(){return"SemanticsProperties"}}
A.bX.prototype={
sbs(a,b){var s
if(!A.axC(this.r,b)){s=A.ajM(b)
this.r=s?null:b
this.ib()}},
saP(a,b){if(!this.w.k(0,b)){this.w=b
this.ib()}},
sKt(a){if(this.as===a)return
this.as=a
this.ib()},
YF(a){var s,r,q,p,o,n,m,l=this,k=l.ax
if(k!=null)for(s=k.length,r=0;r<s;++r)k[r].ch=!0
for(k=a.length,r=0;r<k;++r)a[r].ch=!1
k=l.ax
if(k!=null)for(s=k.length,q=t.aa,p=!1,r=0;r<k.length;k.length===s||(0,A.P)(k),++r){o=k[r]
if(o.ch){n=J.cd(o)
if(q.a(A.L.prototype.gaL.call(n,o))===l){o.c=null
if(l.b!=null)o.al(0)}p=!0}}else p=!1
for(k=a.length,s=t.aa,r=0;r<a.length;a.length===k||(0,A.P)(a),++r){o=a[r]
q=J.cd(o)
if(s.a(A.L.prototype.gaL.call(q,o))!==l){if(s.a(A.L.prototype.gaL.call(q,o))!=null){q=s.a(A.L.prototype.gaL.call(q,o))
if(q!=null){o.c=null
if(q.b!=null)o.al(0)}}o.c=l
q=l.b
if(q!=null)o.aq(q)
q=o.a
n=l.a
if(q<=n){o.a=n+1
o.jD()}p=!0}}if(!p&&l.ax!=null)for(k=l.ax,s=k.length,m=0;m<s;++m)if(k[m].e!==a[m].e){p=!0
break}l.ax=a
if(p)l.ib()},
ga3K(){var s=this.ax
s=s==null?null:s.length!==0
return s===!0},
xU(a){var s,r,q,p=this.ax
if(p!=null)for(s=p.length,r=0;r<p.length;p.length===s||(0,A.P)(p),++r){q=p[r]
if(!a.$1(q)||!q.xU(a))return!1}return!0},
jD(){var s=this.ax
if(s!=null)B.c.X(s,this.gLs())},
aq(a){var s,r,q,p=this
p.v_(a)
for(s=a.c;s.P(0,p.e);)p.e=$.a6w=($.a6w+1)%65535
s.l(0,p.e,p)
a.d.u(0,p)
if(p.CW){p.CW=!1
p.ib()}s=p.ax
if(s!=null)for(r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].aq(a)},
al(a){var s,r,q,p,o,n=this,m=t.nU
m.a(A.L.prototype.gbw.call(n)).c.u(0,n.e)
m.a(A.L.prototype.gbw.call(n)).d.C(0,n)
n.dW(0)
m=n.ax
if(m!=null)for(s=m.length,r=t.aa,q=0;q<m.length;m.length===s||(0,A.P)(m),++q){p=m[q]
o=J.cd(p)
if(r.a(A.L.prototype.gaL.call(o,p))===n)o.al(p)}n.ib()},
ib(){var s=this
if(s.CW)return
s.CW=!0
if(s.b!=null)t.nU.a(A.L.prototype.gbw.call(s)).b.C(0,s)},
jJ(a,b,c){var s,r=this
if(c==null)c=$.aiH()
if(r.fr.k(0,c.p4))if(r.id.k(0,c.ry))if(r.k2===c.x2)if(r.k3===c.xr)if(r.fx.k(0,c.R8))if(r.fy.k(0,c.RG))if(r.go.k(0,c.rx))if(r.k1===c.to)if(r.dy===c.ae)if(r.ok==c.y1)if(r.p1==c.id)if(r.RG==c.bH)if(r.rx==c.bp)if(r.ry==c.be)if(r.db===c.f)if(r.Q==c.k1)s=r.at!==c.p2
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
if(s)r.ib()
r.fr=c.p4
r.fx=c.R8
r.fy=c.RG
r.go=c.rx
r.id=c.ry
r.k1=c.to
r.k4=c.x1
r.k2=c.x2
r.k3=c.xr
r.dy=c.ae
r.ok=c.y1
r.p1=c.id
r.cx=A.oW(c.e,t.nS,t.BT)
r.cy=A.oW(c.p3,t.zN,t.M)
r.db=c.f
r.p2=c.y2
r.RG=c.bH
r.rx=c.bp
r.ry=c.be
r.at=c.p2
r.p4=c.k2
r.R8=c.k3
r.Q=c.k1
r.to=c.k4
r.x1=c.ok
r.x2=c.p1
r.YF(b==null?B.i6:b)},
a71(a,b){return this.jJ(a,null,b)},
ML(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7={}
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
for(s=a6.cy,s=A.j1(s,s.r);s.q();)q.C(0,A.amM(s.d))
a6.k4!=null
if(a6.at)a6.xU(new A.a6x(a7,a6,q))
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
B.c.i3(a5)
return new A.Kh(s,p,o,n,m,l,k,j,i,d,c,b,a,a0,a1,a2,a3,a4,h,e,g,r,f,a5)},
RT(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.ML()
if(!a.ga3K()||a.at){s=$.asj()
r=s}else{q=a.ax.length
p=a.SA()
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
if(c==null)c=$.asl()
b=l==null?$.ask():l
a1.a.push(new A.Ki(n,a0.a,a0.b,-1,-1,-1,0,g,f,e,d,a0.cx,m.a,m.b,h.a,h.b,k.a,k.b,j.a,j.b,i.a,i.b,a0.w,a0.x,A.aly(c),s,r,b,a0.dy))
a.CW=!1},
SA(){var s,r,q,p,o,n,m,l,k,j=this,i=j.ok,h=t.aa,g=h.a(A.L.prototype.gaL.call(j,j))
while(!0){s=i==null
if(!(s&&g!=null))break
i=g.ok
g=h.a(A.L.prototype.gaL.call(g,g))}r=j.ax
if(!s){r.toString
r=A.aBv(r,i)}h=t.Dr
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
if(h-0<=32)A.KD(p,0,h,J.al4())
else A.KC(p,0,h,J.al4())}B.c.I(q,p)
B.c.a_(p)}p.push(new A.jC(m,l,n))}if(o!=null)B.c.i3(p)
B.c.I(q,p)
h=t.wg
return A.aA(new A.aC(q,new A.a6v(),h),!0,h.h("bm.E"))},
N6(a){if(this.b==null)return
B.mh.ev(0,a.LX(this.e))},
c0(){return"SemanticsNode#"+this.e},
a6J(a,b,c){return new A.Qt(a,this,b,!0,!0,null,c)},
LV(a){return this.a6J(B.Fz,null,a)}}
A.a6x.prototype={
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
if(s!=null){r=q.y;(r==null?q.y=A.b3(t.xJ):r).I(0,s)}for(s=this.b.cy,s=A.j1(s,s.r),r=this.c;s.q();)r.C(0,A.amM(s.d))
a.k4!=null
s=q.c
r=q.x
q.c=A.agv(a.fr,a.ok,s,r)
r=q.r
s=q.x
q.r=A.agv(a.id,a.ok,r,s)
q.cy=Math.max(q.cy,a.k3+a.k2)
return!0},
$S:68}
A.a6v.prototype={
$1(a){return a.a},
$S:256}
A.js.prototype={
aF(a,b){return B.d.aF(this.b,b.b)},
$ibe:1}
A.hq.prototype={
aF(a,b){return B.d.aF(this.a,b.a)},
Nx(){var s,r,q,p,o,n,m,l,k,j=A.a([],t.iV)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
o=p.w
j.push(new A.js(!0,A.nN(p,new A.t(o.a- -0.1,o.b- -0.1)).a,p))
j.push(new A.js(!1,A.nN(p,new A.t(o.c+-0.1,o.d+-0.1)).a,p))}B.c.i3(j)
n=A.a([],t.dK)
for(s=j.length,r=this.b,o=t.T,m=null,l=0,q=0;q<j.length;j.length===s||(0,A.P)(j),++q){k=j[q]
if(k.a){++l
if(m==null)m=new A.hq(k.b,r,A.a([],o))
m.c.push(k.c)}else --l
if(l===0){m.toString
n.push(m)
m=null}}B.c.i3(n)
if(r===B.X){s=t.FF
n=A.aA(new A.cy(n,s),!0,s.h("bm.E"))}s=A.aj(n).h("fV<1,bX>")
return A.aA(new A.fV(n,new A.aff(),s),!0,s.h("o.E"))},
Nw(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this.c,a4=a3.length
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
B.c.dj(a2,new A.afb())
new A.aC(a2,new A.afc(),A.aj(a2).h("aC<1,k>")).X(0,new A.afe(A.b3(s),q,a1))
a3=t.sC
a3=A.aA(new A.aC(a1,new A.afd(r),a3),!0,a3.h("bm.E"))
a4=A.aj(a3).h("cy<1>")
return A.aA(new A.cy(a3,a4),!0,a4.h("bm.E"))}}
A.aff.prototype={
$1(a){return a.Nw()},
$S:99}
A.afb.prototype={
$2(a,b){var s,r,q=a.w,p=A.nN(a,new A.t(q.a,q.b))
q=b.w
s=A.nN(b,new A.t(q.a,q.b))
r=B.d.aF(p.b,s.b)
if(r!==0)return-r
return-B.d.aF(p.a,s.a)},
$S:67}
A.afe.prototype={
$1(a){var s=this,r=s.a
if(r.B(0,a))return
r.C(0,a)
r=s.b
if(r.P(0,a)){r=r.j(0,a)
r.toString
s.$1(r)}s.c.push(a)},
$S:57}
A.afc.prototype={
$1(a){return a.e},
$S:259}
A.afd.prototype={
$1(a){var s=this.a.j(0,a)
s.toString
return s},
$S:260}
A.agr.prototype={
$1(a){return a.Nx()},
$S:99}
A.jC.prototype={
aF(a,b){var s,r=this.b
if(r==null||b.b==null)return this.c-b.c
r.toString
s=b.b
s.toString
return r.aF(0,s)},
$ibe:1}
A.wJ.prototype={
N7(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.b
if(e.a===0)return
s=A.b3(t.S)
r=A.a([],t.T)
for(q=t.aa,p=A.n(e).h("aH<1>"),o=p.h("o.E"),n=f.d;e.a!==0;){m=A.aA(new A.aH(e,new A.a6A(f),p),!0,o)
e.a_(0)
n.a_(0)
l=new A.a6B()
if(!!m.immutable$list)A.K(A.O("sort"))
k=m.length-1
if(k-0<=32)A.KD(m,0,k,l)
else A.KC(m,0,k,l)
B.c.I(r,m)
for(l=m.length,j=0;j<m.length;m.length===l||(0,A.P)(m),++j){i=m[j]
if(i.at||i.as){k=J.cd(i)
if(q.a(A.L.prototype.gaL.call(k,i))!=null){h=q.a(A.L.prototype.gaL.call(k,i))
h=h.at||h.as}else h=!1
if(h){q.a(A.L.prototype.gaL.call(k,i)).ib()
i.CW=!1}}}}B.c.dj(r,new A.a6C())
$.a6g.toString
g=new A.a6E(A.a([],t.fr))
for(q=r.length,j=0;j<r.length;r.length===q||(0,A.P)(r),++j){i=r[j]
if(i.CW&&i.b!=null)i.RT(g,s)}e.a_(0)
for(e=A.jy(s,s.r),q=A.n(e).c;e.q();){p=e.d
$.amJ.j(0,p==null?q.a(p):p).toString}f.a.$1(new A.Kl(g.a))
f.aA()},
Uv(a,b){var s,r={},q=r.a=this.c.j(0,a)
if(q!=null)s=(q.at||q.as)&&!q.cx.P(0,b)
else s=!1
if(s)q.xU(new A.a6z(r,b))
s=r.a
if(s==null||!s.cx.P(0,b))return null
return r.a.cx.j(0,b)},
a5C(a,b,c){var s=this.Uv(a,b)
if(s!=null){s.$1(c)
return}if(b===B.Uw&&this.c.j(0,a).f!=null)this.c.j(0,a).f.$0()},
i(a){return"<optimized out>#"+A.bM(this)}}
A.a6A.prototype={
$1(a){return!this.a.d.B(0,a)},
$S:68}
A.a6B.prototype={
$2(a,b){return a.a-b.a},
$S:67}
A.a6C.prototype={
$2(a,b){return a.a-b.a},
$S:67}
A.a6z.prototype={
$1(a){if(a.cx.P(0,this.b)){this.a.a=a
return!1}return!0},
$S:68}
A.a6h.prototype={
jU(a,b){var s=this
s.e.l(0,a,b)
s.f=s.f|a.a
s.d=!0},
eh(a,b){this.jU(a,new A.a6i(b))},
sjx(a){a.toString
this.eh(B.dP,a)},
skK(a){a.toString
this.eh(B.Bl,a)},
stW(a){this.eh(B.dS,a)},
stU(a){this.eh(B.Ux,a)},
stX(a){this.eh(B.dT,a)},
stY(a){this.eh(B.dQ,a)},
stV(a){this.eh(B.dR,a)},
sAm(a){this.eh(B.Bm,a)},
sAf(a){this.eh(B.Bk,a)},
sAc(a,b){this.eh(B.Uz,b)},
sAd(a,b){this.eh(B.UD,b)},
sAu(a,b){this.eh(B.Ut,b)},
sAs(a){this.jU(B.UA,new A.a6l(a))},
sAq(a){this.jU(B.Ur,new A.a6j(a))},
sAt(a){this.jU(B.UB,new A.a6m(a))},
sAr(a){this.jU(B.Us,new A.a6k(a))},
sAx(a){this.jU(B.Uu,new A.a6n(a))},
sAy(a){this.jU(B.Uv,new A.a6o(a))},
sAg(a){this.eh(B.Uy,a)},
sAh(a){this.eh(B.UC,a)},
sMZ(a){return},
sN_(a){if(a==this.k3)return
this.k3=a
this.d=!0},
szY(a){return},
syB(a){return},
sil(a,b){if(b===this.x2)return
this.x2=b
this.d=!0},
HV(a){var s=this.ai;(s==null?this.ai=A.b3(t.xJ):s).C(0,a)},
b7(a,b){var s=this,r=s.ae,q=a.a
if(b)s.ae=r|q
else s.ae=r&~q
s.d=!0},
Kq(a){var s,r=this
if(a==null||!a.d||!r.d)return!0
if((r.f&a.f)!==0)return!1
if((r.ae&a.ae)!==0)return!1
if(r.R8.a.length!==0)s=a.R8.a.length!==0
else s=!1
if(s)return!1
return!0},
ke(a){var s,r,q=this
if(!a.d)return
q.e.I(0,a.e)
q.p3.I(0,a.p3)
q.f=q.f|a.f
q.ae=q.ae|a.ae
q.y2=a.y2
if(q.bH==null)q.bH=a.bH
if(q.bp==null)q.bp=a.bp
if(q.be==null)q.be=a.be
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
q.p4=A.agv(a.p4,a.y1,r,s)
s=q.R8
if(s.a==="")q.R8=a.R8
s=q.RG
if(s.a==="")q.RG=a.RG
s=q.rx
if(s.a==="")q.rx=a.rx
s=q.ry
r=q.y1
q.ry=A.agv(a.ry,a.y1,s,r)
if(q.to==="")q.to=a.to
q.xr=Math.max(q.xr,a.xr+a.x2)
q.d=q.d||a.d},
a1l(){var s=this,r=A.pD()
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
r.ae=s.ae
r.ai=s.ai
r.y2=s.y2
r.bH=s.bH
r.bp=s.bp
r.be=s.be
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
A.a6i.prototype={
$1(a){this.a.$0()},
$S:5}
A.a6l.prototype={
$1(a){a.toString
this.a.$1(A.nK(a))},
$S:5}
A.a6j.prototype={
$1(a){a.toString
this.a.$1(A.nK(a))},
$S:5}
A.a6m.prototype={
$1(a){a.toString
this.a.$1(A.nK(a))},
$S:5}
A.a6k.prototype={
$1(a){a.toString
this.a.$1(A.nK(a))},
$S:5}
A.a6n.prototype={
$1(a){var s,r,q
a.toString
s=J.aiN(t.G.a(a),t.N,t.S)
r=s.j(0,"base")
r.toString
q=s.j(0,"extent")
q.toString
this.a.$1(A.a9V(B.C,r,q,!1))},
$S:5}
A.a6o.prototype={
$1(a){a.toString
this.a.$1(A.bD(a))},
$S:5}
A.DJ.prototype={
E(){return"DebugSemanticsDumpOrder."+this.b}}
A.pE.prototype={
aF(a,b){var s=this.a2k(b)
return s},
$ibe:1}
A.vB.prototype={
a2k(a){var s=a.b===this.b
if(s)return 0
return B.f.aF(this.b,a.b)}}
A.Qs.prototype={}
A.Qu.prototype={}
A.Qv.prototype={}
A.a6q.prototype={
LX(a){var s=A.aW(["type",this.a,"data",this.pQ()],t.N,t.z)
if(a!=null)s.l(0,"nodeId",a)
return s},
a6M(){return this.LX(null)},
i(a){var s,r,q,p=A.a([],t.s),o=this.pQ(),n=J.amg(o.gbq(o))
B.c.i3(n)
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.P)(n),++r){q=n[r]
p.push(A.h(q)+": "+A.h(o.j(0,q)))}return"SemanticsEvent("+B.c.b4(p,", ")+")"}}
A.aa2.prototype={
pQ(){return A.aW(["message",this.b],t.N,t.z)}}
A.a1u.prototype={
pQ(){return B.ix}}
A.a9o.prototype={
pQ(){return B.ix}}
A.B7.prototype={
kH(a,b){return this.a4R(a,!0)},
a4R(a,b){var s=0,r=A.a2(t.N),q,p=this,o
var $async$kH=A.Y(function(c,d){if(c===1)return A.a_(d,r)
while(true)switch(s){case 0:s=3
return A.a4(p.cY(0,a),$async$kH)
case 3:o=d
if(o.byteLength<51200){q=B.S.e0(0,A.cK(o.buffer,0,null))
s=1
break}q=A.Tb(A.aCX(),o,'UTF8 decode for "'+a+'"',t.B6,t.N)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$kH,r)},
i(a){return"<optimized out>#"+A.bM(this)+"()"}}
A.US.prototype={
kH(a,b){return this.NF(a,!0)},
a4S(a,b,c){var s,r={},q=this.b
if(q.P(0,a)){r=q.j(0,a)
r.toString
return c.h("ad<0>").a(r)}r.a=r.b=null
this.kH(a,!1).aE(b,c).aE(new A.UT(r,this,a,c),t.H)
s=r.a
if(s!=null)return s
s=new A.a7($.a8,c.h("a7<0>"))
r.b=new A.aI(s,c.h("aI<0>"))
q.l(0,a,s)
return r.b.a}}
A.UT.prototype={
$1(a){var s=this,r=new A.bp(a,s.d.h("bp<0>")),q=s.a
q.a=r
s.b.b.l(0,s.c,r)
q=q.b
if(q!=null)q.bT(0,a)},
$S(){return this.d.h("ay(0)")}}
A.a3n.prototype={
cY(a,b){var s,r=B.cd.em(A.apz(A.A4(B.i7,b,B.S,!1)).e),q=$.he.af$
q===$&&A.b()
s=q.uM(0,"flutter/assets",A.ky(r.buffer,0,null)).aE(new A.a3o(b),t.B6)
return s},
tK(a){return this.a4P(a)},
a4P(a){var s=0,r=A.a2(t.gG),q,p=this,o
var $async$tK=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:s=3
return A.a4(p.cY(0,a),$async$tK)
case 3:o=c
q=A.a0B(A.cK(o.buffer,0,null))
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$tK,r)}}
A.a3o.prototype={
$1(a){if(a==null)throw A.c(A.ajq(A.a([A.aBW(this.a),A.bo("The asset does not exist or has empty data.")],t.F)))
return a},
$S:261}
A.U8.prototype={}
A.pF.prototype={
oR(){var s=$.Tp()
s.a.a_(0)
s.b.a_(0)},
jk(a){return this.a3y(a)},
a3y(a){var s=0,r=A.a2(t.H),q,p=this
var $async$jk=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:switch(A.bD(J.aO(t.a.a(a),"type"))){case"memoryPressure":p.oR()
break}s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$jk,r)},
RO(){var s=A.b6("controller")
s.sc6(A.pO(null,new A.a6H(s),null,!1,t.xe))
return J.au8(s.aD())},
a5W(){if(this.Q$!=null)return
$.aN()
var s=A.aox("AppLifecycleState.resumed")
if(s!=null)this.tn(s)},
wC(a){return this.Vr(a)},
Vr(a){var s=0,r=A.a2(t.dR),q,p=this,o
var $async$wC=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:a.toString
o=A.aox(a)
o.toString
p.tn(o)
q=null
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$wC,r)},
wD(a){return this.VA(a)},
VA(a){var s=0,r=A.a2(t.H)
var $async$wD=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:t.j.a(a.b)
return A.a0(null,r)}})
return A.a1($async$wD,r)},
$idE:1}
A.a6H.prototype={
$0(){var s=0,r=A.a2(t.H),q=this,p,o,n
var $async$$0=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:o=A.b6("rawLicenses")
n=o
s=2
return A.a4($.Tp().kH("NOTICES",!1),$async$$0)
case 2:n.sc6(b)
p=q.a
n=J
s=3
return A.a4(A.Tb(A.aD4(),o.aD(),"parseLicenses",t.N,t.rh),$async$$0)
case 3:n.jV(b,J.au1(p.aD()))
s=4
return A.a4(J.am8(p.aD()),$async$$0)
case 4:return A.a0(null,r)}})
return A.a1($async$$0,r)},
$S:56}
A.abI.prototype={
uM(a,b,c){var s=new A.a7($.a8,t.sB)
$.aN().Zi(b,c,A.awd(new A.abJ(new A.aI(s,t.BB))))
return s},
C2(a,b){if(b==null){a=$.Tn().a.j(0,a)
if(a!=null)a.e=null}else $.Tn().Nd(a,new A.abK(b))}}
A.abJ.prototype={
$1(a){var s,r,q,p
try{this.a.bT(0,a)}catch(q){s=A.ae(q)
r=A.au(q)
p=A.bo("during a platform message response callback")
A.e7(new A.bJ(s,r,"services library",p,null,!1))}},
$S:20}
A.abK.prototype={
$2(a,b){return this.Mr(a,b)},
Mr(a,b){var s=0,r=A.a2(t.H),q=1,p,o=[],n=this,m,l,k,j,i,h
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
A.e7(new A.bJ(m,l,"services library",j,null,!1))
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
A.Y3.prototype={}
A.Xp.prototype={}
A.Xy.prototype={}
A.Ec.prototype={}
A.Y5.prototype={}
A.Ea.prototype={}
A.XG.prototype={}
A.WV.prototype={}
A.XH.prototype={}
A.Ei.prototype={}
A.E8.prototype={}
A.Ef.prototype={}
A.Es.prototype={}
A.Xu.prototype={}
A.XM.prototype={}
A.X3.prototype={}
A.Xh.prototype={}
A.WF.prototype={}
A.X7.prototype={}
A.En.prototype={}
A.WH.prototype={}
A.XR.prototype={}
A.oU.prototype={}
A.ko.prototype={}
A.mq.prototype={}
A.kp.prototype={}
A.uA.prototype={}
A.a_p.prototype={
Tf(a){var s,r,q,p,o,n,m,l,k,j
this.d=!0
s=!1
for(n=this.c,m=0;!1;++m){r=n[m]
try{q=r.$1(a)
s=s||q}catch(l){p=A.ae(l)
o=A.au(l)
k=A.bo("while processing a key handler")
j=$.fJ()
if(j!=null)j.$1(new A.bJ(p,o,"services library",k,null,!1))}}this.d=!1
return s},
JS(a){var s,r,q=this,p=a.a,o=a.b
if(a instanceof A.mq){q.a.l(0,p,o)
s=$.as7().j(0,o.a)
if(s!=null){r=q.b
if(r.B(0,s))r.u(0,s)
else r.C(0,s)}}else if(a instanceof A.kp)q.a.u(0,p)
return q.Tf(a)}}
A.uy.prototype={
E(){return"KeyDataTransitMode."+this.b}}
A.uz.prototype={
i(a){return"KeyMessage("+A.h(this.a)+")"}}
A.FQ.prototype={
a3b(a){var s,r=this,q=r.d
switch((q==null?r.d=B.GP:q).a){case 0:return!1
case 1:if(a.c===0&&a.d===0)return!1
s=A.ax5(a)
if(a.f&&r.e.length===0){r.b.JS(s)
r.Ek(A.a([s],t.DG),null)}else r.e.push(s)
return!1}},
Ek(a,b){var s,r,q,p,o=this.a
if(o!=null){s=new A.uz(a,b)
try{o=o.$1(s)
return o}catch(p){r=A.ae(p)
q=A.au(p)
o=A.bo("while processing the key message handler")
A.e7(new A.bJ(r,q,"services library",o,null,!1))}}return!1},
zr(a){var s=0,r=A.a2(t.a),q,p=this,o,n,m,l,k,j,i
var $async$zr=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:if(p.d==null){p.d=B.GO
p.c.a.push(p.gSV())}o=A.ayK(t.a.a(a))
if(o instanceof A.i5){n=o.c
m=p.f
if(!n.No()){m.C(0,n.gdR())
l=!1}else{m.u(0,n.gdR())
l=!0}}else if(o instanceof A.ph){n=p.f
m=o.c
if(n.B(0,m.gdR())){n.u(0,m.gdR())
l=!1}else l=!0}else l=!0
if(l){p.c.a3s(o)
for(n=p.e,m=n.length,k=p.b,j=!1,i=0;i<n.length;n.length===m||(0,A.P)(n),++i)j=k.JS(n[i])||j
j=p.Ek(n,o)||j
B.c.a_(n)}else j=!0
q=A.aW(["handled",j],t.N,t.z)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$zr,r)},
SW(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.c,d=e.gdR(),c=e.gp9()
e=this.b.a
s=A.n(e).h("b8<1>")
r=A.kt(new A.b8(e,s),s.h("o.E"))
q=A.a([],t.DG)
p=e.j(0,d)
o=$.he.id$
n=a.a
if(n==="")n=f
if(a instanceof A.i5)if(p==null){m=new A.mq(d,c,n,o,!1)
r.C(0,d)}else m=new A.uA(d,p,n,o,!1)
else if(p==null)m=f
else{m=new A.kp(d,p,f,o,!1)
r.u(0,d)}for(s=this.c.d,l=A.n(s).h("b8<1>"),k=l.h("o.E"),j=r.kr(A.kt(new A.b8(s,l),k)),j=j.ga3(j),i=this.e;j.q();){h=j.gF(j)
if(h.k(0,d))q.push(new A.kp(h,c,f,o,!0))
else{g=e.j(0,h)
g.toString
i.push(new A.kp(h,g,f,o,!0))}}for(e=A.kt(new A.b8(s,l),k).kr(r),e=e.ga3(e);e.q();){l=e.gF(e)
k=s.j(0,l)
k.toString
i.push(new A.mq(l,k,f,o,!0))}if(m!=null)i.push(m)
B.c.I(i,q)}}
A.O8.prototype={}
A.a1f.prototype={}
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
A.O9.prototype={}
A.hV.prototype={
i(a){return"MethodCall("+this.a+", "+A.h(this.b)+")"}}
A.vT.prototype={
i(a){var s=this
return"PlatformException("+s.a+", "+A.h(s.b)+", "+A.h(s.c)+", "+A.h(s.d)+")"},
$ibr:1}
A.vd.prototype={
i(a){return"MissingPluginException("+A.h(this.a)+")"},
$ibr:1}
A.a9_.prototype={
eQ(a){if(a==null)return null
return B.cQ.em(A.cK(a.buffer,a.byteOffset,a.byteLength))},
bV(a){if(a==null)return null
return A.ky(B.cd.em(a).buffer,0,null)}}
A.a0O.prototype={
bV(a){if(a==null)return null
return B.hq.bV(B.aB.t6(a))},
eQ(a){var s
if(a==null)return a
s=B.hq.eQ(a)
s.toString
return B.aB.e0(0,s)}}
A.a0Q.prototype={
fT(a){var s=B.bM.bV(A.aW(["method",a.a,"args",a.b],t.N,t.X))
s.toString
return s},
fR(a){var s,r,q,p=null,o=B.bM.eQ(a)
if(!t.G.b(o))throw A.c(A.bz("Expected method call Map, got "+A.h(o),p,p))
s=J.aJ(o)
r=s.j(o,"method")
q=s.j(o,"args")
if(typeof r=="string")return new A.hV(r,q)
throw A.c(A.bz("Invalid method call: "+A.h(o),p,p))},
IP(a){var s,r,q,p=null,o=B.bM.eQ(a)
if(!t.j.b(o))throw A.c(A.bz("Expected envelope List, got "+A.h(o),p,p))
s=J.aJ(o)
if(s.gp(o)===1)return s.j(o,0)
if(s.gp(o)===3)if(typeof s.j(o,0)=="string")r=s.j(o,1)==null||typeof s.j(o,1)=="string"
else r=!1
else r=!1
if(r){r=A.bD(s.j(o,0))
q=A.co(s.j(o,1))
throw A.c(A.ajV(r,s.j(o,2),q,p))}if(s.gp(o)===4)if(typeof s.j(o,0)=="string")if(s.j(o,1)==null||typeof s.j(o,1)=="string")r=s.j(o,3)==null||typeof s.j(o,3)=="string"
else r=!1
else r=!1
else r=!1
if(r){r=A.bD(s.j(o,0))
q=A.co(s.j(o,1))
throw A.c(A.ajV(r,s.j(o,2),q,A.co(s.j(o,3))))}throw A.c(A.bz("Invalid envelope: "+A.h(o),p,p))},
oA(a){var s=B.bM.bV([a])
s.toString
return s},
ku(a,b,c){var s=B.bM.bV([a,c,b])
s.toString
return s},
Jg(a,b){return this.ku(a,null,b)}}
A.a8J.prototype={
bV(a){var s
if(a==null)return null
s=A.aaH(64)
this.cZ(0,s,a)
return s.j6()},
eQ(a){var s,r
if(a==null)return null
s=new A.w1(a)
r=this.fw(0,s)
if(s.b<a.byteLength)throw A.c(B.aC)
return r},
cZ(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i=null
if(c==null)b.dn(0,0)
else if(A.jL(c))b.dn(0,c?1:2)
else if(typeof c=="number"){b.dn(0,6)
b.hi(8)
s=$.cT()
b.d.setFloat64(0,c,B.a8===s)
b.RE(b.e)}else if(A.jM(c)){s=-2147483648<=c&&c<=2147483647
r=b.d
if(s){b.dn(0,3)
s=$.cT()
r.setInt32(0,c,B.a8===s)
b.nd(b.e,0,4)}else{b.dn(0,4)
s=$.cT()
B.fu.C0(r,0,c,s)}}else if(typeof c=="string"){b.dn(0,7)
s=c.length
q=new Uint8Array(s)
n=0
while(!0){if(!(n<s)){p=i
o=0
break}m=B.b.W(c,n)
if(m<=127)q[n]=m
else{p=B.cd.em(B.b.bM(c,n))
o=n
break}++n}if(p!=null){j.ee(b,o+p.length)
l=q.BYTES_PER_ELEMENT
k=A.dg(0,o,B.f.hh(q.byteLength,l),i,i)
b.jV(A.cK(q.buffer,q.byteOffset+0*l,(k-0)*l))
b.jV(p)}else{j.ee(b,s)
b.jV(q)}}else if(t.uo.b(c)){b.dn(0,8)
j.ee(b,c.length)
b.jV(c)}else if(t.fO.b(c)){b.dn(0,9)
s=c.length
j.ee(b,s)
b.hi(4)
b.jV(A.cK(c.buffer,c.byteOffset,4*s))}else if(t.D4.b(c)){b.dn(0,14)
s=c.length
j.ee(b,s)
b.hi(4)
b.jV(A.cK(c.buffer,c.byteOffset,4*s))}else if(t.cE.b(c)){b.dn(0,11)
s=c.length
j.ee(b,s)
b.hi(8)
b.jV(A.cK(c.buffer,c.byteOffset,8*s))}else if(t.j.b(c)){b.dn(0,12)
s=J.aJ(c)
j.ee(b,s.gp(c))
for(s=s.ga3(c);s.q();)j.cZ(0,b,s.gF(s))}else if(t.G.b(c)){b.dn(0,13)
s=J.aJ(c)
j.ee(b,s.gp(c))
s.X(c,new A.a8K(j,b))}else throw A.c(A.f0(c,i,i))},
fw(a,b){if(b.b>=b.a.byteLength)throw A.c(B.aC)
return this.iD(b.kV(0),b)},
iD(a,b){var s,r,q,p,o,n,m,l,k=this
switch(a){case 0:return null
case 1:return!0
case 2:return!1
case 3:s=b.b
r=$.cT()
q=b.a.getInt32(s,B.a8===r)
b.b+=4
return q
case 4:return b.uC(0)
case 6:b.hi(8)
s=b.b
r=$.cT()
q=b.a.getFloat64(s,B.a8===r)
b.b+=8
return q
case 5:case 7:p=k.dC(b)
return B.cQ.em(b.kW(p))
case 8:return b.kW(k.dC(b))
case 9:p=k.dC(b)
b.hi(4)
s=b.a
o=A.anQ(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+4*p
return o
case 10:return b.uD(k.dC(b))
case 14:p=k.dC(b)
b.hi(4)
s=b.a
r=s.buffer
s=s.byteOffset+b.b
A.T1(r,s,p)
o=new Float32Array(r,s,p)
b.b=b.b+4*p
return o
case 11:p=k.dC(b)
b.hi(8)
s=b.a
o=A.anO(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+8*p
return o
case 12:p=k.dC(b)
n=A.aR(p,null,!1,t.X)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.K(B.aC)
b.b=r+1
n[m]=k.iD(s.getUint8(r),b)}return n
case 13:p=k.dC(b)
s=t.X
n=A.y(s,s)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.K(B.aC)
b.b=r+1
r=k.iD(s.getUint8(r),b)
l=b.b
if(l>=s.byteLength)A.K(B.aC)
b.b=l+1
n.l(0,r,k.iD(s.getUint8(l),b))}return n
default:throw A.c(B.aC)}},
ee(a,b){var s,r
if(b<254)a.dn(0,b)
else{s=a.d
if(b<=65535){a.dn(0,254)
r=$.cT()
s.setUint16(0,b,B.a8===r)
a.nd(a.e,0,2)}else{a.dn(0,255)
r=$.cT()
s.setUint32(0,b,B.a8===r)
a.nd(a.e,0,4)}}},
dC(a){var s,r,q=a.kV(0)
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
A.a8K.prototype={
$2(a,b){var s=this.a,r=this.b
s.cZ(0,r,a)
s.cZ(0,r,b)},
$S:71}
A.a8N.prototype={
fT(a){var s=A.aaH(64)
B.ag.cZ(0,s,a.a)
B.ag.cZ(0,s,a.b)
return s.j6()},
fR(a){var s,r,q
a.toString
s=new A.w1(a)
r=B.ag.fw(0,s)
q=B.ag.fw(0,s)
if(typeof r=="string"&&s.b>=a.byteLength)return new A.hV(r,q)
else throw A.c(B.nD)},
oA(a){var s=A.aaH(64)
s.dn(0,0)
B.ag.cZ(0,s,a)
return s.j6()},
ku(a,b,c){var s=A.aaH(64)
s.dn(0,1)
B.ag.cZ(0,s,a)
B.ag.cZ(0,s,c)
B.ag.cZ(0,s,b)
return s.j6()},
Jg(a,b){return this.ku(a,null,b)},
IP(a){var s,r,q,p,o,n
if(a.byteLength===0)throw A.c(B.Gn)
s=new A.w1(a)
if(s.kV(0)===0)return B.ag.fw(0,s)
r=B.ag.fw(0,s)
q=B.ag.fw(0,s)
p=B.ag.fw(0,s)
o=s.b<a.byteLength?A.co(B.ag.fw(0,s)):null
if(typeof r=="string")n=(q==null||typeof q=="string")&&s.b>=a.byteLength
else n=!1
if(n)throw A.c(A.ajV(r,p,A.co(q),o))
else throw A.c(B.Go)}}
A.a2f.prototype={
a32(a,b,c){var s,r,q,p
if(t.yg.b(b)){this.b.u(0,a)
return}s=this.b
r=s.j(0,a)
q=A.aAh(c)
if(q==null)q=this.a
if(J.f(r==null?null:t.Ft.a(r.a),q))return
p=q.rN(a)
s.l(0,a,p)
B.TA.fY("activateSystemCursor",A.aW(["device",p.b,"kind",t.Ft.a(p.a).a],t.N,t.z),t.H)}}
A.vf.prototype={}
A.e9.prototype={
i(a){var s=this.grP()
return s}}
A.N0.prototype={
rN(a){throw A.c(A.c2(null))},
grP(){return"defer"}}
A.R6.prototype={}
A.kV.prototype={
grP(){return"SystemMouseCursor("+this.a+")"},
rN(a){return new A.R6(this,a)},
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return b instanceof A.kV&&b.a===this.a},
gt(a){return B.b.gt(this.a)}}
A.OE.prototype={}
A.k_.prototype={
go4(){var s,r=$.he.af$
r===$&&A.b()
s=r
return s},
ev(a,b){return this.N4(0,b,this.$ti.h("1?"))},
N4(a,b,c){var s=0,r=A.a2(c),q,p=this,o,n
var $async$ev=A.Y(function(d,e){if(d===1)return A.a_(e,r)
while(true)switch(s){case 0:o=p.b
n=o
s=3
return A.a4(p.go4().uM(0,p.a,o.bV(b)),$async$ev)
case 3:q=n.eQ(e)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$ev,r)},
uS(a){this.go4().C2(this.a,new A.U6(this,a))}}
A.U6.prototype={
$1(a){return this.Ml(a)},
Ml(a){var s=0,r=A.a2(t.yD),q,p=this,o,n
var $async$$1=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:o=p.a.b
n=o
s=3
return A.a4(p.b.$1(o.eQ(a)),$async$$1)
case 3:q=n.bV(c)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$$1,r)},
$S:102}
A.vc.prototype={
go4(){var s,r=$.he.af$
r===$&&A.b()
s=r
return s},
nt(a,b,c,d){return this.WF(a,b,c,d,d.h("0?"))},
WF(a,b,c,d,e){var s=0,r=A.a2(e),q,p=this,o,n,m,l
var $async$nt=A.Y(function(f,g){if(f===1)return A.a_(g,r)
while(true)switch(s){case 0:o=p.b
n=o.fT(new A.hV(a,b))
m=p.a
s=3
return A.a4(p.go4().uM(0,m,n),$async$nt)
case 3:l=g
if(l==null){if(c){q=null
s=1
break}throw A.c(A.axE("No implementation found for method "+a+" on channel "+m))}q=d.h("0?").a(o.IP(l))
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$nt,r)},
mV(a){var s=this.go4()
s.C2(this.a,new A.a22(this,a))},
qu(a,b){return this.UJ(a,b)},
UJ(a,b){var s=0,r=A.a2(t.yD),q,p=2,o,n=this,m,l,k,j,i,h,g,f,e
var $async$qu=A.Y(function(c,d){if(c===1){o=d
s=p}while(true)switch(s){case 0:h=n.b
g=h.fR(a)
p=4
e=h
s=7
return A.a4(b.$1(g),$async$qu)
case 7:k=e.oA(d)
q=k
s=1
break
p=2
s=6
break
case 4:p=3
f=o
k=A.ae(f)
if(k instanceof A.vT){m=k
k=m.a
i=m.b
q=h.ku(k,m.c,i)
s=1
break}else if(k instanceof A.vd){q=null
s=1
break}else{l=k
h=h.Jg("error",J.d6(l))
q=h
s=1
break}s=6
break
case 3:s=2
break
case 6:case 1:return A.a0(q,r)
case 2:return A.a_(o,r)}})
return A.a1($async$qu,r)}}
A.a22.prototype={
$1(a){return this.a.qu(a,this.b)},
$S:102}
A.kB.prototype={
fY(a,b,c){return this.a4n(a,b,c,c.h("0?"))},
tD(a,b){return this.fY(a,null,b)},
a4n(a,b,c,d){var s=0,r=A.a2(d),q,p=this
var $async$fY=A.Y(function(e,f){if(e===1)return A.a_(f,r)
while(true)switch(s){case 0:q=p.Ou(a,b,!0,c)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$fY,r)}}
A.kq.prototype={
E(){return"KeyboardSide."+this.b}}
A.eq.prototype={
E(){return"ModifierKey."+this.b}}
A.w_.prototype={
ga58(){var s,r,q,p=A.y(t.BL,t.FE)
for(s=0;s<9;++s){r=B.os[s]
if(this.a4s(r)){q=this.MD(r)
if(q!=null)p.l(0,r,q)}}return p},
No(){return!0}}
A.hb.prototype={}
A.a3Z.prototype={
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
$S:269}
A.i5.prototype={}
A.ph.prototype={}
A.a43.prototype={
a3s(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(a instanceof A.i5){p=a.c
i.d.l(0,p.gdR(),p.gp9())}else if(a instanceof A.ph)i.d.u(0,a.c.gdR())
i.ZP(a)
for(p=i.a,o=A.aA(p,!0,t.vc),n=o.length,m=0;m<n;++m){s=o[m]
try{if(B.c.B(p,s))s.$1(a)}catch(l){r=A.ae(l)
q=A.au(l)
k=A.bo("while processing a raw key listener")
j=$.fJ()
if(j!=null)j.$1(new A.bJ(r,q,"services library",k,null,!1))}}return!1},
ZP(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=a1.c,f=g.ga58(),e=t.F3,d=A.y(e,t.lT),c=A.b3(e),b=this.d,a=A.kt(new A.b8(b,A.n(b).h("b8<1>")),e),a0=a1 instanceof A.i5
if(a0)a.C(0,g.gdR())
for(s=null,r=0;r<9;++r){q=B.os[r]
p=$.asa()
o=p.j(0,new A.cc(q,B.bd))
if(o==null)continue
if(o.B(0,g.gdR()))s=q
if(f.j(0,q)===B.ck){c.I(0,o)
if(o.kg(0,a.gj3(a)))continue}n=f.j(0,q)==null?A.b3(e):p.j(0,new A.cc(q,f.j(0,q)))
if(n==null)continue
for(p=new A.qI(n,n.r),p.c=n.e,m=A.n(p).c;p.q();){l=p.d
if(l==null)l=m.a(l)
k=$.as9().j(0,l)
k.toString
d.l(0,l,k)}}e=g instanceof A.a3X
j=(e||g instanceof A.pg)&&b.j(0,B.bG)!=null&&!J.f(b.j(0,B.bG),B.dn)
for(a=$.aiF(),a=A.j1(a,a.r);a.q();){p=a.d
i=j&&p.k(0,B.bG)
if(!c.B(0,p)&&!i)b.u(0,p)}if(!(g instanceof A.a3V)&&!(g instanceof A.a3Y))b.u(0,B.dE)
b.I(0,d)
if(a0&&s!=null&&!b.P(0,g.gdR())){if(e&&g.gdR().k(0,B.bH)||g instanceof A.a3W||g instanceof A.a3U){h=$.aiF().j(0,g.gdR())
if(h!=null)b.l(0,g.gdR(),h)}if(g instanceof A.pg&&g.gdR().k(0,B.bH))b.l(0,g.gdR(),g.gp9())}}}
A.cc.prototype={
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return b instanceof A.cc&&b.a===this.a&&b.b==this.b},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.PL.prototype={}
A.PK.prototype={}
A.a3U.prototype={}
A.a3V.prototype={}
A.a3W.prototype={}
A.a3X.prototype={}
A.a3Y.prototype={}
A.pg.prototype={
gdR(){var s=this.a,r=B.T7.j(0,s)
return r==null?new A.l(98784247808+B.b.gt(s)):r},
gp9(){var s,r=this.b,q=B.T9.j(0,r),p=q==null?null:q[this.c]
if(p!=null)return p
s=B.T6.j(0,r)
if(s!=null)return s
if(r.length===1)return new A.e(B.b.W(r.toLowerCase(),0))
return new A.e(B.b.gt(this.a)+98784247808)},
a4s(a){var s=this
switch(a.a){case 0:return(s.d&4)!==0
case 1:return(s.d&1)!==0
case 2:return(s.d&2)!==0
case 3:return(s.d&8)!==0
case 5:return(s.d&16)!==0
case 4:return(s.d&32)!==0
case 6:return(s.d&64)!==0
case 7:case 8:return!1}},
MD(a){return B.ck},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.A(s))return!1
return b instanceof A.pg&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.wi.prototype={
ga6w(){var s=this
if(s.c)return new A.bp(s.a,t.m6)
if(s.b==null){s.b=new A.aI(new A.a7($.a8,t.jr),t.Fk)
s.qt()}return s.b.a},
qt(){var s=0,r=A.a2(t.H),q,p=this,o
var $async$qt=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:s=3
return A.a4(B.iC.tD("get",t.mE),$async$qt)
case 3:o=b
if(p.b==null){s=1
break}p.FS(o)
case 1:return A.a0(q,r)}})
return A.a1($async$qt,r)},
FS(a){var s,r=a==null
if(!r){s=J.aO(a,"enabled")
s.toString
A.nK(s)}else s=!1
this.a3u(r?null:t.Fx.a(J.aO(a,"data")),s)},
a3u(a,b){var s,r,q=this,p=q.c&&b
q.d=p
if(p)$.bP.cy$.push(new A.a50(q))
s=q.a
if(b){p=q.T7(a)
r=t.N
if(p==null){p=t.X
p=A.y(p,p)}r=new A.cx(p,q,null,"root",A.y(r,t.hp),A.y(r,t.Cm))
p=r}else p=null
q.a=p
q.c=!0
r=q.b
if(r!=null)r.bT(0,p)
q.b=null
if(q.a!=s){q.aA()
if(s!=null)s.m()}},
wX(a){return this.Xc(a)},
Xc(a){var s=0,r=A.a2(t.H),q=this,p
var $async$wX=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:p=a.a
switch(p){case"push":q.FS(t.mE.a(a.b))
break
default:throw A.c(A.c2(p+" was invoked but isn't implemented by "+A.A(q).i(0)))}return A.a0(null,r)}})
return A.a1($async$wX,r)},
T7(a){if(a==null)return null
return t.ym.a(B.ag.eQ(A.ky(a.buffer,a.byteOffset,a.byteLength)))},
MX(a){var s=this
s.r.C(0,a)
if(!s.f){s.f=!0
$.bP.cy$.push(new A.a51(s))}},
Em(){var s,r,q,p,o,n=this
if(!n.f)return
n.f=!1
for(s=n.r,r=A.jy(s,s.r),q=A.n(r).c;r.q();){p=r.d;(p==null?q.a(p):p).w=!1}s.a_(0)
o=B.ag.bV(n.a.a)
B.iC.fY("put",A.cK(o.buffer,o.byteOffset,o.byteLength),t.H)},
JE(){if($.bP.dx$)return
this.Em()}}
A.a50.prototype={
$1(a){this.a.d=!1},
$S:2}
A.a51.prototype={
$1(a){return this.a.Em()},
$S:2}
A.cx.prototype={
gnD(){var s=J.AX(this.a,"c",new A.a4Y())
s.toString
return t.mE.a(s)},
giU(){var s=J.AX(this.a,"v",new A.a4Z())
s.toString
return t.mE.a(s)},
a66(a,b,c){var s=this,r=J.e1(s.giU(),b),q=c.h("0?").a(J.iI(s.giU(),b))
if(J.fK(s.giU()))J.iI(s.a,"v")
if(r)s.lr()
return q},
a0L(a,b){var s,r,q,p,o=this,n=o.f
if(n.P(0,a)||!J.e1(o.gnD(),a)){n=t.N
s=new A.cx(A.y(n,t.X),null,null,a,A.y(n,t.hp),A.y(n,t.Cm))
o.ic(s)
return s}r=t.N
q=o.c
p=J.aO(o.gnD(),a)
p.toString
s=new A.cx(t.mE.a(p),q,o,a,A.y(r,t.hp),A.y(r,t.Cm))
n.l(0,a,s)
return s},
ic(a){var s=this,r=a.d
if(r!==s){if(r!=null)r.qU(a)
a.d=s
s.Dc(a)
if(a.c!=s.c)s.G4(a)}},
Tt(a){this.qU(a)
a.d=null
if(a.c!=null){a.xL(null)
a.HH(this.gG3())}},
lr(){var s,r=this
if(!r.w){r.w=!0
s=r.c
if(s!=null)s.MX(r)}},
G4(a){a.xL(this.c)
a.HH(this.gG3())},
xL(a){var s=this,r=s.c
if(r==a)return
if(s.w)if(r!=null)r.r.u(0,s)
s.c=a
if(s.w&&a!=null){s.w=!1
s.lr()}},
qU(a){var s,r,q,p=this
if(J.f(p.f.u(0,a.e),a)){J.iI(p.gnD(),a.e)
s=p.r
r=s.j(0,a.e)
if(r!=null){q=J.bH(r)
p.Ex(q.dS(r))
if(q.gN(r))s.u(0,a.e)}if(J.fK(p.gnD()))J.iI(p.a,"c")
p.lr()
return}s=p.r
q=s.j(0,a.e)
if(q!=null)J.iI(q,a)
q=s.j(0,a.e)
q=q==null?null:J.fK(q)
if(q===!0)s.u(0,a.e)},
Dc(a){var s=this
if(s.f.P(0,a.e)){J.jU(s.r.bF(0,a.e,new A.a4X()),a)
s.lr()
return}s.Ex(a)
s.lr()},
Ex(a){this.f.l(0,a.e,a)
J.cG(this.gnD(),a.e,a.a)},
HI(a,b){var s,r,q=this.f
q=q.gaT(q)
s=this.r
s=s.gaT(s)
r=q.a2X(0,new A.fV(s,new A.a5_(),A.n(s).h("fV<o.E,cx>")))
J.jV(b?A.aA(r,!1,A.n(r).h("o.E")):r,a)},
HH(a){return this.HI(a,!1)},
a6c(a){var s,r=this
if(a===r.e)return
s=r.d
if(s!=null)s.qU(r)
r.e=a
s=r.d
if(s!=null)s.Dc(r)},
m(){var s,r=this
r.HI(r.gTs(),!0)
r.f.a_(0)
r.r.a_(0)
s=r.d
if(s!=null)s.qU(r)
r.d=null
r.xL(null)
r.x=!0},
i(a){return"RestorationBucket(restorationId: "+this.e+", owner: "+A.h(this.b)+")"}}
A.a4Y.prototype={
$0(){var s=t.X
return A.y(s,s)},
$S:104}
A.a4Z.prototype={
$0(){var s=t.X
return A.y(s,s)},
$S:104}
A.a4X.prototype={
$0(){return A.a([],t.oy)},
$S:272}
A.a5_.prototype={
$1(a){return a},
$S:273}
A.TP.prototype={}
A.ig.prototype={
H6(){var s,r,q,p,o=this,n=o.a
n=n==null?null:n.a
s=o.e
s=s==null?null:s.a
r=o.f.E()
q=o.r.E()
p=o.c
p=p==null?null:p.E()
return A.aW(["systemNavigationBarColor",n,"systemNavigationBarDividerColor",null,"systemStatusBarContrastEnforced",o.w,"statusBarColor",s,"statusBarBrightness",r,"statusBarIconBrightness",q,"systemNavigationBarIconBrightness",p,"systemNavigationBarContrastEnforced",o.d],t.N,t.z)},
i(a){return"SystemUiOverlayStyle("+this.H6().i(0)+")"},
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
A.a9i.prototype={
$0(){if(!J.f($.pW,$.akf)){B.c0.fY("SystemChrome.setSystemUIOverlayStyle",$.pW.H6(),t.H)
$.akf=$.pW}$.pW=null},
$S:0}
A.xb.prototype={
E(){return"SystemSoundType."+this.b}}
A.a9q.prototype={
U(a,b){return new A.Nl(b,this)}}
A.Vg.prototype={
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
p=null}return new A.b0(A.aoH(s,p,o).b,B.C)},
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
q=null}o=A.aoH(s,q,p)
return new A.b0(r-(o.a.length-o.c),B.M)}}
A.aaE.prototype={
h9(a){return new A.b0(this.a.b.mQ(a).a,B.C)},
ha(a){return new A.b0(this.a.b.mQ(a).b,B.M)}}
A.a1j.prototype={
h9(a){return new A.b0(this.a.Bz(a).a,B.C)},
ha(a){return new A.b0(this.a.Bz(a).b,B.M)}}
A.WA.prototype={
h9(a){return B.cO},
ha(a){return new A.b0(this.a.length,B.M)}}
A.aaC.prototype={
h9(a){var s,r=a.a,q=this.a,p=q.length
if(r<=p)r=r===p&&a.b===B.C
else r=!0
if(r)a=new A.b0(p,B.M)
s=a.a
if(s<=0)return B.cO
if(a.b===B.C&&!A.a9S(B.b.ad(q,s)))return a
for(;--s,s>=0;)if(!A.a9S(B.b.ad(q,s)))return new A.b0(s+1,B.M)
return B.cO},
ha(a){var s,r=a.a,q=this.a,p=q.length
if(r>=p)return new A.b0(p,B.M)
if(r>=0)r=r===0&&a.b===B.M
else r=!0
if(r)a=B.cO
s=a.a
if(a.b===B.M&&!A.a9S(B.b.ad(q,s-1)))return a
for(;s<p;++s)if(!A.a9S(B.b.ad(q,s)))return new A.b0(s,B.C)
return new A.b0(p,B.M)}}
A.Nl.prototype={
h9(a){return this.a.h9(this.b.h9(a))},
ha(a){return this.a.ha(this.b.ha(a))}}
A.Jb.prototype={
DF(a){if(this.a)switch(a.b.a){case 0:return new A.b0(a.a,B.C)
case 1:return new A.b0(a.a+1,B.M)}else switch(a.b.a){case 0:return new A.b0(a.a-1,B.C)
case 1:return new A.b0(a.a,B.M)}},
h9(a){return this.DF(a)},
ha(a){return this.DF(a)}}
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
return A.S(B.f.gt(r.c),B.f.gt(r.d),s,B.nP.gt(r.f),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.Ke.prototype={
E(){return"SelectionChangedCause."+this.b}}
A.L8.prototype={
gSq(){var s=this.c
s===$&&A.b()
return s},
qE(a){return this.WZ(a)},
WZ(a){var s=0,r=A.a2(t.z),q,p=2,o,n=this,m,l,k,j,i
var $async$qE=A.Y(function(b,c){if(b===1){o=c
s=p}while(true)switch(s){case 0:p=4
s=7
return A.a4(n.wI(a),$async$qE)
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
A.e7(new A.bJ(m,l,"services library",k,new A.a9R(a),!1))
throw i
s=6
break
case 3:s=2
break
case 6:case 1:return A.a0(q,r)
case 2:return A.a_(o,r)}})
return A.a1($async$qE,r)},
wI(a){return this.Wg(a)},
Wg(a){var s=0,r=A.a2(t.z),q,p=this,o,n,m,l,k,j
var $async$wI=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:j=a.a
if(j==="TextInputClient.focusElement"){p.f.j(0,J.aO(t.j.a(a.b),0))
s=1
break}else if(j==="TextInputClient.requestElementsInRect"){o=J.lx(t.j.a(a.b),t.fY)
n=A.n(o).h("aC<V.E,W>")
m=p.f
l=A.n(m).h("b8<1>")
k=l.h("dI<o.E,x<@>>")
q=A.aA(new A.dI(new A.aH(new A.b8(m,l),new A.a9O(p,A.aA(new A.aC(o,new A.a9P(),n),!0,n.h("bm.E"))),l.h("aH<o.E>")),new A.a9Q(p),k),!0,k.h("o.E"))
s=1
break}else if(j==="TextInputClient.scribbleInteractionBegan"){s=1
break}else if(j==="TextInputClient.scribbleInteractionFinished"){s=1
break}s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$wI,r)}}
A.a9R.prototype={
$0(){var s=null
return A.a([A.hE("call",this.a,!0,B.aJ,s,!1,s,s,B.ap,s,!1,!0,!0,B.aW,s,t.fw)],t.F)},
$S:16}
A.a9P.prototype={
$1(a){return a},
$S:275}
A.a9O.prototype={
$1(a){this.a.f.j(0,a)
return!1},
$S:29}
A.a9Q.prototype={
$1(a){var s=this.a.f.j(0,a),r=s.gyl(s)
s=[a]
B.c.I(s,[r.ghL(r),r.gBa(r),r.gbm(r),r.gbS(r)])
return s},
$S:276}
A.xl.prototype={}
A.P5.prototype={}
A.Sl.prototype={}
A.agT.prototype={
$1(a){this.a.sc6(a)
return!1},
$S:49}
A.aM.prototype={}
A.bn.prototype={
fK(a){this.b=a},
iw(a,b){this.gtE()
return!0},
gtE(){return!0},
rI(a){return!0},
a_N(a){var s=this.a
s.b=!0
s.a.push(a)
return null},
Lu(a){return this.a.u(0,a)}}
A.lR.prototype={}
A.lK.prototype={
dc(a){return this.c.$1(a)}}
A.Tx.prototype={
Kl(a,b,c){if(a instanceof A.lR)return a.mo(b,c)
else return a.dc(b)}}
A.iJ.prototype={
an(){return new A.xI(A.b3(t.nT),new A.B(),B.m)}}
A.Tz.prototype={
$1(a){var s=a.f
s.toString
t.ke.a(s)
return!1},
$S:50}
A.TC.prototype={
$1(a){var s,r=this,q=a.f
q.toString
s=A.aiS(t.ke.a(q),r.b,r.d)
if(s!=null){r.c.Cv(a,null)
r.a.a=s
return!0}return!1},
$S:50}
A.TA.prototype={
$1(a){var s,r=a.f
r.toString
s=A.aiS(t.ke.a(r),this.b,this.c)
if(s!=null){this.a.a=s
return!0}return!1},
$S:50}
A.TD.prototype={
$1(a){var s,r,q=this,p=a.f
p.toString
s=q.b
r=A.aiS(t.ke.a(p),s,q.d)
p=r!=null
if(p&&r.iw(0,s))q.a.a=A.ami(a).Kl(r,s,q.c)
return p},
$S:50}
A.xI.prototype={
aC(){this.aV()
this.Hd()},
UB(a){this.aw(new A.aaL(this))},
Hd(){var s,r,q,p,o=this,n=o.a.d
n=n.gaT(n)
s=A.kt(n,A.n(n).h("o.E"))
r=o.d.kr(s)
n=o.d
n.toString
q=s.kr(n)
for(n=r.ga3(r),p=o.gET();n.q();)n.gF(n).Lu(p)
for(n=q.ga3(q);n.q();)n.gF(n).a_N(p)
o.d=s},
aX(a){this.bo(a)
this.Hd()},
m(){var s,r,q,p,o=this
o.aQ()
for(s=o.d,s=A.jy(s,s.r),r=o.gET(),q=A.n(s).c;s.q();){p=s.d;(p==null?q.a(p):p).Lu(r)}o.d=null},
L(a){var s=this.a
return new A.xH(null,s.d,this.e,s.e,null)}}
A.aaL.prototype={
$0(){this.a.e=new A.B()},
$S:0}
A.xH.prototype={
c1(a){var s
if(this.w===a.w)s=!A.aih(a.r,this.r)
else s=!0
return s}}
A.LF.prototype={
dc(a){a.a7x()
return null}}
A.E2.prototype={
rI(a){return this.c},
dc(a){}}
A.nT.prototype={}
A.o7.prototype={}
A.hG.prototype={}
A.E0.prototype={}
A.mO.prototype={}
A.J8.prototype={
iw(a,b){var s,r,q,p,o,n=$.ai.ah$.f.f
if(n==null||n.e==null)return!1
for(s=t.q,r=0;r<2;++r){q=B.Hg[r]
p=n.e
p.toString
o=A.aiU(p,q,s)
if(o!=null&&o.iw(0,q)){this.c=o
this.d=q
return!0}}return!1},
dc(a){var s,r=this.c
r===$&&A.b()
s=this.d
s===$&&A.b()
r.dc(s)}}
A.P_.prototype={
WG(a,b,c){var s
a.fK(this.gko())
s=A.n(this).h("lR<1>").b(a)?a.mo(b,c):a.dc(b)
a.fK(null)
return s},
mo(a,b){var s=this,r=A.aiT(s.gtL(),A.n(s).c)
return r==null?s.a4m(a,s.b,b):s.WG(r,a,b)},
dc(a){return this.mo(a,null)},
gtE(){var s=this,r=A.aiU(s.gtL(),null,A.n(s).c)
if(r!=null){r.fK(s.gko())
r.gtE()
r.fK(null)}else s.gko().gtE()
return!0},
iw(a,b){var s,r=this,q=A.aiT(r.gtL(),A.n(r).c),p=q==null
if(!p)q.fK(r.gko())
s=(p?r.gko():q).iw(0,b)
if(!p)q.fK(null)
return s},
rI(a){var s,r=this,q=A.aiT(r.gtL(),A.n(r).c),p=q==null
if(!p)q.fK(r.gko())
s=(p?r.gko():q).rI(a)
if(!p)q.fK(null)
return s}}
A.yZ.prototype={
a4m(a,b,c){var s=this.e
if(b==null)return s.dc(a)
else return s.dc(a)},
gko(){return this.e},
gtL(){return this.f}}
A.LN.prototype={}
A.LM.prototype={}
A.O3.prototype={}
A.An.prototype={
fK(a){this.NE(a)
this.e.fK(a)}}
A.ry.prototype={
aG(a){var s=new A.w6(this.e,!0,null,A.aw(),this.$ti.h("w6<1>"))
s.aJ()
s.saW(null)
return s},
aN(a,b){b.sn(0,this.e)
b.sNr(!0)}}
A.xF.prototype={
an(){return new A.A5(B.m)}}
A.A5.prototype={
gWt(){var s,r
$.ai.toString
s=$.aN()
if(s.gyF()!=="/"){$.ai.toString
s=s.gyF()}else{r=this.a.ax
$.ai.toString
s=s.gyF()
s=s}return s},
aC(){var s=this
s.aV()
s.a_j()
$.ai.toString
s.r=s.xm($.aN().a.f,s.a.fy)
$.ai.b3$.push(s)},
aX(a){this.bo(a)
this.Hx(a)},
m(){B.c.u($.ai.b3$,this)
var s=this.d
if(s!=null)s.m()
this.aQ()},
DU(){var s=this.d
if(s!=null)s.m()
this.e=this.d=null},
Hx(a){var s,r=this
r.a.toString
if(r.gHG()){r.DU()
if(r.f==null||r.a.c!=a.c){s=r.a.c
r.f=s==null?new A.kg(r,t.yh):s}}else{r.DU()
r.f=null}},
a_j(){return this.Hx(null)},
gHG(){var s=this.a
if(s.Q==null){s=s.as
s=s==null?null:s.gbE(s)
s=s===!0||this.a.d!=null||!1}else s=!0
return s},
Xz(a){var s,r=this,q=a.a,p=q==="/"&&r.a.Q!=null?new A.ag1(r):r.a.as.j(0,q)
if(p!=null)return r.a.f.$1$2(a,p,t.z)
s=r.a.d
if(s!=null)return s.$1(a)
return null},
XN(a){return this.a.at.$1(a)},
j5(){var s=0,r=A.a2(t.y),q,p=this,o,n
var $async$j5=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:p.a.toString
o=p.f
n=o==null?null:o.gbu()
if(n==null){q=!1
s=1
break}q=n.KM()
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$j5,r)},
or(a){return this.a2d(a)},
a2d(a){var s=0,r=A.a2(t.y),q,p=this,o,n
var $async$or=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:p.a.toString
o=p.f
n=o==null?null:o.gbu()
if(n==null){q=!1
s=1
break}o=n.xp(a,null,t.X)
o.toString
o=A.apn(o,B.Cy,!1,null)
n.e.push(o)
n.we()
n.Dr(o.a)
q=!0
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$or,r)},
xm(a,b){this.a.toString
return A.aD3(a,b)},
yK(a){var s=this,r=s.xm(a,s.a.fy)
if(!r.k(0,s.r))s.aw(new A.ag4(s,r))},
L(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g={}
g.a=null
s=i.a
s.toString
if(i.gHG()){s=i.f
r=i.gWt()
q=i.a
p=q.e==null?A.aEu():new A.ag2(i)
o=q.ay
o.toString
g.a=A.an7(!0,new A.vs(r,i.gXy(),i.gXM(),o,"nav",p,!0,s),"Navigator Scope",h,h)
s=q}else{s=i.a
s.toString}g.b=null
n=new A.hA(new A.ag3(g,i),h)
g.b=n
n=A.tp(n,h,B.cN,!0,s.cy,h,h,B.aQ)
g.b=n
s=$.aA9
if(s)m=new A.IN(15,!1,!1,h)
else m=h
if(m!=null)g.b=A.ie(B.aS,A.a([n,A.J2(h,m,h,h,0,0,0,h)],t.E),B.T,B.b8)
s=i.a
r=s.CW
s=s.db
s=A.b2(255,s.gn(s)>>>16&255,s.gn(s)>>>8&255,s.gn(s)&255)
g=g.b
q=i.a.dx
if(q!=null)l=i.xm(A.a([q],t.as),i.a.fy)
else{q=i.r
q.toString
l=q}q=t.eu
p=A.a([],q)
B.c.I(p,i.a.dy)
p.push(B.Eu)
q=A.a(p.slice(0),q)
k=new A.uM(l,q,new A.Li(r,s,g,h),h)
A.dw(a)
g=i.a
j=new A.yH(k,h)
k=j
g=g.p3
s=A.aA8()
r=A.oW($.asH(),t.n,t.nT)
q=t.B8
p=t.dc
r.l(0,B.Cg,new A.yZ(new A.pv(new A.bk(A.a([],q),p)),a,!1,!1,!1,!1,new A.bk(A.a([],q),p),t.uq.h("yZ<bn.T>")))
return new A.wl(new A.wN(A.ak8(new A.DS(A.Ty(r,A.an8(new A.L3(new A.wO(k,h),h),new A.w2(A.y(t.j5,t.uJ)))),h),"<Default WidgetsApp Shortcuts>",s),h),g,h)}}
A.ag1.prototype={
$1(a){var s=this.a.a.Q
s.toString
return s},
$S:14}
A.ag4.prototype={
$0(){this.a.r=this.b},
$S:0}
A.ag2.prototype={
$2(a,b){return this.a.a.e.$1(b)},
$S:108}
A.ag3.prototype={
$1(a){return this.b.a.ch.$2(a,this.a.a)},
$S:14}
A.SX.prototype={}
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
an(){return new A.yg(B.m,this.$ti.h("yg<1>"))}}
A.yg.prototype={
aC(){var s=this
s.aV()
s.a.toString
s.e=new A.f1(B.nl,null,null,null,s.$ti.h("f1<1>"))
s.GV()},
aX(a){var s,r=this
r.bo(a)
if(a.c!==r.a.c){if(r.d!=null){r.d=null
s=r.e
s===$&&A.b()
r.e=new A.f1(B.nl,s.b,s.c,s.d,s.$ti)}r.GV()}},
L(a){var s,r=this.a
r.toString
s=this.e
s===$&&A.b()
return r.d.$2(a,s)},
m(){this.d=null
this.aQ()},
GV(){var s,r=this,q=r.a
q.toString
s=r.d=new A.B()
q.c.dT(new A.acl(r,s),new A.acm(r,s),t.H)
q=r.e
q===$&&A.b()
if(q.a!==B.ef)r.e=new A.f1(B.Fn,q.b,q.c,q.d,q.$ti)}}
A.acl.prototype={
$1(a){var s=this.a
if(s.d===this.b)s.aw(new A.ack(s,a))},
$S(){return this.a.$ti.h("ay(1)")}}
A.ack.prototype={
$0(){var s=this.a
s.e=new A.f1(B.ef,this.b,null,null,s.$ti.h("f1<1>"))},
$S:0}
A.acm.prototype={
$2(a,b){var s=this.a
if(s.d===this.b)s.aw(new A.acj(s,a,b))},
$S:30}
A.acj.prototype={
$0(){var s=this.a
s.e=new A.f1(B.ef,null,this.b,this.c,s.$ti.h("f1<1>"))},
$S:0}
A.rD.prototype={
an(){return new A.xO(B.m)}}
A.xO.prototype={
aC(){this.aV()
this.Hi()},
aX(a){this.bo(a)
this.Hi()},
Hi(){this.e=new A.de(this.gRI(),this.a.c,null,t.dm)},
m(){var s,r,q=this.d
if(q!=null)for(q=A.j1(q,q.r);q.q();){s=q.d
r=this.d.j(0,s)
r.toString
s.G(0,r)}this.aQ()},
RJ(a){var s,r=this,q=a.a,p=r.d
if(p==null)p=r.d=A.y(t.yF,t.M)
p.l(0,q,r.SY(q))
p=r.d.j(0,q)
p.toString
q.Y(0,p)
if(!r.f){r.f=!0
s=r.EE()
if(s!=null)r.Ht(s)
else $.bP.cy$.push(new A.ab5(r))}return!1},
EE(){var s={},r=this.c
r.toString
s.a=null
r.aU(new A.aba(s))
return t.ot.a(s.a)},
Ht(a){var s,r
this.c.toString
s=this.f
r=this.e
r===$&&A.b()
a.Dz(t.CR.a(A.ax3(r,s)))},
SY(a){return new A.ab9(this,a)},
L(a){var s=this.f,r=this.e
r===$&&A.b()
return new A.ux(s,r,null)}}
A.ab5.prototype={
$1(a){var s,r=this.a
if(r.c==null)return
s=r.EE()
s.toString
r.Ht(s)},
$S:2}
A.aba.prototype={
$1(a){this.a.a=a},
$S:8}
A.ab9.prototype={
$0(){var s=this.a
s.d.u(0,this.b)
if(s.d.a===0)if($.bP.dy$.a<3)s.aw(new A.ab7(s))
else{s.f=!1
A.dQ(new A.ab8(s))}},
$S:0}
A.ab7.prototype={
$0(){this.a.f=!1},
$S:0}
A.ab8.prototype={
$0(){var s=this.a
if(s.c!=null&&s.d.a===0)s.aw(new A.ab6(s))},
$S:0}
A.ab6.prototype={
$0(){},
$S:0}
A.oR.prototype={}
A.FP.prototype={}
A.o0.prototype={
qk(){var s=new A.FP($.by())
this.hE$=s
this.c.d4(new A.oR(s))},
pI(){var s,r=this
if(r.gut()){if(r.hE$==null)r.qk()}else{s=r.hE$
if(s!=null){s.aA()
s.dX()
r.hE$=null}}},
L(a){if(this.gut()&&this.hE$==null)this.qk()
return B.a0z}}
A.OQ.prototype={
L(a){throw A.c(A.F0("Widgets that mix AutomaticKeepAliveClientMixin into their State must call super.build() but must ignore the return value of the superclass."))}}
A.RO.prototype={
BX(a,b){},
mw(a){A.apt(this,new A.afO(this,a))}}
A.afO.prototype={
$1(a){var s=a.z
if(s!=null&&s.B(0,this.a))a.b5()},
$S:8}
A.afN.prototype={
$1(a){A.apt(a,this.a)},
$S:8}
A.RP.prototype={
bU(a){var s=A.fY(t.h,t.X)
return new A.RO(s,this,B.a6)}}
A.f7.prototype={
c1(a){return this.w!==a.w}}
A.tj.prototype={
aG(a){var s=new A.Js(this.e,this.f,this.r,!1,!1,null,A.aw())
s.aJ()
s.saW(null)
return s},
aN(a,b){b.su4(this.e)
b.sJI(this.f)
b.su9(this.r)
b.cm=b.by=!1},
ot(a){a.su4(null)
a.sJI(null)}}
A.ob.prototype={
aG(a){var s=new A.Jp(null,this.f,null,A.aw())
s.aJ()
s.saW(null)
return s},
aN(a,b){b.so9(null)
b.srG(this.f)},
ot(a){a.so9(null)}}
A.BF.prototype={
aG(a){var s=new A.Jo(this.e,this.f,null,A.aw())
s.aJ()
s.saW(null)
return s},
aN(a,b){b.so9(this.e)
b.srG(this.f)},
ot(a){a.so9(null)}}
A.IT.prototype={
aG(a){var s=this,r=new A.JG(s.e,s.r,s.w,s.y,s.x,null,s.f,null,A.aw())
r.aJ()
r.saW(null)
return r},
aN(a,b){var s=this
b.sdh(0,s.e)
b.srG(s.f)
b.sa0n(0,s.r)
b.sil(0,s.w)
b.sak(0,s.x)
b.shb(0,s.y)}}
A.IU.prototype={
aG(a){var s=this,r=new A.JH(s.r,s.x,s.w,s.e,s.f,null,A.aw())
r.aJ()
r.saW(null)
return r},
aN(a,b){var s=this
b.so9(s.e)
b.srG(s.f)
b.sil(0,s.r)
b.sak(0,s.w)
b.shb(0,s.x)}}
A.q6.prototype={
aG(a){var s=this,r=A.dS(a),q=new A.JQ(s.w,null,A.aw())
q.aJ()
q.saW(null)
q.sbs(0,s.e)
q.sel(s.r)
q.sbK(r)
q.sme(s.x)
q.sL5(0,null)
return q},
aN(a,b){var s=this
b.sbs(0,s.e)
b.sL5(0,null)
b.sel(s.r)
b.sbK(A.dS(a))
b.by=s.w
b.sme(s.x)}}
A.EU.prototype={
aG(a){var s=new A.w7(this.e,this.f,A.dS(a),B.l,null,A.aw())
s.aJ()
s.saW(null)
return s},
aN(a,b){b.szh(this.e)
b.sel(this.f)
b.sbK(A.dS(a))
if(B.l!==b.e4){b.e4=B.l
b.au()
b.b2()}}}
A.Fa.prototype={
aG(a){var s=new A.Jx(this.e,this.f,null,A.aw())
s.aJ()
s.saW(null)
return s},
aN(a,b){b.sa6U(this.e)
b.T=this.f}}
A.hZ.prototype={
aG(a){var s=new A.JE(this.e,A.dS(a),null,A.aw())
s.aJ()
s.saW(null)
return s},
aN(a,b){b.sdA(0,this.e)
b.sbK(A.dS(a))}}
A.lz.prototype={
aG(a){var s=new A.JJ(this.f,this.r,this.e,A.dS(a),null,A.aw())
s.aJ()
s.saW(null)
return s},
aN(a,b){b.sel(this.e)
b.sa78(this.f)
b.sa3N(this.r)
b.sbK(A.dS(a))}}
A.k3.prototype={}
A.tk.prototype={
aG(a){var s=new A.Jt(this.e,null,A.aw())
s.aJ()
s.saW(null)
return s},
aN(a,b){b.syH(this.e)}}
A.uC.prototype={
o0(a){var s,r,q=a.e
q.toString
t.DU.a(q)
s=this.f
if(q.e!==s){q.e=s
r=a.c
if(r instanceof A.z)r.a8()}}}
A.ti.prototype={
aG(a){var s=new A.Jr(this.e,0,null,null,A.aw())
s.aJ()
s.I(0,null)
return s},
aN(a,b){b.syH(this.e)}}
A.wS.prototype={
aG(a){return A.aof(A.o4(this.f,this.e))},
aN(a,b){b.sHY(A.o4(this.f,this.e))},
c0(){var s,r=this,q=r.e
if(q===1/0&&r.f===1/0)s="SizedBox.expand"
else s=q===0&&r.f===0?"SizedBox.shrink":"SizedBox"
q=r.a
return q==null?s:s+"-"+q.i(0)}}
A.fN.prototype={
aG(a){return A.aof(this.e)},
aN(a,b){b.sHY(this.e)}}
A.FX.prototype={
aG(a){var s=new A.JA(this.e,this.f,null,A.aw())
s.aJ()
s.saW(null)
return s},
aN(a,b){b.sa50(0,this.e)
b.sa4Y(0,this.f)}}
A.vz.prototype={
aG(a){var s=new A.JD(this.e,null,A.aw())
s.aJ()
s.saW(null)
return s},
aN(a,b){b.stT(this.e)},
bU(a){return new A.OX(this,B.a6)}}
A.OX.prototype={}
A.x2.prototype={
aG(a){var s=A.dS(a)
s=new A.wd(this.e,s,this.r,this.w,A.aw(),0,null,null,A.aw())
s.aJ()
s.I(0,null)
return s},
aN(a,b){var s
b.sel(this.e)
s=A.dS(a)
b.sbK(s)
s=this.r
if(b.b0!==s){b.b0=s
b.a8()}s=this.w
if(s!==b.b6){b.b6=s
b.au()
b.b2()}}}
A.mM.prototype={
o0(a){var s,r,q,p=this,o=a.e
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
L(a){var s,r,q,p=this,o=null,n=a.a5(t.I)
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
A.tZ.prototype={
gXl(){switch(this.e.a){case 0:return!0
case 1:var s=this.w
return s===B.bb||s===B.Fo}},
uB(a){var s=this.x
s=this.gXl()?A.dS(a):null
return s},
aG(a){var s=this
return A.ayR(B.l,s.w,s.e,s.f,s.r,s.z,s.uB(a),s.y)},
aN(a,b){var s=this,r=s.e
if(b.K!==r){b.K=r
b.a8()}r=s.f
if(b.af!==r){b.af=r
b.a8()}r=s.r
if(b.ac!==r){b.ac=r
b.a8()}r=s.w
if(b.av!==r){b.av=r
b.a8()}r=s.uB(a)
if(b.b0!=r){b.b0=r
b.a8()}r=s.y
if(b.b6!==r){b.b6=r
b.a8()}if(B.l!==b.cH){b.cH=B.l
b.au()
b.b2()}}}
A.JY.prototype={}
A.BJ.prototype={}
A.ow.prototype={
o0(a){var s,r,q,p=a.e
p.toString
t.uc.a(p)
s=this.f
if(p.e!==s){p.e=s
r=!0}else r=!1
s=this.r
if(p.f!==s){p.f=s
r=!0}if(r){q=a.c
if(q instanceof A.z)q.a8()}}}
A.EN.prototype={}
A.JS.prototype={
aG(a){var s,r,q,p=this,o=null,n=p.e,m=p.r
if(m==null){m=a.a5(t.I)
m.toString
m=m.w}s=p.x
r=A.ajL(a)
q=s===B.bm?"\u2026":o
s=new A.w9(A.a9U(q,r,p.z,p.as,n,p.f,m,p.ax,p.y,p.at),p.w,s,p.ch,0,o,o,A.aw())
s.aJ()
s.I(0,o)
s.wc(n)
s.spv(p.ay)
return s},
aN(a,b){var s,r=this
b.scr(0,r.e)
b.sB_(0,r.f)
s=r.r
if(s==null){s=a.a5(t.I)
s.toString
s=s.w}b.sbK(s)
b.sNt(r.w)
b.sa5w(0,r.x)
b.sB0(r.y)
b.szX(r.z)
b.sNC(r.as)
b.sB1(r.at)
b.sLT(r.ax)
s=A.ajL(a)
b.szS(0,s)
b.spv(r.ay)
b.sN2(r.ch)}}
A.a53.prototype={
$1(a){return!0},
$S:40}
A.Jf.prototype={
aG(a){var s=this,r=s.d
r=r==null?null:r.cS(0)
r=new A.Jy(r,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.CW,!1,null,!1,A.aw())
r.aJ()
r.a_9()
return r},
aN(a,b){var s=this,r=s.d
b.sfq(0,r==null?null:r.cS(0))
b.av=s.e
b.sbm(0,s.f)
b.sbS(0,s.r)
b.sMU(0,s.w)
b.sak(0,s.x)
b.stZ(0,s.y)
b.sa0Y(s.Q)
b.szh(s.as)
b.sel(s.at)
b.sa6g(0,s.ax)
b.sa0A(s.ay)
b.sa4W(!1)
b.sbK(null)
b.szE(s.CW)
b.szF(!1)
b.sme(s.z)},
ot(a){a.sfq(0,null)}}
A.FY.prototype={
aG(a){var s=this,r=null,q=new A.JI(s.e,r,s.r,r,s.x,s.y,r,r,s.as,s.at,r,A.aw())
q.aJ()
q.saW(r)
return q},
aN(a,b){var s=this
b.a7=s.e
b.bD=null
b.aS=s.r
b.ab=null
b.cq=s.x
b.d7=s.y
b.Js=b.fU=null
b.z8=s.as
b.v=s.at}}
A.HZ.prototype={
aG(a){var s=this,r=new A.JC(!0,s.e,s.f,s.r,s.w,B.aD,null,A.aw())
r.aJ()
r.saW(null)
return r},
aN(a,b){var s,r=this
b.bD=r.e
b.aS=r.f
b.ab=r.r
s=r.w
if(!b.cq.k(0,s)){b.cq=s
b.au()}if(b.v!==B.aD){b.v=B.aD
b.au()}}}
A.i8.prototype={
aG(a){var s=new A.JL(null,A.aw())
s.aJ()
s.saW(null)
return s}}
A.hO.prototype={
aG(a){var s=new A.w8(this.e,this.f,null,A.aw())
s.aJ()
s.saW(null)
return s},
aN(a,b){b.sK6(this.e)
b.szy(this.f)}}
A.AY.prototype={
aG(a){var s=new A.w4(!1,null,null,A.aw())
s.aJ()
s.saW(null)
return s},
aN(a,b){b.sHP(!1)
b.szy(null)}}
A.wI.prototype={
aG(a){var s=this,r=new A.wb(s.e,s.f,s.r,!1,s.EQ(a),null,A.aw())
r.aJ()
r.saW(null)
r.Hf(r.v)
return r},
EQ(a){var s,r=this.e,q=r.p4
if(q!=null)return q
if(r.fx==null){if(r.go==null)r=r.p2!=null
else r=!0
s=r}else s=!0
if(!s)return null
return A.dS(a)},
aN(a,b){var s=this
b.sa1a(s.f)
b.sa2C(s.r)
b.sa2z(!1)
b.sLg(s.e)
b.sbK(s.EQ(a))}}
A.HU.prototype={
aG(a){var s=new A.JB(null,A.aw())
s.aJ()
s.saW(null)
return s}}
A.Bm.prototype={
aG(a){var s=new A.Jn(!0,null,A.aw())
s.aJ()
s.saW(null)
return s},
aN(a,b){b.sa0m(!0)}}
A.tO.prototype={
aG(a){var s=new A.Jw(this.e,null,A.aw())
s.aJ()
s.saW(null)
return s},
aN(a,b){b.sa2A(this.e)}}
A.FC.prototype={
aG(a){var s=new A.Jz(this.e,null,A.aw())
s.aJ()
s.saW(null)
return s},
aN(a,b){b.szz(0,this.e)}}
A.kr.prototype={
L(a){return this.c}}
A.hA.prototype={
L(a){return this.c.$1(a)}}
A.t4.prototype={
aG(a){var s=new A.z2(this.e,B.aD,null,A.aw())
s.aJ()
s.saW(null)
return s},
aN(a,b){t.oZ.a(b).sak(0,this.e)}}
A.z2.prototype={
sak(a,b){if(b.k(0,this.a7))return
this.a7=b
this.au()},
aH(a,b){var s,r,q,p,o,n,m=this
if(m.k3.MR(0,B.R)){s=a.gbG(a)
r=m.k3
q=b.a
p=b.b
o=r.a
r=r.b
n=$.aq().bk()
n.sak(0,m.a7)
s.cl(new A.C(q,p,q+o,p+r),n)}s=m.A$
if(s!=null)a.f2(s,b)}}
A.ag6.prototype={
$0(){var s,r,q=this,p=q.b
if(p==null||t.c.b(q.c)){p=q.a.y1$
p===$&&A.b()
p=p.e
p.toString
s=q.c
s=s.gbz(s)
r=A.auQ()
p.bY(r,s)
p=r}return p},
$S:285}
A.ag7.prototype={
$1(a){var s=a==null?t.K.a(a):a
return this.a.jk(s)},
$S:286}
A.dl.prototype={
j5(){return A.bF(!1,t.y)},
or(a){return A.bF(!1,t.y)},
a2e(a){var s=a.a
s.toString
return this.or(s)},
rT(){},
IU(){},
IT(){},
yK(a){},
IS(a){}}
A.xG.prototype={
a_U(a){return this.b3$.push(a)},
a3e(){this.a2j($.aN().a.f)},
a2j(a){var s,r,q
for(s=this.b3$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].yK(a)},
tq(){var s=0,r=A.a2(t.H),q,p=this,o,n,m
var $async$tq=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:o=A.aA(p.b3$,!0,t.nR),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.a4(o[m].j5(),$async$tq)
case 6:if(b){s=1
break}case 4:++m
s=3
break
case 5:A.a9j()
case 1:return A.a0(q,r)}})
return A.a1($async$tq,r)},
tr(a){return this.a3r(a)},
a3r(a){var s=0,r=A.a2(t.H),q,p=this,o,n,m
var $async$tr=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:o=A.aA(p.b3$,!0,t.nR),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.a4(o[m].or(a),$async$tr)
case 6:if(c){s=1
break}case 4:++m
s=3
break
case 5:case 1:return A.a0(q,r)}})
return A.a1($async$tr,r)},
qw(a){return this.VQ(a)},
VQ(a){var s=0,r=A.a2(t.H),q,p=this,o,n,m,l
var $async$qw=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:o=A.aA(p.b3$,!0,t.nR),n=o.length,m=J.aJ(a),l=0
case 3:if(!(l<n)){s=5
break}s=6
return A.a4(o[l].a2e(new A.pr(A.bD(m.j(a,"location")),m.j(a,"state"))),$async$qw)
case 6:if(c){s=1
break}case 4:++l
s=3
break
case 5:case 1:return A.a0(q,r)}})
return A.a1($async$qw,r)},
Vu(a){switch(a.a){case"popRoute":return this.tq()
case"pushRoute":return this.tr(A.bD(a.b))
case"pushRouteInformation":return this.qw(t.G.a(a.b))}return A.bF(null,t.z)},
UO(){this.z4()},
MV(a){A.cb(B.u,new A.aaD(this,a))},
$iao:1,
$idE:1}
A.ag5.prototype={
$1(a){var s,r,q=$.bP
q.toString
s=this.a
r=s.a
r.toString
q.Lz(r)
s.a=null
this.b.eS$.eN(0)},
$S:97}
A.aaD.prototype={
$0(){var s,r,q=this.a,p=q.cU$
q.cI$=!0
s=q.y1$
s===$&&A.b()
s=s.e
s.toString
r=q.ah$
r.toString
q.cU$=new A.mP(this.b,s,"[root]",new A.kg(s,t.l9),t.go).a0f(r,t.jv.a(p))
if(p==null)$.bP.z4()},
$S:0}
A.mP.prototype={
bU(a){return new A.kK(this,B.a6,this.$ti.h("kK<1>"))},
aG(a){return this.d},
aN(a,b){},
a0f(a,b){var s,r={}
r.a=b
if(b==null){a.KI(new A.a4s(r,this,a))
s=r.a
s.toString
a.rz(s,new A.a4t(r))}else{b.ao=this
b.h1()}r=r.a
r.toString
return r},
c0(){return this.e}}
A.a4s.prototype={
$0(){var s=this.b,r=A.ayS(s,s.$ti.c)
this.a.a=r
r.r=this.c},
$S:0}
A.a4t.prototype={
$0(){var s=this.a.a
s.toString
s.CV(null,null)
s.qS()},
$S:0}
A.kK.prototype={
aU(a){var s=this.ae
if(s!=null)a.$1(s)},
ji(a){this.ae=null
this.l6(a)},
fv(a,b){this.CV(a,b)
this.qS()},
bf(a,b){this.n7(0,b)
this.qS()},
hP(){var s=this,r=s.ao
if(r!=null){s.ao=null
s.n7(0,s.$ti.h("mP<1>").a(r))
s.qS()}s.CU()},
qS(){var s,r,q,p,o,n,m,l=this
try{o=l.ae
n=l.f
n.toString
l.ae=l.dV(o,l.$ti.h("mP<1>").a(n).c,B.mT)}catch(m){s=A.ae(m)
r=A.au(m)
o=A.bo("attaching to the render tree")
q=new A.bJ(s,r,"widgets library",o,null,!1)
A.e7(q)
p=A.ajk(q)
l.ae=l.dV(null,p,B.mT)}},
ga9(){return this.$ti.h("aG<1>").a(A.bC.prototype.ga9.call(this))},
jn(a,b){var s=this.$ti
s.h("aG<1>").a(A.bC.prototype.ga9.call(this)).saW(s.c.a(a))},
js(a,b,c){},
jE(a,b){this.$ti.h("aG<1>").a(A.bC.prototype.ga9.call(this)).saW(null)}}
A.LH.prototype={$iao:1}
A.A6.prototype={
eX(){this.NH()
$.em=this
var s=$.aN()
s.Q=this.gVB()
s.as=$.a8},
Bc(){this.NK()
this.wg()}}
A.A7.prototype={
eX(){this.QM()
$.bP=this},
iv(){this.NI()}}
A.A8.prototype={
eX(){var s,r,q,p,o=this
o.QO()
$.he=o
o.af$!==$&&A.eA()
o.af$=B.Ej
s=new A.wi(A.b3(t.hp),$.by())
B.iC.mV(s.gXb())
o.ac$=s
s=t.F3
r=new A.a_p(A.y(s,t.lT),A.b3(t.vQ),A.a([],t.AV))
o.fW$!==$&&A.eA()
o.fW$=r
q=$.aiG()
p=A.a([],t.DG)
o.K$!==$&&A.eA()
s=o.K$=new A.FQ(r,q,p,A.b3(s))
p=$.aN()
p.at=s.ga3a()
p.ax=$.a8
B.CT.uS(s.ga3t())
s=$.anw
if(s==null)s=$.anw=A.a([],t.e8)
s.push(o.gRN())
B.CV.uS(new A.ag7(o))
B.CU.uS(o.gVq())
B.c0.mV(o.gVz())
$.aso()
o.a5W()},
iv(){this.QP()}}
A.A9.prototype={
eX(){this.QQ()
$.eS=this
var s=t.K
this.fV$=new A.a0f(A.y(s,t.fx),A.y(s,t.lM),A.y(s,t.s8))},
oR(){this.PN()
var s=this.fV$
s===$&&A.b()
s.a_(0)},
jk(a){return this.a3z(a)},
a3z(a){var s=0,r=A.a2(t.H),q,p=this
var $async$jk=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:s=3
return A.a4(p.PO(a),$async$jk)
case 3:switch(A.bD(J.aO(t.a.a(a),"type"))){case"fontsChange":p.zb$.aA()
break}s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$jk,r)}}
A.Aa.prototype={
eX(){this.QT()
$.a6g=this
this.z7$=$.aN().a.a}}
A.Ab.prototype={
eX(){var s,r,q,p,o=this
o.QU()
$.kL=o
s=t.By
o.y1$=new A.IW(o.ga2t(),o.gW4(),o.gW8(),o.gW6(),A.a([],s),A.a([],s),A.a([],s),A.b3(t.d))
s=$.aN()
s.f=o.ga3g()
r=s.r=$.a8
s.fy=o.ga3I()
s.go=r
s.k2=o.ga3m()
s.k3=r
s.p1=o.gW2()
s.p2=r
s.p3=o.gW0()
s.p4=r
r=new A.we(B.R,o.IL(),$.cq(),null,A.aw())
r.aJ()
r.saW(null)
q=o.y1$
q===$&&A.b()
q.sa6x(r)
r=o.y1$.e
r.Q=r
q=t.W
q.a(A.L.prototype.gbw.call(r)).r.push(r)
p=r.Hs()
r.ch.saZ(0,p)
q.a(A.L.prototype.gbw.call(r)).z.push(r)
o.Nk(s.a.c)
o.cx$.push(o.gVx())
s=o.xr$
if(s!=null)s.m()
s=t.S
r=$.by()
o.xr$=new A.I_(new A.a2f(B.lN,A.y(s,t.Df)),A.y(s,t.eg),r)
o.cy$.push(o.gWl())},
iv(){this.QR()},
yV(a,b,c){this.xr$.a72(b,new A.ag6(this,c,b))
this.O7(0,b,c)},
iB(){var s=0,r=A.a2(t.H),q=[],p=this,o
var $async$iB=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:s=2
return A.a4(p.NJ(),$async$iB)
case 2:o=$.amm
if((o==null?null:o.a)==null)try{o=p.y1$
o===$&&A.b()
o.e.f3()}finally{}p.uJ()
s=3
return A.a4(p.gJj(),$async$iB)
case 3:return A.a0(null,r)}})
return A.a1($async$iB,r)}}
A.Ac.prototype={
iv(){this.QW()},
zo(){var s,r,q
this.Pj()
for(s=this.b3$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].rT()},
zu(){var s,r,q
this.Pl()
for(s=this.b3$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].IU()},
zq(){var s,r,q
this.Pk()
for(s=this.b3$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].IT()},
tn(a){var s,r,q
this.PA(a)
for(s=this.b3$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].IS(a)},
oR(){var s,r
this.QS()
for(s=this.b3$.length,r=0;r<s;++r);},
z0(){var s,r,q=this,p={}
p.a=null
if(q.bv$){s=new A.ag5(p,q)
p.a=s
$.bP.a03(s)}try{r=q.cU$
if(r!=null)q.ah$.a0s(r)
q.Pi()
q.ah$.a2J()}finally{}r=q.bv$=!1
p=p.a
if(p!=null)r=!(q.be$||q.bp$===0)
if(r){q.bv$=!0
r=$.bP
r.toString
p.toString
r.Lz(p)}},
iB(){var s=this.cU$
if(s!=null)this.ah$.a60(s,$.amm)
return this.QX()}}
A.DK.prototype={
aG(a){var s=new A.Ju(this.e,this.f,A.alh(a,null),null,A.aw())
s.aJ()
s.saW(null)
return s},
aN(a,b){b.sa1Z(this.e)
b.syq(A.alh(a,null))
b.sbz(0,this.f)}}
A.og.prototype={
gXP(){var s,r=this.r
if(r==null||r.gdA(r)==null)return this.e
s=r.gdA(r)
r=this.e
if(r==null)return s
s.toString
return r.C(0,s)},
L(a){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){s=o.x
if(s!=null)s=!(s.a>=s.b&&s.c>=s.d)
else s=!0}else s=!1
if(s)m=A.axa(new A.fN(B.ml,n,n),0,0)
else{s=o.d
if(s!=null)m=new A.lz(s,n,n,m,n)}r=o.gXP()
if(r!=null)m=new A.hZ(r,m,n)
s=o.f
if(s!=null)m=new A.t4(s,m,n)
s=o.as
if(s!==B.l){q=A.dS(a)
p=o.r
p.toString
m=A.amA(m,s,new A.MV(q==null?B.t:q,p))}s=o.r
if(s!=null)m=A.amO(m,s,B.hC)
s=o.x
if(s!=null)m=new A.fN(s,m,n)
s=o.y
if(s!=null)m=new A.hZ(s,m,n)
m.toString
return m}}
A.MV.prototype={
Bv(a){return this.c.uy(new A.C(0,0,0+a.a,0+a.b),this.b)},
C7(a){return!a.c.k(0,this.c)||a.b!==this.b}}
A.ok.prototype={
c1(a){return!J.f(this.w,a.w)||!J.f(this.x,a.x)}}
A.OR.prototype={
L(a){throw A.c(A.F0("A DefaultSelectionStyle constructed with DefaultSelectionStyle.fallback cannot be incorporated into the widget tree, it is meant only to provide a fallback value returned by DefaultSelectionStyle.of() when no enclosing default selection style is present in a BuildContext."))}}
A.DS.prototype={
Ui(){var s=$.as1()
return s},
L(a){var s=this.c,r=this.Ui()
if(r!=null)s=A.ak8(s,"<Web Disabling Text Editing Shortcuts>",r)
return A.ak8(s,"<Default Text Editing Shortcuts>",A.avB())}}
A.E1.prototype={
gar(a){var s=this.a
if(s==null)return null
s=s.c
s.toString
return s}}
A.oo.prototype={
an(){return new A.y3(A.Ja(null),A.Ja(null),B.m)},
a3_(a,b,c){return this.d.$3(a,b,c)},
a6u(a,b,c){return this.e.$3(a,b,c)}}
A.y3.prototype={
aC(){var s,r=this
r.aV()
s=r.a.c
r.d=s.gb1(s)
r.a.c.cQ(r.gvs())
r.Er()},
Dw(a){var s,r=this,q=r.d
q===$&&A.b()
s=r.Si(a,q)
r.d=s
if(q!==s)r.Er()},
aX(a){var s,r,q=this
q.bo(a)
s=a.c
if(s!==q.a.c){r=q.gvs()
s.c_(r)
q.a.c.cQ(r)
r=q.a.c
q.Dw(r.gb1(r))}},
Si(a,b){switch(a.a){case 0:case 3:return a
case 1:switch(b.a){case 0:case 3:case 1:return a
case 2:return b}break
case 2:switch(b.a){case 0:case 3:case 2:return a
case 1:return b}break}},
Er(){var s=this,r=s.d
r===$&&A.b()
switch(r.a){case 0:case 1:s.e.saL(0,s.a.c)
s.f.saL(0,B.ce)
break
case 2:case 3:s.e.saL(0,B.cX)
s.f.saL(0,new A.eV(s.a.c,new A.bk(A.a([],t.A),t.Q),0))
break}},
m(){this.a.c.c_(this.gvs())
this.aQ()},
L(a){var s=this.a
return s.a3_(a,this.e,s.a6u(a,this.f,s.f))}}
A.j_.prototype={
E(){return"KeyEventResult."+this.b}}
A.M7.prototype={}
A.Zs.prototype={
al(a){var s,r=this.a
if(r.ax===this){if(!r.gjl()){s=r.w
s=s!=null&&s.w===r}else s=!0
if(s)r.M5(B.Ci)
s=r.w
if(s!=null){if(s.f===r)s.f=null
s.r.u(0,r)}s=r.Q
if(s!=null)s.YC(0,r)
r.ax=null}},
AV(a){var s,r=this.a
if(r.ax===this){s=r.e
s.toString
a=A.awB(s,!0);(a==null?r.e.r.f.e:a).xg(r)}},
LA(){return this.AV(null)}}
A.xA.prototype={
E(){return"UnfocusDisposition."+this.b}}
A.cH.prototype={
geg(){var s,r,q
if(this.a)return!0
for(s=this.gfM(),r=s.length,q=0;q<r;++q)s[q].toString
return!1},
seg(a){var s,r=this
if(a!==r.a){r.a=a
s=r.w
if(s!=null){s.qH()
s.r.C(0,r)}}},
gco(){var s,r,q,p
if(!this.b)return!1
s=this.gdL()
if(s!=null&&!s.gco())return!1
for(r=this.gfM(),q=r.length,p=0;p<q;++p)r[p].toString
return!0},
sco(a){var s,r=this
if(a!==r.b){r.b=a
if(r.gkD()&&!a)r.M5(B.Ci)
s=r.w
if(s!=null){s.qH()
s.r.C(0,r)}}},
slU(a){return},
slV(a){},
gol(){var s,r,q,p,o=this.y
if(o==null){s=A.a([],t.i4)
for(o=this.as,r=o.length,q=0;q<o.length;o.length===r||(0,A.P)(o),++q){p=o[q]
B.c.I(s,p.gol())
s.push(p)}this.y=s
o=s}return o},
gpE(){var s=this.gol()
return new A.aH(s,new A.Zt(),A.aj(s).h("aH<1>"))},
gfM(){var s,r,q=this.x
if(q==null){s=A.a([],t.i4)
r=this.Q
for(;r!=null;){s.push(r)
r=r.Q}this.x=s
q=s}return q},
gkD(){if(!this.gjl()){var s=this.w
if(s==null)s=null
else{s=s.f
s=s==null?null:B.c.B(s.gfM(),this)}s=s===!0}else s=!0
return s},
gjl(){var s=this.w
return(s==null?null:s.f)===this},
gkI(){return this.gdL()},
gdL(){var s,r,q,p
for(s=this.gfM(),r=s.length,q=0;q<r;++q){p=s[q]
if(p instanceof A.m4)return p}return null},
gaP(a){var s,r=this.e.ga9(),q=r.bA(0,null),p=r.gjQ(),o=A.cw(q,new A.t(p.a,p.b))
p=r.bA(0,null)
q=r.gjQ()
s=A.cw(p,new A.t(q.c,q.d))
return new A.C(o.a,o.b,s.a,s.b)},
M5(a){var s,r,q=this
if(!q.gkD()){s=q.w
s=s==null||s.w!==q}else s=!1
if(s)return
r=q.gdL()
if(r==null)return
switch(a.a){case 0:if(r.gco())B.c.a_(r.dy)
for(;!r.gco();){r=r.gdL()
if(r==null){s=q.w
r=s==null?null:s.e}}r.iQ(!1)
break
case 1:if(r.gco())B.c.u(r.dy,q)
for(;!r.gco();){s=r.gdL()
if(s!=null)B.c.u(s.dy,r)
r=r.gdL()
if(r==null){s=q.w
r=s==null?null:s.e}}r.iQ(!0)
break}},
Fw(a){var s=this,r=s.w
if(r!=null){if(r.f===s)r.w=null
else{r.w=s
r.qH()}return}a.lD()
a.x0()
if(a!==s)s.x0()},
G5(a,b,c){var s,r,q
if(c){s=b.gdL()
if(s!=null)B.c.u(s.dy,b)}b.Q=null
B.c.u(this.as,b)
for(s=this.gfM(),r=s.length,q=0;q<r;++q)s[q].y=null
this.y=null},
YC(a,b){return this.G5(a,b,!0)},
U3(a){var s,r,q,p
this.w=a
for(s=this.gol(),r=s.length,q=0;q<r;++q){p=s[q]
p.w=a
p.x=null}},
xg(a){var s,r,q,p,o,n=this
if(a.Q===n)return
s=a.gdL()
r=a.gkD()
q=a.Q
if(q!=null)q.G5(0,a,s!=n.gkI())
n.as.push(a)
a.Q=n
a.x=null
a.U3(n.w)
for(q=a.gfM(),p=q.length,o=0;o<p;++o)q[o].y=null
if(r){q=n.w
if(q!=null){q=q.f
if(q!=null)q.lD()}}if(s!=null&&a.e!=null&&a.gdL()!==s){q=a.e
q.toString
q=A.an9(q)
if(q!=null)q.yn(a,s)}if(a.ay){a.iQ(!0)
a.ay=!1}},
m(){var s=this.ax
if(s!=null)s.al(0)
this.dX()},
x0(){var s=this
if(s.Q==null)return
if(s.gjl())s.lD()
s.aA()},
uj(){this.iQ(!0)},
iQ(a){var s,r=this
if(!r.gco())return
if(r.Q==null){r.ay=!0
return}r.lD()
if(r.gjl()){s=r.w.w
s=s==null||s===r}else s=!1
if(s)return
r.Fw(r)},
lD(){var s,r,q,p,o,n
for(s=B.c.ga3(this.gfM()),r=new A.qe(s,t.oj),q=t.j5,p=this;r.q();p=o){o=q.a(s.gF(s))
n=o.dy
B.c.u(n,p)
n.push(p)}},
c0(){var s,r,q,p=this
p.gkD()
s=p.gkD()&&!p.gjl()?"[IN FOCUS PATH]":""
r=s+(p.gjl()?"[PRIMARY FOCUS]":"")
s=A.bM(p)
q=r.length!==0?"("+r+")":""
return"<optimized out>#"+s+q},
$iac:1}
A.Zt.prototype={
$1(a){return!a.geg()&&a.gco()},
$S:12}
A.m4.prototype={
gkI(){return this},
gpE(){if(!this.gco())return B.Dt
return A.cH.prototype.gpE.call(this)},
mU(a){if(a.Q==null)this.xg(a)
if(this.gkD())a.iQ(!0)
else a.lD()},
iQ(a){var s,r,q=this,p=q.dy
while(!0){if((p.length!==0?B.c.gR(p):null)!=null)s=!(p.length!==0?B.c.gR(p):null).gco()
else s=!1
if(!s)break
p.pop()}r=p.length!==0?B.c.gR(p):null
if(!a||r==null){if(q.gco()){q.lD()
q.Fw(q)}return}r.iQ(!0)}}
A.iV.prototype={
E(){return"FocusHighlightMode."+this.b}}
A.F4.prototype={
E(){return"FocusHighlightStrategy."+this.b}}
A.u4.prototype={
Hr(){var s,r,q=this
switch(0){case 0:s=q.c
if(s==null)return
r=s?B.hI:B.ei
break}s=q.b
if(s==null)s=A.F5()
q.b=r
if((r==null?A.F5():r)!==s)q.Xp()},
Xp(){var s,r,q,p,o,n,m,l,k,j=this,i=j.d,h=i.a
if(h.a===0)return
p=A.aA(i,!0,t.tP)
for(i=p.length,o=0;o<i;++o){s=p[o]
try{if(h.P(0,s)){n=j.b
if(n==null)n=A.F5()
s.$1(n)}}catch(m){r=A.ae(m)
q=A.au(m)
l=j instanceof A.bR?A.cR(j):null
n=A.bo("while dispatching notifications for "+A.aD(l==null?A.aT(j):l).i(0))
k=$.fJ()
if(k!=null)k.$1(new A.bJ(r,q,"widgets library",n,null,!1))}}},
U2(a){var s,r,q=this
switch(a.gci(a).a){case 0:case 2:case 3:q.c=!0
s=B.hI
break
case 1:case 4:case 5:q.c=!1
s=B.ei
break
default:s=null}r=q.b
if(s!==(r==null?A.F5():r))q.Hr()},
Vp(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.c=!1
i.Hr()
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
switch(A.aDf(k).a){case 1:break c$1
case 0:r=!0
break
case 2:r=!1
break
default:r=!1}break}s.length===q||(0,A.P)(s);++m}return r},
qH(){if(this.y)return
this.y=!0
A.dQ(this.gS_())},
S0(){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.y=!1
s=h.f
for(r=h.x,q=r.length,p=h.e,o=0;o<r.length;r.length===q||(0,A.P)(r),++o){n=r[o]
m=n.a
if(m.Q!=null||m===p)if(m.w===h){l=m.dy
m=(l.length!==0?B.c.gR(l):null)==null&&B.c.B(n.b.gfM(),m)
k=m}else k=!1
else k=!1
if(k)n.b.iQ(!0)}B.c.a_(r)
r=h.f
if(r==null&&h.w==null)h.w=p
q=h.w
if(q!=null&&q!==r){if(s==null)j=null
else{r=s.gfM()
r=A.uF(r,A.aj(r).c)
j=r}if(j==null)j=A.b3(t.lc)
r=h.w.gfM()
i=A.uF(r,A.aj(r).c)
r=h.r
r.I(0,i.kr(j))
r.I(0,j.kr(i))
r=h.f=h.w
h.w=null}if(s!=r){if(s!=null)h.r.C(0,s)
r=h.f
if(r!=null)h.r.C(0,r)}for(r=h.r,q=A.jy(r,r.r),p=A.n(q).c;q.q();){m=q.d;(m==null?p.a(m):m).x0()}r.a_(0)
if(s!=h.f)h.aA()},
$iac:1}
A.Nz.prototype={}
A.NA.prototype={}
A.NB.prototype={}
A.NC.prototype={}
A.m3.prototype={
gKY(){var s=this.w,r=this.e
s=r==null?null:r.r
return s},
gAo(){var s=this.x
if(s==null){s=this.e
s=s==null?null:s.f}return s},
gco(){var s=this.y
if(s==null){s=this.e
s=s==null?null:s.gco()}return s!==!1},
geg(){var s=this.z
if(s==null){s=this.e
s=s==null?null:s.geg()}return s===!0},
glU(){var s=this.Q
if(s==null)s=this.e!=null||null
return s!==!1},
glV(){var s=this.as
if(s==null)s=this.e!=null||null
return s!==!1},
glT(){var s=this.ax
if(s==null){s=this.e
s=s==null?null:s.at}return s},
an(){return A.aAl()}}
A.qt.prototype={
gbZ(a){var s=this.a.e
if(s==null){s=this.d
s.toString}return s},
aC(){this.aV()
this.Fc()},
Fc(){var s,r,q,p=this
if(p.a.e==null)if(p.d==null)p.d=p.Ea()
s=p.gbZ(p)
p.a.glU()
s.slU(!0)
s=p.gbZ(p)
p.a.glV()
s.slV(!0)
p.a.geg()
p.gbZ(p).seg(p.a.geg())
if(p.a.y!=null){s=p.gbZ(p)
r=p.a.y
r.toString
s.sco(r)}p.f=p.gbZ(p).gco()
p.gbZ(p)
p.r=!0
p.gbZ(p)
p.w=!0
p.e=p.gbZ(p).gjl()
s=p.gbZ(p)
r=p.c
r.toString
p.a.gKY()
q=p.a.gAo()
s.e=r
s.f=q==null?s.f:q
r=s.r
s.r=r
p.y=s.ax=new A.Zs(s)
p.gbZ(p).Y(0,p.gwB())},
Ea(){var s=this,r=s.a.glT(),q=s.a.gco()
s.a.glU()
s.a.glV()
return A.ajr(q,r,!0,!0,null,null,s.a.geg())},
m(){var s,r=this
r.gbZ(r).G(0,r.gwB())
r.y.al(0)
s=r.d
if(s!=null)s.m()
r.aQ()},
b5(){this.cE()
var s=this.y
if(s!=null)s.LA()
this.EV()},
EV(){var s,r,q,p=this
if(!p.x&&p.a.f){s=p.c
s.toString
s=A.awA(s)
r=p.gbZ(p)
if(r.Q==null)s.xg(r)
q=s.w
if(q!=null)q.x.push(new A.M7(s,r))
s=s.w
if(s!=null)s.qH()
p.x=!0}},
dv(){this.n9()
var s=this.y
if(s!=null)s.LA()
this.x=!1},
aX(a){var s,r,q=this
q.bo(a)
s=a.e
r=q.a
if(s==r.e){if(!J.f(r.gAo(),q.gbZ(q).f))q.gbZ(q).f=q.a.gAo()
q.a.gKY()
q.gbZ(q)
q.a.geg()
q.gbZ(q).seg(q.a.geg())
if(q.a.y!=null){s=q.gbZ(q)
r=q.a.y
r.toString
s.sco(r)}s=q.gbZ(q)
q.a.glU()
s.slU(!0)
s=q.gbZ(q)
q.a.glV()
s.slV(!0)}else{q.y.al(0)
if(s!=null)s.G(0,q.gwB())
q.Fc()}if(a.f!==q.a.f)q.EV()},
Vh(){var s,r=this,q=r.gbZ(r).gjl(),p=r.gbZ(r).gco()
r.gbZ(r)
r.gbZ(r)
s=r.a.r
if(s!=null)s.$1(r.gbZ(r).gkD())
s=r.e
s===$&&A.b()
if(s!==q)r.aw(new A.acc(r,q))
s=r.f
s===$&&A.b()
if(s!==p)r.aw(new A.acd(r,p))
s=r.r
s===$&&A.b()
if(!s)r.aw(new A.ace(r,!0))
s=r.w
s===$&&A.b()
if(!s)r.aw(new A.acf(r,!0))},
L(a){var s,r,q=this,p=null,o=q.y
o.toString
o.AV(q.a.c)
o=q.a
s=o.d
if(o.at){o=q.f
o===$&&A.b()
r=q.e
r===$&&A.b()
s=A.dK(p,s,!1,p,!1,o,r,p,p,p,p,p,p,p,p,p,p,p,p,p,p)}return A.apc(s,q.gbZ(q))}}
A.acc.prototype={
$0(){this.a.e=this.b},
$S:0}
A.acd.prototype={
$0(){this.a.f=this.b},
$S:0}
A.ace.prototype={
$0(){this.a.r=this.b},
$S:0}
A.acf.prototype={
$0(){this.a.w=this.b},
$S:0}
A.F6.prototype={
an(){return new A.ND(B.m)}}
A.ND.prototype={
Ea(){var s=this.a.glT()
return A.ajs(this.a.gco(),s,this.a.geg())},
L(a){var s=this,r=null,q=s.y
q.toString
q.AV(s.a.c)
q=s.gbZ(s)
return A.dK(r,A.apc(s.a.d,q),!1,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)}}
A.ye.prototype={}
A.agQ.prototype={
$1(a){var s=this.a
if(--s.a===0){s.b=a
return!1}return!0},
$S:49}
A.qu.prototype={}
A.nl.prototype={
E(){return"TraversalDirection."+this.b}}
A.F7.prototype={
Ey(a,b,c){var s,r=a.gkI(),q=r.dy,p=q.length!==0?B.c.gR(q):null
q=p==null&&r.gol().length!==0
if(q){s=this.GM(r,a)
if(s.length===0)p=null
else p=b?B.c.gR(s):B.c.gJ(s)}return p==null?a:p},
TT(a,b){return this.Ey(a,!1,b)},
a4k(a){},
yn(a,b){},
Up(a){var s
if(a==null)s=null
else{s=a.jM(t.AB)
if(s==null)s=null
else{s=s.f
s.toString}}return t.fc.a(s)},
GM(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=this.Up(a.e),c=d==null,b=c?e:d.f
if(b==null)b=new A.w2(A.y(t.j5,t.uJ))
s=A.y(t.k_,t.hF)
for(r=a.gol(),q=r.length,p=t.fc,o=t.AB,n=t.i4,m=0;m<r.length;r.length===q||(0,A.P)(r),++m){l=r[m]
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
h=A.aq7(k,2)
if(h==null)k=e
else{k=h.y
j=k==null?e:k.j(0,A.aD(o))
if(j==null)k=e
else{k=j.f
k.toString}}p.a(k)
g=k==null?e:k.r
if(s.j(0,g)==null)s.l(0,g,A.apd(k,b,A.a([],n)))
s.j(0,g).c.push(i)
continue}if(l.gco()&&!l.geg()){if(s.j(0,i)==null)s.l(0,i,A.apd(k,b,A.a([],n)))
s.j(0,i).c.push(l)}}for(r=A.j1(s,s.r);r.q();){q=r.d
p=s.j(0,q).b.Nu(s.j(0,q).c,a0)
p=A.a(p.slice(0),A.aj(p))
B.c.a_(s.j(0,q).c)
B.c.I(s.j(0,q).c,p)}f=A.a([],n)
if(s.a!==0)r=s.P(0,c?e:d.r)
else r=!1
if(r){r=s.j(0,c?e:d.r)
r.toString
new A.Zv(s,f).$1(r)}if(!!f.fixed$length)A.K(A.O("removeWhere"))
B.c.nG(f,new A.Zu(),!0)
return f},
FC(a,b){var s,r,q,p,o,n,m=this,l=a.gkI()
l.toString
m.l7(l)
m.d7$.u(0,l)
s=l.dy
r=s.length!==0?B.c.gR(s):null
if(r==null){q=b?m.TT(a,!1):m.Ey(a,!0,!1)
A.ll(q,b?B.cI:B.cJ)
return!0}p=m.GM(l,a)
if(p.length===0)return!1
if(b&&r===B.c.gR(p)){A.ll(B.c.gJ(p),B.cI)
return!0}if(!b&&r===B.c.gJ(p)){A.ll(B.c.gR(p),B.cJ)
return!0}for(l=J.at(b?p:new A.cy(p,A.aj(p).h("cy<1>"))),o=null;l.q();o=n){n=l.gF(l)
if(o==r){l=b?B.cI:B.cJ
n.uj()
s=n.e
s.toString
A.aou(s,1,l)
return!0}}return!1}}
A.Zv.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=a.c,r=s.length,q=this.b,p=this.a,o=0;o<s.length;s.length===r||(0,A.P)(s),++o){n=s[o]
if(p.P(0,n)){m=p.j(0,n)
m.toString
this.$1(m)}else q.push(n)}},
$S:289}
A.Zu.prototype={
$1(a){return!a.gco()||a.geg()},
$S:12}
A.qo.prototype={}
A.N5.prototype={}
A.Wj.prototype={
a2L(a,b){var s=this
switch(b.a){case 0:return s.r0(a,!1,!0)
case 2:return s.r0(a,!0,!0)
case 3:return s.r0(a,!1,!1)
case 1:return s.r0(a,!0,!1)}},
r0(a,b,c){var s=a.gkI().gpE().dU(0)
A.nR(s,new A.Wr(c,b),t.lc)
if(s.length!==0)return B.c.gJ(s)
return null},
ZB(a,b,c){var s,r=c.gpE().dU(0)
A.nR(r,new A.Wl(),t.lc)
switch(a.a){case 3:s=new A.aH(r,new A.Wm(b),A.aj(r).h("aH<1>"))
break
case 1:s=new A.aH(r,new A.Wn(b),A.aj(r).h("aH<1>"))
break
case 0:case 2:s=null
break
default:s=null}return s},
ZC(a,b,c){var s=c.dU(0)
A.nR(s,new A.Wo(),t.lc)
switch(a.a){case 0:return new A.aH(s,new A.Wp(b),A.aj(s).h("aH<1>"))
case 2:return new A.aH(s,new A.Wq(b),A.aj(s).h("aH<1>"))
case 3:case 1:break}return null},
Yi(a,b,c){var s,r,q=this,p=q.d7$,o=p.j(0,b),n=o!=null
if(n){s=o.a
s=s.length!==0&&B.c.gJ(s).a!==a}else s=!1
if(s){s=o.a
if(B.c.gR(s).b.Q==null){q.l7(b)
p.u(0,b)
return!1}r=new A.Wk(q,o,b)
switch(a.a){case 2:case 0:switch(B.c.gJ(s).a.a){case 3:case 1:q.l7(b)
p.u(0,b)
break
case 0:case 2:if(r.$1(a))return!0
break}break
case 3:case 1:switch(B.c.gJ(s).a.a){case 3:case 1:if(r.$1(a))return!0
break
case 0:case 2:q.l7(b)
p.u(0,b)
break}break}}if(n&&o.a.length===0){q.l7(b)
p.u(0,b)}return!1},
a43(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=a.gkI(),f=g.dy,e=f.length!==0?B.c.gR(f):h
if(e==null){s=i.a2L(a,b)
if(s==null)s=a
switch(b.a){case 0:case 3:A.ll(s,B.cJ)
break
case 1:case 2:A.ll(s,B.cI)
break}return!0}if(i.Yi(b,g,e))return!0
f=e.e
f.toString
r=A.ic(f)
f=b.a
switch(f){case 2:case 0:q=i.ZC(b,e.gaP(e),g.gpE())
if(r!=null&&!r.d.gI6()){q.toString
p=new A.aH(q,new A.Ws(r),q.$ti.h("aH<o.E>"))
if(!p.gN(p))q=p}if(!q.ga3(q).q()){o=h
break}n=A.aA(q,!0,A.n(q).h("o.E"))
if(b===B.ZO){m=A.aj(n).h("cy<1>")
n=A.aA(new A.cy(n,m),!0,m.h("bm.E"))}l=new A.aH(n,new A.Wt(new A.C(e.gaP(e).a,-1/0,e.gaP(e).c,1/0)),A.aj(n).h("aH<1>"))
if(!l.gN(l)){o=l.gJ(l)
break}A.nR(n,new A.Wu(e),t.lc)
o=B.c.gJ(n)
break
case 1:case 3:q=i.ZB(b,e.gaP(e),g)
if(r!=null&&!r.d.gI6()){q.toString
p=new A.aH(q,new A.Wv(r),q.$ti.h("aH<o.E>"))
if(!p.gN(p))q=p}if(!q.ga3(q).q()){o=h
break}n=A.aA(q,!0,A.n(q).h("o.E"))
if(b===B.ZP){m=A.aj(n).h("cy<1>")
n=A.aA(new A.cy(n,m),!0,m.h("bm.E"))}l=new A.aH(n,new A.Ww(new A.C(-1/0,e.gaP(e).b,1/0,e.gaP(e).d)),A.aj(n).h("aH<1>"))
if(!l.gN(l)){o=l.gJ(l)
break}A.nR(n,new A.Wx(e),t.lc)
o=B.c.gJ(n)
break
default:o=h}if(o!=null){m=i.d7$
k=m.j(0,g)
j=new A.qo(b,e)
if(k!=null)k.a.push(j)
else m.l(0,g,new A.N5(A.a([j],t.gE)))
switch(f){case 0:case 3:A.ll(o,B.cJ)
break
case 2:case 1:A.ll(o,B.cI)
break}return!0}return!1}}
A.aey.prototype={
$1(a){return a.b===this.a},
$S:290}
A.Wr.prototype={
$2(a,b){if(this.a)if(this.b)return B.d.aF(a.gaP(a).b,b.gaP(b).b)
else return B.d.aF(b.gaP(b).d,a.gaP(a).d)
else if(this.b)return B.d.aF(a.gaP(a).a,b.gaP(b).a)
else return B.d.aF(b.gaP(b).c,a.gaP(a).c)},
$S:38}
A.Wl.prototype={
$2(a,b){return B.d.aF(a.gaP(a).gaK().a,b.gaP(b).gaK().a)},
$S:38}
A.Wm.prototype={
$1(a){var s=this.a
return!a.gaP(a).k(0,s)&&a.gaP(a).gaK().a<=s.a},
$S:12}
A.Wn.prototype={
$1(a){var s=this.a
return!a.gaP(a).k(0,s)&&a.gaP(a).gaK().a>=s.c},
$S:12}
A.Wo.prototype={
$2(a,b){return B.d.aF(a.gaP(a).gaK().b,b.gaP(b).gaK().b)},
$S:38}
A.Wp.prototype={
$1(a){var s=this.a
return!a.gaP(a).k(0,s)&&a.gaP(a).gaK().b<=s.b},
$S:12}
A.Wq.prototype={
$1(a){var s=this.a
return!a.gaP(a).k(0,s)&&a.gaP(a).gaK().b>=s.d},
$S:12}
A.Wk.prototype={
$1(a){var s,r,q=this.b.a.pop().b,p=q.e
p.toString
p=A.ic(p)
s=$.ai.ah$.f.f.e
s.toString
if(p!=A.ic(s)){p=this.a
s=this.c
p.l7(s)
p.d7$.u(0,s)
return!1}switch(a.a){case 0:case 3:r=B.cJ
break
case 1:case 2:r=B.cI
break
default:r=null}A.ll(q,r)
return!0},
$S:292}
A.Ws.prototype={
$1(a){var s=a.e
s.toString
return A.ic(s)===this.a},
$S:12}
A.Wt.prototype={
$1(a){var s=a.gaP(a).fs(this.a)
return!s.gN(s)},
$S:12}
A.Wu.prototype={
$2(a,b){var s=this.a
return B.d.aF(Math.abs(a.gaP(a).gaK().a-s.gaP(s).gaK().a),Math.abs(b.gaP(b).gaK().a-s.gaP(s).gaK().a))},
$S:38}
A.Wv.prototype={
$1(a){var s=a.e
s.toString
return A.ic(s)===this.a},
$S:12}
A.Ww.prototype={
$1(a){var s=a.gaP(a).fs(this.a)
return!s.gN(s)},
$S:12}
A.Wx.prototype={
$2(a,b){var s=this.a
return B.d.aF(Math.abs(a.gaP(a).gaK().b-s.gaP(s).gaK().b),Math.abs(b.gaP(b).gaK().b-s.gaP(s).gaK().b))},
$S:38}
A.cP.prototype={
gIY(){var s=this.d
if(s==null){s=this.c.e
s.toString
s=this.d=new A.aew().$1(s)}s.toString
return s}}
A.aev.prototype={
$1(a){var s=a.gIY()
return A.uF(s,A.aj(s).c)},
$S:293}
A.aex.prototype={
$2(a,b){switch(this.a.a){case 1:return B.d.aF(a.b.a,b.b.a)
case 0:return B.d.aF(b.b.c,a.b.c)}},
$S:112}
A.aew.prototype={
$1(a){var s,r,q=A.a([],t.AG),p=t.I,o=a.jM(p)
for(;o!=null;){s=o.f
s.toString
q.push(p.a(s))
s=A.aq7(o,1)
if(s==null)o=null
else{s=s.y
r=s==null?null:s.j(0,A.aD(p))
o=r}}return q},
$S:295}
A.iv.prototype={
gaP(a){var s,r,q,p,o=this
if(o.b==null)for(s=o.a,s=new A.aC(s,new A.aet(),A.aj(s).h("aC<1,C>")),s=new A.bT(s,s.gp(s)),r=A.n(s).c;s.q();){q=s.d
if(q==null)q=r.a(q)
p=o.b
if(p==null){o.b=q
p=q}o.b=p.oE(q)}s=o.b
s.toString
return s}}
A.aet.prototype={
$1(a){return a.b},
$S:296}
A.aeu.prototype={
$2(a,b){switch(this.a.a){case 1:return B.d.aF(a.gaP(a).a,b.gaP(b).a)
case 0:return B.d.aF(b.gaP(b).c,a.gaP(a).c)}},
$S:297}
A.w2.prototype={
SK(a){var s,r,q,p,o,n=B.c.gJ(a).a,m=t.hY,l=A.a([],m),k=A.a([],t.lZ)
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
A.apm(s,o)}return k},
FX(a){var s,r,q,p
A.nR(a,new A.a4g(),t.dP)
s=B.c.gJ(a)
r=new A.a4h().$2(s,a)
if(J.bI(r)<=1)return s
q=A.aAL(r)
q.toString
A.apm(r,q)
p=this.SK(r)
if(p.length===1)return B.c.gJ(B.c.gJ(p).a)
A.aAK(p,q)
return B.c.gJ(B.c.gJ(p).a)},
Nu(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
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
i=this.FX(s)
j.push(i.c)
B.c.u(s,i)
for(;s.length!==0;){h=this.FX(s)
j.push(h.c)
B.c.u(s,h)}return j}}
A.a4g.prototype={
$2(a,b){return B.d.aF(a.b.b,b.b.b)},
$S:112}
A.a4h.prototype={
$2(a,b){var s=a.b,r=A.aj(b).h("aH<1>")
return A.aA(new A.aH(b,new A.a4i(new A.C(-1/0,s.b,1/0,s.d)),r),!0,r.h("o.E"))},
$S:298}
A.a4i.prototype={
$1(a){var s=a.b.fs(this.a)
return!s.gN(s)},
$S:299}
A.u5.prototype={
an(){return new A.NE(B.m)}}
A.NE.prototype={
aC(){this.aV()
this.d=A.ajr(!1,"FocusTraversalGroup",!0,!0,null,null,!0)},
m(){var s=this.d
if(s!=null)s.m()
this.aQ()},
L(a){var s=null,r=this.a,q=r.c,p=this.d
p.toString
return new A.qv(q,p,A.F3(!1,!1,r.f,s,!0,!0,p,!1,s,s,s,s,s,!0),s)}}
A.qv.prototype={
c1(a){return!1}}
A.JR.prototype={
dc(a){A.ll(a.gbZ(a),B.Uh)}}
A.mx.prototype={}
A.Ia.prototype={
dc(a){var s=$.ai.ah$.f.f
s.e.a5(t.AB).f.FC(s,!0)}}
A.mN.prototype={}
A.J6.prototype={
dc(a){var s=$.ai.ah$.f.f
s.e.a5(t.AB).f.FC(s,!1)}}
A.DZ.prototype={
dc(a){var s=$.ai.ah$.f.f,r=s.e.a5(t.AB)
r.f.a43(s,a.a)}}
A.NF.prototype={}
A.PN.prototype={
yn(a,b){var s
this.O6(a,b)
s=this.d7$.j(0,b)
if(s!=null){s=s.a
if(!!s.fixed$length)A.K(A.O("removeWhere"))
B.c.nG(s,new A.aey(a),!0)}}}
A.So.prototype={}
A.Sp.prototype={}
A.en.prototype={
gbu(){var s,r=$.ai.ah$.z.j(0,this)
if(r instanceof A.fw){s=r.ok
s.toString
if(A.n(this).c.b(s))return s}return null}}
A.bB.prototype={
i(a){var s=this,r=s.a,q=r!=null?" "+r:""
if(A.A(s)===B.a_3)return"[GlobalKey#"+A.bM(s)+q+"]"
return"["+("<optimized out>#"+A.bM(s))+q+"]"}}
A.kg.prototype={
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return this.$ti.b(b)&&b.a===this.a},
gt(a){return A.lu(this.a)},
i(a){var s="GlobalObjectKey",r=B.b.im(s,"<State<StatefulWidget>>")?B.b.S(s,0,-8):s
return"["+r+" "+("<optimized out>#"+A.bM(this.a))+"]"}}
A.j.prototype={
c0(){var s=this.a
return s==null?"Widget":"Widget-"+s.i(0)},
k(a,b){if(b==null)return!1
return this.ON(0,b)},
gt(a){return A.B.prototype.gt.call(this,this)}}
A.b5.prototype={
bU(a){return new A.KP(this,B.a6)}}
A.af.prototype={
bU(a){return A.azt(this)}}
A.QT.prototype={
E(){return"_StateLifecycle."+this.b}}
A.am.prototype={
aC(){},
aX(a){},
f3(){},
aw(a){a.$0()
this.c.h1()},
dv(){},
ce(){},
m(){},
b5(){}}
A.aS.prototype={}
A.dy.prototype={
bU(a){return new A.mz(this,B.a6,A.n(this).h("mz<dy.T>"))}}
A.b7.prototype={
bU(a){return A.awX(this)}}
A.aB.prototype={
aN(a,b){},
ot(a){}}
A.FU.prototype={
bU(a){return new A.FT(this,B.a6)}}
A.b4.prototype={
bU(a){return A.azk(this)}}
A.er.prototype={
bU(a){return A.axH(this)}}
A.ny.prototype={
E(){return"_ElementLifecycle."+this.b}}
A.NZ.prototype={
Hc(a){a.aU(new A.ad3(this,a))
a.pF()},
a_4(){var s,r,q,p=this
p.a=!0
r=p.b
q=A.aA(r,!0,A.n(r).c)
B.c.dj(q,A.ahR())
s=q
r.a_(0)
try{r=s
new A.cy(r,A.aT(r).h("cy<1>")).X(0,p.ga_2())}finally{p.a=!1}},
C(a,b){if(b.w===B.c9){b.dv()
b.aU(A.ahS())}this.b.C(0,b)}}
A.ad3.prototype={
$1(a){this.a.Hc(a)},
$S:8}
A.Uz.prototype={
BS(a){var s=this
if(a.at){s.e=!0
return}if(!s.d&&s.a!=null){s.d=!0
s.a.$0()}s.c.push(a)
a.at=!0},
KI(a){try{a.$0()}finally{}},
rz(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=b==null
if(f&&h.c.length===0)return
try{h.d=!0
if(!f){g.a=null
h.e=!1
try{b.$0()}finally{}}f=h.c
B.c.dj(f,A.ahR())
h.e=!1
g.b=f.length
g.c=0
for(n=0;n<g.b;){s=f[n]
r=!1
if(r){n=s.f
n.toString
m=n instanceof A.bR?A.cR(n):null
A.akl(A.aD(m==null?A.aT(n):m).i(0),null,null)}try{s.Lp()}catch(l){q=A.ae(l)
p=A.au(l)
n=A.bo("while rebuilding dirty elements")
k=$.fJ()
if(k!=null)k.$1(new A.bJ(q,p,"widgets library",n,new A.UA(g,h,s),!1))}if(r)A.akk()
n=++g.c
k=g.b
j=f.length
if(k>=j){k=h.e
k.toString}else k=!0
if(k){if(!!f.immutable$list)A.K(A.O("sort"))
n=j-1
if(n-0<=32)A.KD(f,0,n,A.ahR())
else A.KC(f,0,n,A.ahR())
n=h.e=!1
g.b=f.length
while(!0){k=g.c
if(!(k>0?f[k-1].as:n))break
g.c=k-1}n=k}}}finally{for(f=h.c,n=f.length,i=0;i<n;++i){o=f[i]
o.at=!1}B.c.a_(f)
h.d=!1
h.e=null}},
a0s(a){return this.rz(a,null)},
a2J(){var s,r,q
try{this.KI(this.b.ga_3())}catch(q){s=A.ae(q)
r=A.au(q)
A.ala(A.EK("while finalizing the widget tree"),s,r,null)}finally{}},
a60(a,b){try{a.b=b
a.f3()}finally{}}}
A.UA.prototype={
$0(){var s=null,r=A.a([],t.F),q=this.a,p=q.c,o=this.b.c.length,n="The element being rebuilt at the time was index "+p
q=""+q.b
if(p<o)J.jU(r,A.hE(n+" of "+q,this.c,!0,B.aJ,s,!1,s,s,B.ap,s,!1,!0,!0,B.aW,s,t.h))
else J.jU(r,A.YY(n+" of "+q+", but _dirtyElements only had "+o+" entries. This suggests some confusion in the framework internals."))
return r},
$S:16}
A.vv.prototype={
yf(){var s=this.a
this.c=new A.aeb(this,s==null?null:s.c)}}
A.aeb.prototype={
d4(a){var s=this.a.L_(a)
if(s)return
s=this.b
if(s!=null)s.d4(a)}}
A.aV.prototype={
Rf(a){},
k(a,b){if(b==null)return!1
return this===b},
f3(){var s=this
if(A.aq_(s.b,s.f)){s.h1()
s.b=null}s.aU(new A.Yn(s))
s.b=null},
ga9(){var s,r
for(s=this;s!=null;){r={}
if(s.w===B.Cq)break
else if(s instanceof A.bC)return s.ga9()
else{r.a=null
s.aU(new A.Yo(r))
s=r.a}}return null},
a29(a){var s=null
return A.hE(a,this,!0,B.aJ,s,!1,s,s,B.ap,s,!1,!0,!0,B.aW,s,t.h)},
aU(a){},
dV(a,b,c){var s,r,q=this
if(b==null){if(a!=null)q.yC(a)
return null}if(a!=null){s=a.f.k(0,b)
if(s){if(!J.f(a.d,c))q.Ma(a,c)
s=a}else{s=a.f
s.toString
if(A.A(s)===A.A(b)&&J.f(s.a,b.a)){if(!J.f(a.d,c))q.Ma(a,c)
a.bf(0,b)
s=a}else{q.yC(a)
r=q.tA(b,c)
s=r}}}else{r=q.tA(b,c)
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
p.xK()
p.yf()},
bf(a,b){this.f=b},
Ma(a,b){new A.Yp(b).$1(a)},
xQ(a){this.d=a},
Hm(a){var s=a+1,r=this.e
r===$&&A.b()
if(r<s){this.e=s
this.aU(new A.Yk(s))}},
on(){this.aU(new A.Ym())
this.d=null},
rt(a){this.aU(new A.Yl(a))
this.d=a},
YR(a,b){var s,r,q=$.ai.ah$.z.j(0,a)
if(q==null)return null
s=q.f
s.toString
if(!(A.A(s)===A.A(b)&&J.f(s.a,b.a)))return null
r=q.a
if(r!=null){r.ji(q)
r.yC(q)}this.r.b.b.u(0,q)
return q},
tA(a,b){var s,r,q,p,o,n,m=this,l=!1
if(l)A.akl(A.A(a).i(0),null,null)
try{s=a.a
if(s instanceof A.en){r=m.YR(s,a)
if(r!=null){o=r
o.a=m
o.toString
n=m.e
n===$&&A.b()
o.Hm(n)
o.ce()
o.aU(A.ar8())
o.rt(b)
q=m.dV(r,a,b)
o=q
o.toString
return o}}p=a.bU(0)
p.fv(m,b)
return p}finally{if(l)A.akk()}},
yC(a){a.a=null
a.on()
this.r.b.C(0,a)},
ji(a){},
ce(){var s=this,r=s.z,q=r==null,p=!q&&r.a!==0||s.Q
s.w=B.c9
if(!q)r.a_(0)
s.Q=!1
s.xK()
s.yf()
if(s.as)s.r.BS(s)
if(p)s.b5()},
dv(){var s,r,q=this,p=q.z
if(p!=null&&p.a!==0)for(p=new A.l7(p,p.nl()),s=A.n(p).c;p.q();){r=p.d;(r==null?s.a(r):r).be.u(0,q)}q.y=null
q.w=B.a07},
pF(){var s=this,r=s.f,q=r==null?null:r.a
if(q instanceof A.en){r=s.r.z
if(J.f(r.j(0,q),s))r.u(0,q)}s.z=s.f=null
s.w=B.Cq},
gcP(a){var s,r=this.ga9()
if(r instanceof A.F){s=r.k3
s.toString
return s}return null},
yI(a,b){var s=this.z;(s==null?this.z=A.cV(t.tx):s).C(0,a)
a.M6(this,b)
s=a.f
s.toString
return t.sg.a(s)},
a5(a){var s=this.y,r=s==null?null:s.j(0,A.aD(a))
if(r!=null)return a.a(this.yI(r,null))
this.Q=!0
return null},
jM(a){var s=this.y
return s==null?null:s.j(0,A.aD(a))},
yf(){var s=this.a
this.c=s==null?null:s.c},
xK(){var s=this.a
this.y=s==null?null:s.y},
JB(a){var s,r,q,p=this.a
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
for(;s=q==null,!s;){if(q instanceof A.fw){r=q.ok
r.toString
r=a.b(r)}else r=!1
if(r)break
q=q.a}t.Ci.a(q)
if(s)s=null
else{s=q.ok
s.toString}return a.h("0?").a(s)},
tg(a){var s=this.a
for(;s!=null;){if(s instanceof A.bC&&a.b(s.ga9()))return a.a(s.ga9())
s=s.a}return null},
Bn(a){var s=this.a
while(!0){if(!(s!=null&&a.$1(s)))break
s=s.a}},
b5(){this.h1()},
d4(a){var s=this.c
if(s!=null)s.d4(a)},
c0(){var s=this.f
s=s==null?null:s.c0()
return s==null?"<optimized out>#"+A.bM(this)+"(DEFUNCT)":s},
h1(){var s=this
if(s.w!==B.c9)return
if(s.as)return
s.as=!0
s.r.BS(s)},
ud(a){var s
if(this.w===B.c9)s=!this.as&&!a
else s=!0
if(s)return
this.hP()},
Lp(){return this.ud(!1)},
hP(){this.as=!1},
$iah:1}
A.Yn.prototype={
$1(a){a.b=this.a.b
a.f3()},
$S:8}
A.Yo.prototype={
$1(a){this.a.a=a},
$S:8}
A.Yp.prototype={
$1(a){a.xQ(this.a)
if(!(a instanceof A.bC))a.aU(this)},
$S:8}
A.Yk.prototype={
$1(a){a.Hm(this.a)},
$S:8}
A.Ym.prototype={
$1(a){a.on()},
$S:8}
A.Yl.prototype={
$1(a){a.rt(this.a)},
$S:8}
A.EL.prototype={
aG(a){var s=this.d,r=new A.Jv(s,A.aw())
r.aJ()
r.Rr(s)
return r}}
A.t5.prototype={
fv(a,b){this.Cx(a,b)
this.wd()},
wd(){this.Lp()},
hP(){var s,r,q,p,o,n,m=this,l=null
try{l=m.bd()
m.f.toString}catch(o){s=A.ae(o)
r=A.au(o)
n=A.ajk(A.ala(A.bo("building "+m.i(0)),s,r,new A.Vv(m)))
l=n}finally{m.v5()}try{m.ay=m.dV(m.ay,l,m.d)}catch(o){q=A.ae(o)
p=A.au(o)
n=A.ajk(A.ala(A.bo("building "+m.i(0)),q,p,new A.Vw(m)))
l=n
m.ay=m.dV(null,l,m.d)}},
aU(a){var s=this.ay
if(s!=null)a.$1(s)},
ji(a){this.ay=null
this.l6(a)}}
A.Vv.prototype={
$0(){var s=A.a([],t.F)
return s},
$S:16}
A.Vw.prototype={
$0(){var s=A.a([],t.F)
return s},
$S:16}
A.KP.prototype={
bd(){var s=this.f
s.toString
return t.yB.a(s).L(this)},
bf(a,b){this.q8(0,b)
this.ud(!0)}}
A.fw.prototype={
bd(){return this.ok.L(this)},
f3(){var s=this
if(A.aq_(s.b,s.f))s.ok.f3()
s.O3()},
wd(){this.ok.aC()
this.ok.b5()
this.NP()},
hP(){var s=this
if(s.p1){s.ok.b5()
s.p1=!1}s.NQ()},
bf(a,b){var s,r,q,p=this
p.q8(0,b)
s=p.ok
r=s.a
r.toString
q=p.f
q.toString
s.a=t.aw.a(q)
s.aX(r)
p.ud(!0)},
ce(){this.O1()
this.ok.ce()
this.h1()},
dv(){this.ok.dv()
this.Cu()},
pF(){var s=this
s.v6()
s.ok.m()
s.ok=s.ok.c=null},
yI(a,b){return this.Cv(a,b)},
b5(){this.O2()
this.p1=!0}}
A.vX.prototype={
bd(){var s=this.f
s.toString
return t.im.a(s).b},
bf(a,b){var s=this,r=s.f
r.toString
t.im.a(r)
s.q8(0,b)
s.Bk(r)
s.ud(!0)},
Bk(a){this.mw(a)}}
A.mz.prototype={
Dz(a){this.aU(new A.a3a(a))},
mw(a){var s=this.f
s.toString
this.Dz(this.$ti.h("dy<1>").a(s))}}
A.a3a.prototype={
$1(a){if(a instanceof A.bC)this.a.o0(a.ga9())
else a.aU(this)},
$S:8}
A.fd.prototype={
xK(){var s=this,r=s.a,q=r==null?null:r.y
if(q==null)q=B.TH
r=s.f
r.toString
s.y=q.a5S(0,A.A(r),s)},
BX(a,b){this.be.l(0,a,b)},
M6(a,b){this.BX(a,null)},
KV(a,b){b.b5()},
Bk(a){var s=this.f
s.toString
if(t.sg.a(s).c1(a))this.P0(a)},
mw(a){var s,r,q
for(s=this.be,s=new A.yl(s,s.vQ()),r=A.n(s).c;s.q();){q=s.d
this.KV(a,q==null?r.a(q):q)}}}
A.bC.prototype={
ga9(){var s=this.ay
s.toString
return s},
TP(){var s=this.a
while(!0){if(!(s!=null&&!(s instanceof A.bC)))break
s=s.a}return t.bI.a(s)},
TO(){var s,r={},q=r.a=this.a
r.b=null
while(!0){if(!(q!=null&&!(q instanceof A.bC)))break
if(q instanceof A.mz){r.b=q
break}s=q.a
r.a=s
q=s}return r.b},
fv(a,b){var s,r=this
r.Cx(a,b)
s=r.f
s.toString
r.ay=t.xL.a(s).aG(r)
r.rt(b)
r.v5()},
bf(a,b){this.q8(0,b)
this.FW()},
hP(){this.FW()},
FW(){var s=this,r=s.f
r.toString
t.xL.a(r).aN(s,s.ga9())
s.v5()},
a6Z(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=new A.a4q(a4),g=new A.a4r(i),f=a3.length,e=f-1,d=a2.length,c=d-1,b=d===f?a2:A.aR(f,$.alJ(),!1,t.h),a=i,a0=0,a1=0
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
f=j.dV(s,r,g.$2(a0,a))
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
s.on()
f=j.r.b
if(s.w===B.c9){s.dv()
s.aU(A.ahS())}f.b.C(0,s)}}++a1}o=!0}else n=i
for(;a0<=e;a=f){r=a3[a0]
if(o){m=r.a
if(m!=null){s=n.j(0,m)
if(s!=null){f=s.f
f.toString
q=f instanceof A.bR?A.cR(f):i
d=A.aD(q==null?A.aT(f):q)
q=r instanceof A.bR?A.cR(r):i
if(d===A.aD(q==null?A.aT(r):q)&&J.f(f.a,m))n.u(0,m)
else s=i}}else s=i}else s=i
f=j.dV(s,r,g.$2(a0,a))
f.toString
b[a0]=f;++a0}e=a3.length-1
while(!0){if(!(a1<=c&&a0<=e))break
f=j.dV(a2[a1],a3[a0],g.$2(a0,a))
f.toString
b[a0]=f;++a0;++a1
a=f}if(o&&n.a!==0)for(f=n.gaT(n),f=new A.dV(J.at(f.a),f.b),d=A.n(f).z[1];f.q();){l=f.a
if(l==null)l=d.a(l)
if(!a4.B(0,l)){l.a=null
l.on()
k=j.r.b
if(l.w===B.c9){l.dv()
l.aU(A.ahS())}k.b.C(0,l)}}return b},
dv(){this.Cu()},
pF(){var s=this,r=s.f
r.toString
t.xL.a(r)
s.v6()
r.ot(s.ga9())
s.ay.m()
s.ay=null},
xQ(a){var s,r=this,q=r.d
r.O0(a)
s=r.CW
s.toString
s.js(r.ga9(),q,r.d)},
rt(a){var s,r,q=this
q.d=a
s=q.CW=q.TP()
if(s!=null)s.jn(q.ga9(),a)
r=q.TO()
if(r!=null){s=r.f
s.toString
t.yL.a(s).o0(q.ga9())}},
on(){var s=this,r=s.CW
if(r!=null){r.jE(s.ga9(),s.d)
s.CW=null}s.d=null},
jn(a,b){},
js(a,b,c){},
jE(a,b){}}
A.a4q.prototype={
$1(a){var s=this.a.B(0,a)
return s?null:a},
$S:300}
A.a4r.prototype={
$2(a,b){return new A.oL(b,a,t.wx)},
$S:301}
A.wk.prototype={
fv(a,b){this.ve(a,b)}}
A.FT.prototype={
ji(a){this.l6(a)},
jn(a,b){},
js(a,b,c){},
jE(a,b){}}
A.wP.prototype={
aU(a){var s=this.p1
if(s!=null)a.$1(s)},
ji(a){this.p1=null
this.l6(a)},
fv(a,b){var s,r,q=this
q.ve(a,b)
s=q.p1
r=q.f
r.toString
q.p1=q.dV(s,t.Dp.a(r).c,null)},
bf(a,b){var s,r,q=this
q.n7(0,b)
s=q.p1
r=q.f
r.toString
q.p1=q.dV(s,t.Dp.a(r).c,null)},
jn(a,b){var s=this.ay
s.toString
t.fB.a(s).saW(a)},
js(a,b,c){},
jE(a,b){var s=this.ay
s.toString
t.fB.a(s).saW(null)}}
A.eQ.prototype={
ga9(){return t.gz.a(A.bC.prototype.ga9.call(this))},
gIi(a){var s=this.p1
s===$&&A.b()
return new A.aH(s,new A.a2n(this),A.aj(s).h("aH<1>"))},
jn(a,b){var s=this.ga9(),r=b.a
s.zC(0,a,r==null?null:r.ga9())},
js(a,b,c){var s=this.ga9(),r=c.a
s.tR(a,r==null?null:r.ga9())},
jE(a,b){this.ga9().u(0,a)},
aU(a){var s,r,q,p,o=this.p1
o===$&&A.b()
s=o.length
r=this.p2
q=0
for(;q<s;++q){p=o[q]
if(!r.B(0,p))a.$1(p)}},
ji(a){this.p2.C(0,a)
this.l6(a)},
tA(a,b){return this.Cw(a,b)},
fv(a,b){var s,r,q,p,o,n,m,l=this
l.ve(a,b)
s=l.f
s.toString
s=t.tk.a(s).c
r=s.length
q=A.aR(r,$.alJ(),!1,t.h)
for(p=t.wx,o=null,n=0;n<r;++n,o=m){m=l.Cw(s[n],new A.oL(o,n,p))
q[n]=m}l.p1=q},
bf(a,b){var s,r,q,p=this
p.n7(0,b)
s=p.f
s.toString
t.tk.a(s)
r=p.p1
r===$&&A.b()
q=p.p2
p.p1=p.a6Z(r,s.c,q)
q.a_(0)}}
A.a2n.prototype={
$1(a){return!this.a.p2.B(0,a)},
$S:49}
A.oL.prototype={
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return b instanceof A.oL&&this.b===b.b&&J.f(this.a,b.a)},
gt(a){return A.S(this.b,this.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.OP.prototype={}
A.OS.prototype={
bU(a){return A.K(A.c2(null))}}
A.QU.prototype={}
A.m7.prototype={}
A.cv.prototype={
Iy(){return this.a.$0()},
Kb(a){return this.b.$1(a)}}
A.Fe.prototype={
L(a){var s=this,r=A.y(t.n,t.ob),q=A.dw(a),p=q==null?null:q.ay
if(s.d==null)if(s.e==null)if(s.f==null)if(s.r==null)q=!1
else q=!0
else q=!0
else q=!0
else q=!0
if(q)r.l(0,B.Ch,new A.cv(new A.ZR(s),new A.ZS(s,p),t.g0))
if(s.ay==null)q=!1
else q=!0
if(q)r.l(0,B.ZW,new A.cv(new A.ZT(s),new A.ZX(s,p),t.da))
if(s.cy==null)q=!1
else q=!0
if(q)r.l(0,B.Cf,new A.cv(new A.ZY(s),new A.ZZ(s,p),t.on))
if(s.rx!=null||s.ry!=null||s.to!=null||!1)r.l(0,B.lV,new A.cv(new A.a__(s),new A.a_0(s,p),t.n_))
if(s.x2!=null||s.y1!=null||s.y2!=null||s.bH!=null)r.l(0,B.lU,new A.cv(new A.a_1(s),new A.a_2(s,p),t.ta))
if(s.bp!=null||s.ai!=null||s.ae!=null||!1)r.l(0,B.lT,new A.cv(new A.a_3(s),new A.ZU(s,p),t.uX))
q=!1
if(q)r.l(0,B.ZZ,new A.cv(new A.ZV(s),new A.ZW(s,p),t.p1))
return new A.kJ(s.c,r,s.av,s.b0,null,null)}}
A.ZR.prototype={
$0(){return A.azC(this.a,null)},
$S:302}
A.ZS.prototype={
$1(a){var s=this.a
a.y1=s.d
a.y2=s.e
a.bH=s.f
a.bp=s.r
a.b_=a.aY=a.ap=a.ao=a.ae=a.ai=a.be=null
a.b=this.b},
$S:303}
A.ZT.prototype={
$0(){var s=t.S
return new A.fT(A.y(s,t.Aj),this.a,null,A.y(s,t.V))},
$S:304}
A.ZX.prototype={
$1(a){a.e=null
a.f=this.a.ay
a.r=null
a.b=this.b},
$S:305}
A.ZY.prototype={
$0(){return A.axi(this.a,null,null)},
$S:306}
A.ZZ.prototype={
$1(a){a.k3=a.k2=null
a.k4=this.a.cy
a.be=a.bp=a.bH=a.y2=a.y1=a.xr=a.x2=a.x1=a.to=a.ry=a.rx=a.RG=a.R8=a.p4=a.p3=a.p2=a.p1=a.ok=null
a.b=this.b},
$S:307}
A.a__.prototype={
$0(){return A.ap5(this.a,null)},
$S:113}
A.a_0.prototype={
$1(a){var s
a.as=null
s=this.a
a.at=s.rx
a.ax=s.ry
a.ay=s.to
a.ch=null
a.Q=s.b6
a.b=this.b},
$S:114}
A.a_1.prototype={
$0(){return A.ajy(this.a,null)},
$S:115}
A.a_2.prototype={
$1(a){var s=this.a
a.as=s.x2
a.at=null
a.ax=s.y1
a.ay=s.y2
a.ch=s.bH
a.Q=s.b6
a.b=this.b},
$S:116}
A.a_3.prototype={
$0(){var s=t.S,r=A.cV(s)
return new A.ha(B.bc,A.alo(),B.c8,A.y(s,t.ki),A.b3(s),A.y(s,t.o),r,this.a,null,A.y(s,t.V))},
$S:312}
A.ZU.prototype={
$1(a){var s=this.a
a.as=s.bp
a.at=null
a.ax=s.ai
a.ay=s.ae
a.ch=null
a.Q=s.b6
a.b=this.b},
$S:313}
A.ZV.prototype={
$0(){var s=t.S,r=A.cV(s)
return new A.fX(B.m2,A.y(s,t.o),r,this.a,null,A.y(s,t.V))},
$S:314}
A.ZW.prototype={
$1(a){a.ax=a.as=a.at=a.Q=null
a.b=this.b},
$S:315}
A.kJ.prototype={
an(){return new A.pf(B.SX,B.m)}}
A.pf.prototype={
aC(){var s,r,q=this
q.aV()
s=q.a
r=s.r
q.e=r==null?new A.MY(q):r
q.xA(s.d)},
aX(a){var s,r=this
r.bo(a)
if(!(a.r==null&&r.a.r==null)){s=r.a.r
r.e=s==null?new A.MY(r):s}r.xA(r.a.d)},
a6k(a){if(this.a.f)return
t.qS.a(this.c.ga9()).sa73(a)},
m(){for(var s=this.d,s=J.at(s.gaT(s));s.q();)s.gF(s).m()
this.d=null
this.aQ()},
xA(a){var s,r,q,p,o=this,n=o.d
n.toString
o.d=A.y(t.n,t.id)
for(s=J.at(a.gbq(a));s.q();){r=s.gF(s)
q=o.d
q.toString
p=n.j(0,r)
q.l(0,r,p==null?a.j(0,r).Iy():p)
q=a.j(0,r)
q.toString
r=o.d.j(0,r)
r.toString
q.Kb(r)}for(s=J.at(n.gbq(n));s.q();){r=s.gF(s)
if(!o.d.P(0,r))n.j(0,r).m()}},
U8(a){var s,r
for(s=this.d,s=J.at(s.gaT(s));s.q();){r=s.gF(s)
r.d.l(0,a.gbW(),a.gci(a))
if(r.ft(a))r.hs(a)
else r.oS(a)}},
VI(a){var s,r
for(s=this.d,s=J.at(s.gaT(s));s.q();){r=s.gF(s)
r.d.l(0,a.gbW(),a.gci(a))
if(r.a4u(a))r.xZ(a)}},
a_n(a){this.e.ye(a)},
L(a){var s,r,q,p=this,o=null,n=p.a,m=n.e,l=m==null
if(l)s=n.c==null?B.d5:B.bR
else s=m
r=n.c
q=A.FZ(s,r,o,p.gU7(),p.gVH(),o,o)
if(!n.f){if(l)n=r==null?B.d5:B.bR
else n=m
q=new A.NL(n,p.ga_m(),q,o)}return q}}
A.NL.prototype={
aG(a){var s=new A.jd(B.bR,null,A.aw())
s.aJ()
s.saW(null)
s.v=this.e
this.f.$1(s)
return s},
aN(a,b){b.v=this.e
this.f.$1(b)}}
A.a6r.prototype={
i(a){return"SemanticsGestureDelegate()"}}
A.MY.prototype={
ye(a){var s=this,r=s.a.d
r.toString
a.sjx(s.Ux(r))
a.skK(s.Uo(r))
a.sa5h(s.Um(r))
a.sa5r(s.Uy(r))},
Ux(a){var s=t.f3.a(a.j(0,B.Ch))
if(s==null)return null
return new A.abQ(s)},
Uo(a){var s=t.yA.a(a.j(0,B.Cf))
if(s==null)return null
return new A.abP(s)},
Um(a){var s=t.oq.a(a.j(0,B.lU)),r=t.rR.a(a.j(0,B.lT)),q=s==null?null:new A.abM(s),p=r==null?null:new A.abN(r)
if(q==null&&p==null)return null
return new A.abO(q,p)},
Uy(a){var s=t.iC.a(a.j(0,B.lV)),r=t.rR.a(a.j(0,B.lT)),q=s==null?null:new A.abR(s),p=r==null?null:new A.abS(r)
if(q==null&&p==null)return null
return new A.abT(q,p)}}
A.abQ.prototype={
$0(){var s=this.a,r=s.y1
if(r!=null)r.$1(new A.pY(B.j,B.j))
r=s.y2
if(r!=null)r.$1(new A.pZ())
s=s.bH
if(s!=null)s.$0()},
$S:0}
A.abP.prototype={
$0(){var s=this.a,r=s.ok
if(r!=null)r.$1(B.Rk)
r=s.k4
if(r!=null)r.$0()
s=s.p3
if(s!=null)s.$1(B.Ri)},
$S:0}
A.abM.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.iQ(B.j))
r=s.at
if(r!=null)r.$1(new A.hI(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fU(B.c7,0))},
$S:21}
A.abN.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.iQ(B.j))
r=s.at
if(r!=null)r.$1(new A.hI(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fU(B.c7,null))},
$S:21}
A.abO.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(a)
s=this.b
if(s!=null)s.$1(a)},
$S:21}
A.abR.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.iQ(B.j))
r=s.at
if(r!=null)r.$1(new A.hI(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fU(B.c7,0))},
$S:21}
A.abS.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.iQ(B.j))
r=s.at
if(r!=null)r.$1(new A.hI(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fU(B.c7,null))},
$S:21}
A.abT.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(a)
s=this.b
if(s!=null)s.$1(a)},
$S:21}
A.me.prototype={
E(){return"HeroFlightDirection."+this.b}}
A.mc.prototype={
an(){return new A.qC(new A.bB(null,t.C),B.m)}}
A.a_z.prototype={
$2(a,b){var s=a.f
s.toString
t.tV.a(s)
s=a.ok
s.toString
t.BJ.a(s)
if(!this.b||!1)this.a.l(0,b,s)
else s.Jh()},
$S:318}
A.a_A.prototype={
$1(a){var s,r,q=this,p=a.f
p.toString
if(p instanceof A.mc){t.jw.a(a)
s=p.c
if(A.ajP(a)===q.a)q.b.$2(a,s)
else{r=A.a2c(a,t.X)
if(r!=null)p=r.gkE()
else p=!1
if(p)q.b.$2(a,s)}}a.aU(q)},
$S:8}
A.qC.prototype={
uY(a){var s,r=this
r.f=a
s=r.c.ga9()
s.toString
r.aw(new A.acU(r,t.x.a(s)))},
uX(){return this.uY(!1)},
m_(a){var s=this
if(a||s.e==null)return
s.e=null
if(s.c!=null)s.aw(new A.acT())},
Jh(){return this.m_(!1)},
L(a){var s,r=this,q=null,p=r.e,o=p==null,n=!o
if(n)r.a.toString
if(n&&!r.f){o=p.a
return A.fr(q,p.b,o)}s=o?q:p.a
p=o?q:p.b
return A.fr(new A.vz(n,new A.q5(o,new A.kr(r.a.e,r.d),q),q),p,s)}}
A.acU.prototype={
$0(){var s=this.b.k3
s.toString
this.a.e=s},
$S:0}
A.acT.prototype={
$0(){},
$S:0}
A.acQ.prototype={
gbO(a){var s,r=this
if(r.a===B.bP){s=r.e.fy
s.toString}else{s=r.d.fy
s.toString}return A.el(B.bq,s,r.z?null:new A.u1(B.bq))},
oh(a,b){var s
this.r.a.toString
s=this.w.$2(a,b)
return s==null?new A.w3(a,b):s},
gJN(){var s,r,q=this,p=q.Q
if(p===$){s=q.f.c
s.toString
r=A.apf(s,$.ai.ah$.z.j(0,q.d.k2))
q.Q!==$&&A.bi()
q.Q=r
p=r}return p},
gum(){var s,r,q=this,p=q.as
if(p===$){s=q.r.c
s.toString
r=A.apf(s,$.ai.ah$.z.j(0,q.e.k2))
q.as!==$&&A.bi()
q.as=r
p=r}return p},
gkG(){var s,r,q=this,p=q.at
if(p===$){s=q.gum()
if(s.gKr(s))if(!q.z){s=q.gJN()
s=s.gKr(s)
r=s}else r=!0
else r=!1
q.at!==$&&A.bi()
p=q.at=r}return p},
i(a){var s,r,q=this,p=q.a.i(0),o=q.f,n=o.a.c.i(0),m=q.d.b.i(0),l=q.e.b.i(0)
o=o.i(0)
s=q.r.i(0)
r=q.gkG()?"":", INVALID"
return"_HeroFlightManifest("+p+" tag: "+n+" from route: "+m+" to route: "+l+" with hero: "+o+" to "+s+")"+r}}
A.jw.prototype={
Sf(a){var s,r,q,p,o=this,n=o.c
if(n==null){n=o.f
n===$&&A.b()
s=n.gbO(n)
r=o.f
q=r.f.c
q.toString
p=r.r.c
p.toString
p=o.c=n.x.$5(a,s,r.a,q,p)
n=p}s=o.e
s===$&&A.b()
return A.lA(s,new A.acR(o),n)},
FV(a){var s,r=this,q=a===B.Z
if(q||a===B.K){s=r.e
s===$&&A.b()
s.saL(0,null)
r.r.mE(0)
r.r=null
s=r.f
s===$&&A.b()
s.f.m_(q)
r.f.r.m_(a===B.K)
r.a.$1(r)
r.e.G(0,r.gL4())}},
EU(a){var s=this,r=s.f
r===$&&A.b()
r=r.d.a
if((r==null?null:r.CW.a)!==!0){s.FV(a)
return}if(s.x)return
r.toString
s.x=!0
r.CW.Y(0,new A.acS(s,r))},
a5q(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(!h.w){s=h.f
s===$&&A.b()
s=s.r.c!=null}else s=!1
if(s){s=h.f
s===$&&A.b()
r=t.av.a(s.r.c.ga9())}else r=null
if(r!=null&&r.b!=null&&r.k3!=null){s=h.f
s===$&&A.b()
s=$.ai.ah$.z.j(0,s.e.k2)
s=s==null?null:s.ga9()
q=A.cw(r.bA(0,t.av.a(s)),B.j)}else q=null
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
h.b=i.oh(p.a,new A.C(k,j,k+(n-m),j+(l-o)))}}else{p=h.d
if(p.gb1(p)===B.Z){p=h.e
p===$&&A.b()
o=$.asS()
n=p.gn(p)
m=A.n(o).h("nv<aF.T>")
h.d=new A.aZ(t.m.a(p),new A.nv(new A.iO(new A.h2(n,1,B.aV)),o,m),m.h("aZ<aF.T>"))}}if(s)s=!(isFinite(q.a)&&isFinite(q.b))
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
A.acR.prototype={
$2(a,b){var s,r=null,q=this.a,p=q.b
p===$&&A.b()
s=q.e
s===$&&A.b()
s=p.aj(0,s.gn(s))
s.toString
p=q.f
p===$&&A.b()
p=p.c
return A.J2(p.b-s.d,new A.hO(!0,r,A.ajn(b,q.d),r),r,r,s.a,p.a-s.c,s.b,r)},
$S:319}
A.acS.prototype={
$0(){var s,r=this.a
r.x=!1
this.b.CW.G(0,this)
s=r.e
s===$&&A.b()
r.FV(s.gb1(s))},
$S:0}
A.ud.prototype={
rV(a,b){this.qL(b,a,B.bP,!1)},
rU(a,b){var s=$.hu()
A.ov(this)
if(!s.a.get(this).CW.a)this.qL(a,b,B.bQ,!1)},
rW(a,b){var s=a.gkE()
if(s)this.qL(b,a,B.bP,!1)},
IW(a,b){this.qL(a,b,B.bQ,!0)},
os(){var s,r,q,p=$.hu()
A.ov(this)
if(p.a.get(this).CW.a)return
p=this.b
p=p.gaT(p)
s=A.n(p).h("aH<o.E>")
r=A.aA(new A.aH(p,new A.a_y(),s),!1,s.h("o.E"))
for(p=r.length,q=0;q<p;++q)r[q].EU(B.K)},
qL(a,b,c,d){var s
if(b!=a&&b instanceof A.i_&&a instanceof A.i_){switch(c.a){case 1:s=a.fy
if(s.gn(s)===0)return
break
case 0:s=b.fy
if(s.gn(s)===1)return
break}if(d)if(c===B.bQ){b.gpa()
s=!0}else s=!1
else s=!1
if(s)this.GR(a,b,c,d)
else{s=b.fy
b.stT(s.gn(s)===0)
$.ai.cy$.push(new A.a_x(this,a,b,c,d))}}},
GR(b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null
b4.stT(!1)
s=$.hu()
A.ov(b1)
s=s.a.get(b1)
r=s==null
if(r)q=b2
else{p=s.d
p===$&&A.b()
q=p.gbu()}if(r||q==null)return
o=s.c.ga9()
if(!(o instanceof A.F))return
n=$.ai.ah$.z.j(0,b3.k2)
m=n!=null?A.ane(n,b6,s):B.zo
l=$.ai.ah$.z.j(0,b4.k2)
k=l!=null?A.ane(l,b6,s):B.zo
for(s=m.geo(m),s=s.ga3(s),r=b1.gT8(),p=b1.a,j=b1.b,i=t.Cf,h=b1.gVf(),g=t.A,f=t.Q,e=t.b,d=t.tY,c=t.a7,b=t.m,a=c.h("aZ<aF.T>"),a0=t.sD;s.q();){a1=s.gF(s)
a2=a1.gcK(a1)
a3=a1.gn(a1)
a4=k.j(0,a2)
a5=j.j(0,a2)
if(a4==null)a6=b2
else{a1=o.k3
a1.toString
a4.a.toString
a3.a.toString
a6=new A.acQ(b5,q,a1,b3,b4,a3,a4,p,r,b6,a5!=null)}if(a6!=null&&a6.gkG()){k.u(0,a2)
if(a5!=null){a1=a5.f
a1===$&&A.b()
a7=a1.a
if(a7===B.bP&&a6.a===B.bQ){a1=a5.e
a1===$&&A.b()
a1.saL(0,new A.eV(a6.gbO(a6),new A.bk(A.a([],g),f),0))
a1=a5.b
a1===$&&A.b()
a5.b=new A.wj(a1,a1.b,a1.a,a0)}else{a7=a7===B.bQ&&a6.a===B.bP
a8=a5.e
if(a7){a8===$&&A.b()
a1=a6.gbO(a6)
a7=a5.f
a7=a7.gbO(a7)
a7=a7.gn(a7)
a8.saL(0,new A.aZ(b.a(a1),new A.aL(a7,1,c),a))
a1=a5.f
a7=a1.f
a8=a6.r
if(a7!==a8){a7.m_(!0)
a8.uX()
a1=a5.f
a7=a5.b
a7===$&&A.b()
a5.b=a1.oh(a7.b,a6.gum())}else{a7=a5.b
a7===$&&A.b()
a5.b=a1.oh(a7.b,a7.a)}}else{a7=a5.b
a7===$&&A.b()
a8===$&&A.b()
a5.b=a1.oh(a7.aj(0,a8.gn(a8)),a6.gum())
a5.c=null
a1=a6.a
a7=a5.e
if(a1===B.bQ)a7.saL(0,new A.eV(a6.gbO(a6),new A.bk(A.a([],g),f),0))
else a7.saL(0,a6.gbO(a6))
a5.f.f.m_(!0)
a5.f.r.m_(!0)
a6.f.uY(a1===B.bP)
a6.r.uX()
a1=a5.r.f.gbu()
if(a1!=null)a1.Fv()}}a5.f=a6}else{a1=new A.jw(h,B.cX)
a7=A.a([],g)
a8=new A.bk(a7,f)
a9=new A.vW(a8,new A.bk(A.a([],e),d),0)
a9.a=B.K
a9.b=0
a9.bx()
a8.b=!0
a7.push(a1.gUG())
a1.e=a9
a1.f=a6
switch(a6.a.a){case 1:a9.saL(0,new A.eV(a6.gbO(a6),new A.bk(A.a([],g),f),0))
b0=!1
break
case 0:a9.saL(0,a6.gbO(a6))
b0=!0
break
default:b0=b2}a7=a1.f
a1.b=a7.oh(a7.gJN(),a1.f.gum())
a1.f.f.uY(b0)
a1.f.r.uX()
a7=a1.f
a8=new A.nm(!1,$.by())
a8.b_$=!0
a8=new A.fl(a1.gSe(),!1,a8,new A.bB(b2,i))
a1.r=a8
a7.b.zB(0,a8)
a8=a1.e
a8.bx()
a8=a8.cg$
a8.b=!0
a8.a.push(a1.gL4())
j.l(0,a2,a1)}}else if(a5!=null)a5.w=!0}for(s=J.at(k.gaT(k));s.q();)s.gF(s).Jh()},
Vg(a){var s=a.f
s===$&&A.b()
this.b.u(0,s.f.a.c)},
T9(a,b,c,d,e){var s,r,q=e.f
q.toString
t.tV.a(q)
s=A.dw(e)
r=A.dw(d)
if(s==null||r==null)return q.e
return A.lA(b,new A.a_w(s,c,r.f,s.f,b,q),null)}}
A.a_y.prototype={
$1(a){var s=a.f
s===$&&A.b()
if(s.y)if(s.a===B.bQ){s=a.e
s===$&&A.b()
s=s.gb1(s)===B.K}else s=!1
else s=!1
return s},
$S:322}
A.a_x.prototype={
$1(a){var s=this
s.a.GR(s.b,s.c,s.d,s.e)},
$S:2}
A.a_w.prototype={
$2(a,b){var s=this,r=s.c,q=s.d,p=s.e
r=s.b===B.bP?new A.tG(r,q).aj(0,p.gn(p)):new A.tG(q,r).aj(0,p.gn(p))
return new A.ff(s.a.IE(r),s.f.e,null)},
$S:323}
A.oD.prototype={
L(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.a5(t.I)
f.toString
s=f.w
r=A.ani(a)
q=r.a
p=r.b
o=r.c
n=r.d
m=r.e
f=this.c
if(f==null)return A.dK(g,A.fr(g,q,q),!1,g,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)
l=r.r
k=l==null?g:A.H(l,0,1)
if(k==null)k=1
l=r.f
l.toString
if(k!==1)j=A.b2(B.d.bb(255*((l.gn(l)>>>24&255)/255*k)),l.gn(l)>>>16&255,l.gn(l)>>>8&255,l.gn(l)&255)
else j=l
l=A.dJ(f.a)
i=A.a([],t.BV)
if(p!=null)i.push(new A.kd("FILL",p))
if(o!=null)i.push(new A.kd("wght",o))
if(n!=null)i.push(new A.kd("GRAD",n))
if(m!=null)i.push(new A.kd("opsz",m))
h=A.aom(g,g,B.Wg,g,g,!0,g,A.a9W(g,A.bY(g,g,j,g,g,g,g,g,"MaterialIcons",g,g,q,g,i,g,g,g,!1,g,g,g,g,g,r.w,g,g),l),B.bI,s,g,1,B.aQ)
if(f.d)switch(s.a){case 0:f=new A.bf(new Float64Array(16))
f.dg()
f.hZ(0,-1,1,1)
h=A.aoU(B.Y,h,f,!1)
break
case 1:break}return A.dK(g,new A.tO(!0,A.fr(A.rU(h,g,g),q,q),g),!1,g,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)}}
A.mi.prototype={
k(a,b){var s
if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
if(b instanceof A.mi)if(b.a===this.a)s=b.d===this.d
else s=!1
else s=!1
return s},
gt(a){return A.S(this.a,"MaterialIcons",null,this.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"IconData(U+"+B.b.jz(B.f.iH(this.a,16).toUpperCase(),5,"0")+")"}}
A.mj.prototype={
c1(a){return!this.w.k(0,a.w)}}
A.a0e.prototype={
$1(a){return A.ajB(this.c,A.anh(a).c7(this.b),this.a)},
$S:324}
A.cC.prototype={
og(a,b,c,d,e,f,g,h){var s,r=this,q=g==null?r.a:g,p=b==null?r.b:b,o=h==null?r.c:h,n=c==null?r.d:c,m=e==null?r.e:e,l=a==null?r.f:a
if(d==null){s=r.r
s=s==null?null:A.H(s,0,1)}else s=d
return new A.cC(q,p,o,n,m,l,s,f==null?r.w:f)},
hz(a){return this.og(a,null,null,null,null,null,null,null)},
c7(a){var s=a.r
s=s==null?null:A.H(s,0,1)
return this.og(a.f,a.b,a.d,s,a.e,a.w,a.a,a.c)},
V(a){return this},
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
an(){return new A.ym(B.m)}}
A.ym.prototype={
aC(){var s=this
s.aV()
$.ai.b3$.push(s)
s.z=new A.E1(s)},
m(){var s,r=this
B.c.u($.ai.b3$,r)
r.ZK()
s=r.at
if(s!=null)s.m()
s=r.z
s===$&&A.b()
s.a=null
r.xh(null)
r.aQ()},
b5(){var s,r=this
r.a_e()
r.xl()
s=r.c
s.toString
if(A.aoR(s))r.WP()
else r.GU(!0)
r.cE()},
aX(a){var s,r,q=this
q.bo(a)
if(q.r&&q.a.e==null!==(a.e==null)){s=q.nr()
r=q.d
r.toString
r.Y(0,q.EI(!0))
q.d.G(0,s)}if(!q.a.c.k(0,a.c))q.xl()},
f3(){this.xl()
this.PT()},
a_e(){var s=this.c
s.toString
s=A.dw(s)
s=s==null?null:s.z
if(s==null){s=$.a6g.z7$
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
o.a_p(new A.wt(n,r,t.rZ).V(A.alh(q,s)))},
EI(a){var s,r=this,q=r.ax
if(q==null||a){r.as=r.Q=null
q=r.a
s=q.e==null?null:r.gVk()
q=q.f!=null||!1?new A.acY(r):null
q=r.ax=new A.dv(r.gVm(),s,q)}q.toString
return q},
nr(){return this.EI(!1)},
Vn(a,b){this.aw(new A.ad_(this,a,b))},
Vl(a){this.aw(new A.acZ(this,a))},
xh(a){var s=this.e
$.bP.cy$.push(new A.ad0(s))
this.e=a},
a_p(a){var s,r,q=this,p=q.d
if(p==null)s=null
else{s=p.a
if(s==null)s=p}r=a.a
if(s===(r==null?a:r))return
if(q.r){p.toString
p.G(0,q.nr())}q.a.toString
q.aw(new A.ad1(q))
q.aw(new A.ad2(q))
q.d=a
if(q.r)a.Y(0,q.nr())},
WP(){var s,r=this
if(r.r)return
s=r.d
s.toString
s.Y(0,r.nr())
s=r.at
if(s!=null)s.m()
r.at=null
r.r=!0},
GU(a){var s,r=this
if(!r.r)return
if(a)if(r.at==null){s=r.d
s=(s==null?null:s.a)!=null}else s=!1
else s=!1
if(s)r.at=r.d.a.mr()
s=r.d
s.toString
s.G(0,r.nr())
r.r=!1},
ZK(){return this.GU(!1)},
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
h=new A.Jf(r,q,o,n,e,s,f,p.z,m,l,k,j,f,!1,i,!1,f)
h=A.dK(f,h,!1,f,!1,f,f,f,!0,"",f,f,f,f,f,f,f,f,f,f,f)
e=p.d
if(e!=null)h=e.$4(a,h,g.x,g.y)
e=g.a.e
return e!=null?e.$3(a,h,g.f):h}}
A.acY.prototype={
$2(a,b){var s=this.a
s.aw(new A.acX(s,a,b))},
$S:325}
A.acX.prototype={
$0(){var s=this.a
s.Q=this.b
s.as=this.c},
$S:0}
A.ad_.prototype={
$0(){var s,r=this.a
r.xh(this.b)
r.as=r.Q=r.f=null
s=r.x
r.x=s==null?0:s+1
r.y=B.nP.MT(r.y,this.c)},
$S:0}
A.acZ.prototype={
$0(){var s=this.a
s.f=this.b
s.as=s.Q=null},
$S:0}
A.ad0.prototype={
$1(a){var s=this.a
if(s!=null)s.a.m()
return null},
$S:2}
A.ad1.prototype={
$0(){this.a.xh(null)},
$S:0}
A.ad2.prototype={
$0(){var s=this.a
s.x=s.f=null
s.y=!1},
$S:0}
A.Sd.prototype={}
A.DO.prototype={
dQ(a){var s=A.VR(this.a,this.b,a)
s.toString
return s}}
A.tG.prototype={
dQ(a){var s=A.aji(this.a,this.b,a)
s.toString
return s}}
A.lH.prototype={
dQ(a){return A.o2(this.a,this.b,a)}}
A.ng.prototype={
dQ(a){var s=A.ba(this.a,this.b,a)
s.toString
return s}}
A.FB.prototype={}
A.oJ.prototype={
gjZ(){var s,r,q=this,p=q.d
if(p===$){s=q.a.d
r=A.e2(null,s,null,null,q)
q.d!==$&&A.bi()
q.d=r
p=r}return p},
gfG(){var s,r=this,q=r.e
if(q===$){s=r.gjZ()
q=r.e=A.el(r.a.c,s,null)}return q},
aC(){var s,r=this
r.aV()
s=r.gjZ()
s.bx()
s=s.c5$
s.b=!0
s.a.push(new A.a0E(r))
r.E6()},
aX(a){var s,r=this
r.bo(a)
if(r.a.c!==a.c){r.gfG().m()
s=r.gjZ()
r.e=A.el(r.a.c,s,null)}r.gjZ().e=r.a.d
if(r.E6()){r.oO(new A.a0D(r))
s=r.gjZ()
s.sn(0,0)
s.cV(0)}},
m(){this.gfG().m()
this.gjZ().m()
this.Q2()},
a_s(a,b){var s
if(a==null)return
s=this.gfG()
a.syj(a.aj(0,s.gn(s)))
a.saR(0,b)},
E6(){var s={}
s.a=!1
this.oO(new A.a0C(s,this))
return s.a}}
A.a0E.prototype={
$1(a){switch(a.a){case 3:this.a.a.toString
break
case 0:case 1:case 2:break}},
$S:4}
A.a0D.prototype={
$3(a,b,c){this.a.a_s(a,b)
return a},
$S:117}
A.a0C.prototype={
$3(a,b,c){var s
if(b!=null){if(a==null)a=c.$1(b)
s=a.b
if(!J.f(b,s==null?a.a:s))this.a.a=!0
else if(a.b==null)a.saR(0,a.a)}else a=null
return a},
$S:117}
A.nU.prototype={
aC(){this.Of()
var s=this.gjZ()
s.bx()
s=s.cg$
s.b=!0
s.a.push(this.gUE())},
UF(){this.aw(new A.TG())}}
A.TG.prototype={
$0(){},
$S:0}
A.rp.prototype={
an(){return new A.LU(null,null,B.m)}}
A.LU.prototype={
oO(a){this.CW=t.uh.a(a.$3(this.CW,this.a.w,new A.aaN()))},
L(a){var s,r=this.CW
r.toString
s=this.gfG()
s=r.aj(0,s.gn(s))
return A.tp(this.a.r,null,B.cN,!0,s,null,null,B.aQ)}}
A.aaN.prototype={
$1(a){return new A.ng(t.F1.a(a),null)},
$S:327}
A.rq.prototype={
an(){return new A.LV(null,null,B.m)}}
A.LV.prototype={
oO(a){var s=this,r=s.CW
s.a.toString
s.CW=t.iH.a(a.$3(r,B.aA,new A.aaO()))
s.cx=t.nr.a(a.$3(s.cx,s.a.z,new A.aaP()))
r=t.mo
s.cy=r.a(a.$3(s.cy,s.a.Q,new A.aaQ()))
s.db=r.a(a.$3(s.db,s.a.at,new A.aaR()))},
L(a){var s,r,q,p,o,n=this,m=n.a,l=m.w
m=m.x
s=n.CW
s.toString
r=n.gfG()
r=s.aj(0,r.gn(r))
s=n.cx
s.toString
q=n.gfG()
q=s.aj(0,q.gn(q))
s=n.a.Q
p=n.db
p.toString
o=n.gfG()
o=p.aj(0,o.gn(o))
o.toString
return new A.IT(l,m,r,q,s,o,n.a.r,null)}}
A.aaO.prototype={
$1(a){return new A.lH(t.ak.a(a),null)},
$S:328}
A.aaP.prototype={
$1(a){return new A.aL(A.T_(a),null,t.a7)},
$S:82}
A.aaQ.prototype={
$1(a){return new A.hC(t.iO.a(a),null)},
$S:47}
A.aaR.prototype={
$1(a){return new A.hC(t.iO.a(a),null)},
$S:47}
A.qF.prototype={
m(){var s=this,r=s.dw$
if(r!=null)r.G(0,s.glJ())
s.dw$=null
s.aQ()},
ce(){this.dY()
this.d2()
this.lK()}}
A.kj.prototype={
bU(a){var s=A.fY(t.h,t.X)
return new A.uk(s,this,B.a6,A.n(this).h("uk<kj.T>"))}}
A.uk.prototype={
M6(a,b){var s=this.be,r=this.$ti,q=r.h("ca<1>?").a(s.j(0,a))
if(q!=null&&q.gN(q))return
s.l(0,a,A.cV(r.c))},
KV(a,b){var s,r=this.$ti,q=r.h("ca<1>?").a(this.be.j(0,b))
if(q==null)return
if(!q.gN(q)){s=this.f
s.toString
s=r.h("kj<1>").a(s).a70(a,q)
r=s}else r=!0
if(r)b.b5()}}
A.hP.prototype={
c1(a){return a.f!==this.f},
bU(a){var s=new A.qG(A.fY(t.h,t.X),this,B.a6,A.n(this).h("qG<hP.T>"))
this.f.Y(0,s.gwJ())
return s}}
A.qG.prototype={
bf(a,b){var s,r,q=this,p=q.f
p.toString
s=q.$ti.h("hP<1>").a(p).f
r=b.f
if(s!==r){p=q.gwJ()
s.G(0,p)
r.Y(0,p)}q.P_(0,b)},
bd(){var s,r=this
if(r.bv){s=r.f
s.toString
r.CB(r.$ti.h("hP<1>").a(s))
r.bv=!1}return r.OZ()},
Wj(){this.bv=!0
this.h1()},
mw(a){this.CB(a)
this.bv=!1},
pF(){var s=this,r=s.f
r.toString
s.$ti.h("hP<1>").a(r).f.G(0,s.gwJ())
s.v6()}}
A.FD.prototype={}
A.qS.prototype={}
A.ah4.prototype={
$1(a){return this.a.a=a},
$S:26}
A.ah5.prototype={
$1(a){return a.b},
$S:329}
A.ah6.prototype={
$1(a){var s,r,q,p
for(s=J.aJ(a),r=this.a,q=this.b,p=0;p<s.gp(a);++p)q.l(0,A.aD(A.n(r.a[p].a).h("cZ.T")),s.j(a,p))
return q},
$S:330}
A.cZ.prototype={
i(a){return"LocalizationsDelegate["+A.aD(A.n(this).h("cZ.T")).i(0)+"]"}}
A.RZ.prototype={
mp(a){return!0},
cY(a,b){return new A.bp(B.Dp,t.mq)},
l1(a){return!1},
i(a){return"DefaultWidgetsLocalizations.delegate(en_US)"}}
A.DU.prototype={
gbK(){return B.t},
$ijr:1}
A.yA.prototype={
c1(a){return this.w!==a.w}}
A.uM.prototype={
an(){return new A.Ol(new A.bB(null,t.C),A.y(t.n,t.z),B.m)}}
A.Ol.prototype={
aC(){this.aV()
this.cY(0,this.a.c)},
RX(a){var s,r,q,p,o,n,m=this.a.d,l=a.d
if(m.length!==l.length)return!0
s=A.a(m.slice(0),A.aj(m))
r=A.a(l.slice(0),A.aj(l))
for(q=0;q<s.length;++q){p=s[q]
o=r[q]
n=p instanceof A.bR?A.cR(p):null
m=A.aD(n==null?A.aT(p):n)
n=o instanceof A.bR?A.cR(o):null
if(m===A.aD(n==null?A.aT(o):n)){p.l1(o)
m=!1}else m=!0
if(m)return!0}return!1},
aX(a){var s,r=this
r.bo(a)
if(r.a.c.k(0,a.c)){r.a.toString
s=r.RX(a)}else s=!0
if(s)r.cY(0,r.a.c)},
cY(a,b){var s,r=this,q={},p=r.a.d,o=p.length
if(o===0){r.f=b
return}q.a=null
s=A.aCx(b,p).aE(new A.adr(q),t.Co)
q=q.a
if(q!=null){r.e=q
r.f=b}else{++$.kL.bp$
s.aE(new A.ads(r,b),t.H)}},
gH2(){return t.cC.a(J.aO(this.e,B.a_j)).gbK()},
L(a){var s,r,q,p=this,o=null
if(p.f==null)return B.dW
s=p.gH2()
p.f.toString
r=p.e
q=p.gH2()
return A.dK(o,new A.yA(p,r,A.ajf(p.a.e,q),p.d),!1,o,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,s,o,o)}}
A.adr.prototype={
$1(a){return this.a.a=a},
$S:331}
A.ads.prototype={
$1(a){var s=this.a
if(s.c!=null)s.aw(new A.adq(s,a,this.b))
$.kL.HZ()},
$S:332}
A.adq.prototype={
$0(){var s=this.a
s.e=this.b
s.f=this.c},
$S:0}
A.vC.prototype={
E(){return"Orientation."+this.b}}
A.j4.prototype={
rK(a,b,c,d,e){var s=this,r=c==null?s.c:c,q=a==null?s.f:a,p=e==null?s.r:e,o=d==null?s.e:d
return new A.j4(s.a,s.b,r,s.d,o,q,p,s.w,!1,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch)},
yt(a){return this.rK(null,null,a,null,null)},
IE(a){return this.rK(a,null,null,null,null)},
a1z(a,b){return this.rK(null,null,null,a,b)},
a1y(a,b){return this.rK(a,null,null,null,b)},
Lx(a,b,c,d){var s,r,q,p,o,n,m=this,l=null
if(!(b||d||c||a))return m
s=m.f
r=b?0:l
q=d?0:l
p=c?0:l
r=s.oe(a?0:l,r,p,q)
q=m.r
p=b?Math.max(0,q.a-s.a):l
o=d?Math.max(0,q.b-s.b):l
n=c?Math.max(0,q.c-s.c):l
return m.a1y(r,q.oe(a?Math.max(0,q.d-s.d):l,p,n,o))},
a6b(a){var s=this,r=null,q=s.r,p=s.e,o=Math.max(0,q.d-p.d)
q=q.oe(o,r,r,r)
return s.a1z(p.oe(0,r,r,r),q)},
k(a,b){var s=this
if(b==null)return!1
if(J.X(b)!==A.A(s))return!1
return b instanceof A.j4&&b.a.k(0,s.a)&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.f.k(0,s.f)&&b.r.k(0,s.r)&&b.e.k(0,s.e)&&b.Q===s.Q&&b.as===s.as&&b.z===s.z&&b.y===s.y&&b.at===s.at&&b.ax===s.ax&&b.ay.k(0,s.ay)&&A.cS(b.ch,s.ch)},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,s.f,s.r,s.e,!1,s.Q,s.as,s.z,s.y,s.at,s.ax,s.ay,A.df(s.ch),B.a,B.a,B.a,B.a)},
i(a){var s=this
return"MediaQueryData("+B.c.b4(A.a(["size: "+s.a.i(0),"devicePixelRatio: "+B.d.M(s.b,1),"textScaleFactor: "+B.d.M(s.c,1),"platformBrightness: "+s.d.i(0),"padding: "+s.f.i(0),"viewPadding: "+s.r.i(0),"viewInsets: "+s.e.i(0),"alwaysUse24HourFormat: false","accessibleNavigation: "+s.y,"highContrast: "+s.Q,"disableAnimations: "+s.as,"invertColors: "+s.z,"boldText: "+s.at,"navigationMode: "+s.ax.b,"gestureSettings: "+s.ay.i(0),"displayFeatures: "+A.h(s.ch)],t.s),", ")+")"}}
A.ff.prototype={
c1(a){return!this.f.k(0,a.f)}}
A.I8.prototype={
E(){return"NavigationMode."+this.b}}
A.yH.prototype={
an(){return new A.Ot(B.m)}}
A.Ot.prototype={
aC(){this.aV()
$.ai.b3$.push(this)},
rT(){this.aw(new A.adN())},
IU(){this.aw(new A.adP())},
IT(){this.aw(new A.adO())},
L(a){var s
$.ai.toString
s=A.anK($.cq())
return new A.ff(s,this.a.c,null)},
m(){B.c.u($.ai.b3$,this)
this.aQ()}}
A.adN.prototype={
$0(){},
$S:0}
A.adP.prototype={
$0(){},
$S:0}
A.adO.prototype={
$0(){},
$S:0}
A.Sf.prototype={}
A.ve.prototype={
L(a){var s,r=null
switch(A.lp().a){case 0:case 1:case 3:case 5:break
case 2:case 4:break}s=this.c
return A.auJ(new A.tO(!0,new A.OD(A.dK(r,A.vg(new A.fN(B.ml,s==null?r:new A.t4(s,r,r),r),B.lN,r,r,r),!1,r,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),new A.a2a(this,a),r),r))}}
A.a2a.prototype={
$0(){A.L0(B.W2)},
$S:0}
A.qf.prototype={
ft(a){if(this.y1==null)return!1
return this.n6(a)},
JV(a){},
JW(a,b){var s=this.y1
if(s!=null)s.$0()},
ts(a,b,c){}}
A.adT.prototype={
ye(a){a.sjx(this.a)}}
A.M_.prototype={
Iy(){var s=t.S,r=A.cV(s)
return new A.qf(B.aX,18,B.br,A.y(s,t.o),r,null,null,A.y(s,t.V))},
Kb(a){a.y1=this.a}}
A.OD.prototype={
L(a){var s=this.d
return new A.kJ(this.c,A.aW([B.a_k,new A.M_(s)],t.n,t.ob),B.aD,!1,new A.adT(s),null)}}
A.I9.prototype={
L(a){var s,r,q=this,p=a.a5(t.I)
p.toString
s=A.a([],t.E)
r=q.c
if(r!=null)s.push(A.a1i(r,B.h9))
r=q.d
if(r!=null)s.push(A.a1i(r,B.ha))
r=q.e
if(r!=null)s.push(A.a1i(r,B.hb))
return new A.ti(new A.afE(q.f,q.r,p.w),s,null)}}
A.r9.prototype={
E(){return"_ToolbarSlot."+this.b}}
A.afE.prototype={
u5(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.b.j(0,B.h9)!=null){s=a.a
r=a.b
q=e.dP(B.h9,new A.aQ(0,s,r,r)).a
switch(e.f.a){case 0:p=s-q
break
case 1:p=0
break
default:p=null}e.e9(B.h9,new A.t(p,0))}else q=0
if(e.b.j(0,B.hb)!=null){o=e.dP(B.hb,A.aj0(a))
switch(e.f.a){case 0:n=0
break
case 1:n=a.a-o.a
break
default:n=null}m=o.a
e.e9(B.hb,new A.t(n,(a.b-o.b)/2))}else m=0
if(e.b.j(0,B.ha)!=null){s=a.a
r=e.e
l=Math.max(s-q-m-r*2,0)
k=e.dP(B.ha,A.aj0(a).a1r(l))
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
default:f=null}e.e9(B.ha,new A.t(f,(a.b-k.b)/2))}},
mX(a){return a.d!==this.d||a.e!==this.e||a.f!==this.f}}
A.mV.prototype={
E(){return"RoutePopDisposition."+this.b}}
A.c0.prototype={
gu_(){return B.rI},
jo(){},
oq(){var s=A.aki()
s.aE(new A.a56(this),t.H)
return s},
oo(){var s=this.a
if(s==null)s=null
else{s.a.toString
s=!0}if(s===!0)A.aki().aE(new A.a55(this),t.H)},
yQ(a){},
fA(){var s=0,r=A.a2(t.ij),q,p=this
var $async$fA=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:q=p.gKs()?B.U3:B.Bf
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$fA,r)},
gMe(){return!1},
kp(a){this.a2b(a)
return!0},
a2b(a){this.d.bT(0,null)},
lW(a){},
op(a){},
yL(a){},
o7(){},
rD(){},
m(){this.a=null},
gkE(){var s,r=this.a
if(r==null)return!1
r=r.e
r=new A.bu(r,A.aj(r).h("bu<1,dn?>"))
s=r.mt(r,new A.a59(),new A.a5a())
if(s==null)return!1
return s.a===this},
gKs(){var s,r=this.a
if(r==null)return!1
r=r.e
r=new A.bu(r,A.aj(r).h("bu<1,dn?>"))
s=r.tk(r,new A.a5b(),new A.a5c())
if(s==null)return!1
return s.a===this},
gtx(){var s,r,q,p,o=this.a
if(o==null)return!1
for(o=o.e,s=o.length,r=0;r<s;++r){q=o[r]
if(q.a===this)return!1
p=q.d.a
if(p<=10&&p>=1)return!0}return!1},
ga4p(){var s=this.a
if(s==null)return!1
s=s.e
s=new A.bu(s,A.aj(s).h("bu<1,dn?>"))
s=s.tk(s,new A.a57(this),new A.a58())
s=s==null?null:s.gkF()
return s===!0}}
A.a56.prototype={
$1(a){var s,r=this.a.a
if(r==null)s=null
else{r.a.toString
s=!0}if(s===!0){r=r.x.gdL()
if(r!=null)r.uj()}},
$S:19}
A.a55.prototype={
$1(a){var s=this.a.a
if(s!=null){s=s.x.gdL()
if(s!=null)s.uj()}},
$S:19}
A.a59.prototype={
$1(a){return a!=null&&a.gkF()},
$S:28}
A.a5a.prototype={
$0(){return null},
$S:3}
A.a5b.prototype={
$1(a){return a!=null&&a.gkF()},
$S:28}
A.a5c.prototype={
$0(){return null},
$S:3}
A.a57.prototype={
$1(a){return a!=null&&A.apo(this.a).$1(a)},
$S:28}
A.a58.prototype={
$0(){return null},
$S:3}
A.hc.prototype={
i(a){var s=this.a
s=s==null?"none":'"'+s+'"'
return"RouteSettings("+s+", "+A.h(this.b)+")"}}
A.j6.prototype={
rV(a,b){},
rU(a,b){},
yP(a,b){},
rW(a,b){},
IW(a,b){},
os(){}}
A.md.prototype={
c1(a){return a.f!=this.f}}
A.a54.prototype={}
A.Lo.prototype={}
A.DT.prototype={}
A.vs.prototype={
an(){var s=null,r=A.a([],t.hi),q=$.by(),p=t.a4
return new A.fj(r,new A.NR(q),A.j2(s,p),A.j2(s,p),A.ajr(!0,"Navigator",!0,!0,s,s,!1),new A.wh(0,q,t.rj),A.jq(!1),A.b3(t.S),s,A.y(t.wb,t.M),s,!0,s,s,s,B.m)},
a5g(a,b){return this.z.$2(a,b)}}
A.a2H.prototype={
$1(a){return a==null},
$S:334}
A.e0.prototype={
E(){return"_RouteLifecycle."+this.b}}
A.OO.prototype={}
A.dn.prototype={
gcM(){var s,r
if(this.c){s=t.kd.a(this.a.b)
s.gcM()
r=A.h(s.gcM())
return"p+"+r}r=this.b
if(r!=null)return"r+"+r.gLJ()
return null},
a3q(a,b,c,d){var s,r,q,p=this,o=p.d,n=p.a
n.a=b
n.jo()
s=p.d
if(s===B.Cy||s===B.Cz){r=n.oq()
p.d=B.CA
r.Md(new A.aeR(p,b))}else{n.yQ(c)
p.d=B.cS}if(a)n.op(null)
s=o===B.a0J||o===B.Cz
q=b.r
if(s)q.dk(0,new A.yU(n,d))
else q.dk(0,new A.qP(n,d))},
a3p(a,b){var s,r=this
r.d=B.a0F
s=r.a
if((s.d.a.a&30)!==0)return!0
if(!s.kp(r.w)){r.d=B.cS
return!1}r.w=null
return!0},
m(){var s,r,q,p,o,n,m={}
this.d=B.a0H
s=this.a
r=s.gu_()
q=new A.aeP()
p=new A.aH(r,q,A.aj(r).h("aH<1>"))
if(!p.ga3(p).q())s.m()
else{m.a=p.gp(p)
for(s=B.c.ga3(r),q=new A.qd(s,q);q.q();){r=s.gF(s)
o=A.b6("listener")
n=new A.aeQ(m,this,r,o)
o.b=n
r.d.Y(0,n)}}},
ga79(){var s=this.d.a
return s<=7&&s>=1},
gkF(){var s=this.d.a
return s<=10&&s>=1}}
A.aeR.prototype={
$0(){var s=this.a
if(s.d===B.CA){s.d=B.cS
this.b.we()}},
$S:0}
A.aeP.prototype={
$1(a){return a.d.a},
$S:335}
A.aeQ.prototype={
$0(){var s=this,r=s.a;--r.a
s.c.d.G(0,s.d.aD())
if(r.a===0)s.b.a.m()},
$S:0}
A.aeS.prototype={
$1(a){return a.a===this.a},
$S:51}
A.lc.prototype={}
A.qP.prototype={
kJ(a){a.rV(this.a,this.b)}}
A.qO.prototype={
kJ(a){a.rU(this.a,this.b)}}
A.yT.prototype={
kJ(a){a.yP(this.a,this.b)}}
A.yU.prototype={
kJ(a){a.rW(this.a,this.b)}}
A.fj.prototype={
aC(){var s,r,q,p,o=this
o.aV()
for(s=o.a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
$.hu().a.set(p,o)}o.Q=o.a.x
s=o.c.jM(t.hS)
if(s==null)s=null
else{s=s.f
s.toString}t.cn.a(s)
o.xJ(s==null?null:s.f)
o.a.toString
B.fx.tD("selectSingleEntryHistory",t.H)},
iF(a,b){var s,r,q,p,o,n,m=this
m.mD(m.as,"id")
s=m.f
m.mD(s,"history")
for(;r=m.e,r.length!==0;)r.pop().m()
m.d=new A.bB(null,t.r9)
B.c.I(r,s.LK(null,m))
m.a.toString
q=0
for(;!1;++q){p=B.N_[q]
r=m.c
r.toString
r=p.yy(r)
o=$.aiJ()
n=new A.dn(r,null,!0,B.m3,o,o,o)
m.e.push(n)
B.c.I(m.e,s.LK(n,m))}if(s.y==null){s=m.a
r=m.e
o=s.f
B.c.I(r,J.AW(s.a5g(m,o),new A.a2G(m),t.ee))}m.we()},
yS(a){var s,r=this
r.Pn(a)
s=r.f
if(r.bl$!=null)s.bf(0,r.e)
else s.a_(0)},
gcM(){return this.a.y},
b5(){var s,r,q,p,o=this
o.Q6()
s=o.c.a5(t.hS)
o.xJ(s==null?null:s.f)
for(r=o.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.P)(r),++p)r[p].a.rD()},
xJ(a){var s,r,q=this
if(q.z!=a){if(a!=null)$.hu().a.set(a,q)
s=q.z
if(s==null)s=null
else{r=$.hu()
A.ov(s)
s=r.a.get(s)}if(s===q){s=$.hu()
r=q.z
r.toString
s.a.set(r,null)}q.z=a
q.Hp()}},
Hp(){var s=this,r=s.z,q=s.a
if(r!=null)s.Q=B.c.U(q.x,A.a([r],t.yx))
else s.Q=q.x},
aX(a){var s,r,q,p,o=this
o.Q7(a)
s=a.x
if(s!==o.a.x){for(r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
$.hu().a.set(p,null)}for(s=o.a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
$.hu().a.set(p,o)}o.Hp()}o.a.toString
for(s=o.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].a.rD()},
dv(){var s,r,q,p=this.Q
p===$&&A.b()
s=p.length
r=0
for(;r<p.length;p.length===s||(0,A.P)(p),++r){q=p[r]
$.hu().a.set(q,null)}this.n9()},
ce(){var s,r,q,p
this.Q4()
s=this.Q
s===$&&A.b()
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
$.hu().a.set(p,this)}},
m(){var s,r,q,p=this
p.xJ(null)
p.x.m()
for(s=p.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].m()
p.Q8()},
gDt(){var s,r,q,p=A.a([],t.tD)
for(s=this.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)B.c.I(p,s[q].a.gu_())
return p},
wf(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null
a.ay=!0
s=a.e
r=s.length-1
q=s[r]
p=r>0?s[r-1]:a0
o=A.a([],t.hi)
for(s=a.w,n=a.r,m=a0,l=m,k=!1,j=!1;r>=0;){switch(q.d.a){case 1:i=a.iR(r-1,A.alp())
h=i>=0?a.e[i]:a0
h=h==null?a0:h.a
g=q.a
g.a=a
g.jo()
q.d=B.a0I
n.dk(0,new A.qP(g,h))
continue
case 2:if(k||l==null){h=q.a
h.oo()
q.d=B.cS
if(l==null)h.op(a0)
continue}break
case 3:case 4:case 6:h=p==null?a0:p.a
i=a.iR(r-1,A.alp())
g=i>=0?a.e[i]:a0
g=g==null?a0:g.a
q.a3q(l==null,a,h,g)
if(q.d===B.cS)continue
break
case 5:if(!j&&m!=null){q.a.lW(m)
q.f=m}j=!0
break
case 7:if(!j&&m!=null){q.a.lW(m)
q.f=m}k=!0
j=!0
break
case 8:i=a.iR(r,A.AK())
h=i>=0?a.e[i]:a0
if(!q.a3p(a,h==null?a0:h.a))continue
if(!j){if(m!=null){q.a.lW(m)
q.f=m}m=q.a}h=q.a
i=a.iR(r,A.AK())
g=i>=0?a.e[i]:a0
s.dk(0,new A.qO(h,g==null?a0:g.a))
if(q.d===B.m4)continue
k=!0
break
case 11:break
case 9:h=q.a
h=h.d.a
if((h.a&30)!==0)A.K(A.a5("Future already completed"))
h.fa(a0)
q.w=null
q.d=B.a0E
continue
case 10:if(!j){if(m!=null)q.a.lW(m)
m=a0}i=a.iR(r,A.AK())
h=i>=0?a.e[i]:a0
h=h==null?a0:h.a
q.d=B.a0G
if(q.x)s.dk(0,new A.yT(q.a,h))
continue
case 12:if(!k&&l!=null)break
q.d=B.m4
continue
case 13:o.push(B.c.ea(a.e,r))
q=l
break
case 14:case 0:break}--r
f=r>0?a.e[r-1]:a0
l=q
q=p
p=f}a.TZ()
a.U0()
a.a.toString
s=a.e
s=new A.bu(s,A.aj(s).h("bu<1,dn?>"))
e=s.mt(s,new A.a2A(),new A.a2B())
d=e==null?a0:e.a.b.a
if(d!=null&&d!==a.at){A.aoM(d,!1,a0)
a.at=d}for(s=o.length,c=0;c<o.length;o.length===s||(0,A.P)(o),++c){q=o[c]
for(n=q.a.gu_(),h=n.length,b=0;b<n.length;n.length===h||(0,A.P)(n),++b)J.auk(n[b])
q.m()}if(a1){s=a.d
s===$&&A.b()
s=s.gbu()
if(s!=null)s.a6_(a.gDt())}if(a.bl$!=null)a.f.bf(0,a.e)
a.ay=!1},
we(){return this.wf(!0)},
TZ(){var s,r=this,q=r.Q
q===$&&A.b()
if(q.length===0){r.w.a_(0)
r.r.a_(0)
return}for(q=r.r;!q.gN(q);){s=q.dS(0)
B.c.X(r.Q,s.gph())}for(q=r.w;!q.gN(q);){s=q.mF()
B.c.X(r.Q,s.gph())}},
U0(){var s,r,q,p,o,n,m=this,l=null,k=m.e.length-1
for(;k>=0;){s=m.e[k]
r=s.d.a
if(!(r<=12&&r>=3)){--k
continue}q=m.Ut(k+1,A.arw())
r=q==null
p=r?l:q.a
o=s.r
if(p!=o){if((r?l:q.a)==null){p=s.f
p=p!=null&&p===o}else p=!1
if(!p){p=s.a
p.op(r?l:q.a)}s.r=r?l:q.a}--k
n=m.iR(k,A.arw())
r=n>=0?m.e[n]:l
p=r==null
o=p?l:r.a
if(o!=s.e){o=s.a
o.yL(p?l:r.a)
s.e=p?l:r.a}}},
EN(a,b){a=this.iR(a,b)
return a>=0?this.e[a]:null},
iR(a,b){while(!0){if(!(a>=0&&!b.$1(this.e[a])))break;--a}return a},
Ut(a,b){var s
while(!0){s=this.e
if(!(a<s.length&&!b.$1(s[a])))break;++a}s=this.e
return a<s.length?s[a]:null},
qZ(a,b,c,d){var s,r,q
if(b)this.a.toString
s=new A.hc(a,c)
r=d.h("c0<0?>?")
q=r.a(this.a.r.$1(s))
return q==null&&!b?r.a(this.a.w.$1(s)):q},
xp(a,b,c){return this.qZ(a,!1,b,c)},
Dr(a){this.Sp()},
pc(a){var s=0,r=A.a2(t.y),q,p=this,o,n,m
var $async$pc=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)$async$outer:switch(s){case 0:m=p.e
m=new A.bu(m,A.aj(m).h("bu<1,dn?>"))
o=m.mt(m,new A.a2C(),new A.a2D())
if(o==null){q=!1
s=1
break}s=3
return A.a4(o.a.fA(),$async$pc)
case 3:n=c
if(p.c==null){q=!0
s=1
break}m=p.e
m=new A.bu(m,A.aj(m).h("bu<1,dn?>"))
if(o!==m.mt(m,new A.a2E(),new A.a2F())){q=!0
s=1
break}switch(n.a){case 2:q=!1
s=1
break $async$outer
case 0:p.a5F(a)
q=!0
s=1
break $async$outer
case 1:q=!0
s=1
break $async$outer}case 1:return A.a0(q,r)}})
return A.a1($async$pc,r)},
KM(){return this.pc(null,t.X)},
a51(a){return this.pc(a,t.X)},
La(a){var s=this,r=B.c.a4F(s.e,A.alp())
if(r.c){s.a.toString
if(null.$2(r.a,a)&&r.d===B.cS)r.d=B.m5}else{r.w=a
r.d=B.m5}if(r.d===B.m5)s.wf(!1)
s.Dr(r.a)},
a5F(a){return this.La(a,t.X)},
hQ(){return this.La(null,t.X)},
Jz(a){var s,r=this,q=B.c.K7(r.e,A.apo(a)),p=r.e[q]
if(p.c&&p.d.a<8){s=r.EN(q-1,A.AK())
s=s==null?null:s.a
r.w.dk(0,new A.qO(a,s))}p.d=B.m4
if(!r.ay)r.wf(!1)},
sHF(a){this.ch=a
this.CW.sn(0,a>0)},
a2f(){var s,r,q,p,o,n,m=this
m.sHF(m.ch+1)
if(m.ch===1){s=m.iR(m.e.length-1,A.AK())
r=m.e[s].a
q=!r.gMe()&&s>0?m.EN(s-1,A.AK()).a:null
p=m.Q
p===$&&A.b()
o=p.length
n=0
for(;n<p.length;p.length===o||(0,A.P)(p),++n)p[n].IW(r,q)}},
os(){var s,r,q,p=this
p.sHF(p.ch-1)
if(p.ch===0){s=p.Q
s===$&&A.b()
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].os()}},
VE(a){this.cx.C(0,a.gbW())},
VM(a){this.cx.u(0,a.gbW())},
Sp(){if($.bP.dy$===B.cH){var s=this.d
s===$&&A.b()
s=$.ai.ah$.z.j(0,s)
this.aw(new A.a2z(s==null?null:s.tg(t.CE)))}s=this.cx
B.c.X(A.aA(s,!0,A.n(s).c),$.ai.ga0y())},
L(a){var s,r=this,q=null,p=r.gVL(),o=A.an9(a),n=r.bl$,m=r.d
m===$&&A.b()
r.a.toString
if(m.gbu()==null){s=r.gDt()
s=J.mo(s.slice(0),A.aj(s).c)}else s=B.rI
return new A.md(q,A.FZ(B.bR,new A.AY(!1,A.an8(A.F3(!0,q,A.aak(n,new A.p4(s,B.T,m)),q,q,q,r.x,!1,q,q,q,q,q,!0),o),q),p,r.gVD(),q,q,p),q)}}
A.a2G.prototype={
$1(a){var s,r,q=a.b.a
if(q!=null){s=this.a.as
r=s.y
if(r==null)r=s.$ti.h("bV.T").a(r)
s.Pm(0,r+1)
q=new A.OI(r,q,null,B.m6)}else q=null
return A.apn(a,B.m3,!1,q)},
$S:338}
A.a2A.prototype={
$1(a){return a!=null&&a.gkF()},
$S:28}
A.a2B.prototype={
$0(){return null},
$S:3}
A.a2C.prototype={
$1(a){return a!=null&&a.gkF()},
$S:28}
A.a2D.prototype={
$0(){return null},
$S:3}
A.a2E.prototype={
$1(a){return a!=null&&a.gkF()},
$S:28}
A.a2F.prototype={
$0(){return null},
$S:3}
A.a2z.prototype={
$0(){var s=this.a
if(s!=null)s.sHP(!0)},
$S:0}
A.r_.prototype={
E(){return"_RouteRestorationType."+this.b}}
A.Qa.prototype={
gKv(){return!0},
rH(){return A.a([this.a.a],t.f)}}
A.OI.prototype={
rH(){var s=this,r=s.Qo(),q=A.a([s.c,s.d],t.f),p=s.e
if(p!=null)q.push(p)
B.c.I(r,q)
return r},
yy(a){var s=a.xp(this.d,this.e,t.z)
s.toString
return s},
gLJ(){return this.c}}
A.akr.prototype={
gKv(){return!1},
rH(){A.ay9(this.d)},
yy(a){var s=a.c
s.toString
return this.d.$2(s,this.e)},
gLJ(){return this.c}}
A.NR.prototype={
bf(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.y==null
if(a)c.y=A.y(t.N,t.lC)
s=t.f
r=A.a([],s)
q=c.y
q.toString
p=J.aO(q,null)
if(p==null)p=B.dh
o=A.y(t.dR,t.lC)
q=c.y
q.toString
n=J.auq(J.AV(q))
for(q=a1.length,m=b,l=a,k=!0,j=0;j<a1.length;a1.length===q||(0,A.P)(a1),++j){i=a1[j]
if(i.d.a>7){h=i.a
h.c.sn(0,b)
continue}if(i.c){l=l||r.length!==J.bI(p)
h=r.length
if(h!==0){g=m==null?b:m.gcM()
o.l(0,g,r)
n.u(0,g)}k=i.gcM()!=null
h=i.a
f=k?i.gcM():b
h.c.sn(0,f)
if(k){r=A.a([],s)
h=c.y
h.toString
p=J.aO(h,i.gcM())
if(p==null)p=B.dh}else{r=B.dh
p=B.dh}m=i
continue}if(k){h=i.b
h=h==null?b:h.gKv()
k=h===!0}else k=!1
h=i.a
f=k?i.gcM():b
h.c.sn(0,f)
if(k){h=i.b
f=h.b
h=f==null?h.b=h.rH():f
if(!l){f=J.aJ(p)
e=f.gp(p)
d=r.length
l=e<=d||!J.f(f.j(p,d),h)}else l=!0
B.c.C(r,h)}}l=l||r.length!==J.bI(p)
c.TL(r,m,o,n)
if(l||n.gbE(n)){c.y=o
c.aA()}},
TL(a,b,c,d){var s,r=a.length
if(r!==0){s=b==null?null:b.gcM()
c.l(0,s,a)
d.u(0,s)}},
a_(a){if(this.y==null)return
this.y=null
this.aA()},
LK(a,b){var s,r,q,p,o,n=A.a([],t.hi)
if(this.y!=null)s=a!=null&&a.gcM()==null
else s=!0
if(s)return n
s=this.y
s.toString
r=J.aO(s,a==null?null:a.gcM())
if(r==null)return n
for(s=J.at(r);s.q();){q=A.aAM(s.gF(s))
p=q.yy(b)
o=$.aiJ()
n.push(new A.dn(p,q,!1,B.m3,o,o,o))}return n},
rM(){return null},
mi(a){a.toString
return J.amc(t.G.a(a),new A.acW(),t.dR,t.lC)},
Ka(a){this.y=a},
mL(){return this.y},
glZ(a){return this.y!=null}}
A.acW.prototype={
$2(a,b){return new A.al(A.co(a),A.eP(t.j.a(b),!0,t.K),t.cj)},
$S:339}
A.ae9.prototype={
$2(a,b){if(!a.a)a.G(0,b)},
$S:33}
A.yV.prototype={
ce(){this.dY()
this.d2()
this.fh()},
m(){var s=this,r=s.b9$
if(r!=null)r.G(0,s.geJ())
s.b9$=null
s.aQ()}}
A.yW.prototype={
aX(a){this.bo(a)
this.ou()},
b5(){var s,r,q,p,o=this
o.cE()
s=o.bl$
r=o.gmH()
q=o.c
q.toString
q=A.pp(q)
o.fo$=q
p=o.lH(q,r)
if(r){o.iF(s,o.e1$)
o.e1$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.fn$.X(0,new A.ae9())
s=r.bl$
if(s!=null)s.m()
r.bl$=null
r.Q5()}}
A.Id.prototype={
i(a){var s=A.a([],t.s)
this.ck(s)
return"Notification("+B.c.b4(s,", ")+")"},
ck(a){}}
A.de.prototype={
bU(a){return new A.yX(this,B.a6,this.$ti.h("yX<1>"))}}
A.yX.prototype={
L_(a){var s,r=this.f
r.toString
s=this.$ti
s.h("de<1>").a(r)
if(s.c.b(a))return r.d.$1(a)
return!1},
mw(a){}}
A.eO.prototype={}
A.Sk.prototype={}
A.fl.prototype={
smz(a){var s
if(this.b===a)return
this.b=a
s=this.e
if(s!=null)s.Eg()},
spa(a){if(this.c)return
this.c=!0
this.e.Eg()},
G(a,b){this.d.G(0,b)},
mE(a){var s,r=this.e
r.toString
this.e=null
if(r.c==null)return
B.c.u(r.d,this)
s=$.bP
if(s.dy$===B.Bg)s.cy$.push(new A.a2Y(r))
else r.Ft()},
h1(){var s=this.f.gbu()
if(s!=null)s.Fv()},
i(a){return"<optimized out>#"+A.bM(this)+"(opaque: "+this.b+"; maintainState: "+this.c+")"},
$iac:1,
Ig(a){return this.a.$1(a)}}
A.a2Y.prototype={
$1(a){this.a.Ft()},
$S:2}
A.qR.prototype={
an(){return new A.yY(B.m)}}
A.yY.prototype={
aC(){this.aV()
this.a.c.d.sn(0,!0)},
m(){this.a.c.d.sn(0,!1)
this.a.toString
this.aQ()},
L(a){var s=this.a
return new A.q5(s.d,s.c.Ig(a),null)},
Fv(){this.aw(new A.aed())}}
A.aed.prototype={
$0(){},
$S:0}
A.p4.prototype={
an(){return new A.p6(A.a([],t.tD),null,null,B.m)}}
A.p6.prototype={
aC(){this.aV()
this.a47(0,this.a.c)},
wP(a,b){return this.d.length},
zB(a,b){b.e=this
this.aw(new A.a31(this,null,null,b))},
a47(a,b){var s,r=b.length
if(r===0)return
for(s=0;s<r;++s)b[s].e=this
this.aw(new A.a30(this,null,null,b))},
a6_(a){var s,r,q,p,o,n=this
if(t.rF.b(a))s=a
else s=J.mo(a.slice(0),A.aj(a).c)
if(s.length===0)return
r=n.d
if(A.cS(r,s))return
q=A.kt(r,t.u7)
for(r=s.length,p=0;p<r;++p){o=s[p]
if(o.e==null)o.e=n}n.aw(new A.a32(n,s,q,null,null))},
Ft(){if(this.c!=null)this.aw(new A.a3_())},
Eg(){this.aw(new A.a2Z())},
L(a){var s,r,q,p,o,n=A.a([],t.E)
for(s=this.d,r=s.length-1,q=!0,p=0;r>=0;--r){o=s[r]
if(q){++p
n.push(new A.qR(o,!0,o.f))
q=!o.b||!1}else if(o.c)n.push(new A.qR(o,!1,o.f))}s=t.m8
return new A.Ri(n.length-p,this.a.d,A.aA(new A.cy(n,s),!1,s.h("bm.E")),null)}}
A.a31.prototype={
$0(){var s=this,r=s.a
B.c.ml(r.d,r.wP(s.b,s.c),s.d)},
$S:0}
A.a30.prototype={
$0(){var s=this,r=s.a
B.c.oX(r.d,r.wP(s.b,s.c),s.d)},
$S:0}
A.a32.prototype={
$0(){var s,r,q=this,p=q.a,o=p.d
B.c.a_(o)
s=q.b
B.c.I(o,s)
r=q.c
r.a67(s)
B.c.oX(o,p.wP(q.d,q.e),r)},
$S:0}
A.a3_.prototype={
$0(){},
$S:0}
A.a2Z.prototype={
$0(){},
$S:0}
A.Ri.prototype={
bU(a){var s=A.cV(t.h)
return new A.Rj(s,this,B.a6)},
aG(a){var s=a.a5(t.I)
s.toString
s=new A.qZ(s.w,this.e,this.f,A.aw(),0,null,null,A.aw())
s.aJ()
s.I(0,null)
return s},
aN(a,b){var s=this.e
if(b.av!==s){b.av=s
b.a8()}s=a.a5(t.I)
s.toString
b.sbK(s.w)
s=this.f
if(s!==b.b0){b.b0=s
b.au()
b.b2()}}}
A.Rj.prototype={
ga9(){return t.z2.a(A.eQ.prototype.ga9.call(this))}}
A.qZ.prototype={
ex(a){if(!(a.e instanceof A.dY))a.e=new A.dY(null,null,B.j)},
XO(){if(this.af!=null)return
this.af=B.aS.V(this.ac)},
sbK(a){var s=this
if(s.ac===a)return
s.ac=a
s.af=null
s.a8()},
gqm(){var s,r,q,p,o=this
if(o.av===A.av.prototype.grE.call(o))return null
s=A.av.prototype.ga2N.call(o,o)
for(r=o.av,q=t.B;r>0;--r){p=s.e
p.toString
s=q.a(p).ab$}return s},
eO(a){var s,r,q,p,o=this.gqm()
for(s=t.B,r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.jL(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.ab$}return r},
gjT(){return!0},
cf(a){return new A.a6(A.H(1/0,a.a,a.b),A.H(1/0,a.c,a.d))},
bJ(){var s,r,q,p,o,n,m,l,k=this
k.K=!1
if(k.dz$-k.av===0)return
k.XO()
s=t.k.a(A.z.prototype.ga0.call(k))
r=A.Br(new A.a6(A.H(1/0,s.a,s.b),A.H(1/0,s.c,s.d)))
q=k.gqm()
for(s=t.B,p=t.uu;q!=null;){o=q.e
o.toString
s.a(o)
if(!o.gzI()){q.cv(r,!0)
n=k.af
n.toString
m=k.k3
m.toString
l=q.k3
l.toString
o.a=n.lN(p.a(m.aa(0,l)))}else{n=k.k3
n.toString
m=k.af
m.toString
k.K=A.aoi(q,o,n,m)||k.K}q=o.ab$}},
cW(a,b){var s,r,q,p=this,o={},n=o.a=p.av===A.av.prototype.grE.call(p)?null:p.bD$
for(s=t.B,r=0;r<p.dz$-p.av;++r,n=q){n=n.e
n.toString
s.a(n)
if(a.nV(new A.aeD(o,b,n),n.a,b))return!0
q=n.aS$
o.a=q}return!1},
u3(a,b){var s,r,q,p,o,n=this.gqm()
for(s=t.B,r=b.a,q=b.b;n!=null;){p=n.e
p.toString
s.a(p)
o=p.a
a.f2(n,new A.t(o.a+r,o.b+q))
n=p.ab$}},
aH(a,b){var s,r=this,q=r.K&&r.b0!==B.l,p=r.b6
if(q){q=r.cx
q===$&&A.b()
s=r.k3
p.saZ(0,a.kM(q,b,new A.C(0,0,0+s.a,0+s.b),r.gAB(),r.b0,p.a))}else{p.saZ(0,null)
r.u3(a,b)}},
m(){this.b6.saZ(0,null)
this.i6()},
h7(a){var s,r,q=this.gqm()
for(s=t.B;q!=null;){a.$1(q)
r=q.e
r.toString
q=s.a(r).ab$}},
j4(a){var s
switch(this.b0.a){case 0:return null
case 1:case 2:case 3:if(this.K){s=this.k3
s=new A.C(0,0,0+s.a,0+s.b)}else s=null
return s}}}
A.aeD.prototype={
$2(a,b){return this.a.a.bY(a,b)},
$S:15}
A.OZ.prototype={
ce(){this.dY()
this.d2()
this.fh()},
m(){var s=this,r=s.b9$
if(r!=null)r.G(0,s.geJ())
s.b9$=null
s.aQ()}}
A.Sq.prototype={
aq(a){var s,r,q
this.eB(a)
s=this.a7$
for(r=t.B;s!=null;){s.aq(a)
q=s.e
q.toString
s=r.a(q).ab$}},
al(a){var s,r,q
this.dW(0)
s=this.a7$
for(r=t.B;s!=null;){s.al(0)
q=s.e
q.toString
s=r.a(q).ab$}}}
A.oB.prototype={
an(){var s=t.y
return new A.yj(A.aW([!1,!0,!0,!0],s,s),null,null,B.m)},
jv(a){return A.AN().$1(a)}}
A.yj.prototype={
aC(){var s,r,q=this
q.aV()
s=q.a
r=s.f
q.d=A.ape(A.bd(s.e),r,q)
r=q.a
s=r.f
s=A.ape(A.bd(r.e),s,q)
q.e=s
r=q.d
r.toString
q.f=new A.yI(A.a([r,s],t.ro))},
aX(a){var s,r=this
r.bo(a)
if(!a.f.k(0,r.a.f)||A.bd(a.e)!==A.bd(r.a.e)){s=r.d
s.toString
s.sak(0,r.a.f)
s=r.d
s.toString
s.sI7(A.bd(r.a.e))
s=r.e
s.toString
s.sak(0,r.a.f)
s=r.e
s.toString
s.sI7(A.bd(r.a.e))}},
x7(a){var s,r,q,p,o,n,m,l,k,j=this
if(!j.a.jv(a))return!1
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
if(a instanceof A.hY){q=a.e
if(q<0)n=s
else if(q>0)n=p
else n=null
m=n===s
s=j.c
s.d4(new A.vE(m,0))
s=j.w
s.l(0,m,!0)
s.j(0,m).toString
n.d=0
j.w.j(0,m).toString
s=a.f
if(s!==0){r=n.c
if(r!=null)r.am(0)
n.c=null
l=A.H(Math.abs(s),100,1e4)
s=n.f
if(n.a===B.h_)r=0.3
else{r=n.r
r===$&&A.b()
q=r.a
q=r.b.aj(0,q.gn(q))
r=q}s.a=r
r.toString
s.b=A.H(l*0.00006,r,0.5)
r=n.w
s=n.x
s===$&&A.b()
q=s.a
r.a=s.b.aj(0,q.gn(q))
r.b=Math.min(0.025+75e-8*l*l,1)
r=n.b
r===$&&A.b()
r.e=A.c7(0,B.d.bb(0.15+l*0.02),0)
r.kC(0,0)
n.as=0.5
n.a=B.a0c}else{s=a.d
if(s!=null){p=a.b.ga9()
p.toString
t.x.a(p)
o=p.k3
o.toString
k=p.kY(s.d)
switch(A.bd(r.e).a){case 0:n.toString
s=o.b
n.Lh(0,Math.abs(q),o.a,A.H(k.b,0,s),s)
break
case 1:n.toString
s=o.a
n.Lh(0,Math.abs(q),o.b,A.H(k.a,0,s),s)
break}}}}else if(a instanceof A.je||a instanceof A.ib)if(a.gJ4()!=null){s=j.d
if(s.a===B.h0)s.k9(B.d3)
s=j.e
if(s.a===B.h0)s.k9(B.d3)}j.r=A.A(a)
return!1},
m(){this.d.m()
this.e.m()
this.R0()},
L(a){var s=this,r=null,q=s.a,p=s.d,o=s.e,n=q.e,m=s.f
return new A.de(s.gx6(),new A.i8(A.DC(new A.i8(q.w,r),new A.NQ(p,o,n,m),r,r,B.R),r),r,t.Bf)}}
A.nA.prototype={
E(){return"_GlowState."+this.b}}
A.yi.prototype={
sak(a,b){if(this.ax.k(0,b))return
this.ax=b
this.aA()},
sI7(a){if(this.ay===a)return
this.ay=a
this.aA()},
m(){var s=this,r=s.b
r===$&&A.b()
r.m()
r=s.y
r===$&&A.b()
r.w.c4$.u(0,r)
r.CZ()
r=s.c
if(r!=null)r.am(0)
s.dX()},
Lh(a,b,c,d,e){var s,r,q,p=this,o=p.c
if(o!=null)o.am(0)
p.at=p.at+b/200
o=p.f
s=p.r
s===$&&A.b()
r=s.b
s=s.a
o.a=r.aj(0,s.gn(s))
o.b=Math.min(r.aj(0,s.gn(s))+b/c*0.8,0.5)
q=Math.min(c,e*0.20096189432249995)
s=p.w
r=p.x
r===$&&A.b()
o=r.b
r=r.a
s.a=o.aj(0,r.gn(r))
s.b=Math.max(1-1/(0.7*Math.sqrt(p.at*q)),A.iF(o.aj(0,r.gn(r))))
r=d/e
p.Q=r
if(r!==p.as){o=p.y
o===$&&A.b()
if(!o.ga4y())o.n2(0)}else{o=p.y
o===$&&A.b()
o.hc(0)
p.z=null}o=p.b
o===$&&A.b()
o.e=B.nv
if(p.a!==B.h0){o.kC(0,0)
p.a=B.h0}else{o=o.r
if(!(o!=null&&o.a!=null))p.aA()}p.c=A.cb(B.nv,new A.acE(p))},
vC(a){var s=this
if(a!==B.Z)return
switch(s.a.a){case 1:s.k9(B.d3)
break
case 3:s.a=B.h_
s.at=0
break
case 2:case 0:break}},
k9(a){var s,r,q=this,p=q.a
if(p===B.Cu||p===B.h_)return
p=q.c
if(p!=null)p.am(0)
q.c=null
p=q.f
s=q.r
s===$&&A.b()
r=s.a
p.a=s.b.aj(0,r.gn(r))
p.b=0
p=q.w
r=q.x
r===$&&A.b()
s=r.a
p.a=r.b.aj(0,s.gn(s))
p.b=0
p=q.b
p===$&&A.b()
p.e=a
p.kC(0,0)
q.a=B.Cu},
ZV(a){var s,r=this,q=r.z
if(q!=null){q=q.a
s=r.Q
r.as=s-(s-r.as)*Math.pow(2,-(a.a-q)/$.asR().a)
r.aA()}if(A.AL(r.Q,r.as,0.001)){q=r.y
q===$&&A.b()
q.hc(0)
r.z=null}else r.z=a},
aH(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.r
i===$&&A.b()
s=i.a
if(J.f(i.b.aj(0,s.gn(s)),0))return
s=b.a
r=b.b
q=s>r?r/s:1
p=s*3/2
o=Math.min(r,s*0.20096189432249995)
r=j.x
r===$&&A.b()
n=r.a
n=r.b.aj(0,n.gn(n))
r=j.as
m=$.aq().bk()
l=j.ax
k=i.a
m.sak(0,A.b2(B.d.bb(255*i.b.aj(0,k.gn(k))),l.gn(l)>>>16&255,l.gn(l)>>>8&255,l.gn(l)&255))
a.cB(0)
a.aB(0,0,j.d+j.e)
a.dE(0,1,n*q)
a.kk(new A.C(0,0,0+s,0+o))
a.ik(new A.t(s/2*(0.5+r),o-p),p,m)
a.cw(0)},
i(a){return"_GlowController(color: "+this.ax.i(0)+", axis: "+A.aDC(this.ay)+")"}}
A.acE.prototype={
$0(){return this.a.k9(B.hE)},
$S:0}
A.NQ.prototype={
FO(a,b,c,d,e){var s
if(c==null)return
switch(A.jP(d,e)){case B.y:c.aH(a,b)
break
case B.x:a.cB(0)
a.aB(0,0,b.b)
a.dE(0,1,-1)
c.aH(a,b)
a.cw(0)
break
case B.ae:a.cB(0)
a.kQ(0,1.5707963267948966)
a.dE(0,1,-1)
c.aH(a,new A.a6(b.b,b.a))
a.cw(0)
break
case B.au:a.cB(0)
s=b.a
a.aB(0,s,0)
a.kQ(0,1.5707963267948966)
c.aH(a,new A.a6(b.b,s))
a.cw(0)
break}},
aH(a,b){var s=this,r=s.d
s.FO(a,b,s.b,r,B.nJ)
s.FO(a,b,s.c,r,B.nI)},
i2(a){return a.b!=this.b||a.c!=this.c},
i(a){return"_GlowingOverscrollIndicatorPainter("+A.h(this.b)+", "+A.h(this.c)+")"}}
A.pQ.prototype={
an(){return new A.zL(null,null,B.m)},
jv(a){return A.AN().$1(a)}}
A.zL.prototype={
gkd(){var s,r,q,p,o,n,m=this,l=null,k=m.d
if(k===$){s=t.a7
r=new A.aL(0,0,s)
q=new A.zK(r,B.mb,$.by())
p=A.e2(l,l,l,l,m)
p.bx()
o=p.c5$
o.b=!0
o.a.push(q.gvB())
q.a!==$&&A.eA()
q.a=p
n=A.el(B.n2,p,l)
n.a.Y(0,q.geq())
t.m.a(n)
q.b!==$&&A.eA()
q.b=new A.aZ(n,r,s.h("aZ<aF.T>"))
m.d!==$&&A.bi()
m.d=q
k=q}return k},
x7(a){var s,r,q,p,o,n,m=this
if(!m.a.jv(a))return!1
if(a instanceof A.hY){m.f=a
J.X(m.e)
s=a.e
r=m.c
r.d4(new A.vE(s<0,0))
m.r=!0
r=a.f
if(r!==0){s=m.gkd()
q=A.H(Math.abs(r),1,1e4)
r=s.c
p=s.b
p===$&&A.b()
o=p.a
r.a=p.b.aj(0,o.gn(o))
r.b=Math.min(0.016+1.01/q,1)
r=s.a
r===$&&A.b()
r.e=A.c7(0,B.d.bb(q*0.02),0)
r.kC(0,0)
s.d=B.a0L}else if(a.d!=null){r=a.a.d
r.toString
n=A.H(Math.abs(s)/r+m.gkd().e,0,1)
r=m.gkd()
r.e=n
s=r.c
p=r.b
p===$&&A.b()
o=p.a
s.a=p.b.aj(0,o.gn(o))
o=r.e
s.b=0.016*o+0.016*(1-Math.exp(-o*8.237217661997105))
o=r.a
o===$&&A.b()
o.e=B.hF
if(r.d!==B.mc){o.kC(0,0)
r.d=B.mc}else{s=o.r
if(!(s!=null&&s.a!=null))r.aA()}}}else if(a instanceof A.je||a instanceof A.ib){s=m.gkd()
if(s.d===B.mc)s.k9(B.hF)}m.e=a
return!1},
Ub(a){switch(this.a.c.a){case 0:return a>0?B.me:B.md
case 1:return a>0?B.e4:B.hc
case 2:return a>0?B.md:B.me
case 3:return a>0?B.hc:B.e4}},
m(){var s=this.gkd(),r=s.a
r===$&&A.b()
r.m()
s.dX()
this.Ra()},
L(a){var s={},r=a.a5(t.l).f
s.a=null
return new A.de(this.gx6(),A.lA(this.gkd(),new A.afj(s,this,r.a),null),null,t.Bf)}}
A.afj.prototype={
$2(a,b){var s,r,q,p,o,n,m=this,l=m.b,k=l.gkd().b
k===$&&A.b()
s=k.a
s=k.b.aj(0,s.gn(s))
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
p=l.Ub(k==null?0:k)
k=l.f
if(k==null)o=null
else{k=k.a.d
k.toString
o=k}if(o==null)o=m.a.a
k=A.v5(r,q,1)
l=l.a
n=A.aoU(p,l.f,k,!0)
return A.amD(n,s!==0&&o!==m.a.a?l.e:B.l)},
$S:340}
A.nI.prototype={
E(){return"_StretchState."+this.b}}
A.zK.prototype={
vC(a){var s=this
if(a!==B.Z)return
switch(s.d.a){case 1:s.k9(B.hF)
break
case 3:s.d=B.mb
s.e=0
break
case 2:case 0:break}},
k9(a){var s,r,q=this,p=q.d
if(p===B.CB||p===B.mb)return
p=q.c
s=q.b
s===$&&A.b()
r=s.a
p.a=s.b.aj(0,r.gn(r))
p.b=0
p=q.a
p===$&&A.b()
p.e=a
p.kC(0,0)
q.d=B.CB},
i(a){return"_StretchController()"}}
A.vE.prototype={
ck(a){this.Q9(a)
a.push("side: "+(this.a?"leading edge":"trailing edge"))}}
A.z_.prototype={
ck(a){var s,r
this.v7(a)
s=this.cT$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.Al.prototype={
ce(){this.dY()
this.d2()
this.fh()},
m(){var s=this,r=s.b9$
if(r!=null)r.G(0,s.geJ())
s.b9$=null
s.aQ()}}
A.Ar.prototype={
ce(){this.dY()
this.d2()
this.fh()},
m(){var s=this,r=s.b9$
if(r!=null)r.G(0,s.geJ())
s.b9$=null
s.aQ()}}
A.zG.prototype={
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return b instanceof A.zG&&A.cS(b.a,this.a)},
gt(a){return A.df(this.a)},
i(a){return"StorageEntryIdentifier("+B.c.b4(this.a,":")+")"}}
A.a33.prototype={
Ds(a){var s=A.a([],t.D5)
if(A.anW(a,s))a.Bn(new A.a34(s))
return s},
Mh(a,b){var s,r=this
if(r.a==null)r.a=A.y(t.K,t.z)
s=r.Ds(a)
if(s.length!==0)r.a.l(0,new A.zG(s),b)},
Lo(a){var s
if(this.a==null)return null
s=this.Ds(a)
return s.length!==0?this.a.j(0,new A.zG(s)):null}}
A.a34.prototype={
$1(a){return A.anW(a,this.a)},
$S:49}
A.p8.prototype={
L(a){return this.c}}
A.Io.prototype={
I1(a,b,c){var s=t.sa.a(B.c.gbn(this.d))
if(s.ac!=null){s.ac=a
return A.bF(null,t.H)}return s.hu(s.kT(a),b,c)},
tG(a){var s=t.sa.a(B.c.gbn(this.d))
if(s.ac!=null){s.ac=a
return}s.dO(s.kT(a))},
II(a,b,c){var s=null,r=new A.ld(this.z,this.as,B.fC,a,b,!0,s,A.jq(!1),$.by())
r.D6(b,s,!0,c,a)
r.D7(b,s,s,!0,c,a)
return r},
aq(a){this.PB(a)
t.sa.a(a).spM(this.as)}}
A.Ip.prototype={}
A.ld.prototype={
z3(a,b,c,d,e,f){return this.PL(a,b,c,d,e,null)},
spM(a){var s,r=this
if(r.av===a)return
s=r.gjA(r)
r.av=a
if(s!=null)r.zl(r.kT(s))},
gqB(){var s=this.ax
s.toString
return Math.max(0,s*(this.av-1)/2)},
pS(a,b){var s=Math.max(0,a-this.gqB())/(b*this.av),r=B.d.AX(s)
if(Math.abs(s-r)<1e-10)return r
return s},
kT(a){var s=this.ax
s.toString
return a*s*this.av+this.gqB()},
gjA(a){var s,r,q=this,p=q.at
if(p!=null)s=!(q.z!=null&&q.Q!=null)
else s=!0
if(s)p=null
else{s=q.ac
if(s==null){p.toString
s=q.z
s.toString
r=q.Q
r.toString
r=A.H(p,s,r)
s=q.ax
s.toString
s=q.pS(r,s)
p=s}else p=s}return p},
BP(){var s,r,q=this,p=q.w,o=p.c
o.toString
o=A.a35(o)
if(o!=null){p=p.c
p.toString
s=q.ac
if(s==null){s=q.at
s.toString
r=q.ax
r.toString
r=q.pS(s,r)
s=r}o.Mh(p,s)}},
LM(){var s,r,q
if(this.at==null){s=this.w
r=s.c
r.toString
r=A.a35(r)
if(r==null)q=null
else{s=s.c
s.toString
q=r.Lo(s)}if(q!=null)this.af=q}},
BO(){var s,r=this,q=r.ac
if(q==null){q=r.at
q.toString
s=r.ax
s.toString
s=r.pS(q,s)
q=s}r.w.e.sn(0,q)
q=$.he.ac$
q===$&&A.b()
q.JE()},
LL(a,b){if(b)this.af=a
else this.dO(this.kT(a))},
o1(a){var s,r,q,p,o=this,n=o.ax
n=n!=null?n:null
if(a===n)return!0
o.PH(a)
s=o.at
s=s!=null?s:null
if(s==null)r=o.af
else if(n===0){q=o.ac
q.toString
r=q}else{n.toString
r=o.pS(s,n)}p=o.kT(r)
o.ac=a===0?r:null
if(p!==s){o.at=p
return!1}return!0},
ke(a){var s
this.PM(a)
if(!(a instanceof A.ld))return
s=a.ac
if(s!=null)this.ac=s},
nZ(a,b){var s=a+this.gqB()
return this.PF(s,Math.max(s,b-this.gqB()))},
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
o=n.av
return new A.Ip(o,l,s,r,q,p)}}
A.qw.prototype={
kh(a){return new A.qw(!1,this.hw(a))},
glM(){return this.b}}
A.p7.prototype={
kh(a){return new A.p7(this.hw(a))},
Uq(a){var s,r
if(a instanceof A.ld){s=a.gjA(a)
s.toString
return s}s=a.at
s.toString
r=a.ax
r.toString
return s/r},
Ur(a,b){var s
if(a instanceof A.ld)return a.kT(b)
s=a.ax
s.toString
return b*s},
lS(a,b){var s,r,q,p,o,n=this
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
if(s)return n.PD(a,b)
q=n.gpC()
p=n.Uq(a)
s=q.c
if(b<-s)p-=0.5
else if(b>s)p+=0.5
o=n.Ur(a,B.d.AX(p))
s=a.at
s.toString
if(o!==s){s=n.gl4()
r=a.at
r.toString
return new A.kO(o,A.zE(s,r-o,b),q)}return null}}
A.vF.prototype={
an(){return new A.P1(B.m)}}
A.P1.prototype={
aC(){this.aV()
this.d=this.a.r.z},
Uh(a){var s,r
this.a.toString
switch(0){case 0:s=a.a5(t.I)
s.toString
r=A.ais(s.w)
this.a.toString
return r}},
L(a){var s,r,q,p=this,o=p.Uh(a),n=p.a.w
n=new A.p7(B.zG.hw(n))
n=new A.qw(!1,null).hw(n)
s=p.a
r=s.Q
s=s.r
q=A.a5Y(a).a1t(!1)
return new A.de(new A.aee(p),A.aot(o,s,r,new A.qw(!1,n),null,q,new A.aef(p,o)),null,t.Bf)}}
A.aee.prototype={
$1(a){if(a.cT$===0)this.a.a.toString
return!1},
$S:24}
A.aef.prototype={
$2(a,b){var s=this.a.a
return new A.np(this.b,b,0,B.Ew,s.as,A.a([new A.Kw(s.r.as,!0,s.z,null)],t.E),null)},
$S:341}
A.i_.prototype={
gmz(){return!0},
gyh(){return!1},
Ih(a){return!0}}
A.IN.prototype={
aG(a){var s=new A.JF(this.d,0,!1,!1,A.aw())
s.aJ()
return s},
aN(a,b){b.sa5v(this.d)
b.sa5U(0)
b.sa0D(!1)
b.sa0C(!1)}}
A.a21.prototype={}
A.a3r.prototype={}
A.DR.prototype={
wW(a){return this.Xa(a)},
Xa(a){var s=0,r=A.a2(t.H),q,p=this,o,n,m
var $async$wW=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:n=A.eh(a.b)
m=p.a
if(!m.P(0,n)){s=1
break}m=m.j(0,n)
m.toString
o=a.a
if(o==="Menu.selectedCallback"){m.ga7L().$0()
m.ga5o()
o=$.ai.ah$.f.f.e
o.toString
A.aux(o,m.ga5o(),t.q)}else if(o==="Menu.opened")m.ga7K(m).$0()
else if(o==="Menu.closed")m.ga7J(m).$0()
case 1:return A.a0(q,r)}})
return A.a1($async$wW,r)}}
A.pc.prototype={
c1(a){return this.f!=a.f}}
A.kM.prototype={
an(){return new A.Qb(null,A.y(t.wb,t.M),null,!0,null,B.m)}}
A.Qb.prototype={
gcM(){return this.a.d},
iF(a,b){},
L(a){return A.aak(this.bl$,this.a.c)}}
A.xB.prototype={
c1(a){return a.f!=this.f}}
A.wl.prototype={
an(){return new A.ze(B.m)}}
A.ze.prototype={
b5(){var s,r=this
r.cE()
s=r.c
s.toString
r.r=A.pp(s)
r.wT()
if(r.d==null){r.a.toString
r.d=!1}},
aX(a){this.bo(a)
this.wT()},
gFk(){this.a.toString
return!1},
wT(){var s,r=this
if(r.gFk()&&!r.w){r.w=!0;++$.kL.bp$
s=$.he.ac$
s===$&&A.b()
s.ga6w().aE(new A.aeK(r),t.P)}},
YG(){var s,r=this
r.e=!1
r.f=null
s=$.he.ac$
s===$&&A.b()
s.G(0,r.gxi())
r.wT()},
m(){if(this.e){var s=$.he.ac$
s===$&&A.b()
s.G(0,this.gxi())}this.aQ()},
L(a){var s,r,q=this,p=q.d
p.toString
if(p&&q.gFk())return B.dW
p=q.r
if(p==null)p=q.f
s=q.a
r=s.d
return A.aak(p,new A.kM(s.c,r,null))}}
A.aeK.prototype={
$1(a){var s,r=this.a
r.w=!1
if(r.c!=null){s=$.he.ac$
s===$&&A.b()
s.Y(0,r.gxi())
r.aw(new A.aeJ(r,a))}$.kL.HZ()},
$S:342}
A.aeJ.prototype={
$0(){var s=this.a
s.f=this.b
s.e=!0
s.d=!1},
$S:0}
A.dB.prototype={
glZ(a){return!0},
m(){var s=this,r=s.c
if(r!=null){r=r.fn$.u(0,s)
r.toString
s.G(0,r)
s.c=s.b=null}s.dX()
s.a=!0}}
A.ia.prototype={
yS(a){},
mD(a,b){var s,r,q=this,p=q.bl$
p=p==null?null:J.e1(p.giU(),b)
s=p===!0
r=s?a.mi(J.aO(q.bl$.giU(),b)):a.rM()
if(a.b==null){a.b=b
a.c=q
p=new A.a52(q,a)
a.Y(0,p)
q.fn$.l(0,a,p)}a.Ka(r)
if(!s&&a.glZ(a)&&q.bl$!=null)q.xO(a)},
ou(){var s,r,q=this
if(q.fo$!=null){s=q.bl$
s=s==null?null:s.e
s=s==q.gcM()||q.gmH()}else s=!0
if(s)return
r=q.bl$
if(q.lH(q.fo$,!1))if(r!=null)r.m()},
gmH(){var s,r,q=this
if(q.e1$)return!0
if(q.gcM()==null)return!1
s=q.c
s.toString
r=A.pp(s)
if(r!=q.fo$){if(r==null)s=null
else{s=r.c
s=s==null?null:s.d
s=s===!0}s=s===!0}else s=!1
return s},
lH(a,b){var s,r,q=this
if(q.gcM()==null||a==null)return q.GB(null,b)
if(b||q.bl$==null){s=q.gcM()
s.toString
return q.GB(a.a0L(s,q),b)}s=q.bl$
s.toString
r=q.gcM()
r.toString
s.a6c(r)
r=q.bl$
r.toString
a.ic(r)
return!1},
GB(a,b){var s,r=this,q=r.bl$
if(a==q)return!1
r.bl$=a
if(!b){if(a!=null){s=r.fn$
new A.b8(s,A.n(s).h("b8<1>")).X(0,r.ga_i())}r.yS(q)}return!0},
xO(a){var s,r=a.glZ(a),q=this.bl$
if(r){if(q!=null){r=a.b
r.toString
s=a.mL()
if(!J.f(J.aO(q.giU(),r),s)||!J.e1(q.giU(),r)){J.cG(q.giU(),r,s)
q.lr()}}}else if(q!=null){r=a.b
r.toString
q.a66(0,r,t.K)}}}
A.a52.prototype={
$0(){var s=this.a
if(s.bl$==null)return
s.xO(this.b)},
$S:0}
A.agg.prototype={
$2(a,b){if(!a.a)a.G(0,b)},
$S:33}
A.Sr.prototype={
aX(a){this.bo(a)
this.ou()},
b5(){var s,r,q,p,o=this
o.cE()
s=o.bl$
r=o.gmH()
q=o.c
q.toString
q=A.pp(q)
o.fo$=q
p=o.lH(q,r)
if(r){o.iF(s,o.e1$)
o.e1$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.fn$.X(0,new A.agg())
s=r.bl$
if(s!=null)s.m()
r.bl$=null
r.aQ()}}
A.bV.prototype={
sn(a,b){var s=this.y
if(b==null?s!=null:b!==s){this.y=b
this.yU(s)}},
Ka(a){this.y=a}}
A.hp.prototype={
rM(){return this.cy},
yU(a){this.aA()},
mi(a){return A.n(this).h("hp.T").a(a)},
mL(){var s=this.y
return s==null?A.n(this).h("bV.T").a(s):s}}
A.zd.prototype={
mi(a){return this.Qm(a)},
mL(){var s=this.Qn()
s.toString
return s}}
A.wh.prototype={}
A.wg.prototype={}
A.agh.prototype={
$2(a,b){if(!a.a)a.G(0,b)},
$S:33}
A.pr.prototype={}
A.JW.prototype={
an(){return new A.r0(new A.Q8($.by()),null,A.y(t.wb,t.M),null,!0,null,B.m,this.$ti.h("r0<1>"))}}
A.wm.prototype={
E(){return"RouteInformationReportingType."+this.b}}
A.r0.prototype={
gcM(){return this.a.r},
aC(){var s,r=this
r.aV()
s=r.a.c
if(s!=null)s.Y(0,r.gqx())
r.a.f.a_O(r.gwt())
r.a.e.Y(0,r.gwE())},
iF(a,b){var s,r,q=this,p=q.f
q.mD(p,"route")
s=p.y
r=s==null
if((r?A.n(p).h("bV.T").a(s):s)!=null){p=r?A.n(p).h("bV.T").a(s):s
p.toString
q.qR(p,new A.aeZ(q))}else{p=q.a.c
if(p!=null)q.qR(p.a,new A.af_(q))}},
Z5(){var s=this
if(s.w||s.a.c==null)return
s.w=!0
$.bP.cy$.push(s.gYJ())},
YK(a){var s,r,q,p,o=this
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
if(q!==B.U1)p=q===B.lu&&r.b.a==s.a
else p=!0
B.fx.tD("selectMultiEntryHistory",t.H)
q=s.a
q.toString
A.aoM(q,p,s.b)
r.b=r.a=s}o.e=B.lu},
YS(){this.a.e.ga7y()
this.a.toString
return null},
qJ(){var s=this
s.f.sn(0,s.YS())
if(s.e==null)s.e=B.lu
s.Z5()},
b5(){var s,r=this
r.r=!0
r.R5()
s=r.a.c
if(s!=null&&r.r)r.qR(s.a,new A.aeY(r))
r.r=!1
r.qJ()},
aX(a){var s,r,q,p=this
p.R6(a)
s=p.a
r=a.c
q=s.c==r
if(q)s.f===a.f
p.d=new A.B()
if(!q){s=r==null
if(!s)r.G(0,p.gqx())
q=p.a.c
if(q!=null)q.Y(0,p.gqx())
s=s?null:r.a
r=p.a.c
if(s!=(r==null?null:r.a))p.F4()}s=a.f
if(p.a.f!==s){r=p.gwt()
s.a68(r)
p.a.f.a_O(r)}p.a.toString
s=p.gwE()
a.e.G(0,s)
p.a.e.Y(0,s)
p.qJ()},
m(){var s=this,r=s.a.c
if(r!=null)r.G(0,s.gqx())
s.a.f.a68(s.gwt())
s.a.e.G(0,s.gwE())
s.d=null
s.R7()},
qR(a,b){var s,r,q=this
q.r=!1
q.d=new A.B()
s=q.a.d
s.toString
r=q.c
r.toString
s.a7O(a,r).aE(q.Yr(q.d,b),t.H)},
Yr(a,b){return new A.aeW(this,a,b)},
F4(){var s=this
s.r=!0
s.qR(s.a.c.a,new A.aeT(s))},
UK(){var s=this
s.d=new A.B()
return s.a.e.a7P().aE(s.VR(s.d),t.y)},
VR(a){return new A.aeU(this,a)},
Gi(){this.aw(new A.aeX())
this.qJ()
return new A.bp(null,t.E8)},
VS(){this.aw(new A.aeV())
this.qJ()},
L(a){var s=this.bl$,r=this.a,q=r.c,p=r.f,o=r.d
r=r.e
return A.aak(s,new A.Qg(q,p,o,r,this,new A.hA(r.gIc(),null),null))}}
A.aeZ.prototype={
$0(){return this.a.a.e.ga7n()},
$S(){return this.a.$ti.h("ad<~>(1)()")}}
A.af_.prototype={
$0(){return this.a.a.e.ga7m()},
$S(){return this.a.$ti.h("ad<~>(1)()")}}
A.aeY.prototype={
$0(){return this.a.a.e.gNe()},
$S(){return this.a.$ti.h("ad<~>(1)()")}}
A.aeW.prototype={
$1(a){var s=0,r=A.a2(t.H),q,p=this,o,n
var $async$$1=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:o=p.a
n=p.b
if(o.d!=n){s=1
break}s=3
return A.a4(p.c.$0().$1(a),$async$$1)
case 3:if(o.d==n)o.Gi()
case 1:return A.a0(q,r)}})
return A.a1($async$$1,r)},
$S(){return this.a.$ti.h("ad<~>(1)")}}
A.aeT.prototype={
$0(){return this.a.a.e.gNe()},
$S(){return this.a.$ti.h("ad<~>(1)()")}}
A.aeU.prototype={
$1(a){var s=this.a
if(this.b!=s.d)return new A.bp(!0,t.a9)
s.Gi()
return new A.bp(a,t.a9)},
$S:344}
A.aeX.prototype={
$0(){},
$S:0}
A.aeV.prototype={
$0(){},
$S:0}
A.Qg.prototype={
c1(a){if(this.f==a.f)this.r===a.r
return!0}}
A.Q8.prototype={
rM(){return null},
yU(a){this.aA()},
mi(a){var s
if(a==null)return null
t.DI.a(a)
s=J.bH(a)
return new A.pr(A.co(s.gJ(a)),s.gR(a))},
mL(){var s,r=this,q=r.y,p=q==null
if((p?A.n(r).h("bV.T").a(q):q)==null)q=null
else{s=(p?A.n(r).h("bV.T").a(q):q).a
q=[s,(p?A.n(r).h("bV.T").a(q):q).b]}return q}}
A.rc.prototype={
aX(a){this.bo(a)
this.ou()},
b5(){var s,r,q,p,o=this
o.cE()
s=o.bl$
r=o.gmH()
q=o.c
q.toString
q=A.pp(q)
o.fo$=q
p=o.lH(q,r)
if(r){o.iF(s,o.e1$)
o.e1$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.fn$.X(0,new A.agh())
s=r.bl$
if(s!=null)s.m()
r.bl$=null
r.aQ()}}
A.p5.prototype={
gu_(){return this.e},
jo(){var s,r=this,q=A.ajS(r.gSa(),!1)
r.k4=q
r.gpa()
s=A.ajS(r.gSc(),!0)
r.p1=s
B.c.I(r.e,A.a([q,s],t.tD))
r.Py()},
kp(a){var s,r=this
r.Pt(a)
s=r.at.Q
s===$&&A.b()
if(s===B.K&&!r.Q)r.a.Jz(r)
return!0},
m(){B.c.a_(this.e)
this.Px()}}
A.dZ.prototype={
gbO(a){return this.as},
gBT(){return this.ax},
Wc(a){var s,r=this
switch(a.a){case 3:s=r.e
if(s.length!==0){s=B.c.gJ(s)
r.gmz()
s.smz(!0)}s=r.z
if(s!=null){s.a.$0()
s.a=null}r.z=null
break
case 1:case 2:s=r.e
if(s.length!==0)B.c.gJ(s).smz(!1)
if(r.z==null)r.z=$.bP.a6o(B.Fu)
break
case 0:if(!r.ga4p()){r.a.Jz(r)
r.Q=!0
s=r.z
if(s!=null){s.a.$0()
s.a=null}r.z=null}break}},
jo(){var s=this,r=s.gM4(s),q=s.gM4(s),p=s.glT(),o=s.a
o.toString
o=s.at=A.e2(p,r,q,null,o)
o.bx()
p=o.c5$
p.b=!0
p.a.push(s.gF5())
s.as=o
s.OT()
p=s.as
if(p.gb1(p)===B.Z&&s.e.length!==0){p=B.c.gJ(s.e)
s.gmz()
p.smz(!0)}},
oq(){this.Pv()
return this.at.cV(0)},
oo(){this.Pq()
var s=this.at
s.sn(0,s.b)},
yQ(a){var s,r
if(a instanceof A.dZ){s=this.at
s.toString
r=a.at.x
r===$&&A.b()
s.sn(0,r)}this.Pw(a)},
kp(a){this.ch=a
this.at.h4(0)
this.OR(a)
return!0},
lW(a){this.Hy(a)
this.Pu(a)},
op(a){this.Hy(a)
this.Pr(a)},
Hy(a){var s,r,q,p,o,n,m,l=this,k={},j=l.CW
l.CW=null
if(a instanceof A.dZ&&l.Ih(a)&&!0){s=l.ax.c
if(s!=null){r=s instanceof A.nk?s.a:s
r.toString
q=a.as
q.toString
p=r.gn(r)
o=q.x
o===$&&A.b()
if(!J.f(p,o)){p=q.Q
p===$&&A.b()
p=p===B.Z||p===B.K}else p=!0
o=a.y.a
if(p)l.lE(q,o)
else{k.a=null
p=new A.aaf(l,q,a)
l.CW=new A.aad(k,q,p)
q.bx()
n=q.c5$
n.b=!0
n.a.push(p)
m=A.akn(r,q,new A.aae(k,l,a))
k.a=m
l.lE(m,o)}}else l.lE(a.as,a.y.a)}else l.Zo(B.ce)
if(j!=null)j.$0()},
lE(a,b){this.ax.saL(0,a)
if(b!=null)b.aE(new A.aac(this,a),t.P)},
Zo(a){return this.lE(a,null)},
m(){var s=this,r=s.as
if(r!=null)r.c_(s.gF5())
r=s.z
if(r!=null){r.a.$0()
r.a=null}s.z=null
r=s.at
if(r!=null)r.m()
s.y.bT(0,s.ch)
s.OS()},
glT(){return"TransitionRoute"},
i(a){return"TransitionRoute(animation: "+A.h(this.at)+")"}}
A.aaf.prototype={
$1(a){var s,r
switch(a.a){case 3:case 0:s=this.a
s.lE(this.b,this.c.y.a)
r=s.CW
if(r!=null){r.$0()
s.CW=null}break
case 1:case 2:break}},
$S:4}
A.aad.prototype={
$0(){this.b.c_(this.c)
var s=this.a.a
if(s!=null)s.m()},
$S:0}
A.aae.prototype={
$0(){var s,r=this.b
r.lE(this.a.a.a,this.c.y.a)
s=r.CW
if(s!=null){s.$0()
r.CW=null}},
$S:0}
A.aac.prototype={
$1(a){var s=this.a.ax,r=this.b
if(s.c==r){s.saL(0,B.ce)
if(r instanceof A.nk)r.m()}},
$S:7}
A.G_.prototype={
gMe(){var s=this.kw$
return s!=null&&s.length!==0}}
A.N7.prototype={
iw(a,b){A.a2c(this.e,t.z).gyh()
return!1},
dc(a){return A.ajP(this.e).KM()}}
A.yK.prototype={
c1(a){var s=this
return s.f!==a.f||s.r!==a.r||s.w!==a.w||s.x!==a.x}}
A.qN.prototype={
an(){return new A.nE(A.ajs(!0,B.a_l.i(0)+" Focus Scope",!1),A.ak4(),B.m,this.$ti.h("nE<1>"))}}
A.nE.prototype={
aC(){var s,r,q=this
q.aV()
s=A.a([],t.ro)
r=q.a.c.fy
if(r!=null)s.push(r)
r=q.a.c.go
if(r!=null)s.push(r)
q.e=new A.yI(s)
if(q.a.c.gkE()){q.a.c.a.a.toString
s=!0}else s=!1
if(s){s=q.a.c.a.x.gdL()
if(s!=null)s.mU(q.f)}},
aX(a){var s,r=this
r.bo(a)
if(r.a.c.gkE()){r.a.c.a.a.toString
s=!0}else s=!1
if(s){s=r.a.c.a.x.gdL()
if(s!=null)s.mU(r.f)}},
b5(){this.cE()
this.d=null},
U4(){this.aw(new A.adU(this))},
m(){this.f.m()
this.aQ()},
gGH(){var s=this.a.c.fy
if((s==null?null:s.gb1(s))!==B.ak){s=this.a.c.a
s=s==null?null:s.CW.a
s=s===!0}else s=!0
return s},
L(a){var s,r,q=this,p=null,o=q.a.c,n=o.gkE(),m=q.a.c
if(!m.gtx()){m=m.kw$
m=m!=null&&m.length!==0}else m=!0
s=q.a.c
s=s.gtx()||s.z9$>0
r=q.a.c
return A.lA(o.c,new A.adY(q),new A.yK(n,m,s,o,new A.vz(r.fx,new A.p8(new A.hA(new A.adZ(q),p),r.k3,p),p),p))}}
A.adU.prototype={
$0(){this.a.d=null},
$S:0}
A.adY.prototype={
$2(a,b){var s=this.a.a.c.c.a
b.toString
return new A.kM(b,s,null)},
$S:345}
A.adZ.prototype={
$1(a){var s,r=null,q=A.aW([B.Ce,new A.N7(a,new A.bk(A.a([],t.B8),t.dc))],t.n,t.nT),p=this.a,o=p.e
o===$&&A.b()
s=p.d
if(s==null)s=p.d=new A.i8(new A.hA(new A.adW(p),r),p.a.c.k2)
return A.Ty(q,new A.pc(p.r,B.ca,B.V_,A.an7(!1,new A.i8(A.lA(o,new A.adX(p),s),r),r,r,p.f),r))},
$S:346}
A.adX.prototype={
$2(a,b){var s,r,q=this.a,p=q.a.c,o=p.fy
o.toString
s=p.go
s.toString
r=p.a
r=r==null?null:r.CW
if(r==null)r=A.jq(!1)
return p.If(a,o,s,A.lA(r,new A.adV(q),b))},
$S:27}
A.adV.prototype={
$2(a,b){var s=this.a,r=s.gGH()
s.f.sco(!r)
return new A.hO(r,null,b,null)},
$S:347}
A.adW.prototype={
$1(a){var s,r=this.a.a.c,q=r.fy
q.toString
s=r.go
s.toString
return r.a0q(a,q,s)},
$S:14}
A.kx.prototype={
aw(a){var s,r=this.k1
if(r.gbu()!=null){r=r.gbu()
if(r.a.c.gkE())if(!r.gGH()){r.a.c.a.a.toString
s=!0}else s=!1
else s=!1
if(s){s=r.a.c.a.x.gdL()
if(s!=null)s.mU(r.f)}r.aw(a)}else a.$0()},
If(a,b,c,d){return d},
jo(){var s=this
s.PY()
s.fy=A.Ja(A.dZ.prototype.gbO.call(s,s))
s.go=A.Ja(A.dZ.prototype.gBT.call(s))},
oq(){var s,r=this,q=r.k1
if(q.gbu()!=null){r.a.a.toString
s=!0}else s=!1
if(s){s=r.a.x.gdL()
if(s!=null)s.mU(q.gbu().f)}return r.PX()},
oo(){var s,r=this,q=r.k1
if(q.gbu()!=null){r.a.a.toString
s=!0}else s=!1
if(s){s=r.a.x.gdL()
if(s!=null)s.mU(q.gbu().f)}r.PV()},
stT(a){var s,r=this
if(r.fx===a)return
r.aw(new A.a2d(r,a))
s=r.fy
s.toString
s.saL(0,r.fx?B.cX:A.dZ.prototype.gbO.call(r,r))
s=r.go
s.toString
s.saL(0,r.fx?B.ce:A.dZ.prototype.gBT.call(r))
r.o7()},
fA(){var s=0,r=A.a2(t.ij),q,p=this,o,n,m,l
var $async$fA=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:p.k1.gbu()
o=A.aA(p.id,!0,t.CQ),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}l=J
s=6
return A.a4(o[m].$0(),$async$fA)
case 6:if(!l.f(b,!0)){q=B.U2
s=1
break}case 4:++m
s=3
break
case 5:q=p.Q3()
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$fA,r)},
yL(a){this.Ps(a)
this.o7()},
o7(){var s,r=this
r.Pp()
r.aw(new A.a2b())
s=r.k4
s===$&&A.b()
s.h1()
s=r.p1
s===$&&A.b()
r.gpa()
s.spa(!0)},
rD(){this.Po()
var s=this.k4
s===$&&A.b()
s.h1()
s=this.k1
if(s.gbu()!=null)s.gbu().U4()},
Sb(a){var s,r,q=this,p=null
q.ga0h()
q.gyh()
s=q.ga0i()
r=q.fy
if(r.gb1(r)!==B.ak){r=q.fy
r=r.gb1(r)===B.K}else r=!0
q.gyh()
return new A.hO(r,p,new A.ve(p,!1,p,!0,s,p),p)},
Sd(a){var s=this,r=null,q=s.ok
return q==null?s.ok=A.dK(r,new A.qN(s,s.k1,A.n(s).h("qN<1>")),!1,r,!1,r,r,r,r,r,r,r,r,r,r,r,B.TB,r,r,r,r):q},
i(a){return"ModalRoute("+this.b.i(0)+", animation: "+A.h(this.as)+")"}}
A.a2d.prototype={
$0(){this.a.fx=this.b},
$S:0}
A.a2b.prototype={
$0(){},
$S:0}
A.qM.prototype={
fA(){var s=0,r=A.a2(t.ij),q,p=this,o
var $async$fA=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:o=p.kw$
if(o!=null&&o.length!==0){q=B.Bf
s=1
break}q=p.Pz()
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$fA,r)},
kp(a){var s,r,q=this,p=q.kw$
if(p!=null&&p.length!==0){s=p.pop()
s.b=null
s.a7s()
r=s.c&&--q.z9$===0
if(q.kw$.length===0||r)q.o7()
return!1}q.PW(a)
return!0}}
A.K4.prototype={
L(a){var s,r,q,p=t.l,o=a.a5(p).f.f,n=Math.max(o.a,0),m=this.d,l=m?o.b:0
l=Math.max(l,0)
s=Math.max(o.c,0)
r=this.f
q=r?o.d:0
return new A.hZ(new A.bq(n,l,s,Math.max(q,0)),new A.ff(a.a5(p).f.Lx(r,!0,!0,m),this.x,null),null)}}
A.K8.prototype={
LD(){},
J0(a,b){if(b!=null)b.d4(new A.wz(null,a,b,0))},
J1(a,b,c){b.d4(A.ak5(b,null,null,a,c))},
t_(a,b,c){b.d4(new A.hY(null,c,0,a,b,0))},
J_(a,b){b.d4(new A.je(null,a,b,0))},
o_(){},
m(){},
i(a){return"<optimized out>#"+A.bM(this)}}
A.kh.prototype={
o_(){this.a.fC(0)},
gi1(){return!1},
gh_(){return!1},
ged(){return 0}}
A.a_X.prototype={
gi1(){return!1},
gh_(){return!1},
ged(){return 0},
m(){this.b.$0()
this.qb()}}
A.a5Z.prototype={
RU(a,b){var s,r,q=this
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
bf(a,b){var s,r,q,p,o=this
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
p=o.RU(s,q)
if(p===0)return
s=o.a
if(A.ahx(s.w.a.c))p=-p
s.Bj(p>0?B.lw:B.lx)
r=s.at
r.toString
s.vg(r-s.r.yd(s,p))},
m(){this.x=null
this.b.$0()},
i(a){return"<optimized out>#"+A.bM(this)}}
A.Yd.prototype={
J0(a,b){var s=t.hb.a(this.b.x)
if(b!=null)b.d4(new A.wz(s,a,b,0))},
J1(a,b,c){b.d4(A.ak5(b,null,t.mF.a(this.b.x),a,c))},
t_(a,b,c){b.d4(new A.hY(t.mF.a(this.b.x),c,0,a,b,0))},
J_(a,b){var s=this.b.x
b.d4(new A.je(s instanceof A.fU?s:null,a,b,0))},
gi1(){var s=this.b
return(s==null?null:s.w)!==B.dJ},
gh_(){return!0},
ged(){return 0},
m(){this.b=null
this.qb()},
i(a){return"<optimized out>#"+A.bM(this)+"("+A.h(this.b)+")"}}
A.Bg.prototype={
LD(){var s=this.a,r=this.b
r===$&&A.b()
s.fC(r.ged())},
o_(){var s=this.a,r=this.b
r===$&&A.b()
s.fC(r.ged())},
xs(){var s=this.b
s===$&&A.b()
s=s.x
s===$&&A.b()
if(!(Math.abs(this.a.vg(s))<1e-10)){s=this.a
s.fk(new A.kh(s))}},
w8(){this.a.fC(0)},
t_(a,b,c){var s=this.b
s===$&&A.b()
b.d4(new A.hY(null,c,s.ged(),a,b,0))},
gh_(){return!0},
ged(){var s=this.b
s===$&&A.b()
return s.ged()},
m(){var s=this.b
s===$&&A.b()
s.m()
this.qb()},
i(a){var s=A.bM(this),r=this.b
r===$&&A.b()
return"<optimized out>#"+s+"("+r.i(0)+")"},
gi1(){return this.c}}
A.Ev.prototype={
xs(){var s=this.a,r=this.c
r===$&&A.b()
r=r.x
r===$&&A.b()
if(s.vg(r)!==0){s=this.a
s.fk(new A.kh(s))}},
w8(){var s=this.a,r=this.c
r===$&&A.b()
s.fC(r.ged())},
t_(a,b,c){var s=this.c
s===$&&A.b()
b.d4(new A.hY(null,c,s.ged(),a,b,0))},
gi1(){return!0},
gh_(){return!0},
ged(){var s=this.c
s===$&&A.b()
return s.ged()},
m(){var s=this.b
s===$&&A.b()
s.eN(0)
s=this.c
s===$&&A.b()
s.m()
this.qb()},
i(a){var s=A.bM(this),r=this.c
r===$&&A.b()
return"<optimized out>#"+s+"("+r.i(0)+")"}}
A.wt.prototype={
px(a,b,c,d){var s,r=this
if(b.a==null){s=$.eS.fV$
s===$&&A.b()
s=s.P(0,c)}else s=!0
if(s){r.b.px(a,b,c,d)
return}s=r.a
if(s.gar(s)==null)return
s=s.gar(s)
s.toString
if(A.az8(s)){$.bP.pZ(new A.a5U(r,a,b,c,d))
return}r.b.px(a,b,c,d)},
p6(a,b,c){return this.b.p6(0,b,c)},
p7(a,b){return this.b.p7(a,b)},
tS(a){return this.b.tS(a)}}
A.a5U.prototype={
$1(a){var s=this
A.dQ(new A.a5T(s.a,s.b,s.c,s.d,s.e))},
$S:2}
A.a5T.prototype={
$0(){var s=this
return s.a.px(s.b,s.c,s.d,s.e)},
$S:0}
A.ro.prototype={
E(){return"AndroidOverscrollIndicator."+this.b}}
A.K9.prototype={
a1C(a,b,c,d,e,f){return new A.ag8(this,f,c!==!1,d,e,b,a)},
a1t(a){return this.a1C(null,null,null,null,null,a)},
jO(a){return A.lp()},
gyZ(){return B.BA},
rA(a,b,c){var s=null
switch(this.jO(a)){case B.bk:case B.b9:case B.bl:return A.ayM(b,c.b,B.cg,s,s,A.AN(),B.u,s,s,s,s,B.d3,s)
case B.ay:case B.bj:case B.az:return b}},
rw(a,b,c){var s
switch(this.jO(a)){case B.az:case B.bk:case B.b9:case B.bl:s=1
break
case B.ay:s=2
break
case B.bj:s=3
break
default:s=null
break}if(s)c$0:for(;!0;)switch(s){case 1:return b
case 2:switch(1){case 1:break}if(2)c$1:for(;!0;)switch(2){case 1:return new A.pQ(c.a,B.T,b,null)
case 2:s=3
continue c$0}break c$0
case 3:return new A.oB(c.a,B.k,b,null)}},
us(a){switch(this.jO(a)){case B.az:return new A.a5V()
case B.b9:return new A.a5W()
case B.ay:case B.bj:case B.bk:case B.bl:return new A.a5X()}},
kU(a){switch(this.jO(a)){case B.az:return B.D2
case B.b9:return B.D3
case B.ay:case B.bj:case B.bk:case B.bl:return B.ED}},
i(a){return"ScrollBehavior"}}
A.a5V.prototype={
$1(a){return A.awR(a.gci(a))},
$S:348}
A.a5W.prototype={
$1(a){var s=a.gci(a),r=t.pa
return new A.p_(A.aR(20,null,!1,r),s,A.aR(20,null,!1,r))},
$S:349}
A.a5X.prototype={
$1(a){return new A.hj(a.gci(a),A.aR(20,null,!1,t.pa))},
$S:121}
A.ag8.prototype={
gyZ(){var s=this.f
return s==null?B.BA:s},
rw(a,b,c){var s=this.a.rw(a,b,c)
return s},
rA(a,b,c){if(this.b)return this.a.rA(a,b,c)
return b},
kU(a){var s=this.a.kU(a)
return s},
us(a){return this.a.us(a)},
i(a){return"_WrappedScrollBehavior"}}
A.wu.prototype={
c1(a){var s
if(A.A(this.f)===A.A(a.f))s=!1
else s=!0
return s}}
A.pw.prototype={
hu(a,b,c){return this.a0b(a,b,c)},
a0b(a,b,c){var s=0,r=A.a2(t.H),q=this,p,o,n
var $async$hu=A.Y(function(d,e){if(d===1)return A.a_(e,r)
while(true)switch(s){case 0:n=A.a([],t.iJ)
for(p=q.d,o=0;o<p.length;++o)n.push(p[o].hu(a,b,c))
s=2
return A.a4(A.u7(n,t.H),$async$hu)
case 2:return A.a0(null,r)}})
return A.a1($async$hu,r)},
aq(a){this.d.push(a)
a.Y(0,this.geq())},
om(a,b){b.G(0,this.geq())
B.c.u(this.d,b)},
m(){var s,r,q,p
for(s=this.d,r=s.length,q=this.geq(),p=0;p<s.length;s.length===r||(0,A.P)(s),++p)s[p].G(0,q)
this.dX()},
II(a,b,c){return A.az7(b,null,0,!0,c,a)},
i(a){var s=A.a([],t.s),r=this.d,q=r.length
if(q===0)s.push("no clients")
else if(q===1){r=B.c.gbn(r).at
r.toString
s.push("one client, offset "+B.d.M(r,1))}else s.push(""+q+" clients")
return"<optimized out>#"+A.bM(this)+"("+B.c.b4(s,", ")+")"}}
A.hd.prototype={
fQ(){var s=this,r=null,q=s.gzv()?s.gf0():r,p=s.gzv()?s.gf_():r,o=s.gJZ()?s.gcj():r,n=s.gK0()?s.gpL():r,m=s.gfN()
return new A.tY(q,p,o,n,m)},
gAA(){var s=this
return s.gcj()<s.gf0()||s.gcj()>s.gf_()},
gI6(){var s=this
return s.gcj()===s.gf0()||s.gcj()===s.gf_()},
gkv(){var s=this
return s.gpL()-A.H(s.gf0()-s.gcj(),0,s.gpL())-A.H(s.gcj()-s.gf_(),0,s.gpL())}}
A.tY.prototype={
gf0(){var s=this.a
s.toString
return s},
gf_(){var s=this.b
s.toString
return s},
gzv(){return this.a!=null&&this.b!=null},
gcj(){var s=this.c
s.toString
return s},
gJZ(){return this.c!=null},
gpL(){var s=this.d
s.toString
return s},
gK0(){return this.d!=null},
i(a){var s=this
return"FixedScrollMetrics("+B.d.M(Math.max(s.gcj()-s.gf0(),0),1)+"..["+B.d.M(s.gkv(),1)+"].."+B.d.M(Math.max(s.gf_()-s.gcj(),0),1)+")"},
gfN(){return this.e}}
A.Nt.prototype={}
A.eb.prototype={}
A.LE.prototype={
L_(a){if(t.bx.b(a))++a.cT$
return!1}}
A.dX.prototype={
ck(a){this.QF(a)
a.push(this.a.i(0))}}
A.wz.prototype={
ck(a){var s
this.n8(a)
s=this.d
if(s!=null)a.push(s.i(0))}}
A.ib.prototype={
ck(a){var s
this.n8(a)
a.push("scrollDelta: "+A.h(this.e))
s=this.d
if(s!=null)a.push(s.i(0))},
gJ4(){return this.d}}
A.hY.prototype={
ck(a){var s,r=this
r.n8(a)
a.push("overscroll: "+B.d.M(r.e,1))
a.push("velocity: "+B.d.M(r.f,1))
s=r.d
if(s!=null)a.push(s.i(0))}}
A.je.prototype={
ck(a){var s
this.n8(a)
s=this.d
if(s!=null)a.push(s.i(0))},
gJ4(){return this.d}}
A.Ly.prototype={
ck(a){this.n8(a)
a.push("direction: "+this.d.i(0))}}
A.zn.prototype={
ck(a){var s,r
this.v7(a)
s=this.cT$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.zm.prototype={
c1(a){return this.f!==a.f}}
A.la.prototype={
a4L(a,b){return this.d.$1(b)}}
A.wx.prototype={
an(){return new A.wy(new A.uG(t.uk),B.m)}}
A.wy.prototype={
G(a,b){var s,r,q,p=this.d
p.toString
p=A.aAz(p)
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
FI(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.d
if(i.b===0)return
p=A.aA(i,!0,t.cS)
for(i=p.length,o=0;o<i;++o){s=p[o]
try{if(s.a!=null)J.aud(s,a)}catch(n){r=A.ae(n)
q=A.au(n)
m=j instanceof A.bR?A.cR(j):null
l=A.bo("while dispatching notifications for "+A.aD(m==null?A.aT(j):m).i(0))
k=$.fJ()
if(k!=null)k.$1(new A.bJ(r,q,"widget library",l,new A.a6_(j),!1))}}},
L(a){var s=this
return new A.de(new A.a60(s),new A.de(new A.a61(s),new A.zm(s,s.a.c,null),null,t.Bf),null,t.iY)},
m(){this.d=null
this.aQ()}}
A.a6_.prototype={
$0(){var s=null,r=this.a
return A.a([A.hE("The "+A.A(r).i(0)+" sending notification was",r,!0,B.aJ,s,!1,s,s,B.ap,s,!1,!0,!0,B.aW,s,t.Ec)],t.F)},
$S:16}
A.a60.prototype={
$1(a){var s=new A.Mu(null,null,a.a,a.b,0)
s.cT$=a.cT$
this.a.FI(s)
return!1},
$S:66}
A.a61.prototype={
$1(a){this.a.FI(a)
return!1},
$S:24}
A.Mu.prototype={}
A.wv.prototype={
E(){return"ScrollDecelerationRate."+this.b}}
A.mY.prototype={
hw(a){var s=this.a
s=s==null?null:s.kh(a)
return s==null?a:s},
kh(a){return new A.mY(this.hw(a))},
yd(a,b){var s=this.a
if(s==null)return b
return s.yd(a,b)},
jS(a){var s,r=this.a
if(r==null){r=a.at
r.toString
if(r===0){r=a.z
r.toString
s=a.Q
s.toString
s=r!==s
r=s}else r=!0
return r}return r.jS(a)},
Lr(a,b,c){var s=this.a
if(s==null){$.ai.toString
s=$.cq().gkL()
return Math.abs(a)>Math.max(Math.abs(s.a),Math.abs(s.b))}return s.Lr(a,b,c)},
nY(a,b){var s=this.a
if(s==null)return 0
return s.nY(a,b)},
rp(a,b,c,d){var s=this.a
if(s==null){s=b.c
s.toString
return s}return s.rp(a,b,c,d)},
lS(a,b){var s=this.a
if(s==null)return null
return s.lS(a,b)},
gl4(){var s=this.a
s=s==null?null:s.gl4()
return s==null?$.ash():s},
gpC(){var s=this.a
s=s==null?null:s.gpC()
return s==null?$.asi():s},
gA0(){var s=this.a
s=s==null?null:s.gA0()
return s==null?18:s},
gtP(){var s=this.a
s=s==null?null:s.gtP()
return s==null?50:s},
gpb(){var s=this.a
s=s==null?null:s.gpb()
return s==null?8000:s},
ym(a){var s=this.a
if(s==null)return 0
return s.ym(a)},
gz_(){var s=this.a
return s==null?null:s.gz_()},
glM(){return!0},
i(a){var s=this.a
if(s==null)return"ScrollPhysics"
return"ScrollPhysics -> "+s.i(0)}}
A.Je.prototype={
kh(a){return new A.Je(this.hw(a))},
rp(a,b,c,d){var s,r,q,p,o,n,m,l
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
return p+(o-q)}}l=this.PC(a,b,c,d)
if(r){q=b.b
q.toString
l=A.H(l,p,q)}return l}}
A.rM.prototype={
kh(a){return new A.rM(this.b,this.hw(a))},
JM(a){switch(this.b.a){case 1:return 0.07*Math.pow(1-a,2)
case 0:return 0.52*Math.pow(1-a,2)}},
yd(a,b){var s,r,q,p,o,n,m
if(!a.gAA())return b
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
m=this.JM((o-Math.abs(b))/s)}else{s.toString
m=this.JM(o/s)}return J.ei(b)*A.auN(o,Math.abs(b),m)},
nY(a,b){return 0},
lS(a,b){var s,r,q,p,o,n,m,l=this.gpC()
if(Math.abs(b)>=l.c||a.gAA()){switch(this.b.a){case 1:s=1400
break
case 0:s=0
break
default:s=null}r=this.gl4()
q=a.at
q.toString
p=a.z
p.toString
o=a.Q
o.toString
n=new A.Uf(p,o,r,l)
if(q<p){n.f=new A.kO(p,A.zE(r,q-p,b),B.bJ)
n.r=-1/0}else if(q>o){n.f=new A.kO(o,A.zE(r,q-o,b),B.bJ)
n.r=-1/0}else{q=n.e=A.awD(0.135,q,b,s)
m=q.gte()
if(b>0&&m>o){p=q.LU(o)
n.r=p
n.f=new A.kO(o,A.zE(r,o-o,Math.min(q.dK(0,p),5000)),B.bJ)}else if(b<0&&m<p){o=q.LU(p)
n.r=o
n.f=new A.kO(p,A.zE(r,p-p,Math.min(q.dK(0,o),5000)),B.bJ)}else n.r=1/0}return n}return null},
gtP(){return 100},
ym(a){return J.ei(a)*Math.min(0.000816*Math.pow(Math.abs(a),1.967),4e4)},
gz_(){return 3.5},
gpb(){switch(this.b.a){case 1:return 64e3
case 0:return A.mY.prototype.gpb.call(this)}},
gl4(){switch(this.b.a){case 1:return A.aoG(0.3,1.3,75)
case 0:return A.mY.prototype.gl4.call(this)}}}
A.rY.prototype={
kh(a){return new A.rY(this.hw(a))},
nY(a,b){var s,r,q=a.at
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
lS(a,b){var s,r,q,p,o=null,n=this.gpC()
if(a.gAA()){s=a.at
s.toString
r=a.Q
r.toString
if(s>r)q=r
else q=o
r=a.z
r.toString
if(s<r)q=r
s=this.gl4()
r=a.at
r.toString
q.toString
return new A.kO(q,A.zE(s,r-q,Math.min(0,b)),n)}s=Math.abs(b)
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
r=new A.Vh(r,b,n)
s=Math.exp(Math.log(0.35*s/778.3530259679999)/($.arX()-1))
r.e=s
r.f=Math.abs(b*s/3.065)
return r}}
A.py.prototype={
E(){return"ScrollPositionAlignmentPolicy."+this.b}}
A.jf.prototype={
D6(a,b,c,d,e){if(d!=null)this.ke(d)
this.LM()},
gf0(){var s=this.z
s.toString
return s},
gf_(){var s=this.Q
s.toString
return s},
gzv(){return this.z!=null&&this.Q!=null},
gcj(){var s=this.at
s.toString
return s},
gJZ(){return this.at!=null},
gpL(){var s=this.ax
s.toString
return s},
gK0(){return this.ax!=null},
ke(a){var s=this,r=a.z
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
if(A.A(a)!==A.A(s))s.fr.LD()
s.w.BZ(s.fr.gi1())
s.dy.sn(0,s.fr.gh_())},
Nf(a){var s,r,q,p=this,o=p.at
o.toString
if(a!==o){s=p.r.nY(p,a)
o=p.at
o.toString
r=a-s
p.at=r
if(r!==o){p.xP()
p.Cp()
r=p.at
r.toString
p.yT(r-o)}if(s!==0){o=p.fr
o.toString
r=p.fQ()
q=$.ai.ah$.z.j(0,p.w.z)
q.toString
o.t_(r,q,s)
return s}}return 0},
zl(a){var s=this,r=s.at
r.toString
s.as=a-r
s.at=a
s.xP()
s.Cp()
$.bP.cy$.push(new A.a62(s))},
BP(){var s,r=this.w,q=r.c
q.toString
q=A.a35(q)
if(q!=null){r=r.c
r.toString
s=this.at
s.toString
q.Mh(r,s)}},
LM(){var s,r,q
if(this.at==null){s=this.w
r=s.c
r.toString
r=A.a35(r)
if(r==null)q=null
else{s=s.c
s.toString
q=r.Lo(s)}if(q!=null)this.at=q}},
LL(a,b){if(b)this.at=a
else this.dO(a)},
BO(){var s=this.at
s.toString
this.w.e.sn(0,s)
s=$.he.ac$
s===$&&A.b()
s.JE()},
o1(a){if(this.ax!==a){this.ax=a
this.ch=!0}return!0},
nZ(a,b){var s,r,q,p=this
if(!A.AL(p.z,a,0.001)||!A.AL(p.Q,b,0.001)||p.ch||p.db!==A.bd(p.gfN())){p.z=a
p.Q=b
p.db=A.bd(p.gfN())
s=p.ay?p.fQ():null
p.ch=!1
p.CW=!0
if(p.ay){r=p.cx
r.toString
s.toString
r=!p.a1D(r,s)}else r=!1
if(r)return!1
p.ay=!0}if(p.CW){p.PG()
p.w.N8(p.r.jS(p))
p.CW=!1}s=p.fQ()
if(p.cx!=null){r=Math.max(s.gcj()-s.gf0(),0)
q=p.cx
if(r===Math.max(q.gcj()-q.gf0(),0))if(s.gkv()===p.cx.gkv()){r=Math.max(s.gf_()-s.gcj(),0)
q=p.cx
r=r===Math.max(q.gf_()-q.gcj(),0)&&s.e===p.cx.e}else r=!1
else r=!1
r=!r}else r=!0
if(r){if(!p.cy){A.dQ(p.ga2g())
p.cy=!0}p.cx=p.fQ()}return!0},
a1D(a,b){var s=this,r=s.r.rp(s.fr.gh_(),b,a,s.fr.ged()),q=s.at
q.toString
if(r!==q){s.at=r
return!1}return!0},
o_(){this.fr.o_()
this.xP()},
xP(){var s,r,q,p,o,n=this,m=n.w
switch(m.a.c.a){case 0:s=B.dR
r=B.dQ
break
case 1:s=B.dS
r=B.dT
break
case 2:s=B.dQ
r=B.dR
break
case 3:s=B.dT
r=B.dS
break
default:s=null
r=null}q=A.b3(t.nS)
p=n.at
p.toString
o=n.z
o.toString
if(p>o)q.C(0,r)
p=n.at
p.toS