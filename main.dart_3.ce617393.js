(a){var s=this
return A.S(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s,r,q=this
if(q.gp0())return"Border.all("+q.a.i(0)+")"
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
glZ(){var s,r=this
if(r.gp0()){s=r.a.geE()
return new A.aX(s,s,s,s)}return new A.aX(r.b.geE(),r.a.geE(),r.c.geE(),r.d.geE())},
gp0(){var s,r,q,p=this,o=p.a,n=o.a,m=p.b
if(!m.a.k(0,n)||!p.c.a.k(0,n)||!p.d.a.k(0,n))return!1
s=o.b
if(m.b!==s||p.c.b!==s||p.d.b!==s)return!1
r=o.c
if(m.c!==r||p.c.c!==r||p.d.c!==r)return!1
q=o.d
if(!(m.d===q&&p.d.d===q&&p.c.d===q))return!1
return!0},
fn(a,b,c){var s,r,q,p=this,o=null
if(b instanceof A.dQ){s=p.a
r=b.a
if(A.iM(s,r)&&A.iM(p.b,b.b)&&A.iM(p.c,b.c)&&A.iM(p.d,b.d))return new A.dQ(A.fM(s,r),A.fM(p.b,b.b),A.fM(p.c,b.c),A.fM(p.d,b.d))
return o}if(b instanceof A.dr){s=b.a
r=p.a
if(!A.iM(s,r)||!A.iM(b.c,p.d))return o
q=p.b
if(!q.k(0,B.D)||!p.c.k(0,B.D)){if(!b.d.k(0,B.D)||!b.b.k(0,B.D))return o
return new A.dQ(A.fM(s,r),q,p.c,A.fM(b.c,p.d))}return new A.dr(A.fM(s,r),b.b,A.fM(b.c,p.d),b.d)}return o},
B(a,b){return this.fn(a,b,!1)},
aG(a,b){var s=this
return new A.dQ(s.a.aG(0,b),s.b.aG(0,b),s.c.aG(0,b),s.d.aG(0,b))},
ca(a,b){if(a instanceof A.dQ)return A.aiV(a,this,b)
return this.CZ(a,b)},
cb(a,b){if(a instanceof A.dQ)return A.aiV(this,a,b)
return this.D_(a,b)},
u3(a,b,c,d,e){var s,r,q,p=this
if(p.gp0()){s=p.a
switch(s.c.a){case 0:return
case 1:switch(d.a){case 1:A.amr(a,b,s)
break
case 0:if(c!=null&&!c.k(0,B.aA)){A.ams(a,b,s,c)
return}A.amt(a,b,s)
break}return}}switch(e.a){case 0:r=p.c
q=p.b
break
case 1:r=p.b
q=p.c
break
default:r=null
q=null}A.ary(a,b,p.d,r,q,p.a)},
hP(a,b,c){return this.u3(a,b,null,B.a6,c)},
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
gdG(a){var s=this.c
return s==null?null:s.glZ()},
uz(a,b){var s,r,q
switch(this.w.a){case 1:s=A.pk(a.gaI(),a.gfI()/2)
r=$.ap().cr()
r.y5(s)
return r
case 0:r=this.d
if(r!=null){q=$.ap().cr()
q.eO(r.W(b).dJ(a))
return q}r=$.ap().cr()
r.nW(a)
return r}},
aG(a,b){var s=this,r=null,q=A.v(r,s.a,b),p=A.amu(r,s.c,b),o=A.hy(r,s.d,b),n=A.amx(r,s.e,b),m=s.f
m=m==null?r:m.aG(0,b)
return new A.cB(q,s.b,p,o,n,m,s.w)},
gzI(){return this.e!=null},
ca(a,b){if(a==null)return this.aG(0,b)
if(a instanceof A.cB)return A.amv(a,this,b)
return this.Ct(a,b)},
cb(a,b){if(a==null)return this.aG(0,1-b)
if(a instanceof A.cB)return A.amv(this,a,b)
return this.Cu(a,b)},
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
K3(a,b,c){var s
switch(this.w.a){case 0:s=this.d
if(s!=null)return s.W(c).dJ(new A.C(0,0,0+a.a,0+a.b)).A(0,b)
return!0
case 1:return b.ab(0,a.j5(B.j)).gd6()<=Math.min(a.a,a.b)/2}},
rM(a){return new A.abc(this,a)}}
A.abc.prototype={
FK(a,b,c,d){var s=this.b
switch(s.w.a){case 1:a.im(b.gaI(),b.gfI()/2,c)
break
case 0:s=s.d
if(s==null||s.k(0,B.aA))a.cl(b,c)
else a.d7(s.W(d).dJ(b),c)
break}},
XW(a,b,c){var s,r,q,p,o,n,m=this.b.e
if(m==null)return
for(s=m.length,r=0;r<m.length;m.length===s||(0,A.P)(m),++r){q=m[r]
p=$.ap().bk()
p.sag(0,q.a)
o=q.e
n=q.c
p.sa4X(new A.uP(o,n>0?n*0.57735+0.5:0))
o=b.dq(q.b)
n=q.d
this.FK(a,new A.C(o.a-n,o.b-n,o.c+n,o.d+n),p,c)}},
XS(a,b,c){var s,r,q=this,p=q.b,o=p.b
if(o==null)return
if(q.e==null)q.e=new A.DM(o,q.a)
switch(p.w.a){case 1:s=A.pk(b.gaI(),b.gfI()/2)
r=$.ap().cr()
r.y5(s)
break
case 0:p=p.d
if(p!=null){r=$.ap().cr()
r.eO(p.W(c.d).dJ(b))}else r=null
break
default:r=null}q.e.u2(a,b,r,c)},
m(){var s,r=this.e
if(r!=null){s=r.c
if(s!=null)s.H(0,new A.dv(r.gEZ(),null,null))
s=r.d
if(s!=null)s.a.m()
r.d=null}this.NN()},
po(a,b,c){var s,r,q,p,o=this,n=c.e,m=b.a,l=b.b,k=new A.C(m,l,m+n.a,l+n.b),j=c.d
o.XW(a,k,j)
n=o.b
m=n.a
l=m==null
if(!l||n.f!=null){if(o.c!=null)s=n.f!=null&&!J.f(o.d,k)
else s=!0
if(s){r=$.ap().bk()
if(!l)r.sag(0,m)
m=n.f
if(m!=null){l=m.d.W(j).Mg(k)
s=m.e.W(j).Mg(k)
q=m.a
p=m.wM()
m=m.f
r.sC7(A.ajs(l,s,q,p,m,null))
o.d=k}o.c=r}m=o.c
m.toString
o.FK(a,k,m,j)}o.XS(a,k,c)
m=n.c
if(m!=null){l=n.d
l=l==null?null:l.W(j)
m.u3(a,k,l,n.w,j)}},
i(a){return"BoxPainter for "+this.b.i(0)}}
A.lH.prototype={
F(){return"BoxFit."+this.b}}
A.EU.prototype={}
A.iN.prototype={
aG(a,b){var s=this
return new A.iN(s.d*b,s.e,s.a,s.b.a_(0,b),s.c*b)},
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
aG(a,b){return new A.ds(this.b,this.a.aG(0,b))},
ca(a,b){var s,r
if(a instanceof A.ds){s=A.az(a.a,this.a,b)
r=A.T(a.b,this.b,b)
r.toString
return new A.ds(A.H(r,0,1),s)}return this.lb(a,b)},
cb(a,b){var s,r
if(a instanceof A.ds){s=A.az(this.a,a.a,b)
r=A.T(this.b,a.b,b)
r.toString
return new A.ds(A.H(r,0,1),s)}return this.lc(a,b)},
fF(a,b){var s=$.ap().cr()
s.y5(this.Dq(a))
return s},
hP(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=r.b*r.d
if(this.b===0)a.im(b.gaI(),(b.gfI()+s)/2,r.hX())
else a.t6(this.Dq(b).dh(s/2),r.hX())
break}},
Dq(a){var s,r,q,p,o,n,m,l=this.b
if(l===0||a.c-a.a===a.d-a.b)return A.pk(a.gaI(),a.gfI()/2)
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
vH(a,b,c,d){var s=this
s.gbG(s).cD(0)
switch(b.a){case 0:break
case 1:a.$1(!1)
break
case 2:a.$1(!0)
break
case 3:a.$1(!0)
s.gbG(s).BP(c,$.ap().bk())
break}d.$0()
if(b===B.hs)s.gbG(s).cA(0)
s.gbG(s).cA(0)},
a0P(a,b,c,d){this.vH(new A.Vj(this,a),b,c,d)},
a0Q(a,b,c,d){this.vH(new A.Vk(this,a),b,c,d)},
a0S(a,b,c,d){this.vH(new A.Vl(this,a),b,c,d)}}
A.Vj.prototype={
$1(a){var s=this.a
return s.gbG(s).Im(0,this.b,a)},
$S:24}
A.Vk.prototype={
$1(a){var s=this.a
return s.gbG(s).In(this.b,a)},
$S:24}
A.Vl.prototype={
$1(a){var s=this.a
return s.gbG(s).a0R(this.b,a)},
$S:24}
A.k3.prototype={
j(a,b){return this.b.j(0,b)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.A(s))return!1
return s.NO(0,b)&&A.n(s).h("k3<k3.T>").b(b)&&A.aid(b.b,s.b)},
gt(a){return A.S(A.A(this),this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"ColorSwatch(primary value: "+this.NP(0)+")"}}
A.fP.prototype={
c0(){return"Decoration"},
gdG(a){return B.aY},
gzI(){return!1},
ca(a,b){return null},
cb(a,b){return null},
K3(a,b,c){return!0},
uz(a,b){throw A.c(A.O("This Decoration subclass does not expect to be used for clipping."))}}
A.Br.prototype={
m(){}}
A.MV.prototype={}
A.mj.prototype={
F(){return"ImageRepeat."+this.b}}
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
u2(a,b,c,d){var s,r,q,p,o=this,n=null,m=o.a.a.W(d),l=m.a
if(l==null)l=m
s=o.c
r=s==null
if(r)q=n
else{q=s.a
if(q==null)q=s}if(l!==q){p=new A.dv(o.gEZ(),n,n)
if(!r)s.H(0,p)
o.c=m
m.Z(0,p)}if(o.d==null)return
l=c!=null
if(l){a.cD(0)
a.fT(0,c)}s=o.d
r=s.a
A.arz(B.a0,a,n,n,s.c,B.d4,B.O,!1,r,!1,!1,1,b,B.bs,s.b)
if(l)a.cA(0)},
Vj(a,b){var s,r,q=this
if(J.f(q.d,a))return
s=q.d
if(s!=null)if(a.a.Kq(s.a)){r=s.b
s=r===r&&a.c==s.c}else s=!1
else s=!1
if(s){a.a.m()
return}s=q.d
if(s!=null)s.a.m()
q.d=a
if(!b)q.b.$0()},
i(a){return"DecorationImagePainter(stream: "+A.h(this.c)+", image: "+A.h(this.d)+") for "+this.a.i(0)}}
A.dc.prototype={
gcp(){var s=this
return s.gdt(s)+s.gdu(s)+s.gem(s)+s.gen()},
a09(a){var s=this
switch(a.a){case 0:return s.gcp()
case 1:return s.gb8(s)+s.gbd(s)}},
B(a,b){var s=this
return new A.l9(s.gdt(s)+b.gdt(b),s.gdu(s)+b.gdu(b),s.gem(s)+b.gem(b),s.gen()+b.gen(),s.gb8(s)+b.gb8(b),s.gbd(s)+b.gbd(b))},
j6(a,b,c){var s=this
return new A.l9(A.H(s.gdt(s),b.a,c.a),A.H(s.gdu(s),b.c,c.b),A.H(s.gem(s),0,c.c),A.H(s.gen(),0,c.d),A.H(s.gb8(s),b.b,c.e),A.H(s.gbd(s),b.d,c.f))},
i(a){var s=this
if(s.gem(s)===0&&s.gen()===0){if(s.gdt(s)===0&&s.gdu(s)===0&&s.gb8(s)===0&&s.gbd(s)===0)return"EdgeInsets.zero"
if(s.gdt(s)===s.gdu(s)&&s.gdu(s)===s.gb8(s)&&s.gb8(s)===s.gbd(s))return"EdgeInsets.all("+B.d.M(s.gdt(s),1)+")"
return"EdgeInsets("+B.d.M(s.gdt(s),1)+", "+B.d.M(s.gb8(s),1)+", "+B.d.M(s.gdu(s),1)+", "+B.d.M(s.gbd(s),1)+")"}if(s.gdt(s)===0&&s.gdu(s)===0)return"EdgeInsetsDirectional("+B.d.M(s.gem(s),1)+", "+B.d.M(s.gb8(s),1)+", "+B.d.M(s.gen(),1)+", "+B.d.M(s.gbd(s),1)+")"
return"EdgeInsets("+B.d.M(s.gdt(s),1)+", "+B.d.M(s.gb8(s),1)+", "+B.d.M(s.gdu(s),1)+", "+B.d.M(s.gbd(s),1)+") + EdgeInsetsDirectional("+B.d.M(s.gem(s),1)+", 0.0, "+B.d.M(s.gen(),1)+", 0.0)"},
k(a,b){var s=this
if(b==null)return!1
return b instanceof A.dc&&b.gdt(b)===s.gdt(s)&&b.gdu(b)===s.gdu(s)&&b.gem(b)===s.gem(s)&&b.gen()===s.gen()&&b.gb8(b)===s.gb8(s)&&b.gbd(b)===s.gbd(s)},
gt(a){var s=this
return A.S(s.gdt(s),s.gdu(s),s.gem(s),s.gen(),s.gb8(s),s.gbd(s),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.bq.prototype={
gdt(a){return this.a},
gb8(a){return this.b},
gdu(a){return this.c},
gbd(a){return this.d},
gem(a){return 0},
gen(){return 0},
yH(a){var s=this
return new A.C(a.a+s.a,a.b+s.b,a.c-s.c,a.d-s.d)},
B(a,b){if(b instanceof A.bq)return this.V(0,b)
return this.Cv(0,b)},
j6(a,b,c){var s=this
return new A.bq(A.H(s.a,b.a,c.a),A.H(s.b,b.b,c.e),A.H(s.c,b.c,c.b),A.H(s.d,b.d,c.f))},
ab(a,b){var s=this
return new A.bq(s.a-b.a,s.b-b.b,s.c-b.c,s.d-b.d)},
V(a,b){var s=this
return new A.bq(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
a_(a,b){var s=this
return new A.bq(s.a*b,s.b*b,s.c*b,s.d*b)},
W(a){return this},
og(a,b,c,d){var s=this,r=b==null?s.a:b,q=d==null?s.b:d,p=c==null?s.c:c
return new A.bq(r,q,p,a==null?s.d:a)},
yt(a){return this.og(a,null,null,null)}}
A.aX.prototype={
gem(a){return this.a},
gb8(a){return this.b},
gen(){return this.c},
gbd(a){return this.d},
gdt(a){return 0},
gdu(a){return 0},
B(a,b){if(b instanceof A.aX)return this.V(0,b)
return this.Cv(0,b)},
ab(a,b){var s=this
return new A.aX(s.a-b.a,s.b-b.b,s.c-b.c,s.d-b.d)},
V(a,b){var s=this
return new A.aX(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
a_(a,b){var s=this
return new A.aX(s.a*b,s.b*b,s.c*b,s.d*b)},
W(a){var s=this
switch(a.a){case 0:return new A.bq(s.c,s.b,s.a,s.d)
case 1:return new A.bq(s.a,s.b,s.c,s.d)}}}
A.l9.prototype={
a_(a,b){var s=this
return new A.l9(s.a*b,s.b*b,s.c*b,s.d*b,s.e*b,s.f*b)},
W(a){var s=this
switch(a.a){case 0:return new A.bq(s.d+s.a,s.e,s.c+s.b,s.f)
case 1:return new A.bq(s.c+s.a,s.e,s.d+s.b,s.f)}},
gdt(a){return this.a},
gdu(a){return this.b},
gem(a){return this.c},
gen(){return this.d},
gb8(a){return this.e},
gbd(a){return this.f}}
A.abp.prototype={}
A.ahl.prototype={
$1(a){return a<=this.a},
$S:217}
A.agR.prototype={
$1(a){var s=this,r=A.v(A.aqr(s.a,s.b,a),A.aqr(s.c,s.d,a),s.e)
r.toString
return r},
$S:218}
A.a_l.prototype={
wM(){var s,r,q,p=this.b
if(p!=null)return p
p=this.a.length
s=1/(p-1)
if(p>4294967295)A.K(A.bt(p,0,4294967295,"length",null))
r=J.mn(new Array(p),t.i)
for(q=0;q<p;++q)r[q]=q*s
return r}}
A.mq.prototype={
aG(a,b){var s=this,r=s.a,q=A.aj(r).h("aC<1,M>")
return new A.mq(s.d,s.e,s.f,A.aA(new A.aC(r,new A.a1l(b),q),!0,q.h("bm.E")),s.b,null)},
ca(a,b){var s=A.anx(a,this,b)
return s},
cb(a,b){var s=A.anx(this,a,b)
return s},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.A(s))return!1
return b instanceof A.mq&&b.d.k(0,s.d)&&b.e.k(0,s.e)&&b.f===s.f&&A.cS(b.a,s.a)&&A.cS(b.b,s.b)},
gt(a){var s=this,r=A.df(s.a),q=s.b
q=q==null?null:A.df(q)
return A.S(s.d,s.e,s.f,s.c,r,q,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r=A.a(["begin: "+s.d.i(0),"end: "+s.e.i(0),"colors: "+A.h(s.a)],t.s),q=s.b
if(q!=null)r.push("stops: "+A.h(q))
r.push("tileMode: "+s.f.i(0))
return"LinearGradient("+B.c.b3(r,", ")+")"}}
A.a1l.prototype={
$1(a){var s=A.v(null,a,this.a)
s.toString
return s},
$S:68}
A.a0f.prototype={
a0(a){var s,r,q,p
for(s=this.b,r=s.gaU(s),r=new A.dU(J.at(r.a),r.b),q=A.n(r).z[1];r.q();){p=r.a;(p==null?q.a(p):p).m()}s.a0(0)
for(s=this.a,r=s.gaU(s),r=new A.dU(J.at(r.a),r.b),q=A.n(r).z[1];r.q();){p=r.a
if(p==null)p=q.a(p)
p.a.H(0,p.b)}s.a0(0)
this.f=0},
m3(a){var s,r,q,p=this,o=p.c.u(0,a)
if(o!=null){s=o.a
r=o.d
r===$&&A.b()
if(s.w)A.K(A.a5(u.V))
B.c.u(s.x,r)
o.D2()}q=p.a.u(0,a)
if(q!=null){q.a.H(0,q.b)
return!0}o=p.b.u(0,a)
if(o!=null){s=p.f
r=o.b
r.toString
p.f=s-r
o.m()
return!0}return!1},
Ha(a,b,c){var s,r=this,q=b.b
if(q!=null&&q<=104857600&&!0){s=r.f
q.toString
r.f=s+q
r.b.l(0,a,b)
r.Ss(c)}else b.m()},
xG(a,b,c){var s=this.c.bF(0,a,new A.a0i(this,b,a))
if(s.b==null)s.b=c},
Ln(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g={}
g.a=g.b=null
q=i.a
p=q.j(0,b)
o=p==null?h:p.a
g.c=o
if(o!=null)return o
p=i.b
n=p.u(0,b)
if(n!=null){g=n.a
i.xG(b,g,n.b)
p.l(0,b,n)
return g}m=i.c.j(0,b)
if(m!=null){g=m.a
i.Ha(b,new A.xS(g,m.b,g.mt()),h)
return g}try{o=g.c=c.$0()
i.xG(b,o,h)
p=o}catch(l){s=A.ae(l)
r=A.au(l)
d.$2(s,r)
return h}g.d=!1
k=A.b6("pendingImage")
j=new A.dv(new A.a0j(g,i,b,!0,k),h,h)
k.b=new A.P1(p,j)
q.l(0,b,k.aA())
g.c.Z(0,j)
return g.c},
R(a,b){return this.a.j(0,b)!=null||this.b.j(0,b)!=null},
Ss(a){var s,r,q,p,o,n=this,m=n.b,l=A.n(m).h("b8<1>")
while(!0){if(!(n.f>104857600||m.a>1000))break
s=new A.b8(m,l)
r=s.ga5(s)
if(!r.q())A.K(A.bO())
q=r.gG(r)
p=m.j(0,q)
s=n.f
o=p.b
o.toString
n.f=s-o
p.m()
m.u(0,q)}}}
A.a0i.prototype={
$0(){return A.aAA(this.b,new A.a0h(this.a,this.c))},
$S:219}
A.a0h.prototype={
$0(){this.a.c.u(0,this.b)},
$S:0}
A.a0j.prototype={
$2(a,b){var s,r,q,p,o,n=this
if(a!=null){s=a.a
r=s.gbS(s)*s.gbn(s)*4
s.m()}else r=null
s=n.a
q=s.c
p=new A.xS(q,r,q.mt())
q=n.b
o=n.c
q.xG(o,s.c,r)
if(n.d)q.Ha(o,p,s.a)
else p.m()
q.a.u(0,o)
if(!s.d){q=n.e.aA()
q.a.H(0,q.b)}s.d=!0},
$S:220}
A.Mj.prototype={
m(){$.bP.dy$.push(new A.abg(this))}}
A.abg.prototype={
$1(a){var s=this.a,r=s.c
if(r!=null)r.m()
s.c=null},
$S:2}
A.xS.prototype={}
A.qH.prototype={
Rz(a,b,c){var s=new A.adn(this,b)
this.d=s
if(a.w)A.K(A.a5(u.V))
a.x.push(s)},
i(a){return"<optimized out>#"+A.bM(this)}}
A.adn.prototype={
$0(){var s,r,q
this.b.$0()
s=this.a
r=s.a
q=s.d
q===$&&A.b()
if(r.w)A.K(A.a5(u.V))
B.c.u(r.x,q)
s.D2()},
$S:0}
A.P1.prototype={}
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
A.dS.prototype={
W(a){var s=new A.a0v()
this.T0(a,new A.a0t(this,a,s),new A.a0u(this,a,s))
return s},
T0(a,b,c){var s,r,q,p,o,n={}
n.a=null
n.b=!1
s=new A.a0q(n,c)
r=null
try{r=this.tT(a)}catch(o){q=A.ae(o)
p=A.au(o)
s.$2(q,p)
return}r.aB(new A.a0p(n,this,b,s),t.H).fS(s)},
py(a,b,c,d){var s,r
if(b.a!=null){s=$.eS.fY$
s===$&&A.b()
s.Ln(0,c,new A.a0r(b),d)
return}s=$.eS.fY$
s===$&&A.b()
r=s.Ln(0,c,new A.a0s(this,c),d)
if(r!=null)b.BY(r)},
p7(a,b,c){throw A.c(A.O("Implement loadBuffer for faster image loading"))},
p8(a,b){return this.p7(0,a,$.eS.ga4d())},
i(a){return"ImageConfiguration()"}}
A.a0t.prototype={
$2(a,b){this.a.py(this.b,this.c,a,b)},
$S(){return A.n(this.a).h("~(dS.T,~(B,bL?))")}}
A.a0u.prototype={
$3(a,b,c){return this.Mr(a,b,c)},
Mr(a,b,c){var s=0,r=A.a2(t.H),q=this,p
var $async$$3=A.Y(function(d,e){if(d===1)return A.a_(e,r)
while(true)switch(s){case 0:s=2
return A.a4(null,$async$$3)
case 2:p=q.c
if(p.a==null)p.BY(new A.abW(A.a([],t.fE),A.a([],t.b)))
p=p.a
p.toString
p.kR(A.bo("while resolving an image"),b,null,!0,c)
return A.a0(null,r)}})
return A.a1($async$$3,r)},
$S(){return A.n(this.a).h("ad<~>(dS.T?,B,bL?)")}}
A.a0q.prototype={
Mq(a,b){var s=0,r=A.a2(t.H),q,p=this,o
var $async$$2=A.Y(function(c,d){if(c===1)return A.a_(d,r)
while(true)switch(s){case 0:o=p.a
if(o.b){s=1
break}p.b.$3(o.a,a,b)
o.b=!0
case 1:return A.a0(q,r)}})
return A.a1($async$$2,r)},
$2(a,b){return this.Mq(a,b)},
$S:221}
A.a0p.prototype={
$1(a){var s,r,q,p=this
p.a.a=a
try{p.c.$2(a,p.d)}catch(q){s=A.ae(q)
r=A.au(q)
p.d.$2(s,r)}},
$S(){return A.n(this.b).h("ay(dS.T)")}}
A.a0r.prototype={
$0(){var s=this.a.a
s.toString
return s},
$S:104}
A.a0s.prototype={
$0(){return this.a.p8(this.b,$.eS.ga4g())},
$S:104}
A.hx.prototype={
k(a,b){var s=this
if(b==null)return!1
if(J.X(b)!==A.A(s))return!1
return b instanceof A.hx&&b.a===s.a&&b.b===s.b&&b.c===s.c},
gt(a){return A.S(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"AssetBundleImageKey(bundle: "+this.a.i(0)+', name: "'+this.b+'", scale: '+A.h(this.c)+")"}}
A.B7.prototype={
p8(a,b){return A.anL(this.ls(a,b,null),a.b,null,a.c)},
p7(a,b,c){return A.anL(this.ls(b,null,c),b.b,null,b.c)},
ls(a,b,c){return this.WQ(a,b,c)},
WQ(a,b,c){var s=0,r=A.a2(t.gP),q,p=2,o,n,m,l,k,j,i
var $async$ls=A.Y(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:s=b!=null?3:4
break
case 3:n=null
p=6
s=9
return A.a4(a.a.tL(a.b),$async$ls)
case 9:n=e
p=2
s=8
break
case 6:p=5
j=o
if(A.ae(j) instanceof A.kb){k=$.eS.fY$
k===$&&A.b()
k.m3(a)
throw j}else throw j
s=8
break
case 5:s=2
break
case 8:if(n==null){k=$.eS.fY$
k===$&&A.b()
k.m3(a)
throw A.c(A.a5("Unable to read data"))}q=b.$1(n)
s=1
break
case 4:m=null
p=11
s=14
return A.a4(a.a.cZ(0,a.b),$async$ls)
case 14:m=e
p=2
s=13
break
case 11:p=10
i=o
if(A.ae(i) instanceof A.kb){k=$.eS.fY$
k===$&&A.b()
k.m3(a)
throw i}else throw i
s=13
break
case 10:s=2
break
case 13:if(m==null){k=$.eS.fY$
k===$&&A.b()
k.m3(a)
throw A.c(A.a5("Unable to read data"))}c.toString
q=c.$1(A.cK(m.buffer,0,null))
s=1
break
case 1:return A.a0(q,r)
case 2:return A.a_(o,r)}})
return A.a1($async$ls,r)}}
A.abW.prototype={}
A.o_.prototype={
gmu(){return this.a},
tT(a){var s,r={},q=a.a
if(q==null)q=$.Tp()
r.a=r.b=null
q.a4U("AssetManifest.a3f9a259.json",A.aE7(),t.jd).aB(new A.TQ(r,this,a,q),t.H).fS(new A.TR(r))
s=r.a
if(s!=null)return s
s=new A.a7($.a8,t.hv)
r.b=new A.aI(s,t.q8)
return s},
SC(a,b,c){var s,r,q,p=b.b
if(p==null||c==null||J.fK(c))return a
s=A.ak8(t.i,t.N)
for(r=J.at(c);r.q();){q=r.gG(r)
s.l(0,this.FT(q),q)}p.toString
return this.TS(s,p)},
TS(a,b){var s,r,q
if(a.np(b)){s=a.j(0,b)
s.toString
return s}r=a.a4G(b)
q=a.a2R(b)
if(r==null)return a.j(0,q)
if(q==null)return a.j(0,r)
if(b<2||b>(r+q)/2)return a.j(0,q)
else return a.j(0,r)},
FT(a){var s,r,q,p
if(a===this.a)return 1
s=A.kZ(a,0,null)
r=s.gjE().length>1?s.gjE()[s.gjE().length-2]:""
q=$.arR().tk(r)
if(q!=null&&q.b.length-1>0){p=q.b[1]
p.toString
return A.aqZ(p)}return 1},
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return b instanceof A.o_&&b.gmu()===this.gmu()&&!0},
gt(a){return A.S(this.gmu(),this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"AssetImage(bundle: "+A.h(this.b)+', name: "'+this.gmu()+'")'}}
A.TQ.prototype={
$1(a){var s,r=this,q=r.b,p=q.gmu(),o=a==null?null:J.aO(a,q.gmu())
o=q.SC(p,r.c,o)
o.toString
s=new A.hx(r.d,o,q.FT(o))
q=r.a
p=q.b
if(p!=null)p.bT(0,s)
else q.a=new A.bp(s,t.rT)},
$S:223}
A.TR.prototype={
$2(a,b){this.a.b.dC(a,b)},
$S:29}
A.eN.prototype={
cT(a){return new A.eN(this.a.cT(0),this.b,this.c)},
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
a5j(a,b){return this.a.$2(a,b)}}
A.a0v.prototype={
BY(a){var s,r=this
r.a=a
s=r.b
if(s!=null){r.b=null
a.f=!0
B.c.Y(s,a.gnV(a))
r.a.f=!1}},
Z(a,b){var s=this.a
if(s!=null)return s.Z(0,b)
s=this.b;(s==null?this.b=A.a([],t.fE):s).push(b)},
H(a,b){var s,r=this.a
if(r!=null)return r.H(0,b)
for(s=0;r=this.b,s<r.length;++s)if(J.f(r[s],b)){r=this.b
r.toString
B.c.ed(r,s)
break}}}
A.a0w.prototype={
m(){var s=this.a;--s.r
s.qJ()
this.a=null}}
A.kh.prototype={
Z(a,b){var s,r,q,p,o,n,m,l=this
if(l.w)A.K(A.a5(u.V))
l.e=!0
l.a.push(b)
o=l.b
if(o!=null)try{o=o.cT(0)
n=l.f
b.a.$2(o,!n)}catch(m){s=A.ae(m)
r=A.au(m)
l.LD(A.bo("by a synchronously-called image listener"),s,r)}o=l.c
if(o!=null&&b.c!=null)try{n=b.c
n.toString
n.$2(o.a,o.b)}catch(s){q=A.ae(s)
p=A.au(s)
if(!J.f(q,l.c.a))A.e6(new A.bJ(q,p,"image resource service",A.bo("by a synchronously-called image error listener"),null,!1))}},
mt(){if(this.w)A.K(A.a5(u.V));++this.r
return new A.a0w(this)},
H(a,b){var s,r,q,p,o,n=this
if(n.w)A.K(A.a5(u.V))
for(s=n.a,r=0;r<s.length;++r)if(J.f(s[r],b)){B.c.ed(s,r)
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
C1(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.w)A.K(A.a5(u.V))
p=i.b
if(p!=null)p.a.m()
i.b=a
p=i.a
if(p.length===0)return
o=A.aA(p,!0,t.tg)
for(p=o.length,n=a.a,m=a.b,l=a.c,k=0;k<p;++k){s=o[k]
try{s.a5j(new A.eN(n.cT(0),m,l),!1)}catch(j){r=A.ae(j)
q=A.au(j)
i.LD(A.bo("by an image listener"),r,q)}}},
kR(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i="image resource service"
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
A.e6(o)}},
LD(a,b,c){return this.kR(a,b,null,!1,c)},
a6m(a){var s,r,q,p
if(this.w)A.K(A.a5(u.V))
s=this.a
if(s.length!==0){r=t.zG
q=A.aA(new A.dk(new A.aC(s,new A.a0y(),A.aj(s).h("aC<1,~(eM)?>")),r),!0,r.h("o.E"))
for(s=q.length,p=0;p<s;++p)q[p].$1(a)}}}
A.a0x.prototype={
$1(a){return a.c},
$S:226}
A.a0y.prototype={
$1(a){return a.b},
$S:227}
A.I_.prototype={
Rn(a,b,c,d,e){this.d=c
b.dZ(this.gUQ(),new A.a2p(this,d),t.H)},
UR(a){this.z=a
if(this.a.length!==0)this.ll()},
UI(a){var s,r,q,p=this
p.cx=!1
if(p.a.length===0)return
s=p.ay
if(s!=null){r=p.ax
r===$&&A.b()
r=a.a-r.a>=s.a}else r=!0
if(r){s=p.at
p.Es(new A.eN(s.gfv(s).cT(0),p.Q,p.d))
p.ax=a
s=p.at
p.ay=s.gJc(s)
s=p.at
s.gfv(s).m()
p.at=null
q=B.f.hk(p.ch,p.z.gmj())
if(p.z.gui()===-1||q<=p.z.gui())p.ll()
return}s.toString
r=p.ax
r===$&&A.b()
p.CW=A.cb(new A.aP(B.d.bc((s.a-(a.a-r.a))*$.aqz)),new A.a2o(p))},
ll(){var s=0,r=A.a2(t.H),q,p=2,o,n=this,m,l,k,j,i
var $async$ll=A.Y(function(a,b){if(a===1){o=b
s=p}while(true)switch(s){case 0:j=n.at
if(j!=null)j.gfv(j).m()
n.at=null
p=4
s=7
return A.a4(n.z.pS(),$async$ll)
case 7:n.at=b
p=2
s=6
break
case 4:p=3
i=o
m=A.ae(i)
l=A.au(i)
n.kR(A.bo("resolving an image frame"),m,n.as,!0,l)
s=1
break
s=6
break
case 3:s=2
break
case 6:if(n.z.gmj()===1){if(n.a.length===0){s=1
break}j=n.at
n.Es(new A.eN(j.gfv(j).cT(0),n.Q,n.d))
j=n.at
j.gfv(j).m()
n.at=null
s=1
break}n.Gm()
case 1:return A.a0(q,r)
case 2:return A.a_(o,r)}})
return A.a1($async$ll,r)},
Gm(){if(this.cx)return
this.cx=!0
$.bP.q_(this.gUH())},
Es(a){this.C1(a);++this.ch},
Z(a,b){var s,r=this
if(r.a.length===0){s=r.z
if(s!=null)s=r.b==null||s.gmj()>1
else s=!1}else s=!1
if(s)r.ll()
r.CB(0,b)},
H(a,b){var s,r=this
r.CC(0,b)
if(r.a.length===0){s=r.CW
if(s!=null)s.ai(0)
r.CW=null}},
qJ(){this.Oe()
if(this.w)this.y=null}}
A.a2p.prototype={
$2(a,b){this.a.kR(A.bo("resolving an image codec"),a,this.b,!0,b)},
$S:29}
A.a2o.prototype={
$0(){this.a.Gm()},
$S:0}
A.NX.prototype={}
A.NW.prototype={}
A.B_.prototype={}
A.kl.prototype={
k(a,b){var s
if(b==null)return!1
if(b instanceof A.kl)if(b.a===this.a)if(b.b==this.b)s=A.cS(b.f,this.f)
else s=!1
else s=!1
else s=!1
return s},
gt(a){return A.S(this.a,this.b,this.c,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"InlineSpanSemanticsInformation{text: "+this.a+", semanticsLabel: "+A.h(this.b)+", recognizer: "+A.h(this.c)+"}"}}
A.h0.prototype={
MN(a){var s={}
s.a=null
this.aV(new A.a0I(s,a,new A.B_()))
return s.a},
M_(a){var s,r=new A.bw("")
this.Iw(r,!0,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
ac(a,b){var s={}
if(b<0)return null
s.a=null
this.aV(new A.a0H(s,b,new A.B_()))
return s.a},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.X(b)!==A.A(this))return!1
return b instanceof A.h0&&J.f(b.a,this.a)},
gt(a){return J.p(this.a)}}
A.a0I.prototype={
$1(a){var s=a.MO(this.b,this.c)
this.a.a=s
return s==null},
$S:47}
A.a0H.prototype={
$1(a){var s=a.a0V(this.b,this.c)
this.a.a=s
return s==null},
$S:47}
A.dC.prototype={
aG(a,b){var s=this.a.aG(0,b)
return new A.dC(this.b.a_(0,b),s)},
ca(a,b){var s,r,q=this
if(a instanceof A.dC){s=A.az(a.a,q.a,b)
r=A.hy(a.b,q.b,b)
r.toString
return new A.dC(r,s)}if(a instanceof A.ds){s=A.az(a.a,q.a,b)
return new A.eb(q.b,1-b,a.b,s)}return q.lb(a,b)},
cb(a,b){var s,r,q=this
if(a instanceof A.dC){s=A.az(q.a,a.a,b)
r=A.hy(q.b,a.b,b)
r.toString
return new A.dC(r,s)}if(a instanceof A.ds){s=A.az(q.a,a.a,b)
return new A.eb(q.b,b,a.b,s)}return q.lc(a,b)},
fF(a,b){var s=$.ap().cr()
s.eO(this.b.W(b).dJ(a))
return s},
hP(a,b,c){var s,r,q,p,o=this.a
switch(o.c.a){case 0:break
case 1:s=this.b
if(o.b===0)a.d7(s.W(c).dJ(b),o.hX())
else{r=$.ap().bk()
r.sag(0,o.a)
q=s.W(c).dJ(b)
p=q.dh(-o.geE())
a.t5(q.dh(o.gCj()),p,r)}break}},
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return b instanceof A.dC&&b.a.k(0,this.a)&&b.b.k(0,this.b)},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"RoundedRectangleBorder("+this.a.i(0)+", "+this.b.i(0)+")"}}
A.eb.prototype={
aG(a,b){var s=this.a.aG(0,b)
return new A.eb(this.b.a_(0,b),b,this.d,s)},
ca(a,b){var s,r,q,p=this
if(a instanceof A.dC){s=A.az(a.a,p.a,b)
r=A.hy(a.b,p.b,b)
r.toString
return new A.eb(r,p.c*b,p.d,s)}if(a instanceof A.ds){s=A.az(a.a,p.a,b)
r=p.c
return new A.eb(p.b,r+(1-r)*(1-b),a.b,s)}if(a instanceof A.eb){s=A.az(a.a,p.a,b)
r=A.hy(a.b,p.b,b)
r.toString
q=A.T(a.c,p.c,b)
q.toString
return new A.eb(r,q,p.d,s)}return p.lb(a,b)},
cb(a,b){var s,r,q,p=this
if(a instanceof A.dC){s=A.az(p.a,a.a,b)
r=A.hy(p.b,a.b,b)
r.toString
return new A.eb(r,p.c*(1-b),p.d,s)}if(a instanceof A.ds){s=A.az(p.a,a.a,b)
r=p.c
return new A.eb(p.b,r+(1-r)*b,a.b,s)}if(a instanceof A.eb){s=A.az(p.a,a.a,b)
r=A.hy(p.b,a.b,b)
r.toString
q=A.T(p.c,a.c,b)
q.toString
return new A.eb(r,q,p.d,s)}return p.lc(a,b)},
Gi(a){var s,r,q,p,o,n,m,l,k=this.c
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
Do(a,b){var s,r,q,p=this.b.W(b),o=this.c
if(o===0)return p
s=this.d
if(s!==0){r=a.c-a.a
q=a.d-a.b
s=0.5+s/2
if(r<q){o=A.o2(p,A.Bn(new A.bs(r/2,s*q/2)),o)
o.toString
return o}else{o=A.o2(p,A.Bn(new A.bs(s*r/2,q/2)),o)
o.toString
return o}}return A.o2(p,A.iL(a.gfI()/2),o)},
fF(a,b){var s=$.ap().cr(),r=this.Do(a,b)
r.toString
s.eO(r.dJ(this.Gi(a)))
return s},
hP(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=this.Do(b,c)
s.toString
a.d7(s.dJ(this.Gi(b)).dh(r.b*r.d/2),r.hX())
break}},
k(a,b){var s=this
if(b==null)return!1
if(J.X(b)!==A.A(s))return!1
return b instanceof A.eb&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c===s.c},
gt(a){return A.S(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r="RoundedRectangleBorder(",q=s.d
if(q!==0)return r+s.a.i(0)+", "+s.b.i(0)+", "+B.d.M(s.c*100,1)+u.T+B.d.M(q*100,1)+"% oval)"
return r+s.a.i(0)+", "+s.b.i(0)+", "+B.d.M(s.c*100,1)+"% of the way to being a CircleBorder)"}}
A.eu.prototype={
aG(a,b){return new A.eu(this.a.aG(0,b))},
ca(a,b){var s,r=this
if(a instanceof A.eu)return new A.eu(A.az(a.a,r.a,b))
if(a instanceof A.ds){s=A.az(a.a,r.a,b)
return new A.ed(1-b,a.b,s)}if(a instanceof A.dC){s=A.az(a.a,r.a,b)
return new A.ee(a.b,1-b,s)}return r.lb(a,b)},
cb(a,b){var s,r=this
if(a instanceof A.eu)return new A.eu(A.az(r.a,a.a,b))
if(a instanceof A.ds){s=A.az(r.a,a.a,b)
return new A.ed(b,a.b,s)}if(a instanceof A.dC){s=A.az(r.a,a.a,b)
return new A.ee(a.b,b,s)}return r.lc(a,b)},
fF(a,b){var s=a.gfI()/2,r=$.ap().cr()
r.eO(A.ajW(a,new A.bs(s,s)))
return r},
hP(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=b.gfI()/2
a.d7(A.ajW(b,new A.bs(s,s)).dh(r.b*r.d/2),r.hX())
break}},
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return b instanceof A.eu&&b.a.k(0,this.a)},
gt(a){var s=this.a
return A.S(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"StadiumBorder("+this.a.i(0)+")"}}
A.ed.prototype={
aG(a,b){return new A.ed(b,this.c,this.a.aG(0,b))},
ca(a,b){var s,r,q,p=this
if(a instanceof A.eu)return new A.ed(p.b*b,p.c,A.az(a.a,p.a,b))
if(a instanceof A.ds){s=A.az(a.a,p.a,b)
r=p.b
return new A.ed(r+(1-r)*(1-b),a.b,s)}if(a instanceof A.ed){s=A.az(a.a,p.a,b)
r=A.T(a.b,p.b,b)
r.toString
q=A.T(a.c,p.c,b)
q.toString
return new A.ed(r,q,s)}return p.lb(a,b)},
cb(a,b){var s,r,q,p=this
if(a instanceof A.eu)return new A.ed(p.b*(1-b),p.c,A.az(p.a,a.a,b))
if(a instanceof A.ds){s=A.az(p.a,a.a,b)
r=p.b
return new A.ed(r+(1-r)*b,a.b,s)}if(a instanceof A.ed){s=A.az(p.a,a.a,b)
r=A.T(p.b,a.b,b)
r.toString
q=A.T(p.c,a.c,b)
q.toString
return new A.ed(r,q,s)}return p.lc(a,b)},
GS(a){var s,r,q,p,o,n,m,l,k=this.b
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
nL(a){var s,r,q,p=A.iL(a.gfI()/2),o=this.c
if(o!==0){s=a.c-a.a
r=a.d-a.b
q=this.b
o=0.5+o/2
if(s<r){o=A.o2(p,A.Bn(new A.bs(s/2,o*r/2)),q)
o.toString
return o}else{o=A.o2(p,A.Bn(new A.bs(o*s/2,r/2)),q)
o.toString
return o}}return p},
fF(a,b){var s=$.ap().cr()
s.eO(this.nL(a).dJ(this.GS(a)))
return s},
hP(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.d7(this.nL(b).dJ(this.GS(b)).dh(s.b*s.d/2),s.hX())
break}},
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return b instanceof A.ed&&b.a.k(0,this.a)&&b.b===this.b},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r=s.c
if(r!==0)return"StadiumBorder("+s.a.i(0)+", "+B.d.M(s.b*100,1)+u.T+B.d.M(r*100,1)+"% oval)"
return"StadiumBorder("+s.a.i(0)+", "+B.d.M(s.b*100,1)+"% of the way to being a CircleBorder)"}}
A.ee.prototype={
aG(a,b){var s=this.a.aG(0,b)
return new A.ee(this.b.a_(0,b),b,s)},
ca(a,b){var s,r,q,p=this
if(a instanceof A.eu)return new A.ee(p.b,p.c*b,A.az(a.a,p.a,b))
if(a instanceof A.dC){s=p.c
return new A.ee(p.b,s+(1-s)*(1-b),A.az(a.a,p.a,b))}if(a instanceof A.ee){s=A.az(a.a,p.a,b)
r=A.hy(a.b,p.b,b)
r.toString
q=A.T(a.c,p.c,b)
q.toString
return new A.ee(r,q,s)}return p.lb(a,b)},
cb(a,b){var s,r,q,p=this
if(a instanceof A.eu)return new A.ee(p.b,p.c*(1-b),A.az(p.a,a.a,b))
if(a instanceof A.dC){s=p.c
return new A.ee(p.b,s+(1-s)*b,A.az(p.a,a.a,b))}if(a instanceof A.ee){s=A.az(p.a,a.a,b)
r=A.hy(p.b,a.b,b)
r.toString
q=A.T(p.c,a.c,b)
q.toString
return new A.ee(r,q,s)}return p.lc(a,b)},
nL(a){var s=a.gfI()/2
s=A.hy(this.b,A.Bn(new A.bs(s,s)),1-this.c)
s.toString
return s},
fF(a,b){var s=$.ap().cr()
s.eO(this.nL(a).W(b).dJ(a))
return s},
hP(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.d7(this.nL(b).W(c).dJ(b).dh(s.b*s.d/2),s.hX())
break}},
k(a,b){var s=this
if(b==null)return!1
if(J.X(b)!==A.A(s))return!1
return b instanceof A.ee&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c===s.c},
gt(a){return A.S(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"StadiumBorder("+this.a.i(0)+", "+this.b.i(0)+", "+B.d.M(this.c*100,1)+"% of the way to being a RoundedRectangleBorder)"}}
A.nf.prototype={
F(){return"TextOverflow."+this.b}}
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
F(){return"TextWidthBasis."+this.b}}
A.abh.prototype={}
A.L8.prototype={
a9(){var s=this,r=s.a
if(r!=null)r.m()
s.dy=s.dx=s.fr=s.a=null},
sct(a,b){var s,r,q=this
if(J.f(q.d,b))return
s=q.d
s=s==null?null:s.a
if(!J.f(s,b.a)){s=q.CW
if(s!=null)s.m()
q.CW=null}s=q.d
s=s==null?null:s.aC(0,b)
r=s==null?B.cG:s
q.d=b
q.e=null
s=r.a
if(s>=3)q.a9()
else if(s>=2)q.b=!0},
gu7(){var s=this.e
if(s==null){s=this.d
s=s==null?null:s.M_(!1)
this.e=s}return s==null?"":s},
sB1(a,b){if(this.f===b)return
this.f=b
this.a9()},
sbK(a){var s,r=this
if(r.r===a)return
r.r=a
r.a9()
s=r.CW
if(s!=null)s.m()
r.CW=null},
sB2(a){var s,r=this
if(r.w===a)return
r.w=a
r.a9()
s=r.CW
if(s!=null)s.m()
r.CW=null},
sa2n(a){if(this.x==a)return
this.x=a
this.a9()},
szU(a,b){if(J.f(this.y,b))return
this.y=b
this.a9()},
szZ(a){if(this.z==a)return
this.z=a
this.a9()},
sB3(a){if(this.as===a)return
this.as=a
this.a9()},
uU(a){if(a==null||a.length===0||A.cS(a,this.ch))return
this.ch=a
this.a9()},
Ed(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.d.a
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
o=l==null?f:new A.L5(l)
k=e.w
j=e.x
i=e.d
h=e.r
if(h==null)h=14
e=e.as
e=A.ajR(n,i,h*q,j,k,e,m,p,f,s,r,o)}if(e==null){e=g.f
s=g.r
if(s==null)s=a
r=g.w
q=g.z
p=g.at
p=A.ajR(g.x,f,14*r,f,f,f,g.y,q,f,e,s,p)
e=p}return e},
T5(){return this.Ed(null)},
gu9(){var s,r,q=this,p=q.CW
if(p==null){p=q.Ed(B.W)
s=$.ap().yy(p)
p=q.d
if(p==null)r=null
else{p=p.a
r=p==null?null:p.BK(q.w)}if(r!=null)s.AL(r)
s.rp(" ")
p=s.be()
p.iE(B.TD)
q.CW=p}return p.gbS(p)},
gbn(a){var s=this.as,r=this.a
s=s===B.ZB?r.gKK():r.gbn(r)
return Math.ceil(s)},
eS(a){var s
switch(a.a){case 0:s=this.a
return s.grt(s)
case 1:s=this.a
return s.ga43(s)}},
Ec(){var s,r,q=this,p=q.d
if(p==null)throw A.c(A.a5("TextPainter.text must be set to a non-null value before using the TextPainter."))
s=q.T5()
r=$.ap().yy(s)
s=q.w
p.Ig(r,q.ch,s)
q.ay=r.ga5E()
q.a=r.be()
q.b=!1},
Fo(a,b){var s,r,q=this
q.a.iE(new A.kC(b))
if(a!==b){switch(q.as.a){case 1:s=Math.ceil(q.a.gKK())
break
case 0:s=Math.ceil(q.a.ga50())
break
default:s=null}s=A.H(s,a,b)
r=q.a
if(s!==Math.ceil(r.gbn(r)))q.a.iE(new A.kC(s))}},
zR(a,b){var s=this,r=s.a==null
if(!r&&b===s.cx&&a===s.cy)return
if(s.b||r)s.Ec()
s.cx=b
s.cy=a
s.dy=s.dx=s.fr=null
s.Fo(b,a)
s.ax=s.a.ux()},
a4I(){return this.zR(1/0,0)},
aF(a,b){var s,r=this,q=r.cx,p=r.cy
if(r.a==null||q==null||p==null)throw A.c(A.a5("TextPainter.paint called when text geometry was not yet calculated.\nPlease call layout() before paint() to position the text before painting it."))
if(r.b){r.Ec()
r.Fo(q,p)}s=r.a
s.toString
a.kv(s,b)},
EL(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.gu7().length
if(g===0||a>g)return null
s=B.b.ac(h.gu7(),Math.max(0,a-1))
r=(s&63488)===55296||h.d.ac(0,a)===8205||s===8207||s===8206
q=r?2:1
p=A.a([],t.px)
for(o=-g,n=!r,m=s===10;p.length===0;){l=a-q
p=h.a.Bv(l,a,B.mo)
if(p.length===0){if(n&&m)break
if(l<o)break
q*=2
continue}k=B.c.gK(p)
if(m){o=k.d
return new A.C(h.gw7().a,o,h.gw7().a,o+o-k.b)}o=k.e
j=o===B.t?k.c:k.a
i=o===B.W?j-(b.c-b.a):j
o=h.a
o=A.H(i,0,o.gbn(o))
n=h.a
return new A.C(o,k.b,A.H(i,0,n.gbn(n)),k.d)}return null},
EK(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.gu7().length
if(h===0||a<0)return null
s=B.b.ac(i.gu7(),Math.min(a,h-1))
r=(s&63488)===55296||s===8205||s===8207||s===8206
q=r?2:1
p=A.a([],t.px)
for(o=h<<1>>>0,n=!r;p.length===0;){m=a+q
p=i.a.Bv(a,m,B.mo)
if(p.length===0){if(n)break
if(m>=o)break
q*=2
continue}l=B.c.gS(p)
o=l.e
k=o===B.t?l.a:l.c
j=o===B.W?k-(b.c-b.a):k
o=i.a
o=A.H(j,0,o.gbn(o))
n=i.a
return new A.C(o,l.b,A.H(j,0,n.gbn(n)),l.d)}return null},
gw7(){var s=this
switch(s.f.a){case 0:return B.j
case 1:return new A.t(s.gbn(s),0)
case 2:return new A.t(s.gbn(s)/2,0)
case 3:case 4:switch(s.r.a){case 0:return new A.t(s.gbn(s),0)
case 1:return B.j}break
case 5:switch(s.r.a){case 0:return B.j
case 1:return new A.t(s.gbn(s),0)}break}},
E2(a,b){var s,r,q,p,o=this
if(a.k(0,o.dx)&&b.k(0,o.dy))return
s=a.a
switch(a.b.a){case 0:r=o.EL(s,b)
if(r==null)r=o.EK(s,b)
break
case 1:r=o.EK(s,b)
if(r==null)r=o.EL(s,b)
break
default:r=null}q=r!=null
p=q?new A.t(r.a,r.b):o.gw7()
o.db=new A.abh(p,q?r.d-r.b:null)
o.dx=a
o.dy=b},
m(){var s=this,r=s.CW
if(r!=null)r.m()
s.CW=null
r=s.a
if(r!=null)r.m()
s.d=s.a=null}}
A.xo.prototype={
gIP(a){return this.e},
gBo(){return!0},
ix(a,b){t.Y.b(a)},
Ig(a,b,c){var s,r,q,p,o=this.a,n=o!=null
if(n)a.AL(o.BK(c))
o=this.b
if(o!=null)try{a.rp(o)}catch(q){o=A.ae(q)
if(o instanceof A.fL){s=o
r=A.au(q)
A.e6(new A.bJ(s,r,"painting library",A.bo("while building a TextSpan"),null,!1))
a.rp("\ufffd")}else throw q}o=this.c
if(o!=null)for(p=0;p<1;++p)o[p].Ig(a,b,c)
if(n)a.hS()},
aV(a){var s,r
if(this.b!=null)if(!a.$1(this))return!1
s=this.c
if(s!=null)for(r=0;r<1;++r)if(!s[r].aV(a))return!1
return!0},
MO(a,b){var s,r,q,p,o=this.b
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
Iw(a,b,c){var s,r=this.b
if(r!=null)a.a+=r
r=this.c
if(r!=null)for(s=0;s<1;++s)r[s].Iw(a,!0,c)},
Iv(a,b,c){var s,r,q=this.b
if(q!=null){s=A.a([],t.ve)
a.push(A.anl(q,null,null,s))}q=this.c
if(q!=null)for(r=0;r<1;++r)q[r].Iv(a,b,!1)},
a19(a){return this.Iv(a,null,!1)},
a0V(a,b){var s,r,q,p=this.b
if(p==null)return null
s=b.a
r=a-s
q=p.length
if(r<q)return B.b.ac(p,r)
b.a=s+q
return null},
aC(a,b){var s,r,q,p,o,n=this
if(n===b)return B.dL
if(A.A(b)!==A.A(n))return B.cG
if(b.b==n.b){s=n.c==null?null:1
s=s!=(b.c==null?null:1)||n.a==null!==(b.a==null)}else s=!0
if(s)return B.cG
s=n.a
if(s!=null){r=b.a
r.toString
q=s.aC(0,r)
p=q.a>0?q:B.dL
if(p===B.cG)return p}else p=B.dL
s=n.c
if(s!=null)for(r=b.c,o=0;o<1;++o){q=s[o].aC(0,r[o])
if(q.a>p.a)p=q
if(p===B.cG)return p}return p},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.A(s))return!1
if(!s.Oh(0,b))return!1
return b instanceof A.xo&&b.b==s.b&&s.e.k(0,b.e)&&A.cS(b.c,s.c)},
gt(a){var s=this,r=null,q=A.h0.prototype.gt.call(s,s),p=s.c
p=p==null?r:A.df(p)
return A.S(q,s.b,r,r,r,r,s.e,p,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
c0(){return"TextSpan"},
$ian:1,
$ij5:1,
gAm(){return null},
gAn(){return null}}
A.r.prototype={
gmi(){return this.e},
glI(a){return this.d},
of(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=b9==null?a.a:b9,a1=a.ay
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
c=b0==null?a.glI(a):b0
b=b1==null?a.e:b1
return A.bY(r,q,s,null,g,f,e,d,c,b,a.fr,p,a.x,h,o,a1,k,a0,j,n,a.ax,a.fy,a.f,i,l,m)},
hC(a){return this.of(null,null,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
a1r(a){return this.of(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null)},
a1B(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5){return this.of(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,null,r,s,a0,a1,a2,a3,a4,a5)},
II(a,b){return this.of(null,null,a,null,null,null,null,null,null,null,null,b,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
ID(a){return this.of(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null,null,null)},
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
a1=a4.glI(a4)
a2=a4.e
a3=a4.f
return this.a1B(g,r,s,null,c,b,a,a0,a1,a2,e,q,o,d,p,h,k,j,n,i,a4.fy,a3,f,l,m)},
BK(a){var s,r,q=this,p=q.gmi(),o=q.r
o=o==null?null:o*a
s=q.ch
if(s==null){s=q.c
if(s!=null){r=$.ap().bk()
r.sag(0,s)
s=r}else s=null}return A.aoN(s,q.b,q.CW,q.cx,q.cy,q.db,q.d,p,q.fr,o,q.x,q.fx,q.w,q.ay,q.as,q.at,q.y,q.ax,q.dy,q.Q,q.z)},
aC(a,b){var s=this
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
c0(){return"TextStyle"}}
A.Rd.prototype={}
A.Fa.prototype={
Rj(a,b,c,d,e){var s=this
s.r=A.aqi(new A.Zz(s),s.gz2(s),0,10,0)},
d0(a,b){var s,r,q=this
if(b>q.r)return q.gtf()
s=q.e
r=q.c
return q.d+s*Math.pow(q.b,b)/r-s/r-q.f/2*b*b},
dQ(a,b){var s=this
if(b>s.r)return 0
return s.e*Math.pow(s.b,b)-s.f*b},
gtf(){var s=this
if(s.f===0)return s.d-s.e/s.c
return s.d0(0,s.r)},
LV(a){var s,r=this,q=r.d
if(a===q)return 0
s=r.e
if(s!==0)if(s>0)q=a<q||a>r.gtf()
else q=a>q||a<r.gtf()
else q=!0
if(q)return 1/0
return A.aqi(r.gz2(r),r.ga7h(r),0,10,a)},
js(a){return Math.abs(this.dQ(0,a))<this.a.c},
i(a){return"FrictionSimulation(c\u2093: "+B.d.M(this.b,1)+", x\u2080: "+B.d.M(this.d,1)+", dx\u2080: "+B.d.M(this.e,1)+")"}}
A.Zz.prototype={
$1(a){var s=this.a
return s.e*Math.pow(s.b,a)*s.c-s.f},
$S:59}
A.a6K.prototype={
i(a){return"Simulation"}}
A.a8E.prototype={
i(a){return"SpringDescription(mass: "+B.d.M(this.a,1)+", stiffness: "+B.f.M(this.b,1)+", damping: "+B.d.M(this.c,1)+")"}}
A.pM.prototype={
F(){return"SpringType."+this.b}}
A.KK.prototype={
d0(a,b){return this.b+this.c.d0(0,b)},
dQ(a,b){return this.c.dQ(0,b)},
js(a){var s=this.c
return A.AL(s.d0(0,a),0,this.a.a)&&A.AL(s.dQ(0,a),0,this.a.c)},
i(a){var s=this.c
return"SpringSimulation(end: "+B.d.M(this.b,1)+", "+s.gdk(s).i(0)+")"}}
A.kM.prototype={
d0(a,b){return this.js(b)?this.b:this.PT(0,b)}}
A.abw.prototype={
d0(a,b){return(this.b+this.c*b)*Math.pow(2.718281828459045,this.a*b)},
dQ(a,b){var s=this.a,r=Math.pow(2.718281828459045,s*b),q=this.c
return s*(this.b+q*b)*r+q*r},
gdk(a){return B.Vo}}
A.aea.prototype={
d0(a,b){var s=this
return s.c*Math.pow(2.718281828459045,s.a*b)+s.d*Math.pow(2.718281828459045,s.b*b)},
dQ(a,b){var s=this,r=s.a,q=s.b
return s.c*r*Math.pow(2.718281828459045,r*b)+s.d*q*Math.pow(2.718281828459045,q*b)},
gdk(a){return B.Vq}}
A.afN.prototype={
d0(a,b){var s=this,r=s.a*b
return Math.pow(2.718281828459045,s.b*b)*(s.c*Math.cos(r)+s.d*Math.sin(r))},
dQ(a,b){var s,r=this,q=r.b,p=Math.pow(2.718281828459045,q*b),o=r.a,n=o*b,m=Math.cos(n),l=Math.sin(n)
n=r.d
s=r.c
return p*(n*o*m-s*o*l)+q*p*(n*l+s*m)},
gdk(a){return B.Vp}}
A.Li.prototype={
i(a){return"Tolerance(distance: \xb1"+A.h(this.a)+", time: \xb10.001, velocity: \xb1"+A.h(this.c)+")"}}
A.po.prototype={
zq(){var s=this,r=s.aE$
r===$&&A.b()
r=r.e
r.toString
r.syr(s.IN())
if(s.aE$.e.C$!=null)s.MX()},
zw(){},
zs(){},
IN(){var s,r=$.cq(),q=r.w
if(q==null){s=self.window.devicePixelRatio
q=s===0?1:s}return new A.LB(r.gkN().d1(0,q),q)},
W3(){var s,r=this
if($.aN().a.c){if(r.b1$==null){s=r.aE$
s===$&&A.b()
r.b1$=s.Jn()}}else{s=r.b1$
if(s!=null)s.m()
r.b1$=null}},
Nl(a){var s,r=this
if(a){if(r.b1$==null){s=r.aE$
s===$&&A.b()
r.b1$=s.Jn()}}else{s=r.b1$
if(s!=null)s.m()
r.b1$=null}},
Wm(a){B.Tl.nw("first-frame",null,!1,t.H)},
W1(a,b,c){var s=this.aE$
s===$&&A.b()
s=s.as
if(s!=null)s.a5C(a,b,null)},
W5(){var s,r=this.aE$
r===$&&A.b()
r=r.e
r.toString
s=t.W
s.a(A.L.prototype.gbx.call(r)).ay.B(0,r)
s.a(A.L.prototype.gbx.call(r)).mI()},
W9(a){var s=this.aE$
s===$&&A.b()
s.e.toString
s=$.dG;(s==null?$.dG=A.k8():s).a70(a)},
W7(){var s=this.aE$
s===$&&A.b()
s.e.lS()},
Vy(a){this.z1()
this.Z4()},
Z4(){$.bP.dy$.push(new A.a4U(this))},
I0(){--this.aO$
if(!this.bm$)this.uK()},
z1(){var s=this,r=s.aE$
r===$&&A.b()
r.a2U()
s.aE$.a2T()
s.aE$.a2V()
if(s.bm$||s.aO$===0){s.aE$.e.a15()
s.aE$.a2W()
s.bm$=!0}},
$ian:1,
$idE:1}
A.a4U.prototype={
$1(a){var s=this.a,r=s.b5$
r.toString
s=s.aE$
s===$&&A.b()
r.a6Y(s.e.ga40())},
$S:2}
A.aQ.prototype={
yv(a,b,c,d){var s=this,r=d==null?s.a:d,q=b==null?s.b:b,p=c==null?s.c:c
return new A.aQ(r,q,p,a==null?s.d:a)},
a1y(a,b){return this.yv(null,null,a,b)},
IF(a){return this.yv(a,null,null,null)},
a1s(a){return this.yv(null,a,null,null)},
IT(a){var s=this,r=a.gcp(),q=a.gb8(a)+a.gbd(a),p=Math.max(0,s.a-r),o=Math.max(0,s.c-q)
return new A.aQ(p,Math.max(p,s.b-r),o,Math.max(o,s.d-q))},
oD(a){var s=this,r=a.a,q=a.b,p=a.c,o=a.d
return new A.aQ(A.H(s.a,r,q),A.H(s.b,r,q),A.H(s.c,p,o),A.H(s.d,p,o))},
B6(a,b){var s,r,q=this,p=b==null,o=q.a,n=p?o:A.H(b,o,q.b),m=q.b
p=p?m:A.H(b,o,m)
o=a==null
m=q.c
s=o?m:A.H(a,m,q.d)
r=q.d
return new A.aQ(n,p,s,o?r:A.H(a,m,r))},
um(a){return this.B6(a,null)},
B5(a){return this.B6(null,a)},
bD(a){var s=this
return new A.a6(A.H(a.a,s.a,s.b),A.H(a.b,s.c,s.d))},
oe(a){var s,r,q,p,o,n=this,m=n.a,l=n.b
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
gKx(){var s=this
return s.a>=s.b&&s.c>=s.d},
a_(a,b){var s=this
return new A.aQ(s.a*b,s.b*b,s.c*b,s.d*b)},
d1(a,b){var s=this
return new A.aQ(s.a/b,s.b/b,s.c/b,s.d/b)},
ga4v(){var s=this,r=s.a
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
i(a){var s,r=this,q=r.ga4v()?"":"; NOT NORMALIZED",p=r.a
if(p===1/0&&r.c===1/0)return"BoxConstraints(biggest"+q+")"
if(p===0&&r.b===1/0&&r.c===0&&r.d===1/0)return"BoxConstraints(unconstrained"+q+")"
s=new A.Ug()
return"BoxConstraints("+s.$3(p,r.b,"w")+", "+s.$3(r.c,r.d,"h")+q+")"}}
A.Ug.prototype={
$3(a,b,c){if(a===b)return c+"="+B.d.M(a,1)
return B.d.M(a,1)+"<="+c+"<="+B.d.M(b,1)},
$S:233}
A.hz.prototype={
y6(a,b,c){if(c!=null){c=A.HP(A.ajT(c))
if(c==null)return!1}return this.HZ(a,b,c)},
nX(a,b,c){var s,r=b==null,q=r?c:c.ab(0,b)
r=!r
if(r)this.c.push(new A.qO(new A.t(-b.a,-b.b)))
s=a.$2(this,q)
if(r)this.u8()
return s},
HZ(a,b,c){var s,r=c==null,q=r?b:A.cw(c,b)
r=!r
if(r)this.c.push(new A.yG(c))
s=a.$2(this,q)
if(r)this.u8()
return s},
HY(a,b,c){var s,r=this
if(b!=null)r.c.push(new A.qO(new A.t(-b.a,-b.b)))
else{c.toString
c=A.HP(A.ajT(c))
c.toString
r.c.push(new A.yG(c))}s=a.$1(r)
r.u8()
return s},
a06(a,b){return this.HY(a,null,b)},
a05(a,b){return this.HY(a,b,null)}}
A.o5.prototype={
i(a){return"<optimized out>#"+A.bM(this.a)+"@"+this.c.i(0)}}
A.eC.prototype={
i(a){return"offset="+this.a.i(0)}}
A.t4.prototype={}
A.F.prototype={
eB(a){if(!(a.e instanceof A.eC))a.e=new A.eC(B.j)},
hb(a){var s,r=this.k1
if(r==null)r=this.k1=A.y(t.k,t.DB)
s=r.bF(0,a,new A.a4m(this,a))
return s},
cf(a){return B.R},
gjT(){var s=this.k3
return new A.C(0,0,0+s.a,0+s.b)},
uB(a,b){var s=null
try{s=this.jO(a)}finally{}if(s==null&&!b)return this.k3.b
return s},
My(a){return this.uB(a,!1)},
jO(a){var s=this,r=s.k4
if(r==null)r=s.k4=A.y(t.E9,t.u6)
r.bF(0,a,new A.a4l(s,a))
return s.k4.j(0,a)},
eS(a){return null},
ga1(){return t.k.a(A.z.prototype.ga1.call(this))},
SF(){var s,r=this,q=r.k4,p=q==null
if(!(!p&&q.a!==0)){s=r.id
if(!(s!=null&&s.a!==0)){s=r.k1
s=s!=null&&s.a!==0}else s=!0}else s=!0
if(s){if(!p)q.a0(0)
q=r.id
if(q!=null)q.a0(0)
q=r.k1
if(q!=null)q.a0(0)
return!0}return!1},
a9(){var s=this
if(s.SF()&&s.c instanceof A.z){s.tO()
return}s.Pc()},
cz(a,b){var s,r=this
if(r.k3!=null)if(!a.k(0,t.k.a(A.z.prototype.ga1.call(r)))){s=r.k4
s=s!=null&&s.a!==0}else s=!1
else s=!1
if(s){s=r.k4
if(s!=null)s.a0(0)}r.Pb(a,b)},
iE(a){return this.cz(a,!1)},
pp(){this.k3=this.cf(t.k.a(A.z.prototype.ga1.call(this)))},
bJ(){},
bY(a,b){var s=this
if(s.k3.A(0,b))if(s.cX(a,b)||s.jp(b)){a.B(0,new A.o5(b,s))
return!0}return!1},
jp(a){return!1},
cX(a,b){return!1},
dA(a,b){var s,r=a.e
r.toString
s=t.Ch.a(r).a
b.aw(0,s.a,s.b)},
l_(a){var s,r,q,p,o,n=this.bB(0,null)
if(n.hB(n)===0)return B.j
s=new A.fA(new Float64Array(3))
s.fH(0,0,1)
r=new A.fA(new Float64Array(3))
r.fH(0,0,0)
q=n.iG(r)
r=new A.fA(new Float64Array(3))
r.fH(0,0,1)
p=n.iG(r).ab(0,q)
r=new A.fA(new Float64Array(3))
r.fH(a.a,a.b,0)
o=n.iG(r)
r=o.ab(0,p.BT(s.J5(o)/s.J5(p))).a
return new A.t(r[0],r[1])},
ghQ(){var s=this.k3
return new A.C(0,0,0+s.a,0+s.b)},
ix(a,b){this.Pa(a,b)}}
A.a4m.prototype={
$0(){return this.a.cf(this.b)},
$S:234}
A.a4l.prototype={
$0(){return this.a.eS(this.b)},
$S:235}
A.cL.prototype={
a25(a){var s,r,q,p=this.aq$
for(s=A.n(this).h("cL.1?");p!=null;){r=s.a(p.e)
q=p.jO(a)
if(q!=null)return q+r.a.b
p=r.ap$}return null},
IS(a){var s,r,q,p,o=this.aq$
for(s=A.n(this).h("cL.1"),r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.jO(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.ap$}return r},
yF(a,b){var s,r,q={},p=q.a=this.d9$
for(s=A.n(this).h("cL.1");p!=null;p=r){p=p.e
p.toString
s.a(p)
if(a.nX(new A.a4k(q,b,p),p.a,b))return!0
r=p.c5$
q.a=r}return!1},
ol(a,b){var s,r,q,p,o,n=this.aq$
for(s=A.n(this).h("cL.1"),r=b.a,q=b.b;n!=null;){p=n.e
p.toString
s.a(p)
o=p.a
a.f6(n,new A.t(o.a+r,o.b+q))
n=p.ap$}}}
A.a4k.prototype={
$2(a,b){return this.a.a.bY(a,b)},
$S:17}
A.xY.prototype={
ah(a){this.vb(0)}}
A.fi.prototype={
i(a){return this.q8(0)+"; id="+A.h(this.e)}}
A.a2l.prototype={
dV(a,b){var s,r=this.b.j(0,a)
r.cz(b,!0)
s=r.k3
s.toString
return s},
ec(a,b){var s=this.b.j(0,a).e
s.toString
t.DU.a(s).a=b},
Sm(a,b){var s,r,q,p,o,n,m=this,l=m.b
try{m.b=A.y(t.K,t.x)
for(r=t.DU,q=b;q!=null;q=n){p=q.e
p.toString
s=r.a(p)
p=m.b
p.toString
o=s.e
o.toString
p.l(0,o,q)
n=s.ap$}m.u6(a)}finally{m.b=l}},
i(a){return"MultiChildLayoutDelegate"}}
A.Jq.prototype={
eB(a){if(!(a.e instanceof A.fi))a.e=new A.fi(null,null,B.j)},
syI(a){var s=this,r=s.E
if(r===a)return
if(A.A(a)!==A.A(r)||a.mZ(r))s.a9()
s.E=a
s.b!=null},
am(a){this.Qc(a)},
ah(a){this.Qd(0)},
cf(a){return a.bD(new A.a6(A.H(1/0,a.a,a.b),A.H(1/0,a.c,a.d)))},
bJ(){var s=this,r=t.k.a(A.z.prototype.ga1.call(s))
r=r.bD(new A.a6(A.H(1/0,r.a,r.b),A.H(1/0,r.c,r.d)))
s.k3=r
s.E.Sm(r,s.aq$)},
aF(a,b){this.ol(a,b)},
cX(a,b){return this.yF(a,b)}}
A.z3.prototype={
am(a){var s,r,q
this.eF(a)
s=this.aq$
for(r=t.DU;s!=null;){s.am(a)
q=s.e
q.toString
s=r.a(q).ap$}},
ah(a){var s,r,q
this.e1(0)
s=this.aq$
for(r=t.DU;s!=null;){s.ah(0)
q=s.e
q.toString
s=r.a(q).ap$}}}
A.PR.prototype={}
A.DC.prototype={
Z(a,b){var s=this.a
return s==null?null:s.Z(0,b)},
H(a,b){var s=this.a
return s==null?null:s.H(0,b)},
gBW(){return null},
C8(a){return this.i4(a)},
tz(a){return null},
i(a){var s=A.bM(this),r=this.a
r=r==null?null:r.i(0)
if(r==null)r=""
return"<optimized out>#"+s+"("+r+")"}}
A.Jr.prototype={
su5(a){var s=this.v
if(s==a)return
this.v=a
this.Ei(a,s)},
sJK(a){var s=this.U
if(s==a)return
this.U=a
this.Ei(a,s)},
Ei(a,b){var s=this,r=a==null
if(r)s.ao()
else if(b==null||A.A(a)!==A.A(b)||a.i4(b))s.ao()
if(s.b!=null){if(b!=null)b.H(0,s.geb())
if(!r)a.Z(0,s.geb())}if(r){if(s.b!=null)s.b2()}else if(b==null||A.A(a)!==A.A(b)||a.C8(b))s.b2()},
sua(a){if(this.au.k(0,a))return
this.au=a
this.a9()},
am(a){var s,r=this
r.nc(a)
s=r.v
if(s!=null)s.Z(0,r.geb())
s=r.U
if(s!=null)s.Z(0,r.geb())},
ah(a){var s=this,r=s.v
if(r!=null)r.H(0,s.geb())
r=s.U
if(r!=null)r.H(0,s.geb())
s.lf(0)},
cX(a,b){var s=this.U
if(s!=null){s=s.tz(b)
s=s===!0}else s=!1
if(s)return!0
return this.qb(a,b)},
jp(a){var s=this.v
if(s!=null){s=s.tz(a)
s=s!==!1}else s=!1
return s},
bJ(){this.vg()
this.b2()},
od(a){return a.bD(this.au)},
FR(a,b,c){var s
A.b6("debugPreviousCanvasSaveCount")
a.cD(0)
if(!b.k(0,B.j))a.aw(0,b.a,b.b)
s=this.k3
s.toString
c.aF(a,s)
a.cA(0)},
aF(a,b){var s,r,q=this
if(q.v!=null){s=a.gbG(a)
r=q.v
r.toString
q.FR(s,b,r)
q.GF(a)}q.hj(a,b)
if(q.U!=null){s=a.gbG(a)
r=q.U
r.toString
q.FR(s,b,r)
q.GF(a)}},
GF(a){},
eV(a){var s,r=this
r.hi(a)
r.bR=null
s=r.U
r.e7=s==null?null:s.gBW()
a.a=!1},
o5(a,b,c){var s,r,q,p,o=this
o.h_=A.aog(o.h_,B.rI)
o.iw=A.aog(o.iw,B.rI)
s=o.h_
r=s!=null&&!s.gN(s)
s=o.iw
q=s!=null&&!s.gN(s)
s=A.a([],t.T)
if(r){p=o.h_
p.toString
B.c.J(s,p)}B.c.J(s,c)
if(q){p=o.iw
p.toString
B.c.J(s,p)}o.CV(a,b,s)},
lS(){this.vd()
this.iw=this.h_=null}}
A.VN.prototype={}
A.Ju.prototype={
Rs(a){var s,r,q,p,o=this
try{r=o.E
if(r!==""){q=$.asa()
s=$.ap().yy(q)
s.AL($.asb())
s.rp(r)
r=s.be()
o.P!==$&&A.eA()
o.P=r}else{o.P!==$&&A.eA()
o.P=null}}catch(p){}},
gjW(){return!0},
jp(a){return!0},
cf(a){return a.bD(B.Vh)},
aF(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
try{p=a.gbG(a)
o=i.k3
n=b.a
m=b.b
l=o.a
o=o.b
k=$.ap().bk()
k.sag(0,$.as9())
p.cl(new A.C(n,m,n+l,m+o),k)
p=i.P
p===$&&A.b()
if(p!=null){s=i.k3.a
r=0
q=0
if(s>328){s-=128
r+=64}p.iE(new A.kC(s))
if(i.k3.b>96+p.gbS(p)+12)q+=96
a.gbG(a).kv(p,b.V(0,new A.t(r,q)))}}catch(j){}}}
A.tY.prototype={
F(){return"FlexFit."+this.b}}
A.du.prototype={
i(a){return this.q8(0)+"; flex="+A.h(this.e)+"; fit="+A.h(this.f)}}
A.uM.prototype={
F(){return"MainAxisSize."+this.b}}
A.ms.prototype={
F(){return"MainAxisAlignment."+this.b}}
A.k5.prototype={
F(){return"CrossAxisAlignment."+this.b}}
A.pm.prototype={
eB(a){if(!(a.e instanceof A.du))a.e=new A.du(null,null,B.j)},
eS(a){if(this.E===B.aT)return this.IS(a)
return this.a25(a)},
qp(a){switch(this.E.a){case 0:return a.b
case 1:return a.a}},
qq(a){switch(this.E.a){case 0:return a.a
case 1:return a.b}},
cf(a){var s
if(this.al===B.nl)return B.R
s=this.E6(a,A.ai2())
switch(this.E.a){case 0:return a.bD(new A.a6(s.a,s.b))
case 1:return a.bD(new A.a6(s.b,s.a))}},
E6(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.E===B.aT?a2.b:a2.d,a0=a<1/0,a1=c.aq$
for(s=t.uc,r=a2.b,q=a2.d,p=b,o=0,n=0,m=0;a1!=null;){l=a1.e
l.toString
s.a(l)
k=l.e
if(k==null)k=0
if(k>0){o+=k
p=a1}else{if(c.al===B.nk)switch(c.E.a){case 0:j=A.o4(q,b)
break
case 1:j=A.o4(b,r)
break
default:j=b}else switch(c.E.a){case 0:j=new A.aQ(0,1/0,0,q)
break
case 1:j=new A.aQ(0,r,0,1/0)
break
default:j=b}i=a3.$2(a1,j)
m+=c.qq(i)
n=Math.max(n,A.iF(c.qp(i)))}a1=l.ap$}h=Math.max(0,(a0?a:0)-m)
if(o>0){g=a0?h/o:0/0
a1=c.aq$
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
switch((l==null?B.ny:l).a){case 0:if(d.b!==d)A.K(A.a1g(d.a))
d.b=e
break
case 1:if(d.b!==d)A.K(A.a1g(d.a))
d.b=0
break}if(c.al===B.nk)switch(c.E.a){case 0:l=d.b
if(l===d)A.K(A.h4(d.a))
j=new A.aQ(l,e,q,q)
break
case 1:l=d.b
if(l===d)A.K(A.h4(d.a))
j=new A.aQ(r,r,l,e)
break
default:j=b}else switch(c.E.a){case 0:l=d.b
if(l===d)A.K(A.h4(d.a))
j=new A.aQ(l,e,0,q)
break
case 1:l=d.b
if(l===d)A.K(A.h4(d.a))
j=new A.aQ(0,r,l,e)
break
default:j=b}i=a3.$2(a1,j)
m+=c.qq(i)
f+=e
n=Math.max(n,A.iF(c.qp(i)))}l=a1.e
l.toString
a1=s.a(l).ap$}}return new A.adi(a0&&c.ae===B.B?a:m,n,m)},
bJ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.k.a(A.z.prototype.ga1.call(a)),a1=a.E6(a0,A.ai3()),a2=a1.a,a3=a1.b
if(a.al===B.nl){s=a.aq$
for(r=t.uc,q=0,p=0,o=0;s!=null;){n=a.bH
n.toString
m=s.uB(n,!0)
if(m!=null){q=Math.max(q,m)
p=Math.max(m,p)
o=Math.max(s.k3.b-m,o)
a3=Math.max(p+o,a3)}n=s.e
n.toString
s=r.a(n).ap$}}else q=0
switch(a.E.a){case 0:r=a.k3=a0.bD(new A.a6(a2,a3))
a2=r.a
a3=r.b
break
case 1:r=a.k3=a0.bD(new A.a6(a3,a2))
a2=r.b
a3=r.a
break}l=a2-a1.c
a.cn=Math.max(0,-l)
k=Math.max(0,l)
j=A.b6("leadingSpace")
i=A.b6("betweenSpace")
r=A.aqw(a.E,a.aN,a.aQ)
h=r===!1
switch(a.P.a){case 0:j.sc6(0)
i.sc6(0)
break
case 1:j.sc6(k)
i.sc6(0)
break
case 2:j.sc6(k/2)
i.sc6(0)
break
case 3:j.sc6(0)
r=a.dE$
i.sc6(r>1?k/(r-1):0)
break
case 4:r=a.dE$
i.sc6(r>0?k/r:0)
j.sc6(i.aA()/2)
break
case 5:r=a.dE$
i.sc6(r>0?k/(r+1):0)
j.sc6(i.aA())
break}g=h?a2-j.aA():j.aA()
s=a.aq$
for(r=t.uc,n=a3/2,f=i.a;s!=null;){e=s.e
e.toString
r.a(e)
d=a.al
switch(d.a){case 0:case 1:if(A.aqw(A.aDL(a.E),a.aN,a.aQ)===(d===B.bb))c=0
else{d=s.k3
d.toString
c=a3-a.qp(d)}break
case 2:d=s.k3
d.toString
c=n-a.qp(d)/2
break
case 3:c=0
break
case 4:if(a.E===B.aT){d=a.bH
d.toString
m=s.uB(d,!0)
c=m!=null?q-m:0}else c=0
break
default:c=null}if(h){d=s.k3
d.toString
g-=a.qq(d)}switch(a.E.a){case 0:e.a=new A.t(g,c)
break
case 1:e.a=new A.t(c,g)
break}if(h){d=i.b
if(d===i)A.K(A.h4(f))
g-=d}else{d=s.k3
d.toString
d=a.qq(d)
b=i.b
if(b===i)A.K(A.h4(f))
g+=d+b}s=e.ap$}},
cX(a,b){return this.yF(a,b)},
aF(a,b){var s,r,q,p=this
if(!(p.cn>1e-10)){p.ol(a,b)
return}s=p.k3
if(s.gN(s))return
s=p.C
r=p.cx
r===$&&A.b()
q=p.k3
s.saZ(0,a.kO(r,b,new A.C(0,0,0+q.a,0+q.b),p.ga26(),p.dd,s.a))},
m(){this.C.saZ(0,null)
this.Qe()},
j8(a){var s
switch(this.dd.a){case 0:return null
case 1:case 2:case 3:if(this.cn>1e-10){s=this.k3
s=new A.C(0,0,0+s.a,0+s.b)}else s=null
return s}},
c0(){var s=this.Pf()
return s}}
A.adi.prototype={}
A.PS.prototype={
am(a){var s,r,q
this.eF(a)
s=this.aq$
for(r=t.uc;s!=null;){s.am(a)
q=s.e
q.toString
s=r.a(q).ap$}},
ah(a){var s,r,q
this.e1(0)
s=this.aq$
for(r=t.uc;s!=null;){s.ah(0)
q=s.e
q.toString
s=r.a(q).ap$}}}
A.PT.prototype={}
A.z4.prototype={
m(){var s,r,q
for(s=this.Jy$,r=s.length,q=0;q<r;++q)s[q].m()
this.i8()},
f7(){this.Pe()}}
A.Jx.prototype={
Wp(){var s=this
if(s.E!=null)return
s.E=s.de
s.P=!1},
Fu(){this.P=this.E=null
this.ao()},
sfv(a,b){var s=this,r=s.ae
if(b==r)return
if(b!=null&&r!=null&&b.Kq(r)){b.m()
return}r=s.ae
if(r!=null)r.m()
s.ae=b
s.ao()
if(s.aN==null||s.aQ==null)s.a9()},
sbn(a,b){if(b==this.aN)return
this.aN=b
this.a9()},
sbS(a,b){if(b==this.aQ)return
this.aQ=b
this.a9()},
sMV(a,b){if(b===this.bH)return
this.bH=b
this.a9()},
a_9(){this.cn=null},
sag(a,b){return},
su_(a,b){return},
smg(a){if(a===this.a4)return
this.a4=a
this.ao()},
sa0Z(a){return},
szj(a){if(a==this.br)return
this.br=a
this.ao()},
seo(a){if(a.k(0,this.de))return
this.de=a
this.Fu()},
sa6g(a,b){if(b===this.df)return
this.df=b
this.ao()},
sa0B(a){return},
szG(a){if(a===this.dg)return
this.dg=a
this.ao()},
sa4Y(a){return},
sbK(a){if(this.eY==a)return
this.eY=a
this.Fu()},
szH(a){return},
GN(a){var s,r,q=this,p=q.aN
a=A.o4(q.aQ,p).oD(a)
p=q.ae
if(p==null)return new A.a6(A.H(0,a.a,a.b),A.H(0,a.c,a.d))
p=p.gbn(p)
s=q.bH
r=q.ae
return a.oe(new A.a6(p/s,r.gbS(r)/q.bH))},
jp(a){return!0},
cf(a){return this.GN(a)},
bJ(){this.k3=this.GN(t.k.a(A.z.prototype.ga1.call(this)))},
am(a){this.eF(a)},
ah(a){this.e1(0)},
aF(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(d.ae==null)return
d.Wp()
s=a.gbG(a)
r=d.k3
q=b.a
p=b.b
o=r.a
r=r.b
n=d.ae
n.toString
m=d.al
l=d.bH
k=d.cn
j=d.br
i=d.E
i.toString
h=d.iv
g=d.df
f=d.P
f.toString
e=d.dg
A.arz(i,s,h,k,m,d.a4,j,f,n,e,!1,1,new A.C(q,p,q+o,p+r),g,l)},
m(){var s=this.ae
if(s!=null)s.m()
this.ae=null
this.i8()}}
A.ry.prototype={
i(a){return"AnnotationEntry(annotation: "+this.a.i(0)+", localPosition: "+this.b.i(0)+")"}}
A.B4.prototype={}
A.uz.prototype={
i9(){},
re(a){var s,r=this
r.e+=a
s=t.ow
if(s.a(A.L.prototype.gaJ.call(r,r))!=null)s.a(A.L.prototype.gaJ.call(r,r)).re(a)},
ns(a){var s,r,q
for(s=this.d,s=A.aA(s.gaU(s),!0,t.M),r=s.length,q=0;q<r;++q)s[q].$0()},
m(){var s=this.z
if(s!=null)s.m()
this.z=null},
ea(){if(this.y)return
this.y=!0},
siq(a){var s,r=this,q=r.z
if(q!=null)q.m()
r.z=a
q=t.ow
if(q.a(A.L.prototype.gaJ.call(r,r))!=null){q.a(A.L.prototype.gaJ.call(r,r)).toString
s=!0}else s=!1
if(s)q.a(A.L.prototype.gaJ.call(r,r)).ea()},
us(){this.y=this.y||!1},
jb(a){var s
this.ea()
s=a.e
if(s!==0)this.re(-s)
this.v1(a)},
mG(a){var s,r,q=this,p=t.ow.a(A.L.prototype.gaJ.call(q,q))
if(p!=null){s=q.as
r=q.Q
if(s==null)p.CW=r
else s.Q=r
r=q.Q
if(r==null)p.cx=s
else r.as=s
q.Q=q.as=null
p.jb(q)
q.w.saZ(0,null)}},
eZ(a,b,c){return!1},
JC(a,b,c){var s=A.a([],c.h("w<ry<0>>"))
this.eZ(new A.B4(s,c.h("B4<0>")),b,!0,c)
return s.length===0?null:B.c.gK(s).a},
RT(a){var s,r=this
if(!r.y&&r.z!=null){s=r.z
s.toString
a.a_Z(s)
return}r.hw(a)
r.y=!1},
c0(){var s=this.NZ()
return s+(this.b==null?" DETACHED":"")}}
A.FR.prototype={
saZ(a,b){var s=this.a
if(b==null?s==null:b===s)return
if(s!=null)if(--s.x===0)s.m()
this.a=b
if(b!=null)++b.x},
i(a){var s=this.a
return"LayerHandle("+(s!=null?J.d6(s):"DISPOSED")+")"}}
A.IU.prototype={
sLa(a){var s
this.ea()
s=this.cx
if(s!=null)s.m()
this.cx=a},
m(){this.sLa(null)
this.CE()},
hw(a){var s=this.cx
s.toString
a.a_X(B.j,s,this.cy,this.db)},
eZ(a,b,c){return!1}}
A.IN.prototype={
hw(a){a.a_W(this.cx,this.CW)
a.Ni(this.cy)
a.Nb(!1)
a.Na(!1)},
eZ(a,b,c){return!1}}
A.eG.prototype={
ns(a){var s
this.Or(a)
if(!a)return
s=this.CW
for(;s!=null;){s.ns(!0)
s=s.Q}},
a0s(a){var s=this
s.us()
s.hw(a)
if(s.e>0)s.ns(!0)
s.y=!1
return a.be()},
m(){this.AV()
this.d.a0(0)
this.CE()},
us(){var s,r=this
r.Os()
s=r.CW
for(;s!=null;){s.us()
r.y=r.y||s.y
s=s.Q}},
eZ(a,b,c,d){var s,r,q
for(s=this.cx,r=a.a;s!=null;s=s.as){if(s.eZ(a,b,!0,d))return!0
q=r.length
if(q!==0)return!1}return!1},
am(a){var s
this.v0(a)
s=this.CW
for(;s!=null;){s.am(a)
s=s.Q}},
ah(a){var s
this.e1(0)
s=this.CW
for(;s!=null;){s.ah(0)
s=s.Q}this.ns(!1)},
hy(a,b){var s,r=this
r.ea()
s=b.e
if(s!==0)r.re(s)
r.Cl(b)
s=b.as=r.cx
if(s!=null)s.Q=b
r.cx=b
if(r.CW==null)r.CW=b
b.w.saZ(0,b)},
AV(){var s,r,q,p=this,o=p.CW
for(s=t.ow;o!=null;o=r){r=o.Q
o.Q=o.as=null
p.ea()
q=o.e
if(q!==0){q=-q
p.e+=q
if(s.a(A.L.prototype.gaJ.call(p,p))!=null)s.a(A.L.prototype.gaJ.call(p,p)).re(q)}p.v1(o)
o.w.saZ(0,null)}p.cx=p.CW=null},
hw(a){this.ki(a)},
ki(a){var s=this.CW
for(;s!=null;){s.RT(a)
s=s.Q}}}
A.hX.prototype={
sbI(a,b){if(!b.k(0,this.p1))this.ea()
this.p1=b},
eZ(a,b,c,d){return this.n7(a,b.ab(0,this.p1),!0,d)},
hw(a){var s=this,r=s.p1
s.siq(a.Ll(r.a,r.b,t.cV.a(s.z)))
s.ki(a)
a.hS()}}
A.oc.prototype={
eZ(a,b,c,d){if(!this.p1.A(0,b))return!1
return this.n7(a,b,!0,d)},
hw(a){var s=this,r=s.p1
r.toString
s.siq(a.a5N(r,s.p2,t.CW.a(s.z)))
s.ki(a)
a.hS()}}
A.t_.prototype={
eZ(a,b,c,d){if(!this.p1.A(0,b))return!1
return this.n7(a,b,!0,d)},
hw(a){var s=this,r=s.p1
r.toString
s.siq(a.a5L(r,s.p2,t.cB.a(s.z)))
s.ki(a)
a.hS()}}
A.rZ.prototype={
eZ(a,b,c,d){if(!this.p1.A(0,b))return!1
return this.n7(a,b,!0,d)},
hw(a){var s=this,r=s.p1
r.toString
s.siq(a.a5K(r,s.p2,t.xS.a(s.z)))
s.ki(a)
a.hS()}}
A.kX.prototype={
sbu(a,b){var s=this
if(b.k(0,s.ba))return
s.ba=b
s.aj=!0
s.ea()},
hw(a){var s,r,q=this
q.aO=q.ba
if(!q.p1.k(0,B.j)){s=q.p1
s=A.v4(s.a,s.b,0)
r=q.aO
r.toString
s.cM(0,r)
q.aO=s}q.siq(a.a5P(q.aO.a,t.Al.a(q.z)))
q.ki(a)
a.hS()},
a_1(a){var s,r=this
if(r.aj){s=r.ba
s.toString
r.bm=A.HP(A.ajT(s))
r.aj=!1}s=r.bm
if(s==null)return null
return A.cw(s,a)},
eZ(a,b,c,d){var s=this.a_1(b)
if(s==null)return!1
return this.OP(a,s,!0,d)}}
A.Ik.prototype={
sI1(a,b){var s=this,r=s.ba
if(b!=r){if(b===255||r===255)s.siq(null)
s.ba=b
s.ea()}},
hw(a){var s,r,q,p=this
if(p.CW==null){p.siq(null)
return}s=p.ba
s.toString
r=p.p1
q=p.z
if(s<255)p.siq(a.a5O(s,r,t.i6.a(q)))
else p.siq(a.Ll(r.a,r.b,t.cV.a(q)))
p.ki(a)
a.hS()}}
A.rx.prototype={
eZ(a,b,c,d){var s,r,q,p=this,o=p.n7(a,b,!0,d),n=a.a
if(n.length!==0&&!0)return o
s=p.p2
if(s!=null){r=p.p3
q=r.a
r=r.b
s=!new A.C(q,r,q+s.a,r+s.b).A(0,b)}else s=!1
if(s)return o
if(A.aD(p.$ti.c)===A.aD(d)){o=o||!1
n.push(new A.ry(d.a(p.p1),b.ab(0,p.p3),d.h("ry<0>")))}return o}}
A.O9.prototype={}
A.OE.prototype={
a6j(a){var s=this.a
this.a=a
return s},
i(a){var s="<optimized out>#",r=A.bM(this.b),q=this.a.a
return s+A.bM(this)+"("+("latestEvent: "+(s+r))+", "+("annotations: [list of "+q+"]")+")"}}
A.OF.prototype={
gik(a){var s=this.c
return s.gik(s)}}
A.HZ.prototype={
F8(a){var s,r,q,p,o,n,m=t.mC,l=A.hT(null,null,null,m,t.rA)
for(s=a.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
o=p.a
if(m.b(o)){n=p.b
n.toString
l.l(0,o,n)}}return l},
TR(a,b){var s=a.b,r=s.gbA(s)
s=a.b
if(!this.b.R(0,s.gik(s)))return A.hT(null,null,null,t.mC,t.rA)
return this.F8(b.$1(r))},
EW(a){var s,r
A.axD(a)
s=a.b
r=A.n(s).h("b8<1>")
this.a.a34(a.gik(a),a.d,A.kt(new A.b8(s,r),new A.a2h(),r.h("o.E"),t.oR))},
a73(a,b){var s,r,q,p,o
if(a.gci(a)!==B.cE)return
if(t.zs.b(a))return
s=t.yg.b(a)?A.ane():b.$0()
r=a.gik(a)
q=this.b
p=q.j(0,r)
if(!A.axE(p,a))return
o=q.a
new A.a2k(this,p,a,r,s).$0()
if(o!==0!==(q.a!==0))this.av()},
a6Y(a){new A.a2i(this,a).$0()}}
A.a2h.prototype={
$1(a){return a.gIP(a)},
$S:236}
A.a2k.prototype={
$0(){var s=this
new A.a2j(s.a,s.b,s.c,s.d,s.e).$0()},
$S:0}
A.a2j.prototype={
$0(){var s,r,q,p,o,n=this,m=null,l=n.b
if(l==null){s=n.c
if(t.yg.b(s))return
n.a.b.l(0,n.d,new A.OE(A.hT(m,m,m,t.mC,t.rA),s))}else{s=n.c
if(t.yg.b(s))n.a.b.u(0,s.gik(s))}r=n.a
q=r.b.j(0,n.d)
if(q==null){l.toString
q=l}p=q.b
q.b=s
o=t.yg.b(s)?A.hT(m,m,m,t.mC,t.rA):r.F8(n.e)
r.EW(new A.OF(q.a6j(o),o,p,s))},
$S:0}
A.a2i.prototype={
$0(){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.b,r=r.gaU(r),r=new A.dU(J.at(r.a),r.b),q=this.b,p=A.n(r).z[1];r.q();){o=r.a
if(o==null)o=p.a(o)
n=o.b
m=s.TR(o,q)
l=o.a
o.a=m
s.EW(new A.OF(l,m,n,null))}},
$S:0}
A.a2f.prototype={
$2(a,b){var s
if(!this.a.R(0,a))if(a.gBo()&&a.gAn(a)!=null){s=a.gAn(a)
s.toString
s.$1(this.b.aK(this.c.j(0,a)))}},
$S:237}
A.a2g.prototype={
$1(a){return!this.a.R(0,a)},
$S:238}
A.Sg.prototype={}
A.cg.prototype={
ah(a){},
i(a){return"<none>"}}
A.kB.prototype={
f6(a,b){var s,r=this
if(a.gdT()){r.n6()
if(!a.cy){s=a.ay
s===$&&A.b()
s=!s}else s=!0
if(s)A.anX(a,null,!0)
else if(a.db)A.axZ(a)
s=a.ch.a
s.toString
t.cY.a(s)
s.sbI(0,b)
r.yb(s)}else{s=a.ay
s===$&&A.b()
if(s){a.ch.saZ(0,null)
a.x7(r,b)}else a.x7(r,b)}},
yb(a){a.mG(0)
this.a.hy(0,a)},
gbG(a){var s,r,q=this
if(q.e==null){q.c=A.ay1(q.b)
s=$.ap()
r=s.a1N()
q.d=r
q.e=s.a1G(r,null)
r=q.c
r.toString
q.a.hy(0,r)}s=q.e
s.toString
return s},
n6(){var s,r=this
if(r.e==null)return
s=r.c
s.toString
s.sLa(r.d.a2r())
r.e=r.d=r.c=null},
C3(){var s=this.c
if(s!=null)if(!s.cy){s.cy=!0
s.ea()}},
pt(a,b,c,d){var s,r=this
if(a.CW!=null)a.AV()
r.n6()
r.yb(a)
s=r.a1I(a,d==null?r.b:d)
b.$2(s,c)
s.n6()},
Lk(a,b,c){return this.pt(a,b,c,null)},
a1I(a,b){return new A.kB(a,b)},
kO(a,b,c,d,e,f){var s,r,q=this
if(e===B.l){d.$2(q,b)
return null}s=c.dq(b)
if(a){if(f==null){r=new A.oc(B.S,A.y(t.S,t.M),A.aw())
r.i9()}else r=f
if(!s.k(0,r.p1)){r.p1=s
r.ea()}if(e!==r.p2){r.p2=e
r.ea()}q.pt(r,d,b,s)
return r}else{q.a0S(s,e,s,new A.a38(q,d,b))
return null}},
a5M(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.l){e.$2(p,b)
return null}s=c.dq(b)
r=d.dq(b)
if(a){if(g==null){q=new A.t_(B.n6,A.y(t.S,t.M),A.aw())
q.i9()}else q=g
if(!r.k(0,q.p1)){q.p1=r
q.ea()}if(f!==q.p2){q.p2=f
q.ea()}p.pt(q,e,b,s)
return q}else{p.a0Q(r,f,s,new A.a37(p,e,b))
return null}},
Lj(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.l){e.$2(p,b)
return null}s=c.dq(b)
r=d.dq(b)
if(a){if(g==null){q=new A.rZ(B.n6,A.y(t.S,t.M),A.aw())
q.i9()}else q=g
if(r!==q.p1){q.p1=r
q.ea()}if(f!==q.p2){q.p2=f
q.ea()}p.pt(q,e,b,s)
return q}else{p.a0P(r,f,s,new A.a36(p,e,b))
return null}},
pu(a,b,c,d,e){var s,r=this,q=b.a,p=b.b,o=A.v4(q,p,0)
o.cM(0,c)
o.aw(0,-q,-p)
if(a){s=e==null?A.aoV(null):e
s.sbu(0,o)
r.pt(s,d,b,A.anI(o,r.b))
return s}else{q=r.gbG(r)
q.cD(0)
q.af(0,o.a)
d.$2(r,b)
r.gbG(r).cA(0)
return null}},
a5Q(a,b,c,d){return this.pu(a,b,c,d,null)},
Lm(a,b,c,d){var s=d==null?A.anU():d
s.sI1(0,b)
s.sbI(0,a)
this.Lk(s,c,B.j)
return s},
i(a){return"PaintingContext#"+A.eT(this)+"(layer: "+this.a.i(0)+", canvas bounds: "+this.b.i(0)+")"}}
A.a38.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.a37.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.a36.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.VB.prototype={}
A.a6r.prototype={
m(){var s,r=this.b
if(r!=null)this.a.as.H(0,r)
r=this.a
if(--r.at===0){s=r.as
s.b.a0(0)
s.c.a0(0)
s.d.a0(0)
s.e2()
r.as=null
r.d.$0()}}}
A.IV.prototype={
mI(){this.a.$0()},
sa6y(a){var s=this.e
if(s===a)return
if(s!=null)s.ah(0)
this.e=a
a.am(this)},
a2U(){var s,r,q,p,o,n,m,l,k,j,i,h=this
try{for(p=t.W,o=t.By;n=h.r,n.length!==0;){s=n
h.r=A.a([],o)
n=s
m=new A.a3j()
if(!!n.immutable$list)A.K(A.O("sort"))
l=n.length-1
if(l-0<=32)A.KC(n,0,l,m)
else A.KB(n,0,l,m)
for(r=0;r<J.bI(s);++r){if(h.f){h.f=!1
n=h.r
if(n.length!==0){m=s
l=r
k=J.bI(s)
A.dg(l,k,J.bI(m),null,null)
j=A.aT(m)
i=new A.eX(m,l,k,j.h("eX<1>"))
i.qd(m,l,k,j.c)
B.c.J(n,i)
break}}q=J.aO(s,r)
if(q.z){n=q
n=p.a(A.L.prototype.gbx.call(n))===h}else n=!1
if(n)q.WN()}h.f=!1}}finally{h.f=!1}},
Tx(a){try{a.$0()}finally{this.f=!0}},
a2T(){var s,r,q,p,o=this.y
B.c.dr(o,new A.a3i())
for(s=o.length,r=t.W,q=0;q<o.length;o.length===s||(0,A.P)(o),++q){p=o[q]
if(p.CW&&r.a(A.L.prototype.gbx.call(p))===this)p.Hl()}B.c.a0(o)},
a2V(){var s,r,q,p,o,n,m,l,k
try{s=this.z
this.z=A.a([],t.By)
for(q=s,J.Tt(q,new A.a3k()),p=q.length,o=t.W,n=t.cY,m=0;m<q.length;q.length===p||(0,A.P)(q),++m){r=q[m]
if(r.cy||r.db){l=r
l=o.a(A.L.prototype.gbx.call(l))===this}else l=!1
if(l)if(r.ch.a.b!=null)if(r.cy)A.anX(r,null,!1)
else{l=r
k=l.ch.a
k.toString
l.pI(n.a(k))
l.db=!1}else r.Zy()}}finally{}},
a2s(a){var s,r=this
if(++r.at===1){s=t.ju
r.as=new A.wI(r.c,A.b3(s),A.y(t.S,s),A.b3(s),$.by())
r.b.$0()}if(a!=null)r.as.Z(0,a)
return new A.a6r(r,a)},
Jn(){return this.a2s(null)},
a2W(){var s,r,q,p,o,n,m,l,k=this
if(k.as==null)return
try{q=k.ay
p=A.aA(q,!0,A.n(q).c)
B.c.dr(p,new A.a3l())
s=p
q.a0(0)
for(q=s,o=q.length,n=t.W,m=0;m<q.length;q.length===o||(0,A.P)(q),++m){r=q[m]
if(r.dy){l=r
l=n.a(A.L.prototype.gbx.call(l))===k}else l=!1
if(l)r.a_m()}k.as.N8()}finally{}}}
A.a3j.prototype={
$2(a,b){return a.a-b.a},
$S:46}
A.a3i.prototype={
$2(a,b){return a.a-b.a},
$S:46}
A.a3k.prototype={
$2(a,b){return b.a-a.a},
$S:46}
A.a3l.prototype={
$2(a,b){return a.a-b.a},
$S:46}
A.z.prototype={
aH(){var s=this
s.cx=s.gdT()||s.gnZ()
s.ay=s.gdT()},
f7(){var s=this
s.a9()
s.mw()
s.ao()
s.b2()
s.aV(new A.a4y())},
m(){this.ch.saZ(0,null)},
eB(a){if(!(a.e instanceof A.cg))a.e=new A.cg()},
ig(a){var s=this
s.eB(a)
s.a9()
s.mw()
s.b2()
s.Cl(a)},
jb(a){var s=this
a.DS()
a.e.ah(0)
a.e=null
s.v1(a)
s.a9()
s.mw()
s.b2()},
aV(a){},
qX(a,b,c){A.e6(new A.bJ(b,c,"rendering library",A.bo("during "+a+"()"),new A.a4u(this),!1))},
am(a){var s=this
s.v0(a)
if(s.z&&s.Q!=null){s.z=!1
s.a9()}if(s.CW){s.CW=!1
s.mw()}if(s.cy&&s.ch.a!=null){s.cy=!1
s.ao()}if(s.dy&&s.gxt().a){s.dy=!1
s.b2()}},
ga1(){var s=this.at
if(s==null)throw A.c(A.a5("A RenderObject does not have any constraints before it has been laid out."))
return s},
a9(){var s,r=this
if(r.z)return
s=r.Q
if(s==null){r.z=!0
if(r.c!=null)r.tO()
return}if(s!==r)r.tO()
else{r.z=!0
s=t.W
if(s.a(A.L.prototype.gbx.call(r))!=null){s.a(A.L.prototype.gbx.call(r)).r.push(r)
s.a(A.L.prototype.gbx.call(r)).mI()}}},
tO(){this.z=!0
var s=this.c
s.toString
t.d.a(s)
if(!this.as)s.a9()},
DS(){var s=this
if(s.Q!==s){s.Q=null
s.aV(A.arw())}},
Ys(){var s,r,q=this,p=q.Q
if(p===q)return
s=t.B2.a(q.c)
r=s==null?null:s.Q
if(r!=p){q.Q=r
q.aV(A.arx())}},
WN(){var s,r,q,p=this
try{p.bJ()
p.b2()}catch(q){s=A.ae(q)
r=A.au(q)
p.qX("performLayout",s,r)}p.z=!1
p.ao()},
cz(a,b){var s,r,q,p,o,n,m,l=this
if(!b||l.gjW()||a.gKx()||!(l.c instanceof A.z))o=l
else{n=l.c
n.toString
n=t.d.a(n).Q
n.toString
o=n}if(!l.z&&a.k(0,l.at)){if(o!==l.Q){l.Q=o
l.aV(A.arx())}return}l.at=a
n=l.Q
if(n!=null&&o!==n)l.aV(A.arw())
l.Q=o
if(l.gjW())try{l.pp()}catch(m){s=A.ae(m)
r=A.au(m)
l.qX("performResize",s,r)}try{l.bJ()
l.b2()}catch(m){q=A.ae(m)
p=A.au(m)
l.qX("performLayout",q,p)}l.z=!1
l.ao()},
gjW(){return!1},
Ko(a,b){var s=this
s.as=!0
try{t.W.a(A.L.prototype.gbx.call(s)).Tx(new A.a4x(s,a,b))}finally{s.as=!1}},
gdT(){return!1},
gnZ(){return!1},
pI(a){return a==null?A.axT(B.j):a},
mw(){var s,r,q,p=this
if(p.CW)return
s=p.CW=!0
r=p.c
if(r instanceof A.z){if(r.CW)return
q=p.ay
q===$&&A.b()
if((q?!p.gdT():s)&&!r.gdT()){r.mw()
return}}s=t.W
if(s.a(A.L.prototype.gbx.call(p))!=null)s.a(A.L.prototype.gbx.call(p)).y.push(p)},
Hl(){var s,r,q=this
if(!q.CW)return
s=q.cx
s===$&&A.b()
q.cx=!1
q.aV(new A.a4v(q))
if(q.gdT()||q.gnZ())q.cx=!0
if(!q.gdT()){r=q.ay
r===$&&A.b()}else r=!1
if(r){q.db=q.cy=!1
s=t.W.a(A.L.prototype.gbx.call(q))
if(s!=null)B.c.u(s.z,q)
q.CW=!1
q.ao()}else if(s!==q.cx){q.CW=!1
q.ao()}else q.CW=!1},
ao(){var s,r=this
if(r.cy)return
r.cy=!0
if(r.gdT()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=t.W
if(s.a(A.L.prototype.gbx.call(r))!=null){s.a(A.L.prototype.gbx.call(r)).z.push(r)
s.a(A.L.prototype.gbx.call(r)).mI()}}else{s=r.c
if(s instanceof A.z)s.ao()
else{s=t.W
if(s.a(A.L.prototype.gbx.call(r))!=null)s.a(A.L.prototype.gbx.call(r)).mI()}}},
a4W(){var s,r=this
if(r.db||r.cy)return
r.db=!0
if(r.gdT()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=t.W
if(s.a(A.L.prototype.gbx.call(r))!=null){s.a(A.L.prototype.gbx.call(r)).z.push(r)
s.a(A.L.prototype.gbx.call(r)).mI()}}else r.ao()},
Zy(){var s,r=this.c
for(;r instanceof A.z;){if(r.gdT()){s=r.ch.a
if(s==null)break
if(s.b!=null)break
r.cy=!0}r=r.c}},
x7(a,b){var s,r,q,p=this
if(p.z)return
p.db=p.cy=!1
p.ay=p.gdT()
try{p.aF(a,b)}catch(q){s=A.ae(q)
r=A.au(q)
p.qX("paint",s,r)}},
aF(a,b){},
dA(a,b){},
mD(a){return!0},
bB(a,b){var s,r,q,p,o,n,m,l,k=b==null
if(k){s=t.W.a(A.L.prototype.gbx.call(this)).e
if(s instanceof A.z)b=s}r=A.a([],t.By)
q=t.d
p=this
while(p!==b){r.push(p)
o=p.c
o.toString
q.a(o)
p=o}if(!k){b.toString
r.push(b)}n=new A.bf(new Float64Array(16))
n.dm()
for(m=r.length-1;m>0;m=l){l=m-1
r[m].dA(r[l],n)}return n},
j8(a){return null},
yK(a){return null},
eV(a){},
uO(a){var s
if(t.W.a(A.L.prototype.gbx.call(this)).as==null)return
s=this.fr
if(s!=null&&!s.as)s.N7(a)
else{s=this.c
if(s!=null)t.d.a(s).uO(a)}},
gxt(){var s,r=this
if(r.dx==null){s=A.pC()
r.dx=s
r.eV(s)}s=r.dx
s.toString
return s},
lS(){this.dy=!0
this.fr=null
this.aV(new A.a4w())},
b2(){var s,r,q,p,o,n,m=this
if(m.b==null||t.W.a(A.L.prototype.gbx.call(m)).as==null){m.dx=null
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
if(o.dx==null){n=A.pC()
o.dx=n
o.eV(n)}q=o.dx.a
if(q&&o.fr==null)return
p=o}if(p!==m&&m.fr!=null&&m.dy)t.W.a(A.L.prototype.gbx.call(m)).ay.u(0,m)
if(!p.dy){p.dy=!0
s=t.W
if(s.a(A.L.prototype.gbx.call(m))!=null){s.a(A.L.prototype.gbx.call(m)).ay.B(0,p)
s.a(A.L.prototype.gbx.call(m)).mI()}}},
a_m(){var s,r,q,p,o,n,m=this,l=null
if(m.z)return
s=m.fr
if(s==null)s=l
else{s=t.aa.a(A.L.prototype.gaJ.call(s,s))
if(s==null)s=l
else s=s.at||s.as}r=t.sP.a(m.EP(s===!0))
q=A.a([],t.T)
s=m.fr
p=s==null
o=p?l:s.x
n=p?l:s.y
s=p?l:s.z
r.oc(s==null?0:s,n,o,q)
B.c.gbo(q)},
EP(a){var s,r,q,p,o,n,m,l,k=this,j={},i=k.gxt()
j.a=i.c
s=!i.d&&!i.a
r=t.yj
q=A.a([],r)
p=A.b3(t.sP)
k.ha(new A.a4t(j,k,a||i.p2,q,p,i,s))
for(o=A.jy(p,p.r),n=A.n(o).c;o.q();){m=o.d;(m==null?n.a(m):m).zW()}k.dy=!1
if(!(k.c instanceof A.z)){o=j.a
l=new A.Qd(A.a([],r),A.a([k],t.By),o)}else{o=j.a
if(s)l=new A.abu(A.a([],r),o)
else{l=new A.R2(a,i,A.a([],r),A.a([k],t.By),o)
if(i.a)l.x=!0}}l.J(0,q)
return l},
ha(a){this.aV(a)},
o5(a,b,c){a.jM(0,t.d1.a(c),b)},
ix(a,b){},
c0(){var s=A.bM(this)
return"<optimized out>#"+s},
i(a){return this.c0()},
eC(a,b,c,d){var s=this.c
if(s instanceof A.z)s.eC(a,b==null?this:b,c,d)},
n0(){return this.eC(B.aK,null,B.u,null)},
l4(a,b){return this.eC(B.aK,a,B.u,b)},
$ian:1}
A.a4y.prototype={
$1(a){a.f7()},
$S:32}
A.a4u.prototype={
$0(){var s=A.a([],t.F),r=this.a
s.push(A.aj7("The following RenderObject was being processed when the exception was fired",B.FC,r))
s.push(A.aj7("RenderObject",B.FD,r))
return s},
$S:16}
A.a4x.prototype={
$0(){this.b.$1(this.c.a(this.a.ga1()))},
$S:0}
A.a4v.prototype={
$1(a){var s
a.Hl()
s=a.cx
s===$&&A.b()
if(s)this.a.cx=!0},
$S:32}
A.a4w.prototype={
$1(a){a.lS()},
$S:32}
A.a4t.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a.EP(f.c)
if(e.a){B.c.a0(f.d)
f.e.a0(0)
if(!f.f.a)f.a.a=!0}for(s=e.gKf(),r=s.length,q=f.d,p=f.e,o=f.f,n=f.b,m=f.r,l=0;l<s.length;s.length===r||(0,A.P)(s),++l){k=s[l]
q.push(k)
k.b.push(n)
k.a03(o.ba)
if(o.b||!(n.c instanceof A.z)){k.zW()
continue}if(k.gkp()==null||m)continue
if(!o.Kr(k.gkp()))p.B(0,k)
j=q.length-1
for(i=0;i<j;++i){h=q[i]
g=k.gkp()
g.toString
if(!g.Kr(h.gkp())){p.B(0,k)
p.B(0,h)}}}},
$S:32}
A.aG.prototype={
saX(a){var s=this,r=s.C$
if(r!=null)s.jb(r)
s.C$=a
if(a!=null)s.ig(a)},
jG(){var s=this.C$
if(s!=null)this.AS(s)},
aV(a){var s=this.C$
if(s!=null)a.$1(s)}}
A.e3.prototype={$icg:1}
A.av.prototype={
grF(){return this.dE$},
Fg(a,b){var s,r,q,p=this,o=a.e
o.toString
s=A.n(p).h("av.1")
s.a(o);++p.dE$
if(b==null){o=o.ap$=p.aq$
if(o!=null){o=o.e
o.toString
s.a(o).c5$=a}p.aq$=a
if(p.d9$==null)p.d9$=a}else{r=b.e
r.toString
s.a(r)
q=r.ap$
if(q==null){o.c5$=b
p.d9$=r.ap$=a}else{o.ap$=q
o.c5$=b
o=q.e
o.toString
s.a(o).c5$=r.ap$=a}}},
zE(a,b,c){this.ig(b)
this.Fg(b,c)},
J(a,b){},
G8(a){var s,r,q,p,o=this,n=a.e
n.toString
s=A.n(o).h("av.1")
s.a(n)
r=n.c5$
q=n.ap$
if(r==null)o.aq$=q
else{p=r.e
p.toString
s.a(p).ap$=q}q=n.ap$
if(q==null)o.d9$=r
else{q=q.e
q.toString
s.a(q).c5$=r}n.ap$=n.c5$=null;--o.dE$},
u(a,b){this.G8(b)
this.jb(b)},
tS(a,b){var s=this,r=a.e
r.toString
if(A.n(s).h("av.1").a(r).c5$==b)return
s.G8(a)
s.Fg(a,b)
s.a9()},
jG(){var s,r,q,p=this.aq$
for(s=A.n(this).h("av.1");p!=null;){r=p.a
q=this.a
if(r<=q){p.a=q+1
p.jG()}r=p.e
r.toString
p=s.a(r).ap$}},
aV(a){var s,r,q=this.aq$
for(s=A.n(this).h("av.1");q!=null;){a.$1(q)
r=q.e
r.toString
q=s.a(r).ap$}},
ga2P(a){return this.aq$},
a0I(a){var s=a.e
s.toString
return A.n(this).h("av.1").a(s).c5$},
a0G(a){var s=a.e
s.toString
return A.n(this).h("av.1").a(s).ap$}}
A.Ji.prototype={
vk(){this.a9()}}
A.af7.prototype={}
A.abu.prototype={
J(a,b){B.c.J(this.b,b)},
gKf(){return this.b}}
A.nD.prototype={
gKf(){return A.a([this],t.yj)},
a03(a){var s
if(a==null||a.a===0)return
s=this.c;(s==null?this.c=A.b3(t.xJ):s).J(0,a)}}
A.Qd.prototype={
oc(a,b,c,d){var s,r,q,p,o,n=this.b,m=B.c.gK(n)
if(m.fr==null){s=B.c.gK(n).gn_()
r=B.c.gK(n)
r=t.W.a(A.L.prototype.gbx.call(r)).as
r.toString
q=$.aiD()
q=new A.bX(null,0,s,B.a_,q.p2,q.e,q.p3,q.f,q.aO,q.p4,q.R8,q.RG,q.rx,q.ry,q.to,q.x2,q.xr,q.y1)
q.am(r)
m.fr=q}m=B.c.gK(n).fr
m.toString
m.saR(0,B.c.gK(n).gjT())
p=A.a([],t.T)
for(n=this.e,s=n.length,o=0;o<n.length;n.length===s||(0,A.P)(n),++o)n[o].oc(0,b,c,p)
m.jM(0,p,null)
d.push(m)},
gkp(){return null},
zW(){},
J(a,b){B.c.J(this.e,b)}}
A.R2.prototype={
oc(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(!h.x){s=h.b
B.c.gK(s).fr=null
for(r=h.w,q=r.length,p=A.aj(s),o=p.c,p=p.h("eX<1>"),n=0;n<r.length;r.length===q||(0,A.P)(r),++n){m=r[n]
l=new A.eX(s,1,g,p)
l.qd(s,1,g,o)
B.c.J(m.b,l)
m.oc(a+h.f.x2,b,c,d)}return}s=h.b
if(s.length>1){k=new A.af8()
k.ST(c,b,s)}else k=g
r=h.e
q=!r
if(q){if(k==null)p=g
else{p=k.d
p===$&&A.b()
if(!p.gN(p)){p=k.c
p===$&&A.b()
p=p.KB()}else p=!0}p=p===!0}else p=!1
if(p)return
p=B.c.gK(s)
if(p.fr==null)p.fr=A.a6t(g,B.c.gK(s).gn_())
j=B.c.gK(s).fr
j.sKu(r)
j.dx=h.c
j.z=a
if(a!==0){h.Et()
r=h.f
r.sio(0,r.x2+a)}if(k!=null){r=k.d
r===$&&A.b()
j.saR(0,r)
r=k.c
r===$&&A.b()
j.sbu(0,r)
j.x=k.b
j.y=k.a
if(q&&k.e){h.Et()
h.f.b7(B.lA,!0)}}i=A.a([],t.T)
for(r=h.w,q=r.length,n=0;n<r.length;r.length===q||(0,A.P)(r),++n){m=r[n]
p=j.x
m.oc(0,j.y,p,i)}r=h.f
if(r.a)B.c.gK(s).o5(j,h.f,i)
else j.jM(0,i,r)
d.push(j)},
gkp(){return this.x?null:this.f},
J(a,b){var s,r,q,p,o,n,m=this
for(s=b.length,r=m.w,q=0;q<b.length;b.length===s||(0,A.P)(b),++q){p=b[q]
r.push(p)
if(p.gkp()==null)continue
if(!m.r){m.f=m.f.a1m()
m.r=!0}o=m.f
n=p.gkp()
n.toString
o.kh(n)}},
Et(){var s,r,q=this
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
r.aO=s.aO
r.ba=s.ba
r.y2=s.y2
r.b5=s.b5
r.aE=s.aE
r.b1=s.b1
r.f=s.f
r.k1=s.k1
r.k3=s.k3
r.k2=s.k2
r.k4=s.k4
r.ok=s.ok
r.p1=s.p1
r.e.J(0,s.e)
r.p3.J(0,s.p3)
q.f=r
q.r=!0}},
zW(){this.x=!0}}
A.af8.prototype={
ST(a,b,c){var s,r,q,p,o,n,m=this,l=new A.bf(new Float64Array(16))
l.dm()
m.c=l
m.b=a
m.a=b
for(s=c.length-1;s>0;){r=c[s];--s
q=c[s]
a=r.yK(q)
if(a!=null){m.b=a
m.a=A.apo(m.a,r.j8(q))}else m.b=A.apo(m.b,r.j8(q))
l=$.asV()
l.dm()
A.aAO(r,q,m.c,l)
m.b=A.app(m.b,l)
m.a=A.app(m.a,l)}p=B.c.gK(c)
l=m.b
l=l==null?p.gjT():l.fw(p.gjT())
m.d=l
o=m.a
if(o!=null){n=o.fw(l)
if(n.gN(n)){l=m.d
l=!l.gN(l)}else l=!1
m.e=l
if(!l)m.d=n}}}
A.PV.prototype={}
A.ii.prototype={
i(a){var s=A.a(["offset="+this.a.i(0)],t.s)
s.push(this.q8(0))
return B.c.b3(s,"; ")}}
A.w7.prototype={
eB(a){if(!(a.e instanceof A.ii))a.e=new A.ii(null,null,B.j)},
sct(a,b){var s=this,r=s.E
switch(r.d.aC(0,b).a){case 0:case 1:return
case 2:r.sct(0,b)
s.ae=s.P=null
s.wb(b)
s.ao()
s.b2()
break
case 3:r.sct(0,b)
s.ae=s.P=s.a4=null
s.wb(b)
s.a9()
s.xe()
s.Em()
s.HB()
break}},
spw(a){var s=this
if(a==s.aN)return
s.xe()
s.Em()
s.aN=a
s.HB()},
HB(){var s,r,q=this
if(q.aN==null)return
s=q.al
if(s==null)s=q.al=q.Uu()
r=q.aN
B.c.Y(s,r.gfm(r))},
xe(){var s,r=this.aN
if(r==null||this.al==null)return
s=this.al
s.toString
B.c.Y(s,r.gAU(r))},
Uu(){var s,r,q,p,o=this.E.d.M_(!1),n=A.a([],t.sb)
for(s=o.length,r=0;r<s;){q=B.b.hK(o,$.asc(),r)
if(r!==q){if(q===-1)q=s
p=new A.jz(new A.eY(r,q),this,o,$.by())
p.w=p.EO()
n.push(p)
r=q}++r}return n},
Em(){var s,r,q,p=this.al
if(p==null)return
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.P)(p),++r){q=p[r]
q.aP$=$.by()
q.aj$=0}this.al=null},
a9(){var s=this.al
if(s!=null)B.c.Y(s,new A.a4D())
this.P6()},
m(){var s=this
s.xe()
s.al=null
s.E.m()
s.i8()},
wb(a){this.aQ=A.a([],t.e9)
a.aV(new A.a4A(this))},
sB1(a,b){var s=this.E
if(s.f===b)return
s.sB1(0,b)
this.ao()},
sbK(a){var s=this.E
if(s.r===a)return
s.sbK(a)
this.a9()},
sNu(a){if(this.bH===a)return
this.bH=a
this.a9()},
sa5w(a,b){var s,r=this
if(r.cn===b)return
r.cn=b
s=b===B.bm?"\u2026":null
r.E.sa2n(s)
r.a9()},
sB2(a){var s=this.E
if(s.w===a)return
s.sB2(a)
this.a4=null
this.a9()},
szZ(a){var s=this.E
if(s.z==a)return
s.szZ(a)
this.a4=null
this.a9()},
szU(a,b){var s=this.E
if(J.f(s.y,b))return
s.szU(0,b)
this.a4=null
this.a9()},
sND(a){return},
sB3(a){var s=this.E
if(s.as===a)return
s.sB3(a)
this.a4=null
this.a9()},
sLU(a){return},
sN3(a){var s,r=this
if(J.f(r.dd,a))return
r.dd=a
s=r.al
s=s==null?null:B.c.kj(s,new A.a4F())
if(s===!0)r.ao()},
qt(a){var s,r=this,q=r.BD(a,B.a_)
r.iW(t.k.a(A.z.prototype.ga1.call(r)))
s=r.E
s.E2(a,B.a_)
s=s.db
s===$&&A.b()
s=s.b
return q.V(0,new A.t(0,s==null?0:s))},
eS(a){this.iW(t.k.a(A.z.prototype.ga1.call(this)))
return this.E.eS(B.H)},
jp(a){return!0},
cX(a,b){var s,r,q,p,o,n,m,l,k,j={},i=this.E,h=i.a.hZ(b),g=i.d.MN(h)
if(g!=null&&!0){a.B(0,new A.hM(t.kZ.a(g),t.Cq))
s=!0}else s=!1
r=j.a=this.aq$
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
l.dm()
m[14]=0
m[13]=n.b
m[12]=n.a
n=r.e
l.i0(0,n,n,n)
if(a.y6(new A.a4C(j,b,r),b,l))return!0
r=j.a.e
r.toString
k=q.a(r).ap$
j.a=k;++o
r=k}return s},
Fp(a,b){var s=this.bH||this.cn===B.bm?a:1/0
this.E.zR(s,b)},
vk(){var s=this,r=$.bP,q=r.fy$
switch(q.a){case 0:case 4:if(s.eX)return
s.eX=!0
r.q_(new A.a4G(s,q))
break
case 1:case 2:case 3:s.CS()
s.E.a9()
break}},
iW(a){this.E.uU(this.br)
this.Fp(a.b,a.a)},
Fn(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.dE$
if(i===0)return A.a([],t.aE)
s=j.aq$
r=A.aR(i,B.TK,!1,t.cP)
q=new A.aQ(0,a.b,0,1/0).d1(0,j.E.w)
for(i=A.n(j).h("av.1"),p=!b,o=0;s!=null;){if(p){s.cz(q,!0)
n=s.k3
n.toString
m=j.aQ
m===$&&A.b()
switch(m[o].geo()){case B.lj:l=s.My(j.aQ[o].grv())
break
case B.lk:case B.ll:case B.fy:case B.ln:case B.lm:l=null
break
default:l=null}k=n}else{k=s.hb(q)
l=null}n=j.aQ
n===$&&A.b()
r[o]=new A.mC(k,n[o].geo(),l,j.aQ[o].grv())
n=s.e
n.toString
s=i.a(n).ap$;++o}return r},
WM(a){return this.Fn(a,!1)},
Zm(){var s,r,q=this.aq$,p=t.lO,o=this.E,n=A.n(this).h("av.1"),m=0
while(!0){if(!(q!=null&&m<o.ax.length))break
s=q.e
s.toString
p.a(s)
r=o.ax[m]
s.a=new A.t(r.a,r.b)
s.e=o.ay[m]
q=n.a(s).ap$;++m}},
So(){var s,r,q=this.aQ
q===$&&A.b()
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.P)(q),++r)switch(q[r].geo()){case B.lj:case B.lk:case B.ll:return!1
case B.lm:case B.ln:case B.fy:continue}return!0},
cf(a){var s,r,q=this
if(!q.So())return B.R
s=q.E
s.uU(q.Fn(a,!0))
q.Fp(a.b,a.a)
r=s.gbn(s)
s=s.a
return a.bD(new A.a6(r,Math.ceil(s.gbS(s))))},
bJ(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=t.k.a(A.z.prototype.ga1.call(i))
i.br=i.WM(g)
i.iW(g)
i.Zm()
s=i.E
r=s.gbn(s)
q=s.a
q=Math.ceil(q.gbS(q))
p=s.a.ga2d()
o=i.k3=g.bD(new A.a6(r,q))
n=o.b<q||p
m=o.a<r
if(m||n)switch(i.cn.a){case 3:i.C=!1
i.a4=null
break
case 0:case 2:i.C=!0
i.a4=null
break
case 1:i.C=!0
r=A.a9V(h,s.d.a,"\u2026")
q=s.r
q.toString
o=s.w
l=A.a9T(h,s.y,h,h,r,B.bI,q,h,o,B.aQ)
l.a4I()
if(m){switch(s.r.a){case 0:k=l.gbn(l)
j=0
break
case 1:j=i.k3.a
k=j-l.gbn(l)
break
default:k=h
j=k}i.a4=A.ajs(new A.t(k,0),new A.t(j,0),A.a([B.k,B.n8],t.bk),h,B.cP,h)}else{j=i.k3.b
s=l.a
i.a4=A.ajs(new A.t(0,j-Math.ceil(s.gbS(s))/2),new A.t(0,j),A.a([B.k,B.n8],t.bk),h,B.cP,h)}l.m()
break}else{i.C=!1
i.a4=null}},
aF(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e={}
f.iW(t.k.a(A.z.prototype.ga1.call(f)))
if(f.C){s=f.k3
r=b.a
q=b.b
p=new A.C(r,q,r+s.a,q+s.b)
if(f.a4!=null)a.gbG(a).BP(p,$.ap().bk())
else a.gbG(a).cD(0)
a.gbG(a).kn(p)}s=f.E
s.aF(a.gbG(a),b)
r=e.a=f.aq$
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
a.a5Q(j,new A.t(o+r.a,n+r.b),A.v3(k,k,k),new A.a4E(e))
k=e.a.e
k.toString
i=m.a(k).ap$
e.a=i;++l
r=i}if(f.C){if(f.a4!=null){a.gbG(a).aw(0,o,n)
h=$.ap().bk()
h.sa0m(B.CV)
h.sC7(f.a4)
s=a.gbG(a)
r=f.k3
s.cl(new A.C(0,0,0+r.a,0+r.b),h)}a.gbG(a).cA(0)}s=f.al
if(s!=null)for(r=s.length,g=0;g<s.length;s.length===r||(0,A.P)(s),++g)s[g].aF(a,b)
f.Pd(a,b)},
BD(a,b){var s
this.iW(t.k.a(A.z.prototype.ga1.call(this)))
s=this.E
s.E2(a,b)
s=s.db
s===$&&A.b()
return s.a},
Bw(a){this.iW(t.k.a(A.z.prototype.ga1.call(this)))
return this.E.a.uy(a.a,a.b,B.mn,B.hd)},
hZ(a){this.iW(t.k.a(A.z.prototype.ga1.call(this)))
return this.E.a.hZ(a)},
mS(a){this.iW(t.k.a(A.z.prototype.ga1.call(this)))
return this.E.a.mS(a)},
eV(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.hi(a)
s=d.E
r=s.d
r.toString
q=A.a([],t.lF)
r.a19(q)
d.de=q
if(B.c.kj(q,new A.a4B()))a.a=a.b=!0
else{r=d.P
if(r==null){p=new A.bw("")
o=A.a([],t.ve)
for(r=d.de,n=r.length,m=0,l=0,k="";l<r.length;r.length===n||(0,A.P)(r),++l){j=r[l]
i=j.b
if(i==null)i=j.a
for(k=j.f,h=k.length,g=0;g<k.length;k.length===h||(0,A.P)(k),++g){f=k[g]
e=f.a
o.push(f.IB(new A.eY(m+e.a,m+e.b)))}k=p.a+=i
m+=i.length}r=d.P=new A.cr(k.charCodeAt(0)==0?k:k,o)}a.p4=r
a.d=!0
s=s.r
s.toString
a.y1=s}},
o5(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=A.a([],t.T),b0=a7.E,b1=b0.r
b1.toString
s=A.hT(a8,a8,a8,t.qI,t.ju)
r=a7.ae
if(r==null){r=a7.de
r.toString
r=a7.ae=A.aDe(r)}for(q=r.length,p=t.k,o=b1,n=0,m=0,l=0;l<r.length;r.length===q||(0,A.P)(r),++l,m=j){k=r[l]
b1=k.a
j=m+b1.length
i=m<j
h=i?m:j
i=i?j:m
g=p.a(A.z.prototype.ga1.call(a7))
b0.uU(a7.br)
f=g.b
f=a7.bH||a7.cn===B.bm?f:1/0
b0.zR(f,g.a)
e=b0.a.uy(h,i,B.mn,B.hd)
if(e.length===0)continue
i=B.c.gK(e)
d=new A.C(i.a,i.b,i.c,i.d)
c=B.c.gK(e).e
for(i=A.aj(e),h=new A.eX(e,1,a8,i.h("eX<1>")),h.qd(e,1,a8,i.c),h=new A.bT(h,h.gp(h)),i=A.n(h).c;h.q();){g=h.d
if(g==null)g=i.a(g)
d=d.oG(new A.C(g.a,g.b,g.c,g.d))
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
if(b1!=null){a3=b1.fw(a0)
if(a3.a>=a3.c||a3.b>=a3.d)b1=!(b>=i||a>=g)
else b1=!1
a1.b7(B.lA,b1)}a4=A.b6("newChild")
b1=a7.df
i=b1==null?a8:b1.a!==0
if(i===!0){b1.toString
i=new A.b8(b1,A.n(b1).h("b8<1>"))
a5=i.ga5(i)
if(!a5.q())A.K(A.bO())
b1=b1.u(0,a5.gG(a5))
b1.toString
if(a4.b!==a4)A.K(A.a1g(a4.a))
a4.b=b1}else{a6=new A.jo()
b1=A.a6t(a6,a7.T7(a6))
if(a4.b!==a4)A.K(A.a1g(a4.a))
a4.b=b1}if(b1===a4)A.K(A.h4(a4.a))
J.aus(b1,a1)
if(!b1.w.k(0,a0)){b1.w=a0
b1.ie()}b1=a4.b
if(b1===a4)A.K(A.h4(a4.a))
i=b1.d
i.toString
s.l(0,i,b1)
b1=a4.b
if(b1===a4)A.K(A.h4(a4.a))
a9.push(b1)
n=a2
o=c}a7.df=s
b2.jM(0,a9,b3)},
T7(a){return new A.a4z(this,a)},
lS(){this.vd()
this.df=null}}
A.a4D.prototype={
$1(a){return a.x=null},
$S:242}
A.a4A.prototype={
$1(a){return!0},
$S:47}
A.a4F.prototype={
$1(a){var s=a.w
s===$&&A.b()
return s.c!==B.cL},
$S:243}
A.a4C.prototype={
$2(a,b){return this.a.a.bY(a,b)},
$S:17}
A.a4G.prototype={
$1(a){var s=this.a
s.eX=!1
if(s.b!=null){s.CS()
s.E.a9()}},
$S:2}
A.a4E.prototype={
$2(a,b){var s=this.a.a
s.toString
a.f6(s,b)},
$S:11}
A.a4B.prototype={
$1(a){return!1},
$S:244}
A.a4z.prototype={
$0(){var s=this.a,r=s.df.j(0,this.b)
r.toString
s.l4(s,r.w)},
$S:0}
A.jz.prototype={
gn(a){var s=this.w
s===$&&A.b()
return s},
XZ(){var s=this,r=s.EO(),q=s.w
q===$&&A.b()
if(q.k(0,r))return
s.w=r
s.av()},
EO(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f==null||g.e==null)return B.Ul
s=f.a
r=g.e.a
f=g.b
q=f.qt(new A.b0(s,B.C))
p=s===r?q:f.qt(new A.b0(r,B.C))
f=f.E
o=f.r
o.toString
n=s>r!==(B.W===o)
m=A.v4(g.gfL().a,g.gfL().b,0)
m.hB(m)
o=A.cw(m,q)
l=f.gu9()
k=n?B.C7:B.C6
j=A.cw(m,p)
f=f.gu9()
i=n?B.C6:B.C7
h=g.d.a===g.e.a?B.Un:B.lz
return new A.kN(new A.n1(o,l,k),new A.n1(j,f,i),h,!0)},
t1(a){var s=this,r=A.b6("result"),q=s.d,p=s.e,o=a.a
switch(o.a){case 0:case 1:r.sc6(s.a_l(t.ib.a(a).b,o===B.dM))
break
case 2:s.e=s.d=null
r.sc6(B.cK)
break
case 3:o=s.a
s.d=new A.b0(o.a,B.C)
s.e=new A.b0(o.b,B.M)
r.sc6(B.cK)
break
case 4:r.sc6(s.VZ(t.k2.a(a).gBL()))
break
case 5:t.uQ.a(a)
r.sc6(s.Vi(a.gJM(a),a.gh1(),a.ga7k()))
break
case 6:t.sQ.a(a)
r.sc6(s.UZ(a.gz2(a),a.gh1(),a.gIZ(a)))
break}if(!J.f(q,s.d)||!J.f(p,s.e)){s.b.ao()
s.XZ()}return r.aA()},
a_l(a,b){var s,r,q,p,o,n,m=this
if(b)m.e=null
else m.d=null
s=m.b
r=s.bB(0,null)
r.hB(r)
q=A.cw(r,a)
p=m.gfL()
if(p.gN(p))return A.aov(m.gfL(),q)
p=m.gfL()
o=s.E.r
o.toString
n=m.qg(s.hZ(A.az8(p,q,o)))
if(b)m.e=n
else m.d=n
s=n.a
p=m.a
if(s===p.b)return B.b6
if(s===p.a)return B.b7
return A.aov(m.gfL(),q)},
qg(a){var s,r=a.a,q=this.a,p=q.b
if(r<=p)s=r===p&&a.b===B.C
else s=!0
if(s)return new A.b0(p,B.M)
q=q.a
if(r<q)return new A.b0(q,B.C)
return a},
VZ(a){var s,r,q,p,o=this,n=o.b,m=n.hZ(n.l_(a))
if(o.Yj(m))return B.ar
s=n.mS(m)
r=A.b6("start")
q=A.b6("end")
n=m.a
p=s.b
if(n>=p)r.b=q.b=new A.b0(n,B.C)
else{r.b=new A.b0(s.a,B.C)
q.b=new A.b0(p,B.M)}o.d=r.aA()
o.e=q.aA()
return B.ar},
UZ(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.bB(0,null)
if(j.hB(j)===0)switch(c){case B.fC:case B.dO:return B.b7
case B.fD:case B.dN:return B.b6}s=A.cw(j,new A.t(a,0)).a
switch(c){case B.fC:case B.fD:if(b){k=l.e
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
p=k.hZ(new A.t(s,k.qt(b?r:m).b-k.E.gu9()/2))
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
switch(c){case B.W8:l=m.a
q=m.qs(new A.Vg(B.b.T(m.c,l.a,l.b)),s,a)
p=B.ar
break
case B.W9:l=m.a
q=m.qs(new A.Nk(new A.aaC(m),new A.aaA(B.b.T(m.c,l.a,l.b))),s,a)
p=B.ar
break
case B.Wa:q=m.qs(new A.a1j(m),s,a)
p=B.ar
break
case B.Wb:o=m.a
n=o.a
o=o.b
q=m.qs(new A.WA(B.b.T(m.c,n,o)),s,a)
if(a&&q.a===o)p=B.b6
else p=l&&q.a===n?B.b7:B.ar
break
default:p=null
q=null}if(b)m.e=q
else m.d=q
return p},
qs(a,b,c){if(c)return this.qg(a.hd(B.TS.hd(b)))
return this.qg(a.hc(B.TR.hc(b)))},
Wk(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.E,i=j.fr
if(i==null)i=j.fr=j.a.a18()
s=k.BD(a,B.a_)
j=i.length
r=j-1
for(q=s.b,p=0;p<i.length;i.length===j||(0,A.P)(i),++p){o=i[p]
if(o.grv()>q){r=J.au1(o)
break}}if(b&&r===i.length-1)n=new A.b0(l.a.b,B.M)
else if(!b&&r===0)n=new A.b0(l.a.a,B.C)
else n=l.qg(k.hZ(new A.t(c,i[b?r+1:r-1].grv())))
k=n.a
j=l.a
if(k===j.a)m=B.b7
else m=k===j.b?B.b6:B.ar
return new A.aq(n,m,t.nz)},
Yj(a){var s,r,q,p,o=this
if(o.d==null||o.e==null)return!1
s=A.b6("currentStart")
r=A.b6("currentEnd")
q=o.d
q.toString
p=o.e
p.toString
if(A.akB(q,p)>0){s.b=q
r.b=p}else{s.b=p
r.b=q}return A.akB(s.aA(),a)>=0&&A.akB(r.aA(),a)<=0},
bB(a,b){var s=A.v4(this.gfL().a,this.gfL().b,0)
s.cM(0,this.b.bB(0,b))
return s},
hT(a,b){if(this.b.b==null)return},
gfL(){var s,r,q,p,o,n,m=this,l=m.x
if(l==null){l=m.b
s=m.a
r=s.a
q=l.Bw(A.a9U(B.C,r,s.b,!1))
if(q.length!==0){l=B.c.gK(q)
p=new A.C(l.a,l.b,l.c,l.d)
for(o=1;o<q.length;++o){l=q[o]
p=p.oG(new A.C(l.a,l.b,l.c,l.d))}m.x=p
l=p}else{n=l.qt(new A.b0(r,B.C))
l=A.ajZ(n,new A.t(n.a+0,n.b+-l.E.gu9()))
m.x=l}}return l},
gcQ(a){var s=this.gfL()
return new A.a6(s.c-s.a,s.d-s.b)},
aF(a,b){var s,r,q,p,o,n=this,m=n.d
if(m==null||n.e==null)return
s=n.b
if(s.dd!=null){r=A.a9U(B.C,m.a,n.e.a,!1)
q=$.ap().bk()
q.scF(0,B.aP)
m=s.dd
m.toString
q.sag(0,m)
for(m=s.Bw(r),s=m.length,p=0;p<m.length;m.length===s||(0,A.P)(m),++p){o=m[p]
a.gbG(a).cl(new A.C(o.a,o.b,o.c,o.d).dq(b),q)}}A.v4(n.gfL().a,n.gfL().b,0)},
BB(a){var s=this.b.E.a.MB(a),r=this.a,q=r.a
r=r.b
return A.a9U(B.C,B.f.j6(s.a,q,r),B.f.j6(s.b,q,r),!1)},
$iab:1}
A.z6.prototype={
am(a){var s,r,q
this.eF(a)
s=this.aq$
for(r=t.lO;s!=null;){s.am(a)
q=s.e
q.toString
s=r.a(q).ap$}},
ah(a){var s,r,q
this.e1(0)
s=this.aq$
for(r=t.lO;s!=null;){s.ah(0)
q=s.e
q.toString
s=r.a(q).ap$}}}
A.PW.prototype={}
A.PX.prototype={
am(a){this.Qf(a)
$.eS.zb$.a.B(0,this.gD7())},
ah(a){$.eS.zb$.a.u(0,this.gD7())
this.Qg(0)}}
A.Ss.prototype={}
A.St.prototype={}
A.JE.prototype={
sa5v(a){if(a===this.E)return
this.E=a
this.ao()},
sa5U(a){if(a===this.P)return
this.P=a
this.ao()},
sa0E(a){return},
sa0D(a){return},
gjW(){return!0},
gnZ(){return!0},
gWD(){var s=this.E,r=(s|1)>>>0>0||(s|2)>>>0>0?80:0
return(s|4)>>>0>0||(s|8)>>>0>0?r+80:r},
cf(a){return a.bD(new A.a6(1/0,this.gWD()))},
aF(a,b){var s=b.a,r=b.b,q=this.k3
q=new A.IN(new A.C(s,r,s+q.a,r+q.b),this.E,this.P,!1,!1,A.y(t.S,t.M),A.aw())
q.i9()
a.n6()
a.yb(q)}}
A.JJ.prototype={}
A.eU.prototype={
eB(a){if(!(a.e instanceof A.cg))a.e=new A.cg()},
cf(a){var s=this.C$
if(s!=null)return s.hb(a)
return this.od(a)},
bJ(){var s=this,r=s.C$,q=t.k
if(r!=null){r.cz(q.a(A.z.prototype.ga1.call(s)),!0)
r=s.C$.k3
r.toString
s.k3=r}else s.k3=s.od(q.a(A.z.prototype.ga1.call(s)))},
od(a){return new A.a6(A.H(0,a.a,a.b),A.H(0,a.c,a.d))},
cX(a,b){var s=this.C$
s=s==null?null:s.bY(a,b)
return s===!0},
dA(a,b){},
aF(a,b){var s=this.C$
if(s!=null)a.f6(s,b)}}
A.oC.prototype={
F(){return"HitTestBehavior."+this.b}}
A.w8.prototype={
bY(a,b){var s,r=this
if(r.k3.A(0,b)){s=r.cX(a,b)||r.v===B.aC
if(s||r.v===B.d5)a.B(0,new A.o5(b,r))}else s=!1
return s},
jp(a){return this.v===B.aC}}
A.Jp.prototype={
sI_(a){if(this.v.k(0,a))return
this.v=a
this.a9()},
bJ(){var s=this,r=t.k.a(A.z.prototype.ga1.call(s)),q=s.C$,p=s.v
if(q!=null){q.cz(p.oD(r),!0)
q=s.C$.k3
q.toString
s.k3=q}else s.k3=p.oD(r).bD(B.R)},
cf(a){var s=this.C$,r=this.v
if(s!=null)return s.hb(r.oD(a))
else return r.oD(a).bD(B.R)}}
A.Jz.prototype={
sa52(a,b){if(this.v===b)return
this.v=b
this.a9()},
sa5_(a,b){if(this.U===b)return
this.U=b
this.a9()},
Fq(a){var s,r,q=a.a,p=a.b
p=p<1/0?p:A.H(this.v,q,p)
s=a.c
r=a.d
return new A.aQ(q,p,s,r<1/0?r:A.H(this.U,s,r))},
G0(a,b){var s=this.C$
if(s!=null)return a.bD(b.$2(s,this.Fq(a)))
return this.Fq(a).bD(B.R)},
cf(a){return this.G0(a,A.ai2())},
bJ(){this.k3=this.G0(t.k.a(A.z.prototype.ga1.call(this)),A.ai3())}}
A.w3.prototype={
gdT(){if(this.C$!=null){var s=this.zf$
s.toString}else s=!1
return s},
pI(a){var s=a==null?A.anU():a
s.sI1(0,this.m8$)
return s},
su_(a,b){var s=this,r=s.m9$
if(r===b)return
if(s.b!=null&&r!=null)r.H(0,s.gra())
s.m9$=b
if(s.b!=null)b.Z(0,s.gra())
s.xN()},
sI2(a){if(!1===this.zg$)return
this.zg$=!1
this.b2()},
xN(){var s,r=this,q=r.m8$,p=r.m9$
p=r.m8$=B.d.bc(A.ale(p.gn(p),0,1)*255)
if(q!==p){s=r.zf$
p=p>0
r.zf$=p
if(r.C$!=null&&s!==p)r.mw()
r.a4W()
if(q===0||r.m8$===0)r.b2()}},
mD(a){var s=this.m9$
return s.gn(s)>0},
ha(a){var s,r=this.C$
if(r!=null)if(this.m8$===0){s=this.zg$
s.toString}else s=!0
else s=!1
if(s){r.toString
a.$1(r)}}}
A.Jl.prototype={}
A.tf.prototype={
Z(a,b){return null},
H(a,b){return null},
i(a){return"CustomClipper"}}
A.n4.prototype={
Bx(a){return this.b.fF(new A.C(0,0,0+a.a,0+a.b),this.c)},
C9(a){if(A.A(a)!==B.a_7)return!0
t.qm.a(a)
return!a.b.k(0,this.b)||a.c!=this.c}}
A.qV.prototype={
sob(a){var s,r=this,q=r.v
if(q==a)return
r.v=a
s=a==null
if(s||q==null||A.A(a)!==A.A(q)||a.C9(q))r.qH()
if(r.b!=null){if(q!=null)q.H(0,r.gqG())
if(!s)a.Z(0,r.gqG())}},
am(a){var s
this.nc(a)
s=this.v
if(s!=null)s.Z(0,this.gqG())},
ah(a){var s=this.v
if(s!=null)s.H(0,this.gqG())
this.lf(0)},
qH(){this.U=null
this.ao()
this.b2()},
srH(a){if(a!==this.au){this.au=a
this.ao()}},
bJ(){var s,r=this,q=r.k3
q=q!=null?q:null
r.vg()
s=r.k3
s.toString
if(!J.f(q,s))r.U=null},
j2(){var s,r,q=this
if(q.U==null){s=q.v
if(s==null)s=null
else{r=q.k3
r.toString
r=s.Bx(r)
s=r}q.U=s==null?q.gqj():s}},
j8(a){var s,r=this
switch(r.au.a){case 0:return null
case 1:case 2:case 3:if(r.v==null)s=null
else{s=r.k3
s=new A.C(0,0,0+s.a,0+s.b)}if(s==null){s=r.k3
s=new A.C(0,0,0+s.a,0+s.b)}return s}},
m(){this.co=null
this.i8()}}
A.Jo.prototype={
gqj(){var s=this.k3
return new A.C(0,0,0+s.a,0+s.b)},
bY(a,b){var s=this
if(s.v!=null){s.j2()
if(!s.U.A(0,b))return!1}return s.iQ(a,b)},
aF(a,b){var s,r,q=this,p=q.C$
if(p!=null){s=q.ch
if(q.au!==B.l){q.j2()
p=q.cx
p===$&&A.b()
r=q.U
r.toString
s.saZ(0,a.kO(p,b,r,A.eU.prototype.gmC.call(q),q.au,t.iM.a(s.a)))}else{a.f6(p,b)
s.saZ(0,null)}}else q.ch.saZ(0,null)}}
A.Jn.prototype={
gqj(){var s=$.ap().cr(),r=this.k3
s.nW(new A.C(0,0,0+r.a,0+r.b))
return s},
bY(a,b){var s=this
if(s.v!=null){s.j2()
if(!s.U.A(0,b))return!1}return s.iQ(a,b)},
aF(a,b){var s,r,q,p,o=this,n=o.C$
if(n!=null){s=o.ch
if(o.au!==B.l){o.j2()
n=o.cx
n===$&&A.b()
r=o.k3
q=r.a
r=r.b
p=o.U
p.toString
s.saZ(0,a.Lj(n,b,new A.C(0,0,0+q,0+r),p,A.eU.prototype.gmC.call(o),o.au,t.n0.a(s.a)))}else{a.f6(n,b)
s.saZ(0,null)}}else o.ch.saZ(0,null)}}
A.z7.prototype={
sio(a,b){if(this.cm===b)return
this.cm=b
this.ao()},
she(a,b){if(this.eW.k(0,b))return
this.eW=b
this.ao()},
sag(a,b){if(this.ft.k(0,b))return
this.ft=b
this.ao()},
eV(a){this.hi(a)
a.sio(0,this.cm)}}
A.JF.prototype={
sdn(a,b){if(this.zc===b)return
this.zc=b
this.qH()},
sa0o(a,b){if(J.f(this.zd,b))return
this.zd=b
this.qH()},
gqj(){var s,r,q=this.k3,p=0+q.a
q=0+q.b
switch(this.zc.a){case 0:s=this.zd
if(s==null)s=B.aA
return s.dJ(new A.C(0,0,p,q))
case 1:s=(p-0)/2
r=(q-0)/2
return new A.i4(0,0,p,q,s,r,s,r,s,r,s,r,s===r)}},
bY(a,b){var s=this
if(s.v!=null){s.j2()
if(!s.U.A(0,b))return!1}return s.iQ(a,b)},
aF(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.C$==null){i.ch.saZ(0,null)
return}i.j2()
s=i.U.dq(b)
r=$.ap()
q=r.cr()
q.eO(s)
p=a.gbG(a)
if(i.cm!==0&&!0){p.cl(new A.C(s.a,s.b,s.c,s.d).dh(20),$.alZ())
o=i.eW
n=i.cm
m=i.ft
p.oB(q,o,n,(m.gn(m)>>>24&255)!==255)}l=i.au===B.hs
if(!l){r=r.bk()
r.sag(0,i.ft)
p.d7(s,r)}r=i.cx
r===$&&A.b()
o=i.k3
n=o.a
o=o.b
m=i.U
m.toString
k=i.ch
j=t.bG.a(k.a)
k.saZ(0,a.a5M(r,b,new A.C(0,0,0+n,0+o),m,new A.a4H(i,l),i.au,j))}}
A.a4H.prototype={
$2(a,b){var s,r
if(this.b){s=a.gbG(a)
r=$.ap().bk()
r.sag(0,this.a.ft)
s.oA(r)}this.a.hj(a,b)},
$S:11}
A.JG.prototype={
gqj(){var s=$.ap().cr(),r=this.k3
s.nW(new A.C(0,0,0+r.a,0+r.b))
return s},
bY(a,b){var s=this
if(s.v!=null){s.j2()
if(!s.U.A(0,b))return!1}return s.iQ(a,b)},
aF(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(j.C$==null){j.ch.saZ(0,null)
return}j.j2()
s=j.k3
r=b.a
q=b.b
p=s.a
s=s.b
o=j.U.dq(b)
n=a.gbG(a)
if(j.cm!==0&&!0){n.cl(new A.C(r,q,r+p,q+s).dh(20),$.alZ())
s=j.eW
r=j.cm
q=j.ft
n.oB(o,s,r,(q.gn(q)>>>24&255)!==255)}m=j.au===B.hs
if(!m){s=$.ap().bk()
s.sag(0,j.ft)
n.dP(o,s)}s=j.cx
s===$&&A.b()
r=j.k3
q=r.a
r=r.b
p=j.U
p.toString
l=j.ch
k=t.n0.a(l.a)
l.saZ(0,a.Lj(s,b,new A.C(0,0,0+q,0+r),p,new A.a4I(j,m),j.au,k))}}
A.a4I.prototype={
$2(a,b){var s,r
if(this.b){s=a.gbG(a)
r=$.ap().bk()
r.sag(0,this.a.ft)
s.oA(r)}this.a.hj(a,b)},
$S:11}
A.tl.prototype={
F(){return"DecorationPosition."+this.b}}
A.Jt.prototype={
sa2_(a){var s,r=this
if(a.k(0,r.U))return
s=r.v
if(s!=null)s.m()
r.v=null
r.U=a
r.ao()},
sbA(a,b){if(b===this.au)return
this.au=b
this.ao()},
syr(a){if(a.k(0,this.bz))return
this.bz=a
this.ao()},
ah(a){var s=this,r=s.v
if(r!=null)r.m()
s.v=null
s.lf(0)
s.ao()},
jp(a){var s=this.U,r=this.k3
r.toString
return s.K3(r,a,this.bz.d)},
aF(a,b){var s,r,q,p=this,o=p.v
if(o==null)o=p.v=p.U.rM(p.geb())
s=p.bz
r=p.k3
r.toString
q=new A.oF(s.a,s.b,s.c,s.d,r,s.f)
if(p.au===B.hB){o.po(a.gbG(a),b,q)
if(p.U.gzI())a.C3()}p.hj(a,b)
if(p.au===B.Fy){o=p.v
o.toString
o.po(a.gbG(a),b,q)
if(p.U.gzI())a.C3()}}}
A.JP.prototype={
sL6(a,b){return},
seo(a){var s=this
if(J.f(s.U,a))return
s.U=a
s.ao()
s.b2()},
sbK(a){var s=this
if(s.au==a)return
s.au=a
s.ao()
s.b2()},
gnZ(){return!1},
sbu(a,b){var s,r=this
if(J.f(r.co,b))return
s=new A.bf(new Float64Array(16))
s.bg(b)
r.co=s
r.ao()
r.b2()},
smg(a){return},
gw6(){var s,r,q=this,p=q.U,o=p==null?null:p.W(q.au)
if(o==null)return q.co
s=new A.bf(new Float64Array(16))
s.dm()
p=q.k3
p.toString
r=o.a0a(p)
s.aw(0,r.a,r.b)
p=q.co
p.toString
s.cM(0,p)
s.aw(0,-r.a,-r.b)
return s},
bY(a,b){return this.cX(a,b)},
cX(a,b){var s=this.bz?this.gw6():null
return a.y6(new A.a4R(this),b,s)},
aF(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
if(a.C$!=null){s=a.gw6()
s.toString
r=A.a1J(s)
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
p=A.eU.prototype.gmC.call(a)
o=a.ch
n=o.a
o.saZ(0,a0.pu(q,a1,s,p,n instanceof A.kX?n:null))}else{a.hj(a0,a1.V(0,r))
a.ch.saZ(0,null)}}},
dA(a,b){var s=this.gw6()
s.toString
b.cM(0,s)}}
A.a4R.prototype={
$2(a,b){return this.a.qb(a,b)},
$S:17}
A.w5.prototype={
YO(){if(this.v!=null)return
this.v=this.au},
EA(a){switch(a.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
szj(a){var s=this,r=s.U
if(r===a)return
s.U=a
if(s.EA(r)||s.EA(a))s.a9()
else{s.bR=s.co=null
s.ao()}},
seo(a){var s=this
if(s.au.k(0,a))return
s.au=a
s.v=s.bR=s.co=null
s.ao()},
sbK(a){var s=this
if(s.bz==a)return
s.bz=a
s.v=s.bR=s.co=null
s.ao()},
cf(a){var s,r=this.C$
if(r!=null){s=r.hb(B.bK)
switch(this.U.a){case 6:return a.bD(new A.aQ(0,a.b,0,a.d).oe(s))
case 1:case 2:case 0:case 4:case 3:case 5:return a.oe(s)}}else return new A.a6(A.H(0,a.a,a.b),A.H(0,a.c,a.d))},
bJ(){var s,r,q,p=this,o=p.C$
if(o!=null){o.cz(B.bK,!0)
switch(p.U.a){case 6:o=t.k
s=o.a(A.z.prototype.ga1.call(p))
r=p.C$.k3
r.toString
q=new A.aQ(0,s.b,0,s.d).oe(r)
p.k3=o.a(A.z.prototype.ga1.call(p)).bD(q)
break
case 1:case 2:case 0:case 4:case 3:case 5:o=t.k.a(A.z.prototype.ga1.call(p))
s=p.C$.k3
s.toString
p.k3=o.oe(s)
break}p.bR=p.co=null}else{o=t.k.a(A.z.prototype.ga1.call(p))
p.k3=new A.a6(A.H(0,o.a,o.b),A.H(0,o.c,o.d))}},
xO(){var s,r,q,p,o,n,m,l,k,j=this
if(j.bR!=null)return
if(j.C$==null){j.co=!1
s=new A.bf(new Float64Array(16))
s.dm()
j.bR=s}else{j.YO()
s=j.C$.k3
s.toString
r=j.U
q=j.k3
q.toString
p=A.aqF(r,s,q)
q=p.b
r=p.a
o=s.a
s=s.b
n=j.v.zC(r,new A.C(0,0,0+o,0+s))
m=j.v
m.toString
l=j.k3
k=m.zC(q,new A.C(0,0,0+l.a,0+l.b))
m=n.a
j.co=n.c-m<o||n.d-n.b<s
s=A.v4(k.a,k.b,0)
s.i0(0,q.a/r.a,q.b/r.b,1)
s.aw(0,-m,-n.b)
j.bR=s}},
FL(a,b){var s,r,q,p,o=this,n=o.bR
n.toString
s=A.a1J(n)
if(s==null){n=o.cx
n===$&&A.b()
r=o.bR
r.toString
q=A.eU.prototype.gmC.call(o)
p=o.ch.a
return a.pu(n,b,r,q,p instanceof A.kX?p:null)}else o.hj(a,b.V(0,s))
return null},
aF(a,b){var s,r,q,p,o,n=this
if(n.C$!=null){s=n.k3
if(!s.gN(s)){s=n.C$.k3
s=s.gN(s)}else s=!0}else s=!0
if(s)return
n.xO()
s=n.co
s.toString
if(s&&n.e7!==B.l){s=n.cx
s===$&&A.b()
r=n.k3
q=r.a
r=r.b
p=n.ch
o=p.a
o=o instanceof A.oc?o:null
p.saZ(0,a.kO(s,b,new A.C(0,0,0+q,0+r),n.gXT(),n.e7,o))}else n.ch.saZ(0,n.FL(a,b))},
cX(a,b){var s=this,r=s.k3
if(!r.gN(r)){r=s.C$
if(r==null)r=null
else{r=r.k3
r=r.gN(r)}r=r===!0}else r=!0
if(r)return!1
s.xO()
return a.y6(new A.a4n(s),b,s.bR)},
mD(a){var s=this.k3
if(!s.gN(s)){s=a.k3
s=!s.gN(s)}else s=!1
return s},
dA(a,b){var s=this.k3
if(!s.gN(s)){s=a.k3
s=!s.gN(s)}else s=!1
if(!s)b.C6()
else{this.xO()
s=this.bR
s.toString
b.cM(0,s)}}}
A.a4n.prototype={
$2(a,b){return this.a.qb(a,b)},
$S:17}
A.Jw.prototype={
sa6V(a){var s=this
if(s.v.k(0,a))return
s.v=a
s.ao()
s.b2()},
bY(a,b){return this.cX(a,b)},
cX(a,b){var s,r,q=this
if(q.U){s=q.v
r=q.k3
r=new A.t(s.a*r.a,s.b*r.b)
s=r}else s=null
return a.nX(new A.a4o(q),s,b)},
aF(a,b){var s,r,q=this
if(q.C$!=null){s=q.v
r=q.k3
q.hj(a,new A.t(b.a+s.a*r.a,b.b+s.b*r.b))}},
dA(a,b){var s=this.v,r=this.k3
b.aw(0,s.a*r.a,s.b*r.b)}}
A.a4o.prototype={
$2(a,b){return this.a.qb(a,b)},
$S:17}
A.JH.prototype={
od(a){return new A.a6(A.H(1/0,a.a,a.b),A.H(1/0,a.c,a.d))},
ix(a,b){var s,r=this,q=null
if(t.Y.b(a)){s=r.bq
return s==null?q:s.$1(a)}if(t.c.b(a))return q
if(t.Cs.b(a)){s=r.cJ
return s==null?q:s.$1(a)}if(t.hV.b(a))return q
if(t.AJ.b(a)){s=r.cm
return s==null?q:s.$1(a)}if(t.EL.b(a)){s=r.eW
return s==null?q:s.$1(a)}if(t.r.b(a))return q
if(t.zv.b(a))return q
if(t.zs.b(a)){s=r.Jx
return s==null?q:s.$1(a)}}}
A.JB.prototype={
bY(a,b){return this.Ph(a,b)&&!0},
ix(a,b){var s=this.cJ
if(s!=null&&t.hV.b(a))return s.$1(a)},
gIP(a){return this.cm},
gBo(){return this.eW},
am(a){this.nc(a)
this.eW=!0},
ah(a){this.eW=!1
this.lf(0)},
od(a){return new A.a6(A.H(1/0,a.a,a.b),A.H(1/0,a.c,a.d))},
$ij5:1,
gAm(a){return this.c4},
gAn(a){return this.cU}}
A.JK.prototype={
gdT(){return!0}}
A.w6.prototype={
sK7(a){var s,r=this
if(a===r.v)return
r.v=a
s=r.U
if(s==null||!s)r.b2()},
szA(a){var s=this,r=s.U
if(a==r)return
if(r==null)r=s.v
s.U=a
if(r!==(a==null?s.v:a))s.b2()},
bY(a,b){return!this.v&&this.iQ(a,b)},
ha(a){var s,r=this.C$
if(r!=null){s=this.U
s=!(s==null?this.v:s)}else s=!1
if(s){r.toString
a.$1(r)}}}
A.JC.prototype={
stU(a){var s=this
if(a===s.v)return
s.v=a
s.a9()
s.tO()},
eS(a){if(this.v)return null
return this.D5(a)},
gjW(){return this.v},
cf(a){if(this.v)return new A.a6(A.H(0,a.a,a.b),A.H(0,a.c,a.d))
return this.Pg(a)},
pp(){this.P7()},
bJ(){var s,r=this
if(r.v){s=r.C$
if(s!=null)s.iE(t.k.a(A.z.prototype.ga1.call(r)))}else r.vg()},
bY(a,b){return!this.v&&this.iQ(a,b)},
mD(a){return!this.v},
aF(a,b){if(this.v)return
this.hj(a,b)},
ha(a){if(this.v)return
this.ve(a)}}
A.w2.prototype={
sHR(a){if(this.v===a)return
this.v=a
this.b2()},
szA(a){return},
bY(a,b){return this.v?this.k3.A(0,b):this.iQ(a,b)},
ha(a){var s,r,q=this.C$
if(q!=null){s=this.U
r=this.v
s=!r}else s=!1
if(s){q.toString
a.$1(q)}}}
A.jd.prototype={
sa74(a){if(A.alv(a,this.bq))return
this.bq=a
this.b2()},
sjA(a){var s,r=this
if(J.f(r.c4,a))return
s=r.c4
r.c4=a
if(a!=null!==(s!=null))r.b2()},
skM(a){var s,r=this
if(J.f(r.cJ,a))return
s=r.cJ
r.cJ=a
if(a!=null!==(s!=null))r.b2()},
sa5i(a){var s,r=this
if(J.f(r.cU,a))return
s=r.cU
r.cU=a
if(a!=null!==(s!=null))r.b2()},
sa5s(a){var s,r=this
if(J.f(r.cm,a))return
s=r.cm
r.cm=a
if(a!=null!==(s!=null))r.b2()},
eV(a){var s,r=this
r.hi(a)
if(r.c4!=null){s=r.bq
s=s==null||s.A(0,B.dP)}else s=!1
if(s)a.sjA(r.c4)
if(r.cJ!=null){s=r.bq
s=s==null||s.A(0,B.Bi)}else s=!1
if(s)a.skM(r.cJ)
if(r.cU!=null){s=r.bq
if(s==null||s.A(0,B.dT))a.stY(r.gYa())
s=r.bq
if(s==null||s.A(0,B.dS))a.stX(r.gY8())}if(r.cm!=null){s=r.bq
if(s==null||s.A(0,B.dQ))a.stZ(r.gYc())
s=r.bq
if(s==null||s.A(0,B.dR))a.stW(r.gY6())}},
Y9(){var s,r,q=this.cU
if(q!=null){s=this.k3
r=s.a*-0.8
s=s.j5(B.j)
s=A.cw(this.bB(0,null),s)
q.$1(new A.hJ(null,new A.t(r,0),r,s))}},
Yb(){var s,r,q=this.cU
if(q!=null){s=this.k3
r=s.a*0.8
s=s.j5(B.j)
s=A.cw(this.bB(0,null),s)
q.$1(new A.hJ(null,new A.t(r,0),r,s))}},
Yd(){var s,r,q=this.cm
if(q!=null){s=this.k3
r=s.b*-0.8
s=s.j5(B.j)
s=A.cw(this.bB(0,null),s)
q.$1(new A.hJ(null,new A.t(0,r),r,s))}},
Y7(){var s,r,q=this.cm
if(q!=null){s=this.k3
r=s.b*0.8
s=s.j5(B.j)
s=A.cw(this.bB(0,null),s)
q.$1(new A.hJ(null,new A.t(0,r),r,s))}}}
A.w9.prototype={
sLh(a){var s=this
if(s.v===a)return
s.v=a
s.Hh(a)
s.b2()},
sa1b(a){if(this.U===a)return
this.U=a
this.b2()},
sa2D(a){if(this.au===a)return
this.au=a
this.b2()},
sa2A(a){return},
Hh(a){var s=this,r=a.fy
r=a.fx
r=r==null?null:new A.cr(r,B.ad)
s.co=r
r=a.id
r=a.go
r=r==null?null:new A.cr(r,B.ad)
s.bR=r
s.e7=null
s.h_=null
s.iw=null},
sbK(a){if(this.zh==a)return
this.zh=a
this.b2()},
ha(a){this.ve(a)},
eV(a){var s,r,q=this
q.hi(a)
a.a=q.U
a.b=q.au
s=q.v.a
if(s!=null){a.b7(B.Bt,!0)
a.b7(B.Bl,s)}s=q.v.e
if(s!=null)a.b7(B.Bq,s)
s=q.v.f
if(s!=null)a.b7(B.Bu,s)
s=q.v.w
if(s!=null)a.b7(B.Bs,s)
s=q.v.as
if(s!=null)a.b7(B.Bo,s)
s=q.v.at
if(s!=null)a.b7(B.Bp,s)
s=q.v.db
if(s!=null)a.b7(B.Bm,s)
s=q.co
if(s!=null){a.p4=s
a.d=!0}s=q.bR
if(s!=null){a.R8=s
a.d=!0}s=q.e7
if(s!=null){a.RG=s
a.d=!0}s=q.h_
if(s!=null){a.rx=s
a.d=!0}s=q.iw
if(s!=null){a.ry=s
a.d=!0}s=q.v
r=s.p2
if(r!=null){a.to=r
a.d=!0}s.p3!=null
s=q.v.cx
if(s!=null)a.b7(B.Bn,s)
s=q.v.cy
if(s!=null)a.b7(B.Br,s)
s=q.zh
if(s!=null){a.y1=s
a.d=!0}s=q.v
r=s.R8
if(r!=null){a.id=r
a.d=!0}s=s.RG
if(s!=null)a.HX(s)
if(q.v.rx!=null)a.sjA(q.gYe())
if(q.v.ry!=null)a.skM(q.gY4())
if(q.v.P!=null)a.stV(q.gY2())},
Yf(){var s=this.v.rx
if(s!=null)s.$0()},
Y5(){var s=this.v.ry
if(s!=null)s.$0()},
Y3(){var s=this.v.P
if(s!=null)s.$0()}}
A.Jm.prototype={
sa0n(a){return},
eV(a){this.hi(a)
a.c=!0}}
A.JA.prototype={
eV(a){this.hi(a)
a.d=a.p2=a.a=!0}}
A.Jv.prototype={
sa2B(a){if(a===this.v)return
this.v=a
this.b2()},
ha(a){if(this.v)return
this.ve(a)}}
A.Jy.prototype={
szB(a,b){if(b===this.v)return
this.v=b
this.b2()},
eV(a){this.hi(a)
a.k1=this.v
a.d=!0}}
A.w4.prototype={
sn(a,b){if(this.v.k(0,b))return
this.v=b
this.ao()},
sNs(a){return},
aF(a,b){var s,r=this,q=r.v,p=r.k3
p.toString
s=new A.rx(q,p,b,A.y(t.S,t.M),A.aw(),r.$ti.h("rx<1>"))
s.i9()
a.Lk(s,A.eU.prototype.gmC.call(r),b)},
gnZ(){return!0}}
A.PN.prototype={
eS(a){var s=this.C$
if(s!=null)return s.jO(a)
return this.D5(a)}}
A.PO.prototype={
am(a){var s=this
s.nc(a)
s.m9$.Z(0,s.gra())
s.xN()},
ah(a){this.m9$.H(0,this.gra())
this.lf(0)},
aF(a,b){if(this.m8$===0)return
this.hj(a,b)}}
A.z8.prototype={
am(a){var s
this.eF(a)
s=this.C$
if(s!=null)s.am(a)},
ah(a){var s
this.e1(0)
s=this.C$
if(s!=null)s.ah(0)}}
A.z9.prototype={
eS(a){var s=this.C$
if(s!=null)return s.jO(a)
return this.CT(a)}}
A.jg.prototype={
F(){return"SelectionResult."+this.b}}
A.dh.prototype={$iab:1}
A.Kf.prototype={
spw(a){var s=this,r=s.m7$
if(a==r)return
if(a==null)s.H(0,s.gGz())
else if(r==null)s.Z(0,s.gGz())
s.Gy()
s.m7$=a
s.GA()},
GA(){var s=this
if(s.m7$==null){s.kB$=!1
return}if(s.kB$&&!s.gn(s).d){s.m7$.u(0,s)
s.kB$=!1}else if(!s.kB$&&s.gn(s).d){s.m7$.B(0,s)
s.kB$=!0}},
Gy(){var s=this
if(s.kB$){s.m7$.u(0,s)
s.kB$=!1}}}
A.pA.prototype={
F(){return"SelectionEventType."+this.b}}
A.ne.prototype={
F(){return"TextGranularity."+this.b}}
A.a6d.prototype={}
A.rX.prototype={}
A.n_.prototype={}
A.n0.prototype={
F(){return"SelectionExtendDirection."+this.b}}
A.pB.prototype={
F(){return"SelectionStatus."+this.b}}
A.kN.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.A(s))return!1
return b instanceof A.kN&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&b.c===s.c&&b.d===s.d},
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
F(){return"TextSelectionHandleType."+this.b}}
A.JL.prototype={
eS(a){var s,r,q=this.C$
if(q!=null){s=q.jO(a)
r=q.e
r.toString
t.Ch.a(r)
if(s!=null)s+=r.a.b}else s=this.CT(a)
return s},
aF(a,b){var s,r=this.C$
if(r!=null){s=r.e
s.toString
a.f6(r,t.Ch.a(s).a.V(0,b))}},
cX(a,b){var s,r=this.C$
if(r!=null){s=r.e
s.toString
t.Ch.a(s)
return a.nX(new A.a4J(b,s,r),s.a,b)}return!1}}
A.a4J.prototype={
$2(a,b){return this.c.bY(a,b)},
$S:17}
A.JD.prototype={
r0(){var s=this
if(s.v!=null)return
s.v=s.U.W(s.au)},
sdG(a,b){var s=this
if(s.U.k(0,b))return
s.U=b
s.v=null
s.a9()},
sbK(a){var s=this
if(s.au==a)return
s.au=a
s.v=null
s.a9()},
cf(a){var s,r,q,p=this
p.r0()
if(p.C$==null){s=p.v
return a.bD(new A.a6(s.a+s.c,s.b+s.d))}s=p.v
s.toString
r=a.IT(s)
q=p.C$.hb(r)
s=p.v
return a.bD(new A.a6(s.a+q.a+s.c,s.b+q.b+s.d))},
bJ(){var s,r,q,p,o,n,m=this,l=t.k.a(A.z.prototype.ga1.call(m))
m.r0()
if(m.C$==null){s=m.v
m.k3=l.bD(new A.a6(s.a+s.c,s.b+s.d))
return}s=m.v
s.toString
r=l.IT(s)
m.C$.cz(r,!0)
s=m.C$
q=s.e
q.toString
t.Ch.a(q)
p=m.v
o=p.a
n=p.b
q.a=new A.t(o,n)
s=s.k3
m.k3=l.bD(new A.a6(o+s.a+p.c,n+s.b+p.d))}}
A.Jk.prototype={
r0(){var s=this
if(s.v!=null)return
s.v=s.U.W(s.au)},
seo(a){var s=this
if(s.U.k(0,a))return
s.U=a
s.v=null
s.a9()},
sbK(a){var s=this
if(s.au==a)return
s.au=a
s.v=null
s.a9()},
y7(){var s,r,q,p,o=this
o.r0()
s=o.C$
r=s.e
r.toString
t.Ch.a(r)
q=o.v
q.toString
p=o.k3
p.toString
s=s.k3
s.toString
r.a=q.lP(t.uu.a(p.ab(0,s)))}}
A.JI.prototype={
sa79(a){if(this.cJ==a)return
this.cJ=a
this.a9()},
sa3P(a){if(this.cU==a)return
this.cU=a
this.a9()},
cf(a){var s,r,q=this,p=q.cJ!=null||a.b===1/0,o=q.cU!=null||a.d===1/0,n=q.C$
if(n!=null){s=n.hb(new A.aQ(0,a.b,0,a.d))
if(p){n=q.cJ
if(n==null)n=1
n=s.a*n}else n=1/0
if(o){r=q.cU
if(r==null)r=1
r=s.b*r}else r=1/0
return a.bD(new A.a6(n,r))}n=p?0:1/0
return a.bD(new A.a6(n,o?0:1/0))},
bJ(){var s,r,q=this,p=t.k.a(A.z.prototype.ga1.call(q)),o=q.cJ!=null||p.b===1/0,n=q.cU!=null||p.d===1/0,m=q.C$
if(m!=null){m.cz(new A.aQ(0,p.b,0,p.d),!0)
if(o){m=q.C$.k3.a
s=q.cJ
m*=s==null?1:s}else m=1/0
if(n){s=q.C$.k3.b
r=q.cU
s*=r==null?1:r}else s=1/0
q.k3=p.bD(new A.a6(m,s))
q.y7()}else{m=o?0:1/0
q.k3=p.bD(new A.a6(m,n?0:1/0))}}}
A.a6L.prototype={
uF(a){return new A.a6(A.H(1/0,a.a,a.b),A.H(1/0,a.c,a.d))}}
A.Js.prototype={
syI(a){var s=this,r=s.v
if(r===a)return
if(A.A(a)!==A.A(r)||a.mZ(r))s.a9()
s.v=a
s.b!=null},
am(a){this.Qh(a)},
ah(a){this.Qi(0)},
cf(a){return a.bD(this.v.uF(a))},
bJ(){var s,r,q,p,o,n,m=this,l=t.k,k=l.a(A.z.prototype.ga1.call(m))
m.k3=k.bD(m.v.uF(k))
if(m.C$!=null){s=m.v.By(l.a(A.z.prototype.ga1.call(m)))
l=m.C$
l.toString
k=s.a
r=s.b
q=k>=r
l.cz(s,!(q&&s.c>=s.d))
l=m.C$
p=l.e
p.toString
t.Ch.a(p)
o=m.v
n=m.k3
n.toString
if(q&&s.c>=s.d)l=new A.a6(A.H(0,k,r),A.H(0,s.c,s.d))
else{l=l.k3
l.toString}p.a=o.BH(n,l)}}}
A.za.prototype={
am(a){var s
this.eF(a)
s=this.C$
if(s!=null)s.am(a)},
ah(a){var s
this.e1(0)
s=this.C$
if(s!=null)s.ah(0)}}
A.u8.prototype={
F(){return"GrowthDirection."+this.b}}
A.kQ.prototype={
gKx(){return!1},
a0f(a,b){var s=this.w
switch(A.bd(this.a).a){case 0:return new A.aQ(b,a,s,s)
case 1:return new A.aQ(s,s,b,a)}},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.kQ))return!1
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
return"SliverConstraints("+B.c.b3(r,", ")+")"}}
A.a8t.prototype={
c0(){return"SliverGeometry"}}
A.pG.prototype={}
A.Kw.prototype={
i(a){return A.A(this.a).i(0)+"@(mainAxis: "+A.h(this.c)+", crossAxis: "+A.h(this.d)+")"}}
A.wV.prototype={
i(a){var s=this.a
return"layoutOffset="+(s==null?"None":B.d.M(s,1))}}
A.kR.prototype={
i(a){return"paintOffset="+A.h(this.a)}}
A.jj.prototype={}
A.ck.prototype={
ga1(){return t.p.a(A.z.prototype.ga1.call(this))},
gjT(){return this.ghQ()},
ghQ(){var s=this,r=t.p
switch(A.bd(r.a(A.z.prototype.ga1.call(s)).a).a){case 0:return new A.C(0,0,0+s.id.c,0+r.a(A.z.prototype.ga1.call(s)).w)
case 1:return new A.C(0,0,0+r.a(A.z.prototype.ga1.call(s)).w,0+s.id.c)}},
pp(){},
K2(a,b,c){var s=this
if(c>=0&&c<s.id.r&&b>=0&&b<t.p.a(A.z.prototype.ga1.call(s)).w)if(s.zz(a,b,c)||!1){a.B(0,new A.Kw(c,b,s))
return!0}return!1},
zz(a,b,c){return!1},
hA(a,b,c){var s=a.d,r=a.r,q=s+r
return A.H(A.H(c,s,q)-A.H(b,s,q),0,r)},
o7(a,b,c){var s=a.d,r=s+a.z,q=a.Q,p=s+q
return A.H(A.H(c,r,p)-A.H(b,r,p),0,q)},
yp(a){return 0},
dA(a,b){},
ix(a,b){}}
A.a4K.prototype={
EM(a){var s
switch(a.a.a){case 0:case 3:s=!1
break
case 2:case 1:s=!0
break
default:s=null}switch(a.b.a){case 0:break
case 1:s=!s
break}return s},
a3Z(a,b,c,d){var s,r,q,p,o=this,n={},m=t.p,l=o.EM(m.a(A.z.prototype.ga1.call(o))),k=b.e
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
break}return a.a05(new A.a4L(n,b),p)}}
A.a4L.prototype={
$1(a){return this.b.bY(a,this.a.a)},
$S:111}
A.QI.prototype={}
A.QL.prototype={
ah(a){this.vb(0)}}
A.JM.prototype={
spN(a){if(this.ir===a)return
this.ir=a
this.a9()}}
A.JN.prototype={
MD(a,b){var s,r
if(b>0){s=a/b
r=B.d.bc(s)
if(Math.abs(s*b-r*b)<1e-10)return r
return B.d.cK(s)}return 0},
BC(a,b){var s,r
if(b>0){s=a/b-1
r=B.d.bc(s)
if(Math.abs(s*b-r*b)<1e-10)return Math.max(0,r)
return Math.max(0,B.d.dB(s))}return 0},
Sk(a){var s,r=this.aq$,q=A.n(this).h("av.1"),p=t.D,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s<a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).ap$}return o},
Sl(a){var s,r=this.d9$,q=A.n(this).h("av.1"),p=t.D,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s>a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).c5$}return o},
bJ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=t.p,a7=a6.a(A.z.prototype.ga1.call(a4)),a8=a4.bm
a8.R8=!1
s=a6.a(A.z.prototype.ga1.call(a4)).y*a4.ir
a6=a7.d
r=a6+a7.z
q=r+a7.Q
p=a7.a0f(s,s)
o=a4.MD(r,s)
n=isFinite(q)?a4.BC(q,s):a5
if(a4.aq$!=null){m=a4.Sk(o)
a4.Iq(m,n!=null?a4.Sl(n):0)}else a4.Iq(0,0)
if(a4.aq$==null)if(!a4.a_T(o,s*o)){l=o<=0?0:a8.grF()*s
a4.id=A.wU(a5,!1,a5,a5,l,0,0,l,a5)
a8.IX()
return}k=a4.aq$
k.toString
k=k.e
k.toString
j=t.D
k=j.a(k).b
k.toString
i=k-1
h=a5
for(;i>=o;--i){g=a4.a4b(p)
if(g==null){a4.id=A.wU(a5,!1,a5,a5,0,0,0,0,i*s)
return}k=g.e
k.toString
j.a(k).a=s*i
if(h==null)h=g}if(h==null){a4.aq$.iE(p)
h=a4.aq$
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
g=k.a(d).ap$
if(g!=null){d=g.e
d.toString
d=j.a(d).b
d.toString
d=d!==i}else d=!0
if(d){g=a4.a4a(p,h)
if(g==null){e=i*s
break}}else g.iE(p)
d=g.e
d.toString
j.a(d)
c=d.b
c.toString
d.a=s*c;++i
h=g}k=a4.d9$
k.toString
k=k.e
k.toString
k=j.a(k).b
k.toString
b=s*o
a=s*(k+1)
e=Math.min(e,a8.a2x(a7,o,k,b,a))
a0=a4.hA(a7,b,a)
a1=a4.o7(a7,b,a)
a2=a6+a7.r
a3=isFinite(a2)?a4.BC(a2,s):a5
a4.id=A.wU(a1,a3!=null&&k>=a3||a6>0,a5,a5,e,a0,0,e,a5)
if(e===a)a8.R8=!0
a8.IX()}}
A.hR.prototype={$icg:1}
A.a4P.prototype={
eB(a){}}
A.hf.prototype={
i(a){var s=this.b,r=this.oM$?"keepAlive; ":""
return"index="+A.h(s)+"; "+r+this.PQ(0)}}
A.mQ.prototype={
eB(a){if(!(a.e instanceof A.hf))a.e=new A.hf(!1,null,null)},
ig(a){var s
this.CU(a)
s=a.e
s.toString
t.D.a(s)
if(!s.c){t.x.a(a)
s.b=this.bm.p4}},
zE(a,b,c){this.v4(0,b,c)},
tS(a,b){var s,r,q,p=this,o=a.e
o.toString
s=t.D
s.a(o)
if(!o.c){p.NS(a,b)
o=a.e
o.toString
s.a(o).b=p.bm.p4
p.a9()}else{r=p.aj
if(r.j(0,o.b)===a)r.u(0,o.b)
q=a.e
q.toString
s.a(q).b=p.bm.p4
o=o.b
o.toString
r.l(0,o,a)}},
u(a,b){var s=b.e
s.toString
t.D.a(s)
if(!s.c){this.NU(0,b)
return}this.aj.u(0,s.b)
this.jb(b)},
vZ(a,b){this.Ko(new A.a4M(this,a,b),t.p)},
Eg(a){var s,r=this,q=a.e
q.toString
t.D.a(q)
if(q.oM$){r.u(0,a)
s=q.b
s.toString
r.aj.l(0,s,a)
a.e=q
r.CU(a)
q.c=!0}else r.bm.Lw(a)},
am(a){var s,r,q
this.Qj(a)
for(s=this.aj,s=s.gaU(s),s=new A.dU(J.at(s.a),s.b),r=A.n(s).z[1];s.q();){q=s.a;(q==null?r.a(q):q).am(a)}},
ah(a){var s,r,q
this.Qk(0)
for(s=this.aj,s=s.gaU(s),s=new A.dU(J.at(s.a),s.b),r=A.n(s).z[1];s.q();){q=s.a;(q==null?r.a(q):q).ah(0)}},
jG(){this.NT()
var s=this.aj
s.gaU(s).Y(0,this.gLt())},
aV(a){var s
this.Cs(a)
s=this.aj
s.gaU(s).Y(0,a)},
ha(a){this.Cs(a)},
a_T(a,b){var s
this.vZ(a,null)
s=this.aq$
if(s!=null){s=s.e
s.toString
t.D.a(s).a=b
return!0}this.bm.R8=!0
return!1},
a4b(a){var s,r,q,p=this,o=p.aq$
o.toString
o=o.e
o.toString
s=t.D
o=s.a(o).b
o.toString
r=o-1
p.vZ(r,null)
o=p.aq$
o.toString
q=o.e
q.toString
q=s.a(q).b
q.toString
if(q===r){o.cz(a,!1)
return p.aq$}p.bm.R8=!0
return null},
a4a(a,b){var s,r,q,p=b.e
p.toString
s=t.D
p=s.a(p).b
p.toString
r=p+1
this.vZ(r,b)
p=b.e
p.toString
q=A.n(this).h("av.1").a(p).ap$
if(q!=null){p=q.e
p.toString
p=s.a(p).b
p.toString
p=p===r}else p=!1
if(p){q.cz(a,!1)
return q}this.bm.R8=!0
return null},
Iq(a,b){var s={}
s.a=a
s.b=b
this.Ko(new A.a4O(s,this),t.p)},
L7(a){switch(A.bd(t.p.a(A.z.prototype.ga1.call(this)).a).a){case 0:return a.k3.a
case 1:return a.k3.b}},
zz(a,b,c){var s,r,q=this.d9$,p=A.amw(a)
for(s=A.n(this).h("av.1");q!=null;){if(this.a3Z(p,q,b,c))return!0
r=q.e
r.toString
q=s.a(r).c5$}return!1},
yp(a){var s=a.e
s.toString
return t.D.a(s).a},
mD(a){var s=t.ub.a(a.e)
return(s==null?null:s.b)!=null&&!this.aj.R(0,s.b)},
dA(a,b){var s,r,q,p,o=this
if(!o.mD(a))b.C6()
else{s=t.p
r=o.EM(s.a(A.z.prototype.ga1.call(o)))
q=a.e
q.toString
q=t.D.a(q).a
q.toString
p=q-s.a(A.z.prototype.ga1.call(o)).d
switch(A.bd(s.a(A.z.prototype.ga1.call(o)).a).a){case 0:b.aw(0,!r?o.id.c-a.k3.a-p:p,0)
break
case 1:b.aw(0,0,!r?o.id.c-a.k3.b-p:p)
break}}},
aF(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null
if(d.aq$==null)return
s=t.p
switch(A.jP(s.a(A.z.prototype.ga1.call(d)).a,s.a(A.z.prototype.ga1.call(d)).b)){case B.y:r=b.V(0,new A.t(0,d.id.c))
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
q=p}n=d.aq$
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
if(o){e=d.L7(n)
f=new A.t(k+i*e,h+g*e)}if(j<s.a(A.z.prototype.ga1.call(d)).r&&j+d.L7(n)>0)a.f6(n,f)
k=n.e
k.toString
n=m.a(k).ap$}}}
A.a4M.prototype={
$1(a){var s=this.a,r=s.aj,q=this.b,p=this.c
if(r.R(0,q)){r=r.u(0,q)
r.toString
q=r.e
q.toString
t.D.a(q)
s.jb(r)
r.e=q
s.v4(0,r,p)
q.c=!1}else s.bm.a1H(q,p)},
$S:112}
A.a4O.prototype={
$1(a){var s,r,q
for(s=this.a,r=this.b;s.a>0;){q=r.aq$
q.toString
r.Eg(q);--s.a}for(;s.b>0;){q=r.d9$
q.toString
r.Eg(q);--s.b}s=r.aj
s=s.gaU(s)
q=A.n(s).h("aH<o.E>")
B.c.Y(A.aA(new A.aH(s,new A.a4N(),q),!0,q.h("o.E")),r.bm.ga69())},
$S:112}
A.a4N.prototype={
$1(a){var s=a.e
s.toString
return!t.D.a(s).oM$},
$S:249}
A.zc.prototype={
am(a){var s,r,q
this.eF(a)
s=this.aq$
for(r=t.D;s!=null;){s.am(a)
q=s.e
q.toString
s=r.a(q).ap$}},
ah(a){var s,r,q
this.e1(0)
s=this.aq$
for(r=t.D;s!=null;){s.ah(0)
q=s.e
q.toString
s=r.a(q).ap$}}}
A.Q0.prototype={}
A.Q1.prototype={}
A.QJ.prototype={
ah(a){this.vb(0)}}
A.QK.prototype={}
A.wa.prototype={
gyj(){var s=this,r=t.p
switch(A.jP(r.a(A.z.prototype.ga1.call(s)).a,r.a(A.z.prototype.ga1.call(s)).b)){case B.y:return s.bQ.d
case B.au:return s.bQ.a
case B.x:return s.bQ.b
case B.ae:return s.bQ.c}},
ga07(){var s=this,r=t.p
switch(A.jP(r.a(A.z.prototype.ga1.call(s)).a,r.a(A.z.prototype.ga1.call(s)).b)){case B.y:return s.bQ.b
case B.au:return s.bQ.c
case B.x:return s.bQ.d
case B.ae:return s.bQ.a}},
ga1S(){switch(A.bd(t.p.a(A.z.prototype.ga1.call(this)).a).a){case 0:var s=this.bQ
return s.gb8(s)+s.gbd(s)
case 1:return this.bQ.gcp()}},
eB(a){if(!(a.e instanceof A.kR))a.e=new A.kR(B.j)},
bJ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=null,a2=t.p,a3=a2.a(A.z.prototype.ga1.call(a0)),a4=a0.gyj()
a0.ga07()
s=a0.bQ
s.toString
a2=s.a09(A.bd(a2.a(A.z.prototype.ga1.call(a0)).a))
r=a0.ga1S()
if(a0.C$==null){q=a0.hA(a3,0,a2)
a0.id=A.wU(a0.o7(a3,0,a2),!1,a1,a1,a2,Math.min(q,a3.r),0,a2,a1)
return}p=a0.hA(a3,0,a4)
o=a3.f
if(o>0)o=Math.max(0,o-p)
s=a0.C$
s.toString
n=Math.max(0,a3.d-a4)
m=Math.min(0,a3.z+a4)
l=a3.r
k=a0.hA(a3,0,a4)
j=a3.Q
i=a0.o7(a3,0,a4)
h=Math.max(0,a3.w-r)
g=a3.a
f=a3.b
s.cz(new A.kQ(g,f,a3.c,n,a4+a3.e,o,l-k,h,a3.x,a3.y,m,j-i),!0)
e=a0.C$.id
s=e.y
if(s!=null){a0.id=A.wU(a1,!1,a1,a1,0,0,0,0,s)
return}s=e.a
n=a4+s
m=a2+s
d=a0.hA(a3,n,m)
c=p+d
b=a0.o7(a3,0,a4)
a=a0.o7(a3,n,m)
n=e.c
k=e.d
q=Math.min(p+Math.max(n,k+d),l)
l=e.b
k=Math.min(c+k,q)
j=Math.min(a+b+e.z,j)
i=e.e
n=Math.max(c+n,p+e.r)
a0.id=A.wU(j,e.x,n,k,a2+i,q,l,m,a1)
m=a0.C$.e
m.toString
t.v.a(m)
switch(A.jP(g,f)){case B.y:a2=a0.bQ
n=a2.a
s=a2.d+s
m.a=new A.t(n,a0.hA(a3,s,s+a2.b))
break
case B.au:m.a=new A.t(a0.hA(a3,0,a0.bQ.a),a0.bQ.b)
break
case B.x:a2=a0.bQ
m.a=new A.t(a2.a,a0.hA(a3,0,a2.b))
break
case B.ae:a2=a0.bQ
s=a2.c+s
m.a=new A.t(a0.hA(a3,s,s+a2.a),a0.bQ.b)
break}},
zz(a,b,c){var s,r,q,p,o=this,n=o.C$
if(n!=null&&n.id.r>0){n=n.e
n.toString
t.v.a(n)
s=o.hA(t.p.a(A.z.prototype.ga1.call(o)),0,o.gyj())
r=o.C$
r.toString
r=o.a0J(r)
n=n.a
q=o.C$.ga3X()
p=n!=null
if(p)a.c.push(new A.qO(new A.t(-n.a,-n.b)))
q.$3$crossAxisPosition$mainAxisPosition(a,b-r,c-s)
if(p)a.u8()}return!1},
a0J(a){var s=this,r=t.p
switch(A.jP(r.a(A.z.prototype.ga1.call(s)).a,r.a(A.z.prototype.ga1.call(s)).b)){case B.y:case B.x:return s.bQ.a
case B.ae:case B.au:return s.bQ.b}},
yp(a){return this.gyj()},
dA(a,b){var s=a.e
s.toString
s=t.v.a(s).a
b.aw(0,s.a,s.b)},
aF(a,b){var s,r=this.C$
if(r!=null&&r.id.w){s=r.e
s.toString
a.f6(r,b.V(0,t.v.a(s).a))}}}
A.PZ.prototype={
am(a){var s
this.eF(a)
s=this.C$
if(s!=null)s.am(a)},
ah(a){var s
this.e1(0)
s=this.C$
if(s!=null)s.ah(0)}}
A.a4j.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return b instanceof A.a4j&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this
return"RelativeRect.fromLTRB("+B.d.M(s.a,1)+", "+B.d.M(s.b,1)+", "+B.d.M(s.c,1)+", "+B.d.M(s.d,1)+")"}}
A.dX.prototype={
gzK(){var s=this
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
r.push(s.q8(0))
return B.c.b3(r,"; ")}}
A.x2.prototype={
F(){return"StackFit."+this.b}}
A.wb.prototype={
eB(a){if(!(a.e instanceof A.dX))a.e=new A.dX(null,null,B.j)},
ZE(){var s=this
if(s.P!=null)return
s.P=s.ae.W(s.al)},
seo(a){var s=this
if(s.ae.k(0,a))return
s.ae=a
s.P=null
s.a9()},
sbK(a){var s=this
if(s.al==a)return
s.al=a
s.P=null
s.a9()},
eS(a){return this.IS(a)},
cf(a){return this.GR(a,A.ai2())},
GR(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.ZE()
if(e.dE$===0){s=a.a
r=a.b
q=A.H(1/0,s,r)
p=a.c
o=a.d
n=A.H(1/0,p,o)
return isFinite(q)&&isFinite(n)?new A.a6(A.H(1/0,s,r),A.H(1/0,p,o)):new A.a6(A.H(0,s,r),A.H(0,p,o))}m=a.a
l=a.c
switch(e.aN.a){case 0:k=new A.aQ(0,a.b,0,a.d)
break
case 1:k=A.Bq(new A.a6(A.H(1/0,m,a.b),A.H(1/0,l,a.d)))
break
case 2:k=a
break
default:k=null}j=e.aq$
for(s=t.B,i=l,h=m,g=!1;j!=null;){r=j.e
r.toString
s.a(r)
if(!r.gzK()){f=b.$2(j,k)
h=Math.max(h,f.a)
i=Math.max(i,f.b)
g=!0}j=r.ap$}return g?new A.a6(h,i):new A.a6(A.H(1/0,m,a.b),A.H(1/0,l,a.d))},
bJ(){var s,r,q,p,o,n,m,l=this,k=t.k.a(A.z.prototype.ga1.call(l))
l.E=!1
l.k3=l.GR(k,A.ai3())
s=l.aq$
for(r=t.B,q=t.uu;s!=null;){p=s.e
p.toString
r.a(p)
if(!p.gzK()){o=l.P
o.toString
n=l.k3
n.toString
m=s.k3
m.toString
p.a=o.lP(q.a(n.ab(0,m)))}else{o=l.k3
o.toString
n=l.P
n.toString
l.E=A.aoh(s,p,o,n)||l.E}s=p.ap$}},
cX(a,b){return this.yF(a,b)},
u4(a,b){this.ol(a,b)},
aF(a,b){var s,r=this,q=r.aQ,p=q!==B.l&&r.E,o=r.bH
if(p){p=r.cx
p===$&&A.b()
s=r.k3
o.saZ(0,a.kO(p,b,new A.C(0,0,0+s.a,0+s.b),r.gAD(),q,o.a))}else{o.saZ(0,null)
r.ol(a,b)}},
m(){this.bH.saZ(0,null)
this.i8()},
j8(a){var s
switch(this.aQ.a){case 0:return null
case 1:case 2:case 3:if(this.E){s=this.k3
s=new A.C(0,0,0+s.a,0+s.b)}else s=null
return s}}}
A.Q2.prototype={
am(a){var s,r,q
this.eF(a)
s=this.aq$
for(r=t.B;s!=null;){s.am(a)
q=s.e
q.toString
s=r.a(q).ap$}},
ah(a){var s,r,q
this.e1(0)
s=this.aq$
for(r=t.B;s!=null;){s.ah(0)
q=s.e
q.toString
s=r.a(q).ap$}}}
A.Q3.prototype={}
A.LB.prototype={
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return b instanceof A.LB&&b.a.k(0,this.a)&&b.b===this.b},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return this.a.i(0)+" at "+A.hs(this.b)+"x"}}
A.wc.prototype={
syr(a){var s,r,q,p,o=this
if(o.k1.k(0,a))return
s=o.k1
o.k1=a
r=s.b
r=A.v3(r,r,1)
q=o.k1.b
if(!r.k(0,A.v3(q,q,1))){r=o.Hu()
q=o.ch
p=q.a
p.toString
J.atZ(p)
q.saZ(0,r)
o.ao()}o.a9()},
Hu(){var s,r=this.k1.b
r=A.v3(r,r,1)
this.k4=r
s=A.aoV(r)
s.am(this)
return s},
pp(){},
bJ(){var s,r=this.k1.a
this.id=r
s=this.C$
if(s!=null)s.iE(A.Bq(r))},
bY(a,b){var s=this.C$
if(s!=null)s.bY(A.amw(a),b)
a.B(0,new A.hM(this,t.Cq))
return!0},
a41(a){var s,r=A.a([],t.f1),q=new A.bf(new Float64Array(16))
q.dm()
s=new A.hz(r,A.a([q],t.hZ),A.a([],t.pw))
this.bY(s,a)
return s},
gdT(){return!0},
aF(a,b){var s=this.C$
if(s!=null)a.f6(s,b)},
dA(a,b){var s=this.k4
s.toString
b.cM(0,s)
this.P9(a,b)},
a15(){var s,r,q
try{q=$.ap()
s=q.a1O()
r=this.ch.a.a0s(s)
this.a_r()
q.a6e(r)
r.m()}finally{}},
a_r(){var s,r,q,p,o,n,m,l,k,j=null,i=this.ghQ(),h=i.gaI(),g=this.k2
g.gkT()
s=i.gaI()
g.gkT()
g=this.ch
r=t.g9
q=g.a.JC(0,new A.t(h.a,0),r)
switch(A.ln().a){case 0:p=g.a.JC(0,new A.t(s.a,i.d-1-0),r)
break
case 1:case 2:case 3:case 4:case 5:p=j
break
default:p=j}h=q==null
if(h&&p==null)return
if(!h&&p!=null){h=q.f
g=q.r
s=q.e
r=q.w
A.aoK(new A.ig(p.a,p.b,p.c,p.d,s,h,g,r))
return}o=A.ln()===B.ay
n=h?p:q
h=n.f
g=n.r
s=n.e
r=n.w
m=o?n.a:j
l=o?n.b:j
k=o?n.c:j
A.aoK(new A.ig(m,l,k,o?n.d:j,s,h,g,r))},
ghQ(){var s=this.id.a_(0,this.k1.b)
return new A.C(0,0,0+s.a,0+s.b)},
gjT(){var s,r=this.k4
r.toString
s=this.id
return A.h8(r,new A.C(0,0,0+s.a,0+s.b))}}
A.Q5.prototype={
am(a){var s
this.eF(a)
s=this.C$
if(s!=null)s.am(a)},
ah(a){var s
this.e1(0)
s=this.C$
if(s!=null)s.ah(0)}}
A.Bw.prototype={
F(){return"CacheExtentStyle."+this.b}}
A.pq.prototype={
i(a){return"RevealedOffset(offset: "+A.h(this.a)+", rect: "+this.b.i(0)+")"}}
A.pn.prototype={
eV(a){this.hi(a)
a.HX(B.Bv)},
ha(a){var s=this.gIl()
new A.aH(s,new A.a4T(),A.aT(s).h("aH<1>")).Y(0,a)},
sfR(a){if(a===this.E)return
this.E=a
this.a9()},
sa1R(a){if(a===this.P)return
this.P=a
this.a9()},
sbI(a,b){var s=this,r=s.ae
if(b===r)return
if(s.b!=null)r.H(0,s.gtN())
s.ae=b
if(s.b!=null)b.Z(0,s.gtN())
s.a9()},
sa0v(a){if(a===this.al)return
this.al=a
this.a9()},
sa0w(a){if(a===this.aQ)return
this.aQ=a
this.a9()},
am(a){this.Ql(a)
this.ae.Z(0,this.gtN())},
ah(a){this.ae.H(0,this.gtN())
this.Qm(0)},
gdT(){return!0},
KE(a,b,c,d,e,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.aCT(h.ae.k4,e),f=a0+a2
for(s=e.a,r=t.v,q=a0,p=0;c!=null;){o=a5<=0?0:a5
n=Math.max(b,-o)
m=b-n
c.cz(new A.kQ(h.E,e,g,o,p,f-q,Math.max(0,a4-q+a0),d,h.P,a1,n,Math.max(0,a3+m)),!0)
l=c.id
k=l.y
if(k!=null)return k
j=q+l.b
k=l.w||a5>0
i=c.e
if(k){i.toString
r.a(i).a=h.Is(c,j,e)}else{i.toString
r.a(i).a=h.Is(c,-a5+a0,e)}f=Math.max(j+l.c,f)
k=l.a
a5-=k
p+=k
q+=l.d
i=l.z
if(i!==0){a3-=i-m
b=Math.min(n+i,0)}switch(s){case 0:i=h.oL
i===$&&A.b()
h.oL=i+k
break
case 1:i=h.oK
i===$&&A.b()
h.oK=i-k
break}if(l.x)h.kz=!0
c=a.$1(c)}return 0},
j8(a){var s,r,q,p,o,n
switch(this.bH.a){case 0:return null
case 1:case 2:case 3:break}s=this.k3
r=0+s.a
q=0+s.b
s=t.p
if(s.a(A.z.prototype.ga1.call(a)).f===0||!isFinite(s.a(A.z.prototype.ga1.call(a)).y))return new A.C(0,0,r,q)
p=s.a(A.z.prototype.ga1.call(a)).y-s.a(A.z.prototype.ga1.call(a)).r+s.a(A.z.prototype.ga1.call(a)).f
switch(A.jP(this.E,s.a(A.z.prototype.ga1.call(a)).b)){case B.x:o=0+p
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
yK(a){var s,r=this,q=r.aN
if(q==null){q=r.k3
return new A.C(0,0,0+q.a,0+q.b)}switch(A.bd(r.E).a){case 1:s=r.k3
return new A.C(0,0-q,0+s.a,0+s.b+q)
case 0:s=r.k3
return new A.C(0-q,0,0+s.a+q,0+s.b)}},
aF(a,b){var s,r,q,p=this
if(p.aq$==null)return
s=p.kz&&p.bH!==B.l
r=p.cn
if(s){s=p.cx
s===$&&A.b()
q=p.k3
r.saZ(0,a.kO(s,b,new A.C(0,0,0+q.a,0+q.b),p.gXU(),p.bH,r.a))}else{r.saZ(0,null)
p.FM(a,b)}},
m(){this.cn.saZ(0,null)
this.i8()},
FM(a,b){var s,r,q,p,o,n,m,l
for(s=this.gIl(),r=s.length,q=t.v,p=b.a,o=b.b,n=0;n<s.length;s.length===r||(0,A.P)(s),++n){m=s[n]
if(m.id.w){l=m.e
l.toString
l=q.a(l).a
a.f6(m,new A.t(p+l.a,o+l.b))}}},
cX(a,b){var s,r,q,p,o,n,m,l,k={}
k.a=k.b=null
switch(A.bd(this.E).a){case 1:k.b=b.b
k.a=b.a
break
case 0:k.b=b.a
k.a=b.b
break}s=new A.pG(a.a,a.b,a.c)
for(r=this.ga0K(),q=r.length,p=t.v,o=0;o<r.length;r.length===q||(0,A.P)(r),++o){n=r[o]
if(!n.id.w)continue
m=new A.bf(new Float64Array(16))
m.dm()
l=n.e
l.toString
l=p.a(l).a
m.aw(0,l.a,l.b)
if(a.a06(new A.a4S(k,this,n,s),m))return!0}return!1},
kU(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=a instanceof A.ck
for(s=t.d,r=c,q=a,p=0;o=q.c,o!==d;q=o){o.toString
s.a(o)
if(q instanceof A.F)r=q
if(o instanceof A.ck){n=o.yp(q)
n.toString
p+=n}else{p=0
b=!1}}if(r!=null){s=r.c
s.toString
t.q0.a(s)
m=t.p.a(A.z.prototype.ga1.call(s)).b
switch(A.bd(d.E).a){case 0:l=r.k3.a
break
case 1:l=r.k3.b
break
default:l=c}if(a1==null)a1=a.ghQ()
k=A.h8(a.bB(0,r),a1)}else{if(b){t.q0.a(a)
s=t.p
m=s.a(A.z.prototype.ga1.call(a)).b
l=a.id.a
if(a1==null)switch(A.bd(d.E).a){case 0:a1=new A.C(0,0,0+l,0+s.a(A.z.prototype.ga1.call(a)).w)
break
case 1:a1=new A.C(0,0,0+s.a(A.z.prototype.ga1.call(a)).w,0+a.id.a)
break}}else{s=d.ae.at
s.toString
a1.toString
return new A.pq(s,a1)}k=a1}t.q0.a(q)
switch(A.jP(d.E,m)){case B.y:s=k.d
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
p=d.N1(q,p)
i=A.h8(a.bB(0,d),a1)
h=d.a51(q)
switch(t.p.a(A.z.prototype.ga1.call(q)).b.a){case 0:p-=h
break
case 1:switch(A.bd(d.E).a){case 1:p-=i.d-i.b
break
case 0:p-=i.c-i.a
break}break}s=d.E
switch(A.bd(s).a){case 0:g=d.k3.a-h
break
case 1:g=d.k3.b-h
break
default:g=c}f=p-(g-j)*a0
o=d.ae.at
o.toString
e=o-f
switch(s.a){case 2:i=i.aw(0,0,e)
break
case 1:i=i.aw(0,e,0)
break
case 0:i=i.aw(0,0,-e)
break
case 3:i=i.aw(0,-e,0)
break}return new A.pq(f,i)},
Is(a,b,c){switch(A.jP(this.E,c)){case B.y:return new A.t(0,this.k3.b-(b+a.id.c))
case B.au:return new A.t(b,0)
case B.x:return new A.t(0,b)
case B.ae:return new A.t(this.k3.a-(b+a.id.c),0)}},
eC(a,b,c,d){var s=this
if(!s.ae.r.glO())return s.qa(a,b,c,d)
s.qa(a,null,c,A.aoj(a,b,c,s.ae,d,s))},
n0(){return this.eC(B.aK,null,B.u,null)},
l4(a,b){return this.eC(B.aK,a,B.u,b)},
$iJj:1}
A.a4T.prototype={
$1(a){var s=a.id
return s.w||s.z>0},
$S:251}
A.a4S.prototype={
$1(a){var s=this,r=s.c,q=s.a,p=s.b.a17(r,q.b)
return r.K2(s.d,q.a,p)},
$S:111}
A.wd.prototype={
eB(a){if(!(a.e instanceof A.jj))a.e=new A.jj(null,null,B.j)},
sa0b(a){if(a===this.te)return
this.te=a
this.a9()},
saI(a){if(a==this.e8)return
this.e8=a
this.a9()},
gjW(){return!0},
cf(a){return new A.a6(A.H(1/0,a.a,a.b),A.H(1/0,a.c,a.d))},
bJ(){var s,r,q,p,o,n,m,l,k,j=this
switch(A.bd(j.E).a){case 1:j.ae.o3(j.k3.b)
break
case 0:j.ae.o3(j.k3.a)
break}if(j.e8==null){j.oL=j.oK=0
j.kz=!1
j.ae.o0(0,0)
return}switch(A.bd(j.E).a){case 1:s=j.k3
r=s.b
q=s.a
break
case 0:s=j.k3
r=s.a
q=s.b
break
default:r=null
q=null}s=0
do{p=j.ae.at
p.toString
o=j.S3(r,q,p+0)
if(o!==0){p=j.ae
n=p.at
n.toString
p.at=n+o
p.ch=!0}else{p=j.ae
n=j.oK
n===$&&A.b()
m=j.te
n=Math.min(0,n+r*m)
l=j.oL
l===$&&A.b()
if(p.o0(n,Math.max(0,l-r*(1-m))))break}k=s+1
if(k<10){s=k
continue}else break}while(!0)},
S3(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.oL=e.oK=0
e.kz=!1
s=a*e.te-c
r=A.H(s,0,a)
q=a-s
p=A.H(q,0,a)
switch(e.aQ.a){case 0:e.aN=e.al
break
case 1:e.aN=a*e.al
break}o=e.aN
o.toString
n=a+2*o
m=s+o
l=A.H(m,0,n)
k=A.H(n-m,0,n)
j=e.e8.e
j.toString
i=A.n(e).h("av.1").a(j).c5$
j=i==null
if(!j){h=Math.max(a,s)
g=e.KE(e.ga0H(),A.H(q,-o,0),i,b,B.nH,p,a,0,l,r,h-a)
if(g!==0)return-g}q=e.e8
o=-s
h=Math.max(0,o)
o=j?Math.min(0,o):0
j=s>=a?s:r
f=e.aN
f.toString
return e.KE(e.ga0F(),A.H(s,-f,0),q,b,B.nG,j,a,o,k,p,h)},
N1(a,b){var s,r,q,p,o=this
switch(t.p.a(A.z.prototype.ga1.call(a)).b.a){case 0:s=o.e8
for(r=A.n(o).h("av.1"),q=0;s!==a;){q+=s.id.a
p=s.e
p.toString
s=r.a(p).ap$}return q+b
case 1:r=o.e8.e
r.toString
p=A.n(o).h("av.1")
s=p.a(r).c5$
for(q=0;s!==a;){q-=s.id.a
r=s.e
r.toString
s=p.a(r).c5$}return q-b}},
a51(a){var s,r,q,p=this
switch(t.p.a(A.z.prototype.ga1.call(a)).b.a){case 0:s=p.e8
for(r=A.n(p).h("av.1");s!==a;){s.id.toString
q=s.e
q.toString
s=r.a(q).ap$}return 0
case 1:r=p.e8.e
r.toString
q=A.n(p).h("av.1")
s=q.a(r).c5$
for(;s!==a;){s.id.toString
r=s.e
r.toString
s=q.a(r).c5$}return 0}},
dA(a,b){var s=a.e
s.toString
s=t.v.a(s).a
b.aw(0,s.a,s.b)},
a17(a,b){var s,r=a.e
r.toString
t.v.a(r)
s=t.p
switch(A.jP(s.a(A.z.prototype.ga1.call(a)).a,s.a(A.z.prototype.ga1.call(a)).b)){case B.x:return b-r.a.b
case B.au:return b-r.a.a
case B.y:return a.id.c-(b-r.a.b)
case B.ae:return a.id.c-(b-r.a.a)}},
gIl(){var s,r,q=this,p=A.a([],t.jT),o=q.aq$
if(o==null)return p
for(s=A.n(q).h("av.1");o!=q.e8;){o.toString
p.push(o)
r=o.e
r.toString
o=s.a(r).ap$}o=q.d9$
for(;!0;){o.toString
p.push(o)
if(o===q.e8)return p
r=o.e
r.toString
o=s.a(r).c5$}},
ga0K(){var s,r,q,p=this,o=A.a([],t.jT)
if(p.aq$==null)return o
s=p.e8
for(r=A.n(p).h("av.1");s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).ap$}q=p.e8.e
q.toString
s=r.a(q).c5$
for(;s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).c5$}return o}}
A.iw.prototype={
am(a){var s,r,q
this.eF(a)
s=this.aq$
for(r=A.n(this).h("iw.0");s!=null;){s.am(a)
q=s.e
q.toString
s=r.a(q).ap$}},
ah(a){var s,r,q
this.e1(0)
s=this.aq$
for(r=A.n(this).h("iw.0");s!=null;){s.ah(0)
q=s.e
q.toString
s=r.a(q).ap$}}}
A.pw.prototype={
F(){return"ScrollDirection."+this.b}}
A.fB.prototype={
pg(a,b,c,d){var s=d.a===B.u.a
if(s){this.dU(b)
return A.bF(null,t.H)}else return this.hx(b,c,d)},
i(a){var s=this,r=A.a([],t.s)
s.PK(r)
r.push(A.A(s.w).i(0))
r.push(s.r.i(0))
r.push(A.h(s.fr))
r.push(s.k4.i(0))
return"<optimized out>#"+A.bM(s)+"("+B.c.b3(r,", ")+")"},
ck(a){var s=this.at
if(s!=null)a.push("offset: "+B.d.M(s,1))}}
A.qw.prototype={}
A.kL.prototype={
F(){return"SchedulerPhase."+this.b}}
A.a3d.prototype={}
A.dE.prototype={
a04(a){var s=this.at$
s.push(a)
if(s.length===1){s=$.aN()
s.ay=this.gTG()
s.ch=$.a8}},
LA(a){var s=this.at$
B.c.u(s,a)
if(s.length===0){s=$.aN()
s.ay=null
s.ch=$.a8}},
TH(a){var s,r,q,p,o,n,m,l,k=this.at$,j=A.aA(k,!0,t.wX)
for(p=j.length,o=0;o<p;++o){s=j[o]
try{if(B.c.A(k,s))s.$1(a)}catch(n){r=A.ae(n)
q=A.au(n)
m=A.bo("while executing callbacks for FrameTiming")
l=$.fJ()
if(l!=null)l.$1(new A.bJ(r,q,"Flutter framework",m,null,!1))}}},
tp(a){this.ax$=a
switch(a.a){case 0:case 1:this.GB(!0)
break
case 2:case 3:this.GB(!1)
break}},
Ev(){if(this.CW$)return
this.CW$=!0
A.cb(B.u,this.gYX())},
YY(){this.CW$=!1
if(this.a37())this.Ev()},
a37(){var s,r,q,p,o,n,m=this,l="No element",k=m.ch$,j=k.c===0
if(j||m.b>0)return!1
if(j)A.K(A.a5(l))
s=k.qk(0)
j=s.b
if(m.ay$.$2$priority$scheduler(j,m)){try{if(k.c===0)A.K(A.a5(l));++k.d
k.qk(0)
p=k.c-1
o=k.qk(p)
k.b[p]=null
k.c=p
if(p>0)k.S7(o,0)
s.a7R()}catch(n){r=A.ae(n)
q=A.au(n)
j=A.bo("during a task callback")
A.e6(new A.bJ(r,q,"scheduler library",j,null,!1))}return k.c!==0}return!1},
q0(a,b){var s,r=this
r.i1()
s=++r.cx$
r.cy$.l(0,s,new A.qw(a))
return r.cx$},
q_(a){return this.q0(a,!1)},
gJl(){var s=this
if(s.fr$==null){if(s.fy$===B.cH)s.i1()
s.fr$=new A.aI(new A.a7($.a8,t.U),t._)
s.dy$.push(new A.a5J(s))}return s.fr$.a},
gJN(){return this.go$},
GB(a){if(this.go$===a)return
this.go$=a
if(a)this.i1()},
Jm(){var s=$.aN()
if(s.w==null){s.w=this.gUL()
s.x=$.a8}if(s.y==null){s.y=this.gV8()
s.z=$.a8}},
z5(){switch(this.fy$.a){case 0:case 4:this.i1()
return
case 1:case 2:case 3:return}},
i1(){var s,r=this
if(!r.fx$)s=!(A.dE.prototype.gJN.call(r)&&r.fZ$)
else s=!0
if(s)return
r.Jm()
$.aN().i1()
r.fx$=!0},
MX(){if(this.fx$)return
this.Jm()
$.aN().i1()
this.fx$=!0},
uK(){var s,r,q=this
if(q.id$||q.fy$!==B.cH)return
q.id$=!0
s=new A.Lg(null,0,A.a([],t.vS))
s.q5(0,"Warm-up frame")
r=q.fx$
A.cb(B.u,new A.a5L(q))
A.cb(B.u,new A.a5M(q,r))
q.a4V(new A.a5N(q,s))},
a6r(){var s=this
s.k2$=s.Dp(s.k3$)
s.k1$=null},
Dp(a){var s=this.k1$,r=s==null?B.u:new A.aP(a.a-s.a)
return A.c7(B.d.bc(r.a/$.aqz)+this.k2$.a,0,0)},
UM(a){if(this.id$){this.p2$=!0
return}this.JQ(a)},
V9(){var s=this
if(s.p2$){s.p2$=!1
s.dy$.push(new A.a5I(s))
return}s.JS()},
JQ(a){var s,r,q=this,p=q.p3$,o=p==null
if(!o)p.q5(0,"Frame")
if(q.k1$==null)q.k1$=a
r=a==null
q.k4$=q.Dp(r?q.k3$:a)
if(!r)q.k3$=a
q.fx$=!1
try{if(!o)p.q5(0,"Animate")
q.fy$=B.U5
s=q.cy$
q.cy$=A.y(t.S,t.b1)
J.jV(s,new A.a5K(q))
q.db$.a0(0)}finally{q.fy$=B.U6}},
a6p(a){var s=this,r=s.p4$,q=r==null
if(!q&&r!==a)return null
if(r===a)++s.R8$
else if(q){s.p4$=a
s.R8$=1}return new A.a3d(s.gTn())},
To(){if(--this.R8$===0){this.p4$=null
$.aN()}},
JS(){var s,r,q,p,o,n,m,l=this,k=l.p3$,j=k==null
if(!j)k.tj(0)
try{l.fy$=B.Bd
for(p=l.dx$,o=p.length,n=0;n<p.length;p.length===o||(0,A.P)(p),++n){s=p[n]
m=l.k4$
m.toString
l.Fh(s,m)}l.fy$=B.U7
p=l.dy$
r=A.aA(p,!0,t.qP)
B.c.a0(p)
for(p=r,o=p.length,n=0;n<p.length;p.length===o||(0,A.P)(p),++n){q=p[n]
m=l.k4$
m.toString
l.Fh(q,m)}}finally{l.fy$=B.cH
if(!j)k.tj(0)
l.k4$=null}},
Fi(a,b,c){var s,r,q,p
try{a.$1(b)}catch(q){s=A.ae(q)
r=A.au(q)
p=A.bo("during a scheduler callback")
A.e6(new A.bJ(s,r,"scheduler library",p,null,!1))}},
Fh(a,b){return this.Fi(a,b,null)}}
A.a5J.prototype={
$1(a){var s=this.a
s.fr$.eR(0)
s.fr$=null},
$S:2}
A.a5L.prototype={
$0(){this.a.JQ(null)},
$S:0}
A.a5M.prototype={
$0(){var s=this.a
s.JS()
s.a6r()
s.id$=!1
if(this.b)s.i1()},
$S:0}
A.a5N.prototype={
$0(){var s=0,r=A.a2(t.H),q=this
var $async$$0=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:s=2
return A.a4(q.a.gJl(),$async$$0)
case 2:q.b.tj(0)
return A.a0(null,r)}})
return A.a1($async$$0,r)},
$S:72}
A.a5I.prototype={
$1(a){var s=this.a
s.fx$=!1
s.i1()},
$S:2}
A.a5K.prototype={
$2(a,b){var s,r,q=this.a
if(!q.db$.A(0,a)){s=b.a
r=q.k4$
r.toString
q.Fi(s,r,b.b)}},
$S:253}
A.q2.prototype={
sA7(a,b){var s=this
if(b===s.b)return
s.b=b
if(b)s.Bf()
else if(s.a!=null&&s.e==null)s.e=$.bP.q0(s.gxE(),!1)},
ga4A(){if(this.a==null)return!1
if(this.b)return!1
var s=$.bP
s.toString
if(A.dE.prototype.gJN.call(s)&&s.fZ$)return!0
if($.bP.fy$!==B.cH)return!0
return!1},
n4(a){var s,r,q=this
q.a=new A.ni(new A.aI(new A.a7($.a8,t.U),t._))
if(!q.b)s=q.e==null
else s=!1
if(s)q.e=$.bP.q0(q.gxE(),!1)
s=$.bP
r=s.fy$.a
if(r>0&&r<4){s=s.k4$
s.toString
q.c=s}s=q.a
s.toString
return s},
n5(a,b){var s=this,r=s.a
if(r==null)return
s.c=s.a=null
s.Bf()
if(b)r.DH(s)
else r.H7()},
hf(a){return this.n5(a,!1)},
ZV(a){var s,r=this
r.e=null
s=r.c
if(s==null)s=r.c=a
r.d.$1(new A.aP(a.a-s.a))
if(!r.b&&r.a!=null&&r.e==null)r.e=$.bP.q0(r.gxE(),!0)},
Bf(){var s,r=this.e
if(r!=null){s=$.bP
s.cy$.u(0,r)
s.db$.B(0,r)
this.e=null}},
m(){var s=this,r=s.a
if(r!=null){s.a=null
s.Bf()
r.DH(s)}},
a6O(a,b){var s=""+"Ticker()"
return s.charCodeAt(0)==0?s:s},
i(a){return this.a6O(a,!1)}}
A.ni.prototype={
H7(){this.c=!0
this.a.eR(0)
var s=this.b
if(s!=null)s.eR(0)},
DH(a){var s
this.c=!1
s=this.b
if(s!=null)s.ih(new A.xr(a))},
Me(a){var s,r,q=this,p=new A.a9Z(a)
if(q.b==null){s=q.b=new A.aI(new A.a7($.a8,t.U),t._)
r=q.c
if(r!=null)if(r)s.eR(0)
else s.ih(B.ZD)}q.b.a.dZ(p,p,t.H)},
lR(a,b){return this.a.a.lR(a,b)},
fS(a){return this.lR(a,null)},
dZ(a,b,c){return this.a.a.dZ(a,b,c)},
aB(a,b){return this.dZ(a,null,b)},
f8(a){return this.a.a.f8(a)},
i(a){var s=A.bM(this),r=this.c
if(r==null)r="active"
else r=r?"complete":"canceled"
return"<optimized out>#"+s+"("+r+")"},
$iad:1}
A.a9Z.prototype={
$1(a){this.a.$0()},
$S:22}
A.xr.prototype={
i(a){var s=this.a
if(s!=null)return"This ticker was canceled: "+s.i(0)
return'The ticker was canceled before the "orCancel" property was first used.'},
$ibr:1}
A.a6e.prototype={}
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
r.push(n.IB(new A.eY(m.a+k,m.b+k)))}return new A.cr(l+s,r)},
k(a,b){if(b==null)return!1
return J.X(b)===A.A(this)&&b instanceof A.cr&&b.a===this.a&&A.cS(b.b,this.b)},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"AttributedString('"+this.a+"', attributes: "+A.h(this.b)+")"}}
A.Kg.prototype={
c0(){return"SemanticsData"},
k(a,b){var s=this
if(b==null)return!1
return b instanceof A.Kg&&b.a===s.a&&b.b===s.b&&b.c.k(0,s.c)&&b.d.k(0,s.d)&&b.e.k(0,s.e)&&b.f.k(0,s.f)&&b.r.k(0,s.r)&&b.w===s.w&&b.x==s.x&&b.cx.k(0,s.cx)&&A.alv(b.cy,s.cy)&&b.Q==s.Q&&b.as==s.as&&b.at==s.at&&b.ax==s.ax&&J.f(b.db,s.db)&&b.dx===s.dx&&b.dy===s.dy&&A.az9(b.fr,s.fr)},
gt(a){var s=this,r=A.df(s.fr)
return A.S(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.cx,s.cy,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,A.S(s.CW,s.db,s.dx,s.dy,r,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a))}}
A.Qs.prototype={}
A.Ki.prototype={
c0(){return"SemanticsProperties"}}
A.bX.prototype={
sbu(a,b){var s
if(!A.axA(this.r,b)){s=A.ajJ(b)
this.r=s?null:b
this.ie()}},
saR(a,b){if(!this.w.k(0,b)){this.w=b
this.ie()}},
sKu(a){if(this.as===a)return
this.as=a
this.ie()},
YE(a){var s,r,q,p,o,n,m,l=this,k=l.ax
if(k!=null)for(s=k.length,r=0;r<s;++r)k[r].ch=!0
for(k=a.length,r=0;r<k;++r)a[r].ch=!1
k=l.ax
if(k!=null)for(s=k.length,q=t.aa,p=!1,r=0;r<k.length;k.length===s||(0,A.P)(k),++r){o=k[r]
if(o.ch){n=J.cd(o)
if(q.a(A.L.prototype.gaJ.call(n,o))===l){o.c=null
if(l.b!=null)o.ah(0)}p=!0}}else p=!1
for(k=a.length,s=t.aa,r=0;r<a.length;a.length===k||(0,A.P)(a),++r){o=a[r]
q=J.cd(o)
if(s.a(A.L.prototype.gaJ.call(q,o))!==l){if(s.a(A.L.prototype.gaJ.call(q,o))!=null){q=s.a(A.L.prototype.gaJ.call(q,o))
if(q!=null){o.c=null
if(q.b!=null)o.ah(0)}}o.c=l
q=l.b
if(q!=null)o.am(q)
q=o.a
n=l.a
if(q<=n){o.a=n+1
o.jG()}p=!0}}if(!p&&l.ax!=null)for(k=l.ax,s=k.length,m=0;m<s;++m)if(k[m].e!==a[m].e){p=!0
break}l.ax=a
if(p)l.ie()},
ga3M(){var s=this.ax
s=s==null?null:s.length!==0
return s===!0},
xV(a){var s,r,q,p=this.ax
if(p!=null)for(s=p.length,r=0;r<p.length;p.length===s||(0,A.P)(p),++r){q=p[r]
if(!a.$1(q)||!q.xV(a))return!1}return!0},
jG(){var s=this.ax
if(s!=null)B.c.Y(s,this.gLt())},
am(a){var s,r,q,p=this
p.v0(a)
for(s=a.c;s.R(0,p.e);)p.e=$.a6v=($.a6v+1)%65535
s.l(0,p.e,p)
a.d.u(0,p)
if(p.CW){p.CW=!1
p.ie()}s=p.ax
if(s!=null)for(r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].am(a)},
ah(a){var s,r,q,p,o,n=this,m=t.nU
m.a(A.L.prototype.gbx.call(n)).c.u(0,n.e)
m.a(A.L.prototype.gbx.call(n)).d.B(0,n)
n.e1(0)
m=n.ax
if(m!=null)for(s=m.length,r=t.aa,q=0;q<m.length;m.length===s||(0,A.P)(m),++q){p=m[q]
o=J.cd(p)
if(r.a(A.L.prototype.gaJ.call(o,p))===n)o.ah(p)}n.ie()},
ie(){var s=this
if(s.CW)return
s.CW=!0
if(s.b!=null)t.nU.a(A.L.prototype.gbx.call(s)).b.B(0,s)},
jM(a,b,c){var s,r=this
if(c==null)c=$.aiD()
if(r.fr.k(0,c.p4))if(r.id.k(0,c.ry))if(r.k2===c.x2)if(r.k3===c.xr)if(r.fx.k(0,c.R8))if(r.fy.k(0,c.RG))if(r.go.k(0,c.rx))if(r.k1===c.to)if(r.dy===c.aO)if(r.ok==c.y1)if(r.p1==c.id)if(r.RG==c.b5)if(r.rx==c.aE)if(r.ry==c.b1)if(r.db===c.f)if(r.Q==c.k1)s=r.at!==c.p2
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
if(s)r.ie()
r.fr=c.p4
r.fx=c.R8
r.fy=c.RG
r.go=c.rx
r.id=c.ry
r.k1=c.to
r.k4=c.x1
r.k2=c.x2
r.k3=c.xr
r.dy=c.aO
r.ok=c.y1
r.p1=c.id
r.cx=A.oW(c.e,t.nS,t.BT)
r.cy=A.oW(c.p3,t.zN,t.M)
r.db=c.f
r.p2=c.y2
r.RG=c.b5
r.rx=c.aE
r.ry=c.b1
r.at=c.p2
r.p4=c.k2
r.R8=c.k3
r.Q=c.k1
r.to=c.k4
r.x1=c.ok
r.x2=c.p1
r.YE(b==null?B.i4:b)},
a72(a,b){return this.jM(a,null,b)},
MM(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7={}
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
a7.y=s==null?null:A.ks(s,t.xJ)
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
for(s=a6.cy,s=A.j1(s,s.r);s.q();)q.B(0,A.amL(s.d))
a6.k4!=null
if(a6.at)a6.xV(new A.a6w(a7,a6,q))
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
B.c.i5(a5)
return new A.Kg(s,p,o,n,m,l,k,j,i,d,c,b,a,a0,a1,a2,a3,a4,h,e,g,r,f,a5)},
RU(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.MM()
if(!a.ga3M()||a.at){s=$.ash()
r=s}else{q=a.ax.length
p=a.SB()
s=new Int32Array(q)
for(o=0;o<q;++o)s[o]=p[o].e
r=new Int32Array(q)
for(o=q-1,n=a.ax;o>=0;--o)r[o]=n[q-o-1].e}n=a0.fr
m=n.length
if(m!==0){l=new Int32Array(m)
for(o=0;o<n.length;++o){m=n[o]
l[o]=m
a2.B(0,m)}}else l=null
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
if(c==null)c=$.asj()
b=l==null?$.asi():l
a1.a.push(new A.Kh(n,a0.a,a0.b,-1,-1,-1,0,g,f,e,d,a0.cx,m.a,m.b,h.a,h.b,k.a,k.b,j.a,j.b,i.a,i.b,a0.w,a0.x,A.alx(c),s,r,b,a0.dy))
a.CW=!1},
SB(){var s,r,q,p,o,n,m,l,k,j=this,i=j.ok,h=t.aa,g=h.a(A.L.prototype.gaJ.call(j,j))
while(!0){s=i==null
if(!(s&&g!=null))break
i=g.ok
g=h.a(A.L.prototype.gaJ.call(g,g))}r=j.ax
if(!s){r.toString
r=A.aBt(r,i)}h=t.Dr
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
if(h-0<=32)A.KC(p,0,h,J.al3())
else A.KB(p,0,h,J.al3())}B.c.J(q,p)
B.c.a0(p)}p.push(new A.jC(m,l,n))}if(o!=null)B.c.i5(p)
B.c.J(q,p)
h=t.wg
return A.aA(new A.aC(q,new A.a6u(),h),!0,h.h("bm.E"))},
N7(a){if(this.b==null)return
B.mf.ez(0,a.LY(this.e))},
c0(){return"SemanticsNode#"+this.e},
a6K(a,b,c){return new A.Qs(a,this,b,!0,!0,null,c)},
LW(a){return this.a6K(B.Fw,null,a)}}
A.a6w.prototype={
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
if(s!=null){r=q.y;(r==null?q.y=A.b3(t.xJ):r).J(0,s)}for(s=this.b.cy,s=A.j1(s,s.r),r=this.c;s.q();)r.B(0,A.amL(s.d))
a.k4!=null
s=q.c
r=q.x
q.c=A.ags(a.fr,a.ok,s,r)
r=q.r
s=q.x
q.r=A.ags(a.id,a.ok,r,s)
q.cy=Math.max(q.cy,a.k3+a.k2)
return!0},
$S:63}
A.a6u.prototype={
$1(a){return a.a},
$S:255}
A.js.prototype={
aC(a,b){return B.d.aC(this.b,b.b)},
$ibe:1}
A.hq.prototype={
aC(a,b){return B.d.aC(this.a,b.a)},
Ny(){var s,r,q,p,o,n,m,l,k,j=A.a([],t.iV)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
o=p.w
j.push(new A.js(!0,A.nN(p,new A.t(o.a- -0.1,o.b- -0.1)).a,p))
j.push(new A.js(!1,A.nN(p,new A.t(o.c+-0.1,o.d+-0.1)).a,p))}B.c.i5(j)
n=A.a([],t.dK)
for(s=j.length,r=this.b,o=t.T,m=null,l=0,q=0;q<j.length;j.length===s||(0,A.P)(j),++q){k=j[q]
if(k.a){++l
if(m==null)m=new A.hq(k.b,r,A.a([],o))
m.c.push(k.c)}else --l
if(l===0){m.toString
n.push(m)
m=null}}B.c.i5(n)
if(r===B.W){s=t.FF
n=A.aA(new A.cy(n,s),!0,s.h("bm.E"))}s=A.aj(n).h("fV<1,bX>")
return A.aA(new A.fV(n,new A.afd(),s),!0,s.h("o.E"))},
Nx(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this.c,a4=a3.length
if(a4<=1)return a3
s=t.S
r=A.y(s,t.ju)
q=A.y(s,s)
for(p=this.b,o=p===B.W,p=p===B.t,n=a4,m=0;m<n;g===a4||(0,A.P)(a3),++m,n=g){l=a3[m]
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
B.c.dr(a2,new A.af9())
new A.aC(a2,new A.afa(),A.aj(a2).h("aC<1,k>")).Y(0,new A.afc(A.b3(s),q,a1))
a3=t.sC
a3=A.aA(new A.aC(a1,new A.afb(r),a3),!0,a3.h("bm.E"))
a4=A.aj(a3).h("cy<1>")
return A.aA(new A.cy(a3,a4),!0,a4.h("bm.E"))}}
A.afd.prototype={
$1(a){return a.Nx()},
$S:114}
A.af9.prototype={
$2(a,b){var s,r,q=a.w,p=A.nN(a,new A.t(q.a,q.b))
q=b.w
s=A.nN(b,new A.t(q.a,q.b))
r=B.d.aC(p.b,s.b)
if(r!==0)return-r
return-B.d.aC(p.a,s.a)},
$S:64}
A.afc.prototype={
$1(a){var s=this,r=s.a
if(r.A(0,a))return
r.B(0,a)
r=s.b
if(r.R(0,a)){r=r.j(0,a)
r.toString
s.$1(r)}s.c.push(a)},
$S:58}
A.afa.prototype={
$1(a){return a.e},
$S:258}
A.afb.prototype={
$1(a){var s=this.a.j(0,a)
s.toString
return s},
$S:259}
A.ago.prototype={
$1(a){return a.Ny()},
$S:114}
A.jC.prototype={
aC(a,b){var s,r=this.b
if(r==null||b.b==null)return this.c-b.c
r.toString
s=b.b
s.toString
return r.aC(0,s)},
$ibe:1}
A.wI.prototype={
N8(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.b
if(e.a===0)return
s=A.b3(t.S)
r=A.a([],t.T)
for(q=t.aa,p=A.n(e).h("aH<1>"),o=p.h("o.E"),n=f.d;e.a!==0;){m=A.aA(new A.aH(e,new A.a6z(f),p),!0,o)
e.a0(0)
n.a0(0)
l=new A.a6A()
if(!!m.immutable$list)A.K(A.O("sort"))
k=m.length-1
if(k-0<=32)A.KC(m,0,k,l)
else A.KB(m,0,k,l)
B.c.J(r,m)
for(l=m.length,j=0;j<m.length;m.length===l||(0,A.P)(m),++j){i=m[j]
if(i.at||i.as){k=J.cd(i)
if(q.a(A.L.prototype.gaJ.call(k,i))!=null){h=q.a(A.L.prototype.gaJ.call(k,i))
h=h.at||h.as}else h=!1
if(h){q.a(A.L.prototype.gaJ.call(k,i)).ie()
i.CW=!1}}}}B.c.dr(r,new A.a6B())
$.a6f.toString
g=new A.a6D(A.a([],t.fr))
for(q=r.length,j=0;j<r.length;r.length===q||(0,A.P)(r),++j){i=r[j]
if(i.CW&&i.b!=null)i.RU(g,s)}e.a0(0)
for(e=A.jy(s,s.r),q=A.n(e).c;e.q();){p=e.d
$.amI.j(0,p==null?q.a(p):p).toString}f.a.$1(new A.Kk(g.a))
f.av()},
Uv(a,b){var s,r={},q=r.a=this.c.j(0,a)
if(q!=null)s=(q.at||q.as)&&!q.cx.R(0,b)
else s=!1
if(s)q.xV(new A.a6y(r,b))
s=r.a
if(s==null||!s.cx.R(0,b))return null
return r.a.cx.j(0,b)},
a5C(a,b,c){var s=this.Uv(a,b)
if(s!=null){s.$1(c)
return}if(b===B.Ut&&this.c.j(0,a).f!=null)this.c.j(0,a).f.$0()},
i(a){return"<optimized out>#"+A.bM(this)}}
A.a6z.prototype={
$1(a){return!this.a.d.A(0,a)},
$S:63}
A.a6A.prototype={
$2(a,b){return a.a-b.a},
$S:64}
A.a6B.prototype={
$2(a,b){return a.a-b.a},
$S:64}
A.a6y.prototype={
$1(a){if(a.cx.R(0,this.b)){this.a.a=a
return!1}return!0},
$S:63}
A.a6g.prototype={
jX(a,b){var s=this
s.e.l(0,a,b)
s.f=s.f|a.a
s.d=!0},
ek(a,b){this.jX(a,new A.a6h(b))},
sjA(a){a.toString
this.ek(B.dP,a)},
skM(a){a.toString
this.ek(B.Bi,a)},
stX(a){this.ek(B.dS,a)},
stV(a){this.ek(B.Uu,a)},
stY(a){this.ek(B.dT,a)},
stZ(a){this.ek(B.dQ,a)},
stW(a){this.ek(B.dR,a)},
sAo(a){this.ek(B.Bj,a)},
sAh(a){this.ek(B.Bh,a)},
sAe(a,b){this.ek(B.Uw,b)},
sAf(a,b){this.ek(B.UA,b)},
sAw(a,b){this.ek(B.Uq,b)},
sAu(a){this.jX(B.Ux,new A.a6k(a))},
sAs(a){this.jX(B.Uo,new A.a6i(a))},
sAv(a){this.jX(B.Uy,new A.a6l(a))},
sAt(a){this.jX(B.Up,new A.a6j(a))},
sAz(a){this.jX(B.Ur,new A.a6m(a))},
sAA(a){this.jX(B.Us,new A.a6n(a))},
sAi(a){this.ek(B.Uv,a)},
sAj(a){this.ek(B.Uz,a)},
sN_(a){return},
sN0(a){if(a==this.k3)return
this.k3=a
this.d=!0},
sA_(a){return},
syC(a){return},
sio(a,b){if(b===this.x2)return
this.x2=b
this.d=!0},
HX(a){var s=this.ba;(s==null?this.ba=A.b3(t.xJ):s).B(0,a)},
b7(a,b){var s=this,r=s.aO,q=a.a
if(b)s.aO=r|q
else s.aO=r&~q
s.d=!0},
Kr(a){var s,r=this
if(a==null||!a.d||!r.d)return!0
if((r.f&a.f)!==0)return!1
if((r.aO&a.aO)!==0)return!1
if(r.R8.a.length!==0)s=a.R8.a.length!==0
else s=!1
if(s)return!1
return!0},
kh(a){var s,r,q=this
if(!a.d)return
q.e.J(0,a.e)
q.p3.J(0,a.p3)
q.f=q.f|a.f
q.aO=q.aO|a.aO
q.y2=a.y2
if(q.b5==null)q.b5=a.b5
if(q.aE==null)q.aE=a.aE
if(q.b1==null)q.b1=a.b1
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
q.p4=A.ags(a.p4,a.y1,r,s)
s=q.R8
if(s.a==="")q.R8=a.R8
s=q.RG
if(s.a==="")q.RG=a.RG
s=q.rx
if(s.a==="")q.rx=a.rx
s=q.ry
r=q.y1
q.ry=A.ags(a.ry,a.y1,s,r)
if(q.to==="")q.to=a.to
q.xr=Math.max(q.xr,a.xr+a.x2)
q.d=q.d||a.d},
a1m(){var s=this,r=A.pC()
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
r.aO=s.aO
r.ba=s.ba
r.y2=s.y2
r.b5=s.b5
r.aE=s.aE
r.b1=s.b1
r.f=s.f
r.k1=s.k1
r.k3=s.k3
r.k2=s.k2
r.k4=s.k4
r.ok=s.ok
r.p1=s.p1
r.e.J(0,s.e)
r.p3.J(0,s.p3)
return r}}
A.a6h.prototype={
$1(a){this.a.$0()},
$S:5}
A.a6k.prototype={
$1(a){a.toString
this.a.$1(A.nK(a))},
$S:5}
A.a6i.prototype={
$1(a){a.toString
this.a.$1(A.nK(a))},
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
$1(a){var s,r,q
a.toString
s=J.aiJ(t.G.a(a),t.N,t.S)
r=s.j(0,"base")
r.toString
q=s.j(0,"extent")
q.toString
this.a.$1(A.a9U(B.C,r,q,!1))},
$S:5}
A.a6n.prototype={
$1(a){a.toString
this.a.$1(A.bD(a))},
$S:5}
A.DI.prototype={
F(){return"DebugSemanticsDumpOrder."+this.b}}
A.pD.prototype={
aC(a,b){var s=this.a2l(b)
return s},
$ibe:1}
A.vz.prototype={
a2l(a){var s=a.b===this.b
if(s)return 0
return B.f.aC(this.b,a.b)}}
A.Qr.prototype={}
A.Qt.prototype={}
A.Qu.prototype={}
A.a6p.prototype={
LY(a){var s=A.aY(["type",this.a,"data",this.pR()],t.N,t.z)
if(a!=null)s.l(0,"nodeId",a)
return s},
a6N(){return this.LY(null)},
i(a){var s,r,q,p=A.a([],t.s),o=this.pR(),n=J.amf(o.gbs(o))
B.c.i5(n)
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.P)(n),++r){q=n[r]
p.push(A.h(q)+": "+A.h(o.j(0,q)))}return"SemanticsEvent("+B.c.b3(p,", ")+")"}}
A.aa0.prototype={
pR(){return A.aY(["message",this.b],t.N,t.z)}}
A.a1u.prototype={
pR(){return B.iv}}
A.a9n.prototype={
pR(){return B.iv}}
A.B6.prototype={
kJ(a,b){return this.a4T(a,!0)},
a4T(a,b){var s=0,r=A.a2(t.N),q,p=this,o
var $async$kJ=A.Y(function(c,d){if(c===1)return A.a_(d,r)
while(true)switch(s){case 0:s=3
return A.a4(p.cZ(0,a),$async$kJ)
case 3:o=d
if(o.byteLength<51200){q=B.Y.eq(0,A.cK(o.buffer,0,null))
s=1
break}q=A.Ta(A.aCV(),o,'UTF8 decode for "'+a+'"',t.B6,t.N)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$kJ,r)},
i(a){return"<optimized out>#"+A.bM(this)+"()"}}
A.US.prototype={
kJ(a,b){return this.NG(a,!0)},
a4U(a,b,c){var s,r={},q=this.b
if(q.R(0,a)){r=q.j(0,a)
r.toString
return c.h("ad<0>").a(r)}r.a=r.b=null
this.kJ(a,!1).aB(b,c).aB(new A.UT(r,this,a,c),t.H)
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
A.a3m.prototype={
cZ(a,b){var s,r=B.cd.ep(A.apy(A.A4(B.i5,b,B.Y,!1)).e),q=$.he.aN$
q===$&&A.b()
s=q.uN(0,"flutter/assets",A.kw(r.buffer,0,null)).aB(new A.a3n(b),t.B6)
return s},
tL(a){return this.a4R(a)},
a4R(a){var s=0,r=A.a2(t.gG),q,p=this,o
var $async$tL=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:s=3
return A.a4(p.cZ(0,a),$async$tL)
case 3:o=c
q=A.a0B(A.cK(o.buffer,0,null))
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$tL,r)}}
A.a3n.prototype={
$1(a){if(a==null)throw A.c(A.ajm(A.a([A.aBU(this.a),A.bo("The asset does not exist or has empty data.")],t.F)))
return a},
$S:260}
A.U8.prototype={}
A.pE.prototype={
oS(){var s=$.Tp()
s.a.a0(0)
s.b.a0(0)},
jn(a){return this.a3A(a)},
a3A(a){var s=0,r=A.a2(t.H),q,p=this
var $async$jn=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:switch(A.bD(J.aO(t.a.a(a),"type"))){case"memoryPressure":p.oS()
break}s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$jn,r)},
RP(){var s=A.b6("controller")
s.sc6(A.pN(null,new A.a6G(s),null,!1,t.xe))
return J.au6(s.aA())},
a5W(){if(this.ax$!=null)return
$.aN()
var s=A.aow("AppLifecycleState.resumed")
if(s!=null)this.tp(s)},
wB(a){return this.Vr(a)},
Vr(a){var s=0,r=A.a2(t.dR),q,p=this,o
var $async$wB=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:a.toString
o=A.aow(a)
o.toString
p.tp(o)
q=null
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$wB,r)},
wC(a){return this.VA(a)},
VA(a){var s=0,r=A.a2(t.H)
var $async$wC=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:t.j.a(a.b)
return A.a0(null,r)}})
return A.a1($async$wC,r)},
$idE:1}
A.a6G.prototype={
$0(){var s=0,r=A.a2(t.H),q=this,p,o,n
var $async$$0=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:o=A.b6("rawLicenses")
n=o
s=2
return A.a4($.Tp().kJ("NOTICES",!1),$async$$0)
case 2:n.sc6(b)
p=q.a
n=J
s=3
return A.a4(A.Ta(A.aD2(),o.aA(),"parseLicenses",t.N,t.rh),$async$$0)
case 3:n.jV(b,J.au_(p.aA()))
s=4
return A.a4(J.am7(p.aA()),$async$$0)
case 4:return A.a0(null,r)}})
return A.a1($async$$0,r)},
$S:72}
A.abG.prototype={
uN(a,b,c){var s=new A.a7($.a8,t.sB)
$.aN().Zi(b,c,A.awb(new A.abH(new A.aI(s,t.BB))))
return s},
C4(a,b){if(b==null){a=$.Tn().a.j(0,a)
if(a!=null)a.e=null}else $.Tn().Ne(a,new A.abI(b))}}
A.abH.prototype={
$1(a){var s,r,q,p
try{this.a.bT(0,a)}catch(q){s=A.ae(q)
r=A.au(q)
p=A.bo("during a platform message response callback")
A.e6(new A.bJ(s,r,"services library",p,null,!1))}},
$S:20}
A.abI.prototype={
$2(a,b){return this.Ms(a,b)},
Ms(a,b){var s=0,r=A.a2(t.H),q=1,p,o=[],n=this,m,l,k,j,i,h
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
$S:264}
A.Y3.prototype={}
A.Xp.prototype={}
A.Xy.prototype={}
A.Eb.prototype={}
A.Y5.prototype={}
A.E9.prototype={}
A.XG.prototype={}
A.WV.prototype={}
A.XH.prototype={}
A.Eh.prototype={}
A.E7.prototype={}
A.Ee.prototype={}
A.Er.prototype={}
A.Xu.prototype={}
A.XM.prototype={}
A.X3.prototype={}
A.Xh.prototype={}
A.WF.prototype={}
A.X7.prototype={}
A.Em.prototype={}
A.WH.prototype={}
A.XR.prototype={}
A.oU.prototype={}
A.kn.prototype={}
A.mp.prototype={}
A.ko.prototype={}
A.uy.prototype={}
A.a_p.prototype={
Tg(a){var s,r,q,p,o,n,m,l,k,j
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
JU(a){var s,r,q=this,p=a.a,o=a.b
if(a instanceof A.mp){q.a.l(0,p,o)
s=$.as5().j(0,o.a)
if(s!=null){r=q.b
if(r.A(0,s))r.u(0,s)
else r.B(0,s)}}else if(a instanceof A.ko)q.a.u(0,p)
return q.Tg(a)}}
A.uw.prototype={
F(){return"KeyDataTransitMode."+this.b}}
A.ux.prototype={
i(a){return"KeyMessage("+A.h(this.a)+")"}}
A.FP.prototype={
a3d(a){var s,r=this,q=r.d
switch((q==null?r.d=B.GM:q).a){case 0:return!1
case 1:if(a.c===0&&a.d===0)return!1
s=A.ax3(a)
if(a.f&&r.e.length===0){r.b.JU(s)
r.El(A.a([s],t.DG),null)}else r.e.push(s)
return!1}},
El(a,b){var s,r,q,p,o=this.a
if(o!=null){s=new A.ux(a,b)
try{o=o.$1(s)
return o}catch(p){r=A.ae(p)
q=A.au(p)
o=A.bo("while processing the key message handler")
A.e6(new A.bJ(r,q,"services library",o,null,!1))}}return!1},
zt(a){var s=0,r=A.a2(t.a),q,p=this,o,n,m,l,k,j,i
var $async$zt=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:if(p.d==null){p.d=B.GL
p.c.a.push(p.gSW())}o=A.ayI(t.a.a(a))
if(o instanceof A.i5){n=o.c
m=p.f
if(!n.Np()){m.B(0,n.gdX())
l=!1}else{m.u(0,n.gdX())
l=!0}}else if(o instanceof A.ph){n=p.f
m=o.c
if(n.A(0,m.gdX())){n.u(0,m.gdX())
l=!1}else l=!0}else l=!0
if(l){p.c.a3u(o)
for(n=p.e,m=n.length,k=p.b,j=!1,i=0;i<n.length;n.length===m||(0,A.P)(n),++i)j=k.JU(n[i])||j
j=p.El(n,o)||j
B.c.a0(n)}else j=!0
q=A.aY(["handled",j],t.N,t.z)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$zt,r)},
SX(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.c,d=e.gdX(),c=e.gpa()
e=this.b.a
s=A.n(e).h("b8<1>")
r=A.ks(new A.b8(e,s),s.h("o.E"))
q=A.a([],t.DG)
p=e.j(0,d)
o=$.he.k3$
n=a.a
if(n==="")n=f
if(a instanceof A.i5)if(p==null){m=new A.mp(d,c,n,o,!1)
r.B(0,d)}else m=new A.uy(d,p,n,o,!1)
else if(p==null)m=f
else{m=new A.ko(d,p,f,o,!1)
r.u(0,d)}for(s=this.c.d,l=A.n(s).h("b8<1>"),k=l.h("o.E"),j=r.ku(A.ks(new A.b8(s,l),k)),j=j.ga5(j),i=this.e;j.q();){h=j.gG(j)
if(h.k(0,d))q.push(new A.ko(h,c,f,o,!0))
else{g=e.j(0,h)
g.toString
i.push(new A.ko(h,g,f,o,!0))}}for(e=A.ks(new A.b8(s,l),k).ku(r),e=e.ga5(e);e.q();){l=e.gG(e)
k=s.j(0,l)
k.toString
i.push(new A.mp(l,k,f,o,!0))}if(m!=null)i.push(m)
B.c.J(i,q)}}
A.O7.prototype={}
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
A.O8.prototype={}
A.hV.prototype={
i(a){return"MethodCall("+this.a+", "+A.h(this.b)+")"}}
A.vR.prototype={
i(a){var s=this
return"PlatformException("+s.a+", "+A.h(s.b)+", "+A.h(s.c)+", "+A.h(s.d)+")"},
$ibr:1}
A.vb.prototype={
i(a){return"MissingPluginException("+A.h(this.a)+")"},
$ibr:1}
A.a8Z.prototype={
eU(a){if(a==null)return null
return B.cQ.ep(A.cK(a.buffer,a.byteOffset,a.byteLength))},
bV(a){if(a==null)return null
return A.kw(B.cd.ep(a).buffer,0,null)}}
A.a0O.prototype={
bV(a){if(a==null)return null
return B.hp.bV(B.aI.t7(a))},
eU(a){var s
if(a==null)return a
s=B.hp.eU(a)
s.toString
return B.aI.eq(0,s)}}
A.a0Q.prototype={
fX(a){var s=B.bM.bV(A.aY(["method",a.a,"args",a.b],t.N,t.X))
s.toString
return s},
fV(a){var s,r,q,p=null,o=B.bM.eU(a)
if(!t.G.b(o))throw A.c(A.bz("Expected method call Map, got "+A.h(o),p,p))
s=J.aJ(o)
r=s.j(o,"method")
q=s.j(o,"args")
if(typeof r=="string")return new A.hV(r,q)
throw A.c(A.bz("Invalid method call: "+A.h(o),p,p))},
IR(a){var s,r,q,p=null,o=B.bM.eU(a)
if(!t.j.b(o))throw A.c(A.bz("Expected envelope List, got "+A.h(o),p,p))
s=J.aJ(o)
if(s.gp(o)===1)return s.j(o,0)
if(s.gp(o)===3)if(typeof s.j(o,0)=="string")r=s.j(o,1)==null||typeof s.j(o,1)=="string"
else r=!1
else r=!1
if(r){r=A.bD(s.j(o,0))
q=A.co(s.j(o,1))
throw A.c(A.ajS(r,s.j(o,2),q,p))}if(s.gp(o)===4)if(typeof s.j(o,0)=="string")if(s.j(o,1)==null||typeof s.j(o,1)=="string")r=s.j(o,3)==null||typeof s.j(o,3)=="string"
else r=!1
else r=!1
else r=!1
if(r){r=A.bD(s.j(o,0))
q=A.co(s.j(o,1))
throw A.c(A.ajS(r,s.j(o,2),q,A.co(s.j(o,3))))}throw A.c(A.bz("Invalid envelope: "+A.h(o),p,p))},
oC(a){var s=B.bM.bV([a])
s.toString
return s},
kx(a,b,c){var s=B.bM.bV([a,c,b])
s.toString
return s},
Ji(a,b){return this.kx(a,null,b)}}
A.a8I.prototype={
bV(a){var s
if(a==null)return null
s=A.aaF(64)
this.d_(0,s,a)
return s.ja()},
eU(a){var s,r
if(a==null)return null
s=new A.w_(a)
r=this.fC(0,s)
if(s.b<a.byteLength)throw A.c(B.aB)
return r},
d_(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i=null
if(c==null)b.dv(0,0)
else if(A.jL(c))b.dv(0,c?1:2)
else if(typeof c=="number"){b.dv(0,6)
b.hl(8)
s=$.cT()
b.d.setFloat64(0,c,B.a8===s)
b.RF(b.e)}else if(A.jM(c)){s=-2147483648<=c&&c<=2147483647
r=b.d
if(s){b.dv(0,3)
s=$.cT()
r.setInt32(0,c,B.a8===s)
b.nf(b.e,0,4)}else{b.dv(0,4)
s=$.cT()
B.fs.C2(r,0,c,s)}}else if(typeof c=="string"){b.dv(0,7)
s=c.length
q=new Uint8Array(s)
n=0
while(!0){if(!(n<s)){p=i
o=0
break}m=B.b.X(c,n)
if(m<=127)q[n]=m
else{p=B.cd.ep(B.b.bM(c,n))
o=n
break}++n}if(p!=null){j.eh(b,o+p.length)
l=q.BYTES_PER_ELEMENT
k=A.dg(0,o,B.f.hk(q.byteLength,l),i,i)
b.jY(A.cK(q.buffer,q.byteOffset+0*l,(k-0)*l))
b.jY(p)}else{j.eh(b,s)
b.jY(q)}}else if(t.uo.b(c)){b.dv(0,8)
j.eh(b,c.length)
b.jY(c)}else if(t.fO.b(c)){b.dv(0,9)
s=c.length
j.eh(b,s)
b.hl(4)
b.jY(A.cK(c.buffer,c.byteOffset,4*s))}else if(t.D4.b(c)){b.dv(0,14)
s=c.length
j.eh(b,s)
b.hl(4)
b.jY(A.cK(c.buffer,c.byteOffset,4*s))}else if(t.cE.b(c)){b.dv(0,11)
s=c.length
j.eh(b,s)
b.hl(8)
b.jY(A.cK(c.buffer,c.byteOffset,8*s))}else if(t.j.b(c)){b.dv(0,12)
s=J.aJ(c)
j.eh(b,s.gp(c))
for(s=s.ga5(c);s.q();)j.d_(0,b,s.gG(s))}else if(t.G.b(c)){b.dv(0,13)
s=J.aJ(c)
j.eh(b,s.gp(c))
s.Y(c,new A.a8J(j,b))}else throw A.c(A.f0(c,i,i))},
fC(a,b){if(b.b>=b.a.byteLength)throw A.c(B.aB)
return this.iH(b.kX(0),b)},
iH(a,b){var s,r,q,p,o,n,m,l,k=this
switch(a){case 0:return null
case 1:return!0
case 2:return!1
case 3:s=b.b
r=$.cT()
q=b.a.getInt32(s,B.a8===r)
b.b+=4
return q
case 4:return b.uD(0)
case 6:b.hl(8)
s=b.b
r=$.cT()
q=b.a.getFloat64(s,B.a8===r)
b.b+=8
return q
case 5:case 7:p=k.dI(b)
return B.cQ.ep(b.kY(p))
case 8:return b.kY(k.dI(b))
case 9:p=k.dI(b)
b.hl(4)
s=b.a
o=A.anP(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+4*p
return o
case 10:return b.uE(k.dI(b))
case 14:p=k.dI(b)
b.hl(4)
s=b.a
r=s.buffer
s=s.byteOffset+b.b
A.T0(r,s,p)
o=new Float32Array(r,s,p)
b.b=b.b+4*p
return o
case 11:p=k.dI(b)
b.hl(8)
s=b.a
o=A.anN(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+8*p
return o
case 12:p=k.dI(b)
n=A.aR(p,null,!1,t.X)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.K(B.aB)
b.b=r+1
n[m]=k.iH(s.getUint8(r),b)}return n
case 13:p=k.dI(b)
s=t.X
n=A.y(s,s)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.K(B.aB)
b.b=r+1
r=k.iH(s.getUint8(r),b)
l=b.b
if(l>=s.byteLength)A.K(B.aB)
b.b=l+1
n.l(0,r,k.iH(s.getUint8(l),b))}return n
default:throw A.c(B.aB)}},
eh(a,b){var s,r
if(b<254)a.dv(0,b)
else{s=a.d
if(b<=65535){a.dv(0,254)
r=$.cT()
s.setUint16(0,b,B.a8===r)
a.nf(a.e,0,2)}else{a.dv(0,255)
r=$.cT()
s.setUint32(0,b,B.a8===r)
a.nf(a.e,0,4)}}},
dI(a){var s,r,q=a.kX(0)
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
A.a8J.prototype={
$2(a,b){var s=this.a,r=this.b
s.d_(0,r,a)
s.d_(0,r,b)},
$S:54}
A.a8M.prototype={
fX(a){var s=A.aaF(64)
B.ag.d_(0,s,a.a)
B.ag.d_(0,s,a.b)
return s.ja()},
fV(a){var s,r,q
a.toString
s=new A.w_(a)
r=B.ag.fC(0,s)
q=B.ag.fC(0,s)
if(typeof r=="string"&&s.b>=a.byteLength)return new A.hV(r,q)
else throw A.c(B.nB)},
oC(a){var s=A.aaF(64)
s.dv(0,0)
B.ag.d_(0,s,a)
return s.ja()},
kx(a,b,c){var s=A.aaF(64)
s.dv(0,1)
B.ag.d_(0,s,a)
B.ag.d_(0,s,c)
B.ag.d_(0,s,b)
return s.ja()},
Ji(a,b){return this.kx(a,null,b)},
IR(a){var s,r,q,p,o,n
if(a.byteLength===0)throw A.c(B.Gk)
s=new A.w_(a)
if(s.kX(0)===0)return B.ag.fC(0,s)
r=B.ag.fC(0,s)
q=B.ag.fC(0,s)
p=B.ag.fC(0,s)
o=s.b<a.byteLength?A.co(B.ag.fC(0,s)):null
if(typeof r=="string")n=(q==null||typeof q=="string")&&s.b>=a.byteLength
else n=!1
if(n)throw A.c(A.ajS(r,p,A.co(q),o))
else throw A.c(B.Gl)}}
A.a2e.prototype={
a34(a,b,c){var s,r,q,p
if(t.yg.b(b)){this.b.u(0,a)
return}s=this.b
r=s.j(0,a)
q=A.aAf(c)
if(q==null)q=this.a
if(J.f(r==null?null:t.Ft.a(r.a),q))return
p=q.rO(a)
s.l(0,a,p)
B.Ty.h0("activateSystemCursor",A.aY(["device",p.b,"kind",t.Ft.a(p.a).a],t.N,t.z),t.H)}}
A.vd.prototype={}
A.e8.prototype={
i(a){var s=this.grQ()
return s}}
A.N_.prototype={
rO(a){throw A.c(A.c2(null))},
grQ(){return"defer"}}
A.R5.prototype={}
A.kT.prototype={
grQ(){return"SystemMouseCursor("+this.a+")"},
rO(a){return new A.R5(this,a)},
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return b instanceof A.kT&&b.a===this.a},
gt(a){return B.b.gt(this.a)}}
A.OD.prototype={}
A.k_.prototype={
go6(){var s,r=$.he.aN$
r===$&&A.b()
s=r
return s},
ez(a,b){return this.N5(0,b,this.$ti.h("1?"))},
N5(a,b,c){var s=0,r=A.a2(c),q,p=this,o,n
var $async$ez=A.Y(function(d,e){if(d===1)return A.a_(e,r)
while(true)switch(s){case 0:o=p.b
n=o
s=3
return A.a4(p.go6().uN(0,p.a,o.bV(b)),$async$ez)
case 3:q=n.eU(e)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$ez,r)},
uT(a){this.go6().C4(this.a,new A.U6(this,a))}}
A.U6.prototype={
$1(a){return this.Mm(a)},
Mm(a){var s=0,r=A.a2(t.yD),q,p=this,o,n
var $async$$1=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:o=p.a.b
n=o
s=3
return A.a4(p.b.$1(o.eU(a)),$async$$1)
case 3:q=n.bV(c)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$$1,r)},
$S:116}
A.va.prototype={
go6(){var s,r=$.he.aN$
r===$&&A.b()
s=r
return s},
nw(a,b,c,d){return this.WF(a,b,c,d,d.h("0?"))},
WF(a,b,c,d,e){var s=0,r=A.a2(e),q,p=this,o,n,m,l
var $async$nw=A.Y(function(f,g){if(f===1)return A.a_(g,r)
while(true)switch(s){case 0:o=p.b
n=o.fX(new A.hV(a,b))
m=p.a
s=3
return A.a4(p.go6().uN(0,m,n),$async$nw)
case 3:l=g
if(l==null){if(c){q=null
s=1
break}throw A.c(A.axC("No implementation found for method "+a+" on channel "+m))}q=d.h("0?").a(o.IR(l))
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$nw,r)},
mX(a){var s=this.go6()
s.C4(this.a,new A.a21(this,a))},
qv(a,b){return this.UJ(a,b)},
UJ(a,b){var s=0,r=A.a2(t.yD),q,p=2,o,n=this,m,l,k,j,i,h,g,f,e
var $async$qv=A.Y(function(c,d){if(c===1){o=d
s=p}while(true)switch(s){case 0:h=n.b
g=h.fV(a)
p=4
e=h
s=7
return A.a4(b.$1(g),$async$qv)
case 7:k=e.oC(d)
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
q=h.kx(k,m.c,i)
s=1
break}else if(k instanceof A.vb){q=null
s=1
break}else{l=k
h=h.Ji("error",J.d6(l))
q=h
s=1
break}s=6
break
case 3:s=2
break
case 6:case 1:return A.a0(q,r)
case 2:return A.a_(o,r)}})
return A.a1($async$qv,r)}}
A.a21.prototype={
$1(a){return this.a.qv(a,this.b)},
$S:116}
A.kz.prototype={
h0(a,b,c){return this.a4p(a,b,c,c.h("0?"))},
tE(a,b){return this.h0(a,null,b)},
a4p(a,b,c,d){var s=0,r=A.a2(d),q,p=this
var $async$h0=A.Y(function(e,f){if(e===1)return A.a_(f,r)
while(true)switch(s){case 0:q=p.Ov(a,b,!0,c)
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$h0,r)}}
A.kp.prototype={
F(){return"KeyboardSide."+this.b}}
A.eq.prototype={
F(){return"ModifierKey."+this.b}}
A.vY.prototype={
ga5a(){var s,r,q,p=A.y(t.BL,t.FE)
for(s=0;s<9;++s){r=B.oq[s]
if(this.a4u(r)){q=this.ME(r)
if(q!=null)p.l(0,r,q)}}return p},
Np(){return!0}}
A.hb.prototype={}
A.a3Y.prototype={
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
$S:268}
A.i5.prototype={}
A.ph.prototype={}
A.a42.prototype={
a3u(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(a instanceof A.i5){p=a.c
i.d.l(0,p.gdX(),p.gpa())}else if(a instanceof A.ph)i.d.u(0,a.c.gdX())
i.ZP(a)
for(p=i.a,o=A.aA(p,!0,t.vc),n=o.length,m=0;m<n;++m){s=o[m]
try{if(B.c.A(p,s))s.$1(a)}catch(l){r=A.ae(l)
q=A.au(l)
k=A.bo("while processing a raw key listener")
j=$.fJ()
if(j!=null)j.$1(new A.bJ(r,q,"services library",k,null,!1))}}return!1},
ZP(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=a1.c,f=g.ga5a(),e=t.F3,d=A.y(e,t.lT),c=A.b3(e),b=this.d,a=A.ks(new A.b8(b,A.n(b).h("b8<1>")),e),a0=a1 instanceof A.i5
if(a0)a.B(0,g.gdX())
for(s=null,r=0;r<9;++r){q=B.oq[r]
p=$.as8()
o=p.j(0,new A.cc(q,B.bd))
if(o==null)continue
if(o.A(0,g.gdX()))s=q
if(f.j(0,q)===B.ck){c.J(0,o)
if(o.kj(0,a.gj7(a)))continue}n=f.j(0,q)==null?A.b3(e):p.j(0,new A.cc(q,f.j(0,q)))
if(n==null)continue
for(p=new A.qG(n,n.r),p.c=n.e,m=A.n(p).c;p.q();){l=p.d
if(l==null)l=m.a(l)
k=$.as7().j(0,l)
k.toString
d.l(0,l,k)}}e=g instanceof A.a3W
j=(e||g instanceof A.pg)&&b.j(0,B.bG)!=null&&!J.f(b.j(0,B.bG),B.dn)
for(a=$.aiB(),a=A.j1(a,a.r);a.q();){p=a.d
i=j&&p.k(0,B.bG)
if(!c.A(0,p)&&!i)b.u(0,p)}if(!(g instanceof A.a3U)&&!(g instanceof A.a3X))b.u(0,B.dE)
b.J(0,d)
if(a0&&s!=null&&!b.R(0,g.gdX())){if(e&&g.gdX().k(0,B.bH)||g instanceof A.a3V||g instanceof A.a3T){h=$.aiB().j(0,g.gdX())
if(h!=null)b.l(0,g.gdX(),h)}if(g instanceof A.pg&&g.gdX().k(0,B.bH))b.l(0,g.gdX(),g.gpa())}}}
A.cc.prototype={
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return b instanceof A.cc&&b.a===this.a&&b.b==this.b},
gt(a){return A.S(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.PK.prototype={}
A.PJ.prototype={}
A.a3T.prototype={}
A.a3U.prototype={}
A.a3V.prototype={}
A.a3W.prototype={}
A.a3X.prototype={}
A.pg.prototype={
gdX(){var s=this.a,r=B.T6.j(0,s)
return r==null?new A.l(98784247808+B.b.gt(s)):r},
gpa(){var s,r=this.b,q=B.T8.j(0,r),p=q==null?null:q[this.c]
if(p!=null)return p
s=B.T5.j(0,r)
if(s!=null)return s
if(r.length===1)return new A.e(B.b.X(r.toLowerCase(),0))
return new A.e(B.b.gt(this.a)+98784247808)},
a4u(a){var s=this
switch(a.a){case 0:return(s.d&4)!==0
case 1:return(s.d&1)!==0
case 2:return(s.d&2)!==0
case 3:return(s.d&8)!==0
case 5:return(s.d&16)!==0
case 4:return(s.d&32)!==0
case 6:return(s.d&64)!==0
case 7:case 8:return!1}},
ME(a){return B.ck},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.X(b)!==A.A(s))return!1
return b instanceof A.pg&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.wg.prototype={
ga6x(){var s=this
if(s.c)return new A.bp(s.a,t.m6)
if(s.b==null){s.b=new A.aI(new A.a7($.a8,t.jr),t.Fk)
s.qu()}return s.b.a},
qu(){var s=0,r=A.a2(t.H),q,p=this,o
var $async$qu=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:s=3
return A.a4(B.iB.tE("get",t.mE),$async$qu)
case 3:o=b
if(p.b==null){s=1
break}p.FS(o)
case 1:return A.a0(q,r)}})
return A.a1($async$qu,r)},
FS(a){var s,r=a==null
if(!r){s=J.aO(a,"enabled")
s.toString
A.nK(s)}else s=!1
this.a3w(r?null:t.Fx.a(J.aO(a,"data")),s)},
a3w(a,b){var s,r,q=this,p=q.c&&b
q.d=p
if(p)$.bP.dy$.push(new A.a5_(q))
s=q.a
if(b){p=q.T8(a)
r=t.N
if(p==null){p=t.X
p=A.y(p,p)}r=new A.cx(p,q,null,"root",A.y(r,t.hp),A.y(r,t.Cm))
p=r}else p=null
q.a=p
q.c=!0
r=q.b
if(r!=null)r.bT(0,p)
q.b=null
if(q.a!=s){q.av()
if(s!=null)s.m()}},
wW(a){return this.Xc(a)},
Xc(a){var s=0,r=A.a2(t.H),q=this,p
var $async$wW=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:p=a.a
switch(p){case"push":q.FS(t.mE.a(a.b))
break
default:throw A.c(A.c2(p+" was invoked but isn't implemented by "+A.A(q).i(0)))}return A.a0(null,r)}})
return A.a1($async$wW,r)},
T8(a){if(a==null)return null
return t.ym.a(B.ag.eU(A.kw(a.buffer,a.byteOffset,a.byteLength)))},
MY(a){var s=this
s.r.B(0,a)
if(!s.f){s.f=!0
$.bP.dy$.push(new A.a50(s))}},
En(){var s,r,q,p,o,n=this
if(!n.f)return
n.f=!1
for(s=n.r,r=A.jy(s,s.r),q=A.n(r).c;r.q();){p=r.d;(p==null?q.a(p):p).w=!1}s.a0(0)
o=B.ag.bV(n.a.a)
B.iB.h0("put",A.cK(o.buffer,o.byteOffset,o.byteLength),t.H)},
JG(){if($.bP.fx$)return
this.En()}}
A.a5_.prototype={
$1(a){this.a.d=!1},
$S:2}
A.a50.prototype={
$1(a){return this.a.En()},
$S:2}
A.cx.prototype={
gnG(){var s=J.AW(this.a,"c",new A.a4X())
s.toString
return t.mE.a(s)},
giY(){var s=J.AW(this.a,"v",new A.a4Y())
s.toString
return t.mE.a(s)},
a66(a,b,c){var s=this,r=J.e0(s.giY(),b),q=c.h("0?").a(J.iI(s.giY(),b))
if(J.fK(s.giY()))J.iI(s.a,"v")
if(r)s.lt()
return q},
a0M(a,b){var s,r,q,p,o=this,n=o.f
if(n.R(0,a)||!J.e0(o.gnG(),a)){n=t.N
s=new A.cx(A.y(n,t.X),null,null,a,A.y(n,t.hp),A.y(n,t.Cm))
o.ig(s)
return s}r=t.N
q=o.c
p=J.aO(o.gnG(),a)
p.toString
s=new A.cx(t.mE.a(p),q,o,a,A.y(r,t.hp),A.y(r,t.Cm))
n.l(0,a,s)
return s},
ig(a){var s=this,r=a.d
if(r!==s){if(r!=null)r.qV(a)
a.d=s
s.De(a)
if(a.c!=s.c)s.G5(a)}},
Tu(a){this.qV(a)
a.d=null
if(a.c!=null){a.xm(null)
a.HJ(this.gG4())}},
lt(){var s,r=this
if(!r.w){r.w=!0
s=r.c
if(s!=null)s.MY(r)}},
G5(a){a.xm(this.c)
a.HJ(this.gG4())},
xm(a){var s=this,r=s.c
if(r==a)return
if(s.w)if(r!=null)r.r.u(0,s)
s.c=a
if(s.w&&a!=null){s.w=!1
s.lt()}},
qV(a){var s,r,q,p=this
if(J.f(p.f.u(0,a.e),a)){J.iI(p.gnG(),a.e)
s=p.r
r=s.j(0,a.e)
if(r!=null){q=J.bH(r)
p.Ex(q.dY(r))
if(q.gN(r))s.u(0,a.e)}if(J.fK(p.gnG()))J.iI(p.a,"c")
p.lt()
return}s=p.r
q=s.j(0,a.e)
if(q!=null)J.iI(q,a)
q=s.j(0,a.e)
q=q==null?null:J.fK(q)
if(q===!0)s.u(0,a.e)},
De(a){var s=this
if(s.f.R(0,a.e)){J.jU(s.r.bF(0,a.e,new A.a4W()),a)
s.lt()
return}s.Ex(a)
s.lt()},
Ex(a){this.f.l(0,a.e,a)
J.cG(this.gnG(),a.e,a.a)},
HK(a,b){var s,r,q=this.f
q=q.gaU(q)
s=this.r
s=s.gaU(s)
r=q.a2Z(0,new A.fV(s,new A.a4Z(),A.n(s).h("fV<o.E,cx>")))
J.jV(b?A.aA(r,!1,A.n(r).h("o.E")):r,a)},
HJ(a){return this.HK(a,!1)},
a6c(a){var s,r=this
if(a===r.e)return
s=r.d
if(s!=null)s.qV(r)
r.e=a
s=r.d
if(s!=null)s.De(r)},
m(){var s,r=this
r.HK(r.gTt(),!0)
r.f.a0(0)
r.r.a0(0)
s=r.d
if(s!=null)s.qV(r)
r.d=null
r.xm(null)
r.x=!0},
i(a){return"RestorationBucket(restorationId: "+this.e+", owner: "+A.h(this.b)+")"}}
A.a4X.prototype={
$0(){var s=t.X
return A.y(s,s)},
$S:118}
A.a4Y.prototype={
$0(){var s=t.X
return A.y(s,s)},
$S:118}
A.a4W.prototype={
$0(){return A.a([],t.oy)},
$S:271}
A.a4Z.prototype={
$1(a){return a},
$S:272}
A.TP.prototype={}
A.ig.prototype={
H8(){var s,r,q,p,o=this,n=o.a
n=n==null?null:n.a
s=o.e
s=s==null?null:s.a
r=o.f.F()
q=o.r.F()
p=o.c
p=p==null?null:p.F()
return A.aY(["systemNavigationBarColor",n,"systemNavigationBarDividerColor",null,"systemStatusBarContrastEnforced",o.w,"statusBarColor",s,"statusBarBrightness",r,"statusBarIconBrightness",q,"systemNavigationBarIconBrightness",p,"systemNavigationBarContrastEnforced",o.d],t.N,t.z)},
i(a){return"SystemUiOverlayStyle("+this.H8().i(0)+")"},
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
A.a9h.prototype={
$0(){if(!J.f($.pV,$.akc)){B.c0.h0("SystemChrome.setSystemUIOverlayStyle",$.pV.H8(),t.H)
$.akc=$.pV}$.pV=null},
$S:0}
A.xa.prototype={
F(){return"SystemSoundType."+this.b}}
A.a9p.prototype={
V(a,b){return new A.Nk(b,this)}}
A.Vg.prototype={
hc(a){var s,r,q,p,o,n=a.a
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
p=null}return new A.b0(A.aoG(s,p,o).b,B.C)},
hd(a){var s,r,q,p,o,n=a.a
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
q=null}o=A.aoG(s,q,p)
return new A.b0(r-(o.a.length-o.c),B.M)}}
A.aaC.prototype={
hc(a){return new A.b0(this.a.b.mS(a).a,B.C)},
hd(a){return new A.b0(this.a.b.mS(a).b,B.M)}}
A.a1j.prototype={
hc(a){return new A.b0(this.a.BB(a).a,B.C)},
hd(a){return new A.b0(this.a.BB(a).b,B.M)}}
A.WA.prototype={
hc(a){return B.cO},
hd(a){return new A.b0(this.a.length,B.M)}}
A.aaA.prototype={
hc(a){var s,r=a.a,q=this.a,p=q.length
if(r<=p)r=r===p&&a.b===B.C
else r=!0
if(r)a=new A.b0(p,B.M)
s=a.a
if(s<=0)return B.cO
if(a.b===B.C&&!A.a9R(B.b.ac(q,s)))return a
for(;--s,s>=0;)if(!A.a9R(B.b.ac(q,s)))return new A.b0(s+1,B.M)
return B.cO},
hd(a){var s,r=a.a,q=this.a,p=q.length
if(r>=p)return new A.b0(p,B.M)
if(r>=0)r=r===0&&a.b===B.M
else r=!0
if(r)a=B.cO
s=a.a
if(a.b===B.M&&!A.a9R(B.b.ac(q,s-1)))return a
for(;s<p;++s)if(!A.a9R(B.b.ac(q,s)))return new A.b0(s,B.C)
return new A.b0(p,B.M)}}
A.Nk.prototype={
hc(a){return this.a.hc(this.b.hc(a))},
hd(a){return this.a.hd(this.b.hd(a))}}
A.Ja.prototype={
DG(a){if(this.a)switch(a.b.a){case 0:return new A.b0(a.a,B.C)
case 1:return new A.b0(a.a+1,B.M)}else switch(a.b.a){case 0:return new A.b0(a.a-1,B.C)
case 1:return new A.b0(a.a,B.M)}},
hc(a){return this.DG(a)},
hd(a){return this.DG(a)}}
A.L9.prototype={
i(a){var s,r,q=this,p=", isDirectional: "
if(!q.gkI())return"TextSelection.invalid"
s=""+q.c
r=""+q.f
return q.a===q.b?"TextSelection.collapsed(offset: "+s+", affinity: "+q.e.i(0)+p+r+")":"TextSelection(baseOffset: "+s+", extentOffset: "+q.d+p+r+")"},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof A.L9))return!1
if(!r.gkI())return!b.gkI()
if(b.c===r.c)if(b.d===r.d)s=(r.a!==r.b||b.e===r.e)&&b.f===r.f
else s=!1
else s=!1
return s},
gt(a){var s,r=this
if(!r.gkI())return A.S(-B.f.gt(1),-B.f.gt(1),A.eT(B.C),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)
s=r.a===r.b?A.eT(r.e):A.eT(B.C)
return A.S(B.f.gt(r.c),B.f.gt(r.d),s,B.nN.gt(r.f),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.Kd.prototype={
F(){return"SelectionChangedCause."+this.b}}
A.L7.prototype={
gSr(){var s=this.c
s===$&&A.b()
return s},
qF(a){return this.WZ(a)},
WZ(a){var s=0,r=A.a2(t.z),q,p=2,o,n=this,m,l,k,j,i
var $async$qF=A.Y(function(b,c){if(b===1){o=c
s=p}while(true)switch(s){case 0:p=4
s=7
return A.a4(n.wH(a),$async$qF)
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
A.e6(new A.bJ(m,l,"services library",k,new A.a9Q(a),!1))
throw i
s=6
break
case 3:s=2
break
case 6:case 1:return A.a0(q,r)
case 2:return A.a_(o,r)}})
return A.a1($async$qF,r)},
wH(a){return this.Wg(a)},
Wg(a){var s=0,r=A.a2(t.z),q,p=this,o,n,m,l,k,j
var $async$wH=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:j=a.a
if(j==="TextInputClient.focusElement"){p.f.j(0,J.aO(t.j.a(a.b),0))
s=1
break}else if(j==="TextInputClient.requestElementsInRect"){o=J.lv(t.j.a(a.b),t.fY)
n=A.n(o).h("aC<V.E,W>")
m=p.f
l=A.n(m).h("b8<1>")
k=l.h("dI<o.E,x<@>>")
q=A.aA(new A.dI(new A.aH(new A.b8(m,l),new A.a9N(p,A.aA(new A.aC(o,new A.a9O(),n),!0,n.h("bm.E"))),l.h("aH<o.E>")),new A.a9P(p),k),!0,k.h("o.E"))
s=1
break}else if(j==="TextInputClient.scribbleInteractionBegan"){s=1
break}else if(j==="TextInputClient.scribbleInteractionFinished"){s=1
break}s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$wH,r)}}
A.a9Q.prototype={
$0(){var s=null
return A.a([A.hE("call",this.a,!0,B.aJ,s,!1,s,s,B.ap,s,!1,!0,!0,B.aW,s,t.fw)],t.F)},
$S:16}
A.a9O.prototype={
$1(a){return a},
$S:274}
A.a9N.prototype={
$1(a){this.a.f.j(0,a)
return!1},
$S:31}
A.a9P.prototype={
$1(a){var s=this.a.f.j(0,a),r=s.gym(s)
s=[a]
B.c.J(s,[r.ghN(r),r.gBc(r),r.gbn(r),r.gbS(r)])
return s},
$S:275}
A.xl.prototype={}
A.P4.prototype={}
A.Sk.prototype={}
A.agQ.prototype={
$1(a){this.a.sc6(a)
return!1},
$S:45}
A.aM.prototype={}
A.bn.prototype={
fO(a){this.b=a},
iA(a,b){this.gtF()
return!0},
gtF(){return!0},
rJ(a){return!0},
a_O(a){var s=this.a
s.b=!0
s.a.push(a)
return null},
Lv(a){return this.a.u(0,a)}}
A.lQ.prototype={}
A.lI.prototype={
di(a){return this.c.$1(a)}}
A.Tx.prototype={
Km(a,b,c){if(a instanceof A.lQ)return a.mq(b,c)
else return a.di(b)}}
A.iJ.prototype={
ak(){return new A.xI(A.b3(t.nT),new A.B(),B.m)}}
A.Tz.prototype={
$1(a){var s=a.f
s.toString
t.ke.a(s)
return!1},
$S:44}
A.TC.prototype={
$1(a){var s,r=this,q=a.f
q.toString
s=A.aiO(t.ke.a(q),r.b,r.d)
if(s!=null){r.c.Cx(a,null)
r.a.a=s
return!0}return!1},
$S:44}
A.TA.prototype={
$1(a){var s,r=a.f
r.toString
s=A.aiO(t.ke.a(r),this.b,this.c)
if(s!=null){this.a.a=s
return!0}return!1},
$S:44}
A.TD.prototype={
$1(a){var s,r,q=this,p=a.f
p.toString
s=q.b
r=A.aiO(t.ke.a(p),s,q.d)
p=r!=null
if(p&&r.iA(0,s))q.a.a=A.amh(a).Km(r,s,q.c)
return p},
$S:44}
A.xI.prototype={
az(){this.aW()
this.Hf()},
UB(a){this.ar(new A.aaJ(this))},
Hf(){var s,r,q,p,o=this,n=o.a.d
n=n.gaU(n)
s=A.ks(n,A.n(n).h("o.E"))
r=o.d.ku(s)
n=o.d
n.toString
q=s.ku(n)
for(n=r.ga5(r),p=o.gET();n.q();)n.gG(n).Lv(p)
for(n=q.ga5(q);n.q();)n.gG(n).a_O(p)
o.d=s},
aY(a){this.bp(a)
this.Hf()},
m(){var s,r,q,p,o=this
o.aS()
for(s=o.d,s=A.jy(s,s.r),r=o.gET(),q=A.n(s).c;s.q();){p=s.d;(p==null?q.a(p):p).Lv(r)}o.d=null},
L(a){var s=this.a
return new A.xH(null,s.d,this.e,s.e,null)}}
A.aaJ.prototype={
$0(){this.a.e=new A.B()},
$S:0}
A.xH.prototype={
c1(a){var s
if(this.w===a.w)s=!A.aid(a.r,this.r)
else s=!0
return s}}
A.LE.prototype={
di(a){a.a7y()
return null}}
A.E1.prototype={
rJ(a){return this.c},
di(a){}}
A.nT.prototype={}
A.o7.prototype={}
A.hG.prototype={}
A.E_.prototype={}
A.mO.prototype={}
A.J7.prototype={
iA(a,b){var s,r,q,p,o,n=$.ai.a4$.f.f
if(n==null||n.e==null)return!1
for(s=t.q,r=0;r<2;++r){q=B.Hd[r]
p=n.e
p.toString
o=A.aiQ(p,q,s)
if(o!=null&&o.iA(0,q)){this.c=o
this.d=q
return!0}}return!1},
di(a){var s,r=this.c
r===$&&A.b()
s=this.d
s===$&&A.b()
r.di(s)}}
A.OZ.prototype={
WG(a,b,c){var s
a.fO(this.gkr())
s=A.n(this).h("lQ<1>").b(a)?a.mq(b,c):a.di(b)
a.fO(null)
return s},
mq(a,b){var s=this,r=A.aiP(s.gtM(),A.n(s).c)
return r==null?s.a4o(a,s.b,b):s.WG(r,a,b)},
di(a){return this.mq(a,null)},
gtF(){var s=this,r=A.aiQ(s.gtM(),null,A.n(s).c)
if(r!=null){r.fO(s.gkr())
r.gtF()
r.fO(null)}else s.gkr().gtF()
return!0},
iA(a,b){var s,r=this,q=A.aiP(r.gtM(),A.n(r).c),p=q==null
if(!p)q.fO(r.gkr())
s=(p?r.gkr():q).iA(0,b)
if(!p)q.fO(null)
return s},
rJ(a){var s,r=this,q=A.aiP(r.gtM(),A.n(r).c),p=q==null
if(!p)q.fO(r.gkr())
s=(p?r.gkr():q).rJ(a)
if(!p)q.fO(null)
return s}}
A.yZ.prototype={
a4o(a,b,c){var s=this.e
if(b==null)return s.di(a)
else return s.di(a)},
gkr(){return this.e},
gtM(){return this.f}}
A.LM.prototype={}
A.LL.prototype={}
A.O2.prototype={}
A.An.prototype={
fO(a){this.NF(a)
this.e.fO(a)}}
A.rw.prototype={
aD(a){var s=new A.w4(this.e,!0,null,A.aw(),this.$ti.h("w4<1>"))
s.aH()
s.saX(null)
return s},
aL(a,b){b.sn(0,this.e)
b.sNs(!0)}}
A.xF.prototype={
ak(){return new A.A5(B.m)}}
A.A5.prototype={
gWt(){var s,r
$.ai.toString
s=$.aN()
if(s.gyG()!=="/"){$.ai.toString
s=s.gyG()}else{r=this.a.ax
$.ai.toString
s=s.gyG()
s=s}return s},
az(){var s=this
s.aW()
s.a_k()
$.ai.toString
s.r=s.xl($.aN().a.f,s.a.fy)
$.ai.br$.push(s)},
aY(a){this.bp(a)
this.Hz(a)},
m(){B.c.u($.ai.br$,this)
var s=this.d
if(s!=null)s.m()
this.aS()},
DV(){var s=this.d
if(s!=null)s.m()
this.e=this.d=null},
Hz(a){var s,r=this
r.a.toString
if(r.gHI()){r.DV()
if(r.f==null||r.a.c!=a.c){s=r.a.c
r.f=s==null?new A.kf(r,t.yh):s}}else{r.DV()
r.f=null}},
a_k(){return this.Hz(null)},
gHI(){var s=this.a
if(s.Q==null){s=s.as
s=s==null?null:s.gbE(s)
s=s===!0||this.a.d!=null||!1}else s=!0
return s},
Xz(a){var s,r=this,q=a.a,p=q==="/"&&r.a.Q!=null?new A.afZ(r):r.a.as.j(0,q)
if(p!=null)return r.a.f.$1$2(a,p,t.z)
s=r.a.d
if(s!=null)return s.$1(a)
return null},
XN(a){return this.a.at.$1(a)},
j9(){var s=0,r=A.a2(t.y),q,p=this,o,n
var $async$j9=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:p.a.toString
o=p.f
n=o==null?null:o.gbw()
if(n==null){q=!1
s=1
break}q=n.KN()
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$j9,r)},
ot(a){return this.a2e(a)},
a2e(a){var s=0,r=A.a2(t.y),q,p=this,o,n
var $async$ot=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:p.a.toString
o=p.f
n=o==null?null:o.gbw()
if(n==null){q=!1
s=1
break}o=n.xp(a,null,t.X)
o.toString
o=A.apm(o,B.Cw,!1,null)
n.e.push(o)
n.wd()
n.Dt(o.a)
q=!0
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$ot,r)},
xl(a,b){this.a.toString
return A.aD1(a,b)},
yL(a){var s=this,r=s.xl(a,s.a.fy)
if(!r.k(0,s.r))s.ar(new A.ag1(s,r))},
L(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g={}
g.a=null
s=i.a
s.toString
if(i.gHI()){s=i.f
r=i.gWt()
q=i.a
p=q.e==null?A.aEs():new A.ag_(i)
o=q.ay
o.toString
g.a=A.an6(!0,new A.vq(r,i.gXy(),i.gXM(),o,"nav",p,!0,s),"Navigator Scope",h,h)
s=q}else{s=i.a
s.toString}g.b=null
n=new A.hA(new A.ag0(g,i),h)
g.b=n
n=A.tn(n,h,B.cN,!0,s.cy,h,h,B.aQ)
g.b=n
s=$.aA7
if(s)m=new A.IM(15,!1,!1,h)
else m=h
if(m!=null)g.b=A.ie(B.aS,A.a([n,A.J1(h,m,h,h,0,0,0,h)],t.E),B.S,B.b8)
s=i.a
r=s.CW
s=s.db
s=A.b2(255,s.gn(s)>>>16&255,s.gn(s)>>>8&255,s.gn(s)&255)
g=g.b
l=i.xl(A.a([i.a.dx],t.as),i.a.fy)
q=t.eu
p=A.a([],q)
B.c.J(p,i.a.dy)
p.push(B.Es)
q=A.a(p.slice(0),q)
k=new A.uK(l,q,new A.Lh(r,s,g,h),h)
A.dw(a)
g=i.a
j=new A.yH(k,h)
k=j
g=g.p3
s=A.aA6()
r=A.oW($.asF(),t.n,t.nT)
q=t.B8
p=t.dc
r.l(0,B.Ce,new A.yZ(new A.pu(new A.bk(A.a([],q),p)),a,!1,!1,!1,!1,new A.bk(A.a([],q),p),t.uq.h("yZ<bn.T>")))
return new A.wj(new A.wM(A.ak5(new A.DR(A.Ty(r,A.an7(new A.L2(new A.wN(k,h),h),new A.w0(A.y(t.j5,t.uJ)))),h),"<Default WidgetsApp Shortcuts>",s),h),g,h)}}
A.afZ.prototype={
$1(a){var s=this.a.a.Q
s.toString
return s},
$S:13}
A.ag1.prototype={
$0(){this.a.r=this.b},
$S:0}
A.ag_.prototype={
$2(a,b){return this.a.a.e.$1(b)},
$S:120}
A.ag0.prototype={
$1(a){return this.b.a.ch.$2(a,this.a.a)},
$S:13}
A.SW.prototype={}
A.oe.prototype={
F(){return"ConnectionState."+this.b}}
A.f1.prototype={
i(a){var s=this
return"AsyncSnapshot("+s.a.i(0)+", "+A.h(s.b)+", "+A.h(s.c)+", "+A.h(s.d)+")"},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return s.$ti.b(b)&&b.a===s.a&&J.f(b.b,s.b)&&J.f(b.c,s.c)&&b.d==s.d},
gt(a){return A.S(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.oy.prototype={
ak(){return new A.yg(B.m,this.$ti.h("yg<1>"))}}
A.yg.prototype={
az(){var s=this
s.aW()
s.a.toString
s.e=new A.f1(B.nj,null,null,null,s.$ti.h("f1<1>"))
s.GX()},
aY(a){var s,r=this
r.bp(a)
if(a.c!==r.a.c){if(r.d!=null){r.d=null
s=r.e
s===$&&A.b()
r.e=new A.f1(B.nj,s.b,s.c,s.d,s.$ti)}r.GX()}},
L(a){var s,r=this.a
r.toString
s=this.e
s===$&&A.b()
return r.d.$2(a,s)},
m(){this.d=null
this.aS()},
GX(){var s,r=this,q=r.a
q.toString
s=r.d=new A.B()
q.c.dZ(new A.acj(r,s),new A.ack(r,s),t.H)
q=r.e
q===$&&A.b()
if(q.a!==B.ee)r.e=new A.f1(B.Fk,q.b,q.c,q.d,q.$ti)}}
A.acj.prototype={
$1(a){var s=this.a
if(s.d===this.b)s.ar(new A.aci(s,a))},
$S(){return this.a.$ti.h("ay(1)")}}
A.aci.prototype={
$0(){var s=this.a
s.e=new A.f1(B.ee,this.b,null,null,s.$ti.h("f1<1>"))},
$S:0}
A.ack.prototype={
$2(a,b){var s=this.a
if(s.d===this.b)s.ar(new A.ach(s,a,b))},
$S:29}
A.ach.prototype={
$0(){var s=this.a
s.e=new A.f1(B.ee,null,this.b,this.c,s.$ti.h("f1<1>"))},
$S:0}
A.rB.prototype={
ak(){return new A.xO(B.m)}}
A.xO.prototype={
az(){this.aW()
this.Hk()},
aY(a){this.bp(a)
this.Hk()},
Hk(){this.e=new A.de(this.gRJ(),this.a.c,null,t.dm)},
m(){var s,r,q=this.d
if(q!=null)for(q=A.j1(q,q.r);q.q();){s=q.d
r=this.d.j(0,s)
r.toString
s.H(0,r)}this.aS()},
RK(a){var s,r=this,q=a.a,p=r.d
if(p==null)p=r.d=A.y(t.yF,t.M)
p.l(0,q,r.SZ(q))
p=r.d.j(0,q)
p.toString
q.Z(0,p)
if(!r.f){r.f=!0
s=r.EE()
if(s!=null)r.Hv(s)
else $.bP.dy$.push(new A.ab3(r))}return!1},
EE(){var s={},r=this.c
r.toString
s.a=null
r.aV(new A.ab8(s))
return t.ot.a(s.a)},
Hv(a){var s,r
this.c.toString
s=this.f
r=this.e
r===$&&A.b()
a.DB(t.CR.a(A.ax1(r,s)))},
SZ(a){return new A.ab7(this,a)},
L(a){var s=this.f,r=this.e
r===$&&A.b()
return new A.uv(s,r,null)}}
A.ab3.prototype={
$1(a){var s,r=this.a
if(r.c==null)return
s=r.EE()
s.toString
r.Hv(s)},
$S:2}
A.ab8.prototype={
$1(a){this.a.a=a},
$S:8}
A.ab7.prototype={
$0(){var s=this.a
s.d.u(0,this.b)
if(s.d.a===0)if($.bP.fy$.a<3)s.ar(new A.ab5(s))
else{s.f=!1
A.dP(new A.ab6(s))}},
$S:0}
A.ab5.prototype={
$0(){this.a.f=!1},
$S:0}
A.ab6.prototype={
$0(){var s=this.a
if(s.c!=null&&s.d.a===0)s.ar(new A.ab4(s))},
$S:0}
A.ab4.prototype={
$0(){},
$S:0}
A.oR.prototype={}
A.FO.prototype={}
A.o0.prototype={
ql(){var s=new A.FO($.by())
this.hG$=s
this.c.d5(new A.oR(s))},
pJ(){var s,r=this
if(r.guu()){if(r.hG$==null)r.ql()}else{s=r.hG$
if(s!=null){s.av()
s.e2()
r.hG$=null}}},
L(a){if(this.guu()&&this.hG$==null)this.ql()
return B.a0t}}
A.OP.prototype={
L(a){throw A.c(A.F_("Widgets that mix AutomaticKeepAliveClientMixin into their State must call super.build() but must ignore the return value of the superclass."))}}
A.RN.prototype={
BZ(a,b){},
my(a){A.aps(this,new A.afM(this,a))}}
A.afM.prototype={
$1(a){var s=a.z
if(s!=null&&s.A(0,this.a))a.b4()},
$S:8}
A.afL.prototype={
$1(a){A.aps(a,this.a)},
$S:8}
A.RO.prototype={
bU(a){var s=A.fY(t.h,t.X)
return new A.RN(s,this,B.a5)}}
A.f7.prototype={
c1(a){return this.w!==a.w}}
A.th.prototype={
aD(a){var s=new A.Jr(this.e,this.f,this.r,!1,!1,null,A.aw())
s.aH()
s.saX(null)
return s},
aL(a,b){b.su5(this.e)
b.sJK(this.f)
b.sua(this.r)
b.co=b.bz=!1},
ov(a){a.su5(null)
a.sJK(null)}}
A.ob.prototype={
aD(a){var s=new A.Jo(null,this.f,null,A.aw())
s.aH()
s.saX(null)
return s},
aL(a,b){b.sob(null)
b.srH(this.f)},
ov(a){a.sob(null)}}
A.BE.prototype={
aD(a){var s=new A.Jn(this.e,this.f,null,A.aw())
s.aH()
s.saX(null)
return s},
aL(a,b){b.sob(this.e)
b.srH(this.f)},
ov(a){a.sob(null)}}
A.IS.prototype={
aD(a){var s=this,r=new A.JF(s.e,s.r,s.w,s.y,s.x,null,s.f,null,A.aw())
r.aH()
r.saX(null)
return r},
aL(a,b){var s=this
b.sdn(0,s.e)
b.srH(s.f)
b.sa0o(0,s.r)
b.sio(0,s.w)
b.sag(0,s.x)
b.she(0,s.y)}}
A.IT.prototype={
aD(a){var s=this,r=new A.JG(s.r,s.x,s.w,s.e,s.f,null,A.aw())
r.aH()
r.saX(null)
return r},
aL(a,b){var s=this
b.sob(s.e)
b.srH(s.f)
b.sio(0,s.r)
b.sag(0,s.w)
b.she(0,s.x)}}
A.q4.prototype={
aD(a){var s=this,r=A.dR(a),q=new A.JP(s.w,null,A.aw())
q.aH()
q.saX(null)
q.sbu(0,s.e)
q.seo(s.r)
q.sbK(r)
q.smg(s.x)
q.sL6(0,null)
return q},
aL(a,b){var s=this
b.sbu(0,s.e)
b.sL6(0,null)
b.seo(s.r)
b.sbK(A.dR(a))
b.bz=s.w
b.smg(s.x)}}
A.ET.prototype={
aD(a){var s=new A.w5(this.e,this.f,A.dR(a),B.l,null,A.aw())
s.aH()
s.saX(null)
return s},
aL(a,b){b.szj(this.e)
b.seo(this.f)
b.sbK(A.dR(a))
if(B.l!==b.e7){b.e7=B.l
b.ao()
b.b2()}}}
A.F9.prototype={
aD(a){var s=new A.Jw(this.e,this.f,null,A.aw())
s.aH()
s.saX(null)
return s},
aL(a,b){b.sa6V(this.e)
b.U=this.f}}
A.hZ.prototype={
aD(a){var s=new A.JD(this.e,A.dR(a),null,A.aw())
s.aH()
s.saX(null)
return s},
aL(a,b){b.sdG(0,this.e)
b.sbK(A.dR(a))}}
A.lx.prototype={
aD(a){var s=new A.JI(this.f,this.r,this.e,A.dR(a),null,A.aw())
s.aH()
s.saX(null)
return s},
aL(a,b){b.seo(this.e)
b.sa79(this.f)
b.sa3P(this.r)
b.sbK(A.dR(a))}}
A.lM.prototype={}
A.ti.prototype={
aD(a){var s=new A.Js(this.e,null,A.aw())
s.aH()
s.saX(null)
return s},
aL(a,b){b.syI(this.e)}}
A.uA.prototype={
o2(a){var s,r,q=a.e
q.toString
t.DU.a(q)
s=this.f
if(q.e!==s){q.e=s
r=a.c
if(r instanceof A.z)r.a9()}}}
A.tg.prototype={
aD(a){var s=new A.Jq(this.e,0,null,null,A.aw())
s.aH()
s.J(0,null)
return s},
aL(a,b){b.syI(this.e)}}
A.wR.prototype={
aD(a){return A.aoe(A.o4(this.f,this.e))},
aL(a,b){b.sI_(A.o4(this.f,this.e))},
c0(){var s,r=this,q=r.e
if(q===1/0&&r.f===1/0)s="SizedBox.expand"
else s=q===0&&r.f===0?"SizedBox.shrink":"SizedBox"
q=r.a
return q==null?s:s+"-"+q.i(0)}}
A.fN.prototype={
aD(a){return A.aoe(this.e)},
aL(a,b){b.sI_(this.e)}}
A.FW.prototype={
aD(a){var s=new A.Jz(this.e,this.f,null,A.aw())
s.aH()
s.saX(null)
return s},
aL(a,b){b.sa52(0,this.e)
b.sa5_(0,this.f)}}
A.vx.prototype={
aD(a){var s=new A.JC(this.e,null,A.aw())
s.aH()
s.saX(null)
return s},
aL(a,b){b.stU(this.e)},
bU(a){return new A.OW(this,B.a5)}}
A.OW.prototype={}
A.x1.prototype={
aD(a){var s=A.dR(a)
s=new A.wb(this.e,s,this.r,this.w,A.aw(),0,null,null,A.aw())
s.aH()
s.J(0,null)
return s},
aL(a,b){var s
b.seo(this.e)
s=A.dR(a)
b.sbK(s)
s=this.r
if(b.aN!==s){b.aN=s
b.a9()}s=this.w
if(s!==b.aQ){b.aQ=s
b.ao()
b.b2()}}}
A.mM.prototype={
o2(a){var s,r,q,p=this,o=a.e
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
if(q instanceof A.z)q.a9()}}}
A.J2.prototype={
L(a){var s,r,q,p=this,o=null,n=a.a7(t.I)
n.toString
s=p.c
r=p.e
switch(n.w.a){case 0:break
case 1:q=s
s=r
r=q
break
default:s=o
r=s}return A.J1(p.f,p.x,o,o,r,s,p.d,p.r)}}
A.tX.prototype={
gXl(){switch(this.e.a){case 0:return!0
case 1:var s=this.w
return s===B.bb||s===B.Fl}},
uC(a){var s=this.x
s=this.gXl()?A.dR(a):null
return s},
aD(a){var s=this
return A.ayP(B.l,s.w,s.e,s.f,s.r,s.z,s.uC(a),s.y)},
aL(a,b){var s=this,r=s.e
if(b.E!==r){b.E=r
b.a9()}r=s.f
if(b.P!==r){b.P=r
b.a9()}r=s.r
if(b.ae!==r){b.ae=r
b.a9()}r=s.w
if(b.al!==r){b.al=r
b.a9()}r=s.uC(a)
if(b.aN!=r){b.aN=r
b.a9()}r=s.y
if(b.aQ!==r){b.aQ=r
b.a9()}if(B.l!==b.dd){b.dd=B.l
b.ao()
b.b2()}}}
A.JX.prototype={}
A.BI.prototype={}
A.ow.prototype={
o2(a){var s,r,q,p=a.e
p.toString
t.uc.a(p)
s=this.f
if(p.e!==s){p.e=s
r=!0}else r=!1
s=this.r
if(p.f!==s){p.f=s
r=!0}if(r){q=a.c
if(q instanceof A.z)q.a9()}}}
A.EM.prototype={}
A.JR.prototype={
aD(a){var s,r,q,p=this,o=null,n=p.e,m=p.r
if(m==null){m=a.a7(t.I)
m.toString
m=m.w}s=p.x
r=A.ajH(a)
q=s===B.bm?"\u2026":o
s=new A.w7(A.a9T(q,r,p.z,p.as,n,p.f,m,p.ax,p.y,p.at),p.w,s,p.ch,0,o,o,A.aw())
s.aH()
s.J(0,o)
s.wb(n)
s.spw(p.ay)
return s},
aL(a,b){var s,r=this
b.sct(0,r.e)
b.sB1(0,r.f)
s=r.r
if(s==null){s=a.a7(t.I)
s.toString
s=s.w}b.sbK(s)
b.sNu(r.w)
b.sa5w(0,r.x)
b.sB2(r.y)
b.szZ(r.z)
b.sND(r.as)
b.sB3(r.at)
b.sLU(r.ax)
s=A.ajH(a)
b.szU(0,s)
b.spw(r.ay)
b.sN3(r.ch)}}
A.a52.prototype={
$1(a){return!0},
$S:47}
A.Je.prototype={
aD(a){var s=this,r=s.d
r=r==null?null:r.cT(0)
r=new A.Jx(r,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.CW,!1,null,!1,A.aw())
r.aH()
r.a_9()
return r},
aL(a,b){var s=this,r=s.d
b.sfv(0,r==null?null:r.cT(0))
b.al=s.e
b.sbn(0,s.f)
b.sbS(0,s.r)
b.sMV(0,s.w)
b.sag(0,s.x)
b.su_(0,s.y)
b.sa0Z(s.Q)
b.szj(s.as)
b.seo(s.at)
b.sa6g(0,s.ax)
b.sa0B(s.ay)
b.sa4Y(!1)
b.sbK(null)
b.szG(s.CW)
b.szH(!1)
b.smg(s.z)},
ov(a){a.sfv(0,null)}}
A.FX.prototype={
aD(a){var s=this,r=null,q=new A.JH(s.e,r,s.r,r,s.x,s.y,r,r,s.as,s.at,r,A.aw())
q.aH()
q.saX(r)
return q},
aL(a,b){var s=this
b.bq=s.e
b.c4=null
b.cJ=s.r
b.cU=null
b.cm=s.x
b.eW=s.y
b.a2G=b.ft=null
b.Jx=s.as
b.v=s.at}}
A.HY.prototype={
aD(a){var s=this,r=new A.JB(!0,s.e,s.f,s.r,s.w,B.aC,null,A.aw())
r.aH()
r.saX(null)
return r},
aL(a,b){var s,r=this
b.c4=r.e
b.cJ=r.f
b.cU=r.r
s=r.w
if(!b.cm.k(0,s)){b.cm=s
b.ao()}if(b.v!==B.aC){b.v=B.aC
b.ao()}}}
A.i8.prototype={
aD(a){var s=new A.JK(null,A.aw())
s.aH()
s.saX(null)
return s}}
A.hO.prototype={
aD(a){var s=new A.w6(this.e,this.f,null,A.aw())
s.aH()
s.saX(null)
return s},
aL(a,b){b.sK7(this.e)
b.szA(this.f)}}
A.AX.prototype={
aD(a){var s=new A.w2(!1,null,null,A.aw())
s.aH()
s.saX(null)
return s},
aL(a,b){b.sHR(!1)
b.szA(null)}}
A.wH.prototype={
aD(a){var s=this,r=new A.w9(s.e,s.f,s.r,!1,s.EQ(a),null,A.aw())
r.aH()
r.saX(null)
r.Hh(r.v)
return r},
EQ(a){var s,r=this.e,q=r.p4
if(q!=null)return q
if(r.fx==null){if(r.go==null)r=r.p2!=null
else r=!0
s=r}else s=!0
if(!s)return null
return A.dR(a)},
aL(a,b){var s=this
b.sa1b(s.f)
b.sa2D(s.r)
b.sa2A(!1)
b.sLh(s.e)
b.sbK(s.EQ(a))}}
A.HT.prototype={
aD(a){var s=new A.JA(null,A.aw())
s.aH()
s.saX(null)
return s}}
A.Bl.prototype={
aD(a){var s=new A.Jm(!0,null,A.aw())
s.aH()
s.saX(null)
return s},
aL(a,b){b.sa0n(!0)}}
A.tM.prototype={
aD(a){var s=new A.Jv(this.e,null,A.aw())
s.aH()
s.saX(null)
return s},
aL(a,b){b.sa2B(this.e)}}
A.FB.prototype={
aD(a){var s=new A.Jy(this.e,null,A.aw())
s.aH()
s.saX(null)
return s},
aL(a,b){b.szB(0,this.e)}}
A.kq.prototype={
L(a){return this.c}}
A.hA.prototype={
L(a){return this.c.$1(a)}}
A.t2.prototype={
aD(a){var s=new A.z2(this.e,B.aC,null,A.aw())
s.aH()
s.saX(null)
return s},
aL(a,b){t.oZ.a(b).sag(0,this.e)}}
A.z2.prototype={
sag(a,b){if(b.k(0,this.bq))return
this.bq=b
this.ao()},
aF(a,b){var s,r,q,p,o,n,m=this
if(m.k3.MS(0,B.R)){s=a.gbG(a)
r=m.k3
q=b.a
p=b.b
o=r.a
r=r.b
n=$.ap().bk()
n.sag(0,m.bq)
s.cl(new A.C(q,p,q+o,p+r),n)}s=m.C$
if(s!=null)a.f6(s,b)}}
A.ag3.prototype={
$0(){var s,r,q=this,p=q.b
if(p==null||t.c.b(q.c)){p=q.a.aE$
p===$&&A.b()
p=p.e
p.toString
s=q.c
s=s.gbA(s)
r=A.auO()
p.bY(r,s)
p=r}return p},
$S:284}
A.ag4.prototype={
$1(a){var s=a==null?t.K.a(a):a
return this.a.jn(s)},
$S:285}
A.dl.prototype={
j9(){return A.bF(!1,t.y)},
ot(a){return A.bF(!1,t.y)},
a2f(a){var s=a.a
s.toString
return this.ot(s)},
rU(){},
IW(){},
IV(){},
yL(a){},
IU(a){}}
A.xG.prototype={
a_V(a){return this.br$.push(a)},
a3g(){this.a2k($.aN().a.f)},
a2k(a){var s,r,q
for(s=this.br$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].yL(a)},
tr(){var s=0,r=A.a2(t.H),q,p=this,o,n,m
var $async$tr=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:o=A.aA(p.br$,!0,t.nR),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.a4(o[m].j9(),$async$tr)
case 6:if(b){s=1
break}case 4:++m
s=3
break
case 5:A.a9i()
case 1:return A.a0(q,r)}})
return A.a1($async$tr,r)},
ts(a){return this.a3t(a)},
a3t(a){var s=0,r=A.a2(t.H),q,p=this,o,n,m
var $async$ts=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:o=A.aA(p.br$,!0,t.nR),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.a4(o[m].ot(a),$async$ts)
case 6:if(c){s=1
break}case 4:++m
s=3
break
case 5:case 1:return A.a0(q,r)}})
return A.a1($async$ts,r)},
qx(a){return this.VQ(a)},
VQ(a){var s=0,r=A.a2(t.H),q,p=this,o,n,m,l
var $async$qx=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:o=A.aA(p.br$,!0,t.nR),n=o.length,m=J.aJ(a),l=0
case 3:if(!(l<n)){s=5
break}s=6
return A.a4(o[l].a2f(new A.pr(A.bD(m.j(a,"location")),m.j(a,"state"))),$async$qx)
case 6:if(c){s=1
break}case 4:++l
s=3
break
case 5:case 1:return A.a0(q,r)}})
return A.a1($async$qx,r)},
Vu(a){switch(a.a){case"popRoute":return this.tr()
case"pushRoute":return this.ts(A.bD(a.b))
case"pushRouteInformation":return this.qx(t.G.a(a.b))}return A.bF(null,t.z)},
UO(){this.z5()},
MW(a){A.cb(B.u,new A.aaB(this,a))},
$ian:1,
$idE:1}
A.ag2.prototype={
$1(a){var s,r,q=$.bP
q.toString
s=this.a
r=s.a
r.toString
q.LA(r)
s.a=null
this.b.df$.eR(0)},
$S:113}
A.aaB.prototype={
$0(){var s,r,q=this.a,p=q.dg$
q.fZ$=!0
s=q.aE$
s===$&&A.b()
s=s.e
s.toString
r=q.a4$
r.toString
q.dg$=new A.mP(this.b,s,"[root]",new A.kf(s,t.l9),t.go).a0g(r,t.jv.a(p))
if(p==null)$.bP.z5()},
$S:0}
A.mP.prototype={
bU(a){return new A.kI(this,B.a5,this.$ti.h("kI<1>"))},
aD(a){return this.d},
aL(a,b){},
a0g(a,b){var s,r={}
r.a=b
if(b==null){a.KJ(new A.a4r(r,this,a))
s=r.a
s.toString
a.rA(s,new A.a4s(r))}else{b.bm=this
b.h4()}r=r.a
r.toString
return r},
c0(){return this.e}}
A.a4r.prototype={
$0(){var s=this.b,r=A.ayQ(s,s.$ti.c)
this.a.a=r
r.r=this.c},
$S:0}
A.a4s.prototype={
$0(){var s=this.a.a
s.toString
s.CY(null,null)
s.qT()},
$S:0}
A.kI.prototype={
aV(a){var s=this.aO
if(s!=null)a.$1(s)},
jl(a){this.aO=null
this.l8(a)},
fB(a,b){this.CY(a,b)
this.qT()},
bf(a,b){this.n9(0,b)
this.qT()},
hR(){var s=this,r=s.bm
if(r!=null){s.bm=null
s.n9(0,s.$ti.h("mP<1>").a(r))
s.qT()}s.CX()},
qT(){var s,r,q,p,o,n,m,l=this
try{o=l.aO
n=l.f
n.toString
l.aO=l.e0(o,l.$ti.h("mP<1>").a(n).c,B.mR)}catch(m){s=A.ae(m)
r=A.au(m)
o=A.bo("attaching to the render tree")
q=new A.bJ(s,r,"widgets library",o,null,!1)
A.e6(q)
p=A.ajg(q)
l.aO=l.e0(null,p,B.mR)}},
gaa(){return this.$ti.h("aG<1>").a(A.bC.prototype.gaa.call(this))},
jq(a,b){var s=this.$ti
s.h("aG<1>").a(A.bC.prototype.gaa.call(this)).saX(s.c.a(a))},
jv(a,b,c){},
jH(a,b){this.$ti.h("aG<1>").a(A.bC.prototype.gaa.call(this)).saX(null)}}
A.LG.prototype={$ian:1}
A.A6.prototype={
f0(){this.NI()
$.em=this
var s=$.aN()
s.Q=this.gVB()
s.as=$.a8},
Be(){this.NL()
this.wf()}}
A.A7.prototype={
f0(){this.QN()
$.bP=this},
iz(){this.NJ()}}
A.A8.prototype={
f0(){var s,r,q,p,o=this
o.QP()
$.he=o
o.aN$!==$&&A.eA()
o.aN$=B.Eh
s=new A.wg(A.b3(t.hp),$.by())
B.iB.mX(s.gXb())
o.aQ$=s
s=t.F3
r=new A.a_p(A.y(s,t.lT),A.b3(t.vQ),A.a([],t.AV))
o.ae$!==$&&A.eA()
o.ae$=r
q=$.aiC()
p=A.a([],t.DG)
o.al$!==$&&A.eA()
s=o.al$=new A.FP(r,q,p,A.b3(s))
p=$.aN()
p.at=s.ga3c()
p.ax=$.a8
B.CR.uT(s.ga3v())
s=$.anv
if(s==null)s=$.anv=A.a([],t.e8)
s.push(o.gRO())
B.CT.uT(new A.ag4(o))
B.CS.uT(o.gVq())
B.c0.mX(o.gVz())
$.asm()
o.a5W()},
iz(){this.QQ()}}
A.A9.prototype={
f0(){this.QR()
$.eS=this
var s=t.K
this.fY$=new A.a0f(A.y(s,t.fx),A.y(s,t.lM),A.y(s,t.s8))},
oS(){this.PO()
var s=this.fY$
s===$&&A.b()
s.a0(0)},
jn(a){return this.a3B(a)},
a3B(a){var s=0,r=A.a2(t.H),q,p=this
var $async$jn=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:s=3
return A.a4(p.PP(a),$async$jn)
case 3:switch(A.bD(J.aO(t.a.a(a),"type"))){case"fontsChange":p.zb$.av()
break}s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$jn,r)}}
A.Aa.prototype={
f0(){this.QU()
$.a6f=this
this.za$=$.aN().a.a}}
A.Ab.prototype={
f0(){var s,r,q,p,o=this
o.QV()
$.kJ=o
s=t.By
o.aE$=new A.IV(o.ga2u(),o.gW4(),o.gW8(),o.gW6(),A.a([],s),A.a([],s),A.a([],s),A.b3(t.d))
s=$.aN()
s.f=o.ga3i()
r=s.r=$.a8
s.fy=o.ga3K()
s.go=r
s.k2=o.ga3o()
s.k3=r
s.p1=o.gW2()
s.p2=r
s.p3=o.gW0()
s.p4=r
r=new A.wc(B.R,o.IN(),$.cq(),null,A.aw())
r.aH()
r.saX(null)
q=o.aE$
q===$&&A.b()
q.sa6y(r)
r=o.aE$.e
r.Q=r
q=t.W
q.a(A.L.prototype.gbx.call(r)).r.push(r)
p=r.Hu()
r.ch.saZ(0,p)
q.a(A.L.prototype.gbx.call(r)).z.push(r)
o.Nl(s.a.c)
o.dx$.push(o.gVx())
s=o.b5$
if(s!=null)s.m()
s=t.S
r=$.by()
o.b5$=new A.HZ(new A.a2e(B.lM,A.y(s,t.Df)),A.y(s,t.eg),r)
o.dy$.push(o.gWl())},
iz(){this.QS()},
yW(a,b,c){this.b5$.a73(b,new A.ag3(this,c,b))
this.O8(0,b,c)},
iF(){var s=0,r=A.a2(t.H),q=[],p=this,o
var $async$iF=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:s=2
return A.a4(p.NK(),$async$iF)
case 2:o=$.aml
if((o==null?null:o.a)==null)try{o=p.aE$
o===$&&A.b()
o.e.f7()}finally{}p.uK()
s=3
return A.a4(p.gJl(),$async$iF)
case 3:return A.a0(null,r)}})
return A.a1($async$iF,r)}}
A.Ac.prototype={
iz(){this.QX()},
zq(){var s,r,q
this.Pk()
for(s=this.br$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].rU()},
zw(){var s,r,q
this.Pm()
for(s=this.br$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].IW()},
zs(){var s,r,q
this.Pl()
for(s=this.br$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].IV()},
tp(a){var s,r,q
this.PB(a)
for(s=this.br$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].IU(a)},
oS(){var s,r
this.QT()
for(s=this.br$.length,r=0;r<s;++r);},
z1(){var s,r,q=this,p={}
p.a=null
if(q.de$){s=new A.ag2(p,q)
p.a=s
$.bP.a04(s)}try{r=q.dg$
if(r!=null)q.a4$.a0t(r)
q.Pj()
q.a4$.a2L()}finally{}r=q.de$=!1
p=p.a
if(p!=null)r=!(q.bm$||q.aO$===0)
if(r){q.de$=!0
r=$.bP
r.toString
p.toString
r.LA(p)}},
iF(){var s=this.dg$
if(s!=null)this.a4$.a60(s,$.aml)
return this.QY()}}
A.DJ.prototype={
aD(a){var s=new A.Jt(this.e,this.f,A.alg(a,null),null,A.aw())
s.aH()
s.saX(null)
return s},
aL(a,b){b.sa2_(this.e)
b.syr(A.alg(a,null))
b.sbA(0,this.f)}}
A.og.prototype={
gXP(){var s,r=this.r
if(r==null||r.gdG(r)==null)return this.e
s=r.gdG(r)
r=this.e
if(r==null)return s
s.toString
return r.B(0,s)},
L(a){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){s=o.x
if(s!=null)s=!(s.a>=s.b&&s.c>=s.d)
else s=!0}else s=!1
if(s)m=A.ax8(new A.fN(B.mj,n,n),0,0)
else{s=o.d
if(s!=null)m=new A.lx(s,n,n,m,n)}r=o.gXP()
if(r!=null)m=new A.hZ(r,m,n)
s=o.f
if(s!=null)m=new A.t2(s,m,n)
s=o.as
if(s!==B.l){q=A.dR(a)
p=o.r
p.toString
m=A.amz(m,s,new A.MU(q==null?B.t:q,p))}s=o.r
if(s!=null)m=A.amN(m,s,B.hB)
s=o.x
if(s!=null)m=new A.fN(s,m,n)
s=o.y
if(s!=null)m=new A.hZ(s,m,n)
m.toString
return m}}
A.MU.prototype={
Bx(a){return this.c.uz(new A.C(0,0,0+a.a,0+a.b),this.b)},
C9(a){return!a.c.k(0,this.c)||a.b!==this.b}}
A.ok.prototype={
c1(a){return!J.f(this.w,a.w)||!J.f(this.x,a.x)}}
A.OQ.prototype={
L(a){throw A.c(A.F_("A DefaultSelectionStyle constructed with DefaultSelectionStyle.fallback cannot be incorporated into the widget tree, it is meant only to provide a fallback value returned by DefaultSelectionStyle.of() when no enclosing default selection style is present in a BuildContext."))}}
A.DR.prototype={
Ui(){var s=$.as_()
return s},
L(a){var s=this.c,r=this.Ui()
if(r!=null)s=A.ak5(s,"<Web Disabling Text Editing Shortcuts>",r)
return A.ak5(s,"<Default Text Editing Shortcuts>",A.avz())}}
A.E0.prototype={
gan(a){var s=this.a
if(s==null)return null
s=s.c
s.toString
return s}}
A.oo.prototype={
ak(){return new A.y3(A.J9(null),A.J9(null),B.m)},
a31(a,b,c){return this.d.$3(a,b,c)},
a6v(a,b,c){return this.e.$3(a,b,c)}}
A.y3.prototype={
az(){var s,r=this
r.aW()
s=r.a.c
r.d=s.gb0(s)
r.a.c.cR(r.gvt())
r.Hg()},
Dy(a){var s,r=this,q=r.d
q===$&&A.b()
s=r.Sj(a,q)
r.d=s
if(q!==s)r.Hg()},
aY(a){var s,r,q=this
q.bp(a)
s=a.c
if(s!==q.a.c){r=q.gvt()
s.c_(r)
q.a.c.cR(r)
r=q.a.c
q.Dy(r.gb0(r))}},
Sj(a,b){switch(a.a){case 0:case 3:return a
case 1:switch(b.a){case 0:case 3:case 1:return a
case 2:return b}break
case 2:switch(b.a){case 0:case 3:case 2:return a
case 1:return b}break}},
Hg(){var s=this,r=s.d
r===$&&A.b()
switch(r.a){case 0:case 1:s.e.saJ(0,s.a.c)
s.f.saJ(0,B.ce)
break
case 2:case 3:s.e.saJ(0,B.cX)
s.f.saJ(0,new A.eV(s.a.c,new A.bk(A.a([],t.A),t.Q),0))
break}},
m(){this.a.c.c_(this.gvt())
this.aS()},
L(a){var s=this.a
return s.a31(a,this.e,s.a6v(a,this.f,s.f))}}
A.j_.prototype={
F(){return"KeyEventResult."+this.b}}
A.M6.prototype={}
A.Zs.prototype={
ah(a){var s,r=this.a
if(r.ax===this){if(!r.gjo()){s=r.w
s=s!=null&&s.w===r}else s=!0
if(s)r.M6(B.Cg)
s=r.w
if(s!=null){if(s.f===r)s.f=null
s.r.u(0,r)}s=r.Q
if(s!=null)s.YB(0,r)
r.ax=null}},
AX(a){var s,r=this.a
if(r.ax===this){s=r.e
s.toString
a=A.awz(s,!0);(a==null?r.e.r.f.e:a).xf(r)}},
LB(){return this.AX(null)}}
A.xA.prototype={
F(){return"UnfocusDisposition."+this.b}}
A.cH.prototype={
gej(){var s,r,q
if(this.a)return!0
for(s=this.gfQ(),r=s.length,q=0;q<r;++q)s[q].toString
return!1},
sej(a){var s,r=this
if(a!==r.a){r.a=a
s=r.w
if(s!=null){s.qI()
s.r.B(0,r)}}},
gcq(){var s,r,q,p
if(!this.b)return!1
s=this.gdR()
if(s!=null&&!s.gcq())return!1
for(r=this.gfQ(),q=r.length,p=0;p<q;++p)r[p].toString
return!0},
scq(a){var s,r=this
if(a!==r.b){r.b=a
if(r.gkF()&&!a)r.M6(B.Cg)
s=r.w
if(s!=null){s.qI()
s.r.B(0,r)}}},
slW(a){return},
slX(a){},
gon(){var s,r,q,p,o=this.y
if(o==null){s=A.a([],t.i4)
for(o=this.as,r=o.length,q=0;q<o.length;o.length===r||(0,A.P)(o),++q){p=o[q]
B.c.J(s,p.gon())
s.push(p)}this.y=s
o=s}return o},
gpF(){var s=this.gon()
return new A.aH(s,new A.Zt(),A.aj(s).h("aH<1>"))},
gfQ(){var s,r,q=this.x
if(q==null){s=A.a([],t.i4)
r=this.Q
for(;r!=null;){s.push(r)
r=r.Q}this.x=s
q=s}return q},
gkF(){if(!this.gjo()){var s=this.w
if(s==null)s=null
else{s=s.f
s=s==null?null:B.c.A(s.gfQ(),this)}s=s===!0}else s=!0
return s},
gjo(){var s=this.w
return(s==null?null:s.f)===this},
gkK(){return this.gdR()},
gdR(){var s,r,q,p
for(s=this.gfQ(),r=s.length,q=0;q<r;++q){p=s[q]
if(p instanceof A.m3)return p}return null},
gaR(a){var s,r=this.e.gaa(),q=r.bB(0,null),p=r.gjT(),o=A.cw(q,new A.t(p.a,p.b))
p=r.bB(0,null)
q=r.gjT()
s=A.cw(p,new A.t(q.c,q.d))
return new A.C(o.a,o.b,s.a,s.b)},
M6(a){var s,r,q=this
if(!q.gkF()){s=q.w
s=s==null||s.w!==q}else s=!1
if(s)return
r=q.gdR()
if(r==null)return
switch(a.a){case 0:if(r.gcq())B.c.a0(r.dy)
for(;!r.gcq();){r=r.gdR()
if(r==null){s=q.w
r=s==null?null:s.e}}r.iU(!1)
break
case 1:if(r.gcq())B.c.u(r.dy,q)
for(;!r.gcq();){s=r.gdR()
if(s!=null)B.c.u(s.dy,r)
r=r.gdR()
if(r==null){s=q.w
r=s==null?null:s.e}}r.iU(!0)
break}},
Fw(a){var s=this,r=s.w
if(r!=null){if(r.f===s)r.w=null
else{r.w=s
r.qI()}return}a.lF()
a.x_()
if(a!==s)s.x_()},
G6(a,b,c){var s,r,q
if(c){s=b.gdR()
if(s!=null)B.c.u(s.dy,b)}b.Q=null
B.c.u(this.as,b)
for(s=this.gfQ(),r=s.length,q=0;q<r;++q)s[q].y=null
this.y=null},
YB(a,b){return this.G6(a,b,!0)},
a_f(a){var s,r,q,p
this.w=a
for(s=this.gon(),r=s.length,q=0;q<r;++q){p=s[q]
p.w=a
p.x=null}},
xf(a){var s,r,q,p,o,n=this
if(a.Q===n)return
s=a.gdR()
r=a.gkF()
q=a.Q
if(q!=null)q.G6(0,a,s!=n.gkK())
n.as.push(a)
a.Q=n
a.x=null
a.a_f(n.w)
for(q=a.gfQ(),p=q.length,o=0;o<p;++o)q[o].y=null
if(r){q=n.w
if(q!=null){q=q.f
if(q!=null)q.lF()}}if(s!=null&&a.e!=null&&a.gdR()!==s){q=a.e
q.toString
q=A.an8(q)
if(q!=null)q.yo(a,s)}if(a.ay){a.iU(!0)
a.ay=!1}},
m(){var s=this.ax
if(s!=null)s.ah(0)
this.e2()},
x_(){var s=this
if(s.Q==null)return
if(s.gjo())s.lF()
s.av()},
uk(){this.iU(!0)},
iU(a){var s,r=this
if(!r.gcq())return
if(r.Q==null){r.ay=!0
return}r.lF()
if(r.gjo()){s=r.w.w
s=s==null||s===r}else s=!1
if(s)return
r.Fw(r)},
lF(){var s,r,q,p,o,n
for(s=B.c.ga5(this.gfQ()),r=new A.qc(s,t.oj),q=t.j5,p=this;r.q();p=o){o=q.a(s.gG(s))
n=o.dy
B.c.u(n,p)
n.push(p)}},
c0(){var s,r,q,p=this
p.gkF()
s=p.gkF()&&!p.gjo()?"[IN FOCUS PATH]":""
r=s+(p.gjo()?"[PRIMARY FOCUS]":"")
s=A.bM(p)
q=r.length!==0?"("+r+")":""
return"<optimized out>#"+s+q},
$iab:1}
A.Zt.prototype={
$1(a){return!a.gej()&&a.gcq()},
$S:14}
A.m3.prototype={
gkK(){return this},
gpF(){if(!this.gcq())return B.Dr
return A.cH.prototype.gpF.call(this)},
mW(a){if(a.Q==null)this.xf(a)
if(this.gkF())a.iU(!0)
else a.lF()},
iU(a){var s,r,q=this,p=q.dy
while(!0){if((p.length!==0?B.c.gS(p):null)!=null)s=!(p.length!==0?B.c.gS(p):null).gcq()
else s=!1
if(!s)break
p.pop()}r=p.length!==0?B.c.gS(p):null
if(!a||r==null){if(q.gcq()){q.lF()
q.Fw(q)}return}r.iU(!0)}}
A.iV.prototype={
F(){return"FocusHighlightMode."+this.b}}
A.F3.prototype={
F(){return"FocusHighlightStrategy."+this.b}}
A.u2.prototype={
Ht(){var s,r,q=this
switch(0){case 0:s=q.c
if(s==null)return
r=s?B.hH:B.eh
break}s=q.b
if(s==null)s=A.F4()
q.b=r
if((r==null?A.F4():r)!==s)q.Xp()},
Xp(){var s,r,q,p,o,n,m,l,k,j=this,i=j.d,h=i.a
if(h.a===0)return
p=A.aA(i,!0,t.tP)
for(i=p.length,o=0;o<i;++o){s=p[o]
try{if(h.R(0,s)){n=j.b
if(n==null)n=A.F4()
s.$1(n)}}catch(m){r=A.ae(m)
q=A.au(m)
l=j instanceof A.bR?A.cR(j):null
n=A.bo("while dispatching notifications for "+A.aD(l==null?A.aT(j):l).i(0))
k=$.fJ()
if(k!=null)k.$1(new A.bJ(r,q,"widgets library",n,null,!1))}}},
U3(a){var s,r,q=this
switch(a.gci(a).a){case 0:case 2:case 3:q.c=!0
s=B.hH
break
case 1:case 4:case 5:q.c=!1
s=B.eh
break
default:s=null}r=q.b
if(s!==(r==null?A.F4():r))q.Ht()},
Vp(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.c=!1
i.Ht()
s=i.f
if(s==null)return!1
s=A.a([s],t.i4)
B.c.J(s,i.f.gfQ())
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
switch(A.aDd(k).a){case 1:break c$1
case 0:r=!0
break
case 2:r=!1
break
default:r=!1}break}s.length===q||(0,A.P)(s);++m}return r},
qI(){if(this.y)return
this.y=!0
A.dP(this.gS0())},
S1(){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.y=!1
s=h.f
for(r=h.x,q=r.length,p=h.e,o=0;o<r.length;r.length===q||(0,A.P)(r),++o){n=r[o]
m=n.a
if(m.Q!=null||m===p)if(m.w===h){l=m.dy
m=(l.length!==0?B.c.gS(l):null)==null&&B.c.A(n.b.gfQ(),m)
k=m}else k=!1
else k=!1
if(k)n.b.iU(!0)}B.c.a0(r)
r=h.f
if(r==null&&h.w==null)h.w=p
q=h.w
if(q!=null&&q!==r){if(s==null)j=null
else{r=s.gfQ()
r=A.uD(r,A.aj(r).c)
j=r}if(j==null)j=A.b3(t.lc)
r=h.w.gfQ()
i=A.uD(r,A.aj(r).c)
r=h.r
r.J(0,i.ku(j))
r.J(0,j.ku(i))
r=h.f=h.w
h.w=null}if(s!=r){if(s!=null)h.r.B(0,s)
r=h.f
if(r!=null)h.r.B(0,r)}for(r=h.r,q=A.jy(r,r.r),p=A.n(q).c;q.q();){m=q.d;(m==null?p.a(m):m).x_()}r.a0(0)
if(s!=h.f)h.av()},
$iab:1}
A.Ny.prototype={}
A.Nz.prototype={}
A.NA.prototype={}
A.NB.prototype={}
A.m2.prototype={
gKZ(){var s=this.w,r=this.e
s=r==null?null:r.r
return s},
gAq(){var s=this.x
if(s==null){s=this.e
s=s==null?null:s.f}return s},
gcq(){var s=this.y
if(s==null){s=this.e
s=s==null?null:s.gcq()}return s!==!1},
gej(){var s=this.z
if(s==null){s=this.e
s=s==null?null:s.gej()}return s===!0},
glW(){var s=this.Q
if(s==null)s=this.e!=null||null
return s!==!1},
glX(){var s=this.as
if(s==null)s=this.e!=null||null
return s!==!1},
glV(){var s=this.ax
if(s==null){s=this.e
s=s==null?null:s.at}return s},
ak(){return A.aAj()}}
A.qr.prototype={
gbZ(a){var s=this.a.e
if(s==null){s=this.d
s.toString}return s},
az(){this.aW()
this.Fc()},
Fc(){var s,r,q,p=this
if(p.a.e==null)if(p.d==null)p.d=p.Eb()
s=p.gbZ(p)
p.a.glW()
s.slW(!0)
s=p.gbZ(p)
p.a.glX()
s.slX(!0)
p.a.gej()
p.gbZ(p).sej(p.a.gej())
if(p.a.y!=null){s=p.gbZ(p)
r=p.a.y
r.toString
s.scq(r)}p.f=p.gbZ(p).gcq()
p.gbZ(p)
p.r=!0
p.gbZ(p)
p.w=!0
p.e=p.gbZ(p).gjo()
s=p.gbZ(p)
r=p.c
r.toString
p.a.gKZ()
q=p.a.gAq()
s.e=r
s.f=q==null?s.f:q
r=s.r
s.r=r
p.y=s.ax=new A.Zs(s)
p.gbZ(p).Z(0,p.gwA())},
Eb(){var s=this,r=s.a.glV(),q=s.a.gcq()
s.a.glW()
s.a.glX()
return A.ajn(q,r,!0,!0,null,null,s.a.gej())},
m(){var s,r=this
r.gbZ(r).H(0,r.gwA())
r.y.ah(0)
s=r.d
if(s!=null)s.m()
r.aS()},
b4(){this.cG()
var s=this.y
if(s!=null)s.LB()
this.EV()},
EV(){var s,r,q,p=this
if(!p.x&&p.a.f){s=p.c
s.toString
s=A.awy(s)
r=p.gbZ(p)
if(r.Q==null)s.xf(r)
q=s.w
if(q!=null)q.x.push(new A.M6(s,r))
s=s.w
if(s!=null)s.qI()
p.x=!0}},
dD(){this.nb()
var s=this.y
if(s!=null)s.LB()
this.x=!1},
aY(a){var s,r,q=this
q.bp(a)
s=a.e
r=q.a
if(s==r.e){if(!J.f(r.gAq(),q.gbZ(q).f))q.gbZ(q).f=q.a.gAq()
q.a.gKZ()
q.gbZ(q)
q.a.gej()
q.gbZ(q).sej(q.a.gej())
if(q.a.y!=null){s=q.gbZ(q)
r=q.a.y
r.toString
s.scq(r)}s=q.gbZ(q)
q.a.glW()
s.slW(!0)
s=q.gbZ(q)
q.a.glX()
s.slX(!0)}else{q.y.ah(0)
if(s!=null)s.H(0,q.gwA())
q.Fc()}if(a.f!==q.a.f)q.EV()},
Vh(){var s,r=this,q=r.gbZ(r).gjo(),p=r.gbZ(r).gcq()
r.gbZ(r)
r.gbZ(r)
s=r.a.r
if(s!=null)s.$1(r.gbZ(r).gkF())
s=r.e
s===$&&A.b()
if(s!==q)r.ar(new A.aca(r,q))
s=r.f
s===$&&A.b()
if(s!==p)r.ar(new A.acb(r,p))
s=r.r
s===$&&A.b()
if(!s)r.ar(new A.acc(r,!0))
s=r.w
s===$&&A.b()
if(!s)r.ar(new A.acd(r,!0))},
L(a){var s,r,q=this,p=null,o=q.y
o.toString
o.AX(q.a.c)
o=q.a
s=o.d
if(o.at){o=q.f
o===$&&A.b()
r=q.e
r===$&&A.b()
s=A.dK(p,s,!1,p,!1,o,r,p,p,p,p,p,p,p,p,p,p,p,p,p,p)}return A.apb(s,q.gbZ(q))}}
A.aca.prototype={
$0(){this.a.e=this.b},
$S:0}
A.acb.prototype={
$0(){this.a.f=this.b},
$S:0}
A.acc.prototype={
$0(){this.a.r=this.b},
$S:0}
A.acd.prototype={
$0(){this.a.w=this.b},
$S:0}
A.F5.prototype={
ak(){return new A.NC(B.m)}}
A.NC.prototype={
Eb(){var s=this.a.glV()
return A.ajo(this.a.gcq(),s,this.a.gej())},
L(a){var s=this,r=null,q=s.y
q.toString
q.AX(s.a.c)
q=s.gbZ(s)
return A.dK(r,A.apb(s.a.d,q),!1,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)}}
A.ye.prototype={}
A.agN.prototype={
$1(a){var s=this.a
if(--s.a===0){s.b=a
return!1}return!0},
$S:45}
A.qs.prototype={}
A.nl.prototype={
F(){return"TraversalDirection."+this.b}}
A.F6.prototype={
Ey(a,b,c){var s,r=a.gkK(),q=r.dy,p=q.length!==0?B.c.gS(q):null
q=p==null&&r.gon().length!==0
if(q){s=this.GO(r,a)
if(s.length===0)p=null
else p=b?B.c.gS(s):B.c.gK(s)}return p==null?a:p},
TU(a,b){return this.Ey(a,!1,b)},
a4m(a){},
yo(a,b){},
Up(a){var s
if(a==null)s=null
else{s=a.jP(t.AB)
if(s==null)s=null
else{s=s.f
s.toString}}return t.fc.a(s)},
GO(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=this.Up(a.e),c=d==null,b=c?e:d.f
if(b==null)b=new A.w0(A.y(t.j5,t.uJ))
s=A.y(t.k_,t.hF)
for(r=a.gon(),q=r.length,p=t.fc,o=t.AB,n=t.i4,m=0;m<r.length;r.length===q||(0,A.P)(r),++m){l=r[m]
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
h=A.aq6(k,2)
if(h==null)k=e
else{k=h.y
j=k==null?e:k.j(0,A.aD(o))
if(j==null)k=e
else{k=j.f
k.toString}}p.a(k)
g=k==null?e:k.r
if(s.j(0,g)==null)s.l(0,g,A.apc(k,b,A.a([],n)))
s.j(0,g).c.push(i)
continue}if(l.gcq()&&!l.gej()){if(s.j(0,i)==null)s.l(0,i,A.apc(k,b,A.a([],n)))
s.j(0,i).c.push(l)}}for(r=A.j1(s,s.r);r.q();){q=r.d
p=s.j(0,q).b.Nv(s.j(0,q).c,a0)
p=A.a(p.slice(0),A.aj(p))
B.c.a0(s.j(0,q).c)
B.c.J(s.j(0,q).c,p)}f=A.a([],n)
if(s.a!==0)r=s.R(0,c?e:d.r)
else r=!1
if(r){r=s.j(0,c?e:d.r)
r.toString
new A.Zv(s,f).$1(r)}if(!!f.fixed$length)A.K(A.O("removeWhere"))
B.c.nJ(f,new A.Zu(),!0)
return f},
FC(a,b){var s,r,q,p,o,n,m=this,l=a.gkK()
l.toString
m.l9(l)
m.ir$.u(0,l)
s=l.dy
r=s.length!==0?B.c.gS(s):null
if(r==null){q=b?m.TU(a,!1):m.Ey(a,!0,!1)
A.lj(q,b?B.cI:B.cJ)
return!0}p=m.GO(l,a)
if(p.length===0)return!1
if(b&&r===B.c.gS(p)){A.lj(B.c.gK(p),B.cI)
return!0}if(!b&&r===B.c.gK(p)){A.lj(B.c.gS(p),B.cJ)
return!0}for(l=J.at(b?p:new A.cy(p,A.aj(p).h("cy<1>"))),o=null;l.q();o=n){n=l.gG(l)
if(o==r){l=b?B.cI:B.cJ
n.uk()
s=n.e
s.toString
A.aot(s,1,l)
return!0}}return!1}}
A.Zv.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=a.c,r=s.length,q=this.b,p=this.a,o=0;o<s.length;s.length===r||(0,A.P)(s),++o){n=s[o]
if(p.R(0,n)){m=p.j(0,n)
m.toString
this.$1(m)}else q.push(n)}},
$S:432}
A.Zu.prototype={
$1(a){return!a.gcq()||a.gej()},
$S:14}
A.qm.prototype={}
A.N4.prototype={}
A.Wj.prototype={
a2N(a,b){var s=this
switch(b.a){case 0:return s.r1(a,!1,!0)
case 2:return s.r1(a,!0,!0)
case 3:return s.r1(a,!1,!1)
case 1:return s.r1(a,!0,!1)}},
r1(a,b,c){var s=a.gkK().gpF().e_(0)
A.nR(s,new A.Wr(c,b),t.lc)
if(s.length!==0)return B.c.gK(s)
return null},
ZB(a,b,c){var s,r=c.gpF().e_(0)
A.nR(r,new A.Wl(),t.lc)
switch(a.a){case 3:s=new A.aH(r,new A.Wm(b),A.aj(r).h("aH<1>"))
break
case 1:s=new A.aH(r,new A.Wn(b),A.aj(r).h("aH<1>"))
break
case 0:case 2:s=null
break
default:s=null}return s},
ZC(a,b,c){var s=c.e_(0)
A.nR(s,new A.Wo(),t.lc)
switch(a.a){case 0:return new A.aH(s,new A.Wp(b),A.aj(s).h("aH<1>"))
case 2:return new A.aH(s,new A.Wq(b),A.aj(s).h("aH<1>"))
case 3:case 1:break}return null},
Yi(a,b,c){var s,r,q=this,p=q.ir$,o=p.j(0,b),n=o!=null
if(n){s=o.a
s=s.length!==0&&B.c.gK(s).a!==a}else s=!1
if(s){s=o.a
if(B.c.gS(s).b.Q==null){q.l9(b)
p.u(0,b)
return!1}r=new A.Wk(q,o,b)
switch(a.a){case 2:case 0:switch(B.c.gK(s).a.a){case 3:case 1:q.l9(b)
p.u(0,b)
break
case 0:case 2:if(r.$1(a))return!0
break}break
case 3:case 1:switch(B.c.gK(s).a.a){case 3:case 1:if(r.$1(a))return!0
break
case 0:case 2:q.l9(b)
p.u(0,b)
break}break}}if(n&&o.a.length===0){q.l9(b)
p.u(0,b)}return!1},
a45(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=a.gkK(),f=g.dy,e=f.length!==0?B.c.gS(f):h
if(e==null){s=i.a2N(a,b)
if(s==null)s=a
switch(b.a){case 0:case 3:A.lj(s,B.cJ)
break
case 1:case 2:A.lj(s,B.cI)
break}return!0}if(i.Yi(b,g,e))return!0
f=e.e
f.toString
r=A.ic(f)
f=b.a
switch(f){case 2:case 0:q=i.ZC(b,e.gaR(e),g.gpF())
if(r!=null&&!r.d.gI8()){q.toString
p=new A.aH(q,new A.Ws(r),q.$ti.h("aH<o.E>"))
if(!p.gN(p))q=p}if(!q.ga5(q).q()){o=h
break}n=A.aA(q,!0,A.n(q).h("o.E"))
if(b===B.ZJ){m=A.aj(n).h("cy<1>")
n=A.aA(new A.cy(n,m),!0,m.h("bm.E"))}l=new A.aH(n,new A.Wt(new A.C(e.gaR(e).a,-1/0,e.gaR(e).c,1/0)),A.aj(n).h("aH<1>"))
if(!l.gN(l)){o=l.gK(l)
break}A.nR(n,new A.Wu(e),t.lc)
o=B.c.gK(n)
break
case 1:case 3:q=i.ZB(b,e.gaR(e),g)
if(r!=null&&!r.d.gI8()){q.toString
p=new A.aH(q,new A.Wv(r),q.$ti.h("aH<o.E>"))
if(!p.gN(p))q=p}if(!q.ga5(q).q()){o=h
break}n=A.aA(q,!0,A.n(q).h("o.E"))
if(b===B.ZK){m=A.aj(n).h("cy<1>")
n=A.aA(new A.cy(n,m),!0,m.h("bm.E"))}l=new A.aH(n,new A.Ww(new A.C(-1/0,e.gaR(e).b,1/0,e.gaR(e).d)),A.aj(n).h("aH<1>"))
if(!l.gN(l)){o=l.gK(l)
break}A.nR(n,new A.Wx(e),t.lc)
o=B.c.gK(n)
break
default:o=h}if(o!=null){m=i.ir$
k=m.j(0,g)
j=new A.qm(b,e)
if(k!=null)k.a.push(j)
else m.l(0,g,new A.N4(A.a([j],t.gE)))
switch(f){case 0:case 3:A.lj(o,B.cJ)
break
case 2:case 1:A.lj(o,B.cI)
break}return!0}return!1}}
A.aew.prototype={
$1(a){return a.b===this.a},
$S:289}
A.Wr.prototype={
$2(a,b){if(this.a)if(this.b)return B.d.aC(a.gaR(a).b,b.gaR(b).b)
else return B.d.aC(b.gaR(b).d,a.gaR(a).d)
else if(this.b)return B.d.aC(a.gaR(a).a,b.gaR(b).a)
else return B.d.aC(b.gaR(b).c,a.gaR(a).c)},
$S:34}
A.Wl.prototype={
$2(a,b){return B.d.aC(a.gaR(a).gaI().a,b.gaR(b).gaI().a)},
$S:34}
A.Wm.prototype={
$1(a){var s=this.a
return!a.gaR(a).k(0,s)&&a.gaR(a).gaI().a<=s.a},
$S:14}
A.Wn.prototype={
$1(a){var s=this.a
return!a.gaR(a).k(0,s)&&a.gaR(a).gaI().a>=s.c},
$S:14}
A.Wo.prototype={
$2(a,b){return B.d.aC(a.gaR(a).gaI().b,b.gaR(b).gaI().b)},
$S:34}
A.Wp.prototype={
$1(a){var s=this.a
return!a.gaR(a).k(0,s)&&a.gaR(a).gaI().b<=s.b},
$S:14}
A.Wq.prototype={
$1(a){var s=this.a
return!a.gaR(a).k(0,s)&&a.gaR(a).gaI().b>=s.d},
$S:14}
A.Wk.prototype={
$1(a){var s,r,q=this.b.a.pop().b,p=q.e
p.toString
p=A.ic(p)
s=$.ai.a4$.f.f.e
s.toString
if(p!=A.ic(s)){p=this.a
s=this.c
p.l9(s)
p.ir$.u(0,s)
return!1}switch(a.a){case 0:case 3:r=B.cJ
break
case 1:case 2:r=B.cI
break
default:r=null}A.lj(q,r)
return!0},
$S:291}
A.Ws.prototype={
$1(a){var s=a.e
s.toString
return A.ic(s)===this.a},
$S:14}
A.Wt.prototype={
$1(a){var s=a.gaR(a).fw(this.a)
return!s.gN(s)},
$S:14}
A.Wu.prototype={
$2(a,b){var s=this.a
return B.d.aC(Math.abs(a.gaR(a).gaI().a-s.gaR(s).gaI().a),Math.abs(b.gaR(b).gaI().a-s.gaR(s).gaI().a))},
$S:34}
A.Wv.prototype={
$1(a){var s=a.e
s.toString
return A.ic(s)===this.a},
$S:14}
A.Ww.prototype={
$1(a){var s=a.gaR(a).fw(this.a)
return!s.gN(s)},
$S:14}
A.Wx.prototype={
$2(a,b){var s=this.a
return B.d.aC(Math.abs(a.gaR(a).gaI().b-s.gaR(s).gaI().b),Math.abs(b.gaR(b).gaI().b-s.gaR(s).gaI().b))},
$S:34}
A.cP.prototype={
gJ_(){var s=this.d
if(s==null){s=this.c.e
s.toString
s=this.d=new A.aeu().$1(s)}s.toString
return s}}
A.aet.prototype={
$1(a){var s=a.gJ_()
return A.uD(s,A.aj(s).c)},
$S:292}
A.aev.prototype={
$2(a,b){switch(this.a.a){case 1:return B.d.aC(a.b.a,b.b.a)
case 0:return B.d.aC(b.b.c,a.b.c)}},
$S:121}
A.aeu.prototype={
$1(a){var s,r,q=A.a([],t.AG),p=t.I,o=a.jP(p)
for(;o!=null;){s=o.f
s.toString
q.push(p.a(s))
s=A.aq6(o,1)
if(s==null)o=null
else{s=s.y
r=s==null?null:s.j(0,A.aD(p))
o=r}}return q},
$S:294}
A.iv.prototype={
gaR(a){var s,r,q,p,o=this
if(o.b==null)for(s=o.a,s=new A.aC(s,new A.aer(),A.aj(s).h("aC<1,C>")),s=new A.bT(s,s.gp(s)),r=A.n(s).c;s.q();){q=s.d
if(q==null)q=r.a(q)
p=o.b
if(p==null){o.b=q
p=q}o.b=p.oG(q)}s=o.b
s.toString
return s}}
A.aer.prototype={
$1(a){return a.b},
$S:295}
A.aes.prototype={
$2(a,b){switch(this.a.a){case 1:return B.d.aC(a.gaR(a).a,b.gaR(b).a)
case 0:return B.d.aC(b.gaR(b).c,a.gaR(a).c)}},
$S:296}
A.w0.prototype={
SL(a){var s,r,q,p,o,n=B.c.gK(a).a,m=t.hY,l=A.a([],m),k=A.a([],t.lZ)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.P)(a),++r){q=a[r]
p=q.a
if(p==n){l.push(q)
continue}k.push(new A.iv(l))
l=A.a([q],m)
n=p}if(l.length!==0)k.push(new A.iv(l))
for(m=k.length,r=0;r<k.length;k.length===m||(0,A.P)(k),++r){s=k[r].a
if(s.length===1)continue
o=B.c.gK(s).a
o.toString
A.apl(s,o)}return k},
FX(a){var s,r,q,p
A.nR(a,new A.a4f(),t.dP)
s=B.c.gK(a)
r=new A.a4g().$2(s,a)
if(J.bI(r)<=1)return s
q=A.aAJ(r)
q.toString
A.apl(r,q)
p=this.SL(r)
if(p.length===1)return B.c.gK(B.c.gK(p).a)
A.aAI(p,q)
return B.c.gK(B.c.gK(p).a)},
Nv(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a.length<=1)return a
s=A.a([],t.hY)
for(r=a.length,q=t.n2,p=t.I,o=0;o<a.length;a.length===r||(0,A.P)(a),++o){n=a[o]
m=n.gaR(n)
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
A.a4f.prototype={
$2(a,b){return B.d.aC(a.b.b,b.b.b)},
$S:121}
A.a4g.prototype={
$2(a,b){var s=a.b,r=A.aj(b).h("aH<1>")
return A.aA(new A.aH(b,new A.a4h(new A.C(-1/0,s.b,1/0,s.d)),r),!0,r.h("o.E"))},
$S:297}
A.a4h.prototype={
$1(a){var s=a.b.fw(this.a)
return!s.gN(s)},
$S:298}
A.u3.prototype={
ak(){return new A.ND(B.m)}}
A.ND.prototype={
az(){this.aW()
this.d=A.ajn(!1,"FocusTraversalGroup",!0,!0,null,null,!0)},
m(){var s=this.d
if(s!=null)s.m()
this.aS()},
L(a){var s=null,r=this.a,q=r.c,p=this.d
p.toString
return new A.qt(q,p,A.F2(!1,!1,r.f,s,!0,!0,p,!1,s,s,s,s,s,!0),s)}}
A.qt.prototype={
c1(a){return!1}}
A.JQ.prototype={
di(a){A.lj(a.gbZ(a),B.Ue)}}
A.mx.prototype={}
A.I9.prototype={
di(a){var s=$.ai.a4$.f.f
s.e.a7(t.AB).f.FC(s,!0)}}
A.mN.prototype={}
A.J5.prototype={
di(a){var s=$.ai.a4$.f.f
s.e.a7(t.AB).f.FC(s,!1)}}
A.DY.prototype={
di(a){var s=$.ai.a4$.f.f,r=s.e.a7(t.AB)
r.f.a45(s,a.a)}}
A.NE.prototype={}
A.PM.prototype={
yo(a,b){var s
this.O7(a,b)
s=this.ir$.j(0,b)
if(s!=null){s=s.a
if(!!s.fixed$length)A.K(A.O("removeWhere"))
B.c.nJ(s,new A.aew(a),!0)}}}
A.Sn.prototype={}
A.So.prototype={}
A.en.prototype={
gbw(){var s,r=$.ai.a4$.z.j(0,this)
if(r instanceof A.fw){s=r.ok
s.toString
if(A.n(this).c.b(s))return s}return null}}
A.bB.prototype={
i(a){var s=this,r=s.a,q=r!=null?" "+r:""
if(A.A(s)===B.ZZ)return"[GlobalKey#"+A.bM(s)+q+"]"
return"["+("<optimized out>#"+A.bM(s))+q+"]"}}
A.kf.prototype={
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return this.$ti.b(b)&&b.a===this.a},
gt(a){return A.ls(this.a)},
i(a){var s="GlobalObjectKey",r=B.b.ip(s,"<State<StatefulWidget>>")?B.b.T(s,0,-8):s
return"["+r+" "+("<optimized out>#"+A.bM(this.a))+"]"}}
A.j.prototype={
c0(){var s=this.a
return s==null?"Widget":"Widget-"+s.i(0)},
k(a,b){if(b==null)return!1
return this.OO(0,b)},
gt(a){return A.B.prototype.gt.call(this,this)}}
A.b5.prototype={
bU(a){return new A.KO(this,B.a5)}}
A.af.prototype={
bU(a){return A.azr(this)}}
A.QS.prototype={
F(){return"_StateLifecycle."+this.b}}
A.al.prototype={
az(){},
aY(a){},
f7(){},
ar(a){a.$0()
this.c.h4()},
dD(){},
ce(){},
m(){},
b4(){}}
A.aS.prototype={}
A.dy.prototype={
bU(a){return new A.mz(this,B.a5,A.n(this).h("mz<dy.T>"))}}
A.b7.prototype={
bU(a){return A.awV(this)}}
A.aB.prototype={
aL(a,b){},
ov(a){}}
A.FT.prototype={
bU(a){return new A.FS(this,B.a5)}}
A.b4.prototype={
bU(a){return A.azi(this)}}
A.er.prototype={
bU(a){return A.axF(this)}}
A.ny.prototype={
F(){return"_ElementLifecycle."+this.b}}
A.NY.prototype={
He(a){a.aV(new A.ad1(this,a))
a.pG()},
a_4(){var s,r,q,p=this
p.a=!0
r=p.b
q=A.aA(r,!0,A.n(r).c)
B.c.dr(q,A.ahO())
s=q
r.a0(0)
try{r=s
new A.cy(r,A.aT(r).h("cy<1>")).Y(0,p.ga_2())}finally{p.a=!1}},
B(a,b){if(b.w===B.c9){b.dD()
b.aV(A.ahP())}this.b.B(0,b)}}
A.ad1.prototype={
$1(a){this.a.He(a)},
$S:8}
A.Uz.prototype={
BU(a){var s=this
if(a.at){s.e=!0
return}if(!s.d&&s.a!=null){s.d=!0
s.a.$0()}s.c.push(a)
a.at=!0},
KJ(a){try{a.$0()}finally{}},
rA(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=b==null
if(f&&h.c.length===0)return
try{h.d=!0
if(!f){g.a=null
h.e=!1
try{b.$0()}finally{}}f=h.c
B.c.dr(f,A.ahO())
h.e=!1
g.b=f.length
g.c=0
for(n=0;n<g.b;){s=f[n]
r=!1
if(r){n=s.f
n.toString
m=n instanceof A.bR?A.cR(n):null
A.akj(A.aD(m==null?A.aT(n):m).i(0),null,null)}try{s.Lq()}catch(l){q=A.ae(l)
p=A.au(l)
n=A.bo("while rebuilding dirty elements")
k=$.fJ()
if(k!=null)k.$1(new A.bJ(q,p,"widgets library",n,new A.UA(g,h,s),!1))}if(r)A.aki()
n=++g.c
k=g.b
j=f.length
if(k>=j){k=h.e
k.toString}else k=!0
if(k){if(!!f.immutable$list)A.K(A.O("sort"))
n=j-1
if(n-0<=32)A.KC(f,0,n,A.ahO())
else A.KB(f,0,n,A.ahO())
n=h.e=!1
g.b=f.length
while(!0){k=g.c
if(!(k>0?f[k-1].as:n))break
g.c=k-1}n=k}}}finally{for(f=h.c,n=f.length,i=0;i<n;++i){o=f[i]
o.at=!1}B.c.a0(f)
h.d=!1
h.e=null}},
a0t(a){return this.rA(a,null)},
a2L(){var s,r,q
try{this.KJ(this.b.ga_3())}catch(q){s=A.ae(q)
r=A.au(q)
A.al9(A.EJ("while finalizing the widget tree"),s,r,null)}finally{}},
a60(a,b){try{a.b=b
a.f7()}finally{}}}
A.UA.prototype={
$0(){var s=null,r=A.a([],t.F),q=this.a,p=q.c,o=this.b.c.length,n="The element being rebuilt at the time was index "+p
q=""+q.b
if(p<o)J.jU(r,A.hE(n+" of "+q,this.c,!0,B.aJ,s,!1,s,s,B.ap,s,!1,!0,!0,B.aW,s,t.h))
else J.jU(r,A.YY(n+" of "+q+", but _dirtyElements only had "+o+" entries. This suggests some confusion in the framework internals."))
return r},
$S:16}
A.vt.prototype={
yg(){var s=this.a
this.c=new A.ae9(this,s==null?null:s.c)}}
A.ae9.prototype={
d5(a){var s=this.a.L0(a)
if(s)return
s=this.b
if(s!=null)s.d5(a)}}
A.aV.prototype={
Rg(a){},
k(a,b){if(b==null)return!1
return this===b},
f7(){var s=this
if(A.apZ(s.b,s.f)){s.h4()
s.b=null}s.aV(new A.Yn(s))
s.b=null},
gaa(){var s,r
for(s=this;s!=null;){r={}
if(s.w===B.Co)break
else if(s instanceof A.bC)return s.gaa()
else{r.a=null
s.aV(new A.Yo(r))
s=r.a}}return null},
a2a(a){var s=null
return A.hE(a,this,!0,B.aJ,s,!1,s,s,B.ap,s,!1,!0,!0,B.aW,s,t.h)},
aV(a){},
e0(a,b,c){var s,r,q=this
if(b==null){if(a!=null)q.yD(a)
return null}if(a!=null){s=a.f.k(0,b)
if(s){if(!J.f(a.d,c))q.Mb(a,c)
s=a}else{s=a.f
s.toString
if(A.A(s)===A.A(b)&&J.f(s.a,b.a)){if(!J.f(a.d,c))q.Mb(a,c)
a.bf(0,b)
s=a}else{q.yD(a)
r=q.tB(b,c)
s=r}}}else{r=q.tB(b,c)
s=r}return s},
fB(a,b){var s,r,q,p=this
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
p.xM()
p.yg()},
bf(a,b){this.f=b},
Mb(a,b){new A.Yp(b).$1(a)},
xR(a){this.d=a},
Ho(a){var s=a+1,r=this.e
r===$&&A.b()
if(r<s){this.e=s
this.aV(new A.Yk(s))}},
op(){this.aV(new A.Ym())
this.d=null},
ru(a){this.aV(new A.Yl(a))
this.d=a},
YR(a,b){var s,r,q=$.ai.a4$.z.j(0,a)
if(q==null)return null
s=q.f
s.toString
if(!(A.A(s)===A.A(b)&&J.f(s.a,b.a)))return null
r=q.a
if(r!=null){r.jl(q)
r.yD(q)}this.r.b.b.u(0,q)
return q},
tB(a,b){var s,r,q,p,o,n,m=this,l=!1
if(l)A.akj(A.A(a).i(0),null,null)
try{s=a.a
if(s instanceof A.en){r=m.YR(s,a)
if(r!=null){o=r
o.a=m
o.toString
n=m.e
n===$&&A.b()
o.Ho(n)
o.ce()
o.aV(A.ar7())
o.ru(b)
q=m.e0(r,a,b)
o=q
o.toString
return o}}p=a.bU(0)
p.fB(m,b)
return p}finally{if(l)A.aki()}},
yD(a){a.a=null
a.op()
this.r.b.B(0,a)},
jl(a){},
ce(){var s=this,r=s.z,q=r==null,p=!q&&r.a!==0||s.Q
s.w=B.c9
if(!q)r.a0(0)
s.Q=!1
s.xM()
s.yg()
if(s.as)s.r.BU(s)
if(p)s.b4()},
dD(){var s,r,q=this,p=q.z
if(p!=null&&p.a!==0)for(p=new A.l5(p,p.no()),s=A.n(p).c;p.q();){r=p.d;(r==null?s.a(r):r).b1.u(0,q)}q.y=null
q.w=B.a01},
pG(){var s=this,r=s.f,q=r==null?null:r.a
if(q instanceof A.en){r=s.r.z
if(J.f(r.j(0,q),s))r.u(0,q)}s.z=s.f=null
s.w=B.Co},
gcQ(a){var s,r=this.gaa()
if(r instanceof A.F){s=r.k3
s.toString
return s}return null},
yJ(a,b){var s=this.z;(s==null?this.z=A.cV(t.tx):s).B(0,a)
a.M7(this,b)
s=a.f
s.toString
return t.sg.a(s)},
a7(a){var s=this.y,r=s==null?null:s.j(0,A.aD(a))
if(r!=null)return a.a(this.yJ(r,null))
this.Q=!0
return null},
jP(a){var s=this.y
return s==null?null:s.j(0,A.aD(a))},
yg(){var s=this.a
this.c=s==null?null:s.c},
xM(){var s=this.a
this.y=s==null?null:s.y},
JD(a){var s,r,q,p=this.a
while(!0){s=p==null
if(!s){r=p.f
r.toString
q=r instanceof A.bR?A.cR(r):null
r=A.aD(q==null?A.aT(r):q)!==A.aD(a)}else r=!1
if(!r)break
p=p.a}if(s)s=null
else{s=p.f
s.toString}return a.h("0?").a(s)},
kD(a){var s,r,q=this.a
for(;s=q==null,!s;){if(q instanceof A.fw){r=q.ok
r.toString
r=a.b(r)}else r=!1
if(r)break
q=q.a}t.Ci.a(q)
if(s)s=null
else{s=q.ok
s.toString}return a.h("0?").a(s)},
th(a){var s=this.a
for(;s!=null;){if(s instanceof A.bC&&a.b(s.gaa()))return a.a(s.gaa())
s=s.a}return null},
Bp(a){var s=this.a
while(!0){if(!(s!=null&&a.$1(s)))break
s=s.a}},
b4(){this.h4()},
d5(a){var s=this.c
if(s!=null)s.d5(a)},
c0(){var s=this.f
s=s==null?null:s.c0()
return s==null?"<optimized out>#"+A.bM(this)+"(DEFUNCT)":s},
h4(){var s=this
if(s.w!==B.c9)return
if(s.as)return
s.as=!0
s.r.BU(s)},
ue(a){var s
if(this.w===B.c9)s=!this.as&&!a
else s=!0
if(s)return
this.hR()},
Lq(){return this.ue(!1)},
hR(){this.as=!1},
$iah:1}
A.Yn.prototype={
$1(a){a.b=this.a.b
a.f7()},
$S:8}
A.Yo.prototype={
$1(a){this.a.a=a},
$S:8}
A.Yp.prototype={
$1(a){a.xR(this.a)
if(!(a instanceof A.bC))a.aV(this)},
$S:8}
A.Yk.prototype={
$1(a){a.Ho(this.a)},
$S:8}
A.Ym.prototype={
$1(a){a.op()},
$S:8}
A.Yl.prototype={
$1(a){a.ru(this.a)},
$S:8}
A.EK.prototype={
aD(a){var s=this.d,r=new A.Ju(s,A.aw())
r.aH()
r.Rs(s)
return r}}
A.t3.prototype={
fB(a,b){this.Cz(a,b)
this.wc()},
wc(){this.Lq()},
hR(){var s,r,q,p,o,n,m=this,l=null
try{l=m.be()
m.f.toString}catch(o){s=A.ae(o)
r=A.au(o)
n=A.ajg(A.al9(A.bo("building "+m.i(0)),s,r,new A.Vv(m)))
l=n}finally{m.v6()}try{m.ay=m.e0(m.ay,l,m.d)}catch(o){q=A.ae(o)
p=A.au(o)
n=A.ajg(A.al9(A.bo("building "+m.i(0)),q,p,new A.Vw(m)))
l=n
m.ay=m.e0(null,l,m.d)}},
aV(a){var s=this.ay
if(s!=null)a.$1(s)},
jl(a){this.ay=null
this.l8(a)}}
A.Vv.prototype={
$0(){var s=A.a([],t.F)
return s},
$S:16}
A.Vw.prototype={
$0(){var s=A.a([],t.F)
return s},
$S:16}
A.KO.prototype={
be(){var s=this.f
s.toString
return t.yB.a(s).L(this)},
bf(a,b){this.q9(0,b)
this.ue(!0)}}
A.fw.prototype={
be(){return this.ok.L(this)},
f7(){var s=this
if(A.apZ(s.b,s.f))s.ok.f7()
s.O4()},
wc(){this.ok.az()
this.ok.b4()
this.NQ()},
hR(){var s=this
if(s.p1){s.ok.b4()
s.p1=!1}s.NR()},
bf(a,b){var s,r,q,p=this
p.q9(0,b)
s=p.ok
r=s.a
r.toString
q=p.f
q.toString
s.a=t.aw.a(q)
s.aY(r)
p.ue(!0)},
ce(){this.O2()
this.ok.ce()
this.h4()},
dD(){this.ok.dD()
this.Cw()},
pG(){var s=this
s.v7()
s.ok.m()
s.ok=s.ok.c=null},
yJ(a,b){return this.Cx(a,b)},
b4(){this.O3()
this.p1=!0}}
A.vV.prototype={
be(){var s=this.f
s.toString
return t.im.a(s).b},
bf(a,b){var s=this,r=s.f
r.toString
t.im.a(r)
s.q9(0,b)
s.Bm(r)
s.ue(!0)},
Bm(a){this.my(a)}}
A.mz.prototype={
DB(a){this.aV(new A.a39(a))},
my(a){var s=this.f
s.toString
this.DB(this.$ti.h("dy<1>").a(s))}}
A.a39.prototype={
$1(a){if(a instanceof A.bC)this.a.o2(a.gaa())
else a.aV(this)},
$S:8}
A.fd.prototype={
xM(){var s=this,r=s.a,q=r==null?null:r.y
if(q==null)q=B.TF
r=s.f
r.toString
s.y=q.a5S(0,A.A(r),s)},
BZ(a,b){this.b1.l(0,a,b)},
M7(a,b){this.BZ(a,null)},
KW(a,b){b.b4()},
Bm(a){var s=this.f
s.toString
if(t.sg.a(s).c1(a))this.P1(a)},
my(a){var s,r,q
for(s=this.b1,s=new A.yl(s,s.vR()),r=A.n(s).c;s.q();){q=s.d
this.KW(a,q==null?r.a(q):q)}}}
A.bC.prototype={
gaa(){var s=this.ay
s.toString
return s},
TQ(){var s=this.a
while(!0){if(!(s!=null&&!(s instanceof A.bC)))break
s=s.a}return t.bI.a(s)},
TP(){var s,r={},q=r.a=this.a
r.b=null
while(!0){if(!(q!=null&&!(q instanceof A.bC)))break
if(q instanceof A.mz){r.b=q
break}s=q.a
r.a=s
q=s}return r.b},
fB(a,b){var s,r=this
r.Cz(a,b)
s=r.f
s.toString
r.ay=t.xL.a(s).aD(r)
r.ru(b)
r.v6()},
bf(a,b){this.q9(0,b)
this.FW()},
hR(){this.FW()},
FW(){var s=this,r=s.f
r.toString
t.xL.a(r).aL(s,s.gaa())
s.v6()},
a7_(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=new A.a4p(a4),g=new A.a4q(i),f=a3.length,e=f-1,d=a2.length,c=d-1,b=d===f?a2:A.aR(f,$.alI(),!1,t.h),a=i,a0=0,a1=0
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
f=j.e0(s,r,g.$2(a0,a))
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
s.op()
f=j.r.b
if(s.w===B.c9){s.dD()
s.aV(A.ahP())}f.b.B(0,s)}}++a1}o=!0}else n=i
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
f=j.e0(s,r,g.$2(a0,a))
f.toString
b[a0]=f;++a0}e=a3.length-1
while(!0){if(!(a1<=c&&a0<=e))break
f=j.e0(a2[a1],a3[a0],g.$2(a0,a))
f.toString
b[a0]=f;++a0;++a1
a=f}if(o&&n.a!==0)for(f=n.gaU(n),f=new A.dU(J.at(f.a),f.b),d=A.n(f).z[1];f.q();){l=f.a
if(l==null)l=d.a(l)
if(!a4.A(0,l)){l.a=null
l.op()
k=j.r.b
if(l.w===B.c9){l.dD()
l.aV(A.ahP())}k.b.B(0,l)}}return b},
dD(){this.Cw()},
pG(){var s=this,r=s.f
r.toString
t.xL.a(r)
s.v7()
r.ov(s.gaa())
s.ay.m()
s.ay=null},
xR(a){var s,r=this,q=r.d
r.O1(a)
s=r.CW
s.toString
s.jv(r.gaa(),q,r.d)},
ru(a){var s,r,q=this
q.d=a
s=q.CW=q.TQ()
if(s!=null)s.jq(q.gaa(),a)
r=q.TP()
if(r!=null){s=r.f
s.toString
t.yL.a(s).o2(q.gaa())}},
op(){var s=this,r=s.CW
if(r!=null){r.jH(s.gaa(),s.d)
s.CW=null}s.d=null},
jq(a,b){},
jv(a,b,c){},
jH(a,b){}}
A.a4p.prototype={
$1(a){var s=this.a.A(0,a)
return s?null:a},
$S:299}
A.a4q.prototype={
$2(a,b){return new A.oL(b,a,t.wx)},
$S:300}
A.wi.prototype={
fB(a,b){this.vf(a,b)}}
A.FS.prototype={
jl(a){this.l8(a)},
jq(a,b){},
jv(a,b,c){},
jH(a,b){}}
A.wO.prototype={
aV(a){var s=this.p1
if(s!=null)a.$1(s)},
jl(a){this.p1=null
this.l8(a)},
fB(a,b){var s,r,q=this
q.vf(a,b)
s=q.p1
r=q.f
r.toString
q.p1=q.e0(s,t.Dp.a(r).c,null)},
bf(a,b){var s,r,q=this
q.n9(0,b)
s=q.p1
r=q.f
r.toString
q.p1=q.e0(s,t.Dp.a(r).c,null)},
jq(a,b){var s=this.ay
s.toString
t.fB.a(s).saX(a)},
jv(a,b,c){},
jH(a,b){var s=this.ay
s.toString
t.fB.a(s).saX(null)}}
A.eQ.prototype={
gaa(){return t.gz.a(A.bC.prototype.gaa.call(this))},
gIk(a){var s=this.p1
s===$&&A.b()
return new A.aH(s,new A.a2m(this),A.aj(s).h("aH<1>"))},
jq(a,b){var s=this.gaa(),r=b.a
s.zE(0,a,r==null?null:r.gaa())},
jv(a,b,c){var s=this.gaa(),r=c.a
s.tS(a,r==null?null:r.gaa())},
jH(a,b){this.gaa().u(0,a)},
aV(a){var s,r,q,p,o=this.p1
o===$&&A.b()
s=o.length
r=this.p2
q=0
for(;q<s;++q){p=o[q]
if(!r.A(0,p))a.$1(p)}},
jl(a){this.p2.B(0,a)
this.l8(a)},
tB(a,b){return this.Cy(a,b)},
fB(a,b){var s,r,q,p,o,n,m,l=this
l.vf(a,b)
s=l.f
s.toString
s=t.tk.a(s).c
r=s.length
q=A.aR(r,$.alI(),!1,t.h)
for(p=t.wx,o=null,n=0;n<r;++n,o=m){m=l.Cy(s[n],new A.oL(o,n,p))
q[n]=m}l.p1=q},
bf(a,b){var s,r,q,p=this
p.n9(0,b)
s=p.f
s.toString
t.tk.a(s)
r=p.p1
r===$&&A.b()
q=p.p2
p.p1=p.a7_(r,s.c,q)
q.a0(0)}}
A.a2m.prototype={
$1(a){return!this.a.p2.A(0,a)},
$S:45}
A.oL.prototype={
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return b instanceof A.oL&&this.b===b.b&&J.f(this.a,b.a)},
gt(a){return A.S(this.b,this.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.OO.prototype={}
A.OR.prototype={
bU(a){return A.K(A.c2(null))}}
A.QT.prototype={}
A.m6.prototype={}
A.cv.prototype={
IA(){return this.a.$0()},
Kc(a){return this.b.$1(a)}}
A.Fd.prototype={
L(a){var s=this,r=A.y(t.n,t.ob),q=A.dw(a),p=q==null?null:q.ay
if(s.d==null)if(s.e==null)if(s.f==null)if(s.r==null)q=!1
else q=!0
else q=!0
else q=!0
else q=!0
if(q)r.l(0,B.Cf,new A.cv(new A.ZR(s),new A.ZS(s,p),t.g0))
if(s.ay==null)q=!1
else q=!0
if(q)r.l(0,B.ZR,new A.cv(new A.ZT(s),new A.ZX(s,p),t.da))
if(s.cy==null)q=!1
else q=!0
if(q)r.l(0,B.Cd,new A.cv(new A.ZY(s),new A.ZZ(s,p),t.on))
if(s.rx!=null||s.ry!=null||s.to!=null||!1)r.l(0,B.lT,new A.cv(new A.a__(s),new A.a_0(s,p),t.n_))
if(s.x2!=null||s.y1!=null||s.y2!=null||s.b5!=null)r.l(0,B.lS,new A.cv(new A.a_1(s),new A.a_2(s,p),t.ta))
if(s.aE!=null||s.ba!=null||s.aO!=null||!1)r.l(0,B.lR,new A.cv(new A.a_3(s),new A.ZU(s,p),t.uX))
q=!1
if(q)r.l(0,B.ZU,new A.cv(new A.ZV(s),new A.ZW(s,p),t.p1))
return new A.kH(s.c,r,s.al,s.aN,null,null)}}
A.ZR.prototype={
$0(){return A.azA(this.a,null)},
$S:301}
A.ZS.prototype={
$1(a){var s=this.a
a.y1=s.d
a.y2=s.e
a.b5=s.f
a.aE=s.r
a.b_=a.aP=a.aj=a.bm=a.aO=a.ba=a.b1=null
a.b=this.b},
$S:302}
A.ZT.prototype={
$0(){var s=t.S
return new A.fT(A.y(s,t.Aj),this.a,null,A.y(s,t.V))},
$S:303}
A.ZX.prototype={
$1(a){a.e=null
a.f=this.a.ay
a.r=null
a.b=this.b},
$S:304}
A.ZY.prototype={
$0(){return A.axg(this.a,null,null)},
$S:305}
A.ZZ.prototype={
$1(a){a.k3=a.k2=null
a.k4=this.a.cy
a.b1=a.aE=a.b5=a.y2=a.y1=a.xr=a.x2=a.x1=a.to=a.ry=a.rx=a.RG=a.R8=a.p4=a.p3=a.p2=a.p1=a.ok=null
a.b=this.b},
$S:306}
A.a__.prototype={
$0(){return A.ap4(this.a,null)},
$S:122}
A.a_0.prototype={
$1(a){var s
a.as=null
s=this.a
a.at=s.rx
a.ax=s.ry
a.ay=s.to
a.ch=null
a.Q=s.aQ
a.b=this.b},
$S:123}
A.a_1.prototype={
$0(){return A.aju(this.a,null)},
$S:124}
A.a_2.prototype={
$1(a){var s=this.a
a.as=s.x2
a.at=null
a.ax=s.y1
a.ay=s.y2
a.ch=s.b5
a.Q=s.aQ
a.b=this.b},
$S:125}
A.a_3.prototype={
$0(){var s=t.S,r=A.cV(s)
return new A.ha(B.bc,A.aln(),B.c8,A.y(s,t.ki),A.b3(s),A.y(s,t.o),r,this.a,null,A.y(s,t.V))},
$S:311}
A.ZU.prototype={
$1(a){var s=this.a
a.as=s.aE
a.at=null
a.ax=s.ba
a.ay=s.aO
a.ch=null
a.Q=s.aQ
a.b=this.b},
$S:312}
A.ZV.prototype={
$0(){var s=t.S,r=A.cV(s)
return new A.fX(B.m0,A.y(s,t.o),r,this.a,null,A.y(s,t.V))},
$S:431}
A.ZW.prototype={
$1(a){a.ax=a.as=a.at=a.Q=null
a.b=this.b},
$S:314}
A.kH.prototype={
ak(){return new A.pf(B.SW,B.m)}}
A.pf.prototype={
az(){var s,r,q=this
q.aW()
s=q.a
r=s.r
q.e=r==null?new A.MX(q):r
q.xA(s.d)},
aY(a){var s,r=this
r.bp(a)
if(!(a.r==null&&r.a.r==null)){s=r.a.r
r.e=s==null?new A.MX(r):s}r.xA(r.a.d)},
a6k(a){if(this.a.f)return
t.qS.a(this.c.gaa()).sa74(a)},
m(){for(var s=this.d,s=J.at(s.gaU(s));s.q();)s.gG(s).m()
this.d=null
this.aS()},
xA(a){var s,r,q,p,o=this,n=o.d
n.toString
o.d=A.y(t.n,t.id)
for(s=J.at(a.gbs(a));s.q();){r=s.gG(s)
q=o.d
q.toString
p=n.j(0,r)
q.l(0,r,p==null?a.j(0,r).IA():p)
q=a.j(0,r)
q.toString
r=o.d.j(0,r)
r.toString
q.Kc(r)}for(s=J.at(n.gbs(n));s.q();){r=s.gG(s)
if(!o.d.R(0,r))n.j(0,r).m()}},
U8(a){var s,r
for(s=this.d,s=J.at(s.gaU(s));s.q();){r=s.gG(s)
r.d.l(0,a.gbW(),a.gci(a))
if(r.fz(a))r.hv(a)
else r.oT(a)}},
VI(a){var s,r
for(s=this.d,s=J.at(s.gaU(s));s.q();){r=s.gG(s)
r.d.l(0,a.gbW(),a.gci(a))
if(r.a4w(a))r.y_(a)}},
a_o(a){this.e.yf(a)},
L(a){var s,r,q,p=this,o=null,n=p.a,m=n.e,l=m==null
if(l)s=n.c==null?B.d5:B.bR
else s=m
r=n.c
q=A.FY(s,r,o,p.gU7(),p.gVH(),o,o)
if(!n.f){if(l)n=r==null?B.d5:B.bR
else n=m
q=new A.NK(n,p.ga_n(),q,o)}return q}}
A.NK.prototype={
aD(a){var s=new A.jd(B.bR,null,A.aw())
s.aH()
s.saX(null)
s.v=this.e
this.f.$1(s)
return s},
aL(a,b){b.v=this.e
this.f.$1(b)}}
A.a6q.prototype={
i(a){return"SemanticsGestureDelegate()"}}
A.MX.prototype={
yf(a){var s=this,r=s.a.d
r.toString
a.sjA(s.Ux(r))
a.skM(s.Uo(r))
a.sa5i(s.Um(r))
a.sa5s(s.Uy(r))},
Ux(a){var s=t.f3.a(a.j(0,B.Cf))
if(s==null)return null
return new A.abO(s)},
Uo(a){var s=t.yA.a(a.j(0,B.Cd))
if(s==null)return null
return new A.abN(s)},
Um(a){var s=t.oq.a(a.j(0,B.lS)),r=t.rR.a(a.j(0,B.lR)),q=s==null?null:new A.abK(s),p=r==null?null:new A.abL(r)
if(q==null&&p==null)return null
return new A.abM(q,p)},
Uy(a){var s=t.iC.a(a.j(0,B.lT)),r=t.rR.a(a.j(0,B.lR)),q=s==null?null:new A.abP(s),p=r==null?null:new A.abQ(r)
if(q==null&&p==null)return null
return new A.abR(q,p)}}
A.abO.prototype={
$0(){var s=this.a,r=s.y1
if(r!=null)r.$1(new A.pX(B.j,B.j))
r=s.y2
if(r!=null)r.$1(new A.pY())
s=s.b5
if(s!=null)s.$0()},
$S:0}
A.abN.prototype={
$0(){var s=this.a,r=s.ok
if(r!=null)r.$1(B.Ri)
r=s.k4
if(r!=null)r.$0()
s=s.p3
if(s!=null)s.$1(B.Rg)},
$S:0}
A.abK.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.iQ(B.j))
r=s.at
if(r!=null)r.$1(new A.hI(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fU(B.c7,0))},
$S:23}
A.abL.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.iQ(B.j))
r=s.at
if(r!=null)r.$1(new A.hI(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fU(B.c7,null))},
$S:23}
A.abM.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(a)
s=this.b
if(s!=null)s.$1(a)},
$S:23}
A.abP.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.iQ(B.j))
r=s.at
if(r!=null)r.$1(new A.hI(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fU(B.c7,0))},
$S:23}
A.abQ.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.iQ(B.j))
r=s.at
if(r!=null)r.$1(new A.hI(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fU(B.c7,null))},
$S:23}
A.abR.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(a)
s=this.b
if(s!=null)s.$1(a)},
$S:23}
A.md.prototype={
F(){return"HeroFlightDirection."+this.b}}
A.mb.prototype={
ak(){return new A.qA(new A.bB(null,t.C),B.m)}}
A.a_z.prototype={
$2(a,b){var s=a.f
s.toString
t.tV.a(s)
s=a.ok
s.toString
t.BJ.a(s)
if(!this.b||!1)this.a.l(0,b,s)
else s.Jj()},
$S:317}
A.a_A.prototype={
$1(a){var s,r,q=this,p=a.f
p.toString
if(p instanceof A.mb){t.jw.a(a)
s=p.c
if(A.ajM(a)===q.a)q.b.$2(a,s)
else{r=A.a2b(a,t.X)
if(r!=null)p=r.gkG()
else p=!1
if(p)q.b.$2(a,s)}}a.aV(q)},
$S:8}
A.qA.prototype={
uZ(a){var s,r=this
r.f=a
s=r.c.gaa()
s.toString
r.ar(new A.acS(r,t.x.a(s)))},
uY(){return this.uZ(!1)},
m1(a){var s=this
if(a||s.e==null)return
s.e=null
if(s.c!=null)s.ar(new A.acR())},
Jj(){return this.m1(!1)},
L(a){var s,r=this,q=null,p=r.e,o=p==null,n=!o
if(n)r.a.toString
if(n&&!r.f){o=p.a
return A.fr(q,p.b,o)}s=o?q:p.a
p=o?q:p.b
return A.fr(new A.vx(n,new A.q3(o,new A.kq(r.a.e,r.d),q),q),p,s)}}
A.acS.prototype={
$0(){var s=this.b.k3
s.toString
this.a.e=s},
$S:0}
A.acR.prototype={
$0(){},
$S:0}
A.acO.prototype={
gbO(a){var s,r=this
if(r.a===B.bP){s=r.e.fy
s.toString}else{s=r.d.fy
s.toString}return A.el(B.bq,s,r.z?null:new A.u_(B.bq))},
oj(a,b){var s
this.r.a.toString
s=this.w.$2(a,b)
return s==null?new A.w1(a,b):s},
gJP(){var s,r,q=this,p=q.Q
if(p===$){s=q.f.c
s.toString
r=A.ape(s,$.ai.a4$.z.j(0,q.d.k2))
q.Q!==$&&A.bi()
q.Q=r
p=r}return p},
gun(){var s,r,q=this,p=q.as
if(p===$){s=q.r.c
s.toString
r=A.ape(s,$.ai.a4$.z.j(0,q.e.k2))
q.as!==$&&A.bi()
q.as=r
p=r}return p},
gkI(){var s,r,q=this,p=q.at
if(p===$){s=q.gun()
if(s.gKs(s))if(!q.z){s=q.gJP()
s=s.gKs(s)
r=s}else r=!0
else r=!1
q.at!==$&&A.bi()
p=q.at=r}return p},
i(a){var s,r,q=this,p=q.a.i(0),o=q.f,n=o.a.c.i(0),m=q.d.b.i(0),l=q.e.b.i(0)
o=o.i(0)
s=q.r.i(0)
r=q.gkI()?"":", INVALID"
return"_HeroFlightManifest("+p+" tag: "+n+" from route: "+m+" to route: "+l+" with hero: "+o+" to "+s+")"+r}}
A.jw.prototype={
Sg(a){var s,r,q,p,o=this,n=o.c
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
return A.ly(s,new A.acP(o),n)},
FV(a){var s,r=this,q=a===B.X
if(q||a===B.K){s=r.e
s===$&&A.b()
s.saJ(0,null)
r.r.mG(0)
r.r=null
s=r.f
s===$&&A.b()
s.f.m1(q)
r.f.r.m1(a===B.K)
r.a.$1(r)
r.e.H(0,r.gL5())}},
EU(a){var s=this,r=s.f
r===$&&A.b()
r=r.d.a
if((r==null?null:r.CW.a)!==!0){s.FV(a)
return}if(s.x)return
r.toString
s.x=!0
r.CW.Z(0,new A.acQ(s,r))},
a5r(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(!h.w){s=h.f
s===$&&A.b()
s=s.r.c!=null}else s=!1
if(s){s=h.f
s===$&&A.b()
r=t.av.a(s.r.c.gaa())}else r=null
if(r!=null&&r.b!=null&&r.k3!=null){s=h.f
s===$&&A.b()
s=$.ai.a4$.z.j(0,s.e.k2)
s=s==null?null:s.gaa()
q=A.cw(r.bB(0,t.av.a(s)),B.j)}else q=null
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
h.b=i.oj(p.a,new A.C(k,j,k+(n-m),j+(l-o)))}}else{p=h.d
if(p.gb0(p)===B.X){p=h.e
p===$&&A.b()
o=$.asQ()
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
A.acP.prototype={
$2(a,b){var s,r=null,q=this.a,p=q.b
p===$&&A.b()
s=q.e
s===$&&A.b()
s=p.af(0,s.gn(s))
s.toString
p=q.f
p===$&&A.b()
p=p.c
return A.J1(p.b-s.d,new A.hO(!0,r,A.ajj(b,q.d),r),r,r,s.a,p.a-s.c,s.b,r)},
$S:318}
A.acQ.prototype={
$0(){var s,r=this.a
r.x=!1
this.b.CW.H(0,this)
s=r.e
s===$&&A.b()
r.FV(s.gb0(s))},
$S:0}
A.ub.prototype={
rW(a,b){this.qM(b,a,B.bP,!1)},
rV(a,b){var s=$.hu()
A.ov(this)
if(!s.a.get(this).CW.a)this.qM(a,b,B.bQ,!1)},
rX(a,b){var s=a.gkG()
if(s)this.qM(b,a,B.bP,!1)},
IY(a,b){this.qM(a,b,B.bQ,!0)},
ou(){var s,r,q,p=$.hu()
A.ov(this)
if(p.a.get(this).CW.a)return
p=this.b
p=p.gaU(p)
s=A.n(p).h("aH<o.E>")
r=A.aA(new A.aH(p,new A.a_y(),s),!1,s.h("o.E"))
for(p=r.length,q=0;q<p;++q)r[q].EU(B.K)},
qM(a,b,c,d){var s
if(b!=a&&b instanceof A.i_&&a instanceof A.i_){switch(c.a){case 1:s=a.fy
if(s.gn(s)===0)return
break
case 0:s=b.fy
if(s.gn(s)===1)return
break}if(d)if(c===B.bQ){b.gpb()
s=!0}else s=!1
else s=!1
if(s)this.GT(a,b,c,d)
else{s=b.fy
b.stU(s.gn(s)===0)
$.ai.dy$.push(new A.a_x(this,a,b,c,d))}}},
GT(b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null
b4.stU(!1)
s=$.hu()
A.ov(b1)
s=s.a.get(b1)
r=s==null
if(r)q=b2
else{p=s.d
p===$&&A.b()
q=p.gbw()}if(r||q==null)return
o=s.c.gaa()
if(!(o instanceof A.F))return
n=$.ai.a4$.z.j(0,b3.k2)
m=n!=null?A.and(n,b6,s):B.zn
l=$.ai.a4$.z.j(0,b4.k2)
k=l!=null?A.and(l,b6,s):B.zn
for(s=m.ges(m),s=s.ga5(s),r=b1.gT9(),p=b1.a,j=b1.b,i=t.Cf,h=b1.gVf(),g=t.A,f=t.Q,e=t.b,d=t.tY,c=t.a7,b=t.m,a=c.h("aZ<aF.T>"),a0=t.sD;s.q();){a1=s.gG(s)
a2=a1.gcL(a1)
a3=a1.gn(a1)
a4=k.j(0,a2)
a5=j.j(0,a2)
if(a4==null)a6=b2
else{a1=o.k3
a1.toString
a4.a.toString
a3.a.toString
a6=new A.acO(b5,q,a1,b3,b4,a3,a4,p,r,b6,a5!=null)}if(a6!=null&&a6.gkI()){k.u(0,a2)
if(a5!=null){a1=a5.f
a1===$&&A.b()
a7=a1.a
if(a7===B.bP&&a6.a===B.bQ){a1=a5.e
a1===$&&A.b()
a1.saJ(0,new A.eV(a6.gbO(a6),new A.bk(A.a([],g),f),0))
a1=a5.b
a1===$&&A.b()
a5.b=new A.wh(a1,a1.b,a1.a,a0)}else{a7=a7===B.bQ&&a6.a===B.bP
a8=a5.e
if(a7){a8===$&&A.b()
a1=a6.gbO(a6)
a7=a5.f
a7=a7.gbO(a7)
a7=a7.gn(a7)
a8.saJ(0,new A.aZ(b.a(a1),new A.aL(a7,1,c),a))
a1=a5.f
a7=a1.f
a8=a6.r
if(a7!==a8){a7.m1(!0)
a8.uY()
a1=a5.f
a7=a5.b
a7===$&&A.b()
a5.b=a1.oj(a7.b,a6.gun())}else{a7=a5.b
a7===$&&A.b()
a5.b=a1.oj(a7.b,a7.a)}}else{a7=a5.b
a7===$&&A.b()
a8===$&&A.b()
a5.b=a1.oj(a7.af(0,a8.gn(a8)),a6.gun())
a5.c=null
a1=a6.a
a7=a5.e
if(a1===B.bQ)a7.saJ(0,new A.eV(a6.gbO(a6),new A.bk(A.a([],g),f),0))
else a7.saJ(0,a6.gbO(a6))
a5.f.f.m1(!0)
a5.f.r.m1(!0)
a6.f.uZ(a1===B.bP)
a6.r.uY()
a1=a5.r.f.gbw()
if(a1!=null)a1.Fv()}}a5.f=a6}else{a1=new A.jw(h,B.cX)
a7=A.a([],g)
a8=new A.bk(a7,f)
a9=new A.vU(a8,new A.bk(A.a([],e),d),0)
a9.a=B.K
a9.b=0
a9.by()
a8.b=!0
a7.push(a1.gUG())
a1.e=a9
a1.f=a6
switch(a6.a.a){case 1:a9.saJ(0,new A.eV(a6.gbO(a6),new A.bk(A.a([],g),f),0))
b0=!1
break
case 0:a9.saJ(0,a6.gbO(a6))
b0=!0
break
default:b0=b2}a7=a1.f
a1.b=a7.oj(a7.gJP(),a1.f.gun())
a1.f.f.uZ(b0)
a1.f.r.uY()
a7=a1.f
a8=new A.nm(!1,$.by())
a8.P$=!0
a8=new A.fl(a1.gSf(),!1,a8,new A.bB(b2,i))
a1.r=a8
a7.b.zD(0,a8)
a8=a1.e
a8.by()
a8=a8.cg$
a8.b=!0
a8.a.push(a1.gL5())
j.l(0,a2,a1)}}else if(a5!=null)a5.w=!0}for(s=J.at(k.gaU(k));s.q();)s.gG(s).Jj()},
Vg(a){var s=a.f
s===$&&A.b()
this.b.u(0,s.f.a.c)},
Ta(a,b,c,d,e){var s,r,q=e.f
q.toString
t.tV.a(q)
s=A.dw(e)
r=A.dw(d)
if(s==null||r==null)return q.e
return A.ly(b,new A.a_w(s,c,r.f,s.f,b,q),null)}}
A.a_y.prototype={
$1(a){var s=a.f
s===$&&A.b()
if(s.y)if(s.a===B.bQ){s=a.e
s===$&&A.b()
s=s.gb0(s)===B.K}else s=!1
else s=!1
return s},
$S:321}
A.a_x.prototype={
$1(a){var s=this
s.a.GT(s.b,s.c,s.d,s.e)},
$S:2}
A.a_w.prototype={
$2(a,b){var s=this,r=s.c,q=s.d,p=s.e
r=s.b===B.bP?new A.tE(r,q).af(0,p.gn(p)):new A.tE(q,r).af(0,p.gn(p))
return new A.ff(s.a.IG(r),s.f.e,null)},
$S:322}
A.oD.prototype={
L(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.a7(t.I)
f.toString
s=f.w
r=A.anh(a)
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
if(k!==1)j=A.b2(B.d.bc(255*((l.gn(l)>>>24&255)/255*k)),l.gn(l)>>>16&255,l.gn(l)>>>8&255,l.gn(l)&255)
else j=l
l=A.dJ(f.a)
i=A.a([],t.BV)
if(p!=null)i.push(new A.kc("FILL",p))
if(o!=null)i.push(new A.kc("wght",o))
if(n!=null)i.push(new A.kc("GRAD",n))
if(m!=null)i.push(new A.kc("opsz",m))
h=A.aol(g,g,B.Wd,g,g,!0,g,A.a9V(g,A.bY(g,g,j,g,g,g,g,g,"MaterialIcons",g,g,q,g,i,g,g,g,!1,g,g,g,g,g,r.w,g,g),l),B.bI,s,g,1,B.aQ)
if(f.d)switch(s.a){case 0:f=new A.bf(new Float64Array(16))
f.dm()
f.i0(0,-1,1,1)
h=A.aoT(B.a0,h,f,!1)
break
case 1:break}return A.dK(g,new A.tM(!0,A.fr(A.rS(h,g,g),q,q),g),!1,g,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)}}
A.mh.prototype={
k(a,b){var s
if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
if(b instanceof A.mh)if(b.a===this.a)s=b.d===this.d
else s=!1
else s=!1
return s},
gt(a){return A.S(this.a,"MaterialIcons",null,this.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"IconData(U+"+B.b.jC(B.f.iL(this.a,16).toUpperCase(),5,"0")+")"}}
A.mi.prototype={
c1(a){return!this.w.k(0,a.w)}}
A.a0e.prototype={
$1(a){return A.ajx(this.c,A.ang(a).c7(this.b),this.a)},
$S:323}
A.cC.prototype={
oi(a,b,c,d,e,f,g,h){var s,r=this,q=g==null?r.a:g,p=b==null?r.b:b,o=h==null?r.c:h,n=c==null?r.d:c,m=e==null?r.e:e,l=a==null?r.f:a
if(d==null){s=r.r
s=s==null?null:A.H(s,0,1)}else s=d
return new A.cC(q,p,o,n,m,l,s,f==null?r.w:f)},
hC(a){return this.oi(a,null,null,null,null,null,null,null)},
c7(a){var s=a.r
s=s==null?null:A.H(s,0,1)
return this.oi(a.f,a.b,a.d,s,a.e,a.w,a.a,a.c)},
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
A.NU.prototype={}
A.oE.prototype={
ak(){return new A.ym(B.m)}}
A.ym.prototype={
az(){var s=this
s.aW()
$.ai.br$.push(s)
s.z=new A.E0(s)},
m(){var s,r=this
B.c.u($.ai.br$,r)
r.ZK()
s=r.at
if(s!=null)s.m()
s=r.z
s===$&&A.b()
s.a=null
r.xg(null)
r.aS()},
b4(){var s,r=this
r.a_e()
r.xk()
s=r.c
s.toString
if(A.aoQ(s))r.WP()
else r.GW(!0)
r.cG()},
aY(a){var s,r,q=this
q.bp(a)
if(q.r&&q.a.e==null!==(a.e==null)){s=q.nu()
r=q.d
r.toString
r.Z(0,q.EI(!0))
q.d.H(0,s)}if(!q.a.c.k(0,a.c))q.xk()},
f7(){this.xk()
this.PU()},
a_e(){var s=this.c
s.toString
s=A.dw(s)
s=s==null?null:s.z
if(s==null){s=$.a6f.za$
s===$&&A.b()
s=(s.a&2)!==0}this.w=s},
xk(){var s,r,q,p,o=this,n=o.z
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
o.a_q(new A.ws(n,r,t.rZ).W(A.alg(q,s)))},
EI(a){var s,r=this,q=r.ax
if(q==null||a){r.as=r.Q=null
q=r.a
s=q.e==null?null:r.gVk()
q=q.f!=null||!1?new A.acW(r):null
q=r.ax=new A.dv(r.gVm(),s,q)}q.toString
return q},
nu(){return this.EI(!1)},
Vn(a,b){this.ar(new A.acY(this,a,b))},
Vl(a){this.ar(new A.acX(this,a))},
xg(a){var s=this.e
$.bP.dy$.push(new A.acZ(s))
this.e=a},
a_q(a){var s,r,q=this,p=q.d
if(p==null)s=null
else{s=p.a
if(s==null)s=p}r=a.a
if(s===(r==null?a:r))return
if(q.r){p.toString
p.H(0,q.nu())}q.a.toString
q.ar(new A.ad_(q))
q.ar(new A.ad0(q))
q.d=a
if(q.r)a.Z(0,q.nu())},
WP(){var s,r=this
if(r.r)return
s=r.d
s.toString
s.Z(0,r.nu())
s=r.at
if(s!=null)s.m()
r.at=null
r.r=!0},
GW(a){var s,r=this
if(!r.r)return
if(a)if(r.at==null){s=r.d
s=(s==null?null:s.a)!=null}else s=!1
else s=!1
if(s)r.at=r.d.a.mt()
s=r.d
s.toString
s.H(0,r.nu())
r.r=!1},
ZK(){return this.GW(!1)},
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
h=new A.Je(r,q,o,n,e,s,f,p.z,m,l,k,j,f,!1,i,!1,f)
h=A.dK(f,h,!1,f,!1,f,f,f,!0,"",f,f,f,f,f,f,f,f,f,f,f)
e=p.d
if(e!=null)h=e.$4(a,h,g.x,g.y)
e=g.a.e
return e!=null?e.$3(a,h,g.f):h}}
A.acW.prototype={
$2(a,b){var s=this.a
s.ar(new A.acV(s,a,b))},
$S:324}
A.acV.prototype={
$0(){var s=this.a
s.Q=this.b
s.as=this.c},
$S:0}
A.acY.prototype={
$0(){var s,r=this.a
r.xg(this.b)
r.as=r.Q=r.f=null
s=r.x
r.x=s==null?0:s+1
r.y=B.nN.MU(r.y,this.c)},
$S:0}
A.acX.prototype={
$0(){var s=this.a
s.f=this.b
s.as=s.Q=null},
$S:0}
A.acZ.prototype={
$1(a){var s=this.a
if(s!=null)s.a.m()
return null},
$S:2}
A.ad_.prototype={
$0(){this.a.xg(null)},
$S:0}
A.ad0.prototype={
$0(){var s=this.a
s.x=s.f=null
s.y=!1},
$S:0}
A.Sc.prototype={}
A.DN.prototype={
dW(a){var s=A.VR(this.a,this.b,a)
s.toString
return s}}
A.tE.prototype={
dW(a){var s=A.aje(this.a,this.b,a)
s.toString
return s}}
A.lF.prototype={
dW(a){return A.o2(this.a,this.b,a)}}
A.ng.prototype={
dW(a){var s=A.ba(this.a,this.b,a)
s.toString
return s}}
A.FA.prototype={}
A.oJ.prototype={
gk5(){var s,r,q=this,p=q.d
if(p===$){s=q.a.d
r=A.e1(null,s,null,null,q)
q.d!==$&&A.bi()
q.d=r
p=r}return p},
gfK(){var s,r=this,q=r.e
if(q===$){s=r.gk5()
q=r.e=A.el(r.a.c,s,null)}return q},
az(){var s,r=this
r.aW()
s=r.gk5()
s.by()
s=s.cs$
s.b=!0
s.a.push(new A.a0E(r))
r.E7()},
aY(a){var s,r=this
r.bp(a)
if(r.a.c!==a.c){r.gfK().m()
s=r.gk5()
r.e=A.el(r.a.c,s,null)}r.gk5().e=r.a.d
if(r.E7()){r.oP(new A.a0D(r))
s=r.gk5()
s.sn(0,0)
s.cW(0)}},
m(){this.gfK().m()
this.gk5().m()
this.Q3()},
a_t(a,b){var s
if(a==null)return
s=this.gfK()
a.syk(a.af(0,s.gn(s)))
a.saT(0,b)},
E7(){var s={}
s.a=!1
this.oP(new A.a0C(s,this))
return s.a}}
A.a0E.prototype={
$1(a){switch(a.a){case 3:this.a.a.toString
break
case 0:case 1:case 2:break}},
$S:4}
A.a0D.prototype={
$3(a,b,c){this.a.a_t(a,b)
return a},
$S:127}
A.a0C.prototype={
$3(a,b,c){var s
if(b!=null){if(a==null)a=c.$1(b)
s=a.b
if(!J.f(b,s==null?a.a:s))this.a.a=!0
else if(a.b==null)a.saT(0,a.a)}else a=null
return a},
$S:127}
A.nU.prototype={
az(){this.Og()
var s=this.gk5()
s.by()
s=s.cg$
s.b=!0
s.a.push(this.gUE())},
UF(){this.ar(new A.TG())}}
A.TG.prototype={
$0(){},
$S:0}
A.rn.prototype={
ak(){return new A.LT(null,null,B.m)}}
A.LT.prototype={
oP(a){this.CW=t.uh.a(a.$3(this.CW,this.a.w,new A.aaL()))},
L(a){var s,r=this.CW
r.toString
s=this.gfK()
s=r.af(0,s.gn(s))
return A.tn(this.a.r,null,B.cN,!0,s,null,null,B.aQ)}}
A.aaL.prototype={
$1(a){return new A.ng(t.F1.a(a),null)},
$S:326}
A.ro.prototype={
ak(){return new A.LU(null,null,B.m)}}
A.LU.prototype={
oP(a){var s=this,r=s.CW
s.a.toString
s.CW=t.iH.a(a.$3(r,B.aA,new A.aaM()))
s.cx=t.nr.a(a.$3(s.cx,s.a.z,new A.aaN()))
r=t.mo
s.cy=r.a(a.$3(s.cy,s.a.Q,new A.aaO()))
s.db=r.a(a.$3(s.db,s.a.at,new A.aaP()))},
L(a){var s,r,q,p,o,n=this,m=n.a,l=m.w
m=m.x
s=n.CW
s.toString
r=n.gfK()
r=s.af(0,r.gn(r))
s=n.cx
s.toString
q=n.gfK()
q=s.af(0,q.gn(q))
s=n.a.Q
p=n.db
p.toString
o=n.gfK()
o=p.af(0,o.gn(o))
o.toString
return new A.IS(l,m,r,q,s,o,n.a.r,null)}}
A.aaM.prototype={
$1(a){return new A.lF(t.ak.a(a),null)},
$S:327}
A.aaN.prototype={
$1(a){return new A.aL(A.SZ(a),null,t.a7)},
$S:100}
A.aaO.prototype={
$1(a){return new A.hC(t.iO.a(a),null)},
$S:51}
A.aaP.prototype={
$1(a){return new A.hC(t.iO.a(a),null)},
$S:51}
A.qD.prototype={
m(){var s=this,r=s.dF$
if(r!=null)r.H(0,s.glL())
s.dF$=null
s.aS()},
ce(){this.e3()
this.d3()
this.lM()}}
A.ki.prototype={
bU(a){var s=A.fY(t.h,t.X)
return new A.ui(s,this,B.a5,A.n(this).h("ui<ki.T>"))}}
A.ui.prototype={
M7(a,b){var s=this.b1,r=this.$ti,q=r.h("ca<1>?").a(s.j(0,a))
if(q!=null&&q.gN(q))return
s.l(0,a,A.cV(r.c))},
KW(a,b){var s,r=this.$ti,q=r.h("ca<1>?").a(this.b1.j(0,b))
if(q==null)return
if(!q.gN(q)){s=this.f
s.toString
s=r.h("ki<1>").a(s).a71(a,q)
r=s}else r=!0
if(r)b.b4()}}
A.hP.prototype={
c1(a){return a.f!==this.f},
bU(a){var s=new A.qE(A.fY(t.h,t.X),this,B.a5,A.n(this).h("qE<hP.T>"))
this.f.Z(0,s.gwI())
return s}}
A.qE.prototype={
bf(a,b){var s,r,q=this,p=q.f
p.toString
s=q.$ti.h("hP<1>").a(p).f
r=b.f
if(s!==r){p=q.gwI()
s.H(0,p)
r.Z(0,p)}q.P0(0,b)},
be(){var s,r=this
if(r.a4){s=r.f
s.toString
r.CD(r.$ti.h("hP<1>").a(s))
r.a4=!1}return r.P_()},
Wj(){this.a4=!0
this.h4()},
my(a){this.CD(a)
this.a4=!1},
pG(){var s=this,r=s.f
r.toString
s.$ti.h("hP<1>").a(r).f.H(0,s.gwI())
s.v7()}}
A.FC.prototype={}
A.qQ.prototype={}
A.ah1.prototype={
$1(a){return this.a.a=a},
$S:27}
A.ah2.prototype={
$1(a){return a.b},
$S:328}
A.ah3.prototype={
$1(a){var s,r,q,p
for(s=J.aJ(a),r=this.a,q=this.b,p=0;p<s.gp(a);++p)q.l(0,A.aD(A.n(r.a[p].a).h("cZ.T")),s.j(a,p))
return q},
$S:329}
A.cZ.prototype={
i(a){return"LocalizationsDelegate["+A.aD(A.n(this).h("cZ.T")).i(0)+"]"}}
A.RY.prototype={
mr(a){return!0},
cZ(a,b){return new A.bp(B.Dn,t.mq)},
l3(a){return!1},
i(a){return"DefaultWidgetsLocalizations.delegate(en_US)"}}
A.DT.prototype={
gbK(){return B.t},
$ijr:1}
A.yA.prototype={
c1(a){return this.w!==a.w}}
A.uK.prototype={
ak(){return new A.Ok(new A.bB(null,t.C),A.y(t.n,t.z),B.m)}}
A.Ok.prototype={
az(){this.aW()
this.cZ(0,this.a.c)},
RY(a){var s,r,q,p,o,n,m=this.a.d,l=a.d
if(m.length!==l.length)return!0
s=A.a(m.slice(0),A.aj(m))
r=A.a(l.slice(0),A.aj(l))
for(q=0;q<s.length;++q){p=s[q]
o=r[q]
n=p instanceof A.bR?A.cR(p):null
m=A.aD(n==null?A.aT(p):n)
n=o instanceof A.bR?A.cR(o):null
if(m===A.aD(n==null?A.aT(o):n)){p.l3(o)
m=!1}else m=!0
if(m)return!0}return!1},
aY(a){var s,r=this
r.bp(a)
if(r.a.c.k(0,a.c)){r.a.toString
s=r.RY(a)}else s=!0
if(s)r.cZ(0,r.a.c)},
cZ(a,b){var s,r=this,q={},p=r.a.d,o=p.length
if(o===0){r.f=b
return}q.a=null
s=A.aCv(b,p).aB(new A.adp(q),t.Co)
q=q.a
if(q!=null){r.e=q
r.f=b}else{++$.kJ.aO$
s.aB(new A.adq(r,b),t.H)}},
gH4(){return t.cC.a(J.aO(this.e,B.a_e)).gbK()},
L(a){var s,r,q,p=this,o=null
if(p.f==null)return B.fO
s=p.gH4()
p.f.toString
r=p.e
q=p.gH4()
return A.dK(o,new A.yA(p,r,A.ajb(p.a.e,q),p.d),!1,o,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,s,o,o)}}
A.adp.prototype={
$1(a){return this.a.a=a},
$S:330}
A.adq.prototype={
$1(a){var s=this.a
if(s.c!=null)s.ar(new A.ado(s,a,this.b))
$.kJ.I0()},
$S:331}
A.ado.prototype={
$0(){var s=this.a
s.e=this.b
s.f=this.c},
$S:0}
A.vA.prototype={
F(){return"Orientation."+this.b}}
A.j4.prototype={
rL(a,b,c,d,e){var s=this,r=c==null?s.c:c,q=a==null?s.f:a,p=e==null?s.r:e,o=d==null?s.e:d
return new A.j4(s.a,s.b,r,s.d,o,q,p,s.w,!1,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch)},
yu(a){return this.rL(null,null,a,null,null)},
IG(a){return this.rL(a,null,null,null,null)},
a1A(a,b){return this.rL(null,null,null,a,b)},
a1z(a,b){return this.rL(a,null,null,null,b)},
Ly(a,b,c,d){var s,r,q,p,o,n,m=this,l=null
if(!(b||d||c||a))return m
s=m.f
r=b?0:l
q=d?0:l
p=c?0:l
r=s.og(a?0:l,r,p,q)
q=m.r
p=b?Math.max(0,q.a-s.a):l
o=d?Math.max(0,q.b-s.b):l
n=c?Math.max(0,q.c-s.c):l
return m.a1z(r,q.og(a?Math.max(0,q.d-s.d):l,p,n,o))},
a6b(a){var s=this,r=null,q=s.r,p=s.e,o=Math.max(0,q.d-p.d)
q=q.og(o,r,r,r)
return s.a1A(p.og(0,r,r,r),q)},
k(a,b){var s=this
if(b==null)return!1
if(J.X(b)!==A.A(s))return!1
return b instanceof A.j4&&b.a.k(0,s.a)&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.f.k(0,s.f)&&b.r.k(0,s.r)&&b.e.k(0,s.e)&&b.Q===s.Q&&b.as===s.as&&b.z===s.z&&b.y===s.y&&b.at===s.at&&b.ax===s.ax&&b.ay.k(0,s.ay)&&A.cS(b.ch,s.ch)},
gt(a){var s=this
return A.S(s.a,s.b,s.c,s.d,s.f,s.r,s.e,!1,s.Q,s.as,s.z,s.y,s.at,s.ax,s.ay,A.df(s.ch),B.a,B.a,B.a,B.a)},
i(a){var s=this
return"MediaQueryData("+B.c.b3(A.a(["size: "+s.a.i(0),"devicePixelRatio: "+B.d.M(s.b,1),"textScaleFactor: "+B.d.M(s.c,1),"platformBrightness: "+s.d.i(0),"padding: "+s.f.i(0),"viewPadding: "+s.r.i(0),"viewInsets: "+s.e.i(0),"alwaysUse24HourFormat: false","accessibleNavigation: "+s.y,"highContrast: "+s.Q,"disableAnimations: "+s.as,"invertColors: "+s.z,"boldText: "+s.at,"navigationMode: "+s.ax.b,"gestureSettings: "+s.ay.i(0),"displayFeatures: "+A.h(s.ch)],t.s),", ")+")"}}
A.ff.prototype={
c1(a){return!this.f.k(0,a.f)}}
A.I7.prototype={
F(){return"NavigationMode."+this.b}}
A.yH.prototype={
ak(){return new A.Os(B.m)}}
A.Os.prototype={
az(){this.aW()
$.ai.br$.push(this)},
rU(){this.ar(new A.adL())},
IW(){this.ar(new A.adN())},
IV(){this.ar(new A.adM())},
L(a){var s
$.ai.toString
s=A.anJ($.cq())
return new A.ff(s,this.a.c,null)},
m(){B.c.u($.ai.br$,this)
this.aS()}}
A.adL.prototype={
$0(){},
$S:0}
A.adN.prototype={
$0(){},
$S:0}
A.adM.prototype={
$0(){},
$S:0}
A.Se.prototype={}
A.vc.prototype={
L(a){var s,r=null
switch(A.ln().a){case 0:case 1:case 3:case 5:break
case 2:case 4:break}s=this.c
return A.auH(new A.tM(!0,new A.OC(A.dK(r,A.ve(new A.fN(B.mj,s==null?r:new A.t2(s,r,r),r),B.lM,r,r,r),!1,r,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),new A.a29(this,a),r),r))}}
A.a29.prototype={
$0(){A.L_(B.W_)},
$S:0}
A.qd.prototype={
fz(a){if(this.y1==null)return!1
return this.n8(a)},
JX(a){},
JY(a,b){var s=this.y1
if(s!=null)s.$0()},
tt(a,b,c){}}
A.adR.prototype={
yf(a){a.sjA(this.a)}}
A.LZ.prototype={
IA(){var s=t.S,r=A.cV(s)
return new A.qd(B.aX,18,B.br,A.y(s,t.o),r,null,null,A.y(s,t.V))},
Kc(a){a.y1=this.a}}
A.OC.prototype={
L(a){var s=this.d
return new A.kH(this.c,A.aY([B.a_f,new A.LZ(s)],t.n,t.ob),B.aC,!1,new A.adR(s),null)}}
A.I8.prototype={
L(a){var s,r,q=this,p=a.a7(t.I)
p.toString
s=A.a([],t.E)
r=q.c
if(r!=null)s.push(A.a1i(r,B.h8))
r=q.d
if(r!=null)s.push(A.a1i(r,B.h9))
r=q.e
if(r!=null)s.push(A.a1i(r,B.ha))
return new A.tg(new A.afC(q.f,q.r,p.w),s,null)}}
A.r7.prototype={
F(){return"_ToolbarSlot."+this.b}}
A.afC.prototype={
u6(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.b.j(0,B.h8)!=null){s=a.a
r=a.b
q=e.dV(B.h8,new A.aQ(0,s,r,r)).a
switch(e.f.a){case 0:p=s-q
break
case 1:p=0
break
default:p=null}e.ec(B.h8,new A.t(p,0))}else q=0
if(e.b.j(0,B.ha)!=null){o=e.dV(B.ha,A.aiX(a))
switch(e.f.a){case 0:n=0
break
case 1:n=a.a-o.a
break
default:n=null}m=o.a
e.ec(B.ha,new A.t(n,(a.b-o.b)/2))}else m=0
if(e.b.j(0,B.h9)!=null){s=a.a
r=e.e
l=Math.max(s-q-m-r*2,0)
k=e.dV(B.h9,A.aiX(a).a1s(l))
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
default:f=null}e.ec(B.h9,new A.t(f,(a.b-k.b)/2))}},
mZ(a){return a.d!==this.d||a.e!==this.e||a.f!==this.f}}
A.mV.prototype={
F(){return"RoutePopDisposition."+this.b}}
A.c0.prototype={
gu0(){return B.rH},
jr(){},
os(){var s=A.akg()
s.aB(new A.a55(this),t.H)
return s},
oq(){var s=this.a
if(s==null)s=null
else{s.a.toString
s=!0}if(s===!0)A.akg().aB(new A.a54(this),t.H)},
yR(a){},
fE(){var s=0,r=A.a2(t.ij),q,p=this
var $async$fE=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:q=p.gKt()?B.U1:B.Bc
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$fE,r)},
gMf(){return!1},
ks(a){this.a2c(a)
return!0},
a2c(a){this.d.bT(0,null)},
lY(a){},
or(a){},
yM(a){},
o9(){},
rE(){},
m(){this.a=null},
gkG(){var s,r=this.a
if(r==null)return!1
r=r.e
r=new A.bu(r,A.aj(r).h("bu<1,dn?>"))
s=r.mv(r,new A.a58(),new A.a59())
if(s==null)return!1
return s.a===this},
gKt(){var s,r=this.a
if(r==null)return!1
r=r.e
r=new A.bu(r,A.aj(r).h("bu<1,dn?>"))
s=r.tl(r,new A.a5a(),new A.a5b())
if(s==null)return!1
return s.a===this},
gty(){var s,r,q,p,o=this.a
if(o==null)return!1
for(o=o.e,s=o.length,r=0;r<s;++r){q=o[r]
if(q.a===this)return!1
p=q.d.a
if(p<=10&&p>=1)return!0}return!1},
ga4r(){var s=this.a
if(s==null)return!1
s=s.e
s=new A.bu(s,A.aj(s).h("bu<1,dn?>"))
s=s.tl(s,new A.a56(this),new A.a57())
s=s==null?null:s.gkH()
return s===!0}}
A.a55.prototype={
$1(a){var s,r=this.a.a
if(r==null)s=null
else{r.a.toString
s=!0}if(s===!0){r=r.x.gdR()
if(r!=null)r.uk()}},
$S:18}
A.a54.prototype={
$1(a){var s=this.a.a
if(s!=null){s=s.x.gdR()
if(s!=null)s.uk()}},
$S:18}
A.a58.prototype={
$1(a){return a!=null&&a.gkH()},
$S:26}
A.a59.prototype={
$0(){return null},
$S:3}
A.a5a.prototype={
$1(a){return a!=null&&a.gkH()},
$S:26}
A.a5b.prototype={
$0(){return null},
$S:3}
A.a56.prototype={
$1(a){return a!=null&&A.apn(this.a).$1(a)},
$S:26}
A.a57.prototype={
$0(){return null},
$S:3}
A.hc.prototype={
i(a){var s=this.a
s=s==null?"none":'"'+s+'"'
return"RouteSettings("+s+", "+A.h(this.b)+")"}}
A.j6.prototype={
rW(a,b){},
rV(a,b){},
yQ(a,b){},
rX(a,b){},
IY(a,b){},
ou(){}}
A.mc.prototype={
c1(a){return a.f!=this.f}}
A.a53.prototype={}
A.Ln.prototype={}
A.DS.prototype={}
A.vq.prototype={
ak(){var s=null,r=A.a([],t.hi),q=$.by(),p=t.a4
return new A.fj(r,new A.NQ(q),A.j2(s,p),A.j2(s,p),A.ajn(!0,"Navigator",!0,!0,s,s,!1),new A.wf(0,q,t.rj),A.jq(!1),A.b3(t.S),s,A.y(t.wb,t.M),s,!0,s,s,s,B.m)},
a5h(a,b){return this.z.$2(a,b)}}
A.a2G.prototype={
$1(a){return a==null},
$S:333}
A.e_.prototype={
F(){return"_RouteLifecycle."+this.b}}
A.ON.prototype={}
A.dn.prototype={
gcN(){var s,r
if(this.c){s=t.kd.a(this.a.b)
s.gcN()
r=A.h(s.gcN())
return"p+"+r}r=this.b
if(r!=null)return"r+"+r.gLK()
return null},
a3s(a,b,c,d){var s,r,q,p=this,o=p.d,n=p.a
n.a=b
n.jr()
s=p.d
if(s===B.Cw||s===B.Cx){r=n.os()
p.d=B.Cy
r.Me(new A.aeP(p,b))}else{n.yR(c)
p.d=B.cS}if(a)n.or(null)
s=o===B.a0D||o===B.Cx
q=b.r
if(s)q.ds(0,new A.yU(n,d))
else q.ds(0,new A.qN(n,d))},
a3r(a,b){var s,r=this
r.d=B.a0z
s=r.a
if((s.d.a.a&30)!==0)return!0
if(!s.ks(r.w)){r.d=B.cS
return!1}r.w=null
return!0},
m(){var s,r,q,p,o,n,m={}
this.d=B.a0B
s=this.a
r=s.gu0()
q=new A.aeN()
p=new A.aH(r,q,A.aj(r).h("aH<1>"))
if(!p.ga5(p).q())s.m()
else{m.a=p.gp(p)
for(s=B.c.ga5(r),q=new A.qb(s,q);q.q();){r=s.gG(s)
o=A.b6("listener")
n=new A.aeO(m,this,r,o)
o.b=n
r.d.Z(0,n)}}},
ga7a(){var s=this.d.a
return s<=7&&s>=1},
gkH(){var s=this.d.a
return s<=10&&s>=1}}
A.aeP.prototype={
$0(){var s=this.a
if(s.d===B.Cy){s.d=B.cS
this.b.wd()}},
$S:0}
A.aeN.prototype={
$1(a){return a.d.a},
$S:334}
A.aeO.prototype={
$0(){var s=this,r=s.a;--r.a
s.c.d.H(0,s.d.aA())
if(r.a===0)s.b.a.m()},
$S:0}
A.aeQ.prototype={
$1(a){return a.a===this.a},
$S:50}
A.la.prototype={}
A.qN.prototype={
kL(a){a.rW(this.a,this.b)}}
A.qM.prototype={
kL(a){a.rV(this.a,this.b)}}
A.yT.prototype={
kL(a){a.yQ(this.a,this.b)}}
A.yU.prototype={
kL(a){a.rX(this.a,this.b)}}
A.fj.prototype={
az(){var s,r,q,p,o=this
o.aW()
for(s=o.a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
$.hu().a.set(p,o)}o.Q=o.a.x
s=o.c.jP(t.hS)
if(s==null)s=null
else{s=s.f
s.toString}t.cn.a(s)
o.xL(s==null?null:s.f)
o.a.toString
B.fv.tE("selectSingleEntryHistory",t.H)},
iJ(a,b){var s,r,q,p,o,n,m=this
m.mF(m.as,"id")
s=m.f
m.mF(s,"history")
for(;r=m.e,r.length!==0;)r.pop().m()
m.d=new A.bB(null,t.r9)
B.c.J(r,s.LL(null,m))
m.a.toString
q=0
for(;!1;++q){p=B.MY[q]
r=m.c
r.toString
r=p.yz(r)
o=$.aiF()
n=new A.dn(r,null,!0,B.m1,o,o,o)
m.e.push(n)
B.c.J(m.e,s.LL(n,m))}if(s.y==null){s=m.a
r=m.e
o=s.f
B.c.J(r,J.AV(s.a5h(m,o),new A.a2F(m),t.ee))}m.wd()},
yT(a){var s,r=this
r.Po(a)
s=r.f
if(r.bl$!=null)s.bf(0,r.e)
else s.a0(0)},
gcN(){return this.a.y},
b4(){var s,r,q,p,o=this
o.Q7()
s=o.c.a7(t.hS)
o.xL(s==null?null:s.f)
for(r=o.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.P)(r),++p)r[p].a.rE()},
xL(a){var s,r,q=this
if(q.z!=a){if(a!=null)$.hu().a.set(a,q)
s=q.z
if(s==null)s=null
else{r=$.hu()
A.ov(s)
s=r.a.get(s)}if(s===q){s=$.hu()
r=q.z
r.toString
s.a.set(r,null)}q.z=a
q.Hr()}},
Hr(){var s=this,r=s.z,q=s.a
if(r!=null)s.Q=B.c.V(q.x,A.a([r],t.yx))
else s.Q=q.x},
aY(a){var s,r,q,p,o=this
o.Q8(a)
s=a.x
if(s!==o.a.x){for(r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
$.hu().a.set(p,null)}for(s=o.a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
$.hu().a.set(p,o)}o.Hr()}o.a.toString
for(s=o.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].a.rE()},
dD(){var s,r,q,p=this.Q
p===$&&A.b()
s=p.length
r=0
for(;r<p.length;p.length===s||(0,A.P)(p),++r){q=p[r]
$.hu().a.set(q,null)}this.nb()},
ce(){var s,r,q,p
this.Q5()
s=this.Q
s===$&&A.b()
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
$.hu().a.set(p,this)}},
m(){var s,r,q,p=this
p.xL(null)
p.x.m()
for(s=p.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].m()
p.Q9()},
gDv(){var s,r,q,p=A.a([],t.tD)
for(s=this.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)B.c.J(p,s[q].a.gu0())
return p},
we(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null
a.ay=!0
s=a.e
r=s.length-1
q=s[r]
p=r>0?s[r-1]:a0
o=A.a([],t.hi)
for(s=a.w,n=a.r,m=a0,l=m,k=!1,j=!1;r>=0;){switch(q.d.a){case 1:i=a.iV(r-1,A.alo())
h=i>=0?a.e[i]:a0
h=h==null?a0:h.a
g=q.a
g.a=a
g.jr()
q.d=B.a0C
n.ds(0,new A.qN(g,h))
continue
case 2:if(k||l==null){h=q.a
h.oq()
q.d=B.cS
if(l==null)h.or(a0)
continue}break
case 3:case 4:case 6:h=p==null?a0:p.a
i=a.iV(r-1,A.alo())
g=i>=0?a.e[i]:a0
g=g==null?a0:g.a
q.a3s(l==null,a,h,g)
if(q.d===B.cS)continue
break
case 5:if(!j&&m!=null){q.a.lY(m)
q.f=m}j=!0
break
case 7:if(!j&&m!=null){q.a.lY(m)
q.f=m}k=!0
j=!0
break
case 8:i=a.iV(r,A.AK())
h=i>=0?a.e[i]:a0
if(!q.a3r(a,h==null?a0:h.a))continue
if(!j){if(m!=null){q.a.lY(m)
q.f=m}m=q.a}h=q.a
i=a.iV(r,A.AK())
g=i>=0?a.e[i]:a0
s.ds(0,new A.qM(h,g==null?a0:g.a))
if(q.d===B.m2)continue
k=!0
break
case 11:break
case 9:h=q.a
h=h.d.a
if((h.a&30)!==0)A.K(A.a5("Future already completed"))
h.fe(a0)
q.w=null
q.d=B.a0y
continue
case 10:if(!j){if(m!=null)q.a.lY(m)
m=a0}i=a.iV(r,A.AK())
h=i>=0?a.e[i]:a0
h=h==null?a0:h.a
q.d=B.a0A
if(q.x)s.ds(0,new A.yT(q.a,h))
continue
case 12:if(!k&&l!=null)break
q.d=B.m2
continue
case 13:o.push(B.c.ed(a.e,r))
q=l
break
case 14:case 0:break}--r
f=r>0?a.e[r-1]:a0
l=q
q=p
p=f}a.U_()
a.U1()
a.a.toString
s=a.e
s=new A.bu(s,A.aj(s).h("bu<1,dn?>"))
e=s.mv(s,new A.a2z(),new A.a2A())
d=e==null?a0:e.a.b.a
if(d!=null&&d!==a.at){A.aoL(d,!1,a0)
a.at=d}for(s=o.length,c=0;c<o.length;o.length===s||(0,A.P)(o),++c){q=o[c]
for(n=q.a.gu0(),h=n.length,b=0;b<n.length;n.length===h||(0,A.P)(n),++b)J.aui(n[b])
q.m()}if(a1){s=a.d
s===$&&A.b()
s=s.gbw()
if(s!=null)s.a6_(a.gDv())}if(a.bl$!=null)a.f.bf(0,a.e)
a.ay=!1},
wd(){return this.we(!0)},
U_(){var s,r=this,q=r.Q
q===$&&A.b()
if(q.length===0){r.w.a0(0)
r.r.a0(0)
return}for(q=r.r;!q.gN(q);){s=q.dY(0)
B.c.Y(r.Q,s.gpi())}for(q=r.w;!q.gN(q);){s=q.mH()
B.c.Y(r.Q,s.gpi())}},
U1(){var s,r,q,p,o,n,m=this,l=null,k=m.e.length-1
for(;k>=0;){s=m.e[k]
r=s.d.a
if(!(r<=12&&r>=3)){--k
continue}q=m.Ut(k+1,A.arv())
r=q==null
p=r?l:q.a
o=s.r
if(p!=o){if((r?l:q.a)==null){p=s.f
p=p!=null&&p===o}else p=!1
if(!p){p=s.a
p.or(r?l:q.a)}s.r=r?l:q.a}--k
n=m.iV(k,A.arv())
r=n>=0?m.e[n]:l
p=r==null
o=p?l:r.a
if(o!=s.e){o=s.a
o.yM(p?l:r.a)
s.e=p?l:r.a}}},
EN(a,b){a=this.iV(a,b)
return a>=0?this.e[a]:null},
iV(a,b){while(!0){if(!(a>=0&&!b.$1(this.e[a])))break;--a}return a},
Ut(a,b){var s
while(!0){s=this.e
if(!(a<s.length&&!b.$1(s[a])))break;++a}s=this.e
return a<s.length?s[a]:null},
r_(a,b,c,d){var s,r,q
if(b)this.a.toString
s=new A.hc(a,c)
r=d.h("c0<0?>?")
q=r.a(this.a.r.$1(s))
return q==null&&!b?r.a(this.a.w.$1(s)):q},
xp(a,b,c){return this.r_(a,!1,b,c)},
Dt(a){this.Sq()},
pd(a){var s=0,r=A.a2(t.y),q,p=this,o,n,m
var $async$pd=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)$async$outer:switch(s){case 0:m=p.e
m=new A.bu(m,A.aj(m).h("bu<1,dn?>"))
o=m.mv(m,new A.a2B(),new A.a2C())
if(o==null){q=!1
s=1
break}s=3
return A.a4(o.a.fE(),$async$pd)
case 3:n=c
if(p.c==null){q=!0
s=1
break}m=p.e
m=new A.bu(m,A.aj(m).h("bu<1,dn?>"))
if(o!==m.mv(m,new A.a2D(),new A.a2E())){q=!0
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
return A.a1($async$pd,r)},
KN(){return this.pd(null,t.X)},
a53(a){return this.pd(a,t.X)},
Lb(a){var s=this,r=B.c.a4H(s.e,A.alo())
if(r.c){s.a.toString
if(null.$2(r.a,a)&&r.d===B.cS)r.d=B.m3}else{r.w=a
r.d=B.m3}if(r.d===B.m3)s.we(!1)
s.Dt(r.a)},
hS(){return this.Lb(null,t.X)},
a5F(a){return this.Lb(a,t.X)},
JB(a){var s,r=this,q=B.c.K8(r.e,A.apn(a)),p=r.e[q]
if(p.c&&p.d.a<8){s=r.EN(q-1,A.AK())
s=s==null?null:s.a
r.w.ds(0,new A.qM(a,s))}p.d=B.m2
if(!r.ay)r.we(!1)},
sHH(a){this.ch=a
this.CW.sn(0,a>0)},
a2g(){var s,r,q,p,o,n,m=this
m.sHH(m.ch+1)
if(m.ch===1){s=m.iV(m.e.length-1,A.AK())
r=m.e[s].a
q=!r.gMf()&&s>0?m.EN(s-1,A.AK()).a:null
p=m.Q
p===$&&A.b()
o=p.length
n=0
for(;n<p.length;p.length===o||(0,A.P)(p),++n)p[n].IY(r,q)}},
ou(){var s,r,q,p=this
p.sHH(p.ch-1)
if(p.ch===0){s=p.Q
s===$&&A.b()
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].ou()}},
VE(a){this.cx.B(0,a.gbW())},
VM(a){this.cx.u(0,a.gbW())},
Sq(){if($.bP.fy$===B.cH){var s=this.d
s===$&&A.b()
s=$.ai.a4$.z.j(0,s)
this.ar(new A.a2y(s==null?null:s.th(t.CE)))}s=this.cx
B.c.Y(A.aA(s,!0,A.n(s).c),$.ai.ga0z())},
L(a){var s,r=this,q=null,p=r.gVL(),o=A.an8(a),n=r.bl$,m=r.d
m===$&&A.b()
r.a.toString
if(m.gbw()==null){s=r.gDv()
s=J.mn(s.slice(0),A.aj(s).c)}else s=B.rH
return new A.mc(q,A.FY(B.bR,new A.AX(!1,A.an7(A.F2(!0,q,A.aai(n,new A.p4(s,B.S,m)),q,q,q,r.x,!1,q,q,q,q,q,!0),o),q),p,r.gVD(),q,q,p),q)}}
A.a2F.prototype={
$1(a){var s,r,q=a.b.a
if(q!=null){s=this.a.as
r=s.y
if(r==null)r=s.$ti.h("bV.T").a(r)
s.Pn(0,r+1)
q=new A.OH(r,q,null,B.m4)}else q=null
return A.apm(a,B.m1,!1,q)},
$S:337}
A.a2z.prototype={
$1(a){return a!=null&&a.gkH()},
$S:26}
A.a2A.prototype={
$0(){return null},
$S:3}
A.a2B.prototype={
$1(a){return a!=null&&a.gkH()},
$S:26}
A.a2C.prototype={
$0(){return null},
$S:3}
A.a2D.prototype={
$1(a){return a!=null&&a.gkH()},
$S:26}
A.a2E.prototype={
$0(){return null},
$S:3}
A.a2y.prototype={
$0(){var s=this.a
if(s!=null)s.sHR(!0)},
$S:0}
A.qY.prototype={
F(){return"_RouteRestorationType."+this.b}}
A.Q9.prototype={
gKw(){return!0},
rI(){return A.a([this.a.a],t.f)}}
A.OH.prototype={
rI(){var s=this,r=s.Qp(),q=A.a([s.c,s.d],t.f),p=s.e
if(p!=null)q.push(p)
B.c.J(r,q)
return r},
yz(a){var s=a.xp(this.d,this.e,t.z)
s.toString
return s},
gLK(){return this.c}}
A.akp.prototype={
gKw(){return!1},
rI(){A.ay7(this.d)},
yz(a){var s=a.c
s.toString
return this.d.$2(s,this.e)},
gLK(){return this.c}}
A.NQ.prototype={
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
n=J.auo(J.AU(q))
for(q=a1.length,m=b,l=a,k=!0,j=0;j<a1.length;a1.length===q||(0,A.P)(a1),++j){i=a1[j]
if(i.d.a>7){h=i.a
h.c.sn(0,b)
continue}if(i.c){l=l||r.length!==J.bI(p)
h=r.length
if(h!==0){g=m==null?b:m.gcN()
o.l(0,g,r)
n.u(0,g)}k=i.gcN()!=null
h=i.a
f=k?i.gcN():b
h.c.sn(0,f)
if(k){r=A.a([],s)
h=c.y
h.toString
p=J.aO(h,i.gcN())
if(p==null)p=B.dh}else{r=B.dh
p=B.dh}m=i
continue}if(k){h=i.b
h=h==null?b:h.gKw()
k=h===!0}else k=!1
h=i.a
f=k?i.gcN():b
h.c.sn(0,f)
if(k){h=i.b
f=h.b
h=f==null?h.b=h.rI():f
if(!l){f=J.aJ(p)
e=f.gp(p)
d=r.length
l=e<=d||!J.f(f.j(p,d),h)}else l=!0
B.c.B(r,h)}}l=l||r.length!==J.bI(p)
c.TM(r,m,o,n)
if(l||n.gbE(n)){c.y=o
c.av()}},
TM(a,b,c,d){var s,r=a.length
if(r!==0){s=b==null?null:b.gcN()
c.l(0,s,a)
d.u(0,s)}},
a0(a){if(this.y==null)return
this.y=null
this.av()},
LL(a,b){var s,r,q,p,o,n=A.a([],t.hi)
if(this.y!=null)s=a!=null&&a.gcN()==null
else s=!0
if(s)return n
s=this.y
s.toString
r=J.aO(s,a==null?null:a.gcN())
if(r==null)return n
for(s=J.at(r);s.q();){q=A.aAK(s.gG(s))
p=q.yz(b)
o=$.aiF()
n.push(new A.dn(p,q,!1,B.m1,o,o,o))}return n},
rN(){return null},
mk(a){a.toString
return J.amb(t.G.a(a),new A.acU(),t.dR,t.lC)},
Kb(a){this.y=a},
mN(){return this.y},
gm0(a){return this.y!=null}}
A.acU.prototype={
$2(a,b){return new A.aq(A.co(a),A.eP(t.j.a(b),!0,t.K),t.cj)},
$S:338}
A.ae7.prototype={
$2(a,b){if(!a.a)a.H(0,b)},
$S:35}
A.yV.prototype={
ce(){this.e3()
this.d3()
this.fl()},
m(){var s=this,r=s.b9$
if(r!=null)r.H(0,s.geN())
s.b9$=null
s.aS()}}
A.yW.prototype={
aY(a){this.bp(a)
this.ow()},
b4(){var s,r,q,p,o=this
o.cG()
s=o.bl$
r=o.gmJ()
q=o.c
q.toString
q=A.pp(q)
o.c4$=q
p=o.lJ(q,r)
if(r){o.iJ(s,o.bq$)
o.bq$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.fs$.Y(0,new A.ae7())
s=r.bl$
if(s!=null)s.m()
r.bl$=null
r.Q6()}}
A.Ic.prototype={
i(a){var s=A.a([],t.s)
this.ck(s)
return"Notification("+B.c.b3(s,", ")+")"},
ck(a){}}
A.de.prototype={
bU(a){return new A.yX(this,B.a5,this.$ti.h("yX<1>"))}}
A.yX.prototype={
L0(a){var s,r=this.f
r.toString
s=this.$ti
s.h("de<1>").a(r)
if(s.c.b(a))return r.d.$1(a)
return!1},
my(a){}}
A.eO.prototype={}
A.Sj.prototype={}
A.fl.prototype={
smB(a){var s
if(this.b===a)return
this.b=a
s=this.e
if(s!=null)s.Eh()},
spb(a){if(this.c)return
this.c=!0
this.e.Eh()},
H(a,b){this.d.H(0,b)},
mG(a){var s,r=this.e
r.toString
this.e=null
if(r.c==null)return
B.c.u(r.d,this)
s=$.bP
if(s.fy$===B.Bd)s.dy$.push(new A.a2X(r))
else r.Ft()},
h4(){var s=this.f.gbw()
if(s!=null)s.Fv()},
i(a){return"<optimized out>#"+A.bM(this)+"(opaque: "+this.b+"; maintainState: "+this.c+")"},
$iab:1,
Ii(a){return this.a.$1(a)}}
A.a2X.prototype={
$1(a){this.a.Ft()},
$S:2}
A.qP.prototype={
ak(){return new A.yY(B.m)}}
A.yY.prototype={
az(){this.aW()
this.a.c.d.sn(0,!0)},
m(){this.a.c.d.sn(0,!1)
this.a.toString
this.aS()},
L(a){var s=this.a
return new A.q3(s.d,s.c.Ii(a),null)},
Fv(){this.ar(new A.aeb())}}
A.aeb.prototype={
$0(){},
$S:0}
A.p4.prototype={
ak(){return new A.p6(A.a([],t.tD),null,null,B.m)}}
A.p6.prototype={
az(){this.aW()
this.a49(0,this.a.c)},
wO(a,b){return this.d.length},
zD(a,b){b.e=this
this.ar(new A.a30(this,null,null,b))},
a49(a,b){var s,r=b.length
if(r===0)return
for(s=0;s<r;++s)b[s].e=this
this.ar(new A.a3_(this,null,null,b))},
a6_(a){var s,r,q,p,o,n=this
if(t.rF.b(a))s=a
else s=J.mn(a.slice(0),A.aj(a).c)
if(s.length===0)return
r=n.d
if(A.cS(r,s))return
q=A.ks(r,t.u7)
for(r=s.length,p=0;p<r;++p){o=s[p]
if(o.e==null)o.e=n}n.ar(new A.a31(n,s,q,null,null))},
Ft(){if(this.c!=null)this.ar(new A.a2Z())},
Eh(){this.ar(new A.a2Y())},
L(a){var s,r,q,p,o,n=A.a([],t.E)
for(s=this.d,r=s.length-1,q=!0,p=0;r>=0;--r){o=s[r]
if(q){++p
n.push(new A.qP(o,!0,o.f))
q=!o.b||!1}else if(o.c)n.push(new A.qP(o,!1,o.f))}s=t.m8
return new A.Rh(n.length-p,this.a.d,A.aA(new A.cy(n,s),!1,s.h("bm.E")),null)}}
A.a30.prototype={
$0(){var s=this,r=s.a
B.c.mn(r.d,r.wO(s.b,s.c),s.d)},
$S:0}
A.a3_.prototype={
$0(){var s=this,r=s.a
B.c.oY(r.d,r.wO(s.b,s.c),s.d)},
$S:0}
A.a31.prototype={
$0(){var s,r,q=this,p=q.a,o=p.d
B.c.a0(o)
s=q.b
B.c.J(o,s)
r=q.c
r.a67(s)
B.c.oY(o,p.wO(q.d,q.e),r)},
$S:0}
A.a2Z.prototype={
$0(){},
$S:0}
A.a2Y.prototype={
$0(){},
$S:0}
A.Rh.prototype={
bU(a){var s=A.cV(t.h)
return new A.Ri(s,this,B.a5)},
aD(a){var s=a.a7(t.I)
s.toString
s=new A.qX(s.w,this.e,this.f,A.aw(),0,null,null,A.aw())
s.aH()
s.J(0,null)
return s},
aL(a,b){var s=this.e
if(b.al!==s){b.al=s
b.a9()}s=a.a7(t.I)
s.toString
b.sbK(s.w)
s=this.f
if(s!==b.aN){b.aN=s
b.ao()
b.b2()}}}
A.Ri.prototype={
gaa(){return t.z2.a(A.eQ.prototype.gaa.call(this))}}
A.qX.prototype={
eB(a){if(!(a.e instanceof A.dX))a.e=new A.dX(null,null,B.j)},
XO(){if(this.P!=null)return
this.P=B.aS.W(this.ae)},
sbK(a){var s=this
if(s.ae===a)return
s.ae=a
s.P=null
s.a9()},
gqn(){var s,r,q,p,o=this
if(o.al===A.av.prototype.grF.call(o))return null
s=A.av.prototype.ga2P.call(o,o)
for(r=o.al,q=t.B;r>0;--r){p=s.e
p.toString
s=q.a(p).ap$}return s},
eS(a){var s,r,q,p,o=this.gqn()
for(s=t.B,r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.jO(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.ap$}return r},
gjW(){return!0},
cf(a){return new A.a6(A.H(1/0,a.a,a.b),A.H(1/0,a.c,a.d))},
bJ(){var s,r,q,p,o,n,m,l,k=this
k.E=!1
if(k.dE$-k.al===0)return
k.XO()
s=t.k.a(A.z.prototype.ga1.call(k))
r=A.Bq(new A.a6(A.H(1/0,s.a,s.b),A.H(1/0,s.c,s.d)))
q=k.gqn()
for(s=t.B,p=t.uu;q!=null;){o=q.e
o.toString
s.a(o)
if(!o.gzK()){q.cz(r,!0)
n=k.P
n.toString
m=k.k3
m.toString
l=q.k3
l.toString
o.a=n.lP(p.a(m.ab(0,l)))}else{n=k.k3
n.toString
m=k.P
m.toString
k.E=A.aoh(q,o,n,m)||k.E}q=o.ap$}},
cX(a,b){var s,r,q,p=this,o={},n=o.a=p.al===A.av.prototype.grF.call(p)?null:p.d9$
for(s=t.B,r=0;r<p.dE$-p.al;++r,n=q){n=n.e
n.toString
s.a(n)
if(a.nX(new A.aeB(o,b,n),n.a,b))return!0
q=n.c5$
o.a=q}return!1},
u4(a,b){var s,r,q,p,o,n=this.gqn()
for(s=t.B,r=b.a,q=b.b;n!=null;){p=n.e
p.toString
s.a(p)
o=p.a
a.f6(n,new A.t(o.a+r,o.b+q))
n=p.ap$}},
aF(a,b){var s,r=this,q=r.E&&r.aN!==B.l,p=r.aQ
if(q){q=r.cx
q===$&&A.b()
s=r.k3
p.saZ(0,a.kO(q,b,new A.C(0,0,0+s.a,0+s.b),r.gAD(),r.aN,p.a))}else{p.saZ(0,null)
r.u4(a,b)}},
m(){this.aQ.saZ(0,null)
this.i8()},
ha(a){var s,r,q=this.gqn()
for(s=t.B;q!=null;){a.$1(q)
r=q.e
r.toString
q=s.a(r).ap$}},
j8(a){var s
switch(this.aN.a){case 0:return null
case 1:case 2:case 3:if(this.E){s=this.k3
s=new A.C(0,0,0+s.a,0+s.b)}else s=null
return s}}}
A.aeB.prototype={
$2(a,b){return this.a.a.bY(a,b)},
$S:17}
A.OY.prototype={
ce(){this.e3()
this.d3()
this.fl()},
m(){var s=this,r=s.b9$
if(r!=null)r.H(0,s.geN())
s.b9$=null
s.aS()}}
A.Sp.prototype={
am(a){var s,r,q
this.eF(a)
s=this.aq$
for(r=t.B;s!=null;){s.am(a)
q=s.e
q.toString
s=r.a(q).ap$}},
ah(a){var s,r,q
this.e1(0)
s=this.aq$
for(r=t.B;s!=null;){s.ah(0)
q=s.e
q.toString
s=r.a(q).ap$}}}
A.oB.prototype={
ak(){var s=t.y
return new A.yj(A.aY([!1,!0,!0,!0],s,s),null,null,B.m)},
jy(a){return A.AM().$1(a)}}
A.yj.prototype={
az(){var s,r,q=this
q.aW()
s=q.a
r=s.f
q.d=A.apd(A.bd(s.e),r,q)
r=q.a
s=r.f
s=A.apd(A.bd(r.e),s,q)
q.e=s
r=q.d
r.toString
q.f=new A.yI(A.a([r,s],t.ro))},
aY(a){var s,r=this
r.bp(a)
if(!a.f.k(0,r.a.f)||A.bd(a.e)!==A.bd(r.a.e)){s=r.d
s.toString
s.sag(0,r.a.f)
s=r.d
s.toString
s.sI9(A.bd(r.a.e))
s=r.e
s.toString
s.sag(0,r.a.f)
s=r.e
s.toString
s.sI9(A.bd(r.a.e))}},
x6(a){var s,r,q,p,o,n,m,l,k,j=this
if(!j.a.jy(a))return!1
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
s.d5(new A.vC(m,0))
s=j.w
s.l(0,m,!0)
s.j(0,m).toString
n.d=0
j.w.j(0,m).toString
s=a.f
if(s!==0){r=n.c
if(r!=null)r.ai(0)
n.c=null
l=A.H(Math.abs(s),100,1e4)
s=n.f
if(n.a===B.fZ)r=0.3
else{r=n.r
r===$&&A.b()
q=r.a
q=r.b.af(0,q.gn(q))
r=q}s.a=r
r.toString
s.b=A.H(l*0.00006,r,0.5)
r=n.w
s=n.x
s===$&&A.b()
q=s.a
r.a=s.b.af(0,q.gn(q))
r.b=Math.min(0.025+75e-8*l*l,1)
r=n.b
r===$&&A.b()
r.e=A.c7(0,B.d.bc(0.15+l*0.02),0)
r.kE(0,0)
n.as=0.5
n.a=B.a06}else{s=a.d
if(s!=null){p=a.b.gaa()
p.toString
t.x.a(p)
o=p.k3
o.toString
k=p.l_(s.d)
switch(A.bd(r.e).a){case 0:n.toString
s=o.b
n.Li(0,Math.abs(q),o.a,A.H(k.b,0,s),s)
break
case 1:n.toString
s=o.a
n.Li(0,Math.abs(q),o.b,A.H(k.a,0,s),s)
break}}}}else if(a instanceof A.je||a instanceof A.ib)if(a.gJ6()!=null){s=j.d
if(s.a===B.h_)s.kc(B.d3)
s=j.e
if(s.a===B.h_)s.kc(B.d3)}j.r=A.A(a)
return!1},
m(){this.d.m()
this.e.m()
this.R1()},
L(a){var s=this,r=null,q=s.a,p=s.d,o=s.e,n=q.e,m=s.f
return new A.de(s.gx5(),new A.i8(A.DB(new A.i8(q.w,r),new A.NP(p,o,n,m),r,r,B.R),r),r,t.Bf)}}
A.nA.prototype={
F(){return"_GlowState."+this.b}}
A.yi.prototype={
sag(a,b){if(this.ax.k(0,b))return
this.ax=b
this.av()},
sI9(a){if(this.ay===a)return
this.ay=a
this.av()},
m(){var s=this,r=s.b
r===$&&A.b()
r.m()
r=s.y
r===$&&A.b()
r.w.d8$.u(0,r)
r.D0()
r=s.c
if(r!=null)r.ai(0)
s.e2()},
Li(a,b,c,d,e){var s,r,q,p=this,o=p.c
if(o!=null)o.ai(0)
p.at=p.at+b/200
o=p.f
s=p.r
s===$&&A.b()
r=s.b
s=s.a
o.a=r.af(0,s.gn(s))
o.b=Math.min(r.af(0,s.gn(s))+b/c*0.8,0.5)
q=Math.min(c,e*0.20096189432249995)
s=p.w
r=p.x
r===$&&A.b()
o=r.b
r=r.a
s.a=o.af(0,r.gn(r))
s.b=Math.max(1-1/(0.7*Math.sqrt(p.at*q)),A.iF(o.af(0,r.gn(r))))
r=d/e
p.Q=r
if(r!==p.as){o=p.y
o===$&&A.b()
if(!o.ga4A())o.n4(0)}else{o=p.y
o===$&&A.b()
o.hf(0)
p.z=null}o=p.b
o===$&&A.b()
o.e=B.nt
if(p.a!==B.h_){o.kE(0,0)
p.a=B.h_}else{o=o.r
if(!(o!=null&&o.a!=null))p.av()}p.c=A.cb(B.nt,new A.acC(p))},
vD(a){var s=this
if(a!==B.X)return
switch(s.a.a){case 1:s.kc(B.d3)
break
case 3:s.a=B.fZ
s.at=0
break
case 2:case 0:break}},
kc(a){var s,r,q=this,p=q.a
if(p===B.Cs||p===B.fZ)return
p=q.c
if(p!=null)p.ai(0)
q.c=null
p=q.f
s=q.r
s===$&&A.b()
r=s.a
p.a=s.b.af(0,r.gn(r))
p.b=0
p=q.w
r=q.x
r===$&&A.b()
s=r.a
p.a=r.b.af(0,s.gn(s))
p.b=0
p=q.b
p===$&&A.b()
p.e=a
p.kE(0,0)
q.a=B.Cs},
ZU(a){var s,r=this,q=r.z
if(q!=null){q=q.a
s=r.Q
r.as=s-(s-r.as)*Math.pow(2,-(a.a-q)/$.asP().a)
r.av()}if(A.AL(r.Q,r.as,0.001)){q=r.y
q===$&&A.b()
q.hf(0)
r.z=null}else r.z=a},
aF(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.r
i===$&&A.b()
s=i.a
if(J.f(i.b.af(0,s.gn(s)),0))return
s=b.a
r=b.b
q=s>r?r/s:1
p=s*3/2
o=Math.min(r,s*0.20096189432249995)
r=j.x
r===$&&A.b()
n=r.a
n=r.b.af(0,n.gn(n))
r=j.as
m=$.ap().bk()
l=j.ax
k=i.a
m.sag(0,A.b2(B.d.bc(255*i.b.af(0,k.gn(k))),l.gn(l)>>>16&255,l.gn(l)>>>8&255,l.gn(l)&255))
a.cD(0)
a.aw(0,0,j.d+j.e)
a.dK(0,1,n*q)
a.kn(new A.C(0,0,0+s,0+o))
a.im(new A.t(s/2*(0.5+r),o-p),p,m)
a.cA(0)},
i(a){return"_GlowController(color: "+this.ax.i(0)+", axis: "+A.aDA(this.ay)+")"}}
A.acC.prototype={
$0(){return this.a.kc(B.hD)},
$S:0}
A.NP.prototype={
FO(a,b,c,d,e){var s
if(c==null)return
switch(A.jP(d,e)){case B.y:c.aF(a,b)
break
case B.x:a.cD(0)
a.aw(0,0,b.b)
a.dK(0,1,-1)
c.aF(a,b)
a.cA(0)
break
case B.ae:a.cD(0)
a.kS(0,1.5707963267948966)
a.dK(0,1,-1)
c.aF(a,new A.a6(b.b,b.a))
a.cA(0)
break
case B.au:a.cD(0)
s=b.a
a.aw(0,s,0)
a.kS(0,1.5707963267948966)
c.aF(a,new A.a6(b.b,s))
a.cA(0)
break}},
aF(a,b){var s=this,r=s.d
s.FO(a,b,s.b,r,B.nH)
s.FO(a,b,s.c,r,B.nG)},
i4(a){return a.b!=this.b||a.c!=this.c},
i(a){return"_GlowingOverscrollIndicatorPainter("+A.h(this.b)+", "+A.h(this.c)+")"}}
A.pP.prototype={
ak(){return new A.zL(null,null,B.m)},
jy(a){return A.AM().$1(a)}}
A.zL.prototype={
gkg(){var s,r,q,p,o,n,m=this,l=null,k=m.d
if(k===$){s=t.a7
r=new A.aL(0,0,s)
q=new A.zK(r,B.m9,$.by())
p=A.e1(l,l,l,l,m)
p.by()
o=p.cs$
o.b=!0
o.a.push(q.gvC())
q.a!==$&&A.eA()
q.a=p
n=A.el(B.n0,p,l)
n.a.Z(0,q.gev())
t.m.a(n)
q.b!==$&&A.eA()
q.b=new A.aZ(n,r,s.h("aZ<aF.T>"))
m.d!==$&&A.bi()
m.d=q
k=q}return k},
x6(a){var s,r,q,p,o,n,m=this
if(!m.a.jy(a))return!1
if(a instanceof A.hY){m.f=a
J.X(m.e)
s=a.e
r=m.c
r.d5(new A.vC(s<0,0))
m.r=!0
r=a.f
if(r!==0){s=m.gkg()
q=A.H(Math.abs(r),1,1e4)
r=s.c
p=s.b
p===$&&A.b()
o=p.a
r.a=p.b.af(0,o.gn(o))
r.b=Math.min(0.016+1.01/q,1)
r=s.a
r===$&&A.b()
r.e=A.c7(0,B.d.bc(q*0.02),0)
r.kE(0,0)
s.d=B.a0F}else if(a.d!=null){r=a.a.d
r.toString
n=A.H(Math.abs(s)/r+m.gkg().e,0,1)
r=m.gkg()
r.e=n
s=r.c
p=r.b
p===$&&A.b()
o=p.a
s.a=p.b.af(0,o.gn(o))
o=r.e
s.b=0.016*o+0.016*(1-Math.exp(-o*8.237217661997105))
o=r.a
o===$&&A.b()
o.e=B.hE
if(r.d!==B.ma){o.kE(0,0)
r.d=B.ma}else{s=o.r
if(!(s!=null&&s.a!=null))r.av()}}}else if(a instanceof A.je||a instanceof A.ib){s=m.gkg()
if(s.d===B.ma)s.kc(B.hE)}m.e=a
return!1},
Ub(a){switch(this.a.c.a){case 0:return a>0?B.mc:B.mb
case 1:return a>0?B.e3:B.hb
case 2:return a>0?B.mb:B.mc
case 3:return a>0?B.hb:B.e3}},
m(){var s=this.gkg(),r=s.a
r===$&&A.b()
r.m()
s.e2()
this.Rb()},
L(a){var s={},r=a.a7(t.l).f
s.a=null
return new A.de(this.gx5(),A.ly(this.gkg(),new A.afh(s,this,r.a),null),null,t.Bf)}}
A.afh.prototype={
$2(a,b){var s,r,q,p,o,n,m=this,l=m.b,k=l.gkg().b
k===$&&A.b()
s=k.a
s=k.b.af(0,s.gn(s))
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
k=A.v3(r,q,1)
l=l.a
n=A.aoT(p,l.f,k,!0)
return A.amC(n,s!==0&&o!==m.a.a?l.e:B.l)},
$S:339}
A.nI.prototype={
F(){return"_StretchState."+this.b}}
A.zK.prototype={
vD(a){var s=this
if(a!==B.X)return
switch(s.d.a){case 1:s.kc(B.hE)
break
case 3:s.d=B.m9
s.e=0
break
case 2:case 0:break}},
kc(a){var s,r,q=this,p=q.d
if(p===B.Cz||p===B.m9)return
p=q.c
s=q.b
s===$&&A.b()
r=s.a
p.a=s.b.af(0,r.gn(r))
p.b=0
p=q.a
p===$&&A.b()
p.e=a
p.kE(0,0)
q.d=B.Cz},
i(a){return"_StretchController()"}}
A.vC.prototype={
ck(a){this.Qa(a)
a.push("side: "+(this.a?"leading edge":"trailing edge"))}}
A.z_.prototype={
ck(a){var s,r
this.v8(a)
s=this.cV$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.Al.prototype={
ce(){this.e3()
this.d3()
this.fl()},
m(){var s=this,r=s.b9$
if(r!=null)r.H(0,s.geN())
s.b9$=null
s.aS()}}
A.Ar.prototype={
ce(){this.e3()
this.d3()
this.fl()},
m(){var s=this,r=s.b9$
if(r!=null)r.H(0,s.geN())
s.b9$=null
s.aS()}}
A.zG.prototype={
k(a,b){if(b==null)return!1
if(J.X(b)!==A.A(this))return!1
return b instanceof A.zG&&A.cS(b.a,this.a)},
gt(a){return A.df(this.a)},
i(a){return"StorageEntryIdentifier("+B.c.b3(this.a,":")+")"}}
A.a32.prototype={
Du(a){var s=A.a([],t.D5)
if(A.anV(a,s))a.Bp(new A.a33(s))
return s},
Mi(a,b){var s,r=this
if(r.a==null)r.a=A.y(t.K,t.z)
s=r.Du(a)
if(s.length!==0)r.a.l(0,new A.zG(s),b)},
Lp(a){var s
if(this.a==null)return null
s=this.Du(a)
return s.length!==0?this.a.j(0,new A.zG(s)):null}}
A.a33.prototype={
$1(a){return A.anV(a,this.a)},
$S:45}
A.p8.prototype={
L(a){return this.c}}
A.In.prototype={
I3(a,b,c){var s=t.sa.a(B.c.gbo(this.d))
if(s.ae!=null){s.ae=a
return A.bF(null,t.H)}return s.hx(s.kV(a),b,c)},
tH(a){var s=t.sa.a(B.c.gbo(this.d))
if(s.ae!=null){s.ae=a
return}s.dU(s.kV(a))},
IK(a,b,c){var s=null,r=new A.lb(this.z,this.as,B.fA,a,b,!0,s,A.jq(!1),$.by())
r.D8(b,s,!0,c,a)
r.D9(b,s,s,!0,c,a)
return r},
am(a){this.PC(a)
t.sa.a(a).spN(this.as)}}
A.Io.prototype={}
A.lb.prototype={
z4(a,b,c,d,e,f){return this.PM(a,b,c,d,e,null)},
spN(a){var s,r=this
if(r.al===a)return
s=r.gjD(r)
r.al=a
if(s!=null)r.zn(r.kV(s))},
gqC(){var s=this.ax
s.toString
return Math.max(0,s*(this.al-1)/2)},
pT(a,b){var s=Math.max(0,a-this.gqC())/(b*this.al),r=B.d.AZ(s)
if(Math.abs(s-r)<1e-10)return r
return s},
kV(a){var s=this.ax
s.toString
return a*s*this.al+this.gqC()},
gjD(a){var s,r,q=this,p=q.at
if(p!=null)s=!(q.z!=null&&q.Q!=null)
else s=!0
if(s)p=null
else{s=q.ae
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
BR(){var s,r,q=this,p=q.w,o=p.c
o.toString
o=A.a34(o)
if(o!=null){p=p.c
p.toString
s=q.ae
if(s==null){s=q.at
s.toString
r=q.ax
r.toString
r=q.pT(s,r)
s=r}o.Mi(p,s)}},
LN(){var s,r,q
if(this.at==null){s=this.w
r=s.c
r.toString
r=A.a34(r)
if(r==null)q=null
else{s=s.c
s.toString
q=r.Lp(s)}if(q!=null)this.P=q}},
BQ(){var s,r=this,q=r.ae
if(q==null){q=r.at
q.toString
s=r.ax
s.toString
s=r.pT(q,s)
q=s}r.w.e.sn(0,q)
q=$.he.aQ$
q===$&&A.b()
q.JG()},
LM(a,b){if(b)this.P=a
else this.dU(this.kV(a))},
o3(a){var s,r,q,p,o=this,n=o.ax
n=n!=null?n:null
if(a===n)return!0
o.PI(a)
s=o.at
s=s!=null?s:null
if(s==null)r=o.P
else if(n===0){q=o.ae
q.toString
r=q}else{n.toString
r=o.pT(s,n)}p=o.kV(r)
o.ae=a===0?r:null
if(p!==s){o.at=p
return!1}return!0},
kh(a){var s
this.PN(a)
if(!(a instanceof A.lb))return
s=a.ae
if(s!=null)this.ae=s},
o0(a,b){var s=a+this.gqC()
return this.PG(s,Math.max(s,b-this.gqC()))},
fU(){var s,r,q,p,o,n=this,m=null,l=n.z
if(l!=null&&n.Q!=null)l.toString
else l=m
if(n.z!=null&&n.Q!=null){s=n.Q
s.toString}else s=m
r=n.at
r=r!=null?r:m
q=n.ax
q=q!=null?q:m
p=n.w.a.c
o=n.al
return new A.Io(o,l,s,r,q,p)}}
A.qu.prototype={
kk(a){return new A.qu(!1,this.hz(a))},
glO(){return this.b}}
A.p7.prototype={
kk(a){return new A.p7(this.hz(a))},
Uq(a){var s,r
if(a instanceof A.lb){s=a.gjD(a)
s.toString
return s}s=a.at
s.toString
r=a.ax
r.toString
return s/r},
Ur(a,b){var s
if(a instanceof A.lb)return a.kV(b)
s=a.ax
s.toString
return b*s},
lU(a,b){var s,r,q,p,o,n=this
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
if(s)return n.PE(a,b)
q=n.gpD()
p=n.Uq(a)
s=q.c
if(b<-s)p-=0.5
else if(b>s)p+=0.5
o=n.Ur(a,B.d.AZ(p))
s=a.at
s.toString
if(o!==s){s=n.gl6()
r=a.at
r.toString
return new A.kM(o,A.zE(s,r-o,b),q)}return null}}
A.vD.prototype={
ak(){return new A.P0(B.m)}}
A.P0.prototype={
az(){this.aW()
this.d=this.a.r.z},
Uh(a){var s,r
this.a.toString
switch(0){case 0:s=a.a7(t.I)
s.toString
r=A.aio(s.w)
this.a.toString
return r}},
L(a){var s,r,q,p=this,o=p.Uh(a),n=p.a.w
n=new A.p7(B.zD.hz(n))
n=new A.qu(!1,null).hz(n)
s=p.a
r=s.Q
s=s.r
q=A.a5X(a).a1u(!1)
return new A.de(new A.aec(p),A.aos(o,s,r,new A.qu(!1,n),null,q,new A.aed(p,o)),null,t.Bf)}}
A.aec.prototype={
$1(a){if(a.cV$===0)this.a.a.toString
return!1},
$S:25}
A.aed.prototype={
$2(a,b){var s=this.a.a
return new A.np(this.b,b,0,B.Eu,s.as,A.a([new A.Kv(s.r.as,!0,s.z,null)],t.E),null)},
$S:340}
A.i_.prototype={
gmB(){return!0},
gyi(){return!1},
Ij(a){return!0}}
A.IM.prototype={
aD(a){var s=new A.JE(this.d,0,!1,!1,A.aw())
s.aH()
return s},
aL(a,b){b.sa5v(this.d)
b.sa5U(0)
b.sa0E(!1)
b.sa0D(!1)}}
A.a20.prototype={}
A.a3q.prototype={}
A.DQ.prototype={
wV(a){return this.Xa(a)},
Xa(a){var s=0,r=A.a2(t.H),q,p=this,o,n,m
var $async$wV=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:n=A.eg(a.b)
m=p.a
if(!m.R(0,n)){s=1
break}m=m.j(0,n)
m.toString
o=a.a
if(o==="Menu.selectedCallback"){m.ga7K().$0()
m.ga5p()
o=$.ai.a4$.f.f.e
o.toString
A.auv(o,m.ga5p(),t.q)}else if(o==="Menu.opened")m.ga7J(m).$0()
else if(o==="Menu.closed")m.ga7I(m).$0()
case 1:return A.a0(q,r)}})
return A.a1($async$wV,r)}}
A.pc.prototype={
c1(a){return this.f!=a.f}}
A.kK.prototype={
ak(){return new A.Qa(null,A.y(t.wb,t.M),null,!0,null,B.m)}}
A.Qa.prototype={
gcN(){return this.a.d},
iJ(a,b){},
L(a){return A.aai(this.bl$,this.a.c)}}
A.xB.prototype={
c1(a){return a.f!=this.f}}
A.wj.prototype={
ak(){return new A.ze(B.m)}}
A.ze.prototype={
b4(){var s,r=this
r.cG()
s=r.c
s.toString
r.r=A.pp(s)
r.wS()
if(r.d==null){r.a.toString
r.d=!1}},
aY(a){this.bp(a)
this.wS()},
gFk(){this.a.toString
return!1},
wS(){var s,r=this
if(r.gFk()&&!r.w){r.w=!0;++$.kJ.aO$
s=$.he.aQ$
s===$&&A.b()
s.ga6x().aB(new A.aeI(r),t.P)}},
YF(){var s,r=this
r.e=!1
r.f=null
s=$.he.aQ$
s===$&&A.b()
s.H(0,r.gxh())
r.wS()},
m(){if(this.e){var s=$.he.aQ$
s===$&&A.b()
s.H(0,this.gxh())}this.aS()},
L(a){var s,r,q=this,p=q.d
p.toString
if(p&&q.gFk())return B.fO
p=q.r
if(p==null)p=q.f
s=q.a
r=s.d
return A.aai(p,new A.kK(s.c,r,null))}}
A.aeI.prototype={
$1(a){var s,r=this.a
r.w=!1
if(r.c!=null){s=$.he.aQ$
s===$&&A.b()
s.Z(0,r.gxh())
r.ar(new A.aeH(r,a))}$.kJ.I0()},
$S:341}
A.aeH.prototype={
$0(){var s=this.a
s.f=this.b
s.e=!0
s.d=!1},
$S:0}
A.dB.prototype={
gm0(a){return!0},
m(){var s=this,r=s.c
if(r!=null){r=r.fs$.u(0,s)
r.toString
s.H(0,r)
s.c=s.b=null}s.e2()
s.a=!0}}
A.ia.prototype={
yT(a){},
mF(a,b){var s,r,q=this,p=q.bl$
p=p==null?null:J.e0(p.giY(),b)
s=p===!0
r=s?a.mk(J.aO(q.bl$.giY(),b)):a.rN()
if(a.b==null){a.b=b
a.c=q
p=new A.a51(q,a)
a.Z(0,p)
q.fs$.l(0,a,p)}a.Kb(r)
if(!s&&a.gm0(a)&&q.bl$!=null)q.xP(a)},
ow(){var s,r,q=this
if(q.c4$!=null){s=q.bl$
s=s==null?null:s.e
s=s==q.gcN()||q.gmJ()}else s=!0
if(s)return
r=q.bl$
if(q.lJ(q.c4$,!1))if(r!=null)r.m()},
gmJ(){var s,r,q=this
if(q.bq$)return!0
if(q.gcN()==null)return!1
s=q.c
s.toString
r=A.pp(s)
if(r!=q.c4$){if(r==null)s=null
else{s=r.c
s=s==null?null:s.d
s=s===!0}s=s===!0}else s=!1
return s},
lJ(a,b){var s,r,q=this
if(q.gcN()==null||a==null)return q.GD(null,b)
if(b||q.bl$==null){s=q.gcN()
s.toString
return q.GD(a.a0M(s,q),b)}s=q.bl$
s.toString
r=q.gcN()
r.toString
s.a6c(r)
r=q.bl$
r.toString
a.ig(r)
return!1},
GD(a,b){var s,r=this,q=r.bl$
if(a==q)return!1
r.bl$=a
if(!b){if(a!=null){s=r.fs$
new A.b8(s,A.n(s).h("b8<1>")).Y(0,r.ga_j())}r.yT(q)}return!0},
xP(a){var s,r=a.gm0(a),q=this.bl$
if(r){if(q!=null){r=a.b
r.toString
s=a.mN()
if(!J.f(J.aO(q.giY(),r),s)||!J.e0(q.giY(),r)){J.cG(q.giY(),r,s)
q.lt()}}}else if(q!=null){r=a.b
r.toString
q.a66(0,r,t.K)}}}
A.a51.prototype={
$0(){var s=this.a
if(s.bl$==null)return
s.xP(this.b)},
$S:0}
A.agd.prototype={
$2(a,b){if(!a.a)a.H(0,b)},
$S:35}
A.Sq.prototype={
aY(a){this.bp(a)
this.ow()},
b4(){var s,r,q,p,o=this
o.cG()
s=o.bl$
r=o.gmJ()
q=o.c
q.toString
q=A.pp(q)
o.c4$=q
p=o.lJ(q,r)
if(r){o.iJ(s,o.bq$)
o.bq$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.fs$.Y(0,new A.agd())
s=r.bl$
if(s!=null)s.m()
r.bl$=null
r.aS()}}
A.bV.prototype={
sn(a,b){var s=this.y
if(b==null?s!=null:b!==s){this.y=b
this.yV(s)}},
Kb(a){this.y=a}}
A.hp.prototype={
rN(){return this.cy},
yV(a){this.av()},
mk(a){return A.n(this).h("hp.T").a(a)},
mN(){var s=this.y
return s==null?A.n(this).h("bV.T").a(s):s}}
A.zd.prototype={
mk(a){return this.Qn(a)},
mN(){var s=this.Qo()
s.toString
return s}}
A.wf.prototype={}
A.we.prototype={}
A.age.prototype={
$2(a,b){if(!a.a)a.H(0,b)},
$S:35}
A.pr.prototype={}
A.JV.prototype={
ak(){return new A.qZ(new A.Q7($.by()),null,A.y(t.wb,t.M),null,!0,null,B.m,this.$ti.h("qZ<1>"))}}
A.wk.prototype={
F(){return"RouteInformationReportingType."+this.b}}
A.qZ.prototype={
gcN(){return this.a.r},
az(){var s,r=this
r.aW()
s=r.a.c
if(s!=null)s.Z(0,r.gqy())
r.a.f.a_P(r.gws())
r.a.e.Z(0,r.gwD())},
iJ(a,b){var s,r,q=this,p=q.f
q.mF(p,"route")
s=p.y
r=s==null
if((r?A.n(p).h("bV.T").a(s):s)!=null){p=r?A.n(p).h("bV.T").a(s):s
p.toString
q.qS(p,new A.aeX(q))}else{p=q.a.c
if(p!=null)q.qS(p.a,new A.aeY(q))}},
Z5(){var s=this
if(s.w||s.a.c==null)return
s.w=!0
$.bP.dy$.push(s.gYI())},
YJ(a){var s,r,q,p,o=this
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
B.fv.tE("selectMultiEntryHistory",t.H)
q=s.a
q.toString
A.aoL(q,p,s.b)
r.b=r.a=s}o.e=B.lt},
YS(){this.a.e.ga7z()
this.a.toString
return null},
qK(){var s=this
s.f.sn(0,s.YS())
if(s.e==null)s.e=B.lt
s.Z5()},
b4(){var s,r=this
r.r=!0
r.R6()
s=r.a.c
if(s!=null&&r.r)r.qS(s.a,new A.aeW(r))
r.r=!1
r.qK()},
aY(a){var s,r,q,p=this
p.R7(a)
s=p.a
r=a.c
q=s.c==r
if(q)s.f===a.f
p.d=new A.B()
if(!q){s=r==null
if(!s)r.H(0,p.gqy())
q=p.a.c
if(q!=null)q.Z(0,p.gqy())
s=s?null:r.a
r=p.a.c
if(s!=(r==null?null:r.a))p.F4()}s=a.f
if(p.a.f!==s){r=p.gws()
s.a68(r)
p.a.f.a_P(r)}p.a.toString
s=p.gwD()
a.e.H(0,s)
p.a.e.Z(0,s)
p.qK()},
m(){var s=this,r=s.a.c
if(r!=null)r.H(0,s.gqy())
s.a.f.a68(s.gws())
s.a.e.H(0,s.gwD())
s.d=null
s.R9()},
qS(a,b){var s,r,q=this
q.r=!1
q.d=new A.B()
s=q.a.d
s.toString
r=q.c
r.toString
s.a7N(a,r).aB(q.Yr(q.d,b),t.H)},
Yr(a,b){return new A.aeU(this,a,b)},
F4(){var s=this
s.r=!0
s.qS(s.a.c.a,new A.aeR(s))},
UK(){var s=this
s.d=new A.B()
return s.a.e.a7O().aB(s.VR(s.d),t.y)},
VR(a){return new A.aeS(this,a)},
Gj(){this.ar(new A.aeV())
this.qK()
return new A.bp(null,t.E8)},
VS(){this.ar(new A.aeT())
this.qK()},
L(a){var s=this.bl$,r=this.a,q=r.c,p=r.f,o=r.d
r=r.e
return A.aai(s,new A.Qf(q,p,o,r,this,new A.hA(r.gIe(),null),null))}}
A.aeX.prototype={
$0(){return this.a.a.e.ga7o()},
$S(){return this.a.$ti.h("ad<~>(1)()")}}
A.aeY.prototype={
$0(){return this.a.a.e.ga7n()},
$S(){return this.a.$ti.h("ad<~>(1)()")}}
A.aeW.prototype={
$0(){return this.a.a.e.gNf()},
$S(){return this.a.$ti.h("ad<~>(1)()")}}
A.aeU.prototype={
$1(a){var s=0,r=A.a2(t.H),q,p=this,o,n
var $async$$1=A.Y(function(b,c){if(b===1)return A.a_(c,r)
while(true)switch(s){case 0:o=p.a
n=p.b
if(o.d!=n){s=1
break}s=3
return A.a4(p.c.$0().$1(a),$async$$1)
case 3:if(o.d==n)o.Gj()
case 1:return A.a0(q,r)}})
return A.a1($async$$1,r)},
$S(){return this.a.$ti.h("ad<~>(1)")}}
A.aeR.prototype={
$0(){return this.a.a.e.gNf()},
$S(){return this.a.$ti.h("ad<~>(1)()")}}
A.aeS.prototype={
$1(a){var s=this.a
if(this.b!=s.d)return new A.bp(!0,t.a9)
s.Gj()
return new A.bp(a,t.a9)},
$S:343}
A.aeV.prototype={
$0(){},
$S:0}
A.aeT.prototype={
$0(){},
$S:0}
A.Qf.prototype={
c1(a){if(this.f==a.f)this.r===a.r
return!0}}
A.Q7.prototype={
rN(){return null},
yV(a){this.av()},
mk(a){var s
if(a==null)return null
t.DI.a(a)
s=J.bH(a)
return new A.pr(A.co(s.gK(a)),s.gS(a))},
mN(){var s,r=this,q=r.y,p=q==null
if((p?A.n(r).h("bV.T").a(q):q)==null)q=null
else{s=(p?A.n(r).h("bV.T").a(q):q).a
q=[s,(p?A.n(r).h("bV.T").a(q):q).b]}return q}}
A.ra.prototype={
aY(a){this.bp(a)
this.ow()},
b4(){var s,r,q,p,o=this
o.cG()
s=o.bl$
r=o.gmJ()
q=o.c
q.toString
q=A.pp(q)
o.c4$=q
p=o.lJ(q,r)
if(r){o.iJ(s,o.bq$)
o.bq$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.fs$.Y(0,new A.age())
s=r.bl$
if(s!=null)s.m()
r.bl$=null
r.aS()}}
A.p5.prototype={
gu0(){return this.e},
jr(){var s,r=this,q=A.ajP(r.gSb(),!1)
r.k4=q
r.gpb()
s=A.ajP(r.gSd(),!0)
r.p1=s
B.c.J(r.e,A.a([q,s],t.tD))
r.Pz()},
ks(a){var s,r=this
r.Pu(a)
s=r.at.Q
s===$&&A.b()
if(s===B.K&&!r.Q)r.a.JB(r)
return!0},
m(){B.c.a0(this.e)
this.Py()}}
A.dY.prototype={
gbO(a){return this.as},
gBV(){return this.ax},
Wc(a){var s,r=this
switch(a.a){case 3:s=r.e
if(s.length!==0){s=B.c.gK(s)
r.gmB()
s.smB(!0)}s=r.z
if(s!=null){s.a.$0()
s.a=null}r.z=null
break
case 1:case 2:s=r.e
if(s.length!==0)B.c.gK(s).smB(!1)
if(r.z==null)r.z=$.bP.a6p(B.Fr)
break
case 0:if(!r.ga4r()){r.a.JB(r)
r.Q=!0
s=r.z
if(s!=null){s.a.$0()
s.a=null}r.z=null}break}},
jr(){var s=this,r=s.gM5(s),q=s.gM5(s),p=s.glV(),o=s.a
o.toString
o=s.at=A.e1(p,r,q,null,o)
o.by()
p=o.cs$
p.b=!0
p.a.push(s.gF5())
s.as=o
s.OU()
p=s.as
if(p.gb0(p)===B.X&&s.e.length!==0){p=B.c.gK(s.e)
s.gmB()
p.smB(!0)}},
os(){this.Pw()
return this.at.cW(0)},
oq(){this.Pr()
var s=this.at
s.sn(0,s.b)},
yR(a){var s,r
if(a instanceof A.dY){s=this.at
s.toString
r=a.at.x
r===$&&A.b()
s.sn(0,r)}this.Px(a)},
ks(a){this.ch=a
this.at.h7(0)
this.OS(a)
return!0},
lY(a){this.HA(a)
this.Pv(a)},
or(a){this.HA(a)
this.Ps(a)},
HA(a){var s,r,q,p,o,n,m,l=this,k={},j=l.CW
l.CW=null
if(a instanceof A.dY&&l.Ij(a)&&!0){s=l.ax.c
if(s!=null){r=s instanceof A.nk?s.a:s
r.toString
q=a.as
q.toString
p=r.gn(r)
o=q.x
o===$&&A.b()
if(!J.f(p,o)){p=q.Q
p===$&&A.b()
p=p===B.X||p===B.K}else p=!0
o=a.y.a
if(p)l.lG(q,o)
else{k.a=null
p=new A.aad(l,q,a)
l.CW=new A.aab(k,q,p)
q.by()
n=q.cs$
n.b=!0
n.a.push(p)
m=A.akl(r,q,new A.aac(k,l,a))
k.a=m
l.lG(m,o)}}else l.lG(a.as,a.y.a)}else l.Zo(B.ce)
if(j!=null)j.$0()},
lG(a,b){this.ax.saJ(0,a)
if(b!=null)b.aB(new A.aaa(this,a),t.P)},
Zo(a){return this.lG(a,null)},
m(){var s=this,r=s.as
if(r!=null)r.c_(s.gF5())
r=s.z
if(r!=null){r.a.$0()
r.a=null}s.z=null
r=s.at
if(r!=null)r.m()
s.y.bT(0,s.ch)
s.OT()},
glV(){return"TransitionRoute"},
i(a){return"TransitionRoute(animation: "+A.h(this.at)+")"}}
A.aad.prototype={
$1(a){var s,r
switch(a.a){case 3:case 0:s=this.a
s.lG(this.b,this.c.y.a)
r=s.CW
if(r!=null){r.$0()
s.CW=null}break
case 1:case 2:break}},
$S:4}
A.aab.prototype={
$0(){this.b.c_(this.c)
var s=this.a.a
if(s!=null)s.m()},
$S:0}
A.aac.prototype={
$0(){var s,r=this.b
r.lG(this.a.a.a,this.c.y.a)
s=r.CW
if(s!=null){s.$0()
r.CW=null}},
$S:0}
A.aaa.prototype={
$1(a){var s=this.a.ax,r=this.b
if(s.c==r){s.saJ(0,B.ce)
if(r instanceof A.nk)r.m()}},
$S:7}
A.FZ.prototype={
gMf(){var s=this.kA$
return s!=null&&s.length!==0}}
A.N6.prototype={
iA(a,b){A.a2b(this.e,t.z).gyi()
return!1},
di(a){return A.ajM(this.e).KN()}}
A.yK.prototype={
c1(a){var s=this
return s.f!==a.f||s.r!==a.r||s.w!==a.w||s.x!==a.x}}
A.qL.prototype={
ak(){return new A.nE(A.ajo(!0,B.a_g.i(0)+" Focus Scope",!1),A.ak1(),B.m,this.$ti.h("nE<1>"))}}
A.nE.prototype={
az(){var s,r,q=this
q.aW()
s=A.a([],t.ro)
r=q.a.c.fy
if(r!=null)s.push(r)
r=q.a.c.go
if(r!=null)s.push(r)
q.e=new A.yI(s)
if(q.a.c.gkG()){q.a.c.a.a.toString
s=!0}else s=!1
if(s){s=q.a.c.a.x.gdR()
if(s!=null)s.mW(q.f)}},
aY(a){var s,r=this
r.bp(a)
if(r.a.c.gkG()){r.a.c.a.a.toString
s=!0}else s=!1
if(s){s=r.a.c.a.x.gdR()
if(s!=null)s.mW(r.f)}},
b4(){this.cG()
this.d=null},
U4(){this.ar(new A.adS(this))},
m(){this.f.m()
this.aS()},
gGJ(){var s=this.a.c.fy
if((s==null?null:s.gb0(s))!==B.ak){s=this.a.c.a
s=s==null?null:s.CW.a
s=s===!0}else s=!0
return s},
L(a){var s,r,q=this,p=null,o=q.a.c,n=o.gkG(),m=q.a.c
if(!m.gty()){m=m.kA$
m=m!=null&&m.length!==0}else m=!0
s=q.a.c
s=s.gty()||s.ze$>0
r=q.a.c
return A.ly(o.c,new A.adW(q),new A.yK(n,m,s,o,new A.vx(r.fx,new A.p8(new A.hA(new A.adX(q),p),r.k3,p),p),p))}}
A.adS.prototype={
$0(){this.a.d=null},
$S:0}
A.adW.prototype={
$2(a,b){var s=this.a.a.c.c.a
b.toString
return new A.kK(b,s,null)},
$S:344}
A.adX.prototype={
$1(a){var s,r=null,q=A.aY([B.Cc,new A.N6(a,new A.bk(A.a([],t.B8),t.dc))],t.n,t.nT),p=this.a,o=p.e
o===$&&A.b()
s=p.d
if(s==null)s=p.d=new A.i8(new A.hA(new A.adU(p),r),p.a.c.k2)
return A.Ty(q,new A.pc(p.r,B.ca,B.UX,A.an6(!1,new A.i8(A.ly(o,new A.adV(p),s),r),r,r,p.f),r))},
$S:345}
A.adV.prototype={
$2(a,b){var s,r,q=this.a,p=q.a.c,o=p.fy
o.toString
s=p.go
s.toString
r=p.a
r=r==null?null:r.CW
if(r==null)r=A.jq(!1)
return p.Ih(a,o,s,A.ly(r,new A.adT(q),b))},
$S:30}
A.adT.prototype={
$2(a,b){var s=this.a,r=s.gGJ()
s.f.scq(!r)
return new A.hO(r,null,b,null)},
$S:346}
A.adU.prototype={
$1(a){var s,r=this.a.a.c,q=r.fy
q.toString
s=r.go
s.toString
return r.a0r(a,q,s)},
$S:13}
A.kv.prototype={
ar(a){var s,r=this.k1
if(r.gbw()!=null){r=r.gbw()
if(r.a.c.gkG())if(!r.gGJ()){r.a.c.a.a.toString
s=!0}else s=!1
else s=!1
if(s){s=r.a.c.a.x.gdR()
if(s!=null)s.mW(r.f)}r.ar(a)}else a.$0()},
Ih(a,b,c,d){return d},
jr(){var s=this
s.PZ()
s.fy=A.J9(A.dY.prototype.gbO.call(s,s))
s.go=A.J9(A.dY.prototype.gBV.call(s))},
os(){var s,r=this,q=r.k1
if(q.gbw()!=null){r.a.a.toString
s=!0}else s=!1
if(s){s=r.a.x.gdR()
if(s!=null)s.mW(q.gbw().f)}return r.PY()},
oq(){var s,r=this,q=r.k1
if(q.gbw()!=null){r.a.a.toString
s=!0}else s=!1
if(s){s=r.a.x.gdR()
if(s!=null)s.mW(q.gbw().f)}r.PW()},
stU(a){var s,r=this
if(r.fx===a)return
r.ar(new A.a2c(r,a))
s=r.fy
s.toString
s.saJ(0,r.fx?B.cX:A.dY.prototype.gbO.call(r,r))
s=r.go
s.toString
s.saJ(0,r.fx?B.ce:A.dY.prototype.gBV.call(r))
r.o9()},
fE(){var s=0,r=A.a2(t.ij),q,p=this,o,n,m,l
var $async$fE=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:p.k1.gbw()
o=A.aA(p.id,!0,t.CQ),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}l=J
s=6
return A.a4(o[m].$0(),$async$fE)
case 6:if(!l.f(b,!0)){q=B.U0
s=1
break}case 4:++m
s=3
break
case 5:q=p.Q4()
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$fE,r)},
yM(a){this.Pt(a)
this.o9()},
o9(){var s,r=this
r.Pq()
r.ar(new A.a2a())
s=r.k4
s===$&&A.b()
s.h4()
s=r.p1
s===$&&A.b()
r.gpb()
s.spb(!0)},
rE(){this.Pp()
var s=this.k4
s===$&&A.b()
s.h4()
s=this.k1
if(s.gbw()!=null)s.gbw().U4()},
Sc(a){var s,r,q=this,p=null
q.ga0i()
q.gyi()
s=q.ga0j()
r=q.fy
if(r.gb0(r)!==B.ak){r=q.fy
r=r.gb0(r)===B.K}else r=!0
q.gyi()
return new A.hO(r,p,new A.vc(p,!1,p,!0,s,p),p)},
Se(a){var s=this,r=null,q=s.ok
return q==null?s.ok=A.dK(r,new A.qL(s,s.k1,A.n(s).h("qL<1>")),!1,r,!1,r,r,r,r,r,r,r,r,r,r,r,B.Tz,r,r,r,r):q},
i(a){return"ModalRoute("+this.b.i(0)+", animation: "+A.h(this.as)+")"}}
A.a2c.prototype={
$0(){this.a.fx=this.b},
$S:0}
A.a2a.prototype={
$0(){},
$S:0}
A.qK.prototype={
fE(){var s=0,r=A.a2(t.ij),q,p=this,o
var $async$fE=A.Y(function(a,b){if(a===1)return A.a_(b,r)
while(true)switch(s){case 0:o=p.kA$
if(o!=null&&o.length!==0){q=B.Bc
s=1
break}q=p.PA()
s=1
break
case 1:return A.a0(q,r)}})
return A.a1($async$fE,r)},
ks(a){var s,r,q=this,p=q.kA$
if(p!=null&&p.length!==0){s=p.pop()
s.b=null
s.a7t()
r=s.c&&--q.ze$===0
if(q.kA$.length===0||r)q.o9()
return!1}q.PX(a)
return!0}}
A.K3.prototype={
L(a){var s,r,q,p=t.l,o=a.a7(p).f.f,n=Math.max(o.a,0),m=this.d,l=m?o.b:0
l=Math.max(l,0)
s=Math.max(o.c,0)
r=this.f
q=r?o.d:0
return new A.hZ(new A.bq(n,l,s,Math.max(q,0)),new A.ff(a.a7(p).f.Ly(r,!0,!0,m),this.x,null),null)}}
A.K7.prototype={
LE(){},
J2(a,b){if(b!=null)b.d5(new A.wy(null,a,b,0))},
J3(a,b,c){b.d5(A.ak2(b,null,null,a,c))},
t0(a,b,c){b.d5(new A.hY(null,c,0,a,b,0))},
J1(a,b){b.d5(new A.je(null,a,b,0))},
o1(){},
m(){},
i(a){return"<optimized out>#"+A.bM(this)}}
A.kg.prototype={
o1(){this.a.fG(0)},
gi3(){return!1},
gh2(){return!1},
geg(){return 0}}
A.a_X.prototype={
gi3(){return!1},
gh2(){return!1},
geg(){return 0},
m(){this.b.$0()
this.qc()}}
A.a5Y.prototype={
RV(a,b){var s,r,q=this
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
p=o.RV(s,q)
if(p===0)return
s=o.a
if(A.ahu(s.w.a.c))p=-p
s.Bl(p>0?B.lv:B.lw)
r=s.at
r.toString
s.vh(r-s.r.ye(s,p))},
m(){this.x=null
this.b.$0()},
i(a){return"<optimized out>#"+A.bM(this)}}
A.Yd.prototype={
J2(a,b){var s=t.hb.a(this.b.x)
if(b!=null)b.d5(new A.wy(s,a,b,0))},
J3(a,b,c){b.d5(A.ak2(b,null,t.mF.a(this.b.x),a,c))},
t0(a,b,c){b.d5(new A.hY(t.mF.a(this.b.x),c,0,a,b,0))},
J1(a,b){var s=this.b.x
b.d5(new A.je(s instanceof A.fU?s:null,a,b,0))},
gi3(){var s=this.b
return(s==null?null:s.w)!==B.dJ},
gh2(){return!0},
geg(){return 0},
m(){this.b=null
this.qc()},
i(a){return"<optimized out>#"+A.bM(this)+"("+A.h(this.b)+")"}}
A.Bf.prototype={
LE(){var s=this.a,r=this.b
r===$&&A.b()
s.fG(r.geg())},
o1(){var s=this.a,r=this.b
r===$&&A.b()
s.fG(r.geg())},
xD(){var s=this.b
s===$&&A.b()
s=s.x
s===$&&A.b()
if(!(Math.abs(this.a.vh(s))<1e-10)){s=this.a
s.fo(new A.kg(s))}},
xs(){this.a.fG(0)},
t0(a,b,c){var s=this.b
s===$&&A.b()
b.d5(new A.hY(null,c,s.geg(),a,b,0))},
gh2(){return!0},
geg(){var s=this.b
s===$&&A.b()
return s.geg()},
m(){var s=this.b
s===$&&A.b()
s.m()
this.qc()},
i(a){var s=A.bM(this),r=this.b
r===$&&A.b()
return"<optimized out>#"+s+"("+r.i(0)+")"},
gi3(){return this.c}}
A.Eu.prototype={
xD(){var s=this.a,r=this.c
r===$&&A.b()
r=r.x
r===$&&A.b()
if(s.vh(r)!==0){s=this.a
s.fo(new A.kg(s))}},
xs(){var s=this.a,r=this.c
r===$&&A.b()
s.fG(r.geg())},
t0(a,b,c){var s=this.c
s===$&&A.b()
b.d5(new A.hY(null,c,s.geg(),a,b,0))},
gi3(){return!0},
gh2(){return!0},
geg(){var s=this.c
s===$&&A.b()
return s.geg()},
m(){var s=this.b
s===$&&A.b()
s.eR(0)
s=this.c
s===$&&A.b()
s.m()
this.qc()},
i(a){var s=A.bM(this),r=this.c
r===$&&A.b()
return"<optimized out>#"+s+"("+r.i(0)+")"}}
A.ws.prototype={
py(a,b,c,d){var s,r=this
if(b.a==null){s=$.eS.fY$
s===$&&A.b()
s=s.R(0,c)}else s=!0
if(s){r.b.py(a,b,c,d)
return}s=r.a
if(s.gan(s)==null)return
s=s.gan(s)
s.toString
if(A.az6(s)){$.bP.q_(new A.a5T(r,a,b,c,d))
return}r.b.py(a,b,c,d)},
p7(a,b,c){return this.b.p7(0,b,c)},
p8(a,b){return this.b.p8(a,b)},
tT(a){return this.b.tT(a)}}
A.a5T.prototype={
$1(a){var s=this
A.dP(new A.a5S(s.a,s.b,s.c,s.d,s.e))},
$S:2}
A.a5S.prototype={
$0(){var s=this
return s.a.py(s.b,s.c,s.d,s.e)},
$S:0}
A.rm.prototype={
F(){return"AndroidOverscrollIndicator."+this.b}}
A.K8.prototype={
a1D(a,b,c,d,e,f){return new A.ag5(this,f,c!==!1,d,e,b,a)},
a1u(a){return this.a1D(null,null,null,null,null,a)},
jR(a){return A.ln()},
gz_(){return B.Bx},
rB(a,b,c){var s=null
switch(this.jR(a)){case B.bk:case B.b9:case B.bl:return A.ayK(b,c.b,B.cg,s,s,A.AM(),B.u,s,s,s,s,B.d3,s)
case B.ay:case B.bj:case B.az:return b}},
rz(a,b,c){var s
switch(this.jR(a)){case B.az:case B.bk:case B.b9:case B.bl:s=1
break
case B.ay:s=2
break
case B.bj:s=3
break
default:s=null
break}if(s)c$0:for(;!0;)switch(s){case 1:return b
case 2:switch(1){case 1:break}if(2)c$1:for(;!0;)switch(2){case 1:return new A.pP(c.a,B.S,b,null)
case 2:s=3
continue c$0}break c$0
case 3:return new A.oB(c.a,B.k,b,null)}},
ut(a){switch(this.jR(a)){case B.az:return new A.a5U()
case B.b9:return new A.a5V()
case B.ay:case B.bj:case B.bk:case B.bl:return new A.a5W()}},
kW(a){switch(this.jR(a)){case B.az:return B.D0
case B.b9:return B.D1
case B.ay:case B.bj:case B.bk:case B.bl:return B.EA}},
i(a){return"ScrollBehavior"}}
A.a5U.prototype={
$1(a){return A.awP(a.gci(a))},
$S:347}
A.a5V.prototype={
$1(a){var s=a.gci(a),r=t.pa
return new A.p_(A.aR(20,null,!1,r),s,A.aR(20,null,!1,r))},
$S:348}
A.a5W.prototype={
$1(a){return new A.hj(a.gci(a),A.aR(20,null,!1,t.pa))},
$S:128}
A.ag5.prototype={
gz_(){var s=this.f
return s==null?B.Bx:s},
rz(a,b,c){var s=this.a.rz(a,b,c)
return s},
rB(a,b,c){if(this.b)return this.a.rB(a,b,c)
return b},
kW(a){var s=this.a.kW(a)
return s},
ut(a){return this.a.ut(a)},
i(a){return"_WrappedScrollBehavior"}}
A.wt.prototype={
c1(a){var s
if(A.A(this.f)===A.A(a.f))s=!1
else s=!0
return s}}
A.pv.prototype={
hx(a,b,c){return this.a0c(a,b,c)},
a0c(a,b,c){var s=0,r=A.a2(t.H),q=this,p,o,n
var $async$hx=A.Y(function(d,e){if(d===1)return A.a_(e,r)
while(true)switch(s){case 0:n=A.a([],t.iJ)
for(p=q.d,o=0;o<p.length;++o)n.push(p[o].hx(a,b,c))
s=2
return A.a4(A.u5(n,t.H),$async$hx)
case 2:return A.a0(null,r)}})
return A.a1($async$hx,r)},
am(a){this.d.push(a)
a.Z(0,this.gev())},
oo(a,b){b.H(0,this.gev())
B.c.u(this.d,b)},
m(){var s,r,q,p
for(s=this.d,r=s.length,q=this.gev(),p=0;p<s.length;s.length===r||(0,A.P)(s),++p)s[p].H(0,q)
this.e2()},
IK(a,b,c){return A.az5(b,null,0,!0,c,a)},
i(a){var s=A.a([],t.s),r=this.d,q=r.length
if(q===0)s.push("no clients")
else if(q===1){r=B.c.gbo(r).at
r.toString
s.push("one client, offset "+B.d.M(r,1))}else s.push(""+q+" clients")
return"<optimized out>#"+A.bM(this)+"("+B.c.b3(s,", ")+")"}}
A.hd.prototype={
fU(){var s=this,r=null,q=s.gzx()?s.gf4():r,p=s.gzx()?s.gf3():r,o=s.gK_()?s.gcj():r,n=s.gK1()?s.gpM():r,m=s.gfR()
return new A.tW(q,p,o,n,m)},
gAC(){var s=this
return s.gcj()<s.gf4()||s.gcj()>s.gf3()},
gI8(){var s=this
return s.gcj()===s.gf4()||s.gcj()===s.gf3()},
gky(){var s=this
return s.gpM()-A.H(s.gf4()-s.gcj(),0,s.gpM())-A.H(s.gcj()-s.gf3(),0,s.gpM())}}
A.tW.prototype={
gf4(){var s=this.a
s.toString
return s},
gf3(){var s=this.b
s.toString
return s},
gzx(){return this.a!=null&&this.b!=null},
gcj(){var s=this.c
s.toString
return s},
gK_(){return this.c!=null},
gpM(){var s=this.d
s.toString
return s},
gK1(){return this.d!=null},
i(a){var s=this
return"FixedScrollMetrics("+B.d.M(Math.max(s.gcj()-s.gf4(),0),1)+"..["+B.d.M(s.gky(),1)+"].."+B.d.M(Math.max(s.gf3()-s.gcj(),0),1)+")"},
gfR(){return this.e}}
A.Ns.prototype={}
A.ea.prototype={}
A.LD.prototype={
L0(a){if(t.bx.b(a))++a.cV$
return!1}}
A.dW.prototype={
ck(a){this.QG(a)
a.push(this.a.i(0))}}
A.wy.prototype={
ck(a){var s
this.na(a)
s=this.d
if(s!=null)a.push(s.i(0))}}
A.ib.prototype={
ck(a){var s
this.na(a)
a.push("scrollDelta: "+A.h(this.e))
s=this.d
if(s!=null)a.push(s.i(0))},
gJ6(){return this.d}}
A.hY.prototype={
ck(a){var s,r=this
r.na(a)
a.push("overscroll: "+B.d.M(r.e,1))
a.push("velocity: "+B.d.M(r.f,1))
s=r.d
if(s!=null)a.push(s.i(0))}}
A.je.prototype={
ck(a){var s
this.na(a)
s=this.d
if(s!=null)a.push(s.i(0))},
gJ6(){return this.d}}
A.Lx.prototype={
ck(a){this.na(a)
a.push("direction: "+this.d.i(0))}}
A.zn.prototype={
ck(a){var s,r
this.v8(a)
s=this.cV$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.zm.prototype={
c1(a){return this.f!==a.f}}
A.l8.prototype={
a4N(a,b){return this.d.$1(b)}}
A.ww.prototype={
ak(){return new A.wx(new A.uE(t.uk),B.m)}}
A.wx.prototype={
H(a,b){var s,r,q,p=this.d
p.toString
p=A.aAx(p)
s=A.n(p).c
for(;p.q();){r=p.c
if(r==null)r=s.a(r)
if(J.f(r.d,b)){p=r.a
p.toString
A.n(r).h("mr.E").a(r);++p.a
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
try{if(s.a!=null)J.aub(s,a)}catch(n){r=A.ae(n)
q=A.au(n)
m=j instanceof A.bR?A.cR(j):null
l=A.bo("while dispatching notifications for "+A.aD(m==null?A.aT(j):m).i(0))
k=$.fJ()
if(k!=null)k.$1(new A.bJ(r,q,"widget library",l,new A.a5Z(j),!1))}}},
L(a){var s=this
return new A.de(new A.a6_(s),new A.de(new A.a60(s),new A.zm(s,s.a.c,null),null,t.Bf),null,t.iY)},
m(){this.d=null
this.aS()}}
A.a5Z.prototype={
$0(){var s=null,r=this.a
return A.a([A.hE("The "+A.A(r).i(0)+" sending notification was",r,!0,B.aJ,s,!1,s,s,B.ap,s,!1,!0,!0,B.aW,s,t.Ec)],t.F)},
$S:16}
A.a6_.prototype={
$1(a){var s=new A.Mt(null,null,a.a,a.b,0)
s.cV$=a.cV$
this.a.FI(s)
return!1},
$S:74}
A.a60.prototype={
$1(a){this.a.FI(a)
return!1},
$S:25}
A.Mt.prototype={}
A.wu.prototype={
F(){return"ScrollDecelerationRate."+this.b}}
A.mY.prototype={
hz(a){var s=this.a
s=s==null?null:s.kk(a)
return s==null?a:s},
kk(a){return new A.mY(this.hz(a))},
ye(a,b){var s=this.a
if(s==null)return b
return s.ye(a,b)},
jV(a){var s,r=this.a
if(r==null){r=a.at
r.toString
if(r===0){r=a.z
r.toString
s=a.Q
s.toString
s=r!==s
r=s}else r=!0
return r}return r.jV(a)},
Ls(a,b,c){var s=this.a
if(s==null){$.ai.toString
s=$.cq().gkN()
return Math.abs(a)>Math.max(Math.abs(s.a),Math.abs(s.b))}return s.Ls(a,b,c)},
o_(a,b){var s=this.a
if(s==null)return 0
return s.o_(a,b)},
rq(a,b,c,d){var s=this.a
if(s==null){s=b.c
s.toString
return s}return s.rq(a,b,c,d)},
lU(a,b){var s=this.a
if(s==null)return null
return s.lU(a,b)},
gl6(){var s=this.a
s=s==null?null:s.gl6()
return s==null?$.asf():s},
gpD(){var s=this.a
s=s==null?null:s.gpD()
return s==null?$.asg():s},
gA2(){var s=this.a
s=s==null?null:s.gA2()
return s==null?18:s},
gtQ(){var s=this.a
s=s==null?null:s.gtQ()
return s==null?50:s},
gpc(){var s=this.a
s=s==null?null:s.gpc()
return s==null?8000:s},
yn(a){var s=this.a
if(s==null)return 0
return s.yn(a)},
gz0(){var s=this.a
return s==null?null:s.gz0()},
glO(){return!0},
i(a){var s=this.a
if(s==null)return"ScrollPhysics"
return"ScrollPhysics -> "+s.i(0)}}
A.Jd.prototype={
kk(a){return new A.Jd(this.hz(a))},
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
return p+(o-q)}}l=this.PD(a,b,c,d)
if(r){q=b.b
q.toString
l=A.H(l,p,q)}return l}}
A.rK.prototype={
kk(a){return new A.rK(this.b,this.hz(a))},
JO(a){switch(this.b.a){case 1:return 0.07*Math.pow(1-a,2)
case 0:return 0.52*Math.pow(1-a,2)}},
ye(a,b){var s,r,q,p,o,n,m
if(!a.gAC())return b
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
m=this.JO((o-Math.abs(b))/s)}else{s.toString
m=this.JO(o/s)}return J.ei(b)*A.auL(o,Math.abs(b),m)},
o_(a,b){return 0},
lU(a,b){var s,r,q,p,o,n,m,l=this.gpD()
if(Math.abs(b)>=l.c||a.gAC()){switch(this.b.a){case 1:s=1400
break
case 0:s=0
break
default:s=null}r=this.gl6()
q=a.at
q.toString
p=a.z
p.toString
o=a.Q
o.toString
n=new A.Uf(p,o,r,l)
if(q<p){n.f=new A.kM(p,A.zE(r,q-p,b),B.bJ)
n.r=-1/0}else if(q>o){n.f=new A.kM(o,A.zE(r,q-o,b),B.bJ)
n.r=-1/0}else{q=n.e=A.awB(0.135,q,b,s)
m=q.gtf()
if(b>0&&m>o){p=q.LV(o)
n.r=p
n.f=new A.kM(o,A.zE(r,o-o,Math.min(q.dQ(0,p),5000)),B.bJ)}else if(b<0&&m<p){o=q.LV(p)
n.r=o
n.f=new A.kM(p,A.zE(r,p-p,Math.min(q.dQ(0,o),5000)),B.bJ)}else n.r=1/0}return n}return null},
gtQ(){return 100},
yn(a){return J.ei(a)*Math.min(0.000816*Math.pow(Math.abs(a),1.967),4e4)},
gz0(){return 3.5},
gpc(){switch(this.b.a){case 1:return 64e3
case 0:return A.mY.prototype.gpc.call(this)}},
gl6(){switch(this.b.a){case 1:return A.aoF(0.3,1.3,75)
case 0:return A.mY.prototype.gl6.call(this)}}}
A.rW.prototype={
kk(a){return new A.rW(this.hz(a))},
o_(a,b){var s,r,q=a.at
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
lU(a,b){var s,r,q,p,o=null,n=this.gpD()
if(a.gAC()){s=a.at
s.toString
r=a.Q
r.toString
if(s>r)q=r
else q=o
r=a.z
r.toString
if(s<r)q=r
s=this.gl6()
r=a.at
r.toString
q.toString
return new A.kM(q,A.zE(s,r-q,Math.min(0,b)),n)}s=Math.abs(b)
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
s=Math.exp(Math.log(0.35*s/778.3530259679999)/($.arV()-1))
r.e=s
r.f=Math.abs(b*s/3.065)
return r}}
A.px.prototype={
F(){return"ScrollPositionAlignmentPolicy."+this.b}}
A.jf.prototype={
D8(a,b,c,d,e){if(d!=null)this.kh(d)
this.LN()},
gf4(){var s=this.z
s.toString
return s},
gf3(){var s=this.Q
s.toString
return s},
gzx(){return this.z!=null&&this.Q!=null},
gcj(){var s=this.at
s.toString
return s},
gK_(){return this.at!=null},
gpM(){var s=this.ax
s.toString
return s},
gK1(){return this.ax!=null},
kh(a){var s=this,r=a.z
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
if(A.A(a)!==A.A(s))s.fr.LE()
s.w.C0(s.fr.gi3())
s.dy.sn(0,s.fr.gh2())},
Ng(a){var s,r,q,p=this,o=p.at
o.toString
if(a!==o){s=p.r.o_(p,a)
o=p.at
o.toString
r=a-s
p.at=r
if(r!==o){p.xQ()
p.Cr()
r=p.at
r.toString
p.yU(r-o)}if(s!==0){o=p.fr
o.toString
r=p.fU()
q=$.ai.a4$.z.j(0,p.w.z)
q.toString
o.t0(r,q,s)
return s}}return 0},
zn(a){var s=this,r=s.at
r.toString
s.as=a-r
s.at=a
s.xQ()
s.Cr()
$.bP.dy$.push(new A.a61(s))},
BR(){var s,r=this.w,q=r.c
q.toString
q=A.a34(q)
if(q!=null){r=r.c
r.toString
s=this.at
s.toString
q.Mi(r,s)}},
LN(){var s,r,q
if(this.at==null){s=this.w
r=s.c
r.toString
r=A.a34(r)
if(r==null)q=null
else{s=s.c
s.toString
q=r.Lp(s)}if(q!=null)this.at=q}},
LM(a,b){if(b)this.at=a
else this.dU(a)},
BQ(){var s=this.at
s.toString
this.w.e.sn(0,s)
s=$.he.aQ$
s===$&&A.b()
s.JG()},
o3(a){if(this.ax!==a){this.ax=a
this.ch=!0}return!0},
o0(a,b){var s,r,q,p=this
if(!A.AL(p.z,a,0.001)||!A.AL(p.Q,b,0.001)||p.ch||p.db!==A.bd(p.gfR())){p.z=a
p.Q=b
p.db=A.bd(p.gfR())
s=p.ay?p.fU():null
p.ch=!1
p.CW=!0
if(p.ay){r=p.cx
r.toString
s.toString
r=!p.a1E(r,s)}else r=!1
if(r)return!1
p.ay=!0}if(p.CW){p.PH()
p.w.N9(p.r.jV(p))
p.CW=!1}s=p.fU()
if(p.cx!=null){r=Math.max(s.gcj()-s.gf4(),0)
q=p.cx
if(r===Math.max(q.gcj()-q.gf4(),0))if(s.gky()===p.cx.gky()){r=Math.max(s.gf3()-s.gcj(),0)
q=p.cx
r=r===Math.max(q.gf3()-q.gcj(),0)&&s.e===p.cx.e}else r=!1
else r=!1
r=!r}else r=!0
if(r){if(!p.cy){A.dP(p.ga2h())
p.cy=!0}p.cx=p.fU()}return!0},
a1E(a,b){var s=this,r=s.r.rq(s.fr.gh2(),b,a,s.fr.geg()),q=s.at
q.toString
if(r!==q){s.at=r
return!1}return!0},
o1(){this.fr.o1()
this.xQ()},
xQ(){var s,r,q,p,o,n=this,m=n.w
switch(m.a.c.a){c