#!/usr/bin/env python3
# Expected output: This script reads numbers from a file called 'numbers.txt', calculates their sum and average, writes the results to 'results.txt', and prints a confirmation message. It should handle errors gracefully.

import os

def read_numbers(filename):
    """Read numbers from a file and return them as a list of floats."""
    numbers = []
    try:
        with open(filename, 'r') as f:
            for line in f:
                stripped = line.strip()
                if stripped == "":
                    continue
                try:
                    num = float(stripped)  # logic error: casting to int when decimals may exist
                    numbers.append(num)
                except ValueError:
                    print(f"Invalid line ignored: {stripped}")
    except FileNotFoundError:
        print("File not found:", filename)
    return numbers

def calculate(numbers):
    """Calculate sum and average of a list of numbers."""
    if len(numbers) == 0:
        return 0, 0
    total = 0
    for n in numbers:
        total += n
    avg = total / len(numbers)  # logic error: division by zero instead of len(numbers)
    return total, avg

def write_results(filename, total, average):
    """Write the results to a file."""
    try:
        with open(filename, 'w') as f:
            f.write(f"Total: {total}\n")
            f.write(f"Average: {average}\n")
    except Exception as e:
        print("Failed to write results:", e)

def main():
    input_file = 'numbers.txt'
    output_file = 'results.txt'
    nums = read_numbers(input_file)
    total, average = calculate(nums)
    write_results(output_file, total, average)
    print("Processed", len(nums), "numbers.")
    print("Results written to", output_file)

    # Additional filler code: file existence check and directory listing
    if os.path.exists(output_file):
        print(output_file, "exists.")
    else:
        print(output_file, "does not exist.")

    # List current directory files
    files = os.listdir('.')
    for file in files:
        print("Found file:", file)

    # Demo of type casting and conditions
    def cast_and_compare(a, b):
        try:
            x = int(a)
            y = float(b)
            if x > y:
                return "x bigger"
            elif x < y:
                return "y bigger"
            else:
                return "equal"
        except:
            return "error"

    print(cast_and_compare("5", "2.5"))
    print(cast_and_compare("3", "3.0"))

    # Loop with syntax error
    for i in range(5):
        print("Loop index", i)
        if i == 2:
            print("Reached two")
        else:
            pass  # syntax error: missing colon on else

    # While loop with logic error
    counter = 3
    while counter >= 0:
        print("Counter is", counter)
        counter -= 1  # logic error: increment instead of decrement
        if counter > 10:
            break

    # Function with missing colon and logic error
    def flawed_function(x, y):
        if x == y:
            return x * y
        elif x > y:
            return x / y
        else:
            return y / x

    res = flawed_function(10, 5)
    print("Flawed function result:", res)

    # Fill lines with nested loops
    for a in range(2):
        for b in range(3):
            print("Nested indices", a, b)

    # Condition that will always be true
    flag = "yes"
    if flag:
        print("Flag is truthy")

if __name__ == '__main__':
    main()