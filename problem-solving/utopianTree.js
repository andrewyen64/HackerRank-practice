// The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.

// A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. How tall will the tree be after n growth cycles?

// Complete the utopianTree function below.
function utopianTree(n) {
    for (var i = 1, result = 1; i <= n; i++) {
        i % 2 ? result *= 2 : result++;
    }
    return result;
}