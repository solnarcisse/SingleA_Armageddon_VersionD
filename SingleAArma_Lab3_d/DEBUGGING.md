# **Lab 3 — Troubleshooting \& Debugging Exercise**



### Overview



This lab required analyzing an unknown codebase, identifying errors, applying targeted fixes, and documenting the debugging process. The goal was not to rewrite the application, but to diagnose and correct issues preventing successful execution.



### **(1)	Index.html**



##### Initial Errors Encountered



• JavaScript syntax errors prevented the script from executing

• Browser console reported an unexpected else error

• Runtime error occurred when accessing table rows outside valid bounds

• Score calculations produced incorrect highest and lowest values

• A loop behaved incorrectly due to improper increment logic

• A conditional statement always evaluated as true



##### Code Changes Made



• Fixed malformed if / else statement (ln.91)

• Added missing closing braces

• Corrected off-by-one error in loop (ln.32)

• Fixed min/max score calculation logic (ln.42 \& 43)

• Corrected loop increment/decrement logic (ln.105)

• Updated conditional that always evaluated as true



##### Debugging Steps Taken



1. Ran the application in a web browser

2\. Opened browser Developer Tools and reviewed console error messages

3\. Fixed JavaScript syntax errors that prevented the script from running

4\. Corrected loop conditions that caused runtime errors

5\. Fixed logic errors in score calculations (min/max reversed)

6\. Corrected loop behavior and conditional logic

7\. Tested changes incrementally after each fix

8\. Confirmed application ran without errors



##### Final Result



• Application runs without errors

• Score summary displays correctly

• No console errors remain



### **(2)	python\_app4.py**

##### 

##### Initial Errors Encountered



• Syntax Error due to missing colons (:) in else statements and function definitions

• Division Error caused by dividing by zero when calculating the average

• Logic error resulting in an infinite loop due to incorrect counter updates (increment)

• Incorrect type casting, where numeric input was cast to int instead of float

• File handling issues 



##### Debugging Steps Taken



1. Ran script and observed Python error messages

2\. Fixed syntax errors first to allow execution

3\. Addressed runtime exceptions

4\. Corrected logic errors after script ran successfully

5\. Tested changes incrementally after each fix

6\. Confirmed successful execution without errors



##### Code Changes Made



• Added missing colons to else blocks and function definitions (ln.85)

• Replaced division by zero with a correct average calculation using list length (ln.31)

• Fixed increment to decrement (ln.92)

• Updated numeric type casting from int to float to support decimal values (ln.16)

• Preserved original program structure while applying targeted fixes only



##### Final Result



• Script runs successfully

• Numeric values are read correctly

• No runtime or syntax errors

### 

### **(3)	Script4.js**



##### Initial errors encountered



• Syntax Error in evaluate() function: Unexpected token 'else'.

• Assignment vs Comparison Error: if (players.length = 0) overwriting value instead of comparing.

• Logic Error in statistics calculation: max initialized to Infinity, min to -Infinity.

• For loop never executes: for (var k = players.length; k < 0; k--).

• Infinite while loop risk: cnt++ in while (cnt > 0) loop.



##### Debugging Steps Taken



1\. Read error messages carefully to identify syntax and runtime issues.

2\. Inspected the evaluate() function for missing braces.

3\. Reviewed all comparison operators (= vs ===) for correctness.

4\. Checked variable initialization and loop conditions for logic correctness.

5\. Used console.log() to trace loop and variable behavior.



##### Code Changes Made



• Added missing closing brace in evaluate() function. (ln.109)

• Changed = to === in comparison: if (players.length === 0). (ln.70)

• Corrected statistic calculation initialization: var max = -Infinity, var min = Infinity. (ln.26 \& 27)

• Fixed for loop condition: for (var k = players.length - 1; k >= 0; k--). (ln.91)

• Fixed while loop increment: cnt-- instead of cnt++. (ln.99)



##### Final Results



\- Script executed successfully with no syntax or runtime errors.

\- Correct output for average, highest, and lowest scores.

\- Loops iterate correctly and player manipulations work as intended.



### **(4) Script4.sh**



##### Initial errors encountered



• Syntax Errors: Missing closing brace } in the find\_longest function. Missing then keyword in if statements

• Runtime Errors: Division by zero when calculating average words per line

• Logic Errors: While loop incremented counter instead of decrementing → infinite loop



##### Debugging Steps Taken



1. Attempted to run the script and reviewed Bash error messages

2\. Used syntax validation 

3\. Fixed errors incrementally, testing after each change

4\. Avoided rewriting the script structure, focusing only on targeted fixes



##### Code Changes Made



• Division by Zero- Added a conditional check to prevent invalid (ln.24)

• Function Syntax Error- Added the missing } to properly close the function (ln.43)

• Infinite While Loop- incremented instead of decremented (ln.65)

• Invalid If Statement- Missing then keyword, Corrected if statement syntax (ln.43)



##### Final Results



• Script executes without errors

• All calculations display correctly

• Loops and conditionals behave as expected

• Script completes successfully using a valid input file



