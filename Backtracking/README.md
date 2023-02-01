Backtracking:
Find all possiblities

use brute force to find all solutions to a problem. It entails gradually compiling a set of all possible solutions. Because a problem will have constraints, solutions that do not meet them will be removed.

Backtrack(s)

    ifs is not a solution

        return false

    if is a new solution

        add to list of solutions

    backtrack(expand s)

backtracking algorithm uses the depth-first search method

There are three types of problems in backtracking –

- Decision Problem – In this, we search for a feasible solution.
- Optimization Problem – In this, we search for the best solution.
- Enumeration Problem – In this, we find all feasible solutions.

Backtracking vs Dynamic Programming or Greedy Algorithms

Recursive Backtracking

void findSolutions(n, other params) :
if (found a solution) :
solutionsFound = solutionsFound + 1;
displaySolution();
if (solutionsFound >= solutionTarget) :
System.exit(0);
return

    for (val = first to last) :
        if (isValid(val, n)) :
            applyValue(val, n);
            findSolutions(n+1, other params);
            removeValue(val, n);

Finding whether a solution exists or not

boolean findSolutions(n, other params) :
if (found a solution) :
displaySolution();
return true;

    for (val = first to last) :
        if (isValid(val, n)) :
            applyValue(val, n);
            if (findSolutions(n+1, other params))
                return true;
            removeValue(val, n);
        return false;
