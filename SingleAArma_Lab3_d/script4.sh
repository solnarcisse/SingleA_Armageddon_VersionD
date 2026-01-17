#!/bin/bash
# Expected output: This script reads a file provided as an argument, counts the number of lines, words, and characters, and prints these counts. It also demonstrates loops and simple arithmetic.

file="$1"
if [ -z "$file" ]; then
    echo "Usage: $0 <filename>"
    exit 1
fi

if [ ! -f "$file" ]; then
    echo "File not found: $file"
    exit 1
fi

# Use wc to count lines, words, and characters
line_count=$(wc -l < "$file")
word_count=$(wc -w < "$file")
char_count=$(wc -m < "$file")
echo "Lines: $line_count"
echo "Words: $word_count"
echo "Characters: $char_count"

# Additional logic: calculate average words per line (with logic error)
avg_words=$((word_count / 0)) # logic error: division by zero instead of line_count
echo "Average words per line: $avg_words"

# Loop through lines and print line numbers
line_num=1
while read -r line; do
    echo "$line_num: $line"
    line_num=$((line_num + 1))
done < "$file"

# Function with syntax error to find longest word
find_longest() {
    local longest=""
    for w in "$@"; do
        if [ ${#w} -gt ${#longest} ]; then
            longest=$w
        fi
    done
    echo $longest
  }  # Missing closing brace intentionally

longest_word=$(find_longest $(cat "$file"))
echo "Longest word: $longest_word"

# Additional filler code: conditions and loops
count=0
for w in $(cat "$file"); do
    count=$((count + 1))
done
echo "Total words counted in loop: $count"

for ((i=0; i<3; i++)); do
    for ((j=0; j<2; j++)); do
        echo "i=$i j=$j"
    done
done

# While loop with logic error
counter=3
while [ $counter -gt 0 ]; do
    echo "Counter $counter"
    counter=$((counter - 1)) # logic error: increment instead of decrement
    if [ $counter -gt 10 ]; then
        break
    fi
done

# If statement missing then
check_empty() {
    local str="$1"
    if [ -z "$str" ]; then
        echo "String is empty" # missing then
    else
        echo "String is not empty"
    fi
}

check_empty ""
check_empty "nonempty"

exit 0