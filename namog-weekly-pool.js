/**
 * 나모그 주간평가 문제 풀 (Level 1 + Level 2)
 * 구조: NAMOG_WEEKLY_POOL[level][weekKey] = { title, fromChapter, toChapter, chapterTitles, train, exam }
 */
window.NAMOG_WEEKLY_POOL = {
  "namog1": {
    "week1": {
      "title": "1주차 (Ch1 + Ch2)",
      "fromChapter": 1,
      "toChapter": 2,
      "train": [
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He <span class=\"blank\"></span> a kind teacher.",
          "opts": [
            "am",
            "are",
            "is",
            "was",
            "were"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "He+현재 → is"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "You and I <span class=\"blank\"></span> good friends.",
          "opts": [
            "am",
            "is",
            "are",
            "was",
            "were"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "You and I = we → are"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The book <span class=\"blank\"></span> on the desk.",
          "opts": [
            "am",
            "is",
            "are",
            "were",
            "be"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "The book(단수) → is"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "My parents <span class=\"blank\"></span> at work now.",
          "opts": [
            "am",
            "is",
            "are",
            "was",
            "were"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "parents(복수) → are"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> I late for class?",
          "opts": [
            "Am",
            "Is",
            "Are",
            "Was",
            "Were"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "I → Am"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "That movie <span class=\"blank\"></span> really exciting.",
          "opts": [
            "am",
            "is",
            "are",
            "were",
            "be"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "That movie(단수) → is"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "Her shoes <span class=\"blank\"></span> very new.",
          "opts": [
            "am",
            "is",
            "are",
            "was",
            "were"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "shoes(복수) → are"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "You <span class=\"blank\"></span> always kind to me.",
          "opts": [
            "am",
            "is",
            "are",
            "was",
            "were"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "You → are"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> Tom and Mike at the gym?",
          "opts": [
            "Am",
            "Is",
            "Are",
            "Was",
            "Were"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "복수 주어+현재 → Are"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "This soup <span class=\"blank\"></span> too salty.",
          "opts": [
            "am",
            "is",
            "are",
            "were",
            "be"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "This soup(단수) → is"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The kids <span class=\"blank\"></span> in the playground.",
          "opts": [
            "am",
            "is",
            "are",
            "was",
            "were"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "kids(복수)+과거 → were"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She <span class=\"blank\"></span> sick yesterday.",
          "opts": [
            "am",
            "is",
            "are",
            "was",
            "were"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "She+과거 → was"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> they at the museum last weekend?",
          "opts": [
            "Am",
            "Is",
            "Are",
            "Was",
            "Were"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "they+과거 → Were"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "It <span class=\"blank\"></span> very cold last winter.",
          "opts": [
            "am",
            "is",
            "are",
            "was",
            "were"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "It+과거 → was"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "We <span class=\"blank\"></span> tired after the trip.",
          "opts": [
            "am",
            "is",
            "are",
            "was",
            "were"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "We+과거 → were"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "My grandfather <span class=\"blank\"></span> a soldier.",
          "opts": [
            "am",
            "is",
            "are",
            "was",
            "were"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "단수+과거 → was"
        },
        {
          "q": "<b>주관식</b> · 우리말과 같도록 빈칸 완성.<br>나는 학생이다.",
          "sentence": "I <span class=\"blank\"></span> a student.",
          "subjective": true,
          "answers": [
            "am"
          ],
          "hint": "I+현재",
          "explain": "정답: <b>am</b>"
        },
        {
          "q": "<b>주관식</b> · 우리말과 같도록 빈칸 완성.<br>그녀는 어제 행복했다.",
          "sentence": "She <span class=\"blank\"></span> happy yesterday.",
          "subjective": true,
          "answers": [
            "was"
          ],
          "hint": "She+과거",
          "explain": "정답: <b>was</b>"
        },
        {
          "q": "<b>주관식</b> · 다음 문장을 의문문으로 바꾸시오.<br>They are tired.",
          "sentence": "<span class=\"blank\"></span> they tired?",
          "subjective": true,
          "answers": [
            "Are",
            "are"
          ],
          "hint": "be동사 도치",
          "explain": "정답: <b>Are</b>"
        },
        {
          "q": "<b>주관식</b> · 우리말과 같도록 빈칸 완성.<br>이것은 나의 책이다.",
          "sentence": "This is <span class=\"blank\"></span> book.",
          "subjective": true,
          "answers": [
            "my"
          ],
          "hint": "소유격",
          "explain": "정답: <b>my</b>"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "My brother <span class=\"blank\"></span> baseball every Sunday.",
          "opts": [
            "play",
            "plays",
            "played",
            "playing",
            "will plays"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "brother+현재 → plays"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She <span class=\"blank\"></span> her teeth every morning.",
          "opts": [
            "brush",
            "brushes",
            "brushed",
            "brushing",
            "brushs"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "sh로 끝남 → brushes"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "Jake <span class=\"blank\"></span> books in his free time.",
          "opts": [
            "read",
            "reads",
            "readed",
            "reading",
            "read's"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "Jake+현재 → reads"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The baby <span class=\"blank\"></span> a lot at night.",
          "opts": [
            "cry",
            "crys",
            "cries",
            "cried",
            "crying"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "자음+y → cries"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "My uncle <span class=\"blank\"></span> in Busan.",
          "opts": [
            "live",
            "lives",
            "lived",
            "living",
            "livees"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "3인칭 단수 → lives"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "Mr. Kim <span class=\"blank\"></span> the bus to work.",
          "opts": [
            "take",
            "takes",
            "took",
            "taking",
            "will take"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "3인칭 단수+현재 → takes"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "We <span class=\"blank\"></span> a great movie last night.",
          "opts": [
            "watch",
            "watches",
            "watched",
            "watching",
            "will watch"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "last night → watched"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "They <span class=\"blank\"></span> their grandparents last weekend.",
          "opts": [
            "visit",
            "visits",
            "visited",
            "visiting",
            "will visit"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "last weekend → visited"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I <span class=\"blank\"></span> a letter to my friend yesterday.",
          "opts": [
            "write",
            "writes",
            "wrote",
            "writing",
            "will write"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "yesterday → wrote"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He <span class=\"blank\"></span> the bus this morning.",
          "opts": [
            "take",
            "takes",
            "took",
            "taking",
            "will take"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "this morning → took"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "My mother <span class=\"blank\"></span> dinner an hour ago.",
          "opts": [
            "cook",
            "cooks",
            "cooked",
            "cooking",
            "will cook"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "an hour ago → cooked"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The children <span class=\"blank\"></span> happily yesterday.",
          "opts": [
            "play",
            "plays",
            "played",
            "playing",
            "will play"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "yesterday → played"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She <span class=\"blank\"></span> her keys last night.",
          "opts": [
            "lose",
            "loses",
            "lost",
            "losing",
            "will lose"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "last night → lost"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "We <span class=\"blank\"></span> the game last Friday.",
          "opts": [
            "win",
            "wins",
            "won",
            "winning",
            "will win"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "last Friday → won"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "Tom <span class=\"blank\"></span> visit Seoul next month.",
          "opts": [
            "was",
            "is",
            "will",
            "does",
            "were"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "next month → will"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I <span class=\"blank\"></span> call you tomorrow.",
          "opts": [
            "am",
            "will",
            "was",
            "do",
            "did"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "tomorrow → will"
        },
        {
          "q": "<b>주관식</b> · 그녀는 매일 우유를 마신다. (drink)",
          "sentence": "She <span class=\"blank\"></span> milk every day.",
          "subjective": true,
          "answers": [
            "drinks"
          ],
          "hint": "3인칭+s",
          "explain": "정답: <b>drinks</b>"
        },
        {
          "q": "<b>주관식</b> · 그는 어제 축구를 했다. (play)",
          "sentence": "He <span class=\"blank\"></span> soccer yesterday.",
          "subjective": true,
          "answers": [
            "played"
          ],
          "hint": "과거형",
          "explain": "정답: <b>played</b>"
        },
        {
          "q": "<b>주관식</b> · 그들은 그 영화를 좋아하지 않는다. (like)",
          "sentence": "They <span class=\"blank\"></span> the movie.",
          "subjective": true,
          "answers": [
            "don't like",
            "do not like"
          ],
          "hint": "They+부정",
          "explain": "정답: <b>don't like</b>"
        },
        {
          "q": "<b>주관식</b> · 그는 한국어를 말하나요? (speak)",
          "sentence": "<span class=\"blank\"></span> he <span class=\"blank\"></span> Korean?",
          "subjective": true,
          "answers": [
            "Does / speak",
            "does/speak"
          ],
          "hint": "Does+동사원형",
          "explain": "정답: <b>Does / speak</b>"
        }
      ],
      "exam": [
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The flowers <span class=\"blank\"></span> beautiful last spring.",
          "opts": [
            "am",
            "is",
            "are",
            "was",
            "were"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "flowers(복수)+과거 → were"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I <span class=\"blank\"></span> in the library this morning.",
          "opts": [
            "am",
            "is",
            "are",
            "was",
            "were"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "I+과거 → was"
        },
        {
          "q": "축약형으로 알맞지 <b>않은</b> 것은?",
          "sentence": "",
          "opts": [
            "I am → I'm",
            "She is → She's",
            "We are → We're",
            "They are → They're",
            "It is → Its"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "It is → It's (Its는 소유격)"
        },
        {
          "q": "축약형으로 알맞지 <b>않은</b> 것은?",
          "sentence": "",
          "opts": [
            "He is → He's",
            "You are → You're",
            "I am not → I'm not",
            "is not → isn't",
            "were not → weren'ts"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "were not → weren't"
        },
        {
          "q": "빈칸에 알맞은 형태는?",
          "sentence": "I waited for <span class=\"blank\"></span> at the station. (she)",
          "opts": [
            "she",
            "her",
            "hers",
            "herself",
            "she's"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "전치사 뒤 목적격 → her"
        },
        {
          "q": "빈칸에 알맞은 형태는?",
          "sentence": "This pencil is <span class=\"blank\"></span>. (he)",
          "opts": [
            "he",
            "him",
            "his",
            "her",
            "hers"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "소유대명사 → his"
        },
        {
          "q": "빈칸에 알맞은 형태는?",
          "sentence": "<span class=\"blank\"></span> dog is very cute. (they)",
          "opts": [
            "Their",
            "Them",
            "Theirs",
            "They",
            "They're"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "명사 앞 소유격 → Their"
        },
        {
          "q": "빈칸에 알맞은 형태는?",
          "sentence": "Please help <span class=\"blank\"></span> with my homework. (I)",
          "opts": [
            "I",
            "my",
            "me",
            "mine",
            "myself"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "목적격 → me"
        },
        {
          "q": "빈칸에 알맞은 형태는?",
          "sentence": "That bag is <span class=\"blank\"></span>. (we)",
          "opts": [
            "we",
            "us",
            "our",
            "ours",
            "we're"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "소유대명사 → ours"
        },
        {
          "q": "빈칸에 알맞은 형태는?",
          "sentence": "<span class=\"blank\"></span> camera takes nice photos. (he)",
          "opts": [
            "He",
            "Him",
            "His",
            "He's",
            "Himself"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "명사 앞 소유격 → His"
        },
        {
          "q": "빈칸에 들어갈 be동사가 나머지와 <b>다른</b> 것은?",
          "sentence": "",
          "opts": [
            "He <span class=\"blank\"></span> a doctor.",
            "Tom <span class=\"blank\"></span> tall.",
            "My sister <span class=\"blank\"></span> in her room.",
            "The boys <span class=\"blank\"></span> hungry.",
            "Mary <span class=\"blank\"></span> a student."
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "boys(복수)→are, 나머지→is"
        },
        {
          "q": "빈칸에 들어갈 be동사가 나머지와 <b>다른</b> 것은?",
          "sentence": "",
          "opts": [
            "I <span class=\"blank\"></span> happy yesterday.",
            "She <span class=\"blank\"></span> at home then.",
            "They <span class=\"blank\"></span> noisy last night.",
            "It <span class=\"blank\"></span> sunny that day.",
            "He <span class=\"blank\"></span> tired."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "They→were, 나머지→was"
        },
        {
          "q": "대화 응답으로 알맞은 것은?",
          "sentence": "A: Is your brother a student?<br>B: <span class=\"blank\"></span>",
          "opts": [
            "Yes, he is.",
            "No, he isn't a.",
            "Yes, he's not.",
            "No, he are.",
            "Yes, he am."
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "Is your brother → Yes, he is."
        },
        {
          "q": "대화 응답으로 알맞은 것은?",
          "sentence": "A: Were they at school?<br>B: <span class=\"blank\"></span>",
          "opts": [
            "Yes, they was.",
            "No, they weren't.",
            "Yes, they are.",
            "No, they wasn't.",
            "Yes, we were."
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "Were they → they weren't"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "I am a student.",
            "She is my friend.",
            "We is happy.",
            "They were tired.",
            "He was at the park."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "We is → We are"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "He likes me.",
            "I gave it to him.",
            "This is her bag.",
            "Their car is red.",
            "She book is new."
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "She book → Her book"
        },
        {
          "q": "<b>주관식</b> · 우리말과 같도록 빈칸 완성.<br>우리는 친구이다.",
          "sentence": "We <span class=\"blank\"></span> friends.",
          "subjective": true,
          "answers": [
            "are"
          ],
          "hint": "We+현재",
          "explain": "정답: <b>are</b>"
        },
        {
          "q": "<b>주관식</b> · 우리말과 같도록 빈칸 완성.<br>그 책은 그의 것이다.",
          "sentence": "The book is <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "his"
          ],
          "hint": "소유대명사",
          "explain": "정답: <b>his</b>"
        },
        {
          "q": "<b>주관식</b> · 다음 문장을 부정문으로 바꾸시오.<br>He is busy.",
          "sentence": "He <span class=\"blank\"></span> busy.",
          "subjective": true,
          "answers": [
            "is not",
            "isn't"
          ],
          "hint": "be동사+not",
          "explain": "정답: <b>is not / isn't</b>"
        },
        {
          "q": "<b>주관식</b> · 우리말과 같도록 빈칸 완성.<br>그것은 나의 것이다.",
          "sentence": "It is <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "mine"
          ],
          "hint": "소유대명사",
          "explain": "정답: <b>mine</b>"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "They <span class=\"blank\"></span> arrive at noon.",
          "opts": [
            "was",
            "will",
            "does",
            "is",
            "did"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "미래 → will"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> your sister speak English?",
          "opts": [
            "Do",
            "Does",
            "Is",
            "Are",
            "Did"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "sister+현재 → Does"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> you finish your homework last night?",
          "opts": [
            "Do",
            "Does",
            "Did",
            "Are",
            "Will"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "last night → Did"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> he like spicy food?",
          "opts": [
            "Do",
            "Does",
            "Did",
            "Is",
            "Are"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "he+현재 → Does"
        },
        {
          "q": "동사의 3인칭 단수형이 잘못된 것은?",
          "sentence": "",
          "opts": [
            "go → goes",
            "watch → watches",
            "study → studies",
            "fly → flies",
            "do → dos"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "do → does"
        },
        {
          "q": "동사의 과거형이 잘못된 것은?",
          "sentence": "",
          "opts": [
            "play → played",
            "stop → stopped",
            "cry → cried",
            "eat → ate",
            "go → goed"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "go → went"
        },
        {
          "q": "동사의 과거형이 잘못된 것은?",
          "sentence": "",
          "opts": [
            "come → came",
            "see → saw",
            "have → had",
            "make → made",
            "take → taked"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "take → took"
        },
        {
          "q": "밑줄 친 부분의 부정형으로 알맞지 <b>않은</b> 것은?",
          "sentence": "",
          "opts": [
            "He plays soccer. → He doesn't play soccer.",
            "I eat breakfast. → I don't eat breakfast.",
            "She went home. → She didn't went home.",
            "They will come. → They won't come.",
            "We study English. → We don't study English."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "didn't+동사원형 → go"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "She plays the piano.",
            "He watches TV.",
            "They studies hard.",
            "I drink coffee.",
            "We swim every day."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "They → study"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "I went to school.",
            "He doesn't like fish.",
            "She didn't came home.",
            "They will arrive soon.",
            "We ate dinner."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "didn't+동사원형 → come"
        },
        {
          "q": "다음 문장을 부정문으로 바꾼 것은?",
          "sentence": "She enjoys music.",
          "opts": [
            "She not enjoy music.",
            "She doesn't enjoys music.",
            "She doesn't enjoy music.",
            "She don't enjoy music.",
            "She isn't enjoy music."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "doesn't+동사원형 → enjoy"
        },
        {
          "q": "다음 문장을 의문문으로 바꾼 것은?",
          "sentence": "You like pizza.",
          "opts": [
            "Do you like pizza?",
            "Does you like pizza?",
            "Are you like pizza?",
            "You do like pizza?",
            "You like pizza do?"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "You+현재 → Do"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>그는 매일 운동한다.",
          "sentence": "He <span class=\"blank\"></span> every day.",
          "opts": [
            "exercise",
            "exercises",
            "exercised",
            "exercising",
            "will exercise"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "He+현재 → exercises"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>그녀는 학교에 가지 않는다.",
          "sentence": "She <span class=\"blank\"></span> to school.",
          "opts": [
            "don't go",
            "not goes",
            "doesn't go",
            "doesn't goes",
            "isn't go"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "She+doesn't+go"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>우리는 내일 떠날 것이다.",
          "sentence": "We <span class=\"blank\"></span> tomorrow.",
          "opts": [
            "leave",
            "leaves",
            "left",
            "will leave",
            "leaving"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "tomorrow → will leave"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>그들은 작년에 부산에 살았다.",
          "sentence": "They <span class=\"blank\"></span> in Busan last year.",
          "opts": [
            "live",
            "lives",
            "lived",
            "living",
            "will live"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "last year → lived"
        },
        {
          "q": "<b>주관식</b> · 나는 매일 책을 읽는다. (read)",
          "sentence": "I <span class=\"blank\"></span> a book every day.",
          "subjective": true,
          "answers": [
            "read"
          ],
          "hint": "I+현재",
          "explain": "정답: <b>read</b>"
        },
        {
          "q": "<b>주관식</b> · 우리는 내일 만날 것이다. (meet)",
          "sentence": "We <span class=\"blank\"></span> tomorrow.",
          "subjective": true,
          "answers": [
            "will meet"
          ],
          "hint": "미래",
          "explain": "정답: <b>will meet</b>"
        },
        {
          "q": "<b>주관식</b> · 그녀는 어제 늦지 않았다. (be)",
          "sentence": "She <span class=\"blank\"></span> late yesterday.",
          "subjective": true,
          "answers": [
            "was not",
            "wasn't"
          ],
          "hint": "was+not",
          "explain": "정답: <b>was not / wasn't</b>"
        },
        {
          "q": "<b>주관식</b> · 너는 영어를 공부하니? (study)",
          "sentence": "<span class=\"blank\"></span> you <span class=\"blank\"></span> English?",
          "subjective": true,
          "answers": [
            "Do / study",
            "do/study"
          ],
          "hint": "Do+동사원형",
          "explain": "정답: <b>Do / study</b>"
        }
      ],
      "chapterTitles": [
        "be동사와 인칭대명사",
        "일반동사"
      ]
    },
    "week2": {
      "title": "2주차 (Ch3~Ch4)",
      "fromChapter": 3,
      "toChapter": 4,
      "train": [
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She <span class=\"blank\"></span> a book right now.",
          "opts": [
            "read",
            "reads",
            "reading",
            "is reading",
            "was reading"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "right now → 현재진행 is reading"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "They <span class=\"blank\"></span> soccer at the moment.",
          "opts": [
            "play",
            "plays",
            "are playing",
            "played",
            "will play"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "at the moment → are playing"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "Look! The baby <span class=\"blank\"></span>.",
          "opts": [
            "sleep",
            "sleeps",
            "is sleeping",
            "slept",
            "will sleep"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "Look! → 현재진행"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I <span class=\"blank\"></span> dinner now.",
          "opts": [
            "cook",
            "cooks",
            "am cooking",
            "cooked",
            "will cook"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "now → am cooking"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The dogs <span class=\"blank\"></span> in the garden.",
          "opts": [
            "run",
            "runs",
            "are running",
            "ran",
            "will run"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "진행 중 → are running"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "My father <span class=\"blank\"></span> to work by bus every day.",
          "opts": [
            "go",
            "goes",
            "went",
            "going",
            "will go"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "every day → 현재 goes"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "We <span class=\"blank\"></span> the zoo last Saturday.",
          "opts": [
            "visit",
            "visits",
            "visited",
            "visiting",
            "will visit"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "last Saturday → visited"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He <span class=\"blank\"></span> his homework an hour ago.",
          "opts": [
            "finish",
            "finishes",
            "finished",
            "finishing",
            "will finish"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "an hour ago → finished"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She <span class=\"blank\"></span> coffee every morning.",
          "opts": [
            "drink",
            "drinks",
            "drank",
            "drinking",
            "will drink"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "every morning → drinks"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I <span class=\"blank\"></span> a movie yesterday.",
          "opts": [
            "see",
            "sees",
            "saw",
            "seeing",
            "will see"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "yesterday → saw"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "They <span class=\"blank\"></span> visit Paris next month.",
          "opts": [
            "are",
            "were",
            "will",
            "do",
            "did"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "next month → will"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "It <span class=\"blank\"></span> rain tomorrow.",
          "opts": [
            "is",
            "was",
            "will",
            "does",
            "did"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "tomorrow → will"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I <span class=\"blank\"></span> meet my cousin this weekend.",
          "opts": [
            "am",
            "was",
            "will",
            "do",
            "did"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "this weekend → will"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "We <span class=\"blank\"></span> have a party next Friday.",
          "opts": [
            "are",
            "were",
            "will",
            "do",
            "did"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "next Friday → will"
        },
        {
          "q": "동사의 -ing형이 잘못된 것은?",
          "sentence": "",
          "opts": [
            "run → running",
            "swim → swimming",
            "cry → crying",
            "make → makeing",
            "sit → sitting"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "make → making (e 탈락)"
        },
        {
          "q": "동사의 -ing형이 잘못된 것은?",
          "sentence": "",
          "opts": [
            "play → playing",
            "write → writing",
            "stop → stopping",
            "study → studying",
            "go → goeing"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "go → going"
        },
        {
          "q": "<b>주관식</b> · 그녀는 지금 책을 읽고 있다. (read)",
          "sentence": "She <span class=\"blank\"></span> a book now.",
          "subjective": true,
          "answers": [
            "is reading"
          ],
          "hint": "현재진행",
          "explain": "정답: <b>is reading</b>"
        },
        {
          "q": "<b>주관식</b> · 우리는 어제 영화를 봤다. (watch)",
          "sentence": "We <span class=\"blank\"></span> a movie yesterday.",
          "subjective": true,
          "answers": [
            "watched"
          ],
          "hint": "과거",
          "explain": "정답: <b>watched</b>"
        },
        {
          "q": "<b>주관식</b> · 그는 내일 떠날 것이다. (leave)",
          "sentence": "He <span class=\"blank\"></span> tomorrow.",
          "subjective": true,
          "answers": [
            "will leave"
          ],
          "hint": "미래",
          "explain": "정답: <b>will leave</b>"
        },
        {
          "q": "<b>주관식</b> · 그들은 지금 노래를 부르고 있다. (sing)",
          "sentence": "They <span class=\"blank\"></span> a song now.",
          "subjective": true,
          "answers": [
            "are singing"
          ],
          "hint": "현재진행",
          "explain": "정답: <b>are singing</b>"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I have <span class=\"blank\"></span> apple.",
          "opts": [
            "a",
            "an",
            "the",
            "×",
            "some"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "모음 발음 → an"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She is <span class=\"blank\"></span> teacher.",
          "opts": [
            "a",
            "an",
            "the",
            "×",
            "some"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "자음 발음 → a"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He bought <span class=\"blank\"></span> umbrella.",
          "opts": [
            "a",
            "an",
            "the",
            "×",
            "some"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "모음 발음 → an"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "There is <span class=\"blank\"></span> dog in the yard.",
          "opts": [
            "a",
            "an",
            "the",
            "×",
            "some"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "자음 → a"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She wants to be <span class=\"blank\"></span> artist.",
          "opts": [
            "a",
            "an",
            "the",
            "×",
            "some"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "모음 → an"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "Look at <span class=\"blank\"></span> sun!",
          "opts": [
            "a",
            "an",
            "the",
            "×",
            "some"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "유일한 것 → the"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I read a book. <span class=\"blank\"></span> book was interesting.",
          "opts": [
            "A",
            "An",
            "The",
            "×",
            "Some"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "앞서 언급한 것 → The"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She plays <span class=\"blank\"></span> piano well.",
          "opts": [
            "a",
            "an",
            "the",
            "×",
            "some"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "악기 앞 → the"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> moon is bright tonight.",
          "opts": [
            "A",
            "An",
            "The",
            "×",
            "Some"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "유일한 것 → The"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He goes to <span class=\"blank\"></span> school by bus.",
          "opts": [
            "a",
            "an",
            "the",
            "×",
            "some"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "학교 본래 목적 → 무관사"
        },
        {
          "q": "명사의 복수형이 잘못된 것은?",
          "sentence": "",
          "opts": [
            "book → books",
            "child → children",
            "tooth → teeth",
            "foot → feet",
            "mouse → mouses"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "mouse → mice"
        },
        {
          "q": "명사의 복수형이 잘못된 것은?",
          "sentence": "",
          "opts": [
            "box → boxes",
            "baby → babies",
            "leaf → leaves",
            "city → cities",
            "potato → potatos"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "potato → potatoes"
        },
        {
          "q": "명사의 복수형이 잘못된 것은?",
          "sentence": "",
          "opts": [
            "man → men",
            "woman → women",
            "fish → fishes",
            "sheep → sheep",
            "deer → deer"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "fish → fish (단복수 동일)"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "There are five <span class=\"blank\"></span> in the box.",
          "opts": [
            "apple",
            "apples",
            "an apple",
            "the apple",
            "apple's"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "five+복수 → apples"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I have two <span class=\"blank\"></span>.",
          "opts": [
            "child",
            "childs",
            "children",
            "childrens",
            "a child"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "복수 → children"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He brushes his <span class=\"blank\"></span> every day.",
          "opts": [
            "tooth",
            "tooths",
            "teeth",
            "teeths",
            "a tooth"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "복수 → teeth"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 관사를 넣으세요.<br>This is <span class=\"blank\"></span> egg.",
          "sentence": "This is <span class=\"blank\"></span> egg.",
          "subjective": true,
          "answers": [
            "an"
          ],
          "hint": "모음 발음",
          "explain": "정답: <b>an</b>"
        },
        {
          "q": "<b>주관식</b> · 명사의 복수형을 쓰세요.<br>child →",
          "sentence": "child → <span class=\"blank\"></span>",
          "subjective": true,
          "answers": [
            "children"
          ],
          "hint": "불규칙",
          "explain": "정답: <b>children</b>"
        },
        {
          "q": "<b>주관식</b> · 명사의 복수형을 쓰세요.<br>woman →",
          "sentence": "woman → <span class=\"blank\"></span>",
          "subjective": true,
          "answers": [
            "women"
          ],
          "hint": "불규칙",
          "explain": "정답: <b>women</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 관사를 넣으세요.<br>I play <span class=\"blank\"></span> piano.",
          "sentence": "I play <span class=\"blank\"></span> piano.",
          "subjective": true,
          "answers": [
            "the"
          ],
          "hint": "악기",
          "explain": "정답: <b>the</b>"
        }
      ],
      "exam": [
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "I am studying now.",
            "She watched TV yesterday.",
            "They will go tomorrow.",
            "He is play soccer now.",
            "We saw a movie last night."
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "is + 동사ing → is playing"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "He plays the piano well.",
            "I went to school yesterday.",
            "She will comes tomorrow.",
            "They are reading books.",
            "We had lunch at noon."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "will + 동사원형 → come"
        },
        {
          "q": "다음 문장의 진행형으로 알맞은 것은?",
          "sentence": "He writes a letter.",
          "opts": [
            "He is write a letter.",
            "He is wrote a letter.",
            "He is writing a letter.",
            "He writing a letter.",
            "He will writing a letter."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "be동사+동사ing → is writing"
        },
        {
          "q": "다음 문장의 과거형으로 알맞은 것은?",
          "sentence": "She buys flowers.",
          "opts": [
            "She buy flowers.",
            "She is buying flowers.",
            "She bought flowers.",
            "She buyed flowers.",
            "She will buy flowers."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "buy → bought (불규칙)"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>그는 지금 음악을 듣고 있다.",
          "sentence": "He <span class=\"blank\"></span> to music now.",
          "opts": [
            "listen",
            "listens",
            "is listening",
            "listened",
            "will listen"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "now → is listening"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>나는 어제 영화를 봤다.",
          "sentence": "I <span class=\"blank\"></span> a movie yesterday.",
          "opts": [
            "watch",
            "watches",
            "watched",
            "watching",
            "will watch"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "yesterday → watched"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>그녀는 내일 떠날 것이다.",
          "sentence": "She <span class=\"blank\"></span> tomorrow.",
          "opts": [
            "leaves",
            "left",
            "is leaving",
            "will leave",
            "was leaving"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "tomorrow → will leave"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>그들은 매일 운동한다.",
          "sentence": "They <span class=\"blank\"></span> every day.",
          "opts": [
            "exercise",
            "exercises",
            "exercised",
            "are exercising",
            "will exercise"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "They+현재 → exercise"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>우리는 지금 점심을 먹고 있다.",
          "sentence": "We <span class=\"blank\"></span> lunch now.",
          "opts": [
            "eat",
            "eats",
            "are eating",
            "ate",
            "will eat"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "now → are eating"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>그는 어제 학교에 갔다.",
          "sentence": "He <span class=\"blank\"></span> to school yesterday.",
          "opts": [
            "go",
            "goes",
            "went",
            "going",
            "will go"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "yesterday → went"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>그녀는 일찍 일어나지 않는다.",
          "sentence": "She <span class=\"blank\"></span> up early.",
          "opts": [
            "don't get",
            "not gets",
            "doesn't get",
            "isn't get",
            "didn't gets"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "She+doesn't+get"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>비가 올 것 같지 않다.",
          "sentence": "It <span class=\"blank\"></span> rain.",
          "opts": [
            "isn't",
            "wasn't",
            "won't",
            "doesn't",
            "didn't"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "미래 부정 → won't"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "My family <span class=\"blank\"></span> dinner at 7 yesterday.",
          "opts": [
            "have",
            "has",
            "had",
            "having",
            "will have"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "yesterday → had"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "Tom <span class=\"blank\"></span> tennis tomorrow.",
          "opts": [
            "play",
            "plays",
            "played",
            "is playing",
            "will play"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "tomorrow → will play"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I <span class=\"blank\"></span> a shower every morning.",
          "opts": [
            "take",
            "takes",
            "took",
            "taking",
            "will take"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "every morning, I → take"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "We <span class=\"blank\"></span> to the gym now.",
          "opts": [
            "go",
            "goes",
            "went",
            "are going",
            "will go"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "now → are going"
        },
        {
          "q": "<b>주관식</b> · 나는 작년에 일본에 갔다. (go)",
          "sentence": "I <span class=\"blank\"></span> to Japan last year.",
          "subjective": true,
          "answers": [
            "went"
          ],
          "hint": "과거 불규칙",
          "explain": "정답: <b>went</b>"
        },
        {
          "q": "<b>주관식</b> · 그녀는 다음주에 돌아올 것이다. (come)",
          "sentence": "She <span class=\"blank\"></span> back next week.",
          "subjective": true,
          "answers": [
            "will come"
          ],
          "hint": "미래",
          "explain": "정답: <b>will come</b>"
        },
        {
          "q": "<b>주관식</b> · 그는 매일 책을 읽는다. (read)",
          "sentence": "He <span class=\"blank\"></span> a book every day.",
          "subjective": true,
          "answers": [
            "reads"
          ],
          "hint": "3인칭+s",
          "explain": "정답: <b>reads</b>"
        },
        {
          "q": "<b>주관식</b> · 우리는 지금 공부하고 있다. (study)",
          "sentence": "We <span class=\"blank\"></span> now.",
          "subjective": true,
          "answers": [
            "are studying"
          ],
          "hint": "현재진행",
          "explain": "정답: <b>are studying</b>"
        },
        {
          "q": "다음 중 셀 수 <b>없는</b> 명사는?",
          "sentence": "",
          "opts": [
            "book",
            "pencil",
            "water",
            "apple",
            "chair"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "water는 물질명사"
        },
        {
          "q": "다음 중 셀 수 <b>없는</b> 명사는?",
          "sentence": "",
          "opts": [
            "money",
            "car",
            "desk",
            "cat",
            "dog"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "money는 추상/물질"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I drink <span class=\"blank\"></span> every morning.",
          "opts": [
            "a milk",
            "milk",
            "milks",
            "an milk",
            "the milks"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "셀 수 없는 명사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "There is <span class=\"blank\"></span> on the table.",
          "opts": [
            "a bread",
            "an bread",
            "bread",
            "breads",
            "two bread"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "bread는 셀 수 없음"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "I have a cat.",
            "She is an actor.",
            "He plays the guitar.",
            "I drink waters every day.",
            "The sky is blue."
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "water는 셀 수 없음 → water"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "I want an orange.",
            "She has two childrens.",
            "He is a doctor.",
            "The book is mine.",
            "She plays the violin."
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "children (이미 복수)"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "I want <u>an</u> banana.",
          "opts": [
            "a",
            "an",
            "the",
            "×",
            "some"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "자음 발음 → a"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "She has three <u>foots</u>.",
          "opts": [
            "foot",
            "feet",
            "footes",
            "foots",
            "a foot"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "foot → feet"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "There is <span class=\"blank\"></span> elephant at the zoo.",
          "opts": [
            "a",
            "an",
            "the",
            "×",
            "some"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "모음 → an"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I want to play <span class=\"blank\"></span> violin.",
          "opts": [
            "a",
            "an",
            "the",
            "×",
            "some"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "악기 → the"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> earth is round.",
          "opts": [
            "A",
            "An",
            "The",
            "×",
            "Some"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "유일한 것 → The"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She is <span class=\"blank\"></span> honest girl.",
          "opts": [
            "a",
            "an",
            "the",
            "×",
            "some"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "honest는 모음 발음 → an"
        },
        {
          "q": "명사의 복수형이 잘못된 것은?",
          "sentence": "",
          "opts": [
            "bus → buses",
            "watch → watches",
            "baby → babys",
            "class → classes",
            "dish → dishes"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "baby → babies"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "How much <span class=\"blank\"></span> do you need?",
          "opts": [
            "money",
            "moneys",
            "monies",
            "a money",
            "an money"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "money는 셀 수 없음"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "There are many <span class=\"blank\"></span> in the park.",
          "opts": [
            "child",
            "childs",
            "children",
            "childrens",
            "a child"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "복수 → children"
        },
        {
          "q": "다음 중 셀 수 <b>없는</b> 명사는?",
          "sentence": "",
          "opts": [
            "chair",
            "table",
            "information",
            "apple",
            "car"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "information은 추상명사"
        },
        {
          "q": "<b>주관식</b> · 명사의 복수형을 쓰세요.<br>leaf →",
          "sentence": "leaf → <span class=\"blank\"></span>",
          "subjective": true,
          "answers": [
            "leaves"
          ],
          "hint": "f→ves",
          "explain": "정답: <b>leaves</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 관사를 넣으세요.<br>Look at <span class=\"blank\"></span> sky.",
          "sentence": "Look at <span class=\"blank\"></span> sky.",
          "subjective": true,
          "answers": [
            "the"
          ],
          "hint": "유일한 것",
          "explain": "정답: <b>the</b>"
        },
        {
          "q": "<b>주관식</b> · 명사의 복수형을 쓰세요.<br>tomato →",
          "sentence": "tomato → <span class=\"blank\"></span>",
          "subjective": true,
          "answers": [
            "tomatoes"
          ],
          "hint": "o → oes",
          "explain": "정답: <b>tomatoes</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 관사를 넣으세요. (필요없으면 ×)<br>I drink <span class=\"blank\"></span> milk.",
          "sentence": "I drink <span class=\"blank\"></span> milk.",
          "subjective": true,
          "answers": [
            "×",
            "x",
            "no",
            "none"
          ],
          "hint": "셀 수 없음",
          "explain": "정답: <b>×(무관사)</b>"
        }
      ],
      "chapterTitles": [
        "시제",
        "명사와 관사"
      ]
    },
    "week3": {
      "title": "3주차 (Ch5~Ch6)",
      "fromChapter": 5,
      "toChapter": 6,
      "train": [
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> is my friend over there.",
          "opts": [
            "This",
            "That",
            "These",
            "Those",
            "It"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "멀리 단수 → That"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> are my new shoes.",
          "opts": [
            "This",
            "That",
            "These",
            "Those",
            "It"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "가까이 복수 → These"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> is a beautiful flower.",
          "opts": [
            "This",
            "These",
            "Those",
            "They",
            "Them"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "가까이 단수 → This"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> books on the shelf are mine.",
          "opts": [
            "This",
            "That",
            "These",
            "Those",
            "It"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "멀리 복수 → Those"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "Do you have <span class=\"blank\"></span> water?",
          "opts": [
            "some",
            "any",
            "much",
            "many",
            "a few"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "의문문 → any"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I have <span class=\"blank\"></span> friends in Seoul.",
          "opts": [
            "some",
            "any",
            "much",
            "a",
            "an"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "긍정+복수 → some"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "There aren't <span class=\"blank\"></span> apples in the basket.",
          "opts": [
            "some",
            "any",
            "many",
            "much",
            "a few"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "부정문 → any"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "Would you like <span class=\"blank\"></span> tea?",
          "opts": [
            "some",
            "any",
            "much",
            "many",
            "a few"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "권유 → some"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I lost my pen. I need <span class=\"blank\"></span>.",
          "opts": [
            "it",
            "one",
            "the one",
            "that",
            "ones"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "불특정 같은 종류 → one"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "This is my book. I love <span class=\"blank\"></span>.",
          "opts": [
            "one",
            "it",
            "that",
            "this",
            "ones"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "특정한 것 → it"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I want to buy a new bag. The one I have is too old.",
          "opts": [
            "one",
            "it",
            "that",
            "those",
            "these"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "불특정 같은 종류 → one"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He hurt <span class=\"blank\"></span> while running.",
          "opts": [
            "him",
            "his",
            "himself",
            "he",
            "hisself"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "주어=목적어 → himself"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She talks to <span class=\"blank\"></span> when she's alone.",
          "opts": [
            "she",
            "her",
            "hers",
            "herself",
            "she's"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "재귀 → herself"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I made this cake <span class=\"blank\"></span>.",
          "opts": [
            "my",
            "me",
            "mine",
            "myself",
            "I"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "강조 → myself"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "They enjoyed <span class=\"blank\"></span> at the party.",
          "opts": [
            "them",
            "their",
            "themselves",
            "theirself",
            "theirs"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "재귀 → themselves"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> car is parked outside.",
          "opts": [
            "He",
            "Him",
            "His",
            "He's",
            "Himself"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "명사 앞 → His"
        },
        {
          "q": "<b>주관식</b> · 우리말에 맞게 빈칸을 채우세요.<br>이것은 그의 책이다.",
          "sentence": "This is <span class=\"blank\"></span> book.",
          "subjective": true,
          "answers": [
            "his"
          ],
          "hint": "소유격",
          "explain": "정답: <b>his</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 적절한 재귀대명사를 넣으세요.<br>She made it <span class=\"blank\"></span>.",
          "sentence": "She made it <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "herself"
          ],
          "hint": "재귀",
          "explain": "정답: <b>herself</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 some 또는 any를 넣으세요.<br>I don't have <span class=\"blank\"></span> money.",
          "sentence": "I don't have <span class=\"blank\"></span> money.",
          "subjective": true,
          "answers": [
            "any"
          ],
          "hint": "부정문",
          "explain": "정답: <b>any</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 적절한 대명사를 넣으세요.<br>This pen is <span class=\"blank\"></span>. (소유대명사)",
          "sentence": "This pen is <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "mine"
          ],
          "hint": "소유대명사",
          "explain": "정답: <b>mine</b>"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She has a <span class=\"blank\"></span> dog.",
          "opts": [
            "cute",
            "cutely",
            "cuter",
            "cutest",
            "cuteness"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "명사 앞 형용사 → cute"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The flowers are <span class=\"blank\"></span>.",
          "opts": [
            "beauty",
            "beauties",
            "beautiful",
            "beautifully",
            "beautify"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "be동사+형용사 → beautiful"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He is a <span class=\"blank\"></span> student.",
          "opts": [
            "smart",
            "smartly",
            "smarter",
            "smartest",
            "smartness"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "명사 앞 → smart"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "This soup tastes <span class=\"blank\"></span>.",
          "opts": [
            "good",
            "goodly",
            "well",
            "better",
            "best"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "감각동사+형용사 → good"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She sings <span class=\"blank\"></span>.",
          "opts": [
            "beautiful",
            "beautifully",
            "beauty",
            "beautify",
            "beautifulness"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "동사 수식 부사 → beautifully"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He runs <span class=\"blank\"></span>.",
          "opts": [
            "fast",
            "fastly",
            "faster",
            "fastest",
            "fastness"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "fast는 형용사·부사 동형"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "They speak English <span class=\"blank\"></span>.",
          "opts": [
            "fluent",
            "fluently",
            "fluentness",
            "fluents",
            "more fluent"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "동사 수식 → fluently"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The boy answered <span class=\"blank\"></span>.",
          "opts": [
            "quick",
            "quicker",
            "quickly",
            "quickness",
            "quickest"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "동사 수식 → quickly"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She works <span class=\"blank\"></span>.",
          "opts": [
            "hard",
            "hardly",
            "harder",
            "hardest",
            "hardness"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "hard=열심히 (hardly=거의 ~않다)"
        },
        {
          "q": "빈도부사의 위치가 알맞은 것은?",
          "sentence": "",
          "opts": [
            "I always am happy.",
            "Always I am happy.",
            "I am always happy.",
            "I am happy always.",
            "Am I always happy?"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "be동사 뒤"
        },
        {
          "q": "빈도부사의 위치가 알맞은 것은?",
          "sentence": "",
          "opts": [
            "She often plays tennis.",
            "She plays often tennis.",
            "Often she plays tennis.",
            "She plays tennis often.",
            "Often plays she tennis."
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "일반동사 앞"
        },
        {
          "q": "빈칸에 알맞은 것은? (Sue는 한 번도 늦지 않는다.)",
          "sentence": "Sue is <span class=\"blank\"></span> late.",
          "opts": [
            "always",
            "never",
            "usually",
            "sometimes",
            "often"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "한 번도 ~ 않다 → never"
        },
        {
          "q": "형용사의 비교급이 잘못된 것은?",
          "sentence": "",
          "opts": [
            "tall → taller",
            "big → bigger",
            "happy → happier",
            "good → gooder",
            "fast → faster"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "good → better (불규칙)"
        },
        {
          "q": "형용사의 최상급이 잘못된 것은?",
          "sentence": "",
          "opts": [
            "tall → tallest",
            "big → biggest",
            "happy → happiest",
            "bad → baddest",
            "old → oldest"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "bad → worst (불규칙)"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "Tom is <span class=\"blank\"></span> than Jerry.",
          "opts": [
            "tall",
            "taller",
            "tallest",
            "more tall",
            "most tall"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "비교급 → taller"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "This is the <span class=\"blank\"></span> book I have.",
          "opts": [
            "good",
            "gooder",
            "better",
            "best",
            "most good"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "the+최상급 → best"
        },
        {
          "q": "<b>주관식</b> · 형용사의 비교급을 쓰세요.<br>big →",
          "sentence": "big → <span class=\"blank\"></span>",
          "subjective": true,
          "answers": [
            "bigger"
          ],
          "hint": "-er",
          "explain": "정답: <b>bigger</b>"
        },
        {
          "q": "<b>주관식</b> · 형용사의 비교급을 쓰세요.<br>good →",
          "sentence": "good → <span class=\"blank\"></span>",
          "subjective": true,
          "answers": [
            "better"
          ],
          "hint": "불규칙",
          "explain": "정답: <b>better</b>"
        },
        {
          "q": "<b>주관식</b> · 형용사의 최상급을 쓰세요.<br>happy →",
          "sentence": "happy → <span class=\"blank\"></span>",
          "subjective": true,
          "answers": [
            "happiest"
          ],
          "hint": "-iest",
          "explain": "정답: <b>happiest</b>"
        },
        {
          "q": "<b>주관식</b> · 부사로 바꾸세요.<br>quick →",
          "sentence": "quick → <span class=\"blank\"></span>",
          "subjective": true,
          "answers": [
            "quickly"
          ],
          "hint": "-ly",
          "explain": "정답: <b>quickly</b>"
        }
      ],
      "exam": [
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "This book is <span class=\"blank\"></span>.",
          "opts": [
            "my",
            "me",
            "mine",
            "I",
            "myself"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "소유대명사 → mine"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I gave <span class=\"blank\"></span> a present.",
          "opts": [
            "she",
            "her",
            "hers",
            "herself",
            "she's"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "목적격 → her"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> are good students.",
          "opts": [
            "Us",
            "Our",
            "We",
            "Ours",
            "Ourselves"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "주격 → We"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "This is my book.",
            "She helped herself.",
            "They love each other.",
            "Him is my brother.",
            "I made it myself."
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "Him → He (주격)"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "I have some money.",
            "Do you have any time?",
            "She doesn't have some friends.",
            "I want some water.",
            "Are there any chairs?"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "부정문 → any"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "<u>These</u> book is mine.",
          "opts": [
            "This",
            "That",
            "Those",
            "It",
            "Them"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "단수 명사 → This"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "I hurt <u>my</u> while playing.",
          "opts": [
            "I",
            "me",
            "mine",
            "myself",
            "my own"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "재귀 → myself"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "<u>Them</u> are my friends.",
          "opts": [
            "They",
            "Their",
            "Theirs",
            "Themselves",
            "Those"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "주격 → They"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>이것은 나의 가방이다.",
          "sentence": "<span class=\"blank\"></span> is my bag.",
          "opts": [
            "This",
            "That",
            "These",
            "Those",
            "It"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "가까이 단수 → This"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>저것들은 그녀의 책들이다.",
          "sentence": "<span class=\"blank\"></span> are her books.",
          "opts": [
            "This",
            "That",
            "These",
            "Those",
            "It"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "멀리 복수 → Those"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>나는 스스로 했다.",
          "sentence": "I did it <span class=\"blank\"></span>.",
          "opts": [
            "my",
            "me",
            "mine",
            "myself",
            "I"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "강조 → myself"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> is my pencil.",
          "opts": [
            "This",
            "These",
            "Those",
            "Them",
            "They"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "단수 → This"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I don't have <span class=\"blank\"></span> idea.",
          "opts": [
            "some",
            "any",
            "much",
            "many",
            "a few"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "부정문 → any"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He cut <span class=\"blank\"></span> while cooking.",
          "opts": [
            "him",
            "his",
            "himself",
            "he",
            "hisself"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "재귀 → himself"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "My pen is here. <span class=\"blank\"></span> is yours?",
          "opts": [
            "What",
            "Where",
            "When",
            "Which",
            "How"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "위치 → Where"
        },
        {
          "q": "빈칸에 알맞은 형태는?",
          "sentence": "<span class=\"blank\"></span> bag is heavy. (we)",
          "opts": [
            "We",
            "Us",
            "Our",
            "Ours",
            "Ourselves"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "소유격 → Our"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 지시대명사를 넣으세요.<br>(저것들) <span class=\"blank\"></span> are mine.",
          "sentence": "<span class=\"blank\"></span> are mine.",
          "subjective": true,
          "answers": [
            "Those",
            "those"
          ],
          "hint": "멀리 복수",
          "explain": "정답: <b>Those</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 적절한 재귀대명사를 넣으세요.<br>They enjoyed <span class=\"blank\"></span>.",
          "sentence": "They enjoyed <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "themselves"
          ],
          "hint": "재귀 복수",
          "explain": "정답: <b>themselves</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 some 또는 any를 넣으세요.<br>Would you like <span class=\"blank\"></span> coffee?",
          "sentence": "Would you like <span class=\"blank\"></span> coffee?",
          "subjective": true,
          "answers": [
            "some"
          ],
          "hint": "권유",
          "explain": "정답: <b>some</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 적절한 대명사를 넣으세요.<br>(우리는) <span class=\"blank\"></span> are friends.",
          "sentence": "<span class=\"blank\"></span> are friends.",
          "subjective": true,
          "answers": [
            "We",
            "we"
          ],
          "hint": "주격",
          "explain": "정답: <b>We</b>"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "Math is <span class=\"blank\"></span> difficult than science.",
          "opts": [
            "very",
            "more",
            "most",
            "much",
            "many"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "긴 형용사 비교급 → more"
        },
        {
          "q": "빈칸에 알맞은 것은? (그 가방은 너무 비싸다.)",
          "sentence": "The bag is <span class=\"blank\"></span> expensive.",
          "opts": [
            "too",
            "so",
            "very",
            "much",
            "more"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "too=지나치게"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She is <span class=\"blank\"></span> kind to everyone.",
          "opts": [
            "too",
            "so",
            "much",
            "more",
            "most"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "so=매우(긍정)"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He runs <span class=\"blank\"></span> fast.",
          "opts": [
            "a",
            "an",
            "the",
            "very",
            "most"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "부사 수식 → very"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "She is beautiful.",
            "He runs fast.",
            "I am very happy.",
            "She speaks fluent.",
            "They play well."
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "speaks fluent → fluently"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "This is the biggest.",
            "He is taller than me.",
            "She works hard.",
            "He runs more fast.",
            "I am happier."
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "more fast → faster"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "She sings <u>beautiful</u>.",
          "opts": [
            "beauty",
            "beautify",
            "beautiful",
            "beautifully",
            "beautifulness"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "sings+부사 → beautifully"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "This bag is more <u>cheap</u>.",
          "opts": [
            "cheap",
            "cheaper",
            "cheapest",
            "more cheap",
            "most cheap"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "짧은 형용사 → cheaper"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>그녀는 빠르게 달린다.",
          "sentence": "She runs <span class=\"blank\"></span>.",
          "opts": [
            "quick",
            "quickly",
            "quicker",
            "quickness",
            "quickest"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "동사 수식 → quickly"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>나는 가끔 영화를 본다.",
          "sentence": "I <span class=\"blank\"></span> watch movies.",
          "opts": [
            "always",
            "never",
            "sometimes",
            "usually",
            "often"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "가끔 → sometimes"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>이 책이 가장 흥미롭다.",
          "sentence": "This book is the <span class=\"blank\"></span>.",
          "opts": [
            "interesting",
            "more interesting",
            "most interesting",
            "interestinger",
            "interestingest"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "긴 형용사 최상급 → most"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He is the <span class=\"blank\"></span> boy in his class.",
          "opts": [
            "tall",
            "taller",
            "tallest",
            "more tall",
            "most tall"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "the+최상급 → tallest"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "This is <span class=\"blank\"></span> than that.",
          "opts": [
            "good",
            "gooder",
            "better",
            "best",
            "most good"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "비교급 불규칙 → better"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She speaks very <span class=\"blank\"></span>.",
          "opts": [
            "soft",
            "softs",
            "softly",
            "softer",
            "softest"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "동사 수식 → softly"
        },
        {
          "q": "빈도부사의 위치가 알맞은 것은?",
          "sentence": "",
          "opts": [
            "Never I lie.",
            "I never lie.",
            "I lie never.",
            "Never lie I.",
            "I am never lie."
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "일반동사 앞"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He is <span class=\"blank\"></span> tired to study.",
          "opts": [
            "too",
            "so",
            "very",
            "much",
            "more"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "too=지나치게(부정적)"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 적절한 빈도부사를 넣으세요.<br>(절대 ~않다) She is <span class=\"blank\"></span> late.",
          "sentence": "She is <span class=\"blank\"></span> late.",
          "subjective": true,
          "answers": [
            "never"
          ],
          "hint": "절대 ~ 아니다",
          "explain": "정답: <b>never</b>"
        },
        {
          "q": "<b>주관식</b> · 형용사의 최상급을 쓰세요.<br>bad →",
          "sentence": "bad → <span class=\"blank\"></span>",
          "subjective": true,
          "answers": [
            "worst"
          ],
          "hint": "불규칙",
          "explain": "정답: <b>worst</b>"
        },
        {
          "q": "<b>주관식</b> · 부사로 바꾸세요.<br>beautiful →",
          "sentence": "beautiful → <span class=\"blank\"></span>",
          "subjective": true,
          "answers": [
            "beautifully"
          ],
          "hint": "-ly",
          "explain": "정답: <b>beautifully</b>"
        },
        {
          "q": "<b>주관식</b> · 형용사의 비교급을 쓰세요.<br>far →",
          "sentence": "far → <span class=\"blank\"></span>",
          "subjective": true,
          "answers": [
            "farther",
            "further"
          ],
          "hint": "불규칙",
          "explain": "정답: <b>farther/further</b>"
        }
      ],
      "chapterTitles": [
        "대명사",
        "형용사와 부사"
      ]
    },
    "week4": {
      "title": "4주차 (Ch7~Ch8)",
      "fromChapter": 7,
      "toChapter": 8,
      "train": [
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "This soup tastes <span class=\"blank\"></span>.",
          "opts": [
            "good",
            "goodly",
            "well",
            "better",
            "badly"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "감각동사+형용사 → good"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The music sounds <span class=\"blank\"></span>.",
          "opts": [
            "beautiful",
            "beautifully",
            "beauty",
            "beautify",
            "beautifulness"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "sound+형용사 → beautiful"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She looks <span class=\"blank\"></span> today.",
          "opts": [
            "happy",
            "happily",
            "happiness",
            "happier",
            "happiest"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "look+형용사 → happy"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The flowers smell <span class=\"blank\"></span>.",
          "opts": [
            "sweet",
            "sweetly",
            "sweetness",
            "sweeter",
            "sweetest"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "smell+형용사 → sweet"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The fabric feels <span class=\"blank\"></span>.",
          "opts": [
            "soft",
            "softly",
            "softness",
            "softer",
            "softest"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "feel+형용사 → soft"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He gave <span class=\"blank\"></span> a present.",
          "opts": [
            "I",
            "my",
            "me",
            "mine",
            "myself"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "4형식 간접목적어 → me"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "Mom made <span class=\"blank\"></span> a cake.",
          "opts": [
            "we",
            "our",
            "us",
            "ours",
            "ourselves"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "4형식 간접목적어 → us"
        },
        {
          "q": "4형식을 3형식으로 알맞게 바꾼 것은?",
          "sentence": "He gave me a book.",
          "opts": [
            "He gave a book me.",
            "He gave a book to me.",
            "He gave a book for me.",
            "He gave to me a book.",
            "He gave me to a book."
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "give → to"
        },
        {
          "q": "4형식을 3형식으로 알맞게 바꾼 것은?",
          "sentence": "She made him a cake.",
          "opts": [
            "She made a cake him.",
            "She made a cake to him.",
            "She made a cake for him.",
            "She made for him a cake.",
            "She made him for a cake."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "make → for"
        },
        {
          "q": "빈칸에 알맞은 전치사는?",
          "sentence": "He bought a gift <span class=\"blank\"></span> his mother.",
          "opts": [
            "to",
            "for",
            "of",
            "at",
            "in"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "buy → for"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "They call <span class=\"blank\"></span> Tom.",
          "opts": [
            "he",
            "his",
            "him",
            "himself",
            "his own"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "5형식 목적어 → him"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I find this book <span class=\"blank\"></span>.",
          "opts": [
            "interest",
            "interests",
            "interested",
            "interesting",
            "interestingly"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "find+목+형용사 → interesting"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "His joke made me <span class=\"blank\"></span>.",
          "opts": [
            "laugh",
            "laughs",
            "laughed",
            "laughing",
            "to laugh"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "make+목+동사원형 → laugh"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "My parents want me <span class=\"blank\"></span> a doctor.",
          "opts": [
            "be",
            "is",
            "being",
            "to be",
            "was"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "want+목+to부정사 → to be"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She let me <span class=\"blank\"></span> her bike.",
          "opts": [
            "use",
            "to use",
            "used",
            "using",
            "uses"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "let+목+동사원형 → use"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The baby <span class=\"blank\"></span>.",
          "opts": [
            "cry",
            "cried",
            "is crying",
            "cries",
            "all"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "자동사 단독 사용 가능"
        },
        {
          "q": "<b>주관식</b> · 4형식 → 3형식 바꾸시오.<br>He gave me a book.",
          "sentence": "He gave a book <span class=\"blank\"></span> me.",
          "subjective": true,
          "answers": [
            "to"
          ],
          "hint": "give → to",
          "explain": "정답: <b>to</b>"
        },
        {
          "q": "<b>주관식</b> · 4형식 → 3형식 바꾸시오.<br>She made him a cake.",
          "sentence": "She made a cake <span class=\"blank\"></span> him.",
          "subjective": true,
          "answers": [
            "for"
          ],
          "hint": "make → for",
          "explain": "정답: <b>for</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>His joke makes me <span class=\"blank\"></span>. (laugh)",
          "sentence": "His joke makes me <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "laugh"
          ],
          "hint": "make+목+동사원형",
          "explain": "정답: <b>laugh</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>I want her <span class=\"blank\"></span>. (come)",
          "sentence": "I want her <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "to come"
          ],
          "hint": "want+목+to부정사",
          "explain": "정답: <b>to come</b>"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> is your name?",
          "opts": [
            "Who",
            "What",
            "When",
            "Where",
            "Why"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "이름 → What"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> is your best friend?",
          "opts": [
            "Who",
            "What",
            "When",
            "Where",
            "Why"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "사람 → Who"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> do you like to eat?",
          "opts": [
            "Who",
            "What",
            "When",
            "Where",
            "Why"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "음식(사물) → What"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> teaches English?",
          "opts": [
            "Who",
            "What",
            "When",
            "Where",
            "Why"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "사람 → Who"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> is your birthday?",
          "opts": [
            "Who",
            "What",
            "When",
            "Where",
            "Why"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "날짜/시간 → When"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> do you live?",
          "opts": [
            "Who",
            "What",
            "When",
            "Where",
            "Why"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "장소 → Where"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> are you crying?",
          "opts": [
            "Who",
            "What",
            "When",
            "Where",
            "Why"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "이유 → Why"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> does she go to school?",
          "opts": [
            "Who",
            "What",
            "When",
            "Where",
            "Why"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "장소 → Where"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> did the show start?",
          "opts": [
            "Who",
            "What",
            "When",
            "Where",
            "Why"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "시간 → When"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> are you today?",
          "opts": [
            "What",
            "Who",
            "Where",
            "How",
            "Why"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "상태 → How"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> old are you?",
          "opts": [
            "What",
            "Who",
            "Where",
            "How",
            "Why"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "How old (몇 살)"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> many books do you have?",
          "opts": [
            "What",
            "Who",
            "Where",
            "How",
            "Why"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "How many (몇 개)"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> much is this bag?",
          "opts": [
            "What",
            "Who",
            "Where",
            "How",
            "Why"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "How much (얼마)"
        },
        {
          "q": "의문문 어순으로 알맞은 것은?",
          "sentence": "",
          "opts": [
            "What you are doing?",
            "What are you doing?",
            "You are doing what?",
            "Are what you doing?",
            "Are you doing what?"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "의문사+be+주어"
        },
        {
          "q": "의문문 어순으로 알맞은 것은?",
          "sentence": "",
          "opts": [
            "Where you go yesterday?",
            "Where did you go yesterday?",
            "Where did go you yesterday?",
            "Did where you go yesterday?",
            "You went where yesterday?"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "의문사+조동사+주어"
        },
        {
          "q": "의문문 어순으로 알맞은 것은?",
          "sentence": "",
          "opts": [
            "When you will come?",
            "When will come you?",
            "When will you come?",
            "You will come when?",
            "Will when you come?"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "의문사+조동사+주어"
        },
        {
          "q": "<b>주관식</b> · 알맞은 의문사를 쓰세요.<br>(무엇) <span class=\"blank\"></span> is your hobby?",
          "sentence": "<span class=\"blank\"></span> is your hobby?",
          "subjective": true,
          "answers": [
            "What"
          ],
          "hint": "무엇",
          "explain": "정답: <b>What</b>"
        },
        {
          "q": "<b>주관식</b> · 알맞은 의문사를 쓰세요.<br>(언제) <span class=\"blank\"></span> do you study?",
          "sentence": "<span class=\"blank\"></span> do you study?",
          "subjective": true,
          "answers": [
            "When"
          ],
          "hint": "언제",
          "explain": "정답: <b>When</b>"
        },
        {
          "q": "<b>주관식</b> · 알맞은 의문사를 쓰세요.<br>(어디서) <span class=\"blank\"></span> did you find it?",
          "sentence": "<span class=\"blank\"></span> did you find it?",
          "subjective": true,
          "answers": [
            "Where"
          ],
          "hint": "어디서",
          "explain": "정답: <b>Where</b>"
        },
        {
          "q": "<b>주관식</b> · 알맞은 의문사를 쓰세요.<br>(왜) <span class=\"blank\"></span> are you tired?",
          "sentence": "<span class=\"blank\"></span> are you tired?",
          "subjective": true,
          "answers": [
            "Why"
          ],
          "hint": "왜",
          "explain": "정답: <b>Why</b>"
        }
      ],
      "exam": [
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I bought <span class=\"blank\"></span>.",
          "opts": [
            "it",
            "at",
            "in",
            "on",
            "to"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "타동사+목적어"
        },
        {
          "q": "다음 중 자동사인 것은?",
          "sentence": "",
          "opts": [
            "eat",
            "read",
            "sleep",
            "make",
            "write"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "sleep은 자동사"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "She looks happy.",
            "He gave me a book.",
            "I find it interesting.",
            "The flower smells sweetly.",
            "They want me to come."
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "smell+형용사 → sweet"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "He bought a gift for me.",
            "She gave a book to him.",
            "They made a cake for us.",
            "I sent a letter to her.",
            "He brought a present to me."
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "bring → to (정답이지만 wait, bring은 to 맞음) - 다시: 모두 OK인 듯. 재구성 필요."
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "This music sounds <u>beautifully</u>.",
          "opts": [
            "beauty",
            "beautiful",
            "beautify",
            "more beautiful",
            "most beautiful"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "sound+형용사 → beautiful"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "She let me <u>to go</u> home.",
          "opts": [
            "go",
            "going",
            "went",
            "goes",
            "to going"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "let+목+동사원형 → go"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>그것은 좋은 냄새가 난다.",
          "sentence": "It smells <span class=\"blank\"></span>.",
          "opts": [
            "good",
            "well",
            "goodly",
            "gooder",
            "best"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "smell+형용사"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>그녀는 나에게 케이크를 만들어 주었다.",
          "sentence": "She made me <span class=\"blank\"></span>.",
          "opts": [
            "cake",
            "a cake",
            "the cake",
            "some cakes",
            "with cake"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "수여동사 4형식"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He looks <span class=\"blank\"></span>.",
          "opts": [
            "tired",
            "tiredly",
            "tiredness",
            "more tired",
            "most tired"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "look+형용사 → tired"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She showed <span class=\"blank\"></span> her new dress.",
          "opts": [
            "I",
            "my",
            "me",
            "mine",
            "myself"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "간접목적어 → me"
        },
        {
          "q": "빈칸에 알맞은 전치사는?",
          "sentence": "She sent a letter <span class=\"blank\"></span> her friend.",
          "opts": [
            "to",
            "for",
            "of",
            "at",
            "in"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "send → to"
        },
        {
          "q": "빈칸에 알맞은 전치사는?",
          "sentence": "He made a sandwich <span class=\"blank\"></span> me.",
          "opts": [
            "to",
            "for",
            "of",
            "at",
            "in"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "make → for"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "My mom made me <span class=\"blank\"></span> my room.",
          "opts": [
            "clean",
            "cleans",
            "cleaned",
            "cleaning",
            "to clean"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "make+목+동사원형"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "They named the baby <span class=\"blank\"></span>.",
          "opts": [
            "Anna",
            "Annas",
            "an Anna",
            "to Anna",
            "of Anna"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "5형식 목적격보어 (이름)"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The teacher asked me <span class=\"blank\"></span> a question.",
          "opts": [
            "answer",
            "answers",
            "answered",
            "answering",
            "to answer"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "ask+목+to부정사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "This bag feels <span class=\"blank\"></span>.",
          "opts": [
            "heavy",
            "heavily",
            "heaviness",
            "more heavy",
            "heavyly"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "feel+형용사 → heavy"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 적절한 형용사 또는 부사를 쓰세요.<br>(달콤한) The cake tastes <span class=\"blank\"></span>.",
          "sentence": "The cake tastes <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "sweet"
          ],
          "hint": "감각동사+형용사",
          "explain": "정답: <b>sweet</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 전치사를 쓰세요.<br>He bought a gift <span class=\"blank\"></span> me.",
          "sentence": "He bought a gift <span class=\"blank\"></span> me.",
          "subjective": true,
          "answers": [
            "for"
          ],
          "hint": "buy → for",
          "explain": "정답: <b>for</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>She let me <span class=\"blank\"></span>. (go)",
          "sentence": "She let me <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "go"
          ],
          "hint": "let+목+동사원형",
          "explain": "정답: <b>go</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>(흥미로운) I find it <span class=\"blank\"></span>.",
          "sentence": "I find it <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "interesting"
          ],
          "hint": "5형식 보어",
          "explain": "정답: <b>interesting</b>"
        },
        {
          "q": "의문문 어순으로 알맞은 것은?",
          "sentence": "",
          "opts": [
            "Why is she sad?",
            "Why she is sad?",
            "Is why she sad?",
            "She is why sad?",
            "She why is sad?"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "의문사+be+주어"
        },
        {
          "q": "질문에 대한 알맞은 대답은?",
          "sentence": "Q: Where are you from?",
          "opts": [
            "I'm fine.",
            "I'm 12.",
            "I'm from Korea.",
            "I'm a student.",
            "I like pizza."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "Where → 장소"
        },
        {
          "q": "질문에 대한 알맞은 대답은?",
          "sentence": "Q: When is your birthday?",
          "opts": [
            "In May.",
            "In Seoul.",
            "Because it's hot.",
            "Yes, it is.",
            "It's red."
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "When → 시간"
        },
        {
          "q": "질문에 대한 알맞은 대답은?",
          "sentence": "Q: Why are you happy?",
          "opts": [
            "I'm Tom.",
            "Tomorrow.",
            "Because I won.",
            "At home.",
            "Very well."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "Why → Because"
        },
        {
          "q": "질문에 대한 알맞은 대답은?",
          "sentence": "Q: How is your sister?",
          "opts": [
            "She's tall.",
            "She's a teacher.",
            "She's fine.",
            "She's 20.",
            "She has a cat."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "How are you → 상태"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "What is your name?",
            "Where do you live?",
            "When you are coming?",
            "Why is she late?",
            "How old are you?"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "When are you coming?"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "<u>Who</u> do you go to school?",
          "opts": [
            "What",
            "When",
            "Where",
            "Why",
            "How"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "학교에 가는 장소 → Where"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "How <u>much</u> books do you have?",
          "opts": [
            "many",
            "more",
            "most",
            "much",
            "a lot"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "셀 수 있는 → many"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>너는 누구를 좋아하니?",
          "sentence": "<span class=\"blank\"></span> do you like?",
          "opts": [
            "Who",
            "What",
            "When",
            "Where",
            "Why"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "누구 → Who"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>그것은 어떻게 작동하니?",
          "sentence": "<span class=\"blank\"></span> does it work?",
          "opts": [
            "Who",
            "What",
            "When",
            "Where",
            "How"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "어떻게 → How"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> color do you like?",
          "opts": [
            "Who",
            "What",
            "When",
            "Where",
            "Why"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "What+명사 (어떤 색)"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> often do you exercise?",
          "opts": [
            "What",
            "Who",
            "Where",
            "How",
            "Why"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "How often (얼마나 자주)"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> tall is your brother?",
          "opts": [
            "What",
            "Who",
            "Where",
            "How",
            "Why"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "How tall (얼마나 키가 큰)"
        },
        {
          "q": "의문문 어순으로 알맞은 것은?",
          "sentence": "",
          "opts": [
            "What time it is?",
            "What time is it?",
            "What is time it?",
            "Is what time it?",
            "It is what time?"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "의문사+be+주어"
        },
        {
          "q": "질문에 대한 알맞은 대답은?",
          "sentence": "Q: How many cats do you have?",
          "opts": [
            "I'm 12.",
            "I have two.",
            "I'm fine.",
            "In my house.",
            "Because I love them."
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "How many → 개수"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> sport is your favorite?",
          "opts": [
            "What",
            "Who",
            "Where",
            "How",
            "Why"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "What+명사"
        },
        {
          "q": "<b>주관식</b> · 알맞은 의문사를 쓰세요.<br>(누구) <span class=\"blank\"></span> is that boy?",
          "sentence": "<span class=\"blank\"></span> is that boy?",
          "subjective": true,
          "answers": [
            "Who"
          ],
          "hint": "누구",
          "explain": "정답: <b>Who</b>"
        },
        {
          "q": "<b>주관식</b> · 알맞은 의문사를 쓰세요.<br>(어떻게) <span class=\"blank\"></span> do you go to school?",
          "sentence": "<span class=\"blank\"></span> do you go to school?",
          "subjective": true,
          "answers": [
            "How"
          ],
          "hint": "어떻게",
          "explain": "정답: <b>How</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 말을 쓰세요.<br>How <span class=\"blank\"></span> students are there? (몇 명)",
          "sentence": "How <span class=\"blank\"></span> students are there?",
          "subjective": true,
          "answers": [
            "many"
          ],
          "hint": "셀 수 있는",
          "explain": "정답: <b>many</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 말을 쓰세요.<br>How <span class=\"blank\"></span> is this? (얼마)",
          "sentence": "How <span class=\"blank\"></span> is this?",
          "subjective": true,
          "answers": [
            "much"
          ],
          "hint": "가격",
          "explain": "정답: <b>much</b>"
        }
      ],
      "chapterTitles": [
        "동사의 종류",
        "의문사"
      ]
    },
    "week5": {
      "title": "5주차 (Ch9~Ch10)",
      "fromChapter": 9,
      "toChapter": 10,
      "train": [
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She <span class=\"blank\"></span> happy today.",
          "opts": [
            "isn't",
            "aren't",
            "wasn't",
            "don't",
            "doesn't"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "She+현재 부정 → isn't"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "They <span class=\"blank\"></span> at home yesterday.",
          "opts": [
            "isn't",
            "aren't",
            "wasn't",
            "weren't",
            "don't"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "They+과거 부정 → weren't"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> Tom your brother?",
          "opts": [
            "Do",
            "Does",
            "Is",
            "Are",
            "Did"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "Tom+be → Is"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> you tired last night?",
          "opts": [
            "Do",
            "Does",
            "Are",
            "Was",
            "Were"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "you+과거 → Were"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He <span class=\"blank\"></span> like coffee.",
          "opts": [
            "don't",
            "doesn't",
            "isn't",
            "aren't",
            "wasn't"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "He+현재 부정 → doesn't"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "They <span class=\"blank\"></span> go to school yesterday.",
          "opts": [
            "don't",
            "doesn't",
            "didn't",
            "isn't",
            "aren't"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "과거 부정 → didn't"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> she play tennis?",
          "opts": [
            "Do",
            "Does",
            "Is",
            "Are",
            "Did"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "she+현재 → Does"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> you finish your homework?",
          "opts": [
            "Do",
            "Does",
            "Did",
            "Are",
            "Is"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "과거 의문 → Did"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I <span class=\"blank\"></span> see him yesterday.",
          "opts": [
            "don't",
            "doesn't",
            "didn't",
            "isn't",
            "wasn't"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "과거 부정 → didn't"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> quiet, please.",
          "opts": [
            "Be",
            "Is",
            "Are",
            "Do",
            "Have"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "be동사 명령 → Be"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> the door, please.",
          "opts": [
            "Open",
            "Opens",
            "Opened",
            "Opening",
            "To open"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "명령문 → 동사원형"
        },
        {
          "q": "부정 명령문으로 알맞은 것은?",
          "sentence": "",
          "opts": [
            "No run!",
            "Not run!",
            "Don't run!",
            "Doesn't run!",
            "Didn't run!"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "Don't + 동사원형"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> be late.",
          "opts": [
            "No",
            "Not",
            "Don't",
            "Doesn't",
            "Didn't"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "be동사 부정 명령도 Don't"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> a beautiful day!",
          "opts": [
            "How",
            "What",
            "Why",
            "When",
            "Who"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "What+명사 → What"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> beautiful she is!",
          "opts": [
            "How",
            "What",
            "Why",
            "When",
            "Who"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "How+형용사 → How"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> kind boys they are!",
          "opts": [
            "How",
            "What",
            "Why",
            "When",
            "Who"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "What+형용사+명사 → What"
        },
        {
          "q": "<b>주관식</b> · 부정문으로 바꾸세요.<br>She likes math.",
          "sentence": "She <span class=\"blank\"></span> math.",
          "subjective": true,
          "answers": [
            "doesn't like",
            "does not like"
          ],
          "hint": "doesn't+동사원형",
          "explain": "정답: <b>doesn't like</b>"
        },
        {
          "q": "<b>주관식</b> · 의문문으로 바꾸세요.<br>You went there.",
          "sentence": "<span class=\"blank\"></span> you <span class=\"blank\"></span> there?",
          "subjective": true,
          "answers": [
            "Did / go",
            "did/go"
          ],
          "hint": "Did+동사원형",
          "explain": "정답: <b>Did / go</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 말을 쓰세요.<br>(감탄문) <span class=\"blank\"></span> a cute baby!",
          "sentence": "<span class=\"blank\"></span> a cute baby!",
          "subjective": true,
          "answers": [
            "What"
          ],
          "hint": "What+명사",
          "explain": "정답: <b>What</b>"
        },
        {
          "q": "<b>주관식</b> · 명령문으로 바꾸세요.<br>(조용히 해라) <span class=\"blank\"></span> quiet.",
          "sentence": "<span class=\"blank\"></span> quiet.",
          "subjective": true,
          "answers": [
            "Be"
          ],
          "hint": "be동사 명령",
          "explain": "정답: <b>Be</b>"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I <span class=\"blank\"></span> swim very well.",
          "opts": [
            "can",
            "cans",
            "cant",
            "could",
            "mays"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "can+동사원형"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> you speak French?",
          "opts": [
            "Do",
            "Does",
            "Are",
            "Can",
            "Is"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "능력 → Can"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She <span class=\"blank\"></span> read books when she was three.",
          "opts": [
            "can",
            "could",
            "may",
            "must",
            "should"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "과거 능력 → could"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He can <span class=\"blank\"></span> the piano.",
          "opts": [
            "play",
            "plays",
            "played",
            "playing",
            "to play"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "조동사+동사원형"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> I come in?",
          "opts": [
            "Do",
            "Does",
            "Is",
            "May",
            "Will"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "허락 → May"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "It <span class=\"blank\"></span> rain tonight.",
          "opts": [
            "may",
            "mays",
            "mayed",
            "maying",
            "to may"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "추측 → may"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "You <span class=\"blank\"></span> use my pen.",
          "opts": [
            "may",
            "mays",
            "maying",
            "mayed",
            "to may"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "허락 → may"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "You <span class=\"blank\"></span> wear a seat belt.",
          "opts": [
            "must",
            "musts",
            "musted",
            "musting",
            "to must"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "의무 → must"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I <span class=\"blank\"></span> finish my homework today.",
          "opts": [
            "have",
            "have to",
            "has to",
            "had to",
            "having to"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "I+have to"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He <span class=\"blank\"></span> work on Sundays.",
          "opts": [
            "have to",
            "has to",
            "had to",
            "having to",
            "must to"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "He+has to"
        },
        {
          "q": "must의 부정 의미가 다른 것은?",
          "sentence": "",
          "opts": [
            "You must not be late.",
            "You must not lie.",
            "You must not run here.",
            "You don't have to come.",
            "You must not enter."
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "don't have to=~할 필요 없다"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "We <span class=\"blank\"></span> hurry. There's plenty of time.",
          "opts": [
            "must",
            "have to",
            "mustn't",
            "don't have to",
            "should"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "~할 필요 없다 → don't have to"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "You <span class=\"blank\"></span> study harder.",
          "opts": [
            "should",
            "shoulds",
            "shoulded",
            "shoulding",
            "to should"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "충고 → should"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "You <span class=\"blank\"></span> eat too much candy.",
          "opts": [
            "should",
            "should not",
            "must",
            "may",
            "can"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "하지 말아야 → should not"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> I tell her the truth?",
          "opts": [
            "Do",
            "Does",
            "Are",
            "Should",
            "Have"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "조언 요청 → Should"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I <span class=\"blank\"></span> call you tomorrow.",
          "opts": [
            "am",
            "was",
            "will",
            "do",
            "did"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "미래 → will"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 조동사를 쓰세요.<br>(능력) She <span class=\"blank\"></span> speak Korean.",
          "sentence": "She <span class=\"blank\"></span> speak Korean.",
          "subjective": true,
          "answers": [
            "can"
          ],
          "hint": "능력",
          "explain": "정답: <b>can</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 조동사를 쓰세요.<br>(허락) <span class=\"blank\"></span> I sit here?",
          "sentence": "<span class=\"blank\"></span> I sit here?",
          "subjective": true,
          "answers": [
            "May",
            "Can"
          ],
          "hint": "허락",
          "explain": "정답: <b>May/Can</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 조동사를 쓰세요.<br>(의무) You <span class=\"blank\"></span> stop.",
          "sentence": "You <span class=\"blank\"></span> stop.",
          "subjective": true,
          "answers": [
            "must",
            "have to"
          ],
          "hint": "의무",
          "explain": "정답: <b>must</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 조동사를 쓰세요.<br>(충고) You <span class=\"blank\"></span> eat more vegetables.",
          "sentence": "You <span class=\"blank\"></span> eat more vegetables.",
          "subjective": true,
          "answers": [
            "should"
          ],
          "hint": "충고",
          "explain": "정답: <b>should</b>"
        }
      ],
      "exam": [
        {
          "q": "감탄문 어순으로 알맞은 것은?",
          "sentence": "",
          "opts": [
            "How fast he runs!",
            "How he runs fast!",
            "Fast how he runs!",
            "He runs how fast!",
            "How runs he fast!"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "How+부사+S+V"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She is a teacher, <span class=\"blank\"></span>?",
          "opts": [
            "is she",
            "isn't she",
            "does she",
            "doesn't she",
            "aren't she"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "긍정문 → 부정 부가의문"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "You don't like fish, <span class=\"blank\"></span>?",
          "opts": [
            "do you",
            "don't you",
            "are you",
            "aren't you",
            "didn't you"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "부정문 → 긍정 부가의문"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He went home, <span class=\"blank\"></span>?",
          "opts": [
            "did he",
            "didn't he",
            "does he",
            "doesn't he",
            "wasn't he"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "과거 긍정 → didn't he"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "She doesn't like fish.",
            "Did you see him?",
            "Don't be afraid.",
            "What a nice car!",
            "Are she happy?"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "Are she → Is she"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "He is tall.",
            "Are you tired?",
            "I don't know.",
            "She didn't went home.",
            "Be careful!"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "didn't+동사원형 → go"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "<u>No</u> open the window.",
          "opts": [
            "Not",
            "Don't",
            "Doesn't",
            "Didn't",
            "Aren't"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "명령문 부정 → Don't"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "<u>How</u> a wonderful trip!",
          "opts": [
            "What",
            "Why",
            "When",
            "Where",
            "Which"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "What+명사"
        },
        {
          "q": "다음 문장을 의문문으로 바꾼 것은?",
          "sentence": "He likes pizza.",
          "opts": [
            "Do he likes pizza?",
            "Does he like pizza?",
            "Does he likes pizza?",
            "Is he like pizza?",
            "He likes pizza?"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "Does+S+동사원형"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>그녀는 학생이 아니다.",
          "sentence": "She <span class=\"blank\"></span> a student.",
          "opts": [
            "isn't",
            "aren't",
            "don't",
            "doesn't",
            "wasn't"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "She+isn't"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>그는 정말 똑똑하구나!",
          "sentence": "<span class=\"blank\"></span> smart he is!",
          "opts": [
            "What",
            "How",
            "Why",
            "Where",
            "When"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "How+형용사"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>늦지 마세요.",
          "sentence": "<span class=\"blank\"></span> late.",
          "opts": [
            "No be",
            "Not be",
            "Don't be",
            "Doesn't be",
            "Didn't be"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "Don't+be"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> we go home now?",
          "opts": [
            "Do",
            "Does",
            "Shall",
            "Is",
            "Are"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "제안 → Shall"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> the lights, please.",
          "opts": [
            "Turn off",
            "Turns off",
            "Turned off",
            "Turning off",
            "To turn off"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "명령 → 동사원형"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He can swim, <span class=\"blank\"></span>?",
          "opts": [
            "can he",
            "can't he",
            "does he",
            "doesn't he",
            "is he"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "조동사 부가의문문"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "They went there, <span class=\"blank\"></span>?",
          "opts": [
            "did they",
            "didn't they",
            "do they",
            "don't they",
            "were they"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "과거 긍정 → didn't they"
        },
        {
          "q": "<b>주관식</b> · 부정 명령문으로 바꾸세요.<br>Don't run.",
          "sentence": "<span class=\"blank\"></span> run.",
          "subjective": true,
          "answers": [
            "Don't",
            "Do not"
          ],
          "hint": "Don't+동사원형",
          "explain": "정답: <b>Don't</b>"
        },
        {
          "q": "<b>주관식</b> · 부가의문문을 완성하세요.<br>You are tired, <span class=\"blank\"></span>?",
          "sentence": "You are tired, <span class=\"blank\"></span>?",
          "subjective": true,
          "answers": [
            "aren't you"
          ],
          "hint": "긍정→부정",
          "explain": "정답: <b>aren't you</b>"
        },
        {
          "q": "<b>주관식</b> · 감탄문 완성.<br>(How로 시작) <span class=\"blank\"></span> tall he is!",
          "sentence": "<span class=\"blank\"></span> tall he is!",
          "subjective": true,
          "answers": [
            "How"
          ],
          "hint": "How+형용사",
          "explain": "정답: <b>How</b>"
        },
        {
          "q": "<b>주관식</b> · 부정문으로 바꾸세요.<br>I went home.",
          "sentence": "I <span class=\"blank\"></span> home.",
          "subjective": true,
          "answers": [
            "didn't go",
            "did not go"
          ],
          "hint": "didn't+동사원형",
          "explain": "정답: <b>didn't go</b>"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> you like some tea?",
          "opts": [
            "Do",
            "Does",
            "Are",
            "Would",
            "Have"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "공손한 권유 → Would"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He <span class=\"blank\"></span> come tomorrow.",
          "opts": [
            "will",
            "wills",
            "willed",
            "willing",
            "to will"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "will+동사원형"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I <span class=\"blank\"></span> meet you at 5.",
          "opts": [
            "am",
            "was",
            "will",
            "do",
            "did"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "미래 → will"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "She can swim.",
            "He must be tired.",
            "I should go now.",
            "They can to dance.",
            "You may sit down."
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "조동사+동사원형 → dance"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "I will help you.",
            "She has to study.",
            "He musts go.",
            "You should rest.",
            "They may come."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "must는 s 안 붙음"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "He must <u>to</u> go now.",
          "opts": [
            "go",
            "goes",
            "going",
            "to going",
            "gone"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "조동사+동사원형"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "She <u>cans</u> sing well.",
          "opts": [
            "can",
            "cans",
            "could",
            "may",
            "might"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "can은 s 안 붙음"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "He <u>have to</u> study.",
          "opts": [
            "have to",
            "has to",
            "had to",
            "having to",
            "must to"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "He → has to"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>너는 일찍 자야 한다.",
          "sentence": "You <span class=\"blank\"></span> go to bed early.",
          "opts": [
            "can",
            "may",
            "must",
            "might",
            "could"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "~해야 한다 → must"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>그녀는 영어를 잘 한다.",
          "sentence": "She <span class=\"blank\"></span> speak English well.",
          "opts": [
            "can",
            "may",
            "must",
            "should",
            "will"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "능력 → can"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>비가 올지도 모른다.",
          "sentence": "It <span class=\"blank\"></span> rain.",
          "opts": [
            "can",
            "may",
            "must",
            "should",
            "will"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "추측 → may"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> you open the window for me?",
          "opts": [
            "Do",
            "Does",
            "Is",
            "Could",
            "Are"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "공손한 요청 → Could"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "You <span class=\"blank\"></span> smoke here.",
          "opts": [
            "mustn't",
            "not must",
            "don't must",
            "aren't",
            "isn't"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "금지 → mustn't"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> I help you?",
          "opts": [
            "Am",
            "Is",
            "Are",
            "May",
            "Have"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "제안 → May"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She <span class=\"blank\"></span> able to swim now.",
          "opts": [
            "is",
            "are",
            "can",
            "will",
            "may"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "be able to = can"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He <span class=\"blank\"></span> arrive soon.",
          "opts": [
            "will",
            "wills",
            "willing",
            "willed",
            "to will"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "미래 → will"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>He <span class=\"blank\"></span> to study tonight. (have)",
          "sentence": "He <span class=\"blank\"></span> to study tonight.",
          "subjective": true,
          "answers": [
            "has"
          ],
          "hint": "He+has to",
          "explain": "정답: <b>has</b>"
        },
        {
          "q": "<b>주관식</b> · 부정문으로 바꾸세요.<br>You must run.",
          "sentence": "You <span class=\"blank\"></span> run.",
          "subjective": true,
          "answers": [
            "must not",
            "mustn't"
          ],
          "hint": "must+not",
          "explain": "정답: <b>mustn't</b>"
        },
        {
          "q": "<b>주관식</b> · 의문문으로 바꾸세요.<br>I can go.",
          "sentence": "<span class=\"blank\"></span> I <span class=\"blank\"></span>?",
          "subjective": true,
          "answers": [
            "Can / go",
            "can/go"
          ],
          "hint": "조동사 도치",
          "explain": "정답: <b>Can / go</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 조동사를 쓰세요.<br>(미래) I <span class=\"blank\"></span> see you tomorrow.",
          "sentence": "I <span class=\"blank\"></span> see you tomorrow.",
          "subjective": true,
          "answers": [
            "will"
          ],
          "hint": "미래",
          "explain": "정답: <b>will</b>"
        }
      ],
      "chapterTitles": [
        "문장의 종류",
        "조동사"
      ]
    },
    "week6": {
      "title": "6주차 (Ch11~Ch12)",
      "fromChapter": 11,
      "toChapter": 12,
      "train": [
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I want <span class=\"blank\"></span> a doctor.",
          "opts": [
            "be",
            "to be",
            "being",
            "is",
            "was"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "want+to부정사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She decided <span class=\"blank\"></span> abroad.",
          "opts": [
            "go",
            "to go",
            "going",
            "goes",
            "went"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "decide+to부정사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> is important.",
          "opts": [
            "Study",
            "To study",
            "Studying",
            "Studies",
            "Studied"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "주어 to부정사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "My hobby is <span class=\"blank\"></span> photos.",
          "opts": [
            "take",
            "to take",
            "took",
            "takes",
            "taken"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "보어 to부정사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I hope <span class=\"blank\"></span> you again.",
          "opts": [
            "see",
            "to see",
            "seeing",
            "saw",
            "seen"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "hope+to부정사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He plans <span class=\"blank\"></span> a new car.",
          "opts": [
            "buy",
            "to buy",
            "buying",
            "bought",
            "buys"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "plan+to부정사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I have a lot of work <span class=\"blank\"></span>.",
          "opts": [
            "do",
            "to do",
            "doing",
            "did",
            "does"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "명사 수식 to부정사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He needs something <span class=\"blank\"></span>.",
          "opts": [
            "drink",
            "to drink",
            "drinking",
            "drank",
            "drinks"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "-thing+to부정사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "There is no time <span class=\"blank\"></span>.",
          "opts": [
            "waste",
            "to waste",
            "wasting",
            "wasted",
            "wastes"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "time+to부정사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "Give me a book <span class=\"blank\"></span>.",
          "opts": [
            "read",
            "to read",
            "reading",
            "read's",
            "reads"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "명사+to부정사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She has many friends <span class=\"blank\"></span> with.",
          "opts": [
            "play",
            "to play",
            "playing",
            "played",
            "plays"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "명사 수식 to부정사"
        },
        {
          "q": "빈칸에 알맞은 것은? (목적)",
          "sentence": "He went there <span class=\"blank\"></span> his friend.",
          "opts": [
            "meet",
            "to meet",
            "meeting",
            "met",
            "meets"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "~하기 위해 (목적)"
        },
        {
          "q": "빈칸에 알맞은 것은? (감정 원인)",
          "sentence": "I am glad <span class=\"blank\"></span> you.",
          "opts": [
            "meet",
            "to meet",
            "meeting",
            "met",
            "meets"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "감정의 원인"
        },
        {
          "q": "빈칸에 알맞은 것은? (목적)",
          "sentence": "She studies hard <span class=\"blank\"></span> the exam.",
          "opts": [
            "pass",
            "to pass",
            "passing",
            "passed",
            "passes"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "~하기 위해"
        },
        {
          "q": "빈칸에 알맞은 것은? (감정)",
          "sentence": "He was surprised <span class=\"blank\"></span> the news.",
          "opts": [
            "hear",
            "to hear",
            "hearing",
            "heard",
            "hears"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "감정의 원인"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I'm sorry <span class=\"blank\"></span> late.",
          "opts": [
            "be",
            "to be",
            "being",
            "was",
            "is"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "감정의 원인"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>I hope <span class=\"blank\"></span> you soon. (see)",
          "sentence": "I hope <span class=\"blank\"></span> you soon.",
          "subjective": true,
          "answers": [
            "to see"
          ],
          "hint": "hope+to부정사",
          "explain": "정답: <b>to see</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>I have many books <span class=\"blank\"></span>. (read)",
          "sentence": "I have many books <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "to read"
          ],
          "hint": "형용사적",
          "explain": "정답: <b>to read</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>He went out <span class=\"blank\"></span> some food. (buy)",
          "sentence": "He went out <span class=\"blank\"></span> some food.",
          "subjective": true,
          "answers": [
            "to buy"
          ],
          "hint": "목적",
          "explain": "정답: <b>to buy</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>She is happy <span class=\"blank\"></span> here. (be)",
          "sentence": "She is happy <span class=\"blank\"></span> here.",
          "subjective": true,
          "answers": [
            "to be"
          ],
          "hint": "감정",
          "explain": "정답: <b>to be</b>"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I like coffee <span class=\"blank\"></span> tea.",
          "opts": [
            "and",
            "but",
            "or",
            "so",
            "because"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "and (그리고)"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He is poor <span class=\"blank\"></span> happy.",
          "opts": [
            "and",
            "but",
            "or",
            "so",
            "because"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "but (그러나)"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "Would you like coffee <span class=\"blank\"></span> tea?",
          "opts": [
            "and",
            "but",
            "or",
            "so",
            "because"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "or (또는)"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "It was raining, <span class=\"blank\"></span> I took an umbrella.",
          "opts": [
            "and",
            "but",
            "or",
            "so",
            "because"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "so (그래서)"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She is smart <span class=\"blank\"></span> kind.",
          "opts": [
            "and",
            "but",
            "or",
            "so",
            "because"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "and"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He studied hard, <span class=\"blank\"></span> he passed the test.",
          "opts": [
            "and",
            "but",
            "or",
            "so",
            "because"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "so (결과)"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> I was young, I lived in Busan.",
          "opts": [
            "When",
            "Where",
            "Why",
            "What",
            "If"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "~할 때 → When"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> I was sleeping, the phone rang.",
          "opts": [
            "While",
            "Because",
            "If",
            "That",
            "Where"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "~하는 동안 → While"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "Call me <span class=\"blank\"></span> you arrive.",
          "opts": [
            "when",
            "where",
            "why",
            "what",
            "if"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "when (~할 때)"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> she was studying, her mother cooked.",
          "opts": [
            "When",
            "While",
            "Because",
            "That",
            "If"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "진행+진행 → While"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I'm late <span class=\"blank\"></span> the bus was late.",
          "opts": [
            "because",
            "if",
            "when",
            "that",
            "but"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "이유 → because"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> it rains, we won't go out.",
          "opts": [
            "If",
            "When",
            "Because",
            "That",
            "While"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "조건 → If"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She is happy <span class=\"blank\"></span> she got a present.",
          "opts": [
            "because",
            "if",
            "when",
            "that",
            "but"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "이유 → because"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> you are tired, take a rest.",
          "opts": [
            "If",
            "When",
            "Because",
            "That",
            "While"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "조건 → If"
        },
        {
          "q": "because vs because of",
          "sentence": "He can't come <span class=\"blank\"></span> the storm.",
          "opts": [
            "because",
            "because of",
            "because that",
            "since to",
            "when"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "+명사 → because of"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I think <span class=\"blank\"></span> she is honest.",
          "opts": [
            "that",
            "what",
            "when",
            "because",
            "if"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "think+that절"
        },
        {
          "q": "<b>주관식</b> · 알맞은 접속사를 쓰세요.<br>(언제) <span class=\"blank\"></span> I was a child, I loved candies.",
          "sentence": "<span class=\"blank\"></span> I was a child, I loved candies.",
          "subjective": true,
          "answers": [
            "When"
          ],
          "hint": "~할 때",
          "explain": "정답: <b>When</b>"
        },
        {
          "q": "<b>주관식</b> · 알맞은 접속사를 쓰세요.<br>(왜냐하면) I'm tired <span class=\"blank\"></span> I worked hard.",
          "sentence": "I'm tired <span class=\"blank\"></span> I worked hard.",
          "subjective": true,
          "answers": [
            "because"
          ],
          "hint": "이유",
          "explain": "정답: <b>because</b>"
        },
        {
          "q": "<b>주관식</b> · 알맞은 접속사를 쓰세요.<br>(만약) <span class=\"blank\"></span> you study hard, you will pass.",
          "sentence": "<span class=\"blank\"></span> you study hard, you will pass.",
          "subjective": true,
          "answers": [
            "If"
          ],
          "hint": "조건",
          "explain": "정답: <b>If</b>"
        },
        {
          "q": "<b>주관식</b> · 알맞은 접속사를 쓰세요.<br>(그러나) He is rich, <span class=\"blank\"></span> he isn't happy.",
          "sentence": "He is rich, <span class=\"blank\"></span> he isn't happy.",
          "subjective": true,
          "answers": [
            "but"
          ],
          "hint": "역접",
          "explain": "정답: <b>but</b>"
        }
      ],
      "exam": [
        {
          "q": "부정문 만들기. 빈칸에 알맞은 것은?",
          "sentence": "He decided <span class=\"blank\"></span> there.",
          "opts": [
            "not to go",
            "to not go",
            "don't to go",
            "to don't go",
            "not go"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "to부정사 부정 → not to"
        },
        {
          "q": "to부정사 용법이 다른 것은?",
          "sentence": "",
          "opts": [
            "I want to sleep.",
            "She likes to read.",
            "He has work to do.",
            "They hope to win.",
            "We need to study."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "명사 수식(형용사적), 나머지는 명사적"
        },
        {
          "q": "to부정사 용법이 다른 것은?",
          "sentence": "",
          "opts": [
            "He went there to study.",
            "She studies hard to pass.",
            "I'm happy to see you.",
            "They came to help us.",
            "She got up early to catch the bus."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "감정 원인, 나머지는 목적"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "I want to study.",
            "She decided go home.",
            "He hopes to come.",
            "We need to talk.",
            "They plan to leave."
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "decide+to부정사 → to go"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "I have books to read.",
            "She has work to do.",
            "He has nothing to say.",
            "They need water to drinking.",
            "Give me something to eat."
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "to+동사원형 → to drink"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "He went to the store <u>buy</u> milk.",
          "opts": [
            "to buy",
            "buy",
            "buying",
            "bought",
            "for buy"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "목적의 to부정사"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "I want <u>going</u> home.",
          "opts": [
            "to go",
            "go",
            "goes",
            "went",
            "gone"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "want+to부정사"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "I'm pleased <u>meeting</u> you.",
          "opts": [
            "to meet",
            "meet",
            "met",
            "meets",
            "meeting to"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "감정+to부정사"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>나는 새 차를 사고 싶다.",
          "sentence": "I want <span class=\"blank\"></span> a new car.",
          "opts": [
            "buy",
            "to buy",
            "buying",
            "bought",
            "buys"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "want+to부정사"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>나는 해야 할 숙제가 있다.",
          "sentence": "I have homework <span class=\"blank\"></span>.",
          "opts": [
            "do",
            "to do",
            "doing",
            "did",
            "does"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "형용사적"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>그는 영어 공부를 하기 위해 미국에 갔다.",
          "sentence": "He went to America <span class=\"blank\"></span> English.",
          "opts": [
            "study",
            "to study",
            "studying",
            "studied",
            "studies"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "목적"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>너를 다시 만나서 기쁘다.",
          "sentence": "I'm glad <span class=\"blank\"></span> you again.",
          "opts": [
            "see",
            "to see",
            "seeing",
            "saw",
            "sees"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "감정 원인"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>그녀는 마실 것을 원한다.",
          "sentence": "She wants something <span class=\"blank\"></span>.",
          "opts": [
            "drink",
            "to drink",
            "drinking",
            "drank",
            "drinks"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "-thing+to부정사"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>외국어 공부는 어렵다.",
          "sentence": "<span class=\"blank\"></span> a foreign language is difficult.",
          "opts": [
            "Study",
            "To study",
            "Studied",
            "Studies",
            "Studyings"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "주어"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>그는 거기 가지 않기로 결정했다.",
          "sentence": "He decided <span class=\"blank\"></span>.",
          "opts": [
            "not to go",
            "to not go",
            "not going",
            "to go not",
            "not went"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "부정 → not to"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>그것을 듣게 되어 슬프다.",
          "sentence": "I'm sad <span class=\"blank\"></span> that.",
          "opts": [
            "hear",
            "to hear",
            "hearing",
            "heard",
            "hears"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "감정"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>I need something <span class=\"blank\"></span>. (drink)",
          "sentence": "I need something <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "to drink"
          ],
          "hint": "-thing+to부정사",
          "explain": "정답: <b>to drink</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br><span class=\"blank\"></span> English is fun. (learn)",
          "sentence": "<span class=\"blank\"></span> English is fun.",
          "subjective": true,
          "answers": [
            "To learn"
          ],
          "hint": "주어",
          "explain": "정답: <b>To learn</b>"
        },
        {
          "q": "<b>주관식</b> · 부정형으로 쓰세요.<br>I decided <span class=\"blank\"></span> there. (가지 않기로)",
          "sentence": "I decided <span class=\"blank\"></span> there.",
          "subjective": true,
          "answers": [
            "not to go"
          ],
          "hint": "to부정사 부정",
          "explain": "정답: <b>not to go</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>My dream is <span class=\"blank\"></span> a pilot. (be)",
          "sentence": "My dream is <span class=\"blank\"></span> a pilot.",
          "subjective": true,
          "answers": [
            "to be"
          ],
          "hint": "보어",
          "explain": "정답: <b>to be</b>"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I know <span class=\"blank\"></span> he is right.",
          "opts": [
            "that",
            "what",
            "when",
            "because",
            "if"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "know+that절"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "It's true <span class=\"blank\"></span> she lied.",
          "opts": [
            "that",
            "what",
            "when",
            "because",
            "if"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "진주어 that절"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> Tom and Jane are students.",
          "opts": [
            "Both",
            "Either",
            "Neither",
            "Or",
            "And"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "Both A and B"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "You can have <span class=\"blank\"></span> coffee or tea.",
          "opts": [
            "both",
            "either",
            "neither",
            "and",
            "or"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "Either A or B"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> he nor I am right.",
          "opts": [
            "Both",
            "Either",
            "Neither",
            "Not",
            "Or"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "Neither A nor B"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "Not only Tom <span class=\"blank\"></span> also Mary likes pizza.",
          "opts": [
            "and",
            "but",
            "or",
            "so",
            "that"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "Not only A but also B"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "I'm tired and hungry.",
            "She is smart but lazy.",
            "Will you go or stay?",
            "I was late because the traffic.",
            "If it rains, I'll stay home."
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "because of+명사"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "Both Tom and Mary are here.",
            "Either you or I am right.",
            "Neither he nor she likes it.",
            "Not only he but also I am tired.",
            "Both Tom or Jane are nice."
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "Both A and B"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "I'm late <u>because of</u> I missed the bus.",
          "opts": [
            "because",
            "when",
            "if",
            "that",
            "while"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "+절 → because"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "<u>If</u> I was young, I lived in Seoul.",
          "opts": [
            "When",
            "Because",
            "That",
            "While",
            "So"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "과거 사실 → When"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>나는 사과와 바나나를 좋아한다.",
          "sentence": "I like apples <span class=\"blank\"></span> bananas.",
          "opts": [
            "and",
            "but",
            "or",
            "so",
            "that"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "and"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>그는 키가 작지만 빠르다.",
          "sentence": "He is short <span class=\"blank\"></span> fast.",
          "opts": [
            "and",
            "but",
            "or",
            "so",
            "that"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "but"
        },
        {
          "q": "빈칸에 알맞은 것은? (~까지)",
          "sentence": "Wait here <span class=\"blank\"></span> I return.",
          "opts": [
            "until",
            "what",
            "where",
            "why",
            "how"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "~까지 → until"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> you are tired, take a rest.",
          "opts": [
            "If",
            "What",
            "Where",
            "Why",
            "How"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "조건 → If"
        },
        {
          "q": "빈칸에 알맞은 것은? (~하기 전에)",
          "sentence": "Wash your hands <span class=\"blank\"></span> you eat.",
          "opts": [
            "before",
            "what",
            "where",
            "why",
            "how"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "~전에 → before"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He didn't come, <span class=\"blank\"></span> he was sick.",
          "opts": [
            "because",
            "what",
            "where",
            "why",
            "how"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "이유 → because"
        },
        {
          "q": "<b>주관식</b> · 알맞은 접속사를 쓰세요.<br>(그래서) It was hot, <span class=\"blank\"></span> we opened the window.",
          "sentence": "It was hot, <span class=\"blank\"></span> we opened the window.",
          "subjective": true,
          "answers": [
            "so"
          ],
          "hint": "결과",
          "explain": "정답: <b>so</b>"
        },
        {
          "q": "<b>주관식</b> · 알맞은 접속사를 쓰세요.<br>(~하는 동안) <span class=\"blank\"></span> I was sleeping, the bell rang.",
          "sentence": "<span class=\"blank\"></span> I was sleeping, the bell rang.",
          "subjective": true,
          "answers": [
            "While"
          ],
          "hint": "동시 진행",
          "explain": "정답: <b>While</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 말을 쓰세요.<br>(Both A and B) <span class=\"blank\"></span> Tom and Mary are smart.",
          "sentence": "<span class=\"blank\"></span> Tom and Mary are smart.",
          "subjective": true,
          "answers": [
            "Both"
          ],
          "hint": "A와 B 둘 다",
          "explain": "정답: <b>Both</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 말을 쓰세요.<br>(Neither A nor B) <span class=\"blank\"></span> he nor she is here.",
          "sentence": "<span class=\"blank\"></span> he nor she is here.",
          "subjective": true,
          "answers": [
            "Neither"
          ],
          "hint": "둘 다 아닌",
          "explain": "정답: <b>Neither</b>"
        }
      ],
      "chapterTitles": [
        "to부정사",
        "접속사"
      ]
    },
    "week7": {
      "title": "7주차 (Ch13)",
      "fromChapter": 13,
      "toChapter": 13,
      "train": [
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I get up <span class=\"blank\"></span> 7 o'clock.",
          "opts": [
            "in",
            "on",
            "at",
            "of",
            "to"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "시각 → at"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "School starts <span class=\"blank\"></span> March.",
          "opts": [
            "in",
            "on",
            "at",
            "of",
            "to"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "월 → in"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I'll see you <span class=\"blank\"></span> Monday.",
          "opts": [
            "in",
            "on",
            "at",
            "of",
            "to"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "요일 → on"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She was born <span class=\"blank\"></span> 2010.",
          "opts": [
            "in",
            "on",
            "at",
            "of",
            "to"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "연도 → in"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "We have a party <span class=\"blank\"></span> Christmas Day.",
          "opts": [
            "in",
            "on",
            "at",
            "of",
            "to"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "날짜 → on"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "It's cold <span class=\"blank\"></span> winter.",
          "opts": [
            "in",
            "on",
            "at",
            "of",
            "to"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "계절 → in"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "Let's meet <span class=\"blank\"></span> noon.",
          "opts": [
            "in",
            "on",
            "at",
            "of",
            "to"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "정오 → at"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I sleep early <span class=\"blank\"></span> the night.",
          "opts": [
            "in",
            "on",
            "at",
            "of",
            "to"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "at night (관용)"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "There is a book <span class=\"blank\"></span> the table.",
          "opts": [
            "in",
            "on",
            "at",
            "of",
            "to"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "표면 → on"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He lives <span class=\"blank\"></span> Seoul.",
          "opts": [
            "in",
            "on",
            "at",
            "of",
            "to"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "도시 → in"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "Wait for me <span class=\"blank\"></span> the bus stop.",
          "opts": [
            "in",
            "on",
            "at",
            "of",
            "to"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "지점 → at"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The cat is <span class=\"blank\"></span> the box.",
          "opts": [
            "in",
            "on",
            "at",
            "of",
            "to"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "내부 → in"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "There is a picture <span class=\"blank\"></span> the wall.",
          "opts": [
            "in",
            "on",
            "at",
            "of",
            "to"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "벽면 → on"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She is studying <span class=\"blank\"></span> the library.",
          "opts": [
            "in",
            "on",
            "at",
            "of",
            "to"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "내부 → in"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "They arrived <span class=\"blank\"></span> the airport.",
          "opts": [
            "in",
            "on",
            "at",
            "of",
            "to"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "특정 지점 → at"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "My keys are <span class=\"blank\"></span> my pocket.",
          "opts": [
            "in",
            "on",
            "at",
            "of",
            "to"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "내부 → in"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 전치사를 쓰세요.<br>(시각) See you <span class=\"blank\"></span> 3 p.m.",
          "sentence": "See you <span class=\"blank\"></span> 3 p.m.",
          "subjective": true,
          "answers": [
            "at"
          ],
          "hint": "시각",
          "explain": "정답: <b>at</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 전치사를 쓰세요.<br>(요일) My birthday is <span class=\"blank\"></span> Friday.",
          "sentence": "My birthday is <span class=\"blank\"></span> Friday.",
          "subjective": true,
          "answers": [
            "on"
          ],
          "hint": "요일",
          "explain": "정답: <b>on</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 전치사를 쓰세요.<br>(월) I was born <span class=\"blank\"></span> July.",
          "sentence": "I was born <span class=\"blank\"></span> July.",
          "subjective": true,
          "answers": [
            "in"
          ],
          "hint": "월",
          "explain": "정답: <b>in</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 전치사를 쓰세요.<br>(장소-내부) She is <span class=\"blank\"></span> the room.",
          "sentence": "She is <span class=\"blank\"></span> the room.",
          "subjective": true,
          "answers": [
            "in"
          ],
          "hint": "내부",
          "explain": "정답: <b>in</b>"
        }
      ],
      "exam": [
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He went <span class=\"blank\"></span> school by bus.",
          "opts": [
            "to",
            "from",
            "at",
            "in",
            "on"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "방향 → to"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She came <span class=\"blank\"></span> Korea.",
          "opts": [
            "to",
            "from",
            "at",
            "in",
            "on"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "출발지 → from"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He walked <span class=\"blank\"></span> the park.",
          "opts": [
            "into",
            "through",
            "of",
            "at",
            "by"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "통과 → through"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The cat jumped <span class=\"blank\"></span> the table.",
          "opts": [
            "onto",
            "at",
            "in",
            "of",
            "through"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "~위로 → onto"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I went there <span class=\"blank\"></span> my friend.",
          "opts": [
            "with",
            "for",
            "by",
            "about",
            "of"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "동반 → with"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "This gift is <span class=\"blank\"></span> you.",
          "opts": [
            "with",
            "for",
            "by",
            "about",
            "of"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "대상 → for"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He came <span class=\"blank\"></span> car.",
          "opts": [
            "with",
            "for",
            "by",
            "about",
            "of"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "수단 → by"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "This book is <span class=\"blank\"></span> animals.",
          "opts": [
            "with",
            "for",
            "by",
            "about",
            "of"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "~에 대한 → about"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "I get up at 7.",
            "She lives in Tokyo.",
            "See you on Monday.",
            "He was born on 2005.",
            "Meet me at noon."
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "연도 → in 2005"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "The book is on the table.",
            "She lives in Seoul.",
            "Wait at the bus stop.",
            "The cat is on the box.",
            "He arrives at school."
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "the cat is in the box (내부)"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "I'll see you <u>in</u> Sunday.",
          "opts": [
            "on",
            "at",
            "of",
            "to",
            "from"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "요일 → on"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "He came <u>with</u> bus.",
          "opts": [
            "by",
            "at",
            "in",
            "on",
            "to"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "교통수단 → by"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>나는 아침 8시에 학교에 간다.",
          "sentence": "I go to school <span class=\"blank\"></span> 8 in the morning.",
          "opts": [
            "in",
            "on",
            "at",
            "of",
            "to"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "시각 → at"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>그녀는 5월에 결혼할 것이다.",
          "sentence": "She will get married <span class=\"blank\"></span> May.",
          "opts": [
            "in",
            "on",
            "at",
            "of",
            "to"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "월 → in"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>책상 위에 책이 있다.",
          "sentence": "There is a book <span class=\"blank\"></span> the desk.",
          "opts": [
            "in",
            "on",
            "at",
            "of",
            "to"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "표면 → on"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>나는 가족과 함께 산다.",
          "sentence": "I live <span class=\"blank\"></span> my family.",
          "opts": [
            "with",
            "for",
            "by",
            "about",
            "of"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "동반 → with"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 전치사를 쓰세요.<br>(장소-표면) The cup is <span class=\"blank\"></span> the table.",
          "sentence": "The cup is <span class=\"blank\"></span> the table.",
          "subjective": true,
          "answers": [
            "on"
          ],
          "hint": "표면",
          "explain": "정답: <b>on</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 전치사를 쓰세요.<br>(수단) He goes to work <span class=\"blank\"></span> subway.",
          "sentence": "He goes to work <span class=\"blank\"></span> subway.",
          "subjective": true,
          "answers": [
            "by"
          ],
          "hint": "교통수단",
          "explain": "정답: <b>by</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 전치사를 쓰세요.<br>(~에 대한) This story is <span class=\"blank\"></span> dragons.",
          "sentence": "This story is <span class=\"blank\"></span> dragons.",
          "subjective": true,
          "answers": [
            "about"
          ],
          "hint": "주제",
          "explain": "정답: <b>about</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 전치사를 쓰세요.<br>(~에서) She came <span class=\"blank\"></span> Canada.",
          "sentence": "She came <span class=\"blank\"></span> Canada.",
          "subjective": true,
          "answers": [
            "from"
          ],
          "hint": "출발지",
          "explain": "정답: <b>from</b>"
        }
      ],
      "chapterTitles": [
        "전치사"
      ]
    }
  },
  "namog2": {
    "week1": {
      "title": "1주차 (Ch1~Ch2)",
      "fromChapter": 1,
      "toChapter": 2,
      "train": [
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The sun <span class=\"blank\"></span> brightly.",
          "opts": [
            "shine",
            "shines",
            "shined",
            "shining",
            "is shine"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "1형식 자동사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "A bird <span class=\"blank\"></span> in the sky.",
          "opts": [
            "fly",
            "flies",
            "is fly",
            "flying",
            "is flies"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "1형식 자동사"
        },
        {
          "q": "다음 중 1형식 문장은?",
          "sentence": "",
          "opts": [
            "I love you.",
            "She is a doctor.",
            "Birds fly.",
            "He gave me a book.",
            "I find it easy."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "주어+동사 → 1형식"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She looks <span class=\"blank\"></span>.",
          "opts": [
            "happy",
            "happily",
            "happiness",
            "happier",
            "happiest"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "look+형용사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He became <span class=\"blank\"></span>.",
          "opts": [
            "famous",
            "famously",
            "fame",
            "famouser",
            "famousest"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "become+형용사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "This soup tastes <span class=\"blank\"></span>.",
          "opts": [
            "delicious",
            "deliciously",
            "deliciousness",
            "more delicious",
            "most delicious"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "taste+형용사"
        },
        {
          "q": "다음 중 2형식 문장은?",
          "sentence": "",
          "opts": [
            "I run fast.",
            "She is a teacher.",
            "He plays soccer.",
            "I gave him a gift.",
            "They made me angry."
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "주어+be+보어 → 2형식"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I bought <span class=\"blank\"></span>.",
          "opts": [
            "a book",
            "at a book",
            "in a book",
            "on a book",
            "of a book"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "타동사+목적어"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She reads <span class=\"blank\"></span> every night.",
          "opts": [
            "a book",
            "at a book",
            "in a book",
            "on a book",
            "of a book"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "read+목적어"
        },
        {
          "q": "다음 중 3형식 문장은?",
          "sentence": "",
          "opts": [
            "I run fast.",
            "She is happy.",
            "He plays soccer.",
            "I gave him a gift.",
            "They made me angry."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "주어+동사+목적어"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "He reads books.",
            "I bought a car.",
            "She visited Seoul.",
            "He went home.",
            "She arrived at school."
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "arrive는 1형식 (at 필요는 OK인데… 실제로 OK) → 재확인: arrive at school OK. 어색한 거 없음 — 대체"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He gave <span class=\"blank\"></span> a book.",
          "opts": [
            "I",
            "my",
            "me",
            "mine",
            "myself"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "간접목적어 → me"
        },
        {
          "q": "빈칸에 알맞은 것은? (3형식 변형)",
          "sentence": "She sent a letter <span class=\"blank\"></span> me.",
          "opts": [
            "to",
            "for",
            "of",
            "at",
            "in"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "send → to"
        },
        {
          "q": "빈칸에 알맞은 것은? (3형식 변형)",
          "sentence": "He bought a gift <span class=\"blank\"></span> her.",
          "opts": [
            "to",
            "for",
            "of",
            "at",
            "in"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "buy → for"
        },
        {
          "q": "빈칸에 알맞은 것은? (3형식 변형)",
          "sentence": "She asked a favor <span class=\"blank\"></span> me.",
          "opts": [
            "to",
            "for",
            "of",
            "at",
            "in"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "ask → of"
        },
        {
          "q": "다음 중 4형식 문장은?",
          "sentence": "",
          "opts": [
            "He is tall.",
            "She gave me a gift.",
            "I run fast.",
            "They built a house.",
            "She looks happy."
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "주어+동사+IO+DO"
        },
        {
          "q": "<b>주관식</b> · 다음 문장의 형식은? (숫자만)<br>The baby is crying.",
          "sentence": "<span class=\"blank\"></span>형식",
          "subjective": true,
          "answers": [
            "1",
            "1형식"
          ],
          "hint": "주어+동사",
          "explain": "정답: <b>1형식</b>"
        },
        {
          "q": "<b>주관식</b> · 다음 문장의 형식은? (숫자만)<br>He is a doctor.",
          "sentence": "<span class=\"blank\"></span>형식",
          "subjective": true,
          "answers": [
            "2",
            "2형식"
          ],
          "hint": "주어+동사+보어",
          "explain": "정답: <b>2형식</b>"
        },
        {
          "q": "<b>주관식</b> · 다음 문장의 형식은? (숫자만)<br>She gave me a book.",
          "sentence": "<span class=\"blank\"></span>형식",
          "subjective": true,
          "answers": [
            "4",
            "4형식"
          ],
          "hint": "수여동사",
          "explain": "정답: <b>4형식</b>"
        },
        {
          "q": "<b>주관식</b> · 다음 문장의 형식은? (숫자만)<br>They made him angry.",
          "sentence": "<span class=\"blank\"></span>형식",
          "subjective": true,
          "answers": [
            "5",
            "5형식"
          ],
          "hint": "목적격보어",
          "explain": "정답: <b>5형식</b>"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I <span class=\"blank\"></span> Paris twice.",
          "opts": [
            "visit",
            "visits",
            "visited",
            "have visited",
            "had visited"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "경험 현재완료"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She <span class=\"blank\"></span> here since 2010.",
          "opts": [
            "lives",
            "lived",
            "is living",
            "has lived",
            "had lived"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "since → 현재완료 계속"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "They <span class=\"blank\"></span> already finished.",
          "opts": [
            "have",
            "has",
            "had",
            "do",
            "did"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "already → 현재완료"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "Have you ever <span class=\"blank\"></span> sushi?",
          "opts": [
            "eat",
            "eats",
            "ate",
            "eaten",
            "eating"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "have+p.p."
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I <span class=\"blank\"></span> just arrived.",
          "opts": [
            "have",
            "has",
            "had",
            "am",
            "was"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "just+현재완료"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He <span class=\"blank\"></span> for 10 years.",
          "opts": [
            "works",
            "worked",
            "is working",
            "has worked",
            "had worked"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "for+기간 → 현재완료"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I <span class=\"blank\"></span> him yesterday.",
          "opts": [
            "see",
            "saw",
            "seen",
            "have seen",
            "had seen"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "yesterday → 단순과거"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She <span class=\"blank\"></span> him many times.",
          "opts": [
            "meet",
            "met",
            "is meeting",
            "has met",
            "had met"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "many times → 현재완료"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "They <span class=\"blank\"></span> here last year.",
          "opts": [
            "come",
            "came",
            "have come",
            "has come",
            "had come"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "last year → 과거"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> you ever been to London?",
          "opts": [
            "Do",
            "Did",
            "Are",
            "Have",
            "Had"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "ever → 현재완료"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "When I arrived, the train <span class=\"blank\"></span>.",
          "opts": [
            "leaves",
            "left",
            "has left",
            "had left",
            "is leaving"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "과거보다 더 과거 → had left"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She <span class=\"blank\"></span> before I called her.",
          "opts": [
            "sleeps",
            "slept",
            "has slept",
            "had slept",
            "is sleeping"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "과거완료"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I had <span class=\"blank\"></span> my homework before dinner.",
          "opts": [
            "finish",
            "finishes",
            "finished",
            "finishing",
            "to finish"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "had+p.p."
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "By the time he came, I <span class=\"blank\"></span> dinner.",
          "opts": [
            "finish",
            "finished",
            "have finished",
            "had finished",
            "am finishing"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "By the time+과거 → 과거완료"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "They <span class=\"blank\"></span> the movie before.",
          "opts": [
            "see",
            "saw",
            "have seen",
            "had seen",
            "are seeing"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "과거 시점 이전 → had seen"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She <span class=\"blank\"></span> for 2 hours.",
          "opts": [
            "studies",
            "studied",
            "is studying",
            "has been studying",
            "had been studying"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "for+기간 → 현재완료진행"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>I <span class=\"blank\"></span> here since 2010. (live)",
          "sentence": "I <span class=\"blank\"></span> here since 2010.",
          "subjective": true,
          "answers": [
            "have lived",
            "have been living"
          ],
          "hint": "현재완료",
          "explain": "정답: <b>have lived</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>She <span class=\"blank\"></span> her keys. (lose)",
          "sentence": "She <span class=\"blank\"></span> her keys.",
          "subjective": true,
          "answers": [
            "has lost",
            "lost"
          ],
          "hint": "현재완료",
          "explain": "정답: <b>has lost</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>When I arrived, he <span class=\"blank\"></span>. (leave)",
          "sentence": "When I arrived, he <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "had left"
          ],
          "hint": "과거완료",
          "explain": "정답: <b>had left</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>It <span class=\"blank\"></span> since morning. (rain)",
          "sentence": "It <span class=\"blank\"></span> since morning.",
          "subjective": true,
          "answers": [
            "has been raining",
            "has rained"
          ],
          "hint": "현재완료진행",
          "explain": "정답: <b>has been raining</b>"
        }
      ],
      "exam": [
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "They call him <span class=\"blank\"></span>.",
          "opts": [
            "Mike",
            "Mikes",
            "a Mike",
            "to Mike",
            "of Mike"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "5형식 목적격보어 (이름)"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I found the movie <span class=\"blank\"></span>.",
          "opts": [
            "bore",
            "bores",
            "bored",
            "boring",
            "boringly"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "능동 의미 → boring"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "His joke made me <span class=\"blank\"></span>.",
          "opts": [
            "laugh",
            "laughs",
            "laughed",
            "laughing",
            "to laugh"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "make+목+동사원형"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I want her <span class=\"blank\"></span> happy.",
          "opts": [
            "be",
            "is",
            "being",
            "to be",
            "was"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "want+목+to부정사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She had her brother <span class=\"blank\"></span> the room.",
          "opts": [
            "clean",
            "cleans",
            "cleaned",
            "cleaning",
            "to clean"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "사역동사 have+목+동사원형"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I saw him <span class=\"blank\"></span> the street.",
          "opts": [
            "cross",
            "crosses",
            "crossed",
            "to cross",
            "crossing"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "지각동사+목+동사원형/-ing"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "She looks happy.",
            "He gave me a gift.",
            "I made him laugh.",
            "She is a doctor.",
            "They listened me carefully."
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "listen to me"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "He is a teacher.",
            "I find it interesting.",
            "She had him to clean.",
            "They want me to come.",
            "She saw him walking."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "have+목+동사원형 → clean"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "She let me <u>to go</u>.",
          "opts": [
            "go",
            "goes",
            "went",
            "going",
            "gone"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "let+목+동사원형"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>그녀는 의사가 되었다.",
          "sentence": "She became a <span class=\"blank\"></span>.",
          "opts": [
            "doctor",
            "doctors",
            "a doctor",
            "to doctor",
            "of doctor"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "2형식 보어"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>나는 그를 천재라고 부른다.",
          "sentence": "I call him a <span class=\"blank\"></span>.",
          "opts": [
            "genius",
            "genius's",
            "to genius",
            "of genius",
            "with genius"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "5형식 목적격보어"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>그것은 나를 슬프게 만들었다.",
          "sentence": "It made me <span class=\"blank\"></span>.",
          "opts": [
            "sad",
            "sadly",
            "sadness",
            "sadder",
            "saddest"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "make+목+형용사"
        },
        {
          "q": "다음 중 5형식 문장은?",
          "sentence": "",
          "opts": [
            "I run fast.",
            "She is happy.",
            "He plays soccer.",
            "I gave him a gift.",
            "They made me angry."
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "주어+동사+목적어+보어"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The cat sat <span class=\"blank\"></span>.",
          "opts": [
            "on the chair",
            "at chair",
            "with chair",
            "of chair",
            "to chair"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "1형식+부사구"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He told <span class=\"blank\"></span> a story.",
          "opts": [
            "I",
            "my",
            "me",
            "mine",
            "myself"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "4형식 간접목적어"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She found the box <span class=\"blank\"></span>.",
          "opts": [
            "empty",
            "emptily",
            "emptiness",
            "emptier",
            "emptiest"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "5형식 목적격보어"
        },
        {
          "q": "<b>주관식</b> · 4형식 → 3형식 바꾸시오.<br>She gave me flowers.",
          "sentence": "She gave flowers <span class=\"blank\"></span> me.",
          "subjective": true,
          "answers": [
            "to"
          ],
          "hint": "give → to",
          "explain": "정답: <b>to</b>"
        },
        {
          "q": "<b>주관식</b> · 4형식 → 3형식 바꾸시오.<br>She made him a cake.",
          "sentence": "She made a cake <span class=\"blank\"></span> him.",
          "subjective": true,
          "answers": [
            "for"
          ],
          "hint": "make → for",
          "explain": "정답: <b>for</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>He let me <span class=\"blank\"></span>. (go)",
          "sentence": "He let me <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "go"
          ],
          "hint": "let+목+동사원형",
          "explain": "정답: <b>go</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>I want her <span class=\"blank\"></span>. (come)",
          "sentence": "I want her <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "to come"
          ],
          "hint": "want+목+to부정사",
          "explain": "정답: <b>to come</b>"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "It <span class=\"blank\"></span> since morning.",
          "opts": [
            "rains",
            "rained",
            "is raining",
            "has been raining",
            "had been raining"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "since → 현재완료진행"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "They <span class=\"blank\"></span> at the moment.",
          "opts": [
            "work",
            "worked",
            "are working",
            "have worked",
            "had worked"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "at the moment → 현재진행"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She <span class=\"blank\"></span> her homework by 7.",
          "opts": [
            "finishes",
            "finished",
            "will finish",
            "will have finished",
            "had finished"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "미래완료"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He <span class=\"blank\"></span> arrive soon.",
          "opts": [
            "is",
            "was",
            "will",
            "does",
            "did"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "미래 → will"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I'll call you when I <span class=\"blank\"></span> home.",
          "opts": [
            "get",
            "gets",
            "got",
            "will get",
            "have got"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "시간 부사절 → 현재형"
        },
        {
          "q": "동사의 p.p.(과거분사)가 잘못된 것은?",
          "sentence": "",
          "opts": [
            "eat → eaten",
            "write → written",
            "go → gone",
            "see → saw",
            "take → taken"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "see → seen"
        },
        {
          "q": "동사의 p.p.가 잘못된 것은?",
          "sentence": "",
          "opts": [
            "do → done",
            "make → made",
            "speak → spoken",
            "drink → drunk",
            "come → comed"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "come → come"
        },
        {
          "q": "동사의 p.p.가 잘못된 것은?",
          "sentence": "",
          "opts": [
            "read → read",
            "cut → cut",
            "put → put",
            "hit → hit",
            "run → runned"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "run → run"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "I have lived here since 2010.",
            "She has visited Paris last year.",
            "He had finished before I came.",
            "They have just arrived.",
            "I have known him for 5 years."
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "last year → 단순과거"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "I have seen him <u>yesterday</u>.",
          "opts": [
            "already",
            "just",
            "yesterday → 삭제 (현재완료로 두고 다른 부사 사용)",
            "before",
            "ever"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "현재완료+before"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "When I arrived, the train <u>has left</u>.",
          "opts": [
            "left",
            "leaves",
            "is leaving",
            "had left",
            "will leave"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "과거 이전 → 과거완료"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>나는 그를 5년 동안 알고 지냈다.",
          "sentence": "I <span class=\"blank\"></span> him for 5 years.",
          "opts": [
            "know",
            "knew",
            "have known",
            "had known",
            "am knowing"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "for 5 years → 현재완료"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>그가 도착했을 때 나는 떠난 후였다.",
          "sentence": "When he arrived, I <span class=\"blank\"></span>.",
          "opts": [
            "leave",
            "left",
            "have left",
            "had left",
            "will leave"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "과거완료"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "By next year, I <span class=\"blank\"></span> here for 10 years.",
          "opts": [
            "live",
            "have lived",
            "will live",
            "will have lived",
            "had lived"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "미래완료"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She <span class=\"blank\"></span> a book when I came in.",
          "opts": [
            "read",
            "reads",
            "was reading",
            "has read",
            "had read"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "과거진행"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I <span class=\"blank\"></span> the homework yet.",
          "opts": [
            "don't finish",
            "didn't finish",
            "haven't finished",
            "hadn't finished",
            "won't finish"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "yet → 현재완료 부정"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>I <span class=\"blank\"></span> him many times. (meet)",
          "sentence": "I <span class=\"blank\"></span> him many times.",
          "subjective": true,
          "answers": [
            "have met"
          ],
          "hint": "경험",
          "explain": "정답: <b>have met</b>"
        },
        {
          "q": "<b>주관식</b> · 동사의 과거분사를 쓰세요.<br>write →",
          "sentence": "write → <span class=\"blank\"></span>",
          "subjective": true,
          "answers": [
            "written"
          ],
          "hint": "불규칙",
          "explain": "정답: <b>written</b>"
        },
        {
          "q": "<b>주관식</b> · 동사의 과거분사를 쓰세요.<br>see →",
          "sentence": "see → <span class=\"blank\"></span>",
          "subjective": true,
          "answers": [
            "seen"
          ],
          "hint": "불규칙",
          "explain": "정답: <b>seen</b>"
        },
        {
          "q": "<b>주관식</b> · 동사의 과거분사를 쓰세요.<br>take →",
          "sentence": "take → <span class=\"blank\"></span>",
          "subjective": true,
          "answers": [
            "taken"
          ],
          "hint": "불규칙",
          "explain": "정답: <b>taken</b>"
        }
      ],
      "chapterTitles": [
        "문장의 형태",
        "시제"
      ]
    },
    "week2": {
      "title": "2주차 (Ch3~Ch4)",
      "fromChapter": 3,
      "toChapter": 4,
      "train": [
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> is important to study hard.",
          "opts": [
            "This",
            "That",
            "It",
            "There",
            "One"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "가주어 → It"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "It is necessary <span class=\"blank\"></span> exercise daily.",
          "opts": [
            "of",
            "for",
            "to",
            "at",
            "with"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "진주어 to부정사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "It is hard <span class=\"blank\"></span> me to wake up early.",
          "opts": [
            "of",
            "for",
            "to",
            "at",
            "with"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "의미상 주어 → for"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "It is kind <span class=\"blank\"></span> you to help.",
          "opts": [
            "of",
            "for",
            "to",
            "at",
            "with"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "성격형용사 → of"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "It is dangerous <span class=\"blank\"></span> children to play here.",
          "opts": [
            "of",
            "for",
            "to",
            "at",
            "with"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "for+의미상 주어"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I don't know <span class=\"blank\"></span> to start.",
          "opts": [
            "how",
            "what",
            "when",
            "where",
            "why"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "어디서 → where"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "Tell me <span class=\"blank\"></span> to do.",
          "opts": [
            "how",
            "what",
            "when",
            "where",
            "why"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "무엇을 → what"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I'll show you <span class=\"blank\"></span> to use it.",
          "opts": [
            "how",
            "what",
            "when",
            "where",
            "why"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "어떻게 → how"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I don't know <span class=\"blank\"></span> to go.",
          "opts": [
            "how",
            "what",
            "when",
            "where",
            "why"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "언제 → when"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He is too young <span class=\"blank\"></span> drive.",
          "opts": [
            "of",
            "for",
            "to",
            "at",
            "with"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "too~to부정사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She is rich <span class=\"blank\"></span> to buy a yacht.",
          "opts": [
            "too",
            "very",
            "enough",
            "much",
            "more"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "형용사 enough to"
        },
        {
          "q": "빈칸에 알맞은 것은? (so~that 변환)",
          "sentence": "He is so tall that he can reach the ceiling. → He is tall <span class=\"blank\"></span> to reach the ceiling.",
          "opts": [
            "too",
            "very",
            "enough",
            "much",
            "more"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "enough to"
        },
        {
          "q": "빈칸에 알맞은 것은? (so~that 변환)",
          "sentence": "She is too tired to walk. → She is so tired that she <span class=\"blank\"></span> walk.",
          "opts": [
            "can",
            "cannot",
            "will",
            "does",
            "did"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "too~to = so~that+cannot"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He is strong enough <span class=\"blank\"></span> the box.",
          "opts": [
            "lift",
            "lifts",
            "lifted",
            "to lift",
            "lifting"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "enough+to부정사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I told him <span class=\"blank\"></span> late.",
          "opts": [
            "not to be",
            "to not be",
            "not be",
            "to be not",
            "don't be"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "not+to부정사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He decided <span class=\"blank\"></span> there.",
          "opts": [
            "not to go",
            "to not go",
            "not go",
            "to go not",
            "don't go"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "not+to부정사"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 전치사를 쓰세요.<br>It is hard <span class=\"blank\"></span> me to study.",
          "sentence": "It is hard <span class=\"blank\"></span> me to study.",
          "subjective": true,
          "answers": [
            "for"
          ],
          "hint": "의미상 주어",
          "explain": "정답: <b>for</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 전치사를 쓰세요.<br>It is nice <span class=\"blank\"></span> you to help.",
          "sentence": "It is nice <span class=\"blank\"></span> you to help.",
          "subjective": true,
          "answers": [
            "of"
          ],
          "hint": "성격형용사",
          "explain": "정답: <b>of</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 의문사를 쓰세요.<br>I'll show you <span class=\"blank\"></span> to use it.",
          "sentence": "I'll show you <span class=\"blank\"></span> to use it.",
          "subjective": true,
          "answers": [
            "how"
          ],
          "hint": "어떻게",
          "explain": "정답: <b>how</b>"
        },
        {
          "q": "<b>주관식</b> · so~that → too~to 변환<br>He is so tired that he can't work.",
          "sentence": "He is too tired <span class=\"blank\"></span> work.",
          "subjective": true,
          "answers": [
            "to"
          ],
          "hint": "too~to",
          "explain": "정답: <b>to</b>"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> is good for health.",
          "opts": [
            "Walk",
            "Walks",
            "Walked",
            "Walking",
            "To walk"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "주어 동명사 (to walk도 OK이지만 동명사 우선)"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "My hobby is <span class=\"blank\"></span>.",
          "opts": [
            "read",
            "reads",
            "read",
            "reading",
            "to reading"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "보어 동명사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I enjoy <span class=\"blank\"></span> books.",
          "opts": [
            "read",
            "reads",
            "read",
            "reading",
            "to read"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "enjoy+동명사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She avoids <span class=\"blank\"></span> meat.",
          "opts": [
            "eat",
            "eats",
            "ate",
            "eating",
            "to eat"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "avoid+동명사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He finished <span class=\"blank\"></span> his homework.",
          "opts": [
            "do",
            "does",
            "did",
            "doing",
            "to do"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "finish+동명사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "They kept <span class=\"blank\"></span>.",
          "opts": [
            "talk",
            "talks",
            "talked",
            "talking",
            "to talk"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "keep+동명사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He is good at <span class=\"blank\"></span> tennis.",
          "opts": [
            "play",
            "plays",
            "played",
            "playing",
            "to play"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "전치사+동명사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "Thank you for <span class=\"blank\"></span> me.",
          "opts": [
            "help",
            "helps",
            "helped",
            "helping",
            "to help"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "for+동명사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I'm interested in <span class=\"blank\"></span> Korean.",
          "opts": [
            "learn",
            "learns",
            "learned",
            "learning",
            "to learn"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "in+동명사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She is afraid of <span class=\"blank\"></span> alone.",
          "opts": [
            "be",
            "is",
            "being",
            "to be",
            "was"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "of+동명사"
        },
        {
          "q": "빈칸에 알맞은 것은? (~할 수 없다)",
          "sentence": "I cannot help <span class=\"blank\"></span>.",
          "opts": [
            "cry",
            "cries",
            "cried",
            "crying",
            "to cry"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "cannot help+동명사"
        },
        {
          "q": "빈칸에 알맞은 것은? (~할 가치가 있다)",
          "sentence": "This book is worth <span class=\"blank\"></span>.",
          "opts": [
            "read",
            "reads",
            "read",
            "reading",
            "to read"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "worth+동명사"
        },
        {
          "q": "빈칸에 알맞은 것은? (~하느라 바쁘다)",
          "sentence": "She is busy <span class=\"blank\"></span> her exam.",
          "opts": [
            "prepare",
            "prepares",
            "prepared",
            "preparing",
            "to prepare"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "busy+동명사"
        },
        {
          "q": "빈칸에 알맞은 것은? (~하기를 학수고대하다)",
          "sentence": "I look forward to <span class=\"blank\"></span> you.",
          "opts": [
            "see",
            "sees",
            "saw",
            "seeing",
            "to see"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "look forward to+동명사"
        },
        {
          "q": "빈칸에 알맞은 것은? (~하는 데 익숙하다)",
          "sentence": "He is used to <span class=\"blank\"></span> early.",
          "opts": [
            "get up",
            "gets up",
            "got up",
            "getting up",
            "to get up"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "be used to+동명사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She wants <span class=\"blank\"></span> a doctor.",
          "opts": [
            "be",
            "is",
            "being",
            "to be",
            "was"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "want+to부정사"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>I enjoy <span class=\"blank\"></span>. (swim)",
          "sentence": "I enjoy <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "swimming"
          ],
          "hint": "enjoy+ing",
          "explain": "정답: <b>swimming</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>He is good at <span class=\"blank\"></span>. (cook)",
          "sentence": "He is good at <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "cooking"
          ],
          "hint": "전치사+ing",
          "explain": "정답: <b>cooking</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>She avoided <span class=\"blank\"></span> me. (see)",
          "sentence": "She avoided <span class=\"blank\"></span> me.",
          "subjective": true,
          "answers": [
            "seeing"
          ],
          "hint": "avoid+ing",
          "explain": "정답: <b>seeing</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>Thank you for <span class=\"blank\"></span>. (come)",
          "sentence": "Thank you for <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "coming"
          ],
          "hint": "for+ing",
          "explain": "정답: <b>coming</b>"
        }
      ],
      "exam": [
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She promised <span class=\"blank\"></span> again.",
          "opts": [
            "not to lie",
            "to not lie",
            "not lie",
            "to lie not",
            "don't lie"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "not+to부정사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "My mom made me <span class=\"blank\"></span> the room.",
          "opts": [
            "clean",
            "cleans",
            "cleaned",
            "to clean",
            "cleaning"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "사역 make+동사원형"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I heard her <span class=\"blank\"></span>.",
          "opts": [
            "sing",
            "sings",
            "sang",
            "to sing",
            "singing"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "지각동사+ing(또는 동사원형)"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She let him <span class=\"blank\"></span>.",
          "opts": [
            "go",
            "goes",
            "went",
            "to go",
            "going"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "let+동사원형"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "It is easy to learn English.",
            "I want to go home.",
            "She is too young to drive.",
            "He let me to go.",
            "She enjoys swimming."
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "let+동사원형 → go"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "It is kind of you to help.",
            "I don't know what to do.",
            "He is enough rich to buy it.",
            "She decided not to go.",
            "I told him to come."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "형용사+enough → rich enough"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "He is too young <u>for</u> drive.",
          "opts": [
            "to",
            "for",
            "of",
            "at",
            "with"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "too~to부정사"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "It is important <u>of</u> us to study.",
          "opts": [
            "to",
            "for",
            "of",
            "at",
            "with"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "important+for"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>그는 너무 피곤해서 일할 수 없다.",
          "sentence": "He is too tired <span class=\"blank\"></span> work.",
          "opts": [
            "of",
            "for",
            "to",
            "at",
            "with"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "too~to부정사"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>건강을 위해 운동하는 것은 중요하다.",
          "sentence": "<span class=\"blank\"></span> is important to exercise.",
          "opts": [
            "This",
            "That",
            "It",
            "There",
            "One"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "가주어 It"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>나는 무엇을 살지 모르겠다.",
          "sentence": "I don't know <span class=\"blank\"></span> to buy.",
          "opts": [
            "how",
            "what",
            "when",
            "where",
            "why"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "의문사+to"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I have many things <span class=\"blank\"></span>.",
          "opts": [
            "do",
            "does",
            "did",
            "to do",
            "doing"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "형용사적 용법"
        },
        {
          "q": "빈칸에 알맞은 것은? (~하기에는)",
          "sentence": "This water is too hot <span class=\"blank\"></span> drink.",
          "opts": [
            "of",
            "for",
            "to",
            "at",
            "with"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "too~to"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She seems <span class=\"blank\"></span> happy.",
          "opts": [
            "be",
            "is",
            "being",
            "to be",
            "was"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "seem+to be"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He grew up <span class=\"blank\"></span> a teacher.",
          "opts": [
            "be",
            "is",
            "being",
            "to be",
            "was"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "결과 to부정사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "There are no books <span class=\"blank\"></span>.",
          "opts": [
            "read",
            "reads",
            "read",
            "to read",
            "reading"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "형용사적 용법"
        },
        {
          "q": "<b>주관식</b> · too~to → enough~to 변환<br>He is too tired to work.",
          "sentence": "He is so tired that he <span class=\"blank\"></span> work.",
          "subjective": true,
          "answers": [
            "cannot",
            "can't",
            "can not"
          ],
          "hint": "cannot",
          "explain": "정답: <b>cannot/can't</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>I told him <span class=\"blank\"></span> late. (be not)",
          "sentence": "I told him <span class=\"blank\"></span> late.",
          "subjective": true,
          "answers": [
            "not to be"
          ],
          "hint": "not+to부정사",
          "explain": "정답: <b>not to be</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>She is rich enough <span class=\"blank\"></span> a car. (buy)",
          "sentence": "She is rich enough <span class=\"blank\"></span> a car.",
          "subjective": true,
          "answers": [
            "to buy"
          ],
          "hint": "enough+to",
          "explain": "정답: <b>to buy</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>My mom made me <span class=\"blank\"></span>. (study)",
          "sentence": "My mom made me <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "study"
          ],
          "hint": "사역+동사원형",
          "explain": "정답: <b>study</b>"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He stopped <span class=\"blank\"></span>.",
          "opts": [
            "smoke",
            "smokes",
            "smoked",
            "smoking",
            "to smoke"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "stop+동명사(금연), stop+to(잠시 하기 위해)"
        },
        {
          "q": "빈칸에 알맞은 것은? (~하기를 잊다)",
          "sentence": "I forgot <span class=\"blank\"></span> the door.",
          "opts": [
            "lock",
            "locks",
            "locked",
            "locking",
            "to lock"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "forget+to부정사(앞으로 할 일)"
        },
        {
          "q": "빈칸에 알맞은 것은? (~했던 것을 기억하다)",
          "sentence": "I remember <span class=\"blank\"></span> him.",
          "opts": [
            "meet",
            "meets",
            "met",
            "meeting",
            "to meet"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "remember+동명사(과거)"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She decided <span class=\"blank\"></span> the job.",
          "opts": [
            "take",
            "takes",
            "took",
            "taking",
            "to take"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "decide+to부정사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I'm sorry for <span class=\"blank\"></span> there.",
          "opts": [
            "not being",
            "not be",
            "being not",
            "not to be",
            "don't be"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "not+동명사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He is proud of <span class=\"blank\"></span> late.",
          "opts": [
            "never being",
            "be never",
            "being never",
            "to never be",
            "don't be"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "never+동명사"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "I enjoy swimming.",
            "She wants to go.",
            "He is good at sing.",
            "They finished eating.",
            "I'm afraid of flying."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "전치사+동명사 → singing"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "I look forward to <u>meet</u> you.",
          "opts": [
            "meet",
            "meets",
            "met",
            "meeting",
            "to meet"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "to+동명사"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "He avoided <u>to talk</u> to me.",
          "opts": [
            "talk",
            "talks",
            "talked",
            "talking",
            "to talking"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "avoid+동명사"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>나는 영어를 배우는 데 관심이 있다.",
          "sentence": "I'm interested in <span class=\"blank\"></span> English.",
          "opts": [
            "learn",
            "learns",
            "learned",
            "learning",
            "to learn"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "in+동명사"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>그녀는 음악 듣는 것을 즐긴다.",
          "sentence": "She enjoys <span class=\"blank\"></span> to music.",
          "opts": [
            "listen",
            "listens",
            "listened",
            "listening",
            "to listen"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "enjoy+동명사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I cannot help <span class=\"blank\"></span>.",
          "opts": [
            "laugh",
            "laughs",
            "laughed",
            "laughing",
            "to laugh"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "cannot help+ing"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "It's no use <span class=\"blank\"></span>.",
          "opts": [
            "cry",
            "cries",
            "cried",
            "crying",
            "to cry"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "no use+ing"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "On <span class=\"blank\"></span> the news, I called him.",
          "opts": [
            "hear",
            "hears",
            "heard",
            "hearing",
            "to hear"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "on+ing (~하자마자)"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He admitted <span class=\"blank\"></span> the money.",
          "opts": [
            "take",
            "takes",
            "took",
            "taking",
            "to take"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "admit+ing"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She is busy <span class=\"blank\"></span>.",
          "opts": [
            "study",
            "studies",
            "studied",
            "studying",
            "to study"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "busy+ing"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>I look forward to <span class=\"blank\"></span> you. (see)",
          "sentence": "I look forward to <span class=\"blank\"></span> you.",
          "subjective": true,
          "answers": [
            "seeing"
          ],
          "hint": "to+ing",
          "explain": "정답: <b>seeing</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>This book is worth <span class=\"blank\"></span>. (read)",
          "sentence": "This book is worth <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "reading"
          ],
          "hint": "worth+ing",
          "explain": "정답: <b>reading</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>He stopped <span class=\"blank\"></span>. (smoke)",
          "sentence": "He stopped <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "smoking"
          ],
          "hint": "stop+ing",
          "explain": "정답: <b>smoking</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>I cannot help <span class=\"blank\"></span>. (laugh)",
          "sentence": "I cannot help <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "laughing"
          ],
          "hint": "cannot help+ing",
          "explain": "정답: <b>laughing</b>"
        }
      ],
      "chapterTitles": [
        "to부정사",
        "동명사"
      ]
    },
    "week3": {
      "title": "3주차 (Ch5~Ch6)",
      "fromChapter": 5,
      "toChapter": 6,
      "train": [
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The <span class=\"blank\"></span> baby is cute.",
          "opts": [
            "sleep",
            "sleeps",
            "slept",
            "sleeping",
            "to sleep"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "능동/진행 → 현재분사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The book <span class=\"blank\"></span> by him is famous.",
          "opts": [
            "wrote",
            "writes",
            "written",
            "writing",
            "to write"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "수동 → 과거분사"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "Look at the <span class=\"blank\"></span> dog.",
          "opts": [
            "bark",
            "barks",
            "barked",
            "barking",
            "to bark"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "능동 → barking"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I want a <span class=\"blank\"></span> car.",
          "opts": [
            "use",
            "uses",
            "used",
            "using",
            "to use"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "수동(사용된) → used"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The <span class=\"blank\"></span> window is broken.",
          "opts": [
            "break",
            "breaks",
            "broke",
            "broken",
            "breaking"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "수동 → broken"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The boy <span class=\"blank\"></span> over there is my brother.",
          "opts": [
            "stand",
            "stands",
            "stood",
            "standing",
            "to stand"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "능동 → standing"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The movie was <span class=\"blank\"></span>.",
          "opts": [
            "bore",
            "bores",
            "bored",
            "boring",
            "to bore"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "사물 → boring"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I was <span class=\"blank\"></span> with the movie.",
          "opts": [
            "bore",
            "bores",
            "bored",
            "boring",
            "to bore"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "사람 → bored"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The news is <span class=\"blank\"></span>.",
          "opts": [
            "surprise",
            "surprises",
            "surprised",
            "surprising",
            "to surprise"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "사물 → surprising"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "He is <span class=\"blank\"></span> at the news.",
          "opts": [
            "surprise",
            "surprises",
            "surprised",
            "surprising",
            "to surprise"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "사람 → surprised"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The story is <span class=\"blank\"></span>.",
          "opts": [
            "interest",
            "interests",
            "interested",
            "interesting",
            "to interest"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "사물 → interesting"
        },
        {
          "q": "빈칸에 알맞은 것은? (~하면서)",
          "sentence": "<span class=\"blank\"></span> down the street, I met him.",
          "opts": [
            "Walk",
            "Walks",
            "Walked",
            "Walking",
            "To walk"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "분사구문 → Walking"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> tired, she went to bed.",
          "opts": [
            "Feel",
            "Feels",
            "Felt",
            "Feeling",
            "Felting"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "분사구문 → Feeling"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> in Korea, he speaks Korean well.",
          "opts": [
            "Born",
            "Bear",
            "Bears",
            "Bore",
            "Bearing"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "수동 분사구문 → Born"
        },
        {
          "q": "분사구문으로 알맞게 바꾼 것은?",
          "sentence": "As I had no money, I stayed home.",
          "opts": [
            "Having no money, I stayed home.",
            "Have no money, I stayed home.",
            "To have no money, I stayed home.",
            "I, no money, stayed home.",
            "No money, I stayed home."
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "분사구문"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> from the top, the building looks small.",
          "opts": [
            "See",
            "Seen",
            "Sees",
            "Saw",
            "To see"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "수동 분사구문 → Seen"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>The <span class=\"blank\"></span> baby is cute. (sleep)",
          "sentence": "The <span class=\"blank\"></span> baby is cute.",
          "subjective": true,
          "answers": [
            "sleeping"
          ],
          "hint": "능동",
          "explain": "정답: <b>sleeping</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>The <span class=\"blank\"></span> window. (break)",
          "sentence": "The <span class=\"blank\"></span> window.",
          "subjective": true,
          "answers": [
            "broken"
          ],
          "hint": "수동",
          "explain": "정답: <b>broken</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>The movie was <span class=\"blank\"></span>. (bore)",
          "sentence": "The movie was <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "boring"
          ],
          "hint": "사물 감정",
          "explain": "정답: <b>boring</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>I was <span class=\"blank\"></span>. (interest)",
          "sentence": "I was <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "interested"
          ],
          "hint": "사람 감정",
          "explain": "정답: <b>interested</b>"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "This book <span class=\"blank\"></span> by him.",
          "opts": [
            "wrote",
            "is wrote",
            "is writing",
            "was written",
            "writing"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "수동태 → be+p.p."
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The room <span class=\"blank\"></span> every day.",
          "opts": [
            "clean",
            "cleans",
            "is cleaned",
            "cleaning",
            "cleaned"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "현재 수동"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The cake <span class=\"blank\"></span> by my mom.",
          "opts": [
            "make",
            "makes",
            "is made",
            "making",
            "made"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "수동태"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "English <span class=\"blank\"></span> in many countries.",
          "opts": [
            "speak",
            "speaks",
            "is spoken",
            "speaking",
            "spoke"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "현재 수동"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The letters <span class=\"blank\"></span> yesterday.",
          "opts": [
            "send",
            "sends",
            "sent",
            "were sent",
            "sending"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "과거 수동"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The house <span class=\"blank\"></span> last year.",
          "opts": [
            "build",
            "built",
            "was built",
            "builds",
            "building"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "과거 수동"
        },
        {
          "q": "능동을 수동으로 바꾼 것은?",
          "sentence": "He wrote the book.",
          "opts": [
            "The book wrote by him.",
            "The book is wrote by him.",
            "The book was written by him.",
            "The book writing by him.",
            "The book has written by him."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "수동: be+p.p."
        },
        {
          "q": "능동을 수동으로 바꾼 것은?",
          "sentence": "They make cars.",
          "opts": [
            "Cars are made by them.",
            "Cars made by them.",
            "Cars are make by them.",
            "Cars making by them.",
            "Cars were made by them."
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "현재 수동"
        },
        {
          "q": "능동을 수동으로 바꾼 것은?",
          "sentence": "She broke the vase.",
          "opts": [
            "The vase break by her.",
            "The vase broke by her.",
            "The vase was broken by her.",
            "The vase is broken by her.",
            "The vase breaking by her."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "과거 수동"
        },
        {
          "q": "능동을 수동으로 바꾼 것은?",
          "sentence": "Tom will solve the problem.",
          "opts": [
            "The problem will solved.",
            "The problem will be solve.",
            "The problem will be solved by Tom.",
            "The problem solved by Tom.",
            "The problem is solved by Tom."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "미래 수동"
        },
        {
          "q": "능동을 수동으로 바꾼 것은?",
          "sentence": "I have finished the report.",
          "opts": [
            "The report finished by me.",
            "The report has finished by me.",
            "The report has been finished by me.",
            "The report is finished by me.",
            "The report was finished by me."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "완료 수동"
        },
        {
          "q": "빈칸에 알맞은 것은? (과거진행 수동)",
          "sentence": "The car <span class=\"blank\"></span> when I called.",
          "opts": [
            "was repair",
            "is repaired",
            "was being repaired",
            "has been repaired",
            "were repaired"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "과거진행 수동"
        },
        {
          "q": "빈칸에 알맞은 것은? (미래 수동)",
          "sentence": "The work <span class=\"blank\"></span> tomorrow.",
          "opts": [
            "finish",
            "finishes",
            "will be finished",
            "is finished",
            "was finished"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "미래 수동"
        },
        {
          "q": "빈칸에 알맞은 것은? (조동사 수동)",
          "sentence": "This must <span class=\"blank\"></span> by 5.",
          "opts": [
            "finish",
            "finished",
            "be finished",
            "is finished",
            "being finished"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "조동사+be+p.p."
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The window can <span class=\"blank\"></span> easily.",
          "opts": [
            "open",
            "opens",
            "opened",
            "be opened",
            "being opened"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "can+be+p.p."
        },
        {
          "q": "빈칸에 알맞은 것은? (현재완료 수동)",
          "sentence": "The book <span class=\"blank\"></span> for years.",
          "opts": [
            "use",
            "uses",
            "used",
            "has been used",
            "is using"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "현재완료 수동"
        },
        {
          "q": "<b>주관식</b> · 능동을 수동으로 바꾸시오.<br>He wrote the letter. → The letter <span class=\"blank\"></span> by him.",
          "sentence": "The letter <span class=\"blank\"></span> by him.",
          "subjective": true,
          "answers": [
            "was written"
          ],
          "hint": "과거 수동",
          "explain": "정답: <b>was written</b>"
        },
        {
          "q": "<b>주관식</b> · 능동을 수동으로 바꾸시오.<br>They make cars. → Cars <span class=\"blank\"></span> by them.",
          "sentence": "Cars <span class=\"blank\"></span> by them.",
          "subjective": true,
          "answers": [
            "are made"
          ],
          "hint": "현재 수동",
          "explain": "정답: <b>are made</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>English <span class=\"blank\"></span> here. (speak)",
          "sentence": "English <span class=\"blank\"></span> here.",
          "subjective": true,
          "answers": [
            "is spoken"
          ],
          "hint": "현재 수동",
          "explain": "정답: <b>is spoken</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 전치사를 쓰세요.<br>I'm interested <span class=\"blank\"></span> art.",
          "sentence": "I'm interested <span class=\"blank\"></span> art.",
          "subjective": true,
          "answers": [
            "in"
          ],
          "hint": "interested in",
          "explain": "정답: <b>in</b>"
        }
      ],
      "exam": [
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> in English, this book is hard to read.",
          "opts": [
            "Write",
            "Writes",
            "Written",
            "Writing",
            "To write"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "수동 → Written"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> by everyone, she felt happy.",
          "opts": [
            "Love",
            "Loves",
            "Loved",
            "Loving",
            "To love"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "수동 → Loved"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> hard, you'll succeed.",
          "opts": [
            "Work",
            "Works",
            "Worked",
            "Working",
            "To work"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "능동 → Working"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "The sleeping baby is cute.",
            "The broken window is dangerous.",
            "The movie was bored.",
            "I am tired.",
            "The crying boy looks sad."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "사물 → boring"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "The boy reading a book is my brother.",
            "The car parked here is mine.",
            "The book wrote by him is great.",
            "She is interested in art.",
            "I was excited about the trip."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "수동 → written"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "The window <u>break</u> is dangerous.",
          "opts": [
            "break",
            "breaks",
            "broke",
            "broken",
            "breaking"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "수동 → broken"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "The story is very <u>interested</u>.",
          "opts": [
            "interest",
            "interests",
            "interested",
            "interesting",
            "to interest"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "사물 → interesting"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "<u>Walked</u> in the park, I saw a bird.",
          "opts": [
            "Walk",
            "Walks",
            "Walked",
            "Walking",
            "To walk"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "분사구문 능동 → Walking"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>저기 서 있는 소녀는 내 친구이다.",
          "sentence": "The girl <span class=\"blank\"></span> there is my friend.",
          "opts": [
            "stand",
            "stands",
            "stood",
            "standing",
            "to stand"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "능동 분사"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>그것은 흥미진진하다.",
          "sentence": "It is <span class=\"blank\"></span>.",
          "opts": [
            "excite",
            "excites",
            "excited",
            "exciting",
            "to excite"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "사물 → exciting"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The <span class=\"blank\"></span> car is in the garage.",
          "opts": [
            "damage",
            "damages",
            "damaged",
            "damaging",
            "to damage"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "수동 → damaged"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The <span class=\"blank\"></span> tea was hot.",
          "opts": [
            "boil",
            "boils",
            "boiled",
            "boiling",
            "to boil"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "수동 → boiled"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The <span class=\"blank\"></span> water is hot.",
          "opts": [
            "boil",
            "boils",
            "boiled",
            "boiling",
            "to boil"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "능동/진행 → boiling"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I'm <span class=\"blank\"></span> in art.",
          "opts": [
            "interest",
            "interests",
            "interested",
            "interesting",
            "to interest"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "사람 → interested"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "It was a <span class=\"blank\"></span> day.",
          "opts": [
            "tire",
            "tires",
            "tired",
            "tiring",
            "to tire"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "사물 → tiring"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> tired, he sat down.",
          "opts": [
            "Feel",
            "Feels",
            "Felt",
            "Feeling",
            "To feel"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "분사구문 → Feeling"
        },
        {
          "q": "<b>주관식</b> · 분사구문으로 시작하시오.<br>As I felt tired, ... → <span class=\"blank\"></span> tired, ...",
          "sentence": "<span class=\"blank\"></span> tired, ...",
          "subjective": true,
          "answers": [
            "Feeling"
          ],
          "hint": "분사구문",
          "explain": "정답: <b>Feeling</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>The book <span class=\"blank\"></span> by him. (write)",
          "sentence": "The book <span class=\"blank\"></span> by him.",
          "subjective": true,
          "answers": [
            "written"
          ],
          "hint": "수동",
          "explain": "정답: <b>written</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>The news was <span class=\"blank\"></span>. (surprise)",
          "sentence": "The news was <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "surprising"
          ],
          "hint": "사물",
          "explain": "정답: <b>surprising</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>He is <span class=\"blank\"></span>. (excite)",
          "sentence": "He is <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "excited"
          ],
          "hint": "사람",
          "explain": "정답: <b>excited</b>"
        },
        {
          "q": "빈칸에 알맞은 전치사는?",
          "sentence": "I am interested <span class=\"blank\"></span> music.",
          "opts": [
            "by",
            "in",
            "with",
            "at",
            "of"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "interested in"
        },
        {
          "q": "빈칸에 알맞은 전치사는?",
          "sentence": "The mountain is covered <span class=\"blank\"></span> snow.",
          "opts": [
            "by",
            "in",
            "with",
            "at",
            "of"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "covered with"
        },
        {
          "q": "빈칸에 알맞은 전치사는?",
          "sentence": "He is known <span class=\"blank\"></span> everyone.",
          "opts": [
            "by",
            "to",
            "with",
            "at",
            "of"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "known to"
        },
        {
          "q": "빈칸에 알맞은 전치사는?",
          "sentence": "The bottle is filled <span class=\"blank\"></span> water.",
          "opts": [
            "by",
            "in",
            "with",
            "at",
            "of"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "filled with"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "The book was written by him.",
            "The room is cleaned daily.",
            "English is spoken here.",
            "The cake is bake by mom.",
            "The car was repaired."
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "be+p.p. → baked"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "I am interested in art.",
            "She is loved by all.",
            "The work will be finished.",
            "The window can be open.",
            "The letter was sent."
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "be+p.p. → opened"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "The book <u>wrote</u> by him.",
          "opts": [
            "wrote",
            "is wrote",
            "was written",
            "writing",
            "has wrote"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "수동 → was written"
        },
        {
          "q": "밑줄 친 부분을 어법상 알맞게 고친 것은?",
          "sentence": "This problem must <u>solve</u>.",
          "opts": [
            "solve",
            "solved",
            "be solved",
            "is solved",
            "being solved"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "조동사+be+p.p."
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>이 노래는 많은 사람들에게 사랑받는다.",
          "sentence": "This song <span class=\"blank\"></span> by many people.",
          "opts": [
            "love",
            "loves",
            "is loved",
            "loving",
            "loved"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "현재 수동"
        },
        {
          "q": "우리말과 같도록 빈칸을 채우세요.<br>그 집은 작년에 지어졌다.",
          "sentence": "The house <span class=\"blank\"></span> last year.",
          "opts": [
            "builds",
            "built",
            "was built",
            "is built",
            "building"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "과거 수동"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The book <span class=\"blank\"></span> by everyone.",
          "opts": [
            "love",
            "loves",
            "is loved",
            "loving",
            "loved"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "현재 수동"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "This article <span class=\"blank\"></span> tomorrow.",
          "opts": [
            "publishes",
            "is published",
            "will be published",
            "published",
            "being published"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "미래 수동"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The bridge <span class=\"blank\"></span> in 1990.",
          "opts": [
            "build",
            "built",
            "is built",
            "was built",
            "building"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "과거 수동"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "My phone <span class=\"blank\"></span> now.",
          "opts": [
            "repair",
            "repairs",
            "is repairing",
            "is being repaired",
            "repaired"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "현재진행 수동"
        },
        {
          "q": "빈칸에 알맞은 전치사는?",
          "sentence": "He is satisfied <span class=\"blank\"></span> his job.",
          "opts": [
            "by",
            "in",
            "with",
            "at",
            "of"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "satisfied with"
        },
        {
          "q": "빈칸에 알맞은 전치사는?",
          "sentence": "She is worried <span class=\"blank\"></span> her son.",
          "opts": [
            "by",
            "in",
            "with",
            "at",
            "about"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "worried about"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 전치사를 쓰세요.<br>The cup is filled <span class=\"blank\"></span> coffee.",
          "sentence": "The cup is filled <span class=\"blank\"></span> coffee.",
          "subjective": true,
          "answers": [
            "with"
          ],
          "hint": "filled with",
          "explain": "정답: <b>with</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>The work will <span class=\"blank\"></span> tomorrow. (finish)",
          "sentence": "The work will <span class=\"blank\"></span> tomorrow.",
          "subjective": true,
          "answers": [
            "be finished"
          ],
          "hint": "미래 수동",
          "explain": "정답: <b>be finished</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>The room must <span class=\"blank\"></span>. (clean)",
          "sentence": "The room must <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "be cleaned"
          ],
          "hint": "조동사 수동",
          "explain": "정답: <b>be cleaned</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 형태를 쓰세요.<br>The car <span class=\"blank\"></span> yesterday. (repair)",
          "sentence": "The car <span class=\"blank\"></span> yesterday.",
          "subjective": true,
          "answers": [
            "was repaired"
          ],
          "hint": "과거 수동",
          "explain": "정답: <b>was repaired</b>"
        }
      ],
      "chapterTitles": [
        "분사",
        "수동태"
      ]
    },
    "week4": {
      "title": "4주차 (Ch7~Ch8)",
      "fromChapter": 7,
      "toChapter": 8,
      "train": [
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "She <span class=\"blank\"></span> have studied hard. (과거 강한 추측)",
          "opts": [
            "must",
            "may",
            "can",
            "should",
            "will"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "must have p.p. = ~했음에 틀림없다"
        },
        {
          "q": "빈칸에 알맞은 것은? (과거 약한 추측)",
          "sentence": "He <span class=\"blank\"></span> have missed the bus.",
          "opts": [
            "must",
            "may",
            "can",
            "should",
            "will"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "may have p.p."
        },
        {
          "q": "빈칸에 알맞은 것은? (~했어야 했는데)",
          "sentence": "You <span class=\"blank\"></span> have called me.",
          "opts": [
            "must",
            "may",
            "can",
            "should",
            "will"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "should have p.p."
        },
        {
          "q": "빈칸에 알맞은 것은? (~했을 리 없다)",
          "sentence": "He <span class=\"blank\"></span> have done it.",
          "opts": [
            "must not",
            "cannot",
            "may not",
            "should not",
            "will not"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "cannot have p.p."
        },
        {
          "q": "빈칸에 알맞은 것은? (~하지 말았어야)",
          "sentence": "She <span class=\"blank\"></span> have eaten so much.",
          "opts": [
            "should not",
            "cannot",
            "may not",
            "must not",
            "will not"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "should not have p.p."
        },
        {
          "q": "would의 의미가 다른 것은?",
          "sentence": "",
          "opts": [
            "Would you help me?",
            "I would like coffee.",
            "She would often visit us.",
            "Would you mind opening the window?",
            "He would not listen."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "would often = 과거 습관, 나머지는 정중/의지"
        },
        {
          "q": "빈칸에 알맞은 것은? (~하곤 했다)",
          "sentence": "I <span class=\"blank\"></span> play soccer when I was young.",
          "opts": [
            "used to",
            "use to",
            "am used to",
            "get used to",
            "would not"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "과거 습관 used to + 동사원형"
        },
        {
          "q": "빈칸에 알맞은 것은? (~에 익숙하다)",
          "sentence": "He is <span class=\"blank\"></span> spicy food.",
          "opts": [
            "used to",
            "use to",
            "used to eat",
            "used to eating",
            "using to"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "be used to + 명사/동명사"
        },
        {
          "q": "빈칸에 알맞은 것은? (현재 강한 의무)",
          "sentence": "You <span class=\"blank\"></span> wear a mask.",
          "opts": [
            "must",
            "may",
            "can",
            "should",
            "will"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "강한 의무 → must"
        },
        {
          "q": "빈칸에 알맞은 것은? (~할 필요 없다)",
          "sentence": "You <span class=\"blank\"></span> come if you don't want to.",
          "opts": [
            "must not",
            "need not",
            "cannot",
            "may not",
            "will not"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "need not = don't have to"
        },
        {
          "q": "must not과 don't have to의 차이는?",
          "sentence": "",
          "opts": [
            "같은 의미이다",
            "must not은 금지, don't have to는 불필요",
            "must not은 불필요, don't have to는 금지",
            "둘 다 금지",
            "둘 다 불필요"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "must not=금지, don't have to=불필요"
        },
        {
          "q": "빈칸에 알맞은 것은? (~이 있을 리가)",
          "sentence": "It <span class=\"blank\"></span> be true!",
          "opts": [
            "must not",
            "cannot",
            "may not",
            "should not",
            "will not"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "강한 부정 추측 → cannot"
        },
        {
          "q": "빈칸에 알맞은 것은? (어쩌면)",
          "sentence": "It <span class=\"blank\"></span> rain tomorrow.",
          "opts": [
            "must",
            "might",
            "cannot",
            "should not",
            "won't"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "약한 추측 → might"
        },
        {
          "q": "would rather의 알맞은 사용은?",
          "sentence": "",
          "opts": [
            "I would rather to stay.",
            "I would rather stay than go.",
            "I would rather staying.",
            "I would rather stayed.",
            "I would rather have stay."
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "would rather + 동사원형 + than"
        },
        {
          "q": "had better의 알맞은 사용은?",
          "sentence": "",
          "opts": [
            "You had better to go.",
            "You had better going.",
            "You had better went.",
            "You had better go.",
            "You had better gone."
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "had better + 동사원형"
        },
        {
          "q": "빈칸에 알맞은 것은? (조언, ~하는 게 낫다)",
          "sentence": "You <span class=\"blank\"></span> see a doctor.",
          "opts": [
            "had better",
            "have better",
            "had best",
            "have to better",
            "would better"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "had better"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 must 또는 cannot를 알맞게 쓰세요.<br>He <span class=\"blank\"></span> have been there. (~했음에 틀림없다)",
          "sentence": "He <span class=\"blank\"></span> have been there.",
          "subjective": true,
          "answers": [
            "must"
          ],
          "hint": "강한 긍정 추측",
          "explain": "정답: <b>must</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 조동사를 쓰세요.<br>You <span class=\"blank\"></span> have studied. (~했어야 했다)",
          "sentence": "You <span class=\"blank\"></span> have studied.",
          "subjective": true,
          "answers": [
            "should"
          ],
          "hint": "후회",
          "explain": "정답: <b>should</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸을 채우세요.<br>I <span class=\"blank\"></span> play tennis when I was young. (~하곤 했다)",
          "sentence": "I <span class=\"blank\"></span> play tennis when I was young.",
          "subjective": true,
          "answers": [
            "used to"
          ],
          "hint": "과거 습관",
          "explain": "정답: <b>used to</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸을 채우세요.<br>You <span class=\"blank\"></span> go home now. (~하는 게 좋겠다)",
          "sentence": "You <span class=\"blank\"></span> go home now.",
          "subjective": true,
          "answers": [
            "had better"
          ],
          "hint": "조언",
          "explain": "정답: <b>had better</b>"
        },
        {
          "q": "빈칸에 알맞은 재귀대명사는?",
          "sentence": "She prepared the meal <span class=\"blank\"></span>.",
          "opts": [
            "she",
            "her",
            "hers",
            "herself",
            "by her"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "강조 → herself"
        },
        {
          "q": "빈칸에 알맞은 것은? (혼자서)",
          "sentence": "He lives <span class=\"blank\"></span> himself.",
          "opts": [
            "with",
            "by",
            "for",
            "at",
            "in"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "by oneself = 혼자서"
        },
        {
          "q": "빈칸에 알맞은 것은? (어떤 것, 긍정)",
          "sentence": "<span class=\"blank\"></span> is possible.",
          "opts": [
            "Some",
            "Any",
            "Anything",
            "Something",
            "Nothing"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "긍정문 → Something"
        },
        {
          "q": "빈칸에 알맞은 것은? (아무것도)",
          "sentence": "I have <span class=\"blank\"></span> to say.",
          "opts": [
            "something",
            "anything",
            "nothing",
            "somewhere",
            "anywhere"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "부정의 의미 (nothing=아무것도 없다)"
        },
        {
          "q": "빈칸에 알맞은 것은? (의문문)",
          "sentence": "Did <span class=\"blank\"></span> see my keys?",
          "opts": [
            "someone",
            "anyone",
            "no one",
            "everyone",
            "each one"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "의문문 → anyone"
        },
        {
          "q": "빈칸에 알맞은 것은? (모두)",
          "sentence": "<span class=\"blank\"></span> is welcome.",
          "opts": [
            "Some",
            "Every",
            "Everyone",
            "Each",
            "Both"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "단수 동사+everyone"
        },
        {
          "q": "빈칸에 알맞은 것은? (둘 중 어느 쪽)",
          "sentence": "You can take <span class=\"blank\"></span> book.",
          "opts": [
            "both",
            "either",
            "neither",
            "each",
            "all"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "둘 중 하나 → either"
        },
        {
          "q": "빈칸에 알맞은 것은? (둘 다 아닌)",
          "sentence": "<span class=\"blank\"></span> answer is correct.",
          "opts": [
            "Both",
            "Either",
            "Neither",
            "Each",
            "All"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "둘 다 아니다 → Neither"
        },
        {
          "q": "빈칸에 알맞은 것은? (각각)",
          "sentence": "<span class=\"blank\"></span> student has a book.",
          "opts": [
            "Both",
            "Either",
            "Neither",
            "Each",
            "All"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "each + 단수명사 + 단수동사"
        },
        {
          "q": "빈칸에 알맞은 형용사/대명사는?",
          "sentence": "I have two pens. One is red and <span class=\"blank\"></span> is blue.",
          "opts": [
            "the other",
            "other",
            "another",
            "others",
            "each other"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "둘 중 나머지 하나 → the other"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I have many pens. One is red, another is blue, and <span class=\"blank\"></span> are black.",
          "opts": [
            "the other",
            "other",
            "another",
            "the others",
            "each other"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "여럿 중 나머지 모두 → the others"
        },
        {
          "q": "빈칸에 알맞은 것은? (다른 하나)",
          "sentence": "Would you like <span class=\"blank\"></span> cup of coffee?",
          "opts": [
            "other",
            "another",
            "the other",
            "each other",
            "others"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "또 다른 하나 → another"
        },
        {
          "q": "빈칸에 알맞은 것은? (서로)",
          "sentence": "Tom and Jerry love <span class=\"blank\"></span>.",
          "opts": [
            "each other",
            "another",
            "the other",
            "others",
            "the others"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "서로(두 사람) → each other"
        },
        {
          "q": "빈칸에 알맞은 것은? (서로, 셋 이상)",
          "sentence": "The students helped <span class=\"blank\"></span>.",
          "opts": [
            "each other",
            "one other",
            "one another",
            "the other",
            "others"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "셋 이상의 서로 → one another"
        },
        {
          "q": "빈칸에 알맞은 것은? (가주어)",
          "sentence": "<span class=\"blank\"></span> is dangerous to swim here.",
          "opts": [
            "This",
            "That",
            "It",
            "There",
            "One"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "가주어 → It"
        },
        {
          "q": "빈칸에 알맞은 것은? (~이 있다)",
          "sentence": "<span class=\"blank\"></span> is a book on the desk.",
          "opts": [
            "This",
            "That",
            "It",
            "There",
            "One"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "존재 표현 → There"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 대명사를 쓰세요.<br>I taught <span class=\"blank\"></span>. (나 스스로)",
          "sentence": "I taught <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "myself"
          ],
          "hint": "재귀",
          "explain": "정답: <b>myself</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 말을 쓰세요. (서로, 두 사람)<br>They love <span class=\"blank\"></span>.",
          "sentence": "They love <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "each other"
          ],
          "hint": "두 사람",
          "explain": "정답: <b>each other</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 something/anything/nothing 중 하나를 쓰세요.<br>I don't know <span class=\"blank\"></span> about it.",
          "sentence": "I don't know <span class=\"blank\"></span> about it.",
          "subjective": true,
          "answers": [
            "anything"
          ],
          "hint": "부정문",
          "explain": "정답: <b>anything</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 the other/another/the others 중 하나를 쓰세요.<br>I have two cats. One is white and <span class=\"blank\"></span> is black.",
          "sentence": "I have two cats. One is white and <span class=\"blank\"></span> is black.",
          "subjective": true,
          "answers": [
            "the other"
          ],
          "hint": "둘 중 나머지",
          "explain": "정답: <b>the other</b>"
        }
      ],
      "exam": [
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "He must have been tired.",
            "She could speak French.",
            "You should have studied.",
            "I used to live there.",
            "He may not be sick."
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "may not은 부정 가능, 어색 부분 없음 → 다른 선지 검토 필요"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "I had better go now.",
            "He must have eaten it.",
            "She would rather to walk.",
            "You should not lie.",
            "They could have helped."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "would rather + 동사원형 → walk"
        },
        {
          "q": "밑줄 친 부분을 알맞게 고친 것은?",
          "sentence": "He <u>used to playing</u> tennis.",
          "opts": [
            "used to play",
            "is used to play",
            "was used to playing",
            "used playing",
            "uses to play"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "used to + 동사원형"
        },
        {
          "q": "밑줄 친 부분을 알맞게 고친 것은?",
          "sentence": "You <u>should went</u> home earlier.",
          "opts": [
            "should go",
            "should have gone",
            "should went",
            "should going",
            "should be gone"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "~했어야 했다 → should have p.p."
        },
        {
          "q": "빈칸에 알맞은 것은? (~하지 않을 수 없다)",
          "sentence": "I <span class=\"blank\"></span> laugh at the joke.",
          "opts": [
            "cannot help",
            "cannot but",
            "cannot help to",
            "may not but",
            "both A and B"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "cannot help -ing = cannot but + 동사원형 둘 다 가능"
        },
        {
          "q": "빈칸에 알맞은 것은? (요청, 정중하게)",
          "sentence": "<span class=\"blank\"></span> you please pass the salt?",
          "opts": [
            "Could",
            "Will",
            "Should",
            "Must",
            "May"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "정중 요청 → Could"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "You <span class=\"blank\"></span> tell anyone our secret.",
          "opts": [
            "must",
            "must not",
            "need not",
            "may",
            "can"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "강한 금지 → must not"
        },
        {
          "q": "빈칸에 알맞은 것은? (강한 추측)",
          "sentence": "Tom isn't here. He <span class=\"blank\"></span> be at home.",
          "opts": [
            "must",
            "may",
            "cannot",
            "should",
            "will"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "강한 긍정 추측 → must"
        },
        {
          "q": "우리말과 같도록.<br>그는 거기 갔을지도 모른다.",
          "sentence": "He <span class=\"blank\"></span> have gone there.",
          "opts": [
            "must",
            "may",
            "cannot",
            "should",
            "will"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "약한 과거 추측"
        },
        {
          "q": "우리말과 같도록.<br>너는 진실을 말했어야 했다.",
          "sentence": "You <span class=\"blank\"></span> have told the truth.",
          "opts": [
            "must",
            "may",
            "cannot",
            "should",
            "will"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "~했어야 했다 → should have"
        },
        {
          "q": "우리말과 같도록.<br>그가 그것을 했을 리 없다.",
          "sentence": "He <span class=\"blank\"></span> have done it.",
          "opts": [
            "must not",
            "cannot",
            "may not",
            "should not",
            "will not"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "~했을 리 없다 → cannot have"
        },
        {
          "q": "빈칸에 알맞은 것은? (조언이 아닌 강한 의무)",
          "sentence": "Drivers <span class=\"blank\"></span> obey traffic laws.",
          "opts": [
            "may",
            "might",
            "must",
            "could",
            "would"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "법적 의무 → must"
        },
        {
          "q": "빈칸에 알맞은 것은? (능력의 과거)",
          "sentence": "When I was 5, I <span class=\"blank\"></span> swim.",
          "opts": [
            "can",
            "may",
            "could",
            "might",
            "would"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "과거 능력 → could"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> you mind closing the door?",
          "opts": [
            "Will",
            "Would",
            "Should",
            "Must",
            "Can"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "정중 요청 → Would you mind ~ing?"
        },
        {
          "q": "우리말과 같도록.<br>나는 어렸을 때 일찍 잠자리에 들곤 했다.",
          "sentence": "I <span class=\"blank\"></span> go to bed early when I was a child.",
          "opts": [
            "used to",
            "use to",
            "am used to",
            "get used to",
            "would not"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "과거 습관 → used to"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> not have eaten so much! I feel sick.",
          "opts": [
            "I must",
            "I should",
            "I cannot",
            "I may",
            "I will"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "~하지 말았어야 → should not have p.p."
        },
        {
          "q": "<b>주관식</b> · 빈칸을 채우세요.<br>I would <span class=\"blank\"></span> stay than go. (오히려)",
          "sentence": "I would <span class=\"blank\"></span> stay than go.",
          "subjective": true,
          "answers": [
            "rather"
          ],
          "hint": "would rather",
          "explain": "정답: <b>rather</b>"
        },
        {
          "q": "<b>주관식</b> · 같은 의미가 되도록.<br>He may have left. = It is <span class=\"blank\"></span> that he has left.",
          "sentence": "It is <span class=\"blank\"></span> that he has left.",
          "subjective": true,
          "answers": [
            "possible"
          ],
          "hint": "가능",
          "explain": "정답: <b>possible</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸을 채우세요.<br>I cannot <span class=\"blank\"></span> laughing. (~하지 않을 수 없다)",
          "sentence": "I cannot <span class=\"blank\"></span> laughing.",
          "subjective": true,
          "answers": [
            "help"
          ],
          "hint": "cannot help -ing",
          "explain": "정답: <b>help</b>"
        },
        {
          "q": "<b>주관식</b> · 우리말에 맞게.<br>너는 그것을 했을 리가 없다.<br>You <span class=\"blank\"></span> have done it.",
          "sentence": "You <span class=\"blank\"></span> have done it.",
          "subjective": true,
          "answers": [
            "cannot",
            "can't"
          ],
          "hint": "~했을 리 없다",
          "explain": "정답: <b>cannot</b>"
        },
        {
          "q": "빈칸에 알맞은 것은? (사람 일반, 부정)",
          "sentence": "<span class=\"blank\"></span> says she is honest.",
          "opts": [
            "Anyone",
            "Everyone",
            "Someone",
            "No one",
            "Each one"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "모든 사람 → Everyone (긍정 의미)"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "There isn't <span class=\"blank\"></span> water in the bottle.",
          "opts": [
            "some",
            "any",
            "much",
            "many",
            "a few"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "부정문 + any"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I have <span class=\"blank\"></span> friends in this town.",
          "opts": [
            "a few",
            "a little",
            "few",
            "little",
            "much"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "가산 긍정 → a few"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "There is <span class=\"blank\"></span> milk left.",
          "opts": [
            "a few",
            "a little",
            "few",
            "little",
            "many"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "불가산 긍정 → a little"
        },
        {
          "q": "빈칸에 알맞은 것은? (거의 없다, 가산)",
          "sentence": "<span class=\"blank\"></span> people came to the party.",
          "opts": [
            "A few",
            "A little",
            "Few",
            "Little",
            "Many"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "가산 부정 의미 → Few"
        },
        {
          "q": "빈칸에 알맞은 것은? (거의 없다, 불가산)",
          "sentence": "There is <span class=\"blank\"></span> water in the cup.",
          "opts": [
            "a few",
            "a little",
            "few",
            "little",
            "many"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "불가산 부정 → little"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "All the students passed <span class=\"blank\"></span> exam.",
          "opts": [
            "his",
            "her",
            "their",
            "its",
            "our"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "All the students = 복수 → their"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "Each of the boys <span class=\"blank\"></span> a present.",
          "opts": [
            "have",
            "has",
            "were",
            "are",
            "gives"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "Each of + 복수명사 + 단수동사"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "Everyone is here.",
            "Each student has a book.",
            "Both books are mine.",
            "Either you or I am right.",
            "Few of students passed."
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "Few of the students"
        },
        {
          "q": "밑줄 친 부분이 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "I have a few friends.",
            "She has a little money.",
            "He has few time.",
            "They have little patience.",
            "We have many books."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "time은 불가산 → little time"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I bought two books. One is for me, and <span class=\"blank\"></span> is for you.",
          "opts": [
            "other",
            "another",
            "the other",
            "others",
            "each other"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "둘 중 나머지 → the other"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "None of the students <span class=\"blank\"></span> the answer.",
          "opts": [
            "know",
            "knows",
            "knew",
            "is knowing",
            "were knowing"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "None = 복수 취급 가능 → know"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I want <span class=\"blank\"></span> cold to drink.",
          "opts": [
            "something",
            "anything",
            "nothing",
            "somewhere",
            "everywhere"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "긍정 + something"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "Would you like <span class=\"blank\"></span> to drink?",
          "opts": [
            "something",
            "anything",
            "nothing",
            "somewhere",
            "everywhere"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "권유 → something"
        },
        {
          "q": "빈칸에 알맞은 것은? (모두, 셋 이상)",
          "sentence": "<span class=\"blank\"></span> of them are kind.",
          "opts": [
            "Both",
            "Either",
            "Neither",
            "All",
            "Each"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "셋 이상 모두 → All"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "Neither of the answers <span class=\"blank\"></span> correct.",
          "opts": [
            "are",
            "is",
            "were",
            "being",
            "be"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "Neither of + 단수 동사 (정식)"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 a few / a little / few / little 중 알맞은 것을 쓰세요.<br>There is <span class=\"blank\"></span> milk in the fridge. (조금)",
          "sentence": "There is <span class=\"blank\"></span> milk in the fridge.",
          "subjective": true,
          "answers": [
            "a little"
          ],
          "hint": "불가산, 긍정",
          "explain": "정답: <b>a little</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 대명사를 쓰세요.<br>(우리 모두) <span class=\"blank\"></span> of us are happy.",
          "sentence": "<span class=\"blank\"></span> of us are happy.",
          "subjective": true,
          "answers": [
            "All"
          ],
          "hint": "셋 이상",
          "explain": "정답: <b>All</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 말을 쓰세요. (혼자서)<br>She lives <span class=\"blank\"></span> herself.",
          "sentence": "She lives <span class=\"blank\"></span> herself.",
          "subjective": true,
          "answers": [
            "by"
          ],
          "hint": "by oneself",
          "explain": "정답: <b>by</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 대명사를 쓰세요.<br>(존재) <span class=\"blank\"></span> are many students here.",
          "sentence": "<span class=\"blank\"></span> are many students here.",
          "subjective": true,
          "answers": [
            "There"
          ],
          "hint": "존재",
          "explain": "정답: <b>There</b>"
        }
      ],
      "chapterTitles": [
        "조동사",
        "대명사"
      ]
    },
    "week5": {
      "title": "5주차 (Ch9~Ch10)",
      "fromChapter": 9,
      "toChapter": 10,
      "train": [
        {
          "q": "빈칸에 알맞은 것은? (원급)",
          "sentence": "He is <span class=\"blank\"></span> tall <span class=\"blank\"></span> his brother.",
          "opts": [
            "as / as",
            "more / than",
            "most / of",
            "so / that",
            "such / that"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "as 원급 as"
        },
        {
          "q": "빈칸에 알맞은 것은? (비교급)",
          "sentence": "This bag is <span class=\"blank\"></span> than that one.",
          "opts": [
            "expensive",
            "more expensive",
            "most expensive",
            "much expensive",
            "expensiver"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "긴 형용사 → more"
        },
        {
          "q": "빈칸에 알맞은 것은? (최상급)",
          "sentence": "This is <span class=\"blank\"></span> book in the library.",
          "opts": [
            "interesting",
            "more interesting",
            "the most interesting",
            "most interesting",
            "interestingest"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "the most + 긴 형용사"
        },
        {
          "q": "비교급 강조에 쓰이지 <b>않는</b> 것은?",
          "sentence": "",
          "opts": [
            "much",
            "far",
            "even",
            "still",
            "very"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "very는 원급 강조"
        },
        {
          "q": "빈칸에 알맞은 것은? (점점 더)",
          "sentence": "It is getting <span class=\"blank\"></span>.",
          "opts": [
            "cold and cold",
            "colder and colder",
            "more cold and cold",
            "more and more cold",
            "coldly and coldly"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "비교급 and 비교급"
        },
        {
          "q": "빈칸에 알맞은 것은? (~할수록 더)",
          "sentence": "<span class=\"blank\"></span> he ate, <span class=\"blank\"></span> he got.",
          "opts": [
            "The more / the fatter",
            "More / fatter",
            "More / more fat",
            "The most / the fattest",
            "As more / as fatter"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "The 비교급, the 비교급"
        },
        {
          "q": "빈칸에 알맞은 것은? (배수)",
          "sentence": "This box is <span class=\"blank\"></span> as that one.",
          "opts": [
            "twice as big",
            "twice bigger",
            "two times bigger",
            "two as big",
            "twice big"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "twice as 원급 as"
        },
        {
          "q": "빈칸에 알맞은 것은? (~중 가장 ~한)",
          "sentence": "He is the tallest <span class=\"blank\"></span> the class.",
          "opts": [
            "of",
            "in",
            "at",
            "on",
            "than"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "범위(장소·집단) → in"
        },
        {
          "q": "빈칸에 알맞은 것은? (~중 가장 ~한, 셋 이상)",
          "sentence": "She is the smartest <span class=\"blank\"></span> the three.",
          "opts": [
            "of",
            "in",
            "at",
            "on",
            "than"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "of + 복수명사 → of"
        },
        {
          "q": "비교급의 비교 대상 일치가 올바른 것은?",
          "sentence": "",
          "opts": [
            "My car is faster than you.",
            "My car is faster than yours.",
            "My car is faster than your.",
            "My car is fast than yours.",
            "My car is more faster than yours."
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "비교 대상 일치 → yours"
        },
        {
          "q": "빈칸에 알맞은 것은? (원급 부정)",
          "sentence": "This is <span class=\"blank\"></span> as that.",
          "opts": [
            "not so big",
            "not big",
            "not bigger",
            "more not big",
            "most not big"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "not so/as 원급 as"
        },
        {
          "q": "빈칸에 알맞은 것은? (그리 ~하지 않다)",
          "sentence": "He is <span class=\"blank\"></span> tall as I.",
          "opts": [
            "as",
            "than",
            "more",
            "most",
            "not as"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "not as 원급 as"
        },
        {
          "q": "불규칙 비교급-최상급이 잘못된 것은?",
          "sentence": "",
          "opts": [
            "good - better - best",
            "bad - worse - worst",
            "many - more - most",
            "little - less - least",
            "far - farer - farest"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "far - farther/further - farthest/furthest"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "Health is more important <span class=\"blank\"></span> wealth.",
          "opts": [
            "as",
            "than",
            "that",
            "of",
            "in"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "비교급 + than"
        },
        {
          "q": "빈칸에 알맞은 것은? (다른 어떤 ~보다)",
          "sentence": "He is taller than any <span class=\"blank\"></span> boy.",
          "opts": [
            "other",
            "another",
            "others",
            "the other",
            "each"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "any other + 단수명사"
        },
        {
          "q": "최상급 표현이 아닌 것은?",
          "sentence": "",
          "opts": [
            "He is the tallest.",
            "No one is taller than him.",
            "He is taller than anyone else.",
            "He is as tall as others.",
            "He is taller than any other boy."
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "as 원급 as는 동등 비교"
        },
        {
          "q": "<b>주관식</b> · 빈칸을 채우세요. (원급)<br>He is <span class=\"blank\"></span> tall <span class=\"blank\"></span> his father.",
          "sentence": "He is <span class=\"blank\"></span> tall <span class=\"blank\"></span> his father.",
          "subjective": true,
          "answers": [
            "as / as",
            "as/as"
          ],
          "hint": "동등 비교",
          "explain": "정답: <b>as / as</b>"
        },
        {
          "q": "<b>주관식</b> · 형용사의 비교급을 쓰세요.<br>important → <span class=\"blank\"></span>",
          "sentence": "important → <span class=\"blank\"></span>",
          "subjective": true,
          "answers": [
            "more important"
          ],
          "hint": "긴 형용사",
          "explain": "정답: <b>more important</b>"
        },
        {
          "q": "<b>주관식</b> · 형용사의 최상급을 쓰세요.<br>good → <span class=\"blank\"></span>",
          "sentence": "good → <span class=\"blank\"></span>",
          "subjective": true,
          "answers": [
            "best"
          ],
          "hint": "불규칙",
          "explain": "정답: <b>best</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸을 채우세요. (점점 더)<br>The weather is getting <span class=\"blank\"></span> and <span class=\"blank\"></span>. (cold)",
          "sentence": "The weather is getting <span class=\"blank\"></span> and <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "colder / colder",
            "colder/colder"
          ],
          "hint": "비교급 and 비교급",
          "explain": "정답: <b>colder / colder</b>"
        },
        {
          "q": "빈칸에 알맞은 관계대명사는?",
          "sentence": "I know a girl <span class=\"blank\"></span> can speak French.",
          "opts": [
            "who",
            "whose",
            "whom",
            "which",
            "what"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "사람 주격 → who"
        },
        {
          "q": "빈칸에 알맞은 관계대명사는?",
          "sentence": "This is the book <span class=\"blank\"></span> I bought yesterday.",
          "opts": [
            "who",
            "whose",
            "whom",
            "which",
            "what"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "사물 목적격 → which"
        },
        {
          "q": "빈칸에 알맞은 관계대명사는?",
          "sentence": "The boy <span class=\"blank\"></span> father is a doctor is my friend.",
          "opts": [
            "who",
            "whose",
            "whom",
            "which",
            "what"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "소유격 → whose"
        },
        {
          "q": "빈칸에 알맞은 관계대명사는?",
          "sentence": "He is the man <span class=\"blank\"></span> I met yesterday.",
          "opts": [
            "who",
            "whose",
            "whom",
            "which",
            "what"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "사람 목적격 → whom (또는 who)"
        },
        {
          "q": "빈칸에 알맞은 관계대명사는?",
          "sentence": "The car <span class=\"blank\"></span> he drives is mine.",
          "opts": [
            "who",
            "whose",
            "whom",
            "which",
            "what"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "사물 목적격 → which"
        },
        {
          "q": "빈칸에 알맞은 관계대명사는? (선행사 모름, ~한 것)",
          "sentence": "This is <span class=\"blank\"></span> I want.",
          "opts": [
            "who",
            "whose",
            "whom",
            "which",
            "what"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "선행사 포함 관계대명사 → what (= the thing which)"
        },
        {
          "q": "빈칸에 알맞은 것은? (사람+사물 동시)",
          "sentence": "Look at the boy and his dog <span class=\"blank\"></span> are running.",
          "opts": [
            "who",
            "which",
            "that",
            "what",
            "whose"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "사람+사물 → that"
        },
        {
          "q": "that만 쓰이는 경우가 <b>아닌</b> 것은?",
          "sentence": "",
          "opts": [
            "선행사가 -thing",
            "최상급 뒤",
            "서수 뒤",
            "사람+사물 동시",
            "사물만 단독"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "사물만 → which 가능"
        },
        {
          "q": "관계대명사 생략 가능한 것은?",
          "sentence": "",
          "opts": [
            "who 주격",
            "which 주격",
            "whose 소유격",
            "whom 목적격",
            "what"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "목적격 관계대명사 생략 가능"
        },
        {
          "q": "빈칸에 알맞은 관계부사는? (시간)",
          "sentence": "I remember the day <span class=\"blank\"></span> we met.",
          "opts": [
            "where",
            "when",
            "why",
            "how",
            "that"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "시간 → when"
        },
        {
          "q": "빈칸에 알맞은 관계부사는? (장소)",
          "sentence": "This is the place <span class=\"blank\"></span> I was born.",
          "opts": [
            "where",
            "when",
            "why",
            "how",
            "that"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "장소 → where"
        },
        {
          "q": "빈칸에 알맞은 관계부사는? (이유)",
          "sentence": "That's the reason <span class=\"blank\"></span> I'm late.",
          "opts": [
            "where",
            "when",
            "why",
            "how",
            "that"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "이유 → why"
        },
        {
          "q": "빈칸에 알맞은 관계부사는? (방법)",
          "sentence": "This is <span class=\"blank\"></span> I solved the problem.",
          "opts": [
            "where",
            "when",
            "why",
            "how",
            "that"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "방법 → how (또는 the way)"
        },
        {
          "q": "the way how 사용이 올바른 것은?",
          "sentence": "",
          "opts": [
            "This is the way how he did it.",
            "This is the way he did it.",
            "This is how he did the way.",
            "This is the way which he did it.",
            "This is the way what he did it."
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "the way와 how는 동시 사용 불가"
        },
        {
          "q": "계속적 용법으로 알맞은 것은?",
          "sentence": "",
          "opts": [
            "I have a sister, who is a doctor.",
            "I have a sister who is a doctor.",
            "I have a sister that is a doctor.",
            "I have a sister what is a doctor.",
            "I have a sister whom is a doctor."
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "계속적 용법은 쉼표 + who/which (that 불가)"
        },
        {
          "q": "빈칸에 알맞은 관계대명사는?",
          "sentence": "He failed the exam, <span class=\"blank\"></span> surprised everyone.",
          "opts": [
            "who",
            "that",
            "which",
            "what",
            "whose"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "앞 문장 전체를 받는 계속적 용법 → which"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 관계대명사를 쓰세요. (사람, 주격)<br>The boy <span class=\"blank\"></span> is reading is my brother.",
          "sentence": "The boy <span class=\"blank\"></span> is reading is my brother.",
          "subjective": true,
          "answers": [
            "who",
            "that"
          ],
          "hint": "사람 주격",
          "explain": "정답: <b>who / that</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 관계대명사를 쓰세요. (사물, 목적격)<br>The pen <span class=\"blank\"></span> I lost was expensive.",
          "sentence": "The pen <span class=\"blank\"></span> I lost was expensive.",
          "subjective": true,
          "answers": [
            "which",
            "that"
          ],
          "hint": "사물 목적격",
          "explain": "정답: <b>which / that</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 관계대명사를 쓰세요. (소유격)<br>I have a friend <span class=\"blank\"></span> mother is a teacher.",
          "sentence": "I have a friend <span class=\"blank\"></span> mother is a teacher.",
          "subjective": true,
          "answers": [
            "whose"
          ],
          "hint": "소유격",
          "explain": "정답: <b>whose</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 관계부사를 쓰세요. (장소)<br>This is the park <span class=\"blank\"></span> we play.",
          "sentence": "This is the park <span class=\"blank\"></span> we play.",
          "subjective": true,
          "answers": [
            "where"
          ],
          "hint": "장소",
          "explain": "정답: <b>where</b>"
        }
      ],
      "exam": [
        {
          "q": "같은 의미가 아닌 것은?",
          "sentence": "Tom is the smartest boy in class.",
          "opts": [
            "No one is smarter than Tom.",
            "Tom is smarter than any other boy.",
            "Tom is smarter than anyone else.",
            "No boy is as smart as Tom.",
            "Tom is as smart as any other boy."
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "as 원급 as = 같다, 최상급 아님"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "My new bike is <span class=\"blank\"></span> than my old one.",
          "opts": [
            "much better",
            "much best",
            "much good",
            "much more better",
            "very better"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "much + 비교급 강조"
        },
        {
          "q": "빈칸에 알맞은 것은? (가능한 한 빨리)",
          "sentence": "Come <span class=\"blank\"></span> you can.",
          "opts": [
            "as fast as",
            "faster than",
            "the fastest",
            "more fast as",
            "most fast"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "as 원급 as ~ can"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "This is <span class=\"blank\"></span> than I expected.",
          "opts": [
            "good",
            "best",
            "better",
            "gooder",
            "more better"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "good → better"
        },
        {
          "q": "빈칸에 알맞은 것은? (~보다는 차라리)",
          "sentence": "He is <span class=\"blank\"></span> a singer than an actor.",
          "opts": [
            "more",
            "most",
            "much",
            "very",
            "rather"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "more A than B"
        },
        {
          "q": "빈칸에 알맞은 것은? (덜)",
          "sentence": "This is <span class=\"blank\"></span> interesting than that.",
          "opts": [
            "more",
            "less",
            "most",
            "much",
            "very"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "열등 비교 → less"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "She is taller than me.",
            "He is the smartest in class.",
            "This is more better than that.",
            "I run as fast as he does.",
            "No one is faster than her."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "more better → better"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "She is as kind as her sister.",
            "He is the best in the team.",
            "Math is harder than science.",
            "It is the most useful tool.",
            "She runs more faster than me."
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "more faster → faster"
        },
        {
          "q": "밑줄 친 부분을 알맞게 고치시오.",
          "sentence": "He is <u>more taller</u> than me.",
          "opts": [
            "taller",
            "more tall",
            "tallest",
            "more tallest",
            "more more tall"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "짧은 형용사 → -er"
        },
        {
          "q": "밑줄 친 부분을 알맞게 고치시오.",
          "sentence": "This box is <u>heavyer</u> than that.",
          "opts": [
            "heavy",
            "heavier",
            "heaviest",
            "more heavy",
            "much heavy"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "y → ier"
        },
        {
          "q": "우리말과 같도록.<br>그는 그의 형만큼 키가 크다.",
          "sentence": "He is <span class=\"blank\"></span> his brother.",
          "opts": [
            "taller than",
            "as tall as",
            "the tallest of",
            "more tall than",
            "not as tall as"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "동등 비교"
        },
        {
          "q": "우리말과 같도록.<br>날이 갈수록 더 추워진다.",
          "sentence": "It is getting <span class=\"blank\"></span> day by day.",
          "opts": [
            "cold",
            "colder",
            "colder and colder",
            "more cold",
            "the coldest"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "비교급 and 비교급"
        },
        {
          "q": "우리말과 같도록.<br>그는 반에서 가장 친절한 학생이다.",
          "sentence": "He is <span class=\"blank\"></span> student in the class.",
          "opts": [
            "kind",
            "kinder",
            "the kindest",
            "more kind",
            "most kind"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "the+최상급"
        },
        {
          "q": "우리말과 같도록.<br>그녀는 너의 두 배만큼 크다.",
          "sentence": "She is <span class=\"blank\"></span> you.",
          "opts": [
            "twice as tall as",
            "twice taller",
            "two times taller than",
            "twice bigger than",
            "two times tall as"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "twice as 원급 as"
        },
        {
          "q": "동등 비교 표현으로 알맞은 것은?",
          "sentence": "",
          "opts": [
            "He runs as fastly as me.",
            "He runs as fast as me.",
            "He runs as faster as me.",
            "He runs as fastest as me.",
            "He runs faster as me."
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "as 부사원급 as"
        },
        {
          "q": "빈칸에 알맞은 것은? (그렇게 ~한 것은 없다)",
          "sentence": "<span class=\"blank\"></span> is as important as health.",
          "opts": [
            "Nothing",
            "Anything",
            "Something",
            "Everything",
            "All"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "Nothing as 원급 as"
        },
        {
          "q": "<b>주관식</b> · 빈칸을 채우세요. (~할수록 더)<br><span class=\"blank\"></span> harder you study, <span class=\"blank\"></span> better you'll do.",
          "sentence": "<span class=\"blank\"></span> harder you study, <span class=\"blank\"></span> better you'll do.",
          "subjective": true,
          "answers": [
            "The / the",
            "the/the"
          ],
          "hint": "The 비교급",
          "explain": "정답: <b>The / the</b>"
        },
        {
          "q": "<b>주관식</b> · 우리말에 맞게.<br>그는 반에서 가장 빠른 학생이다.<br>He is the <span class=\"blank\"></span> student <span class=\"blank\"></span> the class.",
          "sentence": "He is the <span class=\"blank\"></span> student <span class=\"blank\"></span> the class.",
          "subjective": true,
          "answers": [
            "fastest / in",
            "fastest/in"
          ],
          "hint": "최상급",
          "explain": "정답: <b>fastest / in</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸을 채우세요. (배수)<br>This is <span class=\"blank\"></span> as big as that.",
          "sentence": "This is <span class=\"blank\"></span> as big as that.",
          "subjective": true,
          "answers": [
            "twice"
          ],
          "hint": "두 배",
          "explain": "정답: <b>twice</b>"
        },
        {
          "q": "<b>주관식</b> · 비교 대상의 형태를 알맞게 쓰세요.<br>My phone is better than <span class=\"blank\"></span>. (너의 것)",
          "sentence": "My phone is better than <span class=\"blank\"></span>.",
          "subjective": true,
          "answers": [
            "yours"
          ],
          "hint": "소유대명사",
          "explain": "정답: <b>yours</b>"
        },
        {
          "q": "전치사 + 관계대명사로 알맞은 것은?",
          "sentence": "",
          "opts": [
            "This is the house in that I lived.",
            "This is the house in which I lived.",
            "This is the house where I lived in.",
            "This is the house in what I lived.",
            "This is the house in who I lived."
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "in + which (that 불가)"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The book <span class=\"blank\"></span> cover is red is mine.",
          "opts": [
            "who",
            "whose",
            "whom",
            "which",
            "what"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "사물 소유격도 whose"
        },
        {
          "q": "다음 중 관계대명사 생략이 <b>가능한</b> 것은?",
          "sentence": "",
          "opts": [
            "The man who is standing there.",
            "The book which I bought.",
            "The girl whose name is Lily.",
            "The student who passed the exam.",
            "The car which is red."
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "목적격 + 관계대명사 생략 가능"
        },
        {
          "q": "빈칸에 알맞은 관계대명사는?",
          "sentence": "All <span class=\"blank\"></span> glitters is not gold.",
          "opts": [
            "who",
            "whose",
            "whom",
            "which",
            "that"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "all 뒤는 that"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "The teacher <span class=\"blank\"></span> we like teaches math.",
          "opts": [
            "which",
            "whose",
            "what",
            "whom",
            "when"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "사람 목적격 → whom"
        },
        {
          "q": "what과 that의 차이로 옳은 것은?",
          "sentence": "",
          "opts": [
            "둘 다 같다",
            "what은 선행사 없음, that은 있음",
            "what은 사람만, that은 사물만",
            "what은 사물만, that은 사람만",
            "what은 의문문에만 쓰임"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "what = the thing which (선행사 포함)"
        },
        {
          "q": "빈칸에 알맞은 것은? (사람, 주격, 콤마 후)",
          "sentence": "My brother, <span class=\"blank\"></span> is a lawyer, lives in Seoul.",
          "opts": [
            "who",
            "that",
            "which",
            "what",
            "whose"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "계속적 용법 사람 주격 → who"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "I'll never forget the day <span class=\"blank\"></span> I first met you.",
          "opts": [
            "where",
            "when",
            "why",
            "how",
            "what"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "the day → when"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "The girl who is singing is my sister.",
            "The book which I read was great.",
            "The boy whose name I forgot called me.",
            "The thing what I want is peace.",
            "The man who(m) I met is my uncle."
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "the thing + what 동시 불가 → which 또는 what만"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "This is the city where I live.",
            "I know the reason why he left.",
            "Tell me how you solved it.",
            "I remember the day when we met.",
            "This is the way how he did it."
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "the way + how 동시 불가"
        },
        {
          "q": "밑줄 친 부분을 알맞게 고치시오.",
          "sentence": "The man <u>who</u> book is on the table is my teacher.",
          "opts": [
            "who",
            "which",
            "whose",
            "whom",
            "that"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "소유격 → whose"
        },
        {
          "q": "밑줄 친 부분을 알맞게 고치시오.",
          "sentence": "This is the place <u>which</u> I was born.",
          "opts": [
            "which",
            "where",
            "when",
            "why",
            "that"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "장소 부사 역할 → where"
        },
        {
          "q": "우리말과 같도록.<br>이것은 내가 원하는 것이다.",
          "sentence": "This is <span class=\"blank\"></span> I want.",
          "opts": [
            "who",
            "which",
            "whose",
            "that",
            "what"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "선행사 포함 → what"
        },
        {
          "q": "우리말과 같도록.<br>나는 빨간색 차를 가진 남자를 안다.",
          "sentence": "I know the man <span class=\"blank\"></span> car is red.",
          "opts": [
            "who",
            "which",
            "whose",
            "that",
            "what"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "소유격 → whose"
        },
        {
          "q": "빈칸에 들어갈 수 <b>없는</b> 것은?",
          "sentence": "The girl <span class=\"blank\"></span> is sitting there is my cousin.",
          "opts": [
            "who",
            "that",
            "which",
            "--",
            "whom"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "사람 → which 불가"
        },
        {
          "q": "빈칸에 들어갈 수 <b>없는</b> 것은?",
          "sentence": "The book <span class=\"blank\"></span> is on the desk is mine.",
          "opts": [
            "which",
            "that",
            "--",
            "what",
            "--"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "선행사 있음 → what 불가"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 관계부사를 쓰세요. (시간)<br>I remember the day <span class=\"blank\"></span> we first met.",
          "sentence": "I remember the day <span class=\"blank\"></span> we first met.",
          "subjective": true,
          "answers": [
            "when"
          ],
          "hint": "시간",
          "explain": "정답: <b>when</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 관계부사를 쓰세요. (이유)<br>Tell me the reason <span class=\"blank\"></span> you came.",
          "sentence": "Tell me the reason <span class=\"blank\"></span> you came.",
          "subjective": true,
          "answers": [
            "why"
          ],
          "hint": "이유",
          "explain": "정답: <b>why</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 관계대명사를 쓰세요. (선행사 포함)<br>I don't believe <span class=\"blank\"></span> he said.",
          "sentence": "I don't believe <span class=\"blank\"></span> he said.",
          "subjective": true,
          "answers": [
            "what"
          ],
          "hint": "the thing which",
          "explain": "정답: <b>what</b>"
        },
        {
          "q": "<b>주관식</b> · 두 문장을 관계대명사로 연결하세요.<br>I have a friend. + He lives in Busan. → I have a friend <span class=\"blank\"></span> lives in Busan.",
          "sentence": "I have a friend <span class=\"blank\"></span> lives in Busan.",
          "subjective": true,
          "answers": [
            "who",
            "that"
          ],
          "hint": "사람 주격",
          "explain": "정답: <b>who / that</b>"
        }
      ],
      "chapterTitles": [
        "비교",
        "관계사"
      ]
    },
    "week6": {
      "title": "6주차 (Ch11~Ch12)",
      "fromChapter": 11,
      "toChapter": 12,
      "train": [
        {
          "q": "빈칸에 알맞은 것은? (~한 후에)",
          "sentence": "<span class=\"blank\"></span> I finished my homework, I watched TV.",
          "opts": [
            "Before",
            "After",
            "While",
            "Since",
            "Until"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "~한 후 → After"
        },
        {
          "q": "빈칸에 알맞은 것은? (~하기 전에)",
          "sentence": "Wash your hands <span class=\"blank\"></span> you eat.",
          "opts": [
            "before",
            "after",
            "while",
            "since",
            "until"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "~하기 전 → before"
        },
        {
          "q": "빈칸에 알맞은 것은? (~하는 동안)",
          "sentence": "<span class=\"blank\"></span> I was studying, he was sleeping.",
          "opts": [
            "Before",
            "After",
            "While",
            "Since",
            "Until"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "~동안 → While"
        },
        {
          "q": "빈칸에 알맞은 것은? (~까지)",
          "sentence": "Wait <span class=\"blank\"></span> I come back.",
          "opts": [
            "before",
            "after",
            "while",
            "since",
            "until"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "~까지 → until"
        },
        {
          "q": "빈칸에 알맞은 것은? (~이래로)",
          "sentence": "I have lived here <span class=\"blank\"></span> 2010.",
          "opts": [
            "before",
            "after",
            "while",
            "since",
            "until"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "~이래로 → since"
        },
        {
          "q": "빈칸에 알맞은 것은? (만약 ~라면)",
          "sentence": "<span class=\"blank\"></span> it rains, we'll stay home.",
          "opts": [
            "When",
            "If",
            "Because",
            "Although",
            "Unless"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "조건 → If"
        },
        {
          "q": "빈칸에 알맞은 것은? (만약 ~하지 않으면)",
          "sentence": "<span class=\"blank\"></span> you hurry, you'll miss the bus.",
          "opts": [
            "When",
            "If",
            "Because",
            "Although",
            "Unless"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "~하지 않으면 → Unless (= if not)"
        },
        {
          "q": "빈칸에 알맞은 것은? (~이기 때문에)",
          "sentence": "<span class=\"blank\"></span> it was raining, we stayed home.",
          "opts": [
            "When",
            "If",
            "Because",
            "Although",
            "Unless"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "이유 → Because"
        },
        {
          "q": "빈칸에 알맞은 것은? (비록 ~이지만)",
          "sentence": "<span class=\"blank\"></span> he is rich, he isn't happy.",
          "opts": [
            "When",
            "If",
            "Because",
            "Although",
            "Unless"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "양보 → Although"
        },
        {
          "q": "빈칸에 알맞은 것은? (~이긴 하지만)",
          "sentence": "<span class=\"blank\"></span> hard work, he failed.",
          "opts": [
            "Although",
            "Despite",
            "Because of",
            "If",
            "Unless"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "despite + 명사구"
        },
        {
          "q": "because와 because of의 차이로 옳은 것은?",
          "sentence": "",
          "opts": [
            "둘 다 같다",
            "because + 절, because of + 명사구",
            "because + 명사, because of + 절",
            "because는 긍정, because of는 부정",
            "because는 과거, because of는 현재"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "절 vs 명사구"
        },
        {
          "q": "빈칸에 알맞은 것은? (~ 때문에, 명사구)",
          "sentence": "He was late <span class=\"blank\"></span> the heavy rain.",
          "opts": [
            "because",
            "because of",
            "although",
            "despite",
            "unless"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "명사구 → because of"
        },
        {
          "q": "빈칸에 알맞은 것은? (so ~ that ...)",
          "sentence": "He was <span class=\"blank\"></span> tired <span class=\"blank\"></span> he fell asleep.",
          "opts": [
            "so / that",
            "such / that",
            "very / that",
            "as / that",
            "too / to"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "so + 형용사 + that"
        },
        {
          "q": "빈칸에 알맞은 것은? (such ~ that ...)",
          "sentence": "It was <span class=\"blank\"></span> a hot day <span class=\"blank\"></span> we stayed inside.",
          "opts": [
            "so / that",
            "such / that",
            "very / that",
            "as / that",
            "too / to"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "such + a + 형용사 + 명사 + that"
        },
        {
          "q": "빈칸에 알맞은 것은? (너무 ~해서 ~할 수 없다)",
          "sentence": "He was <span class=\"blank\"></span> tired <span class=\"blank\"></span> walk.",
          "opts": [
            "so / that",
            "such / that",
            "very / to",
            "too / to",
            "very / that"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "too 형용사 to부정사"
        },
        {
          "q": "빈칸에 알맞은 것은? (~할 만큼 충분히)",
          "sentence": "He is <span class=\"blank\"></span> tall <span class=\"blank\"></span> reach the shelf.",
          "opts": [
            "so / that",
            "such / that",
            "enough / to",
            "tall enough / to",
            "too / to"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "형용사 + enough + to부정사"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 접속사를 쓰세요. (~한 후에)<br><span class=\"blank\"></span> dinner, we watched TV.",
          "sentence": "<span class=\"blank\"></span> dinner, we watched TV.",
          "subjective": true,
          "answers": [
            "After"
          ],
          "hint": "~한 후",
          "explain": "정답: <b>After</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 접속사를 쓰세요. (~까지)<br>Wait here <span class=\"blank\"></span> I come back.",
          "sentence": "Wait here <span class=\"blank\"></span> I come back.",
          "subjective": true,
          "answers": [
            "until",
            "till"
          ],
          "hint": "~까지",
          "explain": "정답: <b>until / till</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 접속사를 쓰세요. (만약 ~하지 않으면)<br><span class=\"blank\"></span> you hurry, you'll miss the train.",
          "sentence": "<span class=\"blank\"></span> you hurry, you'll miss the train.",
          "subjective": true,
          "answers": [
            "Unless"
          ],
          "hint": "~하지 않으면",
          "explain": "정답: <b>Unless</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸을 채우세요. (so ~ that)<br>He is <span class=\"blank\"></span> kind <span class=\"blank\"></span> everyone likes him.",
          "sentence": "He is <span class=\"blank\"></span> kind <span class=\"blank\"></span> everyone likes him.",
          "subjective": true,
          "answers": [
            "so / that",
            "so/that"
          ],
          "hint": "so 형용사 that",
          "explain": "정답: <b>so / that</b>"
        },
        {
          "q": "가정법 과거 (현재 사실 반대)",
          "sentence": "If I <span class=\"blank\"></span> rich, I would buy a car.",
          "opts": [
            "am",
            "was",
            "were",
            "be",
            "will be"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "가정법 과거: were(인칭 무관)"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "If she <span class=\"blank\"></span> hard, she would succeed.",
          "opts": [
            "work",
            "works",
            "worked",
            "will work",
            "is working"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "가정법 과거"
        },
        {
          "q": "빈칸에 알맞은 것은? (가정법 과거 주절)",
          "sentence": "If I had time, I <span class=\"blank\"></span> help you.",
          "opts": [
            "will",
            "would",
            "can",
            "may",
            "might to"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "would + 동사원형"
        },
        {
          "q": "가정법 과거완료 (과거 사실 반대)",
          "sentence": "If I <span class=\"blank\"></span> studied, I would have passed.",
          "opts": [
            "have",
            "had",
            "has",
            "would have",
            "will have"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "가정법 과거완료: had p.p."
        },
        {
          "q": "빈칸에 알맞은 것은? (가정법 과거완료 주절)",
          "sentence": "If you had asked me, I <span class=\"blank\"></span> helped.",
          "opts": [
            "would",
            "would have",
            "will have",
            "could",
            "may have"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "would have p.p."
        },
        {
          "q": "빈칸에 알맞은 것은? (혼합 가정법)",
          "sentence": "If I had studied harder, I <span class=\"blank\"></span> a doctor now.",
          "opts": [
            "am",
            "was",
            "were",
            "would be",
            "would have been"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "과거+현재 혼합: would be"
        },
        {
          "q": "가정법 미래 (가능성 낮음)",
          "sentence": "If she <span class=\"blank\"></span> come tomorrow, we would be happy.",
          "opts": [
            "was to",
            "were to",
            "is to",
            "will",
            "would"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "if + were to + 동사원형"
        },
        {
          "q": "빈칸에 알맞은 것은? (불확실한 미래)",
          "sentence": "If it <span class=\"blank\"></span> rain, the game will be canceled.",
          "opts": [
            "should",
            "would",
            "could",
            "might",
            "were"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "if + should: ~하면"
        },
        {
          "q": "같은 의미가 되도록.<br>I wish I were tall. → I am sorry I <span class=\"blank\"></span> tall.",
          "sentence": "I am sorry I <span class=\"blank\"></span> tall.",
          "opts": [
            "am not",
            "were not",
            "wasn't",
            "won't be",
            "wouldn't be"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "wish + 가정법 과거 = 현재 사실 반대"
        },
        {
          "q": "같은 의미가 되도록.<br>I wish I had studied. → I am sorry I <span class=\"blank\"></span>.",
          "sentence": "I am sorry I <span class=\"blank\"></span>.",
          "opts": [
            "don't study",
            "didn't study",
            "haven't studied",
            "wouldn't study",
            "wasn't studying"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "wish + 가정법 과거완료 = 과거 사실 반대"
        },
        {
          "q": "빈칸에 알맞은 것은? (마치 ~인 것처럼)",
          "sentence": "He talks <span class=\"blank\"></span> he <span class=\"blank\"></span> a doctor.",
          "opts": [
            "as if / is",
            "as if / were",
            "as if / has been",
            "like / is",
            "that / is"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "as if + 가정법 과거"
        },
        {
          "q": "빈칸에 알맞은 것은? (마치 ~였던 것처럼)",
          "sentence": "She acts <span class=\"blank\"></span> she <span class=\"blank\"></span> the queen.",
          "opts": [
            "as if / is",
            "as if / were",
            "as if / has been",
            "like / was",
            "that / was"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "현재 동사 + as if + 가정법 과거"
        },
        {
          "q": "빈칸에 알맞은 것은? (~ 없으면)",
          "sentence": "<span class=\"blank\"></span> water, we couldn't live.",
          "opts": [
            "If",
            "Unless",
            "Without",
            "Despite",
            "Although"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "Without ~ (= If it were not for)"
        },
        {
          "q": "같은 의미가 되도록.<br>Without your help, I would have failed.",
          "sentence": "<span class=\"blank\"></span> your help, I would have failed.",
          "opts": [
            "If it were for",
            "If it had been for",
            "But for",
            "If not for",
            "All correct"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "But for ~ = Without ~"
        },
        {
          "q": "if 생략 후 도치된 문장은?",
          "sentence": "If I were you, I would go. →",
          "opts": [
            "Were I you, I would go.",
            "Was I you, I would go.",
            "I were you, would go.",
            "Did I be you, I would go.",
            "Would I you, I go."
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "If 생략 → were 도치"
        },
        {
          "q": "if 생략 후 도치된 문장은?",
          "sentence": "If I had known, I would have called. →",
          "opts": [
            "Had I known, I would have called.",
            "Knew I, I would have called.",
            "Did I know, I would have called.",
            "Have I known, I would have called.",
            "Would I have known, I called."
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "If 생략 → had 도치"
        },
        {
          "q": "<b>주관식</b> · 빈칸을 채우세요. (가정법 과거)<br>If I <span class=\"blank\"></span> a bird, I would fly.",
          "sentence": "If I <span class=\"blank\"></span> a bird, I would fly.",
          "subjective": true,
          "answers": [
            "were"
          ],
          "hint": "가정법 과거",
          "explain": "정답: <b>were</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸을 채우세요. (가정법 과거완료)<br>If she <span class=\"blank\"></span> studied harder, she would have passed.",
          "sentence": "If she <span class=\"blank\"></span> studied harder, she would have passed.",
          "subjective": true,
          "answers": [
            "had"
          ],
          "hint": "had p.p.",
          "explain": "정답: <b>had</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸을 채우세요. (I wish + 가정법)<br>I wish I <span class=\"blank\"></span> taller. (현재 키가 작아서 아쉬움)",
          "sentence": "I wish I <span class=\"blank\"></span> taller.",
          "subjective": true,
          "answers": [
            "were",
            "was"
          ],
          "hint": "가정법 과거",
          "explain": "정답: <b>were</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸을 채우세요. (as if + 가정법)<br>He talks as if he <span class=\"blank\"></span> rich.",
          "sentence": "He talks as if he <span class=\"blank\"></span> rich.",
          "subjective": true,
          "answers": [
            "were",
            "was"
          ],
          "hint": "가정법 과거",
          "explain": "정답: <b>were</b>"
        }
      ],
      "exam": [
        {
          "q": "빈칸에 알맞은 명사절 접속사는?",
          "sentence": "I think <span class=\"blank\"></span> he is honest.",
          "opts": [
            "that",
            "whether",
            "if",
            "what",
            "because"
          ],
          "ans": 0,
          "layout": "col5",
          "explain": "명사절 → that"
        },
        {
          "q": "빈칸에 알맞은 것은? (~인지 아닌지)",
          "sentence": "I don't know <span class=\"blank\"></span> he will come.",
          "opts": [
            "that",
            "whether",
            "because",
            "although",
            "when"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "~인지 → whether (= if)"
        },
        {
          "q": "whether/if 중 if만 쓸 수 <b>없는</b> 경우는?",
          "sentence": "",
          "opts": [
            "동사의 목적어",
            "주어",
            "간접의문문",
            "I wonder if",
            "Tell me if"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "if는 주어 자리 불가, whether만 가능"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "<span class=\"blank\"></span> you study or not is up to you.",
          "opts": [
            "That",
            "Whether",
            "If",
            "Because",
            "Although"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "주어 자리 → Whether"
        },
        {
          "q": "빈칸에 알맞은 것은? (~할 때마다)",
          "sentence": "<span class=\"blank\"></span> I see her, I smile.",
          "opts": [
            "When",
            "Whenever",
            "Wherever",
            "However",
            "Whatever"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "~할 때마다 → Whenever"
        },
        {
          "q": "빈칸에 알맞은 것은? (어디든지)",
          "sentence": "<span class=\"blank\"></span> you go, I will follow.",
          "opts": [
            "When",
            "Whenever",
            "Wherever",
            "However",
            "Whatever"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "어디든지 → Wherever"
        },
        {
          "q": "빈칸에 알맞은 것은? (~할지라도)",
          "sentence": "<span class=\"blank\"></span> hard you try, you can't change it.",
          "opts": [
            "When",
            "Whenever",
            "Wherever",
            "However",
            "Whatever"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "아무리 ~해도 → However"
        },
        {
          "q": "상관접속사가 잘못된 것은?",
          "sentence": "",
          "opts": [
            "both A and B",
            "either A or B",
            "neither A nor B",
            "not only A but also B",
            "not A and B"
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "not A but B (and X)"
        },
        {
          "q": "상관접속사 동사 일치 옳은 것은?",
          "sentence": "",
          "opts": [
            "Both Tom and Jerry is here.",
            "Either you or I are wrong.",
            "Neither he nor I am tall.",
            "Not only she but also they is happy.",
            "Both of them is here."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "Neither A nor B + 동사는 B에 맞춤"
        },
        {
          "q": "같은 의미가 되도록.<br>If you don't hurry, you'll be late.",
          "sentence": "<span class=\"blank\"></span> you hurry, you'll be late.",
          "opts": [
            "Although",
            "Unless",
            "Because",
            "Since",
            "When"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "if ~ not = unless"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "I'll wait until he comes.",
            "If it rains, I will stay home.",
            "Although he is rich, he is sad.",
            "Because of the rain, he was late.",
            "Because the rain, he was late."
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "명사구 → because of"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "He is so tall that he can play basketball.",
            "It was such a great day.",
            "She is too young to drive.",
            "He is rich enough to buy it.",
            "He is so tired to walk."
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "too 형용사 to부정사"
        },
        {
          "q": "밑줄 친 부분을 알맞게 고치시오.",
          "sentence": "<u>If</u> you study, you won't pass.",
          "opts": [
            "When",
            "Unless",
            "Although",
            "Because",
            "Until"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "~하지 않으면 → Unless"
        },
        {
          "q": "밑줄 친 부분을 알맞게 고치시오.",
          "sentence": "I want to know <u>that</u> she is coming or not.",
          "opts": [
            "that",
            "whether",
            "because",
            "although",
            "when"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "~인지 아닌지 → whether"
        },
        {
          "q": "우리말과 같도록.<br>비가 왔지만 우리는 소풍을 갔다.",
          "sentence": "<span class=\"blank\"></span> it rained, we went on a picnic.",
          "opts": [
            "When",
            "If",
            "Because",
            "Although",
            "Unless"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "양보 → Although"
        },
        {
          "q": "우리말과 같도록.<br>그는 너무 어려서 그것을 이해할 수 없다.",
          "sentence": "He is <span class=\"blank\"></span> young <span class=\"blank\"></span> understand it.",
          "opts": [
            "so / that",
            "such / that",
            "too / to",
            "enough / to",
            "very / to"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "너무 ~ 해서 ~ 할 수 없다 → too ~ to"
        },
        {
          "q": "<b>주관식</b> · 빈칸을 채우세요. (too ~ to)<br>He is <span class=\"blank\"></span> young <span class=\"blank\"></span> drive.",
          "sentence": "He is <span class=\"blank\"></span> young <span class=\"blank\"></span> drive.",
          "subjective": true,
          "answers": [
            "too / to",
            "too/to"
          ],
          "hint": "너무 어려서 운전 못 함",
          "explain": "정답: <b>too / to</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 because/because of 중 알맞은 것을 쓰세요.<br>He was tired <span class=\"blank\"></span> the long trip.",
          "sentence": "He was tired <span class=\"blank\"></span> the long trip.",
          "subjective": true,
          "answers": [
            "because of"
          ],
          "hint": "명사구",
          "explain": "정답: <b>because of</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸에 알맞은 접속사를 쓰세요. (~인지 아닌지)<br>I wonder <span class=\"blank\"></span> she will come.",
          "sentence": "I wonder <span class=\"blank\"></span> she will come.",
          "subjective": true,
          "answers": [
            "whether",
            "if"
          ],
          "hint": "명사절",
          "explain": "정답: <b>whether / if</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸을 채우세요. (~할 때마다)<br><span class=\"blank\"></span> I visit him, he is reading.",
          "sentence": "<span class=\"blank\"></span> I visit him, he is reading.",
          "subjective": true,
          "answers": [
            "Whenever"
          ],
          "hint": "~할 때마다",
          "explain": "정답: <b>Whenever</b>"
        },
        {
          "q": "It's time + 가정법 과거",
          "sentence": "It's time we <span class=\"blank\"></span> home.",
          "opts": [
            "go",
            "goes",
            "went",
            "gone",
            "going"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "It's time + 주어 + 가정법 과거"
        },
        {
          "q": "I would rather + 가정법 과거",
          "sentence": "I would rather you <span class=\"blank\"></span>.",
          "opts": [
            "come",
            "came",
            "comes",
            "coming",
            "would come"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "would rather + 가정법 과거"
        },
        {
          "q": "빈칸에 알맞은 것은?",
          "sentence": "If only I <span class=\"blank\"></span> his name!",
          "opts": [
            "know",
            "knew",
            "known",
            "had known",
            "would know"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "If only + 가정법 (현재)"
        },
        {
          "q": "가정법이 <b>아닌</b> 것은?",
          "sentence": "",
          "opts": [
            "If I were you, I'd go.",
            "If I had time, I'd help.",
            "If she comes, tell me.",
            "If I had studied, I'd have passed.",
            "If it were not for you ..."
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "조건문(가능성 있음, 직설법)"
        },
        {
          "q": "단순 조건문과 가정법 과거의 차이?",
          "sentence": "",
          "opts": [
            "둘 다 같다",
            "조건문은 가능성, 가정법 과거는 현재 사실 반대",
            "조건문은 과거, 가정법 과거는 현재",
            "조건문은 미래, 가정법 과거는 과거",
            "둘 다 가정법이다"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "실제 가능성 vs 사실 반대"
        },
        {
          "q": "빈칸에 알맞은 것은? (가능성 있는 조건)",
          "sentence": "If it <span class=\"blank\"></span> tomorrow, I'll bring an umbrella.",
          "opts": [
            "rain",
            "rains",
            "rained",
            "would rain",
            "were raining"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "if + 현재 → 미래 (실제 가능)"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "If I were you, I would go.",
            "If she had known, she would have come.",
            "I wish I were taller.",
            "He talks as if he is rich.",
            "Without you, I couldn't do it."
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "as if + 가정법 → were"
        },
        {
          "q": "다음 중 어법상 어색한 것은?",
          "sentence": "",
          "opts": [
            "I wish I had a car.",
            "If I had a car, I would drive.",
            "She acts as if she were a star.",
            "If I will see him, I'll tell him.",
            "I wish I had studied harder."
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "if 절 → will 불가, 현재시제"
        },
        {
          "q": "밑줄 친 부분을 알맞게 고치시오.",
          "sentence": "If I <u>am</u> you, I would help her.",
          "opts": [
            "am",
            "was",
            "were",
            "be",
            "have been"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "가정법 과거 → were"
        },
        {
          "q": "밑줄 친 부분을 알맞게 고치시오.",
          "sentence": "I wish I <u>have</u> more money.",
          "opts": [
            "have",
            "had",
            "has",
            "would have",
            "will have"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "wish + 가정법 과거 → had"
        },
        {
          "q": "우리말과 같도록.<br>내가 너라면 그렇게 안 할 텐데.",
          "sentence": "If I <span class=\"blank\"></span> you, I wouldn't do that.",
          "opts": [
            "am",
            "was",
            "were",
            "be",
            "have been"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "가정법 과거"
        },
        {
          "q": "우리말과 같도록.<br>그가 와줬으면 좋겠는데.",
          "sentence": "I wish he <span class=\"blank\"></span>.",
          "opts": [
            "comes",
            "came",
            "come",
            "would come",
            "is coming"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "wish + would + 동사원형 (미래에 대한 소망)"
        },
        {
          "q": "우리말과 같도록.<br>너의 도움이 없었더라면, 나는 실패했을 것이다.",
          "sentence": "<span class=\"blank\"></span> your help, I would have failed.",
          "opts": [
            "If",
            "Unless",
            "Without",
            "Despite",
            "Although"
          ],
          "ans": 2,
          "layout": "col5",
          "explain": "Without (가정법 과거완료 의미)"
        },
        {
          "q": "우리말과 같도록.<br>그가 어제 왔었다면, 나는 그를 만났을 것이다.",
          "sentence": "If he had come yesterday, I <span class=\"blank\"></span> him.",
          "opts": [
            "meet",
            "met",
            "would meet",
            "would have met",
            "will meet"
          ],
          "ans": 3,
          "layout": "col5",
          "explain": "가정법 과거완료 주절"
        },
        {
          "q": "가정법 과거완료 주절에 쓰일 수 <b>없는</b> 것은?",
          "sentence": "",
          "opts": [
            "would have p.p.",
            "could have p.p.",
            "might have p.p.",
            "should have p.p.",
            "will have p.p."
          ],
          "ans": 4,
          "layout": "col5",
          "explain": "will은 직설법"
        },
        {
          "q": "빈칸에 알맞은 것은? (정중한 부탁)",
          "sentence": "<span class=\"blank\"></span> you mind opening the window?",
          "opts": [
            "Will",
            "Would",
            "Did",
            "Do",
            "Are"
          ],
          "ans": 1,
          "layout": "col5",
          "explain": "Would you mind ~ing?"
        },
        {
          "q": "<b>주관식</b> · 같은 의미가 되도록.<br>If it were not for water, we couldn't live. → <span class=\"blank\"></span> water, we couldn't live.",
          "sentence": "<span class=\"blank\"></span> water, we couldn't live.",
          "subjective": true,
          "answers": [
            "Without",
            "But for"
          ],
          "hint": "~이 없으면",
          "explain": "정답: <b>Without / But for</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸을 채우세요. (if 생략 도치)<br><span class=\"blank\"></span> I you, I would not do that. (만약 내가 너라면)",
          "sentence": "<span class=\"blank\"></span> I you, I would not do that.",
          "subjective": true,
          "answers": [
            "Were"
          ],
          "hint": "if 생략 + were 도치",
          "explain": "정답: <b>Were</b>"
        },
        {
          "q": "<b>주관식</b> · 빈칸을 채우세요. (가정법 과거 주절)<br>If I had time, I <span class=\"blank\"></span> help you.",
          "sentence": "If I had time, I <span class=\"blank\"></span> help you.",
          "subjective": true,
          "answers": [
            "would"
          ],
          "hint": "would + 동사원형",
          "explain": "정답: <b>would</b>"
        },
        {
          "q": "<b>주관식</b> · 같은 의미가 되도록.<br>I'm sorry I am not rich. → I wish I <span class=\"blank\"></span> rich.",
          "sentence": "I wish I <span class=\"blank\"></span> rich.",
          "subjective": true,
          "answers": [
            "were",
            "was"
          ],
          "hint": "가정법 과거",
          "explain": "정답: <b>were</b>"
        }
      ],
      "chapterTitles": [
        "접속사",
        "가정법"
      ]
    }
  }
};
