.a
p=m.w4()
m=m.f
r.sBm(A.ah_(l,s,q,p,m,null))
o.d=k}o.c=r}m=o.c
m.toString
o.EY(a,k,m,j)}o.WO(a,k,c)
m=n.c
if(m!=null){l=n.d
l=l==null?null:l.V(j)
m.ty(a,k,l,n.w,j)}},
i(a){return"BoxPainter for "+this.b.i(0)}}
A.li.prototype={
E(){return"BoxFit."+this.b}}
A.E5.prototype={}
A.it.prototype={
aF(a,b){var s=this
return new A.it(s.d*b,s.e,s.a,s.b.a0(0,b),s.c*b)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.T(b)!==A.A(s))return!1
return b instanceof A.it&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c===s.c&&b.d===s.d&&b.e===s.e},
gu(a){var s=this
return A.U(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this
return"BoxShadow("+s.a.i(0)+", "+s.b.i(0)+", "+A.hd(s.c)+", "+A.hd(s.d)+", "+s.e.i(0)+")"}}
A.dj.prototype={
aF(a,b){return new A.dj(this.b,this.a.aF(0,b))},
c1(a,b){var s,r
if(a instanceof A.dj){s=A.aw(a.a,this.a,b)
r=A.Q(a.b,this.b,b)
r.toString
return new A.dj(A.G(r,0,1),s)}return this.kR(a,b)},
c2(a,b){var s,r
if(a instanceof A.dj){s=A.aw(this.a,a.a,b)
r=A.Q(this.b,a.b,b)
r.toString
return new A.dj(A.G(r,0,1),s)}return this.kS(a,b)},
fg(a,b){var s=$.ao().ck()
s.xk(this.CD(a))
return s},
hw(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=r.b*r.d
if(this.b===0)a.i0(b.gaH(),(b.gfj()+s)/2,r.hE())
else a.rA(this.CD(b).cZ(s/2),r.hE())
break}},
CD(a){var s,r,q,p,o,n,m,l=this.b
if(l===0||a.c-a.a===a.d-a.b)return A.oS(a.gaH(),a.gfj()/2)
s=a.c
r=a.a
q=s-r
p=a.d
o=a.b
n=p-o
l=1-l
if(q<n){m=l*(n-q)/2
return new A.B(r,o+m,s,p-m)}else{m=l*(q-n)/2
return new A.B(r+m,o,s-m,p)}},
k(a,b){if(b==null)return!1
if(J.T(b)!==A.A(this))return!1
return b instanceof A.dj&&b.a.k(0,this.a)&&b.b===this.b},
gu(a){return A.U(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this.b
if(s!==0)return"CircleBorder("+this.a.i(0)+", eccentricity: "+A.h(s)+")"
return"CircleBorder("+this.a.i(0)+")"}}
A.U0.prototype={
v6(a,b,c,d){var s=this
s.gbz(s).cr(0)
switch(b.a){case 0:break
case 1:a.$1(!1)
break
case 2:a.$1(!0)
break
case 3:a.$1(!0)
s.gbz(s).B3(c,$.ao().bd())
break}d.$0()
if(b===B.hq)s.gbz(s).co(0)
s.gbz(s).co(0)},
a_D(a,b,c,d){this.v6(new A.U1(this,a),b,c,d)},
a_E(a,b,c,d){this.v6(new A.U2(this,a),b,c,d)},
a_G(a,b,c,d){this.v6(new A.U3(this,a),b,c,d)}}
A.U1.prototype={
$1(a){var s=this.a
return s.gbz(s).Hx(0,this.b,a)},
$S:23}
A.U2.prototype={
$1(a){var s=this.a
return s.gbz(s).Hy(this.b,a)},
$S:23}
A.U3.prototype={
$1(a){var s=this.a
return s.gbz(s).a_F(this.b,a)},
$S:23}
A.jF.prototype={
j(a,b){return this.b.j(0,b)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.T(b)!==A.A(s))return!1
return s.MP(0,b)&&A.n(s).h("jF<jF.T>").b(b)&&A.afM(b.b,s.b)},
gu(a){return A.U(A.A(this),this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"ColorSwatch(primary value: "+this.MQ(0)+")"}}
A.fE.prototype={
bV(){return"Decoration"},
gdi(a){return B.aX},
gyY(){return!1},
c1(a,b){return null},
c2(a,b){return null},
J5(a,b,c){return!0},
u0(a,b){throw A.c(A.N("This Decoration subclass does not expect to be used for clipping."))}}
A.AE.prototype={
m(){}}
A.LZ.prototype={}
A.lT.prototype={
E(){return"ImageRepeat."+this.b}}
A.CX.prototype={
k(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(J.T(b)!==A.A(this))return!1
if(b instanceof A.CX)if(b.a.k(0,this.a))if(B.a_.k(0,B.a_))s=!0
else s=!1
else s=!1
else s=!1
return s},
gu(a){return A.U(this.a,null,B.O,B.a_,null,B.br,!1,1,1,B.d3,!1,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=A.a([this.a.i(0)],t.s),r=!0
if(r)s.push(B.O.i(0))
s.push(B.a_.i(0))
s.push("scale 1")
s.push("opacity 1")
s.push(B.d3.i(0))
return"DecorationImage("+B.b.b9(s,", ")+")"}}
A.CY.prototype={
tx(a,b,c,d){var s,r,q,p,o=this,n=null,m=o.a.a.V(d),l=m.a
if(l==null)l=m
s=o.c
r=s==null
if(r)q=n
else{q=s.a
if(q==null)q=s}if(l!==q){p=new A.dm(o.gEc(),n,n)
if(!r)s.G(0,p)
o.c=m
m.W(0,p)}if(o.d==null)return
l=c!=null
if(l){a.cr(0)
a.fw(0,c)}s=o.d
r=s.a
A.aoQ(B.a_,a,n,n,s.c,B.d3,B.O,!1,r,!1,!1,1,b,B.br,s.b)
if(l)a.co(0)},
Uj(a,b){var s,r,q=this
if(J.f(q.d,a))return
s=q.d
if(s!=null)if(a.a.Js(s.a)){r=s.b
s=r===r&&a.c==s.c}else s=!1
else s=!1
if(s){a.a.m()
return}s=q.d
if(s!=null)s.a.m()
q.d=a
if(!b)q.b.$0()},
i(a){return"DecorationImagePainter(stream: "+A.h(this.c)+", image: "+A.h(this.d)+") for "+this.a.i(0)}}
A.d4.prototype={
gcg(){var s=this
return s.gd7(s)+s.gd8(s)+s.ge2(s)+s.ge3()},
ZY(a){var s=this
switch(a.a){case 0:return s.gcg()
case 1:return s.gb4(s)+s.gb7(s)}},
C(a,b){var s=this
return new A.kK(s.gd7(s)+b.gd7(b),s.gd8(s)+b.gd8(b),s.ge2(s)+b.ge2(b),s.ge3()+b.ge3(),s.gb4(s)+b.gb4(b),s.gb7(s)+b.gb7(b))},
iN(a,b,c){var s=this
return new A.kK(A.G(s.gd7(s),b.a,c.a),A.G(s.gd8(s),b.c,c.b),A.G(s.ge2(s),0,c.c),A.G(s.ge3(),0,c.d),A.G(s.gb4(s),b.b,c.e),A.G(s.gb7(s),b.d,c.f))},
i(a){var s=this
if(s.ge2(s)===0&&s.ge3()===0){if(s.gd7(s)===0&&s.gd8(s)===0&&s.gb4(s)===0&&s.gb7(s)===0)return"EdgeInsets.zero"
if(s.gd7(s)===s.gd8(s)&&s.gd8(s)===s.gb4(s)&&s.gb4(s)===s.gb7(s))return"EdgeInsets.all("+B.d.N(s.gd7(s),1)+")"
return"EdgeInsets("+B.d.N(s.gd7(s),1)+", "+B.d.N(s.gb4(s),1)+", "+B.d.N(s.gd8(s),1)+", "+B.d.N(s.gb7(s),1)+")"}if(s.gd7(s)===0&&s.gd8(s)===0)return"EdgeInsetsDirectional("+B.d.N(s.ge2(s),1)+", "+B.d.N(s.gb4(s),1)+", "+B.d.N(s.ge3(),1)+", "+B.d.N(s.gb7(s),1)+")"
return"EdgeInsets("+B.d.N(s.gd7(s),1)+", "+B.d.N(s.gb4(s),1)+", "+B.d.N(s.gd8(s),1)+", "+B.d.N(s.gb7(s),1)+") + EdgeInsetsDirectional("+B.d.N(s.ge2(s),1)+", 0.0, "+B.d.N(s.ge3(),1)+", 0.0)"},
k(a,b){var s=this
if(b==null)return!1
return b instanceof A.d4&&b.gd7(b)===s.gd7(s)&&b.gd8(b)===s.gd8(s)&&b.ge2(b)===s.ge2(s)&&b.ge3()===s.ge3()&&b.gb4(b)===s.gb4(s)&&b.gb7(b)===s.gb7(s)},
gu(a){var s=this
return A.U(s.gd7(s),s.gd8(s),s.ge2(s),s.ge3(),s.gb4(s),s.gb7(s),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.bn.prototype={
gd7(a){return this.a},
gb4(a){return this.b},
gd8(a){return this.c},
gb7(a){return this.d},
ge2(a){return 0},
ge3(){return 0},
xY(a){var s=this
return new A.B(a.a+s.a,a.b+s.b,a.c-s.c,a.d-s.d)},
C(a,b){if(b instanceof A.bn)return this.S(0,b)
return this.BL(0,b)},
iN(a,b,c){var s=this
return new A.bn(A.G(s.a,b.a,c.a),A.G(s.b,b.b,c.e),A.G(s.c,b.c,c.b),A.G(s.d,b.d,c.f))},
aa(a,b){var s=this
return new A.bn(s.a-b.a,s.b-b.b,s.c-b.c,s.d-b.d)},
S(a,b){var s=this
return new A.bn(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
a0(a,b){var s=this
return new A.bn(s.a*b,s.b*b,s.c*b,s.d*b)},
V(a){return this},
nU(a,b,c,d){var s=this,r=b==null?s.a:b,q=d==null?s.b:d,p=c==null?s.c:c
return new A.bn(r,q,p,a==null?s.d:a)},
xL(a){return this.nU(a,null,null,null)}}
A.aU.prototype={
ge2(a){return this.a},
gb4(a){return this.b},
ge3(){return this.c},
gb7(a){return this.d},
gd7(a){return 0},
gd8(a){return 0},
C(a,b){if(b instanceof A.aU)return this.S(0,b)
return this.BL(0,b)},
aa(a,b){var s=this
return new A.aU(s.a-b.a,s.b-b.b,s.c-b.c,s.d-b.d)},
S(a,b){var s=this
return new A.aU(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
a0(a,b){var s=this
return new A.aU(s.a*b,s.b*b,s.c*b,s.d*b)},
V(a){var s=this
switch(a.a){case 0:return new A.bn(s.c,s.b,s.a,s.d)
case 1:return new A.bn(s.a,s.b,s.c,s.d)}}}
A.kK.prototype={
a0(a,b){var s=this
return new A.kK(s.a*b,s.b*b,s.c*b,s.d*b,s.e*b,s.f*b)},
V(a){var s=this
switch(a.a){case 0:return new A.bn(s.d+s.a,s.e,s.c+s.b,s.f)
case 1:return new A.bn(s.c+s.a,s.e,s.d+s.b,s.f)}},
gd7(a){return this.a},
gd8(a){return this.b},
ge2(a){return this.c},
ge3(){return this.d},
gb4(a){return this.e},
gb7(a){return this.f}}
A.a97.prototype={}
A.af1.prototype={
$1(a){return a<=this.a},
$S:194}
A.aex.prototype={
$1(a){var s=this,r=A.v(A.anO(s.a,s.b,a),A.anO(s.c,s.d,a),s.e)
r.toString
return r},
$S:195}
A.YG.prototype={
w4(){var s,r,q,p=this.b
if(p!=null)return p
p=this.a.length
s=1/(p-1)
if(p>4294967295)A.Y(A.bp(p,0,4294967295,"length",null))
r=J.lW(new Array(p),t.i)
for(q=0;q<p;++q)r[q]=q*s
return r}}
A.lZ.prototype={
aF(a,b){var s=this,r=s.a,q=A.an(r).h("aC<1,K>")
return new A.lZ(s.d,s.e,s.f,A.aA(new A.aC(r,new A.a_i(b),q),!0,q.h("bl.E")),s.b,null)},
c1(a,b){var s=A.akX(a,this,b)
return s},
c2(a,b){var s=A.akX(this,a,b)
return s},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.T(b)!==A.A(s))return!1
return b instanceof A.lZ&&b.d.k(0,s.d)&&b.e.k(0,s.e)&&b.f===s.f&&A.cL(b.a,s.a)&&A.cL(b.b,s.b)},
gu(a){var s=this,r=A.d7(s.a),q=s.b
q=q==null?null:A.d7(q)
return A.U(s.d,s.e,s.f,s.c,r,q,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r=A.a(["begin: "+s.d.i(0),"end: "+s.e.i(0),"colors: "+A.h(s.a)],t.s),q=s.b
if(q!=null)r.push("stops: "+A.h(q))
r.push("tileMode: "+s.f.i(0))
return"LinearGradient("+B.b.b9(r,", ")+")"}}
A.a_i.prototype={
$1(a){var s=A.v(null,a,this.a)
s.toString
return s},
$S:67}
A.Zc.prototype={
X(a){var s,r,q,p
for(s=this.b,r=s.gaZ(s),r=new A.e_(J.av(r.a),r.b),q=A.n(r).z[1];r.q();){p=r.a;(p==null?q.a(p):p).m()}s.X(0)
for(s=this.a,r=s.gaZ(s),r=new A.e_(J.av(r.a),r.b),q=A.n(r).z[1];r.q();){p=r.a
if(p==null)p=q.a(p)
p.a.G(0,p.b)}s.X(0)
this.f=0},
lK(a){var s,r,q,p=this,o=p.c.v(0,a)
if(o!=null){s=o.a
r=o.d
r===$&&A.b()
if(s.w)A.Y(A.a6(u.V))
B.b.v(s.x,r)
o.Cg()}q=p.a.v(0,a)
if(q!=null){q.a.G(0,q.b)
return!0}o=p.b.v(0,a)
if(o!=null){s=p.f
r=o.b
r.toString
p.f=s-r
o.m()
return!0}return!1},
Go(a,b,c){var s,r=this,q=b.b
if(q!=null&&q<=104857600&&!0){s=r.f
q.toString
r.f=s+q
r.b.l(0,a,b)
r.Rp(c)}else b.m()},
wX(a,b,c){var s=this.c.bJ(0,a,new A.Zf(this,b,a))
if(s.b==null)s.b=c},
Kp(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g={}
g.a=g.b=null
q=i.a
p=q.j(0,b)
o=p==null?h:p.a
g.c=o
if(o!=null)return o
p=i.b
n=p.v(0,b)
if(n!=null){g=n.a
i.wX(b,g,n.b)
p.l(0,b,n)
return g}m=i.c.j(0,b)
if(m!=null){g=m.a
i.Go(b,new A.xe(g,m.b,g.m9()),h)
return g}try{o=g.c=c.$0()
i.wX(b,o,h)
p=o}catch(l){s=A.ah(l)
r=A.ay(l)
d.$2(s,r)
return h}g.d=!1
k=A.b5("pendingImage")
j=new A.dm(new A.Zg(g,i,b,!0,k),h,h)
k.b=new A.O4(p,j)
q.l(0,b,k.aC())
g.c.W(0,j)
return g.c},
T(a,b){return this.a.j(0,b)!=null||this.b.j(0,b)!=null},
Rp(a){var s,r,q,p,o,n=this,m=n.b,l=A.n(m).h("b7<1>")
while(!0){if(!(n.f>104857600||m.a>1000))break
s=new A.b7(m,l)
r=s.ga7(s)
if(!r.q())A.Y(A.bO())
q=r.gF(r)
p=m.j(0,q)
s=n.f
o=p.b
o.toString
n.f=s-o
p.m()
m.v(0,q)}}}
A.Zf.prototype={
$0(){return A.axr(this.b,new A.Ze(this.a,this.c))},
$S:196}
A.Ze.prototype={
$0(){this.a.c.v(0,this.b)},
$S:0}
A.Zg.prototype={
$2(a,b){var s,r,q,p,o,n=this
if(a!=null){s=a.a
r=s.gbI(s)*s.gbg(s)*4
s.m()}else r=null
s=n.a
q=s.c
p=new A.xe(q,r,q.m9())
q=n.b
o=n.c
q.wX(o,s.c,r)
if(n.d)q.Go(o,p,s.a)
else p.m()
q.a.v(0,o)
if(!s.d){q=n.e.aC()
q.a.G(0,q.b)}s.d=!0},
$S:197}
A.Ln.prototype={
m(){$.bK.ax$.push(new A.a8Z(this))}}
A.a8Z.prototype={
$1(a){var s=this.a,r=s.c
if(r!=null)r.m()
s.c=null},
$S:2}
A.xe.prototype={}
A.qd.prototype={
Qw(a,b,c){var s=new A.ab5(this,b)
this.d=s
if(a.w)A.Y(A.a6(u.V))
a.x.push(s)},
i(a){return"<optimized out>#"+A.bI(this)}}
A.ab5.prototype={
$0(){var s,r,q
this.b.$0()
s=this.a
r=s.a
q=s.d
q===$&&A.b()
if(r.w)A.Y(A.a6(u.V))
B.b.v(r.x,q)
s.Cg()},
$S:0}
A.O4.prototype={}
A.ob.prototype={
k(a,b){var s=this
if(b==null)return!1
if(J.T(b)!==A.A(s))return!1
return b instanceof A.ob&&b.a==s.a&&b.b==s.b&&J.f(b.c,s.c)&&b.d==s.d&&J.f(b.e,s.e)&&b.f==s.f},
gu(a){var s=this
return A.U(s.a,s.b,s.c,s.e,s.f,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
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
A.dI.prototype={
V(a){var s=new A.Zs()
this.RY(a,new A.Zq(this,a,s),new A.Zr(this,a,s))
return s},
RY(a,b,c){var s,r,q,p,o,n={}
n.a=null
n.b=!1
s=new A.Zn(n,c)
r=null
try{r=this.tm(a)}catch(o){q=A.ah(o)
p=A.ay(o)
s.$2(q,p)
return}r.aY(new A.Zm(n,this,b,s),t.H).iL(s)},
p0(a,b,c,d){var s,r
if(b.a!=null){s=$.eJ.fF$
s===$&&A.b()
s.Kp(0,c,new A.Zo(b),d)
return}s=$.eJ.fF$
s===$&&A.b()
r=s.Kp(0,c,new A.Zp(this,c),d)
if(r!=null)b.Bc(r)},
oF(a,b,c){throw A.c(A.N("Implement loadBuffer for faster image loading"))},
oG(a,b){return this.oF(0,a,$.eJ.ga2Z())},
i(a){return"ImageConfiguration()"}}
A.Zq.prototype={
$2(a,b){this.a.p0(this.b,this.c,a,b)},
$S(){return A.n(this.a).h("~(dI.T,~(F,bG?))")}}
A.Zr.prototype={
$3(a,b,c){return this.Ls(a,b,c)},
Ls(a,b,c){var s=0,r=A.a4(t.H),q=this,p
var $async$$3=A.a0(function(d,e){if(d===1)return A.a1(e,r)
while(true)switch(s){case 0:s=2
return A.a5(null,$async$$3)
case 2:p=q.c
if(p.a==null)p.Bc(new A.a9E(A.a([],t.fE),A.a([],t.b)))
p=p.a
p.toString
p.kv(A.bk("while resolving an image"),b,null,!0,c)
return A.a2(null,r)}})
return A.a3($async$$3,r)},
$S(){return A.n(this.a).h("ag<~>(dI.T?,F,bG?)")}}
A.Zn.prototype={
Lr(a,b){var s=0,r=A.a4(t.H),q,p=this,o
var $async$$2=A.a0(function(c,d){if(c===1)return A.a1(d,r)
while(true)switch(s){case 0:o=p.a
if(o.b){s=1
break}p.b.$3(o.a,a,b)
o.b=!0
case 1:return A.a2(q,r)}})
return A.a3($async$$2,r)},
$2(a,b){return this.Lr(a,b)},
$S:198}
A.Zm.prototype={
$1(a){var s,r,q,p=this
p.a.a=a
try{p.c.$2(a,p.d)}catch(q){s=A.ah(q)
r=A.ay(q)
p.d.$2(s,r)}},
$S(){return A.n(this.b).h("ax(dI.T)")}}
A.Zo.prototype={
$0(){var s=this.a.a
s.toString
return s},
$S:73}
A.Zp.prototype={
$0(){return this.a.oG(this.b,$.eJ.ga31())},
$S:73}
A.hh.prototype={
k(a,b){var s=this
if(b==null)return!1
if(J.T(b)!==A.A(s))return!1
return b instanceof A.hh&&b.a===s.a&&b.b===s.b&&b.c===s.c},
gu(a){return A.U(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"AssetBundleImageKey(bundle: "+this.a.i(0)+', name: "'+this.b+'", scale: '+A.h(this.c)+")"}}
A.Ak.prototype={
oG(a,b){return A.al9(this.l7(a,b,null),a.b,null,a.c)},
oF(a,b,c){return A.al9(this.l7(b,null,c),b.b,null,b.c)},
l7(a,b,c){return this.VN(a,b,c)},
VN(a,b,c){var s=0,r=A.a4(t.gP),q,p=2,o,n,m,l,k,j,i
var $async$l7=A.a0(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:s=b!=null?3:4
break
case 3:n=null
p=6
s=9
return A.a5(a.a.tc(a.b),$async$l7)
case 9:n=e
p=2
s=8
break
case 6:p=5
j=o
if(A.ah(j) instanceof A.jM){k=$.eJ.fF$
k===$&&A.b()
k.lK(a)
throw j}else throw j
s=8
break
case 5:s=2
break
case 8:if(n==null){k=$.eJ.fF$
k===$&&A.b()
k.lK(a)
throw A.c(A.a6("Unable to read data"))}q=b.$1(n)
s=1
break
case 4:m=null
p=11
s=14
return A.a5(a.a.cM(0,a.b),$async$l7)
case 14:m=e
p=2
s=13
break
case 11:p=10
i=o
if(A.ah(i) instanceof A.jM){k=$.eJ.fF$
k===$&&A.b()
k.lK(a)
throw i}else throw i
s=13
break
case 10:s=2
break
case 13:if(m==null){k=$.eJ.fF$
k===$&&A.b()
k.lK(a)
throw A.c(A.a6("Unable to read data"))}c.toString
q=c.$1(A.cS(m.buffer,0,null))
s=1
break
case 1:return A.a2(q,r)
case 2:return A.a1(o,r)}})
return A.a3($async$l7,r)}}
A.a9E.prototype={}
A.nu.prototype={
gma(){return this.a},
tm(a){var s,r={},q=a.a
if(q==null)q=$.Sr()
r.a=r.b=null
q.a3F("AssetManifest.a3f9a259.json",A.aAS(),t.jd).aY(new A.ST(r,this,a,q),t.H).iL(new A.SU(r))
s=r.a
if(s!=null)return s
s=new A.a8($.aa,t.hv)
r.b=new A.b0(s,t.q8)
return s},
Rz(a,b,c){var s,r,q,p=b.b
if(p==null||c==null||J.fz(c))return a
s=A.ahH(t.i,t.N)
for(r=J.av(c);r.q();){q=r.gF(r)
s.l(0,this.F6(q),q)}p.toString
return this.SM(s,p)},
SM(a,b){var s,r,q
if(a.n5(b)){s=a.j(0,b)
s.toString
return s}r=a.a3s(b)
q=a.a1D(b)
if(r==null)return a.j(0,q)
if(q==null)return a.j(0,r)
if(b<2||b>(r+q)/2)return a.j(0,q)
else return a.j(0,r)},
F6(a){var s,r,q,p
if(a===this.a)return 1
s=A.mP(a,0,null)
r=s.gjo().length>1?s.gjo()[s.gjo().length-2]:""
q=$.ap6().rO(r)
if(q!=null&&q.b.length-1>0){p=q.b[1]
p.toString
return A.aoj(p)}return 1},
k(a,b){if(b==null)return!1
if(J.T(b)!==A.A(this))return!1
return b instanceof A.nu&&b.gma()===this.gma()&&!0},
gu(a){return A.U(this.gma(),this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"AssetImage(bundle: "+A.h(this.b)+', name: "'+this.gma()+'")'}}
A.ST.prototype={
$1(a){var s,r=this,q=r.b,p=q.gma(),o=a==null?null:J.aL(a,q.gma())
o=q.Rz(p,r.c,o)
o.toString
s=new A.hh(r.d,o,q.F6(o))
q=r.a
p=q.b
if(p!=null)p.ca(0,s)
else q.a=new A.bm(s,t.rT)},
$S:200}
A.SU.prototype={
$2(a,b){this.a.b.hi(a,b)},
$S:31}
A.eE.prototype={
cH(a){return new A.eE(this.a.cH(0),this.b,this.c)},
i(a){var s=this.c
s=s!=null?s+" ":""
return s+this.a.i(0)+" @ "+A.hd(this.b)+"x"},
gu(a){return A.U(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(J.T(b)!==A.A(s))return!1
return b instanceof A.eE&&b.a===s.a&&b.b===s.b&&b.c==s.c}}
A.dm.prototype={
gu(a){return A.U(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(J.T(b)!==A.A(s))return!1
return b instanceof A.dm&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&J.f(b.c,s.c)},
a43(a,b){return this.a.$2(a,b)}}
A.Zs.prototype={
Bc(a){var s,r=this
r.a=a
s=r.b
if(s!=null){r.b=null
a.f=!0
B.b.a_(s,a.gny(a))
r.a.f=!1}},
W(a,b){var s=this.a
if(s!=null)return s.W(0,b)
s=this.b;(s==null?this.b=A.a([],t.fE):s).push(b)},
G(a,b){var s,r=this.a
if(r!=null)return r.G(0,b)
for(s=0;r=this.b,s<r.length;++s)if(J.f(r[s],b)){r=this.b
r.toString
B.b.fP(r,s)
break}}}
A.Zt.prototype={
m(){var s=this.a;--s.r
s.qe()
this.a=null}}
A.jU.prototype={
W(a,b){var s,r,q,p,o,n,m,l=this
if(l.w)A.Y(A.a6(u.V))
l.e=!0
l.a.push(b)
o=l.b
if(o!=null)try{o=o.cH(0)
n=l.f
b.a.$2(o,!n)}catch(m){s=A.ah(m)
r=A.ay(m)
l.KF(A.bk("by a synchronously-called image listener"),s,r)}o=l.c
if(o!=null&&b.c!=null)try{n=b.c
n.toString
n.$2(o.a,o.b)}catch(s){q=A.ah(s)
p=A.ay(s)
if(!J.f(q,l.c.a))A.dZ(new A.bE(q,p,"image resource service",A.bk("by a synchronously-called image error listener"),null,!1))}},
m9(){if(this.w)A.Y(A.a6(u.V));++this.r
return new A.Zt(this)},
G(a,b){var s,r,q,p,o,n=this
if(n.w)A.Y(A.a6(u.V))
for(s=n.a,r=0;r<s.length;++r)if(J.f(s[r],b)){B.b.fP(s,r)
break}if(s.length===0){s=n.x
q=A.a(s.slice(0),A.an(s))
for(p=q.length,o=0;o<q.length;q.length===p||(0,A.R)(q),++o)q[o].$0()
B.b.X(s)
n.qe()}},
qe(){var s,r=this
if(!r.e||r.w||r.a.length!==0||r.r!==0)return
s=r.b
if(s!=null)s.a.m()
r.b=null
r.w=!0},
Bg(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.w)A.Y(A.a6(u.V))
p=i.b
if(p!=null)p.a.m()
i.b=a
p=i.a
if(p.length===0)return
o=A.aA(p,!0,t.tg)
for(p=o.length,n=a.a,m=a.b,l=a.c,k=0;k<p;++k){s=o[k]
try{s.a43(new A.eE(n.cH(0),m,l),!1)}catch(j){r=A.ah(j)
q=A.ay(j)
i.KF(A.bk("by an image listener"),r,q)}}},
kv(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i="image resource service"
this.c=new A.bE(b,e,i,a,c,d)
o=this.a
n=t.pE
m=A.aA(new A.dc(new A.aC(o,new A.Zu(),A.an(o).h("aC<1,~(F,bG?)?>")),n),!0,n.h("q.E"))
s=!1
for(o=m.length,l=0;l<o;++l){r=m[l]
try{r.$2(b,e)
s=!0}catch(k){q=A.ah(k)
p=A.ay(k)
if(!J.f(q,b)){n=A.bk("when reporting an error to an image listener")
j=$.fy()
if(j!=null)j.$1(new A.bE(q,p,i,n,null,!1))}}}if(!s){o=this.c
o.toString
A.dZ(o)}},
KF(a,b,c){return this.kv(a,b,null,!1,c)},
a4X(a){var s,r,q,p
if(this.w)A.Y(A.a6(u.V))
s=this.a
if(s.length!==0){r=t.zG
q=A.aA(new A.dc(new A.aC(s,new A.Zv(),A.an(s).h("aC<1,~(eD)?>")),r),!0,r.h("q.E"))
for(s=q.length,p=0;p<s;++p)q[p].$1(a)}}}
A.Zu.prototype={
$1(a){return a.c},
$S:203}
A.Zv.prototype={
$1(a){return a.b},
$S:204}
A.Ha.prototype={
Qm(a,b,c,d,e){this.d=c
b.dV(this.gTK(),new A.a0j(this,d),t.H)},
TL(a){this.z=a
if(this.a.length!==0)this.l0()},
TC(a){var s,r,q,p=this
p.cx=!1
if(p.a.length===0)return
s=p.ay
if(s!=null){r=p.ax
r===$&&A.b()
r=a.a-r.a>=s.a}else r=!0
if(r){s=p.at
p.DG(new A.eE(s.gf7(s).cH(0),p.Q,p.d))
p.ax=a
s=p.at
p.ay=s.gIk(s)
s=p.at
s.gf7(s).m()
p.at=null
q=B.f.h3(p.ch,p.z.gm_())
if(p.z.gtM()===-1||q<=p.z.gtM())p.l0()
return}s.toString
r=p.ax
r===$&&A.b()
p.CW=A.cc(new A.aM(B.d.b6((s.a-(a.a-r.a))*$.anV)),new A.a0i(p))},
l0(){var s=0,r=A.a4(t.H),q,p=2,o,n=this,m,l,k,j,i
var $async$l0=A.a0(function(a,b){if(a===1){o=b
s=p}while(true)switch(s){case 0:j=n.at
if(j!=null)j.gf7(j).m()
n.at=null
p=4
s=7
return A.a5(n.z.po(),$async$l0)
case 7:n.at=b
p=2
s=6
break
case 4:p=3
i=o
m=A.ah(i)
l=A.ay(i)
n.kv(A.bk("resolving an image frame"),m,n.as,!0,l)
s=1
break
s=6
break
case 3:s=2
break
case 6:if(n.z.gm_()===1){if(n.a.length===0){s=1
break}j=n.at
n.DG(new A.eE(j.gf7(j).cH(0),n.Q,n.d))
j=n.at
j.gf7(j).m()
n.at=null
s=1
break}n.FA()
case 1:return A.a2(q,r)
case 2:return A.a1(o,r)}})
return A.a3($async$l0,r)},
FA(){if(this.cx)return
this.cx=!0
$.bK.pw(this.gTB())},
DG(a){this.Bg(a);++this.ch},
W(a,b){var s,r=this
if(r.a.length===0){s=r.z
if(s!=null)s=r.b==null||s.gm_()>1
else s=!1}else s=!1
if(s)r.l0()
r.BR(0,b)},
G(a,b){var s,r=this
r.BS(0,b)
if(r.a.length===0){s=r.CW
if(s!=null)s.av(0)
r.CW=null}},
qe(){this.Nf()
if(this.w)this.y=null}}
A.a0j.prototype={
$2(a,b){this.a.kv(A.bk("resolving an image codec"),a,this.b,!0,b)},
$S:31}
A.a0i.prototype={
$0(){this.a.FA()},
$S:0}
A.MZ.prototype={}
A.MY.prototype={}
A.Ac.prototype={}
A.jY.prototype={
k(a,b){var s
if(b==null)return!1
if(b instanceof A.jY)if(b.a===this.a)if(b.b==this.b)s=A.cL(b.f,this.f)
else s=!1
else s=!1
else s=!1
return s},
gu(a){return A.U(this.a,this.b,this.c,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"InlineSpanSemanticsInformation{text: "+this.a+", semanticsLabel: "+A.h(this.b)+", recognizer: "+A.h(this.c)+"}"}}
A.fO.prototype={
LO(a){var s={}
s.a=null
this.aP(new A.ZF(s,a,new A.Ac()))
return s.a},
L0(a){var s,r=new A.bL("")
this.HG(r,!0,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
ab(a,b){var s={}
if(b<0)return null
s.a=null
this.aP(new A.ZE(s,b,new A.Ac()))
return s.a},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.T(b)!==A.A(this))return!1
return b instanceof A.fO&&J.f(b.a,this.a)},
gu(a){return J.o(this.a)}}
A.ZF.prototype={
$1(a){var s=a.LP(this.b,this.c)
this.a.a=s
return s==null},
$S:45}
A.ZE.prototype={
$1(a){var s=a.a_K(this.b,this.c)
this.a.a=s
return s==null},
$S:45}
A.dv.prototype={
aF(a,b){var s=this.a.aF(0,b)
return new A.dv(this.b.a0(0,b),s)},
c1(a,b){var s,r,q=this
if(a instanceof A.dv){s=A.aw(a.a,q.a,b)
r=A.hi(a.b,q.b,b)
r.toString
return new A.dv(r,s)}if(a instanceof A.dj){s=A.aw(a.a,q.a,b)
return new A.e5(q.b,1-b,a.b,s)}return q.kR(a,b)},
c2(a,b){var s,r,q=this
if(a instanceof A.dv){s=A.aw(q.a,a.a,b)
r=A.hi(q.b,a.b,b)
r.toString
return new A.dv(r,s)}if(a instanceof A.dj){s=A.aw(q.a,a.a,b)
return new A.e5(q.b,b,a.b,s)}return q.kS(a,b)},
fg(a,b){var s=$.ao().ck()
s.ew(this.b.V(b).dk(a))
return s},
hw(a,b,c){var s,r,q,p,o=this.a
switch(o.c.a){case 0:break
case 1:s=this.b
if(o.b===0)a.cV(s.V(c).dk(b),o.hE())
else{r=$.ao().bd()
r.sae(0,o.a)
q=s.V(c).dk(b)
p=q.cZ(-o.gel())
a.rz(q.cZ(o.gBz()),p,r)}break}},
k(a,b){if(b==null)return!1
if(J.T(b)!==A.A(this))return!1
return b instanceof A.dv&&b.a.k(0,this.a)&&b.b.k(0,this.b)},
gu(a){return A.U(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"RoundedRectangleBorder("+this.a.i(0)+", "+this.b.i(0)+")"}}
A.e5.prototype={
aF(a,b){var s=this.a.aF(0,b)
return new A.e5(this.b.a0(0,b),b,this.d,s)},
c1(a,b){var s,r,q,p=this
if(a instanceof A.dv){s=A.aw(a.a,p.a,b)
r=A.hi(a.b,p.b,b)
r.toString
return new A.e5(r,p.c*b,p.d,s)}if(a instanceof A.dj){s=A.aw(a.a,p.a,b)
r=p.c
return new A.e5(p.b,r+(1-r)*(1-b),a.b,s)}if(a instanceof A.e5){s=A.aw(a.a,p.a,b)
r=A.hi(a.b,p.b,b)
r.toString
q=A.Q(a.c,p.c,b)
q.toString
return new A.e5(r,q,p.d,s)}return p.kR(a,b)},
c2(a,b){var s,r,q,p=this
if(a instanceof A.dv){s=A.aw(p.a,a.a,b)
r=A.hi(p.b,a.b,b)
r.toString
return new A.e5(r,p.c*(1-b),p.d,s)}if(a instanceof A.dj){s=A.aw(p.a,a.a,b)
r=p.c
return new A.e5(p.b,r+(1-r)*b,a.b,s)}if(a instanceof A.e5){s=A.aw(p.a,a.a,b)
r=A.hi(p.b,a.b,b)
r.toString
q=A.Q(p.c,a.c,b)
q.toString
return new A.e5(r,q,p.d,s)}return p.kS(a,b)},
Fw(a){var s,r,q,p,o,n,m,l,k=this.c
if(k===0||a.c-a.a===a.d-a.b)return a
s=a.c
r=a.a
q=s-r
p=a.d
o=a.b
n=p-o
m=1-this.d
if(q<n){l=k*((n-q)/2)*m
return new A.B(r,o+l,s,p-l)}else{l=k*((q-n)/2)*m
return new A.B(r+l,o,s-l,p)}},
CB(a,b){var s,r,q,p=this.b.V(b),o=this.c
if(o===0)return p
s=this.d
if(s!==0){r=a.c-a.a
q=a.d-a.b
s=0.5+s/2
if(r<q){o=A.ny(p,A.AA(new A.bo(r/2,s*q/2)),o)
o.toString
return o}else{o=A.ny(p,A.AA(new A.bo(s*r/2,q/2)),o)
o.toString
return o}}return A.ny(p,A.ir(a.gfj()/2),o)},
fg(a,b){var s=$.ao().ck(),r=this.CB(a,b)
r.toString
s.ew(r.dk(this.Fw(a)))
return s},
hw(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=this.CB(b,c)
s.toString
a.cV(s.dk(this.Fw(b)).cZ(r.b*r.d/2),r.hE())
break}},
k(a,b){var s=this
if(b==null)return!1
if(J.T(b)!==A.A(s))return!1
return b instanceof A.e5&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c===s.c},
gu(a){return A.U(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r="RoundedRectangleBorder(",q=s.d
if(q!==0)return r+s.a.i(0)+", "+s.b.i(0)+", "+B.d.N(s.c*100,1)+u.T+B.d.N(q*100,1)+"% oval)"
return r+s.a.i(0)+", "+s.b.i(0)+", "+B.d.N(s.c*100,1)+"% of the way to being a CircleBorder)"}}
A.en.prototype={
aF(a,b){return new A.en(this.a.aF(0,b))},
c1(a,b){var s,r=this
if(a instanceof A.en)return new A.en(A.aw(a.a,r.a,b))
if(a instanceof A.dj){s=A.aw(a.a,r.a,b)
return new A.e7(1-b,a.b,s)}if(a instanceof A.dv){s=A.aw(a.a,r.a,b)
return new A.e8(a.b,1-b,s)}return r.kR(a,b)},
c2(a,b){var s,r=this
if(a instanceof A.en)return new A.en(A.aw(r.a,a.a,b))
if(a instanceof A.dj){s=A.aw(r.a,a.a,b)
return new A.e7(b,a.b,s)}if(a instanceof A.dv){s=A.aw(r.a,a.a,b)
return new A.e8(a.b,b,s)}return r.kS(a,b)},
fg(a,b){var s=a.gfj()/2,r=$.ao().ck()
r.ew(A.ahu(a,new A.bo(s,s)))
return r},
hw(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=b.gfj()/2
a.cV(A.ahu(b,new A.bo(s,s)).cZ(r.b*r.d/2),r.hE())
break}},
k(a,b){if(b==null)return!1
if(J.T(b)!==A.A(this))return!1
return b instanceof A.en&&b.a.k(0,this.a)},
gu(a){var s=this.a
return A.U(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"StadiumBorder("+this.a.i(0)+")"}}
A.e7.prototype={
aF(a,b){return new A.e7(b,this.c,this.a.aF(0,b))},
c1(a,b){var s,r,q,p=this
if(a instanceof A.en)return new A.e7(p.b*b,p.c,A.aw(a.a,p.a,b))
if(a instanceof A.dj){s=A.aw(a.a,p.a,b)
r=p.b
return new A.e7(r+(1-r)*(1-b),a.b,s)}if(a instanceof A.e7){s=A.aw(a.a,p.a,b)
r=A.Q(a.b,p.b,b)
r.toString
q=A.Q(a.c,p.c,b)
q.toString
return new A.e7(r,q,s)}return p.kR(a,b)},
c2(a,b){var s,r,q,p=this
if(a instanceof A.en)return new A.e7(p.b*(1-b),p.c,A.aw(p.a,a.a,b))
if(a instanceof A.dj){s=A.aw(p.a,a.a,b)
r=p.b
return new A.e7(r+(1-r)*b,a.b,s)}if(a instanceof A.e7){s=A.aw(p.a,a.a,b)
r=A.Q(p.b,a.b,b)
r.toString
q=A.Q(p.c,a.c,b)
q.toString
return new A.e7(r,q,s)}return p.kS(a,b)},
G5(a){var s,r,q,p,o,n,m,l,k=this.b
if(k===0||a.c-a.a===a.d-a.b)return a
s=a.c
r=a.a
q=s-r
p=a.d
o=a.b
n=p-o
m=1-this.c
if(q<n){l=k*((n-q)/2)*m
return new A.B(r,o+l,s,p-l)}else{l=k*((q-n)/2)*m
return new A.B(r+l,o,s-l,p)}},
no(a){var s,r,q,p=A.ir(a.gfj()/2),o=this.c
if(o!==0){s=a.c-a.a
r=a.d-a.b
q=this.b
o=0.5+o/2
if(s<r){o=A.ny(p,A.AA(new A.bo(s/2,o*r/2)),q)
o.toString
return o}else{o=A.ny(p,A.AA(new A.bo(o*s/2,r/2)),q)
o.toString
return o}}return p},
fg(a,b){var s=$.ao().ck()
s.ew(this.no(a).dk(this.G5(a)))
return s},
hw(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.cV(this.no(b).dk(this.G5(b)).cZ(s.b*s.d/2),s.hE())
break}},
k(a,b){if(b==null)return!1
if(J.T(b)!==A.A(this))return!1
return b instanceof A.e7&&b.a.k(0,this.a)&&b.b===this.b},
gu(a){return A.U(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r=s.c
if(r!==0)return"StadiumBorder("+s.a.i(0)+", "+B.d.N(s.b*100,1)+u.T+B.d.N(r*100,1)+"% oval)"
return"StadiumBorder("+s.a.i(0)+", "+B.d.N(s.b*100,1)+"% of the way to being a CircleBorder)"}}
A.e8.prototype={
aF(a,b){var s=this.a.aF(0,b)
return new A.e8(this.b.a0(0,b),b,s)},
c1(a,b){var s,r,q,p=this
if(a instanceof A.en)return new A.e8(p.b,p.c*b,A.aw(a.a,p.a,b))
if(a instanceof A.dv){s=p.c
return new A.e8(p.b,s+(1-s)*(1-b),A.aw(a.a,p.a,b))}if(a instanceof A.e8){s=A.aw(a.a,p.a,b)
r=A.hi(a.b,p.b,b)
r.toString
q=A.Q(a.c,p.c,b)
q.toString
return new A.e8(r,q,s)}return p.kR(a,b)},
c2(a,b){var s,r,q,p=this
if(a instanceof A.en)return new A.e8(p.b,p.c*(1-b),A.aw(p.a,a.a,b))
if(a instanceof A.dv){s=p.c
return new A.e8(p.b,s+(1-s)*b,A.aw(p.a,a.a,b))}if(a instanceof A.e8){s=A.aw(p.a,a.a,b)
r=A.hi(p.b,a.b,b)
r.toString
q=A.Q(p.c,a.c,b)
q.toString
return new A.e8(r,q,s)}return p.kS(a,b)},
no(a){var s=a.gfj()/2
s=A.hi(this.b,A.AA(new A.bo(s,s)),1-this.c)
s.toString
return s},
fg(a,b){var s=$.ao().ck()
s.ew(this.no(a).V(b).dk(a))
return s},
hw(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.cV(this.no(b).V(c).dk(b).cZ(s.b*s.d/2),s.hE())
break}},
k(a,b){var s=this
if(b==null)return!1
if(J.T(b)!==A.A(s))return!1
return b instanceof A.e8&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c===s.c},
gu(a){return A.U(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"StadiumBorder("+this.a.i(0)+", "+this.b.i(0)+", "+B.d.N(this.c*100,1)+"% of the way to being a RoundedRectangleBorder)"}}
A.mH.prototype={
E(){return"TextOverflow."+this.b}}
A.m8.prototype={
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(b instanceof A.m8)if(b.a.k(0,r.a))if(b.b===r.b)s=b.c==r.c
else s=!1
else s=!1
else s=!1
return s},
gu(a){var s=this
return A.U(s.a,s.b,s.d,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"PlaceholderDimensions("+this.a.i(0)+", "+A.h(this.d)+")"}}
A.wP.prototype={
E(){return"TextWidthBasis."+this.b}}
A.a9_.prototype={}
A.Kc.prototype={
a8(){var s=this,r=s.a
if(r!=null)r.m()
s.dy=s.dx=s.fr=s.a=null},
stP(a,b){var s,r,q=this
if(J.f(q.d,b))return
s=q.d
s=s==null?null:s.a
if(!J.f(s,b.a)){s=q.CW
if(s!=null)s.m()
q.CW=null}s=q.d
s=s==null?null:s.b1(0,b)
r=s==null?B.cF:s
q.d=b
q.e=null
s=r.a
if(s>=3)q.a8()
else if(s>=2)q.b=!0},
gtC(){var s=this.e
if(s==null){s=this.d
s=s==null?null:s.L0(!1)
this.e=s}return s==null?"":s},
sAf(a,b){if(this.f===b)return
this.f=b
this.a8()},
sbC(a){var s,r=this
if(r.r===a)return
r.r=a
r.a8()
s=r.CW
if(s!=null)s.m()
r.CW=null},
sAg(a){var s,r=this
if(r.w===a)return
r.w=a
r.a8()
s=r.CW
if(s!=null)s.m()
r.CW=null},
sa1c(a){if(this.x==a)return
this.x=a
this.a8()},
sz8(a,b){if(J.f(this.y,b))return
this.y=b
this.a8()},
szd(a){if(this.z==a)return
this.z=a
this.a8()},
sAh(a){if(this.as===a)return
this.as=a
this.a8()},
uk(a){if(a==null||a.length===0||A.cL(a,this.ch))return
this.ch=a
this.a8()},
Dr(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.d.a
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
o=l==null?f:new A.K9(l)
k=e.w
j=e.x
i=e.d
h=e.r
if(h==null)h=14
e=e.as
e=A.ahp(n,i,h*q,j,k,e,m,p,f,s,r,o)}if(e==null){e=g.f
s=g.r
if(s==null)s=a
r=g.w
q=g.z
p=g.at
p=A.ahp(g.x,f,14*r,f,f,f,g.y,q,f,e,s,p)
e=p}return e},
S2(){return this.Dr(null)},
gtE(){var s,r,q=this,p=q.CW
if(p==null){p=q.Dr(B.V)
s=$.ao().xQ(p)
p=q.d
if(p==null)r=null
else{p=p.a
r=p==null?null:p.AZ(q.w)}if(r!=null)s.zY(r)
s.qS(" ")
p=s.b8()
p.ig(B.Tl)
q.CW=p}return p.gbI(p)},
gbg(a){var s=this.as,r=this.a
s=s===B.Zi?r.gJM():r.gbg(r)
return Math.ceil(s)},
ez(a){var s
switch(a.a){case 0:s=this.a
return s.gqW(s)
case 1:s=this.a
return s.ga2O(s)}},
Dq(){var s,r,q=this,p=q.d
if(p==null)throw A.c(A.a6("TextPainter.text must be set to a non-null value before using the TextPainter."))
s=q.S2()
r=$.ao().xQ(s)
s=q.w
p.Hr(r,q.ch,s)
q.ay=r.ga4i()
q.a=r.b8()
q.b=!1},
EC(a,b){var s,r,q=this
q.a.ig(new A.kd(b))
if(a!==b){switch(q.as.a){case 1:s=Math.ceil(q.a.gJM())
break
case 0:s=Math.ceil(q.a.ga3M())
break
default:s=null}s=A.G(s,a,b)
r=q.a
if(s!==Math.ceil(r.gbg(r)))q.a.ig(new A.kd(s))}},
z5(a,b){var s=this,r=s.a==null
if(!r&&b===s.cx&&a===s.cy)return
if(s.b||r)s.Dq()
s.cx=b
s.cy=a
s.dy=s.dx=s.fr=null
s.EC(b,a)
s.ax=s.a.tZ()},
a3u(){return this.z5(1/0,0)},
aE(a,b){var s,r=this,q=r.cx,p=r.cy
if(r.a==null||q==null||p==null)throw A.c(A.a6("TextPainter.paint called when text geometry was not yet calculated.\nPlease call layout() before paint() to position the text before painting it."))
if(r.b){r.Dq()
r.EC(q,p)}s=r.a
s.toString
a.k8(s,b)},
DZ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.gtC().length
if(g===0||a>g)return null
s=B.c.ab(h.gtC(),Math.max(0,a-1))
r=(s&63488)===55296||h.d.ab(0,a)===8205||s===8207||s===8206
q=r?2:1
p=A.a([],t.px)
for(o=-g,n=!r,m=s===10;p.length===0;){l=a-q
p=h.a.AJ(l,a,B.mj)
if(p.length===0){if(n&&m)break
if(l<o)break
q*=2
continue}k=B.b.gK(p)
if(m){o=k.d
return new A.B(h.gvw().a,o,h.gvw().a,o+o-k.b)}o=k.e
j=o===B.t?k.c:k.a
i=o===B.V?j-(b.c-b.a):j
o=h.a
o=A.G(i,0,o.gbg(o))
n=h.a
return new A.B(o,k.b,A.G(i,0,n.gbg(n)),k.d)}return null},
DY(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.gtC().length
if(h===0||a<0)return null
s=B.c.ab(i.gtC(),Math.min(a,h-1))
r=(s&63488)===55296||s===8205||s===8207||s===8206
q=r?2:1
p=A.a([],t.px)
for(o=h<<1>>>0,n=!r;p.length===0;){m=a+q
p=i.a.AJ(a,m,B.mj)
if(p.length===0){if(n)break
if(m>=o)break
q*=2
continue}l=B.b.gU(p)
o=l.e
k=o===B.t?l.a:l.c
j=o===B.V?k-(b.c-b.a):k
o=i.a
o=A.G(j,0,o.gbg(o))
n=i.a
return new A.B(o,l.b,A.G(j,0,n.gbg(n)),l.d)}return null},
gvw(){var s=this
switch(s.f.a){case 0:return B.j
case 1:return new A.t(s.gbg(s),0)
case 2:return new A.t(s.gbg(s)/2,0)
case 3:case 4:switch(s.r.a){case 0:return new A.t(s.gbg(s),0)
case 1:return B.j}break
case 5:switch(s.r.a){case 0:return B.j
case 1:return new A.t(s.gbg(s),0)}break}},
Dg(a,b){var s,r,q,p,o=this
if(a.k(0,o.dx)&&b.k(0,o.dy))return
s=a.a
switch(a.b.a){case 0:r=o.DZ(s,b)
if(r==null)r=o.DY(s,b)
break
case 1:r=o.DY(s,b)
if(r==null)r=o.DZ(s,b)
break
default:r=null}q=r!=null
p=q?new A.t(r.a,r.b):o.gvw()
o.db=new A.a9_(p,q?r.d-r.b:null)
o.dx=a
o.dy=b},
m(){var s=this,r=s.CW
if(r!=null)r.m()
s.CW=null
r=s.a
if(r!=null)r.m()
s.d=s.a=null}}
A.wO.prototype={
gHY(a){return this.e},
gAC(){return!0},
i7(a,b){t.Y.b(a)},
Hr(a,b,c){var s,r,q,p,o=this.a,n=o!=null
if(n)a.zY(o.AZ(c))
o=this.b
if(o!=null)try{a.qS(o)}catch(q){o=A.ah(q)
if(o instanceof A.fA){s=o
r=A.ay(q)
A.dZ(new A.bE(s,r,"painting library",A.bk("while building a TextSpan"),null,!1))
a.qS("\ufffd")}else throw q}o=this.c
if(o!=null)for(p=0;p<1;++p)o[p].Hr(a,b,c)
if(n)a.hz()},
aP(a){var s,r
if(this.b!=null)if(!a.$1(this))return!1
s=this.c
if(s!=null)for(r=0;r<1;++r)if(!s[r].aP(a))return!1
return!0},
LP(a,b){var s,r,q,p,o=this.b
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
HG(a,b,c){var s,r=this.b
if(r!=null)a.a+=r
r=this.c
if(r!=null)for(s=0;s<1;++s)r[s].HG(a,!0,c)},
HF(a,b,c){var s,r,q=this.b
if(q!=null){s=A.a([],t.ve)
a.push(A.akL(q,null,null,s))}q=this.c
if(q!=null)for(r=0;r<1;++r)q[r].HF(a,b,!1)},
a_Y(a){return this.HF(a,null,!1)},
a_K(a,b){var s,r,q,p=this.b
if(p==null)return null
s=b.a
r=a-s
q=p.length
if(r<q)return B.c.ab(p,r)
b.a=s+q
return null},
b1(a,b){var s,r,q,p,o,n=this
if(n===b)return B.dJ
if(A.A(b)!==A.A(n))return B.cF
if(b.b==n.b){s=n.c==null?null:1
s=s!=(b.c==null?null:1)||n.a==null!==(b.a==null)}else s=!0
if(s)return B.cF
s=n.a
if(s!=null){r=b.a
r.toString
q=s.b1(0,r)
p=q.a>0?q:B.dJ
if(p===B.cF)return p}else p=B.dJ
s=n.c
if(s!=null)for(r=b.c,o=0;o<1;++o){q=s[o].b1(0,r[o])
if(q.a>p.a)p=q
if(p===B.cF)return p}return p},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.T(b)!==A.A(s))return!1
if(!s.Ni(0,b))return!1
return b instanceof A.wO&&b.b==s.b&&s.e.k(0,b.e)&&A.cL(b.c,s.c)},
gu(a){var s=this,r=null,q=A.fO.prototype.gu.call(s,s),p=s.c
p=p==null?r:A.d7(p)
return A.U(q,s.b,r,r,r,r,s.e,p,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
bV(){return"TextSpan"},
$iam:1,
$iiO:1,
gzz(){return null},
gzC(){return null}}
A.r.prototype={
glZ(){return this.e},
gln(a){return this.d},
nT(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=b9==null?a.a:b9,a1=a.ay
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
c=b0==null?a.gln(a):b0
b=b1==null?a.e:b1
return A.bU(r,q,s,null,g,f,e,d,c,b,a.fr,p,a.x,h,o,a1,k,a0,j,n,a.ax,a.fy,a.f,i,l,m)},
hk(a){return this.nT(null,null,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
a0e(a){return this.nT(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null)},
a0o(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5){return this.nT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,null,r,s,a0,a1,a2,a3,a4,a5)},
HR(a,b){return this.nT(null,null,a,null,null,null,null,null,null,null,null,b,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
HM(a){return this.nT(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null,null,null)},
c_(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
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
a1=a4.gln(a4)
a2=a4.e
a3=a4.f
return this.a0o(g,r,s,null,c,b,a,a0,a1,a2,e,q,o,d,p,h,k,j,n,i,a4.fy,a3,f,l,m)},
AZ(a){var s,r,q=this,p=q.glZ(),o=q.r
o=o==null?null:o*a
s=q.ch
if(s==null){s=q.c
if(s!=null){r=$.ao().bd()
r.sae(0,s)
s=r}else s=null}return A.amb(s,q.b,q.CW,q.cx,q.cy,q.db,q.d,p,q.fr,o,q.x,q.fx,q.w,q.ay,q.as,q.at,q.y,q.ax,q.dy,q.Q,q.z)},
b1(a,b){var s=this
if(s===b)return B.dJ
if(s.a!==b.a||s.d!=b.d||s.r!=b.r||s.w!=b.w||s.y!=b.y||s.z!=b.z||s.Q!=b.Q||s.as!=b.as||s.at!=b.at||s.ay!=b.ay||s.ch!=b.ch||!A.cL(s.dy,b.dy)||!A.cL(s.fr,b.fr)||!A.cL(s.fx,b.fx)||!A.cL(s.glZ(),b.glZ())||!1)return B.cF
if(!J.f(s.b,b.b)||!J.f(s.c,b.c)||!J.f(s.CW,b.CW)||!J.f(s.cx,b.cx)||s.cy!=b.cy||s.db!=b.db)return B.TE
return B.dJ},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.T(b)!==A.A(r))return!1
if(b instanceof A.r)if(b.a===r.a)if(J.f(b.b,r.b))if(J.f(b.c,r.c))if(b.r==r.r)if(b.w==r.w)if(b.y==r.y)if(b.z==r.z)if(b.Q==r.Q)if(b.as==r.as)if(b.at==r.at)if(b.ay==r.ay)if(b.ch==r.ch)if(A.cL(b.dy,r.dy))if(A.cL(b.fr,r.fr))if(A.cL(b.fx,r.fx))if(J.f(b.CW,r.CW))if(J.f(b.cx,r.cx))if(b.cy==r.cy)if(b.db==r.db)if(b.d==r.d)if(A.cL(b.glZ(),r.glZ()))s=!0
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
gu(a){var s,r=this,q=null,p=r.glZ(),o=p==null?q:A.d7(p),n=A.U(r.cy,r.db,r.d,o,r.f,r.fy,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a),m=r.dy,l=r.fx
o=m==null?q:A.d7(m)
s=l==null?q:A.d7(l)
return A.U(r.a,r.b,r.c,r.r,r.w,r.x,r.y,r.z,r.Q,r.as,r.at,r.ax,r.ay,r.ch,o,q,s,r.CW,r.cx,n)},
bV(){return"TextStyle"}}
A.Qf.prototype={}
A.Em.prototype={
Qi(a,b,c,d,e){var s=this
s.r=A.anG(new A.XY(s),s.gyk(s),0,10,0)},
cO(a,b){var s,r,q=this
if(b>q.r)return q.grJ()
s=q.e
r=q.c
return q.d+s*Math.pow(q.b,b)/r-s/r-q.f/2*b*b},
ds(a,b){var s=this
if(b>s.r)return 0
return s.e*Math.pow(s.b,b)-s.f*b},
grJ(){var s=this
if(s.f===0)return s.d-s.e/s.c
return s.cO(0,s.r)},
KW(a){var s,r=this,q=r.d
if(a===q)return 0
s=r.e
if(s!==0)if(s>0)q=a<q||a>r.grJ()
else q=a>q||a<r.grJ()
else q=!0
if(q)return 1/0
return A.anG(r.gyk(r),r.ga5O(r),0,10,a)},
je(a){return Math.abs(this.ds(0,a))<this.a.c},
i(a){return"FrictionSimulation(c\u2093: "+B.d.N(this.b,1)+", x\u2080: "+B.d.N(this.d,1)+", dx\u2080: "+B.d.N(this.e,1)+")"}}
A.XY.prototype={
$1(a){var s=this.a
return s.e*Math.pow(s.b,a)*s.c-s.f},
$S:54}
A.a4D.prototype={
i(a){return"Simulation"}}
A.a6v.prototype={
i(a){return"SpringDescription(mass: "+B.d.N(this.a,1)+", stiffness: "+B.f.N(this.b,1)+", damping: "+B.d.N(this.c,1)+")"}}
A.pi.prototype={
E(){return"SpringType."+this.b}}
A.JQ.prototype={
cO(a,b){return this.b+this.c.cO(0,b)},
ds(a,b){return this.c.ds(0,b)},
je(a){var s=this.c
return A.A1(s.cO(0,a),0,this.a.a)&&A.A1(s.ds(0,a),0,this.a.c)},
i(a){var s=this.c
return"SpringSimulation(end: "+B.d.N(this.b,1)+", "+s.gd1(s).i(0)+")"}}
A.kn.prototype={
cO(a,b){return this.je(b)?this.b:this.OS(0,b)}}
A.a9e.prototype={
cO(a,b){return(this.b+this.c*b)*Math.pow(2.718281828459045,this.a*b)},
ds(a,b){var s=this.a,r=Math.pow(2.718281828459045,s*b),q=this.c
return s*(this.b+q*b)*r+q*r},
gd1(a){return B.V5}}
A.abT.prototype={
cO(a,b){var s=this
return s.c*Math.pow(2.718281828459045,s.a*b)+s.d*Math.pow(2.718281828459045,s.b*b)},
ds(a,b){var s=this,r=s.a,q=s.b
return s.c*r*Math.pow(2.718281828459045,r*b)+s.d*q*Math.pow(2.718281828459045,q*b)},
gd1(a){return B.V7}}
A.ads.prototype={
cO(a,b){var s=this,r=s.a*b
return Math.pow(2.718281828459045,s.b*b)*(s.c*Math.cos(r)+s.d*Math.sin(r))},
ds(a,b){var s,r=this,q=r.b,p=Math.pow(2.718281828459045,q*b),o=r.a,n=o*b,m=Math.cos(n),l=Math.sin(n)
n=r.d
s=r.c
return p*(n*o*m-s*o*l)+q*p*(n*l+s*m)},
gd1(a){return B.V6}}
A.Km.prototype={
i(a){return"Tolerance(distance: \xb1"+A.h(this.a)+", time: \xb10.001, velocity: \xb1"+A.h(this.c)+")"}}
A.oW.prototype={
yG(){var s=this,r=s.ry$
r===$&&A.b()
r=r.e
r.toString
r.sxJ(s.HW())
if(s.ry$.e.t$!=null)s.LY()},
yM(){},
yI(){},
HW(){var s,r=$.ck(),q=r.w
if(q==null){s=self.window.devicePixelRatio
q=s===0?1:s}return new A.KF(r.gkr().cP(0,q),q)},
V3(){var s,r=this
if($.aK().a.c){if(r.to$==null){s=r.ry$
s===$&&A.b()
r.to$=s.Iu()}}else{s=r.to$
if(s!=null)s.m()
r.to$=null}},
Mm(a){var s,r=this
if(a){if(r.to$==null){s=r.ry$
s===$&&A.b()
r.to$=s.Iu()}}else{s=r.to$
if(s!=null)s.m()
r.to$=null}},
Vm(a){B.T3.nc("first-frame",null,!1,t.H)},
V1(a,b,c){var s=this.ry$
s===$&&A.b()
s=s.as
if(s!=null)s.a4g(a,b,null)},
V5(){var s,r=this.ry$
r===$&&A.b()
r=r.e
r.toString
s=t.W
s.a(A.J.prototype.gbp.call(r)).ay.C(0,r)
s.a(A.J.prototype.gbp.call(r)).mn()},
V9(a){var s=this.ry$
s===$&&A.b()
s.e.toString
s=$.dy;(s==null?$.dy=A.jJ():s).a5z(a)},
V7(){var s=this.ry$
s===$&&A.b()
s.e.lx()},
Uy(a){this.yj()
this.Y0()},
Y0(){$.bK.ax$.push(new A.a2N(this))},
Hb(){--this.x2$
if(!this.xr$)this.u9()},
yj(){var s=this,r=s.ry$
r===$&&A.b()
r.a1G()
s.ry$.a1F()
s.ry$.a1H()
if(s.xr$||s.x2$===0){s.ry$.e.a_U()
s.ry$.a1I()
s.xr$=!0}},
$iam:1,
$idx:1}
A.a2N.prototype={
$1(a){var s=this.a,r=s.rx$
r.toString
s=s.ry$
s===$&&A.b()
r.a5w(s.e.ga2L())},
$S:2}
A.aO.prototype={
xN(a,b,c,d){var s=this,r=d==null?s.a:d,q=b==null?s.b:b,p=c==null?s.c:c
return new A.aO(r,q,p,a==null?s.d:a)},
a0l(a,b){return this.xN(null,null,a,b)},
HO(a){return this.xN(a,null,null,null)},
a0f(a){return this.xN(null,a,null,null)},
I0(a){var s=this,r=a.gcg(),q=a.gb4(a)+a.gb7(a),p=Math.max(0,s.a-r),o=Math.max(0,s.c-q)
return new A.aO(p,Math.max(p,s.b-r),o,Math.max(o,s.d-q))},
of(a){var s=this,r=a.a,q=a.b,p=a.c,o=a.d
return new A.aO(A.G(s.a,r,q),A.G(s.b,r,q),A.G(s.c,p,o),A.G(s.d,p,o))},
Ak(a,b){var s,r,q=this,p=b==null,o=q.a,n=p?o:A.G(b,o,q.b),m=q.b
p=p?m:A.G(b,o,m)
o=a==null
m=q.c
s=o?m:A.G(a,m,q.d)
r=q.d
return new A.aO(n,p,s,o?r:A.G(a,m,r))},
tQ(a){return this.Ak(a,null)},
Aj(a){return this.Ak(null,a)},
bv(a){var s=this
return new A.a_(A.G(a.a,s.a,s.b),A.G(a.b,s.c,s.d))},
nS(a){var s,r,q,p,o,n=this,m=n.a,l=n.b
if(m>=l&&n.c>=n.d)return new A.a_(A.G(0,m,l),A.G(0,n.c,n.d))
s=a.a
r=a.b
q=s/r
if(s>l){r=l/q
s=l}p=n.d
if(r>p){s=p*q
r=p}if(s<m){r=m/q
s=m}o=n.c
if(r<o){s=o*q
r=o}return new A.a_(A.G(s,m,l),A.G(r,o,p))},
gJz(){var s=this
return s.a>=s.b&&s.c>=s.d},
a0(a,b){var s=this
return new A.aO(s.a*b,s.b*b,s.c*b,s.d*b)},
cP(a,b){var s=this
return new A.aO(s.a/b,s.b/b,s.c/b,s.d/b)},
ga3g(){var s=this,r=s.a
if(r>=0)if(r<=s.b){r=s.c
r=r>=0&&r<=s.d}else r=!1
else r=!1
return r},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.T(b)!==A.A(s))return!1
return b instanceof A.aO&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gu(a){var s=this
return A.U(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s,r=this,q=r.ga3g()?"":"; NOT NORMALIZED",p=r.a
if(p===1/0&&r.c===1/0)return"BoxConstraints(biggest"+q+")"
if(p===0&&r.b===1/0&&r.c===0&&r.d===1/0)return"BoxConstraints(unconstrained"+q+")"
s=new A.Th()
return"BoxConstraints("+s.$3(p,r.b,"w")+", "+s.$3(r.c,r.d,"h")+q+")"}}
A.Th.prototype={
$3(a,b,c){if(a===b)return c+"="+B.d.N(a,1)
return B.d.N(a,1)+"<="+c+"<="+B.d.N(b,1)},
$S:210}
A.hj.prototype={
xl(a,b,c){if(c!=null){c=A.H_(A.ahr(c))
if(c==null)return!1}return this.H9(a,b,c)},
nA(a,b,c){var s,r=b==null,q=r?c:c.aa(0,b)
r=!r
if(r)this.c.push(new A.qk(new A.t(-b.a,-b.b)))
s=a.$2(this,q)
if(r)this.tD()
return s},
H9(a,b,c){var s,r=c==null,q=r?b:A.cp(c,b)
r=!r
if(r)this.c.push(new A.y0(c))
s=a.$2(this,q)
if(r)this.tD()
return s},
H8(a,b,c){var s,r=this
if(b!=null)r.c.push(new A.qk(new A.t(-b.a,-b.b)))
else{c.toString
c=A.H_(A.ahr(c))
c.toString
r.c.push(new A.y0(c))}s=a.$1(r)
r.tD()
return s},
ZV(a,b){return this.H8(a,null,b)},
ZU(a,b){return this.H8(a,b,null)}}
A.nB.prototype={
i(a){return"<optimized out>#"+A.bI(this.a)+"@"+this.c.i(0)}}
A.ev.prototype={
i(a){return"offset="+this.a.i(0)}}
A.rA.prototype={}
A.E.prototype={
ei(a){if(!(a.e instanceof A.ev))a.e=new A.ev(B.j)},
fU(a){var s,r=this.k1
if(r==null)r=this.k1=A.y(t.k,t.DB)
s=r.bJ(0,a,new A.a2f(this,a))
return s},
c5(a){return B.Q},
gjA(){var s=this.k3
return new A.B(0,0,0+s.a,0+s.b)},
u1(a,b){var s=null
try{s=this.jw(a)}finally{}if(s==null&&!b)return this.k3.b
return s},
Lz(a){return this.u1(a,!1)},
jw(a){var s=this,r=s.k4
if(r==null)r=s.k4=A.y(t.E7,t.u6)
r.bJ(0,a,new A.a2e(s,a))
return s.k4.j(0,a)},
ez(a){return null},
gZ(){return t.k.a(A.x.prototype.gZ.call(this))},
RC(){var s,r=this,q=r.k4,p=q==null
if(!(!p&&q.a!==0)){s=r.id
if(!(s!=null&&s.a!==0)){s=r.k1
s=s!=null&&s.a!==0}else s=!0}else s=!0
if(s){if(!p)q.X(0)
q=r.id
if(q!=null)q.X(0)
q=r.k1
if(q!=null)q.X(0)
return!0}return!1},
a8(){var s=this
if(s.RC()&&s.c instanceof A.x){s.tg()
return}s.Od()},
cn(a,b){var s,r=this
if(r.k3!=null)if(!a.k(0,t.k.a(A.x.prototype.gZ.call(r)))){s=r.k4
s=s!=null&&s.a!==0}else s=!1
else s=!1
if(s){s=r.k4
if(s!=null)s.X(0)}r.Oc(a,b)},
ig(a){return this.cn(a,!1)},
oT(){this.k3=this.c5(t.k.a(A.x.prototype.gZ.call(this)))},
bB(){},
bR(a,b){var s=this
if(s.k3.B(0,b))if(s.cK(a,b)||s.j9(b)){a.C(0,new A.nB(b,s))
return!0}return!1},
j9(a){return!1},
cK(a,b){return!1},
dd(a,b){var s,r=a.e
r.toString
s=t.Ch.a(r).a
b.aA(0,s.a,s.b)},
kG(a){var s,r,q,p,o,n=this.bt(0,null)
if(n.hj(n)===0)return B.j
s=new A.fq(new Float64Array(3))
s.fi(0,0,1)
r=new A.fq(new Float64Array(3))
r.fi(0,0,0)
q=n.ij(r)
r=new A.fq(new Float64Array(3))
r.fi(0,0,1)
p=n.ij(r).aa(0,q)
r=new A.fq(new Float64Array(3))
r.fi(a.a,a.b,0)
o=n.ij(r)
r=o.aa(0,p.B7(s.Id(o)/s.Id(p))).a
return new A.t(r[0],r[1])},
ghx(){var s=this.k3
return new A.B(0,0,0+s.a,0+s.b)},
i7(a,b){this.Ob(a,b)}}
A.a2f.prototype={
$0(){return this.a.c5(this.b)},
$S:211}
A.a2e.prototype={
$0(){return this.a.ez(this.b)},
$S:212}
A.cE.prototype={
a0V(a){var s,r,q,p=this.ar$
for(s=A.n(this).h("cE.1?");p!=null;){r=s.a(p.e)
q=p.jw(a)
if(q!=null)return q+r.a.b
p=r.ak$}return null},
I_(a){var s,r,q,p,o=this.ar$
for(s=A.n(this).h("cE.1"),r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.jw(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.ak$}return r},
xW(a,b){var s,r,q={},p=q.a=this.cW$
for(s=A.n(this).h("cE.1");p!=null;p=r){p=p.e
p.toString
s.a(p)
if(a.nA(new A.a2d(q,b,p),p.a,b))return!0
r=p.bQ$
q.a=r}return!1},
nY(a,b){var s,r,q,p,o,n=this.ar$
for(s=A.n(this).h("cE.1"),r=b.a,q=b.b;n!=null;){p=n.e
p.toString
s.a(p)
o=p.a
a.eL(n,new A.t(o.a+r,o.b+q))
n=p.ak$}}}
A.a2d.prototype={
$2(a,b){return this.a.a.bR(a,b)},
$S:16}
A.xk.prototype={
af(a){this.uC(0)}}
A.f8.prototype={
i(a){return this.pF(0)+"; id="+A.h(this.e)}}
A.a0f.prototype={
dz(a,b){var s,r=this.b.j(0,a)
r.cn(b,!0)
s=r.k3
s.toString
return s},
dS(a,b){var s=this.b.j(0,a).e
s.toString
t.DU.a(s).a=b},
Rj(a,b){var s,r,q,p,o,n,m=this,l=m.b
try{m.b=A.y(t.K,t.x)
for(r=t.DU,q=b;q!=null;q=n){p=q.e
p.toString
s=r.a(p)
p=m.b
p.toString
o=s.e
o.toString
p.l(0,o,q)
n=s.ak$}m.tB(a)}finally{m.b=l}},
i(a){return"MultiChildLayoutDelegate"}}
A.IA.prototype={
ei(a){if(!(a.e instanceof A.f8))a.e=new A.f8(null,null,B.j)},
sxZ(a){var s=this,r=s.L
if(r===a)return
if(A.A(a)!==A.A(r)||a.mG(r))s.a8()
s.L=a
s.b!=null},
am(a){this.Pd(a)},
af(a){this.Pe(0)},
c5(a){return a.bv(new A.a_(A.G(1/0,a.a,a.b),A.G(1/0,a.c,a.d)))},
bB(){var s=this,r=t.k.a(A.x.prototype.gZ.call(s))
r=r.bv(new A.a_(A.G(1/0,r.a,r.b),A.G(1/0,r.c,r.d)))
s.k3=r
s.L.Rj(r,s.ar$)},
aE(a,b){this.nY(a,b)},
cK(a,b){return this.xW(a,b)}}
A.yn.prototype={
am(a){var s,r,q
this.em(a)
s=this.ar$
for(r=t.DU;s!=null;){s.am(a)
q=s.e
q.toString
s=r.a(q).ak$}},
af(a){var s,r,q
this.dD(0)
s=this.ar$
for(r=t.DU;s!=null;){s.af(0)
q=s.e
q.toString
s=r.a(q).ak$}}}
A.OU.prototype={}
A.CO.prototype={
W(a,b){var s=this.a
return s==null?null:s.W(0,b)},
G(a,b){var s=this.a
return s==null?null:s.G(0,b)},
gBa(){return null},
Bn(a){return this.hL(a)},
t1(a){return null},
i(a){var s=A.bI(this),r=this.a
r=r==null?null:r.i(0)
if(r==null)r=""
return"<optimized out>#"+s+"("+r+")"}}
A.IB.prototype={
stA(a){var s=this.A
if(s==a)return
this.A=a
this.Dw(a,s)},
sIM(a){var s=this.R
if(s==a)return
this.R=a
this.Dw(a,s)},
Dw(a,b){var s=this,r=a==null
if(r)s.ap()
else if(b==null||A.A(a)!==A.A(b)||a.hL(b))s.ap()
if(s.b!=null){if(b!=null)b.G(0,s.gdQ())
if(!r)a.W(0,s.gdQ())}if(r){if(s.b!=null)s.b0()}else if(b==null||A.A(a)!==A.A(b)||a.Bn(b))s.b0()},
stF(a){if(this.aw.k(0,a))return
this.aw=a
this.a8()},
am(a){var s,r=this
r.mT(a)
s=r.A
if(s!=null)s.W(0,r.gdQ())
s=r.R
if(s!=null)s.W(0,r.gdQ())},
af(a){var s=this,r=s.A
if(r!=null)r.G(0,s.gdQ())
r=s.R
if(r!=null)r.G(0,s.gdQ())
s.kU(0)},
cK(a,b){var s=this.R
if(s!=null){s=s.t1(b)
s=s===!0}else s=!1
if(s)return!0
return this.pI(a,b)},
j9(a){var s=this.A
if(s!=null){s=s.t1(a)
s=s!==!1}else s=!1
return s},
bB(){this.uH()
this.b0()},
nR(a){return a.bv(this.aw)},
F4(a,b,c){var s
A.b5("debugPreviousCanvasSaveCount")
a.cr(0)
if(!b.k(0,B.j))a.aA(0,b.a,b.b)
s=this.k3
s.toString
c.aE(a,s)
a.co(0)},
aE(a,b){var s,r,q=this
if(q.A!=null){s=a.gbz(a)
r=q.A
r.toString
q.F4(s,b,r)
q.FT(a)}q.h2(a,b)
if(q.R!=null){s=a.gbz(a)
r=q.R
r.toString
q.F4(s,b,r)
q.FT(a)}},
FT(a){},
eC(a){var s,r=this
r.h1(a)
r.bH=null
s=r.R
r.dL=s==null?null:s.gBa()
a.a=!1},
nI(a,b,c){var s,r,q,p,o=this
o.fH=A.alD(o.fH,B.rA)
o.i6=A.alD(o.i6,B.rA)
s=o.fH
r=s!=null&&!s.gP(s)
s=o.i6
q=s!=null&&!s.gP(s)
s=A.a([],t.T)
if(r){p=o.fH
p.toString
B.b.J(s,p)}B.b.J(s,c)
if(q){p=o.i6
p.toString
B.b.J(s,p)}o.Ca(a,b,s)},
lx(){this.uE()
this.i6=this.fH=null}}
A.Uv.prototype={}
A.IE.prototype={
Qr(a){var s,r,q,p,o=this
try{r=o.L
if(r!==""){q=$.app()
s=$.ao().xQ(q)
s.zY($.apq())
s.qS(r)
r=s.b8()
o.t!==$&&A.et()
o.t=r}else{o.t!==$&&A.et()
o.t=null}}catch(p){}},
gjC(){return!0},
j9(a){return!0},
c5(a){return a.bv(B.UZ)},
aE(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
try{p=a.gbz(a)
o=i.k3
n=b.a
m=b.b
l=o.a
o=o.b
k=$.ao().bd()
k.sae(0,$.apo())
p.cc(new A.B(n,m,n+l,m+o),k)
p=i.t
p===$&&A.b()
if(p!=null){s=i.k3.a
r=0
q=0
if(s>328){s-=128
r+=64}p.ig(new A.kd(s))
if(i.k3.b>96+p.gbI(p)+12)q+=96
a.gbz(a).k8(p,b.S(0,new A.t(r,q)))}}catch(j){}}}
A.tt.prototype={
E(){return"FlexFit."+this.b}}
A.dl.prototype={
i(a){return this.pF(0)+"; flex="+A.h(this.e)+"; fit="+A.h(this.f)}}
A.uc.prototype={
E(){return"MainAxisSize."+this.b}}
A.m0.prototype={
E(){return"MainAxisAlignment."+this.b}}
A.jH.prototype={
E(){return"CrossAxisAlignment."+this.b}}
A.oU.prototype={
ei(a){if(!(a.e instanceof A.dl))a.e=new A.dl(null,null,B.j)},
ez(a){if(this.L===B.aS)return this.I_(a)
return this.a0V(a)},
pW(a){switch(this.L.a){case 0:return a.b
case 1:return a.a}},
pX(a){switch(this.L.a){case 0:return a.a
case 1:return a.b}},
c5(a){var s
if(this.ao===B.ng)return B.Q
s=this.Dk(a,A.afB())
switch(this.L.a){case 0:return a.bv(new A.a_(s.a,s.b))
case 1:return a.bv(new A.a_(s.b,s.a))}},
Dk(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.L===B.aS?a2.b:a2.d,a0=a<1/0,a1=c.ar$
for(s=t.uc,r=a2.b,q=a2.d,p=b,o=0,n=0,m=0;a1!=null;){l=a1.e
l.toString
s.a(l)
k=l.e
if(k==null)k=0
if(k>0){o+=k
p=a1}else{if(c.ao===B.nf)switch(c.L.a){case 0:j=A.nA(q,b)
break
case 1:j=A.nA(b,r)
break
default:j=b}else switch(c.L.a){case 0:j=new A.aO(0,1/0,0,q)
break
case 1:j=new A.aO(0,r,0,1/0)
break
default:j=b}i=a3.$2(a1,j)
m+=c.pX(i)
n=Math.max(n,A.kW(c.pW(i)))}a1=l.ak$}h=Math.max(0,(a0?a:0)-m)
if(o>0){g=a0?h/o:0/0
a1=c.ar$
for(f=0;a1!=null;){l=a1.e
l.toString
k=s.a(l).e
if(k==null)k=0
if(k>0){if(a0)e=a1===p?h-f:g*k
else e=1/0
d=A.b5("minChildExtent")
l=a1.e
l.toString
l=s.a(l).f
switch((l==null?B.nt:l).a){case 0:if(d.b!==d)A.Y(A.a_d(d.a))
d.b=e
break
case 1:if(d.b!==d)A.Y(A.a_d(d.a))
d.b=0
break}if(c.ao===B.nf)switch(c.L.a){case 0:l=d.b
if(l===d)A.Y(A.fR(d.a))
j=new A.aO(l,e,q,q)
break
case 1:l=d.b
if(l===d)A.Y(A.fR(d.a))
j=new A.aO(r,r,l,e)
break
default:j=b}else switch(c.L.a){case 0:l=d.b
if(l===d)A.Y(A.fR(d.a))
j=new A.aO(l,e,0,q)
break
case 1:l=d.b
if(l===d)A.Y(A.fR(d.a))
j=new A.aO(0,r,l,e)
break
default:j=b}i=a3.$2(a1,j)
m+=c.pX(i)
f+=e
n=Math.max(n,A.kW(c.pW(i)))}l=a1.e
l.toString
a1=s.a(l).ak$}}return new A.ab0(a0&&c.I===B.B?a:m,n,m)},
bB(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.k.a(A.x.prototype.gZ.call(a)),a1=a.Dk(a0,A.afC()),a2=a1.a,a3=a1.b
if(a.ao===B.ng){s=a.ar$
for(r=t.uc,q=0,p=0,o=0;s!=null;){n=a.by
n.toString
m=s.u1(n,!0)
if(m!=null){q=Math.max(q,m)
p=Math.max(m,p)
o=Math.max(s.k3.b-m,o)
a3=Math.max(p+o,a3)}n=s.e
n.toString
s=r.a(n).ak$}}else q=0
switch(a.L.a){case 0:r=a.k3=a0.bv(new A.a_(a2,a3))
a2=r.a
a3=r.b
break
case 1:r=a.k3=a0.bv(new A.a_(a3,a2))
a2=r.b
a3=r.a
break}l=a2-a1.c
a.c6=Math.max(0,-l)
k=Math.max(0,l)
j=A.b5("leadingSpace")
i=A.b5("betweenSpace")
r=A.anT(a.L,a.ah,a.aW)
h=r===!1
switch(a.t.a){case 0:j.sbZ(0)
i.sbZ(0)
break
case 1:j.sbZ(k)
i.sbZ(0)
break
case 2:j.sbZ(k/2)
i.sbZ(0)
break
case 3:j.sbZ(0)
r=a.dg$
i.sbZ(r>1?k/(r-1):0)
break
case 4:r=a.dg$
i.sbZ(r>0?k/r:0)
j.sbZ(i.aC()/2)
break
case 5:r=a.dg$
i.sbZ(r>0?k/(r+1):0)
j.sbZ(i.aC())
break}g=h?a2-j.aC():j.aC()
s=a.ar$
for(r=t.uc,n=a3/2,f=i.a;s!=null;){e=s.e
e.toString
r.a(e)
d=a.ao
switch(d.a){case 0:case 1:if(A.anT(A.aAw(a.L),a.ah,a.aW)===(d===B.ba))c=0
else{d=s.k3
d.toString
c=a3-a.pW(d)}break
case 2:d=s.k3
d.toString
c=n-a.pW(d)/2
break
case 3:c=0
break
case 4:if(a.L===B.aS){d=a.by
d.toString
m=s.u1(d,!0)
c=m!=null?q-m:0}else c=0
break
default:c=null}if(h){d=s.k3
d.toString
g-=a.pX(d)}switch(a.L.a){case 0:e.a=new A.t(g,c)
break
case 1:e.a=new A.t(c,g)
break}if(h){d=i.b
if(d===i)A.Y(A.fR(f))
g-=d}else{d=s.k3
d.toString
d=a.pX(d)
b=i.b
if(b===i)A.Y(A.fR(f))
g+=d+b}s=e.ak$}},
cK(a,b){return this.xW(a,b)},
aE(a,b){var s,r,q,p=this
if(!(p.c6>1e-10)){p.nY(a,b)
return}s=p.k3
if(s.gP(s))return
s=p.c7
r=p.cx
r===$&&A.b()
q=p.k3
s.saV(0,a.ks(r,b,new A.B(0,0,0+q.a,0+q.b),p.ga0W(),p.ce,s.a))},
m(){this.c7.saV(0,null)
this.Pf()},
iP(a){var s
switch(this.ce.a){case 0:return null
case 1:case 2:case 3:if(this.c6>1e-10){s=this.k3
s=new A.B(0,0,0+s.a,0+s.b)}else s=null
return s}},
bV(){var s=this.Og()
return s}}
A.ab0.prototype={}
A.OV.prototype={
am(a){var s,r,q
this.em(a)
s=this.ar$
for(r=t.uc;s!=null;){s.am(a)
q=s.e
q.toString
s=r.a(q).ak$}},
af(a){var s,r,q
this.dD(0)
s=this.ar$
for(r=t.uc;s!=null;){s.af(0)
q=s.e
q.toString
s=r.a(q).ak$}}}
A.OW.prototype={}
A.yo.prototype={
m(){var s,r,q
for(s=this.IA$,r=s.length,q=0;q<r;++q)s[q].m()
this.hP()},
eM(){this.Of()}}
A.IH.prototype={
Vp(){var s=this
if(s.L!=null)return
s.L=s.ea
s.t=!1},
EI(){this.t=this.L=null
this.ap()},
sf7(a,b){var s=this,r=s.I
if(b==r)return
if(b!=null&&r!=null&&b.Js(r)){b.m()
return}r=s.I
if(r!=null)r.m()
s.I=b
s.ap()
if(s.ah==null||s.aW==null)s.a8()},
sbg(a,b){if(b==this.ah)return
this.ah=b
this.a8()},
sbI(a,b){if(b==this.aW)return
this.aW=b
this.a8()},
sLW(a,b){if(b===this.by)return
this.by=b
this.a8()},
Z4(){this.c6=null},
sae(a,b){return},
stu(a,b){return},
slX(a){if(a===this.bF)return
this.bF=a
this.ap()},
sa_N(a){return},
syz(a){if(a==this.e9)return
this.e9=a
this.ap()},
se4(a){if(a.k(0,this.ea))return
this.ea=a
this.EI()},
sa4T(a,b){if(b===this.du)return
this.du=b
this.ap()},
sa_p(a){return},
syW(a){if(a===this.eD)return
this.eD=a
this.ap()},
sa3J(a){return},
sbC(a){if(this.eE==a)return
this.eE=a
this.EI()},
syX(a){return},
G0(a){var s,r,q=this,p=q.ah
a=A.nA(q.aW,p).of(a)
p=q.I
if(p==null)return new A.a_(A.G(0,a.a,a.b),A.G(0,a.c,a.d))
p=p.gbg(p)
s=q.by
r=q.I
return a.nS(new A.a_(p/s,r.gbI(r)/q.by))},
j9(a){return!0},
c5(a){return this.G0(a)},
bB(){this.k3=this.G0(t.k.a(A.x.prototype.gZ.call(this)))},
am(a){this.em(a)},
af(a){this.dD(0)},
aE(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(d.I==null)return
d.Vp()
s=a.gbz(a)
r=d.k3
q=b.a
p=b.b
o=r.a
r=r.b
n=d.I
n.toString
m=d.ao
l=d.by
k=d.c6
j=d.e9
i=d.L
i.toString
h=d.j3
g=d.du
f=d.t
f.toString
e=d.eD
A.aoQ(i,s,h,k,m,d.bF,j,f,n,e,!1,1,new A.B(q,p,q+o,p+r),g,l)},
m(){var s=this.I
if(s!=null)s.m()
this.I=null
this.hP()}}
A.r4.prototype={
i(a){return"AnnotationEntry(annotation: "+this.a.i(0)+", localPosition: "+this.b.i(0)+")"}}
A.Ah.prototype={}
A.u0.prototype={
hQ(){},
qL(a){var s,r=this
r.e+=a
s=t.ow
if(s.a(A.J.prototype.gaI.call(r,r))!=null)s.a(A.J.prototype.gaI.call(r,r)).qL(a)},
n8(a){var s,r,q
for(s=this.d,s=A.aA(s.gaZ(s),!0,t.M),r=s.length,q=0;q<r;++q)s[q].$0()},
m(){var s=this.z
if(s!=null)s.m()
this.z=null},
dP(){if(this.y)return
this.y=!0},
si2(a){var s,r=this,q=r.z
if(q!=null)q.m()
r.z=a
q=t.ow
if(q.a(A.J.prototype.gaI.call(r,r))!=null){q.a(A.J.prototype.gaI.call(r,r)).toString
s=!0}else s=!1
if(s)q.a(A.J.prototype.gaI.call(r,r)).dP()},
tU(){this.y=this.y||!1},
iS(a){var s
this.dP()
s=a.e
if(s!==0)this.qL(-s)
this.us(a)},
ml(a){var s,r,q=this,p=t.ow.a(A.J.prototype.gaI.call(q,q))
if(p!=null){s=q.as
r=q.Q
if(s==null)p.CW=r
else s.Q=r
r=q.Q
if(r==null)p.cx=s
else r.as=s
q.Q=q.as=null
p.iS(q)
q.w.saV(0,null)}},
eF(a,b,c){return!1},
IE(a,b,c){var s=A.a([],c.h("w<r4<0>>"))
this.eF(new A.Ah(s,c.h("Ah<0>")),b,!0,c)
return s.length===0?null:B.b.gK(s).a},
QP(a){var s,r=this
if(!r.y&&r.z!=null){s=r.z
s.toString
a.ZN(s)
return}r.hd(a)
r.y=!1},
bV(){var s=this.N_()
return s+(this.b==null?" DETACHED":"")}}
A.F1.prototype={
saV(a,b){var s=this.a
if(b==null?s==null:b===s)return
if(s!=null)if(--s.x===0)s.m()
this.a=b
if(b!=null)++b.x},
i(a){var s=this.a
return"LayerHandle("+(s!=null?J.dT(s):"DISPOSED")+")"}}
A.I3.prototype={
sKd(a){var s
this.dP()
s=this.cx
if(s!=null)s.m()
this.cx=a},
m(){this.sKd(null)
this.BU()},
hd(a){var s=this.cx
s.toString
a.ZL(B.j,s,this.cy,this.db)},
eF(a,b,c){return!1}}
A.HX.prototype={
hd(a){a.ZK(this.cx,this.CW)
a.Mj(this.cy)
a.Mc(!1)
a.Mb(!1)},
eF(a,b,c){return!1}}
A.ey.prototype={
n8(a){var s
this.Ns(a)
if(!a)return
s=this.CW
for(;s!=null;){s.n8(!0)
s=s.Q}},
a_g(a){var s=this
s.tU()
s.hd(a)
if(s.e>0)s.n8(!0)
s.y=!1
return a.b8()},
m(){this.A7()
this.d.X(0)
this.BU()},
tU(){var s,r=this
r.Nt()
s=r.CW
for(;s!=null;){s.tU()
r.y=r.y||s.y
s=s.Q}},
eF(a,b,c,d){var s,r,q
for(s=this.cx,r=a.a;s!=null;s=s.as){if(s.eF(a,b,!0,d))return!0
q=r.length
if(q!==0)return!1}return!1},
am(a){var s
this.ur(a)
s=this.CW
for(;s!=null;){s.am(a)
s=s.Q}},
af(a){var s
this.dD(0)
s=this.CW
for(;s!=null;){s.af(0)
s=s.Q}this.n8(!1)},
hf(a,b){var s,r=this
r.dP()
s=b.e
if(s!==0)r.qL(s)
r.BB(b)
s=b.as=r.cx
if(s!=null)s.Q=b
r.cx=b
if(r.CW==null)r.CW=b
b.w.saV(0,b)},
A7(){var s,r,q,p=this,o=p.CW
for(s=t.ow;o!=null;o=r){r=o.Q
o.Q=o.as=null
p.dP()
q=o.e
if(q!==0){q=-q
p.e+=q
if(s.a(A.J.prototype.gaI.call(p,p))!=null)s.a(A.J.prototype.gaI.call(p,p)).qL(q)}p.us(o)
o.w.saV(0,null)}p.cx=p.CW=null},
hd(a){this.jU(a)},
jU(a){var s=this.CW
for(;s!=null;){s.QP(a)
s=s.Q}}}
A.hF.prototype={
sih(a,b){if(!b.k(0,this.p1))this.dP()
this.p1=b},
eF(a,b,c,d){return this.mO(a,b.aa(0,this.p1),!0,d)},
hd(a){var s=this,r=s.p1
s.si2(a.Kn(r.a,r.b,t.cV.a(s.z)))
s.jU(a)
a.hz()}}
A.nI.prototype={
eF(a,b,c,d){if(!this.p1.B(0,b))return!1
return this.mO(a,b,!0,d)},
hd(a){var s=this,r=s.p1
r.toString
s.si2(a.a4r(r,s.p2,t.CW.a(s.z)))
s.jU(a)
a.hz()}}
A.rv.prototype={
eF(a,b,c,d){if(!this.p1.B(0,b))return!1
return this.mO(a,b,!0,d)},
hd(a){var s=this,r=s.p1
r.toString
s.si2(a.a4p(r,s.p2,t.cB.a(s.z)))
s.jU(a)
a.hz()}}
A.ru.prototype={
eF(a,b,c,d){if(!this.p1.B(0,b))return!1
return this.mO(a,b,!0,d)},
hd(a){var s=this,r=s.p1
r.toString
s.si2(a.a4o(r,s.p2,t.xS.a(s.z)))
s.jU(a)
a.hz()}}
A.kx.prototype={
sbk(a,b){var s=this
if(b.k(0,s.ac))return
s.ac=b
s.be=!0
s.dP()},
hd(a){var s,r,q=this
q.aU=q.ac
if(!q.p1.k(0,B.j)){s=q.p1
s=A.uw(s.a,s.b,0)
r=q.aU
r.toString
s.cA(0,r)
q.aU=s}q.si2(a.a4t(q.aU.a,t.Al.a(q.z)))
q.jU(a)
a.hz()},
YX(a){var s,r=this
if(r.be){s=r.ac
s.toString
r.bj=A.H_(A.ahr(s))
r.be=!1}s=r.bj
if(s==null)return null
return A.cp(s,a)},
eF(a,b,c,d){var s=this.YX(b)
if(s==null)return!1
return this.NQ(a,s,!0,d)}}
A.Hw.prototype={
sHc(a,b){var s=this,r=s.ac
if(b!=r){if(b===255||r===255)s.si2(null)
s.ac=b
s.dP()}},
hd(a){var s,r,q,p=this
if(p.CW==null){p.si2(null)
return}s=p.ac
s.toString
r=p.p1
q=p.z
if(s<255)p.si2(a.a4s(s,r,t.i6.a(q)))
else p.si2(a.Kn(r.a,r.b,t.cV.a(q)))
p.jU(a)
a.hz()}}
A.r3.prototype={
eF(a,b,c,d){var s,r,q,p=this,o=p.mO(a,b,!0,d),n=a.a
if(n.length!==0&&!0)return o
s=p.p2
if(s!=null){r=p.p3
q=r.a
r=r.b
s=!new A.B(q,r,q+s.a,r+s.b).B(0,b)}else s=!1
if(s)return o
if(A.aF(p.$ti.c)===A.aF(d)){o=o||!1
n.push(new A.r4(d.a(p.p1),b.aa(0,p.p3),d.h("r4<0>")))}return o}}
A.Nb.prototype={}
A.NG.prototype={
a4U(a){var s=this.a
this.a=a
return s},
i(a){var s="<optimized out>#",r=A.bI(this.b),q=this.a.a
return s+A.bI(this)+"("+("latestEvent: "+(s+r))+", "+("annotations: [list of "+q+"]")+")"}}
A.NH.prototype={
ghZ(a){var s=this.c
return s.ghZ(s)}}
A.H9.prototype={
Em(a){var s,r,q,p,o,n,m=t.mC,l=A.iK(null,null,null,m,t.rA)
for(s=a.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q){p=s[q]
o=p.a
if(m.b(o)){n=p.b
n.toString
l.l(0,o,n)}}return l},
SL(a,b){var s=a.b,r=s.gbs(s)
s=a.b
if(!this.b.T(0,s.ghZ(s)))return A.iK(null,null,null,t.mC,t.rA)
return this.Em(b.$1(r))},
E9(a){var s,r
A.auD(a)
s=a.b
r=A.n(s).h("b7<1>")
this.a.a1R(a.ghZ(a),a.d,A.ox(new A.b7(s,r),new A.a0b(),r.h("q.E"),t.oR))},
a5C(a,b){var s,r,q,p,o
if(a.gc8(a)!==B.cD)return
if(t.zs.b(a))return
s=t.yg.b(a)?A.akE():b.$0()
r=a.ghZ(a)
q=this.b
p=q.j(0,r)
if(!A.auE(p,a))return
o=q.a
new A.a0e(this,p,a,r,s).$0()
if(o!==0!==(q.a!==0))this.az()},
a5w(a){new A.a0c(this,a).$0()}}
A.a0b.prototype={
$1(a){return a.gHY(a)},
$S:213}
A.a0e.prototype={
$0(){var s=this
new A.a0d(s.a,s.b,s.c,s.d,s.e).$0()},
$S:0}
A.a0d.prototype={
$0(){var s,r,q,p,o,n=this,m=null,l=n.b
if(l==null){s=n.c
if(t.yg.b(s))return
n.a.b.l(0,n.d,new A.NG(A.iK(m,m,m,t.mC,t.rA),s))}else{s=n.c
if(t.yg.b(s))n.a.b.v(0,s.ghZ(s))}r=n.a
q=r.b.j(0,n.d)
if(q==null){l.toString
q=l}p=q.b
q.b=s
o=t.yg.b(s)?A.iK(m,m,m,t.mC,t.rA):r.Em(n.e)
r.E9(new A.NH(q.a4U(o),o,p,s))},
$S:0}
A.a0c.prototype={
$0(){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.b,r=r.gaZ(r),r=new A.e_(J.av(r.a),r.b),q=this.b,p=A.n(r).z[1];r.q();){o=r.a
if(o==null)o=p.a(o)
n=o.b
m=s.SL(o,q)
l=o.a
o.a=m
s.E9(new A.NH(l,m,n,null))}},
$S:0}
A.a09.prototype={
$2(a,b){var s
if(!this.a.T(0,a))if(a.gAC()&&a.gzC(a)!=null){s=a.gzC(a)
s.toString
s.$1(this.b.aJ(this.c.j(0,a)))}},
$S:214}
A.a0a.prototype={
$1(a){return!this.a.T(0,a)},
$S:215}
A.Ri.prototype={}
A.cb.prototype={
af(a){},
i(a){return"<none>"}}
A.kc.prototype={
eL(a,b){var s,r=this
if(a.gdv()){r.mN()
if(!a.cy){s=a.ay
s===$&&A.b()
s=!s}else s=!0
if(s)A.all(a,null,!0)
else if(a.db)A.auY(a)
s=a.ch.a
s.toString
t.cY.a(s)
s.sih(0,b)
r.xs(s)}else{s=a.ay
s===$&&A.b()
if(s){a.ch.saV(0,null)
a.wp(r,b)}else a.wp(r,b)}},
xs(a){a.ml(0)
this.a.hf(0,a)},
gbz(a){var s,r,q=this
if(q.e==null){q.c=A.av0(q.b)
s=$.ao()
r=s.a0A()
q.d=r
q.e=s.a0t(r,null)
r=q.c
r.toString
q.a.hf(0,r)}s=q.e
s.toString
return s},
mN(){var s,r=this
if(r.e==null)return
s=r.c
s.toString
s.sKd(r.d.a1h())
r.e=r.d=r.c=null},
Bi(){var s=this.c
if(s!=null)if(!s.cy){s.cy=!0
s.dP()}},
oX(a,b,c,d){var s,r=this
if(a.CW!=null)a.A7()
r.mN()
r.xs(a)
s=r.a0v(a,d==null?r.b:d)
b.$2(s,c)
s.mN()},
Km(a,b,c){return this.oX(a,b,c,null)},
a0v(a,b){return new A.kc(a,b)},
ks(a,b,c,d,e,f){var s,r,q=this
if(e===B.l){d.$2(q,b)
return null}s=c.d4(b)
if(a){if(f==null){r=new A.nI(B.R,A.y(t.S,t.M),A.at())
r.hQ()}else r=f
if(!s.k(0,r.p1)){r.p1=s
r.dP()}if(e!==r.p2){r.p2=e
r.dP()}q.oX(r,d,b,s)
return r}else{q.a_G(s,e,s,new A.a10(q,d,b))
return null}},
a4q(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.l){e.$2(p,b)
return null}s=c.d4(b)
r=d.d4(b)
if(a){if(g==null){q=new A.rv(B.n1,A.y(t.S,t.M),A.at())
q.hQ()}else q=g
if(!r.k(0,q.p1)){q.p1=r
q.dP()}if(f!==q.p2){q.p2=f
q.dP()}p.oX(q,e,b,s)
return q}else{p.a_E(r,f,s,new A.a1_(p,e,b))
return null}},
Kl(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.l){e.$2(p,b)
return null}s=c.d4(b)
r=d.d4(b)
if(a){if(g==null){q=new A.ru(B.n1,A.y(t.S,t.M),A.at())
q.hQ()}else q=g
if(r!==q.p1){q.p1=r
q.dP()}if(f!==q.p2){q.p2=f
q.dP()}p.oX(q,e,b,s)
return q}else{p.a_D(r,f,s,new A.a0Z(p,e,b))
return null}},
oY(a,b,c,d,e){var s,r=this,q=b.a,p=b.b,o=A.uw(q,p,0)
o.cA(0,c)
o.aA(0,-q,-p)
if(a){s=e==null?A.amj(null):e
s.sbk(0,o)
r.oX(s,d,b,A.al6(o,r.b))
return s}else{q=r.gbz(r)
q.cr(0)
q.ad(0,o.a)
d.$2(r,b)
r.gbz(r).co(0)
return null}},
a4u(a,b,c,d){return this.oY(a,b,c,d,null)},
Ko(a,b,c,d){var s=d==null?A.ali():d
s.sHc(0,b)
s.sih(0,a)
this.Km(s,c,B.j)
return s},
i(a){return"PaintingContext#"+A.eK(this)+"(layer: "+this.a.i(0)+", canvas bounds: "+this.b.i(0)+")"}}
A.a10.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.a1_.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.a0Z.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.Uj.prototype={}
A.a4k.prototype={
m(){var s,r=this.b
if(r!=null)this.a.as.G(0,r)
r=this.a
if(--r.at===0){s=r.as
s.b.X(0)
s.c.X(0)
s.d.X(0)
s.dE()
r.as=null
r.d.$0()}}}
A.I4.prototype={
mn(){this.a.$0()},
sa57(a){var s=this.e
if(s===a)return
if(s!=null)s.af(0)
this.e=a
a.am(this)},
a1G(){var s,r,q,p,o,n,m,l,k,j,i,h=this
try{for(p=t.W,o=t.By;n=h.r,n.length!==0;){s=n
h.r=A.a([],o)
n=s
m=new A.a1c()
if(!!n.immutable$list)A.Y(A.N("sort"))
l=n.length-1
if(l-0<=32)A.JM(n,0,l,m)
else A.JL(n,0,l,m)
for(r=0;r<J.bB(s);++r){if(h.f){h.f=!1
n=h.r
if(n.length!==0){m=s
l=r
k=J.bB(s)
A.d8(l,k,J.bB(m),null,null)
j=A.aR(m)
i=new A.eO(m,l,k,j.h("eO<1>"))
i.pK(m,l,k,j.c)
B.b.J(n,i)
break}}q=J.aL(s,r)
if(q.z){n=q
n=p.a(A.J.prototype.gbp.call(n))===h}else n=!1
if(n)q.VK()}h.f=!1}}finally{h.f=!1}},
Ss(a){try{a.$0()}finally{this.f=!0}},
a1F(){var s,r,q,p,o=this.y
B.b.d5(o,new A.a1b())
for(s=o.length,r=t.W,q=0;q<o.length;o.length===s||(0,A.R)(o),++q){p=o[q]
if(p.CW&&r.a(A.J.prototype.gbp.call(p))===this)p.Gz()}B.b.X(o)},
a1H(){var s,r,q,p,o,n,m,l,k
try{s=this.z
this.z=A.a([],t.By)
for(q=s,J.agm(q,new A.a1d()),p=q.length,o=t.W,n=t.cY,m=0;m<q.length;q.length===p||(0,A.R)(q),++m){r=q[m]
if(r.cy||r.db){l=r
l=o.a(A.J.prototype.gbp.call(l))===this}else l=!1
if(l)if(r.ch.a.b!=null)if(r.cy)A.all(r,null,!1)
else{l=r
k=l.ch.a
k.toString
l.pe(n.a(k))
l.db=!1}else r.Yu()}}finally{}},
a1i(a){var s,r=this
if(++r.at===1){s=t.ju
r.as=new A.w7(r.c,A.b8(s),A.y(t.S,s),A.b8(s),$.bs())
r.b.$0()}if(a!=null)r.as.W(0,a)
return new A.a4k(r,a)},
Iu(){return this.a1i(null)},
a1I(){var s,r,q,p,o,n,m,l,k=this
if(k.as==null)return
try{q=k.ay
p=A.aA(q,!0,A.n(q).c)
B.b.d5(p,new A.a1e())
s=p
q.X(0)
for(q=s,o=q.length,n=t.W,m=0;m<q.length;q.length===o||(0,A.R)(q),++m){r=q[m]
if(r.dy){l=r
l=n.a(A.J.prototype.gbp.call(l))===k}else l=!1
if(l)r.Zh()}k.as.M9()}finally{}}}
A.a1c.prototype={
$2(a,b){return a.a-b.a},
$S:44}
A.a1b.prototype={
$2(a,b){return a.a-b.a},
$S:44}
A.a1d.prototype={
$2(a,b){return b.a-a.a},
$S:44}
A.a1e.prototype={
$2(a,b){return a.a-b.a},
$S:44}
A.x.prototype={
aG(){var s=this
s.cx=s.gdv()||s.gnB()
s.ay=s.gdv()},
eM(){var s=this
s.a8()
s.mc()
s.ap()
s.b0()
s.aP(new A.a2r())},
m(){this.ch.saV(0,null)},
ei(a){if(!(a.e instanceof A.cb))a.e=new A.cb()},
hV(a){var s=this
s.ei(a)
s.a8()
s.mc()
s.b0()
s.BB(a)},
iS(a){var s=this
a.D5()
a.e.af(0)
a.e=null
s.us(a)
s.a8()
s.mc()
s.b0()},
aP(a){},
qu(a,b,c){A.dZ(new A.bE(b,c,"rendering library",A.bk("during "+a+"()"),new A.a2n(this),!1))},
am(a){var s=this
s.ur(a)
if(s.z&&s.Q!=null){s.z=!1
s.a8()}if(s.CW){s.CW=!1
s.mc()}if(s.cy&&s.ch.a!=null){s.cy=!1
s.ap()}if(s.dy&&s.gwK().a){s.dy=!1
s.b0()}},
gZ(){var s=this.at
if(s==null)throw A.c(A.a6("A RenderObject does not have any constraints before it has been laid out."))
return s},
a8(){var s,r=this
if(r.z)return
s=r.Q
if(s==null){r.z=!0
if(r.c!=null)r.tg()
return}if(s!==r)r.tg()
else{r.z=!0
s=t.W
if(s.a(A.J.prototype.gbp.call(r))!=null){s.a(A.J.prototype.gbp.call(r)).r.push(r)
s.a(A.J.prototype.gbp.call(r)).mn()}}},
tg(){this.z=!0
var s=this.c
s.toString
t.d.a(s)
if(!this.as)s.a8()},
D5(){var s=this
if(s.Q!==s){s.Q=null
s.aP(A.aoN())}},
Xo(){var s,r,q=this,p=q.Q
if(p===q)return
s=t.B2.a(q.c)
r=s==null?null:s.Q
if(r!=p){q.Q=r
q.aP(A.aoO())}},
VK(){var s,r,q,p=this
try{p.bB()
p.b0()}catch(q){s=A.ah(q)
r=A.ay(q)
p.qu("performLayout",s,r)}p.z=!1
p.ap()},
cn(a,b){var s,r,q,p,o,n,m,l=this
if(!b||l.gjC()||a.gJz()||!(l.c instanceof A.x))o=l
else{n=l.c
n.toString
n=t.d.a(n).Q
n.toString
o=n}if(!l.z&&a.k(0,l.at)){if(o!==l.Q){l.Q=o
l.aP(A.aoO())}return}l.at=a
n=l.Q
if(n!=null&&o!==n)l.aP(A.aoN())
l.Q=o
if(l.gjC())try{l.oT()}catch(m){s=A.ah(m)
r=A.ay(m)
l.qu("performResize",s,r)}try{l.bB()
l.b0()}catch(m){q=A.ah(m)
p=A.ay(m)
l.qu("performLayout",q,p)}l.z=!1
l.ap()},
gjC(){return!1},
Jq(a,b){var s=this
s.as=!0
try{t.W.a(A.J.prototype.gbp.call(s)).Ss(new A.a2q(s,a,b))}finally{s.as=!1}},
gdv(){return!1},
gnB(){return!1},
pe(a){return a==null?A.auT(B.j):a},
mc(){var s,r,q,p=this
if(p.CW)return
s=p.CW=!0
r=p.c
if(r instanceof A.x){if(r.CW)return
q=p.ay
q===$&&A.b()
if((q?!p.gdv():s)&&!r.gdv()){r.mc()
return}}s=t.W
if(s.a(A.J.prototype.gbp.call(p))!=null)s.a(A.J.prototype.gbp.call(p)).y.push(p)},
Gz(){var s,r,q=this
if(!q.CW)return
s=q.cx
s===$&&A.b()
q.cx=!1
q.aP(new A.a2o(q))
if(q.gdv()||q.gnB())q.cx=!0
if(!q.gdv()){r=q.ay
r===$&&A.b()}else r=!1
if(r){q.db=q.cy=!1
s=t.W.a(A.J.prototype.gbp.call(q))
if(s!=null)B.b.v(s.z,q)
q.CW=!1
q.ap()}else if(s!==q.cx){q.CW=!1
q.ap()}else q.CW=!1},
ap(){var s,r=this
if(r.cy)return
r.cy=!0
if(r.gdv()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=t.W
if(s.a(A.J.prototype.gbp.call(r))!=null){s.a(A.J.prototype.gbp.call(r)).z.push(r)
s.a(A.J.prototype.gbp.call(r)).mn()}}else{s=r.c
if(s instanceof A.x)s.ap()
else{s=t.W
if(s.a(A.J.prototype.gbp.call(r))!=null)s.a(A.J.prototype.gbp.call(r)).mn()}}},
a3H(){var s,r=this
if(r.db||r.cy)return
r.db=!0
if(r.gdv()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=t.W
if(s.a(A.J.prototype.gbp.call(r))!=null){s.a(A.J.prototype.gbp.call(r)).z.push(r)
s.a(A.J.prototype.gbp.call(r)).mn()}}else r.ap()},
Yu(){var s,r=this.c
for(;r instanceof A.x;){if(r.gdv()){s=r.ch.a
if(s==null)break
if(s.b!=null)break
r.cy=!0}r=r.c}},
wp(a,b){var s,r,q,p=this
if(p.z)return
p.db=p.cy=!1
p.ay=p.gdv()
try{p.aE(a,b)}catch(q){s=A.ah(q)
r=A.ay(q)
p.qu("paint",s,r)}},
aE(a,b){},
dd(a,b){},
mi(a){return!0},
bt(a,b){var s,r,q,p,o,n,m,l,k=b==null
if(k){s=t.W.a(A.J.prototype.gbp.call(this)).e
if(s instanceof A.x)b=s}r=A.a([],t.By)
q=t.d
p=this
while(p!==b){r.push(p)
o=p.c
o.toString
q.a(o)
p=o}if(!k){b.toString
r.push(b)}n=new A.bd(new Float64Array(16))
n.d2()
for(m=r.length-1;m>0;m=l){l=m-1
r[m].dd(r[l],n)}return n},
iP(a){return null},
y0(a){return null},
eC(a){},
ue(a){var s
if(t.W.a(A.J.prototype.gbp.call(this)).as==null)return
s=this.fr
if(s!=null&&!s.as)s.M8(a)
else{s=this.c
if(s!=null)t.d.a(s).ue(a)}},
gwK(){var s,r=this
if(r.dx==null){s=A.p9()
r.dx=s
r.eC(s)}s=r.dx
s.toString
return s},
lx(){this.dy=!0
this.fr=null
this.aP(new A.a2p())},
b0(){var s,r,q,p,o,n,m=this
if(m.b==null||t.W.a(A.J.prototype.gbp.call(m)).as==null){m.dx=null
return}if(m.fr!=null){s=m.dx
s=s==null?null:s.a
r=s===!0}else r=!1
m.dx=null
q=m.gwK().a&&r
s=t.d
p=m
while(!0){if(!(!q&&p.c instanceof A.x))break
if(p!==m&&p.dy)break
p.dy=!0
o=p.c
o.toString
s.a(o)
if(o.dx==null){n=A.p9()
o.dx=n
o.eC(n)}q=o.dx.a
if(q&&o.fr==null)return
p=o}if(p!==m&&m.fr!=null&&m.dy)t.W.a(A.J.prototype.gbp.call(m)).ay.v(0,m)
if(!p.dy){p.dy=!0
s=t.W
if(s.a(A.J.prototype.gbp.call(m))!=null){s.a(A.J.prototype.gbp.call(m)).ay.C(0,p)
s.a(A.J.prototype.gbp.call(m)).mn()}}},
Zh(){var s,r,q,p,o,n,m=this,l=null
if(m.z)return
s=m.fr
if(s==null)s=l
else{s=t.aa.a(A.J.prototype.gaI.call(s,s))
if(s==null)s=l
else s=s.at||s.as}r=t.sP.a(m.E2(s===!0))
q=A.a([],t.T)
s=m.fr
p=s==null
o=p?l:s.x
n=p?l:s.y
s=p?l:s.z
r.nQ(s==null?0:s,n,o,q)
B.b.gbh(q)},
E2(a){var s,r,q,p,o,n,m,l,k=this,j={},i=k.gwK()
j.a=i.c
s=!i.d&&!i.a
r=t.yj
q=A.a([],r)
p=A.b8(t.sP)
k.fT(new A.a2m(j,k,a||i.p2,q,p,i,s))
for(o=A.jd(p,p.r),n=A.n(o).c;o.q();){m=o.d;(m==null?n.a(m):m).za()}k.dy=!1
if(!(k.c instanceof A.x)){o=j.a
l=new A.Pf(A.a([],r),A.a([k],t.By),o)}else{o=j.a
if(s)l=new A.a9c(A.a([],r),o)
else{l=new A.Q4(a,i,A.a([],r),A.a([k],t.By),o)
if(i.a)l.x=!0}}l.J(0,q)
return l},
fT(a){this.aP(a)},
nI(a,b,c){a.ju(0,t.d1.a(c),b)},
i7(a,b){},
bV(){var s=A.bI(this)
return"<optimized out>#"+s},
i(a){return this.bV()},
ej(a,b,c,d){var s=this.c
if(s instanceof A.x)s.ej(a,b==null?this:b,c,d)},
mI(){return this.ej(B.aJ,null,B.u,null)},
kK(a,b){return this.ej(B.aJ,a,B.u,b)},
$iam:1}
A.a2r.prototype={
$1(a){a.eM()},
$S:30}
A.a2n.prototype={
$0(){var s=A.a([],t.F),r=this.a
s.push(A.agH("The following RenderObject was being processed when the exception was fired",B.Fr,r))
s.push(A.agH("RenderObject",B.Fs,r))
return s},
$S:15}
A.a2q.prototype={
$0(){this.b.$1(this.c.a(this.a.gZ()))},
$S:0}
A.a2o.prototype={
$1(a){var s
a.Gz()
s=a.cx
s===$&&A.b()
if(s)this.a.cx=!0},
$S:30}
A.a2p.prototype={
$1(a){a.lx()},
$S:30}
A.a2m.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a.E2(f.c)
if(e.a){B.b.X(f.d)
f.e.X(0)
if(!f.f.a)f.a.a=!0}for(s=e.gJh(),r=s.length,q=f.d,p=f.e,o=f.f,n=f.b,m=f.r,l=0;l<s.length;s.length===r||(0,A.R)(s),++l){k=s[l]
q.push(k)
k.b.push(n)
k.ZS(o.ac)
if(o.b||!(n.c instanceof A.x)){k.za()
continue}if(k.gjZ()==null||m)continue
if(!o.Jt(k.gjZ()))p.C(0,k)
j=q.length-1
for(i=0;i<j;++i){h=q[i]
g=k.gjZ()
g.toString
if(!g.Jt(h.gjZ())){p.C(0,k)
p.C(0,h)}}}},
$S:30}
A.aE.prototype={
saR(a){var s=this,r=s.t$
if(r!=null)s.iS(r)
s.t$=a
if(a!=null)s.hV(a)},
jp(){var s=this.t$
if(s!=null)this.A4(s)},
aP(a){var s=this.t$
if(s!=null)a.$1(s)}}
A.dW.prototype={$icb:1}
A.as.prototype={
gr5(){return this.dg$},
Eu(a,b){var s,r,q,p=this,o=a.e
o.toString
s=A.n(p).h("as.1")
s.a(o);++p.dg$
if(b==null){o=o.ak$=p.ar$
if(o!=null){o=o.e
o.toString
s.a(o).bQ$=a}p.ar$=a
if(p.cW$==null)p.cW$=a}else{r=b.e
r.toString
s.a(r)
q=r.ak$
if(q==null){o.bQ$=b
p.cW$=r.ak$=a}else{o.ak$=q
o.bQ$=b
o=q.e
o.toString
s.a(o).bQ$=r.ak$=a}}},
yU(a,b,c){this.hV(b)
this.Eu(b,c)},
J(a,b){},
Fm(a){var s,r,q,p,o=this,n=a.e
n.toString
s=A.n(o).h("as.1")
s.a(n)
r=n.bQ$
q=n.ak$
if(r==null)o.ar$=q
else{p=r.e
p.toString
s.a(p).ak$=q}q=n.ak$
if(q==null)o.cW$=r
else{q=q.e
q.toString
s.a(q).bQ$=r}n.ak$=n.bQ$=null;--o.dg$},
v(a,b){this.Fm(b)
this.iS(b)},
tk(a,b){var s=this,r=a.e
r.toString
if(A.n(s).h("as.1").a(r).bQ$==b)return
s.Fm(a)
s.Eu(a,b)
s.a8()},
jp(){var s,r,q,p=this.ar$
for(s=A.n(this).h("as.1");p!=null;){r=p.a
q=this.a
if(r<=q){p.a=q+1
p.jp()}r=p.e
r.toString
p=s.a(r).ak$}},
aP(a){var s,r,q=this.ar$
for(s=A.n(this).h("as.1");q!=null;){a.$1(q)
r=q.e
r.toString
q=s.a(r).ak$}},
ga1B(a){return this.ar$},
a_w(a){var s=a.e
s.toString
return A.n(this).h("as.1").a(s).bQ$},
a_u(a){var s=a.e
s.toString
return A.n(this).h("as.1").a(s).ak$}}
A.Is.prototype={
uK(){this.a8()}}
A.acO.prototype={}
A.a9c.prototype={
J(a,b){B.b.J(this.b,b)},
gJh(){return this.b}}
A.n6.prototype={
gJh(){return A.a([this],t.yj)},
ZS(a){var s
if(a==null||a.a===0)return
s=this.c;(s==null?this.c=A.b8(t.xJ):s).J(0,a)}}
A.Pf.prototype={
nQ(a,b,c,d){var s,r,q,p,o,n=this.b,m=B.b.gK(n)
if(m.fr==null){s=B.b.gK(n).gmH()
r=B.b.gK(n)
r=t.W.a(A.J.prototype.gbp.call(r)).as
r.toString
q=$.agb()
q=new A.bT(null,0,s,B.Z,q.p2,q.e,q.p3,q.f,q.aU,q.p4,q.R8,q.RG,q.rx,q.ry,q.to,q.x2,q.xr,q.y1)
q.am(r)
m.fr=q}m=B.b.gK(n).fr
m.toString
m.saL(0,B.b.gK(n).gjA())
p=A.a([],t.T)
for(n=this.e,s=n.length,o=0;o<n.length;n.length===s||(0,A.R)(n),++o)n[o].nQ(0,b,c,p)
m.ju(0,p,null)
d.push(m)},
gjZ(){return null},
za(){},
J(a,b){B.b.J(this.e,b)}}
A.Q4.prototype={
nQ(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(!h.x){s=h.b
B.b.gK(s).fr=null
for(r=h.w,q=r.length,p=A.an(s),o=p.c,p=p.h("eO<1>"),n=0;n<r.length;r.length===q||(0,A.R)(r),++n){m=r[n]
l=new A.eO(s,1,g,p)
l.pK(s,1,g,o)
B.b.J(m.b,l)
m.nQ(a+h.f.x2,b,c,d)}return}s=h.b
if(s.length>1){k=new A.acP()
k.RQ(c,b,s)}else k=g
r=h.e
q=!r
if(q){if(k==null)p=g
else{p=k.d
p===$&&A.b()
if(!p.gP(p)){p=k.c
p===$&&A.b()
p=p.JD()}else p=!0}p=p===!0}else p=!1
if(p)return
p=B.b.gK(s)
if(p.fr==null)p.fr=A.a4m(g,B.b.gK(s).gmH())
j=B.b.gK(s).fr
j.sJw(r)
j.dx=h.c
j.z=a
if(a!==0){h.DH()
r=h.f
r.si1(0,r.x2+a)}if(k!=null){r=k.d
r===$&&A.b()
j.saL(0,r)
r=k.c
r===$&&A.b()
j.sbk(0,r)
j.x=k.b
j.y=k.a
if(q&&k.e){h.DH()
h.f.b3(B.lu,!0)}}i=A.a([],t.T)
for(r=h.w,q=r.length,n=0;n<r.length;r.length===q||(0,A.R)(r),++n){m=r[n]
p=j.x
m.nQ(0,j.y,p,i)}r=h.f
if(r.a)B.b.gK(s).nI(j,h.f,i)
else j.ju(0,i,r)
d.push(j)},
gjZ(){return this.x?null:this.f},
J(a,b){var s,r,q,p,o,n,m=this
for(s=b.length,r=m.w,q=0;q<b.length;b.length===s||(0,A.R)(b),++q){p=b[q]
r.push(p)
if(p.gjZ()==null)continue
if(!m.r){m.f=m.f.a09()
m.r=!0}o=m.f
n=p.gjZ()
n.toString
o.jT(n)}},
DH(){var s,r,q=this
if(!q.r){s=q.f
r=A.p9()
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
r.aU=s.aU
r.ac=s.ac
r.y2=s.y2
r.al=s.al
r.an=s.an
r.aj=s.aj
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
za(){this.x=!0}}
A.acP.prototype={
RQ(a,b,c){var s,r,q,p,o,n,m=this,l=new A.bd(new Float64Array(16))
l.d2()
m.c=l
m.b=a
m.a=b
for(s=c.length-1;s>0;){r=c[s];--s
q=c[s]
a=r.y0(q)
if(a!=null){m.b=a
m.a=A.amL(m.a,r.iP(q))}else m.b=A.amL(m.b,r.iP(q))
l=$.aqa()
l.d2()
A.axF(r,q,m.c,l)
m.b=A.amM(m.b,l)
m.a=A.amM(m.a,l)}p=B.b.gK(c)
l=m.b
l=l==null?p.gjA():l.f8(p.gjA())
m.d=l
o=m.a
if(o!=null){n=o.f8(l)
if(n.gP(n)){l=m.d
l=!l.gP(l)}else l=!1
m.e=l
if(!l)m.d=n}}}
A.OY.prototype={}
A.hZ.prototype={
i(a){var s=A.a(["offset="+this.a.i(0)],t.s)
s.push(this.pF(0))
return B.b.b9(s,"; ")}}
A.vx.prototype={
ei(a){if(!(a.e instanceof A.hZ))a.e=new A.hZ(null,null,B.j)},
stP(a,b){var s=this,r=s.L
switch(r.d.b1(0,b).a){case 0:case 1:return
case 2:r.stP(0,b)
s.I=s.t=null
s.vA(b)
s.ap()
s.b0()
break
case 3:r.stP(0,b)
s.I=s.t=s.bF=null
s.vA(b)
s.a8()
s.ww()
s.DA()
s.GP()
break}},
sp_(a){var s=this
if(a==s.ah)return
s.ww()
s.DA()
s.ah=a
s.GP()},
GP(){var s,r,q=this
if(q.ah==null)return
s=q.ao
if(s==null)s=q.ao=q.To()
r=q.ah
B.b.a_(s,r.gfs(r))},
ww(){var s,r=this.ah
if(r==null||this.ao==null)return
s=this.ao
s.toString
B.b.a_(s,r.gA6(r))},
To(){var s,r,q,p,o=this.L.d.L0(!1),n=A.a([],t.sb)
for(s=o.length,r=0;r<s;){q=B.c.jb(o,$.apr(),r)
if(r!==q){if(q===-1)q=s
p=new A.je(new A.eP(r,q),this,o,$.bs())
p.w=p.E1()
n.push(p)
r=q}++r}return n},
DA(){var s,r,q,p=this.ao
if(p==null)return
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.R)(p),++r){q=p[r]
q.y2$=$.bs()
q.y1$=0}this.ao=null},
a8(){var s=this.ao
if(s!=null)B.b.a_(s,new A.a2w())
this.O7()},
m(){var s=this
s.ww()
s.ao=null
s.L.m()
s.hP()},
vA(a){this.aW=A.a([],t.e9)
a.aP(new A.a2t(this))},
sAf(a,b){var s=this.L
if(s.f===b)return
s.sAf(0,b)
this.ap()},
sbC(a){var s=this.L
if(s.r===a)return
s.sbC(a)
this.a8()},
sMv(a){if(this.by===a)return
this.by=a
this.a8()},
sa4b(a,b){var s,r=this
if(r.c6===b)return
r.c6=b
s=b===B.bl?"\u2026":null
r.L.sa1c(s)
r.a8()},
sAg(a){var s=this.L
if(s.w===a)return
s.sAg(a)
this.bF=null
this.a8()},
szd(a){var s=this.L
if(s.z==a)return
s.szd(a)
this.bF=null
this.a8()},
sz8(a,b){var s=this.L
if(J.f(s.y,b))return
s.sz8(0,b)
this.bF=null
this.a8()},
sME(a){return},
sAh(a){var s=this.L
if(s.as===a)return
s.sAh(a)
this.bF=null
this.a8()},
sKV(a){return},
sM4(a){var s,r=this
if(J.f(r.ce,a))return
r.ce=a
s=r.ao
s=s==null?null:B.b.jV(s,new A.a2y())
if(s===!0)r.ap()},
q_(a){var s,r=this,q=r.AS(a,B.Z)
r.iz(t.k.a(A.x.prototype.gZ.call(r)))
s=r.L
s.Dg(a,B.Z)
s=s.db
s===$&&A.b()
s=s.b
return q.S(0,new A.t(0,s==null?0:s))},
ez(a){this.iz(t.k.a(A.x.prototype.gZ.call(this)))
return this.L.ez(B.H)},
j9(a){return!0},
cK(a,b){var s,r,q,p,o,n,m,l,k,j={},i=this.L,h=i.a.hF(b),g=i.d.LO(h)
if(g!=null&&!0){a.C(0,new A.hv(t.kZ.a(g),t.Cq))
s=!0}else s=!1
r=j.a=this.ar$
q=A.n(this).h("as.1")
p=t.lO
o=0
while(!0){if(!(r!=null&&o<i.ax.length))break
r=r.e
r.toString
p.a(r)
n=r.a
m=new Float64Array(16)
l=new A.bd(m)
l.d2()
m[14]=0
m[13]=n.b
m[12]=n.a
n=r.e
l.hH(0,n,n,n)
if(a.xl(new A.a2v(j,b,r),b,l))return!0
r=j.a.e
r.toString
k=q.a(r).ak$
j.a=k;++o
r=k}return s},
ED(a,b){var s=this.by||this.c6===B.bl?a:1/0
this.L.z5(s,b)},
uK(){var s=this,r=$.bK,q=r.CW$
switch(q.a){case 0:case 4:if(s.fG)return
s.fG=!0
r.pw(new A.a2z(s,q))
break
case 1:case 2:case 3:s.C7()
s.L.a8()
break}},
iz(a){this.L.uk(this.e9)
this.ED(a.b,a.a)},
EB(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.dg$
if(i===0)return A.a([],t.aE)
s=j.ar$
r=A.aZ(i,B.Ts,!1,t.cP)
q=new A.aO(0,a.b,0,1/0).cP(0,j.L.w)
for(i=A.n(j).h("as.1"),p=!b,o=0;s!=null;){if(p){s.cn(q,!0)
n=s.k3
n.toString
m=j.aW
m===$&&A.b()
switch(m[o].ge4()){case B.le:l=s.Lz(j.aW[o].gqY())
break
case B.lf:case B.lg:case B.fx:case B.li:case B.lh:l=null
break
default:l=null}k=n}else{k=s.fU(q)
l=null}n=j.aW
n===$&&A.b()
r[o]=new A.m8(k,n[o].ge4(),l,j.aW[o].gqY())
n=s.e
n.toString
s=i.a(n).ak$;++o}return r},
VJ(a){return this.EB(a,!1)},
Yi(){var s,r,q=this.ar$,p=t.lO,o=this.L,n=A.n(this).h("as.1"),m=0
while(!0){if(!(q!=null&&m<o.ax.length))break
s=q.e
s.toString
p.a(s)
r=o.ax[m]
s.a=new A.t(r.a,r.b)
s.e=o.ay[m]
q=n.a(s).ak$;++m}},
Rl(){var s,r,q=this.aW
q===$&&A.b()
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.R)(q),++r)switch(q[r].ge4()){case B.le:case B.lf:case B.lg:return!1
case B.lh:case B.li:case B.fx:continue}return!0},
c5(a){var s,r,q=this
if(!q.Rl())return B.Q
s=q.L
s.uk(q.EB(a,!0))
q.ED(a.b,a.a)
r=s.gbg(s)
s=s.a
return a.bv(new A.a_(r,Math.ceil(s.gbI(s))))},
bB(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=t.k.a(A.x.prototype.gZ.call(i))
i.e9=i.VJ(g)
i.iz(g)
i.Yi()
s=i.L
r=s.gbg(s)
q=s.a
q=Math.ceil(q.gbI(q))
p=s.a.ga12()
o=i.k3=g.bv(new A.a_(r,q))
n=o.b<q||p
m=o.a<r
if(m||n)switch(i.c6.a){case 3:i.c7=!1
i.bF=null
break
case 0:case 2:i.c7=!0
i.bF=null
break
case 1:i.c7=!0
r=A.a7G(h,s.d.a,"\u2026")
q=s.r
q.toString
o=s.w
l=A.a7E(h,s.y,h,h,r,B.bG,q,h,o,B.aP)
l.a3u()
if(m){switch(s.r.a){case 0:k=l.gbg(l)
j=0
break
case 1:j=i.k3.a
k=j-l.gbg(l)
break
default:k=h
j=k}i.bF=A.ah_(new A.t(k,0),new A.t(j,0),A.a([B.k,B.n3],t.bk),h,B.cO,h)}else{j=i.k3.b
s=l.a
i.bF=A.ah_(new A.t(0,j-Math.ceil(s.gbI(s))/2),new A.t(0,j),A.a([B.k,B.n3],t.bk),h,B.cO,h)}l.m()
break}else{i.c7=!1
i.bF=null}},
aE(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e={}
f.iz(t.k.a(A.x.prototype.gZ.call(f)))
if(f.c7){s=f.k3
r=b.a
q=b.b
p=new A.B(r,q,r+s.a,q+s.b)
if(f.bF!=null)a.gbz(a).B3(p,$.ao().bd())
else a.gbz(a).cr(0)
a.gbz(a).jX(p)}s=f.L
s.aE(a.gbz(a),b)
r=e.a=f.ar$
q=t.lO
o=b.a
n=b.b
m=A.n(f).h("as.1")
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
a.a4u(j,new A.t(o+r.a,n+r.b),A.uv(k,k,k),new A.a2x(e))
k=e.a.e
k.toString
i=m.a(k).ak$
e.a=i;++l
r=i}if(f.c7){if(f.bF!=null){a.gbz(a).aA(0,o,n)
h=$.ao().bd()
h.sa_a(B.CM)
h.sBm(f.bF)
s=a.gbz(a)
r=f.k3
s.cc(new A.B(0,0,0+r.a,0+r.b),h)}a.gbz(a).co(0)}s=f.ao
if(s!=null)for(r=s.length,g=0;g<s.length;s.length===r||(0,A.R)(s),++g)s[g].aE(a,b)
f.Oe(a,b)},
AS(a,b){var s
this.iz(t.k.a(A.x.prototype.gZ.call(this)))
s=this.L
s.Dg(a,b)
s=s.db
s===$&&A.b()
return s.a},
AK(a){this.iz(t.k.a(A.x.prototype.gZ.call(this)))
return this.L.a.u_(a.a,a.b,B.mi,B.hb)},
hF(a){this.iz(t.k.a(A.x.prototype.gZ.call(this)))
return this.L.a.hF(a)},
mx(a){this.iz(t.k.a(A.x.prototype.gZ.call(this)))
return this.L.a.mx(a)},
eC(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.h1(a)
s=d.L
r=s.d
r.toString
q=A.a([],t.lF)
r.a_Y(q)
d.ea=q
if(B.b.jV(q,new A.a2u()))a.a=a.b=!0
else{r=d.t
if(r==null){p=new A.bL("")
o=A.a([],t.ve)
for(r=d.ea,n=r.length,m=0,l=0,k="";l<r.length;r.length===n||(0,A.R)(r),++l){j=r[l]
i=j.b
if(i==null)i=j.a
for(k=j.f,h=k.length,g=0;g<k.length;k.length===h||(0,A.R)(k),++g){f=k[g]
e=f.a
o.push(f.HK(new A.eP(m+e.a,m+e.b)))}k=p.a+=i
m+=i.length}r=d.t=new A.cl(k.charCodeAt(0)==0?k:k,o)}a.p4=r
a.d=!0
s=s.r
s.toString
a.y1=s}},
nI(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=A.a([],t.T),b0=a7.L,b1=b0.r
b1.toString
s=A.iK(a8,a8,a8,t.qI,t.ju)
r=a7.I
if(r==null){r=a7.ea
r.toString
r=a7.I=A.aA5(r)}for(q=r.length,p=t.k,o=b1,n=0,m=0,l=0;l<r.length;r.length===q||(0,A.R)(r),++l,m=j){k=r[l]
b1=k.a
j=m+b1.length
i=m<j
h=i?m:j
i=i?j:m
g=p.a(A.x.prototype.gZ.call(a7))
b0.uk(a7.e9)
f=g.b
f=a7.by||a7.c6===B.bl?f:1/0
b0.z5(f,g.a)
e=b0.a.u_(h,i,B.mi,B.hb)
if(e.length===0)continue
i=B.b.gK(e)
d=new A.B(i.a,i.b,i.c,i.d)
c=B.b.gK(e).e
for(i=A.an(e),h=new A.eO(e,1,a8,i.h("eO<1>")),h.pK(e,1,a8,i.c),h=new A.dn(h,h.gp(h)),i=A.n(h).c;h.q();){g=h.d
if(g==null)g=i.a(g)
d=d.oi(new A.B(g.a,g.b,g.c,g.d))
c=g.e}i=d.a
h=Math.max(0,i)
g=d.b
f=Math.max(0,g)
i=Math.min(d.c-i,p.a(A.x.prototype.gZ.call(a7)).b)
g=Math.min(d.d-g,p.a(A.x.prototype.gZ.call(a7)).d)
b=Math.floor(h)-4
a=Math.floor(f)-4
i=Math.ceil(h+i)+4
g=Math.ceil(f+g)+4
a0=new A.B(b,a,i,g)
a1=A.p9()
a2=n+1
a1.id=new A.uZ(n,a8)
a1.d=!0
a1.y1=o
f=k.b
b1=f==null?b1:f
a1.p4=new A.cl(b1,k.f)
b1=b2.y
if(b1!=null){a3=b1.f8(a0)
if(a3.a>=a3.c||a3.b>=a3.d)b1=!(b>=i||a>=g)
else b1=!1
a1.b3(B.lu,b1)}a4=A.b5("newChild")
b1=a7.du
i=b1==null?a8:b1.a!==0
if(i===!0){b1.toString
i=new A.b7(b1,A.n(b1).h("b7<1>"))
a5=i.ga7(i)
if(!a5.q())A.Y(A.bO())
b1=b1.v(0,a5.gF(a5))
b1.toString
if(a4.b!==a4)A.Y(A.a_d(a4.a))
a4.b=b1}else{a6=new A.j5()
b1=A.a4m(a6,a7.S4(a6))
if(a4.b!==a4)A.Y(A.a_d(a4.a))
a4.b=b1}if(b1===a4)A.Y(A.fR(a4.a))
J.arz(b1,a1)
if(!b1.w.k(0,a0)){b1.w=a0
b1.hU()}b1=a4.b
if(b1===a4)A.Y(A.fR(a4.a))
i=b1.d
i.toString
s.l(0,i,b1)
b1=a4.b
if(b1===a4)A.Y(A.fR(a4.a))
a9.push(b1)
n=a2
o=c}a7.du=s
b2.ju(0,a9,b3)},
S4(a){return new A.a2s(this,a)},
lx(){this.uE()
this.du=null}}
A.a2w.prototype={
$1(a){return a.x=null},
$S:219}
A.a2t.prototype={
$1(a){return!0},
$S:45}
A.a2y.prototype={
$1(a){var s=a.w
s===$&&A.b()
return s.c!==B.cK},
$S:220}
A.a2v.prototype={
$2(a,b){return this.a.a.bR(a,b)},
$S:16}
A.a2z.prototype={
$1(a){var s=this.a
s.fG=!1
if(s.b!=null){s.C7()
s.L.a8()}},
$S:2}
A.a2x.prototype={
$2(a,b){var s=this.a.a
s.toString
a.eL(s,b)},
$S:10}
A.a2u.prototype={
$1(a){return!1},
$S:221}
A.a2s.prototype={
$0(){var s=this.a,r=s.du.j(0,this.b)
r.toString
s.kK(s,r.w)},
$S:0}
A.je.prototype={
gn(a){var s=this.w
s===$&&A.b()
return s},
WV(){var s=this,r=s.E1(),q=s.w
q===$&&A.b()
if(q.k(0,r))return
s.w=r
s.az()},
E1(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f==null||g.e==null)return B.U2
s=f.a
r=g.e.a
f=g.b
q=f.q_(new A.b_(s,B.C))
p=s===r?q:f.q_(new A.b_(r,B.C))
f=f.L
o=f.r
o.toString
n=s>r!==(B.V===o)
m=A.uw(g.gfn().a,g.gfn().b,0)
m.hj(m)
o=A.cp(m,q)
l=f.gtE()
k=n?B.BZ:B.BY
j=A.cp(m,p)
f=f.gtE()
i=n?B.BY:B.BZ
h=g.d.a===g.e.a?B.U4:B.lt
return new A.ko(new A.mu(o,l,k),new A.mu(j,f,i),h,!0)},
rt(a){var s=this,r=A.b5("result"),q=s.d,p=s.e,o=a.a
switch(o.a){case 0:case 1:r.sbZ(s.Zg(t.ib.a(a).b,o===B.dK))
break
case 2:s.e=s.d=null
r.sbZ(B.cJ)
break
case 3:o=s.a
s.d=new A.b_(o.a,B.C)
s.e=new A.b_(o.b,B.M)
r.sbZ(B.cJ)
break
case 4:r.sbZ(s.UZ(t.k2.a(a).gB_()))
break
case 5:t.uQ.a(a)
r.sbZ(s.Ui(a.gIO(a),a.gfJ(),a.ga5R()))
break
case 6:t.sQ.a(a)
r.sbZ(s.TV(a.gyk(a),a.gfJ(),a.gI6(a)))
break}if(!J.f(q,s.d)||!J.f(p,s.e)){s.b.ap()
s.WV()}return r.aC()},
Zg(a,b){var s,r,q,p,o,n,m=this
if(b)m.e=null
else m.d=null
s=m.b
r=s.bt(0,null)
r.hj(r)
q=A.cp(r,a)
p=m.gfn()
if(p.gP(p))return A.alS(m.gfn(),q)
p=m.gfn()
o=s.L.r
o.toString
n=m.pN(s.hF(A.aw6(p,q,o)))
if(b)m.e=n
else m.d=n
s=n.a
p=m.a
if(s===p.b)return B.b5
if(s===p.a)return B.b6
return A.alS(m.gfn(),q)},
pN(a){var s,r=a.a,q=this.a,p=q.b
if(r<=p)s=r===p&&a.b===B.C
else s=!0
if(s)return new A.b_(p,B.M)
q=q.a
if(r<q)return new A.b_(q,B.C)
return a},
UZ(a){var s,r,q,p,o=this,n=o.b,m=n.hF(n.kG(a))
if(o.Xf(m))return B.ar
s=n.mx(m)
r=A.b5("start")
q=A.b5("end")
n=m.a
p=s.b
if(n>=p)r.b=q.b=new A.b_(n,B.C)
else{r.b=new A.b_(s.a,B.C)
q.b=new A.b_(p,B.M)}o.d=r.aC()
o.e=q.aC()
return B.ar},
TV(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.bt(0,null)
if(j.hj(j)===0)switch(c){case B.fB:case B.dM:return B.b6
case B.fC:case B.dL:return B.b5}s=A.cp(j,new A.t(a,0)).a
switch(c){case B.fB:case B.fC:if(b){k=l.e
k.toString
r=k}else{k=l.d
k.toString
r=k}q=l.Vk(r,!1,s)
p=q.a
o=q.b
break
case B.dL:case B.dM:n=l.e
if(n==null){n=new A.b_(l.a.b,B.M)
l.e=n
r=n}else r=n
n=l.d
if(n==null){l.d=r
m=r}else m=n
p=k.hF(new A.t(s,k.q_(b?r:m).b-k.L.gtE()/2))
o=B.ar
break
default:p=null
o=null}if(b)l.e=p
else l.d=p
return o},
Ui(a,b,c){var s,r,q,p,o,n,m=this,l=m.e
if(l==null){l=m.a
l=a?new A.b_(l.a,B.C):new A.b_(l.b,B.M)
m.e=l
s=l}else s=l
l=m.d
if(l==null){m.d=s
r=s}else r=l
s=b?s:r
if(a&&s.a===m.a.b)return B.b5
l=!a
if(l&&s.a===m.a.a)return B.b6
switch(c){case B.VQ:l=m.a
q=m.pZ(new A.TZ(B.c.a1(m.c,l.a,l.b)),s,a)
p=B.ar
break
case B.VR:l=m.a
q=m.pZ(new A.Mn(new A.a8l(m),new A.a8j(B.c.a1(m.c,l.a,l.b))),s,a)
p=B.ar
break
case B.VS:q=m.pZ(new A.a_g(m),s,a)
p=B.ar
break
case B.VT:o=m.a
n=o.a
o=o.b
q=m.pZ(new A.UZ(B.c.a1(m.c,n,o)),s,a)
if(a&&q.a===o)p=B.b5
else p=l&&q.a===n?B.b6:B.ar
break
default:p=null
q=null}if(b)m.e=q
else m.d=q
return p},
pZ(a,b,c){if(c)return this.pN(a.fW(B.TA.fW(b)))
return this.pN(a.fV(B.Tz.fV(b)))},
Vk(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.L,i=j.fr
if(i==null)i=j.fr=j.a.a_X()
s=k.AS(a,B.Z)
j=i.length
r=j-1
for(q=s.b,p=0;p<i.length;i.length===j||(0,A.R)(i),++p){o=i[p]
if(o.gqY()>q){r=J.ar9(o)
break}}if(b&&r===i.length-1)n=new A.b_(l.a.b,B.M)
else if(!b&&r===0)n=new A.b_(l.a.a,B.C)
else n=l.pN(k.hF(new A.t(c,i[b?r+1:r-1].gqY())))
k=n.a
j=l.a
if(k===j.a)m=B.b6
else m=k===j.b?B.b5:B.ar
return new A.aP(n,m,t.nz)},
Xf(a){var s,r,q,p,o=this
if(o.d==null||o.e==null)return!1
s=A.b5("currentStart")
r=A.b5("currentEnd")
q=o.d
q.toString
p=o.e
p.toString
if(A.ai9(q,p)>0){s.b=q
r.b=p}else{s.b=p
r.b=q}return A.ai9(s.aC(),a)>=0&&A.ai9(r.aC(),a)<=0},
bt(a,b){var s=A.uw(this.gfn().a,this.gfn().b,0)
s.cA(0,this.b.bt(0,b))
return s},
hA(a,b){if(this.b.b==null)return},
gfn(){var s,r,q,p,o,n,m=this,l=m.x
if(l==null){l=m.b
s=m.a
r=s.a
q=l.AK(A.a7F(B.C,r,s.b,!1))
if(q.length!==0){l=B.b.gK(q)
p=new A.B(l.a,l.b,l.c,l.d)
for(o=1;o<q.length;++o){l=q[o]
p=p.oi(new A.B(l.a,l.b,l.c,l.d))}m.x=p
l=p}else{n=l.q_(new A.b_(r,B.C))
l=A.ahy(n,new A.t(n.a+0,n.b+-l.L.gtE()))
m.x=l}}return l},
gcE(a){var s=this.gfn()
return new A.a_(s.c-s.a,s.d-s.b)},
aE(a,b){var s,r,q,p,o,n=this,m=n.d
if(m==null||n.e==null)return
s=n.b
if(s.ce!=null){r=A.a7F(B.C,m.a,n.e.a,!1)
q=$.ao().bd()
q.sct(0,B.aO)
m=s.ce
m.toString
q.sae(0,m)
for(m=s.AK(r),s=m.length,p=0;p<m.length;m.length===s||(0,A.R)(m),++p){o=m[p]
a.gbz(a).cc(new A.B(o.a,o.b,o.c,o.d).d4(b),q)}}A.uw(n.gfn().a,n.gfn().b,0)},
AP(a){var s=this.b.L.a.LC(a),r=this.a,q=r.a
r=r.b
return A.a7F(B.C,B.f.iN(s.a,q,r),B.f.iN(s.b,q,r),!1)},
$iab:1}
A.yq.prototype={
am(a){var s,r,q
this.em(a)
s=this.ar$
for(r=t.lO;s!=null;){s.am(a)
q=s.e
q.toString
s=r.a(q).ak$}},
af(a){var s,r,q
this.dD(0)
s=this.ar$
for(r=t.lO;s!=null;){s.af(0)
q=s.e
q.toString
s=r.a(q).ak$}}}
A.OZ.prototype={}
A.P_.prototype={
am(a){this.Pg(a)
$.eJ.yr$.a.C(0,this.gCl())},
af(a){$.eJ.yr$.a.v(0,this.gCl())
this.Ph(0)}}
A.Ru.prototype={}
A.Rv.prototype={}
A.IO.prototype={
sa4a(a){if(a===this.L)return
this.L=a
this.ap()},
sa4y(a){if(a===this.t)return
this.t=a
this.ap()},
sa_s(a){return},
sa_r(a){return},
gjC(){return!0},
gnB(){return!0},
gVD(){var s=this.L,r=(s|1)>>>0>0||(s|2)>>>0>0?80:0
return(s|4)>>>0>0||(s|8)>>>0>0?r+80:r},
c5(a){return a.bv(new A.a_(1/0,this.gVD()))},
aE(a,b){var s=b.a,r=b.b,q=this.k3
q=new A.HX(new A.B(s,r,s+q.a,r+q.b),this.L,this.t,!1,!1,A.y(t.S,t.M),A.at())
q.hQ()
a.mN()
a.xs(q)}}
A.IT.prototype={}
A.eL.prototype={
ei(a){if(!(a.e instanceof A.cb))a.e=new A.cb()},
c5(a){var s=this.t$
if(s!=null)return s.fU(a)
return this.nR(a)},
bB(){var s=this,r=s.t$,q=t.k
if(r!=null){r.cn(q.a(A.x.prototype.gZ.call(s)),!0)
r=s.t$.k3
r.toString
s.k3=r}else s.k3=s.nR(q.a(A.x.prototype.gZ.call(s)))},
nR(a){return new A.a_(A.G(0,a.a,a.b),A.G(0,a.c,a.d))},
cK(a,b){var s=this.t$
s=s==null?null:s.bR(a,b)
return s===!0},
dd(a,b){},
aE(a,b){var s=this.t$
if(s!=null)a.eL(s,b)}}
A.o8.prototype={
E(){return"HitTestBehavior."+this.b}}
A.vy.prototype={
bR(a,b){var s,r=this
if(r.k3.B(0,b)){s=r.cK(a,b)||r.A===B.aC
if(s||r.A===B.d4)a.C(0,new A.nB(b,r))}else s=!1
return s},
j9(a){return this.A===B.aC}}
A.Iz.prototype={
sHa(a){if(this.A.k(0,a))return
this.A=a
this.a8()},
bB(){var s=this,r=t.k.a(A.x.prototype.gZ.call(s)),q=s.t$,p=s.A
if(q!=null){q.cn(p.of(r),!0)
q=s.t$.k3
q.toString
s.k3=q}else s.k3=p.of(r).bv(B.Q)},
c5(a){var s=this.t$,r=this.A
if(s!=null)return s.fU(r.of(a))
else return r.of(a).bv(B.Q)}}
A.IJ.prototype={
sa3O(a,b){if(this.A===b)return
this.A=b
this.a8()},
sa3L(a,b){if(this.R===b)return
this.R=b
this.a8()},
EE(a){var s,r,q=a.a,p=a.b
p=p<1/0?p:A.G(this.A,q,p)
s=a.c
r=a.d
return new A.aO(q,p,s,r<1/0?r:A.G(this.R,s,r))},
Fe(a,b){var s=this.t$
if(s!=null)return a.bv(b.$2(s,this.EE(a)))
return this.EE(a).bv(B.Q)},
c5(a){return this.Fe(a,A.afB())},
bB(){this.k3=this.Fe(t.k.a(A.x.prototype.gZ.call(this)),A.afC())}}
A.vt.prototype={
gdv(){if(this.t$!=null){var s=this.yv$
s.toString}else s=!1
return s},
pe(a){var s=a==null?A.ali():a
s.sHc(0,this.lP$)
return s},
stu(a,b){var s=this,r=s.lQ$
if(r===b)return
if(s.b!=null&&r!=null)r.G(0,s.gqI())
s.lQ$=b
if(s.b!=null)b.W(0,s.gqI())
s.x4()},
sHd(a){if(!1===this.yw$)return
this.yw$=!1
this.b0()},
x4(){var s,r=this,q=r.lP$,p=r.lQ$
p=r.lP$=B.d.b6(A.aiJ(p.gn(p),0,1)*255)
if(q!==p){s=r.yv$
p=p>0
r.yv$=p
if(r.t$!=null&&s!==p)r.mc()
r.a3H()
if(q===0||r.lP$===0)r.b0()}},
mi(a){var s=this.lQ$
return s.gn(s)>0},
fT(a){var s,r=this.t$
if(r!=null)if(this.lP$===0){s=this.yw$
s.toString}else s=!0
else s=!1
if(s){r.toString
a.$1(r)}}}
A.Iv.prototype={}
A.rL.prototype={
W(a,b){return null},
G(a,b){return null},
i(a){return"CustomClipper"}}
A.mx.prototype={
AL(a){return this.b.fg(new A.B(0,0,0+a.a,0+a.b),this.c)},
Bo(a){if(A.A(a)!==B.ZP)return!0
t.qm.a(a)
return!a.b.k(0,this.b)||a.c!=this.c}}
A.qr.prototype={
snP(a){var s,r=this,q=r.A
if(q==a)return
r.A=a
s=a==null
if(s||q==null||A.A(a)!==A.A(q)||a.Bo(q))r.qc()
if(r.b!=null){if(q!=null)q.G(0,r.gqb())
if(!s)a.W(0,r.gqb())}},
am(a){var s
this.mT(a)
s=this.A
if(s!=null)s.W(0,this.gqb())},
af(a){var s=this.A
if(s!=null)s.G(0,this.gqb())
this.kU(0)},
qc(){this.R=null
this.ap()
this.b0()},
sr7(a){if(a!==this.aw){this.aw=a
this.ap()}},
bB(){var s,r=this,q=r.k3
q=q!=null?q:null
r.uH()
s=r.k3
s.toString
if(!J.f(q,s))r.R=null},
iI(){var s,r,q=this
if(q.R==null){s=q.A
if(s==null)s=null
else{r=q.k3
r.toString
r=s.AL(r)
s=r}q.R=s==null?q.gpQ():s}},
iP(a){var s,r=this
switch(r.aw.a){case 0:return null
case 1:case 2:case 3:if(r.A==null)s=null
else{s=r.k3
s=new A.B(0,0,0+s.a,0+s.b)}if(s==null){s=r.k3
s=new A.B(0,0,0+s.a,0+s.b)}return s}},
m(){this.cf=null
this.hP()}}
A.Iy.prototype={
gpQ(){var s=this.k3
return new A.B(0,0,0+s.a,0+s.b)},
bR(a,b){var s=this
if(s.A!=null){s.iI()
if(!s.R.B(0,b))return!1}return s.iu(a,b)},
aE(a,b){var s,r,q=this,p=q.t$
if(p!=null){s=q.ch
if(q.aw!==B.l){q.iI()
p=q.cx
p===$&&A.b()
r=q.R
r.toString
s.saV(0,a.ks(p,b,r,A.eL.prototype.gmh.call(q),q.aw,t.iM.a(s.a)))}else{a.eL(p,b)
s.saV(0,null)}}else q.ch.saV(0,null)}}
A.Ix.prototype={
gpQ(){var s=$.ao().ck(),r=this.k3
s.nz(new A.B(0,0,0+r.a,0+r.b))
return s},
bR(a,b){var s=this
if(s.A!=null){s.iI()
if(!s.R.B(0,b))return!1}return s.iu(a,b)},
aE(a,b){var s,r,q,p,o=this,n=o.t$
if(n!=null){s=o.ch
if(o.aw!==B.l){o.iI()
n=o.cx
n===$&&A.b()
r=o.k3
q=r.a
r=r.b
p=o.R
p.toString
s.saV(0,a.Kl(n,b,new A.B(0,0,0+q,0+r),p,A.eL.prototype.gmh.call(o),o.aw,t.n0.a(s.a)))}else{a.eL(n,b)
s.saV(0,null)}}else o.ch.saV(0,null)}}
A.yr.prototype={
si1(a,b){if(this.aT===b)return
this.aT=b
this.ap()},
sfY(a,b){if(this.bx.k(0,b))return
this.bx=b
this.ap()},
sae(a,b){if(this.dJ.k(0,b))return
this.dJ=b
this.ap()},
eC(a){this.h1(a)
a.si1(0,this.aT)}}
A.IP.prototype={
sd3(a,b){if(this.yt===b)return
this.yt=b
this.qc()},
sa_c(a,b){if(J.f(this.yu,b))return
this.yu=b
this.qc()},
gpQ(){var s,r,q=this.k3,p=0+q.a
q=0+q.b
switch(this.yt.a){case 0:s=this.yu
if(s==null)s=B.aA
return s.dk(new A.B(0,0,p,q))
case 1:s=(p-0)/2
r=(q-0)/2
return new A.hO(0,0,p,q,s,r,s,r,s,r,s,r,s===r)}},
bR(a,b){var s=this
if(s.A!=null){s.iI()
if(!s.R.B(0,b))return!1}return s.iu(a,b)},
aE(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.t$==null){i.ch.saV(0,null)
return}i.iI()
s=i.R.d4(b)
r=$.ao()
q=r.ck()
q.ew(s)
p=a.gbz(a)
if(i.aT!==0&&!0){p.cc(new A.B(s.a,s.b,s.c,s.d).cZ(20),$.aju())
o=i.bx
n=i.aT
m=i.dJ
p.od(q,o,n,(m.gn(m)>>>24&255)!==255)}l=i.aw===B.hq
if(!l){r=r.bd()
r.sae(0,i.dJ)
p.cV(s,r)}r=i.cx
r===$&&A.b()
o=i.k3
n=o.a
o=o.b
m=i.R
m.toString
k=i.ch
j=t.bG.a(k.a)
k.saV(0,a.a4q(r,b,new A.B(0,0,0+n,0+o),m,new A.a2A(i,l),i.aw,j))}}
A.a2A.prototype={
$2(a,b){var s,r
if(this.b){s=a.gbz(a)
r=$.ao().bd()
r.sae(0,this.a.dJ)
s.oc(r)}this.a.h2(a,b)},
$S:10}
A.IQ.prototype={
gpQ(){var s=$.ao().ck(),r=this.k3
s.nz(new A.B(0,0,0+r.a,0+r.b))
return s},
bR(a,b){var s=this
if(s.A!=null){s.iI()
if(!s.R.B(0,b))return!1}return s.iu(a,b)},
aE(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(j.t$==null){j.ch.saV(0,null)
return}j.iI()
s=j.k3
r=b.a
q=b.b
p=s.a
s=s.b
o=j.R.d4(b)
n=a.gbz(a)
if(j.aT!==0&&!0){n.cc(new A.B(r,q,r+p,q+s).cZ(20),$.aju())
s=j.bx
r=j.aT
q=j.dJ
n.od(o,s,r,(q.gn(q)>>>24&255)!==255)}m=j.aw===B.hq
if(!m){s=$.ao().bd()
s.sae(0,j.dJ)
n.dr(o,s)}s=j.cx
s===$&&A.b()
r=j.k3
q=r.a
r=r.b
p=j.R
p.toString
l=j.ch
k=t.n0.a(l.a)
l.saV(0,a.Kl(s,b,new A.B(0,0,0+q,0+r),p,new A.a2B(j,m),j.aw,k))}}
A.a2B.prototype={
$2(a,b){var s,r
if(this.b){s=a.gbz(a)
r=$.ao().bd()
r.sae(0,this.a.dJ)
s.oc(r)}this.a.h2(a,b)},
$S:10}
A.rR.prototype={
E(){return"DecorationPosition."+this.b}}
A.ID.prototype={
sa0P(a){var s,r=this
if(a.k(0,r.R))return
s=r.A
if(s!=null)s.m()
r.A=null
r.R=a
r.ap()},
sbs(a,b){if(b===this.aw)return
this.aw=b
this.ap()},
sxJ(a){if(a.k(0,this.br))return
this.br=a
this.ap()},
af(a){var s=this,r=s.A
if(r!=null)r.m()
s.A=null
s.kU(0)
s.ap()},
j9(a){var s=this.R,r=this.k3
r.toString
return s.J5(r,a,this.br.d)},
aE(a,b){var s,r,q,p=this,o=p.A
if(o==null)o=p.A=p.R.rd(p.gdQ())
s=p.br
r=p.k3
r.toString
q=new A.ob(s.a,s.b,s.c,s.d,r,s.f)
if(p.aw===B.hz){o.oS(a.gbz(a),b,q)
if(p.R.gyY())a.Bi()}p.h2(a,b)
if(p.aw===B.Fn){o=p.A
o.toString
o.oS(a.gbz(a),b,q)
if(p.R.gyY())a.Bi()}}}
A.IZ.prototype={
sK9(a,b){return},
se4(a){var s=this
if(J.f(s.R,a))return
s.R=a
s.ap()
s.b0()},
sbC(a){var s=this
if(s.aw==a)return
s.aw=a
s.ap()
s.b0()},
gnB(){return!1},
sbk(a,b){var s,r=this
if(J.f(r.cf,b))return
s=new A.bd(new Float64Array(16))
s.bb(b)
r.cf=s
r.ap()
r.b0()},
slX(a){return},
gvv(){var s,r,q=this,p=q.R,o=p==null?null:p.V(q.aw)
if(o==null)return q.cf
s=new A.bd(new Float64Array(16))
s.d2()
p=q.k3
p.toString
r=o.ZZ(p)
s.aA(0,r.a,r.b)
p=q.cf
p.toString
s.cA(0,p)
s.aA(0,-r.a,-r.b)
return s},
bR(a,b){return this.cK(a,b)},
cK(a,b){var s=this.br?this.gvv():null
return a.xl(new A.a2K(this),b,s)},
aE(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
if(a.t$!=null){s=a.gvv()
s.toString
r=A.a_G(s)
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
p=A.eL.prototype.gmh.call(a)
o=a.ch
n=o.a
o.saV(0,a0.oY(q,a1,s,p,n instanceof A.kx?n:null))}else{a.h2(a0,a1.S(0,r))
a.ch.saV(0,null)}}},
dd(a,b){var s=this.gvv()
s.toString
b.cA(0,s)}}
A.a2K.prototype={
$2(a,b){return this.a.pI(a,b)},
$S:16}
A.vv.prototype={
XK(){if(this.A!=null)return
this.A=this.aw},
DO(a){switch(a.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
syz(a){var s=this,r=s.R
if(r===a)return
s.R=a
if(s.DO(r)||s.DO(a))s.a8()
else{s.bH=s.cf=null
s.ap()}},
se4(a){var s=this
if(s.aw.k(0,a))return
s.aw=a
s.A=s.bH=s.cf=null
s.ap()},
sbC(a){var s=this
if(s.br==a)return
s.br=a
s.A=s.bH=s.cf=null
s.ap()},
c5(a){var s,r=this.t$
if(r!=null){s=r.fU(B.bI)
switch(this.R.a){case 6:return a.bv(new A.aO(0,a.b,0,a.d).nS(s))
case 1:case 2:case 0:case 4:case 3:case 5:return a.nS(s)}}else return new A.a_(A.G(0,a.a,a.b),A.G(0,a.c,a.d))},
bB(){var s,r,q,p=this,o=p.t$
if(o!=null){o.cn(B.bI,!0)
switch(p.R.a){case 6:o=t.k
s=o.a(A.x.prototype.gZ.call(p))
r=p.t$.k3
r.toString
q=new A.aO(0,s.b,0,s.d).nS(r)
p.k3=o.a(A.x.prototype.gZ.call(p)).bv(q)
break
case 1:case 2:case 0:case 4:case 3:case 5:o=t.k.a(A.x.prototype.gZ.call(p))
s=p.t$.k3
s.toString
p.k3=o.nS(s)
break}p.bH=p.cf=null}else{o=t.k.a(A.x.prototype.gZ.call(p))
p.k3=new A.a_(A.G(0,o.a,o.b),A.G(0,o.c,o.d))}},
x5(){var s,r,q,p,o,n,m,l,k,j=this
if(j.bH!=null)return
if(j.t$==null){j.cf=!1
s=new A.bd(new Float64Array(16))
s.d2()
j.bH=s}else{j.XK()
s=j.t$.k3
s.toString
r=j.R
q=j.k3
q.toString
p=A.ao_(r,s,q)
q=p.b
r=p.a
o=s.a
s=s.b
n=j.A.yS(r,new A.B(0,0,0+o,0+s))
m=j.A
m.toString
l=j.k3
k=m.yS(q,new A.B(0,0,0+l.a,0+l.b))
m=n.a
j.cf=n.c-m<o||n.d-n.b<s
s=A.uw(k.a,k.b,0)
s.hH(0,q.a/r.a,q.b/r.b,1)
s.aA(0,-m,-n.b)
j.bH=s}},
EZ(a,b){var s,r,q,p,o=this,n=o.bH
n.toString
s=A.a_G(n)
if(s==null){n=o.cx
n===$&&A.b()
r=o.bH
r.toString
q=A.eL.prototype.gmh.call(o)
p=o.ch.a
return a.oY(n,b,r,q,p instanceof A.kx?p:null)}else o.h2(a,b.S(0,s))
return null},
aE(a,b){var s,r,q,p,o,n=this
if(n.t$!=null){s=n.k3
if(!s.gP(s)){s=n.t$.k3
s=s.gP(s)}else s=!0}else s=!0
if(s)return
n.x5()
s=n.cf
s.toString
if(s&&n.dL!==B.l){s=n.cx
s===$&&A.b()
r=n.k3
q=r.a
r=r.b
p=n.ch
o=p.a
o=o instanceof A.nI?o:null
p.saV(0,a.ks(s,b,new A.B(0,0,0+q,0+r),n.gWP(),n.dL,o))}else n.ch.saV(0,n.EZ(a,b))},
cK(a,b){var s=this,r=s.k3
if(!r.gP(r)){r=s.t$
if(r==null)r=null
else{r=r.k3
r=r.gP(r)}r=r===!0}else r=!0
if(r)return!1
s.x5()
return a.xl(new A.a2g(s),b,s.bH)},
mi(a){var s=this.k3
if(!s.gP(s)){s=a.k3
s=!s.gP(s)}else s=!1
return s},
dd(a,b){var s=this.k3
if(!s.gP(s)){s=a.k3
s=!s.gP(s)}else s=!1
if(!s)b.Bl()
else{this.x5()
s=this.bH
s.toString
b.cA(0,s)}}}
A.a2g.prototype={
$2(a,b){return this.a.pI(a,b)},
$S:16}
A.IG.prototype={
sa5t(a){var s=this
if(s.A.k(0,a))return
s.A=a
s.ap()
s.b0()},
bR(a,b){return this.cK(a,b)},
cK(a,b){var s,r,q=this
if(q.R){s=q.A
r=q.k3
r=new A.t(s.a*r.a,s.b*r.b)
s=r}else s=null
return a.nA(new A.a2h(q),s,b)},
aE(a,b){var s,r,q=this
if(q.t$!=null){s=q.A
r=q.k3
q.h2(a,new A.t(b.a+s.a*r.a,b.b+s.b*r.b))}},
dd(a,b){var s=this.A,r=this.k3
b.aA(0,s.a*r.a,s.b*r.b)}}
A.a2h.prototype={
$2(a,b){return this.a.pI(a,b)},
$S:16}
A.IR.prototype={
nR(a){return new A.a_(A.G(1/0,a.a,a.b),A.G(1/0,a.c,a.d))},
i7(a,b){var s,r=this,q=null
if(t.Y.b(a)){s=r.cI
return s==null?q:s.$1(a)}if(t.c.b(a))return q
if(t.Cs.b(a)){s=r.aq
return s==null?q:s.$1(a)}if(t.hV.b(a))return q
if(t.AJ.b(a)){s=r.aT
return s==null?q:s.$1(a)}if(t.EL.b(a)){s=r.bx
return s==null?q:s.$1(a)}if(t.r.b(a))return q
if(t.zv.b(a))return q
if(t.zs.b(a)){s=r.ak
return s==null?q:s.$1(a)}}}
A.IL.prototype={
bR(a,b){return this.Oi(a,b)&&!0},
i7(a,b){var s=this.aq
if(s!=null&&t.hV.b(a))return s.$1(a)},
gHY(a){return this.aT},
gAC(){return this.bx},
am(a){this.mT(a)
this.bx=!0},
af(a){this.bx=!1
this.kU(0)},
nR(a){return new A.a_(A.G(1/0,a.a,a.b),A.G(1/0,a.c,a.d))},
$iiO:1,
gzz(a){return this.bw},
gzC(a){return this.aX}}
A.IU.prototype={
gdv(){return!0}}
A.vw.prototype={
sJ9(a){var s,r=this
if(a===r.A)return
r.A=a
s=r.R
if(s==null||!s)r.b0()},
syQ(a){var s=this,r=s.R
if(a==r)return
if(r==null)r=s.A
s.R=a
if(r!==(a==null?s.A:a))s.b0()},
bR(a,b){return!this.A&&this.iu(a,b)},
fT(a){var s,r=this.t$
if(r!=null){s=this.R
s=!(s==null?this.A:s)}else s=!1
if(s){r.toString
a.$1(r)}}}
A.IM.prototype={
stn(a){var s=this
if(a===s.A)return
s.A=a
s.a8()
s.tg()},
ez(a){if(this.A)return null
return this.Cj(a)},
gjC(){return this.A},
c5(a){if(this.A)return new A.a_(A.G(0,a.a,a.b),A.G(0,a.c,a.d))
return this.Oh(a)},
oT(){this.O8()},
bB(){var s,r=this
if(r.A){s=r.t$
if(s!=null)s.ig(t.k.a(A.x.prototype.gZ.call(r)))}else r.uH()},
bR(a,b){return!this.A&&this.iu(a,b)},
mi(a){return!this.A},
aE(a,b){if(this.A)return
this.h2(a,b)},
fT(a){if(this.A)return
this.uF(a)}}
A.vs.prototype={
sH1(a){if(this.A===a)return
this.A=a
this.b0()},
syQ(a){return},
bR(a,b){return this.A?this.k3.B(0,b):this.iu(a,b)},
fT(a){var s,r,q=this.t$
if(q!=null){s=this.R
r=this.A
s=!r}else s=!1
if(s){q.toString
a.$1(q)}}}
A.iW.prototype={
sa5D(a){if(A.aj_(a,this.cI))return
this.cI=a
this.b0()},
sjk(a){var s,r=this
if(J.f(r.bw,a))return
s=r.bw
r.bw=a
if(a!=null!==(s!=null))r.b0()},
skp(a){var s,r=this
if(J.f(r.aq,a))return
s=r.aq
r.aq=a
if(a!=null!==(s!=null))r.b0()},
sa42(a){var s,r=this
if(J.f(r.aX,a))return
s=r.aX
r.aX=a
if(a!=null!==(s!=null))r.b0()},
sa48(a){var s,r=this
if(J.f(r.aT,a))return
s=r.aT
r.aT=a
if(a!=null!==(s!=null))r.b0()},
eC(a){var s,r=this
r.h1(a)
if(r.bw!=null){s=r.cI
s=s==null||s.B(0,B.dN)}else s=!1
if(s)a.sjk(r.bw)
if(r.aq!=null){s=r.cI
s=s==null||s.B(0,B.B9)}else s=!1
if(s)a.skp(r.aq)
if(r.aX!=null){s=r.cI
if(s==null||s.B(0,B.dR))a.sts(r.gX6())
s=r.cI
if(s==null||s.B(0,B.dQ))a.str(r.gX4())}if(r.aT!=null){s=r.cI
if(s==null||s.B(0,B.dO))a.stt(r.gX8())
s=r.cI
if(s==null||s.B(0,B.dP))a.stq(r.gX2())}},
X5(){var s,r,q=this.aX
if(q!=null){s=this.k3
r=s.a*-0.8
s=s.iM(B.j)
s=A.cp(this.bt(0,null),s)
q.$1(new A.ht(null,new A.t(r,0),r,s))}},
X7(){var s,r,q=this.aX
if(q!=null){s=this.k3
r=s.a*0.8
s=s.iM(B.j)
s=A.cp(this.bt(0,null),s)
q.$1(new A.ht(null,new A.t(r,0),r,s))}},
X9(){var s,r,q=this.aT
if(q!=null){s=this.k3
r=s.b*-0.8
s=s.iM(B.j)
s=A.cp(this.bt(0,null),s)
q.$1(new A.ht(null,new A.t(0,r),r,s))}},
X3(){var s,r,q=this.aT
if(q!=null){s=this.k3
r=s.b*0.8
s=s.iM(B.j)
s=A.cp(this.bt(0,null),s)
q.$1(new A.ht(null,new A.t(0,r),r,s))}}}
A.vz.prototype={
sKj(a){var s=this
if(s.A===a)return
s.A=a
s.Gv(a)
s.b0()},
sa0_(a){if(this.R===a)return
this.R=a
this.b0()},
sa1s(a){if(this.aw===a)return
this.aw=a
this.b0()},
sa1q(a){return},
Gv(a){var s=this,r=a.fy
r=a.fx
r=r==null?null:new A.cl(r,B.ad)
s.cf=r
r=a.id
r=a.go
r=r==null?null:new A.cl(r,B.ad)
s.bH=r
s.dL=null
s.fH=null
s.i6=null},
sbC(a){if(this.yx==a)return
this.yx=a
this.b0()},
fT(a){this.uF(a)},
eC(a){var s,r,q=this
q.h1(a)
a.a=q.R
a.b=q.aw
s=q.A.a
if(s!=null){a.b3(B.Bk,!0)
a.b3(B.Bc,s)}s=q.A.e
if(s!=null)a.b3(B.Bh,s)
s=q.A.f
if(s!=null)a.b3(B.Bl,s)
s=q.A.w
if(s!=null)a.b3(B.Bj,s)
s=q.A.as
if(s!=null)a.b3(B.Bf,s)
s=q.A.at
if(s!=null)a.b3(B.Bg,s)
s=q.A.db
if(s!=null)a.b3(B.Bd,s)
s=q.cf
if(s!=null){a.p4=s
a.d=!0}s=q.bH
if(s!=null){a.R8=s
a.d=!0}s=q.dL
if(s!=null){a.RG=s
a.d=!0}s=q.fH
if(s!=null){a.rx=s
a.d=!0}s=q.i6
if(s!=null){a.ry=s
a.d=!0}s=q.A
r=s.p2
if(r!=null){a.to=r
a.d=!0}s.p3!=null
s=q.A.cx
if(s!=null)a.b3(B.Be,s)
s=q.A.cy
if(s!=null)a.b3(B.Bi,s)
s=q.yx
if(s!=null){a.y1=s
a.d=!0}s=q.A
r=s.R8
if(r!=null){a.id=r
a.d=!0}s=s.RG
if(s!=null)a.H7(s)
if(q.A.rx!=null)a.sjk(q.gXa())
if(q.A.ry!=null)a.skp(q.gX0())
if(q.A.t!=null)a.stp(q.gWZ())},
Xb(){var s=this.A.rx
if(s!=null)s.$0()},
X1(){var s=this.A.ry
if(s!=null)s.$0()},
X_(){var s=this.A.t
if(s!=null)s.$0()}}
A.Iw.prototype={
sa_b(a){return},
eC(a){this.h1(a)
a.c=!0}}
A.IK.prototype={
eC(a){this.h1(a)
a.d=a.p2=a.a=!0}}
A.IF.prototype={
sa1r(a){if(a===this.A)return
this.A=a
this.b0()},
fT(a){if(this.A)return
this.uF(a)}}
A.II.prototype={
syR(a,b){if(b===this.A)return
this.A=b
this.b0()},
eC(a){this.h1(a)
a.k1=this.A
a.d=!0}}
A.vu.prototype={
sn(a,b){if(this.A.k(0,b))return
this.A=b
this.ap()},
sMt(a){return},
aE(a,b){var s,r=this,q=r.A,p=r.k3
p.toString
s=new A.r3(q,p,b,A.y(t.S,t.M),A.at(),r.$ti.h("r3<1>"))
s.hQ()
a.Km(s,A.eL.prototype.gmh.call(r),b)},
gnB(){return!0}}
A.OQ.prototype={
ez(a){var s=this.t$
if(s!=null)return s.jw(a)
return this.Cj(a)}}
A.OR.prototype={
am(a){var s=this
s.mT(a)
s.lQ$.W(0,s.gqI())
s.x4()},
af(a){this.lQ$.G(0,this.gqI())
this.kU(0)},
aE(a,b){if(this.lP$===0)return
this.h2(a,b)}}
A.ys.prototype={
am(a){var s
this.em(a)
s=this.t$
if(s!=null)s.am(a)},
af(a){var s
this.dD(0)
s=this.t$
if(s!=null)s.af(0)}}
A.yt.prototype={
ez(a){var s=this.t$
if(s!=null)return s.jw(a)
return this.C8(a)}}
A.iZ.prototype={
E(){return"SelectionResult."+this.b}}
A.d9.prototype={$iab:1}
A.Jp.prototype={
sp_(a){var s=this,r=s.lO$
if(a==r)return
if(a==null)s.G(0,s.gFN())
else if(r==null)s.W(0,s.gFN())
s.FM()
s.lO$=a
s.FO()},
FO(){var s=this
if(s.lO$==null){s.kd$=!1
return}if(s.kd$&&!s.gn(s).d){s.lO$.v(0,s)
s.kd$=!1}else if(!s.kd$&&s.gn(s).d){s.lO$.C(0,s)
s.kd$=!0}},
FM(){var s=this
if(s.kd$){s.lO$.v(0,s)
s.kd$=!1}}}
A.p7.prototype={
E(){return"SelectionEventType."+this.b}}
A.mG.prototype={
E(){return"TextGranularity."+this.b}}
A.a46.prototype={}
A.rs.prototype={}
A.ms.prototype={}
A.mt.prototype={
E(){return"SelectionExtendDirection."+this.b}}
A.p8.prototype={
E(){return"SelectionStatus."+this.b}}
A.ko.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.T(b)!==A.A(s))return!1
return b instanceof A.ko&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&b.c===s.c&&b.d===s.d},
gu(a){var s=this
return A.U(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.mu.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.T(b)!==A.A(s))return!1
return b instanceof A.mu&&b.a.k(0,s.a)&&b.b===s.b&&b.c===s.c},
gu(a){return A.U(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.wM.prototype={
E(){return"TextSelectionHandleType."+this.b}}
A.IV.prototype={
ez(a){var s,r,q=this.t$
if(q!=null){s=q.jw(a)
r=q.e
r.toString
t.Ch.a(r)
if(s!=null)s+=r.a.b}else s=this.C8(a)
return s},
aE(a,b){var s,r=this.t$
if(r!=null){s=r.e
s.toString
a.eL(r,t.Ch.a(s).a.S(0,b))}},
cK(a,b){var s,r=this.t$
if(r!=null){s=r.e
s.toString
t.Ch.a(s)
return a.nA(new A.a2C(b,s,r),s.a,b)}return!1}}
A.a2C.prototype={
$2(a,b){return this.c.bR(a,b)},
$S:16}
A.IN.prototype={
qy(){var s=this
if(s.A!=null)return
s.A=s.R.V(s.aw)},
sdi(a,b){var s=this
if(s.R.k(0,b))return
s.R=b
s.A=null
s.a8()},
sbC(a){var s=this
if(s.aw==a)return
s.aw=a
s.A=null
s.a8()},
c5(a){var s,r,q,p=this
p.qy()
if(p.t$==null){s=p.A
return a.bv(new A.a_(s.a+s.c,s.b+s.d))}s=p.A
s.toString
r=a.I0(s)
q=p.t$.fU(r)
s=p.A
return a.bv(new A.a_(s.a+q.a+s.c,s.b+q.b+s.d))},
bB(){var s,r,q,p,o,n,m=this,l=t.k.a(A.x.prototype.gZ.call(m))
m.qy()
if(m.t$==null){s=m.A
m.k3=l.bv(new A.a_(s.a+s.c,s.b+s.d))
return}s=m.A
s.toString
r=l.I0(s)
m.t$.cn(r,!0)
s=m.t$
q=s.e
q.toString
t.Ch.a(q)
p=m.A
o=p.a
n=p.b
q.a=new A.t(o,n)
s=s.k3
m.k3=l.bv(new A.a_(o+s.a+p.c,n+s.b+p.d))}}
A.Iu.prototype={
qy(){var s=this
if(s.A!=null)return
s.A=s.R.V(s.aw)},
se4(a){var s=this
if(s.R.k(0,a))return
s.R=a
s.A=null
s.a8()},
sbC(a){var s=this
if(s.aw==a)return
s.aw=a
s.A=null
s.a8()},
xm(){var s,r,q,p,o=this
o.qy()
s=o.t$
r=s.e
r.toString
t.Ch.a(r)
q=o.A
q.toString
p=o.k3
p.toString
s=s.k3
s.toString
r.a=q.lu(t.uu.a(p.aa(0,s)))}}
A.IS.prototype={
sa5G(a){if(this.aq==a)return
this.aq=a
this.a8()},
sa2B(a){if(this.aX==a)return
this.aX=a
this.a8()},
c5(a){var s,r,q=this,p=q.aq!=null||a.b===1/0,o=q.aX!=null||a.d===1/0,n=q.t$
if(n!=null){s=n.fU(new A.aO(0,a.b,0,a.d))
if(p){n=q.aq
if(n==null)n=1
n=s.a*n}else n=1/0
if(o){r=q.aX
if(r==null)r=1
r=s.b*r}else r=1/0
return a.bv(new A.a_(n,r))}n=p?0:1/0
return a.bv(new A.a_(n,o?0:1/0))},
bB(){var s,r,q=this,p=t.k.a(A.x.prototype.gZ.call(q)),o=q.aq!=null||p.b===1/0,n=q.aX!=null||p.d===1/0,m=q.t$
if(m!=null){m.cn(new A.aO(0,p.b,0,p.d),!0)
if(o){m=q.t$.k3.a
s=q.aq
m*=s==null?1:s}else m=1/0
if(n){s=q.t$.k3.b
r=q.aX
s*=r==null?1:r}else s=1/0
q.k3=p.bv(new A.a_(m,s))
q.xm()}else{m=o?0:1/0
q.k3=p.bv(new A.a_(m,n?0:1/0))}}}
A.a4E.prototype={
u5(a){return new A.a_(A.G(1/0,a.a,a.b),A.G(1/0,a.c,a.d))}}
A.IC.prototype={
sxZ(a){var s=this,r=s.A
if(r===a)return
if(A.A(a)!==A.A(r)||a.mG(r))s.a8()
s.A=a
s.b!=null},
am(a){this.Pi(a)},
af(a){this.Pj(0)},
c5(a){return a.bv(this.A.u5(a))},
bB(){var s,r,q,p,o,n,m=this,l=t.k,k=l.a(A.x.prototype.gZ.call(m))
m.k3=k.bv(m.A.u5(k))
if(m.t$!=null){s=m.A.AM(l.a(A.x.prototype.gZ.call(m)))
l=m.t$
l.toString
k=s.a
r=s.b
q=k>=r
l.cn(s,!(q&&s.c>=s.d))
l=m.t$
p=l.e
p.toString
t.Ch.a(p)
o=m.A
n=m.k3
n.toString
if(q&&s.c>=s.d)l=new A.a_(A.G(0,k,r),A.G(0,s.c,s.d))
else{l=l.k3
l.toString}p.a=o.AW(n,l)}}}
A.yu.prototype={
am(a){var s
this.em(a)
s=this.t$
if(s!=null)s.am(a)},
af(a){var s
this.dD(0)
s=this.t$
if(s!=null)s.af(0)}}
A.tE.prototype={
E(){return"GrowthDirection."+this.b}}
A.kr.prototype={
gJz(){return!1},
a_3(a,b){var s=this.w
switch(A.bc(this.a).a){case 0:return new A.aO(b,a,s,s)
case 1:return new A.aO(s,s,b,a)}},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.kr))return!1
return b.a===s.a&&b.b===s.b&&b.d===s.d&&b.f===s.f&&b.r===s.r&&b.w===s.w&&b.x===s.x&&b.y===s.y&&b.Q===s.Q&&b.z===s.z},
gu(a){var s=this
return A.U(s.a,s.b,s.d,s.f,s.r,s.w,s.x,s.y,s.Q,s.z,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r=A.a([s.a.i(0),s.b.i(0),s.c.i(0),"scrollOffset: "+B.d.N(s.d,1),"remainingPaintExtent: "+B.d.N(s.r,1)],t.s),q=s.f
if(q!==0)r.push("overlap: "+B.d.N(q,1))
r.push("crossAxisExtent: "+B.d.N(s.w,1))
r.push("crossAxisDirection: "+s.x.i(0))
r.push("viewportMainAxisExtent: "+B.d.N(s.y,1))
r.push("remainingCacheExtent: "+B.d.N(s.Q,1))
r.push("cacheOrigin: "+B.d.N(s.z,1))
return"SliverConstraints("+B.b.b9(r,", ")+")"}}
A.a6m.prototype={
bV(){return"SliverGeometry"}}
A.pd.prototype={}
A.JG.prototype={
i(a){return A.A(this.a).i(0)+"@(mainAxis: "+A.h(this.c)+", crossAxis: "+A.h(this.d)+")"}}
A.wk.prototype={
i(a){var s=this.a
return"layoutOffset="+(s==null?"None":B.d.N(s,1))}}
A.ks.prototype={
i(a){return"paintOffset="+A.h(this.a)}}
A.j1.prototype={}
A.cf.prototype={
gZ(){return t.p.a(A.x.prototype.gZ.call(this))},
gjA(){return this.ghx()},
ghx(){var s=this,r=t.p
switch(A.bc(r.a(A.x.prototype.gZ.call(s)).a).a){case 0:return new A.B(0,0,0+s.id.c,0+r.a(A.x.prototype.gZ.call(s)).w)
case 1:return new A.B(0,0,0+r.a(A.x.prototype.gZ.call(s)).w,0+s.id.c)}},
oT(){},
J4(a,b,c){var s=this
if(c>=0&&c<s.id.r&&b>=0&&b<t.p.a(A.x.prototype.gZ.call(s)).w)if(s.yP(a,b,c)||!1){a.C(0,new A.JG(c,b,s))
return!0}return!1},
yP(a,b,c){return!1},
hh(a,b,c){var s=a.d,r=a.r,q=s+r
return A.G(A.G(c,s,q)-A.G(b,s,q),0,r)},
nK(a,b,c){var s=a.d,r=s+a.z,q=a.Q,p=s+q
return A.G(A.G(c,r,p)-A.G(b,r,p),0,q)},
xH(a){return 0},
dd(a,b){},
i7(a,b){}}
A.a2D.prototype={
E_(a){var s
switch(a.a.a){case 0:case 3:s=!1
break
case 2:case 1:s=!0
break
default:s=null}switch(a.b.a){case 0:break
case 1:s=!s
break}return s},
a2J(a,b,c,d){var s,r,q,p,o=this,n={},m=t.p,l=o.E_(m.a(A.x.prototype.gZ.call(o))),k=b.e
k.toString
k=t.D.a(k).a
k.toString
s=k-m.a(A.x.prototype.gZ.call(o)).d
r=d-s
q=c-0
p=n.a=null
switch(A.bc(m.a(A.x.prototype.gZ.call(o)).a).a){case 0:if(!l){m=b.k3.a
r=m-r
s=o.id.c-m-s}p=new A.t(s,0)
n.a=new A.t(r,q)
break
case 1:if(!l){m=b.k3.b
r=m-r
s=o.id.c-m-s}p=new A.t(0,s)
n.a=new A.t(q,r)
break}return a.ZU(new A.a2E(n,b),p)}}
A.a2E.prototype={
$1(a){return this.b.bR(a,this.a.a)},
$S:98}
A.PK.prototype={}
A.PN.prototype={
af(a){this.uC(0)}}
A.IW.prototype={
spj(a){if(this.rF===a)return
this.rF=a
this.a8()}}
A.IX.prototype={
LE(a,b){var s,r
if(b>0){s=a/b
r=B.d.b6(s)
if(Math.abs(s*b-r*b)<1e-10)return r
return B.d.cz(s)}return 0},
AQ(a,b){var s,r
if(b>0){s=a/b-1
r=B.d.b6(s)
if(Math.abs(s*b-r*b)<1e-10)return Math.max(0,r)
return Math.max(0,B.d.de(s))}return 0},
Rh(a){var s,r=this.ar$,q=A.n(this).h("as.1"),p=t.D,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s<a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).ak$}return o},
Ri(a){var s,r=this.cW$,q=A.n(this).h("as.1"),p=t.D,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s>a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).bQ$}return o},
bB(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=t.p,a7=a6.a(A.x.prototype.gZ.call(a4)),a8=a4.bj
a8.R8=!1
s=a6.a(A.x.prototype.gZ.call(a4)).y*a4.rF
a6=a7.d
r=a6+a7.z
q=r+a7.Q
p=a7.a_3(s,s)
o=a4.LE(r,s)
n=isFinite(q)?a4.AQ(q,s):a5
if(a4.ar$!=null){m=a4.Rh(o)
a4.HA(m,n!=null?a4.Ri(n):0)}else a4.HA(0,0)
if(a4.ar$==null)if(!a4.ZH(o,s*o)){l=o<=0?0:a8.gr5()*s
a4.id=A.wj(a5,!1,a5,a5,l,0,0,l,a5)
a8.I4()
return}k=a4.ar$
k.toString
k=k.e
k.toString
j=t.D
k=j.a(k).b
k.toString
i=k-1
h=a5
for(;i>=o;--i){g=a4.a2X(p)
if(g==null){a4.id=A.wj(a5,!1,a5,a5,0,0,0,0,i*s)
return}k=g.e
k.toString
j.a(k).a=s*i
if(h==null)h=g}if(h==null){a4.ar$.ig(p)
h=a4.ar$
k=h.e
k.toString
j.a(k).a=s*o}k=h.e
k.toString
k=j.a(k).b
k.toString
i=k+1
k=A.n(a4).h("as.1")
f=n!=null
while(!0){if(!(!f||i<=n)){e=1/0
break}d=h.e
d.toString
g=k.a(d).ak$
if(g!=null){d=g.e
d.toString
d=j.a(d).b
d.toString
d=d!==i}else d=!0
if(d){g=a4.a2W(p,h)
if(g==null){e=i*s
break}}else g.ig(p)
d=g.e
d.toString
j.a(d)
c=d.b
c.toString
d.a=s*c;++i
h=g}k=a4.cW$
k.toString
k=k.e
k.toString
k=j.a(k).b
k.toString
b=s*o
a=s*(k+1)
e=Math.min(e,a8.a1n(a7,o,k,b,a))
a0=a4.hh(a7,b,a)
a1=a4.nK(a7,b,a)
a2=a6+a7.r
a3=isFinite(a2)?a4.AQ(a2,s):a5
a4.id=A.wj(a1,a3!=null&&k>=a3||a6>0,a5,a5,e,a0,0,e,a5)
if(e===a)a8.R8=!0
a8.I4()}}
A.hA.prototype={$icb:1}
A.a2I.prototype={
ei(a){}}
A.h1.prototype={
i(a){var s=this.b,r=this.on$?"keepAlive; ":""
return"index="+A.h(s)+"; "+r+this.OR(0)}}
A.mm.prototype={
ei(a){if(!(a.e instanceof A.h1))a.e=new A.h1(!1,null,null)},
hV(a){var s
this.C9(a)
s=a.e
s.toString
t.D.a(s)
if(!s.c){t.x.a(a)
s.b=this.bj.p4}},
yU(a,b,c){this.uv(0,b,c)},
tk(a,b){var s,r,q,p=this,o=a.e
o.toString
s=t.D
s.a(o)
if(!o.c){p.MT(a,b)
o=a.e
o.toString
s.a(o).b=p.bj.p4
p.a8()}else{r=p.be
if(r.j(0,o.b)===a)r.v(0,o.b)
q=a.e
q.toString
s.a(q).b=p.bj.p4
o=o.b
o.toString
r.l(0,o,a)}},
v(a,b){var s=b.e
s.toString
t.D.a(s)
if(!s.c){this.MV(0,b)
return}this.be.v(0,s.b)
this.iS(b)},
vn(a,b){this.Jq(new A.a2F(this,a,b),t.p)},
Du(a){var s,r=this,q=a.e
q.toString
t.D.a(q)
if(q.on$){r.v(0,a)
s=q.b
s.toString
r.be.l(0,s,a)
a.e=q
r.C9(a)
q.c=!0}else r.bj.Ky(a)},
am(a){var s,r,q
this.Pk(a)
for(s=this.be,s=s.gaZ(s),s=new A.e_(J.av(s.a),s.b),r=A.n(s).z[1];s.q();){q=s.a;(q==null?r.a(q):q).am(a)}},
af(a){var s,r,q
this.Pl(0)
for(s=this.be,s=s.gaZ(s),s=new A.e_(J.av(s.a),s.b),r=A.n(s).z[1];s.q();){q=s.a;(q==null?r.a(q):q).af(0)}},
jp(){this.MU()
var s=this.be
s.gaZ(s).a_(0,this.gKv())},
aP(a){var s
this.BI(a)
s=this.be
s.gaZ(s).a_(0,a)},
fT(a){this.BI(a)},
ZH(a,b){var s
this.vn(a,null)
s=this.ar$
if(s!=null){s=s.e
s.toString
t.D.a(s).a=b
return!0}this.bj.R8=!0
return!1},
a2X(a){var s,r,q,p=this,o=p.ar$
o.toString
o=o.e
o.toString
s=t.D
o=s.a(o).b
o.toString
r=o-1
p.vn(r,null)
o=p.ar$
o.toString
q=o.e
q.toString
q=s.a(q).b
q.toString
if(q===r){o.cn(a,!1)
return p.ar$}p.bj.R8=!0
return null},
a2W(a,b){var s,r,q,p=b.e
p.toString
s=t.D
p=s.a(p).b
p.toString
r=p+1
this.vn(r,b)
p=b.e
p.toString
q=A.n(this).h("as.1").a(p).ak$
if(q!=null){p=q.e
p.toString
p=s.a(p).b
p.toString
p=p===r}else p=!1
if(p){q.cn(a,!1)
return q}this.bj.R8=!0
return null},
HA(a,b){var s={}
s.a=a
s.b=b
this.Jq(new A.a2H(s,this),t.p)},
Ka(a){switch(A.bc(t.p.a(A.x.prototype.gZ.call(this)).a).a){case 0:return a.k3.a
case 1:return a.k3.b}},
yP(a,b,c){var s,r,q=this.cW$,p=A.ajZ(a)
for(s=A.n(this).h("as.1");q!=null;){if(this.a2J(p,q,b,c))return!0
r=q.e
r.toString
q=s.a(r).bQ$}return!1},
xH(a){var s=a.e
s.toString
return t.D.a(s).a},
mi(a){var s=t.ub.a(a.e)
return(s==null?null:s.b)!=null&&!this.be.T(0,s.b)},
dd(a,b){var s,r,q,p,o=this
if(!o.mi(a))b.Bl()
else{s=t.p
r=o.E_(s.a(A.x.prototype.gZ.call(o)))
q=a.e
q.toString
q=t.D.a(q).a
q.toString
p=q-s.a(A.x.prototype.gZ.call(o)).d
switch(A.bc(s.a(A.x.prototype.gZ.call(o)).a).a){case 0:b.aA(0,!r?o.id.c-a.k3.a-p:p,0)
break
case 1:b.aA(0,0,!r?o.id.c-a.k3.b-p:p)
break}}},
aE(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null
if(d.ar$==null)return
s=t.p
switch(A.js(s.a(A.x.prototype.gZ.call(d)).a,s.a(A.x.prototype.gZ.call(d)).b)){case B.y:r=b.S(0,new A.t(0,d.id.c))
q=B.zr
p=B.dB
o=!0
break
case B.au:r=b
q=B.dB
p=B.fs
o=!1
break
case B.x:r=b
q=B.fs
p=B.dB
o=!1
break
case B.ae:r=b.S(0,new A.t(d.id.c,0))
q=B.zs
p=B.fs
o=!0
break
default:o=c
r=o
p=r
q=p}n=d.ar$
for(m=A.n(d).h("as.1"),l=t.D;n!=null;){k=n.e
k.toString
k=l.a(k).a
k.toString
j=k-s.a(A.x.prototype.gZ.call(d)).d
k=r.a
i=q.a
k=k+i*j+p.a*0
h=r.b
g=q.b
h=h+g*j+p.b*0
f=new A.t(k,h)
if(o){e=d.Ka(n)
f=new A.t(k+i*e,h+g*e)}if(j<s.a(A.x.prototype.gZ.call(d)).r&&j+d.Ka(n)>0)a.eL(n,f)
k=n.e
k.toString
n=m.a(k).ak$}}}
A.a2F.prototype={
$1(a){var s=this.a,r=s.be,q=this.b,p=this.c
if(r.T(0,q)){r=r.v(0,q)
r.toString
q=r.e
q.toString
t.D.a(q)
s.iS(r)
r.e=q
s.uv(0,r,p)
q.c=!1}else s.bj.a0u(q,p)},
$S:99}
A.a2H.prototype={
$1(a){var s,r,q
for(s=this.a,r=this.b;s.a>0;){q=r.ar$
q.toString
r.Du(q);--s.a}for(;s.b>0;){q=r.cW$
q.toString
r.Du(q);--s.b}s=r.be
s=s.gaZ(s)
q=A.n(s).h("aN<q.E>")
B.b.a_(A.aA(new A.aN(s,new A.a2G(),q),!0,q.h("q.E")),r.bj.ga4M())},
$S:99}
A.a2G.prototype={
$1(a){var s=a.e
s.toString
return!t.D.a(s).on$},
$S:226}
A.yw.prototype={
am(a){var s,r,q
this.em(a)
s=this.ar$
for(r=t.D;s!=null;){s.am(a)
q=s.e
q.toString
s=r.a(q).ak$}},
af(a){var s,r,q
this.dD(0)
s=this.ar$
for(r=t.D;s!=null;){s.af(0)
q=s.e
q.toString
s=r.a(q).ak$}}}
A.P3.prototype={}
A.P4.prototype={}
A.PL.prototype={
af(a){this.uC(0)}}
A.PM.prototype={}
A.vA.prototype={
gxA(){var s=this,r=t.p
switch(A.js(r.a(A.x.prototype.gZ.call(s)).a,r.a(A.x.prototype.gZ.call(s)).b)){case B.y:return s.bG.d
case B.au:return s.bG.a
case B.x:return s.bG.b
case B.ae:return s.bG.c}},
gZW(){var s=this,r=t.p
switch(A.js(r.a(A.x.prototype.gZ.call(s)).a,r.a(A.x.prototype.gZ.call(s)).b)){case B.y:return s.bG.b
case B.au:return s.bG.c
case B.x:return s.bG.d
case B.ae:return s.bG.a}},
ga0F(){switch(A.bc(t.p.a(A.x.prototype.gZ.call(this)).a).a){case 0:var s=this.bG
return s.gb4(s)+s.gb7(s)
case 1:return this.bG.gcg()}},
ei(a){if(!(a.e instanceof A.ks))a.e=new A.ks(B.j)},
bB(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=null,a2=t.p,a3=a2.a(A.x.prototype.gZ.call(a0)),a4=a0.gxA()
a0.gZW()
s=a0.bG
s.toString
a2=s.ZY(A.bc(a2.a(A.x.prototype.gZ.call(a0)).a))
r=a0.ga0F()
if(a0.t$==null){q=a0.hh(a3,0,a2)
a0.id=A.wj(a0.nK(a3,0,a2),!1,a1,a1,a2,Math.min(q,a3.r),0,a2,a1)
return}p=a0.hh(a3,0,a4)
o=a3.f
if(o>0)o=Math.max(0,o-p)
s=a0.t$
s.toString
n=Math.max(0,a3.d-a4)
m=Math.min(0,a3.z+a4)
l=a3.r
k=a0.hh(a3,0,a4)
j=a3.Q
i=a0.nK(a3,0,a4)
h=Math.max(0,a3.w-r)
g=a3.a
f=a3.b
s.cn(new A.kr(g,f,a3.c,n,a4+a3.e,o,l-k,h,a3.x,a3.y,m,j-i),!0)
e=a0.t$.id
s=e.y
if(s!=null){a0.id=A.wj(a1,!1,a1,a1,0,0,0,0,s)
return}s=e.a
n=a4+s
m=a2+s
d=a0.hh(a3,n,m)
c=p+d
b=a0.nK(a3,0,a4)
a=a0.nK(a3,n,m)
n=e.c
k=e.d
q=Math.min(p+Math.max(n,k+d),l)
l=e.b
k=Math.min(c+k,q)
j=Math.min(a+b+e.z,j)
i=e.e
n=Math.max(c+n,p+e.r)
a0.id=A.wj(j,e.x,n,k,a2+i,q,l,m,a1)
m=a0.t$.e
m.toString
t.v.a(m)
switch(A.js(g,f)){case B.y:a2=a0.bG
n=a2.a
s=a2.d+s
m.a=new A.t(n,a0.hh(a3,s,s+a2.b))
break
case B.au:m.a=new A.t(a0.hh(a3,0,a0.bG.a),a0.bG.b)
break
case B.x:a2=a0.bG
m.a=new A.t(a2.a,a0.hh(a3,0,a2.b))
break
case B.ae:a2=a0.bG
s=a2.c+s
m.a=new A.t(a0.hh(a3,s,s+a2.a),a0.bG.b)
break}},
yP(a,b,c){var s,r,q,p,o=this,n=o.t$
if(n!=null&&n.id.r>0){n=n.e
n.toString
t.v.a(n)
s=o.hh(t.p.a(A.x.prototype.gZ.call(o)),0,o.gxA())
r=o.t$
r.toString
r=o.a_x(r)
n=n.a
q=o.t$.ga2H()
p=n!=null
if(p)a.c.push(new A.qk(new A.t(-n.a,-n.b)))
q.$3$crossAxisPosition$mainAxisPosition(a,b-r,c-s)
if(p)a.tD()}return!1},
a_x(a){var s=this,r=t.p
switch(A.js(r.a(A.x.prototype.gZ.call(s)).a,r.a(A.x.prototype.gZ.call(s)).b)){case B.y:case B.x:return s.bG.a
case B.ae:case B.au:return s.bG.b}},
xH(a){return this.gxA()},
dd(a,b){var s=a.e
s.toString
s=t.v.a(s).a
b.aA(0,s.a,s.b)},
aE(a,b){var s,r=this.t$
if(r!=null&&r.id.w){s=r.e
s.toString
a.eL(r,b.S(0,t.v.a(s).a))}}}
A.P1.prototype={
am(a){var s
this.em(a)
s=this.t$
if(s!=null)s.am(a)},
af(a){var s
this.dD(0)
s=this.t$
if(s!=null)s.af(0)}}
A.a2c.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return b instanceof A.a2c&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gu(a){var s=this
return A.U(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this
return"RelativeRect.fromLTRB("+B.d.N(s.a,1)+", "+B.d.N(s.b,1)+", "+B.d.N(s.c,1)+", "+B.d.N(s.d,1)+")"}}
A.dN.prototype={
gz_(){var s=this
return s.e!=null||s.f!=null||s.r!=null||s.w!=null||s.x!=null||s.y!=null},
i(a){var s=this,r=A.a([],t.s),q=s.e
if(q!=null)r.push("top="+A.hd(q))
q=s.f
if(q!=null)r.push("right="+A.hd(q))
q=s.r
if(q!=null)r.push("bottom="+A.hd(q))
q=s.w
if(q!=null)r.push("left="+A.hd(q))
q=s.x
if(q!=null)r.push("width="+A.hd(q))
q=s.y
if(q!=null)r.push("height="+A.hd(q))
if(r.length===0)r.push("not positioned")
r.push(s.pF(0))
return B.b.b9(r,"; ")}}
A.wr.prototype={
E(){return"StackFit."+this.b}}
A.vB.prototype={
ei(a){if(!(a.e instanceof A.dN))a.e=new A.dN(null,null,B.j)},
YA(){var s=this
if(s.t!=null)return
s.t=s.I.V(s.ao)},
se4(a){var s=this
if(s.I.k(0,a))return
s.I=a
s.t=null
s.a8()},
sbC(a){var s=this
if(s.ao==a)return
s.ao=a
s.t=null
s.a8()},
ez(a){return this.I_(a)},
c5(a){return this.G4(a,A.afB())},
G4(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.YA()
if(e.dg$===0){s=a.a
r=a.b
q=A.G(1/0,s,r)
p=a.c
o=a.d
n=A.G(1/0,p,o)
return isFinite(q)&&isFinite(n)?new A.a_(A.G(1/0,s,r),A.G(1/0,p,o)):new A.a_(A.G(0,s,r),A.G(0,p,o))}m=a.a
l=a.c
switch(e.ah.a){case 0:k=new A.aO(0,a.b,0,a.d)
break
case 1:k=A.AD(new A.a_(A.G(1/0,m,a.b),A.G(1/0,l,a.d)))
break
case 2:k=a
break
default:k=null}j=e.ar$
for(s=t.B,i=l,h=m,g=!1;j!=null;){r=j.e
r.toString
s.a(r)
if(!r.gz_()){f=b.$2(j,k)
h=Math.max(h,f.a)
i=Math.max(i,f.b)
g=!0}j=r.ak$}return g?new A.a_(h,i):new A.a_(A.G(1/0,m,a.b),A.G(1/0,l,a.d))},
bB(){var s,r,q,p,o,n,m,l=this,k=t.k.a(A.x.prototype.gZ.call(l))
l.L=!1
l.k3=l.G4(k,A.afC())
s=l.ar$
for(r=t.B,q=t.uu;s!=null;){p=s.e
p.toString
r.a(p)
if(!p.gz_()){o=l.t
o.toString
n=l.k3
n.toString
m=s.k3
m.toString
p.a=o.lu(q.a(n.aa(0,m)))}else{o=l.k3
o.toString
n=l.t
n.toString
l.L=A.alE(s,p,o,n)||l.L}s=p.ak$}},
cK(a,b){return this.xW(a,b)},
tz(a,b){this.nY(a,b)},
aE(a,b){var s,r=this,q=r.aW,p=q!==B.l&&r.L,o=r.by
if(p){p=r.cx
p===$&&A.b()
s=r.k3
o.saV(0,a.ks(p,b,new A.B(0,0,0+s.a,0+s.b),r.gzS(),q,o.a))}else{o.saV(0,null)
r.nY(a,b)}},
m(){this.by.saV(0,null)
this.hP()},
iP(a){var s
switch(this.aW.a){case 0:return null
case 1:case 2:case 3:if(this.L){s=this.k3
s=new A.B(0,0,0+s.a,0+s.b)}else s=null
return s}}}
A.P5.prototype={
am(a){var s,r,q
this.em(a)
s=this.ar$
for(r=t.B;s!=null;){s.am(a)
q=s.e
q.toString
s=r.a(q).ak$}},
af(a){var s,r,q
this.dD(0)
s=this.ar$
for(r=t.B;s!=null;){s.af(0)
q=s.e
q.toString
s=r.a(q).ak$}}}
A.P6.prototype={}
A.KF.prototype={
k(a,b){if(b==null)return!1
if(J.T(b)!==A.A(this))return!1
return b instanceof A.KF&&b.a.k(0,this.a)&&b.b===this.b},
gu(a){return A.U(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return this.a.i(0)+" at "+A.hd(this.b)+"x"}}
A.vC.prototype={
sxJ(a){var s,r,q,p,o=this
if(o.k1.k(0,a))return
s=o.k1
o.k1=a
r=s.b
r=A.uv(r,r,1)
q=o.k1.b
if(!r.k(0,A.uv(q,q,1))){r=o.GI()
q=o.ch
p=q.a
p.toString
J.ar7(p)
q.saV(0,r)
o.ap()}o.a8()},
GI(){var s,r=this.k1.b
r=A.uv(r,r,1)
this.k4=r
s=A.amj(r)
s.am(this)
return s},
oT(){},
bB(){var s,r=this.k1.a
this.id=r
s=this.t$
if(s!=null)s.ig(A.AD(r))},
bR(a,b){var s=this.t$
if(s!=null)s.bR(A.ajZ(a),b)
a.C(0,new A.hv(this,t.Cq))
return!0},
a2M(a){var s,r=A.a([],t.f1),q=new A.bd(new Float64Array(16))
q.d2()
s=new A.hj(r,A.a([q],t.hZ),A.a([],t.pw))
this.bR(s,a)
return s},
gdv(){return!0},
aE(a,b){var s=this.t$
if(s!=null)a.eL(s,b)},
dd(a,b){var s=this.k4
s.toString
b.cA(0,s)
this.Oa(a,b)},
a_U(){var s,r,q
try{q=$.ao()
s=q.a0B()
r=this.ch.a.a_g(s)
this.Zm()
q.a4R(r)
r.m()}finally{}},
Zm(){var s,r,q,p,o,n,m,l,k,j=null,i=this.ghx(),h=i.gaH(),g=this.k2
g.gkz()
s=i.gaH()
g.gkz()
g=this.ch
r=t.g9
q=g.a.IE(0,new A.t(h.a,0),r)
switch(A.kZ().a){case 0:p=g.a.IE(0,new A.t(s.a,i.d-1-0),r)
break
case 1:case 2:case 3:case 4:case 5:p=j
break
default:p=j}h=q==null
if(h&&p==null)return
if(!h&&p!=null){h=q.f
g=q.r
s=q.e
r=q.w
A.am8(new A.hX(p.a,p.b,p.c,p.d,s,h,g,r))
return}o=A.kZ()===B.ay
n=h?p:q
h=n.f
g=n.r
s=n.e
r=n.w
m=o?n.a:j
l=o?n.b:j
k=o?n.c:j
A.am8(new A.hX(m,l,k,o?n.d:j,s,h,g,r))},
ghx(){var s=this.id.a0(0,this.k1.b)
return new A.B(0,0,0+s.a,0+s.b)},
gjA(){var s,r=this.k4
r.toString
s=this.id
return A.fV(r,new A.B(0,0,0+s.a,0+s.b))}}
A.P8.prototype={
am(a){var s
this.em(a)
s=this.t$
if(s!=null)s.am(a)},
af(a){var s
this.dD(0)
s=this.t$
if(s!=null)s.af(0)}}
A.AJ.prototype={
E(){return"CacheExtentStyle."+this.b}}
A.oY.prototype={
i(a){return"RevealedOffset(offset: "+A.h(this.a)+", rect: "+this.b.i(0)+")"}}
A.oV.prototype={
eC(a){this.h1(a)
a.H7(B.Bm)},
fT(a){var s=this.gHw()
new A.aN(s,new A.a2M(),A.aR(s).h("aN<1>")).a_(0,a)},
sfv(a){if(a===this.L)return
this.L=a
this.a8()},
sa0E(a){if(a===this.t)return
this.t=a
this.a8()},
sih(a,b){var s=this,r=s.I
if(b===r)return
if(s.b!=null)r.G(0,s.gtf())
s.I=b
if(s.b!=null)b.W(0,s.gtf())
s.a8()},
sa_j(a){if(a===this.ao)return
this.ao=a
this.a8()},
sa_k(a){if(a===this.aW)return
this.aW=a
this.a8()},
am(a){this.Pm(a)
this.I.W(0,this.gtf())},
af(a){this.I.G(0,this.gtf())
this.Pn(0)},
gdv(){return!0},
JH(a,b,c,d,e,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.azL(h.I.k4,e),f=a0+a2
for(s=e.a,r=t.v,q=a0,p=0;c!=null;){o=a5<=0?0:a5
n=Math.max(b,-o)
m=b-n
c.cn(new A.kr(h.L,e,g,o,p,f-q,Math.max(0,a4-q+a0),d,h.t,a1,n,Math.max(0,a3+m)),!0)
l=c.id
k=l.y
if(k!=null)return k
j=q+l.b
k=l.w||a5>0
i=c.e
if(k){i.toString
r.a(i).a=h.HC(c,j,e)}else{i.toString
r.a(i).a=h.HC(c,-a5+a0,e)}f=Math.max(j+l.c,f)
k=l.a
a5-=k
p+=k
q+=l.d
i=l.z
if(i!==0){a3-=i-m
b=Math.min(n+i,0)}switch(s){case 0:i=h.iU
i===$&&A.b()
h.iU=i+k
break
case 1:i=h.iT
i===$&&A.b()
h.iT=i-k
break}if(l.x)h.fE=!0
c=a.$1(c)}return 0},
iP(a){var s,r,q,p,o,n
switch(this.by.a){case 0:return null
case 1:case 2:case 3:break}s=this.k3
r=0+s.a
q=0+s.b
s=t.p
if(s.a(A.x.prototype.gZ.call(a)).f===0||!isFinite(s.a(A.x.prototype.gZ.call(a)).y))return new A.B(0,0,r,q)
p=s.a(A.x.prototype.gZ.call(a)).y-s.a(A.x.prototype.gZ.call(a)).r+s.a(A.x.prototype.gZ.call(a)).f
switch(A.js(this.L,s.a(A.x.prototype.gZ.call(a)).b)){case B.x:o=0+p
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
o=0}return new A.B(n,o,r,q)},
y0(a){var s,r=this,q=r.ah
if(q==null){q=r.k3
return new A.B(0,0,0+q.a,0+q.b)}switch(A.bc(r.L).a){case 1:s=r.k3
return new A.B(0,0-q,0+s.a,0+s.b+q)
case 0:s=r.k3
return new A.B(0-q,0,0+s.a+q,0+s.b)}},
aE(a,b){var s,r,q,p=this
if(p.ar$==null)return
s=p.fE&&p.by!==B.l
r=p.c6
if(s){s=p.cx
s===$&&A.b()
q=p.k3
r.saV(0,a.ks(s,b,new A.B(0,0,0+q.a,0+q.b),p.gWQ(),p.by,r.a))}else{r.saV(0,null)
p.F_(a,b)}},
m(){this.c6.saV(0,null)
this.hP()},
F_(a,b){var s,r,q,p,o,n,m,l
for(s=this.gHw(),r=s.length,q=t.v,p=b.a,o=b.b,n=0;n<s.length;s.length===r||(0,A.R)(s),++n){m=s[n]
if(m.id.w){l=m.e
l.toString
l=q.a(l).a
a.eL(m,new A.t(p+l.a,o+l.b))}}},
cK(a,b){var s,r,q,p,o,n,m,l,k={}
k.a=k.b=null
switch(A.bc(this.L).a){case 1:k.b=b.b
k.a=b.a
break
case 0:k.b=b.a
k.a=b.b
break}s=new A.pd(a.a,a.b,a.c)
for(r=this.ga_y(),q=r.length,p=t.v,o=0;o<r.length;r.length===q||(0,A.R)(r),++o){n=r[o]
if(!n.id.w)continue
m=new A.bd(new Float64Array(16))
m.d2()
l=n.e
l.toString
l=p.a(l).a
m.aA(0,l.a,l.b)
if(a.ZV(new A.a2L(k,this,n,s),m))return!0}return!1},
kA(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=a instanceof A.cf
for(s=t.d,r=c,q=a,p=0;o=q.c,o!==d;q=o){o.toString
s.a(o)
if(q instanceof A.E)r=q
if(o instanceof A.cf){n=o.xH(q)
n.toString
p+=n}else{p=0
b=!1}}if(r!=null){s=r.c
s.toString
t.q0.a(s)
m=t.p.a(A.x.prototype.gZ.call(s)).b
switch(A.bc(d.L).a){case 0:l=r.k3.a
break
case 1:l=r.k3.b
break
default:l=c}if(a1==null)a1=a.ghx()
k=A.fV(a.bt(0,r),a1)}else{if(b){t.q0.a(a)
s=t.p
m=s.a(A.x.prototype.gZ.call(a)).b
l=a.id.a
if(a1==null)switch(A.bc(d.L).a){case 0:a1=new A.B(0,0,0+l,0+s.a(A.x.prototype.gZ.call(a)).w)
break
case 1:a1=new A.B(0,0,0+s.a(A.x.prototype.gZ.call(a)).w,0+a.id.a)
break}}else{s=d.I.at
s.toString
a1.toString
return new A.oY(s,a1)}k=a1}t.q0.a(q)
switch(A.js(d.L,m)){case B.y:s=k.d
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
p=d.M2(q,p)
i=A.fV(a.bt(0,d),a1)
h=d.a3N(q)
switch(t.p.a(A.x.prototype.gZ.call(q)).b.a){case 0:p-=h
break
case 1:switch(A.bc(d.L).a){case 1:p-=i.d-i.b
break
case 0:p-=i.c-i.a
break}break}s=d.L
switch(A.bc(s).a){case 0:g=d.k3.a-h
break
case 1:g=d.k3.b-h
break
default:g=c}f=p-(g-j)*a0
o=d.I.at
o.toString
e=o-f
switch(s.a){case 2:i=i.aA(0,0,e)
break
case 1:i=i.aA(0,e,0)
break
case 0:i=i.aA(0,0,-e)
break
case 3:i=i.aA(0,-e,0)
break}return new A.oY(f,i)},
HC(a,b,c){switch(A.js(this.L,c)){case B.y:return new A.t(0,this.k3.b-(b+a.id.c))
case B.au:return new A.t(b,0)
case B.x:return new A.t(0,b)
case B.ae:return new A.t(this.k3.a-(b+a.id.c),0)}},
ej(a,b,c,d){var s=this
if(!s.I.r.glt())return s.pH(a,b,c,d)
s.pH(a,null,c,A.alG(a,b,c,s.I,d,s))},
mI(){return this.ej(B.aJ,null,B.u,null)},
kK(a,b){return this.ej(B.aJ,a,B.u,b)},
$iIt:1}
A.a2M.prototype={
$1(a){var s=a.id
return s.w||s.z>0},
$S:228}
A.a2L.prototype={
$1(a){var s=this,r=s.c,q=s.a,p=s.b.a_W(r,q.b)
return r.J4(s.d,q.a,p)},
$S:98}
A.vD.prototype={
ei(a){if(!(a.e instanceof A.j1))a.e=new A.j1(null,null,B.j)},
sa__(a){if(a===this.rI)return
this.rI=a
this.a8()},
saH(a){if(a==this.dM)return
this.dM=a
this.a8()},
gjC(){return!0},
c5(a){return new A.a_(A.G(1/0,a.a,a.b),A.G(1/0,a.c,a.d))},
bB(){var s,r,q,p,o,n,m,l,k,j=this
switch(A.bc(j.L).a){case 1:j.I.nG(j.k3.b)
break
case 0:j.I.nG(j.k3.a)
break}if(j.dM==null){j.iU=j.iT=0
j.fE=!1
j.I.nD(0,0)
return}switch(A.bc(j.L).a){case 1:s=j.k3
r=s.b
q=s.a
break
case 0:s=j.k3
r=s.a
q=s.b
break
default:r=null
q=null}s=0
do{p=j.I.at
p.toString
o=j.R_(r,q,p+0)
if(o!==0){p=j.I
n=p.at
n.toString
p.at=n+o
p.ch=!0}else{p=j.I
n=j.iT
n===$&&A.b()
m=j.rI
n=Math.min(0,n+r*m)
l=j.iU
l===$&&A.b()
if(p.nD(n,Math.max(0,l-r*(1-m))))break}k=s+1
if(k<10){s=k
continue}else break}while(!0)},
R_(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.iU=e.iT=0
e.fE=!1
s=a*e.rI-c
r=A.G(s,0,a)
q=a-s
p=A.G(q,0,a)
switch(e.aW.a){case 0:e.ah=e.ao
break
case 1:e.ah=a*e.ao
break}o=e.ah
o.toString
n=a+2*o
m=s+o
l=A.G(m,0,n)
k=A.G(n-m,0,n)
j=e.dM.e
j.toString
i=A.n(e).h("as.1").a(j).bQ$
j=i==null
if(!j){h=Math.max(a,s)
g=e.JH(e.ga_v(),A.G(q,-o,0),i,b,B.nC,p,a,0,l,r,h-a)
if(g!==0)return-g}q=e.dM
o=-s
h=Math.max(0,o)
o=j?Math.min(0,o):0
j=s>=a?s:r
f=e.ah
f.toString
return e.JH(e.ga_t(),A.G(s,-f,0),q,b,B.nB,j,a,o,k,p,h)},
M2(a,b){var s,r,q,p,o=this
switch(t.p.a(A.x.prototype.gZ.call(a)).b.a){case 0:s=o.dM
for(r=A.n(o).h("as.1"),q=0;s!==a;){q+=s.id.a
p=s.e
p.toString
s=r.a(p).ak$}return q+b
case 1:r=o.dM.e
r.toString
p=A.n(o).h("as.1")
s=p.a(r).bQ$
for(q=0;s!==a;){q-=s.id.a
r=s.e
r.toString
s=p.a(r).bQ$}return q-b}},
a3N(a){var s,r,q,p=this
switch(t.p.a(A.x.prototype.gZ.call(a)).b.a){case 0:s=p.dM
for(r=A.n(p).h("as.1");s!==a;){s.id.toString
q=s.e
q.toString
s=r.a(q).ak$}return 0
case 1:r=p.dM.e
r.toString
q=A.n(p).h("as.1")
s=q.a(r).bQ$
for(;s!==a;){s.id.toString
r=s.e
r.toString
s=q.a(r).bQ$}return 0}},
dd(a,b){var s=a.e
s.toString
s=t.v.a(s).a
b.aA(0,s.a,s.b)},
a_W(a,b){var s,r=a.e
r.toString
t.v.a(r)
s=t.p
switch(A.js(s.a(A.x.prototype.gZ.call(a)).a,s.a(A.x.prototype.gZ.call(a)).b)){case B.x:return b-r.a.b
case B.au:return b-r.a.a
case B.y:return a.id.c-(b-r.a.b)
case B.ae:return a.id.c-(b-r.a.a)}},
gHw(){var s,r,q=this,p=A.a([],t.jT),o=q.ar$
if(o==null)return p
for(s=A.n(q).h("as.1");o!=q.dM;){o.toString
p.push(o)
r=o.e
r.toString
o=s.a(r).ak$}o=q.cW$
for(;!0;){o.toString
p.push(o)
if(o===q.dM)return p
r=o.e
r.toString
o=s.a(r).bQ$}},
ga_y(){var s,r,q,p=this,o=A.a([],t.jT)
if(p.ar$==null)return o
s=p.dM
for(r=A.n(p).h("as.1");s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).ak$}q=p.dM.e
q.toString
s=r.a(q).bQ$
for(;s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).bQ$}return o}}
A.ia.prototype={
am(a){var s,r,q
this.em(a)
s=this.ar$
for(r=A.n(this).h("ia.0");s!=null;){s.am(a)
q=s.e
q.toString
s=r.a(q).ak$}},
af(a){var s,r,q
this.dD(0)
s=this.ar$
for(r=A.n(this).h("ia.0");s!=null;){s.af(0)
q=s.e
q.toString
s=r.a(q).ak$}}}
A.p3.prototype={
E(){return"ScrollDirection."+this.b}}
A.fr.prototype={
oN(a,b,c,d){var s=d.a===B.u.a
if(s){this.dw(b)
return A.bx(null,t.H)}else return this.he(b,c,d)},
i(a){var s=this,r=A.a([],t.s)
s.OL(r)
r.push(A.A(s.w).i(0))
r.push(s.r.i(0))
r.push(A.h(s.fr))
r.push(s.k4.i(0))
return"<optimized out>#"+A.bI(s)+"("+B.b.b9(r,", ")+")"},
cb(a){var s=this.at
if(s!=null)a.push("offset: "+B.d.N(s,1))}}
A.q3.prototype={}
A.km.prototype={
E(){return"SchedulerPhase."+this.b}}
A.a16.prototype={}
A.dx.prototype={
ZT(a){var s=this.f$
s.push(a)
if(s.length===1){s=$.aK()
s.ay=this.gSB()
s.ch=$.aa}},
KC(a){var s=this.f$
B.b.v(s,a)
if(s.length===0){s=$.aK()
s.ay=null
s.ch=$.aa}},
SC(a){var s,r,q,p,o,n,m,l,k=this.f$,j=A.aA(k,!0,t.wX)
for(p=j.length,o=0;o<p;++o){s=j[o]
try{if(B.b.B(k,s))s.$1(a)}catch(n){r=A.ah(n)
q=A.ay(n)
m=A.bk("while executing callbacks for FrameTiming")
l=$.fy()
if(l!=null)l.$1(new A.bE(r,q,"Flutter framework",m,null,!1))}}},
rS(a){this.r$=a
switch(a.a){case 0:case 1:this.FP(!0)
break
case 2:case 3:this.FP(!1)
break}},
DJ(){if(this.y$)return
this.y$=!0
A.cc(B.u,this.gXT())},
XU(){this.y$=!1
if(this.a1U())this.DJ()},
a1U(){var s,r,q,p,o,n,m=this,l="No element",k=m.x$,j=k.c===0
if(j||m.b>0)return!1
if(j)A.Y(A.a6(l))
s=k.pR(0)
j=s.b
if(m.w$.$2$priority$scheduler(j,m)){try{if(k.c===0)A.Y(A.a6(l));++k.d
k.pR(0)
p=k.c-1
o=k.pR(p)
k.b[p]=null
k.c=p
if(p>0)k.R3(o,0)
s.a6q()}catch(n){r=A.ah(n)
q=A.ay(n)
j=A.bk("during a task callback")
A.dZ(new A.bE(r,q,"scheduler library",j,null,!1))}return k.c!==0}return!1},
px(a,b){var s,r=this
r.hI()
s=++r.z$
r.Q$.l(0,s,new A.q3(a))
return r.z$},
pw(a){return this.px(a,!1)},
gIs(){var s=this
if(s.ay$==null){if(s.CW$===B.cG)s.hI()
s.ay$=new A.b0(new A.a8($.aa,t.U),t._)
s.ax$.push(new A.a3C(s))}return s.ay$.a},
gIP(){return this.cx$},
FP(a){if(this.cx$===a)return
this.cx$=a
if(a)this.hI()},
It(){var s=$.aK()
if(s.w==null){s.w=this.gTF()
s.x=$.aa}if(s.y==null){s.y=this.gU6()
s.z=$.aa}},
yo(){switch(this.CW$.a){case 0:case 4:this.hI()
return
case 1:case 2:case 3:return}},
hI(){var s,r=this
if(!r.ch$)s=!(A.dx.prototype.gIP.call(r)&&r.c7$)
else s=!0
if(s)return
r.It()
$.aK().hI()
r.ch$=!0},
LY(){if(this.ch$)return
this.It()
$.aK().hI()
this.ch$=!0},
u9(){var s,r,q=this
if(q.cy$||q.CW$!==B.cG)return
q.cy$=!0
s=new A.Kk(null,0,A.a([],t.vS))
s.pC(0,"Warm-up frame")
r=q.ch$
A.cc(B.u,new A.a3E(q))
A.cc(B.u,new A.a3F(q,r))
q.a3G(new A.a3G(q,s))},
a5_(){var s=this
s.dx$=s.CC(s.dy$)
s.db$=null},
CC(a){var s=this.db$,r=s==null?B.u:new A.aM(a.a-s.a)
return A.c8(B.d.b6(r.a/$.anV)+this.dx$.a,0,0)},
TG(a){if(this.cy$){this.go$=!0
return}this.IS(a)},
U7(){var s=this
if(s.go$){s.go$=!1
s.ax$.push(new A.a3B(s))
return}s.IU()},
IS(a){var s,r,q=this,p=q.id$,o=p==null
if(!o)p.pC(0,"Frame")
if(q.db$==null)q.db$=a
r=a==null
q.fr$=q.CC(r?q.dy$:a)
if(!r)q.dy$=a
q.ch$=!1
try{if(!o)p.pC(0,"Animate")
q.CW$=B.TN
s=q.Q$
q.Q$=A.y(t.S,t.b1)
J.nm(s,new A.a3D(q))
q.as$.X(0)}finally{q.CW$=B.TO}},
a4Y(a){var s=this,r=s.k1$,q=r==null
if(!q&&r!==a)return null
if(r===a)++s.k2$
else if(q){s.k1$=a
s.k2$=1}return new A.a16(s.gSi())},
Sj(){if(--this.k2$===0){this.k1$=null
$.aK()}},
IU(){var s,r,q,p,o,n,m,l=this,k=l.id$,j=k==null
if(!j)k.rN(0)
try{l.CW$=B.B4
for(p=l.at$,o=p.length,n=0;n<p.length;p.length===o||(0,A.R)(p),++n){s=p[n]
m=l.fr$
m.toString
l.Ev(s,m)}l.CW$=B.TP
p=l.ax$
r=A.aA(p,!0,t.qP)
B.b.X(p)
for(p=r,o=p.length,n=0;n<p.length;p.length===o||(0,A.R)(p),++n){q=p[n]
m=l.fr$
m.toString
l.Ev(q,m)}}finally{l.CW$=B.cG
if(!j)k.rN(0)
l.fr$=null}},
Ew(a,b,c){var s,r,q,p
try{a.$1(b)}catch(q){s=A.ah(q)
r=A.ay(q)
p=A.bk("during a scheduler callback")
A.dZ(new A.bE(s,r,"scheduler library",p,null,!1))}},
Ev(a,b){return this.Ew(a,b,null)}}
A.a3C.prototype={
$1(a){var s=this.a
s.ay$.f2(0)
s.ay$=null},
$S:2}
A.a3E.prototype={
$0(){this.a.IS(null)},
$S:0}
A.a3F.prototype={
$0(){var s=this.a
s.IU()
s.a5_()
s.cy$=!1
if(this.b)s.hI()},
$S:0}
A.a3G.prototype={
$0(){var s=0,r=A.a4(t.H),q=this
var $async$$0=A.a0(function(a,b){if(a===1)return A.a1(b,r)
while(true)switch(s){case 0:s=2
return A.a5(q.a.gIs(),$async$$0)
case 2:q.b.rN(0)
return A.a2(null,r)}})
return A.a3($async$$0,r)},
$S:66}
A.a3B.prototype={
$1(a){var s=this.a
s.ch$=!1
s.hI()},
$S:2}
A.a3D.prototype={
$2(a,b){var s,r,q=this.a
if(!q.as$.B(0,a)){s=b.a
r=q.fr$
r.toString
q.Ew(s,r,b.b)}},
$S:230}
A.pz.prototype={
szm(a,b){var s=this
if(b===s.b)return
s.b=b
if(b)s.At()
else if(s.a!=null&&s.e==null)s.e=$.bK.px(s.gwV(),!1)},
ga3l(){if(this.a==null)return!1
if(this.b)return!1
var s=$.bK
s.toString
if(A.dx.prototype.gIP.call(s)&&s.c7$)return!0
if($.bK.CW$!==B.cG)return!0
return!1},
mL(a){var s,r,q=this
q.a=new A.mK(new A.b0(new A.a8($.aa,t.U),t._))
if(!q.b)s=q.e==null
else s=!1
if(s)q.e=$.bK.px(q.gwV(),!1)
s=$.bK
r=s.CW$.a
if(r>0&&r<4){s=s.fr$
s.toString
q.c=s}s=q.a
s.toString
return s},
mM(a,b){var s=this,r=s.a
if(r==null)return
s.c=s.a=null
s.At()
if(b)r.CU(s)
else r.Gl()},
fZ(a){return this.mM(a,!1)},
YR(a){var s,r=this
r.e=null
s=r.c
if(s==null)s=r.c=a
r.d.$1(new A.aM(a.a-s.a))
if(!r.b&&r.a!=null&&r.e==null)r.e=$.bK.px(r.gwV(),!0)},
At(){var s,r=this.e
if(r!=null){s=$.bK
s.Q$.v(0,r)
s.as$.C(0,r)
this.e=null}},
m(){var s=this,r=s.a
if(r!=null){s.a=null
s.At()
r.CU(s)}},
a5n(a,b){var s=""+"Ticker()"
return s.charCodeAt(0)==0?s:s},
i(a){return this.a5n(a,!1)}}
A.mK.prototype={
Gl(){this.c=!0
this.a.f2(0)
var s=this.b
if(s!=null)s.f2(0)},
CU(a){var s
this.c=!1
s=this.b
if(s!=null)s.hW(new A.wR(a))},
Lf(a){var s,r,q=this,p=new A.a7K(a)
if(q.b==null){s=q.b=new A.b0(new A.a8($.aa,t.U),t._)
r=q.c
if(r!=null)if(r)s.f2(0)
else s.hW(B.Zk)}q.b.a.dV(p,p,t.H)},
lw(a,b){return this.a.a.lw(a,b)},
iL(a){return this.lw(a,null)},
dV(a,b,c){return this.a.a.dV(a,b,c)},
aY(a,b){return this.dV(a,null,b)},
fe(a){return this.a.a.fe(a)},
i(a){var s=A.bI(this),r=this.c
if(r==null)r="active"
else r=r?"complete":"canceled"
return"<optimized out>#"+s+"("+r+")"},
$iag:1}
A.a7K.prototype={
$1(a){this.a.$0()},
$S:21}
A.wR.prototype={
i(a){var s=this.a
if(s!=null)return"This ticker was canceled: "+s.i(0)
return'The ticker was canceled before the "orCancel" property was first used.'},
$ibN:1}
A.a47.prototype={}
A.w8.prototype={
i(a){return"SemanticsTag("+this.a+")"}}
A.cl.prototype={
S(a,b){var s,r,q,p,o,n,m,l=this.a,k=l.length
if(k===0)return b
s=b.a
if(s.length===0)return this
r=A.aA(this.b,!0,t.lS)
q=b.b
p=q.length
if(p!==0)for(o=0;o<q.length;q.length===p||(0,A.R)(q),++o){n=q[o]
m=n.a
r.push(n.HK(new A.eP(m.a+k,m.b+k)))}return new A.cl(l+s,r)},
k(a,b){if(b==null)return!1
return J.T(b)===A.A(this)&&b instanceof A.cl&&b.a===this.a&&A.cL(b.b,this.b)},
gu(a){return A.U(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"AttributedString('"+this.a+"', attributes: "+A.h(this.b)+")"}}
A.Jq.prototype={
bV(){return"SemanticsData"},
k(a,b){var s=this
if(b==null)return!1
return b instanceof A.Jq&&b.a===s.a&&b.b===s.b&&b.c.k(0,s.c)&&b.d.k(0,s.d)&&b.e.k(0,s.e)&&b.f.k(0,s.f)&&b.r.k(0,s.r)&&b.w===s.w&&b.x==s.x&&b.cx.k(0,s.cx)&&A.aj_(b.cy,s.cy)&&b.Q==s.Q&&b.as==s.as&&b.at==s.at&&b.ax==s.ax&&J.f(b.db,s.db)&&b.dx===s.dx&&b.dy===s.dy&&A.aw7(b.fr,s.fr)},
gu(a){var s=this,r=A.d7(s.fr)
return A.U(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.cx,s.cy,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,A.U(s.CW,s.db,s.dx,s.dy,r,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a))}}
A.Pu.prototype={}
A.Js.prototype={
bV(){return"SemanticsProperties"}}
A.bT.prototype={
sbk(a,b){var s
if(!A.auB(this.r,b)){s=A.ahg(b)
this.r=s?null:b
this.hU()}},
saL(a,b){if(!this.w.k(0,b)){this.w=b
this.hU()}},
sJw(a){if(this.as===a)return
this.as=a
this.hU()},
XA(a){var s,r,q,p,o,n,m,l=this,k=l.ax
if(k!=null)for(s=k.length,r=0;r<s;++r)k[r].ch=!0
for(k=a.length,r=0;r<k;++r)a[r].ch=!1
k=l.ax
if(k!=null)for(s=k.length,q=t.aa,p=!1,r=0;r<k.length;k.length===s||(0,A.R)(k),++r){o=k[r]
if(o.ch){n=J.cj(o)
if(q.a(A.J.prototype.gaI.call(n,o))===l){o.c=null
if(l.b!=null)o.af(0)}p=!0}}else p=!1
for(k=a.length,s=t.aa,r=0;r<a.length;a.length===k||(0,A.R)(a),++r){o=a[r]
q=J.cj(o)
if(s.a(A.J.prototype.gaI.call(q,o))!==l){if(s.a(A.J.prototype.gaI.call(q,o))!=null){q=s.a(A.J.prototype.gaI.call(q,o))
if(q!=null){o.c=null
if(q.b!=null)o.af(0)}}o.c=l
q=l.b
if(q!=null)o.am(q)
q=o.a
n=l.a
if(q<=n){o.a=n+1
o.jp()}p=!0}}if(!p&&l.ax!=null)for(k=l.ax,s=k.length,m=0;m<s;++m)if(k[m].e!==a[m].e){p=!0
break}l.ax=a
if(p)l.hU()},
ga2y(){var s=this.ax
s=s==null?null:s.length!==0
return s===!0},
xc(a){var s,r,q,p=this.ax
if(p!=null)for(s=p.length,r=0;r<p.length;p.length===s||(0,A.R)(p),++r){q=p[r]
if(!a.$1(q)||!q.xc(a))return!1}return!0},
jp(){var s=this.ax
if(s!=null)B.b.a_(s,this.gKv())},
am(a){var s,r,q,p=this
p.ur(a)
for(s=a.c;s.T(0,p.e);)p.e=$.a4o=($.a4o+1)%65535
s.l(0,p.e,p)
a.d.v(0,p)
if(p.CW){p.CW=!1
p.hU()}s=p.ax
if(s!=null)for(r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q)s[q].am(a)},
af(a){var s,r,q,p,o,n=this,m=t.nU
m.a(A.J.prototype.gbp.call(n)).c.v(0,n.e)
m.a(A.J.prototype.gbp.call(n)).d.C(0,n)
n.dD(0)
m=n.ax
if(m!=null)for(s=m.length,r=t.aa,q=0;q<m.length;m.length===s||(0,A.R)(m),++q){p=m[q]
o=J.cj(p)
if(r.a(A.J.prototype.gaI.call(o,p))===n)o.af(p)}n.hU()},
hU(){var s=this
if(s.CW)return
s.CW=!0
if(s.b!=null)t.nU.a(A.J.prototype.gbp.call(s)).b.C(0,s)},
ju(a,b,c){var s,r=this
if(c==null)c=$.agb()
if(r.fr.k(0,c.p4))if(r.id.k(0,c.ry))if(r.k2===c.x2)if(r.k3===c.xr)if(r.fx.k(0,c.R8))if(r.fy.k(0,c.RG))if(r.go.k(0,c.rx))if(r.k1===c.to)if(r.dy===c.aU)if(r.ok==c.y1)if(r.p1==c.id)if(r.RG==c.al)if(r.rx==c.an)if(r.ry==c.aj)if(r.db===c.f)if(r.Q==c.k1)s=r.at!==c.p2
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
if(s)r.hU()
r.fr=c.p4
r.fx=c.R8
r.fy=c.RG
r.go=c.rx
r.id=c.ry
r.k1=c.to
r.k4=c.x1
r.k2=c.x2
r.k3=c.xr
r.dy=c.aU
r.ok=c.y1
r.p1=c.id
r.cx=A.os(c.e,t.nS,t.BT)
r.cy=A.os(c.p3,t.zN,t.M)
r.db=c.f
r.p2=c.y2
r.RG=c.al
r.rx=c.an
r.ry=c.aj
r.at=c.p2
r.p4=c.k2
r.R8=c.k3
r.Q=c.k1
r.to=c.k4
r.x1=c.ok
r.x2=c.p1
r.XA(b==null?B.i1:b)},
a5B(a,b){return this.ju(a,null,b)},
LN(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7={}
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
a7.y=s==null?null:A.k4(s,t.xJ)
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
for(s=a6.cy,s=A.iJ(s,s.r);s.q();)q.C(0,A.akd(s.d))
a6.k4!=null
if(a6.at)a6.xc(new A.a4p(a7,a6,q))
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
B.b.hM(a5)
return new A.Jq(s,p,o,n,m,l,k,j,i,d,c,b,a,a0,a1,a2,a3,a4,h,e,g,r,f,a5)},
QQ(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.LN()
if(!a.ga2y()||a.at){s=$.apw()
r=s}else{q=a.ax.length
p=a.Ry()
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
if(c==null)c=$.apy()
b=l==null?$.apx():l
a1.a.push(new A.Jr(n,a0.a,a0.b,-1,-1,-1,0,g,f,e,d,a0.cx,m.a,m.b,h.a,h.b,k.a,k.b,j.a,j.b,i.a,i.b,a0.w,a0.x,A.aj1(c),s,r,b,a0.dy))
a.CW=!1},
Ry(){var s,r,q,p,o,n,m,l,k,j=this,i=j.ok,h=t.aa,g=h.a(A.J.prototype.gaI.call(j,j))
while(!0){s=i==null
if(!(s&&g!=null))break
i=g.ok
g=h.a(A.J.prototype.gaI.call(g,g))}r=j.ax
if(!s){r.toString
r=A.ayl(r,i)}h=t.Dr
q=A.a([],h)
p=A.a([],h)
for(o=null,n=0;n<r.length;++n){m=r[n]
l=m.p1
o=n>0?r[n-1].p1:null
if(n!==0)if(J.T(l)===J.T(o)){if(l!=null)o.toString
k=!0}else k=!1
else k=!0
if(!k&&p.length!==0){if(o!=null){if(!!p.immutable$list)A.Y(A.N("sort"))
h=p.length-1
if(h-0<=32)A.JM(p,0,h,J.aiy())
else A.JL(p,0,h,J.aiy())}B.b.J(q,p)
B.b.X(p)}p.push(new A.jh(m,l,n))}if(o!=null)B.b.hM(p)
B.b.J(q,p)
h=t.wg
return A.aA(new A.aC(q,new A.a4n(),h),!0,h.h("bl.E"))},
M8(a){if(this.b==null)return
B.ma.eg(0,a.KZ(this.e))},
bV(){return"SemanticsNode#"+this.e},
a5j(a,b,c){return new A.Pu(a,this,b,!0,!0,null,c)},
KX(a){return this.a5j(B.Fl,null,a)}}
A.a4p.prototype={
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
if(s!=null){r=q.y;(r==null?q.y=A.b8(t.xJ):r).J(0,s)}for(s=this.b.cy,s=A.iJ(s,s.r),r=this.c;s.q();)r.C(0,A.akd(s.d))
a.k4!=null
s=q.c
r=q.x
q.c=A.ae8(a.fr,a.ok,s,r)
r=q.r
s=q.x
q.r=A.ae8(a.id,a.ok,r,s)
q.cy=Math.max(q.cy,a.k3+a.k2)
return!0},
$S:58}
A.a4n.prototype={
$1(a){return a.a},
$S:232}
A.j8.prototype={
b1(a,b){return B.d.b1(this.b,b.b)},
$ibC:1}
A.hb.prototype={
b1(a,b){return B.d.b1(this.a,b.a)},
Mz(){var s,r,q,p,o,n,m,l,k,j=A.a([],t.iV)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q){p=s[q]
o=p.w
j.push(new A.j8(!0,A.ng(p,new A.t(o.a- -0.1,o.b- -0.1)).a,p))
j.push(new A.j8(!1,A.ng(p,new A.t(o.c+-0.1,o.d+-0.1)).a,p))}B.b.hM(j)
n=A.a([],t.dK)
for(s=j.length,r=this.b,o=t.T,m=null,l=0,q=0;q<j.length;j.length===s||(0,A.R)(j),++q){k=j[q]
if(k.a){++l
if(m==null)m=new A.hb(k.b,r,A.a([],o))
m.c.push(k.c)}else --l
if(l===0){m.toString
n.push(m)
m=null}}B.b.hM(n)
if(r===B.V){s=t.FF
n=A.aA(new A.cF(n,s),!0,s.h("bl.E"))}s=A.an(n).h("iy<1,bT>")
return A.aA(new A.iy(n,new A.acU(),s),!0,s.h("q.E"))},
My(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this.c,a4=a3.length
if(a4<=1)return a3
s=t.S
r=A.y(s,t.ju)
q=A.y(s,s)
for(p=this.b,o=p===B.V,p=p===B.t,n=a4,m=0;m<n;g===a4||(0,A.R)(a3),++m,n=g){l=a3[m]
r.l(0,l.e,l)
n=l.w
k=n.a
j=n.b
i=A.ng(l,new A.t(k+(n.c-k)/2,j+(n.d-j)/2))
for(n=a3.length,k=i.a,j=i.b,h=0;g=a3.length,h<g;a3.length===n||(0,A.R)(a3),++h){f=a3[h]
if((l==null?f==null:l===f)||q.j(0,f.e)===l.e)continue
g=f.w
e=g.a
d=g.b
c=A.ng(f,new A.t(e+(g.c-e)/2,d+(g.d-d)/2))
b=Math.atan2(c.b-j,c.a-k)
a=p&&-0.7853981633974483<b&&b<2.356194490192345
if(o)a0=b<-2.356194490192345||b>2.356194490192345
else a0=!1
if(a||a0)q.l(0,l.e,f.e)}}a1=A.a([],t.t)
a2=A.a(a3.slice(0),A.an(a3))
B.b.d5(a2,new A.acQ())
new A.aC(a2,new A.acR(),A.an(a2).h("aC<1,k>")).a_(0,new A.acT(A.b8(s),q,a1))
a3=t.sC
a3=A.aA(new A.aC(a1,new A.acS(r),a3),!0,a3.h("bl.E"))
a4=A.an(a3).h("cF<1>")
return A.aA(new A.cF(a3,a4),!0,a4.h("bl.E"))}}
A.acU.prototype={
$1(a){return a.My()},
$S:101}
A.acQ.prototype={
$2(a,b){var s,r,q=a.w,p=A.ng(a,new A.t(q.a,q.b))
q=b.w
s=A.ng(b,new A.t(q.a,q.b))
r=B.d.b1(p.b,s.b)
if(r!==0)return-r
return-B.d.b1(p.a,s.a)},
$S:59}
A.acT.prototype={
$1(a){var s=this,r=s.a
if(r.B(0,a))return
r.C(0,a)
r=s.b
if(r.T(0,a)){r=r.j(0,a)
r.toString
s.$1(r)}s.c.push(a)},
$S:57}
A.acR.prototype={
$1(a){return a.e},
$S:235}
A.acS.prototype={
$1(a){var s=this.a.j(0,a)
s.toString
return s},
$S:236}
A.ae4.prototype={
$1(a){return a.Mz()},
$S:101}
A.jh.prototype={
b1(a,b){var s,r=this.b
if(r==null||b.b==null)return this.c-b.c
r.toString
s=b.b
s.toString
return r.b1(0,s)},
$ibC:1}
A.w7.prototype={
M9(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.b
if(e.a===0)return
s=A.b8(t.S)
r=A.a([],t.T)
for(q=t.aa,p=A.n(e).h("aN<1>"),o=p.h("q.E"),n=f.d;e.a!==0;){m=A.aA(new A.aN(e,new A.a4s(f),p),!0,o)
e.X(0)
n.X(0)
l=new A.a4t()
if(!!m.immutable$list)A.Y(A.N("sort"))
k=m.length-1
if(k-0<=32)A.JM(m,0,k,l)
else A.JL(m,0,k,l)
B.b.J(r,m)
for(l=m.length,j=0;j<m.length;m.length===l||(0,A.R)(m),++j){i=m[j]
if(i.at||i.as){k=J.cj(i)
if(q.a(A.J.prototype.gaI.call(k,i))!=null){h=q.a(A.J.prototype.gaI.call(k,i))
h=h.at||h.as}else h=!1
if(h){q.a(A.J.prototype.gaI.call(k,i)).hU()
i.CW=!1}}}}B.b.d5(r,new A.a4u())
$.a48.toString
g=new A.a4w(A.a([],t.fr))
for(q=r.length,j=0;j<r.length;r.length===q||(0,A.R)(r),++j){i=r[j]
if(i.CW&&i.b!=null)i.QQ(g,s)}e.X(0)
for(e=A.jd(s,s.r),q=A.n(e).c;e.q();){p=e.d
$.aka.j(0,p==null?q.a(p):p).toString}f.a.$1(new A.Ju(g.a))
f.az()},
Tp(a,b){var s,r={},q=r.a=this.c.j(0,a)
if(q!=null)s=(q.at||q.as)&&!q.cx.T(0,b)
else s=!1
if(s)q.xc(new A.a4r(r,b))
s=r.a
if(s==null||!s.cx.T(0,b))return null
return r.a.cx.j(0,b)},
a4g(a,b,c){var s=this.Tp(a,b)
if(s!=null){s.$1(c)
return}if(b===B.Ua&&this.c.j(0,a).f!=null)this.c.j(0,a).f.$0()},
i(a){return"<optimized out>#"+A.bI(this)}}
A.a4s.prototype={
$1(a){return!this.a.d.B(0,a)},
$S:58}
A.a4t.prototype={
$2(a,b){return a.a-b.a},
$S:59}
A.a4u.prototype={
$2(a,b){return a.a-b.a},
$S:59}
A.a4r.prototype={
$1(a){if(a.cx.T(0,this.b)){this.a.a=a
return!1}return!0},
$S:58}
A.a49.prototype={
jD(a,b){var s=this
s.e.l(0,a,b)
s.f=s.f|a.a
s.d=!0},
e0(a,b){this.jD(a,new A.a4a(b))},
sjk(a){a.toString
this.e0(B.dN,a)},
skp(a){a.toString
this.e0(B.B9,a)},
str(a){this.e0(B.dQ,a)},
stp(a){this.e0(B.Ub,a)},
sts(a){this.e0(B.dR,a)},
stt(a){this.e0(B.dO,a)},
stq(a){this.e0(B.dP,a)},
szD(a){this.e0(B.Ba,a)},
szu(a){this.e0(B.B8,a)},
szr(a,b){this.e0(B.Ud,b)},
szs(a,b){this.e0(B.Uh,b)},
szL(a,b){this.e0(B.U7,b)},
szJ(a){this.jD(B.Ue,new A.a4d(a))},
szH(a){this.jD(B.U5,new A.a4b(a))},
szK(a){this.jD(B.Uf,new A.a4e(a))},
szI(a){this.jD(B.U6,new A.a4c(a))},
szO(a){this.jD(B.U8,new A.a4f(a))},
szP(a){this.jD(B.U9,new A.a4g(a))},
szv(a){this.e0(B.Uc,a)},
szw(a){this.e0(B.Ug,a)},
sM0(a){return},
sM1(a){if(a==this.k3)return
this.k3=a
this.d=!0},
sze(a){return},
sxU(a){return},
si1(a,b){if(b===this.x2)return
this.x2=b
this.d=!0},
H7(a){var s=this.ac;(s==null?this.ac=A.b8(t.xJ):s).C(0,a)},
b3(a,b){var s=this,r=s.aU,q=a.a
if(b)s.aU=r|q
else s.aU=r&~q
s.d=!0},
Jt(a){var s,r=this
if(a==null||!a.d||!r.d)return!0
if((r.f&a.f)!==0)return!1
if((r.aU&a.aU)!==0)return!1
if(r.R8.a.length!==0)s=a.R8.a.length!==0
else s=!1
if(s)return!1
return!0},
jT(a){var s,r,q=this
if(!a.d)return
q.e.J(0,a.e)
q.p3.J(0,a.p3)
q.f=q.f|a.f
q.aU=q.aU|a.aU
q.y2=a.y2
if(q.al==null)q.al=a.al
if(q.an==null)q.an=a.an
if(q.aj==null)q.aj=a.aj
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
q.p4=A.ae8(a.p4,a.y1,r,s)
s=q.R8
if(s.a==="")q.R8=a.R8
s=q.RG
if(s.a==="")q.RG=a.RG
s=q.rx
if(s.a==="")q.rx=a.rx
s=q.ry
r=q.y1
q.ry=A.ae8(a.ry,a.y1,s,r)
if(q.to==="")q.to=a.to
q.xr=Math.max(q.xr,a.xr+a.x2)
q.d=q.d||a.d},
a09(){var s=this,r=A.p9()
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
r.aU=s.aU
r.ac=s.ac
r.y2=s.y2
r.al=s.al
r.an=s.an
r.aj=s.aj
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
A.a4a.prototype={
$1(a){this.a.$0()},
$S:5}
A.a4d.prototype={
$1(a){a.toString
this.a.$1(A.nd(a))},
$S:5}
A.a4b.prototype={
$1(a){a.toString
this.a.$1(A.nd(a))},
$S:5}
A.a4e.prototype={
$1(a){a.toString
this.a.$1(A.nd(a))},
$S:5}
A.a4c.prototype={
$1(a){a.toString
this.a.$1(A.nd(a))},
$S:5}
A.a4f.prototype={
$1(a){var s,r,q
a.toString
s=J.agh(t.G.a(a),t.N,t.S)
r=s.j(0,"base")
r.toString
q=s.j(0,"extent")
q.toString
this.a.$1(A.a7F(B.C,r,q,!1))},
$S:5}
A.a4g.prototype={
$1(a){a.toString
this.a.$1(A.bz(a))},
$S:5}
A.CU.prototype={
E(){return"DebugSemanticsDumpOrder."+this.b}}
A.pa.prototype={
b1(a,b){var s=this.a1a(b)
return s},
$ibC:1}
A.uZ.prototype={
a1a(a){var s=a.b===this.b
if(s)return 0
return B.f.b1(this.b,a.b)}}
A.Pt.prototype={}
A.Pv.prototype={}
A.Pw.prototype={}
A.a4i.prototype={
KZ(a){var s=A.aV(["type",this.a,"data",this.pn()],t.N,t.z)
if(a!=null)s.l(0,"nodeId",a)
return s},
a5m(){return this.KZ(null)},
i(a){var s,r,q,p=A.a([],t.s),o=this.pn(),n=J.ajI(o.gbo(o))
B.b.hM(n)
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.R)(n),++r){q=n[r]
p.push(A.h(q)+": "+A.h(o.j(0,q)))}return"SemanticsEvent("+B.b.b9(p,", ")+")"}}
A.a7M.prototype={
pn(){return A.aV(["message",this.b],t.N,t.z)}}
A.a_r.prototype={
pn(){return B.ze}}
A.a78.prototype={
pn(){return B.ze}}
A.Aj.prototype={
km(a,b){return this.a3E(a,!0)},
a3E(a,b){var s=0,r=A.a4(t.N),q,p=this,o
var $async$km=A.a0(function(c,d){if(c===1)return A.a1(d,r)
while(true)switch(s){case 0:s=3
return A.a5(p.cM(0,a),$async$km)
case 3:o=d
if(o.byteLength<51200){q=B.a8.e6(0,A.cS(o.buffer,0,null))
s=1
break}q=A.Sc(A.azN(),o,'UTF8 decode for "'+a+'"',t.B6,t.N)
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$km,r)},
i(a){return"<optimized out>#"+A.bI(this)+"()"}}
A.TI.prototype={
km(a,b){return this.MH(a,!0)},
a3F(a,b,c){var s,r={},q=this.b
if(q.T(0,a)){r=q.j(0,a)
r.toString
return c.h("ag<0>").a(r)}r.a=r.b=null
this.km(a,!1).aY(b,c).aY(new A.TJ(r,this,a,c),t.H)
s=r.a
if(s!=null)return s
s=new A.a8($.aa,c.h("a8<0>"))
r.b=new A.b0(s,c.h("b0<0>"))
q.l(0,a,s)
return r.b.a}}
A.TJ.prototype={
$1(a){var s=this,r=new A.bm(a,s.d.h("bm<0>")),q=s.a
q.a=r
s.b.b.l(0,s.c,r)
q=q.b
if(q!=null)q.ca(0,a)},
$S(){return this.d.h("ax(0)")}}
A.a1f.prototype={
cM(a,b){var s,r=B.cc.e5(A.amV(A.QU(B.i2,b,B.a8,!1)).e),q=$.h0.be$
q===$&&A.b()
s=q.ud(0,"flutter/assets",A.k7(r.buffer,0,null)).aY(new A.a1g(b),t.B6)
return s},
tc(a){return this.a3C(a)},
a3C(a){var s=0,r=A.a4(t.gG),q,p=this,o
var $async$tc=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:s=3
return A.a5(p.cM(0,a),$async$tc)
case 3:o=c
q=A.Zy(A.cS(o.buffer,0,null))
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$tc,r)}}
A.a1g.prototype={
$1(a){if(a==null)throw A.c(A.agU(A.a([A.ayM(this.a),A.bk("The asset does not exist or has empty data.")],t.F)))
return a},
$S:237}
A.T9.prototype={}
A.pb.prototype={
ot(){var s=$.Sr()
s.a.X(0)
s.b.X(0)},
j7(a){return this.a2m(a)},
a2m(a){var s=0,r=A.a4(t.H),q,p=this
var $async$j7=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:switch(A.bz(J.aL(t.a.a(a),"type"))){case"memoryPressure":p.ot()
break}s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$j7,r)},
QL(){var s=A.b5("controller")
s.sbZ(A.pj(null,new A.a4z(s),null,!1,t.xe))
return J.arc(s.aC())},
a4A(){if(this.r$!=null)return
$.aK()
var s=A.alT("AppLifecycleState.resumed")
if(s!=null)this.rS(s)},
vU(a){return this.Ur(a)},
Ur(a){var s=0,r=A.a4(t.dR),q,p=this,o
var $async$vU=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:a.toString
o=A.alT(a)
o.toString
p.rS(o)
q=null
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$vU,r)},
vV(a){return this.UA(a)},
UA(a){var s=0,r=A.a4(t.H)
var $async$vV=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:t.j.a(a.b)
return A.a2(null,r)}})
return A.a3($async$vV,r)},
$idx:1}
A.a4z.prototype={
$0(){var s=0,r=A.a4(t.H),q=this,p,o,n
var $async$$0=A.a0(function(a,b){if(a===1)return A.a1(b,r)
while(true)switch(s){case 0:o=A.b5("rawLicenses")
n=o
s=2
return A.a5($.Sr().km("NOTICES",!1),$async$$0)
case 2:n.sbZ(b)
p=q.a
n=J
s=3
return A.a5(A.Sc(A.azU(),o.aC(),"parseLicenses",t.N,t.rh),$async$$0)
case 3:n.nm(b,J.ar8(p.aC()))
s=4
return A.a5(J.ajC(p.aC()),$async$$0)
case 4:return A.a2(null,r)}})
return A.a3($async$$0,r)},
$S:66}
A.a9o.prototype={
ud(a,b,c){var s=new A.a8($.aa,t.sB)
$.aK().Ye(b,c,A.atf(new A.a9p(new A.b0(s,t.BB))))
return s},
Bj(a,b){if(b==null){a=$.Sp().a.j(0,a)
if(a!=null)a.e=null}else $.Sp().Mf(a,new A.a9q(b))}}
A.a9p.prototype={
$1(a){var s,r,q,p
try{this.a.ca(0,a)}catch(q){s=A.ah(q)
r=A.ay(q)
p=A.bk("during a platform message response callback")
A.dZ(new A.bE(s,r,"services library",p,null,!1))}},
$S:19}
A.a9q.prototype={
$2(a,b){return this.Lt(a,b)},
Lt(a,b){var s=0,r=A.a4(t.H),q=1,p,o=[],n=this,m,l,k,j,i,h
var $async$$2=A.a0(function(c,d){if(c===1){p=d
s=q}while(true)switch(s){case 0:i=null
q=3
s=6
return A.a5(n.a.$1(a),$async$$2)
case 6:i=d
o.push(5)
s=4
break
case 3:q=2
h=p
m=A.ah(h)
l=A.ay(h)
j=A.bk("during a platform message callback")
A.dZ(new A.bE(m,l,"services library",j,null,!1))
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
b.$1(i)
s=o.pop()
break
case 5:return A.a2(null,r)
case 1:return A.a1(p,r)}})
return A.a3($async$$2,r)},
$S:241}
A.Ws.prototype={}
A.VO.prototype={}
A.VX.prototype={}
A.Dn.prototype={}
A.Wu.prototype={}
A.Dl.prototype={}
A.W4.prototype={}
A.Vj.prototype={}
A.W5.prototype={}
A.Dt.prototype={}
A.Dj.prototype={}
A.Dq.prototype={}
A.DD.prototype={}
A.VT.prototype={}
A.Wa.prototype={}
A.Vs.prototype={}
A.VG.prototype={}
A.V3.prototype={}
A.Vw.prototype={}
A.Dy.prototype={}
A.V5.prototype={}
A.Wf.prototype={}
A.oq.prototype={}
A.k_.prototype={}
A.lY.prototype={}
A.k0.prototype={}
A.u_.prototype={}
A.YK.prototype={
Sd(a){var s,r,q,p,o,n,m,l,k,j
this.d=!0
s=!1
for(n=this.c,m=0;!1;++m){r=n[m]
try{q=r.$1(a)
s=s||q}catch(l){p=A.ah(l)
o=A.ay(l)
k=A.bk("while processing a key handler")
j=$.fy()
if(j!=null)j.$1(new A.bE(p,o,"services library",k,null,!1))}}this.d=!1
return s},
IW(a){var s,r,q=this,p=a.a,o=a.b
if(a instanceof A.lY){q.a.l(0,p,o)
s=$.apk().j(0,o.a)
if(s!=null){r=q.b
if(r.B(0,s))r.v(0,s)
else r.C(0,s)}}else if(a instanceof A.k0)q.a.v(0,p)
return q.Sd(a)}}
A.tY.prototype={
E(){return"KeyDataTransitMode."+this.b}}
A.tZ.prototype={
i(a){return"KeyMessage("+A.h(this.a)+")"}}
A.F_.prototype={
a2_(a){var s,r=this,q=r.d
switch((q==null?r.d=B.Gw:q).a){case 0:return!1
case 1:if(a.c===0&&a.d===0)return!1
s=A.au3(a)
if(a.f&&r.e.length===0){r.b.IW(s)
r.Dz(A.a([s],t.DG),null)}else r.e.push(s)
return!1}},
Dz(a,b){var s,r,q,p,o=this.a
if(o!=null){s=new A.tZ(a,b)
try{o=o.$1(s)
return o}catch(p){r=A.ah(p)
q=A.ay(p)
o=A.bk("while processing the key message handler")
A.dZ(new A.bE(r,q,"services library",o,null,!1))}}return!1},
yJ(a){var s=0,r=A.a4(t.a),q,p=this,o,n,m,l,k,j,i
var $async$yJ=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:if(p.d==null){p.d=B.Gv
p.c.a.push(p.gRT())}o=A.avH(t.a.a(a))
if(o instanceof A.hP){n=o.c
m=p.f
if(!n.Mq()){m.C(0,n.gdB())
l=!1}else{m.v(0,n.gdB())
l=!0}}else if(o instanceof A.oP){n=p.f
m=o.c
if(n.B(0,m.gdB())){n.v(0,m.gdB())
l=!1}else l=!0}else l=!0
if(l){p.c.a2g(o)
for(n=p.e,m=n.length,k=p.b,j=!1,i=0;i<n.length;n.length===m||(0,A.R)(n),++i)j=k.IW(n[i])||j
j=p.Dz(n,o)||j
B.b.X(n)}else j=!0
q=A.aV(["handled",j],t.N,t.z)
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$yJ,r)},
RU(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.c,d=e.gdB(),c=e.goI()
e=this.b.a
s=A.n(e).h("b7<1>")
r=A.k4(new A.b7(e,s),s.h("q.E"))
q=A.a([],t.DG)
p=e.j(0,d)
o=$.h0.dy$
n=a.a
if(n==="")n=f
if(a instanceof A.hP)if(p==null){m=new A.lY(d,c,n,o,!1)
r.C(0,d)}else m=new A.u_(d,p,n,o,!1)
else if(p==null)m=f
else{m=new A.k0(d,p,f,o,!1)
r.v(0,d)}for(s=this.c.d,l=A.n(s).h("b7<1>"),k=l.h("q.E"),j=r.k7(A.k4(new A.b7(s,l),k)),j=j.ga7(j),i=this.e;j.q();){h=j.gF(j)
if(h.k(0,d))q.push(new A.k0(h,c,f,o,!0))
else{g=e.j(0,h)
g.toString
i.push(new A.k0(h,g,f,o,!0))}}for(e=A.k4(new A.b7(s,l),k).k7(r),e=e.ga7(e);e.q();){l=e.gF(e)
k=s.j(0,l)
k.toString
i.push(new A.lY(l,k,f,o,!0))}if(m!=null)i.push(m)
B.b.J(i,q)}}
A.N9.prototype={}
A.a_c.prototype={}
A.e.prototype={
gu(a){return B.f.gu(this.a)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.T(b)!==A.A(this))return!1
return b instanceof A.e&&b.a===this.a}}
A.j.prototype={
gu(a){return B.f.gu(this.a)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.T(b)!==A.A(this))return!1
return b instanceof A.j&&b.a===this.a}}
A.Na.prototype={}
A.hD.prototype={
i(a){return"MethodCall("+this.a+", "+A.h(this.b)+")"}}
A.vg.prototype={
i(a){var s=this
return"PlatformException("+s.a+", "+A.h(s.b)+", "+A.h(s.c)+", "+A.h(s.d)+")"},
$ibN:1}
A.uC.prototype={
i(a){return"MissingPluginException("+A.h(this.a)+")"},
$ibN:1}
A.a6Q.prototype={
eB(a){if(a==null)return null
return B.cP.e5(A.cS(a.buffer,a.byteOffset,a.byteLength))},
bN(a){if(a==null)return null
return A.k7(B.cc.e5(a).buffer,0,null)}}
A.ZL.prototype={
bN(a){if(a==null)return null
return B.hn.bN(B.bL.ym(a))},
eB(a){var s
if(a==null)return a
s=B.hn.eB(a)
s.toString
return B.bL.e6(0,s)}}
A.ZN.prototype={
fC(a){var s=B.bK.bN(A.aV(["method",a.a,"args",a.b],t.N,t.X))
s.toString
return s},
fA(a){var s,r,q,p=null,o=B.bK.eB(a)
if(!t.G.b(o))throw A.c(A.bw("Expected method call Map, got "+A.h(o),p,p))
s=J.aG(o)
r=s.j(o,"method")
q=s.j(o,"args")
if(typeof r=="string")return new A.hD(r,q)
throw A.c(A.bw("Invalid method call: "+A.h(o),p,p))},
HZ(a){var s,r,q,p=null,o=B.bK.eB(a)
if(!t.j.b(o))throw A.c(A.bw("Expected envelope List, got "+A.h(o),p,p))
s=J.aG(o)
if(s.gp(o)===1)return s.j(o,0)
if(s.gp(o)===3)if(typeof s.j(o,0)=="string")r=s.j(o,1)==null||typeof s.j(o,1)=="string"
else r=!1
else r=!1
if(r){r=A.bz(s.j(o,0))
q=A.cs(s.j(o,1))
throw A.c(A.ahq(r,s.j(o,2),q,p))}if(s.gp(o)===4)if(typeof s.j(o,0)=="string")if(s.j(o,1)==null||typeof s.j(o,1)=="string")r=s.j(o,3)==null||typeof s.j(o,3)=="string"
else r=!1
else r=!1
else r=!1
if(r){r=A.bz(s.j(o,0))
q=A.cs(s.j(o,1))
throw A.c(A.ahq(r,s.j(o,2),q,A.cs(s.j(o,3))))}throw A.c(A.bw("Invalid envelope: "+A.h(o),p,p))},
oe(a){var s=B.bK.bN([a])
s.toString
return s},
ka(a,b,c){var s=B.bK.bN([a,c,b])
s.toString
return s},
Ip(a,b){return this.ka(a,null,b)}}
A.a6z.prototype={
bN(a){var s
if(a==null)return null
s=A.a8o(64)
this.cN(0,s,a)
return s.iR()},
eB(a){var s,r
if(a==null)return null
s=new A.vp(a)
r=this.fc(0,s)
if(s.b<a.byteLength)throw A.c(B.aB)
return r},
cN(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i=null
if(c==null)b.d9(0,0)
else if(A.jp(c))b.d9(0,c?1:2)
else if(typeof c=="number"){b.d9(0,6)
b.h4(8)
s=$.cM()
b.d.setFloat64(0,c,B.a7===s)
b.QC(b.e)}else if(A.jq(c)){s=-2147483648<=c&&c<=2147483647
r=b.d
if(s){b.d9(0,3)
s=$.cM()
r.setInt32(0,c,B.a7===s)
b.mW(b.e,0,4)}else{b.d9(0,4)
s=$.cM()
B.fr.Bh(r,0,c,s)}}else if(typeof c=="string"){b.d9(0,7)
s=c.length
q=new Uint8Array(s)
n=0
while(!0){if(!(n<s)){p=i
o=0
break}m=B.c.Y(c,n)
if(m<=127)q[n]=m
else{p=B.cc.e5(B.c.bK(c,n))
o=n
break}++n}if(p!=null){j.dY(b,o+p.length)
l=q.BYTES_PER_ELEMENT
k=A.d8(0,o,B.f.h3(q.byteLength,l),i,i)
b.jE(A.cS(q.buffer,q.byteOffset+0*l,(k-0)*l))
b.jE(p)}else{j.dY(b,s)
b.jE(q)}}else if(t.uo.b(c)){b.d9(0,8)
j.dY(b,c.length)
b.jE(c)}else if(t.fO.b(c)){b.d9(0,9)
s=c.length
j.dY(b,s)
b.h4(4)
b.jE(A.cS(c.buffer,c.byteOffset,4*s))}else if(t.D4.b(c)){b.d9(0,14)
s=c.length
j.dY(b,s)
b.h4(4)
b.jE(A.cS(c.buffer,c.byteOffset,4*s))}else if(t.cE.b(c)){b.d9(0,11)
s=c.length
j.dY(b,s)
b.h4(8)
b.jE(A.cS(c.buffer,c.byteOffset,8*s))}else if(t.j.b(c)){b.d9(0,12)
s=J.aG(c)
j.dY(b,s.gp(c))
for(s=s.ga7(c);s.q();)j.cN(0,b,s.gF(s))}else if(t.G.b(c)){b.d9(0,13)
s=J.aG(c)
j.dY(b,s.gp(c))
s.a_(c,new A.a6A(j,b))}else throw A.c(A.hf(c,i,i))},
fc(a,b){if(b.b>=b.a.byteLength)throw A.c(B.aB)
return this.ik(b.kD(0),b)},
ik(a,b){var s,r,q,p,o,n,m,l,k=this
switch(a){case 0:return null
case 1:return!0
case 2:return!1
case 3:s=b.b
r=$.cM()
q=b.a.getInt32(s,B.a7===r)
b.b+=4
return q
case 4:return b.u3(0)
case 6:b.h4(8)
s=b.b
r=$.cM()
q=b.a.getFloat64(s,B.a7===r)
b.b+=8
return q
case 5:case 7:p=k.dj(b)
return B.cP.e5(b.kE(p))
case 8:return b.kE(k.dj(b))
case 9:p=k.dj(b)
b.h4(4)
s=b.a
o=A.ald(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+4*p
return o
case 10:return b.u4(k.dj(b))
case 14:p=k.dj(b)
b.h4(4)
s=b.a
r=s.buffer
s=s.byteOffset+b.b
A.S2(r,s,p)
o=new Float32Array(r,s,p)
b.b=b.b+4*p
return o
case 11:p=k.dj(b)
b.h4(8)
s=b.a
o=A.alb(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+8*p
return o
case 12:p=k.dj(b)
n=A.aZ(p,null,!1,t.X)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.Y(B.aB)
b.b=r+1
n[m]=k.ik(s.getUint8(r),b)}return n
case 13:p=k.dj(b)
s=t.X
n=A.y(s,s)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.Y(B.aB)
b.b=r+1
r=k.ik(s.getUint8(r),b)
l=b.b
if(l>=s.byteLength)A.Y(B.aB)
b.b=l+1
n.l(0,r,k.ik(s.getUint8(l),b))}return n
default:throw A.c(B.aB)}},
dY(a,b){var s,r
if(b<254)a.d9(0,b)
else{s=a.d
if(b<=65535){a.d9(0,254)
r=$.cM()
s.setUint16(0,b,B.a7===r)
a.mW(a.e,0,2)}else{a.d9(0,255)
r=$.cM()
s.setUint32(0,b,B.a7===r)
a.mW(a.e,0,4)}}},
dj(a){var s,r,q=a.kD(0)
switch(q){case 254:s=a.b
r=$.cM()
q=a.a.getUint16(s,B.a7===r)
a.b+=2
return q
case 255:s=a.b
r=$.cM()
q=a.a.getUint32(s,B.a7===r)
a.b+=4
return q
default:return q}}}
A.a6A.prototype={
$2(a,b){var s=this.a,r=this.b
s.cN(0,r,a)
s.cN(0,r,b)},
$S:49}
A.a6D.prototype={
fC(a){var s=A.a8o(64)
B.ag.cN(0,s,a.a)
B.ag.cN(0,s,a.b)
return s.iR()},
fA(a){var s,r,q
a.toString
s=new A.vp(a)
r=B.ag.fc(0,s)
q=B.ag.fc(0,s)
if(typeof r=="string"&&s.b>=a.byteLength)return new A.hD(r,q)
else throw A.c(B.nw)},
oe(a){var s=A.a8o(64)
s.d9(0,0)
B.ag.cN(0,s,a)
return s.iR()},
ka(a,b,c){var s=A.a8o(64)
s.d9(0,1)
B.ag.cN(0,s,a)
B.ag.cN(0,s,c)
B.ag.cN(0,s,b)
return s.iR()},
Ip(a,b){return this.ka(a,null,b)},
HZ(a){var s,r,q,p,o,n
if(a.byteLength===0)throw A.c(B.G4)
s=new A.vp(a)
if(s.kD(0)===0)return B.ag.fc(0,s)
r=B.ag.fc(0,s)
q=B.ag.fc(0,s)
p=B.ag.fc(0,s)
o=s.b<a.byteLength?A.cs(B.ag.fc(0,s)):null
if(typeof r=="string")n=(q==null||typeof q=="string")&&s.b>=a.byteLength
else n=!1
if(n)throw A.c(A.ahq(r,p,A.cs(q),o))
else throw A.c(B.G5)}}
A.a08.prototype={
a1R(a,b,c){var s,r,q,p
if(t.yg.b(b)){this.b.v(0,a)
return}s=this.b
r=s.j(0,a)
q=A.axa(c)
if(q==null)q=this.a
if(J.f(r==null?null:t.Ft.a(r.a),q))return
p=q.rf(a)
s.l(0,a,p)
B.Tg.fI("activateSystemCursor",A.aV(["device",p.b,"kind",t.Ft.a(p.a).a],t.N,t.z),t.H)}}
A.uE.prototype={}
A.e1.prototype={
i(a){var s=this.grh()
return s}}
A.M3.prototype={
rf(a){throw A.c(A.bZ(null))},
grh(){return"defer"}}
A.Q7.prototype={}
A.kt.prototype={
grh(){return"SystemMouseCursor("+this.a+")"},
rf(a){return new A.Q7(this,a)},
k(a,b){if(b==null)return!1
if(J.T(b)!==A.A(this))return!1
return b instanceof A.kt&&b.a===this.a},
gu(a){return B.c.gu(this.a)}}
A.NF.prototype={}
A.jB.prototype={
gnJ(){var s,r=$.h0.be$
r===$&&A.b()
s=r
return s},
eg(a,b){return this.M6(0,b,this.$ti.h("1?"))},
M6(a,b,c){var s=0,r=A.a4(c),q,p=this,o,n
var $async$eg=A.a0(function(d,e){if(d===1)return A.a1(e,r)
while(true)switch(s){case 0:o=p.b
n=o
s=3
return A.a5(p.gnJ().ud(0,p.a,o.bN(b)),$async$eg)
case 3:q=n.eB(e)
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$eg,r)},
uj(a){this.gnJ().Bj(this.a,new A.T7(this,a))}}
A.T7.prototype={
$1(a){return this.Ln(a)},
Ln(a){var s=0,r=A.a4(t.yD),q,p=this,o,n
var $async$$1=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:o=p.a.b
n=o
s=3
return A.a5(p.b.$1(o.eB(a)),$async$$1)
case 3:q=n.bN(c)
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$$1,r)},
$S:104}
A.uB.prototype={
gnJ(){var s,r=$.h0.be$
r===$&&A.b()
s=r
return s},
nc(a,b,c,d){return this.VF(a,b,c,d,d.h("0?"))},
VF(a,b,c,d,e){var s=0,r=A.a4(e),q,p=this,o,n,m,l
var $async$nc=A.a0(function(f,g){if(f===1)return A.a1(g,r)
while(true)switch(s){case 0:o=p.b
n=o.fC(new A.hD(a,b))
m=p.a
s=3
return A.a5(p.gnJ().ud(0,m,n),$async$nc)
case 3:l=g
if(l==null){if(c){q=null
s=1
break}throw A.c(A.auC("No implementation found for method "+a+" on channel "+m))}q=d.h("0?").a(o.HZ(l))
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$nc,r)},
mE(a){var s=this.gnJ()
s.Bj(this.a,new A.a_W(this,a))},
q1(a,b){return this.TD(a,b)},
TD(a,b){var s=0,r=A.a4(t.yD),q,p=2,o,n=this,m,l,k,j,i,h,g,f,e
var $async$q1=A.a0(function(c,d){if(c===1){o=d
s=p}while(true)switch(s){case 0:h=n.b
g=h.fA(a)
p=4
e=h
s=7
return A.a5(b.$1(g),$async$q1)
case 7:k=e.oe(d)
q=k
s=1
break
p=2
s=6
break
case 4:p=3
f=o
k=A.ah(f)
if(k instanceof A.vg){m=k
k=m.a
i=m.b
q=h.ka(k,m.c,i)
s=1
break}else if(k instanceof A.uC){q=null
s=1
break}else{l=k
h=h.Ip("error",J.dT(l))
q=h
s=1
break}s=6
break
case 3:s=2
break
case 6:case 1:return A.a2(q,r)
case 2:return A.a1(o,r)}})
return A.a3($async$q1,r)}}
A.a_W.prototype={
$1(a){return this.a.q1(a,this.b)},
$S:104}
A.ka.prototype={
fI(a,b,c){return this.a3a(a,b,c,c.h("0?"))},
t6(a,b){return this.fI(a,null,b)},
a3a(a,b,c,d){var s=0,r=A.a4(d),q,p=this
var $async$fI=A.a0(function(e,f){if(e===1)return A.a1(f,r)
while(true)switch(s){case 0:q=p.Nw(a,b,!0,c)
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$fI,r)}}
A.k1.prototype={
E(){return"KeyboardSide."+this.b}}
A.ek.prototype={
E(){return"ModifierKey."+this.b}}
A.vn.prototype={
ga3V(){var s,r,q,p=A.y(t.BK,t.FE)
for(s=0;s<9;++s){r=B.oi[s]
if(this.a3f(r)){q=this.LF(r)
if(q!=null)p.l(0,r,q)}}return p},
Mq(){return!0}}
A.fY.prototype={}
A.a1R.prototype={
$0(){var s,r,q,p=this.b,o=J.aG(p),n=A.cs(o.j(p,"key")),m=n==null
if(!m){s=n.length
s=s!==0&&s===1}else s=!1
if(s)this.a.a=n
s=A.cs(o.j(p,"code"))
if(s==null)s=""
m=m?"":n
r=A.ne(o.j(p,"location"))
if(r==null)r=0
q=A.ne(o.j(p,"metaState"))
if(q==null)q=0
p=A.ne(o.j(p,"keyCode"))
return new A.oO(s,m,r,q,p==null?0:p)},
$S:245}
A.hP.prototype={}
A.oP.prototype={}
A.a1W.prototype={
a2g(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(a instanceof A.hP){p=a.c
i.d.l(0,p.gdB(),p.goI())}else if(a instanceof A.oP)i.d.v(0,a.c.gdB())
i.YL(a)
for(p=i.a,o=A.aA(p,!0,t.vc),n=o.length,m=0;m<n;++m){s=o[m]
try{if(B.b.B(p,s))s.$1(a)}catch(l){r=A.ah(l)
q=A.ay(l)
k=A.bk("while processing a raw key listener")
j=$.fy()
if(j!=null)j.$1(new A.bE(r,q,"services library",k,null,!1))}}return!1},
YL(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=a1.c,f=g.ga3V(),e=t.F3,d=A.y(e,t.lT),c=A.b8(e),b=this.d,a=A.k4(new A.b7(b,A.n(b).h("b7<1>")),e),a0=a1 instanceof A.hP
if(a0)a.C(0,g.gdB())
for(s=null,r=0;r<9;++r){q=B.oi[r]
p=$.apn()
o=p.j(0,new A.c7(q,B.bc))
if(o==null)continue
if(o.B(0,g.gdB()))s=q
if(f.j(0,q)===B.cj){c.J(0,o)
if(o.jV(0,a.giO(a)))continue}n=f.j(0,q)==null?A.b8(e):p.j(0,new A.c7(q,f.j(0,q)))
if(n==null)continue
for(p=new A.qc(n,n.r),p.c=n.e,m=A.n(p).c;p.q();){l=p.d
if(l==null)l=m.a(l)
k=$.apm().j(0,l)
k.toString
d.l(0,l,k)}}e=g instanceof A.a1P
j=(e||g instanceof A.oO)&&b.j(0,B.bE)!=null&&!J.f(b.j(0,B.bE),B.dl)
for(a=$.ag9(),a=A.iJ(a,a.r);a.q();){p=a.d
i=j&&p.k(0,B.bE)
if(!c.B(0,p)&&!i)b.v(0,p)}if(!(g instanceof A.a1N)&&!(g instanceof A.a1Q))b.v(0,B.dC)
b.J(0,d)
if(a0&&s!=null&&!b.T(0,g.gdB())){if(e&&g.gdB().k(0,B.bF)||g instanceof A.a1O||g instanceof A.a1M){h=$.ag9().j(0,g.gdB())
if(h!=null)b.l(0,g.gdB(),h)}if(g instanceof A.oO&&g.gdB().k(0,B.bF))b.l(0,g.gdB(),g.goI())}}}
A.c7.prototype={
k(a,b){if(b==null)return!1
if(J.T(b)!==A.A(this))return!1
return b instanceof A.c7&&b.a===this.a&&b.b==this.b},
gu(a){return A.U(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.ON.prototype={}
A.OM.prototype={}
A.a1M.prototype={}
A.a1N.prototype={}
A.a1O.prototype={}
A.a1P.prototype={}
A.a1Q.prototype={}
A.oO.prototype={
gdB(){var s=this.a,r=B.SP.j(0,s)
return r==null?new A.j(98784247808+B.c.gu(s)):r},
goI(){var s,r=this.b,q=B.SR.j(0,r),p=q==null?null:q[this.c]
if(p!=null)return p
s=B.SO.j(0,r)
if(s!=null)return s
if(r.length===1)return new A.e(B.c.Y(r.toLowerCase(),0))
return new A.e(B.c.gu(this.a)+98784247808)},
a3f(a){var s=this
switch(a.a){case 0:return(s.d&4)!==0
case 1:return(s.d&1)!==0
case 2:return(s.d&2)!==0
case 3:return(s.d&8)!==0
case 5:return(s.d&16)!==0
case 4:return(s.d&32)!==0
case 6:return(s.d&64)!==0
case 7:case 8:return!1}},
LF(a){return B.cj},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.T(b)!==A.A(s))return!1
return b instanceof A.oO&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e},
gu(a){var s=this
return A.U(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.vG.prototype={
ga56(){var s=this
if(s.c)return new A.bm(s.a,t.m6)
if(s.b==null){s.b=new A.b0(new A.a8($.aa,t.jr),t.Fk)
s.q0()}return s.b.a},
q0(){var s=0,r=A.a4(t.H),q,p=this,o
var $async$q0=A.a0(function(a,b){if(a===1)return A.a1(b,r)
while(true)switch(s){case 0:s=3
return A.a5(B.iw.t6("get",t.mE),$async$q0)
case 3:o=b
if(p.b==null){s=1
break}p.F5(o)
case 1:return A.a2(q,r)}})
return A.a3($async$q0,r)},
F5(a){var s,r=a==null
if(!r){s=J.aL(a,"enabled")
s.toString
A.nd(s)}else s=!1
this.a2i(r?null:t.Fx.a(J.aL(a,"data")),s)},
a2i(a,b){var s,r,q=this,p=q.c&&b
q.d=p
if(p)$.bK.ax$.push(new A.a2T(q))
s=q.a
if(b){p=q.S5(a)
r=t.N
if(p==null){p=t.X
p=A.y(p,p)}r=new A.cq(p,q,null,"root",A.y(r,t.hp),A.y(r,t.Cm))
p=r}else p=null
q.a=p
q.c=!0
r=q.b
if(r!=null)r.ca(0,p)
q.b=null
if(q.a!=s){q.az()
if(s!=null)s.m()}},
we(a){return this.W9(a)},
W9(a){var s=0,r=A.a4(t.H),q=this,p
var $async$we=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:p=a.a
switch(p){case"push":q.F5(t.mE.a(a.b))
break
default:throw A.c(A.bZ(p+" was invoked but isn't implemented by "+A.A(q).i(0)))}return A.a2(null,r)}})
return A.a3($async$we,r)},
S5(a){if(a==null)return null
return t.ym.a(B.ag.eB(A.k7(a.buffer,a.byteOffset,a.byteLength)))},
LZ(a){var s=this
s.r.C(0,a)
if(!s.f){s.f=!0
$.bK.ax$.push(new A.a2U(s))}},
DB(){var s,r,q,p,o,n=this
if(!n.f)return
n.f=!1
for(s=n.r,r=A.jd(s,s.r),q=A.n(r).c;r.q();){p=r.d;(p==null?q.a(p):p).w=!1}s.X(0)
o=B.ag.bN(n.a.a)
B.iw.fI("put",A.cS(o.buffer,o.byteOffset,o.byteLength),t.H)},
II(){if($.bK.ch$)return
this.DB()}}
A.a2T.prototype={
$1(a){this.a.d=!1},
$S:2}
A.a2U.prototype={
$1(a){return this.a.DB()},
$S:2}
A.cq.prototype={
gnk(){var s=J.A8(this.a,"c",new A.a2Q())
s.toString
return t.mE.a(s)},
giD(){var s=J.A8(this.a,"v",new A.a2R())
s.toString
return t.mE.a(s)},
a4J(a,b,c){var s=this,r=J.dS(s.giD(),b),q=c.h("0?").a(J.io(s.giD(),b))
if(J.fz(s.giD()))J.io(s.a,"v")
if(r)s.l8()
return q},
a_A(a,b){var s,r,q,p,o=this,n=o.f
if(n.T(0,a)||!J.dS(o.gnk(),a)){n=t.N
s=new A.cq(A.y(n,t.X),null,null,a,A.y(n,t.hp),A.y(n,t.Cm))
o.hV(s)
return s}r=t.N
q=o.c
p=J.aL(o.gnk(),a)
p.toString
s=new A.cq(t.mE.a(p),q,o,a,A.y(r,t.hp),A.y(r,t.Cm))
n.l(0,a,s)
return s},
hV(a){var s=this,r=a.d
if(r!==s){if(r!=null)r.qr(a)
a.d=s
s.Cr(a)
if(a.c!=s.c)s.Fj(a)}},
Sp(a){this.qr(a)
a.d=null
if(a.c!=null){a.wE(null)
a.GX(this.gFi())}},
l8(){var s,r=this
if(!r.w){r.w=!0
s=r.c
if(s!=null)s.LZ(r)}},
Fj(a){a.wE(this.c)
a.GX(this.gFi())},
wE(a){var s=this,r=s.c
if(r==a)return
if(s.w)if(r!=null)r.r.v(0,s)
s.c=a
if(s.w&&a!=null){s.w=!1
s.l8()}},
qr(a){var s,r,q,p=this
if(J.f(p.f.v(0,a.e),a)){J.io(p.gnk(),a.e)
s=p.r
r=s.j(0,a.e)
if(r!=null){q=J.bH(r)
p.DL(q.dT(r))
if(q.gP(r))s.v(0,a.e)}if(J.fz(p.gnk()))J.io(p.a,"c")
p.l8()
return}s=p.r
q=s.j(0,a.e)
if(q!=null)J.io(q,a)
q=s.j(0,a.e)
q=q==null?null:J.fz(q)
if(q===!0)s.v(0,a.e)},
Cr(a){var s=this
if(s.f.T(0,a.e)){J.l5(s.r.bJ(0,a.e,new A.a2P()),a)
s.l8()
return}s.DL(a)
s.l8()},
DL(a){this.f.l(0,a.e,a)
J.cA(this.gnk(),a.e,a.a)},
GY(a,b){var s,r,q=this.f
q=q.gaZ(q)
s=this.r
s=s.gaZ(s)
r=q.a1L(0,new A.iy(s,new A.a2S(),A.n(s).h("iy<q.E,cq>")))
J.nm(b?A.aA(r,!1,A.n(r).h("q.E")):r,a)},
GX(a){return this.GY(a,!1)},
a4P(a){var s,r=this
if(a===r.e)return
s=r.d
if(s!=null)s.qr(r)
r.e=a
s=r.d
if(s!=null)s.Cr(r)},
m(){var s,r=this
r.GY(r.gSo(),!0)
r.f.X(0)
r.r.X(0)
s=r.d
if(s!=null)s.qr(r)
r.d=null
r.wE(null)
r.x=!0},
i(a){return"RestorationBucket(restorationId: "+this.e+", owner: "+A.h(this.b)+")"}}
A.a2Q.prototype={
$0(){var s=t.X
return A.y(s,s)},
$S:106}
A.a2R.prototype={
$0(){var s=t.X
return A.y(s,s)},
$S:106}
A.a2P.prototype={
$0(){return A.a([],t.oy)},
$S:248}
A.a2S.prototype={
$1(a){return a},
$S:249}
A.SS.prototype={}
A.hX.prototype={
Gm(){var s,r,q,p,o=this,n=o.a
n=n==null?null:n.a
s=o.e
s=s==null?null:s.a
r=o.f.E()
q=o.r.E()
p=o.c
p=p==null?null:p.E()
return A.aV(["systemNavigationBarColor",n,"systemNavigationBarDividerColor",null,"systemStatusBarContrastEnforced",o.w,"statusBarColor",s,"statusBarBrightness",r,"statusBarIconBrightness",q,"systemNavigationBarIconBrightness",p,"systemNavigationBarContrastEnforced",o.d],t.N,t.z)},
i(a){return"SystemUiOverlayStyle("+this.Gm().i(0)+")"},
gu(a){var s=this
return A.U(s.a,s.b,s.d,s.e,s.f,s.r,s.w,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s,r=this
if(b==null)return!1
if(J.T(b)!==A.A(r))return!1
if(b instanceof A.hX)if(J.f(b.a,r.a))if(J.f(b.e,r.e))if(b.r===r.r)if(b.f===r.f)s=b.c==r.c
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.a72.prototype={
$0(){if(!J.f($.pr,$.ahL)){B.c_.fI("SystemChrome.setSystemUIOverlayStyle",$.pr.Gm(),t.H)
$.ahL=$.pr}$.pr=null},
$S:0}
A.wA.prototype={
E(){return"SystemSoundType."+this.b}}
A.a7a.prototype={
S(a,b){return new A.Mn(b,this)}}
A.TZ.prototype={
fV(a){var s,r,q,p,o,n=a.a
if(n<=0)return B.cN
s=this.a
r=s.length
if(n<=r)q=n===r&&a.b===B.C
else q=!0
if(q)return new A.b_(r,B.M)
switch(a.b.a){case 0:p=Math.min(n-1,r)
o=Math.min(n,r)
break
case 1:p=Math.min(n,r)
o=Math.min(n+1,r)
break
default:o=null
p=null}return new A.b_(A.am3(s,p,o).b,B.C)},
fW(a){var s,r,q,p,o,n=a.a
if(n>=0)s=n===0&&a.b===B.M
else s=!0
if(s)return B.cN
s=this.a
r=s.length
if(n>=r)return new A.b_(r,B.M)
switch(a.b.a){case 0:q=Math.min(n-1,r)
p=Math.min(n,r)
break
case 1:q=Math.min(n,r)
p=Math.min(n+1,r)
break
default:p=null
q=null}o=A.am3(s,q,p)
return new A.b_(r-(o.a.length-o.c),B.M)}}
A.a8l.prototype={
fV(a){return new A.b_(this.a.b.mx(a).a,B.C)},
fW(a){return new A.b_(this.a.b.mx(a).b,B.M)}}
A.a_g.prototype={
fV(a){return new A.b_(this.a.AP(a).a,B.C)},
fW(a){return new A.b_(this.a.AP(a).b,B.M)}}
A.UZ.prototype={
fV(a){return B.cN},
fW(a){return new A.b_(this.a.length,B.M)}}
A.a8j.prototype={
fV(a){var s,r=a.a,q=this.a,p=q.length
if(r<=p)r=r===p&&a.b===B.C
else r=!0
if(r)a=new A.b_(p,B.M)
s=a.a
if(s<=0)return B.cN
if(a.b===B.C&&!A.a7C(B.c.ab(q,s)))return a
for(;--s,s>=0;)if(!A.a7C(B.c.ab(q,s)))return new A.b_(s+1,B.M)
return B.cN},
fW(a){var s,r=a.a,q=this.a,p=q.length
if(r>=p)return new A.b_(p,B.M)
if(r>=0)r=r===0&&a.b===B.M
else r=!0
if(r)a=B.cN
s=a.a
if(a.b===B.M&&!A.a7C(B.c.ab(q,s-1)))return a
for(;s<p;++s)if(!A.a7C(B.c.ab(q,s)))return new A.b_(s,B.C)
return new A.b_(p,B.M)}}
A.Mn.prototype={
fV(a){return this.a.fV(this.b.fV(a))},
fW(a){return this.a.fW(this.b.fW(a))}}
A.Ik.prototype={
CT(a){if(this.a)switch(a.b.a){case 0:return new A.b_(a.a,B.C)
case 1:return new A.b_(a.a+1,B.M)}else switch(a.b.a){case 0:return new A.b_(a.a-1,B.C)
case 1:return new A.b_(a.a,B.M)}},
fV(a){return this.CT(a)},
fW(a){return this.CT(a)}}
A.Kd.prototype={
i(a){var s,r,q=this,p=", isDirectional: "
if(!q.gkl())return"TextSelection.invalid"
s=""+q.c
r=""+q.f
return q.a===q.b?"TextSelection.collapsed(offset: "+s+", affinity: "+q.e.i(0)+p+r+")":"TextSelection(baseOffset: "+s+", extentOffset: "+q.d+p+r+")"},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof A.Kd))return!1
if(!r.gkl())return!b.gkl()
if(b.c===r.c)if(b.d===r.d)s=(r.a!==r.b||b.e===r.e)&&b.f===r.f
else s=!1
else s=!1
return s},
gu(a){var s,r=this
if(!r.gkl())return A.U(-B.f.gu(1),-B.f.gu(1),A.eK(B.C),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)
s=r.a===r.b?A.eK(r.e):A.eK(B.C)
return A.U(B.f.gu(r.c),B.f.gu(r.d),s,B.nG.gu(r.f),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.Jn.prototype={
E(){return"SelectionChangedCause."+this.b}}
A.Kb.prototype={
gRo(){var s=this.c
s===$&&A.b()
return s},
qa(a){return this.VW(a)},
VW(a){var s=0,r=A.a4(t.z),q,p=2,o,n=this,m,l,k,j,i
var $async$qa=A.a0(function(b,c){if(b===1){o=c
s=p}while(true)switch(s){case 0:p=4
s=7
return A.a5(n.w_(a),$async$qa)
case 7:k=c
q=k
s=1
break
p=2
s=6
break
case 4:p=3
i=o
m=A.ah(i)
l=A.ay(i)
k=A.bk("during method call "+a.a)
A.dZ(new A.bE(m,l,"services library",k,new A.a7B(a),!1))
throw i
s=6
break
case 3:s=2
break
case 6:case 1:return A.a2(q,r)
case 2:return A.a1(o,r)}})
return A.a3($async$qa,r)},
w_(a){return this.Vg(a)},
Vg(a){var s=0,r=A.a4(t.z),q,p=this,o,n,m,l,k,j
var $async$w_=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:j=a.a
if(j==="TextInputClient.focusElement"){p.f.j(0,J.aL(t.j.a(a.b),0))
s=1
break}else if(j==="TextInputClient.requestElementsInRect"){o=J.l6(t.j.a(a.b),t.fY)
n=A.n(o).h("aC<W.E,S>")
m=p.f
l=A.n(m).h("b7<1>")
k=l.h("dA<q.E,z<@>>")
q=A.aA(new A.dA(new A.aN(new A.b7(m,l),new A.a7y(p,A.aA(new A.aC(o,new A.a7z(),n),!0,n.h("bl.E"))),l.h("aN<q.E>")),new A.a7A(p),k),!0,k.h("q.E"))
s=1
break}else if(j==="TextInputClient.scribbleInteractionBegan"){s=1
break}else if(j==="TextInputClient.scribbleInteractionFinished"){s=1
break}s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$w_,r)}}
A.a7B.prototype={
$0(){var s=null
return A.a([A.ho("call",this.a,!0,B.aI,s,!1,s,s,B.ap,s,!1,!0,!0,B.aV,s,t.fw)],t.F)},
$S:15}
A.a7z.prototype={
$1(a){return a},
$S:251}
A.a7y.prototype={
$1(a){this.a.f.j(0,a)
return!1},
$S:35}
A.a7A.prototype={
$1(a){var s=this.a.f.j(0,a),r=s.gxE(s)
s=[a]
B.b.J(s,[r.ght(r),r.gAq(r),r.gbg(r),r.gbI(r)])
return s},
$S:252}
A.wL.prototype={}
A.O7.prototype={}
A.Rm.prototype={}
A.aew.prototype={
$1(a){this.a.sbZ(a)
return!1},
$S:42}
A.aJ.prototype={}
A.bj.prototype={
fq(a){this.b=a},
ib(a,b){this.gt7()
return!0},
gt7(){return!0},
r9(a){return!0},
ZC(a){var s=this.a
s.b=!0
s.a.push(a)
return null},
Kx(a){return this.a.v(0,a)}}
A.lr.prototype={}
A.lj.prototype={
d_(a){return this.c.$1(a)}}
A.SA.prototype={
Jo(a,b,c){if(a instanceof A.lr)return a.m5(b,c)
else return a.d_(b)}}
A.ip.prototype={
ai(){return new A.x7(A.b8(t.nT),new A.F(),B.m)}}
A.SC.prototype={
$1(a){var s=a.f
s.toString
t.ke.a(s)
return!1},
$S:41}
A.SF.prototype={
$1(a){var s,r=this,q=a.f
q.toString
s=A.agn(t.ke.a(q),r.b,r.d)
if(s!=null){r.c.BN(a,null)
r.a.a=s
return!0}return!1},
$S:41}
A.SD.prototype={
$1(a){var s,r=a.f
r.toString
s=A.agn(t.ke.a(r),this.b,this.c)
if(s!=null){this.a.a=s
return!0}return!1},
$S:41}
A.SG.prototype={
$1(a){var s,r,q=this,p=a.f
p.toString
s=q.b
r=A.agn(t.ke.a(p),s,q.d)
p=r!=null
if(p&&r.ib(0,s))q.a.a=A.ajK(a).Jo(r,s,q.c)
return p},
$S:41}
A.x7.prototype={
aB(){this.aQ()
this.Gt()},
Tv(a){this.au(new A.a8s(this))},
Gt(){var s,r,q,p,o=this,n=o.a.d
n=n.gaZ(n)
s=A.k4(n,A.n(n).h("q.E"))
r=o.d.k7(s)
n=o.d
n.toString
q=s.k7(n)
for(n=r.ga7(r),p=o.gE6();n.q();)n.gF(n).Kx(p)
for(n=q.ga7(q);n.q();)n.gF(n).ZC(p)
o.d=s},
aS(a){this.bi(a)
this.Gt()},
m(){var s,r,q,p,o=this
o.aM()
for(s=o.d,s=A.jd(s,s.r),r=o.gE6(),q=A.n(s).c;s.q();){p=s.d;(p==null?q.a(p):p).Kx(r)}o.d=null},
M(a){var s=this.a
return new A.x6(null,s.d,this.e,s.e,null)}}
A.a8s.prototype={
$0(){this.a.e=new A.F()},
$S:0}
A.x6.prototype={
bW(a){var s
if(this.w===a.w)s=!A.afM(a.r,this.r)
else s=!0
return s}}
A.KI.prototype={
d_(a){a.a64()
return null}}
A.Dd.prototype={
r9(a){return this.c},
d_(a){}}
A.nn.prototype={}
A.nD.prototype={}
A.hq.prototype={}
A.Db.prototype={}
A.mk.prototype={}
A.Ih.prototype={
ib(a,b){var s,r,q,p,o,n=$.ai.I$.f.f
if(n==null||n.e==null)return!1
for(s=t.q,r=0;r<2;++r){q=B.GX[r]
p=n.e
p.toString
o=A.agp(p,q,s)
if(o!=null&&o.ib(0,q)){this.c=o
this.d=q
return!0}}return!1},
d_(a){var s,r=this.c
r===$&&A.b()
s=this.d
s===$&&A.b()
r.d_(s)}}
A.O1.prototype={
VG(a,b,c){var s
a.fq(this.gk0())
s=A.n(this).h("lr<1>").b(a)?a.m5(b,c):a.d_(b)
a.fq(null)
return s},
m5(a,b){var s=this,r=A.ago(s.gtd(),A.n(s).c)
return r==null?s.a39(a,s.b,b):s.VG(r,a,b)},
d_(a){return this.m5(a,null)},
gt7(){var s=this,r=A.agp(s.gtd(),null,A.n(s).c)
if(r!=null){r.fq(s.gk0())
r.gt7()
r.fq(null)}else s.gk0().gt7()
return!0},
ib(a,b){var s,r=this,q=A.ago(r.gtd(),A.n(r).c),p=q==null
if(!p)q.fq(r.gk0())
s=(p?r.gk0():q).ib(0,b)
if(!p)q.fq(null)
return s},
r9(a){var s,r=this,q=A.ago(r.gtd(),A.n(r).c),p=q==null
if(!p)q.fq(r.gk0())
s=(p?r.gk0():q).r9(a)
if(!p)q.fq(null)
return s}}
A.yi.prototype={
a39(a,b,c){var s=this.e
if(b==null)return s.d_(a)
else return s.d_(a)},
gk0(){return this.e},
gtd(){return this.f}}
A.KQ.prototype={}
A.KP.prototype={}
A.N4.prototype={}
A.zF.prototype={
fq(a){this.MG(a)
this.e.fq(a)}}
A.r2.prototype={
aD(a){var s=new A.vu(this.e,!0,null,A.at(),this.$ti.h("vu<1>"))
s.aG()
s.saR(null)
return s},
aK(a,b){b.sn(0,this.e)
b.sMt(!0)}}
A.x4.prototype={
ai(){return new A.zn(B.m)}}
A.zn.prototype={
gVt(){var s,r
$.ai.toString
s=$.aK()
if(s.gxX()!=="/"){$.ai.toString
s=s.gxX()}else{r=this.a.ax
$.ai.toString
s=s.gxX()
s=s}return s},
aB(){var s=this
s.aQ()
s.Zf()
$.ai.toString
s.r=s.wD($.aK().a.f,s.a.fy)
$.ai.ah$.push(s)},
aS(a){this.bi(a)
this.GN(a)},
m(){B.b.v($.ai.ah$,this)
var s=this.d
if(s!=null)s.m()
this.aM()},
D8(){var s=this.d
if(s!=null)s.m()
this.e=this.d=null},
GN(a){var s,r=this
r.a.toString
if(r.gGW()){r.D8()
if(r.f==null||r.a.c!=a.c){s=r.a.c
r.f=s==null?new A.jR(r,t.yh):s}}else{r.D8()
r.f=null}},
Zf(){return this.GN(null)},
gGW(){var s=this.a
if(s.Q==null){s=s.as
s=s==null?null:s.gbA(s)
s=s===!0||this.a.d!=null||!1}else s=!0
return s},
Wv(a){var s,r=this,q=a.a,p=q==="/"&&r.a.Q!=null?new A.adF(r):r.a.as.j(0,q)
if(p!=null)return r.a.f.$1$2(a,p,t.z)
s=r.a.d
if(s!=null)return s.$1(a)
return null},
WJ(a){return this.a.at.$1(a)},
iQ(){var s=0,r=A.a4(t.y),q,p=this,o,n
var $async$iQ=A.a0(function(a,b){if(a===1)return A.a1(b,r)
while(true)switch(s){case 0:p.a.toString
o=p.f
n=o==null?null:o.gbn()
if(n==null){q=!1
s=1
break}q=n.JQ()
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$iQ,r)},
o5(a){return this.a13(a)},
a13(a){var s=0,r=A.a4(t.y),q,p=this,o,n
var $async$o5=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:p.a.toString
o=p.f
n=o==null?null:o.gbn()
if(n==null){q=!1
s=1
break}o=n.wH(a,null,t.X)
o.toString
o=A.amJ(o,B.Cn,!1,null)
n.e.push(o)
n.vC()
n.CG(o.a)
q=!0
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$o5,r)},
wD(a,b){this.a.toString
return A.azT(a,b)},
y3(a){var s=this,r=s.wD(a,s.a.fy)
if(!r.k(0,s.r))s.au(new A.adI(s,r))},
M(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g={}
g.a=null
s=i.a
s.toString
if(i.gGW()){s=i.f
r=i.gVt()
q=i.a
p=q.e==null?A.aBa():new A.adG(i)
o=q.ay
o.toString
g.a=A.akx(!0,new A.uQ(r,i.gWu(),i.gWI(),o,"nav",p,!0,s),"Navigator Scope",h,h)
s=q}else{s=i.a
s.toString}g.b=null
n=new A.hk(new A.adH(g,i),h)
g.b=n
n=A.rT(n,h,B.cM,!0,s.cy,h,h,B.aP)
g.b=n
s=$.ax2
if(s)m=new A.HW(15,!1,!1,h)
else m=h
if(m!=null)g.b=A.hW(B.aR,A.a([n,A.Ib(h,m,h,h,0,0,0,h)],t.E),B.R,B.b7)
s=i.a
r=s.CW
s=s.db
s=A.b2(255,s.gn(s)>>>16&255,s.gn(s)>>>8&255,s.gn(s)&255)
g=g.b
l=i.wD(A.a([i.a.dx],t.as),i.a.fy)
q=t.eu
p=A.a([],q)
B.b.J(p,i.a.dy)
p.push(B.Eh)
q=A.a(p.slice(0),q)
k=new A.ua(l,q,new A.Kl(r,s,g,h),h)
A.dp(a)
g=i.a
j=new A.y1(k,h)
k=j
g=g.p3
s=A.ax1()
r=A.os($.apV(),t.n,t.nT)
q=t.B8
p=t.dc
r.l(0,B.C5,new A.yi(new A.p1(new A.bh(A.a([],q),p)),a,!1,!1,!1,!1,new A.bh(A.a([],q),p),t.uq.h("yi<bj.T>")))
return new A.vJ(new A.wb(A.ahE(new A.D2(A.SB(r,A.aky(new A.K6(new A.wc(k,h),h),new A.vq(A.y(t.j5,t.uJ)))),h),"<Default WidgetsApp Shortcuts>",s),h),g,h)}}
A.adF.prototype={
$1(a){var s=this.a.a.Q
s.toString
return s},
$S:13}
A.adI.prototype={
$0(){this.a.r=this.b},
$S:0}
A.adG.prototype={
$2(a,b){return this.a.a.e.$1(b)},
$S:127}
A.adH.prototype={
$1(a){return this.b.a.ch.$2(a,this.a.a)},
$S:13}
A.RY.prototype={}
A.nL.prototype={
E(){return"ConnectionState."+this.b}}
A.eS.prototype={
i(a){var s=this
return"AsyncSnapshot("+s.a.i(0)+", "+A.h(s.b)+", "+A.h(s.c)+", "+A.h(s.d)+")"},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return s.$ti.b(b)&&b.a===s.a&&J.f(b.b,s.b)&&J.f(b.c,s.c)&&b.d==s.d},
gu(a){return A.U(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.o4.prototype={
ai(){return new A.xB(B.m,this.$ti.h("xB<1>"))}}
A.xB.prototype={
aB(){var s=this
s.aQ()
s.a.toString
s.e=new A.eS(B.ne,null,null,null,s.$ti.h("eS<1>"))
s.Ga()},
aS(a){var s,r=this
r.bi(a)
if(a.c!==r.a.c){if(r.d!=null){r.d=null
s=r.e
s===$&&A.b()
r.e=new A.eS(B.ne,s.b,s.c,s.d,s.$ti)}r.Ga()}},
M(a){var s,r=this.a
r.toString
s=this.e
s===$&&A.b()
return r.d.$2(a,s)},
m(){this.d=null
this.aM()},
Ga(){var s,r=this,q=r.a
q.toString
s=r.d=new A.F()
q.c.dV(new A.aa2(r,s),new A.aa3(r,s),t.H)
q=r.e
q===$&&A.b()
if(q.a!==B.ec)r.e=new A.eS(B.F9,q.b,q.c,q.d,q.$ti)}}
A.aa2.prototype={
$1(a){var s=this.a
if(s.d===this.b)s.au(new A.aa1(s,a))},
$S(){return this.a.$ti.h("ax(1)")}}
A.aa1.prototype={
$0(){var s=this.a
s.e=new A.eS(B.ec,this.b,null,null,s.$ti.h("eS<1>"))},
$S:0}
A.aa3.prototype={
$2(a,b){var s=this.a
if(s.d===this.b)s.au(new A.aa0(s,a,b))},
$S:31}
A.aa0.prototype={
$0(){var s=this.a
s.e=new A.eS(B.ec,null,this.b,this.c,s.$ti.h("eS<1>"))},
$S:0}
A.r7.prototype={
ai(){return new A.xc(B.m)}}
A.xc.prototype={
aB(){this.aQ()
this.Gy()},
aS(a){this.bi(a)
this.Gy()},
Gy(){this.e=new A.d6(this.gQF(),this.a.c,null,t.dm)},
m(){var s,r,q=this.d
if(q!=null)for(q=A.iJ(q,q.r);q.q();){s=q.d
r=this.d.j(0,s)
r.toString
s.G(0,r)}this.aM()},
QG(a){var s,r=this,q=a.a,p=r.d
if(p==null)p=r.d=A.y(t.yF,t.M)
p.l(0,q,r.RW(q))
p=r.d.j(0,q)
p.toString
q.W(0,p)
if(!r.f){r.f=!0
s=r.DS()
if(s!=null)r.GJ(s)
else $.bK.ax$.push(new A.a8N(r))}return!1},
DS(){var s={},r=this.c
r.toString
s.a=null
r.aP(new A.a8S(s))
return t.ot.a(s.a)},
GJ(a){var s,r
this.c.toString
s=this.f
r=this.e
r===$&&A.b()
a.CO(t.CR.a(A.au1(r,s)))},
RW(a){return new A.a8R(this,a)},
M(a){var s=this.f,r=this.e
r===$&&A.b()
return new A.tX(s,r,null)}}
A.a8N.prototype={
$1(a){var s,r=this.a
if(r.c==null)return
s=r.DS()
s.toString
r.GJ(s)},
$S:2}
A.a8S.prototype={
$1(a){this.a.a=a},
$S:6}
A.a8R.prototype={
$0(){var s=this.a
s.d.v(0,this.b)
if(s.d.a===0)if($.bK.CW$.a<3)s.au(new A.a8P(s))
else{s.f=!1
A.dF(new A.a8Q(s))}},
$S:0}
A.a8P.prototype={
$0(){this.a.f=!1},
$S:0}
A.a8Q.prototype={
$0(){var s=this.a
if(s.c!=null&&s.d.a===0)s.au(new A.a8O(s))},
$S:0}
A.a8O.prototype={
$0(){},
$S:0}
A.on.prototype={}
A.EZ.prototype={}
A.nw.prototype={
pS(){var s=new A.EZ($.bs())
this.ho$=s
this.c.cT(new A.on(s))},
pf(){var s,r=this
if(r.gtW()){if(r.ho$==null)r.pS()}else{s=r.ho$
if(s!=null){s.az()
s.dE()
r.ho$=null}}},
M(a){if(this.gtW()&&this.ho$==null)this.pS()
return B.a09}}
A.NS.prototype={
M(a){throw A.c(A.Eb("Widgets that mix AutomaticKeepAliveClientMixin into their State must call super.build() but must ignore the return value of the superclass."))}}
A.QP.prototype={
Bd(a,b){},
md(a){A.amP(this,new A.adr(this,a))}}
A.adr.prototype={
$1(a){var s=a.z
if(s!=null&&s.B(0,this.a))a.b2()},
$S:6}
A.adq.prototype={
$1(a){A.amP(a,this.a)},
$S:6}
A.QQ.prototype={
bM(a){var s=A.fL(t.h,t.X)
return new A.QP(s,this,B.a4)}}
A.eY.prototype={
bW(a){return this.w!==a.w}}
A.rN.prototype={
aD(a){var s=new A.IB(this.e,this.f,this.r,!1,!1,null,A.at())
s.aG()
s.saR(null)
return s},
aK(a,b){b.stA(this.e)
b.sIM(this.f)
b.stF(this.r)
b.cf=b.br=!1},
o7(a){a.stA(null)
a.sIM(null)}}
A.nH.prototype={
aD(a){var s=new A.Iy(null,this.f,null,A.at())
s.aG()
s.saR(null)
return s},
aK(a,b){b.snP(null)
b.sr7(this.f)},
o7(a){a.snP(null)}}
A.AR.prototype={
aD(a){var s=new A.Ix(this.e,this.f,null,A.at())
s.aG()
s.saR(null)
return s},
aK(a,b){b.snP(this.e)
b.sr7(this.f)},
o7(a){a.snP(null)}}
A.I1.prototype={
aD(a){var s=this,r=new A.IP(s.e,s.r,s.w,s.y,s.x,null,s.f,null,A.at())
r.aG()
r.saR(null)
return r},
aK(a,b){var s=this
b.sd3(0,s.e)
b.sr7(s.f)
b.sa_c(0,s.r)
b.si1(0,s.w)
b.sae(0,s.x)
b.sfY(0,s.y)}}
A.I2.prototype={
aD(a){var s=this,r=new A.IQ(s.r,s.x,s.w,s.e,s.f,null,A.at())
r.aG()
r.saR(null)
return r},
aK(a,b){var s=this
b.snP(s.e)
b.sr7(s.f)
b.si1(0,s.r)
b.sae(0,s.w)
b.sfY(0,s.x)}}
A.pB.prototype={
aD(a){var s=this,r=A.dH(a),q=new A.IZ(s.w,null,A.at())
q.aG()
q.saR(null)
q.sbk(0,s.e)
q.se4(s.r)
q.sbC(r)
q.slX(s.x)
q.sK9(0,null)
return q},
aK(a,b){var s=this
b.sbk(0,s.e)
b.sK9(0,null)
b.se4(s.r)
b.sbC(A.dH(a))
b.br=s.w
b.slX(s.x)}}
A.E4.prototype={
aD(a){var s=new A.vv(this.e,this.f,A.dH(a),B.l,null,A.at())
s.aG()
s.saR(null)
return s},
aK(a,b){b.syz(this.e)
b.se4(this.f)
b.sbC(A.dH(a))
if(B.l!==b.dL){b.dL=B.l
b.ap()
b.b0()}}}
A.El.prototype={
aD(a){var s=new A.IG(this.e,this.f,null,A.at())
s.aG()
s.saR(null)
return s},
aK(a,b){b.sa5t(this.e)
b.R=this.f}}
A.hH.prototype={
aD(a){var s=new A.IN(this.e,A.dH(a),null,A.at())
s.aG()
s.saR(null)
return s},
aK(a,b){b.sdi(0,this.e)
b.sbC(A.dH(a))}}
A.l8.prototype={
aD(a){var s=new A.IS(this.f,this.r,this.e,A.dH(a),null,A.at())
s.aG()
s.saR(null)
return s},
aK(a,b){b.se4(this.e)
b.sa5G(this.f)
b.sa2B(this.r)
b.sbC(A.dH(a))}}
A.ln.prototype={}
A.rO.prototype={
aD(a){var s=new A.IC(this.e,null,A.at())
s.aG()
s.saR(null)
return s},
aK(a,b){b.sxZ(this.e)}}
A.u1.prototype={
nF(a){var s,r,q=a.e
q.toString
t.DU.a(q)
s=this.f
if(q.e!==s){q.e=s
r=a.c
if(r instanceof A.x)r.a8()}}}
A.rM.prototype={
aD(a){var s=new A.IA(this.e,0,null,null,A.at())
s.aG()
s.J(0,null)
return s},
aK(a,b){b.sxZ(this.e)}}
A.wg.prototype={
aD(a){return A.alB(A.nA(this.f,this.e))},
aK(a,b){b.sHa(A.nA(this.f,this.e))},
bV(){var s,r=this,q=r.e
if(q===1/0&&r.f===1/0)s="SizedBox.expand"
else s=q===0&&r.f===0?"SizedBox.shrink":"SizedBox"
q=r.a
return q==null?s:s+"-"+q.i(0)}}
A.fC.prototype={
aD(a){return A.alB(this.e)},
aK(a,b){b.sHa(this.e)}}
A.F6.prototype={
aD(a){var s=new A.IJ(this.e,this.f,null,A.at())
s.aG()
s.saR(null)
return s},
aK(a,b){b.sa3O(0,this.e)
b.sa3L(0,this.f)}}
A.uX.prototype={
aD(a){var s=new A.IM(this.e,null,A.at())
s.aG()
s.saR(null)
return s},
aK(a,b){b.stn(this.e)},
bM(a){return new A.NZ(this,B.a4)}}
A.NZ.prototype={}
A.wq.prototype={
aD(a){var s=A.dH(a)
s=new A.vB(this.e,s,this.r,this.w,A.at(),0,null,null,A.at())
s.aG()
s.J(0,null)
return s},
aK(a,b){var s
b.se4(this.e)
s=A.dH(a)
b.sbC(s)
s=this.r
if(b.ah!==s){b.ah=s
b.a8()}s=this.w
if(s!==b.aW){b.aW=s
b.ap()
b.b0()}}}
A.mi.prototype={
nF(a){var s,r,q,p=this,o=a.e
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
if(q instanceof A.x)q.a8()}}}
A.Ic.prototype={
M(a){var s,r,q,p=this,o=null,n=a.a5(t.I)
n.toString
s=p.c
r=p.e
switch(n.w.a){case 0:break
case 1:q=s
s=r
r=q
break
default:s=o
r=s}return A.Ib(p.f,p.x,o,o,r,s,p.d,p.r)}}
A.ts.prototype={
gWi(){switch(this.e.a){case 0:return!0
case 1:var s=this.w
return s===B.ba||s===B.Fa}},
u2(a){var s=this.x
s=this.gWi()?A.dH(a):null
return s},
aD(a){var s=this
return A.avO(B.l,s.w,s.e,s.f,s.r,s.z,s.u2(a),s.y)},
aK(a,b){var s=this,r=s.e
if(b.L!==r){b.L=r
b.a8()}r=s.f
if(b.t!==r){b.t=r
b.a8()}r=s.r
if(b.I!==r){b.I=r
b.a8()}r=s.w
if(b.ao!==r){b.ao=r
b.a8()}r=s.u2(a)
if(b.ah!=r){b.ah=r
b.a8()}r=s.y
if(b.aW!==r){b.aW=r
b.a8()}if(B.l!==b.ce){b.ce=B.l
b.ap()
b.b0()}}}
A.J6.prototype={}
A.AV.prototype={}
A.o2.prototype={
nF(a){var s,r,q,p=a.e
p.toString
t.uc.a(p)
s=this.f
if(p.e!==s){p.e=s
r=!0}else r=!1
s=this.r
if(p.f!==s){p.f=s
r=!0}if(r){q=a.c
if(q instanceof A.x)q.a8()}}}
A.DZ.prototype={}
A.J0.prototype={
aD(a){var s,r,q,p=this,o=null,n=p.e,m=p.r
if(m==null){m=a.a5(t.I)
m.toString
m=m.w}s=p.x
r=A.ahe(a)
q=s===B.bl?"\u2026":o
s=new A.vx(A.a7E(q,r,p.z,p.as,n,p.f,m,p.ax,p.y,p.at),p.w,s,p.ch,0,o,o,A.at())
s.aG()
s.J(0,o)
s.vA(n)
s.sp_(p.ay)
return s},
aK(a,b){var s,r=this
b.stP(0,r.e)
b.sAf(0,r.f)
s=r.r
if(s==null){s=a.a5(t.I)
s.toString
s=s.w}b.sbC(s)
b.sMv(r.w)
b.sa4b(0,r.x)
b.sAg(r.y)
b.szd(r.z)
b.sME(r.as)
b.sAh(r.at)
b.sKV(r.ax)
s=A.ahe(a)
b.sz8(0,s)
b.sp_(r.ay)
b.sM4(r.ch)}}
A.a2W.prototype={
$1(a){return!0},
$S:45}
A.Io.prototype={
aD(a){var s=this,r=s.d
r=r==null?null:r.cH(0)
r=new A.IH(r,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.CW,!1,null,!1,A.at())
r.aG()
r.Z4()
return r},
aK(a,b){var s=this,r=s.d
b.sf7(0,r==null?null:r.cH(0))
b.ao=s.e
b.sbg(0,s.f)
b.sbI(0,s.r)
b.sLW(0,s.w)
b.sae(0,s.x)
b.stu(0,s.y)
b.sa_N(s.Q)
b.syz(s.as)
b.se4(s.at)
b.sa4T(0,s.ax)
b.sa_p(s.ay)
b.sa3J(!1)
b.sbC(null)
b.syW(s.CW)
b.syX(!1)
b.slX(s.z)},
o7(a){a.sf7(0,null)}}
A.F7.prototype={
aD(a){var s=this,r=null,q=new A.IR(s.e,r,s.r,r,s.x,s.y,r,r,s.as,s.at,r,A.at())
q.aG()
q.saR(r)
return q},
aK(a,b){var s=this
b.cI=s.e
b.bw=null
b.aq=s.r
b.aX=null
b.aT=s.x
b.bx=s.y
b.bQ=b.dJ=null
b.ak=s.as
b.A=s.at}}
A.H8.prototype={
aD(a){var s=this,r=new A.IL(!0,s.e,s.f,s.r,s.w,B.aC,null,A.at())
r.aG()
r.saR(null)
return r},
aK(a,b){var s,r=this
b.bw=r.e
b.aq=r.f
b.aX=r.r
s=r.w
if(!b.aT.k(0,s)){b.aT=s
b.ap()}if(b.A!==B.aC){b.A=B.aC
b.ap()}}}
A.hS.prototype={
aD(a){var s=new A.IU(null,A.at())
s.aG()
s.saR(null)
return s}}
A.hx.prototype={
aD(a){var s=new A.vw(this.e,this.f,null,A.at())
s.aG()
s.saR(null)
return s},
aK(a,b){b.sJ9(this.e)
b.syQ(this.f)}}
A.A9.prototype={
aD(a){var s=new A.vs(!1,null,null,A.at())
s.aG()
s.saR(null)
return s},
aK(a,b){b.sH1(!1)
b.syQ(null)}}
A.w6.prototype={
aD(a){var s=this,r=new A.vz(s.e,s.f,s.r,!1,s.E3(a),null,A.at())
r.aG()
r.saR(null)
r.Gv(r.A)
return r},
E3(a){var s,r=this.e,q=r.p4
if(q!=null)return q
if(r.fx==null){if(r.go==null)r=r.p2!=null
else r=!0
s=r}else s=!0
if(!s)return null
return A.dH(a)},
aK(a,b){var s=this
b.sa0_(s.f)
b.sa1s(s.r)
b.sa1q(!1)
b.sKj(s.e)
b.sbC(s.E3(a))}}
A.H3.prototype={
aD(a){var s=new A.IK(null,A.at())
s.aG()
s.saR(null)
return s}}
A.Ay.prototype={
aD(a){var s=new A.Iw(!0,null,A.at())
s.aG()
s.saR(null)
return s},
aK(a,b){b.sa_b(!0)}}
A.th.prototype={
aD(a){var s=new A.IF(this.e,null,A.at())
s.aG()
s.saR(null)
return s},
aK(a,b){b.sa1r(this.e)}}
A.EM.prototype={
aD(a){var s=new A.II(this.e,null,A.at())
s.aG()
s.saR(null)
return s},
aK(a,b){b.syR(0,this.e)}}
A.k2.prototype={
M(a){return this.c}}
A.hk.prototype={
M(a){return this.c.$1(a)}}
A.ry.prototype={
aD(a){var s=new A.ym(this.e,B.aC,null,A.at())
s.aG()
s.saR(null)
return s},
aK(a,b){t.oZ.a(b).sae(0,this.e)}}
A.ym.prototype={
sae(a,b){if(b.k(0,this.cI))return
this.cI=b
this.ap()},
aE(a,b){var s,r,q,p,o,n,m=this
if(m.k3.LT(0,B.Q)){s=a.gbz(a)
r=m.k3
q=b.a
p=b.b
o=r.a
r=r.b
n=$.ao().bd()
n.sae(0,m.cI)
s.cc(new A.B(q,p,q+o,p+r),n)}s=m.t$
if(s!=null)a.eL(s,b)}}
A.adK.prototype={
$0(){var s,r,q=this,p=q.b
if(p==null||t.c.b(q.c)){p=q.a.ry$
p===$&&A.b()
p=p.e
p.toString
s=q.c
s=s.gbs(s)
r=A.arU()
p.bR(r,s)
p=r}return p},
$S:261}
A.adL.prototype={
$1(a){var s=a==null?t.K.a(a):a
return this.a.j7(s)},
$S:262}
A.dd.prototype={
iQ(){return A.bx(!1,t.y)},
o5(a){return A.bx(!1,t.y)},
a14(a){var s=a.a
s.toString
return this.o5(s)},
rl(){},
I3(){},
I2(){},
y3(a){},
I1(a){}}
A.x5.prototype={
ZJ(a){return this.ah$.push(a)},
a22(){this.a19($.aK().a.f)},
a19(a){var s,r,q
for(s=this.ah$,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q)s[q].y3(a)},
rU(){var s=0,r=A.a4(t.H),q,p=this,o,n,m
var $async$rU=A.a0(function(a,b){if(a===1)return A.a1(b,r)
while(true)switch(s){case 0:o=A.aA(p.ah$,!0,t.nR),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.a5(o[m].iQ(),$async$rU)
case 6:if(b){s=1
break}case 4:++m
s=3
break
case 5:A.a73()
case 1:return A.a2(q,r)}})
return A.a3($async$rU,r)},
rV(a){return this.a2f(a)},
a2f(a){var s=0,r=A.a4(t.H),q,p=this,o,n,m
var $async$rV=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:o=A.aA(p.ah$,!0,t.nR),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.a5(o[m].o5(a),$async$rV)
case 6:if(c){s=1
break}case 4:++m
s=3
break
case 5:case 1:return A.a2(q,r)}})
return A.a3($async$rV,r)},
q3(a){return this.UQ(a)},
UQ(a){var s=0,r=A.a4(t.H),q,p=this,o,n,m,l
var $async$q3=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:o=A.aA(p.ah$,!0,t.nR),n=o.length,m=J.aG(a),l=0
case 3:if(!(l<n)){s=5
break}s=6
return A.a5(o[l].a14(new A.oZ(A.bz(m.j(a,"location")),m.j(a,"state"))),$async$q3)
case 6:if(c){s=1
break}case 4:++l
s=3
break
case 5:case 1:return A.a2(q,r)}})
return A.a3($async$q3,r)},
Uu(a){switch(a.a){case"popRoute":return this.rU()
case"pushRoute":return this.rV(A.bz(a.b))
case"pushRouteInformation":return this.q3(t.G.a(a.b))}return A.bx(null,t.z)},
TI(){this.yo()},
LX(a){A.cc(B.u,new A.a8k(this,a))},
$iam:1,
$idx:1}
A.adJ.prototype={
$1(a){var s,r,q=$.bK
q.toString
s=this.a
r=s.a
r.toString
q.KC(r)
s.a=null
this.b.by$.f2(0)},
$S:100}
A.a8k.prototype={
$0(){var s,r,q=this.a,p=q.ce$
q.c7$=!0
s=q.ry$
s===$&&A.b()
s=s.e
s.toString
r=q.I$
r.toString
q.ce$=new A.ml(this.b,s,"[root]",new A.jR(s,t.l9),t.go).a_4(r,t.jv.a(p))
if(p==null)$.bK.yo()},
$S:0}
A.ml.prototype={
bM(a){return new A.kj(this,B.a4,this.$ti.h("kj<1>"))},
aD(a){return this.d},
aK(a,b){},
a_4(a,b){var s,r={}
r.a=b
if(b==null){a.JL(new A.a2k(r,this,a))
s=r.a
s.toString
a.r0(s,new A.a2l(r))}else{b.bj=this
b.fM()}r=r.a
r.toString
return r},
bV(){return this.e}}
A.a2k.prototype={
$0(){var s=this.b,r=A.avP(s,s.$ti.c)
this.a.a=r
r.r=this.c},
$S:0}
A.a2l.prototype={
$0(){var s=this.a.a
s.toString
s.Cc(null,null)
s.qp()},
$S:0}
A.kj.prototype={
aP(a){var s=this.aU
if(s!=null)a.$1(s)},
j5(a){this.aU=null
this.kO(a)},
fb(a,b){this.Cc(a,b)
this.qp()},
ba(a,b){this.mQ(0,b)
this.qp()},
hy(){var s=this,r=s.bj
if(r!=null){s.bj=null
s.mQ(0,s.$ti.h("ml<1>").a(r))
s.qp()}s.Cb()},
qp(){var s,r,q,p,o,n,m,l=this
try{o=l.aU
n=l.f
n.toString
l.aU=l.dC(o,l.$ti.h("ml<1>").a(n).c,B.mM)}catch(m){s=A.ah(m)
r=A.ay(m)
o=A.bk("attaching to the render tree")
q=new A.bE(s,r,"widgets library",o,null,!1)
A.dZ(q)
p=A.agP(q)
l.aU=l.dC(null,p,B.mM)}},
ga9(){return this.$ti.h("aE<1>").a(A.bv.prototype.ga9.call(this))},
jc(a,b){var s=this.$ti
s.h("aE<1>").a(A.bv.prototype.ga9.call(this)).saR(s.c.a(a))},
jf(a,b,c){},
jq(a,b){this.$ti.h("aE<1>").a(A.bv.prototype.ga9.call(this)).saR(null)}}
A.KK.prototype={$iam:1}
A.zo.prototype={
eG(){this.MJ()
$.eg=this
var s=$.aK()
s.Q=this.gUB()
s.as=$.aa},
As(){this.MM()
this.vE()}}
A.zp.prototype={
eG(){this.PN()
$.bK=this},
ia(){this.MK()}}
A.zq.prototype={
eG(){var s,r,q,p,o=this
o.PP()
$.h0=o
o.be$!==$&&A.et()
o.be$=B.E6
s=new A.vG(A.b8(t.hp),$.bs())
B.iw.mE(s.gW8())
o.cd$=s
s=t.F3
r=new A.YK(A.y(s,t.lT),A.b8(t.vQ),A.a([],t.AV))
o.aU$!==$&&A.et()
o.aU$=r
q=$.aga()
p=A.a([],t.DG)
o.bj$!==$&&A.et()
s=o.bj$=new A.F_(r,q,p,A.b8(s))
p=$.aK()
p.at=s.ga1Z()
p.ax=$.aa
B.CI.uj(s.ga2h())
s=$.akV
if(s==null)s=$.akV=A.a([],t.e8)
s.push(o.gQK())
B.CK.uj(new A.adL(o))
B.CJ.uj(o.gUq())
B.c_.mE(o.gUz())
$.apC()
o.a4A()},
ia(){this.PQ()}}
A.zr.prototype={
eG(){this.PR()
$.eJ=this
var s=t.K
this.fF$=new A.Zc(A.y(s,t.fx),A.y(s,t.lM),A.y(s,t.s8))},
ot(){this.OP()
var s=this.fF$
s===$&&A.b()
s.X(0)},
j7(a){return this.a2n(a)},
a2n(a){var s=0,r=A.a4(t.H),q,p=this
var $async$j7=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:s=3
return A.a5(p.OQ(a),$async$j7)
case 3:switch(A.bz(J.aL(t.a.a(a),"type"))){case"fontsChange":p.yr$.az()
break}s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$j7,r)}}
A.zs.prototype={
eG(){this.PU()
$.a48=this
this.dJ$=$.aK().a.a}}
A.zt.prototype={
eG(){var s,r,q,p,o=this
o.PV()
$.kk=o
s=t.By
o.ry$=new A.I4(o.ga1k(),o.gV4(),o.gV8(),o.gV6(),A.a([],s),A.a([],s),A.a([],s),A.b8(t.d))
s=$.aK()
s.f=o.ga24()
r=s.r=$.aa
s.fy=o.ga2w()
s.go=r
s.k2=o.ga2a()
s.k3=r
s.p1=o.gV2()
s.p2=r
s.p3=o.gV0()
s.p4=r
r=new A.vC(B.Q,o.HW(),$.ck(),null,A.at())
r.aG()
r.saR(null)
q=o.ry$
q===$&&A.b()
q.sa57(r)
r=o.ry$.e
r.Q=r
q=t.W
q.a(A.J.prototype.gbp.call(r)).r.push(r)
p=r.GI()
r.ch.saV(0,p)
q.a(A.J.prototype.gbp.call(r)).z.push(r)
o.Mm(s.a.c)
o.at$.push(o.gUx())
s=o.rx$
if(s!=null)s.m()
s=t.S
r=$.bs()
o.rx$=new A.H9(new A.a08(B.lG,A.y(s,t.Df)),A.y(s,t.eg),r)
o.ax$.push(o.gVl())},
ia(){this.PS()},
ye(a,b,c){this.rx$.a5C(b,new A.adK(this,c,b))
this.N9(0,b,c)},
ii(){var s=0,r=A.a4(t.H),q=[],p=this,o
var $async$ii=A.a0(function(a,b){if(a===1)return A.a1(b,r)
while(true)switch(s){case 0:s=2
return A.a5(p.ML(),$async$ii)
case 2:o=$.ajO
if((o==null?null:o.a)==null)try{o=p.ry$
o===$&&A.b()
o.e.eM()}finally{}p.u9()
s=3
return A.a5(p.gIs(),$async$ii)
case 3:return A.a2(null,r)}})
return A.a3($async$ii,r)}}
A.zu.prototype={
ia(){this.PX()},
yG(){var s,r,q
this.Ol()
for(s=this.ah$,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q)s[q].rl()},
yM(){var s,r,q
this.On()
for(s=this.ah$,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q)s[q].I3()},
yI(){var s,r,q
this.Om()
for(s=this.ah$,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q)s[q].I2()},
rS(a){var s,r,q
this.OC(a)
for(s=this.ah$,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q)s[q].I1(a)},
ot(){var s,r
this.PT()
for(s=this.ah$.length,r=0;r<s;++r);},
yj(){var s,r,q=this,p={}
p.a=null
if(q.aW$){s=new A.adJ(p,q)
p.a=s
$.bK.ZT(s)}try{r=q.ce$
if(r!=null)q.I$.a_h(r)
q.Ok()
q.I$.a1x()}finally{}r=q.aW$=!1
p=p.a
if(p!=null)r=!(q.xr$||q.x2$===0)
if(r){q.aW$=!0
r=$.bK
r.toString
p.toString
r.KC(p)}},
ii(){var s=this.ce$
if(s!=null)this.I$.a4F(s,$.ajO)
return this.PY()}}
A.CV.prototype={
aD(a){var s=new A.ID(this.e,this.f,A.aiL(a,null),null,A.at())
s.aG()
s.saR(null)
return s},
aK(a,b){b.sa0P(this.e)
b.sxJ(A.aiL(a,null))
b.sbs(0,this.f)}}
A.nN.prototype={
gWL(){var s,r=this.r
if(r==null||r.gdi(r)==null)return this.e
s=r.gdi(r)
r=this.e
if(r==null)return s
s.toString
return r.C(0,s)},
M(a){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){s=o.x
if(s!=null)s=!(s.a>=s.b&&s.c>=s.d)
else s=!0}else s=!1
if(s)m=A.au8(new A.fC(B.me,n,n),0,0)
else{s=o.d
if(s!=null)m=new A.l8(s,n,n,m,n)}r=o.gWL()
if(r!=null)m=new A.hH(r,m,n)
s=o.f
if(s!=null)m=new A.ry(s,m,n)
s=o.as
if(s!==B.l){q=A.dH(a)
p=o.r
p.toString
m=A.ak1(m,s,new A.LY(q==null?B.t:q,p))}s=o.r
if(s!=null)m=A.akf(m,s,B.hz)
s=o.x
if(s!=null)m=new A.fC(s,m,n)
s=o.y
if(s!=null)m=new A.hH(s,m,n)
m.toString
return m}}
A.LY.prototype={
AL(a){return this.c.u0(new A.B(0,0,0+a.a,0+a.b),this.b)},
Bo(a){return!a.c.k(0,this.c)||a.b!==this.b}}
A.nR.prototype={
bW(a){return!J.f(this.w,a.w)||!J.f(this.x,a.x)}}
A.NT.prototype={
M(a){throw A.c(A.Eb("A DefaultSelectionStyle constructed with DefaultSelectionStyle.fallback cannot be incorporated into the widget tree, it is meant only to provide a fallback value returned by DefaultSelectionStyle.of() when no enclosing default selection style is present in a BuildContext."))}}
A.D2.prototype={
Tc(){var s=$.apf()
return s},
M(a){var s=this.c,r=this.Tc()
if(r!=null)s=A.ahE(s,"<Web Disabling Text Editing Shortcuts>",r)
return A.ahE(s,"<Default Text Editing Shortcuts>",A.asE())}}
A.Dc.prototype={
gaN(a){var s=this.a
if(s==null)return null
s=s.c
s.toString
return s}}
A.nV.prototype={
ai(){return new A.xq(A.Ij(null),A.Ij(null),B.m)},
a1O(a,b,c){return this.d.$3(a,b,c)},
a54(a,b,c){return this.e.$3(a,b,c)}}
A.xq.prototype={
aB(){var s,r=this
r.aQ()
s=r.a.c
r.d=s.gb_(s)
r.a.c.cF(r.guT())
r.Gu()},
CL(a){var s,r=this,q=r.d
q===$&&A.b()
s=r.Rg(a,q)
r.d=s
if(q!==s)r.Gu()},
aS(a){var s,r,q=this
q.bi(a)
s=a.c
if(s!==q.a.c){r=q.guT()
s.bU(r)
q.a.c.cF(r)
r=q.a.c
q.CL(r.gb_(r))}},
Rg(a,b){switch(a.a){case 0:case 3:return a
case 1:switch(b.a){case 0:case 3:case 1:return a
case 2:return b}break
case 2:switch(b.a){case 0:case 3:case 2:return a
case 1:return b}break}},
Gu(){var s=this,r=s.d
r===$&&A.b()
switch(r.a){case 0:case 1:s.e.saI(0,s.a.c)
s.f.saI(0,B.cd)
break
case 2:case 3:s.e.saI(0,B.cW)
s.f.saI(0,new A.eM(s.a.c,new A.bh(A.a([],t.A),t.Q),0))
break}},
m(){this.a.c.bU(this.guT())
this.aM()},
M(a){var s=this.a
return s.a1O(a,this.e,s.a54(a,this.f,s.f))}}
A.iH.prototype={
E(){return"KeyEventResult."+this.b}}
A.Lb.prototype={}
A.XR.prototype={
af(a){var s,r=this.a
if(r.ax===this){if(!r.gj8()){s=r.w
s=s!=null&&s.w===r}else s=!0
if(s)r.L7(B.C7)
s=r.w
if(s!=null){if(s.f===r)s.f=null
s.r.v(0,r)}s=r.Q
if(s!=null)s.Xx(0,r)
r.ax=null}},
Aa(a){var s,r=this.a
if(r.ax===this){s=r.e
s.toString
a=A.atD(s,!0);(a==null?r.e.r.f.e:a).wx(r)}},
KD(){return this.Aa(null)}}
A.x_.prototype={
E(){return"UnfocusDisposition."+this.b}}
A.cB.prototype={
ge_(){var s,r,q
if(this.a)return!0
for(s=this.gfu(),r=s.length,q=0;q<r;++q)s[q].toString
return!1},
se_(a){var s,r=this
if(a!==r.a){r.a=a
s=r.w
if(s!=null){s.qd()
s.r.C(0,r)}}},
gci(){var s,r,q,p
if(!this.b)return!1
s=this.gdt()
if(s!=null&&!s.gci())return!1
for(r=this.gfu(),q=r.length,p=0;p<q;++p)r[p].toString
return!0},
sci(a){var s,r=this
if(a!==r.b){r.b=a
if(r.gki()&&!a)r.L7(B.C7)
s=r.w
if(s!=null){s.qd()
s.r.C(0,r)}}},
slB(a){return},
slC(a){},
go_(){var s,r,q,p,o=this.y
if(o==null){s=A.a([],t.i4)
for(o=this.as,r=o.length,q=0;q<o.length;o.length===r||(0,A.R)(o),++q){p=o[q]
B.b.J(s,p.go_())
s.push(p)}this.y=s
o=s}return o},
gpb(){var s=this.go_()
return new A.aN(s,new A.XS(),A.an(s).h("aN<1>"))},
gfu(){var s,r,q=this.x
if(q==null){s=A.a([],t.i4)
r=this.Q
for(;r!=null;){s.push(r)
r=r.Q}this.x=s
q=s}return q},
gki(){if(!this.gj8()){var s=this.w
if(s==null)s=null
else{s=s.f
s=s==null?null:B.b.B(s.gfu(),this)}s=s===!0}else s=!0
return s},
gj8(){var s=this.w
return(s==null?null:s.f)===this},
gkn(){return this.gdt()},
gdt(){var s,r,q,p
for(s=this.gfu(),r=s.length,q=0;q<r;++q){p=s[q]
if(p instanceof A.lD)return p}return null},
gaL(a){var s,r=this.e.ga9(),q=r.bt(0,null),p=r.gjA(),o=A.cp(q,new A.t(p.a,p.b))
p=r.bt(0,null)
q=r.gjA()
s=A.cp(p,new A.t(q.c,q.d))
return new A.B(o.a,o.b,s.a,s.b)},
L7(a){var s,r,q=this
if(!q.gki()){s=q.w
s=s==null||s.w!==q}else s=!1
if(s)return
r=q.gdt()
if(r==null)return
switch(a.a){case 0:if(r.gci())B.b.X(r.dy)
for(;!r.gci();){r=r.gdt()
if(r==null){s=q.w
r=s==null?null:s.e}}r.ix(!1)
break
case 1:if(r.gci())B.b.v(r.dy,q)
for(;!r.gci();){s=r.gdt()
if(s!=null)B.b.v(s.dy,r)
r=r.gdt()
if(r==null){s=q.w
r=s==null?null:s.e}}r.ix(!0)
break}},
EK(a){var s=this,r=s.w
if(r!=null){if(r.f===s)r.w=null
else{r.w=s
r.qd()}return}a.lk()
a.wi()
if(a!==s)s.wi()},
Fk(a,b,c){var s,r,q
if(c){s=b.gdt()
if(s!=null)B.b.v(s.dy,b)}b.Q=null
B.b.v(this.as,b)
for(s=this.gfu(),r=s.length,q=0;q<r;++q)s[q].y=null
this.y=null},
Xx(a,b){return this.Fk(a,b,!0)},
Za(a){var s,r,q,p
this.w=a
for(s=this.go_(),r=s.length,q=0;q<r;++q){p=s[q]
p.w=a
p.x=null}},
wx(a){var s,r,q,p,o,n=this
if(a.Q===n)return
s=a.gdt()
r=a.gki()
q=a.Q
if(q!=null)q.Fk(0,a,s!=n.gkn())
n.as.push(a)
a.Q=n
a.x=null
a.Za(n.w)
for(q=a.gfu(),p=q.length,o=0;o<p;++o)q[o].y=null
if(r){q=n.w
if(q!=null){q=q.f
if(q!=null)q.lk()}}if(s!=null&&a.e!=null&&a.gdt()!==s){q=a.e
q.toString
q=A.akz(q)
if(q!=null)q.xG(a,s)}if(a.ay){a.ix(!0)
a.ay=!1}},
m(){var s=this.ax
if(s!=null)s.af(0)
this.dE()},
wi(){var s=this
if(s.Q==null)return
if(s.gj8())s.lk()
s.az()},
tN(){this.ix(!0)},
ix(a){var s,r=this
if(!r.gci())return
if(r.Q==null){r.ay=!0
return}r.lk()
if(r.gj8()){s=r.w.w
s=s==null||s===r}else s=!1
if(s)return
r.EK(r)},
lk(){var s,r,q,p,o,n
for(s=B.b.ga7(this.gfu()),r=new A.pJ(s,t.oj),q=t.j5,p=this;r.q();p=o){o=q.a(s.gF(s))
n=o.dy
B.b.v(n,p)
n.push(p)}},
bV(){var s,r,q,p=this
p.gki()
s=p.gki()&&!p.gj8()?"[IN FOCUS PATH]":""
r=s+(p.gj8()?"[PRIMARY FOCUS]":"")
s=A.bI(p)
q=r.length!==0?"("+r+")":""
return"<optimized out>#"+s+q},
$iab:1}
A.XS.prototype={
$1(a){return!a.ge_()&&a.gci()},
$S:14}
A.lD.prototype={
gkn(){return this},
gpb(){if(!this.gci())return B.Dh
return A.cB.prototype.gpb.call(this)},
mD(a){if(a.Q==null)this.wx(a)
if(this.gki())a.ix(!0)
else a.lk()},
ix(a){var s,r,q=this,p=q.dy
while(!0){if((p.length!==0?B.b.gU(p):null)!=null)s=!(p.length!==0?B.b.gU(p):null).gci()
else s=!1
if(!s)break
p.pop()}r=p.length!==0?B.b.gU(p):null
if(!a||r==null){if(q.gci()){q.lk()
q.EK(q)}return}r.ix(!0)}}
A.iC.prototype={
E(){return"FocusHighlightMode."+this.b}}
A.Ef.prototype={
E(){return"FocusHighlightStrategy."+this.b}}
A.ty.prototype={
GH(){var s,r,q=this
switch(0){case 0:s=q.c
if(s==null)return
r=s?B.hF:B.ef
break}s=q.b
if(s==null)s=A.Eg()
q.b=r
if((r==null?A.Eg():r)!==s)q.Wl()},
Wl(){var s,r,q,p,o,n,m,l,k,j=this,i=j.d,h=i.a
if(h.a===0)return
p=A.aA(i,!0,t.tP)
for(i=p.length,o=0;o<i;++o){s=p[o]
try{if(h.T(0,s)){n=j.b
if(n==null)n=A.Eg()
s.$1(n)}}catch(m){r=A.ah(m)
q=A.ay(m)
l=j instanceof A.bP?A.cX(j):null
n=A.bk("while dispatching notifications for "+A.aF(l==null?A.aR(j):l).i(0))
k=$.fy()
if(k!=null)k.$1(new A.bE(r,q,"widgets library",n,null,!1))}}},
SY(a){var s,r,q=this
switch(a.gc8(a).a){case 0:case 2:case 3:q.c=!0
s=B.hF
break
case 1:case 4:case 5:q.c=!1
s=B.ef
break
default:s=null}r=q.b
if(s!==(r==null?A.Eg():r))q.GH()},
Up(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.c=!1
i.GH()
s=i.f
if(s==null)return!1
s=A.a([s],t.i4)
B.b.J(s,i.f.gfu())
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
switch(A.aA4(k).a){case 1:break c$1
case 0:r=!0
break
case 2:r=!1
break
default:r=!1}break}s.length===q||(0,A.R)(s);++m}return r},
qd(){if(this.y)return
this.y=!0
A.dF(this.gQX())},
QY(){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.y=!1
s=h.f
for(r=h.x,q=r.length,p=h.e,o=0;o<r.length;r.length===q||(0,A.R)(r),++o){n=r[o]
m=n.a
if(m.Q!=null||m===p)if(m.w===h){l=m.dy
m=(l.length!==0?B.b.gU(l):null)==null&&B.b.B(n.b.gfu(),m)
k=m}else k=!1
else k=!1
if(k)n.b.ix(!0)}B.b.X(r)
r=h.f
if(r==null&&h.w==null)h.w=p
q=h.w
if(q!=null&&q!==r){if(s==null)j=null
else{r=s.gfu()
r=A.u4(r,A.an(r).c)
j=r}if(j==null)j=A.b8(t.lc)
r=h.w.gfu()
i=A.u4(r,A.an(r).c)
r=h.r
r.J(0,i.k7(j))
r.J(0,j.k7(i))
r=h.f=h.w
h.w=null}if(s!=r){if(s!=null)h.r.C(0,s)
r=h.f
if(r!=null)h.r.C(0,r)}for(r=h.r,q=A.jd(r,r.r),p=A.n(q).c;q.q();){m=q.d;(m==null?p.a(m):m).wi()}r.X(0)
if(s!=h.f)h.az()},
$iab:1}
A.MA.prototype={}
A.MB.prototype={}
A.MC.prototype={}
A.MD.prototype={}
A.lC.prototype={
gK1(){var s=this.w,r=this.e
s=r==null?null:r.r
return s},
gzF(){var s=this.x
if(s==null){s=this.e
s=s==null?null:s.f}return s},
gci(){var s=this.y
if(s==null){s=this.e
s=s==null?null:s.gci()}return s!==!1},
ge_(){var s=this.z
if(s==null){s=this.e
s=s==null?null:s.ge_()}return s===!0},
glB(){var s=this.Q
if(s==null)s=this.e!=null||null
return s!==!1},
glC(){var s=this.as
if(s==null)s=this.e!=null||null
return s!==!1},
glA(){var s=this.ax
if(s==null){s=this.e
s=s==null?null:s.at}return s},
ai(){return A.axe()}}
A.pZ.prototype={
gbT(a){var s=this.a.e
if(s==null){s=this.d
s.toString}return s},
aB(){this.aQ()
this.Eq()},
Eq(){var s,r,q,p=this
if(p.a.e==null)if(p.d==null)p.d=p.Dp()
s=p.gbT(p)
p.a.glB()
s.slB(!0)
s=p.gbT(p)
p.a.glC()
s.slC(!0)
p.a.ge_()
p.gbT(p).se_(p.a.ge_())
if(p.a.y!=null){s=p.gbT(p)
r=p.a.y
r.toString
s.sci(r)}p.f=p.gbT(p).gci()
p.gbT(p)
p.r=!0
p.gbT(p)
p.w=!0
p.e=p.gbT(p).gj8()
s=p.gbT(p)
r=p.c
r.toString
p.a.gK1()
q=p.a.gzF()
s.e=r
s.f=q==null?s.f:q
r=s.r
s.r=r
p.y=s.ax=new A.XR(s)
p.gbT(p).W(0,p.gvT())},
Dp(){var s=this,r=s.a.glA(),q=s.a.gci()
s.a.glB()
s.a.glC()
return A.agV(q,r,!0,!0,null,null,s.a.ge_())},
m(){var s,r=this
r.gbT(r).G(0,r.gvT())
r.y.af(0)
s=r.d
if(s!=null)s.m()
r.aM()},
b2(){this.cu()
var s=this.y
if(s!=null)s.KD()
this.E8()},
E8(){var s,r,q,p=this
if(!p.x&&p.a.f){s=p.c
s.toString
s=A.atC(s)
r=p.gbT(p)
if(r.Q==null)s.wx(r)
q=s.w
if(q!=null)q.x.push(new A.Lb(s,r))
s=s.w
if(s!=null)s.qd()
p.x=!0}},
df(){this.mS()
var s=this.y
if(s!=null)s.KD()
this.x=!1},
aS(a){var s,r,q=this
q.bi(a)
s=a.e
r=q.a
if(s==r.e){if(!J.f(r.gzF(),q.gbT(q).f))q.gbT(q).f=q.a.gzF()
q.a.gK1()
q.gbT(q)
q.a.ge_()
q.gbT(q).se_(q.a.ge_())
if(q.a.y!=null){s=q.gbT(q)
r=q.a.y
r.toString
s.sci(r)}s=q.gbT(q)
q.a.glB()
s.slB(!0)
s=q.gbT(q)
q.a.glC()
s.slC(!0)}else{q.y.af(0)
if(s!=null)s.G(0,q.gvT())
q.Eq()}if(a.f!==q.a.f)q.E8()},
Uh(){var s,r=this,q=r.gbT(r).gj8(),p=r.gbT(r).gci()
r.gbT(r)
r.gbT(r)
s=r.a.r
if(s!=null)s.$1(r.gbT(r).gki())
s=r.e
s===$&&A.b()
if(s!==q)r.au(new A.a9U(r,q))
s=r.f
s===$&&A.b()
if(s!==p)r.au(new A.a9V(r,p))
s=r.r
s===$&&A.b()
if(!s)r.au(new A.a9W(r,!0))
s=r.w
s===$&&A.b()
if(!s)r.au(new A.a9X(r,!0))},
M(a){var s,r,q=this,p=null,o=q.y
o.toString
o.Aa(q.a.c)
o=q.a
s=o.d
if(o.at){o=q.f
o===$&&A.b()
r=q.e
r===$&&A.b()
s=A.dB(p,s,!1,p,!1,o,r,p,p,p,p,p,p,p,p,p,p,p,p,p,p)}return A.amz(s,q.gbT(q))}}
A.a9U.prototype={
$0(){this.a.e=this.b},
$S:0}
A.a9V.prototype={
$0(){this.a.f=this.b},
$S:0}
A.a9W.prototype={
$0(){this.a.r=this.b},
$S:0}
A.a9X.prototype={
$0(){this.a.w=this.b},
$S:0}
A.Eh.prototype={
ai(){return new A.ME(B.m)}}
A.ME.prototype={
Dp(){var s=this.a.glA()
return A.agW(this.a.gci(),s,this.a.ge_())},
M(a){var s=this,r=null,q=s.y
q.toString
q.Aa(s.a.c)
q=s.gbT(s)
return A.dB(r,A.amz(s.a.d,q),!1,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)}}
A.xz.prototype={}
A.aet.prototype={
$1(a){var s=this.a
if(--s.a===0){s.b=a
return!1}return!0},
$S:42}
A.q_.prototype={}
A.mN.prototype={
E(){return"TraversalDirection."+this.b}}
A.Ei.prototype={
DM(a,b,c){var s,r=a.gkn(),q=r.dy,p=q.length!==0?B.b.gU(q):null
q=p==null&&r.go_().length!==0
if(q){s=this.G1(r,a)
if(s.length===0)p=null
else p=b?B.b.gU(s):B.b.gK(s)}return p==null?a:p},
SO(a,b){return this.DM(a,!1,b)},
a37(a){},
xG(a,b){},
Tj(a){var s
if(a==null)s=null
else{s=a.jx(t.AB)
if(s==null)s=null
else{s=s.f
s.toString}}return t.fc.a(s)},
G1(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=this.Tj(a.e),c=d==null,b=c?e:d.f
if(b==null)b=new A.vq(A.y(t.j5,t.uJ))
s=A.y(t.k_,t.hF)
for(r=a.go_(),q=r.length,p=t.fc,o=t.AB,n=t.i4,m=0;m<r.length;r.length===q||(0,A.R)(r),++m){l=r[m]
k=l.e
if(k==null)k=e
else{k=k.y
j=k==null?e:k.j(0,A.aF(o))
if(j==null)k=e
else{k=j.f
k.toString}}p.a(k)
i=k==null?e:k.r
if(J.f(l,i)){k=i.e
k.toString
h=A.anu(k,2)
if(h==null)k=e
else{k=h.y
j=k==null?e:k.j(0,A.aF(o))
if(j==null)k=e
else{k=j.f
k.toString}}p.a(k)
g=k==null?e:k.r
if(s.j(0,g)==null)s.l(0,g,A.amA(k,b,A.a([],n)))
s.j(0,g).c.push(i)
continue}if(l.gci()&&!l.ge_()){if(s.j(0,i)==null)s.l(0,i,A.amA(k,b,A.a([],n)))
s.j(0,i).c.push(l)}}for(r=A.iJ(s,s.r);r.q();){q=r.d
p=s.j(0,q).b.Mw(s.j(0,q).c,a0)
p=A.a(p.slice(0),A.an(p))
B.b.X(s.j(0,q).c)
B.b.J(s.j(0,q).c,p)}f=A.a([],n)
if(s.a!==0)r=s.T(0,c?e:d.r)
else r=!1
if(r){r=s.j(0,c?e:d.r)
r.toString
new A.XU(s,f).$1(r)}if(!!f.fixed$length)A.Y(A.N("removeWhere"))
B.b.qt(f,new A.XT(),!0)
return f},
EQ(a,b){var s,r,q,p,o,n,m=this,l=a.gkn()
l.toString
m.kP(l)
m.om$.v(0,l)
s=l.dy
r=s.length!==0?B.b.gU(s):null
if(r==null){q=b?m.SO(a,!1):m.DM(a,!0,!1)
A.kT(q,b?B.cH:B.cI)
return!0}p=m.G1(l,a)
if(p.length===0)return!1
if(b&&r===B.b.gU(p)){A.kT(B.b.gK(p),B.cH)
return!0}if(!b&&r===B.b.gK(p)){A.kT(B.b.gU(p),B.cI)
return!0}for(l=J.av(b?p:new A.cF(p,A.an(p).h("cF<1>"))),o=null;l.q();o=n){n=l.gF(l)
if(o==r){l=b?B.cH:B.cI
n.tN()
s=n.e
s.toString
A.alQ(s,1,l)
return!0}}return!1}}
A.XU.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=a.c,r=s.length,q=this.b,p=this.a,o=0;o<s.length;s.length===r||(0,A.R)(s),++o){n=s[o]
if(p.T(0,n)){m=p.j(0,n)
m.toString
this.$1(m)}else q.push(n)}},
$S:398}
A.XT.prototype={
$1(a){return!a.gci()||a.ge_()},
$S:14}
A.pT.prototype={}
A.M7.prototype={}
A.UI.prototype={
a1z(a,b){var s=this
switch(b.a){case 0:return s.qz(a,!1,!0)
case 2:return s.qz(a,!0,!0)
case 3:return s.qz(a,!1,!1)
case 1:return s.qz(a,!0,!1)}},
qz(a,b,c){var s=a.gkn().gpb().dW(0)
A.nk(s,new A.UQ(c,b),t.lc)
if(s.length!==0)return B.b.gK(s)
return null},
Yx(a,b,c){var s,r=c.gpb().dW(0)
A.nk(r,new A.UK(),t.lc)
switch(a.a){case 3:s=new A.aN(r,new A.UL(b),A.an(r).h("aN<1>"))
break
case 1:s=new A.aN(r,new A.UM(b),A.an(r).h("aN<1>"))
break
case 0:case 2:s=null
break
default:s=null}return s},
Yy(a,b,c){var s=c.dW(0)
A.nk(s,new A.UN(),t.lc)
switch(a.a){case 0:return new A.aN(s,new A.UO(b),A.an(s).h("aN<1>"))
case 2:return new A.aN(s,new A.UP(b),A.an(s).h("aN<1>"))
case 3:case 1:break}return null},
Xe(a,b,c){var s,r,q=this,p=q.om$,o=p.j(0,b),n=o!=null
if(n){s=o.a
s=s.length!==0&&B.b.gK(s).a!==a}else s=!1
if(s){s=o.a
if(B.b.gU(s).b.Q==null){q.kP(b)
p.v(0,b)
return!1}r=new A.UJ(q,o,b)
switch(a.a){case 2:case 0:switch(B.b.gK(s).a.a){case 3:case 1:q.kP(b)
p.v(0,b)
break
case 0:case 2:if(r.$1(a))return!0
break}break
case 3:case 1:switch(B.b.gK(s).a.a){case 3:case 1:if(r.$1(a))return!0
break
case 0:case 2:q.kP(b)
p.v(0,b)
break}break}}if(n&&o.a.length===0){q.kP(b)
p.v(0,b)}return!1},
a2Q(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=a.gkn(),f=g.dy,e=f.length!==0?B.b.gU(f):h
if(e==null){s=i.a1z(a,b)
if(s==null)s=a
switch(b.a){case 0:case 3:A.kT(s,B.cI)
break
case 1:case 2:A.kT(s,B.cH)
break}return!0}if(i.Xe(b,g,e))return!0
f=e.e
f.toString
r=A.hV(f)
f=b.a
switch(f){case 2:case 0:q=i.Yy(b,e.gaL(e),g.gpb())
if(r!=null&&!r.d.gHj()){q.toString
p=new A.aN(q,new A.UR(r),q.$ti.h("aN<q.E>"))
if(!p.gP(p))q=p}if(!q.ga7(q).q()){o=h
break}n=A.aA(q,!0,A.n(q).h("q.E"))
if(b===B.Zq){m=A.an(n).h("cF<1>")
n=A.aA(new A.cF(n,m),!0,m.h("bl.E"))}l=new A.aN(n,new A.US(new A.B(e.gaL(e).a,-1/0,e.gaL(e).c,1/0)),A.an(n).h("aN<1>"))
if(!l.gP(l)){o=l.gK(l)
break}A.nk(n,new A.UT(e),t.lc)
o=B.b.gK(n)
break
case 1:case 3:q=i.Yx(b,e.gaL(e),g)
if(r!=null&&!r.d.gHj()){q.toString
p=new A.aN(q,new A.UU(r),q.$ti.h("aN<q.E>"))
if(!p.gP(p))q=p}if(!q.ga7(q).q()){o=h
break}n=A.aA(q,!0,A.n(q).h("q.E"))
if(b===B.Zr){m=A.an(n).h("cF<1>")
n=A.aA(new A.cF(n,m),!0,m.h("bl.E"))}l=new A.aN(n,new A.UV(new A.B(-1/0,e.gaL(e).b,1/0,e.gaL(e).d)),A.an(n).h("aN<1>"))
if(!l.gP(l)){o=l.gK(l)
break}A.nk(n,new A.UW(e),t.lc)
o=B.b.gK(n)
break
default:o=h}if(o!=null){m=i.om$
k=m.j(0,g)
j=new A.pT(b,e)
if(k!=null)k.a.push(j)
else m.l(0,g,new A.M7(A.a([j],t.gE)))
switch(f){case 0:case 3:A.kT(o,B.cI)
break
case 2:case 1:A.kT(o,B.cH)
break}return!0}return!1}}
A.ace.prototype={
$1(a){return a.b===this.a},
$S:266}
A.UQ.prototype={
$2(a,b){if(this.a)if(this.b)return B.d.b1(a.gaL(a).b,b.gaL(b).b)
else return B.d.b1(b.gaL(b).d,a.gaL(a).d)
else if(this.b)return B.d.b1(a.gaL(a).a,b.gaL(b).a)
else return B.d.b1(b.gaL(b).c,a.gaL(a).c)},
$S:32}
A.UK.prototype={
$2(a,b){return B.d.b1(a.gaL(a).gaH().a,b.gaL(b).gaH().a)},
$S:32}
A.UL.prototype={
$1(a){var s=this.a
return!a.gaL(a).k(0,s)&&a.gaL(a).gaH().a<=s.a},
$S:14}
A.UM.prototype={
$1(a){var s=this.a
return!a.gaL(a).k(0,s)&&a.gaL(a).gaH().a>=s.c},
$S:14}
A.UN.prototype={
$2(a,b){return B.d.b1(a.gaL(a).gaH().b,b.gaL(b).gaH().b)},
$S:32}
A.UO.prototype={
$1(a){var s=this.a
return!a.gaL(a).k(0,s)&&a.gaL(a).gaH().b<=s.b},
$S:14}
A.UP.prototype={
$1(a){var s=this.a
return!a.gaL(a).k(0,s)&&a.gaL(a).gaH().b>=s.d},
$S:14}
A.UJ.prototype={
$1(a){var s,r,q=this.b.a.pop().b,p=q.e
p.toString
p=A.hV(p)
s=$.ai.I$.f.f.e
s.toString
if(p!=A.hV(s)){p=this.a
s=this.c
p.kP(s)
p.om$.v(0,s)
return!1}switch(a.a){case 0:case 3:r=B.cI
break
case 1:case 2:r=B.cH
break
default:r=null}A.kT(q,r)
return!0},
$S:268}
A.UR.prototype={
$1(a){var s=a.e
s.toString
return A.hV(s)===this.a},
$S:14}
A.US.prototype={
$1(a){var s=a.gaL(a).f8(this.a)
return!s.gP(s)},
$S:14}
A.UT.prototype={
$2(a,b){var s=this.a
return B.d.b1(Math.abs(a.gaL(a).gaH().a-s.gaL(s).gaH().a),Math.abs(b.gaL(b).gaH().a-s.gaL(s).gaH().a))},
$S:32}
A.UU.prototype={
$1(a){var s=a.e
s.toString
return A.hV(s)===this.a},
$S:14}
A.UV.prototype={
$1(a){var s=a.gaL(a).f8(this.a)
return!s.gP(s)},
$S:14}
A.UW.prototype={
$2(a,b){var s=this.a
return B.d.b1(Math.abs(a.gaL(a).gaH().b-s.gaL(s).gaH().b),Math.abs(b.gaL(b).gaH().b-s.gaL(s).gaH().b))},
$S:32}
A.cJ.prototype={
gI7(){var s=this.d
if(s==null){s=this.c.e
s.toString
s=this.d=new A.acc().$1(s)}s.toString
return s}}
A.acb.prototype={
$1(a){var s=a.gI7()
return A.u4(s,A.an(s).c)},
$S:269}
A.acd.prototype={
$2(a,b){switch(this.a.a){case 1:return B.d.b1(a.b.a,b.b.a)
case 0:return B.d.b1(b.b.c,a.b.c)}},
$S:111}
A.acc.prototype={
$1(a){var s,r,q=A.a([],t.AG),p=t.I,o=a.jx(p)
for(;o!=null;){s=o.f
s.toString
q.push(p.a(s))
s=A.anu(o,1)
if(s==null)o=null
else{s=s.y
r=s==null?null:s.j(0,A.aF(p))
o=r}}return q},
$S:271}
A.i9.prototype={
gaL(a){var s,r,q,p,o=this
if(o.b==null)for(s=o.a,s=new A.aC(s,new A.ac9(),A.an(s).h("aC<1,B>")),s=new A.dn(s,s.gp(s)),r=A.n(s).c;s.q();){q=s.d
if(q==null)q=r.a(q)
p=o.b
if(p==null){o.b=q
p=q}o.b=p.oi(q)}s=o.b
s.toString
return s}}
A.ac9.prototype={
$1(a){return a.b},
$S:272}
A.aca.prototype={
$2(a,b){switch(this.a.a){case 1:return B.d.b1(a.gaL(a).a,b.gaL(b).a)
case 0:return B.d.b1(b.gaL(b).c,a.gaL(a).c)}},
$S:273}
A.vq.prototype={
RJ(a){var s,r,q,p,o,n=B.b.gK(a).a,m=t.hY,l=A.a([],m),k=A.a([],t.lZ)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.R)(a),++r){q=a[r]
p=q.a
if(p==n){l.push(q)
continue}k.push(new A.i9(l))
l=A.a([q],m)
n=p}if(l.length!==0)k.push(new A.i9(l))
for(m=k.length,r=0;r<k.length;k.length===m||(0,A.R)(k),++r){s=k[r].a
if(s.length===1)continue
o=B.b.gK(s).a
o.toString
A.amI(s,o)}return k},
Fa(a){var s,r,q,p
A.nk(a,new A.a28(),t.dP)
s=B.b.gK(a)
r=new A.a29().$2(s,a)
if(J.bB(r)<=1)return s
q=A.axA(r)
q.toString
A.amI(r,q)
p=this.RJ(r)
if(p.length===1)return B.b.gK(B.b.gK(p).a)
A.axz(p,q)
return B.b.gK(B.b.gK(p).a)},
Mw(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a.length<=1)return a
s=A.a([],t.hY)
for(r=a.length,q=t.n2,p=t.I,o=0;o<a.length;a.length===r||(0,A.R)(a),++o){n=a[o]
m=n.gaL(n)
l=n.e.y
k=l==null?null:l.j(0,A.aF(p))
if(k==null)l=null
else{l=k.f
l.toString}q.a(l)
s.push(new A.cJ(l==null?null:l.w,m,n))}j=A.a([],t.i4)
i=this.Fa(s)
j.push(i.c)
B.b.v(s,i)
for(;s.length!==0;){h=this.Fa(s)
j.push(h.c)
B.b.v(s,h)}return j}}
A.a28.prototype={
$2(a,b){return B.d.b1(a.b.b,b.b.b)},
$S:111}
A.a29.prototype={
$2(a,b){var s=a.b,r=A.an(b).h("aN<1>")
return A.aA(new A.aN(b,new A.a2a(new A.B(-1/0,s.b,1/0,s.d)),r),!0,r.h("q.E"))},
$S:274}
A.a2a.prototype={
$1(a){var s=a.b.f8(this.a)
return!s.gP(s)},
$S:275}
A.tz.prototype={
ai(){return new A.MF(B.m)}}
A.MF.prototype={
aB(){this.aQ()
this.d=A.agV(!1,"FocusTraversalGroup",!0,!0,null,null,!0)},
m(){var s=this.d
if(s!=null)s.m()
this.aM()},
M(a){var s=null,r=this.a,q=r.c,p=this.d
p.toString
return new A.q0(q,p,A.Ee(!1,!1,r.f,s,!0,!0,p,!1,s,s,s,s,s,!0),s)}}
A.q0.prototype={
bW(a){return!1}}
A.J_.prototype={
d_(a){A.kT(a.gbT(a),B.TW)}}
A.m4.prototype={}
A.Hl.prototype={
d_(a){var s=$.ai.I$.f.f
s.e.a5(t.AB).f.EQ(s,!0)}}
A.mj.prototype={}
A.If.prototype={
d_(a){var s=$.ai.I$.f.f
s.e.a5(t.AB).f.EQ(s,!1)}}
A.D9.prototype={
d_(a){var s=$.ai.I$.f.f,r=s.e.a5(t.AB)
r.f.a2Q(s,a.a)}}
A.MG.prototype={}
A.OP.prototype={
xG(a,b){var s
this.N8(a,b)
s=this.om$.j(0,b)
if(s!=null){s=s.a
if(!!s.fixed$length)A.Y(A.N("removeWhere"))
B.b.qt(s,new A.ace(a),!0)}}}
A.Rp.prototype={}
A.Rq.prototype={}
A.eh.prototype={
gbn(){var s,r=$.ai.I$.z.j(0,this)
if(r instanceof A.fm){s=r.ok
s.toString
if(A.n(this).c.b(s))return s}return null}}
A.bu.prototype={
i(a){var s=this,r=s.a,q=r!=null?" "+r:""
if(A.A(s)===B.ZG)return"[GlobalKey#"+A.bI(s)+q+"]"
return"["+("<optimized out>#"+A.bI(s))+q+"]"}}
A.jR.prototype={
k(a,b){if(b==null)return!1
if(J.T(b)!==A.A(this))return!1
return this.$ti.b(b)&&b.a===this.a},
gu(a){return A.l3(this.a)},
i(a){var s="GlobalObjectKey",r=B.c.rC(s,"<State<StatefulWidget>>")?B.c.a1(s,0,-8):s
return"["+r+" "+("<optimized out>#"+A.bI(this.a))+"]"}}
A.i.prototype={
bV(){var s=this.a
return s==null?"Widget":"Widget-"+s.i(0)},
k(a,b){if(b==null)return!1
return this.NP(0,b)},
gu(a){return A.F.prototype.gu.call(this,this)}}
A.b4.prototype={
bM(a){return new A.JU(this,B.a4)}}
A.ad.prototype={
bM(a){return A.awo(this)}}
A.PU.prototype={
E(){return"_StateLifecycle."+this.b}}
A.ak.prototype={
aB(){},
aS(a){},
eM(){},
au(a){a.$0()
this.c.fM()},
df(){},
c4(){},
m(){},
b2(){}}
A.aQ.prototype={}
A.dr.prototype={
bM(a){return new A.m6(this,B.a4,A.n(this).h("m6<dr.T>"))}}
A.b6.prototype={
bM(a){return A.atV(this)}}
A.az.prototype={
aK(a,b){},
o7(a){}}
A.F3.prototype={
bM(a){return new A.F2(this,B.a4)}}
A.b3.prototype={
bM(a){return A.awg(this)}}
A.el.prototype={
bM(a){return A.auF(this)}}
A.n1.prototype={
E(){return"_ElementLifecycle."+this.b}}
A.N_.prototype={
Gs(a){a.aP(new A.aaK(this,a))
a.pc()},
Z_(){var s,r,q,p=this
p.a=!0
r=p.b
q=A.aA(r,!0,A.n(r).c)
B.b.d5(q,A.afl())
s=q
r.X(0)
try{r=s
new A.cF(r,A.aR(r).h("cF<1>")).a_(0,p.gYY())}finally{p.a=!1}},
C(a,b){if(b.w===B.c8){b.df()
b.aP(A.afm())}this.b.C(0,b)}}
A.aaK.prototype={
$1(a){this.a.Gs(a)},
$S:6}
A.Tp.prototype={
B8(a){var s=this
if(a.at){s.e=!0
return}if(!s.d&&s.a!=null){s.d=!0
s.a.$0()}s.c.push(a)
a.at=!0},
JL(a){try{a.$0()}finally{}},
r0(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=b==null
if(f&&h.c.length===0)return
try{h.d=!0
if(!f){g.a=null
h.e=!1
try{b.$0()}finally{}}f=h.c
B.b.d5(f,A.afl())
h.e=!1
g.b=f.length
g.c=0
for(n=0;n<g.b;){s=f[n]
r=!1
if(r){n=s.f
n.toString
m=n instanceof A.bP?A.cX(n):null
A.ahS(A.aF(m==null?A.aR(n):m).i(0),null,null)}try{s.Ks()}catch(l){q=A.ah(l)
p=A.ay(l)
n=A.bk("while rebuilding dirty elements")
k=$.fy()
if(k!=null)k.$1(new A.bE(q,p,"widgets library",n,new A.Tq(g,h,s),!1))}if(r)A.ahR()
n=++g.c
k=g.b
j=f.length
if(k>=j){k=h.e
k.toString}else k=!0
if(k){if(!!f.immutable$list)A.Y(A.N("sort"))
n=j-1
if(n-0<=32)A.JM(f,0,n,A.afl())
else A.JL(f,0,n,A.afl())
n=h.e=!1
g.b=f.length
while(!0){k=g.c
if(!(k>0?f[k-1].as:n))break
g.c=k-1}n=k}}}finally{for(f=h.c,n=f.length,i=0;i<n;++i){o=f[i]
o.at=!1}B.b.X(f)
h.d=!1
h.e=null}},
a_h(a){return this.r0(a,null)},
a1x(){var s,r,q
try{this.JL(this.b.gYZ())}catch(q){s=A.ah(q)
r=A.ay(q)
A.aiE(A.DW("while finalizing the widget tree"),s,r,null)}finally{}},
a4F(a,b){try{a.b=b
a.eM()}finally{}}}
A.Tq.prototype={
$0(){var s=null,r=A.a([],t.F),q=this.a,p=q.c,o=this.b.c.length,n="The element being rebuilt at the time was index "+p
q=""+q.b
if(p<o)J.l5(r,A.ho(n+" of "+q,this.c,!0,B.aI,s,!1,s,s,B.ap,s,!1,!0,!0,B.aV,s,t.h))
else J.l5(r,A.Xm(n+" of "+q+", but _dirtyElements only had "+o+" entries. This suggests some confusion in the framework internals."))
return r},
$S:15}
A.uT.prototype={
xx(){var s=this.a
this.c=new A.abS(this,s==null?null:s.c)}}
A.abS.prototype={
cT(a){var s=this.a.K3(a)
if(s)return
s=this.b
if(s!=null)s.cT(a)}}
A.aT.prototype={
Qf(a){},
k(a,b){if(b==null)return!1
return this===b},
eM(){var s=this
if(A.anm(s.b,s.f)){s.fM()
s.b=null}s.aP(new A.WM(s))
s.b=null},
ga9(){var s,r
for(s=this;s!=null;){r={}
if(s.w===B.Cf)break
else if(s instanceof A.bv)return s.ga9()
else{r.a=null
s.aP(new A.WN(r))
s=r.a}}return null},
a1_(a){var s=null
return A.ho(a,this,!0,B.aI,s,!1,s,s,B.ap,s,!1,!0,!0,B.aV,s,t.h)},
aP(a){},
dC(a,b,c){var s,r,q=this
if(b==null){if(a!=null)q.xV(a)
return null}if(a!=null){s=a.f.k(0,b)
if(s){if(!J.f(a.d,c))q.Lc(a,c)
s=a}else{s=a.f
s.toString
if(A.A(s)===A.A(b)&&J.f(s.a,b.a)){if(!J.f(a.d,c))q.Lc(a,c)
a.ba(0,b)
s=a}else{q.xV(a)
r=q.t3(b,c)
s=r}}}else{r=q.t3(b,c)
s=r}return s},
fb(a,b){var s,r,q,p=this
p.a=a
p.d=b
p.w=B.c8
s=a!=null
if(s){r=a.e
r===$&&A.b();++r}else r=1
p.e=r
if(s)p.r=a.r
q=p.f.a
if(q instanceof A.eh)p.r.z.l(0,q,p)
p.x3()
p.xx()},
ba(a,b){this.f=b},
Lc(a,b){new A.WO(b).$1(a)},
x8(a){this.d=a},
GC(a){var s=a+1,r=this.e
r===$&&A.b()
if(r<s){this.e=s
this.aP(new A.WJ(s))}},
o1(){this.aP(new A.WL())
this.d=null},
qX(a){this.aP(new A.WK(a))
this.d=a},
XN(a,b){var s,r,q=$.ai.I$.z.j(0,a)
if(q==null)return null
s=q.f
s.toString
if(!(A.A(s)===A.A(b)&&J.f(s.a,b.a)))return null
r=q.a
if(r!=null){r.j5(q)
r.xV(q)}this.r.b.b.v(0,q)
return q},
t3(a,b){var s,r,q,p,o,n,m=this,l=!1
if(l)A.ahS(A.A(a).i(0),null,null)
try{s=a.a
if(s instanceof A.eh){r=m.XN(s,a)
if(r!=null){o=r
o.a=m
o.toString
n=m.e
n===$&&A.b()
o.GC(n)
o.c4()
o.aP(A.aos())
o.qX(b)
q=m.dC(r,a,b)
o=q
o.toString
return o}}p=a.bM(0)
p.fb(m,b)
return p}finally{if(l)A.ahR()}},
xV(a){a.a=null
a.o1()
this.r.b.C(0,a)},
j5(a){},
c4(){var s=this,r=s.z,q=r==null,p=!q&&r.a!==0||s.Q
s.w=B.c8
if(!q)r.X(0)
s.Q=!1
s.x3()
s.xx()
if(s.as)s.r.B8(s)
if(p)s.b2()},
df(){var s,r,q=this,p=q.z
if(p!=null&&p.a!==0)for(p=new A.kG(p,p.n4()),s=A.n(p).c;p.q();){r=p.d;(r==null?s.a(r):r).aj.v(0,q)}q.y=null
q.w=B.a_I},
pc(){var s=this,r=s.f,q=r==null?null:r.a
if(q instanceof A.eh){r=s.r.z
if(J.f(r.j(0,q),s))r.v(0,q)}s.z=s.f=null
s.w=B.Cf},
gcE(a){var s,r=this.ga9()
if(r instanceof A.E){s=r.k3
s.toString
return s}return null},
y_(a,b){var s=this.z;(s==null?this.z=A.cO(t.tx):s).C(0,a)
a.L8(this,b)
s=a.f
s.toString
return t.sg.a(s)},
a5(a){var s=this.y,r=s==null?null:s.j(0,A.aF(a))
if(r!=null)return a.a(this.y_(r,null))
this.Q=!0
return null},
jx(a){var s=this.y
return s==null?null:s.j(0,A.aF(a))},
xx(){var s=this.a
this.c=s==null?null:s.c},
x3(){var s=this.a
this.y=s==null?null:s.y},
IF(a){var s,r,q,p=this.a
while(!0){s=p==null
if(!s){r=p.f
r.toString
q=r instanceof A.bP?A.cX(r):null
r=A.aF(q==null?A.aR(r):q)!==A.aF(a)}else r=!1
if(!r)break
p=p.a}if(s)s=null
else{s=p.f
s.toString}return a.h("0?").a(s)},
kg(a){var s,r,q=this.a
for(;s=q==null,!s;){if(q instanceof A.fm){r=q.ok
r.toString
r=a.b(r)}else r=!1
if(r)break
q=q.a}t.Ci.a(q)
if(s)s=null
else{s=q.ok
s.toString}return a.h("0?").a(s)},
rL(a){var s=this.a
for(;s!=null;){if(s instanceof A.bv&&a.b(s.ga9()))return a.a(s.ga9())
s=s.a}return null},
AD(a){var s=this.a
while(!0){if(!(s!=null&&a.$1(s)))break
s=s.a}},
b2(){this.fM()},
cT(a){var s=this.c
if(s!=null)s.cT(a)},
bV(){var s=this.f
s=s==null?null:s.bV()
return s==null?"<optimized out>#"+A.bI(this)+"(DEFUNCT)":s},
fM(){var s=this
if(s.w!==B.c8)return
if(s.as)return
s.as=!0
s.r.B8(s)},
tI(a){var s
if(this.w===B.c8)s=!this.as&&!a
else s=!0
if(s)return
this.hy()},
Ks(){return this.tI(!1)},
hy(){this.as=!1},
$iaf:1}
A.WM.prototype={
$1(a){a.b=this.a.b
a.eM()},
$S:6}
A.WN.prototype={
$1(a){this.a.a=a},
$S:6}
A.WO.prototype={
$1(a){a.x8(this.a)
if(!(a instanceof A.bv))a.aP(this)},
$S:6}
A.WJ.prototype={
$1(a){a.GC(this.a)},
$S:6}
A.WL.prototype={
$1(a){a.o1()},
$S:6}
A.WK.prototype={
$1(a){a.qX(this.a)},
$S:6}
A.DX.prototype={
aD(a){var s=this.d,r=new A.IE(s,A.at())
r.aG()
r.Qr(s)
return r}}
A.rz.prototype={
fb(a,b){this.BP(a,b)
this.vB()},
vB(){this.Ks()},
hy(){var s,r,q,p,o,n,m=this,l=null
try{l=m.b8()
m.f.toString}catch(o){s=A.ah(o)
r=A.ay(o)
n=A.agP(A.aiE(A.bk("building "+m.i(0)),s,r,new A.Ud(m)))
l=n}finally{m.ux()}try{m.ay=m.dC(m.ay,l,m.d)}catch(o){q=A.ah(o)
p=A.ay(o)
n=A.agP(A.aiE(A.bk("building "+m.i(0)),q,p,new A.Ue(m)))
l=n
m.ay=m.dC(null,l,m.d)}},
aP(a){var s=this.ay
if(s!=null)a.$1(s)},
j5(a){this.ay=null
this.kO(a)}}
A.Ud.prototype={
$0(){var s=A.a([],t.F)
return s},
$S:15}
A.Ue.prototype={
$0(){var s=A.a([],t.F)
return s},
$S:15}
A.JU.prototype={
b8(){var s=this.f
s.toString
return t.yB.a(s).M(this)},
ba(a,b){this.pG(0,b)
this.tI(!0)}}
A.fm.prototype={
b8(){return this.ok.M(this)},
eM(){var s=this
if(A.anm(s.b,s.f))s.ok.eM()
s.N5()},
vB(){this.ok.aB()
this.ok.b2()
this.MR()},
hy(){var s=this
if(s.p1){s.ok.b2()
s.p1=!1}s.MS()},
ba(a,b){var s,r,q,p=this
p.pG(0,b)
s=p.ok
r=s.a
r.toString
q=p.f
q.toString
s.a=t.aw.a(q)
s.aS(r)
p.tI(!0)},
c4(){this.N3()
this.ok.c4()
this.fM()},
df(){this.ok.df()
this.BM()},
pc(){var s=this
s.uy()
s.ok.m()
s.ok=s.ok.c=null},
y_(a,b){return this.BN(a,b)},
b2(){this.N4()
this.p1=!0}}
A.vk.prototype={
b8(){var s=this.f
s.toString
return t.im.a(s).b},
ba(a,b){var s=this,r=s.f
r.toString
t.im.a(r)
s.pG(0,b)
s.AA(r)
s.tI(!0)},
AA(a){this.md(a)}}
A.m6.prototype={
CO(a){this.aP(new A.a11(a))},
md(a){var s=this.f
s.toString
this.CO(this.$ti.h("dr<1>").a(s))}}
A.a11.prototype={
$1(a){if(a instanceof A.bv)this.a.nF(a.ga9())
else a.aP(this)},
$S:6}
A.f3.prototype={
x3(){var s=this,r=s.a,q=r==null?null:r.y
if(q==null)q=B.Tn
r=s.f
r.toString
s.y=q.a4w(0,A.A(r),s)},
Bd(a,b){this.aj.l(0,a,b)},
L8(a,b){this.Bd(a,null)},
JZ(a,b){b.b2()},
AA(a){var s=this.f
s.toString
if(t.sg.a(s).bW(a))this.O2(a)},
md(a){var s,r,q
for(s=this.aj,s=new A.xG(s,s.vg()),r=A.n(s).c;s.q();){q=s.d
this.JZ(a,q==null?r.a(q):q)}}}
A.bv.prototype={
ga9(){var s=this.ay
s.toString
return s},
SK(){var s=this.a
while(!0){if(!(s!=null&&!(s instanceof A.bv)))break
s=s.a}return t.bI.a(s)},
SJ(){var s,r={},q=r.a=this.a
r.b=null
while(!0){if(!(q!=null&&!(q instanceof A.bv)))break
if(q instanceof A.m6){r.b=q
break}s=q.a
r.a=s
q=s}return r.b},
fb(a,b){var s,r=this
r.BP(a,b)
s=r.f
s.toString
r.ay=t.xL.a(s).aD(r)
r.qX(b)
r.ux()},
ba(a,b){this.pG(0,b)
this.F9()},
hy(){this.F9()},
F9(){var s=this,r=s.f
r.toString
t.xL.a(r).aK(s,s.ga9())
s.ux()},
a5y(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=new A.a2i(a4),g=new A.a2j(i),f=a3.length,e=f-1,d=a2.length,c=d-1,b=d===f?a2:A.aZ(f,$.ajd(),!1,t.h),a=i,a0=0,a1=0
while(!0){if(!(a1<=c&&a0<=e))break
s=h.$1(a2[a1])
r=a3[a0]
if(s!=null){f=s.f
f.toString
q=f instanceof A.bP?A.cX(f):i
d=A.aF(q==null?A.aR(f):q)
q=r instanceof A.bP?A.cX(r):i
f=!(d===A.aF(q==null?A.aR(r):q)&&J.f(f.a,r.a))}else f=!0
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
q=f instanceof A.bP?A.cX(f):i
d=A.aF(q==null?A.aR(f):q)
q=r instanceof A.bP?A.cX(r):i
f=!(d===A.aF(q==null?A.aR(r):q)&&J.f(f.a,r.a))}else f=!0
if(f)break;--p;--e}if(o){n=A.y(t.qI,t.h)
for(;a1<=p;){s=h.$1(a2[a1])
if(s!=null){f=s.f.a
if(f!=null)n.l(0,f,s)
else{s.a=null
s.o1()
f=j.r.b
if(s.w===B.c8){s.df()
s.aP(A.afm())}f.b.C(0,s)}}++a1}o=!0}else n=i
for(;a0<=e;a=f){r=a3[a0]
if(o){m=r.a
if(m!=null){s=n.j(0,m)
if(s!=null){f=s.f
f.toString
q=f instanceof A.bP?A.cX(f):i
d=A.aF(q==null?A.aR(f):q)
q=r instanceof A.bP?A.cX(r):i
if(d===A.aF(q==null?A.aR(r):q)&&J.f(f.a,m))n.v(0,m)
else s=i}}else s=i}else s=i
f=j.dC(s,r,g.$2(a0,a))
f.toString
b[a0]=f;++a0}e=a3.length-1
while(!0){if(!(a1<=c&&a0<=e))break
f=j.dC(a2[a1],a3[a0],g.$2(a0,a))
f.toString
b[a0]=f;++a0;++a1
a=f}if(o&&n.a!==0)for(f=n.gaZ(n),f=new A.e_(J.av(f.a),f.b),d=A.n(f).z[1];f.q();){l=f.a
if(l==null)l=d.a(l)
if(!a4.B(0,l)){l.a=null
l.o1()
k=j.r.b
if(l.w===B.c8){l.df()
l.aP(A.afm())}k.b.C(0,l)}}return b},
df(){this.BM()},
pc(){var s=this,r=s.f
r.toString
t.xL.a(r)
s.uy()
r.o7(s.ga9())
s.ay.m()
s.ay=null},
x8(a){var s,r=this,q=r.d
r.N2(a)
s=r.CW
s.toString
s.jf(r.ga9(),q,r.d)},
qX(a){var s,r,q=this
q.d=a
s=q.CW=q.SK()
if(s!=null)s.jc(q.ga9(),a)
r=q.SJ()
if(r!=null){s=r.f
s.toString
t.yL.a(s).nF(q.ga9())}},
o1(){var s=this,r=s.CW
if(r!=null){r.jq(s.ga9(),s.d)
s.CW=null}s.d=null},
jc(a,b){},
jf(a,b,c){},
jq(a,b){}}
A.a2i.prototype={
$1(a){var s=this.a.B(0,a)
return s?null:a},
$S:276}
A.a2j.prototype={
$2(a,b){return new A.oh(b,a,t.wx)},
$S:277}
A.vI.prototype={
fb(a,b){this.uG(a,b)}}
A.F2.prototype={
j5(a){this.kO(a)},
jc(a,b){},
jf(a,b,c){},
jq(a,b){}}
A.wd.prototype={
aP(a){var s=this.p1
if(s!=null)a.$1(s)},
j5(a){this.p1=null
this.kO(a)},
fb(a,b){var s,r,q=this
q.uG(a,b)
s=q.p1
r=q.f
r.toString
q.p1=q.dC(s,t.Dp.a(r).c,null)},
ba(a,b){var s,r,q=this
q.mQ(0,b)
s=q.p1
r=q.f
r.toString
q.p1=q.dC(s,t.Dp.a(r).c,null)},
jc(a,b){var s=this.ay
s.toString
t.fB.a(s).saR(a)},
jf(a,b,c){},
jq(a,b){var s=this.ay
s.toString
t.fB.a(s).saR(null)}}
A.eH.prototype={
ga9(){return t.gz.a(A.bv.prototype.ga9.call(this))},
gHv(a){var s=this.p1
s===$&&A.b()
return new A.aN(s,new A.a0g(this),A.an(s).h("aN<1>"))},
jc(a,b){var s=this.ga9(),r=b.a
s.yU(0,a,r==null?null:r.ga9())},
jf(a,b,c){var s=this.ga9(),r=c.a
s.tk(a,r==null?null:r.ga9())},
jq(a,b){this.ga9().v(0,a)},
aP(a){var s,r,q,p,o=this.p1
o===$&&A.b()
s=o.length
r=this.p2
q=0
for(;q<s;++q){p=o[q]
if(!r.B(0,p))a.$1(p)}},
j5(a){this.p2.C(0,a)
this.kO(a)},
t3(a,b){return this.BO(a,b)},
fb(a,b){var s,r,q,p,o,n,m,l=this
l.uG(a,b)
s=l.f
s.toString
s=t.tk.a(s).c
r=s.length
q=A.aZ(r,$.ajd(),!1,t.h)
for(p=t.wx,o=null,n=0;n<r;++n,o=m){m=l.BO(s[n],new A.oh(o,n,p))
q[n]=m}l.p1=q},
ba(a,b){var s,r,q,p=this
p.mQ(0,b)
s=p.f
s.toString
t.tk.a(s)
r=p.p1
r===$&&A.b()
q=p.p2
p.p1=p.a5y(r,s.c,q)
q.X(0)}}
A.a0g.prototype={
$1(a){return!this.a.p2.B(0,a)},
$S:42}
A.oh.prototype={
k(a,b){if(b==null)return!1
if(J.T(b)!==A.A(this))return!1
return b instanceof A.oh&&this.b===b.b&&J.f(this.a,b.a)},
gu(a){return A.U(this.b,this.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.NR.prototype={}
A.NU.prototype={
bM(a){return A.Y(A.bZ(null))}}
A.PV.prototype={}
A.lG.prototype={}
A.co.prototype={
HJ(){return this.a.$0()},
Jd(a){return this.b.$1(a)}}
A.Ep.prototype={
M(a){var s=this,r=A.y(t.n,t.ob),q=A.dp(a),p=q==null?null:q.ay
if(s.d==null)if(s.e==null)if(s.f==null)if(s.r==null)q=!1
else q=!0
else q=!0
else q=!0
else q=!0
if(q)r.l(0,B.C6,new A.co(new A.Yb(s),new A.Yc(s,p),t.g0))
if(s.ay==null)q=!1
else q=!0
if(q)r.l(0,B.Zy,new A.co(new A.Yd(s),new A.Yh(s,p),t.da))
if(s.cy==null)q=!1
else q=!0
if(q)r.l(0,B.C4,new A.co(new A.Yi(s),new A.Yj(s,p),t.on))
if(s.rx!=null||s.ry!=null||s.to!=null||!1)r.l(0,B.lO,new A.co(new A.Yk(s),new A.Yl(s,p),t.n_))
if(s.x2!=null||s.y1!=null||s.y2!=null||s.al!=null)r.l(0,B.lN,new A.co(new A.Ym(s),new A.Yn(s,p),t.ta))
if(s.an!=null||s.ac!=null||s.aU!=null||!1)r.l(0,B.lL,new A.co(new A.Yo(s),new A.Ye(s,p),t.uX))
q=!1
if(q)r.l(0,B.ZB,new A.co(new A.Yf(s),new A.Yg(s,p),t.p1))
return new A.ki(s.c,r,s.ao,s.ah,null,null)}}
A.Yb.prototype={
$0(){return A.awx(this.a,null)},
$S:278}
A.Yc.prototype={
$1(a){var s=this.a
a.y1=s.d
a.y2=s.e
a.al=s.f
a.an=s.r
a.f5=a.cd=a.be=a.bj=a.aU=a.ac=a.aj=null
a.b=this.b},
$S:279}
A.Yd.prototype={
$0(){var s=t.S
return new A.fH(A.y(s,t.Aj),this.a,null,A.y(s,t.V))},
$S:280}
A.Yh.prototype={
$1(a){a.e=null
a.f=this.a.ay
a.r=null
a.b=this.b},
$S:281}
A.Yi.prototype={
$0(){return A.auh(this.a,null,null)},
$S:282}
A.Yj.prototype={
$1(a){a.k3=a.k2=null
a.k4=this.a.cy
a.aj=a.an=a.al=a.y2=a.y1=a.xr=a.x2=a.x1=a.to=a.ry=a.rx=a.RG=a.R8=a.p4=a.p3=a.p2=a.p1=a.ok=null
a.b=this.b},
$S:283}
A.Yk.prototype={
$0(){return A.ams(this.a,null)},
$S:112}
A.Yl.prototype={
$1(a){var s
a.as=null
s=this.a
a.at=s.rx
a.ax=s.ry
a.ay=s.to
a.ch=null
a.Q=s.aW
a.b=this.b},
$S:113}
A.Ym.prototype={
$0(){return A.ah1(this.a,null)},
$S:114}
A.Yn.prototype={
$1(a){var s=this.a
a.as=s.x2
a.at=null
a.ax=s.y1
a.ay=s.y2
a.ch=s.al
a.Q=s.aW
a.b=this.b},
$S:115}
A.Yo.prototype={
$0(){var s=t.S,r=A.cO(s)
return new A.fX(B.bb,A.aiS(),B.c7,A.y(s,t.ki),A.b8(s),A.y(s,t.o),r,this.a,null,A.y(s,t.V))},
$S:288}
A.Ye.prototype={
$1(a){var s=this.a
a.as=s.an
a.at=null
a.ax=s.ac
a.ay=s.aU
a.ch=null
a.Q=s.aW
a.b=this.b},
$S:397}
A.Yf.prototype={
$0(){var s=t.S,r=A.cO(s)
return new A.fK(B.lW,A.y(s,t.o),r,this.a,null,A.y(s,t.V))},
$S:290}
A.Yg.prototype={
$1(a){a.ax=a.as=a.at=a.Q=null
a.b=this.b},
$S:291}
A.ki.prototype={
ai(){return new A.oN(B.SE,B.m)}}
A.oN.prototype={
aB(){var s,r,q=this
q.aQ()
s=q.a
r=s.r
q.e=r==null?new A.M0(q):r
q.wR(s.d)},
aS(a){var s,r=this
r.bi(a)
if(!(a.r==null&&r.a.r==null)){s=r.a.r
r.e=s==null?new A.M0(r):s}r.wR(r.a.d)},
a4V(a){if(this.a.f)return
t.qS.a(this.c.ga9()).sa5D(a)},
m(){for(var s=this.d,s=J.av(s.gaZ(s));s.q();)s.gF(s).m()
this.d=null
this.aM()},
wR(a){var s,r,q,p,o=this,n=o.d
n.toString
o.d=A.y(t.n,t.oi)
for(s=J.av(a.gbo(a));s.q();){r=s.gF(s)
q=o.d
q.toString
p=n.j(0,r)
q.l(0,r,p==null?a.j(0,r).HJ():p)
q=a.j(0,r)
q.toString
r=o.d.j(0,r)
r.toString
q.Jd(r)}for(s=J.av(n.gbo(n));s.q();){r=s.gF(s)
if(!o.d.T(0,r))n.j(0,r).m()}},
T2(a){var s,r
for(s=this.d,s=J.av(s.gaZ(s));s.q();){r=s.gF(s)
r.d.l(0,a.gbP(),a.gc8(a))
if(r.f9(a))r.hc(a)
else r.ou(a)}},
UI(a){var s,r
for(s=this.d,s=J.av(s.gaZ(s));s.q();){r=s.gF(s)
r.d.l(0,a.gbP(),a.gc8(a))
if(r.a3h(a))r.xg(a)}},
Zj(a){this.e.xw(a)},
M(a){var s,r,q,p=this,o=null,n=p.a,m=n.e,l=m==null
if(l)s=n.c==null?B.d4:B.bQ
else s=m
r=n.c
q=A.F8(s,r,o,p.gT1(),p.gUH(),o,o)
if(!n.f){if(l)n=r==null?B.d4:B.bQ
else n=m
q=new A.MM(n,p.gZi(),q,o)}return q}}
A.MM.prototype={
aD(a){var s=new A.iW(B.bQ,null,A.at())
s.aG()
s.saR(null)
s.A=this.e
this.f.$1(s)
return s},
aK(a,b){b.A=this.e
this.f.$1(b)}}
A.a4j.prototype={
i(a){return"SemanticsGestureDelegate()"}}
A.M0.prototype={
xw(a){var s=this,r=s.a.d
r.toString
a.sjk(s.Tr(r))
a.skp(s.Ti(r))
a.sa42(s.Tg(r))
a.sa48(s.Ts(r))},
Tr(a){var s=t.f3.a(a.j(0,B.C6))
if(s==null)return null
return new A.a9w(s)},
Ti(a){var s=t.yA.a(a.j(0,B.C4))
if(s==null)return null
return new A.a9v(s)},
Tg(a){var s=t.oq.a(a.j(0,B.lN)),r=t.rR.a(a.j(0,B.lL)),q=s==null?null:new A.a9s(s),p=r==null?null:new A.a9t(r)
if(q==null&&p==null)return null
return new A.a9u(q,p)},
Ts(a){var s=t.iC.a(a.j(0,B.lO)),r=t.rR.a(a.j(0,B.lL)),q=s==null?null:new A.a9x(s),p=r==null?null:new A.a9y(r)
if(q==null&&p==null)return null
return new A.a9z(q,p)}}
A.a9w.prototype={
$0(){var s=this.a,r=s.y1
if(r!=null)r.$1(new A.pt(B.j,B.j))
r=s.y2
if(r!=null)r.$1(new A.pu())
s=s.al
if(s!=null)s.$0()},
$S:0}
A.a9v.prototype={
$0(){var s=this.a,r=s.ok
if(r!=null)r.$1(B.R0)
r=s.k4
if(r!=null)r.$0()
s=s.p3
if(s!=null)s.$1(B.QZ)},
$S:0}
A.a9s.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.iw(B.j))
r=s.at
if(r!=null)r.$1(new A.hs(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fI(B.c6,0))},
$S:22}
A.a9t.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.iw(B.j))
r=s.at
if(r!=null)r.$1(new A.hs(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fI(B.c6,null))},
$S:22}
A.a9u.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(a)
s=this.b
if(s!=null)s.$1(a)},
$S:22}
A.a9x.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.iw(B.j))
r=s.at
if(r!=null)r.$1(new A.hs(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fI(B.c6,0))},
$S:22}
A.a9y.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.iw(B.j))
r=s.at
if(r!=null)r.$1(new A.hs(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fI(B.c6,null))},
$S:22}
A.a9z.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(a)
s=this.b
if(s!=null)s.$1(a)},
$S:22}
A.lN.prototype={
E(){return"HeroFlightDirection."+this.b}}
A.lL.prototype={
ai(){return new A.q6(new A.bu(null,t.C),B.m)}}
A.YS.prototype={
$2(a,b){var s=a.f
s.toString
t.tV.a(s)
s=a.ok
s.toString
t.BJ.a(s)
if(!this.b||!1)this.a.l(0,b,s)
else s.Iq()},
$S:294}
A.YT.prototype={
$1(a){var s,r,q=this,p=a.f
p.toString
if(p instanceof A.lL){t.jw.a(a)
s=p.c
if(A.ahk(a)===q.a)q.b.$2(a,s)
else{r=A.a05(a,t.X)
if(r!=null)p=r.gkj()
else p=!1
if(p)q.b.$2(a,s)}}a.aP(q)},
$S:6}
A.q6.prototype={
uo(a){var s,r=this
r.f=a
s=r.c.ga9()
s.toString
r.au(new A.aaB(r,t.x.a(s)))},
un(){return this.uo(!1)},
lI(a){var s=this
if(a||s.e==null)return
s.e=null
if(s.c!=null)s.au(new A.aaA())},
Iq(){return this.lI(!1)},
M(a){var s,r=this,q=null,p=r.e,o=p==null,n=!o
if(n)r.a.toString
if(n&&!r.f){o=p.a
return A.fh(q,p.b,o)}s=o?q:p.a
p=o?q:p.b
return A.fh(new A.uX(n,new A.pA(o,new A.k2(r.a.e,r.d),q),q),p,s)}}
A.aaB.prototype={
$0(){var s=this.b.k3
s.toString
this.a.e=s},
$S:0}
A.aaA.prototype={
$0(){},
$S:0}
A.aax.prototype={
gbD(a){var s,r=this
if(r.a===B.bO){s=r.e.fy
s.toString}else{s=r.d.fy
s.toString}return A.ef(B.bp,s,r.z?null:new A.tv(B.bp))},
nX(a,b){var s
this.r.a.toString
s=this.w.$2(a,b)
return s==null?new A.vr(a,b):s},
gIR(){var s,r,q=this,p=q.Q
if(p===$){s=q.f.c
s.toString
r=A.amC(s,$.ai.I$.z.j(0,q.d.k2))
q.Q!==$&&A.bf()
q.Q=r
p=r}return p},
gtR(){var s,r,q=this,p=q.as
if(p===$){s=q.r.c
s.toString
r=A.amC(s,$.ai.I$.z.j(0,q.e.k2))
q.as!==$&&A.bf()
q.as=r
p=r}return p},
gkl(){var s,r,q=this,p=q.at
if(p===$){s=q.gtR()
if(s.gJu(s))if(!q.z){s=q.gIR()
s=s.gJu(s)
r=s}else r=!0
else r=!1
q.at!==$&&A.bf()
p=q.at=r}return p},
i(a){var s,r,q=this,p=q.a.i(0),o=q.f,n=o.a.c.i(0),m=q.d.b.i(0),l=q.e.b.i(0)
o=o.i(0)
s=q.r.i(0)
r=q.gkl()?"":", INVALID"
return"_HeroFlightManifest("+p+" tag: "+n+" from route: "+m+" to route: "+l+" with hero: "+o+" to "+s+")"+r}}
A.jb.prototype={
Rd(a){var s,r,q,p,o=this,n=o.c
if(n==null){n=o.f
n===$&&A.b()
s=n.gbD(n)
r=o.f
q=r.f.c
q.toString
p=r.r.c
p.toString
p=o.c=n.x.$5(a,s,r.a,q,p)
n=p}s=o.e
s===$&&A.b()
return A.l9(s,new A.aay(o),n)},
F8(a){var s,r=this,q=a===B.W
if(q||a===B.K){s=r.e
s===$&&A.b()
s.saI(0,null)
r.r.ml(0)
r.r=null
s=r.f
s===$&&A.b()
s.f.lI(q)
r.f.r.lI(a===B.K)
r.a.$1(r)
r.e.G(0,r.gK8())}},
E7(a){var s=this,r=s.f
r===$&&A.b()
r=r.d.a
if((r==null?null:r.CW.a)!==!0){s.F8(a)
return}if(s.x)return
r.toString
s.x=!0
r.CW.W(0,new A.aaz(s,r))},
a47(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(!h.w){s=h.f
s===$&&A.b()
s=s.r.c!=null}else s=!1
if(s){s=h.f
s===$&&A.b()
r=t.av.a(s.r.c.ga9())}else r=null
if(r!=null&&r.b!=null&&r.k3!=null){s=h.f
s===$&&A.b()
s=$.ai.I$.z.j(0,s.e.k2)
s=s==null?null:s.ga9()
q=A.cp(r.bt(0,t.av.a(s)),B.j)}else q=null
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
h.b=i.nX(p.a,new A.B(k,j,k+(n-m),j+(l-o)))}}else{p=h.d
if(p.gb_(p)===B.W){p=h.e
p===$&&A.b()
o=$.aq5()
n=p.gn(p)
m=A.n(o).h("mZ<aD.T>")
h.d=new A.aW(t.m.a(p),new A.mZ(new A.iu(new A.fP(n,1,B.aU)),o,m),m.h("aW<aD.T>"))}}if(s)s=!(isFinite(q.a)&&isFinite(q.b))
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
A.aay.prototype={
$2(a,b){var s,r=null,q=this.a,p=q.b
p===$&&A.b()
s=q.e
s===$&&A.b()
s=p.ad(0,s.gn(s))
s.toString
p=q.f
p===$&&A.b()
p=p.c
return A.Ib(p.b-s.d,new A.hx(!0,r,A.agS(b,q.d),r),r,r,s.a,p.a-s.c,s.b,r)},
$S:295}
A.aaz.prototype={
$0(){var s,r=this.a
r.x=!1
this.b.CW.G(0,this)
s=r.e
s===$&&A.b()
r.F8(s.gb_(s))},
$S:0}
A.tH.prototype={
rn(a,b){this.qh(b,a,B.bO,!1)},
rm(a,b){var s=$.he()
A.o1(this)
if(!s.a.get(this).CW.a)this.qh(a,b,B.bP,!1)},
ro(a,b){var s=a.gkj()
if(s)this.qh(b,a,B.bO,!1)},
I5(a,b){this.qh(a,b,B.bP,!0)},
o6(){var s,r,q,p=$.he()
A.o1(this)
if(p.a.get(this).CW.a)return
p=this.b
p=p.gaZ(p)
s=A.n(p).h("aN<q.E>")
r=A.aA(new A.aN(p,new A.YR(),s),!1,s.h("q.E"))
for(p=r.length,q=0;q<p;++q)r[q].E7(B.K)},
qh(a,b,c,d){var s
if(b!=a&&b instanceof A.hI&&a instanceof A.hI){switch(c.a){case 1:s=a.fy
if(s.gn(s)===0)return
break
case 0:s=b.fy
if(s.gn(s)===1)return
break}if(d)if(c===B.bP){b.goJ()
s=!0}else s=!1
else s=!1
if(s)this.G6(a,b,c,d)
else{s=b.fy
b.stn(s.gn(s)===0)
$.ai.ax$.push(new A.YQ(this,a,b,c,d))}}},
G6(b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null
b4.stn(!1)
s=$.he()
A.o1(b1)
s=s.a.get(b1)
r=s==null
if(r)q=b2
else{p=s.d
p===$&&A.b()
q=p.gbn()}if(r||q==null)return
o=s.c.ga9()
if(!(o instanceof A.E))return
n=$.ai.I$.z.j(0,b3.k2)
m=n!=null?A.akD(n,b6,s):B.zg
l=$.ai.I$.z.j(0,b4.k2)
k=l!=null?A.akD(l,b6,s):B.zg
for(s=m.gfD(m),s=s.ga7(s),r=b1.gS6(),p=b1.a,j=b1.b,i=t.Cf,h=b1.gUf(),g=t.A,f=t.Q,e=t.b,d=t.tY,c=t.a7,b=t.m,a=c.h("aW<aD.T>"),a0=t.sD;s.q();){a1=s.gF(s)
a2=a1.gdO(a1)
a3=a1.gn(a1)
a4=k.j(0,a2)
a5=j.j(0,a2)
if(a4==null)a6=b2
else{a1=o.k3
a1.toString
a4.a.toString
a3.a.toString
a6=new A.aax(b5,q,a1,b3,b4,a3,a4,p,r,b6,a5!=null)}if(a6!=null&&a6.gkl()){k.v(0,a2)
if(a5!=null){a1=a5.f
a1===$&&A.b()
a7=a1.a
if(a7===B.bO&&a6.a===B.bP){a1=a5.e
a1===$&&A.b()
a1.saI(0,new A.eM(a6.gbD(a6),new A.bh(A.a([],g),f),0))
a1=a5.b
a1===$&&A.b()
a5.b=new A.vH(a1,a1.b,a1.a,a0)}else{a7=a7===B.bP&&a6.a===B.bO
a8=a5.e
if(a7){a8===$&&A.b()
a1=a6.gbD(a6)
a7=a5.f
a7=a7.gbD(a7)
a7=a7.gn(a7)
a8.saI(0,new A.aW(b.a(a1),new A.aI(a7,1,c),a))
a1=a5.f
a7=a1.f
a8=a6.r
if(a7!==a8){a7.lI(!0)
a8.un()
a1=a5.f
a7=a5.b
a7===$&&A.b()
a5.b=a1.nX(a7.b,a6.gtR())}else{a7=a5.b
a7===$&&A.b()
a5.b=a1.nX(a7.b,a7.a)}}else{a7=a5.b
a7===$&&A.b()
a8===$&&A.b()
a5.b=a1.nX(a7.ad(0,a8.gn(a8)),a6.gtR())
a5.c=null
a1=a6.a
a7=a5.e
if(a1===B.bP)a7.saI(0,new A.eM(a6.gbD(a6),new A.bh(A.a([],g),f),0))
else a7.saI(0,a6.gbD(a6))
a5.f.f.lI(!0)
a5.f.r.lI(!0)
a6.f.uo(a1===B.bO)
a6.r.un()
a1=a5.r.f.gbn()
if(a1!=null)a1.EJ()}}a5.f=a6}else{a1=new A.jb(h,B.cW)
a7=A.a([],g)
a8=new A.bh(a7,f)
a9=new A.vj(a8,new A.bh(A.a([],e),d),0)
a9.a=B.K
a9.b=0
a9.bq()
a8.b=!0
a7.push(a1.gTA())
a1.e=a9
a1.f=a6
switch(a6.a.a){case 1:a9.saI(0,new A.eM(a6.gbD(a6),new A.bh(A.a([],g),f),0))
b0=!1
break
case 0:a9.saI(0,a6.gbD(a6))
b0=!0
break
default:b0=b2}a7=a1.f
a1.b=a7.nX(a7.gIR(),a1.f.gtR())
a1.f.f.uo(b0)
a1.f.r.un()
a7=a1.f
a8=new A.mQ(!1,$.bs())
a8.ac$=!0
a8=new A.fb(a1.gRc(),!1,a8,new A.bu(b2,i))
a1.r=a8
a7.b.yT(0,a8)
a8=a1.e
a8.bq()
a8=a8.aX$
a8.b=!0
a8.a.push(a1.gK8())
j.l(0,a2,a1)}}else if(a5!=null)a5.w=!0}for(s=J.av(k.gaZ(k));s.q();)s.gF(s).Iq()},
Ug(a){var s=a.f
s===$&&A.b()
this.b.v(0,s.f.a.c)},
S7(a,b,c,d,e){var s,r,q=e.f
q.toString
t.tV.a(q)
s=A.dp(e)
r=A.dp(d)
if(s==null||r==null)return q.e
return A.l9(b,new A.YP(s,c,r.f,s.f,b,q),null)}}
A.YR.prototype={
$1(a){var s=a.f
s===$&&A.b()
if(s.y)if(s.a===B.bP){s=a.e
s===$&&A.b()
s=s.gb_(s)===B.K}else s=!1
else s=!1
return s},
$S:298}
A.YQ.prototype={
$1(a){var s=this
s.a.G6(s.b,s.c,s.d,s.e)},
$S:2}
A.YP.prototype={
$2(a,b){var s=this,r=s.c,q=s.d,p=s.e
r=s.b===B.bO?new A.t9(r,q).ad(0,p.gn(p)):new A.t9(q,r).ad(0,p.gn(p))
return new A.f5(s.a.HP(r),s.f.e,null)},
$S:299}
A.o9.prototype={
M(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.a5(t.I)
f.toString
s=f.w
r=A.akH(a)
q=r.a
p=r.b
o=r.c
n=r.d
m=r.e
f=this.c
if(f==null)return A.dB(g,A.fh(g,q,q),!1,g,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)
l=r.r
k=l==null?g:A.G(l,0,1)
if(k==null)k=1
l=r.f
l.toString
if(k!==1)j=A.b2(B.d.b6(255*((l.gn(l)>>>24&255)/255*k)),l.gn(l)>>>16&255,l.gn(l)>>>8&255,l.gn(l)&255)
else j=l
l=A.dL(f.a)
i=A.a([],t.BV)
if(p!=null)i.push(new A.jN("FILL",p))
if(o!=null)i.push(new A.jN("wght",o))
if(n!=null)i.push(new A.jN("GRAD",n))
if(m!=null)i.push(new A.jN("opsz",m))
h=A.alI(g,g,B.VV,g,g,!0,g,A.a7G(g,A.bU(g,g,j,g,g,g,g,g,"MaterialIcons",g,g,q,g,i,g,g,g,!1,g,g,g,g,g,r.w,g,g),l),B.bG,s,g,1,B.aP)
if(f.d)switch(s.a){case 0:f=new A.bd(new Float64Array(16))
f.d2()
f.hH(0,-1,1,1)
h=A.amh(B.a_,h,f,!1)
break
case 1:break}return A.dB(g,new A.th(!0,A.fh(A.rn(h,g,g),q,q),g),!1,g,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)}}
A.lR.prototype={
k(a,b){var s
if(b==null)return!1
if(J.T(b)!==A.A(this))return!1
if(b instanceof A.lR)if(b.a===this.a)s=b.d===this.d
else s=!1
else s=!1
return s},
gu(a){return A.U(this.a,"MaterialIcons",null,this.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"IconData(U+"+B.c.jm(B.f.ip(this.a,16).toUpperCase(),5,"0")+")"}}
A.lS.prototype={
bW(a){return!this.w.k(0,a.w)}}
A.Zb.prototype={
$1(a){return A.ah4(this.c,A.akG(a).c_(this.b),this.a)},
$S:300}
A.cw.prototype={
nW(a,b,c,d,e,f,g,h){var s,r=this,q=g==null?r.a:g,p=b==null?r.b:b,o=h==null?r.c:h,n=c==null?r.d:c,m=e==null?r.e:e,l=a==null?r.f:a
if(d==null){s=r.r
s=s==null?null:A.G(s,0,1)}else s=d
return new A.cw(q,p,o,n,m,l,s,f==null?r.w:f)},
hk(a){return this.nW(a,null,null,null,null,null,null,null)},
c_(a){var s=a.r
s=s==null?null:A.G(s,0,1)
return this.nW(a.f,a.b,a.d,s,a.e,a.w,a.a,a.c)},
V(a){return this},
k(a,b){var s,r,q=this
if(b==null)return!1
if(J.T(b)!==A.A(q))return!1
if(b instanceof A.cw)if(b.a==q.a)if(b.b==q.b)if(b.c==q.c)if(b.d==q.d)if(b.e==q.e)if(J.f(b.f,q.f)){s=b.r
s=s==null?null:A.G(s,0,1)
r=q.r
s=s==(r==null?null:A.G(r,0,1))&&A.cL(b.w,q.w)}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gu(a){var s,r=this,q=r.r
q=q==null?null:A.G(q,0,1)
s=r.w
s=s==null?null:A.d7(s)
return A.U(r.a,r.b,r.c,r.d,r.e,r.f,q,s,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.MW.prototype={}
A.oa.prototype={
ai(){return new A.xH(B.m)}}
A.xH.prototype={
aB(){var s=this
s.aQ()
$.ai.ah$.push(s)
s.z=new A.Dc(s)},
m(){var s,r=this
B.b.v($.ai.ah$,r)
r.YG()
s=r.at
if(s!=null)s.m()
s=r.z
s===$&&A.b()
s.a=null
r.wy(null)
r.aM()},
b2(){var s,r=this
r.Z9()
r.wC()
s=r.c
s.toString
if(A.ame(s))r.VM()
else r.G9(!0)
r.cu()},
aS(a){var s,r,q=this
q.bi(a)
if(q.r&&q.a.e==null!==(a.e==null)){s=q.na()
r=q.d
r.toString
r.W(0,q.DW(!0))
q.d.G(0,s)}if(!q.a.c.k(0,a.c))q.wC()},
eM(){this.wC()
this.OT()},
Z9(){var s=this.c
s.toString
s=A.dp(s)
s=s==null?null:s.z
if(s==null){s=$.a48.dJ$
s===$&&A.b()
s=(s.a&2)!==0}this.w=s},
wC(){var s,r,q,p,o=this,n=o.z
n===$&&A.b()
s=o.a
r=s.c
q=o.c
q.toString
p=s.r
if(p!=null&&s.w!=null){p.toString
s=s.w
s.toString
s=new A.a_(p,s)}else s=null
o.Zl(new A.vS(n,r,t.rZ).V(A.aiL(q,s)))},
DW(a){var s,r=this,q=r.ax
if(q==null||a){r.as=r.Q=null
q=r.a
s=q.e==null?null:r.gUk()
q=q.f!=null||!1?new A.aaE(r):null
q=r.ax=new A.dm(r.gUm(),s,q)}q.toString
return q},
na(){return this.DW(!1)},
Un(a,b){this.au(new A.aaG(this,a,b))},
Ul(a){this.au(new A.aaF(this,a))},
wy(a){var s=this.e
$.bK.ax$.push(new A.aaH(s))
this.e=a},
Zl(a){var s,r,q=this,p=q.d
if(p==null)s=null
else{s=p.a
if(s==null)s=p}r=a.a
if(s===(r==null?a:r))return
if(q.r){p.toString
p.G(0,q.na())}q.a.toString
q.au(new A.aaI(q))
q.au(new A.aaJ(q))
q.d=a
if(q.r)a.W(0,q.na())},
VM(){var s,r=this
if(r.r)return
s=r.d
s.toString
s.W(0,r.na())
s=r.at
if(s!=null)s.m()
r.at=null
r.r=!0},
G9(a){var s,r=this
if(!r.r)return
if(a)if(r.at==null){s=r.d
s=(s==null?null:s.a)!=null}else s=!1
else s=!1
if(s)r.at=r.d.a.m9()
s=r.d
s.toString
s.G(0,r.na())
r.r=!1},
YG(){return this.G9(!1)},
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
h=new A.Io(r,q,o,n,e,s,f,p.z,m,l,k,j,f,!1,i,!1,f)
h=A.dB(f,h,!1,f,!1,f,f,f,!0,"",f,f,f,f,f,f,f,f,f,f,f)
e=p.d
if(e!=null)h=e.$4(a,h,g.x,g.y)
e=g.a.e
return e!=null?e.$3(a,h,g.f):h}}
A.aaE.prototype={
$2(a,b){var s=this.a
s.au(new A.aaD(s,a,b))},
$S:301}
A.aaD.prototype={
$0(){var s=this.a
s.Q=this.b
s.as=this.c},
$S:0}
A.aaG.prototype={
$0(){var s,r=this.a
r.wy(this.b)
r.as=r.Q=r.f=null
s=r.x
r.x=s==null?0:s+1
r.y=B.nG.LV(r.y,this.c)},
$S:0}
A.aaF.prototype={
$0(){var s=this.a
s.f=this.b
s.as=s.Q=null},
$S:0}
A.aaH.prototype={
$1(a){var s=this.a
if(s!=null)s.a.m()
return null},
$S:2}
A.aaI.prototype={
$0(){this.a.wy(null)},
$S:0}
A.aaJ.prototype={
$0(){var s=this.a
s.x=s.f=null
s.y=!1},
$S:0}
A.Re.prototype={}
A.CZ.prototype={
dA(a){var s=A.Uz(this.a,this.b,a)
s.toString
return s}}
A.t9.prototype={
dA(a){var s=A.agN(this.a,this.b,a)
s.toString
return s}}
A.lg.prototype={
dA(a){return A.ny(this.a,this.b,a)}}
A.mI.prototype={
dA(a){var s=A.ba(this.a,this.b,a)
s.toString
return s}}
A.EL.prototype={}
A.of.prototype={
gjI(){var s,r,q=this,p=q.d
if(p===$){s=q.a.d
r=A.dU(null,s,null,null,q)
q.d!==$&&A.bf()
q.d=r
p=r}return p},
gfm(){var s,r=this,q=r.e
if(q===$){s=r.gjI()
q=r.e=A.ef(r.a.c,s,null)}return q},
aB(){var s,r=this
r.aQ()
s=r.gjI()
s.bq()
s=s.aT$
s.b=!0
s.a.push(new A.ZB(r))
r.Dl()},
aS(a){var s,r=this
r.bi(a)
if(r.a.c!==a.c){r.gfm().m()
s=r.gjI()
r.e=A.ef(r.a.c,s,null)}r.gjI().e=r.a.d
if(r.Dl()){r.oq(new A.ZA(r))
s=r.gjI()
s.sn(0,0)
s.cJ(0)}},
m(){this.gfm().m()
this.gjI().m()
this.P4()},
Zo(a,b){var s
if(a==null)return
s=this.gfm()
a.sxB(a.ad(0,s.gn(s)))
a.slH(0,b)},
Dl(){var s={}
s.a=!1
this.oq(new A.Zz(s,this))
return s.a}}
A.ZB.prototype={
$1(a){switch(a.a){case 3:this.a.a.toString
break
case 0:case 1:case 2:break}},
$S:3}
A.ZA.prototype={
$3(a,b,c){this.a.Zo(a,b)
return a},
$S:117}
A.Zz.prototype={
$3(a,b,c){var s
if(b!=null){if(a==null)a=c.$1(b)
s=a.b
if(!J.f(b,s==null?a.a:s))this.a.a=!0
else if(a.b==null)a.slH(0,a.a)}else a=null
return a},
$S:117}
A.no.prototype={
aB(){this.Nh()
var s=this.gjI()
s.bq()
s=s.aX$
s.b=!0
s.a.push(this.gTy())},
Tz(){this.au(new A.SJ())}}
A.SJ.prototype={
$0(){},
$S:0}
A.qU.prototype={
ai(){return new A.KY(null,null,B.m)}}
A.KY.prototype={
oq(a){this.CW=t.uh.a(a.$3(this.CW,this.a.w,new A.a8u()))},
M(a){var s,r=this.CW
r.toString
s=this.gfm()
s=r.ad(0,s.gn(s))
return A.rT(this.a.r,null,B.cM,!0,s,null,null,B.aP)}}
A.a8u.prototype={
$1(a){return new A.mI(t.F1.a(a),null)},
$S:303}
A.qV.prototype={
ai(){return new A.KZ(null,null,B.m)}}
A.KZ.prototype={
oq(a){var s=this,r=s.CW
s.a.toString
s.CW=t.iH.a(a.$3(r,B.aA,new A.a8v()))
s.cx=t.nr.a(a.$3(s.cx,s.a.z,new A.a8w()))
r=t.mo
s.cy=r.a(a.$3(s.cy,s.a.Q,new A.a8x()))
s.db=r.a(a.$3(s.db,s.a.at,new A.a8y()))},
M(a){var s,r,q,p,o,n=this,m=n.a,l=m.w
m=m.x
s=n.CW
s.toString
r=n.gfm()
r=s.ad(0,r.gn(r))
s=n.cx
s.toString
q=n.gfm()
q=s.ad(0,q.gn(q))
s=n.a.Q
p=n.db
p.toString
o=n.gfm()
o=p.ad(0,o.gn(o))
o.toString
return new A.I1(l,m,r,q,s,o,n.a.r,null)}}
A.a8v.prototype={
$1(a){return new A.lg(t.ak.a(a),null)},
$S:304}
A.a8w.prototype={
$1(a){return new A.aI(A.S0(a),null,t.a7)},
$S:90}
A.a8x.prototype={
$1(a){return new A.hm(t.iO.a(a),null)},
$S:38}
A.a8y.prototype={
$1(a){return new A.hm(t.iO.a(a),null)},
$S:38}
A.q9.prototype={
m(){var s=this,r=s.dh$
if(r!=null)r.G(0,s.glq())
s.dh$=null
s.aM()},
c4(){this.dF()
this.cR()
this.lr()}}
A.jV.prototype={
bM(a){var s=A.fL(t.h,t.X)
return new A.tN(s,this,B.a4,A.n(this).h("tN<jV.T>"))}}
A.tN.prototype={
L8(a,b){var s=this.aj,r=this.$ti,q=r.h("c6<1>?").a(s.j(0,a))
if(q!=null&&q.gP(q))return
s.l(0,a,A.cO(r.c))},
JZ(a,b){var s,r=this.$ti,q=r.h("c6<1>?").a(this.aj.j(0,b))
if(q==null)return
if(!q.gP(q)){s=this.f
s.toString
s=r.h("jV<1>").a(s).a5A(a,q)
r=s}else r=!0
if(r)b.b2()}}
A.hy.prototype={
bW(a){return a.f!==this.f},
bM(a){var s=new A.qa(A.fL(t.h,t.X),this,B.a4,A.n(this).h("qa<hy.T>"))
this.f.W(0,s.gw0())
return s}}
A.qa.prototype={
ba(a,b){var s,r,q=this,p=q.f
p.toString
s=q.$ti.h("hy<1>").a(p).f
r=b.f
if(s!==r){p=q.gw0()
s.G(0,p)
r.W(0,p)}q.O1(0,b)},
b8(){var s,r=this
if(r.bF){s=r.f
s.toString
r.BT(r.$ti.h("hy<1>").a(s))
r.bF=!1}return r.O0()},
Vj(){this.bF=!0
this.fM()},
md(a){this.BT(a)
this.bF=!1},
pc(){var s=this,r=s.f
r.toString
s.$ti.h("hy<1>").a(r).f.G(0,s.gw0())
s.uy()}}
A.EN.prototype={}
A.qm.prototype={}
A.aeI.prototype={
$1(a){return this.a.a=a},
$S:26}
A.aeJ.prototype={
$1(a){return a.b},
$S:305}
A.aeK.prototype={
$1(a){var s,r,q,p
for(s=J.aG(a),r=this.a,q=this.b,p=0;p<s.gp(a);++p)q.l(0,A.aF(A.n(r.a[p].a).h("cR.T")),s.j(a,p))
return q},
$S:306}
A.cR.prototype={
i(a){return"LocalizationsDelegate["+A.aF(A.n(this).h("cR.T")).i(0)+"]"}}
A.R_.prototype={
m7(a){return!0},
cM(a,b){return new A.bm(B.Dd,t.mq)},
kJ(a){return!1},
i(a){return"DefaultWidgetsLocalizations.delegate(en_US)"}}
A.D4.prototype={
gbC(){return B.t},
$ij7:1}
A.xV.prototype={
bW(a){return this.w!==a.w}}
A.ua.prototype={
ai(){return new A.Nm(new A.bu(null,t.C),A.y(t.n,t.z),B.m)}}
A.Nm.prototype={
aB(){this.aQ()
this.cM(0,this.a.c)},
QU(a){var s,r,q,p,o,n,m=this.a.d,l=a.d
if(m.length!==l.length)return!0
s=A.a(m.slice(0),A.an(m))
r=A.a(l.slice(0),A.an(l))
for(q=0;q<s.length;++q){p=s[q]
o=r[q]
n=p instanceof A.bP?A.cX(p):null
m=A.aF(n==null?A.aR(p):n)
n=o instanceof A.bP?A.cX(o):null
if(m===A.aF(n==null?A.aR(o):n)){p.kJ(o)
m=!1}else m=!0
if(m)return!0}return!1},
aS(a){var s,r=this
r.bi(a)
if(r.a.c.k(0,a.c)){r.a.toString
s=r.QU(a)}else s=!0
if(s)r.cM(0,r.a.c)},
cM(a,b){var s,r=this,q={},p=r.a.d,o=p.length
if(o===0){r.f=b
return}q.a=null
s=A.azm(b,p).aY(new A.ab7(q),t.Co)
q=q.a
if(q!=null){r.e=q
r.f=b}else{++$.kk.x2$
s.aY(new A.ab8(r,b),t.H)}},
gGi(){return t.cC.a(J.aL(this.e,B.ZW)).gbC()},
M(a){var s,r,q,p=this,o=null
if(p.f==null)return B.fN
s=p.gGi()
p.f.toString
r=p.e
q=p.gGi()
return A.dB(o,new A.xV(p,r,A.agK(p.a.e,q),p.d),!1,o,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,s,o,o)}}
A.ab7.prototype={
$1(a){return this.a.a=a},
$S:307}
A.ab8.prototype={
$1(a){var s=this.a
if(s.c!=null)s.au(new A.ab6(s,a,this.b))
$.kk.Hb()},
$S:308}
A.ab6.prototype={
$0(){var s=this.a
s.e=this.b
s.f=this.c},
$S:0}
A.v_.prototype={
E(){return"Orientation."+this.b}}
A.iN.prototype={
rb(a,b,c,d,e){var s=this,r=c==null?s.c:c,q=a==null?s.f:a,p=e==null?s.r:e,o=d==null?s.e:d
return new A.iN(s.a,s.b,r,s.d,o,q,p,s.w,!1,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch)},
xM(a){return this.rb(null,null,a,null,null)},
HP(a){return this.rb(a,null,null,null,null)},
a0n(a,b){return this.rb(null,null,null,a,b)},
a0m(a,b){return this.rb(a,null,null,null,b)},
KA(a,b,c,d){var s,r,q,p,o,n,m=this,l=null
if(!(b||d||c||a))return m
s=m.f
r=b?0:l
q=d?0:l
p=c?0:l
r=s.nU(a?0:l,r,p,q)
q=m.r
p=b?Math.max(0,q.a-s.a):l
o=d?Math.max(0,q.b-s.b):l
n=c?Math.max(0,q.c-s.c):l
return m.a0m(r,q.nU(a?Math.max(0,q.d-s.d):l,p,n,o))},
a4O(a){var s=this,r=null,q=s.r,p=s.e,o=Math.max(0,q.d-p.d)
q=q.nU(o,r,r,r)
return s.a0n(p.nU(0,r,r,r),q)},
k(a,b){var s=this
if(b==null)return!1
if(J.T(b)!==A.A(s))return!1
return b instanceof A.iN&&b.a.k(0,s.a)&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.f.k(0,s.f)&&b.r.k(0,s.r)&&b.e.k(0,s.e)&&b.Q===s.Q&&b.as===s.as&&b.z===s.z&&b.y===s.y&&b.at===s.at&&b.ax===s.ax&&b.ay.k(0,s.ay)&&A.cL(b.ch,s.ch)},
gu(a){var s=this
return A.U(s.a,s.b,s.c,s.d,s.f,s.r,s.e,!1,s.Q,s.as,s.z,s.y,s.at,s.ax,s.ay,A.d7(s.ch),B.a,B.a,B.a,B.a)},
i(a){var s=this
return"MediaQueryData("+B.b.b9(A.a(["size: "+s.a.i(0),"devicePixelRatio: "+B.d.N(s.b,1),"textScaleFactor: "+B.d.N(s.c,1),"platformBrightness: "+s.d.i(0),"padding: "+s.f.i(0),"viewPadding: "+s.r.i(0),"viewInsets: "+s.e.i(0),"alwaysUse24HourFormat: false","accessibleNavigation: "+s.y,"highContrast: "+s.Q,"disableAnimations: "+s.as,"invertColors: "+s.z,"boldText: "+s.at,"navigationMode: "+s.ax.b,"gestureSettings: "+s.ay.i(0),"displayFeatures: "+A.h(s.ch)],t.s),", ")+")"}}
A.f5.prototype={
bW(a){return!this.f.k(0,a.f)}}
A.Hj.prototype={
E(){return"NavigationMode."+this.b}}
A.y1.prototype={
ai(){return new A.Nu(B.m)}}
A.Nu.prototype={
aB(){this.aQ()
$.ai.ah$.push(this)},
rl(){this.au(new A.abt())},
I3(){this.au(new A.abv())},
I2(){this.au(new A.abu())},
M(a){var s
$.ai.toString
s=A.al7($.ck())
return new A.f5(s,this.a.c,null)},
m(){B.b.v($.ai.ah$,this)
this.aM()}}
A.abt.prototype={
$0(){},
$S:0}
A.abv.prototype={
$0(){},
$S:0}
A.abu.prototype={
$0(){},
$S:0}
A.Rg.prototype={}
A.uD.prototype={
M(a){var s,r=null
switch(A.kZ().a){case 0:case 1:case 3:case 5:break
case 2:case 4:break}s=this.c
return A.arN(new A.th(!0,new A.NE(A.dB(r,A.uF(new A.fC(B.me,s==null?r:new A.ry(s,r,r),r),B.lG,r,r,r),!1,r,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),new A.a03(this,a),r),r))}}
A.a03.prototype={
$0(){A.K3(B.VH)},
$S:0}
A.pK.prototype={
f9(a){if(this.y1==null)return!1
return this.mP(a)},
IZ(a){},
J_(a,b){var s=this.y1
if(s!=null)s.$0()},
rW(a,b,c){}}
A.abz.prototype={
xw(a){a.sjk(this.a)}}
A.L3.prototype={
HJ(){var s=t.S,r=A.cO(s)
return new A.pK(B.aW,18,B.bq,A.y(s,t.o),r,null,null,A.y(s,t.V))},
Jd(a){a.y1=this.a}}
A.NE.prototype={
M(a){var s=this.d
return new A.ki(this.c,A.aV([B.ZX,new A.L3(s)],t.n,t.ob),B.aC,!1,new A.abz(s),null)}}
A.Hk.prototype={
M(a){var s,r,q=this,p=a.a5(t.I)
p.toString
s=A.a([],t.E)
r=q.c
if(r!=null)s.push(A.a_f(r,B.h6))
r=q.d
if(r!=null)s.push(A.a_f(r,B.h7))
r=q.e
if(r!=null)s.push(A.a_f(r,B.h8))
return new A.rM(new A.adh(q.f,q.r,p.w),s,null)}}
A.qD.prototype={
E(){return"_ToolbarSlot."+this.b}}
A.adh.prototype={
tB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.b.j(0,B.h6)!=null){s=a.a
r=a.b
q=e.dz(B.h6,new A.aO(0,s,r,r)).a
switch(e.f.a){case 0:p=s-q
break
case 1:p=0
break
default:p=null}e.dS(B.h6,new A.t(p,0))}else q=0
if(e.b.j(0,B.h8)!=null){o=e.dz(B.h8,A.agw(a))
switch(e.f.a){case 0:n=0
break
case 1:n=a.a-o.a
break
default:n=null}m=o.a
e.dS(B.h8,new A.t(n,(a.b-o.b)/2))}else m=0
if(e.b.j(0,B.h7)!=null){s=a.a
r=e.e
l=Math.max(s-q-m-r*2,0)
k=e.dz(B.h7,A.agw(a).a0f(l))
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
default:f=null}e.dS(B.h7,new A.t(f,(a.b-k.b)/2))}},
mG(a){return a.d!==this.d||a.e!==this.e||a.f!==this.f}}
A.mn.prototype={
E(){return"RoutePopDisposition."+this.b}}
A.bX.prototype={
gtv(){return B.rz},
jd(){},
o4(){var s=A.ahP()
s.aY(new A.a2Z(this),t.H)
return s},
o2(){var s=this.a
if(s==null)s=null
else{s.a.toString
s=!0}if(s===!0)A.ahP().aY(new A.a2Y(this),t.H)},
y9(a){},
ff(){var s=0,r=A.a4(t.ij),q,p=this
var $async$ff=A.a0(function(a,b){if(a===1)return A.a1(b,r)
while(true)switch(s){case 0:q=p.gJv()?B.TJ:B.B3
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$ff,r)},
gLg(){return!1},
k5(a){this.a11(a)
return!0},
a11(a){this.d.ca(0,null)},
lD(a){},
o3(a){},
y4(a){},
nN(){},
r4(){},
m(){this.a=null},
gkj(){var s,r=this.a
if(r==null)return!1
r=r.e
r=new A.bq(r,A.an(r).h("bq<1,df?>"))
s=r.mb(r,new A.a31(),new A.a32())
if(s==null)return!1
return s.a===this},
gJv(){var s,r=this.a
if(r==null)return!1
r=r.e
r=new A.bq(r,A.an(r).h("bq<1,df?>"))
s=r.rP(r,new A.a33(),new A.a34())
if(s==null)return!1
return s.a===this},
gt0(){var s,r,q,p,o=this.a
if(o==null)return!1
for(o=o.e,s=o.length,r=0;r<s;++r){q=o[r]
if(q.a===this)return!1
p=q.d.a
if(p<=10&&p>=1)return!0}return!1},
ga3c(){var s=this.a
if(s==null)return!1
s=s.e
s=new A.bq(s,A.an(s).h("bq<1,df?>"))
s=s.rP(s,new A.a3_(this),new A.a30())
s=s==null?null:s.gkk()
return s===!0}}
A.a2Z.prototype={
$1(a){var s,r=this.a.a
if(r==null)s=null
else{r.a.toString
s=!0}if(s===!0){r=r.x.gdt()
if(r!=null)r.tN()}},
$S:17}
A.a2Y.prototype={
$1(a){var s=this.a.a
if(s!=null){s=s.x.gdt()
if(s!=null)s.tN()}},
$S:17}
A.a31.prototype={
$1(a){return a!=null&&a.gkk()},
$S:25}
A.a32.prototype={
$0(){return null},
$S:9}
A.a33.prototype={
$1(a){return a!=null&&a.gkk()},
$S:25}
A.a34.prototype={
$0(){return null},
$S:9}
A.a3_.prototype={
$1(a){return a!=null&&A.amK(this.a).$1(a)},
$S:25}
A.a30.prototype={
$0(){return null},
$S:9}
A.fZ.prototype={
i(a){var s=this.a
s=s==null?"none":'"'+s+'"'
return"RouteSettings("+s+", "+A.h(this.b)+")"}}
A.iP.prototype={
rn(a,b){},
rm(a,b){},
y8(a,b){},
ro(a,b){},
I5(a,b){},
o6(){}}
A.lM.prototype={
bW(a){return a.f!=this.f}}
A.a2X.prototype={}
A.Kr.prototype={}
A.D3.prototype={}
A.uQ.prototype={
ai(){var s=null,r=A.a([],t.hi),q=$.bs(),p=t.a4
return new A.f9(r,new A.MS(q),A.iL(s,p),A.iL(s,p),A.agV(!0,"Navigator",!0,!0,s,s,!1),new A.vF(0,q,t.rj),A.j6(!1),A.b8(t.S),s,A.y(t.wb,t.M),s,!0,s,s,s,B.m)},
a41(a,b){return this.z.$2(a,b)}}
A.a0z.prototype={
$1(a){return a==null},
$S:310}
A.dQ.prototype={
E(){return"_RouteLifecycle."+this.b}}
A.NQ.prototype={}
A.df.prototype={
gcB(){var s,r
if(this.c){s=t.kd.a(this.a.b)
s.gcB()
r=A.h(s.gcB())
return"p+"+r}r=this.b
if(r!=null)return"r+"+r.gKL()
return null},
a2e(a,b,c,d){var s,r,q,p=this,o=p.d,n=p.a
n.a=b
n.jd()
s=p.d
if(s===B.Cn||s===B.Co){r=n.o4()
p.d=B.Cp
r.Lf(new A.acv(p,b))}else{n.y9(c)
p.d=B.cR}if(a)n.o3(null)
s=o===B.a0j||o===B.Co
q=b.r
if(s)q.d6(0,new A.yd(n,d))
else q.d6(0,new A.qj(n,d))},
a2d(a,b){var s,r=this
r.d=B.a0f
s=r.a
if((s.d.a.a&30)!==0)return!0
if(!s.k5(r.w)){r.d=B.cR
return!1}r.w=null
return!0},
m(){var s,r,q,p,o,n,m={}
this.d=B.a0h
s=this.a
r=s.gtv()
q=new A.act()
p=new A.aN(r,q,A.an(r).h("aN<1>"))
if(!p.ga7(p).q())s.m()
else{m.a=p.gp(p)
for(s=B.b.ga7(r),q=new A.pI(s,q);q.q();){r=s.gF(s)
o=A.b5("listener")
n=new A.acu(m,this,r,o)
o.b=n
r.d.W(0,n)}}},
ga5H(){var s=this.d.a
return s<=7&&s>=1},
gkk(){var s=this.d.a
return s<=10&&s>=1}}
A.acv.prototype={
$0(){var s=this.a
if(s.d===B.Cp){s.d=B.cR
this.b.vC()}},
$S:0}
A.act.prototype={
$1(a){return a.d.a},
$S:311}
A.acu.prototype={
$0(){var s=this,r=s.a;--r.a
s.c.d.G(0,s.d.aC())
if(r.a===0)s.b.a.m()},
$S:0}
A.acw.prototype={
$1(a){return a.a===this.a},
$S:39}
A.kL.prototype={}
A.qj.prototype={
ko(a){a.rn(this.a,this.b)}}
A.qi.prototype={
ko(a){a.rm(this.a,this.b)}}
A.yc.prototype={
ko(a){a.y8(this.a,this.b)}}
A.yd.prototype={
ko(a){a.ro(this.a,this.b)}}
A.f9.prototype={
aB(){var s,r,q,p,o=this
o.aQ()
for(s=o.a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q){p=s[q]
$.he().a.set(p,o)}o.Q=o.a.x
s=o.c.jx(t.hS)
if(s==null)s=null
else{s=s.f
s.toString}t.cn.a(s)
o.x0(s==null?null:s.f)
o.a.toString
B.fu.t6("selectSingleEntryHistory",t.H)},
im(a,b){var s,r,q,p,o,n,m=this
m.mk(m.as,"id")
s=m.f
m.mk(s,"history")
for(;r=m.e,r.length!==0;)r.pop().m()
m.d=new A.bu(null,t.r9)
B.b.J(r,s.KM(null,m))
m.a.toString
q=0
for(;!1;++q){p=B.MH[q]
r=m.c
r.toString
r=p.xR(r)
o=$.agd()
n=new A.df(r,null,!0,B.lX,o,o,o)
m.e.push(n)
B.b.J(m.e,s.KM(n,m))}if(s.y==null){s=m.a
r=m.e
o=s.f
B.b.J(r,J.Sv(s.a41(m,o),new A.a0y(m),t.ee))}m.vC()},
yb(a){var s,r=this
r.Op(a)
s=r.f
if(r.bf$!=null)s.ba(0,r.e)
else s.X(0)},
gcB(){return this.a.y},
b2(){var s,r,q,p,o=this
o.P8()
s=o.c.a5(t.hS)
o.x0(s==null?null:s.f)
for(r=o.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.R)(r),++p)r[p].a.r4()},
x0(a){var s,r,q=this
if(q.z!=a){if(a!=null)$.he().a.set(a,q)
s=q.z
if(s==null)s=null
else{r=$.he()
A.o1(s)
s=r.a.get(s)}if(s===q){s=$.he()
r=q.z
r.toString
s.a.set(r,null)}q.z=a
q.GF()}},
GF(){var s=this,r=s.z,q=s.a
if(r!=null)s.Q=B.b.S(q.x,A.a([r],t.yx))
else s.Q=q.x},
aS(a){var s,r,q,p,o=this
o.P9(a)
s=a.x
if(s!==o.a.x){for(r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q){p=s[q]
$.he().a.set(p,null)}for(s=o.a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q){p=s[q]
$.he().a.set(p,o)}o.GF()}o.a.toString
for(s=o.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q)s[q].a.r4()},
df(){var s,r,q,p=this.Q
p===$&&A.b()
s=p.length
r=0
for(;r<p.length;p.length===s||(0,A.R)(p),++r){q=p[r]
$.he().a.set(q,null)}this.mS()},
c4(){var s,r,q,p
this.P6()
s=this.Q
s===$&&A.b()
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.R)(s),++q){p=s[q]
$.he().a.set(p,this)}},
m(){var s,r,q,p=this
p.x0(null)
p.x.m()
for(s=p.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q)s[q].m()
p.Pa()},
gCI(){var s,r,q,p=A.a([],t.tD)
for(s=this.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q)B.b.J(p,s[q].a.gtv())
return p},
vD(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null
a.ay=!0
s=a.e
r=s.length-1
q=s[r]
p=r>0?s[r-1]:a0
o=A.a([],t.hi)
for(s=a.w,n=a.r,m=a0,l=m,k=!1,j=!1;r>=0;){switch(q.d.a){case 1:i=a.iy(r-1,A.aiT())
h=i>=0?a.e[i]:a0
h=h==null?a0:h.a
g=q.a
g.a=a
g.jd()
q.d=B.a0i
n.d6(0,new A.qj(g,h))
continue
case 2:if(k||l==null){h=q.a
h.o2()
q.d=B.cR
if(l==null)h.o3(a0)
continue}break
case 3:case 4:case 6:h=p==null?a0:p.a
i=a.iy(r-1,A.aiT())
g=i>=0?a.e[i]:a0
g=g==null?a0:g.a
q.a2e(l==null,a,h,g)
if(q.d===B.cR)continue
break
case 5:if(!j&&m!=null){q.a.lD(m)
q.f=m}j=!0
break
case 7:if(!j&&m!=null){q.a.lD(m)
q.f=m}k=!0
j=!0
break
case 8:i=a.iy(r,A.A0())
h=i>=0?a.e[i]:a0
if(!q.a2d(a,h==null?a0:h.a))continue
if(!j){if(m!=null){q.a.lD(m)
q.f=m}m=q.a}h=q.a
i=a.iy(r,A.A0())
g=i>=0?a.e[i]:a0
s.d6(0,new A.qi(h,g==null?a0:g.a))
if(q.d===B.lY)continue
k=!0
break
case 11:break
case 9:h=q.a
h=h.d.a
if((h.a&30)!==0)A.Y(A.a6("Future already completed"))
h.eR(a0)
q.w=null
q.d=B.a0e
continue
case 10:if(!j){if(m!=null)q.a.lD(m)
m=a0}i=a.iy(r,A.A0())
h=i>=0?a.e[i]:a0
h=h==null?a0:h.a
q.d=B.a0g
if(q.x)s.d6(0,new A.yc(q.a,h))
continue
case 12:if(!k&&l!=null)break
q.d=B.lY
continue
case 13:o.push(B.b.fP(a.e,r))
q=l
break
case 14:case 0:break}--r
f=r>0?a.e[r-1]:a0
l=q
q=p
p=f}a.SU()
a.SW()
a.a.toString
s=a.e
s=new A.bq(s,A.an(s).h("bq<1,df?>"))
e=s.mb(s,new A.a0s(),new A.a0t())
d=e==null?a0:e.a.b.a
if(d!=null&&d!==a.at){A.am9(d,!1,a0)
a.at=d}for(s=o.length,c=0;c<o.length;o.length===s||(0,A.R)(o),++c){q=o[c]
for(n=q.a.gtv(),h=n.length,b=0;b<n.length;n.length===h||(0,A.R)(n),++b)J.arp(n[b])
q.m()}if(a1){s=a.d
s===$&&A.b()
s=s.gbn()
if(s!=null)s.a4E(a.gCI())}if(a.bf$!=null)a.f.ba(0,a.e)
a.ay=!1},
vC(){return this.vD(!0)},
SU(){var s,r=this,q=r.Q
q===$&&A.b()
if(q.length===0){r.w.X(0)
r.r.X(0)
return}for(q=r.r;!q.gP(q);){s=q.dT(0)
B.b.a_(r.Q,s.goO())}for(q=r.w;!q.gP(q);){s=q.mm()
B.b.a_(r.Q,s.goO())}},
SW(){var s,r,q,p,o,n,m=this,l=null,k=m.e.length-1
for(;k>=0;){s=m.e[k]
r=s.d.a
if(!(r<=12&&r>=3)){--k
continue}q=m.Tn(k+1,A.aoM())
r=q==null
p=r?l:q.a
o=s.r
if(p!=o){if((r?l:q.a)==null){p=s.f
p=p!=null&&p===o}else p=!1
if(!p){p=s.a
p.o3(r?l:q.a)}s.r=r?l:q.a}--k
n=m.iy(k,A.aoM())
r=n>=0?m.e[n]:l
p=r==null
o=p?l:r.a
if(o!=s.e){o=s.a
o.y4(p?l:r.a)
s.e=p?l:r.a}}},
E0(a,b){a=this.iy(a,b)
return a>=0?this.e[a]:null},
iy(a,b){while(!0){if(!(a>=0&&!b.$1(this.e[a])))break;--a}return a},
Tn(a,b){var s
while(!0){s=this.e
if(!(a<s.length&&!b.$1(s[a])))break;++a}s=this.e
return a<s.length?s[a]:null},
qx(a,b,c,d){var s,r,q
if(b)this.a.toString
s=new A.fZ(a,c)
r=d.h("bX<0?>?")
q=r.a(this.a.r.$1(s))
return q==null&&!b?r.a(this.a.w.$1(s)):q},
wH(a,b,c){return this.qx(a,!1,b,c)},
CG(a){this.Rn()},
oL(a){var s=0,r=A.a4(t.y),q,p=this,o,n,m
var $async$oL=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)$async$outer:switch(s){case 0:m=p.e
m=new A.bq(m,A.an(m).h("bq<1,df?>"))
o=m.mb(m,new A.a0u(),new A.a0v())
if(o==null){q=!1
s=1
break}s=3
return A.a5(o.a.ff(),$async$oL)
case 3:n=c
if(p.c==null){q=!0
s=1
break}m=p.e
m=new A.bq(m,A.an(m).h("bq<1,df?>"))
if(o!==m.mb(m,new A.a0w(),new A.a0x())){q=!0
s=1
break}switch(n.a){case 2:q=!1
s=1
break $async$outer
case 0:p.a4j(a)
q=!0
s=1
break $async$outer
case 1:q=!0
s=1
break $async$outer}case 1:return A.a2(q,r)}})
return A.a3($async$oL,r)},
JQ(){return this.oL(null,t.X)},
a3P(a){return this.oL(a,t.X)},
Ke(a){var s=this,r=B.b.a3t(s.e,A.aiT())
if(r.c){s.a.toString
if(null.$2(r.a,a)&&r.d===B.cR)r.d=B.lZ}else{r.w=a
r.d=B.lZ}if(r.d===B.lZ)s.vD(!1)
s.CG(r.a)},
hz(){return this.Ke(null,t.X)},
a4j(a){return this.Ke(a,t.X)},
ID(a){var s,r=this,q=B.b.a2T(r.e,A.amK(a)),p=r.e[q]
if(p.c&&p.d.a<8){s=r.E0(q-1,A.A0())
s=s==null?null:s.a
r.w.d6(0,new A.qi(a,s))}p.d=B.lY
if(!r.ay)r.vD(!1)},
sGV(a){this.ch=a
this.CW.sn(0,a>0)},
a15(){var s,r,q,p,o,n,m=this
m.sGV(m.ch+1)
if(m.ch===1){s=m.iy(m.e.length-1,A.A0())
r=m.e[s].a
q=!r.gLg()&&s>0?m.E0(s-1,A.A0()).a:null
p=m.Q
p===$&&A.b()
o=p.length
n=0
for(;n<p.length;p.length===o||(0,A.R)(p),++n)p[n].I5(r,q)}},
o6(){var s,r,q,p=this
p.sGV(p.ch-1)
if(p.ch===0){s=p.Q
s===$&&A.b()
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.R)(s),++q)s[q].o6()}},
UE(a){this.cx.C(0,a.gbP())},
UM(a){this.cx.v(0,a.gbP())},
Rn(){if($.bK.CW$===B.cG){var s=this.d
s===$&&A.b()
s=$.ai.I$.z.j(0,s)
this.au(new A.a0r(s==null?null:s.rL(t.CE)))}s=this.cx
B.b.a_(A.aA(s,!0,A.n(s).c),$.ai.ga_n())},
M(a){var s,r=this,q=null,p=r.gUL(),o=A.akz(a),n=r.bf$,m=r.d
m===$&&A.b()
r.a.toString
if(m.gbn()==null){s=r.gCI()
s=J.lW(s.slice(0),A.an(s).c)}else s=B.rz
return new A.lM(q,A.F8(B.bQ,new A.A9(!1,A.aky(A.Ee(!0,q,A.a81(n,new A.oC(s,B.R,m)),q,q,q,r.x,!1,q,q,q,q,q,!0),o),q),p,r.gUD(),q,q,p),q)}}
A.a0y.prototype={
$1(a){var s,r,q=a.b.a
if(q!=null){s=this.a.as
r=s.y
if(r==null)r=s.$ti.h("bR.T").a(r)
s.Oo(0,r+1)
q=new A.NK(r,q,null,B.m_)}else q=null
return A.amJ(a,B.lX,!1,q)},
$S:314}
A.a0s.prototype={
$1(a){return a!=null&&a.gkk()},
$S:25}
A.a0t.prototype={
$0(){return null},
$S:9}
A.a0u.prototype={
$1(a){return a!=null&&a.gkk()},
$S:25}
A.a0v.prototype={
$0(){return null},
$S:9}
A.a0w.prototype={
$1(a){return a!=null&&a.gkk()},
$S:25}
A.a0x.prototype={
$0(){return null},
$S:9}
A.a0r.prototype={
$0(){var s=this.a
if(s!=null)s.sH1(!0)},
$S:0}
A.qu.prototype={
E(){return"_RouteRestorationType."+this.b}}
A.Pb.prototype={
gJy(){return!0},
r8(){return A.a([this.a.a],t.f)}}
A.NK.prototype={
r8(){var s=this,r=s.Pq(),q=A.a([s.c,s.d],t.f),p=s.e
if(p!=null)q.push(p)
B.b.J(r,q)
return r},
xR(a){var s=a.wH(this.d,this.e,t.z)
s.toString
return s},
gKL(){return this.c}}
A.ahY.prototype={
gJy(){return!1},
r8(){A.av6(this.d)},
xR(a){var s=a.c
s.toString
return this.d.$2(s,this.e)},
gKL(){return this.c}}
A.MS.prototype={
ba(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.y==null
if(a)c.y=A.y(t.N,t.lC)
s=t.f
r=A.a([],s)
q=c.y
q.toString
p=J.aL(q,null)
if(p==null)p=B.dg
o=A.y(t.dR,t.lC)
q=c.y
q.toString
n=J.arv(J.A7(q))
for(q=a1.length,m=b,l=a,k=!0,j=0;j<a1.length;a1.length===q||(0,A.R)(a1),++j){i=a1[j]
if(i.d.a>7){h=i.a
h.c.sn(0,b)
continue}if(i.c){l=l||r.length!==J.bB(p)
h=r.length
if(h!==0){g=m==null?b:m.gcB()
o.l(0,g,r)
n.v(0,g)}k=i.gcB()!=null
h=i.a
f=k?i.gcB():b
h.c.sn(0,f)
if(k){r=A.a([],s)
h=c.y
h.toString
p=J.aL(h,i.gcB())
if(p==null)p=B.dg}else{r=B.dg
p=B.dg}m=i
continue}if(k){h=i.b
h=h==null?b:h.gJy()
k=h===!0}else k=!1
h=i.a
f=k?i.gcB():b
h.c.sn(0,f)
if(k){h=i.b
f=h.b
h=f==null?h.b=h.r8():f
if(!l){f=J.aG(p)
e=f.gp(p)
d=r.length
l=e<=d||!J.f(f.j(p,d),h)}else l=!0
B.b.C(r,h)}}l=l||r.length!==J.bB(p)
c.SG(r,m,o,n)
if(l||n.gbA(n)){c.y=o
c.az()}},
SG(a,b,c,d){var s,r=a.length
if(r!==0){s=b==null?null:b.gcB()
c.l(0,s,a)
d.v(0,s)}},
X(a){if(this.y==null)return
this.y=null
this.az()},
KM(a,b){var s,r,q,p,o,n=A.a([],t.hi)
if(this.y!=null)s=a!=null&&a.gcB()==null
else s=!0
if(s)return n
s=this.y
s.toString
r=J.aL(s,a==null?null:a.gcB())
if(r==null)return n
for(s=J.av(r);s.q();){q=A.axB(s.gF(s))
p=q.xR(b)
o=$.agd()
n.push(new A.df(p,q,!1,B.lX,o,o,o))}return n},
re(){return null},
m0(a){a.toString
return J.ajF(t.G.a(a),new A.aaC(),t.dR,t.lC)},
Jc(a){this.y=a},
ms(){return this.y},
glG(a){return this.y!=null}}
A.aaC.prototype={
$2(a,b){return new A.aP(A.cs(a),A.eG(t.j.a(b),!0,t.K),t.cj)},
$S:315}
A.abQ.prototype={
$2(a,b){if(!a.a)a.G(0,b)},
$S:37}
A.ye.prototype={
c4(){this.dF()
this.cR()
this.eX()},
m(){var s=this,r=s.aq$
if(r!=null)r.G(0,s.gev())
s.aq$=null
s.aM()}}
A.yf.prototype={
aS(a){this.bi(a)
this.o8()},
b2(){var s,r,q,p,o=this
o.cu()
s=o.bf$
r=o.gmo()
q=o.c
q.toString
q=A.oX(q)
o.f4$=q
p=o.lo(q,r)
if(r){o.im(s,o.dI$)
o.dI$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.f3$.a_(0,new A.abQ())
s=r.bf$
if(s!=null)s.m()
r.bf$=null
r.P7()}}
A.Ho.prototype={
i(a){var s=A.a([],t.s)
this.cb(s)
return"Notification("+B.b.b9(s,", ")+")"},
cb(a){}}
A.d6.prototype={
bM(a){return new A.yg(this,B.a4,this.$ti.h("yg<1>"))}}
A.yg.prototype={
K3(a){var s,r=this.f
r.toString
s=this.$ti
s.h("d6<1>").a(r)
if(s.c.b(a))return r.d.$1(a)
return!1},
md(a){}}
A.eF.prototype={}
A.Rl.prototype={}
A.fb.prototype={
smg(a){var s
if(this.b===a)return
this.b=a
s=this.e
if(s!=null)s.Dv()},
soJ(a){if(this.c)return
this.c=!0
this.e.Dv()},
G(a,b){this.d.G(0,b)},
ml(a){var s,r=this.e
r.toString
this.e=null
if(r.c==null)return
B.b.v(r.d,this)
s=$.bK
if(s.CW$===B.B4)s.ax$.push(new A.a0P(r))
else r.EH()},
fM(){var s=this.f.gbn()
if(s!=null)s.EJ()},
i(a){return"<optimized out>#"+A.bI(this)+"(opaque: "+this.b+"; maintainState: "+this.c+")"},
$iab:1,
Ht(a){return this.a.$1(a)}}
A.a0P.prototype={
$1(a){this.a.EH()},
$S:2}
A.ql.prototype={
ai(){return new A.yh(B.m)}}
A.yh.prototype={
aB(){this.aQ()
this.a.c.d.sn(0,!0)},
m(){this.a.c.d.sn(0,!1)
this.a.toString
this.aM()},
M(a){var s=this.a
return new A.pA(s.d,s.c.Ht(a),null)},
EJ(){this.au(new A.abU())}}
A.abU.prototype={
$0(){},
$S:0}
A.oC.prototype={
ai(){return new A.oE(A.a([],t.tD),null,null,B.m)}}
A.oE.prototype={
aB(){this.aQ()
this.a2V(0,this.a.c)},
w6(a,b){return this.d.length},
yT(a,b){b.e=this
this.au(new A.a0T(this,null,null,b))},
a2V(a,b){var s,r=b.length
if(r===0)return
for(s=0;s<r;++s)b[s].e=this
this.au(new A.a0S(this,null,null,b))},
a4E(a){var s,r,q,p,o,n=this
if(t.rF.b(a))s=a
else s=J.lW(a.slice(0),A.an(a).c)
if(s.length===0)return
r=n.d
if(A.cL(r,s))return
q=A.k4(r,t.u7)
for(r=s.length,p=0;p<r;++p){o=s[p]
if(o.e==null)o.e=n}n.au(new A.a0U(n,s,q,null,null))},
EH(){if(this.c!=null)this.au(new A.a0R())},
Dv(){this.au(new A.a0Q())},
M(a){var s,r,q,p,o,n=A.a([],t.E)
for(s=this.d,r=s.length-1,q=!0,p=0;r>=0;--r){o=s[r]
if(q){++p
n.push(new A.ql(o,!0,o.f))
q=!o.b||!1}else if(o.c)n.push(new A.ql(o,!1,o.f))}s=t.m8
return new A.Qj(n.length-p,this.a.d,A.aA(new A.cF(n,s),!1,s.h("bl.E")),null)}}
A.a0T.prototype={
$0(){var s=this,r=s.a
B.b.oz(r.d,r.w6(s.b,s.c),s.d)},
$S:0}
A.a0S.prototype={
$0(){var s=this,r=s.a
B.b.Je(r.d,r.w6(s.b,s.c),s.d)},
$S:0}
A.a0U.prototype={
$0(){var s,r,q=this,p=q.a,o=p.d
B.b.X(o)
s=q.b
B.b.J(o,s)
r=q.c
r.a4K(s)
B.b.Je(o,p.w6(q.d,q.e),r)},
$S:0}
A.a0R.prototype={
$0(){},
$S:0}
A.a0Q.prototype={
$0(){},
$S:0}
A.Qj.prototype={
bM(a){var s=A.cO(t.h)
return new A.Qk(s,this,B.a4)},
aD(a){var s=a.a5(t.I)
s.toString
s=new A.qt(s.w,this.e,this.f,A.at(),0,null,null,A.at())
s.aG()
s.J(0,null)
return s},
aK(a,b){var s=this.e
if(b.ao!==s){b.ao=s
b.a8()}s=a.a5(t.I)
s.toString
b.sbC(s.w)
s=this.f
if(s!==b.ah){b.ah=s
b.ap()
b.b0()}}}
A.Qk.prototype={
ga9(){return t.z2.a(A.eH.prototype.ga9.call(this))}}
A.qt.prototype={
ei(a){if(!(a.e instanceof A.dN))a.e=new A.dN(null,null,B.j)},
WK(){if(this.t!=null)return
this.t=B.aR.V(this.I)},
sbC(a){var s=this
if(s.I===a)return
s.I=a
s.t=null
s.a8()},
gpU(){var s,r,q,p,o=this
if(o.ao===A.as.prototype.gr5.call(o))return null
s=A.as.prototype.ga1B.call(o,o)
for(r=o.ao,q=t.B;r>0;--r){p=s.e
p.toString
s=q.a(p).ak$}return s},
ez(a){var s,r,q,p,o=this.gpU()
for(s=t.B,r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.jw(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.ak$}return r},
gjC(){return!0},
c5(a){return new A.a_(A.G(1/0,a.a,a.b),A.G(1/0,a.c,a.d))},
bB(){var s,r,q,p,o,n,m,l,k=this
k.L=!1
if(k.dg$-k.ao===0)return
k.WK()
s=t.k.a(A.x.prototype.gZ.call(k))
r=A.AD(new A.a_(A.G(1/0,s.a,s.b),A.G(1/0,s.c,s.d)))
q=k.gpU()
for(s=t.B,p=t.uu;q!=null;){o=q.e
o.toString
s.a(o)
if(!o.gz_()){q.cn(r,!0)
n=k.t
n.toString
m=k.k3
m.toString
l=q.k3
l.toString
o.a=n.lu(p.a(m.aa(0,l)))}else{n=k.k3
n.toString
m=k.t
m.toString
k.L=A.alE(q,o,n,m)||k.L}q=o.ak$}},
cK(a,b){var s,r,q,p=this,o={},n=o.a=p.ao===A.as.prototype.gr5.call(p)?null:p.cW$
for(s=t.B,r=0;r<p.dg$-p.ao;++r,n=q){n=n.e
n.toString
s.a(n)
if(a.nA(new A.acj(o,b,n),n.a,b))return!0
q=n.bQ$
o.a=q}return!1},
tz(a,b){var s,r,q,p,o,n=this.gpU()
for(s=t.B,r=b.a,q=b.b;n!=null;){p=n.e
p.toString
s.a(p)
o=p.a
a.eL(n,new A.t(o.a+r,o.b+q))
n=p.ak$}},
aE(a,b){var s,r=this,q=r.L&&r.ah!==B.l,p=r.aW
if(q){q=r.cx
q===$&&A.b()
s=r.k3
p.saV(0,a.ks(q,b,new A.B(0,0,0+s.a,0+s.b),r.gzS(),r.ah,p.a))}else{p.saV(0,null)
r.tz(a,b)}},
m(){this.aW.saV(0,null)
this.hP()},
fT(a){var s,r,q=this.gpU()
for(s=t.B;q!=null;){a.$1(q)
r=q.e
r.toString
q=s.a(r).ak$}},
iP(a){var s
switch(this.ah.a){case 0:return null
case 1:case 2:case 3:if(this.L){s=this.k3
s=new A.B(0,0,0+s.a,0+s.b)}else s=null
return s}}}
A.acj.prototype={
$2(a,b){return this.a.a.bR(a,b)},
$S:16}
A.O0.prototype={
c4(){this.dF()
this.cR()
this.eX()},
m(){var s=this,r=s.aq$
if(r!=null)r.G(0,s.gev())
s.aq$=null
s.aM()}}
A.Rr.prototype={
am(a){var s,r,q
this.em(a)
s=this.ar$
for(r=t.B;s!=null;){s.am(a)
q=s.e
q.toString
s=r.a(q).ak$}},
af(a){var s,r,q
this.dD(0)
s=this.ar$
for(r=t.B;s!=null;){s.af(0)
q=s.e
q.toString
s=r.a(q).ak$}}}
A.o7.prototype={
ai(){var s=t.y
return new A.xE(A.aV([!1,!0,!0,!0],s,s),null,null,B.m)},
ji(a){return A.A2().$1(a)}}
A.xE.prototype={
aB(){var s,r,q=this
q.aQ()
s=q.a
r=s.f
q.d=A.amB(A.bc(s.e),r,q)
r=q.a
s=r.f
s=A.amB(A.bc(r.e),s,q)
q.e=s
r=q.d
r.toString
q.f=new A.y2(A.a([r,s],t.ro))},
aS(a){var s,r=this
r.bi(a)
if(!a.f.k(0,r.a.f)||A.bc(a.e)!==A.bc(r.a.e)){s=r.d
s.toString
s.sae(0,r.a.f)
s=r.d
s.toString
s.sHk(A.bc(r.a.e))
s=r.e
s.toString
s.sae(0,r.a.f)
s=r.e
s.toString
s.sHk(A.bc(r.a.e))}},
wo(a){var s,r,q,p,o,n,m,l,k,j=this
if(!j.a.ji(a))return!1
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
if(a instanceof A.hG){q=a.e
if(q<0)n=s
else if(q>0)n=p
else n=null
m=n===s
s=j.c
s.cT(new A.v1(m,0))
s=j.w
s.l(0,m,!0)
s.j(0,m).toString
n.d=0
j.w.j(0,m).toString
s=a.f
if(s!==0){r=n.c
if(r!=null)r.av(0)
n.c=null
l=A.G(Math.abs(s),100,1e4)
s=n.f
if(n.a===B.fX)r=0.3
else{r=n.r
r===$&&A.b()
q=r.a
q=r.b.ad(0,q.gn(q))
r=q}s.a=r
r.toString
s.b=A.G(l*0.00006,r,0.5)
r=n.w
s=n.x
s===$&&A.b()
q=s.a
r.a=s.b.ad(0,q.gn(q))
r.b=Math.min(0.025+75e-8*l*l,1)
r=n.b
r===$&&A.b()
r.e=A.c8(0,B.d.b6(0.15+l*0.02),0)
r.kh(0,0)
n.as=0.5
n.a=B.a_N}else{s=a.d
if(s!=null){p=a.b.ga9()
p.toString
t.x.a(p)
o=p.k3
o.toString
k=p.kG(s.d)
switch(A.bc(r.e).a){case 0:n.toString
s=o.b
n.Kk(0,Math.abs(q),o.a,A.G(k.b,0,s),s)
break
case 1:n.toString
s=o.a
n.Kk(0,Math.abs(q),o.b,A.G(k.a,0,s),s)
break}}}}else if(a instanceof A.iX||a instanceof A.hU)if(a.gIe()!=null){s=j.d
if(s.a===B.fY)s.jO(B.d2)
s=j.e
if(s.a===B.fY)s.jO(B.d2)}j.r=A.A(a)
return!1},
m(){this.d.m()
this.e.m()
this.Q1()},
M(a){var s=this,r=null,q=s.a,p=s.d,o=s.e,n=q.e,m=s.f
return new A.d6(s.gwn(),new A.hS(A.CN(new A.hS(q.w,r),new A.MR(p,o,n,m),r,r,B.Q),r),r,t.Bf)}}
A.n3.prototype={
E(){return"_GlowState."+this.b}}
A.xD.prototype={
sae(a,b){if(this.ax.k(0,b))return
this.ax=b
this.az()},
sHk(a){if(this.ay===a)return
this.ay=a
this.az()},
m(){var s=this,r=s.b
r===$&&A.b()
r.m()
r=s.y
r===$&&A.b()
r.w.bw$.v(0,r)
r.Cf()
r=s.c
if(r!=null)r.av(0)
s.dE()},
Kk(a,b,c,d,e){var s,r,q,p=this,o=p.c
if(o!=null)o.av(0)
p.at=p.at+b/200
o=p.f
s=p.r
s===$&&A.b()
r=s.b
s=s.a
o.a=r.ad(0,s.gn(s))
o.b=Math.min(r.ad(0,s.gn(s))+b/c*0.8,0.5)
q=Math.min(c,e*0.20096189432249995)
s=p.w
r=p.x
r===$&&A.b()
o=r.b
r=r.a
s.a=o.ad(0,r.gn(r))
s.b=Math.max(1-1/(0.7*Math.sqrt(p.at*q)),A.kW(o.ad(0,r.gn(r))))
r=d/e
p.Q=r
if(r!==p.as){o=p.y
o===$&&A.b()
if(!o.ga3l())o.mL(0)}else{o=p.y
o===$&&A.b()
o.fZ(0)
p.z=null}o=p.b
o===$&&A.b()
o.e=B.no
if(p.a!==B.fY){o.kh(0,0)
p.a=B.fY}else{o=o.r
if(!(o!=null&&o.a!=null))p.az()}p.c=A.cc(B.no,new A.aal(p))},
v2(a){var s=this
if(a!==B.W)return
switch(s.a.a){case 1:s.jO(B.d2)
break
case 3:s.a=B.fX
s.at=0
break
case 2:case 0:break}},
jO(a){var s,r,q=this,p=q.a
if(p===B.Cj||p===B.fX)return
p=q.c
if(p!=null)p.av(0)
q.c=null
p=q.f
s=q.r
s===$&&A.b()
r=s.a
p.a=s.b.ad(0,r.gn(r))
p.b=0
p=q.w
r=q.x
r===$&&A.b()
s=r.a
p.a=r.b.ad(0,s.gn(s))
p.b=0
p=q.b
p===$&&A.b()
p.e=a
p.kh(0,0)
q.a=B.Cj},
YQ(a){var s,r=this,q=r.z
if(q!=null){q=q.a
s=r.Q
r.as=s-(s-r.as)*Math.pow(2,-(a.a-q)/$.aq4().a)
r.az()}if(A.A1(r.Q,r.as,0.001)){q=r.y
q===$&&A.b()
q.fZ(0)
r.z=null}else r.z=a},
aE(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.r
i===$&&A.b()
s=i.a
if(J.f(i.b.ad(0,s.gn(s)),0))return
s=b.a
r=b.b
q=s>r?r/s:1
p=s*3/2
o=Math.min(r,s*0.20096189432249995)
r=j.x
r===$&&A.b()
n=r.a
n=r.b.ad(0,n.gn(n))
r=j.as
m=$.ao().bd()
l=j.ax
k=i.a
m.sae(0,A.b2(B.d.b6(255*i.b.ad(0,k.gn(k))),l.gn(l)>>>16&255,l.gn(l)>>>8&255,l.gn(l)&255))
a.cr(0)
a.aA(0,0,j.d+j.e)
a.dl(0,1,n*q)
a.jX(new A.B(0,0,0+s,0+o))
a.i0(new A.t(s/2*(0.5+r),o-p),p,m)
a.co(0)},
i(a){return"_GlowController(color: "+this.ax.i(0)+", axis: "+A.aAn(this.ay)+")"}}
A.aal.prototype={
$0(){return this.a.jO(B.hB)},
$S:0}
A.MR.prototype={
F1(a,b,c,d,e){var s
if(c==null)return
switch(A.js(d,e)){case B.y:c.aE(a,b)
break
case B.x:a.cr(0)
a.aA(0,0,b.b)
a.dl(0,1,-1)
c.aE(a,b)
a.co(0)
break
case B.ae:a.cr(0)
a.ky(0,1.5707963267948966)
a.dl(0,1,-1)
c.aE(a,new A.a_(b.b,b.a))
a.co(0)
break
case B.au:a.cr(0)
s=b.a
a.aA(0,s,0)
a.ky(0,1.5707963267948966)
c.aE(a,new A.a_(b.b,s))
a.co(0)
break}},
aE(a,b){var s=this,r=s.d
s.F1(a,b,s.b,r,B.nC)
s.F1(a,b,s.c,r,B.nB)},
hL(a){return a.b!=this.b||a.c!=this.c},
i(a){return"_GlowingOverscrollIndicatorPainter("+A.h(this.b)+", "+A.h(this.c)+")"}}
A.pl.prototype={
ai(){return new A.z2(null,null,B.m)},
ji(a){return A.A2().$1(a)}}
A.z2.prototype={
gjS(){var s,r,q,p,o,n,m=this,l=null,k=m.d
if(k===$){s=t.a7
r=new A.aI(0,0,s)
q=new A.z1(r,B.m4,$.bs())
p=A.dU(l,l,l,l,m)
p.bq()
o=p.aT$
o.b=!0
o.a.push(q.gv1())
q.a!==$&&A.et()
q.a=p
n=A.ef(B.mW,p,l)
n.a.W(0,q.gec())
t.m.a(n)
q.b!==$&&A.et()
q.b=new A.aW(n,r,s.h("aW<aD.T>"))
m.d!==$&&A.bf()
m.d=q
k=q}return k},
wo(a){var s,r,q,p,o,n,m=this
if(!m.a.ji(a))return!1
if(a instanceof A.hG){m.f=a
J.T(m.e)
s=a.e
r=m.c
r.cT(new A.v1(s<0,0))
m.r=!0
r=a.f
if(r!==0){s=m.gjS()
q=A.G(Math.abs(r),1,1e4)
r=s.c
p=s.b
p===$&&A.b()
o=p.a
r.a=p.b.ad(0,o.gn(o))
r.b=Math.min(0.016+1.01/q,1)
r=s.a
r===$&&A.b()
r.e=A.c8(0,B.d.b6(q*0.02),0)
r.kh(0,0)
s.d=B.a0l}else if(a.d!=null){r=a.a.d
r.toString
n=A.G(Math.abs(s)/r+m.gjS().e,0,1)
r=m.gjS()
r.e=n
s=r.c
p=r.b
p===$&&A.b()
o=p.a
s.a=p.b.ad(0,o.gn(o))
o=r.e
s.b=0.016*o+0.016*(1-Math.exp(-o*8.237217661997105))
o=r.a
o===$&&A.b()
o.e=B.hC
if(r.d!==B.m5){o.kh(0,0)
r.d=B.m5}else{s=o.r
if(!(s!=null&&s.a!=null))r.az()}}}else if(a instanceof A.iX||a instanceof A.hU){s=m.gjS()
if(s.d===B.m5)s.jO(B.hC)}m.e=a
return!1},
T5(a){switch(this.a.c.a){case 0:return a>0?B.m7:B.m6
case 1:return a>0?B.e1:B.h9
case 2:return a>0?B.m6:B.m7
case 3:return a>0?B.h9:B.e1}},
m(){var s=this.gjS(),r=s.a
r===$&&A.b()
r.m()
s.dE()
this.Qa()},
M(a){var s={},r=a.a5(t.l).f
s.a=null
return new A.d6(this.gwn(),A.l9(this.gjS(),new A.acX(s,this,r.a),null),null,t.Bf)}}
A.acX.prototype={
$2(a,b){var s,r,q,p,o,n,m=this,l=m.b,k=l.gjS().b
k===$&&A.b()
s=k.a
s=k.b.ad(0,s.gn(s))
switch(A.bc(l.a.c).a){case 0:r=1+s
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
p=l.T5(k==null?0:k)
k=l.f
if(k==null)o=null
else{k=k.a.d
k.toString
o=k}if(o==null)o=m.a.a
k=A.uv(r,q,1)
l=l.a
n=A.amh(p,l.f,k,!0)
return A.ak4(n,s!==0&&o!==m.a.a?l.e:B.l)},
$S:316}
A.nc.prototype={
E(){return"_StretchState."+this.b}}
A.z1.prototype={
v2(a){var s=this
if(a!==B.W)return
switch(s.d.a){case 1:s.jO(B.hC)
break
case 3:s.d=B.m4
s.e=0
break
case 2:case 0:break}},
jO(a){var s,r,q=this,p=q.d
if(p===B.Cq||p===B.m4)return
p=q.c
s=q.b
s===$&&A.b()
r=s.a
p.a=s.b.ad(0,r.gn(r))
p.b=0
p=q.a
p===$&&A.b()
p.e=a
p.kh(0,0)
q.d=B.Cq},
i(a){return"_StretchController()"}}
A.v1.prototype={
cb(a){this.Pb(a)
a.push("side: "+(this.a?"leading edge":"trailing edge"))}}
A.yj.prototype={
cb(a){var s,r
this.uz(a)
s=this.bx$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.zD.prototype={
c4(){this.dF()
this.cR()
this.eX()},
m(){var s=this,r=s.aq$
if(r!=null)r.G(0,s.gev())
s.aq$=null
s.aM()}}
A.zJ.prototype={
c4(){this.dF()
this.cR()
this.eX()},
m(){var s=this,r=s.aq$
if(r!=null)r.G(0,s.gev())
s.aq$=null
s.aM()}}
A.z_.prototype={
k(a,b){if(b==null)return!1
if(J.T(b)!==A.A(this))return!1
return b instanceof A.z_&&A.cL(b.a,this.a)},
gu(a){return A.d7(this.a)},
i(a){return"StorageEntryIdentifier("+B.b.b9(this.a,":")+")"}}
A.a0V.prototype={
CH(a){var s=A.a([],t.D5)
if(A.alj(a,s))a.AD(new A.a0W(s))
return s},
Lj(a,b){var s,r=this
if(r.a==null)r.a=A.y(t.K,t.z)
s=r.CH(a)
if(s.length!==0)r.a.l(0,new A.z_(s),b)},
Kr(a){var s
if(this.a==null)return null
s=this.CH(a)
return s.length!==0?this.a.j(0,new A.z_(s)):null}}
A.a0W.prototype={
$1(a){return A.alj(a,this.a)},
$S:42}
A.oG.prototype={
M(a){return this.c}}
A.Hy.prototype={
He(a,b,c){var s=t.sa.a(B.b.gbh(this.d))
if(s.I!=null){s.I=a
return A.bx(null,t.H)}return s.he(s.kB(a),b,c)},
ta(a){var s=t.sa.a(B.b.gbh(this.d))
if(s.I!=null){s.I=a
return}s.dw(s.kB(a))},
HT(a,b,c){var s=null,r=new A.kM(this.z,this.as,B.fz,a,b,!0,s,A.j6(!1),$.bs())
r.Cm(b,s,!0,c,a)
r.Cn(b,s,s,!0,c,a)
return r},
am(a){this.OD(a)
t.sa.a(a).spj(this.as)}}
A.Hz.prototype={}
A.kM.prototype={
yn(a,b,c,d,e,f){return this.ON(a,b,c,d,e,null)},
spj(a){var s,r=this
if(r.ao===a)return
s=r.gjn(r)
r.ao=a
if(s!=null)r.yD(r.kB(s))},
gq8(){var s=this.ax
s.toString
return Math.max(0,s*(this.ao-1)/2)},
pp(a,b){var s=Math.max(0,a-this.gq8())/(b*this.ao),r=B.d.Ac(s)
if(Math.abs(s-r)<1e-10)return r
return s},
kB(a){var s=this.ax
s.toString
return a*s*this.ao+this.gq8()},
gjn(a){var s,r,q=this,p=q.at
if(p!=null)s=!(q.z!=null&&q.Q!=null)
else s=!0
if(s)p=null
else{s=q.I
if(s==null){p.toString
s=q.z
s.toString
r=q.Q
r.toString
r=A.G(p,s,r)
s=q.ax
s.toString
s=q.pp(r,s)
p=s}else p=s}return p},
B5(){var s,r,q=this,p=q.w,o=p.c
o.toString
o=A.a0X(o)
if(o!=null){p=p.c
p.toString
s=q.I
if(s==null){s=q.at
s.toString
r=q.ax
r.toString
r=q.pp(s,r)
s=r}o.Lj(p,s)}},
KO(){var s,r,q
if(this.at==null){s=this.w
r=s.c
r.toString
r=A.a0X(r)
if(r==null)q=null
else{s=s.c
s.toString
q=r.Kr(s)}if(q!=null)this.t=q}},
B4(){var s,r=this,q=r.I
if(q==null){q=r.at
q.toString
s=r.ax
s.toString
s=r.pp(q,s)
q=s}r.w.e.sn(0,q)
q=$.h0.cd$
q===$&&A.b()
q.II()},
KN(a,b){if(b)this.t=a
else this.dw(this.kB(a))},
nG(a){var s,r,q,p,o=this,n=o.ax
n=n!=null?n:null
if(a===n)return!0
o.OJ(a)
s=o.at
s=s!=null?s:null
if(s==null)r=o.t
else if(n===0){q=o.I
q.toString
r=q}else{n.toString
r=o.pp(s,n)}p=o.kB(r)
o.I=a===0?r:null
if(p!==s){o.at=p
return!1}return!0},
jT(a){var s
this.OO(a)
if(!(a instanceof A.kM))return
s=a.I
if(s!=null)this.I=s},
nD(a,b){var s=a+this.gq8()
return this.OH(s,Math.max(s,b-this.gq8()))},
fz(){var s,r,q,p,o,n=this,m=null,l=n.z
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
return new A.Hz(o,l,s,r,q,p)}}
A.q1.prototype={
jW(a){return new A.q1(!1,this.hg(a))},
glt(){return this.b}}
A.oF.prototype={
jW(a){return new A.oF(this.hg(a))},
Tk(a){var s,r
if(a instanceof A.kM){s=a.gjn(a)
s.toString
return s}s=a.at
s.toString
r=a.ax
r.toString
return s/r},
Tl(a,b){var s
if(a instanceof A.kM)return a.kB(b)
s=a.ax
s.toString
return b*s},
lz(a,b){var s,r,q,p,o,n=this
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
if(s)return n.OF(a,b)
q=n.gp9()
p=n.Tk(a)
s=q.c
if(b<-s)p-=0.5
else if(b>s)p+=0.5
o=n.Tl(a,B.d.Ac(p))
s=a.at
s.toString
if(o!==s){s=n.gkM()
r=a.at
r.toString
return new A.kn(o,A.yY(s,r-o,b),q)}return null}}
A.v2.prototype={
ai(){return new A.O3(B.m)}}
A.O3.prototype={
aB(){this.aQ()
this.d=this.a.r.z},
Tb(a){var s,r
this.a.toString
switch(0){case 0:s=a.a5(t.I)
s.toString
r=A.afX(s.w)
this.a.toString
return r}},
M(a){var s,r,q,p=this,o=p.Tb(a),n=p.a.w
n=new A.oF(B.zw.hg(n))
n=new A.q1(!1,null).hg(n)
s=p.a
r=s.Q
s=s.r
q=A.a3Q(a).a0h(!1)
return new A.d6(new A.abV(p),A.alP(o,s,r,new A.q1(!1,n),null,q,new A.abW(p,o)),null,t.Bf)}}
A.abV.prototype={
$1(a){if(a.bx$===0)this.a.a.toString
return!1},
$S:24}
A.abW.prototype={
$2(a,b){var s=this.a.a
return new A.mT(this.b,b,0,B.Ej,s.as,A.a([new A.JF(s.r.as,!0,s.z,null)],t.E),null)},
$S:317}
A.hI.prototype={
gmg(){return!0},
gxz(){return!1},
Hu(a){return!0}}
A.HW.prototype={
aD(a){var s=new A.IO(this.d,0,!1,!1,A.at())
s.aG()
return s},
aK(a,b){b.sa4a(this.d)
b.sa4y(0)
b.sa_s(!1)
b.sa_r(!1)}}
A.a_V.prototype={}
A.a1j.prototype={}
A.D1.prototype={
wd(a){return this.W7(a)},
W7(a){var s=0,r=A.a4(t.H),q,p=this,o,n,m
var $async$wd=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:n=A.ea(a.b)
m=p.a
if(!m.T(0,n)){s=1
break}m=m.j(0,n)
m.toString
o=a.a
if(o==="Menu.selectedCallback"){m.ga6j().$0()
m.ga45()
o=$.ai.I$.f.f.e
o.toString
A.arC(o,m.ga45(),t.q)}else if(o==="Menu.opened")m.ga6i(m).$0()
else if(o==="Menu.closed")m.ga6h(m).$0()
case 1:return A.a2(q,r)}})
return A.a3($async$wd,r)}}
A.oK.prototype={
bW(a){return this.f!=a.f}}
A.kl.prototype={
ai(){return new A.Pc(null,A.y(t.wb,t.M),null,!0,null,B.m)}}
A.Pc.prototype={
gcB(){return this.a.d},
im(a,b){},
M(a){return A.a81(this.bf$,this.a.c)}}
A.x0.prototype={
bW(a){return a.f!=this.f}}
A.vJ.prototype={
ai(){return new A.yy(B.m)}}
A.yy.prototype={
b2(){var s,r=this
r.cu()
s=r.c
s.toString
r.r=A.oX(s)
r.wa()
if(r.d==null){r.a.toString
r.d=!1}},
aS(a){this.bi(a)
this.wa()},
gEy(){this.a.toString
return!1},
wa(){var s,r=this
if(r.gEy()&&!r.w){r.w=!0;++$.kk.x2$
s=$.h0.cd$
s===$&&A.b()
s.ga56().aY(new A.aco(r),t.P)}},
XB(){var s,r=this
r.e=!1
r.f=null
s=$.h0.cd$
s===$&&A.b()
s.G(0,r.gwz())
r.wa()},
m(){if(this.e){var s=$.h0.cd$
s===$&&A.b()
s.G(0,this.gwz())}this.aM()},
M(a){var s,r,q=this,p=q.d
p.toString
if(p&&q.gEy())return B.fN
p=q.r
if(p==null)p=q.f
s=q.a
r=s.d
return A.a81(p,new A.kl(s.c,r,null))}}
A.aco.prototype={
$1(a){var s,r=this.a
r.w=!1
if(r.c!=null){s=$.h0.cd$
s===$&&A.b()
s.W(0,r.gwz())
r.au(new A.acn(r,a))}$.kk.Hb()},
$S:318}
A.acn.prototype={
$0(){var s=this.a
s.f=this.b
s.e=!0
s.d=!1},
$S:0}
A.du.prototype={
glG(a){return!0},
m(){var s=this,r=s.c
if(r!=null){r=r.f3$.v(0,s)
r.toString
s.G(0,r)
s.c=s.b=null}s.dE()
s.a=!0}}
A.hT.prototype={
yb(a){},
mk(a,b){var s,r,q=this,p=q.bf$
p=p==null?null:J.dS(p.giD(),b)
s=p===!0
r=s?a.m0(J.aL(q.bf$.giD(),b)):a.re()
if(a.b==null){a.b=b
a.c=q
p=new A.a2V(q,a)
a.W(0,p)
q.f3$.l(0,a,p)}a.Jc(r)
if(!s&&a.glG(a)&&q.bf$!=null)q.x6(a)},
o8(){var s,r,q=this
if(q.f4$!=null){s=q.bf$
s=s==null?null:s.e
s=s==q.gcB()||q.gmo()}else s=!0
if(s)return
r=q.bf$
if(q.lo(q.f4$,!1))if(r!=null)r.m()},
gmo(){var s,r,q=this
if(q.dI$)return!0
if(q.gcB()==null)return!1
s=q.c
s.toString
r=A.oX(s)
if(r!=q.f4$){if(r==null)s=null
else{s=r.c
s=s==null?null:s.d
s=s===!0}s=s===!0}else s=!1
return s},
lo(a,b){var s,r,q=this
if(q.gcB()==null||a==null)return q.FR(null,b)
if(b||q.bf$==null){s=q.gcB()
s.toString
return q.FR(a.a_A(s,q),b)}s=q.bf$
s.toString
r=q.gcB()
r.toString
s.a4P(r)
r=q.bf$
r.toString
a.hV(r)
return!1},
FR(a,b){var s,r=this,q=r.bf$
if(a==q)return!1
r.bf$=a
if(!b){if(a!=null){s=r.f3$
new A.b7(s,A.n(s).h("b7<1>")).a_(0,r.gZe())}r.yb(q)}return!0},
x6(a){var s,r=a.glG(a),q=this.bf$
if(r){if(q!=null){r=a.b
r.toString
s=a.ms()
if(!J.f(J.aL(q.giD(),r),s)||!J.dS(q.giD(),r)){J.cA(q.giD(),r,s)
q.l8()}}}else if(q!=null){r=a.b
r.toString
q.a4J(0,r,t.K)}}}
A.a2V.prototype={
$0(){var s=this.a
if(s.bf$==null)return
s.x6(this.b)},
$S:0}
A.adU.prototype={
$2(a,b){if(!a.a)a.G(0,b)},
$S:37}
A.Rs.prototype={
aS(a){this.bi(a)
this.o8()},
b2(){var s,r,q,p,o=this
o.cu()
s=o.bf$
r=o.gmo()
q=o.c
q.toString
q=A.oX(q)
o.f4$=q
p=o.lo(q,r)
if(r){o.im(s,o.dI$)
o.dI$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.f3$.a_(0,new A.adU())
s=r.bf$
if(s!=null)s.m()
r.bf$=null
r.aM()}}
A.bR.prototype={
sn(a,b){var s=this.y
if(b==null?s!=null:b!==s){this.y=b
this.yd(s)}},
Jc(a){this.y=a}}
A.ha.prototype={
re(){return this.cy},
yd(a){this.az()},
m0(a){return A.n(this).h("ha.T").a(a)},
ms(){var s=this.y
return s==null?A.n(this).h("bR.T").a(s):s}}
A.yx.prototype={
m0(a){return this.Po(a)},
ms(){var s=this.Pp()
s.toString
return s}}
A.vF.prototype={}
A.vE.prototype={}
A.adV.prototype={
$2(a,b){if(!a.a)a.G(0,b)},
$S:37}
A.oZ.prototype={}
A.J4.prototype={
ai(){return new A.qv(new A.P9($.bs()),null,A.y(t.wb,t.M),null,!0,null,B.m,this.$ti.h("qv<1>"))}}
A.vK.prototype={
E(){return"RouteInformationReportingType."+this.b}}
A.qv.prototype={
gcB(){return this.a.r},
aB(){var s,r=this
r.aQ()
s=r.a.c
if(s!=null)s.W(0,r.gq4())
r.a.f.ZD(r.gvR())
r.a.e.W(0,r.gvW())},
im(a,b){var s,r,q=this,p=q.f
q.mk(p,"route")
s=p.y
r=s==null
if((r?A.n(p).h("bR.T").a(s):s)!=null){p=r?A.n(p).h("bR.T").a(s):s
p.toString
q.qo(p,new A.acD(q))}else{p=q.a.c
if(p!=null)q.qo(p.a,new A.acE(q))}},
Y1(){var s=this
if(s.w||s.a.c==null)return
s.w=!0
$.bK.ax$.push(s.gXE())},
XF(a){var s,r,q,p,o=this
o.w=!1
s=o.f
r=s.y
q=r==null
if((q?A.n(s).h("bR.T").a(r):r)!=null){s=q?A.n(s).h("bR.T").a(r):r
s.toString
r=o.a.c
r.toString
q=o.e
q.toString
if(q!==B.TH)p=q===B.ln&&r.b.a==s.a
else p=!0
B.fu.t6("selectMultiEntryHistory",t.H)
q=s.a
q.toString
A.am9(q,p,s.b)
r.b=r.a=s}o.e=B.ln},
XO(){this.a.e.ga65()
this.a.toString
return null},
qf(){var s=this
s.f.sn(0,s.XO())
if(s.e==null)s.e=B.ln
s.Y1()},
b2(){var s,r=this
r.r=!0
r.Q6()
s=r.a.c
if(s!=null&&r.r)r.qo(s.a,new A.acC(r))
r.r=!1
r.qf()},
aS(a){var s,r,q,p=this
p.Q7(a)
s=p.a
r=a.c
q=s.c==r
if(q)s.f===a.f
p.d=new A.F()
if(!q){s=r==null
if(!s)r.G(0,p.gq4())
q=p.a.c
if(q!=null)q.W(0,p.gq4())
s=s?null:r.a
r=p.a.c
if(s!=(r==null?null:r.a))p.Ei()}s=a.f
if(p.a.f!==s){r=p.gvR()
s.a4L(r)
p.a.f.ZD(r)}p.a.toString
s=p.gvW()
a.e.G(0,s)
p.a.e.W(0,s)
p.qf()},
m(){var s=this,r=s.a.c
if(r!=null)r.G(0,s.gq4())
s.a.f.a4L(s.gvR())
s.a.e.G(0,s.gvW())
s.d=null
s.Q8()},
qo(a,b){var s,r,q=this
q.r=!1
q.d=new A.F()
s=q.a.d
s.toString
r=q.c
r.toString
s.a6m(a,r).aY(q.Xn(q.d,b),t.H)},
Xn(a,b){return new A.acA(this,a,b)},
Ei(){var s=this
s.r=!0
s.qo(s.a.c.a,new A.acx(s))},
TE(){var s=this
s.d=new A.F()
return s.a.e.a6n().aY(s.UR(s.d),t.y)},
UR(a){return new A.acy(this,a)},
Fx(){this.au(new A.acB())
this.qf()
return new A.bm(null,t.E8)},
US(){this.au(new A.acz())
this.qf()},
M(a){var s=this.bf$,r=this.a,q=r.c,p=r.f,o=r.d
r=r.e
return A.a81(s,new A.Ph(q,p,o,r,this,new A.hk(r.gHp(),null),null))}}
A.acD.prototype={
$0(){return this.a.a.e.ga5V()},
$S(){return this.a.$ti.h("ag<~>(1)()")}}
A.acE.prototype={
$0(){return this.a.a.e.ga5U()},
$S(){return this.a.$ti.h("ag<~>(1)()")}}
A.acC.prototype={
$0(){return this.a.a.e.gMg()},
$S(){return this.a.$ti.h("ag<~>(1)()")}}
A.acA.prototype={
$1(a){var s=0,r=A.a4(t.H),q,p=this,o,n
var $async$$1=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:o=p.a
n=p.b
if(o.d!=n){s=1
break}s=3
return A.a5(p.c.$0().$1(a),$async$$1)
case 3:if(o.d==n)o.Fx()
case 1:return A.a2(q,r)}})
return A.a3($async$$1,r)},
$S(){return this.a.$ti.h("ag<~>(1)")}}
A.acx.prototype={
$0(){return this.a.a.e.gMg()},
$S(){return this.a.$ti.h("ag<~>(1)()")}}
A.acy.prototype={
$1(a){var s=this.a
if(this.b!=s.d)return new A.bm(!0,t.a9)
s.Fx()
return new A.bm(a,t.a9)},
$S:320}
A.acB.prototype={
$0(){},
$S:0}
A.acz.prototype={
$0(){},
$S:0}
A.Ph.prototype={
bW(a){if(this.f==a.f)this.r===a.r
return!0}}
A.P9.prototype={
re(){return null},
yd(a){this.az()},
m0(a){var s
if(a==null)return null
t.DI.a(a)
s=J.bH(a)
return new A.oZ(A.cs(s.gK(a)),s.gU(a))},
ms(){var s,r=this,q=r.y,p=q==null
if((p?A.n(r).h("bR.T").a(q):q)==null)q=null
else{s=(p?A.n(r).h("bR.T").a(q):q).a
q=[s,(p?A.n(r).h("bR.T").a(q):q).b]}return q}}
A.qG.prototype={
aS(a){this.bi(a)
this.o8()},
b2(){var s,r,q,p,o=this
o.cu()
s=o.bf$
r=o.gmo()
q=o.c
q.toString
q=A.oX(q)
o.f4$=q
p=o.lo(q,r)
if(r){o.im(s,o.dI$)
o.dI$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.f3$.a_(0,new A.adV())
s=r.bf$
if(s!=null)s.m()
r.bf$=null
r.aM()}}
A.oD.prototype={
gtv(){return this.e},
jd(){var s,r=this,q=A.ahn(r.gR7(),!1)
r.k4=q
r.goJ()
s=A.ahn(r.gRa(),!0)
r.p1=s
B.b.J(r.e,A.a([q,s],t.tD))
r.OA()},
k5(a){var s,r=this
r.Ov(a)
s=r.at.Q
s===$&&A.b()
if(s===B.K&&!r.Q)r.a.ID(r)
return!0},
m(){B.b.X(this.e)
this.Oz()}}
A.dP.prototype={
gbD(a){return this.as},
gB9(){return this.ax},
Vc(a){var s,r=this
switch(a.a){case 3:s=r.e
if(s.length!==0){s=B.b.gK(s)
r.gmg()
s.smg(!0)}s=r.z
if(s!=null){s.a.$0()
s.a=null}r.z=null
break
case 1:case 2:s=r.e
if(s.length!==0)B.b.gK(s).smg(!1)
if(r.z==null)r.z=$.bK.a4Y(B.Fg)
break
case 0:if(!r.ga3c()){r.a.ID(r)
r.Q=!0
s=r.z
if(s!=null){s.a.$0()
s.a=null}r.z=null}break}},
jd(){var s=this,r=s.gL6(s),q=s.gL6(s),p=s.glA(),o=s.a
o.toString
o=s.at=A.dU(p,r,q,null,o)
o.bq()
p=o.aT$
p.b=!0
p.a.push(s.gEj())
s.as=o
s.NV()
p=s.as
if(p.gb_(p)===B.W&&s.e.length!==0){p=B.b.gK(s.e)
s.gmg()
p.smg(!0)}},
o4(){this.Ox()
return this.at.cJ(0)},
o2(){this.Os()
var s=this.at
s.sn(0,s.b)},
y9(a){var s,r
if(a instanceof A.dP){s=this.at
s.toString
r=a.at.x
r===$&&A.b()
s.sn(0,r)}this.Oy(a)},
k5(a){this.ch=a
this.at.fQ(0)
this.NT(a)
return!0},
lD(a){this.GO(a)
this.Ow(a)},
o3(a){this.GO(a)
this.Ot(a)},
GO(a){var s,r,q,p,o,n,m,l=this,k={},j=l.CW
l.CW=null
if(a instanceof A.dP&&l.Hu(a)&&!0){s=l.ax.c
if(s!=null){r=s instanceof A.mM?s.a:s
r.toString
q=a.as
q.toString
p=r.gn(r)
o=q.x
o===$&&A.b()
if(!J.f(p,o)){p=q.Q
p===$&&A.b()
p=p===B.W||p===B.K}else p=!0
o=a.y.a
if(p)l.ll(q,o)
else{k.a=null
p=new A.a7X(l,q,a)
l.CW=new A.a7V(k,q,p)
q.bq()
n=q.aT$
n.b=!0
n.a.push(p)
m=A.ahU(r,q,new A.a7W(k,l,a))
k.a=m
l.ll(m,o)}}else l.ll(a.as,a.y.a)}else l.Yk(B.cd)
if(j!=null)j.$0()},
ll(a,b){this.ax.saI(0,a)
if(b!=null)b.aY(new A.a7U(this,a),t.P)},
Yk(a){return this.ll(a,null)},
m(){var s=this,r=s.as
if(r!=null)r.bU(s.gEj())
r=s.z
if(r!=null){r.a.$0()
r.a=null}s.z=null
r=s.at
if(r!=null)r.m()
s.y.ca(0,s.ch)
s.NU()},
glA(){return"TransitionRoute"},
i(a){return"TransitionRoute(animation: "+A.h(this.at)+")"}}
A.a7X.prototype={
$1(a){var s,r
switch(a.a){case 3:case 0:s=this.a
s.ll(this.b,this.c.y.a)
r=s.CW
if(r!=null){r.$0()
s.CW=null}break
case 1:case 2:break}},
$S:3}
A.a7V.prototype={
$0(){this.b.bU(this.c)
var s=this.a.a
if(s!=null)s.m()},
$S:0}
A.a7W.prototype={
$0(){var s,r=this.b
r.ll(this.a.a.a,this.c.y.a)
s=r.CW
if(s!=null){s.$0()
r.CW=null}},
$S:0}
A.a7U.prototype={
$1(a){var s=this.a.ax,r=this.b
if(s.c==r){s.saI(0,B.cd)
if(r instanceof A.mM)r.m()}},
$S:7}
A.F9.prototype={
gLg(){var s=this.kc$
return s!=null&&s.length!==0}}
A.M9.prototype={
ib(a,b){A.a05(this.e,t.z).gxz()
return!1},
d_(a){return A.ahk(this.e).JQ()}}
A.y4.prototype={
bW(a){var s=this
return s.f!==a.f||s.r!==a.r||s.w!==a.w||s.x!==a.x}}
A.qh.prototype={
ai(){return new A.n7(A.agW(!0,B.ZY.i(0)+" Focus Scope",!1),A.ahA(),B.m,this.$ti.h("n7<1>"))}}
A.n7.prototype={
aB(){var s,r,q=this
q.aQ()
s=A.a([],t.ro)
r=q.a.c.fy
if(r!=null)s.push(r)
r=q.a.c.go
if(r!=null)s.push(r)
q.e=new A.y2(s)
if(q.a.c.gkj()){q.a.c.a.a.toString
s=!0}else s=!1
if(s){s=q.a.c.a.x.gdt()
if(s!=null)s.mD(q.f)}},
aS(a){var s,r=this
r.bi(a)
if(r.a.c.gkj()){r.a.c.a.a.toString
s=!0}else s=!1
if(s){s=r.a.c.a.x.gdt()
if(s!=null)s.mD(r.f)}},
b2(){this.cu()
this.d=null},
SZ(){this.au(new A.abA(this))},
m(){this.f.m()
this.aM()},
gFX(){var s=this.a.c.fy
if((s==null?null:s.gb_(s))!==B.ak){s=this.a.c.a
s=s==null?null:s.CW.a
s=s===!0}else s=!0
return s},
M(a){var s,r,q=this,p=null,o=q.a.c,n=o.gkj(),m=q.a.c
if(!m.gt0()){m=m.kc$
m=m!=null&&m.length!==0}else m=!0
s=q.a.c
s=s.gt0()||s.ys$>0
r=q.a.c
return A.l9(o.c,new A.abE(q),new A.y4(n,m,s,o,new A.uX(r.fx,new A.oG(new A.hk(new A.abF(q),p),r.k3,p),p),p))}}
A.abA.prototype={
$0(){this.a.d=null},
$S:0}
A.abE.prototype={
$2(a,b){var s=this.a.a.c.c.a
b.toString
return new A.kl(b,s,null)},
$S:321}
A.abF.prototype={
$1(a){var s,r=null,q=A.aV([B.C3,new A.M9(a,new A.bh(A.a([],t.B8),t.dc))],t.n,t.nT),p=this.a,o=p.e
o===$&&A.b()
s=p.d
if(s==null)s=p.d=new A.hS(new A.hk(new A.abC(p),r),p.a.c.k2)
return A.SB(q,new A.oK(p.r,B.c9,B.UE,A.akx(!1,new A.hS(A.l9(o,new A.abD(p),s),r),r,r,p.f),r))},
$S:322}
A.abD.prototype={
$2(a,b){var s,r,q=this.a,p=q.a.c,o=p.fy
o.toString
s=p.go
s.toString
r=p.a
r=r==null?null:r.CW
if(r==null)r=A.j6(!1)
return p.Hs(a,o,s,A.l9(r,new A.abB(q),b))},
$S:28}
A.abB.prototype={
$2(a,b){var s=this.a,r=s.gFX()
s.f.sci(!r)
return new A.hx(r,null,b,null)},
$S:323}
A.abC.prototype={
$1(a){var s,r=this.a.a.c,q=r.fy
q.toString
s=r.go
s.toString
return r.a_f(a,q,s)},
$S:13}
A.k6.prototype={
au(a){var s,r=this.k1
if(r.gbn()!=null){r=r.gbn()
if(r.a.c.gkj())if(!r.gFX()){r.a.c.a.a.toString
s=!0}else s=!1
else s=!1
if(s){s=r.a.c.a.x.gdt()
if(s!=null)s.mD(r.f)}r.au(a)}else a.$0()},
Hs(a,b,c,d){return d},
jd(){var s=this
s.OY()
s.fy=A.Ij(A.dP.prototype.gbD.call(s,s))
s.go=A.Ij(A.dP.prototype.gB9.call(s))},
o4(){var s,r=this,q=r.k1
if(q.gbn()!=null){r.a.a.toString
s=!0}else s=!1
if(s){s=r.a.x.gdt()
if(s!=null)s.mD(q.gbn().f)}return r.OX()},
o2(){var s,r=this,q=r.k1
if(q.gbn()!=null){r.a.a.toString
s=!0}else s=!1
if(s){s=r.a.x.gdt()
if(s!=null)s.mD(q.gbn().f)}r.OV()},
stn(a){var s,r=this
if(r.fx===a)return
r.au(new A.a06(r,a))
s=r.fy
s.toString
s.saI(0,r.fx?B.cW:A.dP.prototype.gbD.call(r,r))
s=r.go
s.toString
s.saI(0,r.fx?B.cd:A.dP.prototype.gB9.call(r))
r.nN()},
ff(){var s=0,r=A.a4(t.ij),q,p=this,o,n,m,l
var $async$ff=A.a0(function(a,b){if(a===1)return A.a1(b,r)
while(true)switch(s){case 0:p.k1.gbn()
o=A.aA(p.id,!0,t.CQ),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}l=J
s=6
return A.a5(o[m].$0(),$async$ff)
case 6:if(!l.f(b,!0)){q=B.TI
s=1
break}case 4:++m
s=3
break
case 5:q=p.P5()
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$ff,r)},
y4(a){this.Ou(a)
this.nN()},
nN(){var s,r=this
r.Or()
r.au(new A.a04())
s=r.k4
s===$&&A.b()
s.fM()
s=r.p1
s===$&&A.b()
r.goJ()
s.soJ(!0)},
r4(){this.Oq()
var s=this.k4
s===$&&A.b()
s.fM()
s=this.k1
if(s.gbn()!=null)s.gbn().SZ()},
R9(a){var s,r,q=this,p=null
q.ga_6()
q.gxz()
s=q.ga_7()
r=q.fy
if(r.gb_(r)!==B.ak){r=q.fy
r=r.gb_(r)===B.K}else r=!0
q.gxz()
return new A.hx(r,p,new A.uD(p,!1,p,!0,s,p),p)},
Rb(a){var s=this,r=null,q=s.ok
return q==null?s.ok=A.dB(r,new A.qh(s,s.k1,A.n(s).h("qh<1>")),!1,r,!1,r,r,r,r,r,r,r,r,r,r,r,B.Th,r,r,r,r):q},
i(a){return"ModalRoute("+this.b.i(0)+", animation: "+A.h(this.as)+")"}}
A.a06.prototype={
$0(){this.a.fx=this.b},
$S:0}
A.a04.prototype={
$0(){},
$S:0}
A.qg.prototype={
ff(){var s=0,r=A.a4(t.ij),q,p=this,o
var $async$ff=A.a0(function(a,b){if(a===1)return A.a1(b,r)
while(true)switch(s){case 0:o=p.kc$
if(o!=null&&o.length!==0){q=B.B3
s=1
break}q=p.OB()
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$ff,r)},
k5(a){var s,r,q=this,p=q.kc$
if(p!=null&&p.length!==0){s=p.pop()
s.b=null
s.a6_()
r=s.c&&--q.ys$===0
if(q.kc$.length===0||r)q.nN()
return!1}q.OW(a)
return!0}}
A.Jd.prototype={
M(a){var s,r,q,p=t.l,o=a.a5(p).f.f,n=Math.max(o.a,0),m=this.d,l=m?o.b:0
l=Math.max(l,0)
s=Math.max(o.c,0)
r=this.f
q=r?o.d:0
return new A.hH(new A.bn(n,l,s,Math.max(q,0)),new A.f5(a.a5(p).f.KA(r,!0,!0,m),this.x,null),null)}}
A.Jh.prototype={
KG(){},
Ia(a,b){if(b!=null)b.cT(new A.vY(null,a,b,0))},
Ib(a,b,c){b.cT(A.ahB(b,null,null,a,c))},
rs(a,b,c){b.cT(new A.hG(null,c,0,a,b,0))},
I9(a,b){b.cT(new A.iX(null,a,b,0))},
nE(){},
m(){},
i(a){return"<optimized out>#"+A.bI(this)}}
A.jT.prototype={
nE(){this.a.fh(0)},
ghK(){return!1},
gfK(){return!1},
gdX(){return 0}}
A.YU.prototype={
ghK(){return!1},
gfK(){return!1},
gdX(){return 0},
m(){this.b.$0()
this.pJ()}}
A.a3R.prototype={
QR(a,b){var s,r,q=this
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
else return Math.min(r/3,s)*J.ec(a)}else return 0}}},
ba(a,b){var s,r,q,p,o=this
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
p=o.QR(s,q)
if(p===0)return
s=o.a
if(A.afa(s.w.a.c))p=-p
s.Az(p>0?B.lp:B.lq)
r=s.at
r.toString
s.uI(r-s.r.xv(s,p))},
m(){this.x=null
this.b.$0()},
i(a){return"<optimized out>#"+A.bI(this)}}
A.WC.prototype={
Ia(a,b){var s=t.o5.a(this.b.x)
if(b!=null)b.cT(new A.vY(s,a,b,0))},
Ib(a,b,c){b.cT(A.ahB(b,null,t.mF.a(this.b.x),a,c))},
rs(a,b,c){b.cT(new A.hG(t.mF.a(this.b.x),c,0,a,b,0))},
I9(a,b){var s=this.b.x
b.cT(new A.iX(s instanceof A.fI?s:null,a,b,0))},
ghK(){var s=this.b
return(s==null?null:s.w)!==B.dH},
gfK(){return!0},
gdX(){return 0},
m(){this.b=null
this.pJ()},
i(a){return"<optimized out>#"+A.bI(this)+"("+A.h(this.b)+")"}}
A.As.prototype={
KG(){var s=this.a,r=this.b
r===$&&A.b()
s.fh(r.gdX())},
nE(){var s=this.a,r=this.b
r===$&&A.b()
s.fh(r.gdX())},
wU(){var s=this.b
s===$&&A.b()
s=s.x
s===$&&A.b()
if(!(Math.abs(this.a.uI(s))<1e-10)){s=this.a
s.f_(new A.jT(s))}},
wJ(){this.a.fh(0)},
rs(a,b,c){var s=this.b
s===$&&A.b()
b.cT(new A.hG(null,c,s.gdX(),a,b,0))},
gfK(){return!0},
gdX(){var s=this.b
s===$&&A.b()
return s.gdX()},
m(){var s=this.b
s===$&&A.b()
s.m()
this.pJ()},
i(a){var s=A.bI(this),r=this.b
r===$&&A.b()
return"<optimized out>#"+s+"("+r.i(0)+")"},
ghK(){return this.c}}
A.DG.prototype={
wU(){var s=this.a,r=this.c
r===$&&A.b()
r=r.x
r===$&&A.b()
if(s.uI(r)!==0){s=this.a
s.f_(new A.jT(s))}},
wJ(){var s=this.a,r=this.c
r===$&&A.b()
s.fh(r.gdX())},
rs(a,b,c){var s=this.c
s===$&&A.b()
b.cT(new A.hG(null,c,s.gdX(),a,b,0))},
ghK(){return!0},
gfK(){return!0},
gdX(){var s=this.c
s===$&&A.b()
return s.gdX()},
m(){var s=this.b
s===$&&A.b()
s.f2(0)
s=this.c
s===$&&A.b()
s.m()
this.pJ()},
i(a){var s=A.bI(this),r=this.c
r===$&&A.b()
return"<optimized out>#"+s+"("+r.i(0)+")"}}
A.vS.prototype={
p0(a,b,c,d){var s,r=this
if(b.a==null){s=$.eJ.fF$
s===$&&A.b()
s=s.T(0,c)}else s=!0
if(s){r.b.p0(a,b,c,d)
return}s=r.a
if(s.gaN(s)==null)return
s=s.gaN(s)
s.toString
if(A.aw4(s)){$.bK.pw(new A.a3M(r,a,b,c,d))
return}r.b.p0(a,b,c,d)},
oF(a,b,c){return this.b.oF(0,b,c)},
oG(a,b){return this.b.oG(a,b)},
tm(a){return this.b.tm(a)}}
A.a3M.prototype={
$1(a){var s=this
A.dF(new A.a3L(s.a,s.b,s.c,s.d,s.e))},
$S:2}
A.a3L.prototype={
$0(){var s=this
return s.a.p0(s.b,s.c,s.d,s.e)},
$S:0}
A.qT.prototype={
E(){return"AndroidOverscrollIndicator."+this.b}}
A.Ji.prototype={
a0q(a,b,c,d,e,f){return new A.adM(this,f,c!==!1,d,e,b,a)},
a0h(a){return this.a0q(null,null,null,null,null,a)},
jy(a){return A.kZ()},
gyh(){return B.Bo},
r1(a,b,c){var s=null
switch(this.jy(a)){case B.bj:case B.b8:case B.bk:return A.avJ(b,c.b,B.cf,s,s,A.A2(),B.u,s,s,s,s,B.d2,s)
case B.ay:case B.bi:case B.az:return b}},
r_(a,b,c){var s
switch(this.jy(a)){case B.az:case B.bj:case B.b8:case B.bk:s=1
break
case B.ay:s=2
break
case B.bi:s=3
break
default:s=null
break}if(s)c$0:for(;!0;)switch(s){case 1:return b
case 2:switch(1){case 1:break}if(2)c$1:for(;!0;)switch(2){case 1:return new A.pl(c.a,B.R,b,null)
case 2:s=3
continue c$0}break c$0
case 3:return new A.o7(c.a,B.k,b,null)}},
tV(a){switch(this.jy(a)){case B.az:return new A.a3N()
case B.b8:return new A.a3O()
case B.ay:case B.bi:case B.bj:case B.bk:return new A.a3P()}},
kC(a){switch(this.jy(a)){case B.az:return B.CS
case B.b8:return B.CT
case B.ay:case B.bi:case B.bj:case B.bk:return B.Ep}},
i(a){return"ScrollBehavior"}}
A.a3N.prototype={
$1(a){return A.atP(a.gc8(a))},
$S:324}
A.a3O.prototype={
$1(a){var s=a.gc8(a),r=t.pa
return new A.ow(A.aZ(20,null,!1,r),s,A.aZ(20,null,!1,r))},
$S:325}
A.a3P.prototype={
$1(a){return new A.h4(a.gc8(a),A.aZ(20,null,!1,t.pa))},
$S:118}
A.adM.prototype={
gyh(){var s=this.f
return s==null?B.Bo:s},
r_(a,b,c){var s=this.a.r_(a,b,c)
return s},
r1(a,b,c){if(this.b)return this.a.r1(a,b,c)
return b},
kC(a){var s=this.a.kC(a)
return s},
tV(a){return this.a.tV(a)},
i(a){return"_WrappedScrollBehavior"}}
A.vT.prototype={
bW(a){var s
if(A.A(this.f)===A.A(a.f))s=!1
else s=!0
return s}}
A.p2.prototype={
he(a,b,c){return this.a_0(a,b,c)},
a_0(a,b,c){var s=0,r=A.a4(t.H),q=this,p,o,n
var $async$he=A.a0(function(d,e){if(d===1)return A.a1(e,r)
while(true)switch(s){case 0:n=A.a([],t.iJ)
for(p=q.d,o=0;o<p.length;++o)n.push(p[o].he(a,b,c))
s=2
return A.a5(A.tB(n,t.H),$async$he)
case 2:return A.a2(null,r)}})
return A.a3($async$he,r)},
am(a){this.d.push(a)
a.W(0,this.gec())},
o0(a,b){b.G(0,this.gec())
B.b.v(this.d,b)},
m(){var s,r,q,p
for(s=this.d,r=s.length,q=this.gec(),p=0;p<s.length;s.length===r||(0,A.R)(s),++p)s[p].G(0,q)
this.dE()},
HT(a,b,c){return A.aw3(b,null,0,!0,c,a)},
i(a){var s=A.a([],t.s),r=this.d,q=r.length
if(q===0)s.push("no clients")
else if(q===1){r=B.b.gbh(r).at
r.toString
s.push("one client, offset "+B.d.N(r,1))}else s.push(""+q+" clients")
return"<optimized out>#"+A.bI(this)+"("+B.b.b9(s,", ")+")"}}
A.h_.prototype={
fz(){var s=this,r=null,q=s.gyN()?s.geJ():r,p=s.gyN()?s.geI():r,o=s.gJ1()?s.gc9():r,n=s.gJ3()?s.gpi():r,m=s.gfv()
return new A.tr(q,p,o,n,m)},
gzR(){var s=this
return s.gc9()<s.geJ()||s.gc9()>s.geI()},
gHj(){var s=this
return s.gc9()===s.geJ()||s.gc9()===s.geI()},
gkb(){var s=this
return s.gpi()-A.G(s.geJ()-s.gc9(),0,s.gpi())-A.G(s.gc9()-s.geI(),0,s.gpi())}}
A.tr.prototype={
geJ(){var s=this.a
s.toString
return s},
geI(){var s=this.b
s.toString
return s},
gyN(){return this.a!=null&&this.b!=null},
gc9(){var s=this.c
s.toString
return s},
gJ1(){return this.c!=null},
gpi(){var s=this.d
s.toString
return s},
gJ3(){return this.d!=null},
i(a){var s=this
return"FixedScrollMetrics("+B.d.N(Math.max(s.gc9()-s.geJ(),0),1)+"..["+B.d.N(s.gkb(),1)+"].."+B.d.N(Math.max(s.geI()-s.gc9(),0),1)+")"},
gfv(){return this.e}}
A.Mu.prototype={}
A.e4.prototype={}
A.KH.prototype={
K3(a){if(t.bx.b(a))++a.bx$
return!1}}
A.dM.prototype={
cb(a){this.PH(a)
a.push(this.a.i(0))}}
A.vY.prototype={
cb(a){var s
this.mR(a)
s=this.d
if(s!=null)a.push(s.i(0))}}
A.hU.prototype={
cb(a){var s
this.mR(a)
a.push("scrollDelta: "+A.h(this.e))
s=this.d
if(s!=null)a.push(s.i(0))},
gIe(){return this.d}}
A.hG.prototype={
cb(a){var s,r=this
r.mR(a)
a.push("overscroll: "+B.d.N(r.e,1))
a.push("velocity: "+B.d.N(r.f,1))
s=r.d
if(s!=null)a.push(s.i(0))}}
A.iX.prototype={
cb(a){var s
this.mR(a)
s=this.d
if(s!=null)a.push(s.i(0))},
gIe(){return this.d}}
A.KB.prototype={
cb(a){this.mR(a)
a.push("direction: "+this.d.i(0))}}
A.yH.prototype={
cb(a){var s,r
this.uz(a)
s=this.bx$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.yG.prototype={
bW(a){return this.f!==a.f}}
A.kJ.prototype={
a3y(a,b){return this.d.$1(b)}}
A.vW.prototype={
ai(){return new A.vX(new A.u5(t.uk),B.m)}}
A.vX.prototype={
G(a,b){var s,r,q,p=this.d
p.toString
p=A.axo(p)
s=A.n(p).c
for(;p.q();){r=p.c
if(r==null)r=s.a(r)
if(J.f(r.d,b)){p=r.a
p.toString
A.n(r).h("m_.E").a(r);++p.a
s=r.b
s.c=r.c
r.c.b=s
q=--p.b
r.a=r.b=r.c=null
if(q===0)p.c=null
else if(r===p.c)p.c=s
return}}},
EW(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.d
if(i.b===0)return
p=A.aA(i,!0,t.cS)
for(i=p.length,o=0;o<i;++o){s=p[o]
try{if(s.a!=null)J.arh(s,a)}catch(n){r=A.ah(n)
q=A.ay(n)
m=j instanceof A.bP?A.cX(j):null
l=A.bk("while dispatching notifications for "+A.aF(m==null?A.aR(j):m).i(0))
k=$.fy()
if(k!=null)k.$1(new A.bE(r,q,"widget library",l,new A.a3S(j),!1))}}},
M(a){var s=this
return new A.d6(new A.a3T(s),new A.d6(new A.a3U(s),new A.yG(s,s.a.c,null),null,t.Bf),null,t.iY)},
m(){this.d=null
this.aM()}}
A.a3S.prototype={
$0(){var s=null,r=this.a
return A.a([A.ho("The "+A.A(r).i(0)+" sending notification was",r,!0,B.aI,s,!1,s,s,B.ap,s,!1,!0,!0,B.aV,s,t.Ec)],t.F)},
$S:15}
A.a3T.prototype={
$1(a){var s=new A.Lx(null,null,a.a,a.b,0)
s.bx$=a.bx$
this.a.EW(s)
return!1},
$S:69}
A.a3U.prototype={
$1(a){this.a.EW(a)
return!1},
$S:24}
A.Lx.prototype={}
A.vU.prototype={
E(){return"ScrollDecelerationRate."+this.b}}
A.mq.prototype={
hg(a){var s=this.a
s=s==null?null:s.jW(a)
return s==null?a:s},
jW(a){return new A.mq(this.hg(a))},
xv(a,b){var s=this.a
if(s==null)return b
return s.xv(a,b)},
jB(a){var s,r=this.a
if(r==null){r=a.at
r.toString
if(r===0){r=a.z
r.toString
s=a.Q
s.toString
s=r!==s
r=s}else r=!0
return r}return r.jB(a)},
Ku(a,b,c){var s=this.a
if(s==null){$.ai.toString
s=$.ck().gkr()
return Math.abs(a)>Math.max(Math.abs(s.a),Math.abs(s.b))}return s.Ku(a,b,c)},
nC(a,b){var s=this.a
if(s==null)return 0
return s.nC(a,b)},
qT(a,b,c,d){var s=this.a
if(s==null){s=b.c
s.toString
return s}return s.qT(a,b,c,d)},
lz(a,b){var s=this.a
if(s==null)return null
return s.lz(a,b)},
gkM(){var s=this.a
s=s==null?null:s.gkM()
return s==null?$.apu():s},
gp9(){var s=this.a
s=s==null?null:s.gp9()
return s==null?$.apv():s},
gzh(){var s=this.a
s=s==null?null:s.gzh()
return s==null?18:s},
gti(){var s=this.a
s=s==null?null:s.gti()
return s==null?50:s},
goK(){var s=this.a
s=s==null?null:s.goK()
return s==null?8000:s},
xF(a){var s=this.a
if(s==null)return 0
return s.xF(a)},
gyi(){var s=this.a
return s==null?null:s.gyi()},
glt(){return!0},
i(a){var s=this.a
if(s==null)return"ScrollPhysics"
return"ScrollPhysics -> "+s.i(0)}}
A.In.prototype={
jW(a){return new A.In(this.hg(a))},
qT(a,b,c,d){var s,r,q,p,o,n,m,l
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
return p+(o-q)}}l=this.OE(a,b,c,d)
if(r){q=b.b
q.toString
l=A.G(l,p,q)}return l}}
A.rg.prototype={
jW(a){return new A.rg(this.b,this.hg(a))},
IQ(a){switch(this.b.a){case 1:return 0.07*Math.pow(1-a,2)
case 0:return 0.52*Math.pow(1-a,2)}},
xv(a,b){var s,r,q,p,o,n,m
if(!a.gzR())return b
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
el