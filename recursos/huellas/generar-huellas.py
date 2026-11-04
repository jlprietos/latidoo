import math, random, sys
W, TOP, BOT = 44, 54, 80   # half-width, top height, bottom (tip) length
def halfwidth(y, wob):
    if y <= 0:
        k = 1 - (y/TOP)**2
        return W*math.sqrt(max(k,0))*wob
    t = y/BOT
    if t >= 1: return 0
    return W*(1 - t**1.7)**0.85*wob
def inside(x, y, rnd_ph, m=1.4):
    wob = 1 + 0.03*math.sin(3*math.atan2(y,x)+rnd_ph)
    return abs(x) <= halfwidth(y, wob) - m and -TOP+m <= y <= BOT-m
def outline(ph):
    pts=[]
    for i in range(121):
        y = -TOP + (TOP+BOT)*i/120
        pts.append((halfwidth(y, 1+0.03*math.sin(3*math.atan2(y,1)+ph)), y))
    right = pts; left = [(-x,y) for x,y in reversed(pts)]
    return "M"+" L".join(f"{x:.1f} {y:.1f}" for x,y in right+left)+"Z"
def fmt(v): return f"{v:.1f}".rstrip('0').rstrip('.')
def ridges(seed):
    rnd = random.Random(seed)
    ph = [rnd.uniform(0,6.28) for _ in range(4)]
    cx, cy = rnd.uniform(-3,3), rnd.uniform(-16,-10)
    paths=[]; r=2.2
    while r < 110:
        a0, a1 = (math.radians(rnd.uniform(110,135)), math.radians(rnd.uniform(405,430))) if r < 15 else (0, 2*math.pi)
        n = max(14, int(r*1.15)); pts=[]
        for i in range(n+1):
            t = a0+(a1-a0)*i/n
            w = 1+0.06*math.sin(2*t+ph[0])+0.04*math.sin(3*t+ph[1])+0.025*math.sin(5*t+ph[2])
            sy = 1.0 if math.sin(t) < 0 else 0.92
            pts.append((cx+r*w*0.80*math.cos(t), cy+r*w*sy*math.sin(t)))
        seg=[]
        for p in pts:
            if inside(*p, ph[3]) and rnd.random() > 0.035: seg.append(p)
            else:
                if len(seg)>=3: paths.append(seg)
                seg=[]
        if len(seg)>=3: paths.append(seg)
        r += 3.1*rnd.uniform(0.92,1.08)
    d=[]
    for s in paths:
        o="M"+fmt(s[0][0])+" "+fmt(s[0][1])
        for i in range(1,len(s)-1):
            o+="Q"+fmt(s[i][0])+" "+fmt(s[i][1])+" "+fmt((s[i][0]+s[i+1][0])/2)+" "+fmt((s[i][1]+s[i+1][1])/2)
        o+="L"+fmt(s[-1][0])+" "+fmt(s[-1][1]); d.append(o)
    return "".join(d), ph[3]
def heart(c1,c2,scale,label,fillop):
    sw, sh = int(200*scale), int(180*scale)
    g=[]
    for tx,rot,col,seed,op in [(65,-30,c1,7,1),(135,30,c2,23,0.9)]:
        d,ph = ridges(seed)
        g.append(f'<g transform="translate({tx} 70) rotate({rot})"><path d="{outline(ph)}" fill="{col}" fill-opacity="{fillop}"/><path d="{d}" fill="none" stroke="{col}" stroke-opacity="{op}" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/></g>')
    return f'<svg aria-label="{label}" width="{sw}" height="{sh}" viewBox="0 0 {sw} {sh}" xmlns="http://www.w3.org/2000/svg"><g transform="scale({scale})">'+"".join(g)+'</g></svg>'
open(sys.argv[1] if len(sys.argv)>1 else "huellas-corazon-fondo-oscuro.svg","w").write(heart("#F4A672","#E3CBD3",2.6,"Corazón formado por dos huellas dactilares superpuestas, una de la madre o el padre y otra del hijo","0.10"))
open(sys.argv[2] if len(sys.argv)>2 else "huellas-corazon-fondo-claro.svg","w").write(heart("#8E2A44","#E07B39",2.3,"Corazón de Latidoo formado por dos huellas dactilares superpuestas","0.07"))
import os; print("ok")
