(()=>{var wc=0,jo=1,Ac=2;var sr=1,Sa=2,vs=3,Pi=0,Qe=1,Mn=2,Hi=0,ys=1,tl=2,el=3,nl=4,Rc=5;var Vi=100,Cc=101,Ic=102,Pc=103,Lc=104,Dc=200,Nc=201,Uc=202,Fc=203,il=204,sl=205,Oc=206,Bc=207,zc=208,kc=209,Gc=210,Hc=211,Vc=212,Wc=213,Xc=214,Yr=0,Zr=1,Jr=2,hs=3,$r=4,Kr=5,Qr=6,jr=7,rl=0,qc=1,Yc=2,$n=0,al=1,ol=2,ll=3,rr=4,cl=5,hl=6,ul=7,Xo="attached",Zc="detached",dl=300,Wi=301,Ms=302,ba=303,Ea=304,li=1e3,Yn=1001,ta=1002,Xe=1003,Jc=1004;var ar=1005;var mn=1006,Ta=1007;var fi=1008;var Sn=1009,fl=1010,pl=1011,Ss=1012,wa=1013,Vn=1014,Pn=1015,Wn=1016,Aa=1017,Ra=1018,Xi=1020,ml=35902,gl=35899,_l=1021,xl=1022,Ln=1023,ci=1026,pi=1027,vl=1028,Ca=1029,Li=1030,Ia=1031;var Pa=1033,or=33776,lr=33777,cr=33778,hr=33779,La=35840,Da=35841,Na=35842,Ua=35843,Fa=36196,Oa=37492,Ba=37496,za=37488,ka=37489,ur=37490,Ga=37491,Ha=37808,Va=37809,Wa=37810,Xa=37811,qa=37812,Ya=37813,Za=37814,Ja=37815,$a=37816,Ka=37817,Qa=37818,ja=37819,to=37820,eo=37821,no=36492,io=36494,so=36495,ro=36283,ao=36284,dr=36285,oo=36286;var Ds=2300,ea=2301,Xr=2302,qo=2303,Yo=2400,Zo=2401,Jo=2402;var $c=3200;var co=0,Kc=1,mi="",We="srgb",Ns="srgb-linear",Us="linear",pe="srgb";var qr=7680;var Qc=519,jc=512,th=513,eh=514,yl=515,nh=516,ih=517,Ml=518,Sl=519,sh=35044;var bl="300 es",In=2e3,us=2001;function gu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function _u(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rh(){let i=Fs("canvas");return i.style.display="block",i}var Ql={},ds=null;function El(...i){let t="THREE."+i.shift();ds?ds("log",t,...i):console.log(t,...i)}function ah(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Lt(...i){i=ah(i);let t="THREE."+i.shift();if(ds)ds("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ot(...i){i=ah(i);let t="THREE."+i.shift();if(ds)ds("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ls(...i){let t=i.join(" ");t in Ql||(Ql[t]=!0,Lt(...i))}function oh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var lh={[Yr]:Yr,[Jr]:Qr,[$r]:$r,[hs]:Kr,[Zr]:Zr,[Qr]:Jr,[jr]:jr,[Kr]:hs},Zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Mo=Math.PI/180,na=180/Math.PI;function bs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function xu(i,t){return(i%t+t)%t}function So(i,t,e){return(1-e)*i+e*t}function ch(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Tl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function vu(i,t){if(t.constructor===Float32Array)return i;let e=Tl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function yu(i,t){if(t.constructor===Float32Array)return i;let e=Tl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Kt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],m=r[a+1],g=r[a+2],y=r[a+3];if(d!==y||c!==u||l!==m||h!==g){let p=c*u+l*m+h*g+d*y;p<0&&(u=-u,m=-m,g=-g,y=-y,p=-p);let f=1-o;if(p<.9995){let M=Math.acos(p),A=Math.sin(M);f=Math.sin(f*M)/A,o=Math.sin(o*M)/A,c=c*f+u*o,l=l*f+m*o,h=h*f+g*o,d=d*f+y*o}else{c=c*f+u*o,l=l*f+m*o,h=h*f+g*o,d=d*f+y*o;let M=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=M,l*=M,h*=M,d*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*d+c*m-l*u,t[e+1]=c*g+h*u+l*d-o*m,t[e+2]=l*g+h*m+o*u-c*d,t[e+3]=h*g-o*d-c*u-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d+u*m*g;break;case"YZX":this._x=u*h*d+l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d-u*m*g;break;case"XZY":this._x=u*h*d-l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d+u*m*g;break;default:Lt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>d){let m=2*Math.sqrt(1+n-o-d);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>d){let m=2*Math.sqrt(1+o-n-d);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return bo.copy(this).projectOnVector(t),this.sub(bo)}reflect(t){return this.sub(bo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bo=new F,jl=new qe,Bt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],m=n[5],g=n[8],y=s[0],p=s[3],f=s[6],M=s[1],A=s[4],S=s[7],w=s[2],b=s[5],_=s[8];return r[0]=a*y+o*M+c*w,r[3]=a*p+o*A+c*b,r[6]=a*f+o*S+c*_,r[1]=l*y+h*M+d*w,r[4]=l*p+h*A+d*b,r[7]=l*f+h*S+d*_,r[2]=u*y+m*M+g*w,r[5]=u*p+m*A+g*b,r[8]=u*f+m*S+g*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,m=l*r-a*c,g=e*d+n*u+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*l-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=u*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-o*e)*y,t[6]=m*y,t[7]=(n*c-l*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Eo.makeScale(t,e)),this}rotate(t){return Ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Eo.makeRotation(-t)),this}translate(t,e){return Ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Eo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Eo=new Bt,tc=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ec=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mu(){let i={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pe&&(s.r=oi(s.r),s.g=oi(s.g),s.b=oi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pe&&(s.r=cs(s.r),s.g=cs(s.g),s.b=cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mi?Us:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ns]:{primaries:t,whitePoint:n,transfer:Us,toXYZ:tc,fromXYZ:ec,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:tc,fromXYZ:ec,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:We}}}),i}var te=Mu();function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var $i,ia=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{$i===void 0&&($i=Fs("canvas")),$i.width=t.width,$i.height=t.height;let s=$i.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=$i}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Fs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=oi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(oi(e[n]/255)*255):e[n]=oi(e[n]);return{data:e,width:t.width,height:t.height}}else return Lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Su=0,fs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=bs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(To(s[a].image)):r.push(To(s[a]))}else r=To(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function To(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ia.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Lt("Texture: Unable to serialize Texture."),{})}var bu=0,wo=new F,gn=class i extends Zn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Yn,s=Yn,r=mn,a=fi,o=Ln,c=Sn,l=i.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=bs(),this.name="",this.source=new fs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(wo).x}get height(){return this.source.getSize(wo).y}get depth(){return this.source.getSize(wo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Lt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Lt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case li:t.x=t.x-Math.floor(t.x);break;case Yn:t.x=t.x<0?0:1;break;case ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case li:t.y=t.y-Math.floor(t.y);break;case Yn:t.y=t.y<0?0:1;break;case ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=dl;gn.DEFAULT_ANISOTROPY=1;var ge=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],m=c[5],g=c[9],y=c[2],p=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(l+1)/2,S=(m+1)/2,w=(f+1)/2,b=(h+u)/4,_=(d+y)/4,E=(g+p)/4;return A>S&&A>w?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=b/n,r=_/n):S>w?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=b/s,r=E/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=_/r,s=E/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-y)/M,this.z=(u-h)/M,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sa=class extends Zn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new gn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new fs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tn=class extends sa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Os=class extends gn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ra=class extends gn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var qt=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,c,l,h,d,u,m,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,d,u,m,g,y,p)}set(t,e,n,s,r,a,o,c,l,h,d,u,m,g,y,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=m,f[7]=g,f[11]=y,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ki.setFromMatrixColumn(t,0).length(),r=1/Ki.setFromMatrixColumn(t,1).length(),a=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,m=a*d,g=o*h,y=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=m+g*l,e[5]=u-y*l,e[9]=-o*c,e[2]=y-u*l,e[6]=g+m*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,m=c*d,g=l*h,y=l*d;e[0]=u+y*o,e[4]=g*o-m,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=y+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,m=c*d,g=l*h,y=l*d;e[0]=u-y*o,e[4]=-a*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,m=a*d,g=o*h,y=o*d;e[0]=c*h,e[4]=g*l-m,e[8]=u*l+y,e[1]=c*d,e[5]=y*l+u,e[9]=m*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,m=a*l,g=o*c,y=o*l;e[0]=c*h,e[4]=y-u*d,e[8]=g*d+m,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*d+g,e[10]=u-y*d}else if(t.order==="XZY"){let u=a*c,m=a*l,g=o*c,y=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+y,e[5]=a*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Eu,t,Tu)}lookAt(t,e,n){let s=this.elements;return bn.subVectors(t,e),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),_i.crossVectors(n,bn),_i.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),_i.crossVectors(n,bn)),_i.normalize(),Er.crossVectors(bn,_i),s[0]=_i.x,s[4]=Er.x,s[8]=bn.x,s[1]=_i.y,s[5]=Er.y,s[9]=bn.y,s[2]=_i.z,s[6]=Er.z,s[10]=bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],m=n[13],g=n[2],y=n[6],p=n[10],f=n[14],M=n[3],A=n[7],S=n[11],w=n[15],b=s[0],_=s[4],E=s[8],P=s[12],R=s[1],L=s[5],U=s[9],G=s[13],I=s[2],H=s[6],Y=s[10],X=s[14],et=s[3],V=s[7],Z=s[11],nt=s[15];return r[0]=a*b+o*R+c*I+l*et,r[4]=a*_+o*L+c*H+l*V,r[8]=a*E+o*U+c*Y+l*Z,r[12]=a*P+o*G+c*X+l*nt,r[1]=h*b+d*R+u*I+m*et,r[5]=h*_+d*L+u*H+m*V,r[9]=h*E+d*U+u*Y+m*Z,r[13]=h*P+d*G+u*X+m*nt,r[2]=g*b+y*R+p*I+f*et,r[6]=g*_+y*L+p*H+f*V,r[10]=g*E+y*U+p*Y+f*Z,r[14]=g*P+y*G+p*X+f*nt,r[3]=M*b+A*R+S*I+w*et,r[7]=M*_+A*L+S*H+w*V,r[11]=M*E+A*U+S*Y+w*Z,r[15]=M*P+A*G+S*X+w*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],m=t[14],g=t[3],y=t[7],p=t[11],f=t[15],M=c*m-l*u,A=o*m-l*d,S=o*u-c*d,w=a*m-l*h,b=a*u-c*h,_=a*d-o*h;return e*(y*M-p*A+f*S)-n*(g*M-p*w+f*b)+s*(g*A-y*w+f*_)-r*(g*S-y*b+p*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],m=t[11],g=t[12],y=t[13],p=t[14],f=t[15],M=e*o-n*a,A=e*c-s*a,S=e*l-r*a,w=n*c-s*o,b=n*l-r*o,_=s*l-r*c,E=h*y-d*g,P=h*p-u*g,R=h*f-m*g,L=d*p-u*y,U=d*f-m*y,G=u*f-m*p,I=M*G-A*U+S*L+w*R-b*P+_*E;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/I;return t[0]=(o*G-c*U+l*L)*H,t[1]=(s*U-n*G-r*L)*H,t[2]=(y*_-p*b+f*w)*H,t[3]=(u*b-d*_-m*w)*H,t[4]=(c*R-a*G-l*P)*H,t[5]=(e*G-s*R+r*P)*H,t[6]=(p*S-g*_-f*A)*H,t[7]=(h*_-u*S+m*A)*H,t[8]=(a*U-o*R+l*E)*H,t[9]=(n*R-e*U-r*E)*H,t[10]=(g*b-y*S+f*M)*H,t[11]=(d*S-h*b-m*M)*H,t[12]=(o*P-a*L-c*E)*H,t[13]=(e*L-n*P+s*E)*H,t[14]=(y*A-g*w-p*M)*H,t[15]=(h*w-d*A+u*M)*H,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,m=r*h,g=r*d,y=a*h,p=a*d,f=o*d,M=c*l,A=c*h,S=c*d,w=n.x,b=n.y,_=n.z;return s[0]=(1-(y+f))*w,s[1]=(m+S)*w,s[2]=(g-A)*w,s[3]=0,s[4]=(m-S)*b,s[5]=(1-(u+f))*b,s[6]=(p+M)*b,s[7]=0,s[8]=(g+A)*_,s[9]=(p-M)*_,s[10]=(1-(u+y))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ki.set(s[0],s[1],s[2]).length(),o=Ki.set(s[4],s[5],s[6]).length(),c=Ki.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Un.copy(this);let l=1/a,h=1/o,d=1/c;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=d,Un.elements[9]*=d,Un.elements[10]*=d,e.setFromRotationMatrix(Un),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=In,c=!1){let l=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),m=(n+s)/(n-s),g,y;if(c)g=r/(a-r),y=a*r/(a-r);else if(o===In)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===us)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=In,c=!1){let l=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),m=-(n+s)/(n-s),g,y;if(c)g=1/(a-r),y=a/(a-r);else if(o===In)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===us)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ki=new F,Un=new qt,Eu=new F(0,0,0),Tu=new F(1,1,1),_i=new F,Er=new F,bn=new F,nc=new qt,ic=new qe,kn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ic.setFromEuler(this),this.setFromQuaternion(ic,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kn.DEFAULT_ORDER="XYZ";var Bs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},wu=0,sc=new F,Qi=new qe,ni=new qt,Tr=new F,As=new F,Au=new F,Ru=new qe,rc=new F(1,0,0),ac=new F(0,1,0),oc=new F(0,0,1),lc={type:"added"},Cu={type:"removed"},ji={type:"childadded",child:null},Ao={type:"childremoved",child:null},Ke=class i extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new kn,n=new qe,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qt},normalMatrix:{value:new Bt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(rc,t)}rotateY(t){return this.rotateOnAxis(ac,t)}rotateZ(t){return this.rotateOnAxis(oc,t)}translateOnAxis(t,e){return sc.copy(t).applyQuaternion(this.quaternion),this.position.add(sc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rc,t)}translateY(t){return this.translateOnAxis(ac,t)}translateZ(t){return this.translateOnAxis(oc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Tr.copy(t):Tr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(As,Tr,this.up):ni.lookAt(Tr,As,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),Qi.setFromRotationMatrix(ni),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ot("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lc),ji.child=t,this.dispatchEvent(ji),ji.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cu),Ao.child=t,this.dispatchEvent(Ao),Ao.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lc),ji.child=t,this.dispatchEvent(ji),ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,t,Au),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,Ru,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ke.DEFAULT_UP=new F(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zn=class extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},Iu={type:"move"},ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,n),f=this._getHandJoint(l,y);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&u>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Iu)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new zn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},wr={h:0,s:0,l:0};function Ro(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=xu(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ro(a,r,t+1/3),this.g=Ro(a,r,t),this.b=Ro(a,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&Lt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Lt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Lt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){let n=hh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Lt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oi(t.r),this.g=oi(t.g),this.b=oi(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return te.workingToColorSpace(on.copy(this),t),Math.round(ne(on.r*255,0,255))*65536+Math.round(ne(on.g*255,0,255))*256+Math.round(ne(on.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(on.copy(this),e);let n=on.r,s=on.g,r=on.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=We){te.workingToColorSpace(on.copy(this),t);let e=on.r,n=on.g,s=on.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(wr);let n=So(xi.h,wr.h,e),s=So(xi.s,wr.s,e),r=So(xi.l,wr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new Vt;Vt.NAMES=hh;var zs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ks=class extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fn=new F,ii=new F,Co=new F,si=new F,ts=new F,es=new F,cc=new F,Io=new F,Po=new F,Lo=new F,Do=new ge,No=new ge,Uo=new ge,Si=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fn.subVectors(t,e),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Fn.subVectors(s,e),ii.subVectors(n,e),Co.subVectors(t,e);let a=Fn.dot(Fn),o=Fn.dot(ii),c=Fn.dot(Co),l=ii.dot(ii),h=ii.dot(Co),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,m=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,si.x),c.addScaledVector(a,si.y),c.addScaledVector(o,si.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Do.setScalar(0),No.setScalar(0),Uo.setScalar(0),Do.fromBufferAttribute(t,e),No.fromBufferAttribute(t,n),Uo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Do,r.x),a.addScaledVector(No,r.y),a.addScaledVector(Uo,r.z),a}static isFrontFacing(t,e,n,s){return Fn.subVectors(n,e),ii.subVectors(t,e),Fn.cross(ii).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Fn.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ts.subVectors(s,n),es.subVectors(r,n),Io.subVectors(t,n);let c=ts.dot(Io),l=es.dot(Io);if(c<=0&&l<=0)return e.copy(n);Po.subVectors(t,s);let h=ts.dot(Po),d=es.dot(Po);if(h>=0&&d<=h)return e.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(n).addScaledVector(ts,a);Lo.subVectors(t,r);let m=ts.dot(Lo),g=es.dot(Lo);if(g>=0&&m<=g)return e.copy(r);let y=m*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(es,o);let p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return cc.subVectors(r,s),o=(d-h)/(d-h+(m-g)),e.copy(s).addScaledVector(cc,o);let f=1/(p+y+u);return a=y*f,o=u*f,e.copy(n).addScaledVector(ts,a).addScaledVector(es,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ui=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,On):On.fromBufferAttribute(r,a),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ar.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)),Ar.applyMatrix4(t.matrixWorld),this.union(Ar)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rs),Rr.subVectors(this.max,Rs),ns.subVectors(t.a,Rs),is.subVectors(t.b,Rs),ss.subVectors(t.c,Rs),vi.subVectors(is,ns),yi.subVectors(ss,is),Bi.subVectors(ns,ss);let e=[0,-vi.z,vi.y,0,-yi.z,yi.y,0,-Bi.z,Bi.y,vi.z,0,-vi.x,yi.z,0,-yi.x,Bi.z,0,-Bi.x,-vi.y,vi.x,0,-yi.y,yi.x,0,-Bi.y,Bi.x,0];return!Fo(e,ns,is,ss,Rr)||(e=[1,0,0,0,1,0,0,0,1],!Fo(e,ns,is,ss,Rr))?!1:(Cr.crossVectors(vi,yi),e=[Cr.x,Cr.y,Cr.z],Fo(e,ns,is,ss,Rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ri=[new F,new F,new F,new F,new F,new F,new F,new F],On=new F,Ar=new ui,ns=new F,is=new F,ss=new F,vi=new F,yi=new F,Bi=new F,Rs=new F,Rr=new F,Cr=new F,zi=new F;function Fo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){zi.fromArray(i,r);let o=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),c=t.dot(zi),l=e.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Ne=new F,Ir=new Kt,Pu=0,ln=class extends Zn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sh,this.updateRanges=[],this.gpuType=Pn,this.version=0,this._normalizationScale=t!==void 0?Tl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ir.fromBufferAttribute(this,e),Ir.applyMatrix3(t),this.setXY(e,Ir.x,Ir.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):vu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):yu(t,this.array)}};var Gs=class extends ln{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Hs=class extends ln{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var _e=class extends ln{constructor(t,e,n){super(new Float32Array(t),e,n)}},Lu=new ui,Cs=new F,Oo=new F,bi=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Lu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cs.subVectors(t,this.center);let e=Cs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Cs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cs.copy(t.center).add(Oo)),this.expandByPoint(Cs.copy(t.center).sub(Oo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Du=0,Cn=new qt,Bo=new Ke,rs=new F,En=new ui,Is=new ui,Ve=new F,_n=class i extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gu(t)?Hs:Gs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return Bo.lookAt(t),Bo.updateMatrix(),this.applyMatrix4(Bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _e(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Is.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(En.min,Is.min),En.expandByPoint(Ve),Ve.addVectors(En.max,Is.max),En.expandByPoint(Ve)):(En.expandByPoint(Is.min),En.expandByPoint(Is.max))}En.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ve.fromBufferAttribute(o,l),c&&(rs.fromBufferAttribute(t,l),Ve.add(rs)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ln(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new F,c[P]=new F;let h=new F,d=new F,u=new F,m=new Kt,g=new Kt,y=new Kt,p=new F,f=new F;function M(P,R,L){l[P]=l[R]=l[L]=1,h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,R),u.fromBufferAttribute(n,L),m.fromBufferAttribute(r,P),g.fromBufferAttribute(r,R),y.fromBufferAttribute(r,L),d.sub(h),u.sub(h),g.sub(m),y.sub(m);let U=1/(g.x*y.y-y.x*g.y);isFinite(U)&&(p.copy(d).multiplyScalar(y.y).addScaledVector(u,-g.y).multiplyScalar(U),f.copy(u).multiplyScalar(g.x).addScaledVector(d,-y.x).multiplyScalar(U),o[P].add(p),o[R].add(p),o[L].add(p),c[P].add(f),c[R].add(f),c[L].add(f))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let P=0,R=A.length;P<R;++P){let L=A[P],U=L.start,G=L.count;for(let I=U,H=U+G;I<H;I+=3)M(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let S=new F,w=new F,b=new F,_=new F;function E(P){b.fromBufferAttribute(s,P),_.copy(b);let R=o[P];S.copy(R),S.sub(b.multiplyScalar(b.dot(R))).normalize(),w.crossVectors(_,R);let U=w.dot(c[P])<0?-1:1;a.setXYZW(P,S.x,S.y,S.z,U)}for(let P=0,R=n.count;P<R;++P)l[P]&&E(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ln(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new F,r=new F,a=new F,o=new F,c=new F,l=new F,h=new F,d=new F;if(t)for(let u=0,m=t.count;u<m;u+=3){let g=t.getX(u+0),y=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),m=0,g=0;for(let y=0,p=c.length;y<p;y++){o.isInterleavedBufferAttribute?m=c[y]*o.data.stride+o.offset:m=c[y]*h;for(let f=0;f<h;f++)u[g++]=l[m++]}return new ln(u,h,d)}if(this.index===null)return Lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],m=t(u,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let m=l[d];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var zo=new F,Nu=new F,Uu=new Bt,Bn=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=zo.subVectors(n,e).cross(Nu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(zo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Uu.getNormalMatrix(t),s=this.coplanarPoint(zo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Fu=0,Ei=class extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=ys,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=il,this.blendDst=sl,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qr,this.stencilZFail=qr,this.stencilZPass=qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Lt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Lt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Vt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Bn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Kt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Kt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ai=new F,ko=new F,Pr=new F,Lr=new F,Vs=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ko.copy(t).add(e).multiplyScalar(.5),Pr.copy(e).sub(t).normalize(),Lr.copy(this.origin).sub(ko);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Pr),o=Lr.dot(this.direction),c=-Lr.dot(Pr),l=Lr.lengthSq(),h=Math.abs(1-a*a),d,u,m,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,m=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),m=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ko).addScaledVector(Pr,u),m}intersectSphere(t,e){if(t.radius<0)return null;ai.subVectors(t.center,this.origin);let n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,m=t.z-a.z,g=e.x-a.x,y=e.y-a.y,p=e.z-a.z,f=n.x-a.x,M=n.y-a.y,A=n.z-a.z,S=Math.abs(c),w=Math.abs(l),b=Math.abs(h),_,E,P,R,L,U,G,I,H,Y,X,et;if(S>=w&&S>=b?(P=c,U=d,H=g,et=f,c>=0?(_=l,E=h,R=u,L=m,G=y,I=p,Y=M,X=A):(_=h,E=l,R=m,L=u,G=p,I=y,Y=A,X=M)):w>=b?(P=l,U=u,H=y,et=M,l>=0?(_=h,E=c,R=m,L=d,G=p,I=g,Y=A,X=f):(_=c,E=h,R=d,L=m,G=g,I=p,Y=f,X=A)):(P=h,U=m,H=p,et=A,h>=0?(_=c,E=l,R=d,L=u,G=g,I=y,Y=f,X=M):(_=l,E=c,R=u,L=d,G=y,I=g,Y=M,X=f)),P===0)return null;let V=_/P,Z=E/P,nt=1/P,Tt=R-V*U,St=L-Z*U,K=G-V*H,mt=I-Z*H,yt=Y-V*et,Pt=X-Z*et,gt=yt*mt-Pt*K,Ut=Tt*Pt-St*yt,Te=K*St-mt*Tt;if(s){if(gt<0||Ut<0||Te<0)return null}else if((gt<0||Ut<0||Te<0)&&(gt>0||Ut>0||Te>0))return null;let Dt=gt+Ut+Te;if(Dt===0)return null;let ae=nt*(gt*U+Ut*H+Te*et);return(Dt>0?ae<0:ae>0)?null:this.at(ae/Dt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gn=class extends Ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},hc=new qt,ki=new Vs,Dr=new bi,uc=new F,Nr=new F,Ur=new F,Fr=new F,Go=new F,Or=new F,dc=new F,Br=new F,xe=class extends Ke{constructor(t=new _n,e=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Or.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(Go.fromBufferAttribute(d,t),a?Or.addScaledVector(Go,h):Or.addScaledVector(Go.sub(e),h))}e.add(Or)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(Dr.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Dr,uc)===null||ki.origin.distanceToSquared(uc)>(t.far-t.near)**2))&&(hc.copy(r).invert(),ki.copy(t.ray).applyMatrix4(hc),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let p=u[g],f=a[p.materialIndex],M=Math.max(p.start,m.start),A=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=M,w=A;S<w;S+=3){let b=o.getX(S),_=o.getX(S+1),E=o.getX(S+2);s=zr(this,f,t,n,l,h,d,b,_,E),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let p=g,f=y;p<f;p+=3){let M=o.getX(p),A=o.getX(p+1),S=o.getX(p+2);s=zr(this,a,t,n,l,h,d,M,A,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let p=u[g],f=a[p.materialIndex],M=Math.max(p.start,m.start),A=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let S=M,w=A;S<w;S+=3){let b=S,_=S+1,E=S+2;s=zr(this,f,t,n,l,h,d,b,_,E),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let p=g,f=y;p<f;p+=3){let M=p,A=p+1,S=p+2;s=zr(this,a,t,n,l,h,d,M,A,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Ou(i,t,e,n,s,r,a,o){let c;if(t.side===Qe?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Pi,o),c===null)return null;Br.copy(o),Br.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Br);return l<e.near||l>e.far?null:{distance:l,point:Br.clone(),object:i}}function zr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Nr),i.getVertexPosition(c,Ur),i.getVertexPosition(l,Fr);let h=Ou(i,t,e,n,Nr,Ur,Fr,dc);if(h){let d=new F;Si.getBarycoord(dc,Nr,Ur,Fr,d),s&&(h.uv=Si.getInterpolatedAttribute(s,o,c,l,d,new Kt)),r&&(h.uv1=Si.getInterpolatedAttribute(r,o,c,l,d,new Kt)),a&&(h.normal=Si.getInterpolatedAttribute(a,o,c,l,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new F,materialIndex:0};Si.getNormal(Nr,Ur,Fr,u.normal),h.face=u,h.barycoord=d}return h}var Ps=new ge,fc=new ge,pc=new ge,Bu=new ge,mc=new qt,kr=new F,Ho=new bi,gc=new qt,Vo=new Vs,Ws=class extends xe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Xo,this.bindMatrix=new qt,this.bindMatrixInverse=new qt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ui),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,kr),this.boundingBox.expandByPoint(kr)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bi),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,kr),this.boundingSphere.expandByPoint(kr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}raycast(t,e){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ho.copy(this.boundingSphere),Ho.applyMatrix4(s),t.ray.intersectsSphere(Ho)!==!1&&(gc.copy(s).invert(),Vo.copy(t.ray).applyMatrix4(gc),!(this.boundingBox!==null&&Vo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Vo)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ge,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Xo?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Zc?this.bindMatrixInverse.copy(this.bindMatrix).invert():Lt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,s=this.geometry;fc.fromBufferAttribute(s.attributes.skinIndex,t),pc.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(Ps.copy(e),e.set(0,0,0,0)):(Ps.set(e.x,e.y,e.z,1),e.set(0,0,0)),Ps.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=pc.getComponent(r);if(a!==0){let o=fc.getComponent(r);mc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Bu.copy(Ps).applyMatrix4(mc),a)}}return e.isVector4&&(e.w=Ps.w),e.applyMatrix4(this.bindMatrixInverse)}},ms=class extends Ke{constructor(){super(),this.isBone=!0,this.type="Bone"}},Xs=class extends gn{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Xe,h=Xe,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_c=new qt,zu=new qt,qs=class i{constructor(t=[],e=[]){this.uuid=bs(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Lt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new qt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new qt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){let o=t[r]?t[r].matrixWorld:zu;_c.multiplyMatrices(o,e[r]),_c.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Xs(e,t,t,Ln,Pn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){let r=t.bones[n],a=e[r];a===void 0&&(Lt("Skeleton: No bone found with UUID:",r),a=new ms),this.bones.push(a),this.boneInverses.push(new qt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let a=e[s];t.bones.push(a.uuid);let o=n[s];t.boneInverses.push(o.toArray())}return t}};var Gi=new bi,ku=new Kt(.5,.5),Gr=new F,Ti=class{constructor(t=new Bn,e=new Bn,n=new Bn,s=new Bn,r=new Bn,a=new Bn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],m=r[7],g=r[8],y=r[9],p=r[10],f=r[11],M=r[12],A=r[13],S=r[14],w=r[15];if(s[0].setComponents(l-a,m-h,f-g,w-M).normalize(),s[1].setComponents(l+a,m+h,f+g,w+M).normalize(),s[2].setComponents(l+o,m+d,f+y,w+A).normalize(),s[3].setComponents(l-o,m-d,f-y,w-A).normalize(),n)s[4].setComponents(c,u,p,S).normalize(),s[5].setComponents(l-c,m-u,f-p,w-S).normalize();else if(s[4].setComponents(l-c,m-u,f-p,w-S).normalize(),e===In)s[5].setComponents(l+c,m+u,f+p,w+S).normalize();else if(e===us)s[5].setComponents(c,u,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){Gi.center.set(0,0,0);let e=ku.distanceTo(t.center);return Gi.radius=.7071067811865476+e,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Gr.x=s.normal.x>0?t.max.x:t.min.x,Gr.y=s.normal.y>0?t.max.y:t.min.y,Gr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},xc=new qt,aa=class i{constructor(){this.coordinateSystem=In,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];xc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ti),n[s].setFromProjectionMatrix(xc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ti),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Ys=class extends gn{constructor(t=[],e=Wi,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},wi=class extends gn{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var di=class extends gn{constructor(t,e,n=Vn,s,r,a,o=Xe,c=Xe,l,h=ci,d=1){if(h!==ci&&h!==pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Zs=class extends di{constructor(t,e=Vn,n=Wi,s,r,a=Xe,o=Xe,c,l=ci){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Js=class extends gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},vn=class i extends _n{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(d,2));function g(y,p,f,M,A,S,w,b,_,E,P){let R=S/_,L=w/E,U=S/2,G=w/2,I=b/2,H=_+1,Y=E+1,X=0,et=0,V=new F;for(let Z=0;Z<Y;Z++){let nt=Z*L-G;for(let Tt=0;Tt<H;Tt++){let St=Tt*R-U;V[y]=St*M,V[p]=nt*A,V[f]=I,l.push(V.x,V.y,V.z),V[y]=0,V[p]=0,V[f]=b>0?1:-1,h.push(V.x,V.y,V.z),d.push(Tt/_),d.push(1-Z/E),X+=1}}for(let Z=0;Z<E;Z++)for(let nt=0;nt<_;nt++){let Tt=u+nt+H*Z,St=u+nt+H*(Z+1),K=u+(nt+1)+H*(Z+1),mt=u+(nt+1)+H*Z;c.push(Tt,St,mt),c.push(St,K,mt),et+=6}o.addGroup(m,et,P),m+=et,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},$s=class i extends _n{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=e/2,d=Math.PI/2*t,u=e,m=2*d+u,g=n*2+r,y=s+1,p=new F,f=new F;for(let M=0;M<=g;M++){let A=0,S=0,w=0,b=0;if(M<=n){let P=M/n,R=P*Math.PI/2;S=-h-t*Math.cos(R),w=t*Math.sin(R),b=-t*Math.cos(R),A=P*d}else if(M<=n+r){let P=(M-n)/r;S=-h+P*e,w=t,b=0,A=d+P*u}else{let P=(M-n-r)/n,R=P*Math.PI/2;S=h+t*Math.sin(R),w=t*Math.cos(R),b=t*Math.sin(R),A=d+u+P*d}let _=Math.max(0,Math.min(1,A/m)),E=0;M===0?E=.5/s:M===g&&(E=-.5/s);for(let P=0;P<=s;P++){let R=P/s,L=R*Math.PI*2,U=Math.sin(L),G=Math.cos(L);f.x=-w*G,f.y=S,f.z=w*U,o.push(f.x,f.y,f.z),p.set(-w*G,b,w*U),p.normalize(),c.push(p.x,p.y,p.z),l.push(R+E,_)}if(M>0){let P=(M-1)*y;for(let R=0;R<s;R++){let L=P+R,U=P+R+1,G=M*y+R,I=M*y+R+1;a.push(L,U,G),a.push(U,I,G)}}}this.setIndex(a),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},gs=class i extends _n{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new F,h=new Kt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let m=n+d/e*s;l.x=t*Math.cos(m),l.y=t*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new _e(a,3)),this.setAttribute("normal",new _e(o,3)),this.setAttribute("uv",new _e(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},_s=class i extends _n{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],m=[],g=0,y=[],p=n/2,f=0;M(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new _e(d,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(m,2));function M(){let S=new F,w=new F,b=0,_=(e-t)/n;for(let E=0;E<=r;E++){let P=[],R=E/r,L=R*(e-t)+t;for(let U=0;U<=s;U++){let G=U/s,I=G*c+o,H=Math.sin(I),Y=Math.cos(I);w.x=L*H,w.y=-R*n+p,w.z=L*Y,d.push(w.x,w.y,w.z),S.set(H,_,Y).normalize(),u.push(S.x,S.y,S.z),m.push(G,1-R),P.push(g++)}y.push(P)}for(let E=0;E<s;E++)for(let P=0;P<r;P++){let R=y[P][E],L=y[P+1][E],U=y[P+1][E+1],G=y[P][E+1];(t>0||P!==0)&&(h.push(R,L,G),b+=3),(e>0||P!==r-1)&&(h.push(L,U,G),b+=3)}l.addGroup(f,b,0),f+=b}function A(S){let w=g,b=new Kt,_=new F,E=0,P=S===!0?t:e,R=S===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,p*R,0),u.push(0,R,0),m.push(.5,.5),g++;let L=g;for(let U=0;U<=s;U++){let I=U/s*c+o,H=Math.cos(I),Y=Math.sin(I);_.x=P*Y,_.y=p*R,_.z=P*H,d.push(_.x,_.y,_.z),u.push(0,R,0),b.x=H*.5+.5,b.y=Y*.5*R+.5,m.push(b.x,b.y),g++}for(let U=0;U<s;U++){let G=w+U,I=L+U;S===!0?h.push(I,I+1,G):h.push(I+1,I,G),E+=3}l.addGroup(f,E,S===!0?1:2),f+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Hn=class i extends _n{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=t/o,u=e/c,m=[],g=[],y=[],p=[];for(let f=0;f<h;f++){let M=f*u-a;for(let A=0;A<l;A++){let S=A*d-r;g.push(S,-M,0),y.push(0,0,1),p.push(A/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<o;M++){let A=M+l*f,S=M+l*(f+1),w=M+1+l*(f+1),b=M+1+l*f;m.push(A,S,b),m.push(S,w,b)}this.setIndex(m),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(y,3)),this.setAttribute("uv",new _e(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ai=class i extends _n{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new F,u=new F,m=[],g=[],y=[],p=[];for(let f=0;f<=n;f++){let M=[],A=f/n,S=a+A*o,w=t*Math.cos(S),b=Math.sqrt(t*t-w*w),_=0;f===0&&a===0?_=.5/e:f===n&&c===Math.PI&&(_=-.5/e);for(let E=0;E<=e;E++){let P=E/e,R=s+P*r;d.x=-b*Math.cos(R),d.y=w,d.z=b*Math.sin(R),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),p.push(P+_,1-A),M.push(l++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){let A=h[f][M+1],S=h[f][M],w=h[f+1][M],b=h[f+1][M+1];(f!==0||a>0)&&m.push(A,S,b),(f!==n-1||c<Math.PI)&&m.push(S,w,b)}this.setIndex(m),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(y,3)),this.setAttribute("uv",new _e(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ks=class i extends _n{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],d=[],u=new F,m=new F,g=new F;for(let y=0;y<=n;y++){let p=a+y/n*o;for(let f=0;f<=s;f++){let M=f/s*r;m.x=(t+e*Math.cos(p))*Math.cos(M),m.y=(t+e*Math.cos(p))*Math.sin(M),m.z=e*Math.sin(p),l.push(m.x,m.y,m.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),g.subVectors(m,u).normalize(),h.push(g.x,g.y,g.z),d.push(f/s),d.push(y/n)}}for(let y=1;y<=n;y++)for(let p=1;p<=s;p++){let f=(s+1)*y+p-1,M=(s+1)*(y-1)+p-1,A=(s+1)*(y-1)+p,S=(s+1)*y+p;c.push(f,M,S),c.push(M,A,S)}this.setIndex(c),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function qi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(vc(s))s.isRenderTargetTexture?(Lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(vc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function cn(i){let t={};for(let e=0;e<i.length;e++){let n=qi(i[e]);for(let s in n)t[s]=n[s]}return t}function vc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Gu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var uh={clone:qi,merge:cn},Hu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jn=class extends Ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hu,this.fragmentShader=Vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=Gu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Vt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Kt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ge().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Bt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new qt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},oa=class extends Jn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},yn=class extends Ei{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=co,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var la=class extends Ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$c,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ca=class extends Ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function as(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Hr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ri=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ha=class extends Ri{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yo,endingEnd:Yo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Zo:r=t,o=2*e-n;break;case Jo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Zo:a=t,c=2*n-e;break;case Jo:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),y=g*g,p=y*g,f=-u*p+2*u*y-u*g,M=(1+u)*p+(-1.5-2*u)*y+(-.5+u)*g+1,A=(-1-m)*p+(1.5+m)*y+.5*g,S=m*p-m*y;for(let w=0;w!==o;++w)r[w]=f*a[h+w]+M*a[l+w]+A*a[c+w]+S*a[d+w];return r}},ua=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},da=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},fa=class extends Ri{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),y=1-g;for(let p=0;p!==o;++p)r[p]=a[l+p]*y+a[c+p]*g;return r}let u=o*2,m=t-1;for(let g=0;g!==o;++g){let y=a[l+g],p=a[c+g],f=m*u+g*2,M=d[f],A=d[f+1],S=t*u+g*2,w=h[S],b=h[S+1],_=Xu(n,e,M,w,s);r[g]=dh(_,y,A,b,p)}return r}};function dh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Wu(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Xu(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=dh(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Wu(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var wn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=as(e,this.TimeBufferType),this.values=as(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:as(t.times,Array),values:as(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Hr(t.settings)&&(n.settings={inTangents:as(t.settings.inTangents,Array),outTangents:as(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new fa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ds:e=this.InterpolantFactoryMethodDiscrete;break;case ea:e=this.InterpolantFactoryMethodLinear;break;case Xr:e=this.InterpolantFactoryMethodSmooth;break;case qo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Lt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ds;case this.InterpolantFactoryMethodLinear:return ea;case this.InterpolantFactoryMethodSmooth:return Xr;case this.InterpolantFactoryMethodBezier:return qo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Hr(this.settings)&&(yc(this.settings.inTangents,t),yc(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Hr(this.settings)&&(Mc(this.settings.inTangents,t),Mc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ot("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ot("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ot("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Ot("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&_u(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ot("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let d=o*n,u=d-n,m=d+n;for(let g=0;g!==n;++g){let y=e[d+g];if(y!==e[u+g]||y!==e[m+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let m=0;m!==n;++m)e[u+m]=e[d+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Hr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function yc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Mc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=ea;var Ci=class extends wn{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Ds;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var pa=class extends wn{constructor(t,e,n,s){super(t,e,n,s)}};pa.prototype.ValueTypeName="color";var ma=class extends wn{constructor(t,e,n,s){super(t,e,n,s)}};ma.prototype.ValueTypeName="number";var ga=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)qe.slerpFlat(r,0,a,l-o,a,l,c);return r}},Qs=class extends wn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ga(this.times,this.values,this.getValueSize(),t)}};Qs.prototype.ValueTypeName="quaternion";Qs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends wn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Ds;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends wn{constructor(t,e,n,s){super(t,e,n,s)}};_a.prototype.ValueTypeName="vector";var xa=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let m=l[d],g=l[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},fh=new xa,va=class{constructor(t){this.manager=t!==void 0?t:fh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};va.DEFAULT_MATERIAL_NAME="__DEFAULT";var js=class extends Ke{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},tr=class extends js{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Wo=new qt,Sc=new F,bc=new F,ya=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ti,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Sc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sc),bc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Wo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Wo,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===us||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Wo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Vr=new F,Wr=new qe,qn=new F,er=class extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Vr,Wr,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vr,Wr,qn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Vr,Wr,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vr,Wr,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Mi=new F,Ec=new Kt,Tc=new Kt,pn=class extends er{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=na*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Mo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return na*2*Math.atan(Math.tan(Mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z)}getViewSize(t,e){return this.getViewBounds(t,Ec,Tc),e.subVectors(Tc,Ec)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Mo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var nr=class extends er{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},$o=class extends ya{constructor(){super(new nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ir=class extends js{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new $o}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var os=-90,ls=1,xs=class extends Ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pn(os,ls,t,e);s.layers=this.layers,this.add(s);let r=new pn(os,ls,t,e);r.layers=this.layers,this.add(r);let a=new pn(os,ls,t,e);a.layers=this.layers,this.add(a);let o=new pn(os,ls,t,e);o.layers=this.layers,this.add(o);let c=new pn(os,ls,t,e);c.layers=this.layers,this.add(c);let l=new pn(os,ls,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.mipmapsAutoUpdate=y,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ma=class extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Al="\\[\\]\\.:\\/",qu=new RegExp("["+Al+"]","g"),Rl="[^"+Al+"]",Yu="[^"+Al.replace("\\.","")+"]",Zu=/((?:WC+[\/:])*)/.source.replace("WC",Rl),Ju=/(WCOD+)?/.source.replace("WCOD",Yu),$u=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rl),Ku=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rl),Qu=new RegExp("^"+Zu+Ju+$u+Ku+"$"),ju=["material","materials","bones","map"],Ko=class{constructor(t,e,n){let s=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(qu,"")}static parseTrackName(t){let e=Qu.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ju.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Lt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Ot("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=Ko;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var f0=new Float32Array(1);var Qo=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Cl(i,t,e,n){let s=td(n);switch(e){case _l:return i*t;case vl:return i*t/s.components*s.byteLength;case Ca:return i*t/s.components*s.byteLength;case Li:return i*t*2/s.components*s.byteLength;case Ia:return i*t*2/s.components*s.byteLength;case xl:return i*t*3/s.components*s.byteLength;case Ln:return i*t*4/s.components*s.byteLength;case Pa:return i*t*4/s.components*s.byteLength;case or:case lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case cr:case hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Da:case Ua:return Math.max(i,16)*Math.max(t,8)/4;case La:case Na:return Math.max(i,8)*Math.max(t,8)/2;case Fa:case Oa:case za:case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ba:case ur:case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case to:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case eo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case no:case io:case so:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ro:case ao:return Math.ceil(i/4)*Math.ceil(t/4)*8;case dr:case oo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function td(i){switch(i){case Sn:case fl:return{byteLength:1,components:1};case Ss:case pl:case Wn:return{byteLength:2,components:1};case Aa:case Ra:return{byteLength:2,components:4};case Vn:case wa:case Pn:return{byteLength:4,components:1};case ml:case gl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Uh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function cd(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<d.length;m++){let g=d[u],y=d[m];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let m=0,g=d.length;m<g;m++){let y=d[m];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ud=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,vd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Md=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ed=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Id=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ld=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Dd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Nd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ud=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Od=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zd="gl_FragColor = linearToOutputTexel( gl_FragColor );",kd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Hd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Vd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$d=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ef=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,nf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,af=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,of=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,df=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ff=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_f=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ef=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Af=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,If=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Df=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Nf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ff=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Of=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,kf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Yf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Jf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$f=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ep=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ip=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,up=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fp=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_p=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ep=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ap=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Np=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Up=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Op=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:hd,alphahash_pars_fragment:ud,alphamap_fragment:dd,alphamap_pars_fragment:fd,alphatest_fragment:pd,alphatest_pars_fragment:md,aomap_fragment:gd,aomap_pars_fragment:_d,batching_pars_vertex:xd,batching_vertex:vd,begin_vertex:yd,beginnormal_vertex:Md,bsdfs:Sd,iridescence_fragment:bd,bumpmap_pars_fragment:Ed,clipping_planes_fragment:Td,clipping_planes_pars_fragment:wd,clipping_planes_pars_vertex:Ad,clipping_planes_vertex:Rd,color_fragment:Cd,color_pars_fragment:Id,color_pars_vertex:Pd,color_vertex:Ld,common:Dd,defaultnormal_vertex:Nd,displacementmap_pars_vertex:Ud,displacementmap_vertex:Fd,emissivemap_fragment:Od,emissivemap_pars_fragment:Bd,colorspace_fragment:zd,colorspace_pars_fragment:kd,envmap_fragment:Gd,envmap_common_pars_fragment:Hd,envmap_pars_fragment:Vd,envmap_pars_vertex:Wd,envmap_physical_pars_fragment:ef,envmap_vertex:Xd,fog_vertex:qd,fog_pars_vertex:Yd,fog_fragment:Zd,fog_pars_fragment:Jd,gradientmap_pars_fragment:$d,lightmap_pars_fragment:Kd,lights_lambert_fragment:Qd,lights_lambert_pars_fragment:jd,lights_pars_begin:tf,lights_toon_fragment:nf,lights_toon_pars_fragment:sf,lights_phong_fragment:rf,lights_phong_pars_fragment:af,lights_physical_fragment:of,lights_physical_pars_fragment:lf,lights_fragment_begin:cf,lights_fragment_maps:hf,lights_fragment_end:uf,lightprobes_pars_fragment:df,logdepthbuf_fragment:ff,logdepthbuf_pars_fragment:pf,logdepthbuf_pars_vertex:mf,logdepthbuf_vertex:gf,map_fragment:_f,map_pars_fragment:xf,map_particle_fragment:vf,map_particle_pars_fragment:yf,metalnessmap_fragment:Mf,metalnessmap_pars_fragment:Sf,morphinstance_vertex:bf,morphcolor_vertex:Ef,morphnormal_vertex:Tf,morphtarget_pars_vertex:wf,morphtarget_vertex:Af,normal_fragment_begin:Rf,normal_fragment_maps:Cf,normal_pars_fragment:If,normal_pars_vertex:Pf,normal_vertex:Lf,normalmap_pars_fragment:Df,clearcoat_normal_fragment_begin:Nf,clearcoat_normal_fragment_maps:Uf,clearcoat_pars_fragment:Ff,iridescence_pars_fragment:Of,opaque_fragment:Bf,packing:zf,premultiplied_alpha_fragment:kf,project_vertex:Gf,dithering_fragment:Hf,dithering_pars_fragment:Vf,roughnessmap_fragment:Wf,roughnessmap_pars_fragment:Xf,shadowmap_pars_fragment:qf,shadowmap_pars_vertex:Yf,shadowmap_vertex:Zf,shadowmask_pars_fragment:Jf,skinbase_vertex:$f,skinning_pars_vertex:Kf,skinning_vertex:Qf,skinnormal_vertex:jf,specularmap_fragment:tp,specularmap_pars_fragment:ep,tonemapping_fragment:np,tonemapping_pars_fragment:ip,transmission_fragment:sp,transmission_pars_fragment:rp,uv_pars_fragment:ap,uv_pars_vertex:op,uv_vertex:lp,worldpos_vertex:cp,background_vert:hp,background_frag:up,backgroundCube_vert:dp,backgroundCube_frag:fp,cube_vert:pp,cube_frag:mp,depth_vert:gp,depth_frag:_p,distance_vert:xp,distance_frag:vp,equirect_vert:yp,equirect_frag:Mp,linedashed_vert:Sp,linedashed_frag:bp,meshbasic_vert:Ep,meshbasic_frag:Tp,meshlambert_vert:wp,meshlambert_frag:Ap,meshmatcap_vert:Rp,meshmatcap_frag:Cp,meshnormal_vert:Ip,meshnormal_frag:Pp,meshphong_vert:Lp,meshphong_frag:Dp,meshphysical_vert:Np,meshphysical_frag:Up,meshtoon_vert:Fp,meshtoon_frag:Op,points_vert:Bp,points_frag:zp,shadow_vert:kp,shadow_frag:Gp,sprite_vert:Hp,sprite_frag:Vp},_t={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Qn={basic:{uniforms:cn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:cn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Vt(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:cn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:cn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:cn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:cn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:cn([_t.points,_t.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:cn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:cn([_t.common,_t.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:cn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:cn([_t.sprite,_t.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:cn([_t.common,_t.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:cn([_t.lights,_t.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Qn.physical={uniforms:cn([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Bt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var ho={r:0,b:0,g:0},Wp=new qt,Fh=new Bt;Fh.set(-1,0,0,0,1,0,0,0,1);function Xp(i,t,e,n,s,r){let a=new Vt(0),o=s===!0?0:1,c,l,h=null,d=0,u=null;function m(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let S=M.backgroundBlurriness>0;A=t.get(A,S)}return A}function g(M){let A=!1,S=m(M);S===null?p(a,o):S&&S.isColor&&(p(S,1),A=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,A){let S=m(A);S&&S.isCubeTexture?(l===void 0&&(l=new xe(new vn(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:qi(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,b,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Wp.makeRotationFromEuler(A.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Fh),l.material.toneMapped=te.getTransfer(S.colorSpace)!==pe,(h!==S||d!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new xe(new Hn(2,2),new Jn({name:"BackgroundMaterial",uniforms:qi(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=te.getTransfer(S.colorSpace)!==pe,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,A){M.getRGB(ho,wl(i)),e.buffers.color.setClear(ho.r,ho.g,ho.b,A,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:g,addToRenderList:y,dispose:f}}function qp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(L,U,G,I,H){let Y=!1,X=d(L,I,G,U);r!==X&&(r=X,l(r.object)),Y=m(L,I,G,H),Y&&g(L,I,G,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,S(L,U,G,I),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function d(L,U,G,I){let H=I.wireframe===!0,Y=n[U.id];Y===void 0&&(Y={},n[U.id]=Y);let X=L.isInstancedMesh===!0?L.id:0,et=Y[X];et===void 0&&(et={},Y[X]=et);let V=et[G.id];V===void 0&&(V={},et[G.id]=V);let Z=V[H];return Z===void 0&&(Z=u(c()),V[H]=Z),Z}function u(L){let U=[],G=[],I=[];for(let H=0;H<e;H++)U[H]=0,G[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:I,object:L,attributes:{},index:null}}function m(L,U,G,I){let H=r.attributes,Y=U.attributes,X=0,et=G.getAttributes();for(let V in et)if(et[V].location>=0){let nt=H[V],Tt=Y[V];if(Tt===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(Tt=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(Tt=L.instanceColor)),nt===void 0||nt.attribute!==Tt||Tt&&nt.data!==Tt.data)return!0;X++}return r.attributesNum!==X||r.index!==I}function g(L,U,G,I){let H={},Y=U.attributes,X=0,et=G.getAttributes();for(let V in et)if(et[V].location>=0){let nt=Y[V];nt===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(nt=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(nt=L.instanceColor));let Tt={};Tt.attribute=nt,nt&&nt.data&&(Tt.data=nt.data),H[V]=Tt,X++}r.attributes=H,r.attributesNum=X,r.index=I}function y(){let L=r.newAttributes;for(let U=0,G=L.length;U<G;U++)L[U]=0}function p(L){f(L,0)}function f(L,U){let G=r.newAttributes,I=r.enabledAttributes,H=r.attributeDivisors;G[L]=1,I[L]===0&&(i.enableVertexAttribArray(L),I[L]=1),H[L]!==U&&(i.vertexAttribDivisor(L,U),H[L]=U)}function M(){let L=r.newAttributes,U=r.enabledAttributes;for(let G=0,I=U.length;G<I;G++)U[G]!==L[G]&&(i.disableVertexAttribArray(G),U[G]=0)}function A(L,U,G,I,H,Y,X){X===!0?i.vertexAttribIPointer(L,U,G,H,Y):i.vertexAttribPointer(L,U,G,I,H,Y)}function S(L,U,G,I){y();let H=I.attributes,Y=G.getAttributes(),X=U.defaultAttributeValues;for(let et in Y){let V=Y[et];if(V.location>=0){let Z=H[et];if(Z===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor)),Z!==void 0){let nt=Z.normalized,Tt=Z.itemSize,St=t.get(Z);if(St===void 0)continue;let K=St.buffer,mt=St.type,yt=St.bytesPerElement,Pt=mt===i.INT||mt===i.UNSIGNED_INT||Z.gpuType===wa;if(Z.isInterleavedBufferAttribute){let gt=Z.data,Ut=gt.isInterleavedBuffer===!0?gt.stride:gt.itemSize,Te=Z.offset;if(gt.isInstancedInterleavedBuffer||gt.isInstancedBufferAttribute){for(let Dt=0;Dt<V.locationSize;Dt++)f(V.location+Dt,gt.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Dt=0;Dt<V.locationSize;Dt++)p(V.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,K);for(let Dt=0;Dt<V.locationSize;Dt++)A(V.location+Dt,Tt/V.locationSize,mt,nt,Ut*yt,(Te+Tt/V.locationSize*Dt)*yt,Pt)}else{if(Z.isInstancedBufferAttribute){for(let gt=0;gt<V.locationSize;gt++)f(V.location+gt,Z.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let gt=0;gt<V.locationSize;gt++)p(V.location+gt);i.bindBuffer(i.ARRAY_BUFFER,K);for(let gt=0;gt<V.locationSize;gt++)A(V.location+gt,Tt/V.locationSize,mt,nt,Tt*yt,Tt/V.locationSize*gt*yt,Pt)}}else if(X!==void 0){let nt=X[et];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(V.location,nt);break;case 3:i.vertexAttrib3fv(V.location,nt);break;case 4:i.vertexAttrib4fv(V.location,nt);break;default:i.vertexAttrib1fv(V.location,nt)}}}}M()}function w(){P();for(let L in n){let U=n[L];for(let G in U){let I=U[G];for(let H in I){let Y=I[H];for(let X in Y)h(Y[X].object),delete Y[X];delete I[H]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;let U=n[L.id];for(let G in U){let I=U[G];for(let H in I){let Y=I[H];for(let X in Y)h(Y[X].object),delete Y[X];delete I[H]}}delete n[L.id]}function _(L){for(let U in n){let G=n[U];for(let I in G){let H=G[I];if(H[L.id]===void 0)continue;let Y=H[L.id];for(let X in Y)h(Y[X].object),delete Y[X];delete H[L.id]}}}function E(L){for(let U in n){let G=n[U],I=L.isInstancedMesh===!0?L.id:0,H=G[I];if(H!==void 0){for(let Y in H){let X=H[Y];for(let et in X)h(X[et].object),delete X[et];delete H[Y]}delete G[I],Object.keys(G).length===0&&delete n[U]}}}function P(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:E,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:p,disableUnusedAttributes:M}}function Yp(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let m=0;m<h;m++)u+=l[m];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Zp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Ln&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let E=_===Wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Sn&&_!==Pn&&!E&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Lt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Lt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:S,maxSamples:w,samples:b}}function Jp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Bn,o=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let m=d.length!==0||u||n!==0||s;return s=u,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,m){let g=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let M=r?0:n,A=M*4,S=f.clippingState||null;c.value=S,S=h(g,u,A,m);for(let w=0;w!==A;++w)S[w]=e[w];f.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,m,g){let y=d!==null?d.length:0,p=null;if(y!==0){if(p=c.value,g!==!0||p===null){let f=m+y*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<f)&&(p=new Float32Array(f));for(let A=0,S=m;A!==y;++A,S+=4)a.copy(d[A]).applyMatrix4(M,o),a.normal.toArray(p,S),p[S+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var mr=class extends Tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ys(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new vn(5,5,5),r=new Jn({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:Hi});r.uniforms.tEquirect.value=e;let a=new xe(s,r),o=e.minFilter;return e.minFilter===fi&&(e.minFilter=mn),new xs(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},ph=256,$p=3,Kp=20,Oh=256,Bh=16,Qp=3,jp=new F,tm=new Vt,fo=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new xs(1,10,null),this._boxMesh=new xe(new vn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=jp}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,u=c.autoClearColor,m=c.autoClearDepth,g=c.autoClearStencil,y=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(t.background=c.getClearColor(tm));let p=new xs(n,s,h);return p.position.copy(o),p.update(c,t),c.autoClear=d,c.autoClearColor=u,c.autoClearDepth=m,c.autoClearStencil=g,t.background=y,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(ph,ch(t))}_fromTexture(t,e){t.mapping===Wi||t.mapping===Ms?this._setSize(t.image.length===0?ph:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=mh(t,!1,!1),n=Math.log2(t)-$p;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=mh(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Wi||t.mapping===Ms?(this._cubemapMaterial===null&&(this._cubemapMaterial=_h()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=gh()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=em(),this._integrationMaterial=nm());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Bh);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Qp)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(Oh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=im());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function mh(i,t,e){return new mr(i,{minFilter:fi,generateMipmaps:t,type:Wn,colorSpace:Ns,depthBuffer:e})}function gr(i,t,e){return new Jn({name:i,uniforms:t,vertexShader:Xt.cube_vert,fragmentShader:e,side:Qe,blending:Hi,depthTest:!1,depthWrite:!1})}function em(){return gr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Oh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function nm(){return gr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Bh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function im(){return gr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Kp}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function gh(){return gr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function _h(){return gr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function sm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===ba||m===Ea)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new mr(g.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",l),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let m=u.mapping,g=m===ba||m===Ea,y=m===Wi||m===Ms;if(g||y){let p=e.get(u),f=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new fo(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let M=u.image;return g&&M&&M.height>0||y&&M&&c(M)?(n===null&&(n=new fo(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,m){return m===ba?u.mapping=Wi:m===Ea&&(u.mapping=Ms),u}function c(u){let m=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&m++;return m===g}function l(u){let m=u.target;m.removeEventListener("dispose",l);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function rm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ls("WebGLRenderer: "+n+" extension not supported."),s}}}function am(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){c(g.target)}function c(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let y=r.get(g);y&&(t.remove(y),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function l(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),e.memory.geometries++),y}function h(g){let y=g.attributes;for(let p in y)t.update(y[p],i.ARRAY_BUFFER)}function d(g){let y=g.index,p=g.attributes.position,f=0;if(p===void 0)return;let M=y!==null?y.array.length:p.array.length/3-1,A=p.count>=65535?Hs:Gs,S=new A(Math.ceil(M/3)*6,1),w=S.array;if(y!==null){let _=y.array;f=y.version;for(let E=0,P=0;E<M;E+=3){let R=_[E+0],L=_[E+1],U=_[E+2];w[P++]=R,w[P++]=L,w[P++]=L,w[P++]=U,w[P++]=U,w[P++]=R}}else{f=p.version;for(let _=0,E=0;_<M;_+=3){let P=_+0,R=_+1,L=_+2;w[E++]=P,w[E++]=R,w[E++]=R,w[E++]=L,w[E++]=L,w[E++]=P}}S.version=f;let b=r.get(g);b&&t.remove(b),r.set(g,S)}function u(g){let y=r.get(g);if(y){let p=g.index;p!==null&&y.version<p.version&&d(g)}else d(g);return r.get(g)}function m(){for(let g in s){let y=s[g].deref();y!==void 0&&c(y)}}return{get:l,update:h,getWireframeAttribute:u,dispose:m}}function om(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function l(d,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,d*a,m),e.update(u,n,m))}function h(d,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,m);let y=0;for(let p=0;p<m;p++)y+=u[p];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function lm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Ot("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function cm(i,t,e){let n=new WeakMap,s=new ge;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let P=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],A=0;m===!0&&(A=1),g===!0&&(A=2),y===!0&&(A=3);let S=o.attributes.position.count*A,w=1;S>t.maxTextureSize&&(w=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let b=new Float32Array(S*w*4*d),_=new Os(b,S,w,d);_.type=Pn,_.needsUpdate=!0;let E=A*4;for(let R=0;R<d;R++){let L=p[R],U=f[R],G=M[R],I=S*w*4*R;for(let H=0;H<L.count;H++){let Y=H*E;m===!0&&(s.fromBufferAttribute(L,H),b[I+Y+0]=s.x,b[I+Y+1]=s.y,b[I+Y+2]=s.z,b[I+Y+3]=0),g===!0&&(s.fromBufferAttribute(U,H),b[I+Y+4]=s.x,b[I+Y+5]=s.y,b[I+Y+6]=s.z,b[I+Y+7]=0),y===!0&&(s.fromBufferAttribute(G,H),b[I+Y+8]=s.x,b[I+Y+9]=s.y,b[I+Y+10]=s.z,b[I+Y+11]=G.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new Kt(S,w)},n.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let y=0;y<l.length;y++)m+=l[y];let g=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function hm(i,t,e,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let m=l.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var um={[al]:"LINEAR_TONE_MAPPING",[ol]:"REINHARD_TONE_MAPPING",[ll]:"CINEON_TONE_MAPPING",[rr]:"ACES_FILMIC_TONE_MAPPING",[hl]:"AGX_TONE_MAPPING",[ul]:"NEUTRAL_TONE_MAPPING",[cl]:"CUSTOM_TONE_MAPPING"};function dm(i,t,e,n,s,r){let a=new Tn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new _n;h.setAttribute("position",new _e([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new _e([0,2,0,0,2,0],2));let d=new oa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new xe(h,d),m=new nr(-1,1,1,-1,0,1),g=null,y=null,p=!1,f,M=null,A=[],S=!1;this.setSize=function(w,b){a.setSize(w,b),o!==null&&o.setSize(w,b),c!==null&&c.setSize(w,b);for(let _=0;_<A.length;_++){let E=A[_];E.setSize&&E.setSize(w,b)}},this.setEffects=function(w){A=w,S=A.length>0&&A[0].isRenderPass===!0;let b=a.width,_=a.height;A.length>0&&o===null&&(o=new Tn(b,_,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),c=new Tn(b,_,{type:Wn,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&A.some(P=>P.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&l===null&&(l=new di(b,_),r===!0&&(l.format=pi,l.type=Xi)),a.dispose(),a.depthTexture=E?l:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let P=0;P<A.length;P++){let R=A[P];R.setSize&&R.setSize(b,_),E&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(w,b){if(p||w.toneMapping===$n&&A.length===0)return!1;if(M=b,b!==null){let _=b.width,E=b.height;(a.width!==_||a.height!==E)&&this.setSize(_,E)}return S===!1&&w.setRenderTarget(a),f=w.toneMapping,w.toneMapping=$n,!0},this.hasRenderPass=function(){return S},this.end=function(w,b){w.toneMapping=f,p=!0;let _=a,E=o;for(let P=0;P<A.length;P++){let R=A[P];R.enabled!==!1&&(R.render(w,E,_,b),R.needsSwap!==!1&&(_=E,E=E===o?c:o))}if(g!==w.outputColorSpace||y!==w.toneMapping){g=w.outputColorSpace,y=w.toneMapping,d.defines={},te.getTransfer(g)===pe&&(d.defines.SRGB_TRANSFER="");let P=um[y];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(M),w.render(u,m),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}var zh=new gn,kh=new di(1,1),Gh=new Zs(1),Hh=new Os,Vh=new ra,Wh=new Ys,xh=[],vh=[],yh=new Float32Array(16),Mh=new Float32Array(9),Sh=new Float32Array(4);function Ts(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=xh[s];if(r===void 0&&(r=new Float32Array(s),xh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function mo(i,t){let e=vh[t];e===void 0&&(e=new Int32Array(t),vh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function fm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function mm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function _m(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Sh.set(n),i.uniformMatrix2fv(this.addr,!1,Sh),Be(e,n)}}function xm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Mh.set(n),i.uniformMatrix3fv(this.addr,!1,Mh),Be(e,n)}}function vm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;yh.set(n),i.uniformMatrix4fv(this.addr,!1,yh),Be(e,n)}}function ym(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Mm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function Sm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function Em(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Tm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function Am(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function go(i){return i.version===0&&(i.compareFunction=Sl,i.needsUpdate=!0),i}function Rm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=go(kh):r=zh,e.setTexture2D(t||r,s)}function Cm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vh,s)}function Im(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=go(Gh):r=Wh,e.setTextureCube(t||r,s)}function Pm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hh,s)}function Lm(i){switch(i){case 5126:return fm;case 35664:return pm;case 35665:return mm;case 35666:return gm;case 35674:return _m;case 35675:return xm;case 35676:return vm;case 5124:case 35670:return ym;case 35667:case 35671:return Mm;case 35668:case 35672:return Sm;case 35669:case 35673:return bm;case 5125:return Em;case 36294:return Tm;case 36295:return wm;case 36296:return Am;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return Cm;case 35680:case 36300:case 36308:case 36293:return Im;case 36289:case 36303:case 36311:case 36292:return Pm}}function Dm(i,t){i.uniform1fv(this.addr,t)}function Nm(i,t){let e=Ts(t,this.size,2);i.uniform2fv(this.addr,e)}function Um(i,t){let e=Ts(t,this.size,3);i.uniform3fv(this.addr,e)}function Fm(i,t){let e=Ts(t,this.size,4);i.uniform4fv(this.addr,e)}function Om(i,t){let e=Ts(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Bm(i,t){let e=Ts(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function zm(i,t){let e=Ts(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function km(i,t){i.uniform1iv(this.addr,t)}function Gm(i,t){i.uniform2iv(this.addr,t)}function Hm(i,t){i.uniform3iv(this.addr,t)}function Vm(i,t){i.uniform4iv(this.addr,t)}function Wm(i,t){i.uniform1uiv(this.addr,t)}function Xm(i,t){i.uniform2uiv(this.addr,t)}function qm(i,t){i.uniform3uiv(this.addr,t)}function Ym(i,t){i.uniform4uiv(this.addr,t)}function Zm(i,t,e){let n=this.cache,s=t.length,r=mo(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=go(kh):a=zh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Jm(i,t,e){let n=this.cache,s=t.length,r=mo(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Vh,r[a])}function $m(i,t,e){let n=this.cache,s=t.length,r=mo(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=go(Gh):a=Wh;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Km(i,t,e){let n=this.cache,s=t.length,r=mo(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Hh,r[a])}function Qm(i){switch(i){case 5126:return Dm;case 35664:return Nm;case 35665:return Um;case 35666:return Fm;case 35674:return Om;case 35675:return Bm;case 35676:return zm;case 5124:case 35670:return km;case 35667:case 35671:return Gm;case 35668:case 35672:return Hm;case 35669:case 35673:return Vm;case 5125:return Wm;case 36294:return Xm;case 36295:return qm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Zm;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Km}}var Ll=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Lm(e.type)}},Dl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qm(e.type)}},Nl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Il=/(\w+)(\])?(\[|\.)?/g;function bh(i,t){i.seq.push(t),i.map[t.id]=t}function jm(i,t,e){let n=i.name,s=n.length;for(Il.lastIndex=0;;){let r=Il.exec(n),a=Il.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){bh(e,l===void 0?new Ll(o,i,t):new Dl(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Nl(o),bh(e,d)),e=d}}}var Es=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);jm(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Eh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var tg=37297,eg=0;function ng(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Th=new Bt;function ig(i){te._getMatrix(Th,te.workingColorSpace,i);let t=`mat3( ${Th.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case Us:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return Lt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function wh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+ng(i.getShaderSource(t),o)}else return r}function sg(i,t){let e=ig(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var rg={[al]:"Linear",[ol]:"Reinhard",[ll]:"Cineon",[rr]:"ACESFilmic",[hl]:"AgX",[ul]:"Neutral",[cl]:"Custom"};function ag(i,t){let e=rg[t];return e===void 0?(Lt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var uo=new F;function og(){te.getLuminanceCoefficients(uo);let i=uo.x.toFixed(4),t=uo.y.toFixed(4),e=uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function cg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function pr(i){return i!==""}function Ah(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Rh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ug=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ul(i){return i.replace(ug,dg)}function dg(i,t){let e=Xt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ul(e)}var fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(i){return i.replace(fg,pg)}function pg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ih(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var mg={[sr]:"SHADOWMAP_TYPE_PCF",[vs]:"SHADOWMAP_TYPE_VSM"};function gg(i){return mg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var _g={[Ms]:"ENVMAP_MODE_REFRACTION"};function xg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":_g[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var vg={[rl]:"ENVMAP_BLENDING_MULTIPLY",[qc]:"ENVMAP_BLENDING_MIX",[Yc]:"ENVMAP_BLENDING_ADD"};function yg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":vg[i.combine]||"ENVMAP_BLENDING_NONE"}function Mg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=gg(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=xg(e),d=yg(e),u=lg(e),m=cg(r),g=s.createProgram(),y,p,f=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(pr).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(pr).join(`
`),p.length>0&&(p+=`
`)):(y=[Ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),p=[Ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?Xt.tonemapping_pars_fragment:"",e.toneMapping!==$n?ag("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,sg("linearToOutputTexel",e.outputColorSpace),og(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),a=Ul(a),a=Ah(a,e),a=Rh(a,e),o=Ul(o),o=Ah(o,e),o=Rh(o,e),a=Ch(a),o=Ch(o),e.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",e.glslVersion===bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=f+y+a,A=f+p+o,S=Eh(s,s.VERTEX_SHADER,M),w=Eh(s,s.FRAGMENT_SHADER,A);s.attachShader(g,S),s.attachShader(g,w),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function b(R){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(g)||"",U=s.getShaderInfoLog(S)||"",G=s.getShaderInfoLog(w)||"",I=L.trim(),H=U.trim(),Y=G.trim(),X=!0,et=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,S,w);else{let V=wh(s,S,"vertex"),Z=wh(s,w,"fragment");Ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+V+`
`+Z)}else I!==""?Lt("WebGLProgram: Program Info Log:",I):(H===""||Y==="")&&(et=!1);et&&(R.diagnostics={runnable:X,programLog:I,vertexShader:{log:H,prefix:y},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(S),s.deleteShader(w),_=new Es(s,g),E=hg(s,g)}let _;this.getUniforms=function(){return _===void 0&&b(this),_};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(g,tg)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=eg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=w,this}var Sg=0,Fl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ol(t),e.set(t,n)),n}},Ol=class{constructor(t){this.id=Sg++,this.code=t,this.usedTimes=0}};function bg(i){return i===Li||i===ur||i===dr}function Eg(i,t,e,n,s,r){let a=new Bs,o=new Fl,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,E,P,R,L,U){let G=R.fog,I=L.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,X=t.get(_.envMap||H,Y),et=u[_.type],V=n.precision;_.precision!==null&&(V=n.getMaxPrecision(_.precision),V!==_.precision&&Lt("WebGLProgram.getParameters:",_.precision,"not supported, using",V,"instead."));let Z=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,nt=Z!==void 0?Z.length:0,Tt=0;I.morphAttributes.position!==void 0&&(Tt=1),I.morphAttributes.normal!==void 0&&(Tt=2),I.morphAttributes.color!==void 0&&(Tt=3);let St,K,mt,yt;if(et){let pt=Qn[et];St=pt.vertexShader,K=pt.fragmentShader}else{St=_.vertexShader,K=_.fragmentShader;let pt=o.getVertexShaderStage(_),ce=o.getFragmentShaderStage(_);o.update(_,pt,ce),mt=pt.id,yt=ce.id}let Pt=i.getRenderTarget(),gt=i.state.buffers.depth.getReversed(),Ut=L.isInstancedMesh===!0,Te=L.isBatchedMesh===!0,Dt=!!_.map,ae=!!_.matcap,he=!!X,Yt=he&&X.isPMREMTexture===!0,Ue=!!_.aoMap,we=!!_.lightMap,nn=!!_.bumpMap&&_.wireframe===!1,$t=!!_.normalMap,Je=!!_.displacementMap,Pe=!!_.emissiveMap,Fe=!!_.metalnessMap,un=!!_.roughnessMap,ke=_.anisotropy>0,N=_.clearcoat>0,dn=_.diffuseRoughness>0,Ft=_.dispersion>0,ue=_.retroreflectivity>0,ut=_.iridescence>0,Ce=_.sheen>0,It=_.transmission>0,xt=ke&&!!_.anisotropyMap,T=N&&!!_.clearcoatMap,x=N&&!!_.clearcoatNormalMap,O=N&&!!_.clearcoatRoughnessMap,st=dn&&!!_.diffuseRoughnessMap,Q=ut&&!!_.iridescenceMap,at=ut&&!!_.iridescenceThicknessMap,ht=Ce&&!!_.sheenColorMap,J=Ce&&!!_.sheenRoughnessMap,$=!!_.specularMap,ct=!!_.specularColorMap,C=!!_.specularIntensityMap,j=It&&!!_.transmissionMap,q=It&&!!_.thicknessMap,tt=!!_.gradientMap,ot=!!_.alphaMap,rt=_.alphaTest>0,Rt=!!_.alphaHash,zt=!!_.extensions,it=$n;_.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(it=i.toneMapping);let Ct=Yt?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,kt={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:St,fragmentShader:K,defines:_.defines,customVertexShaderID:mt,customFragmentShaderID:yt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:V,batching:Te,batchingColor:Te&&L._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&L.instanceColor!==null,instancingMorph:Ut&&L.morphTexture!==null,outputColorSpace:Pt===null?i.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Dt,matcap:ae,envMap:he,envMapMode:he&&X.mapping,envMapPMREM:Yt,envMapMaxLod:Yt?Ct.length-1:null,envMapSize:Yt?Ct[0].width:null,aoMap:Ue,lightMap:we,bumpMap:nn,normalMap:$t,displacementMap:Je,emissiveMap:Pe,normalMapObjectSpace:$t&&_.normalMapType===Kc,normalMapTangentSpace:$t&&_.normalMapType===co,packedNormalMap:$t&&_.normalMapType===co&&bg(_.normalMap.format),metalnessMap:Fe,roughnessMap:un,anisotropy:ke,anisotropyMap:xt,clearcoat:N,clearcoatMap:T,clearcoatNormalMap:x,clearcoatRoughnessMap:O,diffuseRoughness:dn,diffuseRoughnessMap:st,dispersion:Ft,retroreflection:ue,iridescence:ut,iridescenceMap:Q,iridescenceThicknessMap:at,sheen:Ce,sheenColorMap:ht,sheenRoughnessMap:J,specularMap:$,specularColorMap:ct,specularIntensityMap:C,transmission:It,transmissionMap:j,thicknessMap:q,gradientMap:tt,opaque:_.transparent===!1&&_.blending===ys&&_.alphaToCoverage===!1,alphaMap:ot,alphaTest:rt,alphaHash:Rt,combine:_.combine,mapUv:Dt&&m(_.map.channel),aoMapUv:Ue&&m(_.aoMap.channel),lightMapUv:we&&m(_.lightMap.channel),bumpMapUv:nn&&m(_.bumpMap.channel),normalMapUv:$t&&m(_.normalMap.channel),displacementMapUv:Je&&m(_.displacementMap.channel),emissiveMapUv:Pe&&m(_.emissiveMap.channel),metalnessMapUv:Fe&&m(_.metalnessMap.channel),roughnessMapUv:un&&m(_.roughnessMap.channel),anisotropyMapUv:xt&&m(_.anisotropyMap.channel),clearcoatMapUv:T&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:x&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&m(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&m(_.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:at&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:J&&m(_.sheenRoughnessMap.channel),specularMapUv:$&&m(_.specularMap.channel),specularColorMapUv:ct&&m(_.specularColorMap.channel),specularIntensityMapUv:C&&m(_.specularIntensityMap.channel),transmissionMapUv:j&&m(_.transmissionMap.channel),thicknessMapUv:q&&m(_.thicknessMap.channel),alphaMapUv:ot&&m(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&($t||ke),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(Dt||ot),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&$t===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:gt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:Tt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:U.filter(pt=>pt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:Dt&&_.map.isVideoTexture===!0&&te.getTransfer(_.map.colorSpace)===pe,decodeVideoTextureEmissive:Pe&&_.emissiveMap.isVideoTexture===!0&&te.getTransfer(_.emissiveMap.colorSpace)===pe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Mn,flipSided:_.side===Qe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:zt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&_.extensions.multiDraw===!0||Te)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return kt.vertexUv1s=c.has(1),kt.vertexUv2s=c.has(2),kt.vertexUv3s=c.has(3),c.clear(),kt}function y(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)E.push(P),E.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(E,_),f(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function p(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapPMREM),_.push(E.envMapMaxLod),_.push(E.envMapSize),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.diffuseRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.numLightProbeGrids),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function f(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let E=u[_.type],P;if(E){let R=Qn[E];P=uh.clone(R.uniforms)}else P=_.uniforms;return P}function A(_,E){let P=h.get(E);return P!==void 0?++P.usedTimes:(P=new Mg(i,E,_,s),l.push(P),h.set(E,P)),P}function S(_){if(--_.usedTimes===0){let E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function b(){o.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:M,acquireProgram:A,releaseProgram:S,releaseShaderCache:w,programs:l,dispose:b}}function Tg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function wg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ph(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Lh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,g,y,p,f){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:m,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:p,group:f},i[t]=M):(M.id=u.id,M.object=u,M.geometry=m,M.material=g,M.materialVariant=a(u),M.groupOrder=y,M.renderOrder=u.renderOrder,M.z=p,M.group=f),t++,M}function c(u,m,g,y,p,f,M){M.reversedDepth===!0&&(p=-p);let A=o(u,m,g,y,p,f);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):e.push(A)}function l(u,m,g,y,p,f){let M=o(u,m,g,y,p,f);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,m){e.length>1&&e.sort(u||wg),n.length>1&&n.sort(m||Ph),s.length>1&&s.sort(m||Ph)}function d(){for(let u=t,m=i.length;u<m;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function Ag(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Lh,i.set(n,[a])):s>=r.length?(a=new Lh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Rg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new Vt};break;case"SpotLight":e={position:new F,direction:new F,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function Cg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Ig=0;function Pg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Lg(i){let t=new Rg,e=Cg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);let s=new F,r=new qt,a=new qt;function o(l){let h=0,d=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let m=0,g=0,y=0,p=0,f=0,M=0,A=0,S=0,w=0,b=0,_=0,E=0,P=0,R=0;l.sort(Pg);for(let U=0,G=l.length;U<G;U++){let I=l[U],H=I.color,Y=I.intensity,X=I.distance,et=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Li?et=I.shadow.map.texture:et=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=H.r*Y,d+=H.g*Y,u+=H.b*Y;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],Y);R++}else if(I.isSunLight){let V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Z=I.shadow,nt=e.get(I);nt.shadowIntensity=Z.intensity,nt.shadowBias=Z.bias,nt.shadowNormalBias=Z.normalBias,nt.shadowRadius=Z.radius,nt.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[g]=nt,n.sunShadowMap[g]=et;let Tt=Z.getViewportCount();for(let St=0;St<Tt;St++)n.sunShadowMatrix[y+St]=Z.getMatrix(St),n.sunShadowCascade[y+St]=Z._cascadeData[St];y+=Tt,g++}n.sun[m]=V,m++}else if(I.isDirectionalLight){let V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Z=I.shadow,nt=e.get(I);nt.shadowIntensity=Z.intensity,nt.shadowBias=Z.bias,nt.shadowNormalBias=Z.normalBias,nt.shadowRadius=Z.radius,nt.shadowMapSize=Z.mapSize,n.directionalShadow[p]=nt,n.directionalShadowMap[p]=et,n.directionalShadowMatrix[p]=I.shadow.matrix,w++}n.directional[p]=V,p++}else if(I.isSpotLight){let V=t.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(H).multiplyScalar(Y),V.distance=X,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[M]=V;let Z=I.shadow;if(I.map&&(n.spotLightMap[E]=I.map,E++,Z.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[M]=Z.matrix,I.castShadow){let nt=e.get(I);nt.shadowIntensity=Z.intensity,nt.shadowBias=Z.bias,nt.shadowNormalBias=Z.normalBias,nt.shadowRadius=Z.radius,nt.shadowMapSize=Z.mapSize,n.spotShadow[M]=nt,n.spotShadowMap[M]=et,_++}M++}else if(I.isRectAreaLight){let V=t.get(I);V.color.copy(H).multiplyScalar(Y),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[A]=V,A++}else if(I.isPointLight){let V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){let Z=I.shadow,nt=e.get(I);nt.shadowIntensity=Z.intensity,nt.shadowBias=Z.bias,nt.shadowNormalBias=Z.normalBias,nt.shadowRadius=Z.radius,nt.shadowMapSize=Z.mapSize,nt.shadowCameraNear=Z.camera.near,nt.shadowCameraFar=Z.camera.far,n.pointShadow[f]=nt,n.pointShadowMap[f]=et,n.pointShadowMatrix[f]=I.shadow.matrix,b++}n.point[f]=V,f++}else if(I.isHemisphereLight){let V=t.get(I);V.skyColor.copy(I.color).multiplyScalar(Y),V.groundColor.copy(I.groundColor).multiplyScalar(Y),n.hemi[S]=V,S++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.sunLength!==m||L.directionalLength!==p||L.pointLength!==f||L.spotLength!==M||L.rectAreaLength!==A||L.hemiLength!==S||L.numSunShadows!==g||L.numDirectionalShadows!==w||L.numPointShadows!==b||L.numSpotShadows!==_||L.numSpotMaps!==E||L.numLightProbes!==R)&&(n.sun.length=m,n.directional.length=p,n.spot.length=M,n.rectArea.length=A,n.point.length=f,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+E-P,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,L.sunLength=m,L.directionalLength=p,L.pointLength=f,L.spotLength=M,L.rectAreaLength=A,L.hemiLength=S,L.numSunShadows=g,L.numDirectionalShadows=w,L.numPointShadows=b,L.numSpotShadows=_,L.numSpotMaps=E,L.numLightProbes=R,n.version=Ig++)}function c(l,h){let d=0,u=0,m=0,g=0,y=0,p=0,f=h.matrixWorldInverse;for(let M=0,A=l.length;M<A;M++){let S=l[M];if(S.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(f),d++}else if(S.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),u++}else if(S.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),g++}else if(S.isRectAreaLight){let w=n.rectArea[y];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(f),a.identity(),r.copy(S.matrixWorld),r.premultiply(f),a.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){let w=n.point[m];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(f),m++}else if(S.isHemisphereLight){let w=n.hemi[p];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(f),p++}}}return{setup:o,setupView:c,state:n}}function Dh(i){let t=new Lg(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):e.push(d)}function o(d){n.push(d)}function c(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function l(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Dg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Dh(i),t.set(s,[o])):r>=a.length?(o=new Dh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ug=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Fg=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Og=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Nh=new qt,fr=new F,Pl=new F;function Bg(i,t,e){let n=new Ti,s=new Kt,r=new Kt,a=new ge,o=new la,c=new ca,l={},h=e.maxTextureSize,d={[Pi]:Qe,[Qe]:Pi,[Mn]:Mn},u=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:Ng,fragmentShader:Ug}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let g=new _n;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new xe(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sr;let f=this.type;this.render=function(b,_,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===Sa&&(Lt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=sr);let P=i.getRenderTarget(),R=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Hi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let G=f!==this.type;G&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(H=>H.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,H=b.length;I<H;I++){let Y=b[I],X=Y.shadow;if(X===void 0){Lt("WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let et=X.getFrameExtents();s.multiply(et),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,X.mapSize.y=r.y));let V=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=V,X.map===null||G===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===vs){if(Y.isPointLight){Lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Tn(s.x,s.y,{format:Li,type:Wn,minFilter:mn,magFilter:mn,generateMipmaps:!1}),X.map.texture.name=Y.name+".shadowMap",X.map.depthTexture=new di(s.x,s.y,Pn),X.map.depthTexture.name=Y.name+".shadowMapDepth",X.map.depthTexture.format=ci,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Xe,X.map.depthTexture.magFilter=Xe}else Y.isPointLight?(X.map=new mr(s.x),X.map.depthTexture=new Zs(s.x,Vn)):(X.map=new Tn(s.x,s.y),X.map.depthTexture=new di(s.x,s.y,Vn)),X.map.depthTexture.name=Y.name+".shadowMap",X.map.depthTexture.format=ci,this.type===sr?(X.map.depthTexture.compareFunction=V?Ml:yl,X.map.depthTexture.minFilter=mn,X.map.depthTexture.magFilter=mn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Xe,X.map.depthTexture.magFilter=Xe);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let Z=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();Y.isPointLight!==!0&&X.updateMatrices(Y,E);let nt=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:E.layers;for(let Tt=0;Tt<Z;Tt++){let St=X.getCamera(Tt);if(Y.isPointLight){let K=X.camera,mt=X.matrix,yt=Y.distance||K.far;yt!==K.far&&(K.far=yt,K.updateProjectionMatrix()),fr.setFromMatrixPosition(Y.matrixWorld),K.position.copy(fr),Pl.copy(K.position),Pl.add(Fg[Tt]),K.up.copy(Og[Tt]),K.lookAt(Pl),K.updateMatrixWorld(),mt.makeTranslation(-fr.x,-fr.y,-fr.z),Nh.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Nh,K.coordinateSystem,K.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,Tt),i.clear();else{Tt===0&&(i.setRenderTarget(X.map),i.clear());let K=X.getViewport(Tt);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),U.viewport(a)}n=X.getFrustum(Tt),S(_,E,St,Y,nt,this.type)}X.isPointLightShadow!==!0&&this.type===vs&&M(X,E),X.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(P,R,L)};function M(b,_){let E=t.update(y);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null?b.mapPass=new Tn(s.x,s.y,{format:Li,type:Wn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(_,null,E,u,y,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value.set(b.map.width,b.map.height),m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(_,null,E,m,y,null)}function A(b,_,E,P){let R=null,L=E.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)R=L;else if(R=E.isPointLight===!0?c:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let U=R.uuid,G=_.uuid,I=l[U];I===void 0&&(I={},l[U]=I);let H=I[G];H===void 0&&(H=R.clone(),I[G]=H,_.addEventListener("dispose",w)),R=H}if(R.visible=_.visible,R.wireframe=_.wireframe,P===vs?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:d[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,E.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=i.properties.get(R);U.light=E}return R}function S(b,_,E,P,R,L){if(b.visible===!1)return;if(b.layers.test(R)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&L===vs)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,b.matrixWorld);let I=t.update(b),H=b.material;if(Array.isArray(H)){let Y=I.groups;for(let X=0,et=Y.length;X<et;X++){let V=Y[X],Z=H[V.materialIndex];if(Z&&Z.visible){let nt=A(b,Z,P,L);b.onBeforeShadow(i,b,_,E,I,nt,V),i.renderBufferDirect(E,null,I,nt,b,V),b.onAfterShadow(i,b,_,E,I,nt,V)}}}else if(H.visible){let Y=A(b,H,P,L);b.onBeforeShadow(i,b,_,E,I,Y,null),i.renderBufferDirect(E,null,I,Y,b,null),b.onAfterShadow(i,b,_,E,I,Y,null)}}let G=b.children;for(let I=0,H=G.length;I<H;I++)S(G[I],_,E,P,R,L)}function w(b){b.target.removeEventListener("dispose",w);for(let E in l){let P=l[E],R=b.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}function zg(i,t){function e(){let C=!1,j=new ge,q=null,tt=new ge(0,0,0,0);return{setMask:function(ot){q!==ot&&!C&&(i.colorMask(ot,ot,ot,ot),q=ot)},setLocked:function(ot){C=ot},setClear:function(ot,rt,Rt,zt,it){it===!0&&(ot*=zt,rt*=zt,Rt*=zt),j.set(ot,rt,Rt,zt),tt.equals(j)===!1&&(i.clearColor(ot,rt,Rt,zt),tt.copy(j))},reset:function(){C=!1,q=null,tt.set(-1,0,0,0)}}}function n(){let C=!1,j=!1,q=null,tt=null,ot=null;return{setReversed:function(rt){if(j!==rt){let Rt=t.get("EXT_clip_control");rt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),j=rt;let zt=ot;ot=null,this.setClear(zt)}},getReversed:function(){return j},setTest:function(rt){rt?gt(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(rt){q!==rt&&!C&&(i.depthMask(rt),q=rt)},setFunc:function(rt){if(j&&(rt=lh[rt]),tt!==rt){switch(rt){case Yr:i.depthFunc(i.NEVER);break;case Zr:i.depthFunc(i.ALWAYS);break;case Jr:i.depthFunc(i.LESS);break;case hs:i.depthFunc(i.LEQUAL);break;case $r:i.depthFunc(i.EQUAL);break;case Kr:i.depthFunc(i.GEQUAL);break;case Qr:i.depthFunc(i.GREATER);break;case jr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=rt}},setLocked:function(rt){C=rt},setClear:function(rt){ot!==rt&&(ot=rt,j&&(rt=1-rt),i.clearDepth(rt))},reset:function(){C=!1,q=null,tt=null,ot=null,j=!1}}}function s(){let C=!1,j=null,q=null,tt=null,ot=null,rt=null,Rt=null,zt=null,it=null;return{setTest:function(Ct){C||(Ct?gt(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(Ct){j!==Ct&&!C&&(i.stencilMask(Ct),j=Ct)},setFunc:function(Ct,kt,pt){(q!==Ct||tt!==kt||ot!==pt)&&(i.stencilFunc(Ct,kt,pt),q=Ct,tt=kt,ot=pt)},setOp:function(Ct,kt,pt){(rt!==Ct||Rt!==kt||zt!==pt)&&(i.stencilOp(Ct,kt,pt),rt=Ct,Rt=kt,zt=pt)},setLocked:function(Ct){C=Ct},setClear:function(Ct){it!==Ct&&(i.clearStencil(Ct),it=Ct)},reset:function(){C=!1,j=null,q=null,tt=null,ot=null,rt=null,Rt=null,zt=null,it=null}}}let r=new e,a=new n,o=new s,c={},l=new WeakMap,h={},d={},u={},m=new WeakMap,g=[],y=null,p=!1,f=null,M=null,A=null,S=null,w=null,b=null,_=null,E=new Vt(0,0,0),P=0,R=!1,L=null,U=null,G=null,I=null,H=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,et=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=et>=1):V.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=et>=2);let Z=null,nt={},Tt=i.getParameter(i.SCISSOR_BOX),St=i.getParameter(i.VIEWPORT),K=new ge().fromArray(Tt),mt=new ge().fromArray(St);function yt(C,j,q,tt){let ot=new Uint8Array(4),rt=i.createTexture();i.bindTexture(C,rt),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<q;Rt++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(j+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return rt}let Pt={};Pt[i.TEXTURE_2D]=yt(i.TEXTURE_2D,i.TEXTURE_2D,1),Pt[i.TEXTURE_CUBE_MAP]=yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pt[i.TEXTURE_2D_ARRAY]=yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pt[i.TEXTURE_3D]=yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),gt(i.DEPTH_TEST),a.setFunc(hs),nn(!1),$t(jo),gt(i.CULL_FACE),Ue(Hi);function gt(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function Ut(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function Te(C,j){return u[C]!==j?(i.bindFramebuffer(C,j),u[C]=j,C===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=j),C===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=j),!0):!1}function Dt(C,j){let q=g,tt=!1;if(C){q=m.get(j),q===void 0&&(q=[],m.set(j,q));let ot=C.textures;if(q.length!==ot.length||q[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,Rt=ot.length;rt<Rt;rt++)q[rt]=i.COLOR_ATTACHMENT0+rt;q.length=ot.length,tt=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,tt=!0);tt&&i.drawBuffers(q)}function ae(C){return y!==C?(i.useProgram(C),y=C,!0):!1}let he={[Vi]:i.FUNC_ADD,[Cc]:i.FUNC_SUBTRACT,[Ic]:i.FUNC_REVERSE_SUBTRACT};he[Pc]=i.MIN,he[Lc]=i.MAX;let Yt={[Dc]:i.ZERO,[Nc]:i.ONE,[Uc]:i.SRC_COLOR,[il]:i.SRC_ALPHA,[Gc]:i.SRC_ALPHA_SATURATE,[zc]:i.DST_COLOR,[Oc]:i.DST_ALPHA,[Fc]:i.ONE_MINUS_SRC_COLOR,[sl]:i.ONE_MINUS_SRC_ALPHA,[kc]:i.ONE_MINUS_DST_COLOR,[Bc]:i.ONE_MINUS_DST_ALPHA,[Hc]:i.CONSTANT_COLOR,[Vc]:i.ONE_MINUS_CONSTANT_COLOR,[Wc]:i.CONSTANT_ALPHA,[Xc]:i.ONE_MINUS_CONSTANT_ALPHA};function Ue(C,j,q,tt,ot,rt,Rt,zt,it,Ct){if(C===Hi){p===!0&&(Ut(i.BLEND),p=!1);return}if(p===!1&&(gt(i.BLEND),p=!0),C!==Rc){if(C!==f||Ct!==R){if((M!==Vi||w!==Vi)&&(i.blendEquation(i.FUNC_ADD),M=Vi,w=Vi),Ct)switch(C){case ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tl:i.blendFunc(i.ONE,i.ONE);break;case el:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ot("WebGLState: Invalid blending: ",C);break}else switch(C){case ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case el:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nl:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",C);break}A=null,S=null,b=null,_=null,E.set(0,0,0),P=0,f=C,R=Ct}return}ot=ot||j,rt=rt||q,Rt=Rt||tt,(j!==M||ot!==w)&&(i.blendEquationSeparate(he[j],he[ot]),M=j,w=ot),(q!==A||tt!==S||rt!==b||Rt!==_)&&(i.blendFuncSeparate(Yt[q],Yt[tt],Yt[rt],Yt[Rt]),A=q,S=tt,b=rt,_=Rt),(zt.equals(E)===!1||it!==P)&&(i.blendColor(zt.r,zt.g,zt.b,it),E.copy(zt),P=it),f=C,R=!1}function we(C,j){C.side===Mn?Ut(i.CULL_FACE):gt(i.CULL_FACE);let q=C.side===Qe;j&&(q=!q),nn(q),C.blending===ys&&C.transparent===!1?Ue(Hi):Ue(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let tt=C.stencilWrite;o.setTest(tt),tt&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Pe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function nn(C){L!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),L=C)}function $t(C){C!==wc?(gt(i.CULL_FACE),C!==U&&(C===jo?i.cullFace(i.BACK):C===Ac?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),U=C}function Je(C){C!==G&&(X&&i.lineWidth(C),G=C)}function Pe(C,j,q){C?(gt(i.POLYGON_OFFSET_FILL),(I!==j||H!==q)&&(I=j,H=q,a.getReversed()&&(j=-j,q=-q),i.polygonOffset(j,q))):Ut(i.POLYGON_OFFSET_FILL)}function Fe(C){C?gt(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function un(C){C===void 0&&(C=i.TEXTURE0+Y-1),Z!==C&&(i.activeTexture(C),Z=C)}function ke(C,j,q){q===void 0&&(Z===null?q=i.TEXTURE0+Y-1:q=Z);let tt=nt[q];tt===void 0&&(tt={type:void 0,texture:void 0},nt[q]=tt),(tt.type!==C||tt.texture!==j)&&(Z!==q&&(i.activeTexture(q),Z=q),i.bindTexture(C,j||Pt[C]),tt.type=C,tt.texture=j)}function N(){let C=nt[Z];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function dn(){try{i.compressedTexImage2D(...arguments)}catch(C){Ot("WebGLState:",C)}}function Ft(){try{i.compressedTexImage3D(...arguments)}catch(C){Ot("WebGLState:",C)}}function ue(){try{i.texSubImage2D(...arguments)}catch(C){Ot("WebGLState:",C)}}function ut(){try{i.texSubImage3D(...arguments)}catch(C){Ot("WebGLState:",C)}}function Ce(){try{i.compressedTexSubImage2D(...arguments)}catch(C){Ot("WebGLState:",C)}}function It(){try{i.compressedTexSubImage3D(...arguments)}catch(C){Ot("WebGLState:",C)}}function xt(){try{i.texStorage2D(...arguments)}catch(C){Ot("WebGLState:",C)}}function T(){try{i.texStorage3D(...arguments)}catch(C){Ot("WebGLState:",C)}}function x(){try{i.texImage2D(...arguments)}catch(C){Ot("WebGLState:",C)}}function O(){try{i.texImage3D(...arguments)}catch(C){Ot("WebGLState:",C)}}function st(C){return d[C]!==void 0?d[C]:i.getParameter(C)}function Q(C,j){d[C]!==j&&(i.pixelStorei(C,j),d[C]=j)}function at(C){K.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),K.copy(C))}function ht(C){mt.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),mt.copy(C))}function J(C,j){let q=l.get(j);q===void 0&&(q=new WeakMap,l.set(j,q));let tt=q.get(C);tt===void 0&&(tt=i.getUniformBlockIndex(j,C.name),i.uniformBlockBinding(j,tt,tt),q.set(C,tt))}function $(C,j,q){let ot=l.get(j).get(C);c[ot]!==q&&(i.bindBufferBase(i.UNIFORM_BUFFER,ot,q),c[ot]=q)}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},Z=null,nt={},u={},c={},m=new WeakMap,g=[],y=null,p=!1,f=null,M=null,A=null,S=null,w=null,b=null,_=null,E=new Vt(0,0,0),P=0,R=!1,L=null,U=null,G=null,I=null,H=null,K.set(0,0,i.canvas.width,i.canvas.height),mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:gt,disable:Ut,bindFramebuffer:Te,drawBuffers:Dt,useProgram:ae,setBlending:Ue,setMaterial:we,setFlipSided:nn,setCullFace:$t,setLineWidth:Je,setPolygonOffset:Pe,setScissorTest:Fe,activeTexture:un,bindTexture:ke,unbindTexture:N,compressedTexImage2D:dn,compressedTexImage3D:Ft,texImage2D:x,texImage3D:O,pixelStorei:Q,getParameter:st,updateUBOMapping:J,uniformBlockBinding:$,texStorage2D:xt,texStorage3D:T,texSubImage2D:ue,texSubImage3D:ut,compressedTexSubImage2D:Ce,compressedTexSubImage3D:It,scissor:at,viewport:ht,reset:ct}}function kg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Kt,h=new WeakMap,d=new Set,u,m=new WeakMap,g=new Set,y=new FinalizationRegistry(T=>g.delete(T)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(T,x){return p?new OffscreenCanvas(T,x):Fs("canvas")}function M(T,x,O){let st=1,Q=xt(T);if((Q.width>O||Q.height>O)&&(st=O/Math.max(Q.width,Q.height)),st<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let at=Math.floor(st*Q.width),ht=Math.floor(st*Q.height);u===void 0&&(u=f(at,ht));let J=x?f(at,ht):u;return J.width=at,J.height=ht,J.getContext("2d").drawImage(T,0,0,at,ht),Lt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+at+"x"+ht+")."),J}else return"data"in T&&Lt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function A(T){return T.generateMipmaps}function S(T){i.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,x,O,st,Q,at=!1){if(T!==null){if(i[T]!==void 0)return i[T];Lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ht;st&&(ht=t.get("EXT_texture_norm16"),ht||Lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=x;if(x===i.RED&&(O===i.FLOAT&&(J=i.R32F),O===i.HALF_FLOAT&&(J=i.R16F),O===i.UNSIGNED_BYTE&&(J=i.R8),O===i.UNSIGNED_SHORT&&ht&&(J=ht.R16_EXT),O===i.SHORT&&ht&&(J=ht.R16_SNORM_EXT)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.R8UI),O===i.UNSIGNED_SHORT&&(J=i.R16UI),O===i.UNSIGNED_INT&&(J=i.R32UI),O===i.BYTE&&(J=i.R8I),O===i.SHORT&&(J=i.R16I),O===i.INT&&(J=i.R32I)),x===i.RG&&(O===i.FLOAT&&(J=i.RG32F),O===i.HALF_FLOAT&&(J=i.RG16F),O===i.UNSIGNED_BYTE&&(J=i.RG8),O===i.UNSIGNED_SHORT&&ht&&(J=ht.RG16_EXT),O===i.SHORT&&ht&&(J=ht.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RG8UI),O===i.UNSIGNED_SHORT&&(J=i.RG16UI),O===i.UNSIGNED_INT&&(J=i.RG32UI),O===i.BYTE&&(J=i.RG8I),O===i.SHORT&&(J=i.RG16I),O===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGB8UI),O===i.UNSIGNED_SHORT&&(J=i.RGB16UI),O===i.UNSIGNED_INT&&(J=i.RGB32UI),O===i.BYTE&&(J=i.RGB8I),O===i.SHORT&&(J=i.RGB16I),O===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),O===i.UNSIGNED_INT&&(J=i.RGBA32UI),O===i.BYTE&&(J=i.RGBA8I),O===i.SHORT&&(J=i.RGBA16I),O===i.INT&&(J=i.RGBA32I)),x===i.RGB&&(O===i.UNSIGNED_SHORT&&ht&&(J=ht.RGB16_EXT),O===i.SHORT&&ht&&(J=ht.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),x===i.RGBA){let $=at?Us:te.getTransfer(Q);O===i.FLOAT&&(J=i.RGBA32F),O===i.HALF_FLOAT&&(J=i.RGBA16F),O===i.UNSIGNED_BYTE&&(J=$===pe?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&ht&&(J=ht.RGBA16_EXT),O===i.SHORT&&ht&&(J=ht.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function _(T,x){let O;return T?x===null||x===Vn||x===Xi?O=i.DEPTH24_STENCIL8:x===Pn?O=i.DEPTH32F_STENCIL8:x===Ss&&(O=i.DEPTH24_STENCIL8,Lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Vn||x===Xi?O=i.DEPTH_COMPONENT24:x===Pn?O=i.DEPTH_COMPONENT32F:x===Ss&&(O=i.DEPTH_COMPONENT16),O}function E(T,x){return A(T)===!0||T.isFramebufferTexture&&T.minFilter!==Xe&&T.minFilter!==mn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function P(T){let x=new WeakRef(T);n.get(T).__ref=x,g.add(x),y.register(T,x,x)}function R(T){let x=n.get(T).__ref;x!==void 0&&(g.delete(x),y.unregister(x))}function L(T){G(T.target)}function U(T){I(T.target)}function G(T){T.removeEventListener("dispose",L),R(T),Y(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&d.delete(T)}function I(T){T.removeEventListener("dispose",U),R(T),et(T)}function H(){for(let T of g){let x=T.deref();x!==void 0&&(x.isRenderTarget===!0?I(x):G(x))}g.clear(),d.clear()}function Y(T){let x=n.get(T);if(x.__webglInit===void 0)return;let O=T.source,st=m.get(O);if(st){let Q=st[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&X(T),Object.keys(st).length===0&&m.delete(O)}n.remove(T)}function X(T){let x=n.get(T);i.deleteTexture(x.__webglTexture);let O=T.source,st=m.get(O);delete st[x.__cacheKey],a.memory.textures--}function et(T){let x=n.get(T);x.__depthDisposeCallback&&x.__depthDisposeCallback();let O=T.depthTexture;if(O&&O.renderTarget===T&&G(O),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(x.__webglFramebuffer[Q]))for(let at=0;at<x.__webglFramebuffer[Q].length;at++)i.deleteFramebuffer(x.__webglFramebuffer[Q][at]);else i.deleteFramebuffer(x.__webglFramebuffer[Q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Q])}else{if(Array.isArray(x.__webglFramebuffer))for(let Q=0;Q<x.__webglFramebuffer.length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[Q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Q=0;Q<x.__webglColorRenderbuffer.length;Q++)x.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let st=T.textures;for(let Q=0,at=st.length;Q<at;Q++){let ht=n.get(st[Q]);ht.__webglTexture&&(i.deleteTexture(ht.__webglTexture),a.memory.textures--),n.remove(st[Q])}n.remove(T)}let V=0;function Z(){V=0}function nt(){return V}function Tt(T){V=T}function St(){let T=V;return T>=s.maxTextures&&Lt("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,T}function K(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.mipmapsAutoUpdate),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function mt(T,x){let O=n.get(T);if(T.isVideoTexture&&Ce(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){let st=T.image;if(st===null)Lt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)Lt("WebGLRenderer: Texture marked for update but image is incomplete");else{we(O,T,x);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function yt(T,x){let O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){we(O,T,x);return}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function Pt(T,x){let O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){we(O,T,x);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function gt(T,x){let O=n.get(T);if(T.version>0&&O.__version!==T.version){nn(O,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}let Ut={[li]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[ta]:i.MIRRORED_REPEAT},Te={[Xe]:i.NEAREST,[Jc]:i.NEAREST_MIPMAP_NEAREST,[ar]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[Ta]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},Dt={[jc]:i.NEVER,[Sl]:i.ALWAYS,[th]:i.LESS,[yl]:i.LEQUAL,[eh]:i.EQUAL,[Ml]:i.GEQUAL,[nh]:i.GREATER,[ih]:i.NOTEQUAL};function ae(T,x){if(x.type===Pn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===mn||x.magFilter===Ta||x.magFilter===ar||x.magFilter===fi||x.minFilter===mn||x.minFilter===Ta||x.minFilter===ar||x.minFilter===fi)&&Lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Ut[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Ut[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Ut[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Te[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Te[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Dt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Xe||x.minFilter!==ar&&x.minFilter!==fi||x.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function he(T,x){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",L),P(x));let st=x.source,Q=m.get(st);Q===void 0&&(Q={},m.set(st,Q));let at=K(x);if(at!==T.__cacheKey){Q[at]===void 0&&(Q[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[at].usedTimes++;let ht=Q[T.__cacheKey];ht!==void 0&&(Q[T.__cacheKey].usedTimes--,ht.usedTimes===0&&X(x)),T.__cacheKey=at,T.__webglTexture=Q[at].texture}return O}function Yt(T,x,O){return Math.floor(Math.floor(T/O)/x)}function Ue(T,x,O,st){let at=T.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,O,st,x.data);else{at.sort((C,j)=>C.start-j.start);let ht=0;for(let C=1;C<at.length;C++){let j=at[ht],q=at[C],tt=j.start+j.count,ot=Yt(q.start,x.width,4),rt=Yt(j.start,x.width,4);q.start<=tt+1&&ot===rt&&Yt(q.start+q.count-1,x.width,4)===ot?j.count=Math.max(j.count,q.start+q.count-j.start):(++ht,at[ht]=q)}at.length=ht+1;let J=e.getParameter(i.UNPACK_ROW_LENGTH),$=e.getParameter(i.UNPACK_SKIP_PIXELS),ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let C=0,j=at.length;C<j;C++){let q=at[C],tt=Math.floor(q.start/4),ot=Math.ceil(q.count/4),rt=tt%x.width,Rt=Math.floor(tt/x.width),zt=ot,it=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Rt),e.texSubImage2D(i.TEXTURE_2D,0,rt,Rt,zt,it,O,st,x.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,J),e.pixelStorei(i.UNPACK_SKIP_PIXELS,$),e.pixelStorei(i.UNPACK_SKIP_ROWS,ct)}}function we(T,x,O){let st=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(st=i.TEXTURE_3D);let Q=he(T,x),at=x.source;e.bindTexture(st,T.__webglTexture,i.TEXTURE0+O);let ht=n.get(at);if(at.version!==ht.__version||Q===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let it=te.getPrimaries(te.workingColorSpace),Ct=x.colorSpace===mi?null:te.getPrimaries(x.colorSpace),kt=x.colorSpace===mi||it===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let $=M(x.image,!1,s.maxTextureSize);$=It(x,$);let ct=r.convert(x.format,x.colorSpace),C=r.convert(x.type),j=b(x.internalFormat,ct,C,x.normalized,x.colorSpace,x.isVideoTexture);ae(st,x);let q,tt=x.mipmaps,ot=x.isVideoTexture!==!0,rt=ht.__version===void 0||Q===!0,Rt=at.dataReady,zt=E(x,$);if(x.isDepthTexture)j=_(x.format===pi,x.type),rt&&(ot?e.texStorage2D(i.TEXTURE_2D,1,j,$.width,$.height):e.texImage2D(i.TEXTURE_2D,0,j,$.width,$.height,0,ct,C,null));else if(x.isDataTexture)if(tt.length>0){ot&&rt&&e.texStorage2D(i.TEXTURE_2D,zt,j,tt[0].width,tt[0].height);for(let it=0,Ct=tt.length;it<Ct;it++)q=tt[it],ot?Rt&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,q.width,q.height,ct,C,q.data):e.texImage2D(i.TEXTURE_2D,it,j,q.width,q.height,0,ct,C,q.data);x.generateMipmaps=!1}else ot?(rt&&e.texStorage2D(i.TEXTURE_2D,zt,j,$.width,$.height),Rt&&Ue(x,$,ct,C)):e.texImage2D(i.TEXTURE_2D,0,j,$.width,$.height,0,ct,C,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ot&&rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,zt,j,tt[0].width,tt[0].height,$.depth);for(let it=0,Ct=tt.length;it<Ct;it++)if(q=tt[it],x.format!==Ln)if(ct!==null)if(ot){if(Rt)if(x.layerUpdates.size>0){let kt=Cl(q.width,q.height,x.format,x.type);for(let pt of x.layerUpdates){let ce=q.data.subarray(pt*kt/q.data.BYTES_PER_ELEMENT,(pt+1)*kt/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,pt,q.width,q.height,1,ct,ce)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,q.width,q.height,$.depth,ct,q.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,j,q.width,q.height,$.depth,0,q.data,0,0);else Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?Rt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,q.width,q.height,$.depth,ct,C,q.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,j,q.width,q.height,$.depth,0,ct,C,q.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ot&&rt&&e.texStorage2D(i.TEXTURE_2D,zt,j,tt[0].width,tt[0].height);for(let it=0,Ct=tt.length;it<Ct;it++)q=tt[it],x.format!==Ln?ct!==null?ot?Rt&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,q.width,q.height,ct,q.data):e.compressedTexImage2D(i.TEXTURE_2D,it,j,q.width,q.height,0,q.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?Rt&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,q.width,q.height,ct,C,q.data):e.texImage2D(i.TEXTURE_2D,it,j,q.width,q.height,0,ct,C,q.data)}else if(x.isDataArrayTexture)if(ot){if(rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,zt,j,$.width,$.height,$.depth),Rt)if(x.layerUpdates.size>0){let it=Cl($.width,$.height,x.format,x.type);for(let Ct of x.layerUpdates){let kt=$.data.subarray(Ct*it/$.data.BYTES_PER_ELEMENT,(Ct+1)*it/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ct,$.width,$.height,1,ct,C,kt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ct,C,$.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,j,$.width,$.height,$.depth,0,ct,C,$.data);else if(x.isData3DTexture)ot?(rt&&e.texStorage3D(i.TEXTURE_3D,zt,j,$.width,$.height,$.depth),Rt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ct,C,$.data)):e.texImage3D(i.TEXTURE_3D,0,j,$.width,$.height,$.depth,0,ct,C,$.data);else if(x.isFramebufferTexture){if(rt)if(ot)e.texStorage2D(i.TEXTURE_2D,zt,j,$.width,$.height);else{let it=$.width,Ct=$.height;for(let kt=0;kt<zt;kt++)e.texImage2D(i.TEXTURE_2D,kt,j,it,Ct,0,ct,C,null),it>>=1,Ct>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),$.parentNode!==it){it.appendChild($),d.add(x),it.onpaint=Ct=>{let kt=Ct.changedElements;for(let pt of d)kt.includes(pt.image)&&(pt.needsUpdate=!0)},it.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{let kt=i.RGBA,pt=i.RGBA,ce=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,kt,pt,ce,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(tt.length>0){if(ot&&rt){let it=xt(tt[0]);e.texStorage2D(i.TEXTURE_2D,zt,j,it.width,it.height)}for(let it=0,Ct=tt.length;it<Ct;it++)q=tt[it],ot?Rt&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ct,C,q):e.texImage2D(i.TEXTURE_2D,it,j,ct,C,q);x.generateMipmaps=!1}else if(ot){if(rt){let it=xt($);e.texStorage2D(i.TEXTURE_2D,zt,j,it.width,it.height)}Rt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,C,$)}else e.texImage2D(i.TEXTURE_2D,0,j,ct,C,$);A(x)&&x.mipmapsAutoUpdate===!0&&S(st),ht.__version=at.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function nn(T,x,O){if(x.image.length!==6)return;let st=he(T,x),Q=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);let at=n.get(Q);if(Q.version!==at.__version||st===!0){e.activeTexture(i.TEXTURE0+O);let ht=te.getPrimaries(te.workingColorSpace),J=x.colorSpace===mi?null:te.getPrimaries(x.colorSpace),$=x.colorSpace===mi||ht===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let ct=x.isCompressedTexture||x.image[0].isCompressedTexture,C=x.image[0]&&x.image[0].isDataTexture,j=[];for(let pt=0;pt<6;pt++)!ct&&!C?j[pt]=M(x.image[pt],!0,s.maxCubemapSize):j[pt]=C?x.image[pt].image:x.image[pt],j[pt]=It(x,j[pt]);let q=j[0],tt=r.convert(x.format,x.colorSpace),ot=r.convert(x.type),rt=b(x.internalFormat,tt,ot,x.normalized,x.colorSpace),Rt=x.isVideoTexture!==!0,zt=at.__version===void 0||st===!0,it=Q.dataReady,Ct=E(x,q);ae(i.TEXTURE_CUBE_MAP,x);let kt;if(x.isDepthTexture){if(rt=_(x.format===pi,x.type),zt)if(Rt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,rt,q.width,q.height);else for(let pt=0;pt<6;pt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,rt,q.width,q.height,0,tt,ot,null)}else if(ct){Rt&&zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,rt,q.width,q.height);for(let pt=0;pt<6;pt++){kt=j[pt].mipmaps;for(let ce=0;ce<kt.length;ce++){let Ae=kt[ce];x.format!==Ln?tt!==null?Rt?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ce,0,0,Ae.width,Ae.height,tt,Ae.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ce,rt,Ae.width,Ae.height,0,Ae.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ce,0,0,Ae.width,Ae.height,tt,ot,Ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ce,rt,Ae.width,Ae.height,0,tt,ot,Ae.data)}}}else{if(kt=x.mipmaps,Rt&&zt){kt.length>0&&Ct++;let pt=xt(j[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,rt,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(C){Rt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,j[pt].width,j[pt].height,tt,ot,j[pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,rt,j[pt].width,j[pt].height,0,tt,ot,j[pt].data);for(let ce=0;ce<kt.length;ce++){let xn=kt[ce].image[pt].image;Rt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ce+1,0,0,xn.width,xn.height,tt,ot,xn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ce+1,rt,xn.width,xn.height,0,tt,ot,xn.data)}}else{Rt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,tt,ot,j[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,rt,tt,ot,j[pt]);for(let ce=0;ce<kt.length;ce++){let Ae=kt[ce];Rt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ce+1,0,0,tt,ot,Ae.image[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ce+1,rt,tt,ot,Ae.image[pt])}}}A(x)&&x.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),at.__version=Q.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function $t(T,x,O,st,Q,at){let ht=r.convert(O.format,O.colorSpace),J=r.convert(O.type),$=b(O.internalFormat,ht,J,O.normalized,O.colorSpace),ct=n.get(x),C=n.get(O);if(C.__renderTarget=x,!ct.__hasExternalTextures){let j=Math.max(1,x.width>>at),q=Math.max(1,x.height>>at);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,at,$,j,q,x.depth,0,ht,J,null):e.texImage2D(Q,at,$,j,q,0,ht,J,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),ut(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,Q,C.__webglTexture,0,ue(x)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,Q,C.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(T,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){let st=x.depthTexture,Q=st&&st.isDepthTexture?st.type:null,at=_(x.stencilBuffer,Q),ht=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ut(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(x),at,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(x),at,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,at,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,T)}else{let st=x.textures;for(let Q=0;Q<st.length;Q++){let at=st[Q],ht=r.convert(at.format,at.colorSpace),J=r.convert(at.type),$=b(at.internalFormat,ht,J,at.normalized,at.colorSpace);ut(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(x),$,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(x),$,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,$,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(T,x,O){let st=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(x.depthTexture);Q.__renderTarget=x;let at=st?x.depthTexture.image[0]:x.depthTexture.image;(!Q.__webglTexture||at.width!==x.width||at.height!==x.height)&&(at.width=x.width,at.height=x.height,x.depthTexture.needsUpdate=!0),st?gt(x.depthTexture,0):mt(x.depthTexture,0);let ht=Q.__webglTexture,J=ue(x),$=st?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,ct=x.depthTexture.format===pi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===ci)ut(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,$,ht,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,ct,$,ht,0);else if(x.depthTexture.format===pi)ut(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,$,ht,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,ct,$,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Fe(T){let x=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let st=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),st){let Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,st.removeEventListener("dispose",Q)};st.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=st}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let st=0;st<6;st++)Pe(x.__webglFramebuffer[st],T,st);else T.texture.mipmaps.length>0?Pe(x.__webglFramebuffer[0],T,0):Pe(x.__webglFramebuffer,T,0);else if(O){x.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[st]),x.__webglDepthbuffer[st]===void 0)x.__webglDepthbuffer[st]=i.createRenderbuffer(),Je(x.__webglDepthbuffer[st],T,!1);else{let Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,at)}}else if(T.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Je(x.__webglDepthbuffer,T,!1);else{let Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function un(T,x,O){let st=n.get(T);x!==void 0&&$t(st.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Fe(T)}function ke(T){let x=T.texture,O=n.get(T),st=n.get(x);T.addEventListener("dispose",U),P(T);let Q=T.textures,at=T.isWebGLCubeRenderTarget===!0,ht=Q.length>1;if(ht||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=x.version,a.memory.textures++),at){O.__webglFramebuffer=[];for(let J=0;J<6;J++)if(x.mipmaps.length>0){O.__webglFramebuffer[J]=[];for(let $=0;$<x.mipmaps.length;$++)O.__webglFramebuffer[J][$]=i.createFramebuffer()}else O.__webglFramebuffer[J]=i.createFramebuffer()}else{if(x.mipmaps.length>0){O.__webglFramebuffer=[];for(let J=0;J<x.mipmaps.length;J++)O.__webglFramebuffer[J]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ht)for(let J=0,$=Q.length;J<$;J++){let ct=n.get(Q[J]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&ut(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let J=0;J<Q.length;J++){let $=Q[J];O.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[J]);let ct=r.convert($.format,$.colorSpace),C=r.convert($.type),j=b($.internalFormat,ct,C,$.normalized,$.colorSpace,T.isXRRenderTarget===!0),q=ue(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,q,j,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,O.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Je(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),ae(i.TEXTURE_CUBE_MAP,x);for(let J=0;J<6;J++)if(x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)$t(O.__webglFramebuffer[J][$],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,$);else $t(O.__webglFramebuffer[J],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);A(x)?S(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(ht){for(let J=0,$=Q.length;J<$;J++){let ct=Q[J],C=n.get(ct),j=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(j=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,C.__webglTexture),ae(j,ct),$t(O.__webglFramebuffer,T,ct,i.COLOR_ATTACHMENT0+J,j,0),A(ct)&&S(j)}e.unbindTexture()}else{let J=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(J=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,st.__webglTexture),ae(J,x),x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)$t(O.__webglFramebuffer[$],T,x,i.COLOR_ATTACHMENT0,J,$);else $t(O.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,J,0);A(x)?S(J):x.mipmaps.length>0&&i.texParameteri(J,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}T.depthBuffer&&Fe(T)}function N(T){let x=T.textures;for(let O=0,st=x.length;O<st;O++){let Q=x[O];if(A(Q)&&Q.mipmapsAutoUpdate===!0){let at=w(T),ht=n.get(Q).__webglTexture;e.bindTexture(at,ht),S(at),e.unbindTexture()}}}let dn=[];function Ft(T){if(T.samples>0){if(ut(T)===!1){let x=T.textures,O=T.width,st=T.height,Q=i.COLOR_BUFFER_BIT,at=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(T),J=x.length>1;if(J)for(let ct=0;ct<x.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let ct=0;ct<x.length;ct++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[ct]);let C=n.get(x[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,O,st,0,0,O,st,Q,i.NEAREST),c===!0&&(dn.length=0,dn.push(i.COLOR_ATTACHMENT0+ct),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&dn.push(at),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dn))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let ct=0;ct<x.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,ht.__webglColorRenderbuffer[ct]);let C=n.get(x[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,C,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){let x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ue(T){return Math.min(s.maxSamples,T.samples)}function ut(T){let x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ce(T){let x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function It(T,x){let O=T.colorSpace,st=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Ns&&O!==mi&&(te.getTransfer(O)===pe?(st!==Ln||Q!==Sn)&&Lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",O)),x}function xt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=St,this.resetTextureUnits=Z,this.getTextureUnits=nt,this.setTextureUnits=Tt,this.setTexture2D=mt,this.setTexture2DArray=yt,this.setTexture3D=Pt,this.setTextureCube=gt,this.rebindTextures=un,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=$t,this.useMultisampledRTT=ut,this.dispose=H}function Gg(i,t){function e(n,s=mi){let r,a=te.getTransfer(s);if(n===Sn)return i.UNSIGNED_BYTE;if(n===Aa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ra)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ml)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===fl)return i.BYTE;if(n===pl)return i.SHORT;if(n===Ss)return i.UNSIGNED_SHORT;if(n===wa)return i.INT;if(n===Vn)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Wn)return i.HALF_FLOAT;if(n===_l)return i.ALPHA;if(n===xl)return i.RGB;if(n===Ln)return i.RGBA;if(n===ci)return i.DEPTH_COMPONENT;if(n===pi)return i.DEPTH_STENCIL;if(n===vl)return i.RED;if(n===Ca)return i.RED_INTEGER;if(n===Li)return i.RG;if(n===Ia)return i.RG_INTEGER;if(n===Pa)return i.RGBA_INTEGER;if(n===or||n===lr||n===cr||n===hr)if(a===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===La||n===Da||n===Na||n===Ua)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===La)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fa||n===Oa||n===Ba||n===za||n===ka||n===ur||n===Ga)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fa||n===Oa)return a===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ba)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===za)return r.COMPRESSED_R11_EAC;if(n===ka)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ur)return r.COMPRESSED_RG11_EAC;if(n===Ga)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ha||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===Ja||n===$a||n===Ka||n===Qa||n===ja||n===to||n===eo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ha)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Va)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wa)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xa)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qa)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ya)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Za)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ja)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$a)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ka)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qa)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ja)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===to)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===eo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===no||n===io||n===so)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===no)return a===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===io)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===so)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ro||n===ao||n===dr||n===oo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ro)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ao)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Hg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Bl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Js(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Jn({vertexShader:Hg,fragmentShader:Vg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new Hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zl=class extends Zn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,m=null,g=null,y=typeof XRWebGLBinding<"u",p=new Bl,f={},M=e.getContextAttributes(),A=null,S=null,w=[],b=[],_=new Kt,E=null,P=null,R=new pn;R.viewport=new ge;let L=new pn;L.viewport=new ge;let U=[R,L],G=new Ma,I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let mt=w[K];return mt===void 0&&(mt=new ps,w[K]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(K){let mt=w[K];return mt===void 0&&(mt=new ps,w[K]=mt),mt.getGripSpace()},this.getHand=function(K){let mt=w[K];return mt===void 0&&(mt=new ps,w[K]=mt),mt.getHandSpace()};function Y(K){let mt=b.indexOf(K.inputSource);if(mt===-1)return;let yt=w[mt];yt!==void 0&&(yt.update(K.inputSource,K.frame,l||a),yt.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",et);for(let K=0;K<w.length;K++){let mt=b[K];mt!==null&&(b[K]=null,w[K].disconnect(mt))}I=null,H=null,p.reset();for(let K in f)delete f[K];if(t.setRenderTarget(A),m=null,u=null,d=null,s=null,S=null,St.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(_.width,_.height,!1),P!==null){let K=P.camera;K.fov=P.fov,K.zoom=P.zoom,K.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",X),s.addEventListener("inputsourceschange",et),M.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Pt=null,gt=null;M.depth&&(gt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=M.stencil?pi:ci,Pt=M.stencil?Xi:Vn);let Ut={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ut),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new Tn(u.textureWidth,u.textureHeight,{format:Ln,type:Sn,depthTexture:new di(u.textureWidth,u.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let yt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Tn(m.framebufferWidth,m.framebufferHeight,{format:Ln,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),St.setContext(s),St.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function et(K){for(let mt=0;mt<K.removed.length;mt++){let yt=K.removed[mt],Pt=b.indexOf(yt);Pt>=0&&(b[Pt]=null,w[Pt].disconnect(yt))}for(let mt=0;mt<K.added.length;mt++){let yt=K.added[mt],Pt=b.indexOf(yt);if(Pt===-1){for(let Ut=0;Ut<w.length;Ut++)if(Ut>=b.length){b.push(yt),Pt=Ut;break}else if(b[Ut]===null){b[Ut]=yt,Pt=Ut;break}if(Pt===-1)break}let gt=w[Pt];gt&&gt.connect(yt)}}function V(K,mt){mt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(mt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let mt=K.near,yt=K.far;p.texture!==null&&(p.depthNear>0&&(mt=p.depthNear),p.depthFar>0&&(yt=p.depthFar)),G.near=L.near=R.near=mt,G.far=L.far=R.far=yt,(I!==G.near||H!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),I=G.near,H=G.far),G.layers.mask=K.layers.mask|6,R.layers.mask=G.layers.mask&-5,L.layers.mask=G.layers.mask&-3;let Pt=K.parent,gt=G.cameras;V(G,Pt);for(let Ut=0;Ut<gt.length;Ut++)V(gt[Ut],Pt);G.projectionMatrix.copy(R.projectionMatrix),G.projectionMatrixInverse.copy(R.projectionMatrixInverse),P===null&&K.isPerspectiveCamera&&(P={camera:K,fov:K.fov,zoom:K.zoom}),Z(K,G,Pt)};function Z(K,mt,yt){yt===null?K.matrix.copy(mt.matrixWorld):(K.matrix.copy(yt.matrixWorld),K.matrix.invert(),K.matrix.multiply(mt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(mt.projectionMatrix),K.projectionMatrixInverse.copy(mt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=na*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(G)},this.getCameraTexture=function(K){return f[K]};let nt=null;function Tt(K,mt){if(h=mt.getViewerPose(l||a),g=mt,h!==null){let yt=h.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let Pt=!1;yt.length!==G.cameras.length&&(G.cameras.length=0,Pt=!0);for(let Dt=0;Dt<yt.length;Dt++){let ae=yt[Dt],he=null;if(m!==null)he=m.getViewport(ae);else{let Ue=d.getViewSubImage(u,ae);he=Ue.viewport,Dt===0&&(t.setRenderTargetTextures(S,Ue.colorTexture,Ue.depthStencilTexture),t.setRenderTarget(S))}let Yt=U[Dt];Yt===void 0&&(Yt=new pn,Yt.layers.enable(Dt),Yt.viewport=new ge,U[Dt]=Yt),Yt.matrix.fromArray(ae.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(ae.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(he.x,he.y,he.width,he.height),Dt===0&&(G.matrix.copy(Yt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Pt===!0&&G.cameras.push(Yt)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let Dt=d.getDepthInformation(yt[0]);Dt&&Dt.isValid&&Dt.texture&&p.init(Dt,s.renderState)}if(gt&&gt.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let Dt=0;Dt<yt.length;Dt++){let ae=yt[Dt].camera;if(ae){let he=f[ae];he||(he=new Js,f[ae]=he);let Yt=d.getCameraImage(ae);he.sourceTexture=Yt}}}}for(let yt=0;yt<w.length;yt++){let Pt=b[yt],gt=w[yt];Pt!==null&&gt!==void 0&&gt.update(Pt,mt,l||a)}nt&&nt(K,mt),mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:mt}),g=null}let St=new Uh;St.setAnimationLoop(Tt),this.setAnimationLoop=function(K){nt=K},this.dispose=function(){}}},Wg=new qt,Xh=new Bt;Xh.set(-1,0,0,0,1,0,0,0,1);function Xg(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,wl(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,M,A,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),u(p,f),f.isMeshPhysicalMaterial&&m(p,f,S)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),y(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,M,A):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Qe&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Qe&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let M=t.get(f),A=M.envMap,S=M.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(Wg.makeRotationFromEuler(S)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Xh),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,M,A){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*M,p.scale.value=A*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,M){p.ior.value=f.ior,f.diffuseRoughness>0&&(p.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=f.diffuseRoughnessMap,e(f.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Qe&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function y(p,f){let M=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function qg(i,t,e,n){let s={},r={};function a(M,A){let S=A.program;n.uniformBlockBinding(M,S,s[M.id])}function o(M,A){let S=s[M.id];S===void 0&&(g(M),S=c(M),s[M.id]=S,M.addEventListener("dispose",p));let w=A.program;n.updateUBOMapping(M,w);let b=t.render.frame;r[M.id]!==b&&(l(M),r[M.id]=b)}function c(M){let A=i.createBuffer(),S=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,S,w),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function l(M){let A=s[M.id],S=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let b=0,_=S.length;b<_;b++){let E=S[b];if(Array.isArray(E))for(let P=0,R=E.length;P<R;P++)h(E[P],b,P,w);else h(E,b,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,A,S,w){if(u(M,A,S,w)===!0){let b=M.__offset,_=M.value;if(Array.isArray(_)){let E=0;for(let P=0;P<_.length;P++){let R=_[P],L=y(R,!0);d(R,M.__data,E),E+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,M.__data)}}function d(M,A,S){typeof M=="number"||typeof M=="boolean"?A[S]=M:M.isMatrix3?(A[S]=M.elements[0],A[S+1]=M.elements[1],A[S+2]=M.elements[2],A[S+3]=0,A[S+4]=M.elements[3],A[S+5]=M.elements[4],A[S+6]=M.elements[5],A[S+7]=0,A[S+8]=M.elements[6],A[S+9]=M.elements[7],A[S+10]=M.elements[8],A[S+11]=0):ArrayBuffer.isView(M)?A.set(M.subarray(0,A.length-S),S):M.toArray(A,S)}function u(M,A,S,w){let b=M.value,_=A+"_"+S;if(Array.isArray(b)){w[_]===void 0&&(w[_]=[]);let E=w[_],P=!1;for(let R=0;R<b.length;R++)m(b[R],E,R)===!0&&(P=!0);return P}return m(b,w,_)}function m(M,A,S){if(A[S]===void 0)return typeof M=="number"||typeof M=="boolean"?A[S]=M:ArrayBuffer.isView(M)?A[S]=M.slice():A[S]=M.clone(),!0;{let w=A[S];if(typeof M=="number"||typeof M=="boolean"){if(w!==M)return A[S]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(w.equals(M)===!1)return w.copy(M),!0}}return!1}function g(M){let A=M.uniforms,S=0,w=16;for(let _=0,E=A.length;_<E;_++){let P=Array.isArray(A[_])?A[_]:[A[_]];for(let R=0,L=P.length;R<L;R++){let U=P[R],G=Array.isArray(U.value)?U.value:[U.value],I=Array.isArray(A[_])||Array.isArray(U.value),H=S;for(let X=0,et=G.length;X<et;X++){let V=G[X],Z=y(V,I),nt=S%w,Tt=nt%Z.boundary,St=nt+Tt;S+=Tt,St!==0&&w-St<Z.storage&&(S+=w-St),X===0&&(H=S),S+=Z.storage}let Y=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new Y((S-H)/Float32Array.BYTES_PER_ELEMENT),U.__offset=H}}let b=S%w;return b>0&&(S+=w-b),M.__size=S,M.__cache={},this}function y(M,A){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=16,S.storage=48):M.isMatrix4?(S.boundary=16,S.storage=64):M.isTexture?Lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):Lt("WebGLRenderer: Unsupported uniform value type.",M),A===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function p(M){let A=M.target;A.removeEventListener("dispose",p),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function f(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:f}}var Yg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Kn=null;function Zg(){return Kn===null&&(Kn=new Xs(Yg,16,16,Li,Wn),Kn.name="DFG_LUT",Kn.minFilter=mn,Kn.magFilter=mn,Kn.wrapS=Yn,Kn.wrapT=Yn,Kn.generateMipmaps=!1,Kn.needsUpdate=!0),Kn}var po=class{constructor(t={}){let{canvas:e=rh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Sn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=m,p=new Set([Pa,Ia,Ca]),f=new Set([Sn,Vn,Ss,Xi,Aa,Ra]),M=new Uint32Array(4),A=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},w=null,b=null,_=[],E=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,U=null,G=null,I=null,H=null;this._outputColorSpace=We;let Y=0,X=0,et=null,V=-1,Z=null,nt=new ge,Tt=new ge,St=null,K=new Vt(0),mt=0,yt=e.width,Pt=e.height,gt=1,Ut=null,Te=null,Dt=new ge(0,0,yt,Pt),ae=new ge(0,0,yt,Pt),he=!1,Yt=new Ti,Ue=new aa,we=!1,nn=!1,$t=new qt,Je=new F,Pe=new ge,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},un=!1;function ke(){return et===null?gt:1}let N=n;function dn(v,D){return e.getContext(v,D)}let Ft,ue,ut,Ce,It,xt,T,x,O,st,Q,at,ht,J,$,ct,C,j,q,tt,ot,rt,Rt;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ct,!1),e.addEventListener("webglcontextrestored",kt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),N===null){let D="webgl2";if(N=dn(D,v),N===null)throw dn(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}zt()}catch(v){throw e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Ot("WebGLRenderer: "+v.message),v}function zt(){Ft=new rm(N),Ft.init(),ot=new Gg(N,Ft),ue=new Zp(N,Ft,t,ot),ut=new zg(N,Ft),ue.reversedDepthBuffer&&u&&ut.buffers.depth.setReversed(!0),G=N.createFramebuffer(),I=N.createFramebuffer(),H=N.createFramebuffer(),Ce=new lm(N),It=new Tg,xt=new kg(N,Ft,ut,It,ue,ot,Ce),T=new sm(R),x=new cd(N),rt=new qp(N,x),O=new am(N,x,Ce,rt),st=new hm(N,O,x,rt,Ce),j=new cm(N,ue,xt),$=new Jp(It),Q=new Eg(R,T,Ft,ue,rt,$),at=new Xg(R,It),ht=new Ag,J=new Dg(Ft),C=new Xp(R,T,ut,st,g,c),ct=new Bg(R,st,ue),Rt=new qg(N,Ce,ue,ut),q=new Yp(N,Ft,Ce),tt=new om(N,Ft,Ce),Ce.programs=Q.programs,R.capabilities=ue,R.extensions=Ft,R.properties=It,R.renderLists=ht,R.shadowMap=ct,R.state=ut,R.info=Ce}y!==Sn&&(P=new dm(y,e.width,e.height,o,s,r));let it=new zl(R,N);this.xr=it,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let v=Ft.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Ft.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(v){v!==void 0&&(gt=v,this.setSize(yt,Pt,!1))},this.getSize=function(v){return v.set(yt,Pt)},this.setSize=function(v,D,W=!0){if(it.isPresenting){Lt("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=v,Pt=D,e.width=Math.floor(v*gt),e.height=Math.floor(D*gt),W===!0&&(e.style.width=v+"px",e.style.height=D+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(yt*gt,Pt*gt).floor()},this.setDrawingBufferSize=function(v,D,W){yt=v,Pt=D,gt=W,e.width=Math.floor(v*W),e.height=Math.floor(D*W),this.setViewport(0,0,v,D)},this.setEffects=function(v){if(y===Sn){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let D=0;D<v.length;D++)if(v[D].isOutputPass===!0){Lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(nt)},this.getViewport=function(v){return v.copy(Dt)},this.setViewport=function(v,D,W,B){v.isVector4?Dt.set(v.x,v.y,v.z,v.w):Dt.set(v,D,W,B),ut.viewport(nt.copy(Dt).multiplyScalar(ke()).round())},this.getScissor=function(v){return v.copy(ae)},this.setScissor=function(v,D,W,B){v.isVector4?ae.set(v.x,v.y,v.z,v.w):ae.set(v,D,W,B),ut.scissor(Tt.copy(ae).multiplyScalar(ke()).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(v){ut.setScissorTest(he=v)},this.setOpaqueSort=function(v){Ut=v},this.setTransparentSort=function(v){Te=v},this.getClearColor=function(v){return v.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,W=!0){let B=0;if(v){let k=!1;if(et!==null){let ft=et.texture.format;k=p.has(ft)}if(k){let ft=et.texture.type,Mt=f.has(ft),dt=C.getClearColor(),vt=C.getClearAlpha(),wt=dt.r,Ht=dt.g,Qt=dt.b;Mt?(M[0]=wt,M[1]=Ht,M[2]=Qt,M[3]=vt,N.clearBufferuiv(N.COLOR,0,M)):(A[0]=wt,A[1]=Ht,A[2]=Qt,A[3]=vt,N.clearBufferiv(N.COLOR,0,A))}else B|=N.COLOR_BUFFER_BIT}D&&(B|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),C.dispose(),ht.dispose(),J.dispose(),xt.dispose(),It.dispose(),T.dispose(),st.dispose(),O.dispose(),rt.dispose(),Rt.dispose(),Q.dispose(),it.dispose(),it.removeEventListener("sessionstart",Nt),it.removeEventListener("sessionend",Gt),ie.stop()};function Ct(v){v.preventDefault(),El("WebGLRenderer: Context Lost."),L=!0}function kt(){El("WebGLRenderer: Context Restored."),L=!1;let v=Ce.autoReset,D=ct.enabled,W=ct.autoUpdate,B=ct.needsUpdate,k=ct.type;zt(),Ce.autoReset=v,ct.enabled=D,ct.autoUpdate=W,ct.needsUpdate=B,ct.type=k}function pt(v){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ce(v){let D=v.target;D.removeEventListener("dispose",ce),Ae(D)}function Ae(v){xn(v),It.remove(v)}function xn(v){let D=It.get(v).programs;D!==void 0&&(D.forEach(function(W){Q.releaseProgram(W)}),v.isShaderMaterial&&Q.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,W,B,k,ft){D===null&&(D=Fe);let Mt=k.isMesh&&k.matrixWorld.determinantAffine()<0,dt=fu(v,D,W,B,k);ut.setMaterial(B,Mt);let vt=W.index,wt=1;if(B.wireframe===!0){if(vt=O.getWireframeAttribute(W),vt===void 0)return;wt=2}let Ht=W.drawRange,Qt=W.attributes.position,bt=Ht.start*wt,jt=(Ht.start+Ht.count)*wt;ft!==null&&(bt=Math.max(bt,ft.start*wt),jt=Math.min(jt,(ft.start+ft.count)*wt)),vt!==null?(bt=Math.max(bt,0),jt=Math.min(jt,vt.count)):Qt!=null&&(bt=Math.max(bt,0),jt=Math.min(jt,Qt.count));let De=jt-bt;if(De<0||De===1/0)return;rt.setup(k,B,dt,W,vt);let ye,ve=q;if(vt!==null&&(ye=x.get(vt),ve=tt,ve.setIndex(ye)),k.isMesh)B.wireframe===!0?(ut.setLineWidth(B.wireframeLinewidth*ke()),ve.setMode(N.LINES)):ve.setMode(N.TRIANGLES);else if(k.isLine){let sn=B.linewidth;sn===void 0&&(sn=1),ut.setLineWidth(sn*ke()),k.isLineSegments?ve.setMode(N.LINES):k.isLineLoop?ve.setMode(N.LINE_LOOP):ve.setMode(N.LINE_STRIP)}else k.isPoints?ve.setMode(N.POINTS):k.isSprite&&ve.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(Ft.get("WEBGL_multi_draw"))ve.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let sn=k._multiDrawStarts,Et=k._multiDrawCounts,fn=k._multiDrawCount,fe=vt?x.get(vt).bytesPerElement:1,Fi=It.get(B).currentProgram.getUniforms();for(let rn=0;rn<fn;rn++)Fi.setValue(N,"_gl_DrawID",rn),ve.render(sn[rn]/fe,Et[rn])}else if(k.isInstancedMesh)ve.renderInstances(bt,De,k.count);else if(W.isInstancedBufferGeometry){let sn=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Et=Math.min(W.instanceCount,sn);ve.renderInstances(bt,De,Et)}else ve.render(bt,De)};function yr(v,D,W,B){U!==null&&v.isNodeMaterial&&U.setObject(B,v),we===!0&&$.setState(v,W,!1),v.transparent===!0&&v.side===Mn&&v.forceSinglePass===!1?(v.side=Qe,v.needsUpdate=!0,Ge(v,D,B),v.side=Pi,v.needsUpdate=!0,Ge(v,D,B),v.side=Mn):Ge(v,D,B)}this.compile=function(v,D,W=null){W===null&&(W=v),U!==null&&U.renderStart(v,D,W),b=J.get(W),b.init(D),E.push(b),W.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),v!==W&&v.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),b.setupLights(),U!==null&&U.updateLights(b.state.lightsArray),nn=this.localClippingEnabled,we=$.init(this.clippingPlanes,nn),we===!0&&$.setGlobalState(this.clippingPlanes,D),U!==null&&ct.render(b.state.shadowsArray,W,D);let B=new Set;return v.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let ft=k.material;if(ft)if(Array.isArray(ft))for(let Mt=0;Mt<ft.length;Mt++){let dt=ft[Mt];yr(dt,W,D,k),B.add(dt)}else yr(ft,W,D,k),B.add(ft)}),b=E.pop(),U!==null&&U.renderEnd(),B},this.compileAsync=function(v,D,W=null){let B=this.compile(v,D,W);return new Promise(k=>{function ft(){if(B.forEach(function(Mt){let vt=It.get(Mt).currentProgram;(vt===void 0||vt.isReady())&&B.delete(Mt)}),B.size===0){k(v);return}setTimeout(ft,10)}Ft.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let z=null;function lt(v){z&&z(v)}function Nt(){ie.stop()}function Gt(){ie.start()}let ie=new Uh;ie.setAnimationLoop(lt),typeof self<"u"&&ie.setContext(self),this.setAnimationLoop=function(v){z=v,it.setAnimationLoop(v),v===null?ie.stop():ie.start()},it.addEventListener("sessionstart",Nt),it.addEventListener("sessionend",Gt),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(v,D);let W=it.enabled===!0&&it.isPresenting===!0,B=P!==null&&(et===null||W)&&P.begin(R,et);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(D),D=it.getCamera()),v.isScene===!0&&v.onBeforeRender(R,v,D,et),b=J.get(v,E.length),b.init(D),b.state.textureUnits=xt.getTextureUnits(),E.push(b),$t.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?Ue.setFromArrayCamera(D):Yt.setFromProjectionMatrix($t,In,D.reversedDepth),nn=this.localClippingEnabled,we=$.init(this.clippingPlanes,nn),w=ht.get(v,_.length),w.init(),_.push(w),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let Mt=R.xr.getDepthSensingMesh();Mt!==null&&me(Mt,D,-1/0,R.sortObjects)}me(v,D,0,R.sortObjects),w.finish(),U!==null&&U.updateLights(b.state.lightsArray),R.sortObjects===!0&&w.sort(Ut,Te),un=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,un&&C.addToRenderList(w,v),this.info.autoReset===!0&&this.info.reset(),we===!0&&$.beginShadows();let k=b.state.shadowsArray;if(ct.render(k,v,D),we===!0&&$.endShadows(),(B&&P.hasRenderPass())===!1){let Mt=w.opaque,dt=w.transmissive;if(b.setupLights(),D.isArrayCamera){let vt=D.cameras;if(dt.length>0)for(let wt=0,Ht=vt.length;wt<Ht;wt++){let Qt=vt[wt];se(Mt,dt,v,Qt)}un&&C.render(v);for(let wt=0,Ht=vt.length;wt<Ht;wt++){let Qt=vt[wt];Le(w,v,Qt,Qt.viewport)}}else dt.length>0&&se(Mt,dt,v,D),un&&C.render(v),Le(w,v,D)}et!==null&&X===0&&(xt.updateMultisampleRenderTarget(et),xt.updateRenderTargetMipmap(et)),B&&P.end(R),v.isScene===!0&&v.onAfterRender(R,v,D),rt.resetDefaultState(),V=-1,Z=null,E.pop(),E.length>0?(b=E[E.length-1],xt.setTextureUnits(b.state.textureUnits),we===!0&&$.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,U!==null&&U.renderEnd()};function me(v,D,W,B){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)W=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){let Mt=D.isArrayCamera?Ue:Yt;if(!v.frustumCulled||v.intersectsFrustum(Mt)){B&&Pe.setFromMatrixPosition(v.matrixWorld).applyMatrix4($t);let dt=st.update(v),vt=v.material;vt.visible&&w.push(v,dt,vt,W,Pe.z,null,D)}}else if(v.isMesh||v.isLine||v.isPoints){let Mt=D.isArrayCamera?Ue:Yt;if(!v.frustumCulled||v.intersectsFrustum(Mt)){let dt=st.update(v),vt=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Pe.copy(v.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Pe.copy(dt.boundingSphere.center)),Pe.applyMatrix4(v.matrixWorld).applyMatrix4($t)),Array.isArray(vt)){let wt=dt.groups;for(let Ht=0,Qt=wt.length;Ht<Qt;Ht++){let bt=wt[Ht],jt=vt[bt.materialIndex];jt&&jt.visible&&w.push(v,dt,jt,W,Pe.z,bt,D)}}else vt.visible&&w.push(v,dt,vt,W,Pe.z,null,D)}}}let ft=v.children;for(let Mt=0,dt=ft.length;Mt<dt;Mt++)me(ft[Mt],D,W,B)}function Le(v,D,W,B){let{opaque:k,transmissive:ft,transparent:Mt}=v;b.setupLightsView(W),we===!0&&$.setGlobalState(R.clippingPlanes,W),B&&ut.viewport(nt.copy(B)),k.length>0&&Se(k,D,W),ft.length>0&&Se(ft,D,W),Mt.length>0&&Se(Mt,D,W),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function se(v,D,W,B){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[B.id]===void 0){let bt=Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[B.id]=new Tn(1,1,{generateMipmaps:!0,type:bt?Wn:Sn,minFilter:fi,samples:Math.max(4,ue.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}let ft=b.state.transmissionRenderTarget[B.id],Mt=B.viewport||nt;ft.setSize(Mt.z*R.transmissionResolutionScale,Mt.w*R.transmissionResolutionScale);let dt=R.getRenderTarget(),vt=R.getActiveCubeFace(),wt=R.getActiveMipmapLevel();R.setRenderTarget(ft),R.getClearColor(K),mt=R.getClearAlpha(),mt<1&&R.setClearColor(16777215,.5),R.clear(),un&&C.render(W);let Ht=R.toneMapping;R.toneMapping=$n;let Qt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),b.setupLightsView(B),we===!0&&$.setGlobalState(R.clippingPlanes,B),Se(v,W,B),xt.updateMultisampleRenderTarget(ft),xt.updateRenderTargetMipmap(ft),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let jt=0,De=D.length;jt<De;jt++){let ye=D[jt],{object:ve,geometry:sn,material:Et,group:fn}=ye;if(Et.side===Mn&&ve.layers.test(B.layers)){let fe=Et.side;Et.side=Qe,Et.needsUpdate=!0,de(ve,W,B,sn,Et,fn),Et.side=fe,Et.needsUpdate=!0,bt=!0}}bt===!0&&(xt.updateMultisampleRenderTarget(ft),xt.updateRenderTargetMipmap(ft))}R.setRenderTarget(dt,vt,wt),R.setClearColor(K,mt),Qt!==void 0&&(B.viewport=Qt),R.toneMapping=Ht}function Se(v,D,W){let B=D.isScene===!0?D.overrideMaterial:null;for(let k=0,ft=v.length;k<ft;k++){let Mt=v[k],{object:dt,geometry:vt,group:wt}=Mt,Ht=Mt.material;Ht.allowOverride===!0&&B!==null&&(Ht=B),dt.layers.test(W.layers)&&de(dt,D,W,vt,Ht,wt)}}function de(v,D,W,B,k,ft){U!==null&&k.isNodeMaterial&&U.setObject(v,k),v.onBeforeRender(R,D,W,B,k,ft),v.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),k.onBeforeRender(R,D,W,B,v,ft),k.transparent===!0&&k.side===Mn&&k.forceSinglePass===!1?(k.side=Qe,k.needsUpdate=!0,R.renderBufferDirect(W,D,B,k,v,ft),k.side=Pi,k.needsUpdate=!0,R.renderBufferDirect(W,D,B,k,v,ft),k.side=Mn):R.renderBufferDirect(W,D,B,k,v,ft),v.onAfterRender(R,D,W,B,k,ft)}function Wt(v){let D=0;for(let W of v)W.texture!==null&&D++;return D}function Ge(v,D,W){D.isScene!==!0&&(D=Fe);let B=It.get(v),k=b.state.lights,ft=b.state.shadowsArray,Mt=k.state.version,dt=Q.getParameters(v,k.state,ft,D,W,b.state.lightProbeGridArray),vt=Q.getProgramCacheKey(dt),wt=B.programs;B.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,B.fog=D.fog;let Ht=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;B.envMap=T.get(v.envMap||B.environment,Ht),B.envMapRotation=B.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,wt===void 0&&(v.addEventListener("dispose",ce),wt=new Map,B.programs=wt,B.programVariants=new Map);let Qt=wt.get(vt);if(Qt!==void 0){if(B.currentProgram===Qt&&B.lightsStateVersion===Mt)return Sr(v,dt),Qt}else dt.uniforms=Q.getUniforms(v),U!==null&&v.isNodeMaterial&&U.build(v,W,dt),v.onBeforeCompile(dt,R),Qt=Q.acquireProgram(dt,vt),wt.set(vt,Qt),B.uniforms=dt.uniforms;let bt=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(bt.clippingPlanes=$.uniform),Sr(v,dt),B.needsLights=mu(v),B.lightsStateVersion=Mt,B.needsLights&&(bt.ambientLightColor.value=k.state.ambient,bt.lightProbe.value=k.state.probe,bt.sunLights.value=k.state.sun,bt.sunLightShadows.value=k.state.sunShadow,bt.directionalLights.value=k.state.directional,bt.directionalLightShadows.value=k.state.directionalShadow,bt.spotLights.value=k.state.spot,bt.spotLightShadows.value=k.state.spotShadow,bt.rectAreaLights.value=k.state.rectArea,bt.ltc_1.value=k.state.rectAreaLTC1,bt.ltc_2.value=k.state.rectAreaLTC2,bt.pointLights.value=k.state.point,bt.pointLightShadows.value=k.state.pointShadow,bt.hemisphereLights.value=k.state.hemi,bt.sunShadowMatrix.value=k.state.sunShadowMatrix,bt.sunShadowCascade.value=k.state.sunShadowCascade,bt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,bt.spotLightMatrix.value=k.state.spotLightMatrix,bt.spotLightMap.value=k.state.spotLightMap,bt.pointShadowMatrix.value=k.state.pointShadowMatrix),B.numLightProbeGrids=Wt(b.state.lightProbeGridArray),B.currentProgram=Qt,B.uniformsList=null,Qt}function ti(v,D,W,B,k){let ft=It.get(v),Mt=ft.currentProgram.id+","+B+","+k,dt=ft.programVariants.get(Mt);return dt===void 0?(dt=Ge(v,D,W),ft.programVariants.set(Mt,dt)):(ft.currentProgram=dt,ft.uniformsList=null,ft.outputColorSpace=B,ft.toneMapping=k),dt}function Mr(v){if(v.uniformsList===null){let D=v.currentProgram.getUniforms();v.uniformsList=Es.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function Sr(v,D){let W=It.get(v);W.outputColorSpace=D.outputColorSpace,W.batching=D.batching,W.batchingColor=D.batchingColor,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.instancingMorph=D.instancingMorph,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function fu(v,D,W,B,k){D.isScene!==!0&&(D=Fe),xt.resetTextureUnits();let ft=D.fog,Mt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?D.environment:null,dt=et===null?R.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:te.workingColorSpace,vt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,wt=T.get(B.envMap||Mt,vt),Ht=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Qt=!!W.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),bt=!!W.morphAttributes.position,jt=!!W.morphAttributes.normal,De=!!W.morphAttributes.color,ye=$n;B.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ye=R.toneMapping);let ve=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,sn=ve!==void 0?ve.length:0,Et=It.get(B),fn=b.state.lights;if(we===!0&&(nn===!0||v!==Z)){let be=v===Z&&B.id===V;$.setState(B,v,be)}let fe=!1,Fi=!1;B.version===Et.__version?Et.needsLights&&Et.lightsStateVersion!==fn.state.version||k.isBatchedMesh&&Et.batching===!1||!k.isBatchedMesh&&Et.batching===!0||k.isBatchedMesh&&Et.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Et.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Et.instancing===!1||!k.isInstancedMesh&&Et.instancing===!0||k.isSkinnedMesh&&Et.skinning===!1||!k.isSkinnedMesh&&Et.skinning===!0||k.isInstancedMesh&&Et.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Et.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Et.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Et.instancingMorph===!1&&k.morphTexture!==null||Et.envMap!==wt||B.fog===!0&&Et.fog!==ft||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==$.numPlanes||Et.numIntersection!==$.numIntersection)||Et.vertexAlphas!==Ht||Et.vertexTangents!==Qt||Et.morphTargets!==bt||Et.morphNormals!==jt||Et.morphColors!==De||Et.morphTargetsCount!==sn||Et.numLightProbeGrids!==Wt(b.state.lightProbeGridArray)?fe=!0:(Et.outputColorSpace!==dt||Et.toneMapping!==ye)&&(Fi=!0):(fe=!0,Et.__version=B.version);let rn=Et.currentProgram;(fe===!0||Fi===!0)&&(rn=Fi===!0?ti(B,D,k,dt,ye):Ge(B,D,k),U&&B.isNodeMaterial&&U.onUpdateProgram(B,rn,Et));let br=!1,gi=!1,Oi=!1,oe=rn.getUniforms(),$e=Et.uniforms;if(ut.useProgram(rn.program)&&(br=!0,gi=!0,Oi=!0),B.id!==V&&(V=B.id,gi=!0),br||Z!==v){ut.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),oe.setValue(N,"projectionMatrix",v.projectionMatrix),oe.setValue(N,"viewMatrix",v.matrixWorldInverse);let He=oe.map.cameraPosition;He!==void 0&&He.setValue(N,Je.setFromMatrixPosition(v.matrixWorld)),ue.logarithmicDepthBuffer&&oe.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&oe.setValue(N,"isOrthographic",v.isOrthographicCamera===!0),Z!==v&&(Z=v,gi=!0,Oi=!0)}if(Et.needsLights&&(fn.state.sunShadowMap.length>0&&oe.setValue(N,"sunShadowMap",fn.state.sunShadowMap,xt),fn.state.directionalShadowMap.length>0&&oe.setValue(N,"directionalShadowMap",fn.state.directionalShadowMap,xt),fn.state.spotShadowMap.length>0&&oe.setValue(N,"spotShadowMap",fn.state.spotShadowMap,xt),fn.state.pointShadowMap.length>0&&oe.setValue(N,"pointShadowMap",fn.state.pointShadowMap,xt)),k.isSkinnedMesh){oe.setOptional(N,k,"bindMatrix"),oe.setOptional(N,k,"bindMatrixInverse");let be=k.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),oe.setValue(N,"boneTexture",be.boneTexture,xt))}k.isBatchedMesh&&(oe.setOptional(N,k,"batchingTexture"),oe.setValue(N,"batchingTexture",k._matricesTexture,xt),oe.setOptional(N,k,"batchingIdTexture"),oe.setValue(N,"batchingIdTexture",k._indirectTexture,xt),oe.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&oe.setValue(N,"batchingColorTexture",k._colorsTexture,xt));let Nn=W.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&j.update(k,W,rn),(gi||Et.receiveShadow!==k.receiveShadow)&&(Et.receiveShadow=k.receiveShadow,oe.setValue(N,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&D.environment!==null&&($e.envMapIntensity.value=D.environmentIntensity),$e.dfgLUT!==void 0&&($e.dfgLUT.value=Zg()),gi){if(oe.setValue(N,"toneMappingExposure",R.toneMappingExposure),Et.needsLights&&pu($e,Oi),ft&&B.fog===!0&&at.refreshFogUniforms($e,ft),at.refreshMaterialUniforms($e,B,gt,Pt,b.state.transmissionRenderTarget[v.id]),Et.needsLights&&Et.numLightProbeGrids>0){let be=S,He=0;for(let ei of b.state.lightProbeGridArray)ei.texture!==null&&(be.textures[He]=ei.texture,be.min[He]=ei.boundingBox.min,be.max[He]=ei.boundingBox.max,be.resolution[He]=ei.resolution,He++);for(let ei in be)be[ei].length=He;$e.probesSH.value=be.textures,$e.probesMin.value=be.min,$e.probesMax.value=be.max,$e.probesResolution.value=be.resolution}Es.upload(N,Mr(Et),$e,xt)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Es.upload(N,Mr(Et),$e,xt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&oe.setValue(N,"center",k.center),oe.setValue(N,"modelViewMatrix",k.modelViewMatrix),oe.setValue(N,"normalMatrix",k.normalMatrix),oe.setValue(N,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){let be=B.uniformsGroups;for(let He=0,ei=be.length;He<ei;He++){let Kl=be[He];Rt.update(Kl,rn),Rt.bind(Kl,rn)}}return rn}function pu(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.sunLights.needsUpdate=D,v.sunLightShadows.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function mu(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(v,D,W){let B=It.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),It.get(v.texture).__webglTexture=D,It.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:W,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){let W=It.get(v);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,W=0){et=v,Y=D,X=W;let B=null,k=!1,ft=!1;if(v){let dt=It.get(v);if(dt.__useDefaultFramebuffer!==void 0){ut.bindFramebuffer(N.FRAMEBUFFER,dt.__webglFramebuffer),nt.copy(v.viewport),Tt.copy(v.scissor),St=v.scissorTest,ut.viewport(nt),ut.scissor(Tt),ut.setScissorTest(St),V=-1;return}else if(dt.__webglFramebuffer===void 0)xt.setupRenderTarget(v);else if(dt.__hasExternalTextures)xt.rebindTextures(v,It.get(v.texture).__webglTexture,It.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ht=v.depthTexture;if(dt.__boundDepthTexture!==Ht){if(Ht!==null&&It.has(Ht)&&(v.width!==Ht.image.width||v.height!==Ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");xt.setupDepthRenderbuffer(v)}}let vt=v.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(ft=!0);let wt=It.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(wt[D])?B=wt[D][W]:B=wt[D],k=!0):v.samples>0&&xt.useMultisampledRTT(v)===!1?B=It.get(v).__webglMultisampledFramebuffer:Array.isArray(wt)?B=wt[W]:B=wt,nt.copy(v.viewport),Tt.copy(v.scissor),St=v.scissorTest}else nt.copy(Dt).multiplyScalar(gt).floor(),Tt.copy(ae).multiplyScalar(gt).floor(),St=he;if(W!==0&&(B=G),ut.bindFramebuffer(N.FRAMEBUFFER,B)&&ut.drawBuffers(v,B),ut.viewport(nt),ut.scissor(Tt),ut.setScissorTest(St),k){let dt=It.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,dt.__webglTexture,W)}else if(ft){let dt=D;for(let vt=0;vt<v.textures.length;vt++){let wt=It.get(v.textures[vt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+vt,wt.__webglTexture,W,dt)}}else if(v!==null&&W!==0){let dt=It.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,dt.__webglTexture,W)}V=-1};function $l(v){let D=It.get(v);return(D.__readFormat!==v.format||D.__readType!==v.type)&&(D.__readFormat=v.format,D.__readType=v.type,D.__formatReadable=ue.textureFormatReadable(v.format),D.__typeReadable=ue.textureTypeReadable(v.type)),D}this.readRenderTargetPixels=function(v,D,W,B,k,ft,Mt,dt=0){if(!(v&&v.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=It.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Mt!==void 0&&(vt=vt[Mt],Array.isArray(vt)&&(vt=vt[0])),vt){ut.bindFramebuffer(N.FRAMEBUFFER,vt);try{let wt=v.textures[dt],Ht=wt.format,Qt=wt.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+dt);let bt=$l(wt);if(bt.__formatReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(bt.__typeReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-B&&W>=0&&W<=v.height-k&&N.readPixels(D,W,B,k,ot.convert(Ht),ot.convert(Qt),ft)}finally{let wt=et!==null?It.get(et).__webglFramebuffer:null;ut.bindFramebuffer(N.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(v,D,W,B,k,ft,Mt,dt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=It.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Mt!==void 0&&(vt=vt[Mt],Array.isArray(vt)&&(vt=vt[0])),vt)if(D>=0&&D<=v.width-B&&W>=0&&W<=v.height-k){ut.bindFramebuffer(N.FRAMEBUFFER,vt);let wt=v.textures[dt],Ht=wt.format,Qt=wt.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+dt);let bt=$l(wt);if(bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let jt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,jt),N.bufferData(N.PIXEL_PACK_BUFFER,ft.byteLength,N.STREAM_READ),N.readPixels(D,W,B,k,ot.convert(Ht),ot.convert(Qt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let De=et!==null?It.get(et).__webglFramebuffer:null;ut.bindFramebuffer(N.FRAMEBUFFER,De);let ye=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await oh(N,ye,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,jt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ft),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(jt),N.deleteSync(ye),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,W=0){let B=Math.pow(2,-W),k=Math.floor(v.image.width*B),ft=Math.floor(v.image.height*B),Mt=D!==null?D.x:0,dt=D!==null?D.y:0;xt.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,Mt,dt,k,ft),ut.unbindTexture()},this.copyTextureToTexture=function(v,D,W=null,B=null,k=0,ft=0){let Mt,dt,vt,wt,Ht,Qt,bt,jt,De,ye=v.isCompressedTexture?v.mipmaps[ft]:v.image;if(W!==null)Mt=W.max.x-W.min.x,dt=W.max.y-W.min.y,vt=W.isBox3?W.max.z-W.min.z:1,wt=W.min.x,Ht=W.min.y,Qt=W.isBox3?W.min.z:0;else{let oe=Math.pow(2,-k);Mt=Math.floor(ye.width*oe),dt=Math.floor(ye.height*oe),v.isDataArrayTexture?vt=ye.depth:v.isData3DTexture?vt=Math.floor(ye.depth*oe):vt=1,wt=0,Ht=0,Qt=0}B!==null?(bt=B.x,jt=B.y,De=B.z):(bt=0,jt=0,De=0);let ve=ot.convert(D.format),sn=ot.convert(D.type),Et;D.isData3DTexture?(xt.setTexture3D(D,0),Et=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(xt.setTexture2DArray(D,0),Et=N.TEXTURE_2D_ARRAY):(xt.setTexture2D(D,0),Et=N.TEXTURE_2D),ut.activeTexture(N.TEXTURE0),ut.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),ut.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),ut.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let fn=ut.getParameter(N.UNPACK_ROW_LENGTH),fe=ut.getParameter(N.UNPACK_IMAGE_HEIGHT),Fi=ut.getParameter(N.UNPACK_SKIP_PIXELS),rn=ut.getParameter(N.UNPACK_SKIP_ROWS),br=ut.getParameter(N.UNPACK_SKIP_IMAGES);ut.pixelStorei(N.UNPACK_ROW_LENGTH,ye.width),ut.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ye.height),ut.pixelStorei(N.UNPACK_SKIP_PIXELS,wt),ut.pixelStorei(N.UNPACK_SKIP_ROWS,Ht),ut.pixelStorei(N.UNPACK_SKIP_IMAGES,Qt);let gi=v.isDataArrayTexture||v.isData3DTexture,Oi=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){let oe=It.get(v),$e=It.get(D),Nn=It.get(oe.__renderTarget),be=It.get($e.__renderTarget);ut.bindFramebuffer(N.READ_FRAMEBUFFER,Nn.__webglFramebuffer),ut.bindFramebuffer(N.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let He=0;He<vt;He++)gi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,It.get(v).__webglTexture,k,Qt+He),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,It.get(D).__webglTexture,ft,De+He)),N.blitFramebuffer(wt,Ht,wt+Mt,Ht+dt,bt,jt,bt+Mt,jt+dt,N.DEPTH_BUFFER_BIT,N.NEAREST);ut.bindFramebuffer(N.READ_FRAMEBUFFER,null),ut.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(k!==0||v.isRenderTargetTexture||It.has(v)){let oe=It.get(v),$e=It.get(D);ut.bindFramebuffer(N.READ_FRAMEBUFFER,I),ut.bindFramebuffer(N.DRAW_FRAMEBUFFER,H);for(let Nn=0;Nn<vt;Nn++)gi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,oe.__webglTexture,k,Qt+Nn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,oe.__webglTexture,k),Oi?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$e.__webglTexture,ft,De+Nn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,$e.__webglTexture,ft),k!==0?N.blitFramebuffer(wt,Ht,wt+Mt,Ht+dt,bt,jt,bt+Mt,jt+dt,N.COLOR_BUFFER_BIT,N.NEAREST):Oi?N.copyTexSubImage3D(Et,ft,bt,jt,De+Nn,wt,Ht,Mt,dt):N.copyTexSubImage2D(Et,ft,bt,jt,wt,Ht,Mt,dt);ut.bindFramebuffer(N.READ_FRAMEBUFFER,null),ut.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Oi?v.isDataTexture||v.isData3DTexture?N.texSubImage3D(Et,ft,bt,jt,De,Mt,dt,vt,ve,sn,ye.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(Et,ft,bt,jt,De,Mt,dt,vt,ve,ye.data):N.texSubImage3D(Et,ft,bt,jt,De,Mt,dt,vt,ve,sn,ye):v.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ft,bt,jt,Mt,dt,ve,sn,ye.data):v.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ft,bt,jt,ye.width,ye.height,ve,ye.data):N.texSubImage2D(N.TEXTURE_2D,ft,bt,jt,Mt,dt,ve,sn,ye);ut.pixelStorei(N.UNPACK_ROW_LENGTH,fn),ut.pixelStorei(N.UNPACK_IMAGE_HEIGHT,fe),ut.pixelStorei(N.UNPACK_SKIP_PIXELS,Fi),ut.pixelStorei(N.UNPACK_SKIP_ROWS,rn),ut.pixelStorei(N.UNPACK_SKIP_IMAGES,br),ft===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&N.generateMipmap(Et),ut.unbindTexture()},this.initRenderTarget=function(v){It.get(v).__webglFramebuffer===void 0&&xt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?xt.setTextureCube(v,0):v.isData3DTexture?xt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?xt.setTexture2DArray(v,0):xt.setTexture2D(v,0),ut.unbindTexture()},this.resetState=function(){Y=0,X=0,et=null,ut.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};function Yh(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new _n;c.morphTargetsRelative=o;let l=0;for(let h=0;h<i.length;++h){let d=i[h],u=0,m=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in d.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(d.attributes[g]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in d.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[g].length!==i[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;a[g]===void 0&&(a[g]=[]),a[g].push(d.morphAttributes[g]),m++}if(m!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let g;if(e)g=d.index.count;else if(d.attributes.position!==void 0)g=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,g,h),l+=g}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let m=i[u].index;for(let g=0;g<m.count;++g)d.push(m.getX(g)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=qh(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let m=[];for(let y=0;y<a[h].length;++y)m.push(a[h][y][u]);let g=qh(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function qh(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new ln(a,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/e;for(let u=0,m=h.count;u<m;u++)for(let g=0;g<e;g++){let y=h.getComponent(u,g);o.setComponent(u+d,g,y)}}else a.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var Xn=Math.PI*2,Ee=(i,t,e)=>Math.max(t,Math.min(e,i)),At=(i,t,e)=>i+(t-i)*e,je=(i,t,e,n)=>i+(t-i)*(1-Math.exp(-e*n)),Zh=(i,t)=>((t-i+Math.PI)%Xn+Xn)%Xn-Math.PI,Re=i=>(i=Ee(i,0,1),i*i*(3-2*i)),Rn=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)},Zt={ok:!1,q:2,ready:!1,pk:1.2};typeof window<"u"&&(window.View3D=Zt);var ql=1.2,hn,ee,le,xr,Jt,Yl,re,cu,jn,Ze,Ye,Di,An,Jh,Ie,ze,Dn=new Map;Zt.men=Dn;var Zi,ws,$h=new qe;var hu=[],Zl=[],Kh=0,Ni=0,_o=[0,0],uu=-1;var Ji={v1:new F,v2:new F,v3:new F,q1:new qe,m1:new qt,m2:new qt};function Ui(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function vr(i,t){let e=new wi(i);return e.colorSpace=We,e.anisotropy=Math.min(8,jn.capabilities.getMaxAnisotropy()),t&&(e.wrapS=e.wrapT=li,e.repeat.set(t[0],t[1])),e}function $g(){let i=Zt.q>1?2048:1280,t=Math.round(i*ze/Ie),e=i/Ie,n=Ui(i,t),s=n.getContext("2d"),r=14,a=i/r;for(let g=0;g<r;g++)s.fillStyle=g%2?"#3d9b47":"#358f3f",s.fillRect(g*a,0,a+1,t);for(let g=0;g<26e3;g++){let y=Math.random()*i,p=Math.random()*t,f=3+Math.random()*7;s.strokeStyle=Math.random()<.5?"rgba(20,70,25,.10)":"rgba(120,200,100,.08)",s.lineWidth=1,s.beginPath(),s.moveTo(y,p),s.lineTo(y+(Math.random()-.5)*3,p-f),s.stroke()}for(let g=0;g<70;g++){let y=Math.random()*i,p=Math.random()*t,f=25+Math.random()*60,M=s.createRadialGradient(y,p,0,y,p,f);M.addColorStop(0,"rgba(255,255,255,.035)"),M.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=M,s.fillRect(y-f,p-f,2*f,2*f)}let o=g=>g/Jt*e,c=Math.max(2,.13*e);s.strokeStyle="rgba(255,255,255,.93)",s.fillStyle="rgba(255,255,255,.93)",s.lineWidth=c,s.lineCap="butt";let l=(g,y,p,f)=>s.strokeRect(o(g),o(y),o(p-g),o(f-y)),h=re.PW,d=re.PH,u=re.CY;l(0,0,h,d),s.beginPath(),s.moveTo(o(h/2),0),s.lineTo(o(h/2),t),s.stroke(),s.beginPath(),s.arc(o(h/2),o(u),o(re.CIRCLE_R),0,Xn),s.stroke(),s.beginPath(),s.arc(o(h/2),o(u),c*.9,0,Xn),s.fill(),l(0,u-re.BOXH,re.BOXD,u+re.BOXH),l(h-re.BOXD,u-re.BOXH,h,u+re.BOXH),l(0,u-re.SIXH,re.SIXD,u+re.SIXH),l(h-re.SIXD,u-re.SIXH,h,u+re.SIXH);for(let g of[0,1]){let y=g?h-re.PSPOT:re.PSPOT,p=g?-1:1,f=Math.acos((re.BOXD-re.PSPOT)/re.DARC);s.beginPath();for(let M=0;M<=28;M++){let A=-f+2*f*M/28,S=y+p*Math.cos(A)*re.DARC,w=u+Math.sin(A)*re.DARC;M?s.lineTo(o(S),o(w)):s.moveTo(o(S),o(w))}s.stroke(),s.beginPath(),s.arc(o(y),o(u),c*.9,0,Xn),s.fill()}let m=.9*e;for(let[g,y,p]of[[0,0,0],[h,0,Math.PI/2],[h,d,Math.PI],[0,d,Math.PI*1.5]])s.beginPath(),s.arc(o(g),o(y),m,p,p+Math.PI/2),s.stroke();return vr(n)}function Kg(){let i=Ui(256,256),t=i.getContext("2d");t.fillStyle="#2b7434",t.fillRect(0,0,256,256);for(let e=0;e<1800;e++){t.strokeStyle=Math.random()<.5?"rgba(15,60,20,.2)":"rgba(130,200,100,.12)";let n=Math.random()*256,s=Math.random()*256;t.beginPath(),t.moveTo(n,s),t.lineTo(n+1,s-4-Math.random()*4),t.stroke()}return vr(i,[60,40])}function Qg(i){let n=Ui(1024,256),s=n.getContext("2d");s.fillStyle="#1b1b24",s.fillRect(0,0,1024,256);let r=["#d9d9d9","#e5262b","#1e6bff","#f2c94c","#2b2b2b","#6fbf73","#ffffff","#f08a24","#9b59b6"],a=14,o=256/a;for(let l=0;l<a;l++){s.fillStyle=`rgba(0,0,0,${.18+l%2*.08})`,s.fillRect(0,l*o+o*.62,1024,o*.38);for(let h=4;h<1024;h+=13+(Rn(l*91+h+i)*5|0)){let d=r[Rn(h*7+l*13+i)*r.length|0],u=l*o+o*.28;s.fillStyle=d,s.fillRect(h-4,u+5,9,o*.55),s.fillStyle=Rn(h+l*3+i)<.3?"#6b4a32":"#e0b08a",s.beginPath(),s.arc(h,u+2,3.3,0,Xn),s.fill()}}let c=vr(n);return c.wrapS=li,c}function jg(){let i=Ui(1024,64),t=i.getContext("2d"),e=["#d62f2f","#f5f5f5","#2f6fd6","#f5c518","#1c1c1c","#2ea84f"];for(let n=0;n<8;n++){let s=n*128;t.fillStyle=e[n%e.length],t.fillRect(s,0,128,64),t.fillStyle=n%e.length===1||n%e.length===3?"#222":"#fff",t.font="bold 30px sans-serif",t.textAlign="center",t.fillText(["SAHA","KRALI","SPOR","L\u0130G","GOL","FUTBOL","KUPA","DERB\u0130"][n],s+64,43)}return vr(i)}function t0(){let i=Ui(64,64),t=i.getContext("2d");return t.strokeStyle="rgba(255,255,255,.85)",t.lineWidth=3,t.strokeRect(0,0,64,64),vr(i)}function e0(i,t,e){let n=Ui(128,128),s=n.getContext("2d");s.fillStyle=t,s.fillRect(0,0,128,128),s.fillStyle=e,s.font="bold 84px sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(String(i),64,70);let r=new wi(n);return r.colorSpace=We,r}function n0(){let i=Ui(256,128),t=i.getContext("2d");t.fillStyle="#f6f6f6",t.fillRect(0,0,256,128),t.fillStyle="#1a1a1a";let e=(s,r,a)=>{t.beginPath();for(let o=0;o<5;o++){let c=-Math.PI/2+o*Xn/5;o?t.lineTo(s+Math.cos(c)*a,r+Math.sin(c)*a):t.moveTo(s+Math.cos(c)*a,r+Math.sin(c)*a)}t.closePath(),t.fill()};for(let s=0;s<6;s++)e(s*43+20,30,13);for(let s=0;s<6;s++)e(s*43+42,98,13);e(128,8,9),e(128,120,9);let n=new wi(i);return n.colorSpace=We,n}function i0(){let i=new xe(new Hn(Ie,ze),new yn({map:$g(),roughness:.95,metalness:0}));i.rotation.x=-Math.PI/2,i.position.set(Ie/2,0,ze/2),i.receiveShadow=!0,Ze.add(i);let t=new xe(new Hn(420,320),new yn({map:Kg(),roughness:1}));t.rotation.x=-Math.PI/2,t.position.set(Ie/2,-.03,ze/2),t.receiveShadow=!0,Ze.add(t)}function Qh(i){let t=new zn,e=re.GY0/Jt,n=re.GY1/Jt,s=re.GH/Jt,r=re.GD/Jt,a=i?1:-1,o=new yn({color:16053492,roughness:.35,metalness:.25}),c=.06,l=(M,A,S)=>{let w=new F().subVectors(A,M),b=new xe(new _s(S,S,w.length(),10),o);b.position.copy(M).addScaledVector(w,.5),b.quaternion.setFromUnitVectors(new F(0,1,0),w.normalize()),b.castShadow=!0,t.add(b)},h=i?Ie:0,d=(M,A,S)=>new F(h+a*M,A,S);l(d(0,0,e),d(0,s,e),c),l(d(0,0,n),d(0,s,n),c),l(d(0,s,e),d(0,s,n),c);let u=r*.9;l(d(0,s,e),d(u,s*.85,e),.035),l(d(0,s,n),d(u,s*.85,n),.035),l(d(u,s*.85,e),d(u,0,e),.035),l(d(u,s*.85,n),d(u,0,n),.035),l(d(u,s*.85,e),d(u,s*.85,n),.035);let m=t0(),g=new Gn({map:m,transparent:!0,opacity:.5,side:Mn,depthWrite:!1}),y=(M,A,S)=>{let w=m.clone();return w.needsUpdate=!0,w.wrapS=w.wrapT=li,w.repeat.set(S[0],S[1]),new xe(new Hn(M,A),new Gn({map:w,transparent:!0,opacity:.5,side:Mn,depthWrite:!1}))},p=y(n-e,s*.85,[(n-e)/.14,s*.85/.14]);p.position.copy(d(u,s*.425,(e+n)/2)),p.rotation.y=Math.PI/2,t.add(p);for(let M of[e,n]){let A=y(u,s*.9,[u/.14,s/.14]);A.position.copy(d(u/2,s*.45,M)),t.add(A)}let f=y(u,n-e,[u/.14,(n-e)/.14]);f.rotation.x=Math.PI/2,f.position.copy(d(u/2,s*.93,(e+n)/2)),t.add(f),Ze.add(t)}function s0(){let i=new yn({color:2764086,roughness:.9}),t=new yn({color:5593702,roughness:.95}),e=jg(),n=new yn({map:e,emissive:16777215,emissiveMap:e,emissiveIntensity:.75,roughness:.6}),s=3.4,r=Ie+2*s,a=ze+2*s;for(let[S,w,b,_,E]of[[Ie/2,-s,r,.15,0],[Ie/2,ze+s,r,.15,0],[-s,ze/2,a,.15,Math.PI/2],[Ie+s,ze/2,a,.15,Math.PI/2]]){let P=new vn(b,.95,_),R=P.attributes.uv;for(let U=0;U<R.count;U++)R.setX(U,R.getX(U)*b/16);let L=new xe(P,n.clone());L.material.map=e.clone(),L.material.map.wrapS=li,L.material.map.needsUpdate=!0,L.material.emissiveMap=L.material.map,L.position.set(S,.475,w),L.rotation.y=E,Ze.add(L)}let o=15,c=17,l=33*Math.PI/180,h=7.5,d=Zt.q>1?4:2,u=(S,w,b,_,E)=>{let P=new zn,R=Qg(E*17);R.repeat.set(S/22,1),Zl.push(R);let L=new yn({map:R,emissive:16777215,emissiveMap:R,emissiveIntensity:.55,roughness:1,side:Mn}),U=new xe(new Hn(S,c),L);U.rotation.x=-(Math.PI/2-l),U.position.set(0,Math.sin(l)*c/2+1.1,-Math.cos(l)*c/2),P.add(U);let G=new xe(new vn(S,1.2,1.2),t);G.position.set(0,.6,.1),P.add(G);let I=new xe(new vn(S,Math.sin(l)*c+6,.6),i);I.position.set(0,(Math.sin(l)*c+6)/2,-Math.cos(l)*c-.3),P.add(I);let H=new xe(new vn(S,.5,c*.85),i);H.position.set(0,Math.sin(l)*c+6.2,-Math.cos(l)*c*.55),H.rotation.x=.06,P.add(H),P.position.set(w,0,b),P.rotation.y=_,Ze.add(P),hu.push({g:P,ox:w,oz:b,yaw:_})},m=10;u(Ie+2*m+30,Ie/2,-h,0,0),u(Ie+2*m+30,Ie/2,ze+h,Math.PI,1),u(ze+30,-h-4,ze/2,Math.PI/2,2),u(ze+30,Ie+h+4,ze/2,-Math.PI/2,3);let g=new Gn({color:16776168});for(let[S,w]of[[-14,-14],[Ie+14,-14],[-14,ze+14],[Ie+14,ze+14]]){let b=new xe(new vn(.8,34,.8),i);b.position.set(S,17,w),Ze.add(b);let _=new xe(new vn(7,4.5,.5),g);_.position.set(S,35,w),_.lookAt(Ie/2,20,ze/2),Ze.add(_)}let y=Ui(8,256),p=y.getContext("2d"),f=p.createLinearGradient(0,0,0,256);f.addColorStop(0,"#05070f"),f.addColorStop(.55,"#0f1830"),f.addColorStop(1,"#2a3a5c"),p.fillStyle=f,p.fillRect(0,0,8,256);let M=new wi(y);M.colorSpace=We;let A=new xe(new Ai(450,24,16),new Gn({map:M,side:Qe,fog:!1}));A.position.set(Ie/2,0,ze/2),Ze.add(A)}var kl=["#f1c8a5","#e0a97d","#c68863","#9a6a46","#6e4a30"],Gl=["#1a1410","#3a2616","#6b4423","#c9a24b","#0e0e0e","#8a8a8a"],r0=["hips","spine","neck","head","shL","elL","shR","elR","thL","knL","anL","thR","knR","anR"],Jl=1,xo=1.12,vo=.46,yo=.44,Hl=null;function a0(i,t){let e={},n={},s=(b,_,E,P,R)=>{let L=new ms;return L.name=b,L.position.set(E,P,R),_&&_.add(L),e[b]=L,n[b]=Object.keys(e).length-1,L};s("hips",null,0,Jl,0),s("spine",e.hips,0,.06,0),s("neck",e.spine,0,.62,0),s("head",e.neck,0,.11,0),s("shL",e.spine,.215,.54,0),s("elL",e.shL,0,-.3,0),s("shR",e.spine,-.215,.54,0),s("elR",e.shR,0,-.3,0),s("thL",e.hips,.09,-.04,0),s("knL",e.thL,0,-vo,0),s("anL",e.knL,0,-yo,0),s("thR",e.hips,-.09,-.04,0),s("knR",e.thR,0,-vo,0),s("anR",e.knR,0,-yo,0),e.hips.updateMatrixWorld(!0);let r=[],a=(b,_,E,P,R,L)=>{r.push({geo:b,bone:_,col:E,pos:P||[0,0,0],rot:R||[0,0,0],scl:L||[1,1,1]})},o=(b,_,E=4,P=10)=>new $s(b,_,E,P),c=(b,_=12,E=9)=>new Ai(b,_,E),l=(b,_,E,P=10)=>new _s(b,_,E,P),h=i.skin,d=i.shirt,u=i.shorts,m=i.sock,g="#14141a",y=i.hair;a(o(.14,.12),"hips",u,[0,-.02,0],[0,0,Math.PI/2],[.9,1.1,1]),a(o(.13,.2),"spine",d,[0,.17,0],null,[1.12,1,.82]),a(o(.16,.17,4,12),"spine",d,[0,.42,0],null,[1.32,1,.88]),a(l(.05,.058,.1),"neck",h,[0,.02,0]),a(new Ks(.065,.018,6,14),"neck","#f2f2f2",[0,-.01,0],[Math.PI/2,0,0]),a(c(.105,16,12),"head",h,[0,.1,0],null,[.92,1.14,1]),a(c(.07,12,9),"head",h,[0,.03,.025],null,[1,.85,.95]),a(c(.018,8,6),"head",h,[0,.09,.105],null,[1,1.2,1.2]);for(let b of[-1,1])a(c(.026,8,6),"head",h,[b*.095,.09,0],null,[.5,1,.8]),a(c(.011,6,5),"head","#120c0a",[b*.036,.115,.09]);a(new Ai(.108,16,10,0,Xn,0,Math.PI*.56),"head",y,[0,.105,-.006],[-.18,0,0],[.94,1.16,1.03]);for(let b of["L","R"])a(c(.07,10,8),"sh"+b,d),a(l(.062,.056,.17,10),"sh"+b,d,[0,-.085,0]),a(l(.054,.046,.16,10),"sh"+b,h,[0,-.22,0]),a(c(.05,9,7),"el"+b,h),a(l(.05,.036,.27,10),"el"+b,h,[0,-.135,0]),a(c(.05,9,7),"el"+b,h,[0,-.3,0],null,[.85,1.15,.7]),a(l(.108,.088,.26,12),"th"+b,u,[0,-.12,0]),a(l(.095,.068,.28,12),"th"+b,h,[0,-.3,0]),a(c(.066,9,7),"kn"+b,h),a(l(.07,.05,.4,12),"kn"+b,m,[0,-.2,0]),a(c(.07,9,7),"kn"+b,m,[0,-.12,-.015],null,[1,1.5,1.05]),a(new vn(.095,.075,.27),"an"+b,g,[0,-.03,.065]),a(c(.049,9,7),"an"+b,g,[0,-.03,.17],null,[1,.78,1.1]);let p=r.map(b=>{let _=(b.geo.index,b.geo);_=_.clone();let E=new qe().setFromEuler(new kn(b.rot[0],b.rot[1],b.rot[2])),P=new qt().compose(new F(...b.pos),E,new F(...b.scl));_.applyMatrix4(P),_.applyMatrix4(e[b.bone].matrixWorld);let R=_.attributes.position.count,L=new Vt(b.col),U=new Float32Array(R*3),G=new Uint16Array(R*4),I=new Float32Array(R*4);for(let H=0;H<R;H++)U[H*3]=L.r,U[H*3+1]=L.g,U[H*3+2]=L.b,G[H*4]=n[b.bone],I[H*4]=1;_.setAttribute("color",new ln(U,3)),_.setAttribute("skinIndex",new ln(G,4)),_.setAttribute("skinWeight",new ln(I,4));for(let H of Object.keys(_.attributes))["position","normal","uv","color","skinIndex","skinWeight"].includes(H)||_.deleteAttribute(H);return _.index||_.setIndex([...Array(R).keys()]),_}),f=Yh(p,!1);Hl||(Hl=new yn({vertexColors:!0,roughness:.72,metalness:0}));let M=new qs(r0.map(b=>e[b])),A=new Ws(f,Hl);A.add(e.hips),A.bind(M),A.frustumCulled=!1,A.castShadow=!0;let S=new xe(new Hn(.3,.3),new yn({map:e0(t,i.shirt,i.numCol),roughness:.8}));S.position.set(0,.4,-.152),S.rotation.y=Math.PI,e.spine.add(S);let w=new zn;return w.rotation.order="YXZ",w.add(A),w.scale.setScalar(xo),{holder:w,mesh:A,bones:e,skel:M}}function o0(i,t,e){let n=cu[t];return i.isRef?{shirt:"#161616",shorts:"#161616",sock:"#161616",numCol:"#ffd23a",skin:kl[1],hair:Gl[0]}:i.role==="GK"?{shirt:t?"#2cc4a0":"#f2b01e",shorts:"#1a1a1a",sock:t?"#2cc4a0":"#f2b01e",numCol:"#111",skin:kl[Rn(e+3)*5|0],hair:Gl[Rn(e+9)*6|0]}:{shirt:n.shirt,shorts:n.short,sock:n.shirt,numCol:"#fff",skin:kl[Rn(e+1)*5|0],hair:Gl[Rn(e+5)*6|0]}}function du(i,t){let e=d=>Ee(((i[d]||70)-50)/50,0,1),n=e("str"),s=e("mom"),r=e("sk"),a=e("sr"),o=Rn(t*7+2)-.5,c=Rn(t*13+5)-.5,l=Rn(t*3+9),h={cad:1,stride:1,arm:1,abd:0,sw:0,elb:1,lean:0,lift:1,bob:1,twist:1,head:1,name:"normal"};return h.cad+=.12*s-.06*n+.06*o,h.stride+=.12*n-.08*s+.05*c,h.arm+=.25*n-.3*s+.2*o,h.abd+=.1*n+.08*c,h.lean+=.05*n-.03*r+.03*o,h.lift+=.2*r+.1*a-.1*s+.1*c,h.bob+=.3*n-.25*r+.15*o,h.twist+=.25*n-.1*s+.15*c,r>.55&&(a>.45||n>.5)?(h.sw=.55+.3*r,h.arm*=.55,h.abd+=.22,h.elb*=.9,h.lift+=.12,h.bob*=.6,h.lean-=.03,h.name="zarif"):n>.7?(h.abd+=.18,h.arm*=1.1,h.twist+=.2,h.stride+=.05,h.name="g\xFC\xE7l\xFC"):s>.7?(h.arm*=.7,h.stride*=.88,h.cad*=1.08,h.elb*=1.1,h.name="\xE7evik"):l>.8&&(h.arm*=1.3,h.abd+=.1,h.bob*=1.2,h.name="sal\u0131nan"),h}function jh(i,t,e){let n=o0(i,t,e),s=a0(n,i.num||0),r=Object.assign(s,{sty:du(i,e),p:i,ph:Rn(e)*6.28,yaw:0,yawRate:0,v:0,roll:0,pitch:0,hipY:Jl,kick:null,kickLeg:1,dive:0,diveHold:0,diveSide:0,lie:0,slideAmt:0,lastVx:0,lastVz:0,lvx:0,lvz:0,acc:0,dv:null,hold:0,reach:0,hop:0,lunge:0,holdW:new F,headYaw:0,headPit:0,celeb:0,throwAmt:0,init:!1,footW:[new F,new F],ts:0});return r.blob=new xe(new gs(.7,20),new Gn({color:0,transparent:!0,opacity:.28,depthWrite:!1})),r.blob.rotation.x=-Math.PI/2,r.blob.position.y=.015,Ze.add(r.blob),Ze.add(r.holder),r}var tu=new F,_r=new F,Vl=new F,eu=new qt,nu=new qt,l0=new F(1,1,1),tn=new F,en=new F,c0=new F,iu=new qe,su=new qe,ru=new qe,au=new qe,ou=new F(1,0,0);function lu(i,t,e,n,s,r,a,o,c,l,h,d,u){let m=Ji.v1.set(n-i.position.x,s-i.position.y,r-i.position.z),g=m.length(),y=a+o-.004;g>y&&(m.multiplyScalar(y/g),g=y),g<.1&&(g=.1);let p=Ji.v2.copy(m).normalize(),f=Math.acos(Ee((a*a+g*g-o*o)/(2*a*g),-1,1)),M=Math.acos(Ee((a*a+o*o-g*g)/(2*a*o),-1,1)),A=Ji.v3.set(c,l,h);A.addScaledVector(p,-A.dot(p)),A.lengthSq()<1e-6&&(A.set(1,0,0),A.addScaledVector(p,-p.x)),A.normalize();let S=c0.copy(p).multiplyScalar(Math.cos(f)).addScaledVector(A,Math.sin(f));_r.copy(S).negate(),Vl.copy(A).addScaledVector(_r,-A.dot(_r)).normalize(),tu.crossVectors(_r,Vl).normalize(),eu.makeBasis(tu,_r,Vl),i.quaternion.setFromRotationMatrix(eu);let w=Math.PI-M;if(t.quaternion.setFromAxisAngle(ou,d*w),e&&u!==void 0){let b=Math.atan2(-S.z,-S.y);e.quaternion.setFromAxisAngle(ou,u-(b+d*w))}}function h0(i,t,e){let n=Dn.get(i);if(!n||i.role==="GK"&&!1)return;let s=le.x/Jt,r=le.y/Jt,a=le.vx,o=le.vy,c=Math.hypot(a,o)||1;n.kick={t:0,dx:a/c,dz:o/c,bx:s,by:Math.max(.12,le.z/Jt),bz:r,pw:Ee(t/70,.2,1),hdr:le.z/Jt>1.3,pass:!!e,air:le.vz>3};let l=(s-n.holder.position.x)*Math.cos(n.yaw)-(r-n.holder.position.z)*Math.sin(n.yaw);n.kickLeg=l>0?1:-1,Math.abs(l)<.05&&(n.kickLeg=Rn(Ni*13+i.num)<.6?-1:1)}function u0(i,t,e){let n=i.bones,s=i.holder,r=t.role==="GK",a=t===ee.ctrl,o=t.x/Jt,c=t.y/Jt,l=(t.vx||0)/Jt,h=(t.vy||0)/Jt,d=Math.hypot(l,h),u=le.x/Jt,m=le.y/Jt,g=le.z/Jt,y=le.vx/Jt,p=le.vy/Jt,f=Math.hypot(y,p);i.init||(i.init=!0,i.yaw=Math.atan2(t.fx||1,t.fy||0),s.position.set(o,0,c)),i.v=je(i.v,d,12,e);let M=(l-i.lastVx)/Math.max(e,.001),A=(h-i.lastVz)/Math.max(e,.001);i.lastVx=l,i.lastVz=h;{let z=Math.sin(i.yaw),lt=Math.cos(i.yaw);i.acc=je(i.acc,Ee(M*z+A*lt,-14,14),8,e)}let S=t.slide,w=(t.recover||0)>.15&&!S,b=r&&le.owner===t,_=Math.atan2(t.fx||0,t.fy||1);i.v>1.1&&(_=Math.atan2(l,h)),S&&(_=Math.atan2(S.dx,S.dy)),r&&!i.dv&&!b&&Math.hypot(u-o,m-c)<40&&(_=Math.atan2(u-o,m-c)),i.kick&&i.kick.t<.45&&(_=Math.atan2(i.kick.dx,i.kick.dz)),i.dv&&(_=i.yaw);let E=Zh(i.yaw,_),P=(S?14:8+i.v*.9)*e,R=Ee(E,-P,P);i.yaw+=R,i.yawRate=je(i.yawRate,R/Math.max(e,.001),10,e);let L=Math.sin(i.yaw),U=Math.cos(i.yaw);i.lvx=je(i.lvx||0,l*U-h*L,14,e),i.lvz=je(i.lvz||0,l*L+h*U,14,e);let G=Math.hypot(i.lvx,i.lvz);i.slideAmt=je(i.slideAmt,S?1:0,S?16:8,e),i.lie=je(i.lie,w?1:0,w?12:4,e);let I=ee.phase==="sp"&&ee.sp&&ee.sp.type==="throwin"&&ee.sp.taker===t;i.throwAmt=je(i.throwAmt,I?1:0,10,e);let H=ee.phase==="goal"&&uu===t.team&&!t.isRef;i.celeb=je(i.celeb,H?1:0,6,e),i.ask=je(i.ask||0,(t.askT||0)>ee.time?1:0,12,e),i.kick&&(i.kick.t+=e,i.kick.t>.75&&(i.kick=null)),i.hold=je(i.hold||0,b?1:0,b?14:8,e);let Y=0,X=0;if(r){i.dvCd=Math.max(0,(i.dvCd||0)-e);let z=u-o,lt=m-c,Nt=Math.hypot(z,lt);if(!i.dv&&t.diving&&!le.owner&&i.dvCd<=0&&ee.phase==="play"&&f>6&&Nt<14){let Gt=f*f,ie=Ee(-(z*y+lt*p)/Gt,0,1.5),me=z+y*ie,Le=lt+p*ie,se=me*U-Le*L,Se=g+le.vz/Jt*ie-4.9*ie*ie*.5;ie<.5&&(Math.abs(se)>.75||Se>2.2)&&(i.dv={t:0,side:Math.abs(se)>.3?Math.sign(se):i.dvLast||1,hi:Se>1.4?1:0,low:Se<.5?1:0}),i.dv&&(i.dvLast=-i.dv.side)}i.dv&&(i.dv.t+=e,i.dv.t>1.6&&(i.dv=null,i.dvCd=.5)),!i.dv&&!b&&ee.phase==="play"&&!le.owner&&f>3.5&&Nt<3.4&&(Y=Re(1-Nt/3.4),g>2.1&&Nt<2.4&&(X=.3))}i.reach=je(i.reach||0,Y,18,e),i.hop=je(i.hop||0,X,12,e);let et=G/ql,V=Re((et-.15)/.45),Z=Ee((et-1.8)/3.6,0,1),nt=(.6+.19*Math.min(et,8.5))*At(1,i.sty.cad,.3+.7*Math.min(1,et/3)),Tt=et/Math.max(nt,.1);i.ph=(i.ph+(V>.01?nt:0)*e)%1,i.runF=Z;let St=Ee(.62-.06*et,.27,.62),K=St*Tt/(xo*Zt.pk)*V*At(1,i.sty.stride,Z),mt=At(.06,.42,Z)*i.sty.lift*(.4+.6*V),yt=.075,Pt=G>.05?i.lvx/G:0,gt=G>.05?i.lvz/G:1,Ut=r&&!b&&!i.dv&&ee.phase!=="goal",Te=Ut?.16:0,Dt=Ut?.11:0,ae=[null,null];for(let z=0;z<2;z++){let lt=z?-1:1,Nt=(i.ph+z*.5)%1,Gt,ie,me,Le=(.05+.1*Z)*V;if(Nt<St){let se=Nt/St;Gt=K*(.4-se),ie=yt+Le*Math.pow(Re((se-.6)/.4),1.5),me=V*(se<.14?-.3*(1-se/.14):(.35+.5*Z)*Re((se-.62)/.38))}else{let se=(Nt-St)/(1-St),Se=Re(se);Gt=K*(-.6+Se),ie=yt+Le*Math.max(0,1-se/.3)+mt*V*Math.sin(Math.PI*Math.pow(se,.72)),me=V*At(.35+.5*Z,-.3,Re(se*1.25))}ae[z]=[lt*(.105-.035*Z+Te)+Pt*Gt+lt*.02*V*(Nt>=St?Math.sin(Math.PI*(Nt-St)/(1-St)):0),ie,gt*Gt,me]}let he=9;for(let z=0;z<2;z++){let lt=ae[z];if(lt[1]<yt+.06){let Nt=Math.hypot(lt[0]-(z?-.09:.09),lt[2]);he=Math.min(he,lt[1]+Math.sqrt(Math.max(.01,(vo+yo)**2*.968-Nt*Nt))+.04)}}let Yt=At(.016,-(.03+.004*et),Z)*V*i.sty.bob,Ue=Yt*Math.cos(4*Math.PI*(i.ph-St/2)),we=Math.sin(Ni*1.7+i.ph*9)*.006*(1-V),nn=Math.min(Jl-.012-.05*Z-Dt+Ue,he)+we;i.hipY=je(i.hipY,nn,32,e);let $t=i.hipY,Je=0,Pe=Ee(.03+et*(.05+i.sty.lean*.5)+i.acc*.02/ql,-.2,.6)*(1-i.slideAmt),Fe=Math.cos(Xn*i.ph),un=(.045+.02*et)*V*i.sty.twist,ke=-un*Fe,N=(.03+.008*et)*Math.cos(Xn*(i.ph-St/2))*V+Math.sin(Ni*.9+i.ph*5)*.012*(1-V),dn=.03*Z,Ft=Pe+(Ut?.26:0)+we*3,ue=un*1.7*Fe,ut=-N*.8-i.roll*.3,Ce=Ee(-i.yawRate*Math.min(G,8)*.028,-.38,.38);i.roll=je(i.roll,Ce,9,e);let It=(.2+.09*et)*V*i.sty.arm,xt=[-It*Fe+.12*Z,It*Fe+.12*Z],T=[.1+.06*Z+i.sty.abd*Z+i.sty.sw*Z*(.5-.5*Fe),.1+.06*Z+i.sty.abd*Z+i.sty.sw*Z*(.5+.5*Fe)],x=[0,0];for(let z=0;z<2;z++)x[z]=At(.35,1.45,Z)*i.sty.elb*V+.28*(1-V)+Math.max(0,xt[z])*.4;if(Ut)for(let z=0;z<2;z++)xt[z]=At(xt[z],.6,.85),T[z]=At(T[z],.45,.9),x[z]=At(x[z],1.1,.85);let O,st;{let z=u-o,lt=m-c,Nt=Zh(i.yaw,Math.atan2(z,lt)),Gt=Math.hypot(z,lt);O=Ee(Nt,-1.2,1.2)*(Gt<40?1:.2),st=Ee(Math.atan2(1.4-Math.max(.2,g),Math.max(Gt,1))*-1,-.3,.3)}s.position.x=o,s.position.z=c,s.rotation.order="YXZ",s.rotation.set(0,i.yaw,i.roll);let Q=[null,null],at=0,ht=null;if(i.slideAmt>.02){let z=i.slideAmt;Je+=.1*z,$t=At($t,.3,z),Ft=At(Ft,-.95,z),ue=At(ue,0,z),ke*=1-z;for(let lt=0;lt<2;lt++)xt[lt]=At(xt[lt],lt?-.7:-.45,z),T[lt]=At(T[lt],.95,z),x[lt]=At(x[lt],.3,z);ht=z}if(i.lie>.02){let z=i.lie;s.rotation.x=-Math.PI/2*z*.95,Je+=.2*z;for(let lt=0;lt<2;lt++)xt[lt]=At(xt[lt],lt?-.5:-.9,z),T[lt]=At(T[lt],.6,z);Ft=At(Ft,.15,z)}let J=(t.reach||0)>0&&!S&&i.lie<.1?Re(t.reach/.2):0;if(i.lunge=je(i.lunge||0,J,16,e),i.lunge>.02){let z=i.lunge;Ft=At(Ft,.4,z);for(let lt=0;lt<2;lt++)xt[lt]=At(xt[lt],1,z),T[lt]=At(T[lt],.6,z),x[lt]=At(x[lt],.5,z)}if(i.throwAmt>.02){let z=i.throwAmt;Ft=At(Ft,-.18,z);for(let lt=0;lt<2;lt++)xt[lt]=At(xt[lt],2.95,z),T[lt]=At(T[lt],.12,z),x[lt]=At(x[lt],.6,z)}if(i.ask>.02&&(xt[0]=At(xt[0],2.8,i.ask),T[0]=At(T[0],.45,i.ask),x[0]=At(x[0],.2,i.ask)),i.celeb>.02){let z=i.celeb,lt=Math.abs(Math.sin(Ni*7+i.ph*6));Je+=.26*lt*z,Ft=At(Ft,-.12,z);for(let Nt=0;Nt<2;Nt++)xt[Nt]=At(xt[Nt],2.85,z),T[Nt]=At(T[Nt],.5,z),x[Nt]=At(x[Nt],.35,z)}let $=0,ct=0,C=0,j=0,q=null;if(i.dv){let z=i.dv.t,lt=i.dv.side;C=lt,hi=i.dv.hi,lo=i.dv.low;let Nt=Re(z/.1)*(1-Re((z-.1)/.05)),Gt=Re((z-.08)/.34),ie=Re((z-.95)/.6),me=Gt*(1-ie);ct=(hi?1.15:lo?1.5:1.32)*me;let se=z>.08&&z<.55?Math.sin(Math.PI*Ee((z-.08)/.47,0,1)):0,Se=At(.3,hi?1.2:lo?.62:.95,se);s.rotation.z=-lt*ct,s.rotation.x=-.12*me,q={sd:lt,hip:$t,hd:Se,fu:me,phi:ct},$t=At($t,.9,me)-.12*Nt-.12*Math.sin(Math.PI*ie),Ft=At(Ft,-.12,me)+.3*Nt+.45*Math.sin(Math.PI*ie),ke=0,$=me+Nt*.3,at=Math.max(at,Re((z-0)/.1)*(1-Re((z-1)/.3)));for(let de=0;de<2;de++)xt[de]=At(xt[de],2.9,me),T[de]=At(T[de],.12,me),x[de]=At(x[de],.12,me);Q[0]=Q[1]="ball"}i.reach>.02&&!i.dv&&(at=Math.max(at,i.reach),Q[0]=Q[1]="ball",Je+=i.hop*1,$t=At($t,$t-.08,i.reach)),i.hold>.02&&!i.dv&&(at=Math.max(at,i.hold),Q[0]=Q[1]="hold",Ft=At(Ft,Ft-.05,i.hold));let tt=i.kick,ot=0;if(a&&le.owner===t&&!tt)for(let z of["B","A","D"])xr[z]&&xr[z].down&&!xr[z].stale&&(ot=Math.max(ot,Ee(xr[z].hold/re.CHARGE,0,1)));i.windup=je(i.windup||0,ot,14,e);let rt=i.kickLeg,Rt=rt>0?0:1,zt=0,it=null,Ct=0,kt=0,pt=null,ce=!1,Ae=tt&&tt.hdr;if(i.windup>.02&&!tt){let z=i.windup;zt=z,it=[0,.2+.35*z,-.55*z],Ct=.5*z,Ft-=.12*z,ke+=rt*.1*z,ue+=rt*.15*z,xt[0]=At(xt[0],rt>0?.55:-.7,z*.7),xt[1]=At(xt[1],rt>0?-.7:.55,z*.7),T[0]=At(T[0],.5,z),T[1]=At(T[1],.5,z)}if(tt&&Ae){let z=tt.t,lt=Math.sin(Math.PI*Ee((z+.05)/.5,0,1));Je+=.4*lt;let Nt=z<.16?-Re(z/.16)*.35:-.35+.8*Re((z-.16)/.14)*(1-Re((z-.35)/.3));Ft=At(Ft,Nt,.9);for(let Gt=0;Gt<2;Gt++)xt[Gt]=At(xt[Gt],1.6,lt),T[Gt]=At(T[Gt],.9,lt),x[Gt]=At(x[Gt],.5,lt);$=0}else if(tt){let z=tt.t,lt=tt.pw,Nt=tt.dx,Gt=tt.dz,ie=[tt.bx-Nt*(.5+.4*lt),.28+lt*.12,tt.bz-Gt*(.5+.4*lt)],me=[tt.bx-Nt*.12,Math.max(.1,tt.by*.8),tt.bz-Gt*.12],Le=[tt.bx+Nt*(.7+.5*lt),.28+(tt.air?.6:.25)+.3*lt,tt.bz+Gt*(.7+.5*lt)],se,Se,de,Wt=1;z<.1?(se=ie,Se=me,de=Re(z/.1)):z<.32?(se=me,Se=Le,de=1-Math.pow(1-(z-.1)/.22,2)):(se=Le,Se=Le,de=0,Wt=1-Re((z-.32)/.38)),zt=Wt,ce=!0,it=[At(se[0],Se[0],de),At(se[1],Se[1],de),At(se[2],Se[2],de)],Ct=z<.1?.4:-.25;let Ge=z<.1?-Re(z/.1)*.14:z<.32?-.14+.5*(1-Math.pow(1-(z-.1)/.22,2)):.36*(1-Re((z-.32)/.38));Ft+=Ge*(.4+lt*.6)-.05,ue+=z<.1?-rt*.22:rt*.24*Wt,ke+=z<.1?rt*.12:-rt*.14*Wt,xt[0]=At(xt[0],rt>0?-.9:.8,Wt*.7),xt[1]=At(xt[1],rt>0?.8:-.9,Wt*.7),T[0]=At(T[0],.75,Wt),T[1]=At(T[1],.75,Wt),kt=Wt,pt=[tt.bx-Nt*.22,tt.bz-Gt*.22]}if(s.position.y=Je,q){let z=q,lt=$t,Nt=z.phi*z.sd,Gt=Math.cos(i.yaw),ie=-Math.sin(i.yaw);s.position.x-=Gt*lt*Math.sin(z.phi)*z.sd*1,s.position.z-=ie*lt*Math.sin(z.phi)*z.sd*1,s.position.y=Math.max(0,z.hd-lt*Math.cos(z.phi))}n.hips.position.y=$t,n.hips.rotation.set(dn,ke,N),n.spine.rotation.set(Ft,ue,ut),n.neck.rotation.set(-Ft*.3,-ue*.35+O*.3,-ut*.5),n.head.rotation.set(st*.6-Ft*.35+(Ae?.3:0),O*.7,-ut*.3);for(let z=0;z<2;z++){let lt=z?-1:1,Nt=z?n.shR:n.shL,Gt=z?n.elR:n.elL;Nt.rotation.set(-xt[z],0,lt*T[z]),Gt.rotation.set(-x[z],0,0)}if(s.updateMatrixWorld(!0),at>.01)for(let z=0;z<2;z++){let lt=z?-1:1,Nt=z?n.shR:n.shL,Gt=z?n.elR:n.elL,ie,me,Le;Q[z]==="hold"?(ie=lt*.1,me=.2,Le=.27):(n.spine.worldToLocal(en.set(u,Math.max(.15,g+.2),m)),ie=en.x+lt*.09,me=en.y,Le=en.z),iu.copy(Nt.quaternion),su.copy(Gt.quaternion),lu(Nt,Gt,null,ie,me,Le,.3,.3,lt*.5,-.2,-1,-1),ru.copy(Nt.quaternion),Nt.quaternion.slerpQuaternions(iu,ru,at),au.copy(Gt.quaternion),Gt.quaternion.slerpQuaternions(su,au,at)}nu.compose(n.hips.position,n.hips.quaternion,l0).invert();let xn=(z,lt,Nt,Gt)=>Gt.set(z,lt,Nt).applyMatrix4(nu),yr=dn;for(let z=0;z<2;z++){let lt=z?-1:1,Nt=z?n.thR:n.thL,Gt=ae[z],ie=Gt[3],me=.06;xn(Gt[0],Gt[1],Gt[2],tn);let Le=tn.x,se=tn.y,Se=tn.z,de=(Wt,Ge,ti,Mr,Sr)=>{Le=At(Le,Ge,Wt),se=At(se,ti,Wt),Se=At(Se,Mr,Wt),ie=At(ie,Sr,Wt)};if(le.owner===t&&!r&&!tt&&i.slideAmt<.1&&i.lie<.1&&G>.6){let Wt=(i.ph+z*.5)%1,Ge=St+(1-St)*.55;if(Wt>Ge&&Wt<St+(1-St)*.95){xn(0,0,0,tn),s.worldToLocal(en.set(u,Math.max(.12,g),m));let ti=Re((Wt-Ge)/((1-St)*.2))*(1-Re((Wt-St-(1-St)*.8)/((1-St)*.15)));en.length()<1.15&&(xn(en.x,en.y,en.z,tn),de(ti*.7,tn.x,Math.max(tn.y+.02,se-.1),tn.z-.1,.25))}}if(J>0||i.lunge>.02){let Wt=i.lunge;z===0?de(Wt,.09,se-.1*0,.62,-.1):de(Wt,-.09,se+.03,-.25,.5)}if(i.slideAmt>.02){let Wt=i.slideAmt;z===0?de(Wt,.09,-$t+.2,.85,-.1):de(Wt,-.09,-$t+.32,.22,.9)}if($>.02){let Wt=$;z===0?de(Wt,.09,-.8,-.12,.8):de(Wt,-.09,-.7,-.38,1)}if(i.lie>.02){let Wt=i.lie;de(Wt,lt*.09,-.75,z?-.3:.1,0)}if(i.celeb>.02){let Wt=i.celeb*.55,Ge=Math.abs(Math.sin(Ni*7+i.ph*6));de(Wt,lt*.1,se+.12*Ge,Se-.1,.3)}if(Ae&&tt){let Wt=Math.sin(Math.PI*Ee((tt.t+.05)/.5,0,1));de(Wt*.6,lt*.09,-.62,z?-.3:-.1,.4)}else if(zt>.01)if(z===Rt){let Wt=Nt.position.x,Ge,ti;ce?(s.worldToLocal(en.set(it[0],it[1],it[2])),xn(en.x,en.y,en.z,tn),Wt=tn.x,Ge=tn.y,ti=tn.z):(Ge=it[1]-$t,ti=it[2]),de(zt,Wt,Ge,ti,Ct),me=.05}else kt>.01&&(s.worldToLocal(en.set(pt[0]+U*lt*.22,.075,pt[1]-L*lt*.22)),xn(en.x,en.y,en.z,tn),de(kt*.85,tn.x,tn.y,tn.z,0));lu(Nt,z?n.knR:n.knL,z?n.anR:n.anL,Le,se,Se,vo,yo,lt*me,0,1,1,ie-yr)}r&&n.spine.localToWorld(i.holdW.set(0,.2,.3)),i.holder.scale.setScalar(xo*Zt.pk),i.holder.visible=!0,i.blob.position.set(o,.015,c),i.blob.visible=Zt.q<2,i.blob.scale.setScalar((i.slideAmt>.3||i.lie>.3||i.dv?1.5:1)*Zt.pk),i.holder.updateMatrixWorld(!0)}function d0(){let i=hn.camInfo(),t=i.cs,e=ee.cam3||{h:80,z:120,l:100},n=Math.asin(Ee(-t.fz,.05,.99)),s=t.cz/Math.max(1e-6,-t.fz),r=t.cx+t.fx*s,a=t.cy+t.fy*s,o=s/Yl,c=Math.hypot(t.fx,t.fy)||1,l=t.fx/c,h=t.fy/c,d=Ee(n*e.h/100,.2,1.45),u=e.l/100,m=o*u/(e.z/100);Ye.fov=i.fov*180/Math.PI/u;let g=r/Jt-l*Math.cos(d)*m,y=Math.sin(d)*m,p=a/Jt-h*Math.cos(d)*m;Ye.position.set(g,y,p),Ye.up.set(0,1,0),Ye.lookAt(r/Jt,0,a/Jt),Ye.aspect=innerWidth/innerHeight,Ye.updateProjectionMatrix();let f=Ee(r/Jt,0,Ie),M=Ee(a/Jt,0,ze);An.target.position.set(f,0,M),An.position.set(f-22,48,M+26),An.target.updateMatrixWorld();for(let A of hu){let S=-Math.sin(A.yaw),w=-Math.cos(A.yaw);A.g.visible=(Ye.position.x-A.ox)*S+(Ye.position.z-A.oz)*w<2}if(Zt.dbg){let A=Zt.dbg,S=A.p?A.p():A;Ye.position.set(...S.pos),Ye.up.set(0,1,0),Ye.lookAt(...S.look),Ye.fov=S.fov||35,Ye.updateProjectionMatrix()}}Zt.init=function(i){if(Zt.ready)return!0;if(hn=i,!hn||typeof document>"u")return!1;try{ee=hn.M,le=hn.B,xr=hn.IN,re=hn.geo(),Yl=re.UM,Jt=Yl/ql,re.UM=Jt,cu=hn.COL,re.CHARGE=hn.CHARGE_T||1,Ie=re.PW/Jt,ze=re.PH/Jt,Di=document.createElement("canvas"),Di.style.cssText="position:fixed;left:0;top:0;width:100vw;height:100vh;display:block;z-index:0;touch-action:none";let t=document.getElementById("c");document.body.insertBefore(Di,t),t.style.position="fixed",t.style.left="0",t.style.top="0",t.style.zIndex="1",jn=new po({canvas:Di,antialias:!0,powerPreference:"high-performance",alpha:!1}),jn.toneMapping=rr,jn.toneMappingExposure=1.05,jn.shadowMap.type=Sa,Ze=new ks,Ze.background=new Vt(659488),Ze.fog=new zs(923440,140,330),Ye=new pn(30,2,.5,700),Jh=new tr(12571903,2906670,1.15),Ze.add(Jh),An=new ir(16774880,2.6),An.castShadow=!0,An.shadow.mapSize.set(2048,2048);let e=An.shadow.camera;e.left=-34,e.right=34,e.top=30,e.bottom=-30,e.near=10,e.far=140,An.shadow.bias=-4e-4,An.shadow.normalBias=.03,Ze.add(An,An.target),Zt.setQuality(ee.gfx|0,hn,!0),i0(),Qh(0),Qh(1),s0(),Zi=new xe(new Ai(.2,24,18),new yn({map:n0(),roughness:.45})),Zi.castShadow=!0,Ze.add(Zi),ws=new xe(new gs(.3,16),new Gn({color:0,transparent:!0,opacity:.35,depthWrite:!1})),ws.rotation.x=-Math.PI/2,Ze.add(ws);let n=ee.onKick;return ee.onKick=(s,r,a)=>{n&&n(s,r,a),Zt.ok&&h0(s,r,a)},Zt.ready=!0,Zt.ok=!0,!0}catch(t){return Zt.failed=!0,console.error("3B ba\u015Flat\u0131lamad\u0131:",t),Zt.ready=!1,Zt.ok=!1,hn&&hn.M&&(hn.M.gfx=0),!1}};Zt.setQuality=function(i,t,e){if(i=i|0,Zt.q=i,t&&!hn&&(hn=t),i===0){Zt.ok=!1,Di&&(Di.style.display="none");return}!Zt.ready&&!e&&!Zt.init(hn)||(Di&&(Di.style.display="block"),jn&&(jn.setPixelRatio(Math.min(window.devicePixelRatio||1,i>1?2:1.25)),jn.shadowMap.enabled=i>1,An&&(An.castShadow=i>1)),Zt.ok=Zt.ready||!!e)};var Yi=new F;Zt.P=function(i,t,e){Yi.set(i/Jt,(e||0)/Jt,t/Jt);let n=Ye.position.distanceTo(Yi);return Yi.project(Ye),Yi.z>1||Yi.z<-1?[-1e4,-1e4,-1]:[(Yi.x*.5+.5)*innerWidth,(-Yi.y*.5+.5)*innerHeight,innerHeight/(2*Math.tan(Ye.fov*Math.PI/360)*n)/Jt]};var Wl=0,Xl=0;Zt.restyle=function(i){let t=Dn.get(i);t&&(t.sty=du(i,i.num||0))};Zt.frame=function(i){if(!Zt.ready&&!Zt.init(i))return;let t=performance.now()/1e3,e=Ee(t-(Kh||t),1/240,.1);Kh=t,Ni+=e,(innerWidth!==Wl||innerHeight!==Xl)&&(Wl=innerWidth,Xl=innerHeight,jn.setSize(Wl,Xl,!1));let n=ee.P.filter(r=>!r.out).concat(ee.ref?[Object.assign(ee.ref,{isRef:!0})]:[]),s=new Set;ee.P.forEach((r,a)=>{Dn.has(r)||Dn.set(r,jh(r,r.team,a))}),ee.ref&&!Dn.has(ee.ref)&&(ee.ref.isRef=!0,ee.ref.num="",Dn.set(ee.ref,jh(ee.ref,0,99))),(ee.score[0]!==_o[0]||ee.score[1]!==_o[1])&&(uu=ee.score[0]!==_o[0]?0:1,_o=[ee.score[0],ee.score[1]]);for(let[r,a]of Dn){let o=r===ee.ref||ee.P.includes(r)&&!r.out;a.holder.visible=o,a.blob.visible=o&&Zt.q<2,o&&(s.add(r),u0(a,r,e))}{let r=le.x/Jt,a=le.y/Jt,o=le.owner&&le.owner.role==="GK"&&le.owner===le.owner&&Dn.get(le.owner)&&Dn.get(le.owner).dive<.1,l=Math.max(.2*Zt.pk,le.z/Jt+.2*Zt.pk),h=ee.phase==="sp"&&ee.sp&&ee.sp.type==="throwin"&&ee.sp.taker;if(h){let g=Dn.get(h);g&&g.throwAmt>.3&&(l=Math.max(l,2.35*xo*Zt.pk))}Zi.scale.setScalar(Zt.pk),Zi.position.set(r,l,a);{let g=le.owner&&le.owner.role==="GK"?Dn.get(le.owner):null;g&&g.hold>.02&&Zi.position.lerp(g.holdW,g.hold)}let d=le.vx/Jt,u=le.vy/Jt,m=Math.hypot(d,u);m>.05&&(Ji.v1.set(u,0,-d).normalize(),Ji.q1.setFromAxisAngle(Ji.v1,m*e/.2),$h.premultiply(Ji.q1),Zi.quaternion.copy($h)),ws.position.set(r,.02,a),ws.scale.setScalar((1+l*.12)*Zt.pk),ws.material.opacity=Zt.q>1?.12:.35*Math.max(.3,1-l*.1)}for(let r=0;r<Zl.length;r++)Zl[r].offset.y=Math.sin(Ni*(2.2+r*.3)+r)*.006+(Rn(Math.floor(Ni*5)+r)<.06?.004:0);d0(),jn.render(Ze,Ye)};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
