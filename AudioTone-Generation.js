// Get the number of markers on the layer
numMarkers = thisLayer.marker.numKeys;

// Get the comment of the first marker on the layer
markerComment = thisLayer.marker.key(1).comment;

// Parse the chord letter from the marker comment
chordLetter = markerComment.split(" ")[0];

// Set the base frequency of the chord
if (chordLetter == "C") {
  baseFreq = 261.63;
} else if (chordLetter == "D") {
  baseFreq = 293.66;
} else if (chordLetter == "E") {
  baseFreq = 329.63;
} else if (chordLetter == "F") {
  baseFreq = 349.23;
} else if (chordLetter == "G") {
  baseFreq = 392.00;
} else if (chordLetter == "A") {
  baseFreq = 440.00;
} else if (chordLetter == "B") {
  baseFreq = 493.88;
} else {
  baseFreq = 0;
}


// Check if the markers have changed and update the chord if necessary
if (numMarkers != thisLayer.marker.numKeys) {
  numMarkers = thisLayer.marker.numKeys;
  markerComment = thisLayer.marker.key(1).comment;
  chordLetter = markerComment.split(" ")[0];
  if (chordLetter == "C") {
    baseFreq = 261.63;
  } else if (chordLetter == "D") {
    baseFreq = 293.66;
  } else if (chordLetter == "E") {
    baseFreq = 329.63;
  } else if (chordLetter == "F") {
    baseFreq = 349.23;
  } else if (chordLetter == "G") {
    baseFreq = 392.00;
  } else if (chordLetter == "A") {
    baseFreq = 440.00;
  } else if (chordLetter == "B") {
    baseFreq = 493.88;
  } else {
    baseFreq = 0;
  }
  freq1 = baseFreq;
  freq2 = baseFreq * Math.pow(2, 4/12);
  freq3 = baseFreq * Math.pow(2, 7/12);
}

n = thisLayer.name;
e = thisLayer.effect(1)(n);

freq1 = baseFreq;
freq2 = baseFreq * Math.pow(2, 4/12);
freq3 = baseFreq * Math.pow(2, 7/12);


// Calculate the frequencies of the chord based on the base frequency
if (n == "Frequency 1") {
	freq1
} else if (n == "Frequency 2") {
	freq2
} else if (n == "Frequency 3") {
	freq3
} else { 0 }
