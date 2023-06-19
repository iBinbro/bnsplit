.b
if(s!==0)return"CircleBorder("+this.a.i(0)+", eccentricity: "+A.h(s)+")"
return"CircleBorder("+this.a.i(0)+")"}}
A.Uu.prototype={
ve(a,b,c,d){var s=this
s.gbB(s).cs(0)
switch(b.a){case 0:break
case 1:a.$1(!1)
break
case 2:a.$1(!0)
break
case 3:a.$1(!0)
s.gbB(s).Bh(c,$.ao().bd())
break}d.$0()
if(b===B.hq)s.gbB(s).co(0)
s.gbB(s).co(0)},
a_V(a,b,c,d){this.ve(new A.Uv(this,a),b,c,d)},
a_W(a,b,c,d){this.ve(new A.Uw(this,a),b,c,d)},
a_Y(a,b,c,d){this.ve(new A.Ux(this,a),b,c,d)}}
A.Uv.prototype={
$1(a){var s=this.a
return s.gbB(s).HJ(0,this.b,a)},
$S:23}
A.Uw.prototype={
$1(a){var s=this.a
return s.gbB(s).HK(this.b,a)},
$S:23}
A.Ux.prototype={
$1(a){var s=this.a
return s.gbB(s).a_X(this.b,a)},
$S:23}
A.jK.prototype={
j(a,b){return this.b.j(0,b)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.T(b)!==A.B(s))return!1
return s.N5(0,b)&&A.m(s).h("jK<jK.T>").b(b)&&A.agd(b.b,s.b)},
gu(a){return A.V(A.B(this),this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"ColorSwatch(primary value: "+this.N6(0)+")"}}
A.fH.prototype={
bW(){return"Decoration"},
gdh(a){return B.aZ},
gz6(){return!1},
c4(a,b){return null},
c5(a,b){return null},
Jm(a,b,c){return!0},
u8(a,b){throw A.c(A.N("This Decoration subclass does not expect to be used for clipping."))}}
A.AR.prototype={
m(){}}
A.Mf.prototype={}
A.lU.prototype={
F(){return"ImageRepeat."+this.b}}
A.Db.prototype={
k(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(J.T(b)!==A.B(this))return!1
if(b instanceof A.Db)if(b.a.k(0,this.a))if(B.T.k(0,B.T))s=!0
else s=!1
else s=!1
else s=!1
return s},
gu(a){return A.V(this.a,null,B.O,B.T,null,B.br,!1,1,1,B.d7,!1,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=A.a([this.a.i(0)],t.s),r=!0
if(r)s.push(B.O.i(0))
s.push(B.T.i(0))
s.push("scale 1")
s.push("opacity 1")
s.push(B.d7.i(0))
return"DecorationImage("+B.b.ba(s,", ")+")"}}
A.Dc.prototype={
tE(a,b,c,d){var s,r,q,p,o=this,n=null,m=o.a.a.W(d),l=m.a
if(l==null)l=m
s=o.c
r=s==null
if(r)q=n
else{q=s.a
if(q==null)q=s}if(l!==q){p=new A.dm(o.gEq(),n,n)
if(!r)s.H(0,p)
o.c=m
m.S(0,p)}if(o.d==null)return
l=c!=null
if(l){a.cs(0)
a.fz(0,c)}s=o.d
r=s.a
A.ap3(B.T,a,n,n,s.c,B.d7,B.O,!1,r,!1,!1,1,b,B.br,s.b)
if(l)a.co(0)},
Uy(a,b){var s,r,q=this
if(J.f(q.d,a))return
s=q.d
if(s!=null)if(a.a.JJ(s.a)){r=s.b
s=r===r&&a.c==s.c}else s=!1
else s=!1
if(s){a.a.m()
return}s=q.d
if(s!=null)s.a.m()
q.d=a
if(!b)q.b.$0()},
i(a){return"DecorationImagePainter(stream: "+A.h(this.c)+", image: "+A.h(this.d)+") for "+this.a.i(0)}}
A.d4.prototype={
gci(){var s=this
return s.gd6(s)+s.gd7(s)+s.ge1(s)+s.ge2()},
a_f(a){var s=this
switch(a.a){case 0:return s.gci()
case 1:return s.gb7(s)+s.gb9(s)}},
C(a,b){var s=this
return new A.kM(s.gd6(s)+b.gd6(b),s.gd7(s)+b.gd7(b),s.ge1(s)+b.ge1(b),s.ge2()+b.ge2(),s.gb7(s)+b.gb7(b),s.gb9(s)+b.gb9(b))},
hi(a,b,c){var s=this
return new A.kM(A.F(s.gd6(s),b.a,c.a),A.F(s.gd7(s),b.c,c.b),A.F(s.ge1(s),0,c.c),A.F(s.ge2(),0,c.d),A.F(s.gb7(s),b.b,c.e),A.F(s.gb9(s),b.d,c.f))},
i(a){var s=this
if(s.ge1(s)===0&&s.ge2()===0){if(s.gd6(s)===0&&s.gd7(s)===0&&s.gb7(s)===0&&s.gb9(s)===0)return"EdgeInsets.zero"
if(s.gd6(s)===s.gd7(s)&&s.gd7(s)===s.gb7(s)&&s.gb7(s)===s.gb9(s))return"EdgeInsets.all("+B.d.N(s.gd6(s),1)+")"
return"EdgeInsets("+B.d.N(s.gd6(s),1)+", "+B.d.N(s.gb7(s),1)+", "+B.d.N(s.gd7(s),1)+", "+B.d.N(s.gb9(s),1)+")"}if(s.gd6(s)===0&&s.gd7(s)===0)return"EdgeInsetsDirectional("+B.d.N(s.ge1(s),1)+", "+B.d.N(s.gb7(s),1)+", "+B.d.N(s.ge2(),1)+", "+B.d.N(s.gb9(s),1)+")"
return"EdgeInsets("+B.d.N(s.gd6(s),1)+", "+B.d.N(s.gb7(s),1)+", "+B.d.N(s.gd7(s),1)+", "+B.d.N(s.gb9(s),1)+") + EdgeInsetsDirectional("+B.d.N(s.ge1(s),1)+", 0.0, "+B.d.N(s.ge2(),1)+", 0.0)"},
k(a,b){var s=this
if(b==null)return!1
return b instanceof A.d4&&b.gd6(b)===s.gd6(s)&&b.gd7(b)===s.gd7(s)&&b.ge1(b)===s.ge1(s)&&b.ge2()===s.ge2()&&b.gb7(b)===s.gb7(s)&&b.gb9(b)===s.gb9(s)},
gu(a){var s=this
return A.V(s.gd6(s),s.gd7(s),s.ge1(s),s.ge2(),s.gb7(s),s.gb9(s),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.bm.prototype={
gd6(a){return this.a},
gb7(a){return this.b},
gd7(a){return this.c},
gb9(a){return this.d},
ge1(a){return 0},
ge2(){return 0},
y8(a){var s=this
return new A.C(a.a+s.a,a.b+s.b,a.c-s.c,a.d-s.d)},
C(a,b){if(b instanceof A.bm)return this.U(0,b)
return this.C_(0,b)},
hi(a,b,c){var s=this
return new A.bm(A.F(s.a,b.a,c.a),A.F(s.b,b.b,c.e),A.F(s.c,b.c,c.b),A.F(s.d,b.d,c.f))},
aa(a,b){var s=this
return new A.bm(s.a-b.a,s.b-b.b,s.c-b.c,s.d-b.d)},
U(a,b){var s=this
return new A.bm(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
a0(a,b){var s=this
return new A.bm(s.a*b,s.b*b,s.c*b,s.d*b)},
W(a){return this},
nW(a,b,c,d){var s=this,r=b==null?s.a:b,q=d==null?s.b:d,p=c==null?s.c:c
return new A.bm(r,q,p,a==null?s.d:a)},
xU(a){return this.nW(a,null,null,null)}}
A.aP.prototype={
ge1(a){return this.a},
gb7(a){return this.b},
ge2(){return this.c},
gb9(a){return this.d},
gd6(a){return 0},
gd7(a){return 0},
C(a,b){if(b instanceof A.aP)return this.U(0,b)
return this.C_(0,b)},
aa(a,b){var s=this
return new A.aP(s.a-b.a,s.b-b.b,s.c-b.c,s.d-b.d)},
U(a,b){var s=this
return new A.aP(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
a0(a,b){var s=this
return new A.aP(s.a*b,s.b*b,s.c*b,s.d*b)},
W(a){var s=this
switch(a.a){case 0:return new A.bm(s.c,s.b,s.a,s.d)
case 1:return new A.bm(s.a,s.b,s.c,s.d)}}}
A.kM.prototype={
a0(a,b){var s=this
return new A.kM(s.a*b,s.b*b,s.c*b,s.d*b,s.e*b,s.f*b)},
W(a){var s=this
switch(a.a){case 0:return new A.bm(s.d+s.a,s.e,s.c+s.b,s.f)
case 1:return new A.bm(s.c+s.a,s.e,s.d+s.b,s.f)}},
gd6(a){return this.a},
gd7(a){return this.b},
ge1(a){return this.c},
ge2(){return this.d},
gb7(a){return this.e},
gb9(a){return this.f}}
A.a9E.prototype={}
A.afw.prototype={
$1(a){return a<=this.a},
$S:198}
A.af1.prototype={
$1(a){var s=this,r=A.v(A.ao5(s.a,s.b,a),A.ao5(s.c,s.d,a),s.e)
r.toString
return r},
$S:199}
A.Z9.prototype={
wc(){var s,r,q,p=this.b
if(p!=null)return p
p=this.a.length
s=1/(p-1)
if(p>4294967295)A.X(A.bz(p,0,4294967295,"length",null))
r=J.lX(new Array(p),t.i)
for(q=0;q<p;++q)r[q]=q*s
return r}}
A.m0.prototype={
aH(a,b){var s=this,r=s.a,q=A.an(r).h("aH<1,K>")
return new A.m0(s.d,s.e,s.f,A.aA(new A.aH(r,new A.a_M(b),q),!0,q.h("bn.E")),s.b,null)},
c4(a,b){var s=A.alh(a,this,b)
return s},
c5(a,b){var s=A.alh(this,a,b)
return s},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.T(b)!==A.B(s))return!1
return b instanceof A.m0&&b.d.k(0,s.d)&&b.e.k(0,s.e)&&b.f===s.f&&A.cO(b.a,s.a)&&A.cO(b.b,s.b)},
gu(a){var s=this,r=A.d6(s.a),q=s.b
q=q==null?null:A.d6(q)
return A.V(s.d,s.e,s.f,s.c,r,q,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r=A.a(["begin: "+s.d.i(0),"end: "+s.e.i(0),"colors: "+A.h(s.a)],t.s),q=s.b
if(q!=null)r.push("stops: "+A.h(q))
r.push("tileMode: "+s.f.i(0))
return"LinearGradient("+B.b.ba(r,", ")+")"}}
A.a_M.prototype={
$1(a){var s=A.v(null,a,this.a)
s.toString
return s},
$S:69}
A.ZG.prototype={
X(a){var s,r,q,p
for(s=this.b,r=s.gb_(s),r=new A.e1(J.at(r.a),r.b),q=A.m(r).z[1];r.q();){p=r.a;(p==null?q.a(p):p).m()}s.X(0)
for(s=this.a,r=s.gb_(s),r=new A.e1(J.at(r.a),r.b),q=A.m(r).z[1];r.q();){p=r.a
if(p==null)p=q.a(p)
p.a.H(0,p.b)}s.X(0)
this.f=0},
lN(a){var s,r,q,p=this,o=p.c.v(0,a)
if(o!=null){s=o.a
r=o.d
r===$&&A.b()
if(s.w)A.X(A.a6(u.V))
B.b.v(s.x,r)
o.Cv()}q=p.a.v(0,a)
if(q!=null){q.a.H(0,q.b)
return!0}o=p.b.v(0,a)
if(o!=null){s=p.f
r=o.b
r.toString
p.f=s-r
o.m()
return!0}return!1},
GD(a,b,c){var s,r=this,q=b.b
if(q!=null&&q<=104857600&&!0){s=r.f
q.toString
r.f=s+q
r.b.l(0,a,b)
r.RF(c)}else b.m()},
x6(a,b,c){var s=this.c.bL(0,a,new A.ZJ(this,b,a))
if(s.b==null)s.b=c},
KE(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g={}
g.a=g.b=null
q=i.a
p=q.j(0,b)
o=p==null?h:p.a
g.c=o
if(o!=null)return o
p=i.b
n=p.v(0,b)
if(n!=null){g=n.a
i.x6(b,g,n.b)
p.l(0,b,n)
return g}m=i.c.j(0,b)
if(m!=null){g=m.a
i.GD(b,new A.xq(g,m.b,g.md()),h)
return g}try{o=g.c=c.$0()
i.x6(b,o,h)
p=o}catch(l){s=A.ag(l)
r=A.ay(l)
d.$2(s,r)
return h}g.d=!1
k=A.b4("pendingImage")
j=new A.dm(new A.ZK(g,i,b,!0,k),h,h)
k.b=new A.Om(p,j)
q.l(0,b,k.aC())
g.c.S(0,j)
return g.c},
T(a,b){return this.a.j(0,b)!=null||this.b.j(0,b)!=null},
RF(a){var s,r,q,p,o,n=this,m=n.b,l=A.m(m).h("b8<1>")
while(!0){if(!(n.f>104857600||m.a>1000))break
s=new A.b8(m,l)
r=s.ga8(s)
if(!r.q())A.X(A.bQ())
q=r.gG(r)
p=m.j(0,q)
s=n.f
o=p.b
o.toString
n.f=s-o
p.m()
m.v(0,q)}}}
A.ZJ.prototype={
$0(){return A.axH(this.b,new A.ZI(this.a,this.c))},
$S:200}
A.ZI.prototype={
$0(){this.a.c.v(0,this.b)},
$S:0}
A.ZK.prototype={
$2(a,b){var s,r,q,p,o,n=this
if(a!=null){s=a.a
r=s.gbK(s)*s.gbh(s)*4
s.m()}else r=null
s=n.a
q=s.c
p=new A.xq(q,r,q.md())
q=n.b
o=n.c
q.x6(o,s.c,r)
if(n.d)q.GD(o,p,s.a)
else p.m()
q.a.v(0,o)
if(!s.d){q=n.e.aC()
q.a.H(0,q.b)}s.d=!0},
$S:201}
A.LE.prototype={
m(){$.bM.ax$.push(new A.a9v(this))}}
A.a9v.prototype={
$1(a){var s=this.a,r=s.c
if(r!=null)r.m()
s.c=null},
$S:2}
A.xq.prototype={}
A.qj.prototype={
QM(a,b,c){var s=new A.abC(this,b)
this.d=s
if(a.w)A.X(A.a6(u.V))
a.x.push(s)},
i(a){return"<optimized out>#"+A.bK(this)}}
A.abC.prototype={
$0(){var s,r,q
this.b.$0()
s=this.a
r=s.a
q=s.d
q===$&&A.b()
if(r.w)A.X(A.a6(u.V))
B.b.v(r.x,q)
s.Cv()},
$S:0}
A.Om.prototype={}
A.oj.prototype={
k(a,b){var s=this
if(b==null)return!1
if(J.T(b)!==A.B(s))return!1
return b instanceof A.oj&&b.a==s.a&&b.b==s.b&&J.f(b.c,s.c)&&b.d==s.d&&J.f(b.e,s.e)&&b.f==s.f},
gu(a){var s=this
return A.V(s.a,s.b,s.c,s.e,s.f,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
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
A.dL.prototype={
W(a){var s=new A.ZW()
this.Sd(a,new A.ZU(this,a,s),new A.ZV(this,a,s))
return s},
Sd(a,b,c){var s,r,q,p,o,n={}
n.a=null
n.b=!1
s=new A.ZR(n,c)
r=null
try{r=this.tv(a)}catch(o){q=A.ag(o)
p=A.ay(o)
s.$2(q,p)
return}r.aZ(new A.ZQ(n,this,b,s),t.H).iN(s)},
p8(a,b,c,d){var s,r
if(b.a!=null){s=$.eK.fG$
s===$&&A.b()
s.KE(0,c,new A.ZS(b),d)
return}s=$.eK.fG$
s===$&&A.b()
r=s.KE(0,c,new A.ZT(this,c),d)
if(r!=null)b.Bq(r)},
oJ(a,b,c){throw A.c(A.N("Implement loadBuffer for faster image loading"))},
oK(a,b){return this.oJ(0,a,$.eK.ga3e())},
i(a){return"ImageConfiguration()"}}
A.ZU.prototype={
$2(a,b){this.a.p8(this.b,this.c,a,b)},
$S(){return A.m(this.a).h("~(dL.T,~(H,bI?))")}}
A.ZV.prototype={
$3(a,b,c){return this.LG(a,b,c)},
LG(a,b,c){var s=0,r=A.a4(t.H),q=this,p
var $async$$3=A.a0(function(d,e){if(d===1)return A.a1(e,r)
while(true)switch(s){case 0:s=2
return A.a5(null,$async$$3)
case 2:p=q.c
if(p.a==null)p.Bq(new A.aaa(A.a([],t.fE),A.a([],t.b)))
p=p.a
p.toString
p.ky(A.bi("while resolving an image"),b,null,!0,c)
return A.a2(null,r)}})
return A.a3($async$$3,r)},
$S(){return A.m(this.a).h("ah<~>(dL.T?,H,bI?)")}}
A.ZR.prototype={
LF(a,b){var s=0,r=A.a4(t.H),q,p=this,o
var $async$$2=A.a0(function(c,d){if(c===1)return A.a1(d,r)
while(true)switch(s){case 0:o=p.a
if(o.b){s=1
break}p.b.$3(o.a,a,b)
o.b=!0
case 1:return A.a2(q,r)}})
return A.a3($async$$2,r)},
$2(a,b){return this.LF(a,b)},
$S:202}
A.ZQ.prototype={
$1(a){var s,r,q,p=this
p.a.a=a
try{p.c.$2(a,p.d)}catch(q){s=A.ag(q)
r=A.ay(q)
p.d.$2(s,r)}},
$S(){return A.m(this.b).h("az(dL.T)")}}
A.ZS.prototype={
$0(){var s=this.a.a
s.toString
return s},
$S:79}
A.ZT.prototype={
$0(){return this.a.oK(this.b,$.eK.ga3h())},
$S:79}
A.hj.prototype={
k(a,b){var s=this
if(b==null)return!1
if(J.T(b)!==A.B(s))return!1
return b instanceof A.hj&&b.a===s.a&&b.b===s.b&&b.c===s.c},
gu(a){return A.V(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"AssetBundleImageKey(bundle: "+this.a.i(0)+', name: "'+this.b+'", scale: '+A.h(this.c)+")"}}
A.Ay.prototype={
oK(a,b){return A.alu(this.l9(a,b,null),a.b,null,a.c)},
oJ(a,b,c){return A.alu(this.l9(b,null,c),b.b,null,b.c)},
l9(a,b,c){return this.W1(a,b,c)},
W1(a,b,c){var s=0,r=A.a4(t.gP),q,p=2,o,n,m,l,k,j,i
var $async$l9=A.a0(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:s=b!=null?3:4
break
case 3:n=null
p=6
s=9
return A.a5(a.a.tk(a.b),$async$l9)
case 9:n=e
p=2
s=8
break
case 6:p=5
j=o
if(A.ag(j) instanceof A.jR){k=$.eK.fG$
k===$&&A.b()
k.lN(a)
throw j}else throw j
s=8
break
case 5:s=2
break
case 8:if(n==null){k=$.eK.fG$
k===$&&A.b()
k.lN(a)
throw A.c(A.a6("Unable to read data"))}q=b.$1(n)
s=1
break
case 4:m=null
p=11
s=14
return A.a5(a.a.cN(0,a.b),$async$l9)
case 14:m=e
p=2
s=13
break
case 11:p=10
i=o
if(A.ag(i) instanceof A.jR){k=$.eK.fG$
k===$&&A.b()
k.lN(a)
throw i}else throw i
s=13
break
case 10:s=2
break
case 13:if(m==null){k=$.eK.fG$
k===$&&A.b()
k.lN(a)
throw A.c(A.a6("Unable to read data"))}c.toString
q=c.$1(A.cS(m.buffer,0,null))
s=1
break
case 1:return A.a2(q,r)
case 2:return A.a1(o,r)}})
return A.a3($async$l9,r)}}
A.aaa.prototype={}
A.nA.prototype={
gme(){return this.a},
tv(a){var s,r={},q=a.a
if(q==null)q=$.SJ()
r.a=r.b=null
q.a3V("AssetManifest.c747badc.json",A.aB4(),t.jd).aZ(new A.T9(r,this,a,q),t.H).iN(new A.Ta(r))
s=r.a
if(s!=null)return s
s=new A.a7($.a9,t.hv)
r.b=new A.aY(s,t.q8)
return s},
RQ(a,b,c){var s,r,q,p=b.b
if(p==null||c==null||J.fB(c))return a
s=A.ai8(t.i,t.N)
for(r=J.at(c);r.q();){q=r.gG(r)
s.l(0,this.Fl(q),q)}p.toString
return this.T0(s,p)},
T0(a,b){var s,r,q
if(a.n8(b)){s=a.j(0,b)
s.toString
return s}r=a.a3H(b)
q=a.a1T(b)
if(r==null)return a.j(0,q)
if(q==null)return a.j(0,r)
if(b<2||b>(r+q)/2)return a.j(0,q)
else return a.j(0,r)},
Fl(a){var s,r,q,p
if(a===this.a)return 1
s=A.mT(a,0,null)
r=s.gjn().length>1?s.gjn()[s.gjn().length-2]:""
q=$.apl().rW(r)
if(q!=null&&q.b.length-1>0){p=q.b[1]
p.toString
return A.aoz(p)}return 1},
k(a,b){if(b==null)return!1
if(J.T(b)!==A.B(this))return!1
return b instanceof A.nA&&b.gme()===this.gme()&&!0},
gu(a){return A.V(this.gme(),this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"AssetImage(bundle: "+A.h(this.b)+', name: "'+this.gme()+'")'}}
A.T9.prototype={
$1(a){var s,r=this,q=r.b,p=q.gme(),o=a==null?null:J.aM(a,q.gme())
o=q.RQ(p,r.c,o)
o.toString
s=new A.hj(r.d,o,q.Fl(o))
q=r.a
p=q.b
if(p!=null)p.cb(0,s)
else q.a=new A.bl(s,t.rT)},
$S:204}
A.Ta.prototype={
$2(a,b){this.a.b.hj(a,b)},
$S:32}
A.eH.prototype={
cI(a){return new A.eH(this.a.cI(0),this.b,this.c)},
i(a){var s=this.c
s=s!=null?s+" ":""
return s+this.a.i(0)+" @ "+A.hf(this.b)+"x"},
gu(a){return A.V(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(J.T(b)!==A.B(s))return!1
return b instanceof A.eH&&b.a===s.a&&b.b===s.b&&b.c==s.c}}
A.dm.prototype={
gu(a){return A.V(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(J.T(b)!==A.B(s))return!1
return b instanceof A.dm&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&J.f(b.c,s.c)},
a4j(a,b){return this.a.$2(a,b)}}
A.ZW.prototype={
Bq(a){var s,r=this
r.a=a
s=r.b
if(s!=null){r.b=null
a.f=!0
B.b.Z(s,a.gnB(a))
r.a.f=!1}},
S(a,b){var s=this.a
if(s!=null)return s.S(0,b)
s=this.b;(s==null?this.b=A.a([],t.fE):s).push(b)},
H(a,b){var s,r=this.a
if(r!=null)return r.H(0,b)
for(s=0;r=this.b,s<r.length;++s)if(J.f(r[s],b)){r=this.b
r.toString
B.b.fQ(r,s)
break}}}
A.ZX.prototype={
m(){var s=this.a;--s.r
s.qi()
this.a=null}}
A.jZ.prototype={
S(a,b){var s,r,q,p,o,n,m,l=this
if(l.w)A.X(A.a6(u.V))
l.e=!0
l.a.push(b)
o=l.b
if(o!=null)try{o=o.cI(0)
n=l.f
b.a.$2(o,!n)}catch(m){s=A.ag(m)
r=A.ay(m)
l.KT(A.bi("by a synchronously-called image listener"),s,r)}o=l.c
if(o!=null&&b.c!=null)try{n=b.c
n.toString
n.$2(o.a,o.b)}catch(s){q=A.ag(s)
p=A.ay(s)
if(!J.f(q,l.c.a))A.dK(new A.bx(q,p,"image resource service",A.bi("by a synchronously-called image error listener"),null,!1))}},
md(){if(this.w)A.X(A.a6(u.V));++this.r
return new A.ZX(this)},
H(a,b){var s,r,q,p,o,n=this
if(n.w)A.X(A.a6(u.V))
for(s=n.a,r=0;r<s.length;++r)if(J.f(s[r],b)){B.b.fQ(s,r)
break}if(s.length===0){s=n.x
q=A.a(s.slice(0),A.an(s))
for(p=q.length,o=0;o<q.length;q.length===p||(0,A.Q)(q),++o)q[o].$0()
B.b.X(s)
n.qi()}},
qi(){var s,r=this
if(!r.e||r.w||r.a.length!==0||r.r!==0)return
s=r.b
if(s!=null)s.a.m()
r.b=null
r.w=!0},
Bu(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.w)A.X(A.a6(u.V))
p=i.b
if(p!=null)p.a.m()
i.b=a
p=i.a
if(p.length===0)return
o=A.aA(p,!0,t.tg)
for(p=o.length,n=a.a,m=a.b,l=a.c,k=0;k<p;++k){s=o[k]
try{s.a4j(new A.eH(n.cI(0),m,l),!1)}catch(j){r=A.ag(j)
q=A.ay(j)
i.KT(A.bi("by an image listener"),r,q)}}},
ky(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i="image resource service"
this.c=new A.bx(b,e,i,a,c,d)
o=this.a
n=t.pE
m=A.aA(new A.db(new A.aH(o,new A.ZY(),A.an(o).h("aH<1,~(H,bI?)?>")),n),!0,n.h("q.E"))
s=!1
for(o=m.length,l=0;l<o;++l){r=m[l]
try{r.$2(b,e)
s=!0}catch(k){q=A.ag(k)
p=A.ay(k)
if(!J.f(q,b)){n=A.bi("when reporting an error to an image listener")
j=$.fA()
if(j!=null)j.$1(new A.bx(q,p,i,n,null,!1))}}}if(!s){o=this.c
o.toString
A.dK(o)}},
KT(a,b,c){return this.ky(a,b,null,!1,c)},
a5e(a){var s,r,q,p
if(this.w)A.X(A.a6(u.V))
s=this.a
if(s.length!==0){r=t.zG
q=A.aA(new A.db(new A.aH(s,new A.ZZ(),A.an(s).h("aH<1,~(eG)?>")),r),!0,r.h("q.E"))
for(s=q.length,p=0;p<s;++p)q[p].$1(a)}}}
A.ZY.prototype={
$1(a){return a.c},
$S:207}
A.ZZ.prototype={
$1(a){return a.b},
$S:208}
A.Hn.prototype={
QC(a,b,c,d,e){this.d=c
b.dU(this.gTZ(),new A.a0M(this,d),t.H)},
U_(a){this.z=a
if(this.a.length!==0)this.l2()},
TR(a){var s,r,q,p=this
p.cx=!1
if(p.a.length===0)return
s=p.ay
if(s!=null){r=p.ax
r===$&&A.b()
r=a.a-r.a>=s.a}else r=!0
if(r){s=p.at
p.DU(new A.eH(s.gf6(s).cI(0),p.Q,p.d))
p.ax=a
s=p.at
p.ay=s.gIx(s)
s=p.at
s.gf6(s).m()
p.at=null
q=B.f.h3(p.ch,p.z.gm3())
if(p.z.gtU()===-1||q<=p.z.gtU())p.l2()
return}s.toString
r=p.ax
r===$&&A.b()
p.CW=A.cd(new A.aG(B.d.b1((s.a-(a.a-r.a))*$.aoc)),new A.a0L(p))},
l2(){var s=0,r=A.a4(t.H),q,p=2,o,n=this,m,l,k,j,i
var $async$l2=A.a0(function(a,b){if(a===1){o=b
s=p}while(true)switch(s){case 0:j=n.at
if(j!=null)j.gf6(j).m()
n.at=null
p=4
s=7
return A.a5(n.z.ps(),$async$l2)
case 7:n.at=b
p=2
s=6
break
case 4:p=3
i=o
m=A.ag(i)
l=A.ay(i)
n.ky(A.bi("resolving an image frame"),m,n.as,!0,l)
s=1
break
s=6
break
case 3:s=2
break
case 6:if(n.z.gm3()===1){if(n.a.length===0){s=1
break}j=n.at
n.DU(new A.eH(j.gf6(j).cI(0),n.Q,n.d))
j=n.at
j.gf6(j).m()
n.at=null
s=1
break}n.FP()
case 1:return A.a2(q,r)
case 2:return A.a1(o,r)}})
return A.a3($async$l2,r)},
FP(){if(this.cx)return
this.cx=!0
$.bM.pA(this.gTQ())},
DU(a){this.Bu(a);++this.ch},
S(a,b){var s,r=this
if(r.a.length===0){s=r.z
if(s!=null)s=r.b==null||s.gm3()>1
else s=!1}else s=!1
if(s)r.l2()
r.C5(0,b)},
H(a,b){var s,r=this
r.C6(0,b)
if(r.a.length===0){s=r.CW
if(s!=null)s.al(0)
r.CW=null}},
qi(){this.Nw()
if(this.w)this.y=null}}
A.a0M.prototype={
$2(a,b){this.a.ky(A.bi("resolving an image codec"),a,this.b,!0,b)},
$S:32}
A.a0L.prototype={
$0(){this.a.FP()},
$S:0}
A.Nf.prototype={}
A.Ne.prototype={}
A.Ap.prototype={}
A.k2.prototype={
k(a,b){var s
if(b==null)return!1
if(b instanceof A.k2)if(b.a===this.a)if(b.b==this.b)s=A.cO(b.f,this.f)
else s=!1
else s=!1
else s=!1
return s},
gu(a){return A.V(this.a,this.b,this.c,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"InlineSpanSemanticsInformation{text: "+this.a+", semanticsLabel: "+A.h(this.b)+", recognizer: "+A.h(this.c)+"}"}}
A.fR.prototype={
M4(a){var s={}
s.a=null
this.aT(new A.a_8(s,a,new A.Ap()))
return s.a},
Le(a){var s,r=new A.bN("")
this.HS(r,!0,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
ab(a,b){var s={}
if(b<0)return null
s.a=null
this.aT(new A.a_7(s,b,new A.Ap()))
return s.a},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.T(b)!==A.B(this))return!1
return b instanceof A.fR&&J.f(b.a,this.a)},
gu(a){return J.o(this.a)}}
A.a_8.prototype={
$1(a){var s=a.M5(this.b,this.c)
this.a.a=s
return s==null},
$S:43}
A.a_7.prototype={
$1(a){var s=a.a01(this.b,this.c)
this.a.a=s
return s==null},
$S:43}
A.dv.prototype={
aH(a,b){var s=this.a.aH(0,b)
return new A.dv(this.b.a0(0,b),s)},
c4(a,b){var s,r,q=this
if(a instanceof A.dv){s=A.aw(a.a,q.a,b)
r=A.hl(a.b,q.b,b)
r.toString
return new A.dv(r,s)}if(a instanceof A.di){s=A.aw(a.a,q.a,b)
return new A.e6(q.b,1-b,a.b,s)}return q.kS(a,b)},
c5(a,b){var s,r,q=this
if(a instanceof A.dv){s=A.aw(q.a,a.a,b)
r=A.hl(q.b,a.b,b)
r.toString
return new A.dv(r,s)}if(a instanceof A.di){s=A.aw(q.a,a.a,b)
return new A.e6(q.b,b,a.b,s)}return q.kT(a,b)},
fh(a,b){var s=$.ao().ck()
s.ev(this.b.W(b).dj(a))
return s},
hz(a,b,c){var s,r,q,p,o=this.a
switch(o.c.a){case 0:break
case 1:s=this.b
if(o.b===0)a.cV(s.W(c).dj(b),o.hG())
else{r=$.ao().bd()
r.sae(0,o.a)
q=s.W(c).dj(b)
p=q.cZ(-o.gel())
a.rG(q.cZ(o.gBO()),p,r)}break}},
k(a,b){if(b==null)return!1
if(J.T(b)!==A.B(this))return!1
return b instanceof A.dv&&b.a.k(0,this.a)&&b.b.k(0,this.b)},
gu(a){return A.V(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"RoundedRectangleBorder("+this.a.i(0)+", "+this.b.i(0)+")"}}
A.e6.prototype={
aH(a,b){var s=this.a.aH(0,b)
return new A.e6(this.b.a0(0,b),b,this.d,s)},
c4(a,b){var s,r,q,p=this
if(a instanceof A.dv){s=A.aw(a.a,p.a,b)
r=A.hl(a.b,p.b,b)
r.toString
return new A.e6(r,p.c*b,p.d,s)}if(a instanceof A.di){s=A.aw(a.a,p.a,b)
r=p.c
return new A.e6(p.b,r+(1-r)*(1-b),a.b,s)}if(a instanceof A.e6){s=A.aw(a.a,p.a,b)
r=A.hl(a.b,p.b,b)
r.toString
q=A.S(a.c,p.c,b)
q.toString
return new A.e6(r,q,p.d,s)}return p.kS(a,b)},
c5(a,b){var s,r,q,p=this
if(a instanceof A.dv){s=A.aw(p.a,a.a,b)
r=A.hl(p.b,a.b,b)
r.toString
return new A.e6(r,p.c*(1-b),p.d,s)}if(a instanceof A.di){s=A.aw(p.a,a.a,b)
r=p.c
return new A.e6(p.b,r+(1-r)*b,a.b,s)}if(a instanceof A.e6){s=A.aw(p.a,a.a,b)
r=A.hl(p.b,a.b,b)
r.toString
q=A.S(p.c,a.c,b)
q.toString
return new A.e6(r,q,p.d,s)}return p.kT(a,b)},
FL(a){var s,r,q,p,o,n,m,l,k=this.c
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
CP(a,b){var s,r,q,p=this.b.W(b),o=this.c
if(o===0)return p
s=this.d
if(s!==0){r=a.c-a.a
q=a.d-a.b
s=0.5+s/2
if(r<q){o=A.nF(p,A.AO(new A.bo(r/2,s*q/2)),o)
o.toString
return o}else{o=A.nF(p,A.AO(new A.bo(s*r/2,q/2)),o)
o.toString
return o}}return A.nF(p,A.hk(a.gfk()/2),o)},
fh(a,b){var s=$.ao().ck(),r=this.CP(a,b)
r.toString
s.ev(r.dj(this.FL(a)))
return s},
hz(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=this.CP(b,c)
s.toString
a.cV(s.dj(this.FL(b)).cZ(r.b*r.d/2),r.hG())
break}},
k(a,b){var s=this
if(b==null)return!1
if(J.T(b)!==A.B(s))return!1
return b instanceof A.e6&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c===s.c},
gu(a){return A.V(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r="RoundedRectangleBorder(",q=s.d
if(q!==0)return r+s.a.i(0)+", "+s.b.i(0)+", "+B.d.N(s.c*100,1)+u.T+B.d.N(q*100,1)+"% oval)"
return r+s.a.i(0)+", "+s.b.i(0)+", "+B.d.N(s.c*100,1)+"% of the way to being a CircleBorder)"}}
A.ep.prototype={
aH(a,b){return new A.ep(this.a.aH(0,b))},
c4(a,b){var s,r=this
if(a instanceof A.ep)return new A.ep(A.aw(a.a,r.a,b))
if(a instanceof A.di){s=A.aw(a.a,r.a,b)
return new A.e8(1-b,a.b,s)}if(a instanceof A.dv){s=A.aw(a.a,r.a,b)
return new A.e9(a.b,1-b,s)}return r.kS(a,b)},
c5(a,b){var s,r=this
if(a instanceof A.ep)return new A.ep(A.aw(r.a,a.a,b))
if(a instanceof A.di){s=A.aw(r.a,a.a,b)
return new A.e8(b,a.b,s)}if(a instanceof A.dv){s=A.aw(r.a,a.a,b)
return new A.e9(a.b,b,s)}return r.kT(a,b)},
fh(a,b){var s=a.gfk()/2,r=$.ao().ck()
r.ev(A.ahX(a,new A.bo(s,s)))
return r},
hz(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=b.gfk()/2
a.cV(A.ahX(b,new A.bo(s,s)).cZ(r.b*r.d/2),r.hG())
break}},
k(a,b){if(b==null)return!1
if(J.T(b)!==A.B(this))return!1
return b instanceof A.ep&&b.a.k(0,this.a)},
gu(a){var s=this.a
return A.V(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"StadiumBorder("+this.a.i(0)+")"}}
A.e8.prototype={
aH(a,b){return new A.e8(b,this.c,this.a.aH(0,b))},
c4(a,b){var s,r,q,p=this
if(a instanceof A.ep)return new A.e8(p.b*b,p.c,A.aw(a.a,p.a,b))
if(a instanceof A.di){s=A.aw(a.a,p.a,b)
r=p.b
return new A.e8(r+(1-r)*(1-b),a.b,s)}if(a instanceof A.e8){s=A.aw(a.a,p.a,b)
r=A.S(a.b,p.b,b)
r.toString
q=A.S(a.c,p.c,b)
q.toString
return new A.e8(r,q,s)}return p.kS(a,b)},
c5(a,b){var s,r,q,p=this
if(a instanceof A.ep)return new A.e8(p.b*(1-b),p.c,A.aw(p.a,a.a,b))
if(a instanceof A.di){s=A.aw(p.a,a.a,b)
r=p.b
return new A.e8(r+(1-r)*b,a.b,s)}if(a instanceof A.e8){s=A.aw(p.a,a.a,b)
r=A.S(p.b,a.b,b)
r.toString
q=A.S(p.c,a.c,b)
q.toString
return new A.e8(r,q,s)}return p.kT(a,b)},
Gk(a){var s,r,q,p,o,n,m,l,k=this.b
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
nr(a){var s,r,q,p=A.hk(a.gfk()/2),o=this.c
if(o!==0){s=a.c-a.a
r=a.d-a.b
q=this.b
o=0.5+o/2
if(s<r){o=A.nF(p,A.AO(new A.bo(s/2,o*r/2)),q)
o.toString
return o}else{o=A.nF(p,A.AO(new A.bo(o*s/2,r/2)),q)
o.toString
return o}}return p},
fh(a,b){var s=$.ao().ck()
s.ev(this.nr(a).dj(this.Gk(a)))
return s},
hz(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.cV(this.nr(b).dj(this.Gk(b)).cZ(s.b*s.d/2),s.hG())
break}},
k(a,b){if(b==null)return!1
if(J.T(b)!==A.B(this))return!1
return b instanceof A.e8&&b.a.k(0,this.a)&&b.b===this.b},
gu(a){return A.V(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r=s.c
if(r!==0)return"StadiumBorder("+s.a.i(0)+", "+B.d.N(s.b*100,1)+u.T+B.d.N(r*100,1)+"% oval)"
return"StadiumBorder("+s.a.i(0)+", "+B.d.N(s.b*100,1)+"% of the way to being a CircleBorder)"}}
A.e9.prototype={
aH(a,b){var s=this.a.aH(0,b)
return new A.e9(this.b.a0(0,b),b,s)},
c4(a,b){var s,r,q,p=this
if(a instanceof A.ep)return new A.e9(p.b,p.c*b,A.aw(a.a,p.a,b))
if(a instanceof A.dv){s=p.c
return new A.e9(p.b,s+(1-s)*(1-b),A.aw(a.a,p.a,b))}if(a instanceof A.e9){s=A.aw(a.a,p.a,b)
r=A.hl(a.b,p.b,b)
r.toString
q=A.S(a.c,p.c,b)
q.toString
return new A.e9(r,q,s)}return p.kS(a,b)},
c5(a,b){var s,r,q,p=this
if(a instanceof A.ep)return new A.e9(p.b,p.c*(1-b),A.aw(p.a,a.a,b))
if(a instanceof A.dv){s=p.c
return new A.e9(p.b,s+(1-s)*b,A.aw(p.a,a.a,b))}if(a instanceof A.e9){s=A.aw(p.a,a.a,b)
r=A.hl(p.b,a.b,b)
r.toString
q=A.S(p.c,a.c,b)
q.toString
return new A.e9(r,q,s)}return p.kT(a,b)},
nr(a){var s=a.gfk()/2
s=A.hl(this.b,A.AO(new A.bo(s,s)),1-this.c)
s.toString
return s},
fh(a,b){var s=$.ao().ck()
s.ev(this.nr(a).W(b).dj(a))
return s},
hz(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.cV(this.nr(b).W(c).dj(b).cZ(s.b*s.d/2),s.hG())
break}},
k(a,b){var s=this
if(b==null)return!1
if(J.T(b)!==A.B(s))return!1
return b instanceof A.e9&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c===s.c},
gu(a){return A.V(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"StadiumBorder("+this.a.i(0)+", "+this.b.i(0)+", "+B.d.N(this.c*100,1)+"% of the way to being a RoundedRectangleBorder)"}}
A.mL.prototype={
F(){return"TextOverflow."+this.b}}
A.mb.prototype={
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(b instanceof A.mb)if(b.a.k(0,r.a))if(b.b===r.b)s=b.c==r.c
else s=!1
else s=!1
else s=!1
return s},
gu(a){var s=this
return A.V(s.a,s.b,s.d,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"PlaceholderDimensions("+this.a.i(0)+", "+A.h(this.d)+")"}}
A.x0.prototype={
F(){return"TextWidthBasis."+this.b}}
A.a9w.prototype={}
A.Kt.prototype={
a6(){var s=this,r=s.a
if(r!=null)r.m()
s.dy=s.dx=s.fr=s.a=null},
stX(a,b){var s,r,q=this
if(J.f(q.d,b))return
s=q.d
s=s==null?null:s.a
if(!J.f(s,b.a)){s=q.CW
if(s!=null)s.m()
q.CW=null}s=q.d
s=s==null?null:s.b2(0,b)
r=s==null?B.cI:s
q.d=b
q.e=null
s=r.a
if(s>=3)q.a6()
else if(s>=2)q.b=!0},
gtJ(){var s=this.e
if(s==null){s=this.d
s=s==null?null:s.Le(!1)
this.e=s}return s==null?"":s},
sAr(a,b){if(this.f===b)return
this.f=b
this.a6()},
sbD(a){var s,r=this
if(r.r===a)return
r.r=a
r.a6()
s=r.CW
if(s!=null)s.m()
r.CW=null},
sAs(a){var s,r=this
if(r.w===a)return
r.w=a
r.a6()
s=r.CW
if(s!=null)s.m()
r.CW=null},
sa1s(a){if(this.x==a)return
this.x=a
this.a6()},
szh(a,b){if(J.f(this.y,b))return
this.y=b
this.a6()},
szm(a){if(this.z==a)return
this.z=a
this.a6()},
sAt(a){if(this.as===a)return
this.as=a
this.a6()},
ut(a){if(a==null||a.length===0||A.cO(a,this.ch))return
this.ch=a
this.a6()},
DF(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.d.a
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
o=l==null?f:new A.Kq(l)
k=e.w
j=e.x
i=e.d
h=e.r
if(h==null)h=14
e=e.as
e=A.ahS(n,i,h*q,j,k,e,m,p,f,s,r,o)}if(e==null){e=g.f
s=g.r
if(s==null)s=a
r=g.w
q=g.z
p=g.at
p=A.ahS(g.x,f,14*r,f,f,f,g.y,q,f,e,s,p)
e=p}return e},
Si(){return this.DF(null)},
gtL(){var s,r,q=this,p=q.CW
if(p==null){p=q.DF(B.W)
s=$.ao().xZ(p)
p=q.d
if(p==null)r=null
else{p=p.a
r=p==null?null:p.Bb(q.w)}if(r!=null)s.A7(r)
s.qX(" ")
p=s.b3()
p.hu(B.Tp)
q.CW=p}return p.gbK(p)},
gbh(a){var s=this.as,r=this.a
s=s===B.Zm?r.gK2():r.gbh(r)
return Math.ceil(s)},
ez(a){var s
switch(a.a){case 0:s=this.a
return s.gr0(s)
case 1:s=this.a
return s.ga33(s)}},
DE(){var s,r,q=this,p=q.d
if(p==null)throw A.c(A.a6("TextPainter.text must be set to a non-null value before using the TextPainter."))
s=q.Si()
r=$.ao().xZ(s)
s=q.w
p.HD(r,q.ch,s)
q.ay=r.ga4y()
q.a=r.b3()
q.b=!1},
EQ(a,b){var s,r,q=this
q.a.hu(new A.kh(b))
if(a!==b){switch(q.as.a){case 1:s=Math.ceil(q.a.gK2())
break
case 0:s=Math.ceil(q.a.ga41())
break
default:s=null}s=A.F(s,a,b)
r=q.a
if(s!==Math.ceil(r.gbh(r)))q.a.hu(new A.kh(s))}},
ze(a,b){var s=this,r=s.a==null
if(!r&&b===s.cx&&a===s.cy)return
if(s.b||r)s.DE()
s.cx=b
s.cy=a
s.dy=s.dx=s.fr=null
s.EQ(b,a)
s.ax=s.a.u6()},
a3J(){return this.ze(1/0,0)},
aF(a,b){var s,r=this,q=r.cx,p=r.cy
if(r.a==null||q==null||p==null)throw A.c(A.a6("TextPainter.paint called when text geometry was not yet calculated.\nPlease call layout() before paint() to position the text before painting it."))
if(r.b){r.DE()
r.EQ(q,p)}s=r.a
s.toString
a.k9(s,b)},
Ec(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.gtJ().length
if(g===0||a>g)return null
s=B.c.ab(h.gtJ(),Math.max(0,a-1))
r=(s&63488)===55296||h.d.ab(0,a)===8205||s===8207||s===8206
q=r?2:1
p=A.a([],t.px)
for(o=-g,n=!r,m=s===10;p.length===0;){l=a-q
p=h.a.AU(l,a,B.mm)
if(p.length===0){if(n&&m)break
if(l<o)break
q*=2
continue}k=B.b.gJ(p)
if(m){o=k.d
return new A.C(h.gvE().a,o,h.gvE().a,o+o-k.b)}o=k.e
j=o===B.u?k.c:k.a
i=o===B.W?j-(b.c-b.a):j
o=h.a
o=A.F(i,0,o.gbh(o))
n=h.a
return new A.C(o,k.b,A.F(i,0,n.gbh(n)),k.d)}return null},
Eb(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.gtJ().length
if(h===0||a<0)return null
s=B.c.ab(i.gtJ(),Math.min(a,h-1))
r=(s&63488)===55296||s===8205||s===8207||s===8206
q=r?2:1
p=A.a([],t.px)
for(o=h<<1>>>0,n=!r;p.length===0;){m=a+q
p=i.a.AU(a,m,B.mm)
if(p.length===0){if(n)break
if(m>=o)break
q*=2
continue}l=B.b.gV(p)
o=l.e
k=o===B.u?l.a:l.c
j=o===B.W?k-(b.c-b.a):k
o=i.a
o=A.F(j,0,o.gbh(o))
n=i.a
return new A.C(o,l.b,A.F(j,0,n.gbh(n)),l.d)}return null},
gvE(){var s=this
switch(s.f.a){case 0:return B.j
case 1:return new A.t(s.gbh(s),0)
case 2:return new A.t(s.gbh(s)/2,0)
case 3:case 4:switch(s.r.a){case 0:return new A.t(s.gbh(s),0)
case 1:return B.j}break
case 5:switch(s.r.a){case 0:return B.j
case 1:return new A.t(s.gbh(s),0)}break}},
Du(a,b){var s,r,q,p,o=this
if(a.k(0,o.dx)&&b.k(0,o.dy))return
s=a.a
switch(a.b.a){case 0:r=o.Ec(s,b)
if(r==null)r=o.Eb(s,b)
break
case 1:r=o.Eb(s,b)
if(r==null)r=o.Ec(s,b)
break
default:r=null}q=r!=null
p=q?new A.t(r.a,r.b):o.gvE()
o.db=new A.a9w(p,q?r.d-r.b:null)
o.dx=a
o.dy=b},
m(){var s=this,r=s.CW
if(r!=null)r.m()
s.CW=null
r=s.a
if(r!=null)r.m()
s.d=s.a=null}}
A.x_.prototype={
gIa(a){return this.e},
gAN(){return!0},
i9(a,b){t.Y.b(a)},
HD(a,b,c){var s,r,q,p,o=this.a,n=o!=null
if(n)a.A7(o.Bb(c))
o=this.b
if(o!=null)try{a.qX(o)}catch(q){o=A.ag(q)
if(o instanceof A.fC){s=o
r=A.ay(q)
A.dK(new A.bx(s,r,"painting library",A.bi("while building a TextSpan"),null,!1))
a.qX("\ufffd")}else throw q}o=this.c
if(o!=null)for(p=0;p<1;++p)o[p].HD(a,b,c)
if(n)a.hC()},
aT(a){var s,r
if(this.b!=null)if(!a.$1(this))return!1
s=this.c
if(s!=null)for(r=0;r<1;++r)if(!s[r].aT(a))return!1
return!0},
M5(a,b){var s,r,q,p,o=this.b
if(o==null)return null
s=a.b
r=a.a
q=b.a
p=q+o.length
if(!(q===r&&s===B.C))if(!(q<r&&r<p))o=p===r&&s===B.N
else o=!0
else o=!0
if(o)return this
b.a=p
return null},
HS(a,b,c){var s,r=this.b
if(r!=null)a.a+=r
r=this.c
if(r!=null)for(s=0;s<1;++s)r[s].HS(a,!0,c)},
HR(a,b,c){var s,r,q=this.b
if(q!=null){s=A.a([],t.ve)
a.push(A.al4(q,null,null,s))}q=this.c
if(q!=null)for(r=0;r<1;++r)q[r].HR(a,b,!1)},
a0f(a){return this.HR(a,null,!1)},
a01(a,b){var s,r,q,p=this.b
if(p==null)return null
s=b.a
r=a-s
q=p.length
if(r<q)return B.c.ab(p,r)
b.a=s+q
return null},
b2(a,b){var s,r,q,p,o,n=this
if(n===b)return B.dM
if(A.B(b)!==A.B(n))return B.cI
if(b.b==n.b){s=n.c==null?null:1
s=s!=(b.c==null?null:1)||n.a==null!==(b.a==null)}else s=!0
if(s)return B.cI
s=n.a
if(s!=null){r=b.a
r.toString
q=s.b2(0,r)
p=q.a>0?q:B.dM
if(p===B.cI)return p}else p=B.dM
s=n.c
if(s!=null)for(r=b.c,o=0;o<1;++o){q=s[o].b2(0,r[o])
if(q.a>p.a)p=q
if(p===B.cI)return p}return p},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.T(b)!==A.B(s))return!1
if(!s.Nz(0,b))return!1
return b instanceof A.x_&&b.b==s.b&&s.e.k(0,b.e)&&A.cO(b.c,s.c)},
gu(a){var s=this,r=null,q=A.fR.prototype.gu.call(s,s),p=s.c
p=p==null?r:A.d6(p)
return A.V(q,s.b,r,r,r,r,s.e,p,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
bW(){return"TextSpan"},
$ial:1,
$iiU:1,
gzI(){return null},
gzL(){return null}}
A.r.prototype={
gm2(){return this.e},
glp(a){return this.d},
nV(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=b9==null?a.a:b9,a1=a.ay
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
c=b0==null?a.glp(a):b0
b=b1==null?a.e:b1
return A.bw(r,q,s,null,g,f,e,d,c,b,a.fr,p,a.x,h,o,a1,k,a0,j,n,a.ax,a.fy,a.f,i,l,m)},
hl(a){return this.nV(null,null,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
a0w(a){return this.nV(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null)},
a0G(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5){return this.nV(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,null,r,s,a0,a1,a2,a3,a4,a5)},
I2(a,b){return this.nV(null,null,a,null,null,null,null,null,null,null,null,b,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
HY(a){return this.nV(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null,null,null)},
c1(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
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
a1=a4.glp(a4)
a2=a4.e
a3=a4.f
return this.a0G(g,r,s,null,c,b,a,a0,a1,a2,e,q,o,d,p,h,k,j,n,i,a4.fy,a3,f,l,m)},
Bb(a){var s,r,q=this,p=q.gm2(),o=q.r
o=o==null?null:o*a
s=q.ch
if(s==null){s=q.c
if(s!=null){r=$.ao().bd()
r.sae(0,s)
s=r}else s=null}return A.amx(s,q.b,q.CW,q.cx,q.cy,q.db,q.d,p,q.fr,o,q.x,q.fx,q.w,q.ay,q.as,q.at,q.y,q.ax,q.dy,q.Q,q.z)},
b2(a,b){var s=this
if(s===b)return B.dM
if(s.a!==b.a||s.d!=b.d||s.r!=b.r||s.w!=b.w||s.y!=b.y||s.z!=b.z||s.Q!=b.Q||s.as!=b.as||s.at!=b.at||s.ay!=b.ay||s.ch!=b.ch||!A.cO(s.dy,b.dy)||!A.cO(s.fr,b.fr)||!A.cO(s.fx,b.fx)||!A.cO(s.gm2(),b.gm2())||!1)return B.cI
if(!J.f(s.b,b.b)||!J.f(s.c,b.c)||!J.f(s.CW,b.CW)||!J.f(s.cx,b.cx)||s.cy!=b.cy||s.db!=b.db)return B.TI
return B.dM},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.T(b)!==A.B(r))return!1
if(b instanceof A.r)if(b.a===r.a)if(J.f(b.b,r.b))if(J.f(b.c,r.c))if(b.r==r.r)if(b.w==r.w)if(b.y==r.y)if(b.z==r.z)if(b.Q==r.Q)if(b.as==r.as)if(b.at==r.at)if(b.ay==r.ay)if(b.ch==r.ch)if(A.cO(b.dy,r.dy))if(A.cO(b.fr,r.fr))if(A.cO(b.fx,r.fx))if(J.f(b.CW,r.CW))if(J.f(b.cx,r.cx))if(b.cy==r.cy)if(b.db==r.db)if(b.d==r.d)if(A.cO(b.gm2(),r.gm2()))s=!0
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
gu(a){var s,r=this,q=null,p=r.gm2(),o=p==null?q:A.d6(p),n=A.V(r.cy,r.db,r.d,o,r.f,r.fy,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a),m=r.dy,l=r.fx
o=m==null?q:A.d6(m)
s=l==null?q:A.d6(l)
return A.V(r.a,r.b,r.c,r.r,r.w,r.x,r.y,r.z,r.Q,r.as,r.at,r.ax,r.ay,r.ch,o,q,s,r.CW,r.cx,n)},
bW(){return"TextStyle"}}
A.Qx.prototype={}
A.EA.prototype={
Qy(a,b,c,d,e){var s=this
s.r=A.anZ(new A.Ys(s),s.gyt(s),0,10,0)},
cP(a,b){var s,r,q=this
if(b>q.r)return q.grR()
s=q.e
r=q.c
return q.d+s*Math.pow(q.b,b)/r-s/r-q.f/2*b*b},
dt(a,b){var s=this
if(b>s.r)return 0
return s.e*Math.pow(s.b,b)-s.f*b},
grR(){var s=this
if(s.f===0)return s.d-s.e/s.c
return s.cP(0,s.r)},
L9(a){var s,r=this,q=r.d
if(a===q)return 0
s=r.e
if(s!==0)if(s>0)q=a<q||a>r.grR()
else q=a>q||a<r.grR()
else q=!0
if(q)return 1/0
return A.anZ(r.gyt(r),r.ga65(r),0,10,a)},
jf(a){return Math.abs(this.dt(0,a))<this.a.c},
i(a){return"FrictionSimulation(c\u2093: "+B.d.N(this.b,1)+", x\u2080: "+B.d.N(this.d,1)+", dx\u2080: "+B.d.N(this.e,1)+")"}}
A.Ys.prototype={
$1(a){var s=this.a
return s.e*Math.pow(s.b,a)*s.c-s.f},
$S:58}
A.a58.prototype={
i(a){return"Simulation"}}
A.a71.prototype={
i(a){return"SpringDescription(mass: "+B.d.N(this.a,1)+", stiffness: "+B.f.N(this.b,1)+", damping: "+B.d.N(this.c,1)+")"}}
A.pp.prototype={
F(){return"SpringType."+this.b}}
A.K7.prototype={
cP(a,b){return this.b+this.c.cP(0,b)},
dt(a,b){return this.c.dt(0,b)},
jf(a){var s=this.c
return A.Ae(s.cP(0,a),0,this.a.a)&&A.Ae(s.dt(0,a),0,this.a.c)},
i(a){var s=this.c
return"SpringSimulation(end: "+B.d.N(this.b,1)+", "+s.gd1(s).i(0)+")"}}
A.kq.prototype={
cP(a,b){return this.jf(b)?this.b:this.P6(0,b)}}
A.a9L.prototype={
cP(a,b){return(this.b+this.c*b)*Math.pow(2.718281828459045,this.a*b)},
dt(a,b){var s=this.a,r=Math.pow(2.718281828459045,s*b),q=this.c
return s*(this.b+q*b)*r+q*r},
gd1(a){return B.V9}}
A.acq.prototype={
cP(a,b){var s=this
return s.c*Math.pow(2.718281828459045,s.a*b)+s.d*Math.pow(2.718281828459045,s.b*b)},
dt(a,b){var s=this,r=s.a,q=s.b
return s.c*r*Math.pow(2.718281828459045,r*b)+s.d*q*Math.pow(2.718281828459045,q*b)},
gd1(a){return B.Vb}}
A.ae_.prototype={
cP(a,b){var s=this,r=s.a*b
return Math.pow(2.718281828459045,s.b*b)*(s.c*Math.cos(r)+s.d*Math.sin(r))},
dt(a,b){var s,r=this,q=r.b,p=Math.pow(2.718281828459045,q*b),o=r.a,n=o*b,m=Math.cos(n),l=Math.sin(n)
n=r.d
s=r.c
return p*(n*o*m-s*o*l)+q*p*(n*l+s*m)},
gd1(a){return B.Va}}
A.KD.prototype={
i(a){return"Tolerance(distance: \xb1"+A.h(this.a)+", time: \xb10.001, velocity: \xb1"+A.h(this.c)+")"}}
A.p2.prototype={
yP(){var s=this,r=s.ry$
r===$&&A.b()
r=r.e
r.toString
r.sxS(s.I8())
if(s.ry$.e.t$!=null)s.Me()},
yV(){},
yR(){},
I8(){var s,r=$.ce(),q=r.w
if(q==null){s=self.window.devicePixelRatio
q=s===0?1:s}return new A.KW(r.gku().cQ(0,q),q)},
Vi(){var s,r=this
if($.aL().a.c){if(r.to$==null){s=r.ry$
s===$&&A.b()
r.to$=s.IH()}}else{s=r.to$
if(s!=null)s.m()
r.to$=null}},
MD(a){var s,r=this
if(a){if(r.to$==null){s=r.ry$
s===$&&A.b()
r.to$=s.IH()}}else{s=r.to$
if(s!=null)s.m()
r.to$=null}},
VB(a){B.T7.nf("first-frame",null,!1,t.H)},
Vg(a,b,c){var s=this.ry$
s===$&&A.b()
s=s.as
if(s!=null)s.a4w(a,b,null)},
Vk(){var s,r=this.ry$
r===$&&A.b()
r=r.e
r.toString
s=t.W
s.a(A.J.prototype.gbo.call(r)).ay.C(0,r)
s.a(A.J.prototype.gbo.call(r)).mp()},
Vo(a){var s=this.ry$
s===$&&A.b()
s.e.toString
s=$.dy;(s==null?$.dy=A.jO():s).a5R(a)},
Vm(){var s=this.ry$
s===$&&A.b()
s.e.lA()},
UN(a){this.ys()
this.Yh()},
Yh(){$.bM.ax$.push(new A.a3j(this))},
Hq(){--this.x2$
if(!this.xr$)this.ui()},
ys(){var s=this,r=s.ry$
r===$&&A.b()
r.a1W()
s.ry$.a1V()
s.ry$.a1X()
if(s.xr$||s.x2$===0){s.ry$.e.a0b()
s.ry$.a1Y()
s.xr$=!0}},
$ial:1,
$idw:1}
A.a3j.prototype={
$1(a){var s=this.a,r=s.rx$
r.toString
s=s.ry$
s===$&&A.b()
r.a5O(s.e.ga30())},
$S:2}
A.aO.prototype={
xW(a,b,c,d){var s=this,r=d==null?s.a:d,q=b==null?s.b:b,p=c==null?s.c:c
return new A.aO(r,q,p,a==null?s.d:a)},
a0D(a,b){return this.xW(null,null,a,b)},
I_(a){return this.xW(a,null,null,null)},
a0x(a){return this.xW(null,a,null,null)},
Id(a){var s=this,r=a.gci(),q=a.gb7(a)+a.gb9(a),p=Math.max(0,s.a-r),o=Math.max(0,s.c-q)
return new A.aO(p,Math.max(p,s.b-r),o,Math.max(o,s.d-q))},
oh(a){var s=this,r=a.a,q=a.b,p=a.c,o=a.d
return new A.aO(A.F(s.a,r,q),A.F(s.b,r,q),A.F(s.c,p,o),A.F(s.d,p,o))},
Aw(a,b){var s,r,q=this,p=b==null,o=q.a,n=p?o:A.F(b,o,q.b),m=q.b
p=p?m:A.F(b,o,m)
o=a==null
m=q.c
s=o?m:A.F(a,m,q.d)
r=q.d
return new A.aO(n,p,s,o?r:A.F(a,m,r))},
tY(a){return this.Aw(a,null)},
Av(a){return this.Aw(null,a)},
bq(a){var s=this
return new A.a_(A.F(a.a,s.a,s.b),A.F(a.b,s.c,s.d))},
nU(a){var s,r,q,p,o,n=this,m=n.a,l=n.b
if(m>=l&&n.c>=n.d)return new A.a_(A.F(0,m,l),A.F(0,n.c,n.d))
s=a.a
r=a.b
q=s/r
if(s>l){r=l/q
s=l}p=n.d
if(r>p){s=p*q
r=p}if(s<m){r=m/q
s=m}o=n.c
if(r<o){s=o*q
r=o}return new A.a_(A.F(s,m,l),A.F(r,o,p))},
gJQ(){var s=this
return s.a>=s.b&&s.c>=s.d},
a0(a,b){var s=this
return new A.aO(s.a*b,s.b*b,s.c*b,s.d*b)},
cQ(a,b){var s=this
return new A.aO(s.a/b,s.b/b,s.c/b,s.d/b)},
ga3w(){var s=this,r=s.a
if(r>=0)if(r<=s.b){r=s.c
r=r>=0&&r<=s.d}else r=!1
else r=!1
return r},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.T(b)!==A.B(s))return!1
return b instanceof A.aO&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gu(a){var s=this
return A.V(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s,r=this,q=r.ga3w()?"":"; NOT NORMALIZED",p=r.a
if(p===1/0&&r.c===1/0)return"BoxConstraints(biggest"+q+")"
if(p===0&&r.b===1/0&&r.c===0&&r.d===1/0)return"BoxConstraints(unconstrained"+q+")"
s=new A.Ty()
return"BoxConstraints("+s.$3(p,r.b,"w")+", "+s.$3(r.c,r.d,"h")+q+")"}}
A.Ty.prototype={
$3(a,b,c){if(a===b)return c+"="+B.d.N(a,1)
return B.d.N(a,1)+"<="+c+"<="+B.d.N(b,1)},
$S:214}
A.hm.prototype={
xu(a,b,c){if(c!=null){c=A.Hc(A.ahU(c))
if(c==null)return!1}return this.Ho(a,b,c)},
nD(a,b,c){var s,r=b==null,q=r?c:c.aa(0,b)
r=!r
if(r)this.c.push(new A.qp(new A.t(-b.a,-b.b)))
s=a.$2(this,q)
if(r)this.tK()
return s},
Ho(a,b,c){var s,r=c==null,q=r?b:A.cp(c,b)
r=!r
if(r)this.c.push(new A.yc(c))
s=a.$2(this,q)
if(r)this.tK()
return s},
Hn(a,b,c){var s,r=this
if(b!=null)r.c.push(new A.qp(new A.t(-b.a,-b.b)))
else{c.toString
c=A.Hc(A.ahU(c))
c.toString
r.c.push(new A.yc(c))}s=a.$1(r)
r.tK()
return s},
a_c(a,b){return this.Hn(a,null,b)},
a_b(a,b){return this.Hn(a,b,null)}}
A.nI.prototype={
i(a){return"<optimized out>#"+A.bK(this.a)+"@"+this.c.i(0)}}
A.ey.prototype={
i(a){return"offset="+this.a.i(0)}}
A.rJ.prototype={}
A.E.prototype={
ei(a){if(!(a.e instanceof A.ey))a.e=new A.ey(B.j)},
fU(a){var s,r=this.k1
if(r==null)r=this.k1=A.y(t.k,t.DB)
s=r.bL(0,a,new A.a2M(this,a))
return s},
c3(a){return B.S},
gjC(){var s=this.k3
return new A.C(0,0,0+s.a,0+s.b)},
u9(a,b){var s=null
try{s=this.jx(a)}finally{}if(s==null&&!b)return this.k3.b
return s},
LN(a){return this.u9(a,!1)},
jx(a){var s=this,r=s.k4
if(r==null)r=s.k4=A.y(t.E7,t.u6)
r.bL(0,a,new A.a2L(s,a))
return s.k4.j(0,a)},
ez(a){return null},
gY(){return t.k.a(A.x.prototype.gY.call(this))},
RT(){var s,r=this,q=r.k4,p=q==null
if(!(!p&&q.a!==0)){s=r.id
if(!(s!=null&&s.a!==0)){s=r.k1
s=s!=null&&s.a!==0}else s=!0}else s=!0
if(s){if(!p)q.X(0)
q=r.id
if(q!=null)q.X(0)
q=r.k1
if(q!=null)q.X(0)
return!0}return!1},
a6(){var s=this
if(s.RT()&&s.c instanceof A.x){s.tp()
return}s.Os()},
cn(a,b){var s,r=this
if(r.k3!=null)if(!a.k(0,t.k.a(A.x.prototype.gY.call(r)))){s=r.k4
s=s!=null&&s.a!==0}else s=!1
else s=!1
if(s){s=r.k4
if(s!=null)s.X(0)}r.Or(a,b)},
hu(a){return this.cn(a,!1)},
oX(){this.k3=this.c3(t.k.a(A.x.prototype.gY.call(this)))},
bA(){},
bS(a,b){var s=this
if(s.k3.B(0,b))if(s.cL(a,b)||s.ja(b)){a.C(0,new A.nI(b,s))
return!0}return!1},
ja(a){return!1},
cL(a,b){return!1},
dc(a,b){var s,r=a.e
r.toString
s=t.Ch.a(r).a
b.aB(0,s.a,s.b)},
kH(a){var s,r,q,p,o,n=this.bv(0,null)
if(n.hk(n)===0)return B.j
s=new A.fr(new Float64Array(3))
s.fj(0,0,1)
r=new A.fr(new Float64Array(3))
r.fj(0,0,0)
q=n.il(r)
r=new A.fr(new Float64Array(3))
r.fj(0,0,1)
p=n.il(r).aa(0,q)
r=new A.fr(new Float64Array(3))
r.fj(a.a,a.b,0)
o=n.il(r)
r=o.aa(0,p.Bl(s.Iq(o)/s.Iq(p))).a
return new A.t(r[0],r[1])},
ghA(){var s=this.k3
return new A.C(0,0,0+s.a,0+s.b)},
i9(a,b){this.Oq(a,b)}}
A.a2M.prototype={
$0(){return this.a.c3(this.b)},
$S:215}
A.a2L.prototype={
$0(){return this.a.ez(this.b)},
$S:216}
A.cG.prototype={
a1a(a){var s,r,q,p=this.av$
for(s=A.m(this).h("cG.1?");p!=null;){r=s.a(p.e)
q=p.jx(a)
if(q!=null)return q+r.a.b
p=r.am$}return null},
Ic(a){var s,r,q,p,o=this.av$
for(s=A.m(this).h("cG.1"),r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.jx(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.am$}return r},
y6(a,b){var s,r,q={},p=q.a=this.cW$
for(s=A.m(this).h("cG.1");p!=null;p=r){p=p.e
p.toString
s.a(p)
if(a.nD(new A.a2K(q,b,p),p.a,b))return!0
r=p.bR$
q.a=r}return!1},
o_(a,b){var s,r,q,p,o,n=this.av$
for(s=A.m(this).h("cG.1"),r=b.a,q=b.b;n!=null;){p=n.e
p.toString
s.a(p)
o=p.a
a.eL(n,new A.t(o.a+r,o.b+q))
n=p.am$}}}
A.a2K.prototype={
$2(a,b){return this.a.a.bS(a,b)},
$S:17}
A.xx.prototype={
ag(a){this.uK(0)}}
A.f9.prototype={
i(a){return this.pJ(0)+"; id="+A.h(this.e)}}
A.a0I.prototype={
dA(a,b){var s,r=this.b.j(0,a)
r.cn(b,!0)
s=r.k3
s.toString
return s},
dS(a,b){var s=this.b.j(0,a).e
s.toString
t.DU.a(s).a=b},
Rz(a,b){var s,r,q,p,o,n,m=this,l=m.b
try{m.b=A.y(t.K,t.x)
for(r=t.DU,q=b;q!=null;q=n){p=q.e
p.toString
s=r.a(p)
p=m.b
p.toString
o=s.e
o.toString
p.l(0,o,q)
n=s.am$}m.tI(a)}finally{m.b=l}},
i(a){return"MultiChildLayoutDelegate"}}
A.IN.prototype={
ei(a){if(!(a.e instanceof A.f9))a.e=new A.f9(null,null,B.j)},
sy9(a){var s=this,r=s.M
if(r===a)return
if(A.B(a)!==A.B(r)||a.mJ(r))s.a6()
s.M=a
s.b!=null},
ap(a){this.Pt(a)},
ag(a){this.Pu(0)},
c3(a){return a.bq(new A.a_(A.F(1/0,a.a,a.b),A.F(1/0,a.c,a.d)))},
bA(){var s=this,r=t.k.a(A.x.prototype.gY.call(s))
r=r.bq(new A.a_(A.F(1/0,r.a,r.b),A.F(1/0,r.c,r.d)))
s.k3=r
s.M.Rz(r,s.av$)},
aF(a,b){this.o_(a,b)},
cL(a,b){return this.y6(a,b)}}
A.yA.prototype={
ap(a){var s,r,q
this.em(a)
s=this.av$
for(r=t.DU;s!=null;){s.ap(a)
q=s.e
q.toString
s=r.a(q).am$}},
ag(a){var s,r,q
this.dE(0)
s=this.av$
for(r=t.DU;s!=null;){s.ag(0)
q=s.e
q.toString
s=r.a(q).am$}}}
A.Pb.prototype={}
A.D1.prototype={
S(a,b){var s=this.a
return s==null?null:s.S(0,b)},
H(a,b){var s=this.a
return s==null?null:s.H(0,b)},
gBo(){return null},
BC(a){return this.hN(a)},
t9(a){return null},
i(a){var s=A.bK(this),r=this.a
r=r==null?null:r.i(0)
if(r==null)r=""
return"<optimized out>#"+s+"("+r+")"}}
A.IO.prototype={
stH(a){var s=this.A
if(s==a)return
this.A=a
this.DK(a,s)},
sJ1(a){var s=this.P
if(s==a)return
this.P=a
this.DK(a,s)},
DK(a,b){var s=this,r=a==null
if(r)s.ao()
else if(b==null||A.B(a)!==A.B(b)||a.hN(b))s.ao()
if(s.b!=null){if(b!=null)b.H(0,s.gdQ())
if(!r)a.S(0,s.gdQ())}if(r){if(s.b!=null)s.aY()}else if(b==null||A.B(a)!==A.B(b)||a.BC(b))s.aY()},
stM(a){if(this.aw.k(0,a))return
this.aw=a
this.a6()},
ap(a){var s,r=this
r.mW(a)
s=r.A
if(s!=null)s.S(0,r.gdQ())
s=r.P
if(s!=null)s.S(0,r.gdQ())},
ag(a){var s=this,r=s.A
if(r!=null)r.H(0,s.gdQ())
r=s.P
if(r!=null)r.H(0,s.gdQ())
s.kV(0)},
cL(a,b){var s=this.P
if(s!=null){s=s.t9(b)
s=s===!0}else s=!1
if(s)return!0
return this.pM(a,b)},
ja(a){var s=this.A
if(s!=null){s=s.t9(a)
s=s!==!1}else s=!1
return s},
bA(){this.uP()
this.aY()},
nT(a){return a.bq(this.aw)},
Fj(a,b,c){var s
A.b4("debugPreviousCanvasSaveCount")
a.cs(0)
if(!b.k(0,B.j))a.aB(0,b.a,b.b)
s=this.k3
s.toString
c.aF(a,s)
a.co(0)},
aF(a,b){var s,r,q=this
if(q.A!=null){s=a.gbB(a)
r=q.A
r.toString
q.Fj(s,b,r)
q.G7(a)}q.h2(a,b)
if(q.P!=null){s=a.gbB(a)
r=q.P
r.toString
q.Fj(s,b,r)
q.G7(a)}},
G7(a){},
eC(a){var s,r=this
r.h1(a)
r.bJ=null
s=r.P
r.dL=s==null?null:s.gBo()
a.a=!1},
nK(a,b,c){var s,r,q,p,o=this
o.fI=A.alZ(o.fI,B.rG)
o.i8=A.alZ(o.i8,B.rG)
s=o.fI
r=s!=null&&!s.gR(s)
s=o.i8
q=s!=null&&!s.gR(s)
s=A.a([],t.V)
if(r){p=o.fI
p.toString
B.b.K(s,p)}B.b.K(s,c)
if(q){p=o.i8
p.toString
B.b.K(s,p)}o.Cp(a,b,s)},
lA(){this.uM()
this.i8=this.fI=null}}
A.UZ.prototype={}
A.IR.prototype={
QH(a){var s,r,q,p,o=this
try{r=o.M
if(r!==""){q=$.apE()
s=$.ao().xZ(q)
s.A7($.apF())
s.qX(r)
r=s.b3()
o.t!==$&&A.ew()
o.t=r}else{o.t!==$&&A.ew()
o.t=null}}catch(p){}},
gjE(){return!0},
ja(a){return!0},
c3(a){return a.bq(B.V2)},
aF(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
try{p=a.gbB(a)
o=i.k3
n=b.a
m=b.b
l=o.a
o=o.b
k=$.ao().bd()
k.sae(0,$.apD())
p.cd(new A.C(n,m,n+l,m+o),k)
p=i.t
p===$&&A.b()
if(p!=null){s=i.k3.a
r=0
q=0
if(s>328){s-=128
r+=64}p.hu(new A.kh(s))
if(i.k3.b>96+p.gbK(p)+12)q+=96
a.gbB(a).k9(p,b.U(0,new A.t(r,q)))}}catch(j){}}}
A.tB.prototype={
F(){return"FlexFit."+this.b}}
A.dl.prototype={
i(a){return this.pJ(0)+"; flex="+A.h(this.e)+"; fit="+A.h(this.f)}}
A.um.prototype={
F(){return"MainAxisSize."+this.b}}
A.m2.prototype={
F(){return"MainAxisAlignment."+this.b}}
A.jM.prototype={
F(){return"CrossAxisAlignment."+this.b}}
A.p0.prototype={
ei(a){if(!(a.e instanceof A.dl))a.e=new A.dl(null,null,B.j)},
ez(a){if(this.M===B.ap)return this.Ic(a)
return this.a1a(a)},
q_(a){switch(this.M.a){case 0:return a.b
case 1:return a.a}},
q0(a){switch(this.M.a){case 0:return a.a
case 1:return a.b}},
c3(a){var s
if(this.ar===B.nl)return B.S
s=this.Dy(a,A.ag2())
switch(this.M.a){case 0:return a.bq(new A.a_(s.a,s.b))
case 1:return a.bq(new A.a_(s.b,s.a))}},
Dy(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.M===B.ap?a2.b:a2.d,a0=a<1/0,a1=c.av$
for(s=t.uc,r=a2.b,q=a2.d,p=b,o=0,n=0,m=0;a1!=null;){l=a1.e
l.toString
s.a(l)
k=l.e
if(k==null)k=0
if(k>0){o+=k
p=a1}else{if(c.ar===B.nk)switch(c.M.a){case 0:j=A.nH(q,b)
break
case 1:j=A.nH(b,r)
break
default:j=b}else switch(c.M.a){case 0:j=new A.aO(0,1/0,0,q)
break
case 1:j=new A.aO(0,r,0,1/0)
break
default:j=b}i=a3.$2(a1,j)
m+=c.q0(i)
n=Math.max(n,A.kZ(c.q_(i)))}a1=l.am$}h=Math.max(0,(a0?a:0)-m)
if(o>0){g=a0?h/o:0/0
a1=c.av$
for(f=0;a1!=null;){l=a1.e
l.toString
k=s.a(l).e
if(k==null)k=0
if(k>0){if(a0)e=a1===p?h-f:g*k
else e=1/0
d=A.b4("minChildExtent")
l=a1.e
l.toString
l=s.a(l).f
switch((l==null?B.nz:l).a){case 0:if(d.b!==d)A.X(A.a_H(d.a))
d.b=e
break
case 1:if(d.b!==d)A.X(A.a_H(d.a))
d.b=0
break}if(c.ar===B.nk)switch(c.M.a){case 0:l=d.b
if(l===d)A.X(A.fU(d.a))
j=new A.aO(l,e,q,q)
break
case 1:l=d.b
if(l===d)A.X(A.fU(d.a))
j=new A.aO(r,r,l,e)
break
default:j=b}else switch(c.M.a){case 0:l=d.b
if(l===d)A.X(A.fU(d.a))
j=new A.aO(l,e,0,q)
break
case 1:l=d.b
if(l===d)A.X(A.fU(d.a))
j=new A.aO(0,r,l,e)
break
default:j=b}i=a3.$2(a1,j)
m+=c.q0(i)
f+=e
n=Math.max(n,A.kZ(c.q_(i)))}l=a1.e
l.toString
a1=s.a(l).am$}}return new A.abx(a0&&c.I===B.y?a:m,n,m)},
bA(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.k.a(A.x.prototype.gY.call(a)),a1=a.Dy(a0,A.ag3()),a2=a1.a,a3=a1.b
if(a.ar===B.nl){s=a.av$
for(r=t.uc,q=0,p=0,o=0;s!=null;){n=a.by
n.toString
m=s.u9(n,!0)
if(m!=null){q=Math.max(q,m)
p=Math.max(m,p)
o=Math.max(s.k3.b-m,o)
a3=Math.max(p+o,a3)}n=s.e
n.toString
s=r.a(n).am$}}else q=0
switch(a.M.a){case 0:r=a.k3=a0.bq(new A.a_(a2,a3))
a2=r.a
a3=r.b
break
case 1:r=a.k3=a0.bq(new A.a_(a3,a2))
a2=r.b
a3=r.a
break}l=a2-a1.c
a.c7=Math.max(0,-l)
k=Math.max(0,l)
j=A.b4("leadingSpace")
i=A.b4("betweenSpace")
r=A.aoa(a.M,a.ai,a.aW)
h=r===!1
switch(a.t.a){case 0:j.sc_(0)
i.sc_(0)
break
case 1:j.sc_(k)
i.sc_(0)
break
case 2:j.sc_(k/2)
i.sc_(0)
break
case 3:j.sc_(0)
r=a.df$
i.sc_(r>1?k/(r-1):0)
break
case 4:r=a.df$
i.sc_(r>0?k/r:0)
j.sc_(i.aC()/2)
break
case 5:r=a.df$
i.sc_(r>0?k/(r+1):0)
j.sc_(i.aC())
break}g=h?a2-j.aC():j.aC()
s=a.av$
for(r=t.uc,n=a3/2,f=i.a;s!=null;){e=s.e
e.toString
r.a(e)
d=a.ar
switch(d.a){case 0:case 1:if(A.aoa(A.aAJ(a.M),a.ai,a.aW)===(d===B.aK))c=0
else{d=s.k3
d.toString
c=a3-a.q_(d)}break
case 2:d=s.k3
d.toString
c=n-a.q_(d)/2
break
case 3:c=0
break
case 4:if(a.M===B.ap){d=a.by
d.toString
m=s.u9(d,!0)
c=m!=null?q-m:0}else c=0
break
default:c=null}if(h){d=s.k3
d.toString
g-=a.q0(d)}switch(a.M.a){case 0:e.a=new A.t(g,c)
break
case 1:e.a=new A.t(c,g)
break}if(h){d=i.b
if(d===i)A.X(A.fU(f))
g-=d}else{d=s.k3
d.toString
d=a.q0(d)
b=i.b
if(b===i)A.X(A.fU(f))
g+=d+b}s=e.am$}},
cL(a,b){return this.y6(a,b)},
aF(a,b){var s,r,q,p=this
if(!(p.c7>1e-10)){p.o_(a,b)
return}s=p.k3
if(s.gR(s))return
s=p.c8
r=p.cx
r===$&&A.b()
q=p.k3
s.saR(0,a.kv(r,b,new A.C(0,0,0+q.a,0+q.b),p.ga1b(),p.cf,s.a))},
m(){this.c8.saR(0,null)
this.Pv()},
iQ(a){var s
switch(this.cf.a){case 0:return null
case 1:case 2:case 3:if(this.c7>1e-10){s=this.k3
s=new A.C(0,0,0+s.a,0+s.b)}else s=null
return s}},
bW(){var s=this.Ov()
return s}}
A.abx.prototype={}
A.Pc.prototype={
ap(a){var s,r,q
this.em(a)
s=this.av$
for(r=t.uc;s!=null;){s.ap(a)
q=s.e
q.toString
s=r.a(q).am$}},
ag(a){var s,r,q
this.dE(0)
s=this.av$
for(r=t.uc;s!=null;){s.ag(0)
q=s.e
q.toString
s=r.a(q).am$}}}
A.Pd.prototype={}
A.yB.prototype={
m(){var s,r,q
for(s=this.IN$,r=s.length,q=0;q<r;++q)s[q].m()
this.hR()},
eM(){this.Ou()}}
A.IU.prototype={
VE(){var s=this
if(s.M!=null)return
s.M=s.ea
s.t=!1},
EW(){this.t=this.M=null
this.ao()},
sf6(a,b){var s=this,r=s.I
if(b==r)return
if(b!=null&&r!=null&&b.JJ(r)){b.m()
return}r=s.I
if(r!=null)r.m()
s.I=b
s.ao()
if(s.ai==null||s.aW==null)s.a6()},
sbh(a,b){if(b==this.ai)return
this.ai=b
this.a6()},
sbK(a,b){if(b==this.aW)return
this.aW=b
this.a6()},
sMc(a,b){if(b===this.by)return
this.by=b
this.a6()},
Zl(){this.c7=null},
sae(a,b){return},
smj(a,b){return},
sm0(a){if(a===this.bH)return
this.bH=a
this.ao()},
sa04(a){return},
syI(a){if(a==this.e9)return
this.e9=a
this.ao()},
se4(a){if(a.k(0,this.ea))return
this.ea=a
this.EW()},
sa5a(a,b){if(b===this.dv)return
this.dv=b
this.ao()},
sa_H(a){return},
sz4(a){if(a===this.eD)return
this.eD=a
this.ao()},
sa3Z(a){return},
sbD(a){if(this.eE==a)return
this.eE=a
this.EW()},
sz5(a){return},
Gf(a){var s,r,q=this,p=q.ai
a=A.nH(q.aW,p).oh(a)
p=q.I
if(p==null)return new A.a_(A.F(0,a.a,a.b),A.F(0,a.c,a.d))
p=p.gbh(p)
s=q.by
r=q.I
return a.nU(new A.a_(p/s,r.gbK(r)/q.by))},
ja(a){return!0},
c3(a){return this.Gf(a)},
bA(){this.k3=this.Gf(t.k.a(A.x.prototype.gY.call(this)))},
ap(a){this.em(a)},
ag(a){this.dE(0)},
aF(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(d.I==null)return
d.VE()
s=a.gbB(a)
r=d.k3
q=b.a
p=b.b
o=r.a
r=r.b
n=d.I
n.toString
m=d.ar
l=d.by
k=d.c7
j=d.e9
i=d.M
i.toString
h=d.j4
g=d.dv
f=d.t
f.toString
e=d.eD
A.ap3(i,s,h,k,m,d.bH,j,f,n,e,!1,1,new A.C(q,p,q+o,p+r),g,l)},
m(){var s=this.I
if(s!=null)s.m()
this.I=null
this.hR()}}
A.ra.prototype={
i(a){return"AnnotationEntry(annotation: "+this.a.i(0)+", localPosition: "+this.b.i(0)+")"}}
A.Au.prototype={}
A.ua.prototype={
hS(){},
qP(a){var s,r=this
r.e+=a
s=t.ow
if(s.a(A.J.prototype.gaJ.call(r,r))!=null)s.a(A.J.prototype.gaJ.call(r,r)).qP(a)},
nb(a){var s,r,q
for(s=this.d,s=A.aA(s.gb_(s),!0,t.M),r=s.length,q=0;q<r;++q)s[q].$0()},
m(){var s=this.z
if(s!=null)s.m()
this.z=null},
dP(){if(this.y)return
this.y=!0},
si4(a){var s,r=this,q=r.z
if(q!=null)q.m()
r.z=a
q=t.ow
if(q.a(A.J.prototype.gaJ.call(r,r))!=null){q.a(A.J.prototype.gaJ.call(r,r)).toString
s=!0}else s=!1
if(s)q.a(A.J.prototype.gaJ.call(r,r)).dP()},
u1(){this.y=this.y||!1},
iT(a){var s
this.dP()
s=a.e
if(s!==0)this.qP(-s)
this.uA(a)},
mn(a){var s,r,q=this,p=t.ow.a(A.J.prototype.gaJ.call(q,q))
if(p!=null){s=q.as
r=q.Q
if(s==null)p.CW=r
else s.Q=r
r=q.Q
if(r==null)p.cx=s
else r.as=s
q.Q=q.as=null
p.iT(q)
q.w.saR(0,null)}},
eF(a,b,c){return!1},
IT(a,b,c){var s=A.a([],c.h("w<ra<0>>"))
this.eF(new A.Au(s,c.h("Au<0>")),b,!0,c)
return s.length===0?null:B.b.gJ(s).a},
R4(a){var s,r=this
if(!r.y&&r.z!=null){s=r.z
s.toString
a.a_3(s)
return}r.hd(a)
r.y=!1},
bW(){var s=this.Ng()
return s+(this.b==null?" DETACHED":"")}}
A.Fe.prototype={
saR(a,b){var s=this.a
if(b==null?s==null:b===s)return
if(s!=null)if(--s.x===0)s.m()
this.a=b
if(b!=null)++b.x},
i(a){var s=this.a
return"LayerHandle("+(s!=null?J.dH(s):"DISPOSED")+")"}}
A.If.prototype={
sKt(a){var s
this.dP()
s=this.cx
if(s!=null)s.m()
this.cx=a},
m(){this.sKt(null)
this.C8()},
hd(a){var s=this.cx
s.toString
a.a_1(B.j,s,this.cy,this.db)},
eF(a,b,c){return!1}}
A.I8.prototype={
hd(a){a.a_0(this.cx,this.CW)
a.MA(this.cy)
a.Mt(!1)
a.Ms(!1)},
eF(a,b,c){return!1}}
A.eB.prototype={
nb(a){var s
this.NH(a)
if(!a)return
s=this.CW
for(;s!=null;){s.nb(!0)
s=s.Q}},
a_z(a){var s=this
s.u1()
s.hd(a)
if(s.e>0)s.nb(!0)
s.y=!1
return a.b3()},
m(){this.Ai()
this.d.X(0)
this.C8()},
u1(){var s,r=this
r.NI()
s=r.CW
for(;s!=null;){s.u1()
r.y=r.y||s.y
s=s.Q}},
eF(a,b,c,d){var s,r,q
for(s=this.cx,r=a.a;s!=null;s=s.as){if(s.eF(a,b,!0,d))return!0
q=r.length
if(q!==0)return!1}return!1},
ap(a){var s
this.uz(a)
s=this.CW
for(;s!=null;){s.ap(a)
s=s.Q}},
ag(a){var s
this.dE(0)
s=this.CW
for(;s!=null;){s.ag(0)
s=s.Q}this.nb(!1)},
hf(a,b){var s,r=this
r.dP()
s=b.e
if(s!==0)r.qP(s)
r.BQ(b)
s=b.as=r.cx
if(s!=null)s.Q=b
r.cx=b
if(r.CW==null)r.CW=b
b.w.saR(0,b)},
Ai(){var s,r,q,p=this,o=p.CW
for(s=t.ow;o!=null;o=r){r=o.Q
o.Q=o.as=null
p.dP()
q=o.e
if(q!==0){q=-q
p.e+=q
if(s.a(A.J.prototype.gaJ.call(p,p))!=null)s.a(A.J.prototype.gaJ.call(p,p)).qP(q)}p.uA(o)
o.w.saR(0,null)}p.cx=p.CW=null},
hd(a){this.jV(a)},
jV(a){var s=this.CW
for(;s!=null;){s.R4(a)
s=s.Q}}}
A.hL.prototype={
sii(a,b){if(!b.k(0,this.p1))this.dP()
this.p1=b},
eF(a,b,c,d){return this.mR(a,b.aa(0,this.p1),!0,d)},
hd(a){var s=this,r=s.p1
s.si4(a.KD(r.a,r.b,t.cV.a(s.z)))
s.jV(a)
a.hC()}}
A.nQ.prototype={
eF(a,b,c,d){if(!this.p1.B(0,b))return!1
return this.mR(a,b,!0,d)},
hd(a){var s=this,r=s.p1
r.toString
s.si4(a.a4H(r,s.p2,t.CW.a(s.z)))
s.jV(a)
a.hC()}}
A.rE.prototype={
eF(a,b,c,d){if(!this.p1.B(0,b))return!1
return this.mR(a,b,!0,d)},
hd(a){var s=this,r=s.p1
r.toString
s.si4(a.a4F(r,s.p2,t.cB.a(s.z)))
s.jV(a)
a.hC()}}
A.rD.prototype={
eF(a,b,c,d){if(!this.p1.B(0,b))return!1
return this.mR(a,b,!0,d)},
hd(a){var s=this,r=s.p1
r.toString
s.si4(a.a4E(r,s.p2,t.xS.a(s.z)))
s.jV(a)
a.hC()}}
A.kA.prototype={
sbk(a,b){var s=this
if(b.k(0,s.ad))return
s.ad=b
s.be=!0
s.dP()},
hd(a){var s,r,q=this
q.aV=q.ad
if(!q.p1.k(0,B.j)){s=q.p1
s=A.uG(s.a,s.b,0)
r=q.aV
r.toString
s.cA(0,r)
q.aV=s}q.si4(a.a4J(q.aV.a,t.Al.a(q.z)))
q.jV(a)
a.hC()},
Zd(a){var s,r=this
if(r.be){s=r.ad
s.toString
r.bj=A.Hc(A.ahU(s))
r.be=!1}s=r.bj
if(s==null)return null
return A.cp(s,a)},
eF(a,b,c,d){var s=this.Zd(b)
if(s==null)return!1
return this.O4(a,s,!0,d)}}
A.v9.prototype={
sHr(a,b){var s=this,r=s.ad
if(b!=r){if(b===255||r===255)s.si4(null)
s.ad=b
s.dP()}},
hd(a){var s,r,q,p=this
if(p.CW==null){p.si4(null)
return}s=p.ad
s.toString
r=p.p1
q=p.z
if(s<255)p.si4(a.a4I(s,r,t.i6.a(q)))
else p.si4(a.KD(r.a,r.b,t.cV.a(q)))
p.jV(a)
a.hC()}}
A.r9.prototype={
eF(a,b,c,d){var s,r,q,p=this,o=p.mR(a,b,!0,d),n=a.a
if(n.length!==0&&!0)return o
s=p.p2
if(s!=null){r=p.p3
q=r.a
r=r.b
s=!new A.C(q,r,q+s.a,r+s.b).B(0,b)}else s=!1
if(s)return o
if(A.aD(p.$ti.c)===A.aD(d)){o=o||!1
n.push(new A.ra(d.a(p.p1),b.aa(0,p.p3),d.h("ra<0>")))}return o}}
A.Nt.prototype={}
A.NY.prototype={
a5b(a){var s=this.a
this.a=a
return s},
i(a){var s="<optimized out>#",r=A.bK(this.b),q=this.a.a
return s+A.bK(this)+"("+("latestEvent: "+(s+r))+", "+("annotations: [list of "+q+"]")+")"}}
A.NZ.prototype={
gi0(a){var s=this.c
return s.gi0(s)}}
A.Hm.prototype={
EA(a){var s,r,q,p,o,n,m=t.mC,l=A.iQ(null,null,null,m,t.rA)
for(s=a.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q){p=s[q]
o=p.a
if(m.b(o)){n=p.b
n.toString
l.l(0,o,n)}}return l},
T_(a,b){var s=a.b,r=s.gbu(s)
s=a.b
if(!this.b.T(0,s.gi0(s)))return A.iQ(null,null,null,t.mC,t.rA)
return this.EA(b.$1(r))},
En(a){var s,r
A.auR(a)
s=a.b
r=A.m(s).h("b8<1>")
this.a.a26(a.gi0(a),a.d,A.oC(new A.b8(s,r),new A.a0E(),r.h("q.E"),t.oR))},
a5U(a,b){var s,r,q,p,o
if(a.gc9(a)!==B.c6)return
if(t.zs.b(a))return
s=t.yg.b(a)?A.akY():b.$0()
r=a.gi0(a)
q=this.b
p=q.j(0,r)
if(!A.auS(p,a))return
o=q.a
new A.a0H(this,p,a,r,s).$0()
if(o!==0!==(q.a!==0))this.aA()},
a5O(a){new A.a0F(this,a).$0()}}
A.a0E.prototype={
$1(a){return a.gIa(a)},
$S:217}
A.a0H.prototype={
$0(){var s=this
new A.a0G(s.a,s.b,s.c,s.d,s.e).$0()},
$S:0}
A.a0G.prototype={
$0(){var s,r,q,p,o,n=this,m=null,l=n.b
if(l==null){s=n.c
if(t.yg.b(s))return
n.a.b.l(0,n.d,new A.NY(A.iQ(m,m,m,t.mC,t.rA),s))}else{s=n.c
if(t.yg.b(s))n.a.b.v(0,s.gi0(s))}r=n.a
q=r.b.j(0,n.d)
if(q==null){l.toString
q=l}p=q.b
q.b=s
o=t.yg.b(s)?A.iQ(m,m,m,t.mC,t.rA):r.EA(n.e)
r.En(new A.NZ(q.a5b(o),o,p,s))},
$S:0}
A.a0F.prototype={
$0(){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.b,r=r.gb_(r),r=new A.e1(J.at(r.a),r.b),q=this.b,p=A.m(r).z[1];r.q();){o=r.a
if(o==null)o=p.a(o)
n=o.b
m=s.T_(o,q)
l=o.a
o.a=m
s.En(new A.NZ(l,m,n,null))}},
$S:0}
A.a0C.prototype={
$2(a,b){var s
if(!this.a.T(0,a))if(a.gAN()&&a.gzL(a)!=null){s=a.gzL(a)
s.toString
s.$1(this.b.aK(this.c.j(0,a)))}},
$S:218}
A.a0D.prototype={
$1(a){return!this.a.T(0,a)},
$S:219}
A.RA.prototype={}
A.cc.prototype={
ag(a){},
i(a){return"<none>"}}
A.kg.prototype={
eL(a,b){var s,r=this
if(a.gdw()){r.mQ()
if(!a.cy){s=a.ay
s===$&&A.b()
s=!s}else s=!0
if(s)A.alG(a,null,!0)
else if(a.db)A.ava(a)
s=a.ch.a
s.toString
t.cY.a(s)
s.sii(0,b)
r.xA(s)}else{s=a.ay
s===$&&A.b()
if(s){a.ch.saR(0,null)
a.wx(r,b)}else a.wx(r,b)}},
xA(a){a.mn(0)
this.a.hf(0,a)},
gbB(a){var s,r,q=this
if(q.e==null){q.c=A.ave(q.b)
s=$.ao()
r=s.a0S()
q.d=r
q.e=s.a0L(r,null)
r=q.c
r.toString
q.a.hf(0,r)}s=q.e
s.toString
return s},
mQ(){var s,r=this
if(r.e==null)return
s=r.c
s.toString
s.sKt(r.d.a1x())
r.e=r.d=r.c=null},
Bw(){var s=this.c
if(s!=null)if(!s.cy){s.cy=!0
s.dP()}},
p0(a,b,c,d){var s,r=this
if(a.CW!=null)a.Ai()
r.mQ()
r.xA(a)
s=r.a0N(a,d==null?r.b:d)
b.$2(s,c)
s.mQ()},
KC(a,b,c){return this.p0(a,b,c,null)},
a0N(a,b){return new A.kg(a,b)},
kv(a,b,c,d,e,f){var s,r,q=this
if(e===B.k){d.$2(q,b)
return null}s=c.d4(b)
if(a){if(f==null){r=new A.nQ(B.Q,A.y(t.S,t.M),A.ar())
r.hS()}else r=f
if(!s.k(0,r.p1)){r.p1=s
r.dP()}if(e!==r.p2){r.p2=e
r.dP()}q.p0(r,d,b,s)
return r}else{q.a_Y(s,e,s,new A.a1x(q,d,b))
return null}},
a4G(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.k){e.$2(p,b)
return null}s=c.d4(b)
r=d.d4(b)
if(a){if(g==null){q=new A.rE(B.n6,A.y(t.S,t.M),A.ar())
q.hS()}else q=g
if(!r.k(0,q.p1)){q.p1=r
q.dP()}if(f!==q.p2){q.p2=f
q.dP()}p.p0(q,e,b,s)
return q}else{p.a_W(r,f,s,new A.a1w(p,e,b))
return null}},
KB(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.k){e.$2(p,b)
return null}s=c.d4(b)
r=d.d4(b)
if(a){if(g==null){q=new A.rD(B.n6,A.y(t.S,t.M),A.ar())
q.hS()}else q=g
if(r!==q.p1){q.p1=r
q.dP()}if(f!==q.p2){q.p2=f
q.dP()}p.p0(q,e,b,s)
return q}else{p.a_V(r,f,s,new A.a1v(p,e,b))
return null}},
p5(a,b,c,d,e){var s,r=this,q=b.a,p=b.b,o=A.uG(q,p,0)
o.cA(0,c)
o.aB(0,-q,-p)
if(a){s=e==null?A.amF(null):e
s.sbk(0,o)
r.p0(s,d,b,A.alr(o,r.b))
return s}else{q=r.gbB(r)
q.cs(0)
q.ac(0,o.a)
d.$2(r,b)
r.gbB(r).co(0)
return null}},
a4K(a,b,c,d){return this.p5(a,b,c,d,null)},
A5(a,b,c,d){var s=d==null?A.alD():d
s.sHr(0,b)
s.sii(0,a)
this.KC(s,c,B.j)
return s},
i(a){return"PaintingContext#"+A.eN(this)+"(layer: "+this.a.i(0)+", canvas bounds: "+this.b.i(0)+")"}}
A.a1x.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.a1w.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.a1v.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.UN.prototype={}
A.a4Q.prototype={
m(){var s,r=this.b
if(r!=null)this.a.as.H(0,r)
r=this.a
if(--r.at===0){s=r.as
s.b.X(0)
s.c.X(0)
s.d.X(0)
s.dF()
r.as=null
r.d.$0()}}}
A.Ig.prototype={
mp(){this.a.$0()},
sa5p(a){var s=this.e
if(s===a)return
if(s!=null)s.ag(0)
this.e=a
a.ap(this)},
a1W(){var s,r,q,p,o,n,m,l,k,j,i,h=this
try{for(p=t.W,o=t.By;n=h.r,n.length!==0;){s=n
h.r=A.a([],o)
n=s
m=new A.a1J()
if(!!n.immutable$list)A.X(A.N("sort"))
l=n.length-1
if(l-0<=32)A.K3(n,0,l,m)
else A.K2(n,0,l,m)
for(r=0;r<J.bE(s);++r){if(h.f){h.f=!1
n=h.r
if(n.length!==0){m=s
l=r
k=J.bE(s)
A.d7(l,k,J.bE(m),null,null)
j=A.aS(m)
i=new A.eQ(m,l,k,j.h("eQ<1>"))
i.pO(m,l,k,j.c)
B.b.K(n,i)
break}}q=J.aM(s,r)
if(q.z){n=q
n=p.a(A.J.prototype.gbo.call(n))===h}else n=!1
if(n)q.VZ()}h.f=!1}}finally{h.f=!1}},
SI(a){try{a.$0()}finally{this.f=!0}},
a1V(){var s,r,q,p,o=this.y
B.b.dl(o,new A.a1I())
for(s=o.length,r=t.W,q=0;q<o.length;o.length===s||(0,A.Q)(o),++q){p=o[q]
if(p.CW&&r.a(A.J.prototype.gbo.call(p))===this)p.GO()}B.b.X(o)},
a1X(){var s,r,q,p,o,n,m,l,k
try{s=this.z
this.z=A.a([],t.By)
for(q=s,J.agR(q,new A.a1K()),p=q.length,o=t.W,n=t.cY,m=0;m<q.length;q.length===p||(0,A.Q)(q),++m){r=q[m]
if(r.cy||r.db){l=r
l=o.a(A.J.prototype.gbo.call(l))===this}else l=!1
if(l)if(r.ch.a.b!=null)if(r.cy)A.alG(r,null,!1)
else{l=r
k=l.ch.a
k.toString
l.pi(n.a(k))
l.db=!1}else r.YL()}}finally{}},
a1y(a){var s,r=this
if(++r.at===1){s=t.ju
r.as=new A.wi(r.c,A.b6(s),A.y(t.S,s),A.b6(s),$.br())
r.b.$0()}if(a!=null)r.as.S(0,a)
return new A.a4Q(r,a)},
IH(){return this.a1y(null)},
a1Y(){var s,r,q,p,o,n,m,l,k=this
if(k.as==null)return
try{q=k.ay
p=A.aA(q,!0,A.m(q).c)
B.b.dl(p,new A.a1L())
s=p
q.X(0)
for(q=s,o=q.length,n=t.W,m=0;m<q.length;q.length===o||(0,A.Q)(q),++m){r=q[m]
if(r.dy){l=r
l=n.a(A.J.prototype.gbo.call(l))===k}else l=!1
if(l)r.Zy()}k.as.Mq()}finally{}}}
A.a1J.prototype={
$2(a,b){return a.a-b.a},
$S:37}
A.a1I.prototype={
$2(a,b){return a.a-b.a},
$S:37}
A.a1K.prototype={
$2(a,b){return b.a-a.a},
$S:37}
A.a1L.prototype={
$2(a,b){return a.a-b.a},
$S:37}
A.x.prototype={
aE(){var s=this
s.cx=s.gdw()||s.glx()
s.ay=s.gdw()},
eM(){var s=this
s.a6()
s.ko()
s.ao()
s.aY()
s.aT(new A.a2Y())},
m(){this.ch.saR(0,null)},
ei(a){if(!(a.e instanceof A.cc))a.e=new A.cc()},
hX(a){var s=this
s.ei(a)
s.a6()
s.ko()
s.aY()
s.BQ(a)},
iT(a){var s=this
a.Dj()
a.e.ag(0)
a.e=null
s.uA(a)
s.a6()
s.ko()
s.aY()},
aT(a){},
qy(a,b,c){A.dK(new A.bx(b,c,"rendering library",A.bi("during "+a+"()"),new A.a2U(this),!1))},
ap(a){var s=this
s.uz(a)
if(s.z&&s.Q!=null){s.z=!1
s.a6()}if(s.CW){s.CW=!1
s.ko()}if(s.cy&&s.ch.a!=null){s.cy=!1
s.ao()}if(s.dy&&s.gwS().a){s.dy=!1
s.aY()}},
gY(){var s=this.at
if(s==null)throw A.c(A.a6("A RenderObject does not have any constraints before it has been laid out."))
return s},
a6(){var s,r=this
if(r.z)return
s=r.Q
if(s==null){r.z=!0
if(r.c!=null)r.tp()
return}if(s!==r)r.tp()
else{r.z=!0
s=t.W
if(s.a(A.J.prototype.gbo.call(r))!=null){s.a(A.J.prototype.gbo.call(r)).r.push(r)
s.a(A.J.prototype.gbo.call(r)).mp()}}},
tp(){this.z=!0
var s=this.c
s.toString
t.d.a(s)
if(!this.as)s.a6()},
Dj(){var s=this
if(s.Q!==s){s.Q=null
s.aT(A.ap0())}},
XD(){var s,r,q=this,p=q.Q
if(p===q)return
s=t.B2.a(q.c)
r=s==null?null:s.Q
if(r!=p){q.Q=r
q.aT(A.ap1())}},
VZ(){var s,r,q,p=this
try{p.bA()
p.aY()}catch(q){s=A.ag(q)
r=A.ay(q)
p.qy("performLayout",s,r)}p.z=!1
p.ao()},
cn(a,b){var s,r,q,p,o,n,m,l=this
if(!b||l.gjE()||a.gJQ()||!(l.c instanceof A.x))o=l
else{n=l.c
n.toString
n=t.d.a(n).Q
n.toString
o=n}if(!l.z&&a.k(0,l.at)){if(o!==l.Q){l.Q=o
l.aT(A.ap1())}return}l.at=a
n=l.Q
if(n!=null&&o!==n)l.aT(A.ap0())
l.Q=o
if(l.gjE())try{l.oX()}catch(m){s=A.ag(m)
r=A.ay(m)
l.qy("performResize",s,r)}try{l.bA()
l.aY()}catch(m){q=A.ag(m)
p=A.ay(m)
l.qy("performLayout",q,p)}l.z=!1
l.ao()},
gjE(){return!1},
JH(a,b){var s=this
s.as=!0
try{t.W.a(A.J.prototype.gbo.call(s)).SI(new A.a2X(s,a,b))}finally{s.as=!1}},
gdw(){return!1},
glx(){return!1},
pi(a){return a==null?A.av5(B.j):a},
ko(){var s,r,q,p=this
if(p.CW)return
s=p.CW=!0
r=p.c
if(r instanceof A.x){if(r.CW)return
q=p.ay
q===$&&A.b()
if((q?!p.gdw():s)&&!r.gdw()){r.ko()
return}}s=t.W
if(s.a(A.J.prototype.gbo.call(p))!=null)s.a(A.J.prototype.gbo.call(p)).y.push(p)},
GO(){var s,r,q=this
if(!q.CW)return
s=q.cx
s===$&&A.b()
q.cx=!1
q.aT(new A.a2V(q))
if(q.gdw()||q.glx())q.cx=!0
if(!q.gdw()){r=q.ay
r===$&&A.b()}else r=!1
if(r){q.db=q.cy=!1
s=t.W.a(A.J.prototype.gbo.call(q))
if(s!=null)B.b.v(s.z,q)
q.CW=!1
q.ao()}else if(s!==q.cx){q.CW=!1
q.ao()}else q.CW=!1},
ao(){var s,r=this
if(r.cy)return
r.cy=!0
if(r.gdw()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=t.W
if(s.a(A.J.prototype.gbo.call(r))!=null){s.a(A.J.prototype.gbo.call(r)).z.push(r)
s.a(A.J.prototype.gbo.call(r)).mp()}}else{s=r.c
if(s instanceof A.x)s.ao()
else{s=t.W
if(s.a(A.J.prototype.gbo.call(r))!=null)s.a(A.J.prototype.gbo.call(r)).mp()}}},
a3X(){var s,r=this
if(r.db||r.cy)return
r.db=!0
if(r.gdw()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=t.W
if(s.a(A.J.prototype.gbo.call(r))!=null){s.a(A.J.prototype.gbo.call(r)).z.push(r)
s.a(A.J.prototype.gbo.call(r)).mp()}}else r.ao()},
YL(){var s,r=this.c
for(;r instanceof A.x;){if(r.gdw()){s=r.ch.a
if(s==null)break
if(s.b!=null)break
r.cy=!0}r=r.c}},
wx(a,b){var s,r,q,p=this
if(p.z)return
p.db=p.cy=!1
p.ay=p.gdw()
try{p.aF(a,b)}catch(q){s=A.ag(q)
r=A.ay(q)
p.qy("paint",s,r)}},
aF(a,b){},
dc(a,b){},
kt(a){return!0},
bv(a,b){var s,r,q,p,o,n,m,l,k=b==null
if(k){s=t.W.a(A.J.prototype.gbo.call(this)).e
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
r[m].dc(r[l],n)}return n},
iQ(a){return null},
yb(a){return null},
eC(a){},
um(a){var s
if(t.W.a(A.J.prototype.gbo.call(this)).as==null)return
s=this.fr
if(s!=null&&!s.as)s.Mp(a)
else{s=this.c
if(s!=null)t.d.a(s).um(a)}},
gwS(){var s,r=this
if(r.dx==null){s=A.pg()
r.dx=s
r.eC(s)}s=r.dx
s.toString
return s},
lA(){this.dy=!0
this.fr=null
this.aT(new A.a2W())},
aY(){var s,r,q,p,o,n,m=this
if(m.b==null||t.W.a(A.J.prototype.gbo.call(m)).as==null){m.dx=null
return}if(m.fr!=null){s=m.dx
s=s==null?null:s.a
r=s===!0}else r=!1
m.dx=null
q=m.gwS().a&&r
s=t.d
p=m
while(!0){if(!(!q&&p.c instanceof A.x))break
if(p!==m&&p.dy)break
p.dy=!0
o=p.c
o.toString
s.a(o)
if(o.dx==null){n=A.pg()
o.dx=n
o.eC(n)}q=o.dx.a
if(q&&o.fr==null)return
p=o}if(p!==m&&m.fr!=null&&m.dy)t.W.a(A.J.prototype.gbo.call(m)).ay.v(0,m)
if(!p.dy){p.dy=!0
s=t.W
if(s.a(A.J.prototype.gbo.call(m))!=null){s.a(A.J.prototype.gbo.call(m)).ay.C(0,p)
s.a(A.J.prototype.gbo.call(m)).mp()}}},
Zy(){var s,r,q,p,o,n,m=this,l=null
if(m.z)return
s=m.fr
if(s==null)s=l
else{s=t.aa.a(A.J.prototype.gaJ.call(s,s))
if(s==null)s=l
else s=s.at||s.as}r=t.sP.a(m.Eg(s===!0))
q=A.a([],t.V)
s=m.fr
p=s==null
o=p?l:s.x
n=p?l:s.y
s=p?l:s.z
r.nS(s==null?0:s,n,o,q)
B.b.gb5(q)},
Eg(a){var s,r,q,p,o,n,m,l,k=this,j={},i=k.gwS()
j.a=i.c
s=!i.d&&!i.a
r=t.yj
q=A.a([],r)
p=A.b6(t.sP)
k.fe(new A.a2T(j,k,a||i.p2,q,p,i,s))
for(o=A.jk(p,p.r),n=A.m(o).c;o.q();){m=o.d;(m==null?n.a(m):m).zj()}k.dy=!1
if(!(k.c instanceof A.x)){o=j.a
l=new A.Px(A.a([],r),A.a([k],t.By),o)}else{o=j.a
if(s)l=new A.a9J(A.a([],r),o)
else{l=new A.Qm(a,i,A.a([],r),A.a([k],t.By),o)
if(i.a)l.x=!0}}l.K(0,q)
return l},
fe(a){this.aT(a)},
nK(a,b,c){a.jv(0,t.d1.a(c),b)},
i9(a,b){},
bW(){var s=A.bK(this)
return"<optimized out>#"+s},
i(a){return this.bW()},
ej(a,b,c,d){var s=this.c
if(s instanceof A.x)s.ej(a,b==null?this:b,c,d)},
mL(){return this.ej(B.aL,null,B.t,null)},
kL(a,b){return this.ej(B.aL,a,B.t,b)},
$ial:1}
A.a2Y.prototype={
$1(a){a.eM()},
$S:28}
A.a2U.prototype={
$0(){var s=A.a([],t.F),r=this.a
s.push(A.ahb("The following RenderObject was being processed when the exception was fired",B.Fv,r))
s.push(A.ahb("RenderObject",B.Fw,r))
return s},
$S:16}
A.a2X.prototype={
$0(){this.b.$1(this.c.a(this.a.gY()))},
$S:0}
A.a2V.prototype={
$1(a){var s
a.GO()
s=a.cx
s===$&&A.b()
if(s)this.a.cx=!0},
$S:28}
A.a2W.prototype={
$1(a){a.lA()},
$S:28}
A.a2T.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a.Eg(f.c)
if(e.a){B.b.X(f.d)
f.e.X(0)
if(!f.f.a)f.a.a=!0}for(s=e.gJy(),r=s.length,q=f.d,p=f.e,o=f.f,n=f.b,m=f.r,l=0;l<s.length;s.length===r||(0,A.Q)(s),++l){k=s[l]
q.push(k)
k.b.push(n)
k.a_9(o.ad)
if(o.b||!(n.c instanceof A.x)){k.zj()
continue}if(k.gk_()==null||m)continue
if(!o.JK(k.gk_()))p.C(0,k)
j=q.length-1
for(i=0;i<j;++i){h=q[i]
g=k.gk_()
g.toString
if(!g.JK(h.gk_())){p.C(0,k)
p.C(0,h)}}}},
$S:28}
A.aB.prototype={
saO(a){var s=this,r=s.t$
if(r!=null)s.iT(r)
s.t$=a
if(a!=null)s.hX(a)},
jp(){var s=this.t$
if(s!=null)this.Af(s)},
aT(a){var s=this.t$
if(s!=null)a.$1(s)}}
A.dZ.prototype={$icc:1}
A.au.prototype={
grd(){return this.df$},
EI(a,b){var s,r,q,p=this,o=a.e
o.toString
s=A.m(p).h("au.1")
s.a(o);++p.df$
if(b==null){o=o.am$=p.av$
if(o!=null){o=o.e
o.toString
s.a(o).bR$=a}p.av$=a
if(p.cW$==null)p.cW$=a}else{r=b.e
r.toString
s.a(r)
q=r.am$
if(q==null){o.bR$=b
p.cW$=r.am$=a}else{o.am$=q
o.bR$=b
o=q.e
o.toString
s.a(o).bR$=r.am$=a}}},
z2(a,b,c){this.hX(b)
this.EI(b,c)},
K(a,b){},
FB(a){var s,r,q,p,o=this,n=a.e
n.toString
s=A.m(o).h("au.1")
s.a(n)
r=n.bR$
q=n.am$
if(r==null)o.av$=q
else{p=r.e
p.toString
s.a(p).am$=q}q=n.am$
if(q==null)o.cW$=r
else{q=q.e
q.toString
s.a(q).bR$=r}n.am$=n.bR$=null;--o.df$},
v(a,b){this.FB(b)
this.iT(b)},
tt(a,b){var s=this,r=a.e
r.toString
if(A.m(s).h("au.1").a(r).bR$==b)return
s.FB(a)
s.EI(a,b)
s.a6()},
jp(){var s,r,q,p=this.av$
for(s=A.m(this).h("au.1");p!=null;){r=p.a
q=this.a
if(r<=q){p.a=q+1
p.jp()}r=p.e
r.toString
p=s.a(r).am$}},
aT(a){var s,r,q=this.av$
for(s=A.m(this).h("au.1");q!=null;){a.$1(q)
r=q.e
r.toString
q=s.a(r).am$}},
ga1R(a){return this.av$},
a_O(a){var s=a.e
s.toString
return A.m(this).h("au.1").a(s).bR$},
a_M(a){var s=a.e
s.toString
return A.m(this).h("au.1").a(s).am$}}
A.IE.prototype={
uS(){this.a6()}}
A.adl.prototype={}
A.a9J.prototype={
K(a,b){B.b.K(this.b,b)},
gJy(){return this.b}}
A.na.prototype={
gJy(){return A.a([this],t.yj)},
a_9(a){var s
if(a==null||a.a===0)return
s=this.c;(s==null?this.c=A.b6(t.xJ):s).K(0,a)}}
A.Px.prototype={
nS(a,b,c,d){var s,r,q,p,o,n=this.b,m=B.b.gJ(n)
if(m.fr==null){s=B.b.gJ(n).gmK()
r=B.b.gJ(n)
r=t.W.a(A.J.prototype.gbo.call(r)).as
r.toString
q=$.agE()
q=new A.bV(null,0,s,B.a_,q.p2,q.e,q.p3,q.f,q.aV,q.p4,q.R8,q.RG,q.rx,q.ry,q.to,q.x2,q.xr,q.y1)
q.ap(r)
m.fr=q}m=B.b.gJ(n).fr
m.toString
m.saM(0,B.b.gJ(n).gjC())
p=A.a([],t.V)
for(n=this.e,s=n.length,o=0;o<n.length;n.length===s||(0,A.Q)(n),++o)n[o].nS(0,b,c,p)
m.jv(0,p,null)
d.push(m)},
gk_(){return null},
zj(){},
K(a,b){B.b.K(this.e,b)}}
A.Qm.prototype={
nS(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(!h.x){s=h.b
B.b.gJ(s).fr=null
for(r=h.w,q=r.length,p=A.an(s),o=p.c,p=p.h("eQ<1>"),n=0;n<r.length;r.length===q||(0,A.Q)(r),++n){m=r[n]
l=new A.eQ(s,1,g,p)
l.pO(s,1,g,o)
B.b.K(m.b,l)
m.nS(a+h.f.x2,b,c,d)}return}s=h.b
if(s.length>1){k=new A.adm()
k.S5(c,b,s)}else k=g
r=h.e
q=!r
if(q){if(k==null)p=g
else{p=k.d
p===$&&A.b()
if(!p.gR(p)){p=k.c
p===$&&A.b()
p=p.JU()}else p=!0}p=p===!0}else p=!1
if(p)return
p=B.b.gJ(s)
if(p.fr==null)p.fr=A.a4S(g,B.b.gJ(s).gmK())
j=B.b.gJ(s).fr
j.sJN(r)
j.dx=h.c
j.z=a
if(a!==0){h.DV()
r=h.f
r.si3(0,r.x2+a)}if(k!=null){r=k.d
r===$&&A.b()
j.saM(0,r)
r=k.c
r===$&&A.b()
j.sbk(0,r)
j.x=k.b
j.y=k.a
if(q&&k.e){h.DV()
h.f.b6(B.lv,!0)}}i=A.a([],t.V)
for(r=h.w,q=r.length,n=0;n<r.length;r.length===q||(0,A.Q)(r),++n){m=r[n]
p=j.x
m.nS(0,j.y,p,i)}r=h.f
if(r.a)B.b.gJ(s).nK(j,h.f,i)
else j.jv(0,i,r)
d.push(j)},
gk_(){return this.x?null:this.f},
K(a,b){var s,r,q,p,o,n,m=this
for(s=b.length,r=m.w,q=0;q<b.length;b.length===s||(0,A.Q)(b),++q){p=b[q]
r.push(p)
if(p.gk_()==null)continue
if(!m.r){m.f=m.f.a0r()
m.r=!0}o=m.f
n=p.gk_()
n.toString
o.jU(n)}},
DV(){var s,r,q=this
if(!q.r){s=q.f
r=A.pg()
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
r.aV=s.aV
r.ad=s.ad
r.y2=s.y2
r.an=s.an
r.aq=s.aq
r.ak=s.ak
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
zj(){this.x=!0}}
A.adm.prototype={
S5(a,b,c){var s,r,q,p,o,n,m=this,l=new A.bd(new Float64Array(16))
l.d2()
m.c=l
m.b=a
m.a=b
for(s=c.length-1;s>0;){r=c[s];--s
q=c[s]
a=r.yb(q)
if(a!=null){m.b=a
m.a=A.an6(m.a,r.iQ(q))}else m.b=A.an6(m.b,r.iQ(q))
l=$.aqp()
l.d2()
A.axV(r,q,m.c,l)
m.b=A.an7(m.b,l)
m.a=A.an7(m.a,l)}p=B.b.gJ(c)
l=m.b
l=l==null?p.gjC():l.f7(p.gjC())
m.d=l
o=m.a
if(o!=null){n=o.f7(l)
if(n.gR(n)){l=m.d
l=!l.gR(l)}else l=!1
m.e=l
if(!l)m.d=n}}}
A.Pf.prototype={}
A.i4.prototype={
i(a){var s=A.a(["offset="+this.a.i(0)],t.s)
s.push(this.pJ(0))
return B.b.ba(s,"; ")}}
A.vI.prototype={
ei(a){if(!(a.e instanceof A.i4))a.e=new A.i4(null,null,B.j)},
stX(a,b){var s=this,r=s.M
switch(r.d.b2(0,b).a){case 0:case 1:return
case 2:r.stX(0,b)
s.I=s.t=null
s.vI(b)
s.ao()
s.aY()
break
case 3:r.stX(0,b)
s.I=s.t=s.bH=null
s.vI(b)
s.a6()
s.wE()
s.DO()
s.H3()
break}},
sp7(a){var s=this
if(a==s.ai)return
s.wE()
s.DO()
s.ai=a
s.H3()},
H3(){var s,r,q=this
if(q.ai==null)return
s=q.ar
if(s==null)s=q.ar=q.TD()
r=q.ai
B.b.Z(s,r.gft(r))},
wE(){var s,r=this.ai
if(r==null||this.ar==null)return
s=this.ar
s.toString
B.b.Z(s,r.gAh(r))},
TD(){var s,r,q,p,o=this.M.d.Le(!1),n=A.a([],t.sb)
for(s=o.length,r=0;r<s;){q=B.c.jc(o,$.apG(),r)
if(r!==q){if(q===-1)q=s
p=new A.jl(new A.eR(r,q),this,o,$.br())
p.w=p.Ef()
n.push(p)
r=q}++r}return n},
DO(){var s,r,q,p=this.ar
if(p==null)return
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.Q)(p),++r){q=p[r]
q.y2$=$.br()
q.y1$=0}this.ar=null},
a6(){var s=this.ar
if(s!=null)B.b.Z(s,new A.a32())
this.Om()},
m(){var s=this
s.wE()
s.ar=null
s.M.m()
s.hR()},
vI(a){this.aW=A.a([],t.e9)
a.aT(new A.a3_(this))},
sAr(a,b){var s=this.M
if(s.f===b)return
s.sAr(0,b)
this.ao()},
sbD(a){var s=this.M
if(s.r===a)return
s.sbD(a)
this.a6()},
sMM(a){if(this.by===a)return
this.by=a
this.a6()},
sa4r(a,b){var s,r=this
if(r.c7===b)return
r.c7=b
s=b===B.bl?"\u2026":null
r.M.sa1s(s)
r.a6()},
sAs(a){var s=this.M
if(s.w===a)return
s.sAs(a)
this.bH=null
this.a6()},
szm(a){var s=this.M
if(s.z==a)return
s.szm(a)
this.bH=null
this.a6()},
szh(a,b){var s=this.M
if(J.f(s.y,b))return
s.szh(0,b)
this.bH=null
this.a6()},
sMV(a){return},
sAt(a){var s=this.M
if(s.as===a)return
s.sAt(a)
this.bH=null
this.a6()},
sL8(a){return},
sMl(a){var s,r=this
if(J.f(r.cf,a))return
r.cf=a
s=r.ar
s=s==null?null:B.b.jW(s,new A.a34())
if(s===!0)r.ao()},
q3(a){var s,r=this,q=r.B4(a,B.a_)
r.iB(t.k.a(A.x.prototype.gY.call(r)))
s=r.M
s.Du(a,B.a_)
s=s.db
s===$&&A.b()
s=s.b
return q.U(0,new A.t(0,s==null?0:s))},
ez(a){this.iB(t.k.a(A.x.prototype.gY.call(this)))
return this.M.ez(B.I)},
ja(a){return!0},
cL(a,b){var s,r,q,p,o,n,m,l,k,j={},i=this.M,h=i.a.hH(b),g=i.d.M4(h)
if(g!=null&&!0){a.C(0,new A.hz(t.kZ.a(g),t.Cq))
s=!0}else s=!1
r=j.a=this.av$
q=A.m(this).h("au.1")
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
l.hJ(0,n,n,n)
if(a.xu(new A.a31(j,b,r),b,l))return!0
r=j.a.e
r.toString
k=q.a(r).am$
j.a=k;++o
r=k}return s},
ER(a,b){var s=this.by||this.c7===B.bl?a:1/0
this.M.ze(s,b)},
uS(){var s=this,r=$.bM,q=r.CW$
switch(q.a){case 0:case 4:if(s.fH)return
s.fH=!0
r.pA(new A.a35(s,q))
break
case 1:case 2:case 3:s.Cm()
s.M.a6()
break}},
iB(a){this.M.ut(this.e9)
this.ER(a.b,a.a)},
EP(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.df$
if(i===0)return A.a([],t.aE)
s=j.av$
r=A.b_(i,B.Tw,!1,t.cP)
q=new A.aO(0,a.b,0,1/0).cQ(0,j.M.w)
for(i=A.m(j).h("au.1"),p=!b,o=0;s!=null;){if(p){s.cn(q,!0)
n=s.k3
n.toString
m=j.aW
m===$&&A.b()
switch(m[o].ge4()){case B.lf:l=s.LN(j.aW[o].gr3())
break
case B.lg:case B.lh:case B.fy:case B.lj:case B.li:l=null
break
default:l=null}k=n}else{k=s.fU(q)
l=null}n=j.aW
n===$&&A.b()
r[o]=new A.mb(k,n[o].ge4(),l,j.aW[o].gr3())
n=s.e
n.toString
s=i.a(n).am$;++o}return r},
VY(a){return this.EP(a,!1)},
Yz(){var s,r,q=this.av$,p=t.lO,o=this.M,n=A.m(this).h("au.1"),m=0
while(!0){if(!(q!=null&&m<o.ax.length))break
s=q.e
s.toString
p.a(s)
r=o.ax[m]
s.a=new A.t(r.a,r.b)
s.e=o.ay[m]
q=n.a(s).am$;++m}},
RB(){var s,r,q=this.aW
q===$&&A.b()
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.Q)(q),++r)switch(q[r].ge4()){case B.lf:case B.lg:case B.lh:return!1
case B.li:case B.lj:case B.fy:continue}return!0},
c3(a){var s,r,q=this
if(!q.RB())return B.S
s=q.M
s.ut(q.EP(a,!0))
q.ER(a.b,a.a)
r=s.gbh(s)
s=s.a
return a.bq(new A.a_(r,Math.ceil(s.gbK(s))))},
bA(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=t.k.a(A.x.prototype.gY.call(i))
i.e9=i.VY(g)
i.iB(g)
i.Yz()
s=i.M
r=s.gbh(s)
q=s.a
q=Math.ceil(q.gbK(q))
p=s.a.ga1i()
o=i.k3=g.bq(new A.a_(r,q))
n=o.b<q||p
m=o.a<r
if(m||n)switch(i.c7.a){case 3:i.c8=!1
i.bH=null
break
case 0:case 2:i.c8=!0
i.bH=null
break
case 1:i.c8=!0
r=A.a8c(h,s.d.a,"\u2026")
q=s.r
q.toString
o=s.w
l=A.a8a(h,s.y,h,h,r,B.bG,q,h,o,B.aS)
l.a3J()
if(m){switch(s.r.a){case 0:k=l.gbh(l)
j=0
break
case 1:j=i.k3.a
k=j-l.gbh(l)
break
default:k=h
j=k}i.bH=A.ahs(new A.t(k,0),new A.t(j,0),A.a([B.l,B.n8],t.bk),h,B.cR,h)}else{j=i.k3.b
s=l.a
i.bH=A.ahs(new A.t(0,j-Math.ceil(s.gbK(s))/2),new A.t(0,j),A.a([B.l,B.n8],t.bk),h,B.cR,h)}l.m()
break}else{i.c8=!1
i.bH=null}},
aF(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e={}
f.iB(t.k.a(A.x.prototype.gY.call(f)))
if(f.c8){s=f.k3
r=b.a
q=b.b
p=new A.C(r,q,r+s.a,q+s.b)
if(f.bH!=null)a.gbB(a).Bh(p,$.ao().bd())
else a.gbB(a).cs(0)
a.gbB(a).jY(p)}s=f.M
s.aF(a.gbB(a),b)
r=e.a=f.av$
q=t.lO
o=b.a
n=b.b
m=A.m(f).h("au.1")
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
a.a4K(j,new A.t(o+r.a,n+r.b),A.uF(k,k,k),new A.a33(e))
k=e.a.e
k.toString
i=m.a(k).am$
e.a=i;++l
r=i}if(f.c8){if(f.bH!=null){a.gbB(a).aB(0,o,n)
h=$.ao().bd()
h.sa_t(B.CP)
h.sBA(f.bH)
s=a.gbB(a)
r=f.k3
s.cd(new A.C(0,0,0+r.a,0+r.b),h)}a.gbB(a).co(0)}s=f.ar
if(s!=null)for(r=s.length,g=0;g<s.length;s.length===r||(0,A.Q)(s),++g)s[g].aF(a,b)
f.Ot(a,b)},
B4(a,b){var s
this.iB(t.k.a(A.x.prototype.gY.call(this)))
s=this.M
s.Du(a,b)
s=s.db
s===$&&A.b()
return s.a},
AV(a){this.iB(t.k.a(A.x.prototype.gY.call(this)))
return this.M.a.u7(a.a,a.b,B.ml,B.hb)},
hH(a){this.iB(t.k.a(A.x.prototype.gY.call(this)))
return this.M.a.hH(a)},
mA(a){this.iB(t.k.a(A.x.prototype.gY.call(this)))
return this.M.a.mA(a)},
eC(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.h1(a)
s=d.M
r=s.d
r.toString
q=A.a([],t.lF)
r.a0f(q)
d.ea=q
if(B.b.jW(q,new A.a30()))a.a=a.b=!0
else{r=d.t
if(r==null){p=new A.bN("")
o=A.a([],t.ve)
for(r=d.ea,n=r.length,m=0,l=0,k="";l<r.length;r.length===n||(0,A.Q)(r),++l){j=r[l]
i=j.b
if(i==null)i=j.a
for(k=j.f,h=k.length,g=0;g<k.length;k.length===h||(0,A.Q)(k),++g){f=k[g]
e=f.a
o.push(f.HW(new A.eR(m+e.a,m+e.b)))}k=p.a+=i
m+=i.length}r=d.t=new A.cm(k.charCodeAt(0)==0?k:k,o)}a.p4=r
a.d=!0
s=s.r
s.toString
a.y1=s}},
nK(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=A.a([],t.V),b0=a7.M,b1=b0.r
b1.toString
s=A.iQ(a8,a8,a8,t.qI,t.ju)
r=a7.I
if(r==null){r=a7.ea
r.toString
r=a7.I=A.aAh(r)}for(q=r.length,p=t.k,o=b1,n=0,m=0,l=0;l<r.length;r.length===q||(0,A.Q)(r),++l,m=j){k=r[l]
b1=k.a
j=m+b1.length
i=m<j
h=i?m:j
i=i?j:m
g=p.a(A.x.prototype.gY.call(a7))
b0.ut(a7.e9)
f=g.b
f=a7.by||a7.c7===B.bl?f:1/0
b0.ze(f,g.a)
e=b0.a.u7(h,i,B.ml,B.hb)
if(e.length===0)continue
i=B.b.gJ(e)
d=new A.C(i.a,i.b,i.c,i.d)
c=B.b.gJ(e).e
for(i=A.an(e),h=new A.eQ(e,1,a8,i.h("eQ<1>")),h.pO(e,1,a8,i.c),h=new A.dn(h,h.gp(h)),i=A.m(h).c;h.q();){g=h.d
if(g==null)g=i.a(g)
d=d.om(new A.C(g.a,g.b,g.c,g.d))
c=g.e}i=d.a
h=Math.max(0,i)
g=d.b
f=Math.max(0,g)
i=Math.min(d.c-i,p.a(A.x.prototype.gY.call(a7)).b)
g=Math.min(d.d-g,p.a(A.x.prototype.gY.call(a7)).d)
b=Math.floor(h)-4
a=Math.floor(f)-4
i=Math.ceil(h+i)+4
g=Math.ceil(f+g)+4
a0=new A.C(b,a,i,g)
a1=A.pg()
a2=n+1
a1.id=new A.va(n,a8)
a1.d=!0
a1.y1=o
f=k.b
b1=f==null?b1:f
a1.p4=new A.cm(b1,k.f)
b1=b2.y
if(b1!=null){a3=b1.f7(a0)
if(a3.a>=a3.c||a3.b>=a3.d)b1=!(b>=i||a>=g)
else b1=!1
a1.b6(B.lv,b1)}a4=A.b4("newChild")
b1=a7.dv
i=b1==null?a8:b1.a!==0
if(i===!0){b1.toString
i=new A.b8(b1,A.m(b1).h("b8<1>"))
a5=i.ga8(i)
if(!a5.q())A.X(A.bQ())
b1=b1.v(0,a5.gG(a5))
b1.toString
if(a4.b!==a4)A.X(A.a_H(a4.a))
a4.b=b1}else{a6=new A.jc()
b1=A.a4S(a6,a7.Sk(a6))
if(a4.b!==a4)A.X(A.a_H(a4.a))
a4.b=b1}if(b1===a4)A.X(A.fU(a4.a))
J.arN(b1,a1)
if(!b1.w.k(0,a0)){b1.w=a0
b1.hW()}b1=a4.b
if(b1===a4)A.X(A.fU(a4.a))
i=b1.d
i.toString
s.l(0,i,b1)
b1=a4.b
if(b1===a4)A.X(A.fU(a4.a))
a9.push(b1)
n=a2
o=c}a7.dv=s
b2.jv(0,a9,b3)},
Sk(a){return new A.a2Z(this,a)},
lA(){this.uM()
this.dv=null}}
A.a32.prototype={
$1(a){return a.x=null},
$S:223}
A.a3_.prototype={
$1(a){return!0},
$S:43}
A.a34.prototype={
$1(a){var s=a.w
s===$&&A.b()
return s.c!==B.cN},
$S:224}
A.a31.prototype={
$2(a,b){return this.a.a.bS(a,b)},
$S:17}
A.a35.prototype={
$1(a){var s=this.a
s.fH=!1
if(s.b!=null){s.Cm()
s.M.a6()}},
$S:2}
A.a33.prototype={
$2(a,b){var s=this.a.a
s.toString
a.eL(s,b)},
$S:10}
A.a30.prototype={
$1(a){return!1},
$S:225}
A.a2Z.prototype={
$0(){var s=this.a,r=s.dv.j(0,this.b)
r.toString
s.kL(s,r.w)},
$S:0}
A.jl.prototype={
gn(a){var s=this.w
s===$&&A.b()
return s},
X9(){var s=this,r=s.Ef(),q=s.w
q===$&&A.b()
if(q.k(0,r))return
s.w=r
s.aA()},
Ef(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f==null||g.e==null)return B.U6
s=f.a
r=g.e.a
f=g.b
q=f.q3(new A.b2(s,B.C))
p=s===r?q:f.q3(new A.b2(r,B.C))
f=f.M
o=f.r
o.toString
n=s>r!==(B.W===o)
m=A.uG(g.gfo().a,g.gfo().b,0)
m.hk(m)
o=A.cp(m,q)
l=f.gtL()
k=n?B.C3:B.C2
j=A.cp(m,p)
f=f.gtL()
i=n?B.C2:B.C3
h=g.d.a===g.e.a?B.U8:B.lu
return new A.kr(new A.my(o,l,k),new A.my(j,f,i),h,!0)},
rC(a){var s=this,r=A.b4("result"),q=s.d,p=s.e,o=a.a
switch(o.a){case 0:case 1:r.sc_(s.Zx(t.ib.a(a).b,o===B.dN))
break
case 2:s.e=s.d=null
r.sc_(B.cM)
break
case 3:o=s.a
s.d=new A.b2(o.a,B.C)
s.e=new A.b2(o.b,B.N)
r.sc_(B.cM)
break
case 4:r.sc_(s.Vd(t.k2.a(a).gBd()))
break
case 5:t.uQ.a(a)
r.sc_(s.Ux(a.gJ3(a),a.gfK(),a.ga68()))
break
case 6:t.sQ.a(a)
r.sc_(s.U9(a.gyt(a),a.gfK(),a.gIj(a)))
break}if(!J.f(q,s.d)||!J.f(p,s.e)){s.b.ao()
s.X9()}return r.aC()},
Zx(a,b){var s,r,q,p,o,n,m=this
if(b)m.e=null
else m.d=null
s=m.b
r=s.bv(0,null)
r.hk(r)
q=A.cp(r,a)
p=m.gfo()
if(p.gR(p))return A.amd(m.gfo(),q)
p=m.gfo()
o=s.M.r
o.toString
n=m.pR(s.hH(A.awl(p,q,o)))
if(b)m.e=n
else m.d=n
s=n.a
p=m.a
if(s===p.b)return B.b7
if(s===p.a)return B.b8
return A.amd(m.gfo(),q)},
pR(a){var s,r=a.a,q=this.a,p=q.b
if(r<=p)s=r===p&&a.b===B.C
else s=!0
if(s)return new A.b2(p,B.N)
q=q.a
if(r<q)return new A.b2(q,B.C)
return a},
Vd(a){var s,r,q,p,o=this,n=o.b,m=n.hH(n.kH(a))
if(o.Xu(m))return B.as
s=n.mA(m)
r=A.b4("start")
q=A.b4("end")
n=m.a
p=s.b
if(n>=p)r.b=q.b=new A.b2(n,B.C)
else{r.b=new A.b2(s.a,B.C)
q.b=new A.b2(p,B.N)}o.d=r.aC()
o.e=q.aC()
return B.as},
U9(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.bv(0,null)
if(j.hk(j)===0)switch(c){case B.fC:case B.dP:return B.b8
case B.fD:case B.dO:return B.b7}s=A.cp(j,new A.t(a,0)).a
switch(c){case B.fC:case B.fD:if(b){k=l.e
k.toString
r=k}else{k=l.d
k.toString
r=k}q=l.Vz(r,!1,s)
p=q.a
o=q.b
break
case B.dO:case B.dP:n=l.e
if(n==null){n=new A.b2(l.a.b,B.N)
l.e=n
r=n}else r=n
n=l.d
if(n==null){l.d=r
m=r}else m=n
p=k.hH(new A.t(s,k.q3(b?r:m).b-k.M.gtL()/2))
o=B.as
break
default:p=null
o=null}if(b)l.e=p
else l.d=p
return o},
Ux(a,b,c){var s,r,q,p,o,n,m=this,l=m.e
if(l==null){l=m.a
l=a?new A.b2(l.a,B.C):new A.b2(l.b,B.N)
m.e=l
s=l}else s=l
l=m.d
if(l==null){m.d=s
r=s}else r=l
s=b?s:r
if(a&&s.a===m.a.b)return B.b7
l=!a
if(l&&s.a===m.a.a)return B.b8
switch(c){case B.VU:l=m.a
q=m.q2(new A.Us(B.c.a1(m.c,l.a,l.b)),s,a)
p=B.as
break
case B.VV:l=m.a
q=m.q2(new A.ME(new A.a8S(m),new A.a8Q(B.c.a1(m.c,l.a,l.b))),s,a)
p=B.as
break
case B.VW:q=m.q2(new A.a_K(m),s,a)
p=B.as
break
case B.VX:o=m.a
n=o.a
o=o.b
q=m.q2(new A.Vs(B.c.a1(m.c,n,o)),s,a)
if(a&&q.a===o)p=B.b7
else p=l&&q.a===n?B.b8:B.as
break
default:p=null
q=null}if(b)m.e=q
else m.d=q
return p},
q2(a,b,c){if(c)return this.pR(a.fW(B.TE.fW(b)))
return this.pR(a.fV(B.TD.fV(b)))},
Vz(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.M,i=j.fr
if(i==null)i=j.fr=j.a.a0e()
s=k.B4(a,B.a_)
j=i.length
r=j-1
for(q=s.b,p=0;p<i.length;i.length===j||(0,A.Q)(i),++p){o=i[p]
if(o.gr3()>q){r=J.aro(o)
break}}if(b&&r===i.length-1)n=new A.b2(l.a.b,B.N)
else if(!b&&r===0)n=new A.b2(l.a.a,B.C)
else n=l.pR(k.hH(new A.t(c,i[b?r+1:r-1].gr3())))
k=n.a
j=l.a
if(k===j.a)m=B.b8
else m=k===j.b?B.b7:B.as
return new A.b0(n,m,t.nz)},
Xu(a){var s,r,q,p,o=this
if(o.d==null||o.e==null)return!1
s=A.b4("currentStart")
r=A.b4("currentEnd")
q=o.d
q.toString
p=o.e
p.toString
if(A.aiB(q,p)>0){s.b=q
r.b=p}else{s.b=p
r.b=q}return A.aiB(s.aC(),a)>=0&&A.aiB(r.aC(),a)<=0},
bv(a,b){var s=A.uG(this.gfo().a,this.gfo().b,0)
s.cA(0,this.b.bv(0,b))
return s},
hD(a,b){if(this.b.b==null)return},
gfo(){var s,r,q,p,o,n,m=this,l=m.x
if(l==null){l=m.b
s=m.a
r=s.a
q=l.AV(A.a8b(B.C,r,s.b,!1))
if(q.length!==0){l=B.b.gJ(q)
p=new A.C(l.a,l.b,l.c,l.d)
for(o=1;o<q.length;++o){l=q[o]
p=p.om(new A.C(l.a,l.b,l.c,l.d))}m.x=p
l=p}else{n=l.q3(new A.b2(r,B.C))
l=A.ai_(n,new A.t(n.a+0,n.b+-l.M.gtL()))
m.x=l}}return l},
gcE(a){var s=this.gfo()
return new A.a_(s.c-s.a,s.d-s.b)},
aF(a,b){var s,r,q,p,o,n=this,m=n.d
if(m==null||n.e==null)return
s=n.b
if(s.cf!=null){r=A.a8b(B.C,m.a,n.e.a,!1)
q=$.ao().bd()
q.sct(0,B.aR)
m=s.cf
m.toString
q.sae(0,m)
for(m=s.AV(r),s=m.length,p=0;p<m.length;m.length===s||(0,A.Q)(m),++p){o=m[p]
a.gbB(a).cd(new A.C(o.a,o.b,o.c,o.d).d4(b),q)}}A.uG(n.gfo().a,n.gfo().b,0)},
B1(a){var s=this.b.M.a.LT(a),r=this.a,q=r.a
r=r.b
return A.a8b(B.C,B.f.hi(s.a,q,r),B.f.hi(s.b,q,r),!1)},
$iac:1}
A.yD.prototype={
ap(a){var s,r,q
this.em(a)
s=this.av$
for(r=t.lO;s!=null;){s.ap(a)
q=s.e
q.toString
s=r.a(q).am$}},
ag(a){var s,r,q
this.dE(0)
s=this.av$
for(r=t.lO;s!=null;){s.ag(0)
q=s.e
q.toString
s=r.a(q).am$}}}
A.Pg.prototype={}
A.Ph.prototype={
ap(a){this.Pw(a)
$.eK.yA$.a.C(0,this.gCz())},
ag(a){$.eK.yA$.a.v(0,this.gCz())
this.Px(0)}}
A.RM.prototype={}
A.RN.prototype={}
A.J1.prototype={
sa4q(a){if(a===this.M)return
this.M=a
this.ao()},
sa4O(a){if(a===this.t)return
this.t=a
this.ao()},
sa_K(a){return},
sa_J(a){return},
gjE(){return!0},
glx(){return!0},
gVS(){var s=this.M,r=(s|1)>>>0>0||(s|2)>>>0>0?80:0
return(s|4)>>>0>0||(s|8)>>>0>0?r+80:r},
c3(a){return a.bq(new A.a_(1/0,this.gVS()))},
aF(a,b){var s=b.a,r=b.b,q=this.k3
q=new A.I8(new A.C(s,r,s+q.a,r+q.b),this.M,this.t,!1,!1,A.y(t.S,t.M),A.ar())
q.hS()
a.mQ()
a.xA(q)}}
A.J6.prototype={}
A.eo.prototype={
ei(a){if(!(a.e instanceof A.cc))a.e=new A.cc()},
c3(a){var s=this.t$
if(s!=null)return s.fU(a)
return this.nT(a)},
bA(){var s=this,r=s.t$,q=t.k
if(r!=null){r.cn(q.a(A.x.prototype.gY.call(s)),!0)
r=s.t$.k3
r.toString
s.k3=r}else s.k3=s.nT(q.a(A.x.prototype.gY.call(s)))},
nT(a){return new A.a_(A.F(0,a.a,a.b),A.F(0,a.c,a.d))},
cL(a,b){var s=this.t$
s=s==null?null:s.bS(a,b)
return s===!0},
dc(a,b){},
aF(a,b){var s=this.t$
if(s!=null)a.eL(s,b)}}
A.og.prototype={
F(){return"HitTestBehavior."+this.b}}
A.vJ.prototype={
bS(a,b){var s,r=this
if(r.k3.B(0,b)){s=r.cL(a,b)||r.A===B.ay
if(s||r.A===B.d8)a.C(0,new A.nI(b,r))}else s=!1
return s},
ja(a){return this.A===B.ay}}
A.IM.prototype={
sHp(a){if(this.A.k(0,a))return
this.A=a
this.a6()},
bA(){var s=this,r=t.k.a(A.x.prototype.gY.call(s)),q=s.t$,p=s.A
if(q!=null){q.cn(p.oh(r),!0)
q=s.t$.k3
q.toString
s.k3=q}else s.k3=p.oh(r).bq(B.S)},
c3(a){var s=this.t$,r=this.A
if(s!=null)return s.fU(r.oh(a))
else return r.oh(a).bq(B.S)}}
A.IW.prototype={
sa43(a,b){if(this.A===b)return
this.A=b
this.a6()},
sa40(a,b){if(this.P===b)return
this.P=b
this.a6()},
ES(a){var s,r,q=a.a,p=a.b
p=p<1/0?p:A.F(this.A,q,p)
s=a.c
r=a.d
return new A.aO(q,p,s,r<1/0?r:A.F(this.P,s,r))},
Ft(a,b){var s=this.t$
if(s!=null)return a.bq(b.$2(s,this.ES(a)))
return this.ES(a).bq(B.S)},
c3(a){return this.Ft(a,A.ag2())},
bA(){this.k3=this.Ft(t.k.a(A.x.prototype.gY.call(this)),A.ag3())}}
A.II.prototype={
sa_m(a,b){if(this.A===b)return
this.A=b
this.a6()},
D2(a){var s,r,q,p,o=a.a,n=a.b
if(o>=n&&a.c>=a.d)return new A.a_(A.F(0,o,n),A.F(0,a.c,a.d))
s=this.A
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
r=p}return a.bq(new A.a_(o,r))},
c3(a){return this.D2(a)},
bA(){var s,r=this,q=r.D2(t.k.a(A.x.prototype.gY.call(r)))
r.k3=q
s=r.t$
if(s!=null)s.hu(A.rn(q))}}
A.J_.prototype={
glx(){return this.t$!=null&&this.A>0},
smj(a,b){var s,r,q,p,o=this
if(o.P===b)return
s=o.t$!=null
r=s&&o.A>0
q=o.A
o.P=b
p=B.d.b1(A.Su(b,0,1)*255)
o.A=p
if(r!==(s&&p>0))o.ko()
o.ao()
if(q!==0!==(o.A!==0)&&!0)o.aY()},
sr1(a){return},
kt(a){return this.A>0},
aF(a,b){var s,r,q=this
if(q.t$==null)return
s=q.A
if(s===0){q.ch.saR(0,null)
return}r=q.ch
r.saR(0,a.A5(b,s,A.eo.prototype.gks.call(q),t.Ex.a(r.a)))},
fe(a){var s,r=this.t$
if(r!=null)s=this.A!==0||!1
else s=!1
if(s){r.toString
a.$1(r)}}}
A.vE.prototype={
gdw(){if(this.t$!=null){var s=this.yE$
s.toString}else s=!1
return s},
pi(a){var s=a==null?A.alD():a
s.sHr(0,this.lS$)
return s},
smj(a,b){var s=this,r=s.lT$
if(r===b)return
if(s.b!=null&&r!=null)r.H(0,s.gqM())
s.lT$=b
if(s.b!=null)b.S(0,s.gqM())
s.xc()},
sr1(a){if(!1===this.yF$)return
this.yF$=!1
this.aY()},
xc(){var s,r=this,q=r.lS$,p=r.lT$
p=r.lS$=B.d.b1(A.Su(p.gn(p),0,1)*255)
if(q!==p){s=r.yE$
p=p>0
r.yE$=p
if(r.t$!=null&&s!==p)r.ko()
r.a3X()
if(q===0||r.lS$===0)r.aY()}},
kt(a){var s=this.lT$
return s.gn(s)>0},
fe(a){var s,r=this.t$
if(r!=null)if(this.lS$===0){s=this.yF$
s.toString}else s=!0
else s=!1
if(s){r.toString
a.$1(r)}}}
A.IH.prototype={}
A.rU.prototype={
S(a,b){return null},
H(a,b){return null},
i(a){return"CustomClipper"}}
A.mB.prototype={
AX(a){return this.b.fh(new A.C(0,0,0+a.a,0+a.b),this.c)},
BD(a){if(A.B(a)!==B.ZT)return!0
t.qm.a(a)
return!a.b.k(0,this.b)||a.c!=this.c}}
A.qw.prototype={
snR(a){var s,r=this,q=r.A
if(q==a)return
r.A=a
s=a==null
if(s||q==null||A.B(a)!==A.B(q)||a.BD(q))r.qg()
if(r.b!=null){if(q!=null)q.H(0,r.gqf())
if(!s)a.S(0,r.gqf())}},
ap(a){var s
this.mW(a)
s=this.A
if(s!=null)s.S(0,this.gqf())},
ag(a){var s=this.A
if(s!=null)s.H(0,this.gqf())
this.kV(0)},
qg(){this.P=null
this.ao()
this.aY()},
srf(a){if(a!==this.aw){this.aw=a
this.ao()}},
bA(){var s,r=this,q=r.k3
q=q!=null?q:null
r.uP()
s=r.k3
s.toString
if(!J.f(q,s))r.P=null},
iK(){var s,r,q=this
if(q.P==null){s=q.A
if(s==null)s=null
else{r=q.k3
r.toString
r=s.AX(r)
s=r}q.P=s==null?q.gpU():s}},
iQ(a){var s,r=this
switch(r.aw.a){case 0:return null
case 1:case 2:case 3:if(r.A==null)s=null
else{s=r.k3
s=new A.C(0,0,0+s.a,0+s.b)}if(s==null){s=r.k3
s=new A.C(0,0,0+s.a,0+s.b)}return s}},
m(){this.cg=null
this.hR()}}
A.IL.prototype={
gpU(){var s=this.k3
return new A.C(0,0,0+s.a,0+s.b)},
bS(a,b){var s=this
if(s.A!=null){s.iK()
if(!s.P.B(0,b))return!1}return s.iw(a,b)},
aF(a,b){var s,r,q=this,p=q.t$
if(p!=null){s=q.ch
if(q.aw!==B.k){q.iK()
p=q.cx
p===$&&A.b()
r=q.P
r.toString
s.saR(0,a.kv(p,b,r,A.eo.prototype.gks.call(q),q.aw,t.iM.a(s.a)))}else{a.eL(p,b)
s.saR(0,null)}}else q.ch.saR(0,null)}}
A.IK.prototype={
gpU(){var s=$.ao().ck(),r=this.k3
s.nC(new A.C(0,0,0+r.a,0+r.b))
return s},
bS(a,b){var s=this
if(s.A!=null){s.iK()
if(!s.P.B(0,b))return!1}return s.iw(a,b)},
aF(a,b){var s,r,q,p,o=this,n=o.t$
if(n!=null){s=o.ch
if(o.aw!==B.k){o.iK()
n=o.cx
n===$&&A.b()
r=o.k3
q=r.a
r=r.b
p=o.P
p.toString
s.saR(0,a.KB(n,b,new A.C(0,0,0+q,0+r),p,A.eo.prototype.gks.call(o),o.aw,t.n0.a(s.a)))}else{a.eL(n,b)
s.saR(0,null)}}else o.ch.saR(0,null)}}
A.yE.prototype={
si3(a,b){if(this.aU===b)return
this.aU=b
this.ao()},
sfY(a,b){if(this.bx.k(0,b))return
this.bx=b
this.ao()},
sae(a,b){if(this.dJ.k(0,b))return
this.dJ=b
this.ao()},
eC(a){this.h1(a)
a.si3(0,this.aU)}}
A.J2.prototype={
sd3(a,b){if(this.yC===b)return
this.yC=b
this.qg()},
sa_v(a,b){if(J.f(this.yD,b))return
this.yD=b
this.qg()},
gpU(){var s,r,q=this.k3,p=0+q.a
q=0+q.b
switch(this.yC.a){case 0:s=this.yD
if(s==null)s=B.aC
return s.dj(new A.C(0,0,p,q))
case 1:s=(p-0)/2
r=(q-0)/2
return new A.hU(0,0,p,q,s,r,s,r,s,r,s,r,s===r)}},
bS(a,b){var s=this
if(s.A!=null){s.iK()
if(!s.P.B(0,b))return!1}return s.iw(a,b)},
aF(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.t$==null){i.ch.saR(0,null)
return}i.iK()
s=i.P.d4(b)
r=$.ao()
q=r.ck()
q.ev(s)
p=a.gbB(a)
if(i.aU!==0&&!0){p.cd(new A.C(s.a,s.b,s.c,s.d).cZ(20),$.ajQ())
o=i.bx
n=i.aU
m=i.dJ
p.of(q,o,n,(m.gn(m)>>>24&255)!==255)}l=i.aw===B.hq
if(!l){r=r.bd()
r.sae(0,i.dJ)
p.cV(s,r)}r=i.cx
r===$&&A.b()
o=i.k3
n=o.a
o=o.b
m=i.P
m.toString
k=i.ch
j=t.bG.a(k.a)
k.saR(0,a.a4G(r,b,new A.C(0,0,0+n,0+o),m,new A.a36(i,l),i.aw,j))}}
A.a36.prototype={
$2(a,b){var s,r
if(this.b){s=a.gbB(a)
r=$.ao().bd()
r.sae(0,this.a.dJ)
s.oe(r)}this.a.h2(a,b)},
$S:10}
A.J3.prototype={
gpU(){var s=$.ao().ck(),r=this.k3
s.nC(new A.C(0,0,0+r.a,0+r.b))
return s},
bS(a,b){var s=this
if(s.A!=null){s.iK()
if(!s.P.B(0,b))return!1}return s.iw(a,b)},
aF(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(j.t$==null){j.ch.saR(0,null)
return}j.iK()
s=j.k3
r=b.a
q=b.b
p=s.a
s=s.b
o=j.P.d4(b)
n=a.gbB(a)
if(j.aU!==0&&!0){n.cd(new A.C(r,q,r+p,q+s).cZ(20),$.ajQ())
s=j.bx
r=j.aU
q=j.dJ
n.of(o,s,r,(q.gn(q)>>>24&255)!==255)}m=j.aw===B.hq
if(!m){s=$.ao().bd()
s.sae(0,j.dJ)
n.ds(o,s)}s=j.cx
s===$&&A.b()
r=j.k3
q=r.a
r=r.b
p=j.P
p.toString
l=j.ch
k=t.n0.a(l.a)
l.saR(0,a.KB(s,b,new A.C(0,0,0+q,0+r),p,new A.a37(j,m),j.aw,k))}}
A.a37.prototype={
$2(a,b){var s,r
if(this.b){s=a.gbB(a)
r=$.ao().bd()
r.sae(0,this.a.dJ)
s.oe(r)}this.a.h2(a,b)},
$S:10}
A.rZ.prototype={
F(){return"DecorationPosition."+this.b}}
A.IQ.prototype={
sa14(a){var s,r=this
if(a.k(0,r.P))return
s=r.A
if(s!=null)s.m()
r.A=null
r.P=a
r.ao()},
sbu(a,b){if(b===this.aw)return
this.aw=b
this.ao()},
sxS(a){if(a.k(0,this.bt))return
this.bt=a
this.ao()},
ag(a){var s=this,r=s.A
if(r!=null)r.m()
s.A=null
s.kV(0)
s.ao()},
ja(a){var s=this.P,r=this.k3
r.toString
return s.Jm(r,a,this.bt.d)},
aF(a,b){var s,r,q,p=this,o=p.A
if(o==null)o=p.A=p.P.rk(p.gdQ())
s=p.bt
r=p.k3
r.toString
q=new A.oj(s.a,s.b,s.c,s.d,r,s.f)
if(p.aw===B.hz){o.oW(a.gbB(a),b,q)
if(p.P.gz6())a.Bw()}p.h2(a,b)
if(p.aw===B.Fr){o=p.A
o.toString
o.oW(a.gbB(a),b,q)
if(p.P.gz6())a.Bw()}}}
A.Jc.prototype={
sKp(a,b){return},
se4(a){var s=this
if(J.f(s.P,a))return
s.P=a
s.ao()
s.aY()},
sbD(a){var s=this
if(s.aw==a)return
s.aw=a
s.ao()
s.aY()},
glx(){return!1},
sbk(a,b){var s,r=this
if(J.f(r.cg,b))return
s=new A.bd(new Float64Array(16))
s.bc(b)
r.cg=s
r.ao()
r.aY()},
sm0(a){return},
gvD(){var s,r,q=this,p=q.P,o=p==null?null:p.W(q.aw)
if(o==null)return q.cg
s=new A.bd(new Float64Array(16))
s.d2()
p=q.k3
p.toString
r=o.a_g(p)
s.aB(0,r.a,r.b)
p=q.cg
p.toString
s.cA(0,p)
s.aB(0,-r.a,-r.b)
return s},
bS(a,b){return this.cL(a,b)},
cL(a,b){var s=this.bt?this.gvD():null
return a.xu(new A.a3g(this),b,s)},
aF(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
if(a.t$!=null){s=a.gvD()
s.toString
r=A.a08(s)
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
if(b===0||!isFinite(b)){a.ch.saR(0,null)
return}q=a.cx
q===$&&A.b()
p=A.eo.prototype.gks.call(a)
o=a.ch
n=o.a
o.saR(0,a0.p5(q,a1,s,p,n instanceof A.kA?n:null))}else{a.h2(a0,a1.U(0,r))
a.ch.saR(0,null)}}},
dc(a,b){var s=this.gvD()
s.toString
b.cA(0,s)}}
A.a3g.prototype={
$2(a,b){return this.a.pM(a,b)},
$S:17}
A.vG.prototype={
XZ(){if(this.A!=null)return
this.A=this.aw},
E1(a){switch(a.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
syI(a){var s=this,r=s.P
if(r===a)return
s.P=a
if(s.E1(r)||s.E1(a))s.a6()
else{s.bJ=s.cg=null
s.ao()}},
se4(a){var s=this
if(s.aw.k(0,a))return
s.aw=a
s.A=s.bJ=s.cg=null
s.ao()},
sbD(a){var s=this
if(s.bt==a)return
s.bt=a
s.A=s.bJ=s.cg=null
s.ao()},
c3(a){var s,r=this.t$
if(r!=null){s=r.fU(B.bJ)
switch(this.P.a){case 6:return a.bq(new A.aO(0,a.b,0,a.d).nU(s))
case 1:case 2:case 0:case 4:case 3:case 5:return a.nU(s)}}else return new A.a_(A.F(0,a.a,a.b),A.F(0,a.c,a.d))},
bA(){var s,r,q,p=this,o=p.t$
if(o!=null){o.cn(B.bJ,!0)
switch(p.P.a){case 6:o=t.k
s=o.a(A.x.prototype.gY.call(p))
r=p.t$.k3
r.toString
q=new A.aO(0,s.b,0,s.d).nU(r)
p.k3=o.a(A.x.prototype.gY.call(p)).bq(q)
break
case 1:case 2:case 0:case 4:case 3:case 5:o=t.k.a(A.x.prototype.gY.call(p))
s=p.t$.k3
s.toString
p.k3=o.nU(s)
break}p.bJ=p.cg=null}else{o=t.k.a(A.x.prototype.gY.call(p))
p.k3=new A.a_(A.F(0,o.a,o.b),A.F(0,o.c,o.d))}},
xd(){var s,r,q,p,o,n,m,l,k,j=this
if(j.bJ!=null)return
if(j.t$==null){j.cg=!1
s=new A.bd(new Float64Array(16))
s.d2()
j.bJ=s}else{j.XZ()
s=j.t$.k3
s.toString
r=j.P
q=j.k3
q.toString
p=A.aog(r,s,q)
q=p.b
r=p.a
o=s.a
s=s.b
n=j.A.z0(r,new A.C(0,0,0+o,0+s))
m=j.A
m.toString
l=j.k3
k=m.z0(q,new A.C(0,0,0+l.a,0+l.b))
m=n.a
j.cg=n.c-m<o||n.d-n.b<s
s=A.uG(k.a,k.b,0)
s.hJ(0,q.a/r.a,q.b/r.b,1)
s.aB(0,-m,-n.b)
j.bJ=s}},
Fd(a,b){var s,r,q,p,o=this,n=o.bJ
n.toString
s=A.a08(n)
if(s==null){n=o.cx
n===$&&A.b()
r=o.bJ
r.toString
q=A.eo.prototype.gks.call(o)
p=o.ch.a
return a.p5(n,b,r,q,p instanceof A.kA?p:null)}else o.h2(a,b.U(0,s))
return null},
aF(a,b){var s,r,q,p,o,n=this
if(n.t$!=null){s=n.k3
if(!s.gR(s)){s=n.t$.k3
s=s.gR(s)}else s=!0}else s=!0
if(s)return
n.xd()
s=n.cg
s.toString
if(s&&n.dL!==B.k){s=n.cx
s===$&&A.b()
r=n.k3
q=r.a
r=r.b
p=n.ch
o=p.a
o=o instanceof A.nQ?o:null
p.saR(0,a.kv(s,b,new A.C(0,0,0+q,0+r),n.gX3(),n.dL,o))}else n.ch.saR(0,n.Fd(a,b))},
cL(a,b){var s=this,r=s.k3
if(!r.gR(r)){r=s.t$
if(r==null)r=null
else{r=r.k3
r=r.gR(r)}r=r===!0}else r=!0
if(r)return!1
s.xd()
return a.xu(new A.a2N(s),b,s.bJ)},
kt(a){var s=this.k3
if(!s.gR(s)){s=a.k3
s=!s.gR(s)}else s=!1
return s},
dc(a,b){var s=this.k3
if(!s.gR(s)){s=a.k3
s=!s.gR(s)}else s=!1
if(!s)b.Bz()
else{this.xd()
s=this.bJ
s.toString
b.cA(0,s)}}}
A.a2N.prototype={
$2(a,b){return this.a.pM(a,b)},
$S:17}
A.IT.prototype={
sa5L(a){var s=this
if(s.A.k(0,a))return
s.A=a
s.ao()
s.aY()},
bS(a,b){return this.cL(a,b)},
cL(a,b){var s,r,q=this
if(q.P){s=q.A
r=q.k3
r=new A.t(s.a*r.a,s.b*r.b)
s=r}else s=null
return a.nD(new A.a2O(q),s,b)},
aF(a,b){var s,r,q=this
if(q.t$!=null){s=q.A
r=q.k3
q.h2(a,new A.t(b.a+s.a*r.a,b.b+s.b*r.b))}},
dc(a,b){var s=this.A,r=this.k3
b.aB(0,s.a*r.a,s.b*r.b)}}
A.a2O.prototype={
$2(a,b){return this.a.pM(a,b)},
$S:17}
A.J4.prototype={
nT(a){return new A.a_(A.F(1/0,a.a,a.b),A.F(1/0,a.c,a.d))},
i9(a,b){var s,r=this,q=null
if(t.Y.b(a)){s=r.cJ
return s==null?q:s.$1(a)}if(t.c.b(a))return q
if(t.Cs.b(a)){s=r.aj
return s==null?q:s.$1(a)}if(t.hV.b(a))return q
if(t.AJ.b(a)){s=r.aU
return s==null?q:s.$1(a)}if(t.EL.b(a)){s=r.bx
return s==null?q:s.$1(a)}if(t.r.b(a))return q
if(t.zv.b(a))return q
if(t.zs.b(a)){s=r.am
return s==null?q:s.$1(a)}}}
A.IY.prototype={
bS(a,b){return this.Ox(a,b)&&!0},
i9(a,b){var s=this.aj
if(s!=null&&t.hV.b(a))return s.$1(a)},
gIa(a){return this.aU},
gAN(){return this.bx},
ap(a){this.mW(a)
this.bx=!0},
ag(a){this.bx=!1
this.kV(0)},
nT(a){return new A.a_(A.F(1/0,a.a,a.b),A.F(1/0,a.c,a.d))},
$iiU:1,
gzI(a){return this.bs},
gzL(a){return this.aX}}
A.J7.prototype={
gdw(){return!0}}
A.vH.prototype={
sJq(a){var s,r=this
if(a===r.A)return
r.A=a
s=r.P
if(s==null||!s)r.aY()},
syZ(a){var s=this,r=s.P
if(a==r)return
if(r==null)r=s.A
s.P=a
if(r!==(a==null?s.A:a))s.aY()},
bS(a,b){return!this.A&&this.iw(a,b)},
fe(a){var s,r=this.t$
if(r!=null){s=this.P
s=!(s==null?this.A:s)}else s=!1
if(s){r.toString
a.$1(r)}}}
A.IZ.prototype={
stw(a){var s=this
if(a===s.A)return
s.A=a
s.a6()
s.tp()},
ez(a){if(this.A)return null
return this.Cx(a)},
gjE(){return this.A},
c3(a){if(this.A)return new A.a_(A.F(0,a.a,a.b),A.F(0,a.c,a.d))
return this.Ow(a)},
oX(){this.On()},
bA(){var s,r=this
if(r.A){s=r.t$
if(s!=null)s.hu(t.k.a(A.x.prototype.gY.call(r)))}else r.uP()},
bS(a,b){return!this.A&&this.iw(a,b)},
kt(a){return!this.A},
aF(a,b){if(this.A)return
this.h2(a,b)},
fe(a){if(this.A)return
this.uN(a)}}
A.vD.prototype={
sHg(a){if(this.A===a)return
this.A=a
this.aY()},
syZ(a){return},
bS(a,b){return this.A?this.k3.B(0,b):this.iw(a,b)},
fe(a){var s,r,q=this.t$
if(q!=null){s=this.P
r=this.A
s=!r}else s=!1
if(s){q.toString
a.$1(q)}}}
A.j2.prototype={
sa5V(a){if(A.ajm(a,this.cJ))return
this.cJ=a
this.aY()},
sjk(a){var s,r=this
if(J.f(r.bs,a))return
s=r.bs
r.bs=a
if(a!=null!==(s!=null))r.aY()},
skr(a){var s,r=this
if(J.f(r.aj,a))return
s=r.aj
r.aj=a
if(a!=null!==(s!=null))r.aY()},
sa4i(a){var s,r=this
if(J.f(r.aX,a))return
s=r.aX
r.aX=a
if(a!=null!==(s!=null))r.aY()},
sa4o(a){var s,r=this
if(J.f(r.aU,a))return
s=r.aU
r.aU=a
if(a!=null!==(s!=null))r.aY()},
eC(a){var s,r=this
r.h1(a)
if(r.bs!=null){s=r.cJ
s=s==null||s.B(0,B.dQ)}else s=!1
if(s)a.sjk(r.bs)
if(r.aj!=null){s=r.cJ
s=s==null||s.B(0,B.Be)}else s=!1
if(s)a.skr(r.aj)
if(r.aX!=null){s=r.cJ
if(s==null||s.B(0,B.dU))a.stA(r.gXl())
s=r.cJ
if(s==null||s.B(0,B.dT))a.stz(r.gXj())}if(r.aU!=null){s=r.cJ
if(s==null||s.B(0,B.dR))a.stB(r.gXn())
s=r.cJ
if(s==null||s.B(0,B.dS))a.sty(r.gXh())}},
Xk(){var s,r,q=this.aX
if(q!=null){s=this.k3
r=s.a*-0.8
s=s.iO(B.j)
s=A.cp(this.bv(0,null),s)
q.$1(new A.hw(null,new A.t(r,0),r,s))}},
Xm(){var s,r,q=this.aX
if(q!=null){s=this.k3
r=s.a*0.8
s=s.iO(B.j)
s=A.cp(this.bv(0,null),s)
q.$1(new A.hw(null,new A.t(r,0),r,s))}},
Xo(){var s,r,q=this.aU
if(q!=null){s=this.k3
r=s.b*-0.8
s=s.iO(B.j)
s=A.cp(this.bv(0,null),s)
q.$1(new A.hw(null,new A.t(0,r),r,s))}},
Xi(){var s,r,q=this.aU
if(q!=null){s=this.k3
r=s.b*0.8
s=s.iO(B.j)
s=A.cp(this.bv(0,null),s)
q.$1(new A.hw(null,new A.t(0,r),r,s))}}}
A.vK.prototype={
sKz(a){var s=this
if(s.A===a)return
s.A=a
s.GK(a)
s.aY()},
sa0h(a){if(this.P===a)return
this.P=a
this.aY()},
sa1I(a){if(this.aw===a)return
this.aw=a
this.aY()},
sa1G(a){return},
GK(a){var s=this,r=a.fy
r=a.fx
r=r==null?null:new A.cm(r,B.ad)
s.cg=r
r=a.id
r=a.go
r=r==null?null:new A.cm(r,B.ad)
s.bJ=r
s.dL=null
s.fI=null
s.i8=null},
sbD(a){if(this.yG==a)return
this.yG=a
this.aY()},
fe(a){this.uN(a)},
eC(a){var s,r,q=this
q.h1(a)
a.a=q.P
a.b=q.aw
s=q.A.a
if(s!=null){a.b6(B.Bp,!0)
a.b6(B.Bh,s)}s=q.A.e
if(s!=null)a.b6(B.Bm,s)
s=q.A.f
if(s!=null)a.b6(B.Bq,s)
s=q.A.w
if(s!=null)a.b6(B.Bo,s)
s=q.A.as
if(s!=null)a.b6(B.Bk,s)
s=q.A.at
if(s!=null)a.b6(B.Bl,s)
s=q.A.db
if(s!=null)a.b6(B.Bi,s)
s=q.cg
if(s!=null){a.p4=s
a.d=!0}s=q.bJ
if(s!=null){a.R8=s
a.d=!0}s=q.dL
if(s!=null){a.RG=s
a.d=!0}s=q.fI
if(s!=null){a.rx=s
a.d=!0}s=q.i8
if(s!=null){a.ry=s
a.d=!0}s=q.A
r=s.p2
if(r!=null){a.to=r
a.d=!0}s.p3!=null
s=q.A.cx
if(s!=null)a.b6(B.Bj,s)
s=q.A.cy
if(s!=null)a.b6(B.Bn,s)
s=q.yG
if(s!=null){a.y1=s
a.d=!0}s=q.A
r=s.R8
if(r!=null){a.id=r
a.d=!0}s=s.RG
if(s!=null)a.Hm(s)
if(q.A.rx!=null)a.sjk(q.gXp())
if(q.A.ry!=null)a.skr(q.gXf())
if(q.A.t!=null)a.stx(q.gXd())},
Xq(){var s=this.A.rx
if(s!=null)s.$0()},
Xg(){var s=this.A.ry
if(s!=null)s.$0()},
Xe(){var s=this.A.t
if(s!=null)s.$0()}}
A.IJ.prototype={
sa_u(a){return},
eC(a){this.h1(a)
a.c=!0}}
A.IX.prototype={
eC(a){this.h1(a)
a.d=a.p2=a.a=!0}}
A.IS.prototype={
sa1H(a){if(a===this.A)return
this.A=a
this.aY()},
fe(a){if(this.A)return
this.uN(a)}}
A.IV.prototype={
sz_(a,b){if(b===this.A)return
this.A=b
this.aY()},
eC(a){this.h1(a)
a.k1=this.A
a.d=!0}}
A.vF.prototype={
sn(a,b){if(this.A.k(0,b))return
this.A=b
this.ao()},
sMK(a){return},
aF(a,b){var s,r=this,q=r.A,p=r.k3
p.toString
s=new A.r9(q,p,b,A.y(t.S,t.M),A.ar(),r.$ti.h("r9<1>"))
s.hS()
a.KC(s,A.eo.prototype.gks.call(r),b)},
glx(){return!0}}
A.P7.prototype={
ez(a){var s=this.t$
if(s!=null)return s.jx(a)
return this.Cx(a)}}
A.P8.prototype={
ap(a){var s=this
s.mW(a)
s.lT$.S(0,s.gqM())
s.xc()},
ag(a){this.lT$.H(0,this.gqM())
this.kV(0)},
aF(a,b){if(this.lS$===0)return
this.h2(a,b)}}
A.yF.prototype={
ap(a){var s
this.em(a)
s=this.t$
if(s!=null)s.ap(a)},
ag(a){var s
this.dE(0)
s=this.t$
if(s!=null)s.ag(0)}}
A.yG.prototype={
ez(a){var s=this.t$
if(s!=null)return s.jx(a)
return this.Cn(a)}}
A.j5.prototype={
F(){return"SelectionResult."+this.b}}
A.d8.prototype={$iac:1}
A.JH.prototype={
sp7(a){var s=this,r=s.lR$
if(a==r)return
if(a==null)s.H(0,s.gG1())
else if(r==null)s.S(0,s.gG1())
s.G0()
s.lR$=a
s.G2()},
G2(){var s=this
if(s.lR$==null){s.ke$=!1
return}if(s.ke$&&!s.gn(s).d){s.lR$.v(0,s)
s.ke$=!1}else if(!s.ke$&&s.gn(s).d){s.lR$.C(0,s)
s.ke$=!0}},
G0(){var s=this
if(s.ke$){s.lR$.v(0,s)
s.ke$=!1}}}
A.pe.prototype={
F(){return"SelectionEventType."+this.b}}
A.mK.prototype={
F(){return"TextGranularity."+this.b}}
A.a4C.prototype={}
A.rB.prototype={}
A.mw.prototype={}
A.mx.prototype={
F(){return"SelectionExtendDirection."+this.b}}
A.pf.prototype={
F(){return"SelectionStatus."+this.b}}
A.kr.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.T(b)!==A.B(s))return!1
return b instanceof A.kr&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&b.c===s.c&&b.d===s.d},
gu(a){var s=this
return A.V(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.my.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.T(b)!==A.B(s))return!1
return b instanceof A.my&&b.a.k(0,s.a)&&b.b===s.b&&b.c===s.c},
gu(a){return A.V(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.wY.prototype={
F(){return"TextSelectionHandleType."+this.b}}
A.J8.prototype={
ez(a){var s,r,q=this.t$
if(q!=null){s=q.jx(a)
r=q.e
r.toString
t.Ch.a(r)
if(s!=null)s+=r.a.b}else s=this.Cn(a)
return s},
aF(a,b){var s,r=this.t$
if(r!=null){s=r.e
s.toString
a.eL(r,t.Ch.a(s).a.U(0,b))}},
cL(a,b){var s,r=this.t$
if(r!=null){s=r.e
s.toString
t.Ch.a(s)
return a.nD(new A.a38(b,s,r),s.a,b)}return!1}}
A.a38.prototype={
$2(a,b){return this.c.bS(a,b)},
$S:17}
A.J0.prototype={
qC(){var s=this
if(s.A!=null)return
s.A=s.P.W(s.aw)},
sdh(a,b){var s=this
if(s.P.k(0,b))return
s.P=b
s.A=null
s.a6()},
sbD(a){var s=this
if(s.aw==a)return
s.aw=a
s.A=null
s.a6()},
c3(a){var s,r,q,p=this
p.qC()
if(p.t$==null){s=p.A
return a.bq(new A.a_(s.a+s.c,s.b+s.d))}s=p.A
s.toString
r=a.Id(s)
q=p.t$.fU(r)
s=p.A
return a.bq(new A.a_(s.a+q.a+s.c,s.b+q.b+s.d))},
bA(){var s,r,q,p,o,n,m=this,l=t.k.a(A.x.prototype.gY.call(m))
m.qC()
if(m.t$==null){s=m.A
m.k3=l.bq(new A.a_(s.a+s.c,s.b+s.d))
return}s=m.A
s.toString
r=l.Id(s)
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
m.k3=l.bq(new A.a_(o+s.a+p.c,n+s.b+p.d))}}
A.IG.prototype={
qC(){var s=this
if(s.A!=null)return
s.A=s.P.W(s.aw)},
se4(a){var s=this
if(s.P.k(0,a))return
s.P=a
s.A=null
s.a6()},
sbD(a){var s=this
if(s.aw==a)return
s.aw=a
s.A=null
s.a6()},
xv(){var s,r,q,p,o=this
o.qC()
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
r.a=q.lw(t.uu.a(p.aa(0,s)))}}
A.J5.prototype={
sa5Y(a){if(this.aj==a)return
this.aj=a
this.a6()},
sa2R(a){if(this.aX==a)return
this.aX=a
this.a6()},
c3(a){var s,r,q=this,p=q.aj!=null||a.b===1/0,o=q.aX!=null||a.d===1/0,n=q.t$
if(n!=null){s=n.fU(new A.aO(0,a.b,0,a.d))
if(p){n=q.aj
if(n==null)n=1
n=s.a*n}else n=1/0
if(o){r=q.aX
if(r==null)r=1
r=s.b*r}else r=1/0
return a.bq(new A.a_(n,r))}n=p?0:1/0
return a.bq(new A.a_(n,o?0:1/0))},
bA(){var s,r,q=this,p=t.k.a(A.x.prototype.gY.call(q)),o=q.aj!=null||p.b===1/0,n=q.aX!=null||p.d===1/0,m=q.t$
if(m!=null){m.cn(new A.aO(0,p.b,0,p.d),!0)
if(o){m=q.t$.k3.a
s=q.aj
m*=s==null?1:s}else m=1/0
if(n){s=q.t$.k3.b
r=q.aX
s*=r==null?1:r}else s=1/0
q.k3=p.bq(new A.a_(m,s))
q.xv()}else{m=o?0:1/0
q.k3=p.bq(new A.a_(m,n?0:1/0))}}}
A.a59.prototype={
ue(a){return new A.a_(A.F(1/0,a.a,a.b),A.F(1/0,a.c,a.d))}}
A.IP.prototype={
sy9(a){var s=this,r=s.A
if(r===a)return
if(A.B(a)!==A.B(r)||a.mJ(r))s.a6()
s.A=a
s.b!=null},
ap(a){this.Py(a)},
ag(a){this.Pz(0)},
c3(a){return a.bq(this.A.ue(a))},
bA(){var s,r,q,p,o,n,m=this,l=t.k,k=l.a(A.x.prototype.gY.call(m))
m.k3=k.bq(m.A.ue(k))
if(m.t$!=null){s=m.A.AY(l.a(A.x.prototype.gY.call(m)))
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
if(q&&s.c>=s.d)l=new A.a_(A.F(0,k,r),A.F(0,s.c,s.d))
else{l=l.k3
l.toString}p.a=o.B8(n,l)}}}
A.yH.prototype={
ap(a){var s
this.em(a)
s=this.t$
if(s!=null)s.ap(a)},
ag(a){var s
this.dE(0)
s=this.t$
if(s!=null)s.ag(0)}}
A.tO.prototype={
F(){return"GrowthDirection."+this.b}}
A.ku.prototype={
gJQ(){return!1},
a_l(a,b){var s=this.w
switch(A.bc(this.a).a){case 0:return new A.aO(b,a,s,s)
case 1:return new A.aO(s,s,b,a)}},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.ku))return!1
return b.a===s.a&&b.b===s.b&&b.d===s.d&&b.f===s.f&&b.r===s.r&&b.w===s.w&&b.x===s.x&&b.y===s.y&&b.Q===s.Q&&b.z===s.z},
gu(a){var s=this
return A.V(s.a,s.b,s.d,s.f,s.r,s.w,s.x,s.y,s.Q,s.z,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r=A.a([s.a.i(0),s.b.i(0),s.c.i(0),"scrollOffset: "+B.d.N(s.d,1),"remainingPaintExtent: "+B.d.N(s.r,1)],t.s),q=s.f
if(q!==0)r.push("overlap: "+B.d.N(q,1))
r.push("crossAxisExtent: "+B.d.N(s.w,1))
r.push("crossAxisDirection: "+s.x.i(0))
r.push("viewportMainAxisExtent: "+B.d.N(s.y,1))
r.push("remainingCacheExtent: "+B.d.N(s.Q,1))
r.push("cacheOrigin: "+B.d.N(s.z,1))
return"SliverConstraints("+B.b.ba(r,", ")+")"}}
A.a6T.prototype={
bW(){return"SliverGeometry"}}
A.pk.prototype={}
A.JY.prototype={
i(a){return A.B(this.a).i(0)+"@(mainAxis: "+A.h(this.c)+", crossAxis: "+A.h(this.d)+")"}}
A.wv.prototype={
i(a){var s=this.a
return"layoutOffset="+(s==null?"None":B.d.N(s,1))}}
A.kv.prototype={
i(a){return"paintOffset="+A.h(this.a)}}
A.j8.prototype={}
A.ci.prototype={
gY(){return t.p.a(A.x.prototype.gY.call(this))},
gjC(){return this.ghA()},
ghA(){var s=this,r=t.p
switch(A.bc(r.a(A.x.prototype.gY.call(s)).a).a){case 0:return new A.C(0,0,0+s.id.c,0+r.a(A.x.prototype.gY.call(s)).w)
case 1:return new A.C(0,0,0+r.a(A.x.prototype.gY.call(s)).w,0+s.id.c)}},
oX(){},
Jl(a,b,c){var s=this
if(c>=0&&c<s.id.r&&b>=0&&b<t.p.a(A.x.prototype.gY.call(s)).w)if(s.yY(a,b,c)||!1){a.C(0,new A.JY(c,b,s))
return!0}return!1},
yY(a,b,c){return!1},
hh(a,b,c){var s=a.d,r=a.r,q=s+r
return A.F(A.F(c,s,q)-A.F(b,s,q),0,r)},
nN(a,b,c){var s=a.d,r=s+a.z,q=a.Q,p=s+q
return A.F(A.F(c,r,p)-A.F(b,r,p),0,q)},
xP(a){return 0},
dc(a,b){},
i9(a,b){}}
A.a39.prototype={
Ed(a){var s
switch(a.a.a){case 0:case 3:s=!1
break
case 2:case 1:s=!0
break
default:s=null}switch(a.b.a){case 0:break
case 1:s=!s
break}return s},
a2Z(a,b,c,d){var s,r,q,p,o=this,n={},m=t.p,l=o.Ed(m.a(A.x.prototype.gY.call(o))),k=b.e
k.toString
k=t.D.a(k).a
k.toString
s=k-m.a(A.x.prototype.gY.call(o)).d
r=d-s
q=c-0
p=n.a=null
switch(A.bc(m.a(A.x.prototype.gY.call(o)).a).a){case 0:if(!l){m=b.k3.a
r=m-r
s=o.id.c-m-s}p=new A.t(s,0)
n.a=new A.t(r,q)
break
case 1:if(!l){m=b.k3.b
r=m-r
s=o.id.c-m-s}p=new A.t(0,s)
n.a=new A.t(q,r)
break}return a.a_b(new A.a3a(n,b),p)}}
A.a3a.prototype={
$1(a){return this.b.bS(a,this.a.a)},
$S:88}
A.Q1.prototype={}
A.Q4.prototype={
ag(a){this.uK(0)}}
A.J9.prototype={
spn(a){if(this.rM===a)return
this.rM=a
this.a6()}}
A.Ja.prototype={
LV(a,b){var s,r
if(b>0){s=a/b
r=B.d.b1(s)
if(Math.abs(s*b-r*b)<1e-10)return r
return B.d.cz(s)}return 0},
B2(a,b){var s,r
if(b>0){s=a/b-1
r=B.d.b1(s)
if(Math.abs(s*b-r*b)<1e-10)return Math.max(0,r)
return Math.max(0,B.d.dd(s))}return 0},
Rx(a){var s,r=this.av$,q=A.m(this).h("au.1"),p=t.D,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s<a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).am$}return o},
Ry(a){var s,r=this.cW$,q=A.m(this).h("au.1"),p=t.D,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s>a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).bR$}return o},
bA(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=t.p,a7=a6.a(A.x.prototype.gY.call(a4)),a8=a4.bj
a8.R8=!1
s=a6.a(A.x.prototype.gY.call(a4)).y*a4.rM
a6=a7.d
r=a6+a7.z
q=r+a7.Q
p=a7.a_l(s,s)
o=a4.LV(r,s)
n=isFinite(q)?a4.B2(q,s):a5
if(a4.av$!=null){m=a4.Rx(o)
a4.HM(m,n!=null?a4.Ry(n):0)}else a4.HM(0,0)
if(a4.av$==null)if(!a4.ZY(o,s*o)){l=o<=0?0:a8.grd()*s
a4.id=A.wu(a5,!1,a5,a5,l,0,0,l,a5)
a8.Ih()
return}k=a4.av$
k.toString
k=k.e
k.toString
j=t.D
k=j.a(k).b
k.toString
i=k-1
h=a5
for(;i>=o;--i){g=a4.a3c(p)
if(g==null){a4.id=A.wu(a5,!1,a5,a5,0,0,0,0,i*s)
return}k=g.e
k.toString
j.a(k).a=s*i
if(h==null)h=g}if(h==null){a4.av$.hu(p)
h=a4.av$
k=h.e
k.toString
j.a(k).a=s*o}k=h.e
k.toString
k=j.a(k).b
k.toString
i=k+1
k=A.m(a4).h("au.1")
f=n!=null
while(!0){if(!(!f||i<=n)){e=1/0
break}d=h.e
d.toString
g=k.a(d).am$
if(g!=null){d=g.e
d.toString
d=j.a(d).b
d.toString
d=d!==i}else d=!0
if(d){g=a4.a3b(p,h)
if(g==null){e=i*s
break}}else g.hu(p)
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
e=Math.min(e,a8.a1D(a7,o,k,b,a))
a0=a4.hh(a7,b,a)
a1=a4.nN(a7,b,a)
a2=a6+a7.r
a3=isFinite(a2)?a4.B2(a2,s):a5
a4.id=A.wu(a1,a3!=null&&k>=a3||a6>0,a5,a5,e,a0,0,e,a5)
if(e===a)a8.R8=!0
a8.Ih()}}
A.hE.prototype={$icc:1}
A.a3e.prototype={
ei(a){}}
A.h4.prototype={
i(a){var s=this.b,r=this.or$?"keepAlive; ":""
return"index="+A.h(s)+"; "+r+this.P5(0)}}
A.mp.prototype={
ei(a){if(!(a.e instanceof A.h4))a.e=new A.h4(!1,null,null)},
hX(a){var s
this.Co(a)
s=a.e
s.toString
t.D.a(s)
if(!s.c){t.x.a(a)
s.b=this.bj.p4}},
z2(a,b,c){this.uD(0,b,c)},
tt(a,b){var s,r,q,p=this,o=a.e
o.toString
s=t.D
s.a(o)
if(!o.c){p.N9(a,b)
o=a.e
o.toString
s.a(o).b=p.bj.p4
p.a6()}else{r=p.be
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
if(!s.c){this.Nb(0,b)
return}this.be.v(0,s.b)
this.iT(b)},
vv(a,b){this.JH(new A.a3b(this,a,b),t.p)},
DI(a){var s,r=this,q=a.e
q.toString
t.D.a(q)
if(q.or$){r.v(0,a)
s=q.b
s.toString
r.be.l(0,s,a)
a.e=q
r.Co(a)
q.c=!0}else r.bj.KM(a)},
ap(a){var s,r,q
this.PA(a)
for(s=this.be,s=s.gb_(s),s=new A.e1(J.at(s.a),s.b),r=A.m(s).z[1];s.q();){q=s.a;(q==null?r.a(q):q).ap(a)}},
ag(a){var s,r,q
this.PB(0)
for(s=this.be,s=s.gb_(s),s=new A.e1(J.at(s.a),s.b),r=A.m(s).z[1];s.q();){q=s.a;(q==null?r.a(q):q).ag(0)}},
jp(){this.Na()
var s=this.be
s.gb_(s).Z(0,this.gKJ())},
aT(a){var s
this.BX(a)
s=this.be
s.gb_(s).Z(0,a)},
fe(a){this.BX(a)},
ZY(a,b){var s
this.vv(a,null)
s=this.av$
if(s!=null){s=s.e
s.toString
t.D.a(s).a=b
return!0}this.bj.R8=!0
return!1},
a3c(a){var s,r,q,p=this,o=p.av$
o.toString
o=o.e
o.toString
s=t.D
o=s.a(o).b
o.toString
r=o-1
p.vv(r,null)
o=p.av$
o.toString
q=o.e
q.toString
q=s.a(q).b
q.toString
if(q===r){o.cn(a,!1)
return p.av$}p.bj.R8=!0
return null},
a3b(a,b){var s,r,q,p=b.e
p.toString
s=t.D
p=s.a(p).b
p.toString
r=p+1
this.vv(r,b)
p=b.e
p.toString
q=A.m(this).h("au.1").a(p).am$
if(q!=null){p=q.e
p.toString
p=s.a(p).b
p.toString
p=p===r}else p=!1
if(p){q.cn(a,!1)
return q}this.bj.R8=!0
return null},
HM(a,b){var s={}
s.a=a
s.b=b
this.JH(new A.a3d(s,this),t.p)},
Kq(a){switch(A.bc(t.p.a(A.x.prototype.gY.call(this)).a).a){case 0:return a.k3.a
case 1:return a.k3.b}},
yY(a,b,c){var s,r,q=this.cW$,p=A.akj(a)
for(s=A.m(this).h("au.1");q!=null;){if(this.a2Z(p,q,b,c))return!0
r=q.e
r.toString
q=s.a(r).bR$}return!1},
xP(a){var s=a.e
s.toString
return t.D.a(s).a},
kt(a){var s=t.ub.a(a.e)
return(s==null?null:s.b)!=null&&!this.be.T(0,s.b)},
dc(a,b){var s,r,q,p,o=this
if(!o.kt(a))b.Bz()
else{s=t.p
r=o.Ed(s.a(A.x.prototype.gY.call(o)))
q=a.e
q.toString
q=t.D.a(q).a
q.toString
p=q-s.a(A.x.prototype.gY.call(o)).d
switch(A.bc(s.a(A.x.prototype.gY.call(o)).a).a){case 0:b.aB(0,!r?o.id.c-a.k3.a-p:p,0)
break
case 1:b.aB(0,0,!r?o.id.c-a.k3.b-p:p)
break}}},
aF(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null
if(d.av$==null)return
s=t.p
switch(A.jx(s.a(A.x.prototype.gY.call(d)).a,s.a(A.x.prototype.gY.call(d)).b)){case B.z:r=b.U(0,new A.t(0,d.id.c))
q=B.zw
p=B.dF
o=!0
break
case B.av:r=b
q=B.dF
p=B.ft
o=!1
break
case B.w:r=b
q=B.ft
p=B.dF
o=!1
break
case B.ae:r=b.U(0,new A.t(d.id.c,0))
q=B.zx
p=B.ft
o=!0
break
default:o=c
r=o
p=r
q=p}n=d.av$
for(m=A.m(d).h("au.1"),l=t.D;n!=null;){k=n.e
k.toString
k=l.a(k).a
k.toString
j=k-s.a(A.x.prototype.gY.call(d)).d
k=r.a
i=q.a
k=k+i*j+p.a*0
h=r.b
g=q.b
h=h+g*j+p.b*0
f=new A.t(k,h)
if(o){e=d.Kq(n)
f=new A.t(k+i*e,h+g*e)}if(j<s.a(A.x.prototype.gY.call(d)).r&&j+d.Kq(n)>0)a.eL(n,f)
k=n.e
k.toString
n=m.a(k).am$}}}
A.a3b.prototype={
$1(a){var s=this.a,r=s.be,q=this.b,p=this.c
if(r.T(0,q)){r=r.v(0,q)
r.toString
q=r.e
q.toString
t.D.a(q)
s.iT(r)
r.e=q
s.uD(0,r,p)
q.c=!1}else s.bj.a0M(q,p)},
$S:89}
A.a3d.prototype={
$1(a){var s,r,q
for(s=this.a,r=this.b;s.a>0;){q=r.av$
q.toString
r.DI(q);--s.a}for(;s.b>0;){q=r.cW$
q.toString
r.DI(q);--s.b}s=r.be
s=s.gb_(s)
q=A.m(s).h("aN<q.E>")
B.b.Z(A.aA(new A.aN(s,new A.a3c(),q),!0,q.h("q.E")),r.bj.ga51())},
$S:89}
A.a3c.prototype={
$1(a){var s=a.e
s.toString
return!t.D.a(s).or$},
$S:230}
A.yJ.prototype={
ap(a){var s,r,q
this.em(a)
s=this.av$
for(r=t.D;s!=null;){s.ap(a)
q=s.e
q.toString
s=r.a(q).am$}},
ag(a){var s,r,q
this.dE(0)
s=this.av$
for(r=t.D;s!=null;){s.ag(0)
q=s.e
q.toString
s=r.a(q).am$}}}
A.Pl.prototype={}
A.Pm.prototype={}
A.Q2.prototype={
ag(a){this.uK(0)}}
A.Q3.prototype={}
A.vL.prototype={
gxI(){var s=this,r=t.p
switch(A.jx(r.a(A.x.prototype.gY.call(s)).a,r.a(A.x.prototype.gY.call(s)).b)){case B.z:return s.bI.d
case B.av:return s.bI.a
case B.w:return s.bI.b
case B.ae:return s.bI.c}},
ga_d(){var s=this,r=t.p
switch(A.jx(r.a(A.x.prototype.gY.call(s)).a,r.a(A.x.prototype.gY.call(s)).b)){case B.z:return s.bI.b
case B.av:return s.bI.c
case B.w:return s.bI.d
case B.ae:return s.bI.a}},
ga0X(){switch(A.bc(t.p.a(A.x.prototype.gY.call(this)).a).a){case 0:var s=this.bI
return s.gb7(s)+s.gb9(s)
case 1:return this.bI.gci()}},
ei(a){if(!(a.e instanceof A.kv))a.e=new A.kv(B.j)},
bA(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=null,a2=t.p,a3=a2.a(A.x.prototype.gY.call(a0)),a4=a0.gxI()
a0.ga_d()
s=a0.bI
s.toString
a2=s.a_f(A.bc(a2.a(A.x.prototype.gY.call(a0)).a))
r=a0.ga0X()
if(a0.t$==null){q=a0.hh(a3,0,a2)
a0.id=A.wu(a0.nN(a3,0,a2),!1,a1,a1,a2,Math.min(q,a3.r),0,a2,a1)
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
i=a0.nN(a3,0,a4)
h=Math.max(0,a3.w-r)
g=a3.a
f=a3.b
s.cn(new A.ku(g,f,a3.c,n,a4+a3.e,o,l-k,h,a3.x,a3.y,m,j-i),!0)
e=a0.t$.id
s=e.y
if(s!=null){a0.id=A.wu(a1,!1,a1,a1,0,0,0,0,s)
return}s=e.a
n=a4+s
m=a2+s
d=a0.hh(a3,n,m)
c=p+d
b=a0.nN(a3,0,a4)
a=a0.nN(a3,n,m)
n=e.c
k=e.d
q=Math.min(p+Math.max(n,k+d),l)
l=e.b
k=Math.min(c+k,q)
j=Math.min(a+b+e.z,j)
i=e.e
n=Math.max(c+n,p+e.r)
a0.id=A.wu(j,e.x,n,k,a2+i,q,l,m,a1)
m=a0.t$.e
m.toString
t.v.a(m)
switch(A.jx(g,f)){case B.z:a2=a0.bI
n=a2.a
s=a2.d+s
m.a=new A.t(n,a0.hh(a3,s,s+a2.b))
break
case B.av:m.a=new A.t(a0.hh(a3,0,a0.bI.a),a0.bI.b)
break
case B.w:a2=a0.bI
m.a=new A.t(a2.a,a0.hh(a3,0,a2.b))
break
case B.ae:a2=a0.bI
s=a2.c+s
m.a=new A.t(a0.hh(a3,s,s+a2.a),a0.bI.b)
break}},
yY(a,b,c){var s,r,q,p,o=this,n=o.t$
if(n!=null&&n.id.r>0){n=n.e
n.toString
t.v.a(n)
s=o.hh(t.p.a(A.x.prototype.gY.call(o)),0,o.gxI())
r=o.t$
r.toString
r=o.a_P(r)
n=n.a
q=o.t$.ga2X()
p=n!=null
if(p)a.c.push(new A.qp(new A.t(-n.a,-n.b)))
q.$3$crossAxisPosition$mainAxisPosition(a,b-r,c-s)
if(p)a.tK()}return!1},
a_P(a){var s=this,r=t.p
switch(A.jx(r.a(A.x.prototype.gY.call(s)).a,r.a(A.x.prototype.gY.call(s)).b)){case B.z:case B.w:return s.bI.a
case B.ae:case B.av:return s.bI.b}},
xP(a){return this.gxI()},
dc(a,b){var s=a.e
s.toString
s=t.v.a(s).a
b.aB(0,s.a,s.b)},
aF(a,b){var s,r=this.t$
if(r!=null&&r.id.w){s=r.e
s.toString
a.eL(r,b.U(0,t.v.a(s).a))}}}
A.Pj.prototype={
ap(a){var s
this.em(a)
s=this.t$
if(s!=null)s.ap(a)},
ag(a){var s
this.dE(0)
s=this.t$
if(s!=null)s.ag(0)}}
A.a2J.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return b instanceof A.a2J&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gu(a){var s=this
return A.V(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this
return"RelativeRect.fromLTRB("+B.d.N(s.a,1)+", "+B.d.N(s.b,1)+", "+B.d.N(s.c,1)+", "+B.d.N(s.d,1)+")"}}
A.dR.prototype={
gz8(){var s=this
return s.e!=null||s.f!=null||s.r!=null||s.w!=null||s.x!=null||s.y!=null},
i(a){var s=this,r=A.a([],t.s),q=s.e
if(q!=null)r.push("top="+A.hf(q))
q=s.f
if(q!=null)r.push("right="+A.hf(q))
q=s.r
if(q!=null)r.push("bottom="+A.hf(q))
q=s.w
if(q!=null)r.push("left="+A.hf(q))
q=s.x
if(q!=null)r.push("width="+A.hf(q))
q=s.y
if(q!=null)r.push("height="+A.hf(q))
if(r.length===0)r.push("not positioned")
r.push(s.pJ(0))
return B.b.ba(r,"; ")}}
A.wC.prototype={
F(){return"StackFit."+this.b}}
A.vM.prototype={
ei(a){if(!(a.e instanceof A.dR))a.e=new A.dR(null,null,B.j)},
YR(){var s=this
if(s.t!=null)return
s.t=s.I.W(s.ar)},
se4(a){var s=this
if(s.I.k(0,a))return
s.I=a
s.t=null
s.a6()},
sbD(a){var s=this
if(s.ar==a)return
s.ar=a
s.t=null
s.a6()},
ez(a){return this.Ic(a)},
c3(a){return this.Gj(a,A.ag2())},
Gj(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.YR()
if(e.df$===0){s=a.a
r=a.b
q=A.F(1/0,s,r)
p=a.c
o=a.d
n=A.F(1/0,p,o)
return isFinite(q)&&isFinite(n)?new A.a_(A.F(1/0,s,r),A.F(1/0,p,o)):new A.a_(A.F(0,s,r),A.F(0,p,o))}m=a.a
l=a.c
switch(e.ai.a){case 0:k=new A.aO(0,a.b,0,a.d)
break
case 1:k=A.rn(new A.a_(A.F(1/0,m,a.b),A.F(1/0,l,a.d)))
break
case 2:k=a
break
default:k=null}j=e.av$
for(s=t.B,i=l,h=m,g=!1;j!=null;){r=j.e
r.toString
s.a(r)
if(!r.gz8()){f=b.$2(j,k)
h=Math.max(h,f.a)
i=Math.max(i,f.b)
g=!0}j=r.am$}return g?new A.a_(h,i):new A.a_(A.F(1/0,m,a.b),A.F(1/0,l,a.d))},
bA(){var s,r,q,p,o,n,m,l=this,k=t.k.a(A.x.prototype.gY.call(l))
l.M=!1
l.k3=l.Gj(k,A.ag3())
s=l.av$
for(r=t.B,q=t.uu;s!=null;){p=s.e
p.toString
r.a(p)
if(!p.gz8()){o=l.t
o.toString
n=l.k3
n.toString
m=s.k3
m.toString
p.a=o.lw(q.a(n.aa(0,m)))}else{o=l.k3
o.toString
n=l.t
n.toString
l.M=A.am_(s,p,o,n)||l.M}s=p.am$}},
cL(a,b){return this.y6(a,b)},
tG(a,b){this.o_(a,b)},
aF(a,b){var s,r=this,q=r.aW,p=q!==B.k&&r.M,o=r.by
if(p){p=r.cx
p===$&&A.b()
s=r.k3
o.saR(0,a.kv(p,b,new A.C(0,0,0+s.a,0+s.b),r.gA0(),q,o.a))}else{o.saR(0,null)
r.o_(a,b)}},
m(){this.by.saR(0,null)
this.hR()},
iQ(a){var s
switch(this.aW.a){case 0:return null
case 1:case 2:case 3:if(this.M){s=this.k3
s=new A.C(0,0,0+s.a,0+s.b)}else s=null
return s}}}
A.Pn.prototype={
ap(a){var s,r,q
this.em(a)
s=this.av$
for(r=t.B;s!=null;){s.ap(a)
q=s.e
q.toString
s=r.a(q).am$}},
ag(a){var s,r,q
this.dE(0)
s=this.av$
for(r=t.B;s!=null;){s.ag(0)
q=s.e
q.toString
s=r.a(q).am$}}}
A.Po.prototype={}
A.KW.prototype={
k(a,b){if(b==null)return!1
if(J.T(b)!==A.B(this))return!1
return b instanceof A.KW&&b.a.k(0,this.a)&&b.b===this.b},
gu(a){return A.V(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return this.a.i(0)+" at "+A.hf(this.b)+"x"}}
A.vN.prototype={
sxS(a){var s,r,q,p,o=this
if(o.k1.k(0,a))return
s=o.k1
o.k1=a
r=s.b
r=A.uF(r,r,1)
q=o.k1.b
if(!r.k(0,A.uF(q,q,1))){r=o.GX()
q=o.ch
p=q.a
p.toString
J.arm(p)
q.saR(0,r)
o.ao()}o.a6()},
GX(){var s,r=this.k1.b
r=A.uF(r,r,1)
this.k4=r
s=A.amF(r)
s.ap(this)
return s},
oX(){},
bA(){var s,r=this.k1.a
this.id=r
s=this.t$
if(s!=null)s.hu(A.rn(r))},
bS(a,b){var s=this.t$
if(s!=null)s.bS(A.akj(a),b)
a.C(0,new A.hz(this,t.Cq))
return!0},
a31(a){var s,r=A.a([],t.f1),q=new A.bd(new Float64Array(16))
q.d2()
s=new A.hm(r,A.a([q],t.hZ),A.a([],t.pw))
this.bS(s,a)
return s},
gdw(){return!0},
aF(a,b){var s=this.t$
if(s!=null)a.eL(s,b)},
dc(a,b){var s=this.k4
s.toString
b.cA(0,s)
this.Op(a,b)},
a0b(){var s,r,q
try{q=$.ao()
s=q.a0T()
r=this.ch.a.a_z(s)
this.ZD()
q.a58(r)
r.m()}finally{}},
ZD(){var s,r,q,p,o,n,m,l,k,j=null,i=this.ghA(),h=i.gaI(),g=this.k2
g.gkB()
s=i.gaI()
g.gkB()
g=this.ch
r=t.g9
q=g.a.IT(0,new A.t(h.a,0),r)
switch(A.l1().a){case 0:p=g.a.IT(0,new A.t(s.a,i.d-1-0),r)
break
case 1:case 2:case 3:case 4:case 5:p=j
break
default:p=j}h=q==null
if(h&&p==null)return
if(!h&&p!=null){h=q.f
g=q.r
s=q.e
r=q.w
A.amu(new A.i2(p.a,p.b,p.c,p.d,s,h,g,r))
return}o=A.l1()===B.aA
n=h?p:q
h=n.f
g=n.r
s=n.e
r=n.w
m=o?n.a:j
l=o?n.b:j
k=o?n.c:j
A.amu(new A.i2(m,l,k,o?n.d:j,s,h,g,r))},
ghA(){var s=this.id.a0(0,this.k1.b)
return new A.C(0,0,0+s.a,0+s.b)},
gjC(){var s,r=this.k4
r.toString
s=this.id
return A.fY(r,new A.C(0,0,0+s.a,0+s.b))}}
A.Pq.prototype={
ap(a){var s
this.em(a)
s=this.t$
if(s!=null)s.ap(a)},
ag(a){var s
this.dE(0)
s=this.t$
if(s!=null)s.ag(0)}}
A.AW.prototype={
F(){return"CacheExtentStyle."+this.b}}
A.p4.prototype={
i(a){return"RevealedOffset(offset: "+A.h(this.a)+", rect: "+this.b.i(0)+")"}}
A.p1.prototype={
eC(a){this.h1(a)
a.Hm(B.Br)},
fe(a){var s=this.gHI()
new A.aN(s,new A.a3i(),A.aS(s).h("aN<1>")).Z(0,a)},
sfw(a){if(a===this.M)return
this.M=a
this.a6()},
sa0W(a){if(a===this.t)return
this.t=a
this.a6()},
sii(a,b){var s=this,r=s.I
if(b===r)return
if(s.b!=null)r.H(0,s.gtn())
s.I=b
if(s.b!=null)b.S(0,s.gtn())
s.a6()},
sa_C(a){if(a===this.ar)return
this.ar=a
this.a6()},
sa_D(a){if(a===this.aW)return
this.aW=a
this.a6()},
ap(a){this.PC(a)
this.I.S(0,this.gtn())},
ag(a){this.I.H(0,this.gtn())
this.PD(0)},
gdw(){return!0},
JY(a,b,c,d,e,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.azZ(h.I.k4,e),f=a0+a2
for(s=e.a,r=t.v,q=a0,p=0;c!=null;){o=a5<=0?0:a5
n=Math.max(b,-o)
m=b-n
c.cn(new A.ku(h.M,e,g,o,p,f-q,Math.max(0,a4-q+a0),d,h.t,a1,n,Math.max(0,a3+m)),!0)
l=c.id
k=l.y
if(k!=null)return k
j=q+l.b
k=l.w||a5>0
i=c.e
if(k){i.toString
r.a(i).a=h.HO(c,j,e)}else{i.toString
r.a(i).a=h.HO(c,-a5+a0,e)}f=Math.max(j+l.c,f)
k=l.a
a5-=k
p+=k
q+=l.d
i=l.z
if(i!==0){a3-=i-m
b=Math.min(n+i,0)}switch(s){case 0:i=h.iV
i===$&&A.b()
h.iV=i+k
break
case 1:i=h.iU
i===$&&A.b()
h.iU=i-k
break}if(l.x)h.fF=!0
c=a.$1(c)}return 0},
iQ(a){var s,r,q,p,o,n
switch(this.by.a){case 0:return null
case 1:case 2:case 3:break}s=this.k3
r=0+s.a
q=0+s.b
s=t.p
if(s.a(A.x.prototype.gY.call(a)).f===0||!isFinite(s.a(A.x.prototype.gY.call(a)).y))return new A.C(0,0,r,q)
p=s.a(A.x.prototype.gY.call(a)).y-s.a(A.x.prototype.gY.call(a)).r+s.a(A.x.prototype.gY.call(a)).f
switch(A.jx(this.M,s.a(A.x.prototype.gY.call(a)).b)){case B.w:o=0+p
n=0
break
case B.z:q-=p
n=0
o=0
break
case B.av:n=0+p
o=0
break
case B.ae:r-=p
n=0
o=0
break
default:n=0
o=0}return new A.C(n,o,r,q)},
yb(a){var s,r=this,q=r.ai
if(q==null){q=r.k3
return new A.C(0,0,0+q.a,0+q.b)}switch(A.bc(r.M).a){case 1:s=r.k3
return new A.C(0,0-q,0+s.a,0+s.b+q)
case 0:s=r.k3
return new A.C(0-q,0,0+s.a+q,0+s.b)}},
aF(a,b){var s,r,q,p=this
if(p.av$==null)return
s=p.fF&&p.by!==B.k
r=p.c7
if(s){s=p.cx
s===$&&A.b()
q=p.k3
r.saR(0,a.kv(s,b,new A.C(0,0,0+q.a,0+q.b),p.gX4(),p.by,r.a))}else{r.saR(0,null)
p.Fe(a,b)}},
m(){this.c7.saR(0,null)
this.hR()},
Fe(a,b){var s,r,q,p,o,n,m,l
for(s=this.gHI(),r=s.length,q=t.v,p=b.a,o=b.b,n=0;n<s.length;s.length===r||(0,A.Q)(s),++n){m=s[n]
if(m.id.w){l=m.e
l.toString
l=q.a(l).a
a.eL(m,new A.t(p+l.a,o+l.b))}}},
cL(a,b){var s,r,q,p,o,n,m,l,k={}
k.a=k.b=null
switch(A.bc(this.M).a){case 1:k.b=b.b
k.a=b.a
break
case 0:k.b=b.a
k.a=b.b
break}s=new A.pk(a.a,a.b,a.c)
for(r=this.ga_Q(),q=r.length,p=t.v,o=0;o<r.length;r.length===q||(0,A.Q)(r),++o){n=r[o]
if(!n.id.w)continue
m=new A.bd(new Float64Array(16))
m.d2()
l=n.e
l.toString
l=p.a(l).a
m.aB(0,l.a,l.b)
if(a.a_c(new A.a3h(k,this,n,s),m))return!0}return!1},
kC(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=a instanceof A.ci
for(s=t.d,r=c,q=a,p=0;o=q.c,o!==d;q=o){o.toString
s.a(o)
if(q instanceof A.E)r=q
if(o instanceof A.ci){n=o.xP(q)
n.toString
p+=n}else{p=0
b=!1}}if(r!=null){s=r.c
s.toString
t.q0.a(s)
m=t.p.a(A.x.prototype.gY.call(s)).b
switch(A.bc(d.M).a){case 0:l=r.k3.a
break
case 1:l=r.k3.b
break
default:l=c}if(a1==null)a1=a.ghA()
k=A.fY(a.bv(0,r),a1)}else{if(b){t.q0.a(a)
s=t.p
m=s.a(A.x.prototype.gY.call(a)).b
l=a.id.a
if(a1==null)switch(A.bc(d.M).a){case 0:a1=new A.C(0,0,0+l,0+s.a(A.x.prototype.gY.call(a)).w)
break
case 1:a1=new A.C(0,0,0+s.a(A.x.prototype.gY.call(a)).w,0+a.id.a)
break}}else{s=d.I.at
s.toString
a1.toString
return new A.p4(s,a1)}k=a1}t.q0.a(q)
switch(A.jx(d.M,m)){case B.z:s=k.d
p+=l-s
j=s-k.b
break
case B.av:s=k.a
p+=s
j=k.c-s
break
case B.w:s=k.b
p+=s
j=k.d-s
break
case B.ae:s=k.c
p+=l-s
j=s-k.a
break
default:j=c}q.id.toString
p=d.Mj(q,p)
i=A.fY(a.bv(0,d),a1)
h=d.a42(q)
switch(t.p.a(A.x.prototype.gY.call(q)).b.a){case 0:p-=h
break
case 1:switch(A.bc(d.M).a){case 1:p-=i.d-i.b
break
case 0:p-=i.c-i.a
break}break}s=d.M
switch(A.bc(s).a){case 0:g=d.k3.a-h
break
case 1:g=d.k3.b-h
break
default:g=c}f=p-(g-j)*a0
o=d.I.at
o.toString
e=o-f
switch(s.a){case 2:i=i.aB(0,0,e)
break
case 1:i=i.aB(0,e,0)
break
case 0:i=i.aB(0,0,-e)
break
case 3:i=i.aB(0,-e,0)
break}return new A.p4(f,i)},
HO(a,b,c){switch(A.jx(this.M,c)){case B.z:return new A.t(0,this.k3.b-(b+a.id.c))
case B.av:return new A.t(b,0)
case B.w:return new A.t(0,b)
case B.ae:return new A.t(this.k3.a-(b+a.id.c),0)}},
ej(a,b,c,d){var s=this
if(!s.I.r.glv())return s.pL(a,b,c,d)
s.pL(a,null,c,A.am1(a,b,c,s.I,d,s))},
mL(){return this.ej(B.aL,null,B.t,null)},
kL(a,b){return this.ej(B.aL,a,B.t,b)},
$iIF:1}
A.a3i.prototype={
$1(a){var s=a.id
return s.w||s.z>0},
$S:232}
A.a3h.prototype={
$1(a){var s=this,r=s.c,q=s.a,p=s.b.a0d(r,q.b)
return r.Jl(s.d,q.a,p)},
$S:88}
A.vO.prototype={
ei(a){if(!(a.e instanceof A.j8))a.e=new A.j8(null,null,B.j)},
sa_h(a){if(a===this.rQ)return
this.rQ=a
this.a6()},
saI(a){if(a==this.dM)return
this.dM=a
this.a6()},
gjE(){return!0},
c3(a){return new A.a_(A.F(1/0,a.a,a.b),A.F(1/0,a.c,a.d))},
bA(){var s,r,q,p,o,n,m,l,k,j=this
switch(A.bc(j.M).a){case 1:j.I.nI(j.k3.b)
break
case 0:j.I.nI(j.k3.a)
break}if(j.dM==null){j.iV=j.iU=0
j.fF=!1
j.I.nF(0,0)
return}switch(A.bc(j.M).a){case 1:s=j.k3
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
o=j.Rg(r,q,p+0)
if(o!==0){p=j.I
n=p.at
n.toString
p.at=n+o
p.ch=!0}else{p=j.I
n=j.iU
n===$&&A.b()
m=j.rQ
n=Math.min(0,n+r*m)
l=j.iV
l===$&&A.b()
if(p.nF(n,Math.max(0,l-r*(1-m))))break}k=s+1
if(k<10){s=k
continue}else break}while(!0)},
Rg(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.iV=e.iU=0
e.fF=!1
s=a*e.rQ-c
r=A.F(s,0,a)
q=a-s
p=A.F(q,0,a)
switch(e.aW.a){case 0:e.ai=e.ar
break
case 1:e.ai=a*e.ar
break}o=e.ai
o.toString
n=a+2*o
m=s+o
l=A.F(m,0,n)
k=A.F(n-m,0,n)
j=e.dM.e
j.toString
i=A.m(e).h("au.1").a(j).bR$
j=i==null
if(!j){h=Math.max(a,s)
g=e.JY(e.ga_N(),A.F(q,-o,0),i,b,B.nI,p,a,0,l,r,h-a)
if(g!==0)return-g}q=e.dM
o=-s
h=Math.max(0,o)
o=j?Math.min(0,o):0
j=s>=a?s:r
f=e.ai
f.toString
return e.JY(e.ga_L(),A.F(s,-f,0),q,b,B.nH,j,a,o,k,p,h)},
Mj(a,b){var s,r,q,p,o=this
switch(t.p.a(A.x.prototype.gY.call(a)).b.a){case 0:s=o.dM
for(r=A.m(o).h("au.1"),q=0;s!==a;){q+=s.id.a
p=s.e
p.toString
s=r.a(p).am$}return q+b
case 1:r=o.dM.e
r.toString
p=A.m(o).h("au.1")
s=p.a(r).bR$
for(q=0;s!==a;){q-=s.id.a
r=s.e
r.toString
s=p.a(r).bR$}return q-b}},
a42(a){var s,r,q,p=this
switch(t.p.a(A.x.prototype.gY.call(a)).b.a){case 0:s=p.dM
for(r=A.m(p).h("au.1");s!==a;){s.id.toString
q=s.e
q.toString
s=r.a(q).am$}return 0
case 1:r=p.dM.e
r.toString
q=A.m(p).h("au.1")
s=q.a(r).bR$
for(;s!==a;){s.id.toString
r=s.e
r.toString
s=q.a(r).bR$}return 0}},
dc(a,b){var s=a.e
s.toString
s=t.v.a(s).a
b.aB(0,s.a,s.b)},
a0d(a,b){var s,r=a.e
r.toString
t.v.a(r)
s=t.p
switch(A.jx(s.a(A.x.prototype.gY.call(a)).a,s.a(A.x.prototype.gY.call(a)).b)){case B.w:return b-r.a.b
case B.av:return b-r.a.a
case B.z:return a.id.c-(b-r.a.b)
case B.ae:return a.id.c-(b-r.a.a)}},
gHI(){var s,r,q=this,p=A.a([],t.jT),o=q.av$
if(o==null)return p
for(s=A.m(q).h("au.1");o!=q.dM;){o.toString
p.push(o)
r=o.e
r.toString
o=s.a(r).am$}o=q.cW$
for(;!0;){o.toString
p.push(o)
if(o===q.dM)return p
r=o.e
r.toString
o=s.a(r).bR$}},
ga_Q(){var s,r,q,p=this,o=A.a([],t.jT)
if(p.av$==null)return o
s=p.dM
for(r=A.m(p).h("au.1");s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).am$}q=p.dM.e
q.toString
s=r.a(q).bR$
for(;s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).bR$}return o}}
A.ih.prototype={
ap(a){var s,r,q
this.em(a)
s=this.av$
for(r=A.m(this).h("ih.0");s!=null;){s.ap(a)
q=s.e
q.toString
s=r.a(q).am$}},
ag(a){var s,r,q
this.dE(0)
s=this.av$
for(r=A.m(this).h("ih.0");s!=null;){s.ag(0)
q=s.e
q.toString
s=r.a(q).am$}}}
A.pa.prototype={
F(){return"ScrollDirection."+this.b}}
A.fs.prototype={
oR(a,b,c,d){var s=d.a===B.t.a
if(s){this.dz(b)
return A.bs(null,t.H)}else return this.he(b,c,d)},
i(a){var s=this,r=A.a([],t.s)
s.P_(r)
r.push(A.B(s.w).i(0))
r.push(s.r.i(0))
r.push(A.h(s.fr))
r.push(s.k4.i(0))
return"<optimized out>#"+A.bK(s)+"("+B.b.ba(r,", ")+")"},
cc(a){var s=this.at
if(s!=null)a.push("offset: "+B.d.N(s,1))}}
A.qa.prototype={}
A.kp.prototype={
F(){return"SchedulerPhase."+this.b}}
A.a1D.prototype={}
A.dw.prototype={
a_a(a){var s=this.f$
s.push(a)
if(s.length===1){s=$.aL()
s.ay=this.gSQ()
s.ch=$.a9}},
KQ(a){var s=this.f$
B.b.v(s,a)
if(s.length===0){s=$.aL()
s.ay=null
s.ch=$.a9}},
SR(a){var s,r,q,p,o,n,m,l,k=this.f$,j=A.aA(k,!0,t.wX)
for(p=j.length,o=0;o<p;++o){s=j[o]
try{if(B.b.B(k,s))s.$1(a)}catch(n){r=A.ag(n)
q=A.ay(n)
m=A.bi("while executing callbacks for FrameTiming")
l=$.fA()
if(l!=null)l.$1(new A.bx(r,q,"Flutter framework",m,null,!1))}}},
t_(a){this.r$=a
switch(a.a){case 0:case 1:this.G3(!0)
break
case 2:case 3:this.G3(!1)
break}},
DX(){if(this.y$)return
this.y$=!0
A.cd(B.t,this.gY7())},
Y8(){this.y$=!1
if(this.a29())this.DX()},
a29(){var s,r,q,p,o,n,m=this,l="No element",k=m.x$,j=k.c===0
if(j||m.b>0)return!1
if(j)A.X(A.a6(l))
s=k.pV(0)
j=s.b
if(m.w$.$2$priority$scheduler(j,m)){try{if(k.c===0)A.X(A.a6(l));++k.d
k.pV(0)
p=k.c-1
o=k.pV(p)
k.b[p]=null
k.c=p
if(p>0)k.Rk(o,0)
s.a6I()}catch(n){r=A.ag(n)
q=A.ay(n)
j=A.bi("during a task callback")
A.dK(new A.bx(r,q,"scheduler library",j,null,!1))}return k.c!==0}return!1},
pB(a,b){var s,r=this
r.hK()
s=++r.z$
r.Q$.l(0,s,new A.qa(a))
return r.z$},
pA(a){return this.pB(a,!1)},
gIF(){var s=this
if(s.ay$==null){if(s.CW$===B.cJ)s.hK()
s.ay$=new A.aY(new A.a7($.a9,t.U),t._)
s.ax$.push(new A.a48(s))}return s.ay$.a},
gJ4(){return this.cx$},
G3(a){if(this.cx$===a)return
this.cx$=a
if(a)this.hK()},
IG(){var s=$.aL()
if(s.w==null){s.w=this.gTU()
s.x=$.a9}if(s.y==null){s.y=this.gUl()
s.z=$.a9}},
yx(){switch(this.CW$.a){case 0:case 4:this.hK()
return
case 1:case 2:case 3:return}},
hK(){var s,r=this
if(!r.ch$)s=!(A.dw.prototype.gJ4.call(r)&&r.c8$)
else s=!0
if(s)return
r.IG()
$.aL().hK()
r.ch$=!0},
Me(){if(this.ch$)return
this.IG()
$.aL().hK()
this.ch$=!0},
ui(){var s,r,q=this
if(q.cy$||q.CW$!==B.cJ)return
q.cy$=!0
s=new A.KB(null,0,A.a([],t.vS))
s.pG(0,"Warm-up frame")
r=q.ch$
A.cd(B.t,new A.a4a(q))
A.cd(B.t,new A.a4b(q,r))
q.a3W(new A.a4c(q,s))},
a5h(){var s=this
s.dx$=s.CQ(s.dy$)
s.db$=null},
CQ(a){var s=this.db$,r=s==null?B.t:new A.aG(a.a-s.a)
return A.c8(B.d.b1(r.a/$.aoc)+this.dx$.a,0,0)},
TV(a){if(this.cy$){this.go$=!0
return}this.J8(a)},
Um(){var s=this
if(s.go$){s.go$=!1
s.ax$.push(new A.a47(s))
return}s.Ja()},
J8(a){var s,r,q=this,p=q.id$,o=p==null
if(!o)p.pG(0,"Frame")
if(q.db$==null)q.db$=a
r=a==null
q.fr$=q.CQ(r?q.dy$:a)
if(!r)q.dy$=a
q.ch$=!1
try{if(!o)p.pG(0,"Animate")
q.CW$=B.TR
s=q.Q$
q.Q$=A.y(t.S,t.b1)
J.nr(s,new A.a49(q))
q.as$.X(0)}finally{q.CW$=B.TS}},
a5f(a){var s=this,r=s.k1$,q=r==null
if(!q&&r!==a)return null
if(r===a)++s.k2$
else if(q){s.k1$=a
s.k2$=1}return new A.a1D(s.gSy())},
Sz(){if(--this.k2$===0){this.k1$=null
$.aL()}},
Ja(){var s,r,q,p,o,n,m,l=this,k=l.id$,j=k==null
if(!j)k.rV(0)
try{l.CW$=B.B9
for(p=l.at$,o=p.length,n=0;n<p.length;p.length===o||(0,A.Q)(p),++n){s=p[n]
m=l.fr$
m.toString
l.EJ(s,m)}l.CW$=B.TT
p=l.ax$
r=A.aA(p,!0,t.qP)
B.b.X(p)
for(p=r,o=p.length,n=0;n<p.length;p.length===o||(0,A.Q)(p),++n){q=p[n]
m=l.fr$
m.toString
l.EJ(q,m)}}finally{l.CW$=B.cJ
if(!j)k.rV(0)
l.fr$=null}},
EK(a,b,c){var s,r,q,p
try{a.$1(b)}catch(q){s=A.ag(q)
r=A.ay(q)
p=A.bi("during a scheduler callback")
A.dK(new A.bx(s,r,"scheduler library",p,null,!1))}},
EJ(a,b){return this.EK(a,b,null)}}
A.a48.prototype={
$1(a){var s=this.a
s.ay$.ey(0)
s.ay$=null},
$S:2}
A.a4a.prototype={
$0(){this.a.J8(null)},
$S:0}
A.a4b.prototype={
$0(){var s=this.a
s.Ja()
s.a5h()
s.cy$=!1
if(this.b)s.hK()},
$S:0}
A.a4c.prototype={
$0(){var s=0,r=A.a4(t.H),q=this
var $async$$0=A.a0(function(a,b){if(a===1)return A.a1(b,r)
while(true)switch(s){case 0:s=2
return A.a5(q.a.gIF(),$async$$0)
case 2:q.b.rV(0)
return A.a2(null,r)}})
return A.a3($async$$0,r)},
$S:56}
A.a47.prototype={
$1(a){var s=this.a
s.ch$=!1
s.hK()},
$S:2}
A.a49.prototype={
$2(a,b){var s,r,q=this.a
if(!q.as$.B(0,a)){s=b.a
r=q.fr$
r.toString
q.EK(s,r,b.b)}},
$S:234}
A.pF.prototype={
szv(a,b){var s=this
if(b===s.b)return
s.b=b
if(b)s.AE()
else if(s.a!=null&&s.e==null)s.e=$.bM.pB(s.gx4(),!1)},
ga3B(){if(this.a==null)return!1
if(this.b)return!1
var s=$.bM
s.toString
if(A.dw.prototype.gJ4.call(s)&&s.c8$)return!0
if($.bM.CW$!==B.cJ)return!0
return!1},
mO(a){var s,r,q=this
q.a=new A.mO(new A.aY(new A.a7($.a9,t.U),t._))
if(!q.b)s=q.e==null
else s=!1
if(s)q.e=$.bM.pB(q.gx4(),!1)
s=$.bM
r=s.CW$.a
if(r>0&&r<4){s=s.fr$
s.toString
q.c=s}s=q.a
s.toString
return s},
mP(a,b){var s=this,r=s.a
if(r==null)return
s.c=s.a=null
s.AE()
if(b)r.D9(s)
else r.GA()},
fZ(a){return this.mP(a,!1)},
Z7(a){var s,r=this
r.e=null
s=r.c
if(s==null)s=r.c=a
r.d.$1(new A.aG(a.a-s.a))
if(!r.b&&r.a!=null&&r.e==null)r.e=$.bM.pB(r.gx4(),!0)},
AE(){var s,r=this.e
if(r!=null){s=$.bM
s.Q$.v(0,r)
s.as$.C(0,r)
this.e=null}},
m(){var s=this,r=s.a
if(r!=null){s.a=null
s.AE()
r.D9(s)}},
a5F(a,b){var s=""+"Ticker()"
return s.charCodeAt(0)==0?s:s},
i(a){return this.a5F(a,!1)}}
A.mO.prototype={
GA(){this.c=!0
this.a.ey(0)
var s=this.b
if(s!=null)s.ey(0)},
D9(a){var s
this.c=!1
s=this.b
if(s!=null)s.hY(new A.x2(a))},
Lt(a){var s,r,q=this,p=new A.a8g(a)
if(q.b==null){s=q.b=new A.aY(new A.a7($.a9,t.U),t._)
r=q.c
if(r!=null)if(r)s.ey(0)
else s.hY(B.Zo)}q.b.a.dU(p,p,t.H)},
lz(a,b){return this.a.a.lz(a,b)},
iN(a){return this.lz(a,null)},
dU(a,b,c){return this.a.a.dU(a,b,c)},
aZ(a,b){return this.dU(a,null,b)},
ff(a){return this.a.a.ff(a)},
i(a){var s=A.bK(this),r=this.c
if(r==null)r="active"
else r=r?"complete":"canceled"
return"<optimized out>#"+s+"("+r+")"},
$iah:1}
A.a8g.prototype={
$1(a){this.a.$0()},
$S:15}
A.x2.prototype={
i(a){var s=this.a
if(s!=null)return"This ticker was canceled: "+s.i(0)
return'The ticker was canceled before the "orCancel" property was first used.'},
$ibP:1}
A.a4D.prototype={}
A.wj.prototype={
i(a){return"SemanticsTag("+this.a+")"}}
A.cm.prototype={
U(a,b){var s,r,q,p,o,n,m,l=this.a,k=l.length
if(k===0)return b
s=b.a
if(s.length===0)return this
r=A.aA(this.b,!0,t.lS)
q=b.b
p=q.length
if(p!==0)for(o=0;o<q.length;q.length===p||(0,A.Q)(q),++o){n=q[o]
m=n.a
r.push(n.HW(new A.eR(m.a+k,m.b+k)))}return new A.cm(l+s,r)},
k(a,b){if(b==null)return!1
return J.T(b)===A.B(this)&&b instanceof A.cm&&b.a===this.a&&A.cO(b.b,this.b)},
gu(a){return A.V(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"AttributedString('"+this.a+"', attributes: "+A.h(this.b)+")"}}
A.JI.prototype={
bW(){return"SemanticsData"},
k(a,b){var s=this
if(b==null)return!1
return b instanceof A.JI&&b.a===s.a&&b.b===s.b&&b.c.k(0,s.c)&&b.d.k(0,s.d)&&b.e.k(0,s.e)&&b.f.k(0,s.f)&&b.r.k(0,s.r)&&b.w===s.w&&b.x==s.x&&b.cx.k(0,s.cx)&&A.ajm(b.cy,s.cy)&&b.Q==s.Q&&b.as==s.as&&b.at==s.at&&b.ax==s.ax&&J.f(b.db,s.db)&&b.dx===s.dx&&b.dy===s.dy&&A.awm(b.fr,s.fr)},
gu(a){var s=this,r=A.d6(s.fr)
return A.V(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.cx,s.cy,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,A.V(s.CW,s.db,s.dx,s.dy,r,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a))}}
A.PM.prototype={}
A.JK.prototype={
bW(){return"SemanticsProperties"}}
A.bV.prototype={
sbk(a,b){var s
if(!A.auP(this.r,b)){s=A.ahJ(b)
this.r=s?null:b
this.hW()}},
saM(a,b){if(!this.w.k(0,b)){this.w=b
this.hW()}},
sJN(a){if(this.as===a)return
this.as=a
this.hW()},
XP(a){var s,r,q,p,o,n,m,l=this,k=l.ax
if(k!=null)for(s=k.length,r=0;r<s;++r)k[r].ch=!0
for(k=a.length,r=0;r<k;++r)a[r].ch=!1
k=l.ax
if(k!=null)for(s=k.length,q=t.aa,p=!1,r=0;r<k.length;k.length===s||(0,A.Q)(k),++r){o=k[r]
if(o.ch){n=J.cl(o)
if(q.a(A.J.prototype.gaJ.call(n,o))===l){o.c=null
if(l.b!=null)o.ag(0)}p=!0}}else p=!1
for(k=a.length,s=t.aa,r=0;r<a.length;a.length===k||(0,A.Q)(a),++r){o=a[r]
q=J.cl(o)
if(s.a(A.J.prototype.gaJ.call(q,o))!==l){if(s.a(A.J.prototype.gaJ.call(q,o))!=null){q=s.a(A.J.prototype.gaJ.call(q,o))
if(q!=null){o.c=null
if(q.b!=null)o.ag(0)}}o.c=l
q=l.b
if(q!=null)o.ap(q)
q=o.a
n=l.a
if(q<=n){o.a=n+1
o.jp()}p=!0}}if(!p&&l.ax!=null)for(k=l.ax,s=k.length,m=0;m<s;++m)if(k[m].e!==a[m].e){p=!0
break}l.ax=a
if(p)l.hW()},
ga2O(){var s=this.ax
s=s==null?null:s.length!==0
return s===!0},
xk(a){var s,r,q,p=this.ax
if(p!=null)for(s=p.length,r=0;r<p.length;p.length===s||(0,A.Q)(p),++r){q=p[r]
if(!a.$1(q)||!q.xk(a))return!1}return!0},
jp(){var s=this.ax
if(s!=null)B.b.Z(s,this.gKJ())},
ap(a){var s,r,q,p=this
p.uz(a)
for(s=a.c;s.T(0,p.e);)p.e=$.a4U=($.a4U+1)%65535
s.l(0,p.e,p)
a.d.v(0,p)
if(p.CW){p.CW=!1
p.hW()}s=p.ax
if(s!=null)for(r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].ap(a)},
ag(a){var s,r,q,p,o,n=this,m=t.nU
m.a(A.J.prototype.gbo.call(n)).c.v(0,n.e)
m.a(A.J.prototype.gbo.call(n)).d.C(0,n)
n.dE(0)
m=n.ax
if(m!=null)for(s=m.length,r=t.aa,q=0;q<m.length;m.length===s||(0,A.Q)(m),++q){p=m[q]
o=J.cl(p)
if(r.a(A.J.prototype.gaJ.call(o,p))===n)o.ag(p)}n.hW()},
hW(){var s=this
if(s.CW)return
s.CW=!0
if(s.b!=null)t.nU.a(A.J.prototype.gbo.call(s)).b.C(0,s)},
jv(a,b,c){var s,r=this
if(c==null)c=$.agE()
if(r.fr.k(0,c.p4))if(r.id.k(0,c.ry))if(r.k2===c.x2)if(r.k3===c.xr)if(r.fx.k(0,c.R8))if(r.fy.k(0,c.RG))if(r.go.k(0,c.rx))if(r.k1===c.to)if(r.dy===c.aV)if(r.ok==c.y1)if(r.p1==c.id)if(r.RG==c.an)if(r.rx==c.aq)if(r.ry==c.ak)if(r.db===c.f)if(r.Q==c.k1)s=r.at!==c.p2
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
if(s)r.hW()
r.fr=c.p4
r.fx=c.R8
r.fy=c.RG
r.go=c.rx
r.id=c.ry
r.k1=c.to
r.k4=c.x1
r.k2=c.x2
r.k3=c.xr
r.dy=c.aV
r.ok=c.y1
r.p1=c.id
r.cx=A.ox(c.e,t.nS,t.BT)
r.cy=A.ox(c.p3,t.zN,t.M)
r.db=c.f
r.p2=c.y2
r.RG=c.an
r.rx=c.aq
r.ry=c.ak
r.at=c.p2
r.p4=c.k2
r.R8=c.k3
r.Q=c.k1
r.to=c.k4
r.x1=c.ok
r.x2=c.p1
r.XP(b==null?B.i1:b)},
a5T(a,b){return this.jv(a,null,b)},
M3(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7={}
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
a7.y=s==null?null:A.k8(s,t.xJ)
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
q=A.b6(t.S)
for(s=a6.cy,s=A.iP(s,s.r);s.q();)q.C(0,A.aky(s.d))
a6.k4!=null
if(a6.at)a6.xk(new A.a4V(a7,a6,q))
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
B.b.hO(a5)
return new A.JI(s,p,o,n,m,l,k,j,i,d,c,b,a,a0,a1,a2,a3,a4,h,e,g,r,f,a5)},
R5(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.M3()
if(!a.ga2O()||a.at){s=$.apL()
r=s}else{q=a.ax.length
p=a.RP()
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
if(c==null)c=$.apN()
b=l==null?$.apM():l
a1.a.push(new A.JJ(n,a0.a,a0.b,-1,-1,-1,0,g,f,e,d,a0.cx,m.a,m.b,h.a,h.b,k.a,k.b,j.a,j.b,i.a,i.b,a0.w,a0.x,A.ajo(c),s,r,b,a0.dy))
a.CW=!1},
RP(){var s,r,q,p,o,n,m,l,k,j=this,i=j.ok,h=t.aa,g=h.a(A.J.prototype.gaJ.call(j,j))
while(!0){s=i==null
if(!(s&&g!=null))break
i=g.ok
g=h.a(A.J.prototype.gaJ.call(g,g))}r=j.ax
if(!s){r.toString
r=A.ayA(r,i)}h=t.Dr
q=A.a([],h)
p=A.a([],h)
for(o=null,n=0;n<r.length;++n){m=r[n]
l=m.p1
o=n>0?r[n-1].p1:null
if(n!==0)if(J.T(l)===J.T(o)){if(l!=null)o.toString
k=!0}else k=!1
else k=!0
if(!k&&p.length!==0){if(o!=null){if(!!p.immutable$list)A.X(A.N("sort"))
h=p.length-1
if(h-0<=32)A.K3(p,0,h,J.aiW())
else A.K2(p,0,h,J.aiW())}B.b.K(q,p)
B.b.X(p)}p.push(new A.jo(m,l,n))}if(o!=null)B.b.hO(p)
B.b.K(q,p)
h=t.wg
return A.aA(new A.aH(q,new A.a4T(),h),!0,h.h("bn.E"))},
Mp(a){if(this.b==null)return
B.md.eg(0,a.Lc(this.e))},
bW(){return"SemanticsNode#"+this.e},
a5B(a,b,c){return new A.PM(a,this,b,!0,!0,null,c)},
La(a){return this.a5B(B.Fp,null,a)}}
A.a4V.prototype={
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
if(s!=null){r=q.y;(r==null?q.y=A.b6(t.xJ):r).K(0,s)}for(s=this.b.cy,s=A.iP(s,s.r),r=this.c;s.q();)r.C(0,A.aky(s.d))
a.k4!=null
s=q.c
r=q.x
q.c=A.aeG(a.fr,a.ok,s,r)
r=q.r
s=q.x
q.r=A.aeG(a.id,a.ok,r,s)
q.cy=Math.max(q.cy,a.k3+a.k2)
return!0},
$S:61}
A.a4T.prototype={
$1(a){return a.a},
$S:236}
A.jf.prototype={
b2(a,b){return B.d.b2(this.b,b.b)},
$ibF:1}
A.hd.prototype={
b2(a,b){return B.d.b2(this.a,b.a)},
MQ(){var s,r,q,p,o,n,m,l,k,j=A.a([],t.iV)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q){p=s[q]
o=p.w
j.push(new A.jf(!0,A.nl(p,new A.t(o.a- -0.1,o.b- -0.1)).a,p))
j.push(new A.jf(!1,A.nl(p,new A.t(o.c+-0.1,o.d+-0.1)).a,p))}B.b.hO(j)
n=A.a([],t.dK)
for(s=j.length,r=this.b,o=t.V,m=null,l=0,q=0;q<j.length;j.length===s||(0,A.Q)(j),++q){k=j[q]
if(k.a){++l
if(m==null)m=new A.hd(k.b,r,A.a([],o))
m.c.push(k.c)}else --l
if(l===0){m.toString
n.push(m)
m=null}}B.b.hO(n)
if(r===B.W){s=t.FF
n=A.aA(new A.cH(n,s),!0,s.h("bn.E"))}s=A.an(n).h("iE<1,bV>")
return A.aA(new A.iE(n,new A.adr(),s),!0,s.h("q.E"))},
MP(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this.c,a4=a3.length
if(a4<=1)return a3
s=t.S
r=A.y(s,t.ju)
q=A.y(s,s)
for(p=this.b,o=p===B.W,p=p===B.u,n=a4,m=0;m<n;g===a4||(0,A.Q)(a3),++m,n=g){l=a3[m]
r.l(0,l.e,l)
n=l.w
k=n.a
j=n.b
i=A.nl(l,new A.t(k+(n.c-k)/2,j+(n.d-j)/2))
for(n=a3.length,k=i.a,j=i.b,h=0;g=a3.length,h<g;a3.length===n||(0,A.Q)(a3),++h){f=a3[h]
if((l==null?f==null:l===f)||q.j(0,f.e)===l.e)continue
g=f.w
e=g.a
d=g.b
c=A.nl(f,new A.t(e+(g.c-e)/2,d+(g.d-d)/2))
b=Math.atan2(c.b-j,c.a-k)
a=p&&-0.7853981633974483<b&&b<2.356194490192345
if(o)a0=b<-2.356194490192345||b>2.356194490192345
else a0=!1
if(a||a0)q.l(0,l.e,f.e)}}a1=A.a([],t.t)
a2=A.a(a3.slice(0),A.an(a3))
B.b.dl(a2,new A.adn())
new A.aH(a2,new A.ado(),A.an(a2).h("aH<1,k>")).Z(0,new A.adq(A.b6(s),q,a1))
a3=t.sC
a3=A.aA(new A.aH(a1,new A.adp(r),a3),!0,a3.h("bn.E"))
a4=A.an(a3).h("cH<1>")
return A.aA(new A.cH(a3,a4),!0,a4.h("bn.E"))}}
A.adr.prototype={
$1(a){return a.MP()},
$S:92}
A.adn.prototype={
$2(a,b){var s,r,q=a.w,p=A.nl(a,new A.t(q.a,q.b))
q=b.w
s=A.nl(b,new A.t(q.a,q.b))
r=B.d.b2(p.b,s.b)
if(r!==0)return-r
return-B.d.b2(p.a,s.a)},
$S:62}
A.adq.prototype={
$1(a){var s=this,r=s.a
if(r.B(0,a))return
r.C(0,a)
r=s.b
if(r.T(0,a)){r=r.j(0,a)
r.toString
s.$1(r)}s.c.push(a)},
$S:39}
A.ado.prototype={
$1(a){return a.e},
$S:239}
A.adp.prototype={
$1(a){var s=this.a.j(0,a)
s.toString
return s},
$S:240}
A.aeC.prototype={
$1(a){return a.MQ()},
$S:92}
A.jo.prototype={
b2(a,b){var s,r=this.b
if(r==null||b.b==null)return this.c-b.c
r.toString
s=b.b
s.toString
return r.b2(0,s)},
$ibF:1}
A.wi.prototype={
Mq(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.b
if(e.a===0)return
s=A.b6(t.S)
r=A.a([],t.V)
for(q=t.aa,p=A.m(e).h("aN<1>"),o=p.h("q.E"),n=f.d;e.a!==0;){m=A.aA(new A.aN(e,new A.a4Y(f),p),!0,o)
e.X(0)
n.X(0)
l=new A.a4Z()
if(!!m.immutable$list)A.X(A.N("sort"))
k=m.length-1
if(k-0<=32)A.K3(m,0,k,l)
else A.K2(m,0,k,l)
B.b.K(r,m)
for(l=m.length,j=0;j<m.length;m.length===l||(0,A.Q)(m),++j){i=m[j]
if(i.at||i.as){k=J.cl(i)
if(q.a(A.J.prototype.gaJ.call(k,i))!=null){h=q.a(A.J.prototype.gaJ.call(k,i))
h=h.at||h.as}else h=!1
if(h){q.a(A.J.prototype.gaJ.call(k,i)).hW()
i.CW=!1}}}}B.b.dl(r,new A.a5_())
$.a4E.toString
g=new A.a51(A.a([],t.fr))
for(q=r.length,j=0;j<r.length;r.length===q||(0,A.Q)(r),++j){i=r[j]
if(i.CW&&i.b!=null)i.R5(g,s)}e.X(0)
for(e=A.jk(s,s.r),q=A.m(e).c;e.q();){p=e.d
$.akv.j(0,p==null?q.a(p):p).toString}f.a.$1(new A.JM(g.a))
f.aA()},
TE(a,b){var s,r={},q=r.a=this.c.j(0,a)
if(q!=null)s=(q.at||q.as)&&!q.cx.T(0,b)
else s=!1
if(s)q.xk(new A.a4X(r,b))
s=r.a
if(s==null||!s.cx.T(0,b))return null
return r.a.cx.j(0,b)},
a4w(a,b,c){var s=this.TE(a,b)
if(s!=null){s.$1(c)
return}if(b===B.Ue&&this.c.j(0,a).f!=null)this.c.j(0,a).f.$0()},
i(a){return"<optimized out>#"+A.bK(this)}}
A.a4Y.prototype={
$1(a){return!this.a.d.B(0,a)},
$S:61}
A.a4Z.prototype={
$2(a,b){return a.a-b.a},
$S:62}
A.a5_.prototype={
$2(a,b){return a.a-b.a},
$S:62}
A.a4X.prototype={
$1(a){if(a.cx.T(0,this.b)){this.a.a=a
return!1}return!0},
$S:61}
A.a4F.prototype={
jF(a,b){var s=this
s.e.l(0,a,b)
s.f=s.f|a.a
s.d=!0},
e_(a,b){this.jF(a,new A.a4G(b))},
sjk(a){a.toString
this.e_(B.dQ,a)},
skr(a){a.toString
this.e_(B.Be,a)},
stz(a){this.e_(B.dT,a)},
stx(a){this.e_(B.Uf,a)},
stA(a){this.e_(B.dU,a)},
stB(a){this.e_(B.dR,a)},
sty(a){this.e_(B.dS,a)},
szM(a){this.e_(B.Bf,a)},
szD(a){this.e_(B.Bd,a)},
szA(a,b){this.e_(B.Uh,b)},
szB(a,b){this.e_(B.Ul,b)},
szU(a,b){this.e_(B.Ub,b)},
szS(a){this.jF(B.Ui,new A.a4J(a))},
szQ(a){this.jF(B.U9,new A.a4H(a))},
szT(a){this.jF(B.Uj,new A.a4K(a))},
szR(a){this.jF(B.Ua,new A.a4I(a))},
szX(a){this.jF(B.Uc,new A.a4L(a))},
szY(a){this.jF(B.Ud,new A.a4M(a))},
szE(a){this.e_(B.Ug,a)},
szF(a){this.e_(B.Uk,a)},
sMh(a){return},
sMi(a){if(a==this.k3)return
this.k3=a
this.d=!0},
szn(a){return},
sy4(a){return},
si3(a,b){if(b===this.x2)return
this.x2=b
this.d=!0},
Hm(a){var s=this.ad;(s==null?this.ad=A.b6(t.xJ):s).C(0,a)},
b6(a,b){var s=this,r=s.aV,q=a.a
if(b)s.aV=r|q
else s.aV=r&~q
s.d=!0},
JK(a){var s,r=this
if(a==null||!a.d||!r.d)return!0
if((r.f&a.f)!==0)return!1
if((r.aV&a.aV)!==0)return!1
if(r.R8.a.length!==0)s=a.R8.a.length!==0
else s=!1
if(s)return!1
return!0},
jU(a){var s,r,q=this
if(!a.d)return
q.e.K(0,a.e)
q.p3.K(0,a.p3)
q.f=q.f|a.f
q.aV=q.aV|a.aV
q.y2=a.y2
if(q.an==null)q.an=a.an
if(q.aq==null)q.aq=a.aq
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
q.p4=A.aeG(a.p4,a.y1,r,s)
s=q.R8
if(s.a==="")q.R8=a.R8
s=q.RG
if(s.a==="")q.RG=a.RG
s=q.rx
if(s.a==="")q.rx=a.rx
s=q.ry
r=q.y1
q.ry=A.aeG(a.ry,a.y1,s,r)
if(q.to==="")q.to=a.to
q.xr=Math.max(q.xr,a.xr+a.x2)
q.d=q.d||a.d},
a0r(){var s=this,r=A.pg()
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
r.aV=s.aV
r.ad=s.ad
r.y2=s.y2
r.an=s.an
r.aq=s.aq
r.ak=s.ak
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
A.a4G.prototype={
$1(a){this.a.$0()},
$S:7}
A.a4J.prototype={
$1(a){a.toString
this.a.$1(A.nh(a))},
$S:7}
A.a4H.prototype={
$1(a){a.toString
this.a.$1(A.nh(a))},
$S:7}
A.a4K.prototype={
$1(a){a.toString
this.a.$1(A.nh(a))},
$S:7}
A.a4I.prototype={
$1(a){a.toString
this.a.$1(A.nh(a))},
$S:7}
A.a4L.prototype={
$1(a){var s,r,q
a.toString
s=J.agK(t.G.a(a),t.N,t.S)
r=s.j(0,"base")
r.toString
q=s.j(0,"extent")
q.toString
this.a.$1(A.a8b(B.C,r,q,!1))},
$S:7}
A.a4M.prototype={
$1(a){a.toString
this.a.$1(A.bC(a))},
$S:7}
A.D8.prototype={
F(){return"DebugSemanticsDumpOrder."+this.b}}
A.ph.prototype={
b2(a,b){var s=this.a1q(b)
return s},
$ibF:1}
A.va.prototype={
a1q(a){var s=a.b===this.b
if(s)return 0
return B.f.b2(this.b,a.b)}}
A.PL.prototype={}
A.PN.prototype={}
A.PO.prototype={}
A.a4O.prototype={
Lc(a){var s=A.aV(["type",this.a,"data",this.pr()],t.N,t.z)
if(a!=null)s.l(0,"nodeId",a)
return s},
a5E(){return this.Lc(null)},
i(a){var s,r,q,p=A.a([],t.s),o=this.pr(),n=J.ak2(o.gbn(o))
B.b.hO(n)
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.Q)(n),++r){q=n[r]
p.push(A.h(q)+": "+A.h(o.j(0,q)))}return"SemanticsEvent("+B.b.ba(p,", ")+")"}}
A.a8i.prototype={
pr(){return A.aV(["message",this.b],t.N,t.z)}}
A.a_V.prototype={
pr(){return B.zj}}
A.a7F.prototype={
pr(){return B.zj}}
A.Ax.prototype={
kn(a,b){return this.a3U(a,!0)},
a3U(a,b){var s=0,r=A.a4(t.N),q,p=this,o
var $async$kn=A.a0(function(c,d){if(c===1)return A.a1(d,r)
while(true)switch(s){case 0:s=3
return A.a5(p.cN(0,a),$async$kn)
case 3:o=d
if(o.byteLength<51200){q=B.a9.e6(0,A.cS(o.buffer,0,null))
s=1
break}q=A.Sv(A.aA0(),o,'UTF8 decode for "'+a+'"',t.B6,t.N)
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$kn,r)},
i(a){return"<optimized out>#"+A.bK(this)+"()"}}
A.TZ.prototype={
kn(a,b){return this.MY(a,!0)},
a3V(a,b,c){var s,r={},q=this.b
if(q.T(0,a)){r=q.j(0,a)
r.toString
return c.h("ah<0>").a(r)}r.a=r.b=null
this.kn(a,!1).aZ(b,c).aZ(new A.U_(r,this,a,c),t.H)
s=r.a
if(s!=null)return s
s=new A.a7($.a9,c.h("a7<0>"))
r.b=new A.aY(s,c.h("aY<0>"))
q.l(0,a,s)
return r.b.a}}
A.U_.prototype={
$1(a){var s=this,r=new A.bl(a,s.d.h("bl<0>")),q=s.a
q.a=r
s.b.b.l(0,s.c,r)
q=q.b
if(q!=null)q.cb(0,a)},
$S(){return this.d.h("az(0)")}}
A.a1M.prototype={
cN(a,b){var s,r=B.cd.e5(A.ang(A.Rb(B.i2,b,B.a9,!1)).e),q=$.h3.be$
q===$&&A.b()
s=q.ul(0,"flutter/assets",A.kb(r.buffer,0,null)).aZ(new A.a1N(b),t.B6)
return s},
tk(a){return this.a3S(a)},
a3S(a){var s=0,r=A.a4(t.gG),q,p=this,o
var $async$tk=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:s=3
return A.a5(p.cN(0,a),$async$tk)
case 3:o=c
q=A.a_1(A.cS(o.buffer,0,null))
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$tk,r)}}
A.a1N.prototype={
$1(a){if(a==null)throw A.c(A.ahm(A.a([A.az_(this.a),A.bi("The asset does not exist or has empty data.")],t.F)))
return a},
$S:241}
A.Tq.prototype={}
A.pi.prototype={
ox(){var s=$.SJ()
s.a.X(0)
s.b.X(0)},
j8(a){return this.a2C(a)},
a2C(a){var s=0,r=A.a4(t.H),q,p=this
var $async$j8=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:switch(A.bC(J.aM(t.a.a(a),"type"))){case"memoryPressure":p.ox()
break}s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$j8,r)},
R0(){var s=A.b4("controller")
s.sc_(A.pq(null,new A.a54(s),null,!1,t.xe))
return J.arr(s.aC())},
a4Q(){if(this.r$!=null)return
$.aL()
var s=A.ame("AppLifecycleState.resumed")
if(s!=null)this.t_(s)},
w1(a){return this.UG(a)},
UG(a){var s=0,r=A.a4(t.dR),q,p=this,o
var $async$w1=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:a.toString
o=A.ame(a)
o.toString
p.t_(o)
q=null
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$w1,r)},
w2(a){return this.UP(a)},
UP(a){var s=0,r=A.a4(t.H)
var $async$w2=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:t.j.a(a.b)
return A.a2(null,r)}})
return A.a3($async$w2,r)},
$idw:1}
A.a54.prototype={
$0(){var s=0,r=A.a4(t.H),q=this,p,o,n
var $async$$0=A.a0(function(a,b){if(a===1)return A.a1(b,r)
while(true)switch(s){case 0:o=A.b4("rawLicenses")
n=o
s=2
return A.a5($.SJ().kn("NOTICES",!1),$async$$0)
case 2:n.sc_(b)
p=q.a
n=J
s=3
return A.a5(A.Sv(A.aA6(),o.aC(),"parseLicenses",t.N,t.rh),$async$$0)
case 3:n.nr(b,J.arn(p.aC()))
s=4
return A.a5(J.ajY(p.aC()),$async$$0)
case 4:return A.a2(null,r)}})
return A.a3($async$$0,r)},
$S:56}
A.a9V.prototype={
ul(a,b,c){var s=new A.a7($.a9,t.sB)
$.aL().Yv(b,c,A.att(new A.a9W(new A.aY(s,t.BB))))
return s},
Bx(a,b){if(b==null){a=$.SH().a.j(0,a)
if(a!=null)a.e=null}else $.SH().Mw(a,new A.a9X(b))}}
A.a9W.prototype={
$1(a){var s,r,q,p
try{this.a.cb(0,a)}catch(q){s=A.ag(q)
r=A.ay(q)
p=A.bi("during a platform message response callback")
A.dK(new A.bx(s,r,"services library",p,null,!1))}},
$S:21}
A.a9X.prototype={
$2(a,b){return this.LH(a,b)},
LH(a,b){var s=0,r=A.a4(t.H),q=1,p,o=[],n=this,m,l,k,j,i,h
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
m=A.ag(h)
l=A.ay(h)
j=A.bi("during a platform message callback")
A.dK(new A.bx(m,l,"services library",j,null,!1))
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
$S:245}
A.WW.prototype={}
A.Wh.prototype={}
A.Wq.prototype={}
A.DC.prototype={}
A.WY.prototype={}
A.DA.prototype={}
A.Wy.prototype={}
A.VN.prototype={}
A.Wz.prototype={}
A.DI.prototype={}
A.Dy.prototype={}
A.DF.prototype={}
A.DS.prototype={}
A.Wm.prototype={}
A.WE.prototype={}
A.VW.prototype={}
A.W9.prototype={}
A.Vx.prototype={}
A.W_.prototype={}
A.DN.prototype={}
A.Vz.prototype={}
A.WJ.prototype={}
A.ov.prototype={}
A.k4.prototype={}
A.lZ.prototype={}
A.k5.prototype={}
A.u9.prototype={}
A.Zd.prototype={
St(a){var s,r,q,p,o,n,m,l,k,j
this.d=!0
s=!1
for(n=this.c,m=0;!1;++m){r=n[m]
try{q=r.$1(a)
s=s||q}catch(l){p=A.ag(l)
o=A.ay(l)
k=A.bi("while processing a key handler")
j=$.fA()
if(j!=null)j.$1(new A.bx(p,o,"services library",k,null,!1))}}this.d=!1
return s},
Jc(a){var s,r,q=this,p=a.a,o=a.b
if(a instanceof A.lZ){q.a.l(0,p,o)
s=$.apz().j(0,o.a)
if(s!=null){r=q.b
if(r.B(0,s))r.v(0,s)
else r.C(0,s)}}else if(a instanceof A.k5)q.a.v(0,p)
return q.St(a)}}
A.u7.prototype={
F(){return"KeyDataTransitMode."+this.b}}
A.u8.prototype={
i(a){return"KeyMessage("+A.h(this.a)+")"}}
A.Fc.prototype={
a2f(a){var s,r=this,q=r.d
switch((q==null?r.d=B.GA:q).a){case 0:return!1
case 1:if(a.c===0&&a.d===0)return!1
s=A.auh(a)
if(a.f&&r.e.length===0){r.b.Jc(s)
r.DN(A.a([s],t.DG),null)}else r.e.push(s)
return!1}},
DN(a,b){var s,r,q,p,o=this.a
if(o!=null){s=new A.u8(a,b)
try{o=o.$1(s)
return o}catch(p){r=A.ag(p)
q=A.ay(p)
o=A.bi("while processing the key message handler")
A.dK(new A.bx(r,q,"services library",o,null,!1))}}return!1},
yS(a){var s=0,r=A.a4(t.a),q,p=this,o,n,m,l,k,j,i
var $async$yS=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:if(p.d==null){p.d=B.Gz
p.c.a.push(p.gS8())}o=A.avV(t.a.a(a))
if(o instanceof A.hV){n=o.c
m=p.f
if(!n.MH()){m.C(0,n.gdC())
l=!1}else{m.v(0,n.gdC())
l=!0}}else if(o instanceof A.oW){n=p.f
m=o.c
if(n.B(0,m.gdC())){n.v(0,m.gdC())
l=!1}else l=!0}else l=!0
if(l){p.c.a2w(o)
for(n=p.e,m=n.length,k=p.b,j=!1,i=0;i<n.length;n.length===m||(0,A.Q)(n),++i)j=k.Jc(n[i])||j
j=p.DN(n,o)||j
B.b.X(n)}else j=!0
q=A.aV(["handled",j],t.N,t.z)
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$yS,r)},
S9(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.c,d=e.gdC(),c=e.goM()
e=this.b.a
s=A.m(e).h("b8<1>")
r=A.k8(new A.b8(e,s),s.h("q.E"))
q=A.a([],t.DG)
p=e.j(0,d)
o=$.h3.dy$
n=a.a
if(n==="")n=f
if(a instanceof A.hV)if(p==null){m=new A.lZ(d,c,n,o,!1)
r.C(0,d)}else m=new A.u9(d,p,n,o,!1)
else if(p==null)m=f
else{m=new A.k5(d,p,f,o,!1)
r.v(0,d)}for(s=this.c.d,l=A.m(s).h("b8<1>"),k=l.h("q.E"),j=r.k8(A.k8(new A.b8(s,l),k)),j=j.ga8(j),i=this.e;j.q();){h=j.gG(j)
if(h.k(0,d))q.push(new A.k5(h,c,f,o,!0))
else{g=e.j(0,h)
g.toString
i.push(new A.k5(h,g,f,o,!0))}}for(e=A.k8(new A.b8(s,l),k).k8(r),e=e.ga8(e);e.q();){l=e.gG(e)
k=s.j(0,l)
k.toString
i.push(new A.lZ(l,k,f,o,!0))}if(m!=null)i.push(m)
B.b.K(i,q)}}
A.Nr.prototype={}
A.a_G.prototype={}
A.e.prototype={
gu(a){return B.f.gu(this.a)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.T(b)!==A.B(this))return!1
return b instanceof A.e&&b.a===this.a}}
A.j.prototype={
gu(a){return B.f.gu(this.a)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.T(b)!==A.B(this))return!1
return b instanceof A.j&&b.a===this.a}}
A.Ns.prototype={}
A.hI.prototype={
i(a){return"MethodCall("+this.a+", "+A.h(this.b)+")"}}
A.vr.prototype={
i(a){var s=this
return"PlatformException("+s.a+", "+A.h(s.b)+", "+A.h(s.c)+", "+A.h(s.d)+")"},
$ibP:1}
A.uM.prototype={
i(a){return"MissingPluginException("+A.h(this.a)+")"},
$ibP:1}
A.a7m.prototype={
eB(a){if(a==null)return null
return B.cS.e5(A.cS(a.buffer,a.byteOffset,a.byteLength))},
bP(a){if(a==null)return null
return A.kb(B.cd.e5(a).buffer,0,null)}}
A.a_e.prototype={
bP(a){if(a==null)return null
return B.hn.bP(B.bM.yv(a))},
eB(a){var s
if(a==null)return a
s=B.hn.eB(a)
s.toString
return B.bM.e6(0,s)}}
A.a_g.prototype={
fD(a){var s=B.bL.bP(A.aV(["method",a.a,"args",a.b],t.N,t.X))
s.toString
return s},
fB(a){var s,r,q,p=null,o=B.bL.eB(a)
if(!t.G.b(o))throw A.c(A.by("Expected method call Map, got "+A.h(o),p,p))
s=J.aF(o)
r=s.j(o,"method")
q=s.j(o,"args")
if(typeof r=="string")return new A.hI(r,q)
throw A.c(A.by("Invalid method call: "+A.h(o),p,p))},
Ib(a){var s,r,q,p=null,o=B.bL.eB(a)
if(!t.j.b(o))throw A.c(A.by("Expected envelope List, got "+A.h(o),p,p))
s=J.aF(o)
if(s.gp(o)===1)return s.j(o,0)
if(s.gp(o)===3)if(typeof s.j(o,0)=="string")r=s.j(o,1)==null||typeof s.j(o,1)=="string"
else r=!1
else r=!1
if(r){r=A.bC(s.j(o,0))
q=A.cs(s.j(o,1))
throw A.c(A.ahT(r,s.j(o,2),q,p))}if(s.gp(o)===4)if(typeof s.j(o,0)=="string")if(s.j(o,1)==null||typeof s.j(o,1)=="string")r=s.j(o,3)==null||typeof s.j(o,3)=="string"
else r=!1
else r=!1
else r=!1
if(r){r=A.bC(s.j(o,0))
q=A.cs(s.j(o,1))
throw A.c(A.ahT(r,s.j(o,2),q,A.cs(s.j(o,3))))}throw A.c(A.by("Invalid envelope: "+A.h(o),p,p))},
og(a){var s=B.bL.bP([a])
s.toString
return s},
kb(a,b,c){var s=B.bL.bP([a,c,b])
s.toString
return s},
IC(a,b){return this.kb(a,null,b)}}
A.a75.prototype={
bP(a){var s
if(a==null)return null
s=A.a8V(64)
this.cO(0,s,a)
return s.iS()},
eB(a){var s,r
if(a==null)return null
s=new A.vA(a)
r=this.fb(0,s)
if(s.b<a.byteLength)throw A.c(B.aD)
return r},
cO(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i=null
if(c==null)b.d8(0,0)
else if(A.kW(c))b.d8(0,c?1:2)
else if(typeof c=="number"){b.d8(0,6)
b.h4(8)
s=$.cP()
b.d.setFloat64(0,c,B.a8===s)
b.QS(b.e)}else if(A.nj(c)){s=-2147483648<=c&&c<=2147483647
r=b.d
if(s){b.d8(0,3)
s=$.cP()
r.setInt32(0,c,B.a8===s)
b.mZ(b.e,0,4)}else{b.d8(0,4)
s=$.cP()
B.fs.Bv(r,0,c,s)}}else if(typeof c=="string"){b.d8(0,7)
s=c.length
q=new Uint8Array(s)
n=0
while(!0){if(!(n<s)){p=i
o=0
break}m=B.c.a_(c,n)
if(m<=127)q[n]=m
else{p=B.cd.e5(B.c.bN(c,n))
o=n
break}++n}if(p!=null){j.dX(b,o+p.length)
l=q.BYTES_PER_ELEMENT
k=A.d7(0,o,B.f.h3(q.byteLength,l),i,i)
b.jG(A.cS(q.buffer,q.byteOffset+0*l,(k-0)*l))
b.jG(p)}else{j.dX(b,s)
b.jG(q)}}else if(t.uo.b(c)){b.d8(0,8)
j.dX(b,c.length)
b.jG(c)}else if(t.fO.b(c)){b.d8(0,9)
s=c.length
j.dX(b,s)
b.h4(4)
b.jG(A.cS(c.buffer,c.byteOffset,4*s))}else if(t.D4.b(c)){b.d8(0,14)
s=c.length
j.dX(b,s)
b.h4(4)
b.jG(A.cS(c.buffer,c.byteOffset,4*s))}else if(t.cE.b(c)){b.d8(0,11)
s=c.length
j.dX(b,s)
b.h4(8)
b.jG(A.cS(c.buffer,c.byteOffset,8*s))}else if(t.j.b(c)){b.d8(0,12)
s=J.aF(c)
j.dX(b,s.gp(c))
for(s=s.ga8(c);s.q();)j.cO(0,b,s.gG(s))}else if(t.G.b(c)){b.d8(0,13)
s=J.aF(c)
j.dX(b,s.gp(c))
s.Z(c,new A.a76(j,b))}else throw A.c(A.hh(c,i,i))},
fb(a,b){if(b.b>=b.a.byteLength)throw A.c(B.aD)
return this.im(b.kE(0),b)},
im(a,b){var s,r,q,p,o,n,m,l,k=this
switch(a){case 0:return null
case 1:return!0
case 2:return!1
case 3:s=b.b
r=$.cP()
q=b.a.getInt32(s,B.a8===r)
b.b+=4
return q
case 4:return b.uc(0)
case 6:b.h4(8)
s=b.b
r=$.cP()
q=b.a.getFloat64(s,B.a8===r)
b.b+=8
return q
case 5:case 7:p=k.di(b)
return B.cS.e5(b.kF(p))
case 8:return b.kF(k.di(b))
case 9:p=k.di(b)
b.h4(4)
s=b.a
o=A.aly(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+4*p
return o
case 10:return b.ud(k.di(b))
case 14:p=k.di(b)
b.h4(4)
s=b.a
r=s.buffer
s=s.byteOffset+b.b
A.Sk(r,s,p)
o=new Float32Array(r,s,p)
b.b=b.b+4*p
return o
case 11:p=k.di(b)
b.h4(8)
s=b.a
o=A.alw(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+8*p
return o
case 12:p=k.di(b)
n=A.b_(p,null,!1,t.X)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.X(B.aD)
b.b=r+1
n[m]=k.im(s.getUint8(r),b)}return n
case 13:p=k.di(b)
s=t.X
n=A.y(s,s)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.X(B.aD)
b.b=r+1
r=k.im(s.getUint8(r),b)
l=b.b
if(l>=s.byteLength)A.X(B.aD)
b.b=l+1
n.l(0,r,k.im(s.getUint8(l),b))}return n
default:throw A.c(B.aD)}},
dX(a,b){var s,r
if(b<254)a.d8(0,b)
else{s=a.d
if(b<=65535){a.d8(0,254)
r=$.cP()
s.setUint16(0,b,B.a8===r)
a.mZ(a.e,0,2)}else{a.d8(0,255)
r=$.cP()
s.setUint32(0,b,B.a8===r)
a.mZ(a.e,0,4)}}},
di(a){var s,r,q=a.kE(0)
switch(q){case 254:s=a.b
r=$.cP()
q=a.a.getUint16(s,B.a8===r)
a.b+=2
return q
case 255:s=a.b
r=$.cP()
q=a.a.getUint32(s,B.a8===r)
a.b+=4
return q
default:return q}}}
A.a76.prototype={
$2(a,b){var s=this.a,r=this.b
s.cO(0,r,a)
s.cO(0,r,b)},
$S:71}
A.a79.prototype={
fD(a){var s=A.a8V(64)
B.ag.cO(0,s,a.a)
B.ag.cO(0,s,a.b)
return s.iS()},
fB(a){var s,r,q
a.toString
s=new A.vA(a)
r=B.ag.fb(0,s)
q=B.ag.fb(0,s)
if(typeof r=="string"&&s.b>=a.byteLength)return new A.hI(r,q)
else throw A.c(B.nC)},
og(a){var s=A.a8V(64)
s.d8(0,0)
B.ag.cO(0,s,a)
return s.iS()},
kb(a,b,c){var s=A.a8V(64)
s.d8(0,1)
B.ag.cO(0,s,a)
B.ag.cO(0,s,c)
B.ag.cO(0,s,b)
return s.iS()},
IC(a,b){return this.kb(a,null,b)},
Ib(a){var s,r,q,p,o,n
if(a.byteLength===0)throw A.c(B.G8)
s=new A.vA(a)
if(s.kE(0)===0)return B.ag.fb(0,s)
r=B.ag.fb(0,s)
q=B.ag.fb(0,s)
p=B.ag.fb(0,s)
o=s.b<a.byteLength?A.cs(B.ag.fb(0,s)):null
if(typeof r=="string")n=(q==null||typeof q=="string")&&s.b>=a.byteLength
else n=!1
if(n)throw A.c(A.ahT(r,p,A.cs(q),o))
else throw A.c(B.G9)}}
A.a0B.prototype={
a26(a,b,c){var s,r,q,p
if(t.yg.b(b)){this.b.v(0,a)
return}s=this.b
r=s.j(0,a)
q=A.axq(c)
if(q==null)q=this.a
if(J.f(r==null?null:t.Ft.a(r.a),q))return
p=q.rm(a)
s.l(0,a,p)
B.Tk.fJ("activateSystemCursor",A.aV(["device",p.b,"kind",t.Ft.a(p.a).a],t.N,t.z),t.H)}}
A.uO.prototype={}
A.e3.prototype={
i(a){var s=this.gro()
return s}}
A.Mk.prototype={
rm(a){throw A.c(A.bZ(null))},
gro(){return"defer"}}
A.Qp.prototype={}
A.kw.prototype={
gro(){return"SystemMouseCursor("+this.a+")"},
rm(a){return new A.Qp(this,a)},
k(a,b){if(b==null)return!1
if(J.T(b)!==A.B(this))return!1
return b instanceof A.kw&&b.a===this.a},
gu(a){return B.c.gu(this.a)}}
A.NX.prototype={}
A.jH.prototype={
gnL(){var s,r=$.h3.be$
r===$&&A.b()
s=r
return s},
eg(a,b){return this.Mn(0,b,this.$ti.h("1?"))},
Mn(a,b,c){var s=0,r=A.a4(c),q,p=this,o,n
var $async$eg=A.a0(function(d,e){if(d===1)return A.a1(e,r)
while(true)switch(s){case 0:o=p.b
n=o
s=3
return A.a5(p.gnL().ul(0,p.a,o.bP(b)),$async$eg)
case 3:q=n.eB(e)
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$eg,r)},
us(a){this.gnL().Bx(this.a,new A.To(this,a))}}
A.To.prototype={
$1(a){return this.LB(a)},
LB(a){var s=0,r=A.a4(t.yD),q,p=this,o,n
var $async$$1=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:o=p.a.b
n=o
s=3
return A.a5(p.b.$1(o.eB(a)),$async$$1)
case 3:q=n.bP(c)
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$$1,r)},
$S:95}
A.uL.prototype={
gnL(){var s,r=$.h3.be$
r===$&&A.b()
s=r
return s},
nf(a,b,c,d){return this.VU(a,b,c,d,d.h("0?"))},
VU(a,b,c,d,e){var s=0,r=A.a4(e),q,p=this,o,n,m,l
var $async$nf=A.a0(function(f,g){if(f===1)return A.a1(g,r)
while(true)switch(s){case 0:o=p.b
n=o.fD(new A.hI(a,b))
m=p.a
s=3
return A.a5(p.gnL().ul(0,m,n),$async$nf)
case 3:l=g
if(l==null){if(c){q=null
s=1
break}throw A.c(A.auQ("No implementation found for method "+a+" on channel "+m))}q=d.h("0?").a(o.Ib(l))
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$nf,r)},
mH(a){var s=this.gnL()
s.Bx(this.a,new A.a0o(this,a))},
q5(a,b){return this.TS(a,b)},
TS(a,b){var s=0,r=A.a4(t.yD),q,p=2,o,n=this,m,l,k,j,i,h,g,f,e
var $async$q5=A.a0(function(c,d){if(c===1){o=d
s=p}while(true)switch(s){case 0:h=n.b
g=h.fB(a)
p=4
e=h
s=7
return A.a5(b.$1(g),$async$q5)
case 7:k=e.og(d)
q=k
s=1
break
p=2
s=6
break
case 4:p=3
f=o
k=A.ag(f)
if(k instanceof A.vr){m=k
k=m.a
i=m.b
q=h.kb(k,m.c,i)
s=1
break}else if(k instanceof A.uM){q=null
s=1
break}else{l=k
h=h.IC("error",J.dH(l))
q=h
s=1
break}s=6
break
case 3:s=2
break
case 6:case 1:return A.a2(q,r)
case 2:return A.a1(o,r)}})
return A.a3($async$q5,r)}}
A.a0o.prototype={
$1(a){return this.a.q5(a,this.b)},
$S:95}
A.ke.prototype={
fJ(a,b,c){return this.a3q(a,b,c,c.h("0?"))},
te(a,b){return this.fJ(a,null,b)},
a3q(a,b,c,d){var s=0,r=A.a4(d),q,p=this
var $async$fJ=A.a0(function(e,f){if(e===1)return A.a1(f,r)
while(true)switch(s){case 0:q=p.NL(a,b,!0,c)
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$fJ,r)}}
A.k6.prototype={
F(){return"KeyboardSide."+this.b}}
A.em.prototype={
F(){return"ModifierKey."+this.b}}
A.vy.prototype={
ga4a(){var s,r,q,p=A.y(t.BK,t.FD)
for(s=0;s<9;++s){r=B.oo[s]
if(this.a3v(r)){q=this.LW(r)
if(q!=null)p.l(0,r,q)}}return p},
MH(){return!0}}
A.h_.prototype={}
A.a2n.prototype={
$0(){var s,r,q,p=this.b,o=J.aF(p),n=A.cs(o.j(p,"key")),m=n==null
if(!m){s=n.length
s=s!==0&&s===1}else s=!1
if(s)this.a.a=n
s=A.cs(o.j(p,"code"))
if(s==null)s=""
m=m?"":n
r=A.ni(o.j(p,"location"))
if(r==null)r=0
q=A.ni(o.j(p,"metaState"))
if(q==null)q=0
p=A.ni(o.j(p,"keyCode"))
return new A.oV(s,m,r,q,p==null?0:p)},
$S:249}
A.hV.prototype={}
A.oW.prototype={}
A.a2s.prototype={
a2w(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(a instanceof A.hV){p=a.c
i.d.l(0,p.gdC(),p.goM())}else if(a instanceof A.oW)i.d.v(0,a.c.gdC())
i.Z1(a)
for(p=i.a,o=A.aA(p,!0,t.vc),n=o.length,m=0;m<n;++m){s=o[m]
try{if(B.b.B(p,s))s.$1(a)}catch(l){r=A.ag(l)
q=A.ay(l)
k=A.bi("while processing a raw key listener")
j=$.fA()
if(j!=null)j.$1(new A.bx(r,q,"services library",k,null,!1))}}return!1},
Z1(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=a1.c,f=g.ga4a(),e=t.F3,d=A.y(e,t.lT),c=A.b6(e),b=this.d,a=A.k8(new A.b8(b,A.m(b).h("b8<1>")),e),a0=a1 instanceof A.hV
if(a0)a.C(0,g.gdC())
for(s=null,r=0;r<9;++r){q=B.oo[r]
p=$.apC()
o=p.j(0,new A.c5(q,B.bc))
if(o==null)continue
if(o.B(0,g.gdC()))s=q
if(f.j(0,q)===B.cm){c.K(0,o)
if(o.jW(0,a.giP(a)))continue}n=f.j(0,q)==null?A.b6(e):p.j(0,new A.c5(q,f.j(0,q)))
if(n==null)continue
for(p=new A.qi(n,n.r),p.c=n.e,m=A.m(p).c;p.q();){l=p.d
if(l==null)l=m.a(l)
k=$.apB().j(0,l)
k.toString
d.l(0,l,k)}}e=g instanceof A.a2l
j=(e||g instanceof A.oV)&&b.j(0,B.bE)!=null&&!J.f(b.j(0,B.bE),B.dq)
for(a=$.agC(),a=A.iP(a,a.r);a.q();){p=a.d
i=j&&p.k(0,B.bE)
if(!c.B(0,p)&&!i)b.v(0,p)}if(!(g instanceof A.a2j)&&!(g instanceof A.a2m))b.v(0,B.dG)
b.K(0,d)
if(a0&&s!=null&&!b.T(0,g.gdC())){if(e&&g.gdC().k(0,B.bF)||g instanceof A.a2k||g instanceof A.a2i){h=$.agC().j(0,g.gdC())
if(h!=null)b.l(0,g.gdC(),h)}if(g instanceof A.oV&&g.gdC().k(0,B.bF))b.l(0,g.gdC(),g.goM())}}}
A.c5.prototype={
k(a,b){if(b==null)return!1
if(J.T(b)!==A.B(this))return!1
return b instanceof A.c5&&b.a===this.a&&b.b==this.b},
gu(a){return A.V(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.P4.prototype={}
A.P3.prototype={}
A.a2i.prototype={}
A.a2j.prototype={}
A.a2k.prototype={}
A.a2l.prototype={}
A.a2m.prototype={}
A.oV.prototype={
gdC(){var s=this.a,r=B.ST.j(0,s)
return r==null?new A.j(98784247808+B.c.gu(s)):r},
goM(){var s,r=this.b,q=B.SV.j(0,r),p=q==null?null:q[this.c]
if(p!=null)return p
s=B.SS.j(0,r)
if(s!=null)return s
if(r.length===1)return new A.e(B.c.a_(r.toLowerCase(),0))
return new A.e(B.c.gu(this.a)+98784247808)},
a3v(a){var s=this
switch(a.a){case 0:return(s.d&4)!==0
case 1:return(s.d&1)!==0
case 2:return(s.d&2)!==0
case 3:return(s.d&8)!==0
case 5:return(s.d&16)!==0
case 4:return(s.d&32)!==0
case 6:return(s.d&64)!==0
case 7:case 8:return!1}},
LW(a){return B.cm},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.T(b)!==A.B(s))return!1
return b instanceof A.oV&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e},
gu(a){var s=this
return A.V(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.vR.prototype={
ga5o(){var s=this
if(s.c)return new A.bl(s.a,t.m6)
if(s.b==null){s.b=new A.aY(new A.a7($.a9,t.jr),t.Fj)
s.q4()}return s.b.a},
q4(){var s=0,r=A.a4(t.H),q,p=this,o
var $async$q4=A.a0(function(a,b){if(a===1)return A.a1(b,r)
while(true)switch(s){case 0:s=3
return A.a5(B.ix.te("get",t.mE),$async$q4)
case 3:o=b
if(p.b==null){s=1
break}p.Fk(o)
case 1:return A.a2(q,r)}})
return A.a3($async$q4,r)},
Fk(a){var s,r=a==null
if(!r){s=J.aM(a,"enabled")
s.toString
A.nh(s)}else s=!1
this.a2y(r?null:t.Fx.a(J.aM(a,"data")),s)},
a2y(a,b){var s,r,q=this,p=q.c&&b
q.d=p
if(p)$.bM.ax$.push(new A.a3p(q))
s=q.a
if(b){p=q.Sl(a)
r=t.N
if(p==null){p=t.X
p=A.y(p,p)}r=new A.cq(p,q,null,"root",A.y(r,t.hp),A.y(r,t.Cm))
p=r}else p=null
q.a=p
q.c=!0
r=q.b
if(r!=null)r.cb(0,p)
q.b=null
if(q.a!=s){q.aA()
if(s!=null)s.m()}},
wm(a){return this.Wo(a)},
Wo(a){var s=0,r=A.a4(t.H),q=this,p
var $async$wm=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:p=a.a
switch(p){case"push":q.Fk(t.mE.a(a.b))
break
default:throw A.c(A.bZ(p+" was invoked but isn't implemented by "+A.B(q).i(0)))}return A.a2(null,r)}})
return A.a3($async$wm,r)},
Sl(a){if(a==null)return null
return t.ym.a(B.ag.eB(A.kb(a.buffer,a.byteOffset,a.byteLength)))},
Mf(a){var s=this
s.r.C(0,a)
if(!s.f){s.f=!0
$.bM.ax$.push(new A.a3q(s))}},
DP(){var s,r,q,p,o,n=this
if(!n.f)return
n.f=!1
for(s=n.r,r=A.jk(s,s.r),q=A.m(r).c;r.q();){p=r.d;(p==null?q.a(p):p).w=!1}s.X(0)
o=B.ag.bP(n.a.a)
B.ix.fJ("put",A.cS(o.buffer,o.byteOffset,o.byteLength),t.H)},
IY(){if($.bM.ch$)return
this.DP()}}
A.a3p.prototype={
$1(a){this.a.d=!1},
$S:2}
A.a3q.prototype={
$1(a){return this.a.DP()},
$S:2}
A.cq.prototype={
gnn(){var s=J.Al(this.a,"c",new A.a3m())
s.toString
return t.mE.a(s)},
giF(){var s=J.Al(this.a,"v",new A.a3n())
s.toString
return t.mE.a(s)},
a4Z(a,b,c){var s=this,r=J.dX(s.giF(),b),q=c.h("0?").a(J.iu(s.giF(),b))
if(J.fB(s.giF()))J.iu(s.a,"v")
if(r)s.la()
return q},
a_S(a,b){var s,r,q,p,o=this,n=o.f
if(n.T(0,a)||!J.dX(o.gnn(),a)){n=t.N
s=new A.cq(A.y(n,t.X),null,null,a,A.y(n,t.hp),A.y(n,t.Cm))
o.hX(s)
return s}r=t.N
q=o.c
p=J.aM(o.gnn(),a)
p.toString
s=new A.cq(t.mE.a(p),q,o,a,A.y(r,t.hp),A.y(r,t.Cm))
n.l(0,a,s)
return s},
hX(a){var s=this,r=a.d
if(r!==s){if(r!=null)r.qv(a)
a.d=s
s.CF(a)
if(a.c!=s.c)s.Fy(a)}},
SF(a){this.qv(a)
a.d=null
if(a.c!=null){a.wM(null)
a.Hb(this.gFx())}},
la(){var s,r=this
if(!r.w){r.w=!0
s=r.c
if(s!=null)s.Mf(r)}},
Fy(a){a.wM(this.c)
a.Hb(this.gFx())},
wM(a){var s=this,r=s.c
if(r==a)return
if(s.w)if(r!=null)r.r.v(0,s)
s.c=a
if(s.w&&a!=null){s.w=!1
s.la()}},
qv(a){var s,r,q,p=this
if(J.f(p.f.v(0,a.e),a)){J.iu(p.gnn(),a.e)
s=p.r
r=s.j(0,a.e)
if(r!=null){q=J.bJ(r)
p.DZ(q.fc(r))
if(q.gR(r))s.v(0,a.e)}if(J.fB(p.gnn()))J.iu(p.a,"c")
p.la()
return}s=p.r
q=s.j(0,a.e)
if(q!=null)J.iu(q,a)
q=s.j(0,a.e)
q=q==null?null:J.fB(q)
if(q===!0)s.v(0,a.e)},
CF(a){var s=this
if(s.f.T(0,a.e)){J.l8(s.r.bL(0,a.e,new A.a3l()),a)
s.la()
return}s.DZ(a)
s.la()},
DZ(a){this.f.l(0,a.e,a)
J.cA(this.gnn(),a.e,a.a)},
Hc(a,b){var s,r,q=this.f
q=q.gb_(q)
s=this.r
s=s.gb_(s)
r=q.a20(0,new A.iE(s,new A.a3o(),A.m(s).h("iE<q.E,cq>")))
J.nr(b?A.aA(r,!1,A.m(r).h("q.E")):r,a)},
Hb(a){return this.Hc(a,!1)},
a56(a){var s,r=this
if(a===r.e)return
s=r.d
if(s!=null)s.qv(r)
r.e=a
s=r.d
if(s!=null)s.CF(r)},
m(){var s,r=this
r.Hc(r.gSE(),!0)
r.f.X(0)
r.r.X(0)
s=r.d
if(s!=null)s.qv(r)
r.d=null
r.wM(null)
r.x=!0},
i(a){return"RestorationBucket(restorationId: "+this.e+", owner: "+A.h(this.b)+")"}}
A.a3m.prototype={
$0(){var s=t.X
return A.y(s,s)},
$S:112}
A.a3n.prototype={
$0(){var s=t.X
return A.y(s,s)},
$S:112}
A.a3l.prototype={
$0(){return A.a([],t.oy)},
$S:252}
A.a3o.prototype={
$1(a){return a},
$S:253}
A.T8.prototype={}
A.i2.prototype={
GB(){var s,r,q,p,o=this,n=o.a
n=n==null?null:n.a
s=o.e
s=s==null?null:s.a
r=o.f.F()
q=o.r.F()
p=o.c
p=p==null?null:p.F()
return A.aV(["systemNavigationBarColor",n,"systemNavigationBarDividerColor",null,"systemStatusBarContrastEnforced",o.w,"statusBarColor",s,"statusBarBrightness",r,"statusBarIconBrightness",q,"systemNavigationBarIconBrightness",p,"systemNavigationBarContrastEnforced",o.d],t.N,t.z)},
i(a){return"SystemUiOverlayStyle("+this.GB().i(0)+")"},
gu(a){var s=this
return A.V(s.a,s.b,s.d,s.e,s.f,s.r,s.w,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s,r=this
if(b==null)return!1
if(J.T(b)!==A.B(r))return!1
if(b instanceof A.i2)if(J.f(b.a,r.a))if(J.f(b.e,r.e))if(b.r===r.r)if(b.f===r.f)s=b.c==r.c
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.a7z.prototype={
$0(){if(!J.f($.px,$.aic)){B.c0.fJ("SystemChrome.setSystemUIOverlayStyle",$.px.GB(),t.H)
$.aic=$.px}$.px=null},
$S:0}
A.wM.prototype={
F(){return"SystemSoundType."+this.b}}
A.a7H.prototype={
U(a,b){return new A.ME(b,this)}}
A.Us.prototype={
fV(a){var s,r,q,p,o,n=a.a
if(n<=0)return B.cQ
s=this.a
r=s.length
if(n<=r)q=n===r&&a.b===B.C
else q=!0
if(q)return new A.b2(r,B.N)
switch(a.b.a){case 0:p=Math.min(n-1,r)
o=Math.min(n,r)
break
case 1:p=Math.min(n,r)
o=Math.min(n+1,r)
break
default:o=null
p=null}return new A.b2(A.amp(s,p,o).b,B.C)},
fW(a){var s,r,q,p,o,n=a.a
if(n>=0)s=n===0&&a.b===B.N
else s=!0
if(s)return B.cQ
s=this.a
r=s.length
if(n>=r)return new A.b2(r,B.N)
switch(a.b.a){case 0:q=Math.min(n-1,r)
p=Math.min(n,r)
break
case 1:q=Math.min(n,r)
p=Math.min(n+1,r)
break
default:p=null
q=null}o=A.amp(s,q,p)
return new A.b2(r-(o.a.length-o.c),B.N)}}
A.a8S.prototype={
fV(a){return new A.b2(this.a.b.mA(a).a,B.C)},
fW(a){return new A.b2(this.a.b.mA(a).b,B.N)}}
A.a_K.prototype={
fV(a){return new A.b2(this.a.B1(a).a,B.C)},
fW(a){return new A.b2(this.a.B1(a).b,B.N)}}
A.Vs.prototype={
fV(a){return B.cQ},
fW(a){return new A.b2(this.a.length,B.N)}}
A.a8Q.prototype={
fV(a){var s,r=a.a,q=this.a,p=q.length
if(r<=p)r=r===p&&a.b===B.C
else r=!0
if(r)a=new A.b2(p,B.N)
s=a.a
if(s<=0)return B.cQ
if(a.b===B.C&&!A.a88(B.c.ab(q,s)))return a
for(;--s,s>=0;)if(!A.a88(B.c.ab(q,s)))return new A.b2(s+1,B.N)
return B.cQ},
fW(a){var s,r=a.a,q=this.a,p=q.length
if(r>=p)return new A.b2(p,B.N)
if(r>=0)r=r===0&&a.b===B.N
else r=!0
if(r)a=B.cQ
s=a.a
if(a.b===B.N&&!A.a88(B.c.ab(q,s-1)))return a
for(;s<p;++s)if(!A.a88(B.c.ab(q,s)))return new A.b2(s,B.C)
return new A.b2(p,B.N)}}
A.ME.prototype={
fV(a){return this.a.fV(this.b.fV(a))},
fW(a){return this.a.fW(this.b.fW(a))}}
A.Iw.prototype={
D8(a){if(this.a)switch(a.b.a){case 0:return new A.b2(a.a,B.C)
case 1:return new A.b2(a.a+1,B.N)}else switch(a.b.a){case 0:return new A.b2(a.a-1,B.C)
case 1:return new A.b2(a.a,B.N)}},
fV(a){return this.D8(a)},
fW(a){return this.D8(a)}}
A.Ku.prototype={
i(a){var s,r,q=this,p=", isDirectional: "
if(!q.gkm())return"TextSelection.invalid"
s=""+q.c
r=""+q.f
return q.a===q.b?"TextSelection.collapsed(offset: "+s+", affinity: "+q.e.i(0)+p+r+")":"TextSelection(baseOffset: "+s+", extentOffset: "+q.d+p+r+")"},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof A.Ku))return!1
if(!r.gkm())return!b.gkm()
if(b.c===r.c)if(b.d===r.d)s=(r.a!==r.b||b.e===r.e)&&b.f===r.f
else s=!1
else s=!1
return s},
gu(a){var s,r=this
if(!r.gkm())return A.V(-B.f.gu(1),-B.f.gu(1),A.eN(B.C),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)
s=r.a===r.b?A.eN(r.e):A.eN(B.C)
return A.V(B.f.gu(r.c),B.f.gu(r.d),s,B.nM.gu(r.f),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.JF.prototype={
F(){return"SelectionChangedCause."+this.b}}
A.Ks.prototype={
gRE(){var s=this.c
s===$&&A.b()
return s},
qe(a){return this.Wa(a)},
Wa(a){var s=0,r=A.a4(t.z),q,p=2,o,n=this,m,l,k,j,i
var $async$qe=A.a0(function(b,c){if(b===1){o=c
s=p}while(true)switch(s){case 0:p=4
s=7
return A.a5(n.w7(a),$async$qe)
case 7:k=c
q=k
s=1
break
p=2
s=6
break
case 4:p=3
i=o
m=A.ag(i)
l=A.ay(i)
k=A.bi("during method call "+a.a)
A.dK(new A.bx(m,l,"services library",k,new A.a87(a),!1))
throw i
s=6
break
case 3:s=2
break
case 6:case 1:return A.a2(q,r)
case 2:return A.a1(o,r)}})
return A.a3($async$qe,r)},
w7(a){return this.Vv(a)},
Vv(a){var s=0,r=A.a4(t.z),q,p=this,o,n,m,l,k,j
var $async$w7=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:j=a.a
if(j==="TextInputClient.focusElement"){p.f.j(0,J.aM(t.j.a(a.b),0))
s=1
break}else if(j==="TextInputClient.requestElementsInRect"){o=J.l9(t.j.a(a.b),t.fY)
n=A.m(o).h("aH<Y.E,O>")
m=p.f
l=A.m(m).h("b8<1>")
k=l.h("dA<q.E,A<@>>")
q=A.aA(new A.dA(new A.aN(new A.b8(m,l),new A.a84(p,A.aA(new A.aH(o,new A.a85(),n),!0,n.h("bn.E"))),l.h("aN<q.E>")),new A.a86(p),k),!0,k.h("q.E"))
s=1
break}else if(j==="TextInputClient.scribbleInteractionBegan"){s=1
break}else if(j==="TextInputClient.scribbleInteractionFinished"){s=1
break}s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$w7,r)}}
A.a87.prototype={
$0(){var s=null
return A.a([A.hr("call",this.a,!0,B.aJ,s,!1,s,s,B.aq,s,!1,!0,!0,B.aX,s,t.fw)],t.F)},
$S:16}
A.a85.prototype={
$1(a){return a},
$S:255}
A.a84.prototype={
$1(a){this.a.f.j(0,a)
return!1},
$S:36}
A.a86.prototype={
$1(a){var s=this.a.f.j(0,a),r=s.gxM(s)
s=[a]
B.b.K(s,[r.ghv(r),r.gAB(r),r.gbh(r),r.gbK(r)])
return s},
$S:256}
A.wX.prototype={}
A.Op.prototype={}
A.RE.prototype={}
A.af0.prototype={
$1(a){this.a.sc_(a)
return!1},
$S:45}
A.aK.prototype={}
A.bk.prototype={
fs(a){this.b=a},
ie(a,b){this.gtf()
return!0},
gtf(){return!0},
rh(a){return!0},
ZT(a){var s=this.a
s.b=!0
s.a.push(a)
return null},
KL(a){return this.a.v(0,a)}}
A.ls.prototype={}
A.ll.prototype={
d_(a){return this.c.$1(a)}}
A.SR.prototype={
JF(a,b,c){if(a instanceof A.ls)return a.m9(b,c)
else return a.d_(b)}}
A.iv.prototype={
af(){return new A.xj(A.b6(t.nT),new A.H(),B.m)}}
A.ST.prototype={
$1(a){var s=a.f
s.toString
t.ke.a(s)
return!1},
$S:46}
A.SW.prototype={
$1(a){var s,r=this,q=a.f
q.toString
s=A.agS(t.ke.a(q),r.b,r.d)
if(s!=null){r.c.C1(a,null)
r.a.a=s
return!0}return!1},
$S:46}
A.SU.prototype={
$1(a){var s,r=a.f
r.toString
s=A.agS(t.ke.a(r),this.b,this.c)
if(s!=null){this.a.a=s
return!0}return!1},
$S:46}
A.SX.prototype={
$1(a){var s,r,q=this,p=a.f
p.toString
s=q.b
r=A.agS(t.ke.a(p),s,q.d)
p=r!=null
if(p&&r.ie(0,s))q.a.a=A.ak4(a).JF(r,s,q.c)
return p},
$S:46}
A.xj.prototype={
az(){this.aN()
this.GI()},
TK(a){this.au(new A.a8Z(this))},
GI(){var s,r,q,p,o=this,n=o.a.d
n=n.gb_(n)
s=A.k8(n,A.m(n).h("q.E"))
r=o.d.k8(s)
n=o.d
n.toString
q=s.k8(n)
for(n=r.ga8(r),p=o.gEk();n.q();)n.gG(n).KL(p)
for(n=q.ga8(q);n.q();)n.gG(n).ZT(p)
o.d=s},
aS(a){this.bf(a)
this.GI()},
m(){var s,r,q,p,o=this
o.aL()
for(s=o.d,s=A.jk(s,s.r),r=o.gEk(),q=A.m(s).c;s.q();){p=s.d;(p==null?q.a(p):p).KL(r)}o.d=null},
L(a){var s=this.a
return new A.xi(null,s.d,this.e,s.e,null)}}
A.a8Z.prototype={
$0(){this.a.e=new A.H()},
$S:0}
A.xi.prototype={
bX(a){var s
if(this.w===a.w)s=!A.agd(a.r,this.r)
else s=!0
return s}}
A.KZ.prototype={
d_(a){a.a6m()
return null}}
A.Ds.prototype={
rh(a){return this.c},
d_(a){}}
A.ns.prototype={}
A.nK.prototype={}
A.ht.prototype={}
A.Dq.prototype={}
A.mn.prototype={}
A.It.prototype={
ie(a,b){var s,r,q,p,o,n=$.ak.I$.f.f
if(n==null||n.e==null)return!1
for(s=t.q,r=0;r<2;++r){q=B.H0[r]
p=n.e
p.toString
o=A.agU(p,q,s)
if(o!=null&&o.ie(0,q)){this.c=o
this.d=q
return!0}}return!1},
d_(a){var s,r=this.c
r===$&&A.b()
s=this.d
s===$&&A.b()
r.d_(s)}}
A.Oj.prototype={
VV(a,b,c){var s
a.fs(this.gk5())
s=A.m(this).h("ls<1>").b(a)?a.m9(b,c):a.d_(b)
a.fs(null)
return s},
m9(a,b){var s=this,r=A.agT(s.gtl(),A.m(s).c)
return r==null?s.a3p(a,s.b,b):s.VV(r,a,b)},
d_(a){return this.m9(a,null)},
gtf(){var s=this,r=A.agU(s.gtl(),null,A.m(s).c)
if(r!=null){r.fs(s.gk5())
r.gtf()
r.fs(null)}else s.gk5().gtf()
return!0},
ie(a,b){var s,r=this,q=A.agT(r.gtl(),A.m(r).c),p=q==null
if(!p)q.fs(r.gk5())
s=(p?r.gk5():q).ie(0,b)
if(!p)q.fs(null)
return s},
rh(a){var s,r=this,q=A.agT(r.gtl(),A.m(r).c),p=q==null
if(!p)q.fs(r.gk5())
s=(p?r.gk5():q).rh(a)
if(!p)q.fs(null)
return s}}
A.yv.prototype={
a3p(a,b,c){var s=this.e
if(b==null)return s.d_(a)
else return s.d_(a)},
gk5(){return this.e},
gtl(){return this.f}}
A.L6.prototype={}
A.L5.prototype={}
A.Nl.prototype={}
A.zR.prototype={
fs(a){this.MX(a)
this.e.fs(a)}}
A.r8.prototype={
aD(a){var s=new A.vF(this.e,!0,null,A.ar(),this.$ti.h("vF<1>"))
s.aE()
s.saO(null)
return s},
aG(a,b){b.sn(0,this.e)
b.sMK(!0)}}
A.xg.prototype={
af(){return new A.zz(B.m)}}
A.zz.prototype={
gVI(){var s,r
$.ak.toString
s=$.aL()
if(s.gy7()!=="/"){$.ak.toString
s=s.gy7()}else{r=this.a.ax
$.ak.toString
s=s.gy7()
s=s}return s},
az(){var s=this
s.aN()
s.Zw()
$.ak.toString
s.r=s.wL($.aL().a.f,s.a.fy)
$.ak.ai$.push(s)},
aS(a){this.bf(a)
this.H1(a)},
m(){B.b.v($.ak.ai$,this)
var s=this.d
if(s!=null)s.m()
this.aL()},
Dm(){var s=this.d
if(s!=null)s.m()
this.e=this.d=null},
H1(a){var s,r=this
r.a.toString
if(r.gHa()){r.Dm()
if(r.f==null||r.a.c!=a.c){s=r.a.c
r.f=s==null?new A.jW(r,t.yh):s}}else{r.Dm()
r.f=null}},
Zw(){return this.H1(null)},
gHa(){var s=this.a
if(s.Q==null){s=s.as
s=s==null?null:s.gbC(s)
s=s===!0||this.a.d!=null||!1}else s=!0
return s},
WK(a){var s,r=this,q=a.a,p=q==="/"&&r.a.Q!=null?new A.aec(r):r.a.as.j(0,q)
if(p!=null)return r.a.f.$1$2(a,p,t.z)
s=r.a.d
if(s!=null)return s.$1(a)
return null},
WY(a){return this.a.at.$1(a)},
iR(){var s=0,r=A.a4(t.y),q,p=this,o,n
var $async$iR=A.a0(function(a,b){if(a===1)return A.a1(b,r)
while(true)switch(s){case 0:p.a.toString
o=p.f
n=o==null?null:o.gbm()
if(n==null){q=!1
s=1
break}q=n.K5()
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$iR,r)},
o7(a){return this.a1j(a)},
a1j(a){var s=0,r=A.a4(t.y),q,p=this,o,n
var $async$o7=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:p.a.toString
o=p.f
n=o==null?null:o.gbm()
if(n==null){q=!1
s=1
break}o=n.wP(a,null,t.X)
o.toString
o=A.an4(o,B.Cs,!1,null)
n.e.push(o)
n.vK()
n.CU(o.a)
q=!0
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$o7,r)},
wL(a,b){this.a.toString
return A.aA5(a,b)},
yc(a){var s=this,r=s.wL(a,s.a.fy)
if(!r.k(0,s.r))s.au(new A.aef(s,r))},
L(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g={}
g.a=null
s=i.a
s.toString
if(i.gHa()){s=i.f
r=i.gVI()
q=i.a
p=q.e==null?A.aBl():new A.aed(i)
o=q.ay
o.toString
g.a=A.akS(!0,new A.uZ(r,i.gWJ(),i.gWX(),o,"nav",p,!0,s),"Navigator Scope",h,h)
s=q}else{s=i.a
s.toString}g.b=null
n=new A.hn(new A.aee(g,i),h)
g.b=n
n=A.t0(n,h,B.cP,!0,s.cy,h,h,B.aS)
g.b=n
s=$.axi
if(s)m=new A.I7(15,!1,!1,h)
else m=h
if(m!=null)g.b=A.i1(B.aU,A.a([n,A.In(h,m,h,h,0,0,0,h)],t.E),B.Q,B.b9)
s=i.a
r=s.CW
s=s.db
s=A.b5(255,s.gn(s)>>>16&255,s.gn(s)>>>8&255,s.gn(s)&255)
g=g.b
l=i.wL(A.a([i.a.dx],t.as),i.a.fy)
q=t.eu
p=A.a([],q)
B.b.K(p,i.a.dy)
p.push(B.Ek)
q=A.a(p.slice(0),q)
k=new A.uk(l,q,new A.KC(r,s,g,h),h)
A.dp(a)
g=i.a
j=new A.yd(k,h)
k=j
g=g.p3
s=A.axh()
r=A.ox($.aq9(),t.n,t.nT)
q=t.B8
p=t.dc
r.l(0,B.Ca,new A.yv(new A.p8(new A.bh(A.a([],q),p)),a,!1,!1,!1,!1,new A.bh(A.a([],q),p),t.uq.h("yv<bk.T>")))
return new A.vU(new A.wm(A.ai5(new A.Dh(A.SS(r,A.akT(new A.Kn(new A.wn(k,h),h),new A.vB(A.y(t.j5,t.uJ)))),h),"<Default WidgetsApp Shortcuts>",s),h),g,h)}}
A.aec.prototype={
$1(a){var s=this.a.a.Q
s.toString
return s},
$S:12}
A.aef.prototype={
$0(){this.a.r=this.b},
$S:0}
A.aed.prototype={
$2(a,b){return this.a.a.e.$1(b)},
$S:101}
A.aee.prototype={
$1(a){return this.b.a.ch.$2(a,this.a.a)},
$S:12}
A.Sf.prototype={}
A.nT.prototype={
F(){return"ConnectionState."+this.b}}
A.eU.prototype={
i(a){var s=this
return"AsyncSnapshot("+s.a.i(0)+", "+A.h(s.b)+", "+A.h(s.c)+", "+A.h(s.d)+")"},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return s.$ti.b(b)&&b.a===s.a&&J.f(b.b,s.b)&&J.f(b.c,s.c)&&b.d==s.d},
gu(a){return A.V(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.oc.prototype={
af(){return new A.xN(B.m,this.$ti.h("xN<1>"))}}
A.xN.prototype={
az(){var s=this
s.aN()
s.a.toString
s.e=new A.eU(B.nj,null,null,null,s.$ti.h("eU<1>"))
s.Gp()},
aS(a){var s,r=this
r.bf(a)
if(a.c!==r.a.c){if(r.d!=null){r.d=null
s=r.e
s===$&&A.b()
r.e=new A.eU(B.nj,s.b,s.c,s.d,s.$ti)}r.Gp()}},
L(a){var s,r=this.a
r.toString
s=this.e
s===$&&A.b()
return r.d.$2(a,s)},
m(){this.d=null
this.aL()},
Gp(){var s,r=this,q=r.a
q.toString
s=r.d=new A.H()
q.c.dU(new A.aaz(r,s),new A.aaA(r,s),t.H)
q=r.e
q===$&&A.b()
if(q.a!==B.ed)r.e=new A.eU(B.Fe,q.b,q.c,q.d,q.$ti)}}
A.aaz.prototype={
$1(a){var s=this.a
if(s.d===this.b)s.au(new A.aay(s,a))},
$S(){return this.a.$ti.h("az(1)")}}
A.aay.prototype={
$0(){var s=this.a
s.e=new A.eU(B.ed,this.b,null,null,s.$ti.h("eU<1>"))},
$S:0}
A.aaA.prototype={
$2(a,b){var s=this.a
if(s.d===this.b)s.au(new A.aax(s,a,b))},
$S:32}
A.aax.prototype={
$0(){var s=this.a
s.e=new A.eU(B.ed,null,this.b,this.c,s.$ti.h("eU<1>"))},
$S:0}
A.nC.prototype={
af(){return new A.xo(B.m)}}
A.xo.prototype={
az(){this.aN()
this.GN()},
aS(a){this.bf(a)
this.GN()},
GN(){this.e=new A.cF(this.gQV(),this.a.c,null,t.dm)},
m(){var s,r,q=this.d
if(q!=null)for(q=A.iP(q,q.r);q.q();){s=q.d
r=this.d.j(0,s)
r.toString
s.H(0,r)}this.aL()},
QW(a){var s,r=this,q=a.a,p=r.d
if(p==null)p=r.d=A.y(t.yF,t.M)
p.l(0,q,r.Sb(q))
p=r.d.j(0,q)
p.toString
q.S(0,p)
if(!r.f){r.f=!0
s=r.E5()
if(s!=null)r.GY(s)
else $.bM.ax$.push(new A.a9j(r))}return!1},
E5(){var s={},r=this.c
r.toString
s.a=null
r.aT(new A.a9o(s))
return t.ot.a(s.a)},
GY(a){var s,r
this.c.toString
s=this.f
r=this.e
r===$&&A.b()
a.D3(t.CR.a(A.auf(r,s)))},
Sb(a){return new A.a9n(this,a)},
L(a){var s=this.f,r=this.e
r===$&&A.b()
return new A.u6(s,r,null)}}
A.a9j.prototype={
$1(a){var s,r=this.a
if(r.c==null)return
s=r.E5()
s.toString
r.GY(s)},
$S:2}
A.a9o.prototype={
$1(a){this.a.a=a},
$S:5}
A.a9n.prototype={
$0(){var s=this.a
s.d.v(0,this.b)
if(s.d.a===0)if($.bM.CW$.a<3)s.au(new A.a9l(s))
else{s.f=!1
A.dG(new A.a9m(s))}},
$S:0}
A.a9l.prototype={
$0(){this.a.f=!1},
$S:0}
A.a9m.prototype={
$0(){var s=this.a
if(s.c!=null&&s.d.a===0)s.au(new A.a9k(s))},
$S:0}
A.a9k.prototype={
$0(){},
$S:0}
A.lY.prototype={}
A.Fb.prototype={}
A.nD.prototype={
pW(){var s=new A.Fb($.br())
this.hp$=s
this.c.cT(new A.lY(s))},
pj(){var s,r=this
if(r.gu3()){if(r.hp$==null)r.pW()}else{s=r.hp$
if(s!=null){s.aA()
s.dF()
r.hp$=null}}},
L(a){if(this.gu3()&&this.hp$==null)this.pW()
return B.a0e}}
A.O9.prototype={
L(a){throw A.c(A.tG("Widgets that mix AutomaticKeepAliveClientMixin into their State must call super.build() but must ignore the return value of the superclass."))}}
A.R6.prototype={
Br(a,b){},
mg(a){A.ana(this,new A.adZ(this,a))}}
A.adZ.prototype={
$1(a){var s=a.z
if(s!=null&&s.B(0,this.a))a.b4()},
$S:5}
A.adY.prototype={
$1(a){A.ana(a,this.a)},
$S:5}
A.R7.prototype={
bO(a){var s=A.fO(t.h,t.X)
return new A.R6(s,this,B.a6)}}
A.eZ.prototype={
bX(a){return this.w!==a.w}}
A.oH.prototype={
aD(a){var s=this.e
s=new A.J_(B.d.b1(A.Su(s,0,1)*255),s,!1,null,A.ar())
s.aE()
s.saO(null)
return s},
aG(a,b){b.smj(0,this.e)
b.sr1(!1)}}
A.rW.prototype={
aD(a){var s=new A.IO(this.e,this.f,this.r,!1,!1,null,A.ar())
s.aE()
s.saO(null)
return s},
aG(a,b){b.stH(this.e)
b.sJ1(this.f)
b.stM(this.r)
b.cg=b.bt=!1},
o9(a){a.stH(null)
a.sJ1(null)}}
A.nP.prototype={
aD(a){var s=new A.IL(null,this.f,null,A.ar())
s.aE()
s.saO(null)
return s},
aG(a,b){b.snR(null)
b.srf(this.f)},
o9(a){a.snR(null)}}
A.B4.prototype={
aD(a){var s=new A.IK(this.e,this.f,null,A.ar())
s.aE()
s.saO(null)
return s},
aG(a,b){b.snR(this.e)
b.srf(this.f)},
o9(a){a.snR(null)}}
A.Id.prototype={
aD(a){var s=this,r=new A.J2(s.e,s.r,s.w,s.y,s.x,null,s.f,null,A.ar())
r.aE()
r.saO(null)
return r},
aG(a,b){var s=this
b.sd3(0,s.e)
b.srf(s.f)
b.sa_v(0,s.r)
b.si3(0,s.w)
b.sae(0,s.x)
b.sfY(0,s.y)}}
A.Ie.prototype={
aD(a){var s=this,r=new A.J3(s.r,s.x,s.w,s.e,s.f,null,A.ar())
r.aE()
r.saO(null)
return r},
aG(a,b){var s=this
b.snR(s.e)
b.srf(s.f)
b.si3(0,s.r)
b.sae(0,s.w)
b.sfY(0,s.x)}}
A.pH.prototype={
aD(a){var s=this,r=A.dJ(a),q=new A.Jc(s.w,null,A.ar())
q.aE()
q.saO(null)
q.sbk(0,s.e)
q.se4(s.r)
q.sbD(r)
q.sm0(s.x)
q.sKp(0,null)
return q},
aG(a,b){var s=this
b.sbk(0,s.e)
b.sKp(0,null)
b.se4(s.r)
b.sbD(A.dJ(a))
b.bt=s.w
b.sm0(s.x)}}
A.Ej.prototype={
aD(a){var s=new A.vG(this.e,this.f,A.dJ(a),B.k,null,A.ar())
s.aE()
s.saO(null)
return s},
aG(a,b){b.syI(this.e)
b.se4(this.f)
b.sbD(A.dJ(a))
if(B.k!==b.dL){b.dL=B.k
b.ao()
b.aY()}}}
A.Ez.prototype={
aD(a){var s=new A.IT(this.e,this.f,null,A.ar())
s.aE()
s.saO(null)
return s},
aG(a,b){b.sa5L(this.e)
b.P=this.f}}
A.hN.prototype={
aD(a){var s=new A.J0(this.e,A.dJ(a),null,A.ar())
s.aE()
s.saO(null)
return s},
aG(a,b){b.sdh(0,this.e)
b.sbD(A.dJ(a))}}
A.lb.prototype={
aD(a){var s=new A.J5(this.f,this.r,this.e,A.dJ(a),null,A.ar())
s.aE()
s.saO(null)
return s},
aG(a,b){b.se4(this.e)
b.sa5Y(this.f)
b.sa2R(this.r)
b.sbD(A.dJ(a))}}
A.iz.prototype={}
A.rX.prototype={
aD(a){var s=new A.IP(this.e,null,A.ar())
s.aE()
s.saO(null)
return s},
aG(a,b){b.sy9(this.e)}}
A.ub.prototype={
nH(a){var s,r,q=a.e
q.toString
t.DU.a(q)
s=this.f
if(q.e!==s){q.e=s
r=a.c
if(r instanceof A.x)r.a6()}}}
A.rV.prototype={
aD(a){var s=new A.IN(this.e,0,null,null,A.ar())
s.aE()
s.K(0,null)
return s},
aG(a,b){b.sy9(this.e)}}
A.wr.prototype={
aD(a){return A.alX(A.nH(this.f,this.e))},
aG(a,b){b.sHp(A.nH(this.f,this.e))},
bW(){var s,r=this,q=r.e
if(q===1/0&&r.f===1/0)s="SizedBox.expand"
else s=q===0&&r.f===0?"SizedBox.shrink":"SizedBox"
q=r.a
return q==null?s:s+"-"+q.i(0)}}
A.fF.prototype={
aD(a){return A.alX(this.e)},
aG(a,b){b.sHp(this.e)}}
A.Fj.prototype={
aD(a){var s=new A.IW(this.e,this.f,null,A.ar())
s.aE()
s.saO(null)
return s},
aG(a,b){b.sa43(0,this.e)
b.sa40(0,this.f)}}
A.v7.prototype={
aD(a){var s=new A.IZ(this.e,null,A.ar())
s.aE()
s.saO(null)
return s},
aG(a,b){b.stw(this.e)},
bO(a){return new A.Og(this,B.a6)}}
A.Og.prototype={}
A.Aw.prototype={
aD(a){var s=new A.II(this.e,null,A.ar())
s.aE()
s.saO(null)
return s},
aG(a,b){b.sa_m(0,this.e)}}
A.wB.prototype={
aD(a){var s=A.dJ(a)
s=new A.vM(this.e,s,this.r,this.w,A.ar(),0,null,null,A.ar())
s.aE()
s.K(0,null)
return s},
aG(a,b){var s
b.se4(this.e)
s=A.dJ(a)
b.sbD(s)
s=this.r
if(b.ai!==s){b.ai=s
b.a6()}s=this.w
if(s!==b.aW){b.aW=s
b.ao()
b.aY()}}}
A.ml.prototype={
nH(a){var s,r,q,p=this,o=a.e
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
if(q instanceof A.x)q.a6()}}}
A.Io.prototype={
L(a){var s,r,q,p=this,o=null,n=a.a3(t.I)
n.toString
s=p.c
r=p.e
switch(n.w.a){case 0:break
case 1:q=s
s=r
r=q
break
default:s=o
r=s}return A.In(p.f,p.x,o,o,r,s,p.d,p.r)}}
A.tA.prototype={
gWw(){switch(this.e.a){case 0:return!0
case 1:var s=this.w
return s===B.aK||s===B.Ff}},
ua(a){var s=this.x
s=this.gWw()?A.dJ(a):null
return s},
aD(a){var s=this
return A.aw1(B.k,s.w,s.e,s.f,s.r,s.z,s.ua(a),s.y)},
aG(a,b){var s=this,r=s.e
if(b.M!==r){b.M=r
b.a6()}r=s.f
if(b.t!==r){b.t=r
b.a6()}r=s.r
if(b.I!==r){b.I=r
b.a6()}r=s.w
if(b.ar!==r){b.ar=r
b.a6()}r=s.ua(a)
if(b.ai!=r){b.ai=r
b.a6()}r=s.y
if(b.aW!==r){b.aW=r
b.a6()}if(B.k!==b.cf){b.cf=B.k
b.ao()
b.aY()}}}
A.Jk.prototype={}
A.B8.prototype={}
A.oa.prototype={
nH(a){var s,r,q,p=a.e
p.toString
t.uc.a(p)
s=this.f
if(p.e!==s){p.e=s
r=!0}else r=!1
s=this.r
if(p.f!==s){p.f=s
r=!0}if(r){q=a.c
if(q instanceof A.x)q.a6()}}}
A.Ed.prototype={}
A.Je.prototype={
aD(a){var s,r,q,p=this,o=null,n=p.e,m=p.r
if(m==null){m=a.a3(t.I)
m.toString
m=m.w}s=p.x
r=A.ahG(a)
q=s===B.bl?"\u2026":o
s=new A.vI(A.a8a(q,r,p.z,p.as,n,p.f,m,p.ax,p.y,p.at),p.w,s,p.ch,0,o,o,A.ar())
s.aE()
s.K(0,o)
s.vI(n)
s.sp7(p.ay)
return s},
aG(a,b){var s,r=this
b.stX(0,r.e)
b.sAr(0,r.f)
s=r.r
if(s==null){s=a.a3(t.I)
s.toString
s=s.w}b.sbD(s)
b.sMM(r.w)
b.sa4r(0,r.x)
b.sAs(r.y)
b.szm(r.z)
b.sMV(r.as)
b.sAt(r.at)
b.sL8(r.ax)
s=A.ahG(a)
b.szh(0,s)
b.sp7(r.ay)
b.sMl(r.ch)}}
A.a3s.prototype={
$1(a){return!0},
$S:43}
A.IA.prototype={
aD(a){var s=this,r=s.d
r=r==null?null:r.cI(0)
r=new A.IU(r,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.CW,!1,null,!1,A.ar())
r.aE()
r.Zl()
return r},
aG(a,b){var s=this,r=s.d
b.sf6(0,r==null?null:r.cI(0))
b.ar=s.e
b.sbh(0,s.f)
b.sbK(0,s.r)
b.sMc(0,s.w)
b.sae(0,s.x)
b.smj(0,s.y)
b.sa04(s.Q)
b.syI(s.as)
b.se4(s.at)
b.sa5a(0,s.ax)
b.sa_H(s.ay)
b.sa3Z(!1)
b.sbD(null)
b.sz4(s.CW)
b.sz5(!1)
b.sm0(s.z)},
o9(a){a.sf6(0,null)}}
A.Fk.prototype={
aD(a){var s=this,r=null,q=new A.J4(s.e,r,s.r,r,s.x,s.y,r,r,s.as,s.at,r,A.ar())
q.aE()
q.saO(r)
return q},
aG(a,b){var s=this
b.cJ=s.e
b.bs=null
b.aj=s.r
b.aX=null
b.aU=s.x
b.bx=s.y
b.bR=b.dJ=null
b.am=s.as
b.A=s.at}}
A.Hl.prototype={
aD(a){var s=this,r=new A.IY(!0,s.e,s.f,s.r,s.w,B.ay,null,A.ar())
r.aE()
r.saO(null)
return r},
aG(a,b){var s,r=this
b.bs=r.e
b.aj=r.f
b.aX=r.r
s=r.w
if(!b.aU.k(0,s)){b.aU=s
b.ao()}if(b.A!==B.ay){b.A=B.ay
b.ao()}}}
A.h0.prototype={
aD(a){var s=new A.J7(null,A.ar())
s.aE()
s.saO(null)
return s}}
A.hB.prototype={
aD(a){var s=new A.vH(this.e,this.f,null,A.ar())
s.aE()
s.saO(null)
return s},
aG(a,b){b.sJq(this.e)
b.syZ(this.f)}}
A.Am.prototype={
aD(a){var s=new A.vD(!1,null,null,A.ar())
s.aE()
s.saO(null)
return s},
aG(a,b){b.sHg(!1)
b.syZ(null)}}
A.wh.prototype={
aD(a){var s=this,r=new A.vK(s.e,s.f,s.r,!1,s.Eh(a),null,A.ar())
r.aE()
r.saO(null)
r.GK(r.A)
return r},
Eh(a){var s,r=this.e,q=r.p4
if(q!=null)return q
if(r.fx==null){if(r.go==null)r=r.p2!=null
else r=!0
s=r}else s=!0
if(!s)return null
return A.dJ(a)},
aG(a,b){var s=this
b.sa0h(s.f)
b.sa1I(s.r)
b.sa1G(!1)
b.sKz(s.e)
b.sbD(s.Eh(a))}}
A.Hg.prototype={
aD(a){var s=new A.IX(null,A.ar())
s.aE()
s.saO(null)
return s}}
A.AM.prototype={
aD(a){var s=new A.IJ(!0,null,A.ar())
s.aE()
s.saO(null)
return s},
aG(a,b){b.sa_u(!0)}}
A.tp.prototype={
aD(a){var s=new A.IS(this.e,null,A.ar())
s.aE()
s.saO(null)
return s},
aG(a,b){b.sa1H(this.e)}}
A.tX.prototype={
aD(a){var s=new A.IV(this.e,null,A.ar())
s.aE()
s.saO(null)
return s},
aG(a,b){b.sz_(0,this.e)}}
A.iN.prototype={
L(a){return this.c}}
A.hn.prototype={
L(a){return this.c.$1(a)}}
A.rH.prototype={
aD(a){var s=new A.yz(this.e,B.ay,null,A.ar())
s.aE()
s.saO(null)
return s},
aG(a,b){t.oZ.a(b).sae(0,this.e)}}
A.yz.prototype={
sae(a,b){if(b.k(0,this.cJ))return
this.cJ=b
this.ao()},
aF(a,b){var s,r,q,p,o,n,m=this
if(m.k3.M9(0,B.S)){s=a.gbB(a)
r=m.k3
q=b.a
p=b.b
o=r.a
r=r.b
n=$.ao().bd()
n.sae(0,m.cJ)
s.cd(new A.C(q,p,q+o,p+r),n)}s=m.t$
if(s!=null)a.eL(s,b)}}
A.aeh.prototype={
$0(){var s,r,q=this,p=q.b
if(p==null||t.c.b(q.c)){p=q.a.ry$
p===$&&A.b()
p=p.e
p.toString
s=q.c
s=s.gbu(s)
r=A.as7()
p.bS(r,s)
p=r}return p},
$S:265}
A.aei.prototype={
$1(a){var s=a==null?t.K.a(a):a
return this.a.j8(s)},
$S:266}
A.dc.prototype={
iR(){return A.bs(!1,t.y)},
o7(a){return A.bs(!1,t.y)},
a1k(a){var s=a.a
s.toString
return this.o7(s)},
rs(){},
Ig(){},
If(){},
yc(a){},
Ie(a){}}
A.xh.prototype={
a__(a){return this.ai$.push(a)},
a2i(){this.a1p($.aL().a.f)},
a1p(a){var s,r,q
for(s=this.ai$,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].yc(a)},
t1(){var s=0,r=A.a4(t.H),q,p=this,o,n,m
var $async$t1=A.a0(function(a,b){if(a===1)return A.a1(b,r)
while(true)switch(s){case 0:o=A.aA(p.ai$,!0,t.nR),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.a5(o[m].iR(),$async$t1)
case 6:if(b){s=1
break}case 4:++m
s=3
break
case 5:A.a7A()
case 1:return A.a2(q,r)}})
return A.a3($async$t1,r)},
t2(a){return this.a2v(a)},
a2v(a){var s=0,r=A.a4(t.H),q,p=this,o,n,m
var $async$t2=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:o=A.aA(p.ai$,!0,t.nR),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.a5(o[m].o7(a),$async$t2)
case 6:if(c){s=1
break}case 4:++m
s=3
break
case 5:case 1:return A.a2(q,r)}})
return A.a3($async$t2,r)},
q7(a){return this.V4(a)},
V4(a){var s=0,r=A.a4(t.H),q,p=this,o,n,m,l
var $async$q7=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:o=A.aA(p.ai$,!0,t.nR),n=o.length,m=J.aF(a),l=0
case 3:if(!(l<n)){s=5
break}s=6
return A.a5(o[l].a1k(new A.p5(A.bC(m.j(a,"location")),m.j(a,"state"))),$async$q7)
case 6:if(c){s=1
break}case 4:++l
s=3
break
case 5:case 1:return A.a2(q,r)}})
return A.a3($async$q7,r)},
UJ(a){switch(a.a){case"popRoute":return this.t1()
case"pushRoute":return this.t2(A.bC(a.b))
case"pushRouteInformation":return this.q7(t.G.a(a.b))}return A.bs(null,t.z)},
TX(){this.yx()},
Md(a){A.cd(B.t,new A.a8R(this,a))},
$ial:1,
$idw:1}
A.aeg.prototype={
$1(a){var s,r,q=$.bM
q.toString
s=this.a
r=s.a
r.toString
q.KQ(r)
s.a=null
this.b.by$.ey(0)},
$S:90}
A.a8R.prototype={
$0(){var s,r,q=this.a,p=q.cf$
q.c8$=!0
s=q.ry$
s===$&&A.b()
s=s.e
s.toString
r=q.I$
r.toString
q.cf$=new A.mo(this.b,s,"[root]",new A.jW(s,t.l9),t.go).a_n(r,t.jv.a(p))
if(p==null)$.bM.yx()},
$S:0}
A.mo.prototype={
bO(a){return new A.km(this,B.a6,this.$ti.h("km<1>"))},
aD(a){return this.d},
aG(a,b){},
a_n(a,b){var s,r={}
r.a=b
if(b==null){a.K1(new A.a2R(r,this,a))
s=r.a
s.toString
a.r7(s,new A.a2S(r))}else{b.bj=this
b.fN()}r=r.a
r.toString
return r},
bW(){return this.e}}
A.a2R.prototype={
$0(){var s=this.b,r=A.aw2(s,s.$ti.c)
this.a.a=r
r.r=this.c},
$S:0}
A.a2S.prototype={
$0(){var s=this.a.a
s.toString
s.Cr(null,null)
s.qt()},
$S:0}
A.km.prototype={
aT(a){var s=this.aV
if(s!=null)a.$1(s)},
j6(a){this.aV=null
this.kP(a)},
fa(a,b){this.Cr(a,b)
this.qt()},
bb(a,b){this.mT(0,b)
this.qt()},
hB(){var s=this,r=s.bj
if(r!=null){s.bj=null
s.mT(0,s.$ti.h("mo<1>").a(r))
s.qt()}s.Cq()},
qt(){var s,r,q,p,o,n,m,l=this
try{o=l.aV
n=l.f
n.toString
l.aV=l.dD(o,l.$ti.h("mo<1>").a(n).c,B.mP)}catch(m){s=A.ag(m)
r=A.ay(m)
o=A.bi("attaching to the render tree")
q=new A.bx(s,r,"widgets library",o,null,!1)
A.dK(q)
p=A.XR(q)
l.aV=l.dD(null,p,B.mP)}},
ga9(){return this.$ti.h("aB<1>").a(A.bv.prototype.ga9.call(this))},
jd(a,b){var s=this.$ti
s.h("aB<1>").a(A.bv.prototype.ga9.call(this)).saO(s.c.a(a))},
jg(a,b,c){},
jq(a,b){this.$ti.h("aB<1>").a(A.bv.prototype.ga9.call(this)).saO(null)}}
A.L0.prototype={$ial:1}
A.zA.prototype={
eG(){this.N_()
$.eh=this
var s=$.aL()
s.Q=this.gUQ()
s.as=$.a9},
AD(){this.N2()
this.vM()}}
A.zB.prototype={
eG(){this.Q2()
$.bM=this},
ic(){this.N0()}}
A.zC.prototype={
eG(){var s,r,q,p,o=this
o.Q4()
$.h3=o
o.be$!==$&&A.ew()
o.be$=B.E9
s=new A.vR(A.b6(t.hp),$.br())
B.ix.mH(s.gWn())
o.ce$=s
s=t.F3
r=new A.Zd(A.y(s,t.lT),A.b6(t.vQ),A.a([],t.AV))
o.aV$!==$&&A.ew()
o.aV$=r
q=$.agD()
p=A.a([],t.DG)
o.bj$!==$&&A.ew()
s=o.bj$=new A.Fc(r,q,p,A.b6(s))
p=$.aL()
p.at=s.ga2e()
p.ax=$.a9
B.CL.us(s.ga2x())
s=$.alf
if(s==null)s=$.alf=A.a([],t.e8)
s.push(o.gR_())
B.CN.us(new A.aei(o))
B.CM.us(o.gUF())
B.c0.mH(o.gUO())
$.apR()
o.a4Q()},
ic(){this.Q5()}}
A.zD.prototype={
eG(){this.Q6()
$.eK=this
var s=t.K
this.fG$=new A.ZG(A.y(s,t.fx),A.y(s,t.lM),A.y(s,t.s8))},
ox(){this.P3()
var s=this.fG$
s===$&&A.b()
s.X(0)},
j8(a){return this.a2D(a)},
a2D(a){var s=0,r=A.a4(t.H),q,p=this
var $async$j8=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:s=3
return A.a5(p.P4(a),$async$j8)
case 3:switch(A.bC(J.aM(t.a.a(a),"type"))){case"fontsChange":p.yA$.aA()
break}s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$j8,r)}}
A.zE.prototype={
eG(){this.Q9()
$.a4E=this
this.dJ$=$.aL().a.a}}
A.zF.prototype={
eG(){var s,r,q,p,o=this
o.Qa()
$.kn=o
s=t.By
o.ry$=new A.Ig(o.ga1A(),o.gVj(),o.gVn(),o.gVl(),A.a([],s),A.a([],s),A.a([],s),A.b6(t.d))
s=$.aL()
s.f=o.ga2k()
r=s.r=$.a9
s.fy=o.ga2M()
s.go=r
s.k2=o.ga2q()
s.k3=r
s.p1=o.gVh()
s.p2=r
s.p3=o.gVf()
s.p4=r
r=new A.vN(B.S,o.I8(),$.ce(),null,A.ar())
r.aE()
r.saO(null)
q=o.ry$
q===$&&A.b()
q.sa5p(r)
r=o.ry$.e
r.Q=r
q=t.W
q.a(A.J.prototype.gbo.call(r)).r.push(r)
p=r.GX()
r.ch.saR(0,p)
q.a(A.J.prototype.gbo.call(r)).z.push(r)
o.MD(s.a.c)
o.at$.push(o.gUM())
s=o.rx$
if(s!=null)s.m()
s=t.S
r=$.br()
o.rx$=new A.Hm(new A.a0B(B.lH,A.y(s,t.Df)),A.y(s,t.eg),r)
o.ax$.push(o.gVA())},
ic(){this.Q7()},
yn(a,b,c){this.rx$.a5U(b,new A.aeh(this,c,b))
this.Nq(0,b,c)},
ik(){var s=0,r=A.a4(t.H),q=[],p=this,o
var $async$ik=A.a0(function(a,b){if(a===1)return A.a1(b,r)
while(true)switch(s){case 0:s=2
return A.a5(p.N1(),$async$ik)
case 2:o=$.ak8
if((o==null?null:o.a)==null)try{o=p.ry$
o===$&&A.b()
o.e.eM()}finally{}p.ui()
s=3
return A.a5(p.gIF(),$async$ik)
case 3:return A.a2(null,r)}})
return A.a3($async$ik,r)}}
A.zG.prototype={
ic(){this.Qc()},
yP(){var s,r,q
this.OA()
for(s=this.ai$,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].rs()},
yV(){var s,r,q
this.OC()
for(s=this.ai$,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].Ig()},
yR(){var s,r,q
this.OB()
for(s=this.ai$,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].If()},
t_(a){var s,r,q
this.OR(a)
for(s=this.ai$,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].Ie(a)},
ox(){var s,r
this.Q8()
for(s=this.ai$.length,r=0;r<s;++r);},
ys(){var s,r,q=this,p={}
p.a=null
if(q.aW$){s=new A.aeg(p,q)
p.a=s
$.bM.a_a(s)}try{r=q.cf$
if(r!=null)q.I$.a_A(r)
q.Oz()
q.I$.a1N()}finally{}r=q.aW$=!1
p=p.a
if(p!=null)r=!(q.xr$||q.x2$===0)
if(r){q.aW$=!0
r=$.bM
r.toString
p.toString
r.KQ(p)}},
ik(){var s=this.cf$
if(s!=null)this.I$.a4V(s,$.ak8)
return this.Qd()}}
A.D9.prototype={
aD(a){var s=new A.IQ(this.e,this.f,A.aj8(a,null),null,A.ar())
s.aE()
s.saO(null)
return s},
aG(a,b){b.sa14(this.e)
b.sxS(A.aj8(a,null))
b.sbu(0,this.f)}}
A.nV.prototype={
gX_(){var s,r=this.r
if(r==null||r.gdh(r)==null)return this.e
s=r.gdh(r)
r=this.e
if(r==null)return s
s.toString
return r.C(0,s)},
L(a){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){s=o.x
if(s!=null)s=!(s.a>=s.b&&s.c>=s.d)
else s=!0}else s=!1
if(s)m=A.aum(new A.fF(B.mh,n,n),0,0)
else{s=o.d
if(s!=null)m=new A.lb(s,n,n,m,n)}r=o.gX_()
if(r!=null)m=new A.hN(r,m,n)
s=o.f
if(s!=null)m=new A.rH(s,m,n)
s=o.as
if(s!==B.k){q=A.dJ(a)
p=o.r
p.toString
m=A.akm(m,s,new A.Me(q==null?B.u:q,p))}s=o.r
if(s!=null)m=A.akA(m,s,B.hz)
s=o.x
if(s!=null)m=new A.fF(s,m,n)
s=o.y
if(s!=null)m=new A.hN(s,m,n)
m.toString
return m}}
A.Me.prototype={
AX(a){return this.c.u8(new A.C(0,0,0+a.a,0+a.b),this.b)},
BD(a){return!a.c.k(0,this.c)||a.b!==this.b}}
A.nZ.prototype={
bX(a){return!J.f(this.w,a.w)||!J.f(this.x,a.x)}}
A.Oa.prototype={
L(a){throw A.c(A.tG("A DefaultSelectionStyle constructed with DefaultSelectionStyle.fallback cannot be incorporated into the widget tree, it is meant only to provide a fallback value returned by DefaultSelectionStyle.of() when no enclosing default selection style is present in a BuildContext."))}}
A.Dh.prototype={
Tr(){var s=$.apu()
return s},
L(a){var s=this.c,r=this.Tr()
if(r!=null)s=A.ai5(s,"<Web Disabling Text Editing Shortcuts>",r)
return A.ai5(s,"<Default Text Editing Shortcuts>",A.asS())}}
A.Dr.prototype={
gaP(a){var s=this.a
if(s==null)return null
s=s.c
s.toString
return s}}
A.o2.prototype={
af(){return new A.xC(A.Iv(null),A.Iv(null),B.m)},
a23(a,b,c){return this.d.$3(a,b,c)},
a5m(a,b,c){return this.e.$3(a,b,c)}}
A.xC.prototype={
az(){var s,r=this
r.aN()
s=r.a.c
r.d=s.gb0(s)
r.a.c.cG(r.gv0())
r.GJ()},
D_(a){var s,r=this,q=r.d
q===$&&A.b()
s=r.Rw(a,q)
r.d=s
if(q!==s)r.GJ()},
aS(a){var s,r,q=this
q.bf(a)
s=a.c
if(s!==q.a.c){r=q.gv0()
s.bV(r)
q.a.c.cG(r)
r=q.a.c
q.D_(r.gb0(r))}},
Rw(a,b){switch(a.a){case 0:case 3:return a
case 1:switch(b.a){case 0:case 3:case 1:return a
case 2:return b}break
case 2:switch(b.a){case 0:case 3:case 2:return a
case 1:return b}break}},
GJ(){var s=this,r=s.d
r===$&&A.b()
switch(r.a){case 0:case 1:s.e.saJ(0,s.a.c)
s.f.saJ(0,B.ce)
break
case 2:case 3:s.e.saJ(0,B.d_)
s.f.saJ(0,new A.eO(s.a.c,new A.bh(A.a([],t.A),t.Q),0))
break}},
m(){this.a.c.bV(this.gv0())
this.aL()},
L(a){var s=this.a
return s.a23(a,this.e,s.a5m(a,this.f,s.f))}}
A.iM.prototype={
F(){return"KeyEventResult."+this.b}}
A.Ls.prototype={}
A.Yl.prototype={
ag(a){var s,r=this.a
if(r.ax===this){if(!r.gj9()){s=r.w
s=s!=null&&s.w===r}else s=!0
if(s)r.Ll(B.Cc)
s=r.w
if(s!=null){if(s.f===r)s.f=null
s.r.v(0,r)}s=r.Q
if(s!=null)s.XM(0,r)
r.ax=null}},
Al(a){var s,r=this.a
if(r.ax===this){s=r.e
s.toString
a=A.atR(s,!0);(a==null?r.e.r.f.e:a).wF(r)}},
KR(){return this.Al(null)}}
A.xb.prototype={
F(){return"UnfocusDisposition."+this.b}}
A.cB.prototype={
gdZ(){var s,r,q
if(this.a)return!0
for(s=this.gfv(),r=s.length,q=0;q<r;++q)s[q].toString
return!1},
sdZ(a){var s,r=this
if(a!==r.a){r.a=a
s=r.w
if(s!=null){s.qh()
s.r.C(0,r)}}},
gcj(){var s,r,q,p
if(!this.b)return!1
s=this.gdu()
if(s!=null&&!s.gcj())return!1
for(r=this.gfv(),q=r.length,p=0;p<q;++p)r[p].toString
return!0},
scj(a){var s,r=this
if(a!==r.b){r.b=a
if(r.gkj()&&!a)r.Ll(B.Cc)
s=r.w
if(s!=null){s.qh()
s.r.C(0,r)}}},
slE(a){return},
slF(a){},
go1(){var s,r,q,p,o=this.y
if(o==null){s=A.a([],t.i4)
for(o=this.as,r=o.length,q=0;q<o.length;o.length===r||(0,A.Q)(o),++q){p=o[q]
B.b.K(s,p.go1())
s.push(p)}this.y=s
o=s}return o},
gpf(){var s=this.go1()
return new A.aN(s,new A.Ym(),A.an(s).h("aN<1>"))},
gfv(){var s,r,q=this.x
if(q==null){s=A.a([],t.i4)
r=this.Q
for(;r!=null;){s.push(r)
r=r.Q}this.x=s
q=s}return q},
gkj(){if(!this.gj9()){var s=this.w
if(s==null)s=null
else{s=s.f
s=s==null?null:B.b.B(s.gfv(),this)}s=s===!0}else s=!0
return s},
gj9(){var s=this.w
return(s==null?null:s.f)===this},
gkp(){return this.gdu()},
gdu(){var s,r,q,p
for(s=this.gfv(),r=s.length,q=0;q<r;++q){p=s[q]
if(p instanceof A.lE)return p}return null},
gaM(a){var s,r=this.e.ga9(),q=r.bv(0,null),p=r.gjC(),o=A.cp(q,new A.t(p.a,p.b))
p=r.bv(0,null)
q=r.gjC()
s=A.cp(p,new A.t(q.c,q.d))
return new A.C(o.a,o.b,s.a,s.b)},
Ll(a){var s,r,q=this
if(!q.gkj()){s=q.w
s=s==null||s.w!==q}else s=!1
if(s)return
r=q.gdu()
if(r==null)return
switch(a.a){case 0:if(r.gcj())B.b.X(r.dy)
for(;!r.gcj();){r=r.gdu()
if(r==null){s=q.w
r=s==null?null:s.e}}r.iz(!1)
break
case 1:if(r.gcj())B.b.v(r.dy,q)
for(;!r.gcj();){s=r.gdu()
if(s!=null)B.b.v(s.dy,r)
r=r.gdu()
if(r==null){s=q.w
r=s==null?null:s.e}}r.iz(!0)
break}},
EY(a){var s=this,r=s.w
if(r!=null){if(r.f===s)r.w=null
else{r.w=s
r.qh()}return}a.lm()
a.wq()
if(a!==s)s.wq()},
Fz(a,b,c){var s,r,q
if(c){s=b.gdu()
if(s!=null)B.b.v(s.dy,b)}b.Q=null
B.b.v(this.as,b)
for(s=this.gfv(),r=s.length,q=0;q<r;++q)s[q].y=null
this.y=null},
XM(a,b){return this.Fz(a,b,!0)},
Zr(a){var s,r,q,p
this.w=a
for(s=this.go1(),r=s.length,q=0;q<r;++q){p=s[q]
p.w=a
p.x=null}},
wF(a){var s,r,q,p,o,n=this
if(a.Q===n)return
s=a.gdu()
r=a.gkj()
q=a.Q
if(q!=null)q.Fz(0,a,s!=n.gkp())
n.as.push(a)
a.Q=n
a.x=null
a.Zr(n.w)
for(q=a.gfv(),p=q.length,o=0;o<p;++o)q[o].y=null
if(r){q=n.w
if(q!=null){q=q.f
if(q!=null)q.lm()}}if(s!=null&&a.e!=null&&a.gdu()!==s){q=a.e
q.toString
q=A.akU(q)
if(q!=null)q.xO(a,s)}if(a.ay){a.iz(!0)
a.ay=!1}},
m(){var s=this.ax
if(s!=null)s.ag(0)
this.dF()},
wq(){var s=this
if(s.Q==null)return
if(s.gj9())s.lm()
s.aA()},
tV(){this.iz(!0)},
iz(a){var s,r=this
if(!r.gcj())return
if(r.Q==null){r.ay=!0
return}r.lm()
if(r.gj9()){s=r.w.w
s=s==null||s===r}else s=!1
if(s)return
r.EY(r)},
lm(){var s,r,q,p,o,n
for(s=B.b.ga8(this.gfv()),r=new A.pP(s,t.oj),q=t.j5,p=this;r.q();p=o){o=q.a(s.gG(s))
n=o.dy
B.b.v(n,p)
n.push(p)}},
bW(){var s,r,q,p=this
p.gkj()
s=p.gkj()&&!p.gj9()?"[IN FOCUS PATH]":""
r=s+(p.gj9()?"[PRIMARY FOCUS]":"")
s=A.bK(p)
q=r.length!==0?"("+r+")":""
return"<optimized out>#"+s+q},
$iac:1}
A.Ym.prototype={
$1(a){return!a.gdZ()&&a.gcj()},
$S:11}
A.lE.prototype={
gkp(){return this},
gpf(){if(!this.gcj())return B.Dk
return A.cB.prototype.gpf.call(this)},
mG(a){if(a.Q==null)this.wF(a)
if(this.gkj())a.iz(!0)
else a.lm()},
iz(a){var s,r,q=this,p=q.dy
while(!0){if((p.length!==0?B.b.gV(p):null)!=null)s=!(p.length!==0?B.b.gV(p):null).gcj()
else s=!1
if(!s)break
p.pop()}r=p.length!==0?B.b.gV(p):null
if(!a||r==null){if(q.gcj()){q.lm()
q.EY(q)}return}r.iz(!0)}}
A.iI.prototype={
F(){return"FocusHighlightMode."+this.b}}
A.Et.prototype={
F(){return"FocusHighlightStrategy."+this.b}}
A.tH.prototype={
GW(){var s,r,q=this
switch(0){case 0:s=q.c
if(s==null)return
r=s?B.hF:B.eg
break}s=q.b
if(s==null)s=A.Eu()
q.b=r
if((r==null?A.Eu():r)!==s)q.WA()},
WA(){var s,r,q,p,o,n,m,l,k,j=this,i=j.d,h=i.a
if(h.a===0)return
p=A.aA(i,!0,t.tP)
for(i=p.length,o=0;o<i;++o){s=p[o]
try{if(h.T(0,s)){n=j.b
if(n==null)n=A.Eu()
s.$1(n)}}catch(m){r=A.ag(m)
q=A.ay(m)
l=j instanceof A.bR?A.cY(j):null
n=A.bi("while dispatching notifications for "+A.aD(l==null?A.aS(j):l).i(0))
k=$.fA()
if(k!=null)k.$1(new A.bx(r,q,"widgets library",n,null,!1))}}},
Tc(a){var s,r,q=this
switch(a.gc9(a).a){case 0:case 2:case 3:q.c=!0
s=B.hF
break
case 1:case 4:case 5:q.c=!1
s=B.eg
break
default:s=null}r=q.b
if(s!==(r==null?A.Eu():r))q.GW()},
UE(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.c=!1
i.GW()
s=i.f
if(s==null)return!1
s=A.a([s],t.i4)
B.b.K(s,i.f.gfv())
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
switch(A.aAg(k).a){case 1:break c$1
case 0:r=!0
break
case 2:r=!1
break
default:r=!1}break}s.length===q||(0,A.Q)(s);++m}return r},
qh(){if(this.y)return
this.y=!0
A.dG(this.gRd())},
Re(){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.y=!1
s=h.f
for(r=h.x,q=r.length,p=h.e,o=0;o<r.length;r.length===q||(0,A.Q)(r),++o){n=r[o]
m=n.a
if(m.Q!=null||m===p)if(m.w===h){l=m.dy
m=(l.length!==0?B.b.gV(l):null)==null&&B.b.B(n.b.gfv(),m)
k=m}else k=!1
else k=!1
if(k)n.b.iz(!0)}B.b.X(r)
r=h.f
if(r==null&&h.w==null)h.w=p
q=h.w
if(q!=null&&q!==r){if(s==null)j=null
else{r=s.gfv()
r=A.ue(r,A.an(r).c)
j=r}if(j==null)j=A.b6(t.lc)
r=h.w.gfv()
i=A.ue(r,A.an(r).c)
r=h.r
r.K(0,i.k8(j))
r.K(0,j.k8(i))
r=h.f=h.w
h.w=null}if(s!=r){if(s!=null)h.r.C(0,s)
r=h.f
if(r!=null)h.r.C(0,r)}for(r=h.r,q=A.jk(r,r.r),p=A.m(q).c;q.q();){m=q.d;(m==null?p.a(m):m).wq()}r.X(0)
if(s!=h.f)h.aA()},
$iac:1}
A.MR.prototype={}
A.MS.prototype={}
A.MT.prototype={}
A.MU.prototype={}
A.lD.prototype={
gKh(){var s=this.w,r=this.e
s=r==null?null:r.r
return s},
gzO(){var s=this.x
if(s==null){s=this.e
s=s==null?null:s.f}return s},
gcj(){var s=this.y
if(s==null){s=this.e
s=s==null?null:s.gcj()}return s!==!1},
gdZ(){var s=this.z
if(s==null){s=this.e
s=s==null?null:s.gdZ()}return s===!0},
glE(){var s=this.Q
if(s==null)s=this.e!=null||null
return s!==!1},
glF(){var s=this.as
if(s==null)s=this.e!=null||null
return s!==!1},
glD(){var s=this.ax
if(s==null){s=this.e
s=s==null?null:s.at}return s},
af(){return A.axu()}}
A.q5.prototype={
gbU(a){var s=this.a.e
if(s==null){s=this.d
s.toString}return s},
az(){this.aN()
this.EE()},
EE(){var s,r,q,p=this
if(p.a.e==null)if(p.d==null)p.d=p.DD()
s=p.gbU(p)
p.a.glE()
s.slE(!0)
s=p.gbU(p)
p.a.glF()
s.slF(!0)
p.a.gdZ()
p.gbU(p).sdZ(p.a.gdZ())
if(p.a.y!=null){s=p.gbU(p)
r=p.a.y
r.toString
s.scj(r)}p.f=p.gbU(p).gcj()
p.gbU(p)
p.r=!0
p.gbU(p)
p.w=!0
p.e=p.gbU(p).gj9()
s=p.gbU(p)
r=p.c
r.toString
p.a.gKh()
q=p.a.gzO()
s.e=r
s.f=q==null?s.f:q
r=s.r
s.r=r
p.y=s.ax=new A.Yl(s)
p.gbU(p).S(0,p.gw0())},
DD(){var s=this,r=s.a.glD(),q=s.a.gcj()
s.a.glE()
s.a.glF()
return A.ahn(q,r,!0,!0,null,null,s.a.gdZ())},
m(){var s,r=this
r.gbU(r).H(0,r.gw0())
r.y.ag(0)
s=r.d
if(s!=null)s.m()
r.aL()},
b4(){this.cu()
var s=this.y
if(s!=null)s.KR()
this.Em()},
Em(){var s,r,q,p=this
if(!p.x&&p.a.f){s=p.c
s.toString
s=A.atQ(s)
r=p.gbU(p)
if(r.Q==null)s.wF(r)
q=s.w
if(q!=null)q.x.push(new A.Ls(s,r))
s=s.w
if(s!=null)s.qh()
p.x=!0}},
de(){this.mV()
var s=this.y
if(s!=null)s.KR()
this.x=!1},
aS(a){var s,r,q=this
q.bf(a)
s=a.e
r=q.a
if(s==r.e){if(!J.f(r.gzO(),q.gbU(q).f))q.gbU(q).f=q.a.gzO()
q.a.gKh()
q.gbU(q)
q.a.gdZ()
q.gbU(q).sdZ(q.a.gdZ())
if(q.a.y!=null){s=q.gbU(q)
r=q.a.y
r.toString
s.scj(r)}s=q.gbU(q)
q.a.glE()
s.slE(!0)
s=q.gbU(q)
q.a.glF()
s.slF(!0)}else{q.y.ag(0)
if(s!=null)s.H(0,q.gw0())
q.EE()}if(a.f!==q.a.f)q.Em()},
Uw(){var s,r=this,q=r.gbU(r).gj9(),p=r.gbU(r).gcj()
r.gbU(r)
r.gbU(r)
s=r.a.r
if(s!=null)s.$1(r.gbU(r).gkj())
s=r.e
s===$&&A.b()
if(s!==q)r.au(new A.aaq(r,q))
s=r.f
s===$&&A.b()
if(s!==p)r.au(new A.aar(r,p))
s=r.r
s===$&&A.b()
if(!s)r.au(new A.aas(r,!0))
s=r.w
s===$&&A.b()
if(!s)r.au(new A.aat(r,!0))},
L(a){var s,r,q=this,p=null,o=q.y
o.toString
o.Al(q.a.c)
o=q.a
s=o.d
if(o.at){o=q.f
o===$&&A.b()
r=q.e
r===$&&A.b()
s=A.dC(p,s,!1,p,!1,o,r,p,p,p,p,p,p,p,p,p,p,p,p,p,p)}return A.amV(s,q.gbU(q))}}
A.aaq.prototype={
$0(){this.a.e=this.b},
$S:0}
A.aar.prototype={
$0(){this.a.f=this.b},
$S:0}
A.aas.prototype={
$0(){this.a.r=this.b},
$S:0}
A.aat.prototype={
$0(){this.a.w=this.b},
$S:0}
A.Ev.prototype={
af(){return new A.MV(B.m)}}
A.MV.prototype={
DD(){var s=this.a.glD()
return A.aho(this.a.gcj(),s,this.a.gdZ())},
L(a){var s=this,r=null,q=s.y
q.toString
q.Al(s.a.c)
q=s.gbU(s)
return A.dC(r,A.amV(s.a.d,q),!1,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)}}
A.xL.prototype={}
A.aeY.prototype={
$1(a){var s=this.a
if(--s.a===0){s.b=a
return!1}return!0},
$S:45}
A.q6.prototype={}
A.mR.prototype={
F(){return"TraversalDirection."+this.b}}
A.Ew.prototype={
E_(a,b,c){var s,r=a.gkp(),q=r.dy,p=q.length!==0?B.b.gV(q):null
q=p==null&&r.go1().length!==0
if(q){s=this.Gg(r,a)
if(s.length===0)p=null
else p=b?B.b.gV(s):B.b.gJ(s)}return p==null?a:p},
T2(a,b){return this.E_(a,!1,b)},
a3n(a){},
xO(a,b){},
Ty(a){var s
if(a==null)s=null
else{s=a.jy(t.AB)
if(s==null)s=null
else{s=s.f
s.toString}}return t.fc.a(s)},
Gg(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=this.Ty(a.e),c=d==null,b=c?e:d.f
if(b==null)b=new A.vB(A.y(t.j5,t.uJ))
s=A.y(t.k_,t.hF)
for(r=a.go1(),q=r.length,p=t.fc,o=t.AB,n=t.i4,m=0;m<r.length;r.length===q||(0,A.Q)(r),++m){l=r[m]
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
h=A.anQ(k,2)
if(h==null)k=e
else{k=h.y
j=k==null?e:k.j(0,A.aD(o))
if(j==null)k=e
else{k=j.f
k.toString}}p.a(k)
g=k==null?e:k.r
if(s.j(0,g)==null)s.l(0,g,A.amW(k,b,A.a([],n)))
s.j(0,g).c.push(i)
continue}if(l.gcj()&&!l.gdZ()){if(s.j(0,i)==null)s.l(0,i,A.amW(k,b,A.a([],n)))
s.j(0,i).c.push(l)}}for(r=A.iP(s,s.r);r.q();){q=r.d
p=s.j(0,q).b.MN(s.j(0,q).c,a0)
p=A.a(p.slice(0),A.an(p))
B.b.X(s.j(0,q).c)
B.b.K(s.j(0,q).c,p)}f=A.a([],n)
if(s.a!==0)r=s.T(0,c?e:d.r)
else r=!1
if(r){r=s.j(0,c?e:d.r)
r.toString
new A.Yo(s,f).$1(r)}if(!!f.fixed$length)A.X(A.N("removeWhere"))
B.b.qx(f,new A.Yn(),!0)
return f},
F3(a,b){var s,r,q,p,o,n,m=this,l=a.gkp()
l.toString
m.kQ(l)
m.op$.v(0,l)
s=l.dy
r=s.length!==0?B.b.gV(s):null
if(r==null){q=b?m.T2(a,!1):m.E_(a,!0,!1)
A.kV(q,b?B.cK:B.cL)
return!0}p=m.Gg(l,a)
if(p.length===0)return!1
if(b&&r===B.b.gV(p)){A.kV(B.b.gJ(p),B.cK)
return!0}if(!b&&r===B.b.gJ(p)){A.kV(B.b.gV(p),B.cL)
return!0}for(l=J.at(b?p:new A.cH(p,A.an(p).h("cH<1>"))),o=null;l.q();o=n){n=l.gG(l)
if(o==r){l=b?B.cK:B.cL
n.tV()
s=n.e
s.toString
A.amb(s,1,l)
return!0}}return!1}}
A.Yo.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=a.c,r=s.length,q=this.b,p=this.a,o=0;o<s.length;s.length===r||(0,A.Q)(s),++o){n=s[o]
if(p.T(0,n)){m=p.j(0,n)
m.toString
this.$1(m)}else q.push(n)}},
$S:269}
A.Yn.prototype={
$1(a){return!a.gcj()||a.gdZ()},
$S:11}
A.pZ.prototype={}
A.Mo.prototype={}
A.Vb.prototype={
a1P(a,b){var s=this
switch(b.a){case 0:return s.qD(a,!1,!0)
case 2:return s.qD(a,!0,!0)
case 3:return s.qD(a,!1,!1)
case 1:return s.qD(a,!0,!1)}},
qD(a,b,c){var s=a.gkp().gpf().dV(0)
A.np(s,new A.Vj(c,b),t.lc)
if(s.length!==0)return B.b.gJ(s)
return null},
YO(a,b,c){var s,r=c.gpf().dV(0)
A.np(r,new A.Vd(),t.lc)
switch(a.a){case 3:s=new A.aN(r,new A.Ve(b),A.an(r).h("aN<1>"))
break
case 1:s=new A.aN(r,new A.Vf(b),A.an(r).h("aN<1>"))
break
case 0:case 2:s=null
break
default:s=null}return s},
YP(a,b,c){var s=c.dV(0)
A.np(s,new A.Vg(),t.lc)
switch(a.a){case 0:return new A.aN(s,new A.Vh(b),A.an(s).h("aN<1>"))
case 2:return new A.aN(s,new A.Vi(b),A.an(s).h("aN<1>"))
case 3:case 1:break}return null},
Xt(a,b,c){var s,r,q=this,p=q.op$,o=p.j(0,b),n=o!=null
if(n){s=o.a
s=s.length!==0&&B.b.gJ(s).a!==a}else s=!1
if(s){s=o.a
if(B.b.gV(s).b.Q==null){q.kQ(b)
p.v(0,b)
return!1}r=new A.Vc(q,o,b)
switch(a.a){case 2:case 0:switch(B.b.gJ(s).a.a){case 3:case 1:q.kQ(b)
p.v(0,b)
break
case 0:case 2:if(r.$1(a))return!0
break}break
case 3:case 1:switch(B.b.gJ(s).a.a){case 3:case 1:if(r.$1(a))return!0
break
case 0:case 2:q.kQ(b)
p.v(0,b)
break}break}}if(n&&o.a.length===0){q.kQ(b)
p.v(0,b)}return!1},
a35(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=a.gkp(),f=g.dy,e=f.length!==0?B.b.gV(f):h
if(e==null){s=i.a1P(a,b)
if(s==null)s=a
switch(b.a){case 0:case 3:A.kV(s,B.cL)
break
case 1:case 2:A.kV(s,B.cK)
break}return!0}if(i.Xt(b,g,e))return!0
f=e.e
f.toString
r=A.i0(f)
f=b.a
switch(f){case 2:case 0:q=i.YP(b,e.gaM(e),g.gpf())
if(r!=null&&!r.d.gHx()){q.toString
p=new A.aN(q,new A.Vk(r),q.$ti.h("aN<q.E>"))
if(!p.gR(p))q=p}if(!q.ga8(q).q()){o=h
break}n=A.aA(q,!0,A.m(q).h("q.E"))
if(b===B.Zu){m=A.an(n).h("cH<1>")
n=A.aA(new A.cH(n,m),!0,m.h("bn.E"))}l=new A.aN(n,new A.Vl(new A.C(e.gaM(e).a,-1/0,e.gaM(e).c,1/0)),A.an(n).h("aN<1>"))
if(!l.gR(l)){o=l.gJ(l)
break}A.np(n,new A.Vm(e),t.lc)
o=B.b.gJ(n)
break
case 1:case 3:q=i.YO(b,e.gaM(e),g)
if(r!=null&&!r.d.gHx()){q.toString
p=new A.aN(q,new A.Vn(r),q.$ti.h("aN<q.E>"))
if(!p.gR(p))q=p}if(!q.ga8(q).q()){o=h
break}n=A.aA(q,!0,A.m(q).h("q.E"))
if(b===B.Zv){m=A.an(n).h("cH<1>")
n=A.aA(new A.cH(n,m),!0,m.h("bn.E"))}l=new A.aN(n,new A.Vo(new A.C(-1/0,e.gaM(e).b,1/0,e.gaM(e).d)),A.an(n).h("aN<1>"))
if(!l.gR(l)){o=l.gJ(l)
break}A.np(n,new A.Vp(e),t.lc)
o=B.b.gJ(n)
break
default:o=h}if(o!=null){m=i.op$
k=m.j(0,g)
j=new A.pZ(b,e)
if(k!=null)k.a.push(j)
else m.l(0,g,new A.Mo(A.a([j],t.gE)))
switch(f){case 0:case 3:A.kV(o,B.cL)
break
case 2:case 1:A.kV(o,B.cK)
break}return!0}return!1}}
A.acM.prototype={
$1(a){return a.b===this.a},
$S:270}
A.Vj.prototype={
$2(a,b){if(this.a)if(this.b)return B.d.b2(a.gaM(a).b,b.gaM(b).b)
else return B.d.b2(b.gaM(b).d,a.gaM(a).d)
else if(this.b)return B.d.b2(a.gaM(a).a,b.gaM(b).a)
else return B.d.b2(b.gaM(b).c,a.gaM(a).c)},
$S:35}
A.Vd.prototype={
$2(a,b){return B.d.b2(a.gaM(a).gaI().a,b.gaM(b).gaI().a)},
$S:35}
A.Ve.prototype={
$1(a){var s=this.a
return!a.gaM(a).k(0,s)&&a.gaM(a).gaI().a<=s.a},
$S:11}
A.Vf.prototype={
$1(a){var s=this.a
return!a.gaM(a).k(0,s)&&a.gaM(a).gaI().a>=s.c},
$S:11}
A.Vg.prototype={
$2(a,b){return B.d.b2(a.gaM(a).gaI().b,b.gaM(b).gaI().b)},
$S:35}
A.Vh.prototype={
$1(a){var s=this.a
return!a.gaM(a).k(0,s)&&a.gaM(a).gaI().b<=s.b},
$S:11}
A.Vi.prototype={
$1(a){var s=this.a
return!a.gaM(a).k(0,s)&&a.gaM(a).gaI().b>=s.d},
$S:11}
A.Vc.prototype={
$1(a){var s,r,q=this.b.a.pop().b,p=q.e
p.toString
p=A.i0(p)
s=$.ak.I$.f.f.e
s.toString
if(p!=A.i0(s)){p=this.a
s=this.c
p.kQ(s)
p.op$.v(0,s)
return!1}switch(a.a){case 0:case 3:r=B.cL
break
case 1:case 2:r=B.cK
break
default:r=null}A.kV(q,r)
return!0},
$S:272}
A.Vk.prototype={
$1(a){var s=a.e
s.toString
return A.i0(s)===this.a},
$S:11}
A.Vl.prototype={
$1(a){var s=a.gaM(a).f7(this.a)
return!s.gR(s)},
$S:11}
A.Vm.prototype={
$2(a,b){var s=this.a
return B.d.b2(Math.abs(a.gaM(a).gaI().a-s.gaM(s).gaI().a),Math.abs(b.gaM(b).gaI().a-s.gaM(s).gaI().a))},
$S:35}
A.Vn.prototype={
$1(a){var s=a.e
s.toString
return A.i0(s)===this.a},
$S:11}
A.Vo.prototype={
$1(a){var s=a.gaM(a).f7(this.a)
return!s.gR(s)},
$S:11}
A.Vp.prototype={
$2(a,b){var s=this.a
return B.d.b2(Math.abs(a.gaM(a).gaI().b-s.gaM(s).gaI().b),Math.abs(b.gaM(b).gaI().b-s.gaM(s).gaI().b))},
$S:35}
A.cL.prototype={
gIk(){var s=this.d
if(s==null){s=this.c.e
s.toString
s=this.d=new A.acK().$1(s)}s.toString
return s}}
A.acJ.prototype={
$1(a){var s=a.gIk()
return A.ue(s,A.an(s).c)},
$S:273}
A.acL.prototype={
$2(a,b){switch(this.a.a){case 1:return B.d.b2(a.b.a,b.b.a)
case 0:return B.d.b2(b.b.c,a.b.c)}},
$S:105}
A.acK.prototype={
$1(a){var s,r,q=A.a([],t.AG),p=t.I,o=a.jy(p)
for(;o!=null;){s=o.f
s.toString
q.push(p.a(s))
s=A.anQ(o,1)
if(s==null)o=null
else{s=s.y
r=s==null?null:s.j(0,A.aD(p))
o=r}}return q},
$S:275}
A.ig.prototype={
gaM(a){var s,r,q,p,o=this
if(o.b==null)for(s=o.a,s=new A.aH(s,new A.acH(),A.an(s).h("aH<1,C>")),s=new A.dn(s,s.gp(s)),r=A.m(s).c;s.q();){q=s.d
if(q==null)q=r.a(q)
p=o.b
if(p==null){o.b=q
p=q}o.b=p.om(q)}s=o.b
s.toString
return s}}
A.acH.prototype={
$1(a){return a.b},
$S:276}
A.acI.prototype={
$2(a,b){switch(this.a.a){case 1:return B.d.b2(a.gaM(a).a,b.gaM(b).a)
case 0:return B.d.b2(b.gaM(b).c,a.gaM(a).c)}},
$S:277}
A.vB.prototype={
RZ(a){var s,r,q,p,o,n=B.b.gJ(a).a,m=t.hY,l=A.a([],m),k=A.a([],t.lZ)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.Q)(a),++r){q=a[r]
p=q.a
if(p==n){l.push(q)
continue}k.push(new A.ig(l))
l=A.a([q],m)
n=p}if(l.length!==0)k.push(new A.ig(l))
for(m=k.length,r=0;r<k.length;k.length===m||(0,A.Q)(k),++r){s=k[r].a
if(s.length===1)continue
o=B.b.gJ(s).a
o.toString
A.an3(s,o)}return k},
Fp(a){var s,r,q,p
A.np(a,new A.a2F(),t.dP)
s=B.b.gJ(a)
r=new A.a2G().$2(s,a)
if(J.bE(r)<=1)return s
q=A.axQ(r)
q.toString
A.an3(r,q)
p=this.RZ(r)
if(p.length===1)return B.b.gJ(B.b.gJ(p).a)
A.axP(p,q)
return B.b.gJ(B.b.gJ(p).a)},
MN(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a.length<=1)return a
s=A.a([],t.hY)
for(r=a.length,q=t.n2,p=t.I,o=0;o<a.length;a.length===r||(0,A.Q)(a),++o){n=a[o]
m=n.gaM(n)
l=n.e.y
k=l==null?null:l.j(0,A.aD(p))
if(k==null)l=null
else{l=k.f
l.toString}q.a(l)
s.push(new A.cL(l==null?null:l.w,m,n))}j=A.a([],t.i4)
i=this.Fp(s)
j.push(i.c)
B.b.v(s,i)
for(;s.length!==0;){h=this.Fp(s)
j.push(h.c)
B.b.v(s,h)}return j}}
A.a2F.prototype={
$2(a,b){return B.d.b2(a.b.b,b.b.b)},
$S:105}
A.a2G.prototype={
$2(a,b){var s=a.b,r=A.an(b).h("aN<1>")
return A.aA(new A.aN(b,new A.a2H(new A.C(-1/0,s.b,1/0,s.d)),r),!0,r.h("q.E"))},
$S:278}
A.a2H.prototype={
$1(a){var s=a.b.f7(this.a)
return!s.gR(s)},
$S:279}
A.tI.prototype={
af(){return new A.MW(B.m)}}
A.MW.prototype={
az(){this.aN()
this.d=A.ahn(!1,"FocusTraversalGroup",!0,!0,null,null,!0)},
m(){var s=this.d
if(s!=null)s.m()
this.aL()},
L(a){var s=null,r=this.a,q=r.c,p=this.d
p.toString
return new A.q7(q,p,A.Es(!1,!1,r.f,s,!0,!0,p,!1,s,s,s,s,s,!0),s)}}
A.q7.prototype={
bX(a){return!1}}
A.Jd.prototype={
d_(a){A.kV(a.gbU(a),B.U_)}}
A.m6.prototype={}
A.Hz.prototype={
d_(a){var s=$.ak.I$.f.f
s.e.a3(t.AB).f.F3(s,!0)}}
A.mm.prototype={}
A.Ir.prototype={
d_(a){var s=$.ak.I$.f.f
s.e.a3(t.AB).f.F3(s,!1)}}
A.Do.prototype={
d_(a){var s=$.ak.I$.f.f,r=s.e.a3(t.AB)
r.f.a35(s,a.a)}}
A.MX.prototype={}
A.P6.prototype={
xO(a,b){var s
this.Np(a,b)
s=this.op$.j(0,b)
if(s!=null){s=s.a
if(!!s.fixed$length)A.X(A.N("removeWhere"))
B.b.qx(s,new A.acM(a),!0)}}}
A.RH.prototype={}
A.RI.prototype={}
A.ei.prototype={
gbm(){var s,r=$.ak.I$.z.j(0,this)
if(r instanceof A.fn){s=r.ok
s.toString
if(A.m(this).c.b(s))return s}return null}}
A.bu.prototype={
i(a){var s=this,r=s.a,q=r!=null?" "+r:""
if(A.B(s)===B.ZK)return"[GlobalKey#"+A.bK(s)+q+"]"
return"["+("<optimized out>#"+A.bK(s))+q+"]"}}
A.jW.prototype={
k(a,b){if(b==null)return!1
if(J.T(b)!==A.B(this))return!1
return this.$ti.b(b)&&b.a===this.a},
gu(a){return A.l6(this.a)},
i(a){var s="GlobalObjectKey",r=B.c.rJ(s,"<State<StatefulWidget>>")?B.c.a1(s,0,-8):s
return"["+r+" "+("<optimized out>#"+A.bK(this.a))+"]"}}
A.i.prototype={
bW(){var s=this.a
return s==null?"Widget":"Widget-"+s.i(0)},
k(a,b){if(b==null)return!1
return this.O3(0,b)},
gu(a){return A.H.prototype.gu.call(this,this)}}
A.b3.prototype={
bO(a){return new A.Kb(this,B.a6)}}
A.ab.prototype={
bO(a){return A.awD(this)}}
A.Qb.prototype={
F(){return"_StateLifecycle."+this.b}}
A.ai.prototype={
az(){},
aS(a){},
eM(){},
au(a){a.$0()
this.c.fN()},
de(){},
c2(){},
m(){},
b4(){}}
A.aQ.prototype={}
A.ds.prototype={
bO(a){return new A.m9(this,B.a6,A.m(this).h("m9<ds.T>"))}}
A.b7.prototype={
bO(a){return A.au9(this)}}
A.ax.prototype={
aG(a,b){},
o9(a){}}
A.Fg.prototype={
bO(a){return new A.Ff(this,B.a6)}}
A.b1.prototype={
bO(a){return A.awv(this)}}
A.en.prototype={
bO(a){return A.auT(this)}}
A.n5.prototype={
F(){return"_ElementLifecycle."+this.b}}
A.Ng.prototype={
GH(a){a.aT(new A.abg(this,a))
a.pg()},
Zg(){var s,r,q,p=this
p.a=!0
r=p.b
q=A.aA(r,!0,A.m(r).c)
B.b.dl(q,A.afN())
s=q
r.X(0)
try{r=s
new A.cH(r,A.aS(r).h("cH<1>")).Z(0,p.gZe())}finally{p.a=!1}},
C(a,b){if(b.w===B.c9){b.de()
b.aT(A.afO())}this.b.C(0,b)}}
A.abg.prototype={
$1(a){this.a.GH(a)},
$S:5}
A.TG.prototype={
Bm(a){var s=this
if(a.at){s.e=!0
return}if(!s.d&&s.a!=null){s.d=!0
s.a.$0()}s.c.push(a)
a.at=!0},
K1(a){try{a.$0()}finally{}},
r7(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=b==null
if(f&&h.c.length===0)return
try{h.d=!0
if(!f){g.a=null
h.e=!1
try{b.$0()}finally{}}f=h.c
B.b.dl(f,A.afN())
h.e=!1
g.b=f.length
g.c=0
for(n=0;n<g.b;){s=f[n]
r=!1
if(r){n=s.f
n.toString
m=n instanceof A.bR?A.cY(n):null
A.aii(A.aD(m==null?A.aS(n):m).i(0),null,null)}try{s.KG()}catch(l){q=A.ag(l)
p=A.ay(l)
n=A.bi("while rebuilding dirty elements")
k=$.fA()
if(k!=null)k.$1(new A.bx(q,p,"widgets library",n,new A.TH(g,h,s),!1))}if(r)A.aih()
n=++g.c
k=g.b
j=f.length
if(k>=j){k=h.e
k.toString}else k=!0
if(k){if(!!f.immutable$list)A.X(A.N("sort"))
n=j-1
if(n-0<=32)A.K3(f,0,n,A.afN())
else A.K2(f,0,n,A.afN())
n=h.e=!1
g.b=f.length
while(!0){k=g.c
if(!(k>0?f[k-1].as:n))break
g.c=k-1}n=k}}}finally{for(f=h.c,n=f.length,i=0;i<n;++i){o=f[i]
o.at=!1}B.b.X(f)
h.d=!1
h.e=null}},
a_A(a){return this.r7(a,null)},
a1N(){var s,r,q
try{this.K1(this.b.gZf())}catch(q){s=A.ag(q)
r=A.ay(q)
A.aj2(A.Ea("while finalizing the widget tree"),s,r,null)}finally{}},
a4V(a,b){try{a.b=b
a.eM()}finally{}}}
A.TH.prototype={
$0(){var s=null,r=A.a([],t.F),q=this.a,p=q.c,o=this.b.c.length,n="The element being rebuilt at the time was index "+p
q=""+q.b
if(p<o)J.l8(r,A.hr(n+" of "+q,this.c,!0,B.aJ,s,!1,s,s,B.aq,s,!1,!0,!0,B.aX,s,t.h))
else J.l8(r,A.XQ(n+" of "+q+", but _dirtyElements only had "+o+" entries. This suggests some confusion in the framework internals."))
return r},
$S:16}
A.v1.prototype={
xF(){var s=this.a
this.c=new A.aco(this,s==null?null:s.c)}}
A.aco.prototype={
cT(a){var s=this.a.Kj(a)
if(s)return
s=this.b
if(s!=null)s.cT(a)}}
A.aU.prototype={
Qv(a){},
k(a,b){if(b==null)return!1
return this===b},
eM(){var s=this
if(A.anI(s.b,s.f)){s.fN()
s.b=null}s.aT(new A.Xf(s))
s.b=null},
ga9(){var s,r
for(s=this;s!=null;){r={}
if(s.w===B.Ck)break
else if(s instanceof A.bv)return s.ga9()
else{r.a=null
s.aT(new A.Xg(r))
s=r.a}}return null},
a1f(a){var s=null
return A.hr(a,this,!0,B.aJ,s,!1,s,s,B.aq,s,!1,!0,!0,B.aX,s,t.h)},
aT(a){},
dD(a,b,c){var s,r,q=this
if(b==null){if(a!=null)q.y5(a)
return null}if(a!=null){s=a.f.k(0,b)
if(s){if(!J.f(a.d,c))q.Lq(a,c)
s=a}else{s=a.f
s.toString
if(A.B(s)===A.B(b)&&J.f(s.a,b.a)){if(!J.f(a.d,c))q.Lq(a,c)
a.bb(0,b)
s=a}else{q.y5(a)
r=q.tb(b,c)
s=r}}}else{r=q.tb(b,c)
s=r}return s},
fa(a,b){var s,r,q,p=this
p.a=a
p.d=b
p.w=B.c9
s=a!=null
if(s){r=a.e
r===$&&A.b();++r}else r=1
p.e=r
if(s)p.r=a.r
q=p.f.a
if(q instanceof A.ei)p.r.z.l(0,q,p)
p.xb()
p.xF()},
bb(a,b){this.f=b},
Lq(a,b){new A.Xh(b).$1(a)},
xg(a){this.d=a},
GR(a){var s=a+1,r=this.e
r===$&&A.b()
if(r<s){this.e=s
this.aT(new A.Xc(s))}},
o3(){this.aT(new A.Xe())
this.d=null},
r2(a){this.aT(new A.Xd(a))
this.d=a},
Y1(a,b){var s,r,q=$.ak.I$.z.j(0,a)
if(q==null)return null
s=q.f
s.toString
if(!(A.B(s)===A.B(b)&&J.f(s.a,b.a)))return null
r=q.a
if(r!=null){r.j6(q)
r.y5(q)}this.r.b.b.v(0,q)
return q},
tb(a,b){var s,r,q,p,o,n,m=this,l=!1
if(l)A.aii(A.B(a).i(0),null,null)
try{s=a.a
if(s instanceof A.ei){r=m.Y1(s,a)
if(r!=null){o=r
o.a=m
o.toString
n=m.e
n===$&&A.b()
o.GR(n)
o.c2()
o.aT(A.aoI())
o.r2(b)
q=m.dD(r,a,b)
o=q
o.toString
return o}}p=a.bO(0)
p.fa(m,b)
return p}finally{if(l)A.aih()}},
y5(a){a.a=null
a.o3()
this.r.b.C(0,a)},
j6(a){},
c2(){var s=this,r=s.z,q=r==null,p=!q&&r.a!==0||s.Q
s.w=B.c9
if(!q)r.X(0)
s.Q=!1
s.xb()
s.xF()
if(s.as)s.r.Bm(s)
if(p)s.b4()},
de(){var s,r,q=this,p=q.z
if(p!=null&&p.a!==0)for(p=new A.kI(p,p.n7()),s=A.m(p).c;p.q();){r=p.d;(r==null?s.a(r):r).ak.v(0,q)}q.y=null
q.w=B.a_N},
pg(){var s=this,r=s.f,q=r==null?null:r.a
if(q instanceof A.ei){r=s.r.z
if(J.f(r.j(0,q),s))r.v(0,q)}s.z=s.f=null
s.w=B.Ck},
gcE(a){var s,r=this.ga9()
if(r instanceof A.E){s=r.k3
s.toString
return s}return null},
ya(a,b){var s=this.z;(s==null?this.z=A.cC(t.tx):s).C(0,a)
a.Lm(this,b)
s=a.f
s.toString
return t.sg.a(s)},
a3(a){var s=this.y,r=s==null?null:s.j(0,A.aD(a))
if(r!=null)return a.a(this.ya(r,null))
this.Q=!0
return null},
jy(a){var s=this.y
return s==null?null:s.j(0,A.aD(a))},
xF(){var s=this.a
this.c=s==null?null:s.c},
xb(){var s=this.a
this.y=s==null?null:s.y},
IU(a){var s,r,q,p=this.a
while(!0){s=p==null
if(!s){r=p.f
r.toString
q=r instanceof A.bR?A.cY(r):null
r=A.aD(q==null?A.aS(r):q)!==A.aD(a)}else r=!1
if(!r)break
p=p.a}if(s)s=null
else{s=p.f
s.toString}return a.h("0?").a(s)},
kh(a){var s,r,q=this.a
for(;s=q==null,!s;){if(q instanceof A.fn){r=q.ok
r.toString
r=a.b(r)}else r=!1
if(r)break
q=q.a}t.Ci.a(q)
if(s)s=null
else{s=q.ok
s.toString}return a.h("0?").a(s)},
rT(a){var s=this.a
for(;s!=null;){if(s instanceof A.bv&&a.b(s.ga9()))return a.a(s.ga9())
s=s.a}return null},
AO(a){var s=this.a
while(!0){if(!(s!=null&&a.$1(s)))break
s=s.a}},
b4(){this.fN()},
cT(a){var s=this.c
if(s!=null)s.cT(a)},
bW(){var s=this.f
s=s==null?null:s.bW()
return s==null?"<optimized out>#"+A.bK(this)+"(DEFUNCT)":s},
fN(){var s=this
if(s.w!==B.c9)return
if(s.as)return
s.as=!0
s.r.Bm(s)},
tP(a){var s
if(this.w===B.c9)s=!this.as&&!a
else s=!0
if(s)return
this.hB()},
KG(){return this.tP(!1)},
hB(){this.as=!1},
$iaf:1}
A.Xf.prototype={
$1(a){a.b=this.a.b
a.eM()},
$S:5}
A.Xg.prototype={
$1(a){this.a.a=a},
$S:5}
A.Xh.prototype={
$1(a){a.xg(this.a)
if(!(a instanceof A.bv))a.aT(this)},
$S:5}
A.Xc.prototype={
$1(a){a.GR(this.a)},
$S:5}
A.Xe.prototype={
$1(a){a.o3()},
$S:5}
A.Xd.prototype={
$1(a){a.r2(this.a)},
$S:5}
A.Eb.prototype={
aD(a){var s=this.d,r=new A.IR(s,A.ar())
r.aE()
r.QH(s)
return r}}
A.rI.prototype={
fa(a,b){this.C3(a,b)
this.vJ()},
vJ(){this.KG()},
hB(){var s,r,q,p,o,n,m=this,l=null
try{l=m.b3()
m.f.toString}catch(o){s=A.ag(o)
r=A.ay(o)
n=A.XR(A.aj2(A.bi("building "+m.i(0)),s,r,new A.UH(m)))
l=n}finally{m.uF()}try{m.ay=m.dD(m.ay,l,m.d)}catch(o){q=A.ag(o)
p=A.ay(o)
n=A.XR(A.aj2(A.bi("building "+m.i(0)),q,p,new A.UI(m)))
l=n
m.ay=m.dD(null,l,m.d)}},
aT(a){var s=this.ay
if(s!=null)a.$1(s)},
j6(a){this.ay=null
this.kP(a)}}
A.UH.prototype={
$0(){var s=A.a([],t.F)
return s},
$S:16}
A.UI.prototype={
$0(){var s=A.a([],t.F)
return s},
$S:16}
A.Kb.prototype={
b3(){var s=this.f
s.toString
return t.yB.a(s).L(this)},
bb(a,b){this.pK(0,b)
this.tP(!0)}}
A.fn.prototype={
b3(){return this.ok.L(this)},
eM(){var s=this
if(A.anI(s.b,s.f))s.ok.eM()
s.Nm()},
vJ(){this.ok.az()
this.ok.b4()
this.N7()},
hB(){var s=this
if(s.p1){s.ok.b4()
s.p1=!1}s.N8()},
bb(a,b){var s,r,q,p=this
p.pK(0,b)
s=p.ok
r=s.a
r.toString
q=p.f
q.toString
s.a=t.aw.a(q)
s.aS(r)
p.tP(!0)},
c2(){this.Nk()
this.ok.c2()
this.fN()},
de(){this.ok.de()
this.C0()},
pg(){var s=this
s.uG()
s.ok.m()
s.ok=s.ok.c=null},
ya(a,b){return this.C1(a,b)},
b4(){this.Nl()
this.p1=!0}}
A.vv.prototype={
b3(){var s=this.f
s.toString
return t.im.a(s).b},
bb(a,b){var s=this,r=s.f
r.toString
t.im.a(r)
s.pK(0,b)
s.AL(r)
s.tP(!0)},
AL(a){this.mg(a)}}
A.m9.prototype={
D3(a){this.aT(new A.a1y(a))},
mg(a){var s=this.f
s.toString
this.D3(this.$ti.h("ds<1>").a(s))}}
A.a1y.prototype={
$1(a){if(a instanceof A.bv)this.a.nH(a.ga9())
else a.aT(this)},
$S:5}
A.f4.prototype={
xb(){var s=this,r=s.a,q=r==null?null:r.y
if(q==null)q=B.Tr
r=s.f
r.toString
s.y=q.a4M(0,A.B(r),s)},
Br(a,b){this.ak.l(0,a,b)},
Lm(a,b){this.Br(a,null)},
Ke(a,b){b.b4()},
AL(a){var s=this.f
s.toString
if(t.sg.a(s).bX(a))this.Oh(a)},
mg(a){var s,r,q
for(s=this.ak,s=new A.xS(s,s.vo()),r=A.m(s).c;s.q();){q=s.d
this.Ke(a,q==null?r.a(q):q)}}}
A.bv.prototype={
ga9(){var s=this.ay
s.toString
return s},
SZ(){var s=this.a
while(!0){if(!(s!=null&&!(s instanceof A.bv)))break
s=s.a}return t.bI.a(s)},
SY(){var s,r={},q=r.a=this.a
r.b=null
while(!0){if(!(q!=null&&!(q instanceof A.bv)))break
if(q instanceof A.m9){r.b=q
break}s=q.a
r.a=s
q=s}return r.b},
fa(a,b){var s,r=this
r.C3(a,b)
s=r.f
s.toString
r.ay=t.xL.a(s).aD(r)
r.r2(b)
r.uF()},
bb(a,b){this.pK(0,b)
this.Fo()},
hB(){this.Fo()},
Fo(){var s=this,r=s.f
r.toString
t.xL.a(r).aG(s,s.ga9())
s.uF()},
a5Q(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=new A.a2P(a4),g=new A.a2Q(i),f=a3.length,e=f-1,d=a2.length,c=d-1,b=d===f?a2:A.b_(f,$.ajA(),!1,t.h),a=i,a0=0,a1=0
while(!0){if(!(a1<=c&&a0<=e))break
s=h.$1(a2[a1])
r=a3[a0]
if(s!=null){f=s.f
f.toString
q=f instanceof A.bR?A.cY(f):i
d=A.aD(q==null?A.aS(f):q)
q=r instanceof A.bR?A.cY(r):i
f=!(d===A.aD(q==null?A.aS(r):q)&&J.f(f.a,r.a))}else f=!0
if(f)break
f=j.dD(s,r,g.$2(a0,a))
f.toString
b[a0]=f;++a0;++a1
a=f}p=c
while(!0){o=a1<=p
if(!(o&&a0<=e))break
s=h.$1(a2[p])
r=a3[e]
if(s!=null){f=s.f
f.toString
q=f instanceof A.bR?A.cY(f):i
d=A.aD(q==null?A.aS(f):q)
q=r instanceof A.bR?A.cY(r):i
f=!(d===A.aD(q==null?A.aS(r):q)&&J.f(f.a,r.a))}else f=!0
if(f)break;--p;--e}if(o){n=A.y(t.qI,t.h)
for(;a1<=p;){s=h.$1(a2[a1])
if(s!=null){f=s.f.a
if(f!=null)n.l(0,f,s)
else{s.a=null
s.o3()
f=j.r.b
if(s.w===B.c9){s.de()
s.aT(A.afO())}f.b.C(0,s)}}++a1}o=!0}else n=i
for(;a0<=e;a=f){r=a3[a0]
if(o){m=r.a
if(m!=null){s=n.j(0,m)
if(s!=null){f=s.f
f.toString
q=f instanceof A.bR?A.cY(f):i
d=A.aD(q==null?A.aS(f):q)
q=r instanceof A.bR?A.cY(r):i
if(d===A.aD(q==null?A.aS(r):q)&&J.f(f.a,m))n.v(0,m)
else s=i}}else s=i}else s=i
f=j.dD(s,r,g.$2(a0,a))
f.toString
b[a0]=f;++a0}e=a3.length-1
while(!0){if(!(a1<=c&&a0<=e))break
f=j.dD(a2[a1],a3[a0],g.$2(a0,a))
f.toString
b[a0]=f;++a0;++a1
a=f}if(o&&n.a!==0)for(f=n.gb_(n),f=new A.e1(J.at(f.a),f.b),d=A.m(f).z[1];f.q();){l=f.a
if(l==null)l=d.a(l)
if(!a4.B(0,l)){l.a=null
l.o3()
k=j.r.b
if(l.w===B.c9){l.de()
l.aT(A.afO())}k.b.C(0,l)}}return b},
de(){this.C0()},
pg(){var s=this,r=s.f
r.toString
t.xL.a(r)
s.uG()
r.o9(s.ga9())
s.ay.m()
s.ay=null},
xg(a){var s,r=this,q=r.d
r.Nj(a)
s=r.CW
s.toString
s.jg(r.ga9(),q,r.d)},
r2(a){var s,r,q=this
q.d=a
s=q.CW=q.SZ()
if(s!=null)s.jd(q.ga9(),a)
r=q.SY()
if(r!=null){s=r.f
s.toString
t.yL.a(s).nH(q.ga9())}},
o3(){var s=this,r=s.CW
if(r!=null){r.jq(s.ga9(),s.d)
s.CW=null}s.d=null},
jd(a,b){},
jg(a,b,c){},
jq(a,b){}}
A.a2P.prototype={
$1(a){var s=this.a.B(0,a)
return s?null:a},
$S:280}
A.a2Q.prototype={
$2(a,b){return new A.oo(b,a,t.wx)},
$S:281}
A.vT.prototype={
fa(a,b){this.uO(a,b)}}
A.Ff.prototype={
j6(a){this.kP(a)},
jd(a,b){},
jg(a,b,c){},
jq(a,b){}}
A.wo.prototype={
aT(a){var s=this.p1
if(s!=null)a.$1(s)},
j6(a){this.p1=null
this.kP(a)},
fa(a,b){var s,r,q=this
q.uO(a,b)
s=q.p1
r=q.f
r.toString
q.p1=q.dD(s,t.Dp.a(r).c,null)},
bb(a,b){var s,r,q=this
q.mT(0,b)
s=q.p1
r=q.f
r.toString
q.p1=q.dD(s,t.Dp.a(r).c,null)},
jd(a,b){var s=this.ay
s.toString
t.fB.a(s).saO(a)},
jg(a,b,c){},
jq(a,b){var s=this.ay
s.toString
t.fB.a(s).saO(null)}}
A.eI.prototype={
ga9(){return t.gz.a(A.bv.prototype.ga9.call(this))},
gHH(a){var s=this.p1
s===$&&A.b()
return new A.aN(s,new A.a0J(this),A.an(s).h("aN<1>"))},
jd(a,b){var s=this.ga9(),r=b.a
s.z2(0,a,r==null?null:r.ga9())},
jg(a,b,c){var s=this.ga9(),r=c.a
s.tt(a,r==null?null:r.ga9())},
jq(a,b){this.ga9().v(0,a)},
aT(a){var s,r,q,p,o=this.p1
o===$&&A.b()
s=o.length
r=this.p2
q=0
for(;q<s;++q){p=o[q]
if(!r.B(0,p))a.$1(p)}},
j6(a){this.p2.C(0,a)
this.kP(a)},
tb(a,b){return this.C2(a,b)},
fa(a,b){var s,r,q,p,o,n,m,l=this
l.uO(a,b)
s=l.f
s.toString
s=t.tk.a(s).c
r=s.length
q=A.b_(r,$.ajA(),!1,t.h)
for(p=t.wx,o=null,n=0;n<r;++n,o=m){m=l.C2(s[n],new A.oo(o,n,p))
q[n]=m}l.p1=q},
bb(a,b){var s,r,q,p=this
p.mT(0,b)
s=p.f
s.toString
t.tk.a(s)
r=p.p1
r===$&&A.b()
q=p.p2
p.p1=p.a5Q(r,s.c,q)
q.X(0)}}
A.a0J.prototype={
$1(a){return!this.a.p2.B(0,a)},
$S:45}
A.oo.prototype={
k(a,b){if(b==null)return!1
if(J.T(b)!==A.B(this))return!1
return b instanceof A.oo&&this.b===b.b&&J.f(this.a,b.a)},
gu(a){return A.V(this.b,this.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.O8.prototype={}
A.Ob.prototype={
bO(a){return A.X(A.bZ(null))}}
A.Qc.prototype={}
A.lH.prototype={}
A.ca.prototype={
HV(){return this.a.$0()},
Ju(a){return this.b.$1(a)}}
A.ED.prototype={
L(a){var s=this,r=A.y(t.n,t.ob),q=A.dp(a),p=q==null?null:q.ay
if(s.d==null)if(s.e==null)if(s.f==null)if(s.r==null)q=!1
else q=!0
else q=!0
else q=!0
else q=!0
if(q)r.l(0,B.Cb,new A.ca(new A.YF(s),new A.YG(s,p),t.g0))
if(s.ay==null)q=!1
else q=!0
if(q)r.l(0,B.ZC,new A.ca(new A.YH(s),new A.YL(s,p),t.da))
if(s.cy==null)q=!1
else q=!0
if(q)r.l(0,B.C9,new A.ca(new A.YM(s),new A.YN(s,p),t.on))
if(s.rx!=null||s.ry!=null||s.to!=null||!1)r.l(0,B.lP,new A.ca(new A.YO(s),new A.YP(s,p),t.n_))
if(s.x2!=null||s.y1!=null||s.y2!=null||s.an!=null)r.l(0,B.lO,new A.ca(new A.YQ(s),new A.YR(s,p),t.ta))
if(s.aq!=null||s.ad!=null||s.aV!=null||!1)r.l(0,B.lM,new A.ca(new A.YS(s),new A.YI(s,p),t.uX))
q=!1
if(q)r.l(0,B.ZF,new A.ca(new A.YJ(s),new A.YK(s,p),t.p1))
return new A.j1(s.c,r,s.ar,s.ai,null,null)}}
A.YF.prototype={
$0(){return A.awN(this.a,null)},
$S:282}
A.YG.prototype={
$1(a){var s=this.a
a.y1=s.d
a.y2=s.e
a.an=s.f
a.aq=s.r
a.f4=a.ce=a.be=a.bj=a.aV=a.ad=a.ak=null
a.b=this.b},
$S:283}
A.YH.prototype={
$0(){var s=t.S
return new A.fK(A.y(s,t.Aj),this.a,null,A.y(s,t.C))},
$S:284}
A.YL.prototype={
$1(a){a.e=null
a.f=this.a.ay
a.r=null
a.b=this.b},
$S:285}
A.YM.prototype={
$0(){return A.auv(this.a,null,null)},
$S:286}
A.YN.prototype={
$1(a){a.k3=a.k2=null
a.k4=this.a.cy
a.ak=a.aq=a.an=a.y2=a.y1=a.xr=a.x2=a.x1=a.to=a.ry=a.rx=a.RG=a.R8=a.p4=a.p3=a.p2=a.p1=a.ok=null
a.b=this.b},
$S:287}
A.YO.prototype={
$0(){return A.amO(this.a,null)},
$S:106}
A.YP.prototype={
$1(a){var s
a.as=null
s=this.a
a.at=s.rx
a.ax=s.ry
a.ay=s.to
a.ch=null
a.Q=s.aW
a.b=this.b},
$S:107}
A.YQ.prototype={
$0(){return A.ahu(this.a,null)},
$S:108}
A.YR.prototype={
$1(a){var s=this.a
a.as=s.x2
a.at=null
a.ax=s.y1
a.ay=s.y2
a.ch=s.an
a.Q=s.aW
a.b=this.b},
$S:109}
A.YS.prototype={
$0(){return A.avb(this.a,null)},
$S:292}
A.YI.prototype={
$1(a){var s=this.a
a.as=s.aq
a.at=null
a.ax=s.ad
a.ay=s.aV
a.ch=null
a.Q=s.aW
a.b=this.b},
$S:293}
A.YJ.prototype={
$0(){var s=t.S,r=A.cC(s)
return new A.fN(B.lX,A.y(s,t.o),r,this.a,null,A.y(s,t.C))},
$S:294}
A.YK.prototype={
$1(a){a.ax=a.as=a.at=a.Q=null
a.b=this.b},
$S:295}
A.j1.prototype={
af(){return new A.oU(B.SI,B.m)}}
A.oU.prototype={
az(){var s,r,q=this
q.aN()
s=q.a
r=s.r
q.e=r==null?new A.Mh(q):r
q.wZ(s.d)},
aS(a){var s,r=this
r.bf(a)
if(!(a.r==null&&r.a.r==null)){s=r.a.r
r.e=s==null?new A.Mh(r):s}r.wZ(r.a.d)},
a5c(a){if(this.a.f)return
t.qS.a(this.c.ga9()).sa5V(a)},
m(){for(var s=this.d,s=J.at(s.gb_(s));s.q();)s.gG(s).m()
this.d=null
this.aL()},
wZ(a){var s,r,q,p,o=this,n=o.d
n.toString
o.d=A.y(t.n,t.oi)
for(s=J.at(a.gbn(a));s.q();){r=s.gG(s)
q=o.d
q.toString
p=n.j(0,r)
q.l(0,r,p==null?a.j(0,r).HV():p)
q=a.j(0,r)
q.toString
r=o.d.j(0,r)
r.toString
q.Ju(r)}for(s=J.at(n.gbn(n));s.q();){r=s.gG(s)
if(!o.d.T(0,r))n.j(0,r).m()}},
Th(a){var s,r
for(s=this.d,s=J.at(s.gb_(s));s.q();){r=s.gG(s)
r.d.l(0,a.gbQ(),a.gc9(a))
if(r.f8(a))r.hc(a)
else r.oy(a)}},
UX(a){var s,r
for(s=this.d,s=J.at(s.gb_(s));s.q();){r=s.gG(s)
r.d.l(0,a.gbQ(),a.gc9(a))
if(r.a3x(a))r.xo(a)}},
ZA(a){this.e.xE(a)},
L(a){var s,r,q,p=this,o=null,n=p.a,m=n.e,l=m==null
if(l)s=n.c==null?B.d8:B.bR
else s=m
r=n.c
q=A.Fl(s,r,o,p.gTg(),p.gUW(),o,o)
if(!n.f){if(l)n=r==null?B.d8:B.bR
else n=m
q=new A.N2(n,p.gZz(),q,o)}return q}}
A.N2.prototype={
aD(a){var s=new A.j2(B.bR,null,A.ar())
s.aE()
s.saO(null)
s.A=this.e
this.f.$1(s)
return s},
aG(a,b){b.A=this.e
this.f.$1(b)}}
A.a4P.prototype={
i(a){return"SemanticsGestureDelegate()"}}
A.Mh.prototype={
xE(a){var s=this,r=s.a.d
r.toString
a.sjk(s.TG(r))
a.skr(s.Tx(r))
a.sa4i(s.Tv(r))
a.sa4o(s.TH(r))},
TG(a){var s=t.f3.a(a.j(0,B.Cb))
if(s==null)return null
return new A.aa2(s)},
Tx(a){var s=t.yA.a(a.j(0,B.C9))
if(s==null)return null
return new A.aa1(s)},
Tv(a){var s=t.oq.a(a.j(0,B.lO)),r=t.rR.a(a.j(0,B.lM)),q=s==null?null:new A.a9Z(s),p=r==null?null:new A.aa_(r)
if(q==null&&p==null)return null
return new A.aa0(q,p)},
TH(a){var s=t.iC.a(a.j(0,B.lP)),r=t.rR.a(a.j(0,B.lM)),q=s==null?null:new A.aa3(s),p=r==null?null:new A.aa4(r)
if(q==null&&p==null)return null
return new A.aa5(q,p)}}
A.aa2.prototype={
$0(){var s=this.a,r=s.y1
if(r!=null)r.$1(new A.pz(B.j,B.j))
r=s.y2
if(r!=null)r.$1(new A.pA())
s=s.an
if(s!=null)s.$0()},
$S:0}
A.aa1.prototype={
$0(){var s=this.a,r=s.ok
if(r!=null)r.$1(B.R4)
r=s.k4
if(r!=null)r.$0()
s=s.p3
if(s!=null)s.$1(B.R2)},
$S:0}
A.a9Z.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.iC(B.j))
r=s.at
if(r!=null)r.$1(new A.hv(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fL(B.c8,0))},
$S:20}
A.aa_.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.iC(B.j))
r=s.at
if(r!=null)r.$1(new A.hv(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fL(B.c8,null))},
$S:20}
A.aa0.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(a)
s=this.b
if(s!=null)s.$1(a)},
$S:20}
A.aa3.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.iC(B.j))
r=s.at
if(r!=null)r.$1(new A.hv(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fL(B.c8,0))},
$S:20}
A.aa4.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.iC(B.j))
r=s.at
if(r!=null)r.$1(new A.hv(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fL(B.c8,null))},
$S:20}
A.aa5.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(a)
s=this.b
if(s!=null)s.$1(a)},
$S:20}
A.lO.prototype={
F(){return"HeroFlightDirection."+this.b}}
A.lM.prototype={
af(){return new A.qd(new A.bu(null,t.J),B.m)}}
A.Zl.prototype={
$2(a,b){var s=a.f
s.toString
t.tV.a(s)
s=a.ok
s.toString
t.BJ.a(s)
if(!this.b||!1)this.a.l(0,b,s)
else s.ID()},
$S:298}
A.Zm.prototype={
$1(a){var s,r,q=this,p=a.f
p.toString
if(p instanceof A.lM){t.jw.a(a)
s=p.c
if(A.ahN(a)===q.a)q.b.$2(a,s)
else{r=A.a0y(a,t.X)
if(r!=null)p=r.gkk()
else p=!1
if(p)q.b.$2(a,s)}}a.aT(q)},
$S:5}
A.qd.prototype={
ux(a){var s,r=this
r.f=a
s=r.c.ga9()
s.toString
r.au(new A.ab7(r,t.x.a(s)))},
uw(){return this.ux(!1)},
lL(a){var s=this
if(a||s.e==null)return
s.e=null
if(s.c!=null)s.au(new A.ab6())},
ID(){return this.lL(!1)},
L(a){var s,r=this,q=null,p=r.e,o=p==null,n=!o
if(n)r.a.toString
if(n&&!r.f){o=p.a
return A.dQ(q,p.b,o)}s=o?q:p.a
p=o?q:p.b
return A.dQ(new A.v7(n,new A.pG(o,new A.iN(r.a.e,r.d),q),q),p,s)}}
A.ab7.prototype={
$0(){var s=this.b.k3
s.toString
this.a.e=s},
$S:0}
A.ab6.prototype={
$0(){},
$S:0}
A.ab3.prototype={
gbF(a){var s,r=this
if(r.a===B.bP){s=r.e.fy
s.toString}else{s=r.d.fy
s.toString}return A.eg(B.bp,s,r.z?null:new A.tD(B.bp))},
nZ(a,b){var s
this.r.a.toString
s=this.w.$2(a,b)
return s==null?new A.vC(a,b):s},
gJ6(){var s,r,q=this,p=q.Q
if(p===$){s=q.f.c
s.toString
r=A.amY(s,$.ak.I$.z.j(0,q.d.k2))
q.Q!==$&&A.be()
q.Q=r
p=r}return p},
gtZ(){var s,r,q=this,p=q.as
if(p===$){s=q.r.c
s.toString
r=A.amY(s,$.ak.I$.z.j(0,q.e.k2))
q.as!==$&&A.be()
q.as=r
p=r}return p},
gkm(){var s,r,q=this,p=q.at
if(p===$){s=q.gtZ()
if(s.gJL(s))if(!q.z){s=q.gJ6()
s=s.gJL(s)
r=s}else r=!0
else r=!1
q.at!==$&&A.be()
p=q.at=r}return p},
i(a){var s,r,q=this,p=q.a.i(0),o=q.f,n=o.a.c.i(0),m=q.d.b.i(0),l=q.e.b.i(0)
o=o.i(0)
s=q.r.i(0)
r=q.gkm()?"":", INVALID"
return"_HeroFlightManifest("+p+" tag: "+n+" from route: "+m+" to route: "+l+" with hero: "+o+" to "+s+")"+r}}
A.ji.prototype={
Rt(a){var s,r,q,p,o=this,n=o.c
if(n==null){n=o.f
n===$&&A.b()
s=n.gbF(n)
r=o.f
q=r.f.c
q.toString
p=r.r.c
p.toString
p=o.c=n.x.$5(a,s,r.a,q,p)
n=p}s=o.e
s===$&&A.b()
return A.jD(s,new A.ab4(o),n)},
Fn(a){var s,r=this,q=a===B.X
if(q||a===B.K){s=r.e
s===$&&A.b()
s.saJ(0,null)
r.r.mn(0)
r.r=null
s=r.f
s===$&&A.b()
s.f.lL(q)
r.f.r.lL(a===B.K)
r.a.$1(r)
r.e.H(0,r.gKo())}},
El(a){var s=this,r=s.f
r===$&&A.b()
r=r.d.a
if((r==null?null:r.CW.a)!==!0){s.Fn(a)
return}if(s.x)return
r.toString
s.x=!0
r.CW.S(0,new A.ab5(s,r))},
a4n(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(!h.w){s=h.f
s===$&&A.b()
s=s.r.c!=null}else s=!1
if(s){s=h.f
s===$&&A.b()
r=t.av.a(s.r.c.ga9())}else r=null
if(r!=null&&r.b!=null&&r.k3!=null){s=h.f
s===$&&A.b()
s=$.ak.I$.z.j(0,s.e.k2)
s=s==null?null:s.ga9()
q=A.cp(r.bv(0,t.av.a(s)),B.j)}else q=null
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
h.b=i.nZ(p.a,new A.C(k,j,k+(n-m),j+(l-o)))}}else{p=h.d
if(p.gb0(p)===B.X){p=h.e
p===$&&A.b()
o=$.aqk()
n=p.gn(p)
m=A.m(o).h("n2<aE.T>")
h.d=new A.aX(t.m.a(p),new A.n2(new A.iA(new A.fS(n,1,B.aW)),o,m),m.h("aX<aE.T>"))}}if(s)s=!(isFinite(q.a)&&isFinite(q.b))
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
A.ab4.prototype={
$2(a,b){var s,r=null,q=this.a,p=q.b
p===$&&A.b()
s=q.e
s===$&&A.b()
s=p.ac(0,s.gn(s))
s.toString
p=q.f
p===$&&A.b()
p=p.c
return A.In(p.b-s.d,new A.hB(!0,r,A.ahk(b,q.d),r),r,r,s.a,p.a-s.c,s.b,r)},
$S:299}
A.ab5.prototype={
$0(){var s,r=this.a
r.x=!1
this.b.CW.H(0,this)
s=r.e
s===$&&A.b()
r.Fn(s.gb0(s))},
$S:0}
A.tR.prototype={
ru(a,b){this.ql(b,a,B.bP,!1)},
rt(a,b){var s=$.hg()
A.o9(this)
if(!s.a.get(this).CW.a)this.ql(a,b,B.bQ,!1)},
rv(a,b){var s=a.gkk()
if(s)this.ql(b,a,B.bP,!1)},
Ii(a,b){this.ql(a,b,B.bQ,!0)},
o8(){var s,r,q,p=$.hg()
A.o9(this)
if(p.a.get(this).CW.a)return
p=this.b
p=p.gb_(p)
s=A.m(p).h("aN<q.E>")
r=A.aA(new A.aN(p,new A.Zk(),s),!1,s.h("q.E"))
for(p=r.length,q=0;q<p;++q)r[q].El(B.K)},
ql(a,b,c,d){var s
if(b!=a&&b instanceof A.hO&&a instanceof A.hO){switch(c.a){case 1:s=a.fy
if(s.gn(s)===0)return
break
case 0:s=b.fy
if(s.gn(s)===1)return
break}if(d)if(c===B.bQ){b.goN()
s=!0}else s=!1
else s=!1
if(s)this.Gl(a,b,c,d)
else{s=b.fy
b.stw(s.gn(s)===0)
$.ak.ax$.push(new A.Zj(this,a,b,c,d))}}},
Gl(b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null
b4.stw(!1)
s=$.hg()
A.o9(b1)
s=s.a.get(b1)
r=s==null
if(r)q=b2
else{p=s.d
p===$&&A.b()
q=p.gbm()}if(r||q==null)return
o=s.c.ga9()
if(!(o instanceof A.E))return
n=$.ak.I$.z.j(0,b3.k2)
m=n!=null?A.akX(n,b6,s):B.zl
l=$.ak.I$.z.j(0,b4.k2)
k=l!=null?A.akX(l,b6,s):B.zl
for(s=m.gfE(m),s=s.ga8(s),r=b1.gSm(),p=b1.a,j=b1.b,i=t.Cf,h=b1.gUu(),g=t.A,f=t.Q,e=t.b,d=t.tY,c=t.a7,b=t.m,a=c.h("aX<aE.T>"),a0=t.sD;s.q();){a1=s.gG(s)
a2=a1.gdO(a1)
a3=a1.gn(a1)
a4=k.j(0,a2)
a5=j.j(0,a2)
if(a4==null)a6=b2
else{a1=o.k3
a1.toString
a4.a.toString
a3.a.toString
a6=new A.ab3(b5,q,a1,b3,b4,a3,a4,p,r,b6,a5!=null)}if(a6!=null&&a6.gkm()){k.v(0,a2)
if(a5!=null){a1=a5.f
a1===$&&A.b()
a7=a1.a
if(a7===B.bP&&a6.a===B.bQ){a1=a5.e
a1===$&&A.b()
a1.saJ(0,new A.eO(a6.gbF(a6),new A.bh(A.a([],g),f),0))
a1=a5.b
a1===$&&A.b()
a5.b=new A.vS(a1,a1.b,a1.a,a0)}else{a7=a7===B.bQ&&a6.a===B.bP
a8=a5.e
if(a7){a8===$&&A.b()
a1=a6.gbF(a6)
a7=a5.f
a7=a7.gbF(a7)
a7=a7.gn(a7)
a8.saJ(0,new A.aX(b.a(a1),new A.aJ(a7,1,c),a))
a1=a5.f
a7=a1.f
a8=a6.r
if(a7!==a8){a7.lL(!0)
a8.uw()
a1=a5.f
a7=a5.b
a7===$&&A.b()
a5.b=a1.nZ(a7.b,a6.gtZ())}else{a7=a5.b
a7===$&&A.b()
a5.b=a1.nZ(a7.b,a7.a)}}else{a7=a5.b
a7===$&&A.b()
a8===$&&A.b()
a5.b=a1.nZ(a7.ac(0,a8.gn(a8)),a6.gtZ())
a5.c=null
a1=a6.a
a7=a5.e
if(a1===B.bQ)a7.saJ(0,new A.eO(a6.gbF(a6),new A.bh(A.a([],g),f),0))
else a7.saJ(0,a6.gbF(a6))
a5.f.f.lL(!0)
a5.f.r.lL(!0)
a6.f.ux(a1===B.bP)
a6.r.uw()
a1=a5.r.f.gbm()
if(a1!=null)a1.EX()}}a5.f=a6}else{a1=new A.ji(h,B.d_)
a7=A.a([],g)
a8=new A.bh(a7,f)
a9=new A.vu(a8,new A.bh(A.a([],e),d),0)
a9.a=B.K
a9.b=0
a9.br()
a8.b=!0
a7.push(a1.gTP())
a1.e=a9
a1.f=a6
switch(a6.a.a){case 1:a9.saJ(0,new A.eO(a6.gbF(a6),new A.bh(A.a([],g),f),0))
b0=!1
break
case 0:a9.saJ(0,a6.gbF(a6))
b0=!0
break
default:b0=b2}a7=a1.f
a1.b=a7.nZ(a7.gJ6(),a1.f.gtZ())
a1.f.f.ux(b0)
a1.f.r.uw()
a7=a1.f
a8=new A.mU(!1,$.br())
a8.ad$=!0
a8=new A.fc(a1.gRs(),!1,a8,new A.bu(b2,i))
a1.r=a8
a7.b.z1(0,a8)
a8=a1.e
a8.br()
a8=a8.aX$
a8.b=!0
a8.a.push(a1.gKo())
j.l(0,a2,a1)}}else if(a5!=null)a5.w=!0}for(s=J.at(k.gb_(k));s.q();)s.gG(s).ID()},
Uv(a){var s=a.f
s===$&&A.b()
this.b.v(0,s.f.a.c)},
Sn(a,b,c,d,e){var s,r,q=e.f
q.toString
t.tV.a(q)
s=A.dp(e)
r=A.dp(d)
if(s==null||r==null)return q.e
return A.jD(b,new A.Zi(s,c,r.f,s.f,b,q),null)}}
A.Zk.prototype={
$1(a){var s=a.f
s===$&&A.b()
if(s.y)if(s.a===B.bQ){s=a.e
s===$&&A.b()
s=s.gb0(s)===B.K}else s=!1
else s=!1
return s},
$S:302}
A.Zj.prototype={
$1(a){var s=this
s.a.Gl(s.b,s.c,s.d,s.e)},
$S:2}
A.Zi.prototype={
$2(a,b){var s=this,r=s.c,q=s.d,p=s.e
r=s.b===B.bP?new A.th(r,q).ac(0,p.gn(p)):new A.th(q,r).ac(0,p.gn(p))
return new A.f6(s.a.I0(r),s.f.e,null)},
$S:303}
A.oh.prototype={
L(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.a3(t.I)
f.toString
s=f.w
r=A.al0(a)
q=r.a
p=r.b
o=r.c
n=r.d
m=r.e
f=this.c
if(f==null)return A.dC(g,A.dQ(g,q,q),!1,g,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)
l=r.r
k=l==null?g:A.F(l,0,1)
if(k==null)k=1
l=r.f
l.toString
if(k!==1)j=A.b5(B.d.b1(255*((l.gn(l)>>>24&255)/255*k)),l.gn(l)>>>16&255,l.gn(l)>>>8&255,l.gn(l)&255)
else j=l
l=A.dO(f.a)
i=A.a([],t.BV)
if(p!=null)i.push(new A.jS("FILL",p))
if(o!=null)i.push(new A.jS("wght",o))
if(n!=null)i.push(new A.jS("GRAD",n))
if(m!=null)i.push(new A.jS("opsz",m))
h=A.am3(g,g,B.VZ,g,g,!0,g,A.a8c(g,A.bw(g,g,j,g,g,g,g,g,"MaterialIcons",g,g,q,g,i,g,g,g,!1,g,g,g,g,g,r.w,g,g),l),B.bG,s,g,1,B.aS)
if(f.d)switch(s.a){case 0:f=new A.bd(new Float64Array(16))
f.d2()
f.hJ(0,-1,1,1)
h=A.amD(B.T,h,f,!1)
break
case 1:break}return A.dC(g,new A.tp(!0,A.dQ(A.nN(h,g,g),q,q),g),!1,g,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)}}
A.lS.prototype={
k(a,b){var s
if(b==null)return!1
if(J.T(b)!==A.B(this))return!1
if(b instanceof A.lS)if(b.a===this.a)s=b.d===this.d
else s=!1
else s=!1
return s},
gu(a){return A.V(this.a,"MaterialIcons",null,this.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"IconData(U+"+B.c.jm(B.f.ir(this.a,16).toUpperCase(),5,"0")+")"}}
A.lT.prototype={
bX(a){return!this.w.k(0,a.w)}}
A.ZF.prototype={
$1(a){return A.ahx(this.c,A.al_(a).c1(this.b),this.a)},
$S:304}
A.cv.prototype={
nY(a,b,c,d,e,f,g,h){var s,r=this,q=g==null?r.a:g,p=b==null?r.b:b,o=h==null?r.c:h,n=c==null?r.d:c,m=e==null?r.e:e,l=a==null?r.f:a
if(d==null){s=r.r
s=s==null?null:A.F(s,0,1)}else s=d
return new A.cv(q,p,o,n,m,l,s,f==null?r.w:f)},
hl(a){return this.nY(a,null,null,null,null,null,null,null)},
c1(a){var s=a.r
s=s==null?null:A.F(s,0,1)
return this.nY(a.f,a.b,a.d,s,a.e,a.w,a.a,a.c)},
W(a){return this},
k(a,b){var s,r,q=this
if(b==null)return!1
if(J.T(b)!==A.B(q))return!1
if(b instanceof A.cv)if(b.a==q.a)if(b.b==q.b)if(b.c==q.c)if(b.d==q.d)if(b.e==q.e)if(J.f(b.f,q.f)){s=b.r
s=s==null?null:A.F(s,0,1)
r=q.r
s=s==(r==null?null:A.F(r,0,1))&&A.cO(b.w,q.w)}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gu(a){var s,r=this,q=r.r
q=q==null?null:A.F(q,0,1)
s=r.w
s=s==null?null:A.d6(s)
return A.V(r.a,r.b,r.c,r.d,r.e,r.f,q,s,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.Nc.prototype={}
A.oi.prototype={
af(){return new A.xT(B.m)}}
A.xT.prototype={
az(){var s=this
s.aN()
$.ak.ai$.push(s)
s.z=new A.Dr(s)},
m(){var s,r=this
B.b.v($.ak.ai$,r)
r.YX()
s=r.at
if(s!=null)s.m()
s=r.z
s===$&&A.b()
s.a=null
r.wG(null)
r.aL()},
b4(){var s,r=this
r.Zq()
r.wK()
s=r.c
s.toString
if(A.amA(s))r.W0()
else r.Go(!0)
r.cu()},
aS(a){var s,r,q=this
q.bf(a)
if(q.r&&q.a.e==null!==(a.e==null)){s=q.nd()
r=q.d
r.toString
r.S(0,q.E9(!0))
q.d.H(0,s)}if(!q.a.c.k(0,a.c))q.wK()},
eM(){this.wK()
this.P7()},
Zq(){var s=this.c
s.toString
s=A.dp(s)
s=s==null?null:s.z
if(s==null){s=$.a4E.dJ$
s===$&&A.b()
s=(s.a&2)!==0}this.w=s},
wK(){var s,r,q,p,o=this,n=o.z
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
o.ZC(new A.w2(n,r,t.rZ).W(A.aj8(q,s)))},
E9(a){var s,r=this,q=r.ax
if(q==null||a){r.as=r.Q=null
q=r.a
s=q.e==null?null:r.gUz()
q=q.f!=null||!1?new A.aba(r):null
q=r.ax=new A.dm(r.gUB(),s,q)}q.toString
return q},
nd(){return this.E9(!1)},
UC(a,b){this.au(new A.abc(this,a,b))},
UA(a){this.au(new A.abb(this,a))},
wG(a){var s=this.e
$.bM.ax$.push(new A.abd(s))
this.e=a},
ZC(a){var s,r,q=this,p=q.d
if(p==null)s=null
else{s=p.a
if(s==null)s=p}r=a.a
if(s===(r==null?a:r))return
if(q.r){p.toString
p.H(0,q.nd())}q.a.toString
q.au(new A.abe(q))
q.au(new A.abf(q))
q.d=a
if(q.r)a.S(0,q.nd())},
W0(){var s,r=this
if(r.r)return
s=r.d
s.toString
s.S(0,r.nd())
s=r.at
if(s!=null)s.m()
r.at=null
r.r=!0},
Go(a){var s,r=this
if(!r.r)return
if(a)if(r.at==null){s=r.d
s=(s==null?null:s.a)!=null}else s=!1
else s=!1
if(s)r.at=r.d.a.md()
s=r.d
s.toString
s.H(0,r.nd())
r.r=!1},
YX(){return this.Go(!1)},
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
h=new A.IA(r,q,o,n,e,s,f,p.z,m,l,k,j,f,!1,i,!1,f)
h=A.dC(f,h,!1,f,!1,f,f,f,!0,"",f,f,f,f,f,f,f,f,f,f,f)
e=p.d
if(e!=null)h=e.$4(a,h,g.x,g.y)
e=g.a.e
return e!=null?e.$3(a,h,g.f):h}}
A.aba.prototype={
$2(a,b){var s=this.a
s.au(new A.ab9(s,a,b))},
$S:305}
A.ab9.prototype={
$0(){var s=this.a
s.Q=this.b
s.as=this.c},
$S:0}
A.abc.prototype={
$0(){var s,r=this.a
r.wG(this.b)
r.as=r.Q=r.f=null
s=r.x
r.x=s==null?0:s+1
r.y=B.nM.Mb(r.y,this.c)},
$S:0}
A.abb.prototype={
$0(){var s=this.a
s.f=this.b
s.as=s.Q=null},
$S:0}
A.abd.prototype={
$1(a){var s=this.a
if(s!=null)s.a.m()
return null},
$S:2}
A.abe.prototype={
$0(){this.a.wG(null)},
$S:0}
A.abf.prototype={
$0(){var s=this.a
s.x=s.f=null
s.y=!1},
$S:0}
A.Rw.prototype={}
A.Dd.prototype={
dB(a){var s=A.V2(this.a,this.b,a)
s.toString
return s}}
A.th.prototype={
dB(a){var s=A.ahg(this.a,this.b,a)
s.toString
return s}}
A.li.prototype={
dB(a){return A.nF(this.a,this.b,a)}}
A.mM.prototype={
dB(a){var s=A.ba(this.a,this.b,a)
s.toString
return s}}
A.EZ.prototype={}
A.om.prototype={
gjK(){var s,r,q=this,p=q.d
if(p===$){s=q.a.d
r=A.dY(null,s,null,null,q)
q.d!==$&&A.be()
q.d=r
p=r}return p},
gfn(){var s,r=this,q=r.e
if(q===$){s=r.gjK()
q=r.e=A.eg(r.a.c,s,null)}return q},
az(){var s,r=this
r.aN()
s=r.gjK()
s.br()
s=s.aU$
s.b=!0
s.a.push(new A.a_4(r))
r.Dz()},
aS(a){var s,r=this
r.bf(a)
if(r.a.c!==a.c){r.gfn().m()
s=r.gjK()
r.e=A.eg(r.a.c,s,null)}r.gjK().e=r.a.d
if(r.Dz()){r.ou(new A.a_3(r))
s=r.gjK()
s.sn(0,0)
s.cK(0)}},
m(){this.gfn().m()
this.gjK().m()
this.Pk()},
ZF(a,b){var s
if(a==null)return
s=this.gfn()
a.sxJ(a.ac(0,s.gn(s)))
a.slK(0,b)},
Dz(){var s={}
s.a=!1
this.ou(new A.a_2(s,this))
return s.a}}
A.a_4.prototype={
$1(a){switch(a.a){case 3:this.a.a.toString
break
case 0:case 1:case 2:break}},
$S:3}
A.a_3.prototype={
$3(a,b,c){this.a.ZF(a,b)
return a},
$S:110}
A.a_2.prototype={
$3(a,b,c){var s
if(b!=null){if(a==null)a=c.$1(b)
s=a.b
if(!J.f(b,s==null?a.a:s))this.a.a=!0
else if(a.b==null)a.slK(0,a.a)}else a=null
return a},
$S:110}
A.nu.prototype={
az(){this.Ny()
var s=this.gjK()
s.br()
s=s.aX$
s.b=!0
s.a.push(this.gTN())},
TO(){this.au(new A.T_())}}
A.T_.prototype={
$0(){},
$S:0}
A.r_.prototype={
af(){return new A.Le(null,null,B.m)}}
A.Le.prototype={
ou(a){this.CW=t.uh.a(a.$3(this.CW,this.a.w,new A.a90()))},
L(a){var s,r=this.CW
r.toString
s=this.gfn()
s=r.ac(0,s.gn(s))
return A.t0(this.a.r,null,B.cP,!0,s,null,null,B.aS)}}
A.a90.prototype={
$1(a){return new A.mM(t.F1.a(a),null)},
$S:307}
A.r0.prototype={
af(){return new A.Lf(null,null,B.m)}}
A.Lf.prototype={
ou(a){var s=this,r=s.CW
s.a.toString
s.CW=t.iH.a(a.$3(r,B.aC,new A.a91()))
s.cx=t.nr.a(a.$3(s.cx,s.a.z,new A.a92()))
r=t.mo
s.cy=r.a(a.$3(s.cy,s.a.Q,new A.a93()))
s.db=r.a(a.$3(s.db,s.a.at,new A.a94()))},
L(a){var s,r,q,p,o,n=this,m=n.a,l=m.w
m=m.x
s=n.CW
s.toString
r=n.gfn()
r=s.ac(0,r.gn(r))
s=n.cx
s.toString
q=n.gfn()
q=s.ac(0,q.gn(q))
s=n.a.Q
p=n.db
p.toString
o=n.gfn()
o=p.ac(0,o.gn(o))
o.toString
return new A.Id(l,m,r,q,s,o,n.a.r,null)}}
A.a91.prototype={
$1(a){return new A.li(t.ak.a(a),null)},
$S:308}
A.a92.prototype={
$1(a){return new A.aJ(A.Si(a),null,t.a7)},
$S:115}
A.a93.prototype={
$1(a){return new A.hp(t.iO.a(a),null)},
$S:42}
A.a94.prototype={
$1(a){return new A.hp(t.iO.a(a),null)},
$S:42}
A.qg.prototype={
m(){var s=this,r=s.dg$
if(r!=null)r.H(0,s.gls())
s.dg$=null
s.aL()},
c2(){this.dm()
this.cF()
this.lt()}}
A.k_.prototype={
bO(a){var s=A.fO(t.h,t.X)
return new A.tY(s,this,B.a6,A.m(this).h("tY<k_.T>"))}}
A.tY.prototype={
Lm(a,b){var s=this.ak,r=this.$ti,q=r.h("c4<1>?").a(s.j(0,a))
if(q!=null&&q.gR(q))return
s.l(0,a,A.cC(r.c))},
Ke(a,b){var s,r=this.$ti,q=r.h("c4<1>?").a(this.ak.j(0,b))
if(q==null)return
if(!q.gR(q)){s=this.f
s.toString
s=r.h("k_<1>").a(s).a5S(a,q)
r=s}else r=!0
if(r)b.b4()}}
A.hC.prototype={
bX(a){return a.f!==this.f},
bO(a){var s=new A.qh(A.fO(t.h,t.X),this,B.a6,A.m(this).h("qh<hC.T>"))
this.f.S(0,s.gw8())
return s}}
A.qh.prototype={
bb(a,b){var s,r,q=this,p=q.f
p.toString
s=q.$ti.h("hC<1>").a(p).f
r=b.f
if(s!==r){p=q.gw8()
s.H(0,p)
r.S(0,p)}q.Og(0,b)},
b3(){var s,r=this
if(r.bH){s=r.f
s.toString
r.C7(r.$ti.h("hC<1>").a(s))
r.bH=!1}return r.Of()},
Vy(){this.bH=!0
this.fN()},
mg(a){this.C7(a)
this.bH=!1},
pg(){var s=this,r=s.f
r.toString
s.$ti.h("hC<1>").a(r).f.H(0,s.gw8())
s.uG()}}
A.F_.prototype={}
A.qr.prototype={}
A.afc.prototype={
$1(a){return this.a.a=a},
$S:54}
A.afd.prototype={
$1(a){return a.b},
$S:309}
A.afe.prototype={
$1(a){var s,r,q,p
for(s=J.aF(a),r=this.a,q=this.b,p=0;p<s.gp(a);++p)q.l(0,A.aD(A.m(r.a[p].a).h("cR.T")),s.j(a,p))
return q},
$S:310}
A.cR.prototype={
i(a){return"LocalizationsDelegate["+A.aD(A.m(this).h("cR.T")).i(0)+"]"}}
A.Rh.prototype={
mb(a){return!0},
cN(a,b){return new A.bl(B.Dg,t.mq)},
kK(a){return!1},
i(a){return"DefaultWidgetsLocalizations.delegate(en_US)"}}
A.Dj.prototype={
gbD(){return B.u},
$ije:1}
A.y5.prototype={
bX(a){return this.w!==a.w}}
A.uk.prototype={
af(){return new A.NE(new A.bu(null,t.J),A.y(t.n,t.z),B.m)}}
A.NE.prototype={
az(){this.aN()
this.cN(0,this.a.c)},
Ra(a){var s,r,q,p,o,n,m=this.a.d,l=a.d
if(m.length!==l.length)return!0
s=A.a(m.slice(0),A.an(m))
r=A.a(l.slice(0),A.an(l))
for(q=0;q<s.length;++q){p=s[q]
o=r[q]
n=p instanceof A.bR?A.cY(p):null
m=A.aD(n==null?A.aS(p):n)
n=o instanceof A.bR?A.cY(o):null
if(m===A.aD(n==null?A.aS(o):n)){p.kK(o)
m=!1}else m=!0
if(m)return!0}return!1},
aS(a){var s,r=this
r.bf(a)
if(r.a.c.k(0,a.c)){r.a.toString
s=r.Ra(a)}else s=!0
if(s)r.cN(0,r.a.c)},
cN(a,b){var s,r=this,q={},p=r.a.d,o=p.length
if(o===0){r.f=b
return}q.a=null
s=A.azA(b,p).aZ(new A.abE(q),t.Co)
q=q.a
if(q!=null){r.e=q
r.f=b}else{++$.kn.x2$
s.aZ(new A.abF(r,b),t.H)}},
gGx(){return t.cC.a(J.aM(this.e,B.a__)).gbD()},
L(a){var s,r,q,p=this,o=null
if(p.f==null)return B.fO
s=p.gGx()
p.f.toString
r=p.e
q=p.gGx()
return A.dC(o,new A.y5(p,r,A.ahd(p.a.e,q),p.d),!1,o,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,s,o,o)}}
A.abE.prototype={
$1(a){return this.a.a=a},
$S:311}
A.abF.prototype={
$1(a){var s=this.a
if(s.c!=null)s.au(new A.abD(s,a,this.b))
$.kn.Hq()},
$S:312}
A.abD.prototype={
$0(){var s=this.a
s.e=this.b
s.f=this.c},
$S:0}
A.vb.prototype={
F(){return"Orientation."+this.b}}
A.iT.prototype={
rj(a,b,c,d,e){var s=this,r=c==null?s.c:c,q=a==null?s.f:a,p=e==null?s.r:e,o=d==null?s.e:d
return new A.iT(s.a,s.b,r,s.d,o,q,p,s.w,!1,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch)},
xV(a){return this.rj(null,null,a,null,null)},
I0(a){return this.rj(a,null,null,null,null)},
a0F(a,b){return this.rj(null,null,null,a,b)},
a0E(a,b){return this.rj(a,null,null,null,b)},
KO(a,b,c,d){var s,r,q,p,o,n,m=this,l=null
if(!(b||d||c||a))return m
s=m.f
r=b?0:l
q=d?0:l
p=c?0:l
r=s.nW(a?0:l,r,p,q)
q=m.r
p=b?Math.max(0,q.a-s.a):l
o=d?Math.max(0,q.b-s.b):l
n=c?Math.max(0,q.c-s.c):l
return m.a0E(r,q.nW(a?Math.max(0,q.d-s.d):l,p,n,o))},
a55(a){var s=this,r=null,q=s.r,p=s.e,o=Math.max(0,q.d-p.d)
q=q.nW(o,r,r,r)
return s.a0F(p.nW(0,r,r,r),q)},
k(a,b){var s=this
if(b==null)return!1
if(J.T(b)!==A.B(s))return!1
return b instanceof A.iT&&b.a.k(0,s.a)&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.f.k(0,s.f)&&b.r.k(0,s.r)&&b.e.k(0,s.e)&&b.Q===s.Q&&b.as===s.as&&b.z===s.z&&b.y===s.y&&b.at===s.at&&b.ax===s.ax&&b.ay.k(0,s.ay)&&A.cO(b.ch,s.ch)},
gu(a){var s=this
return A.V(s.a,s.b,s.c,s.d,s.f,s.r,s.e,!1,s.Q,s.as,s.z,s.y,s.at,s.ax,s.ay,A.d6(s.ch),B.a,B.a,B.a,B.a)},
i(a){var s=this
return"MediaQueryData("+B.b.ba(A.a(["size: "+s.a.i(0),"devicePixelRatio: "+B.d.N(s.b,1),"textScaleFactor: "+B.d.N(s.c,1),"platformBrightness: "+s.d.i(0),"padding: "+s.f.i(0),"viewPadding: "+s.r.i(0),"viewInsets: "+s.e.i(0),"alwaysUse24HourFormat: false","accessibleNavigation: "+s.y,"highContrast: "+s.Q,"disableAnimations: "+s.as,"invertColors: "+s.z,"boldText: "+s.at,"navigationMode: "+s.ax.b,"gestureSettings: "+s.ay.i(0),"displayFeatures: "+A.h(s.ch)],t.s),", ")+")"}}
A.f6.prototype={
bX(a){return!this.f.k(0,a.f)}}
A.Hx.prototype={
F(){return"NavigationMode."+this.b}}
A.yd.prototype={
af(){return new A.NM(B.m)}}
A.NM.prototype={
az(){this.aN()
$.ak.ai$.push(this)},
rs(){this.au(new A.ac_())},
Ig(){this.au(new A.ac1())},
If(){this.au(new A.ac0())},
L(a){var s
$.ak.toString
s=A.als($.ce())
return new A.f6(s,this.a.c,null)},
m(){B.b.v($.ak.ai$,this)
this.aL()}}
A.ac_.prototype={
$0(){},
$S:0}
A.ac1.prototype={
$0(){},
$S:0}
A.ac0.prototype={
$0(){},
$S:0}
A.Ry.prototype={}
A.uN.prototype={
L(a){var s,r=null
switch(A.l1().a){case 0:case 1:case 3:case 5:break
case 2:case 4:break}s=this.c
return A.as0(new A.tp(!0,new A.NW(A.dC(r,A.uP(new A.fF(B.mh,s==null?r:new A.rH(s,r,r),r),B.lH,r,r,r),!1,r,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),new A.a0w(this,a),r),r))}}
A.a0w.prototype={
$0(){A.Kk(B.VL)},
$S:0}
A.pQ.prototype={
f8(a){if(this.y1==null)return!1
return this.mS(a)},
Jf(a){},
Jg(a,b){var s=this.y1
if(s!=null)s.$0()},
t3(a,b,c){}}
A.ac5.prototype={
xE(a){a.sjk(this.a)}}
A.Lk.prototype={
HV(){var s=t.S,r=A.cC(s)
return new A.pQ(B.aY,18,B.bq,A.y(s,t.o),r,null,null,A.y(s,t.C))},
Ju(a){a.y1=this.a}}
A.NW.prototype={
L(a){var s=this.d
return new A.j1(this.c,A.aV([B.a_0,new A.Lk(s)],t.n,t.ob),B.ay,!1,new A.ac5(s),null)}}
A.Hy.prototype={
L(a){var s,r,q=this,p=a.a3(t.I)
p.toString
s=A.a([],t.E)
r=q.c
if(r!=null)s.push(A.a_J(r,B.h7))
r=q.d
if(r!=null)s.push(A.a_J(r,B.h8))
r=q.e
if(r!=null)s.push(A.a_J(r,B.h9))
return new A.rV(new A.adP(q.f,q.r,p.w),s,null)}}
A.qK.prototype={
F(){return"_ToolbarSlot."+this.b}}
A.adP.prototype={
tI(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.b.j(0,B.h7)!=null){s=a.a
r=a.b
q=e.dA(B.h7,new A.aO(0,s,r,r)).a
switch(e.f.a){case 0:p=s-q
break
case 1:p=0
break
default:p=null}e.dS(B.h7,new A.t(p,0))}else q=0
if(e.b.j(0,B.h9)!=null){o=e.dA(B.h9,A.ah0(a))
switch(e.f.a){case 0:n=0
break
case 1:n=a.a-o.a
break
default:n=null}m=o.a
e.dS(B.h9,new A.t(n,(a.b-o.b)/2))}else m=0
if(e.b.j(0,B.h8)!=null){s=a.a
r=e.e
l=Math.max(s-q-m-r*2,0)
k=e.dA(B.h8,A.ah0(a).a0x(l))
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
default:f=null}e.dS(B.h8,new A.t(f,(a.b-k.b)/2))}},
mJ(a){return a.d!==this.d||a.e!==this.e||a.f!==this.f}}
A.mq.prototype={
F(){return"RoutePopDisposition."+this.b}}
A.bY.prototype={
gtC(){return B.rF},
je(){},
o6(){var s=A.aif()
s.aZ(new A.a3v(this),t.H)
return s},
o4(){var s=this.a
if(s==null)s=null
else{s.a.toString
s=!0}if(s===!0)A.aif().aZ(new A.a3u(this),t.H)},
yi(a){},
fg(){var s=0,r=A.a4(t.ij),q,p=this
var $async$fg=A.a0(function(a,b){if(a===1)return A.a1(b,r)
while(true)switch(s){case 0:q=p.gJM()?B.TN:B.B8
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$fg,r)},
gLu(){return!1},
k6(a){this.a1h(a)
return!0},
a1h(a){this.d.cb(0,null)},
lG(a){},
o5(a){},
yd(a){},
nP(){},
rb(){},
m(){this.a=null},
gkk(){var s,r=this.a
if(r==null)return!1
r=r.e
r=new A.bp(r,A.an(r).h("bp<1,de?>"))
s=r.mf(r,new A.a3y(),new A.a3z())
if(s==null)return!1
return s.a===this},
gJM(){var s,r=this.a
if(r==null)return!1
r=r.e
r=new A.bp(r,A.an(r).h("bp<1,de?>"))
s=r.rX(r,new A.a3A(),new A.a3B())
if(s==null)return!1
return s.a===this},
gt8(){var s,r,q,p,o=this.a
if(o==null)return!1
for(o=o.e,s=o.length,r=0;r<s;++r){q=o[r]
if(q.a===this)return!1
p=q.d.a
if(p<=10&&p>=1)return!0}return!1},
ga3s(){var s=this.a
if(s==null)return!1
s=s.e
s=new A.bp(s,A.an(s).h("bp<1,de?>"))
s=s.rX(s,new A.a3w(this),new A.a3x())
s=s==null?null:s.gkl()
return s===!0}}
A.a3v.prototype={
$1(a){var s,r=this.a.a
if(r==null)s=null
else{r.a.toString
s=!0}if(s===!0){r=r.x.gdu()
if(r!=null)r.tV()}},
$S:22}
A.a3u.prototype={
$1(a){var s=this.a.a
if(s!=null){s=s.x.gdu()
if(s!=null)s.tV()}},
$S:22}
A.a3y.prototype={
$1(a){return a!=null&&a.gkl()},
$S:27}
A.a3z.prototype={
$0(){return null},
$S:9}
A.a3A.prototype={
$1(a){return a!=null&&a.gkl()},
$S:27}
A.a3B.prototype={
$0(){return null},
$S:9}
A.a3w.prototype={
$1(a){return a!=null&&A.an5(this.a).$1(a)},
$S:27}
A.a3x.prototype={
$0(){return null},
$S:9}
A.h1.prototype={
i(a){var s=this.a
s=s==null?"none":'"'+s+'"'
return"RouteSettings("+s+", "+A.h(this.b)+")"}}
A.iV.prototype={
ru(a,b){},
rt(a,b){},
yh(a,b){},
rv(a,b){},
Ii(a,b){},
o8(){}}
A.lN.prototype={
bX(a){return a.f!=this.f}}
A.a3t.prototype={}
A.KI.prototype={}
A.Di.prototype={}
A.uZ.prototype={
af(){var s=null,r=A.a([],t.hi),q=$.br(),p=t.a4
return new A.fa(r,new A.N8(q),A.iR(s,p),A.iR(s,p),A.ahn(!0,"Navigator",!0,!0,s,s,!1),new A.vQ(0,q,t.rj),A.jd(!1),A.b6(t.S),s,A.y(t.wb,t.M),s,!0,s,s,s,B.m)},
a4h(a,b){return this.z.$2(a,b)}}
A.a13.prototype={
$1(a){return a==null},
$S:314}
A.dV.prototype={
F(){return"_RouteLifecycle."+this.b}}
A.O7.prototype={}
A.de.prototype={
gcB(){var s,r
if(this.c){s=t.kd.a(this.a.b)
s.gcB()
r=A.h(s.gcB())
return"p+"+r}r=this.b
if(r!=null)return"r+"+r.gKZ()
return null},
a2u(a,b,c,d){var s,r,q,p=this,o=p.d,n=p.a
n.a=b
n.je()
s=p.d
if(s===B.Cs||s===B.Ct){r=n.o6()
p.d=B.Cu
r.Lt(new A.ad2(p,b))}else{n.yi(c)
p.d=B.cU}if(a)n.o5(null)
s=o===B.a0o||o===B.Ct
q=b.r
if(s)q.d5(0,new A.yp(n,d))
else q.d5(0,new A.qo(n,d))},
a2t(a,b){var s,r=this
r.d=B.a0k
s=r.a
if((s.d.a.a&30)!==0)return!0
if(!s.k6(r.w)){r.d=B.cU
return!1}r.w=null
return!0},
m(){var s,r,q,p,o,n,m={}
this.d=B.a0m
s=this.a
r=s.gtC()
q=new A.ad0()
p=new A.aN(r,q,A.an(r).h("aN<1>"))
if(!p.ga8(p).q())s.m()
else{m.a=p.gp(p)
for(s=B.b.ga8(r),q=new A.pO(s,q);q.q();){r=s.gG(s)
o=A.b4("listener")
n=new A.ad1(m,this,r,o)
o.b=n
r.d.S(0,n)}}},
ga5Z(){var s=this.d.a
return s<=7&&s>=1},
gkl(){var s=this.d.a
return s<=10&&s>=1}}
A.ad2.prototype={
$0(){var s=this.a
if(s.d===B.Cu){s.d=B.cU
this.b.vK()}},
$S:0}
A.ad0.prototype={
$1(a){return a.d.a},
$S:315}
A.ad1.prototype={
$0(){var s=this,r=s.a;--r.a
s.c.d.H(0,s.d.aC())
if(r.a===0)s.b.a.m()},
$S:0}
A.ad3.prototype={
$1(a){return a.a===this.a},
$S:40}
A.kN.prototype={}
A.qo.prototype={
kq(a){a.ru(this.a,this.b)}}
A.qn.prototype={
kq(a){a.rt(this.a,this.b)}}
A.yo.prototype={
kq(a){a.yh(this.a,this.b)}}
A.yp.prototype={
kq(a){a.rv(this.a,this.b)}}
A.fa.prototype={
az(){var s,r,q,p,o=this
o.aN()
for(s=o.a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q){p=s[q]
$.hg().a.set(p,o)}o.Q=o.a.x
s=o.c.jy(t.hS)
if(s==null)s=null
else{s=s.f
s.toString}t.cn.a(s)
o.xa(s==null?null:s.f)
o.a.toString
B.fv.te("selectSingleEntryHistory",t.H)},
ip(a,b){var s,r,q,p,o,n,m=this
m.mm(m.as,"id")
s=m.f
m.mm(s,"history")
for(;r=m.e,r.length!==0;)r.pop().m()
m.d=new A.bu(null,t.r9)
B.b.K(r,s.L_(null,m))
m.a.toString
q=0
for(;!1;++q){p=B.ML[q]
r=m.c
r.toString
r=p.y_(r)
o=$.agG()
n=new A.de(r,null,!0,B.lY,o,o,o)
m.e.push(n)
B.b.K(m.e,s.L_(n,m))}if(s.y==null){s=m.a
r=m.e
o=s.f
B.b.K(r,J.agP(s.a4h(m,o),new A.a12(m),t.ee))}m.vK()},
yk(a){var s,r=this
r.OE(a)
s=r.f
if(r.bg$!=null)s.bb(0,r.e)
else s.X(0)},
gcB(){return this.a.y},
b4(){var s,r,q,p,o=this
o.Po()
s=o.c.a3(t.hS)
o.xa(s==null?null:s.f)
for(r=o.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.Q)(r),++p)r[p].a.rb()},
xa(a){var s,r,q=this
if(q.z!=a){if(a!=null)$.hg().a.set(a,q)
s=q.z
if(s==null)s=null
else{r=$.hg()
A.o9(s)
s=r.a.get(s)}if(s===q){s=$.hg()
r=q.z
r.toString
s.a.set(r,null)}q.z=a
q.GU()}},
GU(){var s=this,r=s.z,q=s.a
if(r!=null)s.Q=B.b.U(q.x,A.a([r],t.yx))
else s.Q=q.x},
aS(a){var s,r,q,p,o=this
o.Pp(a)
s=a.x
if(s!==o.a.x){for(r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q){p=s[q]
$.hg().a.set(p,null)}for(s=o.a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q){p=s[q]
$.hg().a.set(p,o)}o.GU()}o.a.toString
for(s=o.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].a.rb()},
de(){var s,r,q,p=this.Q
p===$&&A.b()
s=p.length
r=0
for(;r<p.length;p.length===s||(0,A.Q)(p),++r){q=p[r]
$.hg().a.set(q,null)}this.mV()},
c2(){var s,r,q,p
this.Pm()
s=this.Q
s===$&&A.b()
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.Q)(s),++q){p=s[q]
$.hg().a.set(p,this)}},
m(){var s,r,q,p=this
p.xa(null)
p.x.m()
for(s=p.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].m()
p.Pq()},
gCX(){var s,r,q,p=A.a([],t.tD)
for(s=this.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)B.b.K(p,s[q].a.gtC())
return p},
vL(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null
a.ay=!0
s=a.e
r=s.length-1
q=s[r]
p=r>0?s[r-1]:a0
o=A.a([],t.hi)
for(s=a.w,n=a.r,m=a0,l=m,k=!1,j=!1;r>=0;){switch(q.d.a){case 1:i=a.iA(r-1,A.ajf())
h=i>=0?a.e[i]:a0
h=h==null?a0:h.a
g=q.a
g.a=a
g.je()
q.d=B.a0n
n.d5(0,new A.qo(g,h))
continue
case 2:if(k||l==null){h=q.a
h.o4()
q.d=B.cU
if(l==null)h.o5(a0)
continue}break
case 3:case 4:case 6:h=p==null?a0:p.a
i=a.iA(r-1,A.ajf())
g=i>=0?a.e[i]:a0
g=g==null?a0:g.a
q.a2u(l==null,a,h,g)
if(q.d===B.cU)continue
break
case 5:if(!j&&m!=null){q.a.lG(m)
q.f=m}j=!0
break
case 7:if(!j&&m!=null){q.a.lG(m)
q.f=m}k=!0
j=!0
break
case 8:i=a.iA(r,A.Ad())
h=i>=0?a.e[i]:a0
if(!q.a2t(a,h==null?a0:h.a))continue
if(!j){if(m!=null){q.a.lG(m)
q.f=m}m=q.a}h=q.a
i=a.iA(r,A.Ad())
g=i>=0?a.e[i]:a0
s.d5(0,new A.qn(h,g==null?a0:g.a))
if(q.d===B.lZ)continue
k=!0
break
case 11:break
case 9:h=q.a
h=h.d.a
if((h.a&30)!==0)A.X(A.a6("Future already completed"))
h.eR(a0)
q.w=null
q.d=B.a0j
continue
case 10:if(!j){if(m!=null)q.a.lG(m)
m=a0}i=a.iA(r,A.Ad())
h=i>=0?a.e[i]:a0
h=h==null?a0:h.a
q.d=B.a0l
if(q.x)s.d5(0,new A.yo(q.a,h))
continue
case 12:if(!k&&l!=null)break
q.d=B.lZ
continue
case 13:o.push(B.b.fQ(a.e,r))
q=l
break
case 14:case 0:break}--r
f=r>0?a.e[r-1]:a0
l=q
q=p
p=f}a.T8()
a.Ta()
a.a.toString
s=a.e
s=new A.bp(s,A.an(s).h("bp<1,de?>"))
e=s.mf(s,new A.a0X(),new A.a0Y())
d=e==null?a0:e.a.b.a
if(d!=null&&d!==a.at){A.amv(d,!1,a0)
a.at=d}for(s=o.length,c=0;c<o.length;o.length===s||(0,A.Q)(o),++c){q=o[c]
for(n=q.a.gtC(),h=n.length,b=0;b<n.length;n.length===h||(0,A.Q)(n),++b)J.arD(n[b])
q.m()}if(a1){s=a.d
s===$&&A.b()
s=s.gbm()
if(s!=null)s.a4U(a.gCX())}if(a.bg$!=null)a.f.bb(0,a.e)
a.ay=!1},
vK(){return this.vL(!0)},
T8(){var s,r=this,q=r.Q
q===$&&A.b()
if(q.length===0){r.w.X(0)
r.r.X(0)
return}for(q=r.r;!q.gR(q);){s=q.fc(0)
B.b.Z(r.Q,s.goS())}for(q=r.w;!q.gR(q);){s=q.mo()
B.b.Z(r.Q,s.goS())}},
Ta(){var s,r,q,p,o,n,m=this,l=null,k=m.e.length-1
for(;k>=0;){s=m.e[k]
r=s.d.a
if(!(r<=12&&r>=3)){--k
continue}q=m.TC(k+1,A.ap_())
r=q==null
p=r?l:q.a
o=s.r
if(p!=o){if((r?l:q.a)==null){p=s.f
p=p!=null&&p===o}else p=!1
if(!p){p=s.a
p.o5(r?l:q.a)}s.r=r?l:q.a}--k
n=m.iA(k,A.ap_())
r=n>=0?m.e[n]:l
p=r==null
o=p?l:r.a
if(o!=s.e){o=s.a
o.yd(p?l:r.a)
s.e=p?l:r.a}}},
Ee(a,b){a=this.iA(a,b)
return a>=0?this.e[a]:null},
iA(a,b){while(!0){if(!(a>=0&&!b.$1(this.e[a])))break;--a}return a},
TC(a,b){var s
while(!0){s=this.e
if(!(a<s.length&&!b.$1(s[a])))break;++a}s=this.e
return a<s.length?s[a]:null},
qB(a,b,c,d){var s,r,q
if(b)this.a.toString
s=new A.h1(a,c)
r=d.h("bY<0?>?")
q=r.a(this.a.r.$1(s))
return q==null&&!b?r.a(this.a.w.$1(s)):q},
wP(a,b,c){return this.qB(a,!1,b,c)},
CU(a){this.RD()},
oP(a){var s=0,r=A.a4(t.y),q,p=this,o,n,m
var $async$oP=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)$async$outer:switch(s){case 0:m=p.e
m=new A.bp(m,A.an(m).h("bp<1,de?>"))
o=m.mf(m,new A.a0Z(),new A.a1_())
if(o==null){q=!1
s=1
break}s=3
return A.a5(o.a.fg(),$async$oP)
case 3:n=c
if(p.c==null){q=!0
s=1
break}m=p.e
m=new A.bp(m,A.an(m).h("bp<1,de?>"))
if(o!==m.mf(m,new A.a10(),new A.a11())){q=!0
s=1
break}switch(n.a){case 2:q=!1
s=1
break $async$outer
case 0:p.a4z(a)
q=!0
s=1
break $async$outer
case 1:q=!0
s=1
break $async$outer}case 1:return A.a2(q,r)}})
return A.a3($async$oP,r)},
K5(){return this.oP(null,t.X)},
a44(a){return this.oP(a,t.X)},
Ku(a){var s=this,r=B.b.a3I(s.e,A.ajf())
if(r.c){s.a.toString
if(null.$2(r.a,a)&&r.d===B.cU)r.d=B.m_}else{r.w=a
r.d=B.m_}if(r.d===B.m_)s.vL(!1)
s.CU(r.a)},
hC(){return this.Ku(null,t.X)},
a4z(a){return this.Ku(a,t.X)},
IS(a){var s,r=this,q=B.b.a38(r.e,A.an5(a)),p=r.e[q]
if(p.c&&p.d.a<8){s=r.Ee(q-1,A.Ad())
s=s==null?null:s.a
r.w.d5(0,new A.qn(a,s))}p.d=B.lZ
if(!r.ay)r.vL(!1)},
sH9(a){this.ch=a
this.CW.sn(0,a>0)},
a1l(){var s,r,q,p,o,n,m=this
m.sH9(m.ch+1)
if(m.ch===1){s=m.iA(m.e.length-1,A.Ad())
r=m.e[s].a
q=!r.gLu()&&s>0?m.Ee(s-1,A.Ad()).a:null
p=m.Q
p===$&&A.b()
o=p.length
n=0
for(;n<p.length;p.length===o||(0,A.Q)(p),++n)p[n].Ii(r,q)}},
o8(){var s,r,q,p=this
p.sH9(p.ch-1)
if(p.ch===0){s=p.Q
s===$&&A.b()
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].o8()}},
UT(a){this.cx.C(0,a.gbQ())},
V0(a){this.cx.v(0,a.gbQ())},
RD(){if($.bM.CW$===B.cJ){var s=this.d
s===$&&A.b()
s=$.ak.I$.z.j(0,s)
this.au(new A.a0W(s==null?null:s.rT(t.CE)))}s=this.cx
B.b.Z(A.aA(s,!0,A.m(s).c),$.ak.ga_F())},
L(a){var s,r=this,q=null,p=r.gV_(),o=A.akU(a),n=r.bg$,m=r.d
m===$&&A.b()
r.a.toString
if(m.gbm()==null){s=r.gCX()
s=J.lX(s.slice(0),A.an(s).c)}else s=B.rF
return new A.lN(q,A.Fl(B.bR,new A.Am(!1,A.akT(A.Es(!0,q,A.a8y(n,new A.oI(s,B.Q,m)),q,q,q,r.x,!1,q,q,q,q,q,!0),o),q),p,r.gUS(),q,q,p),q)}}
A.a12.prototype={
$1(a){var s,r,q=a.b.a
if(q!=null){s=this.a.as
r=s.y
if(r==null)r=s.$ti.h("bT.T").a(r)
s.OD(0,r+1)
q=new A.O1(r,q,null,B.m0)}else q=null
return A.an4(a,B.lY,!1,q)},
$S:318}
A.a0X.prototype={
$1(a){return a!=null&&a.gkl()},
$S:27}
A.a0Y.prototype={
$0(){return null},
$S:9}
A.a0Z.prototype={
$1(a){return a!=null&&a.gkl()},
$S:27}
A.a1_.prototype={
$0(){return null},
$S:9}
A.a10.prototype={
$1(a){return a!=null&&a.gkl()},
$S:27}
A.a11.prototype={
$0(){return null},
$S:9}
A.a0W.prototype={
$0(){var s=this.a
if(s!=null)s.sHg(!0)},
$S:0}
A.qz.prototype={
F(){return"_RouteRestorationType."+this.b}}
A.Pt.prototype={
gJP(){return!0},
rg(){return A.a([this.a.a],t.f)}}
A.O1.prototype={
rg(){var s=this,r=s.PG(),q=A.a([s.c,s.d],t.f),p=s.e
if(p!=null)q.push(p)
B.b.K(r,q)
return r},
y_(a){var s=a.wP(this.d,this.e,t.z)
s.toString
return s},
gKZ(){return this.c}}
A.aip.prototype={
gJP(){return!1},
rg(){A.avk(this.d)},
y_(a){var s=a.c
s.toString
return this.d.$2(s,this.e)},
gKZ(){return this.c}}
A.N8.prototype={
bb(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.y==null
if(a)c.y=A.y(t.N,t.lC)
s=t.f
r=A.a([],s)
q=c.y
q.toString
p=J.aM(q,null)
if(p==null)p=B.dk
o=A.y(t.dR,t.lC)
q=c.y
q.toString
n=J.arK(J.Ak(q))
for(q=a1.length,m=b,l=a,k=!0,j=0;j<a1.length;a1.length===q||(0,A.Q)(a1),++j){i=a1[j]
if(i.d.a>7){h=i.a
h.c.sn(0,b)
continue}if(i.c){l=l||r.length!==J.bE(p)
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
p=J.aM(h,i.gcB())
if(p==null)p=B.dk}else{r=B.dk
p=B.dk}m=i
continue}if(k){h=i.b
h=h==null?b:h.gJP()
k=h===!0}else k=!1
h=i.a
f=k?i.gcB():b
h.c.sn(0,f)
if(k){h=i.b
f=h.b
h=f==null?h.b=h.rg():f
if(!l){f=J.aF(p)
e=f.gp(p)
d=r.length
l=e<=d||!J.f(f.j(p,d),h)}else l=!0
B.b.C(r,h)}}l=l||r.length!==J.bE(p)
c.SV(r,m,o,n)
if(l||n.gbC(n)){c.y=o
c.aA()}},
SV(a,b,c,d){var s,r=a.length
if(r!==0){s=b==null?null:b.gcB()
c.l(0,s,a)
d.v(0,s)}},
X(a){if(this.y==null)return
this.y=null
this.aA()},
L_(a,b){var s,r,q,p,o,n=A.a([],t.hi)
if(this.y!=null)s=a!=null&&a.gcB()==null
else s=!0
if(s)return n
s=this.y
s.toString
r=J.aM(s,a==null?null:a.gcB())
if(r==null)return n
for(s=J.at(r);s.q();){q=A.axR(s.gG(s))
p=q.y_(b)
o=$.agG()
n.push(new A.de(p,q,!1,B.lY,o,o,o))}return n},
rl(){return null},
m4(a){a.toString
return J.ak0(t.G.a(a),new A.ab8(),t.dR,t.lC)},
Jt(a){this.y=a},
mv(){return this.y},
glJ(a){return this.y!=null}}
A.ab8.prototype={
$2(a,b){return new A.b0(A.cs(a),A.hG(t.j.a(b),!0,t.K),t.cj)},
$S:319}
A.acm.prototype={
$2(a,b){if(!a.a)a.H(0,b)},
$S:34}
A.yq.prototype={
c2(){this.dm()
this.cF()
this.eu()},
m(){var s=this,r=s.aj$
if(r!=null)r.H(0,s.ge3())
s.aj$=null
s.aL()}}
A.yr.prototype={
aS(a){this.bf(a)
this.oa()},
b4(){var s,r,q,p,o=this
o.cu()
s=o.bg$
r=o.gmq()
q=o.c
q.toString
q=A.p3(q)
o.f3$=q
p=o.lq(q,r)
if(r){o.ip(s,o.dI$)
o.dI$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.f2$.Z(0,new A.acm())
s=r.bg$
if(s!=null)s.m()
r.bg$=null
r.Pn()}}
A.dq.prototype={
i(a){var s=A.a([],t.s)
this.cc(s)
return"Notification("+B.b.ba(s,", ")+")"},
cc(a){}}
A.cF.prototype={
bO(a){return new A.ys(this,B.a6,this.$ti.h("ys<1>"))}}
A.ys.prototype={
Kj(a){var s,r=this.f
r.toString
s=this.$ti
s.h("cF<1>").a(r)
if(s.c.b(a))return r.d.$1(a)
return!1},
mg(a){}}
A.ek.prototype={}
A.RD.prototype={}
A.fc.prototype={
smk(a){var s
if(this.b===a)return
this.b=a
s=this.e
if(s!=null)s.DJ()},
soN(a){if(this.c)return
this.c=!0
this.e.DJ()},
S(a,b){this.d.S(0,b)},
H(a,b){this.d.H(0,b)},
mn(a){var s,r=this.e
r.toString
this.e=null
if(r.c==null)return
B.b.v(r.d,this)
s=$.bM
if(s.CW$===B.B9)s.ax$.push(new A.a1l(r))
else r.EV()},
fN(){var s=this.f.gbm()
if(s!=null)s.EX()},
i(a){return"<optimized out>#"+A.bK(this)+"(opaque: "+this.b+"; maintainState: "+this.c+")"},
$iac:1,
HF(a){return this.a.$1(a)}}
A.a1l.prototype={
$1(a){this.a.EV()},
$S:2}
A.qq.prototype={
af(){return new A.yu(B.m)}}
A.yu.prototype={
az(){this.aN()
this.a.c.d.sn(0,!0)},
m(){this.a.c.d.sn(0,!1)
this.a.toString
this.aL()},
L(a){var s=this.a
return new A.pG(s.d,s.c.HF(a),null)},
EX(){this.au(new A.acr())}}
A.acr.prototype={
$0(){},
$S:0}
A.oI.prototype={
af(){return new A.oK(A.a([],t.tD),null,null,B.m)}}
A.oK.prototype={
az(){this.aN()
this.a3a(0,this.a.c)},
we(a,b){return this.d.length},
z1(a,b){b.e=this
this.au(new A.a1p(this,null,null,b))},
a3a(a,b){var s,r=b.length
if(r===0)return
for(s=0;s<r;++s)b[s].e=this
this.au(new A.a1o(this,null,null,b))},
a4U(a){var s,r,q,p,o,n=this
if(t.rF.b(a))s=a
else s=J.lX(a.slice(0),A.an(a).c)
if(s.length===0)return
r=n.d
if(A.cO(r,s))return
q=A.k8(r,t.u7)
for(r=s.length,p=0;p<r;++p){o=s[p]
if(o.e==null)o.e=n}n.au(new A.a1q(n,s,q,null,null))},
EV(){if(this.c!=null)this.au(new A.a1n())},
DJ(){this.au(new A.a1m())},
L(a){var s,r,q,p,o,n=A.a([],t.E)
for(s=this.d,r=s.length-1,q=!0,p=0;r>=0;--r){o=s[r]
if(q){++p
n.push(new A.qq(o,!0,o.f))
q=!o.b||!1}else if(o.c)n.push(new A.qq(o,!1,o.f))}s=t.m8
return new A.QB(n.length-p,this.a.d,A.aA(new A.cH(n,s),!1,s.h("bn.E")),null)}}
A.a1p.prototype={
$0(){var s=this,r=s.a
B.b.oD(r.d,r.we(s.b,s.c),s.d)},
$S:0}
A.a1o.prototype={
$0(){var s=this,r=s.a
B.b.Jv(r.d,r.we(s.b,s.c),s.d)},
$S:0}
A.a1q.prototype={
$0(){var s,r,q=this,p=q.a,o=p.d
B.b.X(o)
s=q.b
B.b.K(o,s)
r=q.c
r.a5_(s)
B.b.Jv(o,p.we(q.d,q.e),r)},
$S:0}
A.a1n.prototype={
$0(){},
$S:0}
A.a1m.prototype={
$0(){},
$S:0}
A.QB.prototype={
bO(a){var s=A.cC(t.h)
return new A.QC(s,this,B.a6)},
aD(a){var s=a.a3(t.I)
s.toString
s=new A.qy(s.w,this.e,this.f,A.ar(),0,null,null,A.ar())
s.aE()
s.K(0,null)
return s},
aG(a,b){var s=this.e
if(b.ar!==s){b.ar=s
b.a6()}s=a.a3(t.I)
s.toString
b.sbD(s.w)
s=this.f
if(s!==b.ai){b.ai=s
b.ao()
b.aY()}}}
A.QC.prototype={
ga9(){return t.z2.a(A.eI.prototype.ga9.call(this))}}
A.qy.prototype={
ei(a){if(!(a.e instanceof A.dR))a.e=new A.dR(null,null,B.j)},
WZ(){if(this.t!=null)return
this.t=B.aU.W(this.I)},
sbD(a){var s=this
if(s.I===a)return
s.I=a
s.t=null
s.a6()},
gpY(){var s,r,q,p,o=this
if(o.ar===A.au.prototype.grd.call(o))return null
s=A.au.prototype.ga1R.call(o,o)
for(r=o.ar,q=t.B;r>0;--r){p=s.e
p.toString
s=q.a(p).am$}return s},
ez(a){var s,r,q,p,o=this.gpY()
for(s=t.B,r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.jx(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.am$}return r},
gjE(){return!0},
c3(a){return new A.a_(A.F(1/0,a.a,a.b),A.F(1/0,a.c,a.d))},
bA(){var s,r,q,p,o,n,m,l,k=this
k.M=!1
if(k.df$-k.ar===0)return
k.WZ()
s=t.k.a(A.x.prototype.gY.call(k))
r=A.rn(new A.a_(A.F(1/0,s.a,s.b),A.F(1/0,s.c,s.d)))
q=k.gpY()
for(s=t.B,p=t.uu;q!=null;){o=q.e
o.toString
s.a(o)
if(!o.gz8()){q.cn(r,!0)
n=k.t
n.toString
m=k.k3
m.toString
l=q.k3
l.toString
o.a=n.lw(p.a(m.aa(0,l)))}else{n=k.k3
n.toString
m=k.t
m.toString
k.M=A.am_(q,o,n,m)||k.M}q=o.am$}},
cL(a,b){var s,r,q,p=this,o={},n=o.a=p.ar===A.au.prototype.grd.call(p)?null:p.cW$
for(s=t.B,r=0;r<p.df$-p.ar;++r,n=q){n=n.e
n.toString
s.a(n)
if(a.nD(new A.acR(o,b,n),n.a,b))return!0
q=n.bR$
o.a=q}return!1},
tG(a,b){var s,r,q,p,o,n=this.gpY()
for(s=t.B,r=b.a,q=b.b;n!=null;){p=n.e
p.toString
s.a(p)
o=p.a
a.eL(n,new A.t(o.a+r,o.b+q))
n=p.am$}},
aF(a,b){var s,r=this,q=r.M&&r.ai!==B.k,p=r.aW
if(q){q=r.cx
q===$&&A.b()
s=r.k3
p.saR(0,a.kv(q,b,new A.C(0,0,0+s.a,0+s.b),r.gA0(),r.ai,p.a))}else{p.saR(0,null)
r.tG(a,b)}},
m(){this.aW.saR(0,null)
this.hR()},
fe(a){var s,r,q=this.gpY()
for(s=t.B;q!=null;){a.$1(q)
r=q.e
r.toString
q=s.a(r).am$}},
iQ(a){var s
switch(this.ai.a){case 0:return null
case 1:case 2:case 3:if(this.M){s=this.k3
s=new A.C(0,0,0+s.a,0+s.b)}else s=null
return s}}}
A.acR.prototype={
$2(a,b){return this.a.a.bS(a,b)},
$S:17}
A.Oi.prototype={
c2(){this.dm()
this.cF()
this.eu()},
m(){var s=this,r=s.aj$
if(r!=null)r.H(0,s.ge3())
s.aj$=null
s.aL()}}
A.RJ.prototype={
ap(a){var s,r,q
this.em(a)
s=this.av$
for(r=t.B;s!=null;){s.ap(a)
q=s.e
q.toString
s=r.a(q).am$}},
ag(a){var s,r,q
this.dE(0)
s=this.av$
for(r=t.B;s!=null;){s.ag(0)
q=s.e
q.toString
s=r.a(q).am$}}}
A.of.prototype={
af(){var s=t.y
return new A.xQ(A.aV([!1,!0,!0,!0],s,s),null,null,B.m)},
jj(a){return A.Af().$1(a)}}
A.xQ.prototype={
az(){var s,r,q=this
q.aN()
s=q.a
r=s.f
q.d=A.amX(A.bc(s.e),r,q)
r=q.a
s=r.f
s=A.amX(A.bc(r.e),s,q)
q.e=s
r=q.d
r.toString
q.f=new A.ye(A.a([r,s],t.ro))},
aS(a){var s,r=this
r.bf(a)
if(!a.f.k(0,r.a.f)||A.bc(a.e)!==A.bc(r.a.e)){s=r.d
s.toString
s.sae(0,r.a.f)
s=r.d
s.toString
s.sHy(A.bc(r.a.e))
s=r.e
s.toString
s.sae(0,r.a.f)
s=r.e
s.toString
s.sHy(A.bc(r.a.e))}},
ww(a){var s,r,q,p,o,n,m,l,k,j=this
if(!j.a.jj(a))return!1
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
if(a instanceof A.hM){q=a.e
if(q<0)n=s
else if(q>0)n=p
else n=null
m=n===s
s=j.c
s.cT(new A.vd(m,0))
s=j.w
s.l(0,m,!0)
s.j(0,m).toString
n.d=0
j.w.j(0,m).toString
s=a.f
if(s!==0){r=n.c
if(r!=null)r.al(0)
n.c=null
l=A.F(Math.abs(s),100,1e4)
s=n.f
if(n.a===B.fY)r=0.3
else{r=n.r
r===$&&A.b()
q=r.a
q=r.b.ac(0,q.gn(q))
r=q}s.a=r
r.toString
s.b=A.F(l*0.00006,r,0.5)
r=n.w
s=n.x
s===$&&A.b()
q=s.a
r.a=s.b.ac(0,q.gn(q))
r.b=Math.min(0.025+75e-8*l*l,1)
r=n.b
r===$&&A.b()
r.e=A.c8(0,B.d.b1(0.15+l*0.02),0)
r.ki(0,0)
n.as=0.5
n.a=B.a_S}else{s=a.d
if(s!=null){p=a.b.ga9()
p.toString
t.x.a(p)
o=p.k3
o.toString
k=p.kH(s.d)
switch(A.bc(r.e).a){case 0:n.toString
s=o.b
n.KA(0,Math.abs(q),o.a,A.F(k.b,0,s),s)
break
case 1:n.toString
s=o.a
n.KA(0,Math.abs(q),o.b,A.F(k.a,0,s),s)
break}}}}else if(a instanceof A.j3||a instanceof A.fi)if(a.gIr()!=null){s=j.d
if(s.a===B.fZ)s.jP(B.d6)
s=j.e
if(s.a===B.fZ)s.jP(B.d6)}j.r=A.B(a)
return!1},
m(){this.d.m()
this.e.m()
this.Qh()},
L(a){var s=this,r=null,q=s.a,p=s.d,o=s.e,n=q.e,m=s.f
return new A.cF(s.gwv(),new A.h0(A.D0(new A.h0(q.w,r),new A.N7(p,o,n,m),r,r,B.S),r),r,t.Bf)}}
A.n7.prototype={
F(){return"_GlowState."+this.b}}
A.xP.prototype={
sae(a,b){if(this.ax.k(0,b))return
this.ax=b
this.aA()},
sHy(a){if(this.ay===a)return
this.ay=a
this.aA()},
m(){var s=this,r=s.b
r===$&&A.b()
r.m()
r=s.y
r===$&&A.b()
r.w.bs$.v(0,r)
r.Cu()
r=s.c
if(r!=null)r.al(0)
s.dF()},
KA(a,b,c,d,e){var s,r,q,p=this,o=p.c
if(o!=null)o.al(0)
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
s.b=Math.max(1-1/(0.7*Math.sqrt(p.at*q)),A.kZ(o.ac(0,r.gn(r))))
r=d/e
p.Q=r
if(r!==p.as){o=p.y
o===$&&A.b()
if(!o.ga3B())o.mO(0)}else{o=p.y
o===$&&A.b()
o.fZ(0)
p.z=null}o=p.b
o===$&&A.b()
o.e=B.nu
if(p.a!==B.fZ){o.ki(0,0)
p.a=B.fZ}else{o=o.r
if(!(o!=null&&o.a!=null))p.aA()}p.c=A.cd(B.nu,new A.aaS(p))},
va(a){var s=this
if(a!==B.X)return
switch(s.a.a){case 1:s.jP(B.d6)
break
case 3:s.a=B.fY
s.at=0
break
case 2:case 0:break}},
jP(a){var s,r,q=this,p=q.a
if(p===B.Co||p===B.fY)return
p=q.c
if(p!=null)p.al(0)
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
p.ki(0,0)
q.a=B.Co},
Z6(a){var s,r=this,q=r.z
if(q!=null){q=q.a
s=r.Q
r.as=s-(s-r.as)*Math.pow(2,-(a.a-q)/$.aqj().a)
r.aA()}if(A.Ae(r.Q,r.as,0.001)){q=r.y
q===$&&A.b()
q.fZ(0)
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
m=$.ao().bd()
l=j.ax
k=i.a
m.sae(0,A.b5(B.d.b1(255*i.b.ac(0,k.gn(k))),l.gn(l)>>>16&255,l.gn(l)>>>8&255,l.gn(l)&255))
a.cs(0)
a.aB(0,0,j.d+j.e)
a.dk(0,1,n*q)
a.jY(new A.C(0,0,0+s,0+o))
a.i2(new A.t(s/2*(0.5+r),o-p),p,m)
a.co(0)},
i(a){return"_GlowController(color: "+this.ax.i(0)+", axis: "+A.aAA(this.ay)+")"}}
A.aaS.prototype={
$0(){return this.a.jP(B.hB)},
$S:0}
A.N7.prototype={
Fg(a,b,c,d,e){var s
if(c==null)return
switch(A.jx(d,e)){case B.z:c.aF(a,b)
break
case B.w:a.cs(0)
a.aB(0,0,b.b)
a.dk(0,1,-1)
c.aF(a,b)
a.co(0)
break
case B.ae:a.cs(0)
a.kA(0,1.5707963267948966)
a.dk(0,1,-1)
c.aF(a,new A.a_(b.b,b.a))
a.co(0)
break
case B.av:a.cs(0)
s=b.a
a.aB(0,s,0)
a.kA(0,1.5707963267948966)
c.aF(a,new A.a_(b.b,s))
a.co(0)
break}},
aF(a,b){var s=this,r=s.d
s.Fg(a,b,s.b,r,B.nI)
s.Fg(a,b,s.c,r,B.nH)},
hN(a){return a.b!=this.b||a.c!=this.c},
i(a){return"_GlowingOverscrollIndicatorPainter("+A.h(this.b)+", "+A.h(this.c)+")"}}
A.ps.prototype={
af(){return new A.ze(null,null,B.m)},
jj(a){return A.Af().$1(a)}}
A.ze.prototype={
gjT(){var s,r,q,p,o,n,m=this,l=null,k=m.d
if(k===$){s=t.a7
r=new A.aJ(0,0,s)
q=new A.zd(r,B.m5,$.br())
p=A.dY(l,l,l,l,m)
p.br()
o=p.aU$
o.b=!0
o.a.push(q.gv9())
q.a!==$&&A.ew()
q.a=p
n=A.eg(B.mZ,p,l)
n.a.S(0,q.gec())
t.m.a(n)
q.b!==$&&A.ew()
q.b=new A.aX(n,r,s.h("aX<aE.T>"))
m.d!==$&&A.be()
m.d=q
k=q}return k},
ww(a){var s,r,q,p,o,n,m=this
if(!m.a.jj(a))return!1
if(a instanceof A.hM){m.f=a
J.T(m.e)
s=a.e
r=m.c
r.cT(new A.vd(s<0,0))
m.r=!0
r=a.f
if(r!==0){s=m.gjT()
q=A.F(Math.abs(r),1,1e4)
r=s.c
p=s.b
p===$&&A.b()
o=p.a
r.a=p.b.ac(0,o.gn(o))
r.b=Math.min(0.016+1.01/q,1)
r=s.a
r===$&&A.b()
r.e=A.c8(0,B.d.b1(q*0.02),0)
r.ki(0,0)
s.d=B.a0q}else if(a.d!=null){r=a.a.d
r.toString
n=A.F(Math.abs(s)/r+m.gjT().e,0,1)
r=m.gjT()
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
o.e=B.hC
if(r.d!==B.m6){o.ki(0,0)
r.d=B.m6}else{s=o.r
if(!(s!=null&&s.a!=null))r.aA()}}}else if(a instanceof A.j3||a instanceof A.fi){s=m.gjT()
if(s.d===B.m6)s.jP(B.hC)}m.e=a
return!1},
Tk(a){switch(this.a.c.a){case 0:return a>0?B.m8:B.m7
case 1:return a>0?B.cW:B.e4
case 2:return a>0?B.m7:B.m8
case 3:return a>0?B.e4:B.cW}},
m(){var s=this.gjT(),r=s.a
r===$&&A.b()
r.m()
s.dF()
this.Qq()},
L(a){var s={},r=a.a3(t.l).f
s.a=null
return new A.cF(this.gwv(),A.jD(this.gjT(),new A.adu(s,this,r.a),null),null,t.Bf)}}
A.adu.prototype={
$2(a,b){var s,r,q,p,o,n,m=this,l=m.b,k=l.gjT().b
k===$&&A.b()
s=k.a
s=k.b.ac(0,s.gn(s))
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
p=l.Tk(k==null?0:k)
k=l.f
if(k==null)o=null
else{k=k.a.d
k.toString
o=k}if(o==null)o=m.a.a
k=A.uF(r,q,1)
l=l.a
n=A.amD(p,l.f,k,!0)
return A.akp(n,s!==0&&o!==m.a.a?l.e:B.k)},
$S:320}
A.ng.prototype={
F(){return"_StretchState."+this.b}}
A.zd.prototype={
va(a){var s=this
if(a!==B.X)return
switch(s.d.a){case 1:s.jP(B.hC)
break
case 3:s.d=B.m5
s.e=0
break
case 2:case 0:break}},
jP(a){var s,r,q=this,p=q.d
if(p===B.Cv||p===B.m5)return
p=q.c
s=q.b
s===$&&A.b()
r=s.a
p.a=s.b.ac(0,r.gn(r))
p.b=0
p=q.a
p===$&&A.b()
p.e=a
p.ki(0,0)
q.d=B.Cv},
i(a){return"_StretchController()"}}
A.vd.prototype={
cc(a){this.Pr(a)
a.push("side: "+(this.a?"leading edge":"trailing edge"))}}
A.yw.prototype={
cc(a){var s,r
this.uH(a)
s=this.bx$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.zP.prototype={
c2(){this.dm()
this.cF()
this.eu()},
m(){var s=this,r=s.aj$
if(r!=null)r.H(0,s.ge3())
s.aj$=null
s.aL()}}
A.zW.prototype={
c2(){this.dm()
this.cF()
this.eu()},
m(){var s=this,r=s.aj$
if(r!=null)r.H(0,s.ge3())
s.aj$=null
s.aL()}}
A.zb.prototype={
k(a,b){if(b==null)return!1
if(J.T(b)!==A.B(this))return!1
return b instanceof A.zb&&A.cO(b.a,this.a)},
gu(a){return A.d6(this.a)},
i(a){return"StorageEntryIdentifier("+B.b.ba(this.a,":")+")"}}
A.a1s.prototype={
CV(a){var s=A.a([],t.D5)
if(A.alE(a,s))a.AO(new A.a1t(s))
return s},
Lx(a,b){var s,r=this
if(r.a==null)r.a=A.y(t.K,t.z)
s=r.CV(a)
if(s.length!==0)r.a.l(0,new A.zb(s),b)},
Ad(a){var s
if(this.a==null)return null
s=this.CV(a)
return s.length!==0?this.a.j(0,new A.zb(s)):null}}
A.a1t.prototype={
$1(a){return A.alE(a,this.a)},
$S:45}
A.oM.prototype={
L(a){return this.c}}
A.HK.prototype={
Hs(a,b,c){var s=t.sa.a(B.b.gb5(this.d))
if(s.I!=null){s.I=a
return A.bs(null,t.H)}return s.he(s.kD(a),b,c)},
ti(a){var s=t.sa.a(B.b.gb5(this.d))
if(s.I!=null){s.I=a
return}s.dz(s.kD(a))},
I5(a,b,c){var s=null,r=new A.kO(this.z,this.as,B.fA,a,b,!0,s,A.jd(!1),$.br())
r.CA(b,s,!0,c,a)
r.CB(b,s,s,!0,c,a)
return r},
ap(a){this.OS(a)
t.sa.a(a).spn(this.as)}}
A.m8.prototype={}
A.kO.prototype={
yw(a,b,c,d,e,f){return this.P1(a,b,c,d,e,null)},
spn(a){var s,r=this
if(r.ar===a)return
s=r.ghy(r)
r.ar=a
if(s!=null)r.yM(r.kD(s))},
gqc(){var s=this.ax
s.toString
return Math.max(0,s*(this.ar-1)/2)},
pt(a,b){var s=Math.max(0,a-this.gqc())/(b*this.ar),r=B.d.An(s)
if(Math.abs(s-r)<1e-10)return r
return s},
kD(a){var s=this.ax
s.toString
return a*s*this.ar+this.gqc()},
ghy(a){var s,r,q=this,p=q.at
if(p!=null)s=!(q.z!=null&&q.Q!=null)
else s=!0
if(s)p=null
else{s=q.I
if(s==null){p.toString
s=q.z
s.toString
r=q.Q
r.toString
r=A.F(p,s,r)
s=q.ax
s.toString
s=q.pt(r,s)
p=s}else p=s}return p},
Bj(){var s,r,q=this,p=q.w,o=p.c
o.toString
o=A.HL(o)
if(o!=null){p=p.c
p.toString
s=q.I
if(s==null){s=q.at
s.toString
r=q.ax
r.toString
r=q.pt(s,r)
s=r}o.Lx(p,s)}},
L1(){var s,r,q
if(this.at==null){s=this.w
r=s.c
r.toString
r=A.HL(r)
if(r==null)q=null
else{s=s.c
s.toString
q=r.Ad(s)}if(q!=null)this.t=q}},
Bi(){var s,r=this,q=r.I
if(q==null){q=r.at
q.toString
s=r.ax
s.toString
s=r.pt(q,s)
q=s}r.w.e.sn(0,q)
q=$.h3.ce$
q===$&&A.b()
q.IY()},
L0(a,b){if(b)this.t=a
else this.dz(this.kD(a))},
nI(a){var s,r,q,p,o=this,n=o.ax
n=n!=null?n:null
if(a===n)return!0
o.OY(a)
s=o.at
s=s!=null?s:null
if(s==null)r=o.t
else if(n===0){q=o.I
q.toString
r=q}else{n.toString
r=o.pt(s,n)}p=o.kD(r)
o.I=a===0?r:null
if(p!==s){o.at=p
return!1}return!0},
jU(a){var s
this.P2(a)
if(!(a instanceof A.kO))return
s=a.I
if(s!=null)this.I=s},
nF(a,b){var s=a+this.gqc()
return this.OW(s,Math.max(s,b-this.gqc()))},
fA(){var s,r,q,p,o,n=this,m=null,l=n.z
if(l!=null&&n.Q!=null)l.toString
else l=m
if(n.z!=null&&n.Q!=null){s=n.Q
s.toString}else s=m
r=n.at
r=r!=null?r:m
q=n.ax
q=q!=null?q:m
p=n.w.a.c
o=n.ar
return new A.m8(o,l,s,r,q,p)},
$im8:1}
A.q8.prototype={
jX(a){return new A.q8(!1,this.hg(a))},
glv(){return this.b}}
A.oL.prototype={
jX(a){return new A.oL(this.hg(a))},
Tz(a){var s,r
if(a instanceof A.kO){s=a.ghy(a)
s.toString
return s}s=a.at
s.toString
r=a.ax
r.toString
return s/r},
TA(a,b){var s
if(a instanceof A.kO)return a.kD(b)
s=a.ax
s.toString
return b*s},
lC(a,b){var s,r,q,p,o,n=this
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
if(s)return n.OU(a,b)
q=n.gpd()
p=n.Tz(a)
s=q.c
if(b<-s)p-=0.5
else if(b>s)p+=0.5
o=n.TA(a,B.d.An(p))
s=a.at
s.toString
if(o!==s){s=n.gkN()
r=a.at
r.toString
return new A.kq(o,A.z9(s,r-o,b),q)}return null}}
A.oN.prototype={
af(){return new A.Ol(B.m)}}
A.Ol.prototype={
az(){this.aN()
this.d=this.a.r.z},
Tq(a){var s,r
switch(this.a.e.a){case 0:s=a.a3(t.I)
s.toString
r=A.agp(s.w)
this.a.toString
return r
case 1:return B.w}},
L(a){var s,r,q=this,p=null,o=q.Tq(a),n=q.a,m=n.w
if(m==null){n=n.at
n=n==null?p:n.jA(a)}else n=m
n=new A.oL(B.zB.hg(n))
n=new A.q8(!1,p).hg(n)
m=q.a
s=m.Q
r=m.r
m=m.at
if(m==null)m=A.JA(a).a0z(!1)
return new A.cF(new A.acs(q),A.ama(o,r,s,new A.q8(!1,n),p,m,new A.act(q,o)),p,t.Bf)}}
A.acs.prototype={
$1(a){var s,r,q,p,o
if(a.bx$===0&&this.a.a.y!=null&&a instanceof A.fi){s=t.y9.a(a.a)
r=s.c
r.toString
q=s.a
q.toString
p=s.b
p.toString
p=Math.max(0,A.F(r,q,p))
q=s.d
q.toString
o=B.d.b1(p/Math.max(1,q*s.f))
r=this.a
if(o!==r.d){r.d=o
r.a.y.$1(o)}}return!1},
$S:24}
A.act.prototype={
$2(a,b){var s=this.a.a
return new A.mX(this.b,b,0,B.Em,s.as,A.a([new A.JX(s.r.as,!0,s.z,null)],t.E),null)},
$S:321}
A.hO.prototype={
gmk(){return!0},
gxH(){return!1},
HG(a){return!0}}
A.I7.prototype={
aD(a){var s=new A.J1(this.d,0,!1,!1,A.ar())
s.aE()
return s},
aG(a,b){b.sa4q(this.d)
b.sa4O(0)
b.sa_K(!1)
b.sa_J(!1)}}
A.a0n.prototype={}
A.a1Q.prototype={}
A.Dg.prototype={
wl(a){return this.Wm(a)},
Wm(a){var s=0,r=A.a4(t.H),q,p=this,o,n,m
var $async$wl=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:n=A.eb(a.b)
m=p.a
if(!m.T(0,n)){s=1
break}m=m.j(0,n)
m.toString
o=a.a
if(o==="Menu.selectedCallback"){m.ga6B().$0()
m.ga4l()
o=$.ak.I$.f.f.e
o.toString
A.arQ(o,m.ga4l(),t.q)}else if(o==="Menu.opened")m.ga6A(m).$0()
else if(o==="Menu.closed")m.ga6z(m).$0()
case 1:return A.a2(q,r)}})
return A.a3($async$wl,r)}}
A.oR.prototype={
bX(a){return this.f!=a.f}}
A.ko.prototype={
af(){return new A.Pu(null,A.y(t.wb,t.M),null,!0,null,B.m)}}
A.Pu.prototype={
gcB(){return this.a.d},
ip(a,b){},
L(a){return A.a8y(this.bg$,this.a.c)}}
A.xc.prototype={
bX(a){return a.f!=this.f}}
A.vU.prototype={
af(){return new A.yL(B.m)}}
A.yL.prototype={
b4(){var s,r=this
r.cu()
s=r.c
s.toString
r.r=A.p3(s)
r.wi()
if(r.d==null){r.a.toString
r.d=!1}},
aS(a){this.bf(a)
this.wi()},
gEM(){this.a.toString
return!1},
wi(){var s,r=this
if(r.gEM()&&!r.w){r.w=!0;++$.kn.x2$
s=$.h3.ce$
s===$&&A.b()
s.ga5o().aZ(new A.acW(r),t.P)}},
XQ(){var s,r=this
r.e=!1
r.f=null
s=$.h3.ce$
s===$&&A.b()
s.H(0,r.gwH())
r.wi()},
m(){if(this.e){var s=$.h3.ce$
s===$&&A.b()
s.H(0,this.gwH())}this.aL()},
L(a){var s,r,q=this,p=q.d
p.toString
if(p&&q.gEM())return B.fO
p=q.r
if(p==null)p=q.f
s=q.a
r=s.d
return A.a8y(p,new A.ko(s.c,r,null))}}
A.acW.prototype={
$1(a){var s,r=this.a
r.w=!1
if(r.c!=null){s=$.h3.ce$
s===$&&A.b()
s.S(0,r.gwH())
r.au(new A.acV(r,a))}$.kn.Hq()},
$S:322}
A.acV.prototype={
$0(){var s=this.a
s.f=this.b
s.e=!0
s.d=!1},
$S:0}
A.du.prototype={
glJ(a){return!0},
m(){var s=this,r=s.c
if(r!=null){r=r.f2$.v(0,s)
r.toString
s.H(0,r)
s.c=s.b=null}s.dF()
s.a=!0}}
A.hY.prototype={
yk(a){},
mm(a,b){var s,r,q=this,p=q.bg$
p=p==null?null:J.dX(p.giF(),b)
s=p===!0
r=s?a.m4(J.aM(q.bg$.giF(),b)):a.rl()
if(a.b==null){a.b=b
a.c=q
p=new A.a3r(q,a)
a.S(0,p)
q.f2$.l(0,a,p)}a.Jt(r)
if(!s&&a.glJ(a)&&q.bg$!=null)q.xe(a)},
oa(){var s,r,q=this
if(q.f3$!=null){s=q.bg$
s=s==null?null:s.e
s=s==q.gcB()||q.gmq()}else s=!0
if(s)return
r=q.bg$
if(q.lq(q.f3$,!1))if(r!=null)r.m()},
gmq(){var s,r,q=this
if(q.dI$)return!0
if(q.gcB()==null)return!1
s=q.c
s.toString
r=A.p3(s)
if(r!=q.f3$){if(r==null)s=null
else{s=r.c
s=s==null?null:s.d
s=s===!0}s=s===!0}else s=!1
return s},
lq(a,b){var s,r,q=this
if(q.gcB()==null||a==null)return q.G5(null,b)
if(b||q.bg$==null){s=q.gcB()
s.toString
return q.G5(a.a_S(s,q),b)}s=q.bg$
s.toString
r=q.gcB()
r.toString
s.a56(r)
r=q.bg$
r.toString
a.hX(r)
return!1},
G5(a,b){var s,r=this,q=r.bg$
if(a==q)return!1
r.bg$=a
if(!b){if(a!=null){s=r.f2$
new A.b8(s,A.m(s).h("b8<1>")).Z(0,r.gZv())}r.yk(q)}return!0},
xe(a){var s,r=a.glJ(a),q=this.bg$
if(r){if(q!=null){r=a.b
r.toString
s=a.mv()
if(!J.f(J.aM(q.giF(),r),s)||!J.dX(q.giF(),r)){J.cA(q.giF(),r,s)
q.la()}}}else if(q!=null){r=a.b
r.toString
q.a4Z(0,r,t.K)}}}
A.a3r.prototype={
$0(){var s=this.a
if(s.bg$==null)return
s.xe(this.b)},
$S:0}
A.aer.prototype={
$2(a,b){if(!a.a)a.H(0,b)},
$S:34}
A.RK.prototype={
aS(a){this.bf(a)
this.oa()},
b4(){var s,r,q,p,o=this
o.cu()
s=o.bg$
r=o.gmq()
q=o.c
q.toString
q=A.p3(q)
o.f3$=q
p=o.lq(q,r)
if(r){o.ip(s,o.dI$)
o.dI$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.f2$.Z(0,new A.aer())
s=r.bg$
if(s!=null)s.m()
r.bg$=null
r.aL()}}
A.bT.prototype={
sn(a,b){var s=this.y
if(b==null?s!=null:b!==s){this.y=b
this.ym(s)}},
Jt(a){this.y=a}}
A.hc.prototype={
rl(){return this.cy},
ym(a){this.aA()},
m4(a){return A.m(this).h("hc.T").a(a)},
mv(){var s=this.y
return s==null?A.m(this).h("bT.T").a(s):s}}
A.yK.prototype={
m4(a){return this.PE(a)},
mv(){var s=this.PF()
s.toString
return s}}
A.vQ.prototype={}
A.vP.prototype={}
A.aes.prototype={
$2(a,b){if(!a.a)a.H(0,b)},
$S:34}
A.p5.prototype={}
A.Ji.prototype={
af(){return new A.qA(new A.Pr($.br()),null,A.y(t.wb,t.M),null,!0,null,B.m,this.$ti.h("qA<1>"))}}
A.vV.prototype={
F(){return"RouteInformationReportingType."+this.b}}
A.qA.prototype={
gcB(){return this.a.r},
az(){var s,r=this
r.aN()
s=r.a.c
if(s!=null)s.S(0,r.gq8())
r.a.f.ZU(r.gvZ())
r.a.e.S(0,r.gw3())},
ip(a,b){var s,r,q=this,p=q.f
q.mm(p,"route")
s=p.y
r=s==null
if((r?A.m(p).h("bT.T").a(s):s)!=null){p=r?A.m(p).h("bT.T").a(s):s
p.toString
q.qs(p,new A.ada(q))}else{p=q.a.c
if(p!=null)q.qs(p.a,new A.adb(q))}},
Yi(){var s=this
if(s.w||s.a.c==null)return
s.w=!0
$.bM.ax$.push(s.gXT())},
XU(a){var s,r,q,p,o=this
o.w=!1
s=o.f
r=s.y
q=r==null
if((q?A.m(s).h("bT.T").a(r):r)!=null){s=q?A.m(s).h("bT.T").a(r):r
s.toString
r=o.a.c
r.toString
q=o.e
q.toString
if(q!==B.TL)p=q===B.lo&&r.b.a==s.a
else p=!0
B.fv.te("selectMultiEntryHistory",t.H)
q=s.a
q.toString
A.amv(q,p,s.b)
r.b=r.a=s}o.e=B.lo},
Y2(){this.a.e.ga6n()
this.a.toString
return null},
qj(){var s=this
s.f.sn(0,s.Y2())
if(s.e==null)s.e=B.lo
s.Yi()},
b4(){var s,r=this
r.r=!0
r.Qm()
s=r.a.c
if(s!=null&&r.r)r.qs(s.a,new A.ad9(r))
r.r=!1
r.qj()},
aS(a){var s,r,q,p=this
p.Qn(a)
s=p.a
r=a.c
q=s.c==r
if(q)s.f===a.f
p.d=new A.H()
if(!q){s=r==null
if(!s)r.H(0,p.gq8())
q=p.a.c
if(q!=null)q.S(0,p.gq8())
s=s?null:r.a
r=p.a.c
if(s!=(r==null?null:r.a))p.Ew()}s=a.f
if(p.a.f!==s){r=p.gvZ()
s.a50(r)
p.a.f.ZU(r)}p.a.toString
s=p.gw3()
a.e.H(0,s)
p.a.e.S(0,s)
p.qj()},
m(){var s=this,r=s.a.c
if(r!=null)r.H(0,s.gq8())
s.a.f.a50(s.gvZ())
s.a.e.H(0,s.gw3())
s.d=null
s.Qo()},
qs(a,b){var s,r,q=this
q.r=!1
q.d=new A.H()
s=q.a.d
s.toString
r=q.c
r.toString
s.a6E(a,r).aZ(q.XC(q.d,b),t.H)},
XC(a,b){return new A.ad7(this,a,b)},
Ew(){var s=this
s.r=!0
s.qs(s.a.c.a,new A.ad4(s))},
TT(){var s=this
s.d=new A.H()
return s.a.e.a6F().aZ(s.V5(s.d),t.y)},
V5(a){return new A.ad5(this,a)},
FM(){this.au(new A.ad8())
this.qj()
return new A.bl(null,t.E8)},
V6(){this.au(new A.ad6())
this.qj()},
L(a){var s=this.bg$,r=this.a,q=r.c,p=r.f,o=r.d
r=r.e
return A.a8y(s,new A.Pz(q,p,o,r,this,new A.hn(r.gr5(),null),null))}}
A.ada.prototype={
$0(){return this.a.a.e.ga6c()},
$S(){return this.a.$ti.h("ah<~>(1)()")}}
A.adb.prototype={
$0(){return this.a.a.e.ga6b()},
$S(){return this.a.$ti.h("ah<~>(1)()")}}
A.ad9.prototype={
$0(){return this.a.a.e.gMx()},
$S(){return this.a.$ti.h("ah<~>(1)()")}}
A.ad7.prototype={
$1(a){var s=0,r=A.a4(t.H),q,p=this,o,n
var $async$$1=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:o=p.a
n=p.b
if(o.d!=n){s=1
break}s=3
return A.a5(p.c.$0().$1(a),$async$$1)
case 3:if(o.d==n)o.FM()
case 1:return A.a2(q,r)}})
return A.a3($async$$1,r)},
$S(){return this.a.$ti.h("ah<~>(1)")}}
A.ad4.prototype={
$0(){return this.a.a.e.gMx()},
$S(){return this.a.$ti.h("ah<~>(1)()")}}
A.ad5.prototype={
$1(a){var s=this.a
if(this.b!=s.d)return new A.bl(!0,t.a9)
s.FM()
return new A.bl(a,t.a9)},
$S:324}
A.ad8.prototype={
$0(){},
$S:0}
A.ad6.prototype={
$0(){},
$S:0}
A.Pz.prototype={
bX(a){if(this.f==a.f)this.r===a.r
return!0}}
A.Pr.prototype={
rl(){return null},
ym(a){this.aA()},
m4(a){var s
if(a==null)return null
t.DI.a(a)
s=J.bJ(a)
return new A.p5(A.cs(s.gJ(a)),s.gV(a))},
mv(){var s,r=this,q=r.y,p=q==null
if((p?A.m(r).h("bT.T").a(q):q)==null)q=null
else{s=(p?A.m(r).h("bT.T").a(q):q).a
q=[s,(p?A.m(r).h("bT.T").a(q):q).b]}return q}}
A.qN.prototype={
aS(a){this.bf(a)
this.oa()},
b4(){var s,r,q,p,o=this
o.cu()
s=o.bg$
r=o.gmq()
q=o.c
q.toString
q=A.p3(q)
o.f3$=q
p=o.lq(q,r)
if(r){o.ip(s,o.dI$)
o.dI$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.f2$.Z(0,new A.aes())
s=r.bg$
if(s!=null)s.m()
r.bg$=null
r.aL()}}
A.oJ.prototype={
gtC(){return this.e},
je(){var s,r=this,q=A.ahQ(r.gRo(),!1)
r.k4=q
r.goN()
s=A.ahQ(r.gRq(),!0)
r.p1=s
B.b.K(r.e,A.a([q,s],t.tD))
r.OP()},
k6(a){var s,r=this
r.OK(a)
s=r.at.Q
s===$&&A.b()
if(s===B.K&&!r.Q)r.a.IS(r)
return!0},
m(){B.b.X(this.e)
this.OO()}}
A.dU.prototype={
gbF(a){return this.as},
gBn(){return this.ax},
Vr(a){var s,r=this
switch(a.a){case 3:s=r.e
if(s.length!==0){s=B.b.gJ(s)
r.gmk()
s.smk(!0)}s=r.z
if(s!=null){s.a.$0()
s.a=null}r.z=null
break
case 1:case 2:s=r.e
if(s.length!==0)B.b.gJ(s).smk(!1)
if(r.z==null)r.z=$.bM.a5f(B.Fk)
break
case 0:if(!r.ga3s()){r.a.IS(r)
r.Q=!0
s=r.z
if(s!=null){s.a.$0()
s.a=null}r.z=null}break}},
je(){var s=this,r=s.gLk(s),q=s.gLk(s),p=s.glD(),o=s.a
o.toString
o=s.at=A.dY(p,r,q,null,o)
o.br()
p=o.aU$
p.b=!0
p.a.push(s.gEx())
s.as=o
s.O9()
p=s.as
if(p.gb0(p)===B.X&&s.e.length!==0){p=B.b.gJ(s.e)
s.gmk()
p.smk(!0)}},
o6(){this.OM()
return this.at.cK(0)},
o4(){this.OH()
var s=this.at
s.sn(0,s.b)},
yi(a){var s,r
if(a instanceof A.dU){s=this.at
s.toString
r=a.at.x
r===$&&A.b()
s.sn(0,r)}this.ON(a)},
k6(a){this.ch=a
this.at.fR(0)
this.O7(a)
return!0},
lG(a){this.H2(a)
this.OL(a)},
o5(a){this.H2(a)
this.OI(a)},
H2(a){var s,r,q,p,o,n,m,l=this,k={},j=l.CW
l.CW=null
if(a instanceof A.dU&&l.HG(a)&&!0){s=l.ax.c
if(s!=null){r=s instanceof A.mQ?s.a:s
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
if(p)l.ln(q,o)
else{k.a=null
p=new A.a8t(l,q,a)
l.CW=new A.a8r(k,q,p)
q.br()
n=q.aU$
n.b=!0
n.a.push(p)
m=A.aik(r,q,new A.a8s(k,l,a))
k.a=m
l.ln(m,o)}}else l.ln(a.as,a.y.a)}else l.YB(B.ce)
if(j!=null)j.$0()},
ln(a,b){this.ax.saJ(0,a)
if(b!=null)b.aZ(new A.a8q(this,a),t.P)},
YB(a){return this.ln(a,null)},
m(){var s=this,r=s.as
if(r!=null)r.bV(s.gEx())
r=s.z
if(r!=null){r.a.$0()
r.a=null}s.z=null
r=s.at
if(r!=null)r.m()
s.y.cb(0,s.ch)
s.O8()},
glD(){return"TransitionRoute"},
i(a){return"TransitionRoute(animation: "+A.h(this.at)+")"}}
A.a8t.prototype={
$1(a){var s,r
switch(a.a){case 3:case 0:s=this.a
s.ln(this.b,this.c.y.a)
r=s.CW
if(r!=null){r.$0()
s.CW=null}break
case 1:case 2:break}},
$S:3}
A.a8r.prototype={
$0(){this.b.bV(this.c)
var s=this.a.a
if(s!=null)s.m()},
$S:0}
A.a8s.prototype={
$0(){var s,r=this.b
r.ln(this.a.a.a,this.c.y.a)
s=r.CW
if(s!=null){s.$0()
r.CW=null}},
$S:0}
A.a8q.prototype={
$1(a){var s=this.a.ax,r=this.b
if(s.c==r){s.saJ(0,B.ce)
if(r instanceof A.mQ)r.m()}},
$S:6}
A.Fm.prototype={
gLu(){var s=this.kd$
return s!=null&&s.length!==0}}
A.Mq.prototype={
ie(a,b){A.a0y(this.e,t.z).gxH()
return!1},
d_(a){return A.ahN(this.e).K5()}}
A.yg.prototype={
bX(a){var s=this
return s.f!==a.f||s.r!==a.r||s.w!==a.w||s.x!==a.x}}
A.qm.prototype={
af(){return new A.nb(A.aho(!0,B.a_1.i(0)+" Focus Scope",!1),A.ai1(),B.m,this.$ti.h("nb<1>"))}}
A.nb.prototype={
az(){var s,r,q=this
q.aN()
s=A.a([],t.ro)
r=q.a.c.fy
if(r!=null)s.push(r)
r=q.a.c.go
if(r!=null)s.push(r)
q.e=new A.ye(s)
if(q.a.c.gkk()){q.a.c.a.a.toString
s=!0}else s=!1
if(s){s=q.a.c.a.x.gdu()
if(s!=null)s.mG(q.f)}},
aS(a){var s,r=this
r.bf(a)
if(r.a.c.gkk()){r.a.c.a.a.toString
s=!0}else s=!1
if(s){s=r.a.c.a.x.gdu()
if(s!=null)s.mG(r.f)}},
b4(){this.cu()
this.d=null},
Td(){this.au(new A.ac6(this))},
m(){this.f.m()
this.aL()},
gGb(){var s=this.a.c.fy
if((s==null?null:s.gb0(s))!==B.ak){s=this.a.c.a
s=s==null?null:s.CW.a
s=s===!0}else s=!0
return s},
L(a){var s,r,q=this,p=null,o=q.a.c,n=o.gkk(),m=q.a.c
if(!m.gt8()){m=m.kd$
m=m!=null&&m.length!==0}else m=!0
s=q.a.c
s=s.gt8()||s.yB$>0
r=q.a.c
return A.jD(o.c,new A.aca(q),new A.yg(n,m,s,o,new A.v7(r.fx,new A.oM(new A.hn(new A.acb(q),p),r.k3,p),p),p))}}
A.ac6.prototype={
$0(){this.a.d=null},
$S:0}
A.aca.prototype={
$2(a,b){var s=this.a.a.c.c.a
b.toString
return new A.ko(b,s,null)},
$S:325}
A.acb.prototype={
$1(a){var s,r=null,q=A.aV([B.C8,new A.Mq(a,new A.bh(A.a([],t.B8),t.dc))],t.n,t.nT),p=this.a,o=p.e
o===$&&A.b()
s=p.d
if(s==null)s=p.d=new A.h0(new A.hn(new A.ac8(p),r),p.a.c.k2)
return A.SS(q,new A.oR(p.r,B.ca,B.UI,A.akS(!1,new A.h0(A.jD(o,new A.ac9(p),s),r),r,r,p.f),r))},
$S:326}
A.ac9.prototype={
$2(a,b){var s,r,q=this.a,p=q.a.c,o=p.fy
o.toString
s=p.go
s.toString
r=p.a
r=r==null?null:r.CW
if(r==null)r=A.jd(!1)
return p.HE(a,o,s,A.jD(r,new A.ac7(q),b))},
$S:25}
A.ac7.prototype={
$2(a,b){var s=this.a,r=s.gGb()
s.f.scj(!r)
return new A.hB(r,null,b,null)},
$S:327}
A.ac8.prototype={
$1(a){var s,r=this.a.a.c,q=r.fy
q.toString
s=r.go
s.toString
return r.a_y(a,q,s)},
$S:12}
A.ka.prototype={
au(a){var s,r=this.k1
if(r.gbm()!=null){r=r.gbm()
if(r.a.c.gkk())if(!r.gGb()){r.a.c.a.a.toString
s=!0}else s=!1
else s=!1
if(s){s=r.a.c.a.x.gdu()
if(s!=null)s.mG(r.f)}r.au(a)}else a.$0()},
HE(a,b,c,d){return d},
je(){var s=this
s.Pc()
s.fy=A.Iv(A.dU.prototype.gbF.call(s,s))
s.go=A.Iv(A.dU.prototype.gBn.call(s))},
o6(){var s,r=this,q=r.k1
if(q.gbm()!=null){r.a.a.toString
s=!0}else s=!1
if(s){s=r.a.x.gdu()
if(s!=null)s.mG(q.gbm().f)}return r.Pb()},
o4(){var s,r=this,q=r.k1
if(q.gbm()!=null){r.a.a.toString
s=!0}else s=!1
if(s){s=r.a.x.gdu()
if(s!=null)s.mG(q.gbm().f)}r.P9()},
stw(a){var s,r=this
if(r.fx===a)return
r.au(new A.a0z(r,a))
s=r.fy
s.toString
s.saJ(0,r.fx?B.d_:A.dU.prototype.gbF.call(r,r))
s=r.go
s.toString
s.saJ(0,r.fx?B.ce:A.dU.prototype.gBn.call(r))
r.nP()},
fg(){var s=0,r=A.a4(t.ij),q,p=this,o,n,m,l
var $async$fg=A.a0(function(a,b){if(a===1)return A.a1(b,r)
while(true)switch(s){case 0:p.k1.gbm()
o=A.aA(p.id,!0,t.CQ),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}l=J
s=6
return A.a5(o[m].$0(),$async$fg)
case 6:if(!l.f(b,!0)){q=B.TM
s=1
break}case 4:++m
s=3
break
case 5:q=p.Pl()
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$fg,r)},
yd(a){this.OJ(a)
this.nP()},
nP(){var s,r=this
r.OG()
r.au(new A.a0x())
s=r.k4
s===$&&A.b()
s.fN()
s=r.p1
s===$&&A.b()
r.goN()
s.soN(!0)},
rb(){this.OF()
var s=this.k4
s===$&&A.b()
s.fN()
s=this.k1
if(s.gbm()!=null)s.gbm().Td()},
Rp(a){var s,r,q=this,p=null
q.ga_p()
q.gxH()
s=q.ga_q()
r=q.fy
if(r.gb0(r)!==B.ak){r=q.fy
r=r.gb0(r)===B.K}else r=!0
q.gxH()
return new A.hB(r,p,new A.uN(p,!1,p,!0,s,p),p)},
Rr(a){var s=this,r=null,q=s.ok
return q==null?s.ok=A.dC(r,new A.qm(s,s.k1,A.m(s).h("qm<1>")),!1,r,!1,r,r,r,r,r,r,r,r,r,r,r,B.Tl,r,r,r,r):q},
i(a){return"ModalRoute("+this.b.i(0)+", animation: "+A.h(this.as)+")"}}
A.a0z.prototype={
$0(){this.a.fx=this.b},
$S:0}
A.a0x.prototype={
$0(){},
$S:0}
A.ql.prototype={
fg(){var s=0,r=A.a4(t.ij),q,p=this,o
var $async$fg=A.a0(function(a,b){if(a===1)return A.a1(b,r)
while(true)switch(s){case 0:o=p.kd$
if(o!=null&&o.length!==0){q=B.B8
s=1
break}q=p.OQ()
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$fg,r)},
k6(a){var s,r,q=this,p=q.kd$
if(p!=null&&p.length!==0){s=p.pop()
s.b=null
s.a6h()
r=s.c&&--q.yB$===0
if(q.kd$.length===0||r)q.nP()
return!1}q.Pa(a)
return!0}}
A.Ju.prototype={
L(a){var s,r,q,p=t.l,o=a.a3(p).f.f,n=Math.max(o.a,0),m=this.d,l=m?o.b:0
l=Math.max(l,0)
s=Math.max(o.c,0)
r=this.f
q=r?o.d:0
return new A.hN(new A.bm(n,l,s,Math.max(q,0)),new A.f6(a.a3(p).f.KO(r,!0,!0,m),this.x,null),null)}}
A.Jy.prototype={
KU(){},
In(a,b){if(b!=null)b.cT(new A.w8(null,a,b,0))},
Io(a,b,c){b.cT(A.ai2(b,null,null,a,c))},
rB(a,b,c){b.cT(new A.hM(null,c,0,a,b,0))},
Im(a,b){b.cT(new A.j3(null,a,b,0))},
nG(){},
m(){},
i(a){return"<optimized out>#"+A.bK(this)}}
A.jY.prototype={
nG(){this.a.fi(0)},
ghM(){return!1},
gfL(){return!1},
gdW(){return 0}}
A.Zn.prototype={
ghM(){return!1},
gfL(){return!1},
gdW(){return 0},
m(){this.b.$0()
this.pN()}}
A.a4m.prototype={
R6(a,b){var s,r,q=this
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
else return Math.min(r/3,s)*J.ed(a)}else return 0}}},
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
p=o.R6(s,q)
if(p===0)return
s=o.a
if(A.afC(s.w.a.c))p=-p
s.AK(p>0?B.lq:B.lr)
r=s.at
r.toString
s.uQ(r-s.r.xD(s,p))},
m(){this.x=null
this.b.$0()},
i(a){return"<optimized out>#"+A.bK(this)}}
A.X5.prototype={
In(a,b){var s=t.o5.a(this.b.x)
if(b!=null)b.cT(new A.w8(s,a,b,0))},
Io(a,b,c){b.cT(A.ai2(b,null,t.mF.a(this.b.x),a,c))},
rB(a,b,c){b.cT(new A.hM(t.mF.a(this.b.x),c,0,a,b,0))},
Im(a,b){var s=this.b.x
b.cT(new A.j3(s instanceof A.fL?s:null,a,b,0))},
ghM(){var s=this.b
return(s==null?null:s.w)!==B.dK},
gfL(){return!0},
gdW(){return 0},
m(){this.b=null
this.pN()},
i(a){return"<optimized out>#"+A.bK(this)+"("+A.h(this.b)+")"}}
A.AG.prototype={
KU(){var s=this.a,r=this.b
r===$&&A.b()
s.fi(r.gdW())},
nG(){var s=this.a,r=this.b
r===$&&A.b()
s.fi(r.gdW())},
x3(){var s=this.b
s===$&&A.b()
s=s.x
s===$&&A.b()
if(!(Math.abs(this.a.uQ(s))<1e-10)){s=this.a
s.f_(new A.jY(s))}},
wR(){this.a.fi(0)},
rB(a,b,c){var s=this.b
s===$&&A.b()
b.cT(new A.hM(null,c,s.gdW(),a,b,0))},
gfL(){return!0},
gdW(){var s=this.b
s===$&&A.b()
return s.gdW()},
m(){var s=this.b
s===$&&A.b()
s.m()
this.pN()},
i(a){var s=A.bK(this),r=this.b
r===$&&A.b()
return"<optimized out>#"+s+"("+r.i(0)+")"},
ghM(){return this.c}}
A.DV.prototype={
x3(){var s=this.a,r=this.c
r===$&&A.b()
r=r.x
r===$&&A.b()
if(s.uQ(r)!==0){s=this.a
s.f_(new A.jY(s))}},
wR(){var s=this.a,r=this.c
r===$&&A.b()
s.fi(r.gdW())},
rB(a,b,c){var s=this.c
s===$&&A.b()
b.cT(new A.hM(null,c,s.gdW(),a,b,0))},
ghM(){return!0},
gfL(){return!0},
gdW(){var s=this.c
s===$&&A.b()
return s.gdW()},
m(){var s=this.b
s===$&&A.b()
s.ey(0)
s=this.c
s===$&&A.b()
s.m()
this.pN()},
i(a){var s=A.bK(this),r=this.c
r===$&&A.b()
return"<optimized out>#"+s+"("+r.i(0)+")"}}
A.w2.prototype={
p8(a,b,c,d){var s,r=this
if(b.a==null){s=$.eK.fG$
s===$&&A.b()
s=s.T(0,c)}else s=!0
if(s){r.b.p8(a,b,c,d)
return}s=r.a
if(s.gaP(s)==null)return
s=s.gaP(s)
s.toString
if(A.awj(s)){$.bM.pA(new A.a4i(r,a,b,c,d))
return}r.b.p8(a,b,c,d)},
oJ(a,b,c){return this.b.oJ(0,b,c)},
oK(a,b){return this.b.oK(a,b)},
tv(a){return this.b.tv(a)}}
A.a4i.prototype={
$1(a){var s=this
A.dG(new A.a4h(s.a,s.b,s.c,s.d,s.e))},
$S:2}
A.a4h.prototype={
$0(){var s=this
return s.a.p8(s.b,s.c,s.d,s.e)},
$S:0}
A.qZ.prototype={
F(){return"AndroidOverscrollIndicator."+this.b}}
A.Jz.prototype={
I3(a,b,c,d,e,f){return new A.aej(this,f,c!==!1,d,e,b,a)},
a0z(a){return this.I3(null,null,null,null,null,a)},
a0H(a,b,c){return this.I3(null,a,b,null,null,c)},
jz(a){return A.l1()},
gyq(){return B.Bt},
r8(a,b,c){var s=null
switch(this.jz(a)){case B.bj:case B.ba:case B.bk:return A.avX(b,c.b,B.ci,s,s,A.Af(),B.t,s,s,s,s,B.d6,s)
case B.aA:case B.bi:case B.aB:return b}},
r6(a,b,c){var s
switch(this.jz(a)){case B.aB:case B.bj:case B.ba:case B.bk:s=1
break
case B.aA:s=2
break
case B.bi:s=3
break
default:s=null
break}if(s)c$0:for(;!0;)switch(s){case 1:return b
case 2:switch(1){case 1:break}if(2)c$1:for(;!0;)switch(2){case 1:return new A.ps(c.a,B.Q,b,null)
case 2:s=3
continue c$0}break c$0
case 3:return new A.of(c.a,B.l,b,null)}},
u2(a){switch(this.jz(a)){case B.aB:return new A.a4j()
case B.ba:return new A.a4k()
case B.aA:case B.bi:case B.bj:case B.bk:return new A.a4l()}},
jA(a){switch(this.jz(a)){case B.aB:return B.CV
case B.ba:return B.CW
case B.aA:case B.bi:case B.bj:case B.bk:return B.Eu}},
i(a){return"ScrollBehavior"}}
A.a4j.prototype={
$1(a){return A.au3(a.gc9(a))},
$S:328}
A.a4k.prototype={
$1(a){var s=a.gc9(a),r=t.pa
return new A.oB(A.b_(20,null,!1,r),s,A.b_(20,null,!1,r))},
$S:329}
A.a4l.prototype={
$1(a){return new A.h7(a.gc9(a),A.b_(20,null,!1,t.pa))},
$S:114}
A.aej.prototype={
gyq(){var s=this.f
return s==null?B.Bt:s},
r6(a,b,c){if(this.c)return this.a.r6(a,b,c)
return b},
r8(a,b,c){if(this.b)return this.a.r8(a,b,c)
return b},
jA(a){var s=this.a.jA(a)
return s},
u2(a){return this.a.u2(a)},
i(a){return"_WrappedScrollBehavior"}}
A.w3.prototype={
bX(a){var s
if(A.B(this.f)===A.B(a.f))s=!1
else s=!0
return s}}
A.p9.prototype={
he(a,b,c){return this.a_i(a,b,c)},
a_i(a,b,c){var s=0,r=A.a4(t.H),q=this,p,o,n
var $async$he=A.a0(function(d,e){if(d===1)return A.a1(e,r)
while(true)switch(s){case 0:n=A.a([],t.iJ)
for(p=q.d,o=0;o<p.length;++o)n.push(p[o].he(a,b,c))
s=2
return A.a5(A.tL(n,t.H),$async$he)
case 2:return A.a2(null,r)}})
return A.a3($async$he,r)},
ap(a){this.d.push(a)
a.S(0,this.gec())},
o2(a,b){b.H(0,this.gec())
B.b.v(this.d,b)},
m(){var s,r,q,p
for(s=this.d,r=s.length,q=this.gec(),p=0;p<s.length;s.length===r||(0,A.Q)(s),++p)s[p].H(0,q)
this.dF()},
I5(a,b,c){return A.awi(b,null,0,!0,c,a)},
i(a){var s=A.a([],t.s),r=this.d,q=r.length
if(q===0)s.push("no clients")
else if(q===1){r=B.b.gb5(r).at
r.toString
s.push("one client, offset "+B.d.N(r,1))}else s.push(""+q+" clients")
return"<optimized out>#"+A.bK(this)+"("+B.b.ba(s,", ")+")"}}
A.h2.prototype={
fA(){var s=this,r=null,q=s.gyW()?s.geJ():r,p=s.gyW()?s.geI():r,o=s.gJi()?s.gca():r,n=s.gJk()?s.gpm():r,m=s.gfw()
return new A.tz(q,p,o,n,m)},
gA_(){var s=this
return s.gca()<s.geJ()||s.gca()>s.geI()},
gHx(){var s=this
return s.gca()===s.geJ()||s.gca()===s.geI()},
gkc(){var s=this
return s.gpm()-A.F(s.geJ()-s.gca(),0,s.gpm())-A.F(s.gca()-s.geI(),0,s.gpm())}}
A.tz.prototype={
geJ(){var s=this.a
s.toString
return s},
geI(){var s=this.b
s.toString
return s},
gyW(){return this.a!=null&&this.b!=null},
gca(){var s=this.c
s.toString
return s},
gJi(){return this.c!=null},
gpm(){var s=this.d
s.toString
return s},
gJk(){return this.d!=null},
i(a){var s=this
return"FixedScrollMetrics("+B.d.N(Math.max(s.gca()-s.geJ(),0),1)+"..["+B.d.N(s.gkc(),1)+"].."+B.d.N(Math.max(s.geI()-s.gca(),0),1)+")"},
gfw(){return this.e}}
A.ML.prototype={}
A.e5.prototype={}
A.KY.prototype={
Kj(a){if(t.bx.b(a))++a.bx$
return!1}}
A.dP.prototype={
cc(a){this.PX(a)
a.push(this.a.i(0))}}
A.w8.prototype={
cc(a){var s
this.mU(a)
s=this.d
if(s!=null)a.push(s.i(0))}}
A.fi.prototype={
cc(a){var s
this.mU(a)
a.push("scrollDelta: "+A.h(this.e))
s=this.d
if(s!=null)a.push(s.i(0))},
gIr(){return this.d}}
A.hM.prototype={
cc(a){var s,r=this
r.mU(a)
a.push("overscroll: "+B.d.N(r.e,1))
a.push("velocity: "+B.d.N(r.f,1))
s=r.d
if(s!=null)a.push(s.i(0))}}
A.j3.prototype={
cc(a){var s
this.mU(a)
s=this.d
if(s!=null)a.push(s.i(0))},
gIr(){return this.d}}
A.KS.prototype={
cc(a){this.mU(a)
a.push("direction: "+this.d.i(0))}}
A.yU.prototype={
cc(a){var s,r
this.uH(a)
s=this.bx$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.yT.prototype={
bX(a){return this.f!==a.f}}
A.kL.prototype={
a3O(a,b){return this.d.$1(b)}}
A.w6.prototype={
af(){return new A.w7(new A.uf(t.uk),B.m)}}
A.w7.prototype={
H(a,b){var s,r,q,p=this.d
p.toString
p=A.axE(p)
s=A.m(p).c
for(;p.q();){r=p.c
if(r==null)r=s.a(r)
if(J.f(r.d,b)){p=r.a
p.toString
A.m(r).h("m1.E").a(r);++p.a
s=r.b
s.c=r.c
r.c.b=s
q=--p.b
r.a=r.b=r.c=null
if(q===0)p.c=null
else if(r===p.c)p.c=s
return}}},
Fa(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.d
if(i.b===0)return
p=A.aA(i,!0,t.cS)
for(i=p.length,o=0;o<i;++o){s=p[o]
try{if(s.a!=null)J.arw(s,a)}catch(n){r=A.ag(n)
q=A.ay(n)
m=j instanceof A.bR?A.cY(j):null
l=A.bi("while dispatching notifications for "+A.aD(m==null?A.aS(j):m).i(0))
k=$.fA()
if(k!=null)k.$1(new A.bx(r,q,"widget library",l,new A.a4n(j),!1))}}},
L(a){var s=this
return new A.cF(new A.a4o(s),new A.cF(new A.a4p(s),new A.yT(s,s.a.c,null),null,t.Bf),null,t.iY)},
m(){this.d=null
this.aL()}}
A.a4n.prototype={
$0(){var s=null,r=this.a
return A.a([A.hr("The "+A.B(r).i(0)+" sending notification was",r,!0,B.aJ,s,!1,s,s,B.aq,s,!1,!0,!0,B.aX,s,t.Ec)],t.F)},
$S:16}
A.a4o.prototype={
$1(a){var s=new A.LO(null,null,a.a,a.b,0)
s.bx$=a.bx$
this.a.Fa(s)
return!1},
$S:70}
A.a4p.prototype={
$1(a){this.a.Fa(a)
return!1},
$S:24}
A.LO.prototype={}
A.w4.prototype={
F(){return"ScrollDecelerationRate."+this.b}}
A.mu.prototype={
hg(a){var s=this.a
s=s==null?null:s.jX(a)
return s==null?a:s},
jX(a){return new A.mu(this.hg(a))},
xD(a,b){var s=this.a
if(s==null)return b
return s.xD(a,b)},
jD(a){var s,r=this.a
if(r==null){r=a.at
r.toString
if(r===0){r=a.z
r.toString
s=a.Q
s.toString
s=r!==s
r=s}else r=!0
return r}return r.jD(a)},
KI(a,b,c){var s=this.a
if(s==null){$.ak.toString
s=$.ce().gku()
return Math.abs(a)>Math.max(Math.abs(s.a),Math.abs(s.b))}return s.KI(a,b,c)},
nE(a,b){var s=this.a
if(s==null)return 0
return s.nE(a,b)},
qY(a,b,c,d){var s=this.a
if(s==null){s=b.c
s.toString
return s}return s.qY(a,b,c,d)},
lC(a,b){var s=this.a
if(s==null)return null
return s.lC(a,b)},
gkN(){var s=this.a
s=s==null?null:s.gkN()
return s==null?$.apJ():s},
gpd(){var s=this.a
s=s==null?null:s.gpd()
return s==null?$.apK():s},
gzq(){var s=this.a
s=s==null?null:s.gzq()
return s==null?18:s},
gtr(){var s=this.a
s=s==null?null:s.gtr()
return s==null?50:s},
goO(){var s=this.a
s=s==null?null:s.goO()
return s==null?8000:s},
xN(a){var s=this.a
if(s==null)return 0
return s.xN(a)},
gyr(){var s=this.a
return s==null?null:s.gyr()},
glv(){return!0},
i(a){var s=this.a
if(s==null)return"ScrollPhysics"
return"ScrollPhysics -> "+s.i(0)}}
A.Iz.prototype={
jX(a){return new A.Iz(this.hg(a))},
qY(a,b,c,d){var s,r,q,p,o,n,m,l
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
return p+(o-q)}}l=this.OT(a,b,c,d)
if(r){q=b.b
q.toString
l=A.F(l,p,q)}return l}}
A.rm.prototype={
jX(a){return new A.rm(this.b,this.hg(a))},
J5(a){switch(this.b.a){case 1:return 0.07*Math.pow(1-a,2)
case 0:return 0.52*Math.pow(1-a,2)}},
xD(a,b){var s,r,q,p,o,n,m
if(!a.gA_())return b
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
m=this.J5((o-Math.abs(b))/s)}else{s.toString
m=this.J5(o/s)}return J.ed(b)*A.as4(o,Math.abs(b),m)},
nE(a,b){return 0},
lC(a,b){var s,r,q,p,o,n,m,l=this.gpd()
if(Math.abs(b)>=l.c||a.gA_()){switch(this.b.a){case 1:s=1400
break
case 0:s=0
break
default:s=null}r=this.gkN()
q=a.at
q.toString
p=a.z
p.toString
o=a.Q
o.toString
n=new A.Tx(p,o,r,l)
if(q<p){n.f=new A.kq(p,A.z9(r,q-p,b),B.bH)
n.r=-1/0}else if(q>o){n.f=new A.kq(o,A.z9(r,q-o,b),B.bH)
n.r=-1/0}else{q=n.e=A.atT(0.135,q,b,s)
m=q.grR()
if(b>0&&m>o){p=q.L9(o)
n.r=p
n.f=new A.kq(o,A.z9(r,o-o,Math.min(q.dt(0,p),5000)),B.bH)}else if(b<0&&m<p){o=q.L9(p)
n.r=o
n.f=new A.kq(p,A.z9(r,p-p,Math.min(q.dt(0,o),5000)),B.bH)}el