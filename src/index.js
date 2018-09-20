module.exports = function getLoveTrianglesCount(preferences = []) {
	var count=0;
	preferences.unshift(0);
	for (var i=1; i<preferences.length; i++) {
		if ((preferences[i]!=0)&(preferences[i]!=i)) {
		if (i===preferences[preferences[preferences[i]]]) {
			count++;
			preferences[i]=preferences[preferences[i]]=preferences[preferences[preferences[i]]]=0;
}
}
}
	return count;
};
