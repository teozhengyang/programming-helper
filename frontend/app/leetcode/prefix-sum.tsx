export const prefixSumConcept = (
    <div className="space-y-6">

        <section className="space-y-3">
            <h3 className="text-lg font-semibold">Key Ideas</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>Preprocess array to compute subarray results efficiently</li>
                <li>O(n) complexity for O(1) range sum queries</li>
            </ul>
        </section>

        <section className="space-y-3">
            <h3 className="text-lg font-semibold">When to Use</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>Subarray queries (sum, average, product, count)</li>
                <li>Range queries (sum, min, max)</li>
                <li>Cumulative calculations (running totals, prefix products)</li>
            </ul>
        </section>
    </div>
);

export const prefixSumPseudocode = (
    <div className="space-y-6">
        <section className="space-y-3">
            <pre className="rounded-md bg-muted p-4 text-xs overflow-x-auto border border-border">
{`prefixSum(arr):
    // variables
    sum, counter, result

    // loop through array
    for num in arr:
        // update sum
        sum += num
        // update counter (store info of previous prefixes)
        // update result based on problem

    return result`
}
            </pre>
        </section>
    </div>
);

// table with leetcode question, description, link to question, link to solution in root leetcode folder
export const prefixSumExample = (
    <div className="space-y-6">
        <section className="space-y-3">
            <table className="w-4/5 text-left text-sm">
                <thead className="bg-accent/40">
                    <tr>
                        <th className="px-3 py-2">Question</th>
                        <th className="px-3 py-2">Description</th>
                        <th className="px-3 py-2">Solution</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                    <tr>
                        <td className="px-3 py-2"><a className="underline font-semibold text-accent-600 hover:text-accent-700" href="https://leetcode.com/problems/subarray-sum-equals-k/" target="_blank" rel="noopener noreferrer">560. Subarray Sums Equals K</a></td>
                        <td className="px-3 py-2">Count subarrays with sum equal to k</td>
                        <td className="px-3 py-2"><a className="underline font-semibold text-accent-600 hover:text-accent-700 inline-flex items-center gap-2 px-2 py-1" href="https://github.com/teozhengyang/programming-helper/blob/main/leetcode/prefix-sum/subarray-sum-equals-k.py" target="_blank" rel="noopener noreferrer">View Solution</a></td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2"><a className="underline font-semibold text-accent-600 hover:text-accent-700" href="https://leetcode.com/problems/product-of-array-except-self/" target="_blank" rel="noopener noreferrer">238. Product of Array Except Self</a></td>
                        <td className="px-3 py-2">Calculate product of array except self without division</td>
                        <td className="px-3 py-2"><a className="underline font-semibold text-accent-600 hover:text-accent-700 inline-flex items-center gap-2 px-2 py-1" href="https://github.com/teozhengyang/programming-helper/blob/main/leetcode/prefix-sum/product-of-array-except-self.py" target="_blank" rel="noopener noreferrer">View Solution</a></td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
)

export const prefixSumComplexity = (
    <div className="space-y-6">
        <section className="space-y-3">
            <div className="space-y-3">
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                    <li>Time: O(n) - single pass through array</li>
                    <li>Space: O(n) - store prefix sums & counter</li>
                </ul>
            </div>
        </section>
    </div>
);
