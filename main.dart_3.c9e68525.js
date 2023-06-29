else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.zO.prototype={
I(){return"TooltipTriggerMode."+this.b}}
A.V3.prototype={}
A.qX.prototype={
I(){return"ScriptCategory."+this.b}}
A.zQ.prototype={
NM(a){switch(a.a){case 0:return this.c
case 1:return this.d
case 2:return this.e}},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.a1(b)!==A.D(s))return!1
return b instanceof A.zQ&&b.a.l(0,s.a)&&b.b.l(0,s.b)&&b.c.l(0,s.c)&&b.d.l(0,s.d)&&b.e.l(0,s.e)},
gu(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.Vr.prototype={}
A.kR.prototype={
j(a){var s=this
if(s.ghJ(s)===0)return A.aq0(s.ghK(),s.ghL())
if(s.ghK()===0)return A.aq_(s.ghJ(s),s.ghL())
return A.aq0(s.ghK(),s.ghL())+" + "+A.aq_(s.ghJ(s),0)},
l(a,b){var s=this
if(b==null)return!1
return b instanceof A.kR&&b.ghK()===s.ghK()&&b.ghJ(b)===s.ghJ(s)&&b.ghL()===s.ghL()},
gu(a){var s=this
return A.Y(s.ghK(),s.ghJ(s),s.ghL(),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.cR.prototype={
ghK(){return this.a},
ghJ(a){return 0},
ghL(){return this.b},
ag(a,b){return new A.cR(this.a-b.a,this.b-b.b)},
W(a,b){return new A.cR(this.a+b.a,this.b+b.b)},
a5(a,b){return new A.cR(this.a*b,this.b*b)},
mk(a){var s=a.a/2,r=a.b/2
return new A.r(s+this.a*s,r+this.b*r)},
Ju(a){var s=a.a/2,r=a.b/2
return new A.r(s+this.a*s,r+this.b*r)},
Nz(a){var s=a.a,r=(a.c-s)/2,q=a.b,p=(a.d-q)/2
return new A.r(s+r+this.a*r,q+p+this.b*p)},
AI(a,b){var s=b.a,r=a.a,q=(b.c-s-r)/2,p=b.b,o=a.b,n=(b.d-p-o)/2
s=s+q+this.a*q
p=p+n+this.b*n
return new A.E(s,p,s+r,p+o)},
a1(a){return this},
j(a){return A.aq0(this.a,this.b)}}
A.e_.prototype={
ghK(){return 0},
ghJ(a){return this.a},
ghL(){return this.b},
ag(a,b){return new A.e_(this.a-b.a,this.b-b.b)},
W(a,b){return new A.e_(this.a+b.a,this.b+b.b)},
a5(a,b){return new A.e_(this.a*b,this.b*b)},
a1(a){var s=this
switch(a.a){case 0:return new A.cR(-s.a,s.b)
case 1:return new A.cR(s.a,s.b)}},
j(a){return A.aq_(this.a,this.b)}}
A.B0.prototype={
a5(a,b){return new A.B0(this.a*b,this.b*b,this.c*b)},
a1(a){var s=this
switch(a.a){case 0:return new A.cR(s.a-s.b,s.c)
case 1:return new A.cR(s.a+s.b,s.c)}},
ghK(){return this.a},
ghJ(a){return this.b},
ghL(){return this.c}}
A.qN.prototype={
I(){return"RenderComparison."+this.b}}
A.u9.prototype={
I(){return"Axis."+this.b}}
A.zU.prototype={
I(){return"VerticalDirection."+this.b}}
A.mI.prototype={
I(){return"AxisDirection."+this.b}}
A.xv.prototype={
LB(a,b,c,d){return $.au().ur(a,!1,c,d)},
a6v(a){return this.LB(a,!1,null,null)},
LC(a,b,c,d){var s=$.au(),r=a.a
r.toString
return s.ur(r,!1,c,d)},
a6y(a){return this.LC(a,!1,null,null)},
$idT:1}
A.UK.prototype={
aI(){var s,r,q
for(s=this.a,s=A.kt(s,s.r),r=A.o(s).c;s.t();){q=s.d;(q==null?r.a(q):q).$0()}},
Z(a,b){this.a.D(0,b)},
G(a,b){this.a.A(0,b)}}
A.ug.prototype={
qK(a){var s=this
return new A.B1(s.gdM().ag(0,a.gdM()),s.gf7().ag(0,a.gf7()),s.gf2().ag(0,a.gf2()),s.gfw().ag(0,a.gfw()),s.gdN().ag(0,a.gdN()),s.gf6().ag(0,a.gf6()),s.gfz().ag(0,a.gfz()),s.gf1().ag(0,a.gf1()))},
D(a,b){var s=this
return new A.B1(s.gdM().W(0,b.gdM()),s.gf7().W(0,b.gf7()),s.gf2().W(0,b.gf2()),s.gfw().W(0,b.gfw()),s.gdN().W(0,b.gdN()),s.gf6().W(0,b.gf6()),s.gfz().W(0,b.gfz()),s.gf1().W(0,b.gf1()))},
j(a){var s,r,q,p,o=this
if(o.gdM().l(0,o.gf7())&&o.gf7().l(0,o.gf2())&&o.gf2().l(0,o.gfw()))if(!o.gdM().l(0,B.Y))s=o.gdM().a===o.gdM().b?"BorderRadius.circular("+B.d.N(o.gdM().a,1)+")":"BorderRadius.all("+o.gdM().j(0)+")"
else s=null
else{r=""+"BorderRadius.only("
if(!o.gdM().l(0,B.Y)){r+="topLeft: "+o.gdM().j(0)
q=!0}else q=!1
if(!o.gf7().l(0,B.Y)){if(q)r+=", "
r+="topRight: "+o.gf7().j(0)
q=!0}if(!o.gf2().l(0,B.Y)){if(q)r+=", "
r+="bottomLeft: "+o.gf2().j(0)
q=!0}if(!o.gfw().l(0,B.Y)){if(q)r+=", "
r+="bottomRight: "+o.gfw().j(0)}r+=")"
s=r.charCodeAt(0)==0?r:r}if(o.gdN().l(0,o.gf6())&&o.gf6().l(0,o.gf1())&&o.gf1().l(0,o.gfz()))if(!o.gdN().l(0,B.Y))p=o.gdN().a===o.gdN().b?"BorderRadiusDirectional.circular("+B.d.N(o.gdN().a,1)+")":"BorderRadiusDirectional.all("+o.gdN().j(0)+")"
else p=null
else{r=""+"BorderRadiusDirectional.only("
if(!o.gdN().l(0,B.Y)){r+="topStart: "+o.gdN().j(0)
q=!0}else q=!1
if(!o.gf6().l(0,B.Y)){if(q)r+=", "
r+="topEnd: "+o.gf6().j(0)
q=!0}if(!o.gfz().l(0,B.Y)){if(q)r+=", "
r+="bottomStart: "+o.gfz().j(0)
q=!0}if(!o.gf1().l(0,B.Y)){if(q)r+=", "
r+="bottomEnd: "+o.gf1().j(0)}r+=")"
p=r.charCodeAt(0)==0?r:r}r=s!=null
if(r&&p!=null)return A.i(s)+" + "+p
if(r)return s
if(p!=null)return p
return"BorderRadius.zero"},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.a1(b)!==A.D(s))return!1
return b instanceof A.ug&&b.gdM().l(0,s.gdM())&&b.gf7().l(0,s.gf7())&&b.gf2().l(0,s.gf2())&&b.gfw().l(0,s.gfw())&&b.gdN().l(0,s.gdN())&&b.gf6().l(0,s.gf6())&&b.gfz().l(0,s.gfz())&&b.gf1().l(0,s.gf1())},
gu(a){var s=this
return A.Y(s.gdM(),s.gf7(),s.gf2(),s.gfw(),s.gdN(),s.gf6(),s.gfz(),s.gf1(),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.cJ.prototype={
gdM(){return this.a},
gf7(){return this.b},
gf2(){return this.c},
gfw(){return this.d},
gdN(){return B.Y},
gf6(){return B.Y},
gfz(){return B.Y},
gf1(){return B.Y},
dS(a){var s=this,r=s.a.ts(0,B.Y),q=s.b.ts(0,B.Y)
return A.LX(a,s.c.ts(0,B.Y),s.d.ts(0,B.Y),r,q)},
qK(a){if(a instanceof A.cJ)return this.ag(0,a)
return this.DD(a)},
D(a,b){if(b instanceof A.cJ)return this.W(0,b)
return this.DC(0,b)},
ag(a,b){var s=this
return new A.cJ(s.a.ag(0,b.a),s.b.ag(0,b.b),s.c.ag(0,b.c),s.d.ag(0,b.d))},
W(a,b){var s=this
return new A.cJ(s.a.W(0,b.a),s.b.W(0,b.b),s.c.W(0,b.c),s.d.W(0,b.d))},
a5(a,b){var s=this
return new A.cJ(s.a.a5(0,b),s.b.a5(0,b),s.c.a5(0,b),s.d.a5(0,b))},
a1(a){return this}}
A.ii.prototype={
gdN(){return this.a},
gf6(){return this.b},
gfz(){return this.c},
gf1(){return this.d},
gdM(){return B.Y},
gf7(){return B.Y},
gf2(){return B.Y},
gfw(){return B.Y},
qK(a){if(a instanceof A.ii)return this.ag(0,a)
return this.DD(a)},
D(a,b){if(b instanceof A.ii)return this.W(0,b)
return this.DC(0,b)},
ag(a,b){var s=this
return new A.ii(s.a.ag(0,b.a),s.b.ag(0,b.b),s.c.ag(0,b.c),s.d.ag(0,b.d))},
W(a,b){var s=this
return new A.ii(s.a.W(0,b.a),s.b.W(0,b.b),s.c.W(0,b.c),s.d.W(0,b.d))},
a5(a,b){var s=this
return new A.ii(s.a.a5(0,b),s.b.a5(0,b),s.c.a5(0,b),s.d.a5(0,b))},
a1(a){var s=this
switch(a.a){case 0:return new A.cJ(s.b,s.a,s.d,s.c)
case 1:return new A.cJ(s.a,s.b,s.c,s.d)}}}
A.B1.prototype={
a5(a,b){var s=this
return new A.B1(s.a.a5(0,b),s.b.a5(0,b),s.c.a5(0,b),s.d.a5(0,b),s.e.a5(0,b),s.f.a5(0,b),s.r.a5(0,b),s.w.a5(0,b))},
a1(a){var s=this
switch(a.a){case 0:return new A.cJ(s.a.W(0,s.f),s.b.W(0,s.e),s.c.W(0,s.w),s.d.W(0,s.r))
case 1:return new A.cJ(s.a.W(0,s.e),s.b.W(0,s.f),s.c.W(0,s.r),s.d.W(0,s.w))}},
gdM(){return this.a},
gf7(){return this.b},
gf2(){return this.c},
gfw(){return this.d},
gdN(){return this.e},
gf6(){return this.f},
gfz(){return this.r},
gf1(){return this.w}}
A.uh.prototype={
I(){return"BorderStyle."+this.b}}
A.dp.prototype={
aM(a,b){var s=Math.max(0,this.b*b),r=b<=0?B.cv:this.c
return new A.dp(this.a,s,r,-1)},
ig(){switch(this.c.a){case 1:var s=$.au().ba()
s.saq(0,this.a)
s.seA(this.b)
s.sct(0,B.a0)
return s
case 0:s=$.au().ba()
s.saq(0,B.ad)
s.seA(0)
s.sct(0,B.a0)
return s}},
gf_(){return this.b*(1-(1+this.d)/2)},
gDx(){return this.b*(1+this.d)/2},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.a1(b)!==A.D(s))return!1
return b instanceof A.dp&&b.a.l(0,s.a)&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gu(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
cd(){return"BorderSide"}}
A.c0.prototype={
fE(a,b,c){return null},
D(a,b){return this.fE(a,b,!1)},
W(a,b){var s=this.D(0,b)
if(s==null)s=b.fE(0,this,!0)
return s==null?new A.hc(A.a([b,this],t.N_)):s},
cq(a,b){if(a==null)return this.aM(0,b)
return null},
cr(a,b){if(a==null)return this.aM(0,1-b)
return null},
j(a){return"ShapeBorder()"}}
A.dN.prototype={
gmx(){var s=Math.max(this.a.gf_(),0)
return new A.bz(s,s,s,s)},
cq(a,b){if(a==null)return this.aM(0,b)
return null},
cr(a,b){if(a==null)return this.aM(0,1-b)
return null}}
A.hc.prototype={
gmx(){return B.c.Ar(this.a,B.b2,new A.agP())},
fE(a,b,c){var s,r,q,p=b instanceof A.hc
if(!p){s=this.a
r=c?B.c.gU(s):B.c.gK(s)
q=r.fE(0,b,c)
if(q==null)q=b.fE(0,r,!c)
if(q!=null){p=A.aB(s,!0,t.RY)
p[c?p.length-1:0]=q
return new A.hc(p)}}s=A.a([],t.N_)
if(c)B.c.L(s,this.a)
if(p)B.c.L(s,b.a)
else s.push(b)
if(!c)B.c.L(s,this.a)
return new A.hc(s)},
D(a,b){return this.fE(a,b,!1)},
aM(a,b){var s=this.a,r=A.ao(s).h("aC<1,c0>")
return new A.hc(A.aB(new A.aC(s,new A.agQ(b),r),!0,r.h("bi.E")))},
cq(a,b){return A.awD(a,this,b)},
cr(a,b){return A.awD(this,a,b)},
fX(a,b){return B.c.gK(this.a).fX(a,b)},
i8(a,b,c){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
p.i8(a,b,c)
b=p.gmx().a1(c).zO(b)}},
l(a,b){if(b==null)return!1
if(this===b)return!0
if(J.a1(b)!==A.D(this))return!1
return b instanceof A.hc&&A.d8(b.a,this.a)},
gu(a){return A.dv(this.a)},
j(a){var s=this.a,r=A.ao(s).h("cn<1>")
return new A.aC(new A.cn(s,r),new A.agR(),r.h("aC<bi.E,k>")).bb(0," + ")}}
A.agP.prototype={
$2(a,b){return a.D(0,b.gmx())},
$S:237}
A.agQ.prototype={
$1(a){return a.aM(0,this.a)},
$S:238}
A.agR.prototype={
$1(a){return a.j(0)},
$S:239}
A.Pd.prototype={}
A.uq.prototype={
I(){return"BoxShape."+this.b}}
A.E8.prototype={
fE(a,b,c){return null},
D(a,b){return this.fE(a,b,!1)},
fX(a,b){var s=$.au().cf()
s.kG(a)
return s}}
A.dG.prototype={
gmx(){var s,r=this
if(r.gJb()){s=r.a.gf_()
return new A.bz(s,s,s,s)}return new A.bz(r.d.gf_(),r.a.gf_(),r.b.gf_(),r.c.gf_())},
gpK(){var s,r,q=this,p=q.a,o=p.a,n=q.b
if(n.a.l(0,o)&&q.c.a.l(0,o)&&q.d.a.l(0,o))if(q.gJb()){s=p.c
if(n.c===s&&q.c.c===s&&q.d.c===s){r=p.d
p=n.d===r&&q.c.d===r&&q.d.d===r}else p=!1}else p=!1
else p=!1
return p},
gJb(){var s=this,r=s.a.b
return s.b.b===r&&s.c.b===r&&s.d.b===r},
fE(a,b,c){var s=this
if(b instanceof A.dG&&A.jx(s.a,b.a)&&A.jx(s.b,b.b)&&A.jx(s.c,b.c)&&A.jx(s.d,b.d))return new A.dG(A.hm(s.a,b.a),A.hm(s.b,b.b),A.hm(s.c,b.c),A.hm(s.d,b.d))
return null},
D(a,b){return this.fE(a,b,!1)},
aM(a,b){var s=this
return new A.dG(s.a.aM(0,b),s.b.aM(0,b),s.c.aM(0,b),s.d.aM(0,b))},
cq(a,b){if(a instanceof A.dG)return A.aq6(a,this,b)
return this.Ed(a,b)},
cr(a,b){if(a instanceof A.dG)return A.aq6(this,a,b)
return this.Ee(a,b)},
uW(a,b,c,d,e){var s,r=this
if(r.gpK()){s=r.a
switch(s.c.a){case 0:return
case 1:switch(d.a){case 1:A.atR(a,b,s)
break
case 0:if(c!=null&&!c.l(0,B.aR)){A.atS(a,b,s,c)
return}A.atT(a,b,s)
break}return}}A.az0(a,b,r.c,r.d,r.b,r.a)},
i8(a,b,c){return this.uW(a,b,null,B.u,c)},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.a1(b)!==A.D(s))return!1
return b instanceof A.dG&&b.a.l(0,s.a)&&b.b.l(0,s.b)&&b.c.l(0,s.c)&&b.d.l(0,s.d)},
gu(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s,r,q=this
if(q.gpK())return"Border.all("+q.a.j(0)+")"
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
A.ee.prototype={
gmx(){var s,r=this
if(r.gpK()){s=r.a.gf_()
return new A.ag(s,s,s,s)}return new A.ag(r.b.gf_(),r.a.gf_(),r.c.gf_(),r.d.gf_())},
gpK(){var s,r,q,p=this,o=p.a,n=o.a,m=p.b
if(!m.a.l(0,n)||!p.c.a.l(0,n)||!p.d.a.l(0,n))return!1
s=o.b
if(m.b!==s||p.c.b!==s||p.d.b!==s)return!1
r=o.c
if(m.c!==r||p.c.c!==r||p.d.c!==r)return!1
q=o.d
if(!(m.d===q&&p.d.d===q&&p.c.d===q))return!1
return!0},
fE(a,b,c){var s,r,q,p=this,o=null
if(b instanceof A.ee){s=p.a
r=b.a
if(A.jx(s,r)&&A.jx(p.b,b.b)&&A.jx(p.c,b.c)&&A.jx(p.d,b.d))return new A.ee(A.hm(s,r),A.hm(p.b,b.b),A.hm(p.c,b.c),A.hm(p.d,b.d))
return o}if(b instanceof A.dG){s=b.a
r=p.a
if(!A.jx(s,r)||!A.jx(b.c,p.d))return o
q=p.b
if(!q.l(0,B.K)||!p.c.l(0,B.K)){if(!b.d.l(0,B.K)||!b.b.l(0,B.K))return o
return new A.ee(A.hm(s,r),q,p.c,A.hm(b.c,p.d))}return new A.dG(A.hm(s,r),b.b,A.hm(b.c,p.d),b.d)}return o},
D(a,b){return this.fE(a,b,!1)},
aM(a,b){var s=this
return new A.ee(s.a.aM(0,b),s.b.aM(0,b),s.c.aM(0,b),s.d.aM(0,b))},
cq(a,b){if(a instanceof A.ee)return A.aq4(a,this,b)
return this.Ed(a,b)},
cr(a,b){if(a instanceof A.ee)return A.aq4(this,a,b)
return this.Ee(a,b)},
uW(a,b,c,d,e){var s,r,q,p=this
if(p.gpK()){s=p.a
switch(s.c.a){case 0:return
case 1:switch(d.a){case 1:A.atR(a,b,s)
break
case 0:if(c!=null&&!c.l(0,B.aR)){A.atS(a,b,s,c)
return}A.atT(a,b,s)
break}return}}switch(e.a){case 0:r=p.c
q=p.b
break
case 1:r=p.b
q=p.c
break
default:r=null
q=null}A.az0(a,b,p.d,r,q,p.a)},
i8(a,b,c){return this.uW(a,b,null,B.u,c)},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.a1(b)!==A.D(s))return!1
return b instanceof A.ee&&b.a.l(0,s.a)&&b.b.l(0,s.b)&&b.c.l(0,s.c)&&b.d.l(0,s.d)},
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
A.aH.prototype={
gde(a){var s=this.c
return s==null?null:s.gmx()},
vx(a,b){var s,r,q
switch(this.w.a){case 1:s=A.lQ(a.gaR(),a.gh0()/2)
r=$.au().cf()
r.t5(s)
return r
case 0:r=this.d
if(r!=null){q=$.au().cf()
q.f9(r.a1(b).dS(a))
return q}r=$.au().cf()
r.kG(a)
return r}},
aM(a,b){var s=this,r=null,q=A.y(r,s.a,b),p=A.atU(r,s.c,b),o=A.ij(r,s.d,b),n=A.atX(r,s.e,b),m=s.f
m=m==null?r:m.aM(0,b)
return new A.aH(q,s.b,p,o,n,m,s.w)},
gAP(){return this.e!=null},
cq(a,b){if(a==null)return this.aM(0,b)
if(a instanceof A.aH)return A.atV(a,this,b)
return this.DG(a,b)},
cr(a,b){if(a==null)return this.aM(0,1-b)
if(a instanceof A.aH)return A.atV(this,a,b)
return this.DH(a,b)},
l(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.a1(b)!==A.D(r))return!1
if(b instanceof A.aH)if(J.h(b.a,r.a))if(J.h(b.b,r.b))if(J.h(b.c,r.c))if(J.h(b.d,r.d))if(A.d8(b.e,r.e))if(J.h(b.f,r.f))s=b.w===r.w
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
Lp(a,b,c){var s
switch(this.w.a){case 0:s=this.d
if(s!=null)return s.a1(c).dS(new A.E(0,0,0+a.a,0+a.b)).C(0,b)
return!0
case 1:return b.ag(0,a.ju(B.j)).gdr()<=Math.min(a.a,a.b)/2}},
tz(a){return new A.agA(this,a)}}
A.agA.prototype={
H9(a,b,c,d){var s=this.b
switch(s.w.a){case 1:a.iG(b.gaR(),b.gh0()/2,c)
break
case 0:s=s.d
if(s==null||s.l(0,B.aR))a.cz(b,c)
else a.ds(s.a1(d).dS(b),c)
break}},
a_6(a,b,c){var s,r,q,p,o,n,m=this.b.e
if(m==null)return
for(s=m.length,r=0;r<m.length;m.length===s||(0,A.P)(m),++r){q=m[r]
p=$.au().ba()
p.saq(0,q.a)
o=q.e
n=q.c
p.sa7d(new A.wD(o,n>0?n*0.57735+0.5:0))
o=b.dG(q.b)
n=q.d
this.H9(a,new A.E(o.a-n,o.b-n,o.c+n,o.d+n),p,c)}},
a_2(a,b,c){var s,r,q=this,p=q.b,o=p.b
if(o==null)return
if(q.e==null)q.e=new A.Gs(o,q.a)
switch(p.w.a){case 1:s=A.lQ(b.gaR(),b.gh0()/2)
r=$.au().cf()
r.t5(s)
break
case 0:p=p.d
if(p!=null){r=$.au().cf()
r.f9(p.a1(c.d).dS(b))}else r=null
break
default:r=null}q.e.uV(a,b,r,c)},
m(){var s,r=this.e
if(r!=null){s=r.c
if(s!=null)s.G(0,new A.dL(r.gGm(),null,null))
s=r.d
if(s!=null)s.a.m()
r.d=null}this.Pb()},
q1(a,b,c){var s,r,q,p,o=this,n=c.e,m=b.a,l=b.b,k=new A.E(m,l,m+n.a,l+n.b),j=c.d
o.a_6(a,k,j)
n=o.b
m=n.a
l=m==null
if(!l||n.f!=null){if(o.c!=null)s=n.f!=null&&!J.h(o.d,k)
else s=!0
if(s){r=$.au().ba()
if(!l)r.saq(0,m)
m=n.f
if(m!=null){l=m.d.a1(j).Nz(k)
s=m.e.a1(j).Nz(k)
q=m.a
p=m.xS()
m=m.f
r.sDl(A.aqF(l,s,q,p,m,null))
o.d=k}o.c=r}m=o.c
m.toString
o.H9(a,k,m,j)}o.a_2(a,k,c)
m=n.c
if(m!=null){l=n.d
l=l==null?null:l.a1(j)
m.uW(a,k,l,n.w,j)}},
j(a){return"BoxPainter for "+this.b.j(0)}}
A.mN.prototype={
I(){return"BoxFit."+this.b}}
A.HB.prototype={}
A.il.prototype={
aM(a,b){var s=this
return new A.il(s.d*b,s.e,s.a,s.b.a5(0,b),s.c*b)},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.a1(b)!==A.D(s))return!1
return b instanceof A.il&&b.a.l(0,s.a)&&b.b.l(0,s.b)&&b.c===s.c&&b.d===s.d&&b.e===s.e},
gu(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this
return"BoxShadow("+s.a.j(0)+", "+s.b.j(0)+", "+A.ib(s.c)+", "+A.ib(s.d)+", "+s.e.j(0)+")"}}
A.dH.prototype={
aM(a,b){return new A.dH(this.b,this.a.aM(0,b))},
cq(a,b){var s,r
if(a instanceof A.dH){s=A.aK(a.a,this.a,b)
r=A.W(a.b,this.b,b)
r.toString
return new A.dH(A.J(r,0,1),s)}return this.lH(a,b)},
cr(a,b){var s,r
if(a instanceof A.dH){s=A.aK(this.a,a.a,b)
r=A.W(this.b,a.b,b)
r.toString
return new A.dH(A.J(r,0,1),s)}return this.lI(a,b)},
fX(a,b){var s=$.au().cf()
s.t5(this.EF(a))
return s},
i8(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=r.b*r.d
if(this.b===0)a.iG(b.gaR(),(b.gh0()+s)/2,r.ig())
else a.tS(this.EF(b).dz(s/2),r.ig())
break}},
EF(a){var s,r,q,p,o,n,m,l=this.b
if(l===0||a.c-a.a===a.d-a.b)return A.lQ(a.gaR(),a.gh0()/2)
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
if(J.a1(b)!==A.D(this))return!1
return b instanceof A.dH&&b.a.l(0,this.a)&&b.b===this.b},
gu(a){return A.Y(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this.b
if(s!==0)return"CircleBorder("+this.a.j(0)+", eccentricity: "+A.i(s)+")"
return"CircleBorder("+this.a.j(0)+")"}}
A.Zu.prototype={
wI(a,b,c,d){var s=this
s.gbS(s).cQ(0)
switch(b.a){case 0:break
case 1:a.$1(!1)
break
case 2:a.$1(!0)
break
case 3:a.$1(!0)
s.gbS(s).D2(c,$.au().ba())
break}d.$0()
if(b===B.hX)s.gbS(s).cM(0)
s.gbS(s).cM(0)},
a33(a,b,c,d){this.wI(new A.Zv(this,a),b,c,d)},
a34(a,b,c,d){this.wI(new A.Zw(this,a),b,c,d)},
a36(a,b,c,d){this.wI(new A.Zx(this,a),b,c,d)}}
A.Zv.prototype={
$1(a){var s=this.a
return s.gbS(s).JM(0,this.b,a)},
$S:28}
A.Zw.prototype={
$1(a){var s=this.a
return s.gbS(s).JN(this.b,a)},
$S:28}
A.Zx.prototype={
$1(a){var s=this.a
return s.gbS(s).a35(this.b,a)},
$S:28}
A.l1.prototype={
i(a,b){return this.b.i(0,b)},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.a1(b)!==A.D(s))return!1
return s.Pc(0,b)&&A.o(s).h("l1<l1.T>").b(b)&&A.apa(b.b,s.b)},
gu(a){return A.Y(A.D(this),this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"ColorSwatch(primary value: "+this.Pd(0)+")"}}
A.hr.prototype={
cd(){return"Decoration"},
gde(a){return B.b2},
gAP(){return!1},
cq(a,b){return null},
cr(a,b){return null},
Lp(a,b,c){return!0},
vx(a,b){throw A.c(A.S("This Decoration subclass does not expect to be used for clipping."))}}
A.E9.prototype={
m(){}}
A.PY.prototype={}
A.ns.prototype={
I(){return"ImageRepeat."+this.b}}
A.ip.prototype={
l(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.a1(b)!==A.D(r))return!1
if(b instanceof A.ip)if(b.a.l(0,r.a))if(b.d===r.d)if(B.p.l(0,B.p))s=!0
else s=!1
else s=!1
else s=!1
else s=!1
return s},
gu(a){return A.Y(this.a,null,this.d,B.p,null,B.bK,!1,1,1,B.dq,!1,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=A.a([this.a.j(0)],t.s),r=!(this.d===B.n3&&!0)
if(r)s.push(this.d.j(0))
s.push(B.p.j(0))
s.push("scale 1")
s.push("opacity 1")
s.push(B.dq.j(0))
return"DecorationImage("+B.c.bb(s,", ")+")"}}
A.Gs.prototype={
uV(a,b,c,d){var s,r,q,p,o=this,n=null,m=o.a,l=m.a.a1(d),k=l.a
if(k==null)k=l
s=o.c
r=s==null
if(r)q=n
else{q=s.a
if(q==null)q=s}if(k!==q){p=new A.dL(o.gGm(),n,n)
if(!r)s.G(0,p)
o.c=l
l.Z(0,p)}if(o.d==null)return
k=c!=null
if(k){a.cQ(0)
a.hc(0,c)}s=o.d
r=s.a
A.az1(B.p,a,n,n,s.c,B.dq,m.d,!1,r,!1,!1,1,b,B.bK,s.b)
if(k)a.cM(0)},
Xs(a,b){var s,r,q=this
if(J.h(q.d,a))return
s=q.d
if(s!=null)if(a.a.LN(s.a)){r=s.b
s=r===r&&a.c==s.c}else s=!1
else s=!1
if(s){a.a.m()
return}s=q.d
if(s!=null)s.a.m()
q.d=a
if(!b)q.b.$0()},
j(a){return"DecorationImagePainter(stream: "+A.i(this.c)+", image: "+A.i(this.d)+") for "+this.a.j(0)}}
A.dt.prototype={
gcB(){var s=this
return s.gdJ(s)+s.gdK(s)+s.geF(s)+s.geE()},
a2q(a){var s=this
switch(a.a){case 0:return s.gcB()
case 1:return s.gbl(s)+s.gbp(s)}},
D(a,b){var s=this
return new A.mh(s.gdJ(s)+b.gdJ(b),s.gdK(s)+b.gdK(b),s.geF(s)+b.geF(b),s.geE()+b.geE(),s.gbl(s)+b.gbl(b),s.gbp(s)+b.gbp(b))},
hS(a,b,c){var s=this
return new A.mh(A.J(s.gdJ(s),b.a,c.a),A.J(s.gdK(s),b.c,c.b),A.J(s.geF(s),0,c.c),A.J(s.geE(),0,c.d),A.J(s.gbl(s),b.b,c.e),A.J(s.gbp(s),b.d,c.f))},
j(a){var s=this
if(s.geF(s)===0&&s.geE()===0){if(s.gdJ(s)===0&&s.gdK(s)===0&&s.gbl(s)===0&&s.gbp(s)===0)return"EdgeInsets.zero"
if(s.gdJ(s)===s.gdK(s)&&s.gdK(s)===s.gbl(s)&&s.gbl(s)===s.gbp(s))return"EdgeInsets.all("+B.d.N(s.gdJ(s),1)+")"
return"EdgeInsets("+B.d.N(s.gdJ(s),1)+", "+B.d.N(s.gbl(s),1)+", "+B.d.N(s.gdK(s),1)+", "+B.d.N(s.gbp(s),1)+")"}if(s.gdJ(s)===0&&s.gdK(s)===0)return"EdgeInsetsDirectional("+B.d.N(s.geF(s),1)+", "+B.d.N(s.gbl(s),1)+", "+B.d.N(s.geE(),1)+", "+B.d.N(s.gbp(s),1)+")"
return"EdgeInsets("+B.d.N(s.gdJ(s),1)+", "+B.d.N(s.gbl(s),1)+", "+B.d.N(s.gdK(s),1)+", "+B.d.N(s.gbp(s),1)+") + EdgeInsetsDirectional("+B.d.N(s.geF(s),1)+", 0.0, "+B.d.N(s.geE(),1)+", 0.0)"},
l(a,b){var s=this
if(b==null)return!1
return b instanceof A.dt&&b.gdJ(b)===s.gdJ(s)&&b.gdK(b)===s.gdK(s)&&b.geF(b)===s.geF(s)&&b.geE()===s.geE()&&b.gbl(b)===s.gbl(s)&&b.gbp(b)===s.gbp(s)},
gu(a){var s=this
return A.Y(s.gdJ(s),s.gdK(s),s.geF(s),s.geE(),s.gbl(s),s.gbp(s),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.bz.prototype={
gdJ(a){return this.a},
gbl(a){return this.b},
gdK(a){return this.c},
gbp(a){return this.d},
geF(a){return 0},
geE(){return 0},
zO(a){var s=this
return new A.E(a.a+s.a,a.b+s.b,a.c-s.c,a.d-s.d)},
D(a,b){if(b instanceof A.bz)return this.W(0,b)
return this.DJ(0,b)},
hS(a,b,c){var s=this
return new A.bz(A.J(s.a,b.a,c.a),A.J(s.b,b.b,c.e),A.J(s.c,b.c,c.b),A.J(s.d,b.d,c.f))},
ag(a,b){var s=this
return new A.bz(s.a-b.a,s.b-b.b,s.c-b.c,s.d-b.d)},
W(a,b){var s=this
return new A.bz(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
a5(a,b){var s=this
return new A.bz(s.a*b,s.b*b,s.c*b,s.d*b)},
a1(a){return this},
ms(a,b,c,d){var s=this,r=b==null?s.a:b,q=d==null?s.b:d,p=c==null?s.c:c
return new A.bz(r,q,p,a==null?s.d:a)},
zz(a){return this.ms(a,null,null,null)},
a3N(a,b){return this.ms(a,null,null,b)}}
A.ag.prototype={
geF(a){return this.a},
gbl(a){return this.b},
geE(){return this.c},
gbp(a){return this.d},
gdJ(a){return 0},
gdK(a){return 0},
D(a,b){if(b instanceof A.ag)return this.W(0,b)
return this.DJ(0,b)},
ag(a,b){var s=this
return new A.ag(s.a-b.a,s.b-b.b,s.c-b.c,s.d-b.d)},
W(a,b){var s=this
return new A.ag(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
a5(a,b){var s=this
return new A.ag(s.a*b,s.b*b,s.c*b,s.d*b)},
a1(a){var s=this
switch(a.a){case 0:return new A.bz(s.c,s.b,s.a,s.d)
case 1:return new A.bz(s.a,s.b,s.c,s.d)}}}
A.mh.prototype={
a5(a,b){var s=this
return new A.mh(s.a*b,s.b*b,s.c*b,s.d*b,s.e*b,s.f*b)},
a1(a){var s=this
switch(a.a){case 0:return new A.bz(s.d+s.a,s.e,s.c+s.b,s.f)
case 1:return new A.bz(s.c+s.a,s.e,s.d+s.b,s.f)}},
gdJ(a){return this.a},
gdK(a){return this.b},
geF(a){return this.c},
geE(){return this.d},
gbl(a){return this.e},
gbp(a){return this.f}}
A.agN.prototype={}
A.aoi.prototype={
$1(a){return a<=this.a},
$S:241}
A.anO.prototype={
$1(a){var s=this,r=A.y(A.axV(s.a,s.b,a),A.axV(s.c,s.d,a),s.e)
r.toString
return r},
$S:242}
A.a4l.prototype={
xS(){var s,r,q,p=this.b
if(p!=null)return p
p=this.a.length
s=1/(p-1)
if(p>4294967295)A.N(A.bE(p,0,4294967295,"length",null))
r=J.hF(new Array(p),t.i)
for(q=0;q<p;++q)r[q]=q*s
return r}}
A.ex.prototype={
aM(a,b){var s=this,r=s.a,q=A.ao(r).h("aC<1,B>")
return new A.ex(s.d,s.e,s.f,A.aB(new A.aC(r,new A.a6o(b),q),!0,q.h("bi.E")),s.b,null)},
cq(a,b){var s=A.av_(a,this,b)
return s},
cr(a,b){var s=A.av_(this,a,b)
return s},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.a1(b)!==A.D(s))return!1
return b instanceof A.ex&&b.d.l(0,s.d)&&b.e.l(0,s.e)&&b.f===s.f&&A.d8(b.a,s.a)&&A.d8(b.b,s.b)},
gu(a){var s=this,r=A.dv(s.a),q=s.b
q=q==null?null:A.dv(q)
return A.Y(s.d,s.e,s.f,s.c,r,q,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this,r=A.a(["begin: "+s.d.j(0),"end: "+s.e.j(0),"colors: "+A.i(s.a)],t.s),q=s.b
if(q!=null)r.push("stops: "+A.i(q))
r.push("tileMode: "+s.f.j(0))
return"LinearGradient("+B.c.bb(r,", ")+")"}}
A.a6o.prototype={
$1(a){var s=A.y(null,a,this.a)
s.toString
return s},
$S:72}
A.a5g.prototype={
Y(a){var s,r,q,p
for(s=this.b,r=s.gb0(s),r=new A.ek(J.aF(r.a),r.b),q=A.o(r).z[1];r.t();){p=r.a;(p==null?q.a(p):p).m()}s.Y(0)
for(s=this.a,r=s.gb0(s),r=new A.ek(J.aF(r.a),r.b),q=A.o(r).z[1];r.t();){p=r.a
if(p==null)p=q.a(p)
p.a.G(0,p.b)}s.Y(0)
this.f=0},
mC(a){var s,r,q,p=this,o=p.c.A(0,a)
if(o!=null){s=o.a
r=o.d
r===$&&A.b()
if(s.w)A.N(A.ac(u.V))
B.c.A(s.x,r)
o.Eh()}q=p.a.A(0,a)
if(q!=null){q.a.G(0,q.b)
return!0}o=p.b.A(0,a)
if(o!=null){s=p.f
r=o.b
r.toString
p.f=s-r
o.m()
return!0}return!1},
Iy(a,b,c){var s,r=this,q=b.b
if(q!=null&&q<=104857600&&!0){s=r.f
q.toString
r.f=s+q
r.b.k(0,a,b)
r.Up(c)}else b.m()},
yJ(a,b,c){var s=this.c.bQ(0,a,new A.a5j(this,b,a))
if(s.b==null)s.b=c},
MI(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g={}
g.a=g.b=null
q=i.a
p=q.i(0,b)
o=p==null?h:p.a
g.c=o
if(o!=null)return o
p=i.b
n=p.A(0,b)
if(n!=null){g=n.a
i.yJ(b,g,n.b)
p.k(0,b,n)
return g}m=i.c.i(0,b)
if(m!=null){g=m.a
i.Iy(b,new A.A8(g,m.b,g.n0()),h)
return g}try{o=g.c=c.$0()
i.yJ(b,o,h)
p=o}catch(l){s=A.ak(l)
r=A.az(l)
d.$2(s,r)
return h}g.d=!1
k=A.bc("pendingImage")
j=new A.dL(new A.a5k(g,i,b,!0,k),h,h)
k.b=new A.Sb(p,j)
q.k(0,b,k.aL())
g.c.Z(0,j)
return g.c},
P(a,b){return this.a.i(0,b)!=null||this.b.i(0,b)!=null},
Up(a){var s,r,q,p,o,n=this,m=n.b,l=A.o(m).h("bh<1>")
while(!0){if(!(n.f>104857600||m.a>1000))break
s=new A.bh(m,l)
r=s.gae(s)
if(!r.t())A.N(A.c9())
q=r.gJ(r)
p=m.i(0,q)
s=n.f
o=p.b
o.toString
n.f=s-o
p.m()
m.A(0,q)}}}
A.a5j.prototype={
$0(){return A.aIw(this.b,new A.a5i(this.a,this.c))},
$S:243}
A.a5i.prototype={
$0(){this.a.c.A(0,this.b)},
$S:0}
A.a5k.prototype={
$2(a,b){var s,r,q,p,o,n=this
if(a!=null){s=a.a
r=s.gc0(s)*s.gby(s)*4
s.m()}else r=null
s=n.a
q=s.c
p=new A.A8(q,r,q.n0())
q=n.b
o=n.c
q.yJ(o,s.c,r)
if(n.d)q.Iy(o,p,s.a)
else p.m()
q.a.A(0,o)
if(!s.d){q=n.e.aL()
q.a.G(0,q.b)}s.d=!0},
$S:244}
A.Pm.prototype={
m(){$.bN.cy$.push(new A.agE(this))}}
A.agE.prototype={
$1(a){var s=this.a,r=s.c
if(r!=null)r.m()
s.c=null},
$S:2}
A.A8.prototype={}
A.t9.prototype={
Tw(a,b,c){var s=new A.aiY(this,b)
this.d=s
if(a.w)A.N(A.ac(u.V))
a.x.push(s)},
j(a){return"<optimized out>#"+A.c7(this)}}
A.aiY.prototype={
$0(){var s,r,q
this.b.$0()
s=this.a
r=s.a
q=s.d
q===$&&A.b()
if(r.w)A.N(A.ac(u.V))
B.c.A(r.x,q)
s.Eh()},
$S:0}
A.Sb.prototype={}
A.q0.prototype={
l(a,b){var s=this
if(b==null)return!1
if(J.a1(b)!==A.D(s))return!1
return b instanceof A.q0&&b.a==s.a&&b.b==s.b&&J.h(b.c,s.c)&&b.d==s.d&&J.h(b.e,s.e)&&b.f==s.f},
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
A.ei.prototype={
a1(a){var s=new A.a5w()
this.UY(a,new A.a5u(this,a,s),new A.a5v(this,a,s))
return s},
UY(a,b,c){var s,r,q,p,o,n={}
n.a=null
n.b=!1
s=new A.a5r(n,c)
r=null
try{r=this.uK(a)}catch(o){q=A.ak(o)
p=A.az(o)
s.$2(q,p)
return}r.aJ(new A.a5q(n,this,b,s),t.H).hb(s)},
qc(a,b,c,d){var s,r
if(b.a!=null){s=$.fs.hh$
s===$&&A.b()
s.MI(0,c,new A.a5s(b),d)
return}s=$.fs.hh$
s===$&&A.b()
r=s.MI(0,c,new A.a5t(this,c),d)
if(r!=null)b.Db(r)},
pL(a,b,c){throw A.c(A.S("Implement loadBuffer for faster image loading"))},
pM(a,b){return this.pL(0,a,$.fs.ga6u())},
j(a){return"ImageConfiguration()"}}
A.a5u.prototype={
$2(a,b){this.a.qc(this.b,this.c,a,b)},
$S(){return A.o(this.a).h("~(ei.T,~(C,bO?))")}}
A.a5v.prototype={
$3(a,b,c){return this.NJ(a,b,c)},
NJ(a,b,c){var s=0,r=A.a5(t.H),q=this,p
var $async$$3=A.Z(function(d,e){if(d===1)return A.a2(e,r)
while(true)switch(s){case 0:s=2
return A.a8(null,$async$$3)
case 2:p=q.c
if(p.a==null)p.Db(new A.ahj(A.a([],t.XZ),A.a([],t.u)))
p=p.a
p.toString
p.lm(A.bw("while resolving an image"),b,null,!0,c)
return A.a3(null,r)}})
return A.a4($async$$3,r)},
$S(){return A.o(this.a).h("ap<~>(ei.T?,C,bO?)")}}
A.a5r.prototype={
NI(a,b){var s=0,r=A.a5(t.H),q,p=this,o
var $async$$2=A.Z(function(c,d){if(c===1)return A.a2(d,r)
while(true)switch(s){case 0:o=p.a
if(o.b){s=1
break}p.b.$3(o.a,a,b)
o.b=!0
case 1:return A.a3(q,r)}})
return A.a4($async$$2,r)},
$2(a,b){return this.NI(a,b)},
$S:245}
A.a5q.prototype={
$1(a){var s,r,q,p=this
p.a.a=a
try{p.c.$2(a,p.d)}catch(q){s=A.ak(q)
r=A.az(q)
p.d.$2(s,r)}},
$S(){return A.o(this.b).h("at(ei.T)")}}
A.a5s.prototype={
$0(){var s=this.a.a
s.toString
return s},
$S:98}
A.a5t.prototype={
$0(){return this.a.pM(this.b,$.fs.ga6x())},
$S:98}
A.ih.prototype={
l(a,b){var s=this
if(b==null)return!1
if(J.a1(b)!==A.D(s))return!1
return b instanceof A.ih&&b.a===s.a&&b.b===s.b&&b.c===s.c},
gu(a){return A.Y(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"AssetBundleImageKey(bundle: "+this.a.j(0)+', name: "'+this.b+'", scale: '+A.i(this.c)+")"}}
A.DR.prototype={
pM(a,b){return A.avb(this.m_(a,b,null),a.b,null,a.c)},
pL(a,b,c){return A.avb(this.m_(b,null,c),b.b,null,b.c)},
m_(a,b,c){return this.Z_(a,b,c)},
Z_(a,b,c){var s=0,r=A.a5(t.hP),q,p=2,o,n,m,l,k,j,i
var $async$m_=A.Z(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:s=b!=null?3:4
break
case 3:n=null
p=6
s=9
return A.a8(a.a.uC(a.b),$async$m_)
case 9:n=e
p=2
s=8
break
case 6:p=5
j=o
if(A.ak(j) instanceof A.lc){k=$.fs.hh$
k===$&&A.b()
k.mC(a)
throw j}else throw j
s=8
break
case 5:s=2
break
case 8:if(n==null){k=$.fs.hh$
k===$&&A.b()
k.mC(a)
throw A.c(A.ac("Unable to read data"))}q=b.$1(n)
s=1
break
case 4:m=null
p=11
s=14
return A.a8(a.a.dd(0,a.b),$async$m_)
case 14:m=e
p=2
s=13
break
case 11:p=10
i=o
if(A.ak(i) instanceof A.lc){k=$.fs.hh$
k===$&&A.b()
k.mC(a)
throw i}else throw i
s=13
break
case 10:s=2
break
case 13:if(m==null){k=$.fs.hh$
k===$&&A.b()
k.mC(a)
throw A.c(A.ac("Unable to read data"))}c.toString
q=c.$1(A.d_(m.buffer,0,null))
s=1
break
case 1:return A.a3(q,r)
case 2:return A.a2(o,r)}})
return A.a4($async$m_,r)}}
A.ahj.prototype={}
A.fb.prototype={
gn1(){return this.a},
uK(a){var s,r={},q=a.a
if(q==null)q=$.Xe()
r.a=r.b=null
q.a7a("AssetManifest.749ed70e.json",A.aM9(),t.wd).aJ(new A.XG(r,this,a,q),t.H).hb(new A.XH(r))
s=r.a
if(s!=null)return s
s=new A.a9($.af,t.Lv)
r.b=new A.aO(s,t.h8)
return s},
Uz(a,b,c){var s,r,q,p=b.b
if(p==null||c==null||J.hj(c))return a
s=A.arn(t.i,t.N)
for(r=J.aF(c);r.t();){q=r.gJ(r)
s.k(0,this.Hi(q),q)}p.toString
return this.VQ(s,p)},
VQ(a,b){var s,r,q
if(a.nT(b)){s=a.i(0,b)
s.toString
return s}r=a.a6X(b)
q=a.a55(b)
if(r==null)return a.i(0,q)
if(q==null)return a.i(0,r)
if(b<2||b>(r+q)/2)return a.i(0,q)
else return a.i(0,r)},
Hi(a){var s,r,q,p
if(a===this.a)return 1
s=A.kk(a,0,null)
r=s.gk0().length>1?s.gk0()[s.gk0().length-2]:""
q=$.azp().pw(r)
if(q!=null&&q.b.length-1>0){p=q.b[1]
p.toString
return A.asw(p)}return 1},
l(a,b){if(b==null)return!1
if(J.a1(b)!==A.D(this))return!1
return b instanceof A.fb&&b.gn1()===this.gn1()&&!0},
gu(a){return A.Y(this.gn1(),this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"AssetImage(bundle: "+A.i(this.b)+', name: "'+this.gn1()+'")'}}
A.XG.prototype={
$1(a){var s,r=this,q=r.b,p=q.gn1(),o=a==null?null:J.b0(a,q.gn1())
o=q.Uz(p,r.c,o)
o.toString
s=new A.ih(r.d,o,q.Hi(o))
q=r.a
p=q.b
if(p!=null)p.bT(0,s)
else q.a=new A.bC(s,t.WT)},
$S:247}
A.XH.prototype={
$2(a,b){this.a.b.cW(a,b)},
$S:31}
A.fm.prototype={
d7(a){return new A.fm(this.a.d7(0),this.b,this.c)},
j(a){var s=this.c
s=s!=null?s+" ":""
return s+this.a.j(0)+" @ "+A.ib(this.b)+"x"},
gu(a){return A.Y(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
l(a,b){var s=this
if(b==null)return!1
if(J.a1(b)!==A.D(s))return!1
return b instanceof A.fm&&b.a===s.a&&b.b===s.b&&b.c==s.c}}
A.dL.prototype={
gu(a){return A.Y(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
l(a,b){var s=this
if(b==null)return!1
if(J.a1(b)!==A.D(s))return!1
return b instanceof A.dL&&J.h(b.a,s.a)&&J.h(b.b,s.b)&&J.h(b.c,s.c)},
a7D(a,b){return this.a.$2(a,b)}}
A.a5w.prototype={
Db(a){var s,r=this
r.a=a
s=r.b
if(s!=null){r.b=null
a.f=!0
B.c.V(s,a.got(a))
r.a.f=!1}},
Z(a,b){var s=this.a
if(s!=null)return s.Z(0,b)
s=this.b;(s==null?this.b=A.a([],t.XZ):s).push(b)},
G(a,b){var s,r=this.a
if(r!=null)return r.G(0,b)
for(s=0;r=this.b,s<r.length;++s)if(J.h(r[s],b)){r=this.b
r.toString
B.c.eq(r,s)
break}}}
A.a5x.prototype={
m(){var s=this.a;--s.r
s.rq()
this.a=null}}
A.lk.prototype={
Z(a,b){var s,r,q,p,o,n,m,l=this
if(l.w)A.N(A.ac(u.V))
l.e=!0
l.a.push(b)
o=l.b
if(o!=null)try{o=o.d7(0)
n=l.f
b.a.$2(o,!n)}catch(m){s=A.ak(m)
r=A.az(m)
l.MY(A.bw("by a synchronously-called image listener"),s,r)}o=l.c
if(o!=null&&b.c!=null)try{n=b.c
n.toString
n.$2(o.a,o.b)}catch(s){q=A.ak(s)
p=A.az(s)
if(!J.h(q,l.c.a))A.e1(new A.bS(q,p,"image resource service",A.bw("by a synchronously-called image error listener"),null,!1))}},
n0(){if(this.w)A.N(A.ac(u.V));++this.r
return new A.a5x(this)},
G(a,b){var s,r,q,p,o,n=this
if(n.w)A.N(A.ac(u.V))
for(s=n.a,r=0;r<s.length;++r)if(J.h(s[r],b)){B.c.eq(s,r)
break}if(s.length===0){s=n.x
q=A.a(s.slice(0),A.ao(s))
for(p=q.length,o=0;o<q.length;q.length===p||(0,A.P)(q),++o)q[o].$0()
B.c.Y(s)
n.rq()}},
rq(){var s,r=this
if(!r.e||r.w||r.a.length!==0||r.r!==0)return
s=r.b
if(s!=null)s.a.m()
r.b=null
r.w=!0},
Df(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.w)A.N(A.ac(u.V))
p=i.b
if(p!=null)p.a.m()
i.b=a
p=i.a
if(p.length===0)return
o=A.aB(p,!0,t.dW)
for(p=o.length,n=a.a,m=a.b,l=a.c,k=0;k<p;++k){s=o[k]
try{s.a7D(new A.fm(n.d7(0),m,l),!1)}catch(j){r=A.ak(j)
q=A.az(j)
i.MY(A.bw("by an image listener"),r,q)}}},
lm(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i="image resource service"
this.c=new A.bS(b,e,i,a,c,d)
o=this.a
n=t.kE
m=A.aB(new A.dA(new A.aC(o,new A.a5y(),A.ao(o).h("aC<1,~(C,bO?)?>")),n),!0,n.h("p.E"))
s=!1
for(o=m.length,l=0;l<o;++l){r=m[l]
try{r.$2(b,e)
s=!0}catch(k){q=A.ak(k)
p=A.az(k)
if(!J.h(q,b)){n=A.bw("when reporting an error to an image listener")
j=$.hi()
if(j!=null)j.$1(new A.bS(q,p,i,n,null,!1))}}}if(!s){o=this.c
o.toString
A.e1(o)}},
MY(a,b,c){return this.lm(a,b,null,!1,c)},
a8J(a){var s,r,q,p
if(this.w)A.N(A.ac(u.V))
s=this.a
if(s.length!==0){r=t.r7
q=A.aB(new A.dA(new A.aC(s,new A.a5z(),A.ao(s).h("aC<1,~(fl)?>")),r),!0,r.h("p.E"))
for(s=q.length,p=0;p<s;++p)q[p].$1(a)}}}
A.a5y.prototype={
$1(a){return a.c},
$S:250}
A.a5z.prototype={
$1(a){return a.b},
$S:251}
A.KL.prototype={
Tk(a,b,c,d,e){this.d=c
b.ea(this.gX0(),new A.a7x(this,d),t.H)},
X1(a){this.z=a
if(this.a.length!==0)this.lS()},
WT(a){var s,r,q,p=this
p.cx=!1
if(p.a.length===0)return
s=p.ay
if(s!=null){r=p.ax
r===$&&A.b()
r=a.a-r.a>=s.a}else r=!0
if(r){s=p.at
p.FP(new A.fm(s.gfL(s).d7(0),p.Q,p.d))
p.ax=a
s=p.at
p.ay=s.gKA(s)
s=p.at
s.gfL(s).m()
p.at=null
q=B.f.f0(p.ch,p.z.gmR())
if(p.z.gvc()===-1||q<=p.z.gvc())p.lS()
return}s.toString
r=p.ax
r===$&&A.b()
p.CW=A.c6(new A.aV(B.d.b5((s.a-(a.a-r.a))*$.ay1)),new A.a7w(p))},
lS(){var s=0,r=A.a5(t.H),q,p=2,o,n=this,m,l,k,j,i
var $async$lS=A.Z(function(a,b){if(a===1){o=b
s=p}while(true)switch(s){case 0:j=n.at
if(j!=null)j.gfL(j).m()
n.at=null
p=4
s=7
return A.a8(n.z.qu(),$async$lS)
case 7:n.at=b
p=2
s=6
break
case 4:p=3
i=o
m=A.ak(i)
l=A.az(i)
n.lm(A.bw("resolving an image frame"),m,n.as,!0,l)
s=1
break
s=6
break
case 3:s=2
break
case 6:if(n.z.gmR()===1){if(n.a.length===0){s=1
break}j=n.at
n.FP(new A.fm(j.gfL(j).d7(0),n.Q,n.d))
j=n.at
j.gfL(j).m()
n.at=null
s=1
break}n.HK()
case 1:return A.a3(q,r)
case 2:return A.a2(o,r)}})
return A.a4($async$lS,r)},
HK(){if(this.cx)return
this.cx=!0
$.bN.qC(this.gWS())},
FP(a){this.Df(a);++this.ch},
Z(a,b){var s,r=this
if(r.a.length===0){s=r.z
if(s!=null)s=r.b==null||s.gmR()>1
else s=!1}else s=!1
if(s)r.lS()
r.DP(0,b)},
G(a,b){var s,r=this
r.DQ(0,b)
if(r.a.length===0){s=r.CW
if(s!=null)s.ap(0)
r.CW=null}},
rq(){this.PD()
if(this.w)this.y=null}}
A.a7x.prototype={
$2(a,b){this.a.lm(A.bw("resolving an image codec"),a,this.b,!0,b)},
$S:31}
A.a7w.prototype={
$0(){this.a.HK()},
$S:0}
A.R5.prototype={}
A.R4.prototype={}
A.DJ.prototype={}
A.lo.prototype={
l(a,b){var s
if(b==null)return!1
if(b instanceof A.lo)if(b.a===this.a)if(b.b==this.b)s=A.d8(b.f,this.f)
else s=!1
else s=!1
else s=!1
return s},
gu(a){return A.Y(this.a,this.b,this.c,!1,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"InlineSpanSemanticsInformation{text: "+this.a+", semanticsLabel: "+A.i(this.b)+", recognizer: "+A.i(this.c)+"}"}}
A.eT.prototype={
O7(a){var s={}
s.a=null
this.b1(new A.a5J(s,a,new A.DJ()))
return s.a},
Nj(a){var s,r=new A.bP("")
this.JW(r,!0,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
al(a,b){var s={}
if(b<0)return null
s.a=null
this.b1(new A.a5I(s,b,new A.DJ()))
return s.a},
l(a,b){if(b==null)return!1
if(this===b)return!0
if(J.a1(b)!==A.D(this))return!1
return b instanceof A.eT&&J.h(b.a,this.a)},
gu(a){return J.q(this.a)}}
A.a5J.prototype={
$1(a){var s=a.O8(this.b,this.c)
this.a.a=s
return s==null},
$S:49}
A.a5I.prototype={
$1(a){var s=a.a39(this.b,this.c)
this.a.a=s
return s==null},
$S:49}
A.dS.prototype={
aM(a,b){var s=this.a.aM(0,b)
return new A.dS(this.b.a5(0,b),s)},
cq(a,b){var s,r,q=this
if(a instanceof A.dS){s=A.aK(a.a,q.a,b)
r=A.ij(a.b,q.b,b)
r.toString
return new A.dS(r,s)}if(a instanceof A.dH){s=A.aK(a.a,q.a,b)
return new A.eC(q.b,1-b,a.b,s)}return q.lH(a,b)},
cr(a,b){var s,r,q=this
if(a instanceof A.dS){s=A.aK(q.a,a.a,b)
r=A.ij(q.b,a.b,b)
r.toString
return new A.dS(r,s)}if(a instanceof A.dH){s=A.aK(q.a,a.a,b)
return new A.eC(q.b,b,a.b,s)}return q.lI(a,b)},
fX(a,b){var s=$.au().cf()
s.f9(this.b.a1(b).dS(a))
return s},
i8(a,b,c){var s,r,q,p,o=this.a
switch(o.c.a){case 0:break
case 1:s=this.b
if(o.b===0)a.ds(s.a1(c).dS(b),o.ig())
else{r=$.au().ba()
r.saq(0,o.a)
q=s.a1(c).dS(b)
p=q.dz(-o.gf_())
a.tR(q.dz(o.gDx()),p,r)}break}},
l(a,b){if(b==null)return!1
if(J.a1(b)!==A.D(this))return!1
return b instanceof A.dS&&b.a.l(0,this.a)&&b.b.l(0,this.b)},
gu(a){return A.Y(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"RoundedRectangleBorder("+this.a.j(0)+", "+this.b.j(0)+")"}}
A.eC.prototype={
aM(a,b){var s=this.a.aM(0,b)
return new A.eC(this.b.a5(0,b),b,this.d,s)},
cq(a,b){var s,r,q,p=this
if(a instanceof A.dS){s=A.aK(a.a,p.a,b)
r=A.ij(a.b,p.b,b)
r.toString
return new A.eC(r,p.c*b,p.d,s)}if(a instanceof A.dH){s=A.aK(a.a,p.a,b)
r=p.c
return new A.eC(p.b,r+(1-r)*(1-b),a.b,s)}if(a instanceof A.eC){s=A.aK(a.a,p.a,b)
r=A.ij(a.b,p.b,b)
r.toString
q=A.W(a.c,p.c,b)
q.toString
return new A.eC(r,q,p.d,s)}return p.lH(a,b)},
cr(a,b){var s,r,q,p=this
if(a instanceof A.dS){s=A.aK(p.a,a.a,b)
r=A.ij(p.b,a.b,b)
r.toString
return new A.eC(r,p.c*(1-b),p.d,s)}if(a instanceof A.dH){s=A.aK(p.a,a.a,b)
r=p.c
return new A.eC(p.b,r+(1-r)*b,a.b,s)}if(a instanceof A.eC){s=A.aK(p.a,a.a,b)
r=A.ij(p.b,a.b,b)
r.toString
q=A.W(p.c,a.c,b)
q.toString
return new A.eC(r,q,p.d,s)}return p.lI(a,b)},
HH(a){var s,r,q,p,o,n,m,l,k=this.c
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
ED(a,b){var s,r,q,p=this.b.a1(b),o=this.c
if(o===0)return p
s=this.d
if(s!==0){r=a.c-a.a
q=a.d-a.b
s=0.5+s/2
if(r<q){o=A.ph(p,A.uf(new A.bk(r/2,s*q/2)),o)
o.toString
return o}else{o=A.ph(p,A.uf(new A.bk(s*r/2,q/2)),o)
o.toString
return o}}return A.ph(p,A.ck(a.gh0()/2),o)},
fX(a,b){var s=$.au().cf(),r=this.ED(a,b)
r.toString
s.f9(r.dS(this.HH(a)))
return s},
i8(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=this.ED(b,c)
s.toString
a.ds(s.dS(this.HH(b)).dz(r.b*r.d/2),r.ig())
break}},
l(a,b){var s=this
if(b==null)return!1
if(J.a1(b)!==A.D(s))return!1
return b instanceof A.eC&&b.a.l(0,s.a)&&b.b.l(0,s.b)&&b.c===s.c},
gu(a){return A.Y(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this,r="RoundedRectangleBorder(",q=s.d
if(q!==0)return r+s.a.j(0)+", "+s.b.j(0)+", "+B.d.N(s.c*100,1)+u.T+B.d.N(q*100,1)+"% oval)"
return r+s.a.j(0)+", "+s.b.j(0)+", "+B.d.N(s.c*100,1)+"% of the way to being a CircleBorder)"}}
A.f1.prototype={
aM(a,b){return new A.f1(this.a.aM(0,b))},
cq(a,b){var s,r=this
if(a instanceof A.f1)return new A.f1(A.aK(a.a,r.a,b))
if(a instanceof A.dH){s=A.aK(a.a,r.a,b)
return new A.eE(1-b,a.b,s)}if(a instanceof A.dS){s=A.aK(a.a,r.a,b)
return new A.eF(a.b,1-b,s)}return r.lH(a,b)},
cr(a,b){var s,r=this
if(a instanceof A.f1)return new A.f1(A.aK(r.a,a.a,b))
if(a instanceof A.dH){s=A.aK(r.a,a.a,b)
return new A.eE(b,a.b,s)}if(a instanceof A.dS){s=A.aK(r.a,a.a,b)
return new A.eF(a.b,b,s)}return r.lI(a,b)},
fX(a,b){var s=a.gh0()/2,r=$.au().cf()
r.f9(A.ar8(a,new A.bk(s,s)))
return r},
i8(a,b,c){var s,r=this.a
switch(r.c.a){case 0:break
case 1:s=b.gh0()/2
a.ds(A.ar8(b,new A.bk(s,s)).dz(r.b*r.d/2),r.ig())
break}},
l(a,b){if(b==null)return!1
if(J.a1(b)!==A.D(this))return!1
return b instanceof A.f1&&b.a.l(0,this.a)},
gu(a){var s=this.a
return A.Y(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"StadiumBorder("+this.a.j(0)+")"}}
A.eE.prototype={
aM(a,b){return new A.eE(b,this.c,this.a.aM(0,b))},
cq(a,b){var s,r,q,p=this
if(a instanceof A.f1)return new A.eE(p.b*b,p.c,A.aK(a.a,p.a,b))
if(a instanceof A.dH){s=A.aK(a.a,p.a,b)
r=p.b
return new A.eE(r+(1-r)*(1-b),a.b,s)}if(a instanceof A.eE){s=A.aK(a.a,p.a,b)
r=A.W(a.b,p.b,b)
r.toString
q=A.W(a.c,p.c,b)
q.toString
return new A.eE(r,q,s)}return p.lH(a,b)},
cr(a,b){var s,r,q,p=this
if(a instanceof A.f1)return new A.eE(p.b*(1-b),p.c,A.aK(p.a,a.a,b))
if(a instanceof A.dH){s=A.aK(p.a,a.a,b)
r=p.b
return new A.eE(r+(1-r)*b,a.b,s)}if(a instanceof A.eE){s=A.aK(p.a,a.a,b)
r=A.W(p.b,a.b,b)
r.toString
q=A.W(p.c,a.c,b)
q.toString
return new A.eE(r,q,s)}return p.lI(a,b)},
If(a){var s,r,q,p,o,n,m,l,k=this.b
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
oi(a){var s,r,q,p=A.ck(a.gh0()/2),o=this.c
if(o!==0){s=a.c-a.a
r=a.d-a.b
q=this.b
o=0.5+o/2
if(s<r){o=A.ph(p,A.uf(new A.bk(s/2,o*r/2)),q)
o.toString
return o}else{o=A.ph(p,A.uf(new A.bk(o*s/2,r/2)),q)
o.toString
return o}}return p},
fX(a,b){var s=$.au().cf()
s.f9(this.oi(a).dS(this.If(a)))
return s},
i8(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.ds(this.oi(b).dS(this.If(b)).dz(s.b*s.d/2),s.ig())
break}},
l(a,b){if(b==null)return!1
if(J.a1(b)!==A.D(this))return!1
return b instanceof A.eE&&b.a.l(0,this.a)&&b.b===this.b},
gu(a){return A.Y(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this,r=s.c
if(r!==0)return"StadiumBorder("+s.a.j(0)+", "+B.d.N(s.b*100,1)+u.T+B.d.N(r*100,1)+"% oval)"
return"StadiumBorder("+s.a.j(0)+", "+B.d.N(s.b*100,1)+"% of the way to being a CircleBorder)"}}
A.eF.prototype={
aM(a,b){var s=this.a.aM(0,b)
return new A.eF(this.b.a5(0,b),b,s)},
cq(a,b){var s,r,q,p=this
if(a instanceof A.f1)return new A.eF(p.b,p.c*b,A.aK(a.a,p.a,b))
if(a instanceof A.dS){s=p.c
return new A.eF(p.b,s+(1-s)*(1-b),A.aK(a.a,p.a,b))}if(a instanceof A.eF){s=A.aK(a.a,p.a,b)
r=A.ij(a.b,p.b,b)
r.toString
q=A.W(a.c,p.c,b)
q.toString
return new A.eF(r,q,s)}return p.lH(a,b)},
cr(a,b){var s,r,q,p=this
if(a instanceof A.f1)return new A.eF(p.b,p.c*(1-b),A.aK(p.a,a.a,b))
if(a instanceof A.dS){s=p.c
return new A.eF(p.b,s+(1-s)*b,A.aK(p.a,a.a,b))}if(a instanceof A.eF){s=A.aK(p.a,a.a,b)
r=A.ij(p.b,a.b,b)
r.toString
q=A.W(p.c,a.c,b)
q.toString
return new A.eF(r,q,s)}return p.lI(a,b)},
oi(a){var s=a.gh0()/2
s=A.ij(this.b,A.uf(new A.bk(s,s)),1-this.c)
s.toString
return s},
fX(a,b){var s=$.au().cf()
s.f9(this.oi(a).a1(b).dS(a))
return s},
i8(a,b,c){var s=this.a
switch(s.c.a){case 0:break
case 1:a.ds(this.oi(b).a1(c).dS(b).dz(s.b*s.d/2),s.ig())
break}},
l(a,b){var s=this
if(b==null)return!1
if(J.a1(b)!==A.D(s))return!1
return b instanceof A.eF&&b.a.l(0,s.a)&&b.b.l(0,s.b)&&b.c===s.c},
gu(a){return A.Y(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"StadiumBorder("+this.a.j(0)+", "+this.b.j(0)+", "+B.d.N(this.c*100,1)+"% of the way to being a RoundedRectangleBorder)"}}
A.os.prototype={
I(){return"TextOverflow."+this.b}}
A.nK.prototype={
l(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(b instanceof A.nK)if(b.a.l(0,r.a))if(b.b===r.b)s=b.c==r.c
else s=!1
else s=!1
else s=!1
return s},
gu(a){var s=this
return A.Y(s.a,s.b,s.d,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"PlaceholderDimensions("+this.a.j(0)+", "+A.i(this.d)+")"}}
A.zG.prototype={
I(){return"TextWidthBasis."+this.b}}
A.agF.prototype={}
A.zC.prototype={
a7(){var s=this,r=s.a
if(r!=null)r.m()
s.dy=s.dx=s.fr=s.a=null},
scF(a,b){var s,r,q=this
if(J.h(q.d,b))return
s=q.d
s=s==null?null:s.a
if(!J.h(s,b.a)){s=q.CW
if(s!=null)s.m()
q.CW=null}s=q.d
s=s==null?null:s.aO(0,b)
r=s==null?B.d_:s
q.d=b
q.e=null
s=r.a
if(s>=3)q.a7()
else if(s>=2)q.b=!0},
gv_(){var s=this.e
if(s==null){s=this.d
s=s==null?null:s.Nj(!1)
this.e=s}return s==null?"":s},
sCb(a,b){if(this.f===b)return
this.f=b
this.a7()},
sbJ(a){var s,r=this
if(r.r===a)return
r.r=a
r.a7()
s=r.CW
if(s!=null)s.m()
r.CW=null},
sCc(a){var s,r=this
if(r.w===a)return
r.w=a
r.a7()
s=r.CW
if(s!=null)s.m()
r.CW=null},
sa4G(a){if(this.x==a)return
this.x=a
this.a7()},
sB1(a,b){if(J.h(this.y,b))return
this.y=b
this.a7()},
sB6(a){if(this.z==a)return
this.z=a
this.a7()},
sCd(a){if(this.as===a)return
this.as=a
this.a7()},
vT(a){if(a==null||a.length===0||A.d8(a,this.ch))return
this.ch=a
this.a7()},
Fx(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.d.a
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
o=l==null?f:new A.O8(l)
k=e.w
j=e.x
i=e.d
h=e.r
if(h==null)h=14
e=e.as
e=A.ar2(n,i,h*q,j,k,e,m,p,f,s,r,o)}if(e==null){e=g.f
s=g.r
if(s==null)s=a
r=g.w
q=g.z
p=g.at
p=A.ar2(g.x,f,14*r,f,f,f,g.y,q,f,e,s,p)
e=p}return e},
V2(){return this.Fx(null)},
gv2(){var s,r,q=this,p=q.CW
if(p==null){p=q.Fx(B.a4)
s=$.au().zF(p)
p=q.d
if(p==null)r=null
else{p=p.a
r=p==null?null:p.CX(q.w)}if(r!=null)s.BU(r)
s.t9(" ")
p=s.be()
p.fQ(B.VT)
q.CW=p}return p.gc0(p)},
gby(a){var s=this.as,r=this.a
s=s===B.a0Z?r.gM4():r.gby(r)
return Math.ceil(s)},
eH(a){var s
switch(a.a){case 0:s=this.a
return s.gte(s)
case 1:s=this.a
return s.ga6j(s)}},
Fw(){var s,r,q=this,p=q.d
if(p==null)throw A.c(A.ac("TextPainter.text must be set to a non-null value before using the TextPainter."))
s=q.V2()
r=$.au().zF(s)
s=q.w
p.JH(r,q.ch,s)
q.ay=r.ga7X()
q.a=r.be()
q.b=!1},
GO(a,b){var s,r,q=this
q.a.fQ(new A.lH(b))
if(a!==b){switch(q.as.a){case 1:s=Math.ceil(q.a.gM4())
break
case 0:s=Math.ceil(q.a.ga7h())
break
default:s=null}s=A.J(s,a,b)
r=q.a
if(s!==Math.ceil(r.gby(r)))q.a.fQ(new A.lH(s))}},
AZ(a,b){var s=this,r=s.a==null
if(!r&&b===s.cx&&a===s.cy)return
if(s.b||r)s.Fw()
s.cx=b
s.cy=a
s.dy=s.dx=s.fr=null
s.GO(b,a)
s.ax=s.a.vu()},
a6Z(){return this.AZ(1/0,0)},
aG(a,b){var s,r=this,q=r.cx,p=r.cy
if(r.a==null||q==null||p==null)throw A.c(A.ac("TextPainter.paint called when text geometry was not yet calculated.\nPlease call layout() before paint() to position the text before painting it."))
if(r.b){r.Fw()
r.GO(q,p)}s=r.a
s.toString
a.kX(s,b)},
G7(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.gv_().length
if(g===0||a>g)return null
s=B.b.al(h.gv_(),Math.max(0,a-1))
r=(s&63488)===55296||h.d.al(0,a)===8205||s===8207||s===8206
q=r?2:1
p=A.a([],t.Lx)
for(o=-g,n=!r,m=s===10;p.length===0;){l=a-q
p=h.a.CH(l,a,B.n5)
if(p.length===0){if(n&&m)break
if(l<o)break
q*=2
continue}k=B.c.gK(p)
if(m){o=k.d
return new A.E(h.gxa().a,o,h.gxa().a,o+o-k.b)}o=k.e
j=o===B.y?k.c:k.a
i=o===B.a4?j-(b.c-b.a):j
o=h.a
o=A.J(i,0,o.gby(o))
n=h.a
return new A.E(o,k.b,A.J(i,0,n.gby(n)),k.d)}return null},
G6(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.gv_().length
if(h===0||a<0)return null
s=B.b.al(i.gv_(),Math.min(a,h-1))
r=(s&63488)===55296||s===8205||s===8207||s===8206
q=r?2:1
p=A.a([],t.Lx)
for(o=h<<1>>>0,n=!r;p.length===0;){m=a+q
p=i.a.CH(a,m,B.n5)
if(p.length===0){if(n)break
if(m>=o)break
q*=2
continue}l=B.c.gU(p)
o=l.e
k=o===B.y?l.a:l.c
j=o===B.a4?k-(b.c-b.a):k
o=i.a
o=A.J(j,0,o.gby(o))
n=i.a
return new A.E(o,l.b,A.J(j,0,n.gby(n)),l.d)}return null},
gxa(){var s=this
switch(s.f.a){case 0:return B.j
case 1:return new A.r(s.gby(s),0)
case 2:return new A.r(s.gby(s)/2,0)
case 3:case 4:switch(s.r.a){case 0:return new A.r(s.gby(s),0)
case 1:return B.j}break
case 5:switch(s.r.a){case 0:return B.j
case 1:return new A.r(s.gby(s),0)}break}},
Fm(a,b){var s,r,q,p,o=this
if(a.l(0,o.dx)&&b.l(0,o.dy))return
s=a.a
switch(a.b.a){case 0:r=o.G7(s,b)
if(r==null)r=o.G6(s,b)
break
case 1:r=o.G6(s,b)
if(r==null)r=o.G7(s,b)
break
default:r=null}q=r!=null
p=q?new A.r(r.a,r.b):o.gxa()
o.db=new A.agF(p,q?r.d-r.b:null)
o.dx=a
o.dy=b},
m(){var s=this,r=s.CW
if(r!=null)r.m()
s.CW=null
r=s.a
if(r!=null)r.m()
s.d=s.a=null}}
A.zF.prototype={
gKd(a){return this.e},
gCz(){return!0},
iO(a,b){t.b.b(a)},
JH(a,b,c){var s,r,q,p,o,n=this.a,m=n!=null
if(m)a.BU(n.CX(c))
n=this.b
if(n!=null)try{a.t9(n)}catch(q){n=A.ak(q)
if(n instanceof A.hl){s=n
r=A.az(q)
A.e1(new A.bS(s,r,"painting library",A.bw("while building a TextSpan"),null,!1))
a.t9("\ufffd")}else throw q}n=this.c
if(n!=null)for(p=n.length,o=0;o<n.length;n.length===p||(0,A.P)(n),++o)n[o].JH(a,b,c)
if(m)a.hr()},
b1(a){var s,r,q
if(this.b!=null)if(!a.$1(this))return!1
s=this.c
if(s!=null)for(r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)if(!s[q].b1(a))return!1
return!0},
O8(a,b){var s,r,q,p,o=this.b
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
JW(a,b,c){var s,r,q=this.b
if(q!=null)a.a+=q
q=this.c
if(q!=null)for(s=q.length,r=0;r<q.length;q.length===s||(0,A.P)(q),++r)q[r].JW(a,!0,c)},
JV(a,b,c){var s,r,q=this.b
if(q!=null){s=A.a([],t.oU)
a.push(A.auO(q,null,null,s))}q=this.c
if(q!=null)for(s=q.length,r=0;r<q.length;q.length===s||(0,A.P)(q),++r)q[r].JV(a,b,!1)},
a3p(a){return this.JV(a,null,!1)},
a39(a,b){var s,r,q,p=this.b
if(p==null)return null
s=b.a
r=a-s
q=p.length
if(r<q)return B.b.al(p,r)
b.a=s+q
return null},
aO(a,b){var s,r,q,p,o,n=this
if(n===b)return B.e1
if(A.D(b)!==A.D(n))return B.d_
if(b.b==n.b){s=n.c
s=s==null?null:s.length
r=b.c
s=s!=(r==null?null:r.length)||n.a==null!==(b.a==null)}else s=!0
if(s)return B.d_
s=n.a
if(s!=null){r=b.a
r.toString
q=s.aO(0,r)
p=q.a>0?q:B.e1
if(p===B.d_)return p}else p=B.e1
s=n.c
if(s!=null)for(r=b.c,o=0;o<s.length;++o){q=s[o].aO(0,r[o])
if(q.a>p.a)p=q
if(p===B.d_)return p}return p},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.a1(b)!==A.D(s))return!1
if(!s.PG(0,b))return!1
return b instanceof A.zF&&b.b==s.b&&s.e.l(0,b.e)&&A.d8(b.c,s.c)},
gu(a){var s=this,r=null,q=A.eT.prototype.gu.call(s,s),p=s.c
p=p==null?r:A.dv(p)
return A.Y(q,s.b,r,r,r,r,s.e,p,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
cd(){return"TextSpan"},
$ias:1,
$ijU:1,
gBu(){return null},
gBv(){return null}}
A.v.prototype={
gmQ(){return this.e},
gmf(a){return this.d},
oN(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=c0==null?a0.a:c0,a2=a0.ay
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
b=b1==null?a0.gmf(a0):b1
a=b2==null?a0.e:b2
return A.aJ(r,q,s,null,f,e,d,c,b,a,a0.fr,p,n,g,o,a2,j,a1,i,m,a0.ax,a0.fy,a0.f,h,k,l)},
a3S(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5){return this.oN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,null,r,s,a0,a1,a2,a3,a4,a5)},
hU(a){return this.oN(null,null,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
a3H(a){return this.oN(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null)},
K2(a){return this.oN(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,a,null,null,null,null,null,null,null,null)},
K6(a,b){return this.oN(null,null,a,null,null,null,null,null,null,null,null,b,null,null,null,null,null,null,null,null,null,null,null,null,null,null)},
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
a1=a4.gmf(a4)
a2=a4.e
a3=a4.f
return this.a3S(g,r,s,null,c,b,a,a0,a1,a2,e,q,o,d,p,h,k,j,n,i,a4.fy,a3,f,l,m)},
CX(a){var s,r,q=this,p=q.gmQ(),o=q.r
o=o==null?null:o*a
s=q.ch
if(s==null){s=q.c
if(s!=null){r=$.au().ba()
r.saq(0,s)
s=r}else s=null}return A.awg(s,q.b,q.CW,q.cx,q.cy,q.db,q.d,p,q.fr,o,q.x,q.fx,q.w,q.ay,q.as,q.at,q.y,q.ax,q.dy,q.Q,q.z)},
aO(a,b){var s=this
if(s===b)return B.e1
if(s.a!==b.a||s.d!=b.d||s.r!=b.r||s.w!=b.w||s.x!=b.x||s.y!=b.y||s.z!=b.z||s.Q!=b.Q||s.as!=b.as||s.at!=b.at||s.ay!=b.ay||s.ch!=b.ch||!A.d8(s.dy,b.dy)||!A.d8(s.fr,b.fr)||!A.d8(s.fx,b.fx)||!A.d8(s.gmQ(),b.gmQ())||!1)return B.d_
if(!J.h(s.b,b.b)||!J.h(s.c,b.c)||!J.h(s.CW,b.CW)||!J.h(s.cx,b.cx)||s.cy!=b.cy||s.db!=b.db)return B.Wc
return B.e1},
l(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(J.a1(b)!==A.D(r))return!1
if(b instanceof A.v)if(b.a===r.a)if(J.h(b.b,r.b))if(J.h(b.c,r.c))if(b.r==r.r)if(b.w==r.w)if(b.x==r.x)if(b.y==r.y)if(b.z==r.z)if(b.Q==r.Q)if(b.as==r.as)if(b.at==r.at)if(b.ay==r.ay)if(b.ch==r.ch)if(A.d8(b.dy,r.dy))if(A.d8(b.fr,r.fr))if(A.d8(b.fx,r.fx))if(J.h(b.CW,r.CW))if(J.h(b.cx,r.cx))if(b.cy==r.cy)if(b.db==r.db)if(b.d==r.d)if(A.d8(b.gmQ(),r.gmQ()))s=!0
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
gu(a){var s,r=this,q=null,p=r.gmQ(),o=p==null?q:A.dv(p),n=A.Y(r.cy,r.db,r.d,o,r.f,r.fy,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a),m=r.dy,l=r.fx
o=m==null?q:A.dv(m)
s=l==null?q:A.dv(l)
return A.Y(r.a,r.b,r.c,r.r,r.w,r.x,r.y,r.z,r.Q,r.as,r.at,r.ax,r.ay,r.ch,o,q,s,r.CW,r.cx,n)},
cd(){return"TextStyle"}}
A.UT.prototype={}
A.HS.prototype={
Tg(a,b,c,d,e){var s=this
s.r=A.axL(new A.a32(s),s.gA7(s),0,10,0)},
dh(a,b){var s,r,q=this
if(b>q.r)return q.gu4()
s=q.e
r=q.c
return q.d+s*Math.pow(q.b,b)/r-s/r-q.f/2*b*b},
e_(a,b){var s=this
if(b>s.r)return 0
return s.e*Math.pow(s.b,b)-s.f*b},
gu4(){var s=this
if(s.f===0)return s.d-s.e/s.c
return s.dh(0,s.r)},
Ne(a){var s,r=this,q=r.d
if(a===q)return 0
s=r.e
if(s!==0)if(s>0)q=a<q||a>r.gu4()
else q=a>q||a<r.gu4()
else q=!0
if(q)return 1/0
return A.axL(r.gA7(r),r.ga9J(r),0,10,a)},
jS(a){return Math.abs(this.e_(0,a))<this.a.c},
j(a){return"FrictionSimulation(c\u2093: "+B.d.N(this.b,1)+", x\u2080: "+B.d.N(this.d,1)+", dx\u2080: "+B.d.N(this.e,1)+")"}}
A.a32.prototype={
$1(a){var s=this.a
return s.e*Math.pow(s.b,a)*s.c-s.f},
$S:80}
A.ac_.prototype={
j(a){return"Simulation"}}
A.adX.prototype={
j(a){return"SpringDescription(mass: "+B.d.N(this.a,1)+", stiffness: "+B.f.N(this.b,1)+", damping: "+B.d.N(this.c,1)+")"}}
A.re.prototype={
I(){return"SpringType."+this.b}}
A.NN.prototype={
dh(a,b){return this.b+this.c.dh(0,b)},
e_(a,b){return this.c.e_(0,b)},
jS(a){var s=this.c
return A.Du(s.dh(0,a),0,this.a.a)&&A.Du(s.e_(0,a),0,this.a.c)},
j(a){var s=this.c
return"SpringSimulation(end: "+B.d.N(this.b,1)+", "+s.gdC(s).j(0)+")"}}
A.lW.prototype={
dh(a,b){return this.jS(b)?this.b:this.Rl(0,b)}}
A.agU.prototype={
dh(a,b){return(this.b+this.c*b)*Math.pow(2.718281828459045,this.a*b)},
e_(a,b){var s=this.a,r=Math.pow(2.718281828459045,s*b),q=this.c
return s*(this.b+q*b)*r+q*r},
gdC(a){return B.XH}}
A.ajM.prototype={
dh(a,b){var s=this
return s.c*Math.pow(2.718281828459045,s.a*b)+s.d*Math.pow(2.718281828459045,s.b*b)},
e_(a,b){var s=this,r=s.a,q=s.b
return s.c*r*Math.pow(2.718281828459045,r*b)+s.d*q*Math.pow(2.718281828459045,q*b)},
gdC(a){return B.XJ}}
A.amI.prototype={
dh(a,b){var s=this,r=s.a*b
return Math.pow(2.718281828459045,s.b*b)*(s.c*Math.cos(r)+s.d*Math.sin(r))},
e_(a,b){var s,r=this,q=r.b,p=Math.pow(2.718281828459045,q*b),o=r.a,n=o*b,m=Math.cos(n),l=Math.sin(n)
n=r.d
s=r.c
return p*(n*o*m-s*o*l)+q*p*(n*l+s*m)},
gdC(a){return B.XI}}
A.Ol.prototype={
j(a){return"Tolerance(distance: \xb1"+A.i(this.a)+", time: \xb10.001, velocity: \xb1"+A.i(this.c)+")"}}
A.qR.prototype={
Aw(){var s=this,r=s.y1$
r===$&&A.b()
r=r.e
r.toString
r.szv(s.Kb())
if(s.y1$.e.B$!=null)s.Oi()},
AC(){},
Ay(){},
Kb(){var s,r=$.cH(),q=r.w
if(q==null){s=self.window.devicePixelRatio
q=s===0?1:s}return new A.OF(r.glj().di(0,q),q)},
Yc(){var s,r=this
if($.b_().a.c){if(r.y2$==null){s=r.y1$
s===$&&A.b()
r.y2$=s.KJ()}}else{s=r.y2$
if(s!=null)s.m()
r.y2$=null}},
OH(a){var s,r=this
if(a){if(r.y2$==null){s=r.y1$
s===$&&A.b()
r.y2$=s.KJ()}}else{s=r.y2$
if(s!=null)s.m()
r.y2$=null}},
Yv(a){B.Vz.o1("first-frame",null,!1,t.H)},
Ya(a,b,c){var s=this.y1$
s===$&&A.b()
s=s.as
if(s!=null)s.a7V(a,b,null)},
Ye(){var s,r=this.y1$
r===$&&A.b()
r=r.e
r.toString
s=t.W
s.a(A.M.prototype.gbI.call(r)).ay.D(0,r)
s.a(A.M.prototype.gbI.call(r)).nf()},
Yi(a){var s=this.y1$
s===$&&A.b()
s.e.toString
s=$.e0;(s==null?$.e0=A.l9():s).a9s(a)},
Yg(){var s=this.y1$
s===$&&A.b()
s.e.mp()},
XH(a){this.A6()
this.a0h()},
a0h(){$.bN.cy$.push(new A.aa7(this))},
Jt(){--this.bC$
if(!this.bg$)this.vJ()},
A6(){var s=this,r=s.y1$
r===$&&A.b()
r.a58()
s.y1$.a57()
s.y1$.a59()
if(s.bg$||s.bC$===0){s.y1$.e.a3k()
s.y1$.a5a()
s.bg$=!0}},
$ias:1,
$idT:1}
A.aa7.prototype={
$1(a){var s=this.a,r=s.xr$
r.toString
s=s.y1$
s===$&&A.b()
r.a9o(s.e.ga6g())},
$S:2}
A.aL.prototype={
zC(a,b,c,d){var s=this,r=d==null?s.a:d,q=b==null?s.b:b,p=c==null?s.c:c
return new A.aL(r,q,p,a==null?s.d:a)},
a3P(a,b){return this.zC(null,null,a,b)},
K4(a){return this.zC(a,null,null,null)},
a3I(a){return this.zC(null,a,null,null)},
Kh(a){var s=this,r=a.gcB(),q=a.gbl(a)+a.gbp(a),p=Math.max(0,s.a-r),o=Math.max(0,s.c-q)
return new A.aL(p,Math.max(p,s.b-r),o,Math.max(o,s.d-q))},
ph(a){var s=this,r=a.a,q=a.b,p=a.c,o=a.d
return new A.aL(A.J(s.a,r,q),A.J(s.b,r,q),A.J(s.c,p,o),A.J(s.d,p,o))},
Cg(a,b){var s,r,q=this,p=b==null,o=q.a,n=p?o:A.J(b,o,q.b),m=q.b
p=p?m:A.J(b,o,m)
o=a==null
m=q.c
s=o?m:A.J(a,m,q.d)
r=q.d
return new A.aL(n,p,s,o?r:A.J(a,m,r))},
vj(a){return this.Cg(a,null)},
Cf(a){return this.Cg(null,a)},
bu(a){var s=this
return new A.L(A.J(a.a,s.a,s.b),A.J(a.b,s.c,s.d))},
oM(a){var s,r,q,p,o,n=this,m=n.a,l=n.b
if(m>=l&&n.c>=n.d)return new A.L(A.J(0,m,l),A.J(0,n.c,n.d))
s=a.a
r=a.b
q=s/r
if(s>l){r=l/q
s=l}p=n.d
if(r>p){s=p*q
r=p}if(s<m){r=m/q
s=m}o=n.c
if(r<o){s=o*q
r=o}return new A.L(A.J(s,m,l),A.J(r,o,p))},
gLT(){var s=this
return s.a>=s.b&&s.c>=s.d},
a5(a,b){var s=this
return new A.aL(s.a*b,s.b*b,s.c*b,s.d*b)},
di(a,b){var s=this
return new A.aL(s.a/b,s.b/b,s.c/b,s.d/b)},
ga6M(){var s=this,r=s.a
if(r>=0)if(r<=s.b){r=s.c
r=r>=0&&r<=s.d}else r=!1
else r=!1
return r},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.a1(b)!==A.D(s))return!1
return b instanceof A.aL&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gu(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s,r=this,q=r.ga6M()?"":"; NOT NORMALIZED",p=r.a
if(p===1/0&&r.c===1/0)return"BoxConstraints(biggest"+q+")"
if(p===0&&r.b===1/0&&r.c===0&&r.d===1/0)return"BoxConstraints(unconstrained"+q+")"
s=new A.Yr()
return"BoxConstraints("+s.$3(p,r.b,"w")+", "+s.$3(r.c,r.d,"h")+q+")"}}
A.Yr.prototype={
$3(a,b,c){if(a===b)return c+"="+B.d.N(a,1)
return B.d.N(a,1)+"<="+c+"<="+B.d.N(b,1)},
$S:257}
A.ik.prototype={
z7(a,b,c){if(c!=null){c=A.Ky(A.ar4(c))
if(c==null)return!1}return this.Jr(a,b,c)},
ou(a,b,c){var s,r=b==null,q=r?c:c.ag(0,b)
r=!r
if(r)this.c.push(new A.tg(new A.r(-b.a,-b.b)))
s=a.$2(this,q)
if(r)this.v0()
return s},
Jr(a,b,c){var s,r=c==null,q=r?b:A.cN(c,b)
r=!r
if(r)this.c.push(new A.AY(c))
s=a.$2(this,q)
if(r)this.v0()
return s},
Jq(a,b,c){var s,r=this
if(b!=null)r.c.push(new A.tg(new A.r(-b.a,-b.b)))
else{c.toString
c=A.Ky(A.ar4(c))
c.toString
r.c.push(new A.AY(c))}s=a.$1(r)
r.v0()
return s},
a2n(a,b){return this.Jq(a,null,b)},
a2m(a,b){return this.Jq(a,b,null)}}
A.pk.prototype={
j(a){return"<optimized out>#"+A.c7(this.a)+"@"+this.c.j(0)}}
A.eL.prototype={
j(a){return"offset="+this.a.j(0)}}
A.uG.prototype={}
A.H.prototype={
ey(a){if(!(a.e instanceof A.eL))a.e=new A.eL(B.j)},
fW(a){var s,r=this.k1
if(r==null)r=this.k1=A.x(t.k,t.FW)
s=r.bQ(0,a,new A.a9A(this,a))
return s},
ce(a){return B.S},
gkg(){var s=this.k3
return new A.E(0,0,0+s.a,0+s.b)},
vz(a,b){var s=null
try{s=this.j8(a)}finally{}if(s==null&&!b)return this.k3.b
return s},
NS(a){return this.vz(a,!1)},
j8(a){var s=this,r=s.k4
if(r==null)r=s.k4=A.x(t.W7,t.PM)
r.bQ(0,a,new A.a9z(s,a))
return s.k4.i(0,a)},
eH(a){return null},
ga_(){return t.k.a(A.z.prototype.ga_.call(this))},
UC(){var s,r=this,q=r.k4,p=q==null
if(!(!p&&q.a!==0)){s=r.id
if(!(s!=null&&s.a!==0)){s=r.k1
s=s!=null&&s.a!==0}else s=!0}else s=!0
if(s){if(!p)q.Y(0)
q=r.id
if(q!=null)q.Y(0)
q=r.k1
if(q!=null)q.Y(0)
return!0}return!1},
a7(){var s=this
if(s.UC()&&s.c instanceof A.z){s.uF()
return}s.QD()},
cC(a,b){var s,r=this
if(r.k3!=null)if(!a.l(0,t.k.a(A.z.prototype.ga_.call(r)))){s=r.k4
s=s!=null&&s.a!==0}else s=!1
else s=!1
if(s){s=r.k4
if(s!=null)s.Y(0)}r.QC(a,b)},
fQ(a){return this.cC(a,!1)},
q2(){this.k3=this.ce(t.k.a(A.z.prototype.ga_.call(this)))},
bx(){},
c5(a,b){var s=this
if(s.k3.C(0,b))if(s.d0(a,b)||s.jR(b)){a.D(0,new A.pk(b,s))
return!0}return!1},
jR(a){return!1},
d0(a,b){return!1},
dl(a,b){var s,r=a.e
r.toString
s=t.hX.a(r).a
b.aA(0,s.a,s.b)},
lw(a){var s,r,q,p,o,n=this.bM(0,null)
if(n.hT(n)===0)return B.j
s=new A.ha(new Float64Array(3))
s.h_(0,0,1)
r=new A.ha(new Float64Array(3))
r.h_(0,0,0)
q=n.j_(r)
r=new A.ha(new Float64Array(3))
r.h_(0,0,1)
p=n.j_(r).ag(0,q)
r=new A.ha(new Float64Array(3))
r.h_(a.a,a.b,0)
o=n.j_(r)
r=o.ag(0,p.D6(s.Kv(o)/s.Kv(p))).a
return new A.r(r[0],r[1])},
gi9(){var s=this.k3
return new A.E(0,0,0+s.a,0+s.b)},
iO(a,b){this.QB(a,b)}}
A.a9A.prototype={
$0(){return this.a.ce(this.b)},
$S:258}
A.a9z.prototype={
$0(){return this.a.eH(this.b)},
$S:259}
A.d1.prototype={
a4n(a){var s,r,q,p=this.a8$
for(s=A.o(this).h("d1.1?");p!=null;){r=s.a(p.e)
q=p.j8(a)
if(q!=null)return q+r.a.b
p=r.a9$}return null},
Kg(a){var s,r,q,p,o=this.a8$
for(s=A.o(this).h("d1.1"),r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.j8(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.a9$}return r},
zM(a,b){var s,r,q={},p=q.a=this.bB$
for(s=A.o(this).h("d1.1");p!=null;p=r){p=p.e
p.toString
s.a(p)
if(a.ou(new A.a9y(q,b,p),p.a,b))return!0
r=p.aP$
q.a=r}return!1},
oS(a,b){var s,r,q,p,o,n=this.a8$
for(s=A.o(this).h("d1.1"),r=b.a,q=b.b;n!=null;){p=n.e
p.toString
s.a(p)
o=p.a
a.eP(n,new A.r(o.a+r,o.b+q))
n=p.a9$}}}
A.a9y.prototype={
$2(a,b){return this.a.a.c5(a,b)},
$S:20}
A.Ae.prototype={
au(a){this.wb(0)}}
A.fS.prototype={
j(a){return this.qM(0)+"; id="+A.i(this.e)}}
A.KK.prototype={
e7(a,b){var s,r=this.b.i(0,a)
r.cC(b,!0)
s=r.k3
s.toString
return s},
ep(a,b){var s=this.b.i(0,a).e
s.toString
t.Wz.a(s).a=b},
Uj(a,b){var s,r,q,p,o,n,m=this,l=m.b
try{m.b=A.x(t.K,t.x)
for(r=t.Wz,q=b;q!=null;q=n){p=q.e
p.toString
s=r.a(p)
p=m.b
p.toString
o=s.e
o.toString
p.k(0,o,q)
n=s.a9$}m.uZ(a)}finally{m.b=l}},
j(a){return"MultiChildLayoutDelegate"}}
A.Me.prototype={
ey(a){if(!(a.e instanceof A.fS))a.e=new A.fS(null,null,B.j)},
szP(a){var s=this,r=s.M
if(r===a)return
if(A.D(a)!==A.D(r)||a.nx(r))s.a7()
s.M=a
s.b!=null},
aC(a){this.RL(a)},
au(a){this.RM(0)},
ce(a){return a.bu(new A.L(A.J(1/0,a.a,a.b),A.J(1/0,a.c,a.d)))},
bx(){var s=this,r=t.k.a(A.z.prototype.ga_.call(s))
r=r.bu(new A.L(A.J(1/0,r.a,r.b),A.J(1/0,r.c,r.d)))
s.k3=r
s.M.Uj(r,s.a8$)},
aG(a,b){this.oS(a,b)},
d0(a,b){return this.zM(a,b)}}
A.Bo.prototype={
aC(a){var s,r,q
this.eB(a)
s=this.a8$
for(r=t.Wz;s!=null;){s.aC(a)
q=s.e
q.toString
s=r.a(q).a9$}},
au(a){var s,r,q
this.dU(0)
s=this.a8$
for(r=t.Wz;s!=null;){s.au(0)
q=s.e
q.toString
s=r.a(q).a9$}}}
A.T8.prototype={}
A.uU.prototype={
Z(a,b){var s=this.a
return s==null?null:s.Z(0,b)},
G(a,b){var s=this.a
return s==null?null:s.G(0,b)},
gD9(){return null},
Dn(a){return this.eX(a)},
um(a){return null},
j(a){var s=A.c7(this),r=this.a
r=r==null?null:r.j(0)
if(r==null)r=""
return"<optimized out>#"+s+"("+r+")"}}
A.Mf.prototype={
suY(a){var s=this.v
if(s==a)return
this.v=a
this.FC(a,s)},
sL5(a){var s=this.R
if(s==a)return
this.R=a
this.FC(a,s)},
FC(a,b){var s=this,r=a==null
if(r)s.az()
else if(b==null||A.D(a)!==A.D(b)||a.eX(b))s.az()
if(s.b!=null){if(b!=null)b.G(0,s.geo())
if(!r)a.Z(0,s.geo())}if(r){if(s.b!=null)s.b3()}else if(b==null||A.D(a)!==A.D(b)||a.Dn(b))s.b3()},
sv3(a){if(this.aD.l(0,a))return
this.aD=a
this.a7()},
aC(a){var s,r=this
r.nI(a)
s=r.v
if(s!=null)s.Z(0,r.geo())
s=r.R
if(s!=null)s.Z(0,r.geo())},
au(a){var s=this,r=s.v
if(r!=null)r.G(0,s.geo())
r=s.R
if(r!=null)r.G(0,s.geo())
s.lM(0)},
d0(a,b){var s=this.R
if(s!=null){s=s.um(b)
s=s===!0}else s=!1
if(s)return!0
return this.qR(a,b)},
jR(a){var s=this.v
if(s!=null){s=s.um(a)
s=s!==!1}else s=!1
return s},
bx(){this.wh()
this.b3()},
oL(a){return a.bu(this.aD)},
Hg(a,b,c){var s
A.bc("debugPreviousCanvasSaveCount")
a.cQ(0)
if(!b.l(0,B.j))a.aA(0,b.a,b.b)
s=this.k3
s.toString
c.aG(a,s)
a.cM(0)},
aG(a,b){var s,r,q=this
if(q.v!=null){s=a.gbS(a)
r=q.v
r.toString
q.Hg(s,b,r)
q.I2(a)}q.hC(a,b)
if(q.R!=null){s=a.gbS(a)
r=q.R
r.toString
q.Hg(s,b,r)
q.I2(a)}},
I2(a){},
fe(a){var s,r=this
r.hA(a)
r.bK=null
s=r.R
r.el=s==null?null:s.gD9()
a.a=!1},
oC(a,b,c){var s,r,q,p,o=this
o.hj=A.avJ(o.hj,B.tM)
o.iM=A.avJ(o.iM,B.tM)
s=o.hj
r=s!=null&&!s.gO(s)
s=o.iM
q=s!=null&&!s.gO(s)
s=A.a([],t.Y)
if(r){p=o.hj
p.toString
B.c.L(s,p)}B.c.L(s,c)
if(q){p=o.iM
p.toString
B.c.L(s,p)}o.E8(a,b,s)},
mp(){this.we()
this.iM=this.hj=null}}
A.Gp.prototype={}
A.Mi.prototype={
Tp(a){var s,r,q,p,o=this
try{r=o.M
if(r!==""){q=$.azK()
s=$.au().zF(q)
s.BU($.azL())
s.t9(r)
r=s.be()
o.am!==$&&A.eI()
o.am=r}else{o.am!==$&&A.eI()
o.am=null}}catch(p){}},
gkj(){return!0},
jR(a){return!0},
ce(a){return a.bu(B.XA)},
aG(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
try{p=a.gbS(a)
o=i.k3
n=b.a
m=b.b
l=o.a
o=o.b
k=$.au().ba()
k.saq(0,$.azJ())
p.cz(new A.E(n,m,n+l,m+o),k)
p=i.am
p===$&&A.b()
if(p!=null){s=i.k3.a
r=0
q=0
if(s>328){s-=128
r+=64}p.fQ(new A.lH(s))
if(i.k3.b>96+p.gc0(p)+12)q+=96
a.gbS(a).kX(p,b.W(0,new A.r(r,q)))}}catch(j){}}}
A.vE.prototype={
I(){return"FlexFit."+this.b}}
A.dK.prototype={
j(a){return this.qM(0)+"; flex="+A.i(this.e)+"; fit="+A.i(this.f)}}
A.wA.prototype={
I(){return"MainAxisSize."+this.b}}
A.lw.prototype={
I(){return"MainAxisAlignment."+this.b}}
A.l6.prototype={
I(){return"CrossAxisAlignment."+this.b}}
A.qO.prototype={
ey(a){if(!(a.e instanceof A.dK))a.e=new A.dK(null,null,B.j)},
eH(a){if(this.M===B.b9)return this.Kg(a)
return this.a4n(a)},
r4(a){switch(this.M.a){case 0:return a.b
case 1:return a.a}},
r5(a){switch(this.M.a){case 0:return a.a
case 1:return a.b}},
ce(a){var s
if(this.aF===B.ol)return B.S
s=this.Fq(a,A.ap_())
switch(this.M.a){case 0:return a.bu(new A.L(s.a,s.b))
case 1:return a.bu(new A.L(s.b,s.a))}},
Fq(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.M===B.b9?a2.b:a2.d,a0=a<1/0,a1=c.a8$
for(s=t.US,r=a2.b,q=a2.d,p=b,o=0,n=0,m=0;a1!=null;){l=a1.e
l.toString
s.a(l)
k=l.e
if(k==null)k=0
if(k>0){o+=k
p=a1}else{if(c.aF===B.ok)switch(c.M.a){case 0:j=A.pj(q,b)
break
case 1:j=A.pj(b,r)
break
default:j=b}else switch(c.M.a){case 0:j=new A.aL(0,1/0,0,q)
break
case 1:j=new A.aL(0,r,0,1/0)
break
default:j=b}i=a3.$2(a1,j)
m+=c.r5(i)
n=Math.max(n,A.i9(c.r4(i)))}a1=l.a9$}h=Math.max(0,(a0?a:0)-m)
if(o>0){g=a0?h/o:0/0
a1=c.a8$
for(f=0;a1!=null;){l=a1.e
l.toString
k=s.a(l).e
if(k==null)k=0
if(k>0){if(a0)e=a1===p?h-f:g*k
else e=1/0
d=A.bc("minChildExtent")
l=a1.e
l.toString
l=s.a(l).f
switch((l==null?B.ii:l).a){case 0:if(d.b!==d)A.N(A.a6j(d.a))
d.b=e
break
case 1:if(d.b!==d)A.N(A.a6j(d.a))
d.b=0
break}if(c.aF===B.ok)switch(c.M.a){case 0:l=d.b
if(l===d)A.N(A.hI(d.a))
j=new A.aL(l,e,q,q)
break
case 1:l=d.b
if(l===d)A.N(A.hI(d.a))
j=new A.aL(r,r,l,e)
break
default:j=b}else switch(c.M.a){case 0:l=d.b
if(l===d)A.N(A.hI(d.a))
j=new A.aL(l,e,0,q)
break
case 1:l=d.b
if(l===d)A.N(A.hI(d.a))
j=new A.aL(0,r,l,e)
break
default:j=b}i=a3.$2(a1,j)
m+=c.r5(i)
f+=e
n=Math.max(n,A.i9(c.r4(i)))}l=a1.e
l.toString
a1=s.a(l).a9$}}return new A.aiT(a0&&c.ah===B.o?a:m,n,m)},
bx(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=t.k.a(A.z.prototype.ga_.call(a)),a1=a.Fq(a0,A.ap0()),a2=a1.a,a3=a1.b
if(a.aF===B.ol){s=a.a8$
for(r=t.US,q=0,p=0,o=0;s!=null;){n=a.B
n.toString
m=s.vz(n,!0)
if(m!=null){q=Math.max(q,m)
p=Math.max(m,p)
o=Math.max(s.k3.b-m,o)
a3=Math.max(p+o,a3)}n=s.e
n.toString
s=r.a(n).a9$}}else q=0
switch(a.M.a){case 0:r=a.k3=a0.bu(new A.L(a2,a3))
a2=r.a
a3=r.b
break
case 1:r=a.k3=a0.bu(new A.L(a3,a2))
a2=r.b
a3=r.a
break}l=a2-a1.c
a.an=Math.max(0,-l)
k=Math.max(0,l)
j=A.bc("leadingSpace")
i=A.bc("betweenSpace")
r=A.ay_(a.M,a.b9,a.bh)
h=r===!1
switch(a.am.a){case 0:j.scg(0)
i.scg(0)
break
case 1:j.scg(k)
i.scg(0)
break
case 2:j.scg(k/2)
i.scg(0)
break
case 3:j.scg(0)
r=a.cX$
i.scg(r>1?k/(r-1):0)
break
case 4:r=a.cX$
i.scg(r>0?k/r:0)
j.scg(i.aL()/2)
break
case 5:r=a.cX$
i.scg(r>0?k/(r+1):0)
j.scg(i.aL())
break}g=h?a2-j.aL():j.aL()
s=a.a8$
for(r=t.US,n=a3/2,f=i.a;s!=null;){e=s.e
e.toString
r.a(e)
d=a.aF
switch(d.a){case 0:case 1:if(A.ay_(A.aLM(a.M),a.b9,a.bh)===(d===B.aJ))c=0
else{d=s.k3
d.toString
c=a3-a.r4(d)}break
case 2:d=s.k3
d.toString
c=n-a.r4(d)/2
break
case 3:c=0
break
case 4:if(a.M===B.b9){d=a.B
d.toString
m=s.vz(d,!0)
c=m!=null?q-m:0}else c=0
break
default:c=null}if(h){d=s.k3
d.toString
g-=a.r5(d)}switch(a.M.a){case 0:e.a=new A.r(g,c)
break
case 1:e.a=new A.r(c,g)
break}if(h){d=i.b
if(d===i)A.N(A.hI(f))
g-=d}else{d=s.k3
d.toString
d=a.r5(d)
b=i.b
if(b===i)A.N(A.hI(f))
g+=d+b}s=e.a9$}},
d0(a,b){return this.zM(a,b)},
aG(a,b){var s,r,q,p=this
if(!(p.an>1e-10)){p.oS(a,b)
return}s=p.k3
if(s.gO(s))return
s=p.bc
r=p.cx
r===$&&A.b()
q=p.k3
s.saX(0,a.k5(r,b,new A.E(0,0,0+q.a,0+q.b),p.ga4o(),p.cY,s.a))},
m(){this.bc.saX(0,null)
this.RN()},
iD(a){var s
switch(this.cY.a){case 0:return null
case 1:case 2:case 3:if(this.an>1e-10){s=this.k3
s=new A.E(0,0,0+s.a,0+s.b)}else s=null
return s}},
cd(){var s=this.Ea()
return s}}
A.aiT.prototype={}
A.T9.prototype={
aC(a){var s,r,q
this.eB(a)
s=this.a8$
for(r=t.US;s!=null;){s.aC(a)
q=s.e
q.toString
s=r.a(q).a9$}},
au(a){var s,r,q
this.dU(0)
s=this.a8$
for(r=t.US;s!=null;){s.au(0)
q=s.e
q.toString
s=r.a(q).a9$}}}
A.Ta.prototype={}
A.Bp.prototype={
m(){var s,r,q
for(s=this.u0$,r=s.length,q=0;q<r;++q)s[q].m()
this.hB()},
eQ(){this.E9()}}
A.Ml.prototype={
Yy(){var s=this
if(s.M!=null)return
s.M=s.dc
s.am=s.i_&&s.eM===B.a4},
y0(){this.am=this.M=null
this.az()},
sfL(a,b){var s=this,r=s.ah
if(b==r)return
if(b!=null&&r!=null&&b.LN(r)){b.m()
return}r=s.ah
if(r!=null)r.m()
s.ah=b
s.az()
if(s.b9==null||s.bh==null)s.a7()},
sby(a,b){if(b==this.b9)return
this.b9=b
this.a7()},
sc0(a,b){if(b==this.bh)return
this.bh=b
this.a7()},
sOg(a,b){if(b===this.B)return
this.B=b
this.a7()},
a1r(){this.an=null},
saq(a,b){return},
sn9(a,b){return},
smO(a){if(a===this.bH)return
this.bH=a
this.az()},
sa3d(a){return},
sAp(a){if(a==this.ek)return
this.ek=a
this.az()},
see(a){if(a.l(0,this.dc))return
this.dc=a
this.y0()},
sa8D(a,b){if(b===this.cZ)return
this.cZ=b
this.az()},
sa2R(a){return},
sAM(a){if(a===this.fK)return
this.fK=a
this.az()},
sa7e(a){if(a===this.i_)return
this.i_=a
this.y0()},
sbJ(a){if(this.eM==a)return
this.eM=a
this.y0()},
sAO(a){return},
Ia(a){var s,r,q=this,p=q.b9
a=A.pj(q.bh,p).ph(a)
p=q.ah
if(p==null)return new A.L(A.J(0,a.a,a.b),A.J(0,a.c,a.d))
p=p.gby(p)
s=q.B
r=q.ah
return a.oM(new A.L(p/s,r.gc0(r)/q.B))},
jR(a){return!0},
ce(a){return this.Ia(a)},
bx(){this.k3=this.Ia(t.k.a(A.z.prototype.ga_.call(this)))},
aC(a){this.eB(a)},
au(a){this.dU(0)},
aG(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(d.ah==null)return
d.Yy()
s=a.gbS(a)
r=d.k3
q=b.a
p=b.b
o=r.a
r=r.b
n=d.ah
n.toString
m=d.aF
l=d.B
k=d.an
j=d.ek
i=d.M
i.toString
h=d.jJ
g=d.cZ
f=d.am
f.toString
e=d.fK
A.az1(i,s,h,k,m,d.bH,j,f,n,e,!1,1,new A.E(q,p,q+o,p+r),g,l)},
m(){var s=this.ah
if(s!=null)s.m()
this.ah=null
this.hB()}}
A.DO.prototype={}
A.wl.prototype={
ir(){},
rX(a){var s,r=this
r.e+=a
s=t.Hb
if(s.a(A.M.prototype.gaT.call(r,r))!=null)s.a(A.M.prototype.gaT.call(r,r)).rX(a)},
nY(a){var s,r,q
for(s=this.d,s=A.aB(s.gb0(s),!0,t.O),r=s.length,q=0;q<r;++q)s[q].$0()},
m(){var s=this.z
if(s!=null)s.m()
this.z=null},
en(){if(this.y)return
this.y=!0},
siJ(a){var s,r=this,q=r.z
if(q!=null)q.m()
r.z=a
q=t.Hb
if(q.a(A.M.prototype.gaT.call(r,r))!=null){q.a(A.M.prototype.gaT.call(r,r)).toString
s=!0}else s=!1
if(s)q.a(A.M.prototype.gaT.call(r,r)).en()},
vq(){this.y=this.y||!1},
jz(a){var s
this.en()
s=a.e
if(s!==0)this.rX(-s)
this.w2(a)},
nd(a){var s,r,q=this,p=t.Hb.a(A.M.prototype.gaT.call(q,q))
if(p!=null){s=q.as
r=q.Q
if(s==null)p.CW=r
else s.Q=r
r=q.Q
if(r==null)p.cx=s
else r.as=s
q.Q=q.as=null
p.jz(q)
q.w.saX(0,null)}},
fg(a,b,c){return!1},
KX(a,b,c){var s=A.a([],c.h("u<u5<0>>"))
this.fg(new A.DO(s,c.h("DO<0>")),b,!0,c)
return s.length===0?null:B.c.gK(s).a},
TP(a){var s,r=this
if(!r.y&&r.z!=null){s=r.z
s.toString
a.a2e(s)
return}r.hO(a)
r.y=!1},
cd(){var s=this.Pn()
return s+(this.b==null?" DETACHED":"")}}
A.Iz.prototype={
saX(a,b){var s=this.a
if(b==null?s==null:b===s)return
if(s!=null)if(--s.x===0)s.m()
this.a=b
if(b!=null)++b.x},
j(a){var s=this.a
return"LayerHandle("+(s!=null?J.dn(s):"DISPOSED")+")"}}
A.LG.prototype={
sMv(a){var s
this.en()
s=this.cx
if(s!=null)s.m()
this.cx=a},
m(){this.sMv(null)
this.DS()},
hO(a){var s=this.cx
s.toString
a.a2d(B.j,s,this.cy,this.db)},
fg(a,b,c){return!1}}
A.Lz.prototype={
hO(a){a.a2c(this.cx,this.CW)
a.OE(this.cy)
a.Ox(!1)
a.Ow(!1)},
fg(a,b,c){return!1}}
A.eN.prototype={
nY(a){var s
this.PQ(a)
if(!a)return
s=this.CW
for(;s!=null;){s.nY(!0)
s=s.Q}},
a2G(a){var s=this
s.vq()
s.hO(a)
if(s.e>0)s.nY(!0)
s.y=!1
return a.be()},
m(){this.C3()
this.d.Y(0)
this.DS()},
vq(){var s,r=this
r.PR()
s=r.CW
for(;s!=null;){s.vq()
r.y=r.y||s.y
s=s.Q}},
fg(a,b,c,d){var s,r,q
for(s=this.cx,r=a.a;s!=null;s=s.as){if(s.fg(a,b,!0,d))return!0
q=r.length
if(q!==0)return!1}return!1},
aC(a){var s
this.w1(a)
s=this.CW
for(;s!=null;){s.aC(a)
s=s.Q}},
au(a){var s
this.dU(0)
s=this.CW
for(;s!=null;){s.au(0)
s=s.Q}this.nY(!1)},
hQ(a,b){var s,r=this
r.en()
s=b.e
if(s!==0)r.rX(s)
r.Dz(b)
s=b.as=r.cx
if(s!=null)s.Q=b
r.cx=b
if(r.CW==null)r.CW=b
b.w.saX(0,b)},
C3(){var s,r,q,p=this,o=p.CW
for(s=t.Hb;o!=null;o=r){r=o.Q
o.Q=o.as=null
p.en()
q=o.e
if(q!==0){q=-q
p.e+=q
if(s.a(A.M.prototype.gaT.call(p,p))!=null)s.a(A.M.prototype.gaT.call(p,p)).rX(q)}p.w2(o)
o.w.saX(0,null)}p.cx=p.CW=null},
hO(a){this.kF(a)},
kF(a){var s=this.CW
for(;s!=null;){s.TP(a)
s=s.Q}}}
A.iN.prototype={
sbW(a,b){if(!b.l(0,this.p1))this.en()
this.p1=b},
fg(a,b,c,d){return this.nF(a,b.ag(0,this.p1),!0,d)},
hO(a){var s=this,r=s.p1
s.siJ(a.MG(r.a,r.b,t.Ff.a(s.z)))
s.kF(a)
a.hr()}}
A.pr.prototype={
fg(a,b,c,d){if(!this.p1.C(0,b))return!1
return this.nF(a,b,!0,d)},
hO(a){var s=this,r=s.p1
r.toString
s.siJ(a.a86(r,s.p2,t.GB.a(s.z)))
s.kF(a)
a.hr()}}
A.uD.prototype={
fg(a,b,c,d){if(!this.p1.C(0,b))return!1
return this.nF(a,b,!0,d)},
hO(a){var s=this,r=s.p1
r.toString
s.siJ(a.a84(r,s.p2,t.cW.a(s.z)))
s.kF(a)
a.hr()}}
A.uC.prototype={
fg(a,b,c,d){if(!this.p1.C(0,b))return!1
return this.nF(a,b,!0,d)},
hO(a){var s=this,r=s.p1
r.toString
s.siJ(a.a83(r,s.p2,t.L5.a(s.z)))
s.kF(a)
a.hr()}}
A.m5.prototype={
sbF(a,b){var s=this
if(b.l(0,s.ar))return
s.ar=b
s.aw=!0
s.en()},
hO(a){var s,r,q=this
q.ak=q.ar
if(!q.p1.l(0,B.j)){s=q.p1
s=A.wT(s.a,s.b,0)
r=q.ak
r.toString
s.d3(0,r)
q.ak=s}q.siJ(a.a88(q.ak.a,t.qf.a(q.z)))
q.kF(a)
a.hr()},
a1j(a){var s,r=this
if(r.aw){s=r.ar
s.toString
r.av=A.Ky(A.ar4(s))
r.aw=!1}s=r.av
if(s==null)return null
return A.cN(s,a)},
fg(a,b,c,d){var s=this.a1j(b)
if(s==null)return!1
return this.Qf(a,s,!0,d)}}
A.xo.prototype={
sJv(a,b){var s=this,r=s.ar
if(b!=r){if(b===255||r===255)s.siJ(null)
s.ar=b
s.en()}},
hO(a){var s,r,q,p=this
if(p.CW==null){p.siJ(null)
return}s=p.ar
s.toString
r=p.p1
q=p.z
if(s<255)p.siJ(a.a87(s,r,t.Zr.a(q)))
else p.siJ(a.MG(r.a,r.b,t.Ff.a(q)))
p.kF(a)
a.hr()}}
A.Rj.prototype={}
A.RO.prototype={
a8G(a){var s=this.a
this.a=a
return s},
j(a){var s="<optimized out>#",r=A.c7(this.b),q=this.a.a
return s+A.c7(this)+"("+("latestEvent: "+(s+r))+", "+("annotations: [list of "+q+"]")+")"}}
A.RP.prototype={
giE(a){var s=this.c
return s.giE(s)}}
A.KJ.prototype={
Gw(a){var s,r,q,p,o,n,m=t._h,l=A.iH(null,null,null,m,t.xV)
for(s=a.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
o=p.a
if(m.b(o)){n=p.b
n.toString
l.k(0,o,n)}}return l},
VP(a,b){var s=a.b,r=s.gbL(s)
s=a.b
if(!this.b.P(0,s.giE(s)))return A.iH(null,null,null,t._h,t.xV)
return this.Gw(b.$1(r))},
Gj(a){var s,r
A.aFp(a)
s=a.b
r=A.o(s).h("bh<1>")
this.a.a5j(a.giE(a),a.d,A.lx(new A.bh(s,r),new A.a7q(),r.h("p.E"),t.Pb))},
a9v(a,b){var s,r,q,p,o
if(a.gcu(a)!==B.cY)return
if(t.ks.b(a))return
s=t.PB.b(a)?A.auH():b.$0()
r=a.giE(a)
q=this.b
p=q.i(0,r)
if(!A.aFq(p,a))return
o=q.a
new A.a7t(this,p,a,r,s).$0()
if(o!==0!==(q.a!==0))this.aI()},
a9o(a){new A.a7r(this,a).$0()}}
A.a7q.prototype={
$1(a){return a.gKd(a)},
$S:260}
A.a7t.prototype={
$0(){var s=this
new A.a7s(s.a,s.b,s.c,s.d,s.e).$0()},
$S:0}
A.a7s.prototype={
$0(){var s,r,q,p,o,n=this,m=null,l=n.b
if(l==null){s=n.c
if(t.PB.b(s))return
n.a.b.k(0,n.d,new A.RO(A.iH(m,m,m,t._h,t.xV),s))}else{s=n.c
if(t.PB.b(s))n.a.b.A(0,s.giE(s))}r=n.a
q=r.b.i(0,n.d)
if(q==null){l.toString
q=l}p=q.b
q.b=s
o=t.PB.b(s)?A.iH(m,m,m,t._h,t.xV):r.Gw(n.e)
r.Gj(new A.RP(q.a8G(o),o,p,s))},
$S:0}
A.a7r.prototype={
$0(){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.b,r=r.gb0(r),r=new A.ek(J.aF(r.a),r.b),q=this.b,p=A.o(r).z[1];r.t();){o=r.a
if(o==null)o=p.a(o)
n=o.b
m=s.VP(o,q)
l=o.a
o.a=m
s.Gj(new A.RP(l,m,n,null))}},
$S:0}
A.a7o.prototype={
$2(a,b){var s
if(!this.a.P(0,a))if(a.gCz()&&a.gBv(a)!=null){s=a.gBv(a)
s.toString
s.$1(this.b.aU(this.c.i(0,a)))}},
$S:261}
A.a7p.prototype={
$1(a){return!this.a.P(0,a)},
$S:262}
A.VW.prototype={}
A.cs.prototype={
au(a){},
j(a){return"<none>"}}
A.lG.prototype={
eP(a,b){var s,r=this
if(a.ge5()){r.nE()
if(!a.cy){s=a.ay
s===$&&A.b()
s=!s}else s=!0
if(s)A.avm(a,null,!0)
else if(a.db)A.aFM(a)
s=a.ch.a
s.toString
t.gY.a(s)
s.sbW(0,b)
r.zb(s)}else{s=a.ay
s===$&&A.b()
if(s){a.ch.saX(0,null)
a.ye(r,b)}else a.ye(r,b)}},
zb(a){a.nd(0)
this.a.hQ(0,a)},
gbS(a){var s,r,q=this
if(q.e==null){q.c=A.aFP(q.b)
s=$.au()
r=s.a44()
q.d=r
q.e=s.a3Y(r,null)
r=q.c
r.toString
q.a.hQ(0,r)}s=q.e
s.toString
return s},
nE(){var s,r=this
if(r.e==null)return
s=r.c
s.toString
s.sMv(r.d.a4J())
r.e=r.d=r.c=null},
Dh(){var s=this.c
if(s!=null)if(!s.cy){s.cy=!0
s.en()}},
q6(a,b,c,d){var s,r=this
if(a.CW!=null)a.C3()
r.nE()
r.zb(a)
s=r.a4_(a,d==null?r.b:d)
b.$2(s,c)
s.nE()},
MF(a,b,c){return this.q6(a,b,c,null)},
a4_(a,b){return new A.lG(a,b)},
k5(a,b,c,d,e,f){var s,r,q=this
if(e===B.h){d.$2(q,b)
return null}s=c.dG(b)
if(a){if(f==null){r=new A.pr(B.A,A.x(t.S,t.O),A.ay())
r.ir()}else r=f
if(!s.l(0,r.p1)){r.p1=s
r.en()}if(e!==r.p2){r.p2=e
r.en()}q.q6(r,d,b,s)
return r}else{q.a36(s,e,s,new A.a8l(q,d,b))
return null}},
a85(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.h){e.$2(p,b)
return null}s=c.dG(b)
r=d.dG(b)
if(a){if(g==null){q=new A.uD(B.hW,A.x(t.S,t.O),A.ay())
q.ir()}else q=g
if(!r.l(0,q.p1)){q.p1=r
q.en()}if(f!==q.p2){q.p2=f
q.en()}p.q6(q,e,b,s)
return q}else{p.a34(r,f,s,new A.a8k(p,e,b))
return null}},
ME(a,b,c,d,e,f,g){var s,r,q,p=this
if(f===B.h){e.$2(p,b)
return null}s=c.dG(b)
r=d.dG(b)
if(a){if(g==null){q=new A.uC(B.hW,A.x(t.S,t.O),A.ay())
q.ir()}else q=g
if(r!==q.p1){q.p1=r
q.en()}if(f!==q.p2){q.p2=f
q.en()}p.q6(q,e,b,s)
return q}else{p.a33(r,f,s,new A.a8j(p,e,b))
return null}},
q7(a,b,c,d,e){var s,r=this,q=b.a,p=b.b,o=A.wT(q,p,0)
o.d3(0,c)
o.aA(0,-q,-p)
if(a){s=e==null?A.awn(null):e
s.sbF(0,o)
r.q6(s,d,b,A.av8(o,r.b))
return s}else{q=r.gbS(r)
q.cQ(0)
q.bi(0,o.a)
d.$2(r,b)
r.gbS(r).cM(0)
return null}},
a89(a,b,c,d){return this.q7(a,b,c,d,null)},
BS(a,b,c,d){var s=d==null?A.avj():d
s.sJv(0,b)
s.sbW(0,a)
this.MF(s,c,B.j)
return s},
j(a){return"PaintingContext#"+A.ft(this)+"(layer: "+this.a.j(0)+", canvas bounds: "+this.b.j(0)+")"}}
A.a8l.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.a8k.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.a8j.prototype={
$0(){return this.b.$2(this.a,this.c)},
$S:0}
A.ZN.prototype={}
A.abH.prototype={
m(){var s,r=this.b
if(r!=null)this.a.as.G(0,r)
r=this.a
if(--r.at===0){s=r.as
s.b.Y(0)
s.c.Y(0)
s.d.Y(0)
s.dH()
r.as=null
r.d.$0()}}}
A.LH.prototype={
nf(){this.a.$0()},
sa8U(a){var s=this.e
if(s===a)return
if(s!=null)s.au(0)
this.e=a
a.aC(this)},
a58(){var s,r,q,p,o,n,m,l,k,j,i,h=this
try{for(p=t.W,o=t.TT;n=h.r,n.length!==0;){s=n
h.r=A.a([],o)
n=s
m=new A.a8w()
if(!!n.immutable$list)A.N(A.S("sort"))
l=n.length-1
if(l-0<=32)A.NC(n,0,l,m)
else A.NB(n,0,l,m)
for(r=0;r<J.bY(s);++r){if(h.f){h.f=!1
n=h.r
if(n.length!==0){m=s
l=r
k=J.bY(s)
A.dw(l,k,J.bY(m),null,null)
j=A.b3(m)
i=new A.fx(m,l,k,j.h("fx<1>"))
i.qT(m,l,k,j.c)
B.c.L(n,i)
break}}q=J.b0(s,r)
if(q.z){n=q
n=p.a(A.M.prototype.gbI.call(n))===h}else n=!1
if(n)q.YX()}h.f=!1}}finally{h.f=!1}},
Vv(a){try{a.$0()}finally{this.f=!0}},
a57(){var s,r,q,p,o=this.y
B.c.dj(o,new A.a8v())
for(s=o.length,r=t.W,q=0;q<o.length;o.length===s||(0,A.P)(o),++q){p=o[q]
if(p.CW&&r.a(A.M.prototype.gbI.call(p))===this)p.IK()}B.c.Y(o)},
a59(){var s,r,q,p,o,n,m,l,k
try{s=this.z
this.z=A.a([],t.TT)
for(q=s,J.Xj(q,new A.a8x()),p=q.length,o=t.W,n=t.gY,m=0;m<q.length;q.length===p||(0,A.P)(q),++m){r=q[m]
if(r.cy||r.db){l=r
l=o.a(A.M.prototype.gbI.call(l))===this}else l=!1
if(l)if(r.ch.a.b!=null)if(r.cy)A.avm(r,null,!1)
else{l=r
k=l.ch.a
k.toString
l.qk(n.a(k))
l.db=!1}else r.a0O()}}finally{}},
a4K(a){var s,r=this
if(++r.at===1){s=t.bu
r.as=new A.yG(r.c,A.bd(s),A.x(t.S,s),A.bd(s),$.bR())
r.b.$0()}if(a!=null)r.as.Z(0,a)
return new A.abH(r,a)},
KJ(){return this.a4K(null)},
a5a(){var s,r,q,p,o,n,m,l,k=this
if(k.as==null)return
try{q=k.ay
p=A.aB(q,!0,A.o(q).c)
B.c.dj(p,new A.a8y())
s=p
q.Y(0)
for(q=s,o=q.length,n=t.W,m=0;m<q.length;q.length===o||(0,A.P)(q),++m){r=q[m]
if(r.dy){l=r
l=n.a(A.M.prototype.gbI.call(l))===k}else l=!1
if(l)r.a1D()}k.as.Ou()}finally{}}}
A.a8w.prototype={
$2(a,b){return a.a-b.a},
$S:50}
A.a8v.prototype={
$2(a,b){return a.a-b.a},
$S:50}
A.a8x.prototype={
$2(a,b){return b.a-a.a},
$S:50}
A.a8y.prototype={
$2(a,b){return a.a-b.a},
$S:50}
A.z.prototype={
aK(){var s=this
s.cx=s.ge5()||s.gml()
s.ay=s.ge5()},
eQ(){var s=this
s.a7()
s.ld()
s.az()
s.b3()
s.b1(new A.a9M())},
m(){this.ch.saX(0,null)},
ey(a){if(!(a.e instanceof A.cs))a.e=new A.cs()},
iy(a){var s=this
s.ey(a)
s.a7()
s.ld()
s.b3()
s.Dz(a)},
jz(a){var s=this
a.Fb()
a.e.au(0)
a.e=null
s.w2(a)
s.a7()
s.ld()
s.b3()},
b1(a){},
rG(a,b,c){A.e1(new A.bS(b,c,"rendering library",A.bw("during "+a+"()"),new A.a9I(this),!1))},
aC(a){var s=this
s.w1(a)
if(s.z&&s.Q!=null){s.z=!1
s.a7()}if(s.CW){s.CW=!1
s.ld()}if(s.cy&&s.ch.a!=null){s.cy=!1
s.az()}if(s.dy&&s.gyy().a){s.dy=!1
s.b3()}},
ga_(){var s=this.at
if(s==null)throw A.c(A.ac("A RenderObject does not have any constraints before it has been laid out."))
return s},
a7(){var s,r=this
if(r.z)return
s=r.Q
if(s==null){r.z=!0
if(r.c!=null)r.uF()
return}if(s!==r)r.uF()
else{r.z=!0
s=t.W
if(s.a(A.M.prototype.gbI.call(r))!=null){s.a(A.M.prototype.gbI.call(r)).r.push(r)
s.a(A.M.prototype.gbI.call(r)).nf()}}},
uF(){this.z=!0
var s=this.c
s.toString
t.F.a(s)
if(!this.as)s.a7()},
Fb(){var s=this
if(s.Q!==s){s.Q=null
s.b1(A.ayZ())}},
a_D(){var s,r,q=this,p=q.Q
if(p===q)return
s=t.Rn.a(q.c)
r=s==null?null:s.Q
if(r!=p){q.Q=r
q.b1(A.az_())}},
YX(){var s,r,q,p=this
try{p.bx()
p.b3()}catch(q){s=A.ak(q)
r=A.az(q)
p.rG("performLayout",s,r)}p.z=!1
p.az()},
cC(a,b){var s,r,q,p,o,n,m,l=this
if(!b||l.gkj()||a.gLT()||!(l.c instanceof A.z))o=l
else{n=l.c
n.toString
n=t.F.a(n).Q
n.toString
o=n}if(!l.z&&a.l(0,l.at)){if(o!==l.Q){l.Q=o
l.b1(A.az_())}return}l.at=a
n=l.Q
if(n!=null&&o!==n)l.b1(A.ayZ())
l.Q=o
if(l.gkj())try{l.q2()}catch(m){s=A.ak(m)
r=A.az(m)
l.rG("performResize",s,r)}try{l.bx()
l.b3()}catch(m){q=A.ak(m)
p=A.az(m)
l.rG("performLayout",q,p)}l.z=!1
l.az()},
gkj(){return!1},
AN(a,b){var s=this
s.as=!0
try{t.W.a(A.M.prototype.gbI.call(s)).Vv(new A.a9L(s,a,b))}finally{s.as=!1}},
ge5(){return!1},
gml(){return!1},
qk(a){return a==null?A.aFG(B.j):a},
ld(){var s,r,q,p=this
if(p.CW)return
s=p.CW=!0
r=p.c
if(r instanceof A.z){if(r.CW)return
q=p.ay
q===$&&A.b()
if((q?!p.ge5():s)&&!r.ge5()){r.ld()
return}}s=t.W
if(s.a(A.M.prototype.gbI.call(p))!=null)s.a(A.M.prototype.gbI.call(p)).y.push(p)},
IK(){var s,r,q=this
if(!q.CW)return
s=q.cx
s===$&&A.b()
q.cx=!1
q.b1(new A.a9J(q))
if(q.ge5()||q.gml())q.cx=!0
if(!q.ge5()){r=q.ay
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
if(r.ge5()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=t.W
if(s.a(A.M.prototype.gbI.call(r))!=null){s.a(A.M.prototype.gbI.call(r)).z.push(r)
s.a(A.M.prototype.gbI.call(r)).nf()}}else{s=r.c
if(s instanceof A.z)s.az()
else{s=t.W
if(s.a(A.M.prototype.gbI.call(r))!=null)s.a(A.M.prototype.gbI.call(r)).nf()}}},
a7c(){var s,r=this
if(r.db||r.cy)return
r.db=!0
if(r.ge5()){s=r.ay
s===$&&A.b()}else s=!1
if(s){s=t.W
if(s.a(A.M.prototype.gbI.call(r))!=null){s.a(A.M.prototype.gbI.call(r)).z.push(r)
s.a(A.M.prototype.gbI.call(r)).nf()}}else r.az()},
a0O(){var s,r=this.c
for(;r instanceof A.z;){if(r.ge5()){s=r.ch.a
if(s==null)break
if(s.b!=null)break
r.cy=!0}r=r.c}},
ye(a,b){var s,r,q,p=this
if(p.z)return
p.db=p.cy=!1
p.ay=p.ge5()
try{p.aG(a,b)}catch(q){s=A.ak(q)
r=A.az(q)
p.rG("paint",s,r)}},
aG(a,b){},
dl(a,b){},
li(a){return!0},
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
r.push(b)}n=new A.aW(new Float64Array(16))
n.c1()
for(m=r.length-1;m>0;m=l){l=m-1
r[m].dl(r[l],n)}return n},
iD(a){return null},
zR(a){return null},
fe(a){},
vN(a){var s
if(t.W.a(A.M.prototype.gbI.call(this)).as==null)return
s=this.fr
if(s!=null&&!s.as)s.Ot(a)
else{s=this.c
if(s!=null)t.F.a(s).vN(a)}},
gyy(){var s,r=this
if(r.dx==null){s=A.r5()
r.dx=s
r.fe(s)}s=r.dx
s.toString
return s},
mp(){this.dy=!0
this.fr=null
this.b1(new A.a9K())},
b3(){var s,r,q,p,o,n,m=this
if(m.b==null||t.W.a(A.M.prototype.gbI.call(m)).as==null){m.dx=null
return}if(m.fr!=null){s=m.dx
s=s==null?null:s.a
r=s===!0}else r=!1
m.dx=null
q=m.gyy().a&&r
s=t.F
p=m
while(!0){if(!(!q&&p.c instanceof A.z))break
if(p!==m&&p.dy)break
p.dy=!0
o=p.c
o.toString
s.a(o)
if(o.dx==null){n=A.r5()
o.dx=n
o.fe(n)}q=o.dx.a
if(q&&o.fr==null)return
p=o}if(p!==m&&m.fr!=null&&m.dy)t.W.a(A.M.prototype.gbI.call(m)).ay.A(0,m)
if(!p.dy){p.dy=!0
s=t.W
if(s.a(A.M.prototype.gbI.call(m))!=null){s.a(A.M.prototype.gbI.call(m)).ay.D(0,p)
s.a(A.M.prototype.gbI.call(m)).nf()}}},
a1D(){var s,r,q,p,o,n,m=this,l=null
if(m.z)return
s=m.fr
if(s==null)s=l
else{s=t.LQ.a(A.M.prototype.gaT.call(s,s))
if(s==null)s=l
else s=s.at||s.as}r=t.pp.a(m.Gb(s===!0))
q=A.a([],t.Y)
s=m.fr
p=s==null
o=p?l:s.x
n=p?l:s.y
s=p?l:s.z
r.oK(s==null?0:s,n,o,q)
B.c.gbz(q)},
Gb(a){var s,r,q,p,o,n,m,l,k=this,j={},i=k.gyy()
j.a=i.c
s=!i.d&&!i.a
r=t.CZ
q=A.a([],r)
p=A.bd(t.pp)
k.fU(new A.a9H(j,k,a||i.p2,q,p,i,s))
for(o=A.kt(p,p.r),n=A.o(o).c;o.t();){m=o.d;(m==null?n.a(m):m).B3()}k.dy=!1
if(!(k.c instanceof A.z)){o=j.a
l=new A.Tw(A.a([],r),A.a([k],t.TT),o)}else{o=j.a
if(s)l=new A.agS(A.a([],r),o)
else{l=new A.UI(a,i,A.a([],r),A.a([k],t.TT),o)
if(i.a)l.x=!0}}l.L(0,q)
return l},
fU(a){this.b1(a)},
oC(a,b,c){a.ka(0,t.V1.a(c),b)},
iO(a,b){},
cd(){var s=A.c7(this)
return"<optimized out>#"+s},
j(a){return this.cd()},
eY(a,b,c,d){var s=this.c
if(s instanceof A.z)s.eY(a,b==null?this:b,c,d)},
nz(){return this.eY(B.b1,null,B.w,null)},
lB(a,b){return this.eY(B.b1,a,B.w,b)},
$ias:1}
A.a9M.prototype={
$1(a){a.eQ()},
$S:33}
A.a9I.prototype={
$0(){var s=A.a([],t.E),r=this.a
s.push(A.aqk("The following RenderObject was being processed when the exception was fired",B.Hb,r))
s.push(A.aqk("RenderObject",B.Hc,r))
return s},
$S:12}
A.a9L.prototype={
$0(){this.b.$1(this.c.a(this.a.ga_()))},
$S:0}
A.a9J.prototype={
$1(a){var s
a.IK()
s=a.cx
s===$&&A.b()
if(s)this.a.cx=!0},
$S:33}
A.a9K.prototype={
$1(a){a.mp()},
$S:33}
A.a9H.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a.Gb(f.c)
if(e.a){B.c.Y(f.d)
f.e.Y(0)
if(!f.f.a)f.a.a=!0}for(s=e.gLD(),r=s.length,q=f.d,p=f.e,o=f.f,n=f.b,m=f.r,l=0;l<s.length;s.length===r||(0,A.P)(s),++l){k=s[l]
q.push(k)
k.b.push(n)
k.a2k(o.ar)
if(o.b||!(n.c instanceof A.z)){k.B3()
continue}if(k.gkO()==null||m)continue
if(!o.LO(k.gkO()))p.D(0,k)
j=q.length-1
for(i=0;i<j;++i){h=q[i]
g=k.gkO()
g.toString
if(!g.LO(h.gkO())){p.D(0,k)
p.D(0,h)}}}},
$S:33}
A.aN.prototype={
saQ(a){var s=this,r=s.B$
if(r!=null)s.jz(r)
s.B$=a
if(a!=null)s.iy(a)},
k6(){var s=this.B$
if(s!=null)this.C0(s)},
b1(a){var s=this.B$
if(s!=null)a.$1(s)}}
A.ef.prototype={$ics:1}
A.aA.prototype={
goI(){return this.cX$},
GE(a,b){var s,r,q,p=this,o=a.e
o.toString
s=A.o(p).h("aA.1")
s.a(o);++p.cX$
if(b==null){o=o.a9$=p.a8$
if(o!=null){o=o.e
o.toString
s.a(o).aP$=a}p.a8$=a
if(p.bB$==null)p.bB$=a}else{r=b.e
r.toString
s.a(r)
q=r.a9$
if(q==null){o.aP$=b
p.bB$=r.a9$=a}else{o.a9$=q
o.aP$=b
o=q.e
o.toString
s.a(o).aP$=r.a9$=a}}},
AK(a,b,c){this.iy(b)
this.GE(b,c)},
L(a,b){},
Hx(a){var s,r,q,p,o=this,n=a.e
n.toString
s=A.o(o).h("aA.1")
s.a(n)
r=n.aP$
q=n.a9$
if(r==null)o.a8$=q
else{p=r.e
p.toString
s.a(p).a9$=q}q=n.a9$
if(q==null)o.bB$=r
else{q=q.e
q.toString
s.a(q).aP$=r}n.a9$=n.aP$=null;--o.cX$},
A(a,b){this.Hx(b)
this.jz(b)},
uJ(a,b){var s=this,r=a.e
r.toString
if(A.o(s).h("aA.1").a(r).aP$==b)return
s.Hx(a)
s.GE(a,b)
s.a7()},
k6(){var s,r,q,p=this.a8$
for(s=A.o(this).h("aA.1");p!=null;){r=p.a
q=this.a
if(r<=q){p.a=q+1
p.k6()}r=p.e
r.toString
p=s.a(r).a9$}},
b1(a){var s,r,q=this.a8$
for(s=A.o(this).h("aA.1");q!=null;){a.$1(q)
r=q.e
r.toString
q=s.a(r).a9$}},
ga53(a){return this.a8$},
a2Y(a){var s=a.e
s.toString
return A.o(this).h("aA.1").a(s).aP$},
a2W(a){var s=a.e
s.toString
return A.o(this).h("aA.1").a(s).a9$}}
A.M5.prototype={
wl(){this.a7()}}
A.alp.prototype={}
A.agS.prototype={
L(a,b){B.c.L(this.b,b)},
gLD(){return this.b}}
A.oT.prototype={
gLD(){return A.a([this],t.CZ)},
a2k(a){var s
if(a==null||a.a===0)return
s=this.c;(s==null?this.c=A.bd(t.g3):s).L(0,a)}}
A.Tw.prototype={
oK(a,b,c,d){var s,r,q,p,o,n=this.b,m=B.c.gK(n)
if(m.fr==null){s=B.c.gK(n).gny()
r=B.c.gK(n)
r=t.W.a(A.M.prototype.gbI.call(r)).as
r.toString
q=$.apL()
q=new A.cg(null,0,s,B.V,q.p2,q.e,q.p3,q.f,q.ak,q.p4,q.R8,q.RG,q.rx,q.ry,q.to,q.x2,q.xr,q.y1)
q.aC(r)
m.fr=q}m=B.c.gK(n).fr
m.toString
m.saZ(0,B.c.gK(n).gkg())
p=A.a([],t.Y)
for(n=this.e,s=n.length,o=0;o<n.length;n.length===s||(0,A.P)(n),++o)n[o].oK(0,b,c,p)
m.ka(0,p,null)
d.push(m)},
gkO(){return null},
B3(){},
L(a,b){B.c.L(this.e,b)}}
A.UI.prototype={
oK(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(!h.x){s=h.b
B.c.gK(s).fr=null
for(r=h.w,q=r.length,p=A.ao(s),o=p.c,p=p.h("fx<1>"),n=0;n<r.length;r.length===q||(0,A.P)(r),++n){m=r[n]
l=new A.fx(s,1,g,p)
l.qT(s,1,g,o)
B.c.L(m.b,l)
m.oK(a+h.f.x2,b,c,d)}return}s=h.b
if(s.length>1){k=new A.alq()
k.UQ(c,b,s)}else k=g
r=h.e
q=!r
if(q){if(k==null)p=g
else{p=k.d
p===$&&A.b()
if(!p.gO(p)){p=k.c
p===$&&A.b()
p=p.LX()}else p=!0}p=p===!0}else p=!1
if(p)return
p=B.c.gK(s)
if(p.fr==null)p.fr=A.abJ(g,B.c.gK(s).gny())
j=B.c.gK(s).fr
j.sLQ(r)
j.dx=h.c
j.z=a
if(a!==0){h.FQ()
r=h.f
r.siH(0,r.x2+a)}if(k!=null){r=k.d
r===$&&A.b()
j.saZ(0,r)
r=k.c
r===$&&A.b()
j.sbF(0,r)
j.x=k.b
j.y=k.a
if(q&&k.e){h.FQ()
h.f.bk(B.me,!0)}}i=A.a([],t.Y)
for(r=h.w,q=r.length,n=0;n<r.length;r.length===q||(0,A.P)(r),++n){m=r[n]
p=j.x
m.oK(0,j.y,p,i)}r=h.f
if(r.a)B.c.gK(s).oC(j,h.f,i)
else j.ka(0,i,r)
d.push(j)},
gkO(){return this.x?null:this.f},
L(a,b){var s,r,q,p,o,n,m=this
for(s=b.length,r=m.w,q=0;q<b.length;b.length===s||(0,A.P)(b),++q){p=b[q]
r.push(p)
if(p.gkO()==null)continue
if(!m.r){m.f=m.f.a3C()
m.r=!0}o=m.f
n=p.gkO()
n.toString
o.kE(n)}},
FQ(){var s,r,q=this
if(!q.r){s=q.f
r=A.r5()
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
r.ak=s.ak
r.ar=s.ar
r.y2=s.y2
r.bV=s.bV
r.bC=s.bC
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
B3(){this.x=!0}}
A.alq.prototype={
UQ(a,b,c){var s,r,q,p,o,n,m=this,l=new A.aW(new Float64Array(16))
l.c1()
m.c=l
m.b=a
m.a=b
for(s=c.length-1;s>0;){r=c[s];--s
q=c[s]
a=r.zR(q)
if(a!=null){m.b=a
m.a=A.awT(m.a,r.iD(q))}else m.b=A.awT(m.b,r.iD(q))
l=$.aAx()
l.c1()
A.aIK(r,q,m.c,l)
m.b=A.awU(m.b,l)
m.a=A.awU(m.a,l)}p=B.c.gK(c)
l=m.b
l=l==null?p.gkg():l.fM(p.gkg())
m.d=l
o=m.a
if(o!=null){n=o.fM(l)
if(n.gO(n)){l=m.d
l=!l.gO(l)}else l=!1
m.e=l
if(!l)m.d=n}}}
A.Td.prototype={}
A.j5.prototype={
j(a){var s=A.a(["offset="+this.a.j(0)],t.s)
s.push(this.qM(0))
return B.c.bb(s,"; ")}}
A.y3.prototype={
ey(a){if(!(a.e instanceof A.j5))a.e=new A.j5(null,null,B.j)},
scF(a,b){var s=this,r=s.M
switch(r.d.aO(0,b).a){case 0:case 1:return
case 2:r.scF(0,b)
s.ah=s.am=null
s.xg(b)
s.az()
s.b3()
break
case 3:r.scF(0,b)
s.ah=s.am=s.bH=null
s.xg(b)
s.a7()
s.yl()
s.FG()
s.J_()
break}},
sq9(a){var s=this
if(a==s.b9)return
s.yl()
s.FG()
s.b9=a
s.J_()},
J_(){var s,r,q=this
if(q.b9==null)return
s=q.aF
if(s==null)s=q.aF=q.Wv()
r=q.b9
B.c.V(s,r.gf8(r))},
yl(){var s,r=this.b9
if(r==null||this.aF==null)return
s=this.aF
s.toString
B.c.V(s,r.gC2(r))},
Wv(){var s,r,q,p,o=this.M.d.Nj(!1),n=A.a([],t.lb)
for(s=o.length,r=0;r<s;){q=B.b.i1(o,$.azM(),r)
if(r!==q){if(q===-1)q=s
p=new A.ku(new A.fy(r,q),this,o,$.bR())
p.w=p.Ga()
n.push(p)
r=q}++r}return n},
FG(){var s,r,q,p=this.aF
if(p==null)return
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.P)(p),++r){q=p[r]
q.ak$=$.bR()
q.ar$=0}this.aF=null},
a7(){var s=this.aF
if(s!=null)B.c.V(s,new A.a9R())
this.Qx()},
m(){var s=this
s.yl()
s.aF=null
s.M.m()
s.hB()},
xg(a){this.bh=A.a([],t.TP)
a.b1(new A.a9O(this))},
sCb(a,b){var s=this.M
if(s.f===b)return
s.sCb(0,b)
this.az()},
sbJ(a){var s=this.M
if(s.r===a)return
s.sbJ(a)
this.a7()},
sOR(a){if(this.B===a)return
this.B=a
this.a7()},
sa7O(a,b){var s,r=this
if(r.an===b)return
r.an=b
s=b===B.b6?"\u2026":null
r.M.sa4G(s)
r.a7()},
sCc(a){var s=this.M
if(s.w===a)return
s.sCc(a)
this.bH=null
this.a7()},
sB6(a){var s=this.M
if(s.z==a)return
s.sB6(a)
this.bH=null
this.a7()},
sB1(a,b){var s=this.M
if(J.h(s.y,b))return
s.sB1(0,b)
this.bH=null
this.a7()},
sP_(a){return},
sCd(a){var s=this.M
if(s.as===a)return
s.sCd(a)
this.bH=null
this.a7()},
sNd(a){return},
sOp(a){var s,r=this
if(J.h(r.cY,a))return
r.cY=a
s=r.aF
s=s==null?null:B.c.kH(s,new A.a9T())
if(s===!0)r.az()},
r9(a){var s,r=this,q=r.CP(a,B.V)
r.jk(t.k.a(A.z.prototype.ga_.call(r)))
s=r.M
s.Fm(a,B.V)
s=s.db
s===$&&A.b()
s=s.b
return q.W(0,new A.r(0,s==null?0:s))},
eH(a){this.jk(t.k.a(A.z.prototype.ga_.call(this)))
return this.M.eH(B.P)},
jR(a){return!0},
d0(a,b){var s,r,q,p,o,n,m,l,k,j={},i=this.M,h=i.a.ii(b),g=i.d.O7(h)
if(g!=null&&!0){a.D(0,new A.iC(t.zE.a(g),t.AL))
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
l=new A.aW(m)
l.c1()
m[14]=0
m[13]=n.b
m[12]=n.a
n=r.e
l.fZ(0,n,n,n)
if(a.z7(new A.a9Q(j,b,r),b,l))return!0
r=j.a.e
r.toString
k=q.a(r).a9$
j.a=k;++o
r=k}return s},
GP(a,b){var s=this.B||this.an===B.b6?a:1/0
this.M.AZ(s,b)},
wl(){var s=this,r=$.bN,q=r.dy$
switch(q.a){case 0:case 4:if(s.ff)return
s.ff=!0
r.qC(new A.a9U(s,q))
break
case 1:case 2:case 3:s.E6()
s.M.a7()
break}},
jk(a){this.M.vT(this.ek)
this.GP(a.b,a.a)},
GN(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.cX$
if(i===0)return A.a([],t.tZ)
s=j.a8$
r=A.b1(i,B.W_,!1,t.jP)
q=new A.aL(0,a.b,0,1/0).di(0,j.M.w)
for(i=A.o(j).h("aA.1"),p=!b,o=0;s!=null;){if(p){s.cC(q,!0)
n=s.k3
n.toString
m=j.bh
m===$&&A.b()
switch(m[o].gee()){case B.lY:l=s.NS(j.bh[o].gtj())
break
case B.lZ:case B.m_:case B.h0:case B.m1:case B.m0:l=null
break
default:l=null}k=n}else{k=s.fW(q)
l=null}n=j.bh
n===$&&A.b()
r[o]=new A.nK(k,n[o].gee(),l,j.bh[o].gtj())
n=s.e
n.toString
s=i.a(n).a9$;++o}return r},
YW(a){return this.GN(a,!1)},
a0z(){var s,r,q=this.a8$,p=t.tq,o=this.M,n=A.o(this).h("aA.1"),m=0
while(!0){if(!(q!=null&&m<o.ax.length))break
s=q.e
s.toString
p.a(s)
r=o.ax[m]
s.a=new A.r(r.a,r.b)
s.e=o.ay[m]
q=n.a(s).a9$;++m}},
Ul(){var s,r,q=this.bh
q===$&&A.b()
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.P)(q),++r)switch(q[r].gee()){case B.lY:case B.lZ:case B.m_:return!1
case B.m0:case B.m1:case B.h0:continue}return!0},
ce(a){var s,r,q=this
if(!q.Ul())return B.S
s=q.M
s.vT(q.GN(a,!0))
q.GP(a.b,a.a)
r=s.gby(s)
s=s.a
return a.bu(new A.L(r,Math.ceil(s.gc0(s))))},
bx(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=t.k.a(A.z.prototype.ga_.call(i))
i.ek=i.YW(g)
i.jk(g)
i.a0z()
s=i.M
r=s.gby(s)
q=s.a
q=Math.ceil(q.gc0(q))
p=s.a.ga4v()
o=i.k3=g.bu(new A.L(r,q))
n=o.b<q||p
m=o.a<r
if(m||n)switch(i.an.a){case 3:i.bc=!1
i.bH=null
break
case 0:case 2:i.bc=!0
i.bH=null
break
case 1:i.bc=!0
r=A.eA(h,s.d.a,"\u2026")
q=s.r
q.toString
o=s.w
l=A.Ob(h,s.y,h,h,r,B.bp,q,h,o,B.aQ)
l.a6Z()
if(m){switch(s.r.a){case 0:k=l.gby(l)
j=0
break
case 1:j=i.k3.a
k=j-l.gby(l)
break
default:k=h
j=k}i.bH=A.aqF(new A.r(k,0),new A.r(j,0),A.a([B.l,B.nP],t.t_),h,B.aF,h)}else{j=i.k3.b
s=l.a
i.bH=A.aqF(new A.r(0,j-Math.ceil(s.gc0(s))/2),new A.r(0,j),A.a([B.l,B.nP],t.t_),h,B.aF,h)}l.m()
break}else{i.bc=!1
i.bH=null}},
aG(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e={}
f.jk(t.k.a(A.z.prototype.ga_.call(f)))
if(f.bc){s=f.k3
r=b.a
q=b.b
p=new A.E(r,q,r+s.a,q+s.b)
if(f.bH!=null)a.gbS(a).D2(p,$.au().ba())
else a.gbS(a).cQ(0)
a.gbS(a).kM(p)}s=f.M
s.aG(a.gbS(a),b)
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
a.a89(j,new A.r(o+r.a,n+r.b),A.wS(k,k,k),new A.a9S(e))
k=e.a.e
k.toString
i=m.a(k).a9$
e.a=i;++l
r=i}if(f.bc){if(f.bH!=null){a.gbS(a).aA(0,o,n)
h=$.au().ba()
h.sa2B(B.E0)
h.sDl(f.bH)
s=a.gbS(a)
r=f.k3
s.cz(new A.E(0,0,0+r.a,0+r.b),h)}a.gbS(a).cM(0)}s=f.aF
if(s!=null)for(r=s.length,g=0;g<s.length;s.length===r||(0,A.P)(s),++g)s[g].aG(a,b)
f.QE(a,b)},
CP(a,b){var s
this.jk(t.k.a(A.z.prototype.ga_.call(this)))
s=this.M
s.Fm(a,b)
s=s.db
s===$&&A.b()
return s.a},
CI(a){this.jk(t.k.a(A.z.prototype.ga_.call(this)))
return this.M.a.vv(a.a,a.b,B.n4,B.hH)},
ii(a){this.jk(t.k.a(A.z.prototype.ga_.call(this)))
return this.M.a.ii(a)},
nq(a){this.jk(t.k.a(A.z.prototype.ga_.call(this)))
return this.M.a.nq(a)},
fe(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.hA(a)
s=d.M
r=s.d
r.toString
q=A.a([],t.O_)
r.a3p(q)
d.dc=q
if(B.c.kH(q,new A.a9P()))a.a=a.b=!0
else{r=d.am
if(r==null){p=new A.bP("")
o=A.a([],t.oU)
for(r=d.dc,n=r.length,m=0,l=0,k="";l<r.length;r.length===n||(0,A.P)(r),++l){j=r[l]
i=j.b
if(i==null)i=j.a
for(k=j.f,h=k.length,g=0;g<k.length;k.length===h||(0,A.P)(k),++g){f=k[g]
e=f.a
o.push(f.K0(new A.fy(m+e.a,m+e.b)))}k=p.a+=i
m+=i.length}r=d.am=new A.cI(k.charCodeAt(0)==0?k:k,o)}a.p4=r
a.d=!0
s=s.r
s.toString
a.y1=s}},
oC(b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=A.a([],t.Y),b0=a7.M,b1=b0.r
b1.toString
s=A.iH(a8,a8,a8,t.D2,t.bu)
r=a7.ah
if(r==null){r=a7.dc
r.toString
r=a7.ah=A.aLc(r)}for(q=r.length,p=t.k,o=b1,n=0,m=0,l=0;l<r.length;r.length===q||(0,A.P)(r),++l,m=j){k=r[l]
b1=k.a
j=m+b1.length
i=m<j
h=i?m:j
i=i?j:m
g=p.a(A.z.prototype.ga_.call(a7))
b0.vT(a7.ek)
f=g.b
f=a7.B||a7.an===B.b6?f:1/0
b0.AZ(f,g.a)
e=b0.a.vv(h,i,B.n4,B.hH)
if(e.length===0)continue
i=B.c.gK(e)
d=new A.E(i.a,i.b,i.c,i.d)
c=B.c.gK(e).e
for(i=A.ao(e),h=new A.fx(e,1,a8,i.h("fx<1>")),h.qT(e,1,a8,i.c),h=new A.ce(h,h.gp(h)),i=A.o(h).c;h.t();){g=h.d
if(g==null)g=i.a(g)
d=d.pk(new A.E(g.a,g.b,g.c,g.d))
c=g.e}i=d.a
h=Math.max(0,i)
g=d.b
f=Math.max(0,g)
i=Math.min(d.c-i,p.a(A.z.prototype.ga_.call(a7)).b)
g=Math.min(d.d-g,p.a(A.z.prototype.ga_.call(a7)).d)
b=Math.floor(h)-4
a=Math.floor(f)-4
i=Math.ceil(h+i)+4
g=Math.ceil(f+g)+4
a0=new A.E(b,a,i,g)
a1=A.r5()
a2=n+1
a1.id=new A.xp(n,a8)
a1.d=!0
a1.y1=o
f=k.b
b1=f==null?b1:f
a1.p4=new A.cI(b1,k.f)
b1=b2.y
if(b1!=null){a3=b1.fM(a0)
if(a3.a>=a3.c||a3.b>=a3.d)b1=!(b>=i||a>=g)
else b1=!1
a1.bk(B.me,b1)}a4=A.bc("newChild")
b1=a7.cZ
i=b1==null?a8:b1.a!==0
if(i===!0){b1.toString
i=new A.bh(b1,A.o(b1).h("bh<1>"))
a5=i.gae(i)
if(!a5.t())A.N(A.c9())
b1=b1.A(0,a5.gJ(a5))
b1.toString
if(a4.b!==a4)A.N(A.a6j(a4.a))
a4.b=b1}else{a6=new A.i0()
b1=A.abJ(a6,a7.V4(a6))
if(a4.b!==a4)A.N(A.a6j(a4.a))
a4.b=b1}if(b1===a4)A.N(A.hI(a4.a))
J.aC5(b1,a1)
if(!b1.w.l(0,a0)){b1.w=a0
b1.iw()}b1=a4.b
if(b1===a4)A.N(A.hI(a4.a))
i=b1.d
i.toString
s.k(0,i,b1)
b1=a4.b
if(b1===a4)A.N(A.hI(a4.a))
a9.push(b1)
n=a2
o=c}a7.cZ=s
b2.ka(0,a9,b3)},
V4(a){return new A.a9N(this,a)},
mp(){this.we()
this.cZ=null}}
A.a9R.prototype={
$1(a){return a.x=null},
$S:266}
A.a9O.prototype={
$1(a){return!0},
$S:49}
A.a9T.prototype={
$1(a){var s=a.w
s===$&&A.b()
return s.c!==B.d4},
$S:267}
A.a9Q.prototype={
$2(a,b){return this.a.a.c5(a,b)},
$S:20}
A.a9U.prototype={
$1(a){var s=this.a
s.ff=!1
if(s.b!=null){s.E6()
s.M.a7()}},
$S:2}
A.a9S.prototype={
$2(a,b){var s=this.a.a
s.toString
a.eP(s,b)},
$S:11}
A.a9P.prototype={
$1(a){return!1},
$S:268}
A.a9N.prototype={
$0(){var s=this.a,r=s.cZ.i(0,this.b)
r.toString
s.lB(s,r.w)},
$S:0}
A.ku.prototype={
gq(a){var s=this.w
s===$&&A.b()
return s},
a_9(){var s=this,r=s.Ga(),q=s.w
q===$&&A.b()
if(q.l(0,r))return
s.w=r
s.aI()},
Ga(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.d
if(f==null||g.e==null)return B.WE
s=f.a
r=g.e.a
f=g.b
q=f.r9(new A.bb(s,B.J))
p=s===r?q:f.r9(new A.bb(r,B.J))
f=f.M
o=f.r
o.toString
n=s>r!==(B.a4===o)
m=A.wT(g.gh3().a,g.gh3().b,0)
m.hT(m)
o=A.cN(m,q)
l=f.gv2()
k=n?B.Dd:B.Dc
j=A.cN(m,p)
f=f.gv2()
i=n?B.Dc:B.Dd
h=g.d.a===g.e.a?B.WG:B.md
return new A.lX(new A.oc(o,l,k),new A.oc(j,f,i),h,!0)},
tN(a){var s=this,r=A.bc("result"),q=s.d,p=s.e,o=a.a
switch(o.a){case 0:case 1:r.scg(s.a1C(t.mb.a(a).b,o===B.e3))
break
case 2:s.e=s.d=null
r.scg(B.d3)
break
case 3:o=s.a
s.d=new A.bb(o.a,B.J)
s.e=new A.bb(o.b,B.W)
r.scg(B.d3)
break
case 4:r.scg(s.Y7(t.hI.a(a).gCY()))
break
case 5:t.rQ.a(a)
r.scg(s.Xr(a.gL7(a),a.ghm(),a.ga9M()))
break
case 6:t.ra.a(a)
r.scg(s.X9(a.gA7(a),a.ghm(),a.gKo(a)))
break}if(!J.h(q,s.d)||!J.h(p,s.e)){s.b.az()
s.a_9()}return r.aL()},
a1C(a,b){var s,r,q,p,o,n,m=this
if(b)m.e=null
else m.d=null
s=m.b
r=s.bM(0,null)
r.hT(r)
q=A.cN(r,a)
p=m.gh3()
if(p.gO(p))return A.avX(m.gh3(),q)
p=m.gh3()
o=s.M.r
o.toString
n=m.qW(s.ii(A.aH2(p,q,o)))
if(b)m.e=n
else m.d=n
s=n.a
p=m.a
if(s===p.b)return B.bm
if(s===p.a)return B.bn
return A.avX(m.gh3(),q)},
qW(a){var s,r=a.a,q=this.a,p=q.b
if(r<=p)s=r===p&&a.b===B.J
else s=!0
if(s)return new A.bb(p,B.W)
q=q.a
if(r<q)return new A.bb(q,B.J)
return a},
Y7(a){var s,r,q,p,o=this,n=o.b,m=n.ii(n.lw(a))
if(o.a_u(m))return B.aE
s=n.nq(m)
r=A.bc("start")
q=A.bc("end")
n=m.a
p=s.b
if(n>=p)r.b=q.b=new A.bb(n,B.J)
else{r.b=new A.bb(s.a,B.J)
q.b=new A.bb(p,B.W)}o.d=r.aL()
o.e=q.aL()
return B.aE},
X9(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.bM(0,null)
if(j.hT(j)===0)switch(c){case B.h4:case B.e5:return B.bn
case B.h5:case B.e4:return B.bm}s=A.cN(j,new A.r(a,0)).a
switch(c){case B.h4:case B.h5:if(b){k=l.e
k.toString
r=k}else{k=l.d
k.toString
r=k}q=l.Yt(r,!1,s)
p=q.a
o=q.b
break
case B.e4:case B.e5:n=l.e
if(n==null){n=new A.bb(l.a.b,B.W)
l.e=n
r=n}else r=n
n=l.d
if(n==null){l.d=r
m=r}else m=n
p=k.ii(new A.r(s,k.r9(b?r:m).b-k.M.gv2()/2))
o=B.aE
break
default:p=null
o=null}if(b)l.e=p
else l.d=p
return o},
Xr(a,b,c){var s,r,q,p,o,n,m=this,l=m.e
if(l==null){l=m.a
l=a?new A.bb(l.a,B.J):new A.bb(l.b,B.W)
m.e=l
s=l}else s=l
l=m.d
if(l==null){m.d=s
r=s}else r=l
s=b?s:r
if(a&&s.a===m.a.b)return B.bm
l=!a
if(l&&s.a===m.a.a)return B.bn
switch(c){case B.Yv:l=m.a
q=m.r8(new A.Zs(B.b.X(m.c,l.a,l.b)),s,a)
p=B.aE
break
case B.Yw:l=m.a
q=m.r8(new A.Qo(new A.afW(m),new A.afU(B.b.X(m.c,l.a,l.b))),s,a)
p=B.aE
break
case B.Yx:q=m.r8(new A.a6m(m),s,a)
p=B.aE
break
case B.Yy:o=m.a
n=o.a
o=o.b
q=m.r8(new A.a_U(B.b.X(m.c,n,o)),s,a)
if(a&&q.a===o)p=B.bm
else p=l&&q.a===n?B.bn:B.aE
break
default:p=null
q=null}if(b)m.e=q
else m.d=q
return p},
r8(a,b,c){if(c)return this.qW(a.hw(B.W8.hw(b)))
return this.qW(a.hv(B.W7.hv(b)))},
Yt(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.b,j=k.M,i=j.fr
if(i==null)i=j.fr=j.a.a3o()
s=k.CP(a,B.V)
j=i.length
r=j-1
for(q=s.b,p=0;p<i.length;i.length===j||(0,A.P)(i),++p){o=i[p]
if(o.gtj()>q){r=J.aBF(o)
break}}if(b&&r===i.length-1)n=new A.bb(l.a.b,B.W)
else if(!b&&r===0)n=new A.bb(l.a.a,B.J)
else n=l.qW(k.ii(new A.r(c,i[b?r+1:r-1].gtj())))
k=n.a
j=l.a
if(k===j.a)m=B.bn
else m=k===j.b?B.bm:B.aE
return new A.aw(n,m,t.UH)},
a_u(a){var s,r,q,p,o=this
if(o.d==null||o.e==null)return!1
s=A.bc("currentStart")
r=A.bc("currentEnd")
q=o.d
q.toString
p=o.e
p.toString
if(A.arR(q,p)>0){s.b=q
r.b=p}else{s.b=p
r.b=q}return A.arR(s.aL(),a)>=0&&A.arR(r.aL(),a)<=0},
bM(a,b){var s=A.wT(this.gh3().a,this.gh3().b,0)
s.d3(0,this.b.bM(0,b))
return s},
ia(a,b){if(this.b.b==null)return},
gh3(){var s,r,q,p,o,n,m=this,l=m.x
if(l==null){l=m.b
s=m.a
r=s.a
q=l.CI(A.afb(B.J,r,s.b,!1))
if(q.length!==0){l=B.c.gK(q)
p=new A.E(l.a,l.b,l.c,l.d)
for(o=1;o<q.length;++o){l=q[o]
p=p.pk(new A.E(l.a,l.b,l.c,l.d))}m.x=p
l=p}else{n=l.r9(new A.bb(r,B.J))
l=A.M1(n,new A.r(n.a+0,n.b+-l.M.gv2()))
m.x=l}}return l},
gcG(a){var s=this.gh3()
return new A.L(s.c-s.a,s.d-s.b)},
aG(a,b){var s,r,q,p,o,n=this,m=n.d
if(m==null||n.e==null)return
s=n.b
if(s.cY!=null){r=A.afb(B.J,m.a,n.e.a,!1)
q=$.au().ba()
q.sct(0,B.b_)
m=s.cY
m.toString
q.saq(0,m)
for(m=s.CI(r),s=m.length,p=0;p<m.length;m.length===s||(0,A.P)(m),++p){o=m[p]
a.gbS(a).cz(new A.E(o.a,o.b,o.c,o.d).dG(b),q)}}A.wT(n.gh3().a,n.gh3().b,0)},
CN(a){var s=this.b.M.a.NV(a),r=this.a,q=r.a
r=r.b
return A.afb(B.J,B.f.hS(s.a,q,r),B.f.hS(s.b,q,r),!1)},
$iaj:1}
A.Br.prototype={
aC(a){var s,r,q
this.eB(a)
s=this.a8$
for(r=t.tq;s!=null;){s.aC(a)
q=s.e
q.toString
s=r.a(q).a9$}},
au(a){var s,r,q
this.dU(0)
s=this.a8$
for(r=t.tq;s!=null;){s.au(0)
q=s.e
q.toString
s=r.a(q).a9$}}}
A.Te.prototype={}
A.Tf.prototype={
aC(a){this.RO(a)
$.fs.Ah$.a.D(0,this.gEm())},
au(a){$.fs.Ah$.a.A(0,this.gEm())
this.RP(0)}}
A.Wa.prototype={}
A.Wb.prototype={}
A.Mt.prototype={
sa7N(a){if(a===this.M)return
this.M=a
this.az()},
sa8d(a){if(a===this.am)return
this.am=a
this.az()},
sa2U(a){return},
sa2T(a){return},
gkj(){return!0},
gml(){return!0},
gYM(){var s=this.M,r=(s|1)>>>0>0||(s|2)>>>0>0?80:0
return(s|4)>>>0>0||(s|8)>>>0>0?r+80:r},
ce(a){return a.bu(new A.L(1/0,this.gYM()))},
aG(a,b){var s=b.a,r=b.b,q=this.k3
q=new A.Lz(new A.E(s,r,s+q.a,r+q.b),this.M,this.am,!1,!1,A.x(t.S,t.O),A.ay())
q.ir()
a.nE()
a.zb(q)}}
A.y4.prototype={}
A.f_.prototype={
ey(a){if(!(a.e instanceof A.cs))a.e=new A.cs()},
ce(a){var s=this.B$
if(s!=null)return s.fW(a)
return this.oL(a)},
bx(){var s=this,r=s.B$,q=t.k
if(r!=null){r.cC(q.a(A.z.prototype.ga_.call(s)),!0)
r=s.B$.k3
r.toString
s.k3=r}else s.k3=s.oL(q.a(A.z.prototype.ga_.call(s)))},
oL(a){return new A.L(A.J(0,a.a,a.b),A.J(0,a.c,a.d))},
d0(a,b){var s=this.B$
s=s==null?null:s.c5(a,b)
return s===!0},
dl(a,b){},
aG(a,b){var s=this.B$
if(s!=null)a.eP(s,b)}}
A.pY.prototype={
I(){return"HitTestBehavior."+this.b}}
A.y5.prototype={
c5(a,b){var s,r=this
if(r.k3.C(0,b)){s=r.d0(a,b)||r.v===B.aL
if(s||r.v===B.an)a.D(0,new A.pk(b,r))}else s=!1
return s},
jR(a){return this.v===B.aL}}
A.Mc.prototype={
sJs(a){if(this.v.l(0,a))return
this.v=a
this.a7()},
bx(){var s=this,r=t.k.a(A.z.prototype.ga_.call(s)),q=s.B$,p=s.v
if(q!=null){q.cC(p.ph(r),!0)
q=s.B$.k3
q.toString
s.k3=q}else s.k3=p.ph(r).bu(B.S)},
ce(a){var s=this.B$,r=this.v
if(s!=null)return s.fW(r.ph(a))
else return r.ph(a).bu(B.S)}}
A.Mn.prototype={
sa7j(a,b){if(this.v===b)return
this.v=b
this.a7()},
sa7g(a,b){if(this.R===b)return
this.R=b
this.a7()},
GQ(a){var s,r,q=a.a,p=a.b
p=p<1/0?p:A.J(this.v,q,p)
s=a.c
r=a.d
return new A.aL(q,p,s,r<1/0?r:A.J(this.R,s,r))},
Fp(a,b){var s=this.B$
if(s!=null)return a.bu(b.$2(s,this.GQ(a)))
return this.GQ(a).bu(B.S)},
ce(a){return this.Fp(a,A.ap_())},
bx(){this.k3=this.Fp(t.k.a(A.z.prototype.ga_.call(this)),A.ap0())}}
A.M8.prototype={
sa2w(a,b){if(this.v===b)return
this.v=b
this.a7()},
EQ(a){var s,r,q,p,o=a.a,n=a.b
if(o>=n&&a.c>=a.d)return new A.L(A.J(0,o,n),A.J(0,a.c,a.d))
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
r=p}return a.bu(new A.L(o,r))},
ce(a){return this.EQ(a)},
bx(){var s,r=this,q=r.EQ(t.k.a(A.z.prototype.ga_.call(r)))
r.k3=q
s=r.B$
if(s!=null)s.fQ(A.un(q))}}
A.Mr.prototype={
gml(){return this.B$!=null&&this.v>0},
sn9(a,b){var s,r,q,p,o=this
if(o.R===b)return
s=o.B$!=null
r=s&&o.v>0
q=o.v
o.R=b
p=B.d.b5(A.WU(b,0,1)*255)
o.v=p
if(r!==(s&&p>0))o.ld()
o.az()
if(q!==0!==(o.v!==0)&&!0)o.b3()},
stf(a){return},
li(a){return this.v>0},
aG(a,b){var s,r,q=this
if(q.B$==null)return
s=q.v
if(s===0){q.ch.saX(0,null)
return}r=q.ch
r.saX(0,a.BS(b,s,A.f_.prototype.giX.call(q),t.Jq.a(r.a)))},
fU(a){var s,r=this.B$
if(r!=null)s=this.v!==0||!1
else s=!1
if(s){r.toString
a.$1(r)}}}
A.y_.prototype={
ge5(){if(this.B$!=null){var s=this.l0$
s.toString}else s=!1
return s},
qk(a){var s=a==null?A.avj():a
s.sJv(0,this.mE$)
return s},
sn9(a,b){var s=this,r=s.hX$
if(r===b)return
if(s.b!=null&&r!=null)r.G(0,s.grU())
s.hX$=b
if(s.b!=null)b.Z(0,s.grU())
s.yR()},
stf(a){if(!1===this.Ag$)return
this.Ag$=!1
this.b3()},
yR(){var s,r=this,q=r.mE$,p=r.hX$
p=r.mE$=B.d.b5(A.WU(p.gq(p),0,1)*255)
if(q!==p){s=r.l0$
p=p>0
r.l0$=p
if(r.B$!=null&&s!==p)r.ld()
r.a7c()
if(q===0||r.mE$===0)r.b3()}},
li(a){var s=this.hX$
return s.gq(s)>0},
fU(a){var s,r=this.B$
if(r!=null)if(this.mE$===0){s=this.Ag$
s.toString}else s=!0
else s=!1
if(s){r.toString
a.$1(r)}}}
A.M7.prototype={}
A.uR.prototype={
Z(a,b){return null},
G(a,b){return null},
j(a){return"CustomClipper"}}
A.of.prototype={
vw(a){return this.b.fX(new A.E(0,0,0+a.a,0+a.b),this.c)},
vW(a){if(A.D(a)!==B.a1U)return!0
t.jH.a(a)
return!a.b.l(0,this.b)||a.c!=this.c}}
A.tn.prototype={
soJ(a){var s,r=this,q=r.v
if(q==a)return
r.v=a
s=a==null
if(s||q==null||A.D(a)!==A.D(q)||a.vW(q))r.ro()
if(r.b!=null){if(q!=null)q.G(0,r.grn())
if(!s)a.Z(0,r.grn())}},
aC(a){var s
this.nI(a)
s=this.v
if(s!=null)s.Z(0,this.grn())},
au(a){var s=this.v
if(s!=null)s.G(0,this.grn())
this.lM(0)},
ro(){this.R=null
this.az()
this.b3()},
smq(a){if(a!==this.aD){this.aD=a
this.az()}},
bx(){var s,r=this,q=r.k3
q=q!=null?q:null
r.wh()
s=r.k3
s.toString
if(!J.h(q,s))r.R=null},
jr(){var s,r,q=this
if(q.R==null){s=q.v
if(s==null)s=null
else{r=q.k3
r.toString
r=s.vw(r)
s=r}q.R=s==null?q.gr_():s}},
iD(a){var s,r=this
switch(r.aD.a){case 0:return null
case 1:case 2:case 3:if(r.v==null)s=null
else{s=r.k3
s=new A.E(0,0,0+s.a,0+s.b)}if(s==null){s=r.k3
s=new A.E(0,0,0+s.a,0+s.b)}return s}},
m(){this.cA=null
this.hB()}}
A.Mb.prototype={
gr_(){var s=this.k3
return new A.E(0,0,0+s.a,0+s.b)},
c5(a,b){var s=this
if(s.v!=null){s.jr()
if(!s.R.C(0,b))return!1}return s.jd(a,b)},
aG(a,b){var s,r,q=this,p=q.B$
if(p!=null){s=q.ch
if(q.aD!==B.h){q.jr()
p=q.cx
p===$&&A.b()
r=q.R
r.toString
s.saX(0,a.k5(p,b,r,A.f_.prototype.giX.call(q),q.aD,t.EM.a(s.a)))}else{a.eP(p,b)
s.saX(0,null)}}else q.ch.saX(0,null)}}
A.Ma.prototype={
gr_(){var s=$.au().cf(),r=this.k3
s.kG(new A.E(0,0,0+r.a,0+r.b))
return s},
c5(a,b){var s=this
if(s.v!=null){s.jr()
if(!s.R.C(0,b))return!1}return s.jd(a,b)},
aG(a,b){var s,r,q,p,o=this,n=o.B$
if(n!=null){s=o.ch
if(o.aD!==B.h){o.jr()
n=o.cx
n===$&&A.b()
r=o.k3
q=r.a
r=r.b
p=o.R
p.toString
s.saX(0,a.ME(n,b,new A.E(0,0,0+q,0+r),p,A.f_.prototype.giX.call(o),o.aD,t.JG.a(s.a)))}else{a.eP(n,b)
s.saX(0,null)}}else o.ch.saX(0,null)}}
A.Bs.prototype={
siH(a,b){if(this.cp===b)return
this.cp=b
this.az()},
shx(a,b){if(this.cK.l(0,b))return
this.cK=b
this.az()},
saq(a,b){if(this.ei.l(0,b))return
this.ei=b
this.az()},
fe(a){this.hA(a)
a.siH(0,this.cp)}}
A.Mu.prototype={
sdF(a,b){if(this.l0===b)return
this.l0=b
this.ro()},
sa2D(a,b){if(J.h(this.hX,b))return
this.hX=b
this.ro()},
gr_(){var s,r,q=this.k3,p=0+q.a
q=0+q.b
switch(this.l0.a){case 0:s=this.hX
if(s==null)s=B.aR
return s.dS(new A.E(0,0,p,q))
case 1:s=(p-0)/2
r=(q-0)/2
return new A.iU(0,0,p,q,s,r,s,r,s,r,s,r,s===r)}},
c5(a,b){var s=this
if(s.v!=null){s.jr()
if(!s.R.C(0,b))return!1}return s.jd(a,b)},
aG(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.B$==null){i.ch.saX(0,null)
return}i.jr()
s=i.R.dG(b)
r=$.au()
q=r.cf()
q.f9(s)
p=a.gbS(a)
if(i.cp!==0&&!0){p.cz(new A.E(s.a,s.b,s.c,s.d).dz(20),$.atl())
o=i.cK
n=i.cp
m=i.ei
p.pf(q,o,n,(m.gq(m)>>>24&255)!==255)}l=i.aD===B.hX
if(!l){r=r.ba()
r.saq(0,i.ei)
p.ds(s,r)}r=i.cx
r===$&&A.b()
o=i.k3
n=o.a
o=o.b
m=i.R
m.toString
k=i.ch
j=t.xs.a(k.a)
k.saX(0,a.a85(r,b,new A.E(0,0,0+n,0+o),m,new A.a9V(i,l),i.aD,j))}}
A.a9V.prototype={
$2(a,b){var s,r
if(this.b){s=a.gbS(a)
r=$.au().ba()
r.saq(0,this.a.ei)
s.pe(r)}this.a.hC(a,b)},
$S:11}
A.Mv.prototype={
gr_(){var s=$.au().cf(),r=this.k3
s.kG(new A.E(0,0,0+r.a,0+r.b))
return s},
c5(a,b){var s=this
if(s.v!=null){s.jr()
if(!s.R.C(0,b))return!1}return s.jd(a,b)},
aG(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(j.B$==null){j.ch.saX(0,null)
return}j.jr()
s=j.k3
r=b.a
q=b.b
p=s.a
s=s.b
o=j.R.dG(b)
n=a.gbS(a)
if(j.cp!==0&&!0){n.cz(new A.E(r,q,r+p,q+s).dz(20),$.atl())
s=j.cK
r=j.cp
q=j.ei
n.pf(o,s,r,(q.gq(q)>>>24&255)!==255)}m=j.aD===B.hX
if(!m){s=$.au().ba()
s.saq(0,j.ei)
n.d9(o,s)}s=j.cx
s===$&&A.b()
r=j.k3
q=r.a
r=r.b
p=j.R
p.toString
l=j.ch
k=t.JG.a(l.a)
l.saX(0,a.ME(s,b,new A.E(0,0,0+q,0+r),p,new A.a9W(j,m),j.aD,k))}}
A.a9W.prototype={
$2(a,b){var s,r
if(this.b){s=a.gbS(a)
r=$.au().ba()
r.saq(0,this.a.ei)
s.pe(r)}this.a.hC(a,b)},
$S:11}
A.uX.prototype={
I(){return"DecorationPosition."+this.b}}
A.Mh.prototype={
sa4h(a){var s,r=this
if(a.l(0,r.R))return
s=r.v
if(s!=null)s.m()
r.v=null
r.R=a
r.az()},
sbL(a,b){if(b===this.aD)return
this.aD=b
this.az()},
szv(a){if(a.l(0,this.bD))return
this.bD=a
this.az()},
au(a){var s=this,r=s.v
if(r!=null)r.m()
s.v=null
s.lM(0)
s.az()},
jR(a){var s=this.R,r=this.k3
r.toString
return s.Lp(r,a,this.bD.d)},
aG(a,b){var s,r,q,p=this,o=p.v
if(o==null)o=p.v=p.R.tz(p.geo())
s=p.bD
r=p.k3
r.toString
q=new A.q0(s.a,s.b,s.c,s.d,r,s.f)
if(p.aD===B.a8){o.q1(a.gbS(a),b,q)
if(p.R.gAP())a.Dh()}p.hC(a,b)
if(p.aD===B.H7){o=p.v
o.toString
o.q1(a.gbS(a),b,q)
if(p.R.gAP())a.Dh()}}}
A.ME.prototype={
sMr(a,b){var s=this
if(J.h(s.v,b))return
s.v=b
s.az()
s.b3()},
see(a){var s=this
if(J.h(s.R,a))return
s.R=a
s.az()
s.b3()},
sbJ(a){var s=this
if(s.aD==a)return
s.aD=a
s.az()
s.b3()},
gml(){return!1},
sbF(a,b){var s,r=this
if(J.h(r.cA,b))return
s=new A.aW(new Float64Array(16))
s.br(b)
r.cA=s
r.az()
r.b3()},
smO(a){return},
gx9(){var s,r,q,p=this,o=p.R,n=o==null?null:o.a1(p.aD)
if(p.v==null&&n==null)return p.cA
s=new A.aW(new Float64Array(16))
s.c1()
o=p.v
if(o!=null)s.aA(0,o.a,o.b)
o=n!=null
if(o){r=p.k3
r.toString
q=n.Ju(r)
s.aA(0,q.a,q.b)}else q=null
r=p.cA
r.toString
s.d3(0,r)
if(o)s.aA(0,-q.a,-q.b)
o=p.v
if(o!=null)s.aA(0,-o.a,-o.b)
return s},
c5(a,b){return this.d0(a,b)},
d0(a,b){var s=this.bD?this.gx9():null
return a.z7(new A.aa4(this),b,s)},
aG(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
if(a.B$!=null){s=a.gx9()
s.toString
r=A.a6N(s)
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
if(b===0||!isFinite(b)){a.ch.saX(0,null)
return}q=a.cx
q===$&&A.b()
p=A.f_.prototype.giX.call(a)
o=a.ch
n=o.a
o.saX(0,a0.q7(q,a1,s,p,n instanceof A.m5?n:null))}else{a.hC(a0,a1.W(0,r))
a.ch.saX(0,null)}}},
dl(a,b){var s=this.gx9()
s.toString
b.d3(0,s)}}
A.aa4.prototype={
$2(a,b){return this.a.qR(a,b)},
$S:20}
A.y1.prototype={
a_E(){if(this.v!=null)return
this.v=this.aD},
FX(a){switch(a.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
sAp(a){var s=this,r=s.R
if(r===a)return
s.R=a
if(s.FX(r)||s.FX(a))s.a7()
else{s.bK=s.cA=null
s.az()}},
see(a){var s=this
if(s.aD.l(0,a))return
s.aD=a
s.v=s.bK=s.cA=null
s.az()},
sbJ(a){var s=this
if(s.bD==a)return
s.bD=a
s.v=s.bK=s.cA=null
s.az()},
ce(a){var s,r=this.B$
if(r!=null){s=r.fW(B.bE)
switch(this.R.a){case 6:return a.bu(new A.aL(0,a.b,0,a.d).oM(s))
case 1:case 2:case 0:case 4:case 3:case 5:return a.oM(s)}}else return new A.L(A.J(0,a.a,a.b),A.J(0,a.c,a.d))},
bx(){var s,r,q,p=this,o=p.B$
if(o!=null){o.cC(B.bE,!0)
switch(p.R.a){case 6:o=t.k
s=o.a(A.z.prototype.ga_.call(p))
r=p.B$.k3
r.toString
q=new A.aL(0,s.b,0,s.d).oM(r)
p.k3=o.a(A.z.prototype.ga_.call(p)).bu(q)
break
case 1:case 2:case 0:case 4:case 3:case 5:o=t.k.a(A.z.prototype.ga_.call(p))
s=p.B$.k3
s.toString
p.k3=o.oM(s)
break}p.bK=p.cA=null}else{o=t.k.a(A.z.prototype.ga_.call(p))
p.k3=new A.L(A.J(0,o.a,o.b),A.J(0,o.c,o.d))}},
yS(){var s,r,q,p,o,n,m,l,k,j=this
if(j.bK!=null)return
if(j.B$==null){j.cA=!1
s=new A.aW(new Float64Array(16))
s.c1()
j.bK=s}else{j.a_E()
s=j.B$.k3
s.toString
r=j.R
q=j.k3
q.toString
p=A.ay7(r,s,q)
q=p.b
r=p.a
o=s.a
s=s.b
n=j.v.AI(r,new A.E(0,0,0+o,0+s))
m=j.v
m.toString
l=j.k3
k=m.AI(q,new A.E(0,0,0+l.a,0+l.b))
m=n.a
j.cA=n.c-m<o||n.d-n.b<s
s=A.wT(k.a,k.b,0)
s.fZ(0,q.a/r.a,q.b/r.b,1)
s.aA(0,-m,-n.b)
j.bK=s}},
Ha(a,b){var s,r,q,p,o=this,n=o.bK
n.toString
s=A.a6N(n)
if(s==null){n=o.cx
n===$&&A.b()
r=o.bK
r.toString
q=A.f_.prototype.giX.call(o)
p=o.ch.a
return a.q7(n,b,r,q,p instanceof A.m5?p:null)}else o.hC(a,b.W(0,s))
return null},
aG(a,b){var s,r,q,p,o,n=this
if(n.B$!=null){s=n.k3
if(!s.gO(s)){s=n.B$.k3
s=s.gO(s)}else s=!0}else s=!0
if(s)return
n.yS()
s=n.cA
s.toString
if(s&&n.el!==B.h){s=n.cx
s===$&&A.b()
r=n.k3
q=r.a
r=r.b
p=n.ch
o=p.a
o=o instanceof A.pr?o:null
p.saX(0,a.k5(s,b,new A.E(0,0,0+q,0+r),n.ga_3(),n.el,o))}else n.ch.saX(0,n.Ha(a,b))},
d0(a,b){var s=this,r=s.k3
if(!r.gO(r)){r=s.B$
if(r==null)r=null
else{r=r.k3
r=r.gO(r)}r=r===!0}else r=!0
if(r)return!1
s.yS()
return a.z7(new A.a9B(s),b,s.bK)},
li(a){var s=this.k3
if(!s.gO(s)){s=a.k3
s=!s.gO(s)}else s=!1
return s},
dl(a,b){var s=this.k3
if(!s.gO(s)){s=a.k3
s=!s.gO(s)}else s=!1
if(!s)b.Dk()
else{this.yS()
s=this.bK
s.toString
b.d3(0,s)}}}
A.a9B.prototype={
$2(a,b){return this.a.qR(a,b)},
$S:20}
A.Mk.prototype={
sa9k(a){var s=this
if(s.v.l(0,a))return
s.v=a
s.az()
s.b3()},
c5(a,b){return this.d0(a,b)},
d0(a,b){var s,r,q=this
if(q.R){s=q.v
r=q.k3
r=new A.r(s.a*r.a,s.b*r.b)
s=r}else s=null
return a.ou(new A.a9C(q),s,b)},
aG(a,b){var s,r,q=this
if(q.B$!=null){s=q.v
r=q.k3
q.hC(a,new A.r(b.a+s.a*r.a,b.b+s.b*r.b))}},
dl(a,b){var s=this.v,r=this.k3
b.aA(0,s.a*r.a,s.b*r.b)}}
A.a9C.prototype={
$2(a,b){return this.a.qR(a,b)},
$S:20}
A.Mw.prototype={
oL(a){return new A.L(A.J(1/0,a.a,a.b),A.J(1/0,a.c,a.d))},
iO(a,b){var s,r=this,q=null
if(t.b.b(a)){s=r.a8
return s==null?q:s.$1(a)}if(t.c.b(a))return q
if(t.oN.b(a)){s=r.aP
return s==null?q:s.$1(a)}if(t.XA.b(a))return q
if(t.Ko.b(a)){s=r.cp
return s==null?q:s.$1(a)}if(t.w5.b(a)){s=r.cK
return s==null?q:s.$1(a)}if(t.d.b(a))return q
if(t.WQ.b(a))return q
if(t.ks.b(a)){s=r.mD
return s==null?q:s.$1(a)}}}
A.Mp.prototype={
c5(a,b){return this.QH(a,b)&&!0},
iO(a,b){var s=this.aP
if(s!=null&&t.XA.b(a))return s.$1(a)},
gKd(a){return this.cp},
gCz(){return this.cK},
aC(a){this.nI(a)
this.cK=!0},
au(a){this.cK=!1
this.lM(0)},
oL(a){return new A.L(A.J(1/0,a.a,a.b),A.J(1/0,a.c,a.d))},
$ijU:1,
gBu(a){return this.bB},
gBv(a){return this.a9}}
A.My.prototype={
ge5(){return!0}}
A.y2.prototype={
sLt(a){var s,r=this
if(a===r.v)return
r.v=a
s=r.R
if(s==null||!s)r.b3()},
sAH(a){var s=this,r=s.R
if(a==r)return
if(r==null)r=s.v
s.R=a
if(r!==(a==null?s.v:a))s.b3()},
c5(a,b){return!this.v&&this.jd(a,b)},
fU(a){var s,r=this.B$
if(r!=null){s=this.R
s=!(s==null?this.v:s)}else s=!1
if(s){r.toString
a.$1(r)}}}
A.Mq.prototype={
suL(a){var s=this
if(a===s.v)return
s.v=a
s.a7()
s.uF()},
eH(a){if(this.v)return null
return this.Ek(a)},
gkj(){return this.v},
ce(a){if(this.v)return new A.L(A.J(0,a.a,a.b),A.J(0,a.c,a.d))
return this.QG(a)},
q2(){this.Qy()},
bx(){var s,r=this
if(r.v){s=r.B$
if(s!=null)s.fQ(t.k.a(A.z.prototype.ga_.call(r)))}else r.wh()},
c5(a,b){return!this.v&&this.jd(a,b)},
li(a){return!this.v},
aG(a,b){if(this.v)return
this.hC(a,b)},
fU(a){if(this.v)return
this.wf(a)}}
A.xY.prototype={
sJh(a){if(this.v===a)return
this.v=a
this.b3()},
sAH(a){return},
c5(a,b){return this.v?this.k3.C(0,b):this.jd(a,b)},
fU(a){var s,r,q=this.B$
if(q!=null){s=this.R
r=this.v
s=!r}else s=!1
if(s){q.toString
a.$1(q)}}}
A.k2.prototype={
sa9w(a){if(A.asL(a,this.a8))return
this.a8=a
this.b3()},
sjY(a){var s,r=this
if(J.h(r.bB,a))return
s=r.bB
r.bB=a
if(a!=null!==(s!=null))r.b3()},
slg(a){var s,r=this
if(J.h(r.aP,a))return
s=r.aP
r.aP=a
if(a!=null!==(s!=null))r.b3()},
sa7C(a){var s,r=this
if(J.h(r.a9,a))return
s=r.a9
r.a9=a
if(a!=null!==(s!=null))r.b3()},
sa7K(a){var s,r=this
if(J.h(r.cp,a))return
s=r.cp
r.cp=a
if(a!=null!==(s!=null))r.b3()},
fe(a){var s,r=this
r.hA(a)
if(r.bB!=null){s=r.a8
s=s==null||s.C(0,B.e6)}else s=!1
if(s)a.sjY(r.bB)
if(r.aP!=null){s=r.a8
s=s==null||s.C(0,B.Cn)}else s=!1
if(s)a.slg(r.aP)
if(r.a9!=null){s=r.a8
if(s==null||s.C(0,B.ea))a.suP(r.ga_l())
s=r.a8
if(s==null||s.C(0,B.e9))a.suO(r.ga_j())}if(r.cp!=null){s=r.a8
if(s==null||s.C(0,B.e7))a.suQ(r.ga_n())
s=r.a8
if(s==null||s.C(0,B.e8))a.suN(r.ga_h())}},
a_k(){var s,r,q=this.a9
if(q!=null){s=this.k3
r=s.a*-0.8
s=s.ju(B.j)
s=A.cN(this.bM(0,null),s)
q.$1(new A.ix(null,new A.r(r,0),r,s))}},
a_m(){var s,r,q=this.a9
if(q!=null){s=this.k3
r=s.a*0.8
s=s.ju(B.j)
s=A.cN(this.bM(0,null),s)
q.$1(new A.ix(null,new A.r(r,0),r,s))}},
a_o(){var s,r,q=this.cp
if(q!=null){s=this.k3
r=s.b*-0.8
s=s.ju(B.j)
s=A.cN(this.bM(0,null),s)
q.$1(new A.ix(null,new A.r(0,r),r,s))}},
a_i(){var s,r,q=this.cp
if(q!=null){s=this.k3
r=s.b*0.8
s=s.ju(B.j)
s=A.cN(this.bM(0,null),s)
q.$1(new A.ix(null,new A.r(0,r),r,s))}}}
A.y6.prototype={
sMC(a){var s=this
if(s.v===a)return
s.v=a
s.IG(a)
s.b3()},
sa3r(a){if(this.R===a)return
this.R=a
this.b3()},
sa4U(a){if(this.aD===a)return
this.aD=a
this.b3()},
sa4R(a){return},
IG(a){var s=this,r=a.fy
r=a.fx
r=r==null?null:new A.cI(r,B.ao)
s.cA=r
r=a.id
r=a.go
r=r==null?null:new A.cI(r,B.ao)
s.bK=r
s.el=null
s.hj=null
s.iM=null},
sbJ(a){if(this.mN==a)return
this.mN=a
this.b3()},
fU(a){this.wf(a)},
fe(a){var s,r,q=this
q.hA(a)
a.a=q.R
a.b=q.aD
s=q.v.a
if(s!=null){a.bk(B.Cy,!0)
a.bk(B.Cq,s)}s=q.v.e
if(s!=null)a.bk(B.Cv,s)
s=q.v.f
if(s!=null)a.bk(B.Cz,s)
s=q.v.w
if(s!=null)a.bk(B.Cx,s)
s=q.v.as
if(s!=null)a.bk(B.Ct,s)
s=q.v.at
if(s!=null)a.bk(B.Cu,s)
s=q.v.db
if(s!=null)a.bk(B.Cr,s)
s=q.cA
if(s!=null){a.p4=s
a.d=!0}s=q.bK
if(s!=null){a.R8=s
a.d=!0}s=q.el
if(s!=null){a.RG=s
a.d=!0}s=q.hj
if(s!=null){a.rx=s
a.d=!0}s=q.iM
if(s!=null){a.ry=s
a.d=!0}s=q.v
r=s.p2
if(r!=null){a.to=r
a.d=!0}s.p3!=null
s=q.v.cx
if(s!=null)a.bk(B.Cs,s)
s=q.v.cy
if(s!=null)a.bk(B.Cw,s)
s=q.mN
if(s!=null){a.y1=s
a.d=!0}s=q.v
r=s.R8
if(r!=null){a.id=r
a.d=!0}s=s.RG
if(s!=null)a.Jp(s)
if(q.v.rx!=null)a.sjY(q.ga_p())
if(q.v.ry!=null)a.slg(q.ga_f())
if(q.v.am!=null)a.suM(q.ga_d())},
a_q(){var s=this.v.rx
if(s!=null)s.$0()},
a_g(){var s=this.v.ry
if(s!=null)s.$0()},
a_e(){var s=this.v.am
if(s!=null)s.$0()}}
A.M9.prototype={
sa2C(a){return},
fe(a){this.hA(a)
a.c=!0}}
A.Mo.prototype={
fe(a){this.hA(a)
a.d=a.p2=a.a=!0}}
A.Mj.prototype={
sa4S(a){if(a===this.v)return
this.v=a
this.b3()},
fU(a){if(this.v)return
this.wf(a)}}
A.Mm.prototype={
sa6o(a,b){if(b===this.v)return
this.v=b
this.b3()},
fe(a){this.hA(a)
a.k1=this.v
a.d=!0}}
A.T4.prototype={
eH(a){var s=this.B$
if(s!=null)return s.j8(a)
return this.Ek(a)}}
A.T5.prototype={
aC(a){var s=this
s.nI(a)
s.hX$.Z(0,s.grU())
s.yR()},
au(a){this.hX$.G(0,this.grU())
this.lM(0)},
aG(a,b){if(this.mE$===0)return
this.hC(a,b)}}
A.Bt.prototype={
aC(a){var s
this.eB(a)
s=this.B$
if(s!=null)s.aC(a)},
au(a){var s
this.dU(0)
s=this.B$
if(s!=null)s.au(0)}}
A.Bu.prototype={
eH(a){var s=this.B$
if(s!=null)return s.j8(a)
return this.wd(a)}}
A.k7.prototype={
I(){return"SelectionResult."+this.b}}
A.dx.prototype={$iaj:1}
A.N9.prototype={
sq9(a){var s=this,r=s.mI$
if(a==r)return
if(a==null)s.G(0,s.gHX())
else if(r==null)s.Z(0,s.gHX())
s.HW()
s.mI$=a
s.HY()},
HY(){var s=this
if(s.mI$==null){s.l2$=!1
return}if(s.l2$&&!s.gq(s).d){s.mI$.A(0,s)
s.l2$=!1}else if(!s.l2$&&s.gq(s).d){s.mI$.D(0,s)
s.l2$=!0}},
HW(){var s=this
if(s.l2$){s.mI$.A(0,s)
s.l2$=!1}}}
A.r3.prototype={
I(){return"SelectionEventType."+this.b}}
A.or.prototype={
I(){return"TextGranularity."+this.b}}
A.abt.prototype={}
A.uA.prototype={}
A.oa.prototype={}
A.ob.prototype={
I(){return"SelectionExtendDirection."+this.b}}
A.r4.prototype={
I(){return"SelectionStatus."+this.b}}
A.lX.prototype={
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.a1(b)!==A.D(s))return!1
return b instanceof A.lX&&J.h(b.a,s.a)&&J.h(b.b,s.b)&&b.c===s.c&&b.d===s.d},
gu(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.oc.prototype={
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.a1(b)!==A.D(s))return!1
return b instanceof A.oc&&b.a.l(0,s.a)&&b.b===s.b&&b.c===s.c},
gu(a){return A.Y(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.zD.prototype={
I(){return"TextSelectionHandleType."+this.b}}
A.o_.prototype={
eH(a){var s,r,q=this.B$
if(q!=null){s=q.j8(a)
r=q.e
r.toString
t.hX.a(r)
if(s!=null)s+=r.a.b}else s=this.wd(a)
return s},
aG(a,b){var s,r=this.B$
if(r!=null){s=r.e
s.toString
a.eP(r,t.hX.a(s).a.W(0,b))}},
d0(a,b){var s,r=this.B$
if(r!=null){s=r.e
s.toString
t.hX.a(s)
return a.ou(new A.a9X(b,s,r),s.a,b)}return!1}}
A.a9X.prototype={
$2(a,b){return this.c.c5(a,b)},
$S:20}
A.Ms.prototype={
rK(){var s=this
if(s.v!=null)return
s.v=s.R.a1(s.aD)},
sde(a,b){var s=this
if(s.R.l(0,b))return
s.R=b
s.v=null
s.a7()},
sbJ(a){var s=this
if(s.aD==a)return
s.aD=a
s.v=null
s.a7()},
ce(a){var s,r,q,p=this
p.rK()
if(p.B$==null){s=p.v
return a.bu(new A.L(s.a+s.c,s.b+s.d))}s=p.v
s.toString
r=a.Kh(s)
q=p.B$.fW(r)
s=p.v
return a.bu(new A.L(s.a+q.a+s.c,s.b+q.b+s.d))},
bx(){var s,r,q,p,o,n,m=this,l=t.k.a(A.z.prototype.ga_.call(m))
m.rK()
if(m.B$==null){s=m.v
m.k3=l.bu(new A.L(s.a+s.c,s.b+s.d))
return}s=m.v
s.toString
r=l.Kh(s)
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
m.k3=l.bu(new A.L(o+s.a+p.c,n+s.b+p.d))}}
A.xZ.prototype={
rK(){var s=this
if(s.v!=null)return
s.v=s.R.a1(s.aD)},
see(a){var s=this
if(s.R.l(0,a))return
s.R=a
s.v=null
s.a7()},
sbJ(a){var s=this
if(s.aD==a)return
s.aD=a
s.v=null
s.a7()},
tc(){var s,r,q,p,o=this
o.rK()
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
r.a=q.mk(t.r.a(p.ag(0,s)))}}
A.Mx.prototype={
sa9B(a){if(this.aP==a)return
this.aP=a
this.a7()},
sa64(a){if(this.a9==a)return
this.a9=a
this.a7()},
ce(a){var s,r,q=this,p=q.aP!=null||a.b===1/0,o=q.a9!=null||a.d===1/0,n=q.B$
if(n!=null){s=n.fW(new A.aL(0,a.b,0,a.d))
if(p){n=q.aP
if(n==null)n=1
n=s.a*n}else n=1/0
if(o){r=q.a9
if(r==null)r=1
r=s.b*r}else r=1/0
return a.bu(new A.L(n,r))}n=p?0:1/0
return a.bu(new A.L(n,o?0:1/0))},
bx(){var s,r,q=this,p=t.k.a(A.z.prototype.ga_.call(q)),o=q.aP!=null||p.b===1/0,n=q.a9!=null||p.d===1/0,m=q.B$
if(m!=null){m.cC(new A.aL(0,p.b,0,p.d),!0)
if(o){m=q.B$.k3.a
s=q.aP
m*=s==null?1:s}else m=1/0
if(n){s=q.B$.k3.b
r=q.a9
s*=r==null?1:r}else s=1/0
q.k3=p.bu(new A.L(m,s))
q.tc()}else{m=o?0:1/0
q.k3=p.bu(new A.L(m,n?0:1/0))}}}
A.Ni.prototype={
vE(a){return new A.L(A.J(1/0,a.a,a.b),A.J(1/0,a.c,a.d))}}
A.Mg.prototype={
szP(a){var s=this,r=s.v
if(r===a)return
if(A.D(a)!==A.D(r)||a.nx(r))s.a7()
s.v=a
s.b!=null},
aC(a){this.RQ(a)},
au(a){this.RR(0)},
ce(a){return a.bu(this.v.vE(a))},
bx(){var s,r,q,p,o,n,m=this,l=t.k,k=l.a(A.z.prototype.ga_.call(m))
m.k3=k.bu(m.v.vE(k))
if(m.B$!=null){s=m.v.CJ(l.a(A.z.prototype.ga_.call(m)))
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
if(q&&s.c>=s.d)l=new A.L(A.J(0,k,r),A.J(0,s.c,s.d))
else{l=l.k3
l.toString}p.a=o.CT(n,l)}}}
A.Bv.prototype={
aC(a){var s
this.eB(a)
s=this.B$
if(s!=null)s.aC(a)},
au(a){var s
this.dU(0)
s=this.B$
if(s!=null)s.au(0)}}
A.vT.prototype={
I(){return"GrowthDirection."+this.b}}
A.kb.prototype={
gLT(){return!1},
tg(a,b,c){if(a==null)a=this.w
switch(A.bo(this.a).a){case 0:return new A.aL(c,b,a,a)
case 1:return new A.aL(a,a,c,b)}},
a2v(a,b){return this.tg(null,a,b)},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.kb))return!1
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
A.adI.prototype={
cd(){return"SliverGeometry"}}
A.ra.prototype={}
A.Nv.prototype={
j(a){return A.D(this.a).j(0)+"@(mainAxis: "+A.i(this.c)+", crossAxis: "+A.i(this.d)+")"}}
A.yR.prototype={
j(a){var s=this.a
return"layoutOffset="+(s==null?"None":B.d.N(s,1))}}
A.lZ.prototype={
j(a){return"paintOffset="+A.i(this.a)}}
A.kd.prototype={}
A.cl.prototype={
ga_(){return t.p.a(A.z.prototype.ga_.call(this))},
gkg(){return this.gi9()},
gi9(){var s=this,r=t.p
switch(A.bo(r.a(A.z.prototype.ga_.call(s)).a).a){case 0:return new A.E(0,0,0+s.id.c,0+r.a(A.z.prototype.ga_.call(s)).w)
case 1:return new A.E(0,0,0+r.a(A.z.prototype.ga_.call(s)).w,0+s.id.c)}},
q2(){},
Lo(a,b,c){var s=this
if(c>=0&&c<s.id.r&&b>=0&&b<t.p.a(A.z.prototype.ga_.call(s)).w)if(s.AG(a,b,c)||!1){a.D(0,new A.Nv(c,b,s))
return!0}return!1},
AG(a,b,c){return!1},
ha(a,b,c){var s=a.d,r=a.r,q=s+r
return A.J(A.J(c,s,q)-A.J(b,s,q),0,r)},
mn(a,b,c){var s=a.d,r=s+a.z,q=a.Q,p=s+q
return A.J(A.J(c,r,p)-A.J(b,r,p),0,q)},
mo(a){return 0},
zt(a){return 0},
dl(a,b){},
iO(a,b){}}
A.a9Y.prototype={
G8(a){var s
switch(a.a.a){case 0:case 3:s=!1
break
case 2:case 1:s=!0
break
default:s=null}switch(a.b.a){case 0:break
case 1:s=!s
break}return s},
a6e(a,b,c,d){var s,r,q,p,o,n=this,m={},l=t.p,k=n.G8(l.a(A.z.prototype.ga_.call(n))),j=b.e
j.toString
j=t.U.a(j).a
j.toString
s=j-l.a(A.z.prototype.ga_.call(n)).d
r=n.mo(b)
q=d-s
p=c-r
o=m.a=null
switch(A.bo(l.a(A.z.prototype.ga_.call(n)).a).a){case 0:if(!k){l=b.k3.a
q=l-q
s=n.id.c-l-s}o=new A.r(s,r)
m.a=new A.r(q,p)
break
case 1:if(!k){l=b.k3.b
q=l-q
s=n.id.c-l-s}o=new A.r(r,s)
m.a=new A.r(p,q)
break}return a.a2m(new A.a9Z(m,b),o)}}
A.a9Z.prototype={
$1(a){return this.b.c5(a,this.a.a)},
$S:107}
A.U0.prototype={}
A.U3.prototype={
au(a){this.wb(0)}}
A.Mz.prototype={
sqp(a){if(this.ca===a)return
this.ca=a
this.a7()}}
A.MA.prototype={
NY(a,b){var s,r
if(b>0){s=a/b
r=B.d.b5(s)
if(Math.abs(s*b-r*b)<1e-10)return r
return B.d.cE(s)}return 0},
CO(a,b){var s,r
if(b>0){s=a/b-1
r=B.d.b5(s)
if(Math.abs(s*b-r*b)<1e-10)return Math.max(0,r)
return Math.max(0,B.d.dm(s))}return 0},
Uh(a){var s,r=this.a8$,q=A.o(this).h("aA.1"),p=t.U,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s<a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).a9$}return o},
Ui(a){var s,r=this.bB$,q=A.o(this).h("aA.1"),p=t.U,o=0
while(!0){if(r!=null){s=r.e
s.toString
s=p.a(s).b
s.toString
s=s>a}else s=!1
if(!s)break;++o
s=r.e
s.toString
r=q.a(s).aP$}return o},
bx(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=t.p,a7=a6.a(A.z.prototype.ga_.call(a4)),a8=a4.av
a8.R8=!1
s=a6.a(A.z.prototype.ga_.call(a4)).y*a4.ca
a6=a7.d
r=a6+a7.z
q=r+a7.Q
p=a7.a2v(s,s)
o=a4.NY(r,s)
n=isFinite(q)?a4.CO(q,s):a5
if(a4.a8$!=null){m=a4.Uh(o)
a4.tt(m,n!=null?a4.Ui(n):0)}else a4.tt(0,0)
if(a4.a8$==null)if(!a4.Jl(o,s*o)){l=o<=0?0:a8.goI()*s
a4.id=A.oj(a5,!1,a5,a5,l,0,0,l,a5)
a8.tH()
return}k=a4.a8$
k.toString
k=k.e
k.toString
j=t.U
k=j.a(k).b
k.toString
i=k-1
h=a5
for(;i>=o;--i){g=a4.LA(p)
if(g==null){a4.id=A.oj(a5,!1,a5,a5,0,0,0,0,i*s)
return}k=g.e
k.toString
j.a(k).a=s*i
if(h==null)h=g}if(h==null){a4.a8$.fQ(p)
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
if(d){g=a4.Lz(p,h)
if(g==null){e=i*s
break}}else g.fQ(p)
d=g.e
d.toString
j.a(d)
c=d.b
c.toString
d.a=s*c;++i
h=g}k=a4.bB$
k.toString
k=k.e
k.toString
k=j.a(k).b
k.toString
b=s*o
a=s*(k+1)
e=Math.min(e,a8.KM(a7,o,k,b,a))
a0=a4.ha(a7,b,a)
a1=a4.mn(a7,b,a)
a2=a6+a7.r
a3=isFinite(a2)?a4.CO(a2,s):a5
a4.id=A.oj(a1,a3!=null&&k>=a3||a6>0,a5,a5,e,a0,0,e,a5)
if(e===a)a8.R8=!0
a8.tH()}}
A.hG.prototype={$ics:1}
A.aa2.prototype={
ey(a){}}
A.e6.prototype={
j(a){var s=this.b,r=this.mJ$?"keepAlive; ":""
return"index="+A.i(s)+"; "+r+this.Rg(0)}}
A.k3.prototype={
ey(a){if(!(a.e instanceof A.e6))a.e=new A.e6(!1,null,null)},
iy(a){var s
this.E7(a)
s=a.e
s.toString
t.U.a(s)
if(!s.c){t.x.a(a)
s.b=this.av.p4}},
AK(a,b,c){this.w5(0,b,c)},
uJ(a,b){var s,r,q,p=this,o=a.e
o.toString
s=t.U
s.a(o)
if(!o.c){p.Pg(a,b)
o=a.e
o.toString
s.a(o).b=p.av.p4
p.a7()}else{r=p.aw
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
if(!s.c){this.Pi(0,b)
return}this.aw.A(0,s.b)
this.jz(b)},
x_(a,b){this.AN(new A.aa_(this,a,b),t.p)},
FA(a){var s,r=this,q=a.e
q.toString
t.U.a(q)
if(q.mJ$){r.A(0,a)
s=q.b
s.toString
r.aw.k(0,s,a)
a.e=q
r.E7(a)
q.c=!0}else r.av.MS(a)},
aC(a){var s,r,q
this.RS(a)
for(s=this.aw,s=s.gb0(s),s=new A.ek(J.aF(s.a),s.b),r=A.o(s).z[1];s.t();){q=s.a;(q==null?r.a(q):q).aC(a)}},
au(a){var s,r,q
this.RT(0)
for(s=this.aw,s=s.gb0(s),s=new A.ek(J.aF(s.a),s.b),r=A.o(s).z[1];s.t();){q=s.a;(q==null?r.a(q):q).au(0)}},
k6(){this.Ph()
var s=this.aw
s.gb0(s).V(0,this.gMO())},
b1(a){var s
this.DF(a)
s=this.aw
s.gb0(s).V(0,a)},
fU(a){this.DF(a)},
Jl(a,b){var s
this.x_(a,null)
s=this.a8$
if(s!=null){s=s.e
s.toString
t.U.a(s).a=b
return!0}this.av.R8=!0
return!1},
LA(a){var s,r,q,p=this,o=p.a8$
o.toString
o=o.e
o.toString
s=t.U
o=s.a(o).b
o.toString
r=o-1
p.x_(r,null)
o=p.a8$
o.toString
q=o.e
q.toString
q=s.a(q).b
q.toString
if(q===r){o.cC(a,!1)
return p.a8$}p.av.R8=!0
return null},
Lz(a,b){var s,r,q,p=b.e
p.toString
s=t.U
p=s.a(p).b
p.toString
r=p+1
this.x_(r,b)
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
tt(a,b){var s={}
s.a=a
s.b=b
this.AN(new A.aa1(s,this),t.p)},
Ms(a){switch(A.bo(t.p.a(A.z.prototype.ga_.call(this)).a).a){case 0:return a.k3.a
case 1:return a.k3.b}},
AG(a,b,c){var s,r,q=this.bB$,p=A.atW(a)
for(s=A.o(this).h("aA.1");q!=null;){if(this.a6e(p,q,b,c))return!0
r=q.e
r.toString
q=s.a(r).aP$}return!1},
zt(a){var s=a.e
s.toString
return t.U.a(s).a},
li(a){var s=t.MR.a(a.e)
return(s==null?null:s.b)!=null&&!this.aw.P(0,s.b)},
dl(a,b){var s,r,q,p,o,n=this
if(!n.li(a))b.Dk()
else{s=t.p
r=n.G8(s.a(A.z.prototype.ga_.call(n)))
q=a.e
q.toString
q=t.U.a(q).a
q.toString
p=q-s.a(A.z.prototype.ga_.call(n)).d
o=n.mo(a)
switch(A.bo(s.a(A.z.prototype.ga_.call(n)).a).a){case 0:b.aA(0,!r?n.id.c-a.k3.a-p:p,o)
break
case 1:b.aA(0,o,!r?n.id.c-a.k3.b-p:p)
break}}},
aG(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null
if(c.a8$==null)return
s=t.p
switch(A.kK(s.a(A.z.prototype.ga_.call(c)).a,s.a(A.z.prototype.ga_.call(c)).b)){case B.G:r=a0.W(0,new A.r(0,c.id.c))
q=B.AD
p=B.ci
o=!0
break
case B.aH:r=a0
q=B.ci
p=B.fV
o=!1
break
case B.F:r=a0
q=B.fV
p=B.ci
o=!1
break
case B.ap:r=a0.W(0,new A.r(c.id.c,0))
q=B.fW
p=B.fV
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
j=k-s.a(A.z.prototype.ga_.call(c)).d
i=c.mo(n)
k=r.a
h=q.a
k=k+h*j+p.a*i
g=r.b
f=q.b
g=g+f*j+p.b*i
e=new A.r(k,g)
if(o){d=c.Ms(n)
e=new A.r(k+h*d,g+f*d)}if(j<s.a(A.z.prototype.ga_.call(c)).r&&j+c.Ms(n)>0)a.eP(n,e)
k=n.e
k.toString
n=m.a(k).a9$}}}
A.aa_.prototype={
$1(a){var s=this.a,r=s.aw,q=this.b,p=this.c
if(r.P(0,q)){r=r.A(0,q)
r.toString
q=r.e
q.toString
t.U.a(q)
s.jz(r)
r.e=q
s.w5(0,r,p)
q.c=!1}else s.av.a3Z(q,p)},
$S:108}
A.aa1.prototype={
$1(a){var s,r,q
for(s=this.a,r=this.b;s.a>0;){q=r.a8$
q.toString
r.FA(q);--s.a}for(;s.b>0;){q=r.bB$
q.toString
r.FA(q);--s.b}s=r.aw
s=s.gb0(s)
q=A.o(s).h("aU<p.E>")
B.c.V(A.aB(new A.aU(s,new A.aa0(),q),!0,q.h("p.E")),r.av.ga8u())},
$S:108}
A.aa0.prototype={
$1(a){var s=a.e
s.toString
return!t.U.a(s).mJ$},
$S:273}
A.Bx.prototype={
aC(a){var s,r,q
this.eB(a)
s=this.a8$
for(r=t.U;s!=null;){s.aC(a)
q=s.e
q.toString
s=r.a(q).a9$}},
au(a){var s,r,q
this.dU(0)
s=this.a8$
for(r=t.U;s!=null;){s.au(0)
q=s.e
q.toString
s=r.a(q).a9$}}}
A.Tj.prototype={}
A.Tk.prototype={}
A.U1.prototype={
au(a){this.wb(0)}}
A.U2.prototype={}
A.qP.prototype={
gzk(){var s=this,r=t.p
switch(A.kK(r.a(A.z.prototype.ga_.call(s)).a,r.a(A.z.prototype.ga_.call(s)).b)){case B.G:return s.gco().d
case B.aH:return s.gco().a
case B.F:return s.gco().b
case B.ap:return s.gco().c}},
ga2o(){var s=this,r=t.p
switch(A.kK(r.a(A.z.prototype.ga_.call(s)).a,r.a(A.z.prototype.ga_.call(s)).b)){case B.G:return s.gco().b
case B.aH:return s.gco().c
case B.F:return s.gco().d
case B.ap:return s.gco().a}},
ga49(){switch(A.bo(t.p.a(A.z.prototype.ga_.call(this)).a).a){case 0:var s=this.gco()
return s.gbl(s)+s.gbp(s)
case 1:return this.gco().gcB()}},
ey(a){if(!(a.e instanceof A.lZ))a.e=new A.lZ(B.j)},
bx(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=null,a2=t.p,a3=a2.a(A.z.prototype.ga_.call(a0)),a4=a0.gzk()
a0.ga2o()
s=a0.gco()
s.toString
a2=s.a2q(A.bo(a2.a(A.z.prototype.ga_.call(a0)).a))
r=a0.ga49()
if(a0.B$==null){q=a0.ha(a3,0,a2)
a0.id=A.oj(a0.mn(a3,0,a2),!1,a1,a1,a2,Math.min(q,a3.r),0,a2,a1)
return}p=a0.ha(a3,0,a4)
o=a3.f
if(o>0)o=Math.max(0,o-p)
s=a0.B$
s.toString
n=Math.max(0,a3.d-a4)
m=Math.min(0,a3.z+a4)
l=a3.r
k=a0.ha(a3,0,a4)
j=a3.Q
i=a0.mn(a3,0,a4)
h=Math.max(0,a3.w-r)
g=a3.a
f=a3.b
s.cC(new A.kb(g,f,a3.c,n,a4+a3.e,o,l-k,h,a3.x,a3.y,m,j-i),!0)
e=a0.B$.id
s=e.y
if(s!=null){a0.id=A.oj(a1,!1,a1,a1,0,0,0,0,s)
return}s=e.a
n=a4+s
m=a2+s
d=a0.ha(a3,n,m)
c=p+d
b=a0.mn(a3,0,a4)
a=a0.mn(a3,n,m)
n=e.c
k=e.d
q=Math.min(p+Math.max(n,k+d),l)
l=e.b
k=Math.min(c+k,q)
j=Math.min(a+b+e.z,j)
i=e.e
n=Math.max(c+n,p+e.r)
a0.id=A.oj(j,e.x,n,k,a2+i,q,l,m,a1)
m=a0.B$.e
m.toString
t.jB.a(m)
switch(A.kK(g,f)){case B.G:m.a=new A.r(a0.gco().a,a0.ha(a3,a0.gco().d+s,a0.gco().d+s+a0.gco().b))
break
case B.aH:m.a=new A.r(a0.ha(a3,0,a0.gco().a),a0.gco().b)
break
case B.F:m.a=new A.r(a0.gco().a,a0.ha(a3,0,a0.gco().b))
break
case B.ap:m.a=new A.r(a0.ha(a3,a0.gco().c+s,a0.gco().c+s+a0.gco().a),a0.gco().b)
break}},
AG(a,b,c){var s,r,q,p,o=this,n=o.B$
if(n!=null&&n.id.r>0){n=n.e
n.toString
t.jB.a(n)
s=o.ha(t.p.a(A.z.prototype.ga_.call(o)),0,o.gzk())
r=o.B$
r.toString
r=o.mo(r)
n=n.a
q=o.B$.ga6c()
p=n!=null
if(p)a.c.push(new A.tg(new A.r(-n.a,-n.b)))
q.$3$crossAxisPosition$mainAxisPosition(a,b-r,c-s)
if(p)a.v0()}return!1},
mo(a){var s=this,r=t.p
switch(A.kK(r.a(A.z.prototype.ga_.call(s)).a,r.a(A.z.prototype.ga_.call(s)).b)){case B.G:case B.F:return s.gco().a
case B.ap:case B.aH:return s.gco().b}},
zt(a){return this.gzk()},
dl(a,b){var s=a.e
s.toString
s=t.jB.a(s).a
b.aA(0,s.a,s.b)},
aG(a,b){var s,r=this.B$
if(r!=null&&r.id.w){s=r.e
s.toString
a.eP(r,b.W(0,t.jB.a(s).a))}}}
A.Th.prototype={
aC(a){var s
this.eB(a)
s=this.B$
if(s!=null)s.aC(a)},
au(a){var s
this.dU(0)
s=this.B$
if(s!=null)s.au(0)}}
A.M4.prototype={
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return b instanceof A.M4&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gu(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){var s=this
return"RelativeRect.fromLTRB("+B.d.N(s.a,1)+", "+B.d.N(s.b,1)+", "+B.d.N(s.c,1)+", "+B.d.N(s.d,1)+")"}}
A.ep.prototype={
gAS(){var s=this
return s.e!=null||s.f!=null||s.r!=null||s.w!=null||s.x!=null||s.y!=null},
j(a){var s=this,r=A.a([],t.s),q=s.e
if(q!=null)r.push("top="+A.ib(q))
q=s.f
if(q!=null)r.push("right="+A.ib(q))
q=s.r
if(q!=null)r.push("bottom="+A.ib(q))
q=s.w
if(q!=null)r.push("left="+A.ib(q))
q=s.x
if(q!=null)r.push("width="+A.ib(q))
q=s.y
if(q!=null)r.push("height="+A.ib(q))
if(r.length===0)r.push("not positioned")
r.push(s.qM(0))
return B.c.bb(r,"; ")}}
A.zk.prototype={
I(){return"StackFit."+this.b}}
A.y7.prototype={
ey(a){if(!(a.e instanceof A.ep))a.e=new A.ep(null,null,B.j)},
a0V(){var s=this
if(s.am!=null)return
s.am=s.ah.a1(s.aF)},
see(a){var s=this
if(s.ah.l(0,a))return
s.ah=a
s.am=null
s.a7()},
sbJ(a){var s=this
if(s.aF==a)return
s.aF=a
s.am=null
s.a7()},
eH(a){return this.Kg(a)},
ce(a){return this.Ie(a,A.ap_())},
Ie(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.a0V()
if(e.cX$===0){s=a.a
r=a.b
q=A.J(1/0,s,r)
p=a.c
o=a.d
n=A.J(1/0,p,o)
return isFinite(q)&&isFinite(n)?new A.L(A.J(1/0,s,r),A.J(1/0,p,o)):new A.L(A.J(0,s,r),A.J(0,p,o))}m=a.a
l=a.c
switch(e.b9.a){case 0:k=new A.aL(0,a.b,0,a.d)
break
case 1:k=A.un(new A.L(A.J(1/0,m,a.b),A.J(1/0,l,a.d)))
break
case 2:k=a
break
default:k=null}j=e.a8$
for(s=t.B,i=l,h=m,g=!1;j!=null;){r=j.e
r.toString
s.a(r)
if(!r.gAS()){f=b.$2(j,k)
h=Math.max(h,f.a)
i=Math.max(i,f.b)
g=!0}j=r.a9$}return g?new A.L(h,i):new A.L(A.J(1/0,m,a.b),A.J(1/0,l,a.d))},
bx(){var s,r,q,p,o,n,m,l=this,k=t.k.a(A.z.prototype.ga_.call(l))
l.M=!1
l.k3=l.Ie(k,A.ap0())
s=l.a8$
for(r=t.B,q=t.r;s!=null;){p=s.e
p.toString
r.a(p)
if(!p.gAS()){o=l.am
o.toString
n=l.k3
n.toString
m=s.k3
m.toString
p.a=o.mk(q.a(n.ag(0,m)))}else{o=l.k3
o.toString
n=l.am
n.toString
l.M=A.avK(s,p,o,n)||l.M}s=p.a9$}},
d0(a,b){return this.zM(a,b)},
uX(a,b){this.oS(a,b)},
aG(a,b){var s,r=this,q=r.bh,p=q!==B.h&&r.M,o=r.B
if(p){p=r.cx
p===$&&A.b()
s=r.k3
o.saX(0,a.k5(p,b,new A.E(0,0,0+s.a,0+s.b),r.gBL(),q,o.a))}else{o.saX(0,null)
r.oS(a,b)}},
m(){this.B.saX(0,null)
this.hB()},
iD(a){var s
switch(this.bh.a){case 0:return null
case 1:case 2:case 3:if(this.M){s=this.k3
s=new A.E(0,0,0+s.a,0+s.b)}else s=null
return s}}}
A.Tl.prototype={
aC(a){var s,r,q
this.eB(a)
s=this.a8$
for(r=t.B;s!=null;){s.aC(a)
q=s.e
q.toString
s=r.a(q).a9$}},
au(a){var s,r,q
this.dU(0)
s=this.a8$
for(r=t.B;s!=null;){s.au(0)
q=s.e
q.toString
s=r.a(q).a9$}}}
A.Tm.prototype={}
A.OF.prototype={
l(a,b){if(b==null)return!1
if(J.a1(b)!==A.D(this))return!1
return b instanceof A.OF&&b.a.l(0,this.a)&&b.b===this.b},
gu(a){return A.Y(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return this.a.j(0)+" at "+A.ib(this.b)+"x"}}
A.y8.prototype={
szv(a){var s,r,q,p,o=this
if(o.k1.l(0,a))return
s=o.k1
o.k1=a
r=s.b
r=A.wS(r,r,1)
q=o.k1.b
if(!r.l(0,A.wS(q,q,1))){r=o.IT()
q=o.ch
p=q.a
p.toString
J.aBC(p)
q.saX(0,r)
o.az()}o.a7()},
IT(){var s,r=this.k1.b
r=A.wS(r,r,1)
this.k4=r
s=A.awn(r)
s.aC(this)
return s},
q2(){},
bx(){var s,r=this.k1.a
this.id=r
s=this.B$
if(s!=null)s.fQ(A.un(r))},
c5(a,b){var s=this.B$
if(s!=null)s.c5(A.atW(a),b)
a.D(0,new A.iC(this,t.AL))
return!0},
a6h(a){var s,r=A.a([],t.om),q=new A.aW(new Float64Array(16))
q.c1()
s=new A.ik(r,A.a([q],t.rE),A.a([],t.cR))
this.c5(s,a)
return s},
ge5(){return!0},
aG(a,b){var s=this.B$
if(s!=null)a.eP(s,b)},
dl(a,b){var s=this.k4
s.toString
b.d3(0,s)
this.QA(a,b)},
a3k(){var s,r,q
try{q=$.au()
s=q.a45()
r=this.ch.a.a2G(s)
this.a1I()
q.a8B(r)
r.m()}finally{}},
a1I(){var s,r,q,p,o,n,m,l,k,j=null,i=this.gi9(),h=i.gaR(),g=this.k2
g.glp()
s=i.gaR()
g.glp()
g=this.ch
r=t.lu
q=g.a.KX(0,new A.r(h.a,0),r)
switch(A.mw().a){case 0:p=g.a.KX(0,new A.r(s.a,i.d-1-0),r)
break
case 1:case 2:case 3:case 4:case 5:p=j
break
default:p=j}h=q==null
if(h&&p==null)return
if(!h&&p!=null){h=q.f
g=q.r
s=q.e
r=q.w
A.awb(new A.j2(p.a,p.b,p.c,p.d,s,h,g,r))
return}o=A.mw()===B.aO
n=h?p:q
h=n.f
g=n.r
s=n.e
r=n.w
m=o?n.a:j
l=o?n.b:j
k=o?n.c:j
A.awb(new A.j2(m,l,k,o?n.d:j,s,h,g,r))},
gi9(){var s=this.id.a5(0,this.k1.b)
return new A.E(0,0,0+s.a,0+s.b)},
gkg(){var s,r=this.k4
r.toString
s=this.id
return A.hM(r,new A.E(0,0,0+s.a,0+s.b))}}
A.To.prototype={
aC(a){var s
this.eB(a)
s=this.B$
if(s!=null)s.aC(a)},
au(a){var s
this.dU(0)
s=this.B$
if(s!=null)s.au(0)}}
A.ut.prototype={
I(){return"CacheExtentStyle."+this.b}}
A.qT.prototype={
j(a){return"RevealedOffset(offset: "+A.i(this.a)+", rect: "+this.b.j(0)+")"}}
A.qQ.prototype={
fe(a){this.hA(a)
a.Jp(B.CA)},
fU(a){var s=this.gJL()
new A.aU(s,new A.aa6(),A.b3(s).h("aU<1>")).V(0,a)},
sh9(a){if(a===this.M)return
this.M=a
this.a7()},
sa48(a){if(a===this.am)return
this.am=a
this.a7()},
sbW(a,b){var s=this,r=s.ah
if(b===r)return
if(s.b!=null)r.G(0,s.guE())
s.ah=b
if(s.b!=null)b.Z(0,s.guE())
s.a7()},
sa2L(a){if(a==null)a=250
if(a===this.aF)return
this.aF=a
this.a7()},
sa2M(a){if(a===this.bh)return
this.bh=a
this.a7()},
smq(a){var s=this
if(a!==s.B){s.B=a
s.az()
s.b3()}},
aC(a){this.RU(a)
this.ah.Z(0,this.guE())},
au(a){this.ah.G(0,this.guE())
this.RV(0)},
ge5(){return!0},
M_(a,b,c,d,e,f,g,h,a0,a1,a2){var s,r,q,p,o,n,m,l,k=this,j=A.aKR(k.ah.k4,e),i=f+h
for(s=f,r=0;c!=null;){q=a2<=0?0:a2
p=Math.max(b,-q)
o=b-p
c.cC(new A.kb(k.M,e,j,q,r,i-s,Math.max(0,a1-s+f),d,k.am,g,p,Math.max(0,a0+o)),!0)
n=c.id
m=n.y
if(m!=null)return m
l=s+n.b
if(n.w||a2>0)k.Np(c,l,e)
else k.Np(c,-a2+f,e)
i=Math.max(l+n.c,i)
m=n.a
a2-=m
r+=m
s+=n.d
m=n.z
if(m!==0){a0-=m-o
b=Math.min(p+m,0)}k.a9r(e,n)
c=a.$1(c)}return 0},
iD(a){var s,r,q,p,o,n
switch(this.B.a){case 0:return null
case 1:case 2:case 3:break}s=this.k3
r=0+s.a
q=0+s.b
s=t.p
if(s.a(A.z.prototype.ga_.call(a)).f===0||!isFinite(s.a(A.z.prototype.ga_.call(a)).y))return new A.E(0,0,r,q)
p=s.a(A.z.prototype.ga_.call(a)).y-s.a(A.z.prototype.ga_.call(a)).r+s.a(A.z.prototype.ga_.call(a)).f
switch(A.kK(this.M,s.a(A.z.prototype.ga_.call(a)).b)){case B.F:o=0+p
n=0
break
case B.G:q-=p
n=0
o=0
break
case B.aH:n=0+p
o=0
break
case B.ap:r-=p
n=0
o=0
break
default:n=0
o=0}return new A.E(n,o,r,q)},
zR(a){var s,r=this,q=r.b9
if(q==null){q=r.k3
return new A.E(0,0,0+q.a,0+q.b)}switch(A.bo(r.M).a){case 1:s=r.k3
return new A.E(0,0-q,0+s.a,0+s.b+q)
case 0:s=r.k3
return new A.E(0-q,0,0+s.a+q,0+s.b)}},
aG(a,b){var s,r,q,p=this
if(p.a8$==null)return
s=p.ga62()&&p.B!==B.h
r=p.an
if(s){s=p.cx
s===$&&A.b()
q=p.k3
r.saX(0,a.k5(s,b,new A.E(0,0,0+q.a,0+q.b),p.ga_4(),p.B,r.a))}else{r.saX(0,null)
p.Hb(a,b)}},
m(){this.an.saX(0,null)
this.hB()},
Hb(a,b){var s,r,q,p,o,n,m
for(s=this.gJL(),r=s.length,q=b.a,p=b.b,o=0;o<s.length;s.length===r||(0,A.P)(s),++o){n=s[o]
if(n.id.w){m=this.a7S(n)
a.eP(n,new A.r(q+m.a,p+m.b))}}},
d0(a,b){var s,r,q,p,o,n,m=this,l={}
l.a=l.b=null
switch(A.bo(m.M).a){case 1:l.b=b.b
l.a=b.a
break
case 0:l.b=b.a
l.a=b.b
break}s=new A.ra(a.a,a.b,a.c)
for(r=m.ga2Z(),q=r.length,p=0;p<r.length;r.length===q||(0,A.P)(r),++p){o=r[p]
if(!o.id.w)continue
n=new A.aW(new Float64Array(16))
n.c1()
m.dl(o,n)
if(a.a2n(new A.aa5(l,m,o,s),n))return!0}return!1},
lq(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=a instanceof A.cl
for(s=t.F,r=c,q=a,p=0;o=q.c,o!==d;q=o){o.toString
s.a(o)
if(q instanceof A.H)r=q
if(o instanceof A.cl){n=o.zt(q)
n.toString
p+=n}else{p=0
b=!1}}if(r!=null){s=r.c
s.toString
t.nl.a(s)
m=t.p.a(A.z.prototype.ga_.call(s)).b
switch(A.bo(d.M).a){case 0:l=r.k3.a
break
case 1:l=r.k3.b
break
default:l=c}if(a1==null)a1=a.gi9()
k=A.hM(a.bM(0,r),a1)}else{if(b){t.nl.a(a)
s=t.p
m=s.a(A.z.prototype.ga_.call(a)).b
l=a.id.a
if(a1==null)switch(A.bo(d.M).a){case 0:a1=new A.E(0,0,0+l,0+s.a(A.z.prototype.ga_.call(a)).w)
break
case 1:a1=new A.E(0,0,0+s.a(A.z.prototype.ga_.call(a)).w,0+a.id.a)
break}}else{s=d.ah.at
s.toString
a1.toString
return new A.qT(s,a1)}k=a1}t.nl.a(q)
switch(A.kK(d.M,m)){case B.G:s=k.d
p+=l-s
j=s-k.b
break
case B.aH:s=k.a
p+=s
j=k.c-s
break
case B.F:s=k.b
p+=s
j=k.d-s
break
case B.ap:s=k.c
p+=l-s
j=s-k.a
break
default:j=c}q.id.toString
p=d.On(q,p)
i=A.hM(a.bM(0,d),a1)
h=d.a7i(q)
switch(t.p.a(A.z.prototype.ga_.call(q)).b.a){case 0:p-=h
break
case 1:switch(A.bo(d.M).a){case 1:p-=i.d-i.b
break
case 0:p-=i.c-i.a
break}break}s=d.M
switch(A.bo(s).a){case 0:g=d.k3.a-h
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
break}return new A.qT(f,i)},
a3l(a,b,c){switch(A.kK(this.M,c)){case B.G:return new A.r(0,this.k3.b-(b+a.id.c))
case B.aH:return new A.r(b,0)
case B.F:return new A.r(0,b)
case B.ap:return new A.r(this.k3.a-(b+a.id.c),0)}},
eY(a,b,c,d){var s=this
if(!s.ah.r.gmj())return s.qP(a,b,c,d)
s.qP(a,null,c,A.avM(a,b,c,s.ah,d,s))},
nz(){return this.eY(B.b1,null,B.w,null)},
lB(a,b){return this.eY(B.b1,a,B.w,b)},
$iM6:1}
A.aa6.prototype={
$1(a){var s=a.id
return s.w||s.z>0},
$S:275}
A.aa5.prototype={
$1(a){var s=this,r=s.c,q=s.a,p=s.b.a3n(r,q.b)
return r.Lo(s.d,q.a,p)},
$S:107}
A.y9.prototype={
ey(a){if(!(a.e instanceof A.kd))a.e=new A.kd(null,null,B.j)},
sa2r(a){if(a===this.u3)return
this.u3=a
this.a7()},
saR(a){if(a==this.e3)return
this.e3=a
this.a7()},
gkj(){return!0},
ce(a){return new A.L(A.J(1/0,a.a,a.b),A.J(1/0,a.c,a.d))},
bx(){var s,r,q,p,o,n,m,l,k,j=this
switch(A.bo(j.M).a){case 1:j.ah.oA(j.k3.b)
break
case 0:j.ah.oA(j.k3.a)
break}if(j.e3==null){j.pp=j.po=0
j.c4=!1
j.ah.ox(0,0)
return}switch(A.bo(j.M).a){case 1:s=j.k3
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
o=j.U_(r,q,p+0)
if(o!==0)j.ah.a3V(o)
else{p=j.ah
n=j.po
n===$&&A.b()
m=j.u3
n=Math.min(0,n+r*m)
l=j.pp
l===$&&A.b()
if(p.ox(n,Math.max(0,l-r*(1-m))))break}k=s+1
if(k<10){s=k
continue}else break}while(!0)},
U_(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.pp=e.po=0
e.c4=!1
s=a*e.u3-c
r=A.J(s,0,a)
q=a-s
p=A.J(q,0,a)
switch(e.bh.a){case 0:e.b9=e.aF
break
case 1:e.b9=a*e.aF
break}o=e.b9
o.toString
n=a+2*o
m=s+o
l=A.J(m,0,n)
k=A.J(n-m,0,n)
j=e.e3.e
j.toString
i=A.o(e).h("aA.1").a(j).aP$
j=i==null
if(!j){h=Math.max(a,s)
g=e.M_(e.ga2X(),A.J(q,-o,0),i,b,B.oJ,p,a,0,l,r,h-a)
if(g!==0)return-g}q=e.e3
o=-s
h=Math.max(0,o)
o=j?Math.min(0,o):0
j=s>=a?s:r
f=e.b9
f.toString
return e.M_(e.ga2V(),A.J(s,-f,0),q,b,B.oI,j,a,o,k,p,h)},
ga62(){return this.c4},
a9r(a,b){var s,r=this
switch(a.a){case 0:s=r.pp
s===$&&A.b()
r.pp=s+b.a
break
case 1:s=r.po
s===$&&A.b()
r.po=s-b.a
break}if(b.x)r.c4=!0},
Np(a,b,c){var s=a.e
s.toString
t.jB.a(s).a=this.a3l(a,b,c)},
a7S(a){var s=a.e
s.toString
return t.jB.a(s).a},
On(a,b){var s,r,q,p,o=this
switch(t.p.a(A.z.prototype.ga_.call(a)).b.a){case 0:s=o.e3
for(r=A.o(o).h("aA.1"),q=0;s!==a;){q+=s.id.a
p=s.e
p.toString
s=r.a(p).a9$}return q+b
case 1:r=o.e3.e
r.toString
p=A.o(o).h("aA.1")
s=p.a(r).aP$
for(q=0;s!==a;){q-=s.id.a
r=s.e
r.toString
s=p.a(r).aP$}return q-b}},
a7i(a){var s,r,q,p=this
switch(t.p.a(A.z.prototype.ga_.call(a)).b.a){case 0:s=p.e3
for(r=A.o(p).h("aA.1");s!==a;){s.id.toString
q=s.e
q.toString
s=r.a(q).a9$}return 0
case 1:r=p.e3.e
r.toString
q=A.o(p).h("aA.1")
s=q.a(r).aP$
for(;s!==a;){s.id.toString
r=s.e
r.toString
s=q.a(r).aP$}return 0}},
dl(a,b){var s=a.e
s.toString
s=t.jB.a(s).a
b.aA(0,s.a,s.b)},
a3n(a,b){var s,r=a.e
r.toString
t.jB.a(r)
s=t.p
switch(A.kK(s.a(A.z.prototype.ga_.call(a)).a,s.a(A.z.prototype.ga_.call(a)).b)){case B.F:return b-r.a.b
case B.aH:return b-r.a.a
case B.G:return a.id.c-(b-r.a.b)
case B.ap:return a.id.c-(b-r.a.a)}},
gJL(){var s,r,q=this,p=A.a([],t.Ry),o=q.a8$
if(o==null)return p
for(s=A.o(q).h("aA.1");o!=q.e3;){o.toString
p.push(o)
r=o.e
r.toString
o=s.a(r).a9$}o=q.bB$
for(;!0;){o.toString
p.push(o)
if(o===q.e3)return p
r=o.e
r.toString
o=s.a(r).aP$}},
ga2Z(){var s,r,q,p=this,o=A.a([],t.Ry)
if(p.a8$==null)return o
s=p.e3
for(r=A.o(p).h("aA.1");s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).a9$}q=p.e3.e
q.toString
s=r.a(q).aP$
for(;s!=null;){o.push(s)
q=s.e
q.toString
s=r.a(q).aP$}return o}}
A.ji.prototype={
aC(a){var s,r,q
this.eB(a)
s=this.a8$
for(r=A.o(this).h("ji.0");s!=null;){s.aC(a)
q=s.e
q.toString
s=r.a(q).a9$}},
au(a){var s,r,q
this.dU(0)
s=this.a8$
for(r=A.o(this).h("ji.0");s!=null;){s.au(0)
q=s.e
q.toString
s=r.a(q).a9$}}}
A.r_.prototype={
I(){return"ScrollDirection."+this.b}}
A.f7.prototype={
pT(a,b,c,d){var s=d.a===B.w.a
if(s){this.e6(b)
return A.bT(null,t.H)}else return this.hP(b,c,d)},
j(a){var s=this,r=A.a([],t.s)
s.Ra(r)
r.push(A.D(s.w).j(0))
r.push(s.r.j(0))
r.push(A.i(s.fr))
r.push(s.k4.j(0))
return"<optimized out>#"+A.c7(s)+"("+B.c.bb(r,", ")+")"},
cw(a){var s=this.at
if(s!=null)a.push("offset: "+B.d.N(s,1))}}
A.rX.prototype={}
A.lU.prototype={
I(){return"SchedulerPhase."+this.b}}
A.a8q.prototype={}
A.dT.prototype={
a2l(a){var s=this.z$
s.push(a)
if(s.length===1){s=$.b_()
s.ay=this.gVE()
s.ch=$.af}},
MW(a){var s=this.z$
B.c.A(s,a)
if(s.length===0){s=$.b_()
s.ay=null
s.ch=$.af}},
VF(a){var s,r,q,p,o,n,m,l,k=this.z$,j=A.aB(k,!0,t.ph)
for(p=j.length,o=0;o<p;++o){s=j[o]
try{if(B.c.C(k,s))s.$1(a)}catch(n){r=A.ak(n)
q=A.az(n)
m=A.bw("while executing callbacks for FrameTiming")
l=$.hi()
if(l!=null)l.$1(new A.bS(r,q,"Flutter framework",m,null,!1))}}},
ud(a){this.Q$=a
switch(a.a){case 0:case 1:this.HZ(!0)
break
case 2:case 3:this.HZ(!1)
break}},
FS(){if(this.ax$)return
this.ax$=!0
A.c6(B.w,this.ga07())},
a08(){this.ax$=!1
if(this.a5m())this.FS()},
a5m(){var s,r,q,p,o,n,m=this,l="No element",k=m.at$,j=k.c===0
if(j||m.b>0)return!1
if(j)A.N(A.ac(l))
s=k.r0(0)
j=s.b
if(m.as$.$2$priority$scheduler(j,m)){try{if(k.c===0)A.N(A.ac(l));++k.d
k.r0(0)
p=k.c-1
o=k.r0(p)
k.b[p]=null
k.c=p
if(p>0)k.U4(o,0)
s.aam()}catch(n){r=A.ak(n)
q=A.az(n)
j=A.bw("during a task callback")
A.e1(new A.bS(r,q,"scheduler library",j,null,!1))}return k.c!==0}return!1},
qD(a,b){var s,r=this
r.ik()
s=++r.ay$
r.ch$.k(0,s,new A.rX(a))
return r.ay$},
qC(a){return this.qD(a,!1)},
gKH(){var s=this
if(s.db$==null){if(s.dy$===B.d0)s.ik()
s.db$=new A.aO(new A.a9($.af,t.V),t.Q)
s.cy$.push(new A.aaX(s))}return s.db$.a},
gL8(){return this.fr$},
HZ(a){if(this.fr$===a)return
this.fr$=a
if(a)this.ik()},
KI(){var s=$.b_()
if(s.w==null){s.w=this.gWW()
s.x=$.af}if(s.y==null){s.y=this.gXj()
s.z=$.af}},
tX(){switch(this.dy$.a){case 0:case 4:this.ik()
return
case 1:case 2:case 3:return}},
ik(){var s,r=this
if(!r.dx$)s=!(A.dT.prototype.gL8.call(r)&&r.cZ$)
else s=!0
if(s)return
r.KI()
$.b_().ik()
r.dx$=!0},
Oi(){if(this.dx$)return
this.KI()
$.b_().ik()
this.dx$=!0},
vJ(){var s,r,q=this
if(q.fx$||q.dy$!==B.d0)return
q.fx$=!0
s=new A.Oj(null,0,A.a([],t._x))
s.qI(0,"Warm-up frame")
r=q.dx$
A.c6(B.w,new A.aaZ(q))
A.c6(B.w,new A.ab_(q,r))
q.a7b(new A.ab0(q,s))},
a8N(){var s=this
s.go$=s.EE(s.id$)
s.fy$=null},
EE(a){var s=this.fy$,r=s==null?B.w:new A.aV(a.a-s.a)
return A.bJ(B.d.b5(r.a/$.ay1)+this.go$.a,0,0)},
WX(a){if(this.fx$){this.k4$=!0
return}this.Lb(a)},
Xk(){var s=this
if(s.k4$){s.k4$=!1
s.cy$.push(new A.aaW(s))
return}s.Ld()},
Lb(a){var s,r,q=this,p=q.ok$,o=p==null
if(!o)p.qI(0,"Frame")
if(q.fy$==null)q.fy$=a
r=a==null
q.k1$=q.EE(r?q.id$:a)
if(!r)q.id$=a
q.dx$=!1
try{if(!o)p.qI(0,"Animate")
q.dy$=B.Wm
s=q.ch$
q.ch$=A.x(t.S,t.h1)
J.jt(s,new A.aaY(q))
q.CW$.Y(0)}finally{q.dy$=B.Wn}},
a8L(a){var s=this,r=s.p1$,q=r==null
if(!q&&r!==a)return null
if(r===a)++s.p2$
else if(q){s.p1$=a
s.p2$=1}return new A.a8q(s.gVl())},
Vm(){if(--this.p2$===0){this.p1$=null
$.b_()}},
Ld(){var s,r,q,p,o,n,m,l=this,k=l.ok$,j=k==null
if(!j)k.u8(0)
try{l.dy$=B.e2
for(p=l.cx$,o=p.length,n=0;n<p.length;p.length===o||(0,A.P)(p),++n){s=p[n]
m=l.k1$
m.toString
l.GF(s,m)}l.dy$=B.Wo
p=l.cy$
r=A.aB(p,!0,t.Vu)
B.c.Y(p)
for(p=r,o=p.length,n=0;n<p.length;p.length===o||(0,A.P)(p),++n){q=p[n]
m=l.k1$
m.toString
l.GF(q,m)}}finally{l.dy$=B.d0
if(!j)k.u8(0)
l.k1$=null}},
GG(a,b,c){var s,r,q,p
try{a.$1(b)}catch(q){s=A.ak(q)
r=A.az(q)
p=A.bw("during a scheduler callback")
A.e1(new A.bS(s,r,"scheduler library",p,null,!1))}},
GF(a,b){return this.GG(a,b,null)}}
A.aaX.prototype={
$1(a){var s=this.a
s.db$.eG(0)
s.db$=null},
$S:2}
A.aaZ.prototype={
$0(){this.a.Lb(null)},
$S:0}
A.ab_.prototype={
$0(){var s=this.a
s.Ld()
s.a8N()
s.fx$=!1
if(this.b)s.ik()},
$S:0}
A.ab0.prototype={
$0(){var s=0,r=A.a5(t.H),q=this
var $async$$0=A.Z(function(a,b){if(a===1)return A.a2(b,r)
while(true)switch(s){case 0:s=2
return A.a8(q.a.gKH(),$async$$0)
case 2:q.b.u8(0)
return A.a3(null,r)}})
return A.a4($async$$0,r)},
$S:30}
A.aaW.prototype={
$1(a){var s=this.a
s.dx$=!1
s.ik()},
$S:2}
A.aaY.prototype={
$2(a,b){var s,r,q=this.a
if(!q.CW$.C(0,a)){s=b.a
r=q.k1$
r.toString
q.GG(s,r,b.b)}},
$S:277}
A.afg.prototype={}
A.ov.prototype={
sBf(a,b){var s=this
if(b===s.b)return
s.b=b
if(b)s.Cp()
else if(s.a!=null&&s.e==null)s.e=$.bN.qD(s.gyH(),!1)},
ga6R(){if(this.a==null)return!1
if(this.b)return!1
var s=$.bN
s.toString
if(A.dT.prototype.gL8.call(s)&&s.cZ$)return!0
if($.bN.dy$!==B.d0)return!0
return!1},
kk(a){var s,r,q=this
q.a=new A.ow(new A.aO(new A.a9($.af,t.V),t.Q))
if(!q.b)s=q.e==null
else s=!1
if(s)q.e=$.bN.qD(q.gyH(),!1)
s=$.bN
r=s.dy$.a
if(r>0&&r<4){s=s.k1$
s.toString
q.c=s}s=q.a
s.toString
return s},
nD(a,b){var s=this,r=s.a
if(r==null)return
s.c=s.a=null
s.Cp()
if(b)r.F_(s)
else r.Iv()},
hy(a){return this.nD(a,!1)},
a1a(a){var s,r=this
r.e=null
s=r.c
if(s==null)s=r.c=a
r.d.$1(new A.aV(a.a-s.a))
if(!r.b&&r.a!=null&&r.e==null)r.e=$.bN.qD(r.gyH(),!0)},
Cp(){var s,r=this.e
if(r!=null){s=$.bN
s.ch$.A(0,r)
s.CW$.D(0,r)
this.e=null}},
m(){var s=this,r=s.a
if(r!=null){s.a=null
s.Cp()
r.F_(s)}},
a9d(a,b){var s=""+"Ticker()"
return s.charCodeAt(0)==0?s:s},
j(a){return this.a9d(a,!1)}}
A.ow.prototype={
Iv(){this.c=!0
this.a.eG(0)
var s=this.b
if(s!=null)s.eG(0)},
F_(a){var s
this.c=!1
s=this.b
if(s!=null)s.iA(new A.zI(a))},
Nx(a){var s,r,q=this,p=new A.aff(a)
if(q.b==null){s=q.b=new A.aO(new A.a9($.af,t.V),t.Q)
r=q.c
if(r!=null)if(r)s.eG(0)
else s.iA(B.a12)}q.b.a.ea(p,p,t.H)},
kL(a,b){return this.a.a.kL(a,b)},
hb(a){return this.kL(a,null)},
ea(a,b,c){return this.a.a.ea(a,b,c)},
aJ(a,b){return this.ea(a,null,b)},
ev(a){return this.a.a.ev(a)},
j(a){var s=A.c7(this),r=this.c
if(r==null)r="active"
else r=r?"complete":"canceled"
return"<optimized out>#"+s+"("+r+")"},
$iap:1}
A.aff.prototype={
$1(a){this.a.$0()},
$S:17}
A.zI.prototype={
j(a){var s=this.a
if(s!=null)return"This ticker was canceled: "+s.j(0)
return'The ticker was canceled before the "orCancel" property was first used.'},
$ibD:1}
A.abu.prototype={}
A.yH.prototype={
j(a){return"SemanticsTag("+this.a+")"}}
A.cI.prototype={
W(a,b){var s,r,q,p,o,n,m,l=this.a,k=l.length
if(k===0)return b
s=b.a
if(s.length===0)return this
r=A.aB(this.b,!0,t.u1)
q=b.b
p=q.length
if(p!==0)for(o=0;o<q.length;q.length===p||(0,A.P)(q),++o){n=q[o]
m=n.a
r.push(n.K0(new A.fy(m.a+k,m.b+k)))}return new A.cI(l+s,r)},
l(a,b){if(b==null)return!1
return J.a1(b)===A.D(this)&&b instanceof A.cI&&b.a===this.a&&A.d8(b.b,this.b)},
gu(a){return A.Y(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"AttributedString('"+this.a+"', attributes: "+A.i(this.b)+")"}}
A.Na.prototype={
cd(){return"SemanticsData"},
l(a,b){var s=this
if(b==null)return!1
return b instanceof A.Na&&b.a===s.a&&b.b===s.b&&b.c.l(0,s.c)&&b.d.l(0,s.d)&&b.e.l(0,s.e)&&b.f.l(0,s.f)&&b.r.l(0,s.r)&&b.w===s.w&&b.x==s.x&&b.cx.l(0,s.cx)&&A.asL(b.cy,s.cy)&&b.z==s.z&&b.Q==s.Q&&b.as==s.as&&b.at==s.at&&b.ax==s.ax&&J.h(b.db,s.db)&&b.dx===s.dx&&b.dy===s.dy&&A.aH3(b.fr,s.fr)},
gu(a){var s=this,r=A.dv(s.fr)
return A.Y(s.a,s.b,s.c,s.d,s.e,s.f,s.r,s.w,s.x,s.cx,s.cy,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch,A.Y(s.CW,s.db,s.dx,s.dy,r,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a))}}
A.TL.prototype={}
A.Nc.prototype={
cd(){return"SemanticsProperties"}}
A.cg.prototype={
sbF(a,b){var s
if(!A.aFm(this.r,b)){s=A.aqU(b)
this.r=s?null:b
this.iw()}},
saZ(a,b){if(!this.w.l(0,b)){this.w=b
this.iw()}},
sLQ(a){if(this.as===a)return
this.as=a
this.iw()},
a_Q(a){var s,r,q,p,o,n,m,l=this,k=l.ax
if(k!=null)for(s=k.length,r=0;r<s;++r)k[r].ch=!0
for(k=a.length,r=0;r<k;++r)a[r].ch=!1
k=l.ax
if(k!=null)for(s=k.length,q=t.LQ,p=!1,r=0;r<k.length;k.length===s||(0,A.P)(k),++r){o=k[r]
if(o.ch){n=J.cx(o)
if(q.a(A.M.prototype.gaT.call(n,o))===l){o.c=null
if(l.b!=null)o.au(0)}p=!0}}else p=!1
for(k=a.length,s=t.LQ,r=0;r<a.length;a.length===k||(0,A.P)(a),++r){o=a[r]
q=J.cx(o)
if(s.a(A.M.prototype.gaT.call(q,o))!==l){if(s.a(A.M.prototype.gaT.call(q,o))!=null){q=s.a(A.M.prototype.gaT.call(q,o))
if(q!=null){o.c=null
if(q.b!=null)o.au(0)}}o.c=l
q=l.b
if(q!=null)o.aC(q)
q=o.a
n=l.a
if(q<=n){o.a=n+1
o.k6()}p=!0}}if(!p&&l.ax!=null)for(k=l.ax,s=k.length,m=0;m<s;++m)if(k[m].e!==a[m].e){p=!0
break}l.ax=a
if(p)l.iw()},
ga60(){var s=this.ax
s=s==null?null:s.length!==0
return s===!0},
yZ(a){var s,r,q,p=this.ax
if(p!=null)for(s=p.length,r=0;r<p.length;p.length===s||(0,A.P)(p),++r){q=p[r]
if(!a.$1(q)||!q.yZ(a))return!1}return!0},
k6(){var s=this.ax
if(s!=null)B.c.V(s,this.gMO())},
aC(a){var s,r,q,p=this
p.w1(a)
for(s=a.c;s.P(0,p.e);)p.e=$.abL=($.abL+1)%65535
s.k(0,p.e,p)
a.d.A(0,p)
if(p.CW){p.CW=!1
p.iw()}s=p.ax
if(s!=null)for(r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].aC(a)},
au(a){var s,r,q,p,o,n=this,m=t.m5
m.a(A.M.prototype.gbI.call(n)).c.A(0,n.e)
m.a(A.M.prototype.gbI.call(n)).d.D(0,n)
n.dU(0)
m=n.ax
if(m!=null)for(s=m.length,r=t.LQ,q=0;q<m.length;m.length===s||(0,A.P)(m),++q){p=m[q]
o=J.cx(p)
if(r.a(A.M.prototype.gaT.call(o,p))===n)o.au(p)}n.iw()},
iw(){var s=this
if(s.CW)return
s.CW=!0
if(s.b!=null)t.m5.a(A.M.prototype.gbI.call(s)).b.D(0,s)},
ka(a,b,c){var s,r=this
if(c==null)c=$.apL()
if(r.fr.l(0,c.p4))if(r.id.l(0,c.ry))if(r.k2===c.x2)if(r.k3===c.xr)if(r.fx.l(0,c.R8))if(r.fy.l(0,c.RG))if(r.go.l(0,c.rx))if(r.k1===c.to)if(r.dy===c.ak)if(r.ok==c.y1)if(r.p1==c.id)if(r.RG==c.bV)if(r.rx==c.bC)if(r.ry==c.bg)if(r.db===c.f)if(r.Q==c.k1)s=r.at!==c.p2
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
if(s)r.iw()
r.fr=c.p4
r.fx=c.R8
r.fy=c.RG
r.go=c.rx
r.id=c.ry
r.k1=c.to
r.k4=c.x1
r.k2=c.x2
r.k3=c.xr
r.dy=c.ak
r.ok=c.y1
r.p1=c.id
r.cx=A.qi(c.e,t._S,t.HT)
r.cy=A.qi(c.p3,t.I7,t.O)
r.db=c.f
r.p2=c.y2
r.RG=c.bV
r.rx=c.bC
r.ry=c.bg
r.at=c.p2
r.p4=c.k2
r.R8=c.k3
r.Q=c.k1
r.to=c.k4
r.x1=c.ok
r.x2=c.p1
r.a_Q(b==null?B.iL:b)},
a9u(a,b){return this.ka(a,null,b)},
O6(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7={}
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
a7.y=s==null?null:A.lv(s,t.g3)
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
q=A.bd(t.S)
for(s=a6.cy,s=A.jQ(s,s.r);s.t();)q.D(0,A.au9(s.d))
a6.k4!=null
if(a6.at)a6.yZ(new A.abM(a7,a6,q))
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
B.c.io(a5)
return new A.Na(s,p,o,n,m,l,k,j,i,d,c,b,a,a0,a1,a2,a3,a4,h,e,g,r,f,a5)},
TQ(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.O6()
if(!a0.ga60()||a0.at){s=$.azR()
r=s}else{q=a0.ax.length
p=a0.Uy()
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
if(b==null)b=$.azT()
a=l==null?$.azS():l
a2.a.push(new A.Nb(n,a1.a,a1.b,-1,-1,-1,g,f,e,d,c,a1.cx,m.a,m.b,h.a,h.b,k.a,k.b,j.a,j.b,i.a,i.b,a1.w,a1.x,A.asO(b),s,r,a,a1.dy))
a0.CW=!1},
Uy(){var s,r,q,p,o,n,m,l,k,j=this,i=j.ok,h=t.LQ,g=h.a(A.M.prototype.gaT.call(j,j))
while(!0){s=i==null
if(!(s&&g!=null))break
i=g.ok
g=h.a(A.M.prototype.gaT.call(g,g))}r=j.ax
if(!s){r.toString
r=A.aJp(r,i)}h=t.NM
q=A.a([],h)
p=A.a([],h)
for(o=null,n=0;n<r.length;++n){m=r[n]
l=m.p1
o=n>0?r[n-1].p1:null
if(n!==0)if(J.a1(l)===J.a1(o)){if(l!=null)o.toString
k=!0}else k=!1
else k=!0
if(!k&&p.length!==0){if(o!=null){if(!!p.immutable$list)A.N(A.S("sort"))
h=p.length-1
if(h-0<=32)A.NC(p,0,h,J.asi())
else A.NB(p,0,h,J.asi())}B.c.L(q,p)
B.c.Y(p)}p.push(new A.kx(m,l,n))}if(o!=null)B.c.io(p)
B.c.L(q,p)
h=t.rB
return A.aB(new A.aC(q,new A.abK(),h),!0,h.h("bi.E"))},
Ot(a){if(this.b==null)return
B.mX.eV(0,a.Nh(this.e))},
cd(){return"SemanticsNode#"+this.e},
a99(a,b,c){return new A.TL(a,this,b,!0,!0,null,c)},
Nf(a){return this.a99(B.H0,null,a)}}
A.abM.prototype={
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
if(s!=null){r=q.y;(r==null?q.y=A.bd(t.g3):r).L(0,s)}for(s=this.b.cy,s=A.jQ(s,s.r),r=this.c;s.t();)r.D(0,A.au9(s.d))
a.k4!=null
s=q.c
r=q.x
q.c=A.anp(a.fr,a.ok,s,r)
r=q.r
s=q.x
q.r=A.anp(a.id,a.ok,r,s)
q.cy=Math.max(q.cy,a.k3+a.k2)
return!0},
$S:82}
A.abK.prototype={
$1(a){return a.a},
$S:279}
A.km.prototype={
aO(a,b){return B.d.aO(this.b,b.b)},
$ibf:1}
A.i8.prototype={
aO(a,b){return B.d.aO(this.a,b.a)},
OV(){var s,r,q,p,o,n,m,l,k,j=A.a([],t.TV)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
o=p.w
j.push(new A.km(!0,A.p2(p,new A.r(o.a- -0.1,o.b- -0.1)).a,p))
j.push(new A.km(!1,A.p2(p,new A.r(o.c+-0.1,o.d+-0.1)).a,p))}B.c.io(j)
n=A.a([],t.YK)
for(s=j.length,r=this.b,o=t.Y,m=null,l=0,q=0;q<j.length;j.length===s||(0,A.P)(j),++q){k=j[q]
if(k.a){++l
if(m==null)m=new A.i8(k.b,r,A.a([],o))
m.c.push(k.c)}else --l
if(l===0){m.toString
n.push(m)
m=null}}B.c.io(n)
if(r===B.a4){s=t.o_
n=A.aB(new A.cn(n,s),!0,s.h("bi.E"))}s=A.ao(n).h("hy<1,cg>")
return A.aB(new A.hy(n,new A.alv(),s),!0,s.h("p.E"))},
OU(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this.c,a4=a3.length
if(a4<=1)return a3
s=t.S
r=A.x(s,t.bu)
q=A.x(s,s)
for(p=this.b,o=p===B.a4,p=p===B.y,n=a4,m=0;m<n;g===a4||(0,A.P)(a3),++m,n=g){l=a3[m]
r.k(0,l.e,l)
n=l.w
k=n.a
j=n.b
i=A.p2(l,new A.r(k+(n.c-k)/2,j+(n.d-j)/2))
for(n=a3.length,k=i.a,j=i.b,h=0;g=a3.length,h<g;a3.length===n||(0,A.P)(a3),++h){f=a3[h]
if((l==null?f==null:l===f)||q.i(0,f.e)===l.e)continue
g=f.w
e=g.a
d=g.b
c=A.p2(f,new A.r(e+(g.c-e)/2,d+(g.d-d)/2))
b=Math.atan2(c.b-j,c.a-k)
a=p&&-0.7853981633974483<b&&b<2.356194490192345
if(o)a0=b<-2.356194490192345||b>2.356194490192345
else a0=!1
if(a||a0)q.k(0,l.e,f.e)}}a1=A.a([],t.t)
a2=A.a(a3.slice(0),A.ao(a3))
B.c.dj(a2,new A.alr())
new A.aC(a2,new A.als(),A.ao(a2).h("aC<1,l>")).V(0,new A.alu(A.bd(s),q,a1))
a3=t.qn
a3=A.aB(new A.aC(a1,new A.alt(r),a3),!0,a3.h("bi.E"))
a4=A.ao(a3).h("cn<1>")
return A.aB(new A.cn(a3,a4),!0,a4.h("bi.E"))}}
A.alv.prototype={
$1(a){return a.OU()},
$S:111}
A.alr.prototype={
$2(a,b){var s,r,q=a.w,p=A.p2(a,new A.r(q.a,q.b))
q=b.w
s=A.p2(b,new A.r(q.a,q.b))
r=B.d.aO(p.b,s.b)
if(r!==0)return-r
return-B.d.aO(p.a,s.a)},
$S:83}
A.alu.prototype={
$1(a){var s=this,r=s.a
if(r.C(0,a))return
r.D(0,a)
r=s.b
if(r.P(0,a)){r=r.i(0,a)
r.toString
s.$1(r)}s.c.push(a)},
$S:76}
A.als.prototype={
$1(a){return a.e},
$S:282}
A.alt.prototype={
$1(a){var s=this.a.i(0,a)
s.toString
return s},
$S:283}
A.anl.prototype={
$1(a){return a.OV()},
$S:111}
A.kx.prototype={
aO(a,b){var s,r=this.b
if(r==null||b.b==null)return this.c-b.c
r.toString
s=b.b
s.toString
return r.aO(0,s)},
$ibf:1}
A.yG.prototype={
Ou(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.b
if(e.a===0)return
s=A.bd(t.S)
r=A.a([],t.Y)
for(q=t.LQ,p=A.o(e).h("aU<1>"),o=p.h("p.E"),n=f.d;e.a!==0;){m=A.aB(new A.aU(e,new A.abP(f),p),!0,o)
e.Y(0)
n.Y(0)
l=new A.abQ()
if(!!m.immutable$list)A.N(A.S("sort"))
k=m.length-1
if(k-0<=32)A.NC(m,0,k,l)
else A.NB(m,0,k,l)
B.c.L(r,m)
for(l=m.length,j=0;j<m.length;m.length===l||(0,A.P)(m),++j){i=m[j]
if(i.at||i.as){k=J.cx(i)
if(q.a(A.M.prototype.gaT.call(k,i))!=null){h=q.a(A.M.prototype.gaT.call(k,i))
h=h.at||h.as}else h=!1
if(h){q.a(A.M.prototype.gaT.call(k,i)).iw()
i.CW=!1}}}}B.c.dj(r,new A.abR())
$.abv.toString
g=new A.abT(A.a([],t.o4))
for(q=r.length,j=0;j<r.length;r.length===q||(0,A.P)(r),++j){i=r[j]
if(i.CW&&i.b!=null)i.TQ(g,s)}e.Y(0)
for(e=A.kt(s,s.r),q=A.o(e).c;e.t();){p=e.d
$.au6.i(0,p==null?q.a(p):p).toString}f.a.$1(new A.Ne(g.a))
f.aI()},
Ww(a,b){var s,r={},q=r.a=this.c.i(0,a)
if(q!=null)s=(q.at||q.as)&&!q.cx.P(0,b)
else s=!1
if(s)q.yZ(new A.abO(r,b))
s=r.a
if(s==null||!s.cx.P(0,b))return null
return r.a.cx.i(0,b)},
a7V(a,b,c){var s=this.Ww(a,b)
if(s!=null){s.$1(c)
return}if(b===B.WM&&this.c.i(0,a).f!=null)this.c.i(0,a).f.$0()},
j(a){return"<optimized out>#"+A.c7(this)}}
A.abP.prototype={
$1(a){return!this.a.d.C(0,a)},
$S:82}
A.abQ.prototype={
$2(a,b){return a.a-b.a},
$S:83}
A.abR.prototype={
$2(a,b){return a.a-b.a},
$S:83}
A.abO.prototype={
$1(a){if(a.cx.P(0,this.b)){this.a.a=a
return!1}return!0},
$S:82}
A.abw.prototype={
kn(a,b){var s=this
s.e.k(0,a,b)
s.f=s.f|a.a
s.d=!0},
eC(a,b){this.kn(a,new A.abx(b))},
sjY(a){a.toString
this.eC(B.e6,a)},
slg(a){a.toString
this.eC(B.Cn,a)},
suO(a){this.eC(B.e9,a)},
suM(a){this.eC(B.WN,a)},
suP(a){this.eC(B.ea,a)},
suQ(a){this.eC(B.e7,a)},
suN(a){this.eC(B.e8,a)},
sBw(a){this.eC(B.Co,a)},
sBp(a){this.eC(B.Cm,a)},
sBm(a,b){this.eC(B.WP,b)},
sBn(a,b){this.eC(B.WT,b)},
sBD(a,b){this.eC(B.WJ,b)},
sBB(a){this.kn(B.WQ,new A.abA(a))},
sBz(a){this.kn(B.WH,new A.aby(a))},
sBC(a){this.kn(B.WR,new A.abB(a))},
sBA(a){this.kn(B.WI,new A.abz(a))},
sBG(a){this.kn(B.WK,new A.abC(a))},
sBH(a){this.kn(B.WL,new A.abD(a))},
sBq(a){this.eC(B.WO,a)},
sBr(a){this.eC(B.WS,a)},
sOl(a){if(a==this.k2)return
this.k2=a
this.d=!0},
sOm(a){if(a==this.k3)return
this.k3=a
this.d=!0},
sB7(a){return},
szJ(a){return},
siH(a,b){if(b===this.x2)return
this.x2=b
this.d=!0},
Jp(a){var s=this.ar;(s==null?this.ar=A.bd(t.g3):s).D(0,a)},
bk(a,b){var s=this,r=s.ak,q=a.a
if(b)s.ak=r|q
else s.ak=r&~q
s.d=!0},
LO(a){var s,r=this
if(a==null||!a.d||!r.d)return!0
if((r.f&a.f)!==0)return!1
if((r.ak&a.ak)!==0)return!1
if(r.R8.a.length!==0)s=a.R8.a.length!==0
else s=!1
if(s)return!1
return!0},
kE(a){var s,r,q=this
if(!a.d)return
q.e.L(0,a.e)
q.p3.L(0,a.p3)
q.f=q.f|a.f
q.ak=q.ak|a.ak
q.y2=a.y2
if(q.bV==null)q.bV=a.bV
if(q.bC==null)q.bC=a.bC
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
q.p4=A.anp(a.p4,a.y1,r,s)
s=q.R8
if(s.a==="")q.R8=a.R8
s=q.RG
if(s.a==="")q.RG=a.RG
s=q.rx
if(s.a==="")q.rx=a.rx
s=q.ry
r=q.y1
q.ry=A.anp(a.ry,a.y1,s,r)
if(q.to==="")q.to=a.to
q.xr=Math.max(q.xr,a.xr+a.x2)
q.d=q.d||a.d},
a3C(){var s=this,r=A.r5()
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
r.ak=s.ak
r.ar=s.ar
r.y2=s.y2
r.bV=s.bV
r.bC=s.bC
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
A.abx.prototype={
$1(a){this.a.$0()},
$S:7}
A.abA.prototype={
$1(a){a.toString
this.a.$1(A.p_(a))},
$S:7}
A.aby.prototype={
$1(a){a.toString
this.a.$1(A.p_(a))},
$S:7}
A.abB.prototype={
$1(a){a.toString
this.a.$1(A.p_(a))},
$S:7}
A.abz.prototype={
$1(a){a.toString
this.a.$1(A.p_(a))},
$S:7}
A.abC.prototype={
$1(a){var s,r,q
a.toString
s=J.apS(t.G.a(a),t.N,t.S)
r=s.i(0,"base")
r.toString
q=s.i(0,"extent")
q.toString
this.a.$1(A.afb(B.J,r,q,!1))},
$S:7}
A.abD.prototype={
$1(a){a.toString
this.a.$1(A.bX(a))},
$S:7}
A.Gq.prototype={
I(){return"DebugSemanticsDumpOrder."+this.b}}
A.r6.prototype={
aO(a,b){var s=this.a4E(b)
return s},
$ibf:1}
A.xp.prototype={
a4E(a){var s=a.b===this.b
if(s)return 0
return B.f.aO(this.b,a.b)}}
A.TK.prototype={}
A.TM.prototype={}
A.TN.prototype={}
A.abF.prototype={
Nh(a){var s=A.aZ(["type",this.a,"data",this.qt()],t.N,t.z)
if(a!=null)s.k(0,"nodeId",a)
return s},
a9c(){return this.Nh(null)},
j(a){var s,r,q,p=A.a([],t.s),o=this.qt(),n=J.atD(o.gbE(o))
B.c.io(n)
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.P)(n),++r){q=n[r]
p.push(A.i(q)+": "+A.i(o.i(0,q)))}return"SemanticsEvent("+B.c.bb(p,", ")+")"}}
A.afj.prototype={
qt(){return A.aZ(["message",this.b],t.N,t.z)}}
A.a6x.prototype={
qt(){return B.j9}}
A.aeG.prototype={
qt(){return B.j9}}
A.DQ.prototype={
lc(a,b){return this.a79(a,!0)},
a79(a,b){var s=0,r=A.a5(t.N),q,p=this,o
var $async$lc=A.Z(function(c,d){if(c===1)return A.a2(d,r)
while(true)switch(s){case 0:s=3
return A.a8(p.dd(0,a),$async$lc)
case 3:o=d
if(o.byteLength<51200){q=B.a5.ef(0,A.d_(o.buffer,0,null))
s=1
break}q=A.WV(A.aKT(),o,'UTF8 decode for "'+a+'"',t.V4,t.N)
s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$lc,r)},
j(a){return"<optimized out>#"+A.c7(this)+"()"}}
A.Z3.prototype={
lc(a,b){return this.P4(a,!0)},
a7a(a,b,c){var s,r={},q=this.b
if(q.P(0,a)){r=q.i(0,a)
r.toString
return c.h("ap<0>").a(r)}r.a=r.b=null
this.lc(a,!1).aJ(b,c).aJ(new A.Z4(r,this,a,c),t.H)
s=r.a
if(s!=null)return s
s=new A.a9($.af,c.h("a9<0>"))
r.b=new A.aO(s,c.h("aO<0>"))
q.k(0,a,s)
return r.b.a}}
A.Z4.prototype={
$1(a){var s=this,r=new A.bC(a,s.d.h("bC<0>")),q=s.a
q.a=r
s.b.b.k(0,s.c,r)
q=q.b
if(q!=null)q.bT(0,a)},
$S(){return this.d.h("at(0)")}}
A.a8z.prototype={
dd(a,b){var s,r=B.cx.eI(A.ax1(A.Co(B.iM,b,B.a5,!1)).e),q=$.hV.am$
q===$&&A.b()
s=q.vM(0,"flutter/assets",A.lA(r.buffer,0,null)).aJ(new A.a8A(b),t.V4)
return s},
uC(a){return this.a77(a)},
a77(a){var s=0,r=A.a5(t.SG),q,p=this,o
var $async$uC=A.Z(function(b,c){if(b===1)return A.a2(c,r)
while(true)switch(s){case 0:s=3
return A.a8(p.dd(0,a),$async$uC)
case 3:o=c
q=A.a5C(A.d_(o.buffer,0,null))
s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$uC,r)}}
A.a8A.prototype={
$1(a){if(a==null)throw A.c(A.aqx(A.a([A.aJQ(this.a),A.bw("The asset does not exist or has empty data.")],t.E)))
return a},
$S:284}
A.Y_.prototype={}
A.r7.prototype={
pB(){var s=$.Xe()
s.a.Y(0)
s.b.Y(0)},
jO(a){return this.a5P(a)},
a5P(a){var s=0,r=A.a5(t.H),q,p=this
var $async$jO=A.Z(function(b,c){if(b===1)return A.a2(c,r)
while(true)switch(s){case 0:switch(A.bX(J.b0(t.a.a(a),"type"))){case"memoryPressure":p.pB()
break}s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$jO,r)},
TL(){var s=A.bc("controller")
s.scg(A.rf(null,new A.abW(s),null,!1,t.hz))
return J.aBK(s.aL())},
a8f(){if(this.Q$!=null)return
$.b_()
var s=A.avY("AppLifecycleState.resumed")
if(s!=null)this.ud(s)},
xH(a){return this.XA(a)},
XA(a){var s=0,r=A.a5(t.ob),q,p=this,o
var $async$xH=A.Z(function(b,c){if(b===1)return A.a2(c,r)
while(true)switch(s){case 0:a.toString
o=A.avY(a)
o.toString
p.ud(o)
q=null
s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$xH,r)},
xI(a){return this.XJ(a)},
XJ(a){var s=0,r=A.a5(t.H)
var $async$xI=A.Z(function(b,c){if(b===1)return A.a2(c,r)
while(true)switch(s){case 0:t.j.a(a.b)
return A.a3(null,r)}})
return A.a4($async$xI,r)},
$idT:1}
A.abW.prototype={
$0(){var s=0,r=A.a5(t.H),q=this,p,o,n
var $async$$0=A.Z(function(a,b){if(a===1)return A.a2(b,r)
while(true)switch(s){case 0:o=A.bc("rawLicenses")
n=o
s=2
return A.a8($.Xe().lc("NOTICES",!1),$async$$0)
case 2:n.scg(b)
p=q.a
n=J
s=3
return A.a8(A.WV(A.aL1(),o.aL(),"parseLicenses",t.N,t.qC),$async$$0)
case 3:n.jt(b,J.aBD(p.aL()))
s=4
return A.a8(J.atv(p.aL()),$async$$0)
case 4:return A.a3(null,r)}})
return A.a4($async$$0,r)},
$S:30}
A.ah3.prototype={
vM(a,b,c){var s=new A.a9($.af,t.gg)
$.b_().a0v(b,c,A.aDQ(new A.ah4(new A.aO(s,t.yB))))
return s},
Di(a,b){if(b==null){a=$.Xc().a.i(0,a)
if(a!=null)a.e=null}else $.Xc().OA(a,new A.ah5(b))}}
A.ah4.prototype={
$1(a){var s,r,q,p
try{this.a.bT(0,a)}catch(q){s=A.ak(q)
r=A.az(q)
p=A.bw("during a platform message response callback")
A.e1(new A.bS(s,r,"services library",p,null,!1))}},
$S:24}
A.ah5.prototype={
$2(a,b){return this.NK(a,b)},
NK(a,b){var s=0,r=A.a5(t.H),q=1,p,o=[],n=this,m,l,k,j,i,h
var $async$$2=A.Z(function(c,d){if(c===1){p=d
s=q}while(true)switch(s){case 0:i=null
q=3
s=6
return A.a8(n.a.$1(a),$async$$2)
case 6:i=d
o.push(5)
s=4
break
case 3:q=2
h=p
m=A.ak(h)
l=A.az(h)
j=A.bw("during a platform message callback")
A.e1(new A.bS(m,l,"services library",j,null,!1))
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
$S:288}
A.a1n.prototype={}
A.a0J.prototype={}
A.a0S.prototype={}
A.GS.prototype={}
A.a1p.prototype={}
A.GQ.prototype={}
A.a1_.prototype={}
A.a0e.prototype={}
A.a10.prototype={}
A.GY.prototype={}
A.GO.prototype={}
A.GV.prototype={}
A.H7.prototype={}
A.a0O.prototype={}
A.a15.prototype={}
A.a0n.prototype={}
A.a0B.prototype={}
A.a_Z.prototype={}
A.a0r.prototype={}
A.H2.prototype={}
A.a00.prototype={}
A.a1a.prototype={}
A.qf.prototype={}
A.lq.prototype={}
A.nz.prototype={}
A.lr.prototype={}
A.wk.prototype={}
A.a4p.prototype={
Ve(a){var s,r,q,p,o,n,m,l,k,j
this.d=!0
s=!1
for(n=this.c,m=0;!1;++m){r=n[m]
try{q=r.$1(a)
s=s||q}catch(l){p=A.ak(l)
o=A.az(l)
k=A.bw("while processing a key handler")
j=$.hi()
if(j!=null)j.$1(new A.bS(p,o,"services library",k,null,!1))}}this.d=!1
return s},
Lf(a){var s,r,q=this,p=a.a,o=a.b
if(a instanceof A.nz){q.a.k(0,p,o)
s=$.azF().i(0,o.a)
if(s!=null){r=q.b
if(r.C(0,s))r.A(0,s)
else r.D(0,s)}}else if(a instanceof A.lr)q.a.A(0,p)
return q.Ve(a)}}
A.wi.prototype={
I(){return"KeyDataTransitMode."+this.b}}
A.wj.prototype={
j(a){return"KeyMessage("+A.i(this.a)+")"}}
A.Ix.prototype={
a5s(a){var s,r=this,q=r.d
switch((q==null?r.d=B.IO:q).a){case 0:return!1
case 1:if(a.c===0&&a.d===0)return!1
s=A.aEQ(a)
if(a.f&&r.e.length===0){r.b.Lf(s)
r.FF(A.a([s],t.K0),null)}else r.e.push(s)
return!1}},
FF(a,b){var s,r,q,p,o=this.a
if(o!=null){s=new A.wj(a,b)
try{o=o.$1(s)
return o}catch(p){r=A.ak(p)
q=A.az(p)
o=A.bw("while processing the key message handler")
A.e1(new A.bS(r,q,"services library",o,null,!1))}}return!1},
Az(a){var s=0,r=A.a5(t.a),q,p=this,o,n,m,l,k,j,i
var $async$Az=A.Z(function(b,c){if(b===1)return A.a2(c,r)
while(true)switch(s){case 0:if(p.d==null){p.d=B.IN
p.c.a.push(p.gUT())}o=A.aGy(t.a.a(a))
if(o instanceof A.iV){n=o.c
m=p.f
if(!n.OL()){m.D(0,n.ge8())
l=!1}else{m.A(0,n.ge8())
l=!0}}else if(o instanceof A.qK){n=p.f
m=o.c
if(n.C(0,m.ge8())){n.A(0,m.ge8())
l=!1}else l=!0}else l=!0
if(l){p.c.a5J(o)
for(n=p.e,m=n.length,k=p.b,j=!1,i=0;i<n.length;n.length===m||(0,A.P)(n),++i)j=k.Lf(n[i])||j
j=p.FF(n,o)||j
B.c.Y(n)}else j=!0
q=A.aZ(["handled",j],t.N,t.z)
s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$Az,r)},
UU(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.c,d=e.ge8(),c=e.gpO()
e=this.b.a
s=A.o(e).h("bh<1>")
r=A.lv(new A.bh(e,s),s.h("p.E"))
q=A.a([],t.K0)
p=e.i(0,d)
o=$.hV.id$
n=a.a
if(n==="")n=f
if(a instanceof A.iV)if(p==null){m=new A.nz(d,c,n,o,!1)
r.D(0,d)}else m=new A.wk(d,p,n,o,!1)
else if(p==null)m=f
else{m=new A.lr(d,p,f,o,!1)
r.A(0,d)}for(s=this.c.d,l=A.o(s).h("bh<1>"),k=l.h("p.E"),j=r.kU(A.lv(new A.bh(s,l),k)),j=j.gae(j),i=this.e;j.t();){h=j.gJ(j)
if(h.l(0,d))q.push(new A.lr(h,c,f,o,!0))
else{g=e.i(0,h)
g.toString
i.push(new A.lr(h,g,f,o,!0))}}for(e=A.lv(new A.bh(s,l),k).kU(r),e=e.gae(e);e.t();){l=e.gJ(e)
k=s.i(0,l)
k.toString
i.push(new A.nz(l,k,f,o,!0))}if(m!=null)i.push(m)
B.c.L(i,q)}}
A.Rh.prototype={}
A.a6i.prototype={}
A.e.prototype={
gu(a){return B.f.gu(this.a)},
l(a,b){if(b==null)return!1
if(this===b)return!0
if(J.a1(b)!==A.D(this))return!1
return b instanceof A.e&&b.a===this.a}}
A.m.prototype={
gu(a){return B.f.gu(this.a)},
l(a,b){if(b==null)return!1
if(this===b)return!0
if(J.a1(b)!==A.D(this))return!1
return b instanceof A.m&&b.a===this.a}}
A.Ri.prototype={}
A.iJ.prototype={
j(a){return"MethodCall("+this.a+", "+A.i(this.b)+")"}}
A.xH.prototype={
j(a){var s=this
return"PlatformException("+s.a+", "+A.i(s.b)+", "+A.i(s.c)+", "+A.i(s.d)+")"},
$ibD:1}
A.x_.prototype={
j(a){return"MissingPluginException("+A.i(this.a)+")"},
$ibD:1}
A.aeh.prototype={
fd(a){if(a==null)return null
return B.d7.eI(A.d_(a.buffer,a.byteOffset,a.byteLength))},
c3(a){if(a==null)return null
return A.lA(B.cx.eI(a).buffer,0,null)}}
A.a5P.prototype={
c3(a){if(a==null)return null
return B.hT.c3(B.a_.tU(a))},
fd(a){var s
if(a==null)return a
s=B.hT.fd(a)
s.toString
return B.a_.ef(0,s)}}
A.a5R.prototype={
hg(a){var s=B.c0.c3(A.aZ(["method",a.a,"args",a.b],t.N,t.X))
s.toString
return s},
he(a){var s,r,q,p=null,o=B.c0.fd(a)
if(!t.G.b(o))throw A.c(A.bL("Expected method call Map, got "+A.i(o),p,p))
s=J.aQ(o)
r=s.i(o,"method")
q=s.i(o,"args")
if(typeof r=="string")return new A.iJ(r,q)
throw A.c(A.bL("Invalid method call: "+A.i(o),p,p))},
Kf(a){var s,r,q,p=null,o=B.c0.fd(a)
if(!t.j.b(o))throw A.c(A.bL("Expected envelope List, got "+A.i(o),p,p))
s=J.aQ(o)
if(s.gp(o)===1)return s.i(o,0)
if(s.gp(o)===3)if(typeof s.i(o,0)=="string")r=s.i(o,1)==null||typeof s.i(o,1)=="string"
else r=!1
else r=!1
if(r){r=A.bX(s.i(o,0))
q=A.cF(s.i(o,1))
throw A.c(A.ar3(r,s.i(o,2),q,p))}if(s.gp(o)===4)if(typeof s.i(o,0)=="string")if(s.i(o,1)==null||typeof s.i(o,1)=="string")r=s.i(o,3)==null||typeof s.i(o,3)=="string"
else r=!1
else r=!1
else r=!1
if(r){r=A.bX(s.i(o,0))
q=A.cF(s.i(o,1))
throw A.c(A.ar3(r,s.i(o,2),q,A.cF(s.i(o,3))))}throw A.c(A.bL("Invalid envelope: "+A.i(o),p,p))},
pg(a){var s=B.c0.c3([a])
s.toString
return s},
kZ(a,b,c){var s=B.c0.c3([a,c,b])
s.toString
return s},
KE(a,b){return this.kZ(a,null,b)}}
A.ae0.prototype={
c3(a){var s
if(a==null)return null
s=A.afZ(64)
this.dg(0,s,a)
return s.jy()},
fd(a){var s,r
if(a==null)return null
s=new A.xV(a)
r=this.fR(0,s)
if(s.b<a.byteLength)throw A.c(B.aU)
return r},
dg(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i=null
if(c==null)b.dL(0,0)
else if(A.kG(c))b.dL(0,c?1:2)
else if(typeof c=="number"){b.dL(0,6)
b.hD(8)
s=$.d9()
b.d.setFloat64(0,c,B.ah===s)
b.TC(b.e)}else if(A.kH(c)){s=-2147483648<=c&&c<=2147483647
r=b.d
if(s){b.dL(0,3)
s=$.d9()
r.setInt32(0,c,B.ah===s)
b.nL(b.e,0,4)}else{b.dL(0,4)
s=$.d9()
B.fU.Dg(r,0,c,s)}}else if(typeof c=="string"){b.dL(0,7)
s=c.length
q=new Uint8Array(s)
n=0
while(!0){if(!(n<s)){p=i
o=0
break}m=B.b.a2(c,n)
if(m<=127)q[n]=m
else{p=B.cx.eI(B.b.bX(c,n))
o=n
break}++n}if(p!=null){j.ew(b,o+p.length)
l=q.BYTES_PER_ELEMENT
k=A.dw(0,o,B.f.f0(q.byteLength,l),i,i)
b.ko(A.d_(q.buffer,q.byteOffset+0*l,(k-0)*l))
b.ko(p)}else{j.ew(b,s)
b.ko(q)}}else if(t.H3.b(c)){b.dL(0,8)
j.ew(b,c.length)
b.ko(c)}else if(t.XO.b(c)){b.dL(0,9)
s=c.length
j.ew(b,s)
b.hD(4)
b.ko(A.d_(c.buffer,c.byteOffset,4*s))}else if(t.s4.b(c)){b.dL(0,14)
s=c.length
j.ew(b,s)
b.hD(4)
b.ko(A.d_(c.buffer,c.byteOffset,4*s))}else if(t.OE.b(c)){b.dL(0,11)
s=c.length
j.ew(b,s)
b.hD(8)
b.ko(A.d_(c.buffer,c.byteOffset,8*s))}else if(t.j.b(c)){b.dL(0,12)
s=J.aQ(c)
j.ew(b,s.gp(c))
for(s=s.gae(c);s.t();)j.dg(0,b,s.gJ(s))}else if(t.G.b(c)){b.dL(0,13)
s=J.aQ(c)
j.ew(b,s.gp(c))
s.V(c,new A.ae1(j,b))}else throw A.c(A.fD(c,i,i))},
fR(a,b){if(b.b>=b.a.byteLength)throw A.c(B.aU)
return this.j0(b.lt(0),b)},
j0(a,b){var s,r,q,p,o,n,m,l,k=this
switch(a){case 0:return null
case 1:return!0
case 2:return!1
case 3:s=b.b
r=$.d9()
q=b.a.getInt32(s,B.ah===r)
b.b+=4
return q
case 4:return b.vC(0)
case 6:b.hD(8)
s=b.b
r=$.d9()
q=b.a.getFloat64(s,B.ah===r)
b.b+=8
return q
case 5:case 7:p=k.dQ(b)
return B.d7.eI(b.lu(p))
case 8:return b.lu(k.dQ(b))
case 9:p=k.dQ(b)
b.hD(4)
s=b.a
o=A.avf(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+4*p
return o
case 10:return b.vD(k.dQ(b))
case 14:p=k.dQ(b)
b.hD(4)
s=b.a
r=s.buffer
s=s.byteOffset+b.b
A.WJ(r,s,p)
o=new Float32Array(r,s,p)
b.b=b.b+4*p
return o
case 11:p=k.dQ(b)
b.hD(8)
s=b.a
o=A.avd(s.buffer,s.byteOffset+b.b,p)
b.b=b.b+8*p
return o
case 12:p=k.dQ(b)
n=A.b1(p,null,!1,t.X)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.N(B.aU)
b.b=r+1
n[m]=k.j0(s.getUint8(r),b)}return n
case 13:p=k.dQ(b)
s=t.X
n=A.x(s,s)
for(s=b.a,m=0;m<p;++m){r=b.b
if(r>=s.byteLength)A.N(B.aU)
b.b=r+1
r=k.j0(s.getUint8(r),b)
l=b.b
if(l>=s.byteLength)A.N(B.aU)
b.b=l+1
n.k(0,r,k.j0(s.getUint8(l),b))}return n
default:throw A.c(B.aU)}},
ew(a,b){var s,r
if(b<254)a.dL(0,b)
else{s=a.d
if(b<=65535){a.dL(0,254)
r=$.d9()
s.setUint16(0,b,B.ah===r)
a.nL(a.e,0,2)}else{a.dL(0,255)
r=$.d9()
s.setUint32(0,b,B.ah===r)
a.nL(a.e,0,4)}}},
dQ(a){var s,r,q=a.lt(0)
switch(q){case 254:s=a.b
r=$.d9()
q=a.a.getUint16(s,B.ah===r)
a.b+=2
return q
case 255:s=a.b
r=$.d9()
q=a.a.getUint32(s,B.ah===r)
a.b+=4
return q
default:return q}}}
A.ae1.prototype={
$2(a,b){var s=this.a,r=this.b
s.dg(0,r,a)
s.dg(0,r,b)},
$S:74}
A.ae4.prototype={
hg(a){var s=A.afZ(64)
B.ar.dg(0,s,a.a)
B.ar.dg(0,s,a.b)
return s.jy()},
he(a){var s,r,q
a.toString
s=new A.xV(a)
r=B.ar.fR(0,s)
q=B.ar.fR(0,s)
if(typeof r=="string"&&s.b>=a.byteLength)return new A.iJ(r,q)
else throw A.c(B.oD)},
pg(a){var s=A.afZ(64)
s.dL(0,0)
B.ar.dg(0,s,a)
return s.jy()},
kZ(a,b,c){var s=A.afZ(64)
s.dL(0,1)
B.ar.dg(0,s,a)
B.ar.dg(0,s,c)
B.ar.dg(0,s,b)
return s.jy()},
KE(a,b){return this.kZ(a,null,b)},
Kf(a){var s,r,q,p,o,n
if(a.byteLength===0)throw A.c(B.I5)
s=new A.xV(a)
if(s.lt(0)===0)return B.ar.fR(0,s)
r=B.ar.fR(0,s)
q=B.ar.fR(0,s)
p=B.ar.fR(0,s)
o=s.b<a.byteLength?A.cF(B.ar.fR(0,s)):null
if(typeof r=="string")n=(q==null||typeof q=="string")&&s.b>=a.byteLength
else n=!1
if(n)throw A.c(A.ar3(r,p,A.cF(q),o))
else throw A.c(B.I6)}}
A.a7n.prototype={
a5j(a,b,c){var s,r,q,p
if(t.PB.b(b)){this.b.A(0,a)
return}s=this.b
r=s.i(0,a)
q=A.aIb(c)
if(q==null)q=this.a
if(J.h(r==null?null:t.ZC.a(r.a),q))return
p=q.tB(a)
s.k(0,a,p)
B.VO.hl("activateSystemCursor",A.aZ(["device",p.b,"kind",t.ZC.a(p.a).a],t.N,t.z),t.H)}}
A.x1.prototype={}
A.ez.prototype={
j(a){var s=this.gtC()
return s}}
A.Q2.prototype={
tB(a){throw A.c(A.cc(null))},
gtC(){return"defer"}}
A.UL.prototype={}
A.m_.prototype={
gtC(){return"SystemMouseCursor("+this.a+")"},
tB(a){return new A.UL(this,a)},
l(a,b){if(b==null)return!1
if(J.a1(b)!==A.D(this))return!1
return b instanceof A.m_&&b.a===this.a},
gu(a){return B.b.gu(this.a)}}
A.RN.prototype={}
A.kY.prototype={
goD(){var s,r=$.hV.am$
r===$&&A.b()
s=r
return s},
eV(a,b){return this.Or(0,b,this.$ti.h("1?"))},
Or(a,b,c){var s=0,r=A.a5(c),q,p=this,o,n
var $async$eV=A.Z(function(d,e){if(d===1)return A.a2(e,r)
while(true)switch(s){case 0:o=p.b
n=o
s=3
return A.a8(p.goD().vM(0,p.a,o.c3(b)),$async$eV)
case 3:q=n.fd(e)
s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$eV,r)},
vS(a){this.goD().Di(this.a,new A.XY(this,a))}}
A.XY.prototype={
$1(a){return this.NE(a)},
NE(a){var s=0,r=A.a5(t.CD),q,p=this,o,n
var $async$$1=A.Z(function(b,c){if(b===1)return A.a2(c,r)
while(true)switch(s){case 0:o=p.a.b
n=o
s=3
return A.a8(p.b.$1(o.fd(a)),$async$$1)
case 3:q=n.c3(c)
s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$$1,r)},
$S:114}
A.wZ.prototype={
goD(){var s,r=$.hV.am$
r===$&&A.b()
s=r
return s},
o1(a,b,c,d){return this.YO(a,b,c,d,d.h("0?"))},
YO(a,b,c,d,e){var s=0,r=A.a5(e),q,p=this,o,n,m,l
var $async$o1=A.Z(function(f,g){if(f===1)return A.a2(g,r)
while(true)switch(s){case 0:o=p.b
n=o.hg(new A.iJ(a,b))
m=p.a
s=3
return A.a8(p.goD().vM(0,m,n),$async$o1)
case 3:l=g
if(l==null){if(c){q=null
s=1
break}throw A.c(A.aFo("No implementation found for method "+a+" on channel "+m))}q=d.h("0?").a(o.Kf(l))
s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$o1,r)},
nv(a){var s=this.goD()
s.Di(this.a,new A.a75(this,a))},
rb(a,b){return this.WU(a,b)},
WU(a,b){var s=0,r=A.a5(t.CD),q,p=2,o,n=this,m,l,k,j,i,h,g,f,e
var $async$rb=A.Z(function(c,d){if(c===1){o=d
s=p}while(true)switch(s){case 0:h=n.b
g=h.he(a)
p=4
e=h
s=7
return A.a8(b.$1(g),$async$rb)
case 7:k=e.pg(d)
q=k
s=1
break
p=2
s=6
break
case 4:p=3
f=o
k=A.ak(f)
if(k instanceof A.xH){m=k
k=m.a
i=m.b
q=h.kZ(k,m.c,i)
s=1
break}else if(k instanceof A.x_){q=null
s=1
break}else{l=k
h=h.KE("error",J.dn(l))
q=h
s=1
break}s=6
break
case 3:s=2
break
case 6:case 1:return A.a3(q,r)
case 2:return A.a2(o,r)}})
return A.a4($async$rb,r)}}
A.a75.prototype={
$1(a){return this.a.rb(a,this.b)},
$S:114}
A.lE.prototype={
hl(a,b,c){return this.a6G(a,b,c,c.h("0?"))},
us(a,b){return this.hl(a,null,b)},
a6G(a,b,c,d){var s=0,r=A.a5(d),q,p=this
var $async$hl=A.Z(function(e,f){if(e===1)return A.a2(f,r)
while(true)switch(s){case 0:q=p.PU(a,b,!0,c)
s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$hl,r)}}
A.ls.prototype={
I(){return"KeyboardSide."+this.b}}
A.eW.prototype={
I(){return"ModifierKey."+this.b}}
A.xT.prototype={
ga7r(){var s,r,q,p=A.x(t.xS,t.LE)
for(s=0;s<9;++s){r=B.pv[s]
if(this.a6L(r)){q=this.NZ(r)
if(q!=null)p.k(0,r,q)}}return p},
OL(){return!0}}
A.hR.prototype={}
A.a9c.prototype={
$0(){var s,r,q,p=this.b,o=J.aQ(p),n=A.cF(o.i(p,"key")),m=n==null
if(!m){s=n.length
s=s!==0&&s===1}else s=!1
if(s)this.a.a=n
s=A.cF(o.i(p,"code"))
if(s==null)s=""
m=m?"":n
r=A.p0(o.i(p,"location"))
if(r==null)r=0
q=A.p0(o.i(p,"metaState"))
if(q==null)q=0
p=A.p0(o.i(p,"keyCode"))
return new A.qJ(s,m,r,q,p==null?0:p)},
$S:292}
A.iV.prototype={}
A.qK.prototype={}
A.a9h.prototype={
a5J(a){var s,r,q,p,o,n,m,l,k,j,i=this
if(a instanceof A.iV){p=a.c
i.d.k(0,p.ge8(),p.gpO())}else if(a instanceof A.qK)i.d.A(0,a.c.ge8())
i.a16(a)
for(p=i.a,o=A.aB(p,!0,t.iS),n=o.length,m=0;m<n;++m){s=o[m]
try{if(B.c.C(p,s))s.$1(a)}catch(l){r=A.ak(l)
q=A.az(l)
k=A.bw("while processing a raw key listener")
j=$.hi()
if(j!=null)j.$1(new A.bS(r,q,"services library",k,null,!1))}}return!1},
a16(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=a1.c,f=g.ga7r(),e=t.v3,d=A.x(e,t.bd),c=A.bd(e),b=this.d,a=A.lv(new A.bh(b,A.o(b).h("bh<1>")),e),a0=a1 instanceof A.iV
if(a0)a.D(0,g.ge8())
for(s=null,r=0;r<9;++r){q=B.pv[r]
p=$.azI()
o=p.i(0,new A.cw(q,B.bu))
if(o==null)continue
if(o.C(0,g.ge8()))s=q
if(f.i(0,q)===B.cE){c.L(0,o)
if(o.kH(0,a.gjv(a)))continue}n=f.i(0,q)==null?A.bd(e):p.i(0,new A.cw(q,f.i(0,q)))
if(n==null)continue
for(p=new A.t8(n,n.r),p.c=n.e,m=A.o(p).c;p.t();){l=p.d
if(l==null)l=m.a(l)
k=$.azH().i(0,l)
k.toString
d.k(0,l,k)}}e=g instanceof A.a9a
j=(e||g instanceof A.qJ)&&b.i(0,B.bY)!=null&&!J.h(b.i(0,B.bY),B.dI)
for(a=$.apJ(),a=A.jQ(a,a.r);a.t();){p=a.d
i=j&&p.l(0,B.bY)
if(!c.C(0,p)&&!i)b.A(0,p)}if(!(g instanceof A.a98)&&!(g instanceof A.a9b))b.A(0,B.dV)
b.L(0,d)
if(a0&&s!=null&&!b.P(0,g.ge8())){if(e&&g.ge8().l(0,B.bZ)||g instanceof A.a99||g instanceof A.a97){h=$.apJ().i(0,g.ge8())
if(h!=null)b.k(0,g.ge8(),h)}if(g instanceof A.qJ&&g.ge8().l(0,B.bZ))b.k(0,g.ge8(),g.gpO())}}}
A.cw.prototype={
l(a,b){if(b==null)return!1
if(J.a1(b)!==A.D(this))return!1
return b instanceof A.cw&&b.a===this.a&&b.b==this.b},
gu(a){return A.Y(this.a,this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.T1.prototype={}
A.T0.prototype={}
A.a97.prototype={}
A.a98.prototype={}
A.a99.prototype={}
A.a9a.prototype={}
A.a9b.prototype={}
A.qJ.prototype={
ge8(){var s=this.a,r=B.Vj.i(0,s)
return r==null?new A.m(98784247808+B.b.gu(s)):r},
gpO(){var s,r=this.b,q=B.Vl.i(0,r),p=q==null?null:q[this.c]
if(p!=null)return p
s=B.Vi.i(0,r)
if(s!=null)return s
if(r.length===1)return new A.e(B.b.a2(r.toLowerCase(),0))
return new A.e(B.b.gu(this.a)+98784247808)},
a6L(a){var s=this
switch(a.a){case 0:return(s.d&4)!==0
case 1:return(s.d&1)!==0
case 2:return(s.d&2)!==0
case 3:return(s.d&8)!==0
case 5:return(s.d&16)!==0
case 4:return(s.d&32)!==0
case 6:return(s.d&64)!==0
case 7:case 8:return!1}},
NZ(a){return B.cE},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(J.a1(b)!==A.D(s))return!1
return b instanceof A.qJ&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.e===s.e},
gu(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.e,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.yc.prototype={
ga8T(){var s=this
if(s.c)return new A.bC(s.a,t.hr)
if(s.b==null){s.b=new A.aO(new A.a9($.af,t.X6),t.EZ)
s.ra()}return s.b.a},
ra(){var s=0,r=A.a5(t.H),q,p=this,o
var $async$ra=A.Z(function(a,b){if(a===1)return A.a2(b,r)
while(true)switch(s){case 0:s=3
return A.a8(B.jf.us("get",t.pE),$async$ra)
case 3:o=b
if(p.b==null){s=1
break}p.Hh(o)
case 1:return A.a3(q,r)}})
return A.a4($async$ra,r)},
Hh(a){var s,r=a==null
if(!r){s=J.b0(a,"enabled")
s.toString
A.p_(s)}else s=!1
this.a5L(r?null:t.nc.a(J.b0(a,"data")),s)},
a5L(a,b){var s,r,q=this,p=q.c&&b
q.d=p
if(p)$.bN.cy$.push(new A.aad(q))
s=q.a
if(b){p=q.V5(a)
r=t.N
if(p==null){p=t.X
p=A.x(p,p)}r=new A.cO(p,q,null,"root",A.x(r,t.z4),A.x(r,t.I1))
p=r}else p=null
q.a=p
q.c=!0
r=q.b
if(r!=null)r.bT(0,p)
q.b=null
if(q.a!=s){q.aI()
if(s!=null)s.m()}},
y4(a){return this.Zm(a)},
Zm(a){var s=0,r=A.a5(t.H),q=this,p
var $async$y4=A.Z(function(b,c){if(b===1)return A.a2(c,r)
while(true)switch(s){case 0:p=a.a
switch(p){case"push":q.Hh(t.pE.a(a.b))
break
default:throw A.c(A.cc(p+" was invoked but isn't implemented by "+A.D(q).j(0)))}return A.a3(null,r)}})
return A.a4($async$y4,r)},
V5(a){if(a==null)return null
return t.J1.a(B.ar.fd(A.lA(a.buffer,a.byteOffset,a.byteLength)))},
Oj(a){var s=this
s.r.D(0,a)
if(!s.f){s.f=!0
$.bN.cy$.push(new A.aae(s))}},
FH(){var s,r,q,p,o,n=this
if(!n.f)return
n.f=!1
for(s=n.r,r=A.kt(s,s.r),q=A.o(r).c;r.t();){p=r.d;(p==null?q.a(p):p).w=!1}s.Y(0)
o=B.ar.c3(n.a.a)
B.jf.hl("put",A.d_(o.buffer,o.byteOffset,o.byteLength),t.H)},
L1(){if($.bN.dx$)return
this.FH()}}
A.aad.prototype={
$1(a){this.a.d=!1},
$S:2}
A.aae.prototype={
$1(a){return this.a.FH()},
$S:2}
A.cO.prototype={
gob(){var s=J.DF(this.a,"c",new A.aaa())
s.toString
return t.pE.a(s)},
gjm(){var s=J.DF(this.a,"v",new A.aab())
s.toString
return t.pE.a(s)},
a8r(a,b,c){var s=this,r=J.es(s.gjm(),b),q=c.h("0?").a(J.ju(s.gjm(),b))
if(J.hj(s.gjm()))J.ju(s.a,"v")
if(r)s.m0()
return q},
a30(a,b){var s,r,q,p,o=this,n=o.f
if(n.P(0,a)||!J.es(o.gob(),a)){n=t.N
s=new A.cO(A.x(n,t.X),null,null,a,A.x(n,t.z4),A.x(n,t.I1))
o.iy(s)
return s}r=t.N
q=o.c
p=J.b0(o.gob(),a)
p.toString
s=new A.cO(t.pE.a(p),q,o,a,A.x(r,t.z4),A.x(r,t.I1))
n.k(0,a,s)
return s},
iy(a){var s=this,r=a.d
if(r!==s){if(r!=null)r.rE(a)
a.d=s
s.Et(a)
if(a.c!=s.c)s.Hu(a)}},
Vs(a){this.rE(a)
a.d=null
if(a.c!=null){a.yQ(null)
a.J7(this.gHt())}},
m0(){var s,r=this
if(!r.w){r.w=!0
s=r.c
if(s!=null)s.Oj(r)}},
Hu(a){a.yQ(this.c)
a.J7(this.gHt())},
yQ(a){var s=this,r=s.c
if(r==a)return
if(s.w)if(r!=null)r.r.A(0,s)
s.c=a
if(s.w&&a!=null){s.w=!1
s.m0()}},
rE(a){var s,r,q,p=this
if(J.h(p.f.A(0,a.e),a)){J.ju(p.gob(),a.e)
s=p.r
r=s.i(0,a.e)
if(r!=null){q=J.c3(r)
p.FU(q.e9(r))
if(q.gO(r))s.A(0,a.e)}if(J.hj(p.gob()))J.ju(p.a,"c")
p.m0()
return}s=p.r
q=s.i(0,a.e)
if(q!=null)J.ju(q,a)
q=s.i(0,a.e)
q=q==null?null:J.hj(q)
if(q===!0)s.A(0,a.e)},
Et(a){var s=this
if(s.f.P(0,a.e)){J.kQ(s.r.bQ(0,a.e,new A.aa9()),a)
s.m0()
return}s.FU(a)
s.m0()},
FU(a){this.f.k(0,a.e,a)
J.cX(this.gob(),a.e,a.a)},
J8(a,b){var s,r,q=this.f
q=q.gb0(q)
s=this.r
s=s.gb0(s)
r=q.a5d(0,new A.hy(s,new A.aac(),A.o(s).h("hy<p.E,cO>")))
J.jt(b?A.aB(r,!1,A.o(r).h("p.E")):r,a)},
J7(a){return this.J8(a,!1)},
a8z(a){var s,r=this
if(a===r.e)return
s=r.d
if(s!=null)s.rE(r)
r.e=a
s=r.d
if(s!=null)s.Et(r)},
m(){var s,r=this
r.J8(r.gVr(),!0)
r.f.Y(0)
r.r.Y(0)
s=r.d
if(s!=null)s.rE(r)
r.d=null
r.yQ(null)
r.x=!0},
j(a){return"RestorationBucket(restorationId: "+this.e+", owner: "+A.i(this.b)+")"}}
A.aaa.prototype={
$0(){var s=t.X
return A.x(s,s)},
$S:116}
A.aab.prototype={
$0(){var s=t.X
return A.x(s,s)},
$S:116}
A.aa9.prototype={
$0(){return A.a([],t.QT)},
$S:295}
A.aac.prototype={
$1(a){return a},
$S:296}
A.XF.prototype={}
A.j2.prototype={
Iw(){var s,r,q,p,o=this,n=o.a
n=n==null?null:n.a
s=o.e
s=s==null?null:s.a
r=o.f.I()
q=o.r.I()
p=o.c
p=p==null?null:p.I()
return A.aZ(["systemNavigationBarColor",n,"systemNavigationBarDividerColor",null,"systemStatusBarContrastEnforced",o.w,"statusBarColor",s,"statusBarBrightness",r,"statusBarIconBrightness",q,"systemNavigationBarIconBrightness",p,"systemNavigationBarContrastEnforced",o.d],t.N,t.z)},
j(a){return"SystemUiOverlayStyle("+this.Iw().j(0)+")"},
gu(a){var s=this
return A.Y(s.a,s.b,s.d,s.e,s.f,s.r,s.w,s.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
l(a,b){var s,r=this
if(b==null)return!1
if(J.a1(b)!==A.D(r))return!1
if(b instanceof A.j2)if(J.h(b.a,r.a))if(J.h(b.e,r.e))if(b.r===r.r)if(b.f===r.f)s=b.c==r.c
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s}}
A.aeA.prototype={
$0(){if(!J.h($.rn,$.arr)){B.cj.hl("SystemChrome.setSystemUIOverlayStyle",$.rn.Iw(),t.H)
$.arr=$.rn}$.rn=null},
$S:0}
A.zs.prototype={
I(){return"SystemSoundType."+this.b}}
A.aeI.prototype={
W(a,b){return new A.Qo(b,this)}}
A.Zs.prototype={
hv(a){var s,r,q,p,o,n=a.a
if(n<=0)return B.d6
s=this.a
r=s.length
if(n<=r)q=n===r&&a.b===B.J
else q=!0
if(q)return new A.bb(r,B.W)
switch(a.b.a){case 0:p=Math.min(n-1,r)
o=Math.min(n,r)
break
case 1:p=Math.min(n,r)
o=Math.min(n+1,r)
break
default:o=null
p=null}return new A.bb(A.aw7(s,p,o).b,B.J)},
hw(a){var s,r,q,p,o,n=a.a
if(n>=0)s=n===0&&a.b===B.W
else s=!0
if(s)return B.d6
s=this.a
r=s.length
if(n>=r)return new A.bb(r,B.W)
switch(a.b.a){case 0:q=Math.min(n-1,r)
p=Math.min(n,r)
break
case 1:q=Math.min(n,r)
p=Math.min(n+1,r)
break
default:p=null
q=null}o=A.aw7(s,q,p)
return new A.bb(r-(o.a.length-o.c),B.W)}}
A.afW.prototype={
hv(a){return new A.bb(this.a.b.nq(a).a,B.J)},
hw(a){return new A.bb(this.a.b.nq(a).b,B.W)}}
A.a6m.prototype={
hv(a){return new A.bb(this.a.CN(a).a,B.J)},
hw(a){return new A.bb(this.a.CN(a).b,B.W)}}
A.a_U.prototype={
hv(a){return B.d6},
hw(a){return new A.bb(this.a.length,B.W)}}
A.afU.prototype={
hv(a){var s,r=a.a,q=this.a,p=q.length
if(r<=p)r=r===p&&a.b===B.J
else r=!0
if(r)a=new A.bb(p,B.W)
s=a.a
if(s<=0)return B.d6
if(a.b===B.J&&!A.af9(B.b.al(q,s)))return a
for(;--s,s>=0;)if(!A.af9(B.b.al(q,s)))return new A.bb(s+1,B.W)
return B.d6},
hw(a){var s,r=a.a,q=this.a,p=q.length
if(r>=p)return new A.bb(p,B.W)
if(r>=0)r=r===0&&a.b===B.W
else r=!0
if(r)a=B.d6
s=a.a
if(a.b===B.W&&!A.af9(B.b.al(q,s-1)))return a
for(;s<p;++s)if(!A.af9(B.b.al(q,s)))return new A.bb(s,B.J)
return new A.bb(p,B.W)}}
A.Qo.prototype={
hv(a){return this.a.hv(this.b.hv(a))},
hw(a){return this.a.hw(this.b.hw(a))}}
A.LV.prototype={
EY(a){if(this.a)switch(a.b.a){case 0:return new A.bb(a.a,B.J)
case 1:return new A.bb(a.a+1,B.W)}else switch(a.b.a){case 0:return new A.bb(a.a-1,B.J)
case 1:return new A.bb(a.a,B.W)}},
hv(a){return this.EY(a)},
hw(a){return this.EY(a)}}
A.Oc.prototype={
j(a){var s,r,q=this,p=", isDirectional: "
if(!q.glb())return"TextSelection.invalid"
s=""+q.c
r=""+q.f
return q.a===q.b?"TextSelection.collapsed(offset: "+s+", affinity: "+q.e.j(0)+p+r+")":"TextSelection(baseOffset: "+s+", extentOffset: "+q.d+p+r+")"},
l(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof A.Oc))return!1
if(!r.glb())return!b.glb()
if(b.c===r.c)if(b.d===r.d)s=(r.a!==r.b||b.e===r.e)&&b.f===r.f
else s=!1
else s=!1
return s},
gu(a){var s,r=this
if(!r.glb())return A.Y(-B.f.gu(1),-B.f.gu(1),A.ft(B.J),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)
s=r.a===r.b?A.ft(r.e):A.ft(B.J)
return A.Y(B.f.gu(r.c),B.f.gu(r.d),s,B.oS.gu(r.f),B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.N7.prototype={
I(){return"SelectionChangedCause."+this.b}}
A.Oa.prototype={
gUo(){var s=this.c
s===$&&A.b()
return s},
rm(a){return this.Z8(a)},
Z8(a){var s=0,r=A.a5(t.z),q,p=2,o,n=this,m,l,k,j,i
var $async$rm=A.Z(function(b,c){if(b===1){o=c
s=p}while(true)switch(s){case 0:p=4
s=7
return A.a8(n.xN(a),$async$rm)
case 7:k=c
q=k
s=1
break
p=2
s=6
break
case 4:p=3
i=o
m=A.ak(i)
l=A.az(i)
k=A.bw("during method call "+a.a)
A.e1(new A.bS(m,l,"services library",k,new A.af8(a),!1))
throw i
s=6
break
case 3:s=2
break
case 6:case 1:return A.a3(q,r)
case 2:return A.a2(o,r)}})
return A.a4($async$rm,r)},
xN(a){return this.Yp(a)},
Yp(a){var s=0,r=A.a5(t.z),q,p=this,o,n,m,l,k,j
var $async$xN=A.Z(function(b,c){if(b===1)return A.a2(c,r)
while(true)switch(s){case 0:j=a.a
if(j==="TextInputClient.focusElement"){p.f.i(0,J.b0(t.j.a(a.b),0))
s=1
break}else if(j==="TextInputClient.requestElementsInRect"){o=J.mD(t.j.a(a.b),t.Jy)
n=A.o(o).h("aC<a0.E,T>")
m=p.f
l=A.o(m).h("bh<1>")
k=l.h("e4<p.E,A<@>>")
q=A.aB(new A.e4(new A.aU(new A.bh(m,l),new A.af5(p,A.aB(new A.aC(o,new A.af6(),n),!0,n.h("bi.E"))),l.h("aU<p.E>")),new A.af7(p),k),!0,k.h("p.E"))
s=1
break}else if(j==="TextInputClient.scribbleInteractionBegan"){s=1
break}else if(j==="TextInputClient.scribbleInteractionFinished"){s=1
break}s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$xN,r)}}
A.af8.prototype={
$0(){var s=null
return A.a([A.ir("call",this.a,!0,B.b0,s,!1,s,s,B.aC,s,!1,!0,!0,B.bc,s,t.O5)],t.E)},
$S:12}
A.af6.prototype={
$1(a){return a},
$S:298}
A.af5.prototype={
$1(a){this.a.f.i(0,a)
return!1},
$S:36}
A.af7.prototype={
$1(a){var s=this.a.f.i(0,a),r=s.gzn(s)
s=[a]
B.c.L(s,[r.gi5(r),r.gCl(r),r.gby(r),r.gc0(r)])
return s},
$S:299}
A.zB.prototype={}
A.Se.prototype={}
A.W_.prototype={}
A.anN.prototype={
$1(a){this.a.scg(a)
return!1},
$S:52}
A.aY.prototype={}
A.bA.prototype={
h6(a){this.b=a},
iS(a,b){this.gut()
return!0},
gut(){return!0},
tv(a){return!0},
a25(a){var s=this.a
s.b=!0
s.a.push(a)
return null},
MR(a){return this.a.A(0,a)}}
A.mX.prototype={}
A.mO.prototype={
dA(a){return this.c.$1(a)}}
A.Xn.prototype={
LK(a,b,c){if(a instanceof A.mX)return a.mY(b,c)
else return a.dA(b)}}
A.jv.prototype={
T(){return new A.A_(A.bd(t.od),new A.C(),B.i)}}
A.Xp.prototype={
$1(a){var s=a.f
s.toString
t.KU.a(s)
return!1},
$S:53}
A.Xs.prototype={
$1(a){var s,r=this,q=a.f
q.toString
s=A.apX(t.KU.a(q),r.b,r.d)
if(s!=null){r.c.DL(a,null)
r.a.a=s
return!0}return!1},
$S:53}
A.Xq.prototype={
$1(a){var s,r=a.f
r.toString
s=A.apX(t.KU.a(r),this.b,this.c)
if(s!=null){this.a.a=s
return!0}return!1},
$S:53}
A.Xt.prototype={
$1(a){var s,r,q=this,p=a.f
p.toString
s=q.b
r=A.apX(t.KU.a(p),s,q.d)
p=r!=null
if(p&&r.iS(0,s))q.a.a=A.atF(a).LK(r,s,q.c)
return p},
$S:53}
A.A_.prototype={
a0(){this.ad()
this.IE()},
WM(a){this.a3(new A.ag2(this))},
IE(){var s,r,q,p,o=this,n=o.a.d
n=n.gb0(n)
s=A.lv(n,A.o(n).h("p.E"))
r=o.d.kU(s)
n=o.d
n.toString
q=s.kU(n)
for(n=r.gae(r),p=o.gGg();n.t();)n.gJ(n).MR(p)
for(n=q.gae(q);n.t();)n.gJ(n).a25(p)
o.d=s},
b4(a){this.bA(a)
this.IE()},
m(){var s,r,q,p,o=this
o.aj()
for(s=o.d,s=A.kt(s,s.r),r=o.gGg(),q=A.o(s).c;s.t();){p=s.d;(p==null?q.a(p):p).MR(r)}o.d=null},
H(a){var s=this.a
return new A.zZ(null,s.d,this.e,s.e,null)}}
A.ag2.prototype={
$0(){this.a.e=new A.C()},
$S:0}
A.zZ.prototype={
cj(a){var s
if(this.w===a.w)s=!A.apa(a.r,this.r)
else s=!0
return s}}
A.OI.prototype={
dA(a){a.a9Z()
return null}}
A.GI.prototype={
tv(a){return this.c},
dA(a){}}
A.p9.prototype={}
A.pm.prototype={}
A.iu.prototype={}
A.GG.prototype={}
A.nX.prototype={}
A.LT.prototype={
iS(a,b){var s,r,q,p,o,n=$.ar.an$.f.f
if(n==null||n.e==null)return!1
for(s=t.q,r=0;r<2;++r){q=B.Jj[r]
p=n.e
p.toString
o=A.apZ(p,q,s)
if(o!=null&&o.iS(0,q)){this.c=o
this.d=q
return!0}}return!1},
dA(a){var s,r=this.c
r===$&&A.b()
s=this.d
s===$&&A.b()
r.dA(s)}}
A.S8.prototype={
YP(a,b,c){var s
a.h6(this.gkQ())
s=A.o(this).h("mX<1>").b(a)?a.mY(b,c):a.dA(b)
a.h6(null)
return s},
mY(a,b){var s=this,r=A.apY(s.guD(),A.o(s).c)
return r==null?s.a6F(a,s.b,b):s.YP(r,a,b)},
dA(a){return this.mY(a,null)},
gut(){var s=this,r=A.apZ(s.guD(),null,A.o(s).c)
if(r!=null){r.h6(s.gkQ())
r.gut()
r.h6(null)}else s.gkQ().gut()
return!0},
iS(a,b){var s,r=this,q=A.apY(r.guD(),A.o(r).c),p=q==null
if(!p)q.h6(r.gkQ())
s=(p?r.gkQ():q).iS(0,b)
if(!p)q.h6(null)
return s},
tv(a){var s,r=this,q=A.apY(r.guD(),A.o(r).c),p=q==null
if(!p)q.h6(r.gkQ())
s=(p?r.gkQ():q).tv(a)
if(!p)q.h6(null)
return s}}
A.Bi.prototype={
a6F(a,b,c){var s=this.e
if(b==null)return s.dA(a)
else return s.dA(a)},
gkQ(){return this.e},
guD(){return this.f}}
A.OP.prototype={}
A.OO.prototype={}
A.Rc.prototype={}
A.CH.prototype={
h6(a){this.P1(a)
this.e.h6(a)}}
A.zW.prototype={
T(){return new A.Cp(B.i)}}
A.Cp.prototype={
gYC(){var s,r
$.ar.toString
s=$.b_()
if(s.gzN()!=="/"){$.ar.toString
s=s.gzN()}else{r=this.a.ax
$.ar.toString
s=s.gzN()
s=s}return s},
a0(){var s=this
s.ad()
s.a1B()
$.ar.toString
s.r=s.ys($.b_().a.f,s.a.fy)
$.ar.bc$.push(s)},
b4(a){this.bA(a)
this.IY(a)},
m(){B.c.A($.ar.bc$,this)
var s=this.d
if(s!=null)s.m()
this.aj()},
Fe(){var s=this.d
if(s!=null)s.m()
this.e=this.d=null},
IY(a){var s,r=this
r.a.toString
if(r.gJ6()){r.Fe()
if(r.f==null||r.a.c!=a.c){s=r.a.c
r.f=s==null?new A.lg(r,t.TX):s}}else{r.Fe()
r.f=null}},
a1B(){return this.IY(null)},
gJ6(){var s=this.a
if(s.Q==null){s=s.as
s=s==null?null:s.gbP(s)
s=s===!0||this.a.d!=null||!1}else s=!0
return s},
ZK(a){var s,r=this,q=a.a,p=q==="/"&&r.a.Q!=null?new A.amW(r):r.a.as.i(0,q)
if(p!=null)return r.a.f.$1$2(a,p,t.z)
s=r.a.d
if(s!=null)return s.$1(a)
return null},
ZY(a){return this.a.at.$1(a)},
jx(){var s=0,r=A.a5(t.y),q,p=this,o,n
var $async$jx=A.Z(function(a,b){if(a===1)return A.a2(b,r)
while(true)switch(s){case 0:p.a.toString
o=p.f
n=o==null?null:o.gbv()
if(n==null){q=!1
s=1
break}q=n.M7()
s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$jx,r)},
p6(a){return this.a4w(a)},
a4w(a){var s=0,r=A.a5(t.y),q,p=this,o,n
var $async$p6=A.Z(function(b,c){if(b===1)return A.a2(c,r)
while(true)switch(s){case 0:p.a.toString
o=p.f
n=o==null?null:o.gbv()
if(n==null){q=!1
s=1
break}o=n.yv(a,null,t.X)
o.toString
n.v5(o)
q=!0
s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$p6,r)},
ys(a,b){this.a.toString
return A.aL_(a,b)},
zS(a){var s=this,r=s.ys(a,s.a.fy)
if(!r.l(0,s.r))s.a3(new A.amZ(s,r))},
H(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g={}
g.a=null
s=i.a
s.toString
if(i.gJ6()){s=i.f
r=i.gYC()
q=i.a
p=q.e==null?A.aMt():new A.amX(i)
o=q.ay
o.toString
g.a=A.aux(!0,new A.xe(r,i.gZJ(),i.gZX(),o,"nav",p,!0,s),"Navigator Scope",h,h)
s=q}else{s=i.a
s.toString}g.b=null
n=new A.ho(new A.amY(g,i),h)
g.b=n
n=A.pD(n,h,B.cr,!0,s.cy,h,h,B.aQ)
g.b=n
s=$.aI3
if(s)m=new A.Ly(15,!1,!1,h)
else m=h
if(m!=null)g.b=A.c2(B.T,A.a([n,A.en(h,m,h,h,0,0,0,h)],t.D),B.A,B.O)
s=i.a
r=s.CW
s=s.db
s=A.b7(255,s.gq(s)>>>16&255,s.gq(s)>>>8&255,s.gq(s)&255)
g=g.b
q=i.a.dx
if(q!=null)l=i.ys(A.a([q],t.ss),i.a.fy)
else{q=i.r
q.toString
l=q}q=t.a9
p=A.a([],q)
B.c.L(p,i.a.dy)
p.push(B.FC)
q=A.a(p.slice(0),q)
k=new A.wy(l,q,new A.Ok(r,s,g,h),h)
A.dM(a)
g=i.a
j=new A.AZ(k,h)
k=j
g=g.p3
s=A.aI2()
r=A.qi($.aAe(),t.n,t.od)
q=t.ot
p=t.wS
r.k(0,B.Dk,new A.Bi(new A.qY(new A.bx(A.a([],q),p)),a,!1,!1,!1,!1,new A.bx(A.a([],q),p),t.x5.h("Bi<bA.T>")))
return new A.yf(new A.yK(A.arj(new A.Gx(A.Xo(r,A.auz(new A.O4(new A.yL(k,h),h),new A.xW(A.x(t.l5,t.UJ)))),h),"<Default WidgetsApp Shortcuts>",s),h),g,h)}}
A.amW.prototype={
$1(a){var s=this.a.a.Q
s.toString
return s},
$S:14}
A.amZ.prototype={
$0(){this.a.r=this.b},
$S:0}
A.amX.prototype={
$2(a,b){return this.a.a.e.$1(b)},
$S:149}
A.amY.prototype={
$1(a){return this.b.a.ch.$2(a,this.a.a)},
$S:14}
A.WE.prototype={}
A.pt.prototype={
I(){return"ConnectionState."+this.b}}
A.fE.prototype={
j(a){var s=this
return"AsyncSnapshot("+s.a.j(0)+", "+A.i(s.b)+", "+A.i(s.c)+", "+A.i(s.d)+")"},
l(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return s.$ti.b(b)&&b.a===s.a&&J.h(b.b,s.b)&&J.h(b.c,s.c)&&b.d==s.d},
gu(a){return A.Y(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.pT.prototype={
T(){return new A.Ax(B.i,this.$ti.h("Ax<1>"))}}
A.Ax.prototype={
a0(){var s=this
s.ad()
s.a.toString
s.e=new A.fE(B.oj,null,null,null,s.$ti.h("fE<1>"))
s.Ik()},
b4(a){var s,r=this
r.bA(a)
if(a.c!=r.a.c){if(r.d!=null){r.d=null
s=r.e
s===$&&A.b()
r.e=new A.fE(B.oj,s.b,s.c,s.d,s.$ti)}r.Ik()}},
H(a){var s,r=this.a
r.toString
s=this.e
s===$&&A.b()
return r.d.$2(a,s)},
m(){this.d=null
this.aj()},
Ik(){var s,r=this,q=r.a.c
if(q!=null){s=r.d=new A.C()
q.ea(new A.ahH(r,s),new A.ahI(r,s),t.H)
q=r.e
q===$&&A.b()
if(q.a!==B.bI)r.e=new A.fE(B.GO,q.b,q.c,q.d,q.$ti)}}}
A.ahH.prototype={
$1(a){var s=this.a
if(s.d===this.b)s.a3(new A.ahG(s,a))},
$S(){return this.a.$ti.h("at(1)")}}
A.ahG.prototype={
$0(){var s=this.a
s.e=new A.fE(B.bI,this.b,null,null,s.$ti.h("fE<1>"))},
$S:0}
A.ahI.prototype={
$2(a,b){var s=this.a
if(s.d===this.b)s.a3(new A.ahF(s,a,b))},
$S:31}
A.ahF.prototype={
$0(){var s=this.a
s.e=new A.fE(B.bI,null,this.b,this.c,s.$ti.h("fE<1>"))},
$S:0}
A.pg.prototype={
T(){return new A.A5(B.i)}}
A.A5.prototype={
a0(){this.ad()
this.IJ()},
b4(a){this.bA(a)
this.IJ()},
IJ(){this.e=new A.d0(this.gTF(),this.a.c,null,t.Jc)},
m(){var s,r,q=this.d
if(q!=null)for(q=A.jQ(q,q.r);q.t();){s=q.d
r=this.d.i(0,s)
r.toString
s.G(0,r)}this.aj()},
TG(a){var s,r=this,q=a.a,p=r.d
if(p==null)p=r.d=A.x(t.I_,t.O)
p.k(0,q,r.UW(q))
p=r.d.i(0,q)
p.toString
q.Z(0,p)
if(!r.f){r.f=!0
s=r.G0()
if(s!=null)r.IU(s)
else $.bN.cy$.push(new A.agq(r))}return!1},
G0(){var s={},r=this.c
r.toString
s.a=null
r.b1(new A.agv(s))
return t.xO.a(s.a)},
IU(a){var s,r
this.c.toString
s=this.f
r=this.e
r===$&&A.b()
a.ER(t.Fw.a(A.aEO(r,s)))},
UW(a){return new A.agu(this,a)},
H(a){var s=this.f,r=this.e
r===$&&A.b()
return new A.wh(s,r,null)}}
A.agq.prototype={
$1(a){var s,r=this.a
if(r.c==null)return
s=r.G0()
s.toString
r.IU(s)},
$S:2}
A.agv.prototype={
$1(a){this.a.a=a},
$S:9}
A.agu.prototype={
$0(){var s=this.a
s.d.A(0,this.b)
if(s.d.a===0)if($.bN.dy$.a<3)s.a3(new A.ags(s))
else{s.f=!1
A.ed(new A.agt(s))}},
$S:0}
A.ags.prototype={
$0(){this.a.f=!1},
$S:0}
A.agt.prototype={
$0(){var s=this.a
if(s.c!=null&&s.d.a===0)s.a3(new A.agr(s))},
$S:0}
A.agr.prototype={
$0(){},
$S:0}
A.qc.prototype={}
A.Iw.prototype={}
A.kW.prototype={
lU(){var s=new A.Iw($.bR())
this.e1$=s
this.c.dq(new A.qc(s))},
ql(){var s,r=this
if(r.gnm()){if(r.e1$==null)r.lU()}else{s=r.e1$
if(s!=null){s.aI()
s.dH()
r.e1$=null}}},
H(a){if(this.gnm()&&this.e1$==null)this.lU()
return B.a3k}}
A.RZ.prototype={
H(a){throw A.c(A.HH("Widgets that mix AutomaticKeepAliveClientMixin into their State must call super.build() but must ignore the return value of the superclass."))}}
A.Vs.prototype={
Dc(a,b){},
n5(a){A.awX(this,new A.amH(this,a))}}
A.amH.prototype={
$1(a){var s=a.z
if(s!=null&&s.C(0,this.a))a.bf()},
$S:9}
A.amG.prototype={
$1(a){A.awX(a,this.a)},
$S:9}
A.Vt.prototype={
c_(a){var s=A.hB(t.h,t.X)
return new A.Vs(s,this,B.ab)}}
A.eP.prototype={
cj(a){return this.w!==a.w}}
A.qs.prototype={
aH(a){var s=this.e
s=new A.Mr(B.d.b5(A.WU(s,0,1)*255),s,!1,null,A.ay())
s.aK()
s.saQ(null)
return s},
aN(a,b){b.sn9(0,this.e)
b.stf(!1)}}
A.uT.prototype={
aH(a){var s=new A.Mf(this.e,this.f,this.r,!1,!1,null,A.ay())
s.aK()
s.saQ(null)
return s},
aN(a,b){b.suY(this.e)
b.sL5(this.f)
b.sv3(this.r)
b.cA=b.bD=!1},
p8(a){a.suY(null)
a.sL5(null)}}
A.pq.prototype={
aH(a){var s=new A.Mb(null,this.f,null,A.ay())
s.aK()
s.saQ(null)
return s},
aN(a,b){b.soJ(null)
b.smq(this.f)},
p8(a){a.soJ(null)}}
A.En.prototype={
aH(a){var s=new A.Ma(this.e,this.f,null,A.ay())
s.aK()
s.saQ(null)
return s},
aN(a,b){b.soJ(this.e)
b.smq(this.f)},
p8(a){a.soJ(null)}}
A.LE.prototype={
aH(a){var s=this,r=new A.Mu(s.e,s.r,s.w,s.y,s.x,null,s.f,null,A.ay())
r.aK()
r.saQ(null)
return r},
aN(a,b){var s=this
b.sdF(0,s.e)
b.smq(s.f)
b.sa2D(0,s.r)
b.siH(0,s.w)
b.saq(0,s.x)
b.shx(0,s.y)}}
A.LF.prototype={
aH(a){var s=this,r=new A.Mv(s.r,s.x,s.w,s.e,s.f,null,A.ay())
r.aK()
r.saQ(null)
return r},
aN(a,b){var s=this
b.soJ(s.e)
b.smq(s.f)
b.siH(0,s.r)
b.saq(0,s.w)
b.shx(0,s.x)}}
A.m3.prototype={
aH(a){var s=this,r=A.dI(a),q=new A.ME(s.w,null,A.ay())
q.aK()
q.saQ(null)
q.sbF(0,s.e)
q.see(s.r)
q.sbJ(r)
q.smO(s.x)
q.sMr(0,s.f)
return q},
aN(a,b){var s=this
b.sbF(0,s.e)
b.sMr(0,s.f)
b.see(s.r)
b.sbJ(A.dI(a))
b.bD=s.w
b.smO(s.x)}}
A.HA.prototype={
aH(a){var s=new A.y1(this.e,this.f,A.dI(a),B.h,null,A.ay())
s.aK()
s.saQ(null)
return s},
aN(a,b){b.sAp(this.e)
b.see(this.f)
b.sbJ(A.dI(a))
if(B.h!==b.el){b.el=B.h
b.az()
b.b3()}}}
A.HR.prototype={
aH(a){var s=new A.Mk(this.e,this.f,null,A.ay())
s.aK()
s.saQ(null)
return s},
aN(a,b){b.sa9k(this.e)
b.R=this.f}}
A.hO.prototype={
aH(a){var s=new A.Ms(this.e,A.dI(a),null,A.ay())
s.aK()
s.saQ(null)
return s},
aN(a,b){b.sde(0,this.e)
b.sbJ(A.dI(a))}}
A.eK.prototype={
aH(a){var s=new A.Mx(this.f,this.r,this.e,A.dI(a),null,A.ay())
s.aK()
s.saQ(null)
return s},
aN(a,b){b.see(this.e)
b.sa9B(this.f)
b.sa64(this.r)
b.sbJ(A.dI(a))}}
A.fH.prototype={}
A.uV.prototype={
aH(a){var s=new A.Mg(this.e,null,A.ay())
s.aK()
s.saQ(null)
return s},
aN(a,b){b.szP(this.e)}}
A.wm.prototype={
oz(a){var s,r,q=a.e
q.toString
t.Wz.a(q)
s=this.f
if(q.e!==s){q.e=s
r=a.c
if(r instanceof A.z)r.a7()}}}
A.uS.prototype={
aH(a){var s=new A.Me(this.e,0,null,null,A.ay())
s.aK()
s.L(0,null)
return s},
aN(a,b){b.szP(this.e)}}
A.k9.prototype={
aH(a){return A.avH(A.pj(this.f,this.e))},
aN(a,b){b.sJs(A.pj(this.f,this.e))},
cd(){var s,r=this,q=r.e
if(q===1/0&&r.f===1/0)s="SizedBox.expand"
else s=q===0&&r.f===0?"SizedBox.shrink":"SizedBox"
q=r.a
return q==null?s:s+"-"+q.j(0)}}
A.hp.prototype={
aH(a){return A.avH(this.e)},
aN(a,b){b.sJs(this.e)}}
A.IG.prototype={
aH(a){var s=new A.Mn(this.e,this.f,null,A.ay())
s.aK()
s.saQ(null)
return s},
aN(a,b){b.sa7j(0,this.e)
b.sa7g(0,this.f)}}
A.xm.prototype={
aH(a){var s=new A.Mq(this.e,null,A.ay())
s.aK()
s.saQ(null)
return s},
aN(a,b){b.suL(this.e)},
c_(a){return new A.S5(this,B.ab)}}
A.S5.prototype={}
A.u7.prototype={
aH(a){var s=new A.M8(this.e,null,A.ay())
s.aK()
s.saQ(null)
return s},
aN(a,b){b.sa2w(0,this.e)}}
A.j1.prototype={
aH(a){var s=A.dI(a)
s=new A.y7(this.e,s,this.r,this.w,A.ay(),0,null,null,A.ay())
s.aK()
s.L(0,null)
return s},
aN(a,b){var s
b.see(this.e)
s=A.dI(a)
b.sbJ(s)
s=this.r
if(b.b9!==s){b.b9=s
b.a7()}s=this.w
if(s!==b.bh){b.bh=s
b.az()
b.b3()}}}
A.k_.prototype={
oz(a){var s,r,q,p=this,o=a.e
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
if(q instanceof A.z)q.a7()}}}
A.LO.prototype={
H(a){var s,r,q,p=this,o=null,n=a.a4(t.I)
n.toString
s=p.c
r=p.e
switch(n.w.a){case 0:break
case 1:q=s
s=r
r=q
break
default:s=o
r=s}return A.en(p.f,p.x,o,o,r,s,p.d,p.r)}}
A.vD.prototype={
gZv(){switch(this.e.a){case 0:return!0
case 1:var s=this.w
return s===B.aJ||s===B.GP}},
vA(a){var s=this.x
s=this.gZv()?A.dI(a):null
return s},
aH(a){var s=this
return A.aGG(B.h,s.w,s.e,s.f,s.r,s.z,s.vA(a),s.y)},
aN(a,b){var s=this,r=s.e
if(b.M!==r){b.M=r
b.a7()}r=s.f
if(b.am!==r){b.am=r
b.a7()}r=s.r
if(b.ah!==r){b.ah=r
b.a7()}r=s.w
if(b.aF!==r){b.aF=r
b.a7()}r=s.vA(a)
if(b.b9!=r){b.b9=r
b.a7()}r=s.y
if(b.bh!==r){b.bh=r
b.a7()}if(B.h!==b.cY){b.cY=B.h
b.az()
b.b3()}}}
A.MM.prototype={}
A.l2.prototype={}
A.pR.prototype={
oz(a){var s,r,q,p=a.e
p.toString
t.US.a(p)
s=this.f
if(p.e!==s){p.e=s
r=!0}else r=!1
s=this.r
if(p.f!==s){p.f=s
r=!0}if(r){q=a.c
if(q instanceof A.z)q.a7()}}}
A.vu.prototype={}
A.MG.prototype={
aH(a){var s,r,q,p=this,o=null,n=p.e,m=p.r
if(m==null){m=a.a4(t.I)
m.toString
m=m.w}s=p.x
r=A.aqS(a)
q=s===B.b6?"\u2026":o
s=new A.y3(A.Ob(q,r,p.z,p.as,n,p.f,m,p.ax,p.y,p.at),p.w,s,p.ch,0,o,o,A.ay())
s.aK()
s.L(0,o)
s.xg(n)
s.sq9(p.ay)
return s},
aN(a,b){var s,r=this
b.scF(0,r.e)
b.sCb(0,r.f)
s=r.r
if(s==null){s=a.a4(t.I)
s.toString
s=s.w}b.sbJ(s)
b.sOR(r.w)
b.sa7O(0,r.x)
b.sCc(r.y)
b.sB6(r.z)
b.sP_(r.as)
b.sCd(r.at)
b.sNd(r.ax)
s=A.aqS(a)
b.sB1(0,s)
b.sq9(r.ay)
b.sOp(r.ch)}}
A.aag.prototype={
$1(a){return!0},
$S:49}
A.M_.prototype={
aH(a){var s,r,q=this,p=q.d
p=p==null?null:p.d7(0)
s=q.ch
if(s||!1){r=a.a4(t.I)
r.toString
r=r.w}else r=null
r=new A.Ml(p,q.e,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at,q.ax,q.ay,q.CW,s,r,!1,A.ay())
r.aK()
r.a1r()
return r},
aN(a,b){var s=this,r=s.d
b.sfL(0,r==null?null:r.d7(0))
b.aF=s.e
b.sby(0,s.f)
b.sc0(0,s.r)
b.sOg(0,s.w)
b.saq(0,s.x)
b.sn9(0,s.y)
b.sa3d(s.Q)
b.sAp(s.as)
b.see(s.at)
b.sa8D(0,s.ax)
b.sa2R(s.ay)
r=s.ch
b.sa7e(r)
if(r||!1){r=a.a4(t.I)
r.toString
r=r.w}else r=null
b.sbJ(r)
b.sAM(s.CW)
b.sAO(!1)
b.smO(s.z)},
p8(a){a.sfL(0,null)}}
A.IH.prototype={
aH(a){var s=this,r=null,q=new A.Mw(s.e,r,s.r,r,s.x,s.y,r,r,s.as,s.at,r,A.ay())
q.aK()
q.saQ(r)
return q},
aN(a,b){var s=this
b.a8=s.e
b.bB=null
b.aP=s.r
b.a9=null
b.cp=s.x
b.cK=s.y
b.pq=b.ei=null
b.mD=s.as
b.v=s.at}}
A.KI.prototype={
aH(a){var s=this,r=new A.Mp(!0,s.e,s.f,s.r,s.w,B.aL,null,A.ay())
r.aK()
r.saQ(null)
return r},
aN(a,b){var s,r=this
b.bB=r.e
b.aP=r.f
b.a9=r.r
s=r.w
if(!b.cp.l(0,s)){b.cp=s
b.az()}if(b.v!==B.aL){b.v=B.aL
b.az()}}}
A.hS.prototype={
aH(a){var s=new A.My(null,A.ay())
s.aK()
s.saQ(null)
return s}}
A.fk.prototype={
aH(a){var s=new A.y2(this.e,this.f,null,A.ay())
s.aK()
s.saQ(null)
return s},
aN(a,b){b.sLt(this.e)
b.sAH(this.f)}}
A.DG.prototype={
aH(a){var s=new A.xY(!1,null,null,A.ay())
s.aK()
s.saQ(null)
return s},
aN(a,b){b.sJh(!1)
b.sAH(null)}}
A.yF.prototype={
aH(a){var s=this,r=new A.y6(s.e,s.f,s.r,!1,s.Gc(a),null,A.ay())
r.aK()
r.saQ(null)
r.IG(r.v)
return r},
Gc(a){var s,r=this.e,q=r.p4
if(q!=null)return q
if(r.fx==null){if(r.go==null)r=r.p2!=null
else r=!0
s=r}else s=!0
if(!s)return null
return A.dI(a)},
aN(a,b){var s=this
b.sa3r(s.f)
b.sa4U(s.r)
b.sa4R(!1)
b.sMC(s.e)
b.sbJ(s.Gc(a))}}
A.KC.prototype={
aH(a){var s=new A.Mo(null,A.ay())
s.aK()
s.saQ(null)
return s}}
A.E3.prototype={
aH(a){var s=new A.M9(!0,null,A.ay())
s.aK()
s.saQ(null)
return s},
aN(a,b){b.sa2C(!0)}}
A.vr.prototype={
aH(a){var s=new A.Mj(this.e,null,A.ay())
s.aK()
s.saQ(null)
return s},
aN(a,b){b.sa4S(this.e)}}
A.w3.prototype={
aH(a){var s=new A.Mm(this.e,null,A.ay())
s.aK()
s.saQ(null)
return s},
aN(a,b){b.sa6o(0,this.e)}}
A.jO.prototype={
H(a){return this.c}}
A.ho.prototype={
H(a){return this.c.$1(a)}}
A.uE.prototype={
aH(a){var s=new A.Bm(this.e,B.aL,null,A.ay())
s.aK()
s.saQ(null)
return s},
aN(a,b){t.ri.a(b).saq(0,this.e)}}
A.Bm.prototype={
saq(a,b){if(b.l(0,this.a8))return
this.a8=b
this.az()},
aG(a,b){var s,r,q,p,o,n,m=this
if(m.k3.Oe(0,B.S)){s=a.gbS(a)
r=m.k3
q=b.a
p=b.b
o=r.a
r=r.b
n=$.au().ba()
n.saq(0,m.a8)
s.cz(new A.E(q,p,q+o,p+r),n)}s=m.B$
if(s!=null)a.eP(s,b)}}
A.an0.prototype={
$0(){var s,r,q=this,p=q.b
if(p==null||t.c.b(q.c)){p=q.a.y1$
p===$&&A.b()
p=p.e
p.toString
s=q.c
s=s.gbL(s)
r=A.aCr()
p.c5(r,s)
p=r}return p},
$S:308}
A.an1.prototype={
$1(a){var s=a==null?t.K.a(a):a
return this.a.jO(s)},
$S:309}
A.dB.prototype={
jx(){return A.bT(!1,t.y)},
p6(a){return A.bT(!1,t.y)},
a4x(a){var s=a.a
s.toString
return this.p6(s)},
tG(){},
Kl(){},
Kk(){},
zS(a){},
Kj(a){}}
A.zX.prototype={
a2b(a){return this.bc$.push(a)},
a5v(){this.a4C($.b_().a.f)},
a4C(a){var s,r,q
for(s=this.bc$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].zS(a)},
uf(){var s=0,r=A.a5(t.H),q,p=this,o,n,m
var $async$uf=A.Z(function(a,b){if(a===1)return A.a2(b,r)
while(true)switch(s){case 0:o=A.aB(p.bc$,!0,t.X5),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.a8(o[m].jx(),$async$uf)
case 6:if(b){s=1
break}case 4:++m
s=3
break
case 5:A.aeB()
case 1:return A.a3(q,r)}})
return A.a4($async$uf,r)},
ug(a){return this.a5I(a)},
a5I(a){var s=0,r=A.a5(t.H),q,p=this,o,n,m
var $async$ug=A.Z(function(b,c){if(b===1)return A.a2(c,r)
while(true)switch(s){case 0:o=A.aB(p.bc$,!0,t.X5),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}s=6
return A.a8(o[m].p6(a),$async$ug)
case 6:if(c){s=1
break}case 4:++m
s=3
break
case 5:case 1:return A.a3(q,r)}})
return A.a4($async$ug,r)},
re(a){return this.XZ(a)},
XZ(a){var s=0,r=A.a5(t.H),q,p=this,o,n,m,l
var $async$re=A.Z(function(b,c){if(b===1)return A.a2(c,r)
while(true)switch(s){case 0:o=A.aB(p.bc$,!0,t.X5),n=o.length,m=J.aQ(a),l=0
case 3:if(!(l<n)){s=5
break}s=6
return A.a8(o[l].a4x(new A.qU(A.bX(m.i(a,"location")),m.i(a,"state"))),$async$re)
case 6:if(c){s=1
break}case 4:++l
s=3
break
case 5:case 1:return A.a3(q,r)}})
return A.a4($async$re,r)},
XD(a){switch(a.a){case"popRoute":return this.uf()
case"pushRoute":return this.ug(A.bX(a.b))
case"pushRouteInformation":return this.re(t.G.a(a.b))}return A.bT(null,t.z)},
WZ(){this.tX()},
Oh(a){A.c6(B.w,new A.afV(this,a))},
$ias:1,
$idT:1}
A.an_.prototype={
$1(a){var s,r,q=$.bN
q.toString
s=this.a
r=s.a
r.toString
q.MW(r)
s.a=null
this.b.ff$.eG(0)},
$S:109}
A.afV.prototype={
$0(){var s,r,q=this.a,p=q.dc$
q.cZ$=!0
s=q.y1$
s===$&&A.b()
s=s.e
s.toString
r=q.an$
r.toString
q.dc$=new A.nZ(this.b,s,"[root]",new A.lg(s,t.bT),t.Cg).a2x(r,t.NT.a(p))
if(p==null)$.bN.tX()},
$S:0}
A.nZ.prototype={
c_(a){return new A.lR(this,B.ab,this.$ti.h("lR<1>"))},
aH(a){return this.d},
aN(a,b){},
a2x(a,b){var s,r={}
r.a=b
if(b==null){a.M3(new A.a9F(r,this,a))
s=r.a
s.toString
a.oE(s,new A.a9G(r))}else{b.av=this
b.eN()}r=r.a
r.toString
return r},
cd(){return this.e}}
A.a9F.prototype={
$0(){var s=this.b,r=A.aGH(s,s.$ti.c)
this.a.a=r
r.r=this.c},
$S:0}
A.a9G.prototype={
$0(){var s=this.a.a
s.toString
s.Ec(null,null)
s.rC()},
$S:0}
A.lR.prototype={
b1(a){var s=this.ak
if(s!=null)a.$1(s)},
iN(a){this.ak=null
this.kl(a)},
fo(a,b){this.Ec(a,b)
this.rC()},
bo(a,b){this.lK(0,b)
this.rC()},
hp(){var s=this,r=s.av
if(r!=null){s.av=null
s.lK(0,s.$ti.h("nZ<1>").a(r))
s.rC()}s.wg()},
rC(){var s,r,q,p,o,n,m,l=this
try{o=l.ak
n=l.f
n.toString
l.ak=l.dD(o,l.$ti.h("nZ<1>").a(n).c,B.ny)}catch(m){s=A.ak(m)
r=A.az(m)
o=A.bw("attaching to the render tree")
q=new A.bS(s,r,"widgets library",o,null,!1)
A.e1(q)
p=A.vp(q)
l.ak=l.dD(null,p,B.ny)}},
ga6(){return this.$ti.h("aN<1>").a(A.br.prototype.ga6.call(this))},
iR(a,b){var s=this.$ti
s.h("aN<1>").a(A.br.prototype.ga6.call(this)).saQ(s.c.a(a))},
iV(a,b,c){},
j2(a,b){this.$ti.h("aN<1>").a(A.br.prototype.ga6.call(this)).saQ(null)}}
A.OK.prototype={$ias:1}
A.Cq.prototype={
fj(){this.P6()
$.eQ=this
var s=$.b_()
s.Q=this.gXK()
s.as=$.af},
Co(){this.P9()
this.xk()}}
A.Cr.prototype={
fj(){this.Sl()
$.bN=this},
iQ(){this.P7()}}
A.Cs.prototype={
fj(){var s,r,q,p,o=this
o.Sn()
$.hV=o
o.am$!==$&&A.eI()
o.am$=B.Fr
s=new A.yc(A.bd(t.z4),$.bR())
B.jf.nv(s.gZl())
o.ah$=s
s=t.v3
r=new A.a4p(A.x(s,t.bd),A.bd(t.SQ),A.a([],t.sA))
o.hi$!==$&&A.eI()
o.hi$=r
q=$.apK()
p=A.a([],t.K0)
o.M$!==$&&A.eI()
s=o.M$=new A.Ix(r,q,p,A.bd(s))
p=$.b_()
p.at=s.ga5r()
p.ax=$.af
B.DX.vS(s.ga5K())
s=$.auY
if(s==null)s=$.auY=A.a([],t.iL)
s.push(o.gTK())
B.DZ.vS(new A.an1(o))
B.DY.vS(o.gXz())
B.cj.nv(o.gXI())
$.azW()
o.a8f()},
iQ(){this.So()}}
A.Ct.prototype={
fj(){this.Sp()
$.fs=this
var s=t.K
this.hh$=new A.a5g(A.x(s,t.Sc),A.x(s,t.B6),A.x(s,t.pt))},
pB(){this.Re()
var s=this.hh$
s===$&&A.b()
s.Y(0)},
jO(a){return this.a5Q(a)},
a5Q(a){var s=0,r=A.a5(t.H),q,p=this
var $async$jO=A.Z(function(b,c){if(b===1)return A.a2(c,r)
while(true)switch(s){case 0:s=3
return A.a8(p.Rf(a),$async$jO)
case 3:switch(A.bX(J.b0(t.a.a(a),"type"))){case"fontsChange":p.Ah$.aI()
break}s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$jO,r)}}
A.Cu.prototype={
fj(){this.Ss()
$.abv=this
this.Ae$=$.b_().a.a}}
A.Cv.prototype={
fj(){var s,r,q,p,o=this
o.St()
$.lS=o
s=t.TT
o.y1$=new A.LH(o.ga4M(),o.gYd(),o.gYh(),o.gYf(),A.a([],s),A.a([],s),A.a([],s),A.bd(t.F))
s=$.b_()
s.f=o.ga5x()
r=s.r=$.af
s.fy=o.ga5Z()
s.go=r
s.k2=o.ga5D()
s.k3=r
s.p1=o.gYb()
s.p2=r
s.p3=o.gY9()
s.p4=r
r=new A.y8(B.S,o.Kb(),$.cH(),null,A.ay())
r.aK()
r.saQ(null)
q=o.y1$
q===$&&A.b()
q.sa8U(r)
r=o.y1$.e
r.Q=r
q=t.W
q.a(A.M.prototype.gbI.call(r)).r.push(r)
p=r.IT()
r.ch.saX(0,p)
q.a(A.M.prototype.gbI.call(r)).z.push(r)
o.OH(s.a.c)
o.cx$.push(o.gXG())
s=o.xr$
if(s!=null)s.m()
s=t.S
r=$.bR()
o.xr$=new A.KJ(new A.a7n(B.ms,A.x(s,t.ZA)),A.x(s,t.xg),r)
o.cy$.push(o.gYu())},
iQ(){this.Sq()},
A0(a,b,c){this.xr$.a9v(b,new A.an0(this,c,b))
this.Px(0,b,c)},
iZ(){var s=0,r=A.a5(t.H),q=[],p=this,o
var $async$iZ=A.Z(function(a,b){if(a===1)return A.a2(b,r)
while(true)switch(s){case 0:s=2
return A.a8(p.P8(),$async$iZ)
case 2:o=$.atK
if((o==null?null:o.a)==null)try{o=p.y1$
o===$&&A.b()
o.e.eQ()}finally{}p.vJ()
s=3
return A.a8(p.gKH(),$async$iZ)
case 3:return A.a3(null,r)}})
return A.a4($async$iZ,r)}}
A.Cw.prototype={
iQ(){this.Sv()},
Aw(){var s,r,q
this.QK()
for(s=this.bc$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].tG()},
AC(){var s,r,q
this.QM()
for(s=this.bc$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].Kl()},
Ay(){var s,r,q
this.QL()
for(s=this.bc$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].Kk()},
ud(a){var s,r,q
this.R0(a)
for(s=this.bc$,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].Kj(a)},
pB(){var s,r
this.Sr()
for(s=this.bc$.length,r=0;r<s;++r);},
A6(){var s,r,q=this,p={}
p.a=null
if(q.bH$){s=new A.an_(p,q)
p.a=s
$.bN.a2l(s)}try{r=q.dc$
if(r!=null)q.an$.a2H(r)
q.QJ()
q.an$.a5_()}finally{}r=q.bH$=!1
p=p.a
if(p!=null)r=!(q.bg$||q.bC$===0)
if(r){q.bH$=!0
r=$.bN
r.toString
p.toString
r.MW(p)}},
iZ(){var s=this.dc$
if(s!=null)this.an$.a8k(s,$.atK)
return this.Sw()}}
A.mY.prototype={
aH(a){var s=new A.Mh(this.e,this.f,A.asv(a,null),null,A.ay())
s.aK()
s.saQ(null)
return s},
aN(a,b){b.sa4h(this.e)
b.szv(A.asv(a,null))
b.sbL(0,this.f)}}
A.pv.prototype={
ga__(){var s,r=this.r
if(r==null||r.gde(r)==null)return this.e
s=r.gde(r)
r=this.e
if(r==null)return s
s.toString
return r.D(0,s)},
H(a){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){s=o.x
if(s!=null)s=!(s.a>=s.b&&s.c>=s.d)
else s=!0}else s=!1
if(s)m=A.aEV(new A.hp(B.n_,n,n),0,0)
else{s=o.d
if(s!=null)m=new A.eK(s,n,n,m,n)}r=o.ga__()
if(r!=null)m=new A.hO(r,m,n)
s=o.f
if(s!=null)m=new A.uE(s,m,n)
s=o.as
if(s!==B.h){q=A.dI(a)
p=o.r
p.toString
m=A.aq8(m,s,new A.PX(q==null?B.y:q,p))}s=o.r
if(s!=null)m=A.eh(m,s,B.a8)
s=o.x
if(s!=null)m=new A.hp(s,m,n)
s=o.y
if(s!=null)m=new A.hO(s,m,n)
m.toString
return m}}
A.PX.prototype={
vw(a){return this.c.vx(new A.E(0,0,0+a.a,0+a.b),this.b)},
vW(a){return!a.c.l(0,this.c)||a.b!==this.b}}
A.pB.prototype={
cj(a){return!J.h(this.w,a.w)||!J.h(this.x,a.x)}}
A.S_.prototype={
H(a){throw A.c(A.HH("A DefaultSelectionStyle constructed with DefaultSelectionStyle.fallback cannot be incorporated into the widget tree, it is meant only to provide a fallback value returned by DefaultSelectionStyle.of() when no enclosing default selection style is present in a BuildContext."))}}
A.Gx.prototype={
Wi(){var s=$.azz()
return s},
H(a){var s=this.c,r=this.Wi()
if(r!=null)s=A.arj(s,"<Web Disabling Text Editing Shortcuts>",r)
return A.arj(s,"<Default Text Editing Shortcuts>",A.aDf())}}
A.GH.prototype={
gaE(a){var s=this.a
if(s==null)return null
s=s.c
s.toString
return s}}
A.pG.prototype={
T(){return new A.Aj(A.xP(null),A.xP(null),B.i)},
a5g(a,b,c){return this.d.$3(a,b,c)},
a8R(a,b,c){return this.e.$3(a,b,c)}}
A.Aj.prototype={
a0(){var s,r=this
r.ad()
s=r.a.c
r.d=s.gb6(s)
r.a.c.cU(r.gwu())
r.FM()},
EN(a){var s,r=this,q=r.d
q===$&&A.b()
s=r.Ug(a,q)
r.d=s
if(q!==s)r.FM()},
b4(a){var s,r,q=this
q.bA(a)
s=a.c
if(s!==q.a.c){r=q.gwu()
s.cc(r)
q.a.c.cU(r)
r=q.a.c
q.EN(r.gb6(r))}},
Ug(a,b){switch(a.a){case 0:case 3:return a
case 1:switch(b.a){case 0:case 3:case 1:return a
case 2:return b}break
case 2:switch(b.a){case 0:case 3:case 2:return a
case 1:return b}break}},
FM(){var s=this,r=s.d
r===$&&A.b()
switch(r.a){case 0:case 1:s.e.saT(0,s.a.c)
s.f.saT(0,B.c1)
break
case 2:case 3:s.e.saT(0,B.de)
s.f.saT(0,new A.fv(s.a.c,new A.bx(A.a([],t.A),t.R),0))
break}},
m(){this.a.c.cc(this.gwu())
this.aj()},
H(a){var s=this.a
return s.a5g(a,this.e,s.a8R(a,this.f,s.f))}}
A.jN.prototype={
I(){return"KeyEventResult."+this.b}}
A.P9.prototype={}
A.a2W.prototype={
au(a){var s,r=this.a
if(r.ax===this){if(!r.gjQ()){s=r.w
s=s!=null&&s.w===r}else s=!0
if(s)r.Cn(B.Dm)
s=r.w
if(s!=null){if(s.f===r)s.f=null
s.r.A(0,r)}s=r.Q
if(s!=null)s.a_N(0,r)
r.ax=null}},
C5(a){var s,r=this.a
if(r.ax===this){s=r.e
s.toString
a=A.aEc(s,!0);(a==null?r.e.r.f.e:a).ym(r)}},
MX(){return this.C5(null)}}
A.zR.prototype={
I(){return"UnfocusDisposition."+this.b}}
A.cY.prototype={
gez(){var s,r,q
if(this.a)return!0
for(s=this.gh8(),r=s.length,q=0;q<r;++q)s[q].toString
return!1},
sez(a){var s,r=this
if(a!==r.a){r.a=a
s=r.w
if(s!=null){s.rp()
s.r.D(0,r)}}},
gcD(){var s,r,q,p
if(!this.b)return!1
s=this.ge0()
if(s!=null&&!s.gcD())return!1
for(r=this.gh8(),q=r.length,p=0;p<q;++p)r[p].toString
return!0},
scD(a){var s,r=this
if(a!==r.b){r.b=a
if(r.gjP()&&!a)r.Cn(B.Dm)
s=r.w
if(s!=null){s.rp()
s.r.D(0,r)}}},
smu(a){return},
smv(a){},
goU(){var s,r,q,p,o=this.y
if(o==null){s=A.a([],t.bp)
for(o=this.as,r=o.length,q=0;q<o.length;o.length===r||(0,A.P)(o),++q){p=o[q]
B.c.L(s,p.goU())
s.push(p)}this.y=s
o=s}return o},
gqj(){var s=this.goU()
return new A.aU(s,new A.a2X(),A.ao(s).h("aU<1>"))},
gh8(){var s,r,q=this.x
if(q==null){s=A.a([],t.bp)
r=this.Q
for(;r!=null;){s.push(r)
r=r.Q}this.x=s
q=s}return q},
gjP(){if(!this.gjQ()){var s=this.w
if(s==null)s=null
else{s=s.f
s=s==null?null:B.c.C(s.gh8(),this)}s=s===!0}else s=!0
return s},
gjQ(){var s=this.w
return(s==null?null:s.f)===this},
gle(){return this.ge0()},
ge0(){var s,r,q,p
for(s=this.gh8(),r=s.length,q=0;q<r;++q){p=s[q]
if(p instanceof A.nb)return p}return null},
gaZ(a){var s,r=this.e.ga6(),q=r.bM(0,null),p=r.gkg(),o=A.cN(q,new A.r(p.a,p.b))
p=r.bM(0,null)
q=r.gkg()
s=A.cN(p,new A.r(q.c,q.d))
return new A.E(o.a,o.b,s.a,s.b)},
Cn(a){var s,r,q=this
if(!q.gjP()){s=q.w
s=s==null||s.w!==q}else s=!1
if(s)return
r=q.ge0()
if(r==null)return
switch(a.a){case 0:if(r.gcD())B.c.Y(r.dy)
for(;!r.gcD();){r=r.ge0()
if(r==null){s=q.w
r=s==null?null:s.e}}r.ji(!1)
break
case 1:if(r.gcD())B.c.A(r.dy,q)
for(;!r.gcD();){s=r.ge0()
if(s!=null)B.c.A(s.dy,r)
r=r.ge0()
if(r==null){s=q.w
r=s==null?null:s.e}}r.ji(!0)
break}},
a9m(){return this.Cn(B.a2e)},
GV(a){var s=this,r=s.w
if(r!=null){if(r.f===s)r.w=null
else{r.w=s
r.rp()}return}a.mc()
a.y8()
if(a!==s)s.y8()},
Hv(a,b,c){var s,r,q
if(c){s=b.ge0()
if(s!=null)B.c.A(s.dy,b)}b.Q=null
B.c.A(this.as,b)
for(s=this.gh8(),r=s.length,q=0;q<r;++q)s[q].y=null
this.y=null},
a_N(a,b){return this.Hv(a,b,!0)},
W2(a){var s,r,q,p
this.w=a
for(s=this.goU(),r=s.length,q=0;q<r;++q){p=s[q]
p.w=a
p.x=null}},
ym(a){var s,r,q,p,o,n=this
if(a.Q===n)return
s=a.ge0()
r=a.gjP()
q=a.Q
if(q!=null)q.Hv(0,a,s!=n.gle())
n.as.push(a)
a.Q=n
a.x=null
a.W2(n.w)
for(q=a.gh8(),p=q.length,o=0;o<p;++o)q[o].y=null
if(r){q=n.w
if(q!=null){q=q.f
if(q!=null)q.mc()}}if(s!=null&&a.e!=null&&a.ge0()!==s){q=a.e
q.toString
q=A.auA(q)
if(q!=null)q.zs(a,s)}if(a.ay){a.ji(!0)
a.ay=!1}},
m(){var s=this.ax
if(s!=null)s.au(0)
this.dH()},
y8(){var s=this
if(s.Q==null)return
if(s.gjQ())s.mc()
s.aI()},
ve(){this.ji(!0)},
ji(a){var s,r=this
if(!r.gcD())return
if(r.Q==null){r.ay=!0
return}r.mc()
if(r.gjQ()){s=r.w.w
s=s==null||s===r}else s=!1
if(s)return
r.GV(r)},
mc(){var s,r,q,p,o,n
for(s=B.c.gae(this.gh8()),r=new A.rC(s,t.YE),q=t.l5,p=this;r.t();p=o){o=q.a(s.gJ(s))
n=o.dy
B.c.A(n,p)
n.push(p)}},
cd(){var s,r,q,p=this
p.gjP()
s=p.gjP()&&!p.gjQ()?"[IN FOCUS PATH]":""
r=s+(p.gjQ()?"[PRIMARY FOCUS]":"")
s=A.c7(p)
q=r.length!==0?"("+r+")":""
return"<optimized out>#"+s+q},
$iaj:1}
A.a2X.prototype={
$1(a){return!a.gez()&&a.gcD()},
$S:15}
A.nb.prototype={
gle(){return this},
gqj(){if(!this.gcD())return B.Ez
return A.cY.prototype.gqj.call(this)},
nu(a){if(a.Q==null)this.ym(a)
if(this.gjP())a.ji(!0)
else a.mc()},
ji(a){var s,r,q=this,p=q.dy
while(!0){if((p.length!==0?B.c.gU(p):null)!=null)s=!(p.length!==0?B.c.gU(p):null).gcD()
else s=!1
if(!s)break
p.pop()}r=p.length!==0?B.c.gU(p):null
if(!a||r==null){if(q.gcD()){q.mc()
q.GV(q)}return}r.ji(!0)}}
A.jI.prototype={
I(){return"FocusHighlightMode."+this.b}}
A.HL.prototype={
I(){return"FocusHighlightStrategy."+this.b}}
A.vJ.prototype={
IS(){var s,r,q=this
switch(0){case 0:s=q.c
if(s==null)return
r=s?B.ij:B.eJ
break}s=q.b
if(s==null)s=A.HM()
q.b=r
if((r==null?A.HM():r)!==s)q.ZA()},
ZA(){var s,r,q,p,o,n,m,l,k,j=this,i=j.d,h=i.a
if(h.a===0)return
p=A.aB(i,!0,t.Su)
for(i=p.length,o=0;o<i;++o){s=p[o]
try{if(h.P(0,s)){n=j.b
if(n==null)n=A.HM()
s.$1(n)}}catch(m){r=A.ak(m)
q=A.az(m)
l=j instanceof A.bZ?A.d7(j):null
n=A.bw("while dispatching notifications for "+A.aM(l==null?A.b3(j):l).j(0))
k=$.hi()
if(k!=null)k.$1(new A.bS(r,q,"widgets library",n,null,!1))}}},
W1(a){var s,r,q=this
switch(a.gcu(a).a){case 0:case 2:case 3:q.c=!0
s=B.ij
break
case 1:case 4:case 5:q.c=!1
s=B.eJ
break
default:s=null}r=q.b
if(s!==(r==null?A.HM():r))q.IS()},
Xy(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.c=!1
i.IS()
s=i.f
if(s==null)return!1
s=A.a([s],t.bp)
B.c.L(s,i.f.gh8())
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
switch(A.aLb(k).a){case 1:break c$1
case 0:r=!0
break
case 2:r=!1
break
default:r=!1}break}s.length===q||(0,A.P)(s);++m}return r},
rp(){if(this.y)return
this.y=!0
A.ed(this.gTX())},
TY(){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.y=!1
s=h.f
for(r=h.x,q=r.length,p=h.e,o=0;o<r.length;r.length===q||(0,A.P)(r),++o){n=r[o]
m=n.a
if(m.Q!=null||m===p)if(m.w===h){l=m.dy
m=(l.length!==0?B.c.gU(l):null)==null&&B.c.C(n.b.gh8(),m)
k=m}else k=!1
else k=!1
if(k)n.b.ji(!0)}B.c.Y(r)
r=h.f
if(r==null&&h.w==null)h.w=p
q=h.w
if(q!=null&&q!==r){if(s==null)j=null
else{r=s.gh8()
r=A.wp(r,A.ao(r).c)
j=r}if(j==null)j=A.bd(t.mx)
r=h.w.gh8()
i=A.wp(r,A.ao(r).c)
r=h.r
r.L(0,i.kU(j))
r.L(0,j.kU(i))
r=h.f=h.w
h.w=null}if(s!=r){if(s!=null)h.r.D(0,s)
r=h.f
if(r!=null)h.r.D(0,r)}for(r=h.r,q=A.kt(r,r.r),p=A.o(q).c;q.t();){m=q.d;(m==null?p.a(m):m).y8()}r.Y(0)
if(s!=h.f)h.aI()},
$iaj:1}
A.QD.prototype={}
A.QE.prototype={}
A.QF.prototype={}
A.QG.prototype={}
A.na.prototype={
gMj(){var s=this.w,r=this.e
s=r==null?null:r.r
return s},
gBx(){var s=this.x
if(s==null){s=this.e
s=s==null?null:s.f}return s},
gcD(){var s=this.y
if(s==null){s=this.e
s=s==null?null:s.gcD()}return s!==!1},
gez(){var s=this.z
if(s==null){s=this.e
s=s==null?null:s.gez()}return s===!0},
gmu(){var s=this.Q
if(s==null)s=this.e!=null||null
return s!==!1},
gmv(){var s=this.as
if(s==null)s=this.e!=null||null
return s!==!1},
gjw(){var s=this.ax
if(s==null){s=this.e
s=s==null?null:s.at}return s},
T(){return A.aIf()}}
A.rT.prototype={
gci(a){var s=this.a.e
if(s==null){s=this.d
s.toString}return s},
a0(){this.ad()
this.GA()},
GA(){var s,r,q,p=this
if(p.a.e==null)if(p.d==null)p.d=p.Fv()
s=p.gci(p)
p.a.gmu()
s.smu(!0)
s=p.gci(p)
p.a.gmv()
s.smv(!0)
p.a.gez()
p.gci(p).sez(p.a.gez())
if(p.a.y!=null){s=p.gci(p)
r=p.a.y
r.toString
s.scD(r)}p.f=p.gci(p).gcD()
p.gci(p)
p.r=!0
p.gci(p)
p.w=!0
p.e=p.gci(p).gjQ()
s=p.gci(p)
r=p.c
r.toString
p.a.gMj()
q=p.a.gBx()
s.e=r
s.f=q==null?s.f:q
r=s.r
s.r=r
p.y=s.ax=new A.a2W(s)
p.gci(p).Z(0,p.gxG())},
Fv(){var s=this,r=s.a.gjw(),q=s.a.gcD()
s.a.gmu()
s.a.gmv()
return A.aqy(q,r,!0,!0,null,null,s.a.gez())},
m(){var s,r=this
r.gci(r).G(0,r.gxG())
r.y.au(0)
s=r.d
if(s!=null)s.m()
r.aj()},
bf(){this.cS()
var s=this.y
if(s!=null)s.MX()
this.Gi()},
Gi(){var s,r,q,p=this
if(!p.x&&p.a.f){s=p.c
s.toString
s=A.auy(s)
r=p.gci(p)
if(r.Q==null)s.ym(r)
q=s.w
if(q!=null)q.x.push(new A.P9(s,r))
s=s.w
if(s!=null)s.rp()
p.x=!0}},
d8(){this.km()
var s=this.y
if(s!=null)s.MX()
this.x=!1},
b4(a){var s,r,q=this
q.bA(a)
s=a.e
r=q.a
if(s==r.e){if(!J.h(r.gBx(),q.gci(q).f))q.gci(q).f=q.a.gBx()
q.a.gMj()
q.gci(q)
q.a.gez()
q.gci(q).sez(q.a.gez())
if(q.a.y!=null){s=q.gci(q)
r=q.a.y
r.toString
s.scD(r)}s=q.gci(q)
q.a.gmu()
s.smu(!0)
s=q.gci(q)
q.a.gmv()
s.smv(!0)}else{q.y.au(0)
if(s!=null)s.G(0,q.gxG())
q.GA()}if(a.f!==q.a.f)q.Gi()},
Xq(){var s,r=this,q=r.gci(r).gjQ(),p=r.gci(r).gcD()
r.gci(r)
r.gci(r)
s=r.a.r
if(s!=null)s.$1(r.gci(r).gjP())
s=r.e
s===$&&A.b()
if(s!==q)r.a3(new A.ahy(r,q))
s=r.f
s===$&&A.b()
if(s!==p)r.a3(new A.ahz(r,p))
s=r.r
s===$&&A.b()
if(!s)r.a3(new A.ahA(r,!0))
s=r.w
s===$&&A.b()
if(!s)r.a3(new A.ahB(r,!0))},
H(a){var s,r,q=this,p=null,o=q.y
o.toString
o.C5(q.a.c)
o=q.a
s=o.d
if(o.at){o=q.f
o===$&&A.b()
r=q.e
r===$&&A.b()
s=A.dU(p,s,!1,p,!1,o,r,p,p,p,p,p,p,p,p,p,p,p,p,p,p)}return A.awG(s,q.gci(q))}}
A.ahy.prototype={
$0(){this.a.e=this.b},
$S:0}
A.ahz.prototype={
$0(){this.a.f=this.b},
$S:0}
A.ahA.prototype={
$0(){this.a.r=this.b},
$S:0}
A.ahB.prototype={
$0(){this.a.w=this.b},
$S:0}
A.HN.prototype={
T(){return new A.QH(B.i)}}
A.QH.prototype={
Fv(){var s=this.a.gjw()
return A.aqz(this.a.gcD(),s,this.a.gez())},
H(a){var s=this,r=null,q=s.y
q.toString
q.C5(s.a.c)
q=s.gci(s)
return A.dU(r,A.awG(s.a.d,q),!1,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)}}
A.Au.prototype={}
A.anK.prototype={
$1(a){var s=this.a
if(--s.a===0){s.b=a
return!1}return!0},
$S:52}
A.rU.prototype={}
A.oz.prototype={
I(){return"TraversalDirection."+this.b}}
A.HO.prototype={
FV(a,b,c){var s,r=a.gle(),q=r.dy,p=q.length!==0?B.c.gU(q):null
q=p==null&&r.goU().length!==0
if(q){s=this.Ib(r,a)
if(s.length===0)p=null
else p=b?B.c.gU(s):B.c.gK(s)}return p==null?a:p},
VS(a,b){return this.FV(a,!1,b)},
a6D(a){},
zs(a,b){},
Wp(a){var s
if(a==null)s=null
else{s=a.kc(t.ag)
if(s==null)s=null
else{s=s.f
s.toString}}return t.zH.a(s)},
Ib(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=this.Wp(a.e),c=d==null,b=c?e:d.f
if(b==null)b=new A.xW(A.x(t.l5,t.UJ))
s=A.x(t.pk,t.fk)
for(r=a.goU(),q=r.length,p=t.zH,o=t.ag,n=t.bp,m=0;m<r.length;r.length===q||(0,A.P)(r),++m){l=r[m]
k=l.e
if(k==null)k=e
else{k=k.y
j=k==null?e:k.i(0,A.aM(o))
if(j==null)k=e
else{k=j.f
k.toString}}p.a(k)
i=k==null?e:k.r
if(J.h(l,i)){k=i.e
k.toString
h=A.axA(k,2)
if(h==null)k=e
else{k=h.y
j=k==null?e:k.i(0,A.aM(o))
if(j==null)k=e
else{k=j.f
k.toString}}p.a(k)
g=k==null?e:k.r
if(s.i(0,g)==null)s.k(0,g,A.awH(k,b,A.a([],n)))
s.i(0,g).c.push(i)
continue}if(l.gcD()&&!l.gez()){if(s.i(0,i)==null)s.k(0,i,A.awH(k,b,A.a([],n)))
s.i(0,i).c.push(l)}}for(r=A.jQ(s,s.r);r.t();){q=r.d
p=s.i(0,q).b.OS(s.i(0,q).c,a0)
p=A.a(p.slice(0),A.ao(p))
B.c.Y(s.i(0,q).c)
B.c.L(s.i(0,q).c,p)}f=A.a([],n)
if(s.a!==0)r=s.P(0,c?e:d.r)
else r=!1
if(r){r=s.i(0,c?e:d.r)
r.toString
new A.a2Z(s,f).$1(r)}if(!!f.fixed$length)A.N(A.S("removeWhere"))
B.c.oe(f,new A.a2Y(),!0)
return f},
H0(a,b){var s,r,q,p,o,n,m=this,l=a.gle()
l.toString
m.lF(l)
m.cK$.A(0,l)
s=l.dy
r=s.length!==0?B.c.gU(s):null
if(r==null){q=b?m.VS(a,!1):m.FV(a,!0,!1)
A.ms(q,b?B.d1:B.d2)
return!0}p=m.Ib(l,a)
if(p.length===0)return!1
if(b&&r===B.c.gU(p)){A.ms(B.c.gK(p),B.d1)
return!0}if(!b&&r===B.c.gK(p)){A.ms(B.c.gU(p),B.d2)
return!0}for(l=J.aF(b?p:new A.cn(p,A.ao(p).h("cn<1>"))),o=null;l.t();o=n){n=l.gJ(l)
if(o==r){l=b?B.d1:B.d2
n.ve()
s=n.e
s.toString
A.avV(s,1,l)
return!0}}return!1}}
A.a2Z.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=a.c,r=s.length,q=this.b,p=this.a,o=0;o<s.length;s.length===r||(0,A.P)(s),++o){n=s[o]
if(p.P(0,n)){m=p.i(0,n)
m.toString
this.$1(m)}else q.push(n)}},
$S:312}
A.a2Y.prototype={
$1(a){return!a.gcD()||a.gez()},
$S:15}
A.rN.prototype={}
A.Q7.prototype={}
A.a_D.prototype={
a51(a,b){var s=this
switch(b.a){case 0:return s.rL(a,!1,!0)
case 2:return s.rL(a,!0,!0)
case 3:return s.rL(a,!1,!1)
case 1:return s.rL(a,!0,!1)}},
rL(a,b,c){var s=a.gle().gqj().dR(0)
A.p6(s,new A.a_L(c,b),t.mx)
if(s.length!==0)return B.c.gK(s)
return null},
a0S(a,b,c){var s,r=c.gqj().dR(0)
A.p6(r,new A.a_F(),t.mx)
switch(a.a){case 3:s=new A.aU(r,new A.a_G(b),A.ao(r).h("aU<1>"))
break
case 1:s=new A.aU(r,new A.a_H(b),A.ao(r).h("aU<1>"))
break
case 0:case 2:s=null
break
default:s=null}return s},
a0T(a,b,c){var s=c.dR(0)
A.p6(s,new A.a_I(),t.mx)
switch(a.a){case 0:return new A.aU(s,new A.a_J(b),A.ao(s).h("aU<1>"))
case 2:return new A.aU(s,new A.a_K(b),A.ao(s).h("aU<1>"))
case 3:case 1:break}return null},
a_t(a,b,c){var s,r,q=this,p=q.cK$,o=p.i(0,b),n=o!=null
if(n){s=o.a
s=s.length!==0&&B.c.gK(s).a!==a}else s=!1
if(s){s=o.a
if(B.c.gU(s).b.Q==null){q.lF(b)
p.A(0,b)
return!1}r=new A.a_E(q,o,b)
switch(a.a){case 2:case 0:switch(B.c.gK(s).a.a){case 3:case 1:q.lF(b)
p.A(0,b)
break
case 0:case 2:if(r.$1(a))return!0
break}break
case 3:case 1:switch(B.c.gK(s).a.a){case 3:case 1:if(r.$1(a))return!0
break
case 0:case 2:q.lF(b)
p.A(0,b)
break}break}}if(n&&o.a.length===0){q.lF(b)
p.A(0,b)}return!1},
a6l(a,b){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=a.gle(),f=g.dy,e=f.length!==0?B.c.gU(f):h
if(e==null){s=i.a51(a,b)
if(s==null)s=a
switch(b.a){case 0:case 3:A.ms(s,B.d2)
break
case 1:case 2:A.ms(s,B.d1)
break}return!0}if(i.a_t(b,g,e))return!0
f=e.e
f.toString
r=A.j_(f)
f=b.a
switch(f){case 2:case 0:q=i.a0T(b,e.gaZ(e),g.gqj())
if(r!=null&&!r.d.gJB()){q.toString
p=new A.aU(q,new A.a_M(r),q.$ti.h("aU<p.E>"))
if(!p.gO(p))q=p}if(!q.gae(q).t()){o=h
break}n=A.aB(q,!0,A.o(q).h("p.E"))
if(b===B.a1l){m=A.ao(n).h("cn<1>")
n=A.aB(new A.cn(n,m),!0,m.h("bi.E"))}l=new A.aU(n,new A.a_N(new A.E(e.gaZ(e).a,-1/0,e.gaZ(e).c,1/0)),A.ao(n).h("aU<1>"))
if(!l.gO(l)){o=l.gK(l)
break}A.p6(n,new A.a_O(e),t.mx)
o=B.c.gK(n)
break
case 1:case 3:q=i.a0S(b,e.gaZ(e),g)
if(r!=null&&!r.d.gJB()){q.toString
p=new A.aU(q,new A.a_P(r),q.$ti.h("aU<p.E>"))
if(!p.gO(p))q=p}if(!q.gae(q).t()){o=h
break}n=A.aB(q,!0,A.o(q).h("p.E"))
if(b===B.a1m){m=A.ao(n).h("cn<1>")
n=A.aB(new A.cn(n,m),!0,m.h("bi.E"))}l=new A.aU(n,new A.a_Q(new A.E(-1/0,e.gaZ(e).b,1/0,e.gaZ(e).d)),A.ao(n).h("aU<1>"))
if(!l.gO(l)){o=l.gK(l)
break}A.p6(n,new A.a_R(e),t.mx)
o=B.c.gK(n)
break
default:o=h}if(o!=null){m=i.cK$
k=m.i(0,g)
j=new A.rN(b,e)
if(k!=null)k.a.push(j)
else m.k(0,g,new A.Q7(A.a([j],t.Kj)))
switch(f){case 0:case 3:A.ms(o,B.d2)
break
case 2:case 1:A.ms(o,B.d1)
break}return!0}return!1}}
A.akO.prototype={
$1(a){return a.b===this.a},
$S:313}
A.a_L.prototype={
$2(a,b){if(this.a)if(this.b)return B.d.aO(a.gaZ(a).b,b.gaZ(b).b)
else return B.d.aO(b.gaZ(b).d,a.gaZ(a).d)
else if(this.b)return B.d.aO(a.gaZ(a).a,b.gaZ(b).a)
else return B.d.aO(b.gaZ(b).c,a.gaZ(a).c)},
$S:38}
A.a_F.prototype={
$2(a,b){return B.d.aO(a.gaZ(a).gaR().a,b.gaZ(b).gaR().a)},
$S:38}
A.a_G.prototype={
$1(a){var s=this.a
return!a.gaZ(a).l(0,s)&&a.gaZ(a).gaR().a<=s.a},
$S:15}
A.a_H.prototype={
$1(a){var s=this.a
return!a.gaZ(a).l(0,s)&&a.gaZ(a).gaR().a>=s.c},
$S:15}
A.a_I.prototype={
$2(a,b){return B.d.aO(a.gaZ(a).gaR().b,b.gaZ(b).gaR().b)},
$S:38}
A.a_J.prototype={
$1(a){var s=this.a
return!a.gaZ(a).l(0,s)&&a.gaZ(a).gaR().b<=s.b},
$S:15}
A.a_K.prototype={
$1(a){var s=this.a
return!a.gaZ(a).l(0,s)&&a.gaZ(a).gaR().b>=s.d},
$S:15}
A.a_E.prototype={
$1(a){var s,r,q=this.b.a.pop().b,p=q.e
p.toString
p=A.j_(p)
s=$.ar.an$.f.f.e
s.toString
if(p!=A.j_(s)){p=this.a
s=this.c
p.lF(s)
p.cK$.A(0,s)
return!1}switch(a.a){case 0:case 3:r=B.d2
break
case 1:case 2:r=B.d1
break
default:r=null}A.ms(q,r)
return!0},
$S:315}
A.a_M.prototype={
$1(a){var s=a.e
s.toString
return A.j_(s)===this.a},
$S:15}
A.a_N.prototype={
$1(a){var s=a.gaZ(a).fM(this.a)
return!s.gO(s)},
$S:15}
A.a_O.prototype={
$2(a,b){var s=this.a
return B.d.aO(Math.abs(a.gaZ(a).gaR().a-s.gaZ(s).gaR().a),Math.abs(b.gaZ(b).gaR().a-s.gaZ(s).gaR().a))},
$S:38}
A.a_P.prototype={
$1(a){var s=a.e
s.toString
return A.j_(s)===this.a},
$S:15}
A.a_Q.prototype={
$1(a){var s=a.gaZ(a).fM(this.a)
return!s.gO(s)},
$S:15}
A.a_R.prototype={
$2(a,b){var s=this.a
return B.d.aO(Math.abs(a.gaZ(a).gaR().b-s.gaZ(s).gaR().b),Math.abs(b.gaZ(b).gaR().b-s.gaZ(s).gaR().b))},
$S:38}
A.d5.prototype={
gKp(){var s=this.d
if(s==null){s=this.c.e
s.toString
s=this.d=new A.akM().$1(s)}s.toString
return s}}
A.akL.prototype={
$1(a){var s=a.gKp()
return A.wp(s,A.ao(s).c)},
$S:316}
A.akN.prototype={
$2(a,b){switch(this.a.a){case 1:return B.d.aO(a.b.a,b.b.a)
case 0:return B.d.aO(b.b.c,a.b.c)}},
$S:124}
A.akM.prototype={
$1(a){var s,r,q=A.a([],t.vl),p=t.I,o=a.kc(p)
for(;o!=null;){s=o.f
s.toString
q.push(p.a(s))
s=A.axA(o,1)
if(s==null)o=null
else{s=s.y
r=s==null?null:s.i(0,A.aM(p))
o=r}}return q},
$S:318}
A.jh.prototype={
gaZ(a){var s,r,q,p,o=this
if(o.b==null)for(s=o.a,s=new A.aC(s,new A.akJ(),A.ao(s).h("aC<1,E>")),s=new A.ce(s,s.gp(s)),r=A.o(s).c;s.t();){q=s.d
if(q==null)q=r.a(q)
p=o.b
if(p==null){o.b=q
p=q}o.b=p.pk(q)}s=o.b
s.toString
return s}}
A.akJ.prototype={
$1(a){return a.b},
$S:319}
A.akK.prototype={
$2(a,b){switch(this.a.a){case 1:return B.d.aO(a.gaZ(a).a,b.gaZ(b).a)
case 0:return B.d.aO(b.gaZ(b).c,a.gaZ(a).c)}},
$S:480}
A.xW.prototype={
UI(a){var s,r,q,p,o,n=B.c.gK(a).a,m=t.qi,l=A.a([],m),k=A.a([],t.Wi)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.P)(a),++r){q=a[r]
p=q.a
if(p==n){l.push(q)
continue}k.push(new A.jh(l))
l=A.a([q],m)
n=p}if(l.length!==0)k.push(new A.jh(l))
for(m=k.length,r=0;r<k.length;k.length===m||(0,A.P)(k),++r){s=k[r].a
if(s.length===1)continue
o=B.c.gK(s).a
o.toString
A.awQ(s,o)}return k},
Hm(a){var s,r,q,p
A.p6(a,new A.a9u(),t.zP)
s=B.c.gK(a)
r=new A.a9v().$2(s,a)
if(J.bY(r)<=1)return s
q=A.aIF(r)
q.toString
A.awQ(r,q)
p=this.UI(r)
if(p.length===1)return B.c.gK(B.c.gK(p).a)
A.aIE(p,q)
return B.c.gK(B.c.gK(p).a)},
OS(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
if(a.length<=1)return a
s=A.a([],t.qi)
for(r=a.length,q=t.V2,p=t.I,o=0;o<a.length;a.length===r||(0,A.P)(a),++o){n=a[o]
m=n.gaZ(n)
l=n.e.y
k=l==null?null:l.i(0,A.aM(p))
if(k==null)l=null
else{l=k.f
l.toString}q.a(l)
s.push(new A.d5(l==null?null:l.w,m,n))}j=A.a([],t.bp)
i=this.Hm(s)
j.push(i.c)
B.c.A(s,i)
for(;s.length!==0;){h=this.Hm(s)
j.push(h.c)
B.c.A(s,h)}return j}}
A.a9u.prototype={
$2(a,b){return B.d.aO(a.b.b,b.b.b)},
$S:124}
A.a9v.prototype={
$2(a,b){var s=a.b,r=A.ao(b).h("aU<1>")
return A.aB(new A.aU(b,new A.a9w(new A.E(-1/0,s.b,1/0,s.d)),r),!0,r.h("p.E"))},
$S:321}
A.a9w.prototype={
$1(a){var s=a.b.fM(this.a)
return!s.gO(s)},
$S:322}
A.vK.prototype={
T(){return new A.QI(B.i)}}
A.QI.prototype={
a0(){this.ad()
this.d=A.aqy(!1,"FocusTraversalGroup",!0,!0,null,null,!0)},
m(){var s=this.d
if(s!=null)s.m()
this.aj()},
H(a){var s=null,r=this.a,q=r.c,p=this.d
p.toString
return new A.rV(q,p,A.HK(!1,!1,r.f,s,!0,!0,p,!1,s,s,s,s,s,!0),s)}}
A.rV.prototype={
cj(a){return!1}}
A.MF.prototype={
dA(a){A.ms(a.gci(a),B.Wv)}}
A.nE.prototype={}
A.KV.prototype={
dA(a){var s=$.ar.an$.f.f
s.e.a4(t.ag).f.H0(s,!0)}}
A.nW.prototype={}
A.LR.prototype={
dA(a){var s=$.ar.an$.f.f
s.e.a4(t.ag).f.H0(s,!1)}}
A.GE.prototype={
dA(a){var s=$.ar.an$.f.f,r=s.e.a4(t.ag)
r.f.a6l(s,a.a)}}
A.QJ.prototype={}
A.T3.prototype={
zs(a,b){var s
this.Pw(a,b)
s=this.cK$.i(0,b)
if(s!=null){s=s.a
if(!!s.fixed$length)A.N(A.S("removeWhere"))
B.c.oe(s,new A.akO(a),!0)}}}
A.W3.prototype={}
A.W4.prototype={}
A.eS.prototype={
gbv(){var s,r=$.ar.an$.z.i(0,this)
if(r instanceof A.h6){s=r.ok
s.toString
if(A.o(this).c.b(s))return s}return null}}
A.bB.prototype={
j(a){var s=this,r=s.a,q=r!=null?" "+r:""
if(A.D(s)===B.a1I)return"[GlobalKey#"+A.c7(s)+q+"]"
return"["+("<optimized out>#"+A.c7(s))+q+"]"}}
A.lg.prototype={
l(a,b){if(b==null)return!1
if(J.a1(b)!==A.D(this))return!1
return this.$ti.b(b)&&b.a===this.a},
gu(a){return A.mB(this.a)},
j(a){var s="GlobalObjectKey",r=B.b.iI(s,"<State<StatefulWidget>>")?B.b.X(s,0,-8):s
return"["+r+" "+("<optimized out>#"+A.c7(this.a))+"]"}}
A.j.prototype={
cd(){var s=this.a
return s==null?"Widget":"Widget-"+s.j(0)},
l(a,b){if(b==null)return!1
return this.Qe(0,b)},
gu(a){return A.C.prototype.gu.call(this,this)}}
A.aT.prototype={
c_(a){return new A.NR(this,B.ab)}}
A.U.prototype={
c_(a){return A.aHk(this)}}
A.Ux.prototype={
I(){return"_StateLifecycle."+this.b}}
A.a6.prototype={
a0(){},
b4(a){},
eQ(){},
a3(a){a.$0()
this.c.eN()},
d8(){},
aV(){},
m(){},
bf(){}}
A.b2.prototype={}
A.dO.prototype={
c_(a){return new A.nH(this,B.ab,A.o(this).h("nH<dO.T>"))}}
A.bg.prototype={
c_(a){return A.aEH(this)}}
A.aD.prototype={
aN(a,b){},
p8(a){}}
A.IC.prototype={
c_(a){return new A.IB(this,B.ab)}}
A.b5.prototype={
c_(a){return A.aHc(this)}}
A.eX.prototype={
c_(a){return A.aFr(this)}}
A.oN.prototype={
I(){return"_ElementLifecycle."+this.b}}
A.R6.prototype={
IC(a){a.b1(new A.aiz(this,a))
a.lo()},
a1m(){var s,r,q,p=this
p.a=!0
r=p.b
q=A.aB(r,!0,A.o(r).c)
B.c.dj(q,A.aoK())
s=q
r.Y(0)
try{r=s
new A.cn(r,A.b3(r).h("cn<1>")).V(0,p.ga1k())}finally{p.a=!1}},
D(a,b){if(b.w===B.cu){b.d8()
b.b1(A.aoL())}this.b.D(0,b)}}
A.aiz.prototype={
$1(a){this.a.IC(a)},
$S:9}
A.YL.prototype={
D7(a){var s=this
if(a.at){s.e=!0
return}if(!s.d&&s.a!=null){s.d=!0
s.a.$0()}s.c.push(a)
a.at=!0},
M3(a){try{a.$0()}finally{}},
oE(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=b==null
if(f&&h.c.length===0)return
try{h.d=!0
if(!f){g.a=null
h.e=!1
try{b.$0()}finally{}}f=h.c
B.c.dj(f,A.aoK())
h.e=!1
g.b=f.length
g.c=0
for(n=0;n<g.b;){s=f[n]
r=!1
if(r){n=s.f
n.toString
m=n instanceof A.bZ?A.d7(n):null
A.ary(A.aM(m==null?A.b3(n):m).j(0),null,null)}try{s.ML()}catch(l){q=A.ak(l)
p=A.az(l)
n=A.bw("while rebuilding dirty elements")
k=$.hi()
if(k!=null)k.$1(new A.bS(q,p,"widgets library",n,new A.YM(g,h,s),!1))}if(r)A.arx()
n=++g.c
k=g.b
j=f.length
if(k>=j){k=h.e
k.toString}else k=!0
if(k){if(!!f.immutable$list)A.N(A.S("sort"))
n=j-1
if(n-0<=32)A.NC(f,0,n,A.aoK())
else A.NB(f,0,n,A.aoK())
n=h.e=!1
g.b=f.length
while(!0){k=g.c
if(!(k>0?f[k-1].as:n))break
g.c=k-1}n=k}}}finally{for(f=h.c,n=f.length,i=0;i<n;++i){o=f[i]
o.at=!1}B.c.Y(f)
h.d=!1
h.e=null}},
a2H(a){return this.oE(a,null)},
a5_(){var s,r,q
try{this.M3(this.b.ga1l())}catch(q){s=A.ak(q)
r=A.az(q)
A.asp(A.Hr("while finalizing the widget tree"),s,r,null)}finally{}},
a8k(a,b){try{a.b=b
a.eQ()}finally{}}}
A.YM.prototype={
$0(){var s=null,r=A.a([],t.E),q=this.a,p=q.c,o=this.b.c.length,n="The element being rebuilt at the time was index "+p
q=""+q.b
if(p<o)J.kQ(r,A.ir(n+" of "+q,this.c,!0,B.b0,s,!1,s,s,B.aC,s,!1,!0,!0,B.bc,s,t.h))
else J.kQ(r,A.a2r(n+" of "+q+", but _dirtyElements only had "+o+" entries. This suggests some confusion in the framework internals."))
return r},
$S:12}
A.xh.prototype={
zg(){var s=this.a
this.c=new A.ajK(this,s==null?null:s.c)}}
A.ajK.prototype={
dq(a){var s=this.a.Ml(a)
if(s)return
s=this.b
if(s!=null)s.dq(a)}}
A.b6.prototype={
Td(a){},
l(a,b){if(b==null)return!1
return this===b},
eQ(){var s=this
if(A.axs(s.b,s.f)){s.eN()
s.b=null}s.b1(new A.a1R(s))
s.b=null},
ga6(){var s,r
for(s=this;s!=null;){r={}
if(s.w===B.Du)break
else if(s instanceof A.br)return s.ga6()
else{r.a=null
s.b1(new A.a1S(r))
s=r.a}}return null},
a4s(a){var s=null
return A.ir(a,this,!0,B.b0,s,!1,s,s,B.aC,s,!1,!0,!0,B.bc,s,t.h)},
b1(a){},
dD(a,b,c){var s,r,q=this
if(b==null){if(a!=null)q.zK(a)
return null}if(a!=null){s=a.f.l(0,b)
if(s){if(!J.h(a.d,c))q.Nu(a,c)
s=a}else{s=a.f
s.toString
if(A.D(s)===A.D(b)&&J.h(s.a,b.a)){if(!J.h(a.d,c))q.Nu(a,c)
a.bo(0,b)
s=a}else{q.zK(a)
r=q.uo(b,c)
s=r}}}else{r=q.uo(b,c)
s=r}return s},
fo(a,b){var s,r,q,p=this
p.a=a
p.d=b
p.w=B.cu
s=a!=null
if(s){r=a.e
r===$&&A.b();++r}else r=1
p.e=r
if(s)p.r=a.r
q=p.f.a
if(q instanceof A.eS)p.r.z.k(0,q,p)
p.yP()
p.zg()},
bo(a,b){this.f=b},
Nu(a,b){new A.a1T(b).$1(a)},
yV(a){this.d=a},
IN(a){var s=a+1,r=this.e
r===$&&A.b()
if(r<s){this.e=s
this.b1(new A.a1O(s))}},
oW(){this.b1(new A.a1Q())
this.d=null},
th(a){this.b1(new A.a1P(a))
this.d=a},
a01(a,b){var s,r,q=$.ar.an$.z.i(0,a)
if(q==null)return null
s=q.f
s.toString
if(!(A.D(s)===A.D(b)&&J.h(s.a,b.a)))return null
r=q.a
if(r!=null){r.iN(q)
r.zK(q)}this.r.b.b.A(0,q)
return q},
uo(a,b){var s,r,q,p,o,n,m=this,l=!1
if(l)A.ary(A.D(a).j(0),null,null)
try{s=a.a
if(s instanceof A.eS){r=m.a01(s,a)
if(r!=null){o=r
o.a=m
o.toString
n=m.e
n===$&&A.b()
o.IN(n)
o.aV()
o.b1(A.ayz())
o.th(b)
q=m.dD(r,a,b)
o=q
o.toString
return o}}p=a.c_(0)
p.fo(m,b)
return p}finally{if(l)A.arx()}},
zK(a){a.a=null
a.oW()
this.r.b.D(0,a)},
iN(a){},
aV(){var s=this,r=s.z,q=r==null,p=!q&&r.a!==0||s.Q
s.w=B.cu
if(!q)r.Y(0)
s.Q=!1
s.yP()
s.zg()
if(s.as)s.r.D7(s)
if(p)s.bf()},
d8(){var s,r,q=this,p=q.z
if(p!=null&&p.a!==0)for(p=new A.kq(p,p.lP()),s=A.o(p).c;p.t();){r=p.d;(r==null?s.a(r):r).bg.A(0,q)}q.y=null
q.w=B.a2T},
lo(){var s=this,r=s.f,q=r==null?null:r.a
if(q instanceof A.eS){r=s.r.z
if(J.h(r.i(0,q),s))r.A(0,q)}s.z=s.f=null
s.w=B.Du},
gcG(a){var s,r=this.ga6()
if(r instanceof A.H){s=r.k3
s.toString
return s}return null},
zQ(a,b){var s=this.z;(s==null?this.z=A.dc(t.IS):s).D(0,a)
a.Nq(this,b)
s=a.f
s.toString
return t.WB.a(s)},
a4(a){var s=this.y,r=s==null?null:s.i(0,A.aM(a))
if(r!=null)return a.a(this.zQ(r,null))
this.Q=!0
return null},
kc(a){var s=this.y
return s==null?null:s.i(0,A.aM(a))},
zg(){var s=this.a
this.c=s==null?null:s.c},
yP(){var s=this.a
this.y=s==null?null:s.y},
KY(a){var s,r,q,p=this.a
while(!0){s=p==null
if(!s){r=p.f
r.toString
q=r instanceof A.bZ?A.d7(r):null
r=A.aM(q==null?A.b3(r):q)!==A.aM(a)}else r=!1
if(!r)break
p=p.a}if(s)s=null
else{s=p.f
s.toString}return a.h("0?").a(s)},
l8(a){var s,r,q=this.a
for(;s=q==null,!s;){if(q instanceof A.h6){r=q.ok
r.toString
r=a.b(r)}else r=!1
if(r)break
q=q.a}t.lE.a(q)
if(s)s=null
else{s=q.ok
s.toString}return a.h("0?").a(s)},
u6(a){var s=this.a
for(;s!=null;){if(s instanceof A.br&&a.b(s.ga6()))return a.a(s.ga6())
s=s.a}return null},
CA(a){var s=this.a
while(!0){if(!(s!=null&&a.$1(s)))break
s=s.a}},
bf(){this.eN()},
dq(a){var s=this.c
if(s!=null)s.dq(a)},
cd(){var s=this.f
s=s==null?null:s.cd()
return s==null?"<optimized out>#"+A.c7(this)+"(DEFUNCT)":s},
eN(){var s=this
if(s.w!==B.cu)return
if(s.as)return
s.as=!0
s.r.D7(s)},
v7(a){var s
if(this.w===B.cu)s=!this.as&&!a
else s=!0
if(s)return
this.hp()},
ML(){return this.v7(!1)},
hp(){this.as=!1},
$iam:1}
A.a1R.prototype={
$1(a){a.b=this.a.b
a.eQ()},
$S:9}
A.a1S.prototype={
$1(a){this.a.a=a},
$S:9}
A.a1T.prototype={
$1(a){a.yV(this.a)
if(!(a instanceof A.br))a.b1(this)},
$S:9}
A.a1O.prototype={
$1(a){a.IN(this.a)},
$S:9}
A.a1Q.prototype={
$1(a){a.oW()},
$S:9}
A.a1P.prototype={
$1(a){a.th(this.a)},
$S:9}
A.Hs.prototype={
aH(a){var s=this.d,r=new A.Mi(s,A.ay())
r.aK()
r.Tp(s)
return r}}
A.uF.prototype={
fo(a,b){this.DN(a,b)
this.xh()},
xh(){this.ML()},
hp(){var s,r,q,p,o,n,m=this,l=null
try{l=m.be()
m.f.toString}catch(o){s=A.ak(o)
r=A.az(o)
n=A.vp(A.asp(A.bw("building "+m.j(0)),s,r,new A.ZH(m)))
l=n}finally{m.w7()}try{m.ay=m.dD(m.ay,l,m.d)}catch(o){q=A.ak(o)
p=A.az(o)
n=A.vp(A.asp(A.bw("building "+m.j(0)),q,p,new A.ZI(m)))
l=n
m.ay=m.dD(null,l,m.d)}},
b1(a){var s=this.ay
if(s!=null)a.$1(s)},
iN(a){this.ay=null
this.kl(a)}}
A.ZH.prototype={
$0(){var s=A.a([],t.E)
return s},
$S:12}
A.ZI.prototype={
$0(){var s=A.a([],t.E)
return s},
$S:12}
A.NR.prototype={
be(){var s=this.f
s.toString
return t.gU.a(s).H(this)},
bo(a,b){this.qN(0,b)
this.v7(!0)}}
A.h6.prototype={
be(){return this.ok.H(this)},
eQ(){var s=this
if(A.axs(s.b,s.f))s.ok.eQ()
s.Pt()},
xh(){this.ok.a0()
this.ok.bf()
this.Pe()},
hp(){var s=this
if(s.p1){s.ok.bf()
s.p1=!1}s.Pf()},
bo(a,b){var s,r,q,p=this
p.qN(0,b)
s=p.ok
r=s.a
r.toString
q=p.f
q.toString
s.a=t.d2.a(q)
s.b4(r)
p.v7(!0)},
aV(){this.Pr()
this.ok.aV()
this.eN()},
d8(){this.ok.d8()
this.DK()},
lo(){var s=this
s.w8()
s.ok.m()
s.ok=s.ok.c=null},
zQ(a,b){return this.DL(a,b)},
bf(){this.Ps()
this.p1=!0}}
A.xQ.prototype={
be(){var s=this.f
s.toString
return t.yH.a(s).b},
bo(a,b){var s=this,r=s.f
r.toString
t.yH.a(r)
s.qN(0,b)
s.Cx(r)
s.v7(!0)},
Cx(a){this.n5(a)}}
A.nH.prototype={
ER(a){this.b1(new A.a8m(a))},
n5(a){var s=this.f
s.toString
this.ER(this.$ti.h("dO<1>").a(s))}}
A.a8m.prototype={
$1(a){if(a instanceof A.br)this.a.oz(a.ga6())
else a.b1(this)},
$S:9}
A.fO.prototype={
yP(){var s=this,r=s.a,q=r==null?null:r.y
if(q==null)q=B.VV
r=s.f
r.toString
s.y=q.a8b(0,A.D(r),s)},
Dc(a,b){this.bg.k(0,a,b)},
Nq(a,b){this.Dc(a,null)},
Mg(a,b){b.bf()},
Cx(a){var s=this.f
s.toString
if(t.WB.a(s).cj(a))this.Qs(a)},
n5(a){var s,r,q
for(s=this.bg,s=new A.AD(s,s.wS()),r=A.o(s).c;s.t();){q=s.d
this.Mg(a,q==null?r.a(q):q)}}}
A.br.prototype={
ga6(){var s=this.ay
s.toString
return s},
VO(){var s=this.a
while(!0){if(!(s!=null&&!(s instanceof A.br)))break
s=s.a}return t.c_.a(s)},
VN(){var s,r={},q=r.a=this.a
r.b=null
while(!0){if(!(q!=null&&!(q instanceof A.br)))break
if(q instanceof A.nH){r.b=q
break}s=q.a
r.a=s
q=s}return r.b},
fo(a,b){var s,r=this
r.DN(a,b)
s=r.f
s.toString
r.ay=t.F5.a(s).aH(r)
r.th(b)
r.w7()},
bo(a,b){this.qN(0,b)
this.Hl()},
hp(){this.Hl()},
Hl(){var s=this,r=s.f
r.toString
t.F5.a(r).aN(s,s.ga6())
s.w7()},
a9q(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=new A.a9D(a4),g=new A.a9E(i),f=a3.length,e=f-1,d=a2.length,c=d-1,b=d===f?a2:A.b1(f,$.at4(),!1,t.h),a=i,a0=0,a1=0
while(!0){if(!(a1<=c&&a0<=e))break
s=h.$1(a2[a1])
r=a3[a0]
if(s!=null){f=s.f
f.toString
q=f instanceof A.bZ?A.d7(f):i
d=A.aM(q==null?A.b3(f):q)
q=r instanceof A.bZ?A.d7(r):i
f=!(d===A.aM(q==null?A.b3(r):q)&&J.h(f.a,r.a))}else f=!0
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
q=f instanceof A.bZ?A.d7(f):i
d=A.aM(q==null?A.b3(f):q)
q=r instanceof A.bZ?A.d7(r):i
f=!(d===A.aM(q==null?A.b3(r):q)&&J.h(f.a,r.a))}else f=!0
if(f)break;--p;--e}if(o){n=A.x(t.D2,t.h)
for(;a1<=p;){s=h.$1(a2[a1])
if(s!=null){f=s.f.a
if(f!=null)n.k(0,f,s)
else{s.a=null
s.oW()
f=j.r.b
if(s.w===B.cu){s.d8()
s.b1(A.aoL())}f.b.D(0,s)}}++a1}o=!0}else n=i
for(;a0<=e;a=f){r=a3[a0]
if(o){m=r.a
if(m!=null){s=n.i(0,m)
if(s!=null){f=s.f
f.toString
q=f instanceof A.bZ?A.d7(f):i
d=A.aM(q==null?A.b3(f):q)
q=r instanceof A.bZ?A.d7(r):i
if(d===A.aM(q==null?A.b3(r):q)&&J.h(f.a,m))n.A(0,m)
else s=i}}else s=i}else s=i
f=j.dD(s,r,g.$2(a0,a))
f.toString
b[a0]=f;++a0}e=a3.length-1
while(!0){if(!(a1<=c&&a0<=e))break
f=j.dD(a2[a1],a3[a0],g.$2(a0,a))
f.toString
b[a0]=f;++a0;++a1
a=f}if(o&&n.a!==0)for(f=n.gb0(n),f=new A.ek(J.aF(f.a),f.b),d=A.o(f).z[1];f.t();){l=f.a
if(l==null)l=d.a(l)
if(!a4.C(0,l)){l.a=null
l.oW()
k=j.r.b
if(l.w===B.cu){l.d8()
l.b1(A.aoL())}k.b.D(0,l)}}return b},
d8(){this.DK()},
lo(){var s=this,r=s.f
r.toString
t.F5.a(r)
s.w8()
r.p8(s.ga6())
s.ay.m()
s.ay=null},
yV(a){var s,r=this,q=r.d
r.Pq(a)
s=r.CW
s.toString
s.iV(r.ga6(),q,r.d)},
th(a){var s,r,q=this
q.d=a
s=q.CW=q.VO()
if(s!=null)s.iR(q.ga6(),a)
r=q.VN()
if(r!=null){s=r.f
s.toString
t.IL.a(s).oz(q.ga6())}},
oW(){var s=this,r=s.CW
if(r!=null){r.j2(s.ga6(),s.d)
s.CW=null}s.d=null},
iR(a,b){},
iV(a,b,c){},
j2(a,b){}}
A.a9D.prototype={
$1(a){var s=this.a.C(0,a)
return s?null:a},
$S:323}
A.a9E.prototype={
$2(a,b){return new A.q6(b,a,t.Bc)},
$S:324}
A.ye.prototype={
fo(a,b){this.qQ(a,b)}}
A.IB.prototype={
iN(a){this.kl(a)},
iR(a,b){},
iV(a,b,c){},
j2(a,b){}}
A.yM.prototype={
b1(a){var s=this.p1
if(s!=null)a.$1(s)},
iN(a){this.p1=null
this.kl(a)},
fo(a,b){var s,r,q=this
q.qQ(a,b)
s=q.p1
r=q.f
r.toString
q.p1=q.dD(s,t.Mp.a(r).c,null)},
bo(a,b){var s,r,q=this
q.lK(0,b)
s=q.p1
r=q.f
r.toString
q.p1=q.dD(s,t.Mp.a(r).c,null)},
iR(a,b){var s=this.ay
s.toString
t.GM.a(s).saQ(a)},
iV(a,b,c){},
j2(a,b){var s=this.ay
s.toString
t.GM.a(s).saQ(null)}}
A.fp.prototype={
ga6(){return t.pU.a(A.br.prototype.ga6.call(this))},
gJK(a){var s=this.p1
s===$&&A.b()
return new A.aU(s,new A.a7u(this),A.ao(s).h("aU<1>"))},
iR(a,b){var s=this.ga6(),r=b.a
s.AK(0,a,r==null?null:r.ga6())},
iV(a,b,c){var s=this.ga6(),r=c.a
s.uJ(a,r==null?null:r.ga6())},
j2(a,b){this.ga6().A(0,a)},
b1(a){var s,r,q,p,o=this.p1
o===$&&A.b()
s=o.length
r=this.p2
q=0
for(;q<s;++q){p=o[q]
if(!r.C(0,p))a.$1(p)}},
iN(a){this.p2.D(0,a)
this.kl(a)},
uo(a,b){return this.DM(a,b)},
fo(a,b){var s,r,q,p,o,n,m,l=this
l.qQ(a,b)
s=l.f
s.toString
s=t.Lb.a(s).c
r=s.length
q=A.b1(r,$.at4(),!1,t.h)
for(p=t.Bc,o=null,n=0;n<r;++n,o=m){m=l.DM(s[n],new A.q6(o,n,p))
q[n]=m}l.p1=q},
bo(a,b){var s,r,q,p=this
p.lK(0,b)
s=p.f
s.toString
t.Lb.a(s)
r=p.p1
r===$&&A.b()
q=p.p2
p.p1=p.a9q(r,s.c,q)
q.Y(0)}}
A.a7u.prototype={
$1(a){return!this.a.p2.C(0,a)},
$S:52}
A.q6.prototype={
l(a,b){if(b==null)return!1
if(J.a1(b)!==A.D(this))return!1
return b instanceof A.q6&&this.b===b.b&&J.h(this.a,b.a)},
gu(a){return A.Y(this.b,this.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)}}
A.RY.prototype={}
A.S0.prototype={
c_(a){return A.N(A.cc(null))}}
A.Uy.prototype={}
A.nf.prototype={}
A.cM.prototype={
K_(){return this.a.$0()},
Ly(a){return this.b.$1(a)}}
A.HW.prototype={
H(a){var s=this,r=A.x(t.n,t.xR),q=A.dM(a),p=q==null?null:q.ay
if(s.d==null)if(s.e==null)if(s.f==null)if(s.r==null)q=!1
else q=!0
else q=!0
else q=!0
else q=!0
if(q)r.k(0,B.Dl,new A.cM(new A.a3l(s),new A.a3m(s,p),t.jl))
if(s.ay==null)q=!1
else q=!0
if(q)r.k(0,B.a1w,new A.cM(new A.a3n(s),new A.a3r(s,p),t.uA))
if(s.cy==null)q=!1
else q=!0
if(q)r.k(0,B.Dj,new A.cM(new A.a3s(s),new A.a3t(s,p),t.jn))
if(s.rx!=null||s.ry!=null||s.to!=null||!1)r.k(0,B.mC,new A.cM(new A.a3u(s),new A.a3v(s,p),t.ok))
if(s.x2!=null||s.y1!=null||s.y2!=null||s.bV!=null)r.k(0,B.mB,new A.cM(new A.a3w(s),new A.a3x(s,p),t.Uv))
if(s.bC!=null||s.ar!=null||s.ak!=null||!1)r.k(0,B.mA,new A.cM(new A.a3y(s),new A.a3o(s,p),t.YC))
q=!1
if(q)r.k(0,B.a1z,new A.cM(new A.a3p(s),new A.a3q(s,p),t.C1))
return new A.lP(s.c,r,s.aF,s.b9,null,null)}}
A.a3l.prototype={
$0(){return A.aHt(this.a,null)},
$S:325}
A.a3m.prototype={
$1(a){var s=this.a
a.y1=s.d
a.y2=s.e
a.bV=s.f
a.bC=s.r
a.b7=a.b2=a.aw=a.av=a.ak=a.ar=a.bg=null
a.b=this.b},
$S:326}
A.a3n.prototype={
$0(){var s=t.S
return new A.hw(A.x(s,t.jk),this.a,null,A.x(s,t._))},
$S:327}
A.a3r.prototype={
$1(a){a.e=null
a.f=this.a.ay
a.r=null
a.b=this.b},
$S:328}
A.a3s.prototype={
$0(){return A.aF2(this.a,null,null)},
$S:329}
A.a3t.prototype={
$1(a){a.k3=a.k2=null
a.k4=this.a.cy
a.bg=a.bC=a.bV=a.y2=a.y1=a.xr=a.x2=a.x1=a.to=a.ry=a.rx=a.RG=a.R8=a.p4=a.p3=a.p2=a.p1=a.ok=null
a.b=this.b},
$S:330}
A.a3u.prototype={
$0(){return A.awy(this.a,null)},
$S:125}
A.a3v.prototype={
$1(a){var s
a.as=null
s=this.a
a.at=s.rx
a.ax=s.ry
a.ay=s.to
a.ch=null
a.Q=s.bh
a.b=this.b},
$S:126}
A.a3w.prototype={
$0(){return A.a4Y(this.a,null)},
$S:127}
A.a3x.prototype={
$1(a){var s=this.a
a.as=s.x2
a.at=null
a.ax=s.y1
a.ay=s.y2
a.ch=s.bV
a.Q=s.bh
a.b=this.b},
$S:128}
A.a3y.prototype={
$0(){var s=t.S,r=A.dc(s)
return new A.hP(B.X,A.asE(),B.ct,A.x(s,t.GY),A.bd(s),A.x(s,t.o),r,this.a,null,A.x(s,t._))},
$S:335}
A.a3o.prototype={
$1(a){var s=this.a
a.as=s.bC
a.at=null
a.ax=s.ar
a.ay=s.ak
a.ch=null
a.Q=s.bh
a.b=this.b},
$S:336}
A.a3p.prototype={
$0(){var s=t.S,r=A.dc(s)
return new A.hA(B.mJ,A.x(s,t.o),r,this.a,null,A.x(s,t._))},
$S:337}
A.a3q.prototype={
$1(a){a.ax=a.as=a.at=a.Q=null
a.b=this.b},
$S:338}
A.lP.prototype={
T(){return new A.qI(B.V8,B.i)}}
A.qI.prototype={
a0(){var s,r,q=this
q.ad()
s=q.a
r=s.r
q.e=r==null?new A.Q_(q):r
q.yF(s.d)},
b4(a){var s,r=this
r.bA(a)
if(!(a.r==null&&r.a.r==null)){s=r.a.r
r.e=s==null?new A.Q_(r):s}r.yF(r.a.d)},
a8H(a){if(this.a.f)return
t.ym.a(this.c.ga6()).sa9w(a)},
m(){for(var s=this.d,s=J.aF(s.gb0(s));s.t();)s.gJ(s).m()
this.d=null
this.aj()},
yF(a){var s,r,q,p,o=this,n=o.d
n.toString
o.d=A.x(t.n,t.cD)
for(s=J.aF(a.gbE(a));s.t();){r=s.gJ(s)
q=o.d
q.toString
p=n.i(0,r)
q.k(0,r,p==null?a.i(0,r).K_():p)
q=a.i(0,r)
q.toString
r=o.d.i(0,r)
r.toString
q.Ly(r)}for(s=J.aF(n.gbE(n));s.t();){r=s.gJ(s)
if(!o.d.P(0,r))n.i(0,r).m()}},
W7(a){var s,r
for(s=this.d,s=J.aF(s.gb0(s));s.t();){r=s.gJ(s)
r.d.k(0,a.gc6(),a.gcu(a))
if(r.fO(a))r.hN(a)
else r.pC(a)}},
XR(a){var s,r
for(s=this.d,s=J.aF(s.gb0(s));s.t();){r=s.gJ(s)
r.d.k(0,a.gc6(),a.gcu(a))
if(r.a6N(a))r.z3(a)}},
a1F(a){this.e.zf(a)},
H(a){var s,r,q,p=this,o=null,n=p.a,m=n.e,l=m==null
if(l)s=n.c==null?B.an:B.c9
else s=m
r=n.c
q=A.qj(s,r,o,p.gW6(),p.gXQ(),o,o)
if(!n.f){if(l)n=r==null?B.an:B.c9
else n=m
q=new A.QP(n,p.ga1E(),q,o)}return q}}
A.QP.prototype={
aH(a){var s=new A.k2(B.c9,null,A.ay())
s.aK()
s.saQ(null)
s.v=this.e
this.f.$1(s)
return s},
aN(a,b){b.v=this.e
this.f.$1(b)}}
A.abG.prototype={
j(a){return"SemanticsGestureDelegate()"}}
A.Q_.prototype={
zf(a){var s=this,r=s.a.d
r.toString
a.sjY(s.Wy(r))
a.slg(s.Wo(r))
a.sa7C(s.Wm(r))
a.sa7K(s.Wz(r))},
Wy(a){var s=t.zm.a(a.i(0,B.Dl))
if(s==null)return null
return new A.ahb(s)},
Wo(a){var s=t.qA.a(a.i(0,B.Dj))
if(s==null)return null
return new A.aha(s)},
Wm(a){var s=t.gx.a(a.i(0,B.mB)),r=t.uR.a(a.i(0,B.mA)),q=s==null?null:new A.ah7(s),p=r==null?null:new A.ah8(r)
if(q==null&&p==null)return null
return new A.ah9(q,p)},
Wz(a){var s=t.Wn.a(a.i(0,B.mC)),r=t.uR.a(a.i(0,B.mA)),q=s==null?null:new A.ahc(s),p=r==null?null:new A.ahd(r)
if(q==null&&p==null)return null
return new A.ahe(q,p)}}
A.ahb.prototype={
$0(){var s=this.a,r=s.y1
if(r!=null)r.$1(new A.rp(B.j,B.j))
r=s.y2
if(r!=null)r.$1(new A.rq())
s=s.bV
if(s!=null)s.$0()},
$S:0}
A.aha.prototype={
$0(){var s=this.a,r=s.ok
if(r!=null)r.$1(B.Tv)
r=s.k4
if(r!=null)r.$0()
s=s.p3
if(s!=null)s.$1(B.Tt)},
$S:0}
A.ah7.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.jC(B.j))
r=s.at
if(r!=null)r.$1(new A.iw(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.hx(B.cs,0))},
$S:19}
A.ah8.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.jC(B.j))
r=s.at
if(r!=null)r.$1(new A.iw(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.hx(B.cs,null))},
$S:19}
A.ah9.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(a)
s=this.b
if(s!=null)s.$1(a)},
$S:19}
A.ahc.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.jC(B.j))
r=s.at
if(r!=null)r.$1(new A.iw(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.hx(B.cs,0))},
$S:19}
A.ahd.prototype={
$1(a){var s=this.a,r=s.as
if(r!=null)r.$1(new A.jC(B.j))
r=s.at
if(r!=null)r.$1(new A.iw(null,B.j,null))
r=s.ax
if(r!=null)r.$1(a)
s=s.ay
if(s!=null)s.$1(new A.hx(B.cs,null))},
$S:19}
A.ahe.prototype={
$1(a){var s=this.a
if(s!=null)s.$1(a)
s=this.b
if(s!=null)s.$1(a)},
$S:19}
A.nl.prototype={
I(){return"HeroFlightDirection."+this.b}}
A.nj.prototype={
T(){return new A.t1(new A.bB(null,t.C),B.i)}}
A.a4z.prototype={
$2(a,b){var s=a.f
s.toString
t.rA.a(s)
s=a.ok
s.toString
t.U3.a(s)
if(!this.b||!1)this.a.k(0,b,s)
else s.KF()},
$S:341}
A.a4A.prototype={
$1(a){var s,r,q=this,p=a.f
p.toString
if(p instanceof A.nj){t.MF.a(a)
s=p.c
if(A.aqX(a)===q.a)q.b.$2(a,s)
else{r=A.a7k(a,t.X)
if(r!=null)p=r.gl9()
else p=!1
if(p)q.b.$2(a,s)}}a.b1(q)},
$S:9}
A.t1.prototype={
vZ(a){var s,r=this
r.f=a
s=r.c.ga6()
s.toString
r.a3(new A.aif(r,t.x.a(s)))},
vY(){return this.vZ(!1)},
mz(a){var s=this
if(a||s.e==null)return
s.e=null
if(s.c!=null)s.a3(new A.aie())},
KF(){return this.mz(!1)},
H(a){var s,r=this,q=null,p=r.e,o=p==null,n=!o
if(n)r.a.toString
if(n&&!r.f){o=p.a
return A.cv(q,p.b,o)}s=o?q:p.a
p=o?q:p.b
return A.cv(new A.xm(n,new A.rv(o,new A.jO(r.a.e,r.d),q),q),p,s)}}
A.aif.prototype={
$0(){var s=this.b.k3
s.toString
this.a.e=s},
$S:0}
A.aie.prototype={
$0(){},
$S:0}
A.aib.prototype={
gbY(a){var s,r=this
if(r.a===B.c7){s=r.e.fy
s.toString}else{s=r.d.fy
s.toString}return A.b8(B.bb,s,r.z?null:new A.vG(B.bb))},
oQ(a,b){var s
this.r.a.toString
s=this.w.$2(a,b)
return s==null?new A.xX(a,b):s},
gLa(){var s,r,q=this,p=q.Q
if(p===$){s=q.f.c
s.toString
r=A.awJ(s,$.ar.an$.z.i(0,q.d.k2))
q.Q!==$&&A.bu()
q.Q=r
p=r}return p},
gvk(){var s,r,q=this,p=q.as
if(p===$){s=q.r.c
s.toString
r=A.awJ(s,$.ar.an$.z.i(0,q.e.k2))
q.as!==$&&A.bu()
q.as=r
p=r}return p},
glb(){var s,r,q=this,p=q.at
if(p===$){s=q.gvk()
if(s.gLP(s))if(!q.z){s=q.gLa()
s=s.gLP(s)
r=s}else r=!0
else r=!1
q.at!==$&&A.bu()
p=q.at=r}return p},
j(a){var s,r,q=this,p=q.a.j(0),o=q.f,n=o.a.c.j(0),m=q.d.b.j(0),l=q.e.b.j(0)
o=o.j(0)
s=q.r.j(0)
r=q.glb()?"":", INVALID"
return"_HeroFlightManifest("+p+" tag: "+n+" from route: "+m+" to route: "+l+" with hero: "+o+" to "+s+")"+r}}
A.kr.prototype={
Ud(a){var s,r,q,p,o=this,n=o.c
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
return A.hk(s,new A.aic(o),n)},
Hk(a){var s,r=this,q=a===B.Z
if(q||a===B.R){s=r.e
s===$&&A.b()
s.saT(0,null)
r.r.nd(0)
r.r=null
s=r.f
s===$&&A.b()
s.f.mz(q)
r.f.r.mz(a===B.R)
r.a.$1(r)
r.e.G(0,r.gMq())}},
Gh(a){var s=this,r=s.f
r===$&&A.b()
r=r.d.a
if((r==null?null:r.CW.a)!==!0){s.Hk(a)
return}if(s.x)return
r.toString
s.x=!0
r.CW.Z(0,new A.aid(s,r))},
a7J(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(!h.w){s=h.f
s===$&&A.b()
s=s.r.c!=null}else s=!1
if(s){s=h.f
s===$&&A.b()
r=t.Qv.a(s.r.c.ga6())}else r=null
if(r!=null&&r.b!=null&&r.k3!=null){s=h.f
s===$&&A.b()
s=$.ar.an$.z.i(0,s.e.k2)
s=s==null?null:s.ga6()
q=A.cN(r.bM(0,t.Qv.a(s)),B.j)}else q=null
s=q!=null
if(s&&isFinite(q.a)&&isFinite(q.b)){p=h.b
p===$&&A.b()
p=p.b
if(!J.h(q,new A.r(p.a,p.b))){p=h.b
o=p.b
n=o.c
m=o.a
l=o.d
o=o.b
k=q.a
j=q.b
i=h.f
i===$&&A.b()
h.b=i.oQ(p.a,new A.E(k,j,k+(n-m),j+(l-o)))}}else{p=h.d
if(p.gb6(p)===B.Z){p=h.e
p===$&&A.b()
o=$.aAs()
n=p.gq(p)
m=A.o(o).h("fB<ah.T>")
h.d=new A.O(t.m.a(p),new A.fB(new A.ff(new A.c4(n,1,B.am)),o,m),m.h("O<ah.T>"))}}if(s)s=!(isFinite(q.a)&&isFinite(q.b))
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
return"HeroFlight(for: "+n+", from: "+q+", to: "+p+" "+A.i(o.c)+")"}}
A.aic.prototype={
$2(a,b){var s,r=null,q=this.a,p=q.b
p===$&&A.b()
s=q.e
s===$&&A.b()
s=p.ai(0,s)
s.toString
p=q.f
p===$&&A.b()
p=p.c
return A.en(p.b-s.d,new A.fk(!0,r,A.iy(b,q.d),r),r,r,s.a,p.a-s.c,s.b,r)},
$S:342}
A.aid.prototype={
$0(){var s,r=this.a
r.x=!1
this.b.CW.G(0,this)
s=r.e
s===$&&A.b()
r.Hk(s.gb6(s))},
$S:0}
A.vW.prototype={
p5(a,b){this.rt(b,a,B.c7,!1)},
p_(a,b){var s=$.id()
A.pQ(this)
if(!s.a.get(this).CW.a)this.rt(a,b,B.c8,!1)},
p7(a,b){var s=a.gl9()
if(s)this.rt(b,a,B.c7,!1)},
Kn(a,b){this.rt(a,b,B.c8,!0)},
kS(){var s,r,q,p=$.id()
A.pQ(this)
if(p.a.get(this).CW.a)return
p=this.b
p=p.gb0(p)
s=A.o(p).h("aU<p.E>")
r=A.aB(new A.aU(p,new A.a4y(),s),!1,s.h("p.E"))
for(p=r.length,q=0;q<p;++q)r[q].Gh(B.R)},
rt(a,b,c,d){var s
if(b!=a&&b instanceof A.iP&&a instanceof A.iP){switch(c.a){case 1:s=a.fy
if(s.gq(s)===0)return
break
case 0:s=b.fy
if(s.gq(s)===1)return
break}if(d)if(c===B.c8){b.gn3()
s=!0}else s=!1
else s=!1
if(s)this.Ig(a,b,c,d)
else{s=b.fy
b.suL(s.gq(s)===0)
$.ar.cy$.push(new A.a4x(this,a,b,c,d))}}},
Ig(b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=null
b4.suL(!1)
s=$.id()
A.pQ(b1)
s=s.a.get(b1)
r=s==null
if(r)q=b2
else{p=s.d
p===$&&A.b()
q=p.gbv()}if(r||q==null)return
o=s.c.ga6()
if(!(o instanceof A.H))return
n=$.ar.an$.z.i(0,b3.k2)
m=n!=null?A.auG(n,b6,s):B.Aq
l=$.ar.an$.z.i(0,b4.k2)
k=l!=null?A.auG(l,b6,s):B.Aq
for(s=m.geK(m),s=s.gae(s),r=b1.gV6(),p=b1.a,j=b1.b,i=t.af,h=b1.gXo(),g=t.A,f=t.R,e=t.u,d=t.fy,c=t.H7,b=t.m,a=c.h("O<ah.T>"),a0=t.k2;s.t();){a1=s.gJ(s)
a2=a1.gd1(a1)
a3=a1.gq(a1)
a4=k.i(0,a2)
a5=j.i(0,a2)
if(a4==null)a6=b2
else{a1=o.k3
a1.toString
a4.a.toString
a3.a.toString
a6=new A.aib(b5,q,a1,b3,b4,a3,a4,p,r,b6,a5!=null)}if(a6!=null&&a6.glb()){k.A(0,a2)
if(a5!=null){a1=a5.f
a1===$&&A.b()
a7=a1.a
if(a7===B.c7&&a6.a===B.c8){a1=a5.e
a1===$&&A.b()
a1.saT(0,new A.fv(a6.gbY(a6),new A.bx(A.a([],g),f),0))
a1=a5.b
a1===$&&A.b()
a5.b=new A.yd(a1,a1.b,a1.a,a0)}else{a7=a7===B.c8&&a6.a===B.c7
a8=a5.e
if(a7){a8===$&&A.b()
a1=a6.gbY(a6)
a7=a5.f
a7=a7.gbY(a7)
a7=a7.gq(a7)
a8.saT(0,new A.O(b.a(a1),new A.ad(a7,1,c),a))
a1=a5.f
a7=a1.f
a8=a6.r
if(a7!==a8){a7.mz(!0)
a8.vY()
a1=a5.f
a7=a5.b
a7===$&&A.b()
a5.b=a1.oQ(a7.b,a6.gvk())}else{a7=a5.b
a7===$&&A.b()
a5.b=a1.oQ(a7.b,a7.a)}}else{a7=a5.b
a7===$&&A.b()
a8===$&&A.b()
a5.b=a1.oQ(a7.ai(0,a8),a6.gvk())
a5.c=null
a1=a6.a
a7=a5.e
if(a1===B.c8)a7.saT(0,new A.fv(a6.gbY(a6),new A.bx(A.a([],g),f),0))
else a7.saT(0,a6.gbY(a6))
a5.f.f.mz(!0)
a5.f.r.mz(!0)
a6.f.vZ(a1===B.c7)
a6.r.vY()
a1=a5.r.f.gbv()
if(a1!=null)a1.GU()}}a5.f=a6}else{a1=new A.kr(h,B.de)
a7=A.a([],g)
a8=new A.bx(a7,f)
a9=new A.xO(a8,new A.bx(A.a([],e),d),0)
a9.a=B.R
a9.b=0
a9.aS()
a8.b=!0
a7.push(a1.gWR())
a1.e=a9
a1.f=a6
switch(a6.a.a){case 1:a9.saT(0,new A.fv(a6.gbY(a6),new A.bx(A.a([],g),f),0))
b0=!1
break
case 0:a9.saT(0,a6.gbY(a6))
b0=!0
break
default:b0=b2}a7=a1.f
a1.b=a7.oQ(a7.gLa(),a1.f.gvk())
a1.f.f.vZ(b0)
a1.f.r.vY()
a7=a1.f
a8=new A.oC(!1,$.bR())
a8.b7$=!0
a8=new A.fr(a1.gUc(),!1,a8,new A.bB(b2,i))
a1.r=a8
a7.b.AJ(0,a8)
a8=a1.e
a8.aS()
a8=a8.bm$
a8.b=!0
a8.a.push(a1.gMq())
j.k(0,a2,a1)}}else if(a5!=null)a5.w=!0}for(s=J.aF(k.gb0(k));s.t();)s.gJ(s).KF()},
Xp(a){var s=a.f
s===$&&A.b()
this.b.A(0,s.f.a.c)},
V7(a,b,c,d,e){var s,r,q=e.f
q.toString
t.rA.a(q)
s=A.dM(e)
r=A.dM(d)
if(s==null||r==null)return q.e
return A.hk(b,new A.a4w(s,c,r.f,s.f,b,q),null)}}
A.a4y.prototype={
$1(a){var s=a.f
s===$&&A.b()
if(s.y)if(s.a===B.c8){s=a.e
s===$&&A.b()
s=s.gb6(s)===B.R}else s=!1
else s=!1
return s},
$S:345}
A.a4x.prototype={
$1(a){var s=this
s.a.Ig(s.b,s.c,s.d,s.e)},
$S:2}
A.a4w.prototype={
$2(a,b){var s=this,r=s.c,q=s.d,p=s.e
r=s.b===B.c7?new A.vi(r,q).bi(0,p.gq(p)):new A.vi(q,r).bi(0,p.gq(p))
return new A.el(s.a.zA(r),s.f.e,null)},
$S:346}
A.pZ.prototype={
H(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.a4(t.I)
f.toString
s=f.w
r=A.auK(a)
q=this.d
if(q==null)q=r.a
p=r.b
o=r.c
n=r.d
m=r.e
f=this.c
if(f==null)return A.dU(g,A.cv(g,q,q),!1,g,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)
l=r.r
k=l==null?g:A.J(l,0,1)
if(k==null)k=1
j=this.x
if(j==null){l=r.f
l.toString
j=l}if(k!==1)j=A.b7(B.d.b5(255*((j.gq(j)>>>24&255)/255*k)),j.gq(j)>>>16&255,j.gq(j)>>>8&255,j.gq(j)&255)
l=A.e5(f.a)
i=A.a([],t.Wj)
if(p!=null)i.push(new A.ld("FILL",p))
if(o!=null)i.push(new A.ld("wght",o))
if(n!=null)i.push(new A.ld("GRAD",n))
if(m!=null)i.push(new A.ld("opsz",m))
h=A.avO(g,g,B.YA,g,g,!0,g,A.eA(g,A.aJ(g,g,j,g,g,g,g,g,"MaterialIcons",g,g,q,g,i,g,g,g,!1,g,g,g,g,g,r.w,g,g),l),B.bp,s,g,1,B.aQ)
if(f.d)switch(s.a){case 0:f=new A.aW(new Float64Array(16))
f.c1()
f.fZ(0,-1,1,1)
h=A.ea(B.p,h,f,!1)
break
case 1:break}return A.dU(g,new A.vr(!0,A.cv(A.bM(h,g,g),q,q),g),!1,g,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)}}
A.q_.prototype={
l(a,b){var s
if(b==null)return!1
if(J.a1(b)!==A.D(this))return!1
if(b instanceof A.q_)if(b.a===this.a)s=b.d===this.d
else s=!1
else s=!1
return s},
gu(a){return A.Y(this.a,"MaterialIcons",null,this.d,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
j(a){return"IconData(U+"+B.b.i7(B.f.j6(this.a,16).toUpperCase(),5,"0")+")"}}
A.nr.prototype={
cj(a){return!this.w.l(0,a.w)}}
A.a5f.prototype={
$1(a){return A.aqI(this.c,A.auJ(a).cn(this.b),this.a)},
$S:347}
A.cS.prototype={
oP(a,b,c,d,e,f,g,h){var s,r=this,q=g==null?r.a:g,p=b==null?r.b:b,o=h==null?r.c:h,n=c==null?r.d:c,m=e==null?r.e:e,l=a==null?r.f:a
if(d==null){s=r.r
s=s==null?null:A.J(s,0,1)}else s=d
return new A.cS(q,p,o,n,m,l,s,f==null?r.w:f)},
hU(a){return this.oP(a,null,null,null,null,null,null,null)},
cn(a){var s=a.r
s=s==null?null:A.J(s,0,1)
return this.oP(a.f,a.b,a.d,s,a.e,a.w,a.a,a.c)},
a1(a){return this},
l(a,b){var s,r,q=this
if(b==null)return!1
if(J.a1(b)!==A.D(q))return!1
if(b instanceof A.cS)if(b.a==q.a)if(b.b==q.b)if(b.c==q.c)if(b.d==q.d)if(b.e==q.e)if(J.h(b.f,q.f)){s=b.r
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
A.R2.prototype={}
A.lj.prototype={
T(){return new A.AE(B.i)}}
A.AE.prototype={
a0(){var s=this
s.ad()
$.ar.bc$.push(s)
s.z=new A.GH(s)},
m(){var s,r=this
B.c.A($.ar.bc$,r)
r.a11()
s=r.at
if(s!=null)s.m()
s=r.z
s===$&&A.b()
s.a=null
r.yn(null)
r.aj()},
bf(){var s,r=this
r.a1w()
r.yr()
s=r.c
s.toString
if(A.awj(s))r.YZ()
else r.Ij(!0)
r.cS()},
b4(a){var s,r,q=this
q.bA(a)
if(q.r&&q.a.e==null!==(a.e==null)){s=q.o_()
r=q.d
r.toString
r.Z(0,q.G4(!0))
q.d.G(0,s)}if(!q.a.c.l(0,a.c))q.yr()},
eQ(){this.yr()
this.Rm()},
a1w(){var s=this.c
s.toString
s=A.dM(s)
s=s==null?null:s.z
if(s==null){s=$.abv.Ae$
s===$&&A.b()
s=(s.a&2)!==0}this.w=s},
yr(){var s,r,q,p,o=this,n=o.z
n===$&&A.b()
s=o.a
r=s.c
q=o.c
q.toString
p=s.r
if(p!=null&&s.w!=null){p.toString
s=s.w
s.toString
s=new A.L(p,s)}else s=null
o.a1H(new A.yp(n,r,t.JE).a1(A.asv(q,s)))},
G4(a){var s,r=this,q=r.ax
if(q==null||a){r.as=r.Q=null
q=r.a
s=q.e==null?null:r.gXt()
q=q.f!=null||!1?new A.ait(r):null
q=r.ax=new A.dL(r.gXv(),s,q)}q.toString
return q},
o_(){return this.G4(!1)},
Xw(a,b){this.a3(new A.aiv(this,a,b))},
Xu(a){this.a3(new A.aiu(this,a))},
yn(a){var s=this.e
$.bN.cy$.push(new A.aiw(s))
this.e=a},
a1H(a){var s,r,q=this,p=q.d
if(p==null)s=null
else{s=p.a
if(s==null)s=p}r=a.a
if(s===(r==null?a:r))return
if(q.r){p.toString
p.G(0,q.o_())}q.a.toString
q.a3(new A.aix(q))
q.a3(new A.aiy(q))
q.d=a
if(q.r)a.Z(0,q.o_())},
YZ(){var s,r=this
if(r.r)return
s=r.d
s.toString
s.Z(0,r.o_())
s=r.at
if(s!=null)s.m()
r.at=null
r.r=!0},
Ij(a){var s,r=this
if(!r.r)return
if(a)if(r.at==null){s=r.d
s=(s==null?null:s.a)!=null}else s=!1
else s=!1
if(s)r.at=r.d.a.n0()
s=r.d
s.toString
s.G(0,r.o_())
r.r=!1},
a11(){return this.Ij(!1)},
H(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.Q
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
g=new A.M_(r,q,o,n,d,s,e,p.z,m,l,k,j,e,i,h,!1,e)
g=A.dU(e,g,!1,e,!1,e,e,e,!0,"",e,e,e,e,e,e,e,e,e,e,e)
d=p.d
if(d!=null)g=d.$4(a,g,f.x,f.y)
d=f.a.e
return d!=null?d.$3(a,g,f.f):g}}
A.ait.prototype={
$2(a,b){var s=this.a
s.a3(new A.ais(s,a,b))},
$S:348}
A.ais.prototype={
$0(){var s=this.a
s.Q=this.b
s.as=this.c},
$S:0}
A.aiv.prototype={
$0(){var s,r=this.a
r.yn(this.b)
r.as=r.Q=r.f=null
s=r.x
r.x=s==null?0:s+1
r.y=B.oS.Of(r.y,this.c)},
$S:0}
A.aiu.prototype={
$0(){var s=this.a
s.f=this.b
s.as=s.Q=null},
$S:0}
A.aiw.prototype={
$1(a){var s=this.a
if(s!=null)s.a.m()
return null},
$S:2}
A.aix.prototype={
$0(){this.a.yn(null)},
$S:0}
A.aiy.prototype={
$0(){var s=this.a
s.x=s.f=null
s.y=!1},
$S:0}
A.VS.prototype={}
A.Gt.prototype={
d2(a){var s=A.a_4(this.a,this.b,a)
s.toString
return s}}
A.vi.prototype={
d2(a){var s=A.aqr(this.a,this.b,a)
s.toString
return s}}
A.mL.prototype={
d2(a){return A.ph(this.a,this.b,a)}}
A.ot.prototype={
d2(a){var s=A.bl(this.a,this.b,a)
s.toString
return s}}
A.Ik.prototype={}
A.q4.prototype={
gks(){var s,r,q=this,p=q.d
if(p===$){s=q.a.d
r=A.be(null,s,null,null,q)
q.d!==$&&A.bu()
q.d=r
p=r}return p},
gh2(){var s,r=this,q=r.e
if(q===$){s=r.gks()
q=r.e=A.b8(r.a.c,s,null)}return q},
a0(){var s,r=this
r.ad()
s=r.gks()
s.aS()
s=s.ca$
s.b=!0
s.a.push(new A.a5F(r))
r.Fr()},
b4(a){var s,r=this
r.bA(a)
if(r.a.c!==a.c){r.gh2().m()
s=r.gks()
r.e=A.b8(r.a.c,s,null)}r.gks().e=r.a.d
if(r.Fr()){r.py(new A.a5E(r))
s=r.gks()
s.sq(0,0)
s.d_(0)}},
m(){this.gh2().m()
this.gks().m()
this.RA()},
a1K(a,b){if(a==null)return
a.szl(a.ai(0,this.gh2()))
a.sb_(0,b)},
Fr(){var s={}
s.a=!1
this.py(new A.a5D(s,this))
return s.a}}
A.a5F.prototype={
$1(a){switch(a.a){case 3:this.a.a.toString
break
case 0:case 1:case 2:break}},
$S:4}
A.a5E.prototype={
$3(a,b,c){this.a.a1K(a,b)
return a},
$S:129}
A.a5D.prototype={
$3(a,b,c){var s
if(b!=null){if(a==null)a=c.$1(b)
s=a.b
if(!J.h(b,s==null?a.a:s))this.a.a=!0
else if(a.b==null)a.sb_(0,a.a)}else a=null
return a},
$S:129}
A.pb.prototype={
a0(){this.PF()
var s=this.gks()
s.aS()
s=s.bm$
s.b=!0
s.a.push(this.gWP())},
WQ(){this.a3(new A.Xw())}}
A.Xw.prototype={
$0(){},
$S:0}
A.tW.prototype={
T(){return new A.OW(null,null,B.i)}}
A.OW.prototype={
py(a){this.CW=t.Dh.a(a.$3(this.CW,this.a.w,new A.ag7()))},
H(a){var s,r=this.CW
r.toString
s=this.gh2()
s=r.bi(0,s.gq(s))
return A.pD(this.a.r,null,B.cr,!0,s,null,null,B.aQ)}}
A.ag7.prototype={
$1(a){return new A.ot(t.em.a(a),null)},
$S:350}
A.tX.prototype={
T(){return new A.OX(null,null,B.i)}}
A.OX.prototype={
py(a){var s=this,r=s.CW
s.a.toString
s.CW=t.eJ.a(a.$3(r,B.aR,new A.ag8()))
s.cx=t.ir.a(a.$3(s.cx,s.a.z,new A.ag9()))
r=t.YJ
s.cy=r.a(a.$3(s.cy,s.a.Q,new A.aga()))
s.db=r.a(a.$3(s.db,s.a.at,new A.agb()))},
H(a){var s,r,q,p,o,n=this,m=n.a,l=m.w
m=m.x
s=n.CW
s.toString
r=n.gh2()
r=s.bi(0,r.gq(r))
s=n.cx
s.toString
s=s.ai(0,n.gh2())
q=n.a.Q
p=n.db
p.toString
o=n.gh2()
o=p.bi(0,o.gq(o))
o.toString
return new A.LE(l,m,r,s,q,o,n.a.r,null)}}
A.ag8.prototype={
$1(a){return new A.mL(t.m_.a(a),null)},
$S:351}
A.ag9.prototype={
$1(a){return new A.ad(A.WH(a),null,t.H7)},
$S:141}
A.aga.prototype={
$1(a){return new A.io(t.n8.a(a),null)},
$S:45}
A.agb.prototype={
$1(a){return new A.io(t.n8.a(a),null)},
$S:45}
A.t4.prototype={
m(){var s=this,r=s.aa$
if(r!=null)r.G(0,s.gc8())
s.aa$=null
s.aj()},
aV(){this.bd()
this.b8()
this.c9()}}
A.ll.prototype={
c_(a){var s=A.hB(t.h,t.X)
return new A.w4(s,this,B.ab,A.o(this).h("w4<ll.T>"))}}
A.w4.prototype={
Nq(a,b){var s=this.bg,r=this.$ti,q=r.h("cu<1>?").a(s.i(0,a))
if(q!=null&&q.gO(q))return
s.k(0,a,A.dc(r.c))},
Mg(a,b){var s,r=this.$ti,q=r.h("cu<1>?").a(this.bg.i(0,b))
if(q==null)return
if(!q.gO(q)){s=this.f
s.toString
s=r.h("ll<1>").a(s).a9t(a,q)
r=s}else r=!0
if(r)b.bf()}}
A.iE.prototype={
cj(a){return a.f!==this.f},
c_(a){var s=new A.t5(A.hB(t.h,t.X),this,B.ab,A.o(this).h("t5<iE.T>"))
this.f.Z(0,s.gxO())
return s}}
A.t5.prototype={
bo(a,b){var s,r,q=this,p=q.f
p.toString
s=q.$ti.h("iE<1>").a(p).f
r=b.f
if(s!==r){p=q.gxO()
s.G(0,p)
r.Z(0,p)}q.Qr(0,b)},
be(){var s,r=this
if(r.bH){s=r.f
s.toString
r.DR(r.$ti.h("iE<1>").a(s))
r.bH=!1}return r.Qq()},
Ys(){this.bH=!0
this.eN()},
n5(a){this.DR(a)
this.bH=!1},
lo(){var s=this,r=s.f
r.toString
s.$ti.h("iE<1>").a(r).f.G(0,s.gxO())
s.w8()}}
A.Il.prototype={}
A.l4.prototype={
c_(a){return new A.t7(this,B.ab,A.o(this).h("t7<l4.0>"))}}
A.t7.prototype={
ga6(){return this.$ti.h("fu<1,z>").a(A.br.prototype.ga6.call(this))},
b1(a){var s=this.p1
if(s!=null)a.$1(s)},
iN(a){this.p1=null
this.kl(a)},
fo(a,b){var s=this
s.qQ(a,b)
s.$ti.h("fu<1,z>").a(A.br.prototype.ga6.call(s)).Cr(s.gGM())},
bo(a,b){var s,r=this
r.lK(0,b)
s=r.$ti.h("fu<1,z>")
s.a(A.br.prototype.ga6.call(r)).Cr(r.gGM())
s=s.a(A.br.prototype.ga6.call(r))
s.u1$=!0
s.a7()},
hp(){var s=this.$ti.h("fu<1,z>").a(A.br.prototype.ga6.call(this))
s.u1$=!0
s.a7()
this.wg()},
lo(){this.$ti.h("fu<1,z>").a(A.br.prototype.ga6.call(this)).Cr(null)
this.QF()},
YV(a){this.r.oE(this,new A.aiQ(this,a))},
iR(a,b){this.$ti.h("fu<1,z>").a(A.br.prototype.ga6.call(this)).saQ(a)},
iV(a,b,c){},
j2(a,b){this.$ti.h("fu<1,z>").a(A.br.prototype.ga6.call(this)).saQ(null)}}
A.aiQ.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{o=k.a
n=o.f
n.toString
j=o.$ti.h("l4<1>").a(n).c.$2(o,k.b)
o.f.toString}catch(m){s=A.ak(m)
r=A.az(m)
o=k.a
l=A.vp(A.axQ(A.bw("building "+o.f.j(0)),s,r,new A.aiR(o)))
j=l}try{o=k.a
o.p1=o.dD(o.p1,j,null)}catch(m){q=A.ak(m)
p=A.az(m)
o=k.a
l=A.vp(A.axQ(A.bw("building "+o.f.j(0)),q,p,new A.aiS(o)))
j=l
o.p1=o.dD(null,j,o.d)}},
$S:0}
A.aiR.prototype={
$0(){var s=A.a([],t.E)
return s},
$S:12}
A.aiS.prototype={
$0(){var s=A.a([],t.E)
return s},
$S:12}
A.fu.prototype={
Cr(a){if(J.h(a,this.Ai$))return
this.Ai$=a
this.a7()}}
A.IA.prototype={
aH(a){var s=new A.Tc(null,!0,null,null,A.ay())
s.aK()
return s}}
A.Tc.prototype={
ce(a){return B.S},
bx(){var s=this,r=t.k,q=r.a(A.z.prototype.ga_.call(s))
if(s.u1$||!r.a(A.z.prototype.ga_.call(s)).l(0,s.KS$)){s.KS$=r.a(A.z.prototype.ga_.call(s))
s.u1$=!1
r=s.Ai$
r.toString
s.AN(r,A.o(s).h("fu.0"))}r=s.B$
if(r!=null){r.cC(q,!0)
r=s.B$.k3
r.toString
s.k3=q.bu(r)}else s.k3=new A.L(A.J(1/0,q.a,q.b),A.J(1/0,q.c,q.d))},
eH(a){var s=this.B$
if(s!=null)return s.j8(a)
return this.wd(a)},
d0(a,b){var s=this.B$
s=s==null?null:s.c5(a,b)
return s===!0},
aG(a,b){var s=this.B$
if(s!=null)a.eP(s,b)}}
A.W5.prototype={
aC(a){var s
this.eB(a)
s=this.B$
if(s!=null)s.aC(a)},
au(a){var s
this.dU(0)
s=this.B$
if(s!=null)s.au(0)}}
A.W6.prototype={}
A.ti.prototype={}
A.anZ.prototype={
$1(a){return this.a.a=a},
$S:29}
A.ao_.prototype={
$1(a){return a.b},
$S:352}
A.ao0.prototype={
$1(a){var s,r,q,p
for(s=J.aQ(a),r=this.a,q=this.b,p=0;p<s.gp(a);++p)q.k(0,A.aM(A.o(r.a[p].a).h("df.T")),s.i(a,p))
return q},
$S:353}
A.df.prototype={
j(a){return"LocalizationsDelegate["+A.aM(A.o(this).h("df.T")).j(0)+"]"}}
A.VD.prototype={
mZ(a){return!0},
dd(a,b){return new A.bC(B.Ev,t.E8)},
lA(a){return!1},
j(a){return"DefaultWidgetsLocalizations.delegate(en_US)"}}
A.Gz.prototype={
gbJ(){return B.y},
$ikl:1}
A.AS.prototype={
cj(a){return this.w!==a.w}}
A.wy.prototype={
T(){return new A.Rv(new A.bB(null,t.C),A.x(t.n,t.z),B.i)}}
A.Rv.prototype={
a0(){this.ad()
this.dd(0,this.a.c)},
TU(a){var s,r,q,p,o,n,m=this.a.d,l=a.d
if(m.length!==l.length)return!0
s=A.a(m.slice(0),A.ao(m))
r=A.a(l.slice(0),A.ao(l))
for(q=0;q<s.length;++q){p=s[q]
o=r[q]
n=p instanceof A.bZ?A.d7(p):null
m=A.aM(n==null?A.b3(p):n)
n=o instanceof A.bZ?A.d7(o):null
if(m===A.aM(n==null?A.b3(o):n)){p.lA(o)
m=!1}else m=!0
if(m)return!0}return!1},
b4(a){var s,r=this
r.bA(a)
if(r.a.c.l(0,a.c)){r.a.toString
s=r.TU(a)}else s=!0
if(s)r.dd(0,r.a.c)},
dd(a,b){var s,r=this,q={},p=r.a.d,o=p.length
if(o===0){r.f=b
return}q.a=null
s=A.aKs(b,p).aJ(new A.aj_(q),t.e3)
q=q.a
if(q!=null){r.e=q
r.f=b}else{++$.lS.bC$
s.aJ(new A.aj0(r,b),t.H)}},
gIs(){return t.Uh.a(J.b0(this.e,B.a23)).gbJ()},
H(a){var s,r,q,p=this,o=null
if(p.f==null)return B.ed
s=p.gIs()
p.f.toString
r=p.e
q=p.gIs()
return A.dU(o,new A.AS(p,r,A.aqo(p.a.e,q),p.d),!1,o,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,s,o,o)}}
A.aj_.prototype={
$1(a){return this.a.a=a},
$S:354}
A.aj0.prototype={
$1(a){var s=this.a
if(s.c!=null)s.a3(new A.aiZ(s,a,this.b))
$.lS.Jt()},
$S:355}
A.aiZ.prototype={
$0(){var s=this.a
s.e=this.b
s.f=this.c},
$S:0}
A.xq.prototype={
I(){return"Orientation."+this.b}}
A.jT.prototype={
ty(a,b,c,d,e){var s=this,r=c==null?s.c:c,q=a==null?s.f:a,p=e==null?s.r:e,o=d==null?s.e:d
return new A.jT(s.a,s.b,r,s.d,o,q,p,s.w,!1,s.y,s.z,s.Q,s.as,s.at,s.ax,s.ay,s.ch)},
zB(a){return this.ty(null,null,a,null,null)},
zA(a){return this.ty(a,null,null,null,null)},
a3R(a,b){return this.ty(null,null,null,a,b)},
a3Q(a,b){return this.ty(a,null,null,null,b)},
MU(a,b,c,d){var s,r,q,p,o,n,m=this,l=null
if(!(b||d||c||a))return m
s=m.f
r=b?0:l
q=d?0:l
p=c?0:l
r=s.ms(a?0:l,r,p,q)
q=m.r
p=b?Math.max(0,q.a-s.a):l
o=d?Math.max(0,q.b-s.b):l
n=c?Math.max(0,q.c-s.c):l
return m.a3Q(r,q.ms(a?Math.max(0,q.d-s.d):l,p,n,o))},
a8y(a){var s=this,r=null,q=s.r,p=s.e,o=Math.max(0,q.d-p.d)
q=q.ms(o,r,r,r)
return s.a3R(p.ms(0,r,r,r),q)},
l(a,b){var s=this
if(b==null)return!1
if(J.a1(b)!==A.D(s))return!1
return b instanceof A.jT&&b.a.l(0,s.a)&&b.b===s.b&&b.c===s.c&&b.d===s.d&&b.f.l(0,s.f)&&b.r.l(0,s.r)&&b.e.l(0,s.e)&&b.Q===s.Q&&b.as===s.as&&b.z===s.z&&b.y===s.y&&b.at===s.at&&b.ax===s.ax&&b.ay.l(0,s.ay)&&A.d8(b.ch,s.ch)},
gu(a){var s=this
return A.Y(s.a,s.b,s.c,s.d,s.f,s.r,s.e,!1,s.Q,s.as,s.z,s.y,s.at,s.ax,s.ay,A.dv(s.ch),B.a,B.a,B.a,B.a)},
j(a){var s=this
return"MediaQueryData("+B.c.bb(A.a(["size: "+s.a.j(0),"devicePixelRatio: "+B.d.N(s.b,1),"textScaleFactor: "+B.d.N(s.c,1),"platformBrightness: "+s.d.j(0),"padding: "+s.f.j(0),"viewPadding: "+s.r.j(0),"viewInsets: "+s.e.j(0),"alwaysUse24HourFormat: false","accessibleNavigation: "+s.y,"highContrast: "+s.Q,"disableAnimations: "+s.as,"invertColors: "+s.z,"boldText: "+s.at,"navigationMode: "+s.ax.b,"gestureSettings: "+s.ay.j(0),"displayFeatures: "+A.i(s.ch)],t.s),", ")+")"}}
A.el.prototype={
cj(a){return!this.f.l(0,a.f)}}
A.KT.prototype={
I(){return"NavigationMode."+this.b}}
A.AZ.prototype={
T(){return new A.RD(B.i)}}
A.RD.prototype={
a0(){this.ad()
$.ar.bc$.push(this)},
tG(){this.a3(new A.ajl())},
Kl(){this.a3(new A.ajn())},
Kk(){this.a3(new A.ajm())},
H(a){var s
$.ar.toString
s=A.av9($.cH())
return new A.el(s,this.a.c,null)},
m(){B.c.A($.ar.bc$,this)
this.aj()}}
A.ajl.prototype={
$0(){},
$S:0}
A.ajn.prototype={
$0(){},
$S:0}
A.ajm.prototype={
$0(){},
$S:0}
A.VU.prototype={}
A.x0.prototype={
H(a){var s,r=null
switch(A.mw().a){case 0:case 1:case 3:case 5:break
case 2:case 4:break}s=this.c
return A.aCi(new A.vr(!0,new A.RM(A.dU(r,A.x2(new A.hp(B.n_,s==null?r:new A.uE(s,r,r),r),B.ms,r,r,r),!1,r,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),new A.a7i(this,a),r),r))}}
A.a7i.prototype={
$0(){A.O1(B.Yi)},
$S:0}
A.rD.prototype={
fO(a){if(this.y1==null)return!1
return this.nG(a)},
Li(a){},
Lj(a,b){var s=this.y1
if(s!=null)s.$0()},
uh(a,b,c){}}
A.ajr.prototype={
zf(a){a.sjY(this.a)}}
A.P1.prototype={
K_(){var s=t.S,r=A.dc(s)
return new A.rD(B.bd,18,B.bJ,A.x(s,t.o),r,null,null,A.x(s,t._))},
Ly(a){a.y1=this.a}}
A.RM.prototype={
H(a){var s=this.d
return new A.lP(this.c,A.aZ([B.a24,new A.P1(s)],t.n,t.xR),B.aL,!1,new A.ajr(s),null)}}
A.o4.prototype={
I(){return"RoutePopDisposition."+this.b}}
A.bG.prototype={
guT(){return B.tL},
i3(){},
p0(){var s=A.arv()
s.aJ(new A.aaj(this),t.H)
return s},
oX(){var s=this.a
if(s==null)s=null
else{s.a.toString
s=!0}if(s===!0)A.arv().aJ(new A.aai(this),t.H)},
zW(a){},
fV(){var s=0,r=A.a5(t.oj),q,p=this
var $async$fV=A.Z(function(a,b){if(a===1)return A.a2(b,r)
while(true)switch(s){case 0:q=p.gAQ()?B.Wi:B.Ch
s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$fV,r)},
gNy(){return!1},
kR(a){this.a4u(a)
return!0},
a4u(a){this.d.bT(0,null)},
mw(a){},
oY(a){},
oZ(a){},
oG(){},
tr(){},
m(){this.a=null},
gl9(){var s,r=this.a
if(r==null)return!1
r=r.e
r=new A.bI(r,A.ao(r).h("bI<1,dD?>"))
s=r.n2(r,new A.aam(),new A.aan())
if(s==null)return!1
return s.a===this},
gAQ(){var s,r=this.a
if(r==null)return!1
r=r.e
r=new A.bI(r,A.ao(r).h("bI<1,dD?>"))
s=r.u9(r,new A.aao(),new A.aap())
if(s==null)return!1
return s.a===this},
gAD(){var s,r,q,p,o=this.a
if(o==null)return!1
for(o=o.e,s=o.length,r=0;r<s;++r){q=o[r]
if(q.a===this)return!1
p=q.d.a
if(p<=10&&p>=1)return!0}return!1},
ga6I(){var s=this.a
if(s==null)return!1
s=s.e
s=new A.bI(s,A.ao(s).h("bI<1,dD?>"))
s=s.u9(s,new A.aak(this),new A.aal())
s=s==null?null:s.gla()
return s===!0}}
A.aaj.prototype={
$1(a){var s,r=this.a.a
if(r==null)s=null
else{r.a.toString
s=!0}if(s===!0){r=r.x.ge0()
if(r!=null)r.ve()}},
$S:21}
A.aai.prototype={
$1(a){var s=this.a.a
if(s!=null){s=s.x.ge0()
if(s!=null)s.ve()}},
$S:21}
A.aam.prototype={
$1(a){return a!=null&&a.gla()},
$S:37}
A.aan.prototype={
$0(){return null},
$S:3}
A.aao.prototype={
$1(a){return a!=null&&a.gla()},
$S:37}
A.aap.prototype={
$0(){return null},
$S:3}
A.aak.prototype={
$1(a){return a!=null&&A.awS(this.a).$1(a)},
$S:37}
A.aal.prototype={
$0(){return null},
$S:3}
A.fZ.prototype={
j(a){var s=this.a
s=s==null?"none":'"'+s+'"'
return"RouteSettings("+s+", "+A.i(this.b)+")"}}
A.iL.prototype={
p5(a,b){},
p_(a,b){},
tI(a,b){},
p7(a,b){},
Kn(a,b){},
kS(){}}
A.nk.prototype={
cj(a){return a.f!=this.f}}
A.aah.prototype={}
A.Oq.prototype={}
A.Gy.prototype={}
A.xe.prototype={
T(){var s=null,r=A.a([],t.uD),q=$.bR(),p=t.Tp
return new A.fT(r,new A.QW(q),A.jR(s,p),A.jR(s,p),A.aqy(!0,"Navigator",!0,!0,s,s,!1),new A.yb(0,q,t.dZ),A.i1(!1),A.bd(t.S),s,A.x(t.yb,t.O),s,!0,s,s,s,B.i)},
a7B(a,b){return this.z.$2(a,b)}}
A.a7P.prototype={
$1(a){return a==null},
$S:357}
A.er.prototype={
I(){return"_RouteLifecycle."+this.b}}
A.RX.prototype={}
A.dD.prototype={
gd4(){var s,r
if(this.c){s=t.sd.a(this.a.b)
s.gd4()
r=A.i(s.gd4())
return"p+"+r}r=this.b
if(r!=null)return"r+"+r.gN4()
return null},
a5H(a,b,c,d){var s,r,q,p=this,o=p.d,n=p.a
n.a=b
n.i3()
s=p.d
if(s===B.DC||s===B.DD){r=n.p0()
p.d=B.DE
r.Nx(new A.al6(p,b))}else{n.zW(c)
p.d=B.d9}if(a)n.oY(null)
s=o===B.a3u||o===B.DD
q=b.r
if(s)q.dI(0,new A.Bc(n,d))
else q.dI(0,new A.tf(n,d))},
a5G(a,b){var s,r=this
r.d=B.a3q
s=r.a
if((s.d.a.a&30)!==0)return!0
if(!s.kR(r.w)){r.d=B.d9
return!1}r.w=null
return!0},
m(){var s,r,q,p,o,n,m={}
this.d=B.a3s
s=this.a
r=s.guT()
q=new A.al4()
p=new A.aU(r,q,A.ao(r).h("aU<1>"))
if(!p.gae(p).t())s.m()
else{m.a=p.gp(p)
for(s=B.c.gae(r),q=new A.rB(s,q);q.t();){r=s.gJ(s)
o=A.bc("listener")
n=new A.al5(m,this,r,o)
o.b=n
r.d.Z(0,n)}}},
ga9C(){var s=this.d.a
return s<=7&&s>=1},
gla(){var s=this.d.a
return s<=10&&s>=1}}
A.al6.prototype={
$0(){var s=this.a
if(s.d===B.DE){s.d=B.d9
this.b.xi()}},
$S:0}
A.al4.prototype={
$1(a){return a.d.a},
$S:358}
A.al5.prototype={
$0(){var s=this,r=s.a;--r.a
s.c.d.G(0,s.d.aL())
if(r.a===0)s.b.a.m()},
$S:0}
A.al7.prototype={
$1(a){return a.a===this.a},
$S:58}
A.mj.prototype={}
A.tf.prototype={
lf(a){a.p5(this.a,this.b)}}
A.te.prototype={
lf(a){a.p_(this.a,this.b)}}
A.Bb.prototype={
lf(a){a.tI(this.a,this.b)}}
A.Bc.prototype={
lf(a){a.p7(this.a,this.b)}}
A.fT.prototype={
a0(){var s,r,q,p,o=this
o.ad()
for(s=o.a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
$.id().a.set(p,o)}o.Q=o.a.x
s=o.c.kc(t.mS)
if(s==null)s=null
else{s=s.f
s.toString}t._I.a(s)
o.yO(s==null?null:s.f)
o.a.toString
B.fY.us("selectSingleEntryHistory",t.H)},
j3(a,b){var s,r,q,p,o,n,m=this
m.nc(m.as,"id")
s=m.f
m.nc(s,"history")
for(;r=m.e,r.length!==0;)r.pop().m()
m.d=new A.bB(null,t.ku)
B.c.L(r,s.N5(null,m))
m.a.toString
q=0
for(;!1;++q){p=B.P7[q]
r=m.c
r.toString
r=p.zG(r)
o=$.apN()
n=new A.dD(r,null,!0,B.mK,o,o,o)
m.e.push(n)
B.c.L(m.e,s.N5(n,m))}if(s.y==null){s=m.a
r=m.e
o=s.f
B.c.L(r,J.tS(s.a7B(m,o),new A.a7O(m),t.Ez))}m.xi()},
zY(a){var s,r=this
r.QO(a)
s=r.f
if(r.bw$!=null)s.bo(0,r.e)
else s.Y(0)},
gd4(){return this.a.y},
bf(){var s,r,q,p,o=this
o.RE()
s=o.c.a4(t.mS)
o.yO(s==null?null:s.f)
for(r=o.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.P)(r),++p)r[p].a.tr()},
yO(a){var s,r,q=this
if(q.z!=a){if(a!=null)$.id().a.set(a,q)
s=q.z
if(s==null)s=null
else{r=$.id()
A.pQ(s)
s=r.a.get(s)}if(s===q){s=$.id()
r=q.z
r.toString
s.a.set(r,null)}q.z=a
q.IQ()}},
IQ(){var s=this,r=s.z,q=s.a
if(r!=null)s.Q=B.c.W(q.x,A.a([r],t.tc))
else s.Q=q.x},
b4(a){var s,r,q,p,o=this
o.RF(a)
s=a.x
if(s!==o.a.x){for(r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
$.id().a.set(p,null)}for(s=o.a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
$.id().a.set(p,o)}o.IQ()}o.a.toString
for(s=o.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].a.tr()},
d8(){var s,r,q,p=this.Q
p===$&&A.b()
s=p.length
r=0
for(;r<p.length;p.length===s||(0,A.P)(p),++r){q=p[r]
$.id().a.set(q,null)}this.km()},
aV(){var s,r,q,p
this.RC()
s=this.Q
s===$&&A.b()
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
$.id().a.set(p,this)}},
m(){var s,r,q,p=this
p.yO(null)
p.x.m()
for(s=p.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].m()
p.RH()},
gEK(){var s,r,q,p=A.a([],t.wi)
for(s=this.e,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q)B.c.L(p,s[q].a.guT())
return p},
xj(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null
a.ay=!0
s=a.e
r=s.length-1
q=s[r]
p=r>0?s[r-1]:a0
o=A.a([],t.uD)
for(s=a.w,n=a.r,m=a0,l=m,k=!1,j=!1;r>=0;){switch(q.d.a){case 1:i=a.jj(r-1,A.asF())
h=i>=0?a.e[i]:a0
h=h==null?a0:h.a
g=q.a
g.a=a
g.i3()
q.d=B.a3t
n.dI(0,new A.tf(g,h))
continue
case 2:if(k||l==null){h=q.a
h.oX()
q.d=B.d9
if(l==null)h.oY(a0)
continue}break
case 3:case 4:case 6:h=p==null?a0:p.a
i=a.jj(r-1,A.asF())
g=i>=0?a.e[i]:a0
g=g==null?a0:g.a
q.a5H(l==null,a,h,g)
if(q.d===B.d9)continue
break
case 5:if(!j&&m!=null){q.a.mw(m)
q.f=m}j=!0
break
case 7:if(!j&&m!=null){q.a.mw(m)
q.f=m}k=!0
j=!0
break
case 8:i=a.jj(r,A.Dt())
h=i>=0?a.e[i]:a0
if(!q.a5G(a,h==null?a0:h.a))continue
if(!j){if(m!=null){q.a.mw(m)
q.f=m}m=q.a}h=q.a
i=a.jj(r,A.Dt())
g=i>=0?a.e[i]:a0
s.dI(0,new A.te(h,g==null?a0:g.a))
if(q.d===B.mL)continue
k=!0
break
case 11:break
case 9:h=q.a
h=h.d.a
if((h.a&30)!==0)A.N(A.ac("Future already completed"))
h.fv(a0)
q.w=null
q.d=B.a3p
continue
case 10:if(!j){if(m!=null)q.a.mw(m)
m=a0}i=a.jj(r,A.Dt())
h=i>=0?a.e[i]:a0
h=h==null?a0:h.a
q.d=B.a3r
if(q.x)s.dI(0,new A.Bb(q.a,h))
continue
case 12:if(!k&&l!=null)break
q.d=B.mL
continue
case 13:o.push(B.c.eq(a.e,r))
q=l
break
case 14:case 0:break}--r
f=r>0?a.e[r-1]:a0
l=q
q=p
p=f}a.VY()
a.W_()
a.a.toString
s=a.e
s=new A.bI(s,A.ao(s).h("bI<1,dD?>"))
e=s.n2(s,new A.a7I(),new A.a7J())
d=e==null?a0:e.a.b.a
if(d!=null&&d!==a.at){A.awc(d,!1,a0)
a.at=d}for(s=o.length,c=0;c<o.length;o.length===s||(0,A.P)(o),++c){q=o[c]
for(n=q.a.guT(),h=n.length,b=0;b<n.length;n.length===h||(0,A.P)(n),++b)J.aBW(n[b])
q.m()}if(a1){s=a.d
s===$&&A.b()
s=s.gbv()
if(s!=null)s.a8j(a.gEK())}if(a.bw$!=null)a.f.bo(0,a.e)
a.ay=!1},
xi(){return this.xj(!0)},
VY(){var s,r=this,q=r.Q
q===$&&A.b()
if(q.length===0){r.w.Y(0)
r.r.Y(0)
return}for(q=r.r;!q.gO(q);){s=q.e9(0)
B.c.V(r.Q,s.gpV())}for(q=r.w;!q.gO(q);){s=q.ne()
B.c.V(r.Q,s.gpV())}},
W_(){var s,r,q,p,o,n,m=this,l=null,k=m.e.length-1
for(;k>=0;){s=m.e[k]
r=s.d.a
if(!(r<=12&&r>=3)){--k
continue}q=m.Wu(k+1,A.ayY())
r=q==null
p=r?l:q.a
o=s.r
if(p!=o){if((r?l:q.a)==null){p=s.f
p=p!=null&&p===o}else p=!1
if(!p){p=s.a
p.oY(r?l:q.a)}s.r=r?l:q.a}--k
n=m.jj(k,A.ayY())
r=n>=0?m.e[n]:l
p=r==null
o=p?l:r.a
if(o!=s.e){o=s.a
o.oZ(p?l:r.a)
s.e=p?l:r.a}}},
G9(a,b){a=this.jj(a,b)
return a>=0?this.e[a]:null},
jj(a,b){while(!0){if(!(a>=0&&!b.$1(this.e[a])))break;--a}return a},
Wu(a,b){var s
while(!0){s=this.e
if(!(a<s.length&&!b.$1(s[a])))break;++a}s=this.e
return a<s.length?s[a]:null},
rJ(a,b,c,d){var s,r,q
if(b)this.a.toString
s=new A.fZ(a,c)
r=d.h("bG<0?>?")
q=r.a(this.a.r.$1(s))
return q==null&&!b?r.a(this.a.w.$1(s)):q},
yv(a,b,c){return this.rJ(a,!1,b,c)},
a81(a){var s=A.awR(a,B.DC,!1,null)
this.e.push(s)
this.xi()
this.EI(s.a)
return a.d.a},
v5(a){return this.a81(a,t.X)},
EI(a){this.Un()},
pQ(a){var s=0,r=A.a5(t.y),q,p=this,o,n,m
var $async$pQ=A.Z(function(b,c){if(b===1)return A.a2(c,r)
while(true)$async$outer:switch(s){case 0:m=p.e
m=new A.bI(m,A.ao(m).h("bI<1,dD?>"))
o=m.n2(m,new A.a7K(),new A.a7L())
if(o==null){q=!1
s=1
break}s=3
return A.a8(o.a.fV(),$async$pQ)
case 3:n=c
if(p.c==null){q=!0
s=1
break}m=p.e
m=new A.bI(m,A.ao(m).h("bI<1,dD?>"))
if(o!==m.n2(m,new A.a7M(),new A.a7N())){q=!0
s=1
break}switch(n.a){case 2:q=!1
s=1
break $async$outer
case 0:p.a7Y(a)
q=!0
s=1
break $async$outer
case 1:q=!0
s=1
break $async$outer}case 1:return A.a3(q,r)}})
return A.a4($async$pQ,r)},
M7(){return this.pQ(null,t.X)},
a7k(a){return this.pQ(a,t.X)},
Mw(a){var s=this,r=B.c.a6Y(s.e,A.asF())
if(r.c){s.a.toString
if(null.$2(r.a,a)&&r.d===B.d9)r.d=B.mM}else{r.w=a
r.d=B.mM}if(r.d===B.mM)s.xj(!1)
s.EI(r.a)},
a7Y(a){return this.Mw(a,t.X)},
hr(){return this.Mw(null,t.X)},
KW(a){var s,r=this,q=B.c.Lu(r.e,A.awS(a)),p=r.e[q]
if(p.c&&p.d.a<8){s=r.G9(q-1,A.Dt())
s=s==null?null:s.a
r.w.dI(0,new A.te(a,s))}p.d=B.mL
if(!r.ay)r.xj(!1)},
sJ5(a){this.ch=a
this.CW.sq(0,a>0)},
Km(){var s,r,q,p,o,n,m=this
m.sJ5(m.ch+1)
if(m.ch===1){s=m.jj(m.e.length-1,A.Dt())
r=m.e[s].a
q=!r.gNy()&&s>0?m.G9(s-1,A.Dt()).a:null
p=m.Q
p===$&&A.b()
o=p.length
n=0
for(;n<p.length;p.length===o||(0,A.P)(p),++n)p[n].Kn(r,q)}},
kS(){var s,r,q,p=this
p.sJ5(p.ch-1)
if(p.ch===0){s=p.Q
s===$&&A.b()
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.P)(s),++q)s[q].kS()}},
XN(a){this.cx.D(0,a.gc6())},
XV(a){this.cx.A(0,a.gc6())},
Un(){if($.bN.dy$===B.d0){var s=this.d
s===$&&A.b()
s=$.ar.an$.z.i(0,s)
this.a3(new A.a7H(s==null?null:s.u6(t.MY)))}s=this.cx
B.c.V(A.aB(s,!0,A.o(s).c),$.ar.ga2P())},
H(a){var s,r=this,q=null,p=r.gXU(),o=A.auA(a),n=r.bw$,m=r.d
m===$&&A.b()
r.a.toString
if(m.gbv()==null){s=r.gEK()
s=J.hF(s.slice(0),A.ao(s).c)}else s=B.tL
return new A.nk(q,A.qj(B.c9,new A.DG(!1,A.auz(A.HK(!0,q,A.afB(n,new A.qt(s,B.A,m)),q,q,q,r.x,!1,q,q,q,q,q,!0),o),q),p,r.gXM(),q,q,p),q)}}
A.a7O.prototype={
$1(a){var s,r,q=a.b.a
if(q!=null){s=this.a.as
r=s.y
if(r==null)r=s.$ti.h("cm.T").a(r)
s.QN(0,r+1)
q=new A.RR(r,q,null,B.mN)}else q=null
return A.awR(a,B.mK,!1,q)},
$S:361}
A.a7I.prototype={
$1(a){return a!=null&&a.gla()},
$S:37}
A.a7J.prototype={
$0(){return null},
$S:3}
A.a7K.prototype={
$1(a){return a!=null&&a.gla()},
$S:37}
A.a7L.prototype={
$0(){return null},
$S:3}
A.a7M.prototype={
$1(a){return a!=null&&a.gla()},
$S:37}
A.a7N.prototype={
$0(){return null},
$S:3}
A.a7H.prototype={
$0(){var s=this.a
if(s!=null)s.sJh(!0)},
$S:0}
A.tq.prototype={
I(){return"_RouteRestorationType."+this.b}}
A.Ts.prototype={
gLS(){return!0},
tu(){return A.a([this.a.a],t.f)}}
A.RR.prototype={
tu(){var s=this,r=s.RY(),q=A.a([s.c,s.d],t.f),p=s.e
if(p!=null)q.push(p)
B.c.L(r,q)
return r},
zG(a){var s=a.yv(this.d,this.e,t.z)
s.toString
return s},
gN4(){return this.c}}
A.arF.prototype={
gLS(){return!1},
tu(){A.aFV(this.d)},
zG(a){var s=a.c
s.toString
return this.d.$2(s,this.e)},
gN4(){return this.c}}
A.QW.prototype={
bo(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=c.y==null
if(a)c.y=A.x(t.N,t.UX)
s=t.f
r=A.a([],s)
q=c.y
q.toString
p=J.b0(q,null)
if(p==null)p=B.dC
o=A.x(t.ob,t.UX)
q=c.y
q.toString
n=J.aC1(J.DE(q))
for(q=a1.length,m=b,l=a,k=!0,j=0;j<a1.length;a1.length===q||(0,A.P)(a1),++j){i=a1[j]
if(i.d.a>7){h=i.a
h.c.sq(0,b)
continue}if(i.c){l=l||r.length!==J.bY(p)
h=r.length
if(h!==0){g=m==null?b:m.gd4()
o.k(0,g,r)
n.A(0,g)}k=i.gd4()!=null
h=i.a
f=k?i.gd4():b
h.c.sq(0,f)
if(k){r=A.a([],s)
h=c.y
h.toString
p=J.b0(h,i.gd4())
if(p==null)p=B.dC}else{r=B.dC
p=B.dC}m=i
continue}if(k){h=i.b
h=h==null?b:h.gLS()
k=h===!0}else k=!1
h=i.a
f=k?i.gd4():b
h.c.sq(0,f)
if(k){h=i.b
f=h.b
h=f==null?h.b=h.tu():f
if(!l){f=J.aQ(p)
e=f.gp(p)
d=r.length
l=e<=d||!J.h(f.i(p,d),h)}else l=!0
B.c.D(r,h)}}l=l||r.length!==J.bY(p)
c.VK(r,m,o,n)
if(l||n.gbP(n)){c.y=o
c.aI()}},
VK(a,b,c,d){var s,r=a.length
if(r!==0){s=b==null?null:b.gd4()
c.k(0,s,a)
d.A(0,s)}},
Y(a){if(this.y==null)return
this.y=null
this.aI()},
N5(a,b){var s,r,q,p,o,n=A.a([],t.uD)
if(this.y!=null)s=a!=null&&a.gd4()==null
else s=!0
if(s)return n
s=this.y
s.toString
r=J.b0(s,a==null?null:a.gd4())
if(r==null)return n
for(s=J.aF(r);s.t();){q=A.aIG(s.gJ(s))
p=q.zG(b)
o=$.apN()
n.push(new A.dD(p,q,!1,B.mK,o,o,o))}return n},
tA(){return null},
mS(a){a.toString
return J.atz(t.G.a(a),new A.aih(),t.ob,t.UX)},
Lx(a){this.y=a},
nk(){return this.y},
gmy(a){return this.y!=null}}
A.aih.prototype={
$2(a,b){return new A.aw(A.cF(a),A.fo(t.j.a(b),!0,t.K),t.qE)},
$S:362}
A.ajI.prototype={
$2(a,b){if(!a.a)a.G(0,b)},
$S:43}
A.Bd.prototype={
aV(){this.bd()
this.b8()
this.ed()},
m(){var s=this,r=s.aY$
if(r!=null)r.G(0,s.gdW())
s.aY$=null
s.aj()}}
A.Be.prototype={
b4(a){this.bA(a)
this.p9()},
bf(){var s,r,q,p,o=this
o.cS()
s=o.bw$
r=o.gng()
q=o.c
q.toString
q=A.qS(q)
o.fJ$=q
p=o.mg(q,r)
if(r){o.j3(s,o.eh$)
o.eh$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.fI$.V(0,new A.ajI())
s=r.bw$
if(s!=null)s.m()
r.bw$=null
r.RD()}}
A.KY.prototype={
j(a){var s=A.a([],t.s)
this.cw(s)
return"Notification("+B.c.bb(s,", ")+")"},
cw(a){}}
A.d0.prototype={
c_(a){return new A.Bf(this,B.ab,this.$ti.h("Bf<1>"))}}
A.Bf.prototype={
Ml(a){var s,r=this.f
r.toString
s=this.$ti
s.h("d0<1>").a(r)
if(s.c.b(a))return r.d.$1(a)
return!1},
n5(a){}}
A.fn.prototype={}
A.VZ.prototype={}
A.fr.prototype={
slh(a){var s
if(this.b===a)return
this.b=a
s=this.e
if(s!=null)s.FB()},
sn3(a){if(this.c)return
this.c=!0
this.e.FB()},
G(a,b){this.d.G(0,b)},
nd(a){var s,r=this.e
r.toString
this.e=null
if(r.c==null)return
B.c.A(r.d,this)
s=$.bN
if(s.dy$===B.e2)s.cy$.push(new A.a8a(r))
else r.GT()},
eN(){var s=this.f.gbv()
if(s!=null)s.GU()},
j(a){return"<optimized out>#"+A.c7(this)+"(opaque: "+this.b+"; maintainState: "+this.c+")"},
$iaj:1,
JJ(a){return this.a.$1(a)}}
A.a8a.prototype={
$1(a){this.a.GT()},
$S:2}
A.th.prototype={
T(){return new A.Bh(B.i)}}
A.Bh.prototype={
a0(){this.ad()
this.a.c.d.sq(0,!0)},
m(){this.a.c.d.sq(0,!1)
this.a.toString
this.aj()},
H(a){var s=this.a
return new A.rv(s.d,s.c.JJ(a),null)},
GU(){this.a3(new A.ajN())}}
A.ajN.prototype={
$0(){},
$S:0}
A.qt.prototype={
T(){return new A.qv(A.a([],t.wi),null,null,B.i)}}
A.qv.prototype={
a0(){this.ad()
this.a6s(0,this.a.c)},
xU(a,b){return this.d.length},
AJ(a,b){b.e=this
this.a3(new A.a8e(this,null,null,b))},
a6s(a,b){var s,r=b.length
if(r===0)return
for(s=0;s<r;++s)b[s].e=this
this.a3(new A.a8d(this,null,null,b))},
a8j(a){var s,r,q,p,o,n=this
if(t.LF.b(a))s=a
else s=J.hF(a.slice(0),A.ao(a).c)
if(s.length===0)return
r=n.d
if(A.d8(r,s))return
q=A.lv(r,t.Ms)
for(r=s.length,p=0;p<r;++p){o=s[p]
if(o.e==null)o.e=n}n.a3(new A.a8f(n,s,q,null,null))},
GT(){if(this.c!=null)this.a3(new A.a8c())},
FB(){this.a3(new A.a8b())},
H(a){var s,r,q,p,o,n=A.a([],t.D)
for(s=this.d,r=s.length-1,q=!0,p=0;r>=0;--r){o=s[r]
if(q){++p
n.push(new A.th(o,!0,o.f))
q=!o.b||!1}else if(o.c)n.push(new A.th(o,!1,o.f))}s=t.H8
return new A.UX(n.length-p,this.a.d,A.aB(new A.cn(n,s),!1,s.h("bi.E")),null)}}
A.a8e.prototype={
$0(){var s=this,r=s.a
B.c.mV(r.d,r.xU(s.b,s.c),s.d)},
$S:0}
A.a8d.prototype={
$0(){var s=this,r=s.a
B.c.pH(r.d,r.xU(s.b,s.c),s.d)},
$S:0}
A.a8f.prototype={
$0(){var s,r,q=this,p=q.a,o=p.d
B.c.Y(o)
s=q.b
B.c.L(o,s)
r=q.c
r.a8s(s)
B.c.pH(o,p.xU(q.d,q.e),r)},
$S:0}
A.a8c.prototype={
$0(){},
$S:0}
A.a8b.prototype={
$0(){},
$S:0}
A.UX.prototype={
c_(a){var s=A.dc(t.h)
return new A.UY(s,this,B.ab)},
aH(a){var s=a.a4(t.I)
s.toString
s=new A.tp(s.w,this.e,this.f,A.ay(),0,null,null,A.ay())
s.aK()
s.L(0,null)
return s},
aN(a,b){var s=this.e
if(b.aF!==s){b.aF=s
b.a7()}s=a.a4(t.I)
s.toString
b.sbJ(s.w)
s=this.f
if(s!==b.b9){b.b9=s
b.az()
b.b3()}}}
A.UY.prototype={
ga6(){return t._2.a(A.fp.prototype.ga6.call(this))}}
A.tp.prototype={
ey(a){if(!(a.e instanceof A.ep))a.e=new A.ep(null,null,B.j)},
ZZ(){if(this.am!=null)return
this.am=B.T.a1(this.ah)},
sbJ(a){var s=this
if(s.ah===a)return
s.ah=a
s.am=null
s.a7()},
gr2(){var s,r,q,p,o=this
if(o.aF===A.aA.prototype.goI.call(o))return null
s=A.aA.prototype.ga53.call(o,o)
for(r=o.aF,q=t.B;r>0;--r){p=s.e
p.toString
s=q.a(p).a9$}return s},
eH(a){var s,r,q,p,o=this.gr2()
for(s=t.B,r=null;o!=null;){q=o.e
q.toString
s.a(q)
p=o.j8(a)
if(p!=null){p+=q.a.b
r=r!=null?Math.min(r,p):p}o=q.a9$}return r},
gkj(){return!0},
ce(a){return new A.L(A.J(1/0,a.a,a.b),A.J(1/0,a.c,a.d))},
bx(){var s,r,q,p,o,n,m,l,k=this
k.M=!1
if(k.cX$-k.aF===0)return
k.ZZ()
s=t.k.a(A.z.prototype.ga_.call(k))
r=A.un(new A.L(A.J(1/0,s.a,s.b),A.J(1/0,s.c,s.d)))
q=k.gr2()
for(s=t.B,p=t.r;q!=null;){o=q.e
o.toString
s.a(o)
if(!o.gAS()){q.cC(r,!0)
n=k.am
n.toString
m=k.k3
m.toString
l=q.k3
l.toString
o.a=n.mk(p.a(m.ag(0,l)))}else{n=k.k3
n.toString
m=k.am
m.toString
k.M=A.avK(q,o,n,m)||k.M}q=o.a9$}},
d0(a,b){var s,r,q,p=this,o={},n=o.a=p.aF===A.aA.prototype.goI.call(p)?null:p.bB$
for(s=t.B,r=0;r<p.cX$-p.aF;++r,n=q){n=n.e
n.toString
s.a(n)
if(a.ou(new A.akT(o,b,n),n.a,b))return!0
q=n.aP$
o.a=q}return!1},
uX(a,b){var s,r,q,p,o,n=this.gr2()
for(s=t.B,r=b.a,q=b.b;n!=null;){p=n.e
p.toString
s.a(p)
o=p.a
a.eP(n,new A.r(o.a+r,o.b+q))
n=p.a9$}},
aG(a,b){var s,r=this,q=r.M&&r.b9!==B.h,p=r.bh
if(q){q=r.cx
q===$&&A.b()
s=r.k3
p.saX(0,a.k5(q,b,new A.E(0,0,0+s.a,0+s.b),r.gBL(),r.b9,p.a))}else{p.saX(0,null)
r.uX(a,b)}},
m(){this.bh.saX(0,null)
this.hB()},
fU(a){var s,r,q=this.gr2()
for(s=t.B;q!=null;){a.$1(q)
r=q.e
r.toString
q=s.a(r).a9$}},
iD(a){var s
switch(this.b9.a){case 0:return null
case 1:case 2:case 3:if(this.M){s=this.k3
s=new A.E(0,0,0+s.a,0+s.b)}else s=null
return s}}}
A.akT.prototype={
$2(a,b){return this.a.a.c5(a,b)},
$S:20}
A.S7.prototype={
aV(){this.bd()
this.b8()
this.ed()},
m(){var s=this,r=s.aY$
if(r!=null)r.G(0,s.gdW())
s.aY$=null
s.aj()}}
A.W7.prototype={
aC(a){var s,r,q
this.eB(a)
s=this.a8$
for(r=t.B;s!=null;){s.aC(a)
q=s.e
q.toString
s=r.a(q).a9$}},
au(a){var s,r,q
this.dU(0)
s=this.a8$
for(r=t.B;s!=null;){s.au(0)
q=s.e
q.toString
s=r.a(q).a9$}}}
A.pX.prototype={
T(){var s=t.y
return new A.AB(A.aZ([!1,!0,!0,!0],s,s),null,null,B.i)},
jX(a){return A.Dv().$1(a)}}
A.AB.prototype={
a0(){var s,r,q=this
q.ad()
s=q.a
r=s.f
q.d=A.awI(A.bo(s.e),r,q)
r=q.a
s=r.f
s=A.awI(A.bo(r.e),s,q)
q.e=s
r=q.d
r.toString
q.f=new A.B_(A.a([r,s],t.Eo))},
b4(a){var s,r=this
r.bA(a)
if(!a.f.l(0,r.a.f)||A.bo(a.e)!==A.bo(r.a.e)){s=r.d
s.toString
s.saq(0,r.a.f)
s=r.d
s.toString
s.sJC(A.bo(r.a.e))
s=r.e
s.toString
s.saq(0,r.a.f)
s=r.e
s.toString
s.sJC(A.bo(r.a.e))}},
yd(a){var s,r,q,p,o,n,m,l,k,j=this
if(!j.a.jX(a))return!1
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
if(a instanceof A.iO){q=a.e
if(q<0)n=s
else if(q>0)n=p
else n=null
m=n===s
s=j.c
s.dq(new A.xs(m,0))
s=j.w
s.k(0,m,!0)
s.i(0,m).toString
n.d=0
j.w.i(0,m).toString
s=a.f
if(s!==0){r=n.c
if(r!=null)r.ap(0)
n.c=null
l=A.J(Math.abs(s),100,1e4)
s=n.f
if(n.a===B.hq)r=0.3
else{r=n.r
r===$&&A.b()
r=r.b.ai(0,r.a)}s.a=r
r.toString
s.b=A.J(l*0.00006,r,0.5)
r=n.w
s=n.x
s===$&&A.b()
r.a=s.b.ai(0,s.a)
r.b=Math.min(0.025+75e-8*l*l,1)
r=n.b
r===$&&A.b()
r.e=A.bJ(0,B.d.b5(0.15+l*0.02),0)
r.fh(0,0)
n.as=0.5
n.a=B.a2Y}else{s=a.d
if(s!=null){p=a.b.ga6()
p.toString
t.x.a(p)
o=p.k3
o.toString
k=p.lw(s.d)
switch(A.bo(r.e).a){case 0:n.toString
s=o.b
n.MD(0,Math.abs(q),o.a,A.J(k.b,0,s),s)
break
case 1:n.toString
s=o.a
n.MD(0,Math.abs(q),o.b,A.J(k.a,0,s),s)
break}}}}else if(a instanceof A.k5||a instanceof A.f0)if(a.gKw()!=null){s=j.d
if(s.a===B.hr)s.kz(B.dp)
s=j.e
if(s.a===B.hr)s.kz(B.dp)}j.r=A.D(a)
return!1},
m(){this.d.m()
this.e.m()
this.SA()},
H(a){var s=this,r=null,q=s.a,p=s.d,o=s.e,n=q.e,m=s.f
return new A.d0(s.gyc(),new A.hS(A.l7(new A.hS(q.w,r),new A.QV(p,o,n,m),r,r,B.S),r),r,t.WA)}}
A.oQ.prototype={
I(){return"_GlowState."+this.b}}
A.AA.prototype={
saq(a,b){if(this.ax.l(0,b))return
this.ax=b
this.aI()},
sJC(a){if(this.ay===a)return
this.ay=a
this.aI()},
m(){var s=this,r=s.b
r===$&&A.b()
r.m()
r=s.y
r===$&&A.b()
r.w.c4$.A(0,r)
r.Ef()
r=s.c
if(r!=null)r.ap(0)
s.dH()},
MD(a,b,c,d,e){var s,r,q,p=this,o=p.c
if(o!=null)o.ap(0)
p.at=p.at+b/200
o=p.f
s=p.r
s===$&&A.b()
r=s.b
s=s.a
o.a=r.ai(0,s)
o.b=Math.min(r.ai(0,s)+b/c*0.8,0.5)
q=Math.min(c,e*0.20096189432249995)
s=p.w
r=p.x
r===$&&A.b()
o=r.b
r=r.a
s.a=o.ai(0,r)
s.b=Math.max(1-1/(0.7*Math.sqrt(p.at*q)),A.i9(o.ai(0,r)))
r=d/e
p.Q=r
if(r!==p.as){o=p.y
o===$&&A.b()
if(!o.ga6R())o.kk(0)}else{o=p.y
o===$&&A.b()
o.hy(0)
p.z=null}o=p.b
o===$&&A.b()
o.e=B.or
if(p.a!==B.hr){o.fh(0,0)
p.a=B.hr}else{o=o.r
if(!(o!=null&&o.a!=null))p.aI()}p.c=A.c6(B.or,new A.ai_(p))},
wE(a){var s=this
if(a!==B.Z)return
switch(s.a.a){case 1:s.kz(B.dp)
break
case 3:s.a=B.hq
s.at=0
break
case 2:case 0:break}},
kz(a){var s,r=this,q=r.a
if(q===B.Dy||q===B.hq)return
q=r.c
if(q!=null)q.ap(0)
r.c=null
q=r.f
s=r.r
s===$&&A.b()
q.a=s.b.ai(0,s.a)
q.b=0
q=r.w
s=r.x
s===$&&A.b()
q.a=s.b.ai(0,s.a)
q.b=0
q=r.b
q===$&&A.b()
q.e=a
q.fh(0,0)
r.a=B.Dy},
a1c(a){var s,r=this,q=r.z
if(q!=null){q=q.a
s=r.Q
r.as=s-(s-r.as)*Math.pow(2,-(a.a-q)/$.aAr().a)
r.aI()}if(A.Du(r.Q,r.as,0.001)){q=r.y
q===$&&A.b()
q.hy(0)
r.z=null}else r.z=a},
aG(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.r
j===$&&A.b()
if(J.h(j.b.ai(0,j.a),0))return
s=b.a
r=b.b
q=s>r?r/s:1
p=s*3/2
o=Math.min(r,s*0.20096189432249995)
r=k.x
r===$&&A.b()
r=r.b.ai(0,r.a)
n=k.as
m=$.au().ba()
l=k.ax
m.saq(0,A.b7(B.d.b5(255*j.b.ai(0,j.a)),l.gq(l)>>>16&255,l.gq(l)>>>8&255,l.gq(l)&255))
a.cQ(0)
a.aA(0,0,k.d+k.e)
a.dT(0,1,r*q)
a.kM(new A.E(0,0,0+s,0+o))
a.iG(new A.r(s/2*(0.5+n),o-p),p,m)
a.cM(0)},
j(a){return"_GlowController(color: "+this.ax.j(0)+", axis: "+A.aLB(this.ay)+")"}}
A.ai_.prototype={
$0(){return this.a.kz(B.c2)},
$S:0}
A.QV.prototype={
Hd(a,b,c,d,e){var s
if(c==null)return
switch(A.kK(d,e)){case B.G:c.aG(a,b)
break
case B.F:a.cQ(0)
a.aA(0,0,b.b)
a.dT(0,1,-1)
c.aG(a,b)
a.cM(0)
break
case B.ap:a.cQ(0)
a.ln(0,1.5707963267948966)
a.dT(0,1,-1)
c.aG(a,new A.L(b.b,b.a))
a.cM(0)
break
case B.aH:a.cQ(0)
s=b.a
a.aA(0,s,0)
a.ln(0,1.5707963267948966)
c.aG(a,new A.L(b.b,s))
a.cM(0)
break}},
aG(a,b){var s=this,r=s.d
s.Hd(a,b,s.b,r,B.oJ)
s.Hd(a,b,s.c,r,B.oI)},
eX(a){return a.b!=this.b||a.c!=this.c},
j(a){return"_GlowingOverscrollIndicatorPainter("+A.i(this.b)+", "+A.i(this.c)+")"}}
A.rh.prototype={
T(){return new A.C4(null,null,B.i)},
jX(a){return A.Dv().$1(a)}}
A.C4.prototype={
gkD(){var s,r,q,p,o,n,m=this,l=null,k=m.d
if(k===$){s=t.H7
r=new A.ad(0,0,s)
q=new A.C3(r,B.mS,$.bR())
p=A.be(l,l,l,l,m)
p.aS()
o=p.ca$
o.b=!0
o.a.push(q.gwD())
q.a!==$&&A.eI()
q.a=p
n=A.b8(B.nI,p,l)
n.a.Z(0,q.geO())
t.m.a(n)
q.b!==$&&A.eI()
q.b=new A.O(n,r,s.h("O<ah.T>"))
m.d!==$&&A.bu()
m.d=q
k=q}return k},
yd(a){var s,r,q,p,o,n=this
if(!n.a.jX(a))return!1
if(a instanceof A.iO){n.f=a
J.a1(n.e)
s=a.e
r=n.c
r.dq(new A.xs(s<0,0))
n.r=!0
r=a.f
if(r!==0){s=n.gkD()
q=A.J(Math.abs(r),1,1e4)
r=s.c
p=s.b
p===$&&A.b()
r.a=p.b.ai(0,p.a)
r.b=Math.min(0.016+1.01/q,1)
r=s.a
r===$&&A.b()
r.e=A.bJ(0,B.d.b5(q*0.02),0)
r.fh(0,0)
s.d=B.a3w}else if(a.d!=null){r=a.a.d
r.toString
o=A.J(Math.abs(s)/r+n.gkD().e,0,1)
r=n.gkD()
r.e=o
s=r.c
p=r.b
p===$&&A.b()
s.a=p.b.ai(0,p.a)
p=r.e
s.b=0.016*p+0.016*(1-Math.exp(-p*8.237217661997105))
p=r.a
p===$&&A.b()
p.e=B.eF
if(r.d!==B.mT){p.fh(0,0)
r.d=B.mT}else{s=p.r
if(!(s!=null&&s.a!=null))r.aI()}}}else if(a instanceof A.k5||a instanceof A.f0){s=n.gkD()
if(s.d===B.mT)s.kz(B.eF)}n.e=a
return!1},
Wa(a){switch(this.a.c.a){case 0:return a>0?B.en:B.em
case 1:return a>0?B.b8:B.bq
case 2:return a>0?B.em:B.en
case 3:return a>0?B.bq:B.b8}},
m(){var s=this.gkD(),r=s.a
r===$&&A.b()
r.m()
s.dH()
this.T7()},
H(a){var s={},r=a.a4(t.l).f
s.a=null
return new A.d0(this.gyc(),A.hk(this.gkD(),new A.amc(s,this,r.a),null),null,t.WA)}}
A.amc.prototype={
$2(a,b){var s,r,q,p,o,n,m=this,l=m.b,k=l.gkD().b
k===$&&A.b()
k=k.b.ai(0,k.a)
switch(A.bo(l.a.c).a){case 0:s=1+k
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
p=l.Wa(q==null?0:q)
q=l.f
if(q==null)o=null
else{q=q.a.d
q.toString
o=q}if(o==null)o=m.a.a
q=A.wS(s,r,1)
l=l.a
n=A.ea(p,l.f,q,!0)
return A.aq9(n,k!==0&&o!==m.a.a?l.e:B.h)},
$S:363}
A.oX.prototype={
I(){return"_StretchState."+this.b}}
A.C3.prototype={
wE(a){var s=this
if(a!==B.Z)return
switch(s.d.a){case 1:s.kz(B.eF)
break
case 3:s.d=B.mS
s.e=0
break
case 2:case 0:break}},
kz(a){var s,r=this,q=r.d
if(q===B.DF||q===B.mS)return
q=r.c
s=r.b
s===$&&A.b()
q.a=s.b.ai(0,s.a)
q.b=0
q=r.a
q===$&&A.b()
q.e=a
q.fh(0,0)
r.d=B.DF},
j(a){return"_StretchController()"}}
A.xs.prototype={
cw(a){this.RI(a)
a.push("side: "+(this.a?"leading edge":"trailing edge"))}}
A.Bj.prototype={
cw(a){var s,r
this.w9(a)
s=this.da$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.CF.prototype={
aV(){this.bd()
this.b8()
this.ed()},
m(){var s=this,r=s.aY$
if(r!=null)r.G(0,s.gdW())
s.aY$=null
s.aj()}}
A.Da.prototype={
aV(){this.bd()
this.b8()
this.ed()},
m(){var s=this,r=s.aY$
if(r!=null)r.G(0,s.gdW())
s.aY$=null
s.aj()}}
A.C_.prototype={
l(a,b){if(b==null)return!1
if(J.a1(b)!==A.D(this))return!1
return b instanceof A.C_&&A.d8(b.a,this.a)},
gu(a){return A.dv(this.a)},
j(a){return"StorageEntryIdentifier("+B.c.bb(this.a,":")+")"}}
A.La.prototype={
EJ(a){var s=A.a([],t.g8)
if(A.avk(a,s))a.CA(new A.a8g(s))
return s},
NB(a,b){var s,r=this
if(r.a==null)r.a=A.x(t.K,t.z)
s=r.EJ(a)
if(s.length!==0)r.a.k(0,new A.C_(s),b)},
MK(a){var s
if(this.a==null)return null
s=this.EJ(a)
return s.length!==0?this.a.i(0,new A.C_(s)):null}}
A.a8g.prototype={
$1(a){return A.avk(a,this.a)},
$S:52}
A.qx.prototype={
H(a){return this.c}}
A.L7.prototype={
Jw(a,b,c){var s=t.gQ.a(B.c.gbz(this.d))
if(s.ah!=null){s.ah=a
return A.bT(null,t.H)}return s.hP(s.lr(a),b,c)},
uv(a){var s=t.gQ.a(B.c.gbz(this.d))
if(s.ah!=null){s.ah=a
return}s.e6(s.lr(a))},
K8(a,b,c){var s=null,r=new A.mk(this.z,this.as,B.h2,a,b,!0,s,A.i1(!1),$.bR())
r.En(b,s,!0,c,a)
r.Eo(b,s,s,!0,c,a)
return r},
aC(a){this.R1(a)
t.gQ.a(a).sqp(this.as)}}
A.L8.prototype={}
A.mk.prototype={
Aa(a,b,c,d,e,f){return this.Rc(a,b,c,d,e,null)},
sqp(a){var s,r=this
if(r.aF===a)return
s=r.gk_(r)
r.aF=a
if(s!=null)r.At(r.lr(s))},
grj(){var s=this.ax
s.toString
return Math.max(0,s*(this.aF-1)/2)},
qv(a,b){var s=Math.max(0,a-this.grj())/(b*this.aF),r=B.d.C8(s)
if(Math.abs(s-r)<1e-10)return r
return s},
lr(a){var s=this.ax
s.toString
return a*s*this.aF+this.grj()},
gk_(a){var s,r,q=this,p=q.at
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
s=q.qv(r,s)
p=s}else p=s}return p},
D4(){var s,r,q=this,p=q.w,o=p.c
o.toString
o=A.a8h(o)
if(o!=null){p=p.c
p.toString
s=q.ah
if(s==null){s=q.at
s.toString
r=q.ax
r.toString
r=q.qv(s,r)
s=r}o.NB(p,s)}},
N7(){var s,r,q
if(this.at==null){s=this.w
r=s.c
r.toString
r=A.a8h(r)
if(r==null)q=null
else{s=s.c
s.toString
q=r.MK(s)}if(q!=null)this.am=q}},
D3(){var s,r=this,q=r.ah
if(q==null){q=r.at
q.toString
s=r.ax
s.toString
s=r.qv(q,s)
q=s}r.w.e.sq(0,q)
q=$.hV.ah$
q===$&&A.b()
q.L1()},
N6(a,b){if(b)this.am=a
else this.e6(this.lr(a))},
oA(a){var s,r,q,p,o=this,n=o.ax
n=n!=null?n:null
if(a===n)return!0
o.R7(a)
s=o.at
s=s!=null?s:null
if(s==null)r=o.am
else if(n===0){q=o.ah
q.toString
r=q}else{n.toString
r=o.qv(s,n)}p=o.lr(r)
o.ah=a===0?r:null
if(p!==s){o.at=p
return!1}return!0},
kE(a){var s
this.Rd(a)
if(!(a instanceof A.mk))return
s=a.ah
if(s!=null)this.ah=s},
ox(a,b){var s=a+this.grj()
return this.R5(s,Math.max(s,b-this.grj()))},
hd(){var s,r,q,p,o,n=this,m=null,l=n.z
if(l!=null&&n.Q!=null)l.toString
else l=m
if(n.z!=null&&n.Q!=null){s=n.Q
s.toString}else s=m
r=n.at
r=r!=null?r:m
q=n.ax
q=q!=null?q:m
p=n.w.a.c
o=n.aF
return new A.L8(o,l,s,r,q,p)}}
A.Av.prototype={
iz(a){return new A.Av(!1,this.hR(a))},
gmj(){return this.b}}
A.qw.prototype={
iz(a){return new A.qw(this.hR(a))},
Wr(a){var s,r
if(a instanceof A.mk){s=a.gk_(a)
s.toString
return s}s=a.at
s.toString
r=a.ax
r.toString
return s/r},
Ws(a,b){var s
if(a instanceof A.mk)return a.lr(b)
s=a.ax
s.toString
return b*s},
mt(a,b){var s,r,q,p,o,n=this
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
if(s)return n.R3(a,b)
q=n.gqh()
p=n.Wr(a)
s=q.c
if(b<-s)p-=0.5
else if(b>s)p+=0.5
o=n.Ws(a,B.d.C8(p))
s=a.at
s.toString
if(o!==s){s=n.glD()
r=a.at
r.toString
return new A.lW(o,A.BY(s,r-o,b),q)}return null}}
A.xt.prototype={
T(){return new A.Sa(B.i)}}
A.Sa.prototype={
a0(){this.ad()
this.d=this.a.r.z},
Wh(a){var s,r
this.a.toString
switch(0){case 0:s=a.a4(t.I)
s.toString
r=A.apx(s.w)
this.a.toString
return r}},
H(a){var s,r,q,p=this,o=null,n=p.Wh(a),m=p.a.w
m=new A.qw(B.AH.hR(m))
m=new A.Av(!1,o).hR(m)
s=p.a
r=s.Q
s=s.r
q=A.aba(a).a3K(!1)
return new A.d0(new A.ajO(p),A.arg(n,B.A,s,r,new A.Av(!1,m),o,q,o,new A.ajP(p,n)),o,t.WA)}}
A.ajO.prototype={
$1(a){if(a.da$===0)this.a.a.toString
return!1},
$S:26}
A.ajP.prototype={
$2(a,b){var s=this.a.a
return A.awz(0,this.b,0,B.FF,null,s.as,b,A.a([new A.Ns(s.r.as,!0,s.z,null)],t.D))},
$S:364}
A.iP.prototype={
glh(){return!0},
gti(){return!1},
zq(a){return!0}}
A.Ly.prototype={
aH(a){var s=new A.Mt(this.d,0,!1,!1,A.ay())
s.aK()
return s},
aN(a,b){b.sa7N(this.d)
b.sa8d(0)
b.sa2U(!1)
b.sa2T(!1)}}
A.a74.prototype={}
A.a8D.prototype={}
A.Gw.prototype={
y3(a){return this.Zk(a)},
Zk(a){var s=0,r=A.a5(t.H),q,p=this,o,n,m
var $async$y3=A.Z(function(b,c){if(b===1)return A.a2(c,r)
while(true)switch(s){case 0:n=A.eH(a.b)
m=p.a
if(!m.P(0,n)){s=1
break}m=m.i(0,n)
m.toString
o=a.a
if(o==="Menu.selectedCallback"){m.gaaf().$0()
m.ga7I()
o=$.ar.an$.f.f.e
o.toString
A.aC8(o,m.ga7I(),t.q)}else if(o==="Menu.opened")m.gaab(m).$0()
else if(o==="Menu.closed")m.gaaa(m).$0()
case 1:return A.a3(q,r)}})
return A.a4($async$y3,r)}}
A.qE.prototype={
cj(a){return this.f!=a.f}}
A.lT.prototype={
T(){return new A.Tt(null,A.x(t.yb,t.O),null,!0,null,B.i)}}
A.Tt.prototype={
gd4(){return this.a.d},
j3(a,b){},
H(a){return A.afB(this.bw$,this.a.c)}}
A.zS.prototype={
cj(a){return a.f!=this.f}}
A.yf.prototype={
T(){return new A.Bz(B.i)}}
A.Bz.prototype={
bf(){var s,r=this
r.cS()
s=r.c
s.toString
r.r=A.qS(s)
r.xY()
if(r.d==null){r.a.toString
r.d=!1}},
b4(a){this.bA(a)
this.xY()},
gGI(){this.a.toString
return!1},
xY(){var s,r=this
if(r.gGI()&&!r.w){r.w=!0;++$.lS.bC$
s=$.hV.ah$
s===$&&A.b()
s.ga8T().aJ(new A.al_(r),t.P)}},
a_R(){var s,r=this
r.e=!1
r.f=null
s=$.hV.ah$
s===$&&A.b()
s.G(0,r.gyo())
r.xY()},
m(){if(this.e){var s=$.hV.ah$
s===$&&A.b()
s.G(0,this.gyo())}this.aj()},
H(a){var s,r,q=this,p=q.d
p.toString
if(p&&q.gGI())return B.ed
p=q.r
if(p==null)p=q.f
s=q.a
r=s.d
return A.afB(p,new A.lT(s.c,r,null))}}
A.al_.prototype={
$1(a){var s,r=this.a
r.w=!1
if(r.c!=null){s=$.hV.ah$
s===$&&A.b()
s.Z(0,r.gyo())
r.a3(new A.akZ(r,a))}$.lS.Jt()},
$S:365}
A.akZ.prototype={
$0(){var s=this.a
s.f=this.b
s.e=!0
s.d=!1},
$S:0}
A.dR.prototype={
gmy(a){return!0},
m(){var s=this,r=s.c
if(r!=null){r=r.fI$.A(0,s)
r.toString
s.G(0,r)
s.c=s.b=null}s.dH()
s.a=!0}}
A.iZ.prototype={
zY(a){},
nc(a,b){var s,r,q=this,p=q.bw$
p=p==null?null:J.es(p.gjm(),b)
s=p===!0
r=s?a.mS(J.b0(q.bw$.gjm(),b)):a.tA()
if(a.b==null){a.b=b
a.c=q
p=new A.aaf(q,a)
a.Z(0,p)
q.fI$.k(0,a,p)}a.Lx(r)
if(!s&&a.gmy(a)&&q.bw$!=null)q.yT(a)},
p9(){var s,r,q=this
if(q.fJ$!=null){s=q.bw$
s=s==null?null:s.e
s=s==q.gd4()||q.gng()}else s=!0
if(s)return
r=q.bw$
if(q.mg(q.fJ$,!1))if(r!=null)r.m()},
gng(){var s,r,q=this
if(q.eh$)return!0
if(q.gd4()==null)return!1
s=q.c
s.toString
r=A.qS(s)
if(r!=q.fJ$){if(r==null)s=null
else{s=r.c
s=s==null?null:s.d
s=s===!0}s=s===!0}else s=!1
return s},
mg(a,b){var s,r,q=this
if(q.gd4()==null||a==null)return q.I0(null,b)
if(b||q.bw$==null){s=q.gd4()
s.toString
return q.I0(a.a30(s,q),b)}s=q.bw$
s.toString
r=q.gd4()
r.toString
s.a8z(r)
r=q.bw$
r.toString
a.iy(r)
return!1},
I0(a,b){var s,r=this,q=r.bw$
if(a==q)return!1
r.bw$=a
if(!b){if(a!=null){s=r.fI$
new A.bh(s,A.o(s).h("bh<1>")).V(0,r.ga1A())}r.zY(q)}return!0},
yT(a){var s,r=a.gmy(a),q=this.bw$
if(r){if(q!=null){r=a.b
r.toString
s=a.nk()
if(!J.h(J.b0(q.gjm(),r),s)||!J.es(q.gjm(),r)){J.cX(q.gjm(),r,s)
q.m0()}}}else if(q!=null){r=a.b
r.toString
q.a8r(0,r,t.K)}}}
A.aaf.prototype={
$0(){var s=this.a
if(s.bw$==null)return
s.yT(this.b)},
$S:0}
A.ana.prototype={
$2(a,b){if(!a.a)a.G(0,b)},
$S:43}
A.W8.prototype={
b4(a){this.bA(a)
this.p9()},
bf(){var s,r,q,p,o=this
o.cS()
s=o.bw$
r=o.gng()
q=o.c
q.toString
q=A.qS(q)
o.fJ$=q
p=o.mg(q,r)
if(r){o.j3(s,o.eh$)
o.eh$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.fI$.V(0,new A.ana())
s=r.bw$
if(s!=null)s.m()
r.bw$=null
r.aj()}}
A.cm.prototype={
sq(a,b){var s=this.y
if(b==null?s!=null:b!==s){this.y=b
this.A_(s)}},
Lx(a){this.y=a}}
A.i7.prototype={
tA(){return this.cy},
A_(a){this.aI()},
mS(a){return A.o(this).h("i7.T").a(a)},
nk(){var s=this.y
return s==null?A.o(this).h("cm.T").a(s):s}}
A.By.prototype={
mS(a){return this.RW(a)},
nk(){var s=this.RX()
s.toString
return s}}
A.yb.prototype={}
A.ya.prototype={}
A.anb.prototype={
$2(a,b){if(!a.a)a.G(0,b)},
$S:43}
A.qU.prototype={}
A.ML.prototype={
T(){return new A.tr(new A.Tq($.bR()),null,A.x(t.yb,t.O),null,!0,null,B.i,this.$ti.h("tr<1>"))}}
A.yg.prototype={
I(){return"RouteInformationReportingType."+this.b}}
A.tr.prototype={
gd4(){return this.a.r},
a0(){var s,r=this
r.ad()
s=r.a.c
if(s!=null)s.Z(0,r.grf())
r.a.f.a26(r.gxy())
r.a.e.Z(0,r.gxJ())},
j3(a,b){var s,r,q=this,p=q.f
q.nc(p,"route")
s=p.y
r=s==null
if((r?A.o(p).h("cm.T").a(s):s)!=null){p=r?A.o(p).h("cm.T").a(s):s
p.toString
q.rB(p,new A.ale(q))}else{p=q.a.c
if(p!=null)q.rB(p.a,new A.alf(q))}},
a0i(){var s=this
if(s.w||s.a.c==null)return
s.w=!0
$.bN.cy$.push(s.ga_U())},
a_V(a){var s,r,q,p,o=this
o.w=!1
s=o.f
r=s.y
q=r==null
if((q?A.o(s).h("cm.T").a(r):r)!=null){s=q?A.o(s).h("cm.T").a(r):r
s.toString
r=o.a.c
r.toString
q=o.e
q.toString
if(q!==B.Wg)p=q===B.m7&&r.b.a==s.a
else p=!0
B.fY.us("selectMultiEntryHistory",t.H)
q=s.a
q.toString
A.awc(q,p,s.b)
r.b=r.a=s}o.e=B.m7},
a02(){this.a.e.gaa_()
this.a.toString
return null},
rr(){var s=this
s.f.sq(0,s.a02())
if(s.e==null)s.e=B.m7
s.a0i()},
bf(){var s,r=this
r.r=!0
r.SH()
s=r.a.c
if(s!=null&&r.r)r.rB(s.a,new A.ald(r))
r.r=!1
r.rr()},
b4(a){var s,r,q,p=this
p.SI(a)
s=p.a
r=a.c
q=s.c==r
if(q)s.f===a.f
p.d=new A.C()
if(!q){s=r==null
if(!s)r.G(0,p.grf())
q=p.a.c
if(q!=null)q.Z(0,p.grf())
s=s?null:r.a
r=p.a.c
if(s!=(r==null?null:r.a))p.Gs()}s=a.f
if(p.a.f!==s){r=p.gxy()
s.a8t(r)
p.a.f.a26(r)}p.a.toString
s=p.gxJ()
a.e.G(0,s)
p.a.e.Z(0,s)
p.rr()},
m(){var s=this,r=s.a.c
if(r!=null)r.G(0,s.grf())
s.a.f.a8t(s.gxy())
s.a.e.G(0,s.gxJ())
s.d=null
s.SJ()},
rB(a,b){var s,r,q=this
q.r=!1
q.d=new A.C()
s=q.a.d
s.toString
r=q.c
r.toString
s.aai(a,r).aJ(q.a_C(q.d,b),t.H)},
a_C(a,b){return new A.alb(this,a,b)},
Gs(){var s=this
s.r=!0
s.rB(s.a.c.a,new A.al8(s))},
WV(){var s=this
s.d=new A.C()
return s.a.e.aaj().aJ(s.Y_(s.d),t.y)},
Y_(a){return new A.al9(this,a)},
HI(){this.a3(new A.alc())
this.rr()
return new A.bC(null,t.b5)},
Y0(){this.a3(new A.ala())
this.rr()},
H(a){var s=this.bw$,r=this.a,q=r.c,p=r.f,o=r.d
r=r.e
return A.afB(s,new A.Ty(q,p,o,r,this,new A.ho(r.gtl(),null),null))}}
A.ale.prototype={
$0(){return this.a.a.e.ga9P()},
$S(){return this.a.$ti.h("ap<~>(1)()")}}
A.alf.prototype={
$0(){return this.a.a.e.ga9O()},
$S(){return this.a.$ti.h("ap<~>(1)()")}}
A.ald.prototype={
$0(){return this.a.a.e.gOB()},
$S(){return this.a.$ti.h("ap<~>(1)()")}}
A.alb.prototype={
$1(a){var s=0,r=A.a5(t.H),q,p=this,o,n
var $async$$1=A.Z(function(b,c){if(b===1)return A.a2(c,r)
while(true)switch(s){case 0:o=p.a
n=p.b
if(o.d!=n){s=1
break}s=3
return A.a8(p.c.$0().$1(a),$async$$1)
case 3:if(o.d==n)o.HI()
case 1:return A.a3(q,r)}})
return A.a4($async$$1,r)},
$S(){return this.a.$ti.h("ap<~>(1)")}}
A.al8.prototype={
$0(){return this.a.a.e.gOB()},
$S(){return this.a.$ti.h("ap<~>(1)()")}}
A.al9.prototype={
$1(a){var s=this.a
if(this.b!=s.d)return new A.bC(!0,t.d9)
s.HI()
return new A.bC(a,t.d9)},
$S:367}
A.alc.prototype={
$0(){},
$S:0}
A.ala.prototype={
$0(){},
$S:0}
A.Ty.prototype={
cj(a){if(this.f==a.f)this.r===a.r
return!0}}
A.Tq.prototype={
tA(){return null},
A_(a){this.aI()},
mS(a){var s
if(a==null)return null
t.Dn.a(a)
s=J.c3(a)
return new A.qU(A.cF(s.gK(a)),s.gU(a))},
nk(){var s,r=this,q=r.y,p=q==null
if((p?A.o(r).h("cm.T").a(q):q)==null)q=null
else{s=(p?A.o(r).h("cm.T").a(q):q).a
q=[s,(p?A.o(r).h("cm.T").a(q):q).b]}return q}}
A.tF.prototype={
b4(a){this.bA(a)
this.p9()},
bf(){var s,r,q,p,o=this
o.cS()
s=o.bw$
r=o.gng()
q=o.c
q.toString
q=A.qS(q)
o.fJ$=q
p=o.mg(q,r)
if(r){o.j3(s,o.eh$)
o.eh$=!1}if(p)if(s!=null)s.m()},
m(){var s,r=this
r.fI$.V(0,new A.anb())
s=r.bw$
if(s!=null)s.m()
r.bw$=null
r.aj()}}
A.qu.prototype={
guT(){return this.e},
i3(){var s,r=this,q=A.ar0(r.gU8(),!1)
r.k4=q
r.gn3()
s=A.ar0(r.gUa(),!0)
r.p1=s
B.c.L(r.e,A.a([q,s],t.wi))
r.QZ()},
kR(a){var s,r=this
r.QU(a)
s=r.at.Q
s===$&&A.b()
if(s===B.R&&!r.Q)r.a.KW(r)
return!0},
m(){B.c.Y(this.e)
this.QY()}}
A.dX.prototype={
gbY(a){return this.as},
gD8(){return this.ax},
Yl(a){var s,r=this
switch(a.a){case 3:s=r.e
if(s.length!==0){s=B.c.gK(s)
r.glh()
s.slh(!0)}s=r.z
if(s!=null){s.a.$0()
s.a=null}r.z=null
break
case 1:case 2:s=r.e
if(s.length!==0)B.c.gK(s).slh(!1)
if(r.z==null)r.z=$.bN.a8L(B.GW)
break
case 0:if(!r.ga6I()){r.a.KW(r)
r.Q=!0
s=r.z
if(s!=null){s.a.$0()
s.a=null}r.z=null}break}},
i3(){var s=this,r=s.gvn(s),q=s.gvn(s),p=s.gjw(),o=s.a
o.toString
o=s.at=A.be(p,r,q,null,o)
o.aS()
p=o.ca$
p.b=!0
p.a.push(s.gGt())
s.as=o
s.Qk()
p=s.as
if(p.gb6(p)===B.Z&&s.e.length!==0){p=B.c.gK(s.e)
s.glh()
p.slh(!0)}},
p0(){this.QW()
return this.at.d_(0)},
oX(){this.QR()
var s=this.at
s.sq(0,s.b)},
zW(a){var s,r
if(a instanceof A.dX){s=this.at
s.toString
r=a.at.x
r===$&&A.b()
s.sq(0,r)}this.QX(a)},
kR(a){this.ch=a
this.at.fT(0)
this.Qi(a)
return!0},
mw(a){this.IZ(a)
this.QV(a)},
oY(a){this.IZ(a)
this.QS(a)},
IZ(a){var s,r,q,p,o,n,m,l=this,k={},j=l.CW
l.CW=null
if(a instanceof A.dX&&l.zq(a)&&!0){s=l.ax.c
if(s!=null){r=s instanceof A.oy?s.a:s
r.toString
q=a.as
q.toString
p=r.gq(r)
o=q.x
o===$&&A.b()
if(!J.h(p,o)){p=q.Q
p===$&&A.b()
p=p===B.Z||p===B.R}else p=!0
o=a.y.a
if(p)l.md(q,o)
else{k.a=null
p=new A.afw(l,q,a)
l.CW=new A.afu(k,q,p)
q.aS()
n=q.ca$
n.b=!0
n.a.push(p)
m=A.arA(r,q,new A.afv(k,l,a))
k.a=m
l.md(m,o)}}else l.md(a.as,a.y.a)}else l.a0B(B.c1)
if(j!=null)j.$0()},
md(a,b){this.ax.saT(0,a)
if(b!=null)b.aJ(new A.aft(this,a),t.P)},
a0B(a){return this.md(a,null)},
m(){var s=this,r=s.as
if(r!=null)r.cc(s.gGt())
r=s.z
if(r!=null){r.a.$0()
r.a=null}s.z=null
r=s.at
if(r!=null)r.m()
s.y.bT(0,s.ch)
s.Qj()},
gjw(){return"TransitionRoute"},
j(a){return"TransitionRoute(animation: "+A.i(this.at)+")"}}
A.afw.prototype={
$1(a){var s,r
switch(a.a){case 3:case 0:s=this.a
s.md(this.b,this.c.y.a)
r=s.CW
if(r!=null){r.$0()
s.CW=null}break
case 1:case 2:break}},
$S:4}
A.afu.prototype={
$0(){this.b.cc(this.c)
var s=this.a.a
if(s!=null)s.m()},
$S:0}
A.afv.prototype={
$0(){var s,r=this.b
r.md(this.a.a.a,this.c.y.a)
s=r.CW
if(s!=null){s.$0()
r.CW=null}},
$S:0}
A.aft.prototype={
$1(a){var s=this.a.ax,r=this.b
if(s.c==r){s.saT(0,B.c1)
if(r instanceof A.oy)r.m()}},
$S:6}
A.II.prototype={
gNy(){var s=this.jB$
return s!=null&&s.length!==0}}
A.Q9.prototype={
iS(a,b){A.a7k(this.e,t.z).gti()
return!1},
dA(a){return A.aqX(this.e).M7()}}
A.B2.prototype={
cj(a){var s=this
return s.f!==a.f||s.r!==a.r||s.w!==a.w||s.x!==a.x}}
A.td.prototype={
T(){return new A.mi(A.aqz(!0,B.a25.j(0)+" Focus Scope",!1),A.are(),B.i,this.$ti.h("mi<1>"))}}
A.mi.prototype={
a0(){var s,r,q=this
q.ad()
s=A.a([],t.Eo)
r=q.a.c.fy
if(r!=null)s.push(r)
r=q.a.c.go
if(r!=null)s.push(r)
q.e=new A.B_(s)
if(q.a.c.gl9()){q.a.c.a.a.toString
s=!0}else s=!1
if(s){s=q.a.c.a.x.ge0()
if(s!=null)s.nu(q.f)}},
b4(a){var s,r=this
r.bA(a)
if(r.a.c.gl9()){r.a.c.a.a.toString
s=!0}else s=!1
if(s){s=r.a.c.a.x.ge0()
if(s!=null)s.nu(r.f)}},
bf(){this.cS()
this.d=null},
W3(){this.a3(new A.ajs(this))},
m(){this.f.m()
this.aj()},
gI6(){var s=this.a.c.fy
if((s==null?null:s.gb6(s))!==B.av){s=this.a.c.a
s=s==null?null:s.CW.a
s=s===!0}else s=!0
return s},
H(a){var s,r,q=this,p=null,o=q.a.c,n=o.gl9(),m=q.a.c
if(!m.gAD()){m=m.jB$
m=m!=null&&m.length!==0}else m=!0
s=q.a.c
s=s.gAD()||s.Af$>0
r=q.a.c
return A.hk(o.c,new A.ajw(q),new A.B2(n,m,s,o,new A.xm(r.fx,new A.qx(new A.ho(new A.ajx(q),p),r.k3,p),p),p))}}
A.ajs.prototype={
$0(){this.a.d=null},
$S:0}
A.ajw.prototype={
$2(a,b){var s=this.a.a.c.c.a
b.toString
return new A.lT(b,s,null)},
$S:368}
A.ajx.prototype={
$1(a){var s,r=null,q=A.aZ([B.Di,new A.Q9(a,new A.bx(A.a([],t.ot),t.wS))],t.n,t.od),p=this.a,o=p.e
o===$&&A.b()
s=p.d
if(s==null)s=p.d=new A.hS(new A.ho(new A.aju(p),r),p.a.c.k2)
return A.Xo(q,new A.qE(p.r,B.br,B.Xf,A.aux(!1,new A.hS(A.hk(o,new A.ajv(p),s),r),r,r,p.f),r))},
$S:369}
A.ajv.prototype={
$2(a,b){var s,r,q=this.a,p=q.a.c,o=p.fy
o.toString
s=p.go
s.toString
r=p.a
r=r==null?null:r.CW
if(r==null)r=A.i1(!1)
return p.zp(a,o,s,A.hk(r,new A.ajt(q),b))},
$S:27}
A.ajt.prototype={
$2(a,b){var s=this.a,r=s.gI6()
s.f.scD(!r)
return new A.fk(r,null,b,null)},
$S:370}
A.aju.prototype={
$1(a){var s,r=this.a.a.c,q=r.fy
q.toString
s=r.go
s.toString
return r.JI(a,q,s)},
$S:14}
A.iK.prototype={
a3(a){var s,r=this.k1
if(r.gbv()!=null){r=r.gbv()
if(r.a.c.gl9())if(!r.gI6()){r.a.c.a.a.toString
s=!0}else s=!1
else s=!1
if(s){s=r.a.c.a.x.ge0()
if(s!=null)s.nu(r.f)}r.a3(a)}else a.$0()},
zp(a,b,c,d){return d},
i3(){var s=this
s.Rs()
s.fy=A.xP(A.dX.prototype.gbY.call(s,s))
s.go=A.xP(A.dX.prototype.gD8.call(s))},
p0(){var s,r=this,q=r.k1
if(q.gbv()!=null){r.a.a.toString
s=!0}else s=!1
if(s){s=r.a.x.ge0()
if(s!=null)s.nu(q.gbv().f)}return r.Rq()},
oX(){var s,r=this,q=r.k1
if(q.gbv()!=null){r.a.a.toString
s=!0}else s=!1
if(s){s=r.a.x.ge0()
if(s!=null)s.nu(q.gbv().f)}r.Ro()},
suL(a){var s,r=this
if(r.fx===a)return
r.a3(new A.a7l(r,a))
s=r.fy
s.toString
s.saT(0,r.fx?B.de:A.dX.prototype.gbY.call(r,r))
s=r.go
s.toString
s.saT(0,r.fx?B.c1:A.dX.prototype.gD8.call(r))
r.oG()},
fV(){var s=0,r=A.a5(t.oj),q,p=this,o,n,m,l
var $async$fV=A.Z(function(a,b){if(a===1)return A.a2(b,r)
while(true)switch(s){case 0:p.k1.gbv()
o=A.aB(p.id,!0,t.Ev),n=o.length,m=0
case 3:if(!(m<n)){s=5
break}l=J
s=6
return A.a8(o[m].$0(),$async$fV)
case 6:if(!l.h(b,!0)){q=B.Wh
s=1
break}case 4:++m
s=3
break
case 5:q=p.RB()
s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$fV,r)},
oZ(a){this.QT(a)
this.oG()},
oG(){var s,r=this
r.QQ()
r.a3(new A.a7j())
s=r.k4
s===$&&A.b()
s.eN()
s=r.p1
s===$&&A.b()
r.gn3()
s.sn3(!0)},
tr(){this.QP()
var s=this.k4
s===$&&A.b()
s.eN()
s=this.k1
if(s.gbv()!=null)s.gbv().W3()},
U9(a){var s,r,q=this,p=null
q.gzi()
q.gti()
s=q.gzj()
r=q.fy
if(r.gb6(r)!==B.av){r=q.fy
r=r.gb6(r)===B.R}else r=!0
q.gti()
return new A.fk(r,p,new A.x0(p,!1,p,!0,s,p),p)},
Ub(a){var s=this,r=null,q=s.ok
return q==null?s.ok=A.dU(r,new A.td(s,s.k1,A.o(s).h("td<1>")),!1,r,!1,r,r,r,r,r,r,r,r,r,r,r,B.VP,r,r,r,r):q},
j(a){return"ModalRoute("+this.b.j(0)+", animation: "+A.i(this.as)+")"}}
A.a7l.prototype={
$0(){this.a.fx=this.b},
$S:0}
A.a7j.prototype={
$0(){},
$S:0}
A.tc.prototype={
fV(){var s=0,r=A.a5(t.oj),q,p=this,o
var $async$fV=A.Z(function(a,b){if(a===1)return A.a2(b,r)
while(true)switch(s){case 0:o=p.jB$
if(o!=null&&o.length!==0){q=B.Ch
s=1
break}q=p.R_()
s=1
break
case 1:return A.a3(q,r)}})
return A.a4($async$fV,r)},
kR(a){var s,r,q=this,p=q.jB$
if(p!=null&&p.length!==0){s=p.pop()
s.b=null
s.a9U()
r=s.c&&--q.Af$===0
if(q.jB$.length===0||r)q.oG()
return!1}q.Rp(a)
return!0}}
A.MX.prototype={
H(a){var s,r,q,p=t.l,o=a.a4(p).f.f,n=Math.max(o.a,0),m=this.d,l=m?o.b:0
l=Math.max(l,0)
s=Math.max(o.c,0)
r=this.f
q=r?o.d:0
return new A.hO(new A.bz(n,l,s,Math.max(q,0)),new A.el(a.a4(p).f.MU(r,!0,!0,m),this.x,null),null)}}
A.N1.prototype={
MZ(){},
Ks(a,b){if(b!=null)b.dq(new A.yv(null,a,b,0))},
Kt(a,b,c){b.dq(A.arf(b,null,null,a,c))},
tM(a,b,c){b.dq(new A.iO(null,c,0,a,b,0))},
Kr(a,b){b.dq(new A.k5(null,a,b,0))},
oy(){},
m(){},
j(a){return"<optimized out>#"+A.c7(this)}}
A.li.prototype={
oy(){this.a.fY(0)},
gim(){return!1},
ghn(){return!1},
geu(){return 0}}
A.a4X.prototype={
gim(){return!1},
ghn(){return!1},
geu(){return 0},
m(){this.b.$0()
this.qS()}}
A.abb.prototype={
TR(a,b){var s,r,q=this
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
else return Math.min(r/3,s)*J.eJ(a)}else return 0}}},
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
p=o.TR(s,q)
if(p===0)return
s=o.a
if(A.WS(s.w.a.c))p=-p
s.Cw(p>0?B.m9:B.ma)
r=s.at
r.toString
s.wi(r-s.r.ze(s,p))},
m(){this.x=null
this.b.$0()},
j(a){return"<optimized out>#"+A.c7(this)}}
A.a1x.prototype={
Ks(a,b){var s=t.uL.a(this.b.x)
if(b!=null)b.dq(new A.yv(s,a,b,0))},
Kt(a,b,c){b.dq(A.arf(b,null,t.zk.a(this.b.x),a,c))},
tM(a,b,c){b.dq(new A.iO(t.zk.a(this.b.x),c,0,a,b,0))},
Kr(a,b){var s=this.b.x
b.dq(new A.k5(s instanceof A.hx?s:null,a,b,0))},
gim(){var s=this.b
return(s==null?null:s.w)!==B.e_},
ghn(){return!0},
geu(){return 0},
m(){this.b=null
this.qS()},
j(a){return"<optimized out>#"+A.c7(this)+"("+A.i(this.b)+")"}}
A.DX.prototype={
MZ(){var s=this.a,r=this.b
r===$&&A.b()
s.fY(r.geu())},
oy(){var s=this.a,r=this.b
r===$&&A.b()
s.fY(r.geu())},
yx(){var s=this.b
s===$&&A.b()
s=s.x
s===$&&A.b()
if(!(Math.abs(this.a.wi(s))<1e-10)){s=this.a
s.fF(new A.li(s))}},
xc(){this.a.fY(0)},
tM(a,b,c){var s=this.b
s===$&&A.b()
b.dq(new A.iO(null,c,s.geu(),a,b,0))},
ghn(){return!0},
geu(){var s=this.b
s===$&&A.b()
return s.geu()},
m(){var s=this.b
s===$&&A.b()
s.m()
this.qS()},
j(a){var s=A.c7(this),r=this.b
r===$&&A.b()
return"<optimized out>#"+s+"("+r.j(0)+")"},
gim(){return this.c}}
A.Ha.prototype={
yx(){var s=this.a,r=this.c
r===$&&A.b()
r=r.x
r===$&&A.b()
if(s.wi(r)!==0){s=this.a
s.fF(new A.li(s))}},
xc(){var s=this.a,r=this.c
r===$&&A.b()
s.fY(r.geu())},
tM(a,b,c){var s=this.c
s===$&&A.b()
b.dq(new A.iO(null,c,s.geu(),a,b,0))},
gim(){return!0},
ghn(){return!0},
geu(){var s=this.c
s===$&&A.b()
return s.geu()},
m(){var s=this.b
s===$&&A.b()
s.eG(0)
s=this.c
s===$&&A.b()
s.m()
this.qS()},
j(a){var s=A.c7(this),r=this.c
r===$&&A.b()
return"<optimized out>#"+s+"("+r.j(0)+")"}}
A.yp.prototype={
qc(a,b,c,d){var s,r=this
if(b.a==null){s=$.fs.hh$
s===$&&A.b()
s=s.P(0,c)}else s=!0
if(s){r.b.qc(a,b,c,d)
return}s=r.a
if(s.gaE(s)==null)return
s=s.gaE(s)
s.toString
if(A.aH0(s)){$.bN.qC(new A.ab6(r,a,b,c,d))
return}r.b.qc(a,b,c,d)},
pL(a,b,c){return this.b.pL(0,b,c)},
pM(a,b){return this.b.pM(a,b)},
uK(a){return this.b.uK(a)}}
A.ab6.prototype={
$1(a){var s=this
A.ed(new A.ab5(s.a,s.b,s.c,s.d,s.e))},
$S:2}
A.ab5.prototype={
$0(){var s=this
return s.a.qc(s.b,s.c,s.d,s.e)},
$S:0}
A.tV.prototype={
I(){return"AndroidOverscrollIndicator."+this.b}}
A.N2.prototype={
a3U(a,b,c,d,e,f){return new A.an2(this,f,c!==!1,d,e,b,a)},
a3K(a){return this.a3U(null,null,null,null,null,a)},
ke(a){return A.mw()},
gA4(){return B.CC},
tn(a,b,c){var s=null
switch(this.ke(a)){case B.bB:case B.bo:case B.bC:return A.aGA(b,c.b,B.cA,s,s,A.Dv(),B.w,s,s,s,s,B.dp,s)
case B.aO:case B.bA:case B.aP:return b}},
tm(a,b,c){var s
switch(this.ke(a)){case B.aP:case B.bB:case B.bo:case B.bC:s=1
break
case B.aO:s=2
break
case B.bA:s=3
break
default:s=null
break}if(s)c$0:for(;!0;)switch(s){case 1:return b
case 2:switch(1){case 1:break}if(2)c$1:for(;!0;)switch(2){case 1:return new A.rh(c.a,B.A,b,null)
case 2:s=3
continue c$0}break c$0
case 3:return new A.pX(c.a,B.l,b,null)}},
vr(a){switch(this.ke(a)){case B.aP:return new A.ab7()
case B.bo:return new A.ab8()
case B.aO:case B.bA:case B.bB:case B.bC:return new A.ab9()}},
ls(a){switch(this.ke(a)){case B.aP:return B.E6
case B.bo:return B.E7
case B.aO:case B.bA:case B.bB:case B.bC:return B.FL}},
j(a){return"ScrollBehavior"}}
A.ab7.prototype={
$1(a){return A.aEz(a.gcu(a))},
$S:371}
A.ab8.prototype={
$1(a){var s=a.gcu(a),r=t.av
return new A.qn(A.b1(20,null,!1,r),s,A.b1(20,null,!1,r))},
$S:372}
A.ab9.prototype={
$1(a){return new A.i2(a.gcu(a),A.b1(20,null,!1,t.av))},
$S:133}
A.an2.prototype={
gA4(){var s=this.f
return s==null?B.CC:s},
tm(a,b,c){var s=this.a.tm(a,b,c)
return s},
tn(a,b,c){if(this.b)return this.a.tn(a,b,c)
return b},
ls(a){var s=this.a.ls(a)
return s},
vr(a){return this.a.vr(a)},
j(a){return"_WrappedScrollBehavior"}}
A.yq.prototype={
cj(a){var s
if(A.D(this.f)===A.D(a.f))s=!1
else s=!0
return s}}
A.qZ.prototype={
hP(a,b,c){return this.a2s(a,b,c)},
a2s(a,b,c){var s=0,r=A.a5(t.H),q=this,p,o,n
var $async$hP=A.Z(function(d,e){if(d===1)return A.a2(e,r)
while(true)switch(s){case 0:n=A.a([],t.mo)
for(p=q.d,o=0;o<p.length;++o)n.push(p[o].hP(a,b,c))
s=2
return A.a8(A.vO(n,t.H),$async$hP)
case 2:return A.a3(null,r)}})
return A.a4($async$hP,r)},
aC(a){this.d.push(a)
a.Z(0,this.geO())},
oV(a,b){b.G(0,this.geO())
B.c.A(this.d,b)},
m(){var s,r,q,p
for(s=this.d,r=s.length,q=this.geO(),p=0;p<s.length;s.length===r||(0,A.P)(s),++p)s[p].G(0,q)
this.dH()},
K8(a,b,c){return A.aH_(b,null,0,!0,c,a)},
j(a){var s=A.a([],t.s),r=this.d,q=r.length
if(q===0)s.push("no clients")
else if(q===1){r=B.c.gbz(r).at
r.toString
s.push("one client, offset "+B.d.N(r,1))}else s.push(""+q+" clients")
return"<optimized out>#"+A.c7(this)+"("+B.c.bb(s,", ")+")"}}
A.hU.prototype={
hd(){var s=this,r=null,q=s.gAE()?s.gfn():r,p=s.gAE()?s.gfm():r,o=s.gLl()?s.gcv():r,n=s.gLn()?s.gqo():r,m=s.gh9()
return new A.vC(q,p,o,n,m)},
gBK(){var s=this
return s.gcv()<s.gfn()||s.gcv()>s.gfm()},
gJB(){var s=this
return s.gcv()===s.gfn()||s.gcv()===s.gfm()},
gl_(){var s=this
return s.gqo()-A.J(s.gfn()-s.gcv(),0,s.gqo())-A.J(s.gcv()-s.gfm(),0,s.gqo())}}
A.vC.prototype={
gfn(){var s=this.a
s.toString
return s},
gfm(){var s=this.b
s.toString
return s},
gAE(){return this.a!=null&&this.b!=null},
gcv(){var s=this.c
s.toString
return s},
gLl(){return this.c!=null},
gqo(){var s=this.d
s.toString
return s},
gLn(){return this.d!=null},
j(a){var s=this
return"FixedScrollMetrics("+B.d.N(Math.max(s.gcv()-s.gfn(),0),1)+"..["+B.d.N(s.gl_(),1)+"].."+B.d.N(Math.max(s.gfm()-s.gcv(),0),1)+")"},
gh9(){return this.e}}
A.Qx.prototype={}
A.eB.prototype={}
A.OH.prototype={
Ml(a){if(t.rS.b(a))++a.da$
return!1}}
A.eo.prototype={
cw(a){this.Se(a)
a.push(this.a.j(0))}}
A.yv.prototype={
cw(a){var s
this.nH(a)
s=this.d
if(s!=null)a.push(s.j(0))}}
A.f0.prototype={
cw(a){var s
this.nH(a)
a.push("scrollDelta: "+A.i(this.e))
s=this.d
if(s!=null)a.push(s.j(0))},
gKw(){return this.d}}
A.iO.prototype={
cw(a){var s,r=this
r.nH(a)
a.push("overscroll: "+B.d.N(r.e,1))
a.push("velocity: "+B.d.N(r.f,1))
s=r.d
if(s!=null)a.push(s.j(0))}}
A.k5.prototype={
cw(a){var s
this.nH(a)
s=this.d
if(s!=null)a.push(s.j(0))},
gKw(){return this.d}}
A.OB.prototype={
cw(a){this.nH(a)
a.push("direction: "+this.d.j(0))}}
A.BI.prototype={
cw(a){var s,r
this.w9(a)
s=this.da$
r=s===0?"local":"remote"
a.push("depth: "+s+" ("+r+")")}}
A.BH.prototype={
cj(a){return this.f!==a.f}}
A.mg.prototype={
a73(a,b){return this.d.$1(b)}}
A.yt.prototype={
T(){return new A.yu(new A.wq(t.z_),B.i)}}
A.yu.prototype={
G(a,b){var s,r,q,p=this.d
p.toString
p=A.aIt(p)
s=A.o(p).c
for(;p.t();){r=p.c
if(r==null)r=s.a(r)
if(J.h(r.d,b)){p=r.a
p.toString
A.o(r).h("nA.E").a(r);++p.a
s=r.b
s.c=r.c
r.c.b=s
q=--p.b
r.a=r.b=r.c=null
if(q===0)p.c=null
else if(r===p.c)p.c=s
return}}},
H7(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.d
if(i.b===0)return
p=A.aB(i,!0,t.Sx)
for(i=p.length,o=0;o<i;++o){s=p[o]
try{if(s.a!=null)J.aBP(s,a)}catch(n){r=A.ak(n)
q=A.az(n)
m=j instanceof A.bZ?A.d7(j):null
l=A.bw("while dispatching notifications for "+A.aM(m==null?A.b3(j):m).j(0))
k=$.hi()
if(k!=null)k.$1(new A.bS(r,q,"widget library",l,new A.abc(j),!1))}}},
H(a){var s=this
return new A.d0(new A.abd(s),new A.d0(new A.abe(s),new A.BH(s,s.a.c,null),null,t.WA),null,t.ji)},
m(){this.d=null
this.aj()}}
A.abc.prototype={
$0(){var s=null,r=this.a
return A.a([A.ir("The "+A.D(r).j(0)+" sending notification was",r,!0,B.b0,s,!1,s,s,B.aC,s,!1,!0,!0,B.bc,s,t.ap)],t.E)},
$S:12}
A.abd.prototype={
$1(a){var s=new A.Pw(null,null,a.a,a.b,0)
s.da$=a.da$
this.a.H7(s)
return!1},
$S:88}
A.abe.prototype={
$1(a){this.a.H7(a)
return!1},
$S:26}
A.Pw.prototype={}
A.yr.prototype={
I(){return"ScrollDecelerationRate."+this.b}}
A.lV.prototype={
hR(a){var s=this.a
s=s==null?null:s.iz(a)
return s==null?a:s},
iz(a){return new A.lV(this.hR(a))},
ze(a,b){var s=this.a
if(s==null)return b
return s.ze(a,b)},
jb(a){var s,r=this.a
if(r==null){r=a.at
r.toString
if(r===0){r=a.z
r.toString
s=a.Q
s.toString
s=r!==s
r=s}else r=!0
return r}return r.jb(a)},
MN(a,b,c){var s=this.a
if(s==null){$.ar.toString
s=$.cH().glj()
return Math.abs(a)>Math.max(Math.abs(s.a),Math.abs(s.b))}return s.MN(a,b,c)},
ow(a,b){var s=this.a
if(s==null)return 0
return s.ow(a,b)},
ta(a,b,c,d){var s=this.a
if(s==null){s=b.c
s.toString
return s}return s.ta(a,b,c,d)},
mt(a,b){var s=this.a
if(s==null)return null
return s.mt(a,b)},
glD(){var s=this.a
s=s==null?null:s.glD()
return s==null?$.azP():s},
gqh(){var s=this.a
s=s==null?null:s.gqh()
return s==null?$.azQ():s},
gBa(){var s=this.a
s=s==null?null:s.gBa()
return s==null?18:s},
guH(){var s=this.a
s=s==null?null:s.guH()
return s==null?50:s},
gpP(){var s=this.a
s=s==null?null:s.gpP()
return s==null?8000:s},
zr(a){var s=this.a
if(s==null)return 0
return s.zr(a)},
gA5(){var s=this.a
return s==null?null:s.gA5()},
gmj(){return!0},
j(a){var s=this.a
if(s==null)return"ScrollPhysics"
return"ScrollPhysics -> "+s.j(0)}}
A.LZ.prototype={
iz(a){return new A.LZ(this.hR(a))},
ta(a,b,c,d){var s,r,q,p,o,n,m,l
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
return p+(o-q)}}l=this.R2(a,b,c,d)
if(r){q=b.b
q.toString
l=A.J(l,p,q)}return l}}
A.um.prototype={
iz(a){return new A.um(this.b,this.hR(a))},
L9(a){switch(this.b.a){case 1:return 0.07*Math.pow(1-a,2)
case 0:return 0.52*Math.pow(1-a,2)}},
ze(a,b){var s,r,q,p,o,n,m
if(!a.gBK())return b
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
m=this.L9((o-Math.abs(b))/s)}else{s.toString
m=this.L9(o/s)}return J.eJ(b)*A.aCo(o,Math.abs(b),m)},
ow(a,b){return 0},
mt(a,b){var s,r,q,p,o,n,m,l=this.gqh()
if(Math.abs(b)>=l.c||a.gBK()){switch(this.b.a){case 1:s=1400
break
case 0:s=0
break
default:s=null}r=this.glD()
q=a.at
q.toString
p=a.z
p.toString
o=a.Q
o.toString
n=new A.Yq(p,o,r,l)
if(q<p){n.f=new A.lW(p,A.BY(r,q-p,b),B.c_)
n.r=-1/0}else if(q>o){n.f=new A.lW(o,A.BY(r,q-o,b),B.c_)
n.r=-1/0}else{q=n.e=A.aEe(0.135,q,b,s)
m=q.gu4()
if(b>0&&m>o){p=q.Ne(o)
n.r=p
n.f=new A.lW(o,A.BY(r,o-o,Math.min(q.e_(0,p),5000)),B.c_)}else if(b<0&&m<p){o=q.Ne(p)
n.r=o
n.f=new A.lW(p,A.BY(r,p-p,Math.min(q.e_(0,o),5000)),B.c_)}else n.r=1/0}return n}return null},
guH(){return 100},
zr(a){return J.eJ(a)*Math.min(0.000816*Math.pow(Math.abs(a),1.967),4e4)},
gA5(){return 3.5},
gpP(){switch(this.b.a){case 1:return 64e3
case 0:return A.lV.prototype.gpP.call(this)}},
glD(){switch(this.b.a){case 1:return A.aw6(0.3,1.3,75)
case 0:return A.lV.prototype.glD.call(this)}}}
A.uz.prototype={
iz(a){return new A.uz(this.hR(a))},
ow(a,b){var s,r,q=a.at
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
mt(a,b){var s,r,q,p,o=null,n=this.gqh()
if(a.gBK()){s=a.at
s.toString
r=a.Q
r.toString
if(s>r)q=r
else q=o
r=a.z
r.toString
if(s<r)q=r
s=this.glD()
r=a.at
r.toString
q.toString
return new A.lW(q,A.BY(s,r-q,Math.min(0,b)),n)}s=Math.abs(b)
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
r=new A.Zt(r,b,n)
s=Math.exp(Math.log(0.35*s/778.3530259679999)/($.azt()-1))
r.e=s
r.f=Math.abs(b*s/3.065)
return r}}
A.r0.prototype={
I(){return"ScrollPositionAlignmentPolicy."+this.b}}
A.k6.prototype={
En(a,b,c,d,e){if(d!=null)this.kE(d)
this.N7()},
gfn(){var s=this.z
s.toString
return s},
gfm(){var s=this.Q
s.toString
return s},
gAE(){return this.z!=null&&this.Q!=null},
gcv(){var s=this.at
s.toString
return s},
gLl(){return this.at!=null},
gqo(){var s=this.ax
s.toString
return s},
gLn(){return this.ax!=null},
kE(a){var s=this,r=a.z
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
if(A.D(a)!==A.D(s))s.fr.MZ()
s.w.De(s.fr.gim())
s.dy.sq(0,s.fr.ghn())},
OC(a){var s,r,q,p=this,o=p.at
o.toString
if(a!==o){s=p.r.ow(p,a)
o=p.at
o.toString
r=a-s
p.at=r
if(r!==o){p.yU()
p.DE()
r=p.at
r.toString
p.zZ(r-o)}if(s!==0){o=p.fr
o.toString
r=p.hd()
q=$.ar.an$.z.i(0,p.w.z)
q.toString
o.tM(r,q,s)
return s}}return 0},
a3V(a){var s=this.at
s.toString
this.at=s+a
this.ch=!0},
At(a){var s=this,r=s.at
r.toString
s.as=a-r
s.at=a
s.yU()
s.DE()
$.bN.cy$.push(new A.abf(s))},
D4(){var s,r=this.w,q=r.c
q.toString
q=A.a8h(q)
if(q!=null){r=r.c
r.toString
s=this.at
s.toString
q.NB(r,s)}},
N7(){var s,r,q
if(this.at==null){s=this.w
r=s.c
r.toString
r=A.a8h(r)
if(r==null)q=null
else{s=s.c
s.toString
q=r.MK(s)}if(q!=null)this.at=q}},
N6(a,b){if(b)this.at=a
else this.e6(a)},
D3(){var s=this.at
s.toString
this.w.e.sq(0,s)
s=$.hV.ah$
s===$&&A.b()
s.L1()},
oA(a){if(this.ax!==a){this.ax=a
this.ch=!0}return!0},
ox(a,b){var s,r,q,p=this
if(!A.Du(p.z,a,0.001)||!A.Du(p.Q,b,0.001)||p.ch||p.db!==A.bo(p.gh9())){p.z=a
p.Q=b
p.db=A.bo(p.gh9())
s=