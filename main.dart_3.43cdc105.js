return!1
return b instanceof A.dG&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c.k(0,s.c)&&b.d.k(0,s.d)},
gv(a){var s=this
return A.V(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r=A.a([],t.s),q=s.a
if(!q.k(0,B.H))r.push("top: "+q.i(0))
q=s.b
if(!q.k(0,B.H))r.push("start: "+q.i(0))
q=s.c
if(!q.k(0,B.H))r.push("end: "+q.i(0))
q=s.d
if(!q.k(0,B.H))r.push("bottom: "+q.i(0))
return"BorderDirectional("+B.b.bf(r,", ")+")"}}
A.ca.prototype={
gdi(a){var s=this.c
return s==null?null:s.glK()},
uf(a,b){var s,r,q
switch(this.w.a){case 1:s=A.oV(a.gaV(),a.gfi()/2)
r=$.as().cm()
r.xw(s)
return r
case 0:r=this.d
if(r!=null){q=$.as().cm()
q.ew(r.W(b).dk(a))
return q}r=$.as().cm()
r.nG(a)
return r}},
aI(a,b){var s=this,r=null,q=A.w(r,s.a,b),p=A.ajT(r,s.c,b),o=A.hj(r,s.d,b),n=A.ajW(r,s.e,b),m=s.f
m=m==null?r:m.aI(0,b)
return new A.ca(q,s.b,p,o,n,m,s.w)},
gza(){return this.e!=null},
c4(a,b){if(a==null)return this.aI(0,b)
if(a instanceof A.ca)return A.ajU(a,this,b)
return this.C_(a,b)},
c5(a,b){if(a==null)return this.aI(0,1-b)
if(a instanceof A.ca)return A.ajU(this,a,b)
return this.C0(a,b)},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.T(b)!==A.C(r))return!1
if(b instanceof A.ca)if(J.f(b.a,r.a))if(J.f(b.b,r.b))if(J.f(b.c,r.c))if(J.f(b.d,r.d))if(A.cS(b.e,r.e))if(J.f(b.f,r.f))s=b.w===r.w
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gv(a){var s=this,r=s.e
r=r==null?null:A.d8(r)
return A.V(s.a,s.b,s.c,s.d,r,s.f,null,s.w,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
Jk(a,b,c){var s
switch(this.w.a){case 0:s=this.d
if(s!=null)return s.W(c).dk(new A.A(0,0,0+a.a,0+a.b)).C(0,b)
return!0
case 1:return b.aa(0,a.iP(B.k)).gcT()<=Math.min(a.a,a.b)/2}},
rp(a){return new A.a9i(this,a)}}
A.a9i.prototype={
Fd(a,b,c,d){var s=this.b
switch(s.w.a){case 1:a.i0(b.gaV(),b.gfi()/2,c)
break
case 0:s=s.d
if(s==null||s.k(0,B.aF))a.cc(b,c)
else a.cU(s.W(d).dk(b),c)
break}},
X5(a,b,c){var s,r,q,p,o,n,m=this.b.e
if(m==null)return
for(s=m.length,r=0;r<m.length;m.length===s||(0,A.Q)(m),++r){q=m[r]
p=$.as().bj()
p.sau(0,q.a)
o=q.e
n=q.c
p.sa3Z(new A.ug(o,n>0?n*0.57735+0.5:0))
o=b.d4(q.b)
n=q.d
this.Fd(a,new A.A(o.a-n,o.b-n,o.c+n,o.d+n),p,c)}},
X1(a,b,c){var s,r,q=this,p=q.b,o=p.b
if(o==null)return
if(q.e==null)q.e=new A.D5(o,q.a)
switch(p.w.a){case 1:s=A.oV(b.gaV(),b.gfi()/2)
r=$.as().cm()
r.xw(s)
break
case 0:p=p.d
if(p!=null){r=$.as().cm()
r.ew(p.W(c.d).dk(b))}else r=null
break
default:r=null}q.e.tK(a,b,r,c)},
m(){var s,r=this.e
if(r!=null){s=r.c
if(s!=null)s.H(0,new A.e0(r.gEr(),null,null))
s=r.d
if(s!=null)s.a.m()
r.d=null}this.N3()},
p0(a,b,c){var s,r,q=this,p=c.e,o=b.a,n=b.b,m=new A.A(o,n,o+p.a,n+p.b),l=c.d
q.X5(a,m,l)
p=q.b
o=p.a
n=o==null
if(!n||p.f!=null){if(q.c!=null)s=p.f!=null&&!J.f(q.d,m)
else s=!0
if(s){r=$.as().bj()
if(!n)r.sau(0,o)
o=p.f
if(o!=null){r.sBD(o.I5(0,m,l))
q.d=m}q.c=r}o=q.c
o.toString
q.Fd(a,m,o,l)}q.X1(a,m,c)
o=p.c
if(o!=null){n=p.d
n=n==null?null:n.W(l)
o.tL(a,m,n,p.w,l)}},
i(a){return"BoxPainter for "+this.b.i(0)}}
A.li.prototype={
F(){return"BoxFit."+this.b}}
A.Ec.prototype={}
A.iw.prototype={
aI(a,b){var s=this
return new A.iw(s.d*b,s.e,s.a,s.b.a0(0,b),s.c*b)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.T(b)!==A.C(s))return!1
return b instanceof A.iw&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c===s.c&&b.d===s.d&&b.e===s.e},
gv(a){var s=this
return A.V(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this
return"BoxShadow("+s.a.i(0)+", "+s.b.i(0)+", "+A.he(s.c)+", "+A.he(s.d)+", "+s.e.i(0)+")"}}
A.dl.prototype={
aI(a,b){return new A.dl(this.b,this.a.aI(0,b))},
c4(a,b){var s,r
if(a instanceof A.dl){s=A.az(a.a,this.a,b)
r=A.S(a.b,this.b,b)
r.toString
return new A.dl(A.H(r,0,1),s)}return this.kY(a,b)},
c5(a,b){var s,r
if(a instanceof A.dl){s=A.az(this.a,a.a,b)
r=A.S(this.b,a.b,b)
r.toString
return new A.dl(A.H(r,0,1),s)}return this.kZ(a,b)},
ff(a,b){var s=$.as().cm()
s.xw(this.CS(a))
return s},
hA(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=r.b*r.d
if(this.b===0)a.i0(b.gaV(),(b.gfi()+s)/2,r.hG())
else a.rM(this.CS(b).cY(s/2),r.hG())
break}},
CS(a){var s,r,q,p,o,n,m,l=this.b
if(l===0||a.c-a.a===a.d-a.b)return A.oV(a.gaV(),a.gfi()/2)
s=a.c
r=a.a
q=s-r
p=a.d
o=a.b
n=p-o
l=1-l
if(q<n){m=l*(n-q)/2
return new A.A(r,o+m,s,p-m)}else{m=l*(q-n)/2
return new A.A(r+m,o,s-m,p)}},
k(a,b){if(b==null)return!1
if(J.T(b)!==A.C(this))return!1
return b instanceof A.dl&&b.a.k(0,this.a)&&b.b===this.b},
gv(a){return A.V(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this.b
if(s!==0)return"CircleBorder("+this.a.i(0)+", eccentricity: "+A.h(s)+")"
return"CircleBorder("+this.a.i(0)+")"}}
A.Ul.prototype={
vh(a,b,c,d){var s=this
s.gbC(s).ct(0)
switch(b.a){case 0:break
case 1:a.$1(!1)
break
case 2:a.$1(!0)
break
case 3:a.$1(!0)
s.gbC(s).Bl(c,$.as().bj())
break}d.$0()
if(b===B.ho)s.gbC(s).cp(0)
s.gbC(s).cp(0)},
a_V(a,b,c,d){this.vh(new A.Um(this,a),b,c,d)},
a_W(a,b,c,d){this.vh(new A.Un(this,a),b,c,d)},
a_Y(a,b,c,d){this.vh(new A.Uo(this,a),b,c,d)}}
A.Um.prototype={
$1(a){var s=this.a
return s.gbC(s).HJ(0,this.b,a)},
$S:23}
A.Un.prototype={
$1(a){var s=this.a
return s.gbC(s).HK(this.b,a)},
$S:23}
A.Uo.prototype={
$1(a){var s=this.a
return s.gbC(s).a_X(this.b,a)},
$S:23}
A.jI.prototype={
j(a,b){return this.b.j(0,b)},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.T(b)!==A.C(s))return!1
return s.N4(0,b)&&A.n(s).h("jI<jI.T>").b(b)&&A.afR(b.b,s.b)},
gv(a){return A.V(A.C(this),this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"ColorSwatch(primary value: "+this.N5(0)+")"}}
A.fJ.prototype={
bW(){return"Decoration"},
gdi(a){return B.b2},
gza(){return!1},
c4(a,b){return null},
c5(a,b){return null},
Jk(a,b,c){return!0},
uf(a,b){throw A.c(A.N("This Decoration subclass does not expect to be used for clipping."))}}
A.AJ.prototype={
m(){}}
A.M4.prototype={}
A.lS.prototype={
F(){return"ImageRepeat."+this.b}}
A.D4.prototype={
k(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(J.T(b)!==A.C(this))return!1
if(b instanceof A.D4)if(b.a.k(0,this.a))if(B.Y.k(0,B.Y))s=!0
else s=!1
else s=!1
else s=!1
return s},
gv(a){return A.V(this.a,null,B.y,B.Y,null,B.bt,!1,1,1,B.d9,!1,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=A.a([this.a.i(0)],t.s),r=!0
if(r)s.push(B.y.i(0))
s.push(B.Y.i(0))
s.push("scale 1")
s.push("opacity 1")
s.push(B.d9.i(0))
return"DecorationImage("+B.b.bf(s,", ")+")"}}
A.D5.prototype={
tK(a,b,c,d){var s,r,q,p,o=this,n=null,m=o.a.a.W(d),l=m.a
if(l==null)l=m
s=o.c
r=s==null
if(r)q=n
else{q=s.a
if(q==null)q=s}if(l!==q){p=new A.e0(o.gEr(),n,n)
if(!r)s.H(0,p)
o.c=m
m.S(0,p)}if(o.d==null)return
l=c!=null
if(l){a.ct(0)
a.fw(0,c)}s=o.d
r=s.a
A.aoF(B.Y,a,n,n,s.c,B.d9,B.y,!1,r,!1,!1,1,b,B.bt,s.b)
if(l)a.cp(0)},
Ux(a,b){var s,r,q=this
if(J.f(q.d,a))return
s=q.d
if(s!=null)if(a.a.JH(s.a)){r=s.b
s=r===r&&a.c==s.c}else s=!1
else s=!1
if(s){a.a.m()
return}s=q.d
if(s!=null)s.a.m()
q.d=a
if(!b)q.b.$0()},
i(a){return"DecorationImagePainter(stream: "+A.h(this.c)+", image: "+A.h(this.d)+") for "+this.a.i(0)}}
A.d6.prototype={
gcg(){var s=this
return s.gd6(s)+s.gd7(s)+s.ge1(s)+s.ge2()},
a_f(a){var s=this
switch(a.a){case 0:return s.gcg()
case 1:return s.gb8(s)+s.gbb(s)}},
D(a,b){var s=this
return new A.kK(s.gd6(s)+b.gd6(b),s.gd7(s)+b.gd7(b),s.ge1(s)+b.ge1(b),s.ge2()+b.ge2(),s.gb8(s)+b.gb8(b),s.gbb(s)+b.gbb(b))},
hi(a,b,c){var s=this
return new A.kK(A.H(s.gd6(s),b.a,c.a),A.H(s.gd7(s),b.c,c.b),A.H(s.ge1(s),0,c.c),A.H(s.ge2(),0,c.d),A.H(s.gb8(s),b.b,c.e),A.H(s.gbb(s),b.d,c.f))},
i(a){var s=this
if(s.ge1(s)===0&&s.ge2()===0){if(s.gd6(s)===0&&s.gd7(s)===0&&s.gb8(s)===0&&s.gbb(s)===0)return"EdgeInsets.zero"
if(s.gd6(s)===s.gd7(s)&&s.gd7(s)===s.gb8(s)&&s.gb8(s)===s.gbb(s))return"EdgeInsets.all("+B.d.N(s.gd6(s),1)+")"
return"EdgeInsets("+B.d.N(s.gd6(s),1)+", "+B.d.N(s.gb8(s),1)+", "+B.d.N(s.gd7(s),1)+", "+B.d.N(s.gbb(s),1)+")"}if(s.gd6(s)===0&&s.gd7(s)===0)return"EdgeInsetsDirectional("+B.d.N(s.ge1(s),1)+", "+B.d.N(s.gb8(s),1)+", "+B.d.N(s.ge2(),1)+", "+B.d.N(s.gbb(s),1)+")"
return"EdgeInsets("+B.d.N(s.gd6(s),1)+", "+B.d.N(s.gb8(s),1)+", "+B.d.N(s.gd7(s),1)+", "+B.d.N(s.gbb(s),1)+") + EdgeInsetsDirectional("+B.d.N(s.ge1(s),1)+", 0.0, "+B.d.N(s.ge2(),1)+", 0.0)"},
k(a,b){var s=this
if(b==null)return!1
return b instanceof A.d6&&b.gd6(b)===s.gd6(s)&&b.gd7(b)===s.gd7(s)&&b.ge1(b)===s.ge1(s)&&b.ge2()===s.ge2()&&b.gb8(b)===s.gb8(s)&&b.gbb(b)===s.gbb(s)},
gv(a){var s=this
return A.V(s.gd6(s),s.gd7(s),s.ge1(s),s.ge2(),s.gb8(s),s.gbb(s),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.bo.prototype={
gd6(a){return this.a},
gb8(a){return this.b},
gd7(a){return this.c},
gbb(a){return this.d},
ge1(a){return 0},
ge2(){return 0},
yc(a){var s=this
return new A.A(a.a+s.a,a.b+s.b,a.c-s.c,a.d-s.d)},
D(a,b){if(b instanceof A.bo)return this.U(0,b)
return this.C1(0,b)},
hi(a,b,c){var s=this
return new A.bo(A.H(s.a,b.a,c.a),A.H(s.b,b.b,c.e),A.H(s.c,b.c,c.b),A.H(s.d,b.d,c.f))},
aa(a,b){var s=this
return new A.bo(s.a-b.a,s.b-b.b,s.c-b.c,s.d-b.d)},
U(a,b){var s=this
return new A.bo(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
a0(a,b){var s=this
return new A.bo(s.a*b,s.b*b,s.c*b,s.d*b)},
W(a){return this},
o_(a,b,c,d){var s=this,r=b==null?s.a:b,q=d==null?s.b:d,p=c==null?s.c:c
return new A.bo(r,q,p,a==null?s.d:a)},
xX(a){return this.o_(a,null,null,null)}}
A.al.prototype={
ge1(a){return this.a},
gb8(a){return this.b},
ge2(){return this.c},
gbb(a){return this.d},
gd6(a){return 0},
gd7(a){return 0},
D(a,b){if(b instanceof A.al)return this.U(0,b)
return this.C1(0,b)},
aa(a,b){var s=this
return new A.al(s.a-b.a,s.b-b.b,s.c-b.c,s.d-b.d)},
U(a,b){var s=this
return new A.al(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
a0(a,b){var s=this
return new A.al(s.a*b,s.b*b,s.c*b,s.d*b)},
W(a){var s=this
switch(a.a){case 0:return new A.bo(s.c,s.b,s.a,s.d)
case 1:return new A.bo(s.a,s.b,s.c,s.d)}}}
A.kK.prototype={
a0(a,b){var s=this
return new A.kK(s.a*b,s.b*b,s.c*b,s.d*b,s.e*b,s.f*b)},
W(a){var s=this
switch(a.a){case 0:return new A.bo(s.d+s.a,s.e,s.c+s.b,s.f)
case 1:return new A.bo(s.c+s.a,s.e,s.d+s.b,s.f)}},
gd6(a){return this.a},
gd7(a){return this.b},
ge1(a){return this.c},
ge2(){return this.d},
gb8(a){return this.e},
gbb(a){return this.f}}
A.a9t.prototype={}
A.afc.prototype={
$1(a){return a<=this.a},
$S:211}
A.aeP.prototype={
$1(a){var s=this,r=A.w(A.anI(s.a,s.b,a),A.anI(s.c,s.d,a),s.e)
r.toString
return r},
$S:212}
A.Z0.prototype={
wf(){var s,r,q,p=this.b
if(p!=null)return p
p=this.a.length
s=1/(p-1)
if(p>4294967295)A.X(A.bB(p,0,4294967295,"length",null))
r=J.lW(new Array(p),t.i)
for(q=0;q<p;++q)r[q]=q*s
return r}}
A.k5.prototype={
I5(a,b,c){var s=this,r=s.d.W(c).Ls(b),q=s.e.W(c).Ls(b),p=s.wf()
return A.ah5(r,q,s.a,p,s.f,null)},
a0U(a,b){return this.I5(a,b,null)},
aI(a,b){var s=this,r=s.a,q=A.ao(r).h("aI<1,F>")
return new A.k5(s.d,s.e,s.f,A.aA(new A.aI(r,new A.a_D(b),q),!0,q.h("bq.E")),s.b,null)},
c4(a,b){var s=A.akT(a,this,b)
return s},
c5(a,b){var s=A.akT(this,a,b)
return s},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.T(b)!==A.C(s))return!1
return b instanceof A.k5&&b.d.k(0,s.d)&&b.e.k(0,s.e)&&b.f===s.f&&A.cS(b.a,s.a)&&A.cS(b.b,s.b)},
gv(a){var s=this,r=A.d8(s.a),q=s.b
q=q==null?null:A.d8(q)
return A.V(s.d,s.e,s.f,s.c,r,q,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r=A.a(["begin: "+s.d.i(0),"end: "+s.e.i(0),"colors: "+A.h(s.a)],t.s),q=s.b
if(q!=null)r.push("stops: "+A.h(q))
r.push("tileMode: "+s.f.i(0))
return"LinearGradient("+B.b.bf(r,", ")+")"}}
A.a_D.prototype={
$1(a){var s=A.w(null,a,this.a)
s.toString
return s},
$S:66}
A.Zx.prototype={
X(a){var s,r,q,p
for(s=this.b,r=s.gb0(s),r=new A.e1(J.av(r.a),r.b),q=A.n(r).z[1];r.t();){p=r.a;(p==null?q.a(p):p).m()}s.X(0)
for(s=this.a,r=s.gb0(s),r=new A.e1(J.av(r.a),r.b),q=A.n(r).z[1];r.t();){p=r.a
if(p==null)p=q.a(p)
p.a.H(0,p.b)}s.X(0)
this.f=0},
lQ(a){var s,r,q,p=this,o=p.c.A(0,a)
if(o!=null){s=o.a
r=o.d
r===$&&A.b()
if(s.w)A.X(A.a6(u.V))
B.b.A(s.x,r)
o.Cw()}q=p.a.A(0,a)
if(q!=null){q.a.H(0,q.b)
return!0}o=p.b.A(0,a)
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
r.RE(c)}else b.m()},
x9(a,b,c){var s=this.c.bM(0,a,new A.ZA(this,b,a))
if(s.b==null)s.b=c},
KA(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g={}
g.a=g.b=null
q=i.a
p=q.j(0,b)
o=p==null?h:p.a
g.c=o
if(o!=null)return o
p=i.b
n=p.A(0,b)
if(n!=null){g=n.a
i.x9(b,g,n.b)
p.l(0,b,n)
return g}m=i.c.j(0,b)
if(m!=null){g=m.a
i.GD(b,new A.xk(g,m.b,g.mg()),h)
return g}try{o=g.c=c.$0()
i.x9(b,o,h)
p=o}catch(l){s=A.ag(l)
r=A.aB(l)
d.$2(s,r)
return h}g.d=!1
k=A.b5("pendingImage")
j=new A.e0(new A.ZB(g,i,b,!0,k),h,h)
k.b=new A.Oc(p,j)
q.l(0,b,k.aC())
g.c.S(0,j)
return g.c},
T(a,b){return this.a.j(0,b)!=null||this.b.j(0,b)!=null},
RE(a){var s,r,q,p,o,n=this,m=n.b,l=A.n(m).h("b9<1>")
while(!0){if(!(n.f>104857600||m.a>1000))break
s=new A.b9(m,l)
r=s.ga8(s)
if(!r.t())A.X(A.bR())
q=r.gG(r)
p=m.j(0,q)
s=n.f
o=p.b
o.toString
n.f=s-o
p.m()
m.A(0,q)}}}
A.ZA.prototype={
$0(){return A.ax6(this.b,new A.Zz(this.a,this.c))},
$S:213}
A.Zz.prototype={
$0(){this.a.c.A(0,this.b)},
$S:0}
A.ZB.prototype={
$2(a,b){var s,r,q,p,o,n=this
if(a!=null){s=a.a
r=s.gbL(s)*s.gbg(s)*4
s.m()}else r=null
s=n.a
q=s.c
p=new A.xk(q,r,q.mg())
q=n.b
o=n.c
q.x9(o,s.c,r)
if(n.d)q.GD(o,p,s.a)
else p.m()
q.a.A(0,o)
if(!s.d){q=n.e.aC()
q.a.H(0,q.b)}s.d=!0},
$S:214}
A.Lv.prototype={
m(){$.bO.ax$.push(new A.a9m(this))}}
A.a9m.prototype={
$1(a){var s=this.a,r=s.c
if(r!=null)r.m()
s.c=null},
$S:2}
A.xk.prototype={}
A.qf.prototype={
QM(a,b,c){var s=new A.abn(this,b)
this.d=s
if(a.w)A.X(A.a6(u.V))
a.x.push(s)},
i(a){return"<optimized out>#"+A.bL(this)}}
A.abn.prototype={
$0(){var s,r,q
this.b.$0()
s=this.a
r=s.a
q=s.d
q===$&&A.b()
if(r.w)A.X(A.a6(u.V))
B.b.A(r.x,q)
s.Cw()},
$S:0}
A.Oc.prototype={}
A.og.prototype={
k(a,b){var s=this
if(b==null)return!1
if(J.T(b)!==A.C(s))return!1
return b instanceof A.og&&b.a==s.a&&b.b==s.b&&J.f(b.c,s.c)&&b.d==s.d&&J.f(b.e,s.e)&&b.f==s.f},
gv(a){var s=this
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
A.e_.prototype={
W(a){var s=new A.ZN()
this.Sc(a,new A.ZL(this,a,s),new A.ZM(this,a,s))
return s},
Sc(a,b,c){var s,r,q,p,o,n={}
n.a=null
n.b=!1
s=new A.ZI(n,c)
r=null
try{r=this.tB(a)}catch(o){q=A.ag(o)
p=A.aB(o)
s.$2(q,p)
return}r.b5(new A.ZH(n,this,b,s),t.H).iO(s)},
pc(a,b,c,d){var s,r
if(b.a!=null){s=$.eJ.fF$
s===$&&A.b()
s.KA(0,c,new A.ZJ(b),d)
return}s=$.eJ.fF$
s===$&&A.b()
r=s.KA(0,c,new A.ZK(this,c),d)
if(r!=null)b.Bu(r)},
oO(a,b,c){throw A.c(A.N("Implement loadBuffer for faster image loading"))},
oP(a,b){return this.oO(0,a,$.eJ.ga3f())},
i(a){return"ImageConfiguration()"}}
A.ZL.prototype={
$2(a,b){this.a.pc(this.b,this.c,a,b)},
$S(){return A.n(this.a).h("~(e_.T,~(L,c_?))")}}
A.ZM.prototype={
$3(a,b,c){return this.LD(a,b,c)},
LD(a,b,c){var s=0,r=A.a4(t.H),q=this,p
var $async$$3=A.a0(function(d,e){if(d===1)return A.a1(e,r)
while(true)switch(s){case 0:s=2
return A.a5(null,$async$$3)
case 2:p=q.c
if(p.a==null)p.Bu(new A.aa_(A.a([],t.fE),A.a([],t.b)))
p=p.a
p.toString
p.kD(A.bk("while resolving an image"),b,null,!0,c)
return A.a2(null,r)}})
return A.a3($async$$3,r)},
$S(){return A.n(this.a).h("ah<~>(e_.T?,L,c_?)")}}
A.ZI.prototype={
LC(a,b){var s=0,r=A.a4(t.H),q,p=this,o
var $async$$2=A.a0(function(c,d){if(c===1)return A.a1(d,r)
while(true)switch(s){case 0:o=p.a
if(o.b){s=1
break}p.b.$3(o.a,a,b)
o.b=!0
case 1:return A.a2(q,r)}})
return A.a3($async$$2,r)},
$2(a,b){return this.LC(a,b)},
$S:215}
A.ZH.prototype={
$1(a){var s,r,q,p=this
p.a.a=a
try{p.c.$2(a,p.d)}catch(q){s=A.ag(q)
r=A.aB(q)
p.d.$2(s,r)}},
$S(){return A.n(this.b).h("aF(e_.T)")}}
A.ZJ.prototype={
$0(){var s=this.a.a
s.toString
return s},
$S:86}
A.ZK.prototype={
$0(){return this.a.oP(this.b,$.eJ.ga3i())},
$S:86}
A.hi.prototype={
k(a,b){var s=this
if(b==null)return!1
if(J.T(b)!==A.C(s))return!1
return b instanceof A.hi&&b.a===s.a&&b.b===s.b&&b.c===s.c},
gv(a){return A.V(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"AssetBundleImageKey(bundle: "+this.a.i(0)+', name: "'+this.b+'", scale: '+A.h(this.c)+")"}}
A.Aq.prototype={
oP(a,b){return A.al4(this.le(a,b,null),a.b,null,a.c)},
oO(a,b,c){return A.al4(this.le(b,null,c),b.b,null,b.c)},
le(a,b,c){return this.W0(a,b,c)},
W0(a,b,c){var s=0,r=A.a4(t.gP),q,p=2,o,n,m,l,k,j,i
var $async$le=A.a0(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:s=b!=null?3:4
break
case 3:n=null
p=6
s=9
return A.a5(a.a.tq(a.b),$async$le)
case 9:n=e
p=2
s=8
break
case 6:p=5
j=o
if(A.ag(j) instanceof A.jP){k=$.eJ.fF$
k===$&&A.b()
k.lQ(a)
throw j}else throw j
s=8
break
case 5:s=2
break
case 8:if(n==null){k=$.eJ.fF$
k===$&&A.b()
k.lQ(a)
throw A.c(A.a6("Unable to read data"))}q=b.$1(n)
s=1
break
case 4:m=null
p=11
s=14
return A.a5(a.a.cL(0,a.b),$async$le)
case 14:m=e
p=2
s=13
break
case 11:p=10
i=o
if(A.ag(i) instanceof A.jP){k=$.eJ.fF$
k===$&&A.b()
k.lQ(a)
throw i}else throw i
s=13
break
case 10:s=2
break
case 13:if(m==null){k=$.eJ.fF$
k===$&&A.b()
k.lQ(a)
throw A.c(A.a6("Unable to read data"))}c.toString
q=c.$1(A.cW(m.buffer,0,null))
s=1
break
case 1:return A.a2(q,r)
case 2:return A.a1(o,r)}})
return A.a3($async$le,r)}}
A.aa_.prototype={}
A.ny.prototype={
gmh(){return this.a},
tB(a){var s,r={},q=a.a
if(q==null)q=$.SB()
r.a=r.b=null
q.a3W("AssetManifest.d590eb61.json",A.aAo(),t.jd).b5(new A.T1(r,this,a,q),t.H).iO(new A.T2(r))
s=r.a
if(s!=null)return s
s=new A.a8($.aa,t.hv)
r.b=new A.b4(s,t.q8)
return s},
RP(a,b,c){var s,r,q,p=b.b
if(p==null||c==null||J.fB(c))return a
s=A.ahM(t.i,t.N)
for(r=J.av(c);r.t();){q=r.gG(r)
s.l(0,this.Fm(q),q)}p.toString
return this.T_(s,p)},
T_(a,b){var s,r,q
if(a.nc(b)){s=a.j(0,b)
s.toString
return s}r=a.a3I(b)
q=a.a1U(b)
if(r==null)return a.j(0,q)
if(q==null)return a.j(0,r)
if(b<2||b>(r+q)/2)return a.j(0,q)
else return a.j(0,r)},
Fm(a){var s,r,q,p
if(a===this.a)return 1
s=A.mR(a,0,null)
r=s.gjp().length>1?s.gjp()[s.gjp().length-2]:""
q=$.aoX().t0(r)
if(q!=null&&q.b.length-1>0){p=q.b[1]
p.toString
return A.aoa(p)}return 1},
k(a,b){if(b==null)return!1
if(J.T(b)!==A.C(this))return!1
return b instanceof A.ny&&b.gmh()===this.gmh()&&!0},
gv(a){return A.V(this.gmh(),this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"AssetImage(bundle: "+A.h(this.b)+', name: "'+this.gmh()+'")'}}
A.T1.prototype={
$1(a){var s,r=this,q=r.b,p=q.gmh(),o=a==null?null:J.aN(a,q.gmh())
o=q.RP(p,r.c,o)
o.toString
s=new A.hi(r.d,o,q.Fm(o))
q=r.a
p=q.b
if(p!=null)p.cj(0,s)
else q.a=new A.bn(s,t.rT)},
$S:217}
A.T2.prototype={
$2(a,b){this.a.b.hX(a,b)},
$S:38}
A.eG.prototype={
cI(a){return new A.eG(this.a.cI(0),this.b,this.c)},
i(a){var s=this.c
s=s!=null?s+" ":""
return s+this.a.i(0)+" @ "+A.he(this.b)+"x"},
gv(a){return A.V(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(J.T(b)!==A.C(s))return!1
return b instanceof A.eG&&b.a===s.a&&b.b===s.b&&b.c==s.c}}
A.e0.prototype={
gv(a){return A.V(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s=this
if(b==null)return!1
if(J.T(b)!==A.C(s))return!1
return b instanceof A.e0&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&J.f(b.c,s.c)},
a4k(a,b){return this.a.$2(a,b)}}
A.eF.prototype={}
A.ZN.prototype={
Bu(a){var s,r=this
r.a=a
s=r.b
if(s!=null){r.b=null
a.f=!0
B.b.Z(s,a.gnF(a))
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
A.ZO.prototype={
m(){var s=this.a;--s.r
s.qo()
this.a=null}}
A.lT.prototype={
S(a,b){var s,r,q,p,o,n,m,l=this
if(l.w)A.X(A.a6(u.V))
l.e=!0
l.a.push(b)
o=l.b
if(o!=null)try{o=o.cI(0)
n=l.f
b.a.$2(o,!n)}catch(m){s=A.ag(m)
r=A.aB(m)
l.KP(A.bk("by a synchronously-called image listener"),s,r)}o=l.c
if(o!=null&&b.c!=null)try{n=b.c
n.toString
n.$2(o.a,o.b)}catch(s){q=A.ag(s)
p=A.aB(s)
if(!J.f(q,l.c.a))A.dJ(new A.bz(q,p,"image resource service",A.bk("by a synchronously-called image error listener"),null,!1))}},
mg(){if(this.w)A.X(A.a6(u.V));++this.r
return new A.ZO(this)},
H(a,b){var s,r,q,p,o,n=this
if(n.w)A.X(A.a6(u.V))
for(s=n.a,r=0;r<s.length;++r)if(J.f(s[r],b)){B.b.fQ(s,r)
break}if(s.length===0){s=n.x
q=A.a(s.slice(0),A.ao(s))
for(p=q.length,o=0;o<q.length;q.length===p||(0,A.Q)(q),++o)q[o].$0()
B.b.X(s)
n.qo()}},
qo(){var s,r=this
if(!r.e||r.w||r.a.length!==0||r.r!==0)return
s=r.b
if(s!=null)s.a.m()
r.b=null
r.w=!0},
Bx(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.w)A.X(A.a6(u.V))
p=i.b
if(p!=null)p.a.m()
i.b=a
p=i.a
if(p.length===0)return
o=A.aA(p,!0,t.tg)
for(p=o.length,n=a.a,m=a.b,l=a.c,k=0;k<p;++k){s=o[k]
try{s.a4k(new A.eG(n.cI(0),m,l),!1)}catch(j){r=A.ag(j)
q=A.aB(j)
i.KP(A.bk("by an image listener"),r,q)}}},
kD(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i="image resource service"
this.c=new A.bz(b,e,i,a,c,d)
o=this.a
n=t.pE
m=A.aA(new A.de(new A.aI(o,new A.ZP(),A.ao(o).h("aI<1,~(L,c_?)?>")),n),!0,n.h("r.E"))
s=!1
for(o=m.length,l=0;l<o;++l){r=m[l]
try{r.$2(b,e)
s=!0}catch(k){q=A.ag(k)
p=A.aB(k)
if(!J.f(q,b)){n=A.bk("when reporting an error to an image listener")
j=$.fA()
if(j!=null)j.$1(new A.bz(q,p,i,n,null,!1))}}}if(!s){o=this.c
o.toString
A.dJ(o)}},
KP(a,b,c){return this.kD(a,b,null,!1,c)},
a5h(a){var s,r,q,p
if(this.w)A.X(A.a6(u.V))
s=this.a
if(s.length!==0){r=t.zG
q=A.aA(new A.de(new A.aI(s,new A.ZQ(),A.ao(s).h("aI<1,~(eF)?>")),r),!0,r.h("r.E"))
for(s=q.length,p=0;p<s;++p)q[p].$1(a)}}}
A.ZP.prototype={
$1(a){return a.c},
$S:219}
A.ZQ.prototype={
$1(a){return a.b},
$S:220}
A.Hh.prototype={
QC(a,b,c,d,e){this.d=c
b.ee(this.gTY(),new A.a0D(this,d),t.H)},
TZ(a){this.z=a
if(this.a.length!==0)this.l7()},
TQ(a){var s,r,q,p=this
p.cx=!1
if(p.a.length===0)return
s=p.ay
if(s!=null){r=p.ax
r===$&&A.b()
r=a.a-r.a>=s.a}else r=!0
if(r){s=p.at
p.DV(new A.eG(s.gf4(s).cI(0),p.Q,p.d))
p.ax=a
s=p.at
p.ay=s.gIv(s)
s=p.at
s.gf4(s).m()
p.at=null
q=B.f.h2(p.ch,p.z.gm6())
if(p.z.gu_()===-1||q<=p.z.gu_())p.l7()
return}s.toString
r=p.ax
r===$&&A.b()
p.CW=A.ch(new A.aP(B.d.b2((s.a-(a.a-r.a))*$.anP)),new A.a0C(p))},
l7(){var s=0,r=A.a4(t.H),q,p=2,o,n=this,m,l,k,j,i
var $async$l7=A.a0(function(a,b){if(a===1){o=b
s=p}while(true)switch(s){case 0:j=n.at
if(j!=null)j.gf4(j).m()
n.at=null
p=4
s=7
return A.a5(n.z.pw(),$async$l7)
case 7:n.at=b
p=2
s=6
break
case 4:p=3
i=o
m=A.ag(i)
l=A.aB(i)
n.kD(A.bk("resolving an image frame"),m,n.as,!0,l)
s=1
break
s=6
break
case 3:s=2
break
case 6:if(n.z.gm6()===1){if(n.a.length===0){s=1
break}j=n.at
n.DV(new A.eG(j.gf4(j).cI(0),n.Q,n.d))
j=n.at
j.gf4(j).m()
n.at=null
s=1
break}n.FQ()
case 1:return A.a2(q,r)
case 2:return A.a1(o,r)}})
return A.a3($async$l7,r)},
FQ(){if(this.cx)return
this.cx=!0
$.bO.pE(this.gTP())},
DV(a){this.Bx(a);++this.ch},
S(a,b){var s,r=this
if(r.a.length===0){s=r.z
if(s!=null)s=r.b==null||s.gm6()>1
else s=!1}else s=!1
if(s)r.l7()
r.C7(0,b)},
H(a,b){var s,r=this
r.C8(0,b)
if(r.a.length===0){s=r.CW
if(s!=null)s.am(0)
r.CW=null}},
qo(){this.Nv()
if(this.w)this.y=null}}
A.a0D.prototype={
$2(a,b){this.a.kD(A.bk("resolving an image codec"),a,this.b,!0,b)},
$S:38}
A.a0C.prototype={
$0(){this.a.FQ()},
$S:0}
A.N3.prototype={}
A.N5.prototype={}
A.N4.prototype={}
A.Ah.prototype={}
A.k_.prototype={
k(a,b){var s
if(b==null)return!1
if(b instanceof A.k_)if(b.a===this.a)if(b.b==this.b)s=A.cS(b.f,this.f)
else s=!1
else s=!1
else s=!1
return s},
gv(a){return A.V(this.a,this.b,this.c,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"InlineSpanSemanticsInformation{text: "+this.a+", semanticsLabel: "+A.h(this.b)+", recognizer: "+A.h(this.c)+"}"}}
A.fT.prototype={
M1(a){var s={}
s.a=null
this.aU(new A.a__(s,a,new A.Ah()))
return s.a},
Lb(a){var s,r=new A.bP("")
this.HS(r,!0,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
ab(a,b){var s={}
if(b<0)return null
s.a=null
this.aU(new A.ZZ(s,b,new A.Ah()))
return s.a},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.T(b)!==A.C(this))return!1
return b instanceof A.fT&&J.f(b.a,this.a)},
gv(a){return J.p(this.a)}}
A.a__.prototype={
$1(a){var s=a.M2(this.b,this.c)
this.a.a=s
return s==null},
$S:37}
A.ZZ.prototype={
$1(a){var s=a.a01(this.b,this.c)
this.a.a=s
return s==null},
$S:37}
A.dv.prototype={
aI(a,b){var s=this.a.aI(0,b)
return new A.dv(this.b.a0(0,b),s)},
c4(a,b){var s,r,q=this
if(a instanceof A.dv){s=A.az(a.a,q.a,b)
r=A.hj(a.b,q.b,b)
r.toString
return new A.dv(r,s)}if(a instanceof A.dl){s=A.az(a.a,q.a,b)
return new A.e6(q.b,1-b,a.b,s)}return q.kY(a,b)},
c5(a,b){var s,r,q=this
if(a instanceof A.dv){s=A.az(q.a,a.a,b)
r=A.hj(q.b,a.b,b)
r.toString
return new A.dv(r,s)}if(a instanceof A.dl){s=A.az(q.a,a.a,b)
return new A.e6(q.b,b,a.b,s)}return q.kZ(a,b)},
ff(a,b){var s=$.as().cm()
s.ew(this.b.W(b).dk(a))
return s},
hA(a,b,c){var s,r,q,p,o=this.a
switch(o.c.a){case 0:break
case 1:s=this.b
if(o.b===0)a.cU(s.W(c).dk(b),o.hG())
else{r=$.as().bj()
r.sau(0,o.a)
q=s.W(c).dk(b)
p=q.cY(-o.gem())
a.rL(q.cY(o.gBQ()),p,r)}break}},
k(a,b){if(b==null)return!1
if(J.T(b)!==A.C(this))return!1
return b instanceof A.dv&&b.a.k(0,this.a)&&b.b.k(0,this.b)},
gv(a){return A.V(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"RoundedRectangleBorder("+this.a.i(0)+", "+this.b.i(0)+")"}}
A.e6.prototype={
aI(a,b){var s=this.a.aI(0,b)
return new A.e6(this.b.a0(0,b),b,this.d,s)},
c4(a,b){var s,r,q,p=this
if(a instanceof A.dv){s=A.az(a.a,p.a,b)
r=A.hj(a.b,p.b,b)
r.toString
return new A.e6(r,p.c*b,p.d,s)}if(a instanceof A.dl){s=A.az(a.a,p.a,b)
r=p.c
return new A.e6(p.b,r+(1-r)*(1-b),a.b,s)}if(a instanceof A.e6){s=A.az(a.a,p.a,b)
r=A.hj(a.b,p.b,b)
r.toString
q=A.S(a.c,p.c,b)
q.toString
return new A.e6(r,q,p.d,s)}return p.kY(a,b)},
c5(a,b){var s,r,q,p=this
if(a instanceof A.dv){s=A.az(p.a,a.a,b)
r=A.hj(p.b,a.b,b)
r.toString
return new A.e6(r,p.c*(1-b),p.d,s)}if(a instanceof A.dl){s=A.az(p.a,a.a,b)
r=p.c
return new A.e6(p.b,r+(1-r)*b,a.b,s)}if(a instanceof A.e6){s=A.az(p.a,a.a,b)
r=A.hj(p.b,a.b,b)
r.toString
q=A.S(p.c,a.c,b)
q.toString
return new A.e6(r,q,p.d,s)}return p.kZ(a,b)},
FM(a){var s,r,q,p,o,n,m,l,k=this.c
if(k===0||a.c-a.a===a.d-a.b)return a
s=a.c
r=a.a
q=s-r
p=a.d
o=a.b
n=p-o
m=1-this.d
if(q<n){l=k*((n-q)/2)*m
return new A.A(r,o+l,s,p-l)}else{l=k*((q-n)/2)*m
return new A.A(r+l,o,s-l,p)}},
CQ(a,b){var s,r,q,p=this.b.W(b),o=this.c
if(o===0)return p
s=this.d
if(s!==0){r=a.c-a.a
q=a.d-a.b
s=0.5+s/2
if(r<q){o=A.nC(p,A.AG(new A.br(r/2,s*q/2)),o)
o.toString
return o}else{o=A.nC(p,A.AG(new A.br(s*r/2,q/2)),o)
o.toString
return o}}return A.nC(p,A.eU(a.gfi()/2),o)},
ff(a,b){var s=$.as().cm(),r=this.CQ(a,b)
r.toString
s.ew(r.dk(this.FM(a)))
return s},
hA(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=this.CQ(b,c)
s.toString
a.cU(s.dk(this.FM(b)).cY(r.b*r.d/2),r.hG())
break}},
k(a,b){var s=this
if(b==null)return!1
if(J.T(b)!==A.C(s))return!1
return b instanceof A.e6&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c===s.c},
gv(a){return A.V(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r="RoundedRectangleBorder(",q=s.d
if(q!==0)return r+s.a.i(0)+", "+s.b.i(0)+", "+B.d.N(s.c*100,1)+u.T+B.d.N(q*100,1)+"% oval)"
return r+s.a.i(0)+", "+s.b.i(0)+", "+B.d.N(s.c*100,1)+"% of the way to being a CircleBorder)"}}
A.eo.prototype={
aI(a,b){return new A.eo(this.a.aI(0,b))},
c4(a,b){var s,r=this
if(a instanceof A.eo)return new A.eo(A.az(a.a,r.a,b))
if(a instanceof A.dl){s=A.az(a.a,r.a,b)
return new A.e8(1-b,a.b,s)}if(a instanceof A.dv){s=A.az(a.a,r.a,b)
return new A.e9(a.b,1-b,s)}return r.kY(a,b)},
c5(a,b){var s,r=this
if(a instanceof A.eo)return new A.eo(A.az(r.a,a.a,b))
if(a instanceof A.dl){s=A.az(r.a,a.a,b)
return new A.e8(b,a.b,s)}if(a instanceof A.dv){s=A.az(r.a,a.a,b)
return new A.e9(a.b,b,s)}return r.kZ(a,b)},
ff(a,b){var s=a.gfi()/2,r=$.as().cm()
r.ew(A.ahA(a,new A.br(s,s)))
return r},
hA(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=b.gfi()/2
a.cU(A.ahA(b,new A.br(s,s)).cY(r.b*r.d/2),r.hG())
break}},
k(a,b){if(b==null)return!1
if(J.T(b)!==A.C(this))return!1
return b instanceof A.eo&&b.a.k(0,this.a)},
gv(a){var s=this.a
return A.V(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"StadiumBorder("+this.a.i(0)+")"}}
A.e8.prototype={
aI(a,b){return new A.e8(b,this.c,this.a.aI(0,b))},
c4(a,b){var s,r,q,p=this
if(a instanceof A.eo)return new A.e8(p.b*b,p.c,A.az(a.a,p.a,b))
if(a instanceof A.dl){s=A.az(a.a,p.a,b)
r=p.b
return new A.e8(r+(1-r)*(1-b),a.b,s)}if(a instanceof A.e8){s=A.az(a.a,p.a,b)
r=A.S(a.b,p.b,b)
r.toString
q=A.S(a.c,p.c,b)
q.toString
return new A.e8(r,q,s)}return p.kY(a,b)},
c5(a,b){var s,r,q,p=this
if(a instanceof A.eo)return new A.e8(p.b*(1-b),p.c,A.az(p.a,a.a,b))
if(a instanceof A.dl){s=A.az(p.a,a.a,b)
r=p.b
return new A.e8(r+(1-r)*b,a.b,s)}if(a instanceof A.e8){s=A.az(p.a,a.a,b)
r=A.S(p.b,a.b,b)
r.toString
q=A.S(p.c,a.c,b)
q.toString
return new A.e8(r,q,s)}return p.kZ(a,b)},
Gl(a){var s,r,q,p,o,n,m,l,k=this.b
if(k===0||a.c-a.a===a.d-a.b)return a
s=a.c
r=a.a
q=s-r
p=a.d
o=a.b
n=p-o
m=1-this.c
if(q<n){l=k*((n-q)/2)*m
return new A.A(r,o+l,s,p-l)}else{l=k*((q-n)/2)*m
return new A.A(r+l,o,s-l,p)}},
nv(a){var s,r,q,p=A.eU(a.gfi()/2),o=this.c
if(o!==0){s=a.c-a.a
r=a.d-a.b
q=this.b
o=0.5+o/2
if(s<r){o=A.nC(p,A.AG(new A.br(s/2,o*r/2)),q)
o.toString
return o}else{o=A.nC(p,A.AG(new A.br(o*s/2,r/2)),q)
o.toString
return o}}return p},
ff(a,b){var s=$.as().cm()
s.ew(this.nv(a).dk(this.Gl(a)))
return s},
hA(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.cU(this.nv(b).dk(this.Gl(b)).cY(s.b*s.d/2),s.hG())
break}},
k(a,b){if(b==null)return!1
if(J.T(b)!==A.C(this))return!1
return b instanceof A.e8&&b.a.k(0,this.a)&&b.b===this.b},
gv(a){return A.V(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r=s.c
if(r!==0)return"StadiumBorder("+s.a.i(0)+", "+B.d.N(s.b*100,1)+u.T+B.d.N(r*100,1)+"% oval)"
return"StadiumBorder("+s.a.i(0)+", "+B.d.N(s.b*100,1)+"% of the way to being a CircleBorder)"}}
A.e9.prototype={
aI(a,b){var s=this.a.aI(0,b)
return new A.e9(this.b.a0(0,b),b,s)},
c4(a,b){var s,r,q,p=this
if(a instanceof A.eo)return new A.e9(p.b,p.c*b,A.az(a.a,p.a,b))
if(a instanceof A.dv){s=p.c
return new A.e9(p.b,s+(1-s)*(1-b),A.az(a.a,p.a,b))}if(a instanceof A.e9){s=A.az(a.a,p.a,b)
r=A.hj(a.b,p.b,b)
r.toString
q=A.S(a.c,p.c,b)
q.toString
return new A.e9(r,q,s)}return p.kY(a,b)},
c5(a,b){var s,r,q,p=this
if(a instanceof A.eo)return new A.e9(p.b,p.c*(1-b),A.az(p.a,a.a,b))
if(a instanceof A.dv){s=p.c
return new A.e9(p.b,s+(1-s)*b,A.az(p.a,a.a,b))}if(a instanceof A.e9){s=A.az(p.a,a.a,b)
r=A.hj(p.b,a.b,b)
r.toString
q=A.S(p.c,a.c,b)
q.toString
return new A.e9(r,q,s)}return p.kZ(a,b)},
nv(a){var s=a.gfi()/2
s=A.hj(this.b,A.AG(new A.br(s,s)),1-this.c)
s.toString
return s},
ff(a,b){var s=$.as().cm()
s.ew(this.nv(a).W(b).dk(a))
return s},
hA(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.cU(this.nv(b).W(c).dk(b).cY(s.b*s.d/2),s.hG())
break}},
k(a,b){var s=this
if(b==null)return!1
if(J.T(b)!==A.C(s))return!1
return b instanceof A.e9&&b.a.k(0,s.a)&&b.b.k(0,s.b)&&b.c===s.c},
gv(a){return A.V(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"StadiumBorder("+this.a.i(0)+", "+this.b.i(0)+", "+B.d.N(this.c*100,1)+"% of the way to being a RoundedRectangleBorder)"}}
A.mJ.prototype={
F(){return"TextOverflow."+this.b}}
A.m9.prototype={
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(b instanceof A.m9)if(b.a.k(0,r.a))if(b.b===r.b)s=b.c==r.c
else s=!1
else s=!1
else s=!1
return s},
gv(a){var s=this
return A.V(s.a,s.b,s.d,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"PlaceholderDimensions("+this.a.i(0)+", "+A.h(this.d)+")"}}
A.wV.prototype={
F(){return"TextWidthBasis."+this.b}}
A.a9n.prototype={}
A.Km.prototype={
a5(){var s=this,r=s.a
if(r!=null)r.m()
s.dy=s.dx=s.fr=s.a=null},
su2(a,b){var s,r,q=this
if(J.f(q.d,b))return
s=q.d
s=s==null?null:s.a
if(!J.f(s,b.a)){s=q.CW
if(s!=null)s.m()
q.CW=null}s=q.d
s=s==null?null:s.b3(0,b)
r=s==null?B.cM:s
q.d=b
q.e=null
s=r.a
if(s>=3)q.a5()
else if(s>=2)q.b=!0},
gtP(){var s=this.e
if(s==null){s=this.d
s=s==null?null:s.Lb(!1)
this.e=s}return s==null?"":s},
sAw(a,b){if(this.f===b)return
this.f=b
this.a5()},
sbE(a){var s,r=this
if(r.r===a)return
r.r=a
r.a5()
s=r.CW
if(s!=null)s.m()
r.CW=null},
sAx(a){var s,r=this
if(r.w===a)return
r.w=a
r.a5()
s=r.CW
if(s!=null)s.m()
r.CW=null},
sa1t(a){if(this.x==a)return
this.x=a
this.a5()},
szl(a,b){if(J.f(this.y,b))return
this.y=b
this.a5()},
szq(a){if(this.z==a)return
this.z=a
this.a5()},
sAy(a){if(this.as===a)return
this.as=a
this.a5()},
ux(a){if(a==null||a.length===0||A.cS(a,this.ch))return
this.ch=a
this.a5()},
DG(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.d.a
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
o=l==null?f:new A.Kj(l)
k=e.w
j=e.x
i=e.d
h=e.r
if(h==null)h=14
e=e.as
e=A.ahv(n,i,h*q,j,k,e,m,p,f,s,r,o)}if(e==null){e=g.f
s=g.r
if(s==null)s=a
r=g.w
q=g.z
p=g.at
p=A.ahv(g.x,f,14*r,f,f,f,g.y,q,f,e,s,p)
e=p}return e},
Sh(){return this.DG(null)},
gtR(){var s,r,q=this,p=q.CW
if(p==null){p=q.DG(B.X)
s=$.as().y4(p)
p=q.d
if(p==null)r=null
else{p=p.a
r=p==null?null:p.Bf(q.w)}if(r!=null)s.Ac(r)
s.r2(" ")
p=s.aP()
p.hv(B.Tb)
q.CW=p}return p.gbL(p)},
gbg(a){var s=this.as,r=this.a
s=s===B.Zc?r.gK0():r.gbg(r)
return Math.ceil(s)},
ez(a){var s
switch(a.a){case 0:s=this.a
return s.gr5(s)
case 1:s=this.a
return s.ga34(s)}},
DF(){var s,r,q=this,p=q.d
if(p==null)throw A.c(A.a6("TextPainter.text must be set to a non-null value before using the TextPainter."))
s=q.Sh()
r=$.as().y4(s)
s=q.w
p.HD(r,q.ch,s)
q.ay=r.ga4A()
q.a=r.aP()
q.b=!1},
ER(a,b){var s,r,q=this
q.a.hv(new A.kf(b))
if(a!==b){switch(q.as.a){case 1:s=Math.ceil(q.a.gK0())
break
case 0:s=Math.ceil(q.a.ga42())
break
default:s=null}s=A.H(s,a,b)
r=q.a
if(s!==Math.ceil(r.gbg(r)))q.a.hv(new A.kf(s))}},
zi(a,b){var s=this,r=s.a==null
if(!r&&b===s.cx&&a===s.cy)return
if(s.b||r)s.DF()
s.cx=b
s.cy=a
s.dy=s.dx=s.fr=null
s.ER(b,a)
s.ax=s.a.ud()},
a3K(){return this.zi(1/0,0)},
aH(a,b){var s,r=this,q=r.cx,p=r.cy
if(r.a==null||q==null||p==null)throw A.c(A.a6("TextPainter.paint called when text geometry was not yet calculated.\nPlease call layout() before paint() to position the text before painting it."))
if(r.b){r.DF()
r.ER(q,p)}s=r.a
s.toString
a.ke(s,b)},
Ed(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.gtP().length
if(g===0||a>g)return null
s=B.c.ab(h.gtP(),Math.max(0,a-1))
r=(s&63488)===55296||h.d.ab(0,a)===8205||s===8207||s===8206
q=r?2:1
p=A.a([],t.px)
for(o=-g,n=!r,m=s===10;p.length===0;){l=a-q
p=h.a.AY(l,a,B.ml)
if(p.length===0){if(n&&m)break
if(l<o)break
q*=2
continue}k=B.b.gJ(p)
if(m){o=k.d
return new A.A(h.gvH().a,o,h.gvH().a,o+o-k.b)}o=k.e
j=o===B.w?k.c:k.a
i=o===B.X?j-(b.c-b.a):j
o=h.a
o=A.H(i,0,o.gbg(o))
n=h.a
return new A.A(o,k.b,A.H(i,0,n.gbg(n)),k.d)}return null},
Ec(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.gtP().length
if(h===0||a<0)return null
s=B.c.ab(i.gtP(),Math.min(a,h-1))
r=(s&63488)===55296||s===8205||s===8207||s===8206
q=r?2:1
p=A.a([],t.px)
for(o=h<<1>>>0,n=!r;p.length===0;){m=a+q
p=i.a.AY(a,m,B.ml)
if(p.length===0){if(n)break
if(m>=o)break
q*=2
continue}l=B.b.gV(p)
o=l.e
k=o===B.w?l.a:l.c
j=o===B.X?k-(b.c-b.a):k
o=i.a
o=A.H(j,0,o.gbg(o))
n=i.a
return new A.A(o,l.b,A.H(j,0,n.gbg(n)),l.d)}return null},
gvH(){var s=this
switch(s.f.a){case 0:return B.k
case 1:return new A.v(s.gbg(s),0)
case 2:return new A.v(s.gbg(s)/2,0)
case 3:case 4:switch(s.r.a){case 0:return new A.v(s.gbg(s),0)
case 1:return B.k}break
case 5:switch(s.r.a){case 0:return B.k
case 1:return new A.v(s.gbg(s),0)}break}},
Dv(a,b){var s,r,q,p,o=this
if(a.k(0,o.dx)&&b.k(0,o.dy))return
s=a.a
switch(a.b.a){case 0:r=o.Ed(s,b)
if(r==null)r=o.Ec(s,b)
break
case 1:r=o.Ec(s,b)
if(r==null)r=o.Ed(s,b)
break
default:r=null}q=r!=null
p=q?new A.v(r.a,r.b):o.gvH()
o.db=new A.a9n(p,q?r.d-r.b:null)
o.dx=a
o.dy=b},
m(){var s=this,r=s.CW
if(r!=null)r.m()
s.CW=null
r=s.a
if(r!=null)r.m()
s.d=s.a=null}}
A.wU.prototype={
gIa(a){return this.e},
gAR(){return!0},
i6(a,b){t.Y.b(a)},
HD(a,b,c){var s,r,q,p,o=this.a,n=o!=null
if(n)a.Ac(o.Bf(c))
o=this.b
if(o!=null)try{a.r2(o)}catch(q){o=A.ag(q)
if(o instanceof A.fD){s=o
r=A.aB(q)
A.dJ(new A.bz(s,r,"painting library",A.bk("while building a TextSpan"),null,!1))
a.r2("\ufffd")}else throw q}o=this.c
if(o!=null)for(p=0;p<1;++p)o[p].HD(a,b,c)
if(n)a.fO()},
aU(a){var s,r
if(this.b!=null)if(!a.$1(this))return!1
s=this.c
if(s!=null)for(r=0;r<1;++r)if(!s[r].aU(a))return!1
return!0},
M2(a,b){var s,r,q,p,o=this.b
if(o==null)return null
s=a.b
r=a.a
q=b.a
p=q+o.length
if(!(q===r&&s===B.G))if(!(q<r&&r<p))o=p===r&&s===B.P
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
a.push(A.akG(q,null,null,s))}q=this.c
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
b3(a,b){var s,r,q,p,o,n=this
if(n===b)return B.dL
if(A.C(b)!==A.C(n))return B.cM
if(b.b==n.b){s=n.c==null?null:1
s=s!=(b.c==null?null:1)||n.a==null!==(b.a==null)}else s=!0
if(s)return B.cM
s=n.a
if(s!=null){r=b.a
r.toString
q=s.b3(0,r)
p=q.a>0?q:B.dL
if(p===B.cM)return p}else p=B.dL
s=n.c
if(s!=null)for(r=b.c,o=0;o<1;++o){q=s[o].b3(0,r[o])
if(q.a>p.a)p=q
if(p===B.cM)return p}return p},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.T(b)!==A.C(s))return!1
if(!s.Ny(0,b))return!1
return b instanceof A.wU&&b.b==s.b&&s.e.k(0,b.e)&&A.cS(b.c,s.c)},
gv(a){var s=this,r=null,q=A.fT.prototype.gv.call(s,s),p=s.c
p=p==null?r:A.d8(p)
return A.V(q,s.b,r,r,r,r,s.e,p,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
bW(){return"TextSpan"},
$iaj:1,
$iiS:1,
gzM(){return null},
gzP(){return null}}
A.t.prototype={
gm5(){return this.e},
glt(a){return this.d},
nZ(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=b9==null?a.a:b9,a1=a.ay
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
c=b0==null?a.glt(a):b0
b=b1==null?a.e:b1
return A.aQ(r,q,s,null,g,f,e,d,c,b,a.fr,p,a.x,h,o,a1,k,a0,j,n,a.ax,a.fy,a.f,i,l,m)},
hk(a){return this.nZ(null,null,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
a0w(a){return this.nZ(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null)},
a0G(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5){return this.nZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,null,r,s,a0,a1,a2,a3,a4,a5)},
I2(a,b){return this.nZ(null,null,a,null,null,null,null,null,null,null,null,b,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
HY(a){return this.nZ(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null,null,null)},
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
a1=a4.glt(a4)
a2=a4.e
a3=a4.f
return this.a0G(g,r,s,null,c,b,a,a0,a1,a2,e,q,o,d,p,h,k,j,n,i,a4.fy,a3,f,l,m)},
Bf(a){var s,r,q=this,p=q.gm5(),o=q.r
o=o==null?null:o*a
s=q.ch
if(s==null){s=q.c
if(s!=null){r=$.as().bj()
r.sau(0,s)
s=r}else s=null}return A.ama(s,q.b,q.CW,q.cx,q.cy,q.db,q.d,p,q.fr,o,q.x,q.fx,q.w,q.ay,q.as,q.at,q.y,q.ax,q.dy,q.Q,q.z)},
b3(a,b){var s=this
if(s===b)return B.dL
if(s.a!==b.a||s.d!=b.d||s.r!=b.r||s.w!=b.w||s.y!=b.y||s.z!=b.z||s.Q!=b.Q||s.as!=b.as||s.at!=b.at||s.ay!=b.ay||s.ch!=b.ch||!A.cS(s.dy,b.dy)||!A.cS(s.fr,b.fr)||!A.cS(s.fx,b.fx)||!A.cS(s.gm5(),b.gm5())||!1)return B.cM
if(!J.f(s.b,b.b)||!J.f(s.c,b.c)||!J.f(s.CW,b.CW)||!J.f(s.cx,b.cx)||s.cy!=b.cy||s.db!=b.db)return B.Tu
return B.dL},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.T(b)!==A.C(r))return!1
if(b instanceof A.t)if(b.a===r.a)if(J.f(b.b,r.b))if(J.f(b.c,r.c))if(b.r==r.r)if(b.w==r.w)if(b.y==r.y)if(b.z==r.z)if(b.Q==r.Q)if(b.as==r.as)if(b.at==r.at)if(b.ay==r.ay)if(b.ch==r.ch)if(A.cS(b.dy,r.dy))if(A.cS(b.fr,r.fr))if(A.cS(b.fx,r.fx))if(J.f(b.CW,r.CW))if(J.f(b.cx,r.cx))if(b.cy==r.cy)if(b.db==r.db)if(b.d==r.d)if(A.cS(b.gm5(),r.gm5()))s=!0
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
gv(a){var s,r=this,q=null,p=r.gm5(),o=p==null?q:A.d8(p),n=A.V(r.cy,r.db,r.d,o,r.f,r.fy,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a),m=r.dy,l=r.fx
o=m==null?q:A.d8(m)
s=l==null?q:A.d8(l)
return A.V(r.a,r.b,r.c,r.r,r.w,r.x,r.y,r.z,r.Q,r.as,r.at,r.ax,r.ay,r.ch,o,q,s,r.CW,r.cx,n)},
bW(){return"TextStyle"}}
A.Qp.prototype={}
A.Es.prototype={
Qy(a,b,c,d,e){var s=this
s.r=A.anB(new A.Yk(s),s.gyx(s),0,10,0)},
cN(a,b){var s,r,q=this
if(b>q.r)return q.grW()
s=q.e
r=q.c
return q.d+s*Math.pow(q.b,b)/r-s/r-q.f/2*b*b},
dt(a,b){var s=this
if(b>s.r)return 0
return s.e*Math.pow(s.b,b)-s.f*b},
grW(){var s=this
if(s.f===0)return s.d-s.e/s.c
return s.cN(0,s.r)},
L6(a){var s,r=this,q=r.d
if(a===q)return 0
s=r.e
if(s!==0)if(s>0)q=a<q||a>r.grW()
else q=a>q||a<r.grW()
else q=!0
if(q)return 1/0
return A.anB(r.gyx(r),r.ga68(r),0,10,a)},
jg(a){return Math.abs(this.dt(0,a))<this.a.c},
i(a){return"FrictionSimulation(c\u2093: "+B.d.N(this.b,1)+", x\u2080: "+B.d.N(this.d,1)+", dx\u2080: "+B.d.N(this.e,1)+")"}}
A.Yk.prototype={
$1(a){var s=this.a
return s.e*Math.pow(s.b,a)*s.c-s.f},
$S:51}
A.a5_.prototype={
i(a){return"Simulation"}}
A.a6T.prototype={
i(a){return"SpringDescription(mass: "+B.d.N(this.a,1)+", stiffness: "+B.f.N(this.b,1)+", damping: "+B.d.N(this.c,1)+")"}}
A.pl.prototype={
F(){return"SpringType."+this.b}}
A.K_.prototype={
cN(a,b){return this.b+this.c.cN(0,b)},
dt(a,b){return this.c.dt(0,b)},
jg(a){var s=this.c
return A.A6(s.cN(0,a),0,this.a.a)&&A.A6(s.dt(0,a),0,this.a.c)},
i(a){var s=this.c
return"SpringSimulation(end: "+B.d.N(this.b,1)+", "+s.gd1(s).i(0)+")"}}
A.ko.prototype={
cN(a,b){return this.jg(b)?this.b:this.P6(0,b)}}
A.a9A.prototype={
cN(a,b){return(this.b+this.c*b)*Math.pow(2.718281828459045,this.a*b)},
dt(a,b){var s=this.a,r=Math.pow(2.718281828459045,s*b),q=this.c
return s*(this.b+q*b)*r+q*r},
gd1(a){return B.UZ}}
A.acb.prototype={
cN(a,b){var s=this
return s.c*Math.pow(2.718281828459045,s.a*b)+s.d*Math.pow(2.718281828459045,s.b*b)},
dt(a,b){var s=this,r=s.a,q=s.b
return s.c*r*Math.pow(2.718281828459045,r*b)+s.d*q*Math.pow(2.718281828459045,q*b)},
gd1(a){return B.V0}}
A.adN.prototype={
cN(a,b){var s=this,r=s.a*b
return Math.pow(2.718281828459045,s.b*b)*(s.c*Math.cos(r)+s.d*Math.sin(r))},
dt(a,b){var s,r=this,q=r.b,p=Math.pow(2.718281828459045,q*b),o=r.a,n=o*b,m=Math.cos(n),l=Math.sin(n)
n=r.d
s=r.c
return p*(n*o*m-s*o*l)+q*p*(n*l+s*m)},
gd1(a){return B.V_}}
A.Kw.prototype={
i(a){return"Tolerance(distance: \xb1"+A.h(this.a)+", time: \xb10.001, velocity: \xb1"+A.h(this.c)+")"}}
A.oZ.prototype={
yT(){var s=this,r=s.ry$
r===$&&A.b()
r=r.e
r.toString
r.sxV(s.I8())
if(s.ry$.e.u$!=null)s.Mc()},
yZ(){},
yV(){},
I8(){var s,r=$.ci(),q=r.w
if(q==null){s=self.window.devicePixelRatio
q=s===0?1:s}return new A.KP(r.gky().cO(0,q),q)},
Vh(){var s,r=this
if($.aM().a.c){if(r.to$==null){s=r.ry$
s===$&&A.b()
r.to$=s.IF()}}else{s=r.to$
if(s!=null)s.m()
r.to$=null}},
MB(a){var s,r=this
if(a){if(r.to$==null){s=r.ry$
s===$&&A.b()
r.to$=s.IF()}}else{s=r.to$
if(s!=null)s.m()
r.to$=null}},
VA(a){B.SW.nj("first-frame",null,!1,t.H)},
Vf(a,b,c){var s=this.ry$
s===$&&A.b()
s=s.as
if(s!=null)s.a4y(a,b,null)},
Vj(){var s,r=this.ry$
r===$&&A.b()
r=r.e
r.toString
s=t.W
s.a(A.I.prototype.gbq.call(r)).ay.D(0,r)
s.a(A.I.prototype.gbq.call(r)).ms()},
Vn(a){var s=this.ry$
s===$&&A.b()
s.e.toString
s=$.dx;(s==null?$.dx=A.jM():s).a5U(a)},
Vl(){var s=this.ry$
s===$&&A.b()
s.e.lD()},
UM(a){this.yw()
this.Yg()},
Yg(){$.bO.ax$.push(new A.a3a(this))},
Hq(){--this.x2$
if(!this.xr$)this.uo()},
yw(){var s=this,r=s.ry$
r===$&&A.b()
r.a1X()
s.ry$.a1W()
s.ry$.a1Y()
if(s.xr$||s.x2$===0){s.ry$.e.a0b()
s.ry$.a1Z()
s.xr$=!0}},
$iaj:1,
$idw:1}
A.a3a.prototype={
$1(a){var s=this.a,r=s.rx$
r.toString
s=s.ry$
s===$&&A.b()
r.a5R(s.e.ga31())},
$S:2}
A.aR.prototype={
xZ(a,b,c,d){var s=this,r=d==null?s.a:d,q=b==null?s.b:b,p=c==null?s.c:c
return new A.aR(r,q,p,a==null?s.d:a)},
a0D(a,b){return this.xZ(null,null,a,b)},
I_(a){return this.xZ(a,null,null,null)},
a0x(a){return this.xZ(null,a,null,null)},
Id(a){var s=this,r=a.gcg(),q=a.gb8(a)+a.gbb(a),p=Math.max(0,s.a-r),o=Math.max(0,s.c-q)
return new A.aR(p,Math.max(p,s.b-r),o,Math.max(o,s.d-q))},
on(a){var s=this,r=a.a,q=a.b,p=a.c,o=a.d
return new A.aR(A.H(s.a,r,q),A.H(s.b,r,q),A.H(s.c,p,o),A.H(s.d,p,o))},
L5(a,b){var s,r,q=this,p=b==null,o=q.a,n=p?o:A.H(b,o,q.b),m=q.b
p=p?m:A.H(b,o,m)
o=a==null
m=q.c
s=o?m:A.H(a,m,q.d)
r=q.d
return new A.aR(n,p,s,o?r:A.H(a,m,r))},
u3(a){return this.L5(a,null)},
AA(a){return this.L5(null,a)},
bs(a){var s=this
return new A.a_(A.H(a.a,s.a,s.b),A.H(a.b,s.c,s.d))},
nY(a){var s,r,q,p,o,n=this,m=n.a,l=n.b
if(m>=l&&n.c>=n.d)return new A.a_(A.H(0,m,l),A.H(0,n.c,n.d))
s=a.a
r=a.b
q=s/r
if(s>l){r=l/q
s=l}p=n.d
if(r>p){s=p*q
r=p}if(s<m){r=m/q
s=m}o=n.c
if(r<o){s=o*q
r=o}return new A.a_(A.H(s,m,l),A.H(r,o,p))},
gJO(){var s=this
return s.a>=s.b&&s.c>=s.d},
a0(a,b){var s=this
return new A.aR(s.a*b,s.b*b,s.c*b,s.d*b)},
cO(a,b){var s=this
return new A.aR(s.a/b,s.b/b,s.c/b,s.d/b)},
ga3x(){var s=this,r=s.a
if(r>=0)if(r<=s.b){r=s.c
r=r>=0&&r<=s.d}else r=!1
else r=!1
return r},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.T(b)!==A.C(s))return!1
return b instanceof A.aR&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gv(a){var s=this
return A.V(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s,r=this,q=r.ga3x()?"":"; NOT NORMALIZED",p=r.a
if(p===1/0&&r.c===1/0)return"BoxConstraints(biggest"+q+")"
if(p===0&&r.b===1/0&&r.c===0&&r.d===1/0)return"BoxConstraints(unconstrained"+q+")"
s=new A.Tq()
return"BoxConstraints("+s.$3(p,r.b,"w")+", "+s.$3(r.c,r.d,"h")+q+")"}}
A.Tq.prototype={
$3(a,b,c){if(a===b)return c+"="+B.d.N(a,1)
return B.d.N(a,1)+"<="+c+"<="+B.d.N(b,1)},
$S:225}
A.hk.prototype={
xx(a,b,c){if(c!=null){c=A.H6(A.ahx(c))
if(c==null)return!1}return this.Ho(a,b,c)},
nH(a,b,c){var s,r=b==null,q=r?c:c.aa(0,b)
r=!r
if(r)this.c.push(new A.ql(new A.v(-b.a,-b.b)))
s=a.$2(this,q)
if(r)this.tQ()
return s},
Ho(a,b,c){var s,r=c==null,q=r?b:A.cr(c,b)
r=!r
if(r)this.c.push(new A.y4(c))
s=a.$2(this,q)
if(r)this.tQ()
return s},
Hn(a,b,c){var s,r=this
if(b!=null)r.c.push(new A.ql(new A.v(-b.a,-b.b)))
else{c.toString
c=A.H6(A.ahx(c))
c.toString
r.c.push(new A.y4(c))}s=a.$1(r)
r.tQ()
return s},
a_c(a,b){return this.Hn(a,null,b)},
a_b(a,b){return this.Hn(a,b,null)}}
A.nF.prototype={
i(a){return"<optimized out>#"+A.bL(this.a)+"@"+this.c.i(0)}}
A.ey.prototype={
i(a){return"offset="+this.a.i(0)}}
A.rD.prototype={}
A.E.prototype={
ej(a){if(!(a.e instanceof A.ey))a.e=new A.ey(B.k)},
fU(a){var s,r=this.k1
if(r==null)r=this.k1=A.z(t.k,t.DB)
s=r.bM(0,a,new A.a2D(this,a))
return s},
c3(a){return B.W},
gjD(){var s=this.k3
return new A.A(0,0,0+s.a,0+s.b)},
ug(a,b){var s=null
try{s=this.jy(a)}finally{}if(s==null&&!b)return this.k3.b
return s},
LK(a){return this.ug(a,!1)},
jy(a){var s=this,r=s.k4
if(r==null)r=s.k4=A.z(t.E7,t.u6)
r.bM(0,a,new A.a2C(s,a))
return s.k4.j(0,a)},
ez(a){return null},
gY(){return t.k.a(A.x.prototype.gY.call(this))},
RS(){var s,r=this,q=r.k4,p=q==null
if(!(!p&&q.a!==0)){s=r.id
if(!(s!=null&&s.a!==0)){s=r.k1
s=s!=null&&s.a!==0}else s=!0}else s=!0
if(s){if(!p)q.X(0)
q=r.id
if(q!=null)q.X(0)
q=r.k1
if(q!=null)q.X(0)
return!0}return!1},
a5(){var s=this
if(s.RS()&&s.c instanceof A.x){s.tu()
return}s.Os()},
co(a,b){var s,r=this
if(r.k3!=null)if(!a.k(0,t.k.a(A.x.prototype.gY.call(r)))){s=r.k4
s=s!=null&&s.a!==0}else s=!1
else s=!1
if(s){s=r.k4
if(s!=null)s.X(0)}r.Or(a,b)},
hv(a){return this.co(a,!1)},
p5(){this.k3=this.c3(t.k.a(A.x.prototype.gY.call(this)))},
bB(){},
bS(a,b){var s=this
if(s.k3.C(0,b))if(s.cK(a,b)||s.jb(b)){a.D(0,new A.nF(b,s))
return!0}return!1},
jb(a){return!1},
cK(a,b){return!1},
dc(a,b){var s,r=a.e
r.toString
s=t.Ch.a(r).a
b.az(0,s.a,s.b)},
kN(a){var s,r,q,p,o,n=this.bw(0,null)
if(n.hj(n)===0)return B.k
s=new A.fr(new Float64Array(3))
s.fh(0,0,1)
r=new A.fr(new Float64Array(3))
r.fh(0,0,0)
q=n.ij(r)
r=new A.fr(new Float64Array(3))
r.fh(0,0,1)
p=n.ij(r).aa(0,q)
r=new A.fr(new Float64Array(3))
r.fh(a.a,a.b,0)
o=n.ij(r)
r=o.aa(0,p.Bp(s.Ip(o)/s.Ip(p))).a
return new A.v(r[0],r[1])},
ghB(){var s=this.k3
return new A.A(0,0,0+s.a,0+s.b)},
i6(a,b){this.Oq(a,b)}}
A.a2D.prototype={
$0(){return this.a.c3(this.b)},
$S:226}
A.a2C.prototype={
$0(){return this.a.ez(this.b)},
$S:227}
A.cK.prototype={
a1b(a){var s,r,q,p=this.av$
for(s=A.n(this).h("cK.1?");p!=null;){r=s.a(p.e)
q=p.jy(a)
if(q!=null)return q+r.a.b
p=r.an$}return null},
Ic(a){var s,r,q,p,o=this.av$
for(s=A.n(this).h("cK.1"),r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.jy(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.an$}return r},
ya(a,b){var s,r,q={},p=q.a=this.cV$
for(s=A.n(this).h("cK.1");p!=null;p=r){p=p.e
p.toString
s.a(p)
if(a.nH(new A.a2B(q,b,p),p.a,b))return!0
r=p.bR$
q.a=r}return!1},
o4(a,b){var s,r,q,p,o,n=this.av$
for(s=A.n(this).h("cK.1"),r=b.a,q=b.b;n!=null;){p=n.e
p.toString
s.a(p)
o=p.a
a.eJ(n,new A.v(o.a+r,o.b+q))
n=p.an$}}}
A.a2B.prototype={
$2(a,b){return this.a.a.bS(a,b)},
$S:15}
A.xr.prototype={
ae(a){this.uO(0)}}
A.f8.prototype={
i(a){return this.pO(0)+"; id="+A.h(this.e)}}
A.a0z.prototype={
dA(a,b){var s,r=this.b.j(0,a)
r.co(b,!0)
s=r.k3
s.toString
return s},
dT(a,b){var s=this.b.j(0,a).e
s.toString
t.DU.a(s).a=b},
Ry(a,b){var s,r,q,p,o,n,m=this,l=m.b
try{m.b=A.z(t.K,t.x)
for(r=t.DU,q=b;q!=null;q=n){p=q.e
p.toString
s=r.a(p)
p=m.b
p.toString
o=s.e
o.toString
p.l(0,o,q)
n=s.an$}m.tO(a)}finally{m.b=l}},
i(a){return"MultiChildLayoutDelegate"}}
A.IF.prototype={
ej(a){if(!(a.e instanceof A.f8))a.e=new A.f8(null,null,B.k)},
syd(a){var s=this,r=s.M
if(r===a)return
if(A.C(a)!==A.C(r)||a.mN(r))s.a5()
s.M=a
s.b!=null},
ap(a){this.Pt(a)},
ae(a){this.Pu(0)},
c3(a){return a.bs(new A.a_(A.H(1/0,a.a,a.b),A.H(1/0,a.c,a.d)))},
bB(){var s=this,r=t.k.a(A.x.prototype.gY.call(s))
r=r.bs(new A.a_(A.H(1/0,r.a,r.b),A.H(1/0,r.c,r.d)))
s.k3=r
s.M.Ry(r,s.av$)},
aH(a,b){this.o4(a,b)},
cK(a,b){return this.ya(a,b)}}
A.ys.prototype={
ap(a){var s,r,q
this.en(a)
s=this.av$
for(r=t.DU;s!=null;){s.ap(a)
q=s.e
q.toString
s=r.a(q).an$}},
ae(a){var s,r,q
this.dE(0)
s=this.av$
for(r=t.DU;s!=null;){s.ae(0)
q=s.e
q.toString
s=r.a(q).an$}}}
A.P1.prototype={}
A.CV.prototype={
S(a,b){var s=this.a
return s==null?null:s.S(0,b)},
H(a,b){var s=this.a
return s==null?null:s.H(0,b)},
gBs(){return null},
BF(a){return this.it(a)},
te(a){return null},
i(a){var s=A.bL(this),r=this.a
r=r==null?null:r.i(0)
if(r==null)r=""
return"<optimized out>#"+s+"("+r+")"}}
A.IG.prototype={
stN(a){var s=this.B
if(s==a)return
this.B=a
this.DL(a,s)},
sJ_(a){var s=this.O
if(s==a)return
this.O=a
this.DL(a,s)},
DL(a,b){var s=this,r=a==null
if(r)s.ah()
else if(b==null||A.C(a)!==A.C(b)||a.it(b))s.ah()
if(s.b!=null){if(b!=null)b.H(0,s.gdR())
if(!r)a.S(0,s.gdR())}if(r){if(s.b!=null)s.b_()}else if(b==null||A.C(a)!==A.C(b)||a.BF(b))s.b_()},
stS(a){if(this.al.k(0,a))return
this.al=a
this.a5()},
ap(a){var s,r=this
r.n_(a)
s=r.B
if(s!=null)s.S(0,r.gdR())
s=r.O
if(s!=null)s.S(0,r.gdR())},
ae(a){var s=this,r=s.B
if(r!=null)r.H(0,s.gdR())
r=s.O
if(r!=null)r.H(0,s.gdR())
s.l_(0)},
cK(a,b){var s=this.O
if(s!=null){s=s.te(b)
s=s===!0}else s=!1
if(s)return!0
return this.pS(a,b)},
jb(a){var s=this.B
if(s!=null){s=s.te(a)
s=s!==!1}else s=!1
return s},
bB(){this.uT()
this.b_()},
nX(a){return a.bs(this.al)},
Fk(a,b,c){var s
A.b5("debugPreviousCanvasSaveCount")
a.ct(0)
if(!b.k(0,B.k))a.az(0,b.a,b.b)
s=this.k3
s.toString
c.aH(a,s)
a.cp(0)},
aH(a,b){var s,r,q=this
if(q.B!=null){s=a.gbC(a)
r=q.B
r.toString
q.Fk(s,b,r)
q.G8(a)}q.h1(a,b)
if(q.O!=null){s=a.gbC(a)
r=q.O
r.toString
q.Fk(s,b,r)
q.G8(a)}},
G8(a){},
eB(a){var s,r=this
r.h0(a)
r.bK=null
s=r.O
r.dN=s==null?null:s.gBs()
a.a=!1},
nO(a,b,c){var s,r,q,p,o=this
o.fH=A.alz(o.fH,B.rH)
o.i5=A.alz(o.i5,B.rH)
s=o.fH
r=s!=null&&!s.gR(s)
s=o.i5
q=s!=null&&!s.gR(s)
s=A.a([],t.V)
if(r){p=o.fH
p.toString
B.b.K(s,p)}B.b.K(s,c)
if(q){p=o.i5
p.toString
B.b.K(s,p)}o.Cq(a,b,s)},
lD(){this.uQ()
this.i5=this.fH=null}}
A.UR.prototype={}
A.IJ.prototype={
QH(a){var s,r,q,p,o=this
try{r=o.M
if(r!==""){q=$.apf()
s=$.as().y4(q)
s.Ac($.apg())
s.r2(r)
r=s.aP()
o.u!==$&&A.ex()
o.u=r}else{o.u!==$&&A.ex()
o.u=null}}catch(p){}},
gjH(){return!0},
jb(a){return!0},
c3(a){return a.bs(B.US)},
aH(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
try{p=a.gbC(a)
o=i.k3
n=b.a
m=b.b
l=o.a
o=o.b
k=$.as().bj()
k.sau(0,$.ape())
p.cc(new A.A(n,m,n+l,m+o),k)
p=i.u
p===$&&A.b()
if(p!=null){s=i.k3.a
r=0
q=0
if(s>328){s-=128
r+=64}p.hv(new A.kf(s))
if(i.k3.b>96+p.gbL(p)+12)q+=96
a.gbC(a).ke(p,b.U(0,new A.v(r,q)))}}catch(j){}}}
A.tt.prototype={
F(){return"FlexFit."+this.b}}
A.dn.prototype={
i(a){return this.pO(0)+"; flex="+A.h(this.e)+"; fit="+A.h(this.f)}}
A.ud.prototype={
F(){return"MainAxisSize."+this.b}}
A.m0.prototype={
F(){return"MainAxisAlignment."+this.b}}
A.jK.prototype={
F(){return"CrossAxisAlignment."+this.b}}
A.oX.prototype={
ej(a){if(!(a.e instanceof A.dn))a.e=new A.dn(null,null,B.k)},
ez(a){if(this.M===B.aq)return this.Ic(a)
return this.a1b(a)},
q5(a){switch(this.M.a){case 0:return a.b
case 1:return a.a}},
q6(a){switch(this.M.a){case 0:return a.a
case 1:return a.b}},
c3(a){var s
if(this.ar===B.nj)return B.W
s=this.Dz(a,A.afK())
switch(this.M.a){case 0:return a.bs(new A.a_(s.a,s.b))
case 1:return a.bs(new A.a_(s.b,s.a))}},
Dz(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.M===B.aq?a2.b:a2.d,a0=a<1/0,a1=c.av$
for(s=t.uc,r=a2.b,q=a2.d,p=b,o=0,n=0,m=0;a1!=null;){l=a1.e
l.toString
s.a(l)
k=l.e
if(k==null)k=0
if(k>0){o+=k
p=a1}else{if(c.ar===B.ni)switch(c.M.a){case 0:j=A.nE(q,b)
break
case 1:j=A.nE(b,r)
break
default:j=b}else switch(c.M.a){case 0:j=new A.aR(0,1/0,0,q)
break
case 1:j=new A.aR(0,r,0,1/0)
break
default:j=b}i=a3.$2(a1,j)
m+=c.q6(i)
n=Math.max(n,A.kX(c.q5(i)))}a1=l.an$}h=Math.max(0,(a0?a:0)-m)
if(o>0){g=a0?h/o:0/0
a1=c.av$
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
switch((l==null?B.ny:l).a){case 0:if(d.b!==d)A.X(A.a_y(d.a))
d.b=e
break
case 1:if(d.b!==d)A.X(A.a_y(d.a))
d.b=0
break}if(c.ar===B.ni)switch(c.M.a){case 0:l=d.b
if(l===d)A.X(A.fV(d.a))
j=new A.aR(l,e,q,q)
break
case 1:l=d.b
if(l===d)A.X(A.fV(d.a))
j=new A.aR(r,r,l,e)
break
default:j=b}else switch(c.M.a){case 0:l=d.b
if(l===d)A.X(A.fV(d.a))
j=new A.aR(l,e,0,q)
break
case 1:l=d.b
if(l===d)A.X(A.fV(d.a))
j=new A.aR(0,r,l,e)
break
default:j=b}i=a3.$2(a1,j)
m+=c.q6(i)
f+=e
n=Math.max(n,A.kX(c.q5(i)))}l=a1.e
l.toString
a1=s.a(l).an$}}return new A.abi(a0&&c.I===B.n?a:m,n,m)},
bB(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.k.a(A.x.prototype.gY.call(a)),a1=a.Dz(a0,A.afL()),a2=a1.a,a3=a1.b
if(a.ar===B.nj){s=a.av$
for(r=t.uc,q=0,p=0,o=0;s!=null;){n=a.bz
n.toString
m=s.ug(n,!0)
if(m!=null){q=Math.max(q,m)
p=Math.max(m,p)
o=Math.max(s.k3.b-m,o)
a3=Math.max(p+o,a3)}n=s.e
n.toString
s=r.a(n).an$}}else q=0
switch(a.M.a){case 0:r=a.k3=a0.bs(new A.a_(a2,a3))
a2=r.a
a3=r.b
break
case 1:r=a.k3=a0.bs(new A.a_(a3,a2))
a2=r.b
a3=r.a
break}l=a2-a1.c
a.c7=Math.max(0,-l)
k=Math.max(0,l)
j=A.b5("leadingSpace")
i=A.b5("betweenSpace")
r=A.anN(a.M,a.ag,a.aY)
h=r===!1
switch(a.u.a){case 0:j.sc_(0)
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
switch(d.a){case 0:case 1:if(A.anN(A.aA2(a.M),a.ag,a.aY)===(d===B.ab))c=0
else{d=s.k3
d.toString
c=a3-a.q5(d)}break
case 2:d=s.k3
d.toString
c=n-a.q5(d)/2
break
case 3:c=0
break
case 4:if(a.M===B.aq){d=a.bz
d.toString
m=s.ug(d,!0)
c=m!=null?q-m:0}else c=0
break
default:c=null}if(h){d=s.k3
d.toString
g-=a.q6(d)}switch(a.M.a){case 0:e.a=new A.v(g,c)
break
case 1:e.a=new A.v(c,g)
break}if(h){d=i.b
if(d===i)A.X(A.fV(f))
g-=d}else{d=s.k3
d.toString
d=a.q6(d)
b=i.b
if(b===i)A.X(A.fV(f))
g+=d+b}s=e.an$}},
cK(a,b){return this.ya(a,b)},
aH(a,b){var s,r,q,p=this
if(!(p.c7>1e-10)){p.o4(a,b)
return}s=p.k3
if(s.gR(s))return
s=p.c8
r=p.cx
r===$&&A.b()
q=p.k3
s.saF(0,a.kA(r,b,new A.A(0,0,0+q.a,0+q.b),p.ga1c(),p.ce,s.a))},
m(){this.c8.saF(0,null)
this.Pv()},
iR(a){var s
switch(this.ce.a){case 0:return null
case 1:case 2:case 3:if(this.c7>1e-10){s=this.k3
s=new A.A(0,0,0+s.a,0+s.b)}else s=null
return s}},
bW(){var s=this.Ov()
return s}}
A.abi.prototype={}
A.P2.prototype={
ap(a){var s,r,q
this.en(a)
s=this.av$
for(r=t.uc;s!=null;){s.ap(a)
q=s.e
q.toString
s=r.a(q).an$}},
ae(a){var s,r,q
this.dE(0)
s=this.av$
for(r=t.uc;s!=null;){s.ae(0)
q=s.e
q.toString
s=r.a(q).an$}}}
A.P3.prototype={}
A.yt.prototype={
m(){var s,r,q
for(s=this.IL$,r=s.length,q=0;q<r;++q)s[q].m()
this.hQ()},
eK(){this.Ou()}}
A.IM.prototype={
VD(){var s=this
if(s.M!=null)return
s.M=s.ea
s.u=!1},
EX(){this.u=this.M=null
this.ah()},
sf4(a,b){var s=this,r=s.I
if(b==r)return
if(b!=null&&r!=null&&b.JH(r)){b.m()
return}r=s.I
if(r!=null)r.m()
s.I=b
s.ah()
if(s.ag==null||s.aY==null)s.a5()},
sbg(a,b){if(b==this.ag)return
this.ag=b
this.a5()},
sbL(a,b){if(b==this.aY)return
this.aY=b
this.a5()},
sMa(a,b){if(b===this.bz)return
this.bz=b
this.a5()},
Zk(){this.c7=null},
sau(a,b){return},
smm(a,b){return},
sm3(a){if(a===this.bP)return
this.bP=a
this.ah()},
sa04(a){return},
syM(a){if(a==this.e9)return
this.e9=a
this.ah()},
se4(a){if(a.k(0,this.ea))return
this.ea=a
this.EX()},
sa5d(a,b){if(b===this.dv)return
this.dv=b
this.ah()},
sa_H(a){return},
sz8(a){if(a===this.eC)return
this.eC=a
this.ah()},
sa4_(a){return},
sbE(a){if(this.eD==a)return
this.eD=a
this.EX()},
sz9(a){return},
Gg(a){var s,r,q=this,p=q.ag
a=A.nE(q.aY,p).on(a)
p=q.I
if(p==null)return new A.a_(A.H(0,a.a,a.b),A.H(0,a.c,a.d))
p=p.gbg(p)
s=q.bz
r=q.I
return a.nY(new A.a_(p/s,r.gbL(r)/q.bz))},
jb(a){return!0},
c3(a){return this.Gg(a)},
bB(){this.k3=this.Gg(t.k.a(A.x.prototype.gY.call(this)))},
ap(a){this.en(a)},
ae(a){this.dE(0)},
aH(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(d.I==null)return
d.VD()
s=a.gbC(a)
r=d.k3
q=b.a
p=b.b
o=r.a
r=r.b
n=d.I
n.toString
m=d.ar
l=d.bz
k=d.c7
j=d.e9
i=d.M
i.toString
h=d.j5
g=d.dv
f=d.u
f.toString
e=d.eC
A.aoF(i,s,h,k,m,d.bP,j,f,n,e,!1,1,new A.A(q,p,q+o,p+r),g,l)},
m(){var s=this.I
if(s!=null)s.m()
this.I=null
this.hQ()}}
A.r6.prototype={
i(a){return"AnnotationEntry(annotation: "+this.a.i(0)+", localPosition: "+this.b.i(0)+")"}}
A.Am.prototype={}
A.u1.prototype={
h3(){},
qV(a){var s,r=this
r.e+=a
s=t.ow
if(s.a(A.I.prototype.gaJ.call(r,r))!=null)s.a(A.I.prototype.gaJ.call(r,r)).qV(a)},
nf(a){var s,r,q
for(s=this.d,s=A.aA(s.gb0(s),!0,t.M),r=s.length,q=0;q<r;++q)s[q].$0()},
m(){var s=this.z
if(s!=null)s.m()
this.z=null},
d0(){if(this.y)return
this.y=!0},
shn(a){var s,r=this,q=r.z
if(q!=null)q.m()
r.z=a
q=t.ow
if(q.a(A.I.prototype.gaJ.call(r,r))!=null){q.a(A.I.prototype.gaJ.call(r,r)).toString
s=!0}else s=!1
if(s)q.a(A.I.prototype.gaJ.call(r,r)).d0()},
u7(){this.y=this.y||!1},
iU(a){var s
this.d0()
s=a.e
if(s!==0)this.qV(-s)
this.uE(a)},
mq(a){var s,r,q=this,p=t.ow.a(A.I.prototype.gaJ.call(q,q))
if(p!=null){s=q.as
r=q.Q
if(s==null)p.CW=r
else s.Q=r
r=q.Q
if(r==null)p.cx=s
else r.as=s
q.Q=q.as=null
p.iU(q)
q.w.saF(0,null)}},
eE(a,b,c){return!1},
IR(a,b,c){var s=A.a([],c.h("y<r6<0>>"))
this.eE(new A.Am(s,c.h("Am<0>")),b,!0,c)
return s.length===0?null:B.b.gJ(s).a},
R4(a){var s,r=this
if(!r.y&&r.z!=null){s=r.z
s.toString
a.a_3(s)
return}r.ft(a)
r.y=!1},
bW(){var s=this.Nf()
return s+(this.b==null?" DETACHED":"")}}
A.F8.prototype={
saF(a,b){var s=this.a
if(b==null?s==null:b===s)return
if(s!=null)if(--s.x===0)s.m()
this.a=b
if(b!=null)++b.x},
i(a){var s=this.a
return"LayerHandle("+(s!=null?J.dF(s):"DISPOSED")+")"}}
A.I9.prototype={
sKq(a){var s
this.d0()
s=this.cx
if(s!=null)s.m()
this.cx=a},
m(){this.sKq(null)
this.Ca()},
ft(a){var s=this.cx
s.toString
a.a_0(B.k,s,this.cy,this.db)},
eE(a,b,c){return!1}}
A.I2.prototype={
ft(a){a.a__(this.cx,this.CW)
a.My(this.cy)
a.Mr(!1)
a.Mq(!1)},
eE(a,b,c){return!1}}
A.ef.prototype={
nf(a){var s
this.NG(a)
if(!a)return
s=this.CW
for(;s!=null;){s.nf(!0)
s=s.Q}},
a_z(a){var s=this
s.u7()
s.ft(a)
if(s.e>0)s.nf(!0)
s.y=!1
return a.aP()},
m(){this.An()
this.d.X(0)
this.Ca()},
u7(){var s,r=this
r.NH()
s=r.CW
for(;s!=null;){s.u7()
r.y=r.y||s.y
s=s.Q}},
eE(a,b,c,d){var s,r,q
for(s=this.cx,r=a.a;s!=null;s=s.as){if(s.eE(a,b,!0,d))return!0
q=r.length
if(q!==0)return!1}return!1},
ap(a){var s
this.uD(a)
s=this.CW
for(;s!=null;){s.ap(a)
s=s.Q}},
ae(a){var s
this.dE(0)
s=this.CW
for(;s!=null;){s.ae(0)
s=s.Q}this.nf(!1)},
he(a,b){var s,r=this
r.d0()
s=b.e
if(s!==0)r.qV(s)
r.BS(b)
s=b.as=r.cx
if(s!=null)s.Q=b
r.cx=b
if(r.CW==null)r.CW=b
b.w.saF(0,b)},
An(){var s,r,q,p=this,o=p.CW
for(s=t.ow;o!=null;o=r){r=o.Q
o.Q=o.as=null
p.d0()
q=o.e
if(q!==0){q=-q
p.e+=q
if(s.a(A.I.prototype.gaJ.call(p,p))!=null)s.a(A.I.prototype.gaJ.call(p,p)).qV(q)}p.uE(o)
o.w.saF(0,null)}p.cx=p.CW=null},
ft(a){this.iM(a)},
iM(a){var s=this.CW
for(;s!=null;){s.R4(a)
s=s.Q}}}
A.hK.prototype={
sig(a,b){if(!b.k(0,this.p1))this.d0()
this.p1=b},
eE(a,b,c,d){return this.mV(a,b.aa(0,this.p1),!0,d)},
ft(a){var s=this,r=s.p1
s.shn(a.Kz(r.a,r.b,t.cV.a(s.z)))
s.iM(a)
a.fO()}}
A.nN.prototype={
eE(a,b,c,d){if(!this.p1.C(0,b))return!1
return this.mV(a,b,!0,d)},
ft(a){var s=this,r=s.p1
r.toString
s.shn(a.a4J(r,s.p2,t.CW.a(s.z)))
s.iM(a)
a.fO()}}
A.rA.prototype={
eE(a,b,c,d){if(!this.p1.C(0,b))return!1
return this.mV(a,b,!0,d)},
ft(a){var s=this,r=s.p1
r.toString
s.shn(a.a4H(r,s.p2,t.cB.a(s.z)))
s.iM(a)
a.fO()}}
A.rz.prototype={
eE(a,b,c,d){if(!this.p1.C(0,b))return!1
return this.mV(a,b,!0,d)},
ft(a){var s=this,r=s.p1
r.toString
s.shn(a.a4G(r,s.p2,t.xS.a(s.z)))
s.iM(a)
a.fO()}}
A.ky.prototype={
sbl(a,b){var s=this
if(b.k(0,s.ac))return
s.ac=b
s.bd=!0
s.d0()},
ft(a){var s,r,q=this
q.aX=q.ac
if(!q.p1.k(0,B.k)){s=q.p1
s=A.ux(s.a,s.b,0)
r=q.aX
r.toString
s.cA(0,r)
q.aX=s}q.shn(a.a4M(q.aX.a,t.Al.a(q.z)))
q.iM(a)
a.fO()},
Zc(a){var s,r=this
if(r.bd){s=r.ac
s.toString
r.bk=A.H6(A.ahx(s))
r.bd=!1}s=r.bk
if(s==null)return null
return A.cr(s,a)},
eE(a,b,c,d){var s=this.Zc(b)
if(s==null)return!1
return this.O3(a,s,!0,d)}}
A.v0.prototype={
sHr(a,b){var s=this,r=s.ac
if(b!=r){if(b===255||r===255)s.shn(null)
s.ac=b
s.d0()}},
ft(a){var s,r,q,p=this
if(p.CW==null){p.shn(null)
return}s=p.ac
s.toString
r=p.p1
q=p.z
if(s<255)p.shn(a.a4K(s,r,t.i6.a(q)))
else p.shn(a.Kz(r.a,r.b,t.cV.a(q)))
p.iM(a)
a.fO()}}
A.we.prototype={
ft(a){var s,r,q=this,p=q.p1
p.toString
s=q.p2
s.toString
r=q.p3
r.toString
q.shn(a.a4L(p,s,r,t.fT.a(q.z)))
q.iM(a)
a.fO()}}
A.r5.prototype={
eE(a,b,c,d){var s,r,q,p=this,o=p.mV(a,b,!0,d),n=a.a
if(n.length!==0&&!0)return o
s=p.p2
if(s!=null){r=p.p3
q=r.a
r=r.b
s=!new A.A(q,r,q+s.a,r+s.b).C(0,b)}else s=!1
if(s)return o
if(A.aD(p.$ti.c)===A.aD(d)){o=o||!1
n.push(new A.r6(d.a(p.p1),b.aa(0,p.p3),d.h("r6<0>")))}return o}}
A.Nj.prototype={}
A.NO.prototype={
a5e(a){var s=this.a
this.a=a
return s},
i(a){var s="<optimized out>#",r=A.bL(this.b),q=this.a.a
return s+A.bL(this)+"("+("latestEvent: "+(s+r))+", "+("annotations: [list of "+q+"]")+")"}}
A.NP.prototype={
gi_(a){var s=this.c
return s.gi_(s)}}
A.Hg.prototype={
EB(a){var s,r,q,p,o,n,m=t.mC,l=A.iO(null,null,null,m,t.rA)
for(s=a.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q){p=s[q]
o=p.a
if(m.b(o)){n=p.b
n.toString
l.l(0,o,n)}}return l},
SZ(a,b){var s=a.b,r=s.gbv(s)
s=a.b
if(!this.b.T(0,s.gi_(s)))return A.iO(null,null,null,t.mC,t.rA)
return this.EB(b.$1(r))},
Eo(a){var s,r
A.aui(a)
s=a.b
r=A.n(s).h("b9<1>")
this.a.a27(a.gi_(a),a.d,A.oz(new A.b9(s,r),new A.a0v(),r.h("r.E"),t.oR))},
a5X(a,b){var s,r,q,p,o
if(a.gc9(a)!==B.c9)return
if(t.zs.b(a))return
s=t.yg.b(a)?A.akz():b.$0()
r=a.gi_(a)
q=this.b
p=q.j(0,r)
if(!A.auj(p,a))return
o=q.a
new A.a0y(this,p,a,r,s).$0()
if(o!==0!==(q.a!==0))this.aB()},
a5R(a){new A.a0w(this,a).$0()}}
A.a0v.prototype={
$1(a){return a.gIa(a)},
$S:228}
A.a0y.prototype={
$0(){var s=this
new A.a0x(s.a,s.b,s.c,s.d,s.e).$0()},
$S:0}
A.a0x.prototype={
$0(){var s,r,q,p,o,n=this,m=null,l=n.b
if(l==null){s=n.c
if(t.yg.b(s))return
n.a.b.l(0,n.d,new A.NO(A.iO(m,m,m,t.mC,t.rA),s))}else{s=n.c
if(t.yg.b(s))n.a.b.A(0,s.gi_(s))}r=n.a
q=r.b.j(0,n.d)
if(q==null){l.toString
q=l}p=q.b
q.b=s
o=t.yg.b(s)?A.iO(m,m,m,t.mC,t.rA):r.EB(n.e)
r.Eo(new A.NP(q.a5e(o),o,p,s))},
$S:0}
A.a0w.prototype={
$0(){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.b,r=r.gb0(r),r=new A.e1(J.av(r.a),r.b),q=this.b,p=A.n(r).z[1];r.t();){o=r.a
if(o==null)o=p.a(o)
n=o.b
m=s.SZ(o,q)
l=o.a
o.a=m
s.Eo(new A.NP(l,m,n,null))}},
$S:0}
A.a0t.prototype={
$2(a,b){var s
if(!this.a.T(0,a))if(a.gAR()&&a.gzP(a)!=null){s=a.gzP(a)
s.toString
s.$1(this.b.aK(this.c.j(0,a)))}},
$S:229}
A.a0u.prototype={
$1(a){return!this.a.T(0,a)},
$S:230}
A.Rs.prototype={}
A.cg.prototype={
ae(a){},
i(a){return"<none>"}}
A.ke.prototype={
eJ(a,b){var s,r=this
if(a.gdw()){r.mU()
if(!a.cy){s=a.ay
s===$&&A.b()
s=!s}else s=!0
if(s)A.alh(a,null,!0)
else if(a.db)A.auC(a)
s=a.ch.a
s.toString
t.cY.a(s)
s.sig(0,b)
r.xD(s)}else{s=a.ay
s===$&&A.b()
if(s){a.ch.saF(0,null)
a.wz(r,b)}else a.wz(r,b)}},
xD(a){a.mq(0)
this.a.he(0,a)},
gbC(a){var s,r,q=this
if(q.e==null){q.c=A.auG(q.b)
s=$.as()
r=s.a0S()
q.d=r
q.e=s.a0L(r,null)
r=q.c
r.toString
q.a.he(0,r)}s=q.e
s.toString
return s},
mU(){var s,r=this
if(r.e==null)return
s=r.c
s.toString
s.sKq(r.d.a1y())
r.e=r.d=r.c=null},
Bz(){var s=this.c
if(s!=null)if(!s.cy){s.cy=!0
s.d0()}},
p8(a,b,c,d){var s,r=this
if(a.CW!=null)a.An()
r.mU()
r.xD(a)
s=r.a0N(a,d==null?r.b:d)
b.$2(s,c)
s.mU()},
A9(a,b,c){return this.p8(a,b,c,null)},
a0N(a,b){return new A.ke(a,b)},
kA(a,b,c,d,e,f){var s,r,q=this
if(e===B.h){d.$2(q,b)
return null}s=c.d4(b)
if(a){if(f==null){r=new A.nN(B.R,A.z(t.S,t.M),A.aq())
r.h3()}else r=f
if(!s.k(0,r.p1)){r.p1=s
r.d0()}if(e!==r.p2){r.p2=e
r.d0()}q.p8(r,d,b,s)
return r}else{q.a_Y(s,e,s,new A.a1o(q,d,b))
return null}},
a4I(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.h){e.$2(p,b)
return null}s=c.d4(b)
r=d.d4(b)
if(a){if(g==null){q=new A.rA(B.n5,A.z(t.S,t.M),A.aq())
q.h3()}else q=g
if(!r.k(0,q.p1)){q.p1=r
q.d0()}if(f!==q.p2){q.p2=f
q.d0()}p.p8(q,e,b,s)
return q}else{p.a_W(r,f,s,new A.a1n(p,e,b))
return null}},
Ky(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.h){e.$2(p,b)
return null}s=c.d4(b)
r=d.d4(b)
if(a){if(g==null){q=new A.rz(B.n5,A.z(t.S,t.M),A.aq())
q.h3()}else q=g
if(r!==q.p1){q.p1=r
q.d0()}if(f!==q.p2){q.p2=f
q.d0()}p.p8(q,e,b,s)
return q}else{p.a_V(r,f,s,new A.a1m(p,e,b))
return null}},
p9(a,b,c,d,e){var s,r=this,q=b.a,p=b.b,o=A.ux(q,p,0)
o.cA(0,c)
o.az(0,-q,-p)
if(a){s=e==null?A.ami(null):e
s.sbl(0,o)
r.p8(s,d,b,A.al1(o,r.b))
return s}else{q=r.gbC(r)
q.ct(0)
q.ad(0,o.a)
d.$2(r,b)
r.gbC(r).cp(0)
return null}},
a4N(a,b,c,d){return this.p9(a,b,c,d,null)},
Aa(a,b,c,d){var s=d==null?A.ale():d
s.sHr(0,b)
s.sig(0,a)
this.A9(s,c,B.k)
return s},
i(a){return"PaintingContext#"+A.eM(this)+"(layer: "+this.a.i(0)+", canvas bounds: "+this.b.i(0)+")"}}
A.a1o.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.a1n.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.a1m.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.UE.prototype={}
A.a4H.prototype={
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
A.Ia.prototype={
ms(){this.a.$0()},
sa5s(a){var s=this.e
if(s===a)return
if(s!=null)s.ae(0)
this.e=a
a.ap(this)},
a1X(){var s,r,q,p,o,n,m,l,k,j,i,h=this
try{for(p=t.W,o=t.By;n=h.r,n.length!==0;){s=n
h.r=A.a([],o)
n=s
m=new A.a1A()
if(!!n.immutable$list)A.X(A.N("sort"))
l=n.length-1
if(l-0<=32)A.JW(n,0,l,m)
else A.JV(n,0,l,m)
for(r=0;r<J.bE(s);++r){if(h.f){h.f=!1
n=h.r
if(n.length!==0){m=s
l=r
k=J.bE(s)
A.da(l,k,J.bE(m),null,null)
j=A.aU(m)
i=new A.eP(m,l,k,j.h("eP<1>"))
i.pU(m,l,k,j.c)
B.b.K(n,i)
break}}q=J.aN(s,r)
if(q.z){n=q
n=p.a(A.I.prototype.gbq.call(n))===h}else n=!1
if(n)q.VY()}h.f=!1}}finally{h.f=!1}},
SH(a){try{a.$0()}finally{this.f=!0}},
a1W(){var s,r,q,p,o=this.y
B.b.dm(o,new A.a1z())
for(s=o.length,r=t.W,q=0;q<o.length;o.length===s||(0,A.Q)(o),++q){p=o[q]
if(p.CW&&r.a(A.I.prototype.gbq.call(p))===this)p.GO()}B.b.X(o)},
a1Y(){var s,r,q,p,o,n,m,l,k
try{s=this.z
this.z=A.a([],t.By)
for(q=s,J.agt(q,new A.a1B()),p=q.length,o=t.W,n=t.cY,m=0;m<q.length;q.length===p||(0,A.Q)(q),++m){r=q[m]
if(r.cy||r.db){l=r
l=o.a(A.I.prototype.gbq.call(l))===this}else l=!1
if(l)if(r.ch.a.b!=null)if(r.cy)A.alh(r,null,!1)
else{l=r
k=l.ch.a
k.toString
l.pm(n.a(k))
l.db=!1}else r.YK()}}finally{}},
a1z(a){var s,r=this
if(++r.at===1){s=t.ju
r.as=new A.wb(r.c,A.b7(s),A.z(t.S,s),A.b7(s),$.bu())
r.b.$0()}if(a!=null)r.as.S(0,a)
return new A.a4H(r,a)},
IF(){return this.a1z(null)},
a1Z(){var s,r,q,p,o,n,m,l,k=this
if(k.as==null)return
try{q=k.ay
p=A.aA(q,!0,A.n(q).c)
B.b.dm(p,new A.a1C())
s=p
q.X(0)
for(q=s,o=q.length,n=t.W,m=0;m<q.length;q.length===o||(0,A.Q)(q),++m){r=q[m]
if(r.dy){l=r
l=n.a(A.I.prototype.gbq.call(l))===k}else l=!1
if(l)r.Zx()}k.as.Mo()}finally{}}}
A.a1A.prototype={
$2(a,b){return a.a-b.a},
$S:42}
A.a1z.prototype={
$2(a,b){return a.a-b.a},
$S:42}
A.a1B.prototype={
$2(a,b){return b.a-a.a},
$S:42}
A.a1C.prototype={
$2(a,b){return a.a-b.a},
$S:42}
A.x.prototype={
aE(){var s=this
s.cx=s.gdw()||s.gk_()
s.ay=s.gdw()},
eK(){var s=this
s.a5()
s.kt()
s.ah()
s.b_()
s.aU(new A.a2P())},
m(){this.ch.saF(0,null)},
ej(a){if(!(a.e instanceof A.cg))a.e=new A.cg()},
hV(a){var s=this
s.ej(a)
s.a5()
s.kt()
s.b_()
s.BS(a)},
iU(a){var s=this
a.Dk()
a.e.ae(0)
a.e=null
s.uE(a)
s.a5()
s.kt()
s.b_()},
aU(a){},
qE(a,b,c){A.dJ(new A.bz(b,c,"rendering library",A.bk("during "+a+"()"),new A.a2L(this),!1))},
ap(a){var s=this
s.uD(a)
if(s.z&&s.Q!=null){s.z=!1
s.a5()}if(s.CW){s.CW=!1
s.kt()}if(s.cy&&s.ch.a!=null){s.cy=!1
s.ah()}if(s.dy&&s.gwU().a){s.dy=!1
s.b_()}},
gY(){var s=this.at
if(s==null)throw A.c(A.a6("A RenderObject does not have any constraints before it has been laid out."))
return s},
a5(){var s,r=this
if(r.z)return
s=r.Q
if(s==null){r.z=!0
if(r.c!=null)r.tu()
return}if(s!==r)r.tu()
else{r.z=!0
s=t.W
if(s.a(A.I.prototype.gbq.call(r))!=null){s.a(A.I.prototype.gbq.call(r)).r.push(r)
s.a(A.I.prototype.gbq.call(r)).ms()}}},
tu(){this.z=!0
var s=this.c
s.toString
t.d.a(s)
if(!this.as)s.a5()},
Dk(){var s=this
if(s.Q!==s){s.Q=null
s.aU(A.aoC())}},
XC(){var s,r,q=this,p=q.Q
if(p===q)return
s=t.B2.a(q.c)
r=s==null?null:s.Q
if(r!=p){q.Q=r
q.aU(A.aoD())}},
VY(){var s,r,q,p=this
try{p.bB()
p.b_()}catch(q){s=A.ag(q)
r=A.aB(q)
p.qE("performLayout",s,r)}p.z=!1
p.ah()},
co(a,b){var s,r,q,p,o,n,m,l=this
if(!b||l.gjH()||a.gJO()||!(l.c instanceof A.x))o=l
else{n=l.c
n.toString
n=t.d.a(n).Q
n.toString
o=n}if(!l.z&&a.k(0,l.at)){if(o!==l.Q){l.Q=o
l.aU(A.aoD())}return}l.at=a
n=l.Q
if(n!=null&&o!==n)l.aU(A.aoC())
l.Q=o
if(l.gjH())try{l.p5()}catch(m){s=A.ag(m)
r=A.aB(m)
l.qE("performResize",s,r)}try{l.bB()
l.b_()}catch(m){q=A.ag(m)
p=A.aB(m)
l.qE("performLayout",q,p)}l.z=!1
l.ah()},
gjH(){return!1},
JF(a,b){var s=this
s.as=!0
try{t.W.a(A.I.prototype.gbq.call(s)).SH(new A.a2O(s,a,b))}finally{s.as=!1}},
gdw(){return!1},
gk_(){return!1},
pm(a){return a==null?A.aux(B.k):a},
gaF(a){return this.ch.a},
kt(){var s,r,q,p=this
if(p.CW)return
s=p.CW=!0
r=p.c
if(r instanceof A.x){if(r.CW)return
q=p.ay
q===$&&A.b()
if((q?!p.gdw():s)&&!r.gdw()){r.kt()
return}}s=t.W
if(s.a(A.I.prototype.gbq.call(p))!=null)s.a(A.I.prototype.gbq.call(p)).y.push(p)},
GO(){var s,r,q=this
if(!q.CW)return
s=q.cx
s===$&&A.b()
q.cx=!1
q.aU(new A.a2M(q))
if(q.gdw()||q.gk_())q.cx=!0
if(!q.gdw()){r=q.ay
r===$&&A.b()}else r=!1
if(r){q.db=q.cy=!1
s=t.W.a(A.I.prototype.gbq.call(q))
if(s!=null)B.b.A(s.z,q)
q.CW=!1
q.ah()}else if(s!==q.cx){q.CW=!1
q.ah()}else q.CW=!1},
ah(){var s,r=this
if(r.cy)return
r.cy=!0
if(r.gdw()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=t.W
if(s.a(A.I.prototype.gbq.call(r))!=null){s.a(A.I.prototype.gbq.call(r)).z.push(r)
s.a(A.I.prototype.gbq.call(r)).ms()}}else{s=r.c
if(s instanceof A.x)s.ah()
else{s=t.W
if(s.a(A.I.prototype.gbq.call(r))!=null)s.a(A.I.prototype.gbq.call(r)).ms()}}},
a3Y(){var s,r=this
if(r.db||r.cy)return
r.db=!0
if(r.gdw()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=t.W
if(s.a(A.I.prototype.gbq.call(r))!=null){s.a(A.I.prototype.gbq.call(r)).z.push(r)
s.a(A.I.prototype.gbq.call(r)).ms()}}else r.ah()},
YK(){var s,r=this.c
for(;r instanceof A.x;){if(r.gdw()){s=r.ch.a
if(s==null)break
if(s.b!=null)break
r.cy=!0}r=r.c}},
wz(a,b){var s,r,q,p=this
if(p.z)return
p.db=p.cy=!1
p.ay=p.gdw()
try{p.aH(a,b)}catch(q){s=A.ag(q)
r=A.aB(q)
p.qE("paint",s,r)}},
aH(a,b){},
dc(a,b){},
kx(a){return!0},
bw(a,b){var s,r,q,p,o,n,m,l,k=b==null
if(k){s=t.W.a(A.I.prototype.gbq.call(this)).e
if(s instanceof A.x)b=s}r=A.a([],t.By)
q=t.d
p=this
while(p!==b){r.push(p)
o=p.c
o.toString
q.a(o)
p=o}if(!k){b.toString
r.push(b)}n=new A.bg(new Float64Array(16))
n.d2()
for(m=r.length-1;m>0;m=l){l=m-1
r[m].dc(r[l],n)}return n},
iR(a){return null},
yf(a){return null},
eB(a){},
ut(a){var s
if(t.W.a(A.I.prototype.gbq.call(this)).as==null)return
s=this.fr
if(s!=null&&!s.as)s.Mn(a)
else{s=this.c
if(s!=null)t.d.a(s).ut(a)}},
gwU(){var s,r=this
if(r.dx==null){s=A.pc()
r.dx=s
r.eB(s)}s=r.dx
s.toString
return s},
lD(){this.dy=!0
this.fr=null
this.aU(new A.a2N())},
b_(){var s,r,q,p,o,n,m=this
if(m.b==null||t.W.a(A.I.prototype.gbq.call(m)).as==null){m.dx=null
return}if(m.fr!=null){s=m.dx
s=s==null?null:s.a
r=s===!0}else r=!1
m.dx=null
q=m.gwU().a&&r
s=t.d
p=m
while(!0){if(!(!q&&p.c instanceof A.x))break
if(p!==m&&p.dy)break
p.dy=!0
o=p.c
o.toString
s.a(o)
if(o.dx==null){n=A.pc()
o.dx=n
o.eB(n)}q=o.dx.a
if(q&&o.fr==null)return
p=o}if(p!==m&&m.fr!=null&&m.dy)t.W.a(A.I.prototype.gbq.call(m)).ay.A(0,m)
if(!p.dy){p.dy=!0
s=t.W
if(s.a(A.I.prototype.gbq.call(m))!=null){s.a(A.I.prototype.gbq.call(m)).ay.D(0,p)
s.a(A.I.prototype.gbq.call(m)).ms()}}},
Zx(){var s,r,q,p,o,n,m=this,l=null
if(m.z)return
s=m.fr
if(s==null)s=l
else{s=t.aa.a(A.I.prototype.gaJ.call(s,s))
if(s==null)s=l
else s=s.at||s.as}r=t.sP.a(m.Eh(s===!0))
q=A.a([],t.V)
s=m.fr
p=s==null
o=p?l:s.x
n=p?l:s.y
s=p?l:s.z
r.nW(s==null?0:s,n,o,q)
B.b.gb6(q)},
Eh(a){var s,r,q,p,o,n,m,l,k=this,j={},i=k.gwU()
j.a=i.c
s=!i.d&&!i.a
r=t.yj
q=A.a([],r)
p=A.b7(t.sP)
k.fc(new A.a2K(j,k,a||i.p2,q,p,i,s))
for(o=A.ji(p,p.r),n=A.n(o).c;o.t();){m=o.d;(m==null?n.a(m):m).zn()}k.dy=!1
if(!(k.c instanceof A.x)){o=j.a
l=new A.Pn(A.a([],r),A.a([k],t.By),o)}else{o=j.a
if(s)l=new A.a9y(A.a([],r),o)
else{l=new A.Qe(a,i,A.a([],r),A.a([k],t.By),o)
if(i.a)l.x=!0}}l.K(0,q)
return l},
fc(a){this.aU(a)},
nO(a,b,c){a.jw(0,t.d1.a(c),b)},
i6(a,b){},
bW(){var s=A.bL(this)
return"<optimized out>#"+s},
i(a){return this.bW()},
ek(a,b,c,d){var s=this.c
if(s instanceof A.x)s.ek(a,b==null?this:b,c,d)},
mP(){return this.ek(B.aQ,null,B.v,null)},
kR(a,b){return this.ek(B.aQ,a,B.v,b)},
$iaj:1}
A.a2P.prototype={
$1(a){a.eK()},
$S:30}
A.a2L.prototype={
$0(){var s=A.a([],t.F),r=this.a
s.push(A.agP("The following RenderObject was being processed when the exception was fired",B.Fo,r))
s.push(A.agP("RenderObject",B.Fp,r))
return s},
$S:16}
A.a2O.prototype={
$0(){this.b.$1(this.c.a(this.a.gY()))},
$S:0}
A.a2M.prototype={
$1(a){var s
a.GO()
s=a.cx
s===$&&A.b()
if(s)this.a.cx=!0},
$S:30}
A.a2N.prototype={
$1(a){a.lD()},
$S:30}
A.a2K.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a.Eh(f.c)
if(e.a){B.b.X(f.d)
f.e.X(0)
if(!f.f.a)f.a.a=!0}for(s=e.gJw(),r=s.length,q=f.d,p=f.e,o=f.f,n=f.b,m=f.r,l=0;l<s.length;s.length===r||(0,A.Q)(s),++l){k=s[l]
q.push(k)
k.b.push(n)
k.a_9(o.ac)
if(o.b||!(n.c instanceof A.x)){k.zn()
continue}if(k.gk8()==null||m)continue
if(!o.JI(k.gk8()))p.D(0,k)
j=q.length-1
for(i=0;i<j;++i){h=q[i]
g=k.gk8()
g.toString
if(!g.JI(h.gk8())){p.D(0,k)
p.D(0,h)}}}},
$S:30}
A.aC.prototype={
saN(a){var s=this,r=s.u$
if(r!=null)s.iU(r)
s.u$=a
if(a!=null)s.hV(a)},
jr(){var s=this.u$
if(s!=null)this.Ak(s)},
aU(a){var s=this.u$
if(s!=null)a.$1(s)}}
A.dX.prototype={$icg:1}
A.aw.prototype={
gri(){return this.df$},
EJ(a,b){var s,r,q,p=this,o=a.e
o.toString
s=A.n(p).h("aw.1")
s.a(o);++p.df$
if(b==null){o=o.an$=p.av$
if(o!=null){o=o.e
o.toString
s.a(o).bR$=a}p.av$=a
if(p.cV$==null)p.cV$=a}else{r=b.e
r.toString
s.a(r)
q=r.an$
if(q==null){o.bR$=b
p.cV$=r.an$=a}else{o.an$=q
o.bR$=b
o=q.e
o.toString
s.a(o).bR$=r.an$=a}}},
z6(a,b,c){this.hV(b)
this.EJ(b,c)},
K(a,b){},
FC(a){var s,r,q,p,o=this,n=a.e
n.toString
s=A.n(o).h("aw.1")
s.a(n)
r=n.bR$
q=n.an$
if(r==null)o.av$=q
else{p=r.e
p.toString
s.a(p).an$=q}q=n.an$
if(q==null)o.cV$=r
else{q=q.e
q.toString
s.a(q).bR$=r}n.an$=n.bR$=null;--o.df$},
A(a,b){this.FC(b)
this.iU(b)},
ty(a,b){var s=this,r=a.e
r.toString
if(A.n(s).h("aw.1").a(r).bR$==b)return
s.FC(a)
s.EJ(a,b)
s.a5()},
jr(){var s,r,q,p=this.av$
for(s=A.n(this).h("aw.1");p!=null;){r=p.a
q=this.a
if(r<=q){p.a=q+1
p.jr()}r=p.e
r.toString
p=s.a(r).an$}},
aU(a){var s,r,q=this.av$
for(s=A.n(this).h("aw.1");q!=null;){a.$1(q)
r=q.e
r.toString
q=s.a(r).an$}},
ga1S(a){return this.av$},
a_O(a){var s=a.e
s.toString
return A.n(this).h("aw.1").a(s).bR$},
a_M(a){var s=a.e
s.toString
return A.n(this).h("aw.1").a(s).an$}}
A.Iw.prototype={
uW(){this.a5()}}
A.ad6.prototype={}
A.a9y.prototype={
K(a,b){B.b.K(this.b,b)},
gJw(){return this.b}}
A.n8.prototype={
gJw(){return A.a([this],t.yj)},
a_9(a){var s
if(a==null||a.a===0)return
s=this.c;(s==null?this.c=A.b7(t.xJ):s).K(0,a)}}
A.Pn.prototype={
nW(a,b,c,d){var s,r,q,p,o,n=this.b,m=B.b.gJ(n)
if(m.fr==null){s=B.b.gJ(n).gmO()
r=B.b.gJ(n)
r=t.W.a(A.I.prototype.gbq.call(r)).as
r.toString
q=$.agh()
q=new A.bW(null,0,s,B.a_,q.p2,q.e,q.p3,q.f,q.aX,q.p4,q.R8,q.RG,q.rx,q.ry,q.to,q.x2,q.xr,q.y1)
q.ap(r)
m.fr=q}m=B.b.gJ(n).fr
m.toString
m.saO(0,B.b.gJ(n).gjD())
p=A.a([],t.V)
for(n=this.e,s=n.length,o=0;o<n.length;n.length===s||(0,A.Q)(n),++o)n[o].nW(0,b,c,p)
m.jw(0,p,null)
d.push(m)},
gk8(){return null},
zn(){},
K(a,b){B.b.K(this.e,b)}}
A.Qe.prototype={
nW(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(!h.x){s=h.b
B.b.gJ(s).fr=null
for(r=h.w,q=r.length,p=A.ao(s),o=p.c,p=p.h("eP<1>"),n=0;n<r.length;r.length===q||(0,A.Q)(r),++n){m=r[n]
l=new A.eP(s,1,g,p)
l.pU(s,1,g,o)
B.b.K(m.b,l)
m.nW(a+h.f.x2,b,c,d)}return}s=h.b
if(s.length>1){k=new A.ad7()
k.S4(c,b,s)}else k=g
r=h.e
q=!r
if(q){if(k==null)p=g
else{p=k.d
p===$&&A.b()
if(!p.gR(p)){p=k.c
p===$&&A.b()
p=p.JS()}else p=!0}p=p===!0}else p=!1
if(p)return
p=B.b.gJ(s)
if(p.fr==null)p.fr=A.a4J(g,B.b.gJ(s).gmO())
j=B.b.gJ(s).fr
j.sJL(r)
j.dx=h.c
j.z=a
if(a!==0){h.DW()
r=h.f
r.si1(0,r.x2+a)}if(k!=null){r=k.d
r===$&&A.b()
j.saO(0,r)
r=k.c
r===$&&A.b()
j.sbl(0,r)
j.x=k.b
j.y=k.a
if(q&&k.e){h.DW()
h.f.b7(B.ls,!0)}}i=A.a([],t.V)
for(r=h.w,q=r.length,n=0;n<r.length;r.length===q||(0,A.Q)(r),++n){m=r[n]
p=j.x
m.nW(0,j.y,p,i)}r=h.f
if(r.a)B.b.gJ(s).nO(j,h.f,i)
else j.jw(0,i,r)
d.push(j)},
gk8(){return this.x?null:this.f},
K(a,b){var s,r,q,p,o,n,m=this
for(s=b.length,r=m.w,q=0;q<b.length;b.length===s||(0,A.Q)(b),++q){p=b[q]
r.push(p)
if(p.gk8()==null)continue
if(!m.r){m.f=m.f.a0r()
m.r=!0}o=m.f
n=p.gk8()
n.toString
o.jZ(n)}},
DW(){var s,r,q=this
if(!q.r){s=q.f
r=A.pc()
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
r.aX=s.aX
r.ac=s.ac
r.y2=s.y2
r.ao=s.ao
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
zn(){this.x=!0}}
A.ad7.prototype={
S4(a,b,c){var s,r,q,p,o,n,m=this,l=new A.bg(new Float64Array(16))
l.d2()
m.c=l
m.b=a
m.a=b
for(s=c.length-1;s>0;){r=c[s];--s
q=c[s]
a=r.yf(q)
if(a!=null){m.b=a
m.a=A.amK(m.a,r.iR(q))}else m.b=A.amK(m.b,r.iR(q))
l=$.apX()
l.d2()
A.axk(r,q,m.c,l)
m.b=A.amL(m.b,l)
m.a=A.amL(m.a,l)}p=B.b.gJ(c)
l=m.b
l=l==null?p.gjD():l.f5(p.gjD())
m.d=l
o=m.a
if(o!=null){n=o.f5(l)
if(n.gR(n)){l=m.d
l=!l.gR(l)}else l=!1
m.e=l
if(!l)m.d=n}}}
A.P5.prototype={}
A.i2.prototype={
i(a){var s=A.a(["offset="+this.a.i(0)],t.s)
s.push(this.pO(0))
return B.b.bf(s,"; ")}}
A.vC.prototype={
ej(a){if(!(a.e instanceof A.i2))a.e=new A.i2(null,null,B.k)},
su2(a,b){var s=this,r=s.M
switch(r.d.b3(0,b).a){case 0:case 1:return
case 2:r.su2(0,b)
s.I=s.u=null
s.vL(b)
s.ah()
s.b_()
break
case 3:r.su2(0,b)
s.I=s.u=s.bP=null
s.vL(b)
s.a5()
s.wG()
s.DP()
s.H3()
break}},
spb(a){var s=this
if(a==s.ag)return
s.wG()
s.DP()
s.ag=a
s.H3()},
H3(){var s,r,q=this
if(q.ag==null)return
s=q.ar
if(s==null)s=q.ar=q.TC()
r=q.ag
B.b.Z(s,r.gfq(r))},
wG(){var s,r=this.ag
if(r==null||this.ar==null)return
s=this.ar
s.toString
B.b.Z(s,r.gAm(r))},
TC(){var s,r,q,p,o=this.M.d.Lb(!1),n=A.a([],t.sb)
for(s=o.length,r=0;r<s;){q=B.c.jd(o,$.aph(),r)
if(r!==q){if(q===-1)q=s
p=new A.jj(new A.eQ(r,q),this,o,$.bu())
p.w=p.Eg()
n.push(p)
r=q}++r}return n},
DP(){var s,r,q,p=this.ar
if(p==null)return
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.Q)(p),++r){q=p[r]
q.y2$=$.bu()
q.y1$=0}this.ar=null},
a5(){var s=this.ar
if(s!=null)B.b.Z(s,new A.a2U())
this.Om()},
m(){var s=this
s.wG()
s.ar=null
s.M.m()
s.hQ()},
vL(a){this.aY=A.a([],t.e9)
a.aU(new A.a2R(this))},
sAw(a,b){var s=this.M
if(s.f===b)return
s.sAw(0,b)
this.ah()},
sbE(a){var s=this.M
if(s.r===a)return
s.sbE(a)
this.a5()},
sMK(a){if(this.bz===a)return
this.bz=a
this.a5()},
sa4s(a,b){var s,r=this
if(r.c7===b)return
r.c7=b
s=b===B.bo?"\u2026":null
r.M.sa1t(s)
r.a5()},
sAx(a){var s=this.M
if(s.w===a)return
s.sAx(a)
this.bP=null
this.a5()},
szq(a){var s=this.M
if(s.z==a)return
s.szq(a)
this.bP=null
this.a5()},
szl(a,b){var s=this.M
if(J.f(s.y,b))return
s.szl(0,b)
this.bP=null
this.a5()},
sMU(a){return},
sAy(a){var s=this.M
if(s.as===a)return
s.sAy(a)
this.bP=null
this.a5()},
sL4(a){return},
sMj(a){var s,r=this
if(J.f(r.ce,a))return
r.ce=a
s=r.ar
s=s==null?null:B.b.k0(s,new A.a2W())
if(s===!0)r.ah()},
q9(a){var s,r=this,q=r.B8(a,B.a_)
r.iB(t.k.a(A.x.prototype.gY.call(r)))
s=r.M
s.Dv(a,B.a_)
s=s.db
s===$&&A.b()
s=s.b
return q.U(0,new A.v(0,s==null?0:s))},
ez(a){this.iB(t.k.a(A.x.prototype.gY.call(this)))
return this.M.ez(B.L)},
jb(a){return!0},
cK(a,b){var s,r,q,p,o,n,m,l,k,j={},i=this.M,h=i.a.hH(b),g=i.d.M1(h)
if(g!=null&&!0){a.D(0,new A.hx(t.kZ.a(g),t.Cq))
s=!0}else s=!1
r=j.a=this.av$
q=A.n(this).h("aw.1")
p=t.lO
o=0
while(!0){if(!(r!=null&&o<i.ax.length))break
r=r.e
r.toString
p.a(r)
n=r.a
m=new Float64Array(16)
l=new A.bg(m)
l.d2()
m[14]=0
m[13]=n.b
m[12]=n.a
n=r.e
l.hJ(0,n,n,n)
if(a.xx(new A.a2T(j,b,r),b,l))return!0
r=j.a.e
r.toString
k=q.a(r).an$
j.a=k;++o
r=k}return s},
ES(a,b){var s=this.bz||this.c7===B.bo?a:1/0
this.M.zi(s,b)},
uW(){var s=this,r=$.bO,q=r.CW$
switch(q.a){case 0:case 4:if(s.fG)return
s.fG=!0
r.pE(new A.a2X(s,q))
break
case 1:case 2:case 3:s.Cn()
s.M.a5()
break}},
iB(a){this.M.ux(this.e9)
this.ES(a.b,a.a)},
EQ(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.df$
if(i===0)return A.a([],t.aE)
s=j.av$
r=A.b3(i,B.Ti,!1,t.cP)
q=new A.aR(0,a.b,0,1/0).cO(0,j.M.w)
for(i=A.n(j).h("aw.1"),p=!b,o=0;s!=null;){if(p){s.co(q,!0)
n=s.k3
n.toString
m=j.aY
m===$&&A.b()
switch(m[o].ge4()){case B.ld:l=s.LK(j.aY[o].gr8())
break
case B.le:case B.lf:case B.fv:case B.lh:case B.lg:l=null
break
default:l=null}k=n}else{k=s.fU(q)
l=null}n=j.aY
n===$&&A.b()
r[o]=new A.m9(k,n[o].ge4(),l,j.aY[o].gr8())
n=s.e
n.toString
s=i.a(n).an$;++o}return r},
VX(a){return this.EQ(a,!1)},
Yy(){var s,r,q=this.av$,p=t.lO,o=this.M,n=A.n(this).h("aw.1"),m=0
while(!0){if(!(q!=null&&m<o.ax.length))break
s=q.e
s.toString
p.a(s)
r=o.ax[m]
s.a=new A.v(r.a,r.b)
s.e=o.ay[m]
q=n.a(s).an$;++m}},
RA(){var s,r,q=this.aY
q===$&&A.b()
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.Q)(q),++r)switch(q[r].ge4()){case B.ld:case B.le:case B.lf:return!1
case B.lg:case B.lh:case B.fv:continue}return!0},
c3(a){var s,r,q=this
if(!q.RA())return B.W
s=q.M
s.ux(q.EQ(a,!0))
q.ES(a.b,a.a)
r=s.gbg(s)
s=s.a
return a.bs(new A.a_(r,Math.ceil(s.gbL(s))))},
bB(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=t.k.a(A.x.prototype.gY.call(i))
i.e9=i.VX(g)
i.iB(g)
i.Yy()
s=i.M
r=s.gbg(s)
q=s.a
q=Math.ceil(q.gbL(q))
p=s.a.ga1j()
o=i.k3=g.bs(new A.a_(r,q))
n=o.b<q||p
m=o.a<r
if(m||n)switch(i.c7.a){case 3:i.c8=!1
i.bP=null
break
case 0:case 2:i.c8=!0
i.bP=null
break
case 1:i.c8=!0
r=A.a83(h,s.d.a,"\u2026")
q=s.r
q.toString
o=s.w
l=A.a81(h,s.y,h,h,r,B.bJ,q,h,o,B.aX)
l.a3K()
if(m){switch(s.r.a){case 0:k=l.gbg(l)
j=0
break
case 1:j=i.k3.a
k=j-l.gbg(l)
break
default:k=h
j=k}i.bP=A.ah5(new A.v(k,0),new A.v(j,0),A.a([B.l,B.n7],t.bk),h,B.cb,h)}else{j=i.k3.b
s=l.a
i.bP=A.ah5(new A.v(0,j-Math.ceil(s.gbL(s))/2),new A.v(0,j),A.a([B.l,B.n7],t.bk),h,B.cb,h)}l.m()
break}else{i.c8=!1
i.bP=null}},
aH(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e={}
f.iB(t.k.a(A.x.prototype.gY.call(f)))
if(f.c8){s=f.k3
r=b.a
q=b.b
p=new A.A(r,q,r+s.a,q+s.b)
if(f.bP!=null)a.gbC(a).Bl(p,$.as().bj())
else a.gbC(a).ct(0)
a.gbC(a).k6(p)}s=f.M
s.aH(a.gbC(a),b)
r=e.a=f.av$
q=t.lO
o=b.a
n=b.b
m=A.n(f).h("aw.1")
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
a.a4N(j,new A.v(o+r.a,n+r.b),A.uw(k,k,k),new A.a2V(e))
k=e.a.e
k.toString
i=m.a(k).an$
e.a=i;++l
r=i}if(f.c8){if(f.bP!=null){a.gbC(a).az(0,o,n)
h=$.as().bj()
h.sa_t(B.CN)
h.sBD(f.bP)
s=a.gbC(a)
r=f.k3
s.cc(new A.A(0,0,0+r.a,0+r.b),h)}a.gbC(a).cp(0)}s=f.ar
if(s!=null)for(r=s.length,g=0;g<s.length;s.length===r||(0,A.Q)(s),++g)s[g].aH(a,b)
f.Ot(a,b)},
B8(a,b){var s
this.iB(t.k.a(A.x.prototype.gY.call(this)))
s=this.M
s.Dv(a,b)
s=s.db
s===$&&A.b()
return s.a},
AZ(a){this.iB(t.k.a(A.x.prototype.gY.call(this)))
return this.M.a.ue(a.a,a.b,B.mk,B.h9)},
hH(a){this.iB(t.k.a(A.x.prototype.gY.call(this)))
return this.M.a.hH(a)},
mD(a){this.iB(t.k.a(A.x.prototype.gY.call(this)))
return this.M.a.mD(a)},
eB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.h0(a)
s=d.M
r=s.d
r.toString
q=A.a([],t.lF)
r.a0f(q)
d.ea=q
if(B.b.k0(q,new A.a2S()))a.a=a.b=!0
else{r=d.u
if(r==null){p=new A.bP("")
o=A.a([],t.ve)
for(r=d.ea,n=r.length,m=0,l=0,k="";l<r.length;r.length===n||(0,A.Q)(r),++l){j=r[l]
i=j.b
if(i==null)i=j.a
for(k=j.f,h=k.length,g=0;g<k.length;k.length===h||(0,A.Q)(k),++g){f=k[g]
e=f.a
o.push(f.HW(new A.eQ(m+e.a,m+e.b)))}k=p.a+=i
m+=i.length}r=d.u=new A.cx(k.charCodeAt(0)==0?k:k,o)}a.p4=r
a.d=!0
s=s.r
s.toString
a.y1=s}},
nO(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=A.a([],t.V),b0=a7.M,b1=b0.r
b1.toString
s=A.iO(a8,a8,a8,t.qI,t.ju)
r=a7.I
if(r==null){r=a7.ea
r.toString
r=a7.I=A.azB(r)}for(q=r.length,p=t.k,o=b1,n=0,m=0,l=0;l<r.length;r.length===q||(0,A.Q)(r),++l,m=j){k=r[l]
b1=k.a
j=m+b1.length
i=m<j
h=i?m:j
i=i?j:m
g=p.a(A.x.prototype.gY.call(a7))
b0.ux(a7.e9)
f=g.b
f=a7.bz||a7.c7===B.bo?f:1/0
b0.zi(f,g.a)
e=b0.a.ue(h,i,B.mk,B.h9)
if(e.length===0)continue
i=B.b.gJ(e)
d=new A.A(i.a,i.b,i.c,i.d)
c=B.b.gJ(e).e
for(i=A.ao(e),h=new A.eP(e,1,a8,i.h("eP<1>")),h.pU(e,1,a8,i.c),h=new A.dp(h,h.gp(h)),i=A.n(h).c;h.t();){g=h.d
if(g==null)g=i.a(g)
d=d.or(new A.A(g.a,g.b,g.c,g.d))
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
a0=new A.A(b,a,i,g)
a1=A.pc()
a2=n+1
a1.id=new A.v1(n,a8)
a1.d=!0
a1.y1=o
f=k.b
b1=f==null?b1:f
a1.p4=new A.cx(b1,k.f)
b1=b2.y
if(b1!=null){a3=b1.f5(a0)
if(a3.a>=a3.c||a3.b>=a3.d)b1=!(b>=i||a>=g)
else b1=!1
a1.b7(B.ls,b1)}a4=A.b5("newChild")
b1=a7.dv
i=b1==null?a8:b1.a!==0
if(i===!0){b1.toString
i=new A.b9(b1,A.n(b1).h("b9<1>"))
a5=i.ga8(i)
if(!a5.t())A.X(A.bR())
b1=b1.A(0,a5.gG(a5))
b1.toString
if(a4.b!==a4)A.X(A.a_y(a4.a))
a4.b=b1}else{a6=new A.ja()
b1=A.a4J(a6,a7.Sj(a6))
if(a4.b!==a4)A.X(A.a_y(a4.a))
a4.b=b1}if(b1===a4)A.X(A.fV(a4.a))
J.arg(b1,a1)
if(!b1.w.k(0,a0)){b1.w=a0
b1.hU()}b1=a4.b
if(b1===a4)A.X(A.fV(a4.a))
i=b1.d
i.toString
s.l(0,i,b1)
b1=a4.b
if(b1===a4)A.X(A.fV(a4.a))
a9.push(b1)
n=a2
o=c}a7.dv=s
b2.jw(0,a9,b3)},
Sj(a){return new A.a2Q(this,a)},
lD(){this.uQ()
this.dv=null}}
A.a2U.prototype={
$1(a){return a.x=null},
$S:234}
A.a2R.prototype={
$1(a){return!0},
$S:37}
A.a2W.prototype={
$1(a){var s=a.w
s===$&&A.b()
return s.c!==B.cR},
$S:235}
A.a2T.prototype={
$2(a,b){return this.a.a.bS(a,b)},
$S:15}
A.a2X.prototype={
$1(a){var s=this.a
s.fG=!1
if(s.b!=null){s.Cn()
s.M.a5()}},
$S:2}
A.a2V.prototype={
$2(a,b){var s=this.a.a
s.toString
a.eJ(s,b)},
$S:11}
A.a2S.prototype={
$1(a){return!1},
$S:236}
A.a2Q.prototype={
$0(){var s=this.a,r=s.dv.j(0,this.b)
r.toString
s.kR(s,r.w)},
$S:0}
A.jj.prototype={
gn(a){var s=this.w
s===$&&A.b()
return s},
X8(){var s=this,r=s.Eg(),q=s.w
q===$&&A.b()
if(q.k(0,r))return
s.w=r
s.aB()},
Eg(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f==null||g.e==null)return B.TS
s=f.a
r=g.e.a
f=g.b
q=f.q9(new A.b2(s,B.G))
p=s===r?q:f.q9(new A.b2(r,B.G))
f=f.M
o=f.r
o.toString
n=s>r!==(B.X===o)
m=A.ux(g.gfm().a,g.gfm().b,0)
m.hj(m)
o=A.cr(m,q)
l=f.gtR()
k=n?B.C2:B.C1
j=A.cr(m,p)
f=f.gtR()
i=n?B.C1:B.C2
h=g.d.a===g.e.a?B.TU:B.lr
return new A.kp(new A.mw(o,l,k),new A.mw(j,f,i),h,!0)},
rH(a){var s=this,r=A.b5("result"),q=s.d,p=s.e,o=a.a
switch(o.a){case 0:case 1:r.sc_(s.Zw(t.ib.a(a).b,o===B.dM))
break
case 2:s.e=s.d=null
r.sc_(B.cQ)
break
case 3:o=s.a
s.d=new A.b2(o.a,B.G)
s.e=new A.b2(o.b,B.P)
r.sc_(B.cQ)
break
case 4:r.sc_(s.Vc(t.k2.a(a).gBh()))
break
case 5:t.uQ.a(a)
r.sc_(s.Uw(a.gJ1(a),a.gfJ(),a.ga6b()))
break
case 6:t.sQ.a(a)
r.sc_(s.U8(a.gyx(a),a.gfJ(),a.grF(a)))
break}if(!J.f(q,s.d)||!J.f(p,s.e)){s.b.ah()
s.X8()}return r.aC()},
Zw(a,b){var s,r,q,p,o,n,m=this
if(b)m.e=null
else m.d=null
s=m.b
r=s.bw(0,null)
r.hj(r)
q=A.cr(r,a)
p=m.gfm()
if(p.gR(p))return A.alO(m.gfm(),q)
p=m.gfm()
o=s.M.r
o.toString
n=m.pX(s.hH(A.avM(p,q,o)))
if(b)m.e=n
else m.d=n
s=n.a
p=m.a
if(s===p.b)return B.ba
if(s===p.a)return B.bb
return A.alO(m.gfm(),q)},
pX(a){var s,r=a.a,q=this.a,p=q.b
if(r<=p)s=r===p&&a.b===B.G
else s=!0
if(s)return new A.b2(p,B.P)
q=q.a
if(r<q)return new A.b2(q,B.G)
return a},
Vc(a){var s,r,q,p,o=this,n=o.b,m=n.hH(n.kN(a))
if(o.Xt(m))return B.at
s=n.mD(m)
r=A.b5("start")
q=A.b5("end")
n=m.a
p=s.b
if(n>=p)r.b=q.b=new A.b2(n,B.G)
else{r.b=new A.b2(s.a,B.G)
q.b=new A.b2(p,B.P)}o.d=r.aC()
o.e=q.aC()
return B.at},
U8(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.bw(0,null)
if(j.hj(j)===0)switch(c){case B.fz:case B.dO:return B.bb
case B.fA:case B.dN:return B.ba}s=A.cr(j,new A.v(a,0)).a
switch(c){case B.fz:case B.fA:if(b){k=l.e
k.toString
r=k}else{k=l.d
k.toString
r=k}q=l.Vy(r,!1,s)
p=q.a
o=q.b
break
case B.dN:case B.dO:n=l.e
if(n==null){n=new A.b2(l.a.b,B.P)
l.e=n
r=n}else r=n
n=l.d
if(n==null){l.d=r
m=r}else m=n
p=k.hH(new A.v(s,k.q9(b?r:m).b-k.M.gtR()/2))
o=B.at
break
default:p=null
o=null}if(b)l.e=p
else l.d=p
return o},
Uw(a,b,c){var s,r,q,p,o,n,m=this,l=m.e
if(l==null){l=m.a
l=a?new A.b2(l.a,B.G):new A.b2(l.b,B.P)
m.e=l
s=l}else s=l
l=m.d
if(l==null){m.d=s
r=s}else r=l
s=b?s:r
if(a&&s.a===m.a.b)return B.ba
l=!a
if(l&&s.a===m.a.a)return B.bb
switch(c){case B.VK:l=m.a
q=m.q8(new A.Uj(B.c.a1(m.c,l.a,l.b)),s,a)
p=B.at
break
case B.VL:l=m.a
q=m.q8(new A.Mu(new A.a8J(m),new A.a8H(B.c.a1(m.c,l.a,l.b))),s,a)
p=B.at
break
case B.VM:q=m.q8(new A.a_B(m),s,a)
p=B.at
break
case B.VN:o=m.a
n=o.a
o=o.b
q=m.q8(new A.Vk(B.c.a1(m.c,n,o)),s,a)
if(a&&q.a===o)p=B.ba
else p=l&&q.a===n?B.bb:B.at
break
default:p=null
q=null}if(b)m.e=q
else m.d=q
return p},
q8(a,b,c){if(c)return this.pX(a.fW(B.Tq.fW(b)))
return this.pX(a.fV(B.Tp.fV(b)))},
Vy(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.M,i=j.fr
if(i==null)i=j.fr=j.a.a0e()
s=k.B8(a,B.a_)
j=i.length
r=j-1
for(q=s.b,p=0;p<i.length;i.length===j||(0,A.Q)(i),++p){o=i[p]
if(o.gr8()>q){r=J.aqS(o)
break}}if(b&&r===i.length-1)n=new A.b2(l.a.b,B.P)
else if(!b&&r===0)n=new A.b2(l.a.a,B.G)
else n=l.pX(k.hH(new A.v(c,i[b?r+1:r-1].gr8())))
k=n.a
j=l.a
if(k===j.a)m=B.bb
else m=k===j.b?B.ba:B.at
return new A.b1(n,m,t.nz)},
Xt(a){var s,r,q,p,o=this
if(o.d==null||o.e==null)return!1
s=A.b5("currentStart")
r=A.b5("currentEnd")
q=o.d
q.toString
p=o.e
p.toString
if(A.aid(q,p)>0){s.b=q
r.b=p}else{s.b=p
r.b=q}return A.aid(s.aC(),a)>=0&&A.aid(r.aC(),a)<=0},
bw(a,b){var s=A.ux(this.gfm().a,this.gfm().b,0)
s.cA(0,this.b.bw(0,b))
return s},
hD(a,b){if(this.b.b==null)return},
gfm(){var s,r,q,p,o,n,m=this,l=m.x
if(l==null){l=m.b
s=m.a
r=s.a
q=l.AZ(A.a82(B.G,r,s.b,!1))
if(q.length!==0){l=B.b.gJ(q)
p=new A.A(l.a,l.b,l.c,l.d)
for(o=1;o<q.length;++o){l=q[o]
p=p.or(new A.A(l.a,l.b,l.c,l.d))}m.x=p
l=p}else{n=l.q9(new A.b2(r,B.G))
l=A.ahD(n,new A.v(n.a+0,n.b+-l.M.gtR()))
m.x=l}}return l},
gcE(a){var s=this.gfm()
return new A.a_(s.c-s.a,s.d-s.b)},
aH(a,b){var s,r,q,p,o,n=this,m=n.d
if(m==null||n.e==null)return
s=n.b
if(s.ce!=null){r=A.a82(B.G,m.a,n.e.a,!1)
q=$.as().bj()
q.scP(0,B.aV)
m=s.ce
m.toString
q.sau(0,m)
for(m=s.AZ(r),s=m.length,p=0;p<m.length;m.length===s||(0,A.Q)(m),++p){o=m[p]
a.gbC(a).cc(new A.A(o.a,o.b,o.c,o.d).d4(b),q)}}A.ux(n.gfm().a,n.gfm().b,0)},
B5(a){var s=this.b.M.a.LQ(a),r=this.a,q=r.a
r=r.b
return A.a82(B.G,B.f.hi(s.a,q,r),B.f.hi(s.b,q,r),!1)},
$iab:1}
A.yv.prototype={
ap(a){var s,r,q
this.en(a)
s=this.av$
for(r=t.lO;s!=null;){s.ap(a)
q=s.e
q.toString
s=r.a(q).an$}},
ae(a){var s,r,q
this.dE(0)
s=this.av$
for(r=t.lO;s!=null;){s.ae(0)
q=s.e
q.toString
s=r.a(q).an$}}}
A.P6.prototype={}
A.P7.prototype={
ap(a){this.Pw(a)
$.eJ.yE$.a.D(0,this.gCA())},
ae(a){$.eJ.yE$.a.A(0,this.gCA())
this.Px(0)}}
A.RE.prototype={}
A.RF.prototype={}
A.IU.prototype={
sa4r(a){if(a===this.M)return
this.M=a
this.ah()},
sa4R(a){if(a===this.u)return
this.u=a
this.ah()},
sa_K(a){return},
sa_J(a){return},
gjH(){return!0},
gk_(){return!0},
gVR(){var s=this.M,r=(s|1)>>>0>0||(s|2)>>>0>0?80:0
return(s|4)>>>0>0||(s|8)>>>0>0?r+80:r},
c3(a){return a.bs(new A.a_(1/0,this.gVR()))},
aH(a,b){var s=b.a,r=b.b,q=this.k3
q=new A.I2(new A.A(s,r,s+q.a,r+q.b),this.M,this.u,!1,!1,A.z(t.S,t.M),A.aq())
q.h3()
a.mU()
a.xD(q)}}
A.IZ.prototype={}
A.e4.prototype={
ej(a){if(!(a.e instanceof A.cg))a.e=new A.cg()},
c3(a){var s=this.u$
if(s!=null)return s.fU(a)
return this.nX(a)},
bB(){var s=this,r=s.u$,q=t.k
if(r!=null){r.co(q.a(A.x.prototype.gY.call(s)),!0)
r=s.u$.k3
r.toString
s.k3=r}else s.k3=s.nX(q.a(A.x.prototype.gY.call(s)))},
nX(a){return new A.a_(A.H(0,a.a,a.b),A.H(0,a.c,a.d))},
cK(a,b){var s=this.u$
s=s==null?null:s.bS(a,b)
return s===!0},
dc(a,b){},
aH(a,b){var s=this.u$
if(s!=null)a.eJ(s,b)}}
A.od.prototype={
F(){return"HitTestBehavior."+this.b}}
A.vD.prototype={
bS(a,b){var s,r=this
if(r.k3.C(0,b)){s=r.cK(a,b)||r.B===B.aA
if(s||r.B===B.cp)a.D(0,new A.nF(b,r))}else s=!1
return s},
jb(a){return this.B===B.aA}}
A.IE.prototype={
sHp(a){if(this.B.k(0,a))return
this.B=a
this.a5()},
bB(){var s=this,r=t.k.a(A.x.prototype.gY.call(s)),q=s.u$,p=s.B
if(q!=null){q.co(p.on(r),!0)
q=s.u$.k3
q.toString
s.k3=q}else s.k3=p.on(r).bs(B.W)},
c3(a){var s=this.u$,r=this.B
if(s!=null)return s.fU(r.on(a))
else return r.on(a).bs(B.W)}}
A.IO.prototype={
sa44(a,b){if(this.B===b)return
this.B=b
this.a5()},
sa41(a,b){if(this.O===b)return
this.O=b
this.a5()},
ET(a){var s,r,q=a.a,p=a.b
p=p<1/0?p:A.H(this.B,q,p)
s=a.c
r=a.d
return new A.aR(q,p,s,r<1/0?r:A.H(this.O,s,r))},
Fu(a,b){var s=this.u$
if(s!=null)return a.bs(b.$2(s,this.ET(a)))
return this.ET(a).bs(B.W)},
c3(a){return this.Fu(a,A.afK())},
bB(){this.k3=this.Fu(t.k.a(A.x.prototype.gY.call(this)),A.afL())}}
A.IA.prototype={
sa_m(a,b){if(this.B===b)return
this.B=b
this.a5()},
D3(a){var s,r,q,p,o=a.a,n=a.b
if(o>=n&&a.c>=a.d)return new A.a_(A.H(0,o,n),A.H(0,a.c,a.d))
s=this.B
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
r=p}return a.bs(new A.a_(o,r))},
c3(a){return this.D3(a)},
bB(){var s,r=this,q=r.D3(t.k.a(A.x.prototype.gY.call(r)))
r.k3=q
s=r.u$
if(s!=null)s.hv(A.rk(q))}}
A.IS.prototype={
gk_(){return this.u$!=null&&this.B>0},
smm(a,b){var s,r,q,p,o=this
if(o.O===b)return
s=o.u$!=null
r=s&&o.B>0
q=o.B
o.O=b
p=B.d.b2(A.Sm(b,0,1)*255)
o.B=p
if(r!==(s&&p>0))o.kt()
o.ah()
if(q!==0!==(o.B!==0)&&!0)o.b_()},
sr6(a){return},
kx(a){return this.B>0},
aH(a,b){var s,r,q=this
if(q.u$==null)return
s=q.B
if(s===0){q.ch.saF(0,null)
return}r=q.ch
r.saF(0,a.Aa(b,s,A.e4.prototype.gjo.call(q),t.Ex.a(r.a)))},
fc(a){var s,r=this.u$
if(r!=null)s=this.B!==0||!1
else s=!1
if(s){r.toString
a.$1(r)}}}
A.vy.prototype={
gdw(){if(this.u$!=null){var s=this.yI$
s.toString}else s=!1
return s},
pm(a){var s=a==null?A.ale():a
s.sHr(0,this.lV$)
return s},
smm(a,b){var s=this,r=s.lW$
if(r===b)return
if(s.b!=null&&r!=null)r.H(0,s.gqS())
s.lW$=b
if(s.b!=null)b.S(0,s.gqS())
s.xf()},
sr6(a){if(!1===this.yJ$)return
this.yJ$=!1
this.b_()},
xf(){var s,r=this,q=r.lV$,p=r.lW$
p=r.lV$=B.d.b2(A.Sm(p.gn(p),0,1)*255)
if(q!==p){s=r.yI$
p=p>0
r.yI$=p
if(r.u$!=null&&s!==p)r.kt()
r.a3Y()
if(q===0||r.lV$===0)r.b_()}},
kx(a){var s=this.lW$
return s.gn(s)>0},
fc(a){var s,r=this.u$
if(r!=null)if(this.lV$===0){s=this.yJ$
s.toString}else s=!0
else s=!1
if(s){r.toString
a.$1(r)}}}
A.Iz.prototype={}
A.rO.prototype={
S(a,b){return null},
H(a,b){return null},
i(a){return"CustomClipper"}}
A.mz.prototype={
B0(a){return this.b.ff(new A.A(0,0,0+a.a,0+a.b),this.c)},
BG(a){if(A.C(a)!==B.ZJ)return!0
t.qm.a(a)
return!a.b.k(0,this.b)||a.c!=this.c}}
A.qs.prototype={
snV(a){var s,r=this,q=r.B
if(q==a)return
r.B=a
s=a==null
if(s||q==null||A.C(a)!==A.C(q)||a.BG(q))r.qm()
if(r.b!=null){if(q!=null)q.H(0,r.gql())
if(!s)a.S(0,r.gql())}},
ap(a){var s
this.n_(a)
s=this.B
if(s!=null)s.S(0,this.gql())},
ae(a){var s=this.B
if(s!=null)s.H(0,this.gql())
this.l_(0)},
qm(){this.O=null
this.ah()
this.b_()},
srk(a){if(a!==this.al){this.al=a
this.ah()}},
bB(){var s,r=this,q=r.k3
q=q!=null?q:null
r.uT()
s=r.k3
s.toString
if(!J.f(q,s))r.O=null},
iK(){var s,r,q=this
if(q.O==null){s=q.B
if(s==null)s=null
else{r=q.k3
r.toString
r=s.B0(r)
s=r}q.O=s==null?q.gq_():s}},
iR(a){var s,r=this
switch(r.al.a){case 0:return null
case 1:case 2:case 3:if(r.B==null)s=null
else{s=r.k3
s=new A.A(0,0,0+s.a,0+s.b)}if(s==null){s=r.k3
s=new A.A(0,0,0+s.a,0+s.b)}return s}},
m(){this.cf=null
this.hQ()}}
A.ID.prototype={
gq_(){var s=this.k3
return new A.A(0,0,0+s.a,0+s.b)},
bS(a,b){var s=this
if(s.B!=null){s.iK()
if(!s.O.C(0,b))return!1}return s.iw(a,b)},
aH(a,b){var s,r,q=this,p=q.u$
if(p!=null){s=q.ch
if(q.al!==B.h){q.iK()
p=q.cx
p===$&&A.b()
r=q.O
r.toString
s.saF(0,a.kA(p,b,r,A.e4.prototype.gjo.call(q),q.al,t.iM.a(s.a)))}else{a.eJ(p,b)
s.saF(0,null)}}else q.ch.saF(0,null)}}
A.IC.prototype={
gq_(){var s=$.as().cm(),r=this.k3
s.nG(new A.A(0,0,0+r.a,0+r.b))
return s},
bS(a,b){var s=this
if(s.B!=null){s.iK()
if(!s.O.C(0,b))return!1}return s.iw(a,b)},
aH(a,b){var s,r,q,p,o=this,n=o.u$
if(n!=null){s=o.ch
if(o.al!==B.h){o.iK()
n=o.cx
n===$&&A.b()
r=o.k3
q=r.a
r=r.b
p=o.O
p.toString
s.saF(0,a.Ky(n,b,new A.A(0,0,0+q,0+r),p,A.e4.prototype.gjo.call(o),o.al,t.n0.a(s.a)))}else{a.eJ(n,b)
s.saF(0,null)}}else o.ch.saF(0,null)}}
A.yw.prototype={
si1(a,b){if(this.aT===b)return
this.aT=b
this.ah()},
sfY(a,b){if(this.by.k(0,b))return
this.by=b
this.ah()},
sau(a,b){if(this.dL.k(0,b))return
this.dL=b
this.ah()},
eB(a){this.h0(a)
a.si1(0,this.aT)}}
A.IV.prototype={
sd3(a,b){if(this.yG===b)return
this.yG=b
this.qm()},
sa_v(a,b){if(J.f(this.yH,b))return
this.yH=b
this.qm()},
gq_(){var s,r,q=this.k3,p=0+q.a
q=0+q.b
switch(this.yG.a){case 0:s=this.yH
if(s==null)s=B.aF
return s.dk(new A.A(0,0,p,q))
case 1:s=(p-0)/2
r=(q-0)/2
return new A.hT(0,0,p,q,s,r,s,r,s,r,s,r,s===r)}},
bS(a,b){var s=this
if(s.B!=null){s.iK()
if(!s.O.C(0,b))return!1}return s.iw(a,b)},
aH(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.u$==null){i.ch.saF(0,null)
return}i.iK()
s=i.O.d4(b)
r=$.as()
q=r.cm()
q.ew(s)
p=a.gbC(a)
if(i.aT!==0&&!0){p.cc(new A.A(s.a,s.b,s.c,s.d).cY(20),$.ajq())
o=i.by
n=i.aT
m=i.dL
p.ol(q,o,n,(m.gn(m)>>>24&255)!==255)}l=i.al===B.ho
if(!l){r=r.bj()
r.sau(0,i.dL)
p.cU(s,r)}r=i.cx
r===$&&A.b()
o=i.k3
n=o.a
o=o.b
m=i.O
m.toString
k=i.ch
j=t.bG.a(k.a)
k.saF(0,a.a4I(r,b,new A.A(0,0,0+n,0+o),m,new A.a2Y(i,l),i.al,j))}}
A.a2Y.prototype={
$2(a,b){var s,r
if(this.b){s=a.gbC(a)
r=$.as().bj()
r.sau(0,this.a.dL)
s.oj(r)}this.a.h1(a,b)},
$S:11}
A.IW.prototype={
gq_(){var s=$.as().cm(),r=this.k3
s.nG(new A.A(0,0,0+r.a,0+r.b))
return s},
bS(a,b){var s=this
if(s.B!=null){s.iK()
if(!s.O.C(0,b))return!1}return s.iw(a,b)},
aH(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(j.u$==null){j.ch.saF(0,null)
return}j.iK()
s=j.k3
r=b.a
q=b.b
p=s.a
s=s.b
o=j.O.d4(b)
n=a.gbC(a)
if(j.aT!==0&&!0){n.cc(new A.A(r,q,r+p,q+s).cY(20),$.ajq())
s=j.by
r=j.aT
q=j.dL
n.ol(o,s,r,(q.gn(q)>>>24&255)!==255)}m=j.al===B.ho
if(!m){s=$.as().bj()
s.sau(0,j.dL)
n.dJ(o,s)}s=j.cx
s===$&&A.b()
r=j.k3
q=r.a
r=r.b
p=j.O
p.toString
l=j.ch
k=t.n0.a(l.a)
l.saF(0,a.Ky(s,b,new A.A(0,0,0+q,0+r),p,new A.a2Z(j,m),j.al,k))}}
A.a2Z.prototype={
$2(a,b){var s,r
if(this.b){s=a.gbC(a)
r=$.as().bj()
r.sau(0,this.a.dL)
s.oj(r)}this.a.h1(a,b)},
$S:11}
A.rT.prototype={
F(){return"DecorationPosition."+this.b}}
A.II.prototype={
sa15(a){var s,r=this
if(a.k(0,r.O))return
s=r.B
if(s!=null)s.m()
r.B=null
r.O=a
r.ah()},
sbv(a,b){if(b===this.al)return
this.al=b
this.ah()},
sxV(a){if(a.k(0,this.bu))return
this.bu=a
this.ah()},
ae(a){var s=this,r=s.B
if(r!=null)r.m()
s.B=null
s.l_(0)
s.ah()},
jb(a){var s=this.O,r=this.k3
r.toString
return s.Jk(r,a,this.bu.d)},
aH(a,b){var s,r,q,p=this,o=p.B
if(o==null)o=p.B=p.O.rp(p.gdR())
s=p.bu
r=p.k3
r.toString
q=new A.og(s.a,s.b,s.c,s.d,r,s.f)
if(p.al===B.hx){o.p0(a.gbC(a),b,q)
if(p.O.gza())a.Bz()}p.h1(a,b)
if(p.al===B.Fk){o=p.B
o.toString
o.p0(a.gbC(a),b,q)
if(p.O.gza())a.Bz()}}}
A.J4.prototype={
sKm(a,b){return},
se4(a){var s=this
if(J.f(s.O,a))return
s.O=a
s.ah()
s.b_()},
sbE(a){var s=this
if(s.al==a)return
s.al=a
s.ah()
s.b_()},
gk_(){return!1},
sbl(a,b){var s,r=this
if(J.f(r.cf,b))return
s=new A.bg(new Float64Array(16))
s.bc(b)
r.cf=s
r.ah()
r.b_()},
sm3(a){return},
gvG(){var s,r,q=this,p=q.O,o=p==null?null:p.W(q.al)
if(o==null)return q.cf
s=new A.bg(new Float64Array(16))
s.d2()
p=q.k3
p.toString
r=o.a_g(p)
s.az(0,r.a,r.b)
p=q.cf
p.toString
s.cA(0,p)
s.az(0,-r.a,-r.b)
return s},
bS(a,b){return this.cK(a,b)},
cK(a,b){var s=this.bu?this.gvG():null
return a.xx(new A.a37(this),b,s)},
aH(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
if(a.u$!=null){s=a.gvG()
s.toString
r=A.a0_(s)
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
if(b===0||!isFinite(b)){a.ch.saF(0,null)
return}q=a.cx
q===$&&A.b()
p=A.e4.prototype.gjo.call(a)
o=a.ch
n=o.a
o.saF(0,a0.p9(q,a1,s,p,n instanceof A.ky?n:null))}else{a.h1(a0,a1.U(0,r))
a.ch.saF(0,null)}}},
dc(a,b){var s=this.gvG()
s.toString
b.cA(0,s)}}
A.a37.prototype={
$2(a,b){return this.a.pS(a,b)},
$S:15}
A.vA.prototype={
XY(){if(this.B!=null)return
this.B=this.al},
E2(a){switch(a.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
syM(a){var s=this,r=s.O
if(r===a)return
s.O=a
if(s.E2(r)||s.E2(a))s.a5()
else{s.bK=s.cf=null
s.ah()}},
se4(a){var s=this
if(s.al.k(0,a))return
s.al=a
s.B=s.bK=s.cf=null
s.ah()},
sbE(a){var s=this
if(s.bu==a)return
s.bu=a
s.B=s.bK=s.cf=null
s.ah()},
c3(a){var s,r=this.u$
if(r!=null){s=r.fU(B.bN)
switch(this.O.a){case 6:return a.bs(new A.aR(0,a.b,0,a.d).nY(s))
case 1:case 2:case 0:case 4:case 3:case 5:return a.nY(s)}}else return new A.a_(A.H(0,a.a,a.b),A.H(0,a.c,a.d))},
bB(){var s,r,q,p=this,o=p.u$
if(o!=null){o.co(B.bN,!0)
switch(p.O.a){case 6:o=t.k
s=o.a(A.x.prototype.gY.call(p))
r=p.u$.k3
r.toString
q=new A.aR(0,s.b,0,s.d).nY(r)
p.k3=o.a(A.x.prototype.gY.call(p)).bs(q)
break
case 1:case 2:case 0:case 4:case 3:case 5:o=t.k.a(A.x.prototype.gY.call(p))
s=p.u$.k3
s.toString
p.k3=o.nY(s)
break}p.bK=p.cf=null}else{o=t.k.a(A.x.prototype.gY.call(p))
p.k3=new A.a_(A.H(0,o.a,o.b),A.H(0,o.c,o.d))}},
xg(){var s,r,q,p,o,n,m,l,k,j=this
if(j.bK!=null)return
if(j.u$==null){j.cf=!1
s=new A.bg(new Float64Array(16))
s.d2()
j.bK=s}else{j.XY()
s=j.u$.k3
s.toString
r=j.O
q=j.k3
q.toString
p=A.anT(r,s,q)
q=p.b
r=p.a
o=s.a
s=s.b
n=j.B.z4(r,new A.A(0,0,0+o,0+s))
m=j.B
m.toString
l=j.k3
k=m.z4(q,new A.A(0,0,0+l.a,0+l.b))
m=n.a
j.cf=n.c-m<o||n.d-n.b<s
s=A.ux(k.a,k.b,0)
s.hJ(0,q.a/r.a,q.b/r.b,1)
s.az(0,-m,-n.b)
j.bK=s}},
Fe(a,b){var s,r,q,p,o=this,n=o.bK
n.toString
s=A.a0_(n)
if(s==null){n=o.cx
n===$&&A.b()
r=o.bK
r.toString
q=A.e4.prototype.gjo.call(o)
p=o.ch.a
return a.p9(n,b,r,q,p instanceof A.ky?p:null)}else o.h1(a,b.U(0,s))
return null},
aH(a,b){var s,r,q,p,o,n=this
if(n.u$!=null){s=n.k3
if(!s.gR(s)){s=n.u$.k3
s=s.gR(s)}else s=!0}else s=!0
if(s)return
n.xg()
s=n.cf
s.toString
if(s&&n.dN!==B.h){s=n.cx
s===$&&A.b()
r=n.k3
q=r.a
r=r.b
p=n.ch
o=p.a
o=o instanceof A.nN?o:null
p.saF(0,a.kA(s,b,new A.A(0,0,0+q,0+r),n.gX2(),n.dN,o))}else n.ch.saF(0,n.Fe(a,b))},
cK(a,b){var s=this,r=s.k3
if(!r.gR(r)){r=s.u$
if(r==null)r=null
else{r=r.k3
r=r.gR(r)}r=r===!0}else r=!0
if(r)return!1
s.xg()
return a.xx(new A.a2E(s),b,s.bK)},
kx(a){var s=this.k3
if(!s.gR(s)){s=a.k3
s=!s.gR(s)}else s=!1
return s},
dc(a,b){var s=this.k3
if(!s.gR(s)){s=a.k3
s=!s.gR(s)}else s=!1
if(!s)b.BC()
else{this.xg()
s=this.bK
s.toString
b.cA(0,s)}}}
A.a2E.prototype={
$2(a,b){return this.a.pS(a,b)},
$S:15}
A.IL.prototype={
sa5O(a){var s=this
if(s.B.k(0,a))return
s.B=a
s.ah()
s.b_()},
bS(a,b){return this.cK(a,b)},
cK(a,b){var s,r,q=this
if(q.O){s=q.B
r=q.k3
r=new A.v(s.a*r.a,s.b*r.b)
s=r}else s=null
return a.nH(new A.a2F(q),s,b)},
aH(a,b){var s,r,q=this
if(q.u$!=null){s=q.B
r=q.k3
q.h1(a,new A.v(b.a+s.a*r.a,b.b+s.b*r.b))}},
dc(a,b){var s=this.B,r=this.k3
b.az(0,s.a*r.a,s.b*r.b)}}
A.a2F.prototype={
$2(a,b){return this.a.pS(a,b)},
$S:15}
A.IX.prototype={
nX(a){return new A.a_(A.H(1/0,a.a,a.b),A.H(1/0,a.c,a.d))},
i6(a,b){var s,r=this,q=null
if(t.Y.b(a)){s=r.cJ
return s==null?q:s.$1(a)}if(t.c.b(a))return q
if(t.Cs.b(a)){s=r.aj
return s==null?q:s.$1(a)}if(t.hV.b(a))return q
if(t.AJ.b(a)){s=r.aT
return s==null?q:s.$1(a)}if(t.EL.b(a)){s=r.by
return s==null?q:s.$1(a)}if(t.eB.b(a))return q
if(t.zv.b(a))return q
if(t.zs.b(a)){s=r.an
return s==null?q:s.$1(a)}}}
A.IQ.prototype={
bS(a,b){return this.Ox(a,b)&&!0},
i6(a,b){var s=this.aj
if(s!=null&&t.hV.b(a))return s.$1(a)},
gIa(a){return this.aT},
gAR(){return this.by},
ap(a){this.n_(a)
this.by=!0},
ae(a){this.by=!1
this.l_(0)},
nX(a){return new A.a_(A.H(1/0,a.a,a.b),A.H(1/0,a.c,a.d))},
$iiS:1,
gzM(a){return this.bt},
gzP(a){return this.aZ}}
A.J_.prototype={
gdw(){return!0}}
A.vB.prototype={
sJo(a){var s,r=this
if(a===r.B)return
r.B=a
s=r.O
if(s==null||!s)r.b_()},
sz2(a){var s=this,r=s.O
if(a==r)return
if(r==null)r=s.B
s.O=a
if(r!==(a==null?s.B:a))s.b_()},
bS(a,b){return!this.B&&this.iw(a,b)},
fc(a){var s,r=this.u$
if(r!=null){s=this.O
s=!(s==null?this.B:s)}else s=!1
if(s){r.toString
a.$1(r)}}}
A.IR.prototype={
stC(a){var s=this
if(a===s.B)return
s.B=a
s.a5()
s.tu()},
ez(a){if(this.B)return null
return this.Cy(a)},
gjH(){return this.B},
c3(a){if(this.B)return new A.a_(A.H(0,a.a,a.b),A.H(0,a.c,a.d))
return this.Ow(a)},
p5(){this.On()},
bB(){var s,r=this
if(r.B){s=r.u$
if(s!=null)s.hv(t.k.a(A.x.prototype.gY.call(r)))}else r.uT()},
bS(a,b){return!this.B&&this.iw(a,b)},
kx(a){return!this.B},
aH(a,b){if(this.B)return
this.h1(a,b)},
fc(a){if(this.B)return
this.uR(a)}}
A.vx.prototype={
sHg(a){if(this.B===a)return
this.B=a
this.b_()},
sz2(a){return},
bS(a,b){return this.B?this.k3.C(0,b):this.iw(a,b)},
fc(a){var s,r,q=this.u$
if(q!=null){s=this.O
r=this.B
s=!r}else s=!1
if(s){q.toString
a.$1(q)}}}
A.j0.prototype={
sa5Y(a){if(A.aiZ(a,this.cJ))return
this.cJ=a
this.b_()},
sjl(a){var s,r=this
if(J.f(r.bt,a))return
s=r.bt
r.bt=a
if(a!=null!==(s!=null))r.b_()},
skw(a){var s,r=this
if(J.f(r.aj,a))return
s=r.aj
r.aj=a
if(a!=null!==(s!=null))r.b_()},
sa4j(a){var s,r=this
if(J.f(r.aZ,a))return
s=r.aZ
r.aZ=a
if(a!=null!==(s!=null))r.b_()},
sa4p(a){var s,r=this
if(J.f(r.aT,a))return
s=r.aT
r.aT=a
if(a!=null!==(s!=null))r.b_()},
eB(a){var s,r=this
r.h0(a)
if(r.bt!=null){s=r.cJ
s=s==null||s.C(0,B.dP)}else s=!1
if(s)a.sjl(r.bt)
if(r.aj!=null){s=r.cJ
s=s==null||s.C(0,B.Be)}else s=!1
if(s)a.skw(r.aj)
if(r.aZ!=null){s=r.cJ
if(s==null||s.C(0,B.dT))a.stG(r.gXk())
s=r.cJ
if(s==null||s.C(0,B.dS))a.stF(r.gXi())}if(r.aT!=null){s=r.cJ
if(s==null||s.C(0,B.dQ))a.stH(r.gXm())
s=r.cJ
if(s==null||s.C(0,B.dR))a.stE(r.gXg())}},
Xj(){var s,r,q=this.aZ
if(q!=null){s=this.k3
r=s.a*-0.8
s=s.iP(B.k)
s=A.cr(this.bw(0,null),s)
q.$1(new A.hu(null,new A.v(r,0),r,s))}},
Xl(){var s,r,q=this.aZ
if(q!=null){s=this.k3
r=s.a*0.8
s=s.iP(B.k)
s=A.cr(this.bw(0,null),s)
q.$1(new A.hu(null,new A.v(r,0),r,s))}},
Xn(){var s,r,q=this.aT
if(q!=null){s=this.k3
r=s.b*-0.8
s=s.iP(B.k)
s=A.cr(this.bw(0,null),s)
q.$1(new A.hu(null,new A.v(0,r),r,s))}},
Xh(){var s,r,q=this.aT
if(q!=null){s=this.k3
r=s.b*0.8
s=s.iP(B.k)
s=A.cr(this.bw(0,null),s)
q.$1(new A.hu(null,new A.v(0,r),r,s))}}}
A.vE.prototype={
sKw(a){var s=this
if(s.B===a)return
s.B=a
s.GK(a)
s.b_()},
sa0h(a){if(this.O===a)return
this.O=a
this.b_()},
sa1J(a){if(this.al===a)return
this.al=a
this.b_()},
sa1H(a){return},
GK(a){var s=this,r=a.fy
r=a.fx
r=r==null?null:new A.cx(r,B.ak)
s.cf=r
s.bK=null
s.dN=null
s.fH=null
s.i5=null},
sbE(a){if(this.yK==a)return
this.yK=a
this.b_()},
fc(a){this.uR(a)},
eB(a){var s,r,q=this
q.h0(a)
a.a=q.O
a.b=q.al
s=q.B.a
if(s!=null){a.b7(B.Bp,!0)
a.b7(B.Bh,s)}s=q.B.e
if(s!=null)a.b7(B.Bm,s)
s=q.B.f
if(s!=null)a.b7(B.Bq,s)
s=q.B.w
if(s!=null)a.b7(B.Bo,s)
s=q.B.as
if(s!=null)a.b7(B.Bk,s)
s=q.B.at
if(s!=null)a.b7(B.Bl,s)
s=q.B.db
if(s!=null)a.b7(B.Bi,s)
s=q.cf
if(s!=null){a.p4=s
a.d=!0}s=q.bK
if(s!=null){a.R8=s
a.d=!0}s=q.dN
if(s!=null){a.RG=s
a.d=!0}s=q.fH
if(s!=null){a.rx=s
a.d=!0}s=q.i5
if(s!=null){a.ry=s
a.d=!0}s=q.B
r=s.p2
if(r!=null){a.to=r
a.d=!0}s.p3!=null
s=q.B.cx
if(s!=null)a.b7(B.Bj,s)
s=q.B.cy
if(s!=null)a.b7(B.Bn,s)
s=q.yK
if(s!=null){a.y1=s
a.d=!0}s=q.B
r=s.R8
if(r!=null){a.id=r
a.d=!0}s=s.RG
if(s!=null)a.Hm(s)
if(q.B.rx!=null)a.sjl(q.gXo())
if(q.B.ry!=null)a.skw(q.gXe())
if(q.B.u!=null)a.stD(q.gXc())},
Xp(){var s=this.B.rx
if(s!=null)s.$0()},
Xf(){var s=this.B.ry
if(s!=null)s.$0()},
Xd(){var s=this.B.u
if(s!=null)s.$0()}}
A.IB.prototype={
sa_u(a){return},
eB(a){this.h0(a)
a.c=!0}}
A.IP.prototype={
eB(a){this.h0(a)
a.d=a.p2=a.a=!0}}
A.IK.prototype={
sa1I(a){if(a===this.B)return
this.B=a
this.b_()},
fc(a){if(this.B)return
this.uR(a)}}
A.IN.prototype={
sz3(a,b){if(b===this.B)return
this.B=b
this.b_()},
eB(a){this.h0(a)
a.k1=this.B
a.d=!0}}
A.vz.prototype={
sn(a,b){if(this.B.k(0,b))return
this.B=b
this.ah()},
sMI(a){return},
aH(a,b){var s,r=this,q=r.B,p=r.k3
p.toString
s=new A.r5(q,p,b,A.z(t.S,t.M),A.aq(),r.$ti.h("r5<1>"))
s.h3()
a.A9(s,A.e4.prototype.gjo.call(r),b)},
gk_(){return!0}}
A.OY.prototype={
ez(a){var s=this.u$
if(s!=null)return s.jy(a)
return this.Cy(a)}}
A.OZ.prototype={
ap(a){var s=this
s.n_(a)
s.lW$.S(0,s.gqS())
s.xf()},
ae(a){this.lW$.H(0,this.gqS())
this.l_(0)},
aH(a,b){if(this.lV$===0)return
this.h1(a,b)}}
A.yx.prototype={
ap(a){var s
this.en(a)
s=this.u$
if(s!=null)s.ap(a)},
ae(a){var s
this.dE(0)
s=this.u$
if(s!=null)s.ae(0)}}
A.yy.prototype={
ez(a){var s=this.u$
if(s!=null)return s.jy(a)
return this.Co(a)}}
A.j3.prototype={
F(){return"SelectionResult."+this.b}}
A.db.prototype={$iab:1}
A.Jz.prototype={
spb(a){var s=this,r=s.lU$
if(a==r)return
if(a==null)s.H(0,s.gG2())
else if(r==null)s.S(0,s.gG2())
s.G1()
s.lU$=a
s.G3()},
G3(){var s=this
if(s.lU$==null){s.kj$=!1
return}if(s.kj$&&!s.gn(s).d){s.lU$.A(0,s)
s.kj$=!1}else if(!s.kj$&&s.gn(s).d){s.lU$.D(0,s)
s.kj$=!0}},
G1(){var s=this
if(s.kj$){s.lU$.A(0,s)
s.kj$=!1}}}
A.pa.prototype={
F(){return"SelectionEventType."+this.b}}
A.mI.prototype={
F(){return"TextGranularity."+this.b}}
A.a4t.prototype={}
A.rx.prototype={}
A.mu.prototype={}
A.mv.prototype={
F(){return"SelectionExtendDirection."+this.b}}
A.pb.prototype={
F(){return"SelectionStatus."+this.b}}
A.kp.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.T(b)!==A.C(s))return!1
return b instanceof A.kp&&J.f(b.a,s.a)&&J.f(b.b,s.b)&&b.c===s.c&&b.d===s.d},
gv(a){var s=this
return A.V(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.mw.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.T(b)!==A.C(s))return!1
return b instanceof A.mw&&b.a.k(0,s.a)&&b.b===s.b&&b.c===s.c},
gv(a){return A.V(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.wS.prototype={
F(){return"TextSelectionHandleType."+this.b}}
A.J0.prototype={
ez(a){var s,r,q=this.u$
if(q!=null){s=q.jy(a)
r=q.e
r.toString
t.Ch.a(r)
if(s!=null)s+=r.a.b}else s=this.Co(a)
return s},
aH(a,b){var s,r=this.u$
if(r!=null){s=r.e
s.toString
a.eJ(r,t.Ch.a(s).a.U(0,b))}},
cK(a,b){var s,r=this.u$
if(r!=null){s=r.e
s.toString
t.Ch.a(s)
return a.nH(new A.a3_(b,s,r),s.a,b)}return!1}}
A.a3_.prototype={
$2(a,b){return this.c.bS(a,b)},
$S:15}
A.IT.prototype={
qI(){var s=this
if(s.B!=null)return
s.B=s.O.W(s.al)},
sdi(a,b){var s=this
if(s.O.k(0,b))return
s.O=b
s.B=null
s.a5()},
sbE(a){var s=this
if(s.al==a)return
s.al=a
s.B=null
s.a5()},
c3(a){var s,r,q,p=this
p.qI()
if(p.u$==null){s=p.B
return a.bs(new A.a_(s.a+s.c,s.b+s.d))}s=p.B
s.toString
r=a.Id(s)
q=p.u$.fU(r)
s=p.B
return a.bs(new A.a_(s.a+q.a+s.c,s.b+q.b+s.d))},
bB(){var s,r,q,p,o,n,m=this,l=t.k.a(A.x.prototype.gY.call(m))
m.qI()
if(m.u$==null){s=m.B
m.k3=l.bs(new A.a_(s.a+s.c,s.b+s.d))
return}s=m.B
s.toString
r=l.Id(s)
m.u$.co(r,!0)
s=m.u$
q=s.e
q.toString
t.Ch.a(q)
p=m.B
o=p.a
n=p.b
q.a=new A.v(o,n)
s=s.k3
m.k3=l.bs(new A.a_(o+s.a+p.c,n+s.b+p.d))}}
A.Iy.prototype={
qI(){var s=this
if(s.B!=null)return
s.B=s.O.W(s.al)},
se4(a){var s=this
if(s.O.k(0,a))return
s.O=a
s.B=null
s.a5()},
sbE(a){var s=this
if(s.al==a)return
s.al=a
s.B=null
s.a5()},
xy(){var s,r,q,p,o=this
o.qI()
s=o.u$
r=s.e
r.toString
t.Ch.a(r)
q=o.B
q.toString
p=o.k3
p.toString
s=s.k3
s.toString
r.a=q.lA(t.uu.a(p.aa(0,s)))}}
A.IY.prototype={
sa60(a){if(this.aj==a)return
this.aj=a
this.a5()},
sa2S(a){if(this.aZ==a)return
this.aZ=a
this.a5()},
c3(a){var s,r,q=this,p=q.aj!=null||a.b===1/0,o=q.aZ!=null||a.d===1/0,n=q.u$
if(n!=null){s=n.fU(new A.aR(0,a.b,0,a.d))
if(p){n=q.aj
if(n==null)n=1
n=s.a*n}else n=1/0
if(o){r=q.aZ
if(r==null)r=1
r=s.b*r}else r=1/0
return a.bs(new A.a_(n,r))}n=p?0:1/0
return a.bs(new A.a_(n,o?0:1/0))},
bB(){var s,r,q=this,p=t.k.a(A.x.prototype.gY.call(q)),o=q.aj!=null||p.b===1/0,n=q.aZ!=null||p.d===1/0,m=q.u$
if(m!=null){m.co(new A.aR(0,p.b,0,p.d),!0)
if(o){m=q.u$.k3.a
s=q.aj
m*=s==null?1:s}else m=1/0
if(n){s=q.u$.k3.b
r=q.aZ
s*=r==null?1:r}else s=1/0
q.k3=p.bs(new A.a_(m,s))
q.xy()}else{m=o?0:1/0
q.k3=p.bs(new A.a_(m,n?0:1/0))}}}
A.a50.prototype={
uk(a){return new A.a_(A.H(1/0,a.a,a.b),A.H(1/0,a.c,a.d))}}
A.IH.prototype={
syd(a){var s=this,r=s.B
if(r===a)return
if(A.C(a)!==A.C(r)||a.mN(r))s.a5()
s.B=a
s.b!=null},
ap(a){this.Py(a)},
ae(a){this.Pz(0)},
c3(a){return a.bs(this.B.uk(a))},
bB(){var s,r,q,p,o,n,m=this,l=t.k,k=l.a(A.x.prototype.gY.call(m))
m.k3=k.bs(m.B.uk(k))
if(m.u$!=null){s=m.B.B1(l.a(A.x.prototype.gY.call(m)))
l=m.u$
l.toString
k=s.a
r=s.b
q=k>=r
l.co(s,!(q&&s.c>=s.d))
l=m.u$
p=l.e
p.toString
t.Ch.a(p)
o=m.B
n=m.k3
n.toString
if(q&&s.c>=s.d)l=new A.a_(A.H(0,k,r),A.H(0,s.c,s.d))
else{l=l.k3
l.toString}p.a=o.Bc(n,l)}}}
A.yz.prototype={
ap(a){var s
this.en(a)
s=this.u$
if(s!=null)s.ap(a)},
ae(a){var s
this.dE(0)
s=this.u$
if(s!=null)s.ae(0)}}
A.tF.prototype={
F(){return"GrowthDirection."+this.b}}
A.ks.prototype={
gJO(){return!1},
a_l(a,b){var s=this.w
switch(A.bf(this.a).a){case 0:return new A.aR(b,a,s,s)
case 1:return new A.aR(s,s,b,a)}},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.ks))return!1
return b.a===s.a&&b.b===s.b&&b.d===s.d&&b.f===s.f&&b.r===s.r&&b.w===s.w&&b.x===s.x&&b.y===s.y&&b.Q===s.Q&&b.z===s.z},
gv(a){var s=this
return A.V(s.a,s.b,s.d,s.f,s.r,s.w,s.x,s.y,s.Q,s.z,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this,r=A.a([s.a.i(0),s.b.i(0),s.c.i(0),"scrollOffset: "+B.d.N(s.d,1),"remainingPaintExtent: "+B.d.N(s.r,1)],t.s),q=s.f
if(q!==0)r.push("overlap: "+B.d.N(q,1))
r.push("crossAxisExtent: "+B.d.N(s.w,1))
r.push("crossAxisDirection: "+s.x.i(0))
r.push("viewportMainAxisExtent: "+B.d.N(s.y,1))
r.push("remainingCacheExtent: "+B.d.N(s.Q,1))
r.push("cacheOrigin: "+B.d.N(s.z,1))
return"SliverConstraints("+B.b.bf(r,", ")+")"}}
A.a6K.prototype={
bW(){return"SliverGeometry"}}
A.pg.prototype={}
A.JQ.prototype={
i(a){return A.C(this.a).i(0)+"@(mainAxis: "+A.h(this.c)+", crossAxis: "+A.h(this.d)+")"}}
A.wq.prototype={
i(a){var s=this.a
return"layoutOffset="+(s==null?"None":B.d.N(s,1))}}
A.kt.prototype={
i(a){return"paintOffset="+A.h(this.a)}}
A.j6.prototype={}
A.cm.prototype={
gY(){return t.p.a(A.x.prototype.gY.call(this))},
gjD(){return this.ghB()},
ghB(){var s=this,r=t.p
switch(A.bf(r.a(A.x.prototype.gY.call(s)).a).a){case 0:return new A.A(0,0,0+s.id.c,0+r.a(A.x.prototype.gY.call(s)).w)
case 1:return new A.A(0,0,0+r.a(A.x.prototype.gY.call(s)).w,0+s.id.c)}},
p5(){},
Jj(a,b,c){var s=this
if(c>=0&&c<s.id.r&&b>=0&&b<t.p.a(A.x.prototype.gY.call(s)).w)if(s.z1(a,b,c)||!1){a.D(0,new A.JQ(c,b,s))
return!0}return!1},
z1(a,b,c){return!1},
hg(a,b,c){var s=a.d,r=a.r,q=s+r
return A.H(A.H(c,s,q)-A.H(b,s,q),0,r)},
nR(a,b,c){var s=a.d,r=s+a.z,q=a.Q,p=s+q
return A.H(A.H(c,r,p)-A.H(b,r,p),0,q)},
xS(a){return 0},
dc(a,b){},
i6(a,b){}}
A.a30.prototype={
Ee(a){var s
switch(a.a.a){case 0:case 3:s=!1
break
case 2:case 1:s=!0
break
default:s=null}switch(a.b.a){case 0:break
case 1:s=!s
break}return s},
a3_(a,b,c,d){var s,r,q,p,o=this,n={},m=t.p,l=o.Ee(m.a(A.x.prototype.gY.call(o))),k=b.e
k.toString
k=t.D.a(k).a
k.toString
s=k-m.a(A.x.prototype.gY.call(o)).d
r=d-s
q=c-0
p=n.a=null
switch(A.bf(m.a(A.x.prototype.gY.call(o)).a).a){case 0:if(!l){m=b.k3.a
r=m-r
s=o.id.c-m-s}p=new A.v(s,0)
n.a=new A.v(r,q)
break
case 1:if(!l){m=b.k3.b
r=m-r
s=o.id.c-m-s}p=new A.v(0,s)
n.a=new A.v(q,r)
break}return a.a_b(new A.a31(n,b),p)}}
A.a31.prototype={
$1(a){return this.b.bS(a,this.a.a)},
$S:93}
A.PU.prototype={}
A.PX.prototype={
ae(a){this.uO(0)}}
A.J1.prototype={
spr(a){if(this.rR===a)return
this.rR=a
this.a5()}}
A.J2.prototype={
LS(a,b){var s,r
if(b>0){s=a/b
r=B.d.b2(s)
if(Math.abs(s*b-r*b)<1e-10)return r
return B.d.cz(s)}return 0},
B6(a,b){var s,r
if(b>0){s=a/b-1
r=B.d.b2(s)
if(Math.abs(s*b-r*b)<1e-10)return Math.max(0,r)
return Math.max(0,B.d.dd(s))}return 0},
Rw(a){var s,r=this.av$,q=A.n(this).h("aw.1"),p=t.D,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s<a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).an$}return o},
Rx(a){var s,r=this.cV$,q=A.n(this).h("aw.1"),p=t.D,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s>a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).bR$}return o},
bB(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=t.p,a7=a6.a(A.x.prototype.gY.call(a4)),a8=a4.bk
a8.R8=!1
s=a6.a(A.x.prototype.gY.call(a4)).y*a4.rR
a6=a7.d
r=a6+a7.z
q=r+a7.Q
p=a7.a_l(s,s)
o=a4.LS(r,s)
n=isFinite(q)?a4.B6(q,s):a5
if(a4.av$!=null){m=a4.Rw(o)
a4.HM(m,n!=null?a4.Rx(n):0)}else a4.HM(0,0)
if(a4.av$==null)if(!a4.ZX(o,s*o)){l=o<=0?0:a8.gri()*s
a4.id=A.wp(a5,!1,a5,a5,l,0,0,l,a5)
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
for(;i>=o;--i){g=a4.a3d(p)
if(g==null){a4.id=A.wp(a5,!1,a5,a5,0,0,0,0,i*s)
return}k=g.e
k.toString
j.a(k).a=s*i
if(h==null)h=g}if(h==null){a4.av$.hv(p)
h=a4.av$
k=h.e
k.toString
j.a(k).a=s*o}k=h.e
k.toString
k=j.a(k).b
k.toString
i=k+1
k=A.n(a4).h("aw.1")
f=n!=null
while(!0){if(!(!f||i<=n)){e=1/0
break}d=h.e
d.toString
g=k.a(d).an$
if(g!=null){d=g.e
d.toString
d=j.a(d).b
d.toString
d=d!==i}else d=!0
if(d){g=a4.a3c(p,h)
if(g==null){e=i*s
break}}else g.hv(p)
d=g.e
d.toString
j.a(d)
c=d.b
c.toString
d.a=s*c;++i
h=g}k=a4.cV$
k.toString
k=k.e
k.toString
k=j.a(k).b
k.toString
b=s*o
a=s*(k+1)
e=Math.min(e,a8.a1E(a7,o,k,b,a))
a0=a4.hg(a7,b,a)
a1=a4.nR(a7,b,a)
a2=a6+a7.r
a3=isFinite(a2)?a4.B6(a2,s):a5
a4.id=A.wp(a1,a3!=null&&k>=a3||a6>0,a5,a5,e,a0,0,e,a5)
if(e===a)a8.R8=!0
a8.Ih()}}
A.hC.prototype={$icg:1}
A.a35.prototype={
ej(a){}}
A.h4.prototype={
i(a){var s=this.b,r=this.ov$?"keepAlive; ":""
return"index="+A.h(s)+"; "+r+this.P5(0)}}
A.mn.prototype={
ej(a){if(!(a.e instanceof A.h4))a.e=new A.h4(!1,null,null)},
hV(a){var s
this.Cp(a)
s=a.e
s.toString
t.D.a(s)
if(!s.c){t.x.a(a)
s.b=this.bk.p4}},
z6(a,b,c){this.uH(0,b,c)},
ty(a,b){var s,r,q,p=this,o=a.e
o.toString
s=t.D
s.a(o)
if(!o.c){p.N8(a,b)
o=a.e
o.toString
s.a(o).b=p.bk.p4
p.a5()}else{r=p.bd
if(r.j(0,o.b)===a)r.A(0,o.b)
q=a.e
q.toString
s.a(q).b=p.bk.p4
o=o.b
o.toString
r.l(0,o,a)}},
A(a,b){var s=b.e
s.toString
t.D.a(s)
if(!s.c){this.Na(0,b)
return}this.bd.A(0,s.b)
this.iU(b)},
vy(a,b){this.JF(new A.a32(this,a,b),t.p)},
DJ(a){var s,r=this,q=a.e
q.toString
t.D.a(q)
if(q.ov$){r.A(0,a)
s=q.b
s.toString
r.bd.l(0,s,a)
a.e=q
r.Cp(a)
q.c=!0}else r.bk.KI(a)},
ap(a){var s,r,q
this.PA(a)
for(s=this.bd,s=s.gb0(s),s=new A.e1(J.av(s.a),s.b),r=A.n(s).z[1];s.t();){q=s.a;(q==null?r.a(q):q).ap(a)}},
ae(a){var s,r,q
this.PB(0)
for(s=this.bd,s=s.gb0(s),s=new A.e1(J.av(s.a),s.b),r=A.n(s).z[1];s.t();){q=s.a;(q==null?r.a(q):q).ae(0)}},
jr(){this.N9()
var s=this.bd
s.gb0(s).Z(0,this.gKF())},
aU(a){var s
this.BZ(a)
s=this.bd
s.gb0(s).Z(0,a)},
fc(a){this.BZ(a)},
ZX(a,b){var s
this.vy(a,null)
s=this.av$
if(s!=null){s=s.e
s.toString
t.D.a(s).a=b
return!0}this.bk.R8=!0
return!1},
a3d(a){var s,r,q,p=this,o=p.av$
o.toString
o=o.e
o.toString
s=t.D
o=s.a(o).b
o.toString
r=o-1
p.vy(r,null)
o=p.av$
o.toString
q=o.e
q.toString
q=s.a(q).b
q.toString
if(q===r){o.co(a,!1)
return p.av$}p.bk.R8=!0
return null},
a3c(a,b){var s,r,q,p=b.e
p.toString
s=t.D
p=s.a(p).b
p.toString
r=p+1
this.vy(r,b)
p=b.e
p.toString
q=A.n(this).h("aw.1").a(p).an$
if(q!=null){p=q.e
p.toString
p=s.a(p).b
p.toString
p=p===r}else p=!1
if(p){q.co(a,!1)
return q}this.bk.R8=!0
return null},
HM(a,b){var s={}
s.a=a
s.b=b
this.JF(new A.a34(s,this),t.p)},
Kn(a){switch(A.bf(t.p.a(A.x.prototype.gY.call(this)).a).a){case 0:return a.k3.a
case 1:return a.k3.b}},
z1(a,b,c){var s,r,q=this.cV$,p=A.ajV(a)
for(s=A.n(this).h("aw.1");q!=null;){if(this.a3_(p,q,b,c))return!0
r=q.e
r.toString
q=s.a(r).bR$}return!1},
xS(a){var s=a.e
s.toString
return t.D.a(s).a},
kx(a){var s=t.ub.a(a.e)
return(s==null?null:s.b)!=null&&!this.bd.T(0,s.b)},
dc(a,b){var s,r,q,p,o=this
if(!o.kx(a))b.BC()
else{s=t.p
r=o.Ee(s.a(A.x.prototype.gY.call(o)))
q=a.e
q.toString
q=t.D.a(q).a
q.toString
p=q-s.a(A.x.prototype.gY.call(o)).d
switch(A.bf(s.a(A.x.prototype.gY.call(o)).a).a){case 0:b.az(0,!r?o.id.c-a.k3.a-p:p,0)
break
case 1:b.az(0,0,!r?o.id.c-a.k3.b-p:p)
break}}},
aH(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null
if(d.av$==null)return
s=t.p
switch(A.ju(s.a(A.x.prototype.gY.call(d)).a,s.a(A.x.prototype.gY.call(d)).b)){case B.C:r=b.U(0,new A.v(0,d.id.c))
q=B.T0
p=B.fq
o=!0
break
case B.aw:r=b
q=B.fq
p=B.iu
o=!1
break
case B.A:r=b
q=B.iu
p=B.fq
o=!1
break
case B.af:r=b.U(0,new A.v(d.id.c,0))
q=B.T3
p=B.iu
o=!0
break
default:o=c
r=o
p=r
q=p}n=d.av$
for(m=A.n(d).h("aw.1"),l=t.D;n!=null;){k=n.e
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
f=new A.v(k,h)
if(o){e=d.Kn(n)
f=new A.v(k+i*e,h+g*e)}if(j<s.a(A.x.prototype.gY.call(d)).r&&j+d.Kn(n)>0)a.eJ(n,f)
k=n.e
k.toString
n=m.a(k).an$}}}
A.a32.prototype={
$1(a){var s=this.a,r=s.bd,q=this.b,p=this.c
if(r.T(0,q)){r=r.A(0,q)
r.toString
q=r.e
q.toString
t.D.a(q)
s.iU(r)
r.e=q
s.uH(0,r,p)
q.c=!1}else s.bk.a0M(q,p)},
$S:76}
A.a34.prototype={
$1(a){var s,r,q
for(s=this.a,r=this.b;s.a>0;){q=r.av$
q.toString
r.DJ(q);--s.a}for(;s.b>0;){q=r.cV$
q.toString
r.DJ(q);--s.b}s=r.bd
s=s.gb0(s)
q=A.n(s).h("aO<r.E>")
B.b.Z(A.aA(new A.aO(s,new A.a33(),q),!0,q.h("r.E")),r.bk.ga54())},
$S:76}
A.a33.prototype={
$1(a){var s=a.e
s.toString
return!t.D.a(s).ov$},
$S:241}
A.yB.prototype={
ap(a){var s,r,q
this.en(a)
s=this.av$
for(r=t.D;s!=null;){s.ap(a)
q=s.e
q.toString
s=r.a(q).an$}},
ae(a){var s,r,q
this.dE(0)
s=this.av$
for(r=t.D;s!=null;){s.ae(0)
q=s.e
q.toString
s=r.a(q).an$}}}
A.Pb.prototype={}
A.Pc.prototype={}
A.PV.prototype={
ae(a){this.uO(0)}}
A.PW.prototype={}
A.vF.prototype={
gxL(){var s=this,r=t.p
switch(A.ju(r.a(A.x.prototype.gY.call(s)).a,r.a(A.x.prototype.gY.call(s)).b)){case B.C:return s.bJ.d
case B.aw:return s.bJ.a
case B.A:return s.bJ.b
case B.af:return s.bJ.c}},
ga_d(){var s=this,r=t.p
switch(A.ju(r.a(A.x.prototype.gY.call(s)).a,r.a(A.x.prototype.gY.call(s)).b)){case B.C:return s.bJ.b
case B.aw:return s.bJ.c
case B.A:return s.bJ.d
case B.af:return s.bJ.a}},
ga0Y(){switch(A.bf(t.p.a(A.x.prototype.gY.call(this)).a).a){case 0:var s=this.bJ
return s.gb8(s)+s.gbb(s)
case 1:return this.bJ.gcg()}},
ej(a){if(!(a.e instanceof A.kt))a.e=new A.kt(B.k)},
bB(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=null,a2=t.p,a3=a2.a(A.x.prototype.gY.call(a0)),a4=a0.gxL()
a0.ga_d()
s=a0.bJ
s.toString
a2=s.a_f(A.bf(a2.a(A.x.prototype.gY.call(a0)).a))
r=a0.ga0Y()
if(a0.u$==null){q=a0.hg(a3,0,a2)
a0.id=A.wp(a0.nR(a3,0,a2),!1,a1,a1,a2,Math.min(q,a3.r),0,a2,a1)
return}p=a0.hg(a3,0,a4)
o=a3.f
if(o>0)o=Math.max(0,o-p)
s=a0.u$
s.toString
n=Math.max(0,a3.d-a4)
m=Math.min(0,a3.z+a4)
l=a3.r
k=a0.hg(a3,0,a4)
j=a3.Q
i=a0.nR(a3,0,a4)
h=Math.max(0,a3.w-r)
g=a3.a
f=a3.b
s.co(new A.ks(g,f,a3.c,n,a4+a3.e,o,l-k,h,a3.x,a3.y,m,j-i),!0)
e=a0.u$.id
s=e.y
if(s!=null){a0.id=A.wp(a1,!1,a1,a1,0,0,0,0,s)
return}s=e.a
n=a4+s
m=a2+s
d=a0.hg(a3,n,m)
c=p+d
b=a0.nR(a3,0,a4)
a=a0.nR(a3,n,m)
n=e.c
k=e.d
q=Math.min(p+Math.max(n,k+d),l)
l=e.b
k=Math.min(c+k,q)
j=Math.min(a+b+e.z,j)
i=e.e
n=Math.max(c+n,p+e.r)
a0.id=A.wp(j,e.x,n,k,a2+i,q,l,m,a1)
m=a0.u$.e
m.toString
t.v.a(m)
switch(A.ju(g,f)){case B.C:a2=a0.bJ
n=a2.a
s=a2.d+s
m.a=new A.v(n,a0.hg(a3,s,s+a2.b))
break
case B.aw:m.a=new A.v(a0.hg(a3,0,a0.bJ.a),a0.bJ.b)
break
case B.A:a2=a0.bJ
m.a=new A.v(a2.a,a0.hg(a3,0,a2.b))
break
case B.af:a2=a0.bJ
s=a2.c+s
m.a=new A.v(a0.hg(a3,s,s+a2.a),a0.bJ.b)
break}},
z1(a,b,c){var s,r,q,p,o=this,n=o.u$
if(n!=null&&n.id.r>0){n=n.e
n.toString
t.v.a(n)
s=o.hg(t.p.a(A.x.prototype.gY.call(o)),0,o.gxL())
r=o.u$
r.toString
r=o.a_P(r)
n=n.a
q=o.u$.ga2Y()
p=n!=null
if(p)a.c.push(new A.ql(new A.v(-n.a,-n.b)))
q.$3$crossAxisPosition$mainAxisPosition(a,b-r,c-s)
if(p)a.tQ()}return!1},
a_P(a){var s=this,r=t.p
switch(A.ju(r.a(A.x.prototype.gY.call(s)).a,r.a(A.x.prototype.gY.call(s)).b)){case B.C:case B.A:return s.bJ.a
case B.af:case B.aw:return s.bJ.b}},
xS(a){return this.gxL()},
dc(a,b){var s=a.e
s.toString
s=t.v.a(s).a
b.az(0,s.a,s.b)},
aH(a,b){var s,r=this.u$
if(r!=null&&r.id.w){s=r.e
s.toString
a.eJ(r,b.U(0,t.v.a(s).a))}}}
A.P9.prototype={
ap(a){var s
this.en(a)
s=this.u$
if(s!=null)s.ap(a)},
ae(a){var s
this.dE(0)
s=this.u$
if(s!=null)s.ae(0)}}
A.a2A.prototype={
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return b instanceof A.a2A&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gv(a){var s=this
return A.V(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){var s=this
return"RelativeRect.fromLTRB("+B.d.N(s.a,1)+", "+B.d.N(s.b,1)+", "+B.d.N(s.c,1)+", "+B.d.N(s.d,1)+")"}}
A.dP.prototype={
gzc(){var s=this
return s.e!=null||s.f!=null||s.r!=null||s.w!=null||s.x!=null||s.y!=null},
i(a){var s=this,r=A.a([],t.s),q=s.e
if(q!=null)r.push("top="+A.he(q))
q=s.f
if(q!=null)r.push("right="+A.he(q))
q=s.r
if(q!=null)r.push("bottom="+A.he(q))
q=s.w
if(q!=null)r.push("left="+A.he(q))
q=s.x
if(q!=null)r.push("width="+A.he(q))
q=s.y
if(q!=null)r.push("height="+A.he(q))
if(r.length===0)r.push("not positioned")
r.push(s.pO(0))
return B.b.bf(r,"; ")}}
A.wx.prototype={
F(){return"StackFit."+this.b}}
A.vG.prototype={
ej(a){if(!(a.e instanceof A.dP))a.e=new A.dP(null,null,B.k)},
YQ(){var s=this
if(s.u!=null)return
s.u=s.I.W(s.ar)},
se4(a){var s=this
if(s.I.k(0,a))return
s.I=a
s.u=null
s.a5()},
sbE(a){var s=this
if(s.ar==a)return
s.ar=a
s.u=null
s.a5()},
ez(a){return this.Ic(a)},
c3(a){return this.Gk(a,A.afK())},
Gk(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.YQ()
if(e.df$===0){s=a.a
r=a.b
q=A.H(1/0,s,r)
p=a.c
o=a.d
n=A.H(1/0,p,o)
return isFinite(q)&&isFinite(n)?new A.a_(A.H(1/0,s,r),A.H(1/0,p,o)):new A.a_(A.H(0,s,r),A.H(0,p,o))}m=a.a
l=a.c
switch(e.ag.a){case 0:k=new A.aR(0,a.b,0,a.d)
break
case 1:k=A.rk(new A.a_(A.H(1/0,m,a.b),A.H(1/0,l,a.d)))
break
case 2:k=a
break
default:k=null}j=e.av$
for(s=t.B,i=l,h=m,g=!1;j!=null;){r=j.e
r.toString
s.a(r)
if(!r.gzc()){f=b.$2(j,k)
h=Math.max(h,f.a)
i=Math.max(i,f.b)
g=!0}j=r.an$}return g?new A.a_(h,i):new A.a_(A.H(1/0,m,a.b),A.H(1/0,l,a.d))},
bB(){var s,r,q,p,o,n,m,l=this,k=t.k.a(A.x.prototype.gY.call(l))
l.M=!1
l.k3=l.Gk(k,A.afL())
s=l.av$
for(r=t.B,q=t.uu;s!=null;){p=s.e
p.toString
r.a(p)
if(!p.gzc()){o=l.u
o.toString
n=l.k3
n.toString
m=s.k3
m.toString
p.a=o.lA(q.a(n.aa(0,m)))}else{o=l.k3
o.toString
n=l.u
n.toString
l.M=A.alA(s,p,o,n)||l.M}s=p.an$}},
cK(a,b){return this.ya(a,b)},
tM(a,b){this.o4(a,b)},
aH(a,b){var s,r=this,q=r.aY,p=q!==B.h&&r.M,o=r.bz
if(p){p=r.cx
p===$&&A.b()
s=r.k3
o.saF(0,a.kA(p,b,new A.A(0,0,0+s.a,0+s.b),r.gA4(),q,o.a))}else{o.saF(0,null)
r.o4(a,b)}},
m(){this.bz.saF(0,null)
this.hQ()},
iR(a){var s
switch(this.aY.a){case 0:return null
case 1:case 2:case 3:if(this.M){s=this.k3
s=new A.A(0,0,0+s.a,0+s.b)}else s=null
return s}}}
A.Pd.prototype={
ap(a){var s,r,q
this.en(a)
s=this.av$
for(r=t.B;s!=null;){s.ap(a)
q=s.e
q.toString
s=r.a(q).an$}},
ae(a){var s,r,q
this.dE(0)
s=this.av$
for(r=t.B;s!=null;){s.ae(0)
q=s.e
q.toString
s=r.a(q).an$}}}
A.Pe.prototype={}
A.KP.prototype={
k(a,b){if(b==null)return!1
if(J.T(b)!==A.C(this))return!1
return b instanceof A.KP&&b.a.k(0,this.a)&&b.b===this.b},
gv(a){return A.V(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return this.a.i(0)+" at "+A.he(this.b)+"x"}}
A.vH.prototype={
sxV(a){var s,r,q,p,o=this
if(o.k1.k(0,a))return
s=o.k1
o.k1=a
r=s.b
r=A.uw(r,r,1)
q=o.k1.b
if(!r.k(0,A.uw(q,q,1))){r=o.GX()
q=o.ch
p=q.a
p.toString
J.aqQ(p)
q.saF(0,r)
o.ah()}o.a5()},
GX(){var s,r=this.k1.b
r=A.uw(r,r,1)
this.k4=r
s=A.ami(r)
s.ap(this)
return s},
p5(){},
bB(){var s,r=this.k1.a
this.id=r
s=this.u$
if(s!=null)s.hv(A.rk(r))},
bS(a,b){var s=this.u$
if(s!=null)s.bS(A.ajV(a),b)
a.D(0,new A.hx(this,t.Cq))
return!0},
a32(a){var s,r=A.a([],t.f1),q=new A.bg(new Float64Array(16))
q.d2()
s=new A.hk(r,A.a([q],t.hZ),A.a([],t.pw))
this.bS(s,a)
return s},
gdw(){return!0},
aH(a,b){var s=this.u$
if(s!=null)a.eJ(s,b)},
dc(a,b){var s=this.k4
s.toString
b.cA(0,s)
this.Op(a,b)},
a0b(){var s,r,q
try{q=$.as()
s=q.a0T()
r=this.ch.a.a_z(s)
this.ZC()
q.a5b(r)
r.m()}finally{}},
ZC(){var s,r,q,p,o,n,m,l,k,j=null,i=this.ghB(),h=i.gaV(),g=this.k2
g.gkH()
s=i.gaV()
g.gkH()
g=this.ch
r=t.g9
q=g.a.IR(0,new A.v(h.a,0),r)
switch(A.l0().a){case 0:p=g.a.IR(0,new A.v(s.a,i.d-1-0),r)
break
case 1:case 2:case 3:case 4:case 5:p=j
break
default:p=j}h=q==null
if(h&&p==null)return
if(!h&&p!=null){h=q.f
g=q.r
s=q.e
r=q.w
A.am7(new A.i0(p.a,p.b,p.c,p.d,s,h,g,r))
return}o=A.l0()===B.aC
n=h?p:q
h=n.f
g=n.r
s=n.e
r=n.w
m=o?n.a:j
l=o?n.b:j
k=o?n.c:j
A.am7(new A.i0(m,l,k,o?n.d:j,s,h,g,r))},
ghB(){var s=this.id.a0(0,this.k1.b)
return new A.A(0,0,0+s.a,0+s.b)},
gjD(){var s,r=this.k4
r.toString
s=this.id
return A.fY(r,new A.A(0,0,0+s.a,0+s.b))}}
A.Pg.prototype={
ap(a){var s
this.en(a)
s=this.u$
if(s!=null)s.ap(a)},
ae(a){var s
this.dE(0)
s=this.u$
if(s!=null)s.ae(0)}}
A.AO.prototype={
F(){return"CacheExtentStyle."+this.b}}
A.p0.prototype={
i(a){return"RevealedOffset(offset: "+A.h(this.a)+", rect: "+this.b.i(0)+")"}}
A.oY.prototype={
eB(a){this.h0(a)
a.Hm(B.Br)},
fc(a){var s=this.gHI()
new A.aO(s,new A.a39(),A.aU(s).h("aO<1>")).Z(0,a)},
sfv(a){if(a===this.M)return
this.M=a
this.a5()},
sa0X(a){if(a===this.u)return
this.u=a
this.a5()},
sig(a,b){var s=this,r=s.I
if(b===r)return
if(s.b!=null)r.H(0,s.gtt())
s.I=b
if(s.b!=null)b.S(0,s.gtt())
s.a5()},
sa_C(a){if(a===this.ar)return
this.ar=a
this.a5()},
sa_D(a){if(a===this.aY)return
this.aY=a
this.a5()},
ap(a){this.PC(a)
this.I.S(0,this.gtt())},
ae(a){this.I.H(0,this.gtt())
this.PD(0)},
gdw(){return!0},
JW(a,b,c,d,e,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.azj(h.I.k4,e),f=a0+a2
for(s=e.a,r=t.v,q=a0,p=0;c!=null;){o=a5<=0?0:a5
n=Math.max(b,-o)
m=b-n
c.co(new A.ks(h.M,e,g,o,p,f-q,Math.max(0,a4-q+a0),d,h.u,a1,n,Math.max(0,a3+m)),!0)
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
b=Math.min(n+i,0)}switch(s){case 0:i=h.iW
i===$&&A.b()
h.iW=i+k
break
case 1:i=h.iV
i===$&&A.b()
h.iV=i-k
break}if(l.x)h.fE=!0
c=a.$1(c)}return 0},
iR(a){var s,r,q,p,o,n
switch(this.bz.a){case 0:return null
case 1:case 2:case 3:break}s=this.k3
r=0+s.a
q=0+s.b
s=t.p
if(s.a(A.x.prototype.gY.call(a)).f===0||!isFinite(s.a(A.x.prototype.gY.call(a)).y))return new A.A(0,0,r,q)
p=s.a(A.x.prototype.gY.call(a)).y-s.a(A.x.prototype.gY.call(a)).r+s.a(A.x.prototype.gY.call(a)).f
switch(A.ju(this.M,s.a(A.x.prototype.gY.call(a)).b)){case B.A:o=0+p
n=0
break
case B.C:q-=p
n=0
o=0
break
case B.aw:n=0+p
o=0
break
case B.af:r-=p
n=0
o=0
break
default:n=0
o=0}return new A.A(n,o,r,q)},
yf(a){var s,r=this,q=r.ag
if(q==null){q=r.k3
return new A.A(0,0,0+q.a,0+q.b)}switch(A.bf(r.M).a){case 1:s=r.k3
return new A.A(0,0-q,0+s.a,0+s.b+q)
case 0:s=r.k3
return new A.A(0-q,0,0+s.a+q,0+s.b)}},
aH(a,b){var s,r,q,p=this
if(p.av$==null)return
s=p.fE&&p.bz!==B.h
r=p.c7
if(s){s=p.cx
s===$&&A.b()
q=p.k3
r.saF(0,a.kA(s,b,new A.A(0,0,0+q.a,0+q.b),p.gX3(),p.bz,r.a))}else{r.saF(0,null)
p.Ff(a,b)}},
m(){this.c7.saF(0,null)
this.hQ()},
Ff(a,b){var s,r,q,p,o,n,m,l
for(s=this.gHI(),r=s.length,q=t.v,p=b.a,o=b.b,n=0;n<s.length;s.length===r||(0,A.Q)(s),++n){m=s[n]
if(m.id.w){l=m.e
l.toString
l=q.a(l).a
a.eJ(m,new A.v(p+l.a,o+l.b))}}},
cK(a,b){var s,r,q,p,o,n,m,l,k={}
k.a=k.b=null
switch(A.bf(this.M).a){case 1:k.b=b.b
k.a=b.a
break
case 0:k.b=b.a
k.a=b.b
break}s=new A.pg(a.a,a.b,a.c)
for(r=this.ga_Q(),q=r.length,p=t.v,o=0;o<r.length;r.length===q||(0,A.Q)(r),++o){n=r[o]
if(!n.id.w)continue
m=new A.bg(new Float64Array(16))
m.d2()
l=n.e
l.toString
l=p.a(l).a
m.az(0,l.a,l.b)
if(a.a_c(new A.a38(k,this,n,s),m))return!0}return!1},
kI(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=a instanceof A.cm
for(s=t.d,r=c,q=a,p=0;o=q.c,o!==d;q=o){o.toString
s.a(o)
if(q instanceof A.E)r=q
if(o instanceof A.cm){n=o.xS(q)
n.toString
p+=n}else{p=0
b=!1}}if(r!=null){s=r.c
s.toString
t.q0.a(s)
m=t.p.a(A.x.prototype.gY.call(s)).b
switch(A.bf(d.M).a){case 0:l=r.k3.a
break
case 1:l=r.k3.b
break
default:l=c}if(a1==null)a1=a.ghB()
k=A.fY(a.bw(0,r),a1)}else{if(b){t.q0.a(a)
s=t.p
m=s.a(A.x.prototype.gY.call(a)).b
l=a.id.a
if(a1==null)switch(A.bf(d.M).a){case 0:a1=new A.A(0,0,0+l,0+s.a(A.x.prototype.gY.call(a)).w)
break
case 1:a1=new A.A(0,0,0+s.a(A.x.prototype.gY.call(a)).w,0+a.id.a)
break}}else{s=d.I.at
s.toString
a1.toString
return new A.p0(s,a1)}k=a1}t.q0.a(q)
switch(A.ju(d.M,m)){case B.C:s=k.d
p+=l-s
j=s-k.b
break
case B.aw:s=k.a
p+=s
j=k.c-s
break
case B.A:s=k.b
p+=s
j=k.d-s
break
case B.af:s=k.c
p+=l-s
j=s-k.a
break
default:j=c}q.id.toString
p=d.Mh(q,p)
i=A.fY(a.bw(0,d),a1)
h=d.a43(q)
switch(t.p.a(A.x.prototype.gY.call(q)).b.a){case 0:p-=h
break
case 1:switch(A.bf(d.M).a){case 1:p-=i.d-i.b
break
case 0:p-=i.c-i.a
break}break}s=d.M
switch(A.bf(s).a){case 0:g=d.k3.a-h
break
case 1:g=d.k3.b-h
break
default:g=c}f=p-(g-j)*a0
o=d.I.at
o.toString
e=o-f
switch(s.a){case 2:i=i.az(0,0,e)
break
case 1:i=i.az(0,e,0)
break
case 0:i=i.az(0,0,-e)
break
case 3:i=i.az(0,-e,0)
break}return new A.p0(f,i)},
HO(a,b,c){switch(A.ju(this.M,c)){case B.C:return new A.v(0,this.k3.b-(b+a.id.c))
case B.aw:return new A.v(b,0)
case B.A:return new A.v(0,b)
case B.af:return new A.v(this.k3.a-(b+a.id.c),0)}},
ek(a,b,c,d){var s=this
if(!s.I.r.glz())return s.pR(a,b,c,d)
s.pR(a,null,c,A.alC(a,b,c,s.I,d,s))},
mP(){return this.ek(B.aQ,null,B.v,null)},
kR(a,b){return this.ek(B.aQ,a,B.v,b)},
$iIx:1}
A.a39.prototype={
$1(a){var s=a.id
return s.w||s.z>0},
$S:243}
A.a38.prototype={
$1(a){var s=this,r=s.c,q=s.a,p=s.b.a0d(r,q.b)
return r.Jj(s.d,q.a,p)},
$S:93}
A.vI.prototype={
ej(a){if(!(a.e instanceof A.j6))a.e=new A.j6(null,null,B.k)},
sa_h(a){if(a===this.rV)return
this.rV=a
this.a5()},
saV(a){if(a==this.dO)return
this.dO=a
this.a5()},
gjH(){return!0},
c3(a){return new A.a_(A.H(1/0,a.a,a.b),A.H(1/0,a.c,a.d))},
bB(){var s,r,q,p,o,n,m,l,k,j=this
switch(A.bf(j.M).a){case 1:j.I.nN(j.k3.b)
break
case 0:j.I.nN(j.k3.a)
break}if(j.dO==null){j.iW=j.iV=0
j.fE=!1
j.I.nK(0,0)
return}switch(A.bf(j.M).a){case 1:s=j.k3
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
o=j.Rh(r,q,p+0)
if(o!==0){p=j.I
n=p.at
n.toString
p.at=n+o
p.ch=!0}else{p=j.I
n=j.iV
n===$&&A.b()
m=j.rV
n=Math.min(0,n+r*m)
l=j.iW
l===$&&A.b()
if(p.nK(n,Math.max(0,l-r*(1-m))))break}k=s+1
if(k<10){s=k
continue}else break}while(!0)},
Rh(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.iW=e.iV=0
e.fE=!1
s=a*e.rV-c
r=A.H(s,0,a)
q=a-s
p=A.H(q,0,a)
switch(e.aY.a){case 0:e.ag=e.ar
break
case 1:e.ag=a*e.ar
break}o=e.ag
o.toString
n=a+2*o
m=s+o
l=A.H(m,0,n)
k=A.H(n-m,0,n)
j=e.dO.e
j.toString
i=A.n(e).h("aw.1").a(j).bR$
j=i==null
if(!j){h=Math.max(a,s)
g=e.JW(e.ga_N(),A.H(q,-o,0),i,b,B.nH,p,a,0,l,r,h-a)
if(g!==0)return-g}q=e.dO
o=-s
h=Math.max(0,o)
o=j?Math.min(0,o):0
j=s>=a?s:r
f=e.ag
f.toString
return e.JW(e.ga_L(),A.H(s,-f,0),q,b,B.nG,j,a,o,k,p,h)},
Mh(a,b){var s,r,q,p,o=this
switch(t.p.a(A.x.prototype.gY.call(a)).b.a){case 0:s=o.dO
for(r=A.n(o).h("aw.1"),q=0;s!==a;){q+=s.id.a
p=s.e
p.toString
s=r.a(p).an$}return q+b
case 1:r=o.dO.e
r.toString
p=A.n(o).h("aw.1")
s=p.a(r).bR$
for(q=0;s!==a;){q-=s.id.a
r=s.e
r.toString
s=p.a(r).bR$}return q-b}},
a43(a){var s,r,q,p=this
switch(t.p.a(A.x.prototype.gY.call(a)).b.a){case 0:s=p.dO
for(r=A.n(p).h("aw.1");s!==a;){s.id.toString
q=s.e
q.toString
s=r.a(q).an$}return 0
case 1:r=p.dO.e
r.toString
q=A.n(p).h("aw.1")
s=q.a(r).bR$
for(;s!==a;){s.id.toString
r=s.e
r.toString
s=q.a(r).bR$}return 0}},
dc(a,b){var s=a.e
s.toString
s=t.v.a(s).a
b.az(0,s.a,s.b)},
a0d(a,b){var s,r=a.e
r.toString
t.v.a(r)
s=t.p
switch(A.ju(s.a(A.x.prototype.gY.call(a)).a,s.a(A.x.prototype.gY.call(a)).b)){case B.A:return b-r.a.b
case B.aw:return b-r.a.a
case B.C:return a.id.c-(b-r.a.b)
case B.af:return a.id.c-(b-r.a.a)}},
gHI(){var s,r,q=this,p=A.a([],t.jT),o=q.av$
if(o==null)return p
for(s=A.n(q).h("aw.1");o!=q.dO;){o.toString
p.push(o)
r=o.e
r.toString
o=s.a(r).an$}o=q.cV$
for(;!0;){o.toString
p.push(o)
if(o===q.dO)return p
r=o.e
r.toString
o=s.a(r).bR$}},
ga_Q(){var s,r,q,p=this,o=A.a([],t.jT)
if(p.av$==null)return o
s=p.dO
for(r=A.n(p).h("aw.1");s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).an$}q=p.dO.e
q.toString
s=r.a(q).bR$
for(;s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).bR$}return o}}
A.ie.prototype={
ap(a){var s,r,q
this.en(a)
s=this.av$
for(r=A.n(this).h("ie.0");s!=null;){s.ap(a)
q=s.e
q.toString
s=r.a(q).an$}},
ae(a){var s,r,q
this.dE(0)
s=this.av$
for(r=A.n(this).h("ie.0");s!=null;){s.ae(0)
q=s.e
q.toString
s=r.a(q).an$}}}
A.p6.prototype={
F(){return"ScrollDirection."+this.b}}
A.fs.prototype={
oW(a,b,c,d){var s=d.a===B.v.a
if(s){this.dz(b)
return A.bH(null,t.H)}else return this.hd(b,c,d)},
i(a){var s=this,r=A.a([],t.s)
s.P_(r)
r.push(A.C(s.w).i(0))
r.push(s.r.i(0))
r.push(A.h(s.fr))
r.push(s.k4.i(0))
return"<optimized out>#"+A.bL(s)+"("+B.b.bf(r,", ")+")"},
cb(a){var s=this.at
if(s!=null)a.push("offset: "+B.d.N(s,1))}}
A.q6.prototype={}
A.kn.prototype={
F(){return"SchedulerPhase."+this.b}}
A.a1u.prototype={}
A.dw.prototype={
a_a(a){var s=this.f$
s.push(a)
if(s.length===1){s=$.aM()
s.ay=this.gSP()
s.ch=$.aa}},
KN(a){var s=this.f$
B.b.A(s,a)
if(s.length===0){s=$.aM()
s.ay=null
s.ch=$.aa}},
SQ(a){var s,r,q,p,o,n,m,l,k=this.f$,j=A.aA(k,!0,t.wX)
for(p=j.length,o=0;o<p;++o){s=j[o]
try{if(B.b.C(k,s))s.$1(a)}catch(n){r=A.ag(n)
q=A.aB(n)
m=A.bk("while executing callbacks for FrameTiming")
l=$.fA()
if(l!=null)l.$1(new A.bz(r,q,"Flutter framework",m,null,!1))}}},
t4(a){this.r$=a
switch(a.a){case 0:case 1:this.G4(!0)
break
case 2:case 3:this.G4(!1)
break}},
DY(){if(this.y$)return
this.y$=!0
A.ch(B.v,this.gY6())},
Y7(){this.y$=!1
if(this.a2a())this.DY()},
a2a(){var s,r,q,p,o,n,m=this,l="No element",k=m.x$,j=k.c===0
if(j||m.b>0)return!1
if(j)A.X(A.a6(l))
s=k.q0(0)
j=s.b
if(m.w$.$2$priority$scheduler(j,m)){try{if(k.c===0)A.X(A.a6(l));++k.d
k.q0(0)
p=k.c-1
o=k.q0(p)
k.b[p]=null
k.c=p
if(p>0)k.Rl(o,0)
s.a6L()}catch(n){r=A.ag(n)
q=A.aB(n)
j=A.bk("during a task callback")
A.dJ(new A.bz(r,q,"scheduler library",j,null,!1))}return k.c!==0}return!1},
pF(a,b){var s,r=this
r.hK()
s=++r.z$
r.Q$.l(0,s,new A.q6(a))
return r.z$},
pE(a){return this.pF(a,!1)},
gID(){var s=this
if(s.ay$==null){if(s.CW$===B.cN)s.hK()
s.ay$=new A.b4(new A.a8($.aa,t.U),t.R)
s.ax$.push(new A.a4_(s))}return s.ay$.a},
gJ2(){return this.cx$},
G4(a){if(this.cx$===a)return
this.cx$=a
if(a)this.hK()},
IE(){var s=$.aM()
if(s.w==null){s.w=this.gTT()
s.x=$.aa}if(s.y==null){s.y=this.gUk()
s.z=$.aa}},
yB(){switch(this.CW$.a){case 0:case 4:this.hK()
return
case 1:case 2:case 3:return}},
hK(){var s,r=this
if(!r.ch$)s=!(A.dw.prototype.gJ2.call(r)&&r.c8$)
else s=!0
if(s)return
r.IE()
$.aM().hK()
r.ch$=!0},
Mc(){if(this.ch$)return
this.IE()
$.aM().hK()
this.ch$=!0},
uo(){var s,r,q=this
if(q.cy$||q.CW$!==B.cN)return
q.cy$=!0
s=new A.Ku(null,0,A.a([],t.vS))
s.pL(0,"Warm-up frame")
r=q.ch$
A.ch(B.v,new A.a41(q))
A.ch(B.v,new A.a42(q,r))
q.a3X(new A.a43(q,s))},
a5k(){var s=this
s.dx$=s.CR(s.dy$)
s.db$=null},
CR(a){var s=this.db$,r=s==null?B.v:new A.aP(a.a-s.a)
return A.cc(B.d.b2(r.a/$.anP)+this.dx$.a,0,0)},
TU(a){if(this.cy$){this.go$=!0
return}this.J6(a)},
Ul(){var s=this
if(s.go$){s.go$=!1
s.ax$.push(new A.a3Z(s))
return}s.J8()},
J6(a){var s,r,q=this,p=q.id$,o=p==null
if(!o)p.pL(0,"Frame")
if(q.db$==null)q.db$=a
r=a==null
q.fr$=q.CR(r?q.dy$:a)
if(!r)q.dy$=a
q.ch$=!1
try{if(!o)p.pL(0,"Animate")
q.CW$=B.TC
s=q.Q$
q.Q$=A.z(t.S,t.b1)
J.np(s,new A.a40(q))
q.as$.X(0)}finally{q.CW$=B.TD}},
a5i(a){var s=this,r=s.k1$,q=r==null
if(!q&&r!==a)return null
if(r===a)++s.k2$
else if(q){s.k1$=a
s.k2$=1}return new A.a1u(s.gSx())},
Sy(){if(--this.k2$===0){this.k1$=null
$.aM()}},
J8(){var s,r,q,p,o,n,m,l=this,k=l.id$,j=k==null
if(!j)k.t_(0)
try{l.CW$=B.B9
for(p=l.at$,o=p.length,n=0;n<p.length;p.length===o||(0,A.Q)(p),++n){s=p[n]
m=l.fr$
m.toString
l.EK(s,m)}l.CW$=B.TE
p=l.ax$
r=A.aA(p,!0,t.qP)
B.b.X(p)
for(p=r,o=p.length,n=0;n<p.length;p.length===o||(0,A.Q)(p),++n){q=p[n]
m=l.fr$
m.toString
l.EK(q,m)}}finally{l.CW$=B.cN
if(!j)k.t_(0)
l.fr$=null}},
EL(a,b,c){var s,r,q,p
try{a.$1(b)}catch(q){s=A.ag(q)
r=A.aB(q)
p=A.bk("during a scheduler callback")
A.dJ(new A.bz(s,r,"scheduler library",p,null,!1))}},
EK(a,b){return this.EL(a,b,null)}}
A.a4_.prototype={
$1(a){var s=this.a
s.ay$.ey(0)
s.ay$=null},
$S:2}
A.a41.prototype={
$0(){this.a.J6(null)},
$S:0}
A.a42.prototype={
$0(){var s=this.a
s.J8()
s.a5k()
s.cy$=!1
if(this.b)s.hK()},
$S:0}
A.a43.prototype={
$0(){var s=0,r=A.a4(t.H),q=this
var $async$$0=A.a0(function(a,b){if(a===1)return A.a1(b,r)
while(true)switch(s){case 0:s=2
return A.a5(q.a.gID(),$async$$0)
case 2:q.b.t_(0)
return A.a2(null,r)}})
return A.a3($async$$0,r)},
$S:50}
A.a3Z.prototype={
$1(a){var s=this.a
s.ch$=!1
s.hK()},
$S:2}
A.a40.prototype={
$2(a,b){var s,r,q=this.a
if(!q.as$.C(0,a)){s=b.a
r=q.fr$
r.toString
q.EL(s,r,b.b)}},
$S:245}
A.pB.prototype={
szz(a,b){var s=this
if(b===s.b)return
s.b=b
if(b)s.AI()
else if(s.a!=null&&s.e==null)s.e=$.bO.pF(s.gx7(),!1)},
ga3C(){if(this.a==null)return!1
if(this.b)return!1
var s=$.bO
s.toString
if(A.dw.prototype.gJ2.call(s)&&s.c8$)return!0
if($.bO.CW$!==B.cN)return!0
return!1},
mS(a){var s,r,q=this
q.a=new A.mM(new A.b4(new A.a8($.aa,t.U),t.R))
if(!q.b)s=q.e==null
else s=!1
if(s)q.e=$.bO.pF(q.gx7(),!1)
s=$.bO
r=s.CW$.a
if(r>0&&r<4){s=s.fr$
s.toString
q.c=s}s=q.a
s.toString
return s},
mT(a,b){var s=this,r=s.a
if(r==null)return
s.c=s.a=null
s.AI()
if(b)r.Da(s)
else r.GA()},
fZ(a){return this.mT(a,!1)},
Z6(a){var s,r=this
r.e=null
s=r.c
if(s==null)s=r.c=a
r.d.$1(new A.aP(a.a-s.a))
if(!r.b&&r.a!=null&&r.e==null)r.e=$.bO.pF(r.gx7(),!0)},
AI(){var s,r=this.e
if(r!=null){s=$.bO
s.Q$.A(0,r)
s.as$.D(0,r)
this.e=null}},
m(){var s=this,r=s.a
if(r!=null){s.a=null
s.AI()
r.Da(s)}},
a5I(a,b){var s=""+"Ticker()"
return s.charCodeAt(0)==0?s:s},
i(a){return this.a5I(a,!1)}}
A.mM.prototype={
GA(){this.c=!0
this.a.ey(0)
var s=this.b
if(s!=null)s.ey(0)},
Da(a){var s
this.c=!1
s=this.b
if(s!=null)s.hW(new A.wX(a))},
Lq(a){var s,r,q=this,p=new A.a87(a)
if(q.b==null){s=q.b=new A.b4(new A.a8($.aa,t.U),t.R)
r=q.c
if(r!=null)if(r)s.ey(0)
else s.hW(B.Ze)}q.b.a.ee(p,p,t.H)},
lC(a,b){return this.a.a.lC(a,b)},
iO(a){return this.lC(a,null)},
ee(a,b,c){return this.a.a.ee(a,b,c)},
b5(a,b){return this.ee(a,null,b)},
fd(a){return this.a.a.fd(a)},
i(a){var s=A.bL(this),r=this.c
if(r==null)r="active"
else r=r?"complete":"canceled"
return"<optimized out>#"+s+"("+r+")"},
$iah:1}
A.a87.prototype={
$1(a){this.a.$0()},
$S:17}
A.wX.prototype={
i(a){var s=this.a
if(s!=null)return"This ticker was canceled: "+s.i(0)
return'The ticker was canceled before the "orCancel" property was first used.'},
$ic4:1}
A.a4u.prototype={}
A.wc.prototype={
i(a){return"SemanticsTag("+this.a+")"}}
A.cx.prototype={
U(a,b){var s,r,q,p,o,n,m,l=this.a,k=l.length
if(k===0)return b
s=b.a
if(s.length===0)return this
r=A.aA(this.b,!0,t.lS)
q=b.b
p=q.length
if(p!==0)for(o=0;o<q.length;q.length===p||(0,A.Q)(q),++o){n=q[o]
m=n.a
r.push(n.HW(new A.eQ(m.a+k,m.b+k)))}return new A.cx(l+s,r)},
k(a,b){if(b==null)return!1
return J.T(b)===A.C(this)&&b instanceof A.cx&&b.a===this.a&&A.cS(b.b,this.b)},
gv(a){return A.V(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"AttributedString('"+this.a+"', attributes: "+A.h(this.b)+")"}}
A.JA.prototype={
bW(){return"SemanticsData"},
k(a,b){var s=this
if(b==null)return!1
return b instanceof A.JA&&b.a===s.a&&b.b===s.b&&b.c.k(0,s.c)&&b.d.k(0,s.d)&&b.e.k(0,s.e)&&b.f.k(0,s.f)&&b.r.k(0,s.r)&&b.w===s.w&&b.x==s.x&&b.cx.k(0,s.cx)&&A.aiZ(b.cy,s.cy)&&b.Q==s.Q&&b.as==s.as&&b.at==s.at&&b.ax==s.ax&&J.f(b.db,s.db)&&b.dx===s.dx&&b.dy===s.dy&&A.avN(b.fr,s.fr)},
gv(a){var s=this,r=A.d8(s.fr)
return A.V(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.cx,s.cy,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,A.V(s.CW,s.db,s.dx,s.dy,r,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a))}}
A.PC.prototype={}
A.JC.prototype={
bW(){return"SemanticsProperties"}}
A.bW.prototype={
sbl(a,b){var s
if(!A.aug(this.r,b)){s=A.ahm(b)
this.r=s?null:b
this.hU()}},
saO(a,b){if(!this.w.k(0,b)){this.w=b
this.hU()}},
sJL(a){if(this.as===a)return
this.as=a
this.hU()},
XO(a){var s,r,q,p,o,n,m,l=this,k=l.ax
if(k!=null)for(s=k.length,r=0;r<s;++r)k[r].ch=!0
for(k=a.length,r=0;r<k;++r)a[r].ch=!1
k=l.ax
if(k!=null)for(s=k.length,q=t.aa,p=!1,r=0;r<k.length;k.length===s||(0,A.Q)(k),++r){o=k[r]
if(o.ch){n=J.cp(o)
if(q.a(A.I.prototype.gaJ.call(n,o))===l){o.c=null
if(l.b!=null)o.ae(0)}p=!0}}else p=!1
for(k=a.length,s=t.aa,r=0;r<a.length;a.length===k||(0,A.Q)(a),++r){o=a[r]
q=J.cp(o)
if(s.a(A.I.prototype.gaJ.call(q,o))!==l){if(s.a(A.I.prototype.gaJ.call(q,o))!=null){q=s.a(A.I.prototype.gaJ.call(q,o))
if(q!=null){o.c=null
if(q.b!=null)o.ae(0)}}o.c=l
q=l.b
if(q!=null)o.ap(q)
q=o.a
n=l.a
if(q<=n){o.a=n+1
o.jr()}p=!0}}if(!p&&l.ax!=null)for(k=l.ax,s=k.length,m=0;m<s;++m)if(k[m].e!==a[m].e){p=!0
break}l.ax=a
if(p)l.hU()},
ga2P(){var s=this.ax
s=s==null?null:s.length!==0
return s===!0},
xn(a){var s,r,q,p=this.ax
if(p!=null)for(s=p.length,r=0;r<p.length;p.length===s||(0,A.Q)(p),++r){q=p[r]
if(!a.$1(q)||!q.xn(a))return!1}return!0},
jr(){var s=this.ax
if(s!=null)B.b.Z(s,this.gKF())},
ap(a){var s,r,q,p=this
p.uD(a)
for(s=a.c;s.T(0,p.e);)p.e=$.a4L=($.a4L+1)%65535
s.l(0,p.e,p)
a.d.A(0,p)
if(p.CW){p.CW=!1
p.hU()}s=p.ax
if(s!=null)for(r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].ap(a)},
ae(a){var s,r,q,p,o,n=this,m=t.nU
m.a(A.I.prototype.gbq.call(n)).c.A(0,n.e)
m.a(A.I.prototype.gbq.call(n)).d.D(0,n)
n.dE(0)
m=n.ax
if(m!=null)for(s=m.length,r=t.aa,q=0;q<m.length;m.length===s||(0,A.Q)(m),++q){p=m[q]
o=J.cp(p)
if(r.a(A.I.prototype.gaJ.call(o,p))===n)o.ae(p)}n.hU()},
hU(){var s=this
if(s.CW)return
s.CW=!0
if(s.b!=null)t.nU.a(A.I.prototype.gbq.call(s)).b.D(0,s)},
jw(a,b,c){var s,r=this
if(c==null)c=$.agh()
if(r.fr.k(0,c.p4))if(r.id.k(0,c.ry))if(r.k2===c.x2)if(r.k3===c.xr)if(r.fx.k(0,c.R8))if(r.fy.k(0,c.RG))if(r.go.k(0,c.rx))if(r.k1===c.to)if(r.dy===c.aX)if(r.ok==c.y1)if(r.p1==c.id)if(r.RG==c.ao)if(r.rx==c.aq)if(r.ry==c.ak)if(r.db===c.f)if(r.Q==c.k1)s=r.at!==c.p2
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
r.dy=c.aX
r.ok=c.y1
r.p1=c.id
r.cx=A.ou(c.e,t.nS,t.BT)
r.cy=A.ou(c.p3,t.zN,t.M)
r.db=c.f
r.p2=c.y2
r.RG=c.ao
r.rx=c.aq
r.ry=c.ak
r.at=c.p2
r.p4=c.k2
r.R8=c.k3
r.Q=c.k1
r.to=c.k4
r.x1=c.ok
r.x2=c.p1
r.XO(b==null?B.i_:b)},
a5W(a,b){return this.jw(a,null,b)},
M0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7={}
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
a7.y=s==null?null:A.k6(s,t.xJ)
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
for(s=a6.cy,s=A.iN(s,s.r);s.t();)q.D(0,A.ak9(s.d))
a6.k4!=null
if(a6.at)a6.xn(new A.a4M(a7,a6,q))
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
B.b.hN(a5)
return new A.JA(s,p,o,n,m,l,k,j,i,d,c,b,a,a0,a1,a2,a3,a4,h,e,g,r,f,a5)},
R5(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.M0()
if(!a.ga2P()||a.at){s=$.apm()
r=s}else{q=a.ax.length
p=a.RO()
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
if(c==null)c=$.apo()
b=l==null?$.apn():l
a1.a.push(new A.JB(n,a0.a,a0.b,-1,-1,-1,0,g,f,e,d,a0.cx,m.a,m.b,h.a,h.b,k.a,k.b,j.a,j.b,i.a,i.b,a0.w,a0.x,A.aj0(c),s,r,b,a0.dy))
a.CW=!1},
RO(){var s,r,q,p,o,n,m,l,k,j=this,i=j.ok,h=t.aa,g=h.a(A.I.prototype.gaJ.call(j,j))
while(!0){s=i==null
if(!(s&&g!=null))break
i=g.ok
g=h.a(A.I.prototype.gaJ.call(g,g))}r=j.ax
if(!s){r.toString
r=A.ay0(r,i)}h=t.Dr
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
if(h-0<=32)A.JW(p,0,h,J.aiy())
else A.JV(p,0,h,J.aiy())}B.b.K(q,p)
B.b.X(p)}p.push(new A.jm(m,l,n))}if(o!=null)B.b.hN(p)
B.b.K(q,p)
h=t.wg
return A.aA(new A.aI(q,new A.a4K(),h),!0,h.h("bq.E"))},
Mn(a){if(this.b==null)return
B.mb.eh(0,a.L9(this.e))},
bW(){return"SemanticsNode#"+this.e},
a5E(a,b,c){return new A.PC(a,this,b,!0,!0,null,c)},
L7(a){return this.a5E(B.Fi,null,a)}}
A.a4M.prototype={
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
if(s!=null){r=q.y;(r==null?q.y=A.b7(t.xJ):r).K(0,s)}for(s=this.b.cy,s=A.iN(s,s.r),r=this.c;s.t();)r.D(0,A.ak9(s.d))
a.k4!=null
s=q.c
r=q.x
q.c=A.aet(a.fr,a.ok,s,r)
r=q.r
s=q.x
q.r=A.aet(a.id,a.ok,r,s)
q.cy=Math.max(q.cy,a.k3+a.k2)
return!0},
$S:70}
A.a4K.prototype={
$1(a){return a.a},
$S:247}
A.jd.prototype={
b3(a,b){return B.d.b3(this.b,b.b)},
$ibF:1}
A.hd.prototype={
b3(a,b){return B.d.b3(this.a,b.a)},
MO(){var s,r,q,p,o,n,m,l,k,j=A.a([],t.iV)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q){p=s[q]
o=p.w
j.push(new A.jd(!0,A.nj(p,new A.v(o.a- -0.1,o.b- -0.1)).a,p))
j.push(new A.jd(!1,A.nj(p,new A.v(o.c+-0.1,o.d+-0.1)).a,p))}B.b.hN(j)
n=A.a([],t.dK)
for(s=j.length,r=this.b,o=t.V,m=null,l=0,q=0;q<j.length;j.length===s||(0,A.Q)(j),++q){k=j[q]
if(k.a){++l
if(m==null)m=new A.hd(k.b,r,A.a([],o))
m.c.push(k.c)}else --l
if(l===0){m.toString
n.push(m)
m=null}}B.b.hN(n)
if(r===B.X){s=t.FF
n=A.aA(new A.cL(n,s),!0,s.h("bq.E"))}s=A.ao(n).h("iB<1,bW>")
return A.aA(new A.iB(n,new A.adc(),s),!0,s.h("r.E"))},
MN(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this.c,a4=a3.length
if(a4<=1)return a3
s=t.S
r=A.z(s,t.ju)
q=A.z(s,s)
for(p=this.b,o=p===B.X,p=p===B.w,n=a4,m=0;m<n;g===a4||(0,A.Q)(a3),++m,n=g){l=a3[m]
r.l(0,l.e,l)
n=l.w
k=n.a
j=n.b
i=A.nj(l,new A.v(k+(n.c-k)/2,j+(n.d-j)/2))
for(n=a3.length,k=i.a,j=i.b,h=0;g=a3.length,h<g;a3.length===n||(0,A.Q)(a3),++h){f=a3[h]
if((l==null?f==null:l===f)||q.j(0,f.e)===l.e)continue
g=f.w
e=g.a
d=g.b
c=A.nj(f,new A.v(e+(g.c-e)/2,d+(g.d-d)/2))
b=Math.atan2(c.b-j,c.a-k)
a=p&&-0.7853981633974483<b&&b<2.356194490192345
if(o)a0=b<-2.356194490192345||b>2.356194490192345
else a0=!1
if(a||a0)q.l(0,l.e,f.e)}}a1=A.a([],t.t)
a2=A.a(a3.slice(0),A.ao(a3))
B.b.dm(a2,new A.ad8())
new A.aI(a2,new A.ad9(),A.ao(a2).h("aI<1,l>")).Z(0,new A.adb(A.b7(s),q,a1))
a3=t.sC
a3=A.aA(new A.aI(a1,new A.ada(r),a3),!0,a3.h("bq.E"))
a4=A.ao(a3).h("cL<1>")
return A.aA(new A.cL(a3,a4),!0,a4.h("bq.E"))}}
A.adc.prototype={
$1(a){return a.MN()},
$S:97}
A.ad8.prototype={
$2(a,b){var s,r,q=a.w,p=A.nj(a,new A.v(q.a,q.b))
q=b.w
s=A.nj(b,new A.v(q.a,q.b))
r=B.d.b3(p.b,s.b)
if(r!==0)return-r
return-B.d.b3(p.a,s.a)},
$S:69}
A.adb.prototype={
$1(a){var s=this,r=s.a
if(r.C(0,a))return
r.D(0,a)
r=s.b
if(r.T(0,a)){r=r.j(0,a)
r.toString
s.$1(r)}s.c.push(a)},
$S:40}
A.ad9.prototype={
$1(a){return a.e},
$S:250}
A.ada.prototype={
$1(a){var s=this.a.j(0,a)
s.toString
return s},
$S:251}
A.aep.prototype={
$1(a){return a.MO()},
$S:97}
A.jm.prototype={
b3(a,b){var s,r=this.b
if(r==null||b.b==null)return this.c-b.c
r.toString
s=b.b
s.toString
return r.b3(0,s)},
$ibF:1}
A.wb.prototype={
Mo(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.b
if(e.a===0)return
s=A.b7(t.S)
r=A.a([],t.V)
for(q=t.aa,p=A.n(e).h("aO<1>"),o=p.h("r.E"),n=f.d;e.a!==0;){m=A.aA(new A.aO(e,new A.a4P(f),p),!0,o)
e.X(0)
n.X(0)
l=new A.a4Q()
if(!!m.immutable$list)A.X(A.N("sort"))
k=m.length-1
if(k-0<=32)A.JW(m,0,k,l)
else A.JV(m,0,k,l)
B.b.K(r,m)
for(l=m.length,j=0;j<m.length;m.length===l||(0,A.Q)(m),++j){i=m[j]
if(i.at||i.as){k=J.cp(i)
if(q.a(A.I.prototype.gaJ.call(k,i))!=null){h=q.a(A.I.prototype.gaJ.call(k,i))
h=h.at||h.as}else h=!1
if(h){q.a(A.I.prototype.gaJ.call(k,i)).hU()
i.CW=!1}}}}B.b.dm(r,new A.a4R())
$.a4v.toString
g=new A.a4T(A.a([],t.fr))
for(q=r.length,j=0;j<r.length;r.length===q||(0,A.Q)(r),++j){i=r[j]
if(i.CW&&i.b!=null)i.R5(g,s)}e.X(0)
for(e=A.ji(s,s.r),q=A.n(e).c;e.t();){p=e.d
$.ak6.j(0,p==null?q.a(p):p).toString}f.a.$1(new A.JE(g.a))
f.aB()},
TD(a,b){var s,r={},q=r.a=this.c.j(0,a)
if(q!=null)s=(q.at||q.as)&&!q.cx.T(0,b)
else s=!1
if(s)q.xn(new A.a4O(r,b))
s=r.a
if(s==null||!s.cx.T(0,b))return null
return r.a.cx.j(0,b)},
a4y(a,b,c){var s=this.TD(a,b)
if(s!=null){s.$1(c)
return}if(b===B.U_&&this.c.j(0,a).f!=null)this.c.j(0,a).f.$0()},
i(a){return"<optimized out>#"+A.bL(this)}}
A.a4P.prototype={
$1(a){return!this.a.d.C(0,a)},
$S:70}
A.a4Q.prototype={
$2(a,b){return a.a-b.a},
$S:69}
A.a4R.prototype={
$2(a,b){return a.a-b.a},
$S:69}
A.a4O.prototype={
$1(a){if(a.cx.T(0,this.b)){this.a.a=a
return!1}return!0},
$S:70}
A.a4w.prototype={
jJ(a,b){var s=this
s.e.l(0,a,b)
s.f=s.f|a.a
s.d=!0},
e_(a,b){this.jJ(a,new A.a4x(b))},
sjl(a){a.toString
this.e_(B.dP,a)},
skw(a){a.toString
this.e_(B.Be,a)},
stF(a){this.e_(B.dS,a)},
stD(a){this.e_(B.U0,a)},
stG(a){this.e_(B.dT,a)},
stH(a){this.e_(B.dQ,a)},
stE(a){this.e_(B.dR,a)},
szQ(a){this.e_(B.Bf,a)},
szH(a){this.e_(B.Bd,a)},
szE(a,b){this.e_(B.U2,b)},
szF(a,b){this.e_(B.U6,b)},
szY(a,b){this.e_(B.TX,b)},
szW(a){this.jJ(B.U3,new A.a4A(a))},
szU(a){this.jJ(B.TV,new A.a4y(a))},
szX(a){this.jJ(B.U4,new A.a4B(a))},
szV(a){this.jJ(B.TW,new A.a4z(a))},
sA0(a){this.jJ(B.TY,new A.a4C(a))},
sA1(a){this.jJ(B.TZ,new A.a4D(a))},
szI(a){this.e_(B.U1,a)},
szJ(a){this.e_(B.U5,a)},
sMf(a){return},
sMg(a){if(a==this.k3)return
this.k3=a
this.d=!0},
szr(a){return},
sy8(a){return},
si1(a,b){if(b===this.x2)return
this.x2=b
this.d=!0},
Hm(a){var s=this.ac;(s==null?this.ac=A.b7(t.xJ):s).D(0,a)},
b7(a,b){var s=this,r=s.aX,q=a.a
if(b)s.aX=r|q
else s.aX=r&~q
s.d=!0},
JI(a){var s,r=this
if(a==null||!a.d||!r.d)return!0
if((r.f&a.f)!==0)return!1
if((r.aX&a.aX)!==0)return!1
if(r.R8.a.length!==0)s=a.R8.a.length!==0
else s=!1
if(s)return!1
return!0},
jZ(a){var s,r,q=this
if(!a.d)return
q.e.K(0,a.e)
q.p3.K(0,a.p3)
q.f=q.f|a.f
q.aX=q.aX|a.aX
q.y2=a.y2
if(q.ao==null)q.ao=a.ao
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
q.p4=A.aet(a.p4,a.y1,r,s)
s=q.R8
if(s.a==="")q.R8=a.R8
s=q.RG
if(s.a==="")q.RG=a.RG
s=q.rx
if(s.a==="")q.rx=a.rx
s=q.ry
r=q.y1
q.ry=A.aet(a.ry,a.y1,s,r)
if(q.to==="")q.to=a.to
q.xr=Math.max(q.xr,a.xr+a.x2)
q.d=q.d||a.d},
a0r(){var s=this,r=A.pc()
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
r.aX=s.aX
r.ac=s.ac
r.y2=s.y2
r.ao=s.ao
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
A.a4x.prototype={
$1(a){this.a.$0()},
$S:4}
A.a4A.prototype={
$1(a){a.toString
this.a.$1(A.nf(a))},
$S:4}
A.a4y.prototype={
$1(a){a.toString
this.a.$1(A.nf(a))},
$S:4}
A.a4B.prototype={
$1(a){a.toString
this.a.$1(A.nf(a))},
$S:4}
A.a4z.prototype={
$1(a){a.toString
this.a.$1(A.nf(a))},
$S:4}
A.a4C.prototype={
$1(a){var s,r,q
a.toString
s=J.agm(t.G.a(a),t.N,t.S)
r=s.j(0,"base")
r.toString
q=s.j(0,"extent")
q.toString
this.a.$1(A.a82(B.G,r,q,!1))},
$S:4}
A.a4D.prototype={
$1(a){a.toString
this.a.$1(A.by(a))},
$S:4}
A.D1.prototype={
F(){return"DebugSemanticsDumpOrder."+this.b}}
A.pd.prototype={
b3(a,b){var s=this.a1r(b)
return s},
$ibF:1}
A.v1.prototype={
a1r(a){var s=a.b===this.b
if(s)return 0
return B.f.b3(this.b,a.b)}}
A.PB.prototype={}
A.PD.prototype={}
A.PE.prototype={}
A.a4F.prototype={
L9(a){var s=A.aX(["type",this.a,"data",this.pv()],t.N,t.z)
if(a!=null)s.l(0,"nodeId",a)
return s},
a5H(){return this.L9(null)},
i(a){var s,r,q,p=A.a([],t.s),o=this.pv(),n=J.ajD(o.gbp(o))
B.b.hN(n)
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.Q)(n),++r){q=n[r]
p.push(A.h(q)+": "+A.h(o.j(0,q)))}return"SemanticsEvent("+B.b.bf(p,", ")+")"}}
A.a89.prototype={
pv(){return A.aX(["message",this.b],t.N,t.z)}}
A.a_M.prototype={
pv(){return B.zk}}
A.a7w.prototype={
pv(){return B.zk}}
A.Ap.prototype={
ks(a,b){return this.a3V(a,!0)},
a3V(a,b){var s=0,r=A.a4(t.N),q,p=this,o
var $async$ks=A.a0(function(c,d){if(c===1)return A.a1(d,r)
while(true)switch(s){case 0:s=3
return A.a5(p.cL(0,a),$async$ks)
case 3:o=d
if(o.byteLength<51200){q=B.a9.e6(0,A.cW(o.buffer,0,null))
s=1
break}q=A.Sn(A.azl(),o,'UTF8 decode for "'+a+'"',t.B6,t.N)
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$ks,r)},
i(a){return"<optimized out>#"+A.bL(this)+"()"}}
A.TQ.prototype={
ks(a,b){return this.MX(a,!0)},
a3W(a,b,c){var s,r={},q=this.b
if(q.T(0,a)){r=q.j(0,a)
r.toString
return c.h("ah<0>").a(r)}r.a=r.b=null
this.ks(a,!1).b5(b,c).b5(new A.TR(r,this,a,c),t.H)
s=r.a
if(s!=null)return s
s=new A.a8($.aa,c.h("a8<0>"))
r.b=new A.b4(s,c.h("b4<0>"))
q.l(0,a,s)
return r.b.a}}
A.TR.prototype={
$1(a){var s=this,r=new A.bn(a,s.d.h("bn<0>")),q=s.a
q.a=r
s.b.b.l(0,s.c,r)
q=q.b
if(q!=null)q.cj(0,a)},
$S(){return this.d.h("aF(0)")}}
A.a1D.prototype={
cL(a,b){var s,r=B.ch.e5(A.amS(A.R3(B.i0,b,B.a9,!1)).e),q=$.h3.bd$
q===$&&A.b()
s=q.us(0,"flutter/assets",A.k9(r.buffer,0,null)).b5(new A.a1E(b),t.B6)
return s},
tq(a){return this.a3T(a)},
a3T(a){var s=0,r=A.a4(t.gG),q,p=this,o
var $async$tq=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:s=3
return A.a5(p.cL(0,a),$async$tq)
case 3:o=c
q=A.ZT(A.cW(o.buffer,0,null))
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$tq,r)}}
A.a1E.prototype={
$1(a){if(a==null)throw A.c(A.ah_(A.a([A.ayl(this.a),A.bk("The asset does not exist or has empty data.")],t.F)))
return a},
$S:252}
A.Ti.prototype={}
A.pe.prototype={
oC(){var s=$.SB()
s.a.X(0)
s.b.X(0)},
j9(a){return this.a2D(a)},
a2D(a){var s=0,r=A.a4(t.H),q,p=this
var $async$j9=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:switch(A.by(J.aN(t.a.a(a),"type"))){case"memoryPressure":p.oC()
break}s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$j9,r)},
R0(){var s=A.b5("controller")
s.sc_(A.pm(null,new A.a4W(s),null,!1,t.xe))
return J.aqV(s.aC())},
a4T(){if(this.r$!=null)return
$.aM()
var s=A.alP("AppLifecycleState.resumed")
if(s!=null)this.t4(s)},
w4(a){return this.UF(a)},
UF(a){var s=0,r=A.a4(t.dR),q,p=this,o
var $async$w4=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:a.toString
o=A.alP(a)
o.toString
p.t4(o)
q=null
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$w4,r)},
w5(a){return this.UO(a)},
UO(a){var s=0,r=A.a4(t.H)
var $async$w5=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:t.j.a(a.b)
return A.a2(null,r)}})
return A.a3($async$w5,r)},
$idw:1}
A.a4W.prototype={
$0(){var s=0,r=A.a4(t.H),q=this,p,o,n
var $async$$0=A.a0(function(a,b){if(a===1)return A.a1(b,r)
while(true)switch(s){case 0:o=A.b5("rawLicenses")
n=o
s=2
return A.a5($.SB().ks("NOTICES",!1),$async$$0)
case 2:n.sc_(b)
p=q.a
n=J
s=3
return A.a5(A.Sn(A.azr(),o.aC(),"parseLicenses",t.N,t.rh),$async$$0)
case 3:n.np(b,J.aqR(p.aC()))
s=4
return A.a5(J.ajy(p.aC()),$async$$0)
case 4:return A.a2(null,r)}})
return A.a3($async$$0,r)},
$S:50}
A.a9K.prototype={
us(a,b,c){var s=new A.a8($.aa,t.sB)
$.aM().Yu(b,c,A.asU(new A.a9L(new A.b4(s,t.BB))))
return s},
BA(a,b){if(b==null){a=$.Sz().a.j(0,a)
if(a!=null)a.e=null}else $.Sz().Mu(a,new A.a9M(b))}}
A.a9L.prototype={
$1(a){var s,r,q,p
try{this.a.cj(0,a)}catch(q){s=A.ag(q)
r=A.aB(q)
p=A.bk("during a platform message response callback")
A.dJ(new A.bz(s,r,"services library",p,null,!1))}},
$S:21}
A.a9M.prototype={
$2(a,b){return this.LE(a,b)},
LE(a,b){var s=0,r=A.a4(t.H),q=1,p,o=[],n=this,m,l,k,j,i,h
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
l=A.aB(h)
j=A.bk("during a platform message callback")
A.dJ(new A.bz(m,l,"services library",j,null,!1))
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
$S:256}
A.WO.prototype={}
A.W9.prototype={}
A.Wi.prototype={}
A.Du.prototype={}
A.WQ.prototype={}
A.Ds.prototype={}
A.Wq.prototype={}
A.VF.prototype={}
A.Wr.prototype={}
A.DA.prototype={}
A.Dq.prototype={}
A.Dx.prototype={}
A.DK.prototype={}
A.We.prototype={}
A.Ww.prototype={}
A.VO.prototype={}
A.W1.prototype={}
A.Vp.prototype={}
A.VS.prototype={}
A.DF.prototype={}
A.Vr.prototype={}
A.WB.prototype={}
A.os.prototype={}
A.k1.prototype={}
A.lY.prototype={}
A.k2.prototype={}
A.u0.prototype={}
A.Z4.prototype={
Ss(a){var s,r,q,p,o,n,m,l,k,j
this.d=!0
s=!1
for(n=this.c,m=0;!1;++m){r=n[m]
try{q=r.$1(a)
s=s||q}catch(l){p=A.ag(l)
o=A.aB(l)
k=A.bk("while processing a key handler")
j=$.fA()
if(j!=null)j.$1(new A.bz(p,o,"services library",k,null,!1))}}this.d=!1
return s},
Ja(a){var s,r,q=this,p=a.a,o=a.b
if(a instanceof A.lY){q.a.l(0,p,o)
s=$.apa().j(0,o.a)
if(s!=null){r=q.b
if(r.C(0,s))r.A(0,s)
else r.D(0,s)}}else if(a instanceof A.k2)q.a.A(0,p)
return q.Ss(a)}}
A.tZ.prototype={
F(){return"KeyDataTransitMode."+this.b}}
A.u_.prototype={
i(a){return"KeyMessage("+A.h(this.a)+")"}}
A.F6.prototype={
a2g(a){var s,r=this,q=r.d
switch((q==null?r.d=B.Gp:q).a){case 0:return!1
case 1:if(a.c===0&&a.d===0)return!1
s=A.atI(a)
if(a.f&&r.e.length===0){r.b.Ja(s)
r.DO(A.a([s],t.DG),null)}else r.e.push(s)
return!1}},
DO(a,b){var s,r,q,p,o=this.a
if(o!=null){s=new A.u_(a,b)
try{o=o.$1(s)
return o}catch(p){r=A.ag(p)
q=A.aB(p)
o=A.bk("while processing the key message handler")
A.dJ(new A.bz(r,q,"services library",o,null,!1))}}return!1},
yW(a){var s=0,r=A.a4(t.a),q,p=this,o,n,m,l,k,j,i
var $async$yW=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:if(p.d==null){p.d=B.Go
p.c.a.push(p.gS7())}o=A.avl(t.a.a(a))
if(o instanceof A.hU){n=o.c
m=p.f
if(!n.MF()){m.D(0,n.gdC())
l=!1}else{m.A(0,n.gdC())
l=!0}}else if(o instanceof A.oS){n=p.f
m=o.c
if(n.C(0,m.gdC())){n.A(0,m.gdC())
l=!1}else l=!0}else l=!0
if(l){p.c.a2x(o)
for(n=p.e,m=n.length,k=p.b,j=!1,i=0;i<n.length;n.length===m||(0,A.Q)(n),++i)j=k.Ja(n[i])||j
j=p.DO(n,o)||j
B.b.X(n)}else j=!0
q=A.aX(["handled",j],t.N,t.z)
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$yW,r)},
S8(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.c,d=e.gdC(),c=e.goR()
e=this.b.a
s=A.n(e).h("b9<1>")
r=A.k6(new A.b9(e,s),s.h("r.E"))
q=A.a([],t.DG)
p=e.j(0,d)
o=$.h3.dy$
n=a.a
if(n==="")n=f
if(a instanceof A.hU)if(p==null){m=new A.lY(d,c,n,o,!1)
r.D(0,d)}else m=new A.u0(d,p,n,o,!1)
else if(p==null)m=f
else{m=new A.k2(d,p,f,o,!1)
r.A(0,d)}for(s=this.c.d,l=A.n(s).h("b9<1>"),k=l.h("r.E"),j=r.kd(A.k6(new A.b9(s,l),k)),j=j.ga8(j),i=this.e;j.t();){h=j.gG(j)
if(h.k(0,d))q.push(new A.k2(h,c,f,o,!0))
else{g=e.j(0,h)
g.toString
i.push(new A.k2(h,g,f,o,!0))}}for(e=A.k6(new A.b9(s,l),k).kd(r),e=e.ga8(e);e.t();){l=e.gG(e)
k=s.j(0,l)
k.toString
i.push(new A.lY(l,k,f,o,!0))}if(m!=null)i.push(m)
B.b.K(i,q)}}
A.Nh.prototype={}
A.a_x.prototype={}
A.e.prototype={
gv(a){return B.f.gv(this.a)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.T(b)!==A.C(this))return!1
return b instanceof A.e&&b.a===this.a}}
A.j.prototype={
gv(a){return B.f.gv(this.a)},
k(a,b){if(b==null)return!1
if(this===b)return!0
if(J.T(b)!==A.C(this))return!1
return b instanceof A.j&&b.a===this.a}}
A.Ni.prototype={}
A.hH.prototype={
i(a){return"MethodCall("+this.a+", "+A.h(this.b)+")"}}
A.vj.prototype={
i(a){var s=this
return"PlatformException("+s.a+", "+A.h(s.b)+", "+A.h(s.c)+", "+A.h(s.d)+")"},
$ic4:1}
A.uD.prototype={
i(a){return"MissingPluginException("+A.h(this.a)+")"},
$ic4:1}
A.a7d.prototype={
eA(a){if(a==null)return null
return B.cV.e5(A.cW(a.buffer,a.byteOffset,a.byteLength))},
bO(a){if(a==null)return null
return A.k9(B.ch.e5(a).buffer,0,null)}}
A.a_5.prototype={
bO(a){if(a==null)return null
return B.hl.bO(B.bQ.yz(a))},
eA(a){var s
if(a==null)return a
s=B.hl.eA(a)
s.toString
return B.bQ.e6(0,s)}}
A.a_7.prototype={
fC(a){var s=B.bP.bO(A.aX(["method",a.a,"args",a.b],t.N,t.X))
s.toString
return s},
fA(a){var s,r,q,p=null,o=B.bP.eA(a)
if(!t.G.b(o))throw A.c(A.bA("Expected method call Map, got "+A.h(o),p,p))
s=J.aH(o)
r=s.j(o,"method")
q=s.j(o,"args")
if(typeof r=="string")return new A.hH(r,q)
throw A.c(A.bA("Invalid method call: "+A.h(o),p,p))},
Ib(a){var s,r,q,p=null,o=B.bP.eA(a)
if(!t.j.b(o))throw A.c(A.bA("Expected envelope List, got "+A.h(o),p,p))
s=J.aH(o)
if(s.gp(o)===1)return s.j(o,0)
if(s.gp(o)===3)if(typeof s.j(o,0)=="string")r=s.j(o,1)==null||typeof s.j(o,1)=="string"
else r=!1
else r=!1
if(r){r=A.by(s.j(o,0))
q=A.cv(s.j(o,1))
throw A.c(A.ahw(r,s.j(o,2),q,p))}if(s.gp(o)===4)if(typeof s.j(o,0)=="string")if(s.j(o,1)==null||typeof s.j(o,1)=="string")r=s.j(o,3)==null||typeof s.j(o,3)=="string"
else r=!1
else r=!1
else r=!1
if(r){r=A.by(s.j(o,0))
q=A.cv(s.j(o,1))
throw A.c(A.ahw(r,s.j(o,2),q,A.cv(s.j(o,3))))}throw A.c(A.bA("Invalid envelope: "+A.h(o),p,p))},
om(a){var s=B.bP.bO([a])
s.toString
return s},
kg(a,b,c){var s=B.bP.bO([a,c,b])
s.toString
return s},
IA(a,b){return this.kg(a,null,b)}}
A.a6X.prototype={
bO(a){var s
if(a==null)return null
s=A.a8M(64)
this.cM(0,s,a)
return s.iT()},
eA(a){var s,r
if(a==null)return null
s=new A.vu(a)
r=this.f9(0,s)
if(s.b<a.byteLength)throw A.c(B.aI)
return r},
cM(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i=null
if(c==null)b.d8(0,0)
else if(A.kU(c))b.d8(0,c?1:2)
else if(typeof c=="number"){b.d8(0,6)
b.h4(8)
s=$.cT()
b.d.setFloat64(0,c,B.a8===s)
b.QS(b.e)}else if(A.nh(c)){s=-2147483648<=c&&c<=2147483647
r=b.d
if(s){b.d8(0,3)
s=$.cT()
r.setInt32(0,c,B.a8===s)
b.n2(b.e,0,4)}else{b.d8(0,4)
s=$.cT()
B.fp.By(r,0,c,s)}}else if(typeof c=="string"){b.d8(0,7)
s=c.length
q=new Uint8Array(s)
n=0
while(!0){if(!(n<s)){p=i
o=0
break}m=B.c.a_(c,n)
if(m<=127)q[n]=m
else{p=B.ch.e5(B.c.bN(c,n))
o=n
break}++n}if(p!=null){j.dX(b,o+p.length)
l=q.BYTES_PER_ELEMENT
k=A.da(0,o,B.f.h2(q.byteLength,l),i,i)
b.jK(A.cW(q.buffer,q.byteOffset+0*l,(k-0)*l))
b.jK(p)}else{j.dX(b,s)
b.jK(q)}}else if(t.uo.b(c)){b.d8(0,8)
j.dX(b,c.length)
b.jK(c)}else if(t.fO.b(c)){b.d8(0,9)
s=c.length
j.dX(b,s)
b.h4(4)
b.jK(A.cW(c.buffer,c.byteOffset,4*s))}else if(t.D4.b(c)){b.d8(0,14)
s=c.length
j.dX(b,s)
b.h4(4)
b.jK(A.cW(c.buffer,c.byteOffset,4*s))}else if(t.cE.b(c)){b.d8(0,11)
s=c.length
j.dX(b,s)
b.h4(8)
b.jK(A.cW(c.buffer,c.byteOffset,8*s))}else if(t.j.b(c)){b.d8(0,12)
s=J.aH(c)
j.dX(b,s.gp(c))
for(s=s.ga8(c);s.t();)j.cM(0,b,s.gG(s))}else if(t.G.b(c)){b.d8(0,13)
s=J.aH(c)
j.dX(b,s.gp(c))
s.Z(c,new A.a6Y(j,b))}else throw A.c(A.hg(c,i,i))},
f9(a,b){if(b.b>=b.a.byteLength)throw A.c(B.aI)
return this.ik(b.kK(0),b)},
ik(a,b){var s,r,q,p,o,n,m,l,k=this
switch(a){case 0:return null
case 1:return!0
case 2:return!1
case 3:s=b.b
r=$.cT()
q=b.a.getInt32(s,B.a8===r)
b.b+=4
return q
case 4:return b.ui(0)
case 6:b.h4(8)
s=b.b
r=$.cT()
q=b.a.getFloat64(s,B.a8===r)
b.b+=8
return q
case 5:case 7:p=k.dj(b)
return B.cV.e5(b.kL(p))
case 8:return b.kL(k.dj(b))
case 9:p=k.dj(b)
b.h4(4)
s=b.a
o=A.al9(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+4*p
return o
case 10:return b.uj(k.dj(b))
case 14:p=k.dj(b)
b.h4(4)
s=b.a
r=s.buffer
s=s.byteOffset+b.b
A.Sc(r,s,p)
o=new Float32Array(r,s,p)
b.b=b.b+4*p
return o
case 11:p=k.dj(b)
b.h4(8)
s=b.a
o=A.al7(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+8*p
return o
case 12:p=k.dj(b)
n=A.b3(p,null,!1,t.X)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.X(B.aI)
b.b=r+1
n[m]=k.ik(s.getUint8(r),b)}return n
case 13:p=k.dj(b)
s=t.X
n=A.z(s,s)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.X(B.aI)
b.b=r+1
r=k.ik(s.getUint8(r),b)
l=b.b
if(l>=s.byteLength)A.X(B.aI)
b.b=l+1
n.l(0,r,k.ik(s.getUint8(l),b))}return n
default:throw A.c(B.aI)}},
dX(a,b){var s,r
if(b<254)a.d8(0,b)
else{s=a.d
if(b<=65535){a.d8(0,254)
r=$.cT()
s.setUint16(0,b,B.a8===r)
a.n2(a.e,0,2)}else{a.d8(0,255)
r=$.cT()
s.setUint32(0,b,B.a8===r)
a.n2(a.e,0,4)}}},
dj(a){var s,r,q=a.kK(0)
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
A.a6Y.prototype={
$2(a,b){var s=this.a,r=this.b
s.cM(0,r,a)
s.cM(0,r,b)},
$S:67}
A.a70.prototype={
fC(a){var s=A.a8M(64)
B.ah.cM(0,s,a.a)
B.ah.cM(0,s,a.b)
return s.iT()},
fA(a){var s,r,q
a.toString
s=new A.vu(a)
r=B.ah.f9(0,s)
q=B.ah.f9(0,s)
if(typeof r=="string"&&s.b>=a.byteLength)return new A.hH(r,q)
else throw A.c(B.nB)},
om(a){var s=A.a8M(64)
s.d8(0,0)
B.ah.cM(0,s,a)
return s.iT()},
kg(a,b,c){var s=A.a8M(64)
s.d8(0,1)
B.ah.cM(0,s,a)
B.ah.cM(0,s,c)
B.ah.cM(0,s,b)
return s.iT()},
IA(a,b){return this.kg(a,null,b)},
Ib(a){var s,r,q,p,o,n
if(a.byteLength===0)throw A.c(B.G_)
s=new A.vu(a)
if(s.kK(0)===0)return B.ah.f9(0,s)
r=B.ah.f9(0,s)
q=B.ah.f9(0,s)
p=B.ah.f9(0,s)
o=s.b<a.byteLength?A.cv(B.ah.f9(0,s)):null
if(typeof r=="string")n=(q==null||typeof q=="string")&&s.b>=a.byteLength
else n=!1
if(n)throw A.c(A.ahw(r,p,A.cv(q),o))
else throw A.c(B.G0)}}
A.a0s.prototype={
a27(a,b,c){var s,r,q,p
if(t.yg.b(b)){this.b.A(0,a)
return}s=this.b
r=s.j(0,a)
q=A.awQ(c)
if(q==null)q=this.a
if(J.f(r==null?null:t.Ft.a(r.a),q))return
p=q.rr(a)
s.l(0,a,p)
B.T6.fI("activateSystemCursor",A.aX(["device",p.b,"kind",t.Ft.a(p.a).a],t.N,t.z),t.H)}}
A.uF.prototype={}
A.e3.prototype={
i(a){var s=this.grt()
return s}}
A.M9.prototype={
rr(a){throw A.c(A.c0(null))},
grt(){return"defer"}}
A.Qh.prototype={}
A.ku.prototype={
grt(){return"SystemMouseCursor("+this.a+")"},
rr(a){return new A.Qh(this,a)},
k(a,b){if(b==null)return!1
if(J.T(b)!==A.C(this))return!1
return b instanceof A.ku&&b.a===this.a},
gv(a){return B.c.gv(this.a)}}
A.NN.prototype={}
A.jD.prototype={
gnP(){var s,r=$.h3.bd$
r===$&&A.b()
s=r
return s},
eh(a,b){return this.Ml(0,b,this.$ti.h("1?"))},
Ml(a,b,c){var s=0,r=A.a4(c),q,p=this,o,n
var $async$eh=A.a0(function(d,e){if(d===1)return A.a1(e,r)
while(true)switch(s){case 0:o=p.b
n=o
s=3
return A.a5(p.gnP().us(0,p.a,o.bO(b)),$async$eh)
case 3:q=n.eA(e)
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$eh,r)},
uw(a){this.gnP().BA(this.a,new A.Tg(this,a))}}
A.Tg.prototype={
$1(a){return this.Ly(a)},
Ly(a){var s=0,r=A.a4(t.yD),q,p=this,o,n
var $async$$1=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:o=p.a.b
n=o
s=3
return A.a5(p.b.$1(o.eA(a)),$async$$1)
case 3:q=n.bO(c)
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$$1,r)},
$S:100}
A.uC.prototype={
gnP(){var s,r=$.h3.bd$
r===$&&A.b()
s=r
return s},
nj(a,b,c,d){return this.VT(a,b,c,d,d.h("0?"))},
VT(a,b,c,d,e){var s=0,r=A.a4(e),q,p=this,o,n,m,l
var $async$nj=A.a0(function(f,g){if(f===1)return A.a1(g,r)
while(true)switch(s){case 0:o=p.b
n=o.fC(new A.hH(a,b))
m=p.a
s=3
return A.a5(p.gnP().us(0,m,n),$async$nj)
case 3:l=g
if(l==null){if(c){q=null
s=1
break}throw A.c(A.auh("No implementation found for method "+a+" on channel "+m))}q=d.h("0?").a(o.Ib(l))
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$nj,r)},
mL(a){var s=this.gnP()
s.BA(this.a,new A.a0f(this,a))},
qb(a,b){return this.TR(a,b)},
TR(a,b){var s=0,r=A.a4(t.yD),q,p=2,o,n=this,m,l,k,j,i,h,g,f,e
var $async$qb=A.a0(function(c,d){if(c===1){o=d
s=p}while(true)switch(s){case 0:h=n.b
g=h.fA(a)
p=4
e=h
s=7
return A.a5(b.$1(g),$async$qb)
case 7:k=e.om(d)
q=k
s=1
break
p=2
s=6
break
case 4:p=3
f=o
k=A.ag(f)
if(k instanceof A.vj){m=k
k=m.a
i=m.b
q=h.kg(k,m.c,i)
s=1
break}else if(k instanceof A.uD){q=null
s=1
break}else{l=k
h=h.IA("error",J.dF(l))
q=h
s=1
break}s=6
break
case 3:s=2
break
case 6:case 1:return A.a2(q,r)
case 2:return A.a1(o,r)}})
return A.a3($async$qb,r)}}
A.a0f.prototype={
$1(a){return this.a.qb(a,this.b)},
$S:100}
A.kc.prototype={
fI(a,b,c){return this.a3r(a,b,c,c.h("0?"))},
tj(a,b){return this.fI(a,null,b)},
a3r(a,b,c,d){var s=0,r=A.a4(d),q,p=this
var $async$fI=A.a0(function(e,f){if(e===1)return A.a1(f,r)
while(true)switch(s){case 0:q=p.NK(a,b,!0,c)
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$fI,r)}}
A.k3.prototype={
F(){return"KeyboardSide."+this.b}}
A.em.prototype={
F(){return"ModifierKey."+this.b}}
A.vs.prototype={
ga4b(){var s,r,q,p=A.z(t.BK,t.a0)
for(s=0;s<9;++s){r=B.oo[s]
if(this.a3w(r)){q=this.LT(r)
if(q!=null)p.l(0,r,q)}}return p},
MF(){return!0}}
A.h_.prototype={}
A.a2e.prototype={
$0(){var s,r,q,p=this.b,o=J.aH(p),n=A.cv(o.j(p,"key")),m=n==null
if(!m){s=n.length
s=s!==0&&s===1}else s=!1
if(s)this.a.a=n
s=A.cv(o.j(p,"code"))
if(s==null)s=""
m=m?"":n
r=A.ng(o.j(p,"location"))
if(r==null)r=0
q=A.ng(o.j(p,"metaState"))
if(q==null)q=0
p=A.ng(o.j(p,"keyCode"))
return new A.oR(s,m,r,q,p==null?0:p)},
$S:260}
A.hU.prototype={}
A.oS.prototype={}
A.a2j.prototype={
a2x(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(a instanceof A.hU){p=a.c
i.d.l(0,p.gdC(),p.goR())}else if(a instanceof A.oS)i.d.A(0,a.c.gdC())
i.Z0(a)
for(p=i.a,o=A.aA(p,!0,t.vc),n=o.length,m=0;m<n;++m){s=o[m]
try{if(B.b.C(p,s))s.$1(a)}catch(l){r=A.ag(l)
q=A.aB(l)
k=A.bk("while processing a raw key listener")
j=$.fA()
if(j!=null)j.$1(new A.bz(r,q,"services library",k,null,!1))}}return!1},
Z0(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=a1.c,f=g.ga4b(),e=t.F3,d=A.z(e,t.lT),c=A.b7(e),b=this.d,a=A.k6(new A.b9(b,A.n(b).h("b9<1>")),e),a0=a1 instanceof A.hU
if(a0)a.D(0,g.gdC())
for(s=null,r=0;r<9;++r){q=B.oo[r]
p=$.apd()
o=p.j(0,new A.c8(q,B.be))
if(o==null)continue
if(o.C(0,g.gdC()))s=q
if(f.j(0,q)===B.cq){c.K(0,o)
if(o.k0(0,a.giQ(a)))continue}n=f.j(0,q)==null?A.b7(e):p.j(0,new A.c8(q,f.j(0,q)))
if(n==null)continue
for(p=new A.qe(n,n.r),p.c=n.e,m=A.n(p).c;p.t();){l=p.d
if(l==null)l=m.a(l)
k=$.apc().j(0,l)
k.toString
d.l(0,l,k)}}e=g instanceof A.a2c
j=(e||g instanceof A.oR)&&b.j(0,B.bH)!=null&&!J.f(b.j(0,B.bH),B.dr)
for(a=$.agf(),a=A.iN(a,a.r);a.t();){p=a.d
i=j&&p.k(0,B.bH)
if(!c.C(0,p)&&!i)b.A(0,p)}if(!(g instanceof A.a2a)&&!(g instanceof A.a2d))b.A(0,B.dF)
b.K(0,d)
if(a0&&s!=null&&!b.T(0,g.gdC())){if(e&&g.gdC().k(0,B.bI)||g instanceof A.a2b||g instanceof A.a29){h=$.agf().j(0,g.gdC())
if(h!=null)b.l(0,g.gdC(),h)}if(g instanceof A.oR&&g.gdC().k(0,B.bI))b.l(0,g.gdC(),g.goR())}}}
A.c8.prototype={
k(a,b){if(b==null)return!1
if(J.T(b)!==A.C(this))return!1
return b instanceof A.c8&&b.a===this.a&&b.b==this.b},
gv(a){return A.V(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.OV.prototype={}
A.OU.prototype={}
A.a29.prototype={}
A.a2a.prototype={}
A.a2b.prototype={}
A.a2c.prototype={}
A.a2d.prototype={}
A.oR.prototype={
gdC(){var s=this.a,r=B.SH.j(0,s)
return r==null?new A.j(98784247808+B.c.gv(s)):r},
goR(){var s,r=this.b,q=B.SJ.j(0,r),p=q==null?null:q[this.c]
if(p!=null)return p
s=B.SG.j(0,r)
if(s!=null)return s
if(r.length===1)return new A.e(B.c.a_(r.toLowerCase(),0))
return new A.e(B.c.gv(this.a)+98784247808)},
a3w(a){var s=this
switch(a.a){case 0:return(s.d&4)!==0
case 1:return(s.d&1)!==0
case 2:return(s.d&2)!==0
case 3:return(s.d&8)!==0
case 5:return(s.d&16)!==0
case 4:return(s.d&32)!==0
case 6:return(s.d&64)!==0
case 7:case 8:return!1}},
LT(a){return B.cq},
k(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.T(b)!==A.C(s))return!1
return b instanceof A.oR&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e},
gv(a){var s=this
return A.V(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.vL.prototype={
ga5r(){var s=this
if(s.c)return new A.bn(s.a,t.m6)
if(s.b==null){s.b=new A.b4(new A.a8($.aa,t.jr),t.Fk)
s.qa()}return s.b.a},
qa(){var s=0,r=A.a4(t.H),q,p=this,o
var $async$qa=A.a0(function(a,b){if(a===1)return A.a1(b,r)
while(true)switch(s){case 0:s=3
return A.a5(B.iv.tj("get",t.mE),$async$qa)
case 3:o=b
if(p.b==null){s=1
break}p.Fl(o)
case 1:return A.a2(q,r)}})
return A.a3($async$qa,r)},
Fl(a){var s,r=a==null
if(!r){s=J.aN(a,"enabled")
s.toString
A.nf(s)}else s=!1
this.a2z(r?null:t.Fx.a(J.aN(a,"data")),s)},
a2z(a,b){var s,r,q=this,p=q.c&&b
q.d=p
if(p)$.bO.ax$.push(new A.a3g(q))
s=q.a
if(b){p=q.Sk(a)
r=t.N
if(p==null){p=t.X
p=A.z(p,p)}r=new A.cs(p,q,null,"root",A.z(r,t.hp),A.z(r,t.Cm))
p=r}else p=null
q.a=p
q.c=!0
r=q.b
if(r!=null)r.cj(0,p)
q.b=null
if(q.a!=s){q.aB()
if(s!=null)s.m()}},
wo(a){return this.Wn(a)},
Wn(a){var s=0,r=A.a4(t.H),q=this,p
var $async$wo=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:p=a.a
switch(p){case"push":q.Fl(t.mE.a(a.b))
break
default:throw A.c(A.c0(p+" was invoked but isn't implemented by "+A.C(q).i(0)))}return A.a2(null,r)}})
return A.a3($async$wo,r)},
Sk(a){if(a==null)return null
return t.ym.a(B.ah.eA(A.k9(a.buffer,a.byteOffset,a.byteLength)))},
Md(a){var s=this
s.r.D(0,a)
if(!s.f){s.f=!0
$.bO.ax$.push(new A.a3h(s))}},
DQ(){var s,r,q,p,o,n=this
if(!n.f)return
n.f=!1
for(s=n.r,r=A.ji(s,s.r),q=A.n(r).c;r.t();){p=r.d;(p==null?q.a(p):p).w=!1}s.X(0)
o=B.ah.bO(n.a.a)
B.iv.fI("put",A.cW(o.buffer,o.byteOffset,o.byteLength),t.H)},
IW(){if($.bO.ch$)return
this.DQ()}}
A.a3g.prototype={
$1(a){this.a.d=!1},
$S:2}
A.a3h.prototype={
$1(a){return this.a.DQ()},
$S:2}
A.cs.prototype={
gnr(){var s=J.Ad(this.a,"c",new A.a3d())
s.toString
return t.mE.a(s)},
giF(){var s=J.Ad(this.a,"v",new A.a3e())
s.toString
return t.mE.a(s)},
a51(a,b,c){var s=this,r=J.dV(s.giF(),b),q=c.h("0?").a(J.is(s.giF(),b))
if(J.fB(s.giF()))J.is(s.a,"v")
if(r)s.lf()
return q},
a_S(a,b){var s,r,q,p,o=this,n=o.f
if(n.T(0,a)||!J.dV(o.gnr(),a)){n=t.N
s=new A.cs(A.z(n,t.X),null,null,a,A.z(n,t.hp),A.z(n,t.Cm))
o.hV(s)
return s}r=t.N
q=o.c
p=J.aN(o.gnr(),a)
p.toString
s=new A.cs(t.mE.a(p),q,o,a,A.z(r,t.hp),A.z(r,t.Cm))
n.l(0,a,s)
return s},
hV(a){var s=this,r=a.d
if(r!==s){if(r!=null)r.qB(a)
a.d=s
s.CG(a)
if(a.c!=s.c)s.Fz(a)}},
SE(a){this.qB(a)
a.d=null
if(a.c!=null){a.wO(null)
a.Hb(this.gFy())}},
lf(){var s,r=this
if(!r.w){r.w=!0
s=r.c
if(s!=null)s.Md(r)}},
Fz(a){a.wO(this.c)
a.Hb(this.gFy())},
wO(a){var s=this,r=s.c
if(r==a)return
if(s.w)if(r!=null)r.r.A(0,s)
s.c=a
if(s.w&&a!=null){s.w=!1
s.lf()}},
qB(a){var s,r,q,p=this
if(J.f(p.f.A(0,a.e),a)){J.is(p.gnr(),a.e)
s=p.r
r=s.j(0,a.e)
if(r!=null){q=J.bK(r)
p.E_(q.fa(r))
if(q.gR(r))s.A(0,a.e)}if(J.fB(p.gnr()))J.is(p.a,"c")
p.lf()
return}s=p.r
q=s.j(0,a.e)
if(q!=null)J.is(q,a)
q=s.j(0,a.e)
q=q==null?null:J.fB(q)
if(q===!0)s.A(0,a.e)},
CG(a){var s=this
if(s.f.T(0,a.e)){J.l7(s.r.bM(0,a.e,new A.a3c()),a)
s.lf()
return}s.E_(a)
s.lf()},
E_(a){this.f.l(0,a.e,a)
J.cD(this.gnr(),a.e,a.a)},
Hc(a,b){var s,r,q=this.f
q=q.gb0(q)
s=this.r
s=s.gb0(s)
r=q.a21(0,new A.iB(s,new A.a3f(),A.n(s).h("iB<r.E,cs>")))
J.np(b?A.aA(r,!1,A.n(r).h("r.E")):r,a)},
Hb(a){return this.Hc(a,!1)},
a59(a){var s,r=this
if(a===r.e)return
s=r.d
if(s!=null)s.qB(r)
r.e=a
s=r.d
if(s!=null)s.CG(r)},
m(){var s,r=this
r.Hc(r.gSD(),!0)
r.f.X(0)
r.r.X(0)
s=r.d
if(s!=null)s.qB(r)
r.d=null
r.wO(null)
r.x=!0},
i(a){return"RestorationBucket(restorationId: "+this.e+", owner: "+A.h(this.b)+")"}}
A.a3d.prototype={
$0(){var s=t.X
return A.z(s,s)},
$S:102}
A.a3e.prototype={
$0(){var s=t.X
return A.z(s,s)},
$S:102}
A.a3c.prototype={
$0(){return A.a([],t.oy)},
$S:263}
A.a3f.prototype={
$1(a){return a},
$S:264}
A.T0.prototype={}
A.i0.prototype={
GB(){var s,r,q,p,o=this,n=o.a
n=n==null?null:n.a
s=o.e
s=s==null?null:s.a
r=o.f.F()
q=o.r.F()
p=o.c
p=p==null?null:p.F()
return A.aX(["systemNavigationBarColor",n,"systemNavigationBarDividerColor",null,"systemStatusBarContrastEnforced",o.w,"statusBarColor",s,"statusBarBrightness",r,"statusBarIconBrightness",q,"systemNavigationBarIconBrightness",p,"systemNavigationBarContrastEnforced",o.d],t.N,t.z)},
i(a){return"SystemUiOverlayStyle("+this.GB().i(0)+")"},
gv(a){var s=this
return A.V(s.a,s.b,s.d,s.e,s.f,s.r,s.w,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(a,b){var s,r=this
if(b==null)return!1
if(J.T(b)!==A.C(r))return!1
if(b instanceof A.i0)if(J.f(b.a,r.a))if(J.f(b.e,r.e))if(b.r===r.r)if(b.f===r.f)s=b.c==r.c
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.a7q.prototype={
$0(){if(!J.f($.pt,$.ahP)){B.c3.fI("SystemChrome.setSystemUIOverlayStyle",$.pt.GB(),t.H)
$.ahP=$.pt}$.pt=null},
$S:0}
A.wG.prototype={
F(){return"SystemSoundType."+this.b}}
A.a7y.prototype={
U(a,b){return new A.Mu(b,this)}}
A.Uj.prototype={
fV(a){var s,r,q,p,o,n=a.a
if(n<=0)return B.cU
s=this.a
r=s.length
if(n<=r)q=n===r&&a.b===B.G
else q=!0
if(q)return new A.b2(r,B.P)
switch(a.b.a){case 0:p=Math.min(n-1,r)
o=Math.min(n,r)
break
case 1:p=Math.min(n,r)
o=Math.min(n+1,r)
break
default:o=null
p=null}return new A.b2(A.am2(s,p,o).b,B.G)},
fW(a){var s,r,q,p,o,n=a.a
if(n>=0)s=n===0&&a.b===B.P
else s=!0
if(s)return B.cU
s=this.a
r=s.length
if(n>=r)return new A.b2(r,B.P)
switch(a.b.a){case 0:q=Math.min(n-1,r)
p=Math.min(n,r)
break
case 1:q=Math.min(n,r)
p=Math.min(n+1,r)
break
default:p=null
q=null}o=A.am2(s,q,p)
return new A.b2(r-(o.a.length-o.c),B.P)}}
A.a8J.prototype={
fV(a){return new A.b2(this.a.b.mD(a).a,B.G)},
fW(a){return new A.b2(this.a.b.mD(a).b,B.P)}}
A.a_B.prototype={
fV(a){return new A.b2(this.a.B5(a).a,B.G)},
fW(a){return new A.b2(this.a.B5(a).b,B.P)}}
A.Vk.prototype={
fV(a){return B.cU},
fW(a){return new A.b2(this.a.length,B.P)}}
A.a8H.prototype={
fV(a){var s,r=a.a,q=this.a,p=q.length
if(r<=p)r=r===p&&a.b===B.G
else r=!0
if(r)a=new A.b2(p,B.P)
s=a.a
if(s<=0)return B.cU
if(a.b===B.G&&!A.a8_(B.c.ab(q,s)))return a
for(;--s,s>=0;)if(!A.a8_(B.c.ab(q,s)))return new A.b2(s+1,B.P)
return B.cU},
fW(a){var s,r=a.a,q=this.a,p=q.length
if(r>=p)return new A.b2(p,B.P)
if(r>=0)r=r===0&&a.b===B.P
else r=!0
if(r)a=B.cU
s=a.a
if(a.b===B.P&&!A.a8_(B.c.ab(q,s-1)))return a
for(;s<p;++s)if(!A.a8_(B.c.ab(q,s)))return new A.b2(s,B.G)
return new A.b2(p,B.P)}}
A.Mu.prototype={
fV(a){return this.a.fV(this.b.fV(a))},
fW(a){return this.a.fW(this.b.fW(a))}}
A.Io.prototype={
D9(a){if(this.a)switch(a.b.a){case 0:return new A.b2(a.a,B.G)
case 1:return new A.b2(a.a+1,B.P)}else switch(a.b.a){case 0:return new A.b2(a.a-1,B.G)
case 1:return new A.b2(a.a,B.P)}},
fV(a){return this.D9(a)},
fW(a){return this.D9(a)}}
A.Kn.prototype={
i(a){var s,r,q=this,p=", isDirectional: "
if(!q.gkr())return"TextSelection.invalid"
s=""+q.c
r=""+q.f
return q.a===q.b?"TextSelection.collapsed(offset: "+s+", affinity: "+q.e.i(0)+p+r+")":"TextSelection(baseOffset: "+s+", extentOffset: "+q.d+p+r+")"},
k(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof A.Kn))return!1
if(!r.gkr())return!b.gkr()
if(b.c===r.c)if(b.d===r.d)s=(r.a!==r.b||b.e===r.e)&&b.f===r.f
else s=!1
else s=!1
return s},
gv(a){var s,r=this
if(!r.gkr())return A.V(-B.f.gv(1),-B.f.gv(1),A.eM(B.G),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)
s=r.a===r.b?A.eM(r.e):A.eM(B.G)
return A.V(B.f.gv(r.c),B.f.gv(r.d),s,B.nL.gv(r.f),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.Jx.prototype={
F(){return"SelectionChangedCause."+this.b}}
A.Kl.prototype={
gRD(){var s=this.c
s===$&&A.b()
return s},
qk(a){return this.W9(a)},
W9(a){var s=0,r=A.a4(t.z),q,p=2,o,n=this,m,l,k,j,i
var $async$qk=A.a0(function(b,c){if(b===1){o=c
s=p}while(true)switch(s){case 0:p=4
s=7
return A.a5(n.wa(a),$async$qk)
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
l=A.aB(i)
k=A.bk("during method call "+a.a)
A.dJ(new A.bz(m,l,"services library",k,new A.a7Z(a),!1))
throw i
s=6
break
case 3:s=2
break
case 6:case 1:return A.a2(q,r)
case 2:return A.a1(o,r)}})
return A.a3($async$qk,r)},
wa(a){return this.Vu(a)},
Vu(a){var s=0,r=A.a4(t.z),q,p=this,o,n,m,l,k,j
var $async$wa=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:j=a.a
if(j==="TextInputClient.focusElement"){p.f.j(0,J.aN(t.j.a(a.b),0))
s=1
break}else if(j==="TextInputClient.requestElementsInRect"){o=J.l8(t.j.a(a.b),t.fY)
n=A.n(o).h("aI<Y.E,O>")
m=p.f
l=A.n(m).h("b9<1>")
k=l.h("dz<r.E,B<@>>")
q=A.aA(new A.dz(new A.aO(new A.b9(m,l),new A.a7W(p,A.aA(new A.aI(o,new A.a7X(),n),!0,n.h("bq.E"))),l.h("aO<r.E>")),new A.a7Y(p),k),!0,k.h("r.E"))
s=1
break}else if(j==="TextInputClient.scribbleInteractionBegan"){s=1
break}else if(j==="TextInputClient.scribbleInteractionFinished"){s=1
break}s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$wa,r)}}
A.a7Z.prototype={
$0(){var s=null
return A.a([A.hp("call",this.a,!0,B.aP,s,!1,s,s,B.ar,s,!1,!0,!0,B.b0,s,t.fw)],t.F)},
$S:16}
A.a7X.prototype={
$1(a){return a},
$S:266}
A.a7W.prototype={
$1(a){this.a.f.j(0,a)
return!1},
$S:28}
A.a7Y.prototype={
$1(a){var s=this.a.f.j(0,a),r=s.gxP(s)
s=[a]
B.b.K(s,[r.ghw(r),r.gAF(r),r.gbg(r),r.gbL(r)])
return s},
$S:267}
A.wR.prototype={}
A.Of.prototype={}
A.Rw.prototype={}
A.aeO.prototype={
$1(a){this.a.sc_(a)
return!1},
$S:39}
A.aK.prototype={}
A.bl.prototype={
fp(a){this.b=a},
ia(a,b){this.gtk()
return!0},
gtk(){return!0},
rm(a){return!0},
ZS(a){var s=this.a
s.b=!0
s.a.push(a)
return null},
KH(a){return this.a.A(0,a)}}
A.lq.prototype={}
A.lj.prototype={
cZ(a){return this.c.$1(a)}}
A.SJ.prototype={
JD(a,b,c){if(a instanceof A.lq)return a.mc(b,c)
else return a.cZ(b)}}
A.it.prototype={
ai(){return new A.xd(A.b7(t.nT),new A.L(),B.m)}}
A.SL.prototype={
$1(a){var s=a.f
s.toString
t.ke.a(s)
return!1},
$S:41}
A.SO.prototype={
$1(a){var s,r=this,q=a.f
q.toString
s=A.agu(t.ke.a(q),r.b,r.d)
if(s!=null){r.c.C3(a,null)
r.a.a=s
return!0}return!1},
$S:41}
A.SM.prototype={
$1(a){var s,r=a.f
r.toString
s=A.agu(t.ke.a(r),this.b,this.c)
if(s!=null){this.a.a=s
return!0}return!1},
$S:41}
A.SP.prototype={
$1(a){var s,r,q=this,p=a.f
p.toString
s=q.b
r=A.agu(t.ke.a(p),s,q.d)
p=r!=null
if(p&&r.ia(0,s))q.a.a=A.ajF(a).JD(r,s,q.c)
return p},
$S:41}
A.xd.prototype={
aA(){this.aS()
this.GI()},
TJ(a){this.aw(new A.a8Q(this))},
GI(){var s,r,q,p,o=this,n=o.a.d
n=n.gb0(n)
s=A.k6(n,A.n(n).h("r.E"))
r=o.d.kd(s)
n=o.d
n.toString
q=s.kd(n)
for(n=r.ga8(r),p=o.gEl();n.t();)n.gG(n).KH(p)
for(n=q.ga8(q);n.t();)n.gG(n).ZS(p)
o.d=s},
aW(a){this.bi(a)
this.GI()},
m(){var s,r,q,p,o=this
o.aM()
for(s=o.d,s=A.ji(s,s.r),r=o.gEl(),q=A.n(s).c;s.t();){p=s.d;(p==null?q.a(p):p).KH(r)}o.d=null},
L(a){var s=this.a
return new A.xc(null,s.d,this.e,s.e,null)}}
A.a8Q.prototype={
$0(){this.a.e=new A.L()},
$S:0}
A.xc.prototype={
bX(a){var s
if(this.w===a.w)s=!A.afR(a.r,this.r)
else s=!0
return s}}
A.KS.prototype={
cZ(a){a.a6p()
return null}}
A.Dk.prototype={
rm(a){return this.c},
cZ(a){}}
A.nq.prototype={}
A.nH.prototype={}
A.hr.prototype={}
A.Di.prototype={}
A.ml.prototype={}
A.Im.prototype={
ia(a,b){var s,r,q,p,o,n=$.ak.I$.f.f
if(n==null||n.e==null)return!1
for(s=t.r,r=0;r<2;++r){q=B.GP[r]
p=n.e
p.toString
o=A.agw(p,q,s)
if(o!=null&&o.ia(0,q)){this.c=o
this.d=q
return!0}}return!1},
cZ(a){var s,r=this.c
r===$&&A.b()
s=this.d
s===$&&A.b()
r.cZ(s)}}
A.O9.prototype={
VU(a,b,c){var s
a.fp(this.gka())
s=A.n(this).h("lq<1>").b(a)?a.mc(b,c):a.cZ(b)
a.fp(null)
return s},
mc(a,b){var s=this,r=A.agv(s.gtr(),A.n(s).c)
return r==null?s.a3q(a,s.b,b):s.VU(r,a,b)},
cZ(a){return this.mc(a,null)},
gtk(){var s=this,r=A.agw(s.gtr(),null,A.n(s).c)
if(r!=null){r.fp(s.gka())
r.gtk()
r.fp(null)}else s.gka().gtk()
return!0},
ia(a,b){var s,r=this,q=A.agv(r.gtr(),A.n(r).c),p=q==null
if(!p)q.fp(r.gka())
s=(p?r.gka():q).ia(0,b)
if(!p)q.fp(null)
return s},
rm(a){var s,r=this,q=A.agv(r.gtr(),A.n(r).c),p=q==null
if(!p)q.fp(r.gka())
s=(p?r.gka():q).rm(a)
if(!p)q.fp(null)
return s}}
A.yn.prototype={
a3q(a,b,c){var s=this.e
if(b==null)return s.cZ(a)
else return s.cZ(a)},
gka(){return this.e},
gtr(){return this.f}}
A.L_.prototype={}
A.KZ.prototype={}
A.Nb.prototype={}
A.zI.prototype={
fp(a){this.MW(a)
this.e.fp(a)}}
A.r4.prototype={
aD(a){var s=new A.vz(this.e,!0,null,A.aq(),this.$ti.h("vz<1>"))
s.aE()
s.saN(null)
return s},
aG(a,b){b.sn(0,this.e)
b.sMI(!0)}}
A.xa.prototype={
ai(){return new A.zr(B.m)}}
A.zr.prototype={
gVH(){var s,r
$.ak.toString
s=$.aM()
if(s.gyb()!=="/"){$.ak.toString
s=s.gyb()}else{r=this.a.ax
$.ak.toString
s=s.gyb()
s=s}return s},
aA(){var s=this
s.aS()
s.Zv()
$.ak.toString
s.r=s.wN($.aM().a.f,s.a.fy)
$.ak.ag$.push(s)},
aW(a){this.bi(a)
this.H1(a)},
m(){B.b.A($.ak.ag$,this)
var s=this.d
if(s!=null)s.m()
this.aM()},
Dn(){var s=this.d
if(s!=null)s.m()
this.e=this.d=null},
H1(a){var s,r=this
r.a.toString
if(r.gHa()){r.Dn()
if(r.f==null||r.a.c!=a.c){s=r.a.c
r.f=s==null?new A.jU(r,t.yh):s}}else{r.Dn()
r.f=null}},
Zv(){return this.H1(null)},
gHa(){var s=this.a
if(s.Q==null){s=s.as
s=s==null?null:s.gbD(s)
s=s===!0||this.a.d!=null||!1}else s=!0
return s},
WJ(a){var s,r=this,q=a.a,p=q==="/"&&r.a.Q!=null?new A.ae_(r):r.a.as.j(0,q)
if(p!=null)return r.a.f.$1$2(a,p,t.z)
s=r.a.d
if(s!=null)return s.$1(a)
return null},
WX(a){return this.a.at.$1(a)},
iS(){var s=0,r=A.a4(t.y),q,p=this,o,n
var $async$iS=A.a0(function(a,b){if(a===1)return A.a1(b,r)
while(true)switch(s){case 0:p.a.toString
o=p.f
n=o==null?null:o.gbn()
if(n==null){q=!1
s=1
break}q=n.K3()
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$iS,r)},
oc(a){return this.a1k(a)},
a1k(a){var s=0,r=A.a4(t.y),q,p=this,o,n
var $async$oc=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:p.a.toString
o=p.f
n=o==null?null:o.gbn()
if(n==null){q=!1
s=1
break}o=n.wR(a,null,t.X)
o.toString
o=A.amI(o,B.Cr,!1,null)
n.e.push(o)
n.vN()
n.CV(o.a)
q=!0
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$oc,r)},
wN(a,b){this.a.toString
return A.azq(a,b)},
yg(a){var s=this,r=s.wN(a,s.a.fy)
if(!r.k(0,s.r))s.aw(new A.ae2(s,r))},
L(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g={}
g.a=null
s=i.a
s.toString
if(i.gHa()){s=i.f
r=i.gVH()
q=i.a
p=q.e==null?A.aAE():new A.ae0(i)
o=q.ay
o.toString
g.a=A.akt(!0,new A.uQ(r,i.gWI(),i.gWW(),o,"nav",p,!0,s),"Navigator Scope",h,h)
s=q}else{s=i.a
s.toString}g.b=null
n=new A.hl(new A.ae1(g,i),h)
g.b=n
n=A.rV(n,h,B.cT,!0,s.cy,h,h,B.aX)
g.b=n
s=$.awI
if(s)m=new A.I1(15,!1,!1,h)
else m=h
if(m!=null)g.b=A.fl(B.aE,A.a([n,A.vm(h,m,h,h,0,0,0,h)],t.E),B.R,B.aO)
s=i.a
r=s.CW
s=s.db
s=A.b6(255,s.gn(s)>>>16&255,s.gn(s)>>>8&255,s.gn(s)&255)
g=g.b
l=i.wN(A.a([i.a.dx],t.as),i.a.fy)
q=t.eu
p=A.a([],q)
B.b.K(p,i.a.dy)
p.push(B.Eg)
q=A.a(p.slice(0),q)
k=new A.ub(l,q,new A.Kv(r,s,g,h),h)
A.dq(a)
g=i.a
j=new A.y5(k,h)
k=j
g=g.p3
s=A.awH()
r=A.ou($.apL(),t.n,t.nT)
q=t.B8
p=t.dc
r.l(0,B.C9,new A.yn(new A.p4(new A.bi(A.a([],q),p)),a,!1,!1,!1,!1,new A.bi(A.a([],q),p),t.hb.h("yn<bl.T>")))
return new A.vO(new A.wg(A.ahJ(new A.Da(A.SK(r,A.aku(new A.Kg(new A.wi(k,h),h),new A.vv(A.z(t.j5,t.uJ)))),h),"<Default WidgetsApp Shortcuts>",s),h),g,h)}}
A.ae_.prototype={
$1(a){var s=this.a.a.Q
s.toString
return s},
$S:10}
A.ae2.prototype={
$0(){this.a.r=this.b},
$S:0}
A.ae0.prototype={
$2(a,b){return this.a.a.e.$1(b)},
$S:106}
A.ae1.prototype={
$1(a){return this.b.a.ch.$2(a,this.a.a)},
$S:10}
A.S7.prototype={}
A.nA.prototype={
ai(){return new A.xi(B.m)}}
A.xi.prototype={
aA(){this.aS()
this.GN()},
aW(a){this.bi(a)
this.GN()},
GN(){this.e=new A.cI(this.gQV(),this.a.c,null,t.dm)},
m(){var s,r,q=this.d
if(q!=null)for(q=A.iN(q,q.r);q.t();){s=q.d
r=this.d.j(0,s)
r.toString
s.H(0,r)}this.aM()},
QW(a){var s,r=this,q=a.a,p=r.d
if(p==null)p=r.d=A.z(t.yF,t.M)
p.l(0,q,r.Sa(q))
p=r.d.j(0,q)
p.toString
q.S(0,p)
if(!r.f){r.f=!0
s=r.E6()
if(s!=null)r.GY(s)
else $.bO.ax$.push(new A.a9a(r))}return!1},
E6(){var s={},r=this.c
r.toString
s.a=null
r.aU(new A.a9f(s))
return t.ot.a(s.a)},
GY(a){var s,r
this.c.toString
s=this.f
r=this.e
r===$&&A.b()
a.D4(t.CR.a(A.atG(r,s)))},
Sa(a){return new A.a9e(this,a)},
L(a){var s=this.f,r=this.e
r===$&&A.b()
return new A.tY(s,r,null)}}
A.a9a.prototype={
$1(a){var s,r=this.a
if(r.c==null)return
s=r.E6()
s.toString
r.GY(s)},
$S:2}
A.a9f.prototype={
$1(a){this.a.a=a},
$S:6}
A.a9e.prototype={
$0(){var s=this.a
s.d.A(0,this.b)
if(s.d.a===0)if($.bO.CW$.a<3)s.aw(new A.a9c(s))
else{s.f=!1
A.dE(new A.a9d(s))}},
$S:0}
A.a9c.prototype={
$0(){this.a.f=!1},
$S:0}
A.a9d.prototype={
$0(){var s=this.a
if(s.c!=null&&s.d.a===0)s.aw(new A.a9b(s))},
$S:0}
A.a9b.prototype={
$0(){},
$S:0}
A.lX.prototype={}
A.F5.prototype={}
A.nB.prototype={
q1(){var s=new A.F5($.bu())
this.hq$=s
this.c.cS(new A.lX(s))},
pn(){var s,r=this
if(r.gu9()){if(r.hq$==null)r.q1()}else{s=r.hq$
if(s!=null){s.aB()
s.dF()
r.hq$=null}}},
L(a){if(this.gu9()&&this.hq$==null)this.q1()
return B.a04}}
A.O_.prototype={
L(a){throw A.c(A.ty("Widgets that mix AutomaticKeepAliveClientMixin into their State must call super.build() but must ignore the return value of the superclass."))}}
A.QZ.prototype={
Bv(a,b){},
mj(a){A.amO(this,new A.adM(this,a))}}
A.adM.prototype={
$1(a){var s=a.z
if(s!=null&&s.C(0,this.a))a.b4()},
$S:6}
A.adL.prototype={
$1(a){A.amO(a,this.a)},
$S:6}
A.R_.prototype={
bI(a){var s=A.fQ(t.h,t.X)
return new A.QZ(s,this,B.a6)}}
A.eZ.prototype={
bX(a){return this.w!==a.w}}
A.oE.prototype={
aD(a){var s=this.e
s=new A.IS(B.d.b2(A.Sm(s,0,1)*255),s,!1,null,A.aq())
s.aE()
s.saN(null)
return s},
aG(a,b){b.smm(0,this.e)
b.sr6(!1)}}
A.rQ.prototype={
aD(a){var s=new A.IG(this.e,this.f,this.r,!1,!1,null,A.aq())
s.aE()
s.saN(null)
return s},
aG(a,b){b.stN(this.e)
b.sJ_(this.f)
b.stS(this.r)
b.cf=b.bu=!1},
oe(a){a.stN(null)
a.sJ_(null)}}
A.nM.prototype={
aD(a){var s=new A.ID(null,this.f,null,A.aq())
s.aE()
s.saN(null)
return s},
aG(a,b){b.snV(null)
b.srk(this.f)},
oe(a){a.snV(null)}}
A.AX.prototype={
aD(a){var s=new A.IC(this.e,this.f,null,A.aq())
s.aE()
s.saN(null)
return s},
aG(a,b){b.snV(this.e)
b.srk(this.f)},
oe(a){a.snV(null)}}
A.I7.prototype={
aD(a){var s=this,r=new A.IV(s.e,s.r,s.w,s.y,s.x,null,s.f,null,A.aq())
r.aE()
r.saN(null)
return r},
aG(a,b){var s=this
b.sd3(0,s.e)
b.srk(s.f)
b.sa_v(0,s.r)
b.si1(0,s.w)
b.sau(0,s.x)
b.sfY(0,s.y)}}
A.I8.prototype={
aD(a){var s=this,r=new A.IW(s.r,s.x,s.w,s.e,s.f,null,A.aq())
r.aE()
r.saN(null)
return r},
aG(a,b){var s=this
b.snV(s.e)
b.srk(s.f)
b.si1(0,s.r)
b.sau(0,s.w)
b.sfY(0,s.x)}}
A.pD.prototype={
aD(a){var s=this,r=A.dI(a),q=new A.J4(s.w,null,A.aq())
q.aE()
q.saN(null)
q.sbl(0,s.e)
q.se4(s.r)
q.sbE(r)
q.sm3(s.x)
q.sKm(0,null)
return q},
aG(a,b){var s=this
b.sbl(0,s.e)
b.sKm(0,null)
b.se4(s.r)
b.sbE(A.dI(a))
b.bu=s.w
b.sm3(s.x)}}
A.Eb.prototype={
aD(a){var s=new A.vA(this.e,this.f,A.dI(a),B.h,null,A.aq())
s.aE()
s.saN(null)
return s},
aG(a,b){b.syM(this.e)
b.se4(this.f)
b.sbE(A.dI(a))
if(B.h!==b.dN){b.dN=B.h
b.ah()
b.b_()}}}
A.Er.prototype={
aD(a){var s=new A.IL(this.e,this.f,null,A.aq())
s.aE()
s.saN(null)
return s},
aG(a,b){b.sa5O(this.e)
b.O=this.f}}
A.hM.prototype={
aD(a){var s=new A.IT(this.e,A.dI(a),null,A.aq())
s.aE()
s.saN(null)
return s},
aG(a,b){b.sdi(0,this.e)
b.sbE(A.dI(a))}}
A.la.prototype={
aD(a){var s=new A.IY(this.f,this.r,this.e,A.dI(a),null,A.aq())
s.aE()
s.saN(null)
return s},
aG(a,b){b.se4(this.e)
b.sa60(this.f)
b.sa2S(this.r)
b.sbE(A.dI(a))}}
A.jH.prototype={}
A.rR.prototype={
aD(a){var s=new A.IH(this.e,null,A.aq())
s.aE()
s.saN(null)
return s},
aG(a,b){b.syd(this.e)}}
A.u2.prototype={
nM(a){var s,r,q=a.e
q.toString
t.DU.a(q)
s=this.f
if(q.e!==s){q.e=s
r=a.c
if(r instanceof A.x)r.a5()}}}
A.rP.prototype={
aD(a){var s=new A.IF(this.e,0,null,null,A.aq())
s.aE()
s.K(0,null)
return s},
aG(a,b){b.syd(this.e)}}
A.wm.prototype={
aD(a){return A.alx(A.nE(this.f,this.e))},
aG(a,b){b.sHp(A.nE(this.f,this.e))},
bW(){var s,r=this,q=r.e
if(q===1/0&&r.f===1/0)s="SizedBox.expand"
else s=q===0&&r.f===0?"SizedBox.shrink":"SizedBox"
q=r.a
return q==null?s:s+"-"+q.i(0)}}
A.fG.prototype={
aD(a){return A.alx(this.e)},
aG(a,b){b.sHp(this.e)}}
A.Fd.prototype={
aD(a){var s=new A.IO(this.e,this.f,null,A.aq())
s.aE()
s.saN(null)
return s},
aG(a,b){b.sa44(0,this.e)
b.sa41(0,this.f)}}
A.uZ.prototype={
aD(a){var s=new A.IR(this.e,null,A.aq())
s.aE()
s.saN(null)
return s},
aG(a,b){b.stC(this.e)},
bI(a){return new A.O6(this,B.a6)}}
A.O6.prototype={}
A.Ao.prototype={
aD(a){var s=new A.IA(this.e,null,A.aq())
s.aE()
s.saN(null)
return s},
aG(a,b){b.sa_m(0,this.e)}}
A.ww.prototype={
aD(a){var s=A.dI(a)
s=new A.vG(this.e,s,this.r,this.w,A.aq(),0,null,null,A.aq())
s.aE()
s.K(0,null)
return s},
aG(a,b){var s
b.se4(this.e)
s=A.dI(a)
b.sbE(s)
s=this.r
if(b.ag!==s){b.ag=s
b.a5()}s=this.w
if(s!==b.aY){b.aY=s
b.ah()
b.b_()}}}
A.mj.prototype={
nM(a){var s,r,q,p=this,o=a.e
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
if(q instanceof A.x)q.a5()}}}
A.Ih.prototype={
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
r=s}return A.vm(p.f,p.x,o,o,r,s,p.d,p.r)}}
A.ts.prototype={
gWv(){switch(this.e.a){case 0:return!0
case 1:var s=this.w
return s===B.ab||s===B.F8}},
uh(a){var s=this.x
s=this.gWv()?A.dI(a):null
return s},
aD(a){var s=this
return A.avs(B.h,s.w,s.e,s.f,s.r,s.z,s.uh(a),s.y)},
aG(a,b){var s=this,r=s.e
if(b.M!==r){b.M=r
b.a5()}r=s.f
if(b.u!==r){b.u=r
b.a5()}r=s.r
if(b.I!==r){b.I=r
b.a5()}r=s.w
if(b.ar!==r){b.ar=r
b.a5()}r=s.uh(a)
if(b.ag!=r){b.ag=r
b.a5()}r=s.y
if(b.aY!==r){b.aY=r
b.a5()}if(B.h!==b.ce){b.ce=B.h
b.ah()
b.b_()}}}
A.Jc.prototype={}
A.B2.prototype={}
A.o8.prototype={
nM(a){var s,r,q,p=a.e
p.toString
t.uc.a(p)
s=this.f
if(p.e!==s){p.e=s
r=!0}else r=!1
s=this.r
if(p.f!==s){p.f=s
r=!0}if(r){q=a.c
if(q instanceof A.x)q.a5()}}}
A.E5.prototype={}
A.J6.prototype={
aD(a){var s,r,q,p=this,o=null,n=p.e,m=p.r
if(m==null){m=a.a4(t.I)
m.toString
m=m.w}s=p.x
r=A.ahj(a)
q=s===B.bo?"\u2026":o
s=new A.vC(A.a81(q,r,p.z,p.as,n,p.f,m,p.ax,p.y,p.at),p.w,s,p.ch,0,o,o,A.aq())
s.aE()
s.K(0,o)
s.vL(n)
s.spb(p.ay)
return s},
aG(a,b){var s,r=this
b.su2(0,r.e)
b.sAw(0,r.f)
s=r.r
if(s==null){s=a.a4(t.I)
s.toString
s=s.w}b.sbE(s)
b.sMK(r.w)
b.sa4s(0,r.x)
b.sAx(r.y)
b.szq(r.z)
b.sMU(r.as)
b.sAy(r.at)
b.sL4(r.ax)
s=A.ahj(a)
b.szl(0,s)
b.spb(r.ay)
b.sMj(r.ch)}}
A.a3j.prototype={
$1(a){return!0},
$S:37}
A.Is.prototype={
aD(a){var s=this,r=s.d
r=r==null?null:r.cI(0)
r=new A.IM(r,s.e,s.f,s.r,s.w,s.x,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.CW,!1,null,!1,A.aq())
r.aE()
r.Zk()
return r},
aG(a,b){var s=this,r=s.d
b.sf4(0,r==null?null:r.cI(0))
b.ar=s.e
b.sbg(0,s.f)
b.sbL(0,s.r)
b.sMa(0,s.w)
b.sau(0,s.x)
b.smm(0,s.y)
b.sa04(s.Q)
b.syM(s.as)
b.se4(s.at)
b.sa5d(0,s.ax)
b.sa_H(s.ay)
b.sa4_(!1)
b.sbE(null)
b.sz8(s.CW)
b.sz9(!1)
b.sm3(s.z)},
oe(a){a.sf4(0,null)}}
A.Fe.prototype={
aD(a){var s=this,r=null,q=new A.IX(s.e,r,s.r,r,s.x,s.y,r,r,s.as,s.at,r,A.aq())
q.aE()
q.saN(r)
return q},
aG(a,b){var s=this
b.cJ=s.e
b.bt=null
b.aj=s.r
b.aZ=null
b.aT=s.x
b.by=s.y
b.bR=b.dL=null
b.an=s.as
b.B=s.at}}
A.Hf.prototype={
aD(a){var s=this,r=new A.IQ(!0,s.e,s.f,s.r,s.w,B.aA,null,A.aq())
r.aE()
r.saN(null)
return r},
aG(a,b){var s,r=this
b.bt=r.e
b.aj=r.f
b.aZ=r.r
s=r.w
if(!b.aT.k(0,s)){b.aT=s
b.ah()}if(b.B!==B.aA){b.B=B.aA
b.ah()}}}
A.h0.prototype={
aD(a){var s=new A.J_(null,A.aq())
s.aE()
s.saN(null)
return s}}
A.hz.prototype={
aD(a){var s=new A.vB(this.e,this.f,null,A.aq())
s.aE()
s.saN(null)
return s},
aG(a,b){b.sJo(this.e)
b.sz2(this.f)}}
A.Ae.prototype={
aD(a){var s=new A.vx(!1,null,null,A.aq())
s.aE()
s.saN(null)
return s},
aG(a,b){b.sHg(!1)
b.sz2(null)}}
A.wa.prototype={
aD(a){var s=this,r=new A.vE(s.e,s.f,s.r,!1,s.Ei(a),null,A.aq())
r.aE()
r.saN(null)
r.GK(r.B)
return r},
Ei(a){var s,r=this.e,q=r.p4
if(q!=null)return q
if(r.fx==null){r=r.p2!=null
s=r}else s=!0
if(!s)return null
return A.dI(a)},
aG(a,b){var s=this
b.sa0h(s.f)
b.sa1J(s.r)
b.sa1H(!1)
b.sKw(s.e)
b.sbE(s.Ei(a))}}
A.Ha.prototype={
aD(a){var s=new A.IP(null,A.aq())
s.aE()
s.saN(null)
return s}}
A.AE.prototype={
aD(a){var s=new A.IB(!0,null,A.aq())
s.aE()
s.saN(null)
return s},
aG(a,b){b.sa_u(!0)}}
A.th.prototype={
aD(a){var s=new A.IK(this.e,null,A.aq())
s.aE()
s.saN(null)
return s},
aG(a,b){b.sa1I(this.e)}}
A.tO.prototype={
aD(a){var s=new A.IN(this.e,null,A.aq())
s.aE()
s.saN(null)
return s},
aG(a,b){b.sz3(0,this.e)}}
A.iL.prototype={
L(a){return this.c}}
A.hl.prototype={
L(a){return this.c.$1(a)}}
A.rB.prototype={
aD(a){var s=new A.yr(this.e,B.aA,null,A.aq())
s.aE()
s.saN(null)
return s},
aG(a,b){t.oZ.a(b).sau(0,this.e)}}
A.yr.prototype={
sau(a,b){if(b.k(0,this.cJ))return
this.cJ=b
this.ah()},
aH(a,b){var s,r,q,p,o,n,m=this
if(m.k3.M7(0,B.W)){s=a.gbC(a)
r=m.k3
q=b.a
p=b.b
o=r.a
r=r.b
n=$.as().bj()
n.sau(0,m.cJ)
s.cc(new A.A(q,p,q+o,p+r),n)}s=m.u$
if(s!=null)a.eJ(s,b)}}
A.ae4.prototype={
$0(){var s,r,q=this,p=q.b
if(p==null||t.c.b(q.c)){p=q.a.ry$
p===$&&A.b()
p=p.e
p.toString
s=q.c
s=s.gbv(s)
r=A.arz()
p.bS(r,s)
p=r}return p},
$S:415}
A.ae5.prototype={
$1(a){var s=a==null?t.K.a(a):a
return this.a.j9(s)},
$S:277}
A.df.prototype={
iS(){return A.bH(!1,t.y)},
oc(a){return A.bH(!1,t.y)},
a1l(a){var s=a.a
s.toString
return this.oc(s)},
rw(){},
Ig(){},
If(){},
yg(a){},
Ie(a){}}
A.xb.prototype={
ZZ(a){return this.ag$.push(a)},
a2j(){this.a1q($.aM().a.f)},
a1q(a){var s,r,q
for(s=this.ag$,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].yg(a)},
t6(){var s=0,r=A.a4(t.H),q,p=this,o,n,m
var $async$t6=A.a0(function(a,b){if(a===1)return A.a1(b,r)
while(true)switch(s){case 0:o=A.aA(p.ag$,!0,t.nR),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.a5(o[m].iS(),$async$t6)
case 6:if(b){s=1
break}case 4:++m
s=3
break
case 5:A.a7r()
case 1:return A.a2(q,r)}})
return A.a3($async$t6,r)},
t7(a){return this.a2w(a)},
a2w(a){var s=0,r=A.a4(t.H),q,p=this,o,n,m
var $async$t7=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:o=A.aA(p.ag$,!0,t.nR),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.a5(o[m].oc(a),$async$t7)
case 6:if(c){s=1
break}case 4:++m
s=3
break
case 5:case 1:return A.a2(q,r)}})
return A.a3($async$t7,r)},
qd(a){return this.V3(a)},
V3(a){var s=0,r=A.a4(t.H),q,p=this,o,n,m,l
var $async$qd=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:o=A.aA(p.ag$,!0,t.nR),n=o.length,m=J.aH(a),l=0
case 3:if(!(l<n)){s=5
break}s=6
return A.a5(o[l].a1l(new A.p1(A.by(m.j(a,"location")),m.j(a,"state"))),$async$qd)
case 6:if(c){s=1
break}case 4:++l
s=3
break
case 5:case 1:return A.a2(q,r)}})
return A.a3($async$qd,r)},
UI(a){switch(a.a){case"popRoute":return this.t6()
case"pushRoute":return this.t7(A.by(a.b))
case"pushRouteInformation":return this.qd(t.G.a(a.b))}return A.bH(null,t.z)},
TW(){this.yB()},
Mb(a){A.ch(B.v,new A.a8I(this,a))},
$iaj:1,
$idw:1}
A.ae3.prototype={
$1(a){var s,r,q=$.bO
q.toString
s=this.a
r=s.a
r.toString
q.KN(r)
s.a=null
this.b.bz$.ey(0)},
$S:95}
A.a8I.prototype={
$0(){var s,r,q=this.a,p=q.ce$
q.c8$=!0
s=q.ry$
s===$&&A.b()
s=s.e
s.toString
r=q.I$
r.toString
q.ce$=new A.mm(this.b,s,"[root]",new A.jU(s,t.l9),t.go).a_n(r,t.jv.a(p))
if(p==null)$.bO.yB()},
$S:0}
A.mm.prototype={
bI(a){return new A.kk(this,B.a6,this.$ti.h("kk<1>"))},
aD(a){return this.d},
aG(a,b){},
a_n(a,b){var s,r={}
r.a=b
if(b==null){a.K_(new A.a2I(r,this,a))
s=r.a
s.toString
a.rd(s,new A.a2J(r))}else{b.bk=this
b.fM()}r=r.a
r.toString
return r},
bW(){return this.e}}
A.a2I.prototype={
$0(){var s=this.b,r=A.avt(s,s.$ti.c)
this.a.a=r
r.r=this.c},
$S:0}
A.a2J.prototype={
$0(){var s=this.a.a
s.toString
s.Cs(null,null)
s.qz()},
$S:0}
A.kk.prototype={
aU(a){var s=this.aX
if(s!=null)a.$1(s)},
j7(a){this.aX=null
this.kV(a)},
f8(a,b){this.Cs(a,b)
this.qz()},
ba(a,b){this.mX(0,b)
this.qz()},
hC(){var s=this,r=s.bk
if(r!=null){s.bk=null
s.mX(0,s.$ti.h("mm<1>").a(r))
s.qz()}s.Cr()},
qz(){var s,r,q,p,o,n,m,l=this
try{o=l.aX
n=l.f
n.toString
l.aX=l.dD(o,l.$ti.h("mm<1>").a(n).c,B.mO)}catch(m){s=A.ag(m)
r=A.aB(m)
o=A.bk("attaching to the render tree")
q=new A.bz(s,r,"widgets library",o,null,!1)
A.dJ(q)
p=A.XJ(q)
l.aX=l.dD(null,p,B.mO)}},
ga9(){return this.$ti.h("aC<1>").a(A.bx.prototype.ga9.call(this))},
je(a,b){var s=this.$ti
s.h("aC<1>").a(A.bx.prototype.ga9.call(this)).saN(s.c.a(a))},
jh(a,b,c){},
js(a,b){this.$ti.h("aC<1>").a(A.bx.prototype.ga9.call(this)).saN(null)}}
A.KU.prototype={$iaj:1}
A.zs.prototype={
eF(){this.MZ()
$.eh=this
var s=$.aM()
s.Q=this.gUP()
s.as=$.aa},
AH(){this.N1()
this.vP()}}
A.zt.prototype={
eF(){this.Q2()
$.bO=this},
i9(){this.N_()}}
A.zu.prototype={
eF(){var s,r,q,p,o=this
o.Q4()
$.h3=o
o.bd$!==$&&A.ex()
o.bd$=B.E5
s=new A.vL(A.b7(t.hp),$.bu())
B.iv.mL(s.gWm())
o.cd$=s
s=t.F3
r=new A.Z4(A.z(s,t.lT),A.b7(t.vQ),A.a([],t.AV))
o.aX$!==$&&A.ex()
o.aX$=r
q=$.agg()
p=A.a([],t.DG)
o.bk$!==$&&A.ex()
s=o.bk$=new A.F6(r,q,p,A.b7(s))
p=$.aM()
p.at=s.ga2f()
p.ax=$.aa
B.CJ.uw(s.ga2y())
s=$.akR
if(s==null)s=$.akR=A.a([],t.e8)
s.push(o.gR_())
B.CL.uw(new A.ae5(o))
B.CK.uw(o.gUE())
B.c3.mL(o.gUN())
$.aps()
o.a4T()},
i9(){this.Q5()}}
A.zv.prototype={
eF(){this.Q6()
$.eJ=this
var s=t.K
this.fF$=new A.Zx(A.z(s,t.fx),A.z(s,t.lM),A.z(s,t.s8))},
oC(){this.P3()
var s=this.fF$
s===$&&A.b()
s.X(0)},
j9(a){return this.a2E(a)},
a2E(a){var s=0,r=A.a4(t.H),q,p=this
var $async$j9=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:s=3
return A.a5(p.P4(a),$async$j9)
case 3:switch(A.by(J.aN(t.a.a(a),"type"))){case"fontsChange":p.yE$.aB()
break}s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$j9,r)}}
A.zw.prototype={
eF(){this.Q9()
$.a4v=this
this.dL$=$.aM().a.a}}
A.zx.prototype={
eF(){var s,r,q,p,o=this
o.Qa()
$.kl=o
s=t.By
o.ry$=new A.Ia(o.ga1B(),o.gVi(),o.gVm(),o.gVk(),A.a([],s),A.a([],s),A.a([],s),A.b7(t.d))
s=$.aM()
s.f=o.ga2l()
r=s.r=$.aa
s.fy=o.ga2N()
s.go=r
s.k2=o.ga2r()
s.k3=r
s.p1=o.gVg()
s.p2=r
s.p3=o.gVe()
s.p4=r
r=new A.vH(B.W,o.I8(),$.ci(),null,A.aq())
r.aE()
r.saN(null)
q=o.ry$
q===$&&A.b()
q.sa5s(r)
r=o.ry$.e
r.Q=r
q=t.W
q.a(A.I.prototype.gbq.call(r)).r.push(r)
p=r.GX()
r.ch.saF(0,p)
q.a(A.I.prototype.gbq.call(r)).z.push(r)
o.MB(s.a.c)
o.at$.push(o.gUL())
s=o.rx$
if(s!=null)s.m()
s=t.S
r=$.bu()
o.rx$=new A.Hg(new A.a0s(B.lE,A.z(s,t.Df)),A.z(s,t.eg),r)
o.ax$.push(o.gVz())},
i9(){this.Q7()},
yr(a,b,c){this.rx$.a5X(b,new A.ae4(this,c,b))
this.Np(0,b,c)},
ii(){var s=0,r=A.a4(t.H),q=[],p=this,o
var $async$ii=A.a0(function(a,b){if(a===1)return A.a1(b,r)
while(true)switch(s){case 0:s=2
return A.a5(p.N0(),$async$ii)
case 2:o=$.ajJ
if((o==null?null:o.a)==null)try{o=p.ry$
o===$&&A.b()
o.e.eK()}finally{}p.uo()
s=3
return A.a5(p.gID(),$async$ii)
case 3:return A.a2(null,r)}})
return A.a3($async$ii,r)}}
A.zy.prototype={
i9(){this.Qc()},
yT(){var s,r,q
this.OA()
for(s=this.ag$,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].rw()},
yZ(){var s,r,q
this.OC()
for(s=this.ag$,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].Ig()},
yV(){var s,r,q
this.OB()
for(s=this.ag$,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].If()},
t4(a){var s,r,q
this.OR(a)
for(s=this.ag$,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].Ie(a)},
oC(){var s,r
this.Q8()
for(s=this.ag$.length,r=0;r<s;++r);},
yw(){var s,r,q=this,p={}
p.a=null
if(q.aY$){s=new A.ae3(p,q)
p.a=s
$.bO.a_a(s)}try{r=q.ce$
if(r!=null)q.I$.a_A(r)
q.Oz()
q.I$.a1O()}finally{}r=q.aY$=!1
p=p.a
if(p!=null)r=!(q.xr$||q.x2$===0)
if(r){q.aY$=!0
r=$.bO
r.toString
p.toString
r.KN(p)}},
ii(){var s=this.ce$
if(s!=null)this.I$.a4Y(s,$.ajJ)
return this.Qd()}}
A.D2.prototype={
aD(a){var s=new A.II(this.e,this.f,A.aiL(a,null),null,A.aq())
s.aE()
s.saN(null)
return s},
aG(a,b){b.sa15(this.e)
b.sxV(A.aiL(a,null))
b.sbv(0,this.f)}}
A.nR.prototype={
gWZ(){var s,r=this.r
if(r==null||r.gdi(r)==null)return this.e
s=r.gdi(r)
r=this.e
if(r==null)return s
s.toString
return r.D(0,s)},
L(a){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){s=o.x
if(s!=null)s=!(s.a>=s.b&&s.c>=s.d)
else s=!0}else s=!1
if(s)m=A.atN(new A.fG(B.mg,n,n),0,0)
else{s=o.d
if(s!=null)m=new A.la(s,n,n,m,n)}r=o.gWZ()
if(r!=null)m=new A.hM(r,m,n)
s=o.f
if(s!=null)m=new A.rB(s,m,n)
s=o.as
if(s!==B.h){q=A.dI(a)
p=o.r
p.toString
m=A.ajY(m,s,new A.M3(q==null?B.w:q,p))}s=o.r
if(s!=null)m=A.akb(m,s,B.hx)
s=o.x
if(s!=null)m=new A.fG(s,m,n)
s=o.y
if(s!=null)m=new A.hM(s,m,n)
m.toString
return m}}
A.M3.prototype={
B0(a){return this.c.uf(new A.A(0,0,0+a.a,0+a.b),this.b)},
BG(a){return!a.c.k(0,this.c)||a.b!==this.b}}
A.nW.prototype={
bX(a){return!J.f(this.w,a.w)||!J.f(this.x,a.x)}}
A.O0.prototype={
L(a){throw A.c(A.ty("A DefaultSelectionStyle constructed with DefaultSelectionStyle.fallback cannot be incorporated into the widget tree, it is meant only to provide a fallback value returned by DefaultSelectionStyle.of() when no enclosing default selection style is present in a BuildContext."))}}
A.Da.prototype={
Tq(){var s=$.ap5()
return s},
L(a){var s=this.c,r=this.Tq()
if(r!=null)s=A.ahJ(s,"<Web Disabling Text Editing Shortcuts>",r)
return A.ahJ(s,"<Default Text Editing Shortcuts>",A.asj())}}
A.Dj.prototype={
gaQ(a){var s=this.a
if(s==null)return null
s=s.c
s.toString
return s}}
A.o_.prototype={
ai(){return new A.xw(A.In(null),A.In(null),B.m)},
a24(a,b,c){return this.d.$3(a,b,c)},
a5p(a,b,c){return this.e.$3(a,b,c)}}
A.xw.prototype={
aA(){var s,r=this
r.aS()
s=r.a.c
r.d=s.gb1(s)
r.a.c.cG(r.gv4())
r.GJ()},
D0(a){var s,r=this,q=r.d
q===$&&A.b()
s=r.Rv(a,q)
r.d=s
if(q!==s)r.GJ()},
aW(a){var s,r,q=this
q.bi(a)
s=a.c
if(s!==q.a.c){r=q.gv4()
s.bV(r)
q.a.c.cG(r)
r=q.a.c
q.D0(r.gb1(r))}},
Rv(a,b){switch(a.a){case 0:case 3:return a
case 1:switch(b.a){case 0:case 3:case 1:return a
case 2:return b}break
case 2:switch(b.a){case 0:case 3:case 2:return a
case 1:return b}break}},
GJ(){var s=this,r=s.d
r===$&&A.b()
switch(r.a){case 0:case 1:s.e.saJ(0,s.a.c)
s.f.saJ(0,B.ci)
break
case 2:case 3:s.e.saJ(0,B.d1)
s.f.saJ(0,new A.eN(s.a.c,new A.bi(A.a([],t.A),t.Q),0))
break}},
m(){this.a.c.bV(this.gv4())
this.aM()},
L(a){var s=this.a
return s.a24(a,this.e,s.a5p(a,this.f,s.f))}}
A.iK.prototype={
F(){return"KeyEventResult."+this.b}}
A.Lj.prototype={}
A.Yd.prototype={
ae(a){var s,r=this.a
if(r.ax===this){if(!r.gja()){s=r.w
s=s!=null&&s.w===r}else s=!0
if(s)r.Li(B.Cb)
s=r.w
if(s!=null){if(s.f===r)s.f=null
s.r.A(0,r)}s=r.Q
if(s!=null)s.XL(0,r)
r.ax=null}},
Aq(a){var s,r=this.a
if(r.ax===this){s=r.e
s.toString
a=A.ath(s,!0);(a==null?r.e.r.f.e:a).wH(r)}},
KO(){return this.Aq(null)}}
A.x5.prototype={
F(){return"UnfocusDisposition."+this.b}}
A.cE.prototype={
gdZ(){var s,r,q
if(this.a)return!0
for(s=this.gfu(),r=s.length,q=0;q<r;++q)s[q].toString
return!1},
sdZ(a){var s,r=this
if(a!==r.a){r.a=a
s=r.w
if(s!=null){s.qn()
s.r.D(0,r)}}},
gci(){var s,r,q,p
if(!this.b)return!1
s=this.gdu()
if(s!=null&&!s.gci())return!1
for(r=this.gfu(),q=r.length,p=0;p<q;++p)r[p].toString
return!0},
sci(a){var s,r=this
if(a!==r.b){r.b=a
if(r.gko()&&!a)r.Li(B.Cb)
s=r.w
if(s!=null){s.qn()
s.r.D(0,r)}}},
slH(a){return},
slI(a){},
go6(){var s,r,q,p,o=this.y
if(o==null){s=A.a([],t.i4)
for(o=this.as,r=o.length,q=0;q<o.length;o.length===r||(0,A.Q)(o),++q){p=o[q]
B.b.K(s,p.go6())
s.push(p)}this.y=s
o=s}return o},
gpj(){var s=this.go6()
return new A.aO(s,new A.Ye(),A.ao(s).h("aO<1>"))},
gfu(){var s,r,q=this.x
if(q==null){s=A.a([],t.i4)
r=this.Q
for(;r!=null;){s.push(r)
r=r.Q}this.x=s
q=s}return q},
gko(){if(!this.gja()){var s=this.w
if(s==null)s=null
else{s=s.f
s=s==null?null:B.b.C(s.gfu(),this)}s=s===!0}else s=!0
return s},
gja(){var s=this.w
return(s==null?null:s.f)===this},
gku(){return this.gdu()},
gdu(){var s,r,q,p
for(s=this.gfu(),r=s.length,q=0;q<r;++q){p=s[q]
if(p instanceof A.lC)return p}return null},
gaO(a){var s,r=this.e.ga9(),q=r.bw(0,null),p=r.gjD(),o=A.cr(q,new A.v(p.a,p.b))
p=r.bw(0,null)
q=r.gjD()
s=A.cr(p,new A.v(q.c,q.d))
return new A.A(o.a,o.b,s.a,s.b)},
Li(a){var s,r,q=this
if(!q.gko()){s=q.w
s=s==null||s.w!==q}else s=!1
if(s)return
r=q.gdu()
if(r==null)return
switch(a.a){case 0:if(r.gci())B.b.X(r.dy)
for(;!r.gci();){r=r.gdu()
if(r==null){s=q.w
r=s==null?null:s.e}}r.iz(!1)
break
case 1:if(r.gci())B.b.A(r.dy,q)
for(;!r.gci();){s=r.gdu()
if(s!=null)B.b.A(s.dy,r)
r=r.gdu()
if(r==null){s=q.w
r=s==null?null:s.e}}r.iz(!0)
break}},
EZ(a){var s=this,r=s.w
if(r!=null){if(r.f===s)r.w=null
else{r.w=s
r.qn()}return}a.lq()
a.ws()
if(a!==s)s.ws()},
FA(a,b,c){var s,r,q
if(c){s=b.gdu()
if(s!=null)B.b.A(s.dy,b)}b.Q=null
B.b.A(this.as,b)
for(s=this.gfu(),r=s.length,q=0;q<r;++q)s[q].y=null
this.y=null},
XL(a,b){return this.FA(a,b,!0)},
Zq(a){var s,r,q,p
this.w=a
for(s=this.go6(),r=s.length,q=0;q<r;++q){p=s[q]
p.w=a
p.x=null}},
wH(a){var s,r,q,p,o,n=this
if(a.Q===n)return
s=a.gdu()
r=a.gko()
q=a.Q
if(q!=null)q.FA(0,a,s!=n.gku())
n.as.push(a)
a.Q=n
a.x=null
a.Zq(n.w)
for(q=a.gfu(),p=q.length,o=0;o<p;++o)q[o].y=null
if(r){q=n.w
if(q!=null){q=q.f
if(q!=null)q.lq()}}if(s!=null&&a.e!=null&&a.gdu()!==s){q=a.e
q.toString
q=A.akv(q)
if(q!=null)q.xR(a,s)}if(a.ay){a.iz(!0)
a.ay=!1}},
m(){var s=this.ax
if(s!=null)s.ae(0)
this.dF()},
ws(){var s=this
if(s.Q==null)return
if(s.gja())s.lq()
s.aB()},
u0(){this.iz(!0)},
iz(a){var s,r=this
if(!r.gci())return
if(r.Q==null){r.ay=!0
return}r.lq()
if(r.gja()){s=r.w.w
s=s==null||s===r}else s=!1
if(s)return
r.EZ(r)},
lq(){var s,r,q,p,o,n
for(s=B.b.ga8(this.gfu()),r=new A.pL(s,t.ii),q=t.j5,p=this;r.t();p=o){o=q.a(s.gG(s))
n=o.dy
B.b.A(n,p)
n.push(p)}},
bW(){var s,r,q,p=this
p.gko()
s=p.gko()&&!p.gja()?"[IN FOCUS PATH]":""
r=s+(p.gja()?"[PRIMARY FOCUS]":"")
s=A.bL(p)
q=r.length!==0?"("+r+")":""
return"<optimized out>#"+s+q},
$iab:1}
A.Ye.prototype={
$1(a){return!a.gdZ()&&a.gci()},
$S:12}
A.lC.prototype={
gku(){return this},
gpj(){if(!this.gci())return B.Dg
return A.cE.prototype.gpj.call(this)},
mK(a){if(a.Q==null)this.wH(a)
if(this.gko())a.iz(!0)
else a.lq()},
iz(a){var s,r,q=this,p=q.dy
while(!0){if((p.length!==0?B.b.gV(p):null)!=null)s=!(p.length!==0?B.b.gV(p):null).gci()
else s=!1
if(!s)break
p.pop()}r=p.length!==0?B.b.gV(p):null
if(!a||r==null){if(q.gci()){q.lq()
q.EZ(q)}return}r.iz(!0)}}
A.iF.prototype={
F(){return"FocusHighlightMode."+this.b}}
A.El.prototype={
F(){return"FocusHighlightStrategy."+this.b}}
A.tz.prototype={
GW(){var s,r,q=this
switch(0){case 0:s=q.c
if(s==null)return
r=s?B.hD:B.ee
break}s=q.b
if(s==null)s=A.Em()
q.b=r
if((r==null?A.Em():r)!==s)q.Wz()},
Wz(){var s,r,q,p,o,n,m,l,k,j=this,i=j.d,h=i.a
if(h.a===0)return
p=A.aA(i,!0,t.tP)
for(i=p.length,o=0;o<i;++o){s=p[o]
try{if(h.T(0,s)){n=j.b
if(n==null)n=A.Em()
s.$1(n)}}catch(m){r=A.ag(m)
q=A.aB(m)
l=j instanceof A.bY?A.d_(j):null
n=A.bk("while dispatching notifications for "+A.aD(l==null?A.aU(j):l).i(0))
k=$.fA()
if(k!=null)k.$1(new A.bz(r,q,"widgets library",n,null,!1))}}},
Tb(a){var s,r,q=this
switch(a.gc9(a).a){case 0:case 2:case 3:q.c=!0
s=B.hD
break
case 1:case 4:case 5:q.c=!1
s=B.ee
break
default:s=null}r=q.b
if(s!==(r==null?A.Em():r))q.GW()},
UD(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.c=!1
i.GW()
s=i.f
if(s==null)return!1
s=A.a([s],t.i4)
B.b.K(s,i.f.gfu())
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
switch(A.azA(k).a){case 1:break c$1
case 0:r=!0
break
case 2:r=!1
break
default:r=!1}break}s.length===q||(0,A.Q)(s);++m}return r},
qn(){if(this.y)return
this.y=!0
A.dE(this.gRd())},
Re(){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.y=!1
s=h.f
for(r=h.x,q=r.length,p=h.e,o=0;o<r.length;r.length===q||(0,A.Q)(r),++o){n=r[o]
m=n.a
if(m.Q!=null||m===p)if(m.w===h){l=m.dy
m=(l.length!==0?B.b.gV(l):null)==null&&B.b.C(n.b.gfu(),m)
k=m}else k=!1
else k=!1
if(k)n.b.iz(!0)}B.b.X(r)
r=h.f
if(r==null&&h.w==null)h.w=p
q=h.w
if(q!=null&&q!==r){if(s==null)j=null
else{r=s.gfu()
r=A.u5(r,A.ao(r).c)
j=r}if(j==null)j=A.b7(t.lc)
r=h.w.gfu()
i=A.u5(r,A.ao(r).c)
r=h.r
r.K(0,i.kd(j))
r.K(0,j.kd(i))
r=h.f=h.w
h.w=null}if(s!=r){if(s!=null)h.r.D(0,s)
r=h.f
if(r!=null)h.r.D(0,r)}for(r=h.r,q=A.ji(r,r.r),p=A.n(q).c;q.t();){m=q.d;(m==null?p.a(m):m).ws()}r.X(0)
if(s!=h.f)h.aB()},
$iab:1}
A.MH.prototype={}
A.MI.prototype={}
A.MJ.prototype={}
A.MK.prototype={}
A.lB.prototype={
gKe(){var s=this.w,r=this.e
s=r==null?null:r.r
return s},
gzS(){var s=this.x
if(s==null){s=this.e
s=s==null?null:s.f}return s},
gci(){var s=this.y
if(s==null){s=this.e
s=s==null?null:s.gci()}return s!==!1},
gdZ(){var s=this.z
if(s==null){s=this.e
s=s==null?null:s.gdZ()}return s===!0},
glH(){var s=this.Q
if(s==null)s=this.e!=null||null
return s!==!1},
glI(){var s=this.as
if(s==null)s=this.e!=null||null
return s!==!1},
glG(){var s=this.ax
if(s==null){s=this.e
s=s==null?null:s.at}return s},
ai(){return A.awU()}}
A.q1.prototype={
gbU(a){var s=this.a.e
if(s==null){s=this.d
s.toString}return s},
aA(){this.aS()
this.EF()},
EF(){var s,r,q,p=this
if(p.a.e==null)if(p.d==null)p.d=p.DE()
s=p.gbU(p)
p.a.glH()
s.slH(!0)
s=p.gbU(p)
p.a.glI()
s.slI(!0)
p.a.gdZ()
p.gbU(p).sdZ(p.a.gdZ())
if(p.a.y!=null){s=p.gbU(p)
r=p.a.y
r.toString
s.sci(r)}p.f=p.gbU(p).gci()
p.gbU(p)
p.r=!0
p.gbU(p)
p.w=!0
p.e=p.gbU(p).gja()
s=p.gbU(p)
r=p.c
r.toString
p.a.gKe()
q=p.a.gzS()
s.e=r
s.f=q==null?s.f:q
r=s.r
s.r=r
p.y=s.ax=new A.Yd(s)
p.gbU(p).S(0,p.gw3())},
DE(){var s=this,r=s.a.glG(),q=s.a.gci()
s.a.glH()
s.a.glI()
return A.ah0(q,r,!0,!0,null,null,s.a.gdZ())},
m(){var s,r=this
r.gbU(r).H(0,r.gw3())
r.y.ae(0)
s=r.d
if(s!=null)s.m()
r.aM()},
b4(){this.cu()
var s=this.y
if(s!=null)s.KO()
this.En()},
En(){var s,r,q,p=this
if(!p.x&&p.a.f){s=p.c
s.toString
s=A.atg(s)
r=p.gbU(p)
if(r.Q==null)s.wH(r)
q=s.w
if(q!=null)q.x.push(new A.Lj(s,r))
s=s.w
if(s!=null)s.qn()
p.x=!0}},
de(){this.mZ()
var s=this.y
if(s!=null)s.KO()
this.x=!1},
aW(a){var s,r,q=this
q.bi(a)
s=a.e
r=q.a
if(s==r.e){if(!J.f(r.gzS(),q.gbU(q).f))q.gbU(q).f=q.a.gzS()
q.a.gKe()
q.gbU(q)
q.a.gdZ()
q.gbU(q).sdZ(q.a.gdZ())
if(q.a.y!=null){s=q.gbU(q)
r=q.a.y
r.toString
s.sci(r)}s=q.gbU(q)
q.a.glH()
s.slH(!0)
s=q.gbU(q)
q.a.glI()
s.slI(!0)}else{q.y.ae(0)
if(s!=null)s.H(0,q.gw3())
q.EF()}if(a.f!==q.a.f)q.En()},
Uv(){var s,r=this,q=r.gbU(r).gja(),p=r.gbU(r).gci()
r.gbU(r)
r.gbU(r)
s=r.a.r
if(s!=null)s.$1(r.gbU(r).gko())
s=r.e
s===$&&A.b()
if(s!==q)r.aw(new A.aaf(r,q))
s=r.f
s===$&&A.b()
if(s!==p)r.aw(new A.aag(r,p))
s=r.r
s===$&&A.b()
if(!s)r.aw(new A.aah(r,!0))
s=r.w
s===$&&A.b()
if(!s)r.aw(new A.aai(r,!0))},
L(a){var s,r,q=this,p=null,o=q.y
o.toString
o.Aq(q.a.c)
o=q.a
s=o.d
if(o.at){o=q.f
o===$&&A.b()
r=q.e
r===$&&A.b()
s=A.dO(p,s,!1,p,!1,o,r,p,p,p,p,p,p,p,p,p,p,p,p,p)}return A.amy(s,q.gbU(q))}}
A.aaf.prototype={
$0(){this.a.e=this.b},
$S:0}
A.aag.prototype={
$0(){this.a.f=this.b},
$S:0}
A.aah.prototype={
$0(){this.a.r=this.b},
$S:0}
A.aai.prototype={
$0(){this.a.w=this.b},
$S:0}
A.En.prototype={
ai(){return new A.ML(B.m)}}
A.ML.prototype={
DE(){var s=this.a.glG()
return A.ah1(this.a.gci(),s,this.a.gdZ())},
L(a){var s=this,r=null,q=s.y
q.toString
q.Aq(s.a.c)
q=s.gbU(s)
return A.dO(r,A.amy(s.a.d,q),!1,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)}}
A.xE.prototype={}
A.aeL.prototype={
$1(a){var s=this.a
if(--s.a===0){s.b=a
return!1}return!0},
$S:39}
A.q2.prototype={}
A.mP.prototype={
F(){return"TraversalDirection."+this.b}}
A.Eo.prototype={
E0(a,b,c){var s,r=a.gku(),q=r.dy,p=q.length!==0?B.b.gV(q):null
q=p==null&&r.go6().length!==0
if(q){s=this.Gh(r,a)
if(s.length===0)p=null
else p=b?B.b.gV(s):B.b.gJ(s)}return p==null?a:p},
T1(a,b){return this.E0(a,!1,b)},
a3o(a){},
xR(a,b){},
Tx(a){var s
if(a==null)s=null
else{s=a.jz(t.AB)
if(s==null)s=null
else{s=s.f
s.toString}}return t.fc.a(s)},
Gh(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=this.Tx(a.e),c=d==null,b=c?e:d.f
if(b==null)b=new A.vv(A.z(t.j5,t.uJ))
s=A.z(t.k_,t.hF)
for(r=a.go6(),q=r.length,p=t.fc,o=t.AB,n=t.i4,m=0;m<r.length;r.length===q||(0,A.Q)(r),++m){l=r[m]
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
h=A.ans(k,2)
if(h==null)k=e
else{k=h.y
j=k==null?e:k.j(0,A.aD(o))
if(j==null)k=e
else{k=j.f
k.toString}}p.a(k)
g=k==null?e:k.r
if(s.j(0,g)==null)s.l(0,g,A.amz(k,b,A.a([],n)))
s.j(0,g).c.push(i)
continue}if(l.gci()&&!l.gdZ()){if(s.j(0,i)==null)s.l(0,i,A.amz(k,b,A.a([],n)))
s.j(0,i).c.push(l)}}for(r=A.iN(s,s.r);r.t();){q=r.d
p=s.j(0,q).b.ML(s.j(0,q).c,a0)
p=A.a(p.slice(0),A.ao(p))
B.b.X(s.j(0,q).c)
B.b.K(s.j(0,q).c,p)}f=A.a([],n)
if(s.a!==0)r=s.T(0,c?e:d.r)
else r=!1
if(r){r=s.j(0,c?e:d.r)
r.toString
new A.Yg(s,f).$1(r)}if(!!f.fixed$length)A.X(A.N("removeWhere"))
B.b.qD(f,new A.Yf(),!0)
return f},
F4(a,b){var s,r,q,p,o,n,m=this,l=a.gku()
l.toString
m.kW(l)
m.ou$.A(0,l)
s=l.dy
r=s.length!==0?B.b.gV(s):null
if(r==null){q=b?m.T1(a,!1):m.E0(a,!0,!1)
A.kT(q,b?B.cO:B.cP)
return!0}p=m.Gh(l,a)
if(p.length===0)return!1
if(b&&r===B.b.gV(p)){A.kT(B.b.gJ(p),B.cO)
return!0}if(!b&&r===B.b.gJ(p)){A.kT(B.b.gV(p),B.cP)
return!0}for(l=J.av(b?p:new A.cL(p,A.ao(p).h("cL<1>"))),o=null;l.t();o=n){n=l.gG(l)
if(o==r){l=b?B.cO:B.cP
n.u0()
s=n.e
s.toString
A.alM(s,1,l)
return!0}}return!1}}
A.Yg.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=a.c,r=s.length,q=this.b,p=this.a,o=0;o<s.length;s.length===r||(0,A.Q)(s),++o){n=s[o]
if(p.T(0,n)){m=p.j(0,n)
m.toString
this.$1(m)}else q.push(n)}},
$S:280}
A.Yf.prototype={
$1(a){return!a.gci()||a.gdZ()},
$S:12}
A.pV.prototype={}
A.Md.prototype={}
A.V3.prototype={
a1Q(a,b){var s=this
switch(b.a){case 0:return s.qJ(a,!1,!0)
case 2:return s.qJ(a,!0,!0)
case 3:return s.qJ(a,!1,!1)
case 1:return s.qJ(a,!0,!1)}},
qJ(a,b,c){var s=a.gku().gpj().dV(0)
A.nn(s,new A.Vb(c,b),t.lc)
if(s.length!==0)return B.b.gJ(s)
return null},
YN(a,b,c){var s,r=c.gpj().dV(0)
A.nn(r,new A.V5(),t.lc)
switch(a.a){case 3:s=new A.aO(r,new A.V6(b),A.ao(r).h("aO<1>"))
break
case 1:s=new A.aO(r,new A.V7(b),A.ao(r).h("aO<1>"))
break
case 0:case 2:s=null
break
default:s=null}return s},
YO(a,b,c){var s=c.dV(0)
A.nn(s,new A.V8(),t.lc)
switch(a.a){case 0:return new A.aO(s,new A.V9(b),A.ao(s).h("aO<1>"))
case 2:return new A.aO(s,new A.Va(b),A.ao(s).h("aO<1>"))
case 3:case 1:break}return null},
Xs(a,b,c){var s,r,q=this,p=q.ou$,o=p.j(0,b),n=o!=null
if(n){s=o.a
s=s.length!==0&&B.b.gJ(s).a!==a}else s=!1
if(s){s=o.a
if(B.b.gV(s).b.Q==null){q.kW(b)
p.A(0,b)
return!1}r=new A.V4(q,o,b)
switch(a.a){case 2:case 0:switch(B.b.gJ(s).a.a){case 3:case 1:q.kW(b)
p.A(0,b)
break
case 0:case 2:if(r.$1(a))return!0
break}break
case 3:case 1:switch(B.b.gJ(s).a.a){case 3:case 1:if(r.$1(a))return!0
break
case 0:case 2:q.kW(b)
p.A(0,b)
break}break}}if(n&&o.a.length===0){q.kW(b)
p.A(0,b)}return!1},
a36(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=a.gku(),f=g.dy,e=f.length!==0?B.b.gV(f):h
if(e==null){s=i.a1Q(a,b)
if(s==null)s=a
switch(b.a){case 0:case 3:A.kT(s,B.cP)
break
case 1:case 2:A.kT(s,B.cO)
break}return!0}if(i.Xs(b,g,e))return!0
f=e.e
f.toString
r=A.i_(f)
f=b.a
switch(f){case 2:case 0:q=i.YO(b,e.gaO(e),g.gpj())
if(r!=null&&!r.d.gHx()){q.toString
p=new A.aO(q,new A.Vc(r),q.$ti.h("aO<r.E>"))
if(!p.gR(p))q=p}if(!q.ga8(q).t()){o=h
break}n=A.aA(q,!0,A.n(q).h("r.E"))
if(b===B.Zk){m=A.ao(n).h("cL<1>")
n=A.aA(new A.cL(n,m),!0,m.h("bq.E"))}l=new A.aO(n,new A.Vd(new A.A(e.gaO(e).a,-1/0,e.gaO(e).c,1/0)),A.ao(n).h("aO<1>"))
if(!l.gR(l)){o=l.gJ(l)
break}A.nn(n,new A.Ve(e),t.lc)
o=B.b.gJ(n)
break
case 1:case 3:q=i.YN(b,e.gaO(e),g)
if(r!=null&&!r.d.gHx()){q.toString
p=new A.aO(q,new A.Vf(r),q.$ti.h("aO<r.E>"))
if(!p.gR(p))q=p}if(!q.ga8(q).t()){o=h
break}n=A.aA(q,!0,A.n(q).h("r.E"))
if(b===B.Zl){m=A.ao(n).h("cL<1>")
n=A.aA(new A.cL(n,m),!0,m.h("bq.E"))}l=new A.aO(n,new A.Vg(new A.A(-1/0,e.gaO(e).b,1/0,e.gaO(e).d)),A.ao(n).h("aO<1>"))
if(!l.gR(l)){o=l.gJ(l)
break}A.nn(n,new A.Vh(e),t.lc)
o=B.b.gJ(n)
break
default:o=h}if(o!=null){m=i.ou$
k=m.j(0,g)
j=new A.pV(b,e)
if(k!=null)k.a.push(j)
else m.l(0,g,new A.Md(A.a([j],t.gE)))
switch(f){case 0:case 3:A.kT(o,B.cP)
break
case 2:case 1:A.kT(o,B.cO)
break}return!0}return!1}}
A.acx.prototype={
$1(a){return a.b===this.a},
$S:281}
A.Vb.prototype={
$2(a,b){if(this.a)if(this.b)return B.d.b3(a.gaO(a).b,b.gaO(b).b)
else return B.d.b3(b.gaO(b).d,a.gaO(a).d)
else if(this.b)return B.d.b3(a.gaO(a).a,b.gaO(b).a)
else return B.d.b3(b.gaO(b).c,a.gaO(a).c)},
$S:34}
A.V5.prototype={
$2(a,b){return B.d.b3(a.gaO(a).gaV().a,b.gaO(b).gaV().a)},
$S:34}
A.V6.prototype={
$1(a){var s=this.a
return!a.gaO(a).k(0,s)&&a.gaO(a).gaV().a<=s.a},
$S:12}
A.V7.prototype={
$1(a){var s=this.a
return!a.gaO(a).k(0,s)&&a.gaO(a).gaV().a>=s.c},
$S:12}
A.V8.prototype={
$2(a,b){return B.d.b3(a.gaO(a).gaV().b,b.gaO(b).gaV().b)},
$S:34}
A.V9.prototype={
$1(a){var s=this.a
return!a.gaO(a).k(0,s)&&a.gaO(a).gaV().b<=s.b},
$S:12}
A.Va.prototype={
$1(a){var s=this.a
return!a.gaO(a).k(0,s)&&a.gaO(a).gaV().b>=s.d},
$S:12}
A.V4.prototype={
$1(a){var s,r,q=this.b.a.pop().b,p=q.e
p.toString
p=A.i_(p)
s=$.ak.I$.f.f.e
s.toString
if(p!=A.i_(s)){p=this.a
s=this.c
p.kW(s)
p.ou$.A(0,s)
return!1}switch(a.a){case 0:case 3:r=B.cP
break
case 1:case 2:r=B.cO
break
default:r=null}A.kT(q,r)
return!0},
$S:283}
A.Vc.prototype={
$1(a){var s=a.e
s.toString
return A.i_(s)===this.a},
$S:12}
A.Vd.prototype={
$1(a){var s=a.gaO(a).f5(this.a)
return!s.gR(s)},
$S:12}
A.Ve.prototype={
$2(a,b){var s=this.a
return B.d.b3(Math.abs(a.gaO(a).gaV().a-s.gaO(s).gaV().a),Math.abs(b.gaO(b).gaV().a-s.gaO(s).gaV().a))},
$S:34}
A.Vf.prototype={
$1(a){var s=a.e
s.toString
return A.i_(s)===this.a},
$S:12}
A.Vg.prototype={
$1(a){var s=a.gaO(a).f5(this.a)
return!s.gR(s)},
$S:12}
A.Vh.prototype={
$2(a,b){var s=this.a
return B.d.b3(Math.abs(a.gaO(a).gaV().b-s.gaO(s).gaV().b),Math.abs(b.gaO(b).gaV().b-s.gaO(s).gaV().b))},
$S:34}
A.cP.prototype={
gIj(){var s=this.d
if(s==null){s=this.c.e
s.toString
s=this.d=new A.acv().$1(s)}s.toString
return s}}
A.acu.prototype={
$1(a){var s=a.gIj()
return A.u5(s,A.ao(s).c)},
$S:284}
A.acw.prototype={
$2(a,b){switch(this.a.a){case 1:return B.d.b3(a.b.a,b.b.a)
case 0:return B.d.b3(b.b.c,a.b.c)}},
$S:110}
A.acv.prototype={
$1(a){var s,r,q=A.a([],t.AG),p=t.I,o=a.jz(p)
for(;o!=null;){s=o.f
s.toString
q.push(p.a(s))
s=A.ans(o,1)
if(s==null)o=null
else{s=s.y
r=s==null?null:s.j(0,A.aD(p))
o=r}}return q},
$S:286}
A.id.prototype={
gaO(a){var s,r,q,p,o=this
if(o.b==null)for(s=o.a,s=new A.aI(s,new A.acs(),A.ao(s).h("aI<1,A>")),s=new A.dp(s,s.gp(s)),r=A.n(s).c;s.t();){q=s.d
if(q==null)q=r.a(q)
p=o.b
if(p==null){o.b=q
p=q}o.b=p.or(q)}s=o.b
s.toString
return s}}
A.acs.prototype={
$1(a){return a.b},
$S:287}
A.act.prototype={
$2(a,b){switch(this.a.a){case 1:return B.d.b3(a.gaO(a).a,b.gaO(b).a)
case 0:return B.d.b3(b.gaO(b).c,a.gaO(a).c)}},
$S:288}
A.vv.prototype={
RY(a){var s,r,q,p,o,n=B.b.gJ(a).a,m=t.hY,l=A.a([],m),k=A.a([],t.lZ)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.Q)(a),++r){q=a[r]
p=q.a
if(p==n){l.push(q)
continue}k.push(new A.id(l))
l=A.a([q],m)
n=p}if(l.length!==0)k.push(new A.id(l))
for(m=k.length,r=0;r<k.length;k.length===m||(0,A.Q)(k),++r){s=k[r].a
if(s.length===1)continue
o=B.b.gJ(s).a
o.toString
A.amH(s,o)}return k},
Fq(a){var s,r,q,p
A.nn(a,new A.a2w(),t.dP)
s=B.b.gJ(a)
r=new A.a2x().$2(s,a)
if(J.bE(r)<=1)return s
q=A.axf(r)
q.toString
A.amH(r,q)
p=this.RY(r)
if(p.length===1)return B.b.gJ(B.b.gJ(p).a)
A.axe(p,q)
return B.b.gJ(B.b.gJ(p).a)},
ML(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a.length<=1)return a
s=A.a([],t.hY)
for(r=a.length,q=t.n2,p=t.I,o=0;o<a.length;a.length===r||(0,A.Q)(a),++o){n=a[o]
m=n.gaO(n)
l=n.e.y
k=l==null?null:l.j(0,A.aD(p))
if(k==null)l=null
else{l=k.f
l.toString}q.a(l)
s.push(new A.cP(l==null?null:l.w,m,n))}j=A.a([],t.i4)
i=this.Fq(s)
j.push(i.c)
B.b.A(s,i)
for(;s.length!==0;){h=this.Fq(s)
j.push(h.c)
B.b.A(s,h)}return j}}
A.a2w.prototype={
$2(a,b){return B.d.b3(a.b.b,b.b.b)},
$S:110}
A.a2x.prototype={
$2(a,b){var s=a.b,r=A.ao(b).h("aO<1>")
return A.aA(new A.aO(b,new A.a2y(new A.A(-1/0,s.b,1/0,s.d)),r),!0,r.h("r.E"))},
$S:289}
A.a2y.prototype={
$1(a){var s=a.b.f5(this.a)
return!s.gR(s)},
$S:290}
A.tA.prototype={
ai(){return new A.MM(B.m)}}
A.MM.prototype={
aA(){this.aS()
this.d=A.ah0(!1,"FocusTraversalGroup",!0,!0,null,null,!0)},
m(){var s=this.d
if(s!=null)s.m()
this.aM()},
L(a){var s=null,r=this.a,q=r.c,p=this.d
p.toString
return new A.q3(q,p,A.Ek(!1,!1,r.f,s,!0,!0,p,!1,s,s,s,s,s,!0),s)}}
A.q3.prototype={
bX(a){return!1}}
A.J5.prototype={
cZ(a){A.kT(a.gbU(a),B.TL)}}
A.m4.prototype={}
A.Ht.prototype={
cZ(a){var s=$.ak.I$.f.f
s.e.a4(t.AB).f.F4(s,!0)}}
A.mk.prototype={}
A.Ik.prototype={
cZ(a){var s=$.ak.I$.f.f
s.e.a4(t.AB).f.F4(s,!1)}}
A.Dg.prototype={
cZ(a){var s=$.ak.I$.f.f,r=s.e.a4(t.AB)
r.f.a36(s,a.a)}}
A.MN.prototype={}
A.OX.prototype={
xR(a,b){var s
this.No(a,b)
s=this.ou$.j(0,b)
if(s!=null){s=s.a
if(!!s.fixed$length)A.X(A.N("removeWhere"))
B.b.qD(s,new A.acx(a),!0)}}}
A.Rz.prototype={}
A.RA.prototype={}
A.ei.prototype={
gbn(){var s,r=$.ak.I$.z.j(0,this)
if(r instanceof A.fn){s=r.ok
s.toString
if(A.n(this).c.b(s))return s}return null}}
A.bw.prototype={
i(a){var s=this,r=s.a,q=r!=null?" "+r:""
if(A.C(s)===B.ZA)return"[GlobalKey#"+A.bL(s)+q+"]"
return"["+("<optimized out>#"+A.bL(s))+q+"]"}}
A.jU.prototype={
k(a,b){if(b==null)return!1
if(J.T(b)!==A.C(this))return!1
return this.$ti.b(b)&&b.a===this.a},
gv(a){return A.l5(this.a)},
i(a){var s="GlobalObjectKey",r=B.c.rO(s,"<State<StatefulWidget>>")?B.c.a1(s,0,-8):s
return"["+r+" "+("<optimized out>#"+A.bL(this.a))+"]"}}
A.i.prototype={
bW(){var s=this.a
return s==null?"Widget":"Widget-"+s.i(0)},
k(a,b){if(b==null)return!1
return this.O2(0,b)},
gv(a){return A.L.prototype.gv.call(this,this)}}
A.b8.prototype={
bI(a){return new A.K3(this,B.a6)}}
A.ad.prototype={
bI(a){return A.aw2(this)}}
A.Q3.prototype={
F(){return"_StateLifecycle."+this.b}}
A.an.prototype={
aA(){},
aW(a){},
eK(){},
aw(a){a.$0()
this.c.fM()},
de(){},
c2(){},
m(){},
b4(){}}
A.aT.prototype={}
A.dt.prototype={
bI(a){return new A.m7(this,B.a6,A.n(this).h("m7<dt.T>"))}}
A.bd.prototype={
bI(a){return A.atA(this)}}
A.ay.prototype={
aG(a,b){},
oe(a){}}
A.Fa.prototype={
bI(a){return new A.F9(this,B.a6)}}
A.aZ.prototype={
bI(a){return A.avW(this)}}
A.en.prototype={
bI(a){return A.auk(this)}}
A.n3.prototype={
F(){return"_ElementLifecycle."+this.b}}
A.N6.prototype={
GH(a){a.aU(new A.ab1(this,a))
a.pk()},
Zf(){var s,r,q,p=this
p.a=!0
r=p.b
q=A.aA(r,!0,A.n(r).c)
B.b.dm(q,A.afu())
s=q
r.X(0)
try{r=s
new A.cL(r,A.aU(r).h("cL<1>")).Z(0,p.gZd())}finally{p.a=!1}},
D(a,b){if(b.w===B.cd){b.de()
b.aU(A.afv())}this.b.D(0,b)}}
A.ab1.prototype={
$1(a){this.a.GH(a)},
$S:6}
A.Ty.prototype={
Bq(a){var s=this
if(a.at){s.e=!0
return}if(!s.d&&s.a!=null){s.d=!0
s.a.$0()}s.c.push(a)
a.at=!0},
K_(a){try{a.$0()}finally{}},
rd(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=b==null
if(f&&h.c.length===0)return
try{h.d=!0
if(!f){g.a=null
h.e=!1
try{b.$0()}finally{}}f=h.c
B.b.dm(f,A.afu())
h.e=!1
g.b=f.length
g.c=0
for(n=0;n<g.b;){s=f[n]
r=!1
if(r){n=s.f
n.toString
m=n instanceof A.bY?A.d_(n):null
A.ahV(A.aD(m==null?A.aU(n):m).i(0),null,null)}try{s.KC()}catch(l){q=A.ag(l)
p=A.aB(l)
n=A.bk("while rebuilding dirty elements")
k=$.fA()
if(k!=null)k.$1(new A.bz(q,p,"widgets library",n,new A.Tz(g,h,s),!1))}if(r)A.ahU()
n=++g.c
k=g.b
j=f.length
if(k>=j){k=h.e
k.toString}else k=!0
if(k){if(!!f.immutable$list)A.X(A.N("sort"))
n=j-1
if(n-0<=32)A.JW(f,0,n,A.afu())
else A.JV(f,0,n,A.afu())
n=h.e=!1
g.b=f.length
while(!0){k=g.c
if(!(k>0?f[k-1].as:n))break
g.c=k-1}n=k}}}finally{for(f=h.c,n=f.length,i=0;i<n;++i){o=f[i]
o.at=!1}B.b.X(f)
h.d=!1
h.e=null}},
a_A(a){return this.rd(a,null)},
a1O(){var s,r,q
try{this.K_(this.b.gZe())}catch(q){s=A.ag(q)
r=A.aB(q)
A.aiF(A.E2("while finalizing the widget tree"),s,r,null)}finally{}},
a4Y(a,b){try{a.b=b
a.eK()}finally{}}}
A.Tz.prototype={
$0(){var s=null,r=A.a([],t.F),q=this.a,p=q.c,o=this.b.c.length,n="The element being rebuilt at the time was index "+p
q=""+q.b
if(p<o)J.l7(r,A.hp(n+" of "+q,this.c,!0,B.aP,s,!1,s,s,B.ar,s,!1,!0,!0,B.b0,s,t.h))
else J.l7(r,A.XI(n+" of "+q+", but _dirtyElements only had "+o+" entries. This suggests some confusion in the framework internals."))
return r},
$S:16}
A.uT.prototype={
xI(){var s=this.a
this.c=new A.ac9(this,s==null?null:s.c)}}
A.ac9.prototype={
cS(a){var s=this.a.Kg(a)
if(s)return
s=this.b
if(s!=null)s.cS(a)}}
A.aW.prototype={
Qv(a){},
k(a,b){if(b==null)return!1
return this===b},
eK(){var s=this
if(A.ank(s.b,s.f)){s.fM()
s.b=null}s.aU(new A.X7(s))
s.b=null},
ga9(){var s,r
for(s=this;s!=null;){r={}
if(s.w===B.Cj)break
else if(s instanceof A.bx)return s.ga9()
else{r.a=null
s.aU(new A.X8(r))
s=r.a}}return null},
a1g(a){var s=null
return A.hp(a,this,!0,B.aP,s,!1,s,s,B.ar,s,!1,!0,!0,B.b0,s,t.h)},
aU(a){},
dD(a,b,c){var s,r,q=this
if(b==null){if(a!=null)q.y9(a)
return null}if(a!=null){s=a.f.k(0,b)
if(s){if(!J.f(a.d,c))q.Ln(a,c)
s=a}else{s=a.f
s.toString
if(A.C(s)===A.C(b)&&J.f(s.a,b.a)){if(!J.f(a.d,c))q.Ln(a,c)
a.ba(0,b)
s=a}else{q.y9(a)
r=q.tg(b,c)
s=r}}}else{r=q.tg(b,c)
s=r}return s},
f8(a,b){var s,r,q,p=this
p.a=a
p.d=b
p.w=B.cd
s=a!=null
if(s){r=a.e
r===$&&A.b();++r}else r=1
p.e=r
if(s)p.r=a.r
q=p.f.a
if(q instanceof A.ei)p.r.z.l(0,q,p)
p.xe()
p.xI()},
ba(a,b){this.f=b},
Ln(a,b){new A.X9(b).$1(a)},
xj(a){this.d=a},
GR(a){var s=a+1,r=this.e
r===$&&A.b()
if(r<s){this.e=s
this.aU(new A.X4(s))}},
o8(){this.aU(new A.X6())
this.d=null},
r7(a){this.aU(new A.X5(a))
this.d=a},
Y0(a,b){var s,r,q=$.ak.I$.z.j(0,a)
if(q==null)return null
s=q.f
s.toString
if(!(A.C(s)===A.C(b)&&J.f(s.a,b.a)))return null
r=q.a
if(r!=null){r.j7(q)
r.y9(q)}this.r.b.b.A(0,q)
return q},
tg(a,b){var s,r,q,p,o,n,m=this,l=!1
if(l)A.ahV(A.C(a).i(0),null,null)
try{s=a.a
if(s instanceof A.ei){r=m.Y0(s,a)
if(r!=null){o=r
o.a=m
o.toString
n=m.e
n===$&&A.b()
o.GR(n)
o.c2()
o.aU(A.aoj())
o.r7(b)
q=m.dD(r,a,b)
o=q
o.toString
return o}}p=a.bI(0)
p.f8(m,b)
return p}finally{if(l)A.ahU()}},
y9(a){a.a=null
a.o8()
this.r.b.D(0,a)},
j7(a){},
c2(){var s=this,r=s.z,q=r==null,p=!q&&r.a!==0||s.Q
s.w=B.cd
if(!q)r.X(0)
s.Q=!1
s.xe()
s.xI()
if(s.as)s.r.Bq(s)
if(p)s.b4()},
de(){var s,r,q=this,p=q.z
if(p!=null&&p.a!==0)for(p=new A.kG(p,p.nb()),s=A.n(p).c;p.t();){r=p.d;(r==null?s.a(r):r).ak.A(0,q)}q.y=null
q.w=B.a_D},
pk(){var s=this,r=s.f,q=r==null?null:r.a
if(q instanceof A.ei){r=s.r.z
if(J.f(r.j(0,q),s))r.A(0,q)}s.z=s.f=null
s.w=B.Cj},
gcE(a){var s,r=this.ga9()
if(r instanceof A.E){s=r.k3
s.toString
return s}return null},
ye(a,b){var s=this.z;(s==null?this.z=A.cF(t.tx):s).D(0,a)
a.Lj(this,b)
s=a.f
s.toString
return t.sg.a(s)},
a4(a){var s=this.y,r=s==null?null:s.j(0,A.aD(a))
if(r!=null)return a.a(this.ye(r,null))
this.Q=!0
return null},
jz(a){var s=this.y
return s==null?null:s.j(0,A.aD(a))},
xI(){var s=this.a
this.c=s==null?null:s.c},
xe(){var s=this.a
this.y=s==null?null:s.y},
IS(a){var s,r,q,p=this.a
while(!0){s=p==null
if(!s){r=p.f
r.toString
q=r instanceof A.bY?A.d_(r):null
r=A.aD(q==null?A.aU(r):q)!==A.aD(a)}else r=!1
if(!r)break
p=p.a}if(s)s=null
else{s=p.f
s.toString}return a.h("0?").a(s)},
km(a){var s,r,q=this.a
for(;s=q==null,!s;){if(q instanceof A.fn){r=q.ok
r.toString
r=a.b(r)}else r=!1
if(r)break
q=q.a}t.Ci.a(q)
if(s)s=null
else{s=q.ok
s.toString}return a.h("0?").a(s)},
rY(a){var s=this.a
for(;s!=null;){if(s instanceof A.bx&&a.b(s.ga9()))return a.a(s.ga9())
s=s.a}return null},
AS(a){var s=this.a
while(!0){if(!(s!=null&&a.$1(s)))break
s=s.a}},
b4(){this.fM()},
cS(a){var s=this.c
if(s!=null)s.cS(a)},
bW(){var s=this.f
s=s==null?null:s.bW()
return s==null?"<optimized out>#"+A.bL(this)+"(DEFUNCT)":s},
fM(){var s=this
if(s.w!==B.cd)return
if(s.as)return
s.as=!0
s.r.Bq(s)},
tV(a){var s
if(this.w===B.cd)s=!this.as&&!a
else s=!0
if(s)return
this.hC()},
KC(){return this.tV(!1)},
hC(){this.as=!1},
$iaf:1}
A.X7.prototype={
$1(a){a.b=this.a.b
a.eK()},
$S:6}
A.X8.prototype={
$1(a){this.a.a=a},
$S:6}
A.X9.prototype={
$1(a){a.xj(this.a)
if(!(a instanceof A.bx))a.aU(this)},
$S:6}
A.X4.prototype={
$1(a){a.GR(this.a)},
$S:6}
A.X6.prototype={
$1(a){a.o8()},
$S:6}
A.X5.prototype={
$1(a){a.r7(this.a)},
$S:6}
A.E3.prototype={
aD(a){var s=this.d,r=new A.IJ(s,A.aq())
r.aE()
r.QH(s)
return r}}
A.rC.prototype={
f8(a,b){this.C5(a,b)
this.vM()},
vM(){this.KC()},
hC(){var s,r,q,p,o,n,m=this,l=null
try{l=m.aP()
m.f.toString}catch(o){s=A.ag(o)
r=A.aB(o)
n=A.XJ(A.aiF(A.bk("building "+m.i(0)),s,r,new A.Uy(m)))
l=n}finally{m.uJ()}try{m.ay=m.dD(m.ay,l,m.d)}catch(o){q=A.ag(o)
p=A.aB(o)
n=A.XJ(A.aiF(A.bk("building "+m.i(0)),q,p,new A.Uz(m)))
l=n
m.ay=m.dD(null,l,m.d)}},
aU(a){var s=this.ay
if(s!=null)a.$1(s)},
j7(a){this.ay=null
this.kV(a)}}
A.Uy.prototype={
$0(){var s=A.a([],t.F)
return s},
$S:16}
A.Uz.prototype={
$0(){var s=A.a([],t.F)
return s},
$S:16}
A.K3.prototype={
aP(){var s=this.f
s.toString
return t.yB.a(s).L(this)},
ba(a,b){this.pP(0,b)
this.tV(!0)}}
A.fn.prototype={
aP(){return this.ok.L(this)},
eK(){var s=this
if(A.ank(s.b,s.f))s.ok.eK()
s.Nl()},
vM(){this.ok.aA()
this.ok.b4()
this.N6()},
hC(){var s=this
if(s.p1){s.ok.b4()
s.p1=!1}s.N7()},
ba(a,b){var s,r,q,p=this
p.pP(0,b)
s=p.ok
r=s.a
r.toString
q=p.f
q.toString
s.a=t.aw.a(q)
s.aW(r)
p.tV(!0)},
c2(){this.Nj()
this.ok.c2()
this.fM()},
de(){this.ok.de()
this.C2()},
pk(){var s=this
s.uK()
s.ok.m()
s.ok=s.ok.c=null},
ye(a,b){return this.C3(a,b)},
b4(){this.Nk()
this.p1=!0}}
A.vp.prototype={
aP(){var s=this.f
s.toString
return t.im.a(s).b},
ba(a,b){var s=this,r=s.f
r.toString
t.im.a(r)
s.pP(0,b)
s.AP(r)
s.tV(!0)},
AP(a){this.mj(a)}}
A.m7.prototype={
D4(a){this.aU(new A.a1p(a))},
mj(a){var s=this.f
s.toString
this.D4(this.$ti.h("dt<1>").a(s))}}
A.a1p.prototype={
$1(a){if(a instanceof A.bx)this.a.nM(a.ga9())
else a.aU(this)},
$S:6}
A.f3.prototype={
xe(){var s=this,r=s.a,q=r==null?null:r.y
if(q==null)q=B.Td
r=s.f
r.toString
s.y=q.a4P(0,A.C(r),s)},
Bv(a,b){this.ak.l(0,a,b)},
Lj(a,b){this.Bv(a,null)},
Kb(a,b){b.b4()},
AP(a){var s=this.f
s.toString
if(t.sg.a(s).bX(a))this.Oh(a)},
mj(a){var s,r,q
for(s=this.ak,s=new A.xK(s,s.vr()),r=A.n(s).c;s.t();){q=s.d
this.Kb(a,q==null?r.a(q):q)}}}
A.bx.prototype={
ga9(){var s=this.ay
s.toString
return s},
SY(){var s=this.a
while(!0){if(!(s!=null&&!(s instanceof A.bx)))break
s=s.a}return t.bI.a(s)},
SX(){var s,r={},q=r.a=this.a
r.b=null
while(!0){if(!(q!=null&&!(q instanceof A.bx)))break
if(q instanceof A.m7){r.b=q
break}s=q.a
r.a=s
q=s}return r.b},
f8(a,b){var s,r=this
r.C5(a,b)
s=r.f
s.toString
r.ay=t.xL.a(s).aD(r)
r.r7(b)
r.uJ()},
ba(a,b){this.pP(0,b)
this.Fp()},
hC(){this.Fp()},
Fp(){var s=this,r=s.f
r.toString
t.xL.a(r).aG(s,s.ga9())
s.uJ()},
a5T(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=new A.a2G(a4),g=new A.a2H(i),f=a3.length,e=f-1,d=a2.length,c=d-1,b=d===f?a2:A.b3(f,$.ajc(),!1,t.h),a=i,a0=0,a1=0
while(!0){if(!(a1<=c&&a0<=e))break
s=h.$1(a2[a1])
r=a3[a0]
if(s!=null){f=s.f
f.toString
q=f instanceof A.bY?A.d_(f):i
d=A.aD(q==null?A.aU(f):q)
q=r instanceof A.bY?A.d_(r):i
f=!(d===A.aD(q==null?A.aU(r):q)&&J.f(f.a,r.a))}else f=!0
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
q=f instanceof A.bY?A.d_(f):i
d=A.aD(q==null?A.aU(f):q)
q=r instanceof A.bY?A.d_(r):i
f=!(d===A.aD(q==null?A.aU(r):q)&&J.f(f.a,r.a))}else f=!0
if(f)break;--p;--e}if(o){n=A.z(t.qI,t.h)
for(;a1<=p;){s=h.$1(a2[a1])
if(s!=null){f=s.f.a
if(f!=null)n.l(0,f,s)
else{s.a=null
s.o8()
f=j.r.b
if(s.w===B.cd){s.de()
s.aU(A.afv())}f.b.D(0,s)}}++a1}o=!0}else n=i
for(;a0<=e;a=f){r=a3[a0]
if(o){m=r.a
if(m!=null){s=n.j(0,m)
if(s!=null){f=s.f
f.toString
q=f instanceof A.bY?A.d_(f):i
d=A.aD(q==null?A.aU(f):q)
q=r instanceof A.bY?A.d_(r):i
if(d===A.aD(q==null?A.aU(r):q)&&J.f(f.a,m))n.A(0,m)
else s=i}}else s=i}else s=i
f=j.dD(s,r,g.$2(a0,a))
f.toString
b[a0]=f;++a0}e=a3.length-1
while(!0){if(!(a1<=c&&a0<=e))break
f=j.dD(a2[a1],a3[a0],g.$2(a0,a))
f.toString
b[a0]=f;++a0;++a1
a=f}if(o&&n.a!==0)for(f=n.gb0(n),f=new A.e1(J.av(f.a),f.b),d=A.n(f).z[1];f.t();){l=f.a
if(l==null)l=d.a(l)
if(!a4.C(0,l)){l.a=null
l.o8()
k=j.r.b
if(l.w===B.cd){l.de()
l.aU(A.afv())}k.b.D(0,l)}}return b},
de(){this.C2()},
pk(){var s=this,r=s.f
r.toString
t.xL.a(r)
s.uK()
r.oe(s.ga9())
s.ay.m()
s.ay=null},
xj(a){var s,r=this,q=r.d
r.Ni(a)
s=r.CW
s.toString
s.jh(r.ga9(),q,r.d)},
r7(a){var s,r,q=this
q.d=a
s=q.CW=q.SY()
if(s!=null)s.je(q.ga9(),a)
r=q.SX()
if(r!=null){s=r.f
s.toString
t.yL.a(s).nM(q.ga9())}},
o8(){var s=this,r=s.CW
if(r!=null){r.js(s.ga9(),s.d)
s.CW=null}s.d=null},
je(a,b){},
jh(a,b,c){},
js(a,b){}}
A.a2G.prototype={
$1(a){var s=this.a.C(0,a)
return s?null:a},
$S:291}
A.a2H.prototype={
$2(a,b){return new A.ol(b,a,t.wx)},
$S:292}
A.vN.prototype={
f8(a,b){this.uS(a,b)}}
A.F9.prototype={
j7(a){this.kV(a)},
je(a,b){},
jh(a,b,c){},
js(a,b){}}
A.wj.prototype={
aU(a){var s=this.p1
if(s!=null)a.$1(s)},
j7(a){this.p1=null
this.kV(a)},
f8(a,b){var s,r,q=this
q.uS(a,b)
s=q.p1
r=q.f
r.toString
q.p1=q.dD(s,t.Dp.a(r).c,null)},
ba(a,b){var s,r,q=this
q.mX(0,b)
s=q.p1
r=q.f
r.toString
q.p1=q.dD(s,t.Dp.a(r).c,null)},
je(a,b){var s=this.ay
s.toString
t.fB.a(s).saN(a)},
jh(a,b,c){},
js(a,b){var s=this.ay
s.toString
t.fB.a(s).saN(null)}}
A.eH.prototype={
ga9(){return t.gz.a(A.bx.prototype.ga9.call(this))},
gHH(a){var s=this.p1
s===$&&A.b()
return new A.aO(s,new A.a0A(this),A.ao(s).h("aO<1>"))},
je(a,b){var s=this.ga9(),r=b.a
s.z6(0,a,r==null?null:r.ga9())},
jh(a,b,c){var s=this.ga9(),r=c.a
s.ty(a,r==null?null:r.ga9())},
js(a,b){this.ga9().A(0,a)},
aU(a){var s,r,q,p,o=this.p1
o===$&&A.b()
s=o.length
r=this.p2
q=0
for(;q<s;++q){p=o[q]
if(!r.C(0,p))a.$1(p)}},
j7(a){this.p2.D(0,a)
this.kV(a)},
tg(a,b){return this.C4(a,b)},
f8(a,b){var s,r,q,p,o,n,m,l=this
l.uS(a,b)
s=l.f
s.toString
s=t.tk.a(s).c
r=s.length
q=A.b3(r,$.ajc(),!1,t.h)
for(p=t.wx,o=null,n=0;n<r;++n,o=m){m=l.C4(s[n],new A.ol(o,n,p))
q[n]=m}l.p1=q},
ba(a,b){var s,r,q,p=this
p.mX(0,b)
s=p.f
s.toString
t.tk.a(s)
r=p.p1
r===$&&A.b()
q=p.p2
p.p1=p.a5T(r,s.c,q)
q.X(0)}}
A.a0A.prototype={
$1(a){return!this.a.p2.C(0,a)},
$S:39}
A.ol.prototype={
k(a,b){if(b==null)return!1
if(J.T(b)!==A.C(this))return!1
return b instanceof A.ol&&this.b===b.b&&J.f(this.a,b.a)},
gv(a){return A.V(this.b,this.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.NZ.prototype={}
A.O1.prototype={
bI(a){return A.X(A.c0(null))}}
A.Q4.prototype={}
A.lF.prototype={}
A.ce.prototype={
HV(){return this.a.$0()},
Js(a){return this.b.$1(a)}}
A.Ew.prototype={
L(a){var s=this,r=A.z(t.n,t.ob),q=A.dq(a),p=q==null?null:q.ay
if(s.d==null)if(s.e==null)if(s.f==null)if(s.r==null)q=!1
else q=!0
else q=!0
else q=!0
else q=!0
if(q)r.l(0,B.Ca,new A.ce(new A.Yw(s),new A.Yx(s,p),t.g0))
if(s.ay==null)q=!1
else q=!0
if(q)r.l(0,B.Zs,new A.ce(new A.Yy(s),new A.YC(s,p),t.da))
if(s.cy==null)q=!1
else q=!0
if(q)r.l(0,B.C8,new A.ce(new A.YD(s),new A.YE(s,p),t.on))
if(s.rx!=null||s.ry!=null||s.to!=null||!1)r.l(0,B.lM,new A.ce(new A.YF(s),new A.YG(s,p),t.n_))
if(s.x2!=null||s.y1!=null||s.y2!=null||s.ao!=null)r.l(0,B.lL,new A.ce(new A.YH(s),new A.YI(s,p),t.ta))
if(s.aq!=null||s.ac!=null||s.aX!=null||!1)r.l(0,B.lJ,new A.ce(new A.YJ(s),new A.Yz(s,p),t.uX))
q=!1
if(q)r.l(0,B.Zv,new A.ce(new A.YA(s),new A.YB(s,p),t.p1))
return new A.j_(s.c,r,s.ar,s.ag,null,null)}}
A.Yw.prototype={
$0(){return A.awc(this.a,null)},
$S:293}
A.Yx.prototype={
$1(a){var s=this.a
a.y1=s.d
a.y2=s.e
a.ao=s.f
a.aq=s.r
a.f2=a.cd=a.bd=a.bk=a.aX=a.ac=a.ak=null
a.b=this.b},
$S:294}
A.Yy.prototype={
$0(){var s=t.S
return new A.fM(A.z(s,t.Aj),this.a,null,A.z(s,t.C))},
$S:295}
A.YC.prototype={
$1(a){a.e=null
a.f=this.a.ay
a.r=null
a.b=this.b},
$S:296}
A.YD.prototype={
$0(){return A.atX(this.a,null,null)},
$S:297}
A.YE.prototype={
$1(a){a.k3=a.k2=null
a.k4=this.a.cy
a.ak=a.aq=a.ao=a.y2=a.y1=a.xr=a.x2=a.x1=a.to=a.ry=a.rx=a.RG=a.R8=a.p4=a.p3=a.p2=a.p1=a.ok=null
a.b=this.b},
$S:298}
A.YF.prototype={
$0(){return A.amr(this.a,null)},
$S:111}
A.YG.prototype={
$1(a){var s
a.as=null
s=this.a
a.at=s.rx
a.ax=s.ry
a.ay=s.to
a.ch=null
a.Q=s.aY
a.b=this.b},
$S:131}
A.YH.prototype={
$0(){return A.ah7(this.a,null)},
$S:113}
A.YI.prototype={
$1(a){var s=this.a
a.as=s.x2
a.at=null
a.ax=s.y1
a.ay=s.y2
a.ch=s.ao
a.Q=s.aY
a.b=this.b},
$S:114}
A.YJ.prototype={
$0(){return A.auD(this.a,null)},
$S:303}
A.Yz.prototype={
$1(a){var s=this.a
a.as=s.aq
a.at=null
a.ax=s.ac
a.ay=s.aX
a.ch=null
a.Q=s.aY
a.b=this.b},
$S:304}
A.YA.prototype={
$0(){var s=t.S,r=A.cF(s)
return new A.fP(B.lU,A.z(s,t.o),r,this.a,null,A.z(s,t.C))},
$S:305}
A.YB.prototype={
$1(a){a.ax=a.as=a.at=a.Q=null
a.b=this.b},
$S:306}
A.j_.prototype={
ai(){return new A.oQ(B.Sw,B.m)}}
A.oQ.prototype={
aA(){var s,r,q=this
q.aS()
s=q.a
r=s.r
q.e=r==null?new A.M6(q):r
q.x3(s.d)},
aW(a){var s,r=this
r.bi(a)
if(!(a.r==null&&r.a.r==null)){s=r.a.r
r.e=s==null?new A.M6(r):s}r.x3(r.a.d)},
a5f(a){if(this.a.f)return
t.qS.a(this.c.ga9()).sa5Y(a)},
m(){for(var s=this.d,s=J.av(s.gb0(s));s.t();)s.gG(s).m()
this.d=null
this.aM()},
x3(a){var s,r,q,p,o=this,n=o.d
n.toString
o.d=A.z(t.n,t.oi)
for(s=J.av(a.gbp(a));s.t();){r=s.gG(s)
q=o.d
q.toString
p=n.j(0,r)
q.l(0,r,p==null?a.j(0,r).HV():p)
q=a.j(0,r)
q.toString
r=o.d.j(0,r)
r.toString
q.Js(r)}for(s=J.av(n.gbp(n));s.t();){r=s.gG(s)
if(!o.d.T(0,r))n.j(0,r).m()}},
Tg(a){var s,r
for(s=this.d,s=J.av(s.gb0(s));s.t();){r=s.gG(s)
r.d.l(0,a.gbQ(),a.gc9(a))
if(r.f6(a))r.hc(a)
else r.oD(a)}},
UW(a){var s,r
for(s=this.d,s=J.av(s.gb0(s));s.t();){r=s.gG(s)
r.d.l(0,a.gbQ(),a.gc9(a))
if(r.a3y(a))r.xs(a)}},
Zz(a){this.e.xH(a)},
L(a){var s,r,q,p=this,o=null,n=p.a,m=n.e,l=m==null
if(l)s=n.c==null?B.cp:B.bV
else s=m
r=n.c
q=A.Ff(s,r,o,p.gTf(),p.gUV(),o,o)
if(!n.f){if(l)n=r==null?B.cp:B.bV
else n=m
q=new A.MT(n,p.gZy(),q,o)}return q}}
A.MT.prototype={
aD(a){var s=new A.j0(B.bV,null,A.aq())
s.aE()
s.saN(null)
s.B=this.e
this.f.$1(s)
return s},
aG(a,b){b.B=this.e
this.f.$1(b)}}
A.a4G.prototype={
i(a){return"SemanticsGestureDelegate()"}}
A.M6.prototype={
xH(a){var s=this,r=s.a.d
r.toString
a.sjl(s.TF(r))
a.skw(s.Tw(r))
a.sa4j(s.Tu(r))
a.sa4p(s.TG(r))},
TF(a){var s=t.f3.a(a.j(0,B.Ca))
if(s==null)return null
return new A.a9S(s)},
Tw(a){var s=t.yA.a(a.j(0,B.C8))
if(s==null)return null
return new A.a9R(s)},
Tu(a){var s=t.oq.a(a.j(0,B.lL)),r=t.rR.a(a.j(0,B.lJ)),q=s==null?null:new A.a9O(s),p=r==null?null:new A.a9P(r)
if(q==null&&p==null)return null
return new A.a9Q(q,p)},
TG(a){var s=t.iC.a(a.j(0,B.lM)),r=t.rR.a(a.j(0,B.lJ)),q=s==null?null:new A.a9T(s),p=r==null?null:new A.a9U(r)
if(q==null&&p==null)return null
return new A.a9V(q,p)}}
A.a9S.prototype={
$0(){var s=this.a,r=s.y1
if(r!=null)r.$1(new A.pv(B.k,B.k))
r=s.y2
if(r!=null)r.$1(new A.pw())
s=s.ao
if(s!=null)s.$0()},
$S:0}
A.a9R.prototype={
$0(){var s=this.a,r=s.ok
if(r!=null)r.$1(B.QT)
r=s.k4
if(r!=null)r.$0()
s=s.p3
if(s!=null)s.$1(B.QR)},
$S:0}
A.a9O.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.iz(B.k))
r=s.at
if(r!=null)r.$1(new A.ht(null,B.k,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fN(B.cc,0))},
$S:22}
A.a9P.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.iz(B.k))
r=s.at
if(r!=null)r.$1(new A.ht(null,B.k,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fN(B.cc,null))},
$S:22}
A.a9Q.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(a)
s=this.b
if(s!=null)s.$1(a)},
$S:22}
A.a9T.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.iz(B.k))
r=s.at
if(r!=null)r.$1(new A.ht(null,B.k,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fN(B.cc,0))},
$S:22}
A.a9U.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.iz(B.k))
r=s.at
if(r!=null)r.$1(new A.ht(null,B.k,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.fN(B.cc,null))},
$S:22}
A.a9V.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(a)
s=this.b
if(s!=null)s.$1(a)},
$S:22}
A.lM.prototype={
F(){return"HeroFlightDirection."+this.b}}
A.lK.prototype={
ai(){return new A.q9(new A.bw(null,t.J),B.m)}}
A.Zc.prototype={
$2(a,b){var s=a.f
s.toString
t.tV.a(s)
s=a.ok
s.toString
t.BJ.a(s)
if(!this.b||!1)this.a.l(0,b,s)
else s.IB()},
$S:309}
A.Zd.prototype={
$1(a){var s,r,q=this,p=a.f
p.toString
if(p instanceof A.lK){t.jw.a(a)
s=p.c
if(A.ahq(a)===q.a)q.b.$2(a,s)
else{r=A.a0p(a,t.X)
if(r!=null)p=r.gkp()
else p=!1
if(p)q.b.$2(a,s)}}a.aU(q)},
$S:6}
A.q9.prototype={
uB(a){var s,r=this
r.f=a
s=r.c.ga9()
s.toString
r.aw(new A.aaT(r,t.x.a(s)))},
uA(){return this.uB(!1)},
lO(a){var s=this
if(a||s.e==null)return
s.e=null
if(s.c!=null)s.aw(new A.aaS())},
IB(){return this.lO(!1)},
L(a){var s,r=this,q=null,p=r.e,o=p==null,n=!o
if(n)r.a.toString
if(n&&!r.f){o=p.a
return A.cu(q,p.b,o)}s=o?q:p.a
p=o?q:p.b
return A.cu(new A.uZ(n,new A.pC(o,new A.iL(r.a.e,r.d),q),q),p,s)}}
A.aaT.prototype={
$0(){var s=this.b.k3
s.toString
this.a.e=s},
$S:0}
A.aaS.prototype={
$0(){},
$S:0}
A.aaP.prototype={
gbG(a){var s,r=this
if(r.a===B.bT){s=r.e.fy
s.toString}else{s=r.d.fy
s.toString}return A.eg(B.cj,s,r.z?null:new A.tv(B.cj))},
o2(a,b){var s
this.r.a.toString
s=this.w.$2(a,b)
return s==null?new A.vw(a,b):s},
gJ4(){var s,r,q=this,p=q.Q
if(p===$){s=q.f.c
s.toString
r=A.amB(s,$.ak.I$.z.j(0,q.d.k2))
q.Q!==$&&A.bj()
q.Q=r
p=r}return p},
gu4(){var s,r,q=this,p=q.as
if(p===$){s=q.r.c
s.toString
r=A.amB(s,$.ak.I$.z.j(0,q.e.k2))
q.as!==$&&A.bj()
q.as=r
p=r}return p},
gkr(){var s,r,q=this,p=q.at
if(p===$){s=q.gu4()
if(s.gJJ(s))if(!q.z){s=q.gJ4()
s=s.gJJ(s)
r=s}else r=!0
else r=!1
q.at!==$&&A.bj()
p=q.at=r}return p},
i(a){var s,r,q=this,p=q.a.i(0),o=q.f,n=o.a.c.i(0),m=q.d.b.i(0),l=q.e.b.i(0)
o=o.i(0)
s=q.r.i(0)
r=q.gkr()?"":", INVALID"
return"_HeroFlightManifest("+p+" tag: "+n+" from route: "+m+" to route: "+l+" with hero: "+o+" to "+s+")"+r}}
A.jg.prototype={
Rs(a){var s,r,q,p,o=this,n=o.c
if(n==null){n=o.f
n===$&&A.b()
s=n.gbG(n)
r=o.f
q=r.f.c
q.toString
p=r.r.c
p.toString
p=o.c=n.x.$5(a,s,r.a,q,p)
n=p}s=o.e
s===$&&A.b()
return A.jz(s,new A.aaQ(o),n)},
Fo(a){var s,r=this,q=a===B.T
if(q||a===B.O){s=r.e
s===$&&A.b()
s.saJ(0,null)
r.r.mq(0)
r.r=null
s=r.f
s===$&&A.b()
s.f.lO(q)
r.f.r.lO(a===B.O)
r.a.$1(r)
r.e.H(0,r.gKl())}},
Em(a){var s=this,r=s.f
r===$&&A.b()
r=r.d.a
if((r==null?null:r.CW.a)!==!0){s.Fo(a)
return}if(s.x)return
r.toString
s.x=!0
r.CW.S(0,new A.aaR(s,r))},
a4o(){var s,r,q,p,o,n,m,l,k,j,i,h=this
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
q=A.cr(r.bw(0,t.av.a(s)),B.k)}else q=null
s=q!=null
if(s&&isFinite(q.a)&&isFinite(q.b)){p=h.b
p===$&&A.b()
p=p.b
if(!J.f(q,new A.v(p.a,p.b))){p=h.b
o=p.b
n=o.c
m=o.a
l=o.d
o=o.b
k=q.a
j=q.b
i=h.f
i===$&&A.b()
h.b=i.o2(p.a,new A.A(k,j,k+(n-m),j+(l-o)))}}else{p=h.d
if(p.gb1(p)===B.T){p=h.e
p===$&&A.b()
o=$.apS()
n=p.gn(p)
m=A.n(o).h("n0<aE.T>")
h.d=new A.b_(t.m.a(p),new A.n0(new A.ix(new A.iI(n,1,B.b_)),o,m),m.h("b_<aE.T>"))}}if(s)s=!(isFinite(q.a)&&isFinite(q.b))
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
A.aaQ.prototype={
$2(a,b){var s,r=null,q=this.a,p=q.b
p===$&&A.b()
s=q.e
s===$&&A.b()
s=p.ad(0,s.gn(s))
s.toString
p=q.f
p===$&&A.b()
p=p.c
return A.vm(p.b-s.d,new A.hz(!0,r,A.agY(b,q.d),r),r,r,s.a,p.a-s.c,s.b,r)},
$S:310}
A.aaR.prototype={
$0(){var s,r=this.a
r.x=!1
this.b.CW.H(0,this)
s=r.e
s===$&&A.b()
r.Fo(s.gb1(s))},
$S:0}
A.tI.prototype={
rA(a,b){this.qr(b,a,B.bT,!1)},
rz(a,b){var s=$.hf()
A.o7(this)
if(!s.a.get(this).CW.a)this.qr(a,b,B.bU,!1)},
rB(a,b){var s=a.gkp()
if(s)this.qr(b,a,B.bT,!1)},
Ii(a,b){this.qr(a,b,B.bU,!0)},
od(){var s,r,q,p=$.hf()
A.o7(this)
if(p.a.get(this).CW.a)return
p=this.b
p=p.gb0(p)
s=A.n(p).h("aO<r.E>")
r=A.aA(new A.aO(p,new A.Zb(),s),!1,s.h("r.E"))
for(p=r.length,q=0;q<p;++q)r[q].Em(B.O)},
qr(a,b,c,d){var s
if(b!=a&&b instanceof A.hN&&a instanceof A.hN){switch(c.a){case 1:s=a.fy
if(s.gn(s)===0)return
break
case 0:s=b.fy
if(s.gn(s)===1)return
break}if(d)if(c===B.bU){b.goS()
s=!0}else s=!1
else s=!1
if(s)this.Gm(a,b,c,d)
else{s=b.fy
b.stC(s.gn(s)===0)
$.ak.ax$.push(new A.Za(this,a,b,c,d))}}},
Gm(b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null
b4.stC(!1)
s=$.hf()
A.o7(b1)
s=s.a.get(b1)
r=s==null
if(r)q=b2
else{p=s.d
p===$&&A.b()
q=p.gbn()}if(r||q==null)return
o=s.c.ga9()
if(!(o instanceof A.E))return
n=$.ak.I$.z.j(0,b3.k2)
m=n!=null?A.aky(n,b6,s):B.zm
l=$.ak.I$.z.j(0,b4.k2)
k=l!=null?A.aky(l,b6,s):B.zm
for(s=m.gfD(m),s=s.ga8(s),r=b1.gSl(),p=b1.a,j=b1.b,i=t.Cf,h=b1.gUt(),g=t.A,f=t.Q,e=t.b,d=t.tY,c=t.a7,b=t.m,a=c.h("b_<aE.T>"),a0=t.sD;s.t();){a1=s.gG(s)
a2=a1.gdQ(a1)
a3=a1.gn(a1)
a4=k.j(0,a2)
a5=j.j(0,a2)
if(a4==null)a6=b2
else{a1=o.k3
a1.toString
a4.a.toString
a3.a.toString
a6=new A.aaP(b5,q,a1,b3,b4,a3,a4,p,r,b6,a5!=null)}if(a6!=null&&a6.gkr()){k.A(0,a2)
if(a5!=null){a1=a5.f
a1===$&&A.b()
a7=a1.a
if(a7===B.bT&&a6.a===B.bU){a1=a5.e
a1===$&&A.b()
a1.saJ(0,new A.eN(a6.gbG(a6),new A.bi(A.a([],g),f),0))
a1=a5.b
a1===$&&A.b()
a5.b=new A.vM(a1,a1.b,a1.a,a0)}else{a7=a7===B.bU&&a6.a===B.bT
a8=a5.e
if(a7){a8===$&&A.b()
a1=a6.gbG(a6)
a7=a5.f
a7=a7.gbG(a7)
a7=a7.gn(a7)
a8.saJ(0,new A.b_(b.a(a1),new A.aL(a7,1,c),a))
a1=a5.f
a7=a1.f
a8=a6.r
if(a7!==a8){a7.lO(!0)
a8.uA()
a1=a5.f
a7=a5.b
a7===$&&A.b()
a5.b=a1.o2(a7.b,a6.gu4())}else{a7=a5.b
a7===$&&A.b()
a5.b=a1.o2(a7.b,a7.a)}}else{a7=a5.b
a7===$&&A.b()
a8===$&&A.b()
a5.b=a1.o2(a7.ad(0,a8.gn(a8)),a6.gu4())
a5.c=null
a1=a6.a
a7=a5.e
if(a1===B.bU)a7.saJ(0,new A.eN(a6.gbG(a6),new A.bi(A.a([],g),f),0))
else a7.saJ(0,a6.gbG(a6))
a5.f.f.lO(!0)
a5.f.r.lO(!0)
a6.f.uB(a1===B.bT)
a6.r.uA()
a1=a5.r.f.gbn()
if(a1!=null)a1.EY()}}a5.f=a6}else{a1=new A.jg(h,B.d1)
a7=A.a([],g)
a8=new A.bi(a7,f)
a9=new A.vo(a8,new A.bi(A.a([],e),d),0)
a9.a=B.O
a9.b=0
a9.bo()
a8.b=!0
a7.push(a1.gTO())
a1.e=a9
a1.f=a6
switch(a6.a.a){case 1:a9.saJ(0,new A.eN(a6.gbG(a6),new A.bi(A.a([],g),f),0))
b0=!1
break
case 0:a9.saJ(0,a6.gbG(a6))
b0=!0
break
default:b0=b2}a7=a1.f
a1.b=a7.o2(a7.gJ4(),a1.f.gu4())
a1.f.f.uB(b0)
a1.f.r.uA()
a7=a1.f
a8=new A.mS(!1,$.bu())
a8.ac$=!0
a8=new A.fb(a1.gRr(),!1,a8,new A.bw(b2,i))
a1.r=a8
a7.b.z5(0,a8)
a8=a1.e
a8.bo()
a8=a8.aZ$
a8.b=!0
a8.a.push(a1.gKl())
j.l(0,a2,a1)}}else if(a5!=null)a5.w=!0}for(s=J.av(k.gb0(k));s.t();)s.gG(s).IB()},
Uu(a){var s=a.f
s===$&&A.b()
this.b.A(0,s.f.a.c)},
Sm(a,b,c,d,e){var s,r,q=e.f
q.toString
t.tV.a(q)
s=A.dq(e)
r=A.dq(d)
if(s==null||r==null)return q.e
return A.jz(b,new A.Z9(s,c,r.f,s.f,b,q),null)}}
A.Zb.prototype={
$1(a){var s=a.f
s===$&&A.b()
if(s.y)if(s.a===B.bU){s=a.e
s===$&&A.b()
s=s.gb1(s)===B.O}else s=!1
else s=!1
return s},
$S:313}
A.Za.prototype={
$1(a){var s=this
s.a.Gm(s.b,s.c,s.d,s.e)},
$S:2}
A.Z9.prototype={
$2(a,b){var s=this,r=s.c,q=s.d,p=s.e
r=s.b===B.bT?new A.ta(r,q).ad(0,p.gn(p)):new A.ta(q,r).ad(0,p.gn(p))
return new A.f5(s.a.I0(r),s.f.e,null)},
$S:314}
A.oe.prototype={
L(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.a4(t.I)
f.toString
s=f.w
r=A.akC(a)
q=r.a
p=r.b
o=r.c
n=r.d
m=r.e
f=this.c
if(f==null)return A.dO(g,A.cu(g,q,q),!1,g,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)
l=r.r
k=l==null?g:A.H(l,0,1)
if(k==null)k=1
l=r.f
l.toString
if(k!==1)j=A.b6(B.d.b2(255*((l.gn(l)>>>24&255)/255*k)),l.gn(l)>>>16&255,l.gn(l)>>>8&255,l.gn(l)&255)
else j=l
l=A.dM(f.a)
i=A.a([],t.BV)
if(p!=null)i.push(new A.jQ("FILL",p))
if(o!=null)i.push(new A.jQ("wght",o))
if(n!=null)i.push(new A.jQ("GRAD",n))
if(m!=null)i.push(new A.jQ("opsz",m))
h=A.alE(g,g,B.VP,g,g,!0,g,A.a83(g,A.aQ(g,g,j,g,g,g,g,g,"MaterialIcons",g,g,q,g,i,g,g,g,!1,g,g,g,g,g,r.w,g,g),l),B.bJ,s,g,1,B.aX)
if(f.d)switch(s.a){case 0:f=new A.bg(new Float64Array(16))
f.d2()
f.hJ(0,-1,1,1)
h=A.amg(B.Y,h,f,!1)
break
case 1:break}return A.dO(g,new A.th(!0,A.cu(A.nK(h,g,g),q,q),g),!1,g,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)}}
A.lQ.prototype={
k(a,b){var s
if(b==null)return!1
if(J.T(b)!==A.C(this))return!1
if(b instanceof A.lQ)if(b.a===this.a)s=b.d===this.d
else s=!1
else s=!1
return s},
gv(a){return A.V(this.a,"MaterialIcons",null,this.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
i(a){return"IconData(U+"+B.c.jn(B.f.ip(this.a,16).toUpperCase(),5,"0")+")"}}
A.lR.prototype={
bX(a){return!this.w.k(0,a.w)}}
A.Zw.prototype={
$1(a){return A.aha(this.c,A.akB(a).c1(this.b),this.a)},
$S:315}
A.cz.prototype={
o1(a,b,c,d,e,f,g,h){var s,r=this,q=g==null?r.a:g,p=b==null?r.b:b,o=h==null?r.c:h,n=c==null?r.d:c,m=e==null?r.e:e,l=a==null?r.f:a
if(d==null){s=r.r
s=s==null?null:A.H(s,0,1)}else s=d
return new A.cz(q,p,o,n,m,l,s,f==null?r.w:f)},
hk(a){return this.o1(a,null,null,null,null,null,null,null)},
c1(a){var s=a.r
s=s==null?null:A.H(s,0,1)
return this.o1(a.f,a.b,a.d,s,a.e,a.w,a.a,a.c)},
W(a){return this},
k(a,b){var s,r,q=this
if(b==null)return!1
if(J.T(b)!==A.C(q))return!1
if(b instanceof A.cz)if(b.a==q.a)if(b.b==q.b)if(b.c==q.c)if(b.d==q.d)if(b.e==q.e)if(J.f(b.f,q.f)){s=b.r
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
gv(a){var s,r=this,q=r.r
q=q==null?null:A.H(q,0,1)
s=r.w
s=s==null?null:A.d8(s)
return A.V(r.a,r.b,r.c,r.d,r.e,r.f,q,s,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.N2.prototype={}
A.of.prototype={
ai(){return new A.xL(B.m)}}
A.xL.prototype={
aA(){var s=this
s.aS()
$.ak.ag$.push(s)
s.z=new A.Dj(s)},
m(){var s,r=this
B.b.A($.ak.ag$,r)
r.YW()
s=r.at
if(s!=null)s.m()
s=r.z
s===$&&A.b()
s.a=null
r.wI(null)
r.aM()},
b4(){var s,r=this
r.Zp()
r.wM()
s=r.c
s.toString
if(A.amd(s))r.W_()
else r.Gp(!0)
r.cu()},
aW(a){var s,r,q=this
q.bi(a)
if(q.r&&q.a.e==null!==(a.e==null)){s=q.nh()
r=q.d
r.toString
r.S(0,q.Ea(!0))
q.d.H(0,s)}if(!q.a.c.k(0,a.c))q.wM()},
eK(){this.wM()
this.P7()},
Zp(){var s=this.c
s.toString
s=A.dq(s)
s=s==null?null:s.z
if(s==null){s=$.a4v.dL$
s===$&&A.b()
s=(s.a&2)!==0}this.w=s},
wM(){var s,r,q,p,o=this,n=o.z
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
o.ZB(new A.vW(n,r,t.rZ).W(A.aiL(q,s)))},
Ea(a){var s,r=this,q=r.ax
if(q==null||a){r.as=r.Q=null
q=r.a
s=q.e==null?null:r.gUy()
q=q.f!=null||!1?new A.aaW(r):null
q=r.ax=new A.e0(r.gUA(),s,q)}q.toString
return q},
nh(){return this.Ea(!1)},
UB(a,b){this.aw(new A.aaY(this,a,b))},
Uz(a){this.aw(new A.aaX(this,a))},
wI(a){var s=this.e
$.bO.ax$.push(new A.aaZ(s))
this.e=a},
ZB(a){var s,r,q=this,p=q.d
if(p==null)s=null
else{s=p.a
if(s==null)s=p}r=a.a
if(s===(r==null?a:r))return
if(q.r){p.toString
p.H(0,q.nh())}q.a.toString
q.aw(new A.ab_(q))
q.aw(new A.ab0(q))
q.d=a
if(q.r)a.S(0,q.nh())},
W_(){var s,r=this
if(r.r)return
s=r.d
s.toString
s.S(0,r.nh())
s=r.at
if(s!=null)s.m()
r.at=null
r.r=!0},
Gp(a){var s,r=this
if(!r.r)return
if(a)if(r.at==null){s=r.d
s=(s==null?null:s.a)!=null}else s=!1
else s=!1
if(s)r.at=r.d.a.mg()
s=r.d
s.toString
s.H(0,r.nh())
r.r=!1},
YW(){return this.Gp(!1)},
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
h=new A.Is(r,q,o,n,e,s,f,p.z,m,l,k,j,f,!1,i,!1,f)
h=A.dO(f,h,!1,f,!1,f,f,f,!0,"",f,f,f,f,f,f,f,f,f,f)
e=p.d
if(e!=null)h=e.$4(a,h,g.x,g.y)
e=g.a.e
return e!=null?e.$3(a,h,g.f):h}}
A.aaW.prototype={
$2(a,b){var s=this.a
s.aw(new A.aaV(s,a,b))},
$S:316}
A.aaV.prototype={
$0(){var s=this.a
s.Q=this.b
s.as=this.c},
$S:0}
A.aaY.prototype={
$0(){var s,r=this.a
r.wI(this.b)
r.as=r.Q=r.f=null
s=r.x
r.x=s==null?0:s+1
r.y=B.nL.M9(r.y,this.c)},
$S:0}
A.aaX.prototype={
$0(){var s=this.a
s.f=this.b
s.as=s.Q=null},
$S:0}
A.aaZ.prototype={
$1(a){var s=this.a
if(s!=null)s.a.m()
return null},
$S:2}
A.ab_.prototype={
$0(){this.a.wI(null)},
$S:0}
A.ab0.prototype={
$0(){var s=this.a
s.x=s.f=null
s.y=!1},
$S:0}
A.Ro.prototype={}
A.D6.prototype={
dB(a){var s=A.UV(this.a,this.b,a)
s.toString
return s}}
A.ta.prototype={
dB(a){var s=A.agU(this.a,this.b,a)
s.toString
return s}}
A.lg.prototype={
dB(a){return A.nC(this.a,this.b,a)}}
A.mK.prototype={
dB(a){var s=A.bb(this.a,this.b,a)
s.toString
return s}}
A.ET.prototype={}
A.oj.prototype={
gjO(){var s,r,q=this,p=q.d
if(p===$){s=q.a.d
r=A.dW(null,s,null,null,q)
q.d!==$&&A.bj()
q.d=r
p=r}return p},
gfl(){var s,r=this,q=r.e
if(q===$){s=r.gjO()
q=r.e=A.eg(r.a.c,s,null)}return q},
aA(){var s,r=this
r.aS()
s=r.gjO()
s.bo()
s=s.aT$
s.b=!0
s.a.push(new A.ZW(r))
r.DA()},
aW(a){var s,r=this
r.bi(a)
if(r.a.c!==a.c){r.gfl().m()
s=r.gjO()
r.e=A.eg(r.a.c,s,null)}r.gjO().e=r.a.d
if(r.DA()){r.oz(new A.ZV(r))
s=r.gjO()
s.sn(0,0)
s.cn(0)}},
m(){this.gfl().m()
this.gjO().m()
this.Pk()},
ZE(a,b){var s
if(a==null)return
s=this.gfl()
a.sxM(a.ad(0,s.gn(s)))
a.slN(0,b)},
DA(){var s={}
s.a=!1
this.oz(new A.ZU(s,this))
return s.a}}
A.ZW.prototype={
$1(a){switch(a.a){case 3:this.a.a.toString
break
case 0:case 1:case 2:break}},
$S:3}
A.ZV.prototype={
$3(a,b,c){this.a.ZE(a,b)
return a},
$S:115}
A.ZU.prototype={
$3(a,b,c){var s
if(b!=null){if(a==null)a=c.$1(b)
s=a.b
if(!J.f(b,s==null?a.a:s))this.a.a=!0
else if(a.b==null)a.slN(0,a.a)}else a=null
return a},
$S:115}
A.ns.prototype={
aA(){this.Nx()
var s=this.gjO()
s.bo()
s=s.aZ$
s.b=!0
s.a.push(this.gTM())},
TN(){this.aw(new A.SS())}}
A.SS.prototype={
$0(){},
$S:0}
A.qW.prototype={
ai(){return new A.L5(null,null,B.m)}}
A.L5.prototype={
oz(a){this.CW=t.uh.a(a.$3(this.CW,this.a.w,new A.a8S()))},
L(a){var s,r=this.CW
r.toString
s=this.gfl()
s=r.ad(0,s.gn(s))
return A.rV(this.a.r,null,B.cT,!0,s,null,null,B.aX)}}
A.a8S.prototype={
$1(a){return new A.mK(t.F1.a(a),null)},
$S:318}
A.qX.prototype={
ai(){return new A.L6(null,null,B.m)}}
A.L6.prototype={
oz(a){var s=this,r=s.CW
s.a.toString
s.CW=t.iH.a(a.$3(r,B.aF,new A.a8T()))
s.cx=t.nr.a(a.$3(s.cx,s.a.z,new A.a8U()))
r=t.mo
s.cy=r.a(a.$3(s.cy,s.a.Q,new A.a8V()))
s.db=r.a(a.$3(s.db,s.a.at,new A.a8W()))},
L(a){var s,r,q,p,o,n=this,m=n.a,l=m.w
m=m.x
s=n.CW
s.toString
r=n.gfl()
r=s.ad(0,r.gn(r))
s=n.cx
s.toString
q=n.gfl()
q=s.ad(0,q.gn(q))
s=n.a.Q
p=n.db
p.toString
o=n.gfl()
o=p.ad(0,o.gn(o))
o.toString
return new A.I7(l,m,r,q,s,o,n.a.r,null)}}
A.a8T.prototype={
$1(a){return new A.lg(t.ak.a(a),null)},
$S:319}
A.a8U.prototype={
$1(a){return new A.aL(A.Sa(a),null,t.a7)},
$S:77}
A.a8V.prototype={
$1(a){return new A.hn(t.iO.a(a),null)},
$S:44}
A.a8W.prototype={
$1(a){return new A.hn(t.iO.a(a),null)},
$S:44}
A.qc.prototype={
m(){var s=this,r=s.dg$
if(r!=null)r.H(0,s.glw())
s.dg$=null
s.aM()},
c2(){this.dn()
this.cF()
this.lx()}}
A.jX.prototype={
bI(a){var s=A.fQ(t.h,t.X)
return new A.tP(s,this,B.a6,A.n(this).h("tP<jX.T>"))}}
A.tP.prototype={
Lj(a,b){var s=this.ak,r=this.$ti,q=r.h("c7<1>?").a(s.j(0,a))
if(q!=null&&q.gR(q))return
s.l(0,a,A.cF(r.c))},
Kb(a,b){var s,r=this.$ti,q=r.h("c7<1>?").a(this.ak.j(0,b))
if(q==null)return
if(!q.gR(q)){s=this.f
s.toString
s=r.h("jX<1>").a(s).a5V(a,q)
r=s}else r=!0
if(r)b.b4()}}
A.hA.prototype={
bX(a){return a.f!==this.f},
bI(a){var s=new A.qd(A.fQ(t.h,t.X),this,B.a6,A.n(this).h("qd<hA.T>"))
this.f.S(0,s.gwb())
return s}}
A.qd.prototype={
ba(a,b){var s,r,q=this,p=q.f
p.toString
s=q.$ti.h("hA<1>").a(p).f
r=b.f
if(s!==r){p=q.gwb()
s.H(0,p)
r.S(0,p)}q.Og(0,b)},
aP(){var s,r=this
if(r.bP){s=r.f
s.toString
r.C9(r.$ti.h("hA<1>").a(s))
r.bP=!1}return r.Of()},
Vx(){this.bP=!0
this.fM()},
mj(a){this.C9(a)
this.bP=!1},
pk(){var s=this,r=s.f
r.toString
s.$ti.h("hA<1>").a(r).f.H(0,s.gwb())
s.uK()}}
A.EU.prototype={}
A.qn.prototype={}
A.af_.prototype={
$1(a){return this.a.a=a},
$S:52}
A.af0.prototype={
$1(a){return a.b},
$S:320}
A.af1.prototype={
$1(a){var s,r,q,p
for(s=J.aH(a),r=this.a,q=this.b,p=0;p<s.gp(a);++p)q.l(0,A.aD(A.n(r.a[p].a).h("cV.T")),s.j(a,p))
return q},
$S:321}
A.cV.prototype={
i(a){return"LocalizationsDelegate["+A.aD(A.n(this).h("cV.T")).i(0)+"]"}}
A.R9.prototype={
me(a){return!0},
cL(a,b){return new A.bn(B.Dc,t.mq)},
kQ(a){return!1},
i(a){return"DefaultWidgetsLocalizations.delegate(en_US)"}}
A.Dc.prototype={
gbE(){return B.w},
$ijc:1}
A.xY.prototype={
bX(a){return this.w!==a.w}}
A.ub.prototype={
ai(){return new A.Nu(new A.bw(null,t.J),A.z(t.n,t.z),B.m)}}
A.Nu.prototype={
aA(){this.aS()
this.cL(0,this.a.c)},
Ra(a){var s,r,q,p,o,n,m=this.a.d,l=a.d
if(m.length!==l.length)return!0
s=A.a(m.slice(0),A.ao(m))
r=A.a(l.slice(0),A.ao(l))
for(q=0;q<s.length;++q){p=s[q]
o=r[q]
n=p instanceof A.bY?A.d_(p):null
m=A.aD(n==null?A.aU(p):n)
n=o instanceof A.bY?A.d_(o):null
if(m===A.aD(n==null?A.aU(o):n)){p.kQ(o)
m=!1}else m=!0
if(m)return!0}return!1},
aW(a){var s,r=this
r.bi(a)
if(r.a.c.k(0,a.c)){r.a.toString
s=r.Ra(a)}else s=!0
if(s)r.cL(0,r.a.c)},
cL(a,b){var s,r=this,q={},p=r.a.d,o=p.length
if(o===0){r.f=b
return}q.a=null
s=A.ayW(b,p).b5(new A.abp(q),t.Co)
q=q.a
if(q!=null){r.e=q
r.f=b}else{++$.kl.x2$
s.b5(new A.abq(r,b),t.H)}},
gGx(){return t.cC.a(J.aN(this.e,B.ZQ)).gbE()},
L(a){var s,r,q,p=this,o=null
if(p.f==null)return B.fL
s=p.gGx()
p.f.toString
r=p.e
q=p.gGx()
return A.dO(o,new A.xY(p,r,A.agR(p.a.e,q),p.d),!1,o,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,s,o)}}
A.abp.prototype={
$1(a){return this.a.a=a},
$S:322}
A.abq.prototype={
$1(a){var s=this.a
if(s.c!=null)s.aw(new A.abo(s,a,this.b))
$.kl.Hq()},
$S:323}
A.abo.prototype={
$0(){var s=this.a
s.e=this.b
s.f=this.c},
$S:0}
A.v2.prototype={
F(){return"Orientation."+this.b}}
A.iR.prototype={
ro(a,b,c,d,e){var s=this,r=c==null?s.c:c,q=a==null?s.f:a,p=e==null?s.r:e,o=d==null?s.e:d
return new A.iR(s.a,s.b,r,s.d,o,q,p,s.w,!1,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch)},
xY(a){return this.ro(null,null,a,null,null)},
I0(a){return this.ro(a,null,null,null,null)},
a0F(a,b){return this.ro(null,null,null,a,b)},
a0E(a,b){return this.ro(a,null,null,null,b)},
KK(a,b,c,d){var s,r,q,p,o,n,m=this,l=null
if(!(b||d||c||a))return m
s=m.f
r=b?0:l
q=d?0:l
p=c?0:l
r=s.o_(a?0:l,r,p,q)
q=m.r
p=b?Math.max(0,q.a-s.a):l
o=d?Math.max(0,q.b-s.b):l
n=c?Math.max(0,q.c-s.c):l
return m.a0E(r,q.o_(a?Math.max(0,q.d-s.d):l,p,n,o))},
a58(a){var s=this,r=null,q=s.r,p=s.e,o=Math.max(0,q.d-p.d)
q=q.o_(o,r,r,r)
return s.a0F(p.o_(0,r,r,r),q)},
k(a,b){var s=this
if(b==null)return!1
if(J.T(b)!==A.C(s))return!1
return b instanceof A.iR&&b.a.k(0,s.a)&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.f.k(0,s.f)&&b.r.k(0,s.r)&&b.e.k(0,s.e)&&b.Q===s.Q&&b.as===s.as&&b.z===s.z&&b.y===s.y&&b.at===s.at&&b.ax===s.ax&&b.ay.k(0,s.ay)&&A.cS(b.ch,s.ch)},
gv(a){var s=this
return A.V(s.a,s.b,s.c,s.d,s.f,s.r,s.e,!1,s.Q,s.as,s.z,s.y,s.at,s.ax,s.ay,A.d8(s.ch),B.a,B.a,B.a,B.a)},
i(a){var s=this
return"MediaQueryData("+B.b.bf(A.a(["size: "+s.a.i(0),"devicePixelRatio: "+B.d.N(s.b,1),"textScaleFactor: "+B.d.N(s.c,1),"platformBrightness: "+s.d.i(0),"padding: "+s.f.i(0),"viewPadding: "+s.r.i(0),"viewInsets: "+s.e.i(0),"alwaysUse24HourFormat: false","accessibleNavigation: "+s.y,"highContrast: "+s.Q,"disableAnimations: "+s.as,"invertColors: "+s.z,"boldText: "+s.at,"navigationMode: "+s.ax.b,"gestureSettings: "+s.ay.i(0),"displayFeatures: "+A.h(s.ch)],t.s),", ")+")"}}
A.f5.prototype={
bX(a){return!this.f.k(0,a.f)}}
A.Hr.prototype={
F(){return"NavigationMode."+this.b}}
A.y5.prototype={
ai(){return new A.NC(B.m)}}
A.NC.prototype={
aA(){this.aS()
$.ak.ag$.push(this)},
rw(){this.aw(new A.abL())},
Ig(){this.aw(new A.abN())},
If(){this.aw(new A.abM())},
L(a){var s
$.ak.toString
s=A.al2($.ci())
return new A.f5(s,this.a.c,null)},
m(){B.b.A($.ak.ag$,this)
this.aM()}}
A.abL.prototype={
$0(){},
$S:0}
A.abN.prototype={
$0(){},
$S:0}
A.abM.prototype={
$0(){},
$S:0}
A.Rq.prototype={}
A.uE.prototype={
L(a){var s,r=null
switch(A.l0().a){case 0:case 1:case 3:case 5:break
case 2:case 4:break}s=this.c
return A.art(new A.th(!0,new A.NM(A.dO(r,A.uG(new A.fG(B.mg,s==null?r:new A.rB(s,r,r),r),B.lE,r,r,r),!1,r,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),new A.a0n(this,a),r),r))}}
A.a0n.prototype={
$0(){A.Kd(B.VB)},
$S:0}
A.pM.prototype={
f6(a){if(this.y1==null)return!1
return this.mW(a)},
Jd(a){},
Je(a,b){var s=this.y1
if(s!=null)s.$0()},
t8(a,b,c){}}
A.abR.prototype={
xH(a){a.sjl(this.a)}}
A.Lb.prototype={
HV(){var s=t.S,r=A.cF(s)
return new A.pM(B.b1,18,B.bs,A.z(s,t.o),r,null,null,A.z(s,t.C))},
Js(a){a.y1=this.a}}
A.NM.prototype={
L(a){var s=this.d
return new A.j_(this.c,A.aX([B.ZR,new A.Lb(s)],t.n,t.ob),B.aA,!1,new A.abR(s),null)}}
A.Hs.prototype={
L(a){var s,r,q=this,p=a.a4(t.I)
p.toString
s=A.a([],t.E)
r=q.c
if(r!=null)s.push(A.a_A(r,B.h4))
r=q.d
if(r!=null)s.push(A.a_A(r,B.h5))
r=q.e
if(r!=null)s.push(A.a_A(r,B.h6))
return new A.rP(new A.adC(q.f,q.r,p.w),s,null)}}
A.qH.prototype={
F(){return"_ToolbarSlot."+this.b}}
A.adC.prototype={
tO(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.b.j(0,B.h4)!=null){s=a.a
r=a.b
q=e.dA(B.h4,new A.aR(0,s,r,r)).a
switch(e.f.a){case 0:p=s-q
break
case 1:p=0
break
default:p=null}e.dT(B.h4,new A.v(p,0))}else q=0
if(e.b.j(0,B.h6)!=null){o=e.dA(B.h6,A.agD(a))
switch(e.f.a){case 0:n=0
break
case 1:n=a.a-o.a
break
default:n=null}m=o.a
e.dT(B.h6,new A.v(n,(a.b-o.b)/2))}else m=0
if(e.b.j(0,B.h5)!=null){s=a.a
r=e.e
l=Math.max(s-q-m-r*2,0)
k=e.dA(B.h5,A.agD(a).a0x(l))
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
default:f=null}e.dT(B.h5,new A.v(f,(a.b-k.b)/2))}},
mN(a){return a.d!==this.d||a.e!==this.e||a.f!==this.f}}
A.mo.prototype={
F(){return"RoutePopDisposition."+this.b}}
A.bZ.prototype={
gtI(){return B.rG},
jf(){},
ob(){var s=A.ahS()
s.b5(new A.a3m(this),t.H)
return s},
o9(){var s=this.a
if(s==null)s=null
else{s.a.toString
s=!0}if(s===!0)A.ahS().b5(new A.a3l(this),t.H)},
ym(a){},
fe(){var s=0,r=A.a4(t.ij),q,p=this
var $async$fe=A.a0(function(a,b){if(a===1)return A.a1(b,r)
while(true)switch(s){case 0:q=p.gJK()?B.Tz:B.B8
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$fe,r)},
gLr(){return!1},
kb(a){this.a1i(a)
return!0},
a1i(a){this.d.cj(0,null)},
lJ(a){},
oa(a){},
yh(a){},
nT(){},
rh(){},
m(){this.a=null},
gkp(){var s,r=this.a
if(r==null)return!1
r=r.e
r=new A.bs(r,A.ao(r).h("bs<1,dh?>"))
s=r.mi(r,new A.a3p(),new A.a3q())
if(s==null)return!1
return s.a===this},
gJK(){var s,r=this.a
if(r==null)return!1
r=r.e
r=new A.bs(r,A.ao(r).h("bs<1,dh?>"))
s=r.t1(r,new A.a3r(),new A.a3s())
if(s==null)return!1
return s.a===this},
gtd(){var s,r,q,p,o=this.a
if(o==null)return!1
for(o=o.e,s=o.length,r=0;r<s;++r){q=o[r]
if(q.a===this)return!1
p=q.d.a
if(p<=10&&p>=1)return!0}return!1},
ga3t(){var s=this.a
if(s==null)return!1
s=s.e
s=new A.bs(s,A.ao(s).h("bs<1,dh?>"))
s=s.t1(s,new A.a3n(this),new A.a3o())
s=s==null?null:s.gkq()
return s===!0}}
A.a3m.prototype={
$1(a){var s,r=this.a.a
if(r==null)s=null
else{r.a.toString
s=!0}if(s===!0){r=r.x.gdu()
if(r!=null)r.u0()}},
$S:18}
A.a3l.prototype={
$1(a){var s=this.a.a
if(s!=null){s=s.x.gdu()
if(s!=null)s.u0()}},
$S:18}
A.a3p.prototype={
$1(a){return a!=null&&a.gkq()},
$S:26}
A.a3q.prototype={
$0(){return null},
$S:8}
A.a3r.prototype={
$1(a){return a!=null&&a.gkq()},
$S:26}
A.a3s.prototype={
$0(){return null},
$S:8}
A.a3n.prototype={
$1(a){return a!=null&&A.amJ(this.a).$1(a)},
$S:26}
A.a3o.prototype={
$0(){return null},
$S:8}
A.h1.prototype={
i(a){var s=this.a
s=s==null?"none":'"'+s+'"'
return"RouteSettings("+s+", "+A.h(this.b)+")"}}
A.iT.prototype={
rA(a,b){},
rz(a,b){},
yl(a,b){},
rB(a,b){},
Ii(a,b){},
od(){}}
A.lL.prototype={
bX(a){return a.f!=this.f}}
A.a3k.prototype={}
A.KB.prototype={}
A.Db.prototype={}
A.uQ.prototype={
ai(){var s=null,r=A.a([],t.hi),q=$.bu(),p=t.a4
return new A.f9(r,new A.MZ(q),A.iP(s,p),A.iP(s,p),A.ah0(!0,"Navigator",!0,!0,s,s,!1),new A.vK(0,q,t.rj),A.jb(!1),A.b7(t.S),s,A.z(t.wb,t.M),s,!0,s,s,s,B.m)},
a4i(a,b){return this.z.$2(a,b)}}
A.a0V.prototype={
$1(a){return a==null},
$S:325}
A.dT.prototype={
F(){return"_RouteLifecycle."+this.b}}
A.NY.prototype={}
A.dh.prototype={
gcB(){var s,r
if(this.c){s=t.kd.a(this.a.b)
s.gcB()
r=A.h(s.gcB())
return"p+"+r}r=this.b
if(r!=null)return"r+"+r.gKV()
return null},
a2v(a,b,c,d){var s,r,q,p=this,o=p.d,n=p.a
n.a=b
n.jf()
s=p.d
if(s===B.Cr||s===B.Cs){r=n.ob()
p.d=B.Ct
r.Lq(new A.acO(p,b))}else{n.ym(c)
p.d=B.cX}if(a)n.oa(null)
s=o===B.a0e||o===B.Cs
q=b.r
if(s)q.d5(0,new A.yh(n,d))
else q.d5(0,new A.qk(n,d))},
a2u(a,b){var s,r=this
r.d=B.a0a
s=r.a
if((s.d.a.a&30)!==0)return!0
if(!s.kb(r.w)){r.d=B.cX
return!1}r.w=null
return!0},
m(){var s,r,q,p,o,n,m={}
this.d=B.a0c
s=this.a
r=s.gtI()
q=new A.acM()
p=new A.aO(r,q,A.ao(r).h("aO<1>"))
if(!p.ga8(p).t())s.m()
else{m.a=p.gp(p)
for(s=B.b.ga8(r),q=new A.pK(s,q);q.t();){r=s.gG(s)
o=A.b5("listener")
n=new A.acN(m,this,r,o)
o.b=n
r.d.S(0,n)}}},
ga61(){var s=this.d.a
return s<=7&&s>=1},
gkq(){var s=this.d.a
return s<=10&&s>=1}}
A.acO.prototype={
$0(){var s=this.a
if(s.d===B.Ct){s.d=B.cX
this.b.vN()}},
$S:0}
A.acM.prototype={
$1(a){return a.d.a},
$S:326}
A.acN.prototype={
$0(){var s=this,r=s.a;--r.a
s.c.d.H(0,s.d.aC())
if(r.a===0)s.b.a.m()},
$S:0}
A.acP.prototype={
$1(a){return a.a===this.a},
$S:43}
A.kL.prototype={}
A.qk.prototype={
kv(a){a.rA(this.a,this.b)}}
A.qj.prototype={
kv(a){a.rz(this.a,this.b)}}
A.yg.prototype={
kv(a){a.yl(this.a,this.b)}}
A.yh.prototype={
kv(a){a.rB(this.a,this.b)}}
A.f9.prototype={
aA(){var s,r,q,p,o=this
o.aS()
for(s=o.a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q){p=s[q]
$.hf().a.set(p,o)}o.Q=o.a.x
s=o.c.jz(t.hS)
if(s==null)s=null
else{s=s.f
s.toString}t.cn.a(s)
o.xd(s==null?null:s.f)
o.a.toString
B.fs.tj("selectSingleEntryHistory",t.H)},
im(a,b){var s,r,q,p,o,n,m=this
m.mp(m.as,"id")
s=m.f
m.mp(s,"history")
for(;r=m.e,r.length!==0;)r.pop().m()
m.d=new A.bw(null,t.r9)
B.b.K(r,s.KW(null,m))
m.a.toString
q=0
for(;!1;++q){p=B.Mz[q]
r=m.c
r.toString
r=p.y5(r)
o=$.agj()
n=new A.dh(r,null,!0,B.lV,o,o,o)
m.e.push(n)
B.b.K(m.e,s.KW(n,m))}if(s.y==null){s=m.a
r=m.e
o=s.f
B.b.K(r,J.agr(s.a4i(m,o),new A.a0U(m),t.ee))}m.vN()},
yo(a){var s,r=this
r.OE(a)
s=r.f
if(r.be$!=null)s.ba(0,r.e)
else s.X(0)},
gcB(){return this.a.y},
b4(){var s,r,q,p,o=this
o.Po()
s=o.c.a4(t.hS)
o.xd(s==null?null:s.f)
for(r=o.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.Q)(r),++p)r[p].a.rh()},
xd(a){var s,r,q=this
if(q.z!=a){if(a!=null)$.hf().a.set(a,q)
s=q.z
if(s==null)s=null
else{r=$.hf()
A.o7(s)
s=r.a.get(s)}if(s===q){s=$.hf()
r=q.z
r.toString
s.a.set(r,null)}q.z=a
q.GU()}},
GU(){var s=this,r=s.z,q=s.a
if(r!=null)s.Q=B.b.U(q.x,A.a([r],t.yx))
else s.Q=q.x},
aW(a){var s,r,q,p,o=this
o.Pp(a)
s=a.x
if(s!==o.a.x){for(r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q){p=s[q]
$.hf().a.set(p,null)}for(s=o.a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q){p=s[q]
$.hf().a.set(p,o)}o.GU()}o.a.toString
for(s=o.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].a.rh()},
de(){var s,r,q,p=this.Q
p===$&&A.b()
s=p.length
r=0
for(;r<p.length;p.length===s||(0,A.Q)(p),++r){q=p[r]
$.hf().a.set(q,null)}this.mZ()},
c2(){var s,r,q,p
this.Pm()
s=this.Q
s===$&&A.b()
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.Q)(s),++q){p=s[q]
$.hf().a.set(p,this)}},
m(){var s,r,q,p=this
p.xd(null)
p.x.m()
for(s=p.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].m()
p.Pq()},
gCY(){var s,r,q,p=A.a([],t.tD)
for(s=this.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.Q)(s),++q)B.b.K(p,s[q].a.gtI())
return p},
vO(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null
a.ay=!0
s=a.e
r=s.length-1
q=s[r]
p=r>0?s[r-1]:a0
o=A.a([],t.hi)
for(s=a.w,n=a.r,m=a0,l=m,k=!1,j=!1;r>=0;){switch(q.d.a){case 1:i=a.iA(r-1,A.aiS())
h=i>=0?a.e[i]:a0
h=h==null?a0:h.a
g=q.a
g.a=a
g.jf()
q.d=B.a0d
n.d5(0,new A.qk(g,h))
continue
case 2:if(k||l==null){h=q.a
h.o9()
q.d=B.cX
if(l==null)h.oa(a0)
continue}break
case 3:case 4:case 6:h=p==null?a0:p.a
i=a.iA(r-1,A.aiS())
g=i>=0?a.e[i]:a0
g=g==null?a0:g.a
q.a2v(l==null,a,h,g)
if(q.d===B.cX)continue
break
case 5:if(!j&&m!=null){q.a.lJ(m)
q.f=m}j=!0
break
case 7:if(!j&&m!=null){q.a.lJ(m)
q.f=m}k=!0
j=!0
break
case 8:i=a.iA(r,A.A5())
h=i>=0?a.e[i]:a0
if(!q.a2u(a,h==null?a0:h.a))continue
if(!j){if(m!=null){q.a.lJ(m)
q.f=m}m=q.a}h=q.a
i=a.iA(r,A.A5())
g=i>=0?a.e[i]:a0
s.d5(0,new A.qj(h,g==null?a0:g.a))
if(q.d===B.lW)continue
k=!0
break
case 11:break
case 9:h=q.a
h=h.d.a
if((h.a&30)!==0)A.X(A.a6("Future already completed"))
h.eP(a0)
q.w=null
q.d=B.a09
continue
case 10:if(!j){if(m!=null)q.a.lJ(m)
m=a0}i=a.iA(r,A.A5())
h=i>=0?a.e[i]:a0
h=h==null?a0:h.a
q.d=B.a0b
if(q.x)s.d5(0,new A.yg(q.a,h))
continue
case 12:if(!k&&l!=null)break
q.d=B.lW
continue
case 13:o.push(B.b.fQ(a.e,r))
q=l
break
case 14:case 0:break}--r
f=r>0?a.e[r-1]:a0
l=q
q=p
p=f}a.T7()
a.T9()
a.a.toString
s=a.e
s=new A.bs(s,A.ao(s).h("bs<1,dh?>"))
e=s.mi(s,new A.a0O(),new A.a0P())
d=e==null?a0:e.a.b.a
if(d!=null&&d!==a.at){A.am8(d,!1,a0)
a.at=d}for(s=o.length,c=0;c<o.length;o.length===s||(0,A.Q)(o),++c){q=o[c]
for(n=q.a.gtI(),h=n.length,b=0;b<n.length;n.length===h||(0,A.Q)(n),++b)J.ar6(n[b])
q.m()}if(a1){s=a.d
s===$&&A.b()
s=s.gbn()
if(s!=null)s.a4X(a.gCY())}if(a.be$!=null)a.f.ba(0,a.e)
a.ay=!1},
vN(){return this.vO(!0)},
T7(){var s,r=this,q=r.Q
q===$&&A.b()
if(q.length===0){r.w.X(0)
r.r.X(0)
return}for(q=r.r;!q.gR(q);){s=q.fa(0)
B.b.Z(r.Q,s.goX())}for(q=r.w;!q.gR(q);){s=q.mr()
B.b.Z(r.Q,s.goX())}},
T9(){var s,r,q,p,o,n,m=this,l=null,k=m.e.length-1
for(;k>=0;){s=m.e[k]
r=s.d.a
if(!(r<=12&&r>=3)){--k
continue}q=m.TB(k+1,A.aoB())
r=q==null
p=r?l:q.a
o=s.r
if(p!=o){if((r?l:q.a)==null){p=s.f
p=p!=null&&p===o}else p=!1
if(!p){p=s.a
p.oa(r?l:q.a)}s.r=r?l:q.a}--k
n=m.iA(k,A.aoB())
r=n>=0?m.e[n]:l
p=r==null
o=p?l:r.a
if(o!=s.e){o=s.a
o.yh(p?l:r.a)
s.e=p?l:r.a}}},
Ef(a,b){a=this.iA(a,b)
return a>=0?this.e[a]:null},
iA(a,b){while(!0){if(!(a>=0&&!b.$1(this.e[a])))break;--a}return a},
TB(a,b){var s
while(!0){s=this.e
if(!(a<s.length&&!b.$1(s[a])))break;++a}s=this.e
return a<s.length?s[a]:null},
qH(a,b,c,d){var s,r,q
if(b)this.a.toString
s=new A.h1(a,c)
r=d.h("bZ<0?>?")
q=r.a(this.a.r.$1(s))
return q==null&&!b?r.a(this.a.w.$1(s)):q},
wR(a,b,c){return this.qH(a,!1,b,c)},
CV(a){this.RC()},
oU(a){var s=0,r=A.a4(t.y),q,p=this,o,n,m
var $async$oU=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)$async$outer:switch(s){case 0:m=p.e
m=new A.bs(m,A.ao(m).h("bs<1,dh?>"))
o=m.mi(m,new A.a0Q(),new A.a0R())
if(o==null){q=!1
s=1
break}s=3
return A.a5(o.a.fe(),$async$oU)
case 3:n=c
if(p.c==null){q=!0
s=1
break}m=p.e
m=new A.bs(m,A.ao(m).h("bs<1,dh?>"))
if(o!==m.mi(m,new A.a0S(),new A.a0T())){q=!0
s=1
break}switch(n.a){case 2:q=!1
s=1
break $async$outer
case 0:p.a4B(a)
q=!0
s=1
break $async$outer
case 1:q=!0
s=1
break $async$outer}case 1:return A.a2(q,r)}})
return A.a3($async$oU,r)},
K3(){return this.oU(null,t.X)},
a45(a){return this.oU(a,t.X)},
Kr(a){var s=this,r=B.b.a3J(s.e,A.aiS())
if(r.c){s.a.toString
if(null.$2(r.a,a)&&r.d===B.cX)r.d=B.lX}else{r.w=a
r.d=B.lX}if(r.d===B.lX)s.vO(!1)
s.CV(r.a)},
fO(){return this.Kr(null,t.X)},
a4B(a){return this.Kr(a,t.X)},
IQ(a){var s,r=this,q=B.b.a39(r.e,A.amJ(a)),p=r.e[q]
if(p.c&&p.d.a<8){s=r.Ef(q-1,A.A5())
s=s==null?null:s.a
r.w.d5(0,new A.qj(a,s))}p.d=B.lW
if(!r.ay)r.vO(!1)},
sH9(a){this.ch=a
this.CW.sn(0,a>0)},
a1m(){var s,r,q,p,o,n,m=this
m.sH9(m.ch+1)
if(m.ch===1){s=m.iA(m.e.length-1,A.A5())
r=m.e[s].a
q=!r.gLr()&&s>0?m.Ef(s-1,A.A5()).a:null
p=m.Q
p===$&&A.b()
o=p.length
n=0
for(;n<p.length;p.length===o||(0,A.Q)(p),++n)p[n].Ii(r,q)}},
od(){var s,r,q,p=this
p.sH9(p.ch-1)
if(p.ch===0){s=p.Q
s===$&&A.b()
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.Q)(s),++q)s[q].od()}},
US(a){this.cx.D(0,a.gbQ())},
V_(a){this.cx.A(0,a.gbQ())},
RC(){if($.bO.CW$===B.cN){var s=this.d
s===$&&A.b()
s=$.ak.I$.z.j(0,s)
this.aw(new A.a0N(s==null?null:s.rY(t.CE)))}s=this.cx
B.b.Z(A.aA(s,!0,A.n(s).c),$.ak.ga_F())},
L(a){var s,r=this,q=null,p=r.gUZ(),o=A.akv(a),n=r.be$,m=r.d
m===$&&A.b()
r.a.toString
if(m.gbn()==null){s=r.gCY()
s=J.lW(s.slice(0),A.ao(s).c)}else s=B.rG
return new A.lL(q,A.Ff(B.bV,new A.Ae(!1,A.aku(A.Ek(!0,q,A.a8p(n,new A.oF(s,B.R,m)),q,q,q,r.x,!1,q,q,q,q,q,!0),o),q),p,r.gUR(),q,q,p),q)}}
A.a0U.prototype={
$1(a){var s,r,q=a.b.a
if(q!=null){s=this.a.as
r=s.y
if(r==null)r=s.$ti.h("bU.T").a(r)
s.OD(0,r+1)
q=new A.NS(r,q,null,B.lY)}else q=null
return A.amI(a,B.lV,!1,q)},
$S:329}
A.a0O.prototype={
$1(a){return a!=null&&a.gkq()},
$S:26}
A.a0P.prototype={
$0(){return null},
$S:8}
A.a0Q.prototype={
$1(a){return a!=null&&a.gkq()},
$S:26}
A.a0R.prototype={
$0(){return null},
$S:8}
A.a0S.prototype={
$1(a){return a!=null&&a.gkq()},
$S:26}
A.a0T.prototype={
$0(){return null},
$S:8}
A.a0N.prototype={
$0(){var s=this.a
if(s!=null)s.sHg(!0)},
$S:0}
A.qv.prototype={
F(){return"_RouteRestorationType."+this.b}}
A.Pj.prototype={
gJN(){return!0},
rl(){return A.a([this.a.a],t.f)}}
A.NS.prototype={
rl(){var s=this,r=s.PG(),q=A.a([s.c,s.d],t.f),p=s.e
if(p!=null)q.push(p)
B.b.K(r,q)
return r},
y5(a){var s=a.wR(this.d,this.e,t.z)
s.toString
return s},
gKV(){return this.c}}
A.ai1.prototype={
gJN(){return!1},
rl(){A.auM(this.d)},
y5(a){var s=a.c
s.toString
return this.d.$2(s,this.e)},
gKV(){return this.c}}
A.MZ.prototype={
ba(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.y==null
if(a)c.y=A.z(t.N,t.lC)
s=t.f
r=A.a([],s)
q=c.y
q.toString
p=J.aN(q,null)
if(p==null)p=B.dl
o=A.z(t.dR,t.lC)
q=c.y
q.toString
n=J.ard(J.Ac(q))
for(q=a1.length,m=b,l=a,k=!0,j=0;j<a1.length;a1.length===q||(0,A.Q)(a1),++j){i=a1[j]
if(i.d.a>7){h=i.a
h.c.sn(0,b)
continue}if(i.c){l=l||r.length!==J.bE(p)
h=r.length
if(h!==0){g=m==null?b:m.gcB()
o.l(0,g,r)
n.A(0,g)}k=i.gcB()!=null
h=i.a
f=k?i.gcB():b
h.c.sn(0,f)
if(k){r=A.a([],s)
h=c.y
h.toString
p=J.aN(h,i.gcB())
if(p==null)p=B.dl}else{r=B.dl
p=B.dl}m=i
continue}if(k){h=i.b
h=h==null?b:h.gJN()
k=h===!0}else k=!1
h=i.a
f=k?i.gcB():b
h.c.sn(0,f)
if(k){h=i.b
f=h.b
h=f==null?h.b=h.rl():f
if(!l){f=J.aH(p)
e=f.gp(p)
d=r.length
l=e<=d||!J.f(f.j(p,d),h)}else l=!0
B.b.D(r,h)}}l=l||r.length!==J.bE(p)
c.SU(r,m,o,n)
if(l||n.gbD(n)){c.y=o
c.aB()}},
SU(a,b,c,d){var s,r=a.length
if(r!==0){s=b==null?null:b.gcB()
c.l(0,s,a)
d.A(0,s)}},
X(a){if(this.y==null)return
this.y=null
this.aB()},
KW(a,b){var s,r,q,p,o,n=A.a([],t.hi)
if(this.y!=null)s=a!=null&&a.gcB()==null
else s=!0
if(s)return n
s=this.y
s.toString
r=J.aN(s,a==null?null:a.gcB())
if(r==null)return n
for(s=J.av(r);s.t();){q=A.axg(s.gG(s))
p=q.y5(b)
o=$.agj()
n.push(new A.dh(p,q,!1,B.lV,o,o,o))}return n},
rq(){return null},
m7(a){a.toString
return J.ajB(t.G.a(a),new A.aaU(),t.dR,t.lC)},
Jr(a){this.y=a},
my(){return this.y},
glM(a){return this.y!=null}}
A.aaU.prototype={
$2(a,b){return new A.b1(A.cv(a),A.hF(t.j.a(b),!0,t.K),t.cj)},
$S:330}
A.ac7.prototype={
$2(a,b){if(!a.a)a.H(0,b)},
$S:33}
A.yi.prototype={
c2(){this.dn()
this.cF()
this.ev()},
m(){var s=this,r=s.aj$
if(r!=null)r.H(0,s.ge3())
s.aj$=null
s.aM()}}
A.yj.prototype={
aW(a){this.bi(a)
this.of()},
b4(){var s,r,q,p,o=this
o.cu()
s=o.be$
r=o.gmt()
q=o.c
q.toString
q=A.p_(q)
o.f1$=q
p=o.lu(q,r)
if(r){o.im(s,o.dK$)
o.dK$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.f0$.Z(0,new A.ac7())
s=r.be$
if(s!=null)s.m()
r.be$=null
r.Pn()}}
A.dr.prototype={
i(a){var s=A.a([],t.s)
this.cb(s)
return"Notification("+B.b.bf(s,", ")+")"},
cb(a){}}
A.cI.prototype={
bI(a){return new A.yk(this,B.a6,this.$ti.h("yk<1>"))}}
A.yk.prototype={
Kg(a){var s,r=this.f
r.toString
s=this.$ti
s.h("cI<1>").a(r)
if(s.c.b(a))return r.d.$1(a)
return!1},
mj(a){}}
A.ek.prototype={}
A.Rv.prototype={}
A.fb.prototype={
smn(a){var s
if(this.b===a)return
this.b=a
s=this.e
if(s!=null)s.DK()},
soS(a){if(this.c)return
this.c=!0
this.e.DK()},
S(a,b){this.d.S(0,b)},
H(a,b){this.d.H(0,b)},
mq(a){var s,r=this.e
r.toString
this.e=null
if(r.c==null)return
B.b.A(r.d,this)
s=$.bO
if(s.CW$===B.B9)s.ax$.push(new A.a1c(r))
else r.EW()},
fM(){var s=this.f.gbn()
if(s!=null)s.EY()},
i(a){return"<optimized out>#"+A.bL(this)+"(opaque: "+this.b+"; maintainState: "+this.c+")"},
$iab:1,
HF(a){return this.a.$1(a)}}
A.a1c.prototype={
$1(a){this.a.EW()},
$S:2}
A.qm.prototype={
ai(){return new A.ym(B.m)}}
A.ym.prototype={
aA(){this.aS()
this.a.c.d.sn(0,!0)},
m(){this.a.c.d.sn(0,!1)
this.a.toString
this.aM()},
L(a){var s=this.a
return new A.pC(s.d,s.c.HF(a),null)},
EY(){this.aw(new A.acc())}}
A.acc.prototype={
$0(){},
$S:0}
A.oF.prototype={
ai(){return new A.oH(A.a([],t.tD),null,null,B.m)}}
A.oH.prototype={
aA(){this.aS()
this.a3b(0,this.a.c)},
wh(a,b){return this.d.length},
z5(a,b){b.e=this
this.aw(new A.a1g(this,null,null,b))},
a3b(a,b){var s,r=b.length
if(r===0)return
for(s=0;s<r;++s)b[s].e=this
this.aw(new A.a1f(this,null,null,b))},
a4X(a){var s,r,q,p,o,n=this
if(t.rF.b(a))s=a
else s=J.lW(a.slice(0),A.ao(a).c)
if(s.length===0)return
r=n.d
if(A.cS(r,s))return
q=A.k6(r,t.u7)
for(r=s.length,p=0;p<r;++p){o=s[p]
if(o.e==null)o.e=n}n.aw(new A.a1h(n,s,q,null,null))},
EW(){if(this.c!=null)this.aw(new A.a1e())},
DK(){this.aw(new A.a1d())},
L(a){var s,r,q,p,o,n=A.a([],t.E)
for(s=this.d,r=s.length-1,q=!0,p=0;r>=0;--r){o=s[r]
if(q){++p
n.push(new A.qm(o,!0,o.f))
q=!o.b||!1}else if(o.c)n.push(new A.qm(o,!1,o.f))}s=t.m8
return new A.Qt(n.length-p,this.a.d,A.aA(new A.cL(n,s),!1,s.h("bq.E")),null)}}
A.a1g.prototype={
$0(){var s=this,r=s.a
B.b.oI(r.d,r.wh(s.b,s.c),s.d)},
$S:0}
A.a1f.prototype={
$0(){var s=this,r=s.a
B.b.Jt(r.d,r.wh(s.b,s.c),s.d)},
$S:0}
A.a1h.prototype={
$0(){var s,r,q=this,p=q.a,o=p.d
B.b.X(o)
s=q.b
B.b.K(o,s)
r=q.c
r.a52(s)
B.b.Jt(o,p.wh(q.d,q.e),r)},
$S:0}
A.a1e.prototype={
$0(){},
$S:0}
A.a1d.prototype={
$0(){},
$S:0}
A.Qt.prototype={
bI(a){var s=A.cF(t.h)
return new A.Qu(s,this,B.a6)},
aD(a){var s=a.a4(t.I)
s.toString
s=new A.qu(s.w,this.e,this.f,A.aq(),0,null,null,A.aq())
s.aE()
s.K(0,null)
return s},
aG(a,b){var s=this.e
if(b.ar!==s){b.ar=s
b.a5()}s=a.a4(t.I)
s.toString
b.sbE(s.w)
s=this.f
if(s!==b.ag){b.ag=s
b.ah()
b.b_()}}}
A.Qu.prototype={
ga9(){return t.z2.a(A.eH.prototype.ga9.call(this))}}
A.qu.prototype={
ej(a){if(!(a.e instanceof A.dP))a.e=new A.dP(null,null,B.k)},
WY(){if(this.u!=null)return
this.u=B.aE.W(this.I)},
sbE(a){var s=this
if(s.I===a)return
s.I=a
s.u=null
s.a5()},
gq3(){var s,r,q,p,o=this
if(o.ar===A.aw.prototype.gri.call(o))return null
s=A.aw.prototype.ga1S.call(o,o)
for(r=o.ar,q=t.B;r>0;--r){p=s.e
p.toString
s=q.a(p).an$}return s},
ez(a){var s,r,q,p,o=this.gq3()
for(s=t.B,r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.jy(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.an$}return r},
gjH(){return!0},
c3(a){return new A.a_(A.H(1/0,a.a,a.b),A.H(1/0,a.c,a.d))},
bB(){var s,r,q,p,o,n,m,l,k=this
k.M=!1
if(k.df$-k.ar===0)return
k.WY()
s=t.k.a(A.x.prototype.gY.call(k))
r=A.rk(new A.a_(A.H(1/0,s.a,s.b),A.H(1/0,s.c,s.d)))
q=k.gq3()
for(s=t.B,p=t.uu;q!=null;){o=q.e
o.toString
s.a(o)
if(!o.gzc()){q.co(r,!0)
n=k.u
n.toString
m=k.k3
m.toString
l=q.k3
l.toString
o.a=n.lA(p.a(m.aa(0,l)))}else{n=k.k3
n.toString
m=k.u
m.toString
k.M=A.alA(q,o,n,m)||k.M}q=o.an$}},
cK(a,b){var s,r,q,p=this,o={},n=o.a=p.ar===A.aw.prototype.gri.call(p)?null:p.cV$
for(s=t.B,r=0;r<p.df$-p.ar;++r,n=q){n=n.e
n.toString
s.a(n)
if(a.nH(new A.acC(o,b,n),n.a,b))return!0
q=n.bR$
o.a=q}return!1},
tM(a,b){var s,r,q,p,o,n=this.gq3()
for(s=t.B,r=b.a,q=b.b;n!=null;){p=n.e
p.toString
s.a(p)
o=p.a
a.eJ(n,new A.v(o.a+r,o.b+q))
n=p.an$}},
aH(a,b){var s,r=this,q=r.M&&r.ag!==B.h,p=r.aY
if(q){q=r.cx
q===$&&A.b()
s=r.k3
p.saF(0,a.kA(q,b,new A.A(0,0,0+s.a,0+s.b),r.gA4(),r.ag,p.a))}else{p.saF(0,null)
r.tM(a,b)}},
m(){this.aY.saF(0,null)
this.hQ()},
fc(a){var s,r,q=this.gq3()
for(s=t.B;q!=null;){a.$1(q)
r=q.e
r.toString
q=s.a(r).an$}},
iR(a){var s
switch(this.ag.a){case 0:return null
case 1:case 2:case 3:if(this.M){s=this.k3
s=new A.A(0,0,0+s.a,0+s.b)}else s=null
return s}}}
A.acC.prototype={
$2(a,b){return this.a.a.bS(a,b)},
$S:15}
A.O8.prototype={
c2(){this.dn()
this.cF()
this.ev()},
m(){var s=this,r=s.aj$
if(r!=null)r.H(0,s.ge3())
s.aj$=null
s.aM()}}
A.RB.prototype={
ap(a){var s,r,q
this.en(a)
s=this.av$
for(r=t.B;s!=null;){s.ap(a)
q=s.e
q.toString
s=r.a(q).an$}},
ae(a){var s,r,q
this.dE(0)
s=this.av$
for(r=t.B;s!=null;){s.ae(0)
q=s.e
q.toString
s=r.a(q).an$}}}
A.oc.prototype={
ai(){var s=t.y
return new A.xI(A.aX([!1,!0,!0,!0],s,s),null,null,B.m)},
jk(a){return A.A7().$1(a)}}
A.xI.prototype={
aA(){var s,r,q=this
q.aS()
s=q.a
r=s.f
q.d=A.amA(A.bf(s.e),r,q)
r=q.a
s=r.f
s=A.amA(A.bf(r.e),s,q)
q.e=s
r=q.d
r.toString
q.f=new A.y6(A.a([r,s],t.ro))},
aW(a){var s,r=this
r.bi(a)
if(!a.f.k(0,r.a.f)||A.bf(a.e)!==A.bf(r.a.e)){s=r.d
s.toString
s.sau(0,r.a.f)
s=r.d
s.toString
s.sHy(A.bf(r.a.e))
s=r.e
s.toString
s.sau(0,r.a.f)
s=r.e
s.toString
s.sHy(A.bf(r.a.e))}},
wy(a){var s,r,q,p,o,n,m,l,k,j=this
if(!j.a.jk(a))return!1
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
if(a instanceof A.hL){q=a.e
if(q<0)n=s
else if(q>0)n=p
else n=null
m=n===s
s=j.c
s.cS(new A.v4(m,0))
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
if(n.a===B.fV)r=0.3
else{r=n.r
r===$&&A.b()
q=r.a
q=r.b.ad(0,q.gn(q))
r=q}s.a=r
r.toString
s.b=A.H(l*0.00006,r,0.5)
r=n.w
s=n.x
s===$&&A.b()
q=s.a
r.a=s.b.ad(0,q.gn(q))
r.b=Math.min(0.025+75e-8*l*l,1)
r=n.b
r===$&&A.b()
r.e=A.cc(0,B.d.b2(0.15+l*0.02),0)
r.kn(0,0)
n.as=0.5
n.a=B.a_I}else{s=a.d
if(s!=null){p=a.b.ga9()
p.toString
t.x.a(p)
o=p.k3
o.toString
k=p.kN(s.d)
switch(A.bf(r.e).a){case 0:n.toString
s=o.b
n.Kx(0,Math.abs(q),o.a,A.H(k.b,0,s),s)
break
case 1:n.toString
s=o.a
n.Kx(0,Math.abs(q),o.b,A.H(k.a,0,s),s)
break}}}}else if(a instanceof A.j1||a instanceof A.fh)if(a.gIq()!=null){s=j.d
if(s.a===B.fW)s.jU(B.d8)
s=j.e
if(s.a===B.fW)s.jU(B.d8)}j.r=A.C(a)
return!1},
m(){this.d.m()
this.e.m()
this.Qg()},
L(a){var s=this,r=null,q=s.a,p=s.d,o=s.e,n=q.e,m=s.f
return new A.cI(s.gwx(),new A.h0(A.UN(new A.h0(q.w,r),new A.MY(p,o,n,m),r,r,B.W),r),r,t.Bf)}}
A.n5.prototype={
F(){return"_GlowState."+this.b}}
A.xH.prototype={
sau(a,b){if(this.ax.k(0,b))return
this.ax=b
this.aB()},
sHy(a){if(this.ay===a)return
this.ay=a
this.aB()},
m(){var s=this,r=s.b
r===$&&A.b()
r.m()
r=s.y
r===$&&A.b()
r.w.bt$.A(0,r)
r.Cv()
r=s.c
if(r!=null)r.am(0)
s.dF()},
Kx(a,b,c,d,e){var s,r,q,p=this,o=p.c
if(o!=null)o.am(0)
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
s.b=Math.max(1-1/(0.7*Math.sqrt(p.at*q)),A.kX(o.ad(0,r.gn(r))))
r=d/e
p.Q=r
if(r!==p.as){o=p.y
o===$&&A.b()
if(!o.ga3C())o.mS(0)}else{o=p.y
o===$&&A.b()
o.fZ(0)
p.z=null}o=p.b
o===$&&A.b()
o.e=B.nt
if(p.a!==B.fW){o.kn(0,0)
p.a=B.fW}else{o=o.r
if(!(o!=null&&o.a!=null))p.aB()}p.c=A.ch(B.nt,new A.aaD(p))},
vd(a){var s=this
if(a!==B.T)return
switch(s.a.a){case 1:s.jU(B.d8)
break
case 3:s.a=B.fV
s.at=0
break
case 2:case 0:break}},
jU(a){var s,r,q=this,p=q.a
if(p===B.Cn||p===B.fV)return
p=q.c
if(p!=null)p.am(0)
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
p.kn(0,0)
q.a=B.Cn},
Z5(a){var s,r=this,q=r.z
if(q!=null){q=q.a
s=r.Q
r.as=s-(s-r.as)*Math.pow(2,-(a.a-q)/$.apR().a)
r.aB()}if(A.A6(r.Q,r.as,0.001)){q=r.y
q===$&&A.b()
q.fZ(0)
r.z=null}else r.z=a},
aH(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.r
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
m=$.as().bj()
l=j.ax
k=i.a
m.sau(0,A.b6(B.d.b2(255*i.b.ad(0,k.gn(k))),l.gn(l)>>>16&255,l.gn(l)>>>8&255,l.gn(l)&255))
a.ct(0)
a.az(0,0,j.d+j.e)
a.dl(0,1,n*q)
a.k6(new A.A(0,0,0+s,0+o))
a.i0(new A.v(s/2*(0.5+r),o-p),p,m)
a.cp(0)},
i(a){return"_GlowController(color: "+this.ax.i(0)+", axis: "+A.azU(this.ay)+")"}}
A.aaD.prototype={
$0(){return this.a.jU(B.hz)},
$S:0}
A.MY.prototype={
Fh(a,b,c,d,e){var s
if(c==null)return
switch(A.ju(d,e)){case B.C:c.aH(a,b)
break
case B.A:a.ct(0)
a.az(0,0,b.b)
a.dl(0,1,-1)
c.aH(a,b)
a.cp(0)
break
case B.af:a.ct(0)
a.kF(0,1.5707963267948966)
a.dl(0,1,-1)
c.aH(a,new A.a_(b.b,b.a))
a.cp(0)
break
case B.aw:a.ct(0)
s=b.a
a.az(0,s,0)
a.kF(0,1.5707963267948966)
c.aH(a,new A.a_(b.b,s))
a.cp(0)
break}},
aH(a,b){var s=this,r=s.d
s.Fh(a,b,s.b,r,B.nH)
s.Fh(a,b,s.c,r,B.nG)},
it(a){return a.b!=this.b||a.c!=this.c},
i(a){return"_GlowingOverscrollIndicatorPainter("+A.h(this.b)+", "+A.h(this.c)+")"}}
A.po.prototype={
ai(){return new A.z6(null,null,B.m)},
jk(a){return A.A7().$1(a)}}
A.z6.prototype={
gjY(){var s,r,q,p,o,n,m=this,l=null,k=m.d
if(k===$){s=t.a7
r=new A.aL(0,0,s)
q=new A.z5(r,B.m2,$.bu())
p=A.dW(l,l,l,l,m)
p.bo()
o=p.aT$
o.b=!0
o.a.push(q.gvc())
q.a!==$&&A.ex()
q.a=p
n=A.eg(B.mY,p,l)
n.a.S(0,q.gec())
t.m.a(n)
q.b!==$&&A.ex()
q.b=new A.b_(n,r,s.h("b_<aE.T>"))
m.d!==$&&A.bj()
m.d=q
k=q}return k},
wy(a){var s,r,q,p,o,n,m=this
if(!m.a.jk(a))return!1
if(a instanceof A.hL){m.f=a
J.T(m.e)
s=a.e
r=m.c
r.cS(new A.v4(s<0,0))
m.r=!0
r=a.f
if(r!==0){s=m.gjY()
q=A.H(Math.abs(r),1,1e4)
r=s.c
p=s.b
p===$&&A.b()
o=p.a
r.a=p.b.ad(0,o.gn(o))
r.b=Math.min(0.016+1.01/q,1)
r=s.a
r===$&&A.b()
r.e=A.cc(0,B.d.b2(q*0.02),0)
r.kn(0,0)
s.d=B.a0g}else if(a.d!=null){r=a.a.d
r.toString
n=A.H(Math.abs(s)/r+m.gjY().e,0,1)
r=m.gjY()
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
o.e=B.hA
if(r.d!==B.m3){o.kn(0,0)
r.d=B.m3}else{s=o.r
if(!(s!=null&&s.a!=null))r.aB()}}}else if(a instanceof A.j1||a instanceof A.fh){s=m.gjY()
if(s.d===B.m3)s.jU(B.hA)}m.e=a
return!1},
Tj(a){switch(this.a.c.a){case 0:return a>0?B.m5:B.m4
case 1:return a>0?B.ce:B.e3
case 2:return a>0?B.m4:B.m5
case 3:return a>0?B.e3:B.ce}},
m(){var s=this.gjY(),r=s.a
r===$&&A.b()
r.m()
s.dF()
this.Qq()},
L(a){var s={},r=a.a4(t.l).f
s.a=null
return new A.cI(this.gwx(),A.jz(this.gjY(),new A.adh(s,this,r.a),null),null,t.Bf)}}
A.adh.prototype={
$2(a,b){var s,r,q,p,o,n,m=this,l=m.b,k=l.gjY().b
k===$&&A.b()
s=k.a
s=k.b.ad(0,s.gn(s))
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
p=l.Tj(k==null?0:k)
k=l.f
if(k==null)o=null
else{k=k.a.d
k.toString
o=k}if(o==null)o=m.a.a
k=A.uw(r,q,1)
l=l.a
n=A.amg(p,l.f,k,!0)
return A.ak0(n,s!==0&&o!==m.a.a?l.e:B.h)},
$S:331}
A.ne.prototype={
F(){return"_StretchState."+this.b}}
A.z5.prototype={
vd(a){var s=this
if(a!==B.T)return
switch(s.d.a){case 1:s.jU(B.hA)
break
case 3:s.d=B.m2
s.e=0
break
case 2:case 0:break}},
jU(a){var s,r,q=this,p=q.d
if(p===B.Cu||p===B.m2)return
p=q.c
s=q.b
s===$&&A.b()
r=s.a
p.a=s.b.ad(0,r.gn(r))
p.b=0
p=q.a
p===$&&A.b()
p.e=a
p.kn(0,0)
q.d=B.Cu},
i(a){return"_StretchController()"}}
A.v4.prototype={
cb(a){this.Pr(a)
a.push("side: "+(this.a?"leading edge":"trailing edge"))}}
A.yo.prototype={
cb(a){var s,r
this.uL(a)
s=this.by$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.zG.prototype={
c2(){this.dn()
this.cF()
this.ev()},
m(){var s=this,r=s.aj$
if(r!=null)r.H(0,s.ge3())
s.aj$=null
s.aM()}}
A.zO.prototype={
c2(){this.dn()
this.cF()
this.ev()},
m(){var s=this,r=s.aj$
if(r!=null)r.H(0,s.ge3())
s.aj$=null
s.aM()}}
A.z3.prototype={
k(a,b){if(b==null)return!1
if(J.T(b)!==A.C(this))return!1
return b instanceof A.z3&&A.cS(b.a,this.a)},
gv(a){return A.d8(this.a)},
i(a){return"StorageEntryIdentifier("+B.b.bf(this.a,":")+")"}}
A.a1j.prototype={
CX(a){var s=A.a([],t.D5)
if(A.alf(a,s))a.AS(new A.a1k(s))
return s},
Lu(a,b){var s,r=this
if(r.a==null)r.a=A.z(t.K,t.z)
s=r.CX(a)
if(s.length!==0)r.a.l(0,new A.z3(s),b)},
Ai(a){var s
if(this.a==null)return null
s=this.CX(a)
return s.length!==0?this.a.j(0,new A.z3(s)):null}}
A.a1k.prototype={
$1(a){return A.alf(a,this.a)},
$S:39}
A.oJ.prototype={
L(a){return this.c}}
A.HE.prototype={
Hs(a,b,c){var s=t.sa.a(B.b.gb6(this.d))
if(s.I!=null){s.I=a
return A.bH(null,t.H)}return s.hd(s.kJ(a),b,c)},
tn(a){var s=t.sa.a(B.b.gb6(this.d))
if(s.I!=null){s.I=a
return}s.dz(s.kJ(a))},
I4(a,b,c){var s=null,r=new A.kM(this.z,this.as,B.fx,a,b,!0,s,A.jb(!1),$.bu())
r.CB(b,s,!0,c,a)
r.CC(b,s,s,!0,c,a)
return r},
ap(a){this.OS(a)
t.sa.a(a).spr(this.as)}}
A.m6.prototype={}
A.kM.prototype={
yA(a,b,c,d,e,f){return this.P1(a,b,c,d,e,null)},
spr(a){var s,r=this
if(r.ar===a)return
s=r.ghz(r)
r.ar=a
if(s!=null)r.yQ(r.kJ(s))},
gqi(){var s=this.ax
s.toString
return Math.max(0,s*(this.ar-1)/2)},
px(a,b){var s=Math.max(0,a-this.gqi())/(b*this.ar),r=B.d.As(s)
if(Math.abs(s-r)<1e-10)return r
return s},
kJ(a){var s=this.ax
s.toString
return a*s*this.ar+this.gqi()},
ghz(a){var s,r,q=this,p=q.at
if(p!=null)s=!(q.z!=null&&q.Q!=null)
else s=!0
if(s)p=null
else{s=q.I
if(s==null){p.toString
s=q.z
s.toString
r=q.Q
r.toString
r=A.H(p,s,r)
s=q.ax
s.toString
s=q.px(r,s)
p=s}else p=s}return p},
Bn(){var s,r,q=this,p=q.w,o=p.c
o.toString
o=A.HF(o)
if(o!=null){p=p.c
p.toString
s=q.I
if(s==null){s=q.at
s.toString
r=q.ax
r.toString
r=q.px(s,r)
s=r}o.Lu(p,s)}},
KY(){var s,r,q
if(this.at==null){s=this.w
r=s.c
r.toString
r=A.HF(r)
if(r==null)q=null
else{s=s.c
s.toString
q=r.Ai(s)}if(q!=null)this.u=q}},
Bm(){var s,r=this,q=r.I
if(q==null){q=r.at
q.toString
s=r.ax
s.toString
s=r.px(q,s)
q=s}r.w.e.sn(0,q)
q=$.h3.cd$
q===$&&A.b()
q.IW()},
KX(a,b){if(b)this.u=a
else this.dz(this.kJ(a))},
nN(a){var s,r,q,p,o=this,n=o.ax
n=n!=null?n:null
if(a===n)return!0
o.OY(a)
s=o.at
s=s!=null?s:null
if(s==null)r=o.u
else if(n===0){q=o.I
q.toString
r=q}else{n.toString
r=o.px(s,n)}p=o.kJ(r)
o.I=a===0?r:null
if(p!==s){o.at=p
return!1}return!0},
jZ(a){var s
this.P2(a)
if(!(a instanceof A.kM))return
s=a.I
if(s!=null)this.I=s},
nK(a,b){var s=a+this.gqi()
return this.OW(s,Math.max(s,b-this.gqi()))},
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
o=n.ar
return new A.m6(o,l,s,r,q,p)},
$im6:1}
A.q4.prototype={
k5(a){return new A.q4(!1,this.hf(a))},
glz(){return this.b}}
A.oI.prototype={
k5(a){return new A.oI(this.hf(a))},
Ty(a){var s,r
if(a instanceof A.kM){s=a.ghz(a)
s.toString
return s}s=a.at
s.toString
r=a.ax
r.toString
return s/r},
Tz(a,b){var s
if(a instanceof A.kM)return a.kJ(b)
s=a.ax
s.toString
return b*s},
lF(a,b){var s,r,q,p,o,n=this
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
q=n.gph()
p=n.Ty(a)
s=q.c
if(b<-s)p-=0.5
else if(b>s)p+=0.5
o=n.Tz(a,B.d.As(p))
s=a.at
s.toString
if(o!==s){s=n.gkT()
r=a.at
r.toString
return new A.ko(o,A.z1(s,r-o,b),q)}return null}}
A.oK.prototype={
ai(){return new A.Ob(B.m)}}
A.Ob.prototype={
aA(){this.aS()
this.d=this.a.r.z},
Tp(a){var s,r
switch(this.a.e.a){case 0:s=a.a4(t.I)
s.toString
r=A.ag2(s.w)
this.a.toString
return r
case 1:return B.A}},
L(a){var s,r,q=this,p=null,o=q.Tp(a),n=q.a,m=n.w
if(m==null){n=n.at
n=n==null?p:n.jB(a)}else n=m
n=new A.oI(B.zB.hf(n))
n=new A.q4(!1,p).hf(n)
m=q.a
s=m.Q
r=m.r
m=m.at
if(m==null)m=A.Js(a).a0z(!1)
return new A.cI(new A.acd(q),A.alL(o,r,s,new A.q4(!1,n),p,m,new A.ace(q,o)),p,t.Bf)}}
A.acd.prototype={
$1(a){var s,r,q,p,o
if(a.by$===0&&this.a.a.y!=null&&a instanceof A.fh){s=t.y9.a(a.a)
r=s.c
r.toString
q=s.a
q.toString
p=s.b
p.toString
p=Math.max(0,A.H(r,q,p))
q=s.d
q.toString
o=B.d.b2(p/Math.max(1,q*s.f))
r=this.a
if(o!==r.d){r.d=o
r.a.y.$1(o)}}return!1},
$S:24}
A.ace.prototype={
$2(a,b){var s=this.a.a
return new A.mV(this.b,b,0,B.Ei,s.as,A.a([new A.JP(s.r.as,!0,s.z,null)],t.E),null)},
$S:332}
A.hN.prototype={
gmn(){return!0},
gxK(){return!1},
HG(a){return!0}}
A.I1.prototype={
aD(a){var s=new A.IU(this.d,0,!1,!1,A.aq())
s.aE()
return s},
aG(a,b){b.sa4r(this.d)
b.sa4R(0)
b.sa_K(!1)
b.sa_J(!1)}}
A.a0e.prototype={}
A.a1H.prototype={}
A.D9.prototype={
wn(a){return this.Wl(a)},
Wl(a){var s=0,r=A.a4(t.H),q,p=this,o,n,m
var $async$wn=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:n=A.eb(a.b)
m=p.a
if(!m.T(0,n)){s=1
break}m=m.j(0,n)
m.toString
o=a.a
if(o==="Menu.selectedCallback"){m.ga6E().$0()
m.ga4m()
o=$.ak.I$.f.f.e
o.toString
A.arj(o,m.ga4m(),t.r)}else if(o==="Menu.opened")m.ga6D(m).$0()
else if(o==="Menu.closed")m.ga6C(m).$0()
case 1:return A.a2(q,r)}})
return A.a3($async$wn,r)}}
A.oO.prototype={
bX(a){return this.f!=a.f}}
A.km.prototype={
ai(){return new A.Pk(null,A.z(t.wb,t.M),null,!0,null,B.m)}}
A.Pk.prototype={
gcB(){return this.a.d},
im(a,b){},
L(a){return A.a8p(this.be$,this.a.c)}}
A.x6.prototype={
bX(a){return a.f!=this.f}}
A.vO.prototype={
ai(){return new A.yD(B.m)}}
A.yD.prototype={
b4(){var s,r=this
r.cu()
s=r.c
s.toString
r.r=A.p_(s)
r.wk()
if(r.d==null){r.a.toString
r.d=!1}},
aW(a){this.bi(a)
this.wk()},
gEN(){this.a.toString
return!1},
wk(){var s,r=this
if(r.gEN()&&!r.w){r.w=!0;++$.kl.x2$
s=$.h3.cd$
s===$&&A.b()
s.ga5r().b5(new A.acH(r),t.P)}},
XP(){var s,r=this
r.e=!1
r.f=null
s=$.h3.cd$
s===$&&A.b()
s.H(0,r.gwJ())
r.wk()},
m(){if(this.e){var s=$.h3.cd$
s===$&&A.b()
s.H(0,this.gwJ())}this.aM()},
L(a){var s,r,q=this,p=q.d
p.toString
if(p&&q.gEN())return B.fL
p=q.r
if(p==null)p=q.f
s=q.a
r=s.d
return A.a8p(p,new A.km(s.c,r,null))}}
A.acH.prototype={
$1(a){var s,r=this.a
r.w=!1
if(r.c!=null){s=$.h3.cd$
s===$&&A.b()
s.S(0,r.gwJ())
r.aw(new A.acG(r,a))}$.kl.Hq()},
$S:333}
A.acG.prototype={
$0(){var s=this.a
s.f=this.b
s.e=!0
s.d=!1},
$S:0}
A.du.prototype={
glM(a){return!0},
m(){var s=this,r=s.c
if(r!=null){r=r.f0$.A(0,s)
r.toString
s.H(0,r)
s.c=s.b=null}s.dF()
s.a=!0}}
A.hX.prototype={
yo(a){},
mp(a,b){var s,r,q=this,p=q.be$
p=p==null?null:J.dV(p.giF(),b)
s=p===!0
r=s?a.m7(J.aN(q.be$.giF(),b)):a.rq()
if(a.b==null){a.b=b
a.c=q
p=new A.a3i(q,a)
a.S(0,p)
q.f0$.l(0,a,p)}a.Jr(r)
if(!s&&a.glM(a)&&q.be$!=null)q.xh(a)},
of(){var s,r,q=this
if(q.f1$!=null){s=q.be$
s=s==null?null:s.e
s=s==q.gcB()||q.gmt()}else s=!0
if(s)return
r=q.be$
if(q.lu(q.f1$,!1))if(r!=null)r.m()},
gmt(){var s,r,q=this
if(q.dK$)return!0
if(q.gcB()==null)return!1
s=q.c
s.toString
r=A.p_(s)
if(r!=q.f1$){if(r==null)s=null
else{s=r.c
s=s==null?null:s.d
s=s===!0}s=s===!0}else s=!1
return s},
lu(a,b){var s,r,q=this
if(q.gcB()==null||a==null)return q.G6(null,b)
if(b||q.be$==null){s=q.gcB()
s.toString
return q.G6(a.a_S(s,q),b)}s=q.be$
s.toString
r=q.gcB()
r.toString
s.a59(r)
r=q.be$
r.toString
a.hV(r)
return!1},
G6(a,b){var s,r=this,q=r.be$
if(a==q)return!1
r.be$=a
if(!b){if(a!=null){s=r.f0$
new A.b9(s,A.n(s).h("b9<1>")).Z(0,r.gZu())}r.yo(q)}return!0},
xh(a){var s,r=a.glM(a),q=this.be$
if(r){if(q!=null){r=a.b
r.toString
s=a.my()
if(!J.f(J.aN(q.giF(),r),s)||!J.dV(q.giF(),r)){J.cD(q.giF(),r,s)
q.lf()}}}else if(q!=null){r=a.b
r.toString
q.a51(0,r,t.K)}}}
A.a3i.prototype={
$0(){var s=this.a
if(s.be$==null)return
s.xh(this.b)},
$S:0}
A.aee.prototype={
$2(a,b){if(!a.a)a.H(0,b)},
$S:33}
A.RC.prototype={
aW(a){this.bi(a)
this.of()},
b4(){var s,r,q,p,o=this
o.cu()
s=o.be$
r=o.gmt()
q=o.c
q.toString
q=A.p_(q)
o.f1$=q
p=o.lu(q,r)
if(r){o.im(s,o.dK$)
o.dK$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.f0$.Z(0,new A.aee())
s=r.be$
if(s!=null)s.m()
r.be$=null
r.aM()}}
A.bU.prototype={
sn(a,b){var s=this.y
if(b==null?s!=null:b!==s){this.y=b
this.yq(s)}},
Jr(a){this.y=a}}
A.hc.prototype={
rq(){return this.cy},
yq(a){this.aB()},
m7(a){return A.n(this).h("hc.T").a(a)},
my(){var s=this.y
return s==null?A.n(this).h("bU.T").a(s):s}}
A.yC.prototype={
m7(a){return this.PE(a)},
my(){var s=this.PF()
s.toString
return s}}
A.vK.prototype={}
A.vJ.prototype={}
A.aef.prototype={
$2(a,b){if(!a.a)a.H(0,b)},
$S:33}
A.p1.prototype={}
A.Ja.prototype={
ai(){return new A.qw(new A.Ph($.bu()),null,A.z(t.wb,t.M),null,!0,null,B.m,this.$ti.h("qw<1>"))}}
A.vP.prototype={
F(){return"RouteInformationReportingType."+this.b}}
A.qw.prototype={
gcB(){return this.a.r},
aA(){var s,r=this
r.aS()
s=r.a.c
if(s!=null)s.S(0,r.gqe())
r.a.f.ZT(r.gw1())
r.a.e.S(0,r.gw6())},
im(a,b){var s,r,q=this,p=q.f
q.mp(p,"route")
s=p.y
r=s==null
if((r?A.n(p).h("bU.T").a(s):s)!=null){p=r?A.n(p).h("bU.T").a(s):s
p.toString
q.qy(p,new A.acW(q))}else{p=q.a.c
if(p!=null)q.qy(p.a,new A.acX(q))}},
Yh(){var s=this
if(s.w||s.a.c==null)return
s.w=!0
$.bO.ax$.push(s.gXS())},
XT(a){var s,r,q,p,o=this
o.w=!1
s=o.f
r=s.y
q=r==null
if((q?A.n(s).h("bU.T").a(r):r)!=null){s=q?A.n(s).h("bU.T").a(r):r
s.toString
r=o.a.c
r.toString
q=o.e
q.toString
if(q!==B.Tx)p=q===B.lm&&r.b.a==s.a
else p=!0
B.fs.tj("selectMultiEntryHistory",t.H)
q=s.a
q.toString
A.am8(q,p,s.b)
r.b=r.a=s}o.e=B.lm},
Y1(){this.a.e.ga6q()
this.a.toString
return null},
qp(){var s=this
s.f.sn(0,s.Y1())
if(s.e==null)s.e=B.lm
s.Yh()},
b4(){var s,r=this
r.r=!0
r.Ql()
s=r.a.c
if(s!=null&&r.r)r.qy(s.a,new A.acV(r))
r.r=!1
r.qp()},
aW(a){var s,r,q,p=this
p.Qm(a)
s=p.a
r=a.c
q=s.c==r
if(q)s.f===a.f
p.d=new A.L()
if(!q){s=r==null
if(!s)r.H(0,p.gqe())
q=p.a.c
if(q!=null)q.S(0,p.gqe())
s=s?null:r.a
r=p.a.c
if(s!=(r==null?null:r.a))p.Ex()}s=a.f
if(p.a.f!==s){r=p.gw1()
s.a53(r)
p.a.f.ZT(r)}p.a.toString
s=p.gw6()
a.e.H(0,s)
p.a.e.S(0,s)
p.qp()},
m(){var s=this,r=s.a.c
if(r!=null)r.H(0,s.gqe())
s.a.f.a53(s.gw1())
s.a.e.H(0,s.gw6())
s.d=null
s.Qn()},
qy(a,b){var s,r,q=this
q.r=!1
q.d=new A.L()
s=q.a.d
s.toString
r=q.c
r.toString
s.a6H(a,r).b5(q.XB(q.d,b),t.H)},
XB(a,b){return new A.acT(this,a,b)},
Ex(){var s=this
s.r=!0
s.qy(s.a.c.a,new A.acQ(s))},
TS(){var s=this
s.d=new A.L()
return s.a.e.a6I().b5(s.V4(s.d),t.y)},
V4(a){return new A.acR(this,a)},
FN(){this.aw(new A.acU())
this.qp()
return new A.bn(null,t.E8)},
V5(){this.aw(new A.acS())
this.qp()},
L(a){var s=this.be$,r=this.a,q=r.c,p=r.f,o=r.d
r=r.e
return A.a8p(s,new A.Pp(q,p,o,r,this,new A.hl(r.gra(),null),null))}}
A.acW.prototype={
$0(){return this.a.a.e.ga6f()},
$S(){return this.a.$ti.h("ah<~>(1)()")}}
A.acX.prototype={
$0(){return this.a.a.e.ga6e()},
$S(){return this.a.$ti.h("ah<~>(1)()")}}
A.acV.prototype={
$0(){return this.a.a.e.gMv()},
$S(){return this.a.$ti.h("ah<~>(1)()")}}
A.acT.prototype={
$1(a){var s=0,r=A.a4(t.H),q,p=this,o,n
var $async$$1=A.a0(function(b,c){if(b===1)return A.a1(c,r)
while(true)switch(s){case 0:o=p.a
n=p.b
if(o.d!=n){s=1
break}s=3
return A.a5(p.c.$0().$1(a),$async$$1)
case 3:if(o.d==n)o.FN()
case 1:return A.a2(q,r)}})
return A.a3($async$$1,r)},
$S(){return this.a.$ti.h("ah<~>(1)")}}
A.acQ.prototype={
$0(){return this.a.a.e.gMv()},
$S(){return this.a.$ti.h("ah<~>(1)()")}}
A.acR.prototype={
$1(a){var s=this.a
if(this.b!=s.d)return new A.bn(!0,t.a9)
s.FN()
return new A.bn(a,t.a9)},
$S:335}
A.acU.prototype={
$0(){},
$S:0}
A.acS.prototype={
$0(){},
$S:0}
A.Pp.prototype={
bX(a){if(this.f==a.f)this.r===a.r
return!0}}
A.Ph.prototype={
rq(){return null},
yq(a){this.aB()},
m7(a){var s
if(a==null)return null
t.DI.a(a)
s=J.bK(a)
return new A.p1(A.cv(s.gJ(a)),s.gV(a))},
my(){var s,r=this,q=r.y,p=q==null
if((p?A.n(r).h("bU.T").a(q):q)==null)q=null
else{s=(p?A.n(r).h("bU.T").a(q):q).a
q=[s,(p?A.n(r).h("bU.T").a(q):q).b]}return q}}
A.qK.prototype={
aW(a){this.bi(a)
this.of()},
b4(){var s,r,q,p,o=this
o.cu()
s=o.be$
r=o.gmt()
q=o.c
q.toString
q=A.p_(q)
o.f1$=q
p=o.lu(q,r)
if(r){o.im(s,o.dK$)
o.dK$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.f0$.Z(0,new A.aef())
s=r.be$
if(s!=null)s.m()
r.be$=null
r.aM()}}
A.oG.prototype={
gtI(){return this.e},
jf(){var s,r=this,q=A.aht(r.gRn(),!1)
r.k4=q
r.goS()
s=A.aht(r.gRp(),!0)
r.p1=s
B.b.K(r.e,A.a([q,s],t.tD))
r.OP()},
kb(a){var s,r=this
r.OK(a)
s=r.at.Q
s===$&&A.b()
if(s===B.O&&!r.Q)r.a.IQ(r)
return!0},
m(){B.b.X(this.e)
this.OO()}}
A.dS.prototype={
gbG(a){return this.as},
gBr(){return this.ax},
Vq(a){var s,r=this
switch(a.a){case 3:s=r.e
if(s.length!==0){s=B.b.gJ(s)
r.gmn()
s.smn(!0)}s=r.z
if(s!=null){s.a.$0()
s.a=null}r.z=null
break
case 1:case 2:s=r.e
if(s.length!==0)B.b.gJ(s).smn(!1)
if(r.z==null)r.z=$.bO.a5i(B.Fd)
break
case 0:if(!r.ga3t()){r.a.IQ(r)
r.Q=!0
s=r.z
if(s!=null){s.a.$0()
s.a=null}r.z=null}break}},
jf(){var s=this,r=s.gLh(s),q=s.gLh(s),p=s.glG(),o=s.a
o.toString
o=s.at=A.dW(p,r,q,null,o)
o.bo()
p=o.aT$
p.b=!0
p.a.push(s.gEy())
s.as=o
s.O8()
p=s.as
if(p.gb1(p)===B.T&&s.e.length!==0){p=B.b.gJ(s.e)
s.gmn()
p.smn(!0)}},
ob(){this.OM()
return this.at.cn(0)},
o9(){this.OH()
var s=this.at
s.sn(0,s.b)},
ym(a){var s,r
if(a instanceof A.dS){s=this.at
s.toString
r=a.at.x
r===$&&A.b()
s.sn(0,r)}this.ON(a)},
kb(a){this.ch=a
this.at.fR(0)
this.O6(a)
return!0},
lJ(a){this.H2(a)
this.OL(a)},
oa(a){this.H2(a)
this.OI(a)},
H2(a){var s,r,q,p,o,n,m,l=this,k={},j=l.CW
l.CW=null
if(a instanceof A.dS&&l.HG(a)&&!0){s=l.ax.c
if(s!=null){r=s instanceof A.mO?s.a:s
r.toString
q=a.as
q.toString
p=r.gn(r)
o=q.x
o===$&&A.b()
if(!J.f(p,o)){p=q.Q
p===$&&A.b()
p=p===B.T||p===B.O}else p=!0
o=a.y.a
if(p)l.lr(q,o)
else{k.a=null
p=new A.a8k(l,q,a)
l.CW=new A.a8i(k,q,p)
q.bo()
n=q.aT$
n.b=!0
n.a.push(p)
m=A.ahX(r,q,new A.a8j(k,l,a))
k.a=m
l.lr(m,o)}}else l.lr(a.as,a.y.a)}else l.YA(B.ci)
if(j!=null)j.$0()},
lr(a,b){this.ax.saJ(0,a)
if(b!=null)b.b5(new A.a8h(this,a),t.P)},
YA(a){return this.lr(a,null)},
m(){var s=this,r=s.as
if(r!=null)r.bV(s.gEy())
r=s.z
if(r!=null){r.a.$0()
r.a=null}s.z=null
r=s.at
if(r!=null)r.m()
s.y.cj(0,s.ch)
s.O7()},
glG(){return"TransitionRoute"},
i(a){return"TransitionRoute(animation: "+A.h(this.at)+")"}}
A.a8k.prototype={
$1(a){var s,r
switch(a.a){case 3:case 0:s=this.a
s.lr(this.b,this.c.y.a)
r=s.CW
if(r!=null){r.$0()
s.CW=null}break
case 1:case 2:break}},
$S:3}
A.a8i.prototype={
$0(){this.b.bV(this.c)
var s=this.a.a
if(s!=null)s.m()},
$S:0}
A.a8j.prototype={
$0(){var s,r=this.b
r.lr(this.a.a.a,this.c.y.a)
s=r.CW
if(s!=null){s.$0()
r.CW=null}},
$S:0}
A.a8h.prototype={
$1(a){var s=this.a.ax,r=this.b
if(s.c==r){s.saJ(0,B.ci)
if(r instanceof A.mO)r.m()}},
$S:9}
A.Fg.prototype={
gLr(){var s=this.ki$
return s!=null&&s.length!==0}}
A.Mf.prototype={
ia(a,b){A.a0p(this.e,t.z).gxK()
return!1},
cZ(a){return A.ahq(this.e).K3()}}
A.y8.prototype={
bX(a){var s=this
return s.f!==a.f||s.r!==a.r||s.w!==a.w||s.x!==a.x}}
A.qi.prototype={
ai(){return new A.n9(A.ah1(!0,B.ZS.i(0)+" Focus Scope",!1),A.ahF(),B.m,this.$ti.h("n9<1>"))}}
A.n9.prototype={
aA(){var s,r,q=this
q.aS()
s=A.a([],t.ro)
r=q.a.c.fy
if(r!=null)s.push(r)
r=q.a.c.go
if(r!=null)s.push(r)
q.e=new A.y6(s)
if(q.a.c.gkp()){q.a.c.a.a.toString
s=!0}else s=!1
if(s){s=q.a.c.a.x.gdu()
if(s!=null)s.mK(q.f)}},
aW(a){var s,r=this
r.bi(a)
if(r.a.c.gkp()){r.a.c.a.a.toString
s=!0}else s=!1
if(s){s=r.a.c.a.x.gdu()
if(s!=null)s.mK(r.f)}},
b4(){this.cu()
this.d=null},
Tc(){this.aw(new A.abS(this))},
m(){this.f.m()
this.aM()},
gGc(){var s=this.a.c.fy
if((s==null?null:s.gb1(s))!==B.al){s=this.a.c.a
s=s==null?null:s.CW.a
s=s===!0}else s=!0
return s},
L(a){var s,r,q=this,p=null,o=q.a.c,n=o.gkp(),m=q.a.c
if(!m.gtd()){m=m.ki$
m=m!=null&&m.length!==0}else m=!0
s=q.a.c
s=s.gtd()||s.yF$>0
r=q.a.c
return A.jz(o.c,new A.abW(q),new A.y8(n,m,s,o,new A.uZ(r.fx,new A.oJ(new A.hl(new A.abX(q),p),r.k3,p),p),p))}}
A.abS.prototype={
$0(){this.a.d=null},
$S:0}
A.abW.prototype={
$2(a,b){var s=this.a.a.c.c.a
b.toString
return new A.km(b,s,null)},
$S:336}
A.abX.prototype={
$1(a){var s,r=null,q=A.aX([B.C7,new A.Mf(a,new A.bi(A.a([],t.B8),t.dc))],t.n,t.nT),p=this.a,o=p.e
o===$&&A.b()
s=p.d
if(s==null)s=p.d=new A.h0(new A.hl(new A.abU(p),r),p.a.c.k2)
return A.SK(q,new A.oO(p.r,B.bM,B.Ut,A.akt(!1,new A.h0(A.jz(o,new A.abV(p),s),r),r,r,p.f),r))},
$S:337}
A.abV.prototype={
$2(a,b){var s,r,q=this.a,p=q.a.c,o=p.fy
o.toString
s=p.go
s.toString
r=p.a
r=r==null?null:r.CW
if(r==null)r=A.jb(!1)
return p.HE(a,o,s,A.jz(r,new A.abT(q),b))},
$S:29}
A.abT.prototype={
$2(a,b){var s=this.a,r=s.gGc()
s.f.sci(!r)
return new A.hz(r,null,b,null)},
$S:338}
A.abU.prototype={
$1(a){var s,r=this.a.a.c,q=r.fy
q.toString
s=r.go
s.toString
return r.a_y(a,q,s)},
$S:10}
A.k8.prototype={
aw(a){var s,r=this.k1
if(r.gbn()!=null){r=r.gbn()
if(r.a.c.gkp())if(!r.gGc()){r.a.c.a.a.toString
s=!0}else s=!1
else s=!1
if(s){s=r.a.c.a.x.gdu()
if(s!=null)s.mK(r.f)}r.aw(a)}else a.$0()},
HE(a,b,c,d){return d},
jf(){var s=this
s.Pc()
s.fy=A.In(A.dS.prototype.gbG.call(s,s))
s.go=A.In(A.dS.prototype.gBr.call(s))},
ob(){var s,r=this,q=r.k1
if(q.gbn()!=null){r.a.a.toString
s=!0}else s=!1
if(s){s=r.a.x.gdu()
if(s!=null)s.mK(q.gbn().f)}return r.Pb()},
o9(){var s,r=this,q=r.k1
if(q.gbn()!=null){r.a.a.toString
s=!0}else s=!1
if(s){s=r.a.x.gdu()
if(s!=null)s.mK(q.gbn().f)}r.P9()},
stC(a){var s,r=this
if(r.fx===a)return
r.aw(new A.a0q(r,a))
s=r.fy
s.toString
s.saJ(0,r.fx?B.d1:A.dS.prototype.gbG.call(r,r))
s=r.go
s.toString
s.saJ(0,r.fx?B.ci:A.dS.prototype.gBr.call(r))
r.nT()},
fe(){var s=0,r=A.a4(t.ij),q,p=this,o,n,m,l
var $async$fe=A.a0(function(a,b){if(a===1)return A.a1(b,r)
while(true)switch(s){case 0:p.k1.gbn()
o=A.aA(p.id,!0,t.CQ),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}l=J
s=6
return A.a5(o[m].$0(),$async$fe)
case 6:if(!l.f(b,!0)){q=B.Ty
s=1
break}case 4:++m
s=3
break
case 5:q=p.Pl()
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$fe,r)},
yh(a){this.OJ(a)
this.nT()},
nT(){var s,r=this
r.OG()
r.aw(new A.a0o())
s=r.k4
s===$&&A.b()
s.fM()
s=r.p1
s===$&&A.b()
r.goS()
s.soS(!0)},
rh(){this.OF()
var s=this.k4
s===$&&A.b()
s.fM()
s=this.k1
if(s.gbn()!=null)s.gbn().Tc()},
Ro(a){var s,r,q=this,p=null
q.ga_p()
q.gxK()
s=q.ga_q()
r=q.fy
if(r.gb1(r)!==B.al){r=q.fy
r=r.gb1(r)===B.O}else r=!0
q.gxK()
return new A.hz(r,p,new A.uE(p,!1,p,!0,s,p),p)},
Rq(a){var s=this,r=null,q=s.ok
return q==null?s.ok=A.dO(r,new A.qi(s,s.k1,A.n(s).h("qi<1>")),!1,r,!1,r,r,r,r,r,r,r,r,r,r,r,B.T7,r,r,r):q},
i(a){return"ModalRoute("+this.b.i(0)+", animation: "+A.h(this.as)+")"}}
A.a0q.prototype={
$0(){this.a.fx=this.b},
$S:0}
A.a0o.prototype={
$0(){},
$S:0}
A.qh.prototype={
fe(){var s=0,r=A.a4(t.ij),q,p=this,o
var $async$fe=A.a0(function(a,b){if(a===1)return A.a1(b,r)
while(true)switch(s){case 0:o=p.ki$
if(o!=null&&o.length!==0){q=B.B8
s=1
break}q=p.OQ()
s=1
break
case 1:return A.a2(q,r)}})
return A.a3($async$fe,r)},
kb(a){var s,r,q=this,p=q.ki$
if(p!=null&&p.length!==0){s=p.pop()
s.b=null
s.a6k()
r=s.c&&--q.yF$===0
if(q.ki$.length===0||r)q.nT()
return!1}q.Pa(a)
return!0}}
A.Jm.prototype={
L(a){var s,r,q,p=t.l,o=a.a4(p).f.f,n=Math.max(o.a,0),m=this.d,l=m?o.b:0
l=Math.max(l,0)
s=Math.max(o.c,0)
r=this.f
q=r?o.d:0
return new A.hM(new A.bo(n,l,s,Math.max(q,0)),new A.f5(a.a4(p).f.KK(r,!0,!0,m),this.x,null),null)}}
A.Jq.prototype={
KQ(){},
Im(a,b){if(b!=null)b.cS(new A.w1(null,a,b,0))},
In(a,b,c){b.cS(A.ahG(b,null,null,a,c))},
rG(a,b,c){b.cS(new A.hL(null,c,0,a,b,0))},
Il(a,b){b.cS(new A.j1(null,a,b,0))},
nL(){},
m(){},
i(a){return"<optimized out>#"+A.bL(this)}}
A.jW.prototype={
nL(){this.a.fg(0)},
ghM(){return!1},
gfK(){return!1},
gdW(){return 0}}
A.Ze.prototype={
ghM(){return!1},
gfK(){return!1},
gdW(){return 0},
m(){this.b.$0()
this.pT()}}
A.a4d.prototype={
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
p=o.R6(s,q)
if(p===0)return
s=o.a
if(A.afi(s.w.a.c))p=-p
s.AO(p>0?B.ln:B.lo)
r=s.at
r.toString
s.uU(r-s.r.xG(s,p))},
m(){this.x=null
this.b.$0()},
i(a){return"<optimized out>#"+A.bL(this)}}
A.WY.prototype={
Im(a,b){var s=t.o5.a(this.b.x)
if(b!=null)b.cS(new A.w1(s,a,b,0))},
In(a,b,c){b.cS(A.ahG(b,null,t.mF.a(this.b.x),a,c))},
rG(a,b,c){b.cS(new A.hL(t.mF.a(this.b.x),c,0,a,b,0))},
Il(a,b){var s=this.b.x
b.cS(new A.j1(s instanceof A.fN?s:null,a,b,0))},
ghM(){var s=this.b
return(s==null?null:s.w)!==B.dJ},
gfK(){return!0},
gdW(){return 0},
m(){this.b=null
this.pT()},
i(a){return"<optimized out>#"+A.bL(this)+"("+A.h(this.b)+")"}}
A.Ay.prototype={
KQ(){var s=this.a,r=this.b
r===$&&A.b()
s.fg(r.gdW())},
nL(){var s=this.a,r=this.b
r===$&&A.b()
s.fg(r.gdW())},
x6(){var s=this.b
s===$&&A.b()
s=s.x
s===$&&A.b()
if(!(Math.abs(this.a.uU(s))<1e-10)){s=this.a
s.eZ(new A.jW(s))}},
wT(){this.a.fg(0)},
rG(a,b,c){var s=this.b
s===$&&A.b()
b.cS(new A.hL(null,c,s.gdW(),a,b,0))},
gfK(){return!0},
gdW(){var s=this.b
s===$&&A.b()
return s.gdW()},
m(){var s=this.b
s===$&&A.b()
s.m()
this.pT()},
i(a){var s=A.bL(this),r=this.b
r===$&&A.b()
return"<optimized out>#"+s+"("+r.i(0)+")"},
ghM(){return this.c}}
A.DN.prototype={
x6(){var s=this.a,r=this.c
r===$&&A.b()
r=r.x
r===$&&A.b()
if(s.uU(r)!==0){s=this.a
s.eZ(new A.jW(s))}},
wT(){var s=this.a,r=this.c
r===$&&A.b()
s.fg(r.gdW())},
rG(a,b,c){var s=this.c
s===$&&A.b()
b.cS(new A.hL(null,c,s.gdW(),a,b,0))},
ghM(){return!0},
gfK(){return!0},
gdW(){var s=this.c
s===$&&A.b()
return s.gdW()},
m(){var s=this.b
s===$&&A.b()
s.ey(0)
s=this.c
s===$&&A.b()
s.m()
this.pT()},
i(a){var s=A.bL(this),r=this.c
r===$&&A.b()
return"<optimized out>#"+s+"("+r.i(0)+")"}}
A.vW.prototype={
pc(a,b,c,d){var s,r=this
if(b.a==null){s=$.eJ.fF$
s===$&&A.b()
s=s.T(0,c)}else s=!0
if(s){r.b.pc(a,b,c,d)
return}s=r.a
if(s.gaQ(s)==null)return
s=s.gaQ(s)
s.toString
if(A.avK(s)){$.bO.pE(new A.a49(r,a,b,c,d))
return}r.b.pc(a,b,c,d)},
oO(a,b,c){return this.b.oO(0,b,c)},
oP(a,b){return this.b.oP(a,b)},
tB(a){return this.b.tB(a)}}
A.a49.prototype={
$1(a){var s=this
A.dE(new A.a48(s.a,s.b,s.c,s.d,s.e))},
$S:2}
A.a48.prototype={
$0(){var s=this
return s.a.pc(s.b,s.c,s.d,s.e)},
$S:0}
A.qV.prototype={
F(){return"AndroidOverscrollIndicator."+this.b}}
A.Jr.prototype={
I3(a,b,c,d,e,f){return new A.ae6(this,f,c!==!1,d,e,b,a)},
a0z(a){return this.I3(null,null,null,null,null,a)},
a0H(a,b,c){return this.I3(null,a,b,null,null,c)},
jA(a){return A.l0()},
gyu(){return B.Bt},
re(a,b,c){var s=null
switch(this.jA(a)){case B.bm:case B.bc:case B.bn:return A.avn(b,c.b,B.cl,s,s,A.A7(),B.v,s,s,s,s,B.d8,s)
case B.aC:case B.bl:case B.aD:return b}},
rb(a,b,c){var s
switch(this.jA(a)){case B.aD:case B.bm:case B.bc:case B.bn:s=1
break
case B.aC:s=2
break
case B.bl:s=3
break
default:s=null
break}if(s)c$0:for(;!0;)switch(s){case 1:return b
case 2:switch(1){case 1:break}if(2)c$1:for(;!0;)switch(2){case 1:return new A.po(c.a,B.R,b,null)
case 2:s=3
continue c$0}break c$0
case 3:return new A.oc(c.a,B.l,b,null)}},
u8(a){switch(this.jA(a)){case B.aD:return new A.a4a()
case B.bc:return new A.a4b()
case B.aC:case B.bl:case B.bm:case B.bn:return new A.a4c()}},
jB(a){switch(this.jA(a)){case B.aD:return B.CS
case B.bc:return B.CT
case B.aC:case B.bl:case B.bm:case B.bn:return B.Eo}},
i(a){return"ScrollBehavior"}}
A.a4a.prototype={
$1(a){return A.atu(a.gc9(a))},
$S:339}
A.a4b.prototype={
$1(a){var s=a.gc9(a),r=t.pa
return new A.oy(A.b3(20,null,!1,r),s,A.b3(20,null,!1,r))},
$S:340}
A.a4c.prototype={
$1(a){return new A.h7(a.gc9(a),A.b3(20,null,!1,t.pa))},
$S:119}
A.ae6.prototype={
gyu(){var s=this.f
return s==null?B.Bt:s},
rb(a,b,c){if(this.c)return this.a.rb(a,b,c)
return b},
re(a,b,c){if(this.b)return this.a.re(a,b,c)
return b},
jB(a){var s=this.a.jB(a)
return s},
u8(a){return this.a.u8(a)},
i(a){return"_WrappedScrollBehavior"}}
A.vX.prototype={
bX(a){var s
if(A.C(this.f)===A.C(a.f))s=!1
else s=!0
return s}}
A.p5.prototype={
hd(a,b,c){return this.a_i(a,b,c)},
a_i(a,b,c){var s=0,r=A.a4(t.H),q=this,p,o,n
var $async$hd=A.a0(function(d,e){if(d===1)return A.a1(e,r)
while(true)switch(s){case 0:n=A.a([],t.iJ)
for(p=q.d,o=0;o<p.length;++o)n.push(p[o].hd(a,b,c))
s=2
return A.a5(A.Eu(n,t.H),$async$hd)
case 2:return A.a2(null,r)}})
return A.a3($async$hd,r)},
ap(a){this.d.push(a)
a.S(0,this.gec())},
o7(a,b){b.H(0,this.gec())
B.b.A(this.d,b)},
m(){var s,r,q,p
for(s=this.d,r=s.length,q=this.gec(),p=0;p<s.length;s.length===r||(0,A.Q)(s),++p)s[p].H(0,q)
this.dF()},
I4(a,b,c){return A.avJ(b,null,0,!0,c,a)},
i(a){var s=A.a([],t.s),r=this.d,q=r.length
if(q===0)s.push("no clients")
else if(q===1){r=B.b.gb6(r).at
r.toString
s.push("one client, offset "+B.d.N(r,1))}else s.push(""+q+" clients")
return"<optimized out>#"+A.bL(this)+"("+B.b.bf(s,", ")+")"}}
A.h2.prototype={
fz(){var s=this,r=null,q=s.gz_()?s.geI():r,p=s.gz_()?s.geH():r,o=s.gJg()?s.gca():r,n=s.gJi()?s.gpq():r,m=s.gfv()
return new A.tr(q,p,o,n,m)},
gA3(){var s=this
return s.gca()<s.geI()||s.gca()>s.geH()},
gHx(){var s=this
return s.gca()===s.geI()||s.gca()===s.geH()},
gkh(){var s=this
return s.gpq()-A.H(s.geI()-s.gca(),0,s.gpq())-A.H(s.gca()-s.geH(),0,s.gpq())}}
A.tr.prototype={
geI(){var s=this.a
s.toString
return s},
geH(){var s=this.b
s.toString
return s},
gz_(){return this.a!=null&&this.b!=null},
gca(){var s=this.c
s.toString
return s},
gJg(){return this.c!=null},
gpq(){var s=this.d
s.toString
return s},
gJi(){return this.d!=null},
i(a){var s=this
return"FixedScrollMetrics("+B.d.N(Math.max(s.gca()-s.geI(),0),1)+"..["+B.d.N(s.gkh(),1)+"].."+B.d.N(Math.max(s.geH()-s.gca(),0),1)+")"},
gfv(){return this.e}}
A.MB.prototype={}
A.e5.prototype={}
A.KR.prototype={
Kg(a){if(t.bx.b(a))++a.by$
return!1}}
A.dN.prototype={
cb(a){this.PX(a)
a.push(this.a.i(0))}}
A.w1.prototype={
cb(a){var s
this.mY(a)
s=this.d
if(s!=null)a.push(s.i(0))}}
A.fh.prototype={
cb(a){var s
this.mY(a)
a.push("scrollDelta: "+A.h(this.e))
s=this.d
if(s!=null)a.push(s.i(0))},
gIq(){return this.d}}
A.hL.prototype={
cb(a){var s,r=this
r.mY(a)
a.push("overscroll: "+B.d.N(r.e,1))
a.push("velocity: "+B.d.N(r.f,1))
s=r.d
if(s!=null)a.push(s.i(0))}}
A.j1.prototype={
cb(a){var s
this.mY(a)
s=this.d
if(s!=null)a.push(s.i(0))},
gIq(){return this.d}}
A.KL.prototype={
cb(a){this.mY(a)
a.push("direction: "+this.d.i(0))}}
A.yM.prototype={
cb(a){var s,r
this.uL(a)
s=this.by$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.yL.prototype={
bX(a){return this.f!==a.f}}
A.kJ.prototype={
a3P(a,b){return this.d.$1(b)}}
A.w_.prototype={
ai(){return new A.w0(new A.u6(t.uk),B.m)}}
A.w0.prototype={
H(a,b){var s,r,q,p=this.d
p.toString
p=A.ax3(p)
s=A.n(p).c
for(;p.t();){r=p.c
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
Fb(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.d
if(i.b===0)return
p=A.aA(i,!0,t.cS)
for(i=p.length,o=0;o<i;++o){s=p[o]
try{if(s.a!=null)J.ar_(s,a)}catch(n){r=A.ag(n)
q=A.aB(n)
m=j instanceof A.bY?A.d_(j):null
l=A.bk("while dispatching notifications for "+A.aD(m==null?A.aU(j):m).i(0))
k=$.fA()
if(k!=null)k.$1(new A.bz(r,q,"widget library",l,new A.a4e(j),!1))}}},
L(a){var s=this
return new A.cI(new A.a4f(s),new A.cI(new A.a4g(s),new A.yL(s,s.a.c,null),null,t.Bf),null,t.iY)},
m(){this.d=null
this.aM()}}
A.a4e.prototype={
$0(){var s=null,r=this.a
return A.a([A.hp("The "+A.C(r).i(0)+" sending notification was",r,!0,B.aP,s,!1,s,s,B.ar,s,!1,!0,!0,B.b0,s,t.Ec)],t.F)},
$S:16}
A.a4f.prototype={
$1(a){var s=new A.LD(null,null,a.a,a.b,0)
s.by$=a.by$
this.a.Fb(s)
return!1},
$S:72}
A.a4g.prototype={
$1(a){this.a.Fb(a)
return!1},
$S:24}
A.LD.prototype={}
A.vY.prototype={
F(){return"ScrollDecelerationRate."+this.b}}
A.ms.prototype={
hf(a){var s=this.a
s=s==null?null:s.k5(a)
return s==null?a:s},
k5(a){return new A.ms(this.hf(a))},
xG(a,b){var s=this.a
if(s==null)return b
return s.xG(a,b)},
jG(a){var s,r=this.a
if(r==null){r=a.at
r.toString
if(r===0){r=a.z
r.toString
s=a.Q
s.toString
s=r!==s
r=s}else r=!0
return r}return r.jG(a)},
KE(a,b,c){var s=this.a
if(s==null){$.ak.toString
s=$.ci().gky()
return Math.abs(a)>Math.max(Math.abs(s.a),Math.abs(s.b))}return s.KE(a,b,c)},
nJ(a,b){var s=this.a
if(s==null)return 0
return s.nJ(a,b)},
r3(a,b,c,d){var s=this.a
if(s==null){s=b.c
s.toString
return s}return s.r3(a,b,c,d)},
lF(a,b){var s=this.a
if(s==null)return null
return s.lF(a,b)},
gkT(){var s=this.a
s=s==null?null:s.gkT()
return s==null?$.apk():s},
gph(){var s=this.a
s=s==null?null:s.gph()
return s==null?$.apl():s},
gzu(){var s=this.a
s=s==null?null:s.gzu()
return s==null?18:s},
gtw(){var s=this.a
s=s==null?null:s.gtw()
return s==null?50:s},
goT(){var s=this.a
s=s==null?null:s.goT()
return s==null?8000:s},
xQ(a){var s=this.a
if(s==null)return 0
return s.xQ(a)},
gyv(){var s=this.a
return s==null?null:s.gyv()},
glz(){return!0},
i(a){var s=this.a
if(s==null)return"ScrollPhysics"
return"ScrollPhysics -> "+s.i(0)}}
A.Ir.prototype={
k5(a){return new A.Ir(this.hf(a))},
r3(a,b,c,d){var s,r,q,p,o,n,m,l
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
l=A.H(l,p,q)}return l}}
A.rj.prototype={
k5(a){return new A.rj(this.b,this.hf(a))},
J3(a){switch(this.b.a){case 1:return 0.07*Math.pow(1-a,2)
case 0:return 0.52*Math.pow(1-a,2)}},
xG(a,b){var s,r,q,p,o,n,m
if(!a.gA3())return b
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
m=this.J3((o-Math.abs(b))/s)}else{s.toString
m=this.J3(o/s)}return J.ed(b)*A.arw(o,Math.abs(b),m)},
nJ(a,b){return 0},
lF(a,b){var s,r,q,p,o,n,m,l=this.gph()
if(Math.abs(b)>=l.c||a.gA3()){switch(this.b.a){case 1:s=1400
break
case 0:s=0
break
default:s=null}r=this.gkT()
q=a.at
q.toString
p=a.z
p.toString
o=a.Q
o.toString
n=new A.Tp(p,o,r,l)
if(q<p){n.f=new A.ko(p,A.z1(r,q-p,b),B.bK)
n.r=-1/0}else if(q>o){n.f=new A.ko(o,A.z1(r,q-o,b),B.bK)
n.r=-1/0}else{q=n.e=A.atj(0.135,q,b,s)
m=q.grW()
if(b>0&&m>o){p=q.L6(o)
n.r=p
n.f=new A.ko(o,A.z1(r,o-o,Math.min(q.dt(0,p),5000)),B.bK)}else if(b<0&&m<p){o=q.L6(p)
n.r=o
n.f=new A.ko(p,A.z1(r,p-p,Math.min(q.dt(0,o),5000)),B.bK)}else n.r=1/0}return n}return null},
gtw(){return 100},
xQ(a){return J.ed(a)*Math.min(0.000816*Math.pow(Math.abs(a),1.967),4e4)},
gyv(){return 3.5},
goT(){switch(this.b.a){case 1:return 64e3
case 0:return A.ms.prototype.goT.call(this)}},
gkT(){switch(this.b.a){case 1:return A.am_(0.3,1.3,75)
case 0:return A.ms.prototype.gkT.call(this)}}}
A.rw.prototype={
k5(a){return new A.rw(this.hf(a))},
nJ(a,b){var s,r,q=a.at
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
lF(a,b){var s,r,q,p,o=null,n=this.gph()
if(a.gA3()){s=a.at
s.toString
r=a.Q
r.toString
if(s>r)q=r
else q=o
r=a.z
r.toString
if(s<r)q=r
s=this.gkT()
r=a.at
r.toString
q.toString
return new A.ko(q,A.z1(s,r-q,Math.min(0,b)),n)}s=Math.abs(b)
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
r=new A.Uk(r,b,n)
s=Math.exp(Math.log(0.35*s/778.3530259679999)/($.ap0()-1))
r.e=s
r.f=Math.abs(b*s/3.065)
return r}}
A.p7.prototype={
F(){return"ScrollPositionAlignmentPolicy."+this.b}}
A.j2.prototype={
CB(a,b,c,d,e){if(d!=null)this.jZ(d)
this.KY()},
geI(){var s=this.z
s.toString
return s},
geH(){var s=this.Q
s.toString
return s},
gz_(){return this.z!=null&&this.Q!=null},
gca(){var s=this.at
s.toString
return s},
gJg(){return this.at!=null},
gpq(){var s=this.ax
s.toString
return s},
gJi(){return this.ax!=null},
jZ(a){var s=this,r=a.z
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
if(A.C(a)!==A.C(s))s.fr.KQ()
s.w.Bw(s.fr.ghM())
s.dy.sn(0,s.fr.gfK())},
Mw(a){var s,r,q,p=this,o=p.at
o.toString
if(a!==o){s=p.r.nJ(p,a)
o=p.at
o.toString
r=a-s
p.at=r
if(r!==o){p.xi()
p.BY()
r=p.at
r.toString
p.yp(r-o)}if(s!==0){o=p.fr
o.toString
r=p.fz()
q=$.ak.I$.z.j(0,p.w.z)
q.toString
o.rG(r,q,s)
return s}}return 0},
yQ(a){var s=this,r=s.at
r.toString
s.as=a-r
s.at=a
s.xi()
s.BY()
$.bO.ax$.push(new A.a4h(s))},
Bn(){var s,r=this.w,q=r.c
q.toString
q=A.HF(q)
if(q!=null){r=r.c
r.toString
s=this.at
s.toString
q.Lu(r,s)}},
KY(){var s,r,q
if(this.at==null){s=this.w
r=s.c
r.toString
r=A.HF(r)
if(r==null)q=null
else{s=s.c
s.toString
q=r.Ai(s)}if(q!=null)this.at=q}},
KX(a,b){if(b)this.at=a
else this.dz(a)},
Bm(){var s=this.at
s.toString
this.w.e.sn(0,s)
s=$.h3.cd$
s===$&&A.b()
s.IW()},
nN(a){if(this.ax!==a){this.ax=a
this.ch=!0}return!0},
nK(a,b){var s,r,q,p=this
if(!A.A6(p.z,a,0.001)||!A.A6(p.Q,b,0.001)||p.ch||p.db!==A.bf(p.gfv())){p.z=a
p.Q=b
p.db=A.bf(p.gfv())
s=p.ay?p.fz():null
p.ch=!1
p.CW=!0
if(p.ay){r=p.cx
r.toString
s.toString
r=!p.a0J(r,s)}else r=!1
if(r)return!1
p.ay=!0}if(p.CW){p.OX()
p.w.Mp(p.r.jG(p))
p.CW=!1}s=p.fz()
if(p.cx!=null){r=Math.max(s.gca()-s.geI(),0)
q=p.cx
if(r===Math.max(q.gca()-q.geI(),0))if(s.gkh()===p.cx.gkh()){r=Math.max(s.geH()-s.gca(),0)
q=p.cx
r=r===Math.max(q.geH()-q.gca(),0)&&s.e===p.cx.e}else r=!1
else r=!1
r=!r}else r=!0
if(r){if(!p.cy){A.dE(p.ga1n())
p.cy=!0}p.cx=p.fz()}return!0},
a0J(a,b){var s=this,r=s.r.r3(s.fr.gfK(),b,a,s.fr.gdW()),q=s.at
q.toString
if(r!==q){s.at=r
return!1}return!0},
nL(){this.fr.nL()
this.xi()},
xi(){var s,r,q,p,o,n=this,m=n.w
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
r=null}q=A.b7(t.nS)
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
if(A.aiZ(q,n.dx))return
n.dx=q
m=m.z
if(m.gbn()!=null)m.gbn().a5f(q)},
yA(a,b,c,d,e,f){var s,r,q,p,o,n=this,m=null,l=A.avr(a)
l.toString
s=f!=null&&f!==a?A.fY(f.bw(0,a),a.ghB().f5(f.ghB())):m
switch(c.a){case 0:r=l.kI(a,b,s)
q=n.z
q.toString
p=n.Q
p.toString
o=A.H(r.a,q,p)
break
case 1:r=l.kI(a,1,s)
q=n.z
q.toString
p=n.Q
p.toString
o=A.H(r.a,q,p)
r=n.at
r.toString
if(o<r)o=r
break
case 2:r=l.kI(a,0,s)
q=n.z
q.toString
p=n.Q
p.toString
o=A.H(r.a,q,p)
r=n.at
r.toString
if(o>r)o=r
break
default:o=m}r=n.at
r.toString
if(o===r)return A.bH(m,t.H)
if(e.a===B.v.a){n.dz(o)
return A.bH(m,t.H)}return n.hd(o,d,e)},
oW(a,b,c,d){var s,r=this.z
r.toString
s=this.Q
s.toString
b=A.H(b,r,s)
return this.Pe(0,b,c,d)},
eZ(a){var s,r,q=this,p=q.fr
if(p!=null){s=p.ghM()
r=q.fr.gfK()
if(r&&!a.gfK())q.yj()
q.fr.m()}else{r=!1
s=!1}q.fr=a
if(s!==a.ghM())q.w.Bw(q.fr.ghM())
q.dy.sn(0,q.fr.gfK())
if(!r&&q.fr.gfK())q.yn()},
yn(){var s=this.fr
s.toString
s.Im(this.fz(),$.ak.I$.z.j(0,this.w.z))},
yp(a){var s,r,q=this.fr
q.toString
s=this.fz()
r=$.ak.I$.z.j(0,this.w.z)
r.toString
q.In(s,r,a)},
yj(){var s,r,q=this,p=q.fr
p.toString
s=q.fz()
r=$.ak.I$.z.j(0,q.w.z)
r.toString
p.Il(s,r)
q.Bm()
q.Bn()},
a1o(){var s,r,q
this.cy=!1
s=this.w.z
if($.ak.I$.z.j(0,s)!=null){r=this.fz()
q=$.ak.I$.z.j(0,s)
q.toString
s=$.ak.I$.z.j(0,s)
if(s!=null)s.cS(new A.mr(r,q,0))}},
m(){var s=this,r=s.fr
if(r!=null)r.m()
s.fr=null
s.dy.m()
s.dF()},
cb(a){var s,r,q=this
q.Pd(a)
s=q.z
s=s==null?null:B.d.N(s,1)
r=q.Q
r=r==null?null:B.d.N(r,1)
a.push("range: "+A.h(s)+".."+A.h(r))
r=q.ax
a.push("viewport: "+A.h(r==null?null:B.d.N(r,1)))}}
A.a4h.prototype={
$1(a){this.a.as=0},
$S:2}
A.mr.prototype={
cb(a){this.PW(a)
a.push(this.a.i(0))}}
A.yK.prototype={
cb(a){var s,r
this.uL(a)
s=this.by$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.Pv.prototype={}
A.mt.prototype={
CC(a,b,c,d,e,f){var s=this
if(s.at==null&&c!=null)s.at=c
if(s.fr==null)s.eZ(new A.jW(s))},
gfv(){return this.w.a.c},
jZ(a){var s,r=this
r.OV(a)
r.fr.a=r
r.k4=a.k4
s=a.ok
if(s!=null){r.ok=s
s.a=r
a.ok=null}},
eZ(a){var s,r=this
r.k3=0
r.OZ(a)
s=r.ok
if(s!=null)s.m()
r.ok=null
if(!r.fr.gfK())r.AO(B.fx)},
fg(a){var s,r,q,p=this,o=p.r.lF(p,a)
if(o!=null){s=p.fr
s=s==null?null:s.ghM()
s=new A.Ay(s!==!1,p)
r=A.agz(null,0,p.w)
r.bo()
q=r.aZ$
q.b=!0
q.a.push(s.gx5())
r.fZ(0)
r.z=B.au
r.wZ(o).a.a.fd(s.gwS())
s.b=r
p.eZ(s)}else p.eZ(new A.jW(p))},
AO(a){var s,r,q,p=this
if(p.k4===a)return
p.k4=a
s=p.fz()
r=p.w.z
q=$.ak.I$.z.j(0,r)
q.toString
r=$.ak.I$.z.j(0,r)
if(r!=null)r.cS(new A.KL(a,s,q,0))},
hd(a,b,c){var s,r,q,p=this,o=p.at
o.toString
if(A.A6(a,o,p.r.gph().a)){p.dz(a)
return A.bH(null,t.H)}o=p.at
o.toString
s=new A.DN(p)
r=new A.b4(new A.a8($.aa,t.U),t.R)
s.b=r
o=A.agz("DrivenScrollActivity",o,p.w)
o.bo()
q=o.aZ$
q.b=!0
q.a.push(s.gx5())
o.z=B.au
o.l1(a,b,c).a.a.fd(s.gwS())
s.c!==$&&A.ex()
s.c=o
p.eZ(s)
return r.a},
dz(a){var s,r,q=this
q.eZ(new A.jW(q))
s=q.at
s.toString
if(s!==a){q.yQ(a)
q.yn()
r=q.at
r.toString
q.yp(r-s)
q.yj()}q.fg(0)},
A7(a){var s,r,q,p,o=this
if(a===0){o.fg(0)
return}s=o.at
s.toString
r=o.z
r.toString
r=Math.max(s+a,r)
q=o.Q
q.toString
p=Math.min(r,q)
if(p!==s){o.eZ(new A.jW(o))
o.AO(-a>0?B.ln:B.lo)
s=o.at
s.toString
o.dy.sn(0,!0)
o.yQ(p)
o.yn()
r=o.at
r.toString
o.yp(r-s)
o.yj()
o.fg(0)}},
m(){var s=this.ok
if(s!=null)s.m()
this.ok=null
this.P0()}}
A.Tp.prototype={
wY(a){var s,r=this,q=r.r
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
cN(a,b){return this.wY(b).cN(0,b-this.w)},
dt(a,b){return this.wY(b).dt(0,b-this.w)},
jg(a){return this.wY(a).jg(a-this.w)},
i(a){return"BouncingScrollSimulation(leadingExtent: "+A.h(this.b)+", trailingExtent: "+A.h(this.c)+")"}}
A.Uk.prototype={
cN(a,b){var s,r=this,q=r.e
q===$&&A.b()
s=A.H(b/q,0,1)
q=r.f
q===$&&A.b()
return r.b+q*(1.2*s*s*s-3.27*s*s+3.065*s)*J.ed(r.c)},
dt(a,b){var s,r=this,q=r.e
q===$&&A.b()
s=A.H(b/q,0,1)
q=r.f
q===$&&A.b()
return q*(3.6*s*s-6.54*s+3.065)*J.ed(r.c)/r.e},
jg(a){var s=this.e
s===$&&A.b()
return a>=s}}
A.Jt.prototype={
F(){return"ScrollViewKeyboardDismissBehavior."+this.b}}
A.ad4.prototype={
$2(a,b){if(!a.a)a.H(0,b)},
$S:33}
A.w3.prototype={
ai(){var s=null,r=t.J
return new A.w4(new A.Pi($.bu()),new A.bw(s,r),new A.bw(s,t.lV),new A.bw(s,r),B.zl,s,A.z(t.wb,t.M),s,!0,s,s,s,B.m)},
a6_(a,b){return this.f.$2(a,b)}}
A.a4n.prototype={
$1(a){return null},
$S:343}
A.qy.prototype={
bX(a){return this.r!==a.r}}
A.w4.prototype={
gnd(){var s=this.a.d
if(s==null){s=this.w
s.toString}return s},
H_(){var s,r,q,p=this,o=p.a.Q
if(o==null){o=p.c
o.toString
o=A.Js(o)}p.f=o
s=p.c
s.toString
s=o.jB(s)
p.r=s
o=p.a
r=o.e
if(r!=null)p.r=new A.q4(!1,r.hf(s))
else{o=o.Q
if(o!=null){s=p.c
s.toString
p.r=o.jB(s).k5(p.r)}}q=p.d
if(q!=null){p.gnd().o7(0,q)
A.dE(q.gog())}o=p.gnd()
s=p.r
s.toString
p.d=o.I4(s,p,q)
s=p.gnd()
o=p.d
o.toString
s.ap(o)},
im(a,b){var s,r,q,p=this.e
this.mp(p,"offset")
s=p.y
r=s==null
if((r?A.n(p).h("bU.T").a(s):s)!=null){q=this.d
q.toString
p=r?A.n(p).h("bU.T").a(s):s
p.toString
q.KX(p,b)}},
aA(){if(this.a.d==null)this.w=A.ahF()
this.aS()},
b4(){var s=this,r=s.c
r.toString
s.x=A.dq(r)
s.H_()
s.PZ()},
YG(a){var s,r,q,p=this,o=null,n=p.a,m=n.e
if(m==null){n=n.Q
if(n==null)m=o
else{s=p.c
s.toString
s=n.jB(s)
m=s}}r=a.e
if(r==null){n=a.Q
if(n==null)r=o
else{s=p.c
s.toString
s=n.jB(s)
r=s}}do{n=m==null
s=n?o:A.C(m)
q=r==null
if(s!=(q?o:A.C(r)))return!0
m=n?o:m.a
r=q?o:r.a}while(m!=null||r!=null)
n=p.a.d
n=n==null?o:A.C(n)
s=a.d
return n!=(s==null?o:A.C(s))},
aW(a){var s,r,q=this
q.Q_(a)
s=a.d
if(q.a.d!=s){if(s==null){s=q.w
s.toString
r=q.d
r.toString
s.o7(0,r)
q.w.m()
q.w=null}else{r=q.d
r.toString
s.o7(0,r)
if(q.a.d==null)q.w=A.ahF()}s=q.gnd()
r=q.d
r.toString
s.ap(r)}if(q.YG(a))q.H_()},
m(){var s,r=this,q=r.a.d
if(q!=null){s=r.d
s.toString
q.o7(0,s)}else{q=r.w
if(q!=null){s=r.d
s.toString
q.o7(0,s)}q=r.w
if(q!=null)q.m()}r.d.m()
r.e.m()
r.Q0()},
Mp(a){var s,r,q=this
if(a===q.ax)s=!a||A.bf(q.a.c)===q.ay
else s=!1
if(s)return
if(!a){q.as=B.zl
q.FW()}else{switch(A.bf(q.a.c).a){cas