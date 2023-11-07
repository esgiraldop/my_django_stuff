###########################
## PART 10: Simple Game ###
### --- CODEBREAKER --- ###
## --Nope--Close--Match--  ##
###########################

# It's time to actually make a simple command line game so put together everything
# you've learned so far about Python. The game goes like this:

# 1. The computer will think of 3 digit number that has no repeating digits.
# 2. You will then guess a 3 digit number
# 3. The computer will then give back clues, the possible clues are:
#
#     Close: You've guessed a correct number but in the wrong position
#     Match: You've guessed a correct number in the correct position
#     Nope: You haven't guess any of the numbers correctly
#
# 4. Based on these clues you will guess again until you break the code with a
#    perfect match!

import random

def gen_num():
    digits = list(range(10))
    random.shuffle(digits)
    return digits[:3]

def get_input():
    incorrect_length = True
    while incorrect_length:
        guess = input("What is your guess? ")
        if len(guess) != 3:
            print("Only a 3-digit number is allowed\n")
        else:
            repeated_num = True
            while repeated_num:
                guess = [int(x) for x in ' '.join(guess).split(" ")]
                if len(set(guess)) < 3:
                    print("Please enter a number with no repeating digits\n")
                    break
                else:
                    incorrect_length = False
                    repeated_num = False
    return guess

def check_nums(pc_guess, usr_guess):
    match_sum = 0
    close_sum = 0
    match_idxs = []
    message = "You obtained "
    # Checking for matches
    for i in range(len(pc_guess)):
        if pc_guess[i] == usr_guess[i]:
            match_sum += 1
            match_idxs.append(i)
    #Checking for closes
    for i in range(len(pc_guess)):
        if i in match_idxs:
            continue
        for j in range(len(pc_guess)):
            if j in match_idxs:
                continue
            if usr_guess[i] == pc_guess[j]:
                close_sum += 1

    if match_sum > 0 or close_sum > 0:
        if match_sum > 0 and close_sum > 0:
            if match_sum == 1:
                message = message + "1 match"
                if close_sum == 1:
                    message = message + " and 1 close"
                elif close_sum == 2:
                    message = message + " and 2 close"
            elif match_sum == 2:
                message = message + "2 matches"
                # If there are three matches, this function should not even be called
        elif match_sum > 0 and close_sum == 0:
            if match_sum == 1:
                message = message + "1 match"
            elif match_sum == 2:
                message = message + "2 matches"
        elif match_sum == 0 and close_sum > 0:
            if close_sum == 1:
                message = message + "1 close"
            elif close_sum == 2:
                message = message + "2 close"

        message = message + "!\n"
        print(message)
    else:
        message = message + "no close digits"
        print(message)


game_on = True
pc_guess = gen_num()
#print("The pc guess is: ", pc_guess)
while game_on:
    usr_guess = get_input()
    #print(usr_guess)

    if pc_guess == usr_guess:
        print("Perfect match!")
        break
    else:
        check_nums(pc_guess, usr_guess)