function shuffleArray<T>(arr: T[]): T[] {
    const aCopy: T[] = arr.concat();

    for (let k = aCopy.length - 1; k > 0; k--) {
        for (let i = aCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = { ...aCopy[i] };
            aCopy[i] = { ...aCopy[j] };
            aCopy[j] = temp;
        }
    }
    return aCopy;
}

export default shuffleArray;
