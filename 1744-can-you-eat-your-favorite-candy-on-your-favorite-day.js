function canEat(candiesCount: number[], queries: number[][]): boolean[] {
    const acc = Array(candiesCount.length);
    acc[0] = candiesCount[0];
    for (let i = 1; i < candiesCount.length; i++) {
      acc[i] = acc[i - 1] + candiesCount[i]
    }

    return queries.map(([typ, day, cap]) => {
        let candyMin = typ === 0 ? 1 : acc[typ - 1] + 1;
        let candyMax = acc[typ];
        let eatMin = day + 1;
        let eatMax = (day + 1) * cap;
        return (candyMax < eatMin || eatMax < candyMin) ? false : true;
    })
};
