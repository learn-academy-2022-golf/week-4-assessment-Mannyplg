# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

def show_even number 
    if number.even?
        puts "#{number} is even."
    else
        puts "#{number} is odd."
    end
end

# p show_even num1 = 7
# # Expected output: '7 is odd'
# p show_even num2 = 42
# # Expected output: '42 is even'
# p show_even num3 = 221
# Expected output: '221 is odd'

# 7 is odd.
# nil
# 42 is even.
# nil
# 221 is odd.
# nil

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete


def remove_vowels string
    string.with_object("").gsub(/[aeiou]/, '*')
end

# Expected output: 'Rbbr Sl'
# beatles_album2 = 'Sgt Pepper'
# # Expected output: 'Sgt Pppr'
# beatles_album3 = 'Abbey Road'
# # Expected output: 'bby Rd'

# Created new class for the Beatles albums. Instantiate a new instance of class Hash 
beatles_album = Hash.new
# Albums are separated by key value pairs
beatles_album[:beatles_album1] = 'Rubber Soul'
beatles_album[:beatles_album2] = 'Sgt Pepper'
beatles_album[:beatles_album3] = 'Sgt Pepper'
p beatles_album
beatles_album.each do |key, string|
    p string.gsub(/[aeiou]/, '*')
    p string.tr('aeiou', '')
end

#  Output: Used gsub to replace vowels with * symbol.
#        {:beatles_album1=>"Rubber Soul", :beatles_album2=>"Sgt        
#        Pepper", :beatles_album3=>"Sgt Pepper"}

# Output: 
# "R*bb*r S**l"
# "Rbbr Sl"
# "Sgt P*pp*r"
# "Sgt Pppr"
# "Sgt P*pp*r"
# "Sgt Pppr"

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

# palindrome_tester1 = 'Racecar'
# # Expected output: 'Racecar is a palindrome'
# palindrome_tester2 = 'LEARN'
# # Expected output: 'LEARN is not a palindrome'
# palindrome_tester3 = 'Rotator'
# # Expected output: 'Rotator is a palindrome'

# Instaniate a new class of Palindrome testers, using a new instance of class Hash 

palindrome_tester = Hash.new
palindrome_tester[:palindrome_tester1] = 'Racecar'
palindrome_tester[:palindrome_tester2] = 'LEARN'
palindrome_tester[:palindrome_tester3] = 'Rotator'

p palindrome_tester

palindrome_tester.each do |key, string|
    if string === string.reverse!
        puts "#{string} is a palindrome"
    else 
        puts "#{string} is not a palidrome"
    end 
    end

    # Output:

    # {:palindrome_tester1=>"Racecar", :palindrome_tester2=>"LEARN", :palindrome_tester3=>"Rotator"}

#   racecaR is a palindrome
#   NRAEL is a palindrome
#   rotatoR is a palindrome
