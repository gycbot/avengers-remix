function Ye(W,u,ie){const oe={programs:0},K={exports:{}},$=K.exports;(function(R,M){if(typeof $=="object"&&typeof K=="object")K.exports=M();else if(typeof define=="function"&&define.amd)define([],M);else{var S=M();for(var d in S)(typeof $=="object"?$:R)[d]=S[d]}})(this,function(){return(function(R){function M(d){if(S[d])return S[d].exports;var n=S[d]={exports:{},id:d,loaded:!1};return R[d].call(n.exports,n,n.exports,M),n.loaded=!0,n.exports}var S={};return M.m=R,M.c=S,M.p="",M(0)})([function(R,M,S){M.glMatrix=S(1),M.mat2=S(2),M.mat2d=S(3),M.mat3=S(4),M.mat4=S(5),M.quat=S(6),M.vec2=S(9),M.vec3=S(7),M.vec4=S(8)},function(R,M){var S={};S.EPSILON=1e-6,S.ARRAY_TYPE=typeof Float32Array<"u"?Float32Array:Array,S.RANDOM=Math.random,S.ENABLE_SIMD=!1,S.SIMD_AVAILABLE=S.ARRAY_TYPE===this.Float32Array&&"SIMD"in this,S.USE_SIMD=S.ENABLE_SIMD&&S.SIMD_AVAILABLE,S.setMatrixArrayType=function(n){S.ARRAY_TYPE=n};var d=Math.PI/180;S.toRadian=function(n){return n*d},S.equals=function(n,e){return Math.abs(n-e)<=S.EPSILON*Math.max(1,Math.abs(n),Math.abs(e))},R.exports=S},function(R,M,S){var d=S(1),n={};n.create=function(){var e=new d.ARRAY_TYPE(4);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e},n.clone=function(e){var t=new d.ARRAY_TYPE(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},n.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e},n.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e},n.fromValues=function(e,t,r,i){var o=new d.ARRAY_TYPE(4);return o[0]=e,o[1]=t,o[2]=r,o[3]=i,o},n.set=function(e,t,r,i,o){return e[0]=t,e[1]=r,e[2]=i,e[3]=o,e},n.transpose=function(e,t){if(e===t){var r=t[1];e[1]=t[2],e[2]=r}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e},n.invert=function(e,t){var r=t[0],i=t[1],o=t[2],a=t[3],s=r*a-o*i;return s?(s=1/s,e[0]=a*s,e[1]=-i*s,e[2]=-o*s,e[3]=r*s,e):null},n.adjoint=function(e,t){var r=t[0];return e[0]=t[3],e[1]=-t[1],e[2]=-t[2],e[3]=r,e},n.determinant=function(e){return e[0]*e[3]-e[2]*e[1]},n.multiply=function(e,t,r){var i=t[0],o=t[1],a=t[2],s=t[3],c=r[0],l=r[1],h=r[2],f=r[3];return e[0]=i*c+a*l,e[1]=o*c+s*l,e[2]=i*h+a*f,e[3]=o*h+s*f,e},n.mul=n.multiply,n.rotate=function(e,t,r){var i=t[0],o=t[1],a=t[2],s=t[3],c=Math.sin(r),l=Math.cos(r);return e[0]=i*l+a*c,e[1]=o*l+s*c,e[2]=i*-c+a*l,e[3]=o*-c+s*l,e},n.scale=function(e,t,r){var i=t[0],o=t[1],a=t[2],s=t[3],c=r[0],l=r[1];return e[0]=i*c,e[1]=o*c,e[2]=a*l,e[3]=s*l,e},n.fromRotation=function(e,t){var r=Math.sin(t),i=Math.cos(t);return e[0]=i,e[1]=r,e[2]=-r,e[3]=i,e},n.fromScaling=function(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=t[1],e},n.str=function(e){return"mat2("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},n.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2))},n.LDU=function(e,t,r,i){return e[2]=i[2]/i[0],r[0]=i[0],r[1]=i[1],r[3]=i[3]-e[2]*r[1],[e,t,r]},n.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e},n.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e},n.sub=n.subtract,n.exactEquals=function(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]},n.equals=function(e,t){var r=e[0],i=e[1],o=e[2],a=e[3],s=t[0],c=t[1],l=t[2],h=t[3];return Math.abs(r-s)<=d.EPSILON*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(i-c)<=d.EPSILON*Math.max(1,Math.abs(i),Math.abs(c))&&Math.abs(o-l)<=d.EPSILON*Math.max(1,Math.abs(o),Math.abs(l))&&Math.abs(a-h)<=d.EPSILON*Math.max(1,Math.abs(a),Math.abs(h))},n.multiplyScalar=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e},n.multiplyScalarAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e[2]=t[2]+r[2]*i,e[3]=t[3]+r[3]*i,e},R.exports=n},function(R,M,S){var d=S(1),n={};n.create=function(){var e=new d.ARRAY_TYPE(6);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e},n.clone=function(e){var t=new d.ARRAY_TYPE(6);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t},n.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e},n.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e},n.fromValues=function(e,t,r,i,o,a){var s=new d.ARRAY_TYPE(6);return s[0]=e,s[1]=t,s[2]=r,s[3]=i,s[4]=o,s[5]=a,s},n.set=function(e,t,r,i,o,a,s){return e[0]=t,e[1]=r,e[2]=i,e[3]=o,e[4]=a,e[5]=s,e},n.invert=function(e,t){var r=t[0],i=t[1],o=t[2],a=t[3],s=t[4],c=t[5],l=r*a-i*o;return l?(l=1/l,e[0]=a*l,e[1]=-i*l,e[2]=-o*l,e[3]=r*l,e[4]=(o*c-a*s)*l,e[5]=(i*s-r*c)*l,e):null},n.determinant=function(e){return e[0]*e[3]-e[1]*e[2]},n.multiply=function(e,t,r){var i=t[0],o=t[1],a=t[2],s=t[3],c=t[4],l=t[5],h=r[0],f=r[1],x=r[2],m=r[3],v=r[4],T=r[5];return e[0]=i*h+a*f,e[1]=o*h+s*f,e[2]=i*x+a*m,e[3]=o*x+s*m,e[4]=i*v+a*T+c,e[5]=o*v+s*T+l,e},n.mul=n.multiply,n.rotate=function(e,t,r){var i=t[0],o=t[1],a=t[2],s=t[3],c=t[4],l=t[5],h=Math.sin(r),f=Math.cos(r);return e[0]=i*f+a*h,e[1]=o*f+s*h,e[2]=i*-h+a*f,e[3]=o*-h+s*f,e[4]=c,e[5]=l,e},n.scale=function(e,t,r){var i=t[0],o=t[1],a=t[2],s=t[3],c=t[4],l=t[5],h=r[0],f=r[1];return e[0]=i*h,e[1]=o*h,e[2]=a*f,e[3]=s*f,e[4]=c,e[5]=l,e},n.translate=function(e,t,r){var i=t[0],o=t[1],a=t[2],s=t[3],c=t[4],l=t[5],h=r[0],f=r[1];return e[0]=i,e[1]=o,e[2]=a,e[3]=s,e[4]=i*h+a*f+c,e[5]=o*h+s*f+l,e},n.fromRotation=function(e,t){var r=Math.sin(t),i=Math.cos(t);return e[0]=i,e[1]=r,e[2]=-r,e[3]=i,e[4]=0,e[5]=0,e},n.fromScaling=function(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=t[1],e[4]=0,e[5]=0,e},n.fromTranslation=function(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=t[0],e[5]=t[1],e},n.str=function(e){return"mat2d("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+")"},n.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+1)},n.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e[4]=t[4]+r[4],e[5]=t[5]+r[5],e},n.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e[4]=t[4]-r[4],e[5]=t[5]-r[5],e},n.sub=n.subtract,n.multiplyScalar=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*r,e[5]=t[5]*r,e},n.multiplyScalarAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e[2]=t[2]+r[2]*i,e[3]=t[3]+r[3]*i,e[4]=t[4]+r[4]*i,e[5]=t[5]+r[5]*i,e},n.exactEquals=function(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]},n.equals=function(e,t){var r=e[0],i=e[1],o=e[2],a=e[3],s=e[4],c=e[5],l=t[0],h=t[1],f=t[2],x=t[3],m=t[4],v=t[5];return Math.abs(r-l)<=d.EPSILON*Math.max(1,Math.abs(r),Math.abs(l))&&Math.abs(i-h)<=d.EPSILON*Math.max(1,Math.abs(i),Math.abs(h))&&Math.abs(o-f)<=d.EPSILON*Math.max(1,Math.abs(o),Math.abs(f))&&Math.abs(a-x)<=d.EPSILON*Math.max(1,Math.abs(a),Math.abs(x))&&Math.abs(s-m)<=d.EPSILON*Math.max(1,Math.abs(s),Math.abs(m))&&Math.abs(c-v)<=d.EPSILON*Math.max(1,Math.abs(c),Math.abs(v))},R.exports=n},function(R,M,S){var d=S(1),n={};n.create=function(){var e=new d.ARRAY_TYPE(9);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e},n.fromMat4=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e},n.clone=function(e){var t=new d.ARRAY_TYPE(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t},n.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e},n.fromValues=function(e,t,r,i,o,a,s,c,l){var h=new d.ARRAY_TYPE(9);return h[0]=e,h[1]=t,h[2]=r,h[3]=i,h[4]=o,h[5]=a,h[6]=s,h[7]=c,h[8]=l,h},n.set=function(e,t,r,i,o,a,s,c,l,h){return e[0]=t,e[1]=r,e[2]=i,e[3]=o,e[4]=a,e[5]=s,e[6]=c,e[7]=l,e[8]=h,e},n.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e},n.transpose=function(e,t){if(e===t){var r=t[1],i=t[2],o=t[5];e[1]=t[3],e[2]=t[6],e[3]=r,e[5]=t[7],e[6]=i,e[7]=o}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e},n.invert=function(e,t){var r=t[0],i=t[1],o=t[2],a=t[3],s=t[4],c=t[5],l=t[6],h=t[7],f=t[8],x=f*s-c*h,m=-f*a+c*l,v=h*a-s*l,T=r*x+i*m+o*v;return T?(T=1/T,e[0]=x*T,e[1]=(-f*i+o*h)*T,e[2]=(c*i-o*s)*T,e[3]=m*T,e[4]=(f*r-o*l)*T,e[5]=(-c*r+o*a)*T,e[6]=v*T,e[7]=(-h*r+i*l)*T,e[8]=(s*r-i*a)*T,e):null},n.adjoint=function(e,t){var r=t[0],i=t[1],o=t[2],a=t[3],s=t[4],c=t[5],l=t[6],h=t[7],f=t[8];return e[0]=s*f-c*h,e[1]=o*h-i*f,e[2]=i*c-o*s,e[3]=c*l-a*f,e[4]=r*f-o*l,e[5]=o*a-r*c,e[6]=a*h-s*l,e[7]=i*l-r*h,e[8]=r*s-i*a,e},n.determinant=function(e){var t=e[0],r=e[1],i=e[2],o=e[3],a=e[4],s=e[5],c=e[6],l=e[7],h=e[8];return t*(h*a-s*l)+r*(-h*o+s*c)+i*(l*o-a*c)},n.multiply=function(e,t,r){var i=t[0],o=t[1],a=t[2],s=t[3],c=t[4],l=t[5],h=t[6],f=t[7],x=t[8],m=r[0],v=r[1],T=r[2],D=r[3],p=r[4],P=r[5],z=r[6],I=r[7],b=r[8];return e[0]=m*i+v*s+T*h,e[1]=m*o+v*c+T*f,e[2]=m*a+v*l+T*x,e[3]=D*i+p*s+P*h,e[4]=D*o+p*c+P*f,e[5]=D*a+p*l+P*x,e[6]=z*i+I*s+b*h,e[7]=z*o+I*c+b*f,e[8]=z*a+I*l+b*x,e},n.mul=n.multiply,n.translate=function(e,t,r){var i=t[0],o=t[1],a=t[2],s=t[3],c=t[4],l=t[5],h=t[6],f=t[7],x=t[8],m=r[0],v=r[1];return e[0]=i,e[1]=o,e[2]=a,e[3]=s,e[4]=c,e[5]=l,e[6]=m*i+v*s+h,e[7]=m*o+v*c+f,e[8]=m*a+v*l+x,e},n.rotate=function(e,t,r){var i=t[0],o=t[1],a=t[2],s=t[3],c=t[4],l=t[5],h=t[6],f=t[7],x=t[8],m=Math.sin(r),v=Math.cos(r);return e[0]=v*i+m*s,e[1]=v*o+m*c,e[2]=v*a+m*l,e[3]=v*s-m*i,e[4]=v*c-m*o,e[5]=v*l-m*a,e[6]=h,e[7]=f,e[8]=x,e},n.scale=function(e,t,r){var i=r[0],o=r[1];return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=o*t[3],e[4]=o*t[4],e[5]=o*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e},n.fromTranslation=function(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=t[0],e[7]=t[1],e[8]=1,e},n.fromRotation=function(e,t){var r=Math.sin(t),i=Math.cos(t);return e[0]=i,e[1]=r,e[2]=0,e[3]=-r,e[4]=i,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e},n.fromScaling=function(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=t[1],e[5]=0,e[6]=0,e[7]=0,e[8]=1,e},n.fromMat2d=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=t[2],e[4]=t[3],e[5]=0,e[6]=t[4],e[7]=t[5],e[8]=1,e},n.fromQuat=function(e,t){var r=t[0],i=t[1],o=t[2],a=t[3],s=r+r,c=i+i,l=o+o,h=r*s,f=i*s,x=i*c,m=o*s,v=o*c,T=o*l,D=a*s,p=a*c,P=a*l;return e[0]=1-x-T,e[3]=f-P,e[6]=m+p,e[1]=f+P,e[4]=1-h-T,e[7]=v-D,e[2]=m-p,e[5]=v+D,e[8]=1-h-x,e},n.normalFromMat4=function(e,t){var r=t[0],i=t[1],o=t[2],a=t[3],s=t[4],c=t[5],l=t[6],h=t[7],f=t[8],x=t[9],m=t[10],v=t[11],T=t[12],D=t[13],p=t[14],P=t[15],z=r*c-i*s,I=r*l-o*s,b=r*h-a*s,E=i*l-o*c,F=i*h-a*c,N=o*h-a*l,w=f*D-x*T,B=f*p-m*T,g=f*P-v*T,L=x*p-m*D,_=x*P-v*D,A=m*P-v*p,y=z*A-I*_+b*L+E*g-F*B+N*w;return y?(y=1/y,e[0]=(c*A-l*_+h*L)*y,e[1]=(l*g-s*A-h*B)*y,e[2]=(s*_-c*g+h*w)*y,e[3]=(o*_-i*A-a*L)*y,e[4]=(r*A-o*g+a*B)*y,e[5]=(i*g-r*_-a*w)*y,e[6]=(D*N-p*F+P*E)*y,e[7]=(p*b-T*N-P*I)*y,e[8]=(T*F-D*b+P*z)*y,e):null},n.str=function(e){return"mat3("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+")"},n.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2))},n.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e[4]=t[4]+r[4],e[5]=t[5]+r[5],e[6]=t[6]+r[6],e[7]=t[7]+r[7],e[8]=t[8]+r[8],e},n.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e[4]=t[4]-r[4],e[5]=t[5]-r[5],e[6]=t[6]-r[6],e[7]=t[7]-r[7],e[8]=t[8]-r[8],e},n.sub=n.subtract,n.multiplyScalar=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=t[7]*r,e[8]=t[8]*r,e},n.multiplyScalarAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e[2]=t[2]+r[2]*i,e[3]=t[3]+r[3]*i,e[4]=t[4]+r[4]*i,e[5]=t[5]+r[5]*i,e[6]=t[6]+r[6]*i,e[7]=t[7]+r[7]*i,e[8]=t[8]+r[8]*i,e},n.exactEquals=function(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]},n.equals=function(e,t){var r=e[0],i=e[1],o=e[2],a=e[3],s=e[4],c=e[5],l=e[6],h=e[7],f=e[8],x=t[0],m=t[1],v=t[2],T=t[3],D=t[4],p=t[5],P=e[6],z=t[7],I=t[8];return Math.abs(r-x)<=d.EPSILON*Math.max(1,Math.abs(r),Math.abs(x))&&Math.abs(i-m)<=d.EPSILON*Math.max(1,Math.abs(i),Math.abs(m))&&Math.abs(o-v)<=d.EPSILON*Math.max(1,Math.abs(o),Math.abs(v))&&Math.abs(a-T)<=d.EPSILON*Math.max(1,Math.abs(a),Math.abs(T))&&Math.abs(s-D)<=d.EPSILON*Math.max(1,Math.abs(s),Math.abs(D))&&Math.abs(c-p)<=d.EPSILON*Math.max(1,Math.abs(c),Math.abs(p))&&Math.abs(l-P)<=d.EPSILON*Math.max(1,Math.abs(l),Math.abs(P))&&Math.abs(h-z)<=d.EPSILON*Math.max(1,Math.abs(h),Math.abs(z))&&Math.abs(f-I)<=d.EPSILON*Math.max(1,Math.abs(f),Math.abs(I))},R.exports=n},function(R,M,S){var d=S(1),n={scalar:{},SIMD:{}};n.create=function(){var e=new d.ARRAY_TYPE(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},n.clone=function(e){var t=new d.ARRAY_TYPE(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},n.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},n.fromValues=function(e,t,r,i,o,a,s,c,l,h,f,x,m,v,T,D){var p=new d.ARRAY_TYPE(16);return p[0]=e,p[1]=t,p[2]=r,p[3]=i,p[4]=o,p[5]=a,p[6]=s,p[7]=c,p[8]=l,p[9]=h,p[10]=f,p[11]=x,p[12]=m,p[13]=v,p[14]=T,p[15]=D,p},n.set=function(e,t,r,i,o,a,s,c,l,h,f,x,m,v,T,D,p){return e[0]=t,e[1]=r,e[2]=i,e[3]=o,e[4]=a,e[5]=s,e[6]=c,e[7]=l,e[8]=h,e[9]=f,e[10]=x,e[11]=m,e[12]=v,e[13]=T,e[14]=D,e[15]=p,e},n.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},n.scalar.transpose=function(e,t){if(e===t){var r=t[1],i=t[2],o=t[3],a=t[6],s=t[7],c=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=i,e[9]=a,e[11]=t[14],e[12]=o,e[13]=s,e[14]=c}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e},n.SIMD.transpose=function(e,t){var r,i,o,a,s,c,l,h,f,x;return r=SIMD.Float32x4.load(t,0),i=SIMD.Float32x4.load(t,4),o=SIMD.Float32x4.load(t,8),a=SIMD.Float32x4.load(t,12),s=SIMD.Float32x4.shuffle(r,i,0,1,4,5),c=SIMD.Float32x4.shuffle(o,a,0,1,4,5),l=SIMD.Float32x4.shuffle(s,c,0,2,4,6),h=SIMD.Float32x4.shuffle(s,c,1,3,5,7),SIMD.Float32x4.store(e,0,l),SIMD.Float32x4.store(e,4,h),s=SIMD.Float32x4.shuffle(r,i,2,3,6,7),c=SIMD.Float32x4.shuffle(o,a,2,3,6,7),f=SIMD.Float32x4.shuffle(s,c,0,2,4,6),x=SIMD.Float32x4.shuffle(s,c,1,3,5,7),SIMD.Float32x4.store(e,8,f),SIMD.Float32x4.store(e,12,x),e},n.transpose=d.USE_SIMD?n.SIMD.transpose:n.scalar.transpose,n.scalar.invert=function(e,t){var r=t[0],i=t[1],o=t[2],a=t[3],s=t[4],c=t[5],l=t[6],h=t[7],f=t[8],x=t[9],m=t[10],v=t[11],T=t[12],D=t[13],p=t[14],P=t[15],z=r*c-i*s,I=r*l-o*s,b=r*h-a*s,E=i*l-o*c,F=i*h-a*c,N=o*h-a*l,w=f*D-x*T,B=f*p-m*T,g=f*P-v*T,L=x*p-m*D,_=x*P-v*D,A=m*P-v*p,y=z*A-I*_+b*L+E*g-F*B+N*w;return y?(y=1/y,e[0]=(c*A-l*_+h*L)*y,e[1]=(o*_-i*A-a*L)*y,e[2]=(D*N-p*F+P*E)*y,e[3]=(m*F-x*N-v*E)*y,e[4]=(l*g-s*A-h*B)*y,e[5]=(r*A-o*g+a*B)*y,e[6]=(p*b-T*N-P*I)*y,e[7]=(f*N-m*b+v*I)*y,e[8]=(s*_-c*g+h*w)*y,e[9]=(i*g-r*_-a*w)*y,e[10]=(T*F-D*b+P*z)*y,e[11]=(x*b-f*F-v*z)*y,e[12]=(c*B-s*L-l*w)*y,e[13]=(r*L-i*B+o*w)*y,e[14]=(D*I-T*E-p*z)*y,e[15]=(f*E-x*I+m*z)*y,e):null},n.SIMD.invert=function(e,t){var r,i,o,a,s,c,l,h,f,x,m=SIMD.Float32x4.load(t,0),v=SIMD.Float32x4.load(t,4),T=SIMD.Float32x4.load(t,8),D=SIMD.Float32x4.load(t,12);return s=SIMD.Float32x4.shuffle(m,v,0,1,4,5),i=SIMD.Float32x4.shuffle(T,D,0,1,4,5),r=SIMD.Float32x4.shuffle(s,i,0,2,4,6),i=SIMD.Float32x4.shuffle(i,s,1,3,5,7),s=SIMD.Float32x4.shuffle(m,v,2,3,6,7),a=SIMD.Float32x4.shuffle(T,D,2,3,6,7),o=SIMD.Float32x4.shuffle(s,a,0,2,4,6),a=SIMD.Float32x4.shuffle(a,s,1,3,5,7),s=SIMD.Float32x4.mul(o,a),s=SIMD.Float32x4.swizzle(s,1,0,3,2),c=SIMD.Float32x4.mul(i,s),l=SIMD.Float32x4.mul(r,s),s=SIMD.Float32x4.swizzle(s,2,3,0,1),c=SIMD.Float32x4.sub(SIMD.Float32x4.mul(i,s),c),l=SIMD.Float32x4.sub(SIMD.Float32x4.mul(r,s),l),l=SIMD.Float32x4.swizzle(l,2,3,0,1),s=SIMD.Float32x4.mul(i,o),s=SIMD.Float32x4.swizzle(s,1,0,3,2),c=SIMD.Float32x4.add(SIMD.Float32x4.mul(a,s),c),f=SIMD.Float32x4.mul(r,s),s=SIMD.Float32x4.swizzle(s,2,3,0,1),c=SIMD.Float32x4.sub(c,SIMD.Float32x4.mul(a,s)),f=SIMD.Float32x4.sub(SIMD.Float32x4.mul(r,s),f),f=SIMD.Float32x4.swizzle(f,2,3,0,1),s=SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i,2,3,0,1),a),s=SIMD.Float32x4.swizzle(s,1,0,3,2),o=SIMD.Float32x4.swizzle(o,2,3,0,1),c=SIMD.Float32x4.add(SIMD.Float32x4.mul(o,s),c),h=SIMD.Float32x4.mul(r,s),s=SIMD.Float32x4.swizzle(s,2,3,0,1),c=SIMD.Float32x4.sub(c,SIMD.Float32x4.mul(o,s)),h=SIMD.Float32x4.sub(SIMD.Float32x4.mul(r,s),h),h=SIMD.Float32x4.swizzle(h,2,3,0,1),s=SIMD.Float32x4.mul(r,i),s=SIMD.Float32x4.swizzle(s,1,0,3,2),h=SIMD.Float32x4.add(SIMD.Float32x4.mul(a,s),h),f=SIMD.Float32x4.sub(SIMD.Float32x4.mul(o,s),f),s=SIMD.Float32x4.swizzle(s,2,3,0,1),h=SIMD.Float32x4.sub(SIMD.Float32x4.mul(a,s),h),f=SIMD.Float32x4.sub(f,SIMD.Float32x4.mul(o,s)),s=SIMD.Float32x4.mul(r,a),s=SIMD.Float32x4.swizzle(s,1,0,3,2),l=SIMD.Float32x4.sub(l,SIMD.Float32x4.mul(o,s)),h=SIMD.Float32x4.add(SIMD.Float32x4.mul(i,s),h),s=SIMD.Float32x4.swizzle(s,2,3,0,1),l=SIMD.Float32x4.add(SIMD.Float32x4.mul(o,s),l),h=SIMD.Float32x4.sub(h,SIMD.Float32x4.mul(i,s)),s=SIMD.Float32x4.mul(r,o),s=SIMD.Float32x4.swizzle(s,1,0,3,2),l=SIMD.Float32x4.add(SIMD.Float32x4.mul(a,s),l),f=SIMD.Float32x4.sub(f,SIMD.Float32x4.mul(i,s)),s=SIMD.Float32x4.swizzle(s,2,3,0,1),l=SIMD.Float32x4.sub(l,SIMD.Float32x4.mul(a,s)),f=SIMD.Float32x4.add(SIMD.Float32x4.mul(i,s),f),x=SIMD.Float32x4.mul(r,c),x=SIMD.Float32x4.add(SIMD.Float32x4.swizzle(x,2,3,0,1),x),x=SIMD.Float32x4.add(SIMD.Float32x4.swizzle(x,1,0,3,2),x),s=SIMD.Float32x4.reciprocalApproximation(x),x=SIMD.Float32x4.sub(SIMD.Float32x4.add(s,s),SIMD.Float32x4.mul(x,SIMD.Float32x4.mul(s,s))),(x=SIMD.Float32x4.swizzle(x,0,0,0,0))?(SIMD.Float32x4.store(e,0,SIMD.Float32x4.mul(x,c)),SIMD.Float32x4.store(e,4,SIMD.Float32x4.mul(x,l)),SIMD.Float32x4.store(e,8,SIMD.Float32x4.mul(x,h)),SIMD.Float32x4.store(e,12,SIMD.Float32x4.mul(x,f)),e):null},n.invert=d.USE_SIMD?n.SIMD.invert:n.scalar.invert,n.scalar.adjoint=function(e,t){var r=t[0],i=t[1],o=t[2],a=t[3],s=t[4],c=t[5],l=t[6],h=t[7],f=t[8],x=t[9],m=t[10],v=t[11],T=t[12],D=t[13],p=t[14],P=t[15];return e[0]=c*(m*P-v*p)-x*(l*P-h*p)+D*(l*v-h*m),e[1]=-(i*(m*P-v*p)-x*(o*P-a*p)+D*(o*v-a*m)),e[2]=i*(l*P-h*p)-c*(o*P-a*p)+D*(o*h-a*l),e[3]=-(i*(l*v-h*m)-c*(o*v-a*m)+x*(o*h-a*l)),e[4]=-(s*(m*P-v*p)-f*(l*P-h*p)+T*(l*v-h*m)),e[5]=r*(m*P-v*p)-f*(o*P-a*p)+T*(o*v-a*m),e[6]=-(r*(l*P-h*p)-s*(o*P-a*p)+T*(o*h-a*l)),e[7]=r*(l*v-h*m)-s*(o*v-a*m)+f*(o*h-a*l),e[8]=s*(x*P-v*D)-f*(c*P-h*D)+T*(c*v-h*x),e[9]=-(r*(x*P-v*D)-f*(i*P-a*D)+T*(i*v-a*x)),e[10]=r*(c*P-h*D)-s*(i*P-a*D)+T*(i*h-a*c),e[11]=-(r*(c*v-h*x)-s*(i*v-a*x)+f*(i*h-a*c)),e[12]=-(s*(x*p-m*D)-f*(c*p-l*D)+T*(c*m-l*x)),e[13]=r*(x*p-m*D)-f*(i*p-o*D)+T*(i*m-o*x),e[14]=-(r*(c*p-l*D)-s*(i*p-o*D)+T*(i*l-o*c)),e[15]=r*(c*m-l*x)-s*(i*m-o*x)+f*(i*l-o*c),e},n.SIMD.adjoint=function(e,t){var r,i,o,a,s,c,l,h,f,x,m,v,T;return r=SIMD.Float32x4.load(t,0),i=SIMD.Float32x4.load(t,4),o=SIMD.Float32x4.load(t,8),a=SIMD.Float32x4.load(t,12),f=SIMD.Float32x4.shuffle(r,i,0,1,4,5),c=SIMD.Float32x4.shuffle(o,a,0,1,4,5),s=SIMD.Float32x4.shuffle(f,c,0,2,4,6),c=SIMD.Float32x4.shuffle(c,f,1,3,5,7),f=SIMD.Float32x4.shuffle(r,i,2,3,6,7),h=SIMD.Float32x4.shuffle(o,a,2,3,6,7),l=SIMD.Float32x4.shuffle(f,h,0,2,4,6),h=SIMD.Float32x4.shuffle(h,f,1,3,5,7),f=SIMD.Float32x4.mul(l,h),f=SIMD.Float32x4.swizzle(f,1,0,3,2),x=SIMD.Float32x4.mul(c,f),m=SIMD.Float32x4.mul(s,f),f=SIMD.Float32x4.swizzle(f,2,3,0,1),x=SIMD.Float32x4.sub(SIMD.Float32x4.mul(c,f),x),m=SIMD.Float32x4.sub(SIMD.Float32x4.mul(s,f),m),m=SIMD.Float32x4.swizzle(m,2,3,0,1),f=SIMD.Float32x4.mul(c,l),f=SIMD.Float32x4.swizzle(f,1,0,3,2),x=SIMD.Float32x4.add(SIMD.Float32x4.mul(h,f),x),T=SIMD.Float32x4.mul(s,f),f=SIMD.Float32x4.swizzle(f,2,3,0,1),x=SIMD.Float32x4.sub(x,SIMD.Float32x4.mul(h,f)),T=SIMD.Float32x4.sub(SIMD.Float32x4.mul(s,f),T),T=SIMD.Float32x4.swizzle(T,2,3,0,1),f=SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c,2,3,0,1),h),f=SIMD.Float32x4.swizzle(f,1,0,3,2),l=SIMD.Float32x4.swizzle(l,2,3,0,1),x=SIMD.Float32x4.add(SIMD.Float32x4.mul(l,f),x),v=SIMD.Float32x4.mul(s,f),f=SIMD.Float32x4.swizzle(f,2,3,0,1),x=SIMD.Float32x4.sub(x,SIMD.Float32x4.mul(l,f)),v=SIMD.Float32x4.sub(SIMD.Float32x4.mul(s,f),v),v=SIMD.Float32x4.swizzle(v,2,3,0,1),f=SIMD.Float32x4.mul(s,c),f=SIMD.Float32x4.swizzle(f,1,0,3,2),v=SIMD.Float32x4.add(SIMD.Float32x4.mul(h,f),v),T=SIMD.Float32x4.sub(SIMD.Float32x4.mul(l,f),T),f=SIMD.Float32x4.swizzle(f,2,3,0,1),v=SIMD.Float32x4.sub(SIMD.Float32x4.mul(h,f),v),T=SIMD.Float32x4.sub(T,SIMD.Float32x4.mul(l,f)),f=SIMD.Float32x4.mul(s,h),f=SIMD.Float32x4.swizzle(f,1,0,3,2),m=SIMD.Float32x4.sub(m,SIMD.Float32x4.mul(l,f)),v=SIMD.Float32x4.add(SIMD.Float32x4.mul(c,f),v),f=SIMD.Float32x4.swizzle(f,2,3,0,1),m=SIMD.Float32x4.add(SIMD.Float32x4.mul(l,f),m),v=SIMD.Float32x4.sub(v,SIMD.Float32x4.mul(c,f)),f=SIMD.Float32x4.mul(s,l),f=SIMD.Float32x4.swizzle(f,1,0,3,2),m=SIMD.Float32x4.add(SIMD.Float32x4.mul(h,f),m),T=SIMD.Float32x4.sub(T,SIMD.Float32x4.mul(c,f)),f=SIMD.Float32x4.swizzle(f,2,3,0,1),m=SIMD.Float32x4.sub(m,SIMD.Float32x4.mul(h,f)),T=SIMD.Float32x4.add(SIMD.Float32x4.mul(c,f),T),SIMD.Float32x4.store(e,0,x),SIMD.Float32x4.store(e,4,m),SIMD.Float32x4.store(e,8,v),SIMD.Float32x4.store(e,12,T),e},n.adjoint=d.USE_SIMD?n.SIMD.adjoint:n.scalar.adjoint,n.determinant=function(e){var t=e[0],r=e[1],i=e[2],o=e[3],a=e[4],s=e[5],c=e[6],l=e[7],h=e[8],f=e[9],x=e[10],m=e[11],v=e[12],T=e[13],D=e[14],p=e[15],P=t*s-r*a,z=t*c-i*a,I=t*l-o*a,b=r*c-i*s,E=r*l-o*s,F=i*l-o*c,N=h*T-f*v,w=h*D-x*v,B=h*p-m*v,g=f*D-x*T,L=f*p-m*T,_=x*p-m*D;return P*_-z*L+I*g+b*B-E*w+F*N},n.SIMD.multiply=function(e,t,r){var i=SIMD.Float32x4.load(t,0),o=SIMD.Float32x4.load(t,4),a=SIMD.Float32x4.load(t,8),s=SIMD.Float32x4.load(t,12),c=SIMD.Float32x4.load(r,0),l=SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c,0,0,0,0),i),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c,1,1,1,1),o),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c,2,2,2,2),a),SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c,3,3,3,3),s))));SIMD.Float32x4.store(e,0,l);var h=SIMD.Float32x4.load(r,4),f=SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h,0,0,0,0),i),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h,1,1,1,1),o),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h,2,2,2,2),a),SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h,3,3,3,3),s))));SIMD.Float32x4.store(e,4,f);var x=SIMD.Float32x4.load(r,8),m=SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(x,0,0,0,0),i),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(x,1,1,1,1),o),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(x,2,2,2,2),a),SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(x,3,3,3,3),s))));SIMD.Float32x4.store(e,8,m);var v=SIMD.Float32x4.load(r,12),T=SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(v,0,0,0,0),i),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(v,1,1,1,1),o),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(v,2,2,2,2),a),SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(v,3,3,3,3),s))));return SIMD.Float32x4.store(e,12,T),e},n.scalar.multiply=function(e,t,r){var i=t[0],o=t[1],a=t[2],s=t[3],c=t[4],l=t[5],h=t[6],f=t[7],x=t[8],m=t[9],v=t[10],T=t[11],D=t[12],p=t[13],P=t[14],z=t[15],I=r[0],b=r[1],E=r[2],F=r[3];return e[0]=I*i+b*c+E*x+F*D,e[1]=I*o+b*l+E*m+F*p,e[2]=I*a+b*h+E*v+F*P,e[3]=I*s+b*f+E*T+F*z,I=r[4],b=r[5],E=r[6],F=r[7],e[4]=I*i+b*c+E*x+F*D,e[5]=I*o+b*l+E*m+F*p,e[6]=I*a+b*h+E*v+F*P,e[7]=I*s+b*f+E*T+F*z,I=r[8],b=r[9],E=r[10],F=r[11],e[8]=I*i+b*c+E*x+F*D,e[9]=I*o+b*l+E*m+F*p,e[10]=I*a+b*h+E*v+F*P,e[11]=I*s+b*f+E*T+F*z,I=r[12],b=r[13],E=r[14],F=r[15],e[12]=I*i+b*c+E*x+F*D,e[13]=I*o+b*l+E*m+F*p,e[14]=I*a+b*h+E*v+F*P,e[15]=I*s+b*f+E*T+F*z,e},n.multiply=d.USE_SIMD?n.SIMD.multiply:n.scalar.multiply,n.mul=n.multiply,n.scalar.translate=function(e,t,r){var i,o,a,s,c,l,h,f,x,m,v,T,D=r[0],p=r[1],P=r[2];return t===e?(e[12]=t[0]*D+t[4]*p+t[8]*P+t[12],e[13]=t[1]*D+t[5]*p+t[9]*P+t[13],e[14]=t[2]*D+t[6]*p+t[10]*P+t[14],e[15]=t[3]*D+t[7]*p+t[11]*P+t[15]):(i=t[0],o=t[1],a=t[2],s=t[3],c=t[4],l=t[5],h=t[6],f=t[7],x=t[8],m=t[9],v=t[10],T=t[11],e[0]=i,e[1]=o,e[2]=a,e[3]=s,e[4]=c,e[5]=l,e[6]=h,e[7]=f,e[8]=x,e[9]=m,e[10]=v,e[11]=T,e[12]=i*D+c*p+x*P+t[12],e[13]=o*D+l*p+m*P+t[13],e[14]=a*D+h*p+v*P+t[14],e[15]=s*D+f*p+T*P+t[15]),e},n.SIMD.translate=function(e,t,r){var i=SIMD.Float32x4.load(t,0),o=SIMD.Float32x4.load(t,4),a=SIMD.Float32x4.load(t,8),s=SIMD.Float32x4.load(t,12),c=SIMD.Float32x4(r[0],r[1],r[2],0);t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11]),i=SIMD.Float32x4.mul(i,SIMD.Float32x4.swizzle(c,0,0,0,0)),o=SIMD.Float32x4.mul(o,SIMD.Float32x4.swizzle(c,1,1,1,1)),a=SIMD.Float32x4.mul(a,SIMD.Float32x4.swizzle(c,2,2,2,2));var l=SIMD.Float32x4.add(i,SIMD.Float32x4.add(o,SIMD.Float32x4.add(a,s)));return SIMD.Float32x4.store(e,12,l),e},n.translate=d.USE_SIMD?n.SIMD.translate:n.scalar.translate,n.scalar.scale=function(e,t,r){var i=r[0],o=r[1],a=r[2];return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=t[3]*i,e[4]=t[4]*o,e[5]=t[5]*o,e[6]=t[6]*o,e[7]=t[7]*o,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},n.SIMD.scale=function(e,t,r){var i,o,a,s=SIMD.Float32x4(r[0],r[1],r[2],0);return i=SIMD.Float32x4.load(t,0),SIMD.Float32x4.store(e,0,SIMD.Float32x4.mul(i,SIMD.Float32x4.swizzle(s,0,0,0,0))),o=SIMD.Float32x4.load(t,4),SIMD.Float32x4.store(e,4,SIMD.Float32x4.mul(o,SIMD.Float32x4.swizzle(s,1,1,1,1))),a=SIMD.Float32x4.load(t,8),SIMD.Float32x4.store(e,8,SIMD.Float32x4.mul(a,SIMD.Float32x4.swizzle(s,2,2,2,2))),e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},n.scale=d.USE_SIMD?n.SIMD.scale:n.scalar.scale,n.rotate=function(e,t,r,i){var o,a,s,c,l,h,f,x,m,v,T,D,p,P,z,I,b,E,F,N,w,B,g,L,_=i[0],A=i[1],y=i[2],G=Math.sqrt(_*_+A*A+y*y);return Math.abs(G)<d.EPSILON?null:(G=1/G,_*=G,A*=G,y*=G,o=Math.sin(r),a=Math.cos(r),s=1-a,c=t[0],l=t[1],h=t[2],f=t[3],x=t[4],m=t[5],v=t[6],T=t[7],D=t[8],p=t[9],P=t[10],z=t[11],I=_*_*s+a,b=A*_*s+y*o,E=y*_*s-A*o,F=_*A*s-y*o,N=A*A*s+a,w=y*A*s+_*o,B=_*y*s+A*o,g=A*y*s-_*o,L=y*y*s+a,e[0]=c*I+x*b+D*E,e[1]=l*I+m*b+p*E,e[2]=h*I+v*b+P*E,e[3]=f*I+T*b+z*E,e[4]=c*F+x*N+D*w,e[5]=l*F+m*N+p*w,e[6]=h*F+v*N+P*w,e[7]=f*F+T*N+z*w,e[8]=c*B+x*g+D*L,e[9]=l*B+m*g+p*L,e[10]=h*B+v*g+P*L,e[11]=f*B+T*g+z*L,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)},n.scalar.rotateX=function(e,t,r){var i=Math.sin(r),o=Math.cos(r),a=t[4],s=t[5],c=t[6],l=t[7],h=t[8],f=t[9],x=t[10],m=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*o+h*i,e[5]=s*o+f*i,e[6]=c*o+x*i,e[7]=l*o+m*i,e[8]=h*o-a*i,e[9]=f*o-s*i,e[10]=x*o-c*i,e[11]=m*o-l*i,e},n.SIMD.rotateX=function(e,t,r){var i=SIMD.Float32x4.splat(Math.sin(r)),o=SIMD.Float32x4.splat(Math.cos(r));t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]);var a=SIMD.Float32x4.load(t,4),s=SIMD.Float32x4.load(t,8);return SIMD.Float32x4.store(e,4,SIMD.Float32x4.add(SIMD.Float32x4.mul(a,o),SIMD.Float32x4.mul(s,i))),SIMD.Float32x4.store(e,8,SIMD.Float32x4.sub(SIMD.Float32x4.mul(s,o),SIMD.Float32x4.mul(a,i))),e},n.rotateX=d.USE_SIMD?n.SIMD.rotateX:n.scalar.rotateX,n.scalar.rotateY=function(e,t,r){var i=Math.sin(r),o=Math.cos(r),a=t[0],s=t[1],c=t[2],l=t[3],h=t[8],f=t[9],x=t[10],m=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*o-h*i,e[1]=s*o-f*i,e[2]=c*o-x*i,e[3]=l*o-m*i,e[8]=a*i+h*o,e[9]=s*i+f*o,e[10]=c*i+x*o,e[11]=l*i+m*o,e},n.SIMD.rotateY=function(e,t,r){var i=SIMD.Float32x4.splat(Math.sin(r)),o=SIMD.Float32x4.splat(Math.cos(r));t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]);var a=SIMD.Float32x4.load(t,0),s=SIMD.Float32x4.load(t,8);return SIMD.Float32x4.store(e,0,SIMD.Float32x4.sub(SIMD.Float32x4.mul(a,o),SIMD.Float32x4.mul(s,i))),SIMD.Float32x4.store(e,8,SIMD.Float32x4.add(SIMD.Float32x4.mul(a,i),SIMD.Float32x4.mul(s,o))),e},n.rotateY=d.USE_SIMD?n.SIMD.rotateY:n.scalar.rotateY,n.scalar.rotateZ=function(e,t,r){var i=Math.sin(r),o=Math.cos(r),a=t[0],s=t[1],c=t[2],l=t[3],h=t[4],f=t[5],x=t[6],m=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*o+h*i,e[1]=s*o+f*i,e[2]=c*o+x*i,e[3]=l*o+m*i,e[4]=h*o-a*i,e[5]=f*o-s*i,e[6]=x*o-c*i,e[7]=m*o-l*i,e},n.SIMD.rotateZ=function(e,t,r){var i=SIMD.Float32x4.splat(Math.sin(r)),o=SIMD.Float32x4.splat(Math.cos(r));t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]);var a=SIMD.Float32x4.load(t,0),s=SIMD.Float32x4.load(t,4);return SIMD.Float32x4.store(e,0,SIMD.Float32x4.add(SIMD.Float32x4.mul(a,o),SIMD.Float32x4.mul(s,i))),SIMD.Float32x4.store(e,4,SIMD.Float32x4.sub(SIMD.Float32x4.mul(s,o),SIMD.Float32x4.mul(a,i))),e},n.rotateZ=d.USE_SIMD?n.SIMD.rotateZ:n.scalar.rotateZ,n.fromTranslation=function(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e},n.fromScaling=function(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},n.fromRotation=function(e,t,r){var i,o,a,s=r[0],c=r[1],l=r[2],h=Math.sqrt(s*s+c*c+l*l);return Math.abs(h)<d.EPSILON?null:(h=1/h,s*=h,c*=h,l*=h,i=Math.sin(t),o=Math.cos(t),a=1-o,e[0]=s*s*a+o,e[1]=c*s*a+l*i,e[2]=l*s*a-c*i,e[3]=0,e[4]=s*c*a-l*i,e[5]=c*c*a+o,e[6]=l*c*a+s*i,e[7]=0,e[8]=s*l*a+c*i,e[9]=c*l*a-s*i,e[10]=l*l*a+o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)},n.fromXRotation=function(e,t){var r=Math.sin(t),i=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=i,e[6]=r,e[7]=0,e[8]=0,e[9]=-r,e[10]=i,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},n.fromYRotation=function(e,t){var r=Math.sin(t),i=Math.cos(t);return e[0]=i,e[1]=0,e[2]=-r,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=r,e[9]=0,e[10]=i,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},n.fromZRotation=function(e,t){var r=Math.sin(t),i=Math.cos(t);return e[0]=i,e[1]=r,e[2]=0,e[3]=0,e[4]=-r,e[5]=i,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},n.fromRotationTranslation=function(e,t,r){var i=t[0],o=t[1],a=t[2],s=t[3],c=i+i,l=o+o,h=a+a,f=i*c,x=i*l,m=i*h,v=o*l,T=o*h,D=a*h,p=s*c,P=s*l,z=s*h;return e[0]=1-(v+D),e[1]=x+z,e[2]=m-P,e[3]=0,e[4]=x-z,e[5]=1-(f+D),e[6]=T+p,e[7]=0,e[8]=m+P,e[9]=T-p,e[10]=1-(f+v),e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e},n.getTranslation=function(e,t){return e[0]=t[12],e[1]=t[13],e[2]=t[14],e},n.getRotation=function(e,t){var r=t[0]+t[5]+t[10],i=0;return r>0?(i=2*Math.sqrt(r+1),e[3]=.25*i,e[0]=(t[6]-t[9])/i,e[1]=(t[8]-t[2])/i,e[2]=(t[1]-t[4])/i):t[0]>t[5]&t[0]>t[10]?(i=2*Math.sqrt(1+t[0]-t[5]-t[10]),e[3]=(t[6]-t[9])/i,e[0]=.25*i,e[1]=(t[1]+t[4])/i,e[2]=(t[8]+t[2])/i):t[5]>t[10]?(i=2*Math.sqrt(1+t[5]-t[0]-t[10]),e[3]=(t[8]-t[2])/i,e[0]=(t[1]+t[4])/i,e[1]=.25*i,e[2]=(t[6]+t[9])/i):(i=2*Math.sqrt(1+t[10]-t[0]-t[5]),e[3]=(t[1]-t[4])/i,e[0]=(t[8]+t[2])/i,e[1]=(t[6]+t[9])/i,e[2]=.25*i),e},n.fromRotationTranslationScale=function(e,t,r,i){var o=t[0],a=t[1],s=t[2],c=t[3],l=o+o,h=a+a,f=s+s,x=o*l,m=o*h,v=o*f,T=a*h,D=a*f,p=s*f,P=c*l,z=c*h,I=c*f,b=i[0],E=i[1],F=i[2];return e[0]=(1-(T+p))*b,e[1]=(m+I)*b,e[2]=(v-z)*b,e[3]=0,e[4]=(m-I)*E,e[5]=(1-(x+p))*E,e[6]=(D+P)*E,e[7]=0,e[8]=(v+z)*F,e[9]=(D-P)*F,e[10]=(1-(x+T))*F,e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e},n.fromRotationTranslationScaleOrigin=function(e,t,r,i,o){var a=t[0],s=t[1],c=t[2],l=t[3],h=a+a,f=s+s,x=c+c,m=a*h,v=a*f,T=a*x,D=s*f,p=s*x,P=c*x,z=l*h,I=l*f,b=l*x,E=i[0],F=i[1],N=i[2],w=o[0],B=o[1],g=o[2];return e[0]=(1-(D+P))*E,e[1]=(v+b)*E,e[2]=(T-I)*E,e[3]=0,e[4]=(v-b)*F,e[5]=(1-(m+P))*F,e[6]=(p+z)*F,e[7]=0,e[8]=(T+I)*N,e[9]=(p-z)*N,e[10]=(1-(m+D))*N,e[11]=0,e[12]=r[0]+w-(e[0]*w+e[4]*B+e[8]*g),e[13]=r[1]+B-(e[1]*w+e[5]*B+e[9]*g),e[14]=r[2]+g-(e[2]*w+e[6]*B+e[10]*g),e[15]=1,e},n.fromQuat=function(e,t){var r=t[0],i=t[1],o=t[2],a=t[3],s=r+r,c=i+i,l=o+o,h=r*s,f=i*s,x=i*c,m=o*s,v=o*c,T=o*l,D=a*s,p=a*c,P=a*l;return e[0]=1-x-T,e[1]=f+P,e[2]=m-p,e[3]=0,e[4]=f-P,e[5]=1-h-T,e[6]=v+D,e[7]=0,e[8]=m+p,e[9]=v-D,e[10]=1-h-x,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},n.frustum=function(e,t,r,i,o,a,s){var c=1/(r-t),l=1/(o-i),h=1/(a-s);return e[0]=2*a*c,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=2*a*l,e[6]=0,e[7]=0,e[8]=(r+t)*c,e[9]=(o+i)*l,e[10]=(s+a)*h,e[11]=-1,e[12]=0,e[13]=0,e[14]=s*a*2*h,e[15]=0,e},n.perspective=function(e,t,r,i,o){var a=1/Math.tan(t/2),s=1/(i-o);return e[0]=a/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(o+i)*s,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*o*i*s,e[15]=0,e},n.perspectiveFromFieldOfView=function(e,t,r,i){var o=Math.tan(t.upDegrees*Math.PI/180),a=Math.tan(t.downDegrees*Math.PI/180),s=Math.tan(t.leftDegrees*Math.PI/180),c=Math.tan(t.rightDegrees*Math.PI/180),l=2/(s+c),h=2/(o+a);return e[0]=l,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=h,e[6]=0,e[7]=0,e[8]=-((s-c)*l*.5),e[9]=(o-a)*h*.5,e[10]=i/(r-i),e[11]=-1,e[12]=0,e[13]=0,e[14]=i*r/(r-i),e[15]=0,e},n.ortho=function(e,t,r,i,o,a,s){var c=1/(t-r),l=1/(i-o),h=1/(a-s);return e[0]=-2*c,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*h,e[11]=0,e[12]=(t+r)*c,e[13]=(o+i)*l,e[14]=(s+a)*h,e[15]=1,e},n.lookAt=function(e,t,r,i){var o,a,s,c,l,h,f,x,m,v,T=t[0],D=t[1],p=t[2],P=i[0],z=i[1],I=i[2],b=r[0],E=r[1],F=r[2];return Math.abs(T-b)<d.EPSILON&&Math.abs(D-E)<d.EPSILON&&Math.abs(p-F)<d.EPSILON?n.identity(e):(f=T-b,x=D-E,m=p-F,v=1/Math.sqrt(f*f+x*x+m*m),f*=v,x*=v,m*=v,o=z*m-I*x,a=I*f-P*m,s=P*x-z*f,v=Math.sqrt(o*o+a*a+s*s),v?(v=1/v,o*=v,a*=v,s*=v):(o=0,a=0,s=0),c=x*s-m*a,l=m*o-f*s,h=f*a-x*o,v=Math.sqrt(c*c+l*l+h*h),v?(v=1/v,c*=v,l*=v,h*=v):(c=0,l=0,h=0),e[0]=o,e[1]=c,e[2]=f,e[3]=0,e[4]=a,e[5]=l,e[6]=x,e[7]=0,e[8]=s,e[9]=h,e[10]=m,e[11]=0,e[12]=-(o*T+a*D+s*p),e[13]=-(c*T+l*D+h*p),e[14]=-(f*T+x*D+m*p),e[15]=1,e)},n.str=function(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"},n.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2)+Math.pow(e[9],2)+Math.pow(e[10],2)+Math.pow(e[11],2)+Math.pow(e[12],2)+Math.pow(e[13],2)+Math.pow(e[14],2)+Math.pow(e[15],2))},n.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e[4]=t[4]+r[4],e[5]=t[5]+r[5],e[6]=t[6]+r[6],e[7]=t[7]+r[7],e[8]=t[8]+r[8],e[9]=t[9]+r[9],e[10]=t[10]+r[10],e[11]=t[11]+r[11],e[12]=t[12]+r[12],e[13]=t[13]+r[13],e[14]=t[14]+r[14],e[15]=t[15]+r[15],e},n.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e[4]=t[4]-r[4],e[5]=t[5]-r[5],e[6]=t[6]-r[6],e[7]=t[7]-r[7],e[8]=t[8]-r[8],e[9]=t[9]-r[9],e[10]=t[10]-r[10],e[11]=t[11]-r[11],e[12]=t[12]-r[12],e[13]=t[13]-r[13],e[14]=t[14]-r[14],e[15]=t[15]-r[15],e},n.sub=n.subtract,n.multiplyScalar=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=t[7]*r,e[8]=t[8]*r,e[9]=t[9]*r,e[10]=t[10]*r,e[11]=t[11]*r,e[12]=t[12]*r,e[13]=t[13]*r,e[14]=t[14]*r,e[15]=t[15]*r,e},n.multiplyScalarAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e[2]=t[2]+r[2]*i,e[3]=t[3]+r[3]*i,e[4]=t[4]+r[4]*i,e[5]=t[5]+r[5]*i,e[6]=t[6]+r[6]*i,e[7]=t[7]+r[7]*i,e[8]=t[8]+r[8]*i,e[9]=t[9]+r[9]*i,e[10]=t[10]+r[10]*i,e[11]=t[11]+r[11]*i,e[12]=t[12]+r[12]*i,e[13]=t[13]+r[13]*i,e[14]=t[14]+r[14]*i,e[15]=t[15]+r[15]*i,e},n.exactEquals=function(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]},n.equals=function(e,t){var r=e[0],i=e[1],o=e[2],a=e[3],s=e[4],c=e[5],l=e[6],h=e[7],f=e[8],x=e[9],m=e[10],v=e[11],T=e[12],D=e[13],p=e[14],P=e[15],z=t[0],I=t[1],b=t[2],E=t[3],F=t[4],N=t[5],w=t[6],B=t[7],g=t[8],L=t[9],_=t[10],A=t[11],y=t[12],G=t[13],ne=t[14],ce=t[15];return Math.abs(r-z)<=d.EPSILON*Math.max(1,Math.abs(r),Math.abs(z))&&Math.abs(i-I)<=d.EPSILON*Math.max(1,Math.abs(i),Math.abs(I))&&Math.abs(o-b)<=d.EPSILON*Math.max(1,Math.abs(o),Math.abs(b))&&Math.abs(a-E)<=d.EPSILON*Math.max(1,Math.abs(a),Math.abs(E))&&Math.abs(s-F)<=d.EPSILON*Math.max(1,Math.abs(s),Math.abs(F))&&Math.abs(c-N)<=d.EPSILON*Math.max(1,Math.abs(c),Math.abs(N))&&Math.abs(l-w)<=d.EPSILON*Math.max(1,Math.abs(l),Math.abs(w))&&Math.abs(h-B)<=d.EPSILON*Math.max(1,Math.abs(h),Math.abs(B))&&Math.abs(f-g)<=d.EPSILON*Math.max(1,Math.abs(f),Math.abs(g))&&Math.abs(x-L)<=d.EPSILON*Math.max(1,Math.abs(x),Math.abs(L))&&Math.abs(m-_)<=d.EPSILON*Math.max(1,Math.abs(m),Math.abs(_))&&Math.abs(v-A)<=d.EPSILON*Math.max(1,Math.abs(v),Math.abs(A))&&Math.abs(T-y)<=d.EPSILON*Math.max(1,Math.abs(T),Math.abs(y))&&Math.abs(D-G)<=d.EPSILON*Math.max(1,Math.abs(D),Math.abs(G))&&Math.abs(p-ne)<=d.EPSILON*Math.max(1,Math.abs(p),Math.abs(ne))&&Math.abs(P-ce)<=d.EPSILON*Math.max(1,Math.abs(P),Math.abs(ce))},R.exports=n},function(R,M,S){var d=S(1),n=S(4),e=S(7),t=S(8),r={};r.create=function(){var i=new d.ARRAY_TYPE(4);return i[0]=0,i[1]=0,i[2]=0,i[3]=1,i},r.rotationTo=(function(){var i=e.create(),o=e.fromValues(1,0,0),a=e.fromValues(0,1,0);return function(s,c,l){var h=e.dot(c,l);return-.999999>h?(e.cross(i,o,c),e.length(i)<1e-6&&e.cross(i,a,c),e.normalize(i,i),r.setAxisAngle(s,i,Math.PI),s):h>.999999?(s[0]=0,s[1]=0,s[2]=0,s[3]=1,s):(e.cross(i,c,l),s[0]=i[0],s[1]=i[1],s[2]=i[2],s[3]=1+h,r.normalize(s,s))}})(),r.setAxes=(function(){var i=n.create();return function(o,a,s,c){return i[0]=s[0],i[3]=s[1],i[6]=s[2],i[1]=c[0],i[4]=c[1],i[7]=c[2],i[2]=-a[0],i[5]=-a[1],i[8]=-a[2],r.normalize(o,r.fromMat3(o,i))}})(),r.clone=t.clone,r.fromValues=t.fromValues,r.copy=t.copy,r.set=t.set,r.identity=function(i){return i[0]=0,i[1]=0,i[2]=0,i[3]=1,i},r.setAxisAngle=function(i,o,a){a=.5*a;var s=Math.sin(a);return i[0]=s*o[0],i[1]=s*o[1],i[2]=s*o[2],i[3]=Math.cos(a),i},r.getAxisAngle=function(i,o){var a=2*Math.acos(o[3]),s=Math.sin(a/2);return s!=0?(i[0]=o[0]/s,i[1]=o[1]/s,i[2]=o[2]/s):(i[0]=1,i[1]=0,i[2]=0),a},r.add=t.add,r.multiply=function(i,o,a){var s=o[0],c=o[1],l=o[2],h=o[3],f=a[0],x=a[1],m=a[2],v=a[3];return i[0]=s*v+h*f+c*m-l*x,i[1]=c*v+h*x+l*f-s*m,i[2]=l*v+h*m+s*x-c*f,i[3]=h*v-s*f-c*x-l*m,i},r.mul=r.multiply,r.scale=t.scale,r.rotateX=function(i,o,a){a*=.5;var s=o[0],c=o[1],l=o[2],h=o[3],f=Math.sin(a),x=Math.cos(a);return i[0]=s*x+h*f,i[1]=c*x+l*f,i[2]=l*x-c*f,i[3]=h*x-s*f,i},r.rotateY=function(i,o,a){a*=.5;var s=o[0],c=o[1],l=o[2],h=o[3],f=Math.sin(a),x=Math.cos(a);return i[0]=s*x-l*f,i[1]=c*x+h*f,i[2]=l*x+s*f,i[3]=h*x-c*f,i},r.rotateZ=function(i,o,a){a*=.5;var s=o[0],c=o[1],l=o[2],h=o[3],f=Math.sin(a),x=Math.cos(a);return i[0]=s*x+c*f,i[1]=c*x-s*f,i[2]=l*x+h*f,i[3]=h*x-l*f,i},r.calculateW=function(i,o){var a=o[0],s=o[1],c=o[2];return i[0]=a,i[1]=s,i[2]=c,i[3]=Math.sqrt(Math.abs(1-a*a-s*s-c*c)),i},r.dot=t.dot,r.lerp=t.lerp,r.slerp=function(i,o,a,s){var c,l,h,f,x,m=o[0],v=o[1],T=o[2],D=o[3],p=a[0],P=a[1],z=a[2],I=a[3];return l=m*p+v*P+T*z+D*I,0>l&&(l=-l,p=-p,P=-P,z=-z,I=-I),1-l>1e-6?(c=Math.acos(l),h=Math.sin(c),f=Math.sin((1-s)*c)/h,x=Math.sin(s*c)/h):(f=1-s,x=s),i[0]=f*m+x*p,i[1]=f*v+x*P,i[2]=f*T+x*z,i[3]=f*D+x*I,i},r.sqlerp=(function(){var i=r.create(),o=r.create();return function(a,s,c,l,h,f){return r.slerp(i,s,h,f),r.slerp(o,c,l,f),r.slerp(a,i,o,2*f*(1-f)),a}})(),r.invert=function(i,o){var a=o[0],s=o[1],c=o[2],l=o[3],h=a*a+s*s+c*c+l*l,f=h?1/h:0;return i[0]=-a*f,i[1]=-s*f,i[2]=-c*f,i[3]=l*f,i},r.conjugate=function(i,o){return i[0]=-o[0],i[1]=-o[1],i[2]=-o[2],i[3]=o[3],i},r.length=t.length,r.len=r.length,r.squaredLength=t.squaredLength,r.sqrLen=r.squaredLength,r.normalize=t.normalize,r.fromMat3=function(i,o){var a,s=o[0]+o[4]+o[8];if(s>0)a=Math.sqrt(s+1),i[3]=.5*a,a=.5/a,i[0]=(o[5]-o[7])*a,i[1]=(o[6]-o[2])*a,i[2]=(o[1]-o[3])*a;else{var c=0;o[4]>o[0]&&(c=1),o[8]>o[3*c+c]&&(c=2);var l=(c+1)%3,h=(c+2)%3;a=Math.sqrt(o[3*c+c]-o[3*l+l]-o[3*h+h]+1),i[c]=.5*a,a=.5/a,i[3]=(o[3*l+h]-o[3*h+l])*a,i[l]=(o[3*l+c]+o[3*c+l])*a,i[h]=(o[3*h+c]+o[3*c+h])*a}return i},r.str=function(i){return"quat("+i[0]+", "+i[1]+", "+i[2]+", "+i[3]+")"},r.exactEquals=t.exactEquals,r.equals=t.equals,R.exports=r},function(R,M,S){var d=S(1),n={};n.create=function(){var e=new d.ARRAY_TYPE(3);return e[0]=0,e[1]=0,e[2]=0,e},n.clone=function(e){var t=new d.ARRAY_TYPE(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},n.fromValues=function(e,t,r){var i=new d.ARRAY_TYPE(3);return i[0]=e,i[1]=t,i[2]=r,i},n.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e},n.set=function(e,t,r,i){return e[0]=t,e[1]=r,e[2]=i,e},n.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e},n.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e},n.sub=n.subtract,n.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e},n.mul=n.multiply,n.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e},n.div=n.divide,n.ceil=function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e},n.floor=function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e},n.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e},n.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e},n.round=function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e},n.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e},n.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e[2]=t[2]+r[2]*i,e},n.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],o=t[2]-e[2];return Math.sqrt(r*r+i*i+o*o)},n.dist=n.distance,n.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],o=t[2]-e[2];return r*r+i*i+o*o},n.sqrDist=n.squaredDistance,n.length=function(e){var t=e[0],r=e[1],i=e[2];return Math.sqrt(t*t+r*r+i*i)},n.len=n.length,n.squaredLength=function(e){var t=e[0],r=e[1],i=e[2];return t*t+r*r+i*i},n.sqrLen=n.squaredLength,n.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e},n.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e},n.normalize=function(e,t){var r=t[0],i=t[1],o=t[2],a=r*r+i*i+o*o;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e},n.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]},n.cross=function(e,t,r){var i=t[0],o=t[1],a=t[2],s=r[0],c=r[1],l=r[2];return e[0]=o*l-a*c,e[1]=a*s-i*l,e[2]=i*c-o*s,e},n.lerp=function(e,t,r,i){var o=t[0],a=t[1],s=t[2];return e[0]=o+i*(r[0]-o),e[1]=a+i*(r[1]-a),e[2]=s+i*(r[2]-s),e},n.hermite=function(e,t,r,i,o,a){var s=a*a,c=s*(2*a-3)+1,l=s*(a-2)+a,h=s*(a-1),f=s*(3-2*a);return e[0]=t[0]*c+r[0]*l+i[0]*h+o[0]*f,e[1]=t[1]*c+r[1]*l+i[1]*h+o[1]*f,e[2]=t[2]*c+r[2]*l+i[2]*h+o[2]*f,e},n.bezier=function(e,t,r,i,o,a){var s=1-a,c=s*s,l=a*a,h=c*s,f=3*a*c,x=3*l*s,m=l*a;return e[0]=t[0]*h+r[0]*f+i[0]*x+o[0]*m,e[1]=t[1]*h+r[1]*f+i[1]*x+o[1]*m,e[2]=t[2]*h+r[2]*f+i[2]*x+o[2]*m,e},n.random=function(e,t){t=t||1;var r=2*d.RANDOM()*Math.PI,i=2*d.RANDOM()-1,o=Math.sqrt(1-i*i)*t;return e[0]=Math.cos(r)*o,e[1]=Math.sin(r)*o,e[2]=i*t,e},n.transformMat4=function(e,t,r){var i=t[0],o=t[1],a=t[2],s=r[3]*i+r[7]*o+r[11]*a+r[15];return s=s||1,e[0]=(r[0]*i+r[4]*o+r[8]*a+r[12])/s,e[1]=(r[1]*i+r[5]*o+r[9]*a+r[13])/s,e[2]=(r[2]*i+r[6]*o+r[10]*a+r[14])/s,e},n.transformMat3=function(e,t,r){var i=t[0],o=t[1],a=t[2];return e[0]=i*r[0]+o*r[3]+a*r[6],e[1]=i*r[1]+o*r[4]+a*r[7],e[2]=i*r[2]+o*r[5]+a*r[8],e},n.transformQuat=function(e,t,r){var i=t[0],o=t[1],a=t[2],s=r[0],c=r[1],l=r[2],h=r[3],f=h*i+c*a-l*o,x=h*o+l*i-s*a,m=h*a+s*o-c*i,v=-s*i-c*o-l*a;return e[0]=f*h+v*-s+x*-l-m*-c,e[1]=x*h+v*-c+m*-s-f*-l,e[2]=m*h+v*-l+f*-c-x*-s,e},n.rotateX=function(e,t,r,i){var o=[],a=[];return o[0]=t[0]-r[0],o[1]=t[1]-r[1],o[2]=t[2]-r[2],a[0]=o[0],a[1]=o[1]*Math.cos(i)-o[2]*Math.sin(i),a[2]=o[1]*Math.sin(i)+o[2]*Math.cos(i),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e},n.rotateY=function(e,t,r,i){var o=[],a=[];return o[0]=t[0]-r[0],o[1]=t[1]-r[1],o[2]=t[2]-r[2],a[0]=o[2]*Math.sin(i)+o[0]*Math.cos(i),a[1]=o[1],a[2]=o[2]*Math.cos(i)-o[0]*Math.sin(i),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e},n.rotateZ=function(e,t,r,i){var o=[],a=[];return o[0]=t[0]-r[0],o[1]=t[1]-r[1],o[2]=t[2]-r[2],a[0]=o[0]*Math.cos(i)-o[1]*Math.sin(i),a[1]=o[0]*Math.sin(i)+o[1]*Math.cos(i),a[2]=o[2],e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e},n.forEach=(function(){var e=n.create();return function(t,r,i,o,a,s){var c,l;for(r||(r=3),i||(i=0),l=o?Math.min(o*r+i,t.length):t.length,c=i;l>c;c+=r)e[0]=t[c],e[1]=t[c+1],e[2]=t[c+2],a(e,e,s),t[c]=e[0],t[c+1]=e[1],t[c+2]=e[2];return t}})(),n.angle=function(e,t){var r=n.fromValues(e[0],e[1],e[2]),i=n.fromValues(t[0],t[1],t[2]);n.normalize(r,r),n.normalize(i,i);var o=n.dot(r,i);return o>1?0:Math.acos(o)},n.str=function(e){return"vec3("+e[0]+", "+e[1]+", "+e[2]+")"},n.exactEquals=function(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]},n.equals=function(e,t){var r=e[0],i=e[1],o=e[2],a=t[0],s=t[1],c=t[2];return Math.abs(r-a)<=d.EPSILON*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(i-s)<=d.EPSILON*Math.max(1,Math.abs(i),Math.abs(s))&&Math.abs(o-c)<=d.EPSILON*Math.max(1,Math.abs(o),Math.abs(c))},R.exports=n},function(R,M,S){var d=S(1),n={};n.create=function(){var e=new d.ARRAY_TYPE(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e},n.clone=function(e){var t=new d.ARRAY_TYPE(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},n.fromValues=function(e,t,r,i){var o=new d.ARRAY_TYPE(4);return o[0]=e,o[1]=t,o[2]=r,o[3]=i,o},n.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e},n.set=function(e,t,r,i,o){return e[0]=t,e[1]=r,e[2]=i,e[3]=o,e},n.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e},n.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e},n.sub=n.subtract,n.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e[3]=t[3]*r[3],e},n.mul=n.multiply,n.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e[3]=t[3]/r[3],e},n.div=n.divide,n.ceil=function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e},n.floor=function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e},n.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e[3]=Math.min(t[3],r[3]),e},n.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e[3]=Math.max(t[3],r[3]),e},n.round=function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e},n.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e},n.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e[2]=t[2]+r[2]*i,e[3]=t[3]+r[3]*i,e},n.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],o=t[2]-e[2],a=t[3]-e[3];return Math.sqrt(r*r+i*i+o*o+a*a)},n.dist=n.distance,n.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],o=t[2]-e[2],a=t[3]-e[3];return r*r+i*i+o*o+a*a},n.sqrDist=n.squaredDistance,n.length=function(e){var t=e[0],r=e[1],i=e[2],o=e[3];return Math.sqrt(t*t+r*r+i*i+o*o)},n.len=n.length,n.squaredLength=function(e){var t=e[0],r=e[1],i=e[2],o=e[3];return t*t+r*r+i*i+o*o},n.sqrLen=n.squaredLength,n.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},n.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e},n.normalize=function(e,t){var r=t[0],i=t[1],o=t[2],a=t[3],s=r*r+i*i+o*o+a*a;return s>0&&(s=1/Math.sqrt(s),e[0]=r*s,e[1]=i*s,e[2]=o*s,e[3]=a*s),e},n.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]},n.lerp=function(e,t,r,i){var o=t[0],a=t[1],s=t[2],c=t[3];return e[0]=o+i*(r[0]-o),e[1]=a+i*(r[1]-a),e[2]=s+i*(r[2]-s),e[3]=c+i*(r[3]-c),e},n.random=function(e,t){return t=t||1,e[0]=d.RANDOM(),e[1]=d.RANDOM(),e[2]=d.RANDOM(),e[3]=d.RANDOM(),n.normalize(e,e),n.scale(e,e,t),e},n.transformMat4=function(e,t,r){var i=t[0],o=t[1],a=t[2],s=t[3];return e[0]=r[0]*i+r[4]*o+r[8]*a+r[12]*s,e[1]=r[1]*i+r[5]*o+r[9]*a+r[13]*s,e[2]=r[2]*i+r[6]*o+r[10]*a+r[14]*s,e[3]=r[3]*i+r[7]*o+r[11]*a+r[15]*s,e},n.transformQuat=function(e,t,r){var i=t[0],o=t[1],a=t[2],s=r[0],c=r[1],l=r[2],h=r[3],f=h*i+c*a-l*o,x=h*o+l*i-s*a,m=h*a+s*o-c*i,v=-s*i-c*o-l*a;return e[0]=f*h+v*-s+x*-l-m*-c,e[1]=x*h+v*-c+m*-s-f*-l,e[2]=m*h+v*-l+f*-c-x*-s,e[3]=t[3],e},n.forEach=(function(){var e=n.create();return function(t,r,i,o,a,s){var c,l;for(r||(r=4),i||(i=0),l=o?Math.min(o*r+i,t.length):t.length,c=i;l>c;c+=r)e[0]=t[c],e[1]=t[c+1],e[2]=t[c+2],e[3]=t[c+3],a(e,e,s),t[c]=e[0],t[c+1]=e[1],t[c+2]=e[2],t[c+3]=e[3];return t}})(),n.str=function(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},n.exactEquals=function(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]},n.equals=function(e,t){var r=e[0],i=e[1],o=e[2],a=e[3],s=t[0],c=t[1],l=t[2],h=t[3];return Math.abs(r-s)<=d.EPSILON*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(i-c)<=d.EPSILON*Math.max(1,Math.abs(i),Math.abs(c))&&Math.abs(o-l)<=d.EPSILON*Math.max(1,Math.abs(o),Math.abs(l))&&Math.abs(a-h)<=d.EPSILON*Math.max(1,Math.abs(a),Math.abs(h))},R.exports=n},function(R,M,S){var d=S(1),n={};n.create=function(){var e=new d.ARRAY_TYPE(2);return e[0]=0,e[1]=0,e},n.clone=function(e){var t=new d.ARRAY_TYPE(2);return t[0]=e[0],t[1]=e[1],t},n.fromValues=function(e,t){var r=new d.ARRAY_TYPE(2);return r[0]=e,r[1]=t,r},n.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e},n.set=function(e,t,r){return e[0]=t,e[1]=r,e},n.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e},n.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e},n.sub=n.subtract,n.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e},n.mul=n.multiply,n.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e},n.div=n.divide,n.ceil=function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e},n.floor=function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e},n.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e},n.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e},n.round=function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e},n.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e},n.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e},n.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1];return Math.sqrt(r*r+i*i)},n.dist=n.distance,n.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1];return r*r+i*i},n.sqrDist=n.squaredDistance,n.length=function(e){var t=e[0],r=e[1];return Math.sqrt(t*t+r*r)},n.len=n.length,n.squaredLength=function(e){var t=e[0],r=e[1];return t*t+r*r},n.sqrLen=n.squaredLength,n.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e},n.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e},n.normalize=function(e,t){var r=t[0],i=t[1],o=r*r+i*i;return o>0&&(o=1/Math.sqrt(o),e[0]=t[0]*o,e[1]=t[1]*o),e},n.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]},n.cross=function(e,t,r){var i=t[0]*r[1]-t[1]*r[0];return e[0]=e[1]=0,e[2]=i,e},n.lerp=function(e,t,r,i){var o=t[0],a=t[1];return e[0]=o+i*(r[0]-o),e[1]=a+i*(r[1]-a),e},n.random=function(e,t){t=t||1;var r=2*d.RANDOM()*Math.PI;return e[0]=Math.cos(r)*t,e[1]=Math.sin(r)*t,e},n.transformMat2=function(e,t,r){var i=t[0],o=t[1];return e[0]=r[0]*i+r[2]*o,e[1]=r[1]*i+r[3]*o,e},n.transformMat2d=function(e,t,r){var i=t[0],o=t[1];return e[0]=r[0]*i+r[2]*o+r[4],e[1]=r[1]*i+r[3]*o+r[5],e},n.transformMat3=function(e,t,r){var i=t[0],o=t[1];return e[0]=r[0]*i+r[3]*o+r[6],e[1]=r[1]*i+r[4]*o+r[7],e},n.transformMat4=function(e,t,r){var i=t[0],o=t[1];return e[0]=r[0]*i+r[4]*o+r[12],e[1]=r[1]*i+r[5]*o+r[13],e},n.forEach=(function(){var e=n.create();return function(t,r,i,o,a,s){var c,l;for(r||(r=2),i||(i=0),l=o?Math.min(o*r+i,t.length):t.length,c=i;l>c;c+=r)e[0]=t[c],e[1]=t[c+1],a(e,e,s),t[c]=e[0],t[c+1]=e[1];return t}})(),n.str=function(e){return"vec2("+e[0]+", "+e[1]+")"},n.exactEquals=function(e,t){return e[0]===t[0]&&e[1]===t[1]},n.equals=function(e,t){var r=e[0],i=e[1],o=t[0],a=t[1];return Math.abs(r-o)<=d.EPSILON*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(i-a)<=d.EPSILON*Math.max(1,Math.abs(i),Math.abs(a))},R.exports=n}])});const{vec3:C,mat4:Z}=K.exports,j={getElementById:R=>ie[R]},q=`#version 300 es
precision highp float;
in vec4 colorData;
out vec4 color;
void main() 
{
float alpha = max(0.0, 1.0 - dot(gl_PointCoord - vec2(0.5), gl_PointCoord - vec2(0.5)) * 5.);
color = vec4(colorData.xyz, alpha);
}
`,le=`#version 300 es
precision highp sampler2D;
precision highp float;
uniform sampler2D uTexturePosition;     
uniform sampler2D uTextureVelocity;     
uniform float uDeltaTime;
uniform vec3 uAcceleration;
uniform vec3 uForceDirection;
uniform float uForcePosition;
out vec4 colorData;
vec2 getIndex() {
int tSize = textureSize(uTexturePosition, 0).x;
float textureSize = float(tSize);
float x = (float(gl_VertexID % tSize) + 0.5) / textureSize;
float y = (floor(float(gl_VertexID) / textureSize) + 0.5) / textureSize;
return vec2(x, y);
}
void main() {
vec2 index = getIndex();
vec3 old_position = texture(uTexturePosition, index).rgb;
vec3 velocity = texture(uTextureVelocity, index).rgb;
gl_Position = vec4(2. * index - vec2(1.), 0., 1.);
gl_PointSize = 1.;
vec3 force_acce = vec3(10.0, 0.0, 0.0) * uForceDirection;
if (old_position.x <= uForcePosition) {
velocity = velocity + (uAcceleration + force_acce) * uDeltaTime;
}
else {
velocity = velocity + uAcceleration * uDeltaTime;
}
colorData = vec4(old_position + velocity * uDeltaTime, 1.);
}
`,ue=`#version 300 es
out vec2 uv;    
void main()
{
int index = gl_VertexID;    
vec2 position = 2. * vec2(float(index % 2), float(index / 2)) - vec2(1.);
uv = 0.5 * position + vec2(0.5);
gl_Position = vec4(position, 0., 1.);   
}
`,se=`#version 300 es
precision highp float;
precision highp sampler2D;
uniform sampler2D uTexture;
uniform bool uForceAlpha;
in vec2 uv;
out vec4 color;
void main() {
color = texture(uTexture, uv);
if(uForceAlpha) color.a = 1.;
}
`,he=`#version 300 es
uniform mat4 uCameraMatrix;
uniform mat4 uPMatrix;
uniform float particleSize;
uniform sampler2D uTexturePosition;     
uniform float uScale;                   
out vec4 colorData;
void main() 
{
int tSize = textureSize(uTexturePosition, 0).x;
float textureSize = float(tSize);
vec2 index = vec2(float(gl_VertexID % tSize) + 0.5, (floor(float(gl_VertexID) / textureSize)) + 0.5) / textureSize;
vec3 position = texture(uTexturePosition, index).rgb / uScale;
if(position.y < 0.) position = vec3(0.);
gl_Position = uPMatrix * uCameraMatrix * vec4(position, 1.);
gl_PointSize = particleSize;
colorData = vec4(position.y / 3., position.y / 3., 1.0, 1.0);
}
`,fe=`#version 300 es
precision highp float;
in vec4 colorData;
out vec4 color;
void main() 
{
float alpha = max(0.0, 1.0 - dot(gl_PointCoord - vec2(0.5), gl_PointCoord - vec2(0.5)) * 5.);
color = vec4(colorData.xyz, alpha);
}
`,xe=`#version 300 es
precision highp float;
uniform sampler2D uTexturePosition;     
uniform float uGridTextureSize; 
uniform float uBucketSize;               
uniform float uTotalParticles;
out vec4 colorData;
vec2 getIndex() {
int tSize = textureSize(uTexturePosition, 0).x;
float textureSize = float(tSize);
float x = (float(gl_VertexID % tSize) + 0.5) / textureSize;
float y = (floor(float(gl_VertexID) / textureSize) + 0.5) / textureSize;
return vec2(x, y);
}
vec2 getGridCoordinates(vec3 gridPosition) {
float BucketNum = uGridTextureSize / uBucketSize;
float x = mod(gridPosition.z, BucketNum);
float y = floor(gridPosition.z / BucketNum);
vec2 coord = vec2(x, y);
vec2 gridIndex = (gridPosition.xy + uBucketSize * coord + vec2(0.5)) / uGridTextureSize;
return gridIndex;
}
void main() 
{
vec2 index = getIndex();
vec3 particlePosition = texture(uTexturePosition, index).rgb;
vec3 gridPosition = floor(particlePosition);
vec2 gridIndex = getGridCoordinates(gridPosition);
gridIndex = 2. * gridIndex - vec2(1.);
gl_Position = vec4(gridIndex, float(gl_VertexID) / uTotalParticles, 1.0);
colorData = vec4(floor(float(gl_VertexID)));
gl_PointSize = 1.;
}
`,de=`#version 300 es
precision highp float;
precision highp sampler2D;
uniform sampler2D uTexturePosition;
uniform sampler2D uTextureVelocity;
uniform sampler2D uNeighbors;
uniform float uGridTextureSize; 
uniform float uBucketSize;      
uniform float uKernelRadius;
uniform float uViscosity;
out vec4 colorData;
vec3 OFFSET[27] = vec3[](
vec3(0, 0, 0), vec3(1., 0, 0), vec3(-1., 0, 0),
vec3(1., 1., 0), vec3(-1., 1., 0), vec3(1., -1, 0),
vec3(-1., -1., 0), vec3(0, 1., 0), vec3(0, -1., 0),
vec3(0, 0, -1.), vec3(1., 0, -1.), vec3(-1., 0, -1.),
vec3(1., 1., -1.), vec3(-1., 1., -1.), vec3(1., -1, -1.),
vec3(-1., -1., -1.), vec3(0, 1., -1.), vec3(0, -1., -1.),
vec3(0, 0, 1.), vec3(1., 0, 1.), vec3(-1., 0, 1.),
vec3(1., 1., 1.), vec3(-1., 1., 1.), vec3(1., -1, 1.),
vec3(-1., -1., 1.), vec3(0, 1., 1.), vec3(0, -1., 1.)
);
vec2 getIndex() {
int tSize = textureSize(uTexturePosition, 0).x;
float textureSize = float(tSize);
float x = (float(gl_VertexID % tSize) + 0.5) / textureSize;
float y = (floor(float(gl_VertexID) / textureSize) + 0.5) / textureSize;
return vec2(x, y);
}
vec2 getGridCoordinates(vec3 gridPosition) {
float BucketNum = uGridTextureSize / uBucketSize;
float x = mod(gridPosition.z, BucketNum);
float y = floor(gridPosition.z / BucketNum);
vec2 coord = vec2(x, y);
vec2 gridIndex = (gridPosition.xy + uBucketSize * coord + vec2(0.5)) / uGridTextureSize;
return gridIndex;
}
vec2 getNeighborTexIndex(float neighborIndex) {
float texturePositionSize = float(textureSize(uTexturePosition, 0).x);
float x = mod(neighborIndex, texturePositionSize) + 0.5;
float y = floor(neighborIndex / texturePositionSize) + 0.5;
vec2 index = vec2(x, y) / texturePositionSize;
return index;
}
float Wpoly6(float r) {
float h = uKernelRadius;
if (r > h)
return 0.0;
float tmp = h * h - r * r;
return 1.56668147106 * tmp * tmp * tmp / (h * h * h * h * h * h * h * h * h);
}
void main() {
vec2 index = getIndex();
gl_Position = vec4(2. * index - vec2(1.), 0., 1.);
gl_PointSize = 1.;
vec3 particlePosition = texture(uTexturePosition, index).rgb;
vec3 particleVelocity = texture(uTextureVelocity, index).rgb;
vec3 gridPosition = floor(particlePosition);
vec3 deltaVelocity = vec3(0.);
for(int i = 0; i < 27; i ++) {
vec2 gridIndex = getGridCoordinates(gridPosition + OFFSET[i]);
vec4 neighbors = texture(uNeighbors, gridIndex);
for (int j = 0; j < 4; j++) {
if (neighbors[j] <= 0.)
continue;
vec2 neighborIndex = getNeighborTexIndex(neighbors[j]);
vec3 neighborPosition = texture(uTexturePosition, neighborIndex).rgb;
vec3 neighborVelocity = texture(uTextureVelocity, neighborIndex).rgb;
vec3 distance = particlePosition - neighborPosition;
float r = length(distance);
float tmp = Wpoly6(r);
vec3 v_ij = neighborVelocity - particleVelocity;
deltaVelocity += v_ij * tmp;
}
}
particleVelocity += uViscosity * deltaVelocity;
colorData = vec4(particleVelocity, 1.);
}
`,me=`#version 300 es
precision highp float;
precision highp sampler2D;
uniform sampler2D uTexturePosition;     
uniform sampler2D uNeighbors;           
uniform float uGridTextureSize;        
uniform float uBucketSize;             
uniform float uKernelRadius;
uniform float uParticleMass;
uniform float uRestDensity;
uniform float uRelaxParameter; 
out vec4 colorData;
vec3 OFFSET[27] = vec3[](
vec3(0, 0, 0), vec3(1., 0, 0), vec3(-1., 0, 0),
vec3(1., 1., 0), vec3(-1., 1., 0), vec3(1., -1, 0),
vec3(-1., -1., 0), vec3(0, 1., 0), vec3(0, -1., 0),
vec3(0, 0, -1.), vec3(1., 0, -1.), vec3(-1., 0, -1.),
vec3(1., 1., -1.), vec3(-1., 1., -1.), vec3(1., -1, -1.),
vec3(-1., -1., -1.), vec3(0, 1., -1.), vec3(0, -1., -1.),
vec3(0, 0, 1.), vec3(1., 0, 1.), vec3(-1., 0, 1.),
vec3(1., 1., 1.), vec3(-1., 1., 1.), vec3(1., -1, 1.),
vec3(-1., -1., 1.), vec3(0, 1., 1.), vec3(0, -1., 1.)
);
vec2 getNeighborTexIndex(float neighborIndex) {
float texturePositionSize = float(textureSize(uTexturePosition, 0).x);
float x = mod(neighborIndex, texturePositionSize) + 0.5;
float y = floor(neighborIndex / texturePositionSize) + 0.5;
vec2 index = vec2(x, y) / texturePositionSize;
return index;
}
vec2 getIndex() {
int tSize = textureSize(uTexturePosition, 0).x;
float textureSize = float(tSize);
float x = (float(gl_VertexID % tSize) + 0.5) / textureSize;
float y = (floor(float(gl_VertexID) / textureSize) + 0.5) / textureSize;
return vec2(x, y);
}
vec2 getGridCoordinates(vec3 gridPosition)
{
float BucketNum = uGridTextureSize / uBucketSize;
float x = mod(gridPosition.z, BucketNum);
float y = floor(gridPosition.z / BucketNum);
vec2 coord = vec2(x, y);
vec2 gridIndex = (gridPosition.xy + uBucketSize * coord + vec2(0.5)) / uGridTextureSize;
return gridIndex;
}
float Wpoly6(float r) {
float h = uKernelRadius;
if (r > h)
return 0.0;
float tmp = h * h - r * r;
return 1.56668147106 * tmp * tmp * tmp / (h * h * h * h * h * h * h * h * h);
}
vec3 gradWspiky(vec3 r) {
float h = uKernelRadius;
float l = length(r);
if (l > h || l == 0.0)
return vec3(0);
float tmp = h - l;
return (-14.3239569771 * tmp * tmp) * r / (l * h * h * h * h * h * h);
}
void main() {
vec2 index = getIndex();
gl_Position = vec4(2. * index - vec2(1.), 0., 1.);
gl_PointSize = 1.;
vec3 particlePosition = texture(uTexturePosition, index).rgb;
vec3 gridPosition = floor(particlePosition);
float density = 0.;     
float sum_k_grad_Ci = 0.;
vec3 grad_pi_Ci = vec3(0.);
for(int i = 0; i < 27; i ++) {
vec2 gridIndex = getGridCoordinates(gridPosition + OFFSET[i]);
vec4 neighbors = texture(uNeighbors, gridIndex);
for (int j = 0; j < 4; j++) {
if (neighbors[j] <= 0.)
continue;
vec2 neighborIndex = getNeighborTexIndex(neighbors[j]);
vec3 neighborPosition = texture(uTexturePosition, neighborIndex).rgb;
vec3 distance = particlePosition - neighborPosition;
float r = length(distance); 
density += uParticleMass * Wpoly6(r);    
vec3 grad_pk_Ci = gradWspiky(distance);
grad_pk_Ci *= 1.0 / uRestDensity;
sum_k_grad_Ci += dot(grad_pk_Ci, grad_pk_Ci);
grad_pi_Ci += grad_pk_Ci;
}
}
float densityConstrain = density / uRestDensity - 1.;
sum_k_grad_Ci += dot(grad_pi_Ci, grad_pi_Ci);
float lambda = - densityConstrain / (sum_k_grad_Ci + uRelaxParameter);
colorData = vec4(lambda, densityConstrain, density, 1.);
}
`,ve=`#version 300 es
precision highp float;
precision highp sampler2D;
uniform sampler2D uTexturePosition;         
uniform sampler2D uNeighbors;               
uniform sampler2D uLambda;                  
uniform float uGridTextureSize;             
uniform float uBucketSize;                  
uniform float uKernelRadius;
uniform float uRestDensity;
uniform bool  uCorrection;
uniform float uTensileK;
uniform float uCollide;         
uniform vec3 uCenterPosition;   
uniform vec3 uSize;             
float h2;
out vec4 colorData;
vec3 OFFSET[27] = vec3[](
vec3(0, 0, 0), vec3(1., 0, 0), vec3(-1., 0, 0),
vec3(1., 1., 0), vec3(-1., 1., 0), vec3(1., -1, 0),
vec3(-1., -1., 0), vec3(0, 1., 0), vec3(0, -1., 0),
vec3(0, 0, -1.), vec3(1., 0, -1.), vec3(-1., 0, -1.),
vec3(1., 1., -1.), vec3(-1., 1., -1.), vec3(1., -1, -1.),
vec3(-1., -1., -1.), vec3(0, 1., -1.), vec3(0, -1., -1.),
vec3(0, 0, 1.), vec3(1., 0, 1.), vec3(-1., 0, 1.),
vec3(1., 1., 1.), vec3(-1., 1., 1.), vec3(1., -1, 1.),
vec3(-1., -1., 1.), vec3(0, 1., 1.), vec3(0, -1., 1.)
);
vec2 getNeighborTexIndex(float neighborIndex) {
float texturePositionSize = float(textureSize(uTexturePosition, 0).x);
float x = mod(neighborIndex, texturePositionSize) + 0.5;
float y = floor(neighborIndex / texturePositionSize) + 0.5;
vec2 index = vec2(x, y) / texturePositionSize;
return index;
}
vec2 getIndex() {
int tSize = textureSize(uTexturePosition, 0).x;
float textureSize = float(tSize);
float x = (float(gl_VertexID % tSize) + 0.5) / textureSize;
float y = (floor(float(gl_VertexID) / textureSize) + 0.5) / textureSize;
return vec2(x, y);
}
vec2 getGridCoordinates(vec3 gridPosition) {
float BucketNum = uGridTextureSize / uBucketSize;
float x = mod(gridPosition.z, BucketNum);
float y = floor(gridPosition.z / BucketNum);
vec2 coord = vec2(x, y);
vec2 gridIndex = (gridPosition.xy + uBucketSize * coord + vec2(0.5)) / uGridTextureSize;
return gridIndex;
}
vec3 gradWspiky(vec3 r) {
float h = uKernelRadius;
float l = length(r);
if (l > h || l == 0.0)
return vec3(0);
float tmp = h - l;
return (-14.3239569771 * tmp * tmp) * r / (l * h * h * h * h * h * h);
}
float Wpoly6(float r) {
float h = uKernelRadius;
if (r > h)
return 0.0;
float tmp = h * h - r * r;
return 1.56668147106 * tmp * tmp * tmp / (h * h * h * h * h * h * h * h * h);
}
void main() {
h2 = uKernelRadius * uKernelRadius;
vec2 index = getIndex();
gl_Position = vec4(2. * index - vec2(1.), 0., 1.);
gl_PointSize = 1.;
vec3 particlePosition = texture(uTexturePosition, index).rgb;
vec3 gridPosition = floor(particlePosition);
float lambda_i = texture(uLambda, index).x;
vec3 deltaPosition = vec3(0.);
for (int i = 0; i < 27; i++) {
vec2 gridIndex = getGridCoordinates(gridPosition + OFFSET[i]);
vec4 neighbors = texture(uNeighbors, gridIndex);
for (int j = 0; j < 4; j++) {
if (neighbors[j] <= 0.)
continue;
vec2 neighborIndex = getNeighborTexIndex(neighbors[j]);
vec3 neighborPosition = texture(uTexturePosition, neighborIndex).rgb;
vec3 distance = particlePosition - neighborPosition;
float r = length(distance);
float lambda_j = texture(uLambda, neighborIndex).r;
float lambda_corr = 0.0;
if (uCorrection) {
float tmp = Wpoly6(r);
float scorr = (1.0 / Wpoly6(0.1 * uKernelRadius)) * tmp;
lambda_corr = -uTensileK * pow(scorr, 4.);
}
vec3 temp = gradWspiky(distance);
deltaPosition += (lambda_i + lambda_j + lambda_corr) * temp;
}
}
vec3 endPosition = particlePosition + (1. / uRestDensity) * deltaPosition;
if (endPosition.x > uBucketSize - 0.5)
endPosition.x = uBucketSize - 0.5;
if (endPosition.x < 0.5)
endPosition.x = 0.5;
if (endPosition.y > uBucketSize - 0.5)
endPosition.y = uBucketSize - 0.5;
if (endPosition.y < 0.5)
endPosition.y = 0.5;
if (endPosition.z > uBucketSize - 0.5)
endPosition.z = uBucketSize - 0.5;
if (endPosition.z < 0.5)
endPosition.z = 0.5;
if (uCollide == 1.0)  {
float up = (uCenterPosition.y + uSize.y / 2.0) * uBucketSize;
float down = (uCenterPosition.y - uSize.y / 2.0) * uBucketSize;
float back = (uCenterPosition.x - uSize.x / 2.0) * uBucketSize;
float front = (uCenterPosition.x + uSize.x / 2.0) * uBucketSize;
float left = (uCenterPosition.z - uSize.z / 2.0) * uBucketSize;
float right = (uCenterPosition.z + uSize.z / 2.0) * uBucketSize;
float x = endPosition.x;
float y = endPosition.y;
float z = endPosition.z;
if (x >= back && x <= front && z >= left && z <= right && y >= up - 0.4 && y < up) {
endPosition.y = up;
} 
else if (x >= back && x <= front && z >= left && z <= right && y <= down + 0.4 && y > down) {
endPosition.y = down;
}
else if (x >= back && x <= front && y >= down && y <= up && z <= left + 0.4 && z > left) {
endPosition.z = left;
}
else if (x >= back && x <= front && y >= down && y <= up && z >= right - 0.4 && z < right) {
endPosition.z = right;
}
else if (y >= down && y <= up && z >= left && z <= right && x <= back + 0.4 && x > back) {
endPosition.x = back;
}
else if (y >= down && y <= up && z >= left && z <= right && x >= front - 0.4 && x < front) {
endPosition.x = front;
}
}
colorData = vec4(endPosition, texture(uLambda, index).g + 1.);
}
`,Me=`#version 300 es
precision highp float;
precision highp sampler3D;
uniform sampler2D uTexturePosition; 
uniform sampler2D uTextureVelocity; 
uniform sampler2D uNeighbors;
uniform float uGridTextureSize; 
uniform float uBucketSize; 
uniform float uKernelRadius;
out vec4 colorData;
vec3 OFFSET[27] = vec3[](
vec3(0, 0, 0), vec3(1., 0, 0), vec3(-1., 0, 0),
vec3(1., 1., 0), vec3(-1., 1., 0), vec3(1., -1, 0),
vec3(-1., -1., 0), vec3(0, 1., 0), vec3(0, -1., 0),
vec3(0, 0, -1.), vec3(1., 0, -1.), vec3(-1., 0, -1.),
vec3(1., 1., -1.), vec3(-1., 1., -1.), vec3(1., -1, -1.),
vec3(-1., -1., -1.), vec3(0, 1., -1.), vec3(0, -1., -1.),
vec3(0, 0, 1.), vec3(1., 0, 1.), vec3(-1., 0, 1.),
vec3(1., 1., 1.), vec3(-1., 1., 1.), vec3(1., -1, 1.),
vec3(-1., -1., 1.), vec3(0, 1., 1.), vec3(0, -1., 1.)
);
vec2 getIndex() {
int tSize = textureSize(uTexturePosition, 0).x;
float textureSize = float(tSize);
float x = (float(gl_VertexID % tSize) + 0.5) / textureSize;
float y = (floor(float(gl_VertexID) / textureSize) + 0.5) / textureSize;
return vec2(x, y);
}
vec2 getGridCoordinates(vec3 gridPosition) {
float BucketNum = uGridTextureSize / uBucketSize;
float x = mod(gridPosition.z, BucketNum);
float y = floor(gridPosition.z / BucketNum);
vec2 coord = vec2(x, y);
vec2 gridIndex = (gridPosition.xy + uBucketSize * coord + vec2(0.5)) / uGridTextureSize;
return gridIndex;
}
vec3 gradWspiky(vec3 r) {
float h = uKernelRadius;
float l = length(r);
if (l > h || l == 0.0)
return vec3(0);
float tmp = h - l;
return (-14.3239569771 * tmp * tmp) * r / (l * h * h * h * h * h * h);
}
vec2 getNeighborTexIndex(float neighborIndex) {
float texturePositionSize = float(textureSize(uTexturePosition, 0).x);
float x = mod(neighborIndex, texturePositionSize) + 0.5;
float y = floor(neighborIndex / texturePositionSize) + 0.5;
vec2 index = vec2(x, y) / texturePositionSize;
return index;
}
void main() {
vec2 index = getIndex();
gl_Position = vec4(2. * index - vec2(1.), 0., 1.);
gl_PointSize = 1.;
vec3 particlePosition = texture(uTexturePosition, index).rgb;
vec3 particleVelocity = texture(uTextureVelocity, index).rgb;
vec3 gridPosition = floor(particlePosition);
vec3 vorticity = vec3(0);
for (int i = 0; i < 27; i++) {
vec2 gridIndex = getGridCoordinates(gridPosition + OFFSET[i]);
vec4 neighbors = texture(uNeighbors, gridIndex);
for (int j = 0; j < 4; j++) {
if (neighbors[j] <= 0.)
continue;
vec2 neighborIndex = getNeighborTexIndex(neighbors[j]);
vec3 neighborPosition = texture(uTexturePosition, neighborIndex).rgb;
vec3 neighborVelocity = texture(uTextureVelocity, neighborIndex).rgb;
vec3 distance = particlePosition - neighborPosition;
vec3 v_ij = neighborVelocity - particleVelocity;
vorticity += cross(v_ij, gradWspiky(distance));
}
}
colorData = vec4(vorticity, 1.);
}
`,Se=`#version 300 es
precision highp float;
precision highp sampler3D;
uniform sampler2D uTexturePosition; 
uniform sampler2D uTextureVelocity;
uniform sampler2D uTextureVorticity;
uniform sampler2D uNeighbors;
uniform float uGridTextureSize; 
uniform float uBucketSize; 
uniform float uKernelRadius;
uniform float uDeltaTime;
uniform float uVorticity;
out vec4 colorData;
vec3 OFFSET[27] = vec3[](
vec3(0, 0, 0), vec3(1., 0, 0), vec3(-1., 0, 0),
vec3(1., 1., 0), vec3(-1., 1., 0), vec3(1., -1, 0),
vec3(-1., -1., 0), vec3(0, 1., 0), vec3(0, -1., 0),
vec3(0, 0, -1.), vec3(1., 0, -1.), vec3(-1., 0, -1.),
vec3(1., 1., -1.), vec3(-1., 1., -1.), vec3(1., -1, -1.),
vec3(-1., -1., -1.), vec3(0, 1., -1.), vec3(0, -1., -1.),
vec3(0, 0, 1.), vec3(1., 0, 1.), vec3(-1., 0, 1.),
vec3(1., 1., 1.), vec3(-1., 1., 1.), vec3(1., -1, 1.),
vec3(-1., -1., 1.), vec3(0, 1., 1.), vec3(0, -1., 1.)
);
vec2 getIndex() {
int tSize = textureSize(uTexturePosition, 0).x;
float textureSize = float(tSize);
float x = (float(gl_VertexID % tSize) + 0.5) / textureSize;
float y = (floor(float(gl_VertexID) / textureSize) + 0.5) / textureSize;
return vec2(x, y);
}
vec2 getGridCoordinates(vec3 gridPosition) {
float BucketNum = uGridTextureSize / uBucketSize;
float x = mod(gridPosition.z, BucketNum);
float y = floor(gridPosition.z / BucketNum);
vec2 coord = vec2(x, y);
vec2 gridIndex = (gridPosition.xy + uBucketSize * coord + vec2(0.5)) / uGridTextureSize;
return gridIndex;
}
vec3 gradWspiky(vec3 r) {
float h = uKernelRadius;
float l = length(r);
if (l > h || l == 0.0)
return vec3(0);
float tmp = h - l;
return (-14.3239569771 * tmp * tmp) * r / (l * h * h * h * h * h * h);
}
vec2 getNeighborTexIndex(float neighborIndex) {
float texturePositionSize = float(textureSize(uTexturePosition, 0).x);
float x = mod(neighborIndex, texturePositionSize) + 0.5;
float y = floor(neighborIndex / texturePositionSize) + 0.5;
vec2 index = vec2(x, y) / texturePositionSize;
return index;
}
void main() {
vec2 index = getIndex();
gl_Position = vec4(2. * index - vec2(1.), 0., 1.);
gl_PointSize = 1.;
vec3 particlePosition = texture(uTexturePosition, index).rgb;
vec3 particleVelocity = texture(uTextureVelocity, index).rgb;
vec3 particleVorticity = texture(uTextureVorticity, index).rgb;
vec3 gridPosition = floor(particlePosition);
vec3 gradVorticity = vec3(0);
for (int i = 0; i < 27; i++) {
vec2 gridIndex = getGridCoordinates(gridPosition + OFFSET[i]);
vec4 neighbors = texture(uNeighbors, gridIndex);
for (int j = 0; j < 4; j++) {
if (neighbors[j] <= 0.)
continue;
vec2 neighborIndex = getNeighborTexIndex(neighbors[j]);
vec3 neighborPosition = texture(uTexturePosition, neighborIndex).rgb;
vec3 neighborVorticity = texture(uTextureVorticity, neighborIndex).rgb;
vec3 p_ij = particlePosition - neighborPosition;
gradVorticity += length(neighborVorticity) * gradWspiky(p_ij);
}
}
float l = length(gradVorticity);
if (l > 0.0)
gradVorticity /= l;
vec3 N = gradVorticity;
particleVelocity += uDeltaTime * uVorticity * cross(N, particleVorticity);
colorData = vec4(particleVelocity, 1.);
}
`,Te=`#version 300 es
precision highp sampler2D;
precision highp float;
uniform sampler2D uTexturePosition;
uniform sampler2D uTexturePositionOld;
uniform float uDeltaTime;
out vec4 colorData;
vec2 getIndex() {
int tSize = textureSize(uTexturePosition, 0).x;
float textureSize = float(tSize);
float x = (float(gl_VertexID % tSize) + 0.5) / textureSize;
float y = (floor(float(gl_VertexID) / textureSize) + 0.5) / textureSize;
return vec2(x, y);
}
void main() {
vec2 index = getIndex();
gl_Position = vec4(2. * index - vec2(1.), 0., 1.);
gl_PointSize = 1.;
vec3 velocity = (texture(uTexturePosition, index).rgb - texture(uTexturePositionOld, index).rgb) / uDeltaTime;
colorData = vec4(velocity, 1.);
}
`,Oe=`#version 300 es
uniform mat4 uCameraMatrix;
uniform mat4 uPMatrix;
uniform vec3 uCenter;
uniform vec3 uSize;
uniform float uColor;
in vec3 aPosition;
out vec3 TexCoords;
void main()
{
vec3 position = vec3(aPosition.x * uSize.x, aPosition.y * uSize.y, aPosition.z * uSize.z);
gl_Position = uPMatrix * uCameraMatrix * vec4((position + uCenter), 1.);
if (uColor == 1.0)
vec4 colorData = gl_Position;
else
vec4 colorData = vec4(0., 0., 0., 1.0);
TexCoords = aPosition;
}
`,Ve=`#version 300 es
precision highp float;
in vec3 TexCoords;
out vec4 color;
uniform samplerCube skybox;
void main() 
{
color = texture(skybox, TexCoords);
}
`,Ge=`#version 300 es
uniform mat4 uCameraMatrix;
uniform mat4 uPMatrix;
in vec3 aPosition;
out vec3 TexCoords;
void main()
{
gl_Position = uPMatrix * uCameraMatrix * vec4(aPosition, 1.);
TexCoords = aPosition;
}
`,qe=`#version 300 es
precision highp float;
in vec3 TexCoords;
out vec4 color;
void main() 
{
float scale = 10.0;
vec2 uv = scale * (TexCoords.xz);
float u = mod(uv.x, 1.), v = mod(uv.y, 1.);
if (u >= 0.0 && u < 0.5 && v >= 0.0 && v < 0.5
|| u >= 0.5 && u < 1.0 && v >= 0.5 && v < 1.0) {
color = vec4(0.1, 0.1, 0.1, 1.0);
}
else {
color = vec4(0.5, 0.5, 0.5, 1.0);
}
}
`,pe=`#version 300 es
uniform mat4 uCameraMatrix;
uniform mat4 uPMatrix;
uniform sampler2D uTexturePosition;     
uniform float uScale;                   
out vec4 viewPos;
void main() 
{
int tSize = textureSize(uTexturePosition, 0).x;
float textureSize = float(tSize);
vec2 index = vec2(float(gl_VertexID % tSize) + 0.5, (floor(float(gl_VertexID) / textureSize)) + 0.5) / textureSize;
vec3 position = texture(uTexturePosition, index).rgb / uScale;
if(position.y < 0.) position = vec3(0.);
viewPos = uCameraMatrix * vec4(position, 1.);
gl_Position = uPMatrix * viewPos;
float height = 500.0 / 2.0;
float top = 0.00315;
float near = 0.01;
float radius = 0.05;            
gl_PointSize = height * near * radius / (- viewPos.z * top);
}
`,De=`#version 300 es
precision highp float;
uniform mat4 uPMatrix;
in vec4 viewPos;    
out vec4 color;
void main() 
{
vec2 xy = gl_PointCoord * 2. - 1.0;
float r2 = dot(xy, xy);
if (r2 > 1.0) {
discard;
}
float radius = 0.05;            
float z = sqrt(1.0 - r2);
vec4 nviewPos = vec4(viewPos.xyz + vec3(xy, z) * radius, 1.);
vec4 nclipPos = uPMatrix * viewPos;
vec4 ndcPos = nclipPos / nclipPos.w;
gl_FragDepth = 0.5 * (gl_DepthRange.diff * ndcPos.z + gl_DepthRange.far + gl_DepthRange.near);
color = vec4(-nviewPos.z, 0., 0., 1.0);
}
`,Pe=`#version 300 es
uniform mat4 uCameraMatrix;
uniform mat4 uPMatrix;
uniform sampler2D uTexturePosition;     
uniform float uScale;                   
out vec4 viewPos;
void main() 
{
int tSize = textureSize(uTexturePosition, 0).x;
float textureSize = float(tSize);
vec2 index = vec2(float(gl_VertexID % tSize) + 0.5, (floor(float(gl_VertexID) / textureSize)) + 0.5) / textureSize;
vec3 position = texture(uTexturePosition, index).rgb / uScale;
if(position.y < 0.) position = vec3(0.);
viewPos = uCameraMatrix * vec4(position, 1.);
gl_Position = uPMatrix * viewPos;
float height = 500.0 / 2.0;
float top = 0.00315;
float near = 0.01;
float radius = 0.05;            
gl_PointSize = height * near * radius / (- viewPos.z * top);
}
`,Ie=`#version 300 es
precision highp float;
uniform mat4 uPMatrix;
out vec4 color;
void main() 
{
if (dot(gl_PointCoord - vec2(0.5), gl_PointCoord - vec2(0.5)) > 0.25) {
discard;
return;
}
float radius = 0.05;            
vec2 xy = (gl_PointCoord - vec2(0.5)) * 2.;
float z = sqrt(max(0.0,1.0 - dot(xy, xy)));
vec3 viewDir = vec3(0., 0., 1.);
float thickness = 2. * radius * dot(vec3(xy, z), viewDir);
color = vec4(thickness, 0., 0., 1.);
}
`,be=`#version 300 es
out vec2 uv;    
void main()
{
int index = gl_VertexID;    
vec2 position = 2. * vec2(float(index % 2), float(index / 2)) - vec2(1.);
uv = 0.5 * position + vec2(0.5);
gl_Position = vec4(position, 0., 1.);   
}
`,Fe=`#version 300 es
precision highp float;
precision highp sampler2D;
uniform sampler2D uTexture;
in vec2 uv;
out vec4 color;
float getZ(vec2 uv) {
return - texture(uTexture, uv).x;
}
float proj(float ze) {
float near = 0.01;
float far = 10.;
return (far + near) / (far - near) + 2. * far * near / ((far - near) * ze);
}
vec3 uvToEye(vec2 uv) {
float depth = getZ(uv);
float height = 0.00315;
float width = height;
float near = 0.01;
float x = (2. * uv.x - 1.) * height * (- depth) / near;
float y = (2. * uv.y - 1.) * width * (- depth) / near;
return vec3(x, y, depth);
}
void main() {
float depth = getZ(uv);
if (depth < -90.) {
discard;
return;
}
float du = 1. / 500.;
float dv = 1. / 500.;
vec3 posEye = uvToEye(uv);
vec3 ddx = uvToEye(uv + vec2(du, 0)) - posEye;
vec3 ddx2 = posEye - uvToEye(uv - vec2(du, 0));
if (abs(ddx.z) > abs(ddx2.z)) {
ddx = ddx2;
}
vec3 ddy = uvToEye(uv + vec2(0, dv)) - posEye;
vec3 ddy2 = posEye - uvToEye(uv - vec2(0, dv));
if (abs(ddy.z) > abs(ddy2.z)) {
ddy = ddy2;
}
vec3 n = cross(ddx, ddy);
n = normalize(n);
color = vec4(n, 1.0);
}
`,J=`#version 300 es
out vec2 uv;    
void main()
{
int index = gl_VertexID;    
vec2 position = 2. * vec2(float(index % 2), float(index / 2)) - vec2(1.);
uv = 0.5 * position + vec2(0.5);
gl_Position = vec4(position, 0., 1.);   
}
`,Ee=`#version 300 es
precision highp float;
precision highp sampler2D;
uniform sampler2D uTexture;
in vec2 uv;
out vec4 color;
float getZ(int x, int y) {
return - texelFetch(uTexture, ivec2(x, y), 0).x;
}
float bilateral(int x, int y) {
int kernel_r = 10;
float blur_r = 1. / 6.;
float blur_z = 10.;
float z = getZ(x, y);
float sum = 0., wsum = 0.;
for(int dx = -kernel_r; dx <= kernel_r; dx++)
for (int dy = -kernel_r; dy <= kernel_r; dy++) {
float s = getZ(x+dx, y+dy);
float w = exp(- float(dx*dx + dy*dy) * blur_r * blur_r);
float r2 = (s - z) * blur_z;
float g = exp(-r2 * r2);
float wg = w * g;
sum += s * wg;
wsum += wg;
}
if (wsum > 0.) sum /= wsum;
return sum;
}
void main() {
int x = int(gl_FragCoord.x), y = int(gl_FragCoord.y);
float depth = getZ(x, y);
if (depth < -90.) {
discard;
return;
}
float zz = bilateral(x, y);
color = vec4(-zz, 0.0, 0.0, 1.0);
}
`,ze=`#version 300 es
uniform mat4 uCameraMatrix;
out vec2 uv;    
void main()
{
int index = gl_VertexID;    
vec2 position = 2. * vec2(float(index % 2), float(index / 2)) - vec2(1.);
uv = 0.5 * position + vec2(0.5);
vec4 viewPos = uCameraMatrix * vec4(1.);
gl_Position = vec4(position, 0., 1.);   
}
`,ye=`#version 300 es
precision highp float;
precision highp sampler2D;
uniform sampler2D uDepthTexture;
uniform sampler2D uThickTexture;
uniform sampler2D uNormalTexture;
uniform samplerCube uSkybox;
uniform mat4 uCameraMatrix;
uniform vec3 uTintColor;
uniform float uMaxAttenuate;
uniform float uAttenuateK;
in vec2 uv;
out vec4 color;
float getZ(vec2 uv) {
return - texture(uDepthTexture, uv).x;
}
vec3 uvToEye(vec2 uv) {
float depth = getZ(uv);
float height = 0.00315;
float width = height;
float near = 0.01;
float x = (2. * uv.x - 1.) * height * (- depth) / near;
float y = (2. * uv.y - 1.) * width * (- depth) / near;
return vec3(x, y, depth);
}
float proj(float ze) {
float near = 0.01;
float far = 10.;
return (far + near) / (far - near) + 2. * far * near / ((far - near) * ze);
}
void shading_depth() {
float z = -getZ(uv);
if (z > 90.) discard;
float c = exp(z) / (exp(z) + 1.);
c = (c - 0.5) * 2.;
color = vec4(c, c, c, 1.);
}
void shading_thick() {
float z = -getZ(uv);
if (z > 90.) discard;
float t = texture(uThickTexture, uv).x;
t = exp(t) / (exp(t) + 1.);
t = (t - 0.5) * 2.;
color = vec4(t, t, t, 1);
}
void shading_normal() {
vec3 normal = texture(uNormalTexture, uv).xyz;
if (dot(normal, normal) < 0.01) {
discard;
}
color = vec4(normal, 1.0);
}
void shading_fresnel_scale() {
vec3 normal = texture(uNormalTexture, uv).xyz;
if (dot(normal, normal) < 0.01) {
discard;
}
vec3 viewDir = -uvToEye(uv);
viewDir = normalize(viewDir);
float n1 = 1.3333f;
float t = (n1 - 1.) / (n1 + 1.);
float r0 = t * t;
float r = r0 + (1. - r0) * pow(1. - dot(normal, viewDir), 2.);
r = dot(normal, viewDir);
color = vec4(r, r, r, 1.0);
}
vec3 computeAttennuation(float thickness) {
const float k_r = 0.5f;
const float k_g = 0.2f;
const float k_b = 0.05f;
return vec3(exp(-k_r * thickness), exp(-k_g * thickness), exp(-k_b * thickness));
}
vec3 trace_color(vec3 p_in_cam, vec3 d_in_cam) { return texture(uSkybox,transpose(mat3(uCameraMatrix))*normalize(d_in_cam)).rgb; }
void shading_fresnel() {
vec3 normal = texture(uNormalTexture, uv).xyz;
if (dot(normal, normal) < 0.01) {
discard;
}
vec3 shadePos = uvToEye(uv);
vec3 viewDir = normalize(-shadePos); normal=normalize(normal); if(dot(normal,viewDir)<0.) normal=-normal;
float n1 = 1.3333f;
float t = (n1 - 1.) / (n1 + 1.);
float r0 = t * t;
float fresnelRatio = clamp(r0 + (1. - r0) * pow(1. - clamp(dot(normal, viewDir),0.,1.), 5.) + 0.03, 0., 1.);
float thickness = texture(uThickTexture, uv).x;
vec3 reflectionDir = -viewDir + 2. * normal * dot(normal, viewDir);
vec3 reflectionColor = trace_color(shadePos, reflectionDir);
vec3 transmittance=exp(-uAttenuateK*max(thickness-1.-uMaxAttenuate,0.)*(vec3(1.)-uTintColor));
vec3 refractionDir = refract(-viewDir,normal,1./n1);
vec3 refractionColor=trace_color(shadePos, refractionDir)*transmittance;
color = vec4(mix(refractionColor, reflectionColor, fresnelRatio), 1);
}
void main() {
float depth = getZ(uv);
float z_ndc = proj(depth);
gl_FragDepth = 0.5 * (gl_DepthRange.diff * z_ndc + gl_DepthRange.far + gl_DepthRange.near);	
shading_fresnel();
}
`,Re=`#version 300 es
uniform mat4 uCameraMatrix;
uniform mat4 uPMatrix;
in vec3 aPosition;
out vec3 TexCoords;
void main()
{
gl_Position = vec4(aPosition, 1.0);  
TexCoords = aPosition;
}`,_e=`#version 300 es
precision highp float;
in vec3 TexCoords;
out vec4 color;
uniform samplerCube skybox;
void main()
{
color = texture(skybox, TexCoords);
}`;class U{constructor(M,S){this.vertexSource=M,this.fragmentSource=S,this.program=u.createProgram(),this.uniformLocations=new Map,this.attribLocations=new Map,oe.programs++,this.createProgram()}initShader(M,S){const d=u.createShader(S);if(u.shaderSource(d,M),u.compileShader(d),!u.getShaderParameter(d,u.COMPILE_STATUS))throw new Error("compile: "+u.getShaderInfoLog(d));u.attachShader(this.program,d)}createProgram(){if(this.initShader(this.vertexSource,u.VERTEX_SHADER),this.initShader(this.fragmentSource,u.FRAGMENT_SHADER),u.linkProgram(this.program),!u.getProgramParameter(this.program,u.LINK_STATUS)){const S=u.getProgramInfoLog(this.program);throw console.log("Error in program linking:"+S),u.deleteProgram(this.program),new Error(S)}}use(){u.useProgram(this.program)}getAttribLoc(M){if(this.use(),this.attribLocations.has(M))return this.attribLocations.get(M);let S=u.getAttribLocation(this.program,M);if(S==-1)throw`getAttribLoc  ${M} error`;return this.attribLocations.set(M,S),S}getUniformLoc(M){if(this.use(),this.uniformLocations.has(M))return this.uniformLocations.get(M);let S=u.getUniformLocation(this.program,M);if(S==null)throw`getUniformLoc ${M} err`;return this.uniformLocations.set(M,S),S}setUniform1f(M,S){u.uniform1f(this.getUniformLoc(M),S)}setUniform1i(M,S){u.uniform1i(this.getUniformLoc(M),S)}setUniform3f(M,S,d,n){u.uniform3f(this.getUniformLoc(M),S,d,n)}setUniformMatrix4fv(M,S){u.uniformMatrix4fv(this.getUniformLoc(M),!1,S)}bindTexture(M,S,d){let n=[u.TEXTURE0,u.TEXTURE1,u.TEXTURE2,u.TEXTURE3,u.TEXTURE4,u.TEXTURE5,u.TEXTURE6,u.TEXTURE7,u.TEXTURE8,u.TEXTURE9,u.TEXTURE10,u.TEXTURE11,u.TEXTURE12,u.TEXTURE13,u.TEXTURE14];u.activeTexture(n[d]),S.bind(),u.uniform1i(this.getUniformLoc(M),d)}}class O{constructor(){this.tex=u.createTexture()}generate(M,S,d,n,e,t,r,i=null){this.tex.width=M,this.tex.height=S,u.bindTexture(u.TEXTURE_2D,this.tex),u.texImage2D(u.TEXTURE_2D,0,d,M,S,0,n,r,i),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MAG_FILTER,e),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MIN_FILTER,t),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_S,u.CLAMP_TO_EDGE),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_T,u.CLAMP_TO_EDGE),u.bindTexture(u.TEXTURE_2D,null)}bind(){u.bindTexture(u.TEXTURE_2D,this.tex)}}class ae{constructor(){this.tex=u.createTexture()}generate(M,S,d){this.tex.width=M,this.tex.height=S,u.bindTexture(u.TEXTURE_CUBE_MAP,this.tex);for(let n=0;n<6;n++)u.texImage2D(u.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,u.RGB,u.RGB,u.UNSIGNED_BYTE,d[n]);u.texParameteri(u.TEXTURE_CUBE_MAP,u.TEXTURE_MAG_FILTER,u.LINEAR),u.texParameteri(u.TEXTURE_CUBE_MAP,u.TEXTURE_MIN_FILTER,u.LINEAR),u.texParameteri(u.TEXTURE_CUBE_MAP,u.TEXTURE_WRAP_S,u.CLAMP_TO_EDGE),u.texParameteri(u.TEXTURE_CUBE_MAP,u.TEXTURE_WRAP_T,u.CLAMP_TO_EDGE),u.texParameteri(u.TEXTURE_CUBE_MAP,u.TEXTURE_WRAP_R,u.CLAMP_TO_EDGE),u.bindTexture(u.TEXTURE_CUBE_MAP,null)}bind(){u.bindTexture(u.TEXTURE_CUBE_MAP,this.tex)}}const V=(R,M=!1,S=!1)=>{let d=R.length==null?[R]:R,n=u.createFramebuffer(),e=[u.COLOR_ATTACHMENT0,u.COLOR_ATTACHMENT1,u.COLOR_ATTACHMENT2,u.COLOR_ATTACHMENT3,u.COLOR_ATTACHMENT4,u.COLOR_ATTACHMENT5,u.COLOR_ATTACHMENT6];u.bindFramebuffer(u.DRAW_FRAMEBUFFER,n),n.width=d[0].width,n.height=d[0].height;let t=[];for(let i=0;i<d.length;i++)u.framebufferTexture2D(u.DRAW_FRAMEBUFFER,e[i],u.TEXTURE_2D,d[i],0),t.push(e[i]);if(M){let i=u.createRenderbuffer();u.bindRenderbuffer(u.RENDERBUFFER,i),u.renderbufferStorage(u.RENDERBUFFER,u.DEPTH_COMPONENT16,d[0].width,d[0].height),S?(u.renderbufferStorage(u.RENDERBUFFER,u.DEPTH24_STENCIL8,d[0].width,d[0].height),u.framebufferRenderbuffer(u.FRAMEBUFFER,u.DEPTH_STENCIL_ATTACHMENT,u.RENDERBUFFER,i)):u.framebufferRenderbuffer(u.FRAMEBUFFER,u.DEPTH_ATTACHMENT,u.RENDERBUFFER,i)}u.drawBuffers(t),u.bindFramebuffer(u.DRAW_FRAMEBUFFER,null),u.bindFramebuffer(u.DRAW_FRAMEBUFFER,n);let r=u.checkFramebufferStatus(u.DRAW_FRAMEBUFFER);return u.bindFramebuffer(u.DRAW_FRAMEBUFFER,null),r!=u.FRAMEBUFFER_COMPLETE?(console.log("fb status: "+r.toString(16)),null):n};class ge{constructor(M){this.position=C.create(),this.down=!1,this.prevMouseX=0,this.prevMouseY=0,this.currentMouseX=0,this.currentMouseY=0,this.alpha=1*Math.PI*.5,this.beta=.5*Math.PI,this._alpha=this.alpha,this._beta=this.beta,this.ratio=1,this.init=!0,this.target=[.5,.5,.5],this.perspectiveMatrix=Z.create(),this.cameraTransformMatrix=Z.create(),M.style.cursor="-moz-grab",M.style.cursor=" -webkit-grab",M.addEventListener("mousemove",S=>{this.currentMouseX=S.clientX,this.currentMouseY=S.clientY},!1),M.addEventListener("mousedown",S=>{M.style.cursor="-moz-grabbing",M.style.cursor=" -webkit-grabbing",this.down=!0},!1),M.addEventListener("mouseup",S=>{M.style.cursor="-moz-grab",M.style.cursor=" -webkit-grab",this.down=!1},!1)}updateCamera(M,S,d){this.ratio=d,Z.perspective(this.perspectiveMatrix,M*Math.PI/180,S,.01,10),this.down&&(this.alpha-=.1*(this.currentMouseY-this.prevMouseY)*Math.PI/180,this.beta+=.1*(this.currentMouseX-this.prevMouseX)*Math.PI/180,this.alpha<=0&&(this.alpha=.001),this.alpha>=.99*Math.PI&&(this.alpha=.99*Math.PI)),(this._alpha!=this.alpha||this._beta!=this.beta||this.init)&&(this._alpha+=(this.alpha-this._alpha)/7,this._beta+=(this.beta-this._beta)/7,this.position[0]=this.ratio*Math.sin(this._alpha)*Math.sin(this._beta)+this.target[0],this.position[1]=this.ratio*Math.cos(this._alpha)+this.target[1],this.position[2]=this.ratio*Math.sin(this._alpha)*Math.cos(this._beta)+this.target[2],this.cameraTransformMatrix=this.defineTransformMatrix(this.position,this.target)),this.prevMouseX=this.currentMouseX,this.prevMouseY=this.currentMouseY}defineTransformMatrix(M,S){let d=Z.create(),n=C.create(),e=C.create(),t=C.create(),r=C.create(),i=C.create();i[0]=0,i[1]=1,i[2]=0,C.subtract(n,M,S),C.normalize(e,n);let o=C.dot(e,i),a=C.create();return C.scale(a,e,o),C.subtract(t,i,a),C.normalize(t,t),C.cross(r,e,t),d[0]=r[0],d[1]=t[0],d[2]=e[0],d[3]=0,d[4]=r[1],d[5]=t[1],d[6]=e[1],d[7]=0,d[8]=r[2],d[9]=t[2],d[10]=e[2],d[11]=0,d[12]=-C.dot(M,r),d[13]=-C.dot(M,t),d[14]=-C.dot(M,e),d[15]=1,d}}class Ae{constructor(){this.totalParticles=0,this.particlesTextureSize=0,this.bucketSize=0,this.gridsTextureSize=0,this.kernelRadius=1.8,this.copyTextureProgram=null,this.predictPositionsProgram=null,this.searchNeighbordsProgram=null,this.calculateLambdaProgram=null,this.calculateDeltaPProgram=null,this.integrateVelocityProgram=null,this.calculateViscosityProgram=null,this.calculateVorticityProgram=null,this.positionTexture=null,this.tmpPositionTexture=null,this.velocityTexture=null,this.tmpVelocityTexture=null,this.gridsTexture=null,this.lambdaTexture=null,this.vorticityTexture=null,this.positionBuffer=null,this.tmpPositionBuffer=null,this.velocityBuffer=null,this.tmpVelocityBuffer=null,this.gridsBuffer=null,this.lambdaBuffer=null,this.vorticityBuffer=null}init(M,S,d){this.totalParticles=M.length/4,this.particlesTextureSize=Math.ceil(Math.sqrt(this.totalParticles)),console.log("Total Partivles: "+this.totalParticles.toString()),console.log("Particle TextureSize: "+this.particlesTextureSize.toString()),this.bucketSize=d,this.gridsTextureSize=768,console.log("Bucket Size: "+this.bucketSize.toString()),console.log("Grid TextureSize: "+this.gridsTextureSize.toString());for(let n=this.totalParticles;n<this.particlesTextureSize*this.particlesTextureSize;n++)M.push(0,0,0,0),S.push(0,0,0,0);this.predictPositionsProgram=new U(le,q),this.searchNeighbordsProgram=new U(xe,q),this.copyTextureProgram=new U(ue,se),this.calculateLambdaProgram=new U(me,q),this.calculateDeltaPProgram=new U(ve,q),this.integrateVelocityProgram=new U(Te,q),this.calculateViscosityProgram=new U(de,q),this.calculateVorticityProgram=new U(Me,q),this.applyVorticityProgram=new U(Se,q),this.positionTexture=new O,this.positionTexture.generate(this.particlesTextureSize,this.particlesTextureSize,u.RGBA32F,u.RGBA,u.NEAREST,u.NEAREST,u.FLOAT,new Float32Array(M)),this.velocityTexture=new O,this.velocityTexture.generate(this.particlesTextureSize,this.particlesTextureSize,u.RGBA32F,u.RGBA,u.NEAREST,u.NEAREST,u.FLOAT,new Float32Array(S)),this.tmpPositionTexture=new O,this.tmpPositionTexture.generate(this.particlesTextureSize,this.particlesTextureSize,u.RGBA32F,u.RGBA,u.NEAREST,u.NEAREST,u.FLOAT,null),this.lambdaTexture=new O,this.lambdaTexture.generate(this.particlesTextureSize,this.particlesTextureSize,u.RGBA32F,u.RGBA,u.NEAREST,u.NEAREST,u.FLOAT,null),this.tmpVelocityTexture=new O,this.tmpVelocityTexture.generate(this.particlesTextureSize,this.particlesTextureSize,u.RGBA32F,u.RGBA,u.NEAREST,u.NEAREST,u.FLOAT,null),this.gridsTexture=new O,this.gridsTexture.generate(this.gridsTextureSize,this.gridsTextureSize,u.RGBA32F,u.RGBA,u.NEAREST,u.NEAREST,u.FLOAT,null),this.vorticityTexture=new O,this.vorticityTexture.generate(this.particlesTextureSize,this.particlesTextureSize,u.RGBA32F,u.RGBA,u.NEAREST,u.NEAREST,u.FLOAT,null),this.positionBuffer=V(this.positionTexture.tex),this.velocityBuffer=V(this.velocityTexture.tex),this.tmpPositionBuffer=V(this.tmpPositionTexture.tex),this.tmpVelocityBuffer=V(this.tmpVelocityTexture.tex),this.lambdaBuffer=V(this.lambdaTexture.tex),this.gridsBuffer=V(this.gridsTexture.tex,!0,!0),this.vorticityBuffer=V(this.vorticityTexture.tex)}simulate(M){const S=M.ax,d=M.ay,n=M.az,e=M.deltaTime,t=M.solverIterations,r=M.correction,i=M.relaxParameter,o=M.tensileK,a=M.viscosity,s=M.vorticity,c=2e3;this.predictPositions(S,d,n,e),this.searchNeighbords();for(let l=0;l<t;l++)this.calculateLambda(i,c),this.calculateDeltaP(r,o,c,M.addObstacle,M.wall,{x:M.obstacleX,y:M.obstacleY,z:M.obstacleZ},{x:M.sizeX,y:M.sizeY,z:M.sizeZ}),this.copyBetweenTexture(this.velocityTexture,this.tmpPositionBuffer);this.integrateVelocity(e),this.calculateVorticity(),this.calculateViscosity(a),this.applyVorticity(e,s),this.copyBetweenTexture(this.tmpVelocityTexture,this.velocityBuffer),this.copyBetweenTexture(this.tmpPositionTexture,this.positionBuffer)}exportFrame(){const M=u.createFramebuffer();u.bindFramebuffer(u.FRAMEBUFFER,M),u.framebufferTexture2D(u.FRAMEBUFFER,u.COLOR_ATTACHMENT0,u.TEXTURE_2D,this.positionTexture.tex,0),u.drawBuffers([u.COLOR_ATTACHMENT0]),u.readBuffer(u.COLOR_ATTACHMENT0);var S=new Float32Array(this.particlesTextureSize*this.particlesTextureSize*4);u.readPixels(0,0,this.particlesTextureSize,this.particlesTextureSize,u.RGBA,u.FLOAT,S);let d=`#Output frame
`;for(let n=0;n<S.length/4;n++)S[4*n]==0&&S[4*n+1]==0&&S[4*n+2]==0||(d+="v "+S[4*n].toString()+" "+S[4*n+1].toString()+" "+S[4*n+2].toString()+`
`);return S}predictPositions(M,S,d,n){u.bindFramebuffer(u.DRAW_FRAMEBUFFER,this.tmpPositionBuffer),u.viewport(0,0,this.particlesTextureSize,this.particlesTextureSize),this.predictPositionsProgram.use(),this.predictPositionsProgram.setUniform1f("uDeltaTime",n),this.predictPositionsProgram.setUniform3f("uAcceleration",M,S,d),this.predictPositionsProgram.bindTexture("uTexturePosition",this.positionTexture,0),this.predictPositionsProgram.bindTexture("uTextureVelocity",this.velocityTexture,1);const e={x:1,y:0,z:0},t=0,r=.1;this.predictPositionsProgram.setUniform1f("uForcePosition",t),this.predictPositionsProgram.setUniform3f("uForceDirection",e.x,e.y,e.z),u.clear(u.COLOR_BUFFER_BIT),u.drawArrays(u.POINTS,0,this.totalParticles)}searchNeighbords(){u.bindFramebuffer(u.FRAMEBUFFER,this.gridsBuffer),u.viewport(0,0,this.gridsBuffer.width,this.gridsBuffer.height),u.clearColor(0,0,0,0),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT|u.STENCIL_BUFFER_BIT),u.enable(u.STENCIL_TEST),u.enable(u.DEPTH_TEST),this.searchNeighbordsProgram.use(),this.searchNeighbordsProgram.bindTexture("uTexturePosition",this.tmpPositionTexture,0),this.searchNeighbordsProgram.setUniform1f("uGridTextureSize",this.gridsTextureSize),this.searchNeighbordsProgram.setUniform1f("uBucketSize",this.bucketSize),this.searchNeighbordsProgram.setUniform1f("uTotalParticles",this.totalParticles),u.colorMask(!0,!1,!1,!1),u.depthFunc(u.LESS),u.drawArrays(u.POINTS,0,this.totalParticles),u.colorMask(!1,!0,!1,!1),u.depthFunc(u.GREATER),u.stencilFunc(u.GREATER,1,1),u.stencilOp(u.KEEP,u.KEEP,u.INCR),u.clear(u.STENCIL_BUFFER_BIT),u.drawArrays(u.POINTS,0,this.totalParticles),u.colorMask(!1,!1,!0,!1),u.clear(u.STENCIL_BUFFER_BIT),u.drawArrays(u.POINTS,0,this.totalParticles),u.colorMask(!1,!1,!1,!0),u.clear(u.STENCIL_BUFFER_BIT),u.drawArrays(u.POINTS,0,this.totalParticles),u.colorMask(!0,!0,!0,!0),u.disable(u.STENCIL_TEST),u.disable(u.DEPTH_TEST),u.depthFunc(u.LESS),u.bindFramebuffer(u.FRAMEBUFFER,null)}calculateLambda(M,S){u.bindFramebuffer(u.DRAW_FRAMEBUFFER,this.lambdaBuffer),u.viewport(0,0,this.particlesTextureSize,this.particlesTextureSize),this.calculateLambdaProgram.use(),this.calculateLambdaProgram.bindTexture("uTexturePosition",this.tmpPositionTexture,0),this.calculateLambdaProgram.bindTexture("uNeighbors",this.gridsTexture,1),this.calculateLambdaProgram.setUniform1f("uGridTextureSize",this.gridsTextureSize),this.calculateLambdaProgram.setUniform1f("uBucketSize",this.bucketSize),this.calculateLambdaProgram.setUniform1f("uParticleMass",S),this.calculateLambdaProgram.setUniform1f("uKernelRadius",this.kernelRadius),this.calculateLambdaProgram.setUniform1f("uRestDensity",S),this.calculateLambdaProgram.setUniform1f("uRelaxParameter",M),u.clear(u.COLOR_BUFFER_BIT),u.drawArrays(u.POINTS,0,this.totalParticles)}calculateDeltaP(M,S,d,n=!1,e=0,t=null,r=null){u.bindFramebuffer(u.DRAW_FRAMEBUFFER,this.velocityBuffer),u.viewport(0,0,this.particlesTextureSize,this.particlesTextureSize),this.calculateDeltaPProgram.use(),this.calculateDeltaPProgram.bindTexture("uTexturePosition",this.tmpPositionTexture,0),this.calculateDeltaPProgram.bindTexture("uNeighbors",this.gridsTexture,1),this.calculateDeltaPProgram.bindTexture("uLambda",this.lambdaTexture,2),this.calculateDeltaPProgram.setUniform1f("uGridTextureSize",this.gridsTextureSize),this.calculateDeltaPProgram.setUniform1f("uBucketSize",this.bucketSize),this.calculateDeltaPProgram.setUniform1f("uKernelRadius",this.kernelRadius),this.calculateDeltaPProgram.setUniform1f("uRestDensity",d),this.calculateDeltaPProgram.setUniform1f("uCollide",n),this.calculateDeltaPProgram.setUniform3f("uCenterPosition",t.x,t.y,t.z),this.calculateDeltaPProgram.setUniform3f("uSize",r.x,r.y,r.z),this.calculateDeltaPProgram.setUniform1i("uCorrection",M),this.calculateDeltaPProgram.setUniform1f("uTensileK",S),u.clear(u.COLOR_BUFFER_BIT),u.drawArrays(u.POINTS,0,this.totalParticles)}integrateVelocity(M){u.bindFramebuffer(u.DRAW_FRAMEBUFFER,this.tmpVelocityBuffer),u.viewport(0,0,this.particlesTextureSize,this.particlesTextureSize),this.integrateVelocityProgram.use(),this.integrateVelocityProgram.setUniform1f("uDeltaTime",M),this.integrateVelocityProgram.bindTexture("uTexturePosition",this.tmpPositionTexture,0),this.integrateVelocityProgram.bindTexture("uTexturePositionOld",this.positionTexture,1),u.clear(u.COLOR_BUFFER_BIT),u.drawArrays(u.POINTS,0,this.totalParticles)}calculateViscosity(M){u.bindFramebuffer(u.DRAW_FRAMEBUFFER,this.velocityBuffer),u.viewport(0,0,this.particlesTextureSize,this.particlesTextureSize),this.calculateViscosityProgram.use(),this.calculateViscosityProgram.bindTexture("uTexturePosition",this.tmpPositionTexture,0),this.calculateViscosityProgram.bindTexture("uTextureVelocity",this.tmpVelocityTexture,1),this.calculateViscosityProgram.bindTexture("uNeighbors",this.gridsTexture,2),this.calculateViscosityProgram.setUniform1f("uGridTextureSize",this.gridsTextureSize),this.calculateViscosityProgram.setUniform1f("uBucketSize",this.bucketSize),this.calculateViscosityProgram.setUniform1f("uKernelRadius",this.kernelRadius),this.calculateViscosityProgram.setUniform1f("uViscosity",M),u.clear(u.COLOR_BUFFER_BIT),u.drawArrays(u.POINTS,0,this.totalParticles)}calculateVorticity(){u.bindFramebuffer(u.DRAW_FRAMEBUFFER,this.vorticityBuffer),u.viewport(0,0,this.particlesTextureSize,this.particlesTextureSize),this.calculateVorticityProgram.use(),this.calculateVorticityProgram.bindTexture("uTexturePosition",this.tmpPositionTexture,0),this.calculateVorticityProgram.bindTexture("uTextureVelocity",this.tmpVelocityTexture,1),this.calculateVorticityProgram.bindTexture("uNeighbors",this.gridsTexture,2),this.calculateVorticityProgram.setUniform1f("uGridTextureSize",this.gridsTextureSize),this.calculateVorticityProgram.setUniform1f("uBucketSize",this.bucketSize),this.calculateVorticityProgram.setUniform1f("uKernelRadius",this.kernelRadius),u.clear(u.COLOR_BUFFER_BIT),u.drawArrays(u.POINTS,0,this.totalParticles)}applyVorticity(M,S){u.bindFramebuffer(u.DRAW_FRAMEBUFFER,this.tmpVelocityBuffer),u.viewport(0,0,this.particlesTextureSize,this.particlesTextureSize),this.applyVorticityProgram.use(),this.applyVorticityProgram.bindTexture("uTexturePosition",this.tmpPositionTexture,0),this.applyVorticityProgram.bindTexture("uTextureVelocity",this.velocityTexture,1),this.applyVorticityProgram.bindTexture("uTextureVorticity",this.vorticityTexture,2),this.applyVorticityProgram.bindTexture("uNeighbors",this.gridsTexture,3),this.applyVorticityProgram.setUniform1f("uGridTextureSize",this.gridsTextureSize),this.applyVorticityProgram.setUniform1f("uBucketSize",this.bucketSize),this.applyVorticityProgram.setUniform1f("uKernelRadius",this.kernelRadius),this.applyVorticityProgram.setUniform1f("uDeltaTime",M),this.applyVorticityProgram.setUniform1f("uVorticity",S),u.clear(u.COLOR_BUFFER_BIT),u.drawArrays(u.POINTS,0,this.totalParticles)}copyBetweenTexture(M,S){u.bindFramebuffer(u.DRAW_FRAMEBUFFER,S),u.viewport(0,0,this.particlesTextureSize,this.particlesTextureSize),this.copyTextureProgram.use(),this.copyTextureProgram.bindTexture("uTexture",M,0),u.clear(u.COLOR_BUFFER_BIT),u.drawArrays(u.TRIANGLE_STRIP,0,4)}}class we{constructor(M,S,d){this.pbf=S,this.camera=d,this.canvas=M,this.width=M.width,this.height=M.height,this.getDepthProgram=null,this.getThickProgram=null,this.restoreNormalProgram=null,this.smoothDepthProgram=null,this.shadingProgram=null,this.copyTextureProgram=null,this.renderParticlesProgram=null,this.depthTexture=null,this.smoothDepthTexture=null,this.thickTexture=null,this.normalTexture=null,this.depthBuffer=null,this.thickBuffer=null,this.normalBuffer=null,this.smoothDepthBuffer=null}init(){this.skybox=X,this.getDepthProgram=new U(pe,De),this.getThickProgram=new U(Pe,Ie),this.restoreNormalProgram=new U(be,Fe),this.smoothDepthProgram=new U(J,Ee),this.copyTextureProgram=new U(ue,se),this.shadingProgram=new U(ze,ye),this.renderParticlesProgram=new U(he,fe),this.depthTexture=new O,this.depthTexture.generate(this.width,this.height,u.RGBA32F,u.RGBA,u.NEAREST,u.NEAREST,u.FLOAT,null),this.smoothDepthTexture=new O,this.smoothDepthTexture.generate(this.width,this.height,u.RGBA32F,u.RGBA,u.NEAREST,u.NEAREST,u.FLOAT,null),this.thickTexture=new O,this.thickTexture.generate(this.width,this.height,u.RGBA32F,u.RGBA,u.NEAREST,u.NEAREST,u.FLOAT,null),this.normalTexture=new O,this.normalTexture.generate(this.width,this.height,u.RGBA32F,u.RGBA,u.NEAREST,u.NEAREST,u.FLOAT,null),this.depthBuffer=V(this.depthTexture.tex,!0,!1),this.thickBuffer=V(this.thickTexture.tex,!0,!1),this.normalBuffer=V(this.normalTexture.tex,!1,!1),this.smoothDepthBuffer=V(this.smoothDepthTexture.tex,!1,!1)}render(M){M.SSFR?(this.getDepth(),this.smoothDepth(),this.copyBetweenTexture(this.smoothDepthTexture,this.depthBuffer),this.smoothDepth(),this.getThick(),this.restoreNormal(),this.shading(M)):this.renderParticles()}getDepth(){u.bindFramebuffer(u.FRAMEBUFFER,this.depthBuffer),u.viewport(0,0,this.height,this.width),this.getDepthProgram.use(),this.getDepthProgram.bindTexture("uTexturePosition",this.pbf.positionTexture,0),this.getDepthProgram.setUniform1f("uScale",k.resolution),this.getDepthProgram.setUniformMatrix4fv("uCameraMatrix",this.camera.cameraTransformMatrix),this.getDepthProgram.setUniformMatrix4fv("uPMatrix",this.camera.perspectiveMatrix),u.clearColor(100,100,100,100),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),u.enable(u.DEPTH_TEST),u.drawArrays(u.POINTS,0,this.pbf.totalParticles),u.disable(u.DEPTH_TEST),u.clearColor(1,1,1,1)}getThick(){u.bindFramebuffer(u.FRAMEBUFFER,this.thickBuffer),u.viewport(0,0,this.height,this.width),this.getThickProgram.use(),this.getThickProgram.bindTexture("uTexturePosition",this.pbf.positionTexture,0),this.getThickProgram.setUniform1f("uScale",k.resolution),this.getThickProgram.setUniformMatrix4fv("uCameraMatrix",this.camera.cameraTransformMatrix),this.getThickProgram.setUniformMatrix4fv("uPMatrix",this.camera.perspectiveMatrix),u.clear(u.COLOR_BUFFER_BIT),u.enable(u.BLEND),u.blendEquationSeparate(u.FUNC_ADD,u.FUNC_ADD),u.blendFuncSeparate(u.ONE,u.ONE,u.ONE,u.ONE),u.disable(u.DEPTH_TEST),u.drawArrays(u.POINTS,0,this.pbf.totalParticles),u.disable(u.BLEND),u.enable(u.DEPTH_TEST)}restoreNormal(){u.bindFramebuffer(u.FRAMEBUFFER,this.normalBuffer),u.viewport(0,0,this.height,this.width),this.restoreNormalProgram.use(),this.restoreNormalProgram.bindTexture("uTexture",this.smoothDepthTexture,0),u.clearColor(0,0,0,0),u.clear(u.COLOR_BUFFER_BIT),u.disable(u.DEPTH_TEST),u.disable(u.BLEND),u.drawArrays(u.TRIANGLE_STRIP,0,4),u.enable(u.DEPTH_TEST),u.clearColor(1,1,1,1)}smoothDepth(){u.bindFramebuffer(u.FRAMEBUFFER,this.smoothDepthBuffer),u.viewport(0,0,this.height,this.width),this.smoothDepthProgram.use(),this.smoothDepthProgram.bindTexture("uTexture",this.depthTexture,0),u.clearColor(100,100,100,100),u.clear(u.COLOR_BUFFER_BIT),u.disable(u.DEPTH_TEST),u.disable(u.BLEND),u.drawArrays(u.TRIANGLE_STRIP,0,4),u.enable(u.DEPTH_TEST),u.clearColor(1,1,1,1)}shading(){const M=k.attenuate_k,S=k.max_attenuate,d=k.tint_color_r,n=k.tint_color_g,e=k.tint_color_b;u.bindFramebuffer(u.FRAMEBUFFER,null),u.viewport(0,0,this.height,this.width),this.shadingProgram.use(),this.shadingProgram.bindTexture("uDepthTexture",this.smoothDepthTexture,0),this.shadingProgram.bindTexture("uThickTexture",this.thickTexture,1),this.shadingProgram.bindTexture("uNormalTexture",this.normalTexture,2),this.shadingProgram.bindTexture("uSkybox",this.skybox.cubemapTexture,3),this.shadingProgram.setUniformMatrix4fv("uCameraMatrix",this.camera.cameraTransformMatrix),this.shadingProgram.setUniform3f("uTintColor",d/255,n/255,e/255),this.shadingProgram.setUniform1f("uMaxAttenuate",S),this.shadingProgram.setUniform1f("uAttenuateK",M),u.disable(u.BLEND),u.drawArrays(u.TRIANGLE_STRIP,0,4)}renderParticles(){u.bindFramebuffer(u.DRAW_FRAMEBUFFER,null),u.viewport(0,0,this.height,this.height),renderParticlesProgram.use(),renderParticlesProgram.bindTexture("uTexturePosition",this.pbf.positionTexture,0),renderParticlesProgram.setUniform1f("uScale",k.resolution),renderParticlesProgram.setUniform1f("particleSize",k.particleSize),renderParticlesProgram.setUniformMatrix4fv("uCameraMatrix",this.camera.cameraTransformMatrix),renderParticlesProgram.setUniformMatrix4fv("uPMatrix",this.camera.perspectiveMatrix),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),u.drawArrays(u.POINTS,0,this.pbf.totalParticles)}copyBetweenTexture(M,S){u.bindFramebuffer(u.FRAMEBUFFER,S),u.viewport(0,0,this.height,this.width),this.copyTextureProgram.use(),this.copyTextureProgram.bindTexture("uTexture",M,0),u.clear(u.COLOR_BUFFER_BIT),u.drawArrays(u.TRIANGLE_STRIP,0,4)}exportTexture(M){const S=u.createFramebuffer();u.framebufferTexture2D(u.FRAMEBUFFER,u.COLOR_ATTACHMENT0,u.TEXTURE_2D,M.tex,0),u.drawBuffers([u.COLOR_ATTACHMENT0]),u.readBuffer(u.COLOR_ATTACHMENT0);var d=new Float32Array(this.width*this.height*4);return u.readPixels(0,0,this.width,this.height,u.RGBA,u.FLOAT,d),console.log(d),d}}class Be{constructor(M){this.data=[-1,1,-1,-1,-1,-1,1,-1,-1,1,-1,-1,1,1,-1,-1,1,-1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,-1,1,-1,1,1,1,1,1,1,1,1,1,-1,1,-1,-1,-1,-1,1,-1,1,1,1,1,1,1,1,1,1,-1,1,-1,-1,1,-1,1,-1,1,1,-1,1,1,1,1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,1,-1,-1,1,-1,-1,-1,-1,1,1,-1,1],this.vertexBuffer=u.createBuffer(),u.bindBuffer(u.ARRAY_BUFFER,this.vertexBuffer),u.bufferData(u.ARRAY_BUFFER,new Float32Array(this.data),u.STATIC_DRAW),this.shader=M,this.img_list=[j.getElementById("cube_right"),j.getElementById("cube_left"),j.getElementById("cube_top"),j.getElementById("cube_bottom"),j.getElementById("cube_back"),j.getElementById("cube_front")]}valid(){for(let M=0;M<6;M++)if(!this.img_list[M].complete)return!1;return!0}generate(){this.cubemapTexture=new ae,this.cubemapTexture.generate(2048,2048,this.img_list)}render(){u.bindFramebuffer(u.FRAMEBUFFER,null),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),u.viewport(0,0,W.height,W.height),u.disable(u.DEPTH_TEST),this.shader.use(),this.shader.bindTexture("skybox",this.cubemapTexture,0),u.bindBuffer(u.ARRAY_BUFFER,this.vertexBuffer);const M=this.shader.getAttribLoc("aPosition");u.enableVertexAttribArray(M),u.vertexAttribPointer(M,3,u.FLOAT,!1,12,0),u.drawArrays(u.TRIANGLES,0,36)}}var k={resolution:64,particleSize:3,particlesNum:5e4,solverIterations:4,deltaTime:.04,relaxParameter:.05,correction:!0,tensileK:40,viscosity:.1,vorticity:.01,ax:0,ay:-2,az:0,addObstacle:!1,obstacleX:.5,obstacleY:.2,obstacleZ:.5,sizeX:.3,sizeY:.1,sizeZ:.8,SSFR:!0,attenuate_k:.5,max_attenuate:.3,tint_color_r:6,tint_color_g:105,tint_color_b:217};const Ne=`#version 300 es
precision highp float;


		uniform sampler2D tDiffuse;
		uniform float h;

		in vec2 uv; out vec4 color;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture( tDiffuse, vec2( uv.x - 4.0 * h, uv.y ) ) * 0.051;
			sum += texture( tDiffuse, vec2( uv.x - 3.0 * h, uv.y ) ) * 0.0918;
			sum += texture( tDiffuse, vec2( uv.x - 2.0 * h, uv.y ) ) * 0.12245;
			sum += texture( tDiffuse, vec2( uv.x - 1.0 * h, uv.y ) ) * 0.1531;
			sum += texture( tDiffuse, vec2( uv.x, uv.y ) ) * 0.1633;
			sum += texture( tDiffuse, vec2( uv.x + 1.0 * h, uv.y ) ) * 0.1531;
			sum += texture( tDiffuse, vec2( uv.x + 2.0 * h, uv.y ) ) * 0.12245;
			sum += texture( tDiffuse, vec2( uv.x + 3.0 * h, uv.y ) ) * 0.0918;
			sum += texture( tDiffuse, vec2( uv.x + 4.0 * h, uv.y ) ) * 0.051;

			color = sum;

		}`,Le=`#version 300 es
