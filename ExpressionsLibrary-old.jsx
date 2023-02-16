{
  rotTen: 10,
  theText: `Hello World!`,
  pos: [300, 300],
  invisible: thisLayer.toCompVec([0, 0, 1])[2] > 0 ? value : 0,
  loopingWiggle(time, freq, amp) {
    loopTime = thisComp.duration;
    t = time % loopTime;
    wiggle1 = thisProperty.wiggle(freq, amp, 1, 0.5, t);
    wiggle2 = thisProperty.wiggle(freq, amp, 1, 0.5, t - loopTime);
    w = thisLayer.ease(t, 0, loopTime, wiggle1, wiggle2);
    return w
    },
  overshoot(freq, decay, time, value) {
    freq = freq == 0 ? 1 : freq;
    decay = decay == 0 ? 5 : decay;
    v = value;
    n = 0;
    if (thisProperty.numKeys > 0){
    n = thisProperty.nearestKey(time).index;
    if (thisProperty.key(n).time > time) n--;
    }
    if (n > 0){
    t = time - thisProperty.key(n).time;
    amp = thisProperty.velocityAtTime(thisProperty.key(n).time - .001);
    w = freq * Math.PI * 2;
    return v + amp * (Math.sin(t * w) / Math.exp(decay * t) / w);
    } else
    return v
  },
  offset(time, value, direction) {
    dir = direction == 0 ? 1 : -1;
    x = (thisLayer.width / thisComp.duration) * time;
    y = (thisLayer.height / thisComp.duration) * time;
    outX = value[0] + (x * dir);
    outY = value[1] + (y * dir);
    return [outX, outY]
  },
  leftAnchor(value) {
    return [0, value[1]]
  },
  leftPos(value) {
    return [0, value[1]]
  },
  rightAnchor(value) {
    return [thisLayer.width, value[1]]
  },
  rightPos(value) {
    return [thisComp.width, value[1]]
  },
}