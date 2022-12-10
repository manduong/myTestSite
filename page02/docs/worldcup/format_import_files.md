!!! WARNING
    It's highly suggested NOT to use colon character (':') to present score-like string - by default, MS Excel auto format the string with ':' to be date-time.

    Use '_' instead. Example: `3_1` for score, `0_1.75` and for bet_AB

### Format for importing matches:

~~~~~~~~~~~~~~~~~~~~~~~~ none
     A                 B        C      D        E          F          G
#match_datetime, match_group, teamA, teamB, def_AB_bet, def_BS_bet, score
~~~~~~~~~~~~~~~~~~~~~~~~

### Format for importing bet-scores:

~~~~~~~~~~~~~~~~~~~~~~~~ none
     A             B      C        D          E
#match_datetime, teamA, teamB, bet_score, win_ratio
~~~~~~~~~~~~~~~~~~~~~~~~

!!! Tip
    To use Vietnamese, save the CSV in UTF-8 encoding format.

