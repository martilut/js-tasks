function getMinimalCVS(array) {
    let versionStorage = [array];

    function push(value) {
        let lastVersion = head();
        lastVersion = lastVersion.concat(value)
        versionStorage.push(lastVersion);
    }

    function pop() {
        if (versionStorage.length === 0) {
            throw new Error("Version storage is empty");
        }
        const lastVersion = head().slice();
        const lastElement = lastVersion.pop();
        versionStorage.push(lastVersion);
        return lastElement;
    }

    function history() {
        return versionStorage;
    }

    function head() {
        return versionStorage[versionStorage.length - 1];
    }

    return {
        push: push,
        pop: pop,
        history: history,
        head: head,
    };
}

const cvs = getMinimalCVS(['a', 'b', 'c']);

console.log(cvs.head());
console.log(cvs.pop());

cvs.push('d');
cvs.push('e');

console.log(cvs.head());
console.log(cvs.history());
