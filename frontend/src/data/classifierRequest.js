const CLASSIFY_REQUEST_BODY = {
    "truncate":"END",
    "examples": [
        {
          "label": "Strawman",
          "text": "Those who oppose stricter gun control want a free-for-all with firearms, turning our streets into the Wild West."
        },
        {
          "label": "Strawman",
          "text": "Supporters of universal healthcare think we should just hand over all our hard-earned money to fund a bloated government bureaucracy."
        },
        {
          "label": "Strawman",
          "text": "People who advocate for animal rights believe we should all become strict vegans and never use animals for any purpose."
        },
        {
          "label": "Strawman",
          "text": "Proponents of stricter immigration policies paint anyone who supports a more compassionate approach as wanting completely open borders."
        },
        {
          "label": "Strawman",
          "text": "Those who argue for lower taxes want to strip away all government services and leave us in a state of anarchy."
        },
        {
          "label": "Strawman",
          "text": "Advocates for renewable energy wants to completely shut down the fossil fuel industry overnight, without considering any transition plan."
        },
        {
          "label": "Strawman",
          "text": "Critics of the education reform proposal say that anyone who supports it wants to abandon all traditional teaching methods."
        },
        {
          "label": "Strawman",
          "text": "Supporters of a woman's right advocates for unrestricted, late-term abortions."
        },
        {
          "label": "Strawman",
          "text": "Those who call for police reform wants to abolish law enforcement entirely, leaving us defenseless against crime."
        },
        {
          "label": "Strawman",
          "text": "Advocates for stricter border control wants to isolate our country completely, ignoring the benefits of immigration."
        },
        {
          "label": "False Cause",
          "text": "Since John started wearing his lucky socks, the team hasn't lost a single game. Those socks must be the reason for our winning streak."
        },
        {
          "label": "False Cause",
          "text": "Every time I wash my car, it rains the next day. Washing my car must be causing the rain."
        },
        {
          "label": "False Cause",
          "text": "I took a vitamin C supplement and my cold went away the next day. Vitamin C must be a miracle cure for colds."
        },
        {
          "label": "False Cause",
          "text": "The stock market crashed after the president was elected. Therefore, the president's policies are to blame for the crash."
        },
        {
          "label": "False Cause",
          "text": "After I got a new job, my old company went bankrupt. I must have been holding them together."
        },
        {
          "label": "False Cause",
          "text": "Whenever I eat ice cream, my headaches go away. Ice cream is obviously a powerful painkiller."
        },
        {
          "label": "False Cause",
          "text": "Ever since I change my hair, my plants have been growing faster. The new hair must bring a good luck to my plants."
        },
        {
          "label": "False Cause",
          "text": "I wore my lucky hat to the exam, and I got an A. The hat must have brought me good luck."
        },
        {
          "label": "False Cause",
          "text": "Every time the neighbor's dog barks, the lights flicker in our house. That dog must be causing electrical interference."
        },
        {
          "label": "False Cause",
          "text": "I started using a new brand of soap, and my hair started growing faster. This soap must have special growth properties."
        },
        {
          "label": "Slippery Slope",
          "text": "If we allow same-sex couples to marry, soon people will want to marry animals and inanimate objects."
        },
        {
          "label": "Slippery Slope",
          "text": "If we ban one type of video game, it won't be long before they start banning all forms of entertainment."
        },
        {
          "label": "Slippery Slope",
          "text": "If we give people free healthcare, it will lead to a socialist government taking over and stripping away our freedoms."
        },
        {
          "label": "Slippery Slope",
          "text": "If we allow students to have more flexible schedules, they'll stop attending school altogether."
        },
        {
          "label": "Slippery Slope",
          "text": "If we legalize marijuana, it's only a matter of time before everyone is using hard drugs."
        },
        {
          "label": "Slippery Slope",
          "text": "If we raise the minimum wage, businesses will start laying off employees and the economy will collapse."
        },
        {
          "label": "Slippery Slope",
          "text": "If we allow individuals to own guns, it will lead to a society where everyone is armed and violent."
        },
        {
          "label": "Slippery Slope",
          "text": "If we permit assisted suicide for terminally ill patients, it will lead to widespread euthanasia of the elderly."
        },
        {
          "label": "Slippery Slope",
          "text": "If we restrict freedom of speech, it's a slippery slope to totalitarian censorship of all dissenting opinions."
        },
        {
          "label": "Slippery Slope",
          "text": "If we start regulating fast food, it won't be long before the government controls everything we eat and do."
        },
        {
          "label": "Ad Hominem",
          "text": "You can't trust John's opinion on politics; he's never been successful in his own career."
        },
        {
          "label": "Ad Hominem",
          "text": "She's just a teenager, what does she know about real-world problems?"
        },
        {
          "label": "Ad Hominem",
          "text": "He's always been a bit eccentric, so his ideas about climate change can't be taken seriously."
        },
        {
          "label": "Ad Hominem",
          "text": "Don't listen to her, she's just a biased journalist with an agenda."
        },
        {
          "label": "Ad Hominem",
          "text": "You're too young to understand the complexities of this issue."
        },
        {
          "label": "Ad Hominem",
          "text": "Why should we consider his proposal? He's known for making bad decisions in the past."
        },
        {
          "label": "Ad Hominem",
          "text": "She's from a different country, so she doesn't really get how things work here."
        },
        {
          "label": "Ad Hominem",
          "text": "You can't trust scientists; they're all just trying to secure more funding for their research."
        },
        {
          "label": "Ad Hominem",
          "text": "He's a rich businessman; of course, he would oppose policies that benefit the working class."
        },
        {
          "label": "Ad Hominem",
          "text": "You're a teacher, what do you know about running a business?"
        },
        {
            "label": "Special Pleading",
            "text": "I know all the evidence points to climate change, but my industry is exempt because it would be too costly to implement green practices."
        },
        {
            "label": "Special Pleading",
            "text": "Everyone else needs to follow the rules, but I should be allowed to park in the handicapped spot because I'm in a rush."
        },
        {
            "label": "Special Pleading",
            "text": "It's not fair to say I'm addicted to my phone just because I use it a lot. I have a good reason for needing to be online all the time."
        },
        {
            "label": "Special Pleading",
            "text": "My son should get special treatment in school because he's gifted and the regular curriculum doesn't challenge him enough."
        },
        {
            "label": "Special Pleading",
            "text": "I shouldn't have to pay taxes like everyone else because I'm a self-made entrepreneur and deserve special privileges."
        },
        {
            "label": "Special Pleading",
            "text": "Sure, lying is generally wrong, but in this case, it's necessary to protect someone's feelings."
        },
        {
            "label": "Special Pleading",
            "text": "I can't be expected to follow the same dietary restrictions as everyone else because of my unique medical condition."
        },
        {
            "label": "Special Pleading",
            "text": "The rules against plagiarism don't apply to me because my ideas are just too important to be confined by academic conventions."
        },
        {
            "label": "Special Pleading",
            "text": "I shouldn't have to do community service for my crime; my circumstances are different from those of other offenders."
        },
        {
            "label": "Special Pleading",
            "text": "I should get an extension on the deadline because I've been going through a tough time, whereas others should manage their time better."
        },
        {
            "label": "Loaded Question",
            "text": "Have you stopped cheating on exams yet?"
        },
        {
            "label": "Loaded Question",
            "text": "When did you decide to stop being so lazy?"
        },
        {
            "label": "Loaded Question",
            "text": "Why do you always take credit for other people's work?"
        },
        {
            "label": "Loaded Question",
            "text": "Have you finally admitted that you were wrong about everything?"
        },
        {
            "label": "Loaded Question",
            "text": "How much longer are you going to be in denial about your problems?"
        },
        {
            "label": "Loaded Question",
            "text": "When did you start caring about anything other than yourself?"
        },
        {
            "label": "Loaded Question",
            "text": "Why won't you admit that you're a terrible friend?"
        },
        {
            "label": "Loaded Question",
            "text": "Have you ever stopped to consider how selfish you really are?"
        },
        {
            "label": "Loaded Question",
            "text": "Why do you insist on causing trouble wherever you go?"
        },
        {
            "label": "Loaded Question",
            "text": "When did you decide to become such a heartless person?"
        },
        {
            "label": "The Gambler Fallacy",
            "text": "I've flipped heads five times in a row, so the next flip must be tails."
        },
        {
            "label": "The Gambler Fallacy",
            "text": "After rolling a six on the dice five times, I'm due for a lower number."
        },
        {
            "label": "The Gambler Fallacy",
            "text": "The roulette wheel has landed on red the last five spins, so it's bound to be black next."
        },
        {
            "label": "The Gambler Fallacy",
            "text": "I've lost the last three hands, so statistically, I'm more likely to win this one."
        },
        {
            "label": "The Gambler Fallacy",
            "text": "The lottery numbers 1, 2, 3, 4, 5, and 6 have never been drawn. They're overdue!"
        },
        {
            "label": "The Gambler Fallacy",
            "text": "I've been dealt a bad hand for the last few rounds, so this time, I'm guaranteed a good one."
        },
        {
            "label": "The Gambler Fallacy",
            "text": "The stock market has been on an upward trend for the past year, so it's bound to crash soon."
        },
        {
            "label": "The Gambler Fallacy",
            "text": "I've been playing this slot machine for hours; it's got to pay out soon."
        },
        {
            "label": "The Gambler Fallacy",
            "text": "Since it's been raining for days, we're bound to have sunshine soon."
        },
        {
            "label": "The Gambler Fallacy",
            "text": "I've been stuck in traffic for a while, so the roads must clear up soon."
        },
        {
            "label": "Bandwagon",
            "text": "Everyone is going to the concert, so it must be an amazing show."
        },
        {
            "label": "Bandwagon",
            "text": "All the cool kids are wearing these sneakers, so you should get a pair too."
        },
        {
            "label": "Bandwagon",
            "text": "Every company is switching to this software, so it must be the best on the market."
        },
        {
            "label": "Bandwagon",
            "text": "Millions of people have downloaded this app, so it must be the most useful one out there."
        },
        {
            "label": "Bandwagon",
            "text": "All the top athletes are using this training method, so it must be the most effective."
        },
        {
            "label": "Bandwagon",
            "text": "This political candidate is leading in all the polls, so they must be the best choice for office."
        },
        {
            "label": "Bandwagon",
            "text": "Everyone in our class is using this study guide, so it must be the key to acing the exam."
        },
        {
            "label": "Bandwagon",
            "text": "All the experts agree that this diet plan is the best, so you should follow it too."
        },
        {
            "label": "Bandwagon",
            "text": "Every major corporation is investing in renewable energy, so it must be the future of power."
        },
        {
            "label": "Bandwagon",
            "text": "The majority of people believe in this superstition, so it must be true."
        },
        {
            "label": "Black or White",
            "text": "You're either with us or against us in this political debate."
        },
        {
            "label": "Black or White",
            "text": "You're either a success or a failure in life; there's no in-between."
        },
        {
            "label": "Black or White",
            "text": "You can either follow this strict diet or be unhealthy and overweight."
        },
        {
            "label": "Black or White",
            "text": "You're either a genius or you're completely incompetent; there's no middle ground."
        },
        {
            "label": "Black or White",
            "text": "Either you believe in every word of this religion, or you're an atheist."
        },
        {
            "label": "Black or White",
            "text": "You're either a total workaholic or you're lazy and unproductive."
        },
        {
            "label": "Black or White",
            "text": "You can either support every policy of this government or you're against the country."
        },
        {
            "label": "Black or White",
            "text": "You're either a natural-born leader or you'll never be successful in management."
        },
        {
            "label": "Black or White",
            "text": "You're either a true fan of this sports team or you're not a fan at all."
        },
        {
            "label": "Black or White",
            "text": "You can either accept everything in this book as fact, or you're rejecting all of it."
        },
        {
            "label": "Begging the Question",
            "text": "The Bible is the inspired word of God because it says so within its pages."
        },
        {
            "label": "Begging the Question",
            "text": "The policy is fair because it treats everyone equally, as it should."
        },
        {
            "label": "Begging the Question",
            "text": "You can trust him because he's always honest and never lies."
        },
        {
            "label": "Begging the Question",
            "text": "Of course, aliens exist; there have been too many UFO sightings."
        },
        {
            "label": "Begging the Question",
            "text": "She is the best candidate for the job because she's the most qualified."
        },
        {
            "label": "Begging the Question",
            "text": "We know the theory is true because it aligns perfectly with our established beliefs."
        },
        {
            "label": "Begging the Question",
            "text": "The restaurant has the best food because it's the most delicious."
        },
        {
            "label": "Begging the Question",
            "text": "The book is a masterpiece because it's written by such a brilliant author."
        },
        {
            "label": "Begging the Question",
            "text": "The movie is a classic because it's a timeless masterpiece."
        },
        {
            "label": "Begging the Question",
            "text": "You should vote for him because he's clearly the best choice."
        },
        {
            "label": "Appeal to Authority",
            "text": "Dr. Smith, a renowned scientist, claims that this new diet is the most effective for weight loss, so it must be true."
        },
        {
            "label": "Appeal to Authority",
            "text": "The president of the company said that our new product is revolutionary, so it must be a game-changer."
        },
        {
            "label": "Appeal to Authority",
            "text": "The famous actor endorsed this brand of sneakers, so they must be the best for athletic performance."
        },
        {
            "label": "Appeal to Authority",
            "text": "Professor Johnson, who has a Ph.D. in psychology, says that this therapy method is the most effective for treating anxiety."
        },
        {
            "label": "Appeal to Authority",
            "text": "The celebrity chef recommends this cooking technique, so it must be the best way to prepare a steak."
        },
        {
            "label": "Appeal to Authority",
            "text": "The expert economist on TV said that this investment strategy is foolproof, so it must be the best way to make money."
        },
        {
            "label": "Appeal to Authority",
            "text": "My coach, who has won multiple championships, insists that this training regimen is the key to success in sports."
        },
        {
            "label": "Appeal to Authority",
            "text": "The popular blogger claims that this skincare product is a miracle worker, so it must be worth every penny."
        },
        {
            "label": "Appeal to Authority",
            "text": "The renowned historian stated that this interpretation of the events is the most accurate, so it must be true."
        },
        {
            "label": "Appeal to Authority",
            "text": "The famous fashion designer said that this style is the latest trend, so it must be the most fashionable."
        },
        {
            "label": "Composition/Division",
            "text": "Each member of the team is an expert, so the team as a whole must be unbeatable."
        },
        {
            "label": "Composition/Division",
            "text": "Since every student in the class is struggling with the subject, the class itself must be too difficult."
        },
        {
            "label": "Composition/Division",
            "text": "All the ingredients in this dish are healthy, so the dish itself must be good for you."
        },
        {
            "label": "Composition/Division",
            "text": "Every brick in this wall is lightweight, so the entire wall must be easy to carry."
        },
        {
            "label": "Composition/Division",
            "text": "Since every piece of this puzzle is small, the entire puzzle must be easy to complete."
        },
        {
            "label": "Composition/Division",
            "text": "Each worker in the factory is skilled, so the factory as a whole must be incredibly efficient."
        },
        {
            "label": "Composition/Division",
            "text": "All the notes in this composition are beautiful, so the composition itself must be a masterpiece."
        },
        {
            "label": "Composition/Division",
            "text": "Since every part of the machine is high-quality, the entire machine must be top-of-the-line."
        },
        {
            "label": "Composition/Division",
            "text": "Every chapter in this book is engaging, so the book itself must be a page-turner."
        },
        {
            "label": "Composition/Division",
            "text": "Since all the players on the team are fast, the team itself must be the fastest."
        },
        {
            "label": "Appeal to Nature",
            "text": "Chemical-free products are always better for your health because they're more natural."
        },
        {
            "label": "Appeal to Nature",
            "text": "Eating only raw, unprocessed foods is the healthiest diet because it's how our ancestors ate."
        },
        {
            "label": "Appeal to Nature",
            "text": "Natural remedies are always safer and more effective than pharmaceutical drugs."
        },
        {
            "label": "Appeal to Nature",
            "text": "Cloth diapers are superior to disposable ones because they're more environmentally friendly."
        },
        {
            "label": "Appeal to Nature",
            "text": "Artificial sweeteners are bad for you, so it's better to use natural sugars like honey."
        },
        {
            "label": "Appeal to Nature",
            "text": "Natural childbirth is the only way to have a truly authentic birthing experience."
        },
        {
            "label": "Appeal to Nature",
            "text": "Going barefoot is better for your feet because it's how humans evolved to walk."
        },
        {
            "label": "Appeal to Nature",
            "text": "Avoiding all technology and living off the grid is the only true way to live in harmony with nature."
        },
        {
            "label": "Appeal to Nature",
            "text": "Natural disasters are just part of the Earth's natural cycle, so we shouldn't try to prevent them."
        },
        {
            "label": "Appeal to Nature",
            "text": "Using herbs and essential oils is always a better choice than relying on modern medicine."
        },
        {
            "label": "Anecdotal",
            "text": "I know someone who smoked for 50 years and never got lung cancer, so smoking can't be that dangerous."
        },
        {
            "label": "Anecdotal",
            "text": "My cousin used this miracle cream and her acne disappeared overnight, so it must work for everyone."
        },
        {
            "label": "Anecdotal",
            "text": "I tried that new diet and lost 10 pounds in a week, so it's definitely the best diet out there."
        },
        {
            "label": "Anecdotal",
            "text": "My uncle never wore a seatbelt and he's never been in a car accident, so seatbelts must not be that important."
        },
        {
            "label": "Anecdotal",
            "text": "I know a person who won the lottery after buying just one ticket, so buying more tickets increases your chances of winning."
        },
        {
            "label": "Anecdotal",
            "text": "My friend swears by this product; it completely cured her insomnia, so it's a guaranteed solution."
        },
        {
            "label": "Anecdotal",
            "text": "I once met someone who claimed they could communicate with aliens, so extraterrestrial life must exist."
        },
        {
            "label": "Anecdotal",
            "text": "My grandfather smoked a pack a day and lived to be 90, so smoking might not be as harmful as they say."
        },
        {
            "label": "Anecdotal",
            "text": "I heard of a person who ate nothing but junk food and lived to be 100, so diet doesn't really matter."
        },
        {
            "label": "Anecdotal",
            "text": "My neighbor's dog is really friendly, so all pit bulls must be safe and gentle breeds."
        },
        {
            "label": "Appeal to Emotion",
            "text": "Think of the children who are suffering from hunger! We must donate to this charity now."
        },
        {
            "label": "Appeal to Emotion",
            "text": "If we don't act now, our future generations will face catastrophic consequences from climate change."
        },
        {
            "label": "Appeal to Emotion",
            "text": "This heartwarming story of a rescued puppy will convince you to adopt, not shop."
        },
        {
            "label": "Appeal to Emotion",
            "text": "Don't you want to support our troops who risk their lives every day for our freedom?"
        },
        {
            "label": "Appeal to Emotion",
            "text": "This heartbreaking image of a starving polar bear shows the urgency of environmental action."
        },
        {
            "label": "Appeal to Emotion",
            "text": "Imagine the joy on their faces when they receive these gifts. Let's give generously this holiday season."
        },
        {
            "label": "Appeal to Emotion",
            "text": "The thought of innocent animals being mistreated is enough to make anyone go vegan."
        },
        {
            "label": "Appeal to Emotion",
            "text": "Don't you want to be part of a movement that changes the world for the better?"
        },
        {
            "label": "Appeal to Emotion",
            "text": "Think about the pain and suffering experienced by those affected by this tragedy. We must do something to help."
        },
        {
            "label": "Appeal to Emotion",
            "text": "This heart-rending video of a child in need will bring tears to your eyes and inspire you to make a difference."
        },
        {
            "label": "The Fallacy Fallacy",
            "text": "You used a slippery slope argument, so your entire point is automatically wrong."
        },
        {
            "label": "The Fallacy Fallacy",
            "text": "Your ad hominem attack on the author discredits your entire essay."
        },
        {
            "label": "The Fallacy Fallacy",
            "text": "You committed a strawman fallacy, so I don't need to consider your position."
        },
        {
            "label": "The Fallacy Fallacy",
            "text": "Since you used a hasty generalization, your entire research paper is worthless."
        },
        {
            "label": "The Fallacy Fallacy",
            "text": "Your argument is based on a false cause, so it can't possibly be true."
        },
        {
            "label": "The Fallacy Fallacy",
            "text": "You employed a red herring, so I won't even bother to engage with your main point."
        },
        {
            "label": "The Fallacy Fallacy",
            "text": "Your appeal to authority doesn't hold water, so your entire presentation lacks credibility."
        },
        {
            "label": "The Fallacy Fallacy",
            "text": "You used circular reasoning, therefore your entire theory is flawed."
        },
        {
            "label": "The Fallacy Fallacy",
            "text": "Your argument contains a composition/division fallacy, so I won't take it seriously."
        },
        {
            "label": "The Fallacy Fallacy",
            "text": "Since you've committed the appeal to nature fallacy, your entire stance on organic foods is misguided."
        },
        {
            "label": "Tu Quoque",
            "text": "You say I should quit smoking, but I've seen you sneak a cigarette before."
        },
        {
            "label": "Tu Quoque",
            "text": "You criticize me for being late, but you were late last week too."
        },
        {
            "label": "Tu Quoque",
            "text": "How can you lecture me about being wasteful when I've seen you leave the lights on all night?"
        },
        {
            "label": "Tu Quoque",
            "text": "You claim I need to exercise more, but you hardly ever go to the gym yourself."
        },
        {
            "label": "Tu Quoque",
            "text": "You're telling me not to gossip, but I've overheard you gossiping about others."
        },
        {
            "label": "Tu Quoque",
            "text": "You're accusing me of overspending, but I've seen you splurge on unnecessary items too."
        },
        {
            "label": "Tu Quoque",
            "text": "You're scolding me for not recycling, but I've noticed you forget to do it sometimes as well."
        },
        {
            "label": "Tu Quoque",
            "text": "You're preaching about healthy eating, but I've seen you indulge in junk food too."
        },
        {
            "label": "Tu Quoque",
            "text": "You're saying I should be more organized, but I've seen your messy desk."
        },
        {
            "label": "Tu Quoque",
            "text": "You're criticizing my work ethic, but I've witnessed you procrastinate on tasks as well."
        },
        {
            "label": "Personal Incredulity",
            "text": "I can't wrap my head around how evolution could be true, so it must be false."
        },
        {
            "label": "Personal Incredulity",
            "text": "The idea that humans could have walked on the moon seems too unbelievable to me, so it didn't happen."
        },
        {
            "label": "Personal Incredulity",
            "text": "I don't understand how vaccines work, so I think they must be dangerous."
        },
        {
            "label": "Personal Incredulity",
            "text": "Quantum mechanics sounds too strange to be true, so it's probably just a bunch of nonsense."
        },
        {
            "label": "Personal Incredulity",
            "text": "The concept of climate change being caused by human activities is too complex for me, so I doubt it's real."
        },
        {
            "label": "Personal Incredulity",
            "text": "I find it hard to believe that life could exist on other planets, so I think the idea of extraterrestrial life is unlikely."
        },
        {
            "label": "Personal Incredulity",
            "text": "The idea of parallel universes is so bizarre that I can't accept it as a valid scientific theory."
        },
        {
            "label": "Personal Incredulity",
            "text": "I don't see how homeopathy can possibly work, so it must be pseudoscience."
        },
        {
            "label": "Personal Incredulity",
            "text": "The Big Bang theory just doesn't make sense to me, so I don't think it's a plausible explanation for the origin of the universe."
        },
        {
            "label": "Personal Incredulity",
            "text": "I can't imagine how ancient civilizations built the pyramids without advanced technology, so there must be some unknown secret behind them."
        },
        {
            "label": "Burden of Proof",
            "text": "You can't prove that ghosts don't exist, so they must be real."
        },
        {
            "label": "Burden of Proof",
            "text": "I say that there's a hidden treasure in my backyard. It's up to you to prove me wrong."
        },
        {
            "label": "Burden of Proof",
            "text": "I believe that aliens have visited Earth. It's on you to provide evidence to the contrary."
        },
        {
            "label": "Burden of Proof",
            "text": "I claim that this crystal has healing properties. You need to disprove it if you don't believe me."
        },
        {
            "label": "Burden of Proof",
            "text": "I insist that unicorns exist somewhere in the world. You have to show me evidence that they don't."
        },
        {
            "label": "Burden of Proof",
            "text": "I'm convinced that time travel is possible, and you have to show me it's not."
        },
        {
            "label": "Burden of Proof",
            "text": "I say that eating this special fruit will extend your life. It's your job to demonstrate otherwise."
        },
        {
            "label": "Burden of Proof",
            "text": "I hold that psychics have real powers. The burden is on you to prove me mistaken."
        },
        {
            "label": "Burden of Proof",
            "text": "I believe in a secret society controlling world events. It's up to you to disprove it."
        },
        {
            "label": "Burden of Proof",
            "text": "I assert that there's a dragon living in my garage. Unless you can prove it's not there, you must accept my claim."
        },
        {
            "label": "Ambiguity",
            "text": "I saw the man with the telescope."
        },
        {
            "label": "Ambiguity",
            "text": "She told her brother she'd help him after dinner."
        },
        {
            "label": "Ambiguity",
            "text": "I saw the bat flying over the baseball field."
        },
        {
            "label": "Ambiguity",
            "text": "The chef said the dish was incredible!"
        },
        {
            "label": "Ambiguity",
            "text": "The horse raced past the barn fell."
        },
        {
            "label": "Ambiguity",
            "text": "They are hunting dogs."
        },
        {
            "label": "Ambiguity",
            "text": "I know a man with a boat."
        },
        {
            "label": "Ambiguity",
            "text": "Visiting relatives can be a nuisance."
        },
        {
            "label": "Ambiguity",
            "text": "I watched a movie with my friend."
        },
        {
            "label": "Ambiguity",
            "text": "I saw a man with a telescope."
        },
        {
            "label": "No True Scotsman",
            "text": "No true environmentalist would ever litter."
        },
        {
            "label": "No True Scotsman",
            "text": "A real sports fan would never miss a game, no matter what."
        },
        {
            "label": "No True Scotsman",
            "text": "A genuine Christian would never behave in such an unkind manner."
        },
        {
            "label": "No True Scotsman",
            "text": "True scientists always follow the scientific method, without exception."
        },
        {
            "label": "No True Scotsman",
            "text": "A real feminist would never criticize other women's choices."
        },
        {
            "label": "No True Scotsman",
            "text": "A true vegetarian would never eat a single bite of meat."
        },
        {
            "label": "No True Scotsman",
            "text": "A real patriot would always support the government, regardless of its actions."
        },
        {
            "label": "No True Scotsman",
            "text": "No real artist would ever use digital tools to create their work."
        },
        {
            "label": "No True Scotsman",
            "text": "A genuine dog lover would never consider getting a cat."
        },
        {
            "label": "No True Scotsman",
            "text": "A true intellectual would never watch reality TV shows."
        },
        {
            "label": "Genetic",
            "text": "You can't trust that scientific research; it was conducted by a university with a liberal bias."
        },
        {
            "label": "Genetic",
            "text": "Don't listen to her; she learned that from a self-help book, and those are all nonsense."
        },
        {
            "label": "Genetic",
            "text": "You can't believe anything that politician says; he's from the opposing party."
        },
        {
            "label": "Genetic",
            "text": "Don't use that software; it was created by a small, unknown company."
        },
        {
            "label": "Genetic",
            "text": "This idea came from a young intern, so it can't be valuable."
        },
        {
            "label": "Genetic",
            "text": "The news outlet reporting on this event is known for sensationalism, so the story must be exaggerated."
        },
        {
            "label": "Genetic",
            "text": "You can't trust that review; it was posted by a competitor trying to discredit our product."
        },
        {
            "label": "Genetic",
            "text": "That restaurant is popular, but it started as a food truck, so it can't be that good."
        },
        {
            "label": "Genetic",
            "text": "I won't listen to that advice; it came from a professor who hasn't been in the industry for years."
        },
        {
            "label": "Genetic",
            "text": "Don't consider that argument; it's just something I heard from my friend's uncle."
        },
        {
            "label": "The Texas Sharpshooter",
            "text": "I always wear my lucky socks to exams, and I've never failed one!"
        },
        {
            "label": "The Texas Sharpshooter",
            "text": "I ate at the same restaurant before my big interview, and I got the job, so it must be the lucky restaurant."
        },
        {
            "label": "The Texas Sharpshooter",
            "text": "Every time I wear this shirt, good things happen; it's my lucky shirt."
        },
        {
            "label": "The Texas Sharpshooter",
            "text": "I parked in the same spot at the mall, and every time I did, I found a great deal."
        },
        {
            "label": "The Texas Sharpshooter",
            "text": "I use the same pen when I take important notes, and I always get an 'A' on the test."
        },
        {
            "label": "The Texas Sharpshooter",
            "text": "I played my favorite song before every soccer game, and we won every match."
        },
        {
            "label": "The Texas Sharpshooter",
            "text": "I wore the same tie to every successful business meeting, so it's my lucky tie."
        },
        {
            "label": "The Texas Sharpshooter",
            "text": "I always drink coffee from the same mug before making important decisions, and they always turn out well."
        },
        {
            "label": "The Texas Sharpshooter",
            "text": "I used the same brand of sunscreen on our family vacation, and nobody got sunburned; it's the miracle sunscreen."
        },
        {
            "label": "The Texas Sharpshooter",
            "text": "I followed the same routine every day of the stock market crash, and I didn't lose any money, so I'm an investment genius."
        },
        {
            "label": "Middle Ground",
            "text": "Since some people think the movie is a masterpiece and others think it's terrible, it must be just average."
        },
        {
            "label": "Middle Ground",
            "text": "Half of the team wants to focus on offense, and the other half wants to focus on defense. Let's split our efforts evenly."
        },
        {
            "label": "Middle Ground",
            "text": "Some say we should ban all sugary drinks, and others say there should be no regulations. Let's just limit the sizes of the drinks."
        },
        {
            "label": "Middle Ground",
            "text": "Half the group wants to stay at home, and the other half wants to travel abroad. Let's settle for a domestic vacation."
        },
        {
            "label": "Middle Ground",
            "text": "Some people want to lower taxes drastically, and others want to increase them significantly. Let's find a middle ground and make a moderate adjustment."
        },
        {
            "label": "Middle Ground",
            "text": "Half of the team wants to work late hours, and the other half wants shorter workdays. Let's compromise and have standard 9-to-5 hours."
        },
        {
            "label": "Middle Ground",
            "text": "Some believe in complete free speech with no restrictions, and others want strict limits. Let's aim for a balanced approach with some limitations."
        },
        {
            "label": "Middle Ground",
            "text": "Some argue for complete automation, while others want to keep human workers. Let's transition to partial automation."
        },
        {
            "label": "Middle Ground",
            "text": "Half of the class wants more homework, and the other half wants less. Let's assign a moderate amount of work."
        },
        {
            "label": "Middle Ground",
            "text": "Some people want to completely overhaul the healthcare system, while others want to maintain the current system. Let's make some incremental reforms."
        },
        {
            "label": "No Fallacy",
            "text": "The sun rises in the east and sets in the west."
        },
        {
            "label": "No Fallacy",
            "text": "The cat curled up in a sunny spot by the window."
        },
        {
            "label": "No Fallacy",
            "text": "Water boils at 100 degrees Celsius at sea level."
        },
        {
            "label": "No Fallacy",
            "text": "The novel captivated readers with its intricate plot."
        },
        {
            "label": "No Fallacy",
            "text": "The oak tree in the backyard provides ample shade."
        },
        {
            "label": "No Fallacy",
            "text": "Penguins are known for their distinctive black and white plumage."
        },
        {
            "label": "No Fallacy",
            "text": "The equation can be solved using basic algebraic principles."
        },
        {
            "label": "No Fallacy",
            "text": "The artist meticulously painted every detail of the landscape."
        },
        {
            "label": "No Fallacy",
            "text": "Birds migrate to warmer climates during the winter months."
        },
        {
            "label": "No Fallacy",
            "text": "The concert hall echoed with beautiful melodies."
        },
        {
            "label": "No Fallacy",
            "text": "The athlete trained rigorously for the upcoming competition."
        },
        {
            "label": "No Fallacy",
            "text": "The chef prepared a delectable three-course meal."
        },
        {
            "label": "No Fallacy",
            "text": "The museum featured an impressive collection of art."
        },
        {
            "label": "No Fallacy",
            "text": "Bees play a crucial role in pollinating flowers."
        },
        {
            "label": "No Fallacy",
            "text": "The river flowed gently through the picturesque valley."
        },
        {
            "label": "No Fallacy",
            "text": "The mathematician made a groundbreaking discovery."
        },
        {
            "label": "No Fallacy",
            "text": "The children laughed and played in the park."
        },
        {
            "label": "No Fallacy",
            "text": "The scientist conducted experiments to test her hypothesis."
        },
        {
            "label": "No Fallacy",
            "text": "The historian meticulously researched the ancient civilization."
        },
        {
            "label": "No Fallacy",
            "text": "The astronaut marveled at the view from space."
        },
        {
            "label": "No Fallacy",
            "text": "The symphony orchestra performed a breathtaking piece."
        },
        {
            "label": "No Fallacy",
            "text": "The mountain range stretched majestically across the horizon."
        },
        {
            "label": "No Fallacy",
            "text": "The novel's ending left readers in suspense."
        },
        {
            "label": "No Fallacy",
            "text": "The butterfly gracefully fluttered from flower to flower."
        },
        {
            "label": "No Fallacy",
            "text": "The mechanic repaired the engine with precision."
        },
        {
            "label": "No Fallacy",
            "text": "The baker's artisanal bread was a hit among customers."
        },
        {
            "label": "No Fallacy",
            "text": "The hiker marveled at the grandeur of the canyon."
        },
        {
            "label": "No Fallacy",
            "text": "The geologist studied rock formations in the desert."
        },
        {
            "label": "No Fallacy",
            "text": "The gardener carefully tended to the blooming roses."
        },
        {
            "label": "No Fallacy",
            "text": "The astronomer observed distant galaxies through a telescope."
        },
        {
            "label": "No Fallacy",
            "text": "The architect designed a modern and functional building."
        },
        {
            "label": "No Fallacy",
            "text": "The poet's verses evoked powerful emotions in the audience."
        },
        {
            "label": "No Fallacy",
            "text": "The teacher inspired her students with passion for learning."
        },
        {
            "label": "No Fallacy",
            "text": "The ocean's waves crashed against the rugged cliffs."
        },
        {
            "label": "No Fallacy",
            "text": "The engineer designed an innovative bridge structure."
        },
        {
            "label": "No Fallacy",
            "text": "The pianist's fingers danced across the keys in a fluid motion."
        },
        {
            "label": "No Fallacy",
            "text": "The doctor provided compassionate care to her patients."
        },
        {
            "label": "No Fallacy",
            "text": "The novelist's vivid descriptions painted a clear picture."
        },
        {
            "label": "No Fallacy",
            "text": "The soccer team practiced diligently for the championship game."
        },
        {
            "label": "No Fallacy",
            "text": "The actor delivered a powerful monologue on stage."
        },
        {
            "label": "No Fallacy",
            "text": "The astronomer's discoveries expanded our understanding of the universe."
        },
        {
            "label": "No Fallacy",
            "text": "The florist arranged a stunning bouquet of flowers."
        },
        {
            "label": "No Fallacy",
            "text": "The ocean breeze carried the scent of salt and seaweed."
        },
        {
            "label": "No Fallacy",
            "text": "The chef's signature dish was a culinary masterpiece."
        },
        {
            "label": "No Fallacy",
            "text": "The researcher analyzed data to draw meaningful conclusions."
        },
        {
            "label": "No Fallacy",
            "text": "The sculptor chiseled away at the block of marble."
        },
        {
            "label": "No Fallacy",
            "text": "The skier glided down the snow-covered slope effortlessly."
        },
        {
            "label": "No Fallacy",
            "text": "The farmer harvested a bountiful crop of vegetables."
        },
        {
            "label": "No Fallacy",
            "text": "The author's eloquent prose resonated with readers."
        },
        {
            "label": "No Fallacy",
            "text": "The conductor led the orchestra with precision and grace."
        },
        {
            "label": "No Fallacy",
            "text": "The nurse provided comfort and care to the patients."
        },
        {
            "label": "No Fallacy",
            "text": "The painter mixed colors on the palette with expertise."
        },
        {
            "label": "No Fallacy",
            "text": "The biologist studied the behavior of a rare species."
        },
        {
            "label": "No Fallacy",
            "text": "The playwright crafted a compelling narrative for the play."
        },
        {
            "label": "No Fallacy",
            "text": "The mechanic fine-tuned the engine to peak performance."
        },
        {
            "label": "No Fallacy",
            "text": "The botanist identified various species of wildflowers."
        },
        {
            "label": "No Fallacy",
            "text": "The dancer moved with grace and precision on stage."
        },
        {
            "label": "No Fallacy",
            "text": "The mountaineer reached the summit after a challenging climb."
        },
        {
            "label": "No Fallacy",
            "text": "The teacher encouraged creativity in the classroom."
        },
        {
            "label": "No Fallacy",
            "text": "The physicist conducted experiments to test his theory."
        }
      ],
    "model":"embed-english-v2.0",
 }
 

export {CLASSIFY_REQUEST_BODY}