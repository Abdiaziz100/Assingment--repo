function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0; // endWord must exist

    let queue = [[beginWord, 1]]; // [word, steps]

    while (queue.length > 0) {
        let [word, steps] = queue.shift();

        if (word === endWord) return steps;

        for (let i = 0; i < word.length; i++) {
            for (let c = 97; c <= 122; c++) { // a-z
                let char = String.fromCharCode(c);
                let newWord = word.slice(0, i) + char + word.slice(i + 1);

                if (wordSet.has(newWord)) {
                    wordSet.delete(newWord); // avoid revisiting
                    queue.push([newWord, steps + 1]);
                }
            }
        }
    }
    return 0;
}