precision highp float;


		uniform sampler2D tDiffuse;
		uniform float v;

		in vec2 uv; out vec4 color;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture( tDiffuse, vec2( uv.x, uv.y - 4.0 * v ) ) * 0.051;
			sum += texture( tDiffuse, vec2( uv.x, uv.y - 3.0 * v ) ) * 0.0918;
			sum += texture( tDiffuse, vec2( uv.x, uv.y - 2.0 * v ) ) * 0.12245;
			sum += texture( tDiffuse, vec2( uv.x, uv.y - 1.0 * v ) ) * 0.1531;
			sum += texture( tDiffuse, vec2( uv.x, uv.y ) ) * 0.1633;
			sum += texture( tDiffuse, vec2( uv.x, uv.y + 1.0 * v ) ) * 0.1531;
			sum += texture( tDiffuse, vec2( uv.x, uv.y + 2.0 * v ) ) * 0.12245;
			sum += texture( tDiffuse, vec2( uv.x, uv.y + 3.0 * v ) ) * 0.0918;
			sum += texture( tDiffuse, vec2( uv.x, uv.y + 4.0 * v ) ) * 0.051;

			color = sum;

		}`,Q=new Ae,H=new ge(W),X=new Be(new U(Re,_e)),Y=new we(W,Q,H);X.img_list=Object.values(ie),X.generate=function(){this.cubemapTexture=new ae,this.cubemapTexture.generate(this.img_list[0].width,this.img_list[0].height,this.img_list)};const Ue=()=>{let R=[],M=[];const S=k.resolution,d=Math.pow(k.particlesNum,1/3),n=S/2-d/2,e=S/2+d/2;for(let t=n;t<e;t++)for(let r=S-d-2;r<S-2;r++)for(let i=n;i<e;i++)R.push(t,r,i,1),M.push(0,0,0,0);Q.init(R,M,S)};X.generate(),Ue(),Y.init();const ee=new O;ee.generate(500,500,u.RGBA32F,u.RGBA,u.NEAREST,u.NEAREST,u.FLOAT,null);const Ce=V(ee.tex,!1,!1),te=new U(J,Ne),re=new U(J,Le),ke=Y.getThick.bind(Y);return Y.getThick=()=>{ke(),u.disable(u.DEPTH_TEST),u.disable(u.BLEND),u.bindFramebuffer(u.FRAMEBUFFER,Ce),te.use(),te.bindTexture("tDiffuse",Y.thickTexture,0),te.setUniform1f("h",1/500),u.drawArrays(u.TRIANGLE_STRIP,0,4),u.bindFramebuffer(u.FRAMEBUFFER,Y.thickBuffer),re.use(),re.bindTexture("tDiffuse",ee,0),re.setUniform1f("v",1/500),u.drawArrays(u.TRIANGLE_STRIP,0,4)},H.updateCamera(35,1,2.5),{camera:H,controls:k,stats:oe,pbf:Q,skybox:X,frame(){Q.simulate(k),H.updateCamera(35,1,k.distance||2.5),X.render(),Y.render(k),u.disable(u.DEPTH_TEST)},render(){H.updateCamera(35,1,k.distance||2.5),X.render(),Y.render(k),u.disable(u.DEPTH_TEST)}}}export{Ye as createPBFCore};
