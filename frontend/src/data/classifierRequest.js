const CLASSIFY_REQUEST_BODY = {
    "truncate":"END",
    "examples":[
        {
        "text": "John argues that we should invest more in education, but that's just absurd. He must think we should throw all our money at schools and ignore every other important aspect of our economy.",
        "label": "Strawman"
        },
        {
        "text": "Mark believes in stricter regulations for online privacy, but it sounds like he wants to stifle innovation and destroy the tech industry.",
        "label": "Strawman"
        },
        {
        "text": "Jenny suggests that we should consider alternatives to fossil fuels, but it seems like she wants us all to live in the dark ages without any modern conveniences.",
        "label": "Strawman"
        },
        {
        "text": "Robert argues for animal welfare, but it sounds like he wants us all to become vegans and live on a diet of grass.",
        "label": "Strawman"
        },
        {
        "text": "Sarah supports a more balanced approach to foreign policy, but it seems like she's advocating for complete isolationism and ignoring the rest of the world.",
        "label": "Strawman"
        },
        {
        "text": "Every time I wear my lucky socks, my team wins. Therefore, my lucky socks must be the reason we always win.",
        "label": "False Cause"
        },
        {
        "text": "After I started taking this herbal supplement, my energy levels increased. The supplement must be responsible for my newfound energy",
        "label": "False Cause"
        },
        {
        "text": "Since I began carrying a rabbit's foot keychain, I haven't been in any accidents. Clearly, the rabbit's foot is protecting me.",
        "label": "False Cause"
        },
        {
        "text": "As soon as I stopped eating gluten, my skin cleared up. Therefore, gluten must have been causing my acne",
        "label": "False Cause"
        },
        {
        "text": "I wore my special hat to the job interview, and I got the job. The hat is obviously my good luck charm for interviews.",
        "label": "False Cause"
        },
        {
        "text": "If we allow students to retake tests for a better grade, they'll never learn the importance of studying and our educational system will crumble.",
        "label": "Slippery Slope"
        },
        {
        "text": "If we ban one type of assault rifle, soon they'll take away all our guns, and then we'll be defenseless against tyranny.",
        "label": "Slippery Slope"
        },
        {
        "text": "If we give people free healthcare, it's a slippery slope to a socialist government controlling every aspect of our lives.",
        "label": "Slippery Slope"
        },
        {
        "text": "If we legalize marijuana, soon people will be using even harder drugs, and our society will fall into chaos.",
        "label": "Slippery Slope"
        },
        {
        "text": "If we allow same-sex marriage, what's stopping people from marrying animals or inanimate objects? It's a dangerous slippery slope!",
        "label": "Slippery Slope"
        },
        {
        "text": "The sun sets in the west, casting a warm golden hue across the horizon.",
        "label": "No Fallacy"
        },
        {
        "text": "She studied diligently for months and aced her final exams",
        "label": "No Fallacy"
        },
        {
        "text": "In his spare time, he enjoys painting landscapes and portraits",
        "label": "No Fallacy"
        },
        {
        "text": "The recipe calls for fresh basil, tomatoes, and mozzarella cheese for a classic caprese salad.\n\n",
        "label": "No Fallacy"
        },
        {
        "text": "After a long day at work, he likes to relax by reading a good book.\n",
        "label": "No Fallacy"
        },
        {
        "text": "The company's quarterly report showed a steady increase in profits.\n",
        "label": "No Fallacy"
        },
        {
        "text": "The children laughed and played in the park, enjoying the crisp autumn air.\n",
        "label": "No Fallacy"
        },
        {
        "text": "He listened attentively to his friend's concerns and offered thoughtful advice.\n",
        "label": "No Fallacy"
        },
        {
        "text": "The museum displayed an impressive collection of ancient artifacts from various civilizations.\n",
        "label": "No Fallacy"
        },
        {
        "text": "The orchestra performed a mesmerizing symphony that left the audience in awe.\n",
        "label": "No Fallacy"
        }
    ],
    "model":"embed-english-v2.0",
 }
 

export {CLASSIFY_REQUEST_BODY}