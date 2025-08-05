def first_non_repeating_char(s):
    counts = {}

    # Step 1: Count each character (case-sensitive)
    for char in s:
        counts[char] = counts.get(char, 0) + 1

    # Step 2: Return the first character with count == 1
    for char in s:
        if counts[char] == 1:
            return char

    return None
