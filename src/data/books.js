// 1. Import all images from your assets folder
import img48 from '../assets/48.png';
import imgMars from '../assets/men are from mars.png';
import imgFriends from '../assets/friends.jpg';
import imgSeduction from '../assets/The-Art-of-Seduction.jpg';
import imgHuman from '../assets/human.jpg';
import imgThink from '../assets/think.jpg';
import imgSearch from '../assets/man search.jpg';
import imgHabits from '../assets/the-7-habits-of-highly-effective-people-19.jpg';
import imgIkigai from '../assets/ikigai.jpg';
import imgSapiens from '../assets/sapiens.jpg';
import imgLove from '../assets/love.jpg';

// 2. Export the books array using those imported variables
export const books = [
    {
        id: 1,
        title: "48 Laws of Power",
        author: "Robert Greene",
        image: img48,
        track: "https://audio.jukehost.co.uk/019f5743-2ed4-72f7-9844-0d2af6378797",
        trackName: "Strategic Ambience",
        points: [ "1. Never Outshine the Master", "2. Never put too much Trust in Friends, Learn how to use Enemies", "3. Conceal your Intentions", "4. Always Say Less than Necessary", "5. So Much Depends on Reputation – Guard it with your Life", "6. Court Attention at all Cost", "7. Get others to do the Work for you, but Always Take the Credit", "8. Make other People come to you – use Bait if Necessary", "9. Win through your Actions, Never through Argument", "10. Infection: Avoid the Unhappy and Unlucky", "11. Learn to keep People Dependent on You", "12. Use Selective Honesty and Generosity to Disarm your Victim", "13. When Asking for Help, Appeal to People’s Self-Interest, Never to their Mercy or Gratitude", "14. Pose as a Friend, Work as a Spy", "15. Crush your Enemy Totally", "16. Use Absence to Increase Respect and Honor", "17. Keep Others in Suspended Terror: Cultivate an Air of Unpredictability", "18. Do Not Build Fortresses to Protect Yourself – Isolation is Dangerous", "19. Know Who You’re Dealing with – Do Not Offend the Wrong Person", "20. Do Not Commit to Anyone", "21. Play a Sucker to Catch a Sucker – Seem Dumber than your Mark", "22. Use the Surrender Tactic: Transform Weakness into Power", "23. Concentrate your Forces", "24. Play the Perfect Courtier", "25. Re-create Yourself", "26. Keep your Hands Clean", "27. Play on People’s Need to Believe – Create a Cult-like Following", "28. Enter Action with Boldness", "29. Plan all the way to the End", "30. Make your Achievements seem Effortless", "31. Control the Options: Get Others to Play with the Cards you Deal", "32. Play to People’s Fantasies", "33. Discover Each Man’s Thumbscrew", "34. Be Royal in your Own Fashion: Act like a King to be treated like one", "35. Master the Art of Timing", "36. Disdain Things you cannot have: Ignoring them is the Best Revenge", "37. Create Compelling Spectacles", "38. Think as you like but Behave like others", "39. Stir up Waters to Catch Fish", "40. Despise the Free Lunch", "41. Avoid Stepping into a Great Man’s Shoes", "42. Strike the Shepherd and the Sheep will Scatter", "43. Work on the Hearts and Minds of Others", "44. Disarm and Infuriate with the Mirror Effect", "45. Preach the Need for Change, but Never Reform too much at Once", "46. Never appear too Perfect", "47. Do not go Past the Mark you Aimed for; In Victory, Learn when to Stop", "48. Assume Formlessness" ],
        summary: "Robert Greene’s The 48 Laws of Power serves as a definitive, amoral primer for anyone seeking to understand the hidden mechanics of influence and control. By distilling 3,000 years of history, the book moves beyond traditional ethics to explore how power is actually won, maintained, and defended in social and professional hierarchies. Each law is backed by historical anecdotes featuring figures like Napoleon Bonaparte, Haile Selassie, and Catherine the Great. The core philosophy suggests that power is a game that is always being played; one can either be a master of the rules or a pawn to them. Greene emphasizes the mastery of one's emotions, the strategic use of deception, and the absolute necessity of maintaining a calculated public image. Whether viewed as a defensive manual against manipulation or a guide to climbing the ladder, the book highlights that the appearance of power is often just as vital as power itself."
    },
    {
        id: 2,
        title: "Men Are from Mars, Women Are from Venus",
        author: "John Gray",
        image: imgMars,
        track: "https://audio.jukehost.co.uk/019f5746-4876-70a0-8fa1-bdc01854e607",
        trackName: "Harmony Melodies",
        points:[ "The Mr. Fix-It Syndrome: Men instinctively offer solutions when women just want to be heard", "The Home Improvement Committee: Women's tendency to give unsolicited advice that men perceive as criticism", "The Cave: Men retreat into solitude to solve problems; women feel ignored during this phase", "The Well: Women's self-esteem rises and falls in cycles; they need to 'hit bottom' to rise again", "The Rubber Band Theory: Men have an instinctive cycle of pulling away to regain autonomy before springing back for intimacy", "Scoring Points: Women give equal weight to every gift or gesture, while men think one big gesture earns 'big points'", "The 90/10 Rule: 90% of an argument is usually about past baggage, only 10% is the current issue", "Translating Martian and Venusian: How the same words (e.g., 'I feel like you're never home') mean different things to each gender", "Asking for Support: Men need to be asked directly; they rarely 'just know' what is needed", "The Love Tank: Continuous small acts are better for maintaining a relationship than occasional grand displays", "Avoiding the 'R' Word: How men hear 'Responsibility' as a burden while women see it as 'Relationship' security", "The Art of Listening: Validating feelings without trying to 'correct' the emotion" ],
        summary: "John Gray’s seminal work is built on the premise that men and women have fundamentally different psychological 'languages' and emotional requirements. The book argues that most relationship friction is not caused by a lack of love, but by a lack of translation. Gray introduces the concept of the 'Martian' (male) and 'Venusian' (female) archetypes to explain why men value competence and power while women value communication and feelings. By understanding that a man’s withdrawal into his 'Cave' is a biological need for autonomy rather than a rejection, and that a woman’s need to talk is a process of emotional cleansing rather than a request for a technical solution, couples can stop trying to change their partners and start supporting them. The book provides a framework for 'Scorekeeping,' teaching men that small, frequent acts of kindness—like a hug or a short text—carry as much weight in a woman's mind as an expensive vacation, ultimately helping both genders feel understood and appreciated."},
    {
        id: 3,
        title: "How to Win Friends and Influence People",
        author: "Dale Carnegie",
        image: imgFriends,
        track: "https://audio.jukehost.co.uk/019f5746-f540-736e-bd02-6c20f5a098f5",
        trackName: "Charisma Beats",
        points: [ "Don't criticize, condemn, or complain: Criticism is futile because it puts a person on the defensive", "Give honest and sincere appreciation: The deepest urge in human nature is the desire to be important", "Arouse in the other person an eager want: Talk about what they want and show them how to get it", "Become genuinely interested in other people: You make more friends by being interested than by being interesting", "Smile: A messenger of your goodwill that brightens the lives of all who see it", "Remember Names: A person’s name is the sweetest and most important sound in any language", "Be a good listener: Encourage others to talk about themselves to build deep rapport", "Talk in terms of the other person’s interests: Focus on their 'island' of topics", "The only way to get the best of an argument is to avoid it: You can't win an argument; even if you win, you lose", "Never say 'You're wrong': Use diplomacy and respect for the other person’s opinion", "If you are wrong, admit it quickly and emphatically: It clears the air and builds trust", "Get the other person saying 'Yes, Yes' immediately: Use the Socratic method to build momentum", "Let the other person feel the idea is theirs: People have more faith in ideas they discover themselves", "Appeal to the nobler motives: Assume people are sincere and want to do the right thing", "Dramatize your ideas: The truth isn't enough; it must be made vivid and interesting"],
        summary: "Carnegies masterpiece is the ultimate handbook for 'soft power.' Its core philosophy is that success in any endeavor is 15% professional knowledge and 85% the ability to lead and understand people. The book teaches that by subduing your own ego and making others feel genuinely important, you dissolve resistance and gain willing cooperation. It moves away from manipulation and toward a strategy of radical empathy, arguing that the most influential people are those who can truly see the world from another person's perspective."
    },
    {
        id: 4,
        title: "Art of Seduction",
        author: "Robert Greene",
        image: imgSeduction,
        track: "https://audio.jukehost.co.uk/019f574f-e89d-73fb-b343-69aea5d2f0b2",
        trackName: "Mystique Vibes",
        points: [ "The Siren: Represents an escape from the mundane; she is theatrical, sensually visual, and elusive", "The Rake: A man who adores women with an infectious, unrestrained desire; his reputation adds to his lure", "The Ideal Lover: Identifies what is missing in a person's life and reflects it back to them as a fantasy", "The Dandy: Plays with gender roles and creates a striking, ambiguous, and aesthetic persona", "The Natural: Reclaims the lost innocence and spontaneity of childhood to make others feel at ease", "The Coquette: Masters the push-pull dynamic, alternating between total attention and cold distance", "The Charmer: Makes others feel better about themselves through flattery and active listening", "The Charismatic: Radiates an inner intensity and a grand vision that inspires a cult-like following", "Enter Their Spirit: Adapt to their moods and interests to lower their defenses", "Create Temptation: Hint at fulfilling a secret desire without ever fully promising it", "The Mirror Effect: Mimic your target’s behavior to make them feel understood and connected", "Stir Anxiety and Discontent: A person who is perfectly happy cannot be seduced; you must create a need" ],
        summary: "This is a study of social psychology disguised as a book on romance. Greene argues that seduction is a form of power that allows you to bypass people's rational minds and target their emotions. He breaks the process into two parts: developing a seductive character and executing the twenty-four maneuvers of the 'Seductive Process.' The book suggests that the greatest seducers are 'amoral' in their tactics but deeply sensitive to the insecurities and fantasies of their targets."
    },
    {
        id: 5,
        title: "The Laws of Human Nature",
        author: "Robert Greene",
        image: imgHuman,
        track: "https://audio.jukehost.co.uk/019f5757-6f9c-7183-9910-e1d62e9a96f8",
        trackName: "Observation Mode",
        points: [ "The Law of Irrationality: We think we are rational, but we are actually governed by primitive emotions", "The Law of Narcissism: Learn to transform self-love into empathy to read others accurately", "The Law of Role-Playing: People wear masks; learn to read non-verbal cues and 'leaked' emotions", "The Law of Compulsive Behavior: Character is fate; look at a person’s patterns, not their words", "The Law of Covetousness: Become an elusive object of desire; people want what they cannot have", "The Law of Defensiveness: To influence, lower people's resistance by validating their self-opinion", "The Law of Envy: Recognize the signs of 'The Shadow' and learn to deflect the envy of others", "The Law of Grandiosity: Stay grounded in reality; don't let a small success lead to a god complex", "The Law of Gender Rigidity: Reconnect with the masculine/feminine sides of your personality", "The Law of Conformity: Understand the 'Group Effect'—people become more irrational in crowds", "The Law of Aggression: Recognize chronic aggressors and use passive-aggressive defense if needed", "The Law of Death Denial: Embrace your mortality to live with more urgency and purpose" ],
        summary: "Greene's most mature work, this book is an 18-chapter manual on 'social intelligence.' It encourages the reader to become a 'strategic observer' of the human species. By understanding that human behavior is driven by evolutionary biological forces—like the need for status and the fear of the group—we can stop taking people's actions personally and start predicting their behavior with cold accuracy. It is a guide to mastering the 'dark' side of our own nature while navigating the toxic traits of others."
    },
    {
        id: 6,
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        image: imgThink,
        track: "https://audio.jukehost.co.uk/019f5759-9e51-7156-a9eb-1b1611f78a56",
        trackName: "Cognitive Flow",
        points: [ "System 1 (The Intuitive): Fast, automatic, emotional, and prone to jumping to conclusions", "System 2 (The Deliberative): Slow, logical, lazy, and requires significant mental energy", "Cognitive Ease vs. Strain: We believe things are true more easily if they are easy to read or hear", "The Anchoring Effect: The first number we hear influences our subsequent estimates significantly", "Availability Heuristic: We judge the frequency of an event by how easily examples come to mind", "Loss Aversion: The pain of losing $100 is twice as powerful as the joy of gaining $100", "The Framing Effect: How a choice is presented (90% survival vs. 10% mortality) changes the decision", "Sunk Cost Fallacy: Staying in a failing situation because we’ve already invested so much", "The Peak-End Rule: We judge experiences by their most intense point and their ending, not their total duration", "WYSIATI (What You See Is All There Is): System 1 ignores what it doesn't know and builds a story on limited facts" ],
        summary: "Nobel Prize winner Daniel Kahneman explains the psychological biases that affect our decision-making. He introduces two systems: System 1 (automatic) and System 2 (logical)."
    },
    {
        id: 7,
        title: "Man’s Search for Meaning",
        author: "Viktor Frankl",
        image: imgSearch,
        track: "https://audio.jukehost.co.uk/019f575b-0dd3-70da-8afe-c3e3fd272cb0",
        trackName: "Resilience Piano",
        points: [ "The Existential Vacuum: The feeling of boredom and purposelessness that leads to despair", "Logotherapy: A therapy based on the belief that meaning, not pleasure, is the primary human drive", "The Last Human Freedom: The ability to choose one's attitude in any given set of circumstances", "Finding Meaning in Suffering: Transforming a personal tragedy into a triumph", "The 'Why' of Living: If you have a 'Why,' you can bear almost any 'How'", "Meaning through Work: Creating something or doing a deed", "Meaning through Love: Experiencing another human being in their uniqueness", "Paradoxical Intention: Overcoming fear by wishing for the very thing you fear", "Apathy as a Defense Mechanism: How the mind shuts down to survive extreme trauma" ],
        summary: "Viktor Frankl reflects on his experiences in Nazi concentration camps. He argues that the primary human drive is not pleasure or power, but the discovery of purpose."
    },
    {
        id: 8,
        title: "7 Habits of Highly Effective People",
        author: "Stephen Covey",
        image: imgHabits,
        track: "https://audio.jukehost.co.uk/019f575d-d969-72ec-bf90-5d7f2fd81a5a",
        trackName: "Effective Mindset",
        points:[ "Habit 1: Be Proactive: Take responsibility for your life; don't blame conditions or conditioning", "Habit 2: Begin with the End in Mind: Create a personal mission statement; visualize your future", "Habit 3: Put First Things First: Manage your time based on importance (Quadrant II), not just urgency", "Habit 4: Think Win-Win: Seek mutually beneficial solutions in all human interactions", "Habit 5: Seek First to Understand, Then to be Understood: Master the art of empathetic listening", "Habit 6: Synergize: Value the differences in others to create a whole that is greater than the sum of parts", "Habit 7: Sharpen the Saw: Continuously renew yourself physically, mentally, spiritually, and socially", "The Circle of Influence: Focus your energy on things you can change, not things you can't", "The Emotional Bank Account: Build trust by making deposits of kindness and keeping promises", "Interdependence: Moving from 'I' to 'We' to achieve greater results" ] ,
        summary: "Stephen Covey presents a principle-centered approach to personal and professional effectiveness. He argues that lasting success comes from a foundation of character."
    },
    {
        id: 9,
        title: "Ikigai",
        author: "García & Miralles",
        image: imgIkigai,
        track: "https://audio.jukehost.co.uk/019f5764-a069-721c-a350-09afbc3a9274",
        trackName: "Zen Nature",
        points: [ "The 80% Rule (Hara Hachi Bu): Stop eating when you are 80% full to maintain long-term health", "The Flow State: Get lost in tasks that challenge you just enough to stay engaged", "Micro-Flow: Finding joy in mundane tasks like washing dishes or gardening", "The Anti-Aging Secret: Keep the mind active and avoid the stress of 'urgent' modern life", "Resilience and Wabi-Sabi: Appreciating the beauty of imperfection and the cycle of life", "Moai: Developing a social support group that provides a sense of belonging", "Low-Intensity Exercise: Consistent movement (like Radio Taiso) is better than intense bursts", "The Four Circles: What you love, what you are good at, what the world needs, what you can be paid for", "Never Retire: Keep doing what you love as long as your health allows" ],
        summary: "This book explores the Japanese secret to a long and happy life. 'Ikigai' translates to 'a reason for being' or the reason you get out of bed in the morning."
    },
    {
        id: 10,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        image: imgSapiens,
        track: "https://audio.jukehost.co.uk/019f576b-2606-7186-b42d-d7000af8de62",
        trackName: "Evolutionary Bass",
        points: ["Cognitive Revolution", "Shared fictions", "Agricultural fraud", "Mass cooperation", "Empire success", "Scientific revolution", "Capitalism as religion", "Happiness vs Evolution", "End of Sapiens", "Powerful but directionless"],
        summary: "Yuval Noah Harari traces the history of our species from the Stone Age to the modern day. He argues that what makes Sapiens unique is our ability to believe in things that don't physically exist."
    },
    {
        id: 11,
        title: "The Five Love Languages",
        author: "Gary Chapman",
        image: imgLove,
        track: "https://audio.jukehost.co.uk/019f5770-9d8b-727f-bcd9-bda47a53b2e4",
        trackName: "Heart Strings",
        points: [ "Words of Affirmation: Verbal compliments, words of appreciation, and encouragement", "Quality Time: Giving someone your undivided attention (not just sitting in the same room)", "Receiving Gifts: Visual representations of love; the thought and effort count more than the price", "Acts of Service: Doing things you know your partner would like you to do (cooking, cleaning, etc.)", "Physical Touch: Hugs, kisses, holding hands, and sexual intimacy", "The Love Tank: A metaphor for emotional health; when the tank is full, the relationship thrives", "Your Primary Language: Most people have one language that makes them feel most loved", "The Language of Children: Identifying how kids express and need love to prevent behavioral issues", "Choosing to Love: Love is not just a feeling; it is a discipline of speaking your partner's language" ],
        summary: "Dr. Gary Chapman argues that people often miss each other's expressions of love because they speak different 'languages.' Identifying these languages helps bridge emotional gaps."
    }
];
