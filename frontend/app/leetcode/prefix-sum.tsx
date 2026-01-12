export const prefixSumConcept = (
    <div className="space-y-6">
        <section className="space-y-3">
            <p className="text-muted-foreground">
                Store sum of elements up to each index in an array to answer range sum queries efficiently.
            </p>
        </section>

        <section className="space-y-3">
            <h3 className="text-lg font-semibold">Key Idea</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>Build a prefix sum array by accumulating sums as you iterate through the original array</li>
                <li>Use prefix sums to compute the sum of any subarray in O(1) time after O(n) preprocessing</li>
                <li>Sum of elements from index i to j = prefix[j] - prefix[i-1]</li>
            </ul>
        </section>

        <section className="space-y-3">
            <h3 className="text-lg font-semibold">When to Use</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>When you need to answer multiple range sum queries</li>
                <li>Finding subarrays with a specific sum</li>
                <li>Problems involving sum of elements in a given range</li>
            </ul>
        </section>
    </div>
);

export const prefixSumPseudocode = (
    <div className="space-y-6">
        <section className="space-y-3">
            <h3 className="text-lg font-semibold">1D Prefix Sum</h3>
            <pre className="rounded-md bg-muted p-4 text-xs overflow-x-auto border border-border">
{`function buildPrefixSum(arr):
    n = length of arr
    prefix = array of size n
    
    prefix[0] = arr[0]
    for i from 1 to n-1:
        prefix[i] = prefix[i-1] + arr[i]
    
    return prefix

function getRangeSum(prefix, left, right):
    // Get sum of elements from index left to right
    if left == 0:
        return prefix[right]
    else:
        return prefix[right] - prefix[left - 1]`}
            </pre>
        </section>

        <section className="space-y-3">
            <h3 className="text-lg font-semibold">2D Prefix Sum</h3>
            <pre className="rounded-md bg-muted p-4 text-xs overflow-x-auto border border-border">
{`function build2DPrefixSum(matrix):
    rows = number of rows
    cols = number of columns
    prefix = 2D array of size (rows+1) x (cols+1)
    
    // Initialize with 0s
    for all prefix[i][j] = 0
    for i from 1 to rows:
        for j from 1 to cols:
            prefix[i][j] = matrix[i-1][j-1] + 
                           prefix[i-1][j] + 
                           prefix[i][j-1] - 
                           prefix[i-1][j-1]
    
    return prefix

function get2DRangeSum(prefix, row1, col1, row2, col2):
    // Get sum of submatrix from (row1, col1) to (row2, col2)
    return prefix[row2+1][col2+1] - 
           prefix[row1][col2+1] - 
           prefix[row2+1][col1] + 
           prefix[row1][col1]`}
            </pre>
        </section>
    </div>
);

export const prefixSumComplexity = (
    <div className="space-y-6">
        <section className="space-y-3">
            <h3 className="text-lg font-semibold">1D Prefix Sum</h3>
            <div className="space-y-3">
                <div className="rounded-md bg-muted p-4">
                    <p className="font-semibold text-sm mb-2">Build</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                        <li><strong>Time Complexity:</strong> O(n) - single pass through array</li>
                        <li><strong>Space Complexity:</strong> O(n) - for the prefix array</li>
                    </ul>
                    <br />
                    <p className="font-semibold text-sm mb-2">Query</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                        <li><strong>Time Complexity:</strong> O(1) - constant time lookup</li>
                        <li><strong>Space Complexity:</strong> O(1) - only using indices</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="space-y-3">
            <h3 className="text-lg font-semibold">2D Prefix Sum</h3>
            <div className="space-y-3">
                <div className="rounded-md bg-muted p-4">
                    <p className="font-semibold text-sm mb-2">Build</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                        <li><strong>Time Complexity:</strong> O(m × n) - iterate through all cells</li>
                        <li><strong>Space Complexity:</strong> O(m × n) - for the 2D prefix array</li>
                    </ul>
                    <br />
                    <p className="font-semibold text-sm mb-2">Query</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                        <li><strong>Time Complexity:</strong> O(1) - constant time lookup</li>
                        <li><strong>Space Complexity:</strong> O(1) - only using indices</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
);
